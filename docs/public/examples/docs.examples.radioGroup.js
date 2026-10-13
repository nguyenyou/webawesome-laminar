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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),ee=/* @__PURE__ */ new WeakMap;var te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ee.set(t,e))}return e}toString(){return this.cssText}};const ne=e=>new te(typeof e==`string`?e:e+``,void 0,m),h=(e,...t)=>new te(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),re=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ie=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ne(t)})(e):e,{is:ae,defineProperty:oe,getOwnPropertyDescriptor:se,getOwnPropertyNames:ce,getOwnPropertySymbols:le,getPrototypeOf:ue}=Object,de=globalThis,fe=de.trustedTypes,pe=fe?fe.emptyScript:``,me=de.reactiveElementPolyfillSupport,he=(e,t)=>e,ge={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?pe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_e=(e,t)=>!ae(e,t),ve={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol(`metadata`),de.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&oe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(he(`elementProperties`)))return;let e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he(`properties`))){let e=this.properties,t=[...ce(e),...le(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ie(e))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ge:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ge:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??_e)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:`open`},ye[he(`elementProperties`)]=/* @__PURE__ */ new Map,ye[he(`finalized`)]=/* @__PURE__ */ new Map,me?.({ReactiveElement:ye}),(de.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const be=globalThis,xe=e=>e,Se=be.trustedTypes,Ce=Se?Se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,we=`$lit$`,Te=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee=`?`+Te,De=`<${Ee}>`,Oe=document,ke=()=>Oe.createComment(``),Ae=e=>e===null||typeof e!=`object`&&typeof e!=`function`,je=Array.isArray,Me=e=>je(e)||typeof e?.[Symbol.iterator]==`function`,Ne=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,Ie=/>/g,Le=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Re=/'/g,ze=/"/g,Be=/^(?:script|style|textarea|title)$/i,Ve=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),He=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),Ue=/* @__PURE__ */ new WeakMap,We=Oe.createTreeWalker(Oe,129);function Ge(e,t){if(!je(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ce===void 0?t:Ce.createHTML(t)}const Ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Pe?c[1]===`!--`?o=Fe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Le):(Be.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Le):o=Ie:o===Le?c[0]===`>`?(o=i??Pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Le:c[3]===`"`?ze:Re):o===ze||o===Re?o=Le:o===Fe||o===Ie?o=Pe:(o=Le,i=void 0);let d=o===Le&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Pe?n+De:l>=0?(r.push(s),n.slice(0,l)+we+n.slice(l)+Te+d):n+Te+(l===-2?t:d)}return[Ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var qe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ke(t,n);if(this.el=e.createElement(l,r),We.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=We.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(we)){let t=u[o++],n=i.getAttribute(e).split(Te),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Qe:r[1]===`?`?$e:r[1]===`@`?et:Ze}),i.removeAttribute(e)}else e.startsWith(Te)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Be.test(i.tagName)){let e=i.textContent.split(Te),t=e.length-1;if(t>0){i.textContent=Se?Se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ke()),We.nextNode(),c.push({type:2,index:++a});i.append(e[t],ke())}}}else if(i.nodeType===8){if(i.data===Ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Te,e+1))!==-1;)c.push({type:7,index:a}),e+=Te.length-1}}a++}}static createElement(e,t){let n=Oe.createElement(`template`);return n.innerHTML=e,n}};function Je(e,t,n=e,r){if(t===He)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ae(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Je(e,i._$AS(e,t.values),i,r)),t}var Ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Oe).importNode(t,!0);We.currentNode=r;let i=We.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Xe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new tt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=We.nextNode(),a++)}return We.currentNode=Oe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Xe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),Ae(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==He&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=qe.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ye(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new qe(e)),t}k(t){je(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ke()),this.O(ke()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=xe(e).nextSibling;xe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Je(this,e,t,0),a=!Ae(e)||e!==this._$AH&&e!==He,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Je(this,r[n+o],t,o),s===He&&(s=this._$AH[o]),a||=!Ae(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Qe=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},$e=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},et=class extends Ze{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??g)===He)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},tt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};const nt={M:we,P:Te,A:Ee,C:1,L:Ke,R:Ye,D:Me,V:Je,I:Xe,H:Ze,N:$e,U:et,B:Qe,F:tt},rt=be.litHtmlPolyfillSupport;rt?.(qe,Xe),(be.litHtmlVersions??=[]).push(`3.3.3`);const it=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Xe(t.insertBefore(ke(),e),e,void 0,n??{})}return i._$AI(e),i},at=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var ot=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};ot._$litElement$=!0,ot.finalized=!0,at.litElementHydrateSupport?.({LitElement:ot});const st=at.litElementPolyfillSupport;st?.({LitElement:ot}),(at.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},lt={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:_e},ut=(e=lt,t,n)=>{
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
var mt=h`
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
var Tt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Et=h`
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
`,Dt=h`
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
`,Ot=h`
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
if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:qt}),Xt=/* @__PURE__ */ new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Jt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(Ve);
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
var Qt=h`
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
super(...arguments),this.localize=new Vt(this)}render(){return Ve`
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
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},nn=h`
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
var Tn=Symbol(),En=Symbol(),Dn,On=/* @__PURE__ */ new Map,y=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ve`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Tn:En}catch{return En}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Tn;Dn||=new DOMParser;let r=Dn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Tn}catch{return Tn}}}connectedCallback(){super.connectedCallback(),yn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bn(this)}async getIconSource(){let e=xn(this.library),t=this.family||Sn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?xn(this.library):void 0;if(!e){this.svg=null;return}let r=On.get(e);r||(r=this.resolveIcon(e,n),On.set(e,r));let i=await r;if(i===En&&On.delete(e),e===(await this.getIconSource()).url){if(wn(i))this.svg=i;else switch(i){case En:case Tn:this.svg=null,this.dispatchEvent(new en);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new tn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=xn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ve`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=nn,s([dt()],y.prototype,`svg`,2),s([_({reflect:!0})],y.prototype,`name`,2),s([_({reflect:!0})],y.prototype,`family`,2),s([_({reflect:!0})],y.prototype,`variant`,2),s([_({reflect:!0})],y.prototype,`canvas`,2),s([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),s([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),s([_()],y.prototype,`src`,2),s([_()],y.prototype,`label`,2),s([_({reflect:!0})],y.prototype,`library`,2),s([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),s([_({type:String,reflect:!0})],y.prototype,`flip`,2),s([_({type:String,reflect:!0})],y.prototype,`animation`,2),s([kt(`label`)],y.prototype,`handleLabelChange`,1),s([kt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=s([ct(`wa-icon`)],y);var kn=/* @__PURE__ */ t({default:()=>v}),An=h`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`,jn=(e={})=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},Mn=h`
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
;let Nn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Pn(e=``){return`${e}${Nn()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends xt{constructor(){super(),this.hasSlotController=new Tt(this,`hint`,`label`),this.label=``,this.hint=``,this.name=null,this.disabled=!1,this.orientation=`vertical`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{let t=e.target.closest(`wa-radio`);if(!t||t.disabled||t.forceDisabled||this.disabled)return;let n=this.value;this.value=t.value,t.checked=!0;let r=this.getAllRadios();for(let e of r)t!==e&&(e.checked=!1,e.setAttribute(`tabindex`,`-1`));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})},this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleRadioClick)}static get validators(){let e=[jn({validationElement:Object.assign(document.createElement(`input`),{required:!0,type:`radio`,name:Pn(`__wa-radio`)})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e==`number`&&(e=String(e)),this.valueHasChanged=!0,this._value=e}handleSizeChange(){wt(this.localName,this.size)}get validationTarget(){let e=this.querySelector(`:is(wa-radio):not([disabled])`);if(e)return e}updated(e){(e.has(`disabled`)||e.has(`size`)||e.has(`value`)||e.has(`defaultValue`))&&this.syncRadioElements()}formResetCallback(...e){this._value=null,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll(`wa-radio`)]}handleLabelClick(){this.focus()}async syncRadioElements(){let e=this.getAllRadios();if(e.forEach((t,n)=>{this.size&&t.setAttribute(`size`,this.size),t.toggleAttribute(`data-wa-radio-horizontal`,this.orientation!==`vertical`),t.toggleAttribute(`data-wa-radio-vertical`,this.orientation===`vertical`),t.toggleAttribute(`data-wa-radio-first`,n===0),t.toggleAttribute(`data-wa-radio-inner`,n!==0&&n!==e.length-1),t.toggleAttribute(`data-wa-radio-last`,n===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=!e.disabled&&e.value===this.value})),this.disabled)e.forEach(e=>{e.tabIndex=-1});else{let t=e.filter(e=>!e.disabled),n=t.find(e=>e.checked);t.length>0&&(n?t.forEach(e=>{e.tabIndex=e.checked?0:-1}):t.forEach((e,t)=>{e.tabIndex=t===0?0:-1})),e.filter(e=>e.disabled).forEach(e=>{e.tabIndex=-1})}}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key)||this.disabled)return;let t=this.getAllRadios().filter(e=>!e.disabled);if(t.length<=0)return;e.preventDefault();let n=this.value,r=t.find(e=>e.checked)??t[0],i=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,a=t.indexOf(r)+i;a||=0,a<0&&(a=t.length-1),a>t.length-1&&(a=0);let o=t.some(e=>e.tagName.toLowerCase()===`wa-radio-button`);this.getAllRadios().forEach(e=>{e.checked=!1,o||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,o?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t;return Ve`
      <fieldset
        part="form-control"
        class=${Gt({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Gt({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Gt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </fieldset>
    `}};b.css=[Et,Mn,An],b.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},s([pt(`slot:not([name])`)],b.prototype,`defaultSlot`,2),s([_()],b.prototype,`label`,2),s([_({attribute:`hint`})],b.prototype,`hint`,2),s([_({reflect:!0})],b.prototype,`name`,2),s([_({type:Boolean,reflect:!0})],b.prototype,`disabled`,2),s([_({reflect:!0})],b.prototype,`orientation`,2),s([dt()],b.prototype,`value`,1),s([_({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),s([_({reflect:!0})],b.prototype,`size`,2),s([kt(`size`)],b.prototype,`handleSizeChange`,1),s([_({type:Boolean,reflect:!0})],b.prototype,`required`,2),s([_({type:Boolean,attribute:`with-label`})],b.prototype,`withLabel`,2),s([_({type:Boolean,attribute:`with-hint`})],b.prototype,`withHint`,2),b=s([ct(`wa-radio-group`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=h`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`,In=class extends xt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(),this.checked=!1,this.forceDisabled=!1,this.appearance=`default`,this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener(`click`,this.handleClick)}handleSizeChange(){wt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.tabIndex=0,this.setAttribute(`aria-disabled`,this.disabled||this.forceDisabled?`true`:`false`)}updated(e){if(super.updated(e),e.has(`checked`)&&(this.customStates.set(`checked`,this.checked),this.setAttribute(`aria-checked`,this.checked?`true`:`false`),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has(`disabled`)||e.has(`forceDisabled`)){let e=this.disabled||this.forceDisabled;this.customStates.set(`disabled`,e),this.setAttribute(`aria-disabled`,e?`true`:`false`),this.tabIndex=e?-1:this.checked?0:-1}}setValue(){}render(){return Ve`
      <span part="control" class="control">
        ${this.checked?Ve`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:``}
      </span>

      <slot part="label" class="label"></slot>
    `}};In.css=[Mn,Et,Fn],s([dt()],In.prototype,`checked`,2),s([dt()],In.prototype,`forceDisabled`,2),s([_({reflect:!0})],In.prototype,`value`,2),s([_({reflect:!0})],In.prototype,`appearance`,2),s([_({reflect:!0})],In.prototype,`size`,2),s([kt(`size`)],In.prototype,`handleSizeChange`,1),s([_({type:Boolean})],In.prototype,`disabled`,2),In=s([ct(`wa-radio`)],In),In.disableWarning?.(`change-in-update`);var Ln=/* @__PURE__ */ t({default:()=>b}),Rn=/* @__PURE__ */ t({default:()=>In}),x
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function zn(e){this.c=e}x=zn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function S(e,t){this.l=e,this.h=t}x=S.prototype,x.toString=(function(){return co(this.l,this.h)});function Bn(e){switch(typeof e){case`string`:return bd.l();case`number`:return tr(e)?e<<24>>24===e?fu.l():e<<16>>16===e?Cu.l():pd.l():nr(e)?fd.l():dd.l();case`boolean`:return Il.l();case`undefined`:return to.l();default:return e instanceof S?gd.l():e instanceof zn?zl.l():e&&e.$classData?e.$classData.l():null}}function Vn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return tr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:nr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof S?`java.lang.Long`:e instanceof zn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ii()}}function Hn(e,t){switch(typeof e){case`string`:return yd(e,t);case`number`:return ld(e,t);case`boolean`:return Pl(e,t);case`undefined`:return Qa(e,t);default:return e&&e.$classData||e===null?e.g(t):e instanceof S?md(e.l,e.h,t):e instanceof zn?Rl(e.c,t):sr.prototype.g.call(e,t)}}function Un(e){switch(typeof e){case`string`:return vd(e);case`number`:return ud(e);case`boolean`:return Fl(e);case`undefined`:return $a(e);default:return e&&e.$classData||e===null?e.m():e instanceof S?hd(e.l,e.h):e instanceof zn?Ll(e.c):sr.prototype.m.call(e)}}function Wn(e){return e===void 0?`undefined`:e.toString()}function Gn(e){if(e===0)throw new du(`/ by zero`);return e}function Kn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function qn(e){return String.fromCharCode(e)}var Jn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Yn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Xn=0,Zn=/* @__PURE__ */ new WeakMap;function Qn(e){switch(typeof e){case`string`:return vd(e);case`number`:return ud(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:vd(n);default:if(e===null)return 0;var r=Zn.get(e);return r===void 0&&(r=Xn+1|0,Xn=r,Zn.set(e,r)),r}}function $n(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function er(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function tr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function nr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function rr(e){return new zn(e)}rr(0);function C(e,t){return new S(e,t)}var ir=C(0,0);function ar(e){return e===null?0:e.c}function or(e){return e===null?ir:e}function sr(){}x=sr.prototype,x.constructor=sr;function w(){}w.prototype=x,x.m=(function(){return Qn(this)}),x.g=(function(e){return this===e}),x.s=(function(){var e=this.m();return Vn(this)+`@`+(e>>>0).toString(16)}),x.toString=(function(){return this.s()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=T.prototype=new w,x.constructor=T,x.a5=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),x.Z=(function(){return new T(this.a.slice())});function cr(){}cr.prototype=x;function lr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=lr.prototype=new w,x.constructor=lr,x.a5=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),x.Z=(function(){return new lr(this.a.slice())});function ur(e){this.a=typeof e==`number`?new Uint16Array(e):e}x=ur.prototype=new w,x.constructor=ur,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new ur(this.a.slice())});function dr(e){this.a=typeof e==`number`?new Int8Array(e):e}x=dr.prototype=new w,x.constructor=dr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new dr(this.a.slice())});function fr(e){this.a=typeof e==`number`?new Int16Array(e):e}x=fr.prototype=new w,x.constructor=fr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new fr(this.a.slice())});function pr(e){this.a=typeof e==`number`?new Int32Array(e):e}x=pr.prototype=new w,x.constructor=pr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new pr(this.a.slice())});function mr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}x=mr.prototype=new w,x.constructor=mr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),x.Z=(function(){return new mr(this.a.slice())});function hr(e){this.a=typeof e==`number`?new Float32Array(e):e}x=hr.prototype=new w,x.constructor=hr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new hr(this.a.slice())});function gr(e){this.a=typeof e==`number`?new Float64Array(e):e}x=gr.prototype=new w,x.constructor=gr,x.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new gr(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=E.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i,t===`J`)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new cr;n.constructor=t,n.a5=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),n.Z=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===_r});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new E().a(this),this.A}),x.l=(function(){return this.L||=new Jc(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===vr)throw mu(new hu);return new(this.r()).C(e)});var _r=new E;_r.n={},_r.E=`Ljava.lang.Object;`,_r.F=(e=>!e.X),_r.N=`java.lang.Object`,_r.I=(e=>e!==null),_r.A=new E().y(_r,T,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),sr.prototype.$classData=_r;var vr=new E().p(void 0,`V`,`void`,void 0,void 0),yr=new E().p(!1,`Z`,`boolean`,lr,void 0),br=new E().p(0,`C`,`char`,ur,Uint16Array),xr=new E().p(0,`B`,`byte`,dr,Int8Array),Sr=new E().p(0,`S`,`short`,fr,Int16Array),Cr=new E().p(0,`I`,`int`,pr,Int32Array),wr=new E().p(ir,`J`,`long`,mr,Int32Array),Tr=new E().p(0,`F`,`float`,hr,Float32Array),Er=new E().p(0,`D`,`double`,gr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Dr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Or(e,t){return new pr(Dr(e,t,-1))}function kr(e){return Bn(e).cQ()+`@`+Qn(e)}function Ar(e){var t=e.cZ;return t===void 0?kr(e):t}function jr(){Mr=this,Nr().fV(new K((e=>void 0)),Co().cD,!0)}x=jr.prototype=new w,x.constructor=jr,x.fV=(function(e,t,n){return new wl(e,n,t,this)}),new E().i(jr,`com.raquo.airstream.core.Observer$`,{bl:1});var Mr;function Nr(){return Mr||=new jr,Mr}function Pr(e){this.cf=null,this.d1=null,this.cg=0,this.cf=e,this.d1=void 0;var t=Xr().bA();this.cg=t===void 0?1:1+t.cg|0,Rr().bH===-1||this.cg>Rr().bH?_c().b0(new id(this,Rr().bH)):Hr().O?Hr().ar.push(this)|0:Xr().cH(this)}x=Pr.prototype=new w,x.constructor=Pr;var Fr=new E().i(Pr,`com.raquo.airstream.core.Transaction`,{bo:1});function Ir(){this.bH=0,this.d2=null,Lr=this,this.bH=1e3,this.d2=new K((e=>{throw Yc(new U,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=Ir.prototype=new w,x.constructor=Ir,x.fo=(function(e){try{e.cf.f(e);var t=e.d1;if(t!==void 0)for(;t.ik();)t.ih().im(e)}catch(e){var n=e instanceof qs?e:new X(e);_c().b0(n)}}),new E().i(Ir,`com.raquo.airstream.core.Transaction$`,{bp:1});var Lr;function Rr(){return Lr||=new Ir,Lr}function zr(e){e.bI.length|0?new Pr(new K((t=>{for(;(e.bI.length|0)>0;){var n=e.bI.shift();try{n.f(t)}catch(e){var r=e instanceof qs?e:new X(e);_c().b0(r)}}for(;(e.ar.length|0)>0;){var i=e.ar.shift();Xr().cH(i)}}))):(e.ar.length|0)>0&&new Pr(new K((t=>{for(;(e.ar.length|0)>0;)Xr().cH(e.ar.shift())})))}function Br(){this.O=!1,this.bI=null,this.ar=null,Vr=this,this.O=!1,this.bI=hi().ao(P().a4(new(N.r()).C([]))),this.ar=hi().ao(P().a4(new(Fr.r()).C([])))}x=Br.prototype=new w,x.constructor=Br,new E().i(Br,`com.raquo.airstream.core.Transaction$onStart$`,{bq:1});var Vr;function Hr(){return Vr||=new Br,Vr}function Ur(e,t){return e.as.get(t)}function Wr(e,t){e.bJ.unshift(t)}function Gr(e){return e.bJ.shift()}function Kr(e,t,n){var r=Ur(e,t),i=r===void 0,a=r===void 0?hi().ao(P().a4(new(Fr.r()).C([]))):r;a.push(n),i&&e.as.set(t,a)}function qr(e,t){var n=Ur(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.as.delete(t),i}}function Jr(){this.bJ=null,this.as=null,Yr=this,this.bJ=hi().ao(P().a4(new(Fr.r()).C([]))),this.as=/* @__PURE__ */ new Map}x=Jr.prototype=new w,x.constructor=Jr,x.cH=(function(e){var t=this.bA();t===void 0?(Wr(this,e),Rr().fo(e),this.gK(e)):Kr(this,t,e)}),x.gK=(function(e){for(var t=e;;){var n=this.bA(),r=t;if(!(n!==void 0&&Ho().E(r,n)))throw Yc(new U,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hG(t),t.cf=Rr().d2;var i=this.bA();if(Ho().E(i,void 0)){if((this.as.size|0)>0){var a=new dc(0);throw this.as.forEach((e=>((t,n)=>{e.bm=e.bm+(t.length|0)|0}))(a)),Yc(new U,`Transaction queue error: Stack cleared, but a total of `+a.bm+` children for `+(this.as.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Rr().fo(i),t=i}}),x.hG=(function(e){for(var t=e;;){var n=qr(this,t);if(Ho().E(n,void 0)){Gr(this);var r=this.bA();if(!Ho().E(r,void 0))t=r;else return}else{Wr(this,n);return}}}),x.bA=(function(){return this.bJ[0]}),new E().i(Jr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{br:1});var Yr;function Xr(){return Yr||=new Jr,Yr}function Zr(e,t){var n=e.a6.indexOf(t)|0;if(n!==-1)e.a6.splice(n,1),e.B.e()||t.fJ();else throw Yc(new U,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Qr(e){for(;(e.bK.length|0)>0;)Zr(e,e.bK.shift())}function $r(e){this.d3=null,this.a6=null,this.aK=!1,this.bK=null,this.B=null,this.aL=0,this.d3=e,this.a6=hi().ao(P().a4(new(ti.r()).C([]))),this.aK=!0,this.bK=hi().ao(P().a4(new(ti.r()).C([]))),this.B=q(),this.aL=0}x=$r.prototype=new w,x.constructor=$r,x.fh=(function(){if(this.B.e()){var e=Hr(),t=(()=>{var e=new ls(this.d3);this.B=new J(e),this.aK=!1,this.aL=0;for(var t=0,n=this.a6.length|0;t<n;){var r=t+this.aL|0;this.a6[r].fI(e),t=1+t|0}Qr(this),this.aK=!0,this.aL=0});if(Hr(),e.O)t();else{e.O=!0;try{t()}finally{e.O=!1,zr(e)}}}else throw Yc(new U,`Can not activate `+this+`: it is already active`)}),x.gD=(function(){if(this.B.e())throw Yc(new U,`Can not deactivate DynamicOwner: it is not active`);this.aK=!1;for(var e=this.a6,t=0,n=e.length|0;t<n;)e[t].fJ(),t=1+t|0;Qr(this);var r=this.B;r.e()||r.u().ho(),Qr(this),this.aK=!0,this.B=q()}),x.gi=(function(e,t){t?(this.aL=1+this.aL|0,this.a6.unshift(e)):this.a6.push(e);var n=this.B;if(!n.e()){var r=n.u();e.fI(r)}}),x.hN=(function(e){this.aK?Zr(this,e):this.bK.push(e)}),new E().i($r,`com.raquo.airstream.ownership.DynamicOwner`,{bs:1});function ei(e,t,n){this.bL=null,this.d4=null,this.bM=null,this.bL=e,this.d4=t,this.bM=q(),e.gi(this,n)}x=ei.prototype=new w,x.constructor=ei,x.c9=(function(){this.bL.hN(this)}),x.fI=(function(e){var t=Hr(),n=(()=>{this.bM=this.d4.f(e)});if(Hr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,zr(t)}}}),x.fJ=(function(){var e=this.bM;e.e()||(e.u().c9(),this.bM=q())});var ti=new E().i(ei,`com.raquo.airstream.ownership.DynamicSubscription`,{bt:1});function ni(){}x=ni.prototype=new w,x.constructor=ni,x.cV=(function(e,t,n){return new ei(e,new K((e=>new J(t.f(e)))),n)}),x.fS=(function(e,t,n){return new ei(e,new K((e=>(t.f(e),q()))),n)}),new E().i(ni,`com.raquo.airstream.ownership.DynamicSubscription$`,{bu:1});var ri;function ii(){return ri||=new ni,ri}function ai(e){e.aM=hi().ao(P().a4(new(di.r()).C([])))}function oi(e){for(var t=e.aM,n=0,r=t.length|0;n<r;)li(t[n]),n=1+n|0;e.aM.length=0}function si(e,t){var n=e.aM.indexOf(t)|0;if(n!==-1)e.aM.splice(n,1);else throw Yc(new U,`Can not remove Subscription from Owner: subscription not found.`)}function ci(e,t){e.aM.push(t)}function li(e){if(!e.ci)e.d6.aF(),e.ci=!0;else throw Yc(new U,`Can not kill Subscription: it was already killed.`)}function ui(e,t){this.d7=null,this.d6=null,this.ci=!1,this.d7=e,this.d6=t,this.ci=!1,e.hE(this)}x=ui.prototype=new w,x.constructor=ui,x.c9=(function(){li(this),si(this.d7,this)});var di=new E().i(ui,`com.raquo.airstream.ownership.Subscription`,{bx:1});function fi(e,t){this.d8=null,this.d9=null,this.a7=null,this.at=!1,this.d8=e,this.d9=t,this.a7=q(),this.at=!1}x=fi.prototype=new w,x.constructor=fi,x.hk=(function(){var e=this.a7;return!e.e()&&!e.u().bL.B.e()}),x.hV=(function(e){if(this.at)throw Yc(new U,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a7;if(t.e())var n=!1;else var r=t.u().bL,n=e===null?r===null:e===r;if(!n){this.hk()&&!e.B.e()&&(this.at=!0);var i=this.a7;i.e()||(i.u().c9(),this.a7=q());var a=ii().cV(e,new K((e=>(this.at||this.d8.aF(),new ui(e,new Zl((()=>{this.at||this.d9.aF()})))))),!1);this.a7=new J(a),this.at=!1}}),x.gy=(function(){if(this.at)throw Yc(new U,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a7;e.e()||e.u().c9(),this.a7=q()}),new E().i(fi,`com.raquo.airstream.ownership.TransferableSubscription`,{by:1});function pi(){}x=pi.prototype=new w,x.constructor=pi,x.ao=(function(e){return[...ns().i7(e)]}),new E().i(pi,`com.raquo.ew.JsArray$`,{bz:1});var mi;function hi(){return mi||=new pi,mi}function gi(){}x=gi.prototype=new w,x.constructor=gi,x.h2=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(gi,`com.raquo.ew.JsArray$RichJsArray$`,{bA:1});var _i;function vi(){return _i||=new gi,_i}function yi(){this.da=null,bi=this,document.createElement(`template`),this.gB(G().d.i2().i3()),this.da=/* @__PURE__ */ RegExp(` `,`g`)}x=yi.prototype=new w,x.constructor=yi,x.gn=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof qs?e:new X(e);if(n instanceof X&&n.Q instanceof DOMException)return!1;throw n instanceof X?n.Q:n}}),x.hl=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Ho().E(t,r))return!0;n=r}}),x.gg=(function(e,t){e.addEventListener(t.aN.b5.bO,t.cq,t.cr)}),x.hL=(function(e,t){e.removeEventListener(t.aN.b5.bO,t.cq,t.cr)}),x.gA=(function(e){return document.createElement(e.cR())}),x.h9=(function(e,t){var n=this.ha(e,t);return n===void 0?void 0:t.a9.c1(n)}),x.ha=(function(e,t){var n=e.G.getAttributeNS(null,t.Y);return n===null?void 0:n}),x.fP=(function(e,t,n){this.hS(e,t,t.a9.bx(n))}),x.hS=(function(e,t,n){n===null?this.hM(e,t):e.G.setAttribute(t.Y,n)}),x.hM=(function(e,t){e.G.removeAttribute(t.Y)}),x.hT=(function(e,t,n){this.hU(e,t,t.dS.bx(n))}),x.hU=(function(e,t,n){e.G[t.dT]=n}),x.fQ=(function(e,t,n){var r=e.G,i=t.aa,a=t.ab,o=n===null?null:n;o===null?(a.S(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.S(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.gB=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.e6)}),x.hd=(function(e,t){var n=this.he(e,t);return n===void 0?void 0:t.co.c1(n)}),x.he=(function(e,t){var n=e.cT(),r=t.bQ,i=n.getAttributeNS(r.e()?null:r.u(),t.cp);return i===null?void 0:i}),x.hW=(function(e,t,n){this.hX(e,t,t.co.bx(n))}),x.hX=(function(e,t,n){if(n===null)this.hO(e,t);else{var r=t.bQ;if(r.e())e.cT().setAttribute(t.bP,n);else{var i=r.u();e.cT().setAttributeNS(i,t.bP,n)}}}),x.hO=(function(e,t){var n=e.cT(),r=t.bQ;n.removeAttributeNS(r.e()?null:r.u(),t.cp)}),x.gC=(function(e){return document.createTextNode(e)}),x.gF=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qf(this.gE(r),n);r=i,n=a}}),x.gE=(function(e){if(e instanceof HTMLElement){var t=e.id;if(No(),t!==``)var n=`#`+t;else var r=e.className,n=(No(),r===``?``:`.`+r.replace(this.da,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new E().i(yi,`com.raquo.laminar.DomApi$`,{bB:1});var bi;function D(){return bi||=new yi,bi}function xi(e,t,n){this.ck=null,this.db=null,this.cj=null,this.ck=e,this.db=t,this.cj=n}x=xi.prototype=new w,x.constructor=xi,x.S=(function(e){this.ck===null?this.cj===null?Eo().h3(this.db,e):vi().h2(this.cj,hl().h7(e)):this.ck.S(e)}),new E().i(xi,`com.raquo.laminar.Seq`,{bC:1});function Si(){Ci=this,$()}x=Si.prototype=new w,x.constructor=Si,new E().i(Si,`com.raquo.laminar.Seq$`,{bD:1});var Ci;function wi(){return Ci||=new Si,Ci}function Ti(e){e.de=Nr(),_c()}function Ei(e){e.fY=Ji()}function Di(e){Oi(e,new K((e=>{e.dV.G.focus()})))}function Oi(e,t){return new bs(new K((e=>{var n=new uc(!e.a0.B.e()),r=new K((e=>{n.bX?n.bX=!1:t.f(e)}));ii().fS(e.a0,new K((e=>(t=>{r.f(new Gi(e,t))}))(e)),!1)})),Ji())}function ki(){this.a8=null,this.bN=null,Ai=this,this.a8=new ds(O()),new ds(O()),new ds(O()),this.bN=new us}x=ki.prototype=new w,x.constructor=ki,new E().i(ki,`com.raquo.laminar.codecs.package$`,{bL:1});var Ai;function O(){return Ai||=new ki,Ai}function ji(e){e.fZ=Mi(e,`class`,` `)}function Mi(e,t,n){var r=L(new hs,t,O().a8);return new ps(r.Y,new K((e=>{var t=D().h9(e,r);return t===void 0?``:t})),new Ql(((e,t)=>{D().fP(e,r,t)})),n)}function Ni(e){e.fX=Pi(e,`class`,` `)}function Pi(e,t,n){var r=new vs(t,O().a8,q());return new ps(r.bP,new K((e=>{var t=D().hd(e,r);return t===void 0?``:t})),new Ql(((e,t)=>{D().hW(e,r,t)})),n)}function Fi(e,t){this.dR=null,this.dQ=null,this.dR=e,this.dQ=t}x=Fi.prototype=new w,x.constructor=Fi,x.c=(function(e){return new xc(this.dR,this.dQ.f(e),new $l(((e,t,n)=>{D().fQ(e,t,n)})))}),new E().i(Fi,`com.raquo.laminar.keys.DerivedStyleProp`,{ca:1});function Ii(e,t,n,r){this.b5=null,this.cn=!1,this.cm=!1,this.cl=null,this.b5=e,this.cn=t,this.cm=n,this.cl=r}x=Ii.prototype=new w,x.constructor=Ii,x.hF=(function(){var e=new K((e=>{var t=this.cl.f(e);if(t.e())return q();var n=t.u();return e.preventDefault(),new J(n)}));return new Ii(this.b5,this.cn,this.cm,e)}),new E().i(Ii,`com.raquo.laminar.keys.EventProcessor`,{cb:1});function Li(){}x=Li.prototype=new w,x.constructor=Li,x.gN=(function(e,t,n){return new Ii(e,t,n,new K((e=>new J(e))))}),new E().i(Li,`com.raquo.laminar.keys.EventProcessor$`,{cc:1});var Ri;function zi(){return Ri||=new Li,Ri}function Bi(){}x=Bi.prototype=new w,x.constructor=Bi;function Vi(){}Vi.prototype=x;function Hi(){this.g0=null,this.g1=null,this.g2=null,this.g3=null,this.g0=`http://www.w3.org/2000/svg`,this.g1=`http://www.w3.org/1999/xlink`,this.g2=`http://www.w3.org/XML/1998/namespace`,this.g3=`http://www.w3.org/2000/xmlns/`}x=Hi.prototype=new w,x.constructor=Hi,x.hw=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Du(e)}}),new E().i(Hi,`com.raquo.laminar.keys.SvgAttr$`,{cg:1});var Ui;function Wi(){return Ui||=new Hi,Ui}function Gi(e,t){this.dV=null,this.dU=null,this.dV=e,this.dU=t}x=Gi.prototype=new w,x.constructor=Gi,new E().i(Gi,`com.raquo.laminar.lifecycle.MountContext`,{ch:1});var k=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function Ki(){this.g4=null,qi=this,this.g4=new ys}x=Ki.prototype=new w,x.constructor=Ki,new E().i(Ki,`com.raquo.laminar.modifiers.Modifier$`,{cl:1});var qi;function Ji(){return qi||=new Ki,qi}function Yi(){this.l=null,Xi=this,this.l=new ws(new K((e=>e)),A()),new ws(new K((e=>``+(e|0))),A()),new ws(new K((e=>``+ +e)),A()),new ws(new K((e=>``+!!e)),A()),new ws(new K((e=>e.i6())),A())}x=Yi.prototype=new w,x.constructor=Yi,new E().i(Yi,`com.raquo.laminar.modifiers.RenderableText$`,{cr:1});var Xi;function A(){return Xi||=new Yi,Xi}function Zi(){}x=Zi.prototype=new w,x.constructor=Zi,x.bZ=(function(e,t,n){var r=new J(e);t.fU(r),n!==void 0&&n.il(e,t);var i=D().gn(e.bC(),t.bC());return i&&t.fR(r),i}),new E().i(Zi,`com.raquo.laminar.nodes.ParentNode$`,{cu:1});var Qi;function $i(){return Qi||=new Zi,Qi}function ea(){}x=ea.prototype=new w,x.constructor=ea,x.ib=(function(e,t){return ii().cV(e.a0,new K((n=>t.f(new Gi(e,n)))),!0)}),new E().i(ea,`com.raquo.laminar.nodes.ReactiveElement$`,{cw:1});var ta;function na(){return ta||=new ea,ta}function ra(){}x=ra.prototype=new w,x.constructor=ra,x.fg=(function(e){return G().d.cM().aV(new Q([G().d.cL().cN(),G().d.fx().fn(),G().d.cP().bB().c(8),vc(G().d,e,Cs())]))}),new E().i(ra,`doc.ExampleGroups$package$`,{cC:1});var ia;function aa(){return ia||=new ra,ia}function oa(){}x=oa.prototype=new w,x.constructor=oa,x.gd=(function(e){return G().d.cM().aV(new Q([G().d.cL().cN(),G().d.fy().fW(),G().d.gj().gx(),G().d.cP().bB().c(16),vc(G().d,e,Cs())]))}),new E().i(oa,`doc.Examples$package$`,{cD:1});var sa;function ca(){return sa||=new oa,sa}function la(){}x=la.prototype=new w,x.constructor=la,x.ge=(function(e){return G().d.cM().aV(new Q([G().d.cL().cN(),G().d.fy().fW(),G().d.fx().fn(),G().d.cP().bB().c(16),vc(G().d,e,Cs())]))}),new E().i(la,`doc.VerticalExamples$package$`,{cE:1});var ua;function da(){return ua||=new la,ua}function fa(){}x=fa.prototype=new w,x.constructor=fa,x.gl=(function(){ma().gS(),ma().gT(),ma().gU(),ma().gV(),ma().gW(),ma().gX(),ma().gY(),ma().gZ()}),x.gS=(function(){var e=document.querySelector(`#example1`);bo().an(e).e()||(G(),new Sc(e,H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`))),new W((e=>e.aZ().c(`a`))),new W((e=>(H().bF(),G().d).bG().c(`1`)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))))}),x.gT=(function(){var e=document.querySelector(`#example2`);bo().an(e).e()||(G(),new Sc(e,H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`))),new W((e=>e.c7().c(`Choose the most appropriate option.`))),new W((e=>e.aZ().c(`a`))),new W((e=>(H().bF(),G().d).bG().c(`1`)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))))}),x.gU=(function(){var e=document.querySelector(`#example3`);bo().an(e).e()||(G(),new Sc(e,aa().fg(new Q(I().b(new(cd.r()).C([da().ge(new Q(I().b(new(cd.r()).C([H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Horizontal options`))),new W((e=>e.c7().c(`Select an option that makes you proud.`))),new W((e=>e.cS().fE())),new W((e=>e.aZ().c(`a`))),new W((e=>(H().bF(),G().d).bG().c(`1`)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))])))),H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Vertical options`))),new W((e=>e.c7().c(`Select an option that makes you proud.`))),new W((e=>e.cS().ie())),new W((e=>e.aZ().c(`a`))),new W((e=>(H().bF(),G().d).bG().c(`1`)))]))),new Q(I().b(new(k.r()).C([G().d.ht().bB().c(300),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.aU().aX())),new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))]))))]))))))}),x.gV=(function(){var e=document.querySelector(`#example4`);bo().an(e).e()||(G(),new Sc(e,H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`))),new W((e=>e.c2().c(!0)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`))),new W((e=>e.c2().c(!0)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))))}),x.gW=(function(){var e=document.querySelector(`#example5`);bo().an(e).e()||(G(),new Sc(e,H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`))),new W((e=>e.c2().c(!0)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))))}),x.gX=(function(){var e=document.querySelector(`#example6`);bo().an(e).e()||(G(),new Sc(e,H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`))),new W((e=>e.c7().c(`Choose the most appropriate option.`))),new W((e=>e.cS().fE())),new W((e=>e.aZ().c(`a`))),new W((e=>(H().bF(),G().d).bG().c(`1`)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))]))))))}),x.gY=(function(){var e=document.querySelector(`#example7`);bo().an(e).e()||(G(),new Sc(e,aa().fg(new Q(I().b(new(cd.r()).C([ca().gd(new Q(I().b(new(cd.r()).C([H().h(new Q(I().b(new(N.r()).C([new W((e=>e.cU().i0()))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`small`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Small`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`medium`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Medium`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`large`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Large`,A().l)]))))])))),H().h(new Q(I().b(new(N.r()).C([new W((e=>e.cU().hu()))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`small`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Small`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`medium`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Medium`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`large`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Large`,A().l)]))))])))),H().h(new Q(I().b(new(N.r()).C([new W((e=>e.cU().hp()))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`small`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Small`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`medium`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Medium`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`large`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Large`,A().l)]))))]))))]))))]))))))}),x.gZ=(function(){var e=document.querySelector(`#example8`);bo().an(e).e()||(G(),new Sc(e,G().d.h4().aV(new Q(I().b(new(k.r()).C([new yc((G(),zi().gN(G().d.hB(),!1,!1)).hF(),new K((e=>(t=>{e.hA(t)}))(G().d.de.fV(new W((e=>{window.alert(`All fields are valid!`)})),Co().cD,!0)))),H().h(new Q(I().b(new(N.r()).C([new W((e=>e.ap().c(`Select an option`))),new W((e=>e.aZ().c(`a`))),new W((e=>e.hP().c(!0)))]))),new Q(I().b(new(k.r()).C([V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`1`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 1`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`2`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 2`,A().l)])))),V().h(new Q(I().b(new(N.r()).C([new W((e=>e.p().c(`3`)))]))),new Q(I().b(new(k.r()).C([B(G().d,`Option 3`,A().l)]))))])))),G().d.gu().aV(new Q(I().b(new(k.r()).C([])))),Ec().h(new Q(I().b(new(N.r()).C([new W((e=>e.i8().i1())),new W((e=>e.id().gv()))]))),new Q(I().b(new(k.r()).C([B(G().d,`Submit`,A().l)]))))]))))))}),new E().i(fa,`examples.radioGroup.Main$package$`,{cF:1});var pa;function ma(){return pa||=new fa,pa}function ha(e){try{ma().gl()}catch(e){throw e}}function ga(e,t){for(var n=j().X(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=_a(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Hs(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Hs(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Us.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function _a(e,t){var n=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().X(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[va(e,c[1]),Ta(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[va(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[va(e,d[1]),`<clinit>`]}function va(e,t){var n=ba(e);if(Za().cC.call(n,t))var r=ba(e)[t];else var r=Ia(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ya(e){if(!((1&e.H)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cz=t,e.H=(1|e.H)<<24>>24}return e.cz}function ba(e){return(1&e.H)<<24>>24?e.cz:ya(e)}function xa(e){if(!((2&e.H)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cA=t,e.H=(2|e.H)<<24>>24}return e.cA}function Sa(e){return(2&e.H)<<24>>24?e.cA:xa(e)}function Ca(e){return(4&e.H)<<24>>24||(e.cy=Object.keys(Sa(e)),e.H=(4|e.H)<<24>>24),e.cy}function wa(e){return(4&e.H)<<24>>24?e.cy:Ca(e)}function Ta(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ea(e,t){return t?t.arguments&&t.stack?Da(e,t):t.stack&&t.sourceURL?Aa(e,t):t.stack&&t.number?ka(e,t):t.stack&&t.fileName?Oa(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ja(e,t):Ma(e,t):ja(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Na(e,t):Pa(e,t):t.stack&&!t.fileName?Da(e,t):Fa(e,t):[]}function Da(e,t){return(t.stack+`
`).replace(j().X(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().A(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().A(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().A(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().A(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Oa(e,t){return t.stack.replace(j().A(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().A(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ka(e,t){return t.stack.replace(j().A(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().A(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().A(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Aa(e,t){return t.stack.replace(j().A(`\\[native code\\]\\n`,`m`),``).replace(j().A(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().A(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ja(e,t){for(var n=j().A(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Ma(e,t){for(var n=j().A(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Na(e,t){for(var n=j().X(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Pa(e,t){for(var n=j().X(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().X(`<anonymous function: (\\S+)>`),`$1`).replace(j().X(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Fa(e,t){return[]}function Ia(e,t,n){for(;;)if(t<(wa(e).length|0)){var r=wa(e)[t];if(n.startsWith(r))return``+Sa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function La(){this.cz=null,this.cA=null,this.cy=null,this.H=0}x=La.prototype=new w,x.constructor=La,x.h0=(function(e){return ga(this,Ea(this,e))}),new E().i(La,`java.lang.StackTrace$`,{d7:1});var Ra;function za(){return Ra||=new La,Ra}function Ba(){}x=Ba.prototype=new w,x.constructor=Ba,x.X=(function(e){return new RegExp(e)}),x.A=(function(e,t){return new RegExp(e,t)}),new E().i(Ba,`java.lang.StackTrace$StringRE$`,{d8:1});var Va;function j(){return Va||=new Ba,Va}function Ha(){this.eO=null,this.g5=null,Ua=this,this.eO=new Ud(!1),this.g5=new Ud(!0)}x=Ha.prototype=new w,x.constructor=Ha,new E().i(Ha,`java.lang.System$Streams$`,{dc:1});var Ua;function Wa(){return Ua||=new Ha,Ua}function Ga(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Ka(){this.cB=null,this.eP=null,qa=this,this.cB=Ga(this),this.eP=null}x=Ka.prototype=new w,x.constructor=Ka,x.fD=(function(e,t){if(this.cB!==null){var n=this.cB;return Za().cC.call(n,e)?n[e]:t}return this.eP.fD(e,t)}),new E().i(Ka,`java.lang.System$SystemProperties$`,{dd:1});var qa;function Ja(){return qa||=new Ka,qa}function Ya(){this.cC=null,Xa=this,this.cC=Object.prototype.hasOwnProperty}x=Ya.prototype=new w,x.constructor=Ya,new E().i(Ya,`java.lang.Utils$Cache$`,{df:1});var Xa;function Za(){return Xa||=new Ya,Xa}function Qa(e,t){return e===t}function $a(e){return 0}function eo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aw)}var to=new E().i(0,`java.lang.Void`,{aw:1},(e=>e===void 0));function no(e,t){throw pu(new hu,`argument type mismatch`)}function ro(){}x=ro.prototype=new w,x.constructor=ro,x.aY=(function(e){return e instanceof T||e instanceof lr||e instanceof ur||e instanceof dr||e instanceof fr||e instanceof pr?e.a.length:e instanceof mr?e.a.length>>>1|0:(e instanceof hr||e instanceof gr||no(this,e),e.a.length)}),new E().i(ro,`java.lang.reflect.Array$`,{dg:1});var io;function ao(){return io||=new ro,io}function oo(){}x=oo.prototype=new w,x.constructor=oo,x.gs=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),x.ft=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),x.fs=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fu=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fr=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fv=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new E().i(oo,`java.util.Arrays$`,{dh:1});var so;function M(){return so||=new oo,so}function co(e,t){return fo().fT(e,t)}function lo(){}x=lo.prototype=new w,x.constructor=lo,x.fT=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),x.fC=(function(e){if(e<-0x8000000000000000)return C(0,-2147483648);if(e>=0x8000000000000000)return C(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return C(t,e<0&&t!==0?n-1|0:n)}),x.gI=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,h=p>>>16|0,re=Math.imul(ee,ne),ie=Math.imul(te,ne),ae=Math.imul(ee,h),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,h)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0)|0)-((o-oe|0)>>>0>o>>>0|0)|0)<0)var ce=p-1|0,le=(m-1|0)+(ce!==-1|0)|0,ue=ce,de=le;else var ue=p,de=m}else var fe=(s>>>0)/(Gn(u)>>>0)|0,ue=(4294967296*(s-Math.imul(u,fe)|0)+(o>>>0))/u|0,de=fe;if((t^r)>=0)return C(ue,de);var pe=-ue|0;return C(pe,(-de|0)-(pe!==0|0)|0)}),x.gJ=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Gn(n)>>>0)|0;return C((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var ne=o-1|0;return C(ne,(s-1|0)+(ne!==-1|0)|0)}return C(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?C(0,0):C(1,0)}),x.hJ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,h=p>>>16|0,re=Math.imul(ee,ne),ie=Math.imul(te,ne),ae=Math.imul(ee,h),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0,ce=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,h)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0,le=o-oe|0,ue=(s-ce|0)-(le>>>0>o>>>0|0)|0;if(ue<0)var de=le+u|0,fe=(ue+d|0)+(de>>>0<le>>>0|0)|0,pe=de,me=fe;else var pe=le,me=ue}else var he=(4294967296*((s>>>0)%(Gn(u)>>>0)|0)+(o>>>0))/u|0,pe=o-Math.imul(u,he)|0,me=0;if(t<0){var ge=-pe|0;return C(ge,(-me|0)-(ge!==0|0)|0)}return C(pe,me)}),x.hK=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Gn(n)>>>0)|0)+(e>>>0))/n|0;return C(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0,ne=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0,h=e-ee|0,re=(t-ne|0)-(h>>>0>e>>>0|0)|0;if(re<0){var ie=h+n|0;return C(ie,(re+r|0)+(ie>>>0<h>>>0|0)|0)}return C(h,re)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return C(e,t);var ae=e-n|0;return C(ae,(t-r|0)-(ae>>>0>e>>>0|0)|0)}),new E().i(lo,`org.scalajs.linker.runtime.RuntimeLong$`,{dj:1});var uo;function fo(){return uo||=new lo,uo}function po(){}x=po.prototype=new w,x.constructor=po,x.fz=(function(e,t){var n=e.x();if(n>-1){for(var r=t.fH(n),i=e.j(),a=0;a<n;)P().fk(r,a,i.o()),a=1+a|0;return r}var o=null,s=t.fN(),c=s===br.l();o=[];for(var l=e.j();l.r();){var u=l.o(),d=c?ar(u):u===null?zo().hR(s):u;o.push(d)}return zo().hQ(s===vr.l()?to.l():s===Uo.l()||s===fl.l()?_r.l():s,o)}),x.fw=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Ho().E(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(po,`scala.Array$`,{dk:1});var mo;function ho(){return mo||=new po,mo}var N=new E().i(1,`scala.Function1`,{e:1});function go(){}x=go.prototype=new w,x.constructor=go;function _o(){}_o.prototype=x;function vo(){}x=vo.prototype=new w,x.constructor=vo,x.an=(function(e){return e===null?q():new J(e)}),new E().i(vo,`scala.Option$`,{du:1});var yo;function bo(){return yo||=new vo,yo}function xo(){this.eW=null,this.cD=null,So=this,this.eW=new W((e=>this.eW)),this.cD=new Hl}x=xo.prototype=new w,x.constructor=xo,new E().i(xo,`scala.PartialFunction$`,{dv:1});var So;function Co(){return So||=new xo,So}function wo(){this.eZ=null,To=this,this.eZ=new W((e=>Eo().eZ))}x=wo.prototype=new w,x.constructor=wo,x.h3=(function(e,t){var n=ao().aY(e),r=0;if(e instanceof T)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof pr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof mr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.f(C(o,s)),r=1+r|0}else if(e instanceof hr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.f(rr(e.a[r])),r=1+r|0;else if(e instanceof dr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof fr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof lr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new Du(e)}),new E().i(wo,`scala.collection.ArrayOps$`,{dB:1});var To;function Eo(){return To||=new wo,To}function Do(e,t){for(var n=e.j();n.r();)t.f(n.o())}function Oo(e,t,n,r){return e.x()===0?``+t+r:e.aT(np(new rp),t,n,r).D.q}function ko(e,t,n,r,i){var a=t.D;n.length!==0&&(a.q=``+a.q+n);var o=e.j();if(o.r()){var s=o.o();for(a.q=``+a.q+s;o.r();){r.length!==0&&(a.q=``+a.q+r);var c=o.o();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function Ao(e,t){this.f2=null,this.bh=null,this.f2=e,this.bh=t}x=Ao.prototype=new w,x.constructor=Ao,x.hg=(function(){return this.f2.aF().j()}),new E().i(Ao,`scala.collection.Iterator$ConcatIteratorCell`,{dL:1});function jo(){this.f3=null,Mo=this,this.f3=new W((e=>this.f3))}x=jo.prototype=new w,x.constructor=jo,new E().i(jo,`scala.collection.StringOps$`,{dS:1});var Mo;function No(){return Mo||=new jo,Mo}function Po(){this.f6=0,Fo=this;try{No();var e=zs().hm(Ja().fD(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.f6=e}x=Po.prototype=new w,x.constructor=Po,new E().i(Po,`scala.collection.immutable.IndexedSeqDefaults$`,{dW:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(){}x=Lo.prototype=new w,x.constructor=Lo,x.hR=(function(e){return e===xr.l()||e===Sr.l()||e===br.l()||e===Cr.l()?0:e===wr.l()?C(0,0):e===Tr.l()||e===Er.l()?0:e===yr.l()?!1:e===vr.l()?void 0:null}),x.hQ=(function(e,t){var n=t.length|0;if(e===br.l()){for(var r=new ur(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.aq.U(n),o=0;o!==n;)P().fk(a,o,t[o]),o=1+o|0;return a}),new E().i(Lo,`scala.collection.mutable.ArrayBuilder$`,{e1:1});var Ro;function zo(){return Ro||=new Lo,Ro}function Bo(){}x=Bo.prototype=new w,x.constructor=Bo,x.E=(function(e,t){return e===t||(Vs(e)?this.gR(e,t):e instanceof zn?this.gP(e,t):e===null?t===null:Hn(e,t))}),x.gR=(function(e,t){if(Vs(t))return this.gQ(e,t);if(t instanceof zn){if(typeof e==`number`)return+e===t.c;if(e instanceof S){var n=or(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Hn(e,t)}return e===null?t===null:Hn(e,t)}),x.gQ=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof S){var r=or(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof S){var a=or(e),o=a.l,s=a.h;if(t instanceof S){var c=or(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Hn(e,t)}),x.gP=(function(e,t){if(t instanceof zn)return e.c===t.c;if(Vs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof S){var n=or(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Hn(t,e)}return e===null&&t===null}),new E().i(Bo,`scala.runtime.BoxesRunTime$`,{el:1});var Vo;function Ho(){return Vo||=new Bo,Vo}var Uo=new E().i(0,`scala.runtime.Null$`,{eo:1});function Wo(){}x=Wo.prototype=new w,x.constructor=Wo,x.cb=(function(){throw bu(new Su,`tried to cast away nullability, but value is null`)}),new E().i(Wo,`scala.runtime.Scala3RunTime$`,{ep:1});var Go;function Ko(){return Go||=new Wo,Go}function qo(){}x=qo.prototype=new w,x.constructor=qo,x.gk=(function(e){return e===null?Uo.l():Bn(e)}),x.aW=(function(e,t){if(e instanceof T||e instanceof pr||e instanceof gr)return e.a[t];if(e instanceof mr){var n=e.a,r=t<<1;return C(n[r],n[r+1|0])}if(e instanceof hr)return e.a[t];if(e instanceof ur)return rr(e.a[t]);if(e instanceof dr||e instanceof fr||e instanceof lr)return e.a[t];throw e===null?xu(new Su):new Du(e)}),x.fk=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof pr)e.a[t]=n|0;else if(e instanceof gr)e.a[t]=+n;else if(e instanceof mr){var r=or(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof hr)e.a[t]=Math.fround(n);else if(e instanceof ur)e.a[t]=ar(n);else if(e instanceof dr)e.a[t]=n|0;else if(e instanceof fr)e.a[t]=n|0;else if(e instanceof lr)e.a[t]=!!n;else throw e===null?xu(new Su):new Du(e)}),x.gf=(function(e){return Oo(e.aH(),e.W()+`(`,`,`,`)`)}),x.a4=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ad();return tf(),Dd(t)}return new Ff(e)}),new E().i(qo,`scala.runtime.ScalaRunTime$`,{eq:1});var Jo;function P(){return Jo||=new qo,Jo}function Yo(){}x=Yo.prototype=new w,x.constructor=Yo,x.n=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.y=(function(e,t){return this.gr(e^t)}),x.gr=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.hr=(function(e,t){return t===e>>31?e:e^t}),x.gL=(function(e){var t=Kn(e);if(t===e)return t;var n=fo().fC(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Jn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),x.v=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.gL(+e);if(e instanceof S){var t=or(e);return this.hr(t.l,t.h)}return Un(e)}),x.hj=(function(e){throw gu(new vu,``+e)}),new E().i(Yo,`scala.runtime.Statics$`,{es:1});var Xo;function F(){return Xo||=new Yo,Xo}function Zo(){}x=Zo.prototype=new w,x.constructor=Zo,x.hY=(function(e,t){return setTimeout((()=>{t.aF()}),e)}),new E().i(Zo,`scala.scalajs.js.timers.package$`,{ey:1});var Qo;function $o(){return Qo||=new Zo,Qo}function es(){}x=es.prototype=new w,x.constructor=es,x.i7=(function(e){if(e instanceof Q)return e.bY;var t=[];return e.S(new W((e=>t.push(e)|0))),t}),new E().i(es,`scala.scalajs.runtime.Compat$`,{eH:1});var ts;function ns(){return ts||=new es,ts}function rs(){}x=rs.prototype=new w,x.constructor=rs,x.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new E().i(rs,`scala.scalajs.runtime.package$`,{eI:1});var is;function I(){return is||=new rs,is}function as(){}x=as.prototype=new w,x.constructor=as,x.hZ=(function(e){var t=`Illegal command line`+(e.fF()===0?``:e.fF()===1?` after first argument`:` after `+e.fF()+` arguments`)+`: `+e.ij();Xs().hD().hn(t+`
`)}),new E().i(as,`scala.util.CommandLineParser$`,{eJ:1});function os(e){this.cF=null,this.cF=e}x=os.prototype=new w,x.constructor=os,x.s=(function(){return`DynamicVariable(`+this.cF+`)`}),new E().i(os,`scala.util.DynamicVariable`,{eL:1});function ss(){}x=ss.prototype=new w,x.constructor=ss;function cs(){}cs.prototype=x,x.n=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.y=(function(e,t){return this.bD(e^t)}),x.bD=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.fL=(function(e,t,n){var r=e.U();if(r===0)return n?t:vd(e.W());var i=t;n||(i=this.n(i,vd(e.W())));for(var a=0;a<r;)i=this.n(i,F().v(e.V(a))),a=1+a|0;return this.y(i,r)}),x.fl=(function(e,t,n){var r=e.U(),i=vd(n===null?e.W():n);if(r===0)return i;var a=t;a=this.n(a,i);for(var o=0;o<r;)a=this.n(a,F().v(e.V(o))),o=1+o|0;return this.y(a,r)}),x.ia=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.j();o.r();){var s=o.o(),c=F().v(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.n(l,n),l=this.n(l,r),l=this.ca(l,a),this.y(l,i)}),x.hC=(function(e,t){var n=e.j(),r=t;if(!n.r())return this.y(r,0);var i=n.o();if(!n.r())return this.y(this.n(r,F().v(i)),1);var a=n.o(),o=F().v(i);r=this.n(r,o);for(var s=r,c=F().v(a),l=c-o|0,u=2;n.r();){r=this.n(r,c);var d=F().v(n.o());if(l!==(d-c|0)||l===0){for(r=this.n(r,d),u=1+u|0;n.r();)r=this.n(r,F().v(n.o())),u=1+u|0;return this.y(r,u)}c=d,u=1+u|0}return this.bD(this.n(this.n(s,l),c))}),x.w=(function(e,t){var n=t,r=ao().aY(e);switch(r){case 0:return this.y(n,0);case 1:return this.y(this.n(n,F().v(P().aW(e,0))),1);default:var i=F().v(P().aW(e,0));n=this.n(n,i);for(var a=n,o=F().v(P().aW(e,1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=F().v(P().aW(e,c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,F().v(P().aW(e,c))),c=1+c|0;return this.y(n,r)}o=l,c=1+c|0}return this.bD(this.n(this.n(a,s),o))}}),x.hH=(function(e,t,n,r){return this.bD(this.n(this.n(this.n(r,e),t),n))}),x.hh=(function(e,t){var n=t,r=e.i();switch(r){case 0:return this.y(n,0);case 1:return this.y(this.n(n,F().v(e.k(0))),1);default:var i=F().v(e.k(0));n=this.n(n,i);for(var a=n,o=F().v(e.k(1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=F().v(e.k(c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,F().v(e.k(c))),c=1+c|0;return this.y(n,r)}o=l,c=1+c|0}return this.bD(this.n(this.n(a,s),o))}}),x.hq=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.e();){var l=c.T(),u=c.F(),d=F().v(l);switch(r=this.n(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.hH(s,a,o,t):this.y(r,n)});function ls(e){this.aM=null,this.d5=null,this.ch=!1,this.d5=e,ai(this),this.ch=!1}x=ls.prototype=new w,x.constructor=ls,x.hE=(function(e){this.ch?(li(e),this.d5.aF()):ci(this,e)}),x.ho=(function(){oi(this),this.ch=!0}),new E().i(ls,`com.raquo.airstream.ownership.OneTimeOwner`,{bv:1,bw:1});function us(){}x=us.prototype=new w,x.constructor=us,x.gG=(function(e){return e!==null}),x.gO=(function(e){return e?``:null}),x.c1=(function(e){return this.gG(e)}),x.bx=(function(e){return this.gO(!!e)}),new E().i(us,`com.raquo.laminar.codecs.package$$anon$1`,{bM:1,a3:1});function ds(e){if(e===null)throw xu(new Su)}x=ds.prototype=new w,x.constructor=ds,x.bx=(function(e){return e}),x.c1=(function(e){return e}),new E().i(ds,`com.raquo.laminar.codecs.package$$anon$2`,{bN:1,a3:1});function fs(e){return new Fi(e,new K((e=>e+`px`)))}function ps(e,t,n,r){}x=ps.prototype=new Vi,x.constructor=ps,new E().i(ps,`com.raquo.laminar.keys.CompositeKey`,{c9:1,r:1});function ms(e){this.bO=null,this.bO=e}x=ms.prototype=new Vi,x.constructor=ms,new E().i(ms,`com.raquo.laminar.keys.EventProp`,{cd:1,r:1});function L(e,t,n){return e.Y=t,e.a9=n,e}function hs(){this.Y=null,this.a9=null}x=hs.prototype=new Vi,x.constructor=hs;function gs(){}gs.prototype=x,x.c=(function(e){return new xc(this,e,new $l(((e,t,n)=>{D().fP(e,t,n)})))}),new E().i(hs,`com.raquo.laminar.keys.HtmlAttr`,{W:1,r:1});function _s(e,t){this.dT=null,this.dS=null,this.dT=e,this.dS=t}x=_s.prototype=new Vi,x.constructor=_s,x.c=(function(e){return new xc(this,e,new $l(((e,t,n)=>{D().hT(e,t,n)})))}),new E().i(_s,`com.raquo.laminar.keys.HtmlProp`,{ce:1,r:1});function vs(e,t,n){this.cp=null,this.co=null,this.bP=null,this.bQ=null,this.cp=e,this.co=t;var r=n.e()?q():new J(n.u()+`:`+e);this.bP=r.e()?e:r.u(),this.bQ=n.e()?q():new J(Wi().hw(n.u()))}x=vs.prototype=new Vi,x.constructor=vs,new E().i(vs,`com.raquo.laminar.keys.SvgAttr`,{cf:1,r:1});function ys(){}x=ys.prototype=new w,x.constructor=ys,x.am=(function(e){}),new E().i(ys,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cm:1,S:1});function bs(e,t){if(this.dZ=null,this.dZ=e,t===null)throw xu(new Su)}x=bs.prototype=new w,x.constructor=bs,x.am=(function(e){var t=Hr(),n=(()=>{this.dZ.f(e)});if(Hr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,zr(t)}}}),new E().i(bs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cn:1,S:1});function xs(){}x=xs.prototype=new w,x.constructor=xs,new E().i(xs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cp:1,co:1});var Ss;function Cs(){return Ss||=new xs,Ss}function ws(e,t){if(this.e0=null,this.e0=e,t===null)throw xu(new Su)}x=ws.prototype=new w,x.constructor=ws,x.gq=(function(e){return this.e0.f(e)}),new E().i(ws,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cs:1,cq:1});function Ts(e){e.fp(new $r(new Zl((()=>{throw Yc(new U,`Attempting to use owner of unmounted element: `+Oo(D().gF(e.bC(),(D(),$())),``,` > `,``))}))))}function Es(e,t,n){return e.cv=t,e}function Ds(){this.cv=null}x=Ds.prototype=new w,x.constructor=Ds;function Os(){}Os.prototype=x,x.cR=(function(){return this.cv}),x.aV=(function(e){var t=this.gw();return e.S(new K((e=>{e.am(t)}))),t}),x.gw=(function(){return new sd(this,D().gA(this))}),new E().i(Ds,`com.raquo.laminar.tags.HtmlTag`,{al:1,a5:1});function ks(e,t){this.e6=null,this.e6=e}x=ks.prototype=new w,x.constructor=ks,new E().i(ks,`com.raquo.laminar.tags.SvgTag`,{cB:1,a5:1});function As(){}x=As.prototype=new w,x.constructor=As,x.bx=(function(e){return e}),x.c1=(function(e){return e}),new E().i(As,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cO:1,a3:1});function js(e,t){return e.b7=t,e.cG(),e}function Ms(){this.b7=null,this.b6=null,this.b8=!1,this.b9=null,this.ba=!1}x=Ms.prototype=new w,x.constructor=Ms;function Ns(){}Ns.prototype=x,x.i4=(function(){return this.b8||=(this.b6=new Cc(this.b7,new W((e=>void 0)),void 0),!0),this.b6}),x.h=(function(e,t){var n=this.i4().aV(new Q([]));return e.S(new W((e=>{e.f(this).am(n)}))),t.S(new W((e=>{e.am(n)}))),n}),x.bF=(function(){return this.ba||=(this.b9=new Kc,!0),this.b9});function Ps(){this.cw=null,Fs=this,this.cw=Or(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}x=Ps.prototype=new w,x.constructor=Ps,x.gH=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=M().gs(this.cw,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.cw.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new E().i(Ps,`java.lang.Character$`,{cV:1,a:1});var Fs;function Is(){return Fs||=new Ps,Fs}function Ls(){}x=Ls.prototype=new w,x.constructor=Ls,x.bz=(function(e){throw new _d(`For input string: "`+e+`"`)}),x.hm=(function(e,t,n){e===null&&zs().bz(e);var r=e.length;r===0&&zs().bz(e);var i=Is(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&zs().bz(e);var l=0;for(l=0;c!==r;){var u=i.gH(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&zs().bz(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&zs().bz(e),(l^s)-s|0}),new E().i(Ls,`java.lang.Integer$`,{d0:1,a:1});var Rs;function zs(){return Rs||=new Ls,Rs}function Bs(){}x=Bs.prototype=new w,x.constructor=Bs;function Vs(e){return e instanceof Bs||typeof e==`number`||e instanceof S}function Hs(e,t,n,r,i){this.aP=null,this.bc=null,this.aQ=null,this.aR=0,this.aO=0,this.aP=e,this.bc=t,this.aQ=n,this.aR=r,this.aO=i}x=Hs.prototype=new w,x.constructor=Hs,x.g=(function(e){return e instanceof Hs&&this.aQ===e.aQ&&this.aR===e.aR&&this.aO===e.aO&&this.aP===e.aP&&this.bc===e.bc}),x.s=(function(){var e=``;return this.aP!==`<jscode>`&&(e=``+e+this.aP+`.`),e=``+e+this.bc,this.aQ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aQ,this.aR>=0&&(e=e+`:`+this.aR,this.aO>=0&&(e=e+`:`+this.aO)),e+=`)`),e}),x.m=(function(){return vd(this.aP)^vd(this.bc)^vd(this.aQ)^this.aR^this.aO});var Us=new E().i(Hs,`java.lang.StackTraceElement`,{av:1,a:1});function Ws(){}x=Ws.prototype=new w,x.constructor=Ws,x.hx=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+qn(e.a[a]),a=1+a|0;return i}),new E().i(Ws,`java.lang.String$`,{da:1,a:1});var Gs;function Ks(){return Gs||=new Ws,Gs}function R(e,t,n,r,i){return e.eR=t,e.eS=i,i&&e.h1(),e}var qs=class extends Error{constructor(){super(),this.eR=null,this.eS=!1,this.eQ=null,this.bS=null}hi(e){return this}by(){return this.eR}h1(){var e=this instanceof X?this.Q:this;return this.eQ=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}hc(){return this.bS===null&&(this.bS=this.eS?za().h0(this.eQ):new(Us.r()).C(0)),this.bS}s(){var e=Vn(this),t=this.by();return t===null?e:e+`: `+t}m(){return sr.prototype.m.call(this)}g(e){return sr.prototype.g.call(this,e)}get message(){var e=this.by();return e===null?``:e}get name(){return Vn(this)}toString(){return this.s()}};function Js(){this.eT=null,Ys=this,this.eT=new os(Wa().eO)}x=Js.prototype=new w,x.constructor=Js,x.hD=(function(){return this.eT.cF}),new E().i(Js,`scala.Console$`,{dl:1,ec:1});var Ys;function Xs(){return Ys||=new Js,Ys}function Zs(){}x=Zs.prototype=new w,x.constructor=Zs;function Qs(){}Qs.prototype=x,x.s=(function(){return`<function1>`});function $s(){}x=$s.prototype=new _o,x.constructor=$s;function ec(){}ec.prototype=x,x.ig=(function(e){if(e===null)return null;if(e.a.length===0){var t=Nd();return tf(),t.f7}return new Yf(e)});function tc(e,t){if(t===e)e.fi(Zu().fA(t));else for(var n=t.j();n.r();)e.cI(n.o());return e}function nc(){}x=nc.prototype=new w,x.constructor=nc;function rc(){}rc.prototype=x,x.s=(function(){return`<function0>`});function ic(){}x=ic.prototype=new w,x.constructor=ic;function ac(){}ac.prototype=x,x.s=(function(){return`<function1>`});function oc(){}x=oc.prototype=new w,x.constructor=oc;function sc(){}sc.prototype=x,x.s=(function(){return`<function2>`});function cc(){}x=cc.prototype=new w,x.constructor=cc;function lc(){}lc.prototype=x,x.s=(function(){return`<function3>`});function uc(e){this.bX=!1,this.bX=e}x=uc.prototype=new w,x.constructor=uc,x.s=(function(){return``+this.bX}),new E().i(uc,`scala.runtime.BooleanRef`,{ek:1,a:1});function dc(e){this.bm=0,this.bm=e}x=dc.prototype=new w,x.constructor=dc,x.s=(function(){return``+this.bm}),new E().i(dc,`scala.runtime.IntRef`,{em:1,a:1});function fc(){this.t=0,this.ff=0,this.gb=0,this.ga=0,pc=this,this.t=vd(`Seq`),this.ff=vd(`Map`),this.gb=vd(`Set`),this.ga=this.ia($(),this.ff)}x=fc.prototype=new cs,x.constructor=fc,x.fO=(function(e){return cf(e)?this.hh(e,this.t):e instanceof Bf?this.hq(e,this.t):this.hC(e,this.t)}),new E().i(fc,`scala.util.hashing.MurmurHash3$`,{eN:1,eM:1});var pc;function z(){return pc||=new fc,pc}var mc=class extends qs{};function hc(){this.cd=null,this.cW=null,this.cX=null,gc=this,this.cd=Zu().fj(P().a4(new(N.r()).C([]))),this.cW=new K((e=>{try{console.error(this.c6(e)+`
`+this.hb(e,`
`))}catch(e){var t=e instanceof qs?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cX=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.Q:t})),this.hI(this.cW)}x=hc.prototype=new w,x.constructor=hc,x.c6=(function(e){try{var t=e.by()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Bn(e).cQ()+`: `+t}),x.hb=(function(e,t){try{return Oo(Qc().ig(e.hc()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.hI=(function(e){this.cd.cI(e)}),x.b0=(function(e){for(var t=this.cd.j();t.r();){var n=t.o();try{n.f(e)}catch(e){var r=e instanceof qs?e:new X(e),i=this.cX;if(n===null?i===null:n.g(i))throw r instanceof X?r.Q:r;console.warn(`Error processing an unhandled error callback:`),$o().hY(0,new Zl((e=>(()=>{throw e instanceof X?e.Q:e}))(r)))}}}),new E().i(hc,`com.raquo.airstream.core.AirstreamError$`,{bi:1,ea:1,eb:1});var gc;function _c(){return gc||=new hc,gc}function B(e,t,n){return new jl(n.gq(t))}function vc(e,t,n){return new bs(new K((e=>{(wi(),new xi(t,null,null)).S(new K((e=>(t=>{$i().bZ(e,t,void 0)}))(e)))})),Ji())}function yc(e,t){this.aN=null,this.cq=null,this.cr=null,this.aN=e,this.cq=(n=>{var r=e.cl.f(n);r.e()||t.f(r.u())}),this.cr=(()=>{var e=null;e=this;var t={};if(e===null)throw xu(new Su);return t.capture=e.aN.cn,t.passive=e.aN.cm,t})()}x=yc.prototype=new w,x.constructor=yc,x.am=(function(e){this.gt(e,!1)}),x.gt=(function(e,t){if(ru(e,this)===-1){var n=new K((t=>(D().gg(e.G,this),new ui(t.dU,new Zl((()=>{var t=ru(e,this);t!==-1&&(nu(e,t),D().hL(e.G,this))})))))),r=t?na().ib(e,n):ii().cV(e.a0,new K((t=>n.f(new Gi(e,t)))),!1);return tu(e,this,t),r}var i=new K((e=>void 0));return ii().fS(e.a0,new K((t=>{i.f(new Gi(e,t))})),!1)}),x.s=(function(){return`EventListener(`+this.aN.b5.bO+`)`});var bc=new E().i(yc,`com.raquo.laminar.modifiers.EventListener`,{cj:1,S:1,ci:1});function xc(e,t,n){this.dX=null,this.dY=null,this.dW=null,this.dX=e,this.dY=t,this.dW=n}x=xc.prototype=new w,x.constructor=xc,x.am=(function(e){this.dW.go(e,this.dX,this.dY)}),new E().i(xc,`com.raquo.laminar.modifiers.KeySetter`,{ck:1,S:1,ct:1});function Sc(e,t){if(this.ct=null,this.e2=null,this.e3=null,this.e2=t,Ts(this),e===null)throw Yc(new U,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().hl(e,document))throw Yc(new U,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.e3=e,this.hv()}x=Sc.prototype=new w,x.constructor=Sc,x.c4=(function(){return this.ct}),x.fp=(function(e){this.ct=e}),x.hv=(function(){return this.ct.fh(),$i().bZ(this,this.e2,void 0)}),x.bC=(function(){return this.e3}),new E().i(Sc,`com.raquo.laminar.nodes.RootNode`,{cy:1,a4:1,ak:1});function Cc(e,t,n){this.cv=null,this.e5=null,this.e5=e,Es(this,e,!1)}x=Cc.prototype=new Os,x.constructor=Cc,x.cR=(function(){return this.e5}),new E().i(Cc,`com.raquo.laminar.tags.CustomHtmlTag`,{cA:1,al:1,a5:1});function wc(){this.b7=null,this.b6=null,this.b8=!1,this.b9=null,this.ba=!1,this.eb=null,this.ec=!1,this.e9=null,this.ea=!1,this.e7=null,this.e8=!1,js(this,`wa-button`)}x=wc.prototype=new Ns,x.constructor=wc,x.id=(function(){return this.ec||=(this.eb=Vc(),!0),this.eb}),x.i9=(function(){return this.ea||=(this.e9=kc(),!0),this.e9}),x.i8=(function(){return this.e8||=(this.e7=this.i9(),!0),this.e7}),x.cG=(function(){return kn}),new E().i(wc,`io.github.nguyenyou.webawesome.laminar.Button$`,{cG:1,a7:1,a6:1});var Tc;function Ec(){return Tc||=new wc,Tc}function Dc(){this.Y=null,this.a9=null,this.ed=null,this.ee=!1,L(this,`type`,new As)}x=Dc.prototype=new gs,x.constructor=Dc,x.i1=(function(){return this.ee||=(this.ed=kc().c(`submit`),!0),this.ed}),new E().i(Dc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ButtonButtonType$`,{cH:1,W:1,r:1});var Oc;function kc(){return Oc||=new Dc,Oc}function Ac(){this.Y=null,this.a9=null,this.ef=null,this.eg=!1,this.eh=null,this.ei=!1,this.ej=null,this.ek=!1,L(this,`size`,new As)}x=Ac.prototype=new gs,x.constructor=Ac,x.hp=(function(){return this.eg||=(this.ef=Mc().c(`large`),!0),this.ef}),x.hu=(function(){return this.ei||=(this.eh=Mc().c(`medium`),!0),this.eh}),x.i0=(function(){return this.ek||=(this.ej=Mc().c(`small`),!0),this.ej}),new E().i(Ac,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cI:1,W:1,r:1});var jc;function Mc(){return jc||=new Ac,jc}function Nc(){this.Y=null,this.a9=null,this.el=null,this.em=!1,this.en=null,this.eo=!1,L(this,`orientation`,new As)}x=Nc.prototype=new gs,x.constructor=Nc,x.fE=(function(){return this.em||=(this.el=Fc().c(`horizontal`),!0),this.el}),x.ie=(function(){return this.eo||=(this.en=Fc().c(`vertical`),!0),this.en}),new E().i(Nc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{cJ:1,W:1,r:1});var Pc;function Fc(){return Pc||=new Nc,Pc}function Ic(){this.Y=null,this.a9=null,this.ep=null,this.eq=!1,L(this,`appearance`,new As)}x=Ic.prototype=new gs,x.constructor=Ic,x.aX=(function(){return this.eq||=(this.ep=Rc().c(`button`),!0),this.ep}),new E().i(Ic,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RadioAppearance$`,{cK:1,W:1,r:1});var Lc;function Rc(){return Lc||=new Ic,Lc}function zc(){this.Y=null,this.a9=null,this.er=null,this.es=!1,L(this,`variant`,new As)}x=zc.prototype=new gs,x.constructor=zc,x.gv=(function(){return this.es||=(this.er=Vc().c(`brand`),!0),this.er}),new E().i(zc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cL:1,W:1,r:1});var Bc;function Vc(){return Bc||=new zc,Bc}function Hc(){this.b7=null,this.b6=null,this.b8=!1,this.b9=null,this.ba=!1,this.ex=null,this.ey=!1,this.et=null,this.eu=!1,this.ev=null,this.ew=!1,js(this,`wa-radio`)}x=Hc.prototype=new Ns,x.constructor=Hc,x.p=(function(){return this.ey||=(this.ex=(G(),L(new hs,`value`,O().a8)),!0),this.ex}),x.aU=(function(){return this.eu||=(this.et=Rc(),!0),this.et}),x.c2=(function(){return this.ew||=(this.ev=(G(),L(new hs,`disabled`,O().bN)),!0),this.ev}),x.cG=(function(){return Rn}),new E().i(Hc,`io.github.nguyenyou.webawesome.laminar.Radio$`,{cM:1,a7:1,a6:1});var Uc;function V(){return Uc||=new Hc,Uc}function Wc(){this.b7=null,this.b6=null,this.b8=!1,this.b9=null,this.ba=!1,this.eD=null,this.eE=!1,this.eB=null,this.eC=!1,this.eF=null,this.eG=!1,this.ez=null,this.eA=!1,this.eH=null,this.eI=!1,this.eL=null,this.eM=!1,this.eJ=null,this.eK=!1,js(this,`wa-radio-group`)}x=Wc.prototype=new Ns,x.constructor=Wc,x.ap=(function(){return this.eE||=(this.eD=(G(),L(new hs,`label`,O().a8)),!0),this.eD}),x.c7=(function(){return this.eC||=(this.eB=(G(),L(new hs,`hint`,O().a8)),!0),this.eB}),x.aZ=(function(){return this.eG||=(this.eF=(G(),L(new hs,`name`,O().a8)),!0),this.eF}),x.c2=(function(){return this.eA||=(this.ez=(G(),L(new hs,`disabled`,O().bN)),!0),this.ez}),x.cS=(function(){return this.eI||=(this.eH=Fc(),!0),this.eH}),x.cU=(function(){return this.eM||=(this.eL=Mc(),!0),this.eL}),x.hP=(function(){return this.eK||=(this.eJ=(G(),L(new hs,`required`,O().bN)),!0),this.eJ}),x.cG=(function(){return Ln}),new E().i(Wc,`io.github.nguyenyou.webawesome.laminar.RadioGroup$`,{cN:1,a7:1,a6:1});var Gc;function H(){return Gc||=new Wc,Gc}function Kc(){}x=Kc.prototype=new Qs,x.constructor=Kc,x.f=(function(e){return G().d}),new E().i(Kc,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{cP:1,dm:1,e:1});function qc(e){if(e.aq.Z)return e.aq.Q().cQ()+`[]`;for(var t=e.aq.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Jc(e){this.cx=null,this.aq=e}x=Jc.prototype=new w,x.constructor=Jc,x.s=(function(){return(this.aq.Y?`interface `:this.aq.X?``:`class `)+this.aq.N}),x.cQ=(function(){return this.cx===null&&(this.cx=qc(this)),this.cx}),new E().i(Jc,`java.lang.Class`,{cW:1,a:1,L:1});function Yc(e,t){return R(e,t,null,!0,!0),e}var U=class extends qs{};new E().i(U,`java.lang.Exception`,{K:1,s:1,a:1});function Xc(){this.g6=null,Zc=this,Ju(),this.g6=ul()}x=Xc.prototype=new ec,x.constructor=Xc,new E().i(Xc,`scala.Predef$`,{dx:1,dq:1,dr:1});var Zc;function Qc(){return Zc||=new Xc,Zc}function $c(e,t){return e.bV=t,e}function el(){this.bV=null}x=el.prototype=new w,x.constructor=el;function tl(){}tl.prototype=x,x.c5=(function(e){return this.bV.cO(e,Qd())}),x.c0=(function(e){return this.bV.cO(e,Qd())});function nl(e,t){return new Lu(e).gz(t)}function rl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?sl().I:new Bu(e,r,i)}function il(e,t){for(var n=t.j();e.r();)if(!n.r()||!Ho().E(e.o(),n.o()))return!1;return!n.r()}function al(){this.I=null,ol=this,this.I=new Nu}x=al.prototype=new w,x.constructor=al,new E().i(al,`scala.collection.Iterator$`,{dI:1,a:1,Z:1});var ol;function sl(){return ol||=new al,ol}function cl(){}x=cl.prototype=new w,x.constructor=cl,new E().i(cl,`scala.collection.immutable.Map$`,{dY:1,a:1,dN:1});var ll;function ul(){return ll||=new cl,ll}function dl(e){this.f8=null,this.f8=e}x=dl.prototype=new rc,x.constructor=dl,x.aF=(function(){return(0,this.f8)()}),new E().i(dl,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{eg:1,be:1,ax:1});function W(e){this.f9=null,this.f9=e}x=W.prototype=new ac,x.constructor=W,x.f=(function(e){return(0,this.f9)(e)}),new E().i(W,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eh:1,bf:1,e:1});var fl=new E().i(0,`scala.runtime.Nothing$`,{en:1,s:1,a:1});function pl(){}x=pl.prototype=new w,x.constructor=pl,x.h7=(function(e){return(t=>e.f(t))}),new E().i(pl,`scala.scalajs.js.Any$`,{et:1,eu:1,ev:1});var ml;function hl(){return ml||=new pl,ml}function gl(){}x=gl.prototype=new rc,x.constructor=gl;function _l(){}_l.prototype=x;function vl(){}x=vl.prototype=new ac,x.constructor=vl;function yl(){}yl.prototype=x;function bl(){}x=bl.prototype=new sc,x.constructor=bl;function xl(){}xl.prototype=x;function Sl(){}x=Sl.prototype=new lc,x.constructor=Sl;function Cl(){}Cl.prototype=x;function wl(e,t,n,r){if(this.d0=null,this.cY=!1,this.ce=null,this.cZ=null,this.d0=e,this.cY=t,this.ce=n,r===null)throw xu(new Su);this.cZ=void 0}x=wl.prototype=new w,x.constructor=wl,x.s=(function(){return Ar(this)}),x.hA=(function(e){try{this.d0.f(e)}catch(e){var t=e instanceof qs?e:new X(e);this.cY?this.hz(new nd(t)):_c().b0(new nd(t))}}),x.hz=(function(e){try{this.ce.c8(e)?this.ce.f(e):_c().b0(e)}catch(n){var t=n instanceof qs?n:new X(n);_c().b0(new rd(t,e))}}),new E().i(wl,`com.raquo.airstream.core.Observer$$anon$8`,{bm:1,bn:1,bj:1,bk:1});function Tl(e){if(this.dc=null,this.dd=!1,this.fX=null,e===null)throw xu(new Su);Ni(this)}x=Tl.prototype=new w,x.constructor=Tl,x.i3=(function(){return this.dd||=(this.dc=new ks(`svg`,!1),!0),this.dc}),new E().i(Tl,`com.raquo.laminar.api.Laminar$svg$`,{bG:1,c8:1,bP:1,bR:1});function El(){this.d=null,Dl=this,this.d=new pf}x=El.prototype=new w,x.constructor=El,new E().i(El,`com.raquo.laminar.api.package$`,{bJ:1,ae:1,ai:1,ad:1});var Dl;function G(){return Dl||=new El,Dl}function Ol(e,t,n){return e.aa=t,e.ab=n,e}function kl(){this.aa=null,this.ab=null}x=kl.prototype=new Vi,x.constructor=kl;function Al(){}Al.prototype=x,x.c=(function(e){return new xc(this,Wn(e),new $l(((e,t,n)=>{D().fQ(e,t,n)})))});function jl(e){this.e4=null,this.cu=null,this.e4=q(),this.cu=D().gC(e)}x=jl.prototype=new w,x.constructor=jl,x.fR=(function(e){this.e4=e}),x.fU=(function(e){}),x.am=(function(e){$i().bZ(e,this,void 0)}),x.i6=(function(){return this.cu.data}),x.bC=(function(){return this.cu}),new E().i(jl,`com.raquo.laminar.nodes.TextNode`,{cz:1,a4:1,S:1,aj:1});function Ml(){}x=Ml.prototype=new w,x.constructor=Ml;function Nl(){}Nl.prototype=x;function Pl(e,t){return e===t}function Fl(e){return e?1231:1237}var Il=new E().i(0,`java.lang.Boolean`,{cT:1,a:1,N:1,L:1},(e=>typeof e==`boolean`));function Ll(e){return e}function Rl(e,t){return t instanceof zn&&e===t.c}var zl=new E().i(0,`java.lang.Character`,{ar:1,a:1,N:1,L:1},(e=>e instanceof zn)),Bl=class extends U{};function Vl(){this.q=null,this.q=``}x=Vl.prototype=new w,x.constructor=Vl,x.gm=(function(e){var t=Ks().hx(e,0,e.a.length);return this.q=``+this.q+t,this}),x.s=(function(){return this.q}),x.i=(function(){return this.q.length}),x.fm=(function(e){return this.q.charCodeAt(e)}),new E().i(Vl,`java.lang.StringBuilder`,{db:1,a8:1,ap:1,a:1});function Hl(){}x=Hl.prototype=new w,x.constructor=Hl,x.s=(function(){return`<function1>`}),x.c8=(function(e){return!1}),x.gp=(function(e){throw new Du(e)}),x.f=(function(e){this.gp(e)}),new E().i(Hl,`scala.PartialFunction$$anon$1`,{dw:1,e:1,g:1,a:1});function Ul(){}x=Ul.prototype=new w,x.constructor=Ul;function Wl(){}Wl.prototype=x,x.x=(function(){return-1}),x.aT=(function(e,t,n,r){return ko(this,e,t,n,r)}),x.j=(function(){return this}),x.c3=(function(e){return this.bE(e,-1)}),x.bE=(function(e,t){return rl(this,e,t)}),x.s=(function(){return`<iterator>`});function Gl(e,t){return e.bW=t,e}function Kl(){this.bW=null}x=Kl.prototype=new w,x.constructor=Kl;function ql(){}ql.prototype=x,x.fj=(function(e){return this.bW.c0(e)}),x.fA=(function(e){return this.bW.c5(e)}),x.c0=(function(e){return this.fj(e)}),x.c5=(function(e){return this.fA(e)});function Jl(e,t){return t>=0&&e.a3(t)>0}function Yl(e){return e.a3(0)===0}function Xl(e,t){var n=e.x();if(n!==-1){var r=t.x();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return il(e.j(),t)}function Zl(e){this.fc=null,this.fc=e}x=Zl.prototype=new _l,x.constructor=Zl,x.aF=(function(){return(0,this.fc)()}),new E().i(Zl,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{eA:1,ez:1,be:1,ax:1});function K(e){this.fd=null,this.fd=e}x=K.prototype=new yl,x.constructor=K,x.f=(function(e){return(0,this.fd)(e)}),new E().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{eC:1,eB:1,bf:1,e:1});function Ql(e){this.g9=null,this.g9=e}x=Ql.prototype=new xl,x.constructor=Ql,new E().i(Ql,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eE:1,eD:1,ei:1,dn:1});function $l(e){this.fe=null,this.fe=e}x=$l.prototype=new Cl,x.constructor=$l,x.go=(function(e,t,n){return(0,this.fe)(e,t,n)}),new E().i($l,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eG:1,eF:1,ej:1,dp:1});function eu(e){e.cs=new fi(new Zl((()=>{e.a0.fh()})),new Zl((()=>{e.a0.gD()}))),e.au=void 0}function tu(e,t,n){if(e.au===void 0)e.au=hi().ao(P().a4(new(bc.r()).C([t])));else if(n){var r=e.au;if(r===void 0)throw new Tu(`undefined.get`);r.unshift(t)}else{var i=e.au;if(i===void 0)throw new Tu(`undefined.get`);i.push(t)}}function nu(e,t){var n=e.au;n!==void 0&&n.splice(t,1)}function ru(e,t){var n=e.au;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Hn(a,t))?r=!0:i=1+i|0}return r?i:-1}function iu(e,t){ou(e,e.bR,t)&&su(e,t)}function au(e,t){var n=e.bR;e.bR=t,ou(e,n,t)||su(e,t)}function ou(e,t,n){var r=!t.e()&&!t.u().c4().B.e(),i=!n.e()&&!n.u().c4().B.e();return r&&!i}function su(e,t){cu(e,t.e()?q():new J(t.u().c4()))}function cu(e,t){if(t.e())e.cs.gy();else{var n=t.u();e.cs.hV(n)}}function lu(){}x=lu.prototype=new Nl,x.constructor=lu;function uu(){}uu.prototype=x;var du=class extends Bl{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(du,`java.lang.ArithmeticException`,{cS:1,O:1,K:1,s:1,a:1});var fu=new E().i(0,`java.lang.Byte`,{cU:1,T:1,a:1,N:1,L:1},(e=>$n(e)));function pu(e,t){return R(e,t,null,!0,!0),e}function mu(e){return R(e,null,null,!0,!0),e}var hu=class extends Bl{};new E().i(hu,`java.lang.IllegalArgumentException`,{at:1,O:1,K:1,s:1,a:1});function gu(e,t){return R(e,t,null,!0,!0),e}function _u(e,t){return R(e,`Index out of range: `+t,null,!0,!0),e}var vu=class extends Bl{};new E().i(vu,`java.lang.IndexOutOfBoundsException`,{cY:1,O:1,K:1,s:1,a:1});function yu(){}x=yu.prototype=new Nl,x.constructor=yu,new E().i(yu,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{d2:1,ao:1,am:1,aq:1,an:1});function bu(e,t){return R(e,t,null,!0,!0),e}function xu(e){return R(e,null,null,!0,!0),e}var Su=class extends Bl{};new E().i(Su,`java.lang.NullPointerException`,{d3:1,O:1,K:1,s:1,a:1});var Cu=new E().i(0,`java.lang.Short`,{d6:1,T:1,a:1,N:1,L:1},(e=>er(e))),wu=class extends Bl{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(wu,`java.lang.UnsupportedOperationException`,{de:1,O:1,K:1,s:1,a:1});var Tu=class extends Bl{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Tu,`java.util.NoSuchElementException`,{di:1,O:1,K:1,s:1,a:1});function Eu(e){if(!e.eV){if(e.bT===null)var t=`null`;else{var n=P().gk(e.bT),r=n===null?`of a JS class`:`of class `+n.aq.N;try{var t=e.bT+` (`+r+`)`}catch{var t=`an instance `+r}}e.eU=t,e.eV=!0}return e.eU}var Du=class extends Bl{constructor(e){super(),this.bT=null,this.eU=null,this.eV=!1,this.bT=e,R(this,null,null,!0,!0)}by(){return Eu(this)}};new E().i(Du,`scala.MatchError`,{ds:1,O:1,K:1,s:1,a:1});function Ou(){}x=Ou.prototype=new w,x.constructor=Ou;function ku(){}ku.prototype=x,x.aH=(function(){return new Au(this)}),x.e=(function(){return this===q()}),x.x=(function(){return!this.e()|0}),x.j=(function(){return this.e()?sl().I:new Pu(this.u())});function Au(e){if(this.bd=0,this.eY=0,this.eX=null,e===null)throw xu(new Su);this.eX=e,this.bd=0,this.eY=e.U()}x=Au.prototype=new Wl,x.constructor=Au,x.r=(function(){return this.bd<this.eY}),x.o=(function(){var e=this.eX.V(this.bd);return this.bd=1+this.bd|0,e}),new E().i(Au,`scala.Product$$anon$1`,{dy:1,P:1,b:1,c:1,Q:1});function ju(e){this.bV=null,$c(this,e)}x=ju.prototype=new tl,x.constructor=ju,new E().i(ju,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dE:1,dD:1,a:1,Z:1,a1:1});function Mu(e){return Oo(e,e.aG()+`(`,`, `,`)`)}function Nu(){}x=Nu.prototype=new Wl,x.constructor=Nu,x.r=(function(){return!1}),x.hy=(function(){throw new Tu(`next on empty iterator`)}),x.x=(function(){return 0}),x.o=(function(){this.hy()}),x.bE=(function(e,t){return this}),new E().i(Nu,`scala.collection.Iterator$$anon$19`,{dJ:1,P:1,b:1,c:1,Q:1});function Pu(e){this.f1=null,this.bg=!1,this.f1=e,this.bg=!1}x=Pu.prototype=new Wl,x.constructor=Pu,x.r=(function(){return!this.bg}),x.o=(function(){return this.bg?sl().I.o():(this.bg=!0,this.f1)}),x.bE=(function(e,t){return this.bg||e>0||t===0?sl().I:this}),new E().i(Pu,`scala.collection.Iterator$$anon$20`,{dK:1,P:1,b:1,c:1,Q:1});function Fu(e){for(;;)if(e.z instanceof Lu){var t=e.z;if(e.z=t.z,e.ad=t.ad,t.K!==null){e.J===null&&(e.J=t.J);var n=t.J;n===null&&Ko().cb(),n.bh=e.K,e.K=t.K}}else return}function Iu(e){for(;;)if(e.K===null)return e.z=null,e.J=null,!1;else{if(e.z=e.K.hg(),e.J===e.K){var t=e.J;t===null&&Ko().cb(),e.J=t.bh}if(e.K=e.K.bh,Fu(e),e.ad)return!0;if(!(e.z!==null&&e.z.r()))continue;return e.ad=!0,!0}}function Lu(e){this.z=null,this.K=null,this.J=null,this.ad=!1,this.z=e,this.K=null,this.J=null,this.ad=!1}x=Lu.prototype=new Wl,x.constructor=Lu,x.r=(function(){return this.ad?!0:this.z===null?!1:this.z.r()?(this.ad=!0,!0):Iu(this)}),x.o=(function(){if(this.r()){this.ad=!1;var e=this.z;return e===null&&Ko().cb(),e.o()}return sl().I.o()}),x.gz=(function(e){var t=new Ao(e,null);if(this.K===null)this.K=t,this.J=t;else{var n=this.J;n===null&&Ko().cb(),n.bh=t,this.J=t}return this.z===null&&(this.z=sl().I),this}),new E().i(Lu,`scala.collection.Iterator$ConcatIterator`,{aD:1,P:1,b:1,c:1,Q:1});function Ru(e){for(;e.a2>0;)e.ae.r()?(e.ae.o(),e.a2=e.a2-1|0):e.a2=0}function zu(e,t){if(e.C<0)return-1;var n=e.C-t|0;return n<0?0:n}function Bu(e,t,n){this.ae=null,this.C=0,this.a2=0,this.ae=e,this.C=n,this.a2=t}x=Bu.prototype=new Wl,x.constructor=Bu,x.x=(function(){var e=this.ae.x();if(e<0)return-1;var t=e-this.a2|0,n=t<0?0:t;if(this.C<0)return n;var r=this.C;return r<n?r:n}),x.r=(function(){return Ru(this),this.C!==0&&this.ae.r()}),x.o=(function(){return Ru(this),this.C>0?(this.C=this.C-1|0,this.ae.o()):this.C<0?this.ae.o():sl().I.o()}),x.bE=(function(e,t){var n=e>0?e:0;if(t<0)var r=zu(this,n);else if(t<=n)var r=0;else if(this.C<0)var r=t-n|0;else var i=zu(this,n),a=t-n|0,r=i<a?i:a;var o=this.a2+n|0;return r===0?sl().I:o<0?(this.a2=2147483647,this.C=0,nl(this,new dl((()=>new Bu(this.ae,o-2147483647|0,r))))):(this.a2=o,this.C=r,this)}),new E().i(Bu,`scala.collection.Iterator$SliceIterator`,{dM:1,P:1,b:1,c:1,Q:1});function Vu(e,t){return t>=0&&e.a3(t)>0}function Hu(e,t){if(t<0)throw gu(new vu,``+t);var n=e.gM(t);if(n.e())throw gu(new vu,``+t);return n.T()}function Uu(e,t){return lf(t)?Wu(e,e,t):Xl(e,t)}function Wu(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.e()&&!r.e()&&Ho().E(i.T(),r.T())){var a=i.F(),o=r.F();i=a,r=o;continue}return i.e()&&r.e()}}function Gu(e){if(this.bj=null,e===null)throw xu(new Su);this.bj=e}x=Gu.prototype=new Wl,x.constructor=Gu,x.r=(function(){return!this.bj.e()}),x.o=(function(){var e=this.bj.T();return this.bj=this.bj.F(),e}),new E().i(Gu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dR:1,P:1,b:1,c:1,Q:1});function Ku(){qu=this,$(),$()}x=Ku.prototype=new w,x.constructor=Ku,x.c0=(function(e){return $().fK(e)}),x.c5=(function(e){return $().fK(e)}),new E().i(Ku,`scala.collection.immutable.List$`,{dX:1,a:1,Z:1,a1:1,aH:1});var qu;function Ju(){return qu||=new Ku,qu}function Yu(){this.bW=null,Gl(this,td())}x=Yu.prototype=new ql,x.constructor=Yu,new E().i(Yu,`scala.collection.mutable.Buffer$`,{e4:1,dO:1,a:1,Z:1,a1:1});var Xu;function Zu(){return Xu||=new Yu,Xu}function Qu(e){this.fb=null,this.bn=0,this.fa=0,this.fb=e,this.bn=0,this.fa=e.U()}x=Qu.prototype=new Wl,x.constructor=Qu,x.r=(function(){return this.bn<this.fa}),x.o=(function(){var e=this.fb.V(this.bn);return this.bn=1+this.bn|0,e}),new E().i(Qu,`scala.runtime.ScalaRunTime$$anon$1`,{er:1,P:1,b:1,c:1,Q:1});function $u(){}x=$u.prototype=new w,x.constructor=$u,x.c0=(function(e){return this.fB(e)}),x.fB=(function(e){return tc(ap(new op),e).fM()}),x.c5=(function(e){return this.fB(e)}),new E().i($u,`scala.scalajs.js.WrappedArray$`,{ex:1,aH:1,a:1,Z:1,a1:1});var ed;function td(){return ed||=new $u,ed}var nd=class e extends mc{constructor(e){super(),this.b2=null,this.b2=e,R(this,`ObserverError: `+_c().c6(e),null,!0,!0)}aH(){return new Au(this)}m(){return z().fl(this,-889275714,null)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.b2,r=t.b2;return n===null?r===null:n.g(r)}return!1}U(){return 1}W(){return`ObserverError`}V(e){if(e===0)return this.b2;throw gu(new vu,``+e)}s(){return`ObserverError: `+this.b2}};new E().i(nd,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aa:1,a2:1,s:1,a:1,d:1,R:1});var rd=class e extends mc{constructor(e,t){super(),this.b4=null,this.b3=null,this.b4=e,this.b3=t,R(this,`ObserverErrorHandlingError: `+_c().c6(e)+`; cause: `+_c().c6(t),null,!0,!0),this.hi(t)}aH(){return new Au(this)}m(){return z().fl(this,-889275714,null)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.b4,r=t.b4;if(n===null?r===null:n.g(r)){var i=this.b3,a=t.b3;return i===null?a===null:i.g(a)}return!1}return!1}U(){return 2}W(){return`ObserverErrorHandlingError`}V(e){if(e===0)return this.b4;if(e===1)return this.b3;throw gu(new vu,``+e)}s(){return`ObserverErrorHandlingError: `+this.b4+`; cause: `+this.b3}};new E().i(rd,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ab:1,a2:1,s:1,a:1,d:1,R:1});var id=class e extends mc{constructor(e,t){super(),this.aJ=null,this.aI=0,this.aJ=e,this.aI=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aH(){return new Au(this)}m(){var e=-889275714;return e=F().n(e,vd(`TransactionDepthExceeded`)),e=F().n(e,F().v(this.aJ)),e=F().n(e,this.aI),F().y(e,2)}g(t){if(this===t)return!0;if(t instanceof e){if(this.aI===t.aI){var n=this.aJ,r=t.aJ;return n===null?r===null:n===r}return!1}return!1}U(){return 2}W(){return`TransactionDepthExceeded`}V(e){if(e===0)return this.aJ;if(e===1)return this.aI;throw gu(new vu,``+e)}s(){return`TransactionDepthExceeded: `+this.aJ+`; maxDepth: `+this.aI}};new E().i(id,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ac:1,a2:1,s:1,a:1,d:1,R:1});function ad(e){this.aa=null,this.ab=null,this.dI=null,this.dJ=!1,Ol(this,e,$())}x=ad.prototype=new Al,x.constructor=ad,x.fn=(function(){return this.dJ||=(this.dI=this.c(`column`),!0),this.dI}),new E().i(ad,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bX:1,X:1,r:1,U:1,V:1,c2:1});function od(e){this.aa=null,this.ab=null,this.dK=null,this.dL=!1,Ol(this,e,$())}x=od.prototype=new Al,x.constructor=od,x.fW=(function(){return this.dL||=(this.dK=this.c(`wrap`),!0),this.dK}),new E().i(od,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bY:1,X:1,r:1,U:1,V:1,c4:1});function sd(e,t){this.bR=null,this.a0=null,this.cs=null,this.au=null,this.e1=null,this.G=null,this.e1=e,this.G=t,this.bR=q(),Ts(this),eu(this)}x=sd.prototype=new w,x.constructor=sd,x.am=(function(e){$i().bZ(e,this,void 0)}),x.c4=(function(){return this.a0}),x.fp=(function(e){this.a0=e}),x.fU=(function(e){iu(this,e)}),x.fR=(function(e){au(this,e)}),x.s=(function(){return`ReactiveHtmlElement(`+(this.G===null?`tag=`+this.e1.cR():this.G.outerHTML)+`)`}),x.bC=(function(){return this.G});var cd=new E().i(sd,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cx:1,a4:1,S:1,aj:1,ak:1,cv:1});function ld(e,t){return Object.is(e,t)}function ud(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Jn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var dd=new E().i(0,`java.lang.Double`,{as:1,T:1,a:1,N:1,L:1,Y:1},(e=>typeof e==`number`)),fd=new E().i(0,`java.lang.Float`,{cX:1,T:1,a:1,N:1,L:1,Y:1},(e=>nr(e))),pd=new E().i(0,`java.lang.Integer`,{cZ:1,T:1,a:1,N:1,L:1,Y:1},(e=>tr(e)));function md(e,t,n){if(n instanceof S){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function hd(e,t){return e^t}var gd=new E().i(0,`java.lang.Long`,{au:1,T:1,a:1,N:1,L:1,Y:1},(e=>e instanceof S)),_d=class extends hu{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(_d,`java.lang.NumberFormatException`,{d4:1,at:1,O:1,K:1,s:1,a:1});function vd(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function yd(e,t){return e===t}var bd=new E().i(0,`java.lang.String`,{d9:1,a:1,N:1,a8:1,L:1,Y:1},(e=>typeof e==`string`));function xd(){}x=xd.prototype=new ku,x.constructor=xd,x.m=(function(){return 2433880}),x.s=(function(){return`None`}),x.U=(function(){return 0}),x.W=(function(){return`None`}),x.V=(function(e){throw _u(new vu,e)}),x.h8=(function(){throw new Tu(`None.get`)}),x.u=(function(){this.h8()}),new E().i(xd,`scala.None$`,{dt:1,ay:1,b:1,d:1,R:1,a:1});var Sd;function q(){return Sd||=new xd,Sd}function J(e){this.be=null,this.be=e}x=J.prototype=new ku,x.constructor=J,x.m=(function(){return z().fL(this,1323286827,!0)}),x.g=(function(e){return this===e||e instanceof J&&Ho().E(this.be,e.be)}),x.s=(function(){return P().gf(this)}),x.U=(function(){return 1}),x.W=(function(){return`Some`}),x.V=(function(e){if(e===0)return this.be;throw _u(new vu,e)}),x.u=(function(){return this.be}),new E().i(J,`scala.Some`,{az:1,ay:1,b:1,d:1,R:1,a:1});function Cd(){}x=Cd.prototype=new w,x.constructor=Cd;function wd(){}wd.prototype=x,x.x=(function(){return-1}),x.S=(function(e){Do(this,e)}),x.aT=(function(e,t,n,r){return ko(this,e,t,n,r)}),x.aG=(function(){return this.b1()});function Y(e){this.bU=null,this.a1=0,this.bf=0,this.bU=e,this.a1=0,this.bf=ao().aY(this.bU)}x=Y.prototype=new Wl,x.constructor=Y,x.x=(function(){return this.bf-this.a1|0}),x.r=(function(){return this.a1<this.bf}),x.o=(function(){this.a1>=ao().aY(this.bU)&&sl().I.o();var e=P().aW(this.bU,this.a1);return this.a1=1+this.a1|0,e}),x.c3=(function(e){if(e>0){var t=this.a1+e|0;if(t<0)var n=this.bf;else var r=this.bf,n=r<t?r:t;this.a1=n}return this}),new E().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{dC:1,P:1,b:1,c:1,Q:1,a:1});function Td(e,t){return t<0?0:t>e.P?e.P:t}function Ed(e){this.f0=null,this.ac=0,this.P=0,this.f0=e,this.ac=0,this.P=e.i()}x=Ed.prototype=new Wl,x.constructor=Ed,x.x=(function(){return this.P}),x.r=(function(){return this.P>0}),x.o=(function(){if(this.P>0){var e=this.f0.k(this.ac);return this.ac=1+this.ac|0,this.P=this.P-1|0,e}return sl().I.o()}),x.c3=(function(e){if(e>0){this.ac=this.ac+e|0;var t=this.P-e|0;this.P=t<0?0:t}return this}),x.bE=(function(e,t){var n=Td(this,e),r=Td(this,t)-n|0;return this.P=r<0?0:r,this.ac=this.ac+n|0,this}),new E().i(Ed,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dH:1,P:1,b:1,c:1,Q:1,a:1});function Dd(e){return e.f5||=(e.f4=new Ff(new(fl.r()).C(0)),!0),e.f4}function Od(){this.g7=null,this.f4=null,this.f5=!1,kd=this,this.g7=new ju(this)}x=Od.prototype=new w,x.constructor=Od,x.h5=(function(e,t){return e instanceof wf?e:this.ic(ho().fz(e,t))}),x.ic=(function(e){if(e===null)return null;if(e instanceof T)return new Ff(e);if(e instanceof pr)return new Nf(e);if(e instanceof gr)return new jf(e);if(e instanceof mr)return new Pf(e);if(e instanceof hr)return new Mf(e);if(e instanceof ur)return new Af(e);if(e instanceof dr)return new kf(e);if(e instanceof fr)return new If(e);if(e instanceof lr)return new Of(e);if(eo(e,1))return new Lf(e);throw new Du(e)}),x.cO=(function(e,t){return this.h5(e,t)}),new E().i(Od,`scala.collection.immutable.ArraySeq$`,{dV:1,a:1,aC:1,aA:1,aB:1,aF:1});var kd;function Ad(){return kd||=new Od,kd}function jd(){this.g8=null,this.f7=null,Md=this,this.g8=new ju(this),this.f7=new Yf(new T(0))}x=jd.prototype=new w,x.constructor=jd,x.h6=(function(e,t){return this.hs(ho().fz(e,t))}),x.hs=(function(e){if(e===null)return null;if(e instanceof T)return new Yf(e);if(e instanceof pr)return new qf(e);if(e instanceof gr)return new Gf(e);if(e instanceof mr)return new Jf(e);if(e instanceof hr)return new Kf(e);if(e instanceof ur)return new Wf(e);if(e instanceof dr)return new Uf(e);if(e instanceof fr)return new Xf(e);if(e instanceof lr)return new Hf(e);if(eo(e,1))return new Zf(e);throw new Du(e)}),x.cO=(function(e,t){return this.h6(e,t)}),new E().i(jd,`scala.collection.mutable.ArraySeq$`,{e2:1,a:1,aC:1,aA:1,aB:1,aF:1});var Md;function Nd(){return Md||=new jd,Md}function Pd(e){this.aa=null,this.ab=null,this.dE=null,this.dF=!1,Ol(this,e,$())}x=Pd.prototype=new Al,x.constructor=Pd,x.cN=(function(){return this.dF||=(this.dE=this.c(`flex`),!0),this.dE}),new E().i(Pd,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bV:1,X:1,r:1,U:1,V:1,af:1,c1:1});function Fd(e){this.aa=null,this.ab=null,this.dG=null,this.dH=!1,Ol(this,e,$())}x=Fd.prototype=new Al,x.constructor=Fd,x.gx=(function(){return this.dH||=(this.dG=this.c(`center`),!0),this.dG}),new E().i(Fd,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bW:1,X:1,r:1,U:1,V:1,c6:1,c3:1});function Id(e){this.aa=null,this.ab=null,this.dM=null,this.dN=!1,Ol(this,e,$())}x=Id.prototype=new Al,x.constructor=Id,x.bB=(function(){return this.dN||=(this.dM=fs(this),!0),this.dM}),new E().i(Id,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bZ:1,X:1,r:1,U:1,V:1,ag:1,ah:1});function Ld(){}x=Ld.prototype=new uu,x.constructor=Ld;function Rd(){}Rd.prototype=x;function zd(e){return e.aG()+`(<not computed>)`}function Bd(){}x=Bd.prototype=new w,x.constructor=Bd;function Vd(){}Vd.prototype=x;var X=class e extends Bl{constructor(e){super(),this.Q=null,this.Q=e,R(this,null,null,!0,!0)}by(){return Wn(this.Q)}W(){return`JavaScriptException`}U(){return 1}V(e){return e===0?this.Q:F().hj(e)}aH(){return new Qu(this)}m(){return z().fL(this,1744042595,!0)}g(t){return this===t||t instanceof e&&Ho().E(this.Q,t.Q)}};new E().i(X,`scala.scalajs.js.JavaScriptException`,{bg:1,O:1,K:1,s:1,a:1,R:1,d:1});function Hd(e,t){typeof console<`u`&&(e.eN&&console.error?console.error(t):console.log(t))}function Ud(e){this.eN=!1,this.bb=null,this.eN=e,new yu,this.bb=``}x=Ud.prototype=new Rd,x.constructor=Ud,x.hn=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bb=``+this.bb+t,t=``;else{var r=this.bb,i=t;Hd(this,``+r+i.substring(0,n)),this.bb=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(Ud,`java.lang.JSConsoleBasedPrintStream`,{d1:1,cR:1,cQ:1,ao:1,am:1,aq:1,an:1,ap:1});function Wd(e,t,n){for(var r=n,i=t;;)if(i<=0||r.e())return r;else{var a=i-1|0,o=r.F();i=a,r=o}}function Gd(){this.bl=null}x=Gd.prototype=new Vd,x.constructor=Gd;function Kd(){}Kd.prototype=x,x.s=(function(){return this.bl}),x.g=(function(e){return this===e}),x.m=(function(){return Qn(this)});function qd(e){this.aa=null,this.ab=null,this.dO=null,this.dP=!1,Ol(this,e,$())}x=qd.prototype=new Al,x.constructor=qd,x.bB=(function(){return this.dP||=(this.dO=fs(this),!0),this.dO}),new E().i(qd,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{c0:1,X:1,r:1,U:1,V:1,ag:1,ah:1,c5:1,af:1});function Jd(){}x=Jd.prototype=new wd,x.constructor=Jd;function Yd(){}Yd.prototype=x,x.s=(function(){return zd(this)});function Xd(){this.bl=null,this.bl=`Any`,$()}x=Xd.prototype=new Kd,x.constructor=Xd,x.fN=(function(){return _r.l()}),x.fH=(function(e){return new T(e)}),new E().i(Xd,`scala.reflect.ManifestFactory$AnyManifest$`,{ee:1,bc:1,bb:1,a:1,bd:1,b8:1,d:1,b9:1,ba:1});var Zd;function Qd(){return Zd||=new Xd,Zd}function $d(){this.bl=null,this.bl=`Object`,$()}x=$d.prototype=new Kd,x.constructor=$d,x.fN=(function(){return _r.l()}),x.fH=(function(e){return new T(e)}),new E().i($d,`scala.reflect.ManifestFactory$ObjectManifest$`,{ef:1,bc:1,bb:1,a:1,bd:1,b8:1,d:1,b9:1,ba:1});var ef;function tf(){return ef||=new $d,ef}function Z(e,t){return e===t?!0:nf(t)&&t.cK(e)?e.cc(t):!1}function nf(e){return!!(e&&e.$classData&&e.$classData.n.f)}function rf(){}x=rf.prototype=new wd,x.constructor=rf;function af(){}af.prototype=x,x.fG=(function(e){return Jl(this,e)}),x.e=(function(){return Yl(this)}),x.cc=(function(e){return Xl(this,e)}),x.cK=(function(e){return!0}),x.g=(function(e){return Z(this,e)}),x.m=(function(){return z().fO(this)}),x.s=(function(){return Mu(this)}),x.c8=(function(e){return this.fG(e|0)});function of(){}x=of.prototype=new Yd,x.constructor=of;function sf(){}sf.prototype=x;function cf(e){return!!(e&&e.$classData&&e.$classData.n.m)}function lf(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function uf(e,t){return e.bi=t,e}function df(){this.bi=null}x=df.prototype=new sf,x.constructor=df;function ff(){}ff.prototype=x,x.k=(function(e){return this.bi.k(e)}),x.i=(function(){return this.bi.i()}),x.e=(function(){return this.bi.e()});function pf(){this.dh=null,this.di=!1,this.ds=null,this.dt=!1,this.dl=null,this.dm=!1,this.dC=null,this.dD=!1,this.dy=null,this.dz=!1,this.df=null,this.dg=!1,this.dj=null,this.dk=!1,this.dn=null,this.dp=!1,this.dq=null,this.dr=!1,this.du=null,this.dv=!1,this.dw=null,this.dx=!1,this.fZ=null,this.de=null,this.fY=null,this.dA=null,this.dB=!1,ji(this),Di(this),Ti(this),Ei(this)}x=pf.prototype=new w,x.constructor=pf,x.gu=(function(){return this.di||=(this.dh=Es(new Ds,`br`,!0),!0),this.dh}),x.h4=(function(){return this.dt||=(this.ds=Es(new Ds,`form`,!1),!0),this.ds}),x.cM=(function(){return this.dm||=(this.dl=Es(new Ds,`div`,!1),!0),this.dl}),x.bG=(function(){return this.dD||=(this.dC=new _s(`value`,O().a8),!0),this.dC}),x.hB=(function(){return this.dz||=(this.dy=new ms(`submit`),!0),this.dy}),x.gj=(function(){return this.dg||=(this.df=new Fd(`align-items`),!0),this.df}),x.cL=(function(){return this.dk||=(this.dj=new Pd(`display`),!0),this.dj}),x.fx=(function(){return this.dp||=(this.dn=new ad(`flex-direction`),!0),this.dn}),x.fy=(function(){return this.dr||=(this.dq=new od(`flex-wrap`),!0),this.dq}),x.cP=(function(){return this.dv||=(this.du=new Id(`gap`),!0),this.du}),x.ht=(function(){return this.dx||=(this.dw=new qd(`max-width`),!0),this.dw}),x.i2=(function(){return this.dB||=(this.dA=new Tl(this),!0),this.dA}),new E().i(pf,`com.raquo.laminar.api.package$$anon$1`,{bK:1,c7:1,bO:1,bT:1,bS:1,bU:1,bQ:1,bI:1,bE:1,bH:1,ae:1,ai:1,ad:1,bF:1});function mf(e){this.bi=null,uf(this,e)}x=mf.prototype=new ff,x.constructor=mf,x.a3=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),x.x=(function(){return this.i()}),x.j=(function(){return new Ed(this)}),x.b1=(function(){return`IndexedSeqView`}),new E().i(mf,`scala.collection.IndexedSeqView$Id`,{dG:1,dQ:1,dz:1,dA:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dT:1,k:1,dP:1,o:1,dF:1});function hf(){}x=hf.prototype=new af,x.constructor=hf;function gf(){}gf.prototype=x;function _f(e,t){return!yf(t)||e.i()===t.i()}function vf(e,t){if(yf(t)){if(e===t)return!0;var n=e.i(),r=n===t.i();if(r){var i=0,a=e.cJ(),o=t.cJ(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=Ho().E(e.k(i),t.k(i)),i=1+i|0;if(i<n&&r)for(var p=e.j().c3(i),m=t.j().c3(i);r&&p.r();)r=Ho().E(p.o(),m.o())}return r}return Xl(e,t)}function yf(e){return!!(e&&e.$classData&&e.$classData.n.u)}function bf(){}x=bf.prototype=new af,x.constructor=bf;function xf(){}xf.prototype=x;function Q(e){this.bY=null,this.bY=e}x=Q.prototype=new w,x.constructor=Q,x.cK=(function(e){return _f(this,e)}),x.cc=(function(e){return vf(this,e)}),x.cJ=(function(){return Io().f6}),x.j=(function(){return new Ed(new mf(this))}),x.a3=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),x.x=(function(){return this.i()}),x.g=(function(e){return Z(this,e)}),x.m=(function(){return z().fO(this)}),x.s=(function(){return Mu(this)}),x.e=(function(){return Yl(this)}),x.S=(function(e){Do(this,e)}),x.aT=(function(e,t,n,r){return ko(this,e,t,n,r)}),x.i=(function(){return this.bY.length|0}),x.k=(function(e){return this.bY[e]}),x.aG=(function(){return`WrappedVarArgs`}),x.c8=(function(e){return Jl(this,e|0)}),x.f=(function(e){return this.k(e|0)}),new E().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bh:1,u:1,b:1,c:1,j:1,i:1,h:1,v:1,e:1,g:1,k:1,d:1,f:1,x:1,w:1,o:1,m:1,I:1,y:1,p:1,q:1,a:1});function Sf(){}x=Sf.prototype=new xf,x.constructor=Sf;function Cf(){}Cf.prototype=x,x.fi=(function(e){return tc(this,e)});function wf(){}x=wf.prototype=new gf,x.constructor=wf;function Tf(){}Tf.prototype=x,x.a3=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),x.x=(function(){return this.i()}),x.b1=(function(){return`IndexedSeq`}),x.cK=(function(e){return _f(this,e)}),x.cc=(function(e){return vf(this,e)}),x.aG=(function(){return`ArraySeq`}),x.cJ=(function(){return 2147483647});function Ef(){}x=Ef.prototype=new xf,x.constructor=Ef;function Df(){}Df.prototype=x,x.a3=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),x.x=(function(){return this.i()}),x.b1=(function(){return`IndexedSeq`}),x.aG=(function(){return`ArraySeq`}),x.g=(function(e){return e instanceof Ef&&ao().aY(this.R())!==ao().aY(e.R())?!1:Z(this,e)});function Of(e){this.av=null,this.av=e}x=Of.prototype=new Tf,x.constructor=Of,x.i=(function(){return this.av.a.length}),x.bw=(function(e){return this.av.a[e]}),x.m=(function(){var e=z();return e.w(this.av,e.t)}),x.g=(function(e){return e instanceof Of?M().fv(this.av,e.av):Z(this,e)}),x.j=(function(){return new Y(this.av)}),x.k=(function(e){return this.bw(e)}),x.f=(function(e){return this.bw(e|0)}),new E().i(Of,`scala.collection.immutable.ArraySeq$ofBoolean`,{aJ:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function kf(e){this.aw=null,this.aw=e}x=kf.prototype=new Tf,x.constructor=kf,x.i=(function(){return this.aw.a.length}),x.bo=(function(e){return this.aw.a[e]}),x.m=(function(){var e=z();return e.w(this.aw,e.t)}),x.g=(function(e){return e instanceof kf?M().fq(this.aw,e.aw):Z(this,e)}),x.j=(function(){return new Y(this.aw)}),x.k=(function(e){return this.bo(e)}),x.f=(function(e){return this.bo(e|0)}),new E().i(kf,`scala.collection.immutable.ArraySeq$ofByte`,{aK:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Af(e){this.af=null,this.af=e}x=Af.prototype=new Tf,x.constructor=Af,x.i=(function(){return this.af.a.length}),x.bp=(function(e){return this.af.a[e]}),x.m=(function(){var e=z();return e.w(this.af,e.t)}),x.g=(function(e){return e instanceof Af?M().fr(this.af,e.af):Z(this,e)}),x.j=(function(){return new Y(this.af)}),x.aT=(function(e,t,n,r){return new Wf(this.af).aT(e,t,n,r)}),x.k=(function(e){return rr(this.bp(e))}),x.f=(function(e){return rr(this.bp(e|0))}),new E().i(Af,`scala.collection.immutable.ArraySeq$ofChar`,{aL:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function jf(e){this.ax=null,this.ax=e}x=jf.prototype=new Tf,x.constructor=jf,x.i=(function(){return this.ax.a.length}),x.bq=(function(e){return this.ax.a[e]}),x.m=(function(){var e=z();return e.w(this.ax,e.t)}),x.g=(function(e){if(e instanceof jf){var t=this.ax,n=e.ax;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.j=(function(){return new Y(this.ax)}),x.k=(function(e){return this.bq(e)}),x.f=(function(e){return this.bq(e|0)}),new E().i(jf,`scala.collection.immutable.ArraySeq$ofDouble`,{aM:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Mf(e){this.ay=null,this.ay=e}x=Mf.prototype=new Tf,x.constructor=Mf,x.i=(function(){return this.ay.a.length}),x.br=(function(e){return this.ay.a[e]}),x.m=(function(){var e=z();return e.w(this.ay,e.t)}),x.g=(function(e){if(e instanceof Mf){var t=this.ay,n=e.ay;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.j=(function(){return new Y(this.ay)}),x.k=(function(e){return this.br(e)}),x.f=(function(e){return this.br(e|0)}),new E().i(Mf,`scala.collection.immutable.ArraySeq$ofFloat`,{aN:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Nf(e){this.az=null,this.az=e}x=Nf.prototype=new Tf,x.constructor=Nf,x.i=(function(){return this.az.a.length}),x.bs=(function(e){return this.az.a[e]}),x.m=(function(){var e=z();return e.w(this.az,e.t)}),x.g=(function(e){return e instanceof Nf?M().fs(this.az,e.az):Z(this,e)}),x.j=(function(){return new Y(this.az)}),x.k=(function(e){return this.bs(e)}),x.f=(function(e){return this.bs(e|0)}),new E().i(Nf,`scala.collection.immutable.ArraySeq$ofInt`,{aO:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Pf(e){this.aA=null,this.aA=e}x=Pf.prototype=new Tf,x.constructor=Pf,x.i=(function(){return this.aA.a.length>>>1|0}),x.bt=(function(e){var t=this.aA.a,n=e<<1;return C(t[n],t[n+1|0])}),x.m=(function(){var e=z();return e.w(this.aA,e.t)}),x.g=(function(e){return e instanceof Pf?M().ft(this.aA,e.aA):Z(this,e)}),x.j=(function(){return new Y(this.aA)}),x.k=(function(e){return this.bt(e)}),x.f=(function(e){return this.bt(e|0)}),new E().i(Pf,`scala.collection.immutable.ArraySeq$ofLong`,{aP:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Ff(e){this.aB=null,this.aB=e}x=Ff.prototype=new Tf,x.constructor=Ff,x.i=(function(){return this.aB.a.length}),x.k=(function(e){return this.aB.a[e]}),x.m=(function(){var e=z();return e.w(this.aB,e.t)}),x.g=(function(e){return e instanceof Ff?ho().fw(this.aB,e.aB):Z(this,e)}),x.j=(function(){return new Y(this.aB)}),x.f=(function(e){return this.k(e|0)}),new E().i(Ff,`scala.collection.immutable.ArraySeq$ofRef`,{aQ:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function If(e){this.aC=null,this.aC=e}x=If.prototype=new Tf,x.constructor=If,x.i=(function(){return this.aC.a.length}),x.bu=(function(e){return this.aC.a[e]}),x.m=(function(){var e=z();return e.w(this.aC,e.t)}),x.g=(function(e){return e instanceof If?M().fu(this.aC,e.aC):Z(this,e)}),x.j=(function(){return new Y(this.aC)}),x.k=(function(e){return this.bu(e)}),x.f=(function(e){return this.bu(e|0)}),new E().i(If,`scala.collection.immutable.ArraySeq$ofShort`,{aR:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Lf(e){this.aS=null,this.aS=e}x=Lf.prototype=new Tf,x.constructor=Lf,x.i=(function(){return this.aS.a.length}),x.bv=(function(e){}),x.m=(function(){var e=z();return e.w(this.aS,e.t)}),x.g=(function(e){return e instanceof Lf?this.aS.a.length===e.aS.a.length:Z(this,e)}),x.j=(function(){return new Y(this.aS)}),x.k=(function(e){this.bv(e)}),x.f=(function(e){this.bv(e|0)}),new E().i(Lf,`scala.collection.immutable.ArraySeq$ofUnit`,{aS:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,o:1,m:1,I:1,u:1,p:1,q:1,y:1,M:1,a:1});function Rf(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.e()|0;else{if(!i.e()){var o=1+a|0,s=i.F();a=o,i=s;continue}return-1}}function zf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.e(),o=r.e();if(!(a||o)&&Ho().E(i.T(),r.T())){var s=i.F(),c=r.F();i=s,r=c;continue}return a&&o}}function Bf(){}x=Bf.prototype=new gf,x.constructor=Bf;function Vf(){}Vf.prototype=x,x.fG=(function(e){return Vu(this,e)}),x.k=(function(e){return Hu(this,e)}),x.cc=(function(e){return Uu(this,e)}),x.b1=(function(){return`LinearSeq`}),x.j=(function(){return new Gu(this)}),x.gc=(function(e){if(this.e())return e;if(e.e())return this;for(var t=new Qf(e.T(),this),n=t,r=e.F();!r.e();){var i=new Qf(r.T(),this);n.bk=i,n=i,r=r.F()}return t}),x.e=(function(){return this===$()}),x.fK=(function(e){if(e instanceof Bf)return this.gc(e);if(e.x()===0)return this;var t=e.j();if(t.r()){for(var n=new Qf(t.o(),this),r=n;t.r();){var i=new Qf(t.o(),this);r.bk=i,r=i}return n}return this}),x.S=(function(e){for(var t=this;!t.e();)e.f(t.T()),t=t.F()}),x.i=(function(){for(var e=this,t=0;!e.e();)t=1+t|0,e=e.F();return t}),x.a3=(function(e){return e<0?1:Rf(this,e,0,this)}),x.aG=(function(){return`List`}),x.g=(function(e){return e instanceof Bf?zf(this,this,e):Z(this,e)}),x.gM=(function(e){return Wd(this,e,this)}),x.c8=(function(e){return Vu(this,e|0)}),x.f=(function(e){return Hu(this,e|0)});function Hf(e){this.ag=null,this.ag=e}x=Hf.prototype=new Df,x.constructor=Hf,x.i=(function(){return this.ag.a.length}),x.bw=(function(e){return this.ag.a[e]}),x.m=(function(){var e=z();return e.w(this.ag,e.t)}),x.g=(function(e){return e instanceof Hf?M().fv(this.ag,e.ag):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.ag)}),x.R=(function(){return this.ag}),x.k=(function(e){return this.bw(e)}),x.f=(function(e){return this.bw(e|0)}),new E().i(Hf,`scala.collection.mutable.ArraySeq$ofBoolean`,{aV:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Uf(e){this.ah=null,this.ah=e}x=Uf.prototype=new Df,x.constructor=Uf,x.i=(function(){return this.ah.a.length}),x.bo=(function(e){return this.ah.a[e]}),x.m=(function(){var e=z();return e.w(this.ah,e.t)}),x.g=(function(e){return e instanceof Uf?M().fq(this.ah,e.ah):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.ah)}),x.R=(function(){return this.ah}),x.k=(function(e){return this.bo(e)}),x.f=(function(e){return this.bo(e|0)}),new E().i(Uf,`scala.collection.mutable.ArraySeq$ofByte`,{aW:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Wf(e){this.L=null,this.L=e}x=Wf.prototype=new Df,x.constructor=Wf,x.i=(function(){return this.L.a.length}),x.bp=(function(e){return this.L.a[e]}),x.m=(function(){var e=z();return e.w(this.L,e.t)}),x.g=(function(e){return e instanceof Wf?M().fr(this.L,e.L):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.L)}),x.aT=(function(e,t,n,r){var i=e.D;t.length!==0&&(i.q=``+i.q+t);var a=this.L.a.length;if(a!==0){if(n===``)i.gm(this.L);else{i.i();var o=this.L.a[0],s=``+qn(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.L.a[c],u=``+qn(l);i.q+=u,c=1+c|0}}}return r.length!==0&&(i.q=``+i.q+r),e}),x.R=(function(){return this.L}),x.k=(function(e){return rr(this.bp(e))}),x.f=(function(e){return rr(this.bp(e|0))}),new E().i(Wf,`scala.collection.mutable.ArraySeq$ofChar`,{aX:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Gf(e){this.M=null,this.M=e}x=Gf.prototype=new Df,x.constructor=Gf,x.i=(function(){return this.M.a.length}),x.bq=(function(e){return this.M.a[e]}),x.m=(function(){var e=z();return e.w(this.M,e.t)}),x.g=(function(e){if(e instanceof Gf){var t=e.M;if(this.M===t)return!0;if(this.M.a.length===t.a.length){for(var n=0;n<this.M.a.length&&this.M.a[n]===t.a[n];)n=1+n|0;return n>=this.M.a.length}return!1}return Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.M)}),x.R=(function(){return this.M}),x.k=(function(e){return this.bq(e)}),x.f=(function(e){return this.bq(e|0)}),new E().i(Gf,`scala.collection.mutable.ArraySeq$ofDouble`,{aY:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Kf(e){this.N=null,this.N=e}x=Kf.prototype=new Df,x.constructor=Kf,x.i=(function(){return this.N.a.length}),x.br=(function(e){return this.N.a[e]}),x.m=(function(){var e=z();return e.w(this.N,e.t)}),x.g=(function(e){if(e instanceof Kf){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.N)}),x.R=(function(){return this.N}),x.k=(function(e){return this.br(e)}),x.f=(function(e){return this.br(e|0)}),new E().i(Kf,`scala.collection.mutable.ArraySeq$ofFloat`,{aZ:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function qf(e){this.ai=null,this.ai=e}x=qf.prototype=new Df,x.constructor=qf,x.i=(function(){return this.ai.a.length}),x.bs=(function(e){return this.ai.a[e]}),x.m=(function(){var e=z();return e.w(this.ai,e.t)}),x.g=(function(e){return e instanceof qf?M().fs(this.ai,e.ai):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.ai)}),x.R=(function(){return this.ai}),x.k=(function(e){return this.bs(e)}),x.f=(function(e){return this.bs(e|0)}),new E().i(qf,`scala.collection.mutable.ArraySeq$ofInt`,{b0:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Jf(e){this.aj=null,this.aj=e}x=Jf.prototype=new Df,x.constructor=Jf,x.i=(function(){return this.aj.a.length>>>1|0}),x.bt=(function(e){var t=this.aj.a,n=e<<1;return C(t[n],t[n+1|0])}),x.m=(function(){var e=z();return e.w(this.aj,e.t)}),x.g=(function(e){return e instanceof Jf?M().ft(this.aj,e.aj):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.aj)}),x.R=(function(){return this.aj}),x.k=(function(e){return this.bt(e)}),x.f=(function(e){return this.bt(e|0)}),new E().i(Jf,`scala.collection.mutable.ArraySeq$ofLong`,{b1:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Yf(e){this.ak=null,this.ak=e}x=Yf.prototype=new Df,x.constructor=Yf,x.i=(function(){return this.ak.a.length}),x.k=(function(e){return this.ak.a[e]}),x.m=(function(){var e=z();return e.w(this.ak,e.t)}),x.g=(function(e){return e instanceof Yf?ho().fw(this.ak,e.ak):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.ak)}),x.R=(function(){return this.ak}),x.f=(function(e){return this.k(e|0)}),new E().i(Yf,`scala.collection.mutable.ArraySeq$ofRef`,{b2:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Xf(e){this.al=null,this.al=e}x=Xf.prototype=new Df,x.constructor=Xf,x.i=(function(){return this.al.a.length}),x.bu=(function(e){return this.al.a[e]}),x.m=(function(){var e=z();return e.w(this.al,e.t)}),x.g=(function(e){return e instanceof Xf?M().fu(this.al,e.al):Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.al)}),x.R=(function(){return this.al}),x.k=(function(e){return this.bu(e)}),x.f=(function(e){return this.bu(e|0)}),new E().i(Xf,`scala.collection.mutable.ArraySeq$ofShort`,{b3:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Zf(e){this.aD=null,this.aD=e}x=Zf.prototype=new Df,x.constructor=Zf,x.i=(function(){return this.aD.a.length}),x.bv=(function(e){}),x.m=(function(){var e=z();return e.w(this.aD,e.t)}),x.g=(function(e){return e instanceof Zf?this.aD.a.length===e.aD.a.length:Ef.prototype.g.call(this,e)}),x.j=(function(){return new Y(this.aD)}),x.R=(function(){return this.aD}),x.k=(function(e){this.bv(e)}),x.f=(function(e){this.bv(e|0)}),new E().i(Zf,`scala.collection.mutable.ArraySeq$ofUnit`,{b4:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function Qf(e,t){this.cE=null,this.bk=null,this.cE=e,this.bk=t}x=Qf.prototype=new Vf,x.constructor=Qf,x.aH=(function(){return new Au(this)}),x.U=(function(){return 2}),x.W=(function(){return`::`}),x.V=(function(e){if(e===0)return this.cE;if(e===1)return this.bk;throw _u(new vu,e)}),x.T=(function(){return this.cE}),x.F=(function(){return this.bk}),new E().i(Qf,`scala.collection.immutable.$colon$colon`,{dU:1,a9:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,aE:1,a0:1,aU:1,aT:1,p:1,q:1,aG:1,y:1,a:1,aI:1,R:1});function $f(){ep=this,$(),$()}x=$f.prototype=new Vf,x.constructor=$f,x.aH=(function(){return new Au(this)}),x.U=(function(){return 0}),x.W=(function(){return`Nil`}),x.V=(function(e){throw _u(new vu,e)}),x.hf=(function(){throw new Tu(`head of empty list`)}),x.i5=(function(){throw new wu(`tail of empty list`)}),x.x=(function(){return 0}),x.j=(function(){return sl().I}),x.T=(function(){this.hf()}),x.F=(function(){this.i5()}),new E().i($f,`scala.collection.immutable.Nil$`,{dZ:1,a9:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,v:1,x:1,w:1,aE:1,a0:1,aU:1,aT:1,p:1,q:1,aG:1,y:1,a:1,aI:1,R:1});var ep;function $(){return ep||=new $f,ep}function tp(e,t){return e.D=t,e}function np(e){return tp(e,new Vl),e}function rp(){this.D=null}x=rp.prototype=new xf,x.constructor=rp,x.fi=(function(e){return tc(this,e)}),x.j=(function(){return new Ed(new mf(this))}),x.a3=(function(e){var t=this.D.i();return t===e?0:t<e?-1:1}),x.b1=(function(){return`IndexedSeq`}),x.i=(function(){return this.D.i()}),x.x=(function(){return this.D.i()}),x.gh=(function(e){var t=this.D,n=``+qn(e);return t.q+=n,this}),x.s=(function(){return this.D.q}),x.e=(function(){return this.D.i()===0}),x.k=(function(e){return rr(this.D.fm(e))}),x.f=(function(e){var t=e|0;return rr(this.D.fm(t))}),x.cI=(function(e){return this.gh(ar(e))}),x.fM=(function(){return this.D.q}),new E().i(rp,`scala.collection.mutable.StringBuilder`,{e9:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,b6:1,b7:1,b5:1,e7:1,o:1,m:1,D:1,C:1,a8:1,a:1});function ip(e,t){return e.aE=t,e}function ap(e){return ip(e,[]),e}function op(){this.aE=null}x=op.prototype=new Cf,x.constructor=op,x.b1=(function(){return`IndexedSeq`}),x.j=(function(){return new Ed(new mf(this))}),x.a3=(function(e){var t=this.aE.length|0;return t===e?0:t<e?-1:1}),x.k=(function(e){return this.aE[e]}),x.i=(function(){return this.aE.length|0}),x.x=(function(){return this.aE.length|0}),x.aG=(function(){return`WrappedArray`}),x.fM=(function(){return this}),x.cI=(function(e){return this.aE.push(e),this}),x.f=(function(e){var t=e|0;return this.aE[t]}),new E().i(op,`scala.scalajs.js.WrappedArray`,{ew:1,e0:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,t:1,B:1,G:1,F:1,b6:1,b7:1,e8:1,e3:1,q:1,p:1,C:1,o:1,m:1,D:1,e5:1,b5:1,a:1}),ha(new(bd.r()).C([]));