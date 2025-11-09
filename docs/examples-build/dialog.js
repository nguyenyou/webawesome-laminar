var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=e=>{throw TypeError(e)},o=(e,t,n,a)=>{for(var o=a>1?void 0:a?i(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(a?c(t,n,o):c(o))||o);return a&&o&&r(t,n,o),o},s=(e,t,n)=>t.has(e)||a(`Cannot `+n),c=(e,t,n)=>(s(e,t,`read from private field`),n?n.call(e):t.get(e)),l=(e,t,n)=>t.has(e)?a(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),u=(e,t,n,r)=>(s(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const d=globalThis,f=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,p=Symbol(),m=new WeakMap;var ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(f&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=m.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&m.set(t,e))}return e}toString(){return this.cssText}};const te=e=>new ee(typeof e==`string`?e:e+``,void 0,p),ne=(e,t)=>{if(f)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},re=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return te(t)})(e):e,{is:ie,defineProperty:ae,getOwnPropertyDescriptor:oe,getOwnPropertyNames:se,getOwnPropertySymbols:ce,getPrototypeOf:le}=Object,ue=globalThis,de=ue.trustedTypes,fe=de?de.emptyScript:``,pe=ue.reactiveElementPolyfillSupport,me=(e,t)=>e,he={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ge=(e,t)=>!ie(e,t),_e={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol(`metadata`),ue.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(me(`elementProperties`)))return;let e=le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me(`properties`))){let e=this.properties,t=[...se(e),...ce(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(re(e))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?he:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?he:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ge)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:`open`},ve[me(`elementProperties`)]=new Map,ve[me(`finalized`)]=new Map,pe?.({ReactiveElement:ve}),(ue.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ye=globalThis,be=ye.trustedTypes,xe=be?be.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Se=`$lit$`,Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,we=`?`+Ce,Te=`<${we}>`,Ee=document,De=()=>Ee.createComment(``),Oe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ke=Array.isArray,Ae=e=>ke(e)||typeof e?.[Symbol.iterator]==`function`,je=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,Fe=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ie=/'/g,Le=/"/g,Re=/^(?:script|style|textarea|title)$/i,ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Be=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ve=new WeakMap,He=Ee.createTreeWalker(Ee,129);function Ue(e,t){if(!ke(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return xe===void 0?t:xe.createHTML(t)}const We=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Me?c[1]===`!--`?o=Ne:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Fe):(Re.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Fe):o=Pe:o===Fe?c[0]===`>`?(o=i??Me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Fe:c[3]===`"`?Le:Ie):o===Le||o===Ie?o=Fe:o===Ne||o===Pe?o=Me:(o=Fe,i=void 0);let d=o===Fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Me?n+Te:l>=0?(r.push(s),n.slice(0,l)+Se+n.slice(l)+Ce+d):n+Ce+(l===-2?t:d)}return[Ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=We(t,n);if(this.el=e.createElement(l,r),He.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=He.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Se)){let t=u[o++],n=i.getAttribute(e).split(Ce),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Xe:r[1]===`?`?Ze:r[1]===`@`?Qe:Ye}),i.removeAttribute(e)}else e.startsWith(Ce)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Re.test(i.tagName)){let e=i.textContent.split(Ce),t=e.length-1;if(t>0){i.textContent=be?be.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],De()),He.nextNode(),c.push({type:2,index:++a});i.append(e[t],De())}}}else if(i.nodeType===8)if(i.data===we)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ce,e+1))!==-1;)c.push({type:7,index:a}),e+=Ce.length-1}a++}}static createElement(e,t){let n=Ee.createElement(`template`);return n.innerHTML=e,n}};function Ke(e,t,n=e,r){if(t===Be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Oe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ke(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ee).importNode(t,!0);He.currentNode=r;let i=He.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new $e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=He.nextNode(),a++)}return He.currentNode=Ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Oe(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Ge(e)),t}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(De()),this.O(De()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ke(this,e,t,0),a=!Oe(e)||e!==this._$AH&&e!==Be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ke(this,r[n+o],t,o),s===Be&&(s=this._$AH[o]),a||=!Oe(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Xe=class extends Ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ze=class extends Ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Qe=class extends Ye{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ke(this,e,t,0)??h)===Be)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const et={M:Se,P:Ce,A:we,C:1,L:We,R:qe,D:Ae,V:Ke,I:Je,H:Ye,N:Ze,U:Qe,B:Xe,F:$e},tt=ye.litHtmlPolyfillSupport;tt?.(Ge,Je),(ye.litHtmlVersions??=[]).push(`3.3.1`);const nt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Je(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i},rt=globalThis;var it=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};it._$litElement$=!0,it.finalized=!0,rt.litElementHydrateSupport?.({LitElement:it});const at=rt.litElementPolyfillSupport;at?.({LitElement:it}),(rt.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},st={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:ge},ct=(e=st,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return g({...e,state:!0,attribute:!1})}
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
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ft=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,pt,mt=class extends it{constructor(){super(),l(this,pt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?te(e):e)}attributeChangedCallback(e,t,n){c(this,pt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),u(this,pt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};pt=new WeakMap,o([g()],mt.prototype,`dir`,2),o([g()],mt.prototype,`lang`,2),o([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],mt.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ht=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},gt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),_t=class extends mt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ht))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[gt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};_t.formAssociated=!0,o([g({reflect:!0})],_t.prototype,`name`,2),o([g({type:Boolean})],_t.prototype,`disabled`,2),o([g({state:!0,attribute:!1})],_t.prototype,`valueHasChanged`,2),o([g({state:!0,attribute:!1})],_t.prototype,`hasInteracted`,2),o([g({attribute:`custom-error`,reflect:!0})],_t.prototype,`customError`,2),o([g({attribute:!1,state:!0,type:Object})],_t.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var vt=`@layer wa-utilities {
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
}
`,yt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},bt=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;const xt=new Set,St=new Map;let Ct,wt=`ltr`,Tt=`en`;const Et=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Et){let e=new MutationObserver(Ot);wt=document.documentElement.dir||`ltr`,Tt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Dt(...e){e.map(e=>{let t=e.$code.toLowerCase();St.has(t)?St.set(t,Object.assign(Object.assign({},St.get(t)),e)):St.set(t,e),Ct||=e}),Ot()}function Ot(){Et&&(wt=document.documentElement.dir||`ltr`,Tt=document.documentElement.lang||navigator.language),[...xt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var kt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xt.add(this.host)}hostDisconnected(){xt.delete(this.host)}dir(){return`${this.host.dir||wt}`.toLowerCase()}lang(){return`${this.host.lang||Tt}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:St.get(`${n}-${r}`),secondary:St.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ct&&Ct[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ct&&Ct[e])i=Ct[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},At={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Dt(At);var jt=At,Mt=class extends kt{};Dt(jt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Nt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Pt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ft=e=>(...t)=>({_$litDirective$:e,values:t});var It=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Lt=Ft(class extends It{constructor(e){if(super(e),e.type!==Pt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Be}}),_=e=>e??h,Rt=Symbol.for(``),zt=e=>{if(e?.r===Rt)return e?._$litStatic$},Bt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Rt}),Vt=new Map,Ht=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=zt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Vt.get(e))===void 0&&(o.raw=o,Vt.set(e,t=o)),n=s}return e(t,...n)})(ze);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ut=`@layer wa-component {
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
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance='plain']) {
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
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
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

.button.is-icon-button:has(wa-icon) {
  width: auto;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
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
    visibility: hidden;
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

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,v=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new yt(this,`[default]`,`start`,`end`),this.localize=new Mt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,n()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new ht)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Bt`a`:Bt`button`;return Ht`
      <${t}
        part="base"
        class=${Lt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
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
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ht`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ht`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};v.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},v.css=[Ut,vt,bt],o([dt(`.button`)],v.prototype,`button`,2),o([dt(`slot:not([name])`)],v.prototype,`labelSlot`,2),o([lt()],v.prototype,`invalid`,2),o([lt()],v.prototype,`isIconButton`,2),o([g()],v.prototype,`title`,2),o([g({reflect:!0})],v.prototype,`variant`,2),o([g({reflect:!0})],v.prototype,`appearance`,2),o([g({reflect:!0})],v.prototype,`size`,2),o([g({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),o([g({type:Boolean})],v.prototype,`disabled`,2),o([g({type:Boolean,reflect:!0})],v.prototype,`loading`,2),o([g({type:Boolean,reflect:!0})],v.prototype,`pill`,2),o([g()],v.prototype,`type`,2),o([g({reflect:!0})],v.prototype,`name`,2),o([g({reflect:!0})],v.prototype,`value`,2),o([g({reflect:!0})],v.prototype,`href`,2),o([g()],v.prototype,`target`,2),o([g()],v.prototype,`rel`,2),o([g()],v.prototype,`download`,2),o([g({reflect:!0})],v.prototype,`form`,2),o([g({attribute:`formaction`})],v.prototype,`formAction`,2),o([g({attribute:`formenctype`})],v.prototype,`formEnctype`,2),o([g({attribute:`formmethod`})],v.prototype,`formMethod`,2),o([g({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),o([g({attribute:`formtarget`})],v.prototype,`formTarget`,2),o([Nt(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),v=o([ot(`wa-button`)],v);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Wt=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
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
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,Gt=class extends mt{constructor(){super(...arguments),this.localize=new Mt(this)}render(){return ze`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Gt.css=Wt,Gt=o([ot(`wa-spinner`)],Gt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Kt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},qt=``;function Jt(e){qt=e}function Yt(){if(!qt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Jt(e.getAttribute(`data-fa-kit-code`)||``)}return qt}var Xt=`7.0.1`;function Zt(e,t,n){let r=Yt(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${Xt}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Xt}/svgs/${a}/${e}.svg`)}var Qt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Zt(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function $t(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var en={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},tn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=en[n][e]??en.regular[e]??en.regular[`circle-question`];return r?$t(r):``}},nn=`classic`,rn=[Qt,tn],an=[];function on(e){an.push(e)}function sn(e){an=an.filter(t=>t!==e)}function cn(e){return rn.find(t=>t.name===e)}function ln(){return nn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:un}=et,dn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,fn=e=>e.strings===void 0,pn={},mn=(e,t=pn)=>e._$AH=t;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var hn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},gn=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.125em;
}

/* Standard */
:host(:not([auto-width])) {
  width: 1.25em;
  height: 1em;
}

/* Auto-width */
:host([auto-width]) {
  width: auto;
  height: 1em;
}

svg {
  height: 1em;
  fill: currentColor;
  overflow: visible;

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
`,_n=Symbol(),vn=Symbol(),yn,bn=new Map,y=class extends mt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?_n:vn}catch{return vn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return _n;yn||=new DOMParser;let r=yn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):_n}catch{return _n}}}connectedCallback(){super.connectedCallback(),on(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sn(this)}getIconSource(){let e=cn(this.library),t=this.family||ln();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?cn(this.library):void 0;if(!e){this.svg=null;return}let r=bn.get(e);r||(r=this.resolveIcon(e,n),bn.set(e,r));let i=await r;if(i===vn&&bn.delete(e),e===this.getIconSource().url){if(dn(i)){this.svg=i;return}switch(i){case vn:case _n:this.svg=null,this.dispatchEvent(new hn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Kt)}}}updated(e){super.updated(e);let t=cn(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ze`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};y.css=gn,o([lt()],y.prototype,`svg`,2),o([g({reflect:!0})],y.prototype,`name`,2),o([g({reflect:!0})],y.prototype,`family`,2),o([g({reflect:!0})],y.prototype,`variant`,2),o([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),o([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),o([g()],y.prototype,`src`,2),o([g()],y.prototype,`label`,2),o([g({reflect:!0})],y.prototype,`library`,2),o([Nt(`label`)],y.prototype,`handleLabelChange`,1),o([Nt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],y.prototype,`setIcon`,1),y=o([ot(`wa-icon`)],y);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var xn=t({default:()=>v}),Sn=new Set;function Cn(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function wn(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function Tn(e){if(Sn.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=Cn()+wn(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function En(e){Sn.delete(e),Sn.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Dn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var On=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},kn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},An=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},jn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}};function Mn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Nn=`:host {
  --width: 31rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

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
`,Pn=class extends mt{constructor(){super(...arguments),this.localize=new Mt(this),this.hasSlotController=new yt(this,`footer`,`header-actions`,`label`),this.open=!1,this.label=``,this.withoutHeader=!1,this.lightDismiss=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(){this.open&&(this.addOpenListeners(),this.dialog.showModal(),Tn(this))}disconnectedCallback(){super.disconnectedCallback(),En(this),this.removeOpenListeners()}async requestClose(e){let t=new An({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,Mn(this.dialog,`pulse`);return}this.removeOpenListeners(),await Mn(this.dialog,`hide`),this.open=!1,this.dialog.close(),En(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new On)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains(`hide`)&&e.target===this.dialog&&this.requestClose(this.dialog)}handleDialogClick(e){let t=e.target.closest(`[data-dialog="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.dialog&&(this.lightDismiss?this.requestClose(this.dialog):await Mn(this.dialog,`pulse`))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open&&(this.open=!0,this.requestClose(this.dialog))}async show(){let e=new jn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Tn(this),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await Mn(this.dialog,`show`),this.dispatchEvent(new kn)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`);return ze`
      <dialog
        part="dialog"
        class=${Lt({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?ze`
              <header part="header" class="header">
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
              </header>
            `:``}

        <div part="body" class="body"><slot></slot></div>

        ${t?ze`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:``}
      </dialog>
    `}};Pn.css=Nn,o([dt(`.dialog`)],Pn.prototype,`dialog`,2),o([g({type:Boolean,reflect:!0})],Pn.prototype,`open`,2),o([g({reflect:!0})],Pn.prototype,`label`,2),o([g({attribute:`without-header`,type:Boolean,reflect:!0})],Pn.prototype,`withoutHeader`,2),o([g({attribute:`light-dismiss`,type:Boolean})],Pn.prototype,`lightDismiss`,2),o([Nt(`open`,{waitUntilFirstUpdate:!0})],Pn.prototype,`handleOpenChange`,1),Pn=o([ot(`wa-dialog`)],Pn),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-dialog]`);if(t instanceof Element){let[e,n]=Dn(t.getAttribute(`data-dialog`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-dialog`?e.open=!0:console.warn(`A dialog with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Fn=t({default:()=>Pn}),In=t({default:()=>y}),Ln=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Rn(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&zn(t)})}function zn(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=[...t.elements];if(n.length===1){t.requestSubmit(null);return}let r=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));r&&([`input`,`button`].includes(r.localName)?t.requestSubmit(r):r.click())}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Bn=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
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
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Vn=Ft(class extends It{constructor(e){if(super(e),e.type!==Pt.PROPERTY&&e.type!==Pt.ATTRIBUTE&&e.type!==Pt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!fn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Be||t===h)return t;let n=e.element,r=e.name;if(e.type===Pt.PROPERTY){if(t===n[r])return Be}else if(e.type===Pt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Be}else if(e.type===Pt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Be;return mn(e),t}});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Hn=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
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
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  background-color: var(--wa-form-control-background-color);
  box-shadow: var(--box-shadow);
  padding: 0 var(--wa-form-control-padding-inline);

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: var(--wa-transition-normal) color;
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

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
`,b=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new yt(this,`hint`,`label`),this.localize=new Mt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`medium`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Ln),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Rn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return ze`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?`false`:`true`}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
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
          .value=${Vn(this.value??``)}
          autocapitalize=${_(this.autocapitalize)}
          autocomplete=${_(this.autocomplete)}
          autocorrect=${_(this.autocorrect)}
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
                tabindex="-1"
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
        class=${Lt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};b.css=[bt,Bn,Hn],b.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},o([dt(`input`)],b.prototype,`input`,2),o([g()],b.prototype,`title`,2),o([g({reflect:!0})],b.prototype,`type`,2),o([lt()],b.prototype,`value`,1),o([g({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),o([g({reflect:!0})],b.prototype,`size`,2),o([g({reflect:!0})],b.prototype,`appearance`,2),o([g({type:Boolean,reflect:!0})],b.prototype,`pill`,2),o([g()],b.prototype,`label`,2),o([g({attribute:`hint`})],b.prototype,`hint`,2),o([g({attribute:`with-clear`,type:Boolean})],b.prototype,`withClear`,2),o([g()],b.prototype,`placeholder`,2),o([g({type:Boolean,reflect:!0})],b.prototype,`readonly`,2),o([g({attribute:`password-toggle`,type:Boolean})],b.prototype,`passwordToggle`,2),o([g({attribute:`password-visible`,type:Boolean})],b.prototype,`passwordVisible`,2),o([g({attribute:`without-spin-buttons`,type:Boolean})],b.prototype,`withoutSpinButtons`,2),o([g({reflect:!0})],b.prototype,`form`,2),o([g({type:Boolean,reflect:!0})],b.prototype,`required`,2),o([g()],b.prototype,`pattern`,2),o([g({type:Number})],b.prototype,`minlength`,2),o([g({type:Number})],b.prototype,`maxlength`,2),o([g()],b.prototype,`min`,2),o([g()],b.prototype,`max`,2),o([g()],b.prototype,`step`,2),o([g()],b.prototype,`autocapitalize`,2),o([g()],b.prototype,`autocorrect`,2),o([g()],b.prototype,`autocomplete`,2),o([g({type:Boolean})],b.prototype,`autofocus`,2),o([g()],b.prototype,`enterkeyhint`,2),o([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],b.prototype,`spellcheck`,2),o([g()],b.prototype,`inputmode`,2),o([g({attribute:`with-label`,type:Boolean})],b.prototype,`withLabel`,2),o([g({attribute:`with-hint`,type:Boolean})],b.prototype,`withHint`,2),o([Nt(`step`,{waitUntilFirstUpdate:!0})],b.prototype,`handleStepChange`,1),b=o([ot(`wa-input`)],b);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Un=t({default:()=>b}),x;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Wn;function Gn(e){this.c=e}x=Gn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function Kn(e){switch(typeof e){case`string`:return um.l();case`number`:return sr(e)?e<<24>>24===e?Gf.l():e<<16>>16===e?ep.l():rm.l():cr(e)?nm.l():tm.l();case`boolean`:return Kd.l();case`undefined`:return ls.l();default:return e instanceof M?om.l():e instanceof Gn?Yd.l():e&&e.$classData?e.$classData.l():null}}function qn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return sr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:cr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof Gn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jS()}}function Jn(e,t){switch(typeof e){case`string`:return cm(e,t);case`number`:return $p(e,t);case`boolean`:return Wd(e,t);case`undefined`:return os(e,t);default:return e&&e.$classData||e===null?e.i(t):e instanceof M?im(e,t):e instanceof Gn?Jd(ur(e),t):fr.prototype.i.call(e,t)}}function Yn(e){switch(typeof e){case`string`:return sm(e);case`number`:return em(e);case`boolean`:return Gd(e);case`undefined`:return ss(e);default:return e&&e.$classData||e===null?e.o():e instanceof M?am(e):e instanceof Gn?qd(ur(e)):fr.prototype.o.call(e)}}function Xn(e){return e===void 0?`undefined`:e.toString()}function Zn(e,t){if(t===0)throw new Wf(`/ by zero`);return e/t|0}function Qn(e,t){if(t===0)throw new Wf(`/ by zero`);return e%t|0}function $n(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function er(e){return String.fromCharCode(e)}function tr(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var nr=0,rr=new WeakMap;function ir(e){switch(typeof e){case`string`:return sm(e);case`number`:return em(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:sm(n);default:if(e===null)return 0;var r=rr.get(e);return r===void 0&&(r=nr+1|0,nr=r,rr.set(e,r)),r}}function ar(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function or(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function sr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function cr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function lr(e){return new Gn(e)}lr(0);function ur(e){return e===null?0:e.c}function dr(e){return e===null?Wn:e}function fr(){}x=fr.prototype,x.constructor=fr;function S(){}S.prototype=x,x.o=(function(){return ir(this)}),x.i=(function(e){return this===e}),x.t=(function(){var e=this.o();return qn(this)+`@`+(+(e>>>0)).toString(16)}),x.toString=(function(){return this.t()});function C(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=C.prototype=new S,x.constructor=C,x.am=(function(e,t,n,r){tr(this.a,e,t.a,n,r)}),x.ab=(function(){return new C(this.a.slice())});function pr(){}pr.prototype=x;function mr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=mr.prototype=new S,x.constructor=mr,x.am=(function(e,t,n,r){tr(this.a,e,t.a,n,r)}),x.ab=(function(){return new mr(this.a.slice())});function hr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}x=hr.prototype=new S,x.constructor=hr,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new hr(this.a.slice())});function gr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}x=gr.prototype=new S,x.constructor=gr,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new gr(this.a.slice())});function _r(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}x=_r.prototype=new S,x.constructor=_r,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new _r(this.a.slice())});function vr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}x=vr.prototype=new S,x.constructor=vr,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new vr(this.a.slice())});function yr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Wn}else this.a=e}x=yr.prototype=new S,x.constructor=yr,x.am=(function(e,t,n,r){tr(this.a,e,t.a,n,r)}),x.ab=(function(){return new yr(this.a.slice())});function br(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}x=br.prototype=new S,x.constructor=br,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new br(this.a.slice())});function xr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}x=xr.prototype=new S,x.constructor=xr,x.am=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ab=(function(){return new xr(this.a.slice())});function w(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=w.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new w().y(this,r,i)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new pr;n.constructor=t,n.am=(function(e,t,n,r){tr(this.a,e,t.a,n,r)}),n.ab=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Sr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new w().a(this),this.A}),x.l=(function(){return this.L||=new Gu(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===Cr)throw qf(new Jf);return new(this.r()).C(e)});var Sr=new w;Sr.n={},Sr.E=`Ljava.lang.Object;`,Sr.F=(e=>!e.X),Sr.N=`java.lang.Object`,Sr.I=(e=>e!==null),Sr.A=new w().y(Sr,C,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),fr.prototype.$classData=Sr;var Cr=new w().p(void 0,`V`,`void`,void 0,void 0);new w().p(!1,`Z`,`boolean`,mr,void 0);var wr=new w().p(0,`C`,`char`,hr,Uint16Array);new w().p(0,`B`,`byte`,gr,Int8Array),new w().p(0,`S`,`short`,_r,Int16Array),new w().p(0,`I`,`int`,vr,Int32Array);var Tr=new w().p(null,`J`,`long`,yr,void 0);new w().p(0,`F`,`float`,br,Float32Array),new w().p(0,`D`,`double`,xr,Float64Array);var Er=new w().i(1,`com.raquo.airstream.core.InternalObserver`,{am:1});function Dr(e){return Kn(e).dp()+`@`+e.o()}function Or(e){var t=e.cz();return t===void 0?e.cu():t}function kr(){this.dC=null,jr=this,this.dC=Mr().dz(new X((e=>void 0)),Ns().cm,!0)}x=kr.prototype=new S,x.constructor=kr;function Ar(){}Ar.prototype=x,x.dz=(function(e,t,n){return new Od(e,n,t,this)}),new w().i(kr,`com.raquo.airstream.core.Observer$`,{bp:1});var jr;function Mr(){return jr||=new kr,jr}function Nr(){}x=Nr.prototype=new S,x.constructor=Nr;function Pr(){}Pr.prototype=x,x.gz=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new w().i(Nr,`com.raquo.airstream.core.ObserverList$`,{br:1});var Fr;function Ir(){return Fr||=new Nr,Fr}function Lr(e){this.cF=null,this.dG=null,this.cG=0,this.cF=e,this.dG=void 0;var t=ri().bW();this.cG=t===void 0?1:1+t.cG|0,Ur().bY===-1||this.cG>Ur().bY?nu().al(new qp(this,Ur().bY)):Jr().C?Jr().aH.push(this)|0:ri().di(this)}x=Lr.prototype=new S,x.constructor=Lr;function Rr(){}Rr.prototype=x;var zr=new w().i(Lr,`com.raquo.airstream.core.Transaction`,{bs:1});function Br(){this.bY=0,this.dH=null,Hr=this,this.bY=1e3,this.dH=new X((e=>{throw W(new G,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=Br.prototype=new S,x.constructor=Br;function Vr(){}Vr.prototype=x,x.g9=(function(e){try{e.cF.g(e);var t=e.dG;if(t!==void 0)for(;t.jX();)t.jM().k1(e)}catch(e){var n=e instanceof xl?e:new $(e);nu().al(n)}}),new w().i(Br,`com.raquo.airstream.core.Transaction$`,{bt:1});var Hr;function Ur(){return Hr||=new Br,Hr}function Wr(e){e.bZ.length|0?new Lr(new X((t=>{for(;(e.bZ.length|0)>0;){var n=e.bZ.shift();try{n.g(t)}catch(e){var r=e instanceof xl?e:new $(e);nu().al(r)}}for(;(e.aH.length|0)>0;){var i=e.aH.shift();ri().di(i)}}))):(e.aH.length|0)>0&&new Lr(new X((t=>{for(;(e.aH.length|0)>0;)ri().di(e.aH.shift())})))}function Gr(){this.C=!1,this.bZ=null,this.aH=null,qr=this,this.C=!1,this.bZ=T().B(F().b(new(N.r()).C([]))),this.aH=T().B(F().b(new(zr.r()).C([])))}x=Gr.prototype=new S,x.constructor=Gr;function Kr(){}Kr.prototype=x,new w().i(Gr,`com.raquo.airstream.core.Transaction$onStart$`,{bu:1});var qr;function Jr(){return qr||=new Gr,qr}function Yr(e,t){return e.aI.get(t)}function Xr(e,t){e.c0.unshift(t)}function Zr(e){return e.c0.shift()}function Qr(e,t,n){var r=Yr(e,t),i=r===void 0,a=r===void 0?T().B(F().b(new(zr.r()).C([]))):r;a.push(n),i&&e.aI.set(t,a)}function $r(e,t){var n=Yr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aI.delete(t),i}}function ei(){this.c0=null,this.aI=null,ni=this,this.c0=T().B(F().b(new(zr.r()).C([]))),this.aI=new Map}x=ei.prototype=new S,x.constructor=ei;function ti(){}ti.prototype=x,x.di=(function(e){var t=this.bW();t===void 0?(Xr(this,e),Ur().g9(e),this.hA(e)):Qr(this,t,e)}),x.hA=(function(e){for(var t=e;;){var n=this.bW(),r=t;if(!(n!==void 0&&P().I(r,n)))throw W(new G,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.iU(t),t.cF=Ur().dH;var i=this.bW();if(P().I(i,void 0))if((this.aI.size|0)>0){var a=new ql(0);throw this.aI.forEach((e=>((t,n)=>{e.bE=e.bE+(t.length|0)|0}))(a)),W(new G,`Transaction queue error: Stack cleared, but a total of `+a.bE+` children for `+(this.aI.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Ur().g9(i),t=i}}),x.iU=(function(e){for(var t=e;;){var n=$r(this,t);if(P().I(n,void 0)){Zr(this);var r=this.bW();if(!P().I(r,void 0))t=r;else return}else{Xr(this,n);return}}}),x.bW=(function(){return this.c0[0]}),new w().i(ei,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bv:1});var ni;function ri(){return ni||=new ei,ni}function ii(){}x=ii.prototype=new S,x.constructor=ii;function ai(){}ai.prototype=x,new w().i(ii,`com.raquo.airstream.eventbus.EventBus$`,{bz:1});var oi;function si(){return oi||=new ii,oi}function ci(e,t){var n=e.an.indexOf(t)|0;if(n!==-1)e.an.splice(n,1),e.L.k()||t.gs();else throw W(new G,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function li(e){for(;(e.c5.length|0)>0;)ci(e,e.c5.shift())}function ui(e){this.dP=null,this.an=null,this.b0=!1,this.c5=null,this.L=null,this.b1=0,this.dP=e,this.an=T().B(F().b(new(mi.r()).C([]))),this.b0=!0,this.c5=T().B(F().b(new(mi.r()).C([]))),this.L=Z(),this.b1=0}x=ui.prototype=new S,x.constructor=ui;function di(){}di.prototype=x,x.fS=(function(){if(this.L.k()){var e=Jr(),t=(()=>{var e=new xc(this.dP);this.L=new Q(e),this.b0=!1,this.b1=0;for(var t=0,n=this.an.length|0;t<n;){var r=t+this.b1|0;this.an[r].gr(e),t=1+t|0}li(this),this.b0=!0,this.b1=0});if(Jr(),e.C)t();else{e.C=!0;try{t()}finally{e.C=!1,Wr(e)}}}else throw W(new G,`Can not activate `+this+`: it is already active`)}),x.hw=(function(){if(this.L.k())throw W(new G,`Can not deactivate DynamicOwner: it is not active`);this.b0=!1;for(var e=this.an,t=0,n=e.length|0;t<n;)e[t].gs(),t=1+t|0;li(this);var r=this.L;r.k()||r.y().ij(),li(this),this.b0=!0,this.L=Z()}),x.h6=(function(e,t){t?(this.b1=1+this.b1|0,this.an.unshift(e)):this.an.push(e);var n=this.L;if(!n.k()){var r=n.y();e.gr(r)}}),x.j0=(function(e){this.b0?ci(this,e):this.c5.push(e)}),new w().i(ui,`com.raquo.airstream.ownership.DynamicOwner`,{bC:1});function fi(e,t,n){this.c6=null,this.dQ=null,this.c7=null,this.c6=e,this.dQ=t,this.c7=Z(),e.h6(this,n)}x=fi.prototype=new S,x.constructor=fi;function pi(){}pi.prototype=x,x.cy=(function(){this.c6.j0(this)}),x.gr=(function(e){var t=Jr(),n=(()=>{this.c7=this.dQ.g(e)});if(Jr(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,Wr(t)}}}),x.gs=(function(){var e=this.c7;e.k()||(e.y().cy(),this.c7=Z())});var mi=new w().i(fi,`com.raquo.airstream.ownership.DynamicSubscription`,{bD:1});function hi(){}x=hi.prototype=new S,x.constructor=hi;function gi(){}gi.prototype=x,x.cC=(function(e,t,n){return new fi(e,new X((e=>new Q(t.g(e)))),n)}),x.gD=(function(e,t,n){return new fi(e,new X((e=>(t.g(e),Z()))),n)}),x.je=(function(e,t,n){return vi().cC(e,new X((e=>iu(t,n,e))),!1)}),new w().i(hi,`com.raquo.airstream.ownership.DynamicSubscription$`,{bE:1});var _i;function vi(){return _i||=new hi,_i}function yi(e){e.b2=T().B(F().b(new(Ei.r()).C([])))}function bi(e){for(var t=e.b2,n=0,r=t.length|0;n<r;)Ci(t[n]),n=1+n|0;e.b2.length=0}function xi(e,t){var n=e.b2.indexOf(t)|0;if(n!==-1)e.b2.splice(n,1);else throw W(new G,`Can not remove Subscription from Owner: subscription not found.`)}function Si(e,t){e.b2.push(t)}function Ci(e){if(!e.cI)e.dS.a3(),e.cI=!0;else throw W(new G,`Can not kill Subscription: it was already killed.`)}function wi(e,t){this.dT=null,this.dS=null,this.cI=!1,this.dT=e,this.dS=t,this.cI=!1,e.iP(this)}x=wi.prototype=new S,x.constructor=wi;function Ti(){}Ti.prototype=x,x.cy=(function(){Ci(this),xi(this.dT,this)});var Ei=new w().i(wi,`com.raquo.airstream.ownership.Subscription`,{bH:1});function Di(e,t){this.dU=null,this.dV=null,this.ao=null,this.aJ=!1,this.dU=e,this.dV=t,this.ao=Z(),this.aJ=!1}x=Di.prototype=new S,x.constructor=Di;function Oi(){}Oi.prototype=x,x.ie=(function(){var e=this.ao;return!e.k()&&!e.y().c6.L.k()}),x.j7=(function(e){if(this.aJ)throw W(new G,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ao;if(t.k())var n=!1;else var n=e===t.y().c6;if(!n){this.ie()&&!e.L.k()&&(this.aJ=!0);var r=this.ao;r.k()||(r.y().cy(),this.ao=Z()),this.ao=new Q(vi().cC(e,new X((e=>(this.aJ||this.dU.a3(),new wi(e,new Y((()=>{this.aJ||this.dV.a3()})))))),!1)),this.aJ=!1}}),x.ho=(function(){if(this.aJ)throw W(new G,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ao;e.k()||e.y().cy(),this.ao=Z()}),new w().i(Di,`com.raquo.airstream.ownership.TransferableSubscription`,{bI:1});function ki(){}x=ki.prototype=new S,x.constructor=ki;function Ai(){}Ai.prototype=x,x.B=(function(e){return[...mc().jk(e)]}),new w().i(ki,`com.raquo.ew.JsArray$`,{bJ:1});var ji;function T(){return ji||=new ki,ji}function Mi(){}x=Mi.prototype=new S,x.constructor=Mi;function Ni(){}Ni.prototype=x,x.ia=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),x.hT=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new w().i(Mi,`com.raquo.ew.JsArray$RichJsArray$`,{bK:1});var Pi;function Fi(){return Pi||=new Mi,Pi}function Ii(){this.dW=null,Ri=this,document.createElement(`template`),this.hu(J().d.jf().jg()),this.dW=RegExp(` `,`g`)}x=Ii.prototype=new S,x.constructor=Ii;function Li(){}Li.prototype=x,x.hb=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof xl?e:new $(e);if(n instanceof $&&n.a0 instanceof DOMException)return!1;throw n instanceof $?n.a0:n}}),x.ih=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().I(t,r))return!0;n=r}}),x.h4=(function(e,t){e.addEventListener(t.b4.b3.cd,t.cP,t.cQ)}),x.iY=(function(e,t){e.removeEventListener(t.b4.b3.cd,t.cP,t.cQ)}),x.ht=(function(e){return document.createElement(e.ds())}),x.hZ=(function(e,t){var n=this.i0(e,t);return n===void 0?void 0:t.bu.ct(n)}),x.i0=(function(e,t){var n=e.E.getAttributeNS(null,t.aK);return n===null?void 0:n}),x.dy=(function(e,t,n){this.j4(e,t,t.bu.bR(n))}),x.j4=(function(e,t,n){n===null?this.iZ(e,t):e.E.setAttribute(t.aK,n)}),x.iZ=(function(e,t){e.E.removeAttribute(t.aK)}),x.j5=(function(e,t,n){this.j6(e,t,t.ey.bR(n))}),x.j6=(function(e,t,n){e.E[t.ap]=n}),x.gB=(function(e,t,n){var r=e.E,i=t.ce,a=t.cf,o=n===null?null:n;o===null?(a.af(new X((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.af(new X((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.hu=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eQ)}),x.i3=(function(e,t){var n=this.i4(e,t);return n===void 0?void 0:t.cN.ct(n)}),x.i4=(function(e,t){var n=e.dw(),r=t.ch,i=n.getAttributeNS(r.k()?null:r.y(),t.cO);return i===null?void 0:i}),x.j8=(function(e,t,n){this.j9(e,t,t.cN.bR(n))}),x.j9=(function(e,t,n){if(n===null)this.j1(e,t);else{var r=t.ch;if(r.k())e.dw().setAttribute(t.cg,n);else{var i=r.y();e.dw().setAttributeNS(i,t.cg,n)}}}),x.j1=(function(e,t){var n=e.dw(),r=t.ch;n.removeAttributeNS(r.k()?null:r.y(),t.cO)}),x.hv=(function(e){return document.createTextNode(e)}),x.ig=(function(e){return Ks().hr(e.tagName,45)}),x.hx=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Bg(this.gb(r),n);r=i,n=a}}),x.gb=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dW,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new w().i(Ii,`com.raquo.laminar.DomApi$`,{bL:1});var Ri;function E(){return Ri||=new Ii,Ri}function zi(e,t,n){this.cK=null,this.dX=null,this.cJ=null,this.cK=e,this.dX=t,this.cJ=n}x=zi.prototype=new S,x.constructor=zi;function Bi(){}Bi.prototype=x,x.af=(function(e){this.cK===null?this.cJ===null?Ls().hU(this.dX,e):Fi().hT(this.cJ,yd().hX(e)):this.cK.af(e)}),new w().i(zi,`com.raquo.laminar.Seq`,{bM:1});function Vi(){}x=Vi.prototype=new S,x.constructor=Vi;function Hi(){}Hi.prototype=x,new w().i(Vi,`com.raquo.laminar.Seq$`,{bN:1});var Ui;function Wi(){return Ui||=new Vi,Ui}function Gi(e){e.cL=Mr(),nu(),e.gK=si()}function Ki(e){e.gL=Ma()}function qi(e){Ji(e,new X((e=>{e.eA.E.focus()})))}function Ji(e,t){return new Bc(new X((e=>{var n=new Gl(!e.a9.L.k()),r=new X((e=>{n.cq?n.cq=!1:t.g(e)}));vi().gD(e.a9,new X((e=>(t=>{r.g(new Da(e,t))}))(e)),!1)})),Ma())}function Yi(){this.Y=null,this.eq=null,this.bt=null,Zi=this,this.Y=new Tc(D()),new Tc(D()),this.eq=new Tc(D()),this.bt=new Cc}x=Yi.prototype=new S,x.constructor=Yi;function Xi(){}Xi.prototype=x,new w().i(Yi,`com.raquo.laminar.codecs.package$`,{bV:1});var Zi;function D(){return Zi||=new Yi,Zi}function Qi(e){e.gM=ea(e,`class`,` `)}function $i(e,t){return L(new R,`data-`+t,D().Y)}function ea(e,t,n){var r=L(new R,t,D().Y);return new Oc(r.aK,new X((e=>{var t=E().hZ(e,r);return t===void 0?``:t})),new mf(((e,t)=>{E().dy(e,r,t)})),n)}function ta(e){e.gJ=na(e,`class`,` `)}function na(e,t,n){var r=new Ic(t,D().Y,Z());return new Oc(r.cg,new X((e=>{var t=E().i3(e,r);return t===void 0?``:t})),new mf(((e,t)=>{E().j8(e,r,t)})),n)}function ra(){this.ev=null,aa=this,J().d.gG(),T().B(F().b(new(Mc.r()).C([J().d.du()]))),J().d.gG(),T().B(F().b(new(Mc.r()).C([J().d.du(),J().d.iH()]))),J().d.hn(),T().B(F().b(new(Mc.r()).C([J().d.du(),J().d.bU()]))),this.ev=T().B(F().b(new(um.r()).C([`value`,`checked`])))}x=ra.prototype=new S,x.constructor=ra;function ia(){}ia.prototype=x,new w().i(ra,`com.raquo.laminar.inputs.InputController$`,{ca:1});var aa;function oa(){return aa||=new ra,aa}function sa(e){this.c8=null,this.c8=e}x=sa.prototype=new S,x.constructor=sa;function ca(){}ca.prototype=x,x.gu=(function(e,t){try{this.c8.dk(e,t)}catch(e){var n=e instanceof xl?e:new $(e);nu().al(n)}}),x.hp=(function(e){return new sa(new mf(((t,n)=>{this.c8.dk(t,n),e.c8.dk(t,n)})))}),x.hc=(function(e){return e===void 0?this:e.hp(this)}),new w().i(sa,`com.raquo.laminar.inserters.InserterHooks`,{cd:1});function la(){}x=la.prototype=new S,x.constructor=la;function ua(){}ua.prototype=x,x.a7=(function(e,t){return new Af(e,void 0)}),new w().i(la,`com.raquo.laminar.inserters.StaticChildInserter$`,{cf:1});var da;function fa(){return da||=new la,da}function pa(e,t){this.ex=null,this.ew=null,this.ex=e,this.ew=t}x=pa.prototype=new S,x.constructor=pa;function ma(){}ma.prototype=x,x.p=(function(e){return new mu(this.ex,this.ew.g(e),new gf(((e,t,n)=>{E().gB(e,t,n)})))}),new w().i(pa,`com.raquo.laminar.keys.DerivedStyleProp`,{ci:1});function ha(e,t,n,r){this.b3=null,this.cc=!1,this.cb=!1,this.ca=null,this.b3=e,this.cc=t,this.cb=n,this.ca=r}x=ha.prototype=new S,x.constructor=ha;function ga(){}ga.prototype=x,x.io=(function(e){var t=new X((t=>{var n=this.ca.g(t);return n.k()?Z():new Q(e.g(n.y()))}));return new ha(this.b3,this.cc,this.cb,t)}),x.dr=(function(e){var t=new X((t=>{var n=this.ca.g(t);return n.k()?Z():new Q((n.y(),e.a3()))}));return new ha(this.b3,this.cc,this.cb,t)}),new w().i(ha,`com.raquo.laminar.keys.EventProcessor`,{cj:1});function _a(){}x=_a.prototype=new S,x.constructor=_a;function va(){}va.prototype=x,x.bQ=(function(e,t,n){return new ha(e,t,n,new X((e=>new Q(e))))}),new w().i(_a,`com.raquo.laminar.keys.EventProcessor$`,{ck:1});var ya;function ba(){return ya||=new _a,ya}function xa(){}x=xa.prototype=new S,x.constructor=xa;function Sa(){}Sa.prototype=x;function Ca(){this.gN=null,this.gO=null,this.gP=null,this.gQ=null,this.gN=`http://www.w3.org/2000/svg`,this.gO=`http://www.w3.org/1999/xlink`,this.gP=`http://www.w3.org/XML/1998/namespace`,this.gQ=`http://www.w3.org/2000/xmlns/`}x=Ca.prototype=new S,x.constructor=Ca;function wa(){}wa.prototype=x,x.it=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new lp(e)}}),new w().i(Ca,`com.raquo.laminar.keys.SvgAttr$`,{cn:1});var Ta;function Ea(){return Ta||=new Ca,Ta}function Da(e,t){this.eA=null,this.ez=null,this.eA=e,this.ez=t}x=Da.prototype=new S,x.constructor=Da;function Oa(){}Oa.prototype=x,new w().i(Da,`com.raquo.laminar.lifecycle.MountContext`,{co:1});var O=new w().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function ka(){this.gR=null,ja=this,this.gR=new Rc}x=ka.prototype=new S,x.constructor=ka;function Aa(){}Aa.prototype=x,new w().i(ka,`com.raquo.laminar.modifiers.Modifier$`,{cs:1});var ja;function Ma(){return ja||=new ka,ja}function Na(){this.R=null,Fa=this,this.R=new Hc}x=Na.prototype=new S,x.constructor=Na;function Pa(){}Pa.prototype=x,new w().i(Na,`com.raquo.laminar.modifiers.RenderableNode$`,{cw:1});var Fa;function Ia(){return Fa||=new Na,Fa}function La(){this.s=null,za=this,this.s=new Jc(new X((e=>e)),k()),new Jc(new X((e=>``+(e|0))),k()),new Jc(new X((e=>``+ +e)),k()),new Jc(new X((e=>``+!!e)),k()),new Jc(new X((e=>e.jj())),k())}x=La.prototype=new S,x.constructor=La;function Ra(){}Ra.prototype=x,new w().i(La,`com.raquo.laminar.modifiers.RenderableText$`,{cB:1});var za;function k(){return za||=new La,za}function Ba(){}x=Ba.prototype=new S,x.constructor=Ba;function Va(){}Va.prototype=x,x.cs=(function(e,t,n){var r=new Q(e);t.gI(r),n!==void 0&&n.gu(e,t);var i=E().hb(e.aX(),t.aX());return i&&t.gC(r),i}),new w().i(Ba,`com.raquo.laminar.nodes.ParentNode$`,{cE:1});var Ha;function Ua(){return Ha||=new Ba,Ha}function Wa(){}x=Wa.prototype=new S,x.constructor=Wa;function Ga(){}Ga.prototype=x,x.jn=(function(e,t){return vi().cC(e.a9,new X((n=>t.g(new Da(e,n)))),!0)}),new w().i(Wa,`com.raquo.laminar.nodes.ReactiveElement$`,{cG:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(e){this.eM=null,this.eM=new sa(new mf(((t,n)=>{matchResult1:{var r=n.aX();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=nu(),a=r.textContent,o=t.aX().tagName;i.al(W(new G,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}x=Ja.prototype=new S,x.constructor=Ja;function Ya(){}Ya.prototype=x,x.a2=(function(e){return e.gq(new X((e=>e.jo(this.eM))))}),new w().i(Ja,`com.raquo.laminar.nodes.Slot`,{cJ:1});function Xa(){Qa=this,T().B(F().jq(new vr(new Int32Array([0]))))}x=Xa.prototype=new S,x.constructor=Xa;function Za(){}Za.prototype=x,x.h2=(function(){return new X((e=>void 0))}),new w().i(Xa,`com.raquo.laminar.tags.CustomHtmlTag$`,{cL:1});var Qa;function $a(){return Qa||=new Xa,Qa}function eo(){}x=eo.prototype=new S,x.constructor=eo;function to(){}to.prototype=x,x.h8=(function(){ro().hG(),ro().hJ(),ro().hK(),ro().hL(),ro().hM(),ro().hN(),ro().hO(),ro().hP(),ro().hQ(),ro().hH(),ro().hI()}),x.hG=(function(){var e=document.querySelector(`#example1`);if(e!==null){J(),J();var t=new Of;new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.dv().dh(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new du((J(),ba().bQ(J().d.bU(),!1,!1)).dr(new fd((()=>!0))),new X((e=>{t.bp.aW(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hJ=(function(){var e=document.querySelector(`#example2`);if(e!==null){J(),J();var t=new Of;new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.dv().dh(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.jp().p(!0))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new du((J(),ba().bQ(J().d.bU(),!1,!1)).dr(new fd((()=>!0))),new X((e=>{t.bp.aW(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hK=(function(){var e=document.querySelector(`#example3`);if(e!==null){J(),J();var t=new Of;new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.dv().dh(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new du((J(),ba().bQ(J().d.bU(),!1,!1)).dr(new fd((()=>!0))),new X((e=>{t.bp.aW(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hL=(function(){var e=document.querySelector(`#example4`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-opening`))),new q((e=>e.P().p(`Dialog`)))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-opening`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hM=(function(){var e=document.querySelector(`#example5`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-dismiss`))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-dismiss`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hN=(function(){var e=document.querySelector(`#example6`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-custom-width`))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.jc().p(`--width: 50vw;`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-custom-width`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hO=(function(){var e=document.querySelector(`#example7`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-scrolling`))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([J().d.X().H(F().b(new(O.r()).C([J().d.i8().gH().p(150),J().d.hl().p(`1px dashed var(--wa-color-surface-border)`),J().d.iR().p(`0 1rem`),J().d.iQ().H(F().b(new(O.r()).C([V(J().d,`Scroll down and give it a try! 👇`,k().s)])))])))]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-scrolling`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hP=(function(){var e=document.querySelector(`#example8`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-header-actions`))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().i7().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.h9().iT()))])),F().b(new(O.r()).C([new du((J(),ba().bQ(J().d.bU(),!1,!1)),new X((e=>(t=>{e.aW(t)}))(J().d.cL.dz(new q((e=>{window.open(window.location.href)})),Ns().cm,!0)))),zu().r(F().b(new(N.r()).C([new q((e=>e.is().p(`arrow-up-right-from-square`))),new q((e=>e.P().p(`Open in new window`)))])),F().b(new(O.r()).C([])))]))),Ia().R))]))),Tl().T,qc()))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-header-actions`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hQ=(function(){var e=document.querySelector(`#example9`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-light-dismiss`))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.ik().p(!0))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-light-dismiss`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hH=(function(){var e=document.querySelector(`#example10`);if(e!==null){J();var t=U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Only this button will close it`,k().s)])));new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-deny-close`))),new q((e=>e.P().p(`Dialog`))),new q((e=>new du((J(),ba().bQ(e.iJ(),!1,!1)).io(new q((e=>{P().I(e.detail.source,t.E)||e.preventDefault()}))),new X((e=>(t=>{e.aW(t)}))(J().d.cL.dC))))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(t,Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([V(J().d,`This dialog will only close when you click the button below.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-deny-close`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hI=(function(){var e=document.querySelector(`#example11`);e!==null&&(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([Fu().r(F().b(new(N.r()).C([new q((e=>e.aC().p(`dialog-focus`))),new q((e=>e.P().p(`Dialog`))),new q((e=>uu(J().d,yo().ae().a2(F().b(new(Mf.r()).C([(J(),fa().a7(U().r(F().b(new(N.r()).C([new q((e=>e.aj().aa())),new q((e=>e.ac().ad()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),Ia().R))]))),Tl().T,qc())))])),F().b(new(O.r()).C([Uu().r(F().b(new(N.r()).C([new q((e=>e.hh().p(!0))),new q((e=>e.iS().p(`I will have focus when the dialog is opened`)))])),F().b(new(O.r()).C([])))]))),U().r(F().b(new(N.r()).C([new q((e=>uo(e.aE(),`dialog`,`dialog-focus`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),new w().i(eo,`examples.dialog.Main$package$`,{cN:1});var no;function ro(){return no||=new eo,no}function io(e){try{ro().h8()}catch(e){throw e}}function ao(e,t){return $i(J().d,t).p(`close`)}function oo(){this.f3=null,this.f4=!1}x=oo.prototype=new S,x.constructor=oo;function so(){}so.prototype=x,x.ad=(function(){return this.f4||=(this.f3=ao(this,`dialog`),!0),this.f3}),new w().i(oo,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$`,{cR:1});var co;function lo(){return co||=new oo,co}function uo(e,t,n){return $i(J().d,t).p(`open `+n)}function fo(){}x=fo.prototype=new S,x.constructor=fo;function po(){}po.prototype=x,new w().i(fo,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Open$`,{cS:1});var mo;function ho(){return mo||=new fo,mo}function go(){this.fh=null,this.fi=!1,this.ff=null,this.fg=!1}x=go.prototype=new S,x.constructor=go;function _o(){}_o.prototype=x,x.i7=(function(){return this.fi||=(this.fh=new Ja(`header-actions`),!0),this.fh}),x.ae=(function(){return this.fg||=(this.ff=new Ja(`footer`),!0),this.ff}),new w().i(go,`io.github.nguyenyou.webawesome.laminar.Dialog$slots$`,{cU:1});var vo;function yo(){return vo||=new go,vo}function bo(){this.gT=!1,this.bv=null,this.cj=null,this.fr=null,this.cY=!1,this.gS=0,this.gV=0,this.gU=null,So=this,this.gT=!0,this.bv=new ArrayBuffer(8),this.cj=new Int32Array(this.bv,0,2),new Float32Array(this.bv,0,2),this.fr=new Float64Array(this.bv,0,1),this.cj[0]=16909060,this.cY=(new Int8Array(this.bv,0,8)[0]|0)==1,this.gS=this.cY?0:1,this.gV=this.cY?1:0,this.gU=null}x=bo.prototype=new S,x.constructor=bo;function xo(){}xo.prototype=x,x.dt=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fr[0]=e,(this.cj[0]|0)^(this.cj[1]|0))}),new w().i(bo,`java.lang.FloatingPointBits$`,{d6:1});var So;function Co(){return So||=new bo,So}function wo(e,t){for(var n=A().a8(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=To(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ml(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ml(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(gl.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function To(e,t){var n=A().a8(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().a8(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().a8(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().a8(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().a8(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Eo(e,c[1]),No(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Eo(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Eo(e,d[1]),`<clinit>`]}function Eo(e,t){var n=Oo(e);if(as().fx.call(n,t))var r=Oo(e)[t];else var r=Wo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Do(e){if(!((1&e.S)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d0=t,e.S=(1|e.S)<<24>>24}return e.d0}function Oo(e){return(1&e.S)<<24>>24?e.d0:Do(e)}function ko(e){if(!((2&e.S)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d1=t,e.S=(2|e.S)<<24>>24}return e.d1}function Ao(e){return(2&e.S)<<24>>24?e.d1:ko(e)}function jo(e){return(4&e.S)<<24>>24||(e.cZ=Object.keys(Ao(e)),e.S=(4|e.S)<<24>>24),e.cZ}function Mo(e){return(4&e.S)<<24>>24?e.cZ:jo(e)}function No(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Po(e,t){return t?t.arguments&&t.stack?Fo(e,t):t.stack&&t.sourceURL?Ro(e,t):t.stack&&t.number?Lo(e,t):t.stack&&t.fileName?Io(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?zo(e,t):Bo(e,t):zo(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Vo(e,t):Ho(e,t):t.stack&&!t.fileName?Fo(e,t):Uo(e,t):[]}function Fo(e,t){return(t.stack+`
`).replace(A().a8(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().J(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().J(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().J(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Io(e,t){return t.stack.replace(A().J(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().J(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Lo(e,t){return t.stack.replace(A().J(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().J(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ro(e,t){return t.stack.replace(A().J(`\\[native code\\]\\n`,`m`),``).replace(A().J(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().J(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function zo(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Bo(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Vo(e,t){for(var n=A().a8(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ho(e,t){for(var n=A().a8(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().a8(`<anonymous function: (\\S+)>`),`$1`).replace(A().a8(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Uo(e,t){return[]}function Wo(e,t,n){for(;;)if(t<(Mo(e).length|0)){var r=Mo(e)[t];if(n.startsWith(r))return``+Ao(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Go(){this.d0=null,this.d1=null,this.cZ=null,this.S=0}x=Go.prototype=new S,x.constructor=Go;function Ko(){}Ko.prototype=x,x.hR=(function(e){return wo(this,Po(this,e))}),new w().i(Go,`java.lang.StackTrace$`,{dd:1});var qo;function Jo(){return qo||=new Go,qo}function Yo(){}x=Yo.prototype=new S,x.constructor=Yo;function Xo(){}Xo.prototype=x,x.a8=(function(e){return new RegExp(e)}),x.J=(function(e,t){return new RegExp(e,t)}),new w().i(Yo,`java.lang.StackTrace$StringRE$`,{de:1});var Zo;function A(){return Zo||=new Yo,Zo}function Qo(){this.ft=null,this.gW=null,es=this,this.ft=new lh(!1),this.gW=new lh(!0)}x=Qo.prototype=new S,x.constructor=Qo;function $o(){}$o.prototype=x,new w().i(Qo,`java.lang.System$Streams$`,{dj:1});var es;function ts(){return es||=new Qo,es}function ns(){this.fx=null,is=this,this.fx=Object.prototype.hasOwnProperty}x=ns.prototype=new S,x.constructor=ns;function rs(){}rs.prototype=x,new w().i(ns,`java.lang.Utils$Cache$`,{dl:1});var is;function as(){return is||=new ns,is}function os(e,t){return e===t}function ss(e){return 0}function cs(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aJ)}var ls=new w().i(0,`java.lang.Void`,{aJ:1},(e=>e===void 0));function us(e,t){throw Kf(new Jf,`argument type mismatch`)}function ds(){}x=ds.prototype=new S,x.constructor=ds;function fs(){}fs.prototype=x,x.bj=(function(e){return e instanceof C||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r||e instanceof vr||e instanceof yr||e instanceof br||e instanceof xr?e.a.length:us(this,e)}),new w().i(ds,`java.lang.reflect.Array$`,{dm:1});var ps;function ms(){return ps||=new ds,ps}function hs(){}x=hs.prototype=new S,x.constructor=hs;function gs(){}gs.prototype=x,x.gh=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.e,s=a.f,c=r,l=t.a[c],u=l.e,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),x.gg=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gi=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gd=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gc=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gj=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.ge=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),x.gf=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new w().i(hs,`java.util.Arrays$`,{dn:1});var _s;function j(){return _s||=new hs,_s}function M(e,t){this.e=0,this.f=0,this.e=e,this.f=t}x=M.prototype=new S,x.constructor=M;function vs(){}vs.prototype=x,x.i=(function(e){return e instanceof M&&this.e===e.e&&this.f===e.f}),x.o=(function(){return this.e^this.f}),x.t=(function(){return Es().gy(this.e,this.f)}),x.k4=(function(){return this.e}),x.k3=(function(){return Es().gx(this.e,this.f)}),x.k2=(function(){return Es().bV(this.e,this.f)}),x.jJ=(function(){return this.e<<24>>24}),x.k0=(function(){return this.e<<16>>16}),x.jU=(function(){return this.e}),x.jV=(function(){return this}),x.jP=(function(){return Es().gx(this.e,this.f)}),x.jN=(function(){return Es().bV(this.e,this.f)}),x.jL=(function(e){return Es().gv(this.e,this.f,e.e,e.f)}),x.jK=(function(e){return Es().gv(this.e,this.f,e.e,e.f)}),x.jO=(function(e){return this.e===e.e&&this.f===e.f}),x.jY=(function(e){return!(this.e===e.e&&this.f===e.f)}),x.jB=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<(-2147483648^e.e):t<n}),x.jC=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<=(-2147483648^e.e):t<n}),x.jx=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>(-2147483648^e.e):t>n}),x.jy=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>=(-2147483648^e.e):t>n}),x.k6=(function(){return new M(~this.e,~this.f)}),x.jv=(function(e){return new M(this.e|e.e,this.f|e.f)}),x.ju=(function(e){return new M(this.e&e.e,this.f&e.f)}),x.jI=(function(e){return new M(this.e^e.e,this.f^e.f)}),x.jD=(function(e){var t=this.e;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),x.jA=(function(e){var t=this.f;return new M(32&e?t>>>e|0:this.e>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),x.jz=(function(e){var t=this.f;return new M(32&e?t>>e:this.e>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),x.k5=(function(){var e=this.e,t=this.f;return new M(-e|0,e===0?-t|0:~t)}),x.jG=(function(e){var t=this.e,n=this.f,r=e.f,i=t+e.e|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),x.jE=(function(e){var t=this.e,n=this.f,r=e.f,i=t-e.e|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),x.jH=(function(e){var t=this.e,n=e.e,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),x.jw=(function(e){var t=Es();return new M(t.hz(this.e,this.f,e.e,e.f),t.v)}),x.jF=(function(e){var t=Es();return new M(t.iX(this.e,this.f,e.e,e.f),t.v)}),new w().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{aK:1});function ys(e,t,n){return-2097152&n?Ss(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function bs(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.v=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.v=0,n>>>o|0}else return Ss(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.v=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.v=s/4294967296|0,s|0}}function xs(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.v=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.v=n&(-1+i|0),t):Ss(e,t,n,r,i,1)|0;if(-2097152&i)return e.v=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.v=a/4294967296|0,a|0}function Ss(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.v=ee,m;if(a===1)return e.v=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function Cs(){this.v=0}x=Cs.prototype=new S,x.constructor=Cs;function ws(){}ws.prototype=x,x.gy=(function(e,t){return t===e>>31?``+e:t<0?`-`+ys(this,-e|0,e===0?-t|0:~t):ys(this,e,t)}),x.bV=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),x.gx=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),x.jR=(function(e){return new M(e,e>>31)}),x.jQ=(function(e){return new M(this.gw(e),this.v)}),x.gw=(function(e){if(e<-0x8000000000000000)return this.v=-2147483648,0;if(e>=0x8000000000000000)return this.v=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.v=e<0&&t!==0?-1+n|0:n,t}),x.gv=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),x.hz=(function(e,t,n,r){if((n|r)===0)throw new Wf(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.v=0,-2147483648;var i=Zn(e,n);return this.v=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=-1,-1;else return this.v=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=bs(this,a,o,s,c);if((t^r)>=0)return l;var u=this.v;return this.v=l===0?-u|0:~u,-l|0}}),x.iX=(function(e,t,n,r){if((n|r)===0)throw new Wf(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Qn(e,n);return this.v=i>>31,i}else return this.v=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=0,0;else return this.v=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=xs(this,a,o,s,c);if(t<0){var u=this.v;return this.v=l===0?-u|0:~u,-l|0}else return l}}),new w().i(Cs,`org.scalajs.linker.runtime.RuntimeLong$`,{dq:1});var Ts;function Es(){return Ts||=new Cs,Ts}var Ds=new w().i(1,`scala.Function0`,{ae:1}),N=new w().i(1,`scala.Function1`,{e:1});function Os(){}x=Os.prototype=new S,x.constructor=Os;function ks(){}ks.prototype=x;function As(){this.fz=null,this.cm=null,Ms=this,this.fz=new q((e=>Ns().fz)),this.cm=new tf}x=As.prototype=new S,x.constructor=As;function js(){}js.prototype=x,new w().i(As,`scala.PartialFunction$`,{dD:1});var Ms;function Ns(){return Ms||=new As,Ms}function Ps(){this.fC=null,Is=this,this.fC=new q((e=>Ls().fC))}x=Ps.prototype=new S,x.constructor=Ps;function Fs(){}Fs.prototype=x,x.hU=(function(e,t){var n=ms().bj(e),r=0;if(e instanceof C)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof vr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof xr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof yr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof br)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof hr)for(;r<n;)t.g(lr(e.a[r])),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof _r)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof mr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new lp(e)}),new w().i(Ps,`scala.collection.ArrayOps$`,{dJ:1});var Is;function Ls(){return Is||=new Ps,Is}function Rs(e,t){for(var n=e.n();n.w();)t.g(n.j())}function zs(e,t,n,r){return e.D()===0?``+t+r:e.bG(qg(new Jg),t,n,r).O.u}function Bs(e,t,n,r,i){var a=t.O;n.length!==0&&(a.u=``+a.u+n);var o=e.n();if(o.w()){var s=o.j();for(a.u=``+a.u+s;o.w();){a.u=``+a.u+r;var c=o.j();a.u=``+a.u+c}}return i.length!==0&&(a.u=``+a.u+i),t}function Vs(e,t){this.fG=null,this.bB=null,this.fG=e,this.bB=t}x=Vs.prototype=new S,x.constructor=Vs;function Hs(){}Hs.prototype=x,x.i6=(function(){return this.fG.a3().n()}),new w().i(Vs,`scala.collection.Iterator$ConcatIteratorCell`,{e1:1});function Us(){this.fH=null,Gs=this,this.fH=new q((e=>Ks().fH))}x=Us.prototype=new S,x.constructor=Us;function Ws(){}Ws.prototype=x,x.hr=(function(e,t){return lm(e,t)>=0}),new w().i(Us,`scala.collection.StringOps$`,{e9:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){}x=qs.prototype=new S,x.constructor=qs;function Js(){}Js.prototype=x,x.I=(function(e,t){return e===t||(pl(e)?this.hF(e,t):e instanceof Gn?this.hD(e,t):e===null?t===null:Jn(e,t))}),x.hF=(function(e,t){if(pl(t))return this.hE(e,t);if(t instanceof Gn){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=dr(e),r=n.e,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Jn(e,t)}else return e===null?t===null:Jn(e,t)}),x.hE=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=dr(t);return n===Es().bV(r.e,r.f)}else return!1}else if(e instanceof M){var i=dr(e),a=i.e,o=i.f;if(t instanceof M){var s=dr(t),c=s.e,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Es().bV(a,o)===u}else return!1}else return e===null?t===null:Jn(e,t)}),x.hD=(function(e,t){if(t instanceof Gn)return e.c===t.c;if(pl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=dr(t),r=n.e,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Jn(t,e)}else return e===null&&t===null}),new w().i(qs,`scala.runtime.BoxesRunTime$`,{eD:1});var Ys;function P(){return Ys||=new qs,Ys}var Xs=new w().i(0,`scala.runtime.Null$`,{eG:1});function Zs(){}x=Zs.prototype=new S,x.constructor=Zs;function Qs(){}Qs.prototype=x,x.bh=(function(e,t){if(e instanceof C||e instanceof vr||e instanceof xr||e instanceof yr||e instanceof br)return e.a[t];if(e instanceof hr)return lr(e.a[t]);if(e instanceof gr||e instanceof _r||e instanceof mr)return e.a[t];throw e===null?new $f:new lp(e)}),x.hf=(function(e,t,n){if(e instanceof C)e.a[t]=n;else if(e instanceof vr)e.a[t]=n|0;else if(e instanceof xr)e.a[t]=+n;else if(e instanceof yr)e.a[t]=dr(n);else if(e instanceof br)e.a[t]=Math.fround(n);else if(e instanceof hr)e.a[t]=ur(n);else if(e instanceof gr)e.a[t]=n|0;else if(e instanceof _r)e.a[t]=n|0;else if(e instanceof mr)e.a[t]=!!n;else if(e===null)throw new $f;else throw new lp(e)}),x.h3=(function(e){return zs(e.aF(),e.ai()+`(`,`,`,`)`)}),x.b=(function(e){return e===null?null:e.a.length===0?Tm(km()):new ug(e)}),x.jq=(function(e){return e===null?null:new og(e)}),new w().i(Zs,`scala.runtime.ScalaRunTime$`,{eH:1});var $s;function F(){return $s||=new Zs,$s}function ec(){}x=ec.prototype=new S,x.constructor=ec;function tc(){}tc.prototype=x,x.c=(function(e,t){var n=this.cA(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.cA=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.m=(function(e,t){return this.hi(e^t)}),x.hi=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.bk=(function(e){var t=e.e,n=e.f;return n===t>>31?t:t^n}),x.a5=(function(e){var t=$n(e);if(t===e)return t;var n=Es(),r=n.gw(e),i=n.v;return Es().bV(r,i)===e?r^i:Co().dt(e)}),x.A=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a5(+e);if(e instanceof M){var t=dr(e);return this.bk(new M(t.e,t.f))}else return Yn(e)}),x.bT=(function(e){throw Yf(new Xf,``+e)}),new w().i(ec,`scala.runtime.Statics$`,{eJ:1});var nc;function I(){return nc||=new ec,nc}function rc(){}x=rc.prototype=new S,x.constructor=rc;function ic(){}ic.prototype=x,x.he=(function(e){return e}),new w().i(rc,`scala.scalajs.js.defined$`,{eP:1});var ac;function oc(){return ac||=new rc,ac}function sc(){}x=sc.prototype=new S,x.constructor=sc;function cc(){}cc.prototype=x,x.ja=(function(e,t){return setTimeout((()=>{t.a3()}),e)}),new w().i(sc,`scala.scalajs.js.timers.package$`,{eQ:1});var lc;function uc(){return lc||=new sc,lc}function dc(){}x=dc.prototype=new S,x.constructor=dc;function fc(){}fc.prototype=x,x.jk=(function(e){var t=[];return e.af(new q((e=>t.push(e)|0))),t}),new w().i(dc,`scala.scalajs.runtime.Compat$`,{eZ:1});var pc;function mc(){return pc||=new dc,pc}function hc(){}x=hc.prototype=new S,x.constructor=hc;function gc(){}gc.prototype=x,x.jb=(function(e){var t=`Illegal command line`+(e.go()===0?``:e.go()===1?` after first argument`:` after `+e.go()+` arguments`)+`: `+e.jW();Nl().iO().ii(t+`
`)}),new w().i(hc,`scala.util.CommandLineParser$`,{f1:1});function _c(e){this.dg=null,this.dg=e}x=_c.prototype=new S,x.constructor=_c;function vc(){}vc.prototype=x,x.t=(function(){return`DynamicVariable(`+this.dg+`)`}),new w().i(_c,`scala.util.DynamicVariable`,{f3:1});function yc(){}x=yc.prototype=new S,x.constructor=yc;function bc(){}bc.prototype=x,x.c=(function(e,t){var n=this.cA(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.cA=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.m=(function(e,t){return this.K(e^t)}),x.K=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.cB=(function(e,t,n){var r=e.ag();if(r===0)return sm(e.ai());var i=t;n||(i=this.c(i,sm(e.ai())));for(var a=0;a<r;)i=this.c(i,I().A(e.ah(a))),a=1+a|0;return this.m(i,r)}),x.jm=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.w();){var s=o.j(),c=I().A(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.c(l,n),l=this.c(l,r),l=this.cA(l,a),this.m(l,i)}),x.iN=(function(e,t){var n=e.n(),r=t;if(!n.w())return this.m(r,0);var i=n.j();if(!n.w())return this.m(this.c(r,I().A(i)),1);var a=n.j(),o=I().A(i);r=this.c(r,o);for(var s=r,c=I().A(a),l=c-o|0,u=2;n.w();){r=this.c(r,c);var d=I().A(n.j());if(l!==(d-c|0)||l===0){for(r=this.c(r,d),u=1+u|0;n.w();)r=this.c(r,I().A(n.j())),u=1+u|0;return this.m(r,u)}c=d,u=1+u|0}return this.K(this.c(this.c(s,l),c))}),x.fX=(function(e,t){var n=t,r=ms().bj(e);switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().A(F().bh(e,0))),1);default:var i=I().A(F().bh(e,0));n=this.c(n,i);for(var a=n,o=I().A(F().bh(e,1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().A(F().bh(e,c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().A(F().bh(e,c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.iV=(function(e,t,n,r){return this.K(this.c(this.c(this.c(r,e),t),n))}),x.ib=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().A(e.q(0))),1);default:var i=I().A(e.q(0));n=this.c(n,i);for(var a=n,o=I().A(e.q(1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().A(e.q(c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().A(e.q(c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.il=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.k();){var l=c.a6(),u=c.Q(),d=I().A(l);switch(r=this.c(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.iV(s,a,o,t):this.m(r,n)}),x.g6=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.c(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]?1231:1237),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.fY=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.fZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g0=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().a5(e.a[0])),1);default:var i=I().a5(e.a[0]);n=this.c(n,i);for(var a=n,o=I().a5(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().a5(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().a5(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().a5(e.a[0])),1);default:var i=I().a5(e.a[0]);n=this.c(n,i);for(var a=n,o=I().a5(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().a5(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().a5(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g2=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g3=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:var i=n,a=e.a[0];return this.m(this.c(i,I().bk(new M(a.e,a.f))),1);default:var o=e.a[0],s=I().bk(new M(o.e,o.f));n=this.c(n,s);for(var c=n,l=e.a[1],u=I().bk(new M(l.e,l.f)),d=u-s|0,f=2;f<r;){n=this.c(n,u);var p=e.a[f],m=I().bk(new M(p.e,p.f));if(d!==(m-u|0)||d===0){for(n=this.c(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.c(ee,I().bk(new M(te.e,te.f))),f=1+f|0}return this.m(n,r)}u=m,f=1+f|0}return this.K(this.c(this.c(c,d),u))}}),x.g4=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g5=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,0),1);default:n=this.c(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.c(n,a),o!==(-a|0)||o===0){for(n=this.c(n,0),s=1+s|0;s<r;)n=this.c(n,0),s=1+s|0;return this.m(n,r)}a=0,s=1+s|0}return this.K(this.c(this.c(i,o),a))}});function xc(e){this.b2=null,this.dR=null,this.cH=!1,this.dR=e,yi(this),this.cH=!1}x=xc.prototype=new S,x.constructor=xc;function Sc(){}Sc.prototype=x,x.iP=(function(e){this.cH?(Ci(e),this.dR.a3()):Si(this,e)}),x.ij=(function(){bi(this),this.cH=!0}),new w().i(xc,`com.raquo.airstream.ownership.OneTimeOwner`,{bF:1,bG:1});function Cc(){}x=Cc.prototype=new S,x.constructor=Cc;function wc(){}wc.prototype=x,x.hy=(function(e){return e!==null}),x.hC=(function(e){return e?``:null}),x.ct=(function(e){return this.hy(e)}),x.bR=(function(e){return this.hC(!!e)}),new w().i(Cc,`com.raquo.laminar.codecs.package$$anon$1`,{bW:1,a6:1});function Tc(e){if(e===null)throw new $f}x=Tc.prototype=new S,x.constructor=Tc;function Ec(){}Ec.prototype=x,x.bR=(function(e){return e}),x.ct=(function(e){return e}),new w().i(Tc,`com.raquo.laminar.codecs.package$$anon$2`,{bX:1,a6:1});function Dc(e){return new pa(e,new X((e=>e+`vh`)))}function Oc(e,t,n,r){}x=Oc.prototype=new Sa,x.constructor=Oc;function kc(){}kc.prototype=x,new w().i(Oc,`com.raquo.laminar.keys.CompositeKey`,{ch:1,K:1});function Ac(e){this.cd=null,this.cd=e}x=Ac.prototype=new Sa,x.constructor=Ac;function jc(){}jc.prototype=x;var Mc=new w().i(Ac,`com.raquo.laminar.keys.EventProp`,{cl:1,K:1});function L(e,t,n){return e.aK=t,e.bu=n,e}function R(){this.aK=null,this.bu=null}x=R.prototype=new Sa,x.constructor=R;function Nc(){}Nc.prototype=x,x.p=(function(e){return new mu(this,e,new gf(((e,t,n)=>{E().dy(e,t,n)})))}),x.dh=(function(e){return new gu(this,e.gE(),new gf(((e,t,n)=>{E().dy(e,this,t)})))}),new w().i(R,`com.raquo.laminar.keys.HtmlAttr`,{a9:1,K:1});function Pc(e,t){this.ap=null,this.ey=null,this.ap=e,this.ey=t}x=Pc.prototype=new Sa,x.constructor=Pc;function Fc(){}Fc.prototype=x,x.p=(function(e){return new mu(this,e,new gf(((e,t,n)=>{E().j5(e,t,n)})))}),new w().i(Pc,`com.raquo.laminar.keys.HtmlProp`,{at:1,K:1});function Ic(e,t,n){this.cO=null,this.cN=null,this.cg=null,this.ch=null,this.cO=e,this.cN=t;var r=n.k()?Z():new Q(n.y()+`:`+e);this.cg=r.k()?e:r.y(),this.ch=n.k()?Z():new Q(Ea().it(n.y()))}x=Ic.prototype=new Sa,x.constructor=Ic;function Lc(){}Lc.prototype=x,new w().i(Ic,`com.raquo.laminar.keys.SvgAttr`,{cm:1,K:1});function Rc(){}x=Rc.prototype=new S,x.constructor=Rc;function zc(){}zc.prototype=x,x.a1=(function(e){}),new w().i(Rc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ct:1,Q:1});function Bc(e,t){if(this.eH=null,this.eH=e,t===null)throw new $f}x=Bc.prototype=new S,x.constructor=Bc;function Vc(){}Vc.prototype=x,x.a1=(function(e){var t=Jr(),n=(()=>{this.eH.g(e)});if(Jr(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,Wr(t)}}}),new w().i(Bc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cu:1,Q:1});function Hc(){}x=Hc.prototype=new S,x.constructor=Hc;function Uc(){}Uc.prototype=x,new w().i(Hc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cx:1,cv:1});function Wc(){}x=Wc.prototype=new S,x.constructor=Wc;function Gc(){}Gc.prototype=x,new w().i(Wc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cz:1,cy:1});var Kc;function qc(){return Kc||=new Wc,Kc}function Jc(e,t){if(this.eI=null,this.eI=e,t===null)throw new $f}x=Jc.prototype=new S,x.constructor=Jc;function Yc(){}Yc.prototype=x,x.hg=(function(e){return this.eI.g(e)}),new w().i(Jc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cC:1,cA:1});function Xc(e){e.ga(new ui(new Y((()=>{throw W(new G,`Attempting to use owner of unmounted element: `+zs(E().hx(e.aX(),(E(),Gg())),``,` > `,``))}))))}function Zc(e,t,n){return e.cW=t,e}function Qc(){this.cW=null}x=Qc.prototype=new S,x.constructor=Qc;function $c(){}$c.prototype=x,x.ds=(function(){return this.cW}),x.H=(function(e){var t=this.hm();return e.af(new X((e=>{e.a1(t)}))),t}),x.hm=(function(){return new Zp(this,E().ht(this))}),new w().i(Qc,`com.raquo.laminar.tags.HtmlTag`,{ay:1,ac:1});function el(e,t){this.eQ=null,this.eQ=e}x=el.prototype=new S,x.constructor=el;function tl(){}tl.prototype=x,new w().i(el,`com.raquo.laminar.tags.SvgTag`,{cM:1,ac:1});function nl(){}x=nl.prototype=new S,x.constructor=nl;function rl(){}rl.prototype=x,x.bR=(function(e){return e}),x.ct=(function(e){return e}),new w().i(nl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cX:1,a6:1});function il(e,t){return e.ba=t,e.cr(),e}function al(){this.ba=null,this.b5=null,this.b6=!1,this.b7=null,this.b8=!1,this.b9=null,this.bb=!1}x=al.prototype=new S,x.constructor=al;function ol(){}ol.prototype=x,x.aC=(function(){return this.b6||=(this.b5=J().d.i9(),!0),this.b5}),x.jc=(function(){return this.b8||=(this.b7=J().d.jd(),!0),this.b7}),x.jh=(function(){return this.bb||=(this.b9=new yu(this.ba,$a().h2(),($a(),void 0)),!0),this.b9}),x.r=(function(e,t){var n=this.jh().H(F().b(new(O.r()).C([])));return e.af(new X((e=>{e.g(this).a1(n)}))),t.af(new X((e=>{e.a1(n)}))),n});function sl(){}x=sl.prototype=new S,x.constructor=sl;function cl(){}cl.prototype=x,x.jl=(function(e){if(!(e>=0&&e<=1114111))throw qf(new Jf);return String.fromCodePoint(e)}),new w().i(sl,`java.lang.Character$`,{d3:1,a:1});var ll;function ul(){return ll||=new sl,ll}function dl(){}x=dl.prototype=new S,x.constructor=dl;function fl(){}fl.prototype=x;function pl(e){return e instanceof dl||typeof e==`number`||e instanceof M}function ml(e,t,n,r,i){this.bd=null,this.bx=null,this.be=null,this.bf=0,this.bc=0,this.bd=e,this.bx=t,this.be=n,this.bf=r,this.bc=i}x=ml.prototype=new S,x.constructor=ml;function hl(){}hl.prototype=x,x.i=(function(e){return e instanceof ml&&this.be===e.be&&this.bf===e.bf&&this.bc===e.bc&&this.bd===e.bd&&this.bx===e.bx}),x.t=(function(){var e=``;return this.bd!==`<jscode>`&&(e=``+e+this.bd+`.`),e=``+e+this.bx,this.be===null?e+=`(Unknown Source)`:(e=e+`(`+this.be,this.bf>=0&&(e=e+`:`+this.bf,this.bc>=0&&(e=e+`:`+this.bc)),e+=`)`),e}),x.o=(function(){return sm(this.bd)^sm(this.bx)^sm(this.be)^this.bf^this.bc});var gl=new w().i(ml,`java.lang.StackTraceElement`,{aI:1,a:1});function _l(){}x=_l.prototype=new S,x.constructor=_l;function vl(){}vl.prototype=x,x.iu=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new dm;for(var i=``,a=t;a!==r;)i+=``+er(e.a[a]),a=1+a|0;return i}),new w().i(_l,`java.lang.String$`,{dg:1,a:1});var yl;function bl(){return yl||=new _l,yl}function z(e,t,n,r,i){return e.fv=t,e.fw=i,i&&e.hS(),e}var xl=class extends Error{constructor(){super(),this.fv=null,this.fw=!1,this.fu=null,this.ck=null}ic(e){return this}bS(){return this.fv}hS(){var e=this instanceof $?this.a0:this;return this.fu=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}i2(){return this.ck===null&&(this.fw?this.ck=Jo().hR(this.fu):this.ck=new(gl.r()).C(0)),this.ck}t(){var e=qn(this),t=this.bS();return t===null?e:e+`: `+t}o(){return fr.prototype.o.call(this)}i(e){return fr.prototype.i.call(this,e)}get message(){var e=this.bS();return e===null?``:e}get name(){return qn(this)}toString(){return this.t()}};function Sl(){this.T=null,wl=this,this.T=new rp}x=Sl.prototype=new S,x.constructor=Sl;function Cl(){}Cl.prototype=x,new w().i(Sl,`scala.$less$colon$less$`,{dt:1,a:1});var wl;function Tl(){return wl||=new Sl,wl}function El(){}x=El.prototype=new S,x.constructor=El;function Dl(){}Dl.prototype=x,x.gl=(function(e,t){var n=e.D();if(n>-1){for(var r=t.iv(n),i=e.n(),a=0;a<n;)F().hf(r,a,i.j()),a=1+a|0;return r}else{var o=null,s=t.j2(),c=s===wr.l();o=[];for(var l=e.n();l.w();){var u=l.j(),d=c?ur(u):u===null?s.aG.z:u;o.push(d)}return(s===Cr.l()?ls.l():s===Xs.l()||s===hd.l()?Sr.l():s).aG.r().w(o)}}),x.gk=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().I(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new w().i(El,`scala.Array$`,{dv:1,a:1});var Ol;function kl(){return Ol||=new El,Ol}function Al(){this.fy=null,Ml=this,this.fy=new _c(ts().ft)}x=Al.prototype=new S,x.constructor=Al;function jl(){}jl.prototype=x,x.iO=(function(){return this.fy.dg}),new w().i(Al,`scala.Console$`,{dw:1,ep:1});var Ml;function Nl(){return Ml||=new Al,Ml}function Pl(){}x=Pl.prototype=new ks,x.constructor=Pl;function Fl(){}Fl.prototype=x,x.jr=(function(e){return e===null?null:e.a.length===0?Nm().fI:new Pg(e)});function Il(e,t){if(t===e)e.fT(Rp().gm(t));else for(var n=t.n();n.w();)e.dj(n.j());return e}function Ll(){}x=Ll.prototype=new S,x.constructor=Ll;function Rl(){}Rl.prototype=x,x.t=(function(){return`<function0>`});function zl(){}x=zl.prototype=new S,x.constructor=zl;function Bl(){}Bl.prototype=x,x.t=(function(){return`<function1>`});function Vl(){}x=Vl.prototype=new S,x.constructor=Vl;function Hl(){}Hl.prototype=x,x.t=(function(){return`<function2>`});function Ul(){}x=Ul.prototype=new S,x.constructor=Ul;function Wl(){}Wl.prototype=x,x.t=(function(){return`<function3>`});function Gl(e){this.cq=!1,this.cq=e}x=Gl.prototype=new S,x.constructor=Gl;function Kl(){}Kl.prototype=x,x.t=(function(){return``+this.cq}),new w().i(Gl,`scala.runtime.BooleanRef`,{eC:1,a:1});function ql(e){this.bE=0,this.bE=e}x=ql.prototype=new S,x.constructor=ql;function Jl(){}Jl.prototype=x,x.t=(function(){return``+this.bE}),new w().i(ql,`scala.runtime.IntRef`,{eE:1,a:1});function Yl(){this.x=0,this.fR=0,this.h1=0,this.h0=0,Zl=this,this.x=sm(`Seq`),this.fR=sm(`Map`),this.h1=sm(`Set`),this.h0=this.jm(Gg(),this.fR)}x=Yl.prototype=new bc,x.constructor=Yl;function Xl(){}Xl.prototype=x,x.j3=(function(e){return Oh(e)?this.ib(e,this.x):e instanceof vg?this.il(e,this.x):this.iN(e,this.x)}),new w().i(Yl,`scala.util.hashing.MurmurHash3$`,{f5:1,f4:1});var Zl;function B(){return Zl||=new Yl,Zl}var Ql=class extends xl{};function $l(){this.cD=null,this.dA=null,this.dB=null,tu=this,this.cD=Rp().fV(F().b(new(N.r()).C([]))),this.dA=new X((e=>{try{console.error(this.cx(e)+`
`+this.i1(e,`
`))}catch(e){var t=e instanceof xl?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dB=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.a0:t})),this.iW(this.dA)}x=$l.prototype=new S,x.constructor=$l;function eu(){}eu.prototype=x,x.cx=(function(e){try{var t=e.bS()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Kn(e).dp()+`: `+t}),x.i1=(function(e,t){try{return zs(Qu().jr(e.i2()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.iW=(function(e){this.cD.dj(e)}),x.al=(function(e){for(var t=this.cD.n();t.w();){var n=t.j();try{n.g(e)}catch(e){var r=e instanceof xl?e:new $(e),i=this.dB;if(n===null?i===null:n.i(i))throw r instanceof $?r.a0:r;console.warn(`Error processing an unhandled error callback:`),uc().ja(0,new Y((e=>(()=>{throw e instanceof $?e.a0:e}))(r)))}}}),new w().i($l,`com.raquo.airstream.core.AirstreamError$`,{bo:1,en:1,eo:1});var tu;function nu(){return tu||=new $l,tu}function ru(e){e.bs=!0,e.c1=void 0}function iu(e,t,n){return yf(e,Mr().dz(t,Ns().cm,!0),n)}function au(e,t){e.bs?Cf(e,t):cu(e).push(new Y((()=>{Cf(e,t)})))}function ou(e,t){e.bs?Sf(e,t):cu(e).push(new Y((()=>{Sf(e,t)})))}function su(e){return Df(e)>0}function cu(e){var t=e.c1;if(t===void 0){var n=T().B(F().b(new(Ds.r()).C([])));return e.c1=n,n}else return t}var lu=new w().i(1,`com.raquo.airstream.core.Observer`,{a3:1,X:1,V:1});function V(e,t,n){return new Bd(n.hg(t))}function uu(e,t,n,r){return new Bc(new X((e=>{(Wi(),new zi(t,null,null)).af(new X((e=>(t=>{n.g(t).a1(e)}))(e)))})),Ma())}function du(e,t){this.b4=null,this.cP=null,this.cQ=null,this.b4=e,this.cP=(n=>{var r=e.ca.g(n);r.k()||t.g(r.y())}),this.cQ=(()=>{var e=null;e=this;var t={};if(e===null)throw new $f;return t.capture=e.b4.cc,t.passive=e.b4.cb,t})()}x=du.prototype=new S,x.constructor=du;function fu(){}fu.prototype=x,x.a1=(function(e){this.hj(e,!1)}),x.hj=(function(e,t){if(If(e,this)===-1){var n=new X((t=>(E().h4(e.E,this),new wi(t.ez,new Y((()=>{var t=If(e,this);t!==-1&&(Ff(e,t),E().iY(e.E,this))})))))),r=t?qa().jn(e,n):vi().cC(e.a9,new X((t=>n.g(new Da(e,t)))),!1);return Pf(e,this,t),r}else{var i=new X((e=>void 0));return vi().gD(e.a9,new X((t=>{i.g(new Da(e,t))})),!1)}}),x.t=(function(){return`EventListener(`+this.b4.b3.cd+`)`});var pu=new w().i(du,`com.raquo.laminar.modifiers.EventListener`,{cp:1,Q:1,au:1});function mu(e,t,n){this.eC=null,this.eD=null,this.eB=null,this.eC=e,this.eD=t,this.eB=n}x=mu.prototype=new S,x.constructor=mu;function hu(){}hu.prototype=x,x.a1=(function(e){this.eB.fU(e,this.eC,this.eD)}),new w().i(mu,`com.raquo.laminar.modifiers.KeySetter`,{cq:1,Q:1,cD:1});function gu(e,t,n){this.eE=null,this.eG=null,this.eF=null,this.eE=e,this.eG=t,this.eF=n}x=gu.prototype=new S,x.constructor=gu;function _u(){}_u.prototype=x,x.a1=(function(e){this.hk(e)}),x.hk=(function(e){e.iG(this.eE);var t=this.eG,n=new X((t=>{this.eF.fU(e,t,this)}));return vi().je(e.a9,t,n)}),new w().i(gu,`com.raquo.laminar.modifiers.KeyUpdater`,{cr:1,Q:1,au:1});function H(e,t){if(this.cU=null,this.eK=null,this.eL=null,this.eK=t,Xc(this),e===null)throw W(new G,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!E().ih(e,document))throw W(new G,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eL=e,this.ir()}x=H.prototype=new S,x.constructor=H;function vu(){}vu.prototype=x,x.cw=(function(){return this.cU}),x.ga=(function(e){this.cU=e}),x.ir=(function(){return this.cU.fS(),Ua().cs(this,this.eK,void 0)}),x.aX=(function(){return this.eL}),new w().i(H,`com.raquo.laminar.nodes.RootNode`,{cI:1,ab:1,aw:1});function yu(e,t,n){this.cW=null,this.eP=null,this.eO=null,this.eP=e,this.eO=n,Zc(this,e,!1)}x=yu.prototype=new $c,x.constructor=yu;function bu(){}bu.prototype=x,x.ds=(function(){return this.eP}),x.h7=(function(){var e=this.eO;return e===void 0?void 0:e.map((e=>e.js.ap))}),new w().i(yu,`com.raquo.laminar.tags.CustomHtmlTag`,{ax:1,ay:1,ac:1});function xu(){this.ba=null,this.b5=null,this.b6=!1,this.b7=null,this.b8=!1,this.b9=null,this.bb=!1,this.eX=null,this.eY=!1,this.eR=null,this.eS=!1,this.eT=null,this.eU=!1,this.eV=null,this.eW=!1,il(this,`wa-button`)}x=xu.prototype=new ol,x.constructor=xu;function Su(){}Su.prototype=x,x.aj=(function(){return this.eY||=(this.eX=ju(),!0),this.eX}),x.h9=(function(){return this.eS||=(this.eR=Du(),!0),this.eR}),x.ac=(function(){return this.eU||=(this.eT=lo(),!0),this.eT}),x.aE=(function(){return this.eW||=(this.eV=ho(),!0),this.eV}),x.cr=(function(){return xn}),new w().i(xu,`io.github.nguyenyou.webawesome.laminar.Button$`,{cO:1,Z:1,Y:1});var Cu;function U(){return Cu||=new xu,Cu}function wu(){this.aK=null,this.bu=null,this.eZ=null,this.f0=!1,L(this,`appearance`,new nl)}x=wu.prototype=new Nc,x.constructor=wu;function Tu(){}Tu.prototype=x,x.iT=(function(){return this.f0||=(this.eZ=Du().p(`plain`),!0),this.eZ}),new w().i(wu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$`,{cP:1,a9:1,K:1});var Eu;function Du(){return Eu||=new wu,Eu}function Ou(){this.aK=null,this.bu=null,this.f1=null,this.f2=!1,L(this,`variant`,new nl)}x=Ou.prototype=new Nc,x.constructor=Ou;function ku(){}ku.prototype=x,x.aa=(function(){return this.f2||=(this.f1=ju().p(`brand`),!0),this.f1}),new w().i(Ou,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cQ:1,a9:1,K:1});var Au;function ju(){return Au||=new Ou,Au}function Mu(){this.ba=null,this.b5=null,this.b6=!1,this.b7=null,this.b8=!1,this.b9=null,this.bb=!1,this.f9=null,this.fa=!1,this.fb=null,this.fc=!1,this.f5=null,this.f6=!1,this.fd=null,this.fe=!1,this.f7=null,this.f8=!1,il(this,`wa-dialog`)}x=Mu.prototype=new ol,x.constructor=Mu;function Nu(){}Nu.prototype=x,x.iJ=(function(){return this.fa||=(this.f9=(J(),new Ac(`wa-hide`)),!0),this.f9}),x.dv=(function(){return this.fc||=(this.fb=(J(),L(new R,`open`,D().bt)),!0),this.fb}),x.P=(function(){return this.f6||=(this.f5=(J(),L(new R,`label`,D().Y)),!0),this.f5}),x.jp=(function(){return this.fe||=(this.fd=(J(),L(new R,`without-header`,D().bt)),!0),this.fd}),x.ik=(function(){return this.f8||=(this.f7=(J(),L(new R,`light-dismiss`,D().bt)),!0),this.f7}),x.cr=(function(){return Fn}),new w().i(Mu,`io.github.nguyenyou.webawesome.laminar.Dialog$`,{cT:1,Z:1,Y:1});var Pu;function Fu(){return Pu||=new Mu,Pu}function Iu(){this.ba=null,this.b5=null,this.b6=!1,this.b7=null,this.b8=!1,this.b9=null,this.bb=!1,this.fl=null,this.fm=!1,this.fj=null,this.fk=!1,il(this,`wa-icon`)}x=Iu.prototype=new ol,x.constructor=Iu;function Lu(){}Lu.prototype=x,x.is=(function(){return this.fm||=(this.fl=(J(),L(new R,`name`,D().Y)),!0),this.fl}),x.P=(function(){return this.fk||=(this.fj=(J(),L(new R,`label`,D().Y)),!0),this.fj}),x.cr=(function(){return In}),new w().i(Iu,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cV:1,Z:1,Y:1});var Ru;function zu(){return Ru||=new Iu,Ru}function Bu(){this.ba=null,this.b5=null,this.b6=!1,this.b7=null,this.b8=!1,this.b9=null,this.bb=!1,this.fp=null,this.fq=!1,this.fn=null,this.fo=!1,il(this,`wa-input`)}x=Bu.prototype=new ol,x.constructor=Bu;function Vu(){}Vu.prototype=x,x.iS=(function(){return this.fq||=(this.fp=(J(),L(new R,`placeholder`,D().Y)),!0),this.fp}),x.hh=(function(){return this.fo||=(this.fn=(J(),L(new R,`autofocus`,D().bt)),!0),this.fn}),x.cr=(function(){return Un}),new w().i(Bu,`io.github.nguyenyou.webawesome.laminar.Input$`,{cW:1,Z:1,Y:1});var Hu;function Uu(){return Hu||=new Bu,Hu}function Wu(e){if(e.aG.Z)return e.aG.Q().dp()+`[]`;for(var t=e.aG.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Gu(e){this.cX=null,this.aG=e}x=Gu.prototype=new S,x.constructor=Gu;function Ku(){}Ku.prototype=x,x.t=(function(){return(this.aG.Y?`interface `:this.aG.X?``:`class `)+this.aG.N}),x.dp=(function(){return this.cX===null&&(this.cX=Wu(this)),this.cX}),new w().i(Gu,`java.lang.Class`,{d4:1,a:1,M:1});function W(e,t){return z(e,t,null,!0,!0),e}var G=class extends xl{};new w().i(G,`java.lang.Exception`,{L:1,t:1,a:1});function qu(){}x=qu.prototype=new S,x.constructor=qu;function Ju(){}Ju.prototype=x;function Yu(){this.gX=null,Zu=this,this.gX=dd()}x=Yu.prototype=new Fl,x.constructor=Yu;function Xu(){}Xu.prototype=x,new w().i(Yu,`scala.Predef$`,{dF:1,dz:1,dA:1});var Zu;function Qu(){return Zu||=new Yu,Zu}function $u(e,t){return e.cn=t,e}function ed(){this.cn=null}x=ed.prototype=new S,x.constructor=ed;function td(){}td.prototype=x,x.dn=(function(e){return this.cn.dm(e,yh())}),x.dl=(function(e){return this.cn.dm(e,yh())});function nd(e,t){return new Cp(e).hq(t)}function rd(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?K().z:new Dp(e,r,i)}function id(e,t){for(var n=t.n();e.w()&&n.w();)if(!P().I(e.j(),n.j()))return!1;return e.w()===n.w()}function ad(){this.z=null,sd=this,this.z=new _p}x=ad.prototype=new S,x.constructor=ad;function od(){}od.prototype=x,new w().i(ad,`scala.collection.Iterator$`,{dY:1,a0:1,a:1});var sd;function K(){return sd||=new ad,sd}function cd(){}x=cd.prototype=new S,x.constructor=cd;function ld(){}ld.prototype=x,new w().i(cd,`scala.collection.immutable.Map$`,{ed:1,e3:1,a:1});var ud;function dd(){return ud||=new cd,ud}function fd(e){this.fJ=null,this.fJ=e}x=fd.prototype=new Rl,x.constructor=fd;function pd(){}pd.prototype=x,x.a3=(function(){return(0,this.fJ)()}),new w().i(fd,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ey:1,bk:1,ae:1});function q(e){this.fK=null,this.fK=e}x=q.prototype=new Bl,x.constructor=q;function md(){}md.prototype=x,x.g=(function(e){return(0,this.fK)(e)}),new w().i(q,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{ez:1,bl:1,e:1});var hd=new w().i(0,`scala.runtime.Nothing$`,{eF:1,t:1,a:1});function gd(){}x=gd.prototype=new S,x.constructor=gd;function _d(){}_d.prototype=x,x.hX=(function(e){return(t=>e.g(t))}),new w().i(gd,`scala.scalajs.js.Any$`,{eK:1,eL:1,eM:1});var vd;function yd(){return vd||=new gd,vd}function bd(){}x=bd.prototype=new Rl,x.constructor=bd;function xd(){}xd.prototype=x;function Sd(){}x=Sd.prototype=new Bl,x.constructor=Sd;function Cd(){}Cd.prototype=x;function wd(){}x=wd.prototype=new Hl,x.constructor=wd;function Td(){}Td.prototype=x;function Ed(){}x=Ed.prototype=new Wl,x.constructor=Ed;function Dd(){}Dd.prototype=x;function Od(e,t,n,r){if(this.dF=null,this.dD=!1,this.cE=null,this.dE=null,this.dF=e,this.dD=t,this.cE=n,r===null)throw new $f;this.dE=void 0}x=Od.prototype=new S,x.constructor=Od;function kd(){}kd.prototype=x,x.cz=(function(){return this.dE}),x.cu=(function(){return Dr(this)}),x.t=(function(){return Or(this)}),x.aW=(function(e){try{this.dF.g(e)}catch(e){var t=e instanceof xl?e:new $(e);this.dD?this.iI(new Gp(t)):nu().al(new Gp(t))}}),x.iI=(function(e){try{this.cE.dq(e)?this.cE.g(e):nu().al(e)}catch(n){var t=n instanceof xl?n:new $(n);nu().al(new Kp(t,e))}}),new w().i(Od,`com.raquo.airstream.core.Observer$$anon$8`,{bq:1,X:1,V:1,a3:1});function Ad(e,t){this.dN=null,this.dO=null,this.dM=null,this.c4=null,this.dO=e,this.dM=t,this.dN=void 0,this.c4=new Sh(new Y((()=>Or(this))))}x=Ad.prototype=new S,x.constructor=Ad;function jd(){}jd.prototype=x,x.cz=(function(){return this.dN}),x.t=(function(){return Or(this)}),x.aW=(function(e){su(this.c4)&&this.c4.gt(e,null)}),x.cu=(function(){return``+this.dO.a3()+this.dM}),new w().i(Ad,`com.raquo.airstream.eventbus.WriteBus`,{bB:1,X:1,V:1,a3:1});function Md(e){if(this.dY=null,this.dZ=!1,this.gJ=null,e===null)throw new $f;ta(this)}x=Md.prototype=new S,x.constructor=Md;function Nd(){}Nd.prototype=x,x.jg=(function(){return this.dZ||=(this.dY=new el(`svg`,!1),!0),this.dY}),new w().i(Md,`com.raquo.laminar.api.Laminar$svg$`,{bQ:1,c9:1,bZ:1,c1:1});function Pd(){this.d=null,Id=this,this.d=new Nh}x=Pd.prototype=new S,x.constructor=Pd;function Fd(){}Fd.prototype=x,new w().i(Pd,`com.raquo.laminar.api.package$`,{bT:1,ap:1,as:1,ao:1});var Id;function J(){return Id||=new Pd,Id}function Ld(e,t,n){return e.ce=t,e.cf=n,e}function Rd(){this.ce=null,this.cf=null}x=Rd.prototype=new Sa,x.constructor=Rd;function zd(){}zd.prototype=x,x.p=(function(e){return new mu(this,Xn(e),new gf(((e,t,n)=>{E().gB(e,t,n)})))}),new w().i(Rd,`com.raquo.laminar.keys.StyleProp`,{aa:1,K:1,a7:1,a8:1});function Bd(e){this.eN=null,this.cV=null,this.eN=Z(),this.cV=E().hv(e)}x=Bd.prototype=new S,x.constructor=Bd;function Vd(){}Vd.prototype=x,x.gC=(function(e){this.eN=e}),x.gI=(function(e){}),x.a1=(function(e){Ua().cs(e,this,void 0)}),x.jj=(function(){return this.cV.data}),x.aX=(function(){return this.cV}),new w().i(Bd,`com.raquo.laminar.nodes.TextNode`,{cK:1,ab:1,Q:1,av:1});function Hd(){}x=Hd.prototype=new S,x.constructor=Hd;function Ud(){}Ud.prototype=x;function Wd(e,t){return e===t}function Gd(e){return e?1231:1237}var Kd=new w().i(0,`java.lang.Boolean`,{d1:1,a:1,R:1,M:1},(e=>typeof e==`boolean`));function qd(e){return e}function Jd(e,t){return t instanceof Gn&&e===t.c}var Yd=new w().i(0,`java.lang.Character`,{aE:1,a:1,R:1,M:1},(e=>e instanceof Gn)),Xd=class extends G{};function Zd(){this.u=null,this.u=``}x=Zd.prototype=new S,x.constructor=Zd;function Qd(){}Qd.prototype=x,x.ha=(function(e){var t=bl().iu(e,0,e.a.length);return this.u=``+this.u+t,this}),x.t=(function(){return this.u}),x.l=(function(){return this.u.length}),x.g8=(function(e){return this.u.charCodeAt(e)}),new w().i(Zd,`java.lang.StringBuilder`,{dh:1,ad:1,aC:1,a:1});function $d(){}x=$d.prototype=new Ju,x.constructor=$d;function ef(){}ef.prototype=x;function tf(){}x=tf.prototype=new S,x.constructor=tf;function nf(){}nf.prototype=x,x.t=(function(){return`<function1>`}),x.dq=(function(e){return!1}),x.hd=(function(e){throw new lp(e)}),x.g=(function(e){this.hd(e)}),new w().i(tf,`scala.PartialFunction$$anon$1`,{dE:1,g:1,e:1,a:1});function rf(){}x=rf.prototype=new S,x.constructor=rf;function af(){}af.prototype=x,x.n=(function(){return this}),x.cv=(function(e){return this.bX(e,-1)}),x.bX=(function(e,t){return rd(this,e,t)}),x.t=(function(){return`<iterator>`}),x.bG=(function(e,t,n,r){return Bs(this,e,t,n,r)}),x.D=(function(){return-1});function of(e,t){return e.co=t,e}function sf(){this.co=null}x=sf.prototype=new S,x.constructor=sf;function cf(){}cf.prototype=x,x.fV=(function(e){return this.co.dl(e)}),x.gm=(function(e){return this.co.dn(e)}),x.dn=(function(e){return this.gm(e)}),x.dl=(function(e){return this.fV(e)});function lf(e,t){return t>=0&&e.aD(t)>0}function uf(e){return e.aD(0)===0}function df(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:id(e.n(),t)}function Y(e){this.fN=null,this.fN=e}x=Y.prototype=new xd,x.constructor=Y;function ff(){}ff.prototype=x,x.a3=(function(){return(0,this.fN)()}),new w().i(Y,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eS:1,eR:1,bk:1,ae:1});function X(e){this.fO=null,this.fO=e}x=X.prototype=new Cd,x.constructor=X;function pf(){}pf.prototype=x,x.g=(function(e){return(0,this.fO)(e)}),new w().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eU:1,eT:1,bl:1,e:1});function mf(e){this.fP=null,this.fP=e}x=mf.prototype=new Td,x.constructor=mf;function hf(){}hf.prototype=x,x.dk=(function(e,t){return(0,this.fP)(e,t)}),new w().i(mf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eW:1,eV:1,eA:1,dx:1});function gf(e){this.fQ=null,this.fQ=e}x=gf.prototype=new Dd,x.constructor=gf;function _f(){}_f.prototype=x,x.fU=(function(e,t,n){return(0,this.fQ)(e,t,n)}),new w().i(gf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eY:1,eX:1,eB:1,dy:1});function vf(e){e.bq=T().B(F().b(new(lu.r()).C([]))),e.br=T().B(F().b(new(Er.r()).C([]))),e.c3=!1}function yf(e,t,n){var r=Jr(),i=(()=>{wf(e);var r=bf(e,t,n);return Tf(e),r}),a=!su(e);if(r.C||!a)var o=i();else{r.C=!0;try{var o=i()}finally{r.C=!1,Wr(r)}}return o}function bf(e,t,n){var r=new wi(n,new Y((()=>{au(e,t)})));return e.bq.push(t),r}function xf(e,t,n){var r=Jr(),i=(()=>{!su(e)&&n&&wf(e),e.br.push(t),Tf(e)}),a=!su(e);if(r.C||!a)i();else{r.C=!0;try{i()}finally{r.C=!1,Wr(r)}}}function Sf(e,t){Ir().gz(e.br,t)&&Ef(e)}function Cf(e,t){Ir().gz(e.bq,t)&&Ef(e)}function wf(e){e.c3||=(e.iM(),!0)}function Tf(e){Df(e)===1&&e.iK()}function Ef(e){su(e)||(e.iL(),e.c3=!1)}function Df(e){var t=e.bq.length,n=e.br;return(t|0)+(n.length|0)|0}function Of(){this.dJ=null,this.bp=null,this.dI=null,this.dJ=void 0,this.bp=new Ad(new Y((()=>Or(this))),`.writer`),this.dI=this.bp.c4}x=Of.prototype=new S,x.constructor=Of;function kf(){}kf.prototype=x,x.cz=(function(){return this.dJ}),x.cu=(function(){return Dr(this)}),x.t=(function(){return Or(this)}),x.gE=(function(){return this.dI}),new w().i(Of,`com.raquo.airstream.eventbus.EventBus`,{by:1,a4:1,a5:1,X:1,V:1});function Af(e,t){this.c9=null,this.cM=null,this.c9=e,this.cM=t}x=Af.prototype=new S,x.constructor=Af;function jf(){}jf.prototype=x,x.a1=(function(e){var t=this.cM;t!==void 0&&t.gu(e,this.c9),Ua().cs(e,this.c9,void 0)}),x.jo=(function(e){return new Af(this.c9,e.hc(this.cM))});var Mf=new w().i(Af,`com.raquo.laminar.inserters.StaticChildInserter`,{ce:1,Q:1,cc:1,cg:1,cb:1});function Nf(e){e.cR=new Di(new Y((()=>{e.a9.fS()})),new Y((()=>{e.a9.hw()}))),e.aL=void 0}function Pf(e,t,n){if(e.aL===void 0)e.aL=T().B(F().b(new(pu.r()).C([t])));else if(n){var r=e.aL;if(r===void 0){var i;throw new np(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aL;if(a===void 0){var o;throw new np(`undefined.get`)}else var o=a;o.push(t)}}function Ff(e,t){var n=e.aL;n!==void 0&&n.splice(t,1)}function If(e,t){var n=e.aL;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Jn(a,t))?r=!0:i=1+i|0}return r?i:-1}function Lf(e,t){zf(e,e.ci,t)&&Bf(e,t)}function Rf(e,t){var n=e.ci;e.ci=t,zf(e,n,t)||Bf(e,t)}function zf(e,t,n){var r=!t.k()&&!t.y().cw().L.k(),i=!n.k()&&!n.y().cw().L.k();return r&&!i}function Bf(e,t){Vf(e,t.k()?Z():new Q(t.y().cw()))}function Vf(e,t){if(t.k())e.cR.ho();else{var n=t.y();e.cR.j7(n)}}function Hf(){}x=Hf.prototype=new Ud,x.constructor=Hf;function Uf(){}Uf.prototype=x;var Wf=class extends Xd{constructor(e){super(),z(this,e,null,!0,!0)}};new w().i(Wf,`java.lang.ArithmeticException`,{d0:1,S:1,L:1,t:1,a:1});var Gf=new w().i(0,`java.lang.Byte`,{d2:1,U:1,a:1,R:1,M:1},(e=>ar(e)));function Kf(e,t){return z(e,t,null,!0,!0),e}function qf(e){return z(e,null,null,!0,!0),e}var Jf=class extends Xd{};new w().i(Jf,`java.lang.IllegalArgumentException`,{d7:1,S:1,L:1,t:1,a:1});function Yf(e,t){return z(e,t,null,!0,!0),e}var Xf=class extends Xd{};new w().i(Xf,`java.lang.IndexOutOfBoundsException`,{aG:1,S:1,L:1,t:1,a:1});function Zf(){}x=Zf.prototype=new Ud,x.constructor=Zf;function Qf(){}Qf.prototype=x,new w().i(Zf,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{da:1,aB:1,az:1,aD:1,aA:1});var $f=class extends Xd{constructor(){super(),z(this,null,null,!0,!0)}};new w().i($f,`java.lang.NullPointerException`,{db:1,S:1,L:1,t:1,a:1});var ep=new w().i(0,`java.lang.Short`,{dc:1,U:1,a:1,R:1,M:1},(e=>or(e))),tp=class extends Xd{constructor(e){super(),z(this,e,null,!0,!0)}};new w().i(tp,`java.lang.UnsupportedOperationException`,{dk:1,S:1,L:1,t:1,a:1});var np=class extends Xd{constructor(e){super(),z(this,e,null,!0,!0)}};new w().i(np,`java.util.NoSuchElementException`,{dp:1,S:1,L:1,t:1,a:1});function rp(){}x=rp.prototype=new ef,x.constructor=rp;function ip(){}ip.prototype=x,x.g=(function(e){return e}),x.t=(function(){return`generalized constraint`}),new w().i(rp,`scala.$less$colon$less$$anon$1`,{du:1,dr:1,ds:1,e:1,a:1});function ap(e){return e.d2||=(e.d3=e.cl===null?`null`:cp(e),!0),e.d3}function op(e){return e.d2?e.d3:ap(e)}function sp(e){var t=e.cl;return`of class `+qn(t)}function cp(e){try{return e.cl+` (`+sp(e)+`)`}catch{return`an instance `+sp(e)}}var lp=class extends Xd{constructor(e){super(),this.d3=null,this.cl=null,this.d2=!1,this.cl=e,z(this,null,null,!0,!0)}bS(){return op(this)}};new w().i(lp,`scala.MatchError`,{dB:1,S:1,L:1,t:1,a:1});function up(){}x=up.prototype=new S,x.constructor=up;function dp(){}dp.prototype=x,x.k=(function(){return this===Z()}),x.D=(function(){return this.k()?0:1}),x.n=(function(){return this.k()?K().z:new yp(this.y())});function fp(e){this.by=0,this.fB=0,this.fA=null,this.fA=e,this.by=0,this.fB=e.ag()}x=fp.prototype=new af,x.constructor=fp;function pp(){}pp.prototype=x,x.w=(function(){return this.by<this.fB}),x.j=(function(){var e=this.fA.ah(this.by);return this.by=1+this.by|0,e}),new w().i(fp,`scala.Product$$anon$1`,{dG:1,r:1,s:1,b:1,c:1});function mp(e){this.cn=null,$u(this,e)}x=mp.prototype=new td,x.constructor=mp;function hp(){}hp.prototype=x,new w().i(mp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dU:1,dT:1,a0:1,a:1,af:1});function gp(e){return zs(e,e.bi()+`(`,`, `,`)`)}function _p(){}x=_p.prototype=new af,x.constructor=_p;function vp(){}vp.prototype=x,x.w=(function(){return!1}),x.iw=(function(){throw new np(`next on empty iterator`)}),x.D=(function(){return 0}),x.bX=(function(e,t){return this}),x.j=(function(){this.iw()}),new w().i(_p,`scala.collection.Iterator$$anon$19`,{dZ:1,r:1,s:1,b:1,c:1});function yp(e){this.bA=!1,this.fF=null,this.fF=e,this.bA=!1}x=yp.prototype=new af,x.constructor=yp;function bp(){}bp.prototype=x,x.w=(function(){return!this.bA}),x.j=(function(){return this.bA?K().z.j():(this.bA=!0,this.fF)}),x.bX=(function(e,t){return this.bA||e>0||t===0?K().z:this}),new w().i(yp,`scala.collection.Iterator$$anon$20`,{e0:1,r:1,s:1,b:1,c:1});function xp(e){for(;;){if(e.G instanceof Cp){var t=e.G;e.G=t.G,e.ar=t.ar,t.V!==null&&(e.U===null&&(e.U=t.U),t.U.bB=e.V,e.V=t.V);continue}return}}function Sp(e){for(;;)if(e.V===null)return e.G=null,e.U=null,!1;else{if(e.G=e.V.i6(),e.U===e.V&&(e.U=e.U.bB),e.V=e.V.bB,xp(e),e.ar)return!0;if(e.G!==null&&e.G.w())return e.ar=!0,!0}}function Cp(e){this.G=null,this.V=null,this.U=null,this.ar=!1,this.G=e,this.V=null,this.U=null,this.ar=!1}x=Cp.prototype=new af,x.constructor=Cp;function wp(){}wp.prototype=x,x.w=(function(){return this.ar?!0:this.G===null?!1:this.G.w()?(this.ar=!0,!0):Sp(this)}),x.j=(function(){return this.w()?(this.ar=!1,this.G.j()):K().z.j()}),x.hq=(function(e){var t=new Vs(e,null);return this.V===null?(this.V=t,this.U=t):(this.U.bB=t,this.U=t),this.G===null&&(this.G=K().z),this}),new w().i(Cp,`scala.collection.Iterator$ConcatIterator`,{aQ:1,r:1,s:1,b:1,c:1});function Tp(e){for(;e.ak>0;)e.as.w()?(e.as.j(),e.ak=-1+e.ak|0):e.ak=0}function Ep(e,t){if(e.N<0)return-1;var n=e.N-t|0;return n<0?0:n}function Dp(e,t,n){this.as=null,this.N=0,this.ak=0,this.as=e,this.N=n,this.ak=t}x=Dp.prototype=new af,x.constructor=Dp;function Op(){}Op.prototype=x,x.D=(function(){var e=this.as.D();if(e<0)return-1;var t=e-this.ak|0,n=t<0?0:t;if(this.N<0)return n;var r=this.N;return r<n?r:n}),x.w=(function(){return Tp(this),this.N!==0&&this.as.w()}),x.j=(function(){return Tp(this),this.N>0?(this.N=-1+this.N|0,this.as.j()):this.N<0?this.as.j():K().z.j()}),x.bX=(function(e,t){var n=e>0?e:0;if(t<0)var r=Ep(this,n);else if(t<=n)var r=0;else if(this.N<0)var r=t-n|0;else var i=Ep(this,n),a=t-n|0,r=i<a?i:a;var o=this.ak+n|0;return r===0?K().z:o<0?(this.ak=2147483647,this.N=0,nd(this,new fd((()=>new Dp(this.as,-2147483647+o|0,r))))):(this.ak=o,this.N=r,this)}),new w().i(Dp,`scala.collection.Iterator$SliceIterator`,{e2:1,r:1,s:1,b:1,c:1});function kp(e,t){return t>=0&&e.aD(t)>0}function Ap(e,t){if(t<0)throw Yf(new Xf,``+t);var n=e.hB(t);if(n.k())throw Yf(new Xf,``+t);return n.a6()}function jp(e,t){return kh(t)?Mp(e,e,t):df(e,t)}function Mp(e,t,n){for(;;)if(t===n)return!0;else if(!t.k()&&!n.k()&&P().I(t.a6(),n.a6())){var r=t.Q(),i=n.Q();t=r,n=i}else return t.k()&&n.k()}function Np(e){this.bD=null,this.bD=e}x=Np.prototype=new af,x.constructor=Np;function Pp(){}Pp.prototype=x,x.w=(function(){return!this.bD.k()}),x.j=(function(){var e=this.bD.a6();return this.bD=this.bD.Q(),e}),new w().i(Np,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{e7:1,r:1,s:1,b:1,c:1});function Fp(){this.co=null,of(this,Wp())}x=Fp.prototype=new cf,x.constructor=Fp;function Ip(){}Ip.prototype=x,new w().i(Fp,`scala.collection.mutable.Buffer$`,{ei:1,e4:1,af:1,a0:1,a:1});var Lp;function Rp(){return Lp||=new Fp,Lp}function zp(e){this.bF=0,this.fL=0,this.fM=null,this.fM=e,this.bF=0,this.fL=e.ag()}x=zp.prototype=new af,x.constructor=zp;function Bp(){}Bp.prototype=x,x.w=(function(){return this.bF<this.fL}),x.j=(function(){var e=this.fM.ah(this.bF);return this.bF=1+this.bF|0,e}),new w().i(zp,`scala.runtime.ScalaRunTime$$anon$1`,{eI:1,r:1,s:1,b:1,c:1});function Vp(){}x=Vp.prototype=new S,x.constructor=Vp;function Hp(){}Hp.prototype=x,x.dl=(function(e){return this.gn(e)}),x.gn=(function(e){return Il(Zg(new Qg),e).gA()}),x.dn=(function(e){return this.gn(e)}),new w().i(Vp,`scala.scalajs.js.WrappedArray$`,{eO:1,e8:1,af:1,a0:1,a:1});var Up;function Wp(){return Up||=new Vp,Up}var Gp=class e extends Ql{constructor(e){super(),this.bm=null,this.bm=e,z(this,`ObserverError: `+nu().cx(e),null,!0,!0)}aF(){return new fp(this)}o(){return B().cB(this,-889275714,!1)}i(t){if(this===t)return!0;if(t instanceof e){var n=this.bm,r=t.bm;return n===null?r===null:n.i(r)}else return!1}ag(){return 1}ai(){return`ObserverError`}ah(e){if(e===0)return this.bm;throw Yf(new Xf,``+e)}t(){return`ObserverError: `+this.bm}};new w().i(Gp,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ah:1,a2:1,t:1,a:1,d:1,T:1});var Kp=class e extends Ql{constructor(e,t){super(),this.bo=null,this.bn=null,this.bo=e,this.bn=t,z(this,`ObserverErrorHandlingError: `+nu().cx(e)+`; cause: `+nu().cx(t),null,!0,!0),this.ic(t)}aF(){return new fp(this)}o(){return B().cB(this,-889275714,!1)}i(t){if(this===t)return!0;if(t instanceof e){var n=this.bo,r=t.bo;if(n===null?r===null:n.i(r)){var i=this.bn,a=t.bn;return i===null?a===null:i.i(a)}else return!1}else return!1}ag(){return 2}ai(){return`ObserverErrorHandlingError`}ah(e){if(e===0)return this.bo;if(e===1)return this.bn;throw Yf(new Xf,``+e)}t(){return`ObserverErrorHandlingError: `+this.bo+`; cause: `+this.bn}};new w().i(Kp,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ai:1,a2:1,t:1,a:1,d:1,T:1});var qp=class e extends Ql{constructor(e,t){super(),this.aZ=null,this.aY=0,this.aZ=e,this.aY=t,z(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aF(){return new fp(this)}o(){var e=-889275714;return e=I().c(e,sm(`TransactionDepthExceeded`)),e=I().c(e,I().A(this.aZ)),e=I().c(e,this.aY),I().m(e,2)}i(t){return this===t?!0:t instanceof e&&this.aY===t.aY?this.aZ===t.aZ:!1}ag(){return 2}ai(){return`TransactionDepthExceeded`}ah(e){if(e===0)return this.aZ;if(e===1)return this.aY;throw Yf(new Xf,``+e)}t(){return`TransactionDepthExceeded: `+this.aZ+`; maxDepth: `+this.aY}};new w().i(qp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aj:1,a2:1,t:1,a:1,d:1,T:1});var Jp=new w().i(1,`com.raquo.airstream.core.EventStream`,{al:1,a4:1,V:1,ak:1,an:1,a5:1});function Yp(e,t){var n=e.cS;n===void 0?e.cS=oc().he(T().B(F().b(new(um.r()).C([t])))):n.push(t)|0}function Xp(e,t){var n=e.eJ;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].jZ()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function Zp(e,t){this.ci=null,this.a9=null,this.cR=null,this.aL=null,this.cT=null,this.E=null,this.eJ=null,this.cS=null,this.cT=e,this.E=t,this.ci=Z(),Xc(this),Nf(this),this.eJ=void 0,this.cS=void 0}x=Zp.prototype=new S,x.constructor=Zp;function Qp(){}Qp.prototype=x,x.a1=(function(e){Ua().cs(e,this,void 0)}),x.cw=(function(){return this.a9}),x.ga=(function(e){this.a9=e}),x.gI=(function(e){Lf(this,e)}),x.gC=(function(e){Rf(this,e)}),x.hs=(function(){if(E().ig(this.E)){var e=this.cT;return e instanceof yu?e.h7():void 0}else return oa().ev}),x.id=(function(e){var t=this.hs();return t!==void 0&&Fi().ia(t,e,0)}),x.iG=(function(e){if(e instanceof Pc&&this.id(e.ap)){if(Xp(this,e.ap))throw W(new G,"Can not add uncontrolled `"+e.ap+" <-- ???` to element `"+E().gb(this.E)+"` that already has an input controller for `"+e.ap+"` property.");Yp(this,e.ap)}}),x.t=(function(){return`ReactiveHtmlElement(`+(this.E===null?`tag=`+this.cT.ds():this.E.outerHTML)+`)`}),x.aX=(function(){return this.E}),new w().i(Zp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cH:1,ab:1,Q:1,av:1,aw:1,cF:1});function $p(e,t){return Object.is(e,t)}function em(e){return Co().dt(e)}var tm=new w().i(0,`java.lang.Double`,{aF:1,U:1,a:1,R:1,M:1,W:1},(e=>typeof e==`number`)),nm=new w().i(0,`java.lang.Float`,{d5:1,U:1,a:1,R:1,M:1,W:1},(e=>cr(e))),rm=new w().i(0,`java.lang.Integer`,{d8:1,U:1,a:1,R:1,M:1,W:1},(e=>sr(e)));function im(e,t){return t instanceof M&&e.e===t.e&&e.f===t.f}function am(e){return e.e^e.f}var om=new w().i(0,`java.lang.Long`,{aH:1,U:1,a:1,R:1,M:1,W:1},(e=>e instanceof M));function sm(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function cm(e,t){return e===t}function lm(e,t){var n=ul().jl(t);return e.indexOf(n)|0}var um=new w().i(0,`java.lang.String`,{df:1,a:1,R:1,ad:1,M:1,W:1},(e=>typeof e==`string`)),dm=class extends Xf{constructor(){super(),z(this,null,null,!0,!0)}};new w().i(dm,`java.lang.StringIndexOutOfBoundsException`,{di:1,aG:1,S:1,L:1,t:1,a:1});function fm(){}x=fm.prototype=new dp,x.constructor=fm;function pm(){}pm.prototype=x,x.hY=(function(){throw new np(`None.get`)}),x.ai=(function(){return`None`}),x.ag=(function(){return 0}),x.ah=(function(e){return I().bT(e)}),x.aF=(function(){return new zp(this)}),x.o=(function(){return 2433880}),x.t=(function(){return`None`}),x.y=(function(){this.hY()}),new w().i(fm,`scala.None$`,{dC:1,aL:1,b:1,T:1,d:1,a:1});var mm;function Z(){return mm||=new fm,mm}function Q(e){this.bz=null,this.bz=e}x=Q.prototype=new dp,x.constructor=Q;function hm(){}hm.prototype=x,x.y=(function(){return this.bz}),x.ai=(function(){return`Some`}),x.ag=(function(){return 1}),x.ah=(function(e){return e===0?this.bz:I().bT(e)}),x.aF=(function(){return new zp(this)}),x.o=(function(){return B().cB(this,-889275714,!1)}),x.t=(function(){return F().h3(this)}),x.i=(function(e){return this===e||e instanceof Q&&P().I(this.bz,e.bz)}),new w().i(Q,`scala.Some`,{aM:1,aL:1,b:1,T:1,d:1,a:1});function gm(){}x=gm.prototype=new S,x.constructor=gm;function _m(){}_m.prototype=x,x.bi=(function(){return this.bl()}),x.af=(function(e){Rs(this,e)}),x.bG=(function(e,t,n,r){return Bs(this,e,t,n,r)}),x.D=(function(){return-1});function vm(e,t){return e.M=t,e.h=0,e.F=ms().bj(e.M),e}function ym(){this.M=null,this.h=0,this.F=0}x=ym.prototype=new af,x.constructor=ym;function bm(){}bm.prototype=x,x.D=(function(){return this.F-this.h|0}),x.w=(function(){return this.h<this.F}),x.j=(function(){this.h>=ms().bj(this.M)&&K().z.j();var e=F().bh(this.M,this.h);return this.h=1+this.h|0,e}),x.cv=(function(e){if(e>0){var t=this.h+e|0;if(t<0)var n=this.F;else var r=this.F,n=r<t?r:t;this.h=n}return this}),new w().i(ym,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function xm(e,t){return t<0?0:t>e.Z?e.Z:t}function Sm(e){this.fE=null,this.aq=0,this.Z=0,this.fE=e,this.aq=0,this.Z=e.l()}x=Sm.prototype=new af,x.constructor=Sm;function Cm(){}Cm.prototype=x,x.D=(function(){return this.Z}),x.w=(function(){return this.Z>0}),x.j=(function(){if(this.Z>0){var e=this.fE.q(this.aq);return this.aq=1+this.aq|0,this.Z=-1+this.Z|0,e}else return K().z.j()}),x.cv=(function(e){if(e>0){this.aq=this.aq+e|0;var t=this.Z-e|0;this.Z=t<0?0:t}return this}),x.bX=(function(e,t){var n=xm(this,e),r=xm(this,t)-n|0;return this.Z=r<0?0:r,this.aq=this.aq+n|0,this}),new w().i(Sm,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dX:1,r:1,s:1,b:1,c:1,a:1});function wm(e){return e.dd||=(e.de=new ug(new C(0)),!0),e.de}function Tm(e){return e.dd?e.de:wm(e)}function Em(){this.de=null,this.gY=null,this.dd=!1,Om=this,this.gY=new mp(this)}x=Em.prototype=new S,x.constructor=Em;function Dm(){}Dm.prototype=x,x.hV=(function(e,t){return e instanceof Kh?e:this.gF(kl().gl(e,t))}),x.gF=(function(e){if(e===null)return null;if(e instanceof C)return new ug(e);if(e instanceof vr)return new og(e);if(e instanceof xr)return new ng(e);if(e instanceof yr)return new cg(e);if(e instanceof br)return new ig(e);if(e instanceof hr)return new eg(e);if(e instanceof gr)return new Qh(e);if(e instanceof _r)return new fg(e);if(e instanceof mr)return new Xh(e);if(cs(e,1))return new mg(e);throw new lp(e)}),x.dm=(function(e,t){return this.hV(e,t)}),new w().i(Em,`scala.collection.immutable.ArraySeq$`,{ec:1,aS:1,aO:1,aN:1,aP:1,a:1});var Om;function km(){return Om||=new Em,Om}function Am(){this.gZ=null,this.fI=null,Mm=this,this.gZ=new mp(this),this.fI=new Pg(new C(0))}x=Am.prototype=new S,x.constructor=Am;function jm(){}jm.prototype=x,x.hW=(function(e,t){return this.im(kl().gl(e,t))}),x.im=(function(e){if(e===null)return null;if(e instanceof C)return new Pg(e);if(e instanceof vr)return new Ag(e);if(e instanceof xr)return new Eg(e);if(e instanceof yr)return new Mg(e);if(e instanceof br)return new Og(e);if(e instanceof hr)return new wg(e);if(e instanceof gr)return new Sg(e);if(e instanceof _r)return new Ig(e);if(e instanceof mr)return new bg(e);if(cs(e,1))return new Rg(e);throw new lp(e)}),x.dm=(function(e,t){return this.hW(e,t)}),new w().i(Am,`scala.collection.mutable.ArraySeq$`,{eg:1,aS:1,aO:1,aN:1,aP:1,a:1});var Mm;function Nm(){return Mm||=new Am,Mm}function Pm(e){this.ce=null,this.cf=null,this.et=null,this.eu=!1,Ld(this,e,Gg())}x=Pm.prototype=new zd,x.constructor=Pm;function Fm(){}Fm.prototype=x,x.gH=(function(){return this.eu||=(this.et=Dc(this),!0),this.et}),new w().i(Pm,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{c6:1,aa:1,K:1,a7:1,a8:1,aq:1,ar:1});function Im(){}x=Im.prototype=new Uf,x.constructor=Im;function Lm(){}Lm.prototype=x;function Rm(e){this.M=null,this.h=0,this.F=0,this.d4=null,this.d4=e,vm(this,e)}x=Rm.prototype=new bm,x.constructor=Rm;function zm(){}zm.prototype=x,x.ix=(function(){this.h>=this.d4.a.length&&K().z.j();var e=this.d4.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.ix()}),new w().i(Rm,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dK:1,N:1,r:1,s:1,b:1,c:1,a:1});function Bm(e){this.M=null,this.h=0,this.F=0,this.d5=null,this.d5=e,vm(this,e)}x=Bm.prototype=new bm,x.constructor=Bm;function Vm(){}Vm.prototype=x,x.iy=(function(){this.h>=this.d5.a.length&&K().z.j();var e=this.d5.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return lr(this.iy())}),new w().i(Bm,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dL:1,N:1,r:1,s:1,b:1,c:1,a:1});function Hm(e){this.M=null,this.h=0,this.F=0,this.d6=null,this.d6=e,vm(this,e)}x=Hm.prototype=new bm,x.constructor=Hm;function Um(){}Um.prototype=x,x.iz=(function(){this.h>=this.d6.a.length&&K().z.j();var e=this.d6.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.iz()}),new w().i(Hm,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dM:1,N:1,r:1,s:1,b:1,c:1,a:1});function Wm(e){this.M=null,this.h=0,this.F=0,this.d7=null,this.d7=e,vm(this,e)}x=Wm.prototype=new bm,x.constructor=Wm;function Gm(){}Gm.prototype=x,x.iA=(function(){this.h>=this.d7.a.length&&K().z.j();var e=this.d7.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.iA()}),new w().i(Wm,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dN:1,N:1,r:1,s:1,b:1,c:1,a:1});function Km(e){this.M=null,this.h=0,this.F=0,this.d8=null,this.d8=e,vm(this,e)}x=Km.prototype=new bm,x.constructor=Km;function qm(){}qm.prototype=x,x.iB=(function(){this.h>=this.d8.a.length&&K().z.j();var e=this.d8.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.iB()}),new w().i(Km,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dO:1,N:1,r:1,s:1,b:1,c:1,a:1});function Jm(e){this.M=null,this.h=0,this.F=0,this.d9=null,this.d9=e,vm(this,e)}x=Jm.prototype=new bm,x.constructor=Jm;function Ym(){}Ym.prototype=x,x.iC=(function(){this.h>=this.d9.a.length&&K().z.j();var e=this.d9.a[this.h],t=e.e,n=e.f;return this.h=1+this.h|0,new M(t,n)}),x.j=(function(){return this.iC()}),new w().i(Jm,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dP:1,N:1,r:1,s:1,b:1,c:1,a:1});function Xm(e){this.M=null,this.h=0,this.F=0,this.da=null,this.da=e,vm(this,e)}x=Xm.prototype=new bm,x.constructor=Xm;function Zm(){}Zm.prototype=x,x.iD=(function(){this.h>=this.da.a.length&&K().z.j();var e=this.da.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.iD()}),new w().i(Xm,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dQ:1,N:1,r:1,s:1,b:1,c:1,a:1});function Qm(e){this.M=null,this.h=0,this.F=0,this.fD=null,this.fD=e,vm(this,e)}x=Qm.prototype=new bm,x.constructor=Qm;function $m(){}$m.prototype=x,x.iE=(function(){this.h>=this.fD.a.length&&K().z.j(),this.h=1+this.h|0}),x.j=(function(){this.iE()}),new w().i(Qm,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dR:1,N:1,r:1,s:1,b:1,c:1,a:1});function eh(e){this.M=null,this.h=0,this.F=0,this.db=null,this.db=e,vm(this,e)}x=eh.prototype=new bm,x.constructor=eh;function th(){}th.prototype=x,x.iF=(function(){this.h>=this.db.a.length&&K().z.j();var e=this.db.a[this.h];return this.h=1+this.h|0,e}),x.j=(function(){return this.iF()}),new w().i(eh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dS:1,N:1,r:1,s:1,b:1,c:1,a:1});function nh(e){return e.bi()+`(<not computed>)`}function rh(){}x=rh.prototype=new S,x.constructor=rh;function ih(){}ih.prototype=x;var $=class e extends Xd{constructor(e){super(),this.a0=null,this.a0=e,z(this,null,null,!0,!0)}bS(){return Xn(this.a0)}ai(){return`JavaScriptException`}ag(){return 1}ah(e){return e===0?this.a0:I().bT(e)}aF(){return new zp(this)}o(){return B().cB(this,-889275714,!1)}i(t){return this===t||t instanceof e&&P().I(this.a0,t.a0)}};new w().i($,`scala.scalajs.js.JavaScriptException`,{bm:1,S:1,L:1,t:1,a:1,T:1,d:1});function ah(e,t,n){e.bs=!1;for(var r=e.bq,i=0;i<(r.length|0);){var a=r[i];i=1+i|0;try{a.aW(t)}catch(e){var o=e instanceof xl?e:new $(e);nu().al(new Gp(o))}}for(var s=e.br,c=0;c<(s.length|0);){var l=s[c];c=1+c|0,l.gt(t,n)}e.bs=!0;var u=e.c1;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].a3(),d=1+d|0;u.length=0}}function oh(e){this.ce=null,this.cf=null,this.er=null,this.es=!1,Ld(this,e,Gg())}x=oh.prototype=new zd,x.constructor=oh;function sh(){}sh.prototype=x,x.gH=(function(){return this.es||=(this.er=Dc(this),!0),this.er}),new w().i(oh,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{c5:1,aa:1,K:1,a7:1,a8:1,c7:1,aq:1,ar:1});function ch(e,t){typeof console<`u`&&(e.fs&&console.error?console.error(t):console.log(t))}function lh(e){this.fs=!1,this.bw=null,this.fs=e,new Zf,this.bw=``}x=lh.prototype=new Lm,x.constructor=lh;function uh(){}uh.prototype=x,x.ii=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bw=``+this.bw+t,t=``;else{var r=this.bw,i=t;ch(this,``+r+i.substring(0,n)),this.bw=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new w().i(lh,`java.lang.JSConsoleBasedPrintStream`,{d9:1,cZ:1,cY:1,aB:1,az:1,aD:1,aA:1,aC:1});function dh(e,t,n){for(;;)if(t<=0||n.k())return n;else{var r=-1+t|0,i=n.Q();t=r,n=i}}function fh(){this.df=null}x=fh.prototype=new ih,x.constructor=fh;function ph(){}ph.prototype=x,x.t=(function(){return this.df}),x.i=(function(e){return this===e}),x.o=(function(){return ir(this)});function mh(){}x=mh.prototype=new _m,x.constructor=mh;function hh(){}hh.prototype=x,x.t=(function(){return nh(this)});function gh(){this.df=null,this.df=`Any`}x=gh.prototype=new ph,x.constructor=gh;function _h(){}_h.prototype=x,x.j2=(function(){return Sr.l()}),x.iv=(function(e){return new C(e)}),new w().i(gh,`scala.reflect.ManifestFactory$AnyManifest$`,{eu:1,ew:1,ev:1,et:1,es:1,er:1,ex:1,a:1,d:1});var vh;function yh(){return vh||=new gh,vh}function bh(e,t){return e===t?!0:xh(t)&&t.g7(e)?e.dx(t):!1}function xh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Sh(e){this.dK=null,this.bs=!1,this.c1=null,this.bq=null,this.br=null,this.c3=!1,this.dL=null,this.c2=null,this.dL=e,this.dK=void 0,ru(this),vf(this),this.c2=T().B(F().b(new(Jp.r()).C([])))}x=Sh.prototype=new S,x.constructor=Sh;function Ch(){}Ch.prototype=x,x.cz=(function(){return this.dK}),x.t=(function(){return Or(this)}),x.i=(function(e){return this===e}),x.o=(function(){return ir(this)}),x.gE=(function(){return this}),x.gt=(function(e,t){new Lr(new X((t=>{ah(this,e,t)})))}),x.iM=(function(){for(var e=this.c2,t=0,n=e.length|0;t<n;)wf(e[t]),t=1+t|0}),x.iK=(function(){for(var e=this.c2,t=0,n=e.length|0;t<n;)xf(e[t],this,!1),t=1+t|0}),x.iL=(function(){for(var e=this.c2,t=0,n=e.length|0;t<n;)ou(e[t],this),t=1+t|0}),x.cu=(function(){return this.dL.a3()+`.events`}),new w().i(Sh,`com.raquo.airstream.eventbus.EventBusStream`,{bA:1,a4:1,V:1,ak:1,an:1,a5:1,al:1,bw:1,bx:1,am:1,bn:1});function wh(){}x=wh.prototype=new _m,x.constructor=wh;function Th(){}Th.prototype=x,x.g7=(function(e){return!0}),x.i=(function(e){return bh(this,e)}),x.o=(function(){return B().j3(this)}),x.t=(function(){return gp(this)}),x.gp=(function(e){return lf(this,e)}),x.k=(function(){return uf(this)}),x.dx=(function(e){return df(this,e)}),x.dq=(function(e){return this.gp(e|0)});function Eh(){}x=Eh.prototype=new hh,x.constructor=Eh;function Dh(){}Dh.prototype=x;function Oh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function kh(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function Ah(e,t){return e.bC=t,e}function jh(){this.bC=null}x=jh.prototype=new Dh,x.constructor=jh;function Mh(){}Mh.prototype=x,x.q=(function(e){return this.bC.q(e)}),x.l=(function(){return this.bC.l()}),x.k=(function(){return this.bC.k()});function Nh(){this.eg=null,this.ej=!1,this.e4=null,this.e5=!1,this.e2=null,this.e3=!1,this.eo=null,this.ep=!1,this.e8=null,this.e9=!1,this.ec=null,this.ed=!1,this.ea=null,this.eb=!1,this.ee=null,this.ef=!1,this.e0=null,this.e1=!1,this.e6=null,this.e7=!1,this.eh=null,this.ei=!1,this.gM=null,this.ek=null,this.el=!1,this.cL=null,this.gK=null,this.gL=null,this.em=null,this.en=!1,Qi(this),qi(this),Gi(this),Ki(this)}x=Nh.prototype=new S,x.constructor=Nh;function Ph(){}Ph.prototype=x,x.iQ=(function(){return this.ej||=(this.eg=Zc(new Qc,`p`,!1),!0),this.eg}),x.X=(function(){return this.e5||=(this.e4=Zc(new Qc,`div`,!1),!0),this.e4}),x.hn=(function(){return this.e3||=(this.e2=new Pc(`checked`,D().eq),!0),this.e2}),x.gG=(function(){return this.ep||=(this.eo=new Pc(`value`,D().Y),!0),this.eo}),x.i9=(function(){return this.e9||=(this.e8=new Pc(`id`,D().Y),!0),this.e8}),x.bU=(function(){return this.ed||=(this.ec=new Ac(`click`),!0),this.ec}),x.iH=(function(){return this.eb||=(this.ea=new Ac(`change`),!0),this.ea}),x.du=(function(){return this.ef||=(this.ee=new Ac(`input`),!0),this.ee}),x.hl=(function(){return this.e1||=(this.e0=Ld(new Rd,`border`,Gg()),!0),this.e0}),x.i8=(function(){return this.e7||=(this.e6=new oh(`height`),!0),this.e6}),x.iR=(function(){return this.ei||=(this.eh=new Pm(`padding`),!0),this.eh}),x.jd=(function(){return this.el||=(this.ek=L(new R,`style`,D().Y),!0),this.ek}),x.jf=(function(){return this.en||=(this.em=new Md(this),!0),this.em}),new w().i(Nh,`com.raquo.laminar.api.package$$anon$1`,{bU:1,c8:1,bY:1,c3:1,c2:1,c4:1,c0:1,bS:1,bO:1,bR:1,ap:1,as:1,ao:1,bP:1});function Fh(e){this.bC=null,Ah(this,e)}x=Fh.prototype=new Mh,x.constructor=Fh;function Ih(){}Ih.prototype=x,x.n=(function(){return new Sm(this)}),x.bl=(function(){return`IndexedSeqView`}),x.aD=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),new w().i(Fh,`scala.collection.IndexedSeqView$Id`,{dW:1,e6:1,dH:1,dI:1,h:1,i:1,b:1,k:1,c:1,j:1,ea:1,a:1,e5:1,l:1,dV:1,o:1});function Lh(){}x=Lh.prototype=new Th,x.constructor=Lh;function Rh(){}Rh.prototype=x;function zh(e,t){return!Vh(t)||e.l()===t.l()}function Bh(e,t){if(Vh(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.fW(),o=t.fW(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().I(e.q(i),t.q(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().cv(i),m=t.n().cv(i);r&&p.w();)r=P().I(p.j(),m.j())}return r}else return df(e,t)}function Vh(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Hh(){}x=Hh.prototype=new Th,x.constructor=Hh;function Uh(){}Uh.prototype=x;function Wh(){}x=Wh.prototype=new Uh,x.constructor=Wh;function Gh(){}Gh.prototype=x,x.fT=(function(e){return Il(this,e)});function Kh(){}x=Kh.prototype=new Rh,x.constructor=Kh;function qh(){}qh.prototype=x,x.g7=(function(e){return zh(this,e)}),x.dx=(function(e){return Bh(this,e)}),x.bl=(function(){return`IndexedSeq`}),x.aD=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),x.ip=(function(e){for(var t=new C(this.l()),n=0;n<t.a.length;)t.a[n]=e.g(this.q(n)),n=1+n|0;return km().gF(t)}),x.bi=(function(){return`ArraySeq`}),x.fW=(function(){return 2147483647}),x.gq=(function(e){return this.ip(e)});function Jh(){}x=Jh.prototype=new Uh,x.constructor=Jh;function Yh(){}Yh.prototype=x,x.bl=(function(){return`IndexedSeq`}),x.aD=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),x.bi=(function(){return`ArraySeq`}),x.i=(function(e){return e instanceof Jh&&ms().bj(this.a4())!==ms().bj(e.a4())?!1:bh(this,e)});function Xh(e){this.aM=null,this.aM=e}x=Xh.prototype=new qh,x.constructor=Xh;function Zh(){}Zh.prototype=x,x.l=(function(){return this.aM.a.length}),x.o=(function(){var e=B();return e.g6(this.aM,e.x)}),x.i=(function(e){return e instanceof Xh?j().gj(this.aM,e.aM):bh(this,e)}),x.n=(function(){return new eh(this.aM)}),x.bP=(function(e){return this.aM.a[e]}),x.g=(function(e){return this.bP(e|0)}),x.q=(function(e){return this.bP(e)}),new w().i(Xh,`scala.collection.immutable.ArraySeq$ofBoolean`,{aV:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Qh(e){this.aN=null,this.aN=e}x=Qh.prototype=new qh,x.constructor=Qh;function $h(){}$h.prototype=x,x.l=(function(){return this.aN.a.length}),x.bH=(function(e){return this.aN.a[e]}),x.o=(function(){var e=B();return e.fY(this.aN,e.x)}),x.i=(function(e){return e instanceof Qh?j().gc(this.aN,e.aN):bh(this,e)}),x.n=(function(){return new Rm(this.aN)}),x.g=(function(e){return this.bH(e|0)}),x.q=(function(e){return this.bH(e)}),new w().i(Qh,`scala.collection.immutable.ArraySeq$ofByte`,{aW:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function eg(e){this.at=null,this.at=e}x=eg.prototype=new qh,x.constructor=eg;function tg(){}tg.prototype=x,x.l=(function(){return this.at.a.length}),x.bI=(function(e){return this.at.a[e]}),x.o=(function(){var e=B();return e.fZ(this.at,e.x)}),x.i=(function(e){return e instanceof eg?j().gd(this.at,e.at):bh(this,e)}),x.n=(function(){return new Bm(this.at)}),x.bG=(function(e,t,n,r){return new wg(this.at).bG(e,t,n,r)}),x.g=(function(e){return lr(this.bI(e|0))}),x.q=(function(e){return lr(this.bI(e))}),new w().i(eg,`scala.collection.immutable.ArraySeq$ofChar`,{aX:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function ng(e){this.aO=null,this.aO=e}x=ng.prototype=new qh,x.constructor=ng;function rg(){}rg.prototype=x,x.l=(function(){return this.aO.a.length}),x.o=(function(){var e=B();return e.g0(this.aO,e.x)}),x.i=(function(e){return e instanceof ng?j().ge(this.aO,e.aO):bh(this,e)}),x.n=(function(){return new Hm(this.aO)}),x.bK=(function(e){return this.aO.a[e]}),x.g=(function(e){return this.bK(e|0)}),x.q=(function(e){return this.bK(e)}),new w().i(ng,`scala.collection.immutable.ArraySeq$ofDouble`,{aY:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function ig(e){this.aP=null,this.aP=e}x=ig.prototype=new qh,x.constructor=ig;function ag(){}ag.prototype=x,x.l=(function(){return this.aP.a.length}),x.o=(function(){var e=B();return e.g1(this.aP,e.x)}),x.i=(function(e){return e instanceof ig?j().gf(this.aP,e.aP):bh(this,e)}),x.n=(function(){return new Wm(this.aP)}),x.bL=(function(e){return this.aP.a[e]}),x.g=(function(e){return this.bL(e|0)}),x.q=(function(e){return this.bL(e)}),new w().i(ig,`scala.collection.immutable.ArraySeq$ofFloat`,{aZ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function og(e){this.aQ=null,this.aQ=e}x=og.prototype=new qh,x.constructor=og;function sg(){}sg.prototype=x,x.l=(function(){return this.aQ.a.length}),x.o=(function(){var e=B();return e.g2(this.aQ,e.x)}),x.i=(function(e){return e instanceof og?j().gg(this.aQ,e.aQ):bh(this,e)}),x.n=(function(){return new Km(this.aQ)}),x.bM=(function(e){return this.aQ.a[e]}),x.g=(function(e){return this.bM(e|0)}),x.q=(function(e){return this.bM(e)}),new w().i(og,`scala.collection.immutable.ArraySeq$ofInt`,{b0:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function cg(e){this.aR=null,this.aR=e}x=cg.prototype=new qh,x.constructor=cg;function lg(){}lg.prototype=x,x.l=(function(){return this.aR.a.length}),x.o=(function(){var e=B();return e.g3(this.aR,e.x)}),x.i=(function(e){return e instanceof cg?j().gh(this.aR,e.aR):bh(this,e)}),x.n=(function(){return new Jm(this.aR)}),x.bN=(function(e){return this.aR.a[e]}),x.g=(function(e){return this.bN(e|0)}),x.q=(function(e){return this.bN(e)}),new w().i(cg,`scala.collection.immutable.ArraySeq$ofLong`,{b1:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function ug(e){this.aS=null,this.aS=e}x=ug.prototype=new qh,x.constructor=ug;function dg(){}dg.prototype=x,x.l=(function(){return this.aS.a.length}),x.q=(function(e){return this.aS.a[e]}),x.o=(function(){var e=B();return e.fX(this.aS,e.x)}),x.i=(function(e){return e instanceof ug?kl().gk(this.aS,e.aS):bh(this,e)}),x.n=(function(){return vm(new ym,this.aS)}),x.g=(function(e){return this.q(e|0)}),new w().i(ug,`scala.collection.immutable.ArraySeq$ofRef`,{b2:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function fg(e){this.aT=null,this.aT=e}x=fg.prototype=new qh,x.constructor=fg;function pg(){}pg.prototype=x,x.l=(function(){return this.aT.a.length}),x.bJ=(function(e){return this.aT.a[e]}),x.o=(function(){var e=B();return e.g4(this.aT,e.x)}),x.i=(function(e){return e instanceof fg?j().gi(this.aT,e.aT):bh(this,e)}),x.n=(function(){return new Xm(this.aT)}),x.g=(function(e){return this.bJ(e|0)}),x.q=(function(e){return this.bJ(e)}),new w().i(fg,`scala.collection.immutable.ArraySeq$ofShort`,{b3:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function mg(e){this.bg=null,this.bg=e}x=mg.prototype=new qh,x.constructor=mg;function hg(){}hg.prototype=x,x.l=(function(){return this.bg.a.length}),x.o=(function(){var e=B();return e.g5(this.bg,e.x)}),x.i=(function(e){return e instanceof mg?this.bg.a.length===e.bg.a.length:bh(this,e)}),x.n=(function(){return new Qm(this.bg)}),x.bO=(function(e){}),x.g=(function(e){this.bO(e|0)}),x.q=(function(e){this.bO(e)}),new w().i(mg,`scala.collection.immutable.ArraySeq$ofUnit`,{b4:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function gg(e,t,n,r){for(;;)if(t===r)return n.k()?0:1;else if(n.k())return-1;else{var i=1+t|0,a=n.Q();t=i,n=a}}function _g(e,t,n){for(;;)if(t===n)return!0;else{var r=t.k(),i=n.k();if(!(r||i)&&P().I(t.a6(),n.a6())){var a=t.Q(),o=n.Q();t=a,n=o}else return r&&i}}function vg(){}x=vg.prototype=new Rh,x.constructor=vg;function yg(){}yg.prototype=x,x.n=(function(){return new Np(this)}),x.bl=(function(){return`LinearSeq`}),x.gp=(function(e){return kp(this,e)}),x.q=(function(e){return Ap(this,e)}),x.dx=(function(e){return jp(this,e)}),x.k=(function(){return this===Gg()}),x.iq=(function(e){if(this===Gg())return Gg();for(var t=new Bg(e.g(this.a6()),Gg()),n=t,r=this.Q();r!==Gg();){var i=new Bg(e.g(r.a6()),Gg());n.cp=i,n=i,r=r.Q()}return t}),x.af=(function(e){for(var t=this;!t.k();)e.g(t.a6()),t=t.Q()}),x.l=(function(){for(var e=this,t=0;!e.k();)t=1+t|0,e=e.Q();return t}),x.aD=(function(e){return e<0?1:gg(this,0,this,e)}),x.bi=(function(){return`List`}),x.i=(function(e){return e instanceof vg?_g(this,this,e):bh(this,e)}),x.g=(function(e){return Ap(this,e|0)}),x.dq=(function(e){return kp(this,e|0)}),x.hB=(function(e){return dh(this,e,this)}),x.gq=(function(e){return this.iq(e)});function bg(e){this.au=null,this.au=e}x=bg.prototype=new Yh,x.constructor=bg;function xg(){}xg.prototype=x,x.l=(function(){return this.au.a.length}),x.o=(function(){var e=B();return e.g6(this.au,e.x)}),x.i=(function(e){return e instanceof bg?j().gj(this.au,e.au):Jh.prototype.i.call(this,e)}),x.n=(function(){return new eh(this.au)}),x.bP=(function(e){return this.au.a[e]}),x.g=(function(e){return this.bP(e|0)}),x.q=(function(e){return this.bP(e)}),x.a4=(function(){return this.au}),new w().i(bg,`scala.collection.mutable.ArraySeq$ofBoolean`,{b7:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Sg(e){this.av=null,this.av=e}x=Sg.prototype=new Yh,x.constructor=Sg;function Cg(){}Cg.prototype=x,x.l=(function(){return this.av.a.length}),x.bH=(function(e){return this.av.a[e]}),x.o=(function(){var e=B();return e.fY(this.av,e.x)}),x.i=(function(e){return e instanceof Sg?j().gc(this.av,e.av):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Rm(this.av)}),x.g=(function(e){return this.bH(e|0)}),x.q=(function(e){return this.bH(e)}),x.a4=(function(){return this.av}),new w().i(Sg,`scala.collection.mutable.ArraySeq$ofByte`,{b8:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function wg(e){this.W=null,this.W=e}x=wg.prototype=new Yh,x.constructor=wg;function Tg(){}Tg.prototype=x,x.l=(function(){return this.W.a.length}),x.bI=(function(e){return this.W.a[e]}),x.o=(function(){var e=B();return e.fZ(this.W,e.x)}),x.i=(function(e){return e instanceof wg?j().gd(this.W,e.W):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Bm(this.W)}),x.bG=(function(e,t,n,r){var i=e.O;t.length!==0&&(i.u=``+i.u+t);var a=this.W.a.length;if(a!==0)if(n===``)i.ha(this.W);else{i.l();var o=this.W.a[0],s=``+er(o);i.u+=s;for(var c=1;c<a;){i.u=``+i.u+n;var l=this.W.a[c],u=``+er(l);i.u+=u,c=1+c|0}}return r.length!==0&&(i.u=``+i.u+r),e}),x.g=(function(e){return lr(this.bI(e|0))}),x.q=(function(e){return lr(this.bI(e))}),x.a4=(function(){return this.W}),new w().i(wg,`scala.collection.mutable.ArraySeq$ofChar`,{b9:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Eg(e){this.aw=null,this.aw=e}x=Eg.prototype=new Yh,x.constructor=Eg;function Dg(){}Dg.prototype=x,x.l=(function(){return this.aw.a.length}),x.o=(function(){var e=B();return e.g0(this.aw,e.x)}),x.i=(function(e){return e instanceof Eg?j().ge(this.aw,e.aw):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Hm(this.aw)}),x.bK=(function(e){return this.aw.a[e]}),x.g=(function(e){return this.bK(e|0)}),x.q=(function(e){return this.bK(e)}),x.a4=(function(){return this.aw}),new w().i(Eg,`scala.collection.mutable.ArraySeq$ofDouble`,{ba:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Og(e){this.ax=null,this.ax=e}x=Og.prototype=new Yh,x.constructor=Og;function kg(){}kg.prototype=x,x.l=(function(){return this.ax.a.length}),x.o=(function(){var e=B();return e.g1(this.ax,e.x)}),x.i=(function(e){return e instanceof Og?j().gf(this.ax,e.ax):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Wm(this.ax)}),x.bL=(function(e){return this.ax.a[e]}),x.g=(function(e){return this.bL(e|0)}),x.q=(function(e){return this.bL(e)}),x.a4=(function(){return this.ax}),new w().i(Og,`scala.collection.mutable.ArraySeq$ofFloat`,{bb:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ag(e){this.ay=null,this.ay=e}x=Ag.prototype=new Yh,x.constructor=Ag;function jg(){}jg.prototype=x,x.l=(function(){return this.ay.a.length}),x.o=(function(){var e=B();return e.g2(this.ay,e.x)}),x.i=(function(e){return e instanceof Ag?j().gg(this.ay,e.ay):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Km(this.ay)}),x.bM=(function(e){return this.ay.a[e]}),x.g=(function(e){return this.bM(e|0)}),x.q=(function(e){return this.bM(e)}),x.a4=(function(){return this.ay}),new w().i(Ag,`scala.collection.mutable.ArraySeq$ofInt`,{bc:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Mg(e){this.az=null,this.az=e}x=Mg.prototype=new Yh,x.constructor=Mg;function Ng(){}Ng.prototype=x,x.l=(function(){return this.az.a.length}),x.o=(function(){var e=B();return e.g3(this.az,e.x)}),x.i=(function(e){return e instanceof Mg?j().gh(this.az,e.az):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Jm(this.az)}),x.bN=(function(e){return this.az.a[e]}),x.g=(function(e){return this.bN(e|0)}),x.q=(function(e){return this.bN(e)}),x.a4=(function(){return this.az}),new w().i(Mg,`scala.collection.mutable.ArraySeq$ofLong`,{bd:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Pg(e){this.aA=null,this.aA=e}x=Pg.prototype=new Yh,x.constructor=Pg;function Fg(){}Fg.prototype=x,x.l=(function(){return this.aA.a.length}),x.q=(function(e){return this.aA.a[e]}),x.o=(function(){var e=B();return e.fX(this.aA,e.x)}),x.i=(function(e){return e instanceof Pg?kl().gk(this.aA,e.aA):Jh.prototype.i.call(this,e)}),x.n=(function(){return vm(new ym,this.aA)}),x.g=(function(e){return this.q(e|0)}),x.a4=(function(){return this.aA}),new w().i(Pg,`scala.collection.mutable.ArraySeq$ofRef`,{be:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ig(e){this.aB=null,this.aB=e}x=Ig.prototype=new Yh,x.constructor=Ig;function Lg(){}Lg.prototype=x,x.l=(function(){return this.aB.a.length}),x.bJ=(function(e){return this.aB.a[e]}),x.o=(function(){var e=B();return e.g4(this.aB,e.x)}),x.i=(function(e){return e instanceof Ig?j().gi(this.aB,e.aB):Jh.prototype.i.call(this,e)}),x.n=(function(){return new Xm(this.aB)}),x.g=(function(e){return this.bJ(e|0)}),x.q=(function(e){return this.bJ(e)}),x.a4=(function(){return this.aB}),new w().i(Ig,`scala.collection.mutable.ArraySeq$ofShort`,{bf:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Rg(e){this.aU=null,this.aU=e}x=Rg.prototype=new Yh,x.constructor=Rg;function zg(){}zg.prototype=x,x.l=(function(){return this.aU.a.length}),x.o=(function(){var e=B();return e.g5(this.aU,e.x)}),x.i=(function(e){return e instanceof Rg?this.aU.a.length===e.aU.a.length:Jh.prototype.i.call(this,e)}),x.n=(function(){return new Qm(this.aU)}),x.bO=(function(e){}),x.g=(function(e){this.bO(e|0)}),x.q=(function(e){this.bO(e)}),x.a4=(function(){return this.aU}),new w().i(Rg,`scala.collection.mutable.ArraySeq$ofUnit`,{bg:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Bg(e,t){this.dc=null,this.cp=null,this.dc=e,this.cp=t}x=Bg.prototype=new yg,x.constructor=Bg;function Vg(){}Vg.prototype=x,x.a6=(function(){return this.dc}),x.ai=(function(){return`::`}),x.ag=(function(){return 2}),x.ah=(function(e){switch(e){case 0:return this.dc;case 1:return this.cp;default:return I().bT(e)}}),x.aF=(function(){return new zp(this)}),x.Q=(function(){return this.cp}),new w().i(Bg,`scala.collection.immutable.$colon$colon`,{eb:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a1:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});function Hg(){}x=Hg.prototype=new yg,x.constructor=Hg;function Ug(){}Ug.prototype=x,x.i5=(function(){throw new np(`head of empty list`)}),x.ji=(function(){throw new tp(`tail of empty list`)}),x.D=(function(){return 0}),x.n=(function(){return K().z}),x.ai=(function(){return`Nil`}),x.ag=(function(){return 0}),x.ah=(function(e){return I().bT(e)}),x.aF=(function(){return new zp(this)}),x.Q=(function(){this.ji()}),x.a6=(function(){this.i5()}),new w().i(Hg,`scala.collection.immutable.Nil$`,{ee:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a1:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});var Wg;function Gg(){return Wg||=new Hg,Wg}function Kg(e,t){return e.O=t,e}function qg(e){return Kg(e,new Zd),e}function Jg(){this.O=null}x=Jg.prototype=new Uh,x.constructor=Jg;function Yg(){}Yg.prototype=x,x.bl=(function(){return`IndexedSeq`}),x.n=(function(){return new Sm(new Fh(this))}),x.aD=(function(e){var t=this.O.l();return t===e?0:t<e?-1:1}),x.fT=(function(e){return Il(this,e)}),x.l=(function(){return this.O.l()}),x.D=(function(){return this.O.l()}),x.h5=(function(e){var t=this.O,n=``+er(e);return t.u+=n,this}),x.t=(function(){return this.O.u}),x.k=(function(){return this.O.l()===0}),x.gA=(function(){return this.O.u}),x.dj=(function(e){return this.h5(ur(e))}),x.g=(function(e){var t=e|0;return lr(this.O.g8(t))}),x.q=(function(e){return lr(this.O.g8(e))}),new w().i(Jg,`scala.collection.mutable.StringBuilder`,{em:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ek:1,bh:1,bj:1,bi:1,D:1,n:1,o:1,E:1,ad:1,a:1});function Xg(e,t){return e.aV=t,e}function Zg(e){return Xg(e,[]),e}function Qg(){this.aV=null}x=Qg.prototype=new Gh,x.constructor=Qg;function $g(){}$g.prototype=x,x.bl=(function(){return`IndexedSeq`}),x.n=(function(){return new Sm(new Fh(this))}),x.aD=(function(e){var t=this.aV.length|0;return t===e?0:t<e?-1:1}),x.q=(function(e){return this.aV[e]}),x.l=(function(){return this.aV.length|0}),x.D=(function(){return this.aV.length|0}),x.bi=(function(){return`WrappedArray`}),x.gA=(function(){return this}),x.dj=(function(e){return this.aV.push(e),this}),x.g=(function(e){var t=e|0;return this.aV[t]}),new w().i(Qg,`scala.scalajs.js.WrappedArray`,{eN:1,ef:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,eh:1,bj:1,bi:1,el:1,q:1,p:1,D:1,n:1,o:1,E:1,ej:1,bh:1,a:1}),Wn=new M(0,0),Tr.z=Wn,io(new(um.r()).C([]));