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
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Le=/>/g,Re=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ze=/'/g,Be=/"/g,Ve=/^(?:script|style|textarea|title)$/i,He=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ue=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),We=/* @__PURE__ */ new WeakMap,Ge=ke.createTreeWalker(ke,129);function Ke(e,t){if(!Me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return we===void 0?t:we.createHTML(t)}const qe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Fe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Fe?c[1]===`!--`?o=Ie:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Re):(Ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Re):o=Le:o===Re?c[0]===`>`?(o=i??Fe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Re:c[3]===`"`?Be:ze):o===Be||o===ze?o=Re:o===Ie||o===Le?o=Fe:(o=Re,i=void 0);let d=o===Re&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Fe?n+Oe:l>=0?(r.push(s),n.slice(0,l)+Te+n.slice(l)+Ee+d):n+Ee+(l===-2?t:d)}return[Ke(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Je=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=qe(t,n);if(this.el=e.createElement(l,r),Ge.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ge.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Te)){let t=u[o++],n=i.getAttribute(e).split(Ee),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?$e:r[1]===`?`?et:r[1]===`@`?tt:Qe}),i.removeAttribute(e)}else e.startsWith(Ee)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ve.test(i.tagName)){let e=i.textContent.split(Ee),t=e.length-1;if(t>0){i.textContent=Ce?Ce.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ae()),Ge.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ae())}}}else if(i.nodeType===8){if(i.data===De)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ee,e+1))!==-1;)c.push({type:7,index:a}),e+=Ee.length-1}}a++}}static createElement(e,t){let n=ke.createElement(`template`);return n.innerHTML=e,n}};function Ye(e,t,n=e,r){if(t===Ue)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=je(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ye(e,i._$AS(e,t.values),i,r)),t}var Xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ke).importNode(t,!0);Ge.currentNode=r;let i=Ge.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ze(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new nt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ge.nextNode(),a++)}return Ge.currentNode=ke,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ze=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),je(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ne(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&je(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Je.createElement(Ke(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new Je(e)),t}k(t){Me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ae()),this.O(Ae()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Se(e).nextSibling;Se(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ye(this,e,t,0),a=!je(e)||e!==this._$AH&&e!==Ue,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ye(this,r[n+o],t,o),s===Ue&&(s=this._$AH[o]),a||=!je(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},$e=class extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},et=class extends Qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},tt=class extends Qe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ye(this,e,t,0)??h)===Ue)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},nt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};const rt={M:Te,P:Ee,A:De,C:1,L:qe,R:Xe,D:Ne,V:Ye,I:Ze,H:Qe,N:et,U:tt,B:$e,F:nt},it=xe.litHtmlPolyfillSupport;it?.(Je,Ze),(xe.litHtmlVersions??=[]).push(`3.3.3`);const at=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ze(t.insertBefore(Ae(),e),e,void 0,n??{})}return i._$AI(e),i},ot=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var st=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ue}};st._$litElement$=!0,st.finalized=!0,ot.litElementHydrateSupport?.({LitElement:st});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:st}),(ot.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const lt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ut={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:ve},dt=(e=ut,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?dt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ft(e){return g({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function mt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return pt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return pt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht=m`
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
`,gt=/;\s+$/;function _t(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function vt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(gt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var yt,bt=class extends st{constructor(){super(),u(this,yt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ht,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,yt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,yt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=vt({property:_t(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=vt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};yt=/* @__PURE__ */ new WeakMap,s([g()],bt.prototype,`dir`,2),s([g()],bt.prototype,`lang`,2),s([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],bt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),St=class extends bt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[xt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};St.formAssociated=!0,s([g({reflect:!0})],St.prototype,`name`,2),s([g({type:Boolean})],St.prototype,`disabled`,2),s([g({state:!0,attribute:!1})],St.prototype,`valueHasChanged`,2),s([g({state:!0,attribute:!1})],St.prototype,`hasInteracted`,2),s([g({attribute:`custom-error`,reflect:!0})],St.prototype,`customError`,2),s([g({attribute:!1,state:!0,type:Object})],St.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct={small:`s`,medium:`m`,large:`l`},wt=/* @__PURE__ */ new Set;function Tt(e,t){t in Ct&&!wt.has(`${e}:${t}`)&&(wt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Ct[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Et=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Dt=m`
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
`,Ot=m`
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
`,kt=m`
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
function At(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const jt=/* @__PURE__ */ new Set,Mt=/* @__PURE__ */ new Map;let Nt,Pt=`ltr`,Ft=`en`;const It=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(It){let e=new MutationObserver(Rt);Pt=document.documentElement.dir||`ltr`,Ft=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Lt(...e){e.map(e=>{let t=e.$code.toLowerCase();Mt.has(t)?Mt.set(t,Object.assign(Object.assign({},Mt.get(t)),e)):Mt.set(t,e),Nt||=e}),Rt()}function Rt(){It&&(Pt=document.documentElement.dir||`ltr`,Ft=document.documentElement.lang||navigator.language),[...jt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var zt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){jt.add(this.host)}hostDisconnected(){jt.delete(this.host)}dir(){return`${this.host.dir||Pt}`.toLowerCase()}lang(){let e=`${this.host.lang||Ft}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Nt?Nt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Mt.get(`${n}-${r}`),a=Mt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Nt&&Nt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Nt&&Nt[e])i=Nt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Bt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Lt(Bt);var Vt=Bt,Ht=class extends zt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Lt(Vt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=e=>(...t)=>({_$litDirective$:e,values:t});var Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Kt=Wt(class extends Gt{constructor(e){if(super(e),e.type!==Ut.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ue}}),_=e=>e??h,qt=Symbol.for(``),Jt=e=>{
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
if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:qt}),Xt=/* @__PURE__ */ new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Jt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(He);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Et(this,`[default]`,`start`,`end`),this.localize=new Ht(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){Tt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Yt`a`:Yt`button`;return Zt`
      <${t}
        part="base button"
        class=${Kt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        title=${this.title}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e&&this.rel?this.rel:void 0)}
        role=${_(e?void 0:`button`)}
        aria-disabled=${_(e&&this.disabled?`true`:void 0)}
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
    `}};v.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0},v.css=[Ot,kt,Dt],s([mt(`.button`)],v.prototype,`button`,2),s([mt(`slot:not([name])`)],v.prototype,`labelSlot`,2),s([ft()],v.prototype,`invalid`,2),s([ft()],v.prototype,`isIconButton`,2),s([g()],v.prototype,`title`,2),s([g({reflect:!0})],v.prototype,`variant`,2),s([g({reflect:!0})],v.prototype,`appearance`,2),s([g({reflect:!0})],v.prototype,`size`,2),s([At(`size`)],v.prototype,`handleSizeChange`,1),s([g({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),s([g({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),s([g({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),s([g({type:Boolean})],v.prototype,`disabled`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`loading`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`pill`,2),s([g()],v.prototype,`type`,2),s([g({reflect:!0})],v.prototype,`name`,2),s([g({reflect:!0})],v.prototype,`value`,2),s([g({reflect:!0})],v.prototype,`href`,2),s([g()],v.prototype,`target`,2),s([g()],v.prototype,`rel`,2),s([g()],v.prototype,`download`,2),s([g({attribute:`formaction`})],v.prototype,`formAction`,2),s([g({attribute:`formenctype`})],v.prototype,`formEnctype`,2),s([g({attribute:`formmethod`})],v.prototype,`formMethod`,2),s([g({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),s([g({attribute:`formtarget`})],v.prototype,`formTarget`,2),s([At(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),s([At(`href`)],v.prototype,`handleHrefChange`,1),s([At(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=s([lt(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
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
`,$t=class extends bt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Ht(this)}render(){return He`
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
    `}};$t.css=Qt,$t=s([lt(`wa-spinner`)],$t);
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
*/const{I:Cn}=rt,wn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Tn=e=>e.strings===void 0,En={},Dn=(e,t=En)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=Symbol(),kn=Symbol(),An,jn=/* @__PURE__ */ new Map,y=class extends bt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=He`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?On:kn}catch{return kn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return On;An||=new DOMParser;let r=An.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):On}catch{return On}}}connectedCallback(){super.connectedCallback(),yn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bn(this)}async getIconSource(){let e=xn(this.library),t=this.family||Sn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?xn(this.library):void 0;if(!e){this.svg=null;return}let r=jn.get(e);r||(r=this.resolveIcon(e,n),jn.set(e,r));let i=await r;if(i===kn&&jn.delete(e),e===(await this.getIconSource()).url){if(wn(i))this.svg=i;else switch(i){case kn:case On:this.svg=null,this.dispatchEvent(new en);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new tn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=xn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:He`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=nn,s([ft()],y.prototype,`svg`,2),s([g({reflect:!0})],y.prototype,`name`,2),s([g({reflect:!0})],y.prototype,`family`,2),s([g({reflect:!0})],y.prototype,`variant`,2),s([g({reflect:!0})],y.prototype,`canvas`,2),s([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),s([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),s([g()],y.prototype,`src`,2),s([g()],y.prototype,`label`,2),s([g({reflect:!0})],y.prototype,`library`,2),s([g({type:Number,reflect:!0})],y.prototype,`rotate`,2),s([g({type:String,reflect:!0})],y.prototype,`flip`,2),s([g({type:String,reflect:!0})],y.prototype,`animation`,2),s([At(`label`)],y.prototype,`handleLabelChange`,1),s([At([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=s([lt(`wa-icon`)],y);var Mn=/* @__PURE__ */ t({default:()=>v}),Nn=class{constructor(e,t){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
this.element=e,this.callback=t}start(...e){this.observer??=new ResizeObserver(()=>this.check()),this.observer.observe(this.element);for(let t of e)this.observer.observe(t);this.initialCheckHandle??=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()})}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Pn(e,t){let n=t.getBoundingClientRect();return e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom}var Fn=/* @__PURE__ */ new Set;function In(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Ln(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function Rn(e){if(Fn.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=In()+Ln(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function zn(e){Fn.delete(e),Fn.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Bn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Vn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Hn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Un=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Wn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Gn=m`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`,Kn=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function qn(e){Jn(e),Kn.push(e)}function Jn(e){for(let t=Kn.length-1;t>=0;t--)if(Kn[t]===e){Kn.splice(t,1);break}}function Yn(e){return Kn.length>0&&Kn[Kn.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Xn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zn=class extends bt{constructor(){super(...arguments),this.localize=new Ht(this),this.hasSlotController=new Et(this,`footer`,`header-actions`,`label`),this.renderedWatcher=new Nn(this,e=>this.handleRenderedChange(e)),this.open=!1,this.label=``,this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.withLabel=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&Yn(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(e){super.firstUpdated(e),this.open&&(this.addOpenListeners(),this.dialog.showModal(),Rn(this),this.renderedWatcher.start(this.dialog))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),zn(this),this.removeOpenListeners()}async requestClose(e){let t=new Hn({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,Xn(this.dialog,`pulse`);return}this.removeOpenListeners(),await Xn(this.dialog,`hide`),this.open=!1,this.dialog.close(),zn(this),this.renderedWatcher.stop();let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new Un)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),qn(this)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),Jn(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains(`hide`)&&e.target===this.dialog&&Yn(this)&&this.requestClose(this.dialog)}handleDialogClick(e){let t=e.target.closest(`[data-dialog="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.dialog&&!Pn(e,this.dialog)&&(this.lightDismiss?this.requestClose(this.dialog):await Xn(this.dialog,`pulse`))}handleRenderedChange(e){this.open?!e&&this.dialog.open?(this.removeOpenListeners(),this.dialog.close(),zn(this)):e&&!this.dialog.open&&(this.addOpenListeners(),this.dialog.showModal(),Rn(this)):this.renderedWatcher.stop()}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open?(this.open=!0,this.requestClose(this.dialog)):this.open||this.renderedWatcher.stop()}async show(){let e=new Vn;this.dispatchEvent(e),e.defaultPrevented?this.open=!1:(this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Rn(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await Xn(this.dialog,`show`),this.dispatchEvent(new Wn))}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`,`withFooter`),n=this.label.length>0||this.hasSlotController.test(`label`,`withLabel`);return He`
      <dialog
        part="dialog"
        aria-labelledby=${_(e&&n?`title`:void 0)}
        aria-label=${_(!e&&this.label?this.label:void 0)}
        class=${Kt({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?He`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:`​`} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term(`close`)}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:``}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};Zn.css=Gn,s([mt(`.dialog`)],Zn.prototype,`dialog`,2),s([g({type:Boolean,reflect:!0})],Zn.prototype,`open`,2),s([g({reflect:!0})],Zn.prototype,`label`,2),s([g({attribute:`without-header`,type:Boolean,reflect:!0})],Zn.prototype,`withoutHeader`,2),s([g({attribute:`light-dismiss`,type:Boolean})],Zn.prototype,`lightDismiss`,2),s([g({attribute:`with-footer`,type:Boolean})],Zn.prototype,`withFooter`,2),s([g({attribute:`with-label`,type:Boolean})],Zn.prototype,`withLabel`,2),s([At(`open`,{waitUntilFirstUpdate:!0})],Zn.prototype,`handleOpenChange`,1),Zn=s([lt(`wa-dialog`)],Zn),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-dialog]`);if(t instanceof Element){let[e,n]=Bn(t.getAttribute(`data-dialog`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-dialog`?e.open=!0:console.warn(`A dialog with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{});var Qn=/* @__PURE__ */ t({default:()=>Zn}),$n=/* @__PURE__ */ t({default:()=>y}),er=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tr(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&ar(t)})}var nr=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),rr=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),ir=e=>{let t=e?.localName;if(!t||!nr.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!rr.get(n)};function ar(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)ir(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var or=m`
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
`,sr=m`
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
*/const cr=Wt(class extends Gt{constructor(e){if(super(e),e.type!==Ut.PROPERTY&&e.type!==Ut.ATTRIBUTE&&e.type!==Ut.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Tn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ue||t===h)return t;let n=e.element,r=e.name;if(e.type===Ut.PROPERTY){if(t===n[r])return Ue}else if(e.type===Ut.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ue}else if(e.type===Ut.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ue;return Dn(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Et(this,`hint`,`label`),this.localize=new Ht(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){Tt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new er),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){tr(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return He`
      <label
        part="form-control-label label"
        class=${Kt({label:!0,"has-label":n})}
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
          name=${_(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${_(this.placeholder)}
          minlength=${_(this.minlength)}
          maxlength=${_(this.maxlength)}
          min=${_(this.min)}
          max=${_(this.max)}
          step=${_(this.step)}
          .value=${cr(this.value??``)}
          autocapitalize=${_(this.autocapitalize)}
          autocomplete=${_(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${_(this.pattern)}
          enterkeyhint=${_(this.enterkeyhint)}
          inputmode=${_(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?He`
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
        ${this.passwordToggle&&!this.disabled?He`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?He`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:He`
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
        class=${Kt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};b.css=[Dt,sr,or],b.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0},s([mt(`input`)],b.prototype,`input`,2),s([g()],b.prototype,`title`,2),s([g({reflect:!0})],b.prototype,`type`,2),s([ft()],b.prototype,`value`,1),s([g({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),s([g({reflect:!0})],b.prototype,`size`,2),s([At(`size`)],b.prototype,`handleSizeChange`,1),s([g({reflect:!0})],b.prototype,`appearance`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`pill`,2),s([g()],b.prototype,`label`,2),s([g({attribute:`hint`})],b.prototype,`hint`,2),s([g({attribute:`with-clear`,type:Boolean})],b.prototype,`withClear`,2),s([g()],b.prototype,`placeholder`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`readonly`,2),s([g({attribute:`password-toggle`,type:Boolean})],b.prototype,`passwordToggle`,2),s([g({attribute:`password-visible`,type:Boolean})],b.prototype,`passwordVisible`,2),s([g({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],b.prototype,`withoutSpinButtons`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`required`,2),s([g()],b.prototype,`pattern`,2),s([g({type:Number})],b.prototype,`minlength`,2),s([g({type:Number})],b.prototype,`maxlength`,2),s([g()],b.prototype,`min`,2),s([g()],b.prototype,`max`,2),s([g()],b.prototype,`step`,2),s([g()],b.prototype,`autocapitalize`,2),s([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],b.prototype,`autocorrect`,2),s([g()],b.prototype,`autocomplete`,2),s([g({type:Boolean})],b.prototype,`autofocus`,2),s([g()],b.prototype,`enterkeyhint`,2),s([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],b.prototype,`spellcheck`,2),s([g()],b.prototype,`inputmode`,2),s([g({attribute:`with-label`,type:Boolean})],b.prototype,`withLabel`,2),s([g({attribute:`with-hint`,type:Boolean})],b.prototype,`withHint`,2),s([At(`step`,{waitUntilFirstUpdate:!0})],b.prototype,`handleStepChange`,1),b=s([lt(`wa-input`)],b),b.disableWarning?.(`change-in-update`);var lr=/* @__PURE__ */ t({default:()=>b}),x
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function ur(e){this.c=e}x=ur.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function S(e,t){this.l=e,this.h=t}x=S.prototype,x.toString=(function(){return ns(this.l,this.h)});function dr(e){switch(typeof e){case`string`:return bp.l();case`number`:return Er(e)?e<<24>>24===e?Kd.l():e<<16>>16===e?af.l():fp.l():Dr(e)?dp.l():up.l();case`boolean`:return Xu.l();case`undefined`:return Jo.l();default:return e instanceof S?hp.l():e instanceof ur?$u.l():e&&e.$classData?e.$classData.l():null}}function fr(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Er(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Dr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof S?`java.lang.Long`:e instanceof ur?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jV()}}function pr(e,t){switch(typeof e){case`string`:return vp(e,t);case`number`:return cp(e,t);case`boolean`:return Ju(e,t);case`undefined`:return Go(e,t);default:return e&&e.$classData||e===null?e.g(t):e instanceof S?pp(e.l,e.h,t):e instanceof ur?Qu(e.c,t):Mr.prototype.g.call(e,t)}}function mr(e){switch(typeof e){case`string`:return _p(e);case`number`:return lp(e);case`boolean`:return Yu(e);case`undefined`:return Ko(e);default:return e&&e.$classData||e===null?e.k():e instanceof S?mp(e.l,e.h):e instanceof ur?Zu(e.c):Mr.prototype.k.call(e)}}function hr(e){return e===void 0?`undefined`:e.toString()}function gr(e){if(e===0)throw new Gd(`/ by zero`);return e}function _r(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function vr(e){return String.fromCharCode(e)}var yr=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function br(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var xr=0,Sr=/* @__PURE__ */ new WeakMap;function Cr(e){switch(typeof e){case`string`:return _p(e);case`number`:return lp(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:_p(n);default:if(e===null)return 0;var r=Sr.get(e);return r===void 0&&(r=xr+1|0,xr=r,Sr.set(e,r)),r}}function wr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Tr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Er(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Dr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Or(e){return new ur(e)}Or(0);function C(e,t){return new S(e,t)}var kr=C(0,0);function Ar(e){return e===null?0:e.c}function jr(e){return e===null?kr:e}function Mr(){}x=Mr.prototype,x.constructor=Mr;function w(){}w.prototype=x,x.k=(function(){return Cr(this)}),x.g=(function(e){return this===e}),x.o=(function(){var e=this.k();return fr(this)+`@`+(e>>>0).toString(16)}),x.toString=(function(){return this.o()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=T.prototype=new w,x.constructor=T,x.ah=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),x.al=(function(){return new T(this.a.slice())});function Nr(){}Nr.prototype=x;function Pr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=Pr.prototype=new w,x.constructor=Pr,x.ah=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),x.al=(function(){return new Pr(this.a.slice())});function Fr(e){this.a=typeof e==`number`?new Uint16Array(e):e}x=Fr.prototype=new w,x.constructor=Fr,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Fr(this.a.slice())});function Ir(e){this.a=typeof e==`number`?new Int8Array(e):e}x=Ir.prototype=new w,x.constructor=Ir,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Ir(this.a.slice())});function Lr(e){this.a=typeof e==`number`?new Int16Array(e):e}x=Lr.prototype=new w,x.constructor=Lr,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Lr(this.a.slice())});function Rr(e){this.a=typeof e==`number`?new Int32Array(e):e}x=Rr.prototype=new w,x.constructor=Rr,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Rr(this.a.slice())});function zr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}x=zr.prototype=new w,x.constructor=zr,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),x.al=(function(){return new zr(this.a.slice())});function Br(e){this.a=typeof e==`number`?new Float32Array(e):e}x=Br.prototype=new w,x.constructor=Br,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Br(this.a.slice())});function Vr(e){this.a=typeof e==`number`?new Float64Array(e):e}x=Vr.prototype=new w,x.constructor=Vr,x.ah=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.al=(function(){return new Vr(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=E.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i,t===`J`)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Nr;n.constructor=t,n.ah=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),n.al=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Hr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new E().a(this),this.A}),x.l=(function(){return this.L||=new au(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===Ur)throw Jd(new Yd);return new(this.r()).C(e)});var Hr=new E;Hr.n={},Hr.E=`Ljava.lang.Object;`,Hr.F=(e=>!e.X),Hr.N=`java.lang.Object`,Hr.I=(e=>e!==null),Hr.A=new E().y(Hr,T,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Mr.prototype.$classData=Hr;var Ur=new E().p(void 0,`V`,`void`,void 0,void 0),Wr=new E().p(!1,`Z`,`boolean`,Pr,void 0),Gr=new E().p(0,`C`,`char`,Fr,Uint16Array),Kr=new E().p(0,`B`,`byte`,Ir,Int8Array),qr=new E().p(0,`S`,`short`,Lr,Int16Array),Jr=new E().p(0,`I`,`int`,Rr,Int32Array),Yr=new E().p(kr,`J`,`long`,zr,Int32Array),Xr=new E().p(0,`F`,`float`,Br,Float32Array),Zr=new E().p(0,`D`,`double`,Vr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Qr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function $r(e,t){return new Rr(Qr(e,t,-1))}var ei=new E().i(1,`com.raquo.airstream.core.InternalObserver`,{au:1});function ti(e){return dr(e).dG()+`@`+e.k()}function ni(e){var t=e.cV();return t===void 0?e.cP():t}function ri(){this.dV=null,ii=this,this.dV=ai().dS(new K((e=>void 0)),Ss().cD,!0)}x=ri.prototype=new w,x.constructor=ri,x.dS=(function(e,t,n){return new Lu(e,n,t,this)}),new E().i(ri,`com.raquo.airstream.core.Observer$`,{bJ:1});var ii;function ai(){return ii||=new ri,ii}function oi(){}x=oi.prototype=new w,x.constructor=oi,x.h0=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new E().i(oi,`com.raquo.airstream.core.ObserverList$`,{bL:1});var si;function ci(){return si||=new oi,si}function li(e){this.d3=null,this.dZ=null,this.d4=0,this.d3=e,this.dZ=void 0;var t=Ti().cd();this.d4=t===void 0?1:1+t.d4|0,pi().cg===-1||this.d4>pi().cg?El().aA(new rp(this,pi().cg)):_i().y?_i().b0.push(this)|0:Ti().dA(this)}x=li.prototype=new w,x.constructor=li;var ui=new E().i(li,`com.raquo.airstream.core.Transaction`,{bM:1});function di(){this.cg=0,this.e0=null,fi=this,this.cg=1e3,this.e0=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=di.prototype=new w,x.constructor=di,x.gx=(function(e){try{e.d3.c(e);var t=e.dZ;if(t!==void 0)for(;t.jY();)t.jU().k0(e)}catch(e){var n=e instanceof il?e:new X(e);El().aA(n)}}),new E().i(di,`com.raquo.airstream.core.Transaction$`,{bN:1});var fi;function pi(){return fi||=new di,fi}function mi(e){e.ch.length|0?new li(new K((t=>{for(;(e.ch.length|0)>0;){var n=e.ch.shift();try{n.c(t)}catch(e){var r=e instanceof il?e:new X(e);El().aA(r)}}for(;(e.b0.length|0)>0;){var i=e.b0.shift();Ti().dA(i)}}))):(e.b0.length|0)>0&&new li(new K((t=>{for(;(e.b0.length|0)>0;)Ti().dA(e.b0.shift())})))}function hi(){this.y=!1,this.ch=null,this.b0=null,gi=this,this.y=!1,this.ch=D().A(N().x(new(ms.r()).C([]))),this.b0=D().A(N().x(new(ui.r()).C([])))}x=hi.prototype=new w,x.constructor=hi,new E().i(hi,`com.raquo.airstream.core.Transaction$onStart$`,{bO:1});var gi;function _i(){return gi||=new hi,gi}function vi(e,t){return e.b1.get(t)}function yi(e,t){e.ci.unshift(t)}function bi(e){return e.ci.shift()}function xi(e,t,n){var r=vi(e,t),i=r===void 0,a=r===void 0?D().A(N().x(new(ui.r()).C([]))):r;a.push(n),i&&e.b1.set(t,a)}function Si(e,t){var n=vi(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.b1.delete(t),i}}function Ci(){this.ci=null,this.b1=null,wi=this,this.ci=D().A(N().x(new(ui.r()).C([]))),this.b1=/* @__PURE__ */ new Map}x=Ci.prototype=new w,x.constructor=Ci,x.dA=(function(e){var t=this.cd();t===void 0?(yi(this,e),pi().gx(e),this.i8(e)):xi(this,t,e)}),x.i8=(function(e){for(var t=e;;){var n=this.cd(),r=t;if(!(n!==void 0&&M().H(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.jl(t),t.d3=pi().e0;var i=this.cd();if(M().H(i,void 0)){if((this.b1.size|0)>0){var a=new bl(0);throw this.b1.forEach((e=>((t,n)=>{e.bX=e.bX+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.bX+` children for `+(this.b1.size|0)+` transactions remain. This is a bug in Airstream.`)}return}pi().gx(i),t=i}}),x.jl=(function(e){for(var t=e;;){var n=Si(this,t);if(M().H(n,void 0)){bi(this);var r=this.cd();if(!M().H(r,void 0))t=r;else return}else{yi(this,n);return}}}),x.cd=(function(){return this.ci[0]}),new E().i(Ci,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bP:1});var wi;function Ti(){return wi||=new Ci,wi}function Ei(){}x=Ei.prototype=new w,x.constructor=Ei,new E().i(Ei,`com.raquo.airstream.eventbus.EventBus$`,{bT:1});var Di;function Oi(){return Di||=new Ei,Di}function ki(e,t){var n=e.aC.indexOf(t)|0;if(n!==-1)e.aC.splice(n,1),e.J.d()||t.gV();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Ai(e){for(;(e.cn.length|0)>0;)ki(e,e.cn.shift())}function ji(e){this.e8=null,this.aC=null,this.bg=!1,this.cn=null,this.J=null,this.bh=0,this.e8=e,this.aC=D().A(N().x(new(Ni.r()).C([]))),this.bg=!0,this.cn=D().A(N().x(new(Ni.r()).C([]))),this.J=q(),this.bh=0}x=ji.prototype=new w,x.constructor=ji,x.gp=(function(){if(this.J.d()){var e=_i(),t=(()=>{var e=new vc(this.e8);this.J=new J(e),this.bg=!1,this.bh=0;for(var t=0,n=this.aC.length|0;t<n;){var r=t+this.bh|0;this.aC[r].gU(e),t=1+t|0}Ai(this),this.bg=!0,this.bh=0});if(_i(),e.y)t();else{e.y=!0;try{t()}finally{e.y=!1,mi(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),x.i2=(function(){if(this.J.d())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.bg=!1;for(var e=this.aC,t=0,n=e.length|0;t<n;)e[t].gV(),t=1+t|0;Ai(this);var r=this.J;r.d()||r.u().iV(),Ai(this),this.bg=!0,this.J=q()}),x.hC=(function(e,t){t?(this.bh=1+this.bh|0,this.aC.unshift(e)):this.aC.push(e);var n=this.J;if(!n.d()){var r=n.u();e.gU(r)}}),x.js=(function(e){this.bg?ki(this,e):this.cn.push(e)}),new E().i(ji,`com.raquo.airstream.ownership.DynamicOwner`,{bW:1});function Mi(e,t,n){this.co=null,this.e9=null,this.cp=null,this.co=e,this.e9=t,this.cp=q(),e.hC(this,n)}x=Mi.prototype=new w,x.constructor=Mi,x.cU=(function(){this.co.js(this)}),x.gU=(function(e){var t=_i(),n=(()=>{this.cp=this.e9.c(e)});if(_i(),t.y)n();else{t.y=!0;try{n()}finally{t.y=!1,mi(t)}}}),x.gV=(function(){var e=this.cp;e.d()||(e.u().cU(),this.cp=q())});var Ni=new E().i(Mi,`com.raquo.airstream.ownership.DynamicSubscription`,{bX:1});function Pi(){}x=Pi.prototype=new w,x.constructor=Pi,x.d0=(function(e,t,n){return new Mi(e,new K((e=>new J(t.c(e)))),n)}),x.h5=(function(e,t,n){return new Mi(e,new K((e=>(t.c(e),q()))),n)}),x.jF=(function(e,t,n){return Ii().d0(e,new K((e=>Ol(t,n,e))),!1)}),new E().i(Pi,`com.raquo.airstream.ownership.DynamicSubscription$`,{bY:1});var Fi;function Ii(){return Fi||=new Pi,Fi}function Li(e){e.bi=D().A(N().x(new(Ui.r()).C([])))}function Ri(e){for(var t=e.bi,n=0,r=t.length|0;n<r;)Vi(t[n]),n=1+n|0;e.bi.length=0}function zi(e,t){var n=e.bi.indexOf(t)|0;if(n!==-1)e.bi.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function Bi(e,t){e.bi.push(t)}function Vi(e){if(!e.d6)e.eb.C(),e.d6=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function Hi(e,t){this.ec=null,this.eb=null,this.d6=!1,this.ec=e,this.eb=t,this.d6=!1,e.jg(this)}x=Hi.prototype=new w,x.constructor=Hi,x.cU=(function(){Vi(this),zi(this.ec,this)});var Ui=new E().i(Hi,`com.raquo.airstream.ownership.Subscription`,{c1:1});function Wi(e,t){this.ed=null,this.ee=null,this.aD=null,this.b2=!1,this.ed=e,this.ee=t,this.aD=q(),this.b2=!1}x=Wi.prototype=new w,x.constructor=Wi,x.iQ=(function(){var e=this.aD;return!e.d()&&!e.u().co.J.d()}),x.jy=(function(e){if(this.b2)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.aD;if(t.d())var n=!1;else var r=t.u().co,n=e===null?r===null:e===r;if(!n){this.iQ()&&!e.J.d()&&(this.b2=!0);var i=this.aD;i.d()||(i.u().cU(),this.aD=q());var a=Ii().d0(e,new K((e=>(this.b2||this.ed.C(),new Hi(e,new G((()=>{this.b2||this.ee.C()})))))),!1);this.aD=new J(a),this.b2=!1}}),x.hV=(function(){if(this.b2)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.aD;e.d()||e.u().cU(),this.aD=q()}),new E().i(Wi,`com.raquo.airstream.ownership.TransferableSubscription`,{c2:1});function Gi(){}x=Gi.prototype=new w,x.constructor=Gi,x.A=(function(e){return[...dc().jL(e)]}),new E().i(Gi,`com.raquo.ew.JsArray$`,{c3:1});var Ki;function D(){return Ki||=new Gi,Ki}function qi(){}x=qi.prototype=new w,x.constructor=qi,x.iL=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),x.iu=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(qi,`com.raquo.ew.JsArray$RichJsArray$`,{c4:1});var Ji;function Yi(){return Ji||=new qi,Ji}function Xi(){this.ef=null,Zi=this,document.createElement(`template`),this.i0(W().b.jG().jH()),this.ef=/* @__PURE__ */ RegExp(` `,`g`)}x=Xi.prototype=new w,x.constructor=Xi,x.hI=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof il?e:new X(e);if(n instanceof X&&n.a5 instanceof DOMException)return!1;throw n instanceof X?n.a5:n}}),x.iS=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(M().H(t,r))return!0;n=r}}),x.hv=(function(e,t){e.addEventListener(t.bk.bj.cv,t.dd,t.de)}),x.jq=(function(e,t){e.removeEventListener(t.bk.bj.cv,t.dd,t.de)}),x.hZ=(function(e){return document.createElement(e.dJ())}),x.iA=(function(e,t){var n=this.iB(e,t);return n===void 0?void 0:t.bI.cO(n)}),x.iB=(function(e,t){var n=e.B.getAttributeNS(null,t.b3);return n===null?void 0:n}),x.dQ=(function(e,t,n){this.jv(e,t,t.bI.c9(n))}),x.jv=(function(e,t,n){n===null?this.jr(e,t):e.B.setAttribute(t.b3,n)}),x.jr=(function(e,t){e.B.removeAttribute(t.b3)}),x.jw=(function(e,t,n){this.jx(e,t,t.eR.c9(n))}),x.jx=(function(e,t,n){e.B[t.aE]=n}),x.h3=(function(e,t,n){var r=e.B,i=t.cw,a=t.cx,o=n===null?null:n;o===null?(a.aa(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.aa(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.i0=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.f9)}),x.iE=(function(e,t){var n=this.iF(e,t);return n===void 0?void 0:t.db.cO(n)}),x.iF=(function(e,t){var n=e.dN(),r=t.cz,i=n.getAttributeNS(r.d()?null:r.u(),t.dc);return i===null?void 0:i}),x.jz=(function(e,t,n){this.jA(e,t,t.db.c9(n))}),x.jA=(function(e,t,n){if(n===null)this.jt(e,t);else{var r=t.cz;if(r.d())e.dN().setAttribute(t.cy,n);else{var i=r.u();e.dN().setAttributeNS(i,t.cy,n)}}}),x.jt=(function(e,t){var n=e.dN(),r=t.cz;n.removeAttributeNS(r.d()?null:r.u(),t.dc)}),x.i1=(function(e){return document.createTextNode(e)}),x.iR=(function(e){return Ps().hX(e.tagName,45)}),x.i3=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new ch(this.gz(r),n);r=i,n=a}}),x.gz=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Ps(),t!==``)var n=`#`+t;else var r=e.className,n=(Ps(),r===``?``:`.`+r.replace(this.ef,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new E().i(Xi,`com.raquo.laminar.DomApi$`,{c5:1});var Zi;function O(){return Zi||=new Xi,Zi}function Qi(e,t,n){this.d8=null,this.eg=null,this.d7=null,this.d8=e,this.eg=t,this.d7=n}x=Qi.prototype=new w,x.constructor=Qi,x.aa=(function(e){this.d8===null?this.d7===null?Ts().iv(this.eg,e):Yi().iu(this.d7,Ou().iy(e)):this.d8.aa(e)}),new E().i(Qi,`com.raquo.laminar.Seq`,{c6:1});function $i(){ea=this,$()}x=$i.prototype=new w,x.constructor=$i,new E().i($i,`com.raquo.laminar.Seq$`,{c7:1});var ea;function ta(){return ea||=new $i,ea}function na(e){e.d9=ai(),El(),e.hd=Oi()}function ra(e){e.he=Pa()}function ia(e){aa(e,new K((e=>{e.eT.B.focus()})))}function aa(e,t){return new Ac(new K((e=>{var n=new yl(!e.aj.J.d()),r=new K((e=>{n.cI?n.cI=!1:t.c(e)}));Ii().h5(e.aj,new K((e=>(t=>{r.c(new Aa(e,t))}))(e)),!1)})),Pa())}function oa(){this.a4=null,this.eJ=null,this.bH=null,sa=this,this.a4=new bc(k()),new bc(k()),this.eJ=new bc(k()),this.bH=new yc}x=oa.prototype=new w,x.constructor=oa,new E().i(oa,`com.raquo.laminar.codecs.package$`,{cf:1});var sa;function k(){return sa||=new oa,sa}function ca(e){e.hf=ua(e,`class`,` `)}function la(e,t){return Tc(new I,`data-`+t,k().a4)}function ua(e,t,n){var r=Tc(new I,t,k().a4);return new Sc(r.b3,new K((e=>{var t=O().iA(e,r);return t===void 0?``:t})),new yd(((e,t)=>{O().dQ(e,r,t)})),n)}function da(e){e.hc=fa(e,`class`,` `)}function fa(e,t,n){var r=new Oc(t,k().a4,q());return new Sc(r.cy,new K((e=>{var t=O().iE(e,r);return t===void 0?``:t})),new yd(((e,t)=>{O().jz(e,r,t)})),n)}function pa(){this.eO=null,ma=this,W().b.h9(),D().A(N().x(new(wc.r()).C([W().b.dL()]))),W().b.h9(),D().A(N().x(new(wc.r()).C([W().b.dL(),W().b.j8()]))),W().b.hU(),D().A(N().x(new(wc.r()).C([W().b.dL(),W().b.cb()]))),this.eO=D().A(N().x(new(bp.r()).C([`value`,`checked`])))}x=pa.prototype=new w,x.constructor=pa,new E().i(pa,`com.raquo.laminar.inputs.InputController$`,{cu:1});var ma;function ha(){return ma||=new pa,ma}function ga(e){this.cq=null,this.cq=e}x=ga.prototype=new w,x.constructor=ga,x.gX=(function(e,t){try{this.cq.dB(e,t)}catch(e){var n=e instanceof il?e:new X(e);El().aA(n)}}),x.hW=(function(e){return new ga(new yd(((t,n)=>{this.cq.dB(t,n),e.cq.dB(t,n)})))}),x.hJ=(function(e){return e===void 0?this:e.hW(this)}),new E().i(ga,`com.raquo.laminar.inserters.InserterHooks`,{cx:1});function _a(){}x=_a.prototype=new w,x.constructor=_a,x.ac=(function(e,t){return new Md(e,void 0)}),new E().i(_a,`com.raquo.laminar.inserters.StaticChildInserter$`,{cz:1});var va;function ya(){return va||=new _a,va}function ba(e,t){this.eQ=null,this.eP=null,this.eQ=e,this.eP=t}x=ba.prototype=new w,x.constructor=ba,x.l=(function(e){return new Ll(this.eQ,this.eP.c(e),new bd(((e,t,n)=>{O().h3(e,t,n)})))}),new E().i(ba,`com.raquo.laminar.keys.DerivedStyleProp`,{cC:1});function xa(e,t,n,r){this.bj=null,this.cu=!1,this.ct=!1,this.cs=null,this.bj=e,this.cu=t,this.ct=n,this.cs=r}x=xa.prototype=new w,x.constructor=xa,x.iZ=(function(e){var t=new K((t=>{var n=this.cs.c(t);return n.d()?q():new J(e.c(n.u()))}));return new xa(this.bj,this.cu,this.ct,t)}),x.dI=(function(e){var t=new K((t=>{var n=this.cs.c(t);return n.d()?q():new J((n.u(),e.C()))}));return new xa(this.bj,this.cu,this.ct,t)}),new E().i(xa,`com.raquo.laminar.keys.EventProcessor`,{cD:1});function Sa(){}x=Sa.prototype=new w,x.constructor=Sa,x.c8=(function(e,t,n){return new xa(e,t,n,new K((e=>new J(e))))}),new E().i(Sa,`com.raquo.laminar.keys.EventProcessor$`,{cE:1});var Ca;function wa(){return Ca||=new Sa,Ca}function Ta(){}x=Ta.prototype=new w,x.constructor=Ta;function Ea(){}Ea.prototype=x;function Da(){this.hg=null,this.hh=null,this.hi=null,this.hj=null,this.hg=`http://www.w3.org/2000/svg`,this.hh=`http://www.w3.org/1999/xlink`,this.hi=`http://www.w3.org/XML/1998/namespace`,this.hj=`http://www.w3.org/2000/xmlns/`}x=Da.prototype=new w,x.constructor=Da,x.j4=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new df(e)}}),new E().i(Da,`com.raquo.laminar.keys.SvgAttr$`,{cH:1});var Oa;function ka(){return Oa||=new Da,Oa}function Aa(e,t){this.eT=null,this.eS=null,this.eT=e,this.eS=t}x=Aa.prototype=new w,x.constructor=Aa,new E().i(Aa,`com.raquo.laminar.lifecycle.MountContext`,{cI:1});var ja=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function Ma(){this.hk=null,Na=this,this.hk=new kc}x=Ma.prototype=new w,x.constructor=Ma,new E().i(Ma,`com.raquo.laminar.modifiers.Modifier$`,{cM:1});var Na;function Pa(){return Na||=new Ma,Na}function Fa(){this.Q=null,Ia=this,this.Q=new jc}x=Fa.prototype=new w,x.constructor=Fa,new E().i(Fa,`com.raquo.laminar.modifiers.RenderableNode$`,{cQ:1});var Ia;function La(){return Ia||=new Fa,Ia}function Ra(){this.p=null,za=this,this.p=new Fc(new K((e=>e)),A()),new Fc(new K((e=>``+(e|0))),A()),new Fc(new K((e=>``+ +e)),A()),new Fc(new K((e=>``+!!e)),A()),new Fc(new K((e=>e.jK())),A())}x=Ra.prototype=new w,x.constructor=Ra,new E().i(Ra,`com.raquo.laminar.modifiers.RenderableText$`,{cV:1});var za;function A(){return za||=new Ra,za}function Ba(){}x=Ba.prototype=new w,x.constructor=Ba,x.cL=(function(e,t,n){var r=new J(e);t.hb(r),n!==void 0&&n.gX(e,t);var i=O().hI(e.bd(),t.bd());return i&&t.h4(r),i}),new E().i(Ba,`com.raquo.laminar.nodes.ParentNode$`,{cY:1});var Va;function Ha(){return Va||=new Ba,Va}function Ua(){}x=Ua.prototype=new w,x.constructor=Ua,x.jO=(function(e,t){return Ii().d0(e.aj,new K((n=>t.c(new Aa(e,n)))),!0)}),new E().i(Ua,`com.raquo.laminar.nodes.ReactiveElement$`,{d0:1});var Wa;function Ga(){return Wa||=new Ua,Wa}function Ka(e){this.f5=null,this.f5=new ga(new yd(((t,n)=>{matchResult1:{var r=n.bd();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=El(),a=r.textContent,o=t.bd().tagName;i.aA(V(new H,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}x=Ka.prototype=new w,x.constructor=Ka,x.a9=(function(e){return e.dH(new K((e=>e.jQ(this.f5))))}),new E().i(Ka,`com.raquo.laminar.nodes.Slot`,{d3:1});function qa(){}x=qa.prototype=new w,x.constructor=qa,x.hF=(function(){Ya().ig(),Ya().ij(),Ya().ik(),Ya().il(),Ya().im(),Ya().io(),Ya().ip(),Ya().iq(),Ya().ir(),Ya().ih(),Ya().ii()}),x.ig=(function(){var e=document.querySelector(`#example1`);if(!ys().a8(e).d()){W(),W();var t=new jd;new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.dM().dz(t))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([]),new Q([new Fl((W(),wa().c8(W().b.cb(),!1,!1)).dI(new wu((()=>!0))),new K((e=>{t.bD.bb(e)}))),z(W().b,`Open Dialog`,A().p)]))])))}}),x.ij=(function(){var e=document.querySelector(`#example2`);if(!ys().a8(e).d()){W(),W();var t=new jd;new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.dM().dz(t))),new U((e=>e.P().l(`Dialog`))),new U((e=>e.jR().l(!0))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([]),new Q([new Fl((W(),wa().c8(W().b.cb(),!1,!1)).dI(new wu((()=>!0))),new K((e=>{t.bD.bb(e)}))),z(W().b,`Open Dialog`,A().p)]))])))}}),x.ik=(function(){var e=document.querySelector(`#example3`);if(!ys().a8(e).d()){W(),W();var t=new jd;new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.dM().dz(t))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([]),new Q([new Fl((W(),wa().c8(W().b.cb(),!1,!1)).dI(new wu((()=>!0))),new K((e=>{t.bD.bb(e)}))),z(W().b,`Open Dialog`,A().p)]))])))}}),x.il=(function(){var e=document.querySelector(`#example4`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-opening`))),new U((e=>e.P().l(`Dialog`)))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-opening`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))]))))}),x.im=(function(){var e=document.querySelector(`#example5`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-dismiss`))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-dismiss`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))]))))}),x.io=(function(){var e=document.querySelector(`#example6`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-custom-width`))),new U((e=>e.P().l(`Dialog`))),new U((e=>e.jD().l(`--width: 50vw;`))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-custom-width`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))]))))}),x.ip=(function(){var e=document.querySelector(`#example7`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-scrolling`))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([W().b.a2().G(new Q([W().b.iJ().ha().l(150),W().b.hS().l(`1px dashed var(--wa-color-surface-border)`),W().b.ji().l(`0 1rem`),W().b.jh().G(new Q([z(W().b,`Scroll down and give it a try! 👇`,A().p)]))]))])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-scrolling`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))]))))}),x.iq=(function(){var e=document.querySelector(`#example8`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q(F().t(new(ja.r()).C([Zl().m(new Q(F().t(new(ms.r()).C([new U((e=>e.aY().l(`dialog-header-actions`))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().iI().a9(new Q(F().t(new(Nd.r()).C([(W(),ya().ac(B().m(new Q(F().t(new(ms.r()).C([new U((e=>e.hG().jk()))]))),new Q(F().t(new(ja.r()).C([new Fl((W(),wa().c8(W().b.cb(),!1,!1)),new K((e=>(t=>{e.bb(t)}))(W().b.d9.dS(new U((e=>{window.open(window.location.href)})),Ss().cD,!0)))),eu().m(new Q(F().t(new(ms.r()).C([new U((e=>e.j3().l(`arrow-up-right-from-square`))),new U((e=>e.P().l(`Open in new window`)))]))),new Q(F().t(new(ja.r()).C([]))))])))),La().Q))])))),cs().S,Pc()))),new U((e=>Pl(W().b,so().ao().a9(new Q(F().t(new(Nd.r()).C([(W(),ya().ac(B().m(new Q(F().t(new(ms.r()).C([new U((e=>e.as().ak())),new U((e=>e.am().an()))]))),new Q(F().t(new(ja.r()).C([z(W().b,`Close`,A().p)])))),La().Q))])))),cs().S,Pc())))]))),new Q(F().t(new(ja.r()).C([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])))),B().m(new Q(F().t(new(ms.r()).C([new U((e=>to(e.aZ(),`dialog`,`dialog-header-actions`)))]))),new Q(F().t(new(ja.r()).C([z(W().b,`Open Dialog`,A().p)]))))]))))))}),x.ir=(function(){var e=document.querySelector(`#example9`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-light-dismiss`))),new U((e=>e.P().l(`Dialog`))),new U((e=>e.iW().l(!0))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Close`,A().p)])),La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,A().p)])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-light-dismiss`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))]))))}),x.ih=(function(){var e=document.querySelector(`#example10`);if(!ys().a8(e).d()){W();var t=B().m(new Q([new U((e=>e.as().ak())),new U((e=>e.am().an()))]),new Q([z(W().b,`Only this button will close it`,A().p)]));new zl(e,W().b.a2().G(new Q([Zl().m(new Q([new U((e=>e.aY().l(`dialog-deny-close`))),new U((e=>e.P().l(`Dialog`))),new U((e=>new Fl((W(),wa().c8(e.ja(),!1,!1)).iZ(new U((e=>{M().H(e.detail.source,t.B)||e.preventDefault()}))),new K((e=>(t=>{e.bb(t)}))(W().b.d9.dV))))),new U((e=>Pl(W().b,so().ao().a9(new Q([(W(),ya().ac(t,La().Q))])),cs().S,Pc())))]),new Q([z(W().b,`This dialog will only close when you click the button below.`,A().p)])),B().m(new Q([new U((e=>to(e.aZ(),`dialog`,`dialog-deny-close`)))]),new Q([z(W().b,`Open Dialog`,A().p)]))])))}}),x.ii=(function(){var e=document.querySelector(`#example11`);ys().a8(e).d()||(W(),new zl(e,W().b.a2().G(new Q(F().t(new(ja.r()).C([Zl().m(new Q(F().t(new(ms.r()).C([new U((e=>e.aY().l(`dialog-focus`))),new U((e=>e.P().l(`Dialog`))),new U((e=>Pl(W().b,so().ao().a9(new Q(F().t(new(Nd.r()).C([(W(),ya().ac(B().m(new Q(F().t(new(ms.r()).C([new U((e=>e.as().ak())),new U((e=>e.am().an()))]))),new Q(F().t(new(ja.r()).C([z(W().b,`Close`,A().p)])))),La().Q))])))),cs().S,Pc())))]))),new Q(F().t(new(ja.r()).C([ru().m(new Q(F().t(new(ms.r()).C([new U((e=>e.hN().l(!0))),new U((e=>e.jj().l(`I will have focus when the dialog is opened`)))]))),new Q(F().t(new(ja.r()).C([]))))])))),B().m(new Q(F().t(new(ms.r()).C([new U((e=>to(e.aZ(),`dialog`,`dialog-focus`)))]))),new Q(F().t(new(ja.r()).C([z(W().b,`Open Dialog`,A().p)]))))]))))))}),new E().i(qa,`examples.dialog.Main$package$`,{d6:1});var Ja;function Ya(){return Ja||=new qa,Ja}function Xa(e){try{Ya().hF()}catch(e){throw e}}function Za(e,t){return la(W().b,t).l(`close`)}function Qa(){this.fm=null,this.fn=!1}x=Qa.prototype=new w,x.constructor=Qa,x.an=(function(){return this.fn||=(this.fm=Za(this,`dialog`),!0),this.fm}),new E().i(Qa,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$`,{da:1});var $a;function eo(){return $a||=new Qa,$a}function to(e,t,n){return la(W().b,t).l(`open `+n)}function no(){}x=no.prototype=new w,x.constructor=no,new E().i(no,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Open$`,{db:1});var ro;function io(){return ro||=new no,ro}function ao(){this.fA=null,this.fB=!1,this.fy=null,this.fz=!1}x=ao.prototype=new w,x.constructor=ao,x.iI=(function(){return this.fB||=(this.fA=new Ka(`header-actions`),!0),this.fA}),x.ao=(function(){return this.fz||=(this.fy=new Ka(`footer`),!0),this.fy}),new E().i(ao,`io.github.nguyenyou.webawesome.laminar.Dialog$slots$`,{dd:1});var oo;function so(){return oo||=new ao,oo}function co(e,t){for(var n=j().ag(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=lo(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new $c(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new $c(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var ee=r.length|0,te=new(el.r()).C(ee);for(i=0;i<ee;)te.a[i]=r[i],i=1+i|0;return te}function lo(e,t){var n=j().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().ag(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[uo(e,c[1]),vo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[uo(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[uo(e,d[1]),`<clinit>`]}function uo(e,t){var n=po(e);if(Wo().ds.call(n,t))var r=po(e)[t];else var r=ko(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function fo(e){if(!((1&e.R)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.dp=t,e.R=(1|e.R)<<24>>24}return e.dp}function po(e){return(1&e.R)<<24>>24?e.dp:fo(e)}function mo(e){if(!((2&e.R)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.dq=t,e.R=(2|e.R)<<24>>24}return e.dq}function ho(e){return(2&e.R)<<24>>24?e.dq:mo(e)}function go(e){return(4&e.R)<<24>>24||(e.dn=Object.keys(ho(e)),e.R=(4|e.R)<<24>>24),e.dn}function _o(e){return(4&e.R)<<24>>24?e.dn:go(e)}function vo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function yo(e,t){return t?t.arguments&&t.stack?bo(e,t):t.stack&&t.sourceURL?Co(e,t):t.stack&&t.number?So(e,t):t.stack&&t.fileName?xo(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?wo(e,t):To(e,t):wo(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Eo(e,t):Do(e,t):t.stack&&!t.fileName?bo(e,t):Oo(e,t):[]}function bo(e,t){return(t.stack+`
`).replace(j().ag(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().I(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().I(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().I(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().I(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function xo(e,t){return t.stack.replace(j().I(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().I(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function So(e,t){return t.stack.replace(j().I(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().I(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().I(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Co(e,t){return t.stack.replace(j().I(`\\[native code\\]\\n`,`m`),``).replace(j().I(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().I(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function wo(e,t){for(var n=j().I(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function To(e,t){for(var n=j().I(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Eo(e,t){for(var n=j().ag(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Do(e,t){for(var n=j().ag(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().ag(`<anonymous function: (\\S+)>`),`$1`).replace(j().ag(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Oo(e,t){return[]}function ko(e,t,n){for(;;)if(t<(_o(e).length|0)){var r=_o(e)[t];if(n.startsWith(r))return``+ho(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ao(){this.dp=null,this.dq=null,this.dn=null,this.R=0}x=Ao.prototype=new w,x.constructor=Ao,x.is=(function(e){return co(this,yo(this,e))}),new E().i(Ao,`java.lang.StackTrace$`,{dA:1});var jo;function Mo(){return jo||=new Ao,jo}function No(){}x=No.prototype=new w,x.constructor=No,x.ag=(function(e){return new RegExp(e)}),x.I=(function(e,t){return new RegExp(e,t)}),new E().i(No,`java.lang.StackTrace$StringRE$`,{dB:1});var Po;function j(){return Po||=new No,Po}function Fo(){this.fL=null,this.hl=null,Io=this,this.fL=new Zp(!1),this.hl=new Zp(!0)}x=Fo.prototype=new w,x.constructor=Fo,new E().i(Fo,`java.lang.System$Streams$`,{dF:1});var Io;function Lo(){return Io||=new Fo,Io}function Ro(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function zo(){this.dr=null,this.fM=null,Bo=this,this.dr=Ro(this),this.fM=null}x=zo.prototype=new w,x.constructor=zo,x.gO=(function(e,t){if(this.dr!==null){var n=this.dr;return Wo().ds.call(n,e)?n[e]:t}return this.fM.gO(e,t)}),new E().i(zo,`java.lang.System$SystemProperties$`,{dG:1});var Bo;function Vo(){return Bo||=new zo,Bo}function Ho(){this.ds=null,Uo=this,this.ds=Object.prototype.hasOwnProperty}x=Ho.prototype=new w,x.constructor=Ho,new E().i(Ho,`java.lang.Utils$Cache$`,{dI:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(e,t){return e===t}function Ko(e){return 0}function qo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aR)}var Jo=new E().i(0,`java.lang.Void`,{aR:1},(e=>e===void 0));function Yo(e,t){throw qd(new Yd,`argument type mismatch`)}function Xo(){}x=Xo.prototype=new w,x.constructor=Xo,x.ab=(function(e){return e instanceof T||e instanceof Pr||e instanceof Fr||e instanceof Ir||e instanceof Lr||e instanceof Rr?e.a.length:e instanceof zr?e.a.length>>>1|0:(e instanceof Br||e instanceof Vr||Yo(this,e),e.a.length)}),new E().i(Xo,`java.lang.reflect.Array$`,{dJ:1});var Zo;function Qo(){return Zo||=new Xo,Zo}function $o(){}x=$o.prototype=new w,x.constructor=$o,x.hP=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),x.gE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),x.gD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gG=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new E().i($o,`java.util.Arrays$`,{dK:1});var es;function ts(){return es||=new $o,es}function ns(e,t){return as().h8(e,t)}function rs(){}x=rs.prototype=new w,x.constructor=rs,x.h8=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),x.gN=(function(e){if(e<-0x8000000000000000)return C(0,-2147483648);if(e>=0x8000000000000000)return C(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return C(t,e<0&&t!==0?n-1|0:n)}),x.i6=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,m=p>>>16|0,ie=Math.imul(te,re),ae=Math.imul(ne,re),oe=Math.imul(te,m),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0;if(((s-((((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,m)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0)|0)-((o-se|0)>>>0>o>>>0|0)|0)<0)var le=p-1|0,ue=(ee-1|0)+(le!==-1|0)|0,de=le,fe=ue;else var de=p,fe=ee}else var pe=(s>>>0)/(gr(u)>>>0)|0,de=(4294967296*(s-Math.imul(u,pe)|0)+(o>>>0))/u|0,fe=pe;if((t^r)>=0)return C(de,fe);var me=-de|0;return C(me,(-fe|0)-(me!==0|0)|0)}),x.i7=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(gr(n)>>>0)|0;return C((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0)|0)-((e-te|0)>>>0>e>>>0|0)|0)<0){var re=o-1|0;return C(re,(s-1|0)+(re!==-1|0)|0)}return C(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?C(0,0):C(1,0)}),x.jo=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,m=p>>>16|0,ie=Math.imul(te,re),ae=Math.imul(ne,re),oe=Math.imul(te,m),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0,le=(((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,m)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0,ue=o-se|0,de=(s-le|0)-(ue>>>0>o>>>0|0)|0;if(de<0)var fe=ue+u|0,pe=(de+d|0)+(fe>>>0<ue>>>0|0)|0,me=fe,he=pe;else var me=ue,he=de}else var ge=(4294967296*((s>>>0)%(gr(u)>>>0)|0)+(o>>>0))/u|0,me=o-Math.imul(u,ge)|0,he=0;if(t<0){var _e=-me|0;return C(_e,(-he|0)-(_e!==0|0)|0)}return C(me,he)}),x.jp=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(gr(n)>>>0)|0)+(e>>>0))/n|0;return C(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0,re=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0,m=e-te|0,ie=(t-re|0)-(m>>>0>e>>>0|0)|0;if(ie<0){var ae=m+n|0;return C(ae,(ie+r|0)+(ae>>>0<m>>>0|0)|0)}return C(m,ie)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return C(e,t);var oe=e-n|0;return C(oe,(t-r|0)-(oe>>>0>e>>>0|0)|0)}),new E().i(rs,`org.scalajs.linker.runtime.RuntimeLong$`,{dN:1});var is;function as(){return is||=new rs,is}function os(){this.S=null,ss=this,this.S=new lf}x=os.prototype=new w,x.constructor=os,new E().i(os,`scala.$less$colon$less$`,{dQ:1});var ss;function cs(){return ss||=new os,ss}function ls(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)N().cM(r,s,N().b8(t,o)),o=1+o|0,s=1+s|0}function us(){}x=us.prototype=new w,x.constructor=us,x.gI=(function(e,t){var n=e.r();if(n>-1){for(var r=t.dK(n),i=e.e(),a=0;a<n;)N().cM(r,a,i.h()),a=1+a|0;return r}var o=null,s=t.cX(),c=s===Gr.l();o=[];for(var l=e.e();l.j();){var u=l.h(),d=c?Ar(u):u===null?Us().dP(s):u;o.push(d)}return Us().dO(s===Ur.l()?Jo.l():s===Ys.l()||s===Tu.l()?Hr.l():s,o)}),x.cN=(function(e,t,n,r,i){var a=dr(e);a.ai.Z&&dr(n).ai.R(a.ai)?e.ah(t,n,r,i):ls(this,e,t,n,r,i)}),x.gH=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!M().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(us,`scala.Array$`,{dS:1});var ds;function fs(){return ds||=new us,ds}var ps=new E().i(1,`scala.Function0`,{ak:1}),ms=new E().i(1,`scala.Function1`,{e:1});function hs(){}x=hs.prototype=new w,x.constructor=hs;function gs(){}gs.prototype=x;function _s(){}x=_s.prototype=new w,x.constructor=_s,x.a8=(function(e){return e===null?q():new J(e)}),new E().i(_s,`scala.Option$`,{e0:1});var vs;function ys(){return vs||=new _s,vs}function bs(){this.fT=null,this.cD=null,xs=this,this.fT=new U((e=>this.fT)),this.cD=new ad}x=bs.prototype=new w,x.constructor=bs,new E().i(bs,`scala.PartialFunction$`,{e1:1});var xs;function Ss(){return xs||=new bs,xs}function Cs(){this.fW=null,ws=this,this.fW=new U((e=>Ts().fW))}x=Cs.prototype=new w,x.constructor=Cs,x.iv=(function(e,t){var n=Qo().ab(e),r=0;if(e instanceof T)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Rr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Vr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof zr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.c(C(o,s)),r=1+r|0}else if(e instanceof Br)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Fr)for(;r<n;)t.c(Or(e.a[r])),r=1+r|0;else if(e instanceof Ir)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Lr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof Pr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else throw new df(e)}),new E().i(Cs,`scala.collection.ArrayOps$`,{e6:1});var ws;function Ts(){return ws||=new Cs,ws}function Es(e,t){for(var n=e.e();n.j();)t.c(n.h())}function Ds(e,t,n,r){var i=e.e(),a=n;matchResult18:{var o,s=e.r();if(s===-1){var o=Qo().ab(t);break matchResult18}var o=s}for(var c=Qo().ab(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.j();)N().cM(t,a,i.h()),a=1+a|0;return a-n|0}function Os(e,t,n,r){return e.r()===0?``+t+r:e.by(fh(new ph),t,n,r).N.q}function ks(e,t,n,r,i){var a=t.N;n.length!==0&&(a.q=``+a.q+n);var o=e.e();if(o.j()){var s=o.h();for(a.q=``+a.q+s;o.j();){r.length!==0&&(a.q=``+a.q+r);var c=o.h();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function As(e,t){if(e.r()>=0){var n=e.r(),r=t.dK(n);return e.aX(r,0,2147483647),r}var i=null,a=t.cX(),o=a===Gr.l();i=[];for(var s=e.e();s.j();){var c=s.h(),l=o?Ar(c):c===null?Us().dP(a):c;i.push(l)}return Us().dO(a===Ur.l()?Jo.l():a===Ys.l()||a===Tu.l()?Hr.l():a,i)}function js(e,t){this.fY=null,this.bQ=null,this.fY=e,this.bQ=t}x=js.prototype=new w,x.constructor=js,x.iH=(function(){return this.fY.C().e()}),new E().i(js,`scala.collection.Iterator$ConcatIteratorCell`,{ef:1});function Ms(){this.fZ=null,Ns=this,this.fZ=new U((e=>this.fZ))}x=Ms.prototype=new w,x.constructor=Ms,x.hX=(function(e,t){return yp(e,t)>=0}),new E().i(Ms,`scala.collection.StringOps$`,{el:1});var Ns;function Ps(){return Ns||=new Ms,Ns}function Fs(){}x=Fs.prototype=new w,x.constructor=Fs,x.gQ=(function(e,t){return Zd(new $d,e+` is out of bounds (min 0, max `+t+`)`)}),new E().i(Fs,`scala.collection.generic.CommonErrors$`,{em:1});var Is;function Ls(){return Is||=new Fs,Is}function Rs(){this.g3=0,zs=this;try{Ps();var e=Xc().iT(Vo().gO(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.g3=e}x=Rs.prototype=new w,x.constructor=Rs,new E().i(Rs,`scala.collection.immutable.IndexedSeqDefaults$`,{ep:1});var zs;function Bs(){return zs||=new Rs,zs}function Vs(){}x=Vs.prototype=new w,x.constructor=Vs,x.dP=(function(e){return e===Kr.l()||e===qr.l()||e===Gr.l()||e===Jr.l()?0:e===Yr.l()?C(0,0):e===Xr.l()||e===Zr.l()?0:e===Wr.l()?!1:e===Ur.l()?void 0:null}),x.dO=(function(e,t){var n=t.length|0;if(e===Gr.l()){for(var r=new Fr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ai.U(n),o=0;o!==n;)N().cM(a,o,t[o]),o=1+o|0;return a}),new E().i(Vs,`scala.collection.mutable.ArrayBuilder$`,{ex:1});var Hs;function Us(){return Hs||=new Vs,Hs}function Ws(){}x=Ws.prototype=new w,x.constructor=Ws,x.gw=(function(e,t,n){if(t!==e)throw new sf(n)}),new E().i(Ws,`scala.collection.mutable.MutationTracker$`,{eF:1});var Gs;function Ks(){return Gs||=new Ws,Gs}function qs(){}x=qs.prototype=new w,x.constructor=qs,x.H=(function(e,t){return e===t||(Qc(e)?this.ie(e,t):e instanceof ur?this.ic(e,t):e===null?t===null:pr(e,t))}),x.ie=(function(e,t){if(Qc(t))return this.id(e,t);if(t instanceof ur){if(typeof e==`number`)return+e===t.c;if(e instanceof S){var n=jr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:pr(e,t)}return e===null?t===null:pr(e,t)}),x.id=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof S){var r=jr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof S){var a=jr(e),o=a.l,s=a.h;if(t instanceof S){var c=jr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:pr(e,t)}),x.ic=(function(e,t){if(t instanceof ur)return e.c===t.c;if(Qc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof S){var n=jr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:pr(t,e)}return e===null&&t===null}),new E().i(qs,`scala.runtime.BoxesRunTime$`,{eT:1});var Js;function M(){return Js||=new qs,Js}var Ys=new E().i(0,`scala.runtime.Null$`,{eW:1});function Xs(){}x=Xs.prototype=new w,x.constructor=Xs,x.bz=(function(){throw tf(new rf,`tried to cast away nullability, but value is null`)}),new E().i(Xs,`scala.runtime.Scala3RunTime$`,{eX:1});var Zs;function Qs(){return Zs||=new Xs,Zs}function $s(){}x=$s.prototype=new w,x.constructor=$s,x.hE=(function(e){return e===null?Ys.l():dr(e)}),x.b8=(function(e,t){if(e instanceof T||e instanceof Rr||e instanceof Vr)return e.a[t];if(e instanceof zr){var n=e.a,r=t<<1;return C(n[r],n[r+1|0])}if(e instanceof Br)return e.a[t];if(e instanceof Fr)return Or(e.a[t]);if(e instanceof Ir||e instanceof Lr||e instanceof Pr)return e.a[t];throw e===null?nf(new rf):new df(e)}),x.cM=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof Rr)e.a[t]=n|0;else if(e instanceof Vr)e.a[t]=+n;else if(e instanceof zr){var r=jr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Br)e.a[t]=Math.fround(n);else if(e instanceof Fr)e.a[t]=Ar(n);else if(e instanceof Ir)e.a[t]=n|0;else if(e instanceof Lr)e.a[t]=n|0;else if(e instanceof Pr)e.a[t]=!!n;else throw e===null?nf(new rf):new df(e)}),x.hq=(function(e){return Os(e.bc(),e.af()+`(`,`,`,`)`)}),x.x=(function(e){if(e===null)return null;if(e.a.length===0){var t=Np();return cm(),Ap(t)}return new Gm(e)}),new E().i($s,`scala.runtime.ScalaRunTime$`,{eY:1});var ec;function N(){return ec||=new $s,ec}function tc(){}x=tc.prototype=new w,x.constructor=tc,x.n=(function(e,t){var n=this.cW(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.cW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.D=(function(e,t){return this.hO(e^t)}),x.hO=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.iY=(function(e,t){return t===e>>31?e:e^t}),x.i9=(function(e){var t=_r(e);if(t===e)return t;var n=as().gN(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=yr;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),x.v=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.i9(+e);if(e instanceof S){var t=jr(e);return this.iY(t.l,t.h)}return mr(e)}),x.iO=(function(e){throw Zd(new $d,``+e)}),new E().i(tc,`scala.runtime.Statics$`,{f0:1});var nc;function P(){return nc||=new tc,nc}function rc(){}x=rc.prototype=new w,x.constructor=rc,x.hL=(function(e){return e}),new E().i(rc,`scala.scalajs.js.defined$`,{f6:1});var ic;function ac(){return ic||=new rc,ic}function oc(){}x=oc.prototype=new w,x.constructor=oc,x.jB=(function(e,t){return setTimeout((()=>{t.C()}),e)}),new E().i(oc,`scala.scalajs.js.timers.package$`,{f7:1});var sc;function cc(){return sc||=new oc,sc}function lc(){}x=lc.prototype=new w,x.constructor=lc,x.jL=(function(e){if(e instanceof Q)return e.cJ;var t=[];return e.aa(new U((e=>t.push(e)|0))),t}),new E().i(lc,`scala.scalajs.runtime.Compat$`,{fg:1});var uc;function dc(){return uc||=new lc,uc}function fc(){}x=fc.prototype=new w,x.constructor=fc,x.t=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new E().i(fc,`scala.scalajs.runtime.package$`,{fi:1});var pc;function F(){return pc||=new fc,pc}function mc(){}x=mc.prototype=new w,x.constructor=mc,x.jC=(function(e){var t=`Illegal command line`+(e.gP()===0?``:e.gP()===1?` after first argument`:` after `+e.gP()+` arguments`)+`: `+e.jX();sl().jf().iU(t+`
`)}),new E().i(mc,`scala.util.CommandLineParser$`,{fj:1});function hc(e){this.dy=null,this.dy=e}x=hc.prototype=new w,x.constructor=hc,x.o=(function(){return`DynamicVariable(`+this.dy+`)`}),new E().i(hc,`scala.util.DynamicVariable`,{fl:1});function gc(){}x=gc.prototype=new w,x.constructor=gc;function _c(){}_c.prototype=x,x.n=(function(e,t){var n=this.cW(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.cW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.D=(function(e,t){return this.ce(e^t)}),x.ce=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.gZ=(function(e,t,n){var r=e.ad();if(r===0)return n?t:_p(e.af());var i=t;n||(i=this.n(i,_p(e.af())));for(var a=0;a<r;)i=this.n(i,P().v(e.ae(a))),a=1+a|0;return this.D(i,r)}),x.gu=(function(e,t,n){var r=e.ad(),i=_p(n===null?e.af():n);if(r===0)return i;var a=t;a=this.n(a,i);for(var o=0;o<r;)a=this.n(a,P().v(e.ae(o))),o=1+o|0;return this.D(a,r)}),x.jN=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.e();o.j();){var s=o.h(),c=P().v(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.n(l,n),l=this.n(l,r),l=this.cW(l,a),this.D(l,i)}),x.je=(function(e,t){var n=e.e(),r=t;if(!n.j())return this.D(r,0);var i=n.h();if(!n.j())return this.D(this.n(r,P().v(i)),1);var a=n.h(),o=P().v(i);r=this.n(r,o);for(var s=r,c=P().v(a),l=c-o|0,u=2;n.j();){r=this.n(r,c);var d=P().v(n.h());if(l!==(d-c|0)||l===0){for(r=this.n(r,d),u=1+u|0;n.j();)r=this.n(r,P().v(n.h())),u=1+u|0;return this.D(r,u)}c=d,u=1+u|0}return this.ce(this.n(this.n(s,l),c))}),x.w=(function(e,t){var n=t,r=Qo().ab(e);switch(r){case 0:return this.D(n,0);case 1:return this.D(this.n(n,P().v(N().b8(e,0))),1);default:var i=P().v(N().b8(e,0));n=this.n(n,i);for(var a=n,o=P().v(N().b8(e,1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=P().v(N().b8(e,c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,P().v(N().b8(e,c))),c=1+c|0;return this.D(n,r)}o=l,c=1+c|0}return this.ce(this.n(this.n(a,s),o))}}),x.jm=(function(e,t,n,r){return this.ce(this.n(this.n(this.n(r,e),t),n))}),x.iM=(function(e,t){var n=t,r=e.f();switch(r){case 0:return this.D(n,0);case 1:return this.D(this.n(n,P().v(e.i(0))),1);default:var i=P().v(e.i(0));n=this.n(n,i);for(var a=n,o=P().v(e.i(1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=P().v(e.i(c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,P().v(e.i(c))),c=1+c|0;return this.D(n,r)}o=l,c=1+c|0}return this.ce(this.n(this.n(a,s),o))}}),x.iX=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.d();){var l=c.O(),u=c.E(),d=P().v(l);switch(r=this.n(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.jm(s,a,o,t):this.D(r,n)});function vc(e){this.bi=null,this.ea=null,this.d5=!1,this.ea=e,Li(this),this.d5=!1}x=vc.prototype=new w,x.constructor=vc,x.jg=(function(e){this.d5?(Vi(e),this.ea.C()):Bi(this,e)}),x.iV=(function(){Ri(this),this.d5=!0}),new E().i(vc,`com.raquo.airstream.ownership.OneTimeOwner`,{bZ:1,c0:1});function yc(){}x=yc.prototype=new w,x.constructor=yc,x.i4=(function(e){return e!==null}),x.ib=(function(e){return e?``:null}),x.cO=(function(e){return this.i4(e)}),x.c9=(function(e){return this.ib(!!e)}),new E().i(yc,`com.raquo.laminar.codecs.package$$anon$1`,{cg:1,ac:1});function bc(e){if(e===null)throw nf(new rf)}x=bc.prototype=new w,x.constructor=bc,x.c9=(function(e){return e}),x.cO=(function(e){return e}),new E().i(bc,`com.raquo.laminar.codecs.package$$anon$2`,{ch:1,ac:1});function xc(e){return new ba(e,new K((e=>e+`vh`)))}function Sc(e,t,n,r){}x=Sc.prototype=new Ea,x.constructor=Sc,new E().i(Sc,`com.raquo.laminar.keys.CompositeKey`,{cB:1,N:1});function Cc(e){this.cv=null,this.cv=e}x=Cc.prototype=new Ea,x.constructor=Cc;var wc=new E().i(Cc,`com.raquo.laminar.keys.EventProp`,{cF:1,N:1});function Tc(e,t,n){return e.b3=t,e.bI=n,e}function I(){this.b3=null,this.bI=null}x=I.prototype=new Ea,x.constructor=I;function Ec(){}Ec.prototype=x,x.l=(function(e){return new Ll(this,e,new bd(((e,t,n)=>{O().dQ(e,t,n)})))}),x.dz=(function(e){return new Rl(this,e.h7(),new bd(((e,t,n)=>{O().dQ(e,this,t)})))}),new E().i(I,`com.raquo.laminar.keys.HtmlAttr`,{af:1,N:1});function Dc(e,t){this.aE=null,this.eR=null,this.aE=e,this.eR=t}x=Dc.prototype=new Ea,x.constructor=Dc,x.l=(function(e){return new Ll(this,e,new bd(((e,t,n)=>{O().jw(e,t,n)})))}),new E().i(Dc,`com.raquo.laminar.keys.HtmlProp`,{aB:1,N:1});function Oc(e,t,n){this.dc=null,this.db=null,this.cy=null,this.cz=null,this.dc=e,this.db=t;var r=n.d()?q():new J(n.u()+`:`+e);this.cy=r.d()?e:r.u(),this.cz=n.d()?q():new J(ka().j4(n.u()))}x=Oc.prototype=new Ea,x.constructor=Oc,new E().i(Oc,`com.raquo.laminar.keys.SvgAttr`,{cG:1,N:1});function kc(){}x=kc.prototype=new w,x.constructor=kc,x.a7=(function(e){}),new E().i(kc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cN:1,Q:1});function Ac(e,t){if(this.f0=null,this.f0=e,t===null)throw nf(new rf)}x=Ac.prototype=new w,x.constructor=Ac,x.a7=(function(e){var t=_i(),n=(()=>{this.f0.c(e)});if(_i(),t.y)n();else{t.y=!0;try{n()}finally{t.y=!1,mi(t)}}}),new E().i(Ac,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cO:1,Q:1});function jc(){}x=jc.prototype=new w,x.constructor=jc,new E().i(jc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cR:1,cP:1});function Mc(){}x=Mc.prototype=new w,x.constructor=Mc,new E().i(Mc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cT:1,cS:1});var Nc;function Pc(){return Nc||=new Mc,Nc}function Fc(e,t){if(this.f1=null,this.f1=e,t===null)throw nf(new rf)}x=Fc.prototype=new w,x.constructor=Fc,x.hM=(function(e){return this.f1.c(e)}),new E().i(Fc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cW:1,cU:1});function Ic(e){e.gy(new ji(new G((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Os(O().i3(e.bd(),(O(),$())),``,` > `,``))}))))}function Lc(e,t,n){return e.dk=t,e}function Rc(){this.dk=null}x=Rc.prototype=new w,x.constructor=Rc;function zc(){}zc.prototype=x,x.dJ=(function(){return this.dk}),x.G=(function(e){var t=this.hT();return e.aa(new K((e=>{e.a7(t)}))),t}),x.hT=(function(){return new sp(this,O().hZ(this))}),new E().i(Rc,`com.raquo.laminar.tags.HtmlTag`,{aG:1,ai:1});function Bc(e,t){this.f9=null,this.f9=e}x=Bc.prototype=new w,x.constructor=Bc,new E().i(Bc,`com.raquo.laminar.tags.SvgTag`,{d5:1,ai:1});function Vc(){}x=Vc.prototype=new w,x.constructor=Vc,x.c9=(function(e){return e}),x.cO=(function(e){return e}),new E().i(Vc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dg:1,ac:1});function Hc(e,t){return e.bq=t,e.cK(),e}function Uc(){this.bq=null,this.bl=null,this.bm=!1,this.bn=null,this.bo=!1,this.bp=null,this.br=!1}x=Uc.prototype=new w,x.constructor=Uc;function Wc(){}Wc.prototype=x,x.aY=(function(){return this.bm||=(this.bl=W().b.iK(),!0),this.bl}),x.jD=(function(){return this.bo||=(this.bn=W().b.jE(),!0),this.bn}),x.jI=(function(){return this.br||=(this.bp=new Bl(this.bq,new U((e=>void 0)),void 0),!0),this.bp}),x.m=(function(e,t){var n=this.jI().G(new Q([]));return e.aa(new U((e=>{e.c(this).a7(n)}))),t.aa(new U((e=>{e.a7(n)}))),n});function Gc(){this.dl=null,Kc=this,this.dl=$r(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}x=Gc.prototype=new w,x.constructor=Gc,x.jM=(function(e){if(e>>>0>1114111)throw Jd(new Yd);return String.fromCodePoint(e)}),x.i5=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=ts().hP(this.dl,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.dl.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new E().i(Gc,`java.lang.Character$`,{dm:1,a:1});var Kc;function qc(){return Kc||=new Gc,Kc}function Jc(){}x=Jc.prototype=new w,x.constructor=Jc,x.cc=(function(e){throw new gp(`For input string: "`+e+`"`)}),x.iT=(function(e,t,n){e===null&&Xc().cc(e);var r=e.length;r===0&&Xc().cc(e);var i=qc(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Xc().cc(e);var l=0;for(l=0;c!==r;){var u=i.i5(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Xc().cc(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Xc().cc(e),(l^s)-s|0}),new E().i(Jc,`java.lang.Integer$`,{dt:1,a:1});var Yc;function Xc(){return Yc||=new Jc,Yc}function Zc(){}x=Zc.prototype=new w,x.constructor=Zc;function Qc(e){return e instanceof Zc||typeof e==`number`||e instanceof S}function $c(e,t,n,r,i){this.bt=null,this.bK=null,this.bu=null,this.bv=0,this.bs=0,this.bt=e,this.bK=t,this.bu=n,this.bv=r,this.bs=i}x=$c.prototype=new w,x.constructor=$c,x.g=(function(e){return e instanceof $c&&this.bu===e.bu&&this.bv===e.bv&&this.bs===e.bs&&this.bt===e.bt&&this.bK===e.bK}),x.o=(function(){var e=``;return this.bt!==`<jscode>`&&(e=``+e+this.bt+`.`),e=``+e+this.bK,this.bu===null?e+=`(Unknown Source)`:(e=e+`(`+this.bu,this.bv>=0&&(e=e+`:`+this.bv,this.bs>=0&&(e=e+`:`+this.bs)),e+=`)`),e}),x.k=(function(){return _p(this.bt)^_p(this.bK)^_p(this.bu)^this.bv^this.bs});var el=new E().i($c,`java.lang.StackTraceElement`,{aQ:1,a:1});function tl(){}x=tl.prototype=new w,x.constructor=tl,x.j5=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+vr(e.a[a]),a=1+a|0;return i}),new E().i(tl,`java.lang.String$`,{dD:1,a:1});var nl;function rl(){return nl||=new tl,nl}function L(e,t,n,r,i){return e.fO=t,e.fP=i,i&&e.it(),e}var il=class extends Error{constructor(){super(),this.fO=null,this.fP=!1,this.fN=null,this.cB=null}iN(e){return this}ca(){return this.fO}it(){var e=this instanceof X?this.a5:this;return this.fN=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}iD(){return this.cB===null&&(this.cB=this.fP?Mo().is(this.fN):new(el.r()).C(0)),this.cB}o(){var e=fr(this),t=this.ca();return t===null?e:e+`: `+t}k(){return Mr.prototype.k.call(this)}g(e){return Mr.prototype.g.call(this,e)}get message(){var e=this.ca();return e===null?``:e}get name(){return fr(this)}toString(){return this.o()}};function al(){this.fQ=null,ol=this,this.fQ=new hc(Lo().fL)}x=al.prototype=new w,x.constructor=al,x.jf=(function(){return this.fQ.dy}),new E().i(al,`scala.Console$`,{dT:1,eK:1});var ol;function sl(){return ol||=new al,ol}function cl(){}x=cl.prototype=new gs,x.constructor=cl;function ll(){}ll.prototype=x,x.jS=(function(e){if(e===null)return null;if(e.a.length===0){var t=zp();return cm(),t.g9}return new ah(e)});function ul(e,t){if(t===e)e.a6(Bf().gJ(t));else for(var n=t.e();n.j();)e.a0(n.h());return e}function dl(){}x=dl.prototype=new w,x.constructor=dl;function fl(){}fl.prototype=x,x.o=(function(){return`<function0>`});function pl(){}x=pl.prototype=new w,x.constructor=pl;function ml(){}ml.prototype=x,x.o=(function(){return`<function1>`});function hl(){}x=hl.prototype=new w,x.constructor=hl;function gl(){}gl.prototype=x,x.o=(function(){return`<function2>`});function _l(){}x=_l.prototype=new w,x.constructor=_l;function vl(){}vl.prototype=x,x.o=(function(){return`<function3>`});function yl(e){this.cI=!1,this.cI=e}x=yl.prototype=new w,x.constructor=yl,x.o=(function(){return``+this.cI}),new E().i(yl,`scala.runtime.BooleanRef`,{eS:1,a:1});function bl(e){this.bX=0,this.bX=e}x=bl.prototype=new w,x.constructor=bl,x.o=(function(){return``+this.bX}),new E().i(bl,`scala.runtime.IntRef`,{eU:1,a:1});function xl(){this.s=0,this.go=0,this.ho=0,this.hn=0,Sl=this,this.s=_p(`Seq`),this.go=_p(`Map`),this.ho=_p(`Set`),this.hn=this.jN($(),this.go)}x=xl.prototype=new _c,x.constructor=xl,x.h2=(function(e){return hm(e)?this.iM(e,this.s):e instanceof Xm?this.iX(e,this.s):this.je(e,this.s)}),new E().i(xl,`scala.util.hashing.MurmurHash3$`,{fn:1,fm:1});var Sl;function R(){return Sl||=new xl,Sl}var Cl=class extends il{};function wl(){this.d1=null,this.dT=null,this.dU=null,Tl=this,this.d1=Bf().gt(N().x(new(ms.r()).C([]))),this.dT=new K((e=>{try{console.error(this.cS(e)+`
`+this.iC(e,`
`))}catch(e){var t=e instanceof il?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dU=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.a5:t})),this.jn(this.dT)}x=wl.prototype=new w,x.constructor=wl,x.cS=(function(e){try{var t=e.ca()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return dr(e).dG()+`: `+t}),x.iC=(function(e,t){try{return Os(uu().jS(e.iD()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.jn=(function(e){this.d1.a0(e)}),x.aA=(function(e){for(var t=this.d1.e();t.j();){var n=t.h();try{n.c(e)}catch(e){var r=e instanceof il?e:new X(e),i=this.dU;if(n===null?i===null:n.g(i))throw r instanceof X?r.a5:r;console.warn(`Error processing an unhandled error callback:`),cc().jB(0,new G((e=>(()=>{throw e instanceof X?e.a5:e}))(r)))}}}),new E().i(wl,`com.raquo.airstream.core.AirstreamError$`,{bI:1,eI:1,eJ:1});var Tl;function El(){return Tl||=new wl,Tl}function Dl(e){e.bG=!0,e.cj=void 0}function Ol(e,t,n){return Sd(e,ai().dS(t,Ss().cD,!0),n)}function kl(e,t){e.bG?Ed(e,t):Ml(e).push(new G((()=>{Ed(e,t)})))}function Al(e,t){e.bG?Td(e,t):Ml(e).push(new G((()=>{Td(e,t)})))}function jl(e){return Ad(e)>0}function Ml(e){var t=e.cj;if(t===void 0){var n=D().A(N().x(new(ps.r()).C([])));return e.cj=n,n}return t}var Nl=new E().i(1,`com.raquo.airstream.core.Observer`,{a9:1,a2:1,Z:1});function z(e,t,n){return new Gu(n.hM(t))}function Pl(e,t,n,r){return new Ac(new K((e=>{(ta(),new Qi(t,null,null)).aa(new K((e=>(t=>{n.c(t).a7(e)}))(e)))})),Pa())}function Fl(e,t){this.bk=null,this.dd=null,this.de=null,this.bk=e,this.dd=(n=>{var r=e.cs.c(n);r.d()||t.c(r.u())}),this.de=(()=>{var e=null;e=this;var t={};if(e===null)throw nf(new rf);return t.capture=e.bk.cu,t.passive=e.bk.ct,t})()}x=Fl.prototype=new w,x.constructor=Fl,x.a7=(function(e){this.hQ(e,!1)}),x.hQ=(function(e,t){if(Ld(e,this)===-1){var n=new K((t=>(O().hv(e.B,this),new Hi(t.eS,new G((()=>{var t=Ld(e,this);t!==-1&&(Id(e,t),O().jq(e.B,this))})))))),r=t?Ga().jO(e,n):Ii().d0(e.aj,new K((t=>n.c(new Aa(e,t)))),!1);return Fd(e,this,t),r}var i=new K((e=>void 0));return Ii().h5(e.aj,new K((t=>{i.c(new Aa(e,t))})),!1)}),x.o=(function(){return`EventListener(`+this.bk.bj.cv+`)`});var Il=new E().i(Fl,`com.raquo.laminar.modifiers.EventListener`,{cJ:1,Q:1,aC:1});function Ll(e,t,n){this.eV=null,this.eW=null,this.eU=null,this.eV=e,this.eW=t,this.eU=n}x=Ll.prototype=new w,x.constructor=Ll,x.a7=(function(e){this.eU.gs(e,this.eV,this.eW)}),new E().i(Ll,`com.raquo.laminar.modifiers.KeySetter`,{cK:1,Q:1,cX:1});function Rl(e,t,n){this.eX=null,this.eZ=null,this.eY=null,this.eX=e,this.eZ=t,this.eY=n}x=Rl.prototype=new w,x.constructor=Rl,x.a7=(function(e){this.hR(e)}),x.hR=(function(e){e.j7(this.eX);var t=this.eZ,n=new K((t=>{this.eY.gs(e,t,this)}));return Ii().jF(e.aj,t,n)}),new E().i(Rl,`com.raquo.laminar.modifiers.KeyUpdater`,{cL:1,Q:1,aC:1});function zl(e,t){if(this.di=null,this.f3=null,this.f4=null,this.f3=t,Ic(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().iS(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.f4=e,this.j2()}x=zl.prototype=new w,x.constructor=zl,x.cR=(function(){return this.di}),x.gy=(function(e){this.di=e}),x.j2=(function(){return this.di.gp(),Ha().cL(this,this.f3,void 0)}),x.bd=(function(){return this.f4}),new E().i(zl,`com.raquo.laminar.nodes.RootNode`,{d2:1,ah:1,aE:1});function Bl(e,t,n){this.dk=null,this.f8=null,this.f7=null,this.f8=e,this.f7=n,Lc(this,e,!1)}x=Bl.prototype=new zc,x.constructor=Bl,x.dJ=(function(){return this.f8}),x.hD=(function(){var e=this.f7;return e===void 0?void 0:e.map((e=>e.jT.aE))}),new E().i(Bl,`com.raquo.laminar.tags.CustomHtmlTag`,{aF:1,aG:1,ai:1});function Vl(){this.bq=null,this.bl=null,this.bm=!1,this.bn=null,this.bo=!1,this.bp=null,this.br=!1,this.fg=null,this.fh=!1,this.fa=null,this.fb=!1,this.fc=null,this.fd=!1,this.fe=null,this.ff=!1,Hc(this,`wa-button`)}x=Vl.prototype=new Wc,x.constructor=Vl,x.as=(function(){return this.fh||=(this.fg=Jl(),!0),this.fg}),x.hG=(function(){return this.fb||=(this.fa=Gl(),!0),this.fa}),x.am=(function(){return this.fd||=(this.fc=eo(),!0),this.fc}),x.aZ=(function(){return this.ff||=(this.fe=io(),!0),this.fe}),x.cK=(function(){return Mn}),new E().i(Vl,`io.github.nguyenyou.webawesome.laminar.Button$`,{d7:1,a4:1,a3:1});var Hl;function B(){return Hl||=new Vl,Hl}function Ul(){this.b3=null,this.bI=null,this.fi=null,this.fj=!1,Tc(this,`appearance`,new Vc)}x=Ul.prototype=new Ec,x.constructor=Ul,x.jk=(function(){return this.fj||=(this.fi=Gl().l(`plain`),!0),this.fi}),new E().i(Ul,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{d8:1,af:1,N:1});var Wl;function Gl(){return Wl||=new Ul,Wl}function Kl(){this.b3=null,this.bI=null,this.fk=null,this.fl=!1,Tc(this,`variant`,new Vc)}x=Kl.prototype=new Ec,x.constructor=Kl,x.ak=(function(){return this.fl||=(this.fk=Jl().l(`brand`),!0),this.fk}),new E().i(Kl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{d9:1,af:1,N:1});var ql;function Jl(){return ql||=new Kl,ql}function Yl(){this.bq=null,this.bl=null,this.bm=!1,this.bn=null,this.bo=!1,this.bp=null,this.br=!1,this.fs=null,this.ft=!1,this.fu=null,this.fv=!1,this.fo=null,this.fp=!1,this.fw=null,this.fx=!1,this.fq=null,this.fr=!1,Hc(this,`wa-dialog`)}x=Yl.prototype=new Wc,x.constructor=Yl,x.ja=(function(){return this.ft||=(this.fs=(W(),new Cc(`wa-hide`)),!0),this.fs}),x.dM=(function(){return this.fv||=(this.fu=(W(),Tc(new I,`open`,k().bH)),!0),this.fu}),x.P=(function(){return this.fp||=(this.fo=(W(),Tc(new I,`label`,k().a4)),!0),this.fo}),x.jR=(function(){return this.fx||=(this.fw=(W(),Tc(new I,`without-header`,k().bH)),!0),this.fw}),x.iW=(function(){return this.fr||=(this.fq=(W(),Tc(new I,`light-dismiss`,k().bH)),!0),this.fq}),x.cK=(function(){return Qn}),new E().i(Yl,`io.github.nguyenyou.webawesome.laminar.Dialog$`,{dc:1,a4:1,a3:1});var Xl;function Zl(){return Xl||=new Yl,Xl}function Ql(){this.bq=null,this.bl=null,this.bm=!1,this.bn=null,this.bo=!1,this.bp=null,this.br=!1,this.fE=null,this.fF=!1,this.fC=null,this.fD=!1,Hc(this,`wa-icon`)}x=Ql.prototype=new Wc,x.constructor=Ql,x.j3=(function(){return this.fF||=(this.fE=(W(),Tc(new I,`name`,k().a4)),!0),this.fE}),x.P=(function(){return this.fD||=(this.fC=(W(),Tc(new I,`label`,k().a4)),!0),this.fC}),x.cK=(function(){return $n}),new E().i(Ql,`io.github.nguyenyou.webawesome.laminar.Icon$`,{de:1,a4:1,a3:1});var $l;function eu(){return $l||=new Ql,$l}function tu(){this.bq=null,this.bl=null,this.bm=!1,this.bn=null,this.bo=!1,this.bp=null,this.br=!1,this.fI=null,this.fJ=!1,this.fG=null,this.fH=!1,Hc(this,`wa-input`)}x=tu.prototype=new Wc,x.constructor=tu,x.jj=(function(){return this.fJ||=(this.fI=(W(),Tc(new I,`placeholder`,k().a4)),!0),this.fI}),x.hN=(function(){return this.fH||=(this.fG=(W(),Tc(new I,`autofocus`,k().bH)),!0),this.fG}),x.cK=(function(){return lr}),new E().i(tu,`io.github.nguyenyou.webawesome.laminar.Input$`,{df:1,a4:1,a3:1});var nu;function ru(){return nu||=new tu,nu}function iu(e){if(e.ai.Z)return e.ai.Q().dG()+`[]`;for(var t=e.ai.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function au(e){this.dm=null,this.ai=e}x=au.prototype=new w,x.constructor=au,x.o=(function(){return(this.ai.Y?`interface `:this.ai.X?``:`class `)+this.ai.N}),x.dG=(function(){return this.dm===null&&(this.dm=iu(this)),this.dm}),new E().i(au,`java.lang.Class`,{dn:1,a:1,O:1});function V(e,t){return L(e,t,null,!0,!0),e}var H=class extends il{};new E().i(H,`java.lang.Exception`,{y:1,r:1,a:1});function ou(){}x=ou.prototype=new w,x.constructor=ou;function su(){}su.prototype=x;function cu(){this.hm=null,lu=this,Nf(),this.hm=Cu()}x=cu.prototype=new ll,x.constructor=cu,new E().i(cu,`scala.Predef$`,{e3:1,dW:1,dX:1});var lu;function uu(){return lu||=new cu,lu}function du(e,t){return e.bO=t,e}function fu(){this.bO=null}x=fu.prototype=new w,x.constructor=fu;function pu(){}pu.prototype=x,x.b9=(function(e){return this.bO.dF(e,am())}),x.ap=(function(){return this.bO.gT(am())}),x.b7=(function(e){return this.bO.dF(e,am())});function mu(e,t){if(t<0)return 1;var n=e.r();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.e();i.j();){if(r===t)return 1;i.h(),r=1+r|0}return r-t|0}function hu(e,t){return new Sf(e).dE(t)}function gu(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?bu().L:new Tf(e,r,i)}function _u(e,t){for(var n=t.e();e.j();)if(!n.j()||!M().H(e.h(),n.h()))return!1;return!n.j()}function vu(){this.L=null,yu=this,this.L=new vf}x=vu.prototype=new w,x.constructor=vu,x.ap=(function(){return new kp}),new E().i(vu,`scala.collection.Iterator$`,{eb:1,a:1,V:1});var yu;function bu(){return yu||=new vu,yu}function xu(){}x=xu.prototype=new w,x.constructor=xu,new E().i(xu,`scala.collection.immutable.Map$`,{er:1,a:1,eh:1});var Su;function Cu(){return Su||=new xu,Su}function wu(e){this.gg=null,this.gg=e}x=wu.prototype=new fl,x.constructor=wu,x.C=(function(){return(0,this.gg)()}),new E().i(wu,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{eO:1,bD:1,ak:1});function U(e){this.gh=null,this.gh=e}x=U.prototype=new ml,x.constructor=U,x.c=(function(e){return(0,this.gh)(e)}),new E().i(U,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{eP:1,bE:1,e:1});var Tu=new E().i(0,`scala.runtime.Nothing$`,{eV:1,r:1,a:1});function Eu(){}x=Eu.prototype=new w,x.constructor=Eu,x.iy=(function(e){return(t=>e.c(t))}),new E().i(Eu,`scala.scalajs.js.Any$`,{f1:1,f2:1,f3:1});var Du;function Ou(){return Du||=new Eu,Du}function ku(){}x=ku.prototype=new fl,x.constructor=ku;function Au(){}Au.prototype=x;function ju(){}x=ju.prototype=new ml,x.constructor=ju;function Mu(){}Mu.prototype=x;function Nu(){}x=Nu.prototype=new gl,x.constructor=Nu;function Pu(){}Pu.prototype=x;function Fu(){}x=Fu.prototype=new vl,x.constructor=Fu;function Iu(){}Iu.prototype=x;function Lu(e,t,n,r){if(this.dY=null,this.dW=!1,this.d2=null,this.dX=null,this.dY=e,this.dW=t,this.d2=n,r===null)throw nf(new rf);this.dX=void 0}x=Lu.prototype=new w,x.constructor=Lu,x.cV=(function(){return this.dX}),x.cP=(function(){return ti(this)}),x.o=(function(){return ni(this)}),x.bb=(function(e){try{this.dY.c(e)}catch(e){var t=e instanceof il?e:new X(e);this.dW?this.j9(new tp(t)):El().aA(new tp(t))}}),x.j9=(function(e){try{this.d2.cT(e)?this.d2.c(e):El().aA(e)}catch(n){var t=n instanceof il?n:new X(n);El().aA(new np(t,e))}}),new E().i(Lu,`com.raquo.airstream.core.Observer$$anon$8`,{bK:1,a2:1,Z:1,a9:1});function Ru(e,t){this.e6=null,this.e7=null,this.e5=null,this.cm=null,this.e7=e,this.e5=t,this.e6=void 0,this.cm=new um(new G((()=>ni(this))))}x=Ru.prototype=new w,x.constructor=Ru,x.cV=(function(){return this.e6}),x.o=(function(){return ni(this)}),x.bb=(function(e){jl(this.cm)&&this.cm.gW(e,null)}),x.cP=(function(){return``+this.e7.C()+this.e5}),new E().i(Ru,`com.raquo.airstream.eventbus.WriteBus`,{bV:1,a2:1,Z:1,a9:1});function zu(e){if(this.eh=null,this.ei=!1,this.hc=null,e===null)throw nf(new rf);da(this)}x=zu.prototype=new w,x.constructor=zu,x.jH=(function(){return this.ei||=(this.eh=new Bc(`svg`,!1),!0),this.eh}),new E().i(zu,`com.raquo.laminar.api.Laminar$svg$`,{ca:1,ct:1,cj:1,cl:1});function Bu(){this.b=null,Vu=this,this.b=new bm}x=Bu.prototype=new w,x.constructor=Bu,new E().i(Bu,`com.raquo.laminar.api.package$`,{cd:1,ax:1,aA:1,aw:1});var Vu;function W(){return Vu||=new Bu,Vu}function Hu(e,t,n){return e.cw=t,e.cx=n,e}function Uu(){this.cw=null,this.cx=null}x=Uu.prototype=new Ea,x.constructor=Uu;function Wu(){}Wu.prototype=x,x.l=(function(e){return new Ll(this,hr(e),new bd(((e,t,n)=>{O().h3(e,t,n)})))}),new E().i(Uu,`com.raquo.laminar.keys.StyleProp`,{ag:1,N:1,ad:1,ae:1});function Gu(e){this.f6=null,this.dj=null,this.f6=q(),this.dj=O().i1(e)}x=Gu.prototype=new w,x.constructor=Gu,x.h4=(function(e){this.f6=e}),x.hb=(function(e){}),x.a7=(function(e){Ha().cL(e,this,void 0)}),x.jK=(function(){return this.dj.data}),x.bd=(function(){return this.dj}),new E().i(Gu,`com.raquo.laminar.nodes.TextNode`,{d4:1,ah:1,Q:1,aD:1});function Ku(){}x=Ku.prototype=new w,x.constructor=Ku;function qu(){}qu.prototype=x;function Ju(e,t){return e===t}function Yu(e){return e?1231:1237}var Xu=new E().i(0,`java.lang.Boolean`,{dk:1,a:1,R:1,O:1},(e=>typeof e==`boolean`));function Zu(e){return e}function Qu(e,t){return t instanceof ur&&e===t.c}var $u=new E().i(0,`java.lang.Character`,{aM:1,a:1,R:1,O:1},(e=>e instanceof ur));function ed(e,t){return L(e,t,null,!0,!0),e}var td=class extends H{};new E().i(td,`java.lang.RuntimeException`,{G:1,y:1,r:1,a:1});function nd(){this.q=null,this.q=``}x=nd.prototype=new w,x.constructor=nd,x.hH=(function(e){var t=rl().j5(e,0,e.a.length);return this.q=``+this.q+t,this}),x.o=(function(){return this.q}),x.f=(function(){return this.q.length}),x.gv=(function(e){return this.q.charCodeAt(e)}),new E().i(nd,`java.lang.StringBuilder`,{dE:1,aj:1,aK:1,a:1});function rd(){}x=rd.prototype=new su,x.constructor=rd;function id(){}id.prototype=x;function ad(){}x=ad.prototype=new w,x.constructor=ad,x.o=(function(){return`<function1>`}),x.cT=(function(e){return!1}),x.hK=(function(e){throw new df(e)}),x.c=(function(e){this.hK(e)}),new E().i(ad,`scala.PartialFunction$$anon$1`,{e2:1,e:1,k:1,a:1});function od(){}x=od.prototype=new w,x.constructor=od;function sd(){}sd.prototype=x,x.r=(function(){return-1}),x.aX=(function(e,t,n){return Ds(this,e,t,n)}),x.by=(function(e,t,n,r){return ks(this,e,t,n,r)}),x.e=(function(){return this}),x.dE=(function(e){return hu(this,e)}),x.cQ=(function(e){return this.cf(e,-1)}),x.cf=(function(e,t){return gu(this,e,t)}),x.o=(function(){return`<iterator>`});function cd(e,t){return e.bR=t,e}function ld(){this.bR=null}x=ld.prototype=new w,x.constructor=ld;function ud(){}ud.prototype=x,x.gt=(function(e){return this.bR.b7(e)}),x.gJ=(function(e){return this.bR.b9(e)}),x.ap=(function(){return this.bR.ap()}),x.b7=(function(e){return this.gt(e)}),x.b9=(function(e){return this.gJ(e)});function dd(e,t){return t>=0&&e.a3(t)>0}function fd(e){return e.a3(0)===0}function pd(e,t){var n=e.r();if(n!==-1){var r=t.r();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return _u(e.e(),t)}function md(e,t){for(var n=e.ba().ap(),r=e.e();r.j();)n.a0(t.c(r.h()));return n.aq()}function hd(e,t){if(this.gb=null,this.cF=null,this.gb=e,t===null)throw nf(new rf);this.cF=t}x=hd.prototype=new w,x.constructor=hd,x.hz=(function(e){return this.cF.a0(e),this}),x.hs=(function(e){return this.cF.a6(e),this}),x.aq=(function(){return this.gb.c(this.cF.aq())}),x.a0=(function(e){return this.hz(e)}),x.a6=(function(e){return this.hs(e)}),new E().i(hd,`scala.collection.mutable.Builder$$anon$1`,{eB:1,S:1,T:1,W:1});function gd(e,t){return e.bU=t,e}function _d(){this.bU=null}x=_d.prototype=new w,x.constructor=_d;function vd(){}vd.prototype=x,x.hA=(function(e){return this.bU.a0(e),this}),x.ht=(function(e){return this.bU.a6(e),this}),x.aq=(function(){return this.bU}),x.a0=(function(e){return this.hA(e)}),x.a6=(function(e){return this.ht(e)}),new E().i(_d,`scala.collection.mutable.GrowableBuilder`,{bu:1,S:1,T:1,W:1});function G(e){this.gk=null,this.gk=e}x=G.prototype=new Au,x.constructor=G,x.C=(function(){return(0,this.gk)()}),new E().i(G,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{f9:1,f8:1,bD:1,ak:1});function K(e){this.gl=null,this.gl=e}x=K.prototype=new Mu,x.constructor=K,x.c=(function(e){return(0,this.gl)(e)}),new E().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{fb:1,fa:1,bE:1,e:1});function yd(e){this.gm=null,this.gm=e}x=yd.prototype=new Pu,x.constructor=yd,x.dB=(function(e,t){return(0,this.gm)(e,t)}),new E().i(yd,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{fd:1,fc:1,eQ:1,dU:1});function bd(e){this.gn=null,this.gn=e}x=bd.prototype=new Iu,x.constructor=bd,x.gs=(function(e,t,n){return(0,this.gn)(e,t,n)}),new E().i(bd,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{ff:1,fe:1,eR:1,dV:1});function xd(e){e.bE=D().A(N().x(new(Nl.r()).C([]))),e.bF=D().A(N().x(new(ei.r()).C([]))),e.cl=!1}function Sd(e,t,n){var r=_i(),i=(()=>{Dd(e);var r=Cd(e,t,n);return Od(e),r}),a=!jl(e);if(r.y||!a)var o=i();else{r.y=!0;try{var o=i()}finally{r.y=!1,mi(r)}}return o}function Cd(e,t,n){var r=new Hi(n,new G((()=>{kl(e,t)})));return e.bE.push(t),r}function wd(e,t,n){var r=_i(),i=(()=>{!jl(e)&&n&&Dd(e),e.bF.push(t),Od(e)}),a=!jl(e);if(r.y||!a)i();else{r.y=!0;try{i()}finally{r.y=!1,mi(r)}}}function Td(e,t){ci().h0(e.bF,t)&&kd(e)}function Ed(e,t){ci().h0(e.bE,t)&&kd(e)}function Dd(e){e.cl||=(e.jd(),!0)}function Od(e){Ad(e)===1&&e.jb()}function kd(e){jl(e)||(e.jc(),e.cl=!1)}function Ad(e){var t=e.bE.length,n=e.bF;return(t|0)+(n.length|0)|0}function jd(){this.e2=null,this.bD=null,this.e1=null,this.e2=void 0,this.bD=new Ru(new G((()=>ni(this))),`.writer`),this.e1=this.bD.cm}x=jd.prototype=new w,x.constructor=jd,x.cV=(function(){return this.e2}),x.cP=(function(){return ti(this)}),x.o=(function(){return ni(this)}),x.h7=(function(){return this.e1}),new E().i(jd,`com.raquo.airstream.eventbus.EventBus`,{bS:1,aa:1,ab:1,a2:1,Z:1});function Md(e,t){this.cr=null,this.da=null,this.cr=e,this.da=t}x=Md.prototype=new w,x.constructor=Md,x.a7=(function(e){var t=this.da;t!==void 0&&t.gX(e,this.cr),Ha().cL(e,this.cr,void 0)}),x.jQ=(function(e){return new Md(this.cr,e.hJ(this.da))});var Nd=new E().i(Md,`com.raquo.laminar.inserters.StaticChildInserter`,{cy:1,Q:1,cw:1,cA:1,cv:1});function Pd(e){e.df=new Wi(new G((()=>{e.aj.gp()})),new G((()=>{e.aj.i2()}))),e.b4=void 0}function Fd(e,t,n){if(e.b4===void 0)e.b4=D().A(N().x(new(Il.r()).C([t])));else if(n){var r=e.b4;if(r===void 0)throw new cf(`undefined.get`);r.unshift(t)}else{var i=e.b4;if(i===void 0)throw new cf(`undefined.get`);i.push(t)}}function Id(e,t){var n=e.b4;n!==void 0&&n.splice(t,1)}function Ld(e,t){var n=e.b4;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:pr(a,t))?r=!0:i=1+i|0}return r?i:-1}function Rd(e,t){Bd(e,e.cA,t)&&Vd(e,t)}function zd(e,t){var n=e.cA;e.cA=t,Bd(e,n,t)||Vd(e,t)}function Bd(e,t,n){var r=!t.d()&&!t.u().cR().J.d(),i=!n.d()&&!n.u().cR().J.d();return r&&!i}function Vd(e,t){Hd(e,t.d()?q():new J(t.u().cR()))}function Hd(e,t){if(t.d())e.df.hV();else{var n=t.u();e.df.jy(n)}}function Ud(){}x=Ud.prototype=new qu,x.constructor=Ud;function Wd(){}Wd.prototype=x;var Gd=class extends td{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(Gd,`java.lang.ArithmeticException`,{dj:1,G:1,y:1,r:1,a:1});var Kd=new E().i(0,`java.lang.Byte`,{dl:1,X:1,a:1,R:1,O:1},(e=>wr(e)));function qd(e,t){return L(e,t,null,!0,!0),e}function Jd(e){return L(e,null,null,!0,!0),e}var Yd=class extends td{};new E().i(Yd,`java.lang.IllegalArgumentException`,{aO:1,G:1,y:1,r:1,a:1});var Xd=class extends td{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(Xd,`java.lang.IllegalStateException`,{dq:1,G:1,y:1,r:1,a:1});function Zd(e,t){return L(e,t,null,!0,!0),e}function Qd(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var $d=class extends td{};new E().i($d,`java.lang.IndexOutOfBoundsException`,{dr:1,G:1,y:1,r:1,a:1});function ef(){}x=ef.prototype=new qu,x.constructor=ef,new E().i(ef,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dv:1,aJ:1,aH:1,aL:1,aI:1});function tf(e,t){return L(e,t,null,!0,!0),e}function nf(e){return L(e,null,null,!0,!0),e}var rf=class extends td{};new E().i(rf,`java.lang.NullPointerException`,{dw:1,G:1,y:1,r:1,a:1});var af=new E().i(0,`java.lang.Short`,{dz:1,X:1,a:1,R:1,O:1},(e=>Tr(e))),of=class extends td{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(of,`java.lang.UnsupportedOperationException`,{dH:1,G:1,y:1,r:1,a:1});var sf=class extends td{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(sf,`java.util.ConcurrentModificationException`,{dL:1,G:1,y:1,r:1,a:1});var cf=class extends td{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(cf,`java.util.NoSuchElementException`,{dM:1,G:1,y:1,r:1,a:1});function lf(){}x=lf.prototype=new id,x.constructor=lf,x.c=(function(e){return e}),x.o=(function(){return`generalized constraint`}),new E().i(lf,`scala.$less$colon$less$$anon$1`,{dR:1,dO:1,dP:1,e:1,a:1});function uf(e){if(!e.fS){if(e.cC===null)var t=`null`;else{var n=N().hE(e.cC),r=n===null?`of a JS class`:`of class `+n.ai.N;try{var t=e.cC+` (`+r+`)`}catch{var t=`an instance `+r}}e.fR=t,e.fS=!0}return e.fR}var df=class extends td{constructor(e){super(),this.cC=null,this.fR=null,this.fS=!1,this.cC=e,L(this,null,null,!0,!0)}ca(){return uf(this)}};new E().i(df,`scala.MatchError`,{dY:1,G:1,y:1,r:1,a:1});function ff(){}x=ff.prototype=new w,x.constructor=ff;function pf(){}pf.prototype=x,x.bc=(function(){return new mf(this)}),x.d=(function(){return this===q()}),x.r=(function(){return!this.d()|0}),x.e=(function(){return this.d()?bu().L:new yf(this.u())});function mf(e){if(this.bL=0,this.fV=0,this.fU=null,e===null)throw nf(new rf);this.fU=e,this.bL=0,this.fV=e.ad()}x=mf.prototype=new sd,x.constructor=mf,x.j=(function(){return this.bL<this.fV}),x.h=(function(){var e=this.fU.ae(this.bL);return this.bL=1+this.bL|0,e}),new E().i(mf,`scala.Product$$anon$1`,{e4:1,I:1,b:1,c:1,J:1});function hf(e){this.bO=null,du(this,e)}x=hf.prototype=new pu,x.constructor=hf,new E().i(hf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{e9:1,e8:1,a:1,V:1,Y:1});function gf(e){return Os(e,e.aW()+`(`,`, `,`)`)}function _f(e){return!!(e&&e.$classData&&e.$classData.n.f)}function vf(){}x=vf.prototype=new sd,x.constructor=vf,x.j=(function(){return!1}),x.j6=(function(){throw new cf(`next on empty iterator`)}),x.r=(function(){return 0}),x.h=(function(){this.j6()}),x.cf=(function(e,t){return this}),new E().i(vf,`scala.collection.Iterator$$anon$19`,{ec:1,I:1,b:1,c:1,J:1});function yf(e){this.fX=null,this.bP=!1,this.fX=e,this.bP=!1}x=yf.prototype=new sd,x.constructor=yf,x.j=(function(){return!this.bP}),x.h=(function(){return this.bP?bu().L.h():(this.bP=!0,this.fX)}),x.cf=(function(e,t){return this.bP||e>0||t===0?bu().L:this}),new E().i(yf,`scala.collection.Iterator$$anon$20`,{ed:1,I:1,b:1,c:1,J:1});function bf(e){for(;;)if(e.F instanceof Sf){var t=e.F;if(e.F=t.F,e.aF=t.aF,t.U!==null){e.T===null&&(e.T=t.T);var n=t.T;n===null&&Qs().bz(),n.bQ=e.U,e.U=t.U}}else return}function xf(e){for(;;)if(e.U===null)return e.F=null,e.T=null,!1;else{if(e.F=e.U.iH(),e.T===e.U){var t=e.T;t===null&&Qs().bz(),e.T=t.bQ}if(e.U=e.U.bQ,bf(e),e.aF)return!0;if(!(e.F!==null&&e.F.j()))continue;return e.aF=!0,!0}}function Sf(e){this.F=null,this.U=null,this.T=null,this.aF=!1,this.F=e,this.U=null,this.T=null,this.aF=!1}x=Sf.prototype=new sd,x.constructor=Sf,x.j=(function(){return this.aF?!0:this.F===null?!1:this.F.j()?(this.aF=!0,!0):xf(this)}),x.h=(function(){if(this.j()){this.aF=!1;var e=this.F;return e===null&&Qs().bz(),e.h()}return bu().L.h()}),x.dE=(function(e){var t=new js(e,null);if(this.U===null)this.U=t,this.T=t;else{var n=this.T;n===null&&Qs().bz(),n.bQ=t,this.T=t}return this.F===null&&(this.F=bu().L),this}),new E().i(Sf,`scala.collection.Iterator$ConcatIterator`,{b1:1,I:1,b:1,c:1,J:1});function Cf(e){for(;e.av>0;)e.aG.j()?(e.aG.h(),e.av=e.av-1|0):e.av=0}function wf(e,t){if(e.M<0)return-1;var n=e.M-t|0;return n<0?0:n}function Tf(e,t,n){this.aG=null,this.M=0,this.av=0,this.aG=e,this.M=n,this.av=t}x=Tf.prototype=new sd,x.constructor=Tf,x.r=(function(){var e=this.aG.r();if(e<0)return-1;var t=e-this.av|0,n=t<0?0:t;if(this.M<0)return n;var r=this.M;return r<n?r:n}),x.j=(function(){return Cf(this),this.M!==0&&this.aG.j()}),x.h=(function(){return Cf(this),this.M>0?(this.M=this.M-1|0,this.aG.h()):this.M<0?this.aG.h():bu().L.h()}),x.cf=(function(e,t){var n=e>0?e:0;if(t<0)var r=wf(this,n);else if(t<=n)var r=0;else if(this.M<0)var r=t-n|0;else var i=wf(this,n),a=t-n|0,r=i<a?i:a;var o=this.av+n|0;return r===0?bu().L:o<0?(this.av=2147483647,this.M=0,hu(this,new wu((()=>new Tf(this.aG,o-2147483647|0,r))))):(this.av=o,this.M=r,this)}),new E().i(Tf,`scala.collection.Iterator$SliceIterator`,{eg:1,I:1,b:1,c:1,J:1});function Ef(e,t){return t>=0&&e.a3(t)>0}function Df(e,t){if(t<0)throw Zd(new $d,``+t);var n=e.ia(t);if(n.d())throw Zd(new $d,``+t);return n.O()}function Of(e,t){return gm(t)?kf(e,e,t):pd(e,t)}function kf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.d()&&!r.d()&&M().H(i.O(),r.O())){var a=i.E(),o=r.E();i=a,r=o;continue}return i.d()&&r.d()}}function Af(e){if(this.bT=null,e===null)throw nf(new rf);this.bT=e}x=Af.prototype=new sd,x.constructor=Af,x.j=(function(){return!this.bT.d()}),x.h=(function(){var e=this.bT.O();return this.bT=this.bT.E(),e}),new E().i(Af,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{ek:1,I:1,b:1,c:1,J:1});function jf(){Mf=this,$(),$()}x=jf.prototype=new w,x.constructor=jf,x.b7=(function(e){return $().gY(e)}),x.ap=(function(){return new gh}),x.b9=(function(e){return $().gY(e)}),new E().i(jf,`scala.collection.immutable.List$`,{eq:1,a:1,V:1,Y:1,a1:1});var Mf;function Nf(){return Mf||=new jf,Mf}function Pf(){this.g4=null,Ff=this,this.g4=new T(0)}x=Pf.prototype=new w,x.constructor=Pf,x.b7=(function(e){return this.gK(e)}),x.gK=(function(e){var t=e.r();if(t>=0){var n=this.h1(this.g4,0,t),r=_f(e)?e.aX(n,0,2147483647):e.e().aX(n,0,2147483647);if(r!==t)throw new Xd(`Copied `+r+` of `+t);return _h(new yh,n,t)}return vh(new yh).gq(e)}),x.ap=(function(){return new Lf}),x.ju=(function(e,t){if(t<0)throw ed(new td,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw ed(new td,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),x.h1=(function(e,t,n){var r=this.ju(e.a.length,n);if(r<0)return e;var i=new T(r);return e.ah(0,i,0,t),i}),x.b9=(function(e){return this.gK(e)}),new E().i(Pf,`scala.collection.mutable.ArrayBuffer$`,{et:1,a:1,V:1,Y:1,a1:1});var Ff;function If(){return Ff||=new Pf,Ff}function Lf(){this.bU=null,gd(this,(If(),vh(new yh)))}x=Lf.prototype=new vd,x.constructor=Lf,new E().i(Lf,`scala.collection.mutable.ArrayBuffer$$anon$1`,{eu:1,bu:1,S:1,T:1,W:1});function Rf(){this.bR=null,cd(this,Zf())}x=Rf.prototype=new ud,x.constructor=Rf,new E().i(Rf,`scala.collection.mutable.Buffer$`,{eA:1,ei:1,a:1,V:1,Y:1});var zf;function Bf(){return zf||=new Rf,zf}function Vf(e,t){return e.bV=t,e}function Hf(){this.bV=null}x=Hf.prototype=new w,x.constructor=Hf;function Uf(){}Uf.prototype=x,x.a6=(function(e){return ul(this,e)}),x.aq=(function(){return this.bV});function Wf(){}x=Wf.prototype=new w,x.constructor=Wf,x.b7=(function(e){return new gh().cZ(e)}),x.ap=(function(){return gd(new _d,new gh)}),x.b9=(function(e){return new gh().cZ(e)}),new E().i(Wf,`scala.collection.mutable.ListBuffer$`,{eE:1,a:1,V:1,Y:1,a1:1});var Gf;function Kf(){return Gf||=new Wf,Gf}function qf(e,t){this.dx=null,this.gf=null,this.ge=0,this.dx=e,this.gf=t,this.ge=t.C()|0}x=qf.prototype=new sd,x.constructor=qf,x.j=(function(){return Ks().gw(this.ge,this.gf.C()|0,`mutation occurred during iteration`),this.dx.j()}),x.h=(function(){return this.dx.h()}),new E().i(qf,`scala.collection.mutable.MutationTracker$CheckedIterator`,{eG:1,I:1,b:1,c:1,J:1});function Jf(e){this.gj=null,this.bY=0,this.gi=0,this.gj=e,this.bY=0,this.gi=e.ad()}x=Jf.prototype=new sd,x.constructor=Jf,x.j=(function(){return this.bY<this.gi}),x.h=(function(){var e=this.gj.ae(this.bY);return this.bY=1+this.bY|0,e}),new E().i(Jf,`scala.runtime.ScalaRunTime$$anon$1`,{eZ:1,I:1,b:1,c:1,J:1});function Yf(){}x=Yf.prototype=new w,x.constructor=Yf,x.b7=(function(e){return this.gL(e)}),x.ap=(function(){return xh(new Sh)}),x.gL=(function(e){return ul(xh(new Sh),e).aq()}),x.b9=(function(e){return this.gL(e)}),new E().i(Yf,`scala.scalajs.js.WrappedArray$`,{f5:1,a1:1,a:1,V:1,Y:1});var Xf;function Zf(){return Xf||=new Yf,Xf}function Qf(){}x=Qf.prototype=new w,x.constructor=Qf,x.b7=(function(e){return this.gM(e)}),x.gM=(function(e){return this.ap().a6(e).aq()}),x.ap=(function(){return new hd(new U((e=>new Q(e.aV))),bh(new Sh,[]))}),x.b9=(function(e){return this.gM(e)}),new E().i(Qf,`scala.scalajs.runtime.WrappedVarArgs$`,{fh:1,a1:1,a:1,V:1,Y:1});var $f;function ep(){return $f||=new Qf,$f}var tp=class e extends Cl{constructor(e){super(),this.bA=null,this.bA=e,L(this,`ObserverError: `+El().cS(e),null,!0,!0)}bc(){return new mf(this)}k(){return R().gu(this,-889275714,null)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.bA,r=t.bA;return n===null?r===null:n.g(r)}return!1}ad(){return 1}af(){return`ObserverError`}ae(e){if(e===0)return this.bA;throw Zd(new $d,``+e)}o(){return`ObserverError: `+this.bA}};new E().i(tp,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ap:1,a8:1,r:1,a:1,d:1,U:1});var np=class e extends Cl{constructor(e,t){super(),this.bC=null,this.bB=null,this.bC=e,this.bB=t,L(this,`ObserverErrorHandlingError: `+El().cS(e)+`; cause: `+El().cS(t),null,!0,!0),this.iN(t)}bc(){return new mf(this)}k(){return R().gu(this,-889275714,null)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.bC,r=t.bC;if(n===null?r===null:n.g(r)){var i=this.bB,a=t.bB;return i===null?a===null:i.g(a)}return!1}return!1}ad(){return 2}af(){return`ObserverErrorHandlingError`}ae(e){if(e===0)return this.bC;if(e===1)return this.bB;throw Zd(new $d,``+e)}o(){return`ObserverErrorHandlingError: `+this.bC+`; cause: `+this.bB}};new E().i(np,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{aq:1,a8:1,r:1,a:1,d:1,U:1});var rp=class e extends Cl{constructor(e,t){super(),this.bf=null,this.be=0,this.bf=e,this.be=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bc(){return new mf(this)}k(){var e=-889275714;return e=P().n(e,_p(`TransactionDepthExceeded`)),e=P().n(e,P().v(this.bf)),e=P().n(e,this.be),P().D(e,2)}g(t){if(this===t)return!0;if(t instanceof e){if(this.be===t.be){var n=this.bf,r=t.bf;return n===null?r===null:n===r}return!1}return!1}ad(){return 2}af(){return`TransactionDepthExceeded`}ae(e){if(e===0)return this.bf;if(e===1)return this.be;throw Zd(new $d,``+e)}o(){return`TransactionDepthExceeded: `+this.bf+`; maxDepth: `+this.be}};new E().i(rp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ar:1,a8:1,r:1,a:1,d:1,U:1});var ip=new E().i(1,`com.raquo.airstream.core.EventStream`,{at:1,aa:1,Z:1,as:1,av:1,ab:1});function ap(e,t){var n=e.dg;n===void 0?e.dg=ac().hL(D().A(N().x(new(bp.r()).C([t])))):n.push(t)|0}function op(e,t){var n=e.f2;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].jZ()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function sp(e,t){this.cA=null,this.aj=null,this.df=null,this.b4=null,this.dh=null,this.B=null,this.f2=null,this.dg=null,this.dh=e,this.B=t,this.cA=q(),Ic(this),Pd(this),this.f2=void 0,this.dg=void 0}x=sp.prototype=new w,x.constructor=sp,x.a7=(function(e){Ha().cL(e,this,void 0)}),x.cR=(function(){return this.aj}),x.gy=(function(e){this.aj=e}),x.hb=(function(e){Rd(this,e)}),x.h4=(function(e){zd(this,e)}),x.hY=(function(){if(O().iR(this.B)){var e=this.dh;return e instanceof Bl?e.hD():void 0}return ha().eO}),x.iP=(function(e){var t=this.hY();return t!==void 0&&Yi().iL(t,e,0)}),x.j7=(function(e){if(e instanceof Dc&&this.iP(e.aE)){if(op(this,e.aE))throw V(new H,"Can not add uncontrolled `"+e.aE+" <-- ???` to element `"+O().gz(this.B)+"` that already has an input controller for `"+e.aE+"` property.");ap(this,e.aE)}}),x.o=(function(){return`ReactiveHtmlElement(`+(this.B===null?`tag=`+this.dh.dJ():this.B.outerHTML)+`)`}),x.bd=(function(){return this.B}),new E().i(sp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{d1:1,ah:1,Q:1,aD:1,aE:1,cZ:1});function cp(e,t){return Object.is(e,t)}function lp(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=yr;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var up=new E().i(0,`java.lang.Double`,{aN:1,X:1,a:1,R:1,O:1,a0:1},(e=>typeof e==`number`)),dp=new E().i(0,`java.lang.Float`,{dp:1,X:1,a:1,R:1,O:1,a0:1},(e=>Dr(e))),fp=new E().i(0,`java.lang.Integer`,{ds:1,X:1,a:1,R:1,O:1,a0:1},(e=>Er(e)));function pp(e,t,n){if(n instanceof S){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function mp(e,t){return e^t}var hp=new E().i(0,`java.lang.Long`,{aP:1,X:1,a:1,R:1,O:1,a0:1},(e=>e instanceof S)),gp=class extends Yd{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(gp,`java.lang.NumberFormatException`,{dx:1,aO:1,G:1,y:1,r:1,a:1});function _p(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function vp(e,t){return e===t}function yp(e,t){var n=qc().jM(t);return e.indexOf(n)|0}var bp=new E().i(0,`java.lang.String`,{dC:1,a:1,R:1,aj:1,O:1,a0:1},(e=>typeof e==`string`));function xp(){}x=xp.prototype=new pf,x.constructor=xp,x.k=(function(){return 2433880}),x.o=(function(){return`None`}),x.ad=(function(){return 0}),x.af=(function(){return`None`}),x.ae=(function(e){throw Qd(new $d,e)}),x.iz=(function(){throw new cf(`None.get`)}),x.u=(function(){this.iz()}),new E().i(xp,`scala.None$`,{dZ:1,aS:1,b:1,d:1,U:1,a:1});var Sp;function q(){return Sp||=new xp,Sp}function J(e){this.bM=null,this.bM=e}x=J.prototype=new pf,x.constructor=J,x.k=(function(){return R().gZ(this,1323286827,!0)}),x.g=(function(e){return this===e||e instanceof J&&M().H(this.bM,e.bM)}),x.o=(function(){return N().hq(this)}),x.ad=(function(){return 1}),x.af=(function(){return`Some`}),x.ae=(function(e){if(e===0)return this.bM;throw Qd(new $d,e)}),x.u=(function(){return this.bM}),new E().i(J,`scala.Some`,{aT:1,aS:1,b:1,d:1,U:1,a:1});function Cp(){}x=Cp.prototype=new w,x.constructor=Cp;function wp(){}wp.prototype=x,x.r=(function(){return-1}),x.aa=(function(e){Es(this,e)}),x.aX=(function(e,t,n){return Ds(this,e,t,n)}),x.by=(function(e,t,n,r){return ks(this,e,t,n,r)}),x.aW=(function(){return this.aB()});function Y(e){this.cE=null,this.at=0,this.bN=0,this.cE=e,this.at=0,this.bN=Qo().ab(this.cE)}x=Y.prototype=new sd,x.constructor=Y,x.r=(function(){return this.bN-this.at|0}),x.j=(function(){return this.at<this.bN}),x.h=(function(){this.at>=Qo().ab(this.cE)&&bu().L.h();var e=N().b8(this.cE,this.at);return this.at=1+this.at|0,e}),x.cQ=(function(e){if(e>0){var t=this.at+e|0;if(t<0)var n=this.bN;else var r=this.bN,n=r<t?r:t;this.at=n}return this}),new E().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{e7:1,I:1,b:1,c:1,J:1,a:1});function Tp(e,t){return e.dt=t,e.au=0,e.K=t.f(),e}function Ep(e,t){return t<0?0:t>e.K?e.K:t}function Dp(){this.dt=null,this.au=0,this.K=0}x=Dp.prototype=new sd,x.constructor=Dp;function Op(){}Op.prototype=x,x.r=(function(){return this.K}),x.j=(function(){return this.K>0}),x.h=(function(){if(this.K>0){var e=this.dt.i(this.au);return this.au=1+this.au|0,this.K=this.K-1|0,e}return bu().L.h()}),x.cQ=(function(e){if(e>0){this.au=this.au+e|0;var t=this.K-e|0;this.K=t<0?0:t}return this}),x.cf=(function(e,t){var n=Ep(this,e),r=Ep(this,t)-n|0;return this.K=r<0?0:r,this.au=this.au+n|0,this}),new E().i(Dp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{b0:1,I:1,b:1,c:1,J:1,a:1});function kp(){this.bV=null,Vf(this,bu().L)}x=kp.prototype=new Uf,x.constructor=kp,x.hx=(function(e){return this.bV=this.bV.dE(new wu((()=>new yf(e)))),this}),x.a0=(function(e){return this.hx(e)}),new E().i(kp,`scala.collection.Iterator$$anon$21`,{ee:1,eD:1,S:1,T:1,W:1,a7:1});function Ap(e){return e.g1||=(e.g0=new Gm(new(Tu.r()).C(0)),!0),e.g0}function jp(){this.g2=null,this.g0=null,this.g1=!1,Mp=this,this.g2=new hf(this)}x=jp.prototype=new w,x.constructor=jp,x.iw=(function(e,t){return e instanceof Pm?e:this.dR(fs().gI(e,t))}),x.gT=(function(e){return new hd(new U((t=>this.dR(As(t,e)))),(If(),new Lf))}),x.dR=(function(e){if(e===null)return null;if(e instanceof T)return new Gm(e);if(e instanceof Rr)return new Um(e);if(e instanceof Vr)return new Vm(e);if(e instanceof zr)return new Wm(e);if(e instanceof Br)return new Hm(e);if(e instanceof Fr)return new Bm(e);if(e instanceof Ir)return new zm(e);if(e instanceof Lr)return new Km(e);if(e instanceof Pr)return new Rm(e);if(qo(e,1))return new qm(e);throw new df(e)}),x.dF=(function(e,t){return this.iw(e,t)}),new E().i(jp,`scala.collection.immutable.ArraySeq$`,{eo:1,a:1,aY:1,aW:1,aX:1,b4:1});var Mp;function Np(){return Mp||=new jp,Mp}function Pp(e){return e.g6=0,e.g7=0,e}function Fp(){this.g6=0,this.g7=0}x=Fp.prototype=new w,x.constructor=Fp;function Ip(){}Ip.prototype=x;function Lp(){this.ga=null,this.g9=null,Rp=this,this.ga=new hf(this),this.g9=new ah(new T(0))}x=Lp.prototype=new w,x.constructor=Lp,x.ix=(function(e,t){return this.gS(fs().gI(e,t))}),x.gT=(function(e){return new hd(new U((e=>this.gS(e))),new Wp(e.cX()))}),x.gS=(function(e){if(e===null)return null;if(e instanceof T)return new ah(e);if(e instanceof Rr)return new rh(e);if(e instanceof Vr)return new th(e);if(e instanceof zr)return new ih(e);if(e instanceof Br)return new nh(e);if(e instanceof Fr)return new eh(e);if(e instanceof Ir)return new $m(e);if(e instanceof Lr)return new oh(e);if(e instanceof Pr)return new Qm(e);if(qo(e,1))return new sh(e);throw new df(e)}),x.dF=(function(e,t){return this.ix(e,t)}),new E().i(Lp,`scala.collection.mutable.ArraySeq$`,{ez:1,a:1,aY:1,aW:1,aX:1,b4:1});var Rp;function zp(){return Rp||=new Lp,Rp}function Bp(e){this.cw=null,this.cx=null,this.eM=null,this.eN=!1,Hu(this,e,$())}x=Bp.prototype=new Wu,x.constructor=Bp,x.ha=(function(){return this.eN||=(this.eM=xc(this),!0),this.eM}),new E().i(Bp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cq:1,ag:1,N:1,ad:1,ae:1,ay:1,az:1});function Vp(){}x=Vp.prototype=new Wd,x.constructor=Vp;function Hp(){}Hp.prototype=x;function Up(e){return e.aW()+`(<not computed>)`}function Wp(e){this.g6=0,this.g7=0,this.bx=null,this.g8=!1,this.dw=null,this.bx=e,Pp(this),this.g8=e===Gr.l(),this.dw=[]}x=Wp.prototype=new Ip,x.constructor=Wp,x.gr=(function(e){var t=this.g8?Ar(e):e===null?Us().dP(this.bx):e;return this.dw.push(t),this}),x.hr=(function(e){for(var t=e.e();t.j();)this.gr(t.h());return this}),x.aq=(function(){return Us().dO(this.bx===Ur.l()?Jo.l():this.bx===Ys.l()||this.bx===Tu.l()?Hr.l():this.bx,this.dw)}),x.o=(function(){return`ArrayBuilder.generic`}),x.a0=(function(e){return this.gr(e)}),x.a6=(function(e){return this.hr(e)}),new E().i(Wp,`scala.collection.mutable.ArrayBuilder$generic`,{ey:1,ew:1,S:1,T:1,W:1,a7:1,a:1});function Gp(e,t){this.dt=null,this.au=0,this.K=0,this.gd=null,this.gc=0,this.gd=t,Tp(this,e),this.gc=t.C()|0}x=Gp.prototype=new Op,x.constructor=Gp,x.j=(function(){return Ks().gw(this.gc,this.gd.C()|0,`mutation occurred during iteration`),this.K>0}),new E().i(Gp,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{eC:1,b0:1,I:1,b:1,c:1,J:1,a:1});function Kp(){}x=Kp.prototype=new w,x.constructor=Kp;function qp(){}qp.prototype=x;var X=class e extends td{constructor(e){super(),this.a5=null,this.a5=e,L(this,null,null,!0,!0)}ca(){return hr(this.a5)}af(){return`JavaScriptException`}ad(){return 1}ae(e){return e===0?this.a5:P().iO(e)}bc(){return new Jf(this)}k(){return R().gZ(this,1744042595,!0)}g(t){return this===t||t instanceof e&&M().H(this.a5,t.a5)}};new E().i(X,`scala.scalajs.js.JavaScriptException`,{bF:1,G:1,y:1,r:1,a:1,U:1,d:1});function Jp(e,t,n){e.bG=!1;for(var r=e.bE,i=0;i<(r.length|0);){var a=r[i];i=1+i|0;try{a.bb(t)}catch(e){var o=e instanceof il?e:new X(e);El().aA(new tp(o))}}for(var s=e.bF,c=0;c<(s.length|0);){var l=s[c];c=1+c|0,l.gW(t,n)}e.bG=!0;var u=e.cj;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].C(),d=1+d|0;u.length=0}}function Yp(e){this.cw=null,this.cx=null,this.eK=null,this.eL=!1,Hu(this,e,$())}x=Yp.prototype=new Wu,x.constructor=Yp,x.ha=(function(){return this.eL||=(this.eK=xc(this),!0),this.eK}),new E().i(Yp,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{cp:1,ag:1,N:1,ad:1,ae:1,cr:1,ay:1,az:1});function Xp(e,t){typeof console<`u`&&(e.fK&&console.error?console.error(t):console.log(t))}function Zp(e){this.fK=!1,this.bJ=null,this.fK=e,new ef,this.bJ=``}x=Zp.prototype=new Hp,x.constructor=Zp,x.iU=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bJ=``+this.bJ+t,t=``;else{var r=this.bJ,i=t;Xp(this,``+r+i.substring(0,n)),this.bJ=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(Zp,`java.lang.JSConsoleBasedPrintStream`,{du:1,di:1,dh:1,aJ:1,aH:1,aL:1,aI:1,aK:1});function Qp(e,t,n){for(var r=n,i=t;;)if(i<=0||r.d())return r;else{var a=i-1|0,o=r.E();i=a,r=o}}function $p(){this.bW=null}x=$p.prototype=new qp,x.constructor=$p;function em(){}em.prototype=x,x.o=(function(){return this.bW}),x.g=(function(e){return this===e}),x.k=(function(){return Cr(this)});function tm(){}x=tm.prototype=new wp,x.constructor=tm;function nm(){}nm.prototype=x,x.o=(function(){return Up(this)});function rm(){this.bW=null,this.bW=`Any`,$()}x=rm.prototype=new em,x.constructor=rm,x.cX=(function(){return Hr.l()}),x.dK=(function(e){return new T(e)}),new E().i(rm,`scala.reflect.ManifestFactory$AnyManifest$`,{eM:1,bB:1,bA:1,a:1,bC:1,bx:1,d:1,by:1,bz:1});var im;function am(){return im||=new rm,im}function om(){this.bW=null,this.bW=`Object`,$()}x=om.prototype=new em,x.constructor=om,x.cX=(function(){return Hr.l()}),x.dK=(function(e){return new T(e)}),new E().i(om,`scala.reflect.ManifestFactory$ObjectManifest$`,{eN:1,bB:1,bA:1,a:1,bC:1,bx:1,d:1,by:1,bz:1});var sm;function cm(){return sm||=new om,sm}function Z(e,t){return e===t?!0:lm(t)&&t.dD(e)?e.cY(t):!1}function lm(e){return!!(e&&e.$classData&&e.$classData.n.i)}function um(e){this.e3=null,this.bG=!1,this.cj=null,this.bE=null,this.bF=null,this.cl=!1,this.e4=null,this.ck=null,this.e4=e,this.e3=void 0,Dl(this),xd(this),this.ck=D().A(N().x(new(ip.r()).C([])))}x=um.prototype=new w,x.constructor=um,x.cV=(function(){return this.e3}),x.o=(function(){return ni(this)}),x.g=(function(e){return this===e}),x.k=(function(){return Cr(this)}),x.h7=(function(){return this}),x.gW=(function(e,t){new li(new K((t=>{Jp(this,e,t)})))}),x.jd=(function(){for(var e=this.ck,t=0,n=e.length|0;t<n;)Dd(e[t]),t=1+t|0}),x.jb=(function(){for(var e=this.ck,t=0,n=e.length|0;t<n;)wd(e[t],this,!1),t=1+t|0}),x.jc=(function(){for(var e=this.ck,t=0,n=e.length|0;t<n;)Al(e[t],this),t=1+t|0}),x.cP=(function(){return this.e4.C()+`.events`}),new E().i(um,`com.raquo.airstream.eventbus.EventBusStream`,{bU:1,aa:1,Z:1,as:1,av:1,ab:1,at:1,bQ:1,bR:1,au:1,bH:1});function dm(){}x=dm.prototype=new wp,x.constructor=dm;function fm(){}fm.prototype=x,x.gR=(function(e){return dd(this,e)}),x.a3=(function(e){return mu(this,e)}),x.d=(function(){return fd(this)}),x.cY=(function(e){return pd(this,e)}),x.dD=(function(e){return!0}),x.g=(function(e){return Z(this,e)}),x.k=(function(){return R().h2(this)}),x.o=(function(){return gf(this)}),x.cT=(function(e){return this.gR(e|0)});function pm(){}x=pm.prototype=new nm,x.constructor=pm;function mm(){}mm.prototype=x,x.d=(function(){return fd(this)});function hm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function gm(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function _m(e,t){return e.bS=t,e}function vm(){this.bS=null}x=vm.prototype=new mm,x.constructor=vm;function ym(){}ym.prototype=x,x.i=(function(e){return this.bS.i(e)}),x.f=(function(){return this.bS.f()}),x.d=(function(){return this.bS.d()});function bm(){this.ez=null,this.eC=!1,this.en=null,this.eo=!1,this.el=null,this.em=!1,this.eH=null,this.eI=!1,this.er=null,this.es=!1,this.ev=null,this.ew=!1,this.et=null,this.eu=!1,this.ex=null,this.ey=!1,this.ej=null,this.ek=!1,this.ep=null,this.eq=!1,this.eA=null,this.eB=!1,this.hf=null,this.eD=null,this.eE=!1,this.d9=null,this.hd=null,this.he=null,this.eF=null,this.eG=!1,ca(this),ia(this),na(this),ra(this)}x=bm.prototype=new w,x.constructor=bm,x.jh=(function(){return this.eC||=(this.ez=Lc(new Rc,`p`,!1),!0),this.ez}),x.a2=(function(){return this.eo||=(this.en=Lc(new Rc,`div`,!1),!0),this.en}),x.hU=(function(){return this.em||=(this.el=new Dc(`checked`,k().eJ),!0),this.el}),x.h9=(function(){return this.eI||=(this.eH=new Dc(`value`,k().a4),!0),this.eH}),x.iK=(function(){return this.es||=(this.er=new Dc(`id`,k().a4),!0),this.er}),x.cb=(function(){return this.ew||=(this.ev=new Cc(`click`),!0),this.ev}),x.j8=(function(){return this.eu||=(this.et=new Cc(`change`),!0),this.et}),x.dL=(function(){return this.ey||=(this.ex=new Cc(`input`),!0),this.ex}),x.hS=(function(){return this.ek||=(this.ej=Hu(new Uu,`border`,$()),!0),this.ej}),x.iJ=(function(){return this.eq||=(this.ep=new Yp(`height`),!0),this.ep}),x.ji=(function(){return this.eB||=(this.eA=new Bp(`padding`),!0),this.eA}),x.jE=(function(){return this.eE||=(this.eD=Tc(new I,`style`,k().a4),!0),this.eD}),x.jG=(function(){return this.eG||=(this.eF=new zu(this),!0),this.eF}),new E().i(bm,`com.raquo.laminar.api.package$$anon$1`,{ce:1,cs:1,ci:1,cn:1,cm:1,co:1,ck:1,cc:1,c8:1,cb:1,ax:1,aA:1,aw:1,c9:1});function xm(){}x=xm.prototype=new mm,x.constructor=xm;function Sm(){}Sm.prototype=x,x.a3=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),x.r=(function(){return this.f()}),x.aB=(function(){return`IndexedSeqView`});function Cm(e){this.bS=null,_m(this,e)}x=Cm.prototype=new ym,x.constructor=Cm,x.a3=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),x.r=(function(){return this.f()}),x.e=(function(){return Tp(new Dp,this)}),x.aB=(function(){return`IndexedSeqView`}),new E().i(Cm,`scala.collection.IndexedSeqView$Id`,{ea:1,ej:1,aU:1,aV:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,b6:1,j:1,b3:1,o:1,aZ:1});function wm(){}x=wm.prototype=new fm,x.constructor=wm;function Tm(){}Tm.prototype=x;function Em(e,t){this.dv=null,this.g5=null,this.dv=e,this.g5=t}x=Em.prototype=new Sm,x.constructor=Em,x.i=(function(e){return this.dv.i(e)}),x.f=(function(){return this.dv.z}),x.aW=(function(){return`ArrayBufferView`}),x.e=(function(){return new Gp(this,this.g5)}),new E().i(Em,`scala.collection.mutable.ArrayBufferView`,{ev:1,e5:1,aU:1,aV:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,b6:1,j:1,b3:1,o:1,aZ:1});function Dm(e,t){return!km(t)||e.f()===t.f()}function Om(e,t){if(km(t)){if(e===t)return!0;var n=e.f(),r=n===t.f();if(r){var i=0,a=e.dC(),o=t.dC(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=M().H(e.i(i),t.i(i)),i=1+i|0;if(i<n&&r)for(var p=e.e().cQ(i),ee=t.e().cQ(i);r&&p.j();)r=M().H(p.h(),ee.h())}return r}return pd(e,t)}function km(e){return!!(e&&e.$classData&&e.$classData.n.z)}function Am(){}x=Am.prototype=new fm,x.constructor=Am;function jm(){}jm.prototype=x;function Q(e){this.cJ=null,this.cJ=e}x=Q.prototype=new w,x.constructor=Q,x.dH=(function(e){return md(this,e)}),x.dD=(function(e){return Dm(this,e)}),x.cY=(function(e){return Om(this,e)}),x.dC=(function(){return Bs().g3}),x.e=(function(){return Tp(new Dp,new Cm(this))}),x.a3=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),x.r=(function(){return this.f()}),x.g=(function(e){return Z(this,e)}),x.k=(function(){return R().h2(this)}),x.o=(function(){return gf(this)}),x.d=(function(){return fd(this)}),x.aa=(function(e){Es(this,e)}),x.aX=(function(e,t,n){return Ds(this,e,t,n)}),x.by=(function(e,t,n,r){return ks(this,e,t,n,r)}),x.f=(function(){return this.cJ.length|0}),x.i=(function(e){return this.cJ[e]}),x.aW=(function(){return`WrappedVarArgs`}),x.cT=(function(e){return dd(this,e|0)}),x.c=(function(e){return this.i(e|0)}),x.ba=(function(){return ep()}),new E().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bG:1,z:1,b:1,c:1,h:1,g:1,f:1,A:1,e:1,k:1,j:1,d:1,i:1,C:1,B:1,o:1,n:1,L:1,D:1,p:1,q:1,a:1});function Mm(){}x=Mm.prototype=new jm,x.constructor=Mm;function Nm(){}Nm.prototype=x,x.a6=(function(e){return ul(this,e)});function Pm(){}x=Pm.prototype=new Tm,x.constructor=Pm;function Fm(){}Fm.prototype=x,x.a3=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),x.r=(function(){return this.f()}),x.aB=(function(){return`IndexedSeq`}),x.dD=(function(e){return Dm(this,e)}),x.cY=(function(e){return Om(this,e)}),x.j0=(function(e){for(var t=new T(this.f()),n=0;n<t.a.length;)t.a[n]=e.c(this.i(n)),n=1+n|0;return Np().dR(t)}),x.aW=(function(){return`ArraySeq`}),x.aX=(function(e,t,n){var r=this.f(),i=Qo().ab(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&fs().cN(this.ar(),0,e,t,c),c}),x.dC=(function(){return 2147483647}),x.ba=(function(){return Np().g2}),x.dH=(function(e){return this.j0(e)});function Im(){}x=Im.prototype=new jm,x.constructor=Im;function Lm(){}Lm.prototype=x,x.a3=(function(e){var t=this.f();return t===e?0:t<e?-1:1}),x.r=(function(){return this.f()}),x.aB=(function(){return`IndexedSeq`}),x.aW=(function(){return`ArraySeq`}),x.aX=(function(e,t,n){var r=this.f(),i=Qo().ab(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&fs().cN(this.a1(),0,e,t,c),c}),x.g=(function(e){return e instanceof Im&&Qo().ab(this.a1())!==Qo().ab(e.a1())?!1:Z(this,e)}),x.ba=(function(){return zp().ga});function Rm(e){this.aH=null,this.aH=e}x=Rm.prototype=new Fm,x.constructor=Rm,x.f=(function(){return this.aH.a.length}),x.c7=(function(e){return this.aH.a[e]}),x.k=(function(){var e=R();return e.w(this.aH,e.s)}),x.g=(function(e){return e instanceof Rm?ts().gG(this.aH,e.aH):Z(this,e)}),x.e=(function(){return new Y(this.aH)}),x.ar=(function(){return this.aH}),x.i=(function(e){return this.c7(e)}),x.c=(function(e){return this.c7(e|0)}),new E().i(Rm,`scala.collection.immutable.ArraySeq$ofBoolean`,{b7:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function zm(e){this.aI=null,this.aI=e}x=zm.prototype=new Fm,x.constructor=zm,x.f=(function(){return this.aI.a.length}),x.bZ=(function(e){return this.aI.a[e]}),x.k=(function(){var e=R();return e.w(this.aI,e.s)}),x.g=(function(e){return e instanceof zm?ts().gB(this.aI,e.aI):Z(this,e)}),x.e=(function(){return new Y(this.aI)}),x.ar=(function(){return this.aI}),x.i=(function(e){return this.bZ(e)}),x.c=(function(e){return this.bZ(e|0)}),new E().i(zm,`scala.collection.immutable.ArraySeq$ofByte`,{b8:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Bm(e){this.ax=null,this.ax=e}x=Bm.prototype=new Fm,x.constructor=Bm,x.f=(function(){return this.ax.a.length}),x.c0=(function(e){return this.ax.a[e]}),x.k=(function(){var e=R();return e.w(this.ax,e.s)}),x.g=(function(e){return e instanceof Bm?ts().gC(this.ax,e.ax):Z(this,e)}),x.e=(function(){return new Y(this.ax)}),x.by=(function(e,t,n,r){return new eh(this.ax).by(e,t,n,r)}),x.ar=(function(){return this.ax}),x.i=(function(e){return Or(this.c0(e))}),x.c=(function(e){return Or(this.c0(e|0))}),new E().i(Bm,`scala.collection.immutable.ArraySeq$ofChar`,{b9:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Vm(e){this.aJ=null,this.aJ=e}x=Vm.prototype=new Fm,x.constructor=Vm,x.f=(function(){return this.aJ.a.length}),x.c1=(function(e){return this.aJ.a[e]}),x.k=(function(){var e=R();return e.w(this.aJ,e.s)}),x.g=(function(e){if(e instanceof Vm){var t=this.aJ,n=e.aJ;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.e=(function(){return new Y(this.aJ)}),x.ar=(function(){return this.aJ}),x.i=(function(e){return this.c1(e)}),x.c=(function(e){return this.c1(e|0)}),new E().i(Vm,`scala.collection.immutable.ArraySeq$ofDouble`,{ba:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Hm(e){this.aK=null,this.aK=e}x=Hm.prototype=new Fm,x.constructor=Hm,x.f=(function(){return this.aK.a.length}),x.c2=(function(e){return this.aK.a[e]}),x.k=(function(){var e=R();return e.w(this.aK,e.s)}),x.g=(function(e){if(e instanceof Hm){var t=this.aK,n=e.aK;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.e=(function(){return new Y(this.aK)}),x.ar=(function(){return this.aK}),x.i=(function(e){return this.c2(e)}),x.c=(function(e){return this.c2(e|0)}),new E().i(Hm,`scala.collection.immutable.ArraySeq$ofFloat`,{bb:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Um(e){this.aL=null,this.aL=e}x=Um.prototype=new Fm,x.constructor=Um,x.f=(function(){return this.aL.a.length}),x.c3=(function(e){return this.aL.a[e]}),x.k=(function(){var e=R();return e.w(this.aL,e.s)}),x.g=(function(e){return e instanceof Um?ts().gD(this.aL,e.aL):Z(this,e)}),x.e=(function(){return new Y(this.aL)}),x.ar=(function(){return this.aL}),x.i=(function(e){return this.c3(e)}),x.c=(function(e){return this.c3(e|0)}),new E().i(Um,`scala.collection.immutable.ArraySeq$ofInt`,{bc:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Wm(e){this.aM=null,this.aM=e}x=Wm.prototype=new Fm,x.constructor=Wm,x.f=(function(){return this.aM.a.length>>>1|0}),x.c4=(function(e){var t=this.aM.a,n=e<<1;return C(t[n],t[n+1|0])}),x.k=(function(){var e=R();return e.w(this.aM,e.s)}),x.g=(function(e){return e instanceof Wm?ts().gE(this.aM,e.aM):Z(this,e)}),x.e=(function(){return new Y(this.aM)}),x.ar=(function(){return this.aM}),x.i=(function(e){return this.c4(e)}),x.c=(function(e){return this.c4(e|0)}),new E().i(Wm,`scala.collection.immutable.ArraySeq$ofLong`,{bd:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Gm(e){this.aN=null,this.aN=e}x=Gm.prototype=new Fm,x.constructor=Gm,x.f=(function(){return this.aN.a.length}),x.i=(function(e){return this.aN.a[e]}),x.k=(function(){var e=R();return e.w(this.aN,e.s)}),x.g=(function(e){return e instanceof Gm?fs().gH(this.aN,e.aN):Z(this,e)}),x.e=(function(){return new Y(this.aN)}),x.ar=(function(){return this.aN}),x.c=(function(e){return this.i(e|0)}),new E().i(Gm,`scala.collection.immutable.ArraySeq$ofRef`,{be:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Km(e){this.aO=null,this.aO=e}x=Km.prototype=new Fm,x.constructor=Km,x.f=(function(){return this.aO.a.length}),x.c5=(function(e){return this.aO.a[e]}),x.k=(function(){var e=R();return e.w(this.aO,e.s)}),x.g=(function(e){return e instanceof Km?ts().gF(this.aO,e.aO):Z(this,e)}),x.e=(function(){return new Y(this.aO)}),x.ar=(function(){return this.aO}),x.i=(function(e){return this.c5(e)}),x.c=(function(e){return this.c5(e|0)}),new E().i(Km,`scala.collection.immutable.ArraySeq$ofShort`,{bf:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function qm(e){this.b5=null,this.b5=e}x=qm.prototype=new Fm,x.constructor=qm,x.f=(function(){return this.b5.a.length}),x.c6=(function(e){}),x.k=(function(){var e=R();return e.w(this.b5,e.s)}),x.g=(function(e){return e instanceof qm?this.b5.a.length===e.b5.a.length:Z(this,e)}),x.e=(function(){return new Y(this.b5)}),x.ar=(function(){return this.b5}),x.i=(function(e){this.c6(e)}),x.c=(function(e){this.c6(e|0)}),new E().i(qm,`scala.collection.immutable.ArraySeq$ofUnit`,{bg:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,P:1,a:1});function Jm(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.E();a=o,i=s;continue}return-1}}function Ym(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.d(),o=r.d();if(!(a||o)&&M().H(i.O(),r.O())){var s=i.E(),c=r.E();i=s,r=c;continue}return a&&o}}function Xm(){}x=Xm.prototype=new Tm,x.constructor=Xm;function Zm(){}Zm.prototype=x,x.gR=(function(e){return Ef(this,e)}),x.i=(function(e){return Df(this,e)}),x.cY=(function(e){return Of(this,e)}),x.aB=(function(){return`LinearSeq`}),x.e=(function(){return new Af(this)}),x.hp=(function(e){if(this.d())return e;if(e.d())return this;for(var t=new ch(e.O(),this),n=t,r=e.E();!r.d();){var i=new ch(r.O(),this);n.aw=i,n=i,r=r.E()}return t}),x.d=(function(){return this===$()}),x.gY=(function(e){if(e instanceof Xm)return this.hp(e);if(e.r()===0)return this;if(e instanceof gh&&this.d())return e.h6();var t=e.e();if(t.j()){for(var n=new ch(t.h(),this),r=n;t.j();){var i=new ch(t.h(),this);r.aw=i,r=i}return n}return this}),x.j1=(function(e){if(this===$())var t=$();else{for(var n=new ch(e.c(this.O()),$()),r=n,i=this.E();i!==$();){var a=new ch(e.c(i.O()),$());r.aw=a,r=a,i=i.E()}var t=n}return t}),x.aa=(function(e){for(var t=this;!t.d();)e.c(t.O()),t=t.E()}),x.f=(function(){for(var e=this,t=0;!e.d();)t=1+t|0,e=e.E();return t}),x.a3=(function(e){return e<0?1:Jm(this,e,0,this)}),x.aW=(function(){return`List`}),x.g=(function(e){return e instanceof Xm?Ym(this,this,e):Z(this,e)}),x.ba=(function(){return Nf()}),x.dH=(function(e){return this.j1(e)}),x.ia=(function(e){return Qp(this,e,this)}),x.cT=(function(e){return Ef(this,e|0)}),x.c=(function(e){return Df(this,e|0)});function Qm(e){this.aP=null,this.aP=e}x=Qm.prototype=new Lm,x.constructor=Qm,x.f=(function(){return this.aP.a.length}),x.c7=(function(e){return this.aP.a[e]}),x.k=(function(){var e=R();return e.w(this.aP,e.s)}),x.g=(function(e){return e instanceof Qm?ts().gG(this.aP,e.aP):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aP)}),x.a1=(function(){return this.aP}),x.i=(function(e){return this.c7(e)}),x.c=(function(e){return this.c7(e|0)}),new E().i(Qm,`scala.collection.mutable.ArraySeq$ofBoolean`,{bk:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function $m(e){this.aQ=null,this.aQ=e}x=$m.prototype=new Lm,x.constructor=$m,x.f=(function(){return this.aQ.a.length}),x.bZ=(function(e){return this.aQ.a[e]}),x.k=(function(){var e=R();return e.w(this.aQ,e.s)}),x.g=(function(e){return e instanceof $m?ts().gB(this.aQ,e.aQ):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aQ)}),x.a1=(function(){return this.aQ}),x.i=(function(e){return this.bZ(e)}),x.c=(function(e){return this.bZ(e|0)}),new E().i($m,`scala.collection.mutable.ArraySeq$ofByte`,{bl:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function eh(e){this.V=null,this.V=e}x=eh.prototype=new Lm,x.constructor=eh,x.f=(function(){return this.V.a.length}),x.c0=(function(e){return this.V.a[e]}),x.k=(function(){var e=R();return e.w(this.V,e.s)}),x.g=(function(e){return e instanceof eh?ts().gC(this.V,e.V):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.V)}),x.by=(function(e,t,n,r){var i=e.N;t.length!==0&&(i.q=``+i.q+t);var a=this.V.a.length;if(a!==0){if(n===``)i.hH(this.V);else{i.f();var o=this.V.a[0],s=``+vr(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.V.a[c],u=``+vr(l);i.q+=u,c=1+c|0}}}return r.length!==0&&(i.q=``+i.q+r),e}),x.a1=(function(){return this.V}),x.i=(function(e){return Or(this.c0(e))}),x.c=(function(e){return Or(this.c0(e|0))}),new E().i(eh,`scala.collection.mutable.ArraySeq$ofChar`,{bm:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function th(e){this.W=null,this.W=e}x=th.prototype=new Lm,x.constructor=th,x.f=(function(){return this.W.a.length}),x.c1=(function(e){return this.W.a[e]}),x.k=(function(){var e=R();return e.w(this.W,e.s)}),x.g=(function(e){if(e instanceof th){var t=e.W;if(this.W===t)return!0;if(this.W.a.length===t.a.length){for(var n=0;n<this.W.a.length&&this.W.a[n]===t.a[n];)n=1+n|0;return n>=this.W.a.length}return!1}return Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.W)}),x.a1=(function(){return this.W}),x.i=(function(e){return this.c1(e)}),x.c=(function(e){return this.c1(e|0)}),new E().i(th,`scala.collection.mutable.ArraySeq$ofDouble`,{bn:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function nh(e){this.X=null,this.X=e}x=nh.prototype=new Lm,x.constructor=nh,x.f=(function(){return this.X.a.length}),x.c2=(function(e){return this.X.a[e]}),x.k=(function(){var e=R();return e.w(this.X,e.s)}),x.g=(function(e){if(e instanceof nh){var t=e.X;if(this.X===t)return!0;if(this.X.a.length===t.a.length){for(var n=0;n<this.X.a.length&&this.X.a[n]===t.a[n];)n=1+n|0;return n>=this.X.a.length}return!1}return Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.X)}),x.a1=(function(){return this.X}),x.i=(function(e){return this.c2(e)}),x.c=(function(e){return this.c2(e|0)}),new E().i(nh,`scala.collection.mutable.ArraySeq$ofFloat`,{bo:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function rh(e){this.aR=null,this.aR=e}x=rh.prototype=new Lm,x.constructor=rh,x.f=(function(){return this.aR.a.length}),x.c3=(function(e){return this.aR.a[e]}),x.k=(function(){var e=R();return e.w(this.aR,e.s)}),x.g=(function(e){return e instanceof rh?ts().gD(this.aR,e.aR):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aR)}),x.a1=(function(){return this.aR}),x.i=(function(e){return this.c3(e)}),x.c=(function(e){return this.c3(e|0)}),new E().i(rh,`scala.collection.mutable.ArraySeq$ofInt`,{bp:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ih(e){this.aS=null,this.aS=e}x=ih.prototype=new Lm,x.constructor=ih,x.f=(function(){return this.aS.a.length>>>1|0}),x.c4=(function(e){var t=this.aS.a,n=e<<1;return C(t[n],t[n+1|0])}),x.k=(function(){var e=R();return e.w(this.aS,e.s)}),x.g=(function(e){return e instanceof ih?ts().gE(this.aS,e.aS):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aS)}),x.a1=(function(){return this.aS}),x.i=(function(e){return this.c4(e)}),x.c=(function(e){return this.c4(e|0)}),new E().i(ih,`scala.collection.mutable.ArraySeq$ofLong`,{bq:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ah(e){this.aT=null,this.aT=e}x=ah.prototype=new Lm,x.constructor=ah,x.f=(function(){return this.aT.a.length}),x.i=(function(e){return this.aT.a[e]}),x.k=(function(){var e=R();return e.w(this.aT,e.s)}),x.g=(function(e){return e instanceof ah?fs().gH(this.aT,e.aT):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aT)}),x.a1=(function(){return this.aT}),x.c=(function(e){return this.i(e|0)}),new E().i(ah,`scala.collection.mutable.ArraySeq$ofRef`,{br:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function oh(e){this.aU=null,this.aU=e}x=oh.prototype=new Lm,x.constructor=oh,x.f=(function(){return this.aU.a.length}),x.c5=(function(e){return this.aU.a[e]}),x.k=(function(){var e=R();return e.w(this.aU,e.s)}),x.g=(function(e){return e instanceof oh?ts().gF(this.aU,e.aU):Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.aU)}),x.a1=(function(){return this.aU}),x.i=(function(e){return this.c5(e)}),x.c=(function(e){return this.c5(e|0)}),new E().i(oh,`scala.collection.mutable.ArraySeq$ofShort`,{bs:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function sh(e){this.b6=null,this.b6=e}x=sh.prototype=new Lm,x.constructor=sh,x.f=(function(){return this.b6.a.length}),x.c6=(function(e){}),x.k=(function(){var e=R();return e.w(this.b6,e.s)}),x.g=(function(e){return e instanceof sh?this.b6.a.length===e.b6.a.length:Im.prototype.g.call(this,e)}),x.e=(function(){return new Y(this.b6)}),x.a1=(function(){return this.b6}),x.i=(function(e){this.c6(e)}),x.c=(function(e){this.c6(e|0)}),new E().i(sh,`scala.collection.mutable.ArraySeq$ofUnit`,{bt:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ch(e,t){this.du=null,this.aw=null,this.du=e,this.aw=t}x=ch.prototype=new Zm,x.constructor=ch,x.bc=(function(){return new mf(this)}),x.ad=(function(){return 2}),x.af=(function(){return`::`}),x.ae=(function(e){if(e===0)return this.du;if(e===1)return this.aw;throw Qd(new $d,e)}),x.O=(function(){return this.du}),x.E=(function(){return this.aw}),new E().i(ch,`scala.collection.immutable.$colon$colon`,{en:1,al:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,b2:1,a5:1,bi:1,bh:1,p:1,q:1,b5:1,D:1,a:1,a6:1,U:1});function lh(){uh=this,$(),$()}x=lh.prototype=new Zm,x.constructor=lh,x.bc=(function(){return new mf(this)}),x.ad=(function(){return 0}),x.af=(function(){return`Nil`}),x.ae=(function(e){throw Qd(new $d,e)}),x.iG=(function(){throw new cf(`head of empty list`)}),x.jJ=(function(){throw new of(`tail of empty list`)}),x.r=(function(){return 0}),x.e=(function(){return bu().L}),x.O=(function(){this.iG()}),x.E=(function(){this.jJ()}),new E().i(lh,`scala.collection.immutable.Nil$`,{es:1,al:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,b2:1,a5:1,bi:1,bh:1,p:1,q:1,b5:1,D:1,a:1,a6:1,U:1});var uh;function $(){return uh||=new lh,uh}function dh(e,t){return e.N=t,e}function fh(e){return dh(e,new nd),e}function ph(){this.N=null}x=ph.prototype=new jm,x.constructor=ph,x.a6=(function(e){return ul(this,e)}),x.e=(function(){return Tp(new Dp,new Cm(this))}),x.a3=(function(e){var t=this.N.f();return t===e?0:t<e?-1:1}),x.aB=(function(){return`IndexedSeq`}),x.f=(function(){return this.N.f()}),x.r=(function(){return this.N.f()}),x.hw=(function(e){var t=this.N,n=``+vr(e);return t.q+=n,this}),x.o=(function(){return this.N.q}),x.d=(function(){return this.N.f()===0}),x.i=(function(e){return Or(this.N.gv(e))}),x.c=(function(e){var t=e|0;return Or(this.N.gv(t))}),x.a0=(function(e){return this.hw(Ar(e))}),x.aq=(function(){return this.N.q}),new E().i(ph,`scala.collection.mutable.StringBuilder`,{eH:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,W:1,a7:1,o:1,n:1,F:1,E:1,aj:1,a:1});function mh(e){var t=new gh().cZ(e);e.Y=t.Y,e.az=t.az,e.cG=!1}function hh(e){e.cH=1+e.cH|0,e.cG&&mh(e)}function gh(){this.cH=0,this.Y=null,this.az=null,this.cG=!1,this.Z=0,this.cH=0,this.Y=$(),this.az=null,this.cG=!1,this.Z=0}x=gh.prototype=new Nm,x.constructor=gh,x.e=(function(){return new qf(this.Y.e(),new wu((()=>this.cH)))}),x.i=(function(e){return Df(this.Y,e)}),x.f=(function(){return this.Z}),x.r=(function(){return this.Z}),x.d=(function(){return this.Z===0}),x.h6=(function(){return this.cG=!this.d(),this.Y}),x.hB=(function(e){hh(this);var t=new ch(e,$());if(this.Z===0)this.Y=t;else{var n=this.az;n===null&&Qs().bz(),n.aw=t}return this.az=t,this.Z=1+this.Z|0,this}),x.cZ=(function(e){var t=e.e();if(t.j()){var n=1,r=new ch(t.h(),$());for(this.Y=r;t.j();){var i=new ch(t.h(),$());r.aw=i,r=i,n=1+n|0}this.Z=n,this.az=r}return this}),x.hu=(function(e){var t=e.e();if(t.j()){var n=new gh().cZ(t);if(hh(this),this.Z===0)this.Y=n.Y;else{var r=this.az;r===null&&Qs().bz(),r.aw=n.Y}this.az=n.az,this.Z=this.Z+n.Z|0}return this}),x.aB=(function(){return`ListBuffer`}),x.ba=(function(){return Kf()}),x.c=(function(e){var t=e|0;return Df(this.Y,t)}),x.aq=(function(){return this.h6()}),x.a0=(function(e){return this.hB(e)}),x.a6=(function(e){return this.hu(e)}),new E().i(gh,`scala.collection.mutable.ListBuffer`,{bw:1,am:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ao:1,an:1,p:1,q:1,W:1,a7:1,a:1,a6:1});function _h(e,t,n){return e.bw=0,e.ay=t,e.z=n,e}function vh(e){return _h(e,new T(16),0),e}function yh(){this.bw=0,this.ay=null,this.z=0}x=yh.prototype=new Nm,x.constructor=yh,x.e=(function(){return this.jP().e()}),x.a3=(function(e){var t=this.z;return t===e?0:t<e?-1:1}),x.r=(function(){return this.z}),x.gA=(function(e){this.ay=If().h1(this.ay,this.z,e)}),x.i=(function(e){var t=1+e|0;if(e<0)throw Ls().gQ(e,this.z-1|0);if(t>this.z)throw Ls().gQ(t-1|0,this.z-1|0);return this.ay.a[e]}),x.f=(function(){return this.z}),x.jP=(function(){return new Em(this,new wu((()=>this.bw)))}),x.hy=(function(e){this.bw=1+this.bw|0;var t=1+this.z|0;return this.ay.a.length<=(t-1|0)&&this.gA(t),this.z=t,this.ay.a[t-1|0]=e,this}),x.gq=(function(e){if(e instanceof yh){var t=e.z;t>0&&(this.bw=1+this.bw|0,this.gA(this.z+t|0),fs().cN(e.ay,0,this.ay,this.z,t),this.z=this.z+t|0)}else ul(this,e);return this}),x.aB=(function(){return`ArrayBuffer`}),x.aX=(function(e,t,n){var r=this.z,i=Qo().ab(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&fs().cN(this.ay,0,e,t,c),c}),x.c=(function(e){return this.i(e|0)}),x.ba=(function(){return If()}),x.a0=(function(e){return this.hy(e)}),x.a6=(function(e){return this.gq(e)}),new E().i(yh,`scala.collection.mutable.ArrayBuffer`,{bj:1,am:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ao:1,an:1,o:1,n:1,F:1,E:1,bv:1,p:1,q:1,a:1,a6:1});function bh(e,t){return e.aV=t,e}function xh(e){return bh(e,[]),e}function Sh(){this.aV=null}x=Sh.prototype=new Nm,x.constructor=Sh,x.aB=(function(){return`IndexedSeq`}),x.e=(function(){return Tp(new Dp,new Cm(this))}),x.a3=(function(e){var t=this.aV.length|0;return t===e?0:t<e?-1:1}),x.i=(function(e){return this.aV[e]}),x.f=(function(){return this.aV.length|0}),x.r=(function(){return this.aV.length|0}),x.aW=(function(){return`WrappedArray`}),x.aq=(function(){return this}),x.a0=(function(e){return this.aV.push(e),this}),x.c=(function(e){var t=e|0;return this.aV[t]}),x.ba=(function(){return Zf()}),new E().i(Sh,`scala.scalajs.js.WrappedArray`,{f4:1,am:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,s:1,u:1,x:1,w:1,S:1,T:1,ao:1,an:1,q:1,p:1,E:1,o:1,n:1,F:1,bv:1,W:1,a:1}),Xa(new(bp.r()).C([]));