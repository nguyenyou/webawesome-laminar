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
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),ee=/* @__PURE__ */ new WeakMap;var h=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ee.set(t,e))}return e}toString(){return this.cssText}};const te=e=>new h(typeof e==`string`?e:e+``,void 0,m),g=(e,...t)=>new h(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,m),ne=(e,t)=>{if(p)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},re=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return te(t)})(e):e,{is:ie,defineProperty:ae,getOwnPropertyDescriptor:oe,getOwnPropertyNames:se,getOwnPropertySymbols:ce,getPrototypeOf:le}=Object,ue=globalThis,de=ue.trustedTypes,fe=de?de.emptyScript:``,pe=ue.reactiveElementPolyfillSupport,me=(e,t)=>e,he={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ge=(e,t)=>!ie(e,t),_e={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol(`metadata`),ue.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(me(`elementProperties`)))return;let e=le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me(`properties`))){let e=this.properties,t=[...se(e),...ce(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(re(e))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?he:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?he:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ge)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:`open`},ve[me(`elementProperties`)]=/* @__PURE__ */ new Map,ve[me(`finalized`)]=/* @__PURE__ */ new Map,pe?.({ReactiveElement:ve}),(ue.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ye=globalThis,be=e=>e,xe=ye.trustedTypes,Se=xe?xe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ce=`$lit$`,we=`lit$${Math.random().toFixed(9).slice(2)}$`,Te=`?`+we,Ee=`<${Te}>`,De=document,Oe=()=>De.createComment(``),ke=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ae=Array.isArray,je=e=>Ae(e)||typeof e?.[Symbol.iterator]==`function`,Me=`[ 	
\f\r]`,Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pe=/-->/g,Fe=/>/g,Ie=RegExp(`>|${Me}(?:([^\\s"'>=/]+)(${Me}*=${Me}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Le=/'/g,Re=/"/g,ze=/^(?:script|style|textarea|title)$/i,Be=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ve=Symbol.for(`lit-noChange`),_=Symbol.for(`lit-nothing`),He=/* @__PURE__ */ new WeakMap,Ue=De.createTreeWalker(De,129);function We(e,t){if(!Ae(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Se===void 0?t:Se.createHTML(t)}const Ge=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ne;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ne?c[1]===`!--`?o=Pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ie):(ze.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ie):o=Fe:o===Ie?c[0]===`>`?(o=i??Ne,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ie:c[3]===`"`?Re:Le):o===Re||o===Le?o=Ie:o===Pe||o===Fe?o=Ne:(o=Ie,i=void 0);let d=o===Ie&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ne?n+Ee:l>=0?(r.push(s),n.slice(0,l)+Ce+n.slice(l)+we+d):n+we+(l===-2?t:d)}return[We(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ke=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ge(t,n);if(this.el=e.createElement(l,r),Ue.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ue.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ce)){let t=u[o++],n=i.getAttribute(e).split(we),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ze:r[1]===`?`?Qe:r[1]===`@`?$e:Xe}),i.removeAttribute(e)}else e.startsWith(we)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ze.test(i.tagName)){let e=i.textContent.split(we),t=e.length-1;if(t>0){i.textContent=xe?xe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Oe()),Ue.nextNode(),c.push({type:2,index:++a});i.append(e[t],Oe())}}}else if(i.nodeType===8){if(i.data===Te)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(we,e+1))!==-1;)c.push({type:7,index:a}),e+=we.length-1}}a++}}static createElement(e,t){let n=De.createElement(`template`);return n.innerHTML=e,n}};function qe(e,t,n=e,r){if(t===Ve)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ke(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=qe(e,i._$AS(e,t.values),i,r)),t}var Je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??De).importNode(t,!0);Ue.currentNode=r;let i=Ue.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ye(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new et(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ue.nextNode(),a++)}return Ue.currentNode=De,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ye=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qe(this,e,t),ke(e)?e===_||e==null||e===``?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Ve&&this._(e):e._$litType$===void 0?e.nodeType===void 0?je(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&ke(this._$AH)?this._$AA.nextSibling.data=e:this.T(De.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ke.createElement(We(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Je(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new Ke(e)),t}k(t){Ae(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Oe()),this.O(Oe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=be(e).nextSibling;be(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=qe(this,e,t,0),a=!ke(e)||e!==this._$AH&&e!==Ve,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=qe(this,r[n+o],t,o),s===Ve&&(s=this._$AH[o]),a||=!ke(s)||s!==this._$AH[o],s===_?e=_:e!==_&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ze=class extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Qe=class extends Xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},$e=class extends Xe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=qe(this,e,t,0)??_)===Ve)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},et=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}};const tt={M:Ce,P:we,A:Te,C:1,L:Ge,R:Je,D:je,V:qe,I:Ye,H:Xe,N:Qe,U:$e,B:Ze,F:et},nt=ye.litHtmlPolyfillSupport;nt?.(Ke,Ye),(ye.litHtmlVersions??=[]).push(`3.3.3`);const rt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ye(t.insertBefore(Oe(),e),e,void 0,n??{})}return i._$AI(e),i},it=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var at=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ve}};at._$litElement$=!0,at.finalized=!0,it.litElementHydrateSupport?.({LitElement:at});const ot=it.litElementPolyfillSupport;ot?.({LitElement:at}),(it.litElementVersions??=[]).push(`4.2.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},ct={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:ge},lt=(e=ct,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?lt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ut(e){return v({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const dt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ft(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return dt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return dt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=g`
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
`,mt=/;\s+$/;function ht(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function gt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(mt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var _t,vt=class extends at{constructor(){super(),u(this,_t,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[pt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,_t)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,_t,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=gt({property:ht(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=gt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};_t=/* @__PURE__ */ new WeakMap,s([v()],vt.prototype,`dir`,2),s([v()],vt.prototype,`lang`,2),s([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],vt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),bt=class extends vt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[yt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};bt.formAssociated=!0,s([v({reflect:!0})],bt.prototype,`name`,2),s([v({type:Boolean})],bt.prototype,`disabled`,2),s([v({state:!0,attribute:!1})],bt.prototype,`valueHasChanged`,2),s([v({state:!0,attribute:!1})],bt.prototype,`hasInteracted`,2),s([v({attribute:`custom-error`,reflect:!0})],bt.prototype,`customError`,2),s([v({attribute:!1,state:!0,type:Object})],bt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt={small:`s`,medium:`m`,large:`l`},St=/* @__PURE__ */ new Set;function Ct(e,t){t in xt&&!St.has(`${e}:${t}`)&&(St.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${xt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Tt=g`
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
`,Et=g`
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
`,Dt=g`
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
function Ot(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const kt=/* @__PURE__ */ new Set,At=/* @__PURE__ */ new Map;let jt,Mt=`ltr`,Nt=`en`;const Pt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Pt){let e=new MutationObserver(It);Mt=document.documentElement.dir||`ltr`,Nt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Ft(...e){e.map(e=>{let t=e.$code.toLowerCase();At.has(t)?At.set(t,Object.assign(Object.assign({},At.get(t)),e)):At.set(t,e),jt||=e}),It()}function It(){Pt&&(Mt=document.documentElement.dir||`ltr`,Nt=document.documentElement.lang||navigator.language),[...kt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Lt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){kt.add(this.host)}hostDisconnected(){kt.delete(this.host)}dir(){return`${this.host.dir||Mt}`.toLowerCase()}lang(){let e=`${this.host.lang||Nt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return jt?jt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=At.get(`${n}-${r}`),a=At.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&jt&&jt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(jt&&jt[e])i=jt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Rt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Ft(Rt);var zt=Rt,Bt=class extends Lt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Ft(zt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ht=e=>(...t)=>({_$litDirective$:e,values:t});var Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Wt=Ht(class extends Ut{constructor(e){if(super(e),e.type!==Vt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ve}}),Gt=e=>e??_,Kt=Symbol.for(``),qt=e=>{
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
if(e?.r===Kt)return e?._$litStatic$},Jt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Kt}),Yt=/* @__PURE__ */ new Map,Xt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=qt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Yt.get(e))===void 0&&(o.raw=o,Yt.set(e,t=o)),n=s}return e(t,...n)})(Be);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends bt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new wt(this,`[default]`,`start`,`end`),this.localize=new Bt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){Ct(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Jt`a`:Jt`button`;return Xt`
      <${t}
        part="base button"
        class=${Wt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Gt(e?void 0:this.disabled)}
        type=${Gt(e?void 0:this.type)}
        title=${this.title}
        name=${Gt(e?void 0:this.name)}
        value=${Gt(e?void 0:this.value)}
        href=${Gt(e?this.href:void 0)}
        target=${Gt(e?this.target:void 0)}
        download=${Gt(e?this.download:void 0)}
        rel=${Gt(e&&this.rel?this.rel:void 0)}
        role=${Gt(e?void 0:`button`)}
        aria-disabled=${Gt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Xt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Xt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};y.shadowRootOptions={...bt.shadowRootOptions,delegatesFocus:!0},y.css=[Et,Dt,Tt],s([ft(`.button`)],y.prototype,`button`,2),s([ft(`slot:not([name])`)],y.prototype,`labelSlot`,2),s([ut()],y.prototype,`invalid`,2),s([ut()],y.prototype,`isIconButton`,2),s([v()],y.prototype,`title`,2),s([v({reflect:!0})],y.prototype,`variant`,2),s([v({reflect:!0})],y.prototype,`appearance`,2),s([v({reflect:!0})],y.prototype,`size`,2),s([Ot(`size`)],y.prototype,`handleSizeChange`,1),s([v({attribute:`with-caret`,type:Boolean,reflect:!0})],y.prototype,`withCaret`,2),s([v({attribute:`with-start`,type:Boolean})],y.prototype,`withStart`,2),s([v({attribute:`with-end`,type:Boolean})],y.prototype,`withEnd`,2),s([v({type:Boolean})],y.prototype,`disabled`,2),s([v({type:Boolean,reflect:!0})],y.prototype,`loading`,2),s([v({type:Boolean,reflect:!0})],y.prototype,`pill`,2),s([v()],y.prototype,`type`,2),s([v({reflect:!0})],y.prototype,`name`,2),s([v({reflect:!0})],y.prototype,`value`,2),s([v({reflect:!0})],y.prototype,`href`,2),s([v()],y.prototype,`target`,2),s([v()],y.prototype,`rel`,2),s([v()],y.prototype,`download`,2),s([v({attribute:`formaction`})],y.prototype,`formAction`,2),s([v({attribute:`formenctype`})],y.prototype,`formEnctype`,2),s([v({attribute:`formmethod`})],y.prototype,`formMethod`,2),s([v({attribute:`formnovalidate`,type:Boolean})],y.prototype,`formNoValidate`,2),s([v({attribute:`formtarget`})],y.prototype,`formTarget`,2),s([Ot(`disabled`,{waitUntilFirstUpdate:!0})],y.prototype,`handleDisabledChange`,1),s([Ot(`href`)],y.prototype,`handleHrefChange`,1),s([Ot(`loading`,{waitUntilFirstUpdate:!0})],y.prototype,`handleLoadingChange`,1),y=s([st(`wa-button`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=g`
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
`,Qt=class extends vt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Bt(this)}render(){return Be`
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
    `}};Qt.css=Zt,Qt=s([st(`wa-spinner`)],Qt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $t=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},en=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},tn=g`
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
`,nn=``,rn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function an(){return nn.replace(/\/$/,``)}function on(e){rn=e}function sn(){if(!rn){let e=document.querySelector(`[data-fa-kit-code]`);e&&on(e.getAttribute(`data-fa-kit-code`)||``)}return rn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cn=`7.3.0`;function ln(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function un(e,t,n){let r=ln(e,t,n),i=an();if(i)return`${i}/${r}/${e}.svg`;let a=sn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${cn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${cn}/svgs/${r}/${e}.svg`}var dn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>un(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function fn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var pn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},mn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=pn[n][e]??pn.regular[e]??pn.regular[`circle-question`];return r?fn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},hn=`classic`,gn=[dn,mn],_n=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function vn(e){_n.add(e)}function yn(e){_n.delete(e)}function bn(e){return gn.find(t=>t.name===e)}function xn(){return hn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Sn}=tt,Cn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=Symbol(),Tn=Symbol(),En,Dn=/* @__PURE__ */ new Map,b=class extends vt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Be`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?wn:Tn}catch{return Tn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return wn;En||=new DOMParser;let r=En.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):wn}catch{return wn}}}connectedCallback(){super.connectedCallback(),vn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yn(this)}async getIconSource(){let e=bn(this.library),t=this.family||xn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?bn(this.library):void 0;if(!e){this.svg=null;return}let r=Dn.get(e);r||(r=this.resolveIcon(e,n),Dn.set(e,r));let i=await r;if(i===Tn&&Dn.delete(e),e===(await this.getIconSource()).url){if(Cn(i))this.svg=i;else switch(i){case Tn:case wn:this.svg=null,this.dispatchEvent(new $t);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new en)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=bn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Be`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};b.css=tn,s([ut()],b.prototype,`svg`,2),s([v({reflect:!0})],b.prototype,`name`,2),s([v({reflect:!0})],b.prototype,`family`,2),s([v({reflect:!0})],b.prototype,`variant`,2),s([v({reflect:!0})],b.prototype,`canvas`,2),s([v({attribute:`auto-width`,type:Boolean,reflect:!0})],b.prototype,`autoWidth`,2),s([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],b.prototype,`swapOpacity`,2),s([v()],b.prototype,`src`,2),s([v()],b.prototype,`label`,2),s([v({reflect:!0})],b.prototype,`library`,2),s([v({type:Number,reflect:!0})],b.prototype,`rotate`,2),s([v({type:String,reflect:!0})],b.prototype,`flip`,2),s([v({type:String,reflect:!0})],b.prototype,`animation`,2),s([Ot(`label`)],b.prototype,`handleLabelChange`,1),s([Ot([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],b.prototype,`setIcon`,1),b=s([st(`wa-icon`)],b);var On=/* @__PURE__ */ t({default:()=>y}),kn=g`
  :host {
    --accent-width: 4px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);
    --accent-color: var(--wa-color-fill-loud);

    display: block;
    pointer-events: auto;
  }

  /* Sizes */
  :host([size='xs']) {
    --padding: var(--wa-space-xs);
  }
  :host([size='s']),
  :host([size='small']) {
    --padding: var(--wa-space-s);
  }
  :host([size='m']),
  :host([size='medium']) {
    --padding: var(--wa-space-m);
  }
  :host([size='l']),
  :host([size='large']) {
    --padding: var(--wa-space-l);
  }
  :host([size='xl']) {
    --padding: var(--wa-space-xl);
  }

  .toast-item {
    display: flex;
    align-items: stretch;
    background: var(--wa-color-surface-raised);
    border: var(--wa-border-width-s) solid var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-l);
    overflow: hidden;
  }

  /* Animations */
  .toast-item.show {
    animation: toast-show var(--show-duration) var(--wa-transition-easing) forwards;
  }

  .toast-item.hide {
    animation: toast-hide var(--hide-duration) var(--wa-transition-easing) forwards;
  }

  @keyframes toast-show {
    from {
      opacity: 0;
      translate: 0 -0.5rem;
    }
    to {
      opacity: 1;
      translate: 0;
    }
  }

  @keyframes toast-hide {
    from {
      opacity: 1;
      translate: 0;
    }
    to {
      opacity: 0;
      translate: 0 -0.5rem;
    }
  }

  /* Accent line */
  .accent {
    flex: 0 0 auto;
    width: var(--accent-width);
    background: var(--accent-color);
  }

  /* Icon - only show if slot has content */
  .icon {
    display: flex;
    align-items: center;
    padding: var(--padding);
    padding-inline-end: 0;
    color: var(--accent-color);
    font-size: 1.25em;
  }

  .toast-item:not(.toast-item--has-icon) .icon {
    display: none;
  }

  /* Content */
  .content {
    flex: 1 1 auto;
    align-self: center;
    min-width: 0;
    padding: var(--padding);
    color: var(--wa-color-text-normal);
  }

  /* Close button */
  .close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    padding-inline: var(--padding);
    background: transparent;
    border: none;
    border-start-end-radius: var(--border-radius);
    border-end-end-radius: var(--border-radius);
    color: var(--wa-color-neutral-on-quiet);
    font-size: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-focus-ring-width) * -1);
    }
  }

  /* Progress ring styling */
  wa-progress-ring {
    --size: var(--wa-form-control-height);
    --track-width: 0.125rem;
    --indicator-width: 0.125rem;
    --track-color: var(--wa-color-neutral-fill-quiet);
    --indicator-color: var(--accent-color);
    --indicator-transition-duration: 50ms;
  }

  /* Hide progress ring indicator when no duration */
  .toast-item:not(.toast-item--has-duration) wa-progress-ring {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .toast-item.show,
    .toast-item.hide {
      animation: none;
    }
  }
`,An=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},jn=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Mn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Nn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function Pn(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function Fn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}function In(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ln=class extends vt{constructor(){super(...arguments),this.hasSlotController=new wt(this,`icon`),this.localize=new Bt(this),this.animationFrame=null,this.startTime=null,this.isHovering=!1,this.isFocused=!1,this.timeLeft=100,this.variant=`neutral`,this.size=`m`,this.duration=5e3,this.withIcon=!1,this.tick=()=>{if(!this.startTime)return;let e=performance.now()-this.startTime,t=Math.min(e/this.duration,1);this.timeLeft=100*(1-t),t<1?this.animationFrame=requestAnimationFrame(this.tick):this.hide()},this.handlePointerEnter=e=>{(e.pointerType===`mouse`||e.pointerType===`pen`)&&(this.isHovering=!0,this.pauseTimer())},this.handlePointerLeave=()=>{this.isHovering&&(this.isHovering=!1,this.resumeTimer())},this.handleFocusIn=()=>{this.isFocused=!0,this.pauseTimer()},this.handleFocusOut=()=>{this.isFocused=!1,this.resumeTimer()}}handleSizeChange(){Ct(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerenter`,this.handlePointerEnter),this.addEventListener(`pointerleave`,this.handlePointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer(),this.removeEventListener(`pointerenter`,this.handlePointerEnter),this.removeEventListener(`pointerleave`,this.handlePointerLeave)}async startTimer(){let e=new An;this.dispatchEvent(e),!e.defaultPrevented&&(await this.updateComplete,await Fn(this.toastItemElement,`show`),this.dispatchEvent(new Nn),this.duration>0&&Number.isFinite(this.duration)&&(this.startTime=performance.now(),this.timeLeft=100,this.tick()))}stopTimer(){this.animationFrame!==null&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}async hide(){this.stopTimer();let e=new jn;this.dispatchEvent(e),!e.defaultPrevented&&(await Fn(this.toastItemElement,`hide`),this.dispatchEvent(new Mn),this.remove())}handleCloseClick(){this.hide()}pauseTimer(){this.stopTimer(),this.timeLeft=100}resumeTimer(){!this.isHovering&&!this.isFocused&&this.duration>0&&(this.startTime=performance.now(),this.tick())}render(){let e=this.hasUpdated?this.hasSlotController.test(`icon`):this.withIcon,t=this.duration>0;return Be`
      <div
        part="toast-item"
        class=${Wt({"toast-item":!0,"toast-item--has-icon":e,"toast-item--has-duration":t})}
      >
        <div part="accent" class="accent"></div>

        <div part="icon" class="icon">
          <slot name="icon"></slot>
        </div>

        <div part="content" class="content">
          <slot></slot>
        </div>

        <button
          part="close-button"
          class="close-button"
          type="button"
          aria-label=${this.localize.term(`close`)}
          @click=${this.handleCloseClick}
          @focusin=${this.handleFocusIn}
          @focusout=${this.handleFocusOut}
        >
          <wa-progress-ring
            part="progress-ring"
            exportparts="
              base:progress-ring__base,
              label:progress-ring__label,
              track:progress-ring__track,
              indicator:progress-ring__indicator
            "
            value=${this.timeLeft}
            aria-hidden="true"
          >
            <wa-icon
              part="close-icon"
              exportparts="svg:close-icon__svg"
              name="xmark"
              library="system"
              variant="solid"
            ></wa-icon>
          </wa-progress-ring>
        </button>
      </div>
    `}};Ln.css=[kn,Dt,Tt],s([ft(`.toast-item`)],Ln.prototype,`toastItemElement`,2),s([ut()],Ln.prototype,`timeLeft`,2),s([v({reflect:!0})],Ln.prototype,`variant`,2),s([v({reflect:!0})],Ln.prototype,`size`,2),s([Ot(`size`)],Ln.prototype,`handleSizeChange`,1),s([v({type:Number})],Ln.prototype,`duration`,2),s([v({attribute:`with-icon`,type:Boolean})],Ln.prototype,`withIcon`,2),Ln=s([st(`wa-toast-item`)],Ln);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rn=g`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const zn=Ht(class extends Ut{constructor(e){if(super(e),e.type!==Vt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?`important`:``):n[e]=r}}return Ve}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=class extends vt{constructor(){super(...arguments),this.localize=new Bt(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e,n=t-this.value/100*t;this.indicatorOffset=`${n}px`}}render(){return Be`
      <div
        part="base progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${zn({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${zn({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};Bn.css=Rn,s([ft(`.indicator`)],Bn.prototype,`indicator`,2),s([ut()],Bn.prototype,`indicatorOffset`,2),s([v({type:Number,reflect:!0})],Bn.prototype,`value`,2),s([v()],Bn.prototype,`label`,2),Bn=s([st(`wa-progress-ring`)],Bn),Bn.disableWarning?.(`change-in-update`);var Vn=/* @__PURE__ */ t({default:()=>Ln}),Hn=g`
  :host {
    --gap: var(--wa-space-s);
    --width: 28rem;
    --reorder-duration: var(--wa-transition-normal);

    display: flex;
    flex-direction: column;
    position: fixed;
    width: var(--width);
    height: 100dvh;
    max-height: 100dvh;
    margin: 0;
    padding: var(--wa-space-m);
    overflow-y: auto;
    gap: var(--gap);
    border: none;
    background: transparent;
    pointer-events: none;
    scrollbar-width: thin;

    /* Reset inset properties so placement changes work correctly */
    inset-block-start: auto;
    inset-block-end: auto;
    inset-inline-start: auto;
    inset-inline-end: auto;
    translate: none;
    align-content: normal;
    justify-content: normal;
  }

  :host(:not(:popover-open)) {
    display: none;
  }

  /* Placement positioning using logical properties for RTL support */
  :host([placement='top-start']) {
    inset-block-start: 0;
    inset-inline-start: 0;
  }

  :host([placement='top-center']) {
    inset-block-start: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  :host([placement='top-end']) {
    inset-block-start: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([placement='bottom-start']) {
    inset-block-end: 0;
    inset-inline-start: 0;
    align-content: end;
  }

  :host([placement='bottom-center']) {
    inset-block-end: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
    align-content: end;
  }

  :host([placement='bottom-end']) {
    inset-block-end: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
    align-content: end;
  }

  /* Bottom placements: justify content to end */
  :host([placement^='bottom']) {
    justify-content: end;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 100%;
    pointer-events: auto;
  }

  /* Bottom placements: reverse stack order so newest appears at bottom */
  :host([placement^='bottom']) .stack {
    flex-direction: column-reverse;
  }

  /* Mobile: full width */
  @media (max-width: 480px) {
    :host {
      width: 100%;
      padding: var(--wa-space-s);
    }
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;let Un=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Wn(e=``){return`${e}${Un()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Gn=null,Kn=0;function qn(){if(Kn+=1,Gn||typeof document>`u`)return;let e=document.createElement(`div`);e.id=Wn(`wa-toast-live-region-`),e.setAttribute(`data-wa-toast-live-region`,``),e.style.cssText=`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
    pointer-events: none;
    top: 0;
    left: 0;
  `,document.body.append(e),Gn=e}function Jn(){Kn=Math.max(0,Kn-1),!(Kn>0)&&(Gn?.remove(),Gn=null)}function Yn(e,t){if(typeof document>`u`)return;let n=Gn;if(!n)return;let r=e.trim();if(!r)return;let i=document.createElement(`div`);i.setAttribute(`role`,t===`danger`?`alert`:`status`),i.setAttribute(`aria-live`,t===`danger`?`assertive`:`polite`),i.setAttribute(`aria-atomic`,`true`),n.append(i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.textContent=r})}),setTimeout(()=>i.remove(),1e3)}var Xn=class extends vt{constructor(){super(...arguments),this.activatedToastItems=/* @__PURE__ */ new WeakSet,this.positionCache=/* @__PURE__ */ new Map,this.placement=`top-end`,this.handleDocumentKeyDown=async e=>{if(await new Promise(e=>setTimeout(e)),e.key===`Escape`&&!e.defaultPrevented){let t=this.getToastItems();t.length>0&&(e.preventDefault(),t[t.length-1]?.hide())}},this.handleAfterHide=async e=>{let t=e.target;t.parentElement===this&&(this.capturePositions(),t.remove(),await this.animatePositions()),this.getToastItems().length===0&&this.hideStack()}}connectedCallback(){super.connectedCallback(),this.popover=`manual`,qn(),document.addEventListener(`keydown`,this.handleDocumentKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener?.(`keydown`,this.handleDocumentKeyDown),Jn()}handleSlotChange(){let e=this.getToastItems(),t=[];e.forEach(e=>{this.activatedToastItems.has(e)||t.push(e)}),t.length>0&&(this.capturePositions(),t.forEach(e=>{this.activatedToastItems.add(e),this.showStack(),e.startTimer(),this.announceToastItem(e)}),requestAnimationFrame(()=>this.animatePositions()))}announceToastItem(e){Yn(e.textContent??``,e.variant)}getToastItems(){return[...this.querySelectorAll(`:scope > wa-toast-item`)]}capturePositions(){this.positionCache.clear();for(let e of this.getToastItems())this.positionCache.set(e,e.getBoundingClientRect())}async animatePositions(){if(In()){this.positionCache.clear();return}let e=[];for(let t of this.getToastItems()){let n=this.positionCache.get(t);if(!n)continue;let r=t.getBoundingClientRect(),i=n.top-r.top;if(Math.abs(i)>1){let n=Pn(t,[{transform:`translateY(${i}px)`},{transform:`translateY(0)`}],{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`});e.push(n)}}this.positionCache.clear(),await Promise.all(e)}showStack(){this.matches(`:popover-open`)||(this.showPopover(),this.customStates.set(`visible`,!0))}hideStack(){this.matches(`:popover-open`)&&(this.hidePopover(),this.customStates.set(`visible`,!1))}async create(e,t){let n={allowHtml:!1,duration:5e3,variant:`neutral`,size:`m`,...t},r=document.createElement(`wa-toast-item`);if(r.variant=n.variant,r.size=n.size,r.duration=n.duration,n.allowHtml?r.innerHTML=e:r.textContent=e,n.icon){let e=document.createElement(`wa-icon`);e.setAttribute(`slot`,`icon`),typeof n.icon==`string`?e.setAttribute(`name`,n.icon):(e.setAttribute(`name`,n.icon.name),n.icon.library&&e.setAttribute(`library`,n.icon.library),n.icon.family&&e.setAttribute(`family`,n.icon.family),n.icon.variant&&e.setAttribute(`variant`,n.icon.variant)),r.prepend(e)}return this.activatedToastItems.add(r),this.capturePositions(),this.showStack(),this.prepend(r),await r.updateComplete,this.animatePositions(),r.startTimer(),this.announceToastItem(r),r}render(){return Be`
      <div part="stack" class="stack" @wa-after-hide=${this.handleAfterHide}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Xn.css=Hn,s([ft(`.stack`)],Xn.prototype,`stack`,2),s([v({reflect:!0})],Xn.prototype,`placement`,2),Xn=s([st(`wa-toast`)],Xn);var Zn=/* @__PURE__ */ t({default:()=>Xn}),x
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Qn(e){this.c=e}x=Qn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function S(e,t){this.l=e,this.h=t}x=S.prototype,x.toString=(function(){return zo(this.l,this.h)});function $n(e){switch(typeof e){case`string`:return ff.l();case`number`:return mr(e)?e<<24>>24===e?ad.l():e<<16>>16===e?pd.l():of.l():hr(e)?af.l():rf.l();case`boolean`:return gu.l();case`undefined`:return Mo.l();default:return e instanceof S?lf.l():e instanceof Qn?yu.l():e&&e.$classData?e.$classData.l():null}}function er(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return mr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:hr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof S?`java.lang.Long`:e instanceof Qn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.iz()}}function tr(e,t){switch(typeof e){case`string`:return df(e,t);case`number`:return tf(e,t);case`boolean`:return mu(e,t);case`undefined`:return ko(e,t);default:return e&&e.$classData||e===null?e.c(t):e instanceof S?sf(e.l,e.h,t):e instanceof Qn?vu(e.c,t):br.prototype.c.call(e,t)}}function nr(e){switch(typeof e){case`string`:return K(e);case`number`:return nf(e);case`boolean`:return hu(e);case`undefined`:return Ao(e);default:return e&&e.$classData||e===null?e.f():e instanceof S?cf(e.l,e.h):e instanceof Qn?_u(e.c):br.prototype.f.call(e)}}function rr(e){return e===void 0?`undefined`:e.toString()}function ir(e){if(e===0)throw new id(`/ by zero`);return e}function ar(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function or(e){return String.fromCharCode(e)}var sr=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function cr(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var lr=0,ur=/* @__PURE__ */ new WeakMap;function dr(e){switch(typeof e){case`string`:return K(e);case`number`:return nf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:K(n);default:if(e===null)return 0;var r=ur.get(e);return r===void 0&&(r=lr+1|0,lr=r,ur.set(e,r)),r}}function fr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function pr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function mr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function hr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function gr(e){return new Qn(e)}gr(0);function C(e,t){return new S(e,t)}var _r=C(0,0);function vr(e){return e===null?0:e.c}function yr(e){return e===null?_r:e}function br(){}x=br.prototype,x.constructor=br;function w(){}w.prototype=x,x.f=(function(){return dr(this)}),x.c=(function(e){return this===e}),x.h=(function(){var e=this.f();return er(this)+`@`+(e>>>0).toString(16)}),x.toString=(function(){return this.h()});function xr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=xr.prototype=new w,x.constructor=xr,x.a6=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),x.Y=(function(){return new xr(this.a.slice())});function Sr(){}Sr.prototype=x;function Cr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=Cr.prototype=new w,x.constructor=Cr,x.a6=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),x.Y=(function(){return new Cr(this.a.slice())});function wr(e){this.a=typeof e==`number`?new Uint16Array(e):e}x=wr.prototype=new w,x.constructor=wr,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new wr(this.a.slice())});function Tr(e){this.a=typeof e==`number`?new Int8Array(e):e}x=Tr.prototype=new w,x.constructor=Tr,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new Tr(this.a.slice())});function Er(e){this.a=typeof e==`number`?new Int16Array(e):e}x=Er.prototype=new w,x.constructor=Er,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new Er(this.a.slice())});function Dr(e){this.a=typeof e==`number`?new Int32Array(e):e}x=Dr.prototype=new w,x.constructor=Dr,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new Dr(this.a.slice())});function Or(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}x=Or.prototype=new w,x.constructor=Or,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),x.Y=(function(){return new Or(this.a.slice())});function kr(e){this.a=typeof e==`number`?new Float32Array(e):e}x=kr.prototype=new w,x.constructor=kr,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new kr(this.a.slice())});function Ar(e){this.a=typeof e==`number`?new Float64Array(e):e}x=Ar.prototype=new w,x.constructor=Ar,x.a6=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Y=(function(){return new Ar(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=T.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i,t===`J`)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Sr;n.constructor=t,n.a6=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),n.Y=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===E});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new T().a(this),this.A}),x.l=(function(){return this.L||=new Al(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===jr)throw sd(new cd);return new(this.r()).C(e)});var E=new T;E.n={},E.E=`Ljava.lang.Object;`,E.F=(e=>!e.X),E.N=`java.lang.Object`,E.I=(e=>e!==null),E.A=new T().y(E,xr,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),br.prototype.$classData=E;var jr=new T().p(void 0,`V`,`void`,void 0,void 0),Mr=new T().p(!1,`Z`,`boolean`,Cr,void 0),Nr=new T().p(0,`C`,`char`,wr,Uint16Array),Pr=new T().p(0,`B`,`byte`,Tr,Int8Array),Fr=new T().p(0,`S`,`short`,Er,Int16Array),Ir=new T().p(0,`I`,`int`,Dr,Int32Array),Lr=new T().p(_r,`J`,`long`,Or,Int32Array),Rr=new T().p(0,`F`,`float`,kr,Float32Array),zr=new T().p(0,`D`,`double`,Ar,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Br(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Vr(e,t){return new Dr(Br(e,t,-1))}var Hr=new T().i(1,`com.raquo.airstream.core.InternalObserver`,{aj:1});function Ur(e){return $n(e).dv()+`@`+e.f()}function Wr(e){var t=e.bL();return t===void 0?e.bF():t}function Gr(){Kr=this,qr().ga(new H((e=>void 0)),ts().c3,!0)}x=Gr.prototype=new w,x.constructor=Gr,x.ga=(function(e,t,n){return new iu(e,n,t,this)}),x.hi=(function(e,t){return new au(e,t,this)}),new T().i(Gr,`com.raquo.airstream.core.Observer$`,{bu:1});var Kr;function qr(){return Kr||=new Gr,Kr}function Jr(){}x=Jr.prototype=new w,x.constructor=Jr,x.g1=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new T().i(Jr,`com.raquo.airstream.core.ObserverList$`,{bx:1});var Yr;function Xr(){return Yr||=new Jr,Yr}function Zr(){this.aK=0,this.aK=0}x=Zr.prototype=new w,x.constructor=Zr,x.fT=(function(){return this.aK=this.aK===2147483647?1:1+this.aK|0,this.aK}),new T().i(Zr,`com.raquo.airstream.core.Signal$`,{by:1});var Qr;function $r(){return Qr||=new Zr,Qr}function ei(e){this.cB=null,this.dM=null,this.cC=0,this.cB=e,this.dM=void 0;var t=gi().bO();this.cC=t===void 0?1:1+t.cC|0,ii().bR===-1||this.cC>ii().bR?I().Z(new Zd(this,ii().bR)):ci().v?ci().an.push(this)|0:gi().dm(this)}x=ei.prototype=new w,x.constructor=ei;var ti=new T().i(ei,`com.raquo.airstream.core.Transaction`,{bz:1});function ni(){this.bR=0,this.dN=null,ri=this,this.bR=1e3,this.dN=new H((e=>{throw L(new R,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=ni.prototype=new w,x.constructor=ni,x.fu=(function(e){try{e.cB.d(e);var t=e.dM;if(t!==void 0)for(;t.iB();)t.iy().iC(e)}catch(e){var n=e instanceof P?e:new X(e);I().Z(n)}}),new T().i(ni,`com.raquo.airstream.core.Transaction$`,{bA:1});var ri;function ii(){return ri||=new ni,ri}function ai(e){e.bS.length|0?new ei(new H((t=>{for(;(e.bS.length|0)>0;){var n=e.bS.shift();try{n.d(t)}catch(e){var r=e instanceof P?e:new X(e);I().Z(r)}}for(;(e.an.length|0)>0;){var i=e.an.shift();gi().dm(i)}}))):(e.an.length|0)>0&&new ei(new H((t=>{for(;(e.an.length|0)>0;)gi().dm(e.an.shift())})))}function oi(){this.v=!1,this.bS=null,this.an=null,si=this,this.v=!1,this.bS=Ri().R(j().P(new(qo.r()).C([]))),this.an=Ri().R(j().P(new(ti.r()).C([])))}x=oi.prototype=new w,x.constructor=oi,new T().i(oi,`com.raquo.airstream.core.Transaction$onStart$`,{bB:1});var si;function ci(){return si||=new oi,si}function li(e,t){return e.ao.get(t)}function ui(e,t){e.bT.unshift(t)}function di(e){return e.bT.shift()}function fi(e,t,n){var r=li(e,t),i=r===void 0,a=r===void 0?Ri().R(j().P(new(ti.r()).C([]))):r;a.push(n),i&&e.ao.set(t,a)}function pi(e,t){var n=li(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ao.delete(t),i}}function mi(){this.bT=null,this.ao=null,hi=this,this.bT=Ri().R(j().P(new(ti.r()).C([]))),this.ao=/* @__PURE__ */ new Map}x=mi.prototype=new w,x.constructor=mi,x.dm=(function(e){var t=this.bO();t===void 0?(ui(this,e),ii().fu(e),this.h3(e)):fi(this,t,e)}),x.h3=(function(e){for(var t=e;;){var n=this.bO(),r=t;if(!(n!==void 0&&A().w(r,n)))throw L(new R,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hT(t),t.cB=ii().dN;var i=this.bO();if(A().w(i,void 0)){if((this.ao.size|0)>0){var a=new qc(0);throw this.ao.forEach((e=>((t,n)=>{e.br=e.br+(t.length|0)|0}))(a)),L(new R,`Transaction queue error: Stack cleared, but a total of `+a.br+` children for `+(this.ao.size|0)+` transactions remain. This is a bug in Airstream.`)}return}ii().fu(i),t=i}}),x.hT=(function(e){for(var t=e;;){var n=pi(this,t);if(A().w(n,void 0)){di(this);var r=this.bO();if(!A().w(r,void 0))t=r;else return}else{ui(this,n);return}}}),x.bO=(function(){return this.bT[0]}),new T().i(mi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bC:1});var hi;function gi(){return hi||=new mi,hi}function _i(e,t){var n=e.a8.indexOf(t)|0;if(n!==-1)e.a8.splice(n,1),e.E.b()||t.fV();else throw L(new R,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function vi(e){for(;(e.bV.length|0)>0;)_i(e,e.bV.shift())}function yi(e){this.dV=null,this.a8=null,this.aL=!1,this.bV=null,this.E=null,this.aM=0,this.dV=e,this.a8=Ri().R(j().P(new(xi.r()).C([]))),this.aL=!0,this.bV=Ri().R(j().P(new(xi.r()).C([]))),this.E=q(),this.aM=0}x=yi.prototype=new w,x.constructor=yi,x.fn=(function(){if(this.E.b()){var e=ci(),t=(()=>{var e=new Vs(this.dV);this.E=new J(e),this.aL=!1,this.aM=0;for(var t=0,n=this.a8.length|0;t<n;){var r=t+this.aM|0;this.a8[r].fU(e),t=1+t|0}vi(this),this.aL=!0,this.aM=0});if(ci(),e.v)t();else{e.v=!0;try{t()}finally{e.v=!1,ai(e)}}}else throw L(new R,`Can not activate `+this+`: it is already active`)}),x.gV=(function(){if(this.E.b())throw L(new R,`Can not deactivate DynamicOwner: it is not active`);this.aL=!1;for(var e=this.a8,t=0,n=e.length|0;t<n;)e[t].fV(),t=1+t|0;vi(this);var r=this.E;r.b()||r.l().hD(),vi(this),this.aL=!0,this.E=q()}),x.gx=(function(e,t){t?(this.aM=1+this.aM|0,this.a8.unshift(e)):this.a8.push(e);var n=this.E;if(!n.b()){var r=n.l();e.fU(r)}}),x.i3=(function(e){this.aL?_i(this,e):this.bV.push(e)}),new T().i(yi,`com.raquo.airstream.ownership.DynamicOwner`,{bE:1});function bi(e,t,n){this.bW=null,this.dW=null,this.bX=null,this.bW=e,this.dW=t,this.bX=q(),e.gx(this,n)}x=bi.prototype=new w,x.constructor=bi,x.cm=(function(){this.bW.i3(this)}),x.fU=(function(e){var t=ci(),n=(()=>{this.bX=this.dW.d(e)});if(ci(),t.v)n();else{t.v=!0;try{n()}finally{t.v=!1,ai(t)}}}),x.fV=(function(){var e=this.bX;e.b()||(e.l().cm(),this.bX=q())});var xi=new T().i(bi,`com.raquo.airstream.ownership.DynamicSubscription`,{bF:1});function Si(){}x=Si.prototype=new w,x.constructor=Si,x.cw=(function(e,t,n){return new bi(e,new H((e=>new J(t.d(e)))),n)}),x.g6=(function(e,t,n){return new bi(e,new H((e=>(t.d(e),q()))),n)}),new T().i(Si,`com.raquo.airstream.ownership.DynamicSubscription$`,{bG:1});var Ci;function wi(){return Ci||=new Si,Ci}function Ti(e){e.aN=Ri().R(j().P(new(ji.r()).C([])))}function Ei(e){for(var t=e.aN,n=0,r=t.length|0;n<r;)ki(t[n]),n=1+n|0;e.aN.length=0}function Di(e,t){var n=e.aN.indexOf(t)|0;if(n!==-1)e.aN.splice(n,1);else throw L(new R,`Can not remove Subscription from Owner: subscription not found.`)}function Oi(e,t){e.aN.push(t)}function ki(e){if(!e.cJ)e.dY.X(),e.cJ=!0;else throw L(new R,`Can not kill Subscription: it was already killed.`)}function Ai(e,t){this.dZ=null,this.dY=null,this.cJ=!1,this.dZ=e,this.dY=t,this.cJ=!1,e.hP(this)}x=Ai.prototype=new w,x.constructor=Ai,x.cm=(function(){ki(this),Di(this.dZ,this)});var ji=new T().i(Ai,`com.raquo.airstream.ownership.Subscription`,{bJ:1});function Mi(e,t){this.e0=null,this.e1=null,this.a9=null,this.ap=!1,this.e0=e,this.e1=t,this.a9=q(),this.ap=!1}x=Mi.prototype=new w,x.constructor=Mi,x.hy=(function(){var e=this.a9;return!e.b()&&!e.l().bW.E.b()}),x.id=(function(e){if(this.ap)throw L(new R,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a9;if(t.b())var n=!1;else var r=t.l().bW,n=e===null?r===null:e===r;if(!n){this.hy()&&!e.E.b()&&(this.ap=!0);var i=this.a9;i.b()||(i.l().cm(),this.a9=q());var a=wi().cw(e,new H((e=>(this.ap||this.e0.X(),new Ai(e,new V((()=>{this.ap||this.e1.X()})))))),!1);this.a9=new J(a),this.ap=!1}}),x.gO=(function(){if(this.ap)throw L(new R,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a9;e.b()||e.l().cm(),this.a9=q()}),new T().i(Mi,`com.raquo.airstream.ownership.TransferableSubscription`,{bK:1});function Ni(){}x=Ni.prototype=new w,x.constructor=Ni,x.gE=(function(e){return new $d(new qd(e))}),new T().i(Ni,`com.raquo.airstream.state.Var$`,{bO:1});var Pi;function Fi(){return Pi||=new Ni,Pi}function Ii(){}x=Ii.prototype=new w,x.constructor=Ii,x.R=(function(e){return[...As().is(e)]}),new T().i(Ii,`com.raquo.ew.JsArray$`,{bR:1});var Li;function Ri(){return Li||=new Ii,Li}function zi(){this.ec=null,Bi=this,document.createElement(`template`),this.gT(B().u.il().im()),this.ec=/* @__PURE__ */ RegExp(` `,`g`)}x=zi.prototype=new w,x.constructor=zi,x.gB=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof P?e:new X(e);if(n instanceof X&&n.p instanceof DOMException)return!1;throw n instanceof X?n.p:n}}),x.hZ=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof P?e:new X(e);if(n instanceof X&&n.p instanceof DOMException)return!1;throw n instanceof X?n.p:n}}),x.hv=(function(e,t,n){try{return e.insertBefore(t,n),!0}catch(e){var r=e instanceof P?e:new X(e);if(r instanceof X&&r.p instanceof DOMException)return!1;throw r instanceof X?r.p:r}}),x.hu=(function(e,t,n){try{return e.insertBefore(t,n.nextSibling),!0}catch(e){var r=e instanceof P?e:new X(e);if(r instanceof X&&r.p instanceof DOMException)return!1;throw r instanceof X?r.p:r}}),x.i6=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof P?e:new X(e);if(r instanceof X&&r.p instanceof DOMException)return!1;throw r instanceof X?r.p:r}}),x.hA=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(A().w(t,r))return!0;n=r}}),x.gv=(function(e,t){e.addEventListener(t.aR.ba.bY,t.cY,t.cZ)}),x.i0=(function(e,t){e.removeEventListener(t.aR.ba.bY,t.cY,t.cZ)}),x.gS=(function(e){return document.createElement(e.dB())}),x.hk=(function(e,t){var n=this.hl(e,t);return n===void 0?void 0:t.bb.cf(n)}),x.hl=(function(e,t){var n=e.x.getAttributeNS(null,t.ar);return n===null?void 0:n}),x.g5=(function(e,t,n){this.ic(e,t,t.bb.cj(n))}),x.ic=(function(e,t,n){n===null?this.i1(e,t):e.x.setAttribute(t.ar,n)}),x.i1=(function(e,t){e.x.removeAttribute(t.ar)}),x.gT=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eE)}),x.ho=(function(e,t){var n=this.hp(e,t);return n===void 0?void 0:t.cV.cf(n)}),x.hp=(function(e,t){var n=e.dC(),r=t.c0,i=n.getAttributeNS(r.b()?null:r.l(),t.cW);return i===null?void 0:i}),x.ie=(function(e,t,n){this.ig(e,t,t.cV.cj(n))}),x.ig=(function(e,t,n){if(n===null)this.i4(e,t);else{var r=t.c0;if(r.b())e.dC().setAttribute(t.bZ,n);else{var i=r.l();e.dC().setAttributeNS(i,t.bZ,n)}}}),x.i4=(function(e,t){var n=e.dC(),r=t.c0;n.removeAttributeNS(r.b()?null:r.l(),t.cW)}),x.gR=(function(e){return document.createComment(e)}),x.gU=(function(e){return document.createTextNode(e)}),x.gY=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qp(this.gW(r),n);r=i,n=a}}),x.gW=(function(e){if(e instanceof HTMLElement){var t=e.id;if(cs(),t!==``)var n=`#`+t;else var r=e.className,n=(cs(),r===``?``:`.`+r.replace(this.ec,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),x.gX=(function(e){return e instanceof Element?e.outerHTML:e instanceof Text?`Text(`+e.textContent+`)`:e instanceof Comment?`Comment(`+e.textContent+`)`:e===null?`<null>`:`OtherNode(`+rr(e)+`)`}),new T().i(zi,`com.raquo.laminar.DomApi$`,{bS:1});var Bi;function D(){return Bi||=new zi,Bi}function Vi(e){qr(),I(),e.ef=Fi()}function Hi(e){e.gc=va()}function Ui(e){Wi(e,new H((e=>{e.et.x.focus()})))}function Wi(e,t){return new Zs(new H((e=>{var n=new Kc(!e.V.E.b()),r=new H((e=>{n.c7?n.c7=!1:t.d(e)}));wi().g6(e.V,new H((e=>(t=>{r.d(new ma(e,t))}))(e)),!1)})),va())}function Gi(){this.cQ=null,this.eo=null,this.ep=!1,Ki=this,this.cQ=new Hs(qi()),new Hs(qi()),new Hs(qi())}x=Gi.prototype=new w,x.constructor=Gi,x.gu=(function(){return this.ep||=(this.eo=new Us(this),!0),this.eo}),new T().i(Gi,`com.raquo.laminar.codecs.package$`,{c0:1});var Ki;function qi(){return Ki||=new Gi,Ki}function Ji(e){e.ge=Yi(e,`class`,` `)}function Yi(e,t,n){var r=Ks(new qs,t,qi().cQ);return new Ws(r.ar,new H((e=>{var t=D().hk(e,r);return t===void 0?``:t})),new ju(((e,t)=>{D().g5(e,r,t)})),n)}function Xi(e){e.gb=Zi(e,`class`,` `)}function Zi(e,t,n){var r=new Ys(t,qi().cQ,q());return new Ws(r.bZ,new H((e=>{var t=D().ho(e,r);return t===void 0?``:t})),new ju(((e,t)=>{D().ie(e,r,t)})),n)}function Qi(){}x=Qi.prototype=new w,x.constructor=Qi,x.gC=(function(e,t,n){return new lu(q(),!0,new Mu(((t,n,r)=>(t.b9||t.fF(),nl(e,new H(((e,t)=>(n=>{this.io(t.ca,n,e,r);var i=n;t.ca=i,i=null}))(t,new Yc(void 0))),n)))),n)}),x.io=(function(e,t,n,r){n.b9||n.fF();var i=n.aO,a=0;a=i;var o=e===void 0||A().w(e.q(),n.aQ.q().nextSibling)?e:void 0;o===void 0?Da().hw(n.aP,t,n.aQ,r):(Da().i5(n.aP,o,t,r)||o===t)&&(a=a-1|0),n.i2(t),n.aq.clear(),n.aq.set(t.q(),t),n.aO=1}),new T().i(Qi,`com.raquo.laminar.inserters.ChildInserter$`,{cc:1});var $i;function ea(){return $i||=new Qi,$i}function ta(e,t,n,r,i){this.aP=null,this.aQ=null,this.b9=!1,this.aO=0,this.aq=null,this.aP=e,this.aQ=t,this.b9=n,this.aO=r,this.aq=i}x=ta.prototype=new w,x.constructor=ta,x.fF=(function(){if(this.b9||this.aO!==0)throw L(new R,`forceSetStrictMode invoked when not allowed, inside parent = `+D().gX(this.aP.x));if(this.aq===null&&(this.aq=/* @__PURE__ */ new Map),!(this.aQ.q()instanceof Comment)){var e=this.aQ,t=new uu(``);D().hv(this.aP.x,t.d1,e.q()),this.aQ=t,this.aO=1,this.aq.set(e.q(),e)}this.b9=!0}),x.i2=(function(e){var t=this.aO,n=0;for(n=t;n>0;){var r=e.q().nextSibling;if(r===null)n=0;else{var i=this.aq.get(r);i===void 0?n=0:i!==void 0&&(Da().hY(this.aP,i),n=n-1|0)}}}),new T().i(ta,`com.raquo.laminar.inserters.InsertContext`,{cf:1});function na(){}x=na.prototype=new w,x.constructor=na,x.i7=(function(e,t,n){var r=new uu(``);return Da().bu(e,r,n),this.iv(e,r,t)}),x.iv=(function(e,t,n){return new ta(e,t,n,0,n?/* @__PURE__ */ new Map:null)}),new T().i(na,`com.raquo.laminar.inserters.InsertContext$`,{cg:1});var ra;function ia(){return ra||=new na,ra}function aa(e,t,n,r){this.ba=null,this.cU=!1,this.cT=!1,this.cS=null,this.ba=e,this.cU=t,this.cT=n,this.cS=r}x=aa.prototype=new w,x.constructor=aa,x.fQ=(function(e){var t=new H((t=>{var n=this.cS.d(t);return n.b()?q():new J((n.l(),e.X()))}));return new aa(this.ba,this.cU,this.cT,t)}),new T().i(aa,`com.raquo.laminar.keys.EventProcessor`,{cj:1});function oa(){}x=oa.prototype=new w,x.constructor=oa,x.bG=(function(e,t,n){return new aa(e,t,n,new H((e=>new J(e))))}),new T().i(oa,`com.raquo.laminar.keys.EventProcessor$`,{ck:1});var sa;function ca(){return sa||=new oa,sa}function la(){}x=la.prototype=new w,x.constructor=la;function ua(){}ua.prototype=x;function da(){this.gf=null,this.gg=null,this.gh=null,this.gi=null,this.gf=`http://www.w3.org/2000/svg`,this.gg=`http://www.w3.org/1999/xlink`,this.gh=`http://www.w3.org/XML/1998/namespace`,this.gi=`http://www.w3.org/2000/xmlns/`}x=da.prototype=new w,x.constructor=da,x.hI=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new _d(e)}}),new T().i(da,`com.raquo.laminar.keys.SvgAttr$`,{cn:1});var fa;function pa(){return fa||=new da,fa}function ma(e,t){this.et=null,this.cX=null,this.et=e,this.cX=t}x=ma.prototype=new w,x.constructor=ma,new T().i(ma,`com.raquo.laminar.lifecycle.MountContext`,{co:1});var ha=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{N:1});function ga(){this.gj=null,_a=this,this.gj=new Xs}x=ga.prototype=new w,x.constructor=ga,new T().i(ga,`com.raquo.laminar.modifiers.Modifier$`,{cs:1});var _a;function va(){return _a||=new ga,_a}function ya(){this.ey=null,ba=this,this.ey=new Qs}x=ya.prototype=new w,x.constructor=ya,new T().i(ya,`com.raquo.laminar.modifiers.RenderableNode$`,{cw:1});var ba;function xa(){return ba||=new ya,ba}function Sa(){this.as=null,Ca=this,this.as=new $s(new H((e=>e)),wa()),new $s(new H((e=>``+(e|0))),wa()),new $s(new H((e=>``+ +e)),wa()),new $s(new H((e=>``+!!e)),wa()),new $s(new H((e=>e.ir())),wa())}x=Sa.prototype=new w,x.constructor=Sa,new T().i(Sa,`com.raquo.laminar.modifiers.RenderableText$`,{cz:1});var Ca;function wa(){return Ca||=new Sa,Ca}function Ta(){}x=Ta.prototype=new w,x.constructor=Ta,x.bu=(function(e,t,n){var r=new J(e);t.aH(r),n!==void 0&&n.fY(e,t);var i=D().gB(e.q(),t.q());return i&&t.aG(r),i}),x.hY=(function(e,t){var n=!1;return A().w(t.q().parentNode,e.q())&&(t.aH(q()),n=D().hZ(e.q(),t.q()),t.aG(q())),n}),x.hw=(function(e,t,n,r){var i=new J(e);t.aH(i),r!==void 0&&r.fY(e,t);var a=D().hu(e.q(),t.q(),n.q());return t.aG(i),a}),x.i5=(function(e,t,n,r){var i=!1;if(t!==n&&t.ds().gQ(e)){var a=new J(e);t.aH(q()),n.aH(a),r!==void 0&&r.fY(e,n),i=D().i6(e.q(),n.q(),t.q()),i&&(t.aG(q()),n.aG(a))}return i}),new T().i(Ta,`com.raquo.laminar.nodes.ParentNode$`,{cD:1});var Ea;function Da(){return Ea||=new Ta,Ea}function Oa(){}x=Oa.prototype=new w,x.constructor=Oa,x.iu=(function(e,t){return wi().cw(e.V,new H((n=>t.d(new ma(e,n)))),!0)}),new T().i(Oa,`com.raquo.laminar.nodes.ReactiveElement$`,{cF:1});var ka;function Aa(){return ka||=new Oa,ka}function ja(e,t){if(t===null)throw W(new G);return t.c8?t.c9:t.ht(new uu(``))}function Ma(e,t){return t.c8?t.c9:ja(e,t)}function Na(){}x=Na.prototype=new w,x.constructor=Na,x.gt=(function(e){var t=new Jc;return B(),ea().gC(new rp(e.dD(),new H((e=>(t=>t.b()?Ma(this,e):t.l()))(t)),q()),xa().ey,void 0)}),new T().i(Na,`com.raquo.laminar.receivers.ChildOptionReceiver$`,{cJ:1});var Pa;function Fa(){return Pa||=new Na,Pa}function Ia(){this.gk=null,La=this,this.gk=Fa()}x=Ia.prototype=new w,x.constructor=Ia,new T().i(Ia,`com.raquo.laminar.receivers.ChildReceiver$`,{cK:1});var La;function Ra(){return La||=new Ia,La}function za(){}x=za.prototype=new w,x.constructor=za,x.gz=(function(){Va().ha(),Va().hb(),Va().hc(),Va().hd()}),x.ha=(function(){var e=document.querySelector(`#example1`);if(!Qo().cd(e).b()){B();var t=Tl().a2(new Q([]),new Q([]));new fl(e,B().u.cg().aZ(new Q([gl().a2(new Q([]),new Q([cl(B().u,`Show notification`,wa().as),new ll((B(),ca().bG(B().u.cp(),!1,!1)),new z((e=>{t.x.create(`Your changes have been saved.`)})))])),t])))}}),x.hb=(function(){var e=document.querySelector(`#example2`);if(!Qo().cd(e).b()){B();var t=Tl().a2(new Q([]),new Q([]));new fl(e,B().u.cg().aZ(new Q([gl().a2(new Q([new z((e=>e.dE().ik()))]),new Q([cl(B().u,`Show success`,wa().as),new ll((B(),ca().bG(B().u.cp(),!1,!1)),new z((e=>{t.x.create(`Upload complete.`,{variant:`success`,icon:`check`})})))])),t])))}}),x.hc=(function(){var e=document.querySelector(`#example3`);if(!Qo().cd(e).b()){B();var t=Tl().a2(new Q([new z((e=>e.hS().gL()))]),new Q([]));new fl(e,B().u.cg().aZ(new Q([gl().a2(new Q([]),new Q([cl(B().u,`Show persistent notification`,wa().as),new ll((B(),ca().bG(B().u.cp(),!1,!1)),new z((e=>{t.x.create(`Dismiss this message when you are ready.`,{duration:0})})))])),t])))}}),x.hd=(function(){var e=document.querySelector(`#example4`);if(!Qo().cd(e).b()){B();var t=B().u.ef.gE(!1);new fl(e,B().u.cg().aZ(new Q(Ns().al(new(ha.r()).C([gl().a2(new Q(Ns().al(new(qo.r()).C([]))),new Q(Ns().al(new(ha.r()).C([cl(B().u,`Show custom notification`,wa().as),new ll((B(),ca().bG(B().u.cp(),!1,!1)).fQ(new Kl((()=>!0))),new H((e=>{t.cN.cr(e)})))])))),Tl().a2(new Q(Ns().al(new(qo.r()).C([]))),new Q(Ns().al(new(ha.r()).C([(B(),Fa()).gt(new rp(t.cM,new z((e=>e?new J(Ol().a2(new Q(Ns().al(new(qo.r()).C([new z((e=>e.dE().gM())),new z((e=>e.h6().cc(0))),new z((e=>new ll((B(),ca().bG(e.hL(),!1,!1)).fQ(new Kl((()=>!1))),new H((e=>{t.cN.cr(e)})))))]))),new Q(Ns().al(new(ha.r()).C([B().u.ij().aZ(new Q(Ns().al(new(ha.r()).C([cl(B().u,`Update ready`,wa().as)])))),cl(B().u,` — restart when convenient.`,wa().as)]))))):q())),q()))]))))])))))}}),new T().i(za,`examples.toast.Main$package$`,{cN:1});var Ba;function Va(){return Ba||=new za,Ba}function Ha(e){try{Va().gz()}catch(e){throw e}}function Ua(){}x=Ua.prototype=new w,x.constructor=Ua,x.ia=(function(e,t){var n=sr;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,ee=32&m?0:r<<m,h=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=ee,l=h}if((o-1|0)>>>0<=2045){var te=o,g=c,ne=l,re=te<<20|ne,ie=sr;return ie.setInt32(0,g,!0),ie.setInt32(4,re,!0),+ie.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var ae=54+o|0,oe=c,se=l,ce=ae<<20|se,le=sr;return le.setInt32(0,oe,!0),le.setInt32(4,ce,!0),5551115123125783e-32*le.getFloat64(0,!0)}var ue=2047&~(t>>31),de=-2147483648&i,fe=ue<<20|de,pe=sr;return pe.setInt32(0,0,!0),pe.setInt32(4,fe,!0),+pe.getFloat64(0,!0)}),new T().i(Ua,`java.lang.Math$`,{da:1});var Wa;function Ga(){return Wa||=new Ua,Wa}function Ka(e,t){for(var n=O().U(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=qa(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Ec(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Ec(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Dc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function qa(e,t){var n=O().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=O().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=O().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=O().U(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=O().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ja(e,c[1]),to(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ja(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ja(e,d[1]),`<clinit>`]}function Ja(e,t){var n=Xa(e);if(Oo().df.call(n,t))var r=Xa(e)[t];else var r=po(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ya(e){if(!((1&e.I)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.dc=t,e.I=(1|e.I)<<24>>24}return e.dc}function Xa(e){return(1&e.I)<<24>>24?e.dc:Ya(e)}function Za(e){if(!((2&e.I)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.dd=t,e.I=(2|e.I)<<24>>24}return e.dd}function Qa(e){return(2&e.I)<<24>>24?e.dd:Za(e)}function $a(e){return(4&e.I)<<24>>24||(e.db=Object.keys(Qa(e)),e.I=(4|e.I)<<24>>24),e.db}function eo(e){return(4&e.I)<<24>>24?e.db:$a(e)}function to(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function no(e,t){return t?t.arguments&&t.stack?ro(e,t):t.stack&&t.sourceURL?oo(e,t):t.stack&&t.number?ao(e,t):t.stack&&t.fileName?io(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?so(e,t):co(e,t):so(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?lo(e,t):uo(e,t):t.stack&&!t.fileName?ro(e,t):fo(e,t):[]}function ro(e,t){return(t.stack+`
`).replace(O().U(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(O().D(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(O().D(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(O().D(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(O().D(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function io(e,t){return t.stack.replace(O().D(`(?:\\n@:0)?\\s+$`,`m`),``).replace(O().D(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ao(e,t){return t.stack.replace(O().D(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(O().D(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(O().D(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function oo(e,t){return t.stack.replace(O().D(`\\[native code\\]\\n`,`m`),``).replace(O().D(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(O().D(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function so(e,t){for(var n=O().D(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function co(e,t){for(var n=O().D(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function lo(e,t){for(var n=O().U(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function uo(e,t){for(var n=O().U(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(O().U(`<anonymous function: (\\S+)>`),`$1`).replace(O().U(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function fo(e,t){return[]}function po(e,t,n){for(;;)if(t<(eo(e).length|0)){var r=eo(e)[t];if(n.startsWith(r))return``+Qa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function mo(){this.dc=null,this.dd=null,this.db=null,this.I=0}x=mo.prototype=new w,x.constructor=mo,x.he=(function(e){return Ka(this,no(this,e))}),new T().i(mo,`java.lang.StackTrace$`,{df:1});var ho;function go(){return ho||=new mo,ho}function _o(){}x=_o.prototype=new w,x.constructor=_o,x.U=(function(e){return new RegExp(e)}),x.D=(function(e,t){return new RegExp(e,t)}),new T().i(_o,`java.lang.StackTrace$StringRE$`,{dg:1});var vo;function O(){return vo||=new _o,vo}function yo(){this.eW=null,this.gl=null,bo=this,this.eW=new Lf(!1),this.gl=new Lf(!0)}x=yo.prototype=new w,x.constructor=yo,new T().i(yo,`java.lang.System$Streams$`,{dk:1});var bo;function xo(){return bo||=new yo,bo}function So(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Co(){this.de=null,this.eX=null,wo=this,this.de=So(this),this.eX=null}x=Co.prototype=new w,x.constructor=Co,x.fK=(function(e,t){if(this.de!==null){var n=this.de;return Oo().df.call(n,e)?n[e]:t}return this.eX.fK(e,t)}),new T().i(Co,`java.lang.System$SystemProperties$`,{dl:1});var wo;function To(){return wo||=new Co,wo}function Eo(){this.df=null,Do=this,this.df=Object.prototype.hasOwnProperty}x=Eo.prototype=new w,x.constructor=Eo,new T().i(Eo,`java.lang.Utils$Cache$`,{dp:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(e,t){return e===t}function Ao(e){return 0}function jo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aD)}var Mo=new T().i(0,`java.lang.Void`,{aD:1},(e=>e===void 0));function No(e,t){throw od(new cd,`argument type mismatch`)}function Po(){}x=Po.prototype=new w,x.constructor=Po,x.bI=(function(e){return e instanceof xr||e instanceof Cr||e instanceof wr||e instanceof Tr||e instanceof Er||e instanceof Dr?e.a.length:e instanceof Or?e.a.length>>>1|0:(e instanceof kr||e instanceof Ar||No(this,e),e.a.length)}),new T().i(Po,`java.lang.reflect.Array$`,{dr:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(){}x=Lo.prototype=new w,x.constructor=Lo,x.gI=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),x.fB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),x.fA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fy=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new T().i(Lo,`java.util.Arrays$`,{ds:1});var Ro;function k(){return Ro||=new Lo,Ro}function zo(e,t){return Ho().g7(e,t)}function Bo(){}x=Bo.prototype=new w,x.constructor=Bo,x.g7=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),x.fJ=(function(e){if(e<-0x8000000000000000)return C(0,-2147483648);if(e>=0x8000000000000000)return C(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return C(t,e<0&&t!==0?n-1|0:n)}),x.h1=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,te=65535&p,g=p>>>16|0,ne=Math.imul(ee,te),re=Math.imul(h,te),ie=Math.imul(ee,g),ae=ne+((re+ie|0)<<16)|0,oe=(ne>>>16|0)+ie|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,g)|0)+(oe>>>16|0)|0)+(((65535&oe)+re|0)>>>16|0)|0)|0)-((o-ae|0)>>>0>o>>>0|0)|0)<0)var se=p-1|0,ce=(m-1|0)+(se!==-1|0)|0,le=se,ue=ce;else var le=p,ue=m}else var de=(s>>>0)/(ir(u)>>>0)|0,le=(4294967296*(s-Math.imul(u,de)|0)+(o>>>0))/u|0,ue=de;if((t^r)>=0)return C(le,ue);var fe=-le|0;return C(fe,(-ue|0)-(fe!==0|0)|0)}),x.h2=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(ir(n)>>>0)|0;return C((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var te=o-1|0;return C(te,(s-1|0)+(te!==-1|0)|0)}return C(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?C(0,0):C(1,0)}),x.hW=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,h=u>>>16|0,te=65535&p,g=p>>>16|0,ne=Math.imul(ee,te),re=Math.imul(h,te),ie=Math.imul(ee,g),ae=ne+((re+ie|0)<<16)|0,oe=(ne>>>16|0)+ie|0,se=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(h,g)|0)+(oe>>>16|0)|0)+(((65535&oe)+re|0)>>>16|0)|0,ce=o-ae|0,le=(s-se|0)-(ce>>>0>o>>>0|0)|0;if(le<0)var ue=ce+u|0,de=(le+d|0)+(ue>>>0<ce>>>0|0)|0,fe=ue,pe=de;else var fe=ce,pe=le}else var me=(4294967296*((s>>>0)%(ir(u)>>>0)|0)+(o>>>0))/u|0,fe=o-Math.imul(u,me)|0,pe=0;if(t<0){var he=-fe|0;return C(he,(-pe|0)-(he!==0|0)|0)}return C(fe,pe)}),x.hX=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(ir(n)>>>0)|0)+(e>>>0))/n|0;return C(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,h=(f>>>16|0)+m|0,te=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(h>>>16|0)|0)+(((65535&h)+p|0)>>>16|0)|0,g=e-ee|0,ne=(t-te|0)-(g>>>0>e>>>0|0)|0;if(ne<0){var re=g+n|0;return C(re,(ne+r|0)+(re>>>0<g>>>0|0)|0)}return C(g,ne)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return C(e,t);var ie=e-n|0;return C(ie,(t-r|0)-(ie>>>0>e>>>0|0)|0)}),new T().i(Bo,`org.scalajs.linker.runtime.RuntimeLong$`,{du:1});var Vo;function Ho(){return Vo||=new Bo,Vo}function Uo(){}x=Uo.prototype=new w,x.constructor=Uo,x.fG=(function(e,t){var n=e.t();if(n>-1){for(var r=t.fS(n),i=e.g(),a=0;a<n;)j().fs(r,a,i.k()),a=1+a|0;return r}var o=null,s=t.g3(),c=s===Nr.l();o=[];for(var l=e.g();l.n();){var u=l.k(),d=c?vr(u):u===null?ms().i9(s):u;o.push(d)}return ms().i8(s===jr.l()?Mo.l():s===_s.l()||s===Yl.l()?E.l():s,o)}),x.fE=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!A().w(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(Uo,`scala.Array$`,{dv:1});var Wo;function Go(){return Wo||=new Uo,Wo}var Ko=new T().i(1,`scala.Function0`,{ac:1}),qo=new T().i(1,`scala.Function1`,{e:1});function Jo(){}x=Jo.prototype=new w,x.constructor=Jo;function Yo(){}Yo.prototype=x;function Xo(){}x=Xo.prototype=new w,x.constructor=Xo,x.cd=(function(e){return e===null?q():new J(e)}),new T().i(Xo,`scala.Option$`,{dD:1});var Zo;function Qo(){return Zo||=new Xo,Zo}function $o(){this.f4=null,this.c3=null,es=this,this.f4=new z((e=>this.f4)),this.c3=new Su}x=$o.prototype=new w,x.constructor=$o,new T().i($o,`scala.PartialFunction$`,{dE:1});var es;function ts(){return es||=new $o,es}function ns(e,t){for(var n=e.g();n.n();)t.d(n.k())}function rs(e,t,n,r){return e.t()===0?``+t+r:e.aY(rm(new im),t,n,r).G.m}function is(e,t,n,r,i){var a=t.G;n.length!==0&&(a.m=``+a.m+n);var o=e.g();if(o.n()){var s=o.k();for(a.m=``+a.m+s;o.n();){r.length!==0&&(a.m=``+a.m+r);var c=o.k();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function as(e,t){this.f9=null,this.bm=null,this.f9=e,this.bm=t}x=as.prototype=new w,x.constructor=as,x.hr=(function(){return this.f9.X().g()}),new T().i(as,`scala.collection.Iterator$ConcatIteratorCell`,{dT:1});function os(){this.fa=null,ss=this,this.fa=new z((e=>this.fa))}x=os.prototype=new w,x.constructor=os,new T().i(os,`scala.collection.StringOps$`,{e0:1});var ss;function cs(){return ss||=new os,ss}function ls(){this.fd=0,us=this;try{cs();var e=Cc().hB(To().fK(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.fd=e}x=ls.prototype=new w,x.constructor=ls,new T().i(ls,`scala.collection.immutable.IndexedSeqDefaults$`,{e4:1});var us;function ds(){return us||=new ls,us}function fs(){}x=fs.prototype=new w,x.constructor=fs,x.i9=(function(e){return e===Pr.l()||e===Fr.l()||e===Nr.l()||e===Ir.l()?0:e===Lr.l()?C(0,0):e===Rr.l()||e===zr.l()?0:e===Mr.l()?!1:e===jr.l()?void 0:null}),x.i8=(function(e,t){var n=t.length|0;if(e===Nr.l()){for(var r=new wr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.am.U(n),o=0;o!==n;)j().fs(a,o,t[o]),o=1+o|0;return a}),new T().i(fs,`scala.collection.mutable.ArrayBuilder$`,{e9:1});var ps;function ms(){return ps||=new fs,ps}function hs(){}x=hs.prototype=new w,x.constructor=hs,x.w=(function(e,t){return e===t||(Tc(e)?this.h9(e,t):e instanceof Qn?this.h7(e,t):e===null?t===null:tr(e,t))}),x.h9=(function(e,t){if(Tc(t))return this.h8(e,t);if(t instanceof Qn){if(typeof e==`number`)return+e===t.c;if(e instanceof S){var n=yr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:tr(e,t)}return e===null?t===null:tr(e,t)}),x.h8=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof S){var r=yr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof S){var a=yr(e),o=a.l,s=a.h;if(t instanceof S){var c=yr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:tr(e,t)}),x.h7=(function(e,t){if(t instanceof Qn)return e.c===t.c;if(Tc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof S){var n=yr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:tr(t,e)}return e===null&&t===null}),new T().i(hs,`scala.runtime.BoxesRunTime$`,{eu:1});var gs;function A(){return gs||=new hs,gs}var _s=new T().i(0,`scala.runtime.Null$`,{ey:1});function vs(){}x=vs.prototype=new w,x.constructor=vs,x.co=(function(){throw fd(new G,`tried to cast away nullability, but value is null`)}),new T().i(vs,`scala.runtime.Scala3RunTime$`,{eA:1});var ys;function bs(){return ys||=new vs,ys}function xs(){}x=xs.prototype=new w,x.constructor=xs,x.gy=(function(e){return e===null?_s.l():$n(e)}),x.b0=(function(e,t){if(e instanceof xr||e instanceof Dr||e instanceof Ar)return e.a[t];if(e instanceof Or){var n=e.a,r=t<<1;return C(n[r],n[r+1|0])}if(e instanceof kr)return e.a[t];if(e instanceof wr)return gr(e.a[t]);if(e instanceof Tr||e instanceof Er||e instanceof Cr)return e.a[t];throw e===null?W(new G):new _d(e)}),x.fs=(function(e,t,n){if(e instanceof xr)e.a[t]=n;else if(e instanceof Dr)e.a[t]=n|0;else if(e instanceof Ar)e.a[t]=+n;else if(e instanceof Or){var r=yr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof kr)e.a[t]=Math.fround(n);else if(e instanceof wr)e.a[t]=vr(n);else if(e instanceof Tr)e.a[t]=n|0;else if(e instanceof Er)e.a[t]=n|0;else if(e instanceof Cr)e.a[t]=!!n;else throw e===null?W(new G):new _d(e)}),x.dl=(function(e){return rs(e.a5(),e.C()+`(`,`,`,`)`)}),x.P=(function(e){if(e===null)return null;if(e.a.length===0){var t=Sf();return Jf(),yf(t)}return new Fp(e)}),new T().i(xs,`scala.runtime.ScalaRunTime$`,{eB:1});var Ss;function j(){return Ss||=new xs,Ss}function Cs(){}x=Cs.prototype=new w,x.constructor=Cs,x.j=(function(e,t){var n=this.cn(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.cn=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.y=(function(e,t){return this.gH(e^t)}),x.gH=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.hF=(function(e,t){return t===e>>31?e:e^t}),x.h4=(function(e){var t=ar(e);if(t===e)return t;var n=Ho().fJ(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=sr;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),x.r=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.h4(+e);if(e instanceof S){var t=yr(e);return this.hF(t.l,t.h)}return nr(e)}),x.hx=(function(e){throw ld(new U,``+e)}),new T().i(Cs,`scala.runtime.Statics$`,{eD:1});var ws;function M(){return ws||=new Cs,ws}function Ts(){}x=Ts.prototype=new w,x.constructor=Ts,x.ih=(function(e,t){return setTimeout((()=>{t.X()}),e)}),new T().i(Ts,`scala.scalajs.js.timers.package$`,{eG:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){}x=Os.prototype=new w,x.constructor=Os,x.is=(function(e){if(e instanceof Q)return e.cb;var t=[];return e.b1(new z((e=>t.push(e)|0))),t}),new T().i(Os,`scala.scalajs.runtime.Compat$`,{eP:1});var ks;function As(){return ks||=new Os,ks}function js(){}x=js.prototype=new w,x.constructor=js,x.al=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new T().i(js,`scala.scalajs.runtime.package$`,{eQ:1});var Ms;function Ns(){return Ms||=new js,Ms}function Ps(){}x=Ps.prototype=new w,x.constructor=Ps,x.ii=(function(e){var t=`Illegal command line`+(e.fL()===0?``:e.fL()===1?` after first argument`:` after `+e.fL()+` arguments`)+`: `+e.iA();Nc().hO().hC(t+`
`)}),new T().i(Ps,`scala.util.CommandLineParser$`,{eR:1});function Fs(e){this.dh=null,this.dh=e}x=Fs.prototype=new w,x.constructor=Fs,x.h=(function(){return`DynamicVariable(`+this.dh+`)`}),new T().i(Fs,`scala.util.DynamicVariable`,{eT:1});function Is(){}x=Is.prototype=new w,x.constructor=Is,x.gF=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),x.cv=(function(e){return this.gF(e)?new J(e):q()}),new T().i(Is,`scala.util.control.NonFatal$`,{eV:1});var Ls;function Rs(){return Ls||=new Is,Ls}function zs(){}x=zs.prototype=new w,x.constructor=zs;function Bs(){}Bs.prototype=x,x.j=(function(e,t){var n=this.cn(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.cn=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.y=(function(e,t){return this.bP(e^t)}),x.bP=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.cs=(function(e,t,n){var r=e.A();if(r===0)return n?t:K(e.C());var i=t;n||(i=this.j(i,K(e.C())));for(var a=0;a<r;)i=this.j(i,M().r(e.B(a))),a=1+a|0;return this.y(i,r)}),x.dr=(function(e,t,n){var r=e.A(),i=K(n===null?e.C():n);if(r===0)return i;var a=t;a=this.j(a,i);for(var o=0;o<r;)a=this.j(a,M().r(e.B(o))),o=1+o|0;return this.y(a,r)}),x.it=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.g();o.n();){var s=o.k(),c=M().r(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.j(l,n),l=this.j(l,r),l=this.cn(l,a),this.y(l,i)}),x.hN=(function(e,t){var n=e.g(),r=t;if(!n.n())return this.y(r,0);var i=n.k();if(!n.n())return this.y(this.j(r,M().r(i)),1);var a=n.k(),o=M().r(i);r=this.j(r,o);for(var s=r,c=M().r(a),l=c-o|0,u=2;n.n();){r=this.j(r,c);var d=M().r(n.k());if(l!==(d-c|0)||l===0){for(r=this.j(r,d),u=1+u|0;n.n();)r=this.j(r,M().r(n.k())),u=1+u|0;return this.y(r,u)}c=d,u=1+u|0}return this.bP(this.j(this.j(s,l),c))}),x.s=(function(e,t){var n=t,r=Io().bI(e);switch(r){case 0:return this.y(n,0);case 1:return this.y(this.j(n,M().r(j().b0(e,0))),1);default:var i=M().r(j().b0(e,0));n=this.j(n,i);for(var a=n,o=M().r(j().b0(e,1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=M().r(j().b0(e,c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,M().r(j().b0(e,c))),c=1+c|0;return this.y(n,r)}o=l,c=1+c|0}return this.bP(this.j(this.j(a,s),o))}}),x.hU=(function(e,t,n,r){return this.bP(this.j(this.j(this.j(r,e),t),n))}),x.hs=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.y(n,0);case 1:return this.y(this.j(n,M().r(e.i(0))),1);default:var i=M().r(e.i(0));n=this.j(n,i);for(var a=n,o=M().r(e.i(1)),s=o-i|0,c=2;c<r;){n=this.j(n,o);var l=M().r(e.i(c));if(s!==(l-o|0)||s===0){for(n=this.j(n,l),c=1+c|0;c<r;)n=this.j(n,M().r(e.i(c))),c=1+c|0;return this.y(n,r)}o=l,c=1+c|0}return this.bP(this.j(this.j(a,s),o))}}),x.hE=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.T(),u=c.H(),d=M().r(l);switch(r=this.j(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.hU(s,a,o,t):this.y(r,n)});function Vs(e){this.aN=null,this.dX=null,this.cI=!1,this.dX=e,Ti(this),this.cI=!1}x=Vs.prototype=new w,x.constructor=Vs,x.hP=(function(e){this.cI?(ki(e),this.dX.X()):Oi(this,e)}),x.hD=(function(){Ei(this),this.cI=!0}),new T().i(Vs,`com.raquo.airstream.ownership.OneTimeOwner`,{bH:1,bI:1});function Hs(e){if(e===null)throw W(new G)}x=Hs.prototype=new w,x.constructor=Hs,x.cj=(function(e){return e}),x.cf=(function(e){return e}),new T().i(Hs,`com.raquo.laminar.codecs.package$$anon$2`,{c1:1,a5:1});function Us(e){if(e===null)throw W(new G)}x=Us.prototype=new w,x.constructor=Us,x.gZ=(function(e){return cs(),bc().hQ(e)}),x.cf=(function(e){return this.gZ(e)}),x.cj=(function(e){return``+ +e}),new T().i(Us,`com.raquo.laminar.codecs.package$$anon$4`,{c2:1,a5:1});function Ws(e,t,n,r){}x=Ws.prototype=new ua,x.constructor=Ws,new T().i(Ws,`com.raquo.laminar.keys.CompositeKey`,{ci:1,U:1});function Gs(e){this.bY=null,this.bY=e}x=Gs.prototype=new ua,x.constructor=Gs,new T().i(Gs,`com.raquo.laminar.keys.EventProp`,{cl:1,U:1});function Ks(e,t,n){return e.ar=t,e.bb=n,e}function qs(){this.ar=null,this.bb=null}x=qs.prototype=new ua,x.constructor=qs;function Js(){}Js.prototype=x,x.cc=(function(e){return new dl(this,e,new Mu(((e,t,n)=>{D().g5(e,t,n)})))}),new T().i(qs,`com.raquo.laminar.keys.HtmlAttr`,{a6:1,U:1});function Ys(e,t,n){this.cW=null,this.cV=null,this.bZ=null,this.c0=null,this.cW=e,this.cV=t;var r=n.b()?q():new J(n.l()+`:`+e);this.bZ=r.b()?e:r.l(),this.c0=n.b()?q():new J(pa().hI(n.l()))}x=Ys.prototype=new ua,x.constructor=Ys,new T().i(Ys,`com.raquo.laminar.keys.SvgAttr`,{cm:1,U:1});function Xs(){}x=Xs.prototype=new w,x.constructor=Xs,x.W=(function(e){}),new T().i(Xs,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ct:1,N:1});function Zs(e,t){if(this.ex=null,this.ex=e,t===null)throw W(new G)}x=Zs.prototype=new w,x.constructor=Zs,x.W=(function(e){var t=ci(),n=(()=>{this.ex.d(e)});if(ci(),t.v)n();else{t.v=!0;try{n()}finally{t.v=!1,ai(t)}}}),new T().i(Zs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cu:1,N:1});function Qs(){}x=Qs.prototype=new w,x.constructor=Qs,new T().i(Qs,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cx:1,cv:1});function $s(e,t){if(this.ez=null,this.ez=e,t===null)throw W(new G)}x=$s.prototype=new w,x.constructor=$s,x.gG=(function(e){return this.ez.d(e)}),new T().i($s,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cA:1,cy:1});function ec(e){e.fx(new yi(new V((()=>{throw L(new R,`Attempting to use owner of unmounted element: `+rs(D().gY(e.q(),(D(),tm())),``,` > `,``))}))))}function tc(e,t,n){return e.d6=t,e}function nc(){this.d6=null}x=nc.prototype=new w,x.constructor=nc;function rc(){}rc.prototype=x,x.dB=(function(){return this.d6}),x.aZ=(function(e){var t=this.gN();return e.b1(new H((e=>{e.W(t)}))),t}),x.gN=(function(){return new ef(this,D().gS(this))}),new T().i(nc,`com.raquo.laminar.tags.HtmlTag`,{as:1,a8:1});function ic(e,t){this.eE=null,this.eE=e}x=ic.prototype=new w,x.constructor=ic,new T().i(ic,`com.raquo.laminar.tags.SvgTag`,{cM:1,a8:1});function ac(){}x=ac.prototype=new w,x.constructor=ac,x.cj=(function(e){return e}),x.cf=(function(e){return e}),new T().i(ac,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cT:1,a5:1});function oc(e,t){return e.be=t,e.di(),e}function sc(){this.be=null,this.bd=null,this.bf=!1}x=sc.prototype=new w,x.constructor=sc;function cc(){}cc.prototype=x,x.ip=(function(){return this.bf||=(this.bd=new pl(this.be,new z((e=>void 0)),void 0),!0),this.bd}),x.a2=(function(e,t){var n=this.ip().aZ(new Q([]));return e.b1(new z((e=>{e.d(this).W(n)}))),t.b1(new z((e=>{e.W(n)}))),n});function lc(){this.d7=null,uc=this,this.d7=Vr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}x=lc.prototype=new w,x.constructor=lc,x.h0=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=k().gI(this.d7,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.d7.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new T().i(lc,`java.lang.Character$`,{cZ:1,a:1});var uc;function dc(){return uc||=new lc,uc}function fc(e){return(1&e.aa)<<24>>24||(e.da=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.aa=(1|e.aa)<<24>>24),e.da}function pc(e){return(1&e.aa)<<24>>24?e.da:fc(e)}function mc(e){return(2&e.aa)<<24>>24||(e.d9=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.aa=(2|e.aa)<<24>>24),e.d9}function hc(e){return(2&e.aa)<<24>>24?e.d9:mc(e)}function gc(e,t){var n=hc(e).exec(t);n===null&&_c(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&_c(t);var s=e.hR(i,a,o,15);return r===`-`?-s:s}function _c(e){throw new uf(`For input string: "`+e+`"`)}function vc(){this.da=null,this.d9=null,this.aa=0}x=vc.prototype=new w,x.constructor=vc,x.hQ=(function(e){var t=pc(this).exec(e);return t===null?gc(this,e):+parseFloat(t[1])}),x.hR=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,ee=l.substring(0,r)+m}else var ee=l;var h=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Ga().ia(+parseInt(ee,16),ar(+parseInt(n,10))+h|0)}),new T().i(vc,`java.lang.Double$`,{d1:1,a:1});var yc;function bc(){return yc||=new vc,yc}function xc(){}x=xc.prototype=new w,x.constructor=xc,x.bN=(function(e){throw new uf(`For input string: "`+e+`"`)}),x.hB=(function(e,t,n){e===null&&Cc().bN(e);var r=e.length;r===0&&Cc().bN(e);var i=dc(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Cc().bN(e);var l=0;for(l=0;c!==r;){var u=i.h0(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Cc().bN(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Cc().bN(e),(l^s)-s|0}),new T().i(xc,`java.lang.Integer$`,{d5:1,a:1});var Sc;function Cc(){return Sc||=new xc,Sc}function wc(){}x=wc.prototype=new w,x.constructor=wc;function Tc(e){return e instanceof wc||typeof e==`number`||e instanceof S}function Ec(e,t,n,r,i){this.aT=null,this.bh=null,this.aU=null,this.aV=0,this.aS=0,this.aT=e,this.bh=t,this.aU=n,this.aV=r,this.aS=i}x=Ec.prototype=new w,x.constructor=Ec,x.c=(function(e){return e instanceof Ec&&this.aU===e.aU&&this.aV===e.aV&&this.aS===e.aS&&this.aT===e.aT&&this.bh===e.bh}),x.h=(function(){var e=``;return this.aT!==`<jscode>`&&(e=``+e+this.aT+`.`),e=``+e+this.bh,this.aU===null?e+=`(Unknown Source)`:(e=e+`(`+this.aU,this.aV>=0&&(e=e+`:`+this.aV,this.aS>=0&&(e=e+`:`+this.aS)),e+=`)`),e}),x.f=(function(){return K(this.aT)^K(this.bh)^K(this.aU)^this.aV^this.aS});var Dc=new T().i(Ec,`java.lang.StackTraceElement`,{aC:1,a:1});function Oc(){}x=Oc.prototype=new w,x.constructor=Oc,x.hJ=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+or(e.a[a]),a=1+a|0;return i}),new T().i(Oc,`java.lang.String$`,{di:1,a:1});var kc;function Ac(){return kc||=new Oc,kc}function N(e,t,n,r,i){return e.eZ=t,e.f0=i,i&&e.hf(),e}var P=class extends Error{constructor(){super(),this.eZ=null,this.f0=!1,this.eY=null,this.c1=null}fM(e){return this}bJ(){return this.eZ}hf(){var e=this instanceof X?this.p:this;return this.eY=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}hn(){return this.c1===null&&(this.c1=this.f0?go().he(this.eY):new(Dc.r()).C(0)),this.c1}h(){var e=er(this),t=this.bJ();return t===null?e:e+`: `+t}f(){return br.prototype.f.call(this)}c(e){return br.prototype.c.call(this,e)}get message(){var e=this.bJ();return e===null?``:e}get name(){return er(this)}toString(){return this.h()}};function jc(){this.f1=null,Mc=this,this.f1=new Fs(xo().eW)}x=jc.prototype=new w,x.constructor=jc,x.hO=(function(){return this.f1.dh}),new T().i(jc,`scala.Console$`,{dw:1,ek:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(){}x=Pc.prototype=new Yo,x.constructor=Pc;function Fc(){}Fc.prototype=x,x.ix=(function(e){if(e===null)return null;if(e.a.length===0){var t=Tf();return Jf(),t.fe}return new Yp(e)});function Ic(e,t,n){return e.aF(t)?e.d(t):n.d(t)}function Lc(e,t){if(t===e)e.fo(Vd().fH(t));else for(var n=t.g();n.n();)e.dn(n.k());return e}function Rc(){}x=Rc.prototype=new w,x.constructor=Rc;function zc(){}zc.prototype=x,x.h=(function(){return`<function0>`});function Bc(){}x=Bc.prototype=new w,x.constructor=Bc;function Vc(){}Vc.prototype=x,x.h=(function(){return`<function1>`});function Hc(){}x=Hc.prototype=new w,x.constructor=Hc;function Uc(){}Uc.prototype=x,x.h=(function(){return`<function2>`});function Wc(){}x=Wc.prototype=new w,x.constructor=Wc;function Gc(){}Gc.prototype=x,x.h=(function(){return`<function3>`});function Kc(e){this.c7=!1,this.c7=e}x=Kc.prototype=new w,x.constructor=Kc,x.h=(function(){return``+this.c7}),new T().i(Kc,`scala.runtime.BooleanRef`,{et:1,a:1});function qc(e){this.br=0,this.br=e}x=qc.prototype=new w,x.constructor=qc,x.h=(function(){return``+this.br}),new T().i(qc,`scala.runtime.IntRef`,{ev:1,a:1});function Jc(){this.c8=!1,this.c9=null}x=Jc.prototype=new w,x.constructor=Jc,x.ht=(function(e){return this.c9=e,this.c8=!0,e}),x.h=(function(){return`LazyRef `+(this.c8?`of: `+this.c9:`thunk`)}),new T().i(Jc,`scala.runtime.LazyRef`,{ew:1,a:1});function Yc(e){this.ca=null,this.ca=e}x=Yc.prototype=new w,x.constructor=Yc,x.h=(function(){return``+this.ca}),new T().i(Yc,`scala.runtime.ObjectRef`,{ez:1,a:1});function Xc(){this.o=0,this.fm=0,this.gr=0,this.gq=0,Zc=this,this.o=K(`Seq`),this.fm=K(`Map`),this.gr=K(`Set`),this.gq=this.it(tm(),this.fm)}x=Xc.prototype=new Bs,x.constructor=Xc,x.g4=(function(e){return cp(e)?this.hs(e,this.o):e instanceof Bp?this.hE(e,this.o):this.hN(e,this.o)}),new T().i(Xc,`scala.util.hashing.MurmurHash3$`,{eX:1,eW:1});var Zc;function F(){return Zc||=new Xc,Zc}var Qc=class extends P{};function $c(){this.cy=null,this.dF=null,this.dG=null,el=this,this.cy=Vd().fq(j().P(new(qo.r()).C([]))),this.dF=new H((e=>{try{console.error(this.b2(e)+`
`+this.hm(e,`
`))}catch(e){var t=e instanceof P?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dG=new H((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.p:t})),this.hV(this.dF)}x=$c.prototype=new w,x.constructor=$c,x.b2=(function(e){try{var t=e.bJ()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return $n(e).dv()+`: `+t}),x.hm=(function(e,t){try{return rs(Nl().ix(e.hn()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.hV=(function(e){this.cy.dn(e)}),x.Z=(function(e){for(var t=this.cy.g();t.n();){var n=t.k();try{n.d(e)}catch(e){var r=e instanceof P?e:new X(e),i=this.dG;if(n===null?i===null:n.c(i))throw r instanceof X?r.p:r;console.warn(`Error processing an unhandled error callback:`),Ds().ih(0,new V((e=>(()=>{throw e instanceof X?e.p:e}))(r)))}}}),new T().i($c,`com.raquo.airstream.core.AirstreamError$`,{bt:1,ei:1,ej:1});var el;function I(){return el||=new $c,el}function tl(e){e.cl(!0),e.dA(void 0)}function nl(e,t,n){return Iu(e,qr().ga(t,ts().c3,!0),n)}function rl(e,t){e.dw()?Bu(e,t):ol(e).push(new V((()=>{Bu(e,t)})))}function il(e,t){e.dw()?zu(e,t):ol(e).push(new V((()=>{zu(e,t)})))}function al(e){return Wu(e)>0}function ol(e){var t=e.dz();if(t===void 0){var n=Ri().R(j().P(new(Ko.r()).C([])));return e.dA(n),n}return t}var sl=new T().i(1,`com.raquo.airstream.core.Observer`,{a2:1,Y:1,T:1});function cl(e,t,n){return new du(n.gG(t))}function ll(e,t){this.aR=null,this.cY=null,this.cZ=null,this.aR=e,this.cY=(n=>{var r=e.cS.d(n);r.b()||t.d(r.l())}),this.cZ=(()=>{var e=null;e=this;var t={};if(e===null)throw W(new G);return t.capture=e.aR.cU,t.passive=e.aR.cT,t})()}x=ll.prototype=new w,x.constructor=ll,x.W=(function(e){this.gJ(e,!1)}),x.gJ=(function(e,t){if(Xu(e,this)===-1){var n=new H((t=>(D().gv(e.x,this),new Ai(t.cX,new V((()=>{var t=Xu(e,this);t!==-1&&(Yu(e,t),D().i0(e.x,this))})))))),r=t?Aa().iu(e,n):wi().cw(e.V,new H((t=>n.d(new ma(e,t)))),!1);return Ju(e,this,t),r}var i=new H((e=>void 0));return wi().g6(e.V,new H((t=>{i.d(new ma(e,t))})),!1)}),x.h=(function(){return`EventListener(`+this.aR.ba.bY+`)`});var ul=new T().i(ll,`com.raquo.laminar.modifiers.EventListener`,{cq:1,N:1,cp:1});function dl(e,t,n){this.ev=null,this.ew=null,this.eu=null,this.ev=e,this.ew=t,this.eu=n}x=dl.prototype=new w,x.constructor=dl,x.W=(function(e){this.eu.fp(e,this.ev,this.ew)}),new T().i(dl,`com.raquo.laminar.modifiers.KeySetter`,{cr:1,N:1,cB:1});function fl(e,t){if(this.d3=null,this.eB=null,this.eC=null,this.eB=t,ec(this),e===null)throw L(new R,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().hA(e,document))throw L(new R,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eC=e,this.hH()}x=fl.prototype=new w,x.constructor=fl,x.ci=(function(){return this.d3}),x.fx=(function(e){this.d3=e}),x.hH=(function(){return this.d3.fn(),Da().bu(this,this.eB,void 0)}),x.q=(function(){return this.eC}),new T().i(fl,`com.raquo.laminar.nodes.RootNode`,{cH:1,Z:1,ar:1});function pl(e,t,n){this.d6=null,this.eD=null,this.eD=e,tc(this,e,!1)}x=pl.prototype=new rc,x.constructor=pl,x.dB=(function(){return this.eD}),new T().i(pl,`com.raquo.laminar.tags.CustomHtmlTag`,{cL:1,as:1,a8:1});function ml(){this.be=null,this.bd=null,this.bf=!1,this.eF=null,this.eG=!1,oc(this,`wa-button`)}x=ml.prototype=new cc,x.constructor=ml,x.dE=(function(){return this.eG||=(this.eF=yl(),!0),this.eF}),x.di=(function(){return On}),new T().i(ml,`io.github.nguyenyou.webawesome.laminar.Button$`,{cO:1,aa:1,a9:1});var hl;function gl(){return hl||=new ml,hl}function _l(){this.ar=null,this.bb=null,this.eH=null,this.eI=!1,this.eJ=null,this.eK=!1,Ks(this,`variant`,new ac)}x=_l.prototype=new Js,x.constructor=_l,x.gM=(function(){return this.eI||=(this.eH=yl().cc(`brand`),!0),this.eH}),x.ik=(function(){return this.eK||=(this.eJ=yl().cc(`success`),!0),this.eJ}),new T().i(_l,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cP:1,a6:1,U:1});var vl;function yl(){return vl||=new _l,vl}function bl(){this.ar=null,this.bb=null,this.eL=null,this.eM=!1,Ks(this,`placement`,new ac)}x=bl.prototype=new Js,x.constructor=bl,x.gL=(function(){return this.eM||=(this.eL=Sl().cc(`bottom-center`),!0),this.eL}),new T().i(bl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ToastPlacement$`,{cQ:1,a6:1,U:1});var xl;function Sl(){return xl||=new bl,xl}function Cl(){this.be=null,this.bd=null,this.bf=!1,this.eN=null,this.eO=!1,oc(this,`wa-toast`)}x=Cl.prototype=new cc,x.constructor=Cl,x.hS=(function(){return this.eO||=(this.eN=Sl(),!0),this.eN}),x.di=(function(){return Zn}),new T().i(Cl,`io.github.nguyenyou.webawesome.laminar.Toast$`,{cR:1,aa:1,a9:1});var wl;function Tl(){return wl||=new Cl,wl}function El(){this.be=null,this.bd=null,this.bf=!1,this.eR=null,this.eS=!1,this.eT=null,this.eU=!1,this.eP=null,this.eQ=!1,oc(this,`wa-toast-item`)}x=El.prototype=new cc,x.constructor=El,x.hL=(function(){return this.eS||=(this.eR=(B(),new Gs(`wa-after-hide`)),!0),this.eR}),x.dE=(function(){return this.eU||=(this.eT=yl(),!0),this.eT}),x.h6=(function(){return this.eQ||=(this.eP=(B(),Ks(new qs,`duration`,qi().gu())),!0),this.eP}),x.di=(function(){return Vn}),new T().i(El,`io.github.nguyenyou.webawesome.laminar.ToastItem$`,{cS:1,aa:1,a9:1});var Dl;function Ol(){return Dl||=new El,Dl}function kl(e){if(e.am.Z)return e.am.Q().dv()+`[]`;for(var t=e.am.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Al(e){this.d8=null,this.am=e}x=Al.prototype=new w,x.constructor=Al,x.h=(function(){return(this.am.Y?`interface `:this.am.X?``:`class `)+this.am.N}),x.dv=(function(){return this.d8===null&&(this.d8=kl(this)),this.d8}),new T().i(Al,`java.lang.Class`,{d0:1,a:1,L:1});function L(e,t){return N(e,t,null,!0,!0),e}var R=class extends P{};new T().i(R,`java.lang.Exception`,{K:1,r:1,a:1});function jl(){this.gm=null,Ml=this,Rd(),this.gm=Gl()}x=jl.prototype=new Fc,x.constructor=jl,new T().i(jl,`scala.Predef$`,{dG:1,dz:1,dA:1});var Ml;function Nl(){return Ml||=new jl,Ml}function Pl(e,t){return e.c5=t,e}function Fl(){this.c5=null}x=Fl.prototype=new w,x.constructor=Fl;function Il(){}Il.prototype=x,x.ck=(function(e){return this.c5.du(e,Gf())}),x.ce=(function(e){return this.c5.du(e,Gf())});function Ll(e,t){return new Dd(e).gP(t)}function Rl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Hl().J:new Ad(e,r,i)}function zl(e,t){for(var n=t.g();e.n();)if(!n.n()||!A().w(e.k(),n.k()))return!1;return!n.n()}function Bl(){this.J=null,Vl=this,this.J=new Cd}x=Bl.prototype=new w,x.constructor=Bl,new T().i(Bl,`scala.collection.Iterator$`,{dQ:1,a:1,W:1});var Vl;function Hl(){return Vl||=new Bl,Vl}function Ul(){}x=Ul.prototype=new w,x.constructor=Ul,new T().i(Ul,`scala.collection.immutable.Map$`,{e6:1,a:1,dV:1});var Wl;function Gl(){return Wl||=new Ul,Wl}function Kl(e){this.ff=null,this.ff=e}x=Kl.prototype=new zc,x.constructor=Kl,x.X=(function(){return(0,this.ff)()}),new T().i(Kl,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{eo:1,bk:1,ac:1});function z(e){this.fg=null,this.fg=e}x=z.prototype=new Vc,x.constructor=z,x.d=(function(e){return(0,this.fg)(e)}),new T().i(z,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{ep:1,bl:1,e:1});function ql(){}x=ql.prototype=new w,x.constructor=ql;function Jl(){}Jl.prototype=x,x.h=(function(){return`<function1>`}),x.d=(function(e){return this.fr(e,ts().c3)});var Yl=new T().i(0,`scala.runtime.Nothing$`,{ex:1,r:1,a:1});function Xl(){}x=Xl.prototype=new zc,x.constructor=Xl;function Zl(){}Zl.prototype=x;function Ql(){}x=Ql.prototype=new Vc,x.constructor=Ql;function $l(){}$l.prototype=x;function eu(){}x=eu.prototype=new Uc,x.constructor=eu;function tu(){}tu.prototype=x;function nu(){}x=nu.prototype=new Gc,x.constructor=nu;function ru(){}ru.prototype=x;function iu(e,t,n,r){if(this.dJ=null,this.dH=!1,this.cz=null,this.dI=null,this.dJ=e,this.dH=t,this.cz=n,r===null)throw W(new G);this.dI=void 0}x=iu.prototype=new w,x.constructor=iu,x.bL=(function(){return this.dI}),x.bF=(function(){return Ur(this)}),x.h=(function(){return Wr(this)}),x.cr=(function(e){try{this.dJ.d(e)}catch(e){var t=e instanceof P?e:new X(e);this.dH?this.cq(new Yd(t)):I().Z(new Yd(t))}}),x.cq=(function(e){try{this.cz.aF(e)?this.cz.d(e):I().Z(e)}catch(n){var t=n instanceof P?n:new X(n);I().Z(new Xd(t,e))}}),x.bM=(function(e){e.a3(new H((e=>{this.cq(e)})),new H((e=>{this.cr(e)})))}),new T().i(iu,`com.raquo.airstream.core.Observer$$anon$8`,{bv:1,Y:1,T:1,a2:1});function au(e,t,n){if(this.cA=null,this.dK=!1,this.dL=null,this.cA=e,this.dK=t,n===null)throw W(new G);this.dL=void 0}x=au.prototype=new w,x.constructor=au,x.bL=(function(){return this.dL}),x.bF=(function(){return Ur(this)}),x.h=(function(){return Wr(this)}),x.cr=(function(e){this.bM(new qd(e))}),x.cq=(function(e){this.bM(new Kd(e))}),x.bM=(function(e){try{this.cA.aF(e)?this.cA.d(e):e.a3(new H((e=>{I().Z(e)})),new H((e=>void 0)))}catch(n){var t=n instanceof P?n:new X(n);this.dK&&e.fP()?this.cq(new Yd(t)):e.a3(new H((e=>{I().Z(new Xd(t,e))})),new H((e=>{I().Z(new Yd(t))})))}}),new T().i(au,`com.raquo.airstream.core.Observer$$anon$9`,{bw:1,Y:1,T:1,a2:1});function ou(e){if(this.ed=null,this.ee=!1,this.gb=null,e===null)throw W(new G);Xi(this)}x=ou.prototype=new w,x.constructor=ou,x.im=(function(){return this.ee||=(this.ed=new ic(`svg`,!1),!0),this.ed}),new T().i(ou,`com.raquo.laminar.api.Laminar$svg$`,{bV:1,cb:1,c4:1,c6:1});function su(){this.u=null,cu=this,this.u=new mp}x=su.prototype=new w,x.constructor=su,new T().i(su,`com.raquo.laminar.api.package$`,{bY:1,ap:1,aq:1,ao:1});var cu;function B(){return cu||=new su,cu}function lu(e,t,n,r){this.eq=null,this.es=!1,this.er=null,this.cR=null,this.eq=e,this.es=t,this.er=n,this.cR=r}x=lu.prototype=new w,x.constructor=lu,x.gK=(function(e){var t=this.eq,n=t.b()?ia().i7(e,this.es,this.cR):t.l(),r=new H((e=>this.er.fp(n,e.cX,this.cR)));return wi().cw(e.V,new H((t=>r.d(new ma(e,t)))),!1)}),x.W=(function(e){this.gK(e)}),new T().i(lu,`com.raquo.laminar.inserters.DynamicInserter`,{cd:1,N:1,ch:1,ce:1});function uu(e){this.d0=null,this.d1=null,this.d0=q(),this.d1=D().gR(e)}x=uu.prototype=new w,x.constructor=uu,x.ds=(function(){return this.d0}),x.aG=(function(e){this.d0=e}),x.aH=(function(e){}),x.W=(function(e){Da().bu(e,this,void 0)}),x.q=(function(){return this.d1}),new T().i(uu,`com.raquo.laminar.nodes.CommentNode`,{cC:1,Z:1,N:1,a7:1});function du(e){this.d4=null,this.d5=null,this.d4=q(),this.d5=D().gU(e)}x=du.prototype=new w,x.constructor=du,x.ds=(function(){return this.d4}),x.aG=(function(e){this.d4=e}),x.aH=(function(e){}),x.W=(function(e){Da().bu(e,this,void 0)}),x.ir=(function(){return this.d5.data}),x.q=(function(){return this.d5}),new T().i(du,`com.raquo.laminar.nodes.TextNode`,{cI:1,Z:1,N:1,a7:1});function fu(){}x=fu.prototype=new w,x.constructor=fu;function pu(){}pu.prototype=x;function mu(e,t){return e===t}function hu(e){return e?1231:1237}var gu=new T().i(0,`java.lang.Boolean`,{cX:1,a:1,O:1,L:1},(e=>typeof e==`boolean`));function _u(e){return e}function vu(e,t){return t instanceof Qn&&e===t.c}var yu=new T().i(0,`java.lang.Character`,{ay:1,a:1,O:1,L:1},(e=>e instanceof Qn)),bu=class extends R{};function xu(){this.m=null,this.m=``}x=xu.prototype=new w,x.constructor=xu,x.gA=(function(e){var t=Ac().hJ(e,0,e.a.length);return this.m=``+this.m+t,this}),x.h=(function(){return this.m}),x.e=(function(){return this.m.length}),x.ft=(function(e){return this.m.charCodeAt(e)}),new T().i(xu,`java.lang.StringBuilder`,{dj:1,ab:1,aw:1,a:1});function Su(){}x=Su.prototype=new w,x.constructor=Su,x.h=(function(){return`<function1>`}),x.bE=(function(e,t){return Ic(this,e,t)}),x.aF=(function(e){return!1}),x.gD=(function(e){throw new _d(e)}),x.d=(function(e){this.gD(e)}),new T().i(Su,`scala.PartialFunction$$anon$1`,{dF:1,e:1,f:1,a:1});function Cu(){}x=Cu.prototype=new w,x.constructor=Cu;function wu(){}wu.prototype=x,x.t=(function(){return-1}),x.aY=(function(e,t,n,r){return is(this,e,t,n,r)}),x.g=(function(){return this}),x.ch=(function(e){return this.bQ(e,-1)}),x.bQ=(function(e,t){return Rl(this,e,t)}),x.h=(function(){return`<iterator>`});function Tu(e,t){return e.c6=t,e}function Eu(){this.c6=null}x=Eu.prototype=new w,x.constructor=Eu;function Du(){}Du.prototype=x,x.fq=(function(e){return this.c6.ce(e)}),x.fH=(function(e){return this.c6.ck(e)}),x.ce=(function(e){return this.fq(e)}),x.ck=(function(e){return this.fH(e)});function Ou(e,t){return t>=0&&e.a4(t)>0}function ku(e){return e.a4(0)===0}function Au(e,t){var n=e.t();if(n!==-1){var r=t.t();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return zl(e.g(),t)}function V(e){this.fj=null,this.fj=e}x=V.prototype=new Zl,x.constructor=V,x.X=(function(){return(0,this.fj)()}),new T().i(V,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{eI:1,eH:1,bk:1,ac:1});function H(e){this.fk=null,this.fk=e}x=H.prototype=new $l,x.constructor=H,x.d=(function(e){return(0,this.fk)(e)}),new T().i(H,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{eK:1,eJ:1,bl:1,e:1});function ju(e){this.gp=null,this.gp=e}x=ju.prototype=new tu,x.constructor=ju,new T().i(ju,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eM:1,eL:1,eq:1,dx:1});function Mu(e){this.fl=null,this.fl=e}x=Mu.prototype=new ru,x.constructor=Mu,x.fp=(function(e,t,n){return(0,this.fl)(e,t,n)}),new T().i(Mu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eO:1,eN:1,er:1,dy:1});function Nu(){}x=Nu.prototype=new w,x.constructor=Nu;function Pu(){}Pu.prototype=x,x.a5=(function(){return new bd(this)});function Fu(e){e.fv(Ri().R(j().P(new(sl.r()).C([])))),e.fw(Ri().R(j().P(new(Hr.r()).C([])))),e.cx(!1)}function Iu(e,t,n){var r=ci(),i=(()=>{Vu(e);var r=Lu(e,t,n);return t.bM(e.cu()),Hu(e),r}),a=!al(e);if(r.v||!a)var o=i();else{r.v=!0;try{var o=i()}finally{r.v=!1,ai(r)}}return o}function Lu(e,t,n){var r=new Ai(n,new V((()=>{rl(e,t)})));return e.bH().push(t),r}function Ru(e,t,n){var r=ci(),i=(()=>{!al(e)&&n&&Vu(e),e.bK().push(t),Hu(e)}),a=!al(e);if(r.v||!a)i();else{r.v=!0;try{i()}finally{r.v=!1,ai(r)}}}function zu(e,t){Xr().g1(e.bK(),t)&&Uu(e)}function Bu(e,t){Xr().g1(e.bH(),t)&&Uu(e)}function Vu(e){e.g9()||(e.fZ(),e.cx(!0))}function Hu(e){Wu(e)===1&&e.fW()}function Uu(e){al(e)||(e.fX(),e.cx(!1))}function Wu(e){var t=e.bH().length,n=e.bK();return(t|0)+(n.length|0)|0}function Gu(e){e.cN=qr().hi(new Ku(e),(qr(),!0))}function Ku(e){if(this.e3=null,e===null)throw W(new G);this.e3=e}x=Ku.prototype=new Jl,x.constructor=Ku,x.hz=(function(e){return!0}),x.fr=(function(e,t){new ei(new H((t=>{this.e3.ib(e,t)})))}),x.aF=(function(e){return this.hz(e)}),x.bE=(function(e,t){return this.fr(e,t)}),new T().i(Ku,`com.raquo.airstream.state.Var$$anon$1`,{bP:1,es:1,e:1,f:1,a:1});function qu(e){e.d2=new Mi(new V((()=>{e.V.fn()})),new V((()=>{e.V.gV()}))),e.at=void 0}function Ju(e,t,n){if(e.at===void 0)e.at=Ri().R(j().P(new(ul.r()).C([t])));else if(n){var r=e.at;if(r===void 0)throw new hd(`undefined.get`);r.unshift(t)}else{var i=e.at;if(i===void 0)throw new hd(`undefined.get`);i.push(t)}}function Yu(e,t){var n=e.at;n!==void 0&&n.splice(t,1)}function Xu(e,t){var n=e.at;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:tr(a,t))?r=!0:i=1+i|0}return r?i:-1}function Zu(e,t){$u(e,e.bc,t)&&ed(e,t)}function Qu(e,t){var n=e.bc;e.bc=t,$u(e,n,t)||ed(e,t)}function $u(e,t,n){var r=!t.b()&&!t.l().ci().E.b(),i=!n.b()&&!n.l().ci().E.b();return r&&!i}function ed(e,t){td(e,t.b()?q():new J(t.l().ci()))}function td(e,t){if(t.b())e.d2.gO();else{var n=t.l();e.d2.id(n)}}function nd(){}x=nd.prototype=new pu,x.constructor=nd;function rd(){}rd.prototype=x;var id=class extends bu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(id,`java.lang.ArithmeticException`,{cW:1,P:1,K:1,r:1,a:1});var ad=new T().i(0,`java.lang.Byte`,{cY:1,S:1,a:1,O:1,L:1},(e=>fr(e)));function od(e,t){return N(e,t,null,!0,!0),e}function sd(e){return N(e,null,null,!0,!0),e}var cd=class extends bu{};new T().i(cd,`java.lang.IllegalArgumentException`,{aA:1,P:1,K:1,r:1,a:1});function ld(e,t){return N(e,t,null,!0,!0),e}function ud(e,t){return N(e,`Index out of range: `+t,null,!0,!0),e}var U=class extends bu{};new T().i(U,`java.lang.IndexOutOfBoundsException`,{d3:1,P:1,K:1,r:1,a:1});function dd(){}x=dd.prototype=new pu,x.constructor=dd,new T().i(dd,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{d8:1,av:1,at:1,ax:1,au:1});function fd(e,t){return N(e,t,null,!0,!0),e}function W(e){return N(e,null,null,!0,!0),e}var G=class extends bu{};new T().i(G,`java.lang.NullPointerException`,{db:1,P:1,K:1,r:1,a:1});var pd=new T().i(0,`java.lang.Short`,{de:1,S:1,a:1,O:1,L:1},(e=>pr(e))),md=class extends bu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(md,`java.lang.UnsupportedOperationException`,{dn:1,P:1,K:1,r:1,a:1});var hd=class extends bu{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(hd,`java.util.NoSuchElementException`,{dt:1,P:1,K:1,r:1,a:1});function gd(e){if(!e.f3){if(e.c2===null)var t=`null`;else{var n=j().gy(e.c2),r=n===null?`of a JS class`:`of class `+n.am.N;try{var t=e.c2+` (`+r+`)`}catch{var t=`an instance `+r}}e.f2=t,e.f3=!0}return e.f2}var _d=class extends bu{constructor(e){super(),this.c2=null,this.f2=null,this.f3=!1,this.c2=e,N(this,null,null,!0,!0)}bJ(){return gd(this)}};new T().i(_d,`scala.MatchError`,{dB:1,P:1,K:1,r:1,a:1});function vd(){}x=vd.prototype=new w,x.constructor=vd;function yd(){}yd.prototype=x,x.a5=(function(){return new bd(this)}),x.b=(function(){return this===q()}),x.t=(function(){return!this.b()|0}),x.gQ=(function(e){return!this.b()&&A().w(this.l(),e)}),x.g=(function(){return this.b()?Hl().J:new wd(this.l())});function bd(e){if(this.bi=0,this.f6=0,this.f5=null,e===null)throw W(new G);this.f5=e,this.bi=0,this.f6=e.A()}x=bd.prototype=new wu,x.constructor=bd,x.n=(function(){return this.bi<this.f6}),x.k=(function(){var e=this.f5.B(this.bi);return this.bi=1+this.bi|0,e}),new T().i(bd,`scala.Product$$anon$1`,{dH:1,Q:1,b:1,d:1,R:1});function xd(e){this.c5=null,Pl(this,e)}x=xd.prototype=new Il,x.constructor=xd,new T().i(xd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dM:1,dL:1,a:1,W:1,a1:1});function Sd(e){return rs(e,e.aE()+`(`,`, `,`)`)}function Cd(){}x=Cd.prototype=new wu,x.constructor=Cd,x.n=(function(){return!1}),x.hK=(function(){throw new hd(`next on empty iterator`)}),x.t=(function(){return 0}),x.k=(function(){this.hK()}),x.bQ=(function(e,t){return this}),new T().i(Cd,`scala.collection.Iterator$$anon$19`,{dR:1,Q:1,b:1,d:1,R:1});function wd(e){this.f8=null,this.bl=!1,this.f8=e,this.bl=!1}x=wd.prototype=new wu,x.constructor=wd,x.n=(function(){return!this.bl}),x.k=(function(){return this.bl?Hl().J.k():(this.bl=!0,this.f8)}),x.bQ=(function(e,t){return this.bl||e>0||t===0?Hl().J:this}),new T().i(wd,`scala.collection.Iterator$$anon$20`,{dS:1,Q:1,b:1,d:1,R:1});function Td(e){for(;;)if(e.z instanceof Dd){var t=e.z;if(e.z=t.z,e.ac=t.ac,t.L!==null){e.K===null&&(e.K=t.K);var n=t.K;n===null&&bs().co(),n.bm=e.L,e.L=t.L}}else return}function Ed(e){for(;;)if(e.L===null)return e.z=null,e.K=null,!1;else{if(e.z=e.L.hr(),e.K===e.L){var t=e.K;t===null&&bs().co(),e.K=t.bm}if(e.L=e.L.bm,Td(e),e.ac)return!0;if(!(e.z!==null&&e.z.n()))continue;return e.ac=!0,!0}}function Dd(e){this.z=null,this.L=null,this.K=null,this.ac=!1,this.z=e,this.L=null,this.K=null,this.ac=!1}x=Dd.prototype=new wu,x.constructor=Dd,x.n=(function(){return this.ac?!0:this.z===null?!1:this.z.n()?(this.ac=!0,!0):Ed(this)}),x.k=(function(){if(this.n()){this.ac=!1;var e=this.z;return e===null&&bs().co(),e.k()}return Hl().J.k()}),x.gP=(function(e){var t=new as(e,null);if(this.L===null)this.L=t,this.K=t;else{var n=this.K;n===null&&bs().co(),n.bm=t,this.K=t}return this.z===null&&(this.z=Hl().J),this}),new T().i(Dd,`scala.collection.Iterator$ConcatIterator`,{aJ:1,Q:1,b:1,d:1,R:1});function Od(e){for(;e.a1>0;)e.ad.n()?(e.ad.k(),e.a1=e.a1-1|0):e.a1=0}function kd(e,t){if(e.F<0)return-1;var n=e.F-t|0;return n<0?0:n}function Ad(e,t,n){this.ad=null,this.F=0,this.a1=0,this.ad=e,this.F=n,this.a1=t}x=Ad.prototype=new wu,x.constructor=Ad,x.t=(function(){var e=this.ad.t();if(e<0)return-1;var t=e-this.a1|0,n=t<0?0:t;if(this.F<0)return n;var r=this.F;return r<n?r:n}),x.n=(function(){return Od(this),this.F!==0&&this.ad.n()}),x.k=(function(){return Od(this),this.F>0?(this.F=this.F-1|0,this.ad.k()):this.F<0?this.ad.k():Hl().J.k()}),x.bQ=(function(e,t){var n=e>0?e:0;if(t<0)var r=kd(this,n);else if(t<=n)var r=0;else if(this.F<0)var r=t-n|0;else var i=kd(this,n),a=t-n|0,r=i<a?i:a;var o=this.a1+n|0;return r===0?Hl().J:o<0?(this.a1=2147483647,this.F=0,Ll(this,new Kl((()=>new Ad(this.ad,o-2147483647|0,r))))):(this.a1=o,this.F=r,this)}),new T().i(Ad,`scala.collection.Iterator$SliceIterator`,{dU:1,Q:1,b:1,d:1,R:1});function jd(e,t){return t>=0&&e.a4(t)>0}function Md(e,t){if(t<0)throw ld(new U,``+t);var n=e.h5(t);if(n.b())throw ld(new U,``+t);return n.T()}function Nd(e,t){return lp(t)?Pd(e,e,t):Au(e,t)}function Pd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&A().w(i.T(),r.T())){var a=i.H(),o=r.H();i=a,r=o;continue}return i.b()&&r.b()}}function Fd(e){if(this.bo=null,e===null)throw W(new G);this.bo=e}x=Fd.prototype=new wu,x.constructor=Fd,x.n=(function(){return!this.bo.b()}),x.k=(function(){var e=this.bo.T();return this.bo=this.bo.H(),e}),new T().i(Fd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dZ:1,Q:1,b:1,d:1,R:1});function Id(){Ld=this,tm(),tm()}x=Id.prototype=new w,x.constructor=Id,x.ce=(function(e){return tm().g0(e)}),x.ck=(function(e){return tm().g0(e)}),new T().i(Id,`scala.collection.immutable.List$`,{e5:1,a:1,W:1,a1:1,aN:1});var Ld;function Rd(){return Ld||=new Id,Ld}function zd(){this.c6=null,Tu(this,Gd())}x=zd.prototype=new Du,x.constructor=zd,new T().i(zd,`scala.collection.mutable.Buffer$`,{ec:1,dW:1,a:1,W:1,a1:1});var Bd;function Vd(){return Bd||=new zd,Bd}function Hd(e){this.fi=null,this.bs=0,this.fh=0,this.fi=e,this.bs=0,this.fh=e.A()}x=Hd.prototype=new wu,x.constructor=Hd,x.n=(function(){return this.bs<this.fh}),x.k=(function(){var e=this.fi.B(this.bs);return this.bs=1+this.bs|0,e}),new T().i(Hd,`scala.runtime.ScalaRunTime$$anon$1`,{eC:1,Q:1,b:1,d:1,R:1});function Ud(){}x=Ud.prototype=new w,x.constructor=Ud,x.ce=(function(e){return this.fI(e)}),x.fI=(function(e){return Lc(om(new sm),e).g2()}),x.ck=(function(e){return this.fI(e)}),new T().i(Ud,`scala.scalajs.js.WrappedArray$`,{eF:1,aN:1,a:1,W:1,a1:1});var Wd;function Gd(){return Wd||=new Ud,Wd}function Kd(e){this.bt=null,this.bt=e}x=Kd.prototype=new Pu,x.constructor=Kd,x.f=(function(){return F().cs(this,-1408943127,!0)}),x.c=(function(e){if(this===e)return!0;if(e instanceof Kd){var t=this.bt,n=e.bt;return t===null?n===null:t.c(n)}return!1}),x.h=(function(){return j().dl(this)}),x.A=(function(){return 1}),x.C=(function(){return`Failure`}),x.B=(function(e){if(e===0)return this.bt;throw ud(new U,e)}),x.fO=(function(){return!0}),x.fP=(function(){return!1}),x.dx=(function(e){return this}),x.a3=(function(e,t){return e.d(this.bt)}),new T().i(Kd,`scala.util.Failure`,{bo:1,bq:1,c:1,G:1,a:1});function qd(e){this.aX=null,this.aX=e}x=qd.prototype=new Pu,x.constructor=qd,x.f=(function(){return F().cs(this,-1750213842,!0)}),x.c=(function(e){return this===e||e instanceof qd&&A().w(this.aX,e.aX)}),x.h=(function(){return j().dl(this)}),x.A=(function(){return 1}),x.C=(function(){return`Success`}),x.B=(function(e){if(e===0)return this.aX;throw ud(new U,e)}),x.fO=(function(){return!1}),x.fP=(function(){return!0}),x.dx=(function(e){try{return new qd(e.d(this.aX))}catch(e){var t=e instanceof P?e:new X(e),n=Rs().cv(t);if(!n.b())return new Kd(n.l());throw t instanceof X?t.p:t}}),x.a3=(function(e,t){try{return t.d(this.aX)}catch(t){var n=t instanceof P?t:new X(t),r=Rs().cv(n);if(!r.b()){var i=r.l();return e.d(i)}throw n instanceof X?n.p:n}}),new T().i(qd,`scala.util.Success`,{bp:1,bq:1,c:1,G:1,a:1});var Jd=class e extends Qc{constructor(e,t){super(),this.b5=null,this.b4=null,this.b5=e,this.b4=t,N(this,`ErrorHandlingError: `+I().b2(e)+`; cause: `+I().b2(t),null,!0,!0),this.fM(t)}a5(){return new bd(this)}f(){return F().dr(this,-889275714,null)}c(t){if(this===t)return!0;if(t instanceof e){var n=this.b5,r=t.b5;if(n===null?r===null:n.c(r)){var i=this.b4,a=t.b4;return i===null?a===null:i.c(a)}return!1}return!1}A(){return 2}C(){return`ErrorHandlingError`}B(e){if(e===0)return this.b5;if(e===1)return this.b4;throw ld(new U,``+e)}h(){return`ErrorHandlingError: `+this.b5+`; cause: `+this.b4}};new T().i(Jd,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{ae:1,X:1,r:1,a:1,c:1,G:1});var Yd=class e extends Qc{constructor(e){super(),this.b6=null,this.b6=e,N(this,`ObserverError: `+I().b2(e),null,!0,!0)}a5(){return new bd(this)}f(){return F().dr(this,-889275714,null)}c(t){if(this===t)return!0;if(t instanceof e){var n=this.b6,r=t.b6;return n===null?r===null:n.c(r)}return!1}A(){return 1}C(){return`ObserverError`}B(e){if(e===0)return this.b6;throw ld(new U,``+e)}h(){return`ObserverError: `+this.b6}};new T().i(Yd,`com.raquo.airstream.core.AirstreamError$ObserverError`,{af:1,X:1,r:1,a:1,c:1,G:1});var Xd=class e extends Qc{constructor(e,t){super(),this.b8=null,this.b7=null,this.b8=e,this.b7=t,N(this,`ObserverErrorHandlingError: `+I().b2(e)+`; cause: `+I().b2(t),null,!0,!0),this.fM(t)}a5(){return new bd(this)}f(){return F().dr(this,-889275714,null)}c(t){if(this===t)return!0;if(t instanceof e){var n=this.b8,r=t.b8;if(n===null?r===null:n.c(r)){var i=this.b7,a=t.b7;return i===null?a===null:i.c(a)}return!1}return!1}A(){return 2}C(){return`ObserverErrorHandlingError`}B(e){if(e===0)return this.b8;if(e===1)return this.b7;throw ld(new U,``+e)}h(){return`ObserverErrorHandlingError: `+this.b8+`; cause: `+this.b7}};new T().i(Xd,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ag:1,X:1,r:1,a:1,c:1,G:1});var Zd=class e extends Qc{constructor(e,t){super(),this.aJ=null,this.aI=0,this.aJ=e,this.aI=t,N(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a5(){return new bd(this)}f(){var e=-889275714;return e=M().j(e,K(`TransactionDepthExceeded`)),e=M().j(e,M().r(this.aJ)),e=M().j(e,this.aI),M().y(e,2)}c(t){if(this===t)return!0;if(t instanceof e){if(this.aI===t.aI){var n=this.aJ,r=t.aJ;return n===null?r===null:n===r}return!1}return!1}A(){return 2}C(){return`TransactionDepthExceeded`}B(e){if(e===0)return this.aJ;if(e===1)return this.aI;throw ld(new U,``+e)}h(){return`TransactionDepthExceeded: `+this.aJ+`; maxDepth: `+this.aI}};new T().i(Zd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ah:1,X:1,r:1,a:1,c:1,G:1});function Qd(e){e.cu()}function $d(e){this.e2=null,this.cN=null,this.cL=null,this.cK=null,this.cM=null,this.e2=void 0,Gu(this),this.cL=e,this.cK=new Yf(this.cL,new V((()=>Wr(this)))),this.cM=this.cK}x=$d.prototype=new w,x.constructor=$d,x.bL=(function(){return this.e2}),x.bF=(function(){return Ur(this)}),x.h=(function(){return Wr(this)}),x.dD=(function(){return this.cM}),x.ib=(function(e,t){this.cL=e,Ff(this.cK,e,t)}),new T().i($d,`com.raquo.airstream.state.SourceVar`,{bL:1,a3:1,a4:1,Y:1,T:1,bN:1});function ef(e,t){this.bc=null,this.V=null,this.d2=null,this.at=null,this.eA=null,this.x=null,this.eA=e,this.x=t,this.bc=q(),ec(this),qu(this)}x=ef.prototype=new w,x.constructor=ef,x.ds=(function(){return this.bc}),x.W=(function(e){Da().bu(e,this,void 0)}),x.ci=(function(){return this.V}),x.fx=(function(e){this.V=e}),x.aH=(function(e){Zu(this,e)}),x.aG=(function(e){Qu(this,e)}),x.h=(function(){return`ReactiveHtmlElement(`+(this.x===null?`tag=`+this.eA.dB():this.x.outerHTML)+`)`}),x.q=(function(){return this.x}),new T().i(ef,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cG:1,Z:1,N:1,a7:1,ar:1,cE:1});function tf(e,t){return Object.is(e,t)}function nf(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=sr;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var rf=new T().i(0,`java.lang.Double`,{az:1,S:1,a:1,O:1,L:1,V:1},(e=>typeof e==`number`)),af=new T().i(0,`java.lang.Float`,{d2:1,S:1,a:1,O:1,L:1,V:1},(e=>hr(e))),of=new T().i(0,`java.lang.Integer`,{d4:1,S:1,a:1,O:1,L:1,V:1},(e=>mr(e)));function sf(e,t,n){if(n instanceof S){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function cf(e,t){return e^t}var lf=new T().i(0,`java.lang.Long`,{aB:1,S:1,a:1,O:1,L:1,V:1},(e=>e instanceof S)),uf=class extends cd{constructor(e){super(),N(this,e,null,!0,!0)}};new T().i(uf,`java.lang.NumberFormatException`,{dc:1,aA:1,P:1,K:1,r:1,a:1});function K(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function df(e,t){return e===t}var ff=new T().i(0,`java.lang.String`,{dh:1,a:1,O:1,ab:1,L:1,V:1},(e=>typeof e==`string`));function pf(){}x=pf.prototype=new yd,x.constructor=pf,x.f=(function(){return 2433880}),x.h=(function(){return`None`}),x.A=(function(){return 0}),x.C=(function(){return`None`}),x.B=(function(e){throw ud(new U,e)}),x.hj=(function(){throw new hd(`None.get`)}),x.l=(function(){this.hj()}),new T().i(pf,`scala.None$`,{dC:1,aE:1,b:1,c:1,G:1,a:1});var mf;function q(){return mf||=new pf,mf}function J(e){this.bj=null,this.bj=e}x=J.prototype=new yd,x.constructor=J,x.f=(function(){return F().cs(this,1323286827,!0)}),x.c=(function(e){return this===e||e instanceof J&&A().w(this.bj,e.bj)}),x.h=(function(){return j().dl(this)}),x.A=(function(){return 1}),x.C=(function(){return`Some`}),x.B=(function(e){if(e===0)return this.bj;throw ud(new U,e)}),x.l=(function(){return this.bj}),new T().i(J,`scala.Some`,{aF:1,aE:1,b:1,c:1,G:1,a:1});function hf(){}x=hf.prototype=new w,x.constructor=hf;function gf(){}gf.prototype=x,x.t=(function(){return-1}),x.b1=(function(e){ns(this,e)}),x.aY=(function(e,t,n,r){return is(this,e,t,n,r)}),x.aE=(function(){return this.b3()});function Y(e){this.c4=null,this.a0=0,this.bk=0,this.c4=e,this.a0=0,this.bk=Io().bI(this.c4)}x=Y.prototype=new wu,x.constructor=Y,x.t=(function(){return this.bk-this.a0|0}),x.n=(function(){return this.a0<this.bk}),x.k=(function(){this.a0>=Io().bI(this.c4)&&Hl().J.k();var e=j().b0(this.c4,this.a0);return this.a0=1+this.a0|0,e}),x.ch=(function(e){if(e>0){var t=this.a0+e|0;if(t<0)var n=this.bk;else var r=this.bk,n=r<t?r:t;this.a0=n}return this}),new T().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{dK:1,Q:1,b:1,d:1,R:1,a:1});function _f(e,t){return t<0?0:t>e.Q?e.Q:t}function vf(e){this.f7=null,this.ab=0,this.Q=0,this.f7=e,this.ab=0,this.Q=e.e()}x=vf.prototype=new wu,x.constructor=vf,x.t=(function(){return this.Q}),x.n=(function(){return this.Q>0}),x.k=(function(){if(this.Q>0){var e=this.f7.i(this.ab);return this.ab=1+this.ab|0,this.Q=this.Q-1|0,e}return Hl().J.k()}),x.ch=(function(e){if(e>0){this.ab=this.ab+e|0;var t=this.Q-e|0;this.Q=t<0?0:t}return this}),x.bQ=(function(e,t){var n=_f(this,e),r=_f(this,t)-n|0;return this.Q=r<0?0:r,this.ab=this.ab+n|0,this}),new T().i(vf,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dP:1,Q:1,b:1,d:1,R:1,a:1});function yf(e){return e.fc||=(e.fb=new Fp(new(Yl.r()).C(0)),!0),e.fb}function bf(){this.gn=null,this.fb=null,this.fc=!1,xf=this,this.gn=new xd(this)}x=bf.prototype=new w,x.constructor=bf,x.hg=(function(e,t){return e instanceof Tp?e:this.iw(Go().fG(e,t))}),x.iw=(function(e){if(e===null)return null;if(e instanceof xr)return new Fp(e);if(e instanceof Dr)return new Np(e);if(e instanceof Ar)return new jp(e);if(e instanceof Or)return new Pp(e);if(e instanceof kr)return new Mp(e);if(e instanceof wr)return new Ap(e);if(e instanceof Tr)return new kp(e);if(e instanceof Er)return new Ip(e);if(e instanceof Cr)return new Op(e);if(jo(e,1))return new Lp(e);throw new _d(e)}),x.du=(function(e,t){return this.hg(e,t)}),new T().i(bf,`scala.collection.immutable.ArraySeq$`,{e3:1,a:1,aI:1,aG:1,aH:1,aL:1});var xf;function Sf(){return xf||=new bf,xf}function Cf(){this.go=null,this.fe=null,wf=this,this.go=new xd(this),this.fe=new Yp(new xr(0))}x=Cf.prototype=new w,x.constructor=Cf,x.hh=(function(e,t){return this.hG(Go().fG(e,t))}),x.hG=(function(e){if(e===null)return null;if(e instanceof xr)return new Yp(e);if(e instanceof Dr)return new qp(e);if(e instanceof Ar)return new Gp(e);if(e instanceof Or)return new Jp(e);if(e instanceof kr)return new Kp(e);if(e instanceof wr)return new Wp(e);if(e instanceof Tr)return new Up(e);if(e instanceof Er)return new Xp(e);if(e instanceof Cr)return new Hp(e);if(jo(e,1))return new Zp(e);throw new _d(e)}),x.du=(function(e,t){return this.hh(e,t)}),new T().i(Cf,`scala.collection.mutable.ArraySeq$`,{ea:1,a:1,aI:1,aG:1,aH:1,aL:1});var wf;function Tf(){return wf||=new Cf,wf}function Ef(){}x=Ef.prototype=new rd,x.constructor=Ef;function Df(){}Df.prototype=x;function Of(e){return e.aE()+`(<not computed>)`}function kf(){}x=kf.prototype=new w,x.constructor=kf;function Af(){}Af.prototype=x;var X=class e extends bu{constructor(e){super(),this.p=null,this.p=e,N(this,null,null,!0,!0)}bJ(){return rr(this.p)}C(){return`JavaScriptException`}A(){return 1}B(e){return e===0?this.p:M().hx(e)}a5(){return new Hd(this)}f(){return F().cs(this,1744042595,!0)}c(t){return this===t||t instanceof e&&A().w(this.p,t.p)}};new T().i(X,`scala.scalajs.js.JavaScriptException`,{bm:1,P:1,K:1,r:1,a:1,G:1,c:1});function jf(e,t){e.dy()!==void 0&&e.dk($r().fT()),e.fR(t)}function Mf(e){var t=e.dy();if(t===void 0){e.dk($r().fT());var n=e.dt();jf(e,n);var r=n}else var r=t;return r}function Nf(e,t,n){Ff(e,new qd(t),n)}function Pf(e,t,n){Ff(e,new Kd(t),n)}function Ff(e,t,n){jf(e,t);var r=t.fO(),i=!1;i=!1,e.cl(!1);for(var a=e.bH(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bM(t),r&&!i&&(i=!0)}for(var c=e.bK(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.hM(t,n),r&&!i&&(i=!0)}e.cl(!0);var d=e.dz();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].X(),f=1+f|0;d.length=0}r&&!i&&t.a3(new H((e=>{I().Z(e)})),new H((e=>void 0)))}function If(e,t){typeof console<`u`&&(e.eV&&console.error?console.error(t):console.log(t))}function Lf(e){this.eV=!1,this.bg=null,this.eV=e,new dd,this.bg=``}x=Lf.prototype=new Df,x.constructor=Lf,x.hC=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bg=``+this.bg+t,t=``;else{var r=this.bg,i=t;If(this,``+r+i.substring(0,n)),this.bg=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(Lf,`java.lang.JSConsoleBasedPrintStream`,{d7:1,cV:1,cU:1,av:1,at:1,ax:1,au:1,aw:1});function Rf(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.H();i=a,r=o}}function zf(){this.bq=null}x=zf.prototype=new Af,x.constructor=zf;function Bf(){}Bf.prototype=x,x.h=(function(){return this.bq}),x.c=(function(e){return this===e}),x.f=(function(){return dr(this)});function Vf(){}x=Vf.prototype=new gf,x.constructor=Vf;function Hf(){}Hf.prototype=x,x.h=(function(){return Of(this)});function Uf(){this.bq=null,this.bq=`Any`,tm()}x=Uf.prototype=new Bf,x.constructor=Uf,x.g3=(function(){return E.l()}),x.fS=(function(e){return new xr(e)}),new T().i(Uf,`scala.reflect.ManifestFactory$AnyManifest$`,{em:1,bi:1,bh:1,a:1,bj:1,be:1,c:1,bf:1,bg:1});var Wf;function Gf(){return Wf||=new Uf,Wf}function Kf(){this.bq=null,this.bq=`Object`,tm()}x=Kf.prototype=new Bf,x.constructor=Kf,x.g3=(function(){return E.l()}),x.fS=(function(e){return new xr(e)}),new T().i(Kf,`scala.reflect.ManifestFactory$ObjectManifest$`,{en:1,bi:1,bh:1,a:1,bj:1,be:1,c:1,bf:1,bg:1});var qf;function Jf(){return qf||=new Kf,qf}function Yf(e,t){this.e7=null,this.e6=!1,this.e8=null,this.cO=0,this.e4=null,this.e5=null,this.eb=!1,this.cP=null,this.e9=null,this.ea=0,this.e9=t,this.e7=void 0,tl(this),this.cO=0,Fu(this),this.cP=void 0,this.ea=1,jf(this,e)}x=Yf.prototype=new w,x.constructor=Yf,x.bL=(function(){return this.e7}),x.h=(function(){return Wr(this)}),x.dw=(function(){return this.e6}),x.dz=(function(){return this.e8}),x.cl=(function(e){this.e6=e}),x.dA=(function(e){this.e8=e}),x.fX=(function(){}),x.c=(function(e){return this===e}),x.f=(function(){return dr(this)}),x.dj=(function(){return this.cO}),x.dk=(function(e){this.cO=e}),x.dD=(function(){return this}),x.fW=(function(){Qd(this)}),x.bH=(function(){return this.e4}),x.bK=(function(){return this.e5}),x.g9=(function(){return this.eb}),x.cx=(function(e){this.eb=e}),x.fv=(function(e){this.e4=e}),x.fw=(function(e){this.e5=e}),x.dy=(function(){return this.cP}),x.fR=(function(e){this.cP=e}),x.cu=(function(){return Mf(this)}),x.g8=(function(){return this.ea}),x.dt=(function(){return Mf(this)}),x.fZ=(function(){}),x.bF=(function(){return this.e9.X()+`.signal`}),new T().i(Yf,`com.raquo.airstream.state.VarSignal`,{bQ:1,a3:1,T:1,ai:1,ak:1,a4:1,al:1,am:1,an:1,bM:1});function Z(e,t){return e===t?!0:Xf(t)&&t.dq(e)?e.ct(t):!1}function Xf(e){return!!(e&&e.$classData&&e.$classData.n.g)}function Zf(e){e.cF=e.a7!==null,e.bU=-1}function Qf(e){if(Vu(e.a7),e.cF){var t=e.a7.dj();t!==e.bU&&$f(e,e.dt(),t)}}function $f(e,t,n){jf(e,t),e.bU=n}function ep(e,t,n){e.cF&&(e.bU=e.a7.dj())}function tp(e){Ru(e.a7,e,!1),Qd(e)}function np(e){il(e.a7,e)}function rp(e,t,n){this.dR=null,this.dQ=!1,this.dS=null,this.cD=0,this.dO=null,this.dP=null,this.dU=!1,this.cE=null,this.cF=!1,this.bU=0,this.a7=null,this.cG=null,this.cH=null,this.dT=0,this.a7=e,this.cG=t,this.cH=n,this.dR=void 0,tl(this),this.cD=0,Fu(this),this.cE=void 0,Zf(this),this.dT=1+e.g8()|0}x=rp.prototype=new w,x.constructor=rp,x.bL=(function(){return this.dR}),x.bF=(function(){return Ur(this)}),x.h=(function(){return Wr(this)}),x.dw=(function(){return this.dQ}),x.dz=(function(){return this.dS}),x.cl=(function(e){this.dQ=e}),x.dA=(function(e){this.dS=e}),x.c=(function(e){return this===e}),x.f=(function(){return dr(this)}),x.dj=(function(){return this.cD}),x.dk=(function(e){this.cD=e}),x.dD=(function(){return this}),x.bH=(function(){return this.dO}),x.bK=(function(){return this.dP}),x.g9=(function(){return this.dU}),x.cx=(function(e){this.dU=e}),x.fv=(function(e){this.dO=e}),x.fw=(function(e){this.dP=e}),x.dy=(function(){return this.cE}),x.fR=(function(e){this.cE=e}),x.cu=(function(){return Mf(this)}),x.fZ=(function(){Qf(this)}),x.fW=(function(){tp(this)}),x.fX=(function(){np(this)}),x.g8=(function(){return this.dT}),x.hM=(function(e,t){ep(this,e,t),e.a3(new H((e=>{var n=this.cH;if(n.b())Pf(this,e,t);else{var r=n.l();try{var i=new qd(r.bE(e,new H((e=>null))))}catch(e){var a=e instanceof P?e:new X(e);matchResult1:{var i,o=Rs().cv(a);if(!o.b()){var i=new Kd(o.l());break matchResult1}throw a instanceof X?a.p:a}}i.a3(new H((e=>(n=>{Pf(this,new Jd(n,e),t)}))(e)),new H((e=>(n=>{n===null?Pf(this,e,t):n.b()||Nf(this,n.l(),t)}))(e)))}})),new H((n=>{Ff(this,e.dx(this.cG),t)})))}),x.dt=(function(){var e=this.a7.cu().dx(this.cG);return e.a3(new H((t=>{var n=this.cH;if(n.b())return e;var r=n.l();try{var i=new qd(r.bE(t,new H((e=>null))))}catch(e){var a=e instanceof P?e:new X(e);matchResult1:{var i,o=Rs().cv(a);if(!o.b()){var i=new Kd(o.l());break matchResult1}throw a instanceof X?a.p:a}}return i.a3(new H((e=>(t=>new Kd(new Jd(t,e))))(t)),new H((t=>{if(t===null)return e;var n=t.b()?q():new J(new qd(t.l()));return n.b()?e:n.l()})))})),new H((t=>e)))}),new T().i(rp,`com.raquo.airstream.misc.MapSignal`,{bD:1,a3:1,T:1,ai:1,ak:1,a4:1,al:1,am:1,an:1,aj:1,br:1,bs:1});function ip(){}x=ip.prototype=new gf,x.constructor=ip;function ap(){}ap.prototype=x,x.bE=(function(e,t){return Ic(this,e,t)}),x.fN=(function(e){return Ou(this,e)}),x.b=(function(){return ku(this)}),x.ct=(function(e){return Au(this,e)}),x.dq=(function(e){return!0}),x.c=(function(e){return Z(this,e)}),x.f=(function(){return F().g4(this)}),x.h=(function(){return Sd(this)}),x.aF=(function(e){return this.fN(e|0)});function op(){}x=op.prototype=new Hf,x.constructor=op;function sp(){}sp.prototype=x;function cp(e){return!!(e&&e.$classData&&e.$classData.n.m)}function lp(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function up(e){e.gd=Ra()}function dp(e,t){return e.bn=t,e}function fp(){this.bn=null}x=fp.prototype=new sp,x.constructor=fp;function pp(){}pp.prototype=x,x.i=(function(e){return this.bn.i(e)}),x.e=(function(){return this.bn.e()}),x.b=(function(){return this.bn.b()});function mp(){this.ek=null,this.el=!1,this.eg=null,this.eh=!1,this.ei=null,this.ej=!1,this.ge=null,this.ef=null,this.gc=null,this.em=null,this.en=!1,this.gd=null,Ji(this),Ui(this),Vi(this),Hi(this),up(this)}x=mp.prototype=new w,x.constructor=mp,x.ij=(function(){return this.el||=(this.ek=tc(new nc,`strong`,!1),!0),this.ek}),x.cg=(function(){return this.eh||=(this.eg=tc(new nc,`div`,!1),!0),this.eg}),x.cp=(function(){return this.ej||=(this.ei=new Gs(`click`),!0),this.ei}),x.il=(function(){return this.en||=(this.em=new ou(this),!0),this.em}),new T().i(mp,`com.raquo.laminar.api.package$$anon$1`,{bZ:1,ca:1,c3:1,c8:1,c7:1,c9:1,c5:1,bX:1,bT:1,bW:1,ap:1,aq:1,ao:1,bU:1});function hp(e){this.bn=null,dp(this,e)}x=hp.prototype=new pp,x.constructor=hp,x.a4=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.t=(function(){return this.e()}),x.g=(function(){return new vf(this)}),x.b3=(function(){return`IndexedSeqView`}),new T().i(hp,`scala.collection.IndexedSeqView$Id`,{dO:1,dY:1,dI:1,dJ:1,l:1,b:1,d:1,j:1,i:1,h:1,a:1,e1:1,k:1,dX:1,o:1,dN:1});function gp(){}x=gp.prototype=new ap,x.constructor=gp;function _p(){}_p.prototype=x;function vp(e,t){return!bp(t)||e.e()===t.e()}function yp(e,t){if(bp(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.dp(),o=t.dp(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=A().w(e.i(i),t.i(i)),i=1+i|0;if(i<n&&r)for(var p=e.g().ch(i),m=t.g().ch(i);r&&p.n();)r=A().w(p.k(),m.k())}return r}return Au(e,t)}function bp(e){return!!(e&&e.$classData&&e.$classData.n.t)}function xp(){}x=xp.prototype=new ap,x.constructor=xp;function Sp(){}Sp.prototype=x;function Q(e){this.cb=null,this.cb=e}x=Q.prototype=new w,x.constructor=Q,x.dq=(function(e){return vp(this,e)}),x.ct=(function(e){return yp(this,e)}),x.dp=(function(){return ds().fd}),x.g=(function(){return new vf(new hp(this))}),x.a4=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.t=(function(){return this.e()}),x.c=(function(e){return Z(this,e)}),x.f=(function(){return F().g4(this)}),x.h=(function(){return Sd(this)}),x.b=(function(){return ku(this)}),x.bE=(function(e,t){return Ic(this,e,t)}),x.b1=(function(e){ns(this,e)}),x.aY=(function(e,t,n,r){return is(this,e,t,n,r)}),x.e=(function(){return this.cb.length|0}),x.i=(function(e){return this.cb[e]}),x.aE=(function(){return`WrappedVarArgs`}),x.aF=(function(e){return Ou(this,e|0)}),x.d=(function(e){return this.i(e|0)}),new T().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{bn:1,t:1,b:1,d:1,j:1,i:1,h:1,u:1,e:1,f:1,k:1,c:1,g:1,w:1,v:1,o:1,m:1,I:1,x:1,p:1,q:1,a:1});function Cp(){}x=Cp.prototype=new Sp,x.constructor=Cp;function wp(){}wp.prototype=x,x.fo=(function(e){return Lc(this,e)});function Tp(){}x=Tp.prototype=new _p,x.constructor=Tp;function Ep(){}Ep.prototype=x,x.a4=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.t=(function(){return this.e()}),x.b3=(function(){return`IndexedSeq`}),x.dq=(function(e){return vp(this,e)}),x.ct=(function(e){return yp(this,e)}),x.aE=(function(){return`ArraySeq`}),x.dp=(function(){return 2147483647});function $(){}x=$.prototype=new Sp,x.constructor=$;function Dp(){}Dp.prototype=x,x.a4=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.t=(function(){return this.e()}),x.b3=(function(){return`IndexedSeq`}),x.aE=(function(){return`ArraySeq`}),x.c=(function(e){return e instanceof $&&Io().bI(this.S())!==Io().bI(e.S())?!1:Z(this,e)});function Op(e){this.au=null,this.au=e}x=Op.prototype=new Ep,x.constructor=Op,x.e=(function(){return this.au.a.length}),x.bD=(function(e){return this.au.a[e]}),x.f=(function(){var e=F();return e.s(this.au,e.o)}),x.c=(function(e){return e instanceof Op?k().fD(this.au,e.au):Z(this,e)}),x.g=(function(){return new Y(this.au)}),x.i=(function(e){return this.bD(e)}),x.d=(function(e){return this.bD(e|0)}),new T().i(Op,`scala.collection.immutable.ArraySeq$ofBoolean`,{aP:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function kp(e){this.av=null,this.av=e}x=kp.prototype=new Ep,x.constructor=kp,x.e=(function(){return this.av.a.length}),x.bv=(function(e){return this.av.a[e]}),x.f=(function(){var e=F();return e.s(this.av,e.o)}),x.c=(function(e){return e instanceof kp?k().fy(this.av,e.av):Z(this,e)}),x.g=(function(){return new Y(this.av)}),x.i=(function(e){return this.bv(e)}),x.d=(function(e){return this.bv(e|0)}),new T().i(kp,`scala.collection.immutable.ArraySeq$ofByte`,{aQ:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Ap(e){this.ae=null,this.ae=e}x=Ap.prototype=new Ep,x.constructor=Ap,x.e=(function(){return this.ae.a.length}),x.bw=(function(e){return this.ae.a[e]}),x.f=(function(){var e=F();return e.s(this.ae,e.o)}),x.c=(function(e){return e instanceof Ap?k().fz(this.ae,e.ae):Z(this,e)}),x.g=(function(){return new Y(this.ae)}),x.aY=(function(e,t,n,r){return new Wp(this.ae).aY(e,t,n,r)}),x.i=(function(e){return gr(this.bw(e))}),x.d=(function(e){return gr(this.bw(e|0))}),new T().i(Ap,`scala.collection.immutable.ArraySeq$ofChar`,{aR:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function jp(e){this.aw=null,this.aw=e}x=jp.prototype=new Ep,x.constructor=jp,x.e=(function(){return this.aw.a.length}),x.bx=(function(e){return this.aw.a[e]}),x.f=(function(){var e=F();return e.s(this.aw,e.o)}),x.c=(function(e){if(e instanceof jp){var t=this.aw,n=e.aw;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.g=(function(){return new Y(this.aw)}),x.i=(function(e){return this.bx(e)}),x.d=(function(e){return this.bx(e|0)}),new T().i(jp,`scala.collection.immutable.ArraySeq$ofDouble`,{aS:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Mp(e){this.ax=null,this.ax=e}x=Mp.prototype=new Ep,x.constructor=Mp,x.e=(function(){return this.ax.a.length}),x.by=(function(e){return this.ax.a[e]}),x.f=(function(){var e=F();return e.s(this.ax,e.o)}),x.c=(function(e){if(e instanceof Mp){var t=this.ax,n=e.ax;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Z(this,e)}),x.g=(function(){return new Y(this.ax)}),x.i=(function(e){return this.by(e)}),x.d=(function(e){return this.by(e|0)}),new T().i(Mp,`scala.collection.immutable.ArraySeq$ofFloat`,{aT:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Np(e){this.ay=null,this.ay=e}x=Np.prototype=new Ep,x.constructor=Np,x.e=(function(){return this.ay.a.length}),x.bz=(function(e){return this.ay.a[e]}),x.f=(function(){var e=F();return e.s(this.ay,e.o)}),x.c=(function(e){return e instanceof Np?k().fA(this.ay,e.ay):Z(this,e)}),x.g=(function(){return new Y(this.ay)}),x.i=(function(e){return this.bz(e)}),x.d=(function(e){return this.bz(e|0)}),new T().i(Np,`scala.collection.immutable.ArraySeq$ofInt`,{aU:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Pp(e){this.az=null,this.az=e}x=Pp.prototype=new Ep,x.constructor=Pp,x.e=(function(){return this.az.a.length>>>1|0}),x.bA=(function(e){var t=this.az.a,n=e<<1;return C(t[n],t[n+1|0])}),x.f=(function(){var e=F();return e.s(this.az,e.o)}),x.c=(function(e){return e instanceof Pp?k().fB(this.az,e.az):Z(this,e)}),x.g=(function(){return new Y(this.az)}),x.i=(function(e){return this.bA(e)}),x.d=(function(e){return this.bA(e|0)}),new T().i(Pp,`scala.collection.immutable.ArraySeq$ofLong`,{aV:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Fp(e){this.aA=null,this.aA=e}x=Fp.prototype=new Ep,x.constructor=Fp,x.e=(function(){return this.aA.a.length}),x.i=(function(e){return this.aA.a[e]}),x.f=(function(){var e=F();return e.s(this.aA,e.o)}),x.c=(function(e){return e instanceof Fp?Go().fE(this.aA,e.aA):Z(this,e)}),x.g=(function(){return new Y(this.aA)}),x.d=(function(e){return this.i(e|0)}),new T().i(Fp,`scala.collection.immutable.ArraySeq$ofRef`,{aW:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Ip(e){this.aB=null,this.aB=e}x=Ip.prototype=new Ep,x.constructor=Ip,x.e=(function(){return this.aB.a.length}),x.bB=(function(e){return this.aB.a[e]}),x.f=(function(){var e=F();return e.s(this.aB,e.o)}),x.c=(function(e){return e instanceof Ip?k().fC(this.aB,e.aB):Z(this,e)}),x.g=(function(){return new Y(this.aB)}),x.i=(function(e){return this.bB(e)}),x.d=(function(e){return this.bB(e|0)}),new T().i(Ip,`scala.collection.immutable.ArraySeq$ofShort`,{aX:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Lp(e){this.aW=null,this.aW=e}x=Lp.prototype=new Ep,x.constructor=Lp,x.e=(function(){return this.aW.a.length}),x.bC=(function(e){}),x.f=(function(){var e=F();return e.s(this.aW,e.o)}),x.c=(function(e){return e instanceof Lp?this.aW.a.length===e.aW.a.length:Z(this,e)}),x.g=(function(){return new Y(this.aW)}),x.i=(function(e){this.bC(e)}),x.d=(function(e){this.bC(e|0)}),new T().i(Lp,`scala.collection.immutable.ArraySeq$ofUnit`,{aY:1,H:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Rp(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.H();a=o,i=s;continue}return-1}}function zp(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&A().w(i.T(),r.T())){var s=i.H(),c=r.H();i=s,r=c;continue}return a&&o}}function Bp(){}x=Bp.prototype=new _p,x.constructor=Bp;function Vp(){}Vp.prototype=x,x.fN=(function(e){return jd(this,e)}),x.i=(function(e){return Md(this,e)}),x.ct=(function(e){return Nd(this,e)}),x.b3=(function(){return`LinearSeq`}),x.g=(function(){return new Fd(this)}),x.gs=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new Qp(e.T(),this),n=t,r=e.H();!r.b();){var i=new Qp(r.T(),this);n.bp=i,n=i,r=r.H()}return t}),x.b=(function(){return this===tm()}),x.g0=(function(e){if(e instanceof Bp)return this.gs(e);if(e.t()===0)return this;var t=e.g();if(t.n()){for(var n=new Qp(t.k(),this),r=n;t.n();){var i=new Qp(t.k(),this);r.bp=i,r=i}return n}return this}),x.b1=(function(e){for(var t=this;!t.b();)e.d(t.T()),t=t.H()}),x.e=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.H();return t}),x.a4=(function(e){return e<0?1:Rp(this,e,0,this)}),x.aE=(function(){return`List`}),x.c=(function(e){return e instanceof Bp?zp(this,this,e):Z(this,e)}),x.h5=(function(e){return Rf(this,e,this)}),x.aF=(function(e){return jd(this,e|0)}),x.d=(function(e){return Md(this,e|0)});function Hp(e){this.af=null,this.af=e}x=Hp.prototype=new Dp,x.constructor=Hp,x.e=(function(){return this.af.a.length}),x.bD=(function(e){return this.af.a[e]}),x.f=(function(){var e=F();return e.s(this.af,e.o)}),x.c=(function(e){return e instanceof Hp?k().fD(this.af,e.af):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.af)}),x.S=(function(){return this.af}),x.i=(function(e){return this.bD(e)}),x.d=(function(e){return this.bD(e|0)}),new T().i(Hp,`scala.collection.mutable.ArraySeq$ofBoolean`,{b1:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Up(e){this.ag=null,this.ag=e}x=Up.prototype=new Dp,x.constructor=Up,x.e=(function(){return this.ag.a.length}),x.bv=(function(e){return this.ag.a[e]}),x.f=(function(){var e=F();return e.s(this.ag,e.o)}),x.c=(function(e){return e instanceof Up?k().fy(this.ag,e.ag):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.ag)}),x.S=(function(){return this.ag}),x.i=(function(e){return this.bv(e)}),x.d=(function(e){return this.bv(e|0)}),new T().i(Up,`scala.collection.mutable.ArraySeq$ofByte`,{b2:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Wp(e){this.M=null,this.M=e}x=Wp.prototype=new Dp,x.constructor=Wp,x.e=(function(){return this.M.a.length}),x.bw=(function(e){return this.M.a[e]}),x.f=(function(){var e=F();return e.s(this.M,e.o)}),x.c=(function(e){return e instanceof Wp?k().fz(this.M,e.M):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.M)}),x.aY=(function(e,t,n,r){var i=e.G;t.length!==0&&(i.m=``+i.m+t);var a=this.M.a.length;if(a!==0){if(n===``)i.gA(this.M);else{i.e();var o=this.M.a[0],s=``+or(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.M.a[c],u=``+or(l);i.m+=u,c=1+c|0}}}return r.length!==0&&(i.m=``+i.m+r),e}),x.S=(function(){return this.M}),x.i=(function(e){return gr(this.bw(e))}),x.d=(function(e){return gr(this.bw(e|0))}),new T().i(Wp,`scala.collection.mutable.ArraySeq$ofChar`,{b3:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Gp(e){this.N=null,this.N=e}x=Gp.prototype=new Dp,x.constructor=Gp,x.e=(function(){return this.N.a.length}),x.bx=(function(e){return this.N.a[e]}),x.f=(function(){var e=F();return e.s(this.N,e.o)}),x.c=(function(e){if(e instanceof Gp){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return $.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.N)}),x.S=(function(){return this.N}),x.i=(function(e){return this.bx(e)}),x.d=(function(e){return this.bx(e|0)}),new T().i(Gp,`scala.collection.mutable.ArraySeq$ofDouble`,{b4:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Kp(e){this.O=null,this.O=e}x=Kp.prototype=new Dp,x.constructor=Kp,x.e=(function(){return this.O.a.length}),x.by=(function(e){return this.O.a[e]}),x.f=(function(){var e=F();return e.s(this.O,e.o)}),x.c=(function(e){if(e instanceof Kp){var t=e.O;if(this.O===t)return!0;if(this.O.a.length===t.a.length){for(var n=0;n<this.O.a.length&&this.O.a[n]===t.a[n];)n=1+n|0;return n>=this.O.a.length}return!1}return $.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.O)}),x.S=(function(){return this.O}),x.i=(function(e){return this.by(e)}),x.d=(function(e){return this.by(e|0)}),new T().i(Kp,`scala.collection.mutable.ArraySeq$ofFloat`,{b5:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function qp(e){this.ah=null,this.ah=e}x=qp.prototype=new Dp,x.constructor=qp,x.e=(function(){return this.ah.a.length}),x.bz=(function(e){return this.ah.a[e]}),x.f=(function(){var e=F();return e.s(this.ah,e.o)}),x.c=(function(e){return e instanceof qp?k().fA(this.ah,e.ah):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.ah)}),x.S=(function(){return this.ah}),x.i=(function(e){return this.bz(e)}),x.d=(function(e){return this.bz(e|0)}),new T().i(qp,`scala.collection.mutable.ArraySeq$ofInt`,{b6:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Jp(e){this.ai=null,this.ai=e}x=Jp.prototype=new Dp,x.constructor=Jp,x.e=(function(){return this.ai.a.length>>>1|0}),x.bA=(function(e){var t=this.ai.a,n=e<<1;return C(t[n],t[n+1|0])}),x.f=(function(){var e=F();return e.s(this.ai,e.o)}),x.c=(function(e){return e instanceof Jp?k().fB(this.ai,e.ai):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.ai)}),x.S=(function(){return this.ai}),x.i=(function(e){return this.bA(e)}),x.d=(function(e){return this.bA(e|0)}),new T().i(Jp,`scala.collection.mutable.ArraySeq$ofLong`,{b7:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Yp(e){this.aj=null,this.aj=e}x=Yp.prototype=new Dp,x.constructor=Yp,x.e=(function(){return this.aj.a.length}),x.i=(function(e){return this.aj.a[e]}),x.f=(function(){var e=F();return e.s(this.aj,e.o)}),x.c=(function(e){return e instanceof Yp?Go().fE(this.aj,e.aj):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.aj)}),x.S=(function(){return this.aj}),x.d=(function(e){return this.i(e|0)}),new T().i(Yp,`scala.collection.mutable.ArraySeq$ofRef`,{b8:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Xp(e){this.ak=null,this.ak=e}x=Xp.prototype=new Dp,x.constructor=Xp,x.e=(function(){return this.ak.a.length}),x.bB=(function(e){return this.ak.a[e]}),x.f=(function(){var e=F();return e.s(this.ak,e.o)}),x.c=(function(e){return e instanceof Xp?k().fC(this.ak,e.ak):$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.ak)}),x.S=(function(){return this.ak}),x.i=(function(e){return this.bB(e)}),x.d=(function(e){return this.bB(e|0)}),new T().i(Xp,`scala.collection.mutable.ArraySeq$ofShort`,{b9:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Zp(e){this.aC=null,this.aC=e}x=Zp.prototype=new Dp,x.constructor=Zp,x.e=(function(){return this.aC.a.length}),x.bC=(function(e){}),x.f=(function(){var e=F();return e.s(this.aC,e.o)}),x.c=(function(e){return e instanceof Zp?this.aC.a.length===e.aC.a.length:$.prototype.c.call(this,e)}),x.g=(function(){return new Y(this.aC)}),x.S=(function(){return this.aC}),x.i=(function(e){this.bC(e)}),x.d=(function(e){this.bC(e|0)}),new T().i(Zp,`scala.collection.mutable.ArraySeq$ofUnit`,{ba:1,J:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Qp(e,t){this.dg=null,this.bp=null,this.dg=e,this.bp=t}x=Qp.prototype=new Vp,x.constructor=Qp,x.a5=(function(){return new bd(this)}),x.A=(function(){return 2}),x.C=(function(){return`::`}),x.B=(function(e){if(e===0)return this.dg;if(e===1)return this.bp;throw ud(new U,e)}),x.T=(function(){return this.dg}),x.H=(function(){return this.bp}),new T().i(Qp,`scala.collection.immutable.$colon$colon`,{e2:1,ad:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,aK:1,a0:1,b0:1,aZ:1,p:1,q:1,aM:1,x:1,a:1,aO:1,G:1});function $p(){em=this,tm(),tm()}x=$p.prototype=new Vp,x.constructor=$p,x.a5=(function(){return new bd(this)}),x.A=(function(){return 0}),x.C=(function(){return`Nil`}),x.B=(function(e){throw ud(new U,e)}),x.hq=(function(){throw new hd(`head of empty list`)}),x.iq=(function(){throw new md(`tail of empty list`)}),x.t=(function(){return 0}),x.g=(function(){return Hl().J}),x.T=(function(){this.hq()}),x.H=(function(){this.iq()}),new T().i($p,`scala.collection.immutable.Nil$`,{e7:1,ad:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,aK:1,a0:1,b0:1,aZ:1,p:1,q:1,aM:1,x:1,a:1,aO:1,G:1});var em;function tm(){return em||=new $p,em}function nm(e,t){return e.G=t,e}function rm(e){return nm(e,new xu),e}function im(){this.G=null}x=im.prototype=new Sp,x.constructor=im,x.fo=(function(e){return Lc(this,e)}),x.g=(function(){return new vf(new hp(this))}),x.a4=(function(e){var t=this.G.e();return t===e?0:t<e?-1:1}),x.b3=(function(){return`IndexedSeq`}),x.e=(function(){return this.G.e()}),x.t=(function(){return this.G.e()}),x.gw=(function(e){var t=this.G,n=``+or(e);return t.m+=n,this}),x.h=(function(){return this.G.m}),x.b=(function(){return this.G.e()===0}),x.i=(function(e){return gr(this.G.ft(e))}),x.d=(function(e){var t=e|0;return gr(this.G.ft(t))}),x.dn=(function(e){return this.gw(vr(e))}),x.g2=(function(){return this.G.m}),new T().i(im,`scala.collection.mutable.StringBuilder`,{eh:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,bc:1,bd:1,bb:1,ef:1,o:1,m:1,C:1,B:1,ab:1,a:1});function am(e,t){return e.aD=t,e}function om(e){return am(e,[]),e}function sm(){this.aD=null}x=sm.prototype=new wp,x.constructor=sm,x.b3=(function(){return`IndexedSeq`}),x.g=(function(){return new vf(new hp(this))}),x.a4=(function(e){var t=this.aD.length|0;return t===e?0:t<e?-1:1}),x.i=(function(e){return this.aD[e]}),x.e=(function(){return this.aD.length|0}),x.t=(function(){return this.aD.length|0}),x.aE=(function(){return`WrappedArray`}),x.g2=(function(){return this}),x.dn=(function(e){return this.aD.push(e),this}),x.d=(function(e){var t=e|0;return this.aD[t]}),new T().i(sm,`scala.scalajs.js.WrappedArray`,{eE:1,e8:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,bc:1,bd:1,eg:1,eb:1,q:1,p:1,B:1,o:1,m:1,C:1,ed:1,bb:1,a:1}),Ha(new(ff.r()).C([]));