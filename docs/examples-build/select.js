var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function n(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=e=>{throw TypeError(e)},o=(e,t,n,a)=>{for(var o=a>1?void 0:a?i(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(a?c(t,n,o):c(o))||o);return a&&o&&r(t,n,o),o},s=(e,t,n)=>t.has(e)||a(`Cannot `+n),c=(e,t,n)=>(s(e,t,`read from private field`),n?n.call(e):t.get(e)),l=(e,t,n)=>t.has(e)?a(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),u=(e,t,n,r)=>(s(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const d=globalThis,f=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,p=Symbol(),m=new WeakMap;var h=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(f&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=m.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&m.set(t,e))}return e}toString(){return this.cssText}};const g=e=>new h(typeof e==`string`?e:e+``,void 0,p),ee=(e,t)=>{if(f)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},te=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return g(t)})(e):e,{is:_,defineProperty:ne,getOwnPropertyDescriptor:re,getOwnPropertyNames:ie,getOwnPropertySymbols:ae,getPrototypeOf:oe}=Object,v=globalThis,se=v.trustedTypes,ce=se?se.emptyScript:``,le=v.reactiveElementPolyfillSupport,ue=(e,t)=>e,de={toAttribute(e,t){switch(t){case Boolean:e=e?ce:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},fe=(e,t)=>!_(e,t),pe={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:fe};Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap;var me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ne(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=re(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(ue(`elementProperties`)))return;let e=oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ue(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue(`properties`))){let e=this.properties,t=[...ie(e),...ae(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(te(e))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?de:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?de:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??fe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:`open`},me[ue(`elementProperties`)]=new Map,me[ue(`finalized`)]=new Map,le?.({ReactiveElement:me}),(v.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const he=globalThis,ge=he.trustedTypes,_e=ge?ge.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ve=`$lit$`,ye=`lit$${Math.random().toFixed(9).slice(2)}$`,be=`?`+ye,xe=`<${be}>`,Se=document,Ce=()=>Se.createComment(``),we=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Te=Array.isArray,Ee=e=>Te(e)||typeof e?.[Symbol.iterator]==`function`,De=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ae=/>/g,je=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Me=/'/g,Ne=/"/g,Pe=/^(?:script|style|textarea|title)$/i,Fe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ie=Symbol.for(`lit-noChange`),y=Symbol.for(`lit-nothing`),Le=new WeakMap,Re=Se.createTreeWalker(Se,129);function ze(e,t){if(!Te(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return _e===void 0?t:_e.createHTML(t)}const Be=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Oe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Oe?c[1]===`!--`?o=ke:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=je):(Pe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=je):o=Ae:o===je?c[0]===`>`?(o=i??Oe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?je:c[3]===`"`?Ne:Me):o===Ne||o===Me?o=je:o===ke||o===Ae?o=Oe:(o=je,i=void 0);let d=o===je&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Oe?n+xe:l>=0?(r.push(s),n.slice(0,l)+ve+n.slice(l)+ye+d):n+ye+(l===-2?t:d)}return[ze(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ve=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Be(t,n);if(this.el=e.createElement(l,r),Re.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Re.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ve)){let t=u[o++],n=i.getAttribute(e).split(ye),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ke:r[1]===`?`?qe:r[1]===`@`?Je:Ge}),i.removeAttribute(e)}else e.startsWith(ye)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Pe.test(i.tagName)){let e=i.textContent.split(ye),t=e.length-1;if(t>0){i.textContent=ge?ge.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ce()),Re.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ce())}}}else if(i.nodeType===8)if(i.data===be)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ye,e+1))!==-1;)c.push({type:7,index:a}),e+=ye.length-1}a++}}static createElement(e,t){let n=Se.createElement(`template`);return n.innerHTML=e,n}};function He(e,t,n=e,r){if(t===Ie)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=we(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=He(e,i._$AS(e,t.values),i,r)),t}var Ue=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Se).importNode(t,!0);Re.currentNode=r;let i=Re.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new We(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ye(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Re.nextNode(),a++)}return Re.currentNode=Se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},We=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=He(this,e,t),we(e)?e===y||e==null||e===``?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==Ie&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ee(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(Se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ve.createElement(ze(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ue(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Le.get(e.strings);return t===void 0&&Le.set(e.strings,t=new Ve(e)),t}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ce()),this.O(Ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=He(this,e,t,0),a=!we(e)||e!==this._$AH&&e!==Ie,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=He(this,r[n+o],t,o),s===Ie&&(s=this._$AH[o]),a||=!we(s)||s!==this._$AH[o],s===y?e=y:e!==y&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ke=class extends Ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},qe=class extends Ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Je=class extends Ge{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=He(this,e,t,0)??y)===Ie)return;let n=this._$AH,r=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==y&&(n===y||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ye=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){He(this,e)}};const Xe={M:ve,P:ye,A:be,C:1,L:Be,R:Ue,D:Ee,V:He,I:We,H:Ge,N:qe,U:Je,B:Ke,F:Ye},Ze=he.litHtmlPolyfillSupport;Ze?.(Ve,We),(he.litHtmlVersions??=[]).push(`3.3.1`);const Qe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new We(t.insertBefore(Ce(),e),e,void 0,n??{})}return i._$AI(e),i},$e=globalThis;var et=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ie}};et._$litElement$=!0,et.finalized=!0,$e.litElementHydrateSupport?.({LitElement:et});const tt=$e.litElementPolyfillSupport;tt?.({LitElement:et}),($e.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const nt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},rt={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe},it=(e=rt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function b(e){return(t,n)=>typeof n==`object`?it(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function at(e){return b({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function st(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ot(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ot(n,r,{get(){return a(this)}})}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ct=`:host {
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
`,lt,ut=class extends et{constructor(){super(),l(this,lt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ct,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?g(e):e)}attributeChangedCallback(e,t,n){c(this,lt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),u(this,lt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};lt=new WeakMap,o([b()],ut.prototype,`dir`,2),o([b()],ut.prototype,`lang`,2),o([b({type:Boolean,reflect:!0,attribute:`did-ssr`})],ut.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var dt=`:host {
  --color: var(--wa-color-surface-border);
  --width: var(--wa-border-width-s);
  --spacing: var(--wa-space-m);
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
`,ft=class extends ut{constructor(){super(...arguments),this.orientation=`horizontal`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}};ft.css=dt,o([b({reflect:!0})],ft.prototype,`orientation`,2),o([n(`orientation`)],ft.prototype,`handleVerticalChange`,1),ft=o([nt(`wa-divider`)],ft);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var pt=t({default:()=>ft}),mt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},ht=``;function gt(e){ht=e}function _t(){if(!ht){let e=document.querySelector(`[data-fa-kit-code]`);e&&gt(e.getAttribute(`data-fa-kit-code`)||``)}return ht}var vt=`7.0.1`;function yt(e,t,n){let r=_t(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${vt}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${vt}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${vt}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${vt}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${vt}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${vt}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${vt}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${vt}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${vt}/svgs/${a}/${e}.svg`)}var bt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>yt(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function xt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var St={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Ct={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=St[n][e]??St.regular[e]??St.regular[`circle-question`];return r?xt(r):``}},wt=`classic`,Tt=[bt,Ct],Et=[];function Dt(e){Et.push(e)}function Ot(e){Et=Et.filter(t=>t!==e)}function kt(e){return Tt.find(t=>t.name===e)}function At(){return wt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:jt}=Xe,Mt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Nt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Pt=`:host {
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
`,Ft=Symbol(),It=Symbol(),Lt,Rt=new Map,x=class extends ut{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Fe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Ft:It}catch{return It}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Ft;Lt||=new DOMParser;let r=Lt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Ft}catch{return Ft}}}connectedCallback(){super.connectedCallback(),Dt(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Ot(this)}getIconSource(){let e=kt(this.library),t=this.family||At();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?kt(this.library):void 0;if(!e){this.svg=null;return}let r=Rt.get(e);r||(r=this.resolveIcon(e,n),Rt.set(e,r));let i=await r;if(i===It&&Rt.delete(e),e===this.getIconSource().url){if(Mt(i)){this.svg=i;return}switch(i){case It:case Ft:this.svg=null,this.dispatchEvent(new Nt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new mt)}}}updated(e){super.updated(e);let t=kt(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Fe`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};x.css=Pt,o([at()],x.prototype,`svg`,2),o([b({reflect:!0})],x.prototype,`name`,2),o([b({reflect:!0})],x.prototype,`family`,2),o([b({reflect:!0})],x.prototype,`variant`,2),o([b({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),o([b({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),o([b()],x.prototype,`src`,2),o([b()],x.prototype,`label`,2),o([b({reflect:!0})],x.prototype,`library`,2),o([n(`label`)],x.prototype,`handleLabelChange`,1),o([n([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],x.prototype,`setIcon`,1),x=o([nt(`wa-icon`)],x);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var zt=t({default:()=>x});const Bt=new Set,Vt=new Map;let Ht,Ut=`ltr`,Wt=`en`;const Gt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Gt){let e=new MutationObserver(qt);Ut=document.documentElement.dir||`ltr`,Wt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Kt(...e){e.map(e=>{let t=e.$code.toLowerCase();Vt.has(t)?Vt.set(t,Object.assign(Object.assign({},Vt.get(t)),e)):Vt.set(t,e),Ht||=e}),qt()}function qt(){Gt&&(Ut=document.documentElement.dir||`ltr`,Wt=document.documentElement.lang||navigator.language),[...Bt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Jt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Bt.add(this.host)}hostDisconnected(){Bt.delete(this.host)}dir(){return`${this.host.dir||Ut}`.toLowerCase()}lang(){return`${this.host.lang||Wt}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:Vt.get(`${n}-${r}`),secondary:Vt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ht&&Ht[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ht&&Ht[e])i=Ht[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Yt={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Kt(Yt);var Xt=Yt,Zt=class extends Jt{};Kt(Xt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Qt(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>Qt(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return Qt(n,--t)}return t>-1?Qt(e,--t):e.textContent??``}return n.hasChildNodes()?Qt(n.childNodes,--t):``}var $t=`:host {
  display: block;
  color: var(--wa-color-text-normal);
  -webkit-user-select: none;
  user-select: none;

  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  padding: 0.5em 1em 0.5em 0.25em;
  line-height: var(--wa-line-height-condensed);
  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
  cursor: pointer;
}

:host(:focus) {
  outline: none;
}

@media (hover: hover) {
  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
    background-color: var(--wa-color-neutral-fill-normal);
    color: var(--wa-color-neutral-on-normal);
  }
}

:host(:state(current)),
:host([disabled]:state(current)) {
  background-color: var(--wa-color-brand-fill-loud);
  color: var(--wa-color-brand-on-loud);
  opacity: 1;
}

:host([disabled]) {
  outline: none;
  opacity: 0.5;
  cursor: not-allowed;
}

.label {
  flex: 1 1 auto;
  display: inline-block;
}

.check {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--wa-font-size-smaller);
  visibility: hidden;
  width: 2em;
}

:host(:state(selected)) .check {
  visibility: visible;
}

.start,
.end {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
}

.start::slotted(*) {
  margin-inline-end: 0.5em;
}

.end::slotted(*) {
  margin-inline-start: 0.5em;
}

@media (forced-colors: active) {
  :host(:hover:not([aria-disabled='true'])) {
    outline: dashed 1px SelectedItem;
    outline-offset: -1px;
  }
}
`,en=class extends ut{constructor(){super(...arguments),this.localize=new Zt(this),this.isInitialized=!1,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.defaultLabel=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined(`wa-select`).then(()=>{let e=this.closest(`wa-select`);e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}):this.isInitialized=!0}willUpdate(e){if(e.has(`defaultSelected`)&&!this.closest(`wa-select`)?.hasInteracted){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}super.willUpdate(e)}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected),this.handleDefaultSlotChange()),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Qt(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){return Fe`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};en.css=$t,o([st(`.label`)],en.prototype,`defaultSlot`,2),o([at()],en.prototype,`current`,2),o([b({reflect:!0})],en.prototype,`value`,2),o([b({type:Boolean})],en.prototype,`disabled`,2),o([b({type:Boolean,attribute:!1})],en.prototype,`selected`,2),o([b({type:Boolean,attribute:`selected`})],en.prototype,`defaultSelected`,2),o([b()],en.prototype,`label`,1),o([at()],en.prototype,`defaultLabel`,2),en=o([nt(`wa-option`)],en);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var tn=t({default:()=>en});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function nn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function rn(e,t,n=`vertical`,r=`smooth`){let i=nn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var an=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},on=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||=Object.assign(document.createElement(`input`),{required:!0}),n||=`value`;let r={observedAttributes:[`required`],message:t.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},sn=`:host {
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
`,cn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},un=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},dn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},fn=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),mn=class extends ut{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new fn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[pn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};mn.formAssociated=!0,o([b({reflect:!0})],mn.prototype,`name`,2),o([b({type:Boolean})],mn.prototype,`disabled`,2),o([b({state:!0,attribute:!1})],mn.prototype,`valueHasChanged`,2),o([b({state:!0,attribute:!1})],mn.prototype,`hasInteracted`,2),o([b({attribute:`custom-error`,reflect:!0})],mn.prototype,`customError`,2),o([b({attribute:!1,state:!0,type:Object})],mn.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var hn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},gn=`@layer wa-utilities {
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
`;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function _n(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function vn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const yn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},bn=e=>(...t)=>({_$litDirective$:e,values:t});var xn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Sn=bn(class extends xn{constructor(e){if(super(e),e.type!==yn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ie}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Cn=class extends xn{constructor(e){if(super(e),this.it=y,e.type!==yn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===y||e==null)return this._t=void 0,this.it=e;if(e===Ie)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Cn.directiveName=`unsafeHTML`,Cn.resultType=1;const wn=bn(Cn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Tn=`:host {
  --tag-max-size: 10ch;
  --show-duration: 100ms;
  --hide-duration: 100ms;
}

/* Add ellipses to multi select options */
:host wa-tag::part(content) {
  display: initial;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: var(--tag-max-size);
}

:host .disabled [part~='combobox'] {
  opacity: 0.5;
  cursor: not-allowed;
  outline: none;
}

:host .enabled:is(.open, :focus-within) [part~='combobox'] {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

/** The popup */
.select {
  flex: 1 1 auto;
  display: inline-flex;
  width: 100%;
  position: relative;
  vertical-align: middle;

  /* Pass through from select to the popup */
  --show-duration: inherit;
  --hide-duration: inherit;

  &::part(popup) {
    z-index: 900;
  }

  &[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  &[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }
}

/* Combobox */
.combobox {
  flex: 1;
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: start;

  min-height: var(--wa-form-control-height);

  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-form-control-border-style);
  border-width: var(--wa-form-control-border-width);
  color: var(--wa-form-control-value-color);
  cursor: pointer;
  font-family: inherit;
  font-weight: var(--wa-form-control-value-font-weight);
  line-height: var(--wa-form-control-value-line-height);
  overflow: hidden;
  padding: 0 var(--wa-form-control-padding-inline);
  position: relative;
  vertical-align: middle;
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  :host([multiple]) .select:not(.placeholder-visible) & {
    padding-inline-start: 0;
    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
  }

  /* Pills */
  :host([pill]) & {
    border-radius: var(--wa-border-radius-pill);
  }
}

/* Appearance modifiers */
:host([appearance='outlined']) .combobox {
  background-color: var(--wa-form-control-background-color);
  border-color: var(--wa-form-control-border-color);
}

:host([appearance='filled']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-color-neutral-fill-quiet);
}

:host([appearance='filled-outlined']) .combobox {
  background-color: var(--wa-color-neutral-fill-quiet);
  border-color: var(--wa-form-control-border-color);
}

.display-input {
  position: relative;
  width: 100%;
  font: inherit;
  border: none;
  background: none;
  line-height: var(--wa-form-control-value-line-height);
  color: var(--wa-form-control-value-color);
  cursor: inherit;
  overflow: hidden;
  padding: 0;
  margin: 0;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--wa-form-control-placeholder-color);
  }
}

/* Visually hide the display input when multiple is enabled */
:host([multiple]) .select:not(.placeholder-visible) .display-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.value-input {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  padding: 0;
  margin: 0;
}

.tags {
  display: flex;
  flex: 1;
  align-items: center;
  flex-wrap: wrap;
  margin-inline-start: 0.25em;
  gap: 0.25em;

  &::slotted(wa-tag) {
    cursor: pointer !important;
  }

  .disabled &,
  .disabled &::slotted(wa-tag) {
    cursor: not-allowed !important;
  }
}

/* Start and End */

.start,
.end {
  flex: 0;
  display: inline-flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
}

.end::slotted(*) {
  margin-inline-start: var(--wa-form-control-padding-inline);
}

.start::slotted(*) {
  margin-inline-end: var(--wa-form-control-padding-inline);
}

:host([multiple]) .start::slotted(*) {
  margin-inline: var(--wa-form-control-padding-inline);
}

/* Clear button */
[part~='clear-button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: color var(--wa-transition-normal);
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

  &:focus {
    outline: none;
  }

  @media (hover: hover) {
    &:hover {
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  &:active {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }
}

/* Expand icon */
.expand-icon {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  color: var(--wa-color-neutral-on-quiet);
  transition: rotate var(--wa-transition-slow) ease;
  rotate: 0deg;
  margin-inline-start: var(--wa-form-control-padding-inline);

  .open & {
    rotate: -180deg;
  }
}

/* Listbox */
.listbox {
  display: block;
  position: relative;
  font: inherit;
  box-shadow: var(--wa-shadow-m);
  background: var(--wa-color-surface-raised);
  border-color: var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  padding-block: 0.5em;
  padding-inline: 0;
  overflow: auto;
  overscroll-behavior: none;

  /* Make sure it adheres to the popup's auto size */
  max-width: var(--auto-size-available-width);
  max-height: var(--auto-size-available-height);

  &::slotted(wa-divider) {
    --spacing: 0.5em;
  }
}

slot:not([name])::slotted(small) {
  display: block;
  font-size: var(--wa-font-size-smaller);
  font-weight: var(--wa-font-weight-semibold);
  color: var(--wa-color-text-quiet);
  padding-block: 0.5em;
  padding-inline: 2.25em;
}
`,S=class extends mn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new hn(this,`hint`,`label`),this.localize=new Zt(this),this.typeToSelectString=``,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=e=>Fe`
        <wa-tag
          part="tag"
          exportparts="
            base:tag__base,
            content:tag__content,
            remove-button:tag__remove-button,
            remove-button__base:tag__remove-button__base
          "
          ?pill=${this.pill}
          size=${this.size}
          with-remove
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[on({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new an),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;let n=t;if(!n){let t=e.target.closest(`wa-tag[part~=tag]`);if(t){let e=this.shadowRoot?.querySelector(`[part="tags"]`);if(e){let r=Array.from(e.children).indexOf(t);r>=0&&r<this.selectedOptions.length&&(n=this.selectedOptions[r])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll(`wa-option`)]:[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected});let e=new Set(this.selectedOptions.map(e=>e.value));if(e.size>0||this._value){let t=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...e),this.requestUpdate(`value`,t)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?wn(n):n:null}else if(t===this.maxOptionsVisible)return Fe`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new dn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await vn(this.popup.popup,`show`),this.currentOption&&rn(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new ln)}else{let e=new un;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await vn(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new cn)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,_n(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,_n(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return Fe`
      <div
        part="form-control"
        class=${Sn({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Sn({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":a})}
            placement=${this.placement}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
              @click=${this.handleComboboxClick}
            >
              <slot part="start" name="start" class="start"></slot>

              <input
                part="display-input"
                class="display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                ?required=${this.required}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-invalid=${!this.validity.valid}
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="hint"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
              />

              <!-- Tags need to wait for first hydration before populating otherwise it will create a hydration mismatch. -->
              ${this.multiple&&this.hasUpdated?Fe`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

              <input
                class="value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
              />

              ${i?Fe`
                    <button
                      part="clear-button"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="end" part="end" class="end"></slot>

              <slot name="expand-icon" part="expand-icon" class="expand-icon">
                <wa-icon library="system" name="chevron-down" variant="solid"></wa-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
            >
              <slot @slotchange=${this.handleDefaultSlotChange}></slot>
            </div>
          </wa-popup>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Sn({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};S.css=[Tn,sn,gn],o([st(`.select`)],S.prototype,`popup`,2),o([st(`.combobox`)],S.prototype,`combobox`,2),o([st(`.display-input`)],S.prototype,`displayInput`,2),o([st(`.value-input`)],S.prototype,`valueInput`,2),o([st(`.listbox`)],S.prototype,`listbox`,2),o([at()],S.prototype,`displayLabel`,2),o([at()],S.prototype,`currentOption`,2),o([at()],S.prototype,`selectedOptions`,2),o([at()],S.prototype,`optionValues`,2),o([b()],S.prototype,`name`,2),o([b({attribute:!1})],S.prototype,`defaultValue`,1),o([b({attribute:`value`,reflect:!1})],S.prototype,`value`,1),o([b({reflect:!0})],S.prototype,`size`,2),o([b()],S.prototype,`placeholder`,2),o([b({type:Boolean,reflect:!0})],S.prototype,`multiple`,2),o([b({attribute:`max-options-visible`,type:Number})],S.prototype,`maxOptionsVisible`,2),o([b({type:Boolean})],S.prototype,`disabled`,2),o([b({attribute:`with-clear`,type:Boolean})],S.prototype,`withClear`,2),o([b({type:Boolean,reflect:!0})],S.prototype,`open`,2),o([b({reflect:!0})],S.prototype,`appearance`,2),o([b({type:Boolean,reflect:!0})],S.prototype,`pill`,2),o([b()],S.prototype,`label`,2),o([b({reflect:!0})],S.prototype,`placement`,2),o([b({attribute:`hint`})],S.prototype,`hint`,2),o([b({attribute:`with-label`,type:Boolean})],S.prototype,`withLabel`,2),o([b({attribute:`with-hint`,type:Boolean})],S.prototype,`withHint`,2),o([b({reflect:!0})],S.prototype,`form`,2),o([b({type:Boolean,reflect:!0})],S.prototype,`required`,2),o([b({attribute:!1})],S.prototype,`getTag`,2),o([n(`disabled`,{waitUntilFirstUpdate:!0})],S.prototype,`handleDisabledChange`,1),o([n(`value`,{waitUntilFirstUpdate:!0})],S.prototype,`handleValueChange`,1),o([n(`open`,{waitUntilFirstUpdate:!0})],S.prototype,`handleOpenChange`,1),S=o([nt(`wa-select`)],S);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var En=`@layer wa-utilities {
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
`,Dn=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},On=`@layer wa-component {
  :host {
    display: inline-flex;
    gap: 0.5em;
    border-radius: var(--wa-border-radius-m);
    align-items: center;
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    font-size: inherit;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    height: calc(var(--wa-form-control-height) * 0.8);
    line-height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
    padding: 0 0.75em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-neutral-border-loud));
  }

  :host([appearance='filled']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    color: var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));
    background-color: var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet));
    border-color: var(--wa-color-border-normal, var(--wa-color-neutral-border-normal));
  }

  :host([appearance='accent']) {
    color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
    border-color: transparent;
  }
}

.content {
  font-size: var(--wa-font-size-smaller);
}

[part='remove-button'] {
  color: inherit;
  line-height: 1;
}

[part='remove-button']::part(base) {
  padding: 0;
  height: 1em;
  width: 1em;
}

@media (hover: hover) {
  :host(:hover) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

:host(:active) > [part='remove-button']::part(base) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

/*
 * Pill modifier
 */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}
`,kn=class extends ut{constructor(){super(...arguments),this.localize=new Zt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`medium`,this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new Dn)}render(){return Fe`
      <slot part="content" class="content"></slot>

      ${this.withRemove?Fe`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term(`remove`)}></wa-icon>
            </wa-button>
          `:``}
    `}};kn.css=[On,En,gn],o([b({reflect:!0})],kn.prototype,`variant`,2),o([b({reflect:!0})],kn.prototype,`appearance`,2),o([b({reflect:!0})],kn.prototype,`size`,2),o([b({type:Boolean,reflect:!0})],kn.prototype,`pill`,2),o([b({attribute:`with-remove`,type:Boolean})],kn.prototype,`withRemove`,2),kn=o([nt(`wa-tag`)],kn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var An=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}};const jn=Math.min,Mn=Math.max,Nn=Math.round,Pn=Math.floor,Fn=e=>({x:e,y:e}),In={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Ln={start:`end`,end:`start`};function Rn(e,t,n){return Mn(e,jn(t,n))}function zn(e,t){return typeof e==`function`?e(t):e}function Bn(e){return e.split(`-`)[0]}function Vn(e){return e.split(`-`)[1]}function Hn(e){return e===`x`?`y`:`x`}function Un(e){return e===`y`?`height`:`width`}const Wn=new Set([`top`,`bottom`]);function Gn(e){return Wn.has(Bn(e))?`y`:`x`}function Kn(e){return Hn(Gn(e))}function qn(e,t,n){n===void 0&&(n=!1);let r=Vn(e),i=Kn(e),a=Un(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=nr(o)),[o,nr(o)]}function Jn(e){let t=nr(e);return[Yn(e),t,Yn(t)]}function Yn(e){return e.replace(/start|end/g,e=>Ln[e])}const Xn=[`left`,`right`],Zn=[`right`,`left`],Qn=[`top`,`bottom`],$n=[`bottom`,`top`];function er(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Zn:Xn:t?Xn:Zn;case`left`:case`right`:return t?Qn:$n;default:return[]}}function tr(e,t,n,r){let i=Vn(e),a=er(Bn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Yn)))),a}function nr(e){return e.replace(/left|right|bottom|top/g,e=>In[e])}function rr(e){return{top:0,right:0,bottom:0,left:0,...e}}function ir(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:rr(e)}function ar(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function or(e,t,n){let{reference:r,floating:i}=e,a=Gn(t),o=Kn(t),s=Un(o),c=Bn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Vn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const sr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=or(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:ee,data:te,reset:_}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=ee??d,p={...p,[a]:{...p[a],...te}},_&&m<=50&&(m++,typeof _==`object`&&(_.placement&&(f=_.placement),_.rects&&(l=_.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):_.rects),{x:u,y:d}=or(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function cr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=zn(t,e),p=ir(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ar(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,ee=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),te=await(i.isElement==null?void 0:i.isElement(ee))&&await(i.getScale==null?void 0:i.getScale(ee))||{x:1,y:1},_=ar(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:ee,strategy:s}):g);return{top:(h.top-_.top+p.top)/te.y,bottom:(_.bottom-h.bottom+p.bottom)/te.y,left:(h.left-_.left+p.left)/te.x,right:(_.right-h.right+p.right)/te.x}}const lr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=zn(e,t)||{};if(l==null)return{};let d=ir(u),f={x:n,y:r},p=Kn(i),m=Un(p),h=await o.getDimensions(l),g=p===`y`,ee=g?`top`:`left`,te=g?`bottom`:`right`,_=g?`clientHeight`:`clientWidth`,ne=a.reference[m]+a.reference[p]-f[p]-a.floating[m],re=f[p]-a.reference[p],ie=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),ae=ie?ie[_]:0;(!ae||!await(o.isElement==null?void 0:o.isElement(ie)))&&(ae=s.floating[_]||a.floating[m]);let oe=ne/2-re/2,v=ae/2-h[m]/2-1,se=jn(d[ee],v),ce=jn(d[te],v),le=se,ue=ae-h[m]-ce,de=ae/2-h[m]/2+oe,fe=Rn(le,de,ue),pe=!c.arrow&&Vn(i)!=null&&de!==fe&&a.reference[m]/2-(de<le?se:ce)-h[m]/2<0,me=pe?de<le?de-le:de-ue:0;return{[p]:f[p]+me,data:{[p]:fe,centerOffset:de-fe-me,...pe&&{alignmentOffset:me}},reset:pe}}}),ur=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=zn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Bn(r),ee=Gn(o),te=Bn(o)===o,_=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ne=d||(te||!m?[nr(o)]:Jn(o)),re=p!==`none`;!d&&re&&ne.push(...tr(o,m,p,_));let ie=[o,...ne],ae=await cr(t,h),oe=[],v=i.flip?.overflows||[];if(l&&oe.push(ae[g]),u){let e=qn(r,a,_);oe.push(ae[e[0]],ae[e[1]])}if(v=[...v,{placement:r,overflows:oe}],!oe.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ie[e];if(t&&(!(u===`alignment`&&ee!==Gn(t))||v.every(e=>Gn(e.placement)===ee?e.overflows[0]>0:!0)))return{data:{index:e,overflows:v},reset:{placement:t}};let n=v.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=v.filter(e=>{if(re){let t=Gn(e.placement);return t===ee||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},dr=new Set([`left`,`top`]);async function fr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Bn(n),s=Vn(n),c=Gn(n)===`y`,l=dr.has(o)?-1:1,u=a&&c?-1:1,d=zn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const pr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await fr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},mr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=zn(e,t),l={x:n,y:r},u=await cr(t,c),d=Gn(Bn(i)),f=Hn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Rn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Rn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},hr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=zn(e,t),u=await cr(t,l),d=Bn(i),f=Vn(i),p=Gn(i)===`y`,{width:m,height:h}=a.floating,g,ee;d===`top`||d===`bottom`?(g=d,ee=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(ee=d,g=f===`end`?`top`:`bottom`);let te=h-u.top-u.bottom,_=m-u.left-u.right,ne=jn(h-u[g],te),re=jn(m-u[ee],_),ie=!t.middlewareData.shift,ae=ne,oe=re;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(oe=_),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(ae=te),ie&&!f){let e=Mn(u.left,0),t=Mn(u.right,0),n=Mn(u.top,0),r=Mn(u.bottom,0);p?oe=m-2*(e!==0||t!==0?e+t:Mn(u.left,u.right)):ae=h-2*(n!==0||r!==0?n+r:Mn(u.top,u.bottom))}await c({...t,availableWidth:oe,availableHeight:ae});let v=await o.getDimensions(s.floating);return m!==v.width||h!==v.height?{reset:{rects:!0}}:{}}}};function gr(){return typeof window<`u`}function _r(e){return br(e)?(e.nodeName||``).toLowerCase():`#document`}function vr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function yr(e){return((br(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function br(e){return gr()?e instanceof Node||e instanceof vr(e).Node:!1}function xr(e){return gr()?e instanceof Element||e instanceof vr(e).Element:!1}function Sr(e){return gr()?e instanceof HTMLElement||e instanceof vr(e).HTMLElement:!1}function Cr(e){return!gr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof vr(e).ShadowRoot}const wr=new Set([`inline`,`contents`]);function Tr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Rr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!wr.has(i)}const Er=new Set([`table`,`td`,`th`]);function Dr(e){return Er.has(_r(e))}const Or=[`:popover-open`,`:modal`];function kr(e){return Or.some(t=>{try{return e.matches(t)}catch{return!1}})}const Ar=[`transform`,`translate`,`scale`,`rotate`,`perspective`],jr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Mr=[`paint`,`layout`,`strict`,`content`];function Nr(e){let t=Fr(),n=xr(e)?Rr(e):e;return Ar.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||jr.some(e=>(n.willChange||``).includes(e))||Mr.some(e=>(n.contain||``).includes(e))}function Pr(e){let t=Br(e);for(;Sr(t)&&!Lr(t);){if(Nr(t))return t;if(kr(t))return null;t=Br(t)}return null}function Fr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Ir=new Set([`html`,`body`,`#document`]);function Lr(e){return Ir.has(_r(e))}function Rr(e){return vr(e).getComputedStyle(e)}function zr(e){return xr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Br(e){if(_r(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Cr(e)&&e.host||yr(e);return Cr(t)?t.host:t}function Vr(e){let t=Br(e);return Lr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Sr(t)&&Tr(t)?t:Vr(t)}function Hr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Vr(e),i=r===e.ownerDocument?.body,a=vr(r);if(i){let e=Ur(a);return t.concat(a,a.visualViewport||[],Tr(r)?r:[],e&&n?Hr(e):[])}return t.concat(r,Hr(r,[],n))}function Ur(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wr(e){let t=Rr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Sr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Nn(n)!==a||Nn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Gr(e){return xr(e)?e:e.contextElement}function Kr(e){let t=Gr(e);if(!Sr(t))return Fn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Wr(t),o=(a?Nn(n.width):n.width)/r,s=(a?Nn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const qr=Fn(0);function Jr(e){let t=vr(e);return!Fr()||!t.visualViewport?qr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Yr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==vr(e)?!1:t}function Xr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Gr(e),o=Fn(1);t&&(r?xr(r)&&(o=Kr(r)):o=Kr(e));let s=Yr(a,n,r)?Jr(a):Fn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=vr(a),t=r&&xr(r)?vr(r):r,n=e,i=Ur(n);for(;i&&r&&t!==n;){let e=Kr(i),t=i.getBoundingClientRect(),r=Rr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=vr(i),i=Ur(n)}}return ar({width:u,height:d,x:c,y:l})}function Zr(e,t){let n=zr(e).scrollLeft;return t?t.left+n:Xr(yr(e)).left+n}function Qr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Zr(e,n),y:n.top+t.scrollTop}}function $r(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=yr(r),s=t?kr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Fn(1),u=Fn(0),d=Sr(r);if((d||!d&&!a)&&((_r(r)!==`body`||Tr(o))&&(c=zr(r)),Sr(r))){let e=Xr(r);l=Kr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Qr(o,c):Fn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ei(e){return Array.from(e.getClientRects())}function ti(e){let t=yr(e),n=zr(e),r=e.ownerDocument.body,i=Mn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Mn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Zr(e),s=-n.scrollTop;return Rr(r).direction===`rtl`&&(o+=Mn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ni(e,t){let n=vr(e),r=yr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Fr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Zr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const ri=new Set([`absolute`,`fixed`]);function ii(e,t){let n=Xr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Sr(e)?Kr(e):Fn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ai(e,t,n){let r;if(t===`viewport`)r=ni(e,n);else if(t===`document`)r=ti(yr(e));else if(xr(t))r=ii(t,n);else{let n=Jr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ar(r)}function oi(e,t){let n=Br(e);return n===t||!xr(n)||Lr(n)?!1:Rr(n).position===`fixed`||oi(n,t)}function si(e,t){let n=t.get(e);if(n)return n;let r=Hr(e,[],!1).filter(e=>xr(e)&&_r(e)!==`body`),i=null,a=Rr(e).position===`fixed`,o=a?Br(e):e;for(;xr(o)&&!Lr(o);){let t=Rr(o),n=Nr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&ri.has(i.position)||Tr(o)&&!n&&oi(e,o))?r=r.filter(e=>e!==o):i=t,o=Br(o)}return t.set(e,r),r}function ci(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?kr(t)?[]:si(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=ai(t,n,i);return e.top=Mn(r.top,e.top),e.right=jn(r.right,e.right),e.bottom=jn(r.bottom,e.bottom),e.left=Mn(r.left,e.left),e},ai(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function li(e){let{width:t,height:n}=Wr(e);return{width:t,height:n}}function ui(e,t,n){let r=Sr(t),i=yr(t),a=n===`fixed`,o=Xr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Fn(0);function l(){c.x=Zr(i)}if(r||!r&&!a)if((_r(t)!==`body`||Tr(i))&&(s=zr(t)),r){let e=Xr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Qr(i,s):Fn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function di(e){return Rr(e).position===`static`}function fi(e,t){if(!Sr(e)||Rr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return yr(e)===n&&(n=n.ownerDocument.body),n}function pi(e,t){let n=vr(e);if(kr(e))return n;if(!Sr(e)){let t=Br(e);for(;t&&!Lr(t);){if(xr(t)&&!di(t))return t;t=Br(t)}return n}let r=fi(e,t);for(;r&&Dr(r)&&di(r);)r=fi(r,t);return r&&Lr(r)&&di(r)&&!Nr(r)?n:r||Pr(e)||n}const mi=async function(e){let t=this.getOffsetParent||pi,n=this.getDimensions,r=await n(e.floating);return{reference:ui(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function hi(e){return Rr(e).direction===`rtl`}const gi={convertOffsetParentRelativeRectToViewportRelativeRect:$r,getDocumentElement:yr,getClippingRect:ci,getOffsetParent:pi,getElementRects:mi,getClientRects:ei,getDimensions:li,getScale:Kr,isElement:xr,isRTL:hi};function _i(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function vi(e,t){let n=null,r,i=yr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Pn(d),h=Pn(i.clientWidth-(u+f)),g=Pn(i.clientHeight-(d+p)),ee=Pn(u),te={rootMargin:-m+`px `+-h+`px `+-g+`px `+-ee+`px`,threshold:Mn(0,jn(1,c))||1},_=!0;function ne(t){let n=t[0].intersectionRatio;if(n!==c){if(!_)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!_i(l,e.getBoundingClientRect())&&o(),_=!1}try{n=new IntersectionObserver(ne,{...te,root:i.ownerDocument})}catch{n=new IntersectionObserver(ne,te)}n.observe(e)}return o(!0),a}function yi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Gr(e),u=i||a?[...l?Hr(l):[],...Hr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?vi(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Xr(e):null;c&&g();function g(){let t=Xr(e);h&&!_i(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const bi=pr,xi=mr,Si=ur,Ci=hr,wi=lr,Ti=(e,t,n)=>{let r=new Map,i={platform:gi,...n},a={...i.platform,_c:r};return sr(e,t,{...i,platform:a})};function Ei(e){return Oi(e)}function Di(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Oi(e){for(let t=e;t;t=Di(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Di(e);t;t=Di(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Nr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ki=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

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
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
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
`;function Ai(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var ji=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),C=class extends ut{constructor(){super(...arguments),this.localize=new Zt(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Ai(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=yi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[bi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ci({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;ji&&!Ai(this.anchor)&&this.boundary===`scroll`&&(t=Hr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Si({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(xi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ci({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(wi({element:this.arrowEl,padding:this.arrowPadding}));let n=ji?e=>gi.getOffsetParent(e,Ei):gi.getOffsetParent;Ti(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:ji?`absolute`:`fixed`,platform:{...gi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new An)}render(){return Fe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Sn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Sn({popup:!0,"popup-active":this.active,"popup-fixed":!ji,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Fe`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};C.css=ki,o([st(`.popup`)],C.prototype,`popup`,2),o([st(`.arrow`)],C.prototype,`arrowEl`,2),o([b()],C.prototype,`anchor`,2),o([b({type:Boolean,reflect:!0})],C.prototype,`active`,2),o([b({reflect:!0})],C.prototype,`placement`,2),o([b()],C.prototype,`boundary`,2),o([b({type:Number})],C.prototype,`distance`,2),o([b({type:Number})],C.prototype,`skidding`,2),o([b({type:Boolean})],C.prototype,`arrow`,2),o([b({attribute:`arrow-placement`})],C.prototype,`arrowPlacement`,2),o([b({attribute:`arrow-padding`,type:Number})],C.prototype,`arrowPadding`,2),o([b({type:Boolean})],C.prototype,`flip`,2),o([b({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],C.prototype,`flipFallbackPlacements`,2),o([b({attribute:`flip-fallback-strategy`})],C.prototype,`flipFallbackStrategy`,2),o([b({type:Object})],C.prototype,`flipBoundary`,2),o([b({attribute:`flip-padding`,type:Number})],C.prototype,`flipPadding`,2),o([b({type:Boolean})],C.prototype,`shift`,2),o([b({type:Object})],C.prototype,`shiftBoundary`,2),o([b({attribute:`shift-padding`,type:Number})],C.prototype,`shiftPadding`,2),o([b({attribute:`auto-size`})],C.prototype,`autoSize`,2),o([b()],C.prototype,`sync`,2),o([b({type:Object})],C.prototype,`autoSizeBoundary`,2),o([b({attribute:`auto-size-padding`,type:Number})],C.prototype,`autoSizePadding`,2),o([b({attribute:`hover-bridge`,type:Boolean})],C.prototype,`hoverBridge`,2),C=o([nt(`wa-popup`)],C);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Mi=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ni=e=>e??y,Pi=Symbol.for(``),Fi=e=>{if(e?.r===Pi)return e?._$litStatic$},Ii=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Pi}),Li=new Map,Ri=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Fi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Li.get(e))===void 0&&(o.raw=o,Li.set(e,t=o)),n=s}return e(t,...n)})(Fe);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var zi=`@layer wa-component {
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
`,w=class extends mn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new hn(this,`[default]`,`start`,`end`),this.localize=new Zt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,Mi()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new fn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ii`a`:Ii`button`;return Ri`
      <${t}
        part="base"
        class=${Sn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ni(e?void 0:this.disabled)}
        type=${Ni(e?void 0:this.type)}
        title=${this.title}
        name=${Ni(e?void 0:this.name)}
        value=${Ni(e?void 0:this.value)}
        href=${Ni(e?this.href:void 0)}
        target=${Ni(e?this.target:void 0)}
        download=${Ni(e?this.download:void 0)}
        rel=${Ni(e&&this.rel?this.rel:void 0)}
        role=${Ni(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ri`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ri`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};w.shadowRootOptions={...mn.shadowRootOptions,delegatesFocus:!0},w.css=[zi,En,gn],o([st(`.button`)],w.prototype,`button`,2),o([st(`slot:not([name])`)],w.prototype,`labelSlot`,2),o([at()],w.prototype,`invalid`,2),o([at()],w.prototype,`isIconButton`,2),o([b()],w.prototype,`title`,2),o([b({reflect:!0})],w.prototype,`variant`,2),o([b({reflect:!0})],w.prototype,`appearance`,2),o([b({reflect:!0})],w.prototype,`size`,2),o([b({attribute:`with-caret`,type:Boolean,reflect:!0})],w.prototype,`withCaret`,2),o([b({type:Boolean})],w.prototype,`disabled`,2),o([b({type:Boolean,reflect:!0})],w.prototype,`loading`,2),o([b({type:Boolean,reflect:!0})],w.prototype,`pill`,2),o([b()],w.prototype,`type`,2),o([b({reflect:!0})],w.prototype,`name`,2),o([b({reflect:!0})],w.prototype,`value`,2),o([b({reflect:!0})],w.prototype,`href`,2),o([b()],w.prototype,`target`,2),o([b()],w.prototype,`rel`,2),o([b()],w.prototype,`download`,2),o([b({reflect:!0})],w.prototype,`form`,2),o([b({attribute:`formaction`})],w.prototype,`formAction`,2),o([b({attribute:`formenctype`})],w.prototype,`formEnctype`,2),o([b({attribute:`formmethod`})],w.prototype,`formMethod`,2),o([b({attribute:`formnovalidate`,type:Boolean})],w.prototype,`formNoValidate`,2),o([b({attribute:`formtarget`})],w.prototype,`formTarget`,2),o([n(`disabled`,{waitUntilFirstUpdate:!0})],w.prototype,`handleDisabledChange`,1),w=o([nt(`wa-button`)],w);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Bi=`:host {
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
`,Vi=class extends ut{constructor(){super(...arguments),this.localize=new Zt(this)}render(){return Fe`
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
    `}};Vi.css=Bi,Vi=o([nt(`wa-spinner`)],Vi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Hi=t({default:()=>S}),T;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Ui;function Wi(e){this.c=e}T=Wi.prototype,T.toString=(function(){return String.fromCharCode(this.c)});function Gi(e){switch(typeof e){case`string`:return xg.l();case`number`:return oa(e)?e<<24>>24===e?Xm.l():e<<16>>16===e?ah.l():mg.l():sa(e)?pg.l():fg.l();case`boolean`:return Jp.l();case`undefined`:return $c.l();default:return e instanceof I?_g.l():e instanceof Wi?Zp.l():e&&e.$classData?e.$classData.l():null}}function Ki(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return oa(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:sa(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof I?`java.lang.Long`:e instanceof Wi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jQ()}}function qi(e,t){switch(typeof e){case`string`:return yg(e,t);case`number`:return ug(e,t);case`boolean`:return Kp(e,t);case`undefined`:return Xc(e,t);default:return e&&e.$classData||e===null?e.l(t):e instanceof I?hg(e,t):e instanceof Wi?Xp(la(e),t):da.prototype.l.call(e,t)}}function Ji(e){switch(typeof e){case`string`:return vg(e);case`number`:return dg(e);case`boolean`:return qp(e);case`undefined`:return Zc(e);default:return e&&e.$classData||e===null?e.r():e instanceof I?gg(e):e instanceof Wi?Yp(la(e)):da.prototype.r.call(e)}}function Yi(e){return e===void 0?`undefined`:e.toString()}function Xi(e,t){if(t===0)throw new Ym(`/ by zero`);return e/t|0}function Zi(e,t){if(t===0)throw new Ym(`/ by zero`);return e%t|0}function Qi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function $i(e){return String.fromCharCode(e)}function ea(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ta=0,na=new WeakMap;function ra(e){switch(typeof e){case`string`:return vg(e);case`number`:return dg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:vg(n);default:if(e===null)return 0;var r=na.get(e);return r===void 0&&(r=ta+1|0,ta=r,na.set(e,r)),r}}function ia(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function aa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function oa(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function sa(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ca(e){return new Wi(e)}ca(0);function la(e){return e===null?0:e.c}function ua(e){return e===null?Ui:e}function da(){}T=da.prototype,T.constructor=da;function E(){}E.prototype=T,T.r=(function(){return ra(this)}),T.l=(function(e){return this===e}),T.t=(function(){var e=this.r();return Ki(this)+`@`+(+(e>>>0)).toString(16)}),T.toString=(function(){return this.t()});function fa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}T=fa.prototype=new E,T.constructor=fa,T.ab=(function(e,t,n,r){ea(this.a,e,t.a,n,r)}),T.a7=(function(){return new fa(this.a.slice())});function pa(){}pa.prototype=T;function ma(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}T=ma.prototype=new E,T.constructor=ma,T.ab=(function(e,t,n,r){ea(this.a,e,t.a,n,r)}),T.a7=(function(){return new ma(this.a.slice())});function ha(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}T=ha.prototype=new E,T.constructor=ha,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new ha(this.a.slice())});function ga(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}T=ga.prototype=new E,T.constructor=ga,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new ga(this.a.slice())});function _a(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}T=_a.prototype=new E,T.constructor=_a,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new _a(this.a.slice())});function va(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}T=va.prototype=new E,T.constructor=va,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new va(this.a.slice())});function ya(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Ui}else this.a=e}T=ya.prototype=new E,T.constructor=ya,T.ab=(function(e,t,n,r){ea(this.a,e,t.a,n,r)}),T.a7=(function(){return new ya(this.a.slice())});function ba(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}T=ba.prototype=new E,T.constructor=ba,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new ba(this.a.slice())});function xa(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}T=xa.prototype=new E,T.constructor=xa,T.ab=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),T.a7=(function(){return new xa(this.a.slice())});function D(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}T=D.prototype,T.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new D().y(this,r,i)),this}),T.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),T.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),T.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new pa;n.constructor=t,n.ab=(function(e,t,n,r){ea(this.a,e,t.a,n,r)}),n.a7=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Sa});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),T.r=(function(){return this.A||=new D().a(this),this.A}),T.l=(function(){return this.L||=new Wf(this),this.L}),T.R=(function(e){return this===e||this.F(e)}),T.S=(function(){return this.P?this.P.l():null}),T.Q=(function(){return this.O?this.O.l():null}),T.U=(function(e){if(this===Ca)throw Qm(new $m);return new(this.r()).C(e)});var Sa=new D;Sa.n={},Sa.E=`Ljava.lang.Object;`,Sa.F=(e=>!e.X),Sa.N=`java.lang.Object`,Sa.I=(e=>e!==null),Sa.A=new D().y(Sa,fa,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),da.prototype.$classData=Sa;var Ca=new D().p(void 0,`V`,`void`,void 0,void 0);new D().p(!1,`Z`,`boolean`,ma,void 0);var wa=new D().p(0,`C`,`char`,ha,Uint16Array);new D().p(0,`B`,`byte`,ga,Int8Array),new D().p(0,`S`,`short`,_a,Int16Array),new D().p(0,`I`,`int`,va,Int32Array);var Ta=new D().p(null,`J`,`long`,ya,void 0);new D().p(0,`F`,`float`,ba,Float32Array),new D().p(0,`D`,`double`,xa,Float64Array);var Ea=new D().i(1,`com.raquo.airstream.core.InternalObserver`,{bl:1});function Da(e){return Gi(e).dq()+`@`+e.r()}function Oa(e){var t=e.cr();return t===void 0?e.cm():t}function ka(){ja=this,Ma().gH(new Z((e=>void 0)),Cl().ce,!0)}T=ka.prototype=new E,T.constructor=ka;function Aa(){}Aa.prototype=T,T.gH=(function(e,t,n){return new Ap(e,n,t,this)}),T.i4=(function(e,t){return new Mp(e,t,this)}),new D().i(ka,`com.raquo.airstream.core.Observer$`,{bn:1});var ja;function Ma(){return ja||=new ka,ja}function Na(){}T=Na.prototype=new E,T.constructor=Na;function Pa(){}Pa.prototype=T,T.iY=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new D().i(Na,`com.raquo.airstream.core.ObserverList$`,{bq:1});var Fa;function Ia(){return Fa||=new Na,Fa}function La(){this.aQ=0,this.aQ=0}T=La.prototype=new E,T.constructor=La;function Ra(){}Ra.prototype=T,T.gq=(function(){return this.aQ===2147483647?this.aQ=1:this.aQ=1+this.aQ|0,this.aQ}),new D().i(La,`com.raquo.airstream.core.Signal$`,{bs:1});var za;function Ba(){return za||=new La,za}function Va(e){this.cy=null,this.dH=null,this.cz=0,this.cy=e,this.dH=void 0;var t=so().bT();this.cz=t===void 0?1:1+t.cz|0,qa().bV===-1||this.cz>qa().bV?H().Y(new ng(this,qa().bV)):Qa().E?Qa().aw.push(this)|0:so().dh(this)}T=Va.prototype=new E,T.constructor=Va;function Ha(){}Ha.prototype=T;var Ua=new D().i(Va,`com.raquo.airstream.core.Transaction`,{bt:1});function Wa(){this.bV=0,this.dI=null,Ka=this,this.bV=1e3,this.dI=new Z((e=>{throw Kf(new K,`Attempted to run Transaction `+e+` after it was already executed.`)}))}T=Wa.prototype=new E,T.constructor=Wa;function Ga(){}Ga.prototype=T,T.g2=(function(e){try{e.cy.j(e);var t=e.dH;if(t!==void 0)for(;t.jV();)t.jK().jZ(e)}catch(e){var n=e instanceof _d?e:new $(e);H().Y(n)}}),new D().i(Wa,`com.raquo.airstream.core.Transaction$`,{bu:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(e){e.bW.length|0?new Va(new Z((t=>{for(;(e.bW.length|0)>0;){var n=e.bW.shift();try{n.j(t)}catch(e){var r=e instanceof _d?e:new $(e);H().Y(r)}}for(;(e.aw.length|0)>0;){var i=e.aw.shift();so().dh(i)}}))):(e.aw.length|0)>0&&new Va(new Z((t=>{for(;(e.aw.length|0)>0;)so().dh(e.aw.shift())})))}function Ya(){this.E=!1,this.bW=null,this.aw=null,Za=this,this.E=!1,this.bW=O().C(R().b(new(L.r()).C([]))),this.aw=O().C(R().b(new(Ua.r()).C([])))}T=Ya.prototype=new E,T.constructor=Ya;function Xa(){}Xa.prototype=T,new D().i(Ya,`com.raquo.airstream.core.Transaction$onStart$`,{bv:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(e,t){return e.ax.get(t)}function eo(e,t){e.bX.unshift(t)}function to(e){return e.bX.shift()}function no(e,t,n){var r=$a(e,t),i=r===void 0,a=r===void 0?O().C(R().b(new(Ua.r()).C([]))):r;a.push(n),i&&e.ax.set(t,a)}function ro(e,t){var n=$a(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ax.delete(t),i}}function io(){this.bX=null,this.ax=null,oo=this,this.bX=O().C(R().b(new(Ua.r()).C([]))),this.ax=new Map}T=io.prototype=new E,T.constructor=io;function ao(){}ao.prototype=T,T.dh=(function(e){var t=this.bT();t===void 0?(eo(this,e),qa().g2(e),this.hA(e)):no(this,t,e)}),T.hA=(function(e){for(var t=e;;){var n=this.bT(),r=t;if(!(n!==void 0&&Bl().H(r,n)))throw Kf(new K,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.iS(t),t.cy=qa().dI;var i=this.bT();if(Bl().H(i,void 0))if((this.ax.size|0)>0){var a=new Gd(0);throw this.ax.forEach((e=>((t,n)=>{e.bz=e.bz+(t.length|0)|0}))(a)),Kf(new K,`Transaction queue error: Stack cleared, but a total of `+a.bz+` children for `+(this.ax.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else qa().g2(i),t=i}}),T.iS=(function(e){for(var t=e;;){var n=ro(this,t);if(Bl().H(n,void 0)){to(this);var r=this.bT();if(!Bl().H(r,void 0))t=r;else return}else{eo(this,n);return}}}),T.bT=(function(){return this.bX[0]}),new D().i(io,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bw:1});var oo;function so(){return oo||=new io,oo}function co(e,t){var n=e.ac.indexOf(t)|0;if(n!==-1)e.ac.splice(n,1),e.K.o()||t.gs();else throw Kf(new K,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function lo(e){for(;(e.bY.length|0)>0;)co(e,e.bY.shift())}function uo(e){this.dJ=null,this.ac=null,this.aR=!1,this.bY=null,this.K=null,this.aS=0,this.dJ=e,this.ac=O().C(R().b(new(ho.r()).C([]))),this.aR=!0,this.bY=O().C(R().b(new(ho.r()).C([]))),this.K=Q(),this.aS=0}T=uo.prototype=new E,T.constructor=uo;function fo(){}fo.prototype=T,T.fK=(function(){if(this.K.o()){var e=Qa(),t=(()=>{var e=new gu(this.dJ);this.K=new Eg(e),this.aR=!1,this.aS=0;for(var t=0,n=this.ac.length|0;t<n;){var r=t+this.aS|0;this.ac[r].gr(e),t=1+t|0}lo(this),this.aR=!0,this.aS=0});if(Qa(),e.E)t();else{e.E=!0;try{t()}finally{e.E=!1,Ja(e)}}}else throw Kf(new K,`Can not activate `+this+`: it is already active`)}),T.hv=(function(){if(this.K.o())throw Kf(new K,`Can not deactivate DynamicOwner: it is not active`);this.aR=!1;for(var e=this.ac,t=0,n=e.length|0;t<n;)e[t].gs(),t=1+t|0;lo(this);var r=this.K;r.o()||r.A().iq(),lo(this),this.aR=!0,this.K=Q()}),T.h4=(function(e,t){t?(this.aS=1+this.aS|0,this.ac.unshift(e)):this.ac.push(e);var n=this.K;if(!n.o()){var r=n.A();e.gr(r)}}),T.iZ=(function(e){this.aR?co(this,e):this.bY.push(e)}),new D().i(uo,`com.raquo.airstream.ownership.DynamicOwner`,{bz:1});function po(e,t,n){this.bZ=null,this.dK=null,this.c0=null,this.bZ=e,this.dK=t,this.c0=Q(),e.h4(this,n)}T=po.prototype=new E,T.constructor=po;function mo(){}mo.prototype=T,T.cq=(function(){this.bZ.iZ(this)}),T.gr=(function(e){var t=Qa(),n=(()=>{this.c0=this.dK.j(e)});if(Qa(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,Ja(t)}}}),T.gs=(function(){var e=this.c0;e.o()||(e.A().cq(),this.c0=Q())});var ho=new D().i(po,`com.raquo.airstream.ownership.DynamicSubscription`,{bA:1});function go(){}T=go.prototype=new E,T.constructor=go;function _o(){}_o.prototype=T,T.cu=(function(e,t,n){return new po(e,new Z((e=>new Eg(t.j(e)))),n)}),T.gC=(function(e,t,n){return new po(e,new Z((e=>(t.j(e),Q()))),n)}),T.jc=(function(e,t,n){return yo().cu(e,new Z((e=>tf(t,n,e))),!1)}),new D().i(go,`com.raquo.airstream.ownership.DynamicSubscription$`,{bB:1});var vo;function yo(){return vo||=new go,vo}function bo(e){e.aT=O().C(R().b(new(Do.r()).C([])))}function xo(e){for(var t=e.aT,n=0,r=t.length|0;n<r;)wo(t[n]),n=1+n|0;e.aT.length=0}function So(e,t){var n=e.aT.indexOf(t)|0;if(n!==-1)e.aT.splice(n,1);else throw Kf(new K,`Can not remove Subscription from Owner: subscription not found.`)}function Co(e,t){e.aT.push(t)}function wo(e){if(!e.cB)e.dM.aa(),e.cB=!0;else throw Kf(new K,`Can not kill Subscription: it was already killed.`)}function To(e,t){this.dN=null,this.dM=null,this.cB=!1,this.dN=e,this.dM=t,this.cB=!1,e.iP(this)}T=To.prototype=new E,T.constructor=To;function Eo(){}Eo.prototype=T,T.cq=(function(){wo(this),So(this.dN,this)});var Do=new D().i(To,`com.raquo.airstream.ownership.Subscription`,{bE:1});function Oo(e,t){this.dO=null,this.dP=null,this.ad=null,this.ay=!1,this.dO=e,this.dP=t,this.ad=Q(),this.ay=!1}T=Oo.prototype=new E,T.constructor=Oo;function ko(){}ko.prototype=T,T.il=(function(){var e=this.ad;return!e.o()&&!e.A().bZ.K.o()}),T.j7=(function(e){if(this.ay)throw Kf(new K,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ad;if(t.o())var n=!1;else var n=e===t.A().bZ;if(!n){this.il()&&!e.K.o()&&(this.ay=!0);var r=this.ad;r.o()||(r.A().cq(),this.ad=Q()),this.ad=new Eg(yo().cu(e,new Z((e=>(this.ay||this.dO.aa(),new To(e,new pm((()=>{this.ay||this.dP.aa()})))))),!1)),this.ay=!1}}),T.hn=(function(){if(this.ay)throw Kf(new K,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ad;e.o()||e.A().cq(),this.ad=Q()}),new D().i(Oo,`com.raquo.airstream.ownership.TransferableSubscription`,{bF:1});function Ao(){}T=Ao.prototype=new E,T.constructor=Ao;function jo(){}jo.prototype=T,T.hc=(function(e){return new ig(new Qh(e))}),new D().i(Ao,`com.raquo.airstream.state.Var$`,{bJ:1});var Mo;function No(){return Mo||=new Ao,Mo}function Po(){}T=Po.prototype=new E,T.constructor=Po;function Fo(){}Fo.prototype=T,T.C=(function(e){return[...au().ji(e)]}),new D().i(Po,`com.raquo.ew.JsArray$`,{bM:1});var Io;function O(){return Io||=new Po,Io}function Lo(){}T=Lo.prototype=new E,T.constructor=Lo;function Ro(){}Ro.prototype=T,T.ih=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),T.hZ=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new D().i(Lo,`com.raquo.ew.JsArray$RichJsArray$`,{bN:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(){this.dW=null,Uo=this,document.createElement(`template`),this.ht(Y().d.jd().je()),this.dW=RegExp(` `,`g`)}T=Vo.prototype=new E,T.constructor=Vo;function Ho(){}Ho.prototype=T,T.h9=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof _d?e:new $(e);if(n instanceof $&&n.U instanceof DOMException)return!1;throw n instanceof $?n.U:n}}),T.io=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Bl().H(t,r))return!0;n=r}}),T.h2=(function(e,t){e.addEventListener(t.aV.bp.c7,t.cO,t.cP)}),T.iW=(function(e,t){e.removeEventListener(t.aV.bp.c7,t.cO,t.cP)}),T.hs=(function(e){return document.createElement(e.ds())}),T.i6=(function(e,t){var n=this.i7(e,t);return n===void 0?void 0:t.aU.cl(n)}),T.i7=(function(e,t){var n=e.L.getAttributeNS(null,t.ae);return n===null?void 0:n}),T.dx=(function(e,t,n){this.j4(e,t,t.aU.bN(n))}),T.j4=(function(e,t,n){n===null?this.iX(e,t):e.L.setAttribute(t.ae,n)}),T.iX=(function(e,t){e.L.removeAttribute(t.ae)}),T.j5=(function(e,t,n){this.j6(e,t,t.ei.bN(n))}),T.j6=(function(e,t,n){e.L[t.af]=n}),T.ht=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eA)}),T.ia=(function(e,t){var n=this.ib(e,t);return n===void 0?void 0:t.cM.cl(n)}),T.ib=(function(e,t){var n=e.dv(),r=t.c9,i=n.getAttributeNS(r.o()?null:r.A(),t.cN);return i===null?void 0:i}),T.j8=(function(e,t,n){this.j9(e,t,t.cM.bN(n))}),T.j9=(function(e,t,n){if(n===null)this.j0(e,t);else{var r=t.c9;if(r.o())e.dv().setAttribute(t.c8,n);else{var i=r.A();e.dv().setAttributeNS(i,t.c8,n)}}}),T.j0=(function(e,t){var n=e.dv(),r=t.c9;n.removeAttributeNS(r.o()?null:r.A(),t.cN)}),T.hu=(function(e){return document.createTextNode(e)}),T.gi=(function(e){return Il().hq(e.tagName,45)}),T.ic=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.gi(e)){var t=e.value;return new Nm(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),T.hw=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Xv(this.g4(r),n);r=i,n=a}}),T.g4=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dW,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new D().i(Vo,`com.raquo.laminar.DomApi$`,{bO:1});var Uo;function k(){return Uo||=new Vo,Uo}function Wo(e,t,n){this.cG=null,this.dX=null,this.cF=null,this.cG=e,this.dX=t,this.cF=n}T=Wo.prototype=new E,T.constructor=Wo;function Go(){}Go.prototype=T,T.as=(function(e){this.cG===null?this.cF===null?Dl().i0(this.dX,e):Bo().hZ(this.cF,xp().i3(e)):this.cG.as(e)}),new D().i(Wo,`com.raquo.laminar.Seq`,{bQ:1});function Ko(){}T=Ko.prototype=new E,T.constructor=Ko;function qo(){}qo.prototype=T,new D().i(Ko,`com.raquo.laminar.Seq$`,{bR:1});var Jo;function Yo(){return Jo||=new Ko,Jo}function Xo(e){Ma(),H(),e.e0=No()}function Zo(e){e.gJ=Ps()}function Qo(e){$o(e,new Z((e=>{e.ek.L.focus()})))}function $o(e,t){return new Fu(new Z((e=>{var n=new Ud(!e.a6.K.o()),r=new Z((e=>{n.ci?n.ci=!1:t.j(e)}));yo().gC(e.a6,new Z((e=>(t=>{r.j(new ks(e,t))}))(e)),!1)})),Ps())}function es(){this.Z=null,this.cH=null,this.bo=null,ns=this,this.Z=new bu(A()),new bu(A()),this.cH=new bu(A()),this.bo=new vu}T=es.prototype=new E,T.constructor=es;function ts(){}ts.prototype=T,new D().i(es,`com.raquo.laminar.codecs.package$`,{bZ:1});var ns;function A(){return ns||=new es,ns}function rs(e){e.gK=is(e,`class`,` `)}function is(e,t,n){var r=B(new Du,t,A().Z);return new Su(r.ae,new Z((e=>{var t=k().i6(e,r);return t===void 0?``:t})),new gm(((e,t)=>{k().dx(e,r,t)})),n)}function as(e){e.gI=os(e,`class`,` `)}function os(e,t,n){var r=new ju(t,A().Z,Q());return new Su(r.c8,new Z((e=>{var t=k().ia(e,r);return t===void 0?``:t})),new gm(((e,t)=>{k().j8(e,r,t)})),n)}function ss(){this.eh=null,ls=this,Y().d.gF(),O().C(R().b(new(Eu.r()).C([Y().d.bQ()]))),Y().d.gF(),O().C(R().b(new(Eu.r()).C([Y().d.bQ(),Y().d.iL()]))),Y().d.hm(),O().C(R().b(new(Eu.r()).C([Y().d.bQ(),Y().d.iM()]))),this.eh=O().C(R().b(new(xg.r()).C([`value`,`checked`])))}T=ss.prototype=new E,T.constructor=ss;function cs(){}cs.prototype=T,new D().i(ss,`com.raquo.laminar.inputs.InputController$`,{cb:1});var ls;function us(){return ls||=new ss,ls}function ds(e){this.c5=null,this.c5=e}T=ds.prototype=new E,T.constructor=ds;function fs(){}fs.prototype=T,T.gt=(function(e,t){try{this.c5.dj(e,t)}catch(e){var n=e instanceof _d?e:new $(e);H().Y(n)}}),T.ho=(function(e){return new ds(new gm(((t,n)=>{this.c5.dj(t,n),e.c5.dj(t,n)})))}),T.ha=(function(e){return e===void 0?this:e.ho(this)}),new D().i(ds,`com.raquo.laminar.inserters.InserterHooks`,{ce:1});function ps(){}T=ps.prototype=new E,T.constructor=ps;function ms(){}ms.prototype=T,T.bd=(function(e,t){return new Fm(e,void 0)}),new D().i(ps,`com.raquo.laminar.inserters.StaticChildInserter$`,{cg:1});var hs;function gs(){return hs||=new ps,hs}function _s(e,t,n,r){this.bp=null,this.cL=!1,this.cK=!1,this.cJ=null,this.bp=e,this.cL=t,this.cK=n,this.cJ=r}T=_s.prototype=new E,T.constructor=_s;function vs(){}vs.prototype=T,T.iv=(function(){var e=new Z((e=>{var t=this.cJ.j(e);if(t.o())return Q();t.A();var n=k().ic(e.target);return new Eg(n===void 0?``:n)}));return new _s(this.bp,this.cL,this.cK,e)}),new D().i(_s,`com.raquo.laminar.keys.EventProcessor`,{cj:1});function ys(){}T=ys.prototype=new E,T.constructor=ys;function bs(){}bs.prototype=T,T.hC=(function(e,t,n){return new _s(e,t,n,new Z((e=>new Eg(e))))}),new D().i(ys,`com.raquo.laminar.keys.EventProcessor$`,{ck:1});var xs;function Ss(){return xs||=new ys,xs}function Cs(){}T=Cs.prototype=new E,T.constructor=Cs;function ws(){}ws.prototype=T;function Ts(){this.gL=null,this.gM=null,this.gN=null,this.gO=null,this.gL=`http://www.w3.org/2000/svg`,this.gM=`http://www.w3.org/1999/xlink`,this.gN=`http://www.w3.org/XML/1998/namespace`,this.gO=`http://www.w3.org/2000/xmlns/`}T=Ts.prototype=new E,T.constructor=Ts;function Es(){}Es.prototype=T,T.ix=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new mh(e)}}),new D().i(Ts,`com.raquo.laminar.keys.SvgAttr$`,{cn:1});var Ds;function Os(){return Ds||=new Ts,Ds}function ks(e,t){this.ek=null,this.ej=null,this.ek=e,this.ej=t}T=ks.prototype=new E,T.constructor=ks;function As(){}As.prototype=T,new D().i(ks,`com.raquo.laminar.lifecycle.MountContext`,{co:1});var j=new D().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function js(){this.gP=null,Ns=this,this.gP=new Nu}T=js.prototype=new E,T.constructor=js;function Ms(){}Ms.prototype=T,new D().i(js,`com.raquo.laminar.modifiers.Modifier$`,{cs:1});var Ns;function Ps(){return Ns||=new js,Ns}function Fs(){this.az=null,Ls=this,this.az=new Lu}T=Fs.prototype=new E,T.constructor=Fs;function Is(){}Is.prototype=T,new D().i(Fs,`com.raquo.laminar.modifiers.RenderableNode$`,{cw:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(){this.g=null,Vs=this,this.g=new Uu(new Z((e=>e)),M()),new Uu(new Z((e=>``+(e|0))),M()),new Uu(new Z((e=>``+ +e)),M()),new Uu(new Z((e=>``+!!e)),M()),new Uu(new Z((e=>e.jh())),M())}T=zs.prototype=new E,T.constructor=zs;function Bs(){}Bs.prototype=T,new D().i(zs,`com.raquo.laminar.modifiers.RenderableText$`,{cB:1});var Vs;function M(){return Vs||=new zs,Vs}function Hs(){}T=Hs.prototype=new E,T.constructor=Hs;function Us(){}Us.prototype=T,T.ck=(function(e,t,n){var r=new Eg(e);t.gG(r),n!==void 0&&n.gt(e,t);var i=k().h9(e.aN(),t.aN());return i&&t.gz(r),i}),new D().i(Hs,`com.raquo.laminar.nodes.ParentNode$`,{cE:1});var Ws;function Gs(){return Ws||=new Hs,Ws}function Ks(){}T=Ks.prototype=new E,T.constructor=Ks;function qs(){}qs.prototype=T,T.jm=(function(e,t){return yo().cu(e.a6,new Z((n=>t.j(new ks(e,n)))),!0)}),new D().i(Ks,`com.raquo.laminar.nodes.ReactiveElement$`,{cG:1});var Js;function Ys(){return Js||=new Ks,Js}function Xs(e){this.ew=null,this.ew=new ds(new gm(((t,n)=>{matchResult1:{var r=n.aN();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=H(),a=r.textContent,o=t.aN().tagName;i.Y(Kf(new K,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}T=Xs.prototype=new E,T.constructor=Xs;function Zs(){}Zs.prototype=T,T.b6=(function(e){return e.gn(new Z((e=>e.jn(this.ew))))}),new D().i(Xs,`com.raquo.laminar.nodes.Slot`,{cJ:1});function Qs(){ec=this,O().C(R().jo(new va(new Int32Array([0]))))}T=Qs.prototype=new E,T.constructor=Qs;function $s(){}$s.prototype=T,T.h1=(function(){return new Z((e=>void 0))}),new D().i(Qs,`com.raquo.laminar.tags.CustomHtmlTag$`,{cL:1});var ec;function tc(){return ec||=new Qs,ec}function nc(){}T=nc.prototype=new E,T.constructor=nc;function rc(){}rc.prototype=T,T.h6=(function(){N().hH(),N().hO(),N().hP(),N().hQ(),N().hR(),N().hS(),N().hT(),N().hU(),N().hV(),N().hI(),N().hJ(),N().hK(),N().hL(),N().hM(),N().hN()}),T.hH=(function(){var e=document.querySelector(`#example1`);if(e!==null){Y();var t=Y().d.e0.hc(``);new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.h().h0(t))),new J((e=>new cf((Y(),Ss().hC(e.bQ(),!1,!1)).iv(),new Z((e=>{t.dS.du(e)})))))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(``)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-4`)))])),R().b(new(j.r()).C([U(Y().d,`Option 4`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-5`)))])),R().b(new(j.r()).C([U(Y().d,`Option 5`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-6`)))])),R().b(new(j.r()).C([U(Y().d,`Option 6`,M().g)])))]))))}}),T.hO=(function(){var e=document.querySelector(`#example2`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.dr().c(`Select one`)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hP=(function(){var e=document.querySelector(`#example3`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.dr().c(`Experience`))),new J((e=>e.ig().c(`Please tell us your skill level.`)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`1`)))])),R().b(new(j.r()).C([U(Y().d,`Novice`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`2`)))])),R().b(new(j.r()).C([U(Y().d,`Intermediate`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`3`)))])),R().b(new(j.r()).C([U(Y().d,`Advanced`,M().g)])))])))))}),T.hQ=(function(){var e=document.querySelector(`#example4`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Select one`)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hR=(function(){var e=document.querySelector(`#example5`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.bj().c(!0))),new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hS=(function(){var e=document.querySelector(`#example6`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.h7().hY()))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hT=(function(){var e=document.querySelector(`#example7`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.iQ().c(!0)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hU=(function(){var e=document.querySelector(`#example8`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Disabled`))),new J((e=>e.hy().c(!0)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hV=(function(){var e=document.querySelector(`#example9`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.dr().c(`Select a Few`))),new J((e=>e.gp().c(!0))),new J((e=>e.bj().c(!0)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-4`)))])),R().b(new(j.r()).C([U(Y().d,`Option 4`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-5`)))])),R().b(new(j.r()).C([U(Y().d,`Option 5`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-6`)))])),R().b(new(j.r()).C([U(Y().d,`Option 6`,M().g)])))])))))}),T.hI=(function(){var e=document.querySelector(`#example10`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-4`)))])),R().b(new(j.r()).C([U(Y().d,`Option 4`,M().g)])))])))))}),T.hJ=(function(){var e=document.querySelector(`#example11`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.gp().c(!0))),new J((e=>e.bj().c(!0)))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bi(),Y().d).bf().c(!0)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-4`)))])),R().b(new(j.r()).C([U(Y().d,`Option 4`,M().g)])))])))))}),T.hK=(function(){var e=document.querySelector(`#example12`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([])),R().b(new(j.r()).C([Y().d.gB().dk(R().b(new(j.r()).C([U(Y().d,`Section 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)]))),Nf().f(R().b(new(L.r()).C([])),R().b(new(j.r()).C([]))),Y().d.gB().dk(R().b(new(j.r()).C([U(Y().d,`Section 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-4`)))])),R().b(new(j.r()).C([U(Y().d,`Option 4`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-5`)))])),R().b(new(j.r()).C([U(Y().d,`Option 5`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-6`)))])),R().b(new(j.r()).C([U(Y().d,`Option 6`,M().g)])))])))))}),T.hL=(function(){var e=document.querySelector(`#example13`);e!==null&&(Y(),new W(e,(X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Small`))),new J((e=>e.bg().gA()))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))),X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Medium`))),new J((e=>e.bg().go()))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))),X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Large`))),new J((e=>e.bg().gm()))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))))))}),T.hM=(function(){var e=document.querySelector(`#example14`);e!==null&&(Y(),new W(e,X().f(R().b(new(L.r()).C([new J((e=>e.iR().jk()))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))])))))}),T.hN=(function(){var e=document.querySelector(`#example15`);e!==null&&(Y(),new W(e,(X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Small`))),new J((e=>e.bg().gA())),new J((e=>e.bj().c(!0))),new J((e=>sf(Y().d,lc().dy().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`house`))),new J((e=>e.dz().c(`solid`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu()))),new J((e=>sf(Y().d,lc().dm().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`flag-checkered`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu())))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))),X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Medium`))),new J((e=>e.bg().go())),new J((e=>e.bj().c(!0))),new J((e=>sf(Y().d,lc().dy().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`house`))),new J((e=>e.dz().c(`solid`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu()))),new J((e=>sf(Y().d,lc().dm().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`flag-checkered`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu())))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))),X().f(R().b(new(L.r()).C([new J((e=>e.au().c(`Large`))),new J((e=>e.bg().gm())),new J((e=>e.bj().c(!0))),new J((e=>sf(Y().d,lc().dy().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`house`))),new J((e=>e.dz().c(`solid`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu()))),new J((e=>sf(Y().d,lc().dm().b6(R().b(new(Lm.r()).C([(Y(),gs().bd(Lf().f(R().b(new(L.r()).C([new J((e=>e.bc().c(`flag-checkered`)))])),R().b(new(j.r()).C([]))),Rs().az))]))),xd().aB,Hu())))])),R().b(new(j.r()).C([G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-1`)))])),R().b(new(j.r()).C([U(Y().d,`Option 1`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-2`)))])),R().b(new(j.r()).C([U(Y().d,`Option 2`,M().g)]))),G().f(R().b(new(L.r()).C([new J((e=>e.h().c(`option-3`)))])),R().b(new(j.r()).C([U(Y().d,`Option 3`,M().g)])))]))))))}),new D().i(nc,`examples.select.Main$package$`,{cN:1});var ic;function N(){return ic||=new nc,ic}function ac(e){try{N().h6()}catch(e){throw e}}function oc(){this.ff=null,this.fg=!1,this.fd=null,this.fe=!1}T=oc.prototype=new E,T.constructor=oc;function sc(){}sc.prototype=T,T.dy=(function(){return this.fg||=(this.ff=new Xs(`start`),!0),this.ff}),T.dm=(function(){return this.fe||=(this.fd=new Xs(`end`),!0),this.fd}),new D().i(oc,`io.github.nguyenyou.webawesome.laminar.Select$slots$`,{cU:1});var cc;function lc(){return cc||=new oc,cc}function uc(){this.gR=!1,this.bq=null,this.cb=null,this.fj=null,this.cX=!1,this.gQ=0,this.gT=0,this.gS=null,fc=this,this.gR=!0,this.bq=new ArrayBuffer(8),this.cb=new Int32Array(this.bq,0,2),new Float32Array(this.bq,0,2),this.fj=new Float64Array(this.bq,0,1),this.cb[0]=16909060,this.cX=(new Int8Array(this.bq,0,8)[0]|0)==1,this.gQ=this.cX?0:1,this.gT=this.cX?1:0,this.gS=null}T=uc.prototype=new E,T.constructor=uc;function dc(){}dc.prototype=T,T.dt=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fj[0]=e,(this.cb[0]|0)^(this.cb[1]|0))}),new D().i(uc,`java.lang.FloatingPointBits$`,{d7:1});var fc;function pc(){return fc||=new uc,fc}function mc(e,t){for(var n=P().a5(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=hc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ld(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ld(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(dd.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function hc(e,t){var n=P().a5(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=P().a5(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=P().a5(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=P().a5(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=P().a5(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[gc(e,c[1]),Cc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[gc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[gc(e,d[1]),`<clinit>`]}function gc(e,t){var n=vc(e);if(Yc().fp.call(n,t))var r=vc(e)[t];else var r=Pc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function _c(e){if(!((1&e.Q)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cZ=t,e.Q=(1|e.Q)<<24>>24}return e.cZ}function vc(e){return(1&e.Q)<<24>>24?e.cZ:_c(e)}function yc(e){if(!((2&e.Q)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d0=t,e.Q=(2|e.Q)<<24>>24}return e.d0}function bc(e){return(2&e.Q)<<24>>24?e.d0:yc(e)}function xc(e){return(4&e.Q)<<24>>24||(e.cY=Object.keys(bc(e)),e.Q=(4|e.Q)<<24>>24),e.cY}function Sc(e){return(4&e.Q)<<24>>24?e.cY:xc(e)}function Cc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function wc(e,t){return t?t.arguments&&t.stack?Tc(e,t):t.stack&&t.sourceURL?Oc(e,t):t.stack&&t.number?Dc(e,t):t.stack&&t.fileName?Ec(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?kc(e,t):Ac(e,t):kc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?jc(e,t):Mc(e,t):t.stack&&!t.fileName?Tc(e,t):Nc(e,t):[]}function Tc(e,t){return(t.stack+`
`).replace(P().a5(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(P().I(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(P().I(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(P().I(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(P().I(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ec(e,t){return t.stack.replace(P().I(`(?:\\n@:0)?\\s+$`,`m`),``).replace(P().I(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Dc(e,t){return t.stack.replace(P().I(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(P().I(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(P().I(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Oc(e,t){return t.stack.replace(P().I(`\\[native code\\]\\n`,`m`),``).replace(P().I(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(P().I(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function kc(e,t){for(var n=P().I(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Ac(e,t){for(var n=P().I(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function jc(e,t){for(var n=P().a5(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Mc(e,t){for(var n=P().a5(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(P().a5(`<anonymous function: (\\S+)>`),`$1`).replace(P().a5(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Nc(e,t){return[]}function Pc(e,t,n){for(;;)if(t<(Sc(e).length|0)){var r=Sc(e)[t];if(n.startsWith(r))return``+bc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Fc(){this.cZ=null,this.d0=null,this.cY=null,this.Q=0}T=Fc.prototype=new E,T.constructor=Fc;function Ic(){}Ic.prototype=T,T.hW=(function(e){return mc(this,wc(this,e))}),new D().i(Fc,`java.lang.StackTrace$`,{dg:1});var Lc;function Rc(){return Lc||=new Fc,Lc}function zc(){}T=zc.prototype=new E,T.constructor=zc;function Bc(){}Bc.prototype=T,T.a5=(function(e){return new RegExp(e)}),T.I=(function(e,t){return new RegExp(e,t)}),new D().i(zc,`java.lang.StackTrace$StringRE$`,{dh:1});var Vc;function P(){return Vc||=new zc,Vc}function Hc(){this.fl=null,this.gU=null,Wc=this,this.fl=new y_(!1),this.gU=new y_(!0)}T=Hc.prototype=new E,T.constructor=Hc;function Uc(){}Uc.prototype=T,new D().i(Hc,`java.lang.System$Streams$`,{dl:1});var Wc;function Gc(){return Wc||=new Hc,Wc}function Kc(){this.fp=null,Jc=this,this.fp=Object.prototype.hasOwnProperty}T=Kc.prototype=new E,T.constructor=Kc;function qc(){}qc.prototype=T,new D().i(Kc,`java.lang.Utils$Cache$`,{dp:1});var Jc;function Yc(){return Jc||=new Kc,Jc}function Xc(e,t){return e===t}function Zc(e){return 0}function Qc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aB)}var $c=new D().i(0,`java.lang.Void`,{aB:1},(e=>e===void 0));function el(e,t){throw Zm(new $m,`argument type mismatch`)}function tl(){}T=tl.prototype=new E,T.constructor=tl;function nl(){}nl.prototype=T,T.b9=(function(e){return e instanceof fa||e instanceof ma||e instanceof ha||e instanceof ga||e instanceof _a||e instanceof va||e instanceof ya||e instanceof ba||e instanceof xa?e.a.length:el(this,e)}),new D().i(tl,`java.lang.reflect.Array$`,{dr:1});var rl;function il(){return rl||=new tl,rl}function al(){}T=al.prototype=new E,T.constructor=al;function ol(){}ol.prototype=T,T.ga=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.i,s=a.k,c=r,l=t.a[c],u=l.i,d=l.k;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),T.g9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),T.gb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),T.g6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),T.g5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),T.gc=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),T.g7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),T.g8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new D().i(al,`java.util.Arrays$`,{ds:1});var sl;function F(){return sl||=new al,sl}function I(e,t){this.i=0,this.k=0,this.i=e,this.k=t}T=I.prototype=new E,T.constructor=I;function cl(){}cl.prototype=T,T.l=(function(e){return e instanceof I&&this.i===e.i&&this.k===e.k}),T.r=(function(){return this.i^this.k}),T.t=(function(){return gl().gx(this.i,this.k)}),T.k2=(function(){return this.i}),T.k1=(function(){return gl().gw(this.i,this.k)}),T.k0=(function(){return gl().bS(this.i,this.k)}),T.jH=(function(){return this.i<<24>>24}),T.jY=(function(){return this.i<<16>>16}),T.jS=(function(){return this.i}),T.jT=(function(){return this}),T.jN=(function(){return gl().gw(this.i,this.k)}),T.jL=(function(){return gl().bS(this.i,this.k)}),T.jJ=(function(e){return gl().gu(this.i,this.k,e.i,e.k)}),T.jI=(function(e){return gl().gu(this.i,this.k,e.i,e.k)}),T.jM=(function(e){return this.i===e.i&&this.k===e.k}),T.jW=(function(e){return!(this.i===e.i&&this.k===e.k)}),T.jz=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<(-2147483648^e.i):t<n}),T.jA=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<=(-2147483648^e.i):t<n}),T.jv=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>(-2147483648^e.i):t>n}),T.jw=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>=(-2147483648^e.i):t>n}),T.k4=(function(){return new I(~this.i,~this.k)}),T.jt=(function(e){return new I(this.i|e.i,this.k|e.k)}),T.js=(function(e){return new I(this.i&e.i,this.k&e.k)}),T.jG=(function(e){return new I(this.i^e.i,this.k^e.k)}),T.jB=(function(e){var t=this.i;return new I(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.k<<e)}),T.jy=(function(e){var t=this.k;return new I(32&e?t>>>e|0:this.i>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),T.jx=(function(e){var t=this.k;return new I(32&e?t>>e:this.i>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),T.k3=(function(){var e=this.i,t=this.k;return new I(-e|0,e===0?-t|0:~t)}),T.jE=(function(e){var t=this.i,n=this.k,r=e.k,i=t+e.i|0;return new I(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),T.jC=(function(e){var t=this.i,n=this.k,r=e.k,i=t-e.i|0;return new I(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),T.jF=(function(e){var t=this.i,n=e.i,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new I(u,(((Math.imul(t,e.k)+Math.imul(this.k,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),T.ju=(function(e){var t=gl();return new I(t.hz(this.i,this.k,e.i,e.k),t.w)}),T.jD=(function(e){var t=gl();return new I(t.iV(this.i,this.k,e.i,e.k),t.w)}),new D().i(I,`org.scalajs.linker.runtime.RuntimeLong`,{aC:1});function ll(e,t,n){return-2097152&n?fl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function ul(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.w=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.w=0,n>>>o|0}else return fl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.w=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.w=s/4294967296|0,s|0}}function dl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.w=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.w=n&(-1+i|0),t):fl(e,t,n,r,i,1)|0;if(-2097152&i)return e.w=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.w=a/4294967296|0,a|0}function fl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,ee=p,te=u,_=d;if(ee===_?(-2147483648^g)>=(-2147483648^te):(-2147483648^ee)>=(-2147483648^_)){var ne=f,re=p,ie=u,ae=d,oe=ne-ie|0,v=(-2147483648^oe)>(-2147483648^ne)?-1+(re-ae|0)|0:re-ae|0;f=oe,p=v,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var se=u,ce=d,le=se>>>1|0|ce<<31,ue=ce>>>1|0;u=le,d=ue}var de=f,fe=p;if(fe===i?(-2147483648^de)>=(-2147483648^r):(-2147483648^fe)>=(-2147483648^i)){var pe=f,me=4294967296*p+ +(pe>>>0),he=4294967296*i+ +(r>>>0);if(a!==1){var ge=me/he,_e=ge|0,ve=ge/4294967296|0,ye=m,be=h,xe=ye+_e|0,Se=(-2147483648^xe)<(-2147483648^ye)?1+(be+ve|0)|0:be+ve|0;m=xe,h=Se}if(a!==0){var Ce=me%he;f=Ce|0,p=Ce/4294967296|0}}if(a===0)return e.w=h,m;if(a===1)return e.w=p,f;var we=m,Te=4294967296*h+ +(we>>>0),Ee=``+f,De=Ee.length;return``+Te+`000000000`.substring(De)+Ee}function pl(){this.w=0}T=pl.prototype=new E,T.constructor=pl;function ml(){}ml.prototype=T,T.gx=(function(e,t){return t===e>>31?``+e:t<0?`-`+ll(this,-e|0,e===0?-t|0:~t):ll(this,e,t)}),T.bS=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),T.gw=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),T.jP=(function(e){return new I(e,e>>31)}),T.jO=(function(e){return new I(this.gv(e),this.w)}),T.gv=(function(e){if(e<-0x8000000000000000)return this.w=-2147483648,0;if(e>=0x8000000000000000)return this.w=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.w=e<0&&t!==0?-1+n|0:n,t}),T.gu=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),T.hz=(function(e,t,n,r){if((n|r)===0)throw new Ym(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.w=0,-2147483648;var i=Xi(e,n);return this.w=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=-1,-1;else return this.w=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=ul(this,a,o,s,c);if((t^r)>=0)return l;var u=this.w;return this.w=l===0?-u|0:~u,-l|0}}),T.iV=(function(e,t,n,r){if((n|r)===0)throw new Ym(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Zi(e,n);return this.w=i>>31,i}else return this.w=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=0,0;else return this.w=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=dl(this,a,o,s,c);if(t<0){var u=this.w;return this.w=l===0?-u|0:~u,-l|0}else return l}}),new D().i(pl,`org.scalajs.linker.runtime.RuntimeLong$`,{du:1});var hl;function gl(){return hl||=new pl,hl}var _l=new D().i(1,`scala.Function0`,{a9:1}),L=new D().i(1,`scala.Function1`,{e:1});function vl(){}T=vl.prototype=new E,T.constructor=vl;function yl(){}yl.prototype=T;function bl(){this.fr=null,this.ce=null,Sl=this,this.fr=new J((e=>Cl().fr)),this.ce=new rm}T=bl.prototype=new E,T.constructor=bl;function xl(){}xl.prototype=T,new D().i(bl,`scala.PartialFunction$`,{dI:1});var Sl;function Cl(){return Sl||=new bl,Sl}function wl(){this.fu=null,El=this,this.fu=new J((e=>Dl().fu))}T=wl.prototype=new E,T.constructor=wl;function Tl(){}Tl.prototype=T,T.i0=(function(e,t){var n=il().b9(e),r=0;if(e instanceof fa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ha)for(;r<n;)t.j(ca(e.a[r])),r=1+r|0;else if(e instanceof ga)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof _a)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ma)for(;r<n;)t.j(e.a[r]),r=1+r|0;else throw new mh(e)}),new D().i(wl,`scala.collection.ArrayOps$`,{dO:1});var El;function Dl(){return El||=new wl,El}function Ol(e,t){for(var n=e.s();n.x();)t.j(n.n())}function kl(e,t,n,r){return e.D()===0?``+t+r:e.bD(ry(new iy),t,n,r).O.v}function Al(e,t,n,r,i){var a=t.O;n.length!==0&&(a.v=``+a.v+n);var o=e.s();if(o.x()){var s=o.n();for(a.v=``+a.v+s;o.x();){a.v=``+a.v+r;var c=o.n();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function jl(e,t){this.fy=null,this.bw=null,this.fy=e,this.bw=t}T=jl.prototype=new E,T.constructor=jl;function Ml(){}Ml.prototype=T,T.ie=(function(){return this.fy.aa().s()}),new D().i(jl,`scala.collection.Iterator$ConcatIteratorCell`,{e6:1});function Nl(){this.fz=null,Fl=this,this.fz=new J((e=>Il().fz))}T=Nl.prototype=new E,T.constructor=Nl;function Pl(){}Pl.prototype=T,T.hq=(function(e,t){return bg(e,t)>=0}),new D().i(Nl,`scala.collection.StringOps$`,{ee:1});var Fl;function Il(){return Fl||=new Nl,Fl}function Ll(){}T=Ll.prototype=new E,T.constructor=Ll;function Rl(){}Rl.prototype=T,T.H=(function(e,t){return e===t||(cd(e)?this.hG(e,t):e instanceof Wi?this.hE(e,t):e===null?t===null:qi(e,t))}),T.hG=(function(e,t){if(cd(t))return this.hF(e,t);if(t instanceof Wi){if(typeof e==`number`)return+e===t.c;if(e instanceof I){var n=ua(e),r=n.i,i=n.k,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:qi(e,t)}else return e===null?t===null:qi(e,t)}),T.hF=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof I){var r=ua(t);return n===gl().bS(r.i,r.k)}else return!1}else if(e instanceof I){var i=ua(e),a=i.i,o=i.k;if(t instanceof I){var s=ua(t),c=s.i,l=s.k;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return gl().bS(a,o)===u}else return!1}else return e===null?t===null:qi(e,t)}),T.hE=(function(e,t){if(t instanceof Wi)return e.c===t.c;if(cd(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof I){var n=ua(t),r=n.i,i=n.k,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:qi(t,e)}else return e===null&&t===null}),new D().i(Ll,`scala.runtime.BoxesRunTime$`,{eI:1});var zl;function Bl(){return zl||=new Ll,zl}var Vl=new D().i(0,`scala.runtime.Null$`,{eL:1});function Hl(){}T=Hl.prototype=new E,T.constructor=Hl;function Ul(){}Ul.prototype=T,T.b7=(function(e,t){if(e instanceof fa||e instanceof va||e instanceof xa||e instanceof ya||e instanceof ba)return e.a[t];if(e instanceof ha)return ca(e.a[t]);if(e instanceof ga||e instanceof _a||e instanceof ma)return e.a[t];throw e===null?new ih:new mh(e)}),T.hg=(function(e,t,n){if(e instanceof fa)e.a[t]=n;else if(e instanceof va)e.a[t]=n|0;else if(e instanceof xa)e.a[t]=+n;else if(e instanceof ya)e.a[t]=ua(n);else if(e instanceof ba)e.a[t]=Math.fround(n);else if(e instanceof ha)e.a[t]=la(n);else if(e instanceof ga)e.a[t]=n|0;else if(e instanceof _a)e.a[t]=n|0;else if(e instanceof ma)e.a[t]=!!n;else if(e===null)throw new ih;else throw new mh(e)}),T.dg=(function(e){return kl(e.a8(),e.X()+`(`,`,`,`)`)}),T.b=(function(e){return e===null?null:e.a.length===0?Lg(Vg()):new bv(e)}),T.jo=(function(e){return e===null?null:new gv(e)}),new D().i(Hl,`scala.runtime.ScalaRunTime$`,{eM:1});var Wl;function R(){return Wl||=new Hl,Wl}function Gl(){}T=Gl.prototype=new E,T.constructor=Gl;function Kl(){}Kl.prototype=T,T.e=(function(e,t){var n=this.cs(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),T.cs=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),T.q=(function(e,t){return this.hi(e^t)}),T.hi=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),T.bb=(function(e){var t=e.i,n=e.k;return n===t>>31?t:t^n}),T.a3=(function(e){var t=Qi(e);if(t===e)return t;var n=gl(),r=n.gv(e),i=n.w;return gl().bS(r,i)===e?r^i:pc().dt(e)}),T.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a3(+e);if(e instanceof I){var t=ua(e);return this.bb(new I(t.i,t.k))}else return Ji(e)}),T.aM=(function(e){throw eh(new th,``+e)}),new D().i(Gl,`scala.runtime.Statics$`,{eO:1});var ql;function z(){return ql||=new Gl,ql}function Jl(){}T=Jl.prototype=new E,T.constructor=Jl;function Yl(){}Yl.prototype=T,T.hd=(function(e){return e}),new D().i(Jl,`scala.scalajs.js.defined$`,{eU:1});var Xl;function Zl(){return Xl||=new Jl,Xl}function Ql(){}T=Ql.prototype=new E,T.constructor=Ql;function $l(){}$l.prototype=T,T.ja=(function(e,t){return setTimeout((()=>{t.aa()}),e)}),new D().i(Ql,`scala.scalajs.js.timers.package$`,{eV:1});var eu;function tu(){return eu||=new Ql,eu}function nu(){}T=nu.prototype=new E,T.constructor=nu;function ru(){}ru.prototype=T,T.ji=(function(e){var t=[];return e.as(new J((e=>t.push(e)|0))),t}),new D().i(nu,`scala.scalajs.runtime.Compat$`,{f4:1});var iu;function au(){return iu||=new nu,iu}function ou(){}T=ou.prototype=new E,T.constructor=ou;function su(){}su.prototype=T,T.jb=(function(e){var t=`Illegal command line`+(e.gh()===0?``:e.gh()===1?` after first argument`:` after `+e.gh()+` arguments`)+`: `+e.jU();kd().iO().ip(t+`
`)}),new D().i(ou,`scala.util.CommandLineParser$`,{f6:1});function cu(e){this.df=null,this.df=e}T=cu.prototype=new E,T.constructor=cu;function lu(){}lu.prototype=T,T.t=(function(){return`DynamicVariable(`+this.df+`)`}),new D().i(cu,`scala.util.DynamicVariable`,{f8:1});function uu(){}T=uu.prototype=new E,T.constructor=uu;function du(){}du.prototype=T,T.he=(function(e){return!0}),new D().i(uu,`scala.util.control.NonFatal$`,{fa:1});var fu;function pu(){return fu||=new uu,fu}function mu(){}T=mu.prototype=new E,T.constructor=mu;function hu(){}hu.prototype=T,T.e=(function(e,t){var n=this.cs(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),T.cs=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),T.q=(function(e,t){return this.J(e^t)}),T.J=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),T.be=(function(e,t,n){var r=e.V();if(r===0)return vg(e.X());var i=t;n||(i=this.e(i,vg(e.X())));for(var a=0;a<r;)i=this.e(i,z().B(e.W(a))),a=1+a|0;return this.q(i,r)}),T.jl=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.s();o.x();){var s=o.n(),c=z().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.cs(l,a),this.q(l,i)}),T.iN=(function(e,t){var n=e.s(),r=t;if(!n.x())return this.q(r,0);var i=n.n();if(!n.x())return this.q(this.e(r,z().B(i)),1);var a=n.n(),o=z().B(i);r=this.e(r,o);for(var s=r,c=z().B(a),l=c-o|0,u=2;n.x();){r=this.e(r,c);var d=z().B(n.n());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.x();)r=this.e(r,z().B(n.n())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.J(this.e(this.e(s,l),c))}),T.fQ=(function(e,t){var n=t,r=il().b9(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,z().B(R().b7(e,0))),1);default:var i=z().B(R().b7(e,0));n=this.e(n,i);for(var a=n,o=z().B(R().b7(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().B(R().b7(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().B(R().b7(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.iT=(function(e,t,n,r){return this.J(this.e(this.e(this.e(r,e),t),n))}),T.ii=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,z().B(e.u(0))),1);default:var i=z().B(e.u(0));n=this.e(n,i);for(var a=n,o=z().B(e.u(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().B(e.u(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().B(e.u(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.ir=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.o();){var l=c.a4(),u=c.P(),d=z().B(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.iT(s,a,o,t):this.q(r,n)}),T.fZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fR=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fS=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fT=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,z().a3(e.a[0])),1);default:var i=z().a3(e.a[0]);n=this.e(n,i);for(var a=n,o=z().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().a3(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,z().a3(e.a[0])),1);default:var i=z().a3(e.a[0]);n=this.e(n,i);for(var a=n,o=z().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().a3(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fV=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fW=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.e(i,z().bb(new I(a.i,a.k))),1);default:var o=e.a[0],s=z().bb(new I(o.i,o.k));n=this.e(n,s);for(var c=n,l=e.a[1],u=z().bb(new I(l.i,l.k)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.a[f],m=z().bb(new I(p.i,p.k));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.e(h,z().bb(new I(g.i,g.k))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.J(this.e(this.e(c,d),u))}}),T.fX=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.J(this.e(this.e(a,s),o))}}),T.fY=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.J(this.e(this.e(i,o),a))}});function gu(e){this.aT=null,this.dL=null,this.cA=!1,this.dL=e,bo(this),this.cA=!1}T=gu.prototype=new E,T.constructor=gu;function _u(){}_u.prototype=T,T.iP=(function(e){this.cA?(wo(e),this.dL.aa()):Co(this,e)}),T.iq=(function(){xo(this),this.cA=!0}),new D().i(gu,`com.raquo.airstream.ownership.OneTimeOwner`,{bC:1,bD:1});function vu(){}T=vu.prototype=new E,T.constructor=vu;function yu(){}yu.prototype=T,T.hx=(function(e){return e!==null}),T.hD=(function(e){return e?``:null}),T.cl=(function(e){return this.hx(e)}),T.bN=(function(e){return this.hD(!!e)}),new D().i(vu,`com.raquo.laminar.codecs.package$$anon$1`,{c0:1,a5:1});function bu(e){if(e===null)throw new ih}T=bu.prototype=new E,T.constructor=bu;function xu(){}xu.prototype=T,T.bN=(function(e){return e}),T.cl=(function(e){return e}),new D().i(bu,`com.raquo.laminar.codecs.package$$anon$2`,{c1:1,a5:1});function Su(e,t,n,r){}T=Su.prototype=new ws,T.constructor=Su;function Cu(){}Cu.prototype=T,new D().i(Su,`com.raquo.laminar.keys.CompositeKey`,{ci:1,T:1});function wu(e){this.c7=null,this.c7=e}T=wu.prototype=new ws,T.constructor=wu;function Tu(){}Tu.prototype=T;var Eu=new D().i(wu,`com.raquo.laminar.keys.EventProp`,{cl:1,T:1});function B(e,t,n){return e.ae=t,e.aU=n,e}function Du(){this.ae=null,this.aU=null}T=Du.prototype=new ws,T.constructor=Du;function Ou(){}Ou.prototype=T,T.c=(function(e){return new df(this,e,new vm(((e,t,n)=>{k().dx(e,t,n)})))}),T.h0=(function(e){return new pf(this,e.gD(),new vm(((e,t,n)=>{k().dx(e,this,t)})))}),new D().i(Du,`com.raquo.laminar.keys.HtmlAttr`,{Y:1,T:1});function ku(e,t){this.af=null,this.ei=null,this.af=e,this.ei=t}T=ku.prototype=new ws,T.constructor=ku;function Au(){}Au.prototype=T,T.c=(function(e){return new df(this,e,new vm(((e,t,n)=>{k().j5(e,t,n)})))}),new D().i(ku,`com.raquo.laminar.keys.HtmlProp`,{ak:1,T:1});function ju(e,t,n){this.cN=null,this.cM=null,this.c8=null,this.c9=null,this.cN=e,this.cM=t;var r=n.o()?Q():new Eg(n.A()+`:`+e);this.c8=r.o()?e:r.A(),this.c9=n.o()?Q():new Eg(Os().ix(n.A()))}T=ju.prototype=new ws,T.constructor=ju;function Mu(){}Mu.prototype=T,new D().i(ju,`com.raquo.laminar.keys.SvgAttr`,{cm:1,T:1});function Nu(){}T=Nu.prototype=new E,T.constructor=Nu;function Pu(){}Pu.prototype=T,T.a1=(function(e){}),new D().i(Nu,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ct:1,Q:1});function Fu(e,t){if(this.er=null,this.er=e,t===null)throw new ih}T=Fu.prototype=new E,T.constructor=Fu;function Iu(){}Iu.prototype=T,T.a1=(function(e){var t=Qa(),n=(()=>{this.er.j(e)});if(Qa(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,Ja(t)}}}),new D().i(Fu,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cu:1,Q:1});function Lu(){}T=Lu.prototype=new E,T.constructor=Lu;function Ru(){}Ru.prototype=T,new D().i(Lu,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cx:1,cv:1});function zu(){}T=zu.prototype=new E,T.constructor=zu;function Bu(){}Bu.prototype=T,new D().i(zu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cz:1,cy:1});var Vu;function Hu(){return Vu||=new zu,Vu}function Uu(e,t){if(this.es=null,this.es=e,t===null)throw new ih}T=Uu.prototype=new E,T.constructor=Uu;function Wu(){}Wu.prototype=T,T.hh=(function(e){return this.es.j(e)}),new D().i(Uu,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cC:1,cA:1});function Gu(e){e.g3(new uo(new pm((()=>{throw Kf(new K,`Attempting to use owner of unmounted element: `+kl(k().hw(e.aN(),(k(),ty())),``,` > `,``))}))))}function Ku(e,t,n){return e.cV=t,e}function qu(){this.cV=null}T=qu.prototype=new E,T.constructor=qu;function Ju(){}Ju.prototype=T,T.ds=(function(){return this.cV}),T.dk=(function(e){var t=this.hl();return e.as(new Z((e=>{e.a1(t)}))),t}),T.hl=(function(){return new cg(this,k().hs(this))}),new D().i(qu,`com.raquo.laminar.tags.HtmlTag`,{ap:1,a7:1});function Yu(e,t){this.eA=null,this.eA=e}T=Yu.prototype=new E,T.constructor=Yu;function Xu(){}Xu.prototype=T,new D().i(Yu,`com.raquo.laminar.tags.SvgTag`,{cM:1,a7:1});function Zu(){}T=Zu.prototype=new E,T.constructor=Zu;function Qu(){}Qu.prototype=T,T.bN=(function(e){return e}),T.cl=(function(e){return e}),new D().i(Zu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cW:1,a5:1});function $u(e,t){return e.aX=t,e.cj(),e}function ed(){this.aX=null,this.aW=null,this.aY=!1,this.aZ=null,this.b0=!1}T=ed.prototype=new E,T.constructor=ed;function td(){}td.prototype=T,T.jf=(function(){return this.aY||=(this.aW=new gf(this.aX,tc().h1(),(tc(),void 0)),!0),this.aW}),T.f=(function(e,t){var n=this.jf().dk(R().b(new(j.r()).C([])));return e.as(new Z((e=>{e.j(this).a1(n)}))),t.as(new Z((e=>{e.a1(n)}))),n}),T.bi=(function(){return this.b0||=(this.aZ=new Vf,!0),this.aZ});function nd(){}T=nd.prototype=new E,T.constructor=nd;function rd(){}rd.prototype=T,T.jj=(function(e){if(!(e>=0&&e<=1114111))throw Qm(new $m);return String.fromCodePoint(e)}),new D().i(nd,`java.lang.Character$`,{d4:1,a:1});var id;function ad(){return id||=new nd,id}function od(){}T=od.prototype=new E,T.constructor=od;function sd(){}sd.prototype=T;function cd(e){return e instanceof od||typeof e==`number`||e instanceof I}function ld(e,t,n,r,i){this.b2=null,this.bs=null,this.b3=null,this.b4=0,this.b1=0,this.b2=e,this.bs=t,this.b3=n,this.b4=r,this.b1=i}T=ld.prototype=new E,T.constructor=ld;function ud(){}ud.prototype=T,T.l=(function(e){return e instanceof ld&&this.b3===e.b3&&this.b4===e.b4&&this.b1===e.b1&&this.b2===e.b2&&this.bs===e.bs}),T.t=(function(){var e=``;return this.b2!==`<jscode>`&&(e=``+e+this.b2+`.`),e=``+e+this.bs,this.b3===null?e+=`(Unknown Source)`:(e=e+`(`+this.b3,this.b4>=0&&(e=e+`:`+this.b4,this.b1>=0&&(e=e+`:`+this.b1)),e+=`)`),e}),T.r=(function(){return vg(this.b2)^vg(this.bs)^vg(this.b3)^this.b4^this.b1});var dd=new D().i(ld,`java.lang.StackTraceElement`,{az:1,a:1});function fd(){}T=fd.prototype=new E,T.constructor=fd;function pd(){}pd.prototype=T,T.iy=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Sg;for(var i=``,a=t;a!==r;)i+=``+$i(e.a[a]),a=1+a|0;return i}),new D().i(fd,`java.lang.String$`,{di:1,a:1});var md;function hd(){return md||=new fd,md}function gd(e,t,n,r,i){return e.fn=t,e.fo=i,i&&e.hX(),e}var _d=class extends Error{constructor(){super(),this.fn=null,this.fo=!1,this.fm=null,this.cc=null}ij(e){return this}bP(){return this.fn}hX(){var e=this instanceof $?this.U:this;return this.fm=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}i9(){return this.cc===null&&(this.fo?this.cc=Rc().hW(this.fm):this.cc=new(dd.r()).C(0)),this.cc}t(){var e=Ki(this),t=this.bP();return t===null?e:e+`: `+t}r(){return da.prototype.r.call(this)}l(e){return da.prototype.l.call(this,e)}get message(){var e=this.bP();return e===null?``:e}get name(){return Ki(this)}toString(){return this.t()}};function vd(){this.aB=null,bd=this,this.aB=new ch}T=vd.prototype=new E,T.constructor=vd;function yd(){}yd.prototype=T,new D().i(vd,`scala.$less$colon$less$`,{dx:1,a:1});var bd;function xd(){return bd||=new vd,bd}function Sd(){}T=Sd.prototype=new E,T.constructor=Sd;function Cd(){}Cd.prototype=T,T.ge=(function(e,t){var n=e.D();if(n>-1){for(var r=t.iz(n),i=e.s(),a=0;a<n;)R().hg(r,a,i.n()),a=1+a|0;return r}else{var o=null,s=t.j1(),c=s===wa.l();o=[];for(var l=e.s();l.x();){var u=l.n(),d=c?la(u):u===null?s.av.z:u;o.push(d)}return(s===Ca.l()?$c.l():s===Vl.l()||s===_p.l()?Sa.l():s).av.r().w(o)}}),T.gd=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Bl().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new D().i(Sd,`scala.Array$`,{dz:1,a:1});var wd;function Td(){return wd||=new Sd,wd}function Ed(){this.fq=null,Od=this,this.fq=new cu(Gc().fl)}T=Ed.prototype=new E,T.constructor=Ed;function Dd(){}Dd.prototype=T,T.iO=(function(){return this.fq.df}),new D().i(Ed,`scala.Console$`,{dA:1,eu:1});var Od;function kd(){return Od||=new Ed,Od}function Ad(){}T=Ad.prototype=new E,T.constructor=Ad;function jd(){}jd.prototype=T,T.t=(function(){return`<function1>`});function Md(){}T=Md.prototype=new yl,T.constructor=Md;function Nd(){}Nd.prototype=T,T.jp=(function(e){return e===null?null:e.a.length===0?Gg().fA:new Wv(e)});function Pd(e,t){if(t===e)e.fL(Uh().gf(t));else for(var n=t.s();n.x();)e.di(n.n());return e}function Fd(){}T=Fd.prototype=new E,T.constructor=Fd;function Id(){}Id.prototype=T,T.t=(function(){return`<function0>`});function Ld(){}T=Ld.prototype=new E,T.constructor=Ld;function Rd(){}Rd.prototype=T,T.t=(function(){return`<function1>`});function zd(){}T=zd.prototype=new E,T.constructor=zd;function Bd(){}Bd.prototype=T,T.t=(function(){return`<function2>`});function Vd(){}T=Vd.prototype=new E,T.constructor=Vd;function Hd(){}Hd.prototype=T,T.t=(function(){return`<function3>`});function Ud(e){this.ci=!1,this.ci=e}T=Ud.prototype=new E,T.constructor=Ud;function Wd(){}Wd.prototype=T,T.t=(function(){return``+this.ci}),new D().i(Ud,`scala.runtime.BooleanRef`,{eH:1,a:1});function Gd(e){this.bz=0,this.bz=e}T=Gd.prototype=new E,T.constructor=Gd;function Kd(){}Kd.prototype=T,T.t=(function(){return``+this.bz}),new D().i(Gd,`scala.runtime.IntRef`,{eJ:1,a:1});function qd(){this.y=0,this.fJ=0,this.gZ=0,this.gY=0,Yd=this,this.y=vg(`Seq`),this.fJ=vg(`Map`),this.gZ=vg(`Set`),this.gY=this.jl(ty(),this.fJ)}T=qd.prototype=new hu,T.constructor=qd;function Jd(){}Jd.prototype=T,T.j2=(function(e){return R_(e)?this.ii(e,this.y):e instanceof Ov?this.ir(e,this.y):this.iN(e,this.y)}),new D().i(qd,`scala.util.hashing.MurmurHash3$`,{fc:1,fb:1});var Yd;function V(){return Yd||=new qd,Yd}var Xd=class extends _d{};function Zd(){this.cv=null,this.dA=null,this.dB=null,$d=this,this.cv=Uh().fN(R().b(new(L.r()).C([]))),this.dA=new Z((e=>{try{console.error(this.cp(e)+`
`+this.i8(e,`
`))}catch(e){var t=e instanceof _d?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dB=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.U:t})),this.iU(this.dA)}T=Zd.prototype=new E,T.constructor=Zd;function Qd(){}Qd.prototype=T,T.cp=(function(e){try{var t=e.bP()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Gi(e).dq()+`: `+t}),T.i8=(function(e,t){try{return kl(Qf().jp(e.i9()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),T.iU=(function(e){this.cv.di(e)}),T.Y=(function(e){for(var t=this.cv.s();t.x();){var n=t.n();try{n.j(e)}catch(e){var r=e instanceof _d?e:new $(e),i=this.dB;if(n===null?i===null:n.l(i))throw r instanceof $?r.U:r;console.warn(`Error processing an unhandled error callback:`),tu().ja(0,new pm((e=>(()=>{throw e instanceof $?e.U:e}))(r)))}}}),new D().i(Zd,`com.raquo.airstream.core.AirstreamError$`,{bj:1,es:1,et:1});var $d;function H(){return $d||=new Zd,$d}function ef(e){e.c1=!0,e.c3=void 0}function tf(e,t,n){return Cm(e,Ma().gH(t,Cl().ce,!0),n)}function nf(e,t){e.c1?Tm(e,t):af(e).push(new pm((()=>{Tm(e,t)})))}function rf(e){return km(e)>0}function af(e){var t=e.c3;if(t===void 0){var n=O().C(R().b(new(_l.r()).C([])));return e.c3=n,n}else return t}var of=new D().i(1,`com.raquo.airstream.core.Observer`,{a4:1,X:1,V:1});function U(e,t,n){return new zp(n.hh(t))}function sf(e,t,n,r){return new Fu(new Z((e=>{(Yo(),new Wo(t,null,null)).as(new Z((e=>(t=>{n.j(t).a1(e)}))(e)))})),Ps())}function cf(e,t){this.aV=null,this.cO=null,this.cP=null,this.aV=e,this.cO=(n=>{var r=e.cJ.j(n);r.o()||t.j(r.A())}),this.cP=(()=>{var e=null;e=this;var t={};if(e===null)throw new ih;return t.capture=e.aV.cL,t.passive=e.aV.cK,t})()}T=cf.prototype=new E,T.constructor=cf;function lf(){}lf.prototype=T,T.a1=(function(e){this.hj(e,!1)}),T.hj=(function(e,t){if(Vm(e,this)===-1){var n=new Z((t=>(k().h2(e.L,this),new To(t.ej,new pm((()=>{var t=Vm(e,this);t!==-1&&(Bm(e,t),k().iW(e.L,this))})))))),r=t?Ys().jm(e,n):yo().cu(e.a6,new Z((t=>n.j(new ks(e,t)))),!1);return zm(e,this,t),r}else{var i=new Z((e=>void 0));return yo().gC(e.a6,new Z((t=>{i.j(new ks(e,t))})),!1)}}),T.t=(function(){return`EventListener(`+this.aV.bp.c7+`)`});var uf=new D().i(cf,`com.raquo.laminar.modifiers.EventListener`,{cp:1,Q:1,al:1});function df(e,t,n){this.em=null,this.en=null,this.el=null,this.em=e,this.en=t,this.el=n}T=df.prototype=new E,T.constructor=df;function ff(){}ff.prototype=T,T.a1=(function(e){this.el.fM(e,this.em,this.en)}),new D().i(df,`com.raquo.laminar.modifiers.KeySetter`,{cq:1,Q:1,cD:1});function pf(e,t,n){this.eo=null,this.eq=null,this.ep=null,this.eo=e,this.eq=t,this.ep=n}T=pf.prototype=new E,T.constructor=pf;function mf(){}mf.prototype=T,T.a1=(function(e){this.hk(e)}),T.hk=(function(e){e.iK(this.eo);var t=this.eq,n=new Z((t=>{this.ep.fM(e,t,this)}));return yo().jc(e.a6,t,n)}),new D().i(pf,`com.raquo.laminar.modifiers.KeyUpdater`,{cr:1,Q:1,al:1});function W(e,t){if(this.cT=null,this.eu=null,this.ev=null,this.eu=t,Gu(this),e===null)throw Kf(new K,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!k().io(e,document))throw Kf(new K,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.ev=e,this.iw()}T=W.prototype=new E,T.constructor=W;function hf(){}hf.prototype=T,T.co=(function(){return this.cT}),T.g3=(function(e){this.cT=e}),T.iw=(function(){return this.cT.fK(),Gs().ck(this,this.eu,void 0)}),T.aN=(function(){return this.ev}),new D().i(W,`com.raquo.laminar.nodes.RootNode`,{cI:1,a6:1,an:1});function gf(e,t,n){this.cV=null,this.ez=null,this.ey=null,this.ez=e,this.ey=n,Ku(this,e,!1)}T=gf.prototype=new Ju,T.constructor=gf;function _f(){}_f.prototype=T,T.ds=(function(){return this.ez}),T.h5=(function(){var e=this.ey;return e===void 0?void 0:e.map((e=>e.jq.af))}),new D().i(gf,`com.raquo.laminar.tags.CustomHtmlTag`,{ao:1,ap:1,a7:1});function vf(){this.ae=null,this.aU=null,this.eB=null,this.eC=!1,B(this,`appearance`,new Zu)}T=vf.prototype=new Ou,T.constructor=vf;function yf(){}yf.prototype=T,T.hY=(function(){return this.eC||=(this.eB=xf().c(`filled`),!0),this.eB}),new D().i(vf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance$`,{cO:1,Y:1,T:1});var bf;function xf(){return bf||=new vf,bf}function Sf(){this.ae=null,this.aU=null,this.eD=null,this.eE=!1,this.eF=null,this.eG=!1,this.eH=null,this.eI=!1,B(this,`size`,new Zu)}T=Sf.prototype=new Ou,T.constructor=Sf;function Cf(){}Cf.prototype=T,T.gm=(function(){return this.eE||=(this.eD=Tf().c(`large`),!0),this.eD}),T.go=(function(){return this.eG||=(this.eF=Tf().c(`medium`),!0),this.eF}),T.gA=(function(){return this.eI||=(this.eH=Tf().c(`small`),!0),this.eH}),new D().i(Sf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cP:1,Y:1,T:1});var wf;function Tf(){return wf||=new Sf,wf}function Ef(){this.ae=null,this.aU=null,this.eJ=null,this.eK=!1,B(this,`placement`,new Zu)}T=Ef.prototype=new Ou,T.constructor=Ef;function Df(){}Df.prototype=T,T.jk=(function(){return this.eK||=(this.eJ=kf().c(`top`),!0),this.eJ}),new D().i(Ef,`io.github.nguyenyou.webawesome.laminar.CommonKeys$SelectPlacement$`,{cQ:1,Y:1,T:1});var Of;function kf(){return Of||=new Ef,Of}function Af(){this.aX=null,this.aW=null,this.aY=!1,this.aZ=null,this.b0=!1,$u(this,`wa-divider`)}T=Af.prototype=new td,T.constructor=Af;function jf(){}jf.prototype=T,T.cj=(function(){return pt}),new D().i(Af,`io.github.nguyenyou.webawesome.laminar.Divider$`,{cR:1,a0:1,Z:1});var Mf;function Nf(){return Mf||=new Af,Mf}function Pf(){this.aX=null,this.aW=null,this.aY=!1,this.aZ=null,this.b0=!1,this.eL=null,this.eM=!1,this.eN=null,this.eO=!1,$u(this,`wa-icon`)}T=Pf.prototype=new td,T.constructor=Pf;function Ff(){}Ff.prototype=T,T.bc=(function(){return this.eM||=(this.eL=(Y(),B(new Du,`name`,A().Z)),!0),this.eL}),T.dz=(function(){return this.eO||=(this.eN=(Y(),B(new Du,`variant`,A().Z)),!0),this.eN}),T.cj=(function(){return zt}),new D().i(Pf,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cS:1,a0:1,Z:1});var If;function Lf(){return If||=new Pf,If}function Rf(){this.aX=null,this.aW=null,this.aY=!1,this.aZ=null,this.b0=!1,this.fh=null,this.fi=!1,$u(this,`wa-option`)}T=Rf.prototype=new td,T.constructor=Rf;function zf(){}zf.prototype=T,T.h=(function(){return this.fi||=(this.fh=(Y(),B(new Du,`value`,A().Z)),!0),this.fh}),T.cj=(function(){return tn}),new D().i(Rf,`io.github.nguyenyou.webawesome.laminar.UOption$`,{cV:1,a0:1,Z:1});var Bf;function G(){return Bf||=new Rf,Bf}function Vf(){}T=Vf.prototype=new jd,T.constructor=Vf;function Hf(){}Hf.prototype=T,T.j=(function(e){return Y().d}),new D().i(Vf,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{cX:1,dB:1,e:1});function Uf(e){if(e.av.Z)return e.av.Q().dq()+`[]`;for(var t=e.av.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Wf(e){this.cW=null,this.av=e}T=Wf.prototype=new E,T.constructor=Wf;function Gf(){}Gf.prototype=T,T.t=(function(){return(this.av.Y?`interface `:this.av.X?``:`class `)+this.av.N}),T.dq=(function(){return this.cW===null&&(this.cW=Uf(this)),this.cW}),new D().i(Wf,`java.lang.Class`,{d5:1,a:1,L:1});function Kf(e,t){return gd(e,t,null,!0,!0),e}var K=class extends _d{};new D().i(K,`java.lang.Exception`,{K:1,t:1,a:1});function qf(){}T=qf.prototype=new E,T.constructor=qf;function Jf(){}Jf.prototype=T;function Yf(){this.gV=null,Zf=this,this.gV=dp()}T=Yf.prototype=new Nd,T.constructor=Yf;function Xf(){}Xf.prototype=T,new D().i(Yf,`scala.Predef$`,{dK:1,dE:1,dF:1});var Zf;function Qf(){return Zf||=new Yf,Zf}function $f(e,t){return e.cf=t,e}function ep(){this.cf=null}T=ep.prototype=new E,T.constructor=ep;function tp(){}tp.prototype=T,T.dp=(function(e){return this.cf.dn(e,k_())}),T.dl=(function(e){return this.cf.dn(e,k_())});function np(e,t){return new Oh(e).hp(t)}function rp(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?q().z:new Mh(e,r,i)}function ip(e,t){for(var n=t.s();e.x()&&n.x();)if(!Bl().H(e.n(),n.n()))return!1;return e.x()===n.x()}function ap(){this.z=null,sp=this,this.z=new Sh}T=ap.prototype=new E,T.constructor=ap;function op(){}op.prototype=T,new D().i(ap,`scala.collection.Iterator$`,{e3:1,a1:1,a:1});var sp;function q(){return sp||=new ap,sp}function cp(){}T=cp.prototype=new E,T.constructor=cp;function lp(){}lp.prototype=T,new D().i(cp,`scala.collection.immutable.Map$`,{ei:1,e8:1,a:1});var up;function dp(){return up||=new cp,up}function fp(e){this.fB=null,this.fB=e}T=fp.prototype=new Id,T.constructor=fp;function pp(){}pp.prototype=T,T.aa=(function(){return(0,this.fB)()}),new D().i(fp,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eD:1,bc:1,a9:1});function J(e){this.fC=null,this.fC=e}T=J.prototype=new Rd,T.constructor=J;function mp(){}mp.prototype=T,T.j=(function(e){return(0,this.fC)(e)}),new D().i(J,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eE:1,bd:1,e:1});function hp(){}T=hp.prototype=new E,T.constructor=hp;function gp(){}gp.prototype=T,T.t=(function(){return`<function1>`}),T.j=(function(e){return this.fO(e,Cl().ce)});var _p=new D().i(0,`scala.runtime.Nothing$`,{eK:1,t:1,a:1});function vp(){}T=vp.prototype=new E,T.constructor=vp;function yp(){}yp.prototype=T,T.i3=(function(e){return(t=>e.j(t))}),new D().i(vp,`scala.scalajs.js.Any$`,{eP:1,eQ:1,eR:1});var bp;function xp(){return bp||=new vp,bp}function Sp(){}T=Sp.prototype=new Id,T.constructor=Sp;function Cp(){}Cp.prototype=T;function wp(){}T=wp.prototype=new Rd,T.constructor=wp;function Tp(){}Tp.prototype=T;function Ep(){}T=Ep.prototype=new Bd,T.constructor=Ep;function Dp(){}Dp.prototype=T;function Op(){}T=Op.prototype=new Hd,T.constructor=Op;function kp(){}kp.prototype=T;function Ap(e,t,n,r){if(this.dE=null,this.dC=!1,this.cw=null,this.dD=null,this.dE=e,this.dC=t,this.cw=n,r===null)throw new ih;this.dD=void 0}T=Ap.prototype=new E,T.constructor=Ap;function jp(){}jp.prototype=T,T.cr=(function(){return this.dD}),T.cm=(function(){return Da(this)}),T.t=(function(){return Oa(this)}),T.du=(function(e){try{this.dE.j(e)}catch(e){var t=e instanceof _d?e:new $(e);this.dC?this.ct(new eg(t)):H().Y(new eg(t))}}),T.ct=(function(e){try{this.cw.ba(e)?this.cw.j(e):H().Y(e)}catch(n){var t=n instanceof _d?n:new $(n);H().Y(new tg(t,e))}}),T.bR=(function(e){e.bO(new Z((e=>{this.ct(e)})),new Z((e=>{this.du(e)})))}),new D().i(Ap,`com.raquo.airstream.core.Observer$$anon$8`,{bo:1,X:1,V:1,a4:1});function Mp(e,t,n){if(this.cx=null,this.dF=!1,this.dG=null,this.cx=e,this.dF=t,n===null)throw new ih;this.dG=void 0}T=Mp.prototype=new E,T.constructor=Mp;function Np(){}Np.prototype=T,T.cr=(function(){return this.dG}),T.cm=(function(){return Da(this)}),T.t=(function(){return Oa(this)}),T.du=(function(e){this.bR(new Qh(e))}),T.ct=(function(e){this.bR(new Xh(e))}),T.bR=(function(e){try{this.cx.ba(e)?this.cx.j(e):e.bO(new Z((e=>{H().Y(e)})),new Z((e=>void 0)))}catch(n){var t=n instanceof _d?n:new $(n);this.dF&&e.gl()?this.ct(new eg(t)):e.bO(new Z((e=>{H().Y(new tg(t,e))})),new Z((e=>{H().Y(new eg(t))})))}}),new D().i(Mp,`com.raquo.airstream.core.Observer$$anon$9`,{bp:1,X:1,V:1,a4:1});function Pp(e){if(this.dY=null,this.dZ=!1,this.gI=null,e===null)throw new ih;as(this)}T=Pp.prototype=new E,T.constructor=Pp;function Fp(){}Fp.prototype=T,T.je=(function(){return this.dZ||=(this.dY=new Yu(`svg`,!1),!0),this.dY}),new D().i(Pp,`com.raquo.laminar.api.Laminar$svg$`,{bU:1,ca:1,c3:1,c5:1});function Ip(){this.d=null,Rp=this,this.d=new U_}T=Ip.prototype=new E,T.constructor=Ip;function Lp(){}Lp.prototype=T,new D().i(Ip,`com.raquo.laminar.api.package$`,{bX:1,ai:1,aj:1,ah:1});var Rp;function Y(){return Rp||=new Ip,Rp}function zp(e){this.ex=null,this.cU=null,this.ex=Q(),this.cU=k().hu(e)}T=zp.prototype=new E,T.constructor=zp;function Bp(){}Bp.prototype=T,T.gz=(function(e){this.ex=e}),T.gG=(function(e){}),T.a1=(function(e){Gs().ck(e,this,void 0)}),T.jh=(function(){return this.cU.data}),T.aN=(function(){return this.cU}),new D().i(zp,`com.raquo.laminar.nodes.TextNode`,{cK:1,a6:1,Q:1,am:1});function Vp(){this.aX=null,this.aW=null,this.aY=!1,this.aZ=null,this.b0=!1,this.eZ=null,this.f0=!1,this.f9=null,this.fa=!1,this.f7=null,this.f8=!1,this.f3=null,this.f4=!1,this.eX=null,this.eY=!1,this.eR=null,this.eS=!1,this.fb=null,this.fc=!1,this.eP=null,this.eQ=!1,this.f1=null,this.f2=!1,this.eV=null,this.eW=!1,this.f5=null,this.f6=!1,this.eT=null,this.eU=!1,$u(this,`wa-select`)}T=Vp.prototype=new td,T.constructor=Vp;function Hp(){}Hp.prototype=T,T.bQ=(function(){return this.f0||=(this.eZ=(Y(),new wu(`input`)),!0),this.eZ}),T.h=(function(){return this.fa||=(this.f9=(Y(),B(new Du,`value`,A().Z)),!0),this.f9}),T.bg=(function(){return this.f8||=(this.f7=Tf(),!0),this.f7}),T.au=(function(){return this.f4||=(this.f3=(Y(),B(new Du,`placeholder`,A().Z)),!0),this.f3}),T.gp=(function(){return this.eY||=(this.eX=(Y(),B(new Du,`multiple`,A().bo)),!0),this.eX}),T.hy=(function(){return this.eS||=(this.eR=(Y(),B(new Du,`disabled`,A().bo)),!0),this.eR}),T.bj=(function(){return this.fc||=(this.fb=(Y(),B(new Du,`with-clear`,A().bo)),!0),this.fb}),T.h7=(function(){return this.eQ||=(this.eP=xf(),!0),this.eP}),T.iQ=(function(){return this.f2||=(this.f1=(Y(),B(new Du,`pill`,A().bo)),!0),this.f1}),T.dr=(function(){return this.eW||=(this.eV=(Y(),B(new Du,`label`,A().Z)),!0),this.eV}),T.iR=(function(){return this.f6||=(this.f5=kf(),!0),this.f5}),T.ig=(function(){return this.eU||=(this.eT=(Y(),B(new Du,`hint`,A().Z)),!0),this.eT}),T.cj=(function(){return Hi}),new D().i(Vp,`io.github.nguyenyou.webawesome.laminar.Select$`,{cT:1,a0:1,Z:1,cY:1});var Up;function X(){return Up||=new Vp,Up}function Wp(){}T=Wp.prototype=new E,T.constructor=Wp;function Gp(){}Gp.prototype=T;function Kp(e,t){return e===t}function qp(e){return e?1231:1237}var Jp=new D().i(0,`java.lang.Boolean`,{d2:1,a:1,R:1,L:1},(e=>typeof e==`boolean`));function Yp(e){return e}function Xp(e,t){return t instanceof Wi&&e===t.c}var Zp=new D().i(0,`java.lang.Character`,{av:1,a:1,R:1,L:1},(e=>e instanceof Wi)),Qp=class extends K{};function $p(){this.v=null,this.v=``}T=$p.prototype=new E,T.constructor=$p;function em(){}em.prototype=T,T.h8=(function(e){var t=hd().iy(e,0,e.a.length);return this.v=``+this.v+t,this}),T.t=(function(){return this.v}),T.p=(function(){return this.v.length}),T.g1=(function(e){return this.v.charCodeAt(e)}),new D().i($p,`java.lang.StringBuilder`,{dj:1,a8:1,at:1,a:1});function tm(){}T=tm.prototype=new Jf,T.constructor=tm;function nm(){}nm.prototype=T;function rm(){}T=rm.prototype=new E,T.constructor=rm;function im(){}im.prototype=T,T.t=(function(){return`<function1>`}),T.ba=(function(e){return!1}),T.hb=(function(e){throw new mh(e)}),T.j=(function(e){this.hb(e)}),new D().i(rm,`scala.PartialFunction$$anon$1`,{dJ:1,f:1,e:1,a:1});function am(){}T=am.prototype=new E,T.constructor=am;function om(){}om.prototype=T,T.s=(function(){return this}),T.cn=(function(e){return this.bU(e,-1)}),T.bU=(function(e,t){return rp(this,e,t)}),T.t=(function(){return`<iterator>`}),T.bD=(function(e,t,n,r){return Al(this,e,t,n,r)}),T.D=(function(){return-1});function sm(e,t){return e.cg=t,e}function cm(){this.cg=null}T=cm.prototype=new E,T.constructor=cm;function lm(){}lm.prototype=T,T.fN=(function(e){return this.cg.dl(e)}),T.gf=(function(e){return this.cg.dp(e)}),T.dp=(function(e){return this.gf(e)}),T.dl=(function(e){return this.fN(e)});function um(e,t){return t>=0&&e.at(t)>0}function dm(e){return e.at(0)===0}function fm(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:ip(e.s(),t)}function pm(e){this.fF=null,this.fF=e}T=pm.prototype=new Cp,T.constructor=pm;function mm(){}mm.prototype=T,T.aa=(function(){return(0,this.fF)()}),new D().i(pm,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eX:1,eW:1,bc:1,a9:1});function Z(e){this.fG=null,this.fG=e}T=Z.prototype=new Tp,T.constructor=Z;function hm(){}hm.prototype=T,T.j=(function(e){return(0,this.fG)(e)}),new D().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eZ:1,eY:1,bd:1,e:1});function gm(e){this.fH=null,this.fH=e}T=gm.prototype=new Dp,T.constructor=gm;function _m(){}_m.prototype=T,T.dj=(function(e,t){return(0,this.fH)(e,t)}),new D().i(gm,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{f1:1,f0:1,eF:1,dC:1});function vm(e){this.fI=null,this.fI=e}T=vm.prototype=new kp,T.constructor=vm;function ym(){}ym.prototype=T,T.fM=(function(e,t,n){return(0,this.fI)(e,t,n)}),new D().i(vm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{f3:1,f2:1,eG:1,dD:1});function bm(){}T=bm.prototype=new E,T.constructor=bm;function xm(){}xm.prototype=T;function Sm(e){e.bn=O().C(R().b(new(of.r()).C([]))),e.cE=O().C(R().b(new(Ea.r()).C([]))),e.c4=!1}function Cm(e,t,n){var r=Qa(),i=(()=>{Em(e);var r=wm(e,t,n);return t.bR(g_(e)),Dm(e),r}),a=!rf(e);if(r.E||!a)var o=i();else{r.E=!0;try{var o=i()}finally{r.E=!1,Ja(r)}}return o}function wm(e,t,n){var r=new To(n,new pm((()=>{nf(e,t)})));return e.bn.push(t),r}function Tm(e,t){Ia().iY(e.bn,t)&&Om(e)}function Em(e){e.c4||=!0}function Dm(e){km(e)===1&&rg(e)}function Om(e){rf(e)||(e.c4=!1)}function km(e){var t=e.bn.length,n=e.cE;return(t|0)+(n.length|0)|0}function Am(e){e.dS=Ma().i4(new jm(e),(Ma(),!0))}function jm(e){if(this.dT=null,e===null)throw new ih;this.dT=e}T=jm.prototype=new gp,T.constructor=jm;function Mm(){}Mm.prototype=T,T.im=(function(e){return!0}),T.hf=(function(e,t){new Va(new Z((t=>{this.dT.j3(e,t)})))}),T.ba=(function(e){return this.im(e)}),T.fO=(function(e,t){return this.hf(e,t)}),new D().i(jm,`com.raquo.airstream.state.Var$$anon$1`,{bK:1,be:1,e:1,f:1,a:1});function Nm(e){if(e===null)throw new ih}T=Nm.prototype=new gp,T.constructor=Nm;function Pm(){}Pm.prototype=T,T.ba=(function(e){return typeof e==`string`}),T.fO=(function(e,t){return typeof e==`string`?e:t.j(e)}),new D().i(Nm,`com.raquo.laminar.DomApi$$anon$2`,{bP:1,be:1,e:1,f:1,a:1});function Fm(e,t){this.c6=null,this.cI=null,this.c6=e,this.cI=t}T=Fm.prototype=new E,T.constructor=Fm;function Im(){}Im.prototype=T,T.a1=(function(e){var t=this.cI;t!==void 0&&t.gt(e,this.c6),Gs().ck(e,this.c6,void 0)}),T.jn=(function(e){return new Fm(this.c6,e.ha(this.cI))});var Lm=new D().i(Fm,`com.raquo.laminar.inserters.StaticChildInserter`,{cf:1,Q:1,cd:1,ch:1,cc:1});function Rm(e){e.cQ=new Oo(new pm((()=>{e.a6.fK()})),new pm((()=>{e.a6.hv()}))),e.aA=void 0}function zm(e,t,n){if(e.aA===void 0)e.aA=O().C(R().b(new(uf.r()).C([t])));else if(n){var r=e.aA;if(r===void 0){var i;throw new sh(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aA;if(a===void 0){var o;throw new sh(`undefined.get`)}else var o=a;o.push(t)}}function Bm(e,t){var n=e.aA;n!==void 0&&n.splice(t,1)}function Vm(e,t){var n=e.aA;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:qi(a,t))?r=!0:i=1+i|0}return r?i:-1}function Hm(e,t){Wm(e,e.ca,t)&&Gm(e,t)}function Um(e,t){var n=e.ca;e.ca=t,Wm(e,n,t)||Gm(e,t)}function Wm(e,t,n){var r=!t.o()&&!t.A().co().K.o(),i=!n.o()&&!n.A().co().K.o();return r&&!i}function Gm(e,t){Km(e,t.o()?Q():new Eg(t.A().co()))}function Km(e,t){if(t.o())e.cQ.hn();else{var n=t.A();e.cQ.j7(n)}}function qm(){}T=qm.prototype=new Gp,T.constructor=qm;function Jm(){}Jm.prototype=T;var Ym=class extends Qp{constructor(e){super(),gd(this,e,null,!0,!0)}};new D().i(Ym,`java.lang.ArithmeticException`,{d1:1,S:1,K:1,t:1,a:1});var Xm=new D().i(0,`java.lang.Byte`,{d3:1,U:1,a:1,R:1,L:1},(e=>ia(e)));function Zm(e,t){return gd(e,t,null,!0,!0),e}function Qm(e){return gd(e,null,null,!0,!0),e}var $m=class extends Qp{};new D().i($m,`java.lang.IllegalArgumentException`,{d8:1,S:1,K:1,t:1,a:1});function eh(e,t){return gd(e,t,null,!0,!0),e}var th=class extends Qp{};new D().i(th,`java.lang.IndexOutOfBoundsException`,{ax:1,S:1,K:1,t:1,a:1});function nh(){}T=nh.prototype=new Gp,T.constructor=nh;function rh(){}rh.prototype=T,new D().i(nh,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dc:1,as:1,aq:1,au:1,ar:1});var ih=class extends Qp{constructor(){super(),gd(this,null,null,!0,!0)}};new D().i(ih,`java.lang.NullPointerException`,{de:1,S:1,K:1,t:1,a:1});var ah=new D().i(0,`java.lang.Short`,{df:1,U:1,a:1,R:1,L:1},(e=>aa(e))),oh=class extends Qp{constructor(e){super(),gd(this,e,null,!0,!0)}};new D().i(oh,`java.lang.UnsupportedOperationException`,{dn:1,S:1,K:1,t:1,a:1});var sh=class extends Qp{constructor(e){super(),gd(this,e,null,!0,!0)}};new D().i(sh,`java.util.NoSuchElementException`,{dt:1,S:1,K:1,t:1,a:1});function ch(){}T=ch.prototype=new nm,T.constructor=ch;function lh(){}lh.prototype=T,T.j=(function(e){return e}),T.t=(function(){return`generalized constraint`}),new D().i(ch,`scala.$less$colon$less$$anon$1`,{dy:1,dv:1,dw:1,e:1,a:1});function uh(e){return e.d1||=(e.d2=e.cd===null?`null`:ph(e),!0),e.d2}function dh(e){return e.d1?e.d2:uh(e)}function fh(e){var t=e.cd;return`of class `+Ki(t)}function ph(e){try{return e.cd+` (`+fh(e)+`)`}catch{return`an instance `+fh(e)}}var mh=class extends Qp{constructor(e){super(),this.d2=null,this.cd=null,this.d1=!1,this.cd=e,gd(this,null,null,!0,!0)}bP(){return dh(this)}};new D().i(mh,`scala.MatchError`,{dG:1,S:1,K:1,t:1,a:1});function hh(){}T=hh.prototype=new E,T.constructor=hh;function gh(){}gh.prototype=T,T.o=(function(){return this===Q()}),T.D=(function(){return this.o()?0:1}),T.s=(function(){return this.o()?q().z:new wh(this.A())});function _h(e){this.bt=0,this.ft=0,this.fs=null,this.fs=e,this.bt=0,this.ft=e.V()}T=_h.prototype=new om,T.constructor=_h;function vh(){}vh.prototype=T,T.x=(function(){return this.bt<this.ft}),T.n=(function(){var e=this.fs.W(this.bt);return this.bt=1+this.bt|0,e}),new D().i(_h,`scala.Product$$anon$1`,{dL:1,r:1,s:1,b:1,c:1});function yh(e){this.cf=null,$f(this,e)}T=yh.prototype=new tp,T.constructor=yh;function bh(){}bh.prototype=T,new D().i(yh,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dZ:1,dY:1,a1:1,a:1,aa:1});function xh(e){return kl(e,e.b8()+`(`,`, `,`)`)}function Sh(){}T=Sh.prototype=new om,T.constructor=Sh;function Ch(){}Ch.prototype=T,T.x=(function(){return!1}),T.iA=(function(){throw new sh(`next on empty iterator`)}),T.D=(function(){return 0}),T.bU=(function(e,t){return this}),T.n=(function(){this.iA()}),new D().i(Sh,`scala.collection.Iterator$$anon$19`,{e4:1,r:1,s:1,b:1,c:1});function wh(e){this.bv=!1,this.fx=null,this.fx=e,this.bv=!1}T=wh.prototype=new om,T.constructor=wh;function Th(){}Th.prototype=T,T.x=(function(){return!this.bv}),T.n=(function(){return this.bv?q().z.n():(this.bv=!0,this.fx)}),T.bU=(function(e,t){return this.bv||e>0||t===0?q().z:this}),new D().i(wh,`scala.collection.Iterator$$anon$20`,{e5:1,r:1,s:1,b:1,c:1});function Eh(e){for(;;){if(e.G instanceof Oh){var t=e.G;e.G=t.G,e.ah=t.ah,t.S!==null&&(e.R===null&&(e.R=t.R),t.R.bw=e.S,e.S=t.S);continue}return}}function Dh(e){for(;;)if(e.S===null)return e.G=null,e.R=null,!1;else{if(e.G=e.S.ie(),e.R===e.S&&(e.R=e.R.bw),e.S=e.S.bw,Eh(e),e.ah)return!0;if(e.G!==null&&e.G.x())return e.ah=!0,!0}}function Oh(e){this.G=null,this.S=null,this.R=null,this.ah=!1,this.G=e,this.S=null,this.R=null,this.ah=!1}T=Oh.prototype=new om,T.constructor=Oh;function kh(){}kh.prototype=T,T.x=(function(){return this.ah?!0:this.G===null?!1:this.G.x()?(this.ah=!0,!0):Dh(this)}),T.n=(function(){return this.x()?(this.ah=!1,this.G.n()):q().z.n()}),T.hp=(function(e){var t=new jl(e,null);return this.S===null?(this.S=t,this.R=t):(this.R.bw=t,this.R=t),this.G===null&&(this.G=q().z),this}),new D().i(Oh,`scala.collection.Iterator$ConcatIterator`,{aI:1,r:1,s:1,b:1,c:1});function Ah(e){for(;e.a9>0;)e.ai.x()?(e.ai.n(),e.a9=-1+e.a9|0):e.a9=0}function jh(e,t){if(e.N<0)return-1;var n=e.N-t|0;return n<0?0:n}function Mh(e,t,n){this.ai=null,this.N=0,this.a9=0,this.ai=e,this.N=n,this.a9=t}T=Mh.prototype=new om,T.constructor=Mh;function Nh(){}Nh.prototype=T,T.D=(function(){var e=this.ai.D();if(e<0)return-1;var t=e-this.a9|0,n=t<0?0:t;if(this.N<0)return n;var r=this.N;return r<n?r:n}),T.x=(function(){return Ah(this),this.N!==0&&this.ai.x()}),T.n=(function(){return Ah(this),this.N>0?(this.N=-1+this.N|0,this.ai.n()):this.N<0?this.ai.n():q().z.n()}),T.bU=(function(e,t){var n=e>0?e:0;if(t<0)var r=jh(this,n);else if(t<=n)var r=0;else if(this.N<0)var r=t-n|0;else var i=jh(this,n),a=t-n|0,r=i<a?i:a;var o=this.a9+n|0;return r===0?q().z:o<0?(this.a9=2147483647,this.N=0,np(this,new fp((()=>new Mh(this.ai,-2147483647+o|0,r))))):(this.a9=o,this.N=r,this)}),new D().i(Mh,`scala.collection.Iterator$SliceIterator`,{e7:1,r:1,s:1,b:1,c:1});function Ph(e,t){return t>=0&&e.at(t)>0}function Fh(e,t){if(t<0)throw eh(new th,``+t);var n=e.hB(t);if(n.o())throw eh(new th,``+t);return n.a4()}function Ih(e,t){return z_(t)?Lh(e,e,t):fm(e,t)}function Lh(e,t,n){for(;;)if(t===n)return!0;else if(!t.o()&&!n.o()&&Bl().H(t.a4(),n.a4())){var r=t.P(),i=n.P();t=r,n=i}else return t.o()&&n.o()}function Rh(e){this.by=null,this.by=e}T=Rh.prototype=new om,T.constructor=Rh;function zh(){}zh.prototype=T,T.x=(function(){return!this.by.o()}),T.n=(function(){var e=this.by.a4();return this.by=this.by.P(),e}),new D().i(Rh,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{ec:1,r:1,s:1,b:1,c:1});function Bh(){this.cg=null,sm(this,Yh())}T=Bh.prototype=new lm,T.constructor=Bh;function Vh(){}Vh.prototype=T,new D().i(Bh,`scala.collection.mutable.Buffer$`,{en:1,e9:1,aa:1,a1:1,a:1});var Hh;function Uh(){return Hh||=new Bh,Hh}function Wh(e){this.bA=0,this.fD=0,this.fE=null,this.fE=e,this.bA=0,this.fD=e.V()}T=Wh.prototype=new om,T.constructor=Wh;function Gh(){}Gh.prototype=T,T.x=(function(){return this.bA<this.fD}),T.n=(function(){var e=this.fE.W(this.bA);return this.bA=1+this.bA|0,e}),new D().i(Wh,`scala.runtime.ScalaRunTime$$anon$1`,{eN:1,r:1,s:1,b:1,c:1});function Kh(){}T=Kh.prototype=new E,T.constructor=Kh;function qh(){}qh.prototype=T,T.dl=(function(e){return this.gg(e)}),T.gg=(function(e){return Pd(sy(new cy),e).gy()}),T.dp=(function(e){return this.gg(e)}),new D().i(Kh,`scala.scalajs.js.WrappedArray$`,{eT:1,ed:1,aa:1,a1:1,a:1});var Jh;function Yh(){return Jh||=new Kh,Jh}function Xh(e){this.bB=null,this.bB=e}T=Xh.prototype=new xm,T.constructor=Xh;function Zh(){}Zh.prototype=T,T.gk=(function(){return!0}),T.gl=(function(){return!1}),T.bO=(function(e,t){return e.j(this.bB)}),T.X=(function(){return`Failure`}),T.V=(function(){return 1}),T.W=(function(e){return e===0?this.bB:z().aM(e)}),T.a8=(function(){return new Wh(this)}),T.r=(function(){return V().be(this,-889275714,!1)}),T.t=(function(){return R().dg(this)}),T.l=(function(e){if(this===e)return!0;if(e instanceof Xh){var t=this.bB,n=e.bB;return t===null?n===null:t.l(n)}else return!1}),new D().i(Xh,`scala.util.Failure`,{bg:1,bi:1,M:1,d:1,a:1});function Qh(e){this.bC=null,this.bC=e}T=Qh.prototype=new xm,T.constructor=Qh;function $h(){}$h.prototype=T,T.gk=(function(){return!1}),T.gl=(function(){return!0}),T.bO=(function(e,t){try{return t.j(this.bC)}catch(t){var n=t instanceof _d?t:new $(t);if(pu().he(n))return e.j(n);throw n instanceof $?n.U:n}}),T.X=(function(){return`Success`}),T.V=(function(){return 1}),T.W=(function(e){return e===0?this.bC:z().aM(e)}),T.a8=(function(){return new Wh(this)}),T.r=(function(){return V().be(this,-889275714,!1)}),T.t=(function(){return R().dg(this)}),T.l=(function(e){return this===e||e instanceof Qh&&Bl().H(this.bC,e.bC)}),new D().i(Qh,`scala.util.Success`,{bh:1,bi:1,M:1,d:1,a:1});var eg=class e extends Xd{constructor(e){super(),this.bk=null,this.bk=e,gd(this,`ObserverError: `+H().cp(e),null,!0,!0)}a8(){return new _h(this)}r(){return V().be(this,-889275714,!1)}l(t){if(this===t)return!0;if(t instanceof e){var n=this.bk,r=t.bk;return n===null?r===null:n.l(r)}else return!1}V(){return 1}X(){return`ObserverError`}W(e){if(e===0)return this.bk;throw eh(new th,``+e)}t(){return`ObserverError: `+this.bk}};new D().i(eg,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ac:1,a3:1,t:1,a:1,d:1,M:1});var tg=class e extends Xd{constructor(e,t){super(),this.bm=null,this.bl=null,this.bm=e,this.bl=t,gd(this,`ObserverErrorHandlingError: `+H().cp(e)+`; cause: `+H().cp(t),null,!0,!0),this.ij(t)}a8(){return new _h(this)}r(){return V().be(this,-889275714,!1)}l(t){if(this===t)return!0;if(t instanceof e){var n=this.bm,r=t.bm;if(n===null?r===null:n.l(r)){var i=this.bl,a=t.bl;return i===null?a===null:i.l(a)}else return!1}else return!1}V(){return 2}X(){return`ObserverErrorHandlingError`}W(e){if(e===0)return this.bm;if(e===1)return this.bl;throw eh(new th,``+e)}t(){return`ObserverErrorHandlingError: `+this.bm+`; cause: `+this.bl}};new D().i(tg,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ad:1,a3:1,t:1,a:1,d:1,M:1});var ng=class e extends Xd{constructor(e,t){super(),this.aP=null,this.aO=0,this.aP=e,this.aO=t,gd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a8(){return new _h(this)}r(){var e=-889275714;return e=z().e(e,vg(`TransactionDepthExceeded`)),e=z().e(e,z().B(this.aP)),e=z().e(e,this.aO),z().q(e,2)}l(t){return this===t?!0:t instanceof e&&this.aO===t.aO?this.aP===t.aP:!1}V(){return 2}X(){return`TransactionDepthExceeded`}W(e){if(e===0)return this.aP;if(e===1)return this.aO;throw eh(new th,``+e)}t(){return`TransactionDepthExceeded: `+this.aP+`; maxDepth: `+this.aO}};new D().i(ng,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ae:1,a3:1,t:1,a:1,d:1,M:1});function rg(e){g_(e)}function ig(e){this.dQ=null,this.dS=null,this.cD=null,this.cC=null,this.dR=null,this.dQ=void 0,Am(this),this.cD=e,this.cC=new A_(this.cD,new pm((()=>Oa(this)))),this.dR=this.cC}T=ig.prototype=new E,T.constructor=ig;function ag(){}ag.prototype=T,T.cr=(function(){return this.dQ}),T.cm=(function(){return Da(this)}),T.t=(function(){return Oa(this)}),T.gD=(function(){return this.dR}),T.j3=(function(e,t){this.cD=e,__(this.cC,e,t)}),new D().i(ig,`com.raquo.airstream.state.SourceVar`,{bG:1,af:1,ag:1,X:1,V:1,bI:1});function og(e,t){var n=e.cR;n===void 0?e.cR=Zl().hd(O().C(R().b(new(xg.r()).C([t])))):n.push(t)|0}function sg(e,t){var n=e.et;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].jX()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function cg(e,t){this.ca=null,this.a6=null,this.cQ=null,this.aA=null,this.cS=null,this.L=null,this.et=null,this.cR=null,this.cS=e,this.L=t,this.ca=Q(),Gu(this),Rm(this),this.et=void 0,this.cR=void 0}T=cg.prototype=new E,T.constructor=cg;function lg(){}lg.prototype=T,T.a1=(function(e){Gs().ck(e,this,void 0)}),T.co=(function(){return this.a6}),T.g3=(function(e){this.a6=e}),T.gG=(function(e){Hm(this,e)}),T.gz=(function(e){Um(this,e)}),T.hr=(function(){if(k().gi(this.L)){var e=this.cS;return e instanceof gf?e.h5():void 0}else return us().eh}),T.ik=(function(e){var t=this.hr();return t!==void 0&&Bo().ih(t,e,0)}),T.iK=(function(e){if(e instanceof ku&&this.ik(e.af)){if(sg(this,e.af))throw Kf(new K,"Can not add uncontrolled `"+e.af+" <-- ???` to element `"+k().g4(this.L)+"` that already has an input controller for `"+e.af+"` property.");og(this,e.af)}}),T.t=(function(){return`ReactiveHtmlElement(`+(this.L===null?`tag=`+this.cS.ds():this.L.outerHTML)+`)`}),T.aN=(function(){return this.L}),new D().i(cg,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cH:1,a6:1,Q:1,am:1,an:1,cF:1});function ug(e,t){return Object.is(e,t)}function dg(e){return pc().dt(e)}var fg=new D().i(0,`java.lang.Double`,{aw:1,U:1,a:1,R:1,L:1,W:1},(e=>typeof e==`number`)),pg=new D().i(0,`java.lang.Float`,{d6:1,U:1,a:1,R:1,L:1,W:1},(e=>sa(e))),mg=new D().i(0,`java.lang.Integer`,{d9:1,U:1,a:1,R:1,L:1,W:1},(e=>oa(e)));function hg(e,t){return t instanceof I&&e.i===t.i&&e.k===t.k}function gg(e){return e.i^e.k}var _g=new D().i(0,`java.lang.Long`,{ay:1,U:1,a:1,R:1,L:1,W:1},(e=>e instanceof I));function vg(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function yg(e,t){return e===t}function bg(e,t){var n=ad().jj(t);return e.indexOf(n)|0}var xg=new D().i(0,`java.lang.String`,{aA:1,a:1,R:1,a8:1,L:1,W:1},(e=>typeof e==`string`)),Sg=class extends th{constructor(){super(),gd(this,null,null,!0,!0)}};new D().i(Sg,`java.lang.StringIndexOutOfBoundsException`,{dk:1,ax:1,S:1,K:1,t:1,a:1});function Cg(){}T=Cg.prototype=new gh,T.constructor=Cg;function wg(){}wg.prototype=T,T.i5=(function(){throw new sh(`None.get`)}),T.X=(function(){return`None`}),T.V=(function(){return 0}),T.W=(function(e){return z().aM(e)}),T.a8=(function(){return new Wh(this)}),T.r=(function(){return 2433880}),T.t=(function(){return`None`}),T.A=(function(){this.i5()}),new D().i(Cg,`scala.None$`,{dH:1,aD:1,b:1,M:1,d:1,a:1});var Tg;function Q(){return Tg||=new Cg,Tg}function Eg(e){this.bu=null,this.bu=e}T=Eg.prototype=new gh,T.constructor=Eg;function Dg(){}Dg.prototype=T,T.A=(function(){return this.bu}),T.X=(function(){return`Some`}),T.V=(function(){return 1}),T.W=(function(e){return e===0?this.bu:z().aM(e)}),T.a8=(function(){return new Wh(this)}),T.r=(function(){return V().be(this,-889275714,!1)}),T.t=(function(){return R().dg(this)}),T.l=(function(e){return this===e||e instanceof Eg&&Bl().H(this.bu,e.bu)}),new D().i(Eg,`scala.Some`,{aE:1,aD:1,b:1,M:1,d:1,a:1});function Og(){}T=Og.prototype=new E,T.constructor=Og;function kg(){}kg.prototype=T,T.b8=(function(){return this.bh()}),T.as=(function(e){Ol(this,e)}),T.bD=(function(e,t,n,r){return Al(this,e,t,n,r)}),T.D=(function(){return-1});function Ag(e,t){return e.M=t,e.m=0,e.F=il().b9(e.M),e}function jg(){this.M=null,this.m=0,this.F=0}T=jg.prototype=new om,T.constructor=jg;function Mg(){}Mg.prototype=T,T.D=(function(){return this.F-this.m|0}),T.x=(function(){return this.m<this.F}),T.n=(function(){this.m>=il().b9(this.M)&&q().z.n();var e=R().b7(this.M,this.m);return this.m=1+this.m|0,e}),T.cn=(function(e){if(e>0){var t=this.m+e|0;if(t<0)var n=this.F;else var r=this.F,n=r<t?r:t;this.m=n}return this}),new D().i(jg,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Ng(e,t){return t<0?0:t>e.a0?e.a0:t}function Pg(e){this.fw=null,this.ag=0,this.a0=0,this.fw=e,this.ag=0,this.a0=e.p()}T=Pg.prototype=new om,T.constructor=Pg;function Fg(){}Fg.prototype=T,T.D=(function(){return this.a0}),T.x=(function(){return this.a0>0}),T.n=(function(){if(this.a0>0){var e=this.fw.u(this.ag);return this.ag=1+this.ag|0,this.a0=-1+this.a0|0,e}else return q().z.n()}),T.cn=(function(e){if(e>0){this.ag=this.ag+e|0;var t=this.a0-e|0;this.a0=t<0?0:t}return this}),T.bU=(function(e,t){var n=Ng(this,e),r=Ng(this,t)-n|0;return this.a0=r<0?0:r,this.ag=this.ag+n|0,this}),new D().i(Pg,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{e2:1,r:1,s:1,b:1,c:1,a:1});function Ig(e){return e.dc||=(e.dd=new bv(new fa(0)),!0),e.dd}function Lg(e){return e.dc?e.dd:Ig(e)}function Rg(){this.dd=null,this.gW=null,this.dc=!1,Bg=this,this.gW=new yh(this)}T=Rg.prototype=new E,T.constructor=Rg;function zg(){}zg.prototype=T,T.i1=(function(e,t){return e instanceof nv?e:this.gE(Td().ge(e,t))}),T.gE=(function(e){if(e===null)return null;if(e instanceof fa)return new bv(e);if(e instanceof va)return new gv(e);if(e instanceof xa)return new fv(e);if(e instanceof ya)return new vv(e);if(e instanceof ba)return new mv(e);if(e instanceof ha)return new uv(e);if(e instanceof ga)return new cv(e);if(e instanceof _a)return new Sv(e);if(e instanceof ma)return new ov(e);if(Qc(e,1))return new wv(e);throw new mh(e)}),T.dn=(function(e,t){return this.i1(e,t)}),new D().i(Rg,`scala.collection.immutable.ArraySeq$`,{eh:1,aK:1,aG:1,aF:1,aH:1,a:1});var Bg;function Vg(){return Bg||=new Rg,Bg}function Hg(){this.gX=null,this.fA=null,Wg=this,this.gX=new yh(this),this.fA=new Wv(new fa(0))}T=Hg.prototype=new E,T.constructor=Hg;function Ug(){}Ug.prototype=T,T.i2=(function(e,t){return this.is(Td().ge(e,t))}),T.is=(function(e){if(e===null)return null;if(e instanceof fa)return new Wv(e);if(e instanceof va)return new Bv(e);if(e instanceof xa)return new Iv(e);if(e instanceof ya)return new Hv(e);if(e instanceof ba)return new Rv(e);if(e instanceof ha)return new Pv(e);if(e instanceof ga)return new Mv(e);if(e instanceof _a)return new Kv(e);if(e instanceof ma)return new Av(e);if(Qc(e,1))return new Jv(e);throw new mh(e)}),T.dn=(function(e,t){return this.i2(e,t)}),new D().i(Hg,`scala.collection.mutable.ArraySeq$`,{el:1,aK:1,aG:1,aF:1,aH:1,a:1});var Wg;function Gg(){return Wg||=new Hg,Wg}function Kg(){}T=Kg.prototype=new Jm,T.constructor=Kg;function qg(){}qg.prototype=T;function Jg(e){this.M=null,this.m=0,this.F=0,this.d3=null,this.d3=e,Ag(this,e)}T=Jg.prototype=new Mg,T.constructor=Jg;function Yg(){}Yg.prototype=T,T.iB=(function(){this.m>=this.d3.a.length&&q().z.n();var e=this.d3.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iB()}),new D().i(Jg,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dP:1,N:1,r:1,s:1,b:1,c:1,a:1});function Xg(e){this.M=null,this.m=0,this.F=0,this.d4=null,this.d4=e,Ag(this,e)}T=Xg.prototype=new Mg,T.constructor=Xg;function Zg(){}Zg.prototype=T,T.iC=(function(){this.m>=this.d4.a.length&&q().z.n();var e=this.d4.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return ca(this.iC())}),new D().i(Xg,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dQ:1,N:1,r:1,s:1,b:1,c:1,a:1});function Qg(e){this.M=null,this.m=0,this.F=0,this.d5=null,this.d5=e,Ag(this,e)}T=Qg.prototype=new Mg,T.constructor=Qg;function $g(){}$g.prototype=T,T.iD=(function(){this.m>=this.d5.a.length&&q().z.n();var e=this.d5.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iD()}),new D().i(Qg,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dR:1,N:1,r:1,s:1,b:1,c:1,a:1});function e_(e){this.M=null,this.m=0,this.F=0,this.d6=null,this.d6=e,Ag(this,e)}T=e_.prototype=new Mg,T.constructor=e_;function t_(){}t_.prototype=T,T.iE=(function(){this.m>=this.d6.a.length&&q().z.n();var e=this.d6.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iE()}),new D().i(e_,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dS:1,N:1,r:1,s:1,b:1,c:1,a:1});function n_(e){this.M=null,this.m=0,this.F=0,this.d7=null,this.d7=e,Ag(this,e)}T=n_.prototype=new Mg,T.constructor=n_;function r_(){}r_.prototype=T,T.iF=(function(){this.m>=this.d7.a.length&&q().z.n();var e=this.d7.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iF()}),new D().i(n_,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dT:1,N:1,r:1,s:1,b:1,c:1,a:1});function i_(e){this.M=null,this.m=0,this.F=0,this.d8=null,this.d8=e,Ag(this,e)}T=i_.prototype=new Mg,T.constructor=i_;function a_(){}a_.prototype=T,T.iG=(function(){this.m>=this.d8.a.length&&q().z.n();var e=this.d8.a[this.m],t=e.i,n=e.k;return this.m=1+this.m|0,new I(t,n)}),T.n=(function(){return this.iG()}),new D().i(i_,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dU:1,N:1,r:1,s:1,b:1,c:1,a:1});function o_(e){this.M=null,this.m=0,this.F=0,this.d9=null,this.d9=e,Ag(this,e)}T=o_.prototype=new Mg,T.constructor=o_;function s_(){}s_.prototype=T,T.iH=(function(){this.m>=this.d9.a.length&&q().z.n();var e=this.d9.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iH()}),new D().i(o_,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dV:1,N:1,r:1,s:1,b:1,c:1,a:1});function c_(e){this.M=null,this.m=0,this.F=0,this.fv=null,this.fv=e,Ag(this,e)}T=c_.prototype=new Mg,T.constructor=c_;function l_(){}l_.prototype=T,T.iI=(function(){this.m>=this.fv.a.length&&q().z.n(),this.m=1+this.m|0}),T.n=(function(){this.iI()}),new D().i(c_,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dW:1,N:1,r:1,s:1,b:1,c:1,a:1});function u_(e){this.M=null,this.m=0,this.F=0,this.da=null,this.da=e,Ag(this,e)}T=u_.prototype=new Mg,T.constructor=u_;function d_(){}d_.prototype=T,T.iJ=(function(){this.m>=this.da.a.length&&q().z.n();var e=this.da.a[this.m];return this.m=1+this.m|0,e}),T.n=(function(){return this.iJ()}),new D().i(u_,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dX:1,N:1,r:1,s:1,b:1,c:1,a:1});function f_(e){return e.b8()+`(<not computed>)`}function p_(){}T=p_.prototype=new E,T.constructor=p_;function m_(){}m_.prototype=T;var $=class e extends Qp{constructor(e){super(),this.U=null,this.U=e,gd(this,null,null,!0,!0)}bP(){return Yi(this.U)}X(){return`JavaScriptException`}V(){return 1}W(e){return e===0?this.U:z().aM(e)}a8(){return new Wh(this)}r(){return V().be(this,-889275714,!1)}l(t){return this===t||t instanceof e&&Bl().H(this.U,t.U)}};new D().i($,`scala.scalajs.js.JavaScriptException`,{bf:1,S:1,K:1,t:1,a:1,M:1,d:1});function h_(e,t){e.c2!==void 0&&Ba().gq(),e.c2=t}function g_(e){var t=e.c2;if(t===void 0){Ba().gq();var n=g_(e);h_(e,n);var r=n}else var r=t;return r}function __(e,t,n){h_(e,t);var r=t.gk(),i=!1;i=!1,e.c1=!1;for(var a=e.bn,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bR(t),r&&!i&&(i=!0)}for(var c=e.cE,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.c1=!0;var u=e.c3;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].aa(),d=1+d|0;u.length=0}r&&!i&&t.bO(new Z((e=>{H().Y(e)})),new Z((e=>void 0)))}function v_(e,t){typeof console<`u`&&(e.fk&&console.error?console.error(t):console.log(t))}function y_(e){this.fk=!1,this.br=null,this.fk=e,new nh,this.br=``}T=y_.prototype=new qg,T.constructor=y_;function b_(){}b_.prototype=T,T.ip=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.br=``+this.br+t,t=``;else{var r=this.br,i=t;v_(this,``+r+i.substring(0,n)),this.br=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new D().i(y_,`java.lang.JSConsoleBasedPrintStream`,{db:1,d0:1,cZ:1,as:1,aq:1,au:1,ar:1,at:1});function x_(e,t,n){for(;;)if(t<=0||n.o())return n;else{var r=-1+t|0,i=n.P();t=r,n=i}}function S_(){this.de=null}T=S_.prototype=new m_,T.constructor=S_;function C_(){}C_.prototype=T,T.t=(function(){return this.de}),T.l=(function(e){return this===e}),T.r=(function(){return ra(this)});function w_(){}T=w_.prototype=new kg,T.constructor=w_;function T_(){}T_.prototype=T,T.t=(function(){return f_(this)});function E_(){this.de=null,this.de=`Any`}T=E_.prototype=new C_,T.constructor=E_;function D_(){}D_.prototype=T,T.j1=(function(){return Sa.l()}),T.iz=(function(e){return new fa(e)}),new D().i(E_,`scala.reflect.ManifestFactory$AnyManifest$`,{ez:1,eB:1,eA:1,ey:1,ex:1,ew:1,eC:1,a:1,d:1});var O_;function k_(){return O_||=new E_,O_}function A_(e,t){this.dU=null,this.c1=!1,this.c3=null,this.bn=null,this.cE=null,this.c4=!1,this.c2=null,this.dV=null,this.dV=t,this.dU=void 0,ef(this),Sm(this),this.c2=void 0,h_(this,e)}T=A_.prototype=new E,T.constructor=A_;function j_(){}j_.prototype=T,T.cr=(function(){return this.dU}),T.t=(function(){return Oa(this)}),T.l=(function(e){return this===e}),T.r=(function(){return ra(this)}),T.gD=(function(){return this}),T.cm=(function(){return this.dV.aa()+`.signal`}),new D().i(A_,`com.raquo.airstream.state.VarSignal`,{bL:1,af:1,V:1,bk:1,bm:1,ag:1,br:1,bx:1,by:1,bH:1});function M_(e,t){return e===t?!0:N_(t)&&t.g0(e)?e.dw(t):!1}function N_(e){return!!(e&&e.$classData&&e.$classData.n.g)}function P_(){}T=P_.prototype=new kg,T.constructor=P_;function F_(){}F_.prototype=T,T.g0=(function(e){return!0}),T.l=(function(e){return M_(this,e)}),T.r=(function(){return V().j2(this)}),T.t=(function(){return xh(this)}),T.gj=(function(e){return um(this,e)}),T.o=(function(){return dm(this)}),T.dw=(function(e){return fm(this,e)}),T.ba=(function(e){return this.gj(e|0)});function I_(){}T=I_.prototype=new T_,T.constructor=I_;function L_(){}L_.prototype=T;function R_(e){return!!(e&&e.$classData&&e.$classData.n.n)}function z_(e){return!!(e&&e.$classData&&e.$classData.n.a2)}function B_(e,t){return e.bx=t,e}function V_(){this.bx=null}T=V_.prototype=new L_,T.constructor=V_;function H_(){}H_.prototype=T,T.u=(function(e){return this.bx.u(e)}),T.p=(function(){return this.bx.p()}),T.o=(function(){return this.bx.o()});function U_(){this.eb=null,this.ec=!1,this.e1=null,this.e2=!1,this.e9=null,this.ea=!1,this.ef=null,this.eg=!1,this.e5=null,this.e6=!1,this.e3=null,this.e4=!1,this.e7=null,this.e8=!1,this.gK=null,this.e0=null,this.gJ=null,this.ed=null,this.ee=!1,rs(this),Qo(this),Xo(this),Zo(this)}T=U_.prototype=new E,T.constructor=U_;function W_(){}W_.prototype=T,T.gB=(function(){return this.ec||=(this.eb=Ku(new qu,`small`,!1),!0),this.eb}),T.hm=(function(){return this.e2||=(this.e1=new ku(`checked`,A().cH),!0),this.e1}),T.bf=(function(){return this.ea||=(this.e9=new ku(`selected`,A().cH),!0),this.e9}),T.gF=(function(){return this.eg||=(this.ef=new ku(`value`,A().Z),!0),this.ef}),T.iM=(function(){return this.e6||=(this.e5=new wu(`click`),!0),this.e5}),T.iL=(function(){return this.e4||=(this.e3=new wu(`change`),!0),this.e3}),T.bQ=(function(){return this.e8||=(this.e7=new wu(`input`),!0),this.e7}),T.jd=(function(){return this.ee||=(this.ed=new Pp(this),!0),this.ed}),new D().i(U_,`com.raquo.laminar.api.package$$anon$1`,{bY:1,c9:1,c2:1,c7:1,c6:1,c8:1,c4:1,bW:1,bS:1,bV:1,ai:1,aj:1,ah:1,bT:1});function G_(e){this.bx=null,B_(this,e)}T=G_.prototype=new H_,T.constructor=G_;function K_(){}K_.prototype=T,T.s=(function(){return new Pg(this)}),T.bh=(function(){return`IndexedSeqView`}),T.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),T.D=(function(){return this.p()}),new D().i(G_,`scala.collection.IndexedSeqView$Id`,{e1:1,eb:1,dM:1,dN:1,h:1,i:1,b:1,k:1,c:1,j:1,ef:1,a:1,ea:1,l:1,e0:1,o:1});function q_(){}T=q_.prototype=new F_,T.constructor=q_;function J_(){}J_.prototype=T;function Y_(e,t){return!Z_(t)||e.p()===t.p()}function X_(e,t){if(Z_(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.fP(),o=t.fP(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=Bl().H(e.u(i),t.u(i)),i=1+i|0;if(i<n&&r)for(var p=e.s().cn(i),m=t.s().cn(i);r&&p.x();)r=Bl().H(p.n(),m.n())}return r}else return fm(e,t)}function Z_(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Q_(){}T=Q_.prototype=new F_,T.constructor=Q_;function $_(){}$_.prototype=T;function ev(){}T=ev.prototype=new $_,T.constructor=ev;function tv(){}tv.prototype=T,T.fL=(function(e){return Pd(this,e)});function nv(){}T=nv.prototype=new J_,T.constructor=nv;function rv(){}rv.prototype=T,T.g0=(function(e){return Y_(this,e)}),T.dw=(function(e){return X_(this,e)}),T.bh=(function(){return`IndexedSeq`}),T.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),T.D=(function(){return this.p()}),T.it=(function(e){for(var t=new fa(this.p()),n=0;n<t.a.length;)t.a[n]=e.j(this.u(n)),n=1+n|0;return Vg().gE(t)}),T.b8=(function(){return`ArraySeq`}),T.fP=(function(){return 2147483647}),T.gn=(function(e){return this.it(e)});function iv(){}T=iv.prototype=new $_,T.constructor=iv;function av(){}av.prototype=T,T.bh=(function(){return`IndexedSeq`}),T.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),T.D=(function(){return this.p()}),T.b8=(function(){return`ArraySeq`}),T.l=(function(e){return e instanceof iv&&il().b9(this.a2())!==il().b9(e.a2())?!1:M_(this,e)});function ov(e){this.aC=null,this.aC=e}T=ov.prototype=new rv,T.constructor=ov;function sv(){}sv.prototype=T,T.p=(function(){return this.aC.a.length}),T.r=(function(){var e=V();return e.fZ(this.aC,e.y)}),T.l=(function(e){return e instanceof ov?F().gc(this.aC,e.aC):M_(this,e)}),T.s=(function(){return new u_(this.aC)}),T.bM=(function(e){return this.aC.a[e]}),T.j=(function(e){return this.bM(e|0)}),T.u=(function(e){return this.bM(e)}),new D().i(ov,`scala.collection.immutable.ArraySeq$ofBoolean`,{aN:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function cv(e){this.aD=null,this.aD=e}T=cv.prototype=new rv,T.constructor=cv;function lv(){}lv.prototype=T,T.p=(function(){return this.aD.a.length}),T.bE=(function(e){return this.aD.a[e]}),T.r=(function(){var e=V();return e.fR(this.aD,e.y)}),T.l=(function(e){return e instanceof cv?F().g5(this.aD,e.aD):M_(this,e)}),T.s=(function(){return new Jg(this.aD)}),T.j=(function(e){return this.bE(e|0)}),T.u=(function(e){return this.bE(e)}),new D().i(cv,`scala.collection.immutable.ArraySeq$ofByte`,{aO:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function uv(e){this.aj=null,this.aj=e}T=uv.prototype=new rv,T.constructor=uv;function dv(){}dv.prototype=T,T.p=(function(){return this.aj.a.length}),T.bF=(function(e){return this.aj.a[e]}),T.r=(function(){var e=V();return e.fS(this.aj,e.y)}),T.l=(function(e){return e instanceof uv?F().g6(this.aj,e.aj):M_(this,e)}),T.s=(function(){return new Xg(this.aj)}),T.bD=(function(e,t,n,r){return new Pv(this.aj).bD(e,t,n,r)}),T.j=(function(e){return ca(this.bF(e|0))}),T.u=(function(e){return ca(this.bF(e))}),new D().i(uv,`scala.collection.immutable.ArraySeq$ofChar`,{aP:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function fv(e){this.aE=null,this.aE=e}T=fv.prototype=new rv,T.constructor=fv;function pv(){}pv.prototype=T,T.p=(function(){return this.aE.a.length}),T.r=(function(){var e=V();return e.fT(this.aE,e.y)}),T.l=(function(e){return e instanceof fv?F().g7(this.aE,e.aE):M_(this,e)}),T.s=(function(){return new Qg(this.aE)}),T.bH=(function(e){return this.aE.a[e]}),T.j=(function(e){return this.bH(e|0)}),T.u=(function(e){return this.bH(e)}),new D().i(fv,`scala.collection.immutable.ArraySeq$ofDouble`,{aQ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function mv(e){this.aF=null,this.aF=e}T=mv.prototype=new rv,T.constructor=mv;function hv(){}hv.prototype=T,T.p=(function(){return this.aF.a.length}),T.r=(function(){var e=V();return e.fU(this.aF,e.y)}),T.l=(function(e){return e instanceof mv?F().g8(this.aF,e.aF):M_(this,e)}),T.s=(function(){return new e_(this.aF)}),T.bI=(function(e){return this.aF.a[e]}),T.j=(function(e){return this.bI(e|0)}),T.u=(function(e){return this.bI(e)}),new D().i(mv,`scala.collection.immutable.ArraySeq$ofFloat`,{aR:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function gv(e){this.aG=null,this.aG=e}T=gv.prototype=new rv,T.constructor=gv;function _v(){}_v.prototype=T,T.p=(function(){return this.aG.a.length}),T.r=(function(){var e=V();return e.fV(this.aG,e.y)}),T.l=(function(e){return e instanceof gv?F().g9(this.aG,e.aG):M_(this,e)}),T.s=(function(){return new n_(this.aG)}),T.bJ=(function(e){return this.aG.a[e]}),T.j=(function(e){return this.bJ(e|0)}),T.u=(function(e){return this.bJ(e)}),new D().i(gv,`scala.collection.immutable.ArraySeq$ofInt`,{aS:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function vv(e){this.aH=null,this.aH=e}T=vv.prototype=new rv,T.constructor=vv;function yv(){}yv.prototype=T,T.p=(function(){return this.aH.a.length}),T.r=(function(){var e=V();return e.fW(this.aH,e.y)}),T.l=(function(e){return e instanceof vv?F().ga(this.aH,e.aH):M_(this,e)}),T.s=(function(){return new i_(this.aH)}),T.bK=(function(e){return this.aH.a[e]}),T.j=(function(e){return this.bK(e|0)}),T.u=(function(e){return this.bK(e)}),new D().i(vv,`scala.collection.immutable.ArraySeq$ofLong`,{aT:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function bv(e){this.aI=null,this.aI=e}T=bv.prototype=new rv,T.constructor=bv;function xv(){}xv.prototype=T,T.p=(function(){return this.aI.a.length}),T.u=(function(e){return this.aI.a[e]}),T.r=(function(){var e=V();return e.fQ(this.aI,e.y)}),T.l=(function(e){return e instanceof bv?Td().gd(this.aI,e.aI):M_(this,e)}),T.s=(function(){return Ag(new jg,this.aI)}),T.j=(function(e){return this.u(e|0)}),new D().i(bv,`scala.collection.immutable.ArraySeq$ofRef`,{aU:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Sv(e){this.aJ=null,this.aJ=e}T=Sv.prototype=new rv,T.constructor=Sv;function Cv(){}Cv.prototype=T,T.p=(function(){return this.aJ.a.length}),T.bG=(function(e){return this.aJ.a[e]}),T.r=(function(){var e=V();return e.fX(this.aJ,e.y)}),T.l=(function(e){return e instanceof Sv?F().gb(this.aJ,e.aJ):M_(this,e)}),T.s=(function(){return new o_(this.aJ)}),T.j=(function(e){return this.bG(e|0)}),T.u=(function(e){return this.bG(e)}),new D().i(Sv,`scala.collection.immutable.ArraySeq$ofShort`,{aV:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function wv(e){this.b5=null,this.b5=e}T=wv.prototype=new rv,T.constructor=wv;function Tv(){}Tv.prototype=T,T.p=(function(){return this.b5.a.length}),T.r=(function(){var e=V();return e.fY(this.b5,e.y)}),T.l=(function(e){return e instanceof wv?this.b5.a.length===e.b5.a.length:M_(this,e)}),T.s=(function(){return new c_(this.b5)}),T.bL=(function(e){}),T.j=(function(e){this.bL(e|0)}),T.u=(function(e){this.bL(e)}),new D().i(wv,`scala.collection.immutable.ArraySeq$ofUnit`,{aW:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Ev(e,t,n,r){for(;;)if(t===r)return n.o()?0:1;else if(n.o())return-1;else{var i=1+t|0,a=n.P();t=i,n=a}}function Dv(e,t,n){for(;;)if(t===n)return!0;else{var r=t.o(),i=n.o();if(!(r||i)&&Bl().H(t.a4(),n.a4())){var a=t.P(),o=n.P();t=a,n=o}else return r&&i}}function Ov(){}T=Ov.prototype=new J_,T.constructor=Ov;function kv(){}kv.prototype=T,T.s=(function(){return new Rh(this)}),T.bh=(function(){return`LinearSeq`}),T.gj=(function(e){return Ph(this,e)}),T.u=(function(e){return Fh(this,e)}),T.dw=(function(e){return Ih(this,e)}),T.o=(function(){return this===ty()}),T.iu=(function(e){if(this===ty())return ty();for(var t=new Xv(e.j(this.a4()),ty()),n=t,r=this.P();r!==ty();){var i=new Xv(e.j(r.a4()),ty());n.ch=i,n=i,r=r.P()}return t}),T.as=(function(e){for(var t=this;!t.o();)e.j(t.a4()),t=t.P()}),T.p=(function(){for(var e=this,t=0;!e.o();)t=1+t|0,e=e.P();return t}),T.at=(function(e){return e<0?1:Ev(this,0,this,e)}),T.b8=(function(){return`List`}),T.l=(function(e){return e instanceof Ov?Dv(this,this,e):M_(this,e)}),T.j=(function(e){return Fh(this,e|0)}),T.ba=(function(e){return Ph(this,e|0)}),T.hB=(function(e){return x_(this,e,this)}),T.gn=(function(e){return this.iu(e)});function Av(e){this.ak=null,this.ak=e}T=Av.prototype=new av,T.constructor=Av;function jv(){}jv.prototype=T,T.p=(function(){return this.ak.a.length}),T.r=(function(){var e=V();return e.fZ(this.ak,e.y)}),T.l=(function(e){return e instanceof Av?F().gc(this.ak,e.ak):iv.prototype.l.call(this,e)}),T.s=(function(){return new u_(this.ak)}),T.bM=(function(e){return this.ak.a[e]}),T.j=(function(e){return this.bM(e|0)}),T.u=(function(e){return this.bM(e)}),T.a2=(function(){return this.ak}),new D().i(Av,`scala.collection.mutable.ArraySeq$ofBoolean`,{aZ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Mv(e){this.al=null,this.al=e}T=Mv.prototype=new av,T.constructor=Mv;function Nv(){}Nv.prototype=T,T.p=(function(){return this.al.a.length}),T.bE=(function(e){return this.al.a[e]}),T.r=(function(){var e=V();return e.fR(this.al,e.y)}),T.l=(function(e){return e instanceof Mv?F().g5(this.al,e.al):iv.prototype.l.call(this,e)}),T.s=(function(){return new Jg(this.al)}),T.j=(function(e){return this.bE(e|0)}),T.u=(function(e){return this.bE(e)}),T.a2=(function(){return this.al}),new D().i(Mv,`scala.collection.mutable.ArraySeq$ofByte`,{b0:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Pv(e){this.T=null,this.T=e}T=Pv.prototype=new av,T.constructor=Pv;function Fv(){}Fv.prototype=T,T.p=(function(){return this.T.a.length}),T.bF=(function(e){return this.T.a[e]}),T.r=(function(){var e=V();return e.fS(this.T,e.y)}),T.l=(function(e){return e instanceof Pv?F().g6(this.T,e.T):iv.prototype.l.call(this,e)}),T.s=(function(){return new Xg(this.T)}),T.bD=(function(e,t,n,r){var i=e.O;t.length!==0&&(i.v=``+i.v+t);var a=this.T.a.length;if(a!==0)if(n===``)i.h8(this.T);else{i.p();var o=this.T.a[0],s=``+$i(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.T.a[c],u=``+$i(l);i.v+=u,c=1+c|0}}return r.length!==0&&(i.v=``+i.v+r),e}),T.j=(function(e){return ca(this.bF(e|0))}),T.u=(function(e){return ca(this.bF(e))}),T.a2=(function(){return this.T}),new D().i(Pv,`scala.collection.mutable.ArraySeq$ofChar`,{b1:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Iv(e){this.am=null,this.am=e}T=Iv.prototype=new av,T.constructor=Iv;function Lv(){}Lv.prototype=T,T.p=(function(){return this.am.a.length}),T.r=(function(){var e=V();return e.fT(this.am,e.y)}),T.l=(function(e){return e instanceof Iv?F().g7(this.am,e.am):iv.prototype.l.call(this,e)}),T.s=(function(){return new Qg(this.am)}),T.bH=(function(e){return this.am.a[e]}),T.j=(function(e){return this.bH(e|0)}),T.u=(function(e){return this.bH(e)}),T.a2=(function(){return this.am}),new D().i(Iv,`scala.collection.mutable.ArraySeq$ofDouble`,{b2:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Rv(e){this.an=null,this.an=e}T=Rv.prototype=new av,T.constructor=Rv;function zv(){}zv.prototype=T,T.p=(function(){return this.an.a.length}),T.r=(function(){var e=V();return e.fU(this.an,e.y)}),T.l=(function(e){return e instanceof Rv?F().g8(this.an,e.an):iv.prototype.l.call(this,e)}),T.s=(function(){return new e_(this.an)}),T.bI=(function(e){return this.an.a[e]}),T.j=(function(e){return this.bI(e|0)}),T.u=(function(e){return this.bI(e)}),T.a2=(function(){return this.an}),new D().i(Rv,`scala.collection.mutable.ArraySeq$ofFloat`,{b3:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Bv(e){this.ao=null,this.ao=e}T=Bv.prototype=new av,T.constructor=Bv;function Vv(){}Vv.prototype=T,T.p=(function(){return this.ao.a.length}),T.r=(function(){var e=V();return e.fV(this.ao,e.y)}),T.l=(function(e){return e instanceof Bv?F().g9(this.ao,e.ao):iv.prototype.l.call(this,e)}),T.s=(function(){return new n_(this.ao)}),T.bJ=(function(e){return this.ao.a[e]}),T.j=(function(e){return this.bJ(e|0)}),T.u=(function(e){return this.bJ(e)}),T.a2=(function(){return this.ao}),new D().i(Bv,`scala.collection.mutable.ArraySeq$ofInt`,{b4:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Hv(e){this.ap=null,this.ap=e}T=Hv.prototype=new av,T.constructor=Hv;function Uv(){}Uv.prototype=T,T.p=(function(){return this.ap.a.length}),T.r=(function(){var e=V();return e.fW(this.ap,e.y)}),T.l=(function(e){return e instanceof Hv?F().ga(this.ap,e.ap):iv.prototype.l.call(this,e)}),T.s=(function(){return new i_(this.ap)}),T.bK=(function(e){return this.ap.a[e]}),T.j=(function(e){return this.bK(e|0)}),T.u=(function(e){return this.bK(e)}),T.a2=(function(){return this.ap}),new D().i(Hv,`scala.collection.mutable.ArraySeq$ofLong`,{b5:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Wv(e){this.aq=null,this.aq=e}T=Wv.prototype=new av,T.constructor=Wv;function Gv(){}Gv.prototype=T,T.p=(function(){return this.aq.a.length}),T.u=(function(e){return this.aq.a[e]}),T.r=(function(){var e=V();return e.fQ(this.aq,e.y)}),T.l=(function(e){return e instanceof Wv?Td().gd(this.aq,e.aq):iv.prototype.l.call(this,e)}),T.s=(function(){return Ag(new jg,this.aq)}),T.j=(function(e){return this.u(e|0)}),T.a2=(function(){return this.aq}),new D().i(Wv,`scala.collection.mutable.ArraySeq$ofRef`,{b6:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Kv(e){this.ar=null,this.ar=e}T=Kv.prototype=new av,T.constructor=Kv;function qv(){}qv.prototype=T,T.p=(function(){return this.ar.a.length}),T.bG=(function(e){return this.ar.a[e]}),T.r=(function(){var e=V();return e.fX(this.ar,e.y)}),T.l=(function(e){return e instanceof Kv?F().gb(this.ar,e.ar):iv.prototype.l.call(this,e)}),T.s=(function(){return new o_(this.ar)}),T.j=(function(e){return this.bG(e|0)}),T.u=(function(e){return this.bG(e)}),T.a2=(function(){return this.ar}),new D().i(Kv,`scala.collection.mutable.ArraySeq$ofShort`,{b7:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Jv(e){this.aK=null,this.aK=e}T=Jv.prototype=new av,T.constructor=Jv;function Yv(){}Yv.prototype=T,T.p=(function(){return this.aK.a.length}),T.r=(function(){var e=V();return e.fY(this.aK,e.y)}),T.l=(function(e){return e instanceof Jv?this.aK.a.length===e.aK.a.length:iv.prototype.l.call(this,e)}),T.s=(function(){return new c_(this.aK)}),T.bL=(function(e){}),T.j=(function(e){this.bL(e|0)}),T.u=(function(e){this.bL(e)}),T.a2=(function(){return this.aK}),new D().i(Jv,`scala.collection.mutable.ArraySeq$ofUnit`,{b8:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Xv(e,t){this.db=null,this.ch=null,this.db=e,this.ch=t}T=Xv.prototype=new kv,T.constructor=Xv;function Zv(){}Zv.prototype=T,T.a4=(function(){return this.db}),T.X=(function(){return`::`}),T.V=(function(){return 2}),T.W=(function(e){switch(e){case 0:return this.db;case 1:return this.ch;default:return z().aM(e)}}),T.a8=(function(){return new Wh(this)}),T.P=(function(){return this.ch}),new D().i(Xv,`scala.collection.immutable.$colon$colon`,{eg:1,ab:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aX:1,a2:1,aJ:1,aY:1,aL:1,q:1,p:1,A:1,aM:1,a:1,M:1});function Qv(){}T=Qv.prototype=new kv,T.constructor=Qv;function $v(){}$v.prototype=T,T.id=(function(){throw new sh(`head of empty list`)}),T.jg=(function(){throw new oh(`tail of empty list`)}),T.D=(function(){return 0}),T.s=(function(){return q().z}),T.X=(function(){return`Nil`}),T.V=(function(){return 0}),T.W=(function(e){return z().aM(e)}),T.a8=(function(){return new Wh(this)}),T.P=(function(){this.jg()}),T.a4=(function(){this.id()}),new D().i(Qv,`scala.collection.immutable.Nil$`,{ej:1,ab:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aX:1,a2:1,aJ:1,aY:1,aL:1,q:1,p:1,A:1,aM:1,a:1,M:1});var ey;function ty(){return ey||=new Qv,ey}function ny(e,t){return e.O=t,e}function ry(e){return ny(e,new $p),e}function iy(){this.O=null}T=iy.prototype=new $_,T.constructor=iy;function ay(){}ay.prototype=T,T.bh=(function(){return`IndexedSeq`}),T.s=(function(){return new Pg(new G_(this))}),T.at=(function(e){var t=this.O.p();return t===e?0:t<e?-1:1}),T.fL=(function(e){return Pd(this,e)}),T.p=(function(){return this.O.p()}),T.D=(function(){return this.O.p()}),T.h3=(function(e){var t=this.O,n=``+$i(e);return t.v+=n,this}),T.t=(function(){return this.O.v}),T.o=(function(){return this.O.p()===0}),T.gy=(function(){return this.O.v}),T.di=(function(e){return this.h3(la(e))}),T.j=(function(e){var t=e|0;return ca(this.O.g1(t))}),T.u=(function(e){return ca(this.O.g1(e))}),new D().i(iy,`scala.collection.mutable.StringBuilder`,{er:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ep:1,b9:1,bb:1,ba:1,D:1,n:1,o:1,E:1,a8:1,a:1});function oy(e,t){return e.aL=t,e}function sy(e){return oy(e,[]),e}function cy(){this.aL=null}T=cy.prototype=new tv,T.constructor=cy;function ly(){}ly.prototype=T,T.bh=(function(){return`IndexedSeq`}),T.s=(function(){return new Pg(new G_(this))}),T.at=(function(e){var t=this.aL.length|0;return t===e?0:t<e?-1:1}),T.u=(function(e){return this.aL[e]}),T.p=(function(){return this.aL.length|0}),T.D=(function(){return this.aL.length|0}),T.b8=(function(){return`WrappedArray`}),T.gy=(function(){return this}),T.di=(function(e){return this.aL.push(e),this}),T.j=(function(e){var t=e|0;return this.aL[t]}),new D().i(cy,`scala.scalajs.js.WrappedArray`,{eS:1,ek:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,em:1,bb:1,ba:1,eq:1,q:1,p:1,D:1,n:1,o:1,E:1,eo:1,b9:1,a:1}),Ui=new I(0,0),Ta.z=Ui,ac(new(xg.r()).C([]));