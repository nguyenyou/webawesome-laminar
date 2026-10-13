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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=/* @__PURE__ */ new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},b=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:x,defineProperty:S,getOwnPropertyDescriptor:C,getOwnPropertyNames:w,getOwnPropertySymbols:T,getPrototypeOf:ee}=Object,te=globalThis,ne=te.trustedTypes,E=ne?ne.emptyScript:``,re=te.reactiveElementPolyfillSupport,ie=(e,t)=>e,ae={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?E:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!x(e,t),se={attribute:!0,type:String,converter:ae,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),te.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var D=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&S(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=C(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(ie(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ie(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ie(`properties`))){let e=this.properties,t=[...w(e),...T(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(b(e))}else e!==void 0&&t.push(b(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ae:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ae:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};D.elementStyles=[],D.shadowRootOptions={mode:`open`},D[ie(`elementProperties`)]=/* @__PURE__ */ new Map,D[ie(`finalized`)]=/* @__PURE__ */ new Map,re?.({ReactiveElement:D}),(te.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ce=globalThis,O=e=>e,le=ce.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,fe=`lit$${Math.random().toFixed(9).slice(2)}$`,pe=`?`+fe,me=`<${pe}>`,he=document,ge=()=>he.createComment(``),_e=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ve=Array.isArray,ye=e=>ve(e)||typeof e?.[Symbol.iterator]==`function`,be=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ce=/>/g,we=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Te=/'/g,Ee=/"/g,De=/^(?:script|style|textarea|title)$/i,Oe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),k=Symbol.for(`lit-noChange`),A=Symbol.for(`lit-nothing`),j=/* @__PURE__ */ new WeakMap,ke=he.createTreeWalker(he,129);function Ae(e,t){if(!ve(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}const je=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=xe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===xe?c[1]===`!--`?o=Se:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=we):(De.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=we):o=Ce:o===we?c[0]===`>`?(o=i??xe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?we:c[3]===`"`?Ee:Te):o===Ee||o===Te?o=we:o===Se||o===Ce?o=xe:(o=we,i=void 0);let d=o===we&&e[t+1].startsWith(`/>`)?` `:``;a+=o===xe?n+me:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+fe+d):n+fe+(l===-2?t:d)}return[Ae(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Me=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=je(t,n);if(this.el=e.createElement(l,r),ke.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ke.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(fe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Le:r[1]===`?`?Re:r[1]===`@`?ze:Ie}),i.removeAttribute(e)}else e.startsWith(fe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(De.test(i.tagName)){let e=i.textContent.split(fe),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ge()),ke.nextNode(),c.push({type:2,index:++a});i.append(e[t],ge())}}}else if(i.nodeType===8){if(i.data===pe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(fe,e+1))!==-1;)c.push({type:7,index:a}),e+=fe.length-1}}a++}}static createElement(e,t){let n=he.createElement(`template`);return n.innerHTML=e,n}};function Ne(e,t,n=e,r){if(t===k)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=_e(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ne(e,i._$AS(e,t.values),i,r)),t}var Pe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??he).importNode(t,!0);ke.currentNode=r;let i=ke.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Fe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Be(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ke.nextNode(),a++)}return ke.currentNode=he,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Fe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ne(this,e,t),_e(e)?e===A||e==null||e===``?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==k&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Me.createElement(Ae(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Pe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return t===void 0&&j.set(e.strings,t=new Me(e)),t}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ge()),this.O(ge()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=O(e).nextSibling;O(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ie=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=A}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ne(this,e,t,0),a=!_e(e)||e!==this._$AH&&e!==k,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ne(this,r[n+o],t,o),s===k&&(s=this._$AH[o]),a||=!_e(s)||s!==this._$AH[o],s===A?e=A:e!==A&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Le=class extends Ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Re=class extends Ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},ze=class extends Ie{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ne(this,e,t,0)??A)===k)return;let n=this._$AH,r=e===A&&n!==A||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==A&&(n===A||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Be=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}};const Ve={M:de,P:fe,A:pe,C:1,L:je,R:Pe,D:ye,V:Ne,I:Fe,H:Ie,N:Re,U:ze,B:Le,F:Be},He=ce.litHtmlPolyfillSupport;He?.(Me,Fe),(ce.litHtmlVersions??=[]).push(`3.3.3`);const Ue=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Fe(t.insertBefore(ge(),e),e,void 0,n??{})}return i._$AI(e),i},We=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ge=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};Ge._$litElement$=!0,Ge.finalized=!0,We.litElementHydrateSupport?.({LitElement:Ge});const Ke=We.litElementPolyfillSupport;Ke?.({LitElement:Ge}),(We.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const qe=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Je={attribute:!0,type:String,converter:ae,reflect:!1,hasChanged:oe},Ye=(e=Je,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function M(e){return(t,n)=>typeof n==`object`?Ye(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function N(e){return M({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Xe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ze(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Xe(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Xe(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qe=v`
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
`,$e=/;\s+$/;function et(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function tt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match($e)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var nt,rt=class extends Ge{constructor(){super(),u(this,nt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[Qe,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,nt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,nt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=tt({property:et(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=tt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};nt=/* @__PURE__ */ new WeakMap,s([M()],rt.prototype,`dir`,2),s([M()],rt.prototype,`lang`,2),s([M({type:Boolean,reflect:!0,attribute:`did-ssr`})],rt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var it=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),at=class extends rt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[it()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};at.formAssociated=!0,s([M({reflect:!0})],at.prototype,`name`,2),s([M({type:Boolean})],at.prototype,`disabled`,2),s([M({state:!0,attribute:!1})],at.prototype,`valueHasChanged`,2),s([M({state:!0,attribute:!1})],at.prototype,`hasInteracted`,2),s([M({attribute:`custom-error`,reflect:!0})],at.prototype,`customError`,2),s([M({attribute:!1,state:!0,type:Object})],at.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot={small:`s`,medium:`m`,large:`l`},st=/* @__PURE__ */ new Set;function ct(e,t){t in ot&&!st.has(`${e}:${t}`)&&(st.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${ot[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var lt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},ut=v`
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
`,dt=v`
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
`,ft=v`
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
function pt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const mt=/* @__PURE__ */ new Set,ht=/* @__PURE__ */ new Map;let gt,_t=`ltr`,vt=`en`;const yt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(yt){let e=new MutationObserver(xt);_t=document.documentElement.dir||`ltr`,vt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function bt(...e){e.map(e=>{let t=e.$code.toLowerCase();ht.has(t)?ht.set(t,Object.assign(Object.assign({},ht.get(t)),e)):ht.set(t,e),gt||=e}),xt()}function xt(){yt&&(_t=document.documentElement.dir||`ltr`,vt=document.documentElement.lang||navigator.language),[...mt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var St=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){mt.add(this.host)}hostDisconnected(){mt.delete(this.host)}dir(){return`${this.host.dir||_t}`.toLowerCase()}lang(){let e=`${this.host.lang||vt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return gt?gt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=ht.get(`${n}-${r}`),a=ht.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&gt&&gt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(gt&&gt[e])i=gt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ct={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;bt(Ct);var wt=Ct,Tt=class extends St{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};bt(wt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=e=>(...t)=>({_$litDirective$:e,values:t});var Ot=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const kt=Dt(class extends Ot{constructor(e){if(super(e),e.type!==Et.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return k}}),At=e=>e??A,jt=Symbol.for(``),Mt=e=>{
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
if(e?.r===jt)return e?._$litStatic$},Nt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:jt}),Pt=/* @__PURE__ */ new Map,Ft=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Mt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Pt.get(e))===void 0&&(o.raw=o,Pt.set(e,t=o)),n=s}return e(t,...n)})(Oe);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var P=class extends at{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new lt(this,`[default]`,`start`,`end`),this.localize=new Tt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){ct(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Nt`a`:Nt`button`;return Ft`
      <${t}
        part="base button"
        class=${kt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${At(e?void 0:this.disabled)}
        type=${At(e?void 0:this.type)}
        title=${this.title}
        name=${At(e?void 0:this.name)}
        value=${At(e?void 0:this.value)}
        href=${At(e?this.href:void 0)}
        target=${At(e?this.target:void 0)}
        download=${At(e?this.download:void 0)}
        rel=${At(e&&this.rel?this.rel:void 0)}
        role=${At(e?void 0:`button`)}
        aria-disabled=${At(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ft`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ft`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};P.shadowRootOptions={...at.shadowRootOptions,delegatesFocus:!0},P.css=[dt,ft,ut],s([Ze(`.button`)],P.prototype,`button`,2),s([Ze(`slot:not([name])`)],P.prototype,`labelSlot`,2),s([N()],P.prototype,`invalid`,2),s([N()],P.prototype,`isIconButton`,2),s([M()],P.prototype,`title`,2),s([M({reflect:!0})],P.prototype,`variant`,2),s([M({reflect:!0})],P.prototype,`appearance`,2),s([M({reflect:!0})],P.prototype,`size`,2),s([pt(`size`)],P.prototype,`handleSizeChange`,1),s([M({attribute:`with-caret`,type:Boolean,reflect:!0})],P.prototype,`withCaret`,2),s([M({attribute:`with-start`,type:Boolean})],P.prototype,`withStart`,2),s([M({attribute:`with-end`,type:Boolean})],P.prototype,`withEnd`,2),s([M({type:Boolean})],P.prototype,`disabled`,2),s([M({type:Boolean,reflect:!0})],P.prototype,`loading`,2),s([M({type:Boolean,reflect:!0})],P.prototype,`pill`,2),s([M()],P.prototype,`type`,2),s([M({reflect:!0})],P.prototype,`name`,2),s([M({reflect:!0})],P.prototype,`value`,2),s([M({reflect:!0})],P.prototype,`href`,2),s([M()],P.prototype,`target`,2),s([M()],P.prototype,`rel`,2),s([M()],P.prototype,`download`,2),s([M({attribute:`formaction`})],P.prototype,`formAction`,2),s([M({attribute:`formenctype`})],P.prototype,`formEnctype`,2),s([M({attribute:`formmethod`})],P.prototype,`formMethod`,2),s([M({attribute:`formnovalidate`,type:Boolean})],P.prototype,`formNoValidate`,2),s([M({attribute:`formtarget`})],P.prototype,`formTarget`,2),s([pt(`disabled`,{waitUntilFirstUpdate:!0})],P.prototype,`handleDisabledChange`,1),s([pt(`href`)],P.prototype,`handleHrefChange`,1),s([pt(`loading`,{waitUntilFirstUpdate:!0})],P.prototype,`handleLoadingChange`,1),P=s([qe(`wa-button`)],P),P.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var It=v`
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
`,Lt=class extends rt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Tt(this)}render(){return Oe`
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
    `}};Lt.css=It,Lt=s([qe(`wa-spinner`)],Lt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},zt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Bt=v`
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
`,Vt=``,Ht=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Ut(){return Vt.replace(/\/$/,``)}function Wt(e){Ht=e}function Gt(){if(!Ht){let e=document.querySelector(`[data-fa-kit-code]`);e&&Wt(e.getAttribute(`data-fa-kit-code`)||``)}return Ht}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Kt=`7.3.0`;function qt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Jt(e,t,n){let r=qt(e,t,n),i=Ut();if(i)return`${i}/${r}/${e}.svg`;let a=Gt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Kt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Kt}/svgs/${r}/${e}.svg`}var Yt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Jt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Xt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Zt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Qt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Zt[n][e]??Zt.regular[e]??Zt.regular[`circle-question`];return r?Xt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},$t=`classic`,en=[Yt,Qt],tn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function nn(e){tn.add(e)}function rn(e){tn.delete(e)}function an(e){return en.find(t=>t.name===e)}function on(){return $t}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:sn}=Ve,cn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,ln=e=>e.strings===void 0,un={},dn=(e,t=un)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=Symbol(),pn=Symbol(),mn,hn=/* @__PURE__ */ new Map,gn=class extends rt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Oe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?fn:pn}catch{return pn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return fn;mn||=new DOMParser;let r=mn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):fn}catch{return fn}}}connectedCallback(){super.connectedCallback(),nn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),rn(this)}async getIconSource(){let e=an(this.library),t=this.family||on();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?an(this.library):void 0;if(!e){this.svg=null;return}let r=hn.get(e);r||(r=this.resolveIcon(e,n),hn.set(e,r));let i=await r;if(i===pn&&hn.delete(e),e===(await this.getIconSource()).url){if(cn(i))this.svg=i;else switch(i){case pn:case fn:this.svg=null,this.dispatchEvent(new Rt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new zt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=an(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Oe`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};gn.css=Bt,s([N()],gn.prototype,`svg`,2),s([M({reflect:!0})],gn.prototype,`name`,2),s([M({reflect:!0})],gn.prototype,`family`,2),s([M({reflect:!0})],gn.prototype,`variant`,2),s([M({reflect:!0})],gn.prototype,`canvas`,2),s([M({attribute:`auto-width`,type:Boolean,reflect:!0})],gn.prototype,`autoWidth`,2),s([M({attribute:`swap-opacity`,type:Boolean,reflect:!0})],gn.prototype,`swapOpacity`,2),s([M()],gn.prototype,`src`,2),s([M()],gn.prototype,`label`,2),s([M({reflect:!0})],gn.prototype,`library`,2),s([M({type:Number,reflect:!0})],gn.prototype,`rotate`,2),s([M({type:String,reflect:!0})],gn.prototype,`flip`,2),s([M({type:String,reflect:!0})],gn.prototype,`animation`,2),s([pt(`label`)],gn.prototype,`handleLabelChange`,1),s([pt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],gn.prototype,`setIcon`,1),gn=s([qe(`wa-icon`)],gn);var _n=/* @__PURE__ */ t({default:()=>P}),vn=/* @__PURE__ */ t({default:()=>gn}),yn=v`
  :host {
    --arrow-size: 0.375rem;
    --max-width: 25rem;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);

    display: contents;

    /** Defaults for inherited CSS properties */
    font-size: var(--wa-font-size-m);
    line-height: var(--wa-line-height-normal);
    text-align: start;
    white-space: normal;
  }

  /* The native dialog element */
  .dialog {
    display: none;
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    overflow: visible;
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &[open] {
      display: block;
    }
  }

  /* The <wa-popup> element */
  .popover {
    --arrow-size: inherit;
    --popup-border-width: var(--wa-panel-border-width);
    --show-duration: inherit;
    --hide-duration: inherit;

    pointer-events: auto;

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      background-color: var(--wa-color-surface-default);
      border: none;
      box-shadow: inset calc(-1 * var(--wa-panel-border-width)) calc(-1 * var(--wa-panel-border-width)) 0 0
        var(--wa-color-surface-border);
    }
  }

  .popover[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .popover[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .popover[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .popover[placement^='right']::part(popup) {
    transform-origin: left;
  }

  /* Body */
  .body {
    display: flex;
    flex-direction: column;
    width: auto;
    max-width: min(var(--max-width), 100vw);
    padding: var(--wa-space-l);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-panel-border-width) solid var(--wa-color-surface-border);
    border-radius: var(--wa-panel-border-radius);
    border-style: var(--wa-panel-border-style);
    box-shadow: var(--wa-shadow-l);
    color: var(--wa-color-text-normal);
  }
`,bn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},xn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Sn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Cn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},wn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Tn=v`
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
;const En=Math.min,Dn=Math.max,On=Math.round,kn=Math.floor,An=e=>({x:e,y:e}),jn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Mn(e,t,n){return Dn(e,En(t,n))}function Nn(e,t){return typeof e==`function`?e(t):e}function Pn(e){return e.split(`-`)[0]}function Fn(e){return e.split(`-`)[1]}function In(e){return e===`x`?`y`:`x`}function Ln(e){return e===`y`?`height`:`width`}function Rn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function zn(e){return In(Rn(e))}function Bn(e,t,n){n===void 0&&(n=!1);let r=Fn(e),i=zn(e),a=Ln(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Yn(o)),[o,Yn(o)]}function Vn(e){let t=Yn(e);return[Hn(e),t,Hn(t)]}function Hn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const Un=[`left`,`right`],Wn=[`right`,`left`],Gn=[`top`,`bottom`],Kn=[`bottom`,`top`];function qn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Wn:Un:t?Un:Wn;case`left`:case`right`:return t?Gn:Kn;default:return[]}}function Jn(e,t,n,r){let i=Fn(e),a=qn(Pn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Hn)))),a}function Yn(e){let t=Pn(e);return jn[t]+e.slice(t.length)}function Xn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Zn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Xn(e)}function Qn(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function $n(e,t,n){let{reference:r,floating:i}=e,a=Rn(t),o=zn(t),s=Ln(o),c=Pn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Fn(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function er(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Nn(t,e),p=Zn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Qn(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Qn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const tr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:er},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=$n(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=$n(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},nr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Nn(e,t)||{};if(l==null)return{};let d=Zn(u),f={x:n,y:r},p=zn(i),m=Ln(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],S=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),C=S?S[y]:0;(!C||!await(o.isElement==null?void 0:o.isElement(S)))&&(C=s.floating[y]||a.floating[m]);let w=b/2-x/2,T=C/2-h[m]/2-1,ee=En(d[_],T),te=En(d[v],T),ne=C-h[m]-te,E=C/2-h[m]/2+w,re=Mn(ee,E,ne),ie=!c.arrow&&Fn(i)!=null&&E!==re&&a.reference[m]/2-(E<ee?ee:te)-h[m]/2<0,ae=ie?E<ee?E-ee:E-ne:0;return{[p]:f[p]+ae,data:{[p]:re,centerOffset:E-re-ae,...ie&&{alignmentOffset:ae}},reset:ie}}}),rr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Nn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Pn(r),_=Rn(o),v=Pn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Yn(o)]:Vn(o)),x=p!==`none`;!d&&x&&b.push(...Jn(o,m,p,y));let S=[o,...b],C=await s.detectOverflow(t,h),w=[],T=i.flip?.overflows||[];if(l&&w.push(C[g]),u){let e=Bn(r,a,y);w.push(C[e[0]],C[e[1]])}if(T=[...T,{placement:r,overflows:w}],!w.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Rn(t)||T.every(e=>Rn(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:T},reset:{placement:t}};let n=T.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=T.filter(e=>{if(x){let t=Rn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},ir=/*#__PURE__*/ new Set([`left`,`top`]);async function ar(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Pn(n),s=Fn(n),c=Rn(n)===`y`,l=ir.has(o)?-1:1,u=a&&c?-1:1,d=Nn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const or=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await ar(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Nn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Rn(i),p=In(f),m=u[p],h=u[f],g=(e,t)=>Mn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Nn(e,t),c=await i.detectOverflow(t,s),l=Pn(n),u=Fn(n),d=Rn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=En(p-c[m],g),y=En(f-c[h],_),b=t.middlewareData.shift,x=!b,S=v,C=y;b!=null&&b.enabled.x&&(C=_),b!=null&&b.enabled.y&&(S=g),x&&!u&&(d?C=f-2*Dn(c.left,c.right):S=p-2*Dn(c.top,c.bottom)),await o({...t,availableWidth:C,availableHeight:S});let w=await i.getDimensions(a.floating);return f!==w.width||p!==w.height?{reset:{rects:!0}}:{}}}};function lr(){return typeof window<`u`}function ur(e){return pr(e)?(e.nodeName||``).toLowerCase():`#document`}function dr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function fr(e){return((pr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function pr(e){return lr()?e instanceof Node||e instanceof dr(e).Node:!1}function mr(e){return lr()?e instanceof Element||e instanceof dr(e).Element:!1}function hr(e){return lr()?e instanceof HTMLElement||e instanceof dr(e).HTMLElement:!1}function gr(e){return!lr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof dr(e).ShadowRoot}function _r(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Or(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function vr(e){return/^(table|td|th)$/.test(ur(e))}function yr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const br=/transform|translate|scale|rotate|perspective|filter/,xr=/paint|layout|strict|content/,Sr=e=>!!e&&e!==`none`;let Cr;function wr(e){let t=mr(e)?Or(e):e;return Sr(t.transform)||Sr(t.translate)||Sr(t.scale)||Sr(t.rotate)||Sr(t.perspective)||!Er()&&(Sr(t.backdropFilter)||Sr(t.filter))||br.test(t.willChange||``)||xr.test(t.contain||``)}function Tr(e){let t=Ar(e);for(;hr(t)&&!Dr(t);){if(wr(t))return t;if(yr(t))return null;t=Ar(t)}return null}function Er(){return Cr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Cr}function Dr(e){return/^(html|body|#document)$/.test(ur(e))}function Or(e){return dr(e).getComputedStyle(e)}function kr(e){return mr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ar(e){if(ur(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||gr(e)&&e.host||fr(e);return gr(t)?t.host:t}function jr(e){let t=Ar(e);return Dr(t)?(e.ownerDocument||e).body:hr(t)&&_r(t)?t:jr(t)}function Mr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=jr(e),i=r===e.ownerDocument?.body,a=dr(r);if(i){let e=Nr(a);return t.concat(a,a.visualViewport||[],_r(r)?r:[],e&&n?Mr(e):[])}return t.concat(r,Mr(r,[],n))}function Nr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Pr(e){let t=Or(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=hr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=On(n)!==a||On(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Fr(e){return mr(e)?e:e.contextElement}function Ir(e){let t=Fr(e);if(!hr(t))return An(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Pr(t),o=(a?On(n.width):n.width)/r,s=(a?On(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Lr=/*#__PURE__*/ An(0);function Rr(e){let t=dr(e);return!Er()||!t.visualViewport?Lr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zr(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===dr(e)}function Br(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Fr(e),o=An(1);t&&(r?mr(r)&&(o=Ir(r)):o=Ir(e));let s=zr(a,n,r)?Rr(a):An(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=dr(a),t=mr(r)?dr(r):r,n=e,i=Nr(n);for(;i&&t!==n;){let e=Ir(i),t=i.getBoundingClientRect(),r=Or(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=dr(i),i=Nr(n)}}return Qn({width:u,height:d,x:c,y:l})}function Vr(e,t){let n=kr(e).scrollLeft;return t?t.left+n:Br(fr(e)).left+n}function Hr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Vr(e,n),y:n.top+t.scrollTop}}function Ur(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=fr(r),s=t?yr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=An(1),u=An(0),d=hr(r);if((d||!a)&&((ur(r)!==`body`||_r(o))&&(c=kr(r)),d)){let e=Br(r);l=Ir(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Hr(o,c):An(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Wr(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Gr(e){let t=kr(e),n=e.ownerDocument.body,r=Dn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=Dn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Vr(e),o=-t.scrollTop;return Or(n).direction===`rtl`&&(a+=Dn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Kr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=dr(e),a=fr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Er()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Vr(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function qr(e,t){let n=Br(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ir(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Jr(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Kr(e,n,t);else if(t===`document`)r=Gr(fr(e));else if(mr(t))r=qr(t,n);else{let n=Rr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Qn(r)}function Yr(e,t){let n=t.get(e);if(n)return n;let r=Mr(e,[],!1).filter(e=>mr(e)&&ur(e)!==`body`),i=null,a=Or(e).position===`fixed`,o=a?Ar(e):e;for(;mr(o)&&!Dr(o);){let e=Or(o),t=wr(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Ar(o)}return t.set(e,r),r}function Xr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?yr(t)?[]:Yr(t,this._c):[].concat(n),r],o=Jr(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Jr(t,a[e],i);s=Dn(n.top,s),c=En(n.right,c),l=En(n.bottom,l),u=Dn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Zr(e){let{width:t,height:n}=Pr(e);return{width:t,height:n}}function Qr(e,t,n){let r=hr(t),i=fr(t),a=n===`fixed`,o=Br(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=An(0);if((r||!a)&&((ur(t)!==`body`||_r(i))&&(s=kr(t)),r)){let e=Br(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Vr(i));let l=i&&!r&&!a?Hr(i,s):An(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function $r(e){return Or(e).position===`static`}function ei(e,t){if(!hr(e)||Or(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return fr(e)===n&&(n=n.ownerDocument.body),n}function ti(e,t){let n=dr(e);if(yr(e))return n;if(!hr(e)){let t=Ar(e);for(;t&&!Dr(t);){if(mr(t)&&!$r(t))return t;t=Ar(t)}return n}let r=ei(e,t);for(;r&&vr(r)&&$r(r);)r=ei(r,t);return r&&Dr(r)&&$r(r)&&!wr(r)?n:r||Tr(e)||n}const ni=async function(e){let t=this.getOffsetParent||ti,n=this.getDimensions,r=await n(e.floating);return{reference:Qr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ri(e){return Or(e).direction===`rtl`}const ii={convertOffsetParentRelativeRectToViewportRelativeRect:Ur,getDocumentElement:fr,getClippingRect:Xr,getOffsetParent:ti,getElementRects:ni,getClientRects:Wr,getDimensions:Zr,getScale:Ir,isElement:mr,isRTL:ri};function ai(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function oi(e,t,n){let r=null,i,a=fr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=kn(d),h=kn(a.clientWidth-(u+f)),g=kn(a.clientHeight-(d+p)),_=kn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Dn(0,En(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!ai(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=dr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function si(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Fr(e),u=i||a?[...l?Mr(l):[],...t?Mr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?oi(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Br(e):null;c&&g();function g(){let t=Br(e);h&&!ai(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ci=or,li=sr,ui=rr,di=cr,fi=nr,pi=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...ii,...i.platform,_c:r};return tr(e,t,{...i,platform:a})};function mi(e){return gi(e)}function hi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function gi(e){for(let t=e;t;t=hi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=hi(e);t;t=hi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||wr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function _i(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var vi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),yi=class extends rt{constructor(){super(...arguments),this.localize=new Tt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=vi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||_i(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=si(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[ci({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(di({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!_i(this.anchor)&&this.boundary===`scroll`&&(t=Mr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(ui({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(li({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(di({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(fi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>ii.getOffsetParent(e,mi):ii.getOffsetParent;pi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...ii,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new wn)}render(){return Oe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${kt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${kt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Oe`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};yi.css=Tn,s([Ze(`.popup`)],yi.prototype,`popup`,2),s([Ze(`.arrow`)],yi.prototype,`arrowEl`,2),s([M({attribute:!1,type:Boolean})],yi.prototype,`SUPPORTS_POPOVER`,2),s([M()],yi.prototype,`anchor`,2),s([M({type:Boolean,reflect:!0})],yi.prototype,`active`,2),s([M({reflect:!0})],yi.prototype,`placement`,2),s([M()],yi.prototype,`boundary`,2),s([M({type:Number})],yi.prototype,`distance`,2),s([M({type:Number})],yi.prototype,`skidding`,2),s([M({type:Boolean})],yi.prototype,`arrow`,2),s([M({attribute:`arrow-placement`})],yi.prototype,`arrowPlacement`,2),s([M({attribute:`arrow-padding`,type:Number})],yi.prototype,`arrowPadding`,2),s([M({type:Boolean})],yi.prototype,`flip`,2),s([M({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],yi.prototype,`flipFallbackPlacements`,2),s([M({attribute:`flip-fallback-strategy`})],yi.prototype,`flipFallbackStrategy`,2),s([M({type:Object})],yi.prototype,`flipBoundary`,2),s([M({attribute:`flip-padding`,type:Number})],yi.prototype,`flipPadding`,2),s([M({type:Boolean})],yi.prototype,`shift`,2),s([M({type:Object})],yi.prototype,`shiftBoundary`,2),s([M({attribute:`shift-padding`,type:Number})],yi.prototype,`shiftPadding`,2),s([M({attribute:`auto-size`})],yi.prototype,`autoSize`,2),s([M()],yi.prototype,`sync`,2),s([M({type:Object})],yi.prototype,`autoSizeBoundary`,2),s([M({attribute:`auto-size-padding`,type:Number})],yi.prototype,`autoSizePadding`,2),s([M({attribute:`hover-bridge`,type:Boolean})],yi.prototype,`hoverBridge`,2),yi=s([qe(`wa-popup`)],yi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bi=[];function xi(e){Si(e),bi.push(e)}function Si(e){for(let t=bi.length-1;t>=0;t--)if(bi[t]===e){bi.splice(t,1);break}}function Ci(e){return bi.length>0&&bi[bi.length-1]===e}let wi=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ti(e=``){return`${e}${wi()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ei(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Di(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Oi=/* @__PURE__ */ new Set,ki=class extends rt{constructor(){super(...arguments),this.anchor=null,this.placement=`top`,this.open=!1,this.distance=8,this.skidding=0,this.for=null,this.withoutArrow=!1,this.eventController=new AbortController,this.pressStartedInside=!1,this.handleAnchorClick=()=>{this.open=!this.open},this.handleBodyClick=e=>{e.target.closest(`[data-popover="close"]`)&&(e.stopPropagation(),this.open=!1)},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&Ci(this)&&(e.preventDefault(),e.stopPropagation(),this.open=!1,this.anchor&&typeof this.anchor.focus==`function`&&this.anchor.focus({preventScroll:!0}))},this.handleDocumentPointerDown=e=>{this.pressStartedInside=e.composedPath().includes(this)},this.handleDocumentClick=e=>{let t=this.pressStartedInside;this.pressStartedInside=!1,!t&&(this.anchor&&e.composedPath().includes(this.anchor)||e.composedPath().includes(this)||(this.open=!1))}}connectedCallback(){super.connectedCallback(),this.id||=Ti(`wa-popover-`),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.for&&this.anchor&&(this.anchor=null,this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,{capture:!0}),Si(this),this.eventController.abort()}firstUpdated(e){super.firstUpdated(e),this.open&&(this.dialog.show(),this.popup.active=!0,this.popup.reposition())}updated(e){e.has(`open`)&&this.customStates.set(`open`,this.open)}async handleOpenChange(){if(this.open){let e=new bn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}Oi.forEach(e=>e.open=!1),document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown,{capture:!0,signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),this.dialog.setAttribute(`open`,``),this.popup.active=!0,Oi.add(this),xi(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus({preventScroll:!0}):this.dialog.focus({preventScroll:!0})}),await Di(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Cn)}else{let e=new xn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown,{capture:!0}),document.removeEventListener(`click`,this.handleDocumentClick),this.pressStartedInside=!1,Oi.delete(this),Si(this),await Di(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.dialog.close(),this.dispatchEvent(new Sn)}}handleForChange(){let e=this.getRootNode();if(!e)return;let t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;let{signal:r}=this.eventController;t&&t.addEventListener(`click`,this.handleAnchorClick,{signal:r}),n&&n.removeEventListener(`click`,this.handleAnchorClick),this.anchor=t,this.for&&!t&&console.warn(`A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,this)}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}async show(){if(!this.open)return this.open=!0,Ei(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Ei(this,`wa-after-hide`)}render(){return Oe`
      <dialog part="dialog" class="dialog">
        <wa-popup
          part="popup"
          exportparts="
            popup:popup__popup,
            arrow:popup__arrow
          "
          class=${kt({popover:!0,"popover-open":this.open})}
          placement=${this.placement}
          distance=${this.distance}
          skidding=${this.skidding}
          flip
          shift
          shift-padding="8"
          ?arrow=${!this.withoutArrow}
          .anchor=${this.anchor}
        >
          <div part="body" class="body" @click=${this.handleBodyClick}>
            <slot></slot>
          </div>
        </wa-popup>
      </dialog>
    `}};ki.css=yn,ki.dependencies={"wa-popup":yi},s([Ze(`dialog`)],ki.prototype,`dialog`,2),s([Ze(`.body`)],ki.prototype,`body`,2),s([Ze(`wa-popup`)],ki.prototype,`popup`,2),s([N()],ki.prototype,`anchor`,2),s([M()],ki.prototype,`placement`,2),s([M({type:Boolean,reflect:!0})],ki.prototype,`open`,2),s([M({type:Number})],ki.prototype,`distance`,2),s([M({type:Number})],ki.prototype,`skidding`,2),s([M()],ki.prototype,`for`,2),s([M({attribute:`without-arrow`,type:Boolean,reflect:!0})],ki.prototype,`withoutArrow`,2),s([pt(`open`,{waitUntilFirstUpdate:!0})],ki.prototype,`handleOpenChange`,1),s([pt(`for`)],ki.prototype,`handleForChange`,1),s([pt([`distance`,`placement`,`skidding`])],ki.prototype,`handleOptionsChange`,1),ki=s([qe(`wa-popover`)],ki);var Ai=/* @__PURE__ */ t({default:()=>ki}),ji=v`
  :host {
    border-width: 0;
  }

  .textarea {
    display: grid;
    align-items: center;
    margin: 0;
    border: none;
    outline: none;
    cursor: inherit;
    font: inherit;
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--wa-form-control-border-radius);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    -webkit-appearance: none;
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

    &:focus-within {
      outline-color: var(--wa-color-focus);
    }

    /* Style disabled textareas */
    &:has(:disabled) {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) .textarea {
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
  }

  :host([appearance='filled']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-color-neutral-fill-quiet);
  }

  :host([appearance='filled-outlined']) .textarea {
    background-color: var(--wa-color-neutral-fill-quiet);
    border-color: var(--wa-form-control-border-color);
  }

  textarea {
    display: block;
    width: 100%;
    border: none;
    background: transparent;
    font: inherit;
    color: inherit;
    cursor: inherit;
    scroll-padding-block: var(--wa-form-control-padding-block);
    padding: calc(var(--wa-form-control-padding-block) - ((1lh - 1em) / 2)) var(--wa-form-control-padding-inline); /* accounts for the larger line height of textarea content */
    min-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
    box-shadow: none;
    margin: 0;

    &::placeholder {
      color: var(--wa-form-control-placeholder-color);
      user-select: none;
      -webkit-user-select: none;
    }

    &:autofill {
      &,
      &:hover,
      &:focus,
      &:active {
        box-shadow: none;
        caret-color: var(--wa-form-control-value-color);
      }
    }

    &:focus {
      outline: none;
    }
  }

  /* Shared textarea and size-adjuster positioning */
  .control,
  .size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
    padding: 0;
  }

  textarea::-webkit-search-decoration,
  textarea::-webkit-search-cancel-button,
  textarea::-webkit-search-results-button,
  textarea::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /*
   * Resize types
   */

  :host([resize='none']) textarea {
    resize: none;
  }

  textarea,
  :host([resize='vertical']) textarea {
    resize: vertical;
  }

  :host([resize='horizontal']) textarea {
    resize: horizontal;
  }

  :host([resize='both']) textarea {
    resize: both;
  }

  :host([resize='auto']) textarea {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }

  /*
   * Footer (hint + character count)
   */

  /*
   * This element carries the hint part, so the shared form control styles apply to it. Those styles set display:block
   * and hide the element when it has no hint, both of which have to be undone when a character count is present.
   */
  .footer.has-slotted,
  .footer.has-count {
    display: flex;
    align-items: baseline;
    gap: 1em;
  }

  /* Slots default to display:contents, which would leave the hint unable to shrink below its content */
  .footer.has-count .hint {
    display: block;
    flex: 1 1 auto;
    min-width: 0;
  }

  .count {
    flex: 0 0 auto;
    color: var(--wa-form-control-hint-color);
    font-weight: var(--wa-form-control-hint-font-weight);
    line-height: var(--wa-form-control-hint-line-height);
    margin-block-start: 0.5em;
    font-size: var(--wa-font-size-smaller);
    margin-inline-start: auto;
  }
`,Mi=v`
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
`,Ni=v`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Pi=Dt(class extends Ot{constructor(e){if(super(e),e.type!==Et.PROPERTY&&e.type!==Et.ATTRIBUTE&&e.type!==Et.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!ln(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===k||t===A)return t;let n=e.element,r=e.name;if(e.type===Et.PROPERTY){if(t===n[r])return k}else if(e.type===Et.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return k}else if(e.type===Et.ATTRIBUTE&&n.getAttribute(r)===t+``)return k;return dn(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var F=class extends at{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new lt(this,`hint`,`label`),this.localize=new Tt(this),this.announcedCountText=``,this.title=``,this.name=null,this._value=null,this.defaultValue=this.getAttribute(`value`)??``,this.size=`m`,this.appearance=`outlined`,this.label=``,this.hint=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1,this.withCount=!1,this.lastObservedWidth=0}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleSizeChange(){ct(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{if(this.setTextareaDimensions(),this.updateResizeObserver(),this.didSSR&&this.input&&this.value!==this.input.value){let e=this.input.value;this.value=e}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.countAnnounceTimeout),this.resizeObserver?.disconnect(),this.resizeObserver=void 0}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}updateResizeObserver(){let e=this.resize!==`none`;this.resizeObserver&&=(this.resizeObserver.disconnect(),void 0),e&&this.input&&(this.resize===`auto`?(this.resizeObserver=new ResizeObserver(e=>{let t=e[0]?.contentRect.width??0;t!==this.lastObservedWidth&&(this.lastObservedWidth=t,requestAnimationFrame(()=>this.setTextareaDimensions()))}),this.resizeObserver.observe(this)):(this.resizeObserver=new ResizeObserver(()=>this.setTextareaDimensions()),this.resizeObserver.observe(this.input)))}handleBlur(){this.checkValidity()}handleChange(e){this.valueHasChanged=!0,this.value=this.input.value,this.setTextareaDimensions(),this.checkValidity(),this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleInput(e){this.valueHasChanged=!0,this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0}),this.scheduleCountAnnouncement()}scheduleCountAnnouncement(){clearTimeout(this.countAnnounceTimeout),this.countAnnounceTimeout=setTimeout(()=>{let e=(this.value??``).length;this.announcedCountText=this.maxlength==null?this.localize.term(`numCharacters`,e):this.localize.term(`numCharactersRemaining`,this.maxlength-e)},1e3)}setTextareaDimensions(){if(this.resize===`none`)this.base.style.width=``,this.base.style.height=``;else if(this.resize===`auto`){this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`;let e=this.input.scrollHeight;this.input.style.height=`${e}px`,this.sizeAdjuster.style.height=`${e}px`,this.base.style.width=``,this.base.style.height=``}else{if(this.input.style.width){let e=Number(this.input.style.width.split(/px/)[0])+2;this.base.style.width=`${e}px`}if(this.input.style.height){let e=Number(this.input.style.height.split(/px/)[0])+2;this.base.style.height=`${e}px`}}}handleRowsChange(){this.setTextareaDimensions()}async handleValueChange(){await this.updateComplete,this.checkValidity(),this.setTextareaDimensions()}updated(e){e.has(`resize`)&&(this.setTextareaDimensions(),this.updateResizeObserver()),super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e)typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);else return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaDimensions())}formResetCallback(){this._value=null,this.input&&(this.input.value=this.value||``),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.value??``).length,a=this.maxlength==null?this.localize.term(`numCharacters`,i):this.localize.term(`numCharactersRemaining`,this.maxlength-i);return Oe`
      <label
        part="form-control-label label"
        class=${kt({label:!0,"has-label":n})}
        for="input"
        aria-hidden=${n?`false`:`true`}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base textarea-wrapper" class="textarea">
        <textarea
          part="textarea"
          id="input"
          class="control"
          title=${this.title}
          name=${At(this.name)}
          .value=${Pi(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${At(this.placeholder)}
          rows=${At(this.rows)}
          minlength=${At(this.minlength)}
          maxlength=${At(this.maxlength)}
          autocapitalize=${At(this.autocapitalize)}
          autocorrect=${At(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${At(this.spellcheck)}
          enterkeyhint=${At(this.enterkeyhint)}
          inputmode=${At(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @blur=${this.handleBlur}
        ></textarea>

        <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
        <div part="textarea-adjuster" class="size-adjuster" ?hidden=${this.resize!==`auto`}></div>
      </div>

      <div
        part="hint"
        class=${kt({footer:!0,"has-count":this.withCount,"has-slotted":r})}
      >
        <slot id="hint" name="hint" class="hint" aria-hidden=${r?`false`:`true`}>${this.hint}</slot>

        ${this.withCount?Oe`
              <div part="count" class="count" aria-hidden="true">${a}</div>
              <div class="wa-visually-hidden-force" aria-live="polite">${this.announcedCountText}</div>
            `:``}
      </div>
    `}};F.css=[ji,Ni,ut,Mi],s([N()],F.prototype,`announcedCountText`,2),s([Ze(`.control`)],F.prototype,`input`,2),s([Ze(`[part~="base"]`)],F.prototype,`base`,2),s([Ze(`.size-adjuster`)],F.prototype,`sizeAdjuster`,2),s([M()],F.prototype,`title`,2),s([M({reflect:!0})],F.prototype,`name`,2),s([N()],F.prototype,`value`,1),s([M({attribute:`value`,reflect:!0})],F.prototype,`defaultValue`,2),s([M({reflect:!0})],F.prototype,`size`,2),s([pt(`size`)],F.prototype,`handleSizeChange`,1),s([M({reflect:!0})],F.prototype,`appearance`,2),s([M()],F.prototype,`label`,2),s([M({attribute:`hint`})],F.prototype,`hint`,2),s([M()],F.prototype,`placeholder`,2),s([M({type:Number})],F.prototype,`rows`,2),s([M({reflect:!0})],F.prototype,`resize`,2),s([M({type:Boolean})],F.prototype,`disabled`,2),s([M({type:Boolean,reflect:!0})],F.prototype,`readonly`,2),s([M({type:Boolean,reflect:!0})],F.prototype,`required`,2),s([M({type:Number})],F.prototype,`minlength`,2),s([M({type:Number})],F.prototype,`maxlength`,2),s([M()],F.prototype,`autocapitalize`,2),s([M({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],F.prototype,`autocorrect`,2),s([M()],F.prototype,`autocomplete`,2),s([M({type:Boolean})],F.prototype,`autofocus`,2),s([M()],F.prototype,`enterkeyhint`,2),s([M({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],F.prototype,`spellcheck`,2),s([M()],F.prototype,`inputmode`,2),s([M({attribute:`with-label`,type:Boolean})],F.prototype,`withLabel`,2),s([M({attribute:`with-hint`,type:Boolean})],F.prototype,`withHint`,2),s([M({attribute:`with-count`,type:Boolean,reflect:!0})],F.prototype,`withCount`,2),s([pt(`rows`,{waitUntilFirstUpdate:!0})],F.prototype,`handleRowsChange`,1),s([pt(`value`,{waitUntilFirstUpdate:!0})],F.prototype,`handleValueChange`,1),F=s([qe(`wa-textarea`)],F),F.disableWarning?.(`change-in-update`);var Fi=/* @__PURE__ */ t({default:()=>F}),I
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Ii(e){this.c=e}I=Ii.prototype,I.toString=(function(){return String.fromCharCode(this.c)});function Li(e,t){this.l=e,this.h=t}I=Li.prototype,I.toString=(function(){return bc(this.l,this.h)});function Ri(e){switch(typeof e){case`string`:return Zg.l();case`number`:return $i(e)?e<<24>>24===e?xm.l():e<<16>>16===e?Nm.l():Wg.l():ea(e)?Ug.l():Hg.l();case`boolean`:return Tp.l();case`undefined`:return pc.l();default:return e instanceof Li?qg.l():e instanceof Ii?Op.l():e&&e.$classData?e.$classData.l():null}}function zi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return $i(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ea(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof Li?`java.lang.Long`:e instanceof Ii?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.nO()}}function Bi(e,t){switch(typeof e){case`string`:return Xg(e,t);case`number`:return Bg(e,t);case`boolean`:return Cp(e,t);case`undefined`:return uc(e,t);default:return e&&e.$classData||e===null?e.r(t):e instanceof Li?Gg(e.l,e.h,t):e instanceof Ii?Dp(e.c,t):sa.prototype.r.call(e,t)}}function Vi(e){switch(typeof e){case`string`:return Yg(e);case`number`:return Vg(e);case`boolean`:return wp(e);case`undefined`:return dc(e);default:return e&&e.$classData||e===null?e.w():e instanceof Li?Kg(e.l,e.h):e instanceof Ii?Ep(e.c):sa.prototype.w.call(e)}}function Hi(e){return e===void 0?`undefined`:e.toString()}function Ui(e){if(e===0)throw new bm(`/ by zero`);return e}function Wi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Gi(e){return String.fromCharCode(e)}var Ki=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function qi(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Ji=0,Yi=/* @__PURE__ */ new WeakMap;function Xi(e){switch(typeof e){case`string`:return Yg(e);case`number`:return Vg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Yg(n);default:if(e===null)return 0;var r=Yi.get(e);return r===void 0&&(r=Ji+1|0,Ji=r,Yi.set(e,r)),r}}function Zi(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Qi(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function $i(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ea(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ta(e){return new Ii(e)}ta(0);function na(e,t){return new Li(e,t)}var ra=na(0,0);function ia(e){return e===null?0:e.c}function aa(e){return e===null?ra:e}function oa(e){return e}function sa(){}I=sa.prototype,I.constructor=sa;function L(){}L.prototype=I,I.w=(function(){return Xi(this)}),I.r=(function(e){return this===e}),I.B=(function(){var e=this.w();return zi(this)+`@`+(e>>>0).toString(16)}),I.toString=(function(){return this.B()});function R(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}I=R.prototype=new L,I.constructor=R,I.p=(function(e,t,n,r){qi(this.a,e,t.a,n,r)}),I.c=(function(){return new R(this.a.slice())});function ca(){}ca.prototype=I;function la(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}I=la.prototype=new L,I.constructor=la,I.p=(function(e,t,n,r){qi(this.a,e,t.a,n,r)}),I.c=(function(){return new la(this.a.slice())});function ua(e){this.a=typeof e==`number`?new Uint16Array(e):e}I=ua.prototype=new L,I.constructor=ua,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new ua(this.a.slice())});function da(e){this.a=typeof e==`number`?new Int8Array(e):e}I=da.prototype=new L,I.constructor=da,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new da(this.a.slice())});function fa(e){this.a=typeof e==`number`?new Int16Array(e):e}I=fa.prototype=new L,I.constructor=fa,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new fa(this.a.slice())});function pa(e){this.a=typeof e==`number`?new Int32Array(e):e}I=pa.prototype=new L,I.constructor=pa,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new pa(this.a.slice())});function ma(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}I=ma.prototype=new L,I.constructor=ma,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),I.c=(function(){return new ma(this.a.slice())});function ha(e){this.a=typeof e==`number`?new Float32Array(e):e}I=ha.prototype=new L,I.constructor=ha,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new ha(this.a.slice())});function ga(e){this.a=typeof e==`number`?new Float64Array(e):e}I=ga.prototype=new L,I.constructor=ga,I.p=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),I.c=(function(){return new ga(this.a.slice())});function z(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}I=z.prototype,I.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new z().y(this,r,i,t===`J`)),this}),I.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),I.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),I.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new ca;n.constructor=t,n.p=(function(e,t,n,r){qi(this.a,e,t.a,n,r)}),n.c=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={z:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===B});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),I.r=(function(){return this.A||=new z().a(this),this.A}),I.l=(function(){return this.L||=new gf(this),this.L}),I.R=(function(e){return this===e||this.F(e)}),I.S=(function(){return this.P?this.P.l():null}),I.Q=(function(){return this.O?this.O.l():null}),I.U=(function(e){if(this===_a)throw Cm(new wm);return new(this.r()).C(e)});var B=new z;B.n={},B.E=`Ljava.lang.Object;`,B.F=(e=>!e.X),B.N=`java.lang.Object`,B.I=(e=>e!==null),B.A=new z().y(B,R,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),sa.prototype.$classData=B;var _a=new z().p(void 0,`V`,`void`,void 0,void 0),va=new z().p(!1,`Z`,`boolean`,la,void 0),ya=new z().p(0,`C`,`char`,ua,Uint16Array),ba=new z().p(0,`B`,`byte`,da,Int8Array),xa=new z().p(0,`S`,`short`,fa,Int16Array),Sa=new z().p(0,`I`,`int`,pa,Int32Array),Ca=new z().p(ra,`J`,`long`,ma,Int32Array),wa=new z().p(0,`F`,`float`,ha,Float32Array),Ta=new z().p(0,`D`,`double`,ga,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Ea(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Da(e,t){return new pa(Ea(e,t,-1))}function Oa(e){return Ri(e).gU()+`@`+Xi(e)}function ka(e){var t=e.hf;return t===void 0?Oa(e):t}function Aa(){ja=this,Ma().nG(new om((e=>void 0)),Uc().iR,!0)}I=Aa.prototype=new L,I.constructor=Aa,I.nG=(function(e,t,n){return new gp(e,n,t,this)}),new z().i(Aa,`com.raquo.airstream.core.Observer$`,{c0:1});var ja;function Ma(){return ja||=new Aa,ja}function Na(e){this.fO=null,this.hg=null,this.fP=0,this.fO=e,this.hg=void 0;var t=Ya().f0();this.fP=t===void 0?1:1+t.fP|0,La().f4===-1||this.fP>La().f4?Ld().f2(new Fg(this,La().f4)):Va().bM?Va().dr.push(this)|0:Ya().gA(this)}I=Na.prototype=new L,I.constructor=Na;var Pa=new z().i(Na,`com.raquo.airstream.core.Transaction`,{c3:1});function Fa(){this.f4=0,this.hh=null,Ia=this,this.f4=1e3,this.hh=new om((e=>{throw _f(new vf,`Attempted to run Transaction `+e+` after it was already executed.`)}))}I=Fa.prototype=new L,I.constructor=Fa,I.jW=(function(e){try{e.fO.f(e);var t=e.hg;if(t!==void 0)for(;t.nR();)t.nM().nT(e)}catch(e){var n=e instanceof cd?e:new X_(e);Ld().f2(n)}}),new z().i(Fa,`com.raquo.airstream.core.Transaction$`,{c4:1});var Ia;function La(){return Ia||=new Fa,Ia}function Ra(e){e.f5.length|0?new Na(new om((t=>{for(;(e.f5.length|0)>0;){var n=e.f5.shift();try{n.f(t)}catch(e){var r=e instanceof cd?e:new X_(e);Ld().f2(r)}}for(;(e.dr.length|0)>0;){var i=e.dr.shift();Ya().gA(i)}}))):(e.dr.length|0)>0&&new Na(new om((t=>{for(;(e.dr.length|0)>0;)Ya().gA(e.dr.shift())})))}function za(){this.bM=!1,this.f5=null,this.dr=null,Ba=this,this.bM=!1,this.f5=ho().dG(Yl().dq(new(Fc.r()).C([]))),this.dr=ho().dG(Yl().dq(new(Pa.r()).C([])))}I=za.prototype=new L,I.constructor=za,new z().i(za,`com.raquo.airstream.core.Transaction$onStart$`,{c5:1});var Ba;function Va(){return Ba||=new za,Ba}function Ha(e,t){return e.ds.get(t)}function Ua(e,t){e.f6.unshift(t)}function Wa(e){return e.f6.shift()}function Ga(e,t,n){var r=Ha(e,t),i=r===void 0,a=r===void 0?ho().dG(Yl().dq(new(Pa.r()).C([]))):r;a.push(n),i&&e.ds.set(t,a)}function Ka(e,t){var n=Ha(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ds.delete(t),i}}function qa(){this.f6=null,this.ds=null,Ja=this,this.f6=ho().dG(Yl().dq(new(Pa.r()).C([]))),this.ds=/* @__PURE__ */ new Map}I=qa.prototype=new L,I.constructor=qa,I.gA=(function(e){var t=this.f0();t===void 0?(Ua(this,e),La().jW(e),this.lS(e)):Ga(this,t,e)}),I.lS=(function(e){for(var t=e;;){var n=this.f0(),r=t;if(!(n!==void 0&&W().n(r,n)))throw _f(new vf,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.n3(t),t.fO=La().hh;var i=this.f0();if(W().n(i,void 0)){if((this.ds.size|0)>0){var a=new kd(0);throw this.ds.forEach((e=>((t,n)=>{e.dD=e.dD+(t.length|0)|0}))(a)),_f(new vf,`Transaction queue error: Stack cleared, but a total of `+a.dD+` children for `+(this.ds.size|0)+` transactions remain. This is a bug in Airstream.`)}return}La().jW(i),t=i}}),I.n3=(function(e){for(var t=e;;){var n=Ka(this,t);if(W().n(n,void 0)){Wa(this);var r=this.f0();if(!W().n(r,void 0))t=r;else return}else{Ua(this,n);return}}}),I.f0=(function(){return this.f6[0]}),new z().i(qa,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{c6:1});var Ja;function Ya(){return Ja||=new qa,Ja}function Xa(e,t){var n=e.cG.indexOf(t)|0;if(n!==-1)e.cG.splice(n,1),e.bp.d()||t.kq();else throw _f(new vf,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Za(e){for(;(e.f7.length|0)>0;)Xa(e,e.f7.shift())}function Qa(e){this.hi=null,this.cG=null,this.dP=!1,this.f7=null,this.bp=null,this.dQ=0,this.hi=e,this.cG=ho().dG(Yl().dq(new(eo.r()).C([]))),this.dP=!0,this.f7=ho().dG(Yl().dq(new(eo.r()).C([]))),this.bp=e_(),this.dQ=0}I=Qa.prototype=new L,I.constructor=Qa,I.jG=(function(){if(this.bp.d()){var e=Va(),t=(()=>{var e=new uu(this.hi);this.bp=new t_(e),this.dP=!1,this.dQ=0;for(var t=0,n=this.cG.length|0;t<n;){var r=t+this.dQ|0;this.cG[r].kp(e),t=1+t|0}Za(this),this.dP=!0,this.dQ=0});if(Va(),e.bM)t();else{e.bM=!0;try{t()}finally{e.bM=!1,Ra(e)}}}else throw _f(new vf,`Can not activate `+this+`: it is already active`)}),I.lK=(function(){if(this.bp.d())throw _f(new vf,`Can not deactivate DynamicOwner: it is not active`);this.dP=!1;for(var e=this.cG,t=0,n=e.length|0;t<n;)e[t].kq(),t=1+t|0;Za(this);var r=this.bp;r.d()||r.aE().mE(),Za(this),this.dP=!0,this.bp=e_()}),I.ll=(function(e,t){t?(this.dQ=1+this.dQ|0,this.cG.unshift(e)):this.cG.push(e);var n=this.bp;if(!n.d()){var r=n.aE();e.kp(r)}}),I.n9=(function(e){this.dP?Xa(this,e):this.f7.push(e)}),new z().i(Qa,`com.raquo.airstream.ownership.DynamicOwner`,{c7:1});function $a(e,t,n){this.f8=null,this.hj=null,this.f9=null,this.f8=e,this.hj=t,this.f9=e_(),e.ll(this,n)}I=$a.prototype=new L,I.constructor=$a,I.fG=(function(){this.f8.n9(this)}),I.kp=(function(e){var t=Va(),n=(()=>{this.f9=this.hj.f(e)});if(Va(),t.bM)n();else{t.bM=!0;try{n()}finally{t.bM=!1,Ra(t)}}}),I.kq=(function(){var e=this.f9;e.d()||(e.aE().fG(),this.f9=e_())});var eo=new z().i($a,`com.raquo.airstream.ownership.DynamicSubscription`,{c8:1});function to(){}I=to.prototype=new L,I.constructor=to,I.nC=(function(e,t,n){return new $a(e,new om((e=>new t_(t.f(e)))),n)}),I.nt=(function(e,t,n){return new $a(e,new om((e=>(t.f(e),e_()))),n)}),new z().i(to,`com.raquo.airstream.ownership.DynamicSubscription$`,{c9:1});var no;function ro(){return no||=new to,no}function io(e){e.dR=ho().dG(Yl().dq(new(uo.r()).C([])))}function ao(e){for(var t=e.dR,n=0,r=t.length|0;n<r;)co(t[n]),n=1+n|0;e.dR.length=0}function oo(e,t){var n=e.dR.indexOf(t)|0;if(n!==-1)e.dR.splice(n,1);else throw _f(new vf,`Can not remove Subscription from Owner: subscription not found.`)}function so(e,t){e.dR.push(t)}function co(e){if(!e.fR)e.hl.a6(),e.fR=!0;else throw _f(new vf,`Can not kill Subscription: it was already killed.`)}function lo(e,t){this.hm=null,this.hl=null,this.fR=!1,this.hm=e,this.hl=t,this.fR=!1,e.mY(this)}I=lo.prototype=new L,I.constructor=lo,I.fG=(function(){co(this),oo(this.hm,this)});var uo=new z().i(lo,`com.raquo.airstream.ownership.Subscription`,{cc:1});function fo(e,t){this.hn=null,this.ho=null,this.cH=null,this.dt=!1,this.hn=e,this.ho=t,this.cH=e_(),this.dt=!1}I=fo.prototype=new L,I.constructor=fo,I.mB=(function(){var e=this.cH;return!e.d()&&!e.aE().f8.bp.d()}),I.nm=(function(e){if(this.dt)throw _f(new vf,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cH;if(t.d())var n=!1;else var r=t.aE().f8,n=e===null?r===null:e===r;if(!n){this.mB()&&!e.bp.d()&&(this.dt=!0);var i=this.cH;i.d()||(i.aE().fG(),this.cH=e_());var a=ro().nC(e,new om((e=>(this.dt||this.hn.a6(),new lo(e,new am((()=>{this.dt||this.ho.a6()})))))),!1);this.cH=new t_(a),this.dt=!1}}),I.lB=(function(){if(this.dt)throw _f(new vf,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cH;e.d()||e.aE().fG(),this.cH=e_()}),new z().i(fo,`com.raquo.airstream.ownership.TransferableSubscription`,{cd:1});function po(){}I=po.prototype=new L,I.constructor=po,I.dG=(function(e){return[...ru().nA(e)]}),new z().i(po,`com.raquo.ew.JsArray$`,{ce:1});var mo;function ho(){return mo||=new po,mo}function go(){}I=go.prototype=new L,I.constructor=go,I.mc=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new z().i(go,`com.raquo.ew.JsArray$RichJsArray$`,{cf:1});var _o;function vo(){return _o||=new go,_o}function yo(){this.hp=null,bo=this,document.createElement(`template`),this.lI(Y().l.nv().nw()),this.hp=/* @__PURE__ */ RegExp(` `,`g`)}I=yo.prototype=new L,I.constructor=yo,I.lo=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof cd?e:new X_(e);if(n instanceof X_&&n.bH instanceof DOMException)return!1;throw n instanceof X_?n.bH:n}}),I.mC=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(W().n(t,r))return!0;n=r}}),I.lH=(function(e){return document.createElement(e.h0())}),I.mo=(function(e,t){var n=this.mp(e,t);return n===void 0?void 0:t.du.ef(n)}),I.mp=(function(e,t){var n=e.cg.getAttributeNS(null,t.cf);return n===null?void 0:n}),I.kB=(function(e,t,n){this.nj(e,t,t.du.dI(n))}),I.nj=(function(e,t,n){n===null?this.n8(e,t):e.cg.setAttribute(t.cf,n)}),I.n8=(function(e,t){e.cg.removeAttribute(t.cf)}),I.nk=(function(e,t,n){this.nl(e,t,t.hO.dI(n))}),I.nl=(function(e,t,n){e.cg[t.hP]=n}),I.lI=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.i4)}),I.ms=(function(e,t){var n=this.mt(e,t);return n===void 0?void 0:t.fX.ef(n)}),I.mt=(function(e,t){var n=e.h6(),r=t.fd,i=n.getAttributeNS(r.d()?null:r.aE(),t.fY);return i===null?void 0:i}),I.nn=(function(e,t,n){this.no(e,t,t.fX.dI(n))}),I.no=(function(e,t,n){if(n===null)this.na(e,t);else{var r=t.fd;if(r.d())e.h6().setAttribute(t.fc,n);else{var i=r.aE();e.h6().setAttributeNS(i,t.fc,n)}}}),I.na=(function(e,t){var n=e.h6(),r=t.fd;n.removeAttributeNS(r.d()?null:r.aE(),t.fY)}),I.lJ=(function(e){return document.createTextNode(e)}),I.lM=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new ix(this.lL(r),n);r=i,n=a}}),I.lL=(function(e){if(e instanceof HTMLElement){var t=e.id;if(ol(),t!==``)var n=`#`+t;else var r=e.className,n=(ol(),r===``?``:`.`+r.replace(this.hp,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new z().i(yo,`com.raquo.laminar.DomApi$`,{cg:1});var bo;function xo(){return bo||=new yo,bo}function So(e,t,n){this.fT=null,this.hq=null,this.fS=null,this.fT=e,this.hq=t,this.fS=n}I=So.prototype=new L,I.constructor=So,I.bK=(function(e){this.fT===null?this.fS===null?Kc().me(this.hq,e):vo().mc(this.fS,sp().mk(e)):this.fT.bK(e)}),new z().i(So,`com.raquo.laminar.Seq`,{ch:1});function Co(){wo=this,$()}I=Co.prototype=new L,I.constructor=Co,new z().i(Co,`com.raquo.laminar.Seq$`,{ci:1});var wo;function To(){return wo||=new Co,wo}function Eo(e){Ma(),Ld()}function Do(e){e.kK=es()}function Oo(e){ko(e,new om((e=>{e.hQ.cg.focus()})))}function ko(e,t){return new Cu(new om((e=>{var n=new Od(!e.dS.bp.d()),r=new om((e=>{n.fr?n.fr=!1:t.f(e)}));ro().nt(e.dS,new om((e=>(t=>{r.f(new Xo(e,t))}))(e)),!1)})),es())}function Ao(){this.ce=null,this.hJ=null,this.hK=!1,this.hI=null,jo=this,this.ce=new fu(Mo()),new fu(Mo()),new fu(Mo()),this.hI=new du}I=Ao.prototype=new L,I.constructor=Ao,I.jF=(function(){return this.hK||=(this.hJ=new pu(this),!0),this.hJ}),new z().i(Ao,`com.raquo.laminar.codecs.package$`,{cq:1});var jo;function Mo(){return jo||=new Ao,jo}function No(e){e.hx=Fo(e,`class`,` `),e.cI=e.hx}function Po(e,t){return _u(new vu,`data-`+t,Mo().ce)}function Fo(e,t,n){var r=_u(new vu,t,Mo().ce);return new mu(r.cf,new om((e=>{var t=xo().mo(e,r);return t===void 0?``:t})),new sm(((e,t)=>{xo().kB(e,r,t)})),n)}function Io(e){e.kJ=Lo(e,`class`,` `)}function Lo(e,t,n){var r=new xu(t,Mo().ce,e_());return new mu(r.fc,new om((e=>{var t=xo().ms(e,r);return t===void 0?``:t})),new sm(((e,t)=>{xo().nn(e,r,t)})),n)}function Ro(e){this.fa=null,this.fa=e}I=Ro.prototype=new L,I.constructor=Ro,I.kr=(function(e,t){try{this.fa.cy(e,t)}catch(e){var n=e instanceof cd?e:new X_(e);Ld().f2(n)}}),I.lC=(function(e){return new Ro(new sm(((t,n)=>{this.fa.cy(t,n),e.fa.cy(t,n)})))}),I.lp=(function(e){return e===void 0?this:e.lC(this)}),new z().i(Ro,`com.raquo.laminar.inserters.InserterHooks`,{cF:1});function zo(){}I=zo.prototype=new L,I.constructor=zo,I.mV=(function(e,t){return new lm(e,void 0)}),new z().i(zo,`com.raquo.laminar.inserters.StaticChildInserter$`,{cH:1});var Bo;function Vo(){return Bo||=new zo,Bo}function Ho(){}I=Ho.prototype=new L,I.constructor=Ho,I.ko=(function(e,t){if(e===``)return $();var n=wx(new Ex,e.split(t).filter((e=>(ol(),e!==``))));return Ih(),$().h4(n)}),new z().i(Ho,`com.raquo.laminar.keys.CompositeKey$`,{cK:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(){}I=Go.prototype=new L,I.constructor=Go;function Ko(){}Ko.prototype=I;function qo(){this.kL=null,this.kM=null,this.kN=null,this.kO=null,this.kL=`http://www.w3.org/2000/svg`,this.kM=`http://www.w3.org/1999/xlink`,this.kN=`http://www.w3.org/XML/1998/namespace`,this.kO=`http://www.w3.org/2000/xmlns/`}I=qo.prototype=new L,I.constructor=qo,I.mQ=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new zm(e)}}),new z().i(qo,`com.raquo.laminar.keys.SvgAttr$`,{cQ:1});var Jo;function Yo(){return Jo||=new qo,Jo}function Xo(e,t){this.hQ=null,this.hQ=e}I=Xo.prototype=new L,I.constructor=Xo,new z().i(Xo,`com.raquo.laminar.lifecycle.MountContext`,{cR:1});var Zo=new z().i(1,`com.raquo.laminar.modifiers.Modifier`,{a2:1});function Qo(){this.kP=null,$o=this,this.kP=new Su}I=Qo.prototype=new L,I.constructor=Qo,new z().i(Qo,`com.raquo.laminar.modifiers.Modifier$`,{cU:1});var $o;function es(){return $o||=new Qo,$o}function ts(){this.hW=null,ns=this,this.hW=new wu}I=ts.prototype=new L,I.constructor=ts,new z().i(ts,`com.raquo.laminar.modifiers.RenderableNode$`,{cY:1});var ns;function rs(){return ns||=new ts,ns}function is(){this.I=null,as=this,this.I=new Ou(new om((e=>e)),V()),new Ou(new om((e=>``+(e|0))),V()),new Ou(new om((e=>``+ +e)),V()),new Ou(new om((e=>``+!!e)),V()),new Ou(new om((e=>e.nz())),V())}I=is.prototype=new L,I.constructor=is,new z().i(is,`com.raquo.laminar.modifiers.RenderableText$`,{d3:1});var as;function V(){return as||=new is,as}function os(){}I=os.prototype=new L,I.constructor=os,I.fA=(function(e,t,n){var r=new t_(e);t.kI(r),n!==void 0&&n.kr(e,t);var i=xo().lo(e.dL(),t.dL());return i&&t.kC(r),i}),new z().i(os,`com.raquo.laminar.nodes.ParentNode$`,{d5:1});var ss;function cs(){return ss||=new os,ss}function ls(e){this.i1=null,this.i1=new Ro(new sm(((t,n)=>{matchResult1:{var r=n.dL();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Ld(),a=r.textContent,o=t.dL().tagName;i.f2(_f(new vf,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}I=ls.prototype=new L,I.constructor=ls,I.ls=(function(e){return e.bX(new om((e=>e.nF(this.i1))))}),new z().i(ls,`com.raquo.laminar.nodes.Slot`,{d9:1});function us(){}I=us.prototype=new L,I.constructor=us,I.ln=(function(){fs().m0(),fs().m1(),fs().m2(),fs().m3(),fs().m4(),fs().m5(),fs().m6(),fs().m7()}),I.m0=(function(){var e=document.querySelector(`#example1`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__overview`)))]))),new Q(K().t(new(Zo.r()).C([Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Y().l.cI.dE(`flex flex-col gap-4`),Y().l.mZ().ad(new Q(K().t(new(Zo.r()).C([Rd(Y().l,`This popover contains interactive content that users can engage with directly.`,V().I)])))),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.hc().gE())),new J((e=>e.fM().h8()))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Take Action`,V().I)]))))]))))])))),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__overview`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Show popover`,V().I)]))))]))))))}),I.m1=(function(){var e=document.querySelector(`#example2`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q([Y().l.cI.dE(`flex flex-col items-start gap-4`),Y().l.ax().ad(new Q([df().H(new Q([new J((e=>e.bm().x(`popover__anchor-button`)))]),new Q([Rd(Y().l,`I'm anchored to a Web Awesome button.`,V().I)])),Kd().H(new Q([new J((e=>e.bw().x(`popover__anchor-button`)))]),new Q([Rd(Y().l,`Show popover`,V().I)]))])),Y().l.ax().ad(new Q([df().H(new Q([new J((e=>e.bm().x(`popover__anchor-native-button`)))]),new Q([Rd(Y().l,`I'm anchored to a native button.`,V().I)])),Y().l.lz().ad(new Q([Y().l.kj().x(`popover__anchor-native-button`),Rd(Y().l,`Show Popover`,V().I)]))]))]))))}),I.m2=(function(){var e=document.querySelector(`#example3`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__opening`)))]))),new Q(K().t(new(Zo.r()).C([Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Y().l.cI.dE(`flex flex-col gap-4`),Rd(Y().l,`Click the button below to close the popover`,V().I),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.hc().gE())),new J((e=>e.jV().ks()))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Dismiss`,V().I)]))))]))))])))),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__opening`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Show popover`,V().I)]))))]))))))}),I.m3=(function(){var e=document.querySelector(`#example4`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Y().l.cI.dE(`flex gap-4 items-center`),Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__top`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Top`,V().I)])))),df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__top`))),new J((e=>e.fI().x(`top`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`I'm on the top`,V().I)]))))])))),Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__bottom`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Bottom`,V().I)])))),df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__bottom`))),new J((e=>e.fI().x(`bottom`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`I'm on the bottom`,V().I)]))))])))),Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__left`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Left`,V().I)])))),df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__left`))),new J((e=>e.fI().x(`left`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`I'm on the left`,V().I)]))))])))),Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__right`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Right`,V().I)])))),df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__right`))),new J((e=>e.fI().x(`right`)))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`I'm on the right`,V().I)]))))]))))]))))))}),I.m4=(function(){var e=document.querySelector(`#example5`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q([Y().l.cI.dE(`flex gap-4 items-center`),Y().l.ax().ad(new Q([Kd().H(new Q([new J((e=>e.bw().x(`popover__distance-near`)))]),new Q([Rd(Y().l,`Near`,V().I)])),df().H(new Q([new J((e=>e.bm().x(`popover__distance-near`))),new J((e=>e.k1().x(0)))]),new Q([Rd(Y().l,`I'm very close`,V().I)]))])),Y().l.ax().ad(new Q([Kd().H(new Q([new J((e=>e.bw().x(`popover__distance-far`)))]),new Q([Rd(Y().l,`Far`,V().I)])),df().H(new Q([new J((e=>e.bm().x(`popover__distance-far`))),new J((e=>e.k1().x(30)))]),new Q([Rd(Y().l,`I'm farther away`,V().I)]))]))]))))}),I.m5=(function(){var e=document.querySelector(`#example6`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q([Y().l.cI.dE(`flex gap-4 items-center`),Y().l.ax().ad(new Q([Kd().H(new Q([new J((e=>e.bw().x(`popover__big-arrow`)))]),new Q([Rd(Y().l,`Big arrow`,V().I)])),df().H(new Q([new J((e=>e.bm().x(`popover__big-arrow`))),new J((e=>e.h9().x(`--arrow-size: 8px;`)))]),new Q([Rd(Y().l,`I have a big arrow`,V().I)]))])),Y().l.ax().ad(new Q([Kd().H(new Q([new J((e=>e.bw().x(`popover__no-arrow`)))]),new Q([Rd(Y().l,`No arrow`,V().I)])),df().H(new Q([new J((e=>e.bm().x(`popover__no-arrow`))),new J((e=>e.h9().x(`--arrow-size: 0;`)))]),new Q([Rd(Y().l,`I don't have an arrow`,V().I)]))]))]))))}),I.m6=(function(){var e=document.querySelector(`#example7`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q([Kd().H(new Q([new J((e=>e.bw().x(`popover__max-width`)))]),new Q([Rd(Y().l,`Toggle me`,V().I)])),df().H(new Q([new J((e=>e.bm().x(`popover__max-width`))),new J((e=>e.h9().x(`--max-width: 160px;`)))]),new Q([Rd(Y().l,`Popovers will usually grow to be much wider, but this one has a custom max width that forces text to wrap.`,V().I)]))]))))}),I.m7=(function(){var e=document.querySelector(`#example8`);Bc().df(e).d()||(Y(),new Hd(e,Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([df().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bm().x(`popover__autofocus`)))]))),new Q(K().t(new(Zo.r()).C([Y().l.ax().ad(new Q(K().t(new(Zo.r()).C([Y().l.cI.dE(`flex flex-col gap-4`),mf().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.lu().x(!0))),new J((e=>e.n2().x(`What's on your mind?`))),new J((e=>e.fM().h8())),new J((e=>e.nd().x(`none`))),new J((e=>e.ng().x(3)))]))),new Q(K().t(new(Zo.r()).C([])))),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.hc().gE())),new J((e=>e.fM().h8())),new J((e=>e.jV().ks()))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Submit`,V().I)]))))]))))])))),Kd().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.bw().x(`popover__autofocus`))),new J((e=>zd(Y().l,gs().nr().ls(new Q(K().t(new(um.r()).C([(Y(),Vo().mV(cf().H(new Q(K().t(new(Fc.r()).C([new J((e=>e.mP().x(`comment`)))]))),new Q(K().t(new(Zo.r()).C([])))),rs().hW))])))),Ec().iM,Du())))]))),new Q(K().t(new(Zo.r()).C([Rd(Y().l,`Feedback`,V().I)]))))]))))))}),new z().i(us,`examples.popover.Main$package$`,{dd:1});var ds;function fs(){return ds||=new us,ds}function ps(e){try{fs().ln()}catch(e){throw e}}function ms(){this.ib=null,this.ic=!1}I=ms.prototype=new L,I.constructor=ms,I.nr=(function(){return this.ic||=(this.ib=new ls(`start`),!0),this.ib}),new z().i(ms,`io.github.nguyenyou.webawesome.laminar.Button$slots$`,{df:1});var hs;function gs(){return hs||=new ms,hs}function _s(e,t){return Po(Y().l,t).x(`close`)}function vs(){this.ii=null,this.ij=!1}I=vs.prototype=new L,I.constructor=vs,I.ks=(function(){return this.ij||=(this.ii=_s(this,`popover`),!0),this.ii}),new z().i(vs,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$`,{dk:1});var ys;function bs(){return ys||=new vs,ys}function xs(){}I=xs.prototype=new L,I.constructor=xs,I.ni=(function(e,t){var n=Ki;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var _=o,v=c,y=l,b=_<<20|y,x=Ki;return x.setInt32(0,v,!0),x.setInt32(4,b,!0),+x.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var S=54+o|0,C=c,w=l,T=S<<20|w,ee=Ki;return ee.setInt32(0,C,!0),ee.setInt32(4,T,!0),5551115123125783e-32*ee.getFloat64(0,!0)}var te=2047&~(t>>31),ne=-2147483648&i,E=te<<20|ne,re=Ki;return re.setInt32(0,0,!0),re.setInt32(4,E,!0),+re.getFloat64(0,!0)}),new z().i(xs,`java.lang.Math$`,{dG:1});var Ss;function Cs(){return Ss||=new xs,Ss}function ws(e,t){for(var n=Xs().c0(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ts(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new td(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new td(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(nd.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ts(e,t){var n=Xs().c0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=Xs().c0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=Xs().c0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=Xs().c0(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=Xs().c0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Es(e,c[1]),Ns(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Es(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Es(e,d[1]),`<clinit>`]}function Es(e,t){var n=Os(e);if(lc().gc.call(n,t))var r=Os(e)[t];else var r=Ws(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ds(e){if(!((1&e.bx)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.g9=t,e.bx=(1|e.bx)<<24>>24}return e.g9}function Os(e){return(1&e.bx)<<24>>24?e.g9:Ds(e)}function ks(e){if(!((2&e.bx)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ga=t,e.bx=(2|e.bx)<<24>>24}return e.ga}function As(e){return(2&e.bx)<<24>>24?e.ga:ks(e)}function js(e){return(4&e.bx)<<24>>24||(e.g8=Object.keys(As(e)),e.bx=(4|e.bx)<<24>>24),e.g8}function Ms(e){return(4&e.bx)<<24>>24?e.g8:js(e)}function Ns(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ps(e,t){return t?t.arguments&&t.stack?Fs(e,t):t.stack&&t.sourceURL?Rs(e,t):t.stack&&t.number?Ls(e,t):t.stack&&t.fileName?Is(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?zs(e,t):Bs(e,t):zs(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Vs(e,t):Hs(e,t):t.stack&&!t.fileName?Fs(e,t):Us(e,t):[]}function Fs(e,t){return(t.stack+`
`).replace(Xs().c0(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(Xs().bo(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(Xs().bo(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(Xs().bo(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(Xs().bo(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Is(e,t){return t.stack.replace(Xs().bo(`(?:\\n@:0)?\\s+$`,`m`),``).replace(Xs().bo(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ls(e,t){return t.stack.replace(Xs().bo(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(Xs().bo(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(Xs().bo(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Rs(e,t){return t.stack.replace(Xs().bo(`\\[native code\\]\\n`,`m`),``).replace(Xs().bo(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(Xs().bo(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function zs(e,t){for(var n=Xs().bo(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Bs(e,t){for(var n=Xs().bo(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Vs(e,t){for(var n=Xs().c0(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Hs(e,t){for(var n=Xs().c0(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(Xs().c0(`<anonymous function: (\\S+)>`),`$1`).replace(Xs().c0(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Us(e,t){return[]}function Ws(e,t,n){for(;;)if(t<(Ms(e).length|0)){var r=Ms(e)[t];if(n.startsWith(r))return``+As(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Gs(){this.g9=null,this.ga=null,this.g8=null,this.bx=0}I=Gs.prototype=new L,I.constructor=Gs,I.m8=(function(e){return ws(this,Ps(this,e))}),new z().i(Gs,`java.lang.StackTrace$`,{dM:1});var Ks;function qs(){return Ks||=new Gs,Ks}function Js(){}I=Js.prototype=new L,I.constructor=Js,I.c0=(function(e){return new RegExp(e)}),I.bo=(function(e,t){return new RegExp(e,t)}),new z().i(Js,`java.lang.StackTrace$StringRE$`,{dN:1});var Ys;function Xs(){return Ys||=new Js,Ys}function Zs(){this.iG=null,this.kQ=null,Qs=this,this.iG=new Q_(!1),this.kQ=new Q_(!0)}I=Zs.prototype=new L,I.constructor=Zs,new z().i(Zs,`java.lang.System$Streams$`,{dR:1});var Qs;function $s(){return Qs||=new Zs,Qs}function ec(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function tc(){this.gb=null,this.iH=null,nc=this,this.gb=ec(this),this.iH=null}I=tc.prototype=new L,I.constructor=tc,I.gT=(function(e,t){if(this.gb!==null){var n=this.gb;return lc().gc.call(n,e)?n[e]:t}return this.iH.gT(e,t)}),new z().i(tc,`java.lang.System$SystemProperties$`,{dS:1});var nc;function rc(){return nc||=new tc,nc}function ic(){this.iI=null,ac=this,this.iI=new od(void 0)}I=ic.prototype=new L,I.constructor=ic,new z().i(ic,`java.lang.Thread$`,{dT:1});var ac;function oc(){return ac||=new ic,ac}function sc(){this.gc=null,cc=this,this.gc=Object.prototype.hasOwnProperty}I=sc.prototype=new L,I.constructor=sc,new z().i(sc,`java.lang.Utils$Cache$`,{dV:1});var cc;function lc(){return cc||=new sc,cc}function uc(e,t){return e===t}function dc(e){return 0}function fc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b4)}var pc=new z().i(0,`java.lang.Void`,{b4:1},(e=>e===void 0));function mc(e,t){throw Sm(new wm,`argument type mismatch`)}function hc(){}I=hc.prototype=new L,I.constructor=hc,I.bv=(function(e){return e instanceof R||e instanceof la||e instanceof ua||e instanceof da||e instanceof fa||e instanceof pa?e.a.length:e instanceof ma?e.a.length>>>1|0:(e instanceof ha||e instanceof ga||mc(this,e),e.a.length)}),new z().i(hc,`java.lang.reflect.Array$`,{dW:1});var gc;function _c(){return gc||=new hc,gc}function vc(){}I=vc.prototype=new L,I.constructor=vc,I.lw=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),I.k6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),I.gI=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),I.k7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),I.k5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),I.k4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),I.k8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),I.O=(function(e,t){var n=e.a.length,r=t<n?t:n,i=Ri(e).a8.Q().a8.U(t);return e.p(0,i,0,r),i}),I.X=(function(e,t,n){if(t>n)throw Sm(new wm,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Ri(e).a8.Q().a8.U(i);return e.p(t,s,0,o),s}),new z().i(vc,`java.util.Arrays$`,{dX:1});var yc;function H(){return yc||=new vc,yc}function bc(e,t){return Cc().kE(e,t)}function xc(){}I=xc.prototype=new L,I.constructor=xc,I.kE=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),I.kf=(function(e){if(e<-0x8000000000000000)return na(0,-2147483648);if(e>=0x8000000000000000)return na(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return na(t,e<0&&t!==0?n-1|0:n)}),I.lQ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0)|0)-((o-S|0)>>>0>o>>>0|0)|0)<0)var w=p-1|0,T=(m-1|0)+(w!==-1|0)|0,ee=w,te=T;else var ee=p,te=m}else var ne=(s>>>0)/(Ui(u)>>>0)|0,ee=(4294967296*(s-Math.imul(u,ne)|0)+(o>>>0))/u|0,te=ne;if((t^r)>=0)return na(ee,te);var E=-ee|0;return na(E,(-te|0)-(E!==0|0)|0)}),I.lR=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Ui(n)>>>0)|0;return na((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return na(_,(s-1|0)+(_!==-1|0)|0)}return na(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?na(0,0):na(1,0)}),I.n6=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),S=y+((b+x|0)<<16)|0,C=(y>>>16|0)+x|0,w=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(C>>>16|0)|0)+(((65535&C)+b|0)>>>16|0)|0,T=o-S|0,ee=(s-w|0)-(T>>>0>o>>>0|0)|0;if(ee<0)var te=T+u|0,ne=(ee+d|0)+(te>>>0<T>>>0|0)|0,E=te,re=ne;else var E=T,re=ee}else var ie=(4294967296*((s>>>0)%(Ui(u)>>>0)|0)+(o>>>0))/u|0,E=o-Math.imul(u,ie)|0,re=0;if(t<0){var ae=-E|0;return na(ae,(-re|0)-(ae!==0|0)|0)}return na(E,re)}),I.n7=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Ui(n)>>>0)|0)+(e>>>0))/n|0;return na(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return na(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return na(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return na(e,t);var x=e-n|0;return na(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new z().i(xc,`org.scalajs.linker.runtime.RuntimeLong$`,{e0:1});var Sc;function Cc(){return Sc||=new xc,Sc}function wc(){this.iM=null,Tc=this,this.iM=new Lm}I=wc.prototype=new L,I.constructor=wc,new z().i(wc,`scala.$less$colon$less$`,{e3:1});var Tc;function Ec(){return Tc||=new wc,Tc}function Dc(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)Yl().fC(r,s,Yl().dH(t,o)),o=1+o|0,s=1+s|0}function Oc(){}I=Oc.prototype=new L,I.constructor=Oc,I.ka=(function(e,t){var n=e.s();if(n>-1){for(var r=t.bb(n),i=e.i(),a=0;a<n;)Yl().fC(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.aF(),c=s===ya.l();o=[];for(var l=e.i();l.j();){var u=l.h(),d=c?ia(u):u===null?Ml().fK(s):u;o.push(d)}return Ml().fJ(s===_a.l()?pc.l():s===Ul.l()||s===ip.l()?B.l():s,o)}),I.eS=(function(e,t,n,r,i){var a=Ri(e);a.a8.Z&&Ri(n).a8.R(a.a8)?e.p(t,n,r,i):Dc(this,e,t,n,r,i)}),I.k9=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!W().n(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new z().i(Oc,`scala.Array$`,{e5:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){this.gd=null,this.iN=null,Mc=this,this.gd=new pa(0),this.iN=new R(0)}I=jc.prototype=new L,I.constructor=jc,new z().i(jc,`scala.Array$EmptyArrays$`,{e6:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(e){return!!(e&&e.$classData&&e.$classData.n.ap)}var Fc=new z().i(1,`scala.Function1`,{f:1});function Ic(){}I=Ic.prototype=new L,I.constructor=Ic;function Lc(){}Lc.prototype=I;function Rc(){}I=Rc.prototype=new L,I.constructor=Rc,I.df=(function(e){return e===null?e_():new t_(e)}),new z().i(Rc,`scala.Option$`,{ed:1});var zc;function Bc(){return zc||=new Rc,zc}function Vc(){this.iS=null,this.iR=null,Hc=this,this.iS=new J((e=>this.iS)),this.iR=new Ip}I=Vc.prototype=new L,I.constructor=Vc,new z().i(Vc,`scala.PartialFunction$`,{ee:1});var Hc;function Uc(){return Hc||=new Vc,Hc}function Wc(){this.iV=null,Gc=this,this.iV=new J((e=>Kc().iV))}I=Wc.prototype=new L,I.constructor=Wc,I.me=(function(e,t){var n=_c().bv(e),r=0;if(e instanceof R)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof pa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ga)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ma)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.f(na(o,s)),r=1+r|0}else if(e instanceof ha)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ua)for(;r<n;)t.f(ta(e.a[r])),r=1+r|0;else if(e instanceof da)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof fa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof la)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new zm(e)}),new z().i(Wc,`scala.collection.ArrayOps$`,{el:1});var Gc;function Kc(){return Gc||=new Wc,Gc}function qc(){}I=qc.prototype=new L,I.constructor=qc,I.bW=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new z().i(qc,`scala.collection.Hashing$`,{ep:1});var Jc;function Yc(){return Jc||=new qc,Jc}function Xc(e,t){for(var n=e.i();n.j();)t.f(n.h())}function Zc(e,t){for(var n=!0,r=e.i();n&&r.j();)n=!!t.f(r.h());return n}function Qc(e){var t=e.s();return t===-1?!e.i().j():t===0}function $c(e,t,n,r){var i=e.i(),a=n;matchResult18:{var o,s=e.s();if(s===-1){var o=_c().bv(t);break matchResult18}var o=s}for(var c=_c().bv(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.j();)Yl().fC(t,a,i.h()),a=1+a|0;return a-n|0}function el(e,t,n,r){return e.s()===0?``+t+r:e.dd(gx(new _x),t,n,r).aO.m}function tl(e,t,n,r,i){var a=t.aO;n.length!==0&&(a.m=``+a.m+n);var o=e.i();if(o.j()){var s=o.h();for(a.m=``+a.m+s;o.j();){r.length!==0&&(a.m=``+a.m+r);var c=o.h();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function nl(e,t){if(e.s()>=0){var n=e.s(),r=t.bb(n);return e.bu(r,0,2147483647),r}var i=null,a=t.aF(),o=a===ya.l();i=[];for(var s=e.i();s.j();){var c=s.h(),l=o?ia(c):c===null?Ml().fK(a):c;i.push(l)}return Ml().fJ(a===_a.l()?pc.l():a===Ul.l()||a===ip.l()?B.l():a,i)}function rl(e,t){this.j1=null,this.eu=null,this.j1=e,this.eu=t}I=rl.prototype=new L,I.constructor=rl,I.mv=(function(){return this.j1.a6().i()}),new z().i(rl,`scala.collection.Iterator$ConcatIteratorCell`,{ey:1});function il(){this.j4=null,al=this,this.j4=new J((e=>this.j4))}I=il.prototype=new L,I.constructor=il,new z().i(il,`scala.collection.StringOps$`,{eF:1});var al;function ol(){return al||=new il,al}function sl(){}I=sl.prototype=new L,I.constructor=sl,I.gW=(function(e,t){return Em(new Om,e+` is out of bounds (min 0, max `+t+`)`)}),new z().i(sl,`scala.collection.generic.CommonErrors$`,{eJ:1});var cl;function ll(){return cl||=new sl,cl}function ul(){this.j9=0,dl=this;try{ol();var e=Qu().kl(rc().gT(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.j9=e}I=ul.prototype=new L,I.constructor=ul,new z().i(ul,`scala.collection.immutable.IndexedSeqDefaults$`,{eR:1});var dl;function fl(){return dl||=new ul,dl}function pl(){}I=pl.prototype=new L,I.constructor=pl,new z().i(pl,`scala.collection.immutable.LazyList$EmptyMarker$`,{eU:1});var ml;function hl(){return ml||=new pl,ml}function gl(){this.gk=null}I=gl.prototype=new L,I.constructor=gl,I.gJ=(function(){var e=this.gk;if(e===null)throw new Tm(`uninitialized`);return e.a6()}),I.gX=(function(e){if(this.gk!==null)throw new Tm(`already initialized`);this.gk=e}),new z().i(gl,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{eW:1});function _l(){}I=_l.prototype=new L,I.constructor=_l,new z().i(_l,`scala.collection.immutable.LazyListBase$TailUpdater`,{f1:1});function vl(){this.je=null,yl=this,Gv(),this.je=new Wf(0,0,new R(0),new pa(0),0,0)}I=vl.prototype=new L,I.constructor=vl,new z().i(vl,`scala.collection.immutable.MapNode$`,{ff:1});var yl;function bl(){return yl||=new vl,yl}function xl(e,t,n){return Lg(new zg,n+` is out of bounds (min 0, max `+(_c().bv(t)-1|0))}function Sl(){}I=Sl.prototype=new L,I.constructor=Sl;function Cl(){}Cl.prototype=I,I.kt=(function(e,t){if(t<0||t>(e.a.length-1|0))throw xl(this,e,t);var n=new pa(e.a.length-1|0);e.p(0,n,0,t);var r=1+t|0,i=(e.a.length-t|0)-1|0;return e.p(r,n,t,i),n}),I.mz=(function(e,t,n){if(t<0||t>e.a.length)throw xl(this,e,t);var r=new pa(1+e.a.length|0);e.p(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.p(t,r,i,a),r});var wl=new z().i(0,`scala.collection.immutable.Node`,{aF:1});function Tl(){this.eC=0,El=this,this.eC=Wi(7)}I=Tl.prototype=new L,I.constructor=Tl,I.dK=(function(e,t){return 31&(e>>>t|0)}),I.dh=(function(e){return 1<<e}),I.mw=(function(e,t){return Qu().dg(e&(t-1|0))}),I.ca=(function(e,t,n){return e===-1?t:this.mw(e,n)}),new z().i(Tl,`scala.collection.immutable.Node$`,{fi:1});var El;function Dl(){return El||=new Tl,El}function Ol(){this.go=null,this.b9=null,this.c6=null,this.ea=null,this.gp=null,this.ji=null,kl=this,this.go=new R(0),this.b9=new(B.r().r()).C(0),this.c6=new(B.r().r().r()).C(0),this.ea=new(B.r().r().r().r()).C(0),this.gp=new(B.r().r().r().r().r()).C(0),this.ji=new(B.r().r().r().r().r().r()).C(0)}I=Ol.prototype=new L,I.constructor=Ol,I.ee=(function(e,t){var n=e.a.length,r=new R(1+n|0);return e.p(0,r,0,n),r.a[n]=t,r}),I.z=(function(e,t){var n=H().O(e,1+e.a.length|0);return n.a[n.a.length-1|0]=t,n}),I.c8=(function(e,t){var n=Ri(t).a8.Q().a8.U(1+t.a.length|0),r=t.a.length;return t.p(0,n,1,r),n.a[0]=e,n}),I.gL=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.f(t.a[r]),r=1+r|0;else for(var a=e-1|0;r<i;)this.gL(a,t.a[r],n),r=1+r|0}),I.bL=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.f(r);if(!Object.is(r,i))return this.mK(e,t,n,i);n=1+n|0}return e}),I.mK=(function(e,t,n,r){var i=new R(e.a.length);n>0&&e.p(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.f(e.a[a]),a=1+a|0;return i}),I.W=(function(e,t,n){if(e===1)return this.bL(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.W(e-1|0,i,n);if(i!==a)return this.mL(e,t,n,r,a);r=1+r|0}return t}),I.mL=(function(e,t,n,r,i){var a=Ri(t).a8.Q().a8.U(t.a.length);r>0&&t.p(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.W(e-1|0,t.a[o],n),o=1+o|0;return a}),new z().i(Ol,`scala.collection.immutable.VectorStatics$`,{fz:1});var kl;function U(){return kl||=new Ol,kl}function Al(){}I=Al.prototype=new L,I.constructor=Al,I.fK=(function(e){return e===ba.l()||e===xa.l()||e===ya.l()||e===Sa.l()?0:e===Ca.l()?na(0,0):e===wa.l()||e===Ta.l()?0:e===va.l()?!1:e===_a.l()?void 0:null}),I.fJ=(function(e,t){var n=t.length|0;if(e===ya.l()){for(var r=new ua(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a8.U(n),o=0;o!==n;)Yl().fC(a,o,t[o]),o=1+o|0;return a}),new z().i(Al,`scala.collection.mutable.ArrayBuilder$`,{fG:1});var jl;function Ml(){return jl||=new Al,jl}function Nl(e,t,n){this.ed=null,this.cv=0,this.aN=null,this.ed=e,this.cv=t,this.aN=n}I=Nl.prototype=new L,I.constructor=Nl,I.ma=(function(e,t){for(var n=this;;)if(t===n.cv&&W().n(e,n.ed))return n;else if(n.aN===null||n.cv>t)return null;else n=n.aN}),I.B=(function(){return`Node(`+this.ed+`, `+this.cv+`) -> `+this.aN});var Pl=new z().i(Nl,`scala.collection.mutable.HashSet$Node`,{fS:1});function Fl(){}I=Fl.prototype=new L,I.constructor=Fl,I.jU=(function(e,t,n){if(t!==e)throw new Fm(n)}),new z().i(Fl,`scala.collection.mutable.MutationTracker$`,{fY:1});var Il;function Ll(){return Il||=new Fl,Il}function Rl(){this.kU=null,this.l3=null,this.kV=null,this.kY=null,this.kZ=null,this.kX=null,this.kW=null,this.kT=null,this.l4=null,this.kS=null,this.l2=null,this.l0=null,this.l1=null,zl=this,this.kU=Nv(),this.l3=oy(),this.kV=Iv(),this.kY=Gv(),this.kZ=Jv(),this.kX=Hv(),this.kW=zv(),this.kT=Av(),this.l4=ly(),this.kS=Dv(),this.l2=ry(),this.l0=Zv(),this.l1=ey()}I=Rl.prototype=new L,I.constructor=Rl,I.jR=(function(e){return e===ba.l()?Nv():e===xa.l()?oy():e===ya.l()?Iv():e===Sa.l()?Gv():e===Ca.l()?Jv():e===wa.l()?Hv():e===Ta.l()?zv():e===va.l()?Av():e===_a.l()?ly():e===B.l()?ry():e===ip.l()?Zv():e===Ul.l()?ey():new z_(e)}),new z().i(Rl,`scala.reflect.ClassTag$`,{g6:1});var zl;function Bl(){return zl||=new Rl,zl}function Vl(){}I=Vl.prototype=new L,I.constructor=Vl,I.n=(function(e,t){return e===t||(ed(e)?this.lZ(e,t):e instanceof Ii?this.lX(e,t):e===null?t===null:Bi(e,t))}),I.lZ=(function(e,t){if(ed(t))return this.lY(e,t);if(t instanceof Ii){if(typeof e==`number`)return+e===t.c;if(e instanceof Li){var n=aa(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Bi(e,t)}return e===null?t===null:Bi(e,t)}),I.lY=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof Li){var r=aa(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof Li){var a=aa(e),o=a.l,s=a.h;if(t instanceof Li){var c=aa(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Bi(e,t)}),I.lX=(function(e,t){if(t instanceof Ii)return e.c===t.c;if(ed(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof Li){var n=aa(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Bi(t,e)}return e===null&&t===null}),new z().i(Vl,`scala.runtime.BoxesRunTime$`,{gz:1});var Hl;function W(){return Hl||=new Vl,Hl}var Ul=new z().i(0,`scala.runtime.Null$`,{gC:1});function Wl(){}I=Wl.prototype=new L,I.constructor=Wl,I.bZ=(function(){throw Am(new Mm,`tried to cast away nullability, but value is null`)}),new z().i(Wl,`scala.runtime.Scala3RunTime$`,{gE:1});var Gl;function Kl(){return Gl||=new Wl,Gl}function ql(){}I=ql.prototype=new L,I.constructor=ql,I.lm=(function(e){return e===null?Ul.l():Ri(e)}),I.dH=(function(e,t){if(e instanceof R||e instanceof pa||e instanceof ga)return e.a[t];if(e instanceof ma){var n=e.a,r=t<<1;return na(n[r],n[r+1|0])}if(e instanceof ha)return e.a[t];if(e instanceof ua)return ta(e.a[t]);if(e instanceof da||e instanceof fa||e instanceof la)return e.a[t];throw e===null?jm(new Mm):new zm(e)}),I.fC=(function(e,t,n){if(e instanceof R)e.a[t]=n;else if(e instanceof pa)e.a[t]=n|0;else if(e instanceof ga)e.a[t]=+n;else if(e instanceof ma){var r=aa(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof ha)e.a[t]=Math.fround(n);else if(e instanceof ua)e.a[t]=ia(n);else if(e instanceof da)e.a[t]=n|0;else if(e instanceof fa)e.a[t]=n|0;else if(e instanceof la)e.a[t]=!!n;else throw e===null?jm(new Mm):new zm(e)}),I.l6=(function(e){return el(e.ei(),e.cF()+`(`,`,`,`)`)}),I.dq=(function(e){if(e===null)return null;if(e.a.length===0){var t=__();return ry(),m_(t)}return new Fb(e)}),new z().i(ql,`scala.runtime.ScalaRunTime$`,{gF:1});var Jl;function Yl(){return Jl||=new ql,Jl}function Xl(){}I=Xl.prototype=new L,I.constructor=Xl,I.y=(function(e,t){var n=this.cC(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),I.cC=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),I.aD=(function(e,t){return this.lv(e^t)}),I.lv=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),I.mG=(function(e,t){return t===e>>31?e:e^t}),I.lT=(function(e){var t=Wi(e);if(t===e)return t;var n=Cc().kf(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Ki;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),I.J=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.lT(+e);if(e instanceof Li){var t=aa(e);return this.mG(t.l,t.h)}return Vi(e)}),I.mA=(function(e){throw Em(new Om,``+e)}),new z().i(Xl,`scala.runtime.Statics$`,{gH:1});var Zl;function G(){return Zl||=new Xl,Zl}function Ql(){}I=Ql.prototype=new L,I.constructor=Ql,I.np=(function(e,t){return setTimeout((()=>{t.a6()}),e)}),new z().i(Ql,`scala.scalajs.js.timers.package$`,{gN:1});var $l;function eu(){return $l||=new Ql,$l}function tu(){}I=tu.prototype=new L,I.constructor=tu,I.nA=(function(e){if(e instanceof Q)return e.ft;var t=[];return e.bK(new J((e=>t.push(e)|0))),t}),new z().i(tu,`scala.scalajs.runtime.Compat$`,{gW:1});var nu;function ru(){return nu||=new tu,nu}function iu(){}I=iu.prototype=new L,I.constructor=iu,I.t=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new z().i(iu,`scala.scalajs.runtime.package$`,{gY:1});var au;function K(){return au||=new iu,au}function ou(){}I=ou.prototype=new L,I.constructor=ou,I.nq=(function(e){var t=`Illegal command line`+(e.kk()===0?``:e.kk()===1?` after first argument`:` after `+e.kk()+` arguments`)+`: `+e.nP();dd().mX().mD(t+`
`)}),new z().i(ou,`scala.util.CommandLineParser$`,{gZ:1});function su(e){this.gy=null,this.gy=e}I=su.prototype=new L,I.constructor=su,I.B=(function(){return`DynamicVariable(`+this.gy+`)`}),new z().i(su,`scala.util.DynamicVariable`,{h1:1});function cu(){}I=cu.prototype=new L,I.constructor=cu;function lu(){}lu.prototype=I,I.y=(function(e,t){var n=this.cC(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),I.cC=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),I.aD=(function(e,t){return this.f1(e^t)}),I.f1=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),I.kF=(function(e,t,n){var r=n;return r=this.y(r,Yg(`Tuple2`)),r=this.y(r,e),r=this.y(r,t),this.aD(r,2)}),I.h5=(function(e,t,n){var r=e.cD();if(r===0)return n?t:Yg(e.cF());var i=t;n||(i=this.y(i,Yg(e.cF())));for(var a=0;a<r;)i=this.y(i,G().J(e.cE(a))),a=1+a|0;return this.aD(i,r)}),I.ha=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.i();o.j();){var s=o.h(),c=G().J(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.y(l,n),l=this.y(l,r),l=this.cC(l,a),this.aD(l,i)}),I.mW=(function(e,t){var n=e.i(),r=t;if(!n.j())return this.aD(r,0);var i=n.h();if(!n.j())return this.aD(this.y(r,G().J(i)),1);var a=n.h(),o=G().J(i);r=this.y(r,o);for(var s=r,c=G().J(a),l=c-o|0,u=2;n.j();){r=this.y(r,c);var d=G().J(n.h());if(l!==(d-c|0)||l===0){for(r=this.y(r,d),u=1+u|0;n.j();)r=this.y(r,G().J(n.h())),u=1+u|0;return this.aD(r,u)}c=d,u=1+u|0}return this.f1(this.y(this.y(s,l),c))}),I.aC=(function(e,t){var n=t,r=_c().bv(e);switch(r){case 0:return this.aD(n,0);case 1:return this.aD(this.y(n,G().J(Yl().dH(e,0))),1);default:var i=G().J(Yl().dH(e,0));n=this.y(n,i);for(var a=n,o=G().J(Yl().dH(e,1)),s=o-i|0,c=2;c<r;){n=this.y(n,o);var l=G().J(Yl().dH(e,c));if(s!==(l-o|0)||s===0){for(n=this.y(n,l),c=1+c|0;c<r;)n=this.y(n,G().J(Yl().dH(e,c))),c=1+c|0;return this.aD(n,r)}o=l,c=1+c|0}return this.f1(this.y(this.y(a,s),o))}}),I.n4=(function(e,t,n,r){return this.f1(this.y(this.y(this.y(r,e),t),n))}),I.mx=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.aD(n,0);case 1:return this.aD(this.y(n,G().J(e.q(0))),1);default:var i=G().J(e.q(0));n=this.y(n,i);for(var a=n,o=G().J(e.q(1)),s=o-i|0,c=2;c<r;){n=this.y(n,o);var l=G().J(e.q(c));if(s!==(l-o|0)||s===0){for(n=this.y(n,l),c=1+c|0;c<r;)n=this.y(n,G().J(e.q(c))),c=1+c|0;return this.aD(n,r)}o=l,c=1+c|0}return this.f1(this.y(this.y(a,s),o))}}),I.mF=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.d();){var l=c.u(),u=c.o(),d=G().J(l);switch(r=this.y(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.n4(s,a,o,t):this.aD(r,n)});function uu(e){this.dR=null,this.hk=null,this.fQ=!1,this.hk=e,io(this),this.fQ=!1}I=uu.prototype=new L,I.constructor=uu,I.mY=(function(e){this.fQ?(co(e),this.hk.a6()):so(this,e)}),I.mE=(function(){ao(this),this.fQ=!0}),new z().i(uu,`com.raquo.airstream.ownership.OneTimeOwner`,{ca:1,cb:1});function du(){}I=du.prototype=new L,I.constructor=du,I.lO=(function(e){return e!==null}),I.lV=(function(e){return e?``:null}),I.ef=(function(e){return this.lO(e)}),I.dI=(function(e){return this.lV(!!e)}),new z().i(du,`com.raquo.laminar.codecs.package$$anon$1`,{cr:1,ai:1});function fu(e){if(e===null)throw jm(new Mm)}I=fu.prototype=new L,I.constructor=fu,I.dI=(function(e){return e}),I.ef=(function(e){return e}),new z().i(fu,`com.raquo.laminar.codecs.package$$anon$2`,{cs:1,ai:1});function pu(e){if(e===null)throw jm(new Mm)}I=pu.prototype=new L,I.constructor=pu,I.lN=(function(e){return ol(),Yu().n0(e)}),I.ef=(function(e){return this.lN(e)}),I.dI=(function(e){return``+ +e}),new z().i(pu,`com.raquo.laminar.codecs.package$$anon$4`,{ct:1,ai:1});function mu(e,t,n,r){this.hL=null,this.hN=null,this.hM=null,this.fV=null,this.hL=t,this.hN=n,this.hM=r,this.fV=new hu(r)}I=mu.prototype=new Ko,I.constructor=mu,I.dE=(function(e){return new Bd(this,(Y().l.l5(),Wo().ko(e,this.hM)))}),new z().i(mu,`com.raquo.laminar.keys.CompositeKey`,{cJ:1,a1:1});function hu(e){this.fW=null,this.fW=e}I=hu.prototype=new L,I.constructor=hu,I.k0=(function(e){return Wo().ko(e,this.fW)}),I.k3=(function(e){return el(e,``,this.fW,``)}),I.ef=(function(e){return this.k0(e)}),I.dI=(function(e){return this.k3(e)}),new z().i(hu,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{cL:1,ai:1});function gu(e){if(e===null)throw jm(new Mm)}I=gu.prototype=new L,I.constructor=gu,new z().i(gu,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{cN:1,cM:1});function _u(e,t,n){return e.cf=t,e.du=n,e}function vu(){this.cf=null,this.du=null}I=vu.prototype=new Ko,I.constructor=vu;function yu(){}yu.prototype=I,I.x=(function(e){return new Vd(this,e,new cm(((e,t,n)=>{xo().kB(e,t,n)})))}),new z().i(vu,`com.raquo.laminar.keys.HtmlAttr`,{aj:1,a1:1});function bu(e,t){this.hP=null,this.hO=null,this.hP=e,this.hO=t}I=bu.prototype=new Ko,I.constructor=bu,I.x=(function(e){return new Vd(this,e,new cm(((e,t,n)=>{xo().nk(e,t,n)})))}),new z().i(bu,`com.raquo.laminar.keys.HtmlProp`,{cO:1,a1:1});function xu(e,t,n){this.fY=null,this.fX=null,this.fc=null,this.fd=null,this.fY=e,this.fX=t;var r=n.d()?e_():new t_(n.aE()+`:`+e);this.fc=r.d()?e:r.aE(),this.fd=n.d()?e_():new t_(Yo().mQ(n.aE()))}I=xu.prototype=new Ko,I.constructor=xu,new z().i(xu,`com.raquo.laminar.keys.SvgAttr`,{cP:1,a1:1});function Su(){}I=Su.prototype=new L,I.constructor=Su,I.c7=(function(e){}),new z().i(Su,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cV:1,a2:1});function Cu(e,t){if(this.hV=null,this.hV=e,t===null)throw jm(new Mm)}I=Cu.prototype=new L,I.constructor=Cu,I.c7=(function(e){var t=Va(),n=(()=>{this.hV.f(e)});if(Va(),t.bM)n();else{t.bM=!0;try{n()}finally{t.bM=!1,Ra(t)}}}),new z().i(Cu,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cW:1,a2:1});function wu(){}I=wu.prototype=new L,I.constructor=wu,new z().i(wu,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cZ:1,cX:1});function Tu(){}I=Tu.prototype=new L,I.constructor=Tu,new z().i(Tu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{d1:1,d0:1});var Eu;function Du(){return Eu||=new Tu,Eu}function Ou(e,t){if(this.hX=null,this.hX=e,t===null)throw jm(new Mm)}I=Ou.prototype=new L,I.constructor=Ou,I.lt=(function(e){return this.hX.f(e)}),new z().i(Ou,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{d4:1,d2:1});function ku(e){e.jX(new Qa(new am((()=>{throw _f(new vf,`Attempting to use owner of unmounted element: `+el(xo().lM(e.dL(),(xo(),$())),``,` > `,``))}))))}function Au(e,t,n){return e.g3=t,e}function ju(){this.g3=null}I=ju.prototype=new L,I.constructor=ju;function Mu(){}Mu.prototype=I,I.h0=(function(){return this.g3}),I.ad=(function(e){var t=this.lx();return e.bK(new om((e=>{e.c7(t)}))),t}),I.lx=(function(){return new Ig(this,xo().lH(this))}),new z().i(ju,`com.raquo.laminar.tags.HtmlTag`,{aR:1,au:1});function Nu(e,t){this.i4=null,this.i4=e}I=Nu.prototype=new L,I.constructor=Nu,new z().i(Nu,`com.raquo.laminar.tags.SvgTag`,{dc:1,au:1});function Pu(){}I=Pu.prototype=new L,I.constructor=Pu,I.dI=(function(e){return e}),I.ef=(function(e){return e}),new z().i(Pu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dp:1,ai:1});function Fu(e,t){return e.dY=t,e.fy(),e}function Iu(){this.dY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dZ=!1}I=Iu.prototype=new L,I.constructor=Iu;function Lu(){}Lu.prototype=I,I.bw=(function(){return this.dU||=(this.dT=Y().l.kj(),!0),this.dT}),I.h9=(function(){return this.dW||=(this.dV=Y().l.ns(),!0),this.dV}),I.nx=(function(){return this.dZ||=(this.dX=new Ud(this.dY,new J((e=>void 0)),void 0),!0),this.dX}),I.H=(function(e,t){var n=this.nx().ad(new Q([]));return e.bK(new J((e=>{e.f(this).c7(n)}))),t.bK(new J((e=>{e.c7(n)}))),n});function Ru(){this.g4=null,zu=this,this.g4=Da(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}I=Ru.prototype=new L,I.constructor=Ru,I.lP=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=H().lw(this.g4,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.g4.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new z().i(Ru,`java.lang.Character$`,{dw:1,a:1});var zu;function Bu(){return zu||=new Ru,zu}function Vu(e){return(1&e.cJ)<<24>>24||(e.g7=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.cJ=(1|e.cJ)<<24>>24),e.g7}function Hu(e){return(1&e.cJ)<<24>>24?e.g7:Vu(e)}function Uu(e){return(2&e.cJ)<<24>>24||(e.g6=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.cJ=(2|e.cJ)<<24>>24),e.g6}function Wu(e){return(2&e.cJ)<<24>>24?e.g6:Uu(e)}function Gu(e,t){var n=Wu(e).exec(t);n===null&&Ku(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Ku(t);var s=e.n1(i,a,o,15);return r===`-`?-s:s}function Ku(e){throw new Jg(`For input string: "`+e+`"`)}function qu(){this.g7=null,this.g6=null,this.cJ=0}I=qu.prototype=new L,I.constructor=qu,I.n0=(function(e){var t=Hu(this).exec(e);return t===null?Gu(this,e):+parseFloat(t[1])}),I.n1=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Cs().ni(+parseInt(h,16),Wi(+parseInt(n,10))+g|0)}),new z().i(qu,`java.lang.Double$`,{dz:1,a:1});var Ju;function Yu(){return Ju||=new qu,Ju}function Xu(){}I=Xu.prototype=new L,I.constructor=Xu,I.eZ=(function(e){throw new Jg(`For input string: "`+e+`"`)}),I.kl=(function(e,t,n){e===null&&Qu().eZ(e);var r=e.length;r===0&&Qu().eZ(e);var i=Bu(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Qu().eZ(e);var l=0;for(l=0;c!==r;){var u=i.lP(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Qu().eZ(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Qu().eZ(e),(l^s)-s|0}),I.dg=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new z().i(Xu,`java.lang.Integer$`,{dD:1,a:1});var Zu;function Qu(){return Zu||=new Xu,Zu}function $u(){}I=$u.prototype=new L,I.constructor=$u;function ed(e){return e instanceof $u||typeof e==`number`||e instanceof Li}function td(e,t,n,r,i){this.e1=null,this.eo=null,this.e2=null,this.e3=0,this.e0=0,this.e1=e,this.eo=t,this.e2=n,this.e3=r,this.e0=i}I=td.prototype=new L,I.constructor=td,I.r=(function(e){return e instanceof td&&this.e2===e.e2&&this.e3===e.e3&&this.e0===e.e0&&this.e1===e.e1&&this.eo===e.eo}),I.B=(function(){var e=``;return this.e1!==`<jscode>`&&(e=``+e+this.e1+`.`),e=``+e+this.eo,this.e2===null?e+=`(Unknown Source)`:(e=e+`(`+this.e2,this.e3>=0&&(e=e+`:`+this.e3,this.e0>=0&&(e=e+`:`+this.e0)),e+=`)`),e}),I.w=(function(){return Yg(this.e1)^Yg(this.eo)^Yg(this.e2)^this.e3^this.e0});var nd=new z().i(td,`java.lang.StackTraceElement`,{b2:1,a:1});function rd(){}I=rd.prototype=new L,I.constructor=rd,I.mR=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Gi(e.a[a]),a=1+a|0;return i}),new z().i(rd,`java.lang.String$`,{dP:1,a:1});var id;function ad(){return id||=new rd,id}function od(e){}I=od.prototype=new L,I.constructor=od,new z().i(od,`java.lang.Thread`,{b3:1,dJ:1});function sd(e,t,n,r,i){return e.iK=t,e.iL=i,i&&e.m9(),e}var cd=class extends Error{constructor(){super(),this.iK=null,this.iL=!1,this.iJ=null,this.ff=null}eX(){return this.iK}m9(){var e=this instanceof X_?this.bH:this;return this.iJ=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}mr(){return this.ff===null&&(this.ff=this.iL?qs().m8(this.iJ):new(nd.r()).C(0)),this.ff}B(){var e=zi(this),t=this.eX();return t===null?e:e+`: `+t}w(){return sa.prototype.w.call(this)}r(e){return sa.prototype.r.call(this,e)}get message(){var e=this.eX();return e===null?``:e}get name(){return zi(this)}toString(){return this.B()}};function ld(){this.iO=null,ud=this,this.iO=new su($s().iG)}I=ld.prototype=new L,I.constructor=ld,I.mX=(function(){return this.iO.gy}),new z().i(ld,`scala.Console$`,{e7:1,g4:1});var ud;function dd(){return ud||=new ld,ud}function fd(){}I=fd.prototype=new Lc,I.constructor=fd;function pd(){}pd.prototype=I,I.nH=(function(e){if(e===null)return null;if(e.a.length===0){var t=F_();return ry(),t.jn}return new Zb(e)});function md(){}I=md.prototype=new L,I.constructor=md,new z().i(md,`scala.collection.immutable.LazyList$Uninitialized$`,{eY:1,a:1});var hd;function gd(){return hd||=new md,hd}function _d(){}I=_d.prototype=new Cl,I.constructor=_d;function vd(){}vd.prototype=I;function yd(e,t){if(t===e)e.aV(ug().kb(t));else for(var n=t.i();n.j();)e.aP(n.h());return e}function bd(){}I=bd.prototype=new L,I.constructor=bd;function xd(){}xd.prototype=I,I.B=(function(){return`<function0>`});function Sd(){}I=Sd.prototype=new L,I.constructor=Sd;function Cd(){}Cd.prototype=I,I.B=(function(){return`<function1>`});function wd(){}I=wd.prototype=new L,I.constructor=wd;function Td(){}Td.prototype=I,I.B=(function(){return`<function2>`});function Ed(){}I=Ed.prototype=new L,I.constructor=Ed;function Dd(){}Dd.prototype=I,I.B=(function(){return`<function3>`});function Od(e){this.fr=!1,this.fr=e}I=Od.prototype=new L,I.constructor=Od,I.B=(function(){return``+this.fr}),new z().i(Od,`scala.runtime.BooleanRef`,{gy:1,a:1});function kd(e){this.dD=0,this.dD=e}I=kd.prototype=new L,I.constructor=kd,I.B=(function(){return``+this.dD}),new z().i(kd,`scala.runtime.IntRef`,{gA:1,a:1});function Ad(e){this.fs=null,this.fs=e}I=Ad.prototype=new L,I.constructor=Ad,I.B=(function(){return``+this.fs}),new z().i(Ad,`scala.runtime.ObjectRef`,{gD:1,a:1});function jd(){this.ac=0,this.dc=0,this.jD=0,this.gz=0,Md=this,this.ac=Yg(`Seq`),this.dc=Yg(`Map`),this.jD=Yg(`Set`),this.gz=this.ha($(),this.dc)}I=jd.prototype=new lu,I.constructor=jd,I.c1=(function(e,t){return this.kF(G().J(e),G().J(t),-889275714)}),I.kA=(function(e){return Sy(e)?this.mx(e,this.ac):e instanceof Bb?this.mF(e,this.ac):this.mW(e,this.ac)}),I.mM=(function(e){if(e.d())return this.gz;var t=new Nd,n=this.dc;return e.dJ(t),n=this.y(n,t.fu),n=this.y(n,t.fv),n=this.cC(n,t.fw),this.aD(n,t.fx)}),new z().i(jd,`scala.util.hashing.MurmurHash3$`,{h3:1,h2:1});var Md;function q(){return Md||=new jd,Md}function Nd(){this.fu=0,this.fv=0,this.fx=0,this.fw=0,this.fu=0,this.fv=0,this.fx=0,this.fw=1}I=Nd.prototype=new L,I.constructor=Nd,I.B=(function(){return`<function2>`}),I.lr=(function(e,t){var n=q().c1(e,t);this.fu=this.fu+n|0,this.fv^=n,this.fw=Math.imul(this.fw,1|n),this.fx=1+this.fx|0}),I.cy=(function(e,t){this.lr(e,t)}),new z().i(Nd,`scala.util.hashing.MurmurHash3$accum$1`,{h4:1,aw:1});var Pd=class extends cd{};function Fd(){this.fN=null,this.hd=null,this.he=null,Id=this,this.fN=ug().jS(Yl().dq(new(Fc.r()).C([]))),this.hd=new om((e=>{try{console.error(this.mn(e)+`
`+this.mq(e,`
`))}catch(e){var t=e instanceof cd?e:new X_(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.he=new om((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X_?t.bH:t})),this.n5(this.hd)}I=Fd.prototype=new L,I.constructor=Fd,I.mn=(function(e){try{var t=e.eX()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Ri(e).gU()+`: `+t}),I.mq=(function(e,t){try{return el(Cf().nH(e.mr()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),I.n5=(function(e){this.fN.aP(e)}),I.f2=(function(e){for(var t=this.fN.i();t.j();){var n=t.h();try{n.f(e)}catch(e){var r=e instanceof cd?e:new X_(e),i=this.he;if(n===null?i===null:n.r(i))throw r instanceof X_?r.bH:r;console.warn(`Error processing an unhandled error callback:`),eu().np(0,new am((e=>(()=>{throw e instanceof X_?e.bH:e}))(r)))}}}),new z().i(Fd,`com.raquo.airstream.core.AirstreamError$`,{bX:1,g2:1,g3:1});var Id;function Ld(){return Id||=new Fd,Id}function Rd(e,t,n){return new bp(n.lt(t))}function zd(e,t,n,r){return new Cu(new om((e=>{(To(),new So(t,null,null)).bK(new om((e=>(t=>{n.f(t).c7(e)}))(e)))})),es())}function Bd(e,t){this.hR=null,this.fZ=null,this.hR=e,this.fZ=t}I=Bd.prototype=new L,I.constructor=Bd,I.c7=(function(e){this.fZ.d()||fm(e,this.hR,null,this.fZ,$())}),new z().i(Bd,`com.raquo.laminar.modifiers.CompositeKeySetter`,{cS:1,a2:1,aO:1});function Vd(e,t,n){this.hT=null,this.hU=null,this.hS=null,this.hT=e,this.hU=t,this.hS=n}I=Vd.prototype=new L,I.constructor=Vd,I.c7=(function(e){this.hS.lq(e,this.hT,this.hU)}),new z().i(Vd,`com.raquo.laminar.modifiers.KeySetter`,{cT:1,a2:1,aO:1});function Hd(e,t){if(this.g1=null,this.hZ=null,this.i0=null,this.hZ=t,ku(this),e===null)throw _f(new vf,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!xo().mC(e,document))throw _f(new vf,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.i0=e,this.mO()}I=Hd.prototype=new L,I.constructor=Hd,I.fE=(function(){return this.g1}),I.jX=(function(e){this.g1=e}),I.mO=(function(){return this.g1.jG(),cs().fA(this,this.hZ,void 0)}),I.dL=(function(){return this.i0}),new z().i(Hd,`com.raquo.laminar.nodes.RootNode`,{d8:1,at:1,aQ:1});function Ud(e,t,n){this.g3=null,this.i3=null,this.i3=e,Au(this,e,!1)}I=Ud.prototype=new Mu,I.constructor=Ud,I.h0=(function(){return this.i3}),new z().i(Ud,`com.raquo.laminar.tags.CustomHtmlTag`,{db:1,aR:1,au:1});function Wd(){this.dY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dZ=!1,this.i9=null,this.ia=!1,this.i7=null,this.i8=!1,this.i5=null,this.i6=!1,Fu(this,`wa-button`)}I=Wd.prototype=new Lu,I.constructor=Wd,I.hc=(function(){return this.ia||=(this.i9=af(),!0),this.i9}),I.fM=(function(){return this.i8||=(this.i7=Yd(),!0),this.i7}),I.jV=(function(){return this.i6||=(this.i5=bs(),!0),this.i5}),I.fy=(function(){return _n}),new z().i(Wd,`io.github.nguyenyou.webawesome.laminar.Button$`,{de:1,ao:1,an:1});var Gd;function Kd(){return Gd||=new Wd,Gd}function qd(){this.cf=null,this.du=null,this.id=null,this.ie=!1,_u(this,`size`,new Pu)}I=qd.prototype=new yu,I.constructor=qd,I.h8=(function(){return this.ie||=(this.id=Yd().x(`small`),!0),this.id}),new z().i(qd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{dg:1,aj:1,a1:1});var Jd;function Yd(){return Jd||=new qd,Jd}function Xd(){this.cf=null,this.du=null,_u(this,`placement`,new Pu)}I=Xd.prototype=new yu,I.constructor=Xd,new z().i(Xd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{dh:1,aj:1,a1:1});var Zd;function Qd(){return Zd||=new Xd,Zd}function $d(){this.cf=null,this.du=null,_u(this,`resize`,new Pu)}I=$d.prototype=new yu,I.constructor=$d,new z().i($d,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TextareaResize$`,{di:1,aj:1,a1:1});var ef;function tf(){return ef||=new $d,ef}function nf(){this.cf=null,this.du=null,this.ig=null,this.ih=!1,_u(this,`variant`,new Pu)}I=nf.prototype=new yu,I.constructor=nf,I.gE=(function(){return this.ih||=(this.ig=af().x(`brand`),!0),this.ig}),new z().i(nf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{dj:1,aj:1,a1:1});var rf;function af(){return rf||=new nf,rf}function of(){this.dY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dZ=!1,this.ik=null,this.il=!1,Fu(this,`wa-icon`)}I=of.prototype=new Lu,I.constructor=of,I.mP=(function(){return this.il||=(this.ik=(Y(),_u(new vu,`name`,Mo().ce)),!0),this.ik}),I.fy=(function(){return vn}),new z().i(of,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dl:1,ao:1,an:1});var sf;function cf(){return sf||=new of,sf}function lf(){this.dY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dZ=!1,this.it=null,this.iu=!1,this.im=null,this.io=!1,this.ip=null,this.is=!1,this.iq=null,this.ir=!1,Fu(this,`wa-popover`)}I=lf.prototype=new Lu,I.constructor=lf,I.fI=(function(){return this.iu||=(this.it=Qd(),!0),this.it}),I.k1=(function(){return this.io||=(this.im=(Y(),_u(new vu,`distance`,Mo().jF())),!0),this.im}),I.mb=(function(){return this.is||=(this.ip=(Y(),_u(new vu,`for`,Mo().ce)),!0),this.ip}),I.bm=(function(){return this.ir||=(this.iq=this.mb(),!0),this.iq}),I.fy=(function(){return Ai}),new z().i(lf,`io.github.nguyenyou.webawesome.laminar.Popover$`,{dm:1,ao:1,an:1});var uf;function df(){return uf||=new lf,uf}function ff(){this.dY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dZ=!1,this.iD=null,this.iE=!1,this.ix=null,this.iy=!1,this.iB=null,this.iC=!1,this.iz=null,this.iA=!1,this.iv=null,this.iw=!1,Fu(this,`wa-textarea`)}I=ff.prototype=new Lu,I.constructor=ff,I.fM=(function(){return this.iE||=(this.iD=Yd(),!0),this.iD}),I.n2=(function(){return this.iy||=(this.ix=(Y(),_u(new vu,`placeholder`,Mo().ce)),!0),this.ix}),I.ng=(function(){return this.iC||=(this.iB=(Y(),_u(new vu,`rows`,Mo().jF())),!0),this.iB}),I.nd=(function(){return this.iA||=(this.iz=tf(),!0),this.iz}),I.lu=(function(){return this.iw||=(this.iv=(Y(),_u(new vu,`autofocus`,Mo().hI)),!0),this.iv}),I.fy=(function(){return Fi}),new z().i(ff,`io.github.nguyenyou.webawesome.laminar.Textarea$`,{dn:1,ao:1,an:1});var pf;function mf(){return pf||=new ff,pf}function hf(e){if(e.a8.Z)return e.a8.Q().gU()+`[]`;for(var t=e.a8.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function gf(e){this.g5=null,this.a8=e}I=gf.prototype=new L,I.constructor=gf,I.B=(function(){return(this.a8.Y?`interface `:this.a8.X?``:`class `)+this.a8.N}),I.gU=(function(){return this.g5===null&&(this.g5=hf(this)),this.g5}),new z().i(gf,`java.lang.Class`,{dx:1,a:1,W:1});function _f(e,t){return sd(e,t,null,!0,!0),e}var vf=class extends cd{};new z().i(vf,`java.lang.Exception`,{H:1,B:1,a:1});function yf(){}I=yf.prototype=new L,I.constructor=yf;function bf(){}bf.prototype=I;function xf(){this.kR=null,Sf=this,Ih(),this.kR=Zf()}I=xf.prototype=new pd,I.constructor=xf,I.nb=(function(e){if(!e)throw Sm(new wm,`requirement failed`)}),new z().i(xf,`scala.Predef$`,{eg:1,e9:1,ea:1});var Sf;function Cf(){return Sf||=new xf,Sf}function wf(e,t){switch(t){case 0:return e.aZ;case 1:return e.aR;default:throw Em(new Om,t+` is out of bounds (min 0, max 1)`)}}function Tf(e,t){return e.es=t,e}function Ef(){this.es=null}I=Ef.prototype=new L,I.constructor=Ef;function Df(){}Df.prototype=I,I.as=(function(e){return this.es.gM(e,Dv())}),I.aQ=(function(){return this.es.fH(Dv())}),I.cz=(function(e){return this.es.gM(e,Dv())});function Of(e,t){return e.fi=t,e}function kf(){this.fi=null}I=kf.prototype=new L,I.constructor=kf;function Af(){}Af.prototype=I,I.as=(function(e){return this.fi.as(e)}),I.aQ=(function(){return this.fi.aQ()});function jf(e,t){if(t<0)return 1;var n=e.s();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.i();i.j();){if(r===t)return 1;i.h(),r=1+r|0}return r-t|0}function Mf(e,t){return new Qm(e).gF(t)}function Nf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Lf().P:new th(e,r,i)}function Pf(e,t){for(var n=t.i();e.j();)if(!n.j()||!W().n(e.h(),n.h()))return!1;return!n.j()}function Ff(){this.P=null,If=this,this.P=new Km}I=Ff.prototype=new L,I.constructor=Ff,I.aQ=(function(){return new l_}),I.as=(function(e){return e.i()}),new z().i(Ff,`scala.collection.Iterator$`,{es:1,a:1,I:1});var If;function Lf(){return If||=new Ff,If}function Rf(e,t){return e.gg=t,e}function zf(){this.gg=null}I=zf.prototype=new L,I.constructor=zf;function Bf(){}Bf.prototype=I,I.as=(function(e){return this.gg.as(e)});function Vf(){}I=Vf.prototype=new L,I.constructor=Vf,I.kc=(function(e){return U_(e)?e:Gm(e)?new fy(new np((e=>(()=>e.i()))(e))):Ey(new Dy,X().gO(e))}),I.aQ=(function(){return new tm(new J((e=>this.kc(e))),(og(),new sg))}),I.as=(function(e){return this.kc(e)}),new z().i(Vf,`scala.collection.View$`,{eG:1,a:1,I:1});var Hf;function Uf(){return Hf||=new Vf,Hf}function Wf(e,t,n,r,i,a){this.Q=0,this.a9=0,this.ae=null,this.be=null,this.aH=0,this.b5=0,this.Q=e,this.a9=t,this.ae=n,this.be=r,this.aH=i,this.b5=a}I=Wf.prototype=new vd,I.constructor=Wf,I.aG=(function(){return this.aH}),I.di=(function(){return this.b5}),I.dk=(function(e){return this.ae.a[e<<1]}),I.cB=(function(e){return this.ae.a[1+(e<<1)|0]}),I.kh=(function(e){return new Z(this.ae.a[e<<1],this.ae.a[1+(e<<1)|0])}),I.eW=(function(e){return this.be.a[e]}),I.cA=(function(e){return this.ae.a[(this.ae.a.length-1|0)-e|0]}),I.gC=(function(e,t,n,r){var i=Dl().dK(n,r),a=Dl().dh(i);if((this.Q&a)!==0){var o=Dl().ca(this.Q,i,a);if(W().n(e,this.dk(o)))return this.cB(o);throw new Im(`key not found: `+e)}if((this.a9&a)!==0)return this.cA(Dl().ca(this.a9,i,a)).gC(e,t,n,5+r|0);throw new Im(`key not found: `+e)}),I.gS=(function(e,t,n,r,i){var a=Dl().dK(n,r),o=Dl().dh(a);if((this.Q&o)!==0){var s=Dl().ca(this.Q,a,o);return W().n(e,this.dk(s))?this.cB(s):i.a6()}return(this.a9&o)===0?i.a6():this.cA(Dl().ca(this.a9,a,o)).gS(e,t,n,5+r|0,i)}),I.gG=(function(e,t,n,r){var i=Dl().dK(n,r),a=Dl().dh(i);if((this.Q&a)!==0){var o=Dl().ca(this.Q,i,a);return this.be.a[o]===t&&W().n(e,this.dk(o))}return(this.a9&a)!==0&&this.cA(Dl().ca(this.a9,i,a)).gG(e,t,n,5+r|0)}),I.kG=(function(e,t,n,r,i,a){var o=Dl().dK(r,i),s=Dl().dh(o);if((this.Q&s)!==0){var c=Dl().ca(this.Q,o,s),l=this.dk(c),u=this.eW(c);if(u===n&&W().n(l,e)){if(a){var d=this.cB(c);return Object.is(l,e)&&Object.is(d,t)?this:this.lG(s,e,t)}return this}var f=this.cB(c),p=Yc().bW(u);return this.lE(s,p,this.gZ(l,f,u,p,e,t,n,r,5+i|0))}if((this.a9&s)!==0){var m=Dl().ca(this.a9,o,s),h=this.cA(m),g=h.kH(e,t,n,r,5+i|0,a);return g===h?this:this.lF(s,h,g)}return this.lD(s,e,n,r,t)}),I.gZ=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new Gf(n,r,Yh().gP(new Q([new Z(e,t),new Z(i,a)])));var l=Dl().dK(r,c),u=Dl().dK(s,c),d=r+s|0;if(l!==u){var f=Dl().dh(l)|Dl().dh(u);if(l<u){for(var p=new Q([e,t,i,a]),m=new R(p.k()),h=a_(new s_,new Ny(p)),g=0;h.b3>0;)m.a[g]=h.h(),g=1+g|0;return new Wf(f,0,m,new pa(new Int32Array([n,o])),2,d)}for(var _=new Q([i,a,e,t]),v=new R(_.k()),y=a_(new s_,new Ny(_)),b=0;y.b3>0;)v.a[b]=y.h(),b=1+b|0;return new Wf(f,0,v,new pa(new Int32Array([o,n])),2,d)}for(var x=Dl().dh(l),S=this.gZ(e,t,n,r,i,a,o,s,5+c|0),C=new Q([S]),w=new R(C.k()),T=a_(new s_,new Ny(C)),ee=0;T.b3>0;)w.a[ee]=T.h(),ee=1+ee|0;return new Wf(0,x,w,Nc().gd,S.aG(),S.di())}),I.gV=(function(){return this.a9!==0}),I.h1=(function(){return Qu().dg(this.a9)}),I.fF=(function(){return this.Q!==0}),I.h3=(function(){return Qu().dg(this.Q)}),I.eT=(function(e){return Qu().dg(this.Q&(e-1|0))}),I.h2=(function(e){return Qu().dg(this.a9&(e-1|0))}),I.lG=(function(e,t,n){var r=this.eT(e)<<1,i=this.ae,a=new R(i.a.length),o=i.a.length;return i.p(0,a,0,o),a.a[1+r|0]=n,new Wf(this.Q,this.a9,a,this.be,this.aH,this.b5)}),I.lF=(function(e,t,n){var r=(this.ae.a.length-1|0)-this.h2(e)|0,i=this.ae,a=new R(i.a.length),o=i.a.length;return i.p(0,a,0,o),a.a[r]=n,new Wf(this.Q,this.a9,a,this.be,(this.aH-t.aG()|0)+n.aG()|0,(this.b5-t.di()|0)+n.di()|0)}),I.lD=(function(e,t,n,r,i){var a=this.eT(e),o=a<<1,s=this.ae,c=new R(2+s.a.length|0);s.p(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.p(o,c,l,u);var d=this.mz(this.be,a,n);return new Wf(this.Q|e,this.a9,c,d,1+this.aH|0,this.b5+r|0)}),I.mN=(function(e,t,n){var r=this.eT(e),i=r<<1,a=(this.ae.a.length-2|0)-this.h2(e)|0,o=this.ae,s=new R(o.a.length-1|0);o.p(0,s,0,i);var c=2+i|0,l=a-i|0;o.p(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.p(u,s,d,f);var p=this.kt(this.be,r);return this.Q^=e,this.a9|=e,this.ae=s,this.be=p,this.aH=(this.aH-1|0)+n.aG()|0,this.b5=(this.b5-t|0)+n.di()|0,this}),I.lE=(function(e,t,n){var r=this.eT(e),i=r<<1,a=(this.ae.a.length-2|0)-this.h2(e)|0,o=this.ae,s=new R(o.a.length-1|0);o.p(0,s,0,i);var c=2+i|0,l=a-i|0;o.p(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.p(u,s,d,f);var p=this.kt(this.be,r);return new Wf(this.Q^e,this.a9|e,s,p,(this.aH-1|0)+n.aG()|0,(this.b5-t|0)+n.di()|0)}),I.dJ=(function(e){for(var t=Qu().dg(this.Q),n=0;n<t;)e.cy(this.dk(n),this.cB(n)),n=1+n|0;for(var r=Qu().dg(this.a9),i=0;i<r;)this.cA(i).dJ(e),i=1+i|0}),I.r=(function(e){if(e instanceof Wf){if(this===e)return!0;if(this.b5===e.b5&&this.a9===e.a9&&this.Q===e.Q&&this.aH===e.aH&&H().gI(this.be,e.be)){var t=this.ae,n=e.ae,r=this.ae.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=W().n(t.a[a],n.a[a]),a=1+a|0;return i}return!1}return!1}),I.w=(function(){throw new Pm(`Trie nodes do not support hashing.`)}),I.B=(function(){var e=Xi(this);return zi(this)+`@`+(e>>>0).toString(16)}),I.jY=(function(){for(var e=this.ae.c(),t=e.a.length,n=Qu().dg(this.Q)<<1;n<t;)e.a[n]=e.a[n].jZ(),n=1+n|0;return new Wf(this.Q,this.a9,e,this.be.c(),this.aH,this.b5)}),I.gR=(function(e){return this.cA(e)}),I.kH=(function(e,t,n,r,i,a){return this.kG(e,t,n,r,i,a)}),I.jZ=(function(){return this.jY()}),new z().i(Wf,`scala.collection.immutable.BitmapIndexedMapNode`,{bs:1,bB:1,aF:1});function Gf(e,t,n){this.gj=0,this.cU=0,this.aa=null,this.gj=e,this.cU=t,this.aa=n,Cf().nb(this.aa.k()>=2)}I=Gf.prototype=new vd,I.constructor=Gf,I.eh=(function(e){for(var t=this.aa.i(),n=0;t.j();){if(W().n(t.h().aZ,e))return n;n=1+n|0}return-1}),I.aG=(function(){return this.aa.k()}),I.gC=(function(e,t,n,r){var i=this.ml(e,t,n,r);return i.d()?Lf().P.h():i.aE()}),I.ml=(function(e,t,n,r){if(this.cU===n){var i=this.eh(e);return i>=0?new t_(this.aa.q(i).aR):e_()}return e_()}),I.gS=(function(e,t,n,r,i){if(this.cU===n){var a=this.eh(e);return a===-1?i.a6():this.aa.q(a).aR}return i.a6()}),I.gG=(function(e,t,n,r){return this.cU===n&&this.eh(e)>=0}),I.kH=(function(e,t,n,r,i,a){var o=this.eh(e);return o>=0?a?Object.is(this.aa.q(o).aR,t)?this:new Gf(n,r,this.aa.dn(o,new Z(e,t))):this:new Gf(n,r,this.aa.de(new Z(e,t)))}),I.gV=(function(){return!1}),I.h1=(function(){return 0}),I.cA=(function(e){throw Em(new Om,`No sub-nodes present in hash-collision leaf node.`)}),I.fF=(function(){return!0}),I.h3=(function(){return this.aa.k()}),I.dk=(function(e){return this.aa.q(e).aZ}),I.cB=(function(e){return this.aa.q(e).aR}),I.kh=(function(e){return this.aa.q(e)}),I.eW=(function(e){return this.gj}),I.dJ=(function(e){this.aa.bK(new J((t=>{var n=t.aZ,r=t.aR;return e.cy(n,r)})))}),I.r=(function(e){if(e instanceof Gf){if(this===e)return!0;if(this.cU===e.cU&&this.aa.k()===e.aa.k()){for(var t=this.aa.i();t.j();){var n=t.h(),r=n.aZ,i=n.aR,a=e.eh(r);if(a<0||!W().n(i,e.aa.q(a).aR))return!1}return!0}return!1}return!1}),I.w=(function(){throw new Pm(`Trie nodes do not support hashing.`)}),I.B=(function(){var e=Xi(this);return zi(this)+`@`+(e>>>0).toString(16)}),I.di=(function(){return Math.imul(this.aa.k(),this.cU)}),I.gR=(function(e){return this.cA(e)}),I.jZ=(function(){return new Gf(this.gj,this.cU,this.aa)}),new z().i(Gf,`scala.collection.immutable.HashCollisionMapNode`,{bu:1,bB:1,aF:1});function Kf(){this.fn=null,qf=this,this.fn=new nb(bl().je)}I=Kf.prototype=new L,I.constructor=Kf,I.mg=(function(e){return e instanceof nb?e:e.s()===0?this.fn:new jh().gB(e).h7()}),I.as=(function(e){return this.mg(e)}),new z().i(Kf,`scala.collection.immutable.HashMap$`,{eN:1,a:1,az:1});var qf;function Jf(){return qf||=new Kf,qf}function Yf(){}I=Yf.prototype=new L,I.constructor=Yf,I.mi=(function(e){return y_(e)&&e.d()?Yy():e instanceof nb||e instanceof Xy||e instanceof Zy||e instanceof Qy||e instanceof $y?e:new Kh().jH(e).ku()}),I.as=(function(e){return this.mi(e)}),new z().i(Yf,`scala.collection.immutable.Map$`,{f4:1,a:1,az:1});var Xf;function Zf(){return Xf||=new Yf,Xf}function Qf(e,t,n){var r=t.s();if(r!==-1){var i=r+n|0;e.aX(i<0?0:i)}}function $f(){}I=$f.prototype=new L,I.constructor=$f,I.mj=(function(e){var t=e.s();return pb(new bb,t>0?Wi((1+t|0)/.75):16,.75).jK(e)}),I.aQ=(function(){return new dg(16,.75)}),I.as=(function(e){return this.mj(e)}),new z().i($f,`scala.collection.mutable.HashSet$`,{fN:1,a:1,I:1});var ep;function tp(){return ep||=new $f,ep}function np(e){this.ju=null,this.ju=e}I=np.prototype=new xd,I.constructor=np,I.a6=(function(){return(0,this.ju)()}),new z().i(np,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{gu:1,bR:1,ap:1});function J(e){this.jv=null,this.jv=e}I=J.prototype=new Cd,I.constructor=J,I.f=(function(e){return(0,this.jv)(e)}),new z().i(J,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{gv:1,bS:1,f:1});function rp(e){this.jw=null,this.jw=e}I=rp.prototype=new Td,I.constructor=rp,I.cy=(function(e,t){return(0,this.jw)(e,t)}),new z().i(rp,`scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8`,{gw:1,bT:1,aw:1});var ip=new z().i(0,`scala.runtime.Nothing$`,{gB:1,B:1,a:1});function ap(){}I=ap.prototype=new L,I.constructor=ap,I.mk=(function(e){return(t=>e.f(t))}),new z().i(ap,`scala.scalajs.js.Any$`,{gI:1,gJ:1,gK:1});var op;function sp(){return op||=new ap,op}function cp(){}I=cp.prototype=new xd,I.constructor=cp;function lp(){}lp.prototype=I;function up(){}I=up.prototype=new Cd,I.constructor=up;function dp(){}dp.prototype=I;function fp(){}I=fp.prototype=new Td,I.constructor=fp;function pp(){}pp.prototype=I;function mp(){}I=mp.prototype=new Dd,I.constructor=mp;function hp(){}hp.prototype=I;function gp(e,t,n,r){if(this.hf=null,r===null)throw jm(new Mm);this.hf=void 0}I=gp.prototype=new L,I.constructor=gp,I.B=(function(){return ka(this)}),new z().i(gp,`com.raquo.airstream.core.Observer$$anon$8`,{c1:1,c2:1,bY:1,bZ:1});function _p(e){if(this.hr=null,this.hs=!1,this.kJ=null,e===null)throw jm(new Mm);Io(this)}I=_p.prototype=new L,I.constructor=_p,I.nw=(function(){return this.hs||=(this.hr=new Nu(`svg`,!1),!0),this.hr}),new z().i(_p,`com.raquo.laminar.api.Laminar$svg$`,{cl:1,cC:1,cv:1,cx:1});function vp(){this.l=null,yp=this,this.l=new ky}I=vp.prototype=new L,I.constructor=vp,new z().i(vp,`com.raquo.laminar.api.package$`,{co:1,aM:1,aN:1,aL:1});var yp;function Y(){return yp||=new vp,yp}function bp(e){this.i2=null,this.g2=null,this.i2=e_(),this.g2=xo().lJ(e)}I=bp.prototype=new L,I.constructor=bp,I.kC=(function(e){this.i2=e}),I.kI=(function(e){}),I.c7=(function(e){cs().fA(e,this,void 0)}),I.nz=(function(){return this.g2.data}),I.dL=(function(){return this.g2}),new z().i(bp,`com.raquo.laminar.nodes.TextNode`,{da:1,at:1,a2:1,aP:1});function xp(){}I=xp.prototype=new L,I.constructor=xp;function Sp(){}Sp.prototype=I;function Cp(e,t){return e===t}function wp(e){return e?1231:1237}var Tp=new z().i(0,`java.lang.Boolean`,{du:1,a:1,Z:1,W:1},(e=>typeof e==`boolean`));function Ep(e){return e}function Dp(e,t){return t instanceof Ii&&e===t.c}var Op=new z().i(0,`java.lang.Character`,{aX:1,a:1,Z:1,W:1},(e=>e instanceof Ii));function kp(e,t){return sd(e,t,null,!0,!0),e}var Ap=class extends vf{};new z().i(Ap,`java.lang.RuntimeException`,{P:1,H:1,B:1,a:1});function jp(e){return e.m=``,e}function Mp(e,t){return jp(e),e.m=t,e}function Np(){this.m=null}I=Np.prototype=new L,I.constructor=Np,I.jN=(function(e){var t=ad().mR(e,0,e.a.length);return this.m=``+this.m+t,this}),I.B=(function(){return this.m}),I.k=(function(){return this.m.length}),I.jT=(function(e){return this.m.charCodeAt(e)}),new z().i(Np,`java.lang.StringBuilder`,{dQ:1,av:1,aV:1,a:1});function Pp(){}I=Pp.prototype=new bf,I.constructor=Pp;function Fp(){}Fp.prototype=I;function Ip(){}I=Ip.prototype=new L,I.constructor=Ip,I.B=(function(){return`<function1>`}),I.gD=(function(e){throw new zm(e)}),I.f=(function(e){this.gD(e)}),new z().i(Ip,`scala.PartialFunction$$anon$1`,{ef:1,f:1,j:1,a:1});function Lp(){}I=Lp.prototype=new L,I.constructor=Lp;function Rp(){}Rp.prototype=I,I.s=(function(){return-1}),I.bu=(function(e,t,n){return $c(this,e,t,n)}),I.dd=(function(e,t,n,r){return tl(this,e,t,n,r)}),I.i=(function(){return this}),I.gF=(function(e){return Mf(this,e)}),I.dj=(function(e){return this.f3(e,-1)}),I.f3=(function(e,t){return Nf(this,e,t)}),I.B=(function(){return`<iterator>`});function zp(){this.gg=null,this.j2=null,this.j3=null,Rf(this,Zf()),Bp=this,this.j2=oa(new sa),this.j3=new np((()=>this.j2))}I=zp.prototype=new Bf,I.constructor=zp,new z().i(zp,`scala.collection.Map$`,{eA:1,eB:1,a:1,az:1});var Bp;function Vp(){return Bp||=new zp,Bp}function Hp(e,t){return e.e4=t,e}function Up(){this.e4=null}I=Up.prototype=new L,I.constructor=Up;function Wp(){}Wp.prototype=I,I.jS=(function(e){return this.e4.cz(e)}),I.kb=(function(e){return this.e4.as(e)}),I.aQ=(function(){return this.e4.aQ()}),I.cz=(function(e){return this.jS(e)}),I.as=(function(e){return this.kb(e)});function Gp(e){return e.c9(new J((e=>e)))}function Kp(e,t){return e.eU(new py(e,t))}function qp(e){return e.bn(0)===0}function Jp(e,t){var n=e.s();if(n!==-1){var r=t.s();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Pf(e.i(),t)}function Yp(e,t){for(var n=e.ba().aQ(),r=e.i();r.j();)n.aP(t.f(r.h()));return n.aW()}function Xp(){this.fi=null,Of(this,Ih())}I=Xp.prototype=new Af,I.constructor=Xp,I.mh=(function(e){return y_(e)?e:kf.prototype.as.call(this,e)}),I.as=(function(e){return this.mh(e)}),new z().i(Xp,`scala.collection.immutable.Iterable$`,{eS:1,er:1,a:1,I:1});var Zp;function Qp(){return Zp||=new Xp,Zp}function $p(){this.L=null,this.ja=null,this.jb=!1,em=this,this.L=rb(new ub,hl())}I=$p.prototype=new L,I.constructor=$p,I.cz=(function(e){return this.gO(e)}),I.kw=(function(){return this.jb||=(this.ja=new _l,!0),this.ja}),I.nh=(function(e,t){return rb(new ub,new np(((e,t)=>(()=>{for(var n=e.fs,r=t.dD;r>0&&ob(n)!==X().L;)n=n.aY(),e.fs=n,r=r-1|0,t.dD=r;return n}))(new Ad(e),new kd(t))))}),I.gO=(function(e){return e instanceof ub?e:e.s()===0?this.L:rb(new ub,new np((()=>this.kx(e.i()))))}),I.ky=(function(e,t){return e.j()?ib(new ub,e.h(),rb(new ub,new np((()=>this.ky(e,t))))):t.a6()}),I.kx=(function(e){return e.j()?ib(new ub,e.h(),rb(new ub,new np((()=>this.kx(e))))):this.L}),I.aQ=(function(){return new Mh}),I.as=(function(e){return this.gO(e)}),new z().i($p,`scala.collection.immutable.LazyList$`,{eT:1,a:1,I:1,Y:1});var em;function X(){return em||=new $p,em}function tm(e,t){if(this.jo=null,this.eD=null,this.jo=e,t===null)throw jm(new Mm);this.eD=t}I=tm.prototype=new L,I.constructor=tm,I.li=(function(e){return this.eD.aP(e),this}),I.l9=(function(e){return this.eD.aV(e),this}),I.aX=(function(e){this.eD.aX(e)}),I.aW=(function(){return this.jo.f(this.eD.aW())}),I.aP=(function(e){return this.li(e)}),I.aV=(function(e){return this.l9(e)}),new z().i(tm,`scala.collection.mutable.Builder$$anon$1`,{fK:1,D:1,F:1,K:1});function nm(e,t){return e.d8=t,e}function rm(){this.d8=null}I=rm.prototype=new L,I.constructor=rm;function im(){}im.prototype=I,I.aX=(function(e){}),I.lj=(function(e){return this.d8.aP(e),this}),I.la=(function(e){return this.d8.aV(e),this}),I.aW=(function(){return this.d8}),I.aP=(function(e){return this.lj(e)}),I.aV=(function(e){return this.la(e)}),new z().i(rm,`scala.collection.mutable.GrowableBuilder`,{aI:1,D:1,F:1,K:1});function am(e){this.jz=null,this.jz=e}I=am.prototype=new lp,I.constructor=am,I.a6=(function(){return(0,this.jz)()}),new z().i(am,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{gP:1,gO:1,bR:1,ap:1});function om(e){this.jA=null,this.jA=e}I=om.prototype=new dp,I.constructor=om,I.f=(function(e){return(0,this.jA)(e)}),new z().i(om,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{gR:1,gQ:1,bS:1,f:1});function sm(e){this.jB=null,this.jB=e}I=sm.prototype=new pp,I.constructor=sm,I.cy=(function(e,t){return(0,this.jB)(e,t)}),new z().i(sm,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{gT:1,gS:1,bT:1,aw:1});function cm(e){this.jC=null,this.jC=e}I=cm.prototype=new hp,I.constructor=cm,I.lq=(function(e,t,n){return(0,this.jC)(e,t,n)}),new z().i(cm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{gV:1,gU:1,gx:1,e8:1});function lm(e,t){this.fb=null,this.fU=null,this.fb=e,this.fU=t}I=lm.prototype=new L,I.constructor=lm,I.c7=(function(e){var t=this.fU;t!==void 0&&t.kr(e,this.fb),cs().fA(e,this.fb,void 0)}),I.nF=(function(e){return new lm(this.fb,e.lp(this.fU))});var um=new z().i(lm,`com.raquo.laminar.inserters.StaticChildInserter`,{cG:1,a2:1,cE:1,cI:1,cD:1});function dm(e){e.g0=new fo(new am((()=>{e.dS.jG()})),new am((()=>{e.dS.lK()}))),e.em=Yy()}function fm(e,t,n,r,i){var a=e.em.dl(t,new am((()=>$()))),o=(e=>{for(var t=a;!t.d();){var r=t.u(),i=r.aZ;if(i===null?e===null:Bi(i,e)){var o=r.aR;if(o===null?n===null:Bi(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.o()}return!1}),s=Gp(r);_return$1:{for(var c,l=i;;)if(l.d()){var c=$();break}else{var u=l.u(),d=l.o();if(o(u)){l=d;continue}for(var f=l,p=d;;)if(p.d()){var c=f;break _return$1}else{if(!o(p.u())){p=p.o();continue}for(var m=p,h=new ix(f.u(),$()),g=f.o(),_=h;g!==m;){var v=new ix(g.u(),$());_.an=v,_=v,g=g.o()}for(var y=m.o(),b=y;!y.d();)if(!o(y.u()))y=y.o();else{for(;b!==y;){var x=new ix(b.u(),$());_.an=x,_=x,b=b.o()}b=y.o(),y=y.o()}b.d()||(_.an=b);var c=h;break _return$1}}}var S=e.em.dl(t,new am((()=>$()))),C=(e=>c.bV(e.aZ));_return$3:{for(var w,T=S;;)if(T.d()){var w=$();break}else{var ee=T.u(),te=T.o();if(C(ee)){T=te;continue}for(var ne=T,E=te;;)if(E.d()){var w=ne;break _return$3}else{if(!C(E.u())){E=E.o();continue}for(var re=E,ie=new ix(ne.u(),$()),ae=ne.o(),oe=ie;ae!==re;){var se=new ix(ae.u(),$());oe.an=se,oe=se,ae=ae.o()}for(var D=re.o(),ce=D;!D.d();)if(!C(D.u()))D=D.o();else{for(;ce!==D;){var O=new ix(ce.u(),$());oe.an=O,oe=O,ce=ce.o()}ce=D.o(),D=D.o()}ce.d()||(oe.an=ce);var w=ie;break _return$3}}}var le=(e=>new Z(e,n));if(s===$())var ue=$();else{for(var de=new ix(le(s.u()),$()),fe=de,pe=s.o();pe!==$();){var me=new ix(le(pe.u()),$());fe.an=me,fe=me,pe=pe.o()}var ue=de}var he=w.jP(ue),ge=t.fV.k0(t.hL.f(e)),_e=(e=>c.bV(e));_return$5:{for(var ve,ye=ge;;)if(ye.d()){var ve=$();break}else{var be=ye.u(),xe=ye.o();if(_e(be)){ye=xe;continue}for(var Se=ye,Ce=xe;;)if(Ce.d()){var ve=Se;break _return$5}else{if(!_e(Ce.u())){Ce=Ce.o();continue}for(var we=Ce,Te=new ix(Se.u(),$()),Ee=Se.o(),De=Te;Ee!==we;){var Oe=new ix(Ee.u(),$());De.an=Oe,De=Oe,Ee=Ee.o()}for(var k=we.o(),A=k;!k.d();)if(!_e(k.u()))k=k.o();else{for(;A!==k;){var j=new ix(A.u(),$());De.an=j,De=j,A=A.o()}A=k.o(),k=k.o()}A.d()||(De.an=A);var ve=Te;break _return$5}}}_return$7:{for(var ke,Ae=s;;)if(Ae.d()){var ke=$();break}else{var je=Ae.u(),Me=Ae.o();if(o(je)){Ae=Me;continue}for(var Ne=Ae,Pe=Me;;)if(Pe.d()){var ke=Ne;break _return$7}else{if(!o(Pe.u())){Pe=Pe.o();continue}for(var Fe=Pe,Ie=new ix(Ne.u(),$()),Le=Ne.o(),Re=Ie;Le!==Fe;){var ze=new ix(Le.u(),$());Re.an=ze,Re=ze,Le=Le.o()}for(var Be=Fe.o(),Ve=Be;!Be.d();)if(!o(Be.u()))Be=Be.o();else{for(;Ve!==Be;){var He=new ix(Ve.u(),$());Re.an=He,Re=He,Ve=Ve.o()}Ve=Be.o(),Be=Be.o()}Ve.d()||(Re.an=Ve);var ke=Ie;break _return$7}}}var Ue=ve.jP(ke);e.em=e.em.dp(t,he),t.hN.cy(e,t.fV.k3(Ue))}function pm(e,t){hm(e,e.fe,t)&&gm(e,t)}function mm(e,t){var n=e.fe;e.fe=t,hm(e,n,t)||gm(e,t)}function hm(e,t,n){var r=!t.d()&&!t.aE().fE().bp.d(),i=!n.d()&&!n.aE().fE().bp.d();return r&&!i}function gm(e,t){_m(e,t.d()?e_():new t_(t.aE().fE()))}function _m(e,t){if(t.d())e.g0.lB();else{var n=t.aE();e.g0.nm(n)}}function vm(){}I=vm.prototype=new Sp,I.constructor=vm;function ym(){}ym.prototype=I;var bm=class extends Ap{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(bm,`java.lang.ArithmeticException`,{ds:1,P:1,H:1,B:1,a:1});var xm=new z().i(0,`java.lang.Byte`,{dv:1,a7:1,a:1,Z:1,W:1},(e=>Zi(e)));function Sm(e,t){return sd(e,t,null,!0,!0),e}function Cm(e){return sd(e,null,null,!0,!0),e}var wm=class extends Ap{};new z().i(wm,`java.lang.IllegalArgumentException`,{aZ:1,P:1,H:1,B:1,a:1});var Tm=class extends Ap{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(Tm,`java.lang.IllegalStateException`,{dB:1,P:1,H:1,B:1,a:1});function Em(e,t){return sd(e,t,null,!0,!0),e}function Dm(e,t){return sd(e,`Index out of range: `+t,null,!0,!0),e}var Om=class extends Ap{};new z().i(Om,`java.lang.IndexOutOfBoundsException`,{b0:1,P:1,H:1,B:1,a:1});function km(){}I=km.prototype=new Sp,I.constructor=km,new z().i(km,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dF:1,aU:1,aS:1,aW:1,aT:1});function Am(e,t){return sd(e,t,null,!0,!0),e}function jm(e){return sd(e,null,null,!0,!0),e}var Mm=class extends Ap{};new z().i(Mm,`java.lang.NullPointerException`,{dH:1,P:1,H:1,B:1,a:1});var Nm=new z().i(0,`java.lang.Short`,{dL:1,a7:1,a:1,Z:1,W:1},(e=>Qi(e))),Pm=class extends Ap{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(Pm,`java.lang.UnsupportedOperationException`,{dU:1,P:1,H:1,B:1,a:1});var Fm=class extends Ap{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(Fm,`java.util.ConcurrentModificationException`,{dY:1,P:1,H:1,B:1,a:1});var Im=class extends Ap{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(Im,`java.util.NoSuchElementException`,{dZ:1,P:1,H:1,B:1,a:1});function Lm(){}I=Lm.prototype=new Fp,I.constructor=Lm,I.f=(function(e){return e}),I.B=(function(){return`generalized constraint`}),new z().i(Lm,`scala.$less$colon$less$$anon$1`,{e4:1,e1:1,e2:1,f:1,a:1});function Rm(e){if(!e.iQ){if(e.fg===null)var t=`null`;else{var n=Yl().lm(e.fg),r=n===null?`of a JS class`:`of class `+n.a8.N;try{var t=e.fg+` (`+r+`)`}catch{var t=`an instance `+r}}e.iP=t,e.iQ=!0}return e.iP}var zm=class extends Ap{constructor(e){super(),this.fg=null,this.iP=null,this.iQ=!1,this.fg=e,sd(this,null,null,!0,!0)}eX(){return Rm(this)}};new z().i(zm,`scala.MatchError`,{eb:1,P:1,H:1,B:1,a:1});function Bm(){}I=Bm.prototype=new L,I.constructor=Bm;function Vm(){}Vm.prototype=I,I.ei=(function(){return new Hm(this)}),I.d=(function(){return this===e_()}),I.s=(function(){return!this.d()|0}),I.i=(function(){return this.d()?Lf().P:new qm(this.aE())});function Hm(e){if(this.ep=0,this.iU=0,this.iT=null,e===null)throw jm(new Mm);this.iT=e,this.ep=0,this.iU=e.cD()}I=Hm.prototype=new Rp,I.constructor=Hm,I.j=(function(){return this.ep<this.iU}),I.h=(function(){var e=this.iT.cE(this.ep);return this.ep=1+this.ep|0,e}),new z().i(Hm,`scala.Product$$anon$1`,{eh:1,s:1,b:1,c:1,t:1});function Z(e,t){this.aZ=null,this.aR=null,this.aZ=e,this.aR=t}I=Z.prototype=new L,I.constructor=Z,I.cD=(function(){return 2}),I.cE=(function(e){return wf(this,e)}),I.B=(function(){return`(`+this.aZ+`,`+this.aR+`)`}),I.cF=(function(){return`Tuple2`}),I.ei=(function(){return new Og(this)}),I.w=(function(){return q().h5(this,-116390334,!0)}),I.r=(function(e){return this===e||e instanceof Z&&W().n(this.aZ,e.aZ)&&W().n(this.aR,e.aR)}),new z().i(Z,`scala.Tuple2`,{b7:1,ei:1,a8:1,d:1,a:1});function Um(e){this.es=null,Tf(this,e)}I=Um.prototype=new Df,I.constructor=Um,new z().i(Um,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eo:1,en:1,a:1,I:1,Y:1});function Wm(e){return el(e,e.bJ()+`(`,`, `,`)`)}function Gm(e){return!!(e&&e.$classData&&e.$classData.n.e)}function Km(){}I=Km.prototype=new Rp,I.constructor=Km,I.j=(function(){return!1}),I.mS=(function(){throw new Im(`next on empty iterator`)}),I.s=(function(){return 0}),I.h=(function(){this.mS()}),I.f3=(function(e,t){return this}),new z().i(Km,`scala.collection.Iterator$$anon$19`,{et:1,s:1,b:1,c:1,t:1});function qm(e){this.iW=null,this.et=!1,this.iW=e,this.et=!1}I=qm.prototype=new Rp,I.constructor=qm,I.j=(function(){return!this.et}),I.h=(function(){return this.et?Lf().P.h():(this.et=!0,this.iW)}),I.f3=(function(e,t){return this.et||e>0||t===0?Lf().P:this}),new z().i(qm,`scala.collection.Iterator$$anon$20`,{eu:1,s:1,b:1,c:1,t:1});function Jm(e,t){if(this.iX=null,this.iZ=null,this.fj=!1,this.iY=null,this.gf=null,this.iX=e,t===null)throw jm(new Mm);this.gf=t,this.iZ=mb(new bb),this.fj=!1}I=Jm.prototype=new Rp,I.constructor=Jm,I.j=(function(){for(;;)if(this.fj)return!0;else if(this.gf.j()){var e=this.gf.h();if(!this.iZ.fz(this.iX.f(e)))continue;return this.iY=e,this.fj=!0,!0}else return!1}),I.h=(function(){return this.j()?(this.fj=!1,this.iY):Lf().P.h()}),new z().i(Jm,`scala.collection.Iterator$$anon$8`,{ew:1,s:1,b:1,c:1,t:1});function Ym(e,t){if(this.j0=null,this.fk=null,this.j0=e,t===null)throw jm(new Mm);this.fk=t}I=Ym.prototype=new Rp,I.constructor=Ym,I.s=(function(){return this.fk.s()}),I.j=(function(){return this.fk.j()}),I.h=(function(){return this.j0.f(this.fk.h())}),new z().i(Ym,`scala.collection.Iterator$$anon$9`,{ex:1,s:1,b:1,c:1,t:1});function Xm(e){for(;;)if(e.bd instanceof Qm){var t=e.bd;if(e.bd=t.bd,e.cK=t.cK,t.bz!==null){e.by===null&&(e.by=t.by);var n=t.by;n===null&&Kl().bZ(),n.eu=e.bz,e.bz=t.bz}}else return}function Zm(e){for(;;)if(e.bz===null)return e.bd=null,e.by=null,!1;else{if(e.bd=e.bz.mv(),e.by===e.bz){var t=e.by;t===null&&Kl().bZ(),e.by=t.eu}if(e.bz=e.bz.eu,Xm(e),e.cK)return!0;if(!(e.bd!==null&&e.bd.j()))continue;return e.cK=!0,!0}}function Qm(e){this.bd=null,this.bz=null,this.by=null,this.cK=!1,this.bd=e,this.bz=null,this.by=null,this.cK=!1}I=Qm.prototype=new Rp,I.constructor=Qm,I.j=(function(){return this.cK?!0:this.bd===null?!1:this.bd.j()?(this.cK=!0,!0):Zm(this)}),I.h=(function(){if(this.j()){this.cK=!1;var e=this.bd;return e===null&&Kl().bZ(),e.h()}return Lf().P.h()}),I.gF=(function(e){var t=new rl(e,null);if(this.bz===null)this.bz=t,this.by=t;else{var n=this.by;n===null&&Kl().bZ(),n.eu=t,this.by=t}return this.bd===null&&(this.bd=Lf().P),this}),new z().i(Qm,`scala.collection.Iterator$ConcatIterator`,{bd:1,s:1,b:1,c:1,t:1});function $m(e){for(;e.cj>0;)e.cL.j()?(e.cL.h(),e.cj=e.cj-1|0):e.cj=0}function eh(e,t){if(e.bq<0)return-1;var n=e.bq-t|0;return n<0?0:n}function th(e,t,n){this.cL=null,this.bq=0,this.cj=0,this.cL=e,this.bq=n,this.cj=t}I=th.prototype=new Rp,I.constructor=th,I.s=(function(){var e=this.cL.s();if(e<0)return-1;var t=e-this.cj|0,n=t<0?0:t;if(this.bq<0)return n;var r=this.bq;return r<n?r:n}),I.j=(function(){return $m(this),this.bq!==0&&this.cL.j()}),I.h=(function(){return $m(this),this.bq>0?(this.bq=this.bq-1|0,this.cL.h()):this.bq<0?this.cL.h():Lf().P.h()}),I.f3=(function(e,t){var n=e>0?e:0;if(t<0)var r=eh(this,n);else if(t<=n)var r=0;else if(this.bq<0)var r=t-n|0;else var i=eh(this,n),a=t-n|0,r=i<a?i:a;var o=this.cj+n|0;return r===0?Lf().P:o<0?(this.cj=2147483647,this.bq=0,Mf(this,new np((()=>new th(this.cL,o-2147483647|0,r))))):(this.cj=o,this.bq=r,this)}),new z().i(th,`scala.collection.Iterator$SliceIterator`,{ez:1,s:1,b:1,c:1,t:1});function nh(e){for(var t=e,n=0;!t.d();)n=1+n|0,t=t.o();return n}function rh(e,t){return t<0?1:oh(e,t,0,e)}function ih(e,t){if(t<0)throw Em(new Om,``+t);var n=e.k2(t);if(n.d())throw Em(new Om,``+t);return n.u()}function ah(e,t){return Cy(t)?sh(e,e,t):Jp(e,t)}function oh(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.o();a=o,i=s;continue}return-1}}function sh(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.d()&&!r.d()&&W().n(i.u(),r.u())){var a=i.o(),o=r.o();i=a,r=o;continue}return i.d()&&r.d()}}function ch(e){if(this.ev=null,e===null)throw jm(new Mm);this.ev=e}I=ch.prototype=new Rp,I.constructor=ch,I.j=(function(){return!this.ev.d()}),I.h=(function(){var e=this.ev.u();return this.ev=this.ev.o(),e}),new z().i(ch,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eD:1,s:1,b:1,c:1,t:1});function lh(e){return e.br=0,e.ew=0,e.bf=-1,e}function uh(e){e.cl===null&&(e.cl=new pa(Dl().eC<<1),e.ex=new(wl.r()).C(Dl().eC))}function dh(e,t){return lh(e),t.gV()&&ph(e,t),t.fF()&&fh(e,t),e}function fh(e,t){e.dx=t,e.br=0,e.ew=t.h3()}function ph(e,t){uh(e),e.bf=1+e.bf|0;var n=e.bf<<1,r=1+(e.bf<<1)|0;e.ex.a[e.bf]=t,e.cl.a[n]=0,e.cl.a[r]=t.h1()}function mh(e){e.bf=e.bf-1|0}function hh(e){for(;e.bf>=0;){var t=e.bf<<1,n=1+(e.bf<<1)|0,r=e.cl.a[t];if(r<e.cl.a[n]){var i=e.cl;i.a[t]=1+i.a[t]|0;var a=e.ex.a[e.bf].gR(r);if(a.gV()&&ph(e,a),a.fF())return fh(e,a),!0}else mh(e)}return!1}function gh(){this.br=0,this.ew=0,this.dx=null,this.bf=0,this.cl=null,this.ex=null}I=gh.prototype=new Rp,I.constructor=gh;function _h(){}_h.prototype=I,I.j=(function(){return this.br<this.ew||hh(this)});function vh(e){return e.cT=-1,e.bs=-1,e.ey=new pa(1+Dl().eC|0),e.ez=new(wl.r()).C(1+Dl().eC|0),e}function yh(e,t){return vh(e),xh(e,t),Ch(e),e}function bh(e,t){e.fm=t,e.cT=t.h3()-1|0}function xh(e,t){e.bs=1+e.bs|0,e.ez.a[e.bs]=t,e.ey.a[e.bs]=t.h1()-1|0}function Sh(e){e.bs=e.bs-1|0}function Ch(e){for(;e.bs>=0;){var t=e.ey.a[e.bs];if(e.ey.a[e.bs]=t-1|0,t>=0)xh(e,e.ez.a[e.bs].gR(t));else{var n=e.ez.a[e.bs];if(Sh(e),n.fF())return bh(e,n),!0}}return!1}function wh(){this.cT=0,this.fm=null,this.bs=0,this.ey=null,this.ez=null}I=wh.prototype=new Rp,I.constructor=wh;function Th(){}Th.prototype=I,I.j=(function(){return this.cT>=0||Ch(this)});function Eh(e){return e.e5!==null}function Dh(e,t,n,r){if(n<0||n>t.a.length)throw Rg(new zg);var i=new pa(1+t.a.length|0);t.p(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.p(n,i,a,o),i}function Oh(e,t,n,r,i,a,o){var s=t.eT(n),c=s<<1,l=t.ae,u=new R(2+l.a.length|0);l.p(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.p(c,u,d,f);var p=Dh(e,t.be,s,i);t.Q|=n,t.ae=u,t.be=p,t.aH=1+t.aH|0,t.b5=t.b5+a|0}function kh(e){Eh(e)&&Ah(e),e.e5=null}function Ah(e){e.c3=e.c3.jY()}function jh(){this.e5=null,this.c3=null,this.c3=new Wf(0,0,Nc().iN,Nc().gd,0,0)}I=jh.prototype=new L,I.constructor=jh,I.aX=(function(e){}),I.ek=(function(e,t,n,r,i,a){if(e instanceof Wf){var o=Dl().dK(i,a),s=Dl().dh(o);if((e.Q&s)!==0){var c=Dl().ca(e.Q,o,s),l=e.dk(c),u=e.eW(c);if(u===r&&W().n(l,t)){e.ae.a[1+(c<<1)|0]=n;return}var d=e.cB(c),f=Yc().bW(u),p=e.gZ(l,d,u,f,t,n,r,i,5+a|0);e.mN(s,f,p);return}if((e.a9&s)!==0){var m=Dl().ca(e.a9,o,s),h=e.cA(m),g=h.aG(),_=h.di();this.ek(h,t,n,r,i,5+a|0),e.aH=e.aH+(h.aG()-g|0)|0,e.b5=e.b5+(h.di()-_|0)|0;return}Oh(this,e,s,t,r,i,n)}else if(e instanceof Gf){var v=e.eh(t);if(v<0){e.aa=e.aa.de(new Z(t,n));return}e.aa=e.aa.dn(v,new Z(t,n))}else throw new zm(e)}),I.h7=(function(){return this.c3.aH===0?Jf().fn:(this.e5===null&&(this.e5=new nb(this.c3)),this.e5)}),I.jM=(function(e){kh(this);var t=G().J(e.aZ),n=Yc().bW(t);return this.ek(this.c3,e.aZ,e.aR,t,n,0),this}),I.dF=(function(e,t){kh(this);var n=G().J(e);return this.ek(this.c3,e,t,n,Yc().bW(n),0),this}),I.gB=(function(e){if(kh(this),e instanceof nb)new v_(e,this);else if(Ay(e))e.dJ(new rp(((e,t)=>this.dF(e,t))));else for(var t=e.i();t.j();)this.jM(t.h());return this}),I.aW=(function(){return this.h7()}),I.aP=(function(e){return this.jM(e)}),I.aV=(function(e){return this.gB(e)}),new z().i(jh,`scala.collection.immutable.HashMapBuilder`,{eO:1,D:1,F:1,K:1,a6:1});function Mh(){this.e6=null,this.jc=null,this.lA()}I=Mh.prototype=new L,I.constructor=Mh,I.aX=(function(e){}),I.lA=(function(){var e=new gl;this.jc=(X(),rb(new ub,new np((()=>e.gJ())))),this.e6=e}),I.nf=(function(){return this.e6.gX(new np((()=>X().L))),this.jc}),I.lf=(function(e){var t=new gl;return this.e6.gX(new np((()=>(X(),ib(new ub,e,(X(),rb(new ub,new np((()=>t.gJ()))))))))),this.e6=t,this}),I.l7=(function(e){if(e.s()!==0){var t=new gl;this.e6.gX(new np((()=>X().ky(e.i(),new np((()=>t.gJ())))))),this.e6=t}return this}),I.aW=(function(){return this.nf()}),I.aP=(function(e){return this.lf(e)}),I.aV=(function(e){return this.l7(e)}),new z().i(Mh,`scala.collection.immutable.LazyList$LazyBuilder`,{eV:1,D:1,F:1,K:1,a6:1});function Nh(e){this.e7=null,this.e7=e}I=Nh.prototype=new Rp,I.constructor=Nh,I.j=(function(){return ob(this.e7)!==X().L}),I.h=(function(){if(ob(this.e7)===X().L)return Lf().P.h();var e=this.e7.u();return this.e7=this.e7.aY(),e}),new z().i(Nh,`scala.collection.immutable.LazyList$LazyIterator`,{eX:1,s:1,b:1,c:1,t:1});function Ph(){Fh=this,$(),$()}I=Ph.prototype=new L,I.constructor=Ph,I.cz=(function(e){return $().h4(e)}),I.aQ=(function(){return new bx}),I.as=(function(e){return $().h4(e)}),new z().i(Ph,`scala.collection.immutable.List$`,{f2:1,a:1,I:1,Y:1,af:1});var Fh;function Ih(){return Fh||=new Ph,Fh}function Lh(e,t){if(t===null)throw jm(new Mm);return e.e8=t,e.cX=0,e}function Rh(){this.cX=0,this.e8=null}I=Rh.prototype=new Rp,I.constructor=Rh;function zh(){}zh.prototype=I,I.j=(function(){return this.cX<2}),I.h=(function(){matchResult5$1:{var e,t=this.cX;if(t===0){var e=new Z(this.e8.bO,this.e8.cV);break matchResult5$1}if(t===1){var e=new Z(this.e8.bP,this.e8.cW);break matchResult5$1}var e=Lf().P.h()}return this.cX=1+this.cX|0,e}),I.dj=(function(e){return this.cX=this.cX+e|0,this});function Bh(e,t){if(t===null)throw jm(new Mm);return e.cY=t,e.cZ=0,e}function Vh(){this.cZ=0,this.cY=null}I=Vh.prototype=new Rp,I.constructor=Vh;function Hh(){}Hh.prototype=I,I.j=(function(){return this.cZ<3}),I.h=(function(){var e;switch(this.cZ){case 0:var e=new Z(this.cY.bA,this.cY.cm);break;case 1:var e=new Z(this.cY.bB,this.cY.cn);break;case 2:var e=new Z(this.cY.bC,this.cY.co);break;default:var e=Lf().P.h()}return this.cZ=1+this.cZ|0,e}),I.dj=(function(e){return this.cZ=this.cZ+e|0,this});function Uh(e,t){if(t===null)throw jm(new Mm);return e.c5=t,e.d0=0,e}function Wh(){this.d0=0,this.c5=null}I=Wh.prototype=new Rp,I.constructor=Wh;function Gh(){}Gh.prototype=I,I.j=(function(){return this.d0<4}),I.h=(function(){var e;switch(this.d0){case 0:var e=new Z(this.c5.bg,this.c5.bQ);break;case 1:var e=new Z(this.c5.bh,this.c5.bR);break;case 2:var e=new Z(this.c5.bi,this.c5.bS);break;case 3:var e=new Z(this.c5.bj,this.c5.bT);break;default:var e=Lf().P.h()}return this.d0=1+this.d0|0,e}),I.dj=(function(e){return this.d0=this.d0+e|0,this});function Kh(){this.cp=null,this.eA=!1,this.dz=null,this.cp=Yy(),this.eA=!1}I=Kh.prototype=new L,I.constructor=Kh,I.aX=(function(e){}),I.ku=(function(){return this.eA?this.dz.h7():this.cp}),I.ld=(function(e,t){return this.eA?this.dz.dF(e,t):this.cp.aG()<4||this.cp.bV(e)?this.cp=this.cp.dp(e,t):(this.eA=!0,this.dz===null&&(this.dz=new jh),this.cp.ly(this.dz),this.dz.dF(e,t)),this}),I.jH=(function(e){return this.eA?(this.dz.gB(e),this):yd(this,e)}),I.aW=(function(){return this.ku()}),I.aP=(function(e){return this.ld(e.aZ,e.aR)}),I.aV=(function(e){return this.jH(e)}),new z().i(Kh,`scala.collection.immutable.MapBuilderImpl`,{fc:1,D:1,F:1,K:1,a6:1});function qh(){this.jg=0,this.jh=null,Jh=this;try{ol();var e=Qu().kl(rc().gT(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.jg=e,this.jh=new k_(lx(),0,0)}I=qh.prototype=new L,I.constructor=qh,I.cz=(function(e){return this.gP(e)}),I.gP=(function(e){if(e instanceof wb)return e;var t=e.s();if(t===0)return lx();if((t-1|0)>>>0<=31){matchResult3:{var n;if(e instanceof Fb){var r=e.a7().aF();if(r!==null&&r===B.l()){var n=e.c2;break matchResult3}}if(y_(e)){var i=new R(t);e.bu(i,0,2147483647);var n=i;break matchResult3}var a=new R(t);e.i().bu(a,0,2147483647);var n=a}return new rx(n)}return new rg().jI(e).kv()}),I.as=(function(e){return this.gP(e)}),I.aQ=(function(){return new rg}),new z().i(qh,`scala.collection.immutable.Vector$`,{fp:1,a:1,I:1,Y:1,af:1});var Jh;function Yh(){return Jh||=new qh,Jh}function Xh(e){var t=null,n=null;if(e.F>=6){t=e.aw;var r=e.C>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.p(r,a,0,o)}var s=e.C,c=s>>24>>>7|0,l=(33554431&(s+c|0))-c|0;e.v=e.v-(e.C-l|0)|0,e.C=l,e.v>>>25|0||(e.F=5),n=t,t=t.a[0]}if(e.F>=5){t===null&&(t=e.M);var u=31&(e.C>>>20|0);if(e.F===5){if(u>0){var d=t,f=t,p=32-u|0;d.p(u,f,0,p)}e.M=t;var m=e.C,h=m>>19>>>12|0,g=(1048575&(m+h|0))-h|0;e.v=e.v-(e.C-g|0)|0,e.C=g,e.v>>>20|0||(e.F=4)}else u>0&&(t=H().X(t,u,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.F>=4){t===null&&(t=e.G);var _=31&(e.C>>>15|0);if(e.F===4){if(_>0){var v=t,y=t,b=32-_|0;v.p(_,y,0,b)}e.G=t;var x=e.C,S=x>>14>>>17|0,C=(32767&(x+S|0))-S|0;e.v=e.v-(e.C-C|0)|0,e.C=C,e.v>>>15|0||(e.F=3)}else _>0&&(t=H().X(t,_,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.F>=3){t===null&&(t=e.D);var w=31&(e.C>>>10|0);if(e.F===3){if(w>0){var T=t,ee=t,te=32-w|0;T.p(w,ee,0,te)}e.D=t;var ne=e.C,E=ne>>9>>>22|0,re=(1023&(ne+E|0))-E|0;e.v=e.v-(e.C-re|0)|0,e.C=re,e.v>>>10|0||(e.F=2)}else w>0&&(t=H().X(t,w,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.F>=2){t===null&&(t=e.A);var ie=31&(e.C>>>5|0);if(e.F===2){if(ie>0){var ae=t,oe=t,se=32-ie|0;ae.p(ie,oe,0,se)}e.A=t;var D=e.C,ce=D>>4>>>27|0,O=(31&(D+ce|0))-ce|0;e.v=e.v-(e.C-O|0)|0,e.C=O,e.v>>>5|0||(e.F=1)}else ie>0&&(t=H().X(t,ie,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.F>=1){t===null&&(t=e.K);var le=31&e.C;if(e.F===1){if(le>0){var ue=t,de=t,fe=32-le|0;ue.p(le,de,0,fe)}e.K=t,e.E=e.E-e.C|0,e.C=0}else le>0&&(t=H().X(t,le,32)),n.a[0]=t}e.fo=!1}function Zh(e,t){var n=t.a.length;if(n>0){e.E===32&&eg(e);var r=32-e.E|0,i=r<n?r:n,a=n-i|0,o=e.K,s=e.E;if(t.p(0,o,s,i),e.E=e.E+i|0,a>0){eg(e);var c=e.K;t.p(i,c,0,a),e.E=e.E+a|0}}}function Qh(e,t,n){if(t.a.length!==0){e.E===32&&eg(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.v|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.v>>>5|0),c=e.A;if(t.p(0,c,s,a),tg(e,a<<5),o>0){var l=e.A;t.p(a,l,0,o),tg(e,o<<5)}break;case 3:var u=e.v,d=u>>9>>>22|0;if((1023&(u+d|0))-d|0){var f=(t=>{Qh(e,t,2)}),p=t.a.length,m=0;if(t!==null)for(;m<p;){var h=t.a[m];f(h),m=1+m|0}else if(t instanceof pa)for(;m<p;){var g=t.a[m];f(g),m=1+m|0}else if(t instanceof ga)for(;m<p;){var _=t.a[m];f(_),m=1+m|0}else if(t instanceof ma)for(;m<p;){var v=t.a,y=m<<1,b=v[y],x=v[y+1|0];f(na(b,x)),m=1+m|0}else if(t instanceof ha)for(;m<p;){var S=t.a[m];f(S),m=1+m|0}else if(t instanceof ua)for(;m<p;){var C=t.a[m];f(ta(C)),m=1+m|0}else if(t instanceof da)for(;m<p;){var w=t.a[m];f(w),m=1+m|0}else if(t instanceof fa)for(;m<p;){var T=t.a[m];f(T),m=1+m|0}else if(t instanceof la)for(;m<p;){var ee=t.a[m];f(ee),m=1+m|0}else throw new zm(t);return}var te=31&((32768-e.v|0)>>>10|0),ne=te<r?te:r,E=r-ne|0,re=31&(e.v>>>10|0),ie=e.D;if(t.p(0,ie,re,ne),tg(e,ne<<10),E>0){var ae=e.D;t.p(ne,ae,0,E),tg(e,E<<10)}break;case 4:var oe=e.v,se=oe>>14>>>17|0;if((32767&(oe+se|0))-se|0){var D=(t=>{Qh(e,t,3)}),ce=t.a.length,O=0;if(t!==null)for(;O<ce;){var le=t.a[O];D(le),O=1+O|0}else if(t instanceof pa)for(;O<ce;){var ue=t.a[O];D(ue),O=1+O|0}else if(t instanceof ga)for(;O<ce;){var de=t.a[O];D(de),O=1+O|0}else if(t instanceof ma)for(;O<ce;){var fe=t.a,pe=O<<1,me=fe[pe],he=fe[pe+1|0];D(na(me,he)),O=1+O|0}else if(t instanceof ha)for(;O<ce;){var ge=t.a[O];D(ge),O=1+O|0}else if(t instanceof ua)for(;O<ce;){var _e=t.a[O];D(ta(_e)),O=1+O|0}else if(t instanceof da)for(;O<ce;){var ve=t.a[O];D(ve),O=1+O|0}else if(t instanceof fa)for(;O<ce;){var ye=t.a[O];D(ye),O=1+O|0}else if(t instanceof la)for(;O<ce;){var be=t.a[O];D(be),O=1+O|0}else throw new zm(t);return}var xe=31&((1048576-e.v|0)>>>15|0),Se=xe<r?xe:r,Ce=r-Se|0,we=31&(e.v>>>15|0),Te=e.G;if(t.p(0,Te,we,Se),tg(e,Se<<15),Ce>0){var Ee=e.G;t.p(Se,Ee,0,Ce),tg(e,Ce<<15)}break;case 5:var De=e.v,Oe=De>>19>>>12|0;if((1048575&(De+Oe|0))-Oe|0){var k=(t=>{Qh(e,t,4)}),A=t.a.length,j=0;if(t!==null)for(;j<A;){var ke=t.a[j];k(ke),j=1+j|0}else if(t instanceof pa)for(;j<A;){var Ae=t.a[j];k(Ae),j=1+j|0}else if(t instanceof ga)for(;j<A;){var je=t.a[j];k(je),j=1+j|0}else if(t instanceof ma)for(;j<A;){var Me=t.a,Ne=j<<1,Pe=Me[Ne],Fe=Me[Ne+1|0];k(na(Pe,Fe)),j=1+j|0}else if(t instanceof ha)for(;j<A;){var Ie=t.a[j];k(Ie),j=1+j|0}else if(t instanceof ua)for(;j<A;){var Le=t.a[j];k(ta(Le)),j=1+j|0}else if(t instanceof da)for(;j<A;){var Re=t.a[j];k(Re),j=1+j|0}else if(t instanceof fa)for(;j<A;){var ze=t.a[j];k(ze),j=1+j|0}else if(t instanceof la)for(;j<A;){var Be=t.a[j];k(Be),j=1+j|0}else throw new zm(t);return}var Ve=31&((33554432-e.v|0)>>>20|0),He=Ve<r?Ve:r,Ue=r-He|0,We=31&(e.v>>>20|0),Ge=e.M;if(t.p(0,Ge,We,He),tg(e,He<<20),Ue>0){var Ke=e.M;t.p(He,Ke,0,Ue),tg(e,Ue<<20)}break;case 6:var qe=e.v,Je=qe>>24>>>7|0;if((33554431&(qe+Je|0))-Je|0){var Ye=(t=>{Qh(e,t,5)}),M=t.a.length,N=0;if(t!==null)for(;N<M;){var Xe=t.a[N];Ye(Xe),N=1+N|0}else if(t instanceof pa)for(;N<M;){var Ze=t.a[N];Ye(Ze),N=1+N|0}else if(t instanceof ga)for(;N<M;){var Qe=t.a[N];Ye(Qe),N=1+N|0}else if(t instanceof ma)for(;N<M;){var $e=t.a,et=N<<1,tt=$e[et],nt=$e[et+1|0];Ye(na(tt,nt)),N=1+N|0}else if(t instanceof ha)for(;N<M;){var rt=t.a[N];Ye(rt),N=1+N|0}else if(t instanceof ua)for(;N<M;){var it=t.a[N];Ye(ta(it)),N=1+N|0}else if(t instanceof da)for(;N<M;){var at=t.a[N];Ye(at),N=1+N|0}else if(t instanceof fa)for(;N<M;){var ot=t.a[N];Ye(ot),N=1+N|0}else if(t instanceof la)for(;N<M;){var st=t.a[N];Ye(st),N=1+N|0}else throw new zm(t);return}var ct=e.v>>>25|0;if((ct+r|0)>64)throw Sm(new wm,`exceeding 2^31 elements`);var lt=e.aw;t.p(0,lt,ct,r),tg(e,r<<25);break;default:throw new zm(n)}}}function $h(e,t){for(var n=t.cd(),r=0;r<n;){var i=t.cc(r);matchResult26:{var a=r,o=(n+(n>>>31|0)|0)>>1,s=a-o|0,c=s>>31,l=(1+o|0)-((s^c)-c|0)|0;if(l===1){Zh(e,i);break matchResult26}if(e.E===32||e.E===0){Qh(e,i,l);break matchResult26}U().gL(l-2|0,i,new J((t=>{Zh(e,t)})))}r=1+r|0}return e}function eg(e){var t=32+e.v|0,n=t^e.v;e.v=t,e.E=0,ng(e,t,n)}function tg(e,t){if(t>0){var n=e.v+t|0,r=n^e.v;e.v=n,e.E=0,ng(e,n,r)}}function ng(e,t,n){if(n<=0)throw Sm(new wm,`advance1(`+t+`, `+n+`): a1=`+e.K+`, a2=`+e.A+`, a3=`+e.D+`, a4=`+e.G+`, a5=`+e.M+`, a6=`+e.aw+`, depth=`+e.F);n<1024?(e.F<=1&&(e.A=new(B.r().r()).C(32),e.A.a[0]=e.K,e.F=2),e.K=new R(32),e.A.a[31&(t>>>5|0)]=e.K):n<32768?(e.F<=2&&(e.D=new(B.r().r().r()).C(32),e.D.a[0]=e.A,e.F=3),e.K=new R(32),e.A=new(B.r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.D.a[31&(t>>>10|0)]=e.A):n<1048576?(e.F<=3&&(e.G=new(B.r().r().r().r()).C(32),e.G.a[0]=e.D,e.F=4),e.K=new R(32),e.A=new(B.r().r()).C(32),e.D=new(B.r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.D.a[31&(t>>>10|0)]=e.A,e.G.a[31&(t>>>15|0)]=e.D):n<33554432?(e.F<=4&&(e.M=new(B.r().r().r().r().r()).C(32),e.M.a[0]=e.G,e.F=5),e.K=new R(32),e.A=new(B.r().r()).C(32),e.D=new(B.r().r().r()).C(32),e.G=new(B.r().r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.D.a[31&(t>>>10|0)]=e.A,e.G.a[31&(t>>>15|0)]=e.D,e.M.a[31&(t>>>20|0)]=e.G):(e.F<=5&&(e.aw=new(B.r().r().r().r().r().r()).C(64),e.aw.a[0]=e.M,e.F=6),e.K=new R(32),e.A=new(B.r().r()).C(32),e.D=new(B.r().r().r()).C(32),e.G=new(B.r().r().r().r()).C(32),e.M=new(B.r().r().r().r().r()).C(32),e.A.a[31&(t>>>5|0)]=e.K,e.D.a[31&(t>>>10|0)]=e.A,e.G.a[31&(t>>>15|0)]=e.D,e.M.a[31&(t>>>20|0)]=e.G,e.aw.a[t>>>25|0]=e.M)}function rg(){this.aw=null,this.M=null,this.G=null,this.D=null,this.A=null,this.K=null,this.E=0,this.v=0,this.C=0,this.fo=!1,this.F=0,this.K=new R(32),this.E=0,this.v=0,this.C=0,this.fo=!1,this.F=1}I=rg.prototype=new L,I.constructor=rg,I.aX=(function(e){}),I.my=(function(e){var t=e.cd();switch(t){case 0:break;case 1:this.F=1;var n=e.b.a.length;this.E=31&n,this.v=n-this.E|0;var r=e.b;this.K=r.a.length===32?r:H().X(r,0,32);break;case 3:var i=e.b4,a=e.e;this.K=a.a.length===32?a:H().X(a,0,32),this.F=2,this.C=32-e.bl|0;var o=e.g+this.C|0;this.E=31&o,this.v=o-this.E|0,this.A=new(B.r().r()).C(32),this.A.a[0]=e.b;var s=this.A,c=i.a.length;i.p(0,s,1,c),this.A.a[1+i.a.length|0]=this.K;break;case 5:var l=e.aK,u=e.aL,d=e.e;this.K=d.a.length===32?d:H().X(d,0,32),this.F=3,this.C=1024-e.b2|0;var f=e.g+this.C|0;this.E=31&f,this.v=f-this.E|0,this.D=new(B.r().r().r()).C(32),this.D.a[0]=U().c8(e.b,e.b8);var p=this.D,m=l.a.length;l.p(0,p,1,m),this.A=H().O(u,32),this.D.a[1+l.a.length|0]=this.A,this.A.a[u.a.length]=this.K;break;case 7:var h=e.ap,g=e.ar,_=e.aq,v=e.e;this.K=v.a.length===32?v:H().X(v,0,32),this.F=4,this.C=32768-e.aB|0;var y=e.g+this.C|0;this.E=31&y,this.v=y-this.E|0,this.G=new(B.r().r().r().r()).C(32),this.G.a[0]=U().c8(U().c8(e.b,e.aS),e.aT);var b=this.G,x=h.a.length;h.p(0,b,1,x),this.D=H().O(g,32),this.A=H().O(_,32),this.G.a[1+h.a.length|0]=this.D,this.D.a[g.a.length]=this.A,this.A.a[_.a.length]=this.K;break;case 9:var S=e.Y,C=e.a1,w=e.a0,T=e.Z,ee=e.e;this.K=ee.a.length===32?ee:H().X(ee,0,32),this.F=5,this.C=1048576-e.ai|0;var te=e.g+this.C|0;this.E=31&te,this.v=te-this.E|0,this.M=new(B.r().r().r().r().r()).C(32),this.M.a[0]=U().c8(U().c8(U().c8(e.b,e.at),e.au),e.av);var ne=this.M,E=S.a.length;S.p(0,ne,1,E),this.G=H().O(C,32),this.D=H().O(w,32),this.A=H().O(T,32),this.M.a[1+S.a.length|0]=this.G,this.G.a[C.a.length]=this.D,this.D.a[w.a.length]=this.A,this.A.a[T.a.length]=this.K;break;case 11:var re=e.R,ie=e.V,ae=e.U,oe=e.T,se=e.S,D=e.e;this.K=D.a.length===32?D:H().X(D,0,32),this.F=6,this.C=33554432-e.ab|0;var ce=e.g+this.C|0;this.E=31&ce,this.v=ce-this.E|0,this.aw=new(B.r().r().r().r().r().r()).C(64),this.aw.a[0]=U().c8(U().c8(U().c8(U().c8(e.b,e.aj),e.ak),e.al),e.am);var O=this.aw,le=re.a.length;re.p(0,O,1,le),this.M=H().O(ie,32),this.G=H().O(ae,32),this.D=H().O(oe,32),this.A=H().O(se,32),this.aw.a[1+re.a.length|0]=this.M,this.M.a[ie.a.length]=this.G,this.G.a[ae.a.length]=this.D,this.D.a[oe.a.length]=this.A,this.A.a[se.a.length]=this.K;break;default:throw new zm(t)}return this.E===0&&this.v>0&&(this.E=32,this.v=this.v-32|0),this}),I.lg=(function(e){return this.E===32&&eg(this),this.K.a[this.E]=e,this.E=1+this.E|0,this}),I.jI=(function(e){return e instanceof wb?this.E===0&&this.v===0&&!this.fo?this.my(e):$h(this,e):yd(this,e)}),I.kv=(function(){this.fo&&Xh(this);var e=this.E+this.v|0,t=e-this.C|0;if(t===0)return Yh(),lx();if(e<0)throw Em(new Om,`Vector cannot have negative size `+e);if(e<=32){var n=this.K;return new rx(n.a.length===t?n:H().O(n,t))}if(e<=1024){var r=31&(e-1|0),i=(e-1|0)>>>5|0,a=H().X(this.A,1,i),o=this.A.a[0],s=this.A.a[i],c=1+r|0,l=s.a.length===c?s:H().O(s,c);return new ux(o,32-this.C|0,a,l,t)}if(e<=32768){var u=31&(e-1|0),d=31&((e-1|0)>>>5|0),f=(e-1|0)>>>10|0,p=H().X(this.D,1,f),m=this.D.a[0],h=H().X(m,1,m.a.length),g=this.D.a[0].a[0],_=H().O(this.D.a[f],d),v=this.D.a[f].a[d],y=1+u|0,b=v.a.length===y?v:H().O(v,y),x=g.a.length;return new dx(g,x,h,x+(h.a.length<<5)|0,p,_,b,t)}if(e<=1048576){var S=31&(e-1|0),C=31&((e-1|0)>>>5|0),w=31&((e-1|0)>>>10|0),T=(e-1|0)>>>15|0,ee=H().X(this.G,1,T),te=this.G.a[0],ne=H().X(te,1,te.a.length),E=this.G.a[0].a[0],re=H().X(E,1,E.a.length),ie=this.G.a[0].a[0].a[0],ae=H().O(this.G.a[T],w),oe=H().O(this.G.a[T].a[w],C),se=this.G.a[T].a[w].a[C],D=1+S|0,ce=se.a.length===D?se:H().O(se,D),O=ie.a.length,le=O+(re.a.length<<5)|0;return new fx(ie,O,re,le,ne,le+(ne.a.length<<10)|0,ee,ae,oe,ce,t)}if(e<=33554432){var ue=31&(e-1|0),de=31&((e-1|0)>>>5|0),fe=31&((e-1|0)>>>10|0),pe=31&((e-1|0)>>>15|0),me=(e-1|0)>>>20|0,he=H().X(this.M,1,me),ge=this.M.a[0],_e=H().X(ge,1,ge.a.length),ve=this.M.a[0].a[0],ye=H().X(ve,1,ve.a.length),be=this.M.a[0].a[0].a[0],xe=H().X(be,1,be.a.length),Se=this.M.a[0].a[0].a[0].a[0],Ce=H().O(this.M.a[me],pe),we=H().O(this.M.a[me].a[pe],fe),Te=H().O(this.M.a[me].a[pe].a[fe],de),Ee=this.M.a[me].a[pe].a[fe].a[de],De=1+ue|0,Oe=Ee.a.length===De?Ee:H().O(Ee,De),k=Se.a.length,A=k+(xe.a.length<<5)|0,j=A+(ye.a.length<<10)|0;return new px(Se,k,xe,A,ye,j,_e,j+(_e.a.length<<15)|0,he,Ce,we,Te,Oe,t)}var ke=31&(e-1|0),Ae=31&((e-1|0)>>>5|0),je=31&((e-1|0)>>>10|0),Me=31&((e-1|0)>>>15|0),Ne=31&((e-1|0)>>>20|0),Pe=(e-1|0)>>>25|0,Fe=H().X(this.aw,1,Pe),Ie=this.aw.a[0],Le=H().X(Ie,1,Ie.a.length),Re=this.aw.a[0].a[0],ze=H().X(Re,1,Re.a.length),Be=this.aw.a[0].a[0].a[0],Ve=H().X(Be,1,Be.a.length),He=this.aw.a[0].a[0].a[0].a[0],Ue=H().X(He,1,He.a.length),We=this.aw.a[0].a[0].a[0].a[0].a[0],Ge=H().O(this.aw.a[Pe],Ne),Ke=H().O(this.aw.a[Pe].a[Ne],Me),qe=H().O(this.aw.a[Pe].a[Ne].a[Me],je),Je=H().O(this.aw.a[Pe].a[Ne].a[Me].a[je],Ae),Ye=this.aw.a[Pe].a[Ne].a[Me].a[je].a[Ae],M=1+ke|0,N=Ye.a.length===M?Ye:H().O(Ye,M),Xe=We.a.length,Ze=Xe+(Ue.a.length<<5)|0,Qe=Ze+(Ve.a.length<<10)|0,$e=Qe+(ze.a.length<<15)|0;return new mx(We,Xe,Ue,Ze,Ve,Qe,ze,$e,Le,$e+(Le.a.length<<20)|0,Fe,Ge,Ke,qe,Je,N,t)}),I.B=(function(){return`VectorBuilder(len1=`+this.E+`, lenRest=`+this.v+`, offset=`+this.C+`, depth=`+this.F+`)`}),I.aP=(function(e){return this.lg(e)}),I.aV=(function(e){return this.jI(e)}),I.aW=(function(){return this.kv()}),new z().i(rg,`scala.collection.immutable.VectorBuilder`,{fx:1,D:1,F:1,K:1,a6:1});function ig(){this.jj=null,ag=this,this.jj=new R(0)}I=ig.prototype=new L,I.constructor=ig,I.cz=(function(e){return this.kd(e)}),I.kd=(function(e){var t=e.s();if(t>=0){var n=this.kz(this.jj,0,t),r=Gm(e)?e.bu(n,0,2147483647):e.i().bu(n,0,2147483647);if(r!==t)throw new Tm(`Copied `+r+` of `+t);return xx(new Cx,n,t)}return Sx(new Cx).jJ(e)}),I.aQ=(function(){return new sg}),I.ne=(function(e,t){if(t<0)throw kp(new Ap,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw kp(new Ap,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),I.kz=(function(e,t,n){var r=this.ne(e.a.length,n);if(r<0)return e;var i=new R(r);return e.p(0,i,0,t),i}),I.as=(function(e){return this.kd(e)}),new z().i(ig,`scala.collection.mutable.ArrayBuffer$`,{fC:1,a:1,I:1,Y:1,af:1});var ag;function og(){return ag||=new ig,ag}function sg(){this.d8=null,nm(this,(og(),Sx(new Cx)))}I=sg.prototype=new im,I.constructor=sg,I.aX=(function(e){this.d8.aX(e)}),new z().i(sg,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fD:1,aI:1,D:1,F:1,K:1});function cg(){this.e4=null,Hp(this,jg())}I=cg.prototype=new Wp,I.constructor=cg,new z().i(cg,`scala.collection.mutable.Buffer$`,{fJ:1,be:1,a:1,I:1,Y:1});var lg;function ug(){return lg||=new cg,lg}function dg(e,t){this.d8=null,nm(this,pb(new bb,e,t))}I=dg.prototype=new im,I.constructor=dg,I.aX=(function(e){this.d8.aX(e)}),new z().i(dg,`scala.collection.mutable.HashSet$$anon$4`,{fR:1,aI:1,D:1,F:1,K:1});function fg(e,t){if(t===null)throw jm(new Mm);return e.eE=t,e.da=0,e.cu=null,e.eF=t.aM.a.length,e}function pg(){this.da=0,this.cu=null,this.eF=0,this.eE=null}I=pg.prototype=new Rp,I.constructor=pg;function mg(){}mg.prototype=I,I.j=(function(){if(this.cu!==null)return!0;for(;this.da<this.eF;){var e=this.eE.aM.a[this.da];if(this.da=1+this.da|0,e!==null)return this.cu=e,!0}return!1}),I.h=(function(){if(this.j()){var e=this.cu;e===null&&Kl().bZ();var t=this.gK(e),n=this.cu;return n===null&&Kl().bZ(),this.cu=n.aN,t}return Lf().P.h()});function hg(e,t){return e.eG=t,e}function gg(){this.eG=null}I=gg.prototype=new L,I.constructor=gg;function _g(){}_g.prototype=I,I.aV=(function(e){return yd(this,e)}),I.aX=(function(e){}),I.aW=(function(){return this.eG});function vg(){this.e4=null,Hp(this,og())}I=vg.prototype=new Wp,I.constructor=vg,new z().i(vg,`scala.collection.mutable.IndexedSeq$`,{fU:1,be:1,a:1,I:1,Y:1});var yg;function bg(){return yg||=new vg,yg}function xg(){}I=xg.prototype=new L,I.constructor=xg,I.cz=(function(e){return new bx().fL(e)}),I.aQ=(function(){return nm(new rm,new bx)}),I.as=(function(e){return new bx().fL(e)}),new z().i(xg,`scala.collection.mutable.ListBuffer$`,{fX:1,a:1,I:1,Y:1,af:1});var Sg;function Cg(){return Sg||=new xg,Sg}function wg(e,t){this.gx=null,this.jt=null,this.js=0,this.gx=e,this.jt=t,this.js=t.a6()|0}I=wg.prototype=new Rp,I.constructor=wg,I.j=(function(){return Ll().jU(this.js,this.jt.a6()|0,`mutation occurred during iteration`),this.gx.j()}),I.h=(function(){return this.gx.h()}),new z().i(wg,`scala.collection.mutable.MutationTracker$CheckedIterator`,{fZ:1,s:1,b:1,c:1,t:1});function Tg(e,t){if(Dg(t)){var n=e.aF(),r=t.aF();return n===null?r===null:n===r}return!1}function Eg(e,t){return t.a8.Z?`Array[`+Eg(e,t.a8.Q())+`]`:t.a8.N}function Dg(e){return!!(e&&e.$classData&&e.$classData.n.C)}function Og(e){this.jy=null,this.eI=0,this.jx=0,this.jy=e,this.eI=0,this.jx=e.cD()}I=Og.prototype=new Rp,I.constructor=Og,I.j=(function(){return this.eI<this.jx}),I.h=(function(){var e=this.jy.cE(this.eI);return this.eI=1+this.eI|0,e}),new z().i(Og,`scala.runtime.ScalaRunTime$$anon$1`,{gG:1,s:1,b:1,c:1,t:1});function kg(){}I=kg.prototype=new L,I.constructor=kg,I.cz=(function(e){return this.ke(e)}),I.aQ=(function(){return Tx(new Ex)}),I.ke=(function(e){return yd(Tx(new Ex),e).aW()}),I.as=(function(e){return this.ke(e)}),new z().i(kg,`scala.scalajs.js.WrappedArray$`,{gM:1,af:1,a:1,I:1,Y:1});var Ag;function jg(){return Ag||=new kg,Ag}function Mg(){}I=Mg.prototype=new L,I.constructor=Mg,I.cz=(function(e){return this.gQ(e)}),I.gQ=(function(e){return this.aQ().aV(e).aW()}),I.aQ=(function(){return new tm(new J((e=>new Q(e.db))),wx(new Ex,[]))}),I.as=(function(e){return this.gQ(e)}),new z().i(Mg,`scala.scalajs.runtime.WrappedVarArgs$`,{gX:1,af:1,a:1,I:1,Y:1});var Ng;function Pg(){return Ng||=new Mg,Ng}var Fg=class e extends Pd{constructor(e,t){super(),this.dO=null,this.dN=0,this.dO=e,this.dN=t,sd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}ei(){return new Hm(this)}w(){var e=-889275714;return e=G().y(e,Yg(`TransactionDepthExceeded`)),e=G().y(e,G().J(this.dO)),e=G().y(e,this.dN),G().aD(e,2)}r(t){if(this===t)return!0;if(t instanceof e){if(this.dN===t.dN){var n=this.dO,r=t.dO;return n===null?r===null:n===r}return!1}return!1}cD(){return 2}cF(){return`TransactionDepthExceeded`}cE(e){if(e===0)return this.dO;if(e===1)return this.dN;throw Em(new Om,``+e)}B(){return`TransactionDepthExceeded: `+this.dO+`; maxDepth: `+this.dN}};new z().i(Fg,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aK:1,bW:1,B:1,a:1,d:1,a8:1});function Ig(e,t){this.fe=null,this.dS=null,this.g0=null,this.em=null,this.hY=null,this.cg=null,this.hY=e,this.cg=t,this.fe=e_(),ku(this),dm(this)}I=Ig.prototype=new L,I.constructor=Ig,I.c7=(function(e){cs().fA(e,this,void 0)}),I.fE=(function(){return this.dS}),I.jX=(function(e){this.dS=e}),I.kI=(function(e){pm(this,e)}),I.kC=(function(e){mm(this,e)}),I.B=(function(){return`ReactiveHtmlElement(`+(this.cg===null?`tag=`+this.hY.h0():this.cg.outerHTML)+`)`}),I.dL=(function(){return this.cg}),new z().i(Ig,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{d7:1,at:1,a2:1,aP:1,aQ:1,d6:1});function Lg(e,t){return sd(e,t,null,!0,!0),e}function Rg(e){return sd(e,null,null,!0,!0),e}var zg=class extends Om{};new z().i(zg,`java.lang.ArrayIndexOutOfBoundsException`,{dt:1,b0:1,P:1,H:1,B:1,a:1});function Bg(e,t){return Object.is(e,t)}function Vg(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Ki;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Hg=new z().i(0,`java.lang.Double`,{aY:1,a7:1,a:1,Z:1,W:1,ak:1},(e=>typeof e==`number`)),Ug=new z().i(0,`java.lang.Float`,{dA:1,a7:1,a:1,Z:1,W:1,ak:1},(e=>ea(e))),Wg=new z().i(0,`java.lang.Integer`,{dC:1,a7:1,a:1,Z:1,W:1,ak:1},(e=>$i(e)));function Gg(e,t,n){if(n instanceof Li){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Kg(e,t){return e^t}var qg=new z().i(0,`java.lang.Long`,{b1:1,a7:1,a:1,Z:1,W:1,ak:1},(e=>e instanceof Li)),Jg=class extends wm{constructor(e){super(),sd(this,e,null,!0,!0)}};new z().i(Jg,`java.lang.NumberFormatException`,{dI:1,aZ:1,P:1,H:1,B:1,a:1});function Yg(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Xg(e,t){return e===t}var Zg=new z().i(0,`java.lang.String`,{dO:1,a:1,Z:1,av:1,W:1,ak:1},(e=>typeof e==`string`));function Qg(){}I=Qg.prototype=new Vm,I.constructor=Qg,I.w=(function(){return 2433880}),I.B=(function(){return`None`}),I.cD=(function(){return 0}),I.cF=(function(){return`None`}),I.cE=(function(e){throw Dm(new Om,e)}),I.mm=(function(){throw new Im(`None.get`)}),I.aE=(function(){this.mm()}),new z().i(Qg,`scala.None$`,{ec:1,b5:1,b:1,d:1,a8:1,a:1});var $g;function e_(){return $g||=new Qg,$g}function t_(e){this.eq=null,this.eq=e}I=t_.prototype=new Vm,I.constructor=t_,I.w=(function(){return q().h5(this,1323286827,!0)}),I.r=(function(e){return this===e||e instanceof t_&&W().n(this.eq,e.eq)}),I.B=(function(){return Yl().l6(this)}),I.cD=(function(){return 1}),I.cF=(function(){return`Some`}),I.cE=(function(e){if(e===0)return this.eq;throw Dm(new Om,e)}),I.aE=(function(){return this.eq}),new z().i(t_,`scala.Some`,{b6:1,b5:1,b:1,d:1,a8:1,a:1});function n_(){}I=n_.prototype=new L,I.constructor=n_;function r_(){}r_.prototype=I,I.s=(function(){return-1}),I.bK=(function(e){Xc(this,e)}),I.eg=(function(e){return Zc(this,e)}),I.d=(function(){return Qc(this)}),I.bu=(function(e,t,n){return $c(this,e,t,n)}),I.dd=(function(e,t,n,r){return tl(this,e,t,n,r)}),I.eV=(function(e){return this.ba().as(e)}),I.eY=(function(){return this.ba().aQ()}),I.bJ=(function(){return this.bc()}),I.eU=(function(e){return this.eV(e)});function i_(e){this.fh=null,this.ch=0,this.er=0,this.fh=e,this.ch=0,this.er=_c().bv(this.fh)}I=i_.prototype=new Rp,I.constructor=i_,I.s=(function(){return this.er-this.ch|0}),I.j=(function(){return this.ch<this.er}),I.h=(function(){this.ch>=_c().bv(this.fh)&&Lf().P.h();var e=Yl().dH(this.fh,this.ch);return this.ch=1+this.ch|0,e}),I.dj=(function(e){if(e>0){var t=this.ch+e|0;if(t<0)var n=this.er;else var r=this.er,n=r<t?r:t;this.ch=n}return this}),new z().i(i_,`scala.collection.ArrayOps$ArrayIterator`,{em:1,s:1,b:1,c:1,t:1,a:1});function a_(e,t){return e.ge=t,e.ci=0,e.b3=t.k(),e}function o_(e,t){return t<0?0:t>e.b3?e.b3:t}function s_(){this.ge=null,this.ci=0,this.b3=0}I=s_.prototype=new Rp,I.constructor=s_;function c_(){}c_.prototype=I,I.s=(function(){return this.b3}),I.j=(function(){return this.b3>0}),I.h=(function(){if(this.b3>0){var e=this.ge.q(this.ci);return this.ci=1+this.ci|0,this.b3=this.b3-1|0,e}return Lf().P.h()}),I.dj=(function(e){if(e>0){this.ci=this.ci+e|0;var t=this.b3-e|0;this.b3=t<0?0:t}return this}),I.f3=(function(e,t){var n=o_(this,e),r=o_(this,t)-n|0;return this.b3=r<0?0:r,this.ci=this.ci+n|0,this}),new z().i(s_,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bc:1,s:1,b:1,c:1,t:1,a:1});function l_(){this.eG=null,hg(this,Lf().P)}I=l_.prototype=new _g,I.constructor=l_,I.le=(function(e){return this.eG=this.eG.gF(new np((()=>new qm(e)))),this}),I.aP=(function(e){return this.le(e)}),new z().i(l_,`scala.collection.Iterator$$anon$21`,{ev:1,fT:1,D:1,F:1,K:1,a6:1});function u_(e,t){for(var n=e.i();n.j();){var r=n.h();t.cy(r.aZ,r.aR)}}function d_(e,t,n,r,i){return tl(new Ym(new J((e=>{var t=e.aZ,n=e.aR;return t+` -> `+n})),e.i()),t,n,r,i)}function f_(e,t){for(var n=e.eY(),r=mb(new bb),i=e.i();i.j();){var a=i.h();r.fz(t.f(a))&&n.aP(a)}return n.aW()}function p_(e,t){var n=e.dm().aQ();return n.aV(e),n.aV(t),n.aW()}function m_(e){return e.j8||=(e.j7=new Fb(new(ip.r()).C(0)),!0),e.j7}function h_(){this.gi=null,this.j7=null,this.j8=!1,g_=this,this.gi=new Um(this)}I=h_.prototype=new L,I.constructor=h_,I.gN=(function(e,t){return e instanceof xb?e:this.hb(Ac().ka(e,t))}),I.fH=(function(e){return new tm(new J((t=>this.hb(nl(t,e)))),(og(),new sg))}),I.hb=(function(e){if(e===null)return null;if(e instanceof R)return new Fb(e);if(e instanceof pa)return new Nb(e);if(e instanceof ga)return new jb(e);if(e instanceof ma)return new Pb(e);if(e instanceof ha)return new Mb(e);if(e instanceof ua)return new Ab(e);if(e instanceof da)return new kb(e);if(e instanceof fa)return new Ib(e);if(e instanceof la)return new Ob(e);if(fc(e,1))return new Lb(e);throw new zm(e)}),I.gM=(function(e,t){return this.gN(e,t)}),new z().i(h_,`scala.collection.immutable.ArraySeq$`,{eL:1,a:1,ba:1,b8:1,b9:1,bg:1});var g_;function __(){return g_||=new h_,g_}function v_(e,t){if(this.br=0,this.ew=0,this.dx=null,this.bf=0,this.cl=null,this.ex=null,t===null)throw jm(new Mm);for(dh(this,e.b6);this.j();){var n=this.dx.eW(this.br);t.ek(t.c3,this.dx.dk(this.br),this.dx.cB(this.br),n,Yc().bW(n),0),this.br=1+this.br|0}}I=v_.prototype=new _h,I.constructor=v_,I.h=(function(){return Lf().P.h()}),new z().i(v_,`scala.collection.immutable.HashMapBuilder$$anon$1`,{eP:1,bt:1,s:1,b:1,c:1,t:1});function y_(e){return!!(e&&e.$classData&&e.$classData.n.r)}function b_(e){if(this.cX=0,this.e8=null,e===null)throw jm(new Mm);Lh(this,e)}I=b_.prototype=new zh,I.constructor=b_,new z().i(b_,`scala.collection.immutable.Map$Map2$$anon$1`,{f6:1,f7:1,s:1,b:1,c:1,t:1});function x_(e){if(this.cZ=0,this.cY=null,e===null)throw jm(new Mm);Bh(this,e)}I=x_.prototype=new Hh,I.constructor=x_,new z().i(x_,`scala.collection.immutable.Map$Map3$$anon$4`,{f8:1,f9:1,s:1,b:1,c:1,t:1});function S_(e){if(this.d0=0,this.c5=null,e===null)throw jm(new Mm);Uh(this,e)}I=S_.prototype=new Gh,I.constructor=S_,new z().i(S_,`scala.collection.immutable.Map$Map4$$anon$7`,{fa:1,fb:1,s:1,b:1,c:1,t:1});function C_(e){this.cT=0,this.fm=null,this.bs=0,this.ey=null,this.ez=null,this.gl=0,this.jd=null,yh(this,e),this.gl=0}I=C_.prototype=new Th,I.constructor=C_,I.w=(function(){return q().kF(this.gl,G().J(this.jd),-889275714)}),I.mU=(function(){return this.j()||Lf().P.h(),this.gl=this.fm.eW(this.cT),this.jd=this.fm.cB(this.cT),this.cT=this.cT-1|0,this}),I.h=(function(){return this.mU()}),new z().i(C_,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fd:1,eM:1,s:1,b:1,c:1,t:1});function w_(e){this.br=0,this.ew=0,this.dx=null,this.bf=0,this.cl=null,this.ex=null,dh(this,e)}I=w_.prototype=new _h,I.constructor=w_,I.mT=(function(){this.j()||Lf().P.h();var e=this.dx.kh(this.br);return this.br=1+this.br|0,e}),I.h=(function(){return this.mT()}),new z().i(w_,`scala.collection.immutable.MapKeyValueTupleIterator`,{fe:1,bt:1,s:1,b:1,c:1,t:1});function T_(e){e.bk<=e.ao&&Lf().P.h(),e.d2=1+e.d2|0;for(var t=e.gn.cc(e.d2);t.a.length===0;)e.d2=1+e.d2|0,t=e.gn.cc(e.d2);e.eB=e.dB;var n=e.jf,r=e.d2,i=(n+(n>>>31|0)|0)>>1,a=r-i|0,o=a>>31;e.d1=(1+i|0)-((a^o)-o|0)|0;var s=e.d1;switch(s){case 1:e.aI=t;break;case 2:e.aJ=t;break;case 3:e.b7=t;break;case 4:e.bU=t;break;case 5:e.dA=t;break;case 6:e.gm=t;break;default:throw new zm(s)}e.dB=e.eB+Math.imul(t.a.length,1<<Math.imul(5,e.d1-1|0))|0,e.dB>e.cr&&(e.dB=e.cr),e.d1>1&&(e.e9=(1<<Math.imul(5,e.d1))-1|0)}function E_(e){var t=(e.ao-e.bk|0)+e.cr|0;if(t===e.dB&&T_(e),e.d1>1){var n=t-e.eB|0;D_(e,n,e.e9^n),e.e9=n}e.bk=e.bk-e.ao|0;var r=e.aI.a.length,i=e.bk;e.cq=r<i?r:i,e.ao=0}function D_(e,t,n){n<1024?e.aI=e.aJ.a[31&(t>>>5|0)]:n<32768?(e.aJ=e.b7.a[31&(t>>>10|0)],e.aI=e.aJ.a[0]):n<1048576?(e.b7=e.bU.a[31&(t>>>15|0)],e.aJ=e.b7.a[0],e.aI=e.aJ.a[0]):n<33554432?(e.bU=e.dA.a[31&(t>>>20|0)],e.b7=e.bU.a[0],e.aJ=e.b7.a[0],e.aI=e.aJ.a[0]):(e.dA=e.gm.a[t>>>25|0],e.bU=e.dA.a[0],e.b7=e.bU.a[0],e.aJ=e.b7.a[0],e.aI=e.aJ.a[0])}function O_(e,t,n){n<1024?e.aI=e.aJ.a[31&(t>>>5|0)]:n<32768?(e.aJ=e.b7.a[31&(t>>>10|0)],e.aI=e.aJ.a[31&(t>>>5|0)]):n<1048576?(e.b7=e.bU.a[31&(t>>>15|0)],e.aJ=e.b7.a[31&(t>>>10|0)],e.aI=e.aJ.a[31&(t>>>5|0)]):n<33554432?(e.bU=e.dA.a[31&(t>>>20|0)],e.b7=e.bU.a[31&(t>>>15|0)],e.aJ=e.b7.a[31&(t>>>10|0)],e.aI=e.aJ.a[31&(t>>>5|0)]):(e.dA=e.gm.a[t>>>25|0],e.bU=e.dA.a[31&(t>>>20|0)],e.b7=e.bU.a[31&(t>>>15|0)],e.aJ=e.b7.a[31&(t>>>10|0)],e.aI=e.aJ.a[31&(t>>>5|0)])}function k_(e,t,n){this.gn=null,this.cr=0,this.jf=0,this.aI=null,this.aJ=null,this.b7=null,this.bU=null,this.dA=null,this.gm=null,this.cq=0,this.ao=0,this.e9=0,this.bk=0,this.d2=0,this.d1=0,this.eB=0,this.dB=0,this.gn=e,this.cr=t,this.jf=n,this.aI=e.b,this.cq=this.aI.a.length,this.ao=0,this.e9=0,this.bk=this.cr,this.d2=0,this.d1=1,this.eB=0,this.dB=this.cq}I=k_.prototype=new Rp,I.constructor=k_,I.s=(function(){return this.bk-this.ao|0}),I.j=(function(){return this.bk>this.ao}),I.h=(function(){this.ao===this.cq&&E_(this);var e=this.aI.a[this.ao];return this.ao=1+this.ao|0,e}),I.dj=(function(e){if(e>0){var t=((this.ao-this.bk|0)+this.cr|0)+e|0,n=this.cr,r=t<n?t:n;if(r===this.cr)this.ao=0,this.bk=0,this.cq=0;else{for(;r>=this.dB;)T_(this);var i=r-this.eB|0;this.d1>1&&(O_(this,i,this.e9^i),this.e9=i),this.cq=this.aI.a.length,this.ao=31&i,this.bk=this.ao+(this.cr-r|0)|0,this.cq>this.bk&&(this.cq=this.bk)}}return this}),I.bu=(function(e,t,n){for(var r=_c().bv(e),i=this.bk-this.ao|0,a=n<i?n:i,o=t<0?r:r-t|0,s=o<a?o:a,c=s<0?0:s,l=0,u=e instanceof R;l<c;){this.ao===this.cq&&E_(this);var d=c-l|0,f=this.aI.a.length-this.ao|0,p=d<f?d:f;if(u){var m=this.aI,h=this.ao,g=t+l|0;m.p(h,e,g,p)}else Ac().eS(this.aI,this.ao,e,t+l|0,p);this.ao=this.ao+p|0,l=l+p|0}return c}),new z().i(k_,`scala.collection.immutable.NewVectorIterator`,{fg:1,s:1,b:1,c:1,t:1,z:1});function A_(e){return e.gr=0,e.jl=0,e}function j_(){this.gr=0,this.jl=0}I=j_.prototype=new L,I.constructor=j_;function M_(){}M_.prototype=I,I.aX=(function(e){this.gr<e&&this.nc(e)});function N_(){this.gt=null,this.jn=null,P_=this,this.gt=new Um(this),this.jn=new Zb(new R(0))}I=N_.prototype=new L,I.constructor=N_,I.mf=(function(e,t){return this.gY(Ac().ka(e,t))}),I.fH=(function(e){return new tm(new J((e=>this.gY(e))),new W_(e.aF()))}),I.gY=(function(e){if(e===null)return null;if(e instanceof R)return new Zb(e);if(e instanceof pa)return new Yb(e);if(e instanceof ga)return new qb(e);if(e instanceof ma)return new Xb(e);if(e instanceof ha)return new Jb(e);if(e instanceof ua)return new Kb(e);if(e instanceof da)return new Gb(e);if(e instanceof fa)return new Qb(e);if(e instanceof la)return new Wb(e);if(fc(e,1))return new $b(e);throw new zm(e)}),I.gM=(function(e,t){return this.mf(e,t)}),new z().i(N_,`scala.collection.mutable.ArraySeq$`,{fI:1,a:1,ba:1,b8:1,b9:1,bg:1});var P_;function F_(){return P_||=new N_,P_}function I_(e){if(this.da=0,this.cu=null,this.eF=0,this.eE=null,e===null)throw jm(new Mm);fg(this,e)}I=I_.prototype=new mg,I.constructor=I_,I.gK=(function(e){return e.ed}),new z().i(I_,`scala.collection.mutable.HashSet$$anon$1`,{fO:1,aJ:1,s:1,b:1,c:1,t:1});function L_(e){if(this.da=0,this.cu=null,this.eF=0,this.eE=null,e===null)throw jm(new Mm);fg(this,e)}I=L_.prototype=new mg,I.constructor=L_,I.gK=(function(e){return e}),new z().i(L_,`scala.collection.mutable.HashSet$$anon$2`,{fP:1,aJ:1,s:1,b:1,c:1,t:1});function R_(e){if(this.da=0,this.cu=null,this.eF=0,this.eE=null,this.gw=0,this.jr=null,e===null)throw jm(new Mm);this.jr=e,fg(this,e),this.gw=0}I=R_.prototype=new mg,I.constructor=R_,I.w=(function(){return this.gw}),I.gK=(function(e){return this.gw=hb(this.jr,e.cv),this}),new z().i(R_,`scala.collection.mutable.HashSet$$anon$3`,{fQ:1,aJ:1,s:1,b:1,c:1,t:1});function z_(e){this.eH=null,this.eH=e}I=z_.prototype=new L,I.constructor=z_,I.r=(function(e){return Tg(this,e)}),I.w=(function(){return G().J(this.eH)}),I.B=(function(){return Eg(this,this.eH)}),I.aF=(function(){return this.eH}),I.bb=(function(e){return this.eH.a8.U(e)}),new z().i(z_,`scala.reflect.ClassTag$GenericClassTag`,{g7:1,a:1,O:1,N:1,d:1,C:1});function B_(){}I=B_.prototype=new ym,I.constructor=B_;function V_(){}V_.prototype=I;function H_(e){return e.bJ()+`(<not computed>)`}function U_(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function W_(e){this.gr=0,this.jl=0,this.ec=null,this.jm=!1,this.gs=null,this.ec=e,A_(this),this.jm=e===ya.l(),this.gs=[]}I=W_.prototype=new M_,I.constructor=W_,I.jL=(function(e){var t=this.jm?ia(e):e===null?Ml().fK(this.ec):e;return this.gs.push(t),this}),I.l8=(function(e){for(var t=e.i();t.j();)this.jL(t.h());return this}),I.nc=(function(e){}),I.aW=(function(){return Ml().fJ(this.ec===_a.l()?pc.l():this.ec===Ul.l()||this.ec===ip.l()?B.l():this.ec,this.gs)}),I.B=(function(){return`ArrayBuilder.generic`}),I.aP=(function(e){return this.jL(e)}),I.aV=(function(e){return this.l8(e)}),new z().i(W_,`scala.collection.mutable.ArrayBuilder$generic`,{fH:1,fF:1,D:1,F:1,K:1,a6:1,a:1});function G_(e,t){this.ge=null,this.ci=0,this.b3=0,this.jq=null,this.jp=0,this.jq=t,a_(this,e),this.jp=t.a6()|0}I=G_.prototype=new c_,I.constructor=G_,I.j=(function(){return Ll().jU(this.jp,this.jq.a6()|0,`mutation occurred during iteration`),this.b3>0}),new z().i(G_,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{fL:1,bc:1,s:1,b:1,c:1,t:1,a:1});function K_(){this.N=null}I=K_.prototype=new L,I.constructor=K_;function q_(){}q_.prototype=I,I.B=(function(){return this.N}),I.r=(function(e){return this===e}),I.w=(function(){return Xi(this)});function J_(){}I=J_.prototype=new L,I.constructor=J_;function Y_(){}Y_.prototype=I;var X_=class e extends Ap{constructor(e){super(),this.bH=null,this.bH=e,sd(this,null,null,!0,!0)}eX(){return Hi(this.bH)}cF(){return`JavaScriptException`}cD(){return 1}cE(e){return e===0?this.bH:G().mA(e)}ei(){return new Og(this)}w(){return q().h5(this,1744042595,!0)}r(t){return this===t||t instanceof e&&W().n(this.bH,t.bH)}};new z().i(X_,`scala.scalajs.js.JavaScriptException`,{bU:1,P:1,H:1,B:1,a:1,a8:1,d:1});function Z_(e,t){typeof console<`u`&&(e.iF&&console.error?console.error(t):console.log(t))}function Q_(e){this.iF=!1,this.en=null,this.iF=e,new km,this.en=``}I=Q_.prototype=new V_,I.constructor=Q_,I.mD=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.en=``+this.en+t,t=``;else{var r=this.en,i=t;Z_(this,``+r+i.substring(0,n)),this.en=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new z().i(Q_,`java.lang.JSConsoleBasedPrintStream`,{dE:1,dr:1,dq:1,aU:1,aS:1,aW:1,aT:1,aV:1});function $_(e,t,n){for(var r=n,i=t;;)if(i<=0||r.d())return r;else{var a=i-1|0,o=r.o();i=a,r=o}}function ev(e,t){if(e.bn(1)<=0)return e;for(var n=e.eY(),r=mb(new bb),i=e.i(),a=!1;i.j();){var o=i.h();r.fz(t.f(o))?n.aP(o):a=!0}return a?n.aW():e}function tv(){this.N=null}I=tv.prototype=new q_,I.constructor=tv;function nv(){}nv.prototype=I,I.aF=(function(){return va.l()}),I.bb=(function(e){return new la(e)});function rv(){this.N=null}I=rv.prototype=new q_,I.constructor=rv;function iv(){}iv.prototype=I,I.aF=(function(){return ba.l()}),I.bb=(function(e){return new da(e)});function av(){this.N=null}I=av.prototype=new q_,I.constructor=av;function ov(){}ov.prototype=I,I.aF=(function(){return ya.l()}),I.bb=(function(e){return new ua(e)});function sv(){this.N=null}I=sv.prototype=new q_,I.constructor=sv;function cv(){}cv.prototype=I,I.aF=(function(){return Ta.l()}),I.bb=(function(e){return new ga(e)});function lv(){this.N=null}I=lv.prototype=new q_,I.constructor=lv;function uv(){}uv.prototype=I,I.aF=(function(){return wa.l()}),I.bb=(function(e){return new ha(e)});function dv(){this.N=null}I=dv.prototype=new q_,I.constructor=dv;function fv(){}fv.prototype=I,I.aF=(function(){return Sa.l()}),I.bb=(function(e){return new pa(e)});function pv(){this.N=null}I=pv.prototype=new q_,I.constructor=pv;function mv(){}mv.prototype=I,I.aF=(function(){return Ca.l()}),I.bb=(function(e){return new ma(e)});function hv(){this.cx=null}I=hv.prototype=new Y_,I.constructor=hv;function gv(){}gv.prototype=I,I.B=(function(){return this.cx}),I.r=(function(e){return this===e}),I.w=(function(){return Xi(this)});function _v(){this.N=null}I=_v.prototype=new q_,I.constructor=_v;function vv(){}vv.prototype=I,I.aF=(function(){return xa.l()}),I.bb=(function(e){return new fa(e)});function yv(){this.N=null}I=yv.prototype=new q_,I.constructor=yv;function bv(){}bv.prototype=I,I.aF=(function(){return _a.l()}),I.bb=(function(e){return new(pc.r()).C(e)});function xv(){}I=xv.prototype=new r_,I.constructor=xv;function Sv(){}Sv.prototype=I,I.ba=(function(){return Uf()}),I.B=(function(){return H_(this)}),I.bc=(function(){return`View`});function Cv(e,t){if(e===t)return!0;if(wv(t)){if(e.aG()===t.aG())try{return e.nu(t)}catch(e){throw e}return!1}return!1}function wv(e){return!!(e&&e.$classData&&e.$classData.n.aB)}function Tv(){this.cx=null,this.cx=`Any`,$()}I=Tv.prototype=new gv,I.constructor=Tv,I.aF=(function(){return B.l()}),I.bb=(function(e){return new R(e)}),new z().i(Tv,`scala.reflect.ManifestFactory$AnyManifest$`,{g8:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var Ev;function Dv(){return Ev||=new Tv,Ev}function Ov(){this.N=null,this.N=`Boolean`}I=Ov.prototype=new nv,I.constructor=Ov,new z().i(Ov,`scala.reflect.ManifestFactory$BooleanManifest$`,{ga:1,g9:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var kv;function Av(){return kv||=new Ov,kv}function jv(){this.N=null,this.N=`Byte`}I=jv.prototype=new iv,I.constructor=jv,new z().i(jv,`scala.reflect.ManifestFactory$ByteManifest$`,{gc:1,gb:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Mv;function Nv(){return Mv||=new jv,Mv}function Pv(){this.N=null,this.N=`Char`}I=Pv.prototype=new ov,I.constructor=Pv,new z().i(Pv,`scala.reflect.ManifestFactory$CharManifest$`,{ge:1,gd:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Fv;function Iv(){return Fv||=new Pv,Fv}function Lv(){this.N=null,this.N=`Double`}I=Lv.prototype=new cv,I.constructor=Lv,new z().i(Lv,`scala.reflect.ManifestFactory$DoubleManifest$`,{gg:1,gf:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Rv;function zv(){return Rv||=new Lv,Rv}function Bv(){this.N=null,this.N=`Float`}I=Bv.prototype=new uv,I.constructor=Bv,new z().i(Bv,`scala.reflect.ManifestFactory$FloatManifest$`,{gi:1,gh:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Vv;function Hv(){return Vv||=new Bv,Vv}function Uv(){this.N=null,this.N=`Int`}I=Uv.prototype=new fv,I.constructor=Uv,new z().i(Uv,`scala.reflect.ManifestFactory$IntManifest$`,{gk:1,gj:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var Wv;function Gv(){return Wv||=new Uv,Wv}function Kv(){this.N=null,this.N=`Long`}I=Kv.prototype=new mv,I.constructor=Kv,new z().i(Kv,`scala.reflect.ManifestFactory$LongManifest$`,{gm:1,gl:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var qv;function Jv(){return qv||=new Kv,qv}function Yv(){this.cx=null,this.cx=`Nothing`,$()}I=Yv.prototype=new gv,I.constructor=Yv,I.aF=(function(){return ip.l()}),I.bb=(function(e){return new(ip.r()).C(e)}),new z().i(Yv,`scala.reflect.ManifestFactory$NothingManifest$`,{gn:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var Xv;function Zv(){return Xv||=new Yv,Xv}function Qv(){this.cx=null,this.cx=`Null`,$()}I=Qv.prototype=new gv,I.constructor=Qv,I.aF=(function(){return Ul.l()}),I.bb=(function(e){return new(Ul.r()).C(e)}),new z().i(Qv,`scala.reflect.ManifestFactory$NullManifest$`,{go:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var $v;function ey(){return $v||=new Qv,$v}function ty(){this.cx=null,this.cx=`Object`,$()}I=ty.prototype=new gv,I.constructor=ty,I.aF=(function(){return B.l()}),I.bb=(function(e){return new R(e)}),new z().i(ty,`scala.reflect.ManifestFactory$ObjectManifest$`,{gp:1,as:1,ar:1,a:1,O:1,N:1,d:1,C:1,S:1});var ny;function ry(){return ny||=new ty,ny}function iy(){this.N=null,this.N=`Short`}I=iy.prototype=new vv,I.constructor=iy,new z().i(iy,`scala.reflect.ManifestFactory$ShortManifest$`,{gr:1,gq:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var ay;function oy(){return ay||=new iy,ay}function sy(){this.N=null,this.N=`Unit`}I=sy.prototype=new bv,I.constructor=sy,new z().i(sy,`scala.reflect.ManifestFactory$UnitManifest$`,{gt:1,gs:1,a0:1,a:1,O:1,N:1,d:1,C:1,S:1});var cy;function ly(){return cy||=new sy,cy}function uy(e,t){return e===t?!0:dy(t)&&t.fD(e)?e.ej(t):!1}function dy(e){return!!(e&&e.$classData&&e.$classData.n.m)}function fy(e){this.j5=null,this.j5=e}I=fy.prototype=new Sv,I.constructor=fy,I.i=(function(){return this.j5.a6()}),new z().i(fy,`scala.collection.View$$anon$1`,{eH:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function py(e,t){this.fl=null,this.j6=null,this.fl=e,this.j6=t}I=py.prototype=new Sv,I.constructor=py,I.i=(function(){var e=this.fl.i();return new Jm(this.j6,e)}),I.s=(function(){return this.fl.s()===0?0:-1}),I.d=(function(){return this.fl.d()}),new z().i(py,`scala.collection.View$DistinctBy`,{eI:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1});function my(){}I=my.prototype=new r_,I.constructor=my;function hy(){}hy.prototype=I,I.nu=(function(e){return this.eg(e)}),I.r=(function(e){return Cv(this,e)}),I.bc=(function(){return`Set`}),I.B=(function(){return Wm(this)}),I.f=(function(e){return this.bV(e)});function gy(e,t){if(e===t)return!0;if(_y(t)){if(e.aG()===t.aG())try{return e.eg(new J((e=>(t=>W().n(e.dl(t.aZ,new np((()=>Vp().j3.a6()))),t.aR)))(t)))}catch(e){throw e}return!1}return!1}function _y(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function vy(){}I=vy.prototype=new r_,I.constructor=vy;function yy(){}yy.prototype=I,I.c9=(function(e){return Kp(this,e)}),I.bn=(function(e){return jf(this,e)}),I.d=(function(){return qp(this)}),I.ej=(function(e){return Jp(this,e)}),I.fD=(function(e){return!0}),I.r=(function(e){return uy(this,e)}),I.w=(function(){return q().kA(this)}),I.B=(function(){return Wm(this)});function by(){}I=by.prototype=new Sv,I.constructor=by;function xy(){}xy.prototype=I,I.c9=(function(e){return Kp(this,e)}),I.bn=(function(e){return jf(this,e)}),I.d=(function(){return qp(this)}),I.bc=(function(){return`SeqView`});function Sy(e){return!!(e&&e.$classData&&e.$classData.n.o)}function Cy(e){return!!(e&&e.$classData&&e.$classData.n.am)}function wy(){}I=wy.prototype=new r_,I.constructor=wy;function Ty(){}Ty.prototype=I,I.dJ=(function(e){u_(this,e)}),I.dd=(function(e,t,n,r){return d_(this,e,t,n,r)}),I.eV=(function(e){return this.kn().as(e)}),I.r=(function(e){return gy(this,e)}),I.w=(function(){return q().mM(this)}),I.bc=(function(){return`Map`}),I.B=(function(){return Wm(this)});function Ey(e,t){return e.dv=t,e}function Dy(){this.dv=null}I=Dy.prototype=new xy,I.constructor=Dy;function Oy(){}Oy.prototype=I,I.q=(function(e){return this.dv.q(e)}),I.k=(function(){return this.dv.k()}),I.i=(function(){return this.dv.i()}),I.s=(function(){return this.dv.s()}),I.d=(function(){return this.dv.d()}),new z().i(Dy,`scala.collection.SeqView$Id`,{bf:1,ax:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1});function ky(){this.hv=null,this.hw=!1,this.hC=null,this.hD=!1,this.hy=null,this.hz=!1,this.hA=null,this.hB=!1,this.hx=null,this.cI=null,this.hE=null,this.hF=!1,this.kK=null,this.ht=null,this.hu=!1,this.hG=null,this.hH=!1,No(this),Oo(this),Eo(this),Do(this)}I=ky.prototype=new L,I.constructor=ky,I.lz=(function(){return this.hw||=(this.hv=Au(new ju,`button`,!1),!0),this.hv}),I.mZ=(function(){return this.hD||=(this.hC=Au(new ju,`p`,!1),!0),this.hC}),I.ax=(function(){return this.hz||=(this.hy=Au(new ju,`div`,!1),!0),this.hy}),I.kj=(function(){return this.hB||=(this.hA=new bu(`id`,Mo().ce),!0),this.hA}),I.ns=(function(){return this.hF||=(this.hE=_u(new vu,`style`,Mo().ce),!0),this.hE}),I.l5=(function(){return this.hu||=(this.ht=new gu(this),!0),this.ht}),I.nv=(function(){return this.hH||=(this.hG=new _p(this),!0),this.hG}),new z().i(ky,`com.raquo.laminar.api.package$$anon$1`,{cp:1,cB:1,cu:1,cz:1,cy:1,cA:1,cw:1,cn:1,cj:1,cm:1,aM:1,aN:1,aL:1,ck:1});function Ay(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function jy(){}I=jy.prototype=new xy,I.constructor=jy;function My(){}My.prototype=I,I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.bc=(function(){return`IndexedSeqView`});function Ny(e){this.dv=null,Ey(this,e)}I=Ny.prototype=new Oy,I.constructor=Ny,I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.i=(function(){return a_(new s_,this)}),I.bc=(function(){return`IndexedSeqView`}),new z().i(Ny,`scala.collection.IndexedSeqView$Id`,{eq:1,bf:1,ax:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1,p:1,bb:1});function Py(){}I=Py.prototype=new yy,I.constructor=Py;function Fy(){}Fy.prototype=I;function Iy(e,t){this.gq=null,this.jk=null,this.gq=e,this.jk=t}I=Iy.prototype=new My,I.constructor=Iy,I.q=(function(e){return this.gq.q(e)}),I.k=(function(){return this.gq.aU}),I.bJ=(function(){return`ArrayBufferView`}),I.i=(function(){return new G_(this,this.jk)}),new z().i(Iy,`scala.collection.mutable.ArrayBufferView`,{fE:1,ej:1,ax:1,al:1,i:1,b:1,c:1,h:1,g:1,e:1,a:1,a9:1,l:1,aA:1,p:1,bb:1});function Ly(){}I=Ly.prototype=new Ty,I.constructor=Ly;function Ry(){}Ry.prototype=I,I.ba=(function(){return Qp()}),I.kn=(function(){return Zf()});function zy(e,t){return!Vy(t)||e.k()===t.k()}function By(e,t){if(Vy(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.fB(),o=t.fB(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=W().n(e.q(i),t.q(i)),i=1+i|0;if(i<n&&r)for(var p=e.i().dj(i),m=t.i().dj(i);r&&p.j();)r=W().n(p.h(),m.h())}return r}return Jp(e,t)}function Vy(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Hy(e,t){return e.bN=t,e}function Uy(){this.bN=null}I=Uy.prototype=new Fy,I.constructor=Uy;function Wy(){}Wy.prototype=I;function Gy(){}I=Gy.prototype=new yy,I.constructor=Gy;function Ky(){}Ky.prototype=I;function qy(){}I=qy.prototype=new Ry,I.constructor=qy,I.aG=(function(){return 0}),I.s=(function(){return 0}),I.d=(function(){return!0}),I.gD=(function(e){throw new Im(`key not found: `+e)}),I.bV=(function(e){return!1}),I.dl=(function(e,t){return t.a6()}),I.i=(function(){return Lf().P}),I.f=(function(e){this.gD(e)}),I.dp=(function(e,t){return new Xy(e,t)}),new z().i(qy,`scala.collection.immutable.Map$EmptyMap$`,{f5:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,a:1});var Jy;function Yy(){return Jy||=new qy,Jy}function Xy(e,t){this.c4=null,this.dy=null,this.c4=e,this.dy=t}I=Xy.prototype=new Ry,I.constructor=Xy,I.aG=(function(){return 1}),I.s=(function(){return 1}),I.d=(function(){return!1}),I.f=(function(e){if(W().n(e,this.c4))return this.dy;throw new Im(`key not found: `+e)}),I.bV=(function(e){return W().n(e,this.c4)}),I.dl=(function(e,t){return W().n(e,this.c4)?this.dy:t.a6()}),I.i=(function(){return new qm(new Z(this.c4,this.dy))}),I.dM=(function(e,t){return W().n(e,this.c4)?new Xy(this.c4,t):new Zy(this.c4,this.dy,e,t)}),I.eg=(function(e){return!!e.f(new Z(this.c4,this.dy))}),I.w=(function(){var e=0,t=0,n=1,r=q().c1(this.c4,this.dy);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cC(r,n),q().aD(r,1)}),I.dp=(function(e,t){return this.dM(e,t)}),new z().i(Xy,`scala.collection.immutable.Map$Map1`,{bx:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,k:1,a:1});function Zy(e,t,n,r){this.bO=null,this.cV=null,this.bP=null,this.cW=null,this.bO=e,this.cV=t,this.bP=n,this.cW=r}I=Zy.prototype=new Ry,I.constructor=Zy,I.aG=(function(){return 2}),I.s=(function(){return 2}),I.d=(function(){return!1}),I.f=(function(e){if(W().n(e,this.bO))return this.cV;if(W().n(e,this.bP))return this.cW;throw new Im(`key not found: `+e)}),I.bV=(function(e){return W().n(e,this.bO)||W().n(e,this.bP)}),I.dl=(function(e,t){return W().n(e,this.bO)?this.cV:W().n(e,this.bP)?this.cW:t.a6()}),I.i=(function(){return new b_(this)}),I.dM=(function(e,t){return W().n(e,this.bO)?new Zy(this.bO,t,this.bP,this.cW):W().n(e,this.bP)?new Zy(this.bO,this.cV,this.bP,t):new Qy(this.bO,this.cV,this.bP,this.cW,e,t)}),I.eg=(function(e){return!!e.f(new Z(this.bO,this.cV))&&!!e.f(new Z(this.bP,this.cW))}),I.w=(function(){var e=0,t=0,n=1,r=q().c1(this.bO,this.cV);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bP,this.cW),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cC(r,n),q().aD(r,2)}),I.dp=(function(e,t){return this.dM(e,t)}),new z().i(Zy,`scala.collection.immutable.Map$Map2`,{by:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,k:1,a:1});function Qy(e,t,n,r,i,a){this.bA=null,this.cm=null,this.bB=null,this.cn=null,this.bC=null,this.co=null,this.bA=e,this.cm=t,this.bB=n,this.cn=r,this.bC=i,this.co=a}I=Qy.prototype=new Ry,I.constructor=Qy,I.aG=(function(){return 3}),I.s=(function(){return 3}),I.d=(function(){return!1}),I.f=(function(e){if(W().n(e,this.bA))return this.cm;if(W().n(e,this.bB))return this.cn;if(W().n(e,this.bC))return this.co;throw new Im(`key not found: `+e)}),I.bV=(function(e){return W().n(e,this.bA)||W().n(e,this.bB)||W().n(e,this.bC)}),I.dl=(function(e,t){return W().n(e,this.bA)?this.cm:W().n(e,this.bB)?this.cn:W().n(e,this.bC)?this.co:t.a6()}),I.i=(function(){return new x_(this)}),I.dM=(function(e,t){return W().n(e,this.bA)?new Qy(this.bA,t,this.bB,this.cn,this.bC,this.co):W().n(e,this.bB)?new Qy(this.bA,this.cm,this.bB,t,this.bC,this.co):W().n(e,this.bC)?new Qy(this.bA,this.cm,this.bB,this.cn,this.bC,t):new $y(this.bA,this.cm,this.bB,this.cn,this.bC,this.co,e,t)}),I.eg=(function(e){return!!e.f(new Z(this.bA,this.cm))&&!!e.f(new Z(this.bB,this.cn))&&!!e.f(new Z(this.bC,this.co))}),I.w=(function(){var e=0,t=0,n=1,r=q().c1(this.bA,this.cm);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bB,this.cn),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bC,this.co),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cC(r,n),q().aD(r,3)}),I.dp=(function(e,t){return this.dM(e,t)}),new z().i(Qy,`scala.collection.immutable.Map$Map3`,{bz:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,k:1,a:1});function $y(e,t,n,r,i,a,o,s){this.bg=null,this.bQ=null,this.bh=null,this.bR=null,this.bi=null,this.bS=null,this.bj=null,this.bT=null,this.bg=e,this.bQ=t,this.bh=n,this.bR=r,this.bi=i,this.bS=a,this.bj=o,this.bT=s}I=$y.prototype=new Ry,I.constructor=$y,I.aG=(function(){return 4}),I.s=(function(){return 4}),I.d=(function(){return!1}),I.f=(function(e){if(W().n(e,this.bg))return this.bQ;if(W().n(e,this.bh))return this.bR;if(W().n(e,this.bi))return this.bS;if(W().n(e,this.bj))return this.bT;throw new Im(`key not found: `+e)}),I.bV=(function(e){return W().n(e,this.bg)||W().n(e,this.bh)||W().n(e,this.bi)||W().n(e,this.bj)}),I.dl=(function(e,t){return W().n(e,this.bg)?this.bQ:W().n(e,this.bh)?this.bR:W().n(e,this.bi)?this.bS:W().n(e,this.bj)?this.bT:t.a6()}),I.i=(function(){return new S_(this)}),I.dM=(function(e,t){return W().n(e,this.bg)?new $y(this.bg,t,this.bh,this.bR,this.bi,this.bS,this.bj,this.bT):W().n(e,this.bh)?new $y(this.bg,this.bQ,this.bh,t,this.bi,this.bS,this.bj,this.bT):W().n(e,this.bi)?new $y(this.bg,this.bQ,this.bh,this.bR,this.bi,t,this.bj,this.bT):W().n(e,this.bj)?new $y(this.bg,this.bQ,this.bh,this.bR,this.bi,this.bS,this.bj,t):Jf().fn.el(this.bg,this.bQ).el(this.bh,this.bR).el(this.bi,this.bS).el(this.bj,this.bT).el(e,t)}),I.eg=(function(e){return!!e.f(new Z(this.bg,this.bQ))&&!!e.f(new Z(this.bh,this.bR))&&!!e.f(new Z(this.bi,this.bS))&&!!e.f(new Z(this.bj,this.bT))}),I.ly=(function(e){return e.dF(this.bg,this.bQ).dF(this.bh,this.bR).dF(this.bi,this.bS).dF(this.bj,this.bT)}),I.w=(function(){var e=0,t=0,n=1,r=q().c1(this.bg,this.bQ);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bh,this.bR),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bi,this.bS),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c1(this.bj,this.bT),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().y(r,e),r=q().y(r,t),r=q().cC(r,n),q().aD(r,4)}),I.dp=(function(e,t){return this.dM(e,t)}),new z().i($y,`scala.collection.immutable.Map$Map4`,{bA:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,k:1,a:1});function eb(){}I=eb.prototype=new hy,I.constructor=eb;function tb(){}tb.prototype=I,I.aW=(function(){return this});function Q(e){this.ft=null,this.ft=e}I=Q.prototype=new L,I.constructor=Q,I.c9=(function(e){return ev(this,e)}),I.bX=(function(e){return Yp(this,e)}),I.fD=(function(e){return zy(this,e)}),I.ej=(function(e){return By(this,e)}),I.fB=(function(){return fl().j9}),I.i=(function(){return a_(new s_,new Ny(this))}),I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.r=(function(e){return uy(this,e)}),I.w=(function(){return q().kA(this)}),I.B=(function(){return Wm(this)}),I.d=(function(){return qp(this)}),I.eY=(function(){return Pg().aQ()}),I.bK=(function(e){Xc(this,e)}),I.bu=(function(e,t,n){return $c(this,e,t,n)}),I.dd=(function(e,t,n,r){return tl(this,e,t,n,r)}),I.dm=(function(){return Pg()}),I.k=(function(){return this.ft.length|0}),I.q=(function(e){return this.ft[e]}),I.bJ=(function(){return`WrappedVarArgs`}),I.eU=(function(e){return Pg().gQ(e)}),I.f=(function(e){return this.q(e|0)}),I.ba=(function(){return Pg()}),new z().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bV:1,x:1,b:1,c:1,h:1,g:1,e:1,r:1,f:1,j:1,l:1,d:1,m:1,v:1,u:1,p:1,o:1,A:1,y:1,k:1,q:1,a:1});function nb(e){this.b6=null,this.b6=e}I=nb.prototype=new Ry,I.constructor=nb,I.kn=(function(){return Jf()}),I.s=(function(){return this.b6.aH}),I.aG=(function(){return this.b6.aH}),I.d=(function(){return this.b6.aH===0}),I.i=(function(){return this.d()?Lf().P:new w_(this.b6)}),I.bV=(function(e){var t=G().J(e),n=Yc().bW(t);return this.b6.gG(e,t,n,0)}),I.f=(function(e){var t=G().J(e),n=Yc().bW(t);return this.b6.gC(e,t,n,0)}),I.dl=(function(e,t){var n=G().J(e),r=Yc().bW(n);return this.b6.gS(e,n,r,0,t)}),I.el=(function(e,t){var n=G().J(e),r=this.b6.kG(e,t,n,Yc().bW(n),0,!0);return r===this.b6?this:new nb(r)}),I.dJ=(function(e){this.b6.dJ(e)}),I.r=(function(e){if(e instanceof nb){if(this===e)return!0;var t=this.b6,n=e.b6;return t===null?n===null:t.r(n)}return gy(this,e)}),I.w=(function(){if(this.d())return q().gz;var e=new C_(this.b6);return q().ha(e,q().dc)}),I.bJ=(function(){return`HashMap`}),I.dp=(function(e,t){return this.el(e,t)}),new z().i(nb,`scala.collection.immutable.HashMap`,{bv:1,ag:1,ac:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,ae:1,ad:1,d:1,a3:1,r:1,ah:1,a4:1,k:1,eE:1,fn:1,a:1,T:1});function rb(e,t){return Hy(e,t===hl()?null:t),e.b0=t===hl()?null:gd(),e}function ib(e,t,n){return rb(e,hl()),e.b0=t,e.bN=n,e}function ab(e){for(;e.b0===gd();){var t=e.bN;if(t instanceof od&&lb(e),Pc(t)){X().kw();var n=oc().iI;if(e.bN===t){e.bN=n;var r=!0}else var r=!1;if(r){var i=null;try{var a=ob(t.a6())}catch(e){i=e instanceof cd?e:new X_(e);var a=null}if(i===null){a===null&&Kl().bZ();var o=a.bN}else var o=t;if(X().kw(),e.bN,e.bN=o,i===null&&(a===null&&Kl().bZ(),e.b0=a.b0),i!==null){var s=i;s===null&&Kl().bZ();var c=s;throw c instanceof X_?c.bH:c}continue}}}}function ob(e){for(;;)if(e.b0!==gd())return e.bN===null?X().L:e;else ab(e)}function sb(e,t){return X(),rb(new ub,new np((()=>ob(e)===X().L?X().L:(X(),ib(new ub,t.f(e.u()),sb(e.aY(),t))))))}function cb(e,t,n,r,i){if(t.m=``+t.m+n,e.b0===gd())t.m+=`<not computed>`;else if(ob(e)!==X().L){var a=e.u();t.m=``+t.m+a;var o=e,s=e.aY();if(o!==s){o=s;var c=s;if(c.b0!==gd()&&ob(c)!==X().L)for(s=s.aY();;){if(o!==s)var l=s,u=l.b0!==gd()&&ob(l)!==X().L;else var u=!1;if(u){var d=o;t.m=``+t.m+r;var f=d.u();t.m=``+t.m+f,o=o.aY(),s=s.aY();var p=s;p.b0!==gd()&&ob(p)!==X().L&&(s=s.aY())}else break}}var m=s;if(m.b0===gd()||ob(m)===X().L){for(;o!==s;){var h=o;t.m=``+t.m+r;var g=h.u();t.m=``+t.m+g,o=o.aY()}o.b0===gd()&&(t.m=``+t.m+r,t.m+=`<not computed>`)}else{if(o!==e){for(var _=e;_!==s;)_=_.aY(),s=s.aY();for(;;){var v=o.aY();if(v!==s){var y=o;t.m=``+t.m+r;var b=y.u();t.m=``+t.m+b}if(o=v,o===s)break}}t.m=``+t.m+r,t.m+=`<cycle>`}}return t.m=``+t.m+i,t}function lb(e){throw kp(new Ap,`LazyList evaluation depends on its own result (self-reference); see docs for more info`)}function ub(){this.bN=null,this.b0=null}I=ub.prototype=new Wy,I.constructor=ub,I.k=(function(){return nh(this)}),I.bn=(function(e){return rh(this,e)}),I.q=(function(e){return ih(this,e)}),I.ej=(function(e){return ah(this,e)}),I.bc=(function(){return`LinearSeq`}),I.d=(function(){return ob(this)===X().L}),I.s=(function(){return this.b0!==gd()&&ob(this)===X().L?0:-1}),I.u=(function(){if(ob(this)===X().L)throw new Im(`head of empty lazy list`);return this.b0}),I.aY=(function(){if(ob(this)===X().L)throw new Pm(`tail of empty lazy list`);return this.bN}),I.md=(function(){var e=this,t=this;for(ob(e)!==X().L&&(e=e.aY());t!==e;){if(ob(e)===X().L||(e=e.aY(),ob(e)===X().L)||(e=e.aY(),e===t))return this;t=t.aY()}return this}),I.i=(function(){return this.b0!==gd()&&ob(this)===X().L?Lf().P:new Nh(this)}),I.bK=(function(e){for(var t=this;;)if(ob(t)!==X().L)e.f(t.u()),t=t.aY();else return}),I.bJ=(function(){return`LazyList`}),I.mI=(function(e){return this.b0!==gd()&&ob(this)===X().L?X().L:sb(this,e)}),I.lU=(function(e){return e<=0?this:this.b0!==gd()&&ob(this)===X().L?X().L:X().nh(this,e)}),I.dd=(function(e,t,n,r){return this.md(),cb(this,e.aO,t,n,r),e}),I.B=(function(){return cb(this,Mp(new Np,`LazyList`),`(`,`, `,`)`).m}),I.ba=(function(){return X()}),I.o=(function(){return this.aY()}),I.bX=(function(e){return this.mI(e)}),I.k2=(function(e){return this.lU(e)}),I.f=(function(e){return ih(this,e|0)}),new z().i(ub,`scala.collection.immutable.LazyList`,{bw:1,eZ:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,a:1,ay:1,am:1,aD:1,aC:1});function db(){}I=db.prototype=new Ky,I.constructor=db;function fb(){}fb.prototype=I,I.aV=(function(e){return yd(this,e)});function pb(e,t,n){return e.gu=n,e.aM=new(Pl.r()).C(vb(e,t)),e.gv=yb(e,e.aM.a.length),e.d9=0,e}function mb(e){return pb(e,16,.75),e}function hb(e,t){return t^(t>>>16|0)}function gb(e,t,n){var r=n&(e.aM.a.length-1|0);matchResult4:{var i=e.aM.a[r];if(i===null){e.aM.a[r]=new Nl(t,n,null);break matchResult4}for(var a=null,o=i;o!==null&&o.cv<=n;){if(o.cv===n&&W().n(t,o.ed))return!1;a=o,o=o.aN}if(a===null)e.aM.a[r]=new Nl(t,n,i);else{var s=a;s.aN=new Nl(t,n,a.aN)}}return e.d9=1+e.d9|0,!0}function _b(e,t){var n=e.aM.a.length;if(e.gv=yb(e,t),e.d9===0)e.aM=new(Pl.r()).C(t);else{e.aM=H().O(e.aM,t);for(var r=new Nl(null,0,null),i=new Nl(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aM.a[a];if(o!==null){r.aN=null,i.aN=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aN;if((l.cv&n)===0){var d=s;d.aN=l,s=l}else{var f=c;f.aN=l,c=l}l=u}var p=s;if(p.aN=null,o!==r.aN&&(e.aM.a[a]=r.aN),i.aN!==null){e.aM.a[a+n|0]=i.aN;var m=c;m.aN=null}}a=1+a|0}n<<=1}}}function vb(e,t){var n=t-1|0,r=n>4?n:4,i=(-2147483648>>Math.clz32(r)&r)<<1;return i<1073741824?i:1073741824}function yb(e,t){return Wi(t*e.gu)}function bb(){this.gu=0,this.aM=null,this.gv=0,this.d9=0}I=bb.prototype=new tb,I.constructor=bb,I.aG=(function(){return this.d9}),I.bV=(function(e){var t=hb(this,G().J(e));matchResult1:{var n,r=this.aM.a[t&(this.aM.a.length-1|0)];if(r===null){var n=null;break matchResult1}var n=r.ma(e,t)}return n!==null}),I.aX=(function(e){var t=vb(this,Wi((1+e|0)/this.gu));t>this.aM.a.length&&_b(this,t)}),I.fz=(function(e){return(1+this.d9|0)>=this.gv&&_b(this,this.aM.a.length<<1),gb(this,e,hb(this,G().J(e)))}),I.jK=(function(e){if(Qf(this,e,0),e instanceof bb){for(var t=new L_(e);t.j();){var n=t.h();gb(this,n.ed,n.cv)}return this}return yd(this,e)}),I.i=(function(){return new I_(this)}),I.ba=(function(){return tp()}),I.s=(function(){return this.d9}),I.d=(function(){return this.d9===0}),I.bJ=(function(){return`HashSet`}),I.w=(function(){var e=new I_(this),t=e.j()?new R_(this):e;return q().ha(t,q().jD)}),I.aV=(function(e){return this.jK(e)}),I.aP=(function(e){return this.fz(e),this}),new z().i(bb,`scala.collection.mutable.HashSet`,{bN:1,fB:1,ek:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,eC:1,d:1,aB:1,G:1,z:1,E:1,D:1,F:1,K:1,aq:1,g1:1,g0:1,k:1,a:1});function xb(){}I=xb.prototype=new Fy,I.constructor=xb;function Sb(){}Sb.prototype=I,I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.bc=(function(){return`IndexedSeq`}),I.fD=(function(e){return zy(this,e)}),I.ej=(function(e){return By(this,e)}),I.c9=(function(e){return ev(this,e)}),I.eV=(function(e){return __().gN(e,this.a7())}),I.eY=(function(){return __().fH(this.a7())}),I.dm=(function(){return __().gi}),I.mH=(function(e){for(var t=new R(this.k()),n=0;n<t.a.length;)t.a[n]=e.f(this.q(n)),n=1+n|0;return __().hb(t)}),I.bJ=(function(){return`ArraySeq`}),I.bu=(function(e,t,n){var r=this.k(),i=_c().bv(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ac().eS(this.cb(),0,e,t,c),c}),I.fB=(function(){return 2147483647}),I.ba=(function(){return __().gi}),I.bX=(function(e){return this.mH(e)}),I.eU=(function(e){return __().gN(e,this.a7())});function Cb(e,t){return e.b=t,e}function wb(){this.b=null}I=wb.prototype=new Fy,I.constructor=wb;function Tb(){}Tb.prototype=I,I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.bc=(function(){return`IndexedSeq`}),I.fD=(function(e){return zy(this,e)}),I.ej=(function(e){return By(this,e)}),I.c9=(function(e){return ev(this,e)}),I.dm=(function(){return Yh()}),I.k=(function(){return this instanceof tx?this.g:this.b.a.length}),I.i=(function(){return this===lx()?Yh().jh:new k_(this,this.k(),this.cd())}),I.bJ=(function(){return`Vector`}),I.bu=(function(e,t,n){return this.i().bu(e,t,n)}),I.fB=(function(){return Yh().jg}),I.ay=(function(e){return ll().gW(e,this.k()-1|0)}),I.bK=(function(e){for(var t=this.cd(),n=0;n<t;){var r=U(),i=n,a=(t+(t>>>31|0)|0)>>1,o=i-a|0,s=o>>31;r.gL(((1+a|0)-((o^s)-s|0)|0)-1|0,this.cc(n),e),n=1+n|0}}),I.ba=(function(){return Yh()});function Eb(){}I=Eb.prototype=new Ky,I.constructor=Eb;function Db(){}Db.prototype=I,I.bn=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),I.s=(function(){return this.k()}),I.bc=(function(){return`IndexedSeq`}),I.c9=(function(e){return f_(this,e)}),I.dm=(function(){return F_().gt}),I.kg=(function(e){var t=this.a7(),n=null,r=t.aF(),i=r===ya.l();n=[],e.s();for(var a=e.i();a.j();){var o=a.h(),s=i?ia(o):o===null?Ml().fK(r):o;n.push(s)}return F_().gY(Ml().fJ(r===_a.l()?pc.l():r===Ul.l()||r===ip.l()?B.l():r,n))}),I.eY=(function(){return F_().fH(this.a7())}),I.bJ=(function(){return`ArraySeq`}),I.bu=(function(e,t,n){var r=this.k(),i=_c().bv(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ac().eS(this.bI(),0,e,t,c),c}),I.r=(function(e){return e instanceof Eb&&_c().bv(this.bI())!==_c().bv(e.bI())?!1:uy(this,e)}),I.ba=(function(){return F_().gt}),I.eV=(function(e){return this.kg(e)}),I.eU=(function(e){return this.kg(e)});function Ob(e){this.cM=null,this.cM=e}I=Ob.prototype=new Sb,I.constructor=Ob,I.k=(function(){return this.cM.a.length}),I.eR=(function(e){return this.cM.a[e]}),I.w=(function(){var e=q();return e.aC(this.cM,e.ac)}),I.r=(function(e){return e instanceof Ob?H().k8(this.cM,e.cM):uy(this,e)}),I.i=(function(){return new i_(this.cM)}),I.cb=(function(){return this.cM}),I.a7=(function(){return Av()}),I.q=(function(e){return this.eR(e)}),I.f=(function(e){return this.eR(e|0)}),new z().i(Ob,`scala.collection.immutable.ArraySeq$ofBoolean`,{bi:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function kb(e){this.cN=null,this.cN=e}I=kb.prototype=new Sb,I.constructor=kb,I.k=(function(){return this.cN.a.length}),I.eJ=(function(e){return this.cN.a[e]}),I.w=(function(){var e=q();return e.aC(this.cN,e.ac)}),I.r=(function(e){return e instanceof kb?H().k4(this.cN,e.cN):uy(this,e)}),I.i=(function(){return new i_(this.cN)}),I.cb=(function(){return this.cN}),I.a7=(function(){return Nv()}),I.q=(function(e){return this.eJ(e)}),I.f=(function(e){return this.eJ(e|0)}),new z().i(kb,`scala.collection.immutable.ArraySeq$ofByte`,{bj:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Ab(e){this.ck=null,this.ck=e}I=Ab.prototype=new Sb,I.constructor=Ab,I.k=(function(){return this.ck.a.length}),I.eK=(function(e){return this.ck.a[e]}),I.w=(function(){var e=q();return e.aC(this.ck,e.ac)}),I.r=(function(e){return e instanceof Ab?H().k5(this.ck,e.ck):uy(this,e)}),I.i=(function(){return new i_(this.ck)}),I.dd=(function(e,t,n,r){return new Kb(this.ck).dd(e,t,n,r)}),I.cb=(function(){return this.ck}),I.a7=(function(){return Iv()}),I.q=(function(e){return ta(this.eK(e))}),I.f=(function(e){return ta(this.eK(e|0))}),new z().i(Ab,`scala.collection.immutable.ArraySeq$ofChar`,{bk:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function jb(e){this.cO=null,this.cO=e}I=jb.prototype=new Sb,I.constructor=jb,I.k=(function(){return this.cO.a.length}),I.eL=(function(e){return this.cO.a[e]}),I.w=(function(){var e=q();return e.aC(this.cO,e.ac)}),I.r=(function(e){if(e instanceof jb){var t=this.cO,n=e.cO;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return uy(this,e)}),I.i=(function(){return new i_(this.cO)}),I.cb=(function(){return this.cO}),I.a7=(function(){return zv()}),I.q=(function(e){return this.eL(e)}),I.f=(function(e){return this.eL(e|0)}),new z().i(jb,`scala.collection.immutable.ArraySeq$ofDouble`,{bl:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Mb(e){this.cP=null,this.cP=e}I=Mb.prototype=new Sb,I.constructor=Mb,I.k=(function(){return this.cP.a.length}),I.eM=(function(e){return this.cP.a[e]}),I.w=(function(){var e=q();return e.aC(this.cP,e.ac)}),I.r=(function(e){if(e instanceof Mb){var t=this.cP,n=e.cP;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return uy(this,e)}),I.i=(function(){return new i_(this.cP)}),I.cb=(function(){return this.cP}),I.a7=(function(){return Hv()}),I.q=(function(e){return this.eM(e)}),I.f=(function(e){return this.eM(e|0)}),new z().i(Mb,`scala.collection.immutable.ArraySeq$ofFloat`,{bm:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Nb(e){this.cQ=null,this.cQ=e}I=Nb.prototype=new Sb,I.constructor=Nb,I.k=(function(){return this.cQ.a.length}),I.eN=(function(e){return this.cQ.a[e]}),I.w=(function(){var e=q();return e.aC(this.cQ,e.ac)}),I.r=(function(e){return e instanceof Nb?H().gI(this.cQ,e.cQ):uy(this,e)}),I.i=(function(){return new i_(this.cQ)}),I.cb=(function(){return this.cQ}),I.a7=(function(){return Gv()}),I.q=(function(e){return this.eN(e)}),I.f=(function(e){return this.eN(e|0)}),new z().i(Nb,`scala.collection.immutable.ArraySeq$ofInt`,{bn:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Pb(e){this.cR=null,this.cR=e}I=Pb.prototype=new Sb,I.constructor=Pb,I.k=(function(){return this.cR.a.length>>>1|0}),I.eO=(function(e){var t=this.cR.a,n=e<<1;return na(t[n],t[n+1|0])}),I.w=(function(){var e=q();return e.aC(this.cR,e.ac)}),I.r=(function(e){return e instanceof Pb?H().k6(this.cR,e.cR):uy(this,e)}),I.i=(function(){return new i_(this.cR)}),I.cb=(function(){return this.cR}),I.a7=(function(){return Jv()}),I.q=(function(e){return this.eO(e)}),I.f=(function(e){return this.eO(e|0)}),new z().i(Pb,`scala.collection.immutable.ArraySeq$ofLong`,{bo:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Fb(e){this.c2=null,this.c2=e}I=Fb.prototype=new Sb,I.constructor=Fb,I.a7=(function(){return Bl().jR(Ri(this.c2).a8.Q())}),I.k=(function(){return this.c2.a.length}),I.q=(function(e){return this.c2.a[e]}),I.w=(function(){var e=q();return e.aC(this.c2,e.ac)}),I.r=(function(e){return e instanceof Fb?Ac().k9(this.c2,e.c2):uy(this,e)}),I.i=(function(){return new i_(this.c2)}),I.cb=(function(){return this.c2}),I.f=(function(e){return this.q(e|0)}),new z().i(Fb,`scala.collection.immutable.ArraySeq$ofRef`,{bp:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Ib(e){this.cS=null,this.cS=e}I=Ib.prototype=new Sb,I.constructor=Ib,I.k=(function(){return this.cS.a.length}),I.eP=(function(e){return this.cS.a[e]}),I.w=(function(){var e=q();return e.aC(this.cS,e.ac)}),I.r=(function(e){return e instanceof Ib?H().k7(this.cS,e.cS):uy(this,e)}),I.i=(function(){return new i_(this.cS)}),I.cb=(function(){return this.cS}),I.a7=(function(){return oy()}),I.q=(function(e){return this.eP(e)}),I.f=(function(e){return this.eP(e|0)}),new z().i(Ib,`scala.collection.immutable.ArraySeq$ofShort`,{bq:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Lb(e){this.dw=null,this.dw=e}I=Lb.prototype=new Sb,I.constructor=Lb,I.k=(function(){return this.dw.a.length}),I.eQ=(function(e){}),I.w=(function(){var e=q();return e.aC(this.dw,e.ac)}),I.r=(function(e){return e instanceof Lb?this.dw.a.length===e.dw.a.length:uy(this,e)}),I.i=(function(){return new i_(this.dw)}),I.cb=(function(){return this.dw}),I.a7=(function(){return ly()}),I.q=(function(e){this.eQ(e)}),I.f=(function(e){this.eQ(e|0)}),new z().i(Lb,`scala.collection.immutable.ArraySeq$ofUnit`,{br:1,U:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,X:1,a:1});function Rb(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.o();a=o,i=s;continue}return-1}}function zb(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.d(),o=r.d();if(!(a||o)&&W().n(i.u(),r.u())){var s=i.o(),c=r.o();i=s,r=c;continue}return a&&o}}function Bb(){}I=Bb.prototype=new Fy,I.constructor=Bb;function Vb(){}Vb.prototype=I,I.q=(function(e){return ih(this,e)}),I.ej=(function(e){return ah(this,e)}),I.bc=(function(){return`LinearSeq`}),I.i=(function(){return new ch(this)}),I.c9=(function(e){return ev(this,e)}),I.dm=(function(){return Ih()}),I.jE=(function(e){if(this.d())return e;if(e.d())return this;for(var t=new ix(e.u(),this),n=t,r=e.o();!r.d();){var i=new ix(r.u(),this);n.an=i,n=i,r=r.o()}return t}),I.d=(function(){return this===$()}),I.h4=(function(e){if(e instanceof Bb)return this.jE(e);if(e.s()===0)return this;if(e instanceof bx&&this.d())return e.kD();var t=e.i();if(t.j()){for(var n=new ix(t.h(),this),r=n;t.j();){var i=new ix(t.h(),this);r.an=i,r=i}return n}return this}),I.jP=(function(e){return e instanceof Bb?e.jE(this):p_(this,e)}),I.mJ=(function(e){if(this===$())var t=$();else{for(var n=new ix(e.f(this.u()),$()),r=n,i=this.o();i!==$();){var a=new ix(e.f(i.u()),$());r.an=a,r=a,i=i.o()}var t=n}return t}),I.bK=(function(e){for(var t=this;!t.d();)e.f(t.u()),t=t.o()}),I.k=(function(){for(var e=this,t=0;!e.d();)t=1+t|0,e=e.o();return t}),I.bn=(function(e){return e<0?1:Rb(this,e,0,this)}),I.bV=(function(e){for(var t=this;!t.d();){if(W().n(t.u(),e))return!0;t=t.o()}return!1}),I.bJ=(function(){return`List`}),I.r=(function(e){return e instanceof Bb?zb(this,this,e):uy(this,e)}),I.ba=(function(){return Ih()}),I.bX=(function(e){return this.mJ(e)}),I.k2=(function(e){return $_(this,e,this)}),I.f=(function(e){return ih(this,e|0)});function Hb(){this.b=null}I=Hb.prototype=new Tb,I.constructor=Hb;function Ub(){}Ub.prototype=I;function Wb(e){this.d3=null,this.d3=e}I=Wb.prototype=new Db,I.constructor=Wb,I.k=(function(){return this.d3.a.length}),I.eR=(function(e){return this.d3.a[e]}),I.w=(function(){var e=q();return e.aC(this.d3,e.ac)}),I.r=(function(e){return e instanceof Wb?H().k8(this.d3,e.d3):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.d3)}),I.bI=(function(){return this.d3}),I.a7=(function(){return Av()}),I.q=(function(e){return this.eR(e)}),I.f=(function(e){return this.eR(e|0)}),new z().i(Wb,`scala.collection.mutable.ArraySeq$ofBoolean`,{bD:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Gb(e){this.d4=null,this.d4=e}I=Gb.prototype=new Db,I.constructor=Gb,I.k=(function(){return this.d4.a.length}),I.eJ=(function(e){return this.d4.a[e]}),I.w=(function(){var e=q();return e.aC(this.d4,e.ac)}),I.r=(function(e){return e instanceof Gb?H().k4(this.d4,e.d4):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.d4)}),I.bI=(function(){return this.d4}),I.a7=(function(){return Nv()}),I.q=(function(e){return this.eJ(e)}),I.f=(function(e){return this.eJ(e|0)}),new z().i(Gb,`scala.collection.mutable.ArraySeq$ofByte`,{bE:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Kb(e){this.bt=null,this.bt=e}I=Kb.prototype=new Db,I.constructor=Kb,I.k=(function(){return this.bt.a.length}),I.eK=(function(e){return this.bt.a[e]}),I.w=(function(){var e=q();return e.aC(this.bt,e.ac)}),I.r=(function(e){return e instanceof Kb?H().k5(this.bt,e.bt):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.bt)}),I.dd=(function(e,t,n,r){var i=e.aO;t.length!==0&&(i.m=``+i.m+t);var a=this.bt.a.length;if(a!==0){if(n===``)i.jN(this.bt);else{i.k();var o=this.bt.a[0],s=``+Gi(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.bt.a[c],u=``+Gi(l);i.m+=u,c=1+c|0}}}return r.length!==0&&(i.m=``+i.m+r),e}),I.bI=(function(){return this.bt}),I.a7=(function(){return Iv()}),I.q=(function(e){return ta(this.eK(e))}),I.f=(function(e){return ta(this.eK(e|0))}),new z().i(Kb,`scala.collection.mutable.ArraySeq$ofChar`,{bF:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function qb(e){this.bD=null,this.bD=e}I=qb.prototype=new Db,I.constructor=qb,I.k=(function(){return this.bD.a.length}),I.eL=(function(e){return this.bD.a[e]}),I.w=(function(){var e=q();return e.aC(this.bD,e.ac)}),I.r=(function(e){if(e instanceof qb){var t=e.bD;if(this.bD===t)return!0;if(this.bD.a.length===t.a.length){for(var n=0;n<this.bD.a.length&&this.bD.a[n]===t.a[n];)n=1+n|0;return n>=this.bD.a.length}return!1}return Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.bD)}),I.bI=(function(){return this.bD}),I.a7=(function(){return zv()}),I.q=(function(e){return this.eL(e)}),I.f=(function(e){return this.eL(e|0)}),new z().i(qb,`scala.collection.mutable.ArraySeq$ofDouble`,{bG:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Jb(e){this.bE=null,this.bE=e}I=Jb.prototype=new Db,I.constructor=Jb,I.k=(function(){return this.bE.a.length}),I.eM=(function(e){return this.bE.a[e]}),I.w=(function(){var e=q();return e.aC(this.bE,e.ac)}),I.r=(function(e){if(e instanceof Jb){var t=e.bE;if(this.bE===t)return!0;if(this.bE.a.length===t.a.length){for(var n=0;n<this.bE.a.length&&this.bE.a[n]===t.a[n];)n=1+n|0;return n>=this.bE.a.length}return!1}return Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.bE)}),I.bI=(function(){return this.bE}),I.a7=(function(){return Hv()}),I.q=(function(e){return this.eM(e)}),I.f=(function(e){return this.eM(e|0)}),new z().i(Jb,`scala.collection.mutable.ArraySeq$ofFloat`,{bH:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Yb(e){this.d5=null,this.d5=e}I=Yb.prototype=new Db,I.constructor=Yb,I.k=(function(){return this.d5.a.length}),I.eN=(function(e){return this.d5.a[e]}),I.w=(function(){var e=q();return e.aC(this.d5,e.ac)}),I.r=(function(e){return e instanceof Yb?H().gI(this.d5,e.d5):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.d5)}),I.bI=(function(){return this.d5}),I.a7=(function(){return Gv()}),I.q=(function(e){return this.eN(e)}),I.f=(function(e){return this.eN(e|0)}),new z().i(Yb,`scala.collection.mutable.ArraySeq$ofInt`,{bI:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Xb(e){this.d6=null,this.d6=e}I=Xb.prototype=new Db,I.constructor=Xb,I.k=(function(){return this.d6.a.length>>>1|0}),I.eO=(function(e){var t=this.d6.a,n=e<<1;return na(t[n],t[n+1|0])}),I.w=(function(){var e=q();return e.aC(this.d6,e.ac)}),I.r=(function(e){return e instanceof Xb?H().k6(this.d6,e.d6):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.d6)}),I.bI=(function(){return this.d6}),I.a7=(function(){return Jv()}),I.q=(function(e){return this.eO(e)}),I.f=(function(e){return this.eO(e|0)}),new z().i(Xb,`scala.collection.mutable.ArraySeq$ofLong`,{bJ:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Zb(e){this.ct=null,this.ct=e}I=Zb.prototype=new Db,I.constructor=Zb,I.a7=(function(){return Bl().jR(Ri(this.ct).a8.Q())}),I.k=(function(){return this.ct.a.length}),I.q=(function(e){return this.ct.a[e]}),I.w=(function(){var e=q();return e.aC(this.ct,e.ac)}),I.r=(function(e){return e instanceof Zb?Ac().k9(this.ct,e.ct):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.ct)}),I.bI=(function(){return this.ct}),I.f=(function(e){return this.q(e|0)}),new z().i(Zb,`scala.collection.mutable.ArraySeq$ofRef`,{bK:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function Qb(e){this.d7=null,this.d7=e}I=Qb.prototype=new Db,I.constructor=Qb,I.k=(function(){return this.d7.a.length}),I.eP=(function(e){return this.d7.a[e]}),I.w=(function(){var e=q();return e.aC(this.d7,e.ac)}),I.r=(function(e){return e instanceof Qb?H().k7(this.d7,e.d7):Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.d7)}),I.bI=(function(){return this.d7}),I.a7=(function(){return oy()}),I.q=(function(e){return this.eP(e)}),I.f=(function(e){return this.eP(e|0)}),new z().i(Qb,`scala.collection.mutable.ArraySeq$ofShort`,{bL:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function $b(e){this.dC=null,this.dC=e}I=$b.prototype=new Db,I.constructor=$b,I.k=(function(){return this.dC.a.length}),I.eQ=(function(e){}),I.w=(function(){var e=q();return e.aC(this.dC,e.ac)}),I.r=(function(e){return e instanceof $b?this.dC.a.length===e.dC.a.length:Eb.prototype.r.call(this,e)}),I.i=(function(){return new i_(this.dC)}),I.bI=(function(){return this.dC}),I.a7=(function(){return ly()}),I.q=(function(e){this.eQ(e)}),I.f=(function(e){this.eQ(e|0)}),new z().i($b,`scala.collection.mutable.ArraySeq$ofUnit`,{bM:1,V:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,p:1,o:1,R:1,Q:1,k:1,q:1,a:1});function ex(e,t,n,r){return e.e=n,e.g=r,Cb(e,t),e}function tx(){this.b=null,this.e=null,this.g=0}I=tx.prototype=new Ub,I.constructor=tx;function nx(){}nx.prototype=I;function rx(e){this.b=null,Cb(this,e)}I=rx.prototype=new Ub,I.constructor=rx,I.q=(function(e){if(e>=0&&e<this.b.a.length)return this.b.a[e];throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.b.a.length){var n=this.b.c();return n.a[e]=t,new rx(n)}throw this.ay(e)}),I.de=(function(e){if(this.b.a.length<32)return new rx(U().ee(this.b,e));var t=this.b,n=U().b9,r=new R(1);return r.a[0]=e,new ux(t,32,n,r,33)}),I.bY=(function(e){return new rx(U().bL(this.b,e))}),I.cd=(function(){return 1}),I.cc=(function(e){return this.b}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.b.a.length)return this.b.a[t];throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(rx,`scala.collection.immutable.Vector1`,{fr:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function ix(e,t){this.gh=null,this.an=null,this.gh=e,this.an=t}I=ix.prototype=new Vb,I.constructor=ix,I.ei=(function(){return new Hm(this)}),I.cD=(function(){return 2}),I.cF=(function(){return`::`}),I.cE=(function(e){if(e===0)return this.gh;if(e===1)return this.an;throw Dm(new Om,e)}),I.u=(function(){return this.gh}),I.o=(function(){return this.an}),new z().i(ix,`scala.collection.immutable.$colon$colon`,{eK:1,aE:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,ay:1,am:1,aD:1,aC:1,k:1,q:1,bh:1,y:1,a:1,T:1,a8:1});function ax(){ox=this,$(),$()}I=ax.prototype=new Vb,I.constructor=ax,I.ei=(function(){return new Hm(this)}),I.cD=(function(){return 0}),I.cF=(function(){return`Nil`}),I.cE=(function(e){throw Dm(new Om,e)}),I.mu=(function(){throw new Im(`head of empty list`)}),I.ny=(function(){throw new Pm(`tail of empty list`)}),I.s=(function(){return 0}),I.i=(function(){return Lf().P}),I.u=(function(){this.mu()}),I.o=(function(){this.ny()}),new z().i(ax,`scala.collection.immutable.Nil$`,{fh:1,aE:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,ay:1,am:1,aD:1,aC:1,k:1,q:1,bh:1,y:1,a:1,T:1,a8:1});var ox;function $(){return ox||=new ax,ox}function sx(){this.b=null,this.e=null,this.g=0,ex(this,U().go,U().go,0)}I=sx.prototype=new nx,I.constructor=sx,I.jQ=(function(e){throw this.ay(e)}),I.dn=(function(e,t){throw this.ay(e)}),I.de=(function(e){var t=new R(1);return t.a[0]=e,new rx(t)}),I.cd=(function(){return 0}),I.cc=(function(e){return null}),I.r=(function(e){return this===e||(e instanceof wb?!1:uy(this,e))}),I.ay=(function(e){return Em(new Om,e+` is out of bounds (empty vector)`)}),I.q=(function(e){this.jQ(e)}),I.f=(function(e){this.jQ(e|0)}),I.bX=(function(e){return this}),new z().i(sx,`scala.collection.immutable.Vector0$`,{fq:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});var cx;function lx(){return cx||=new sx,cx}function ux(e,t,n,r,i){this.b=null,this.e=null,this.g=0,this.bl=0,this.b4=null,this.bl=t,this.b4=n,ex(this,e,r,i)}I=ux.prototype=new nx,I.constructor=ux,I.q=(function(e){if(e>=0&&e<this.g){var t=e-this.bl|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b4.a.length?this.b4.a[n].a[r]:this.e.a[31&t]}return this.b.a[e]}throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.g){if(e>=this.bl){var n=e-this.bl|0,r=n>>>5|0,i=31&n;if(r<this.b4.a.length){var a=this.b4.c(),o=a.a[r].c();return o.a[i]=t,a.a[r]=o,new ux(this.b,this.bl,a,this.e,this.g)}var s=this.e.c();return s.a[i]=t,new ux(this.b,this.bl,this.b4,s,this.g)}var c=this.b.c();return c.a[e]=t,new ux(c,this.bl,this.b4,this.e,this.g)}throw this.ay(e)}),I.de=(function(e){if(this.e.a.length<32){var t=U().ee(this.e,e),n=1+this.g|0;return new ux(this.b,this.bl,this.b4,t,n)}if(this.b4.a.length<30){var r=U().z(this.b4,this.e),i=new R(1);i.a[0]=e;var a=1+this.g|0;return new ux(this.b,this.bl,r,i,a)}var o=this.b,s=this.bl,c=this.b4,l=this.bl,u=U().c6,d=this.e,f=new(B.r().r()).C(1);f.a[0]=d;var p=new R(1);return p.a[0]=e,new dx(o,s,c,960+l|0,u,f,p,1+this.g|0)}),I.bY=(function(e){var t=U().bL(this.b,e),n=U().W(2,this.b4,e),r=U().bL(this.e,e);return new ux(t,this.bl,n,r,this.g)}),I.cd=(function(){return 3}),I.cc=(function(e){switch(e){case 0:return this.b;case 1:return this.b4;case 2:return this.e;default:throw new zm(e)}}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.bl|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b4.a.length?this.b4.a[r].a[i]:this.e.a[31&n]}return this.b.a[t]}throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(ux,`scala.collection.immutable.Vector2`,{fs:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function dx(e,t,n,r,i,a,o,s){this.b=null,this.e=null,this.g=0,this.b1=0,this.b8=null,this.b2=0,this.aK=null,this.aL=null,this.b1=t,this.b8=n,this.b2=r,this.aK=i,this.aL=a,ex(this,e,o,s)}I=dx.prototype=new nx,I.constructor=dx,I.q=(function(e){if(e>=0&&e<this.g){var t=e-this.b2|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aK.a.length?this.aK.a[n].a[r].a[i]:r<this.aL.a.length?this.aL.a[r].a[i]:this.e.a[i]}if(e>=this.b1){var a=e-this.b1|0;return this.b8.a[a>>>5|0].a[31&a]}return this.b.a[e]}throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.g){if(e>=this.b2){var n=e-this.b2|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aK.a.length){var o=this.aK.c(),s=o.a[r].c(),c=s.a[i].c();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new dx(this.b,this.b1,this.b8,this.b2,o,this.aL,this.e,this.g)}if(i<this.aL.a.length){var l=this.aL.c(),u=l.a[i].c();return u.a[a]=t,l.a[i]=u,new dx(this.b,this.b1,this.b8,this.b2,this.aK,l,this.e,this.g)}var d=this.e.c();return d.a[a]=t,new dx(this.b,this.b1,this.b8,this.b2,this.aK,this.aL,d,this.g)}if(e>=this.b1){var f=e-this.b1|0,p=this.b8,m=f>>>5|0,h=31&f,g=p.c(),_=g.a[m].c();return _.a[h]=t,g.a[m]=_,new dx(this.b,this.b1,g,this.b2,this.aK,this.aL,this.e,this.g)}var v=this.b.c();return v.a[e]=t,new dx(v,this.b1,this.b8,this.b2,this.aK,this.aL,this.e,this.g)}throw this.ay(e)}),I.de=(function(e){if(this.e.a.length<32){var t=U().ee(this.e,e),n=1+this.g|0;return new dx(this.b,this.b1,this.b8,this.b2,this.aK,this.aL,t,n)}if(this.aL.a.length<31){var r=U().z(this.aL,this.e),i=new R(1);i.a[0]=e;var a=1+this.g|0;return new dx(this.b,this.b1,this.b8,this.b2,this.aK,r,i,a)}if(this.aK.a.length<30){var o=U().z(this.aK,U().z(this.aL,this.e)),s=new R(1);s.a[0]=e;var c=1+this.g|0;return new dx(this.b,this.b1,this.b8,this.b2,o,U().b9,s,c)}var l=this.b,u=this.b1,d=this.b8,f=this.b2,p=this.aK,m=this.b2,h=U().ea,g=U().z(this.aL,this.e),_=new(B.r().r().r()).C(1);_.a[0]=g;var v=U().b9,y=new R(1);return y.a[0]=e,new fx(l,u,d,f,p,30720+m|0,h,_,v,y,1+this.g|0)}),I.bY=(function(e){var t=U().bL(this.b,e),n=U().W(2,this.b8,e),r=U().W(3,this.aK,e),i=U().W(2,this.aL,e),a=U().bL(this.e,e);return new dx(t,this.b1,n,this.b2,r,i,a,this.g)}),I.cd=(function(){return 5}),I.cc=(function(e){switch(e){case 0:return this.b;case 1:return this.b8;case 2:return this.aK;case 3:return this.aL;case 4:return this.e;default:throw new zm(e)}}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.b2|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aK.a.length?this.aK.a[r].a[i].a[a]:i<this.aL.a.length?this.aL.a[i].a[a]:this.e.a[a]}if(t>=this.b1){var o=t-this.b1|0;return this.b8.a[o>>>5|0].a[31&o]}return this.b.a[t]}throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(dx,`scala.collection.immutable.Vector3`,{ft:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function fx(e,t,n,r,i,a,o,s,c,l,u){this.b=null,this.e=null,this.g=0,this.az=0,this.aS=null,this.aA=0,this.aT=null,this.aB=0,this.ap=null,this.ar=null,this.aq=null,this.az=t,this.aS=n,this.aA=r,this.aT=i,this.aB=a,this.ap=o,this.ar=s,this.aq=c,ex(this,e,l,u)}I=fx.prototype=new nx,I.constructor=fx,I.q=(function(e){if(e>=0&&e<this.g){var t=e-this.aB|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.ap.a.length?this.ap.a[n].a[r].a[i].a[a]:r<this.ar.a.length?this.ar.a[r].a[i].a[a]:i<this.aq.a.length?this.aq.a[i].a[a]:this.e.a[a]}if(e>=this.aA){var o=e-this.aA|0;return this.aT.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}if(e>=this.az){var s=e-this.az|0;return this.aS.a[s>>>5|0].a[31&s]}return this.b.a[e]}throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.g){if(e>=this.aB){var n=e-this.aB|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.ap.a.length){var s=this.ap.c(),c=s.a[r].c(),l=c.a[i].c(),u=l.a[a].c();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,s,this.ar,this.aq,this.e,this.g)}if(i<this.ar.a.length){var d=this.ar.c(),f=d.a[i].c(),p=f.a[a].c();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,d,this.aq,this.e,this.g)}if(a<this.aq.a.length){var m=this.aq.c(),h=m.a[a].c();return h.a[o]=t,m.a[a]=h,new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,this.ar,m,this.e,this.g)}var g=this.e.c();return g.a[o]=t,new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,this.ar,this.aq,g,this.g)}if(e>=this.aA){var _=e-this.aA|0,v=this.aT,y=_>>>10|0,b=31&(_>>>5|0),x=31&_,S=v.c(),C=S.a[y].c(),w=C.a[b].c();return w.a[x]=t,C.a[b]=w,S.a[y]=C,new fx(this.b,this.az,this.aS,this.aA,S,this.aB,this.ap,this.ar,this.aq,this.e,this.g)}if(e>=this.az){var T=e-this.az|0,ee=this.aS,te=T>>>5|0,ne=31&T,E=ee.c(),re=E.a[te].c();return re.a[ne]=t,E.a[te]=re,new fx(this.b,this.az,E,this.aA,this.aT,this.aB,this.ap,this.ar,this.aq,this.e,this.g)}var ie=this.b.c();return ie.a[e]=t,new fx(ie,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,this.ar,this.aq,this.e,this.g)}throw this.ay(e)}),I.de=(function(e){if(this.e.a.length<32){var t=U().ee(this.e,e),n=1+this.g|0;return new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,this.ar,this.aq,t,n)}if(this.aq.a.length<31){var r=U().z(this.aq,this.e),i=new R(1);i.a[0]=e;var a=1+this.g|0;return new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,this.ar,r,i,a)}if(this.ar.a.length<31){var o=U().z(this.ar,U().z(this.aq,this.e)),s=new R(1);s.a[0]=e;var c=1+this.g|0;return new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,this.ap,o,U().b9,s,c)}if(this.ap.a.length<30){var l=U().z(this.ap,U().z(this.ar,U().z(this.aq,this.e))),u=new R(1);u.a[0]=e;var d=1+this.g|0;return new fx(this.b,this.az,this.aS,this.aA,this.aT,this.aB,l,U().c6,U().b9,u,d)}var f=this.b,p=this.az,m=this.aS,h=this.aA,g=this.aT,_=this.aB,v=this.ap,y=this.aB,b=U().gp,x=U().z(this.ar,U().z(this.aq,this.e)),S=new(B.r().r().r().r()).C(1);S.a[0]=x;var C=U().c6,w=U().b9,T=new R(1);return T.a[0]=e,new px(f,p,m,h,g,_,v,983040+y|0,b,S,C,w,T,1+this.g|0)}),I.bY=(function(e){var t=U().bL(this.b,e),n=U().W(2,this.aS,e),r=U().W(3,this.aT,e),i=U().W(4,this.ap,e),a=U().W(3,this.ar,e),o=U().W(2,this.aq,e),s=U().bL(this.e,e);return new fx(t,this.az,n,this.aA,r,this.aB,i,a,o,s,this.g)}),I.cd=(function(){return 7}),I.cc=(function(e){switch(e){case 0:return this.b;case 1:return this.aS;case 2:return this.aT;case 3:return this.ap;case 4:return this.ar;case 5:return this.aq;case 6:return this.e;default:throw new zm(e)}}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.aB|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.ap.a.length?this.ap.a[r].a[i].a[a].a[o]:i<this.ar.a.length?this.ar.a[i].a[a].a[o]:a<this.aq.a.length?this.aq.a[a].a[o]:this.e.a[o]}if(t>=this.aA){var s=t-this.aA|0;return this.aT.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}if(t>=this.az){var c=t-this.az|0;return this.aS.a[c>>>5|0].a[31&c]}return this.b.a[t]}throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(fx,`scala.collection.immutable.Vector4`,{fu:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function px(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.b=null,this.e=null,this.g=0,this.af=0,this.at=null,this.ag=0,this.au=null,this.ah=0,this.av=null,this.ai=0,this.Y=null,this.a1=null,this.a0=null,this.Z=null,this.af=t,this.at=n,this.ag=r,this.au=i,this.ah=a,this.av=o,this.ai=s,this.Y=c,this.a1=l,this.a0=u,this.Z=d,ex(this,e,f,p)}I=px.prototype=new nx,I.constructor=px,I.q=(function(e){if(e>=0&&e<this.g){var t=e-this.ai|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.Y.a.length?this.Y.a[n].a[r].a[i].a[a].a[o]:r<this.a1.a.length?this.a1.a[r].a[i].a[a].a[o]:i<this.a0.a.length?this.a0.a[i].a[a].a[o]:a<this.Z.a.length?this.Z.a[a].a[o]:this.e.a[o]}if(e>=this.ah){var s=e-this.ah|0;return this.av.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}if(e>=this.ag){var c=e-this.ag|0;return this.au.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}if(e>=this.af){var l=e-this.af|0;return this.at.a[l>>>5|0].a[31&l]}return this.b.a[e]}throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.g){if(e>=this.ai){var n=e-this.ai|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.Y.a.length){var c=this.Y.c(),l=c.a[r].c(),u=l.a[i].c(),d=u.a[a].c(),f=d.a[o].c();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,c,this.a1,this.a0,this.Z,this.e,this.g)}if(i<this.a1.a.length){var p=this.a1.c(),m=p.a[i].c(),h=m.a[a].c(),g=h.a[o].c();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,p,this.a0,this.Z,this.e,this.g)}if(a<this.a0.a.length){var _=this.a0.c(),v=_.a[a].c(),y=v.a[o].c();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,_,this.Z,this.e,this.g)}if(o<this.Z.a.length){var b=this.Z.c(),x=b.a[o].c();return x.a[s]=t,b.a[o]=x,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,b,this.e,this.g)}var S=this.e.c();return S.a[s]=t,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,this.Z,S,this.g)}if(e>=this.ah){var C=e-this.ah|0,w=this.av,T=C>>>15|0,ee=31&(C>>>10|0),te=31&(C>>>5|0),ne=31&C,E=w.c(),re=E.a[T].c(),ie=re.a[ee].c(),ae=ie.a[te].c();return ae.a[ne]=t,ie.a[te]=ae,re.a[ee]=ie,E.a[T]=re,new px(this.b,this.af,this.at,this.ag,this.au,this.ah,E,this.ai,this.Y,this.a1,this.a0,this.Z,this.e,this.g)}if(e>=this.ag){var oe=e-this.ag|0,se=this.au,D=oe>>>10|0,ce=31&(oe>>>5|0),O=31&oe,le=se.c(),ue=le.a[D].c(),de=ue.a[ce].c();return de.a[O]=t,ue.a[ce]=de,le.a[D]=ue,new px(this.b,this.af,this.at,this.ag,le,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,this.Z,this.e,this.g)}if(e>=this.af){var fe=e-this.af|0,pe=this.at,me=fe>>>5|0,he=31&fe,ge=pe.c(),_e=ge.a[me].c();return _e.a[he]=t,ge.a[me]=_e,new px(this.b,this.af,ge,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,this.Z,this.e,this.g)}var ve=this.b.c();return ve.a[e]=t,new px(ve,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,this.Z,this.e,this.g)}throw this.ay(e)}),I.de=(function(e){if(this.e.a.length<32){var t=U().ee(this.e,e),n=1+this.g|0;return new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,this.Z,t,n)}if(this.Z.a.length<31){var r=U().z(this.Z,this.e),i=new R(1);i.a[0]=e;var a=1+this.g|0;return new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,this.a0,r,i,a)}if(this.a0.a.length<31){var o=U().z(this.a0,U().z(this.Z,this.e)),s=new R(1);s.a[0]=e;var c=1+this.g|0;return new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,this.a1,o,U().b9,s,c)}if(this.a1.a.length<31){var l=U().z(this.a1,U().z(this.a0,U().z(this.Z,this.e))),u=new R(1);u.a[0]=e;var d=1+this.g|0;return new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,this.Y,l,U().c6,U().b9,u,d)}if(this.Y.a.length<30){var f=U().z(this.Y,U().z(this.a1,U().z(this.a0,U().z(this.Z,this.e)))),p=new R(1);p.a[0]=e;var m=1+this.g|0;return new px(this.b,this.af,this.at,this.ag,this.au,this.ah,this.av,this.ai,f,U().ea,U().c6,U().b9,p,m)}var h=this.b,g=this.af,_=this.at,v=this.ag,y=this.au,b=this.ah,x=this.av,S=this.ai,C=this.Y,w=this.ai,T=U().ji,ee=U().z(this.a1,U().z(this.a0,U().z(this.Z,this.e))),te=new(B.r().r().r().r().r()).C(1);te.a[0]=ee;var ne=U().ea,E=U().c6,re=U().b9,ie=new R(1);return ie.a[0]=e,new mx(h,g,_,v,y,b,x,S,C,31457280+w|0,T,te,ne,E,re,ie,1+this.g|0)}),I.bY=(function(e){var t=U().bL(this.b,e),n=U().W(2,this.at,e),r=U().W(3,this.au,e),i=U().W(4,this.av,e),a=U().W(5,this.Y,e),o=U().W(4,this.a1,e),s=U().W(3,this.a0,e),c=U().W(2,this.Z,e),l=U().bL(this.e,e);return new px(t,this.af,n,this.ag,r,this.ah,i,this.ai,a,o,s,c,l,this.g)}),I.cd=(function(){return 9}),I.cc=(function(e){switch(e){case 0:return this.b;case 1:return this.at;case 2:return this.au;case 3:return this.av;case 4:return this.Y;case 5:return this.a1;case 6:return this.a0;case 7:return this.Z;case 8:return this.e;default:throw new zm(e)}}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.ai|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.Y.a.length?this.Y.a[r].a[i].a[a].a[o].a[s]:i<this.a1.a.length?this.a1.a[i].a[a].a[o].a[s]:a<this.a0.a.length?this.a0.a[a].a[o].a[s]:o<this.Z.a.length?this.Z.a[o].a[s]:this.e.a[s]}if(t>=this.ah){var c=t-this.ah|0;return this.av.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(t>=this.ag){var l=t-this.ag|0;return this.au.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}if(t>=this.af){var u=t-this.af|0;return this.at.a[u>>>5|0].a[31&u]}return this.b.a[t]}throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(px,`scala.collection.immutable.Vector5`,{fv:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function mx(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.b=null,this.e=null,this.g=0,this.a2=0,this.aj=null,this.a3=0,this.ak=null,this.a4=0,this.al=null,this.a5=0,this.am=null,this.ab=0,this.R=null,this.V=null,this.U=null,this.T=null,this.S=null,this.a2=t,this.aj=n,this.a3=r,this.ak=i,this.a4=a,this.al=o,this.a5=s,this.am=c,this.ab=l,this.R=u,this.V=d,this.U=f,this.T=p,this.S=m,ex(this,e,h,g)}I=mx.prototype=new nx,I.constructor=mx,I.q=(function(e){if(e>=0&&e<this.g){var t=e-this.ab|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.R.a.length?this.R.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.V.a.length?this.V.a[r].a[i].a[a].a[o].a[s]:i<this.U.a.length?this.U.a[i].a[a].a[o].a[s]:a<this.T.a.length?this.T.a[a].a[o].a[s]:o<this.S.a.length?this.S.a[o].a[s]:this.e.a[s]}if(e>=this.a5){var c=e-this.a5|0;return this.am.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(e>=this.a4){var l=e-this.a4|0;return this.al.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(e>=this.a3){var u=e-this.a3|0;return this.ak.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}if(e>=this.a2){var d=e-this.a2|0;return this.aj.a[d>>>5|0].a[31&d]}return this.b.a[e]}throw this.ay(e)}),I.dn=(function(e,t){if(e>=0&&e<this.g){if(e>=this.ab){var n=e-this.ab|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.R.a.length){var l=this.R.c(),u=l.a[r].c(),d=u.a[i].c(),f=d.a[a].c(),p=f.a[o].c(),m=p.a[s].c();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,l,this.V,this.U,this.T,this.S,this.e,this.g)}if(i<this.V.a.length){var h=this.V.c(),g=h.a[i].c(),_=g.a[a].c(),v=_.a[o].c(),y=v.a[s].c();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,h,this.U,this.T,this.S,this.e,this.g)}if(a<this.U.a.length){var b=this.U.c(),x=b.a[a].c(),S=x.a[o].c(),C=S.a[s].c();return C.a[c]=t,S.a[s]=C,x.a[o]=S,b.a[a]=x,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,b,this.T,this.S,this.e,this.g)}if(o<this.T.a.length){var w=this.T.c(),T=w.a[o].c(),ee=T.a[s].c();return ee.a[c]=t,T.a[s]=ee,w.a[o]=T,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,w,this.S,this.e,this.g)}if(s<this.S.a.length){var te=this.S.c(),ne=te.a[s].c();return ne.a[c]=t,te.a[s]=ne,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,te,this.e,this.g)}var E=this.e.c();return E.a[c]=t,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,E,this.g)}if(e>=this.a5){var re=e-this.a5|0,ie=this.am,ae=re>>>20|0,oe=31&(re>>>15|0),se=31&(re>>>10|0),D=31&(re>>>5|0),ce=31&re,O=ie.c(),le=O.a[ae].c(),ue=le.a[oe].c(),de=ue.a[se].c(),fe=de.a[D].c();return fe.a[ce]=t,de.a[D]=fe,ue.a[se]=de,le.a[oe]=ue,O.a[ae]=le,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,O,this.ab,this.R,this.V,this.U,this.T,this.S,this.e,this.g)}if(e>=this.a4){var pe=e-this.a4|0,me=this.al,he=pe>>>15|0,ge=31&(pe>>>10|0),_e=31&(pe>>>5|0),ve=31&pe,ye=me.c(),be=ye.a[he].c(),xe=be.a[ge].c(),Se=xe.a[_e].c();return Se.a[ve]=t,xe.a[_e]=Se,be.a[ge]=xe,ye.a[he]=be,new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,ye,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,this.e,this.g)}if(e>=this.a3){var Ce=e-this.a3|0,we=this.ak,Te=Ce>>>10|0,Ee=31&(Ce>>>5|0),De=31&Ce,Oe=we.c(),k=Oe.a[Te].c(),A=k.a[Ee].c();return A.a[De]=t,k.a[Ee]=A,Oe.a[Te]=k,new mx(this.b,this.a2,this.aj,this.a3,Oe,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,this.e,this.g)}if(e>=this.a2){var j=e-this.a2|0,ke=this.aj,Ae=j>>>5|0,je=31&j,Me=ke.c(),Ne=Me.a[Ae].c();return Ne.a[je]=t,Me.a[Ae]=Ne,new mx(this.b,this.a2,Me,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,this.e,this.g)}var Pe=this.b.c();return Pe.a[e]=t,new mx(Pe,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,this.e,this.g)}throw this.ay(e)}),I.de=(function(e){if(this.e.a.length<32){var t=U().ee(this.e,e),n=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,this.S,t,n)}if(this.S.a.length<31){var r=U().z(this.S,this.e),i=new R(1);i.a[0]=e;var a=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,this.T,r,i,a)}if(this.T.a.length<31){var o=U().z(this.T,U().z(this.S,this.e)),s=new R(1);s.a[0]=e;var c=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,this.U,o,U().b9,s,c)}if(this.U.a.length<31){var l=U().z(this.U,U().z(this.T,U().z(this.S,this.e))),u=new R(1);u.a[0]=e;var d=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,this.V,l,U().c6,U().b9,u,d)}if(this.V.a.length<31){var f=U().z(this.V,U().z(this.U,U().z(this.T,U().z(this.S,this.e)))),p=new R(1);p.a[0]=e;var m=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,this.R,f,U().ea,U().c6,U().b9,p,m)}if(this.R.a.length<62){var h=U().z(this.R,U().z(this.V,U().z(this.U,U().z(this.T,U().z(this.S,this.e))))),g=new R(1);g.a[0]=e;var _=1+this.g|0;return new mx(this.b,this.a2,this.aj,this.a3,this.ak,this.a4,this.al,this.a5,this.am,this.ab,h,U().gp,U().ea,U().c6,U().b9,g,_)}throw Cm(new wm)}),I.bY=(function(e){var t=U().bL(this.b,e),n=U().W(2,this.aj,e),r=U().W(3,this.ak,e),i=U().W(4,this.al,e),a=U().W(5,this.am,e),o=U().W(6,this.R,e),s=U().W(5,this.V,e),c=U().W(4,this.U,e),l=U().W(3,this.T,e),u=U().W(2,this.S,e),d=U().bL(this.e,e);return new mx(t,this.a2,n,this.a3,r,this.a4,i,this.a5,a,this.ab,o,s,c,l,u,d,this.g)}),I.cd=(function(){return 11}),I.cc=(function(e){switch(e){case 0:return this.b;case 1:return this.aj;case 2:return this.ak;case 3:return this.al;case 4:return this.am;case 5:return this.R;case 6:return this.V;case 7:return this.U;case 8:return this.T;case 9:return this.S;case 10:return this.e;default:throw new zm(e)}}),I.f=(function(e){var t=e|0;if(t>=0&&t<this.g){var n=t-this.ab|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.R.a.length?this.R.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.V.a.length?this.V.a[i].a[a].a[o].a[s].a[c]:a<this.U.a.length?this.U.a[a].a[o].a[s].a[c]:o<this.T.a.length?this.T.a[o].a[s].a[c]:s<this.S.a.length?this.S.a[s].a[c]:this.e.a[c]}if(t>=this.a5){var l=t-this.a5|0;return this.am.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(t>=this.a4){var u=t-this.a4|0;return this.al.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}if(t>=this.a3){var d=t-this.a3|0;return this.ak.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}if(t>=this.a2){var f=t-this.a2|0;return this.aj.a[f>>>5|0].a[31&f]}return this.b.a[t]}throw this.ay(t)}),I.bX=(function(e){return this.bY(e)}),new z().i(mx,`scala.collection.immutable.Vector6`,{fw:1,aa:1,ab:1,a5:1,w:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,A:1,x:1,k:1,q:1,y:1,a:1,T:1});function hx(e,t){return e.aO=t,e}function gx(e){return hx(e,jp(new Np)),e}function _x(){this.aO=null}I=_x.prototype=new Ky,I.constructor=_x,I.aV=(function(e){return yd(this,e)}),I.aX=(function(e){}),I.i=(function(){return a_(new s_,new Ny(this))}),I.bn=(function(e){var t=this.aO.k();return t===e?0:t<e?-1:1}),I.bc=(function(){return`IndexedSeq`}),I.k=(function(){return this.aO.k()}),I.s=(function(){return this.aO.k()}),I.lc=(function(e){var t=this.aO,n=``+Gi(e);return t.m+=n,this}),I.B=(function(){return this.aO.m}),I.jO=(function(e){if(e instanceof Kb)this.aO.jN(e.bt);else if(e instanceof _x){var t=this.aO,n=e.aO;t.m=``+t.m+n}else{var r=e.s();if(r!==0){var i=this.aO;r>0&&i.k();for(var a=e.i();a.j();){var o=``+Gi(ia(a.h()));i.m+=o}}}return this}),I.d=(function(){return this.aO.k()===0}),I.q=(function(e){return ta(this.aO.jT(e))}),I.f=(function(e){var t=e|0;return ta(this.aO.jT(t))}),I.eV=(function(e){return gx(new _x).jO(e)}),I.eU=(function(e){return gx(new _x).jO(e)}),I.aP=(function(e){return this.lc(ia(e))}),I.aW=(function(){return this.aO.m}),I.ba=(function(){return bg()}),new z().i(_x,`scala.collection.mutable.StringBuilder`,{bQ:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,K:1,a6:1,p:1,o:1,R:1,Q:1,av:1,a:1});function vx(e){var t=new bx().fL(e);e.bF=t.bF,e.cw=t.cw,e.fp=!1}function yx(e){e.fq=1+e.fq|0,e.fp&&vx(e)}function bx(){this.fq=0,this.bF=null,this.cw=null,this.fp=!1,this.bG=0,this.fq=0,this.bF=$(),this.cw=null,this.fp=!1,this.bG=0}I=bx.prototype=new fb,I.constructor=bx,I.c9=(function(e){return f_(this,e)}),I.aX=(function(e){}),I.i=(function(){return new wg(this.bF.i(),new np((()=>this.fq)))}),I.dm=(function(){return Cg()}),I.q=(function(e){return ih(this.bF,e)}),I.k=(function(){return this.bG}),I.s=(function(){return this.bG}),I.d=(function(){return this.bG===0}),I.kD=(function(){return this.fp=!this.d(),this.bF}),I.lk=(function(e){yx(this);var t=new ix(e,$());if(this.bG===0)this.bF=t;else{var n=this.cw;n===null&&Kl().bZ(),n.an=t}return this.cw=t,this.bG=1+this.bG|0,this}),I.fL=(function(e){var t=e.i();if(t.j()){var n=1,r=new ix(t.h(),$());for(this.bF=r;t.j();){var i=new ix(t.h(),$());r.an=i,r=i,n=1+n|0}this.bG=n,this.cw=r}return this}),I.lb=(function(e){var t=e.i();if(t.j()){var n=new bx().fL(t);if(yx(this),this.bG===0)this.bF=n.bF;else{var r=this.cw;r===null&&Kl().bZ(),r.an=n.bF}this.cw=n.cw,this.bG=this.bG+n.bG|0}return this}),I.bc=(function(){return`ListBuffer`}),I.ba=(function(){return Cg()}),I.f=(function(e){var t=e|0;return ih(this.bF,t)}),I.aW=(function(){return this.kD()}),I.aP=(function(e){return this.lk(e)}),I.aV=(function(e){return this.lb(e)}),new z().i(bx,`scala.collection.mutable.ListBuffer`,{bP:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,k:1,q:1,K:1,a6:1,a:1,T:1});function xx(e,t,n){return e.eb=0,e.cs=t,e.aU=n,e}function Sx(e){return xx(e,new R(16),0),e}function Cx(){this.eb=0,this.cs=null,this.aU=0}I=Cx.prototype=new fb,I.constructor=Cx,I.i=(function(){return this.nE().i()}),I.bn=(function(e){var t=this.aU;return t===e?0:t<e?-1:1}),I.c9=(function(e){return f_(this,e)}),I.s=(function(){return this.aU}),I.gH=(function(e){this.cs=og().kz(this.cs,this.aU,e)}),I.aX=(function(e){e>this.aU&&e>=1&&this.gH(e)}),I.q=(function(e){var t=1+e|0;if(e<0)throw ll().gW(e,this.aU-1|0);if(t>this.aU)throw ll().gW(t-1|0,this.aU-1|0);return this.cs.a[e]}),I.k=(function(){return this.aU}),I.nE=(function(){return new Iy(this,new np((()=>this.eb)))}),I.dm=(function(){return og()}),I.lh=(function(e){this.eb=1+this.eb|0;var t=1+this.aU|0;return this.cs.a.length<=(t-1|0)&&this.gH(t),this.aU=t,this.cs.a[t-1|0]=e,this}),I.jJ=(function(e){if(e instanceof Cx){var t=e.aU;t>0&&(this.eb=1+this.eb|0,this.gH(this.aU+t|0),Ac().eS(e.cs,0,this.cs,this.aU,t),this.aU=this.aU+t|0)}else yd(this,e);return this}),I.bc=(function(){return`ArrayBuffer`}),I.bu=(function(e,t,n){var r=this.aU,i=_c().bv(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&Ac().eS(this.cs,0,e,t,c),c}),I.f=(function(e){return this.q(e|0)}),I.ba=(function(){return og()}),I.aP=(function(e){return this.lh(e)}),I.aV=(function(e){return this.jJ(e)}),new z().i(Cx,`scala.collection.mutable.ArrayBuffer`,{bC:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,p:1,o:1,R:1,Q:1,bO:1,k:1,q:1,a:1,T:1});function wx(e,t){return e.db=t,e}function Tx(e){return wx(e,[]),e}function Ex(){this.db=null}I=Ex.prototype=new fb,I.constructor=Ex,I.aX=(function(e){}),I.bc=(function(){return`IndexedSeq`}),I.i=(function(){return a_(new s_,new Ny(this))}),I.bn=(function(e){var t=this.db.length|0;return t===e?0:t<e?-1:1}),I.c9=(function(e){return f_(this,e)}),I.dm=(function(){return jg()}),I.q=(function(e){return this.db[e]}),I.k=(function(){return this.db.length|0}),I.s=(function(){return this.db.length|0}),I.bJ=(function(){return`WrappedArray`}),I.aW=(function(){return this}),I.aP=(function(e){return this.db.push(e),this}),I.f=(function(e){var t=e|0;return this.db[t]}),I.ba=(function(){return jg()}),new z().i(Ex,`scala.scalajs.js.WrappedArray`,{gL:1,aG:1,J:1,n:1,i:1,b:1,c:1,h:1,g:1,e:1,f:1,j:1,l:1,d:1,m:1,G:1,z:1,E:1,M:1,L:1,D:1,F:1,aq:1,aH:1,q:1,k:1,Q:1,p:1,o:1,R:1,bO:1,K:1,a:1}),ps(new(Zg.r()).C([]));