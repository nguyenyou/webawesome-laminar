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
const d=globalThis,f=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,p=Symbol(),m=new WeakMap;var h=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(f&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=m.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&m.set(t,e))}return e}toString(){return this.cssText}};const g=e=>new h(typeof e==`string`?e:e+``,void 0,p),_=(e,t)=>{if(f)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ee=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return g(t)})(e):e,{is:v,defineProperty:te,getOwnPropertyDescriptor:ne,getOwnPropertyNames:re,getOwnPropertySymbols:ie,getPrototypeOf:ae}=Object,y=globalThis,oe=y.trustedTypes,se=oe?oe.emptyScript:``,ce=y.reactiveElementPolyfillSupport,le=(e,t)=>e,ue={toAttribute(e,t){switch(t){case Boolean:e=e?se:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},de=(e,t)=>!v(e,t),fe={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:de};Symbol.metadata??=Symbol(`metadata`),y.litPropertyMetadata??=new WeakMap;var pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ne(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(le(`elementProperties`)))return;let e=ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le(`properties`))){let e=this.properties,t=[...re(e),...ie(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ee(e))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ue:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ue:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??de)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:`open`},pe[le(`elementProperties`)]=new Map,pe[le(`finalized`)]=new Map,ce?.({ReactiveElement:pe}),(y.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const me=globalThis,he=me.trustedTypes,ge=he?he.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_e=`$lit$`,ve=`lit$${Math.random().toFixed(9).slice(2)}$`,ye=`?`+ve,be=`<${ye}>`,xe=document,Se=()=>xe.createComment(``),Ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,we=Array.isArray,Te=e=>we(e)||typeof e?.[Symbol.iterator]==`function`,Ee=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oe=/-->/g,ke=/>/g,Ae=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),je=/'/g,Me=/"/g,Ne=/^(?:script|style|textarea|title)$/i,Pe=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Fe=Symbol.for(`lit-noChange`),b=Symbol.for(`lit-nothing`),Ie=new WeakMap,Le=xe.createTreeWalker(xe,129);function Re(e,t){if(!we(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ge===void 0?t:ge.createHTML(t)}const ze=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=De;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===De?c[1]===`!--`?o=Oe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ae):(Ne.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ae):o=ke:o===Ae?c[0]===`>`?(o=i??De,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ae:c[3]===`"`?Me:je):o===Me||o===je?o=Ae:o===Oe||o===ke?o=De:(o=Ae,i=void 0);let d=o===Ae&&e[t+1].startsWith(`/>`)?` `:``;a+=o===De?n+be:l>=0?(r.push(s),n.slice(0,l)+_e+n.slice(l)+ve+d):n+ve+(l===-2?t:d)}return[Re(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Be=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ze(t,n);if(this.el=e.createElement(l,r),Le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_e)){let t=u[o++],n=i.getAttribute(e).split(ve),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ge:r[1]===`?`?Ke:r[1]===`@`?qe:We}),i.removeAttribute(e)}else e.startsWith(ve)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ne.test(i.tagName)){let e=i.textContent.split(ve),t=e.length-1;if(t>0){i.textContent=he?he.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Se()),Le.nextNode(),c.push({type:2,index:++a});i.append(e[t],Se())}}}else if(i.nodeType===8)if(i.data===ye)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ve,e+1))!==-1;)c.push({type:7,index:a}),e+=ve.length-1}a++}}static createElement(e,t){let n=xe.createElement(`template`);return n.innerHTML=e,n}};function Ve(e,t,n=e,r){if(t===Fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ve(e,i._$AS(e,t.values),i,r)),t}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??xe).importNode(t,!0);Le.currentNode=r;let i=Le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ue(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Le.nextNode(),a++)}return Le.currentNode=xe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ue=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),Ce(e)?e===b||e==null||e===``?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Te(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&Ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Be.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new He(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new Be(e)),t}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Se()),this.O(Se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ve(this,e,t,0),a=!Ce(e)||e!==this._$AH&&e!==Fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ve(this,r[n+o],t,o),s===Fe&&(s=this._$AH[o]),a||=!Ce(s)||s!==this._$AH[o],s===b?e=b:e!==b&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ge=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Ke=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},qe=class extends We{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ve(this,e,t,0)??b)===Fe)return;let n=this._$AH,r=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}};const Ye={M:_e,P:ve,A:ye,C:1,L:ze,R:He,D:Te,V:Ve,I:Ue,H:We,N:Ke,U:qe,B:Ge,F:Je},Xe=me.litHtmlPolyfillSupport;Xe?.(Be,Ue),(me.litHtmlVersions??=[]).push(`3.3.1`);const Ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ue(t.insertBefore(Se(),e),e,void 0,n??{})}return i._$AI(e),i},Qe=globalThis;var $e=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fe}};$e._$litElement$=!0,$e.finalized=!0,Qe.litElementHydrateSupport?.({LitElement:$e});const et=Qe.litElementPolyfillSupport;et?.({LitElement:$e}),(Qe.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},nt={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:de},rt=(e=nt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function x(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e){return x({...e,state:!0,attribute:!1})}
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
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var st=`:host {
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
`,ct,lt=class extends $e{constructor(){super(),l(this,ct,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[st,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?g(e):e)}attributeChangedCallback(e,t,n){c(this,ct)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),u(this,ct,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ct=new WeakMap,o([x()],lt.prototype,`dir`,2),o([x()],lt.prototype,`lang`,2),o([x({type:Boolean,reflect:!0,attribute:`did-ssr`})],lt.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ut=`:host {
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
`,dt=class extends lt{constructor(){super(...arguments),this.orientation=`horizontal`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}};dt.css=ut,o([x({reflect:!0})],dt.prototype,`orientation`,2),o([n(`orientation`)],dt.prototype,`handleVerticalChange`,1),dt=o([tt(`wa-divider`)],dt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ft=t({default:()=>dt}),pt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},mt=``;function ht(e){mt=e}function gt(){if(!mt){let e=document.querySelector(`[data-fa-kit-code]`);e&&ht(e.getAttribute(`data-fa-kit-code`)||``)}return mt}var _t=`7.0.1`;function vt(e,t,n){let r=gt(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${_t}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${_t}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${_t}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${_t}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${_t}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${_t}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${_t}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${_t}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${_t}/svgs/${a}/${e}.svg`)}var yt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>vt(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function bt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var xt={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},St={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=xt[n][e]??xt.regular[e]??xt.regular[`circle-question`];return r?bt(r):``}},Ct=`classic`,wt=[yt,St],Tt=[];function Et(e){Tt.push(e)}function Dt(e){Tt=Tt.filter(t=>t!==e)}function Ot(e){return wt.find(t=>t.name===e)}function kt(){return Ct}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:At}=Ye,jt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Mt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Nt=`:host {
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
`,Pt=Symbol(),Ft=Symbol(),It,Lt=new Map,S=class extends lt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Pe`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Pt:Ft}catch{return Ft}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Pt;It||=new DOMParser;let r=It.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Pt}catch{return Pt}}}connectedCallback(){super.connectedCallback(),Et(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Dt(this)}getIconSource(){let e=Ot(this.library),t=this.family||kt();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?Ot(this.library):void 0;if(!e){this.svg=null;return}let r=Lt.get(e);r||(r=this.resolveIcon(e,n),Lt.set(e,r));let i=await r;if(i===Ft&&Lt.delete(e),e===this.getIconSource().url){if(jt(i)){this.svg=i;return}switch(i){case Ft:case Pt:this.svg=null,this.dispatchEvent(new Mt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new pt)}}}updated(e){super.updated(e);let t=Ot(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Pe`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};S.css=Nt,o([it()],S.prototype,`svg`,2),o([x({reflect:!0})],S.prototype,`name`,2),o([x({reflect:!0})],S.prototype,`family`,2),o([x({reflect:!0})],S.prototype,`variant`,2),o([x({attribute:`auto-width`,type:Boolean,reflect:!0})],S.prototype,`autoWidth`,2),o([x({attribute:`swap-opacity`,type:Boolean,reflect:!0})],S.prototype,`swapOpacity`,2),o([x()],S.prototype,`src`,2),o([x()],S.prototype,`label`,2),o([x({reflect:!0})],S.prototype,`library`,2),o([n(`label`)],S.prototype,`handleLabelChange`,1),o([n([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],S.prototype,`setIcon`,1),S=o([tt(`wa-icon`)],S);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Rt=t({default:()=>S});const zt=new Set,Bt=new Map;let Vt,Ht=`ltr`,Ut=`en`;const Wt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Wt){let e=new MutationObserver(Kt);Ht=document.documentElement.dir||`ltr`,Ut=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Gt(...e){e.map(e=>{let t=e.$code.toLowerCase();Bt.has(t)?Bt.set(t,Object.assign(Object.assign({},Bt.get(t)),e)):Bt.set(t,e),Vt||=e}),Kt()}function Kt(){Wt&&(Ht=document.documentElement.dir||`ltr`,Ut=document.documentElement.lang||navigator.language),[...zt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var qt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){zt.add(this.host)}hostDisconnected(){zt.delete(this.host)}dir(){return`${this.host.dir||Ht}`.toLowerCase()}lang(){return`${this.host.lang||Ut}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:Bt.get(`${n}-${r}`),secondary:Bt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Vt&&Vt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Vt&&Vt[e])i=Vt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Jt={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Gt(Jt);var Yt=Jt,Xt=class extends qt{};Gt(Yt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Zt(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>Zt(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return Zt(n,--t)}return t>-1?Zt(e,--t):e.textContent??``}return n.hasChildNodes()?Zt(n.childNodes,--t):``}var Qt=`:host {
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
`,$t=class extends lt{constructor(){super(...arguments),this.localize=new Xt(this),this.isInitialized=!1,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.defaultLabel=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined(`wa-select`).then(()=>{let e=this.closest(`wa-select`);e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}):this.isInitialized=!0}willUpdate(e){if(e.has(`defaultSelected`)&&!this.closest(`wa-select`)?.hasInteracted){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}super.willUpdate(e)}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected),this.handleDefaultSlotChange()),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=Zt(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){return Pe`
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
    `}};$t.css=Qt,o([ot(`.label`)],$t.prototype,`defaultSlot`,2),o([it()],$t.prototype,`current`,2),o([x({reflect:!0})],$t.prototype,`value`,2),o([x({type:Boolean})],$t.prototype,`disabled`,2),o([x({type:Boolean,attribute:!1})],$t.prototype,`selected`,2),o([x({type:Boolean,attribute:`selected`})],$t.prototype,`defaultSelected`,2),o([x()],$t.prototype,`label`,1),o([it()],$t.prototype,`defaultLabel`,2),$t=o([tt(`wa-option`)],$t);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var en=t({default:()=>$t});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function tn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function nn(e,t,n=`vertical`,r=`smooth`){let i=tn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var rn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},an=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||=Object.assign(document.createElement(`input`),{required:!0}),n||=`value`;let r={observedAttributes:[`required`],message:t.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},on=`:host {
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
`,sn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},cn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},un=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},dn=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},fn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),pn=class extends lt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new dn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[fn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};pn.formAssociated=!0,o([x({reflect:!0})],pn.prototype,`name`,2),o([x({type:Boolean})],pn.prototype,`disabled`,2),o([x({state:!0,attribute:!1})],pn.prototype,`valueHasChanged`,2),o([x({state:!0,attribute:!1})],pn.prototype,`hasInteracted`,2),o([x({attribute:`custom-error`,reflect:!0})],pn.prototype,`customError`,2),o([x({attribute:!1,state:!0,type:Object})],pn.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var mn=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},hn=`@layer wa-utilities {
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
function gn(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function _n(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const vn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},yn=e=>(...t)=>({_$litDirective$:e,values:t});var bn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const xn=yn(class extends bn{constructor(e){if(super(e),e.type!==vn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Fe}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Sn=class extends bn{constructor(e){if(super(e),this.it=b,e.type!==vn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===b||e==null)return this._t=void 0,this.it=e;if(e===Fe)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Sn.directiveName=`unsafeHTML`,Sn.resultType=1;const Cn=yn(Sn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var wn=`:host {
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
`,C=class extends pn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new mn(this,`hint`,`label`),this.localize=new Xt(this),this.typeToSelectString=``,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=e=>Pe`
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
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[an({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new rn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;let n=t;if(!n){let t=e.target.closest(`wa-tag[part~=tag]`);if(t){let e=this.shadowRoot?.querySelector(`[part="tags"]`);if(e){let r=Array.from(e.children).indexOf(t);r>=0&&r<this.selectedOptions.length&&(n=this.selectedOptions[r])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll(`wa-option`)]:[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected});let e=new Set(this.selectedOptions.map(e=>e.value));if(e.size>0||this._value){let t=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...e),this.requestUpdate(`value`,t)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Cn(n):n:null}else if(t===this.maxOptionsVisible)return Pe`
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
        `;return null})}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new un;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await _n(this.popup.popup,`show`),this.currentOption&&nn(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new cn)}else{let e=new ln;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await _n(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new sn)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,gn(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,gn(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return Pe`
      <div
        part="form-control"
        class=${xn({"form-control":!0,"form-control-has-label":n})}
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
            class=${xn({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":a})}
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
              ${this.multiple&&this.hasUpdated?Pe`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?Pe`
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
          class=${xn({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};C.css=[wn,on,hn],o([ot(`.select`)],C.prototype,`popup`,2),o([ot(`.combobox`)],C.prototype,`combobox`,2),o([ot(`.display-input`)],C.prototype,`displayInput`,2),o([ot(`.value-input`)],C.prototype,`valueInput`,2),o([ot(`.listbox`)],C.prototype,`listbox`,2),o([it()],C.prototype,`displayLabel`,2),o([it()],C.prototype,`currentOption`,2),o([it()],C.prototype,`selectedOptions`,2),o([it()],C.prototype,`optionValues`,2),o([x()],C.prototype,`name`,2),o([x({attribute:!1})],C.prototype,`defaultValue`,1),o([x({attribute:`value`,reflect:!1})],C.prototype,`value`,1),o([x({reflect:!0})],C.prototype,`size`,2),o([x()],C.prototype,`placeholder`,2),o([x({type:Boolean,reflect:!0})],C.prototype,`multiple`,2),o([x({attribute:`max-options-visible`,type:Number})],C.prototype,`maxOptionsVisible`,2),o([x({type:Boolean})],C.prototype,`disabled`,2),o([x({attribute:`with-clear`,type:Boolean})],C.prototype,`withClear`,2),o([x({type:Boolean,reflect:!0})],C.prototype,`open`,2),o([x({reflect:!0})],C.prototype,`appearance`,2),o([x({type:Boolean,reflect:!0})],C.prototype,`pill`,2),o([x()],C.prototype,`label`,2),o([x({reflect:!0})],C.prototype,`placement`,2),o([x({attribute:`hint`})],C.prototype,`hint`,2),o([x({attribute:`with-label`,type:Boolean})],C.prototype,`withLabel`,2),o([x({attribute:`with-hint`,type:Boolean})],C.prototype,`withHint`,2),o([x({reflect:!0})],C.prototype,`form`,2),o([x({type:Boolean,reflect:!0})],C.prototype,`required`,2),o([x({attribute:!1})],C.prototype,`getTag`,2),o([n(`disabled`,{waitUntilFirstUpdate:!0})],C.prototype,`handleDisabledChange`,1),o([n(`value`,{waitUntilFirstUpdate:!0})],C.prototype,`handleValueChange`,1),o([n(`open`,{waitUntilFirstUpdate:!0})],C.prototype,`handleOpenChange`,1),C=o([tt(`wa-select`)],C);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Tn=`@layer wa-utilities {
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
`,En=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Dn=`@layer wa-component {
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
`,On=class extends lt{constructor(){super(...arguments),this.localize=new Xt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`medium`,this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new En)}render(){return Pe`
      <slot part="content" class="content"></slot>

      ${this.withRemove?Pe`
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
    `}};On.css=[Dn,Tn,hn],o([x({reflect:!0})],On.prototype,`variant`,2),o([x({reflect:!0})],On.prototype,`appearance`,2),o([x({reflect:!0})],On.prototype,`size`,2),o([x({type:Boolean,reflect:!0})],On.prototype,`pill`,2),o([x({attribute:`with-remove`,type:Boolean})],On.prototype,`withRemove`,2),On=o([tt(`wa-tag`)],On);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var kn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}};const An=Math.min,jn=Math.max,Mn=Math.round,Nn=Math.floor,Pn=e=>({x:e,y:e}),Fn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},In={start:`end`,end:`start`};function Ln(e,t,n){return jn(e,An(t,n))}function Rn(e,t){return typeof e==`function`?e(t):e}function zn(e){return e.split(`-`)[0]}function Bn(e){return e.split(`-`)[1]}function Vn(e){return e===`x`?`y`:`x`}function Hn(e){return e===`y`?`height`:`width`}const Un=new Set([`top`,`bottom`]);function Wn(e){return Un.has(zn(e))?`y`:`x`}function Gn(e){return Vn(Wn(e))}function Kn(e,t,n){n===void 0&&(n=!1);let r=Bn(e),i=Gn(e),a=Hn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=tr(o)),[o,tr(o)]}function qn(e){let t=tr(e);return[Jn(e),t,Jn(t)]}function Jn(e){return e.replace(/start|end/g,e=>In[e])}const Yn=[`left`,`right`],Xn=[`right`,`left`],Zn=[`top`,`bottom`],Qn=[`bottom`,`top`];function $n(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Xn:Yn:t?Yn:Xn;case`left`:case`right`:return t?Zn:Qn;default:return[]}}function er(e,t,n,r){let i=Bn(e),a=$n(zn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Jn)))),a}function tr(e){return e.replace(/left|right|bottom|top/g,e=>Fn[e])}function nr(e){return{top:0,right:0,bottom:0,left:0,...e}}function rr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:nr(e)}function ir(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ar(e,t,n){let{reference:r,floating:i}=e,a=Wn(t),o=Gn(t),s=Hn(o),c=zn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Bn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const or=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ar(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:ee,reset:v}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...ee}},v&&m<=50&&(m++,typeof v==`object`&&(v.placement&&(f=v.placement),v.rects&&(l=v.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:d}=ar(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function sr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Rn(t,e),p=rr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ir(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),ee=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},v=ir(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-v.top+p.top)/ee.y,bottom:(v.bottom-h.bottom+p.bottom)/ee.y,left:(h.left-v.left+p.left)/ee.x,right:(v.right-h.right+p.right)/ee.x}}const cr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Rn(e,t)||{};if(l==null)return{};let d=rr(u),f={x:n,y:r},p=Gn(i),m=Hn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,ee=g?`bottom`:`right`,v=g?`clientHeight`:`clientWidth`,te=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ne=f[p]-a.reference[p],re=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),ie=re?re[v]:0;(!ie||!await(o.isElement==null?void 0:o.isElement(re)))&&(ie=s.floating[v]||a.floating[m]);let ae=te/2-ne/2,y=ie/2-h[m]/2-1,oe=An(d[_],y),se=An(d[ee],y),ce=oe,le=ie-h[m]-se,ue=ie/2-h[m]/2+ae,de=Ln(ce,ue,le),fe=!c.arrow&&Bn(i)!=null&&ue!==de&&a.reference[m]/2-(ue<ce?oe:se)-h[m]/2<0,pe=fe?ue<ce?ue-ce:ue-le:0;return{[p]:f[p]+pe,data:{[p]:de,centerOffset:ue-de-pe,...fe&&{alignmentOffset:pe}},reset:fe}}}),lr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Rn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=zn(r),_=Wn(o),ee=zn(o)===o,v=await(s.isRTL==null?void 0:s.isRTL(c.floating)),te=d||(ee||!m?[tr(o)]:qn(o)),ne=p!==`none`;!d&&ne&&te.push(...er(o,m,p,v));let re=[o,...te],ie=await sr(t,h),ae=[],y=i.flip?.overflows||[];if(l&&ae.push(ie[g]),u){let e=Kn(r,a,v);ae.push(ie[e[0]],ie[e[1]])}if(y=[...y,{placement:r,overflows:ae}],!ae.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=re[e];if(t&&(!(u===`alignment`&&_!==Wn(t))||y.every(e=>Wn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:y},reset:{placement:t}};let n=y.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=y.filter(e=>{if(ne){let t=Wn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},ur=new Set([`left`,`top`]);async function dr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=zn(n),s=Bn(n),c=Wn(n)===`y`,l=ur.has(o)?-1:1,u=a&&c?-1:1,d=Rn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const fr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await dr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},pr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Rn(e,t),l={x:n,y:r},u=await sr(t,c),d=Wn(zn(i)),f=Vn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Ln(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Ln(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},mr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Rn(e,t),u=await sr(t,l),d=zn(i),f=Bn(i),p=Wn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let ee=h-u.top-u.bottom,v=m-u.left-u.right,te=An(h-u[g],ee),ne=An(m-u[_],v),re=!t.middlewareData.shift,ie=te,ae=ne;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ae=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(ie=ee),re&&!f){let e=jn(u.left,0),t=jn(u.right,0),n=jn(u.top,0),r=jn(u.bottom,0);p?ae=m-2*(e!==0||t!==0?e+t:jn(u.left,u.right)):ie=h-2*(n!==0||r!==0?n+r:jn(u.top,u.bottom))}await c({...t,availableWidth:ae,availableHeight:ie});let y=await o.getDimensions(s.floating);return m!==y.width||h!==y.height?{reset:{rects:!0}}:{}}}};function hr(){return typeof window<`u`}function gr(e){return yr(e)?(e.nodeName||``).toLowerCase():`#document`}function _r(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function vr(e){return((yr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function yr(e){return hr()?e instanceof Node||e instanceof _r(e).Node:!1}function br(e){return hr()?e instanceof Element||e instanceof _r(e).Element:!1}function xr(e){return hr()?e instanceof HTMLElement||e instanceof _r(e).HTMLElement:!1}function Sr(e){return!hr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof _r(e).ShadowRoot}const Cr=new Set([`inline`,`contents`]);function wr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Lr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Cr.has(i)}const Tr=new Set([`table`,`td`,`th`]);function Er(e){return Tr.has(gr(e))}const Dr=[`:popover-open`,`:modal`];function Or(e){return Dr.some(t=>{try{return e.matches(t)}catch{return!1}})}const kr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Ar=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],jr=[`paint`,`layout`,`strict`,`content`];function Mr(e){let t=Pr(),n=br(e)?Lr(e):e;return kr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Ar.some(e=>(n.willChange||``).includes(e))||jr.some(e=>(n.contain||``).includes(e))}function Nr(e){let t=zr(e);for(;xr(t)&&!Ir(t);){if(Mr(t))return t;if(Or(t))return null;t=zr(t)}return null}function Pr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Fr=new Set([`html`,`body`,`#document`]);function Ir(e){return Fr.has(gr(e))}function Lr(e){return _r(e).getComputedStyle(e)}function Rr(e){return br(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function zr(e){if(gr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Sr(e)&&e.host||vr(e);return Sr(t)?t.host:t}function Br(e){let t=zr(e);return Ir(t)?e.ownerDocument?e.ownerDocument.body:e.body:xr(t)&&wr(t)?t:Br(t)}function Vr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Br(e),i=r===e.ownerDocument?.body,a=_r(r);if(i){let e=Hr(a);return t.concat(a,a.visualViewport||[],wr(r)?r:[],e&&n?Vr(e):[])}return t.concat(r,Vr(r,[],n))}function Hr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ur(e){let t=Lr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=xr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Mn(n)!==a||Mn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Wr(e){return br(e)?e:e.contextElement}function Gr(e){let t=Wr(e);if(!xr(t))return Pn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ur(t),o=(a?Mn(n.width):n.width)/r,s=(a?Mn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Kr=Pn(0);function qr(e){let t=_r(e);return!Pr()||!t.visualViewport?Kr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Jr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==_r(e)?!1:t}function Yr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Wr(e),o=Pn(1);t&&(r?br(r)&&(o=Gr(r)):o=Gr(e));let s=Jr(a,n,r)?qr(a):Pn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=_r(a),t=r&&br(r)?_r(r):r,n=e,i=Hr(n);for(;i&&r&&t!==n;){let e=Gr(i),t=i.getBoundingClientRect(),r=Lr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=_r(i),i=Hr(n)}}return ir({width:u,height:d,x:c,y:l})}function Xr(e,t){let n=Rr(e).scrollLeft;return t?t.left+n:Yr(vr(e)).left+n}function Zr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Xr(e,n),y:n.top+t.scrollTop}}function Qr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=vr(r),s=t?Or(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Pn(1),u=Pn(0),d=xr(r);if((d||!d&&!a)&&((gr(r)!==`body`||wr(o))&&(c=Rr(r)),xr(r))){let e=Yr(r);l=Gr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Zr(o,c):Pn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function $r(e){return Array.from(e.getClientRects())}function ei(e){let t=vr(e),n=Rr(e),r=e.ownerDocument.body,i=jn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=jn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Xr(e),s=-n.scrollTop;return Lr(r).direction===`rtl`&&(o+=jn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ti(e,t){let n=_r(e),r=vr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Pr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Xr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const ni=new Set([`absolute`,`fixed`]);function ri(e,t){let n=Yr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=xr(e)?Gr(e):Pn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ii(e,t,n){let r;if(t===`viewport`)r=ti(e,n);else if(t===`document`)r=ei(vr(e));else if(br(t))r=ri(t,n);else{let n=qr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ir(r)}function ai(e,t){let n=zr(e);return n===t||!br(n)||Ir(n)?!1:Lr(n).position===`fixed`||ai(n,t)}function oi(e,t){let n=t.get(e);if(n)return n;let r=Vr(e,[],!1).filter(e=>br(e)&&gr(e)!==`body`),i=null,a=Lr(e).position===`fixed`,o=a?zr(e):e;for(;br(o)&&!Ir(o);){let t=Lr(o),n=Mr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&ni.has(i.position)||wr(o)&&!n&&ai(e,o))?r=r.filter(e=>e!==o):i=t,o=zr(o)}return t.set(e,r),r}function si(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Or(t)?[]:oi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=ii(t,n,i);return e.top=jn(r.top,e.top),e.right=An(r.right,e.right),e.bottom=An(r.bottom,e.bottom),e.left=jn(r.left,e.left),e},ii(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function ci(e){let{width:t,height:n}=Ur(e);return{width:t,height:n}}function li(e,t,n){let r=xr(t),i=vr(t),a=n===`fixed`,o=Yr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Pn(0);function l(){c.x=Xr(i)}if(r||!r&&!a)if((gr(t)!==`body`||wr(i))&&(s=Rr(t)),r){let e=Yr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Zr(i,s):Pn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ui(e){return Lr(e).position===`static`}function di(e,t){if(!xr(e)||Lr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return vr(e)===n&&(n=n.ownerDocument.body),n}function fi(e,t){let n=_r(e);if(Or(e))return n;if(!xr(e)){let t=zr(e);for(;t&&!Ir(t);){if(br(t)&&!ui(t))return t;t=zr(t)}return n}let r=di(e,t);for(;r&&Er(r)&&ui(r);)r=di(r,t);return r&&Ir(r)&&ui(r)&&!Mr(r)?n:r||Nr(e)||n}const pi=async function(e){let t=this.getOffsetParent||fi,n=this.getDimensions,r=await n(e.floating);return{reference:li(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function mi(e){return Lr(e).direction===`rtl`}const hi={convertOffsetParentRelativeRectToViewportRelativeRect:Qr,getDocumentElement:vr,getClippingRect:si,getOffsetParent:fi,getElementRects:pi,getClientRects:$r,getDimensions:ci,getScale:Gr,isElement:br,isRTL:mi};function gi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _i(e,t){let n=null,r,i=vr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Nn(d),h=Nn(i.clientWidth-(u+f)),g=Nn(i.clientHeight-(d+p)),_=Nn(u),ee={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:jn(0,An(1,c))||1},v=!0;function te(t){let n=t[0].intersectionRatio;if(n!==c){if(!v)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!gi(l,e.getBoundingClientRect())&&o(),v=!1}try{n=new IntersectionObserver(te,{...ee,root:i.ownerDocument})}catch{n=new IntersectionObserver(te,ee)}n.observe(e)}return o(!0),a}function vi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Wr(e),u=i||a?[...l?Vr(l):[],...Vr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?_i(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Yr(e):null;c&&g();function g(){let t=Yr(e);h&&!gi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const yi=fr,bi=pr,xi=lr,Si=mr,Ci=cr,wi=(e,t,n)=>{let r=new Map,i={platform:hi,...n},a={...i.platform,_c:r};return or(e,t,{...i,platform:a})};function Ti(e){return Di(e)}function Ei(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Di(e){for(let t=e;t;t=Ei(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ei(e);t;t=Ei(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Mr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Oi=`:host {
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
`;function ki(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ai=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),w=class extends lt{constructor(){super(...arguments),this.localize=new Xt(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||ki(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=vi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[yi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Si({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;Ai&&!ki(this.anchor)&&this.boundary===`scroll`&&(t=Vr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(xi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(bi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Si({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ci({element:this.arrowEl,padding:this.arrowPadding}));let n=Ai?e=>hi.getOffsetParent(e,Ti):hi.getOffsetParent;wi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Ai?`absolute`:`fixed`,platform:{...hi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new kn)}render(){return Pe`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${xn({popup:!0,"popup-active":this.active,"popup-fixed":!Ai,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Pe`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};w.css=Oi,o([ot(`.popup`)],w.prototype,`popup`,2),o([ot(`.arrow`)],w.prototype,`arrowEl`,2),o([x()],w.prototype,`anchor`,2),o([x({type:Boolean,reflect:!0})],w.prototype,`active`,2),o([x({reflect:!0})],w.prototype,`placement`,2),o([x()],w.prototype,`boundary`,2),o([x({type:Number})],w.prototype,`distance`,2),o([x({type:Number})],w.prototype,`skidding`,2),o([x({type:Boolean})],w.prototype,`arrow`,2),o([x({attribute:`arrow-placement`})],w.prototype,`arrowPlacement`,2),o([x({attribute:`arrow-padding`,type:Number})],w.prototype,`arrowPadding`,2),o([x({type:Boolean})],w.prototype,`flip`,2),o([x({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],w.prototype,`flipFallbackPlacements`,2),o([x({attribute:`flip-fallback-strategy`})],w.prototype,`flipFallbackStrategy`,2),o([x({type:Object})],w.prototype,`flipBoundary`,2),o([x({attribute:`flip-padding`,type:Number})],w.prototype,`flipPadding`,2),o([x({type:Boolean})],w.prototype,`shift`,2),o([x({type:Object})],w.prototype,`shiftBoundary`,2),o([x({attribute:`shift-padding`,type:Number})],w.prototype,`shiftPadding`,2),o([x({attribute:`auto-size`})],w.prototype,`autoSize`,2),o([x()],w.prototype,`sync`,2),o([x({type:Object})],w.prototype,`autoSizeBoundary`,2),o([x({attribute:`auto-size-padding`,type:Number})],w.prototype,`autoSizePadding`,2),o([x({attribute:`hover-bridge`,type:Boolean})],w.prototype,`hoverBridge`,2),w=o([tt(`wa-popup`)],w);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ji=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Mi=e=>e??b,Ni=Symbol.for(``),Pi=e=>{if(e?.r===Ni)return e?._$litStatic$},Fi=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Ni}),Ii=new Map,Li=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Pi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ii.get(e))===void 0&&(o.raw=o,Ii.set(e,t=o)),n=s}return e(t,...n)})(Pe);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ri=`@layer wa-component {
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
`,T=class extends pn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new mn(this,`[default]`,`start`,`end`),this.localize=new Xt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,ji()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new dn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Fi`a`:Fi`button`;return Li`
      <${t}
        part="base"
        class=${xn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${Mi(e?void 0:this.disabled)}
        type=${Mi(e?void 0:this.type)}
        title=${this.title}
        name=${Mi(e?void 0:this.name)}
        value=${Mi(e?void 0:this.value)}
        href=${Mi(e?this.href:void 0)}
        target=${Mi(e?this.target:void 0)}
        download=${Mi(e?this.download:void 0)}
        rel=${Mi(e&&this.rel?this.rel:void 0)}
        role=${Mi(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Li`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Li`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};T.shadowRootOptions={...pn.shadowRootOptions,delegatesFocus:!0},T.css=[Ri,Tn,hn],o([ot(`.button`)],T.prototype,`button`,2),o([ot(`slot:not([name])`)],T.prototype,`labelSlot`,2),o([it()],T.prototype,`invalid`,2),o([it()],T.prototype,`isIconButton`,2),o([x()],T.prototype,`title`,2),o([x({reflect:!0})],T.prototype,`variant`,2),o([x({reflect:!0})],T.prototype,`appearance`,2),o([x({reflect:!0})],T.prototype,`size`,2),o([x({attribute:`with-caret`,type:Boolean,reflect:!0})],T.prototype,`withCaret`,2),o([x({type:Boolean})],T.prototype,`disabled`,2),o([x({type:Boolean,reflect:!0})],T.prototype,`loading`,2),o([x({type:Boolean,reflect:!0})],T.prototype,`pill`,2),o([x()],T.prototype,`type`,2),o([x({reflect:!0})],T.prototype,`name`,2),o([x({reflect:!0})],T.prototype,`value`,2),o([x({reflect:!0})],T.prototype,`href`,2),o([x()],T.prototype,`target`,2),o([x()],T.prototype,`rel`,2),o([x()],T.prototype,`download`,2),o([x({reflect:!0})],T.prototype,`form`,2),o([x({attribute:`formaction`})],T.prototype,`formAction`,2),o([x({attribute:`formenctype`})],T.prototype,`formEnctype`,2),o([x({attribute:`formmethod`})],T.prototype,`formMethod`,2),o([x({attribute:`formnovalidate`,type:Boolean})],T.prototype,`formNoValidate`,2),o([x({attribute:`formtarget`})],T.prototype,`formTarget`,2),o([n(`disabled`,{waitUntilFirstUpdate:!0})],T.prototype,`handleDisabledChange`,1),T=o([tt(`wa-button`)],T);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var zi=`:host {
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
`,Bi=class extends lt{constructor(){super(...arguments),this.localize=new Xt(this)}render(){return Pe`
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
    `}};Bi.css=zi,Bi=o([tt(`wa-spinner`)],Bi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Vi=t({default:()=>C}),E;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Hi;function Ui(e){this.c=e}E=Ui.prototype,E.toString=(function(){return String.fromCharCode(this.c)});function Wi(e){switch(typeof e){case`string`:return Vg.l();case`number`:return aa(e)?e<<24>>24===e?dh.l():e<<16>>16===e?bh.l():Pg.l():oa(e)?Ng.l():Mg.l();case`boolean`:return lm.l();case`undefined`:return cl.l();default:return e instanceof L?Lg.l():e instanceof Ui?fm.l():e&&e.$classData?e.$classData.l():null}}function Gi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return aa(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:oa(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof L?`java.lang.Long`:e instanceof Ui?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.kr()}}function Ki(e,t){switch(typeof e){case`string`:return zg(e,t);case`number`:return Ag(e,t);case`boolean`:return sm(e,t);case`undefined`:return al(e,t);default:return e&&e.$classData||e===null?e.l(t):e instanceof L?Fg(e,t):e instanceof Ui?dm(ca(e),t):ua.prototype.l.call(e,t)}}function qi(e){switch(typeof e){case`string`:return Rg(e);case`number`:return jg(e);case`boolean`:return cm(e);case`undefined`:return ol(e);default:return e&&e.$classData||e===null?e.r():e instanceof L?Ig(e):e instanceof Ui?um(ca(e)):ua.prototype.r.call(e)}}function Ji(e){return e===void 0?`undefined`:e.toString()}function Yi(e,t){if(t===0)throw new uh(`/ by zero`);return e/t|0}function Xi(e,t){if(t===0)throw new uh(`/ by zero`);return e%t|0}function Zi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Qi(e){return String.fromCharCode(e)}function $i(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ea=0,ta=new WeakMap;function na(e){switch(typeof e){case`string`:return Rg(e);case`number`:return jg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Rg(n);default:if(e===null)return 0;var r=ta.get(e);return r===void 0&&(r=ea+1|0,ea=r,ta.set(e,r)),r}}function ra(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ia(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function aa(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function oa(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function sa(e){return new Ui(e)}sa(0);function ca(e){return e===null?0:e.c}function la(e){return e===null?Hi:e}function ua(){}E=ua.prototype,E.constructor=ua;function D(){}D.prototype=E,E.r=(function(){return na(this)}),E.l=(function(e){return this===e}),E.t=(function(){var e=this.r();return Gi(this)+`@`+(+(e>>>0)).toString(16)}),E.toString=(function(){return this.t()});function da(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}E=da.prototype=new D,E.constructor=da,E.ac=(function(e,t,n,r){$i(this.a,e,t.a,n,r)}),E.a8=(function(){return new da(this.a.slice())});function fa(){}fa.prototype=E;function pa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}E=pa.prototype=new D,E.constructor=pa,E.ac=(function(e,t,n,r){$i(this.a,e,t.a,n,r)}),E.a8=(function(){return new pa(this.a.slice())});function ma(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}E=ma.prototype=new D,E.constructor=ma,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new ma(this.a.slice())});function ha(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}E=ha.prototype=new D,E.constructor=ha,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new ha(this.a.slice())});function ga(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}E=ga.prototype=new D,E.constructor=ga,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new ga(this.a.slice())});function _a(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}E=_a.prototype=new D,E.constructor=_a,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new _a(this.a.slice())});function va(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Hi}else this.a=e}E=va.prototype=new D,E.constructor=va,E.ac=(function(e,t,n,r){$i(this.a,e,t.a,n,r)}),E.a8=(function(){return new va(this.a.slice())});function ya(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}E=ya.prototype=new D,E.constructor=ya,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new ya(this.a.slice())});function ba(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}E=ba.prototype=new D,E.constructor=ba,E.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),E.a8=(function(){return new ba(this.a.slice())});function O(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}E=O.prototype,E.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new O().y(this,r,i)),this}),E.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),E.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),E.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new fa;n.constructor=t,n.ac=(function(e,t,n,r){$i(this.a,e,t.a,n,r)}),n.a8=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===xa});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),E.r=(function(){return this.A||=new O().a(this),this.A}),E.l=(function(){return this.L||=new np(this),this.L}),E.R=(function(e){return this===e||this.F(e)}),E.S=(function(){return this.P?this.P.l():null}),E.Q=(function(){return this.O?this.O.l():null}),E.U=(function(e){if(this===Sa)throw ph(new mh);return new(this.r()).C(e)});var xa=new O;xa.n={},xa.E=`Ljava.lang.Object;`,xa.F=(e=>!e.X),xa.N=`java.lang.Object`,xa.I=(e=>e!==null),xa.A=new O().y(xa,da,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ua.prototype.$classData=xa;var Sa=new O().p(void 0,`V`,`void`,void 0,void 0);new O().p(!1,`Z`,`boolean`,pa,void 0);var Ca=new O().p(0,`C`,`char`,ma,Uint16Array);new O().p(0,`B`,`byte`,ha,Int8Array),new O().p(0,`S`,`short`,ga,Int16Array),new O().p(0,`I`,`int`,_a,Int32Array);var wa=new O().p(null,`J`,`long`,va,void 0);new O().p(0,`F`,`float`,ya,Float32Array),new O().p(0,`D`,`double`,ba,Float64Array);var Ta=new O().i(1,`com.raquo.airstream.core.InternalObserver`,{bo:1});function Ea(e){return Wi(e).ds()+`@`+e.r()}function Da(e){var t=e.cu();return t===void 0?e.cp():t}function Oa(){Aa=this,ja().hd(new Z((e=>void 0)),Ml().ci,!0)}E=Oa.prototype=new D,E.constructor=Oa;function ka(){}ka.prototype=E,E.hd=(function(e,t,n){return new Hp(e,n,t,this)}),E.iF=(function(e,t){return new Wp(e,t,this)}),new O().i(Oa,`com.raquo.airstream.core.Observer$`,{bq:1});var Aa;function ja(){return Aa||=new Oa,Aa}function Ma(){}E=Ma.prototype=new D,E.constructor=Ma;function Na(){}Na.prototype=E,E.jy=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new O().i(Ma,`com.raquo.airstream.core.ObserverList$`,{bt:1});var Pa;function Fa(){return Pa||=new Ma,Pa}function Ia(){this.aQ=0,this.aQ=0}E=Ia.prototype=new D,E.constructor=Ia;function La(){}La.prototype=E,E.gV=(function(){return this.aQ===2147483647?this.aQ=1:this.aQ=1+this.aQ|0,this.aQ}),new O().i(Ia,`com.raquo.airstream.core.Signal$`,{bv:1});var Ra;function za(){return Ra||=new Ia,Ra}function Ba(e){this.cB=null,this.dK=null,this.cC=0,this.cB=e,this.dK=void 0;var t=oo().bX();this.cC=t===void 0?1:1+t.cC|0,Ka().bZ===-1||this.cC>Ka().bZ?H().Y(new _g(this,Ka().bZ)):Za().E?Za().aw.push(this)|0:oo().dk(this)}E=Ba.prototype=new D,E.constructor=Ba;function Va(){}Va.prototype=E;var Ha=new O().i(Ba,`com.raquo.airstream.core.Transaction`,{bw:1});function Ua(){this.bZ=0,this.dL=null,Ga=this,this.bZ=1e3,this.dL=new Z((e=>{throw ip(new K,`Attempted to run Transaction `+e+` after it was already executed.`)}))}E=Ua.prototype=new D,E.constructor=Ua;function Wa(){}Wa.prototype=E,E.gt=(function(e){try{e.cB.j(e);var t=e.dK;if(t!==void 0)for(;t.kw();)t.kl().kA(e)}catch(e){var n=e instanceof Od?e:new $(e);H().Y(n)}}),new O().i(Ua,`com.raquo.airstream.core.Transaction$`,{bx:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(e){e.c0.length|0?new Ba(new Z((t=>{for(;(e.c0.length|0)>0;){var n=e.c0.shift();try{n.j(t)}catch(e){var r=e instanceof Od?e:new $(e);H().Y(r)}}for(;(e.aw.length|0)>0;){var i=e.aw.shift();oo().dk(i)}}))):(e.aw.length|0)>0&&new Ba(new Z((t=>{for(;(e.aw.length|0)>0;)oo().dk(e.aw.shift())})))}function Ja(){this.E=!1,this.c0=null,this.aw=null,Xa=this,this.E=!1,this.c0=k().C(z().b(new(R.r()).C([]))),this.aw=k().C(z().b(new(Ha.r()).C([])))}E=Ja.prototype=new D,E.constructor=Ja;function Ya(){}Ya.prototype=E,new O().i(Ja,`com.raquo.airstream.core.Transaction$onStart$`,{by:1});var Xa;function Za(){return Xa||=new Ja,Xa}function Qa(e,t){return e.ax.get(t)}function $a(e,t){e.c1.unshift(t)}function eo(e){return e.c1.shift()}function to(e,t,n){var r=Qa(e,t),i=r===void 0,a=r===void 0?k().C(z().b(new(Ha.r()).C([]))):r;a.push(n),i&&e.ax.set(t,a)}function no(e,t){var n=Qa(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ax.delete(t),i}}function ro(){this.c1=null,this.ax=null,ao=this,this.c1=k().C(z().b(new(Ha.r()).C([]))),this.ax=new Map}E=ro.prototype=new D,E.constructor=ro;function io(){}io.prototype=E,E.dk=(function(e){var t=this.bX();t===void 0?($a(this,e),Ka().gt(e),this.i7(e)):to(this,t,e)}),E.i7=(function(e){for(var t=e;;){var n=this.bX(),r=t;if(!(n!==void 0&&Yl().I(r,n)))throw ip(new K,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.js(t),t.cB=Ka().dL;var i=this.bX();if(Yl().I(i,void 0))if((this.ax.size|0)>0){var a=new nf(0);throw this.ax.forEach((e=>((t,n)=>{e.bB=e.bB+(t.length|0)|0}))(a)),ip(new K,`Transaction queue error: Stack cleared, but a total of `+a.bB+` children for `+(this.ax.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Ka().gt(i),t=i}}),E.js=(function(e){for(var t=e;;){var n=no(this,t);if(Yl().I(n,void 0)){eo(this);var r=this.bX();if(!Yl().I(r,void 0))t=r;else return}else{$a(this,n);return}}}),E.bX=(function(){return this.c1[0]}),new O().i(ro,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bz:1});var ao;function oo(){return ao||=new ro,ao}function so(e,t){var n=e.ad.indexOf(t)|0;if(n!==-1)e.ad.splice(n,1),e.L.o()||t.gX();else throw ip(new K,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function co(e){for(;(e.c2.length|0)>0;)so(e,e.c2.shift())}function lo(e){this.dM=null,this.ad=null,this.aR=!1,this.c2=null,this.L=null,this.aS=0,this.dM=e,this.ad=k().C(z().b(new(mo.r()).C([]))),this.aR=!0,this.c2=k().C(z().b(new(mo.r()).C([]))),this.L=Q(),this.aS=0}E=lo.prototype=new D,E.constructor=lo;function uo(){}uo.prototype=E,E.gb=(function(){if(this.L.o()){var e=Za(),t=(()=>{var e=new Tu(this.dM);this.L=new Kg(e),this.aR=!1,this.aS=0;for(var t=0,n=this.ad.length|0;t<n;){var r=t+this.aS|0;this.ad[r].gW(e),t=1+t|0}co(this),this.aR=!0,this.aS=0});if(Za(),e.E)t();else{e.E=!0;try{t()}finally{e.E=!1,qa(e)}}}else throw ip(new K,`Can not activate `+this+`: it is already active`)}),E.i2=(function(){if(this.L.o())throw ip(new K,`Can not deactivate DynamicOwner: it is not active`);this.aR=!1;for(var e=this.ad,t=0,n=e.length|0;t<n;)e[t].gX(),t=1+t|0;co(this);var r=this.L;r.o()||r.A().iZ(),co(this),this.aR=!0,this.L=Q()}),E.hA=(function(e,t){t?(this.aS=1+this.aS|0,this.ad.unshift(e)):this.ad.push(e);var n=this.L;if(!n.o()){var r=n.A();e.gW(r)}}),E.jz=(function(e){this.aR?so(this,e):this.c2.push(e)}),new O().i(lo,`com.raquo.airstream.ownership.DynamicOwner`,{bC:1});function fo(e,t,n){this.c3=null,this.dN=null,this.c4=null,this.c3=e,this.dN=t,this.c4=Q(),e.hA(this,n)}E=fo.prototype=new D,E.constructor=fo;function po(){}po.prototype=E,E.ct=(function(){this.c3.jz(this)}),E.gW=(function(e){var t=Za(),n=(()=>{this.c4=this.dN.j(e)});if(Za(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,qa(t)}}}),E.gX=(function(){var e=this.c4;e.o()||(e.A().ct(),this.c4=Q())});var mo=new O().i(fo,`com.raquo.airstream.ownership.DynamicSubscription`,{bD:1});function ho(){}E=ho.prototype=new D,E.constructor=ho;function go(){}go.prototype=E,E.cx=(function(e,t,n){return new fo(e,new Z((e=>new Kg(t.j(e)))),n)}),E.h8=(function(e,t,n){return new fo(e,new Z((e=>(t.j(e),Q()))),n)}),E.jM=(function(e,t,n){return vo().cx(e,new Z((e=>pf(t,n,e))),!1)}),new O().i(ho,`com.raquo.airstream.ownership.DynamicSubscription$`,{bE:1});var _o;function vo(){return _o||=new ho,_o}function yo(e){e.aT=k().C(z().b(new(Eo.r()).C([])))}function bo(e){for(var t=e.aT,n=0,r=t.length|0;n<r;)Co(t[n]),n=1+n|0;e.aT.length=0}function xo(e,t){var n=e.aT.indexOf(t)|0;if(n!==-1)e.aT.splice(n,1);else throw ip(new K,`Can not remove Subscription from Owner: subscription not found.`)}function So(e,t){e.aT.push(t)}function Co(e){if(!e.cE)e.dP.ab(),e.cE=!0;else throw ip(new K,`Can not kill Subscription: it was already killed.`)}function wo(e,t){this.dQ=null,this.dP=null,this.cE=!1,this.dQ=e,this.dP=t,this.cE=!1,e.jo(this)}E=wo.prototype=new D,E.constructor=wo;function To(){}To.prototype=E,E.ct=(function(){Co(this),xo(this.dQ,this)});var Eo=new O().i(wo,`com.raquo.airstream.ownership.Subscription`,{bH:1});function Do(e,t){this.dR=null,this.dS=null,this.ae=null,this.ay=!1,this.dR=e,this.dS=t,this.ae=Q(),this.ay=!1}E=Do.prototype=new D,E.constructor=Do;function Oo(){}Oo.prototype=E,E.iV=(function(){var e=this.ae;return!e.o()&&!e.A().c3.L.o()}),E.jH=(function(e){if(this.ay)throw ip(new K,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ae;if(t.o())var n=!1;else var n=e===t.A().c3;if(!n){this.iV()&&!e.L.o()&&(this.ay=!0);var r=this.ae;r.o()||(r.A().ct(),this.ae=Q()),this.ae=new Kg(vo().cx(e,new Z((e=>(this.ay||this.dR.ab(),new wo(e,new Om((()=>{this.ay||this.dS.ab()})))))),!1)),this.ay=!1}}),E.hT=(function(){if(this.ay)throw ip(new K,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ae;e.o()||e.A().ct(),this.ae=Q()}),new O().i(Do,`com.raquo.airstream.ownership.TransferableSubscription`,{bI:1});function ko(){}E=ko.prototype=new D,E.constructor=ko;function Ao(){}Ao.prototype=E,E.hI=(function(e){return new yg(new pg(e))}),new O().i(ko,`com.raquo.airstream.state.Var$`,{bM:1});var jo;function Mo(){return jo||=new ko,jo}function No(){}E=No.prototype=new D,E.constructor=No;function Po(){}Po.prototype=E,E.C=(function(e){return[...mu().jS(e)]}),new O().i(No,`com.raquo.ew.JsArray$`,{bP:1});var Fo;function k(){return Fo||=new No,Fo}function Io(){}E=Io.prototype=new D,E.constructor=Io;function Lo(){}Lo.prototype=E,E.iR=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),E.iA=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new O().i(Io,`com.raquo.ew.JsArray$RichJsArray$`,{bQ:1});var Ro;function zo(){return Ro||=new Io,Ro}function Bo(){this.dZ=null,Ho=this,document.createElement(`template`),this.i0(Y().d.jN().jO()),this.dZ=RegExp(` `,`g`)}E=Bo.prototype=new D,E.constructor=Bo;function Vo(){}Vo.prototype=E,E.hF=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Od?e:new $(e);if(n instanceof $&&n.U instanceof DOMException)return!1;throw n instanceof $?n.U:n}}),E.iX=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Yl().I(t,r))return!0;n=r}}),E.hy=(function(e,t){e.addEventListener(t.aX.br.cb,t.cR,t.cS)}),E.jw=(function(e,t){e.removeEventListener(t.aX.br.cb,t.cR,t.cS)}),E.hZ=(function(e){return document.createElement(e.du())}),E.iH=(function(e,t){var n=this.iI(e,t);return n===void 0?void 0:t.aU.co(n)}),E.iI=(function(e,t){var n=e.F.getAttributeNS(null,t.af);return n===null?void 0:n}),E.dA=(function(e,t,n){this.jE(e,t,t.aU.bR(n))}),E.jE=(function(e,t,n){n===null?this.jx(e,t):e.F.setAttribute(t.af,n)}),E.jx=(function(e,t){e.F.removeAttribute(t.af)}),E.jF=(function(e,t,n){this.jG(e,t,t.eH.bR(n))}),E.jG=(function(e,t,n){e.F[t.ag]=n}),E.h4=(function(e,t,n){var r=e.F,i=t.aV,a=t.aW,o=n===null?null:n;o===null?(a.a4(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a4(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),E.i0=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eZ)}),E.iL=(function(e,t){var n=this.iM(e,t);return n===void 0?void 0:t.cP.co(n)}),E.iM=(function(e,t){var n=e.dy(),r=t.cd,i=n.getAttributeNS(r.o()?null:r.A(),t.cQ);return i===null?void 0:i}),E.jI=(function(e,t,n){this.jJ(e,t,t.cP.bR(n))}),E.jJ=(function(e,t,n){if(n===null)this.jA(e,t);else{var r=t.cd;if(r.o())e.dy().setAttribute(t.cc,n);else{var i=r.A();e.dy().setAttributeNS(i,t.cc,n)}}}),E.jA=(function(e,t){var n=e.dy(),r=t.cd;n.removeAttributeNS(r.o()?null:r.A(),t.cQ)}),E.i1=(function(e){return document.createTextNode(e)}),E.gN=(function(e){return Gl().hX(e.tagName,45)}),E.iN=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.gN(e)){var t=e.value;return new Jm(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),E.i3=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new by(this.gv(r),n);r=i,n=a}}),E.gv=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dZ,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new O().i(Bo,`com.raquo.laminar.DomApi$`,{bR:1});var Ho;function A(){return Ho||=new Bo,Ho}function Uo(e,t,n){this.cJ=null,this.e0=null,this.cI=null,this.cJ=e,this.e0=t,this.cI=n}E=Uo.prototype=new D,E.constructor=Uo;function Wo(){}Wo.prototype=E,E.a4=(function(e){this.cJ===null?this.cI===null?Il().iB(this.e0,e):zo().iA(this.cI,Np().iE(e)):this.cJ.a4(e)}),new O().i(Uo,`com.raquo.laminar.Seq`,{bT:1});function Go(){}E=Go.prototype=new D,E.constructor=Go;function Ko(){}Ko.prototype=E,new O().i(Go,`com.raquo.laminar.Seq$`,{bU:1});var qo;function Jo(){return qo||=new Go,qo}function Yo(e){ja(),H(),e.e3=Mo()}function Xo(e){e.hf=Fs()}function Zo(e){Qo(e,new Z((e=>{e.eJ.F.focus()})))}function Qo(e,t){return new Ku(new Z((e=>{var n=new ef(!e.a7.L.o()),r=new Z((e=>{n.cm?n.cm=!1:t.j(e)}));vo().h8(e.a7,new Z((e=>(t=>{r.j(new As(e,t))}))(e)),!1)})),Fs())}function $o(){this.Z=null,this.cK=null,this.bq=null,ts=this,this.Z=new ku(j()),new ku(j()),this.cK=new ku(j()),this.bq=new Du}E=$o.prototype=new D,E.constructor=$o;function es(){}es.prototype=E,new O().i($o,`com.raquo.laminar.codecs.package$`,{c2:1});var ts;function j(){return ts||=new $o,ts}function ns(e){e.hg=rs(e,`class`,` `)}function rs(e,t,n){var r=Lu(new Ru,t,j().Z);return new Mu(r.af,new Z((e=>{var t=A().iH(e,r);return t===void 0?``:t})),new jm(((e,t)=>{A().dA(e,r,t)})),n)}function is(e){e.he=as(e,`class`,` `)}function as(e,t,n){var r=new Hu(t,j().Z,Q());return new Mu(r.cc,new Z((e=>{var t=A().iL(e,r);return t===void 0?``:t})),new jm(((e,t)=>{A().jI(e,r,t)})),n)}function os(){this.eE=null,cs=this,Y().d.hb(),k().C(z().b(new(Iu.r()).C([Y().d.bU()]))),Y().d.hb(),k().C(z().b(new(Iu.r()).C([Y().d.bU(),Y().d.jk()]))),Y().d.hS(),k().C(z().b(new(Iu.r()).C([Y().d.bU(),Y().d.jl()]))),this.eE=k().C(z().b(new(Vg.r()).C([`value`,`checked`])))}E=os.prototype=new D,E.constructor=os;function ss(){}ss.prototype=E,new O().i(os,`com.raquo.laminar.inputs.InputController$`,{co:1});var cs;function ls(){return cs||=new os,cs}function us(e){this.c9=null,this.c9=e}E=us.prototype=new D,E.constructor=us;function ds(){}ds.prototype=E,E.gY=(function(e,t){try{this.c9.dm(e,t)}catch(e){var n=e instanceof Od?e:new $(e);H().Y(n)}}),E.hV=(function(e){return new us(new jm(((t,n)=>{this.c9.dm(t,n),e.c9.dm(t,n)})))}),E.hG=(function(e){return e===void 0?this:e.hV(this)}),new O().i(us,`com.raquo.laminar.inserters.InserterHooks`,{cr:1});function fs(){}E=fs.prototype=new D,E.constructor=fs;function ps(){}ps.prototype=E,E.bf=(function(e,t){return new Xm(e,void 0)}),new O().i(fs,`com.raquo.laminar.inserters.StaticChildInserter$`,{ct:1});var ms;function hs(){return ms||=new fs,ms}function gs(e,t){this.eG=null,this.eF=null,this.eG=e,this.eF=t}E=gs.prototype=new D,E.constructor=gs;function _s(){}_s.prototype=E,E.c=(function(e){return new Cf(this.eG,this.eF.j(e),new Nm(((e,t,n)=>{A().h4(e,t,n)})))}),new O().i(gs,`com.raquo.laminar.keys.DerivedStyleProp`,{cw:1});function vs(e,t,n,r){this.br=null,this.cO=!1,this.cN=!1,this.cM=null,this.br=e,this.cO=t,this.cN=n,this.cM=r}E=vs.prototype=new D,E.constructor=vs;function ys(){}ys.prototype=E,E.j4=(function(){var e=new Z((e=>{var t=this.cM.j(e);if(t.o())return Q();t.A();var n=A().iN(e.target);return new Kg(n===void 0?``:n)}));return new vs(this.br,this.cO,this.cN,e)}),new O().i(vs,`com.raquo.laminar.keys.EventProcessor`,{cx:1});function bs(){}E=bs.prototype=new D,E.constructor=bs;function xs(){}xs.prototype=E,E.i9=(function(e,t,n){return new vs(e,t,n,new Z((e=>new Kg(e))))}),new O().i(bs,`com.raquo.laminar.keys.EventProcessor$`,{cy:1});var Ss;function Cs(){return Ss||=new bs,Ss}function ws(){}E=ws.prototype=new D,E.constructor=ws;function Ts(){}Ts.prototype=E;function Es(){this.hh=null,this.hi=null,this.hj=null,this.hk=null,this.hh=`http://www.w3.org/2000/svg`,this.hi=`http://www.w3.org/1999/xlink`,this.hj=`http://www.w3.org/XML/1998/namespace`,this.hk=`http://www.w3.org/2000/xmlns/`}E=Es.prototype=new D,E.constructor=Es;function Ds(){}Ds.prototype=E,E.j6=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new kh(e)}}),new O().i(Es,`com.raquo.laminar.keys.SvgAttr$`,{cB:1});var Os;function ks(){return Os||=new Es,Os}function As(e,t){this.eJ=null,this.eI=null,this.eJ=e,this.eI=t}E=As.prototype=new D,E.constructor=As;function js(){}js.prototype=E,new O().i(As,`com.raquo.laminar.lifecycle.MountContext`,{cC:1});var M=new O().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Ms(){this.hl=null,Ps=this,this.hl=new Wu}E=Ms.prototype=new D,E.constructor=Ms;function Ns(){}Ns.prototype=E,new O().i(Ms,`com.raquo.laminar.modifiers.Modifier$`,{cG:1});var Ps;function Fs(){return Ps||=new Ms,Ps}function Is(){this.az=null,Rs=this,this.az=new Ju}E=Is.prototype=new D,E.constructor=Is;function Ls(){}Ls.prototype=E,new O().i(Is,`com.raquo.laminar.modifiers.RenderableNode$`,{cK:1});var Rs;function zs(){return Rs||=new Is,Rs}function Bs(){this.g=null,Hs=this,this.g=new ed(new Z((e=>e)),N()),new ed(new Z((e=>``+(e|0))),N()),new ed(new Z((e=>``+ +e)),N()),new ed(new Z((e=>``+!!e)),N()),new ed(new Z((e=>e.jR())),N())}E=Bs.prototype=new D,E.constructor=Bs;function Vs(){}Vs.prototype=E,new O().i(Bs,`com.raquo.laminar.modifiers.RenderableText$`,{cP:1});var Hs;function N(){return Hs||=new Bs,Hs}function Us(){}E=Us.prototype=new D,E.constructor=Us;function Ws(){}Ws.prototype=E,E.bG=(function(e,t,n){var r=new Kg(e);t.hc(r),n!==void 0&&n.gY(e,t);var i=A().hF(e.aN(),t.aN());return i&&t.h5(r),i}),new O().i(Us,`com.raquo.laminar.nodes.ParentNode$`,{cS:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){}E=qs.prototype=new D,E.constructor=qs;function Js(){}Js.prototype=E,E.jW=(function(e,t){return vo().cx(e.a7,new Z((n=>t.j(new As(e,n)))),!0)}),new O().i(qs,`com.raquo.laminar.nodes.ReactiveElement$`,{cU:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(e){this.eV=null,this.eV=new us(new jm(((t,n)=>{matchResult1:{var r=n.aN();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=H(),a=r.textContent,o=t.aN().tagName;i.Y(ip(new K,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}E=Zs.prototype=new D,E.constructor=Zs;function Qs(){}Qs.prototype=E,E.b8=(function(e){return e.gS(new Z((e=>e.jX(this.eV))))}),new O().i(Zs,`com.raquo.laminar.nodes.Slot`,{cX:1});function $s(){tc=this,k().C(z().jZ(new _a(new Int32Array([0]))))}E=$s.prototype=new D,E.constructor=$s;function ec(){}ec.prototype=E,E.hx=(function(){return new Z((e=>void 0))}),new O().i($s,`com.raquo.laminar.tags.CustomHtmlTag$`,{cZ:1});var tc;function nc(){return tc||=new $s,tc}function rc(){}E=rc.prototype=new D,E.constructor=rc;function ic(){}ic.prototype=E,E.g9=(function(e){return Y().d.gx().bK(z().b(new(M.r()).C([Y().d.gw().gH(),Y().d.iy().hU(),Y().d.gL().dx().c(8),yf(Y().d,e,$u())])))}),new O().i(rc,`doc.ExampleGroups$package$`,{d1:1});var ac;function oc(){return ac||=new rc,ac}function sc(){}E=sc.prototype=new D,E.constructor=sc;function cc(){}cc.prototype=E,E.ga=(function(e){return Y().d.gx().bK(z().b(new(M.r()).C([Y().d.gw().gH(),Y().d.iz().jY(),Y().d.gL().dx().c(16),Y().d.jp().dx().c(8),yf(Y().d,e,$u())])))}),new O().i(sc,`doc.Examples$package$`,{d2:1});var lc;function uc(){return lc||=new sc,lc}function dc(){}E=dc.prototype=new D,E.constructor=dc;function fc(){}fc.prototype=E,E.hC=(function(){P().ie(),P().im(),P().io(),P().ip(),P().iq(),P().ir(),P().is(),P().it(),P().iu(),P().ig(),P().ih(),P().ii(),P().ij(),P().ik(),P().il()}),E.ie=(function(){var e=document.querySelector(`#example1`);if(e!==null){Y();var t=Y().d.e3.hI(``);new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.h().hw(t))),new J((e=>new bf((Y(),Cs().i9(e.bU(),!1,!1)).j4(),new Z((e=>{t.dV.dw(e)})))))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(``)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-4`)))])),z().b(new(M.r()).C([U(Y().d,`Option 4`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-5`)))])),z().b(new(M.r()).C([U(Y().d,`Option 5`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-6`)))])),z().b(new(M.r()).C([U(Y().d,`Option 6`,N().g)])))]))))}}),E.im=(function(){var e=document.querySelector(`#example2`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.dt().c(`Select one`)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.io=(function(){var e=document.querySelector(`#example3`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.dt().c(`Experience`))),new J((e=>e.iQ().c(`Please tell us your skill level.`)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`1`)))])),z().b(new(M.r()).C([U(Y().d,`Novice`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`2`)))])),z().b(new(M.r()).C([U(Y().d,`Intermediate`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`3`)))])),z().b(new(M.r()).C([U(Y().d,`Advanced`,N().g)])))])))))}),E.ip=(function(){var e=document.querySelector(`#example4`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Select one`)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.iq=(function(){var e=document.querySelector(`#example5`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.bl().c(!0))),new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.ir=(function(){var e=document.querySelector(`#example6`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.hD().ix()))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.is=(function(){var e=document.querySelector(`#example7`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.jq().c(!0)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.it=(function(){var e=document.querySelector(`#example8`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Disabled`))),new J((e=>e.i5().c(!0)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.iu=(function(){var e=document.querySelector(`#example9`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.dt().c(`Select a Few`))),new J((e=>e.gU().c(!0))),new J((e=>e.bl().c(!0)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-4`)))])),z().b(new(M.r()).C([U(Y().d,`Option 4`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-5`)))])),z().b(new(M.r()).C([U(Y().d,`Option 5`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-6`)))])),z().b(new(M.r()).C([U(Y().d,`Option 6`,N().g)])))])))))}),E.ig=(function(){var e=document.querySelector(`#example10`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-4`)))])),z().b(new(M.r()).C([U(Y().d,`Option 4`,N().g)])))])))))}),E.ih=(function(){var e=document.querySelector(`#example11`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.gU().c(!0))),new J((e=>e.bl().c(!0)))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bk(),Y().d).bh().c(!0)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-4`)))])),z().b(new(M.r()).C([U(Y().d,`Option 4`,N().g)])))])))))}),E.ii=(function(){var e=document.querySelector(`#example12`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([])),z().b(new(M.r()).C([Y().d.h7().bK(z().b(new(M.r()).C([U(Y().d,`Section 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)]))),Gf().f(z().b(new(R.r()).C([])),z().b(new(M.r()).C([]))),Y().d.h7().bK(z().b(new(M.r()).C([U(Y().d,`Section 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-4`)))])),z().b(new(M.r()).C([U(Y().d,`Option 4`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-5`)))])),z().b(new(M.r()).C([U(Y().d,`Option 5`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-6`)))])),z().b(new(M.r()).C([U(Y().d,`Option 6`,N().g)])))])))))}),E.ij=(function(){var e=document.querySelector(`#example13`);e!==null&&(Y(),new W(e,oc().g9(z().b(new(kg.r()).C([uc().ga(z().b(new(kg.r()).C([X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Small`))),new J((e=>e.bi().h6()))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))]))),X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Medium`))),new J((e=>e.bi().gT()))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))]))),X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Large`))),new J((e=>e.bi().gR()))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))])))])))))}),E.ik=(function(){var e=document.querySelector(`#example14`);e!==null&&(Y(),new W(e,X().f(z().b(new(R.r()).C([new J((e=>e.jr().jU()))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))))}),E.il=(function(){var e=document.querySelector(`#example15`);e!==null&&(Y(),new W(e,oc().g9(z().b(new(kg.r()).C([uc().ga(z().b(new(kg.r()).C([X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Small`))),new J((e=>e.bi().h6())),new J((e=>e.bl().c(!0))),new J((e=>vf(Y().d,vc().dB().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`house`))),new J((e=>e.dC().c(`solid`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u()))),new J((e=>vf(Y().d,vc().dp().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`flag-checkered`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u())))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))]))),X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Medium`))),new J((e=>e.bi().gT())),new J((e=>e.bl().c(!0))),new J((e=>vf(Y().d,vc().dB().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`house`))),new J((e=>e.dC().c(`solid`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u()))),new J((e=>vf(Y().d,vc().dp().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`flag-checkered`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u())))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))]))),X().f(z().b(new(R.r()).C([new J((e=>e.au().c(`Large`))),new J((e=>e.bi().gR())),new J((e=>e.bl().c(!0))),new J((e=>vf(Y().d,vc().dB().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`house`))),new J((e=>e.dC().c(`solid`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u()))),new J((e=>vf(Y().d,vc().dp().b8(z().b(new(Qm.r()).C([(Y(),hs().bf(Yf().f(z().b(new(R.r()).C([new J((e=>e.be().c(`flag-checkered`)))])),z().b(new(M.r()).C([]))),zs().az))]))),Md().aB,$u())))])),z().b(new(M.r()).C([G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-1`)))])),z().b(new(M.r()).C([U(Y().d,`Option 1`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-2`)))])),z().b(new(M.r()).C([U(Y().d,`Option 2`,N().g)]))),G().f(z().b(new(R.r()).C([new J((e=>e.h().c(`option-3`)))])),z().b(new(M.r()).C([U(Y().d,`Option 3`,N().g)])))])))])))])))))}),new O().i(dc,`examples.select.Main$package$`,{d3:1});var pc;function P(){return pc||=new dc,pc}function mc(e){try{P().hC()}catch(e){throw e}}function hc(){this.fE=null,this.fF=!1,this.fC=null,this.fD=!1}E=hc.prototype=new D,E.constructor=hc;function gc(){}gc.prototype=E,E.dB=(function(){return this.fF||=(this.fE=new Zs(`start`),!0),this.fE}),E.dp=(function(){return this.fD||=(this.fC=new Zs(`end`),!0),this.fC}),new O().i(hc,`io.github.nguyenyou.webawesome.laminar.Select$slots$`,{da:1});var _c;function vc(){return _c||=new hc,_c}function yc(){this.hn=!1,this.bs=null,this.cf=null,this.fI=null,this.d0=!1,this.hm=0,this.hp=0,this.ho=null,xc=this,this.hn=!0,this.bs=new ArrayBuffer(8),this.cf=new Int32Array(this.bs,0,2),new Float32Array(this.bs,0,2),this.fI=new Float64Array(this.bs,0,1),this.cf[0]=16909060,this.d0=(new Int8Array(this.bs,0,8)[0]|0)==1,this.hm=this.d0?0:1,this.hp=this.d0?1:0,this.ho=null}E=yc.prototype=new D,E.constructor=yc;function bc(){}bc.prototype=E,E.dv=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fI[0]=e,(this.cf[0]|0)^(this.cf[1]|0))}),new O().i(yc,`java.lang.FloatingPointBits$`,{dn:1});var xc;function Sc(){return xc||=new yc,xc}function Cc(e,t){for(var n=F().a6(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=wc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new bd(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new bd(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Sd.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function wc(e,t){var n=F().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=F().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=F().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=F().a6(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=F().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Tc(e,c[1]),Mc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Tc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Tc(e,d[1]),`<clinit>`]}function Tc(e,t){var n=Dc(e);if(il().fO.call(n,t))var r=Dc(e)[t];else var r=Uc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ec(e){if(!((1&e.Q)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d2=t,e.Q=(1|e.Q)<<24>>24}return e.d2}function Dc(e){return(1&e.Q)<<24>>24?e.d2:Ec(e)}function Oc(e){if(!((2&e.Q)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d3=t,e.Q=(2|e.Q)<<24>>24}return e.d3}function kc(e){return(2&e.Q)<<24>>24?e.d3:Oc(e)}function Ac(e){return(4&e.Q)<<24>>24||(e.d1=Object.keys(kc(e)),e.Q=(4|e.Q)<<24>>24),e.d1}function jc(e){return(4&e.Q)<<24>>24?e.d1:Ac(e)}function Mc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Nc(e,t){return t?t.arguments&&t.stack?Pc(e,t):t.stack&&t.sourceURL?Lc(e,t):t.stack&&t.number?Ic(e,t):t.stack&&t.fileName?Fc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Rc(e,t):zc(e,t):Rc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Bc(e,t):Vc(e,t):t.stack&&!t.fileName?Pc(e,t):Hc(e,t):[]}function Pc(e,t){return(t.stack+`
`).replace(F().a6(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(F().J(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(F().J(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(F().J(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(F().J(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Fc(e,t){return t.stack.replace(F().J(`(?:\\n@:0)?\\s+$`,`m`),``).replace(F().J(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ic(e,t){return t.stack.replace(F().J(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(F().J(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(F().J(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Lc(e,t){return t.stack.replace(F().J(`\\[native code\\]\\n`,`m`),``).replace(F().J(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(F().J(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Rc(e,t){for(var n=F().J(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function zc(e,t){for(var n=F().J(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Bc(e,t){for(var n=F().a6(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Vc(e,t){for(var n=F().a6(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(F().a6(`<anonymous function: (\\S+)>`),`$1`).replace(F().a6(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Hc(e,t){return[]}function Uc(e,t,n){for(;;)if(t<(jc(e).length|0)){var r=jc(e)[t];if(n.startsWith(r))return``+kc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Wc(){this.d2=null,this.d3=null,this.d1=null,this.Q=0}E=Wc.prototype=new D,E.constructor=Wc;function Gc(){}Gc.prototype=E,E.iv=(function(e){return Cc(this,Nc(this,e))}),new O().i(Wc,`java.lang.StackTrace$`,{dx:1});var Kc;function qc(){return Kc||=new Wc,Kc}function Jc(){}E=Jc.prototype=new D,E.constructor=Jc;function Yc(){}Yc.prototype=E,E.a6=(function(e){return new RegExp(e)}),E.J=(function(e,t){return new RegExp(e,t)}),new O().i(Jc,`java.lang.StackTrace$StringRE$`,{dy:1});var Xc;function F(){return Xc||=new Jc,Xc}function Zc(){this.fK=null,this.hq=null,$c=this,this.fK=new U_(!1),this.hq=new U_(!0)}E=Zc.prototype=new D,E.constructor=Zc;function Qc(){}Qc.prototype=E,new O().i(Zc,`java.lang.System$Streams$`,{dC:1});var $c;function el(){return $c||=new Zc,$c}function tl(){this.fO=null,rl=this,this.fO=Object.prototype.hasOwnProperty}E=tl.prototype=new D,E.constructor=tl;function nl(){}nl.prototype=E,new O().i(tl,`java.lang.Utils$Cache$`,{dF:1});var rl;function il(){return rl||=new tl,rl}function al(e,t){return e===t}function ol(e){return 0}function sl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aE)}var cl=new O().i(0,`java.lang.Void`,{aE:1},(e=>e===void 0));function ll(e,t){throw fh(new mh,`argument type mismatch`)}function ul(){}E=ul.prototype=new D,E.constructor=ul;function dl(){}dl.prototype=E,E.bb=(function(e){return e instanceof da||e instanceof pa||e instanceof ma||e instanceof ha||e instanceof ga||e instanceof _a||e instanceof va||e instanceof ya||e instanceof ba?e.a.length:ll(this,e)}),new O().i(ul,`java.lang.reflect.Array$`,{dH:1});var fl;function pl(){return fl||=new ul,fl}function ml(){}E=ml.prototype=new D,E.constructor=ml;function hl(){}hl.prototype=E,E.gD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.i,s=a.k,c=r,l=t.a[c],u=l.i,d=l.k;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),E.gC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),E.gE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),E.gz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),E.gy=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),E.gF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),E.gA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),E.gB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new O().i(ml,`java.util.Arrays$`,{dI:1});var gl;function I(){return gl||=new ml,gl}function L(e,t){this.i=0,this.k=0,this.i=e,this.k=t}E=L.prototype=new D,E.constructor=L;function _l(){}_l.prototype=E,E.l=(function(e){return e instanceof L&&this.i===e.i&&this.k===e.k}),E.r=(function(){return this.i^this.k}),E.t=(function(){return Tl().h2(this.i,this.k)}),E.kD=(function(){return this.i}),E.kC=(function(){return Tl().h1(this.i,this.k)}),E.kB=(function(){return Tl().bW(this.i,this.k)}),E.ki=(function(){return this.i<<24>>24}),E.kz=(function(){return this.i<<16>>16}),E.kt=(function(){return this.i}),E.ku=(function(){return this}),E.ko=(function(){return Tl().h1(this.i,this.k)}),E.km=(function(){return Tl().bW(this.i,this.k)}),E.kk=(function(e){return Tl().gZ(this.i,this.k,e.i,e.k)}),E.kj=(function(e){return Tl().gZ(this.i,this.k,e.i,e.k)}),E.kn=(function(e){return this.i===e.i&&this.k===e.k}),E.kx=(function(e){return!(this.i===e.i&&this.k===e.k)}),E.ka=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<(-2147483648^e.i):t<n}),E.kb=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<=(-2147483648^e.i):t<n}),E.k6=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>(-2147483648^e.i):t>n}),E.k7=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>=(-2147483648^e.i):t>n}),E.kF=(function(){return new L(~this.i,~this.k)}),E.k4=(function(e){return new L(this.i|e.i,this.k|e.k)}),E.k3=(function(e){return new L(this.i&e.i,this.k&e.k)}),E.kh=(function(e){return new L(this.i^e.i,this.k^e.k)}),E.kc=(function(e){var t=this.i;return new L(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.k<<e)}),E.k9=(function(e){var t=this.k;return new L(32&e?t>>>e|0:this.i>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),E.k8=(function(e){var t=this.k;return new L(32&e?t>>e:this.i>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),E.kE=(function(){var e=this.i,t=this.k;return new L(-e|0,e===0?-t|0:~t)}),E.kf=(function(e){var t=this.i,n=this.k,r=e.k,i=t+e.i|0;return new L(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),E.kd=(function(e){var t=this.i,n=this.k,r=e.k,i=t-e.i|0;return new L(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),E.kg=(function(e){var t=this.i,n=e.i,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new L(u,(((Math.imul(t,e.k)+Math.imul(this.k,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),E.k5=(function(e){var t=Tl();return new L(t.i6(this.i,this.k,e.i,e.k),t.w)}),E.ke=(function(e){var t=Tl();return new L(t.jv(this.i,this.k,e.i,e.k),t.w)}),new O().i(L,`org.scalajs.linker.runtime.RuntimeLong`,{aF:1});function vl(e,t,n){return-2097152&n?xl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function yl(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.w=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.w=0,n>>>o|0}else return xl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.w=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.w=s/4294967296|0,s|0}}function bl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.w=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.w=n&(-1+i|0),t):xl(e,t,n,r,i,1)|0;if(-2097152&i)return e.w=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.w=a/4294967296|0,a|0}function xl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,ee=u,v=d;if(_===v?(-2147483648^g)>=(-2147483648^ee):(-2147483648^_)>=(-2147483648^v)){var te=f,ne=p,re=u,ie=d,ae=te-re|0,y=(-2147483648^ae)>(-2147483648^te)?-1+(ne-ie|0)|0:ne-ie|0;f=ae,p=y,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var oe=u,se=d,ce=oe>>>1|0|se<<31,le=se>>>1|0;u=ce,d=le}var ue=f,de=p;if(de===i?(-2147483648^ue)>=(-2147483648^r):(-2147483648^de)>=(-2147483648^i)){var fe=f,pe=4294967296*p+ +(fe>>>0),me=4294967296*i+ +(r>>>0);if(a!==1){var he=pe/me,ge=he|0,_e=he/4294967296|0,ve=m,ye=h,be=ve+ge|0,xe=(-2147483648^be)<(-2147483648^ve)?1+(ye+_e|0)|0:ye+_e|0;m=be,h=xe}if(a!==0){var Se=pe%me;f=Se|0,p=Se/4294967296|0}}if(a===0)return e.w=h,m;if(a===1)return e.w=p,f;var Ce=m,we=4294967296*h+ +(Ce>>>0),Te=``+f,Ee=Te.length;return``+we+`000000000`.substring(Ee)+Te}function Sl(){this.w=0}E=Sl.prototype=new D,E.constructor=Sl;function Cl(){}Cl.prototype=E,E.h2=(function(e,t){return t===e>>31?``+e:t<0?`-`+vl(this,-e|0,e===0?-t|0:~t):vl(this,e,t)}),E.bW=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),E.h1=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),E.kq=(function(e){return new L(e,e>>31)}),E.kp=(function(e){return new L(this.h0(e),this.w)}),E.h0=(function(e){if(e<-0x8000000000000000)return this.w=-2147483648,0;if(e>=0x8000000000000000)return this.w=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.w=e<0&&t!==0?-1+n|0:n,t}),E.gZ=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),E.i6=(function(e,t,n,r){if((n|r)===0)throw new uh(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.w=0,-2147483648;var i=Yi(e,n);return this.w=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=-1,-1;else return this.w=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=yl(this,a,o,s,c);if((t^r)>=0)return l;var u=this.w;return this.w=l===0?-u|0:~u,-l|0}}),E.jv=(function(e,t,n,r){if((n|r)===0)throw new uh(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Xi(e,n);return this.w=i>>31,i}else return this.w=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=0,0;else return this.w=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=bl(this,a,o,s,c);if(t<0){var u=this.w;return this.w=l===0?-u|0:~u,-l|0}else return l}}),new O().i(Sl,`org.scalajs.linker.runtime.RuntimeLong$`,{dK:1});var wl;function Tl(){return wl||=new Sl,wl}var El=new O().i(1,`scala.Function0`,{ac:1}),R=new O().i(1,`scala.Function1`,{e:1});function Dl(){}E=Dl.prototype=new D,E.constructor=Dl;function Ol(){}Ol.prototype=E;function kl(){this.fQ=null,this.ci=null,jl=this,this.fQ=new J((e=>Ml().fQ)),this.ci=new vm}E=kl.prototype=new D,E.constructor=kl;function Al(){}Al.prototype=E,new O().i(kl,`scala.PartialFunction$`,{dY:1});var jl;function Ml(){return jl||=new kl,jl}function Nl(){this.fT=null,Fl=this,this.fT=new J((e=>Il().fT))}E=Nl.prototype=new D,E.constructor=Nl;function Pl(){}Pl.prototype=E,E.iB=(function(e,t){var n=pl().bb(e),r=0;if(e instanceof da)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof _a)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ma)for(;r<n;)t.j(sa(e.a[r])),r=1+r|0;else if(e instanceof ha)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ga)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof pa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else throw new kh(e)}),new O().i(Nl,`scala.collection.ArrayOps$`,{e4:1});var Fl;function Il(){return Fl||=new Nl,Fl}function Ll(e,t){for(var n=e.s();n.x();)t.j(n.n())}function Rl(e,t,n,r){return e.D()===0?``+t+r:e.bF(Dy(new Oy),t,n,r).O.v}function zl(e,t,n,r,i){var a=t.O;n.length!==0&&(a.v=``+a.v+n);var o=e.s();if(o.x()){var s=o.n();for(a.v=``+a.v+s;o.x();){a.v=``+a.v+r;var c=o.n();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function Bl(e,t){this.fX=null,this.by=null,this.fX=e,this.by=t}E=Bl.prototype=new D,E.constructor=Bl;function Vl(){}Vl.prototype=E,E.iP=(function(){return this.fX.ab().s()}),new O().i(Bl,`scala.collection.Iterator$ConcatIteratorCell`,{em:1});function Hl(){this.fY=null,Wl=this,this.fY=new J((e=>Gl().fY))}E=Hl.prototype=new D,E.constructor=Hl;function Ul(){}Ul.prototype=E,E.hX=(function(e,t){return Bg(e,t)>=0}),new O().i(Hl,`scala.collection.StringOps$`,{eu:1});var Wl;function Gl(){return Wl||=new Hl,Wl}function Kl(){}E=Kl.prototype=new D,E.constructor=Kl;function ql(){}ql.prototype=E,E.I=(function(e,t){return e===t||(yd(e)?this.id(e,t):e instanceof Ui?this.ib(e,t):e===null?t===null:Ki(e,t))}),E.id=(function(e,t){if(yd(t))return this.ic(e,t);if(t instanceof Ui){if(typeof e==`number`)return+e===t.c;if(e instanceof L){var n=la(e),r=n.i,i=n.k,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Ki(e,t)}else return e===null?t===null:Ki(e,t)}),E.ic=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof L){var r=la(t);return n===Tl().bW(r.i,r.k)}else return!1}else if(e instanceof L){var i=la(e),a=i.i,o=i.k;if(t instanceof L){var s=la(t),c=s.i,l=s.k;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Tl().bW(a,o)===u}else return!1}else return e===null?t===null:Ki(e,t)}),E.ib=(function(e,t){if(t instanceof Ui)return e.c===t.c;if(yd(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof L){var n=la(t),r=n.i,i=n.k,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Ki(t,e)}else return e===null&&t===null}),new O().i(Kl,`scala.runtime.BoxesRunTime$`,{eY:1});var Jl;function Yl(){return Jl||=new Kl,Jl}var Xl=new O().i(0,`scala.runtime.Null$`,{f1:1});function Zl(){}E=Zl.prototype=new D,E.constructor=Zl;function Ql(){}Ql.prototype=E,E.b9=(function(e,t){if(e instanceof da||e instanceof _a||e instanceof ba||e instanceof va||e instanceof ya)return e.a[t];if(e instanceof ma)return sa(e.a[t]);if(e instanceof ha||e instanceof ga||e instanceof pa)return e.a[t];throw e===null?new yh:new kh(e)}),E.hM=(function(e,t,n){if(e instanceof da)e.a[t]=n;else if(e instanceof _a)e.a[t]=n|0;else if(e instanceof ba)e.a[t]=+n;else if(e instanceof va)e.a[t]=la(n);else if(e instanceof ya)e.a[t]=Math.fround(n);else if(e instanceof ma)e.a[t]=ca(n);else if(e instanceof ha)e.a[t]=n|0;else if(e instanceof ga)e.a[t]=n|0;else if(e instanceof pa)e.a[t]=!!n;else if(e===null)throw new yh;else throw new kh(e)}),E.dj=(function(e){return Rl(e.a9(),e.X()+`(`,`,`,`)`)}),E.b=(function(e){return e===null?null:e.a.length===0?r_(s_()):new Wv(e)}),E.jZ=(function(e){return e===null?null:new Bv(e)}),new O().i(Zl,`scala.runtime.ScalaRunTime$`,{f2:1});var $l;function z(){return $l||=new Zl,$l}function eu(){}E=eu.prototype=new D,E.constructor=eu;function tu(){}tu.prototype=E,E.e=(function(e,t){var n=this.cv(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),E.cv=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),E.q=(function(e,t){return this.hO(e^t)}),E.hO=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),E.bd=(function(e){var t=e.i,n=e.k;return n===t>>31?t:t^n}),E.a3=(function(e){var t=Zi(e);if(t===e)return t;var n=Tl(),r=n.h0(e),i=n.w;return Tl().bW(r,i)===e?r^i:Sc().dv(e)}),E.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a3(+e);if(e instanceof L){var t=la(e);return this.bd(new L(t.i,t.k))}else return qi(e)}),E.aM=(function(e){throw hh(new gh,``+e)}),new O().i(eu,`scala.runtime.Statics$`,{f4:1});var nu;function B(){return nu||=new eu,nu}function ru(){}E=ru.prototype=new D,E.constructor=ru;function iu(){}iu.prototype=E,E.hJ=(function(e){return e}),new O().i(ru,`scala.scalajs.js.defined$`,{fa:1});var au;function ou(){return au||=new ru,au}function su(){}E=su.prototype=new D,E.constructor=su;function cu(){}cu.prototype=E,E.jK=(function(e,t){return setTimeout((()=>{t.ab()}),e)}),new O().i(su,`scala.scalajs.js.timers.package$`,{fb:1});var lu;function uu(){return lu||=new su,lu}function du(){}E=du.prototype=new D,E.constructor=du;function fu(){}fu.prototype=E,E.jS=(function(e){var t=[];return e.a4(new J((e=>t.push(e)|0))),t}),new O().i(du,`scala.scalajs.runtime.Compat$`,{fk:1});var pu;function mu(){return pu||=new du,pu}function hu(){}E=hu.prototype=new D,E.constructor=hu;function gu(){}gu.prototype=E,E.jL=(function(e){var t=`Illegal command line`+(e.gM()===0?``:e.gM()===1?` after first argument`:` after `+e.gM()+` arguments`)+`: `+e.kv();Bd().jn().iY(t+`
`)}),new O().i(hu,`scala.util.CommandLineParser$`,{fm:1});function _u(e){this.di=null,this.di=e}E=_u.prototype=new D,E.constructor=_u;function vu(){}vu.prototype=E,E.t=(function(){return`DynamicVariable(`+this.di+`)`}),new O().i(_u,`scala.util.DynamicVariable`,{fo:1});function yu(){}E=yu.prototype=new D,E.constructor=yu;function bu(){}bu.prototype=E,E.hK=(function(e){return!0}),new O().i(yu,`scala.util.control.NonFatal$`,{fq:1});var xu;function Su(){return xu||=new yu,xu}function Cu(){}E=Cu.prototype=new D,E.constructor=Cu;function wu(){}wu.prototype=E,E.e=(function(e,t){var n=this.cv(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),E.cv=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),E.q=(function(e,t){return this.K(e^t)}),E.K=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),E.bg=(function(e,t,n){var r=e.V();if(r===0)return Rg(e.X());var i=t;n||(i=this.e(i,Rg(e.X())));for(var a=0;a<r;)i=this.e(i,B().B(e.W(a))),a=1+a|0;return this.q(i,r)}),E.jV=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.s();o.x();){var s=o.n(),c=B().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.cv(l,a),this.q(l,i)}),E.jm=(function(e,t){var n=e.s(),r=t;if(!n.x())return this.q(r,0);var i=n.n();if(!n.x())return this.q(this.e(r,B().B(i)),1);var a=n.n(),o=B().B(i);r=this.e(r,o);for(var s=r,c=B().B(a),l=c-o|0,u=2;n.x();){r=this.e(r,c);var d=B().B(n.n());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.x();)r=this.e(r,B().B(n.n())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.K(this.e(this.e(s,l),c))}),E.gh=(function(e,t){var n=t,r=pl().bb(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,B().B(z().b9(e,0))),1);default:var i=B().B(z().b9(e,0));n=this.e(n,i);for(var a=n,o=B().B(z().b9(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=B().B(z().b9(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,B().B(z().b9(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.jt=(function(e,t,n,r){return this.K(this.e(this.e(this.e(r,e),t),n))}),E.iS=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,B().B(e.u(0))),1);default:var i=B().B(e.u(0));n=this.e(n,i);for(var a=n,o=B().B(e.u(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=B().B(e.u(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,B().B(e.u(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.j0=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.o();){var l=c.a5(),u=c.P(),d=B().B(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.jt(s,a,o,t):this.q(r,n)}),E.gq=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gi=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gj=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gk=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,B().a3(e.a[0])),1);default:var i=B().a3(e.a[0]);n=this.e(n,i);for(var a=n,o=B().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=B().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,B().a3(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gl=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,B().a3(e.a[0])),1);default:var i=B().a3(e.a[0]);n=this.e(n,i);for(var a=n,o=B().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=B().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,B().a3(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gm=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gn=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.e(i,B().bd(new L(a.i,a.k))),1);default:var o=e.a[0],s=B().bd(new L(o.i,o.k));n=this.e(n,s);for(var c=n,l=e.a[1],u=B().bd(new L(l.i,l.k)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.a[f],m=B().bd(new L(p.i,p.k));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.e(h,B().bd(new L(g.i,g.k))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.K(this.e(this.e(c,d),u))}}),E.go=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.K(this.e(this.e(a,s),o))}}),E.gp=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.K(this.e(this.e(i,o),a))}});function Tu(e){this.aT=null,this.dO=null,this.cD=!1,this.dO=e,yo(this),this.cD=!1}E=Tu.prototype=new D,E.constructor=Tu;function Eu(){}Eu.prototype=E,E.jo=(function(e){this.cD?(Co(e),this.dO.ab()):So(this,e)}),E.iZ=(function(){bo(this),this.cD=!0}),new O().i(Tu,`com.raquo.airstream.ownership.OneTimeOwner`,{bF:1,bG:1});function Du(){}E=Du.prototype=new D,E.constructor=Du;function Ou(){}Ou.prototype=E,E.i4=(function(e){return e!==null}),E.ia=(function(e){return e?``:null}),E.co=(function(e){return this.i4(e)}),E.bR=(function(e){return this.ia(!!e)}),new O().i(Du,`com.raquo.laminar.codecs.package$$anon$1`,{c3:1,a8:1});function ku(e){if(e===null)throw new yh}E=ku.prototype=new D,E.constructor=ku;function Au(){}Au.prototype=E,E.bR=(function(e){return e}),E.co=(function(e){return e}),new O().i(ku,`com.raquo.laminar.codecs.package$$anon$2`,{c4:1,a8:1});function ju(e){return new gs(e,new Z((e=>e+`px`)))}function Mu(e,t,n,r){}E=Mu.prototype=new Ts,E.constructor=Mu;function Nu(){}Nu.prototype=E,new O().i(Mu,`com.raquo.laminar.keys.CompositeKey`,{cv:1,v:1});function Pu(e){this.cb=null,this.cb=e}E=Pu.prototype=new Ts,E.constructor=Pu;function Fu(){}Fu.prototype=E;var Iu=new O().i(Pu,`com.raquo.laminar.keys.EventProp`,{cz:1,v:1});function Lu(e,t,n){return e.af=t,e.aU=n,e}function Ru(){this.af=null,this.aU=null}E=Ru.prototype=new Ts,E.constructor=Ru;function zu(){}zu.prototype=E,E.c=(function(e){return new Cf(this,e,new Nm(((e,t,n)=>{A().dA(e,t,n)})))}),E.hw=(function(e){return new Tf(this,e.h9(),new Nm(((e,t,n)=>{A().dA(e,this,t)})))}),new O().i(Ru,`com.raquo.laminar.keys.HtmlAttr`,{a0:1,v:1});function Bu(e,t){this.ag=null,this.eH=null,this.ag=e,this.eH=t}E=Bu.prototype=new Ts,E.constructor=Bu;function Vu(){}Vu.prototype=E,E.c=(function(e){return new Cf(this,e,new Nm(((e,t,n)=>{A().jF(e,t,n)})))}),new O().i(Bu,`com.raquo.laminar.keys.HtmlProp`,{an:1,v:1});function Hu(e,t,n){this.cQ=null,this.cP=null,this.cc=null,this.cd=null,this.cQ=e,this.cP=t;var r=n.o()?Q():new Kg(n.A()+`:`+e);this.cc=r.o()?e:r.A(),this.cd=n.o()?Q():new Kg(ks().j6(n.A()))}E=Hu.prototype=new Ts,E.constructor=Hu;function Uu(){}Uu.prototype=E,new O().i(Hu,`com.raquo.laminar.keys.SvgAttr`,{cA:1,v:1});function Wu(){}E=Wu.prototype=new D,E.constructor=Wu;function Gu(){}Gu.prototype=E,E.a1=(function(e){}),new O().i(Wu,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cH:1,R:1});function Ku(e,t){if(this.eQ=null,this.eQ=e,t===null)throw new yh}E=Ku.prototype=new D,E.constructor=Ku;function qu(){}qu.prototype=E,E.a1=(function(e){var t=Za(),n=(()=>{this.eQ.j(e)});if(Za(),t.E)n();else{t.E=!0;try{n()}finally{t.E=!1,qa(t)}}}),new O().i(Ku,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cI:1,R:1});function Ju(){}E=Ju.prototype=new D,E.constructor=Ju;function Yu(){}Yu.prototype=E,new O().i(Ju,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cL:1,cJ:1});function Xu(){}E=Xu.prototype=new D,E.constructor=Xu;function Zu(){}Zu.prototype=E,new O().i(Xu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cN:1,cM:1});var Qu;function $u(){return Qu||=new Xu,Qu}function ed(e,t){if(this.eR=null,this.eR=e,t===null)throw new yh}E=ed.prototype=new D,E.constructor=ed;function td(){}td.prototype=E,E.hN=(function(e){return this.eR.j(e)}),new O().i(ed,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cQ:1,cO:1});function nd(e){e.gu(new lo(new Om((()=>{throw ip(new K,`Attempting to use owner of unmounted element: `+Rl(A().i3(e.aN(),(A(),Ty())),``,` > `,``))}))))}function rd(e,t,n){return e.cY=t,e}function id(){this.cY=null}E=id.prototype=new D,E.constructor=id;function ad(){}ad.prototype=E,E.du=(function(){return this.cY}),E.bK=(function(e){var t=this.hR();return e.a4(new Z((e=>{e.a1(t)}))),t}),E.hR=(function(){return new Dg(this,A().hZ(this))}),new O().i(id,`com.raquo.laminar.tags.HtmlTag`,{as:1,aa:1});function od(e,t){this.eZ=null,this.eZ=e}E=od.prototype=new D,E.constructor=od;function sd(){}sd.prototype=E,new O().i(od,`com.raquo.laminar.tags.SvgTag`,{d0:1,aa:1});function cd(){}E=cd.prototype=new D,E.constructor=cd;function ld(){}ld.prototype=E,E.bR=(function(e){return e}),E.co=(function(e){return e}),new O().i(cd,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dc:1,a8:1});function ud(e,t){return e.aZ=t,e.cn(),e}function dd(){this.aZ=null,this.aY=null,this.b0=!1,this.b1=null,this.b2=!1}E=dd.prototype=new D,E.constructor=dd;function fd(){}fd.prototype=E,E.jP=(function(){return this.b0||=(this.aY=new Of(this.aZ,nc().hx(),(nc(),void 0)),!0),this.aY}),E.f=(function(e,t){var n=this.jP().bK(z().b(new(M.r()).C([])));return e.a4(new Z((e=>{e.j(this).a1(n)}))),t.a4(new Z((e=>{e.a1(n)}))),n}),E.bk=(function(){return this.b2||=(this.b1=new $f,!0),this.b1});function pd(){}E=pd.prototype=new D,E.constructor=pd;function md(){}md.prototype=E,E.jT=(function(e){if(!(e>=0&&e<=1114111))throw ph(new mh);return String.fromCodePoint(e)}),new O().i(pd,`java.lang.Character$`,{dk:1,a:1});var hd;function gd(){return hd||=new pd,hd}function _d(){}E=_d.prototype=new D,E.constructor=_d;function vd(){}vd.prototype=E;function yd(e){return e instanceof _d||typeof e==`number`||e instanceof L}function bd(e,t,n,r,i){this.b4=null,this.bu=null,this.b5=null,this.b6=0,this.b3=0,this.b4=e,this.bu=t,this.b5=n,this.b6=r,this.b3=i}E=bd.prototype=new D,E.constructor=bd;function xd(){}xd.prototype=E,E.l=(function(e){return e instanceof bd&&this.b5===e.b5&&this.b6===e.b6&&this.b3===e.b3&&this.b4===e.b4&&this.bu===e.bu}),E.t=(function(){var e=``;return this.b4!==`<jscode>`&&(e=``+e+this.b4+`.`),e=``+e+this.bu,this.b5===null?e+=`(Unknown Source)`:(e=e+`(`+this.b5,this.b6>=0&&(e=e+`:`+this.b6,this.b3>=0&&(e=e+`:`+this.b3)),e+=`)`),e}),E.r=(function(){return Rg(this.b4)^Rg(this.bu)^Rg(this.b5)^this.b6^this.b3});var Sd=new O().i(bd,`java.lang.StackTraceElement`,{aC:1,a:1});function Cd(){}E=Cd.prototype=new D,E.constructor=Cd;function wd(){}wd.prototype=E,E.j7=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Hg;for(var i=``,a=t;a!==r;)i+=``+Qi(e.a[a]),a=1+a|0;return i}),new O().i(Cd,`java.lang.String$`,{dz:1,a:1});var Td;function Ed(){return Td||=new Cd,Td}function Dd(e,t,n,r,i){return e.fM=t,e.fN=i,i&&e.iw(),e}var Od=class extends Error{constructor(){super(),this.fM=null,this.fN=!1,this.fL=null,this.cg=null}iT(e){return this}bT(){return this.fM}iw(){var e=this instanceof $?this.U:this;return this.fL=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}iK(){return this.cg===null&&(this.fN?this.cg=qc().iv(this.fL):this.cg=new(Sd.r()).C(0)),this.cg}t(){var e=Gi(this),t=this.bT();return t===null?e:e+`: `+t}r(){return ua.prototype.r.call(this)}l(e){return ua.prototype.l.call(this,e)}get message(){var e=this.bT();return e===null?``:e}get name(){return Gi(this)}toString(){return this.t()}};function kd(){this.aB=null,jd=this,this.aB=new Ch}E=kd.prototype=new D,E.constructor=kd;function Ad(){}Ad.prototype=E,new O().i(kd,`scala.$less$colon$less$`,{dN:1,a:1});var jd;function Md(){return jd||=new kd,jd}function Nd(){}E=Nd.prototype=new D,E.constructor=Nd;function Pd(){}Pd.prototype=E,E.gI=(function(e,t){var n=e.D();if(n>-1){for(var r=t.j8(n),i=e.s(),a=0;a<n;)z().hM(r,a,i.n()),a=1+a|0;return r}else{var o=null,s=t.jB(),c=s===Ca.l();o=[];for(var l=e.s();l.x();){var u=l.n(),d=c?ca(u):u===null?s.av.z:u;o.push(d)}return(s===Sa.l()?cl.l():s===Xl.l()||s===kp.l()?xa.l():s).av.r().w(o)}}),E.gG=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Yl().I(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new O().i(Nd,`scala.Array$`,{dP:1,a:1});var Fd;function Id(){return Fd||=new Nd,Fd}function Ld(){this.fP=null,zd=this,this.fP=new _u(el().fK)}E=Ld.prototype=new D,E.constructor=Ld;function Rd(){}Rd.prototype=E,E.jn=(function(){return this.fP.di}),new O().i(Ld,`scala.Console$`,{dQ:1,eK:1});var zd;function Bd(){return zd||=new Ld,zd}function Vd(){}E=Vd.prototype=new D,E.constructor=Vd;function Hd(){}Hd.prototype=E,E.t=(function(){return`<function1>`});function Ud(){}E=Ud.prototype=new Ol,E.constructor=Ud;function Wd(){}Wd.prototype=E,E.k0=(function(e){return e===null?null:e.a.length===0?d_().fZ:new my(e)});function Gd(e,t){if(t===e)e.gc(ig().gJ(t));else for(var n=t.s();n.x();)e.dl(n.n());return e}function Kd(){}E=Kd.prototype=new D,E.constructor=Kd;function qd(){}qd.prototype=E,E.t=(function(){return`<function0>`});function Jd(){}E=Jd.prototype=new D,E.constructor=Jd;function Yd(){}Yd.prototype=E,E.t=(function(){return`<function1>`});function Xd(){}E=Xd.prototype=new D,E.constructor=Xd;function Zd(){}Zd.prototype=E,E.t=(function(){return`<function2>`});function Qd(){}E=Qd.prototype=new D,E.constructor=Qd;function $d(){}$d.prototype=E,E.t=(function(){return`<function3>`});function ef(e){this.cm=!1,this.cm=e}E=ef.prototype=new D,E.constructor=ef;function tf(){}tf.prototype=E,E.t=(function(){return``+this.cm}),new O().i(ef,`scala.runtime.BooleanRef`,{eX:1,a:1});function nf(e){this.bB=0,this.bB=e}E=nf.prototype=new D,E.constructor=nf;function rf(){}rf.prototype=E,E.t=(function(){return``+this.bB}),new O().i(nf,`scala.runtime.IntRef`,{eZ:1,a:1});function af(){this.y=0,this.g8=0,this.hv=0,this.hu=0,sf=this,this.y=Rg(`Seq`),this.g8=Rg(`Map`),this.hv=Rg(`Set`),this.hu=this.jV(Ty(),this.g8)}E=af.prototype=new wu,E.constructor=af;function of(){}of.prototype=E,E.jC=(function(e){return cv(e)?this.iS(e,this.y):e instanceof Qv?this.j0(e,this.y):this.jm(e,this.y)}),new O().i(af,`scala.util.hashing.MurmurHash3$`,{fs:1,fr:1});var sf;function V(){return sf||=new af,sf}var cf=class extends Od{};function lf(){this.cy=null,this.dD=null,this.dE=null,df=this,this.cy=ig().ge(z().b(new(R.r()).C([]))),this.dD=new Z((e=>{try{console.error(this.cs(e)+`
`+this.iJ(e,`
`))}catch(e){var t=e instanceof Od?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dE=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.U:t})),this.ju(this.dD)}E=lf.prototype=new D,E.constructor=lf;function uf(){}uf.prototype=E,E.cs=(function(e){try{var t=e.bT()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Wi(e).ds()+`: `+t}),E.iJ=(function(e,t){try{return Rl(up().k0(e.iK()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),E.ju=(function(e){this.cy.dl(e)}),E.Y=(function(e){for(var t=this.cy.s();t.x();){var n=t.n();try{n.j(e)}catch(e){var r=e instanceof Od?e:new $(e),i=this.dE;if(n===null?i===null:n.l(i))throw r instanceof $?r.U:r;console.warn(`Error processing an unhandled error callback:`),uu().jK(0,new Om((e=>(()=>{throw e instanceof $?e.U:e}))(r)))}}}),new O().i(lf,`com.raquo.airstream.core.AirstreamError$`,{bm:1,eI:1,eJ:1});var df;function H(){return df||=new lf,df}function ff(e){e.c5=!0,e.c7=void 0}function pf(e,t,n){return Rm(e,ja().hd(t,Ml().ci,!0),n)}function mf(e,t){e.c5?Bm(e,t):gf(e).push(new Om((()=>{Bm(e,t)})))}function hf(e){return Wm(e)>0}function gf(e){var t=e.c7;if(t===void 0){var n=k().C(z().b(new(El.r()).C([])));return e.c7=n,n}else return t}var _f=new O().i(1,`com.raquo.airstream.core.Observer`,{a7:1,X:1,V:1});function U(e,t,n){return new em(n.hN(t))}function vf(e,t,n,r){return new Ku(new Z((e=>{(Jo(),new Uo(t,null,null)).a4(new Z((e=>(t=>{n.j(t).a1(e)}))(e)))})),Fs())}function yf(e,t,n){return new Ku(new Z((e=>{(Jo(),new Uo(t,null,null)).a4(new Z((e=>(t=>{Ks().bG(e,t,void 0)}))(e)))})),Fs())}function bf(e,t){this.aX=null,this.cR=null,this.cS=null,this.aX=e,this.cR=(n=>{var r=e.cM.j(n);r.o()||t.j(r.A())}),this.cS=(()=>{var e=null;e=this;var t={};if(e===null)throw new yh;return t.capture=e.aX.cO,t.passive=e.aX.cN,t})()}E=bf.prototype=new D,E.constructor=bf;function xf(){}xf.prototype=E,E.a1=(function(e){this.hP(e,!1)}),E.hP=(function(e,t){if(nh(e,this)===-1){var n=new Z((t=>(A().hy(e.F,this),new wo(t.eI,new Om((()=>{var t=nh(e,this);t!==-1&&(th(e,t),A().jw(e.F,this))})))))),r=t?Xs().jW(e,n):vo().cx(e.a7,new Z((t=>n.j(new As(e,t)))),!1);return eh(e,this,t),r}else{var i=new Z((e=>void 0));return vo().h8(e.a7,new Z((t=>{i.j(new As(e,t))})),!1)}}),E.t=(function(){return`EventListener(`+this.aX.br.cb+`)`});var Sf=new O().i(bf,`com.raquo.laminar.modifiers.EventListener`,{cD:1,R:1,ao:1});function Cf(e,t,n){this.eL=null,this.eM=null,this.eK=null,this.eL=e,this.eM=t,this.eK=n}E=Cf.prototype=new D,E.constructor=Cf;function wf(){}wf.prototype=E,E.a1=(function(e){this.eK.gd(e,this.eL,this.eM)}),new O().i(Cf,`com.raquo.laminar.modifiers.KeySetter`,{cE:1,R:1,cR:1});function Tf(e,t,n){this.eN=null,this.eP=null,this.eO=null,this.eN=e,this.eP=t,this.eO=n}E=Tf.prototype=new D,E.constructor=Tf;function Ef(){}Ef.prototype=E,E.a1=(function(e){this.hQ(e)}),E.hQ=(function(e){e.jj(this.eN);var t=this.eP,n=new Z((t=>{this.eO.gd(e,t,this)}));return vo().jM(e.a7,t,n)}),new O().i(Tf,`com.raquo.laminar.modifiers.KeyUpdater`,{cF:1,R:1,ao:1});function W(e,t){if(this.cW=null,this.eT=null,this.eU=null,this.eT=t,nd(this),e===null)throw ip(new K,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!A().iX(e,document))throw ip(new K,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eU=e,this.j5()}E=W.prototype=new D,E.constructor=W;function Df(){}Df.prototype=E,E.cr=(function(){return this.cW}),E.gu=(function(e){this.cW=e}),E.j5=(function(){return this.cW.gb(),Ks().bG(this,this.eT,void 0)}),E.aN=(function(){return this.eU}),new O().i(W,`com.raquo.laminar.nodes.RootNode`,{cW:1,a9:1,aq:1});function Of(e,t,n){this.cY=null,this.eY=null,this.eX=null,this.eY=e,this.eX=n,rd(this,e,!1)}E=Of.prototype=new ad,E.constructor=Of;function kf(){}kf.prototype=E,E.du=(function(){return this.eY}),E.hB=(function(){var e=this.eX;return e===void 0?void 0:e.map((e=>e.k1.ag))}),new O().i(Of,`com.raquo.laminar.tags.CustomHtmlTag`,{ar:1,as:1,aa:1});function Af(){this.af=null,this.aU=null,this.f0=null,this.f1=!1,Lu(this,`appearance`,new cd)}E=Af.prototype=new zu,E.constructor=Af;function jf(){}jf.prototype=E,E.ix=(function(){return this.f1||=(this.f0=Nf().c(`filled`),!0),this.f0}),new O().i(Af,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance$`,{d4:1,a0:1,v:1});var Mf;function Nf(){return Mf||=new Af,Mf}function Pf(){this.af=null,this.aU=null,this.f2=null,this.f3=!1,this.f4=null,this.f5=!1,this.f6=null,this.f7=!1,Lu(this,`size`,new cd)}E=Pf.prototype=new zu,E.constructor=Pf;function Ff(){}Ff.prototype=E,E.gR=(function(){return this.f3||=(this.f2=Lf().c(`large`),!0),this.f2}),E.gT=(function(){return this.f5||=(this.f4=Lf().c(`medium`),!0),this.f4}),E.h6=(function(){return this.f7||=(this.f6=Lf().c(`small`),!0),this.f6}),new O().i(Pf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{d5:1,a0:1,v:1});var If;function Lf(){return If||=new Pf,If}function Rf(){this.af=null,this.aU=null,this.f8=null,this.f9=!1,Lu(this,`placement`,new cd)}E=Rf.prototype=new zu,E.constructor=Rf;function zf(){}zf.prototype=E,E.jU=(function(){return this.f9||=(this.f8=Vf().c(`top`),!0),this.f8}),new O().i(Rf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$SelectPlacement$`,{d6:1,a0:1,v:1});var Bf;function Vf(){return Bf||=new Rf,Bf}function Hf(){this.aZ=null,this.aY=null,this.b0=!1,this.b1=null,this.b2=!1,ud(this,`wa-divider`)}E=Hf.prototype=new fd,E.constructor=Hf;function Uf(){}Uf.prototype=E,E.cn=(function(){return ft}),new O().i(Hf,`io.github.nguyenyou.webawesome.laminar.Divider$`,{d7:1,a3:1,a2:1});var Wf;function Gf(){return Wf||=new Hf,Wf}function Kf(){this.aZ=null,this.aY=null,this.b0=!1,this.b1=null,this.b2=!1,this.fa=null,this.fb=!1,this.fc=null,this.fd=!1,ud(this,`wa-icon`)}E=Kf.prototype=new fd,E.constructor=Kf;function qf(){}qf.prototype=E,E.be=(function(){return this.fb||=(this.fa=(Y(),Lu(new Ru,`name`,j().Z)),!0),this.fa}),E.dC=(function(){return this.fd||=(this.fc=(Y(),Lu(new Ru,`variant`,j().Z)),!0),this.fc}),E.cn=(function(){return Rt}),new O().i(Kf,`io.github.nguyenyou.webawesome.laminar.Icon$`,{d8:1,a3:1,a2:1});var Jf;function Yf(){return Jf||=new Kf,Jf}function Xf(){this.aZ=null,this.aY=null,this.b0=!1,this.b1=null,this.b2=!1,this.fG=null,this.fH=!1,ud(this,`wa-option`)}E=Xf.prototype=new fd,E.constructor=Xf;function Zf(){}Zf.prototype=E,E.h=(function(){return this.fH||=(this.fG=(Y(),Lu(new Ru,`value`,j().Z)),!0),this.fG}),E.cn=(function(){return en}),new O().i(Xf,`io.github.nguyenyou.webawesome.laminar.UOption$`,{db:1,a3:1,a2:1});var Qf;function G(){return Qf||=new Xf,Qf}function $f(){}E=$f.prototype=new Hd,E.constructor=$f;function ep(){}ep.prototype=E,E.j=(function(e){return Y().d}),new O().i($f,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{dd:1,dR:1,e:1});function tp(e){if(e.av.Z)return e.av.Q().ds()+`[]`;for(var t=e.av.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function np(e){this.cZ=null,this.av=e}E=np.prototype=new D,E.constructor=np;function rp(){}rp.prototype=E,E.t=(function(){return(this.av.Y?`interface `:this.av.X?``:`class `)+this.av.N}),E.ds=(function(){return this.cZ===null&&(this.cZ=tp(this)),this.cZ}),new O().i(np,`java.lang.Class`,{dl:1,a:1,M:1});function ip(e,t){return Dd(e,t,null,!0,!0),e}var K=class extends Od{};new O().i(K,`java.lang.Exception`,{L:1,t:1,a:1});function ap(){}E=ap.prototype=new D,E.constructor=ap;function op(){}op.prototype=E;function sp(){this.hr=null,lp=this,this.hr=Cp()}E=sp.prototype=new Wd,E.constructor=sp;function cp(){}cp.prototype=E,new O().i(sp,`scala.Predef$`,{e0:1,dU:1,dV:1});var lp;function up(){return lp||=new sp,lp}function dp(e,t){return e.cj=t,e}function fp(){this.cj=null}E=fp.prototype=new D,E.constructor=fp;function pp(){}pp.prototype=E,E.dr=(function(e){return this.cj.dq(e,$_())}),E.dn=(function(e){return this.cj.dq(e,$_())});function mp(e,t){return new Uh(e).hW(t)}function hp(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?q().z:new qh(e,r,i)}function gp(e,t){for(var n=t.s();e.x()&&n.x();)if(!Yl().I(e.n(),n.n()))return!1;return e.x()===n.x()}function _p(){this.z=null,yp=this,this.z=new Lh}E=_p.prototype=new D,E.constructor=_p;function vp(){}vp.prototype=E,new O().i(_p,`scala.collection.Iterator$`,{ej:1,a4:1,a:1});var yp;function q(){return yp||=new _p,yp}function bp(){}E=bp.prototype=new D,E.constructor=bp;function xp(){}xp.prototype=E,new O().i(bp,`scala.collection.immutable.Map$`,{ey:1,eo:1,a:1});var Sp;function Cp(){return Sp||=new bp,Sp}function wp(e){this.g0=null,this.g0=e}E=wp.prototype=new qd,E.constructor=wp;function Tp(){}Tp.prototype=E,E.ab=(function(){return(0,this.g0)()}),new O().i(wp,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eT:1,bf:1,ac:1});function J(e){this.g1=null,this.g1=e}E=J.prototype=new Yd,E.constructor=J;function Ep(){}Ep.prototype=E,E.j=(function(e){return(0,this.g1)(e)}),new O().i(J,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eU:1,bg:1,e:1});function Dp(){}E=Dp.prototype=new D,E.constructor=Dp;function Op(){}Op.prototype=E,E.t=(function(){return`<function1>`}),E.j=(function(e){return this.gf(e,Ml().ci)});var kp=new O().i(0,`scala.runtime.Nothing$`,{f0:1,t:1,a:1});function Ap(){}E=Ap.prototype=new D,E.constructor=Ap;function jp(){}jp.prototype=E,E.iE=(function(e){return(t=>e.j(t))}),new O().i(Ap,`scala.scalajs.js.Any$`,{f5:1,f6:1,f7:1});var Mp;function Np(){return Mp||=new Ap,Mp}function Pp(){}E=Pp.prototype=new qd,E.constructor=Pp;function Fp(){}Fp.prototype=E;function Ip(){}E=Ip.prototype=new Yd,E.constructor=Ip;function Lp(){}Lp.prototype=E;function Rp(){}E=Rp.prototype=new Zd,E.constructor=Rp;function zp(){}zp.prototype=E;function Bp(){}E=Bp.prototype=new $d,E.constructor=Bp;function Vp(){}Vp.prototype=E;function Hp(e,t,n,r){if(this.dH=null,this.dF=!1,this.cz=null,this.dG=null,this.dH=e,this.dF=t,this.cz=n,r===null)throw new yh;this.dG=void 0}E=Hp.prototype=new D,E.constructor=Hp;function Up(){}Up.prototype=E,E.cu=(function(){return this.dG}),E.cp=(function(){return Ea(this)}),E.t=(function(){return Da(this)}),E.dw=(function(e){try{this.dH.j(e)}catch(e){var t=e instanceof Od?e:new $(e);this.dF?this.cw(new hg(t)):H().Y(new hg(t))}}),E.cw=(function(e){try{this.cz.bc(e)?this.cz.j(e):H().Y(e)}catch(n){var t=n instanceof Od?n:new $(n);H().Y(new gg(t,e))}}),E.bV=(function(e){e.bS(new Z((e=>{this.cw(e)})),new Z((e=>{this.dw(e)})))}),new O().i(Hp,`com.raquo.airstream.core.Observer$$anon$8`,{br:1,X:1,V:1,a7:1});function Wp(e,t,n){if(this.cA=null,this.dI=!1,this.dJ=null,this.cA=e,this.dI=t,n===null)throw new yh;this.dJ=void 0}E=Wp.prototype=new D,E.constructor=Wp;function Gp(){}Gp.prototype=E,E.cu=(function(){return this.dJ}),E.cp=(function(){return Ea(this)}),E.t=(function(){return Da(this)}),E.dw=(function(e){this.bV(new pg(e))}),E.cw=(function(e){this.bV(new dg(e))}),E.bV=(function(e){try{this.cA.bc(e)?this.cA.j(e):e.bS(new Z((e=>{H().Y(e)})),new Z((e=>void 0)))}catch(n){var t=n instanceof Od?n:new $(n);this.dI&&e.gQ()?this.cw(new hg(t)):e.bS(new Z((e=>{H().Y(new gg(t,e))})),new Z((e=>{H().Y(new hg(t))})))}}),new O().i(Wp,`com.raquo.airstream.core.Observer$$anon$9`,{bs:1,X:1,V:1,a7:1});function Kp(e){if(this.e1=null,this.e2=!1,this.he=null,e===null)throw new yh;is(this)}E=Kp.prototype=new D,E.constructor=Kp;function qp(){}qp.prototype=E,E.jO=(function(){return this.e2||=(this.e1=new od(`svg`,!1),!0),this.e1}),new O().i(Kp,`com.raquo.laminar.api.Laminar$svg$`,{bX:1,cn:1,c6:1,c8:1});function Jp(){this.d=null,Xp=this,this.d=new pv}E=Jp.prototype=new D,E.constructor=Jp;function Yp(){}Yp.prototype=E,new O().i(Jp,`com.raquo.laminar.api.package$`,{c0:1,al:1,am:1,ak:1});var Xp;function Y(){return Xp||=new Jp,Xp}function Zp(e,t,n){return e.aV=t,e.aW=n,e}function Qp(){this.aV=null,this.aW=null}E=Qp.prototype=new Ts,E.constructor=Qp;function $p(){}$p.prototype=E,E.c=(function(e){return new Cf(this,Ji(e),new Nm(((e,t,n)=>{A().h4(e,t,n)})))});function em(e){this.eW=null,this.cX=null,this.eW=Q(),this.cX=A().i1(e)}E=em.prototype=new D,E.constructor=em;function tm(){}tm.prototype=E,E.h5=(function(e){this.eW=e}),E.hc=(function(e){}),E.a1=(function(e){Ks().bG(e,this,void 0)}),E.jR=(function(){return this.cX.data}),E.aN=(function(){return this.cX}),new O().i(em,`com.raquo.laminar.nodes.TextNode`,{cY:1,a9:1,R:1,ap:1});function nm(){this.aZ=null,this.aY=null,this.b0=!1,this.b1=null,this.b2=!1,this.fo=null,this.fp=!1,this.fy=null,this.fz=!1,this.fw=null,this.fx=!1,this.fs=null,this.ft=!1,this.fm=null,this.fn=!1,this.fg=null,this.fh=!1,this.fA=null,this.fB=!1,this.fe=null,this.ff=!1,this.fq=null,this.fr=!1,this.fk=null,this.fl=!1,this.fu=null,this.fv=!1,this.fi=null,this.fj=!1,ud(this,`wa-select`)}E=nm.prototype=new fd,E.constructor=nm;function rm(){}rm.prototype=E,E.bU=(function(){return this.fp||=(this.fo=(Y(),new Pu(`input`)),!0),this.fo}),E.h=(function(){return this.fz||=(this.fy=(Y(),Lu(new Ru,`value`,j().Z)),!0),this.fy}),E.bi=(function(){return this.fx||=(this.fw=Lf(),!0),this.fw}),E.au=(function(){return this.ft||=(this.fs=(Y(),Lu(new Ru,`placeholder`,j().Z)),!0),this.fs}),E.gU=(function(){return this.fn||=(this.fm=(Y(),Lu(new Ru,`multiple`,j().bq)),!0),this.fm}),E.i5=(function(){return this.fh||=(this.fg=(Y(),Lu(new Ru,`disabled`,j().bq)),!0),this.fg}),E.bl=(function(){return this.fB||=(this.fA=(Y(),Lu(new Ru,`with-clear`,j().bq)),!0),this.fA}),E.hD=(function(){return this.ff||=(this.fe=Nf(),!0),this.fe}),E.jq=(function(){return this.fr||=(this.fq=(Y(),Lu(new Ru,`pill`,j().bq)),!0),this.fq}),E.dt=(function(){return this.fl||=(this.fk=(Y(),Lu(new Ru,`label`,j().Z)),!0),this.fk}),E.jr=(function(){return this.fv||=(this.fu=Vf(),!0),this.fu}),E.iQ=(function(){return this.fj||=(this.fi=(Y(),Lu(new Ru,`hint`,j().Z)),!0),this.fi}),E.cn=(function(){return Vi}),new O().i(nm,`io.github.nguyenyou.webawesome.laminar.Select$`,{d9:1,a3:1,a2:1,de:1});var im;function X(){return im||=new nm,im}function am(){}E=am.prototype=new D,E.constructor=am;function om(){}om.prototype=E;function sm(e,t){return e===t}function cm(e){return e?1231:1237}var lm=new O().i(0,`java.lang.Boolean`,{di:1,a:1,S:1,M:1},(e=>typeof e==`boolean`));function um(e){return e}function dm(e,t){return t instanceof Ui&&e===t.c}var fm=new O().i(0,`java.lang.Character`,{ay:1,a:1,S:1,M:1},(e=>e instanceof Ui)),pm=class extends K{};function mm(){this.v=null,this.v=``}E=mm.prototype=new D,E.constructor=mm;function hm(){}hm.prototype=E,E.hE=(function(e){var t=Ed().j7(e,0,e.a.length);return this.v=``+this.v+t,this}),E.t=(function(){return this.v}),E.p=(function(){return this.v.length}),E.gs=(function(e){return this.v.charCodeAt(e)}),new O().i(mm,`java.lang.StringBuilder`,{dA:1,ab:1,aw:1,a:1});function gm(){}E=gm.prototype=new op,E.constructor=gm;function _m(){}_m.prototype=E;function vm(){}E=vm.prototype=new D,E.constructor=vm;function ym(){}ym.prototype=E,E.t=(function(){return`<function1>`}),E.bc=(function(e){return!1}),E.hH=(function(e){throw new kh(e)}),E.j=(function(e){this.hH(e)}),new O().i(vm,`scala.PartialFunction$$anon$1`,{dZ:1,f:1,e:1,a:1});function bm(){}E=bm.prototype=new D,E.constructor=bm;function xm(){}xm.prototype=E,E.s=(function(){return this}),E.cq=(function(e){return this.bY(e,-1)}),E.bY=(function(e,t){return hp(this,e,t)}),E.t=(function(){return`<iterator>`}),E.bF=(function(e,t,n,r){return zl(this,e,t,n,r)}),E.D=(function(){return-1});function Sm(e,t){return e.ck=t,e}function Cm(){this.ck=null}E=Cm.prototype=new D,E.constructor=Cm;function wm(){}wm.prototype=E,E.ge=(function(e){return this.ck.dn(e)}),E.gJ=(function(e){return this.ck.dr(e)}),E.dr=(function(e){return this.gJ(e)}),E.dn=(function(e){return this.ge(e)});function Tm(e,t){return t>=0&&e.at(t)>0}function Em(e){return e.at(0)===0}function Dm(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:gp(e.s(),t)}function Om(e){this.g4=null,this.g4=e}E=Om.prototype=new Fp,E.constructor=Om;function km(){}km.prototype=E,E.ab=(function(){return(0,this.g4)()}),new O().i(Om,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{fd:1,fc:1,bf:1,ac:1});function Z(e){this.g5=null,this.g5=e}E=Z.prototype=new Lp,E.constructor=Z;function Am(){}Am.prototype=E,E.j=(function(e){return(0,this.g5)(e)}),new O().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ff:1,fe:1,bg:1,e:1});function jm(e){this.g6=null,this.g6=e}E=jm.prototype=new zp,E.constructor=jm;function Mm(){}Mm.prototype=E,E.dm=(function(e,t){return(0,this.g6)(e,t)}),new O().i(jm,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{fh:1,fg:1,eV:1,dS:1});function Nm(e){this.g7=null,this.g7=e}E=Nm.prototype=new Vp,E.constructor=Nm;function Pm(){}Pm.prototype=E,E.gd=(function(e,t,n){return(0,this.g7)(e,t,n)}),new O().i(Nm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{fj:1,fi:1,eW:1,dT:1});function Fm(){}E=Fm.prototype=new D,E.constructor=Fm;function Im(){}Im.prototype=E;function Lm(e){e.bp=k().C(z().b(new(_f.r()).C([]))),e.cH=k().C(z().b(new(Ta.r()).C([]))),e.c8=!1}function Rm(e,t,n){var r=Za(),i=(()=>{Vm(e);var r=zm(e,t,n);return t.bV(B_(e)),Hm(e),r}),a=!hf(e);if(r.E||!a)var o=i();else{r.E=!0;try{var o=i()}finally{r.E=!1,qa(r)}}return o}function zm(e,t,n){var r=new wo(n,new Om((()=>{mf(e,t)})));return e.bp.push(t),r}function Bm(e,t){Fa().jy(e.bp,t)&&Um(e)}function Vm(e){e.c8||=!0}function Hm(e){Wm(e)===1&&vg(e)}function Um(e){hf(e)||(e.c8=!1)}function Wm(e){var t=e.bp.length,n=e.cH;return(t|0)+(n.length|0)|0}function Gm(e){e.dV=ja().iF(new Km(e),(ja(),!0))}function Km(e){if(this.dW=null,e===null)throw new yh;this.dW=e}E=Km.prototype=new Op,E.constructor=Km;function qm(){}qm.prototype=E,E.iW=(function(e){return!0}),E.hL=(function(e,t){new Ba(new Z((t=>{this.dW.jD(e,t)})))}),E.bc=(function(e){return this.iW(e)}),E.gf=(function(e,t){return this.hL(e,t)}),new O().i(Km,`com.raquo.airstream.state.Var$$anon$1`,{bN:1,bh:1,e:1,f:1,a:1});function Jm(e){if(e===null)throw new yh}E=Jm.prototype=new Op,E.constructor=Jm;function Ym(){}Ym.prototype=E,E.bc=(function(e){return typeof e==`string`}),E.gf=(function(e,t){return typeof e==`string`?e:t.j(e)}),new O().i(Jm,`com.raquo.laminar.DomApi$$anon$2`,{bS:1,bh:1,e:1,f:1,a:1});function Xm(e,t){this.ca=null,this.cL=null,this.ca=e,this.cL=t}E=Xm.prototype=new D,E.constructor=Xm;function Zm(){}Zm.prototype=E,E.a1=(function(e){var t=this.cL;t!==void 0&&t.gY(e,this.ca),Ks().bG(e,this.ca,void 0)}),E.jX=(function(e){return new Xm(this.ca,e.hG(this.cL))});var Qm=new O().i(Xm,`com.raquo.laminar.inserters.StaticChildInserter`,{cs:1,R:1,cq:1,cu:1,cp:1});function $m(e){e.cT=new Do(new Om((()=>{e.a7.gb()})),new Om((()=>{e.a7.i2()}))),e.aA=void 0}function eh(e,t,n){if(e.aA===void 0)e.aA=k().C(z().b(new(Sf.r()).C([t])));else if(n){var r=e.aA;if(r===void 0){var i;throw new Sh(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aA;if(a===void 0){var o;throw new Sh(`undefined.get`)}else var o=a;o.push(t)}}function th(e,t){var n=e.aA;n!==void 0&&n.splice(t,1)}function nh(e,t){var n=e.aA;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Ki(a,t))?r=!0:i=1+i|0}return r?i:-1}function rh(e,t){ah(e,e.ce,t)&&oh(e,t)}function ih(e,t){var n=e.ce;e.ce=t,ah(e,n,t)||oh(e,t)}function ah(e,t,n){var r=!t.o()&&!t.A().cr().L.o(),i=!n.o()&&!n.A().cr().L.o();return r&&!i}function oh(e,t){sh(e,t.o()?Q():new Kg(t.A().cr()))}function sh(e,t){if(t.o())e.cT.hT();else{var n=t.A();e.cT.jH(n)}}function ch(){}E=ch.prototype=new om,E.constructor=ch;function lh(){}lh.prototype=E;var uh=class extends pm{constructor(e){super(),Dd(this,e,null,!0,!0)}};new O().i(uh,`java.lang.ArithmeticException`,{dh:1,T:1,L:1,t:1,a:1});var dh=new O().i(0,`java.lang.Byte`,{dj:1,U:1,a:1,S:1,M:1},(e=>ra(e)));function fh(e,t){return Dd(e,t,null,!0,!0),e}function ph(e){return Dd(e,null,null,!0,!0),e}var mh=class extends pm{};new O().i(mh,`java.lang.IllegalArgumentException`,{dp:1,T:1,L:1,t:1,a:1});function hh(e,t){return Dd(e,t,null,!0,!0),e}var gh=class extends pm{};new O().i(gh,`java.lang.IndexOutOfBoundsException`,{aA:1,T:1,L:1,t:1,a:1});function _h(){}E=_h.prototype=new om,E.constructor=_h;function vh(){}vh.prototype=E,new O().i(_h,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dt:1,av:1,at:1,ax:1,au:1});var yh=class extends pm{constructor(){super(),Dd(this,null,null,!0,!0)}};new O().i(yh,`java.lang.NullPointerException`,{dv:1,T:1,L:1,t:1,a:1});var bh=new O().i(0,`java.lang.Short`,{dw:1,U:1,a:1,S:1,M:1},(e=>ia(e))),xh=class extends pm{constructor(e){super(),Dd(this,e,null,!0,!0)}};new O().i(xh,`java.lang.UnsupportedOperationException`,{dE:1,T:1,L:1,t:1,a:1});var Sh=class extends pm{constructor(e){super(),Dd(this,e,null,!0,!0)}};new O().i(Sh,`java.util.NoSuchElementException`,{dJ:1,T:1,L:1,t:1,a:1});function Ch(){}E=Ch.prototype=new _m,E.constructor=Ch;function wh(){}wh.prototype=E,E.j=(function(e){return e}),E.t=(function(){return`generalized constraint`}),new O().i(Ch,`scala.$less$colon$less$$anon$1`,{dO:1,dL:1,dM:1,e:1,a:1});function Th(e){return e.d4||=(e.d5=e.ch===null?`null`:Oh(e),!0),e.d5}function Eh(e){return e.d4?e.d5:Th(e)}function Dh(e){var t=e.ch;return`of class `+Gi(t)}function Oh(e){try{return e.ch+` (`+Dh(e)+`)`}catch{return`an instance `+Dh(e)}}var kh=class extends pm{constructor(e){super(),this.d5=null,this.ch=null,this.d4=!1,this.ch=e,Dd(this,null,null,!0,!0)}bT(){return Eh(this)}};new O().i(kh,`scala.MatchError`,{dW:1,T:1,L:1,t:1,a:1});function Ah(){}E=Ah.prototype=new D,E.constructor=Ah;function jh(){}jh.prototype=E,E.o=(function(){return this===Q()}),E.D=(function(){return this.o()?0:1}),E.s=(function(){return this.o()?q().z:new zh(this.A())});function Mh(e){this.bv=0,this.fS=0,this.fR=null,this.fR=e,this.bv=0,this.fS=e.V()}E=Mh.prototype=new xm,E.constructor=Mh;function Nh(){}Nh.prototype=E,E.x=(function(){return this.bv<this.fS}),E.n=(function(){var e=this.fR.W(this.bv);return this.bv=1+this.bv|0,e}),new O().i(Mh,`scala.Product$$anon$1`,{e1:1,r:1,s:1,b:1,c:1});function Ph(e){this.cj=null,dp(this,e)}E=Ph.prototype=new pp,E.constructor=Ph;function Fh(){}Fh.prototype=E,new O().i(Ph,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{ef:1,ee:1,a4:1,a:1,ad:1});function Ih(e){return Rl(e,e.ba()+`(`,`, `,`)`)}function Lh(){}E=Lh.prototype=new xm,E.constructor=Lh;function Rh(){}Rh.prototype=E,E.x=(function(){return!1}),E.j9=(function(){throw new Sh(`next on empty iterator`)}),E.D=(function(){return 0}),E.bY=(function(e,t){return this}),E.n=(function(){this.j9()}),new O().i(Lh,`scala.collection.Iterator$$anon$19`,{ek:1,r:1,s:1,b:1,c:1});function zh(e){this.bx=!1,this.fW=null,this.fW=e,this.bx=!1}E=zh.prototype=new xm,E.constructor=zh;function Bh(){}Bh.prototype=E,E.x=(function(){return!this.bx}),E.n=(function(){return this.bx?q().z.n():(this.bx=!0,this.fW)}),E.bY=(function(e,t){return this.bx||e>0||t===0?q().z:this}),new O().i(zh,`scala.collection.Iterator$$anon$20`,{el:1,r:1,s:1,b:1,c:1});function Vh(e){for(;;){if(e.H instanceof Uh){var t=e.H;e.H=t.H,e.ai=t.ai,t.S!==null&&(e.R===null&&(e.R=t.R),t.R.by=e.S,e.S=t.S);continue}return}}function Hh(e){for(;;)if(e.S===null)return e.H=null,e.R=null,!1;else{if(e.H=e.S.iP(),e.R===e.S&&(e.R=e.R.by),e.S=e.S.by,Vh(e),e.ai)return!0;if(e.H!==null&&e.H.x())return e.ai=!0,!0}}function Uh(e){this.H=null,this.S=null,this.R=null,this.ai=!1,this.H=e,this.S=null,this.R=null,this.ai=!1}E=Uh.prototype=new xm,E.constructor=Uh;function Wh(){}Wh.prototype=E,E.x=(function(){return this.ai?!0:this.H===null?!1:this.H.x()?(this.ai=!0,!0):Hh(this)}),E.n=(function(){return this.x()?(this.ai=!1,this.H.n()):q().z.n()}),E.hW=(function(e){var t=new Bl(e,null);return this.S===null?(this.S=t,this.R=t):(this.R.by=t,this.R=t),this.H===null&&(this.H=q().z),this}),new O().i(Uh,`scala.collection.Iterator$ConcatIterator`,{aL:1,r:1,s:1,b:1,c:1});function Gh(e){for(;e.aa>0;)e.aj.x()?(e.aj.n(),e.aa=-1+e.aa|0):e.aa=0}function Kh(e,t){if(e.N<0)return-1;var n=e.N-t|0;return n<0?0:n}function qh(e,t,n){this.aj=null,this.N=0,this.aa=0,this.aj=e,this.N=n,this.aa=t}E=qh.prototype=new xm,E.constructor=qh;function Jh(){}Jh.prototype=E,E.D=(function(){var e=this.aj.D();if(e<0)return-1;var t=e-this.aa|0,n=t<0?0:t;if(this.N<0)return n;var r=this.N;return r<n?r:n}),E.x=(function(){return Gh(this),this.N!==0&&this.aj.x()}),E.n=(function(){return Gh(this),this.N>0?(this.N=-1+this.N|0,this.aj.n()):this.N<0?this.aj.n():q().z.n()}),E.bY=(function(e,t){var n=e>0?e:0;if(t<0)var r=Kh(this,n);else if(t<=n)var r=0;else if(this.N<0)var r=t-n|0;else var i=Kh(this,n),a=t-n|0,r=i<a?i:a;var o=this.aa+n|0;return r===0?q().z:o<0?(this.aa=2147483647,this.N=0,mp(this,new wp((()=>new qh(this.aj,-2147483647+o|0,r))))):(this.aa=o,this.N=r,this)}),new O().i(qh,`scala.collection.Iterator$SliceIterator`,{en:1,r:1,s:1,b:1,c:1});function Yh(e,t){return t>=0&&e.at(t)>0}function Xh(e,t){if(t<0)throw hh(new gh,``+t);var n=e.i8(t);if(n.o())throw hh(new gh,``+t);return n.a5()}function Zh(e,t){return lv(t)?Qh(e,e,t):Dm(e,t)}function Qh(e,t,n){for(;;)if(t===n)return!0;else if(!t.o()&&!n.o()&&Yl().I(t.a5(),n.a5())){var r=t.P(),i=n.P();t=r,n=i}else return t.o()&&n.o()}function $h(e){this.bA=null,this.bA=e}E=$h.prototype=new xm,E.constructor=$h;function eg(){}eg.prototype=E,E.x=(function(){return!this.bA.o()}),E.n=(function(){var e=this.bA.a5();return this.bA=this.bA.P(),e}),new O().i($h,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{es:1,r:1,s:1,b:1,c:1});function tg(){this.ck=null,Sm(this,ug())}E=tg.prototype=new wm,E.constructor=tg;function ng(){}ng.prototype=E,new O().i(tg,`scala.collection.mutable.Buffer$`,{eD:1,ep:1,ad:1,a4:1,a:1});var rg;function ig(){return rg||=new tg,rg}function ag(e){this.bC=0,this.g2=0,this.g3=null,this.g3=e,this.bC=0,this.g2=e.V()}E=ag.prototype=new xm,E.constructor=ag;function og(){}og.prototype=E,E.x=(function(){return this.bC<this.g2}),E.n=(function(){var e=this.g3.W(this.bC);return this.bC=1+this.bC|0,e}),new O().i(ag,`scala.runtime.ScalaRunTime$$anon$1`,{f3:1,r:1,s:1,b:1,c:1});function sg(){}E=sg.prototype=new D,E.constructor=sg;function cg(){}cg.prototype=E,E.dn=(function(e){return this.gK(e)}),E.gK=(function(e){return Gd(jy(new My),e).h3()}),E.dr=(function(e){return this.gK(e)}),new O().i(sg,`scala.scalajs.js.WrappedArray$`,{f9:1,et:1,ad:1,a4:1,a:1});var lg;function ug(){return lg||=new sg,lg}function dg(e){this.bD=null,this.bD=e}E=dg.prototype=new Im,E.constructor=dg;function fg(){}fg.prototype=E,E.gP=(function(){return!0}),E.gQ=(function(){return!1}),E.bS=(function(e,t){return e.j(this.bD)}),E.X=(function(){return`Failure`}),E.V=(function(){return 1}),E.W=(function(e){return e===0?this.bD:B().aM(e)}),E.a9=(function(){return new ag(this)}),E.r=(function(){return V().bg(this,-889275714,!1)}),E.t=(function(){return z().dj(this)}),E.l=(function(e){if(this===e)return!0;if(e instanceof dg){var t=this.bD,n=e.bD;return t===null?n===null:t.l(n)}else return!1}),new O().i(dg,`scala.util.Failure`,{bj:1,bl:1,N:1,d:1,a:1});function pg(e){this.bE=null,this.bE=e}E=pg.prototype=new Im,E.constructor=pg;function mg(){}mg.prototype=E,E.gP=(function(){return!1}),E.gQ=(function(){return!0}),E.bS=(function(e,t){try{return t.j(this.bE)}catch(t){var n=t instanceof Od?t:new $(t);if(Su().hK(n))return e.j(n);throw n instanceof $?n.U:n}}),E.X=(function(){return`Success`}),E.V=(function(){return 1}),E.W=(function(e){return e===0?this.bE:B().aM(e)}),E.a9=(function(){return new ag(this)}),E.r=(function(){return V().bg(this,-889275714,!1)}),E.t=(function(){return z().dj(this)}),E.l=(function(e){return this===e||e instanceof pg&&Yl().I(this.bE,e.bE)}),new O().i(pg,`scala.util.Success`,{bk:1,bl:1,N:1,d:1,a:1});var hg=class e extends cf{constructor(e){super(),this.bm=null,this.bm=e,Dd(this,`ObserverError: `+H().cs(e),null,!0,!0)}a9(){return new Mh(this)}r(){return V().bg(this,-889275714,!1)}l(t){if(this===t)return!0;if(t instanceof e){var n=this.bm,r=t.bm;return n===null?r===null:n.l(r)}else return!1}V(){return 1}X(){return`ObserverError`}W(e){if(e===0)return this.bm;throw hh(new gh,``+e)}t(){return`ObserverError: `+this.bm}};new O().i(hg,`com.raquo.airstream.core.AirstreamError$ObserverError`,{af:1,a6:1,t:1,a:1,d:1,N:1});var gg=class e extends cf{constructor(e,t){super(),this.bo=null,this.bn=null,this.bo=e,this.bn=t,Dd(this,`ObserverErrorHandlingError: `+H().cs(e)+`; cause: `+H().cs(t),null,!0,!0),this.iT(t)}a9(){return new Mh(this)}r(){return V().bg(this,-889275714,!1)}l(t){if(this===t)return!0;if(t instanceof e){var n=this.bo,r=t.bo;if(n===null?r===null:n.l(r)){var i=this.bn,a=t.bn;return i===null?a===null:i.l(a)}else return!1}else return!1}V(){return 2}X(){return`ObserverErrorHandlingError`}W(e){if(e===0)return this.bo;if(e===1)return this.bn;throw hh(new gh,``+e)}t(){return`ObserverErrorHandlingError: `+this.bo+`; cause: `+this.bn}};new O().i(gg,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ag:1,a6:1,t:1,a:1,d:1,N:1});var _g=class e extends cf{constructor(e,t){super(),this.aP=null,this.aO=0,this.aP=e,this.aO=t,Dd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a9(){return new Mh(this)}r(){var e=-889275714;return e=B().e(e,Rg(`TransactionDepthExceeded`)),e=B().e(e,B().B(this.aP)),e=B().e(e,this.aO),B().q(e,2)}l(t){return this===t?!0:t instanceof e&&this.aO===t.aO?this.aP===t.aP:!1}V(){return 2}X(){return`TransactionDepthExceeded`}W(e){if(e===0)return this.aP;if(e===1)return this.aO;throw hh(new gh,``+e)}t(){return`TransactionDepthExceeded: `+this.aP+`; maxDepth: `+this.aO}};new O().i(_g,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ah:1,a6:1,t:1,a:1,d:1,N:1});function vg(e){B_(e)}function yg(e){this.dT=null,this.dV=null,this.cG=null,this.cF=null,this.dU=null,this.dT=void 0,Gm(this),this.cG=e,this.cF=new ev(this.cG,new Om((()=>Da(this)))),this.dU=this.cF}E=yg.prototype=new D,E.constructor=yg;function bg(){}bg.prototype=E,E.cu=(function(){return this.dT}),E.cp=(function(){return Ea(this)}),E.t=(function(){return Da(this)}),E.h9=(function(){return this.dU}),E.jD=(function(e,t){this.cG=e,V_(this.cF,e,t)}),new O().i(yg,`com.raquo.airstream.state.SourceVar`,{bJ:1,ai:1,aj:1,X:1,V:1,bL:1});function xg(e){this.aV=null,this.aW=null,this.ey=null,this.ez=!1,Zp(this,e,Ty())}E=xg.prototype=new $p,E.constructor=xg;function Sg(){}Sg.prototype=E,E.hU=(function(){return this.ez||=(this.ey=this.c(`column`),!0),this.ey}),new O().i(xg,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cd:1,a1:1,v:1,Y:1,Z:1,ch:1});function Cg(e){this.aV=null,this.aW=null,this.eA=null,this.eB=!1,Zp(this,e,Ty())}E=Cg.prototype=new $p,E.constructor=Cg;function wg(){}wg.prototype=E,E.jY=(function(){return this.eB||=(this.eA=this.c(`wrap`),!0),this.eA}),new O().i(Cg,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{ce:1,a1:1,v:1,Y:1,Z:1,ci:1});function Tg(e,t){var n=e.cU;n===void 0?e.cU=ou().hJ(k().C(z().b(new(Vg.r()).C([t])))):n.push(t)|0}function Eg(e,t){var n=e.eS;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].ky()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function Dg(e,t){this.ce=null,this.a7=null,this.cT=null,this.aA=null,this.cV=null,this.F=null,this.eS=null,this.cU=null,this.cV=e,this.F=t,this.ce=Q(),nd(this),$m(this),this.eS=void 0,this.cU=void 0}E=Dg.prototype=new D,E.constructor=Dg;function Og(){}Og.prototype=E,E.a1=(function(e){Ks().bG(e,this,void 0)}),E.cr=(function(){return this.a7}),E.gu=(function(e){this.a7=e}),E.hc=(function(e){rh(this,e)}),E.h5=(function(e){ih(this,e)}),E.hY=(function(){if(A().gN(this.F)){var e=this.cV;return e instanceof Of?e.hB():void 0}else return ls().eE}),E.iU=(function(e){var t=this.hY();return t!==void 0&&zo().iR(t,e,0)}),E.jj=(function(e){if(e instanceof Bu&&this.iU(e.ag)){if(Eg(this,e.ag))throw ip(new K,"Can not add uncontrolled `"+e.ag+" <-- ???` to element `"+A().gv(this.F)+"` that already has an input controller for `"+e.ag+"` property.");Tg(this,e.ag)}}),E.t=(function(){return`ReactiveHtmlElement(`+(this.F===null?`tag=`+this.cV.du():this.F.outerHTML)+`)`}),E.aN=(function(){return this.F});var kg=new O().i(Dg,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cV:1,a9:1,R:1,ap:1,aq:1,cT:1});function Ag(e,t){return Object.is(e,t)}function jg(e){return Sc().dv(e)}var Mg=new O().i(0,`java.lang.Double`,{az:1,U:1,a:1,S:1,M:1,W:1},(e=>typeof e==`number`)),Ng=new O().i(0,`java.lang.Float`,{dm:1,U:1,a:1,S:1,M:1,W:1},(e=>oa(e))),Pg=new O().i(0,`java.lang.Integer`,{dq:1,U:1,a:1,S:1,M:1,W:1},(e=>aa(e)));function Fg(e,t){return t instanceof L&&e.i===t.i&&e.k===t.k}function Ig(e){return e.i^e.k}var Lg=new O().i(0,`java.lang.Long`,{aB:1,U:1,a:1,S:1,M:1,W:1},(e=>e instanceof L));function Rg(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function zg(e,t){return e===t}function Bg(e,t){var n=gd().jT(t);return e.indexOf(n)|0}var Vg=new O().i(0,`java.lang.String`,{aD:1,a:1,S:1,ab:1,M:1,W:1},(e=>typeof e==`string`)),Hg=class extends gh{constructor(){super(),Dd(this,null,null,!0,!0)}};new O().i(Hg,`java.lang.StringIndexOutOfBoundsException`,{dB:1,aA:1,T:1,L:1,t:1,a:1});function Ug(){}E=Ug.prototype=new jh,E.constructor=Ug;function Wg(){}Wg.prototype=E,E.iG=(function(){throw new Sh(`None.get`)}),E.X=(function(){return`None`}),E.V=(function(){return 0}),E.W=(function(e){return B().aM(e)}),E.a9=(function(){return new ag(this)}),E.r=(function(){return 2433880}),E.t=(function(){return`None`}),E.A=(function(){this.iG()}),new O().i(Ug,`scala.None$`,{dX:1,aG:1,b:1,N:1,d:1,a:1});var Gg;function Q(){return Gg||=new Ug,Gg}function Kg(e){this.bw=null,this.bw=e}E=Kg.prototype=new jh,E.constructor=Kg;function qg(){}qg.prototype=E,E.A=(function(){return this.bw}),E.X=(function(){return`Some`}),E.V=(function(){return 1}),E.W=(function(e){return e===0?this.bw:B().aM(e)}),E.a9=(function(){return new ag(this)}),E.r=(function(){return V().bg(this,-889275714,!1)}),E.t=(function(){return z().dj(this)}),E.l=(function(e){return this===e||e instanceof Kg&&Yl().I(this.bw,e.bw)}),new O().i(Kg,`scala.Some`,{aH:1,aG:1,b:1,N:1,d:1,a:1});function Jg(){}E=Jg.prototype=new D,E.constructor=Jg;function Yg(){}Yg.prototype=E,E.ba=(function(){return this.bj()}),E.a4=(function(e){Ll(this,e)}),E.bF=(function(e,t,n,r){return zl(this,e,t,n,r)}),E.D=(function(){return-1});function Xg(e,t){return e.M=t,e.m=0,e.G=pl().bb(e.M),e}function Zg(){this.M=null,this.m=0,this.G=0}E=Zg.prototype=new xm,E.constructor=Zg;function Qg(){}Qg.prototype=E,E.D=(function(){return this.G-this.m|0}),E.x=(function(){return this.m<this.G}),E.n=(function(){this.m>=pl().bb(this.M)&&q().z.n();var e=z().b9(this.M,this.m);return this.m=1+this.m|0,e}),E.cq=(function(e){if(e>0){var t=this.m+e|0;if(t<0)var n=this.G;else var r=this.G,n=r<t?r:t;this.m=n}return this}),new O().i(Zg,`scala.collection.ArrayOps$ArrayIterator`,{O:1,r:1,s:1,b:1,c:1,a:1});function $g(e,t){return t<0?0:t>e.a0?e.a0:t}function e_(e){this.fV=null,this.ah=0,this.a0=0,this.fV=e,this.ah=0,this.a0=e.p()}E=e_.prototype=new xm,E.constructor=e_;function t_(){}t_.prototype=E,E.D=(function(){return this.a0}),E.x=(function(){return this.a0>0}),E.n=(function(){if(this.a0>0){var e=this.fV.u(this.ah);return this.ah=1+this.ah|0,this.a0=-1+this.a0|0,e}else return q().z.n()}),E.cq=(function(e){if(e>0){this.ah=this.ah+e|0;var t=this.a0-e|0;this.a0=t<0?0:t}return this}),E.bY=(function(e,t){var n=$g(this,e),r=$g(this,t)-n|0;return this.a0=r<0?0:r,this.ah=this.ah+n|0,this}),new O().i(e_,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{ei:1,r:1,s:1,b:1,c:1,a:1});function n_(e){return e.df||=(e.dg=new Wv(new da(0)),!0),e.dg}function r_(e){return e.df?e.dg:n_(e)}function i_(){this.dg=null,this.hs=null,this.df=!1,o_=this,this.hs=new Ph(this)}E=i_.prototype=new D,E.constructor=i_;function a_(){}a_.prototype=E,E.iC=(function(e,t){return e instanceof Ev?e:this.ha(Id().gI(e,t))}),E.ha=(function(e){if(e===null)return null;if(e instanceof da)return new Wv(e);if(e instanceof _a)return new Bv(e);if(e instanceof ba)return new Iv(e);if(e instanceof va)return new Hv(e);if(e instanceof ya)return new Rv(e);if(e instanceof ma)return new Pv(e);if(e instanceof ha)return new Mv(e);if(e instanceof ga)return new Kv(e);if(e instanceof pa)return new Av(e);if(sl(e,1))return new Jv(e);throw new kh(e)}),E.dq=(function(e,t){return this.iC(e,t)}),new O().i(i_,`scala.collection.immutable.ArraySeq$`,{ex:1,aN:1,aJ:1,aI:1,aK:1,a:1});var o_;function s_(){return o_||=new i_,o_}function c_(){this.ht=null,this.fZ=null,u_=this,this.ht=new Ph(this),this.fZ=new my(new da(0))}E=c_.prototype=new D,E.constructor=c_;function l_(){}l_.prototype=E,E.iD=(function(e,t){return this.j1(Id().gI(e,t))}),E.j1=(function(e){if(e===null)return null;if(e instanceof da)return new my(e);if(e instanceof _a)return new uy(e);if(e instanceof ba)return new oy(e);if(e instanceof va)return new fy(e);if(e instanceof ya)return new cy(e);if(e instanceof ma)return new iy(e);if(e instanceof ha)return new ny(e);if(e instanceof ga)return new gy(e);if(e instanceof pa)return new ey(e);if(sl(e,1))return new vy(e);throw new kh(e)}),E.dq=(function(e,t){return this.iD(e,t)}),new O().i(c_,`scala.collection.mutable.ArraySeq$`,{eB:1,aN:1,aJ:1,aI:1,aK:1,a:1});var u_;function d_(){return u_||=new c_,u_}function f_(e){this.aV=null,this.aW=null,this.ew=null,this.ex=!1,Zp(this,e,Ty())}E=f_.prototype=new $p,E.constructor=f_;function p_(){}p_.prototype=E,E.gH=(function(){return this.ex||=(this.ew=this.c(`flex`),!0),this.ew}),new O().i(f_,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cc:1,a1:1,v:1,Y:1,Z:1,cj:1,cg:1});function m_(e){this.aV=null,this.aW=null,this.eC=null,this.eD=!1,Zp(this,e,Ty())}E=m_.prototype=new $p,E.constructor=m_;function h_(){}h_.prototype=E,E.dx=(function(){return this.eD||=(this.eC=ju(this),!0),this.eC}),new O().i(m_,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cf:1,a1:1,v:1,Y:1,Z:1,ck:1,cl:1});function g_(){}E=g_.prototype=new lh,E.constructor=g_;function __(){}__.prototype=E;function v_(e){this.M=null,this.m=0,this.G=0,this.d6=null,this.d6=e,Xg(this,e)}E=v_.prototype=new Qg,E.constructor=v_;function y_(){}y_.prototype=E,E.ja=(function(){this.m>=this.d6.a.length&&q().z.n();var e=this.d6.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.ja()}),new O().i(v_,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{e5:1,O:1,r:1,s:1,b:1,c:1,a:1});function b_(e){this.M=null,this.m=0,this.G=0,this.d7=null,this.d7=e,Xg(this,e)}E=b_.prototype=new Qg,E.constructor=b_;function x_(){}x_.prototype=E,E.jb=(function(){this.m>=this.d7.a.length&&q().z.n();var e=this.d7.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return sa(this.jb())}),new O().i(b_,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{e6:1,O:1,r:1,s:1,b:1,c:1,a:1});function S_(e){this.M=null,this.m=0,this.G=0,this.d8=null,this.d8=e,Xg(this,e)}E=S_.prototype=new Qg,E.constructor=S_;function C_(){}C_.prototype=E,E.jc=(function(){this.m>=this.d8.a.length&&q().z.n();var e=this.d8.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.jc()}),new O().i(S_,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{e7:1,O:1,r:1,s:1,b:1,c:1,a:1});function w_(e){this.M=null,this.m=0,this.G=0,this.d9=null,this.d9=e,Xg(this,e)}E=w_.prototype=new Qg,E.constructor=w_;function T_(){}T_.prototype=E,E.jd=(function(){this.m>=this.d9.a.length&&q().z.n();var e=this.d9.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.jd()}),new O().i(w_,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{e8:1,O:1,r:1,s:1,b:1,c:1,a:1});function E_(e){this.M=null,this.m=0,this.G=0,this.da=null,this.da=e,Xg(this,e)}E=E_.prototype=new Qg,E.constructor=E_;function D_(){}D_.prototype=E,E.je=(function(){this.m>=this.da.a.length&&q().z.n();var e=this.da.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.je()}),new O().i(E_,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{e9:1,O:1,r:1,s:1,b:1,c:1,a:1});function O_(e){this.M=null,this.m=0,this.G=0,this.db=null,this.db=e,Xg(this,e)}E=O_.prototype=new Qg,E.constructor=O_;function k_(){}k_.prototype=E,E.jf=(function(){this.m>=this.db.a.length&&q().z.n();var e=this.db.a[this.m],t=e.i,n=e.k;return this.m=1+this.m|0,new L(t,n)}),E.n=(function(){return this.jf()}),new O().i(O_,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{ea:1,O:1,r:1,s:1,b:1,c:1,a:1});function A_(e){this.M=null,this.m=0,this.G=0,this.dc=null,this.dc=e,Xg(this,e)}E=A_.prototype=new Qg,E.constructor=A_;function j_(){}j_.prototype=E,E.jg=(function(){this.m>=this.dc.a.length&&q().z.n();var e=this.dc.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.jg()}),new O().i(A_,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{eb:1,O:1,r:1,s:1,b:1,c:1,a:1});function M_(e){this.M=null,this.m=0,this.G=0,this.fU=null,this.fU=e,Xg(this,e)}E=M_.prototype=new Qg,E.constructor=M_;function N_(){}N_.prototype=E,E.jh=(function(){this.m>=this.fU.a.length&&q().z.n(),this.m=1+this.m|0}),E.n=(function(){this.jh()}),new O().i(M_,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{ec:1,O:1,r:1,s:1,b:1,c:1,a:1});function P_(e){this.M=null,this.m=0,this.G=0,this.dd=null,this.dd=e,Xg(this,e)}E=P_.prototype=new Qg,E.constructor=P_;function F_(){}F_.prototype=E,E.ji=(function(){this.m>=this.dd.a.length&&q().z.n();var e=this.dd.a[this.m];return this.m=1+this.m|0,e}),E.n=(function(){return this.ji()}),new O().i(P_,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{ed:1,O:1,r:1,s:1,b:1,c:1,a:1});function I_(e){return e.ba()+`(<not computed>)`}function L_(){}E=L_.prototype=new D,E.constructor=L_;function R_(){}R_.prototype=E;var $=class e extends pm{constructor(e){super(),this.U=null,this.U=e,Dd(this,null,null,!0,!0)}bT(){return Ji(this.U)}X(){return`JavaScriptException`}V(){return 1}W(e){return e===0?this.U:B().aM(e)}a9(){return new ag(this)}r(){return V().bg(this,-889275714,!1)}l(t){return this===t||t instanceof e&&Yl().I(this.U,t.U)}};new O().i($,`scala.scalajs.js.JavaScriptException`,{bi:1,T:1,L:1,t:1,a:1,N:1,d:1});function z_(e,t){e.c6!==void 0&&za().gV(),e.c6=t}function B_(e){var t=e.c6;if(t===void 0){za().gV();var n=B_(e);z_(e,n);var r=n}else var r=t;return r}function V_(e,t,n){z_(e,t);var r=t.gP(),i=!1;i=!1,e.c5=!1;for(var a=e.bp,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bV(t),r&&!i&&(i=!0)}for(var c=e.cH,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.c5=!0;var u=e.c7;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].ab(),d=1+d|0;u.length=0}r&&!i&&t.bS(new Z((e=>{H().Y(e)})),new Z((e=>void 0)))}function H_(e,t){typeof console<`u`&&(e.fJ&&console.error?console.error(t):console.log(t))}function U_(e){this.fJ=!1,this.bt=null,this.fJ=e,new _h,this.bt=``}E=U_.prototype=new __,E.constructor=U_;function W_(){}W_.prototype=E,E.iY=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bt=``+this.bt+t,t=``;else{var r=this.bt,i=t;H_(this,``+r+i.substring(0,n)),this.bt=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new O().i(U_,`java.lang.JSConsoleBasedPrintStream`,{ds:1,dg:1,df:1,av:1,at:1,ax:1,au:1,aw:1});function G_(e,t,n){for(;;)if(t<=0||n.o())return n;else{var r=-1+t|0,i=n.P();t=r,n=i}}function K_(){this.dh=null}E=K_.prototype=new R_,E.constructor=K_;function q_(){}q_.prototype=E,E.t=(function(){return this.dh}),E.l=(function(e){return this===e}),E.r=(function(){return na(this)});function J_(){}E=J_.prototype=new Yg,E.constructor=J_;function Y_(){}Y_.prototype=E,E.t=(function(){return I_(this)});function X_(){this.dh=null,this.dh=`Any`}E=X_.prototype=new q_,E.constructor=X_;function Z_(){}Z_.prototype=E,E.jB=(function(){return xa.l()}),E.j8=(function(e){return new da(e)}),new O().i(X_,`scala.reflect.ManifestFactory$AnyManifest$`,{eP:1,eR:1,eQ:1,eO:1,eN:1,eM:1,eS:1,a:1,d:1});var Q_;function $_(){return Q_||=new X_,Q_}function ev(e,t){this.dX=null,this.c5=!1,this.c7=null,this.bp=null,this.cH=null,this.c8=!1,this.c6=null,this.dY=null,this.dY=t,this.dX=void 0,ff(this),Lm(this),this.c6=void 0,z_(this,e)}E=ev.prototype=new D,E.constructor=ev;function tv(){}tv.prototype=E,E.cu=(function(){return this.dX}),E.t=(function(){return Da(this)}),E.l=(function(e){return this===e}),E.r=(function(){return na(this)}),E.h9=(function(){return this}),E.cp=(function(){return this.dY.ab()+`.signal`}),new O().i(ev,`com.raquo.airstream.state.VarSignal`,{bO:1,ai:1,V:1,bn:1,bp:1,aj:1,bu:1,bA:1,bB:1,bK:1});function nv(e,t){return e===t?!0:rv(t)&&t.gr(e)?e.dz(t):!1}function rv(e){return!!(e&&e.$classData&&e.$classData.n.g)}function iv(){}E=iv.prototype=new Yg,E.constructor=iv;function av(){}av.prototype=E,E.gr=(function(e){return!0}),E.l=(function(e){return nv(this,e)}),E.r=(function(){return V().jC(this)}),E.t=(function(){return Ih(this)}),E.gO=(function(e){return Tm(this,e)}),E.o=(function(){return Em(this)}),E.dz=(function(e){return Dm(this,e)}),E.bc=(function(e){return this.gO(e|0)});function ov(){}E=ov.prototype=new Y_,E.constructor=ov;function sv(){}sv.prototype=E;function cv(e){return!!(e&&e.$classData&&e.$classData.n.n)}function lv(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function uv(e,t){return e.bz=t,e}function dv(){this.bz=null}E=dv.prototype=new sv,E.constructor=dv;function fv(){}fv.prototype=E,E.u=(function(e){return this.bz.u(e)}),E.p=(function(){return this.bz.p()}),E.o=(function(){return this.bz.o()});function pv(){this.eq=null,this.er=!1,this.e8=null,this.e9=!1,this.e4=null,this.e5=!1,this.eo=null,this.ep=!1,this.eu=null,this.ev=!1,this.ei=null,this.ej=!1,this.eg=null,this.eh=!1,this.ek=null,this.el=!1,this.e6=null,this.e7=!1,this.ea=null,this.eb=!1,this.ec=null,this.ed=!1,this.ee=null,this.ef=!1,this.em=null,this.en=!1,this.hg=null,this.e3=null,this.hf=null,this.es=null,this.et=!1,ns(this),Zo(this),Yo(this),Xo(this)}E=pv.prototype=new D,E.constructor=pv;function mv(){}mv.prototype=E,E.h7=(function(){return this.er||=(this.eq=rd(new id,`small`,!1),!0),this.eq}),E.gx=(function(){return this.e9||=(this.e8=rd(new id,`div`,!1),!0),this.e8}),E.hS=(function(){return this.e5||=(this.e4=new Bu(`checked`,j().cK),!0),this.e4}),E.bh=(function(){return this.ep||=(this.eo=new Bu(`selected`,j().cK),!0),this.eo}),E.hb=(function(){return this.ev||=(this.eu=new Bu(`value`,j().Z),!0),this.eu}),E.jl=(function(){return this.ej||=(this.ei=new Pu(`click`),!0),this.ei}),E.jk=(function(){return this.eh||=(this.eg=new Pu(`change`),!0),this.eg}),E.bU=(function(){return this.el||=(this.ek=new Pu(`input`),!0),this.ek}),E.gw=(function(){return this.e7||=(this.e6=new f_(`display`),!0),this.e6}),E.iy=(function(){return this.eb||=(this.ea=new xg(`flex-direction`),!0),this.ea}),E.iz=(function(){return this.ed||=(this.ec=new Cg(`flex-wrap`),!0),this.ec}),E.gL=(function(){return this.ef||=(this.ee=new m_(`gap`),!0),this.ee}),E.jp=(function(){return this.en||=(this.em=new m_(`padding`),!0),this.em}),E.jN=(function(){return this.et||=(this.es=new Kp(this),!0),this.es}),new O().i(pv,`com.raquo.laminar.api.package$$anon$1`,{c1:1,cm:1,c5:1,ca:1,c9:1,cb:1,c7:1,bZ:1,bV:1,bY:1,al:1,am:1,ak:1,bW:1});function hv(e){this.bz=null,uv(this,e)}E=hv.prototype=new fv,E.constructor=hv;function gv(){}gv.prototype=E,E.s=(function(){return new e_(this)}),E.bj=(function(){return`IndexedSeqView`}),E.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),E.D=(function(){return this.p()}),new O().i(hv,`scala.collection.IndexedSeqView$Id`,{eh:1,er:1,e2:1,e3:1,h:1,i:1,b:1,k:1,c:1,j:1,ev:1,a:1,eq:1,l:1,eg:1,o:1});function _v(){}E=_v.prototype=new av,E.constructor=_v;function vv(){}vv.prototype=E;function yv(e,t){return!xv(t)||e.p()===t.p()}function bv(e,t){if(xv(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.gg(),o=t.gg(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=Yl().I(e.u(i),t.u(i)),i=1+i|0;if(i<n&&r)for(var p=e.s().cq(i),m=t.s().cq(i);r&&p.x();)r=Yl().I(p.n(),m.n())}return r}else return Dm(e,t)}function xv(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Sv(){}E=Sv.prototype=new av,E.constructor=Sv;function Cv(){}Cv.prototype=E;function wv(){}E=wv.prototype=new Cv,E.constructor=wv;function Tv(){}Tv.prototype=E,E.gc=(function(e){return Gd(this,e)});function Ev(){}E=Ev.prototype=new vv,E.constructor=Ev;function Dv(){}Dv.prototype=E,E.gr=(function(e){return yv(this,e)}),E.dz=(function(e){return bv(this,e)}),E.bj=(function(){return`IndexedSeq`}),E.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),E.D=(function(){return this.p()}),E.j2=(function(e){for(var t=new da(this.p()),n=0;n<t.a.length;)t.a[n]=e.j(this.u(n)),n=1+n|0;return s_().ha(t)}),E.ba=(function(){return`ArraySeq`}),E.gg=(function(){return 2147483647}),E.gS=(function(e){return this.j2(e)});function Ov(){}E=Ov.prototype=new Cv,E.constructor=Ov;function kv(){}kv.prototype=E,E.bj=(function(){return`IndexedSeq`}),E.at=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),E.D=(function(){return this.p()}),E.ba=(function(){return`ArraySeq`}),E.l=(function(e){return e instanceof Ov&&pl().bb(this.a2())!==pl().bb(e.a2())?!1:nv(this,e)});function Av(e){this.aC=null,this.aC=e}E=Av.prototype=new Dv,E.constructor=Av;function jv(){}jv.prototype=E,E.p=(function(){return this.aC.a.length}),E.r=(function(){var e=V();return e.gq(this.aC,e.y)}),E.l=(function(e){return e instanceof Av?I().gF(this.aC,e.aC):nv(this,e)}),E.s=(function(){return new P_(this.aC)}),E.bQ=(function(e){return this.aC.a[e]}),E.j=(function(e){return this.bQ(e|0)}),E.u=(function(e){return this.bQ(e)}),new O().i(Av,`scala.collection.immutable.ArraySeq$ofBoolean`,{aQ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Mv(e){this.aD=null,this.aD=e}E=Mv.prototype=new Dv,E.constructor=Mv;function Nv(){}Nv.prototype=E,E.p=(function(){return this.aD.a.length}),E.bH=(function(e){return this.aD.a[e]}),E.r=(function(){var e=V();return e.gi(this.aD,e.y)}),E.l=(function(e){return e instanceof Mv?I().gy(this.aD,e.aD):nv(this,e)}),E.s=(function(){return new v_(this.aD)}),E.j=(function(e){return this.bH(e|0)}),E.u=(function(e){return this.bH(e)}),new O().i(Mv,`scala.collection.immutable.ArraySeq$ofByte`,{aR:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Pv(e){this.ak=null,this.ak=e}E=Pv.prototype=new Dv,E.constructor=Pv;function Fv(){}Fv.prototype=E,E.p=(function(){return this.ak.a.length}),E.bI=(function(e){return this.ak.a[e]}),E.r=(function(){var e=V();return e.gj(this.ak,e.y)}),E.l=(function(e){return e instanceof Pv?I().gz(this.ak,e.ak):nv(this,e)}),E.s=(function(){return new b_(this.ak)}),E.bF=(function(e,t,n,r){return new iy(this.ak).bF(e,t,n,r)}),E.j=(function(e){return sa(this.bI(e|0))}),E.u=(function(e){return sa(this.bI(e))}),new O().i(Pv,`scala.collection.immutable.ArraySeq$ofChar`,{aS:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Iv(e){this.aE=null,this.aE=e}E=Iv.prototype=new Dv,E.constructor=Iv;function Lv(){}Lv.prototype=E,E.p=(function(){return this.aE.a.length}),E.r=(function(){var e=V();return e.gk(this.aE,e.y)}),E.l=(function(e){return e instanceof Iv?I().gA(this.aE,e.aE):nv(this,e)}),E.s=(function(){return new S_(this.aE)}),E.bL=(function(e){return this.aE.a[e]}),E.j=(function(e){return this.bL(e|0)}),E.u=(function(e){return this.bL(e)}),new O().i(Iv,`scala.collection.immutable.ArraySeq$ofDouble`,{aT:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Rv(e){this.aF=null,this.aF=e}E=Rv.prototype=new Dv,E.constructor=Rv;function zv(){}zv.prototype=E,E.p=(function(){return this.aF.a.length}),E.r=(function(){var e=V();return e.gl(this.aF,e.y)}),E.l=(function(e){return e instanceof Rv?I().gB(this.aF,e.aF):nv(this,e)}),E.s=(function(){return new w_(this.aF)}),E.bM=(function(e){return this.aF.a[e]}),E.j=(function(e){return this.bM(e|0)}),E.u=(function(e){return this.bM(e)}),new O().i(Rv,`scala.collection.immutable.ArraySeq$ofFloat`,{aU:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Bv(e){this.aG=null,this.aG=e}E=Bv.prototype=new Dv,E.constructor=Bv;function Vv(){}Vv.prototype=E,E.p=(function(){return this.aG.a.length}),E.r=(function(){var e=V();return e.gm(this.aG,e.y)}),E.l=(function(e){return e instanceof Bv?I().gC(this.aG,e.aG):nv(this,e)}),E.s=(function(){return new E_(this.aG)}),E.bN=(function(e){return this.aG.a[e]}),E.j=(function(e){return this.bN(e|0)}),E.u=(function(e){return this.bN(e)}),new O().i(Bv,`scala.collection.immutable.ArraySeq$ofInt`,{aV:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Hv(e){this.aH=null,this.aH=e}E=Hv.prototype=new Dv,E.constructor=Hv;function Uv(){}Uv.prototype=E,E.p=(function(){return this.aH.a.length}),E.r=(function(){var e=V();return e.gn(this.aH,e.y)}),E.l=(function(e){return e instanceof Hv?I().gD(this.aH,e.aH):nv(this,e)}),E.s=(function(){return new O_(this.aH)}),E.bO=(function(e){return this.aH.a[e]}),E.j=(function(e){return this.bO(e|0)}),E.u=(function(e){return this.bO(e)}),new O().i(Hv,`scala.collection.immutable.ArraySeq$ofLong`,{aW:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Wv(e){this.aI=null,this.aI=e}E=Wv.prototype=new Dv,E.constructor=Wv;function Gv(){}Gv.prototype=E,E.p=(function(){return this.aI.a.length}),E.u=(function(e){return this.aI.a[e]}),E.r=(function(){var e=V();return e.gh(this.aI,e.y)}),E.l=(function(e){return e instanceof Wv?Id().gG(this.aI,e.aI):nv(this,e)}),E.s=(function(){return Xg(new Zg,this.aI)}),E.j=(function(e){return this.u(e|0)}),new O().i(Wv,`scala.collection.immutable.ArraySeq$ofRef`,{aX:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Kv(e){this.aJ=null,this.aJ=e}E=Kv.prototype=new Dv,E.constructor=Kv;function qv(){}qv.prototype=E,E.p=(function(){return this.aJ.a.length}),E.bJ=(function(e){return this.aJ.a[e]}),E.r=(function(){var e=V();return e.go(this.aJ,e.y)}),E.l=(function(e){return e instanceof Kv?I().gE(this.aJ,e.aJ):nv(this,e)}),E.s=(function(){return new A_(this.aJ)}),E.j=(function(e){return this.bJ(e|0)}),E.u=(function(e){return this.bJ(e)}),new O().i(Kv,`scala.collection.immutable.ArraySeq$ofShort`,{aY:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Jv(e){this.b7=null,this.b7=e}E=Jv.prototype=new Dv,E.constructor=Jv;function Yv(){}Yv.prototype=E,E.p=(function(){return this.b7.a.length}),E.r=(function(){var e=V();return e.gp(this.b7,e.y)}),E.l=(function(e){return e instanceof Jv?this.b7.a.length===e.b7.a.length:nv(this,e)}),E.s=(function(){return new M_(this.b7)}),E.bP=(function(e){}),E.j=(function(e){this.bP(e|0)}),E.u=(function(e){this.bP(e)}),new O().i(Jv,`scala.collection.immutable.ArraySeq$ofUnit`,{aZ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Xv(e,t,n,r){for(;;)if(t===r)return n.o()?0:1;else if(n.o())return-1;else{var i=1+t|0,a=n.P();t=i,n=a}}function Zv(e,t,n){for(;;)if(t===n)return!0;else{var r=t.o(),i=n.o();if(!(r||i)&&Yl().I(t.a5(),n.a5())){var a=t.P(),o=n.P();t=a,n=o}else return r&&i}}function Qv(){}E=Qv.prototype=new vv,E.constructor=Qv;function $v(){}$v.prototype=E,E.s=(function(){return new $h(this)}),E.bj=(function(){return`LinearSeq`}),E.gO=(function(e){return Yh(this,e)}),E.u=(function(e){return Xh(this,e)}),E.dz=(function(e){return Zh(this,e)}),E.o=(function(){return this===Ty()}),E.j3=(function(e){if(this===Ty())return Ty();for(var t=new by(e.j(this.a5()),Ty()),n=t,r=this.P();r!==Ty();){var i=new by(e.j(r.a5()),Ty());n.cl=i,n=i,r=r.P()}return t}),E.a4=(function(e){for(var t=this;!t.o();)e.j(t.a5()),t=t.P()}),E.p=(function(){for(var e=this,t=0;!e.o();)t=1+t|0,e=e.P();return t}),E.at=(function(e){return e<0?1:Xv(this,0,this,e)}),E.ba=(function(){return`List`}),E.l=(function(e){return e instanceof Qv?Zv(this,this,e):nv(this,e)}),E.j=(function(e){return Xh(this,e|0)}),E.bc=(function(e){return Yh(this,e|0)}),E.i8=(function(e){return G_(this,e,this)}),E.gS=(function(e){return this.j3(e)});function ey(e){this.al=null,this.al=e}E=ey.prototype=new kv,E.constructor=ey;function ty(){}ty.prototype=E,E.p=(function(){return this.al.a.length}),E.r=(function(){var e=V();return e.gq(this.al,e.y)}),E.l=(function(e){return e instanceof ey?I().gF(this.al,e.al):Ov.prototype.l.call(this,e)}),E.s=(function(){return new P_(this.al)}),E.bQ=(function(e){return this.al.a[e]}),E.j=(function(e){return this.bQ(e|0)}),E.u=(function(e){return this.bQ(e)}),E.a2=(function(){return this.al}),new O().i(ey,`scala.collection.mutable.ArraySeq$ofBoolean`,{b2:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function ny(e){this.am=null,this.am=e}E=ny.prototype=new kv,E.constructor=ny;function ry(){}ry.prototype=E,E.p=(function(){return this.am.a.length}),E.bH=(function(e){return this.am.a[e]}),E.r=(function(){var e=V();return e.gi(this.am,e.y)}),E.l=(function(e){return e instanceof ny?I().gy(this.am,e.am):Ov.prototype.l.call(this,e)}),E.s=(function(){return new v_(this.am)}),E.j=(function(e){return this.bH(e|0)}),E.u=(function(e){return this.bH(e)}),E.a2=(function(){return this.am}),new O().i(ny,`scala.collection.mutable.ArraySeq$ofByte`,{b3:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function iy(e){this.T=null,this.T=e}E=iy.prototype=new kv,E.constructor=iy;function ay(){}ay.prototype=E,E.p=(function(){return this.T.a.length}),E.bI=(function(e){return this.T.a[e]}),E.r=(function(){var e=V();return e.gj(this.T,e.y)}),E.l=(function(e){return e instanceof iy?I().gz(this.T,e.T):Ov.prototype.l.call(this,e)}),E.s=(function(){return new b_(this.T)}),E.bF=(function(e,t,n,r){var i=e.O;t.length!==0&&(i.v=``+i.v+t);var a=this.T.a.length;if(a!==0)if(n===``)i.hE(this.T);else{i.p();var o=this.T.a[0],s=``+Qi(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.T.a[c],u=``+Qi(l);i.v+=u,c=1+c|0}}return r.length!==0&&(i.v=``+i.v+r),e}),E.j=(function(e){return sa(this.bI(e|0))}),E.u=(function(e){return sa(this.bI(e))}),E.a2=(function(){return this.T}),new O().i(iy,`scala.collection.mutable.ArraySeq$ofChar`,{b4:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function oy(e){this.an=null,this.an=e}E=oy.prototype=new kv,E.constructor=oy;function sy(){}sy.prototype=E,E.p=(function(){return this.an.a.length}),E.r=(function(){var e=V();return e.gk(this.an,e.y)}),E.l=(function(e){return e instanceof oy?I().gA(this.an,e.an):Ov.prototype.l.call(this,e)}),E.s=(function(){return new S_(this.an)}),E.bL=(function(e){return this.an.a[e]}),E.j=(function(e){return this.bL(e|0)}),E.u=(function(e){return this.bL(e)}),E.a2=(function(){return this.an}),new O().i(oy,`scala.collection.mutable.ArraySeq$ofDouble`,{b5:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function cy(e){this.ao=null,this.ao=e}E=cy.prototype=new kv,E.constructor=cy;function ly(){}ly.prototype=E,E.p=(function(){return this.ao.a.length}),E.r=(function(){var e=V();return e.gl(this.ao,e.y)}),E.l=(function(e){return e instanceof cy?I().gB(this.ao,e.ao):Ov.prototype.l.call(this,e)}),E.s=(function(){return new w_(this.ao)}),E.bM=(function(e){return this.ao.a[e]}),E.j=(function(e){return this.bM(e|0)}),E.u=(function(e){return this.bM(e)}),E.a2=(function(){return this.ao}),new O().i(cy,`scala.collection.mutable.ArraySeq$ofFloat`,{b6:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function uy(e){this.ap=null,this.ap=e}E=uy.prototype=new kv,E.constructor=uy;function dy(){}dy.prototype=E,E.p=(function(){return this.ap.a.length}),E.r=(function(){var e=V();return e.gm(this.ap,e.y)}),E.l=(function(e){return e instanceof uy?I().gC(this.ap,e.ap):Ov.prototype.l.call(this,e)}),E.s=(function(){return new E_(this.ap)}),E.bN=(function(e){return this.ap.a[e]}),E.j=(function(e){return this.bN(e|0)}),E.u=(function(e){return this.bN(e)}),E.a2=(function(){return this.ap}),new O().i(uy,`scala.collection.mutable.ArraySeq$ofInt`,{b7:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function fy(e){this.aq=null,this.aq=e}E=fy.prototype=new kv,E.constructor=fy;function py(){}py.prototype=E,E.p=(function(){return this.aq.a.length}),E.r=(function(){var e=V();return e.gn(this.aq,e.y)}),E.l=(function(e){return e instanceof fy?I().gD(this.aq,e.aq):Ov.prototype.l.call(this,e)}),E.s=(function(){return new O_(this.aq)}),E.bO=(function(e){return this.aq.a[e]}),E.j=(function(e){return this.bO(e|0)}),E.u=(function(e){return this.bO(e)}),E.a2=(function(){return this.aq}),new O().i(fy,`scala.collection.mutable.ArraySeq$ofLong`,{b8:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function my(e){this.ar=null,this.ar=e}E=my.prototype=new kv,E.constructor=my;function hy(){}hy.prototype=E,E.p=(function(){return this.ar.a.length}),E.u=(function(e){return this.ar.a[e]}),E.r=(function(){var e=V();return e.gh(this.ar,e.y)}),E.l=(function(e){return e instanceof my?Id().gG(this.ar,e.ar):Ov.prototype.l.call(this,e)}),E.s=(function(){return Xg(new Zg,this.ar)}),E.j=(function(e){return this.u(e|0)}),E.a2=(function(){return this.ar}),new O().i(my,`scala.collection.mutable.ArraySeq$ofRef`,{b9:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function gy(e){this.as=null,this.as=e}E=gy.prototype=new kv,E.constructor=gy;function _y(){}_y.prototype=E,E.p=(function(){return this.as.a.length}),E.bJ=(function(e){return this.as.a[e]}),E.r=(function(){var e=V();return e.go(this.as,e.y)}),E.l=(function(e){return e instanceof gy?I().gE(this.as,e.as):Ov.prototype.l.call(this,e)}),E.s=(function(){return new A_(this.as)}),E.j=(function(e){return this.bJ(e|0)}),E.u=(function(e){return this.bJ(e)}),E.a2=(function(){return this.as}),new O().i(gy,`scala.collection.mutable.ArraySeq$ofShort`,{ba:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function vy(e){this.aK=null,this.aK=e}E=vy.prototype=new kv,E.constructor=vy;function yy(){}yy.prototype=E,E.p=(function(){return this.aK.a.length}),E.r=(function(){var e=V();return e.gp(this.aK,e.y)}),E.l=(function(e){return e instanceof vy?this.aK.a.length===e.aK.a.length:Ov.prototype.l.call(this,e)}),E.s=(function(){return new M_(this.aK)}),E.bP=(function(e){}),E.j=(function(e){this.bP(e|0)}),E.u=(function(e){this.bP(e)}),E.a2=(function(){return this.aK}),new O().i(vy,`scala.collection.mutable.ArraySeq$ofUnit`,{bb:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function by(e,t){this.de=null,this.cl=null,this.de=e,this.cl=t}E=by.prototype=new $v,E.constructor=by;function xy(){}xy.prototype=E,E.a5=(function(){return this.de}),E.X=(function(){return`::`}),E.V=(function(){return 2}),E.W=(function(e){switch(e){case 0:return this.de;case 1:return this.cl;default:return B().aM(e)}}),E.a9=(function(){return new ag(this)}),E.P=(function(){return this.cl}),new O().i(by,`scala.collection.immutable.$colon$colon`,{ew:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b0:1,a5:1,aM:1,b1:1,aO:1,q:1,p:1,B:1,aP:1,a:1,N:1});function Sy(){}E=Sy.prototype=new $v,E.constructor=Sy;function Cy(){}Cy.prototype=E,E.iO=(function(){throw new Sh(`head of empty list`)}),E.jQ=(function(){throw new xh(`tail of empty list`)}),E.D=(function(){return 0}),E.s=(function(){return q().z}),E.X=(function(){return`Nil`}),E.V=(function(){return 0}),E.W=(function(e){return B().aM(e)}),E.a9=(function(){return new ag(this)}),E.P=(function(){this.jQ()}),E.a5=(function(){this.iO()}),new O().i(Sy,`scala.collection.immutable.Nil$`,{ez:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b0:1,a5:1,aM:1,b1:1,aO:1,q:1,p:1,B:1,aP:1,a:1,N:1});var wy;function Ty(){return wy||=new Sy,wy}function Ey(e,t){return e.O=t,e}function Dy(e){return Ey(e,new mm),e}function Oy(){this.O=null}E=Oy.prototype=new Cv,E.constructor=Oy;function ky(){}ky.prototype=E,E.bj=(function(){return`IndexedSeq`}),E.s=(function(){return new e_(new hv(this))}),E.at=(function(e){var t=this.O.p();return t===e?0:t<e?-1:1}),E.gc=(function(e){return Gd(this,e)}),E.p=(function(){return this.O.p()}),E.D=(function(){return this.O.p()}),E.hz=(function(e){var t=this.O,n=``+Qi(e);return t.v+=n,this}),E.t=(function(){return this.O.v}),E.o=(function(){return this.O.p()===0}),E.h3=(function(){return this.O.v}),E.dl=(function(e){return this.hz(ca(e))}),E.j=(function(e){var t=e|0;return sa(this.O.gs(t))}),E.u=(function(e){return sa(this.O.gs(e))}),new O().i(Oy,`scala.collection.mutable.StringBuilder`,{eH:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,eF:1,bc:1,be:1,bd:1,E:1,n:1,o:1,F:1,ab:1,a:1});function Ay(e,t){return e.aL=t,e}function jy(e){return Ay(e,[]),e}function My(){this.aL=null}E=My.prototype=new Tv,E.constructor=My;function Ny(){}Ny.prototype=E,E.bj=(function(){return`IndexedSeq`}),E.s=(function(){return new e_(new hv(this))}),E.at=(function(e){var t=this.aL.length|0;return t===e?0:t<e?-1:1}),E.u=(function(e){return this.aL[e]}),E.p=(function(){return this.aL.length|0}),E.D=(function(){return this.aL.length|0}),E.ba=(function(){return`WrappedArray`}),E.h3=(function(){return this}),E.dl=(function(e){return this.aL.push(e),this}),E.j=(function(e){var t=e|0;return this.aL[t]}),new O().i(My,`scala.scalajs.js.WrappedArray`,{f8:1,eA:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,eC:1,be:1,bd:1,eG:1,q:1,p:1,E:1,n:1,o:1,F:1,eE:1,bc:1,a:1}),Hi=new L(0,0),wa.z=Hi,mc(new(Vg.r()).C([]));