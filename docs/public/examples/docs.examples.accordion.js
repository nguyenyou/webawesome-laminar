var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(){super(`wa-accordion-item-collapsed`,{bubbles:!1,cancelable:!1,composed:!1})}},r=class extends Event{constructor(){super(`wa-accordion-item-expanded`,{bubbles:!1,cancelable:!1,composed:!1})}},i=class extends Event{constructor(e){super(`wa-accordion-item-trigger`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function a(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function o(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function s(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e)||0:e.indexOf(`s`)>-1?(parseFloat(e)||0)*1e3:parseFloat(e)||0}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function c(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var l=Object.defineProperty,u=Object.getOwnPropertyDescriptor,d=e=>{throw TypeError(e)},f=(e,t,n,r)=>{for(var i=r>1?void 0:r?u(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&l(t,n,i),i},p=(e,t,n)=>t.has(e)||d(`Cannot `+n),m=(e,t,n)=>(p(e,t,`read from private field`),n?n.call(e):t.get(e)),ee=(e,t,n)=>t.has(e)?d(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),te=(e,t,n,r)=>(p(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ne=globalThis,re=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ie=Symbol(),ae=new WeakMap;var oe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(re&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ae.set(t,e))}return e}toString(){return this.cssText}};const se=e=>new oe(typeof e==`string`?e:e+``,void 0,ie),ce=(e,...t)=>new oe(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,ie),le=(e,t)=>{if(re)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=ne.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ue=re?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return se(t)})(e):e,{is:de,defineProperty:fe,getOwnPropertyDescriptor:pe,getOwnPropertyNames:me,getOwnPropertySymbols:he,getPrototypeOf:ge}=Object,_e=globalThis,ve=_e.trustedTypes,ye=ve?ve.emptyScript:``,be=_e.reactiveElementPolyfillSupport,xe=(e,t)=>e,Se={toAttribute(e,t){switch(t){case Boolean:e=e?ye:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Ce=(e,t)=>!de(e,t),we={attribute:!0,type:String,converter:Se,reflect:!1,useDefault:!1,hasChanged:Ce};Symbol.metadata??=Symbol(`metadata`),_e.litPropertyMetadata??=new WeakMap;var Te=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=we){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&fe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=pe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??we}static _$Ei(){if(this.hasOwnProperty(xe(`elementProperties`)))return;let e=ge(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xe(`properties`))){let e=this.properties,t=[...me(e),...he(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ue(e))}else e!==void 0&&t.push(ue(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return le(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??Ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Te.elementStyles=[],Te.shadowRootOptions={mode:`open`},Te[xe(`elementProperties`)]=new Map,Te[xe(`finalized`)]=new Map,be?.({ReactiveElement:Te}),(_e.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ee=globalThis,De=Ee.trustedTypes,Oe=De?De.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ke=`$lit$`,Ae=`lit$${Math.random().toFixed(9).slice(2)}$`,je=`?`+Ae,Me=`<${je}>`,Ne=document,Pe=()=>Ne.createComment(``),Fe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ie=Array.isArray,Le=e=>Ie(e)||typeof e?.[Symbol.iterator]==`function`,Re=`[ 	
\f\r]`,ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,Ve=/>/g,He=RegExp(`>|${Re}(?:([^\\s"'>=/]+)(${Re}*=${Re}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ue=/'/g,We=/"/g,Ge=/^(?:script|style|textarea|title)$/i,h=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ke=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),qe=new WeakMap,Je=Ne.createTreeWalker(Ne,129);function Ye(e,t){if(!Ie(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Oe===void 0?t:Oe.createHTML(t)}const Xe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ze;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ze?c[1]===`!--`?o=Be:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=He):(Ge.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=He):o=Ve:o===He?c[0]===`>`?(o=i??ze,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?He:c[3]===`"`?We:Ue):o===We||o===Ue?o=He:o===Be||o===Ve?o=ze:(o=He,i=void 0);let d=o===He&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ze?n+Me:l>=0?(r.push(s),n.slice(0,l)+ke+n.slice(l)+Ae+d):n+Ae+(l===-2?t:d)}return[Ye(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Xe(t,n);if(this.el=e.createElement(l,r),Je.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Je.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ke)){let t=u[o++],n=i.getAttribute(e).split(Ae),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?nt:r[1]===`?`?rt:r[1]===`@`?it:tt}),i.removeAttribute(e)}else e.startsWith(Ae)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ge.test(i.tagName)){let e=i.textContent.split(Ae),t=e.length-1;if(t>0){i.textContent=De?De.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Pe()),Je.nextNode(),c.push({type:2,index:++a});i.append(e[t],Pe())}}}else if(i.nodeType===8)if(i.data===je)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ae,e+1))!==-1;)c.push({type:7,index:a}),e+=Ae.length-1}a++}}static createElement(e,t){let n=Ne.createElement(`template`);return n.innerHTML=e,n}};function Qe(e,t,n=e,r){if(t===Ke)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Fe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Qe(e,i._$AS(e,t.values),i,r)),t}var $e=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ne).importNode(t,!0);Je.currentNode=r;let i=Je.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new et(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new at(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Je.nextNode(),a++)}return Je.currentNode=Ne,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},et=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Qe(this,e,t),Fe(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Ke&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Le(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ne.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ze.createElement(Ye(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new $e(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=qe.get(e.strings);return t===void 0&&qe.set(e.strings,t=new Ze(e)),t}k(t){Ie(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Pe()),this.O(Pe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Qe(this,e,t,0),a=!Fe(e)||e!==this._$AH&&e!==Ke,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Qe(this,r[n+o],t,o),s===Ke&&(s=this._$AH[o]),a||=!Fe(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},nt=class extends tt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},rt=class extends tt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},it=class extends tt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Qe(this,e,t,0)??g)===Ke)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},at=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Qe(this,e)}};const ot={M:ke,P:Ae,A:je,C:1,L:Xe,R:$e,D:Le,V:Qe,I:et,H:tt,N:rt,U:it,B:nt,F:at},st=Ee.litHtmlPolyfillSupport;st?.(Ze,et),(Ee.litHtmlVersions??=[]).push(`3.3.1`);const ct=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new et(t.insertBefore(Pe(),e),e,void 0,n??{})}return i._$AI(e),i},lt=globalThis;var ut=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ct(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ke}};ut._$litElement$=!0,ut.finalized=!0,lt.litElementHydrateSupport?.({LitElement:ut});const dt=lt.litElementPolyfillSupport;dt?.({LitElement:ut}),(lt.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},pt={attribute:!0,type:String,converter:Se,reflect:!1,hasChanged:Ce},mt=(e=pt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?mt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ht(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const gt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function _t(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return gt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return gt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=ce`
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
`,yt=/;\s+$/;function bt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function xt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(yt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var St,Ct=class extends ut{constructor(){super(),ee(this,St,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[vt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){m(this,St)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),te(this,St,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=xt({property:bt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=xt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};St=new WeakMap,f([_()],Ct.prototype,`dir`,2),f([_()],Ct.prototype,`lang`,2),f([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],Ct.prototype,`didSSR`,2);const wt=new Set,Tt=new Map;let Et,Dt=`ltr`,Ot=`en`;const kt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(kt){let e=new MutationObserver(jt);Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function At(...e){e.map(e=>{let t=e.$code.toLowerCase();Tt.has(t)?Tt.set(t,Object.assign(Object.assign({},Tt.get(t)),e)):Tt.set(t,e),Et||=e}),jt()}function jt(){kt&&(Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language),[...wt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Mt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){wt.add(this.host)}hostDisconnected(){wt.delete(this.host)}dir(){return`${this.host.dir||Dt}`.toLowerCase()}lang(){let e=`${this.host.lang||Ot}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Et?Et.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Tt.get(`${n}-${r}`),a=Tt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Et&&Et[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Et&&Et[e])i=Et[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Nt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};At(Nt);var Pt=Nt,Ft=class extends Mt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};At(Pt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var It=ce`
  @layer wa-component {
    :host {
      --spacing: var(--wa-space-m);
      --show-duration: var(--wa-transition-normal);
      --hide-duration: var(--wa-transition-normal);
      --easing: var(--wa-transition-easing);

      display: block;
    }

    :host(:not(:first-child)) {
      border-top: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      background-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled']:not(:first-child)) {
      margin-block-start: var(--wa-panel-border-width);
      border-top: none;
    }

    [part~='heading'] {
      margin: 0;
      font: inherit;
    }

    [part~='button'] {
      display: flex;
      align-items: center;
      gap: var(--spacing);
      padding: var(--spacing);
      width: 100%;
      background: none;
      border: none;
      cursor: pointer;
      text-align: start;
      color: var(--wa-color-text-normal);
      font: inherit;
      font-weight: var(--wa-font-weight-semibold);

      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: var(--wa-focus-ring);
        /* Inset by the full ring width + offset so the parent's overflow:hidden doesn't clip it */
        outline-offset: calc(0px - var(--wa-focus-ring-width) - var(--wa-focus-ring-offset));
      }
    }

    /* Icon at end (default) */
    :host([icon-placement='end']) [part~='button'] {
      justify-content: space-between;
    }

    /* Icon at start */
    :host([icon-placement='start']) [part~='button'] {
      flex-direction: row-reverse;
      justify-content: flex-end;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host([disabled]) [part~='button'] {
      cursor: not-allowed;
      pointer-events: none;
    }

    :host(:first-child) [part~='button'] {
      border-top-left-radius: var(--wa-panel-border-radius);
      border-top-right-radius: var(--wa-panel-border-radius);
    }

    :host(:last-child:not([expanded])) [part~='button'] {
      border-bottom-left-radius: var(--wa-panel-border-radius);
      border-bottom-right-radius: var(--wa-panel-border-radius);
    }

    [part~='icon'] {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      color: var(--wa-color-text-quiet);
      transition: rotate var(--hide-duration) var(--easing);
    }

    :host([expanded]) [part~='icon'] {
      rotate: 90deg;
      transition-duration: var(--show-duration);
    }

    :host([expanded]:dir(rtl)) [part~='icon'] {
      rotate: -90deg;
    }

    .body {
      overflow: hidden;
      color: var(--wa-color-text-quiet);
    }

    :host([expanded]) .body:not(.animating) {
      overflow: visible;
    }

    .content {
      display: block;
      padding: 0 var(--spacing) var(--spacing);
    }
  }
`;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=e=>(...t)=>({_$litDirective$:e,values:t});var zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Bt=Rt(class extends zt{constructor(e){if(super(e),e.type!==Lt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ke}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Ct{constructor(){super(...arguments),this.animationGeneration=0,this.localize=new Ft(this),this.isAnimating=!1,this.label=``,this.expanded=!1,this.disabled=!1,this.headingLevel=`3`,this.iconPlacement=`end`,this.appearance=`outlined`}firstUpdated(e){super.firstUpdated(e),this.body.style.height=this.expanded?`auto`:`0`}updated(){this.customStates.set(`animating`,this.isAnimating)}handleTriggerClick(){this.disabled||this.dispatchEvent(new i({item:this}))}handleTriggerKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.handleTriggerClick())}async handleExpandedChange(){this.animationGeneration++;let e=this.animationGeneration;if(this.expanded){this.isAnimating=!0;let t=s(getComputedStyle(this.body).getPropertyValue(`--show-duration`)||`200ms`),n=getComputedStyle(this.body).getPropertyValue(`--easing`)||`ease`;if(await o(this.body,[{height:`0`,opacity:`0`},{height:`${this.body.scrollHeight}px`,opacity:`1`}],{duration:t,easing:n}),this.animationGeneration!==e)return;this.body.style.height=`auto`,this.isAnimating=!1,this.dispatchEvent(new r)}else{this.isAnimating=!0;let t=s(getComputedStyle(this.body).getPropertyValue(`--hide-duration`)||`200ms`),r=getComputedStyle(this.body).getPropertyValue(`--easing`)||`ease`;if(await o(this.body,[{height:`${this.body.scrollHeight}px`,opacity:`1`},{height:`0`,opacity:`0`}],{duration:t,easing:r}),this.animationGeneration!==e)return;this.body.style.height=`0`,this.isAnimating=!1,this.dispatchEvent(new n)}}async expand(){if(!(this.expanded||this.disabled))return this.expanded=!0,a(this,`wa-accordion-item-expanded`)}async collapse(){if(!(!this.expanded||this.disabled))return this.expanded=!1,a(this,`wa-accordion-item-collapsed`)}async toggle(){return this.expanded?this.collapse():this.expand()}focus(e){this.triggerButton?.focus(e)}renderHeadingWrapper(e){let t=parseInt(this.headingLevel,10);switch(t>=1&&t<=6?t:3){case 1:return h`<h1 part="heading">${e}</h1>`;case 2:return h`<h2 part="heading">${e}</h2>`;case 4:return h`<h4 part="heading">${e}</h4>`;case 5:return h`<h5 part="heading">${e}</h5>`;case 6:return h`<h6 part="heading">${e}</h6>`;default:return h`<h3 part="heading">${e}</h3>`}}render(){let e=this.hasUpdated?this.localize.dir()===`rtl`:this.dir===`rtl`,t=h`
      <button
        part="button"
        type="button"
        id="trigger"
        aria-expanded=${this.expanded?`true`:`false`}
        aria-controls="panel"
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @click=${this.handleTriggerClick}
        @keydown=${this.handleTriggerKeyDown}
      >
        <slot name="label" part="label">${this.label}</slot>
        <span part="icon">
          <slot name="icon">
            <wa-icon library="system" variant="solid" name=${e?`chevron-left`:`chevron-right`}></wa-icon>
          </slot>
        </span>
      </button>
    `;return h`
      <div part="base accordion-item">
        ${this.headingLevel===`none`?t:this.renderHeadingWrapper(t)}
        <div
          part="panel"
          id="panel"
          class=${Bt({body:!0,animating:this.isAnimating})}
          role="region"
          aria-labelledby="trigger"
        >
          <slot part="content" class="content"></slot>
        </div>
      </div>
    `}};v.css=It,f([_t(`.body`)],v.prototype,`body`,2),f([_t(`[part~="button"]`)],v.prototype,`triggerButton`,2),f([ht()],v.prototype,`isAnimating`,2),f([_()],v.prototype,`label`,2),f([_({type:Boolean,reflect:!0})],v.prototype,`expanded`,2),f([_({type:Boolean,reflect:!0})],v.prototype,`disabled`,2),f([_({attribute:`heading-level`,reflect:!0})],v.prototype,`headingLevel`,2),f([_({attribute:`icon-placement`,reflect:!0})],v.prototype,`iconPlacement`,2),f([_({reflect:!0})],v.prototype,`appearance`,2),f([c(`expanded`,{waitUntilFirstUpdate:!0})],v.prototype,`handleExpandedChange`,1),v=f([ft(`wa-accordion-item`)],v);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Vt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Ht=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Ut=ce`
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
`,Wt=``,Gt=``;function Kt(){return Wt.replace(/\/$/,``)}function qt(e){Gt=e}function Jt(){if(!Gt){let e=document.querySelector(`[data-fa-kit-code]`);e&&qt(e.getAttribute(`data-fa-kit-code`)||``)}return Gt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yt=`7.3.0`;function Xt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Zt(e,t,n){let r=Xt(e,t,n),i=Kt();if(i)return`${i}/${r}/${e}.svg`;let a=Jt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Yt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Yt}/svgs/${r}/${e}.svg`}var Qt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Zt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function $t(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var en={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},tn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=en[n][e]??en.regular[e]??en.regular[`circle-question`];return r?$t(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},nn=`classic`,rn=[Qt,tn],an=new Set;function on(e){an.add(e)}function sn(e){an.delete(e)}function cn(e){return rn.find(t=>t.name===e)}function ln(){return nn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:un}=ot,dn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=Symbol(),pn=Symbol(),mn,hn=new Map,y=class extends Ct{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=h`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?fn:pn}catch{return pn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return fn;mn||=new DOMParser;let r=mn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):fn}catch{return fn}}}connectedCallback(){super.connectedCallback(),on(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sn(this)}async getIconSource(){let e=cn(this.library),t=this.family||ln();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?cn(this.library):void 0;if(!e){this.svg=null;return}let r=hn.get(e);r||(r=this.resolveIcon(e,n),hn.set(e,r));let i=await r;if(i===pn&&hn.delete(e),e===(await this.getIconSource()).url){if(dn(i)){this.svg=i;return}switch(i){case pn:case fn:this.svg=null,this.dispatchEvent(new Vt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ht)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=cn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:h`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=Ut,f([ht()],y.prototype,`svg`,2),f([_({reflect:!0})],y.prototype,`name`,2),f([_({reflect:!0})],y.prototype,`family`,2),f([_({reflect:!0})],y.prototype,`variant`,2),f([_({reflect:!0})],y.prototype,`canvas`,2),f([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),f([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),f([_()],y.prototype,`src`,2),f([_()],y.prototype,`label`,2),f([_({reflect:!0})],y.prototype,`library`,2),f([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),f([_({type:String,reflect:!0})],y.prototype,`flip`,2),f([_({type:String,reflect:!0})],y.prototype,`animation`,2),f([c(`label`)],y.prototype,`handleLabelChange`,1),f([c([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=f([ft(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=t({default:()=>v}),_n=class extends Event{constructor(e){super(`wa-after-collapse`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},vn=class extends Event{constructor(e){super(`wa-after-expand`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},yn=class extends Event{constructor(e){super(`wa-collapse`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},bn=class extends Event{constructor(e){super(`wa-expand`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},xn=ce`
  @layer wa-component {
    :host {
      display: block;
      border: var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);
      border-radius: var(--wa-panel-border-radius);
      overflow: hidden;
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) {
      background-color: var(--wa-color-surface-default);
      border-color: var(--wa-color-surface-border);
    }

    :host([appearance='filled']) {
      border-color: transparent;
    }

    :host([appearance='filled-outlined']) {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-border-quiet);
    }

    :host([appearance='plain']) {
      background-color: transparent;
      border-color: transparent;
      border-radius: 0;
    }
  }
`,b=class extends Ct{constructor(){super(...arguments),this.mode=`multiple`,this.iconPlacement=`end`,this.headingLevel=`3`,this.appearance=`outlined`}getAllItems(){return this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`wa-accordion-item`)}getFocusableItems(){return this.getAllItems().filter(e=>!e.disabled)}ownsItem(e){return e.closest(`wa-accordion`)===this}handleSlotChange(){if(this.didSSR){let e=[];if(this.getAllItems().forEach(t=>{t.didSSR&&!t.hasUpdated&&e.push(t.updateComplete)}),e.length>0){Promise.allSettled(e).then(()=>{this.handleSlotChange()});return}}this.syncIconPlacement(),this.syncHeadingLevel(),this.syncAppearance()}handleKeyDown(e){let t=this.getFocusableItems();if(!t.length)return;let n=e.composedPath().find(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-accordion-item`);if(!n||!this.ownsItem(n))return;let r=t.findIndex(e=>e===n),i=r;switch(e.key){case`ArrowDown`:e.preventDefault(),i=(r+1)%t.length;break;case`ArrowUp`:e.preventDefault(),i=(r-1+t.length)%t.length;break;case`Home`:e.preventDefault(),i=0;break;case`End`:e.preventDefault(),i=t.length-1;break;default:return}t[i].focus()}syncIconPlacement(){this.getAllItems().forEach(e=>e.iconPlacement=this.iconPlacement)}syncHeadingLevel(){this.getAllItems().forEach(e=>e.headingLevel=this.headingLevel)}syncAppearance(){this.getAllItems().forEach(e=>e.appearance=this.appearance)}async handleItemTrigger(e){let{item:t}=e.detail;if(this.ownsItem(t)&&(e.stopPropagation(),!t.disabled))if(t.expanded){if(this.mode===`single`)return;let e=new yn({item:t});if(this.dispatchEvent(e),e.defaultPrevented)return;await t.collapse(),this.dispatchEvent(new _n({item:t}))}else{(this.mode===`single`||this.mode===`single-collapsible`)&&this.getAllItems().filter(e=>e!==t&&e.expanded).forEach(e=>e.collapse());let e=new bn({item:t});if(this.dispatchEvent(e),e.defaultPrevented)return;await t.expand(),this.dispatchEvent(new vn({item:t}))}}expandAll(){this.mode===`single`||this.mode===`single-collapsible`||this.getAllItems().filter(e=>!e.disabled&&!e.expanded).forEach(e=>e.expand())}collapseAll(){this.getAllItems().filter(e=>e.expanded).forEach(e=>e.collapse())}render(){return h`
      <slot
        @slotchange=${this.handleSlotChange}
        @wa-accordion-item-trigger=${this.handleItemTrigger}
        @keydown=${this.handleKeyDown}
      ></slot>
    `}};b.css=xn,f([_t(`slot`)],b.prototype,`defaultSlot`,2),f([_({reflect:!0})],b.prototype,`mode`,2),f([_({attribute:`icon-placement`,reflect:!0})],b.prototype,`iconPlacement`,2),f([_({attribute:`heading-level`,reflect:!0})],b.prototype,`headingLevel`,2),f([_({reflect:!0})],b.prototype,`appearance`,2),f([c(`iconPlacement`,{waitUntilFirstUpdate:!0})],b.prototype,`syncIconPlacement`,1),f([c(`headingLevel`,{waitUntilFirstUpdate:!0})],b.prototype,`syncHeadingLevel`,1),f([c(`appearance`,{waitUntilFirstUpdate:!0})],b.prototype,`syncAppearance`,1),b=f([ft(`wa-accordion`)],b);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Sn=t({default:()=>b}),Cn=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),wn=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Tn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),En=class extends Ct{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new wn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Tn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};En.formAssociated=!0,f([_({reflect:!0})],En.prototype,`name`,2),f([_({type:Boolean})],En.prototype,`disabled`,2),f([_({state:!0,attribute:!1})],En.prototype,`valueHasChanged`,2),f([_({state:!0,attribute:!1})],En.prototype,`hasInteracted`,2),f([_({attribute:`custom-error`,reflect:!0})],En.prototype,`customError`,2),f([_({attribute:!1,state:!0,type:Object})],En.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn={small:`s`,medium:`m`,large:`l`},On=new Set;function kn(e,t){t in Dn&&!On.has(`${e}:${t}`)&&(On.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Dn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},jn=ce`
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
`,Mn=ce`
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
`,Nn=ce`
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
`;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Pn=e=>e??g,Fn=Symbol.for(``),In=e=>{if(e?.r===Fn)return e?._$litStatic$},Ln=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Fn}),Rn=new Map,zn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=In(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Rn.get(e))===void 0&&(o.raw=o,Rn.set(e,t=o)),n=s}return e(t,...n)})(h);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var x=class extends En{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new An(this,`[default]`,`start`,`end`),this.localize=new Ft(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Cn()]}handleSizeChange(){kn(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new wn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ln`a`:Ln`button`;return zn`
      <${t}
        part="base button"
        class=${Bt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Pn(e?void 0:this.disabled)}
        type=${Pn(e?void 0:this.type)}
        title=${this.title}
        name=${Pn(e?void 0:this.name)}
        value=${Pn(e?void 0:this.value)}
        href=${Pn(e?this.href:void 0)}
        target=${Pn(e?this.target:void 0)}
        download=${Pn(e?this.download:void 0)}
        rel=${Pn(e&&this.rel?this.rel:void 0)}
        role=${Pn(e?void 0:`button`)}
        aria-disabled=${Pn(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?zn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?zn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};x.shadowRootOptions={...En.shadowRootOptions,delegatesFocus:!0},x.css=[Mn,Nn,jn],f([_t(`.button`)],x.prototype,`button`,2),f([_t(`slot:not([name])`)],x.prototype,`labelSlot`,2),f([ht()],x.prototype,`invalid`,2),f([ht()],x.prototype,`isIconButton`,2),f([_()],x.prototype,`title`,2),f([_({reflect:!0})],x.prototype,`variant`,2),f([_({reflect:!0})],x.prototype,`appearance`,2),f([_({reflect:!0})],x.prototype,`size`,2),f([c(`size`)],x.prototype,`handleSizeChange`,1),f([_({attribute:`with-caret`,type:Boolean,reflect:!0})],x.prototype,`withCaret`,2),f([_({attribute:`with-start`,type:Boolean})],x.prototype,`withStart`,2),f([_({attribute:`with-end`,type:Boolean})],x.prototype,`withEnd`,2),f([_({type:Boolean})],x.prototype,`disabled`,2),f([_({type:Boolean,reflect:!0})],x.prototype,`loading`,2),f([_({type:Boolean,reflect:!0})],x.prototype,`pill`,2),f([_()],x.prototype,`type`,2),f([_({reflect:!0})],x.prototype,`name`,2),f([_({reflect:!0})],x.prototype,`value`,2),f([_({reflect:!0})],x.prototype,`href`,2),f([_()],x.prototype,`target`,2),f([_()],x.prototype,`rel`,2),f([_()],x.prototype,`download`,2),f([_({attribute:`formaction`})],x.prototype,`formAction`,2),f([_({attribute:`formenctype`})],x.prototype,`formEnctype`,2),f([_({attribute:`formmethod`})],x.prototype,`formMethod`,2),f([_({attribute:`formnovalidate`,type:Boolean})],x.prototype,`formNoValidate`,2),f([_({attribute:`formtarget`})],x.prototype,`formTarget`,2),f([c(`disabled`,{waitUntilFirstUpdate:!0})],x.prototype,`handleDisabledChange`,1),f([c(`href`)],x.prototype,`handleHrefChange`,1),f([c(`loading`,{waitUntilFirstUpdate:!0})],x.prototype,`handleLoadingChange`,1),x=f([ft(`wa-button`)],x),x.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=ce`
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
`,Vn=class extends Ct{constructor(){super(...arguments),this.localize=new Ft(this)}render(){return h`
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
    `}};Vn.css=Bn,Vn=f([ft(`wa-spinner`)],Vn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Hn=t({default:()=>x}),S;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Un;function C(e){this.c=e}S=C.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function Wn(e){switch(typeof e){case`string`:return op.l();case`number`:return ar(e)?e<<24>>24===e?qd.l():e<<16>>16===e?ef.l():tp.l():or(e)?ep.l():$f.l();case`boolean`:return sd.l();case`undefined`:return Uo.l();default:return e instanceof M?ip.l():e instanceof C?ud.l():e&&e.$classData?e.$classData.l():null}}function Gn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ar(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:or(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof C?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.ie()}}function Kn(e,t){switch(typeof e){case`string`:return ap(e,t);case`number`:return Zf(e,t);case`boolean`:return ad(e,t);case`undefined`:return Bo(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof M?np(e,t):e instanceof C?ld(cr(e),t):ur.prototype.j.call(e,t)}}function qn(e){switch(typeof e){case`string`:return q(e);case`number`:return Qf(e);case`boolean`:return od(e);case`undefined`:return Vo(e);default:return e&&e.$classData||e===null?e.o():e instanceof M?rp(e):e instanceof C?cd(cr(e)):ur.prototype.o.call(e)}}function Jn(e){return e===void 0?`undefined`:e.toString()}function Yn(e,t){if(t===0)throw new Kd(`/ by zero`);return e/t|0}function Xn(e,t){if(t===0)throw new Kd(`/ by zero`);return e%t|0}function Zn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Qn(e){return String.fromCharCode(e)}function $n(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var er=0,tr=new WeakMap;function nr(e){switch(typeof e){case`string`:return q(e);case`number`:return Qf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:q(n);default:if(e===null)return 0;var r=tr.get(e);return r===void 0&&(r=er+1|0,er=r,tr.set(e,r)),r}}function rr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ir(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ar(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function or(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function sr(e){return new C(e)}sr(0);function cr(e){return e===null?0:e.c}function lr(e){return e===null?Un:e}function ur(){}S=ur.prototype,S.constructor=ur;function w(){}w.prototype=S,S.o=(function(){return nr(this)}),S.j=(function(e){return this===e}),S.t=(function(){var e=this.o();return Gn(this)+`@`+(+(e>>>0)).toString(16)}),S.toString=(function(){return this.t()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=T.prototype=new w,S.constructor=T,S.a5=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),S.a0=(function(){return new T(this.a.slice())});function dr(){}dr.prototype=S;function fr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=fr.prototype=new w,S.constructor=fr,S.a5=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),S.a0=(function(){return new fr(this.a.slice())});function pr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}S=pr.prototype=new w,S.constructor=pr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new pr(this.a.slice())});function mr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}S=mr.prototype=new w,S.constructor=mr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new mr(this.a.slice())});function hr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}S=hr.prototype=new w,S.constructor=hr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new hr(this.a.slice())});function gr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}S=gr.prototype=new w,S.constructor=gr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new gr(this.a.slice())});function _r(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Un}else this.a=e}S=_r.prototype=new w,S.constructor=_r,S.a5=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),S.a0=(function(){return new _r(this.a.slice())});function vr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}S=vr.prototype=new w,S.constructor=vr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new vr(this.a.slice())});function yr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}S=yr.prototype=new w,S.constructor=yr,S.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a0=(function(){return new yr(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=E.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new dr;n.constructor=t,n.a5=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),n.a0=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===br});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new E().a(this),this.A}),S.l=(function(){return this.L||=new cu(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null});var br=new E;br.n={},br.E=`Ljava.lang.Object;`,br.F=(e=>!e.X),br.N=`java.lang.Object`,br.I=(e=>e!==null),br.A=new E().y(br,T,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ur.prototype.$classData=br;var xr=new E().p(void 0,`V`,`void`,void 0,void 0);new E().p(!1,`Z`,`boolean`,fr,void 0);var Sr=new E().p(0,`C`,`char`,pr,Uint16Array);new E().p(0,`B`,`byte`,mr,Int8Array),new E().p(0,`S`,`short`,hr,Int16Array),new E().p(0,`I`,`int`,gr,Int32Array);var Cr=new E().p(null,`J`,`long`,_r,void 0);new E().p(0,`F`,`float`,vr,Float32Array),new E().p(0,`D`,`double`,yr,Float64Array);function wr(e){return Wn(e).cG()+`@`+nr(e)}function Tr(e){var t=e.cO;return t===void 0?wr(e):t}function Er(){Or=this,kr().hL(new K((e=>void 0)),ds().ei,!0)}S=Er.prototype=new w,S.constructor=Er;function Dr(){}Dr.prototype=S,S.hL=(function(e,t,n){return new Gu(e,n,t,this)}),new E().i(Er,`com.raquo.airstream.core.Observer$`,{ba:1});var Or;function kr(){return Or||=new Er,Or}function Ar(e){this.bZ=null,this.cP=null,this.c0=0,this.bZ=e,this.cP=void 0;var t=Xr().bv();this.c0=t===void 0?1:1+t.c0|0,Ir().by===-1||this.c0>Ir().by?Tl().bw(new Gf(this,Ir().by)):Vr().R?Vr().ap.push(this)|0:Xr().cA(this)}S=Ar.prototype=new w,S.constructor=Ar;function jr(){}jr.prototype=S;var Mr=new E().i(Ar,`com.raquo.airstream.core.Transaction`,{bd:1});function Nr(){this.by=0,this.cQ=null,Fr=this,this.by=1e3,this.cQ=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=Nr.prototype=new w,S.constructor=Nr;function Pr(){}Pr.prototype=S,S.eR=(function(e){try{e.bZ.e(e);var t=e.cP;if(t!==void 0)for(;t.ij();)t.i8().im(e)}catch(e){var n=e instanceof Bc?e:new X(e);Tl().bw(n)}}),new E().i(Nr,`com.raquo.airstream.core.Transaction$`,{be:1});var Fr;function Ir(){return Fr||=new Nr,Fr}function Lr(e){e.bz.length|0?new Ar(new K((t=>{for(;(e.bz.length|0)>0;){var n=e.bz.shift();try{n.e(t)}catch(e){var r=e instanceof Bc?e:new X(e);Tl().bw(r)}}for(;(e.ap.length|0)>0;){var i=e.ap.shift();Xr().cA(i)}}))):(e.ap.length|0)>0&&new Ar(new K((t=>{for(;(e.ap.length|0)>0;)Xr().cA(e.ap.shift())})))}function Rr(){this.R=!1,this.bz=null,this.ap=null,Br=this,this.R=!1,this.bz=xi().a4(I().h(new(P.r()).C([]))),this.ap=xi().a4(I().h(new(Mr.r()).C([])))}S=Rr.prototype=new w,S.constructor=Rr;function zr(){}zr.prototype=S,new E().i(Rr,`com.raquo.airstream.core.Transaction$onStart$`,{bf:1});var Br;function Vr(){return Br||=new Rr,Br}function Hr(e,t){return e.aq.get(t)}function Ur(e,t){e.bA.unshift(t)}function Wr(e){return e.bA.shift()}function Gr(e,t,n){var r=Hr(e,t),i=r===void 0,a=r===void 0?xi().a4(I().h(new(Mr.r()).C([]))):r;a.push(n),i&&e.aq.set(t,a)}function Kr(e,t){var n=Hr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aq.delete(t),i}}function qr(){this.bA=null,this.aq=null,Yr=this,this.bA=xi().a4(I().h(new(Mr.r()).C([]))),this.aq=new Map}S=qr.prototype=new w,S.constructor=qr;function Jr(){}Jr.prototype=S,S.cA=(function(e){var t=this.bv();t===void 0?(Ur(this,e),Ir().eR(e),this.gh(e)):Gr(this,t,e)}),S.gh=(function(e){for(var t=e;;){var n=this.bv(),r=t;if(!(n!==void 0&&F().L(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hi(t),t.bZ=Ir().cQ;var i=this.bv();if(F().L(i,void 0))if((this.aq.size|0)>0){var a=new gl(0);throw this.aq.forEach((e=>((t,n)=>{e.bd=e.bd+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.bd+` children for `+(this.aq.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Ir().eR(i),t=i}}),S.hi=(function(e){for(var t=e;;){var n=Kr(this,t);if(F().L(n,void 0)){Wr(this);var r=this.bv();if(!F().L(r,void 0))t=r;else return}else{Ur(this,n);return}}}),S.bv=(function(){return this.bA[0]}),new E().i(qr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bg:1});var Yr;function Xr(){return Yr||=new qr,Yr}function Zr(e,t){var n=e.a6.indexOf(t)|0;if(n!==-1)e.a6.splice(n,1),e.G.g()||t.fc();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Qr(e){for(;(e.bB.length|0)>0;)Zr(e,e.bB.shift())}function $r(e){this.cR=null,this.a6=null,this.aH=!1,this.bB=null,this.G=null,this.aI=0,this.cR=e,this.a6=xi().a4(I().h(new(ri.r()).C([]))),this.aH=!0,this.bB=xi().a4(I().h(new(ri.r()).C([]))),this.G=J(),this.aI=0}S=$r.prototype=new w,S.constructor=$r;function ei(){}ei.prototype=S,S.eB=(function(){if(this.G.g()){var e=Vr(),t=(()=>{var e=new Gs(this.cR);this.G=new Y(e),this.aH=!1,this.aI=0;for(var t=0,n=this.a6.length|0;t<n;){var r=t+this.aI|0;this.a6[r].fa(e),t=1+t|0}Qr(this),this.aH=!0,this.aI=0});if(Vr(),e.R)t();else{e.R=!0;try{t()}finally{e.R=!1,Lr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),S.ga=(function(){if(this.G.g())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aH=!1;for(var e=this.a6,t=0,n=e.length|0;t<n;)e[t].fc(),t=1+t|0;Qr(this);var r=this.G;r.g()||r.x().gT(),Qr(this),this.aH=!0,this.G=J()}),S.fN=(function(e,t){t?(this.aI=1+this.aI|0,this.a6.unshift(e)):this.a6.push(e);var n=this.G;if(!n.g()){var r=n.x();e.fa(r)}}),S.hp=(function(e){this.aH?Zr(this,e):this.bB.push(e)}),new E().i($r,`com.raquo.airstream.ownership.DynamicOwner`,{bh:1});function ti(e,t,n){this.bC=null,this.cS=null,this.bD=null,this.bC=e,this.cS=t,this.bD=J(),e.fN(this,n)}S=ti.prototype=new w,S.constructor=ti;function ni(){}ni.prototype=S,S.bW=(function(){this.bC.hp(this)}),S.fa=(function(e){var t=Vr(),n=(()=>{this.bD=this.cS.e(e)});if(Vr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Lr(t)}}}),S.fc=(function(){var e=this.bD;e.g()||(e.x().bW(),this.bD=J())});var ri=new E().i(ti,`com.raquo.airstream.ownership.DynamicSubscription`,{bi:1});function ii(){}S=ii.prototype=new w,S.constructor=ii;function ai(){}ai.prototype=S,S.cL=(function(e,t,n){return new ti(e,new K((e=>new Y(t.e(e)))),n)}),S.fn=(function(e,t,n){return new ti(e,new K((e=>(t.e(e),J()))),n)}),new E().i(ii,`com.raquo.airstream.ownership.DynamicSubscription$`,{bj:1});var oi;function si(){return oi||=new ii,oi}function ci(e){e.aJ=xi().a4(I().h(new(hi.r()).C([])))}function li(e){for(var t=e.aJ,n=0,r=t.length|0;n<r;)fi(t[n]),n=1+n|0;e.aJ.length=0}function ui(e,t){var n=e.aJ.indexOf(t)|0;if(n!==-1)e.aJ.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function di(e,t){e.aJ.push(t)}function fi(e){if(!e.c2)e.cU.aD(),e.c2=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function pi(e,t){this.cV=null,this.cU=null,this.c2=!1,this.cV=e,this.cU=t,this.c2=!1,e.hh(this)}S=pi.prototype=new w,S.constructor=pi;function mi(){}mi.prototype=S,S.bW=(function(){fi(this),ui(this.cV,this)});var hi=new E().i(pi,`com.raquo.airstream.ownership.Subscription`,{bm:1});function gi(e,t){this.cW=null,this.cX=null,this.a7=null,this.ar=!1,this.cW=e,this.cX=t,this.a7=J(),this.ar=!1}S=gi.prototype=new w,S.constructor=gi;function _i(){}_i.prototype=S,S.gQ=(function(){var e=this.a7;return!e.g()&&!e.x().bC.G.g()}),S.hu=(function(e){if(this.ar)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a7;if(t.g())var n=!1;else var n=e===t.x().bC;if(!n){this.gQ()&&!e.G.g()&&(this.ar=!0);var r=this.a7;r.g()||(r.x().bW(),this.a7=J()),this.a7=new Y(si().cL(e,new K((e=>(this.ar||this.cW.aD(),new pi(e,new Td((()=>{this.ar||this.cX.aD()})))))),!1)),this.ar=!1}}),S.g4=(function(){if(this.ar)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a7;e.g()||e.x().bW(),this.a7=J()}),new E().i(gi,`com.raquo.airstream.ownership.TransferableSubscription`,{bn:1});function vi(){}S=vi.prototype=new w,S.constructor=vi;function yi(){}yi.prototype=S,S.a4=(function(e){return[...Rs().hH(e)]}),new E().i(vi,`com.raquo.ew.JsArray$`,{bo:1});var bi;function xi(){return bi||=new vi,bi}function Si(){}S=Si.prototype=new w,S.constructor=Si;function Ci(){}Ci.prototype=S,S.gx=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(Si,`com.raquo.ew.JsArray$RichJsArray$`,{bp:1});var wi;function Ti(){return wi||=new Si,wi}function Ei(){this.cY=null,Oi=this,document.createElement(`template`),this.g8(G().s.hC().hD()),this.cY=RegExp(` `,`g`)}S=Ei.prototype=new w,S.constructor=Ei;function Di(){}Di.prototype=S,S.fS=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Bc?e:new X(e);if(n instanceof X&&n.T instanceof DOMException)return!1;throw n instanceof X?n.T:n}}),S.gR=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().L(t,r))return!0;n=r}}),S.fL=(function(e,t){e.addEventListener(t.aN.bG.bH,t.c9,t.ca)}),S.hn=(function(e,t){e.removeEventListener(t.aN.bG.bH,t.c9,t.ca)}),S.g7=(function(e){return document.createElement(e.cH())}),S.gF=(function(e,t){var n=this.gG(e,t);return n===void 0?void 0:t.aK.bS(n)}),S.gG=(function(e,t){var n=e.H.getAttributeNS(null,t.a8);return n===null?void 0:n}),S.fk=(function(e,t,n){this.ht(e,t,t.aK.bV(n))}),S.ht=(function(e,t,n){n===null?this.ho(e,t):e.H.setAttribute(t.a8,n)}),S.ho=(function(e,t){e.H.removeAttribute(t.a8)}),S.fl=(function(e,t,n){var r=e.H,i=t.aL,a=t.aM,o=n===null?null:n;o===null?(a.W(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.W(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),S.g8=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dM)}),S.gJ=(function(e,t){var n=this.gK(e,t);return n===void 0?void 0:t.c7.bS(n)}),S.gK=(function(e,t){var n=e.cJ(),r=t.bJ,i=n.getAttributeNS(r.g()?null:r.x(),t.c8);return i===null?void 0:i}),S.hv=(function(e,t,n){this.hw(e,t,t.c7.bV(n))}),S.hw=(function(e,t,n){if(n===null)this.hq(e,t);else{var r=t.bJ;if(r.g())e.cJ().setAttribute(t.bI,n);else{var i=r.x();e.cJ().setAttributeNS(i,t.bI,n)}}}),S.hq=(function(e,t){var n=e.cJ(),r=t.bJ;n.removeAttributeNS(r.g()?null:r.x(),t.c8)}),S.g9=(function(e){return document.createTextNode(e)}),S.gc=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Nh(this.gb(r),n);r=i,n=a}}),S.gb=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cY,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new E().i(Ei,`com.raquo.laminar.DomApi$`,{bq:1});var Oi;function D(){return Oi||=new Ei,Oi}function ki(e,t,n){this.c4=null,this.cZ=null,this.c3=null,this.c4=e,this.cZ=t,this.c3=n}S=ki.prototype=new w,S.constructor=ki;function Ai(){}Ai.prototype=S,S.W=(function(e){this.c4===null?this.c3===null?hs().gy(this.cZ,e):Ti().gx(this.c3,Iu().gB(e)):this.c4.W(e)}),new E().i(ki,`com.raquo.laminar.Seq`,{br:1});function ji(){}S=ji.prototype=new w,S.constructor=ji;function Mi(){}Mi.prototype=S,new E().i(ji,`com.raquo.laminar.Seq$`,{bs:1});var Ni;function Pi(){return Ni||=new ji,Ni}function Fi(e){kr(),Tl()}function Ii(e){e.fr=va()}function Li(e){Ri(e,new K((e=>{e.dz.H.focus()})))}function Ri(e,t){return new lc(new K((e=>{var n=new ml(!e.a2.G.g()),r=new K((e=>{n.bR?n.bR=!1:t.e(e)}));si().fn(e.a2,new K((e=>(t=>{r.e(new pa(e,t))}))(e)),!1)})),va())}function zi(){this.b0=null,this.c5=null,Vi=this,this.b0=new Ys(Hi()),new Ys(Hi()),new Ys(Hi()),this.c5=new qs}S=zi.prototype=new w,S.constructor=zi;function Bi(){}Bi.prototype=S,new E().i(zi,`com.raquo.laminar.codecs.package$`,{bA:1});var Vi;function Hi(){return Vi||=new zi,Vi}function Ui(e){e.fs=Wi(e,`class`,` `)}function Wi(e,t,n){var r=nc(new rc,t,Hi().b0);return new Qs(r.a8,new K((e=>{var t=D().gF(e,r);return t===void 0?``:t})),new Od(((e,t)=>{D().fk(e,r,t)})),n)}function Gi(e){e.fq=Ki(e,`class`,` `)}function Ki(e,t,n){var r=new ac(t,Hi().b0,J());return new Qs(r.bI,new K((e=>{var t=D().gJ(e,r);return t===void 0?``:t})),new Od(((e,t)=>{D().hv(e,r,t)})),n)}function qi(e){this.bE=null,this.bE=e}S=qi.prototype=new w,S.constructor=qi;function Ji(){}Ji.prototype=S,S.fd=(function(e,t){try{this.bE.cC(e,t)}catch(e){var n=e instanceof Bc?e:new X(e);Tl().bw(n)}}),S.g5=(function(e){return new qi(new Od(((t,n)=>{this.bE.cC(t,n),e.bE.cC(t,n)})))}),S.fT=(function(e){return e===void 0?this:e.g5(this)}),new E().i(qi,`com.raquo.laminar.inserters.InserterHooks`,{bZ:1});function Yi(){}S=Yi.prototype=new w,S.constructor=Yi;function Xi(){}Xi.prototype=S,S.he=(function(e,t){return new Md(e,void 0)}),new E().i(Yi,`com.raquo.laminar.inserters.StaticChildInserter$`,{c1:1});var Zi;function Qi(){return Zi||=new Yi,Zi}function $i(e,t){this.du=null,this.dt=null,this.du=e,this.dt=t}S=$i.prototype=new w,S.constructor=$i;function ea(){}ea.prototype=S,S.v=(function(e){return new jl(this.du,this.dt.e(e),new Ad(((e,t,n)=>{D().fl(e,t,n)})))}),new E().i($i,`com.raquo.laminar.keys.DerivedStyleProp`,{c4:1});function ta(e,t,n,r){this.bG=null,this.dx=!1,this.dw=!1,this.dv=null,this.bG=e,this.dx=t,this.dw=n,this.dv=r}S=ta.prototype=new w,S.constructor=ta;function na(){}na.prototype=S,new E().i(ta,`com.raquo.laminar.keys.EventProcessor`,{c5:1});function ra(){}S=ra.prototype=new w,S.constructor=ra;function ia(){}ia.prototype=S,S.eU=(function(e,t,n){return new ta(e,t,n,new K((e=>new Y(e))))}),new E().i(ra,`com.raquo.laminar.keys.EventProcessor$`,{c6:1});var aa;function oa(){return aa||=new ra,aa}function sa(){}S=sa.prototype=new w,S.constructor=sa;function ca(){}ca.prototype=S;function la(){this.ft=null,this.fu=null,this.fv=null,this.fw=null,this.ft=`http://www.w3.org/2000/svg`,this.fu=`http://www.w3.org/1999/xlink`,this.fv=`http://www.w3.org/XML/1998/namespace`,this.fw=`http://www.w3.org/2000/xmlns/`}S=la.prototype=new w,S.constructor=la;function ua(){}ua.prototype=S,S.h1=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new uf(e)}}),new E().i(la,`com.raquo.laminar.keys.SvgAttr$`,{c9:1});var da;function fa(){return da||=new la,da}function pa(e,t){this.dz=null,this.dy=null,this.dz=e,this.dy=t}S=pa.prototype=new w,S.constructor=pa;function ma(){}ma.prototype=S,new E().i(pa,`com.raquo.laminar.lifecycle.MountContext`,{ca:1});var O=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function ha(){this.fx=null,_a=this,this.fx=new sc}S=ha.prototype=new w,S.constructor=ha;function ga(){}ga.prototype=S,new E().i(ha,`com.raquo.laminar.modifiers.Modifier$`,{ce:1});var _a;function va(){return _a||=new ha,_a}function ya(){this.dE=null,xa=this,this.dE=new dc}S=ya.prototype=new w,S.constructor=ya;function ba(){}ba.prototype=S,new E().i(ya,`com.raquo.laminar.modifiers.RenderableNode$`,{ci:1});var xa;function Sa(){return xa||=new ya,xa}function Ca(){this.B=null,Ta=this,this.B=new _c(new K((e=>e)),k()),new _c(new K((e=>``+(e|0))),k()),new _c(new K((e=>``+ +e)),k()),new _c(new K((e=>``+!!e)),k()),new _c(new K((e=>e.hG())),k())}S=Ca.prototype=new w,S.constructor=Ca;function wa(){}wa.prototype=S,new E().i(Ca,`com.raquo.laminar.modifiers.RenderableText$`,{cn:1});var Ta;function k(){return Ta||=new Ca,Ta}function Ea(){}S=Ea.prototype=new w,S.constructor=Ea;function Da(){}Da.prototype=S,S.bg=(function(e,t,n){var r=new Y(e);t.fp(r),n!==void 0&&n.fd(e,t);var i=D().fS(e.aE(),t.aE());return i&&t.fm(r),i}),new E().i(Ea,`com.raquo.laminar.nodes.ParentNode$`,{cq:1});var Oa;function ka(){return Oa||=new Ea,Oa}function Aa(){}S=Aa.prototype=new w,S.constructor=Aa;function ja(){}ja.prototype=S,S.hJ=(function(e,t){return si().cL(e.a2,new K((n=>t.e(new pa(e,n)))),!0)}),new E().i(Aa,`com.raquo.laminar.nodes.ReactiveElement$`,{cs:1});var Ma;function Na(){return Ma||=new Aa,Ma}function Pa(e){this.dJ=null,this.dJ=new qi(new Od(((t,n)=>{matchResult1:{var r=n.aE();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Tl(),a=r.textContent,o=t.aE().tagName;i.bw(V(new H,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}S=Pa.prototype=new w,S.constructor=Pa;function Fa(){}Fa.prototype=S,S.fW=(function(e){return e.f9(new K((e=>e.hK(this.dJ))))}),new E().i(Pa,`com.raquo.laminar.nodes.Slot`,{cv:1});function Ia(){Ra=this,xi().a4(I().hN(new gr(new Int32Array([0]))))}S=Ia.prototype=new w,S.constructor=Ia;function La(){}La.prototype=S,S.fI=(function(){return new K((e=>void 0))}),new E().i(Ia,`com.raquo.laminar.tags.CustomHtmlTag$`,{cy:1});var Ra;function za(){return Ra||=new Ia,Ra}function Ba(){}S=Ba.prototype=new w,S.constructor=Ba;function Va(){}Va.prototype=S,S.fJ=(function(e){return G().s.eT().bl(I().h(new(O.r()).C([G().s.gf().gv(),G().s.gw().hM(),G().s.fO().g3(),G().s.gC().hj().v(16),Dl(G().s,e,gc())])))}),new E().i(Ba,`doc.Examples$package$`,{cA:1});var Ha;function Ua(){return Ha||=new Ba,Ha}function Wa(){}S=Wa.prototype=new w,S.constructor=Wa;function Ga(){}Ga.prototype=S,S.fP=(function(){qa().gn(),qa().go(),qa().gp(),qa().gq(),qa().gr()}),S.gn=(function(){var e=document.querySelector(`#example1`);il().bk(e).g()||(G(),new Nl(e,Bl().z(I().h(new(P.r()).C([])),I().h(new(O.r()).C([Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Shipping`))),new W((e=>e.f4().v(!0)))])),I().h(new(O.r()).C([B(G().s,`Orders ship within two business days.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Returns`)))])),I().h(new(O.r()).C([B(G().s,`You can return unused items within 30 days.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Support`)))])),I().h(new(O.r()).C([B(G().s,`Contact us if you need help with your order.`,k().B)])))])))))}),S.go=(function(){var e=document.querySelector(`#example2`);il().bk(e).g()||(G(),new Nl(e,Bl().z(I().h(new(P.r()).C([new W((e=>e.gZ().hz()))])),I().h(new(O.r()).C([Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`First section`))),new W((e=>e.f4().v(!0)))])),I().h(new(O.r()).C([B(G().s,`First section content.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Second section`)))])),I().h(new(O.r()).C([B(G().s,`Second section content.`,k().B)])))])))))}),S.gp=(function(){var e=document.querySelector(`#example3`);il().bk(e).g()||(G(),new Nl(e,Bl().z(I().h(new(P.r()).C([new W((e=>e.fQ().gu())),new W((e=>e.gO().hA())),new W((e=>e.gN().v(`2`)))])),I().h(new(O.r()).C([Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Account settings`)))])),I().h(new(O.r()).C([B(G().s,`Manage your profile and preferences.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Privacy settings`)))])),I().h(new(O.r()).C([B(G().s,`Choose what information to share.`,k().B)])))])))))}),S.gq=(function(){var e=document.querySelector(`#example4`);il().bk(e).g()||(G(),new Nl(e,Bl().z(I().h(new(P.r()).C([])),I().h(new(O.r()).C([Wl().z(I().h(new(P.r()).C([new W((e=>El(G().s,Qa().gU().fW(I().h(new(Pd.r()).C([(G(),Qi().he(G().s.hB().bl(I().h(new(O.r()).C([B(G().s,`Important information`,k().B)]))),Sa().dE))]))),Wc().eg,gc())))])),I().h(new(O.r()).C([B(G().s,`This section has a custom label.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Unavailable`))),new W((e=>e.ge().v(!0)))])),I().h(new(O.r()).C([B(G().s,`This section cannot be toggled.`,k().B)])))])))))}),S.gr=(function(){var e=document.querySelector(`#example5`);if(!il().bk(e).g()){G();var t=Bl().z(I().h(new(P.r()).C([])),I().h(new(O.r()).C([Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Overview`)))])),I().h(new(O.r()).C([B(G().s,`A short overview.`,k().B)]))),Wl().z(I().h(new(P.r()).C([new W((e=>e.a1().v(`Details`)))])),I().h(new(O.r()).C([B(G().s,`More detailed information.`,k().B)])))])));new Nl(e,G().s.eT().bl(I().h(new(O.r()).C([Ua().fJ(I().h(new(Xf.r()).C([Jl().z(I().h(new(P.r()).C([])),I().h(new(O.r()).C([B(G().s,`Expand all`,k().B),new Ol((G(),oa().eU(G().s.fb(),!1,!1)),new W((e=>{t.H.expandAll()})))]))),Jl().z(I().h(new(P.r()).C([])),I().h(new(O.r()).C([B(G().s,`Collapse all`,k().B),new Ol((G(),oa().eU(G().s.fb(),!1,!1)),new W((e=>{t.H.collapseAll()})))])))]))),G().s.g1().bl(I().h(new(O.r()).C([]))),t]))))}}),new E().i(Wa,`examples.accordion.Main$package$`,{cB:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(e){try{qa().fP()}catch(e){throw e}}function Ya(){this.e1=null,this.e2=!1}S=Ya.prototype=new w,S.constructor=Ya;function Xa(){}Xa.prototype=S,S.gU=(function(){return this.e2||=(this.e1=new Pa(`label`),!0),this.e1}),new E().i(Ya,`io.github.nguyenyou.webawesome.laminar.AccordionItem$slots$`,{cE:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(){this.fz=!1,this.b4=null,this.bL=null,this.e9=null,this.cg=!1,this.fy=0,this.fB=0,this.fA=null,to=this,this.fz=!0,this.b4=new ArrayBuffer(8),this.bL=new Int32Array(this.b4,0,2),new Float32Array(this.b4,0,2),this.e9=new Float64Array(this.b4,0,1),this.bL[0]=16909060,this.cg=(new Int8Array(this.b4,0,8)[0]|0)==1,this.fy=this.cg?0:1,this.fB=this.cg?1:0,this.fA=null}S=$a.prototype=new w,S.constructor=$a;function eo(){}eo.prototype=S,S.cI=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.e9[0]=e,(this.bL[0]|0)^(this.bL[1]|0))}),new E().i($a,`java.lang.FloatingPointBits$`,{cR:1});var to;function no(){return to||=new $a,to}function ro(e,t){for(var n=A().Y(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=io(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Nc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Nc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Fc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function io(e,t){var n=A().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().Y(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[ao(e,c[1]),po(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[ao(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[ao(e,d[1]),`<clinit>`]}function ao(e,t){var n=so(e);if(zo().ef.call(n,t))var r=so(e)[t];else var r=wo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function oo(e){if(!((1&e.N)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ci=t,e.N=(1|e.N)<<24>>24}return e.ci}function so(e){return(1&e.N)<<24>>24?e.ci:oo(e)}function co(e){if(!((2&e.N)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cj=t,e.N=(2|e.N)<<24>>24}return e.cj}function lo(e){return(2&e.N)<<24>>24?e.cj:co(e)}function uo(e){return(4&e.N)<<24>>24||(e.ch=Object.keys(lo(e)),e.N=(4|e.N)<<24>>24),e.ch}function fo(e){return(4&e.N)<<24>>24?e.ch:uo(e)}function po(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function mo(e,t){return t?t.arguments&&t.stack?ho(e,t):t.stack&&t.sourceURL?vo(e,t):t.stack&&t.number?_o(e,t):t.stack&&t.fileName?go(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?yo(e,t):bo(e,t):yo(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?xo(e,t):So(e,t):t.stack&&!t.fileName?ho(e,t):Co(e,t):[]}function ho(e,t){return(t.stack+`
`).replace(A().Y(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().E(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().E(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().E(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().E(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function go(e,t){return t.stack.replace(A().E(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().E(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function _o(e,t){return t.stack.replace(A().E(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().E(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().E(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function vo(e,t){return t.stack.replace(A().E(`\\[native code\\]\\n`,`m`),``).replace(A().E(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().E(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function yo(e,t){for(var n=A().E(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function bo(e,t){for(var n=A().E(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function xo(e,t){for(var n=A().Y(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function So(e,t){for(var n=A().Y(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().Y(`<anonymous function: (\\S+)>`),`$1`).replace(A().Y(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Co(e,t){return[]}function wo(e,t,n){for(;;)if(t<(fo(e).length|0)){var r=fo(e)[t];if(n.startsWith(r))return``+lo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function To(){this.ci=null,this.cj=null,this.ch=null,this.N=0}S=To.prototype=new w,S.constructor=To;function Eo(){}Eo.prototype=S,S.gs=(function(e){return ro(this,mo(this,e))}),new E().i(To,`java.lang.StackTrace$`,{cY:1});var Do;function Oo(){return Do||=new To,Do}function ko(){}S=ko.prototype=new w,S.constructor=ko;function Ao(){}Ao.prototype=S,S.Y=(function(e){return new RegExp(e)}),S.E=(function(e,t){return new RegExp(e,t)}),new E().i(ko,`java.lang.StackTrace$StringRE$`,{cZ:1});var jo;function A(){return jo||=new ko,jo}function Mo(){this.eb=null,this.fC=null,Po=this,this.eb=new om(!1),this.fC=new om(!0)}S=Mo.prototype=new w,S.constructor=Mo;function No(){}No.prototype=S,new E().i(Mo,`java.lang.System$Streams$`,{d4:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(){this.ef=null,Ro=this,this.ef=Object.prototype.hasOwnProperty}S=Io.prototype=new w,S.constructor=Io;function Lo(){}Lo.prototype=S,new E().i(Io,`java.lang.Utils$Cache$`,{d6:1});var Ro;function zo(){return Ro||=new Io,Ro}function Bo(e,t){return e===t}function Vo(e){return 0}function Ho(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ar)}var Uo=new E().i(0,`java.lang.Void`,{ar:1},(e=>e===void 0));function Wo(e,t){throw new Jd(`argument type mismatch`)}function Go(){}S=Go.prototype=new w,S.constructor=Go;function Ko(){}Ko.prototype=S,S.aV=(function(e){return e instanceof T||e instanceof fr||e instanceof pr||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r||e instanceof vr||e instanceof yr?e.a.length:Wo(this,e)}),new E().i(Go,`java.lang.reflect.Array$`,{d7:1});var qo;function Jo(){return qo||=new Go,qo}function Yo(){}S=Yo.prototype=new w,S.constructor=Yo;function Xo(){}Xo.prototype=S,S.f0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),S.eZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.f1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.eW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.eV=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.f2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.eX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),S.eY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new E().i(Yo,`java.util.Arrays$`,{d8:1});var Zo;function j(){return Zo||=new Yo,Zo}function M(e,t){this.c=0,this.d=0,this.c=e,this.d=t}S=M.prototype=new w,S.constructor=M;function Qo(){}Qo.prototype=S,S.j=(function(e){return e instanceof M&&this.c===e.c&&this.d===e.d}),S.o=(function(){return this.c^this.d}),S.t=(function(){return N().fh(this.c,this.d)}),S.iq=(function(){return this.c}),S.ip=(function(){return N().fg(this.c,this.d)}),S.io=(function(){return N().bu(this.c,this.d)}),S.i5=(function(){return this.c<<24>>24}),S.il=(function(){return this.c<<16>>16}),S.ig=(function(){return this.c}),S.ih=(function(){return this}),S.ib=(function(){return N().fg(this.c,this.d)}),S.i9=(function(){return N().bu(this.c,this.d)}),S.i7=(function(e){return N().fe(this.c,this.d,e.c,e.d)}),S.i6=(function(e){return N().fe(this.c,this.d,e.c,e.d)}),S.ia=(function(e){return this.c===e.c&&this.d===e.d}),S.ik=(function(e){return!(this.c===e.c&&this.d===e.d)}),S.hX=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),S.hY=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),S.hT=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),S.hU=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),S.is=(function(){return new M(~this.c,~this.d)}),S.hR=(function(e){return new M(this.c|e.c,this.d|e.d)}),S.hQ=(function(e){return new M(this.c&e.c,this.d&e.d)}),S.i4=(function(e){return new M(this.c^e.c,this.d^e.d)}),S.hZ=(function(e){var t=this.c;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),S.hW=(function(e){var t=this.d;return new M(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),S.hV=(function(e){var t=this.d;return new M(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),S.ir=(function(){var e=this.c,t=this.d;return new M(-e|0,e===0?-t|0:~t)}),S.i2=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),S.i0=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),S.i3=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),S.hS=(function(e){var t=N();return new M(t.gg(this.c,this.d,e.c,e.d),t.q)}),S.i1=(function(e){var t=N();return new M(t.hm(this.c,this.d,e.c,e.d),t.q)}),new E().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{as:1});function $o(e,t,n){return-2097152&n?ns(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function es(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.q=0,n>>>o|0}else return ns(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.q=s/4294967296|0,s|0}}function ts(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.q=n&(-1+i|0),t):ns(e,t,n,r,i,1)|0;if(-2097152&i)return e.q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.q=a/4294967296|0,a|0}function ns(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.q=ee,m;if(a===1)return e.q=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function rs(){this.q=0}S=rs.prototype=new w,S.constructor=rs;function is(){}is.prototype=S,S.fh=(function(e,t){return t===e>>31?``+e:t<0?`-`+$o(this,-e|0,e===0?-t|0:~t):$o(this,e,t)}),S.bu=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),S.fg=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),S.id=(function(e){return new M(e,e>>31)}),S.ic=(function(e){return new M(this.ff(e),this.q)}),S.ff=(function(e){if(e<-0x8000000000000000)return this.q=-2147483648,0;if(e>=0x8000000000000000)return this.q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.q=e<0&&t!==0?-1+n|0:n,t}),S.fe=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),S.gg=(function(e,t,n,r){if((n|r)===0)throw new Kd(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.q=0,-2147483648;var i=Yn(e,n);return this.q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=-1,-1;else return this.q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=es(this,a,o,s,c);if((t^r)>=0)return l;var u=this.q;return this.q=l===0?-u|0:~u,-l|0}}),S.hm=(function(e,t,n,r){if((n|r)===0)throw new Kd(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Xn(e,n);return this.q=i>>31,i}else return this.q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=0,0;else return this.q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=ts(this,a,o,s,c);if(t<0){var u=this.q;return this.q=l===0?-u|0:~u,-l|0}else return l}}),new E().i(rs,`org.scalajs.linker.runtime.RuntimeLong$`,{da:1});var as;function N(){return as||=new rs,as}var P=new E().i(1,`scala.Function1`,{e:1});function os(){}S=os.prototype=new w,S.constructor=os;function ss(){}ss.prototype=S;function cs(){this.ej=null,this.ei=null,us=this,this.ej=new W((e=>ds().ej)),this.ei=new gd}S=cs.prototype=new w,S.constructor=cs;function ls(){}ls.prototype=S,new E().i(cs,`scala.PartialFunction$`,{dp:1});var us;function ds(){return us||=new cs,us}function fs(){this.em=null,ms=this,this.em=new W((e=>hs().em))}S=fs.prototype=new w,S.constructor=fs;function ps(){}ps.prototype=S,S.gy=(function(e,t){var n=Jo().aV(e),r=0;if(e instanceof T)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof yr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof _r)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof vr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof pr)for(;r<n;)t.e(sr(e.a[r])),r=1+r|0;else if(e instanceof mr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof hr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof fr)for(;r<n;)t.e(e.a[r]),r=1+r|0;else throw new uf(e)}),new E().i(fs,`scala.collection.ArrayOps$`,{dv:1});var ms;function hs(){return ms||=new fs,ms}function gs(e,t){for(var n=e.m();n.r();)t.e(n.i())}function _s(e,t,n,r){return e.A()===0?``+t+r:e.bf(zh(new Bh),t,n,r).K.p}function vs(e,t,n,r,i){var a=t.K;n.length!==0&&(a.p=``+a.p+n);var o=e.m();if(o.r()){var s=o.i();for(a.p=``+a.p+s;o.r();){a.p=``+a.p+r;var c=o.i();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function ys(e,t){this.eq=null,this.ba=null,this.eq=e,this.ba=t}S=ys.prototype=new w,S.constructor=ys;function bs(){}bs.prototype=S,S.gM=(function(){return this.eq.aD().m()}),new E().i(ys,`scala.collection.Iterator$ConcatIteratorCell`,{dN:1});function xs(){}S=xs.prototype=new w,S.constructor=xs;function Ss(){}Ss.prototype=S,S.L=(function(e,t){return e===t||(Mc(e)?this.gm(e,t):e instanceof C?this.gk(e,t):e===null?t===null:Kn(e,t))}),S.gm=(function(e,t){if(Mc(t))return this.gl(e,t);if(t instanceof C){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=lr(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Kn(e,t)}else return e===null?t===null:Kn(e,t)}),S.gl=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=lr(t);return n===N().bu(r.c,r.d)}else return!1}else if(e instanceof M){var i=lr(e),a=i.c,o=i.d;if(t instanceof M){var s=lr(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return N().bu(a,o)===u}else return!1}else return e===null?t===null:Kn(e,t)}),S.gk=(function(e,t){if(t instanceof C)return e.c===t.c;if(Mc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=lr(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Kn(t,e)}else return e===null&&t===null}),new E().i(xs,`scala.runtime.BoxesRunTime$`,{eo:1});var Cs;function F(){return Cs||=new xs,Cs}var ws=new E().i(0,`scala.runtime.Null$`,{er:1});function Ts(){}S=Ts.prototype=new w,S.constructor=Ts;function Es(){}Es.prototype=S,S.aT=(function(e,t){if(e instanceof T||e instanceof gr||e instanceof yr||e instanceof _r||e instanceof vr)return e.a[t];if(e instanceof pr)return sr(e.a[t]);if(e instanceof mr||e instanceof hr||e instanceof fr)return e.a[t];throw e===null?new $d:new uf(e)}),S.fX=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof gr)e.a[t]=n|0;else if(e instanceof yr)e.a[t]=+n;else if(e instanceof _r)e.a[t]=lr(n);else if(e instanceof vr)e.a[t]=Math.fround(n);else if(e instanceof pr)e.a[t]=cr(n);else if(e instanceof mr)e.a[t]=n|0;else if(e instanceof hr)e.a[t]=n|0;else if(e instanceof fr)e.a[t]=!!n;else if(e===null)throw new $d;else throw new uf(e)}),S.fK=(function(e){return _s(e.aY(),e.an()+`(`,`,`,`)`)}),S.h=(function(e){return e===null?null:e.a.length===0?xp(Tp()):new rh(e)}),S.hN=(function(e){return e===null?null:new $m(e)}),new E().i(Ts,`scala.runtime.ScalaRunTime$`,{es:1});var Ds;function I(){return Ds||=new Ts,Ds}function Os(){}S=Os.prototype=new w,S.constructor=Os;function ks(){}ks.prototype=S,S.b=(function(e,t){var n=this.bX(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bX=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.l=(function(e,t){return this.fZ(e^t)}),S.fZ=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.aX=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),S.V=(function(e){var t=Zn(e);if(t===e)return t;var n=N(),r=n.ff(e),i=n.q;return N().bu(r,i)===e?r^i:no().cI(e)}),S.y=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof M){var t=lr(e);return this.aX(new M(t.c,t.d))}else return qn(e)}),S.bt=(function(e){throw Yd(new Xd,``+e)}),new E().i(Os,`scala.runtime.Statics$`,{eu:1});var As;function L(){return As||=new Os,As}function js(){}S=js.prototype=new w,S.constructor=js;function Ms(){}Ms.prototype=S,S.hx=(function(e,t){return setTimeout((()=>{t.aD()}),e)}),new E().i(js,`scala.scalajs.js.timers.package$`,{eA:1});var Ns;function Ps(){return Ns||=new js,Ns}function Fs(){}S=Fs.prototype=new w,S.constructor=Fs;function Is(){}Is.prototype=S,S.hH=(function(e){var t=[];return e.W(new W((e=>t.push(e)|0))),t}),new E().i(Fs,`scala.scalajs.runtime.Compat$`,{eJ:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(){}S=zs.prototype=new w,S.constructor=zs;function Bs(){}Bs.prototype=S,S.hy=(function(e){var t=`Illegal command line`+(e.f8()===0?``:e.f8()===1?` after first argument`:` after `+e.f8()+` arguments`)+`: `+e.ii();Qc().hg().gS(t+`
`)}),new E().i(zs,`scala.util.CommandLineParser$`,{eL:1});function Vs(e){this.cy=null,this.cy=e}S=Vs.prototype=new w,S.constructor=Vs;function Hs(){}Hs.prototype=S,S.t=(function(){return`DynamicVariable(`+this.cy+`)`}),new E().i(Vs,`scala.util.DynamicVariable`,{eN:1});function Us(){}S=Us.prototype=new w,S.constructor=Us;function Ws(){}Ws.prototype=S,S.b=(function(e,t){var n=this.bX(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bX=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.l=(function(e,t){return this.F(e^t)}),S.F=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.fi=(function(e,t,n){var r=e.al();if(r===0)return q(e.an());var i=t;n||(i=this.b(i,q(e.an())));for(var a=0;a<r;)i=this.b(i,L().y(e.am(a))),a=1+a|0;return this.l(i,r)}),S.hI=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.r();){var s=o.i(),c=L().y(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bX(l,a),this.l(l,i)}),S.hf=(function(e,t){var n=e.m(),r=t;if(!n.r())return this.l(r,0);var i=n.i();if(!n.r())return this.l(this.b(r,L().y(i)),1);var a=n.i(),o=L().y(i);r=this.b(r,o);for(var s=r,c=L().y(a),l=c-o|0,u=2;n.r();){r=this.b(r,c);var d=L().y(n.i());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.r();)r=this.b(r,L().y(n.i())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.F(this.b(this.b(s,l),c))}),S.eF=(function(e,t){var n=t,r=Jo().aV(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().y(I().aT(e,0))),1);default:var i=L().y(I().aT(e,0));n=this.b(n,i);for(var a=n,o=L().y(I().aT(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().y(I().aT(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().y(I().aT(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.hk=(function(e,t,n,r){return this.F(this.b(this.b(this.b(r,e),t),n))}),S.gP=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().y(e.n(0))),1);default:var i=L().y(e.n(0));n=this.b(n,i);for(var a=n,o=L().y(e.n(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().y(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().y(e.n(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.gV=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.X(),u=c.M(),d=L().y(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.hk(s,a,o,t):this.l(r,n)}),S.eO=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eG=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eH=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eI=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().V(e.a[0])),1);default:var i=L().V(e.a[0]);n=this.b(n,i);for(var a=n,o=L().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().V(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eJ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().V(e.a[0])),1);default:var i=L().V(e.a[0]);n=this.b(n,i);for(var a=n,o=L().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().V(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eK=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eL=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,L().aX(new M(a.c,a.d))),1);default:var o=e.a[0],s=L().aX(new M(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=L().aX(new M(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=L().aX(new M(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,L().aX(new M(te.c,te.d))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.F(this.b(this.b(c,d),u))}}),S.eM=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),S.eN=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.F(this.b(this.b(i,o),a))}});function Gs(e){this.aJ=null,this.cT=null,this.c1=!1,this.cT=e,ci(this),this.c1=!1}S=Gs.prototype=new w,S.constructor=Gs;function Ks(){}Ks.prototype=S,S.hh=(function(e){this.c1?(fi(e),this.cT.aD()):di(this,e)}),S.gT=(function(){li(this),this.c1=!0}),new E().i(Gs,`com.raquo.airstream.ownership.OneTimeOwner`,{bk:1,bl:1});function qs(){}S=qs.prototype=new w,S.constructor=qs;function Js(){}Js.prototype=S,S.gd=(function(e){return e!==null}),S.gj=(function(e){return e?``:null}),S.bS=(function(e){return this.gd(e)}),S.bV=(function(e){return this.gj(!!e)}),new E().i(qs,`com.raquo.laminar.codecs.package$$anon$1`,{bB:1,a2:1});function Ys(e){if(e===null)throw new $d}S=Ys.prototype=new w,S.constructor=Ys;function Xs(){}Xs.prototype=S,S.bV=(function(e){return e}),S.bS=(function(e){return e}),new E().i(Ys,`com.raquo.laminar.codecs.package$$anon$2`,{bC:1,a2:1});function Zs(e){return new $i(e,new K((e=>e+`px`)))}function Qs(e,t,n,r){}S=Qs.prototype=new ca,S.constructor=Qs;function $s(){}$s.prototype=S,new E().i(Qs,`com.raquo.laminar.keys.CompositeKey`,{c3:1,I:1});function ec(e){this.bH=null,this.bH=e}S=ec.prototype=new ca,S.constructor=ec;function tc(){}tc.prototype=S,new E().i(ec,`com.raquo.laminar.keys.EventProp`,{c7:1,I:1});function nc(e,t,n){return e.a8=t,e.aK=n,e}function rc(){this.a8=null,this.aK=null}S=rc.prototype=new ca,S.constructor=rc;function ic(){}ic.prototype=S,S.v=(function(e){return new jl(this,e,new Ad(((e,t,n)=>{D().fk(e,t,n)})))}),new E().i(rc,`com.raquo.laminar.keys.HtmlAttr`,{Y:1,I:1});function ac(e,t,n){this.c8=null,this.c7=null,this.bI=null,this.bJ=null,this.c8=e,this.c7=t;var r=n.g()?J():new Y(n.x()+`:`+e);this.bI=r.g()?e:r.x(),this.bJ=n.g()?J():new Y(fa().h1(n.x()))}S=ac.prototype=new ca,S.constructor=ac;function oc(){}oc.prototype=S,new E().i(ac,`com.raquo.laminar.keys.SvgAttr`,{c8:1,I:1});function sc(){}S=sc.prototype=new w,S.constructor=sc;function cc(){}cc.prototype=S,S.Z=(function(e){}),new E().i(sc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cf:1,S:1});function lc(e,t){if(this.dD=null,this.dD=e,t===null)throw new $d}S=lc.prototype=new w,S.constructor=lc;function uc(){}uc.prototype=S,S.Z=(function(e){var t=Vr(),n=(()=>{this.dD.e(e)});if(Vr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Lr(t)}}}),new E().i(lc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cg:1,S:1});function dc(){}S=dc.prototype=new w,S.constructor=dc;function fc(){}fc.prototype=S,new E().i(dc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cj:1,ch:1});function pc(){}S=pc.prototype=new w,S.constructor=pc;function mc(){}mc.prototype=S,new E().i(pc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cl:1,ck:1});var hc;function gc(){return hc||=new pc,hc}function _c(e,t){if(this.dF=null,this.dF=e,t===null)throw new $d}S=_c.prototype=new w,S.constructor=_c;function vc(){}vc.prototype=S,S.fY=(function(e){return this.dF.e(e)}),new E().i(_c,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{co:1,cm:1});function yc(e){e.eS(new $r(new Td((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+_s(D().gc(e.aE(),(D(),$())),``,` > `,``))}))))}function bc(e,t,n){return e.ce=t,e}function xc(){this.ce=null}S=xc.prototype=new w,S.constructor=xc;function Sc(){}Sc.prototype=S,S.cH=(function(){return this.ce}),S.bl=(function(e){var t=this.g2();return e.W(new K((e=>{e.Z(t)}))),t}),S.g2=(function(){return new Jf(this,D().g7(this))}),new E().i(xc,`com.raquo.laminar.tags.HtmlTag`,{ag:1,a4:1});function Cc(e,t){this.dM=null,this.dM=e}S=Cc.prototype=new w,S.constructor=Cc;function wc(){}wc.prototype=S,new E().i(Cc,`com.raquo.laminar.tags.SvgTag`,{cz:1,a4:1});function Tc(){}S=Tc.prototype=new w,S.constructor=Tc;function Ec(){}Ec.prototype=S,S.bV=(function(e){return e}),S.bS=(function(e){return e}),new E().i(Tc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cJ:1,a2:1});function Dc(e,t){return e.b2=t,e.cz(),e}function Oc(){this.b2=null,this.b1=null,this.b3=!1}S=Oc.prototype=new w,S.constructor=Oc;function kc(){}kc.prototype=S,S.hE=(function(){return this.b3||=(this.b1=new Fl(this.b2,za().fI(),(za(),void 0)),!0),this.b1}),S.z=(function(e,t){var n=this.hE().bl(I().h(new(O.r()).C([])));return e.W(new K((e=>{e.e(this).Z(n)}))),t.W(new K((e=>{e.Z(n)}))),n});function Ac(){}S=Ac.prototype=new w,S.constructor=Ac;function jc(){}jc.prototype=S;function Mc(e){return e instanceof Ac||typeof e==`number`||e instanceof M}function Nc(e,t,n,r,i){this.aP=null,this.b6=null,this.aQ=null,this.aR=0,this.aO=0,this.aP=e,this.b6=t,this.aQ=n,this.aR=r,this.aO=i}S=Nc.prototype=new w,S.constructor=Nc;function Pc(){}Pc.prototype=S,S.j=(function(e){return e instanceof Nc&&this.aQ===e.aQ&&this.aR===e.aR&&this.aO===e.aO&&this.aP===e.aP&&this.b6===e.b6}),S.t=(function(){var e=``;return this.aP!==`<jscode>`&&(e=``+e+this.aP+`.`),e=``+e+this.b6,this.aQ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aQ,this.aR>=0&&(e=e+`:`+this.aR,this.aO>=0&&(e=e+`:`+this.aO)),e+=`)`),e}),S.o=(function(){return q(this.aP)^q(this.b6)^q(this.aQ)^this.aR^this.aO});var Fc=new E().i(Nc,`java.lang.StackTraceElement`,{aq:1,a:1});function Ic(){}S=Ic.prototype=new w,S.constructor=Ic;function Lc(){}Lc.prototype=S,S.h2=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new sp;for(var i=``,a=t;a!==r;)i+=``+Qn(e.a[a]),a=1+a|0;return i}),new E().i(Ic,`java.lang.String$`,{d1:1,a:1});var Rc;function zc(){return Rc||=new Ic,Rc}function R(e,t,n,r,i){return e.ed=t,e.ee=i,i&&e.gt(),e}var Bc=class extends Error{constructor(){super(),this.ed=null,this.ee=!1,this.ec=null,this.bM=null}bs(){return this.ed}gt(){var e=this instanceof X?this.T:this;return this.ec=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gI(){return this.bM===null&&(this.ee?this.bM=Oo().gs(this.ec):this.bM=new(Fc.r()).C(0)),this.bM}t(){var e=Gn(this),t=this.bs();return t===null?e:e+`: `+t}o(){return ur.prototype.o.call(this)}j(e){return ur.prototype.j.call(this,e)}get message(){var e=this.bs();return e===null?``:e}get name(){return Gn(this)}toString(){return this.t()}};function Vc(){this.eg=null,Uc=this,this.eg=new rf}S=Vc.prototype=new w,S.constructor=Vc;function Hc(){}Hc.prototype=S,new E().i(Vc,`scala.$less$colon$less$`,{dd:1,a:1});var Uc;function Wc(){return Uc||=new Vc,Uc}function Gc(){}S=Gc.prototype=new w,S.constructor=Gc;function Kc(){}Kc.prototype=S,S.f5=(function(e,t){var n=e.A();if(n>-1){for(var r=t.h3(n),i=e.m(),a=0;a<n;)I().fX(r,a,i.i()),a=1+a|0;return r}else{var o=null,s=t.hr(),c=s===Sr.l();o=[];for(var l=e.m();l.r();){var u=l.i(),d=c?cr(u):u===null?s.ao.z:u;o.push(d)}return(s===xr.l()?Uo.l():s===ws.l()||s===Mu.l()?br.l():s).ao.r().w(o)}}),S.f3=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().L(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(Gc,`scala.Array$`,{df:1,a:1});var qc;function Jc(){return qc||=new Gc,qc}function Yc(){this.eh=null,Zc=this,this.eh=new Vs(Fo().eb)}S=Yc.prototype=new w,S.constructor=Yc;function Xc(){}Xc.prototype=S,S.hg=(function(){return this.eh.cy}),new E().i(Yc,`scala.Console$`,{dg:1,ea:1});var Zc;function Qc(){return Zc||=new Yc,Zc}function $c(){}S=$c.prototype=new ss,S.constructor=$c;function el(){}el.prototype=S,S.hO=(function(e){return e===null?null:e.a.length===0?kp().er:new Dh(e)});function tl(){}S=tl.prototype=new w,S.constructor=tl;function nl(){}nl.prototype=S,S.bk=(function(e){return e===null?J():new Y(e)}),new E().i(tl,`scala.Option$`,{dn:1,a:1});var rl;function il(){return rl||=new tl,rl}function al(e,t){if(t===e)e.eC(Rf().f6(t));else for(var n=t.m();n.r();)e.cB(n.i());return e}function ol(){}S=ol.prototype=new w,S.constructor=ol;function sl(){}sl.prototype=S,S.t=(function(){return`<function0>`});function cl(){}S=cl.prototype=new w,S.constructor=cl;function ll(){}ll.prototype=S,S.t=(function(){return`<function1>`});function ul(){}S=ul.prototype=new w,S.constructor=ul;function dl(){}dl.prototype=S,S.t=(function(){return`<function2>`});function fl(){}S=fl.prototype=new w,S.constructor=fl;function pl(){}pl.prototype=S,S.t=(function(){return`<function3>`});function ml(e){this.bR=!1,this.bR=e}S=ml.prototype=new w,S.constructor=ml;function hl(){}hl.prototype=S,S.t=(function(){return``+this.bR}),new E().i(ml,`scala.runtime.BooleanRef`,{en:1,a:1});function gl(e){this.bd=0,this.bd=e}S=gl.prototype=new w,S.constructor=gl;function _l(){}_l.prototype=S,S.t=(function(){return``+this.bd}),new E().i(gl,`scala.runtime.IntRef`,{ep:1,a:1});function vl(){this.u=0,this.eA=0,this.fH=0,this.fG=0,bl=this,this.u=q(`Seq`),this.eA=q(`Map`),this.fH=q(`Set`),this.fG=this.hI($(),this.eA)}S=vl.prototype=new Ws,S.constructor=vl;function yl(){}yl.prototype=S,S.hs=(function(e){return Sm(e)?this.gP(e,this.u):e instanceof dh?this.gV(e,this.u):this.hf(e,this.u)}),new E().i(vl,`scala.util.hashing.MurmurHash3$`,{eP:1,eO:1});var bl;function z(){return bl||=new vl,bl}var xl=class extends Bc{};function Sl(){this.bY=null,this.cM=null,this.cN=null,wl=this,this.bY=Rf().eD(I().h(new(P.r()).C([]))),this.cM=new K((e=>{try{console.error(this.gE(e)+`
`+this.gH(e,`
`))}catch(e){var t=e instanceof Bc?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cN=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.T:t})),this.hl(this.cM)}S=Sl.prototype=new w,S.constructor=Sl;function Cl(){}Cl.prototype=S,S.gE=(function(e){try{var t=e.bs()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Wn(e).cG()+`: `+t}),S.gH=(function(e,t){try{return _s(hu().hO(e.gI()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.hl=(function(e){this.bY.cB(e)}),S.bw=(function(e){for(var t=this.bY.m();t.r();){var n=t.i();try{n.e(e)}catch(e){var r=e instanceof Bc?e:new X(e),i=this.cN;if(n===null?i===null:n.j(i))throw r instanceof X?r.T:r;console.warn(`Error processing an unhandled error callback:`),Ps().hx(0,new Td((e=>(()=>{throw e instanceof X?e.T:e}))(r)))}}}),new E().i(Sl,`com.raquo.airstream.core.AirstreamError$`,{b7:1,e8:1,e9:1});var wl;function Tl(){return wl||=new Sl,wl}function B(e,t,n){return new td(n.fY(t))}function El(e,t,n,r){return new lc(new K((e=>{(Pi(),new ki(t,null,null)).W(new K((e=>(t=>{n.e(t).Z(e)}))(e)))})),va())}function Dl(e,t,n){return new lc(new K((e=>{(Pi(),new ki(t,null,null)).W(new K((e=>(t=>{ka().bg(e,t,void 0)}))(e)))})),va())}function Ol(e,t){this.aN=null,this.c9=null,this.ca=null,this.aN=e,this.c9=(n=>{var r=e.dv.e(n);r.g()||t.e(r.x())}),this.ca=(()=>{var e=null;e=this;var t={};if(e===null)throw new $d;return t.capture=e.aN.dx,t.passive=e.aN.dw,t})()}S=Ol.prototype=new w,S.constructor=Ol;function kl(){}kl.prototype=S,S.Z=(function(e){this.g0(e,!1)}),S.g0=(function(e,t){if(Rd(e,this)===-1){var n=new K((t=>(D().fL(e.H,this),new pi(t.dy,new Td((()=>{var t=Rd(e,this);t!==-1&&(Ld(e,t),D().hn(e.H,this))})))))),r=t?Na().hJ(e,n):si().cL(e.a2,new K((t=>n.e(new pa(e,t)))),!1);return Id(e,this,t),r}else{var i=new K((e=>void 0));return si().fn(e.a2,new K((t=>{i.e(new pa(e,t))})),!1)}}),S.t=(function(){return`EventListener(`+this.aN.bG.bH+`)`});var Al=new E().i(Ol,`com.raquo.laminar.modifiers.EventListener`,{cc:1,S:1,cb:1});function jl(e,t,n){this.dB=null,this.dC=null,this.dA=null,this.dB=e,this.dC=t,this.dA=n}S=jl.prototype=new w,S.constructor=jl;function Ml(){}Ml.prototype=S,S.Z=(function(e){this.dA.fU(e,this.dB,this.dC)}),new E().i(jl,`com.raquo.laminar.modifiers.KeySetter`,{cd:1,S:1,cp:1});function Nl(e,t){if(this.cc=null,this.dH=null,this.dI=null,this.dH=t,yc(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().gR(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dI=e,this.h0()}S=Nl.prototype=new w,S.constructor=Nl;function Pl(){}Pl.prototype=S,S.bU=(function(){return this.cc}),S.eS=(function(e){this.cc=e}),S.h0=(function(){return this.cc.eB(),ka().bg(this,this.dH,void 0)}),S.aE=(function(){return this.dI}),new E().i(Nl,`com.raquo.laminar.nodes.RootNode`,{cu:1,a3:1,af:1});function Fl(e,t,n){this.ce=null,this.dL=null,this.dL=e,bc(this,e,!1)}S=Fl.prototype=new Sc,S.constructor=Fl;function Il(){}Il.prototype=S,S.cH=(function(){return this.dL}),new E().i(Fl,`com.raquo.laminar.tags.CustomHtmlTag`,{cx:1,ag:1,a4:1});function Ll(){this.b2=null,this.b1=null,this.b3=!1,this.dT=null,this.dU=!1,this.dR=null,this.dS=!1,this.dP=null,this.dQ=!1,this.dN=null,this.dO=!1,Dc(this,`wa-accordion`)}S=Ll.prototype=new kc,S.constructor=Ll;function Rl(){}Rl.prototype=S,S.gZ=(function(){return this.dU||=(this.dT=Ql(),!0),this.dT}),S.gO=(function(){return this.dS||=(this.dR=ou(),!0),this.dR}),S.gN=(function(){return this.dQ||=(this.dP=(G(),nc(new rc,`heading-level`,Hi().b0)),!0),this.dP}),S.fQ=(function(){return this.dO||=(this.dN=nu(),!0),this.dN}),S.cz=(function(){return Sn}),new E().i(Ll,`io.github.nguyenyou.webawesome.laminar.Accordion$`,{cC:1,a6:1,a5:1});var zl;function Bl(){return zl||=new Ll,zl}function Vl(){this.b2=null,this.b1=null,this.b3=!1,this.dZ=null,this.e0=!1,this.dX=null,this.dY=!1,this.dV=null,this.dW=!1,Dc(this,`wa-accordion-item`)}S=Vl.prototype=new kc,S.constructor=Vl;function Hl(){}Hl.prototype=S,S.a1=(function(){return this.e0||=(this.dZ=(G(),nc(new rc,`label`,Hi().b0)),!0),this.dZ}),S.f4=(function(){return this.dY||=(this.dX=(G(),nc(new rc,`expanded`,Hi().c5)),!0),this.dX}),S.ge=(function(){return this.dW||=(this.dV=(G(),nc(new rc,`disabled`,Hi().c5)),!0),this.dV}),S.cz=(function(){return gn}),new E().i(Vl,`io.github.nguyenyou.webawesome.laminar.AccordionItem$`,{cD:1,a6:1,a5:1});var Ul;function Wl(){return Ul||=new Vl,Ul}function Gl(){this.b2=null,this.b1=null,this.b3=!1,Dc(this,`wa-button`)}S=Gl.prototype=new kc,S.constructor=Gl;function Kl(){}Kl.prototype=S,S.cz=(function(){return Hn}),new E().i(Gl,`io.github.nguyenyou.webawesome.laminar.Button$`,{cF:1,a6:1,a5:1});var ql;function Jl(){return ql||=new Gl,ql}function Yl(){this.a8=null,this.aK=null,this.e3=null,this.e4=!1,nc(this,`mode`,new Tc)}S=Yl.prototype=new ic,S.constructor=Yl;function Xl(){}Xl.prototype=S,S.hz=(function(){return this.e4||=(this.e3=Ql().v(`single-collapsible`),!0),this.e3}),new E().i(Yl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$AccordionMode$`,{cG:1,Y:1,I:1});var Zl;function Ql(){return Zl||=new Yl,Zl}function $l(){this.a8=null,this.aK=null,this.e5=null,this.e6=!1,nc(this,`appearance`,new Tc)}S=$l.prototype=new ic,S.constructor=$l;function eu(){}eu.prototype=S,S.gu=(function(){return this.e6||=(this.e5=nu().v(`filled`),!0),this.e5}),new E().i($l,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance1$`,{cH:1,Y:1,I:1});var tu;function nu(){return tu||=new $l,tu}function ru(){this.a8=null,this.aK=null,this.e7=null,this.e8=!1,nc(this,`icon-placement`,new Tc)}S=ru.prototype=new ic,S.constructor=ru;function iu(){}iu.prototype=S,S.hA=(function(){return this.e8||=(this.e7=ou().v(`start`),!0),this.e7}),new E().i(ru,`io.github.nguyenyou.webawesome.laminar.CommonKeys$IconPlacement$`,{cI:1,Y:1,I:1});var au;function ou(){return au||=new ru,au}function su(e){if(e.ao.Z)return e.ao.Q().cG()+`[]`;for(var t=e.ao.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function cu(e){this.cf=null,this.ao=e}S=cu.prototype=new w,S.constructor=cu;function lu(){}lu.prototype=S,S.t=(function(){return(this.ao.Y?`interface `:this.ao.X?``:`class `)+this.ao.N}),S.cG=(function(){return this.cf===null&&(this.cf=su(this)),this.cf}),new E().i(cu,`java.lang.Class`,{cP:1,a:1,M:1});function V(e,t){return R(e,t,null,!0,!0),e}var H=class extends Bc{};new E().i(H,`java.lang.Exception`,{L:1,u:1,a:1});function uu(){}S=uu.prototype=new w,S.constructor=uu;function du(){}du.prototype=S;function fu(){this.fD=null,mu=this,this.fD=Ou()}S=fu.prototype=new el,S.constructor=fu;function pu(){}pu.prototype=S,new E().i(fu,`scala.Predef$`,{dr:1,dj:1,dk:1});var mu;function hu(){return mu||=new fu,mu}function gu(e,t){return e.bO=t,e}function _u(){this.bO=null}S=_u.prototype=new w,S.constructor=_u;function vu(){}vu.prototype=S,S.cF=(function(e){return this.bO.cE(e,gm())}),S.cD=(function(e){return this.bO.cE(e,gm())});function yu(e,t){return new wf(e).g6(t)}function bu(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().w:new Of(e,r,i)}function xu(e,t){for(var n=t.m();e.r()&&n.r();)if(!F().L(e.i(),n.i()))return!1;return e.r()===n.r()}function Su(){this.w=null,wu=this,this.w=new vf}S=Su.prototype=new w,S.constructor=Su;function Cu(){}Cu.prototype=S,new E().i(Su,`scala.collection.Iterator$`,{dK:1,a0:1,a:1});var wu;function U(){return wu||=new Su,wu}function Tu(){}S=Tu.prototype=new w,S.constructor=Tu;function Eu(){}Eu.prototype=S,new E().i(Tu,`scala.collection.immutable.Map$`,{dY:1,dP:1,a:1});var Du;function Ou(){return Du||=new Tu,Du}function ku(e){this.es=null,this.es=e}S=ku.prototype=new sl,S.constructor=ku;function Au(){}Au.prototype=S,S.aD=(function(){return(0,this.es)()}),new E().i(ku,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ej:1,b3:1,at:1});function W(e){this.et=null,this.et=e}S=W.prototype=new ll,S.constructor=W;function ju(){}ju.prototype=S,S.e=(function(e){return(0,this.et)(e)}),new E().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{ek:1,b4:1,e:1});var Mu=new E().i(0,`scala.runtime.Nothing$`,{eq:1,u:1,a:1});function Nu(){}S=Nu.prototype=new w,S.constructor=Nu;function Pu(){}Pu.prototype=S,S.gB=(function(e){return(t=>e.e(t))}),new E().i(Nu,`scala.scalajs.js.Any$`,{ev:1,ew:1,ex:1});var Fu;function Iu(){return Fu||=new Nu,Fu}function Lu(){}S=Lu.prototype=new sl,S.constructor=Lu;function Ru(){}Ru.prototype=S;function zu(){}S=zu.prototype=new ll,S.constructor=zu;function Bu(){}Bu.prototype=S;function Vu(){}S=Vu.prototype=new dl,S.constructor=Vu;function Hu(){}Hu.prototype=S;function Uu(){}S=Uu.prototype=new pl,S.constructor=Uu;function Wu(){}Wu.prototype=S;function Gu(e,t,n,r){if(this.cO=null,r===null)throw new $d;this.cO=void 0}S=Gu.prototype=new w,S.constructor=Gu;function Ku(){}Ku.prototype=S,S.t=(function(){return Tr(this)}),new E().i(Gu,`com.raquo.airstream.core.Observer$$anon$8`,{bb:1,bc:1,b8:1,b9:1});function qu(e){if(this.d0=null,this.d1=!1,this.fq=null,e===null)throw new $d;Gi(this)}S=qu.prototype=new w,S.constructor=qu;function Ju(){}Ju.prototype=S,S.hD=(function(){return this.d1||=(this.d0=new Cc(`svg`,!1),!0),this.d0}),new E().i(qu,`com.raquo.laminar.api.Laminar$svg$`,{bv:1,bW:1,bE:1,bG:1});function Yu(){this.s=null,Zu=this,this.s=new Dm}S=Yu.prototype=new w,S.constructor=Yu;function Xu(){}Xu.prototype=S,new E().i(Yu,`com.raquo.laminar.api.package$`,{by:1,ac:1,ad:1,ab:1});var Zu;function G(){return Zu||=new Yu,Zu}function Qu(e,t,n){return e.aL=t,e.aM=n,e}function $u(){this.aL=null,this.aM=null}S=$u.prototype=new ca,S.constructor=$u;function ed(){}ed.prototype=S,S.v=(function(e){return new jl(this,Jn(e),new Ad(((e,t,n)=>{D().fl(e,t,n)})))});function td(e){this.dK=null,this.cd=null,this.dK=J(),this.cd=D().g9(e)}S=td.prototype=new w,S.constructor=td;function nd(){}nd.prototype=S,S.fm=(function(e){this.dK=e}),S.fp=(function(e){}),S.Z=(function(e){ka().bg(e,this,void 0)}),S.hG=(function(){return this.cd.data}),S.aE=(function(){return this.cd}),new E().i(td,`com.raquo.laminar.nodes.TextNode`,{cw:1,a3:1,S:1,ae:1});function rd(){}S=rd.prototype=new w,S.constructor=rd;function id(){}id.prototype=S;function ad(e,t){return e===t}function od(e){return e?1231:1237}var sd=new E().i(0,`java.lang.Boolean`,{cN:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function cd(e){return e}function ld(e,t){return t instanceof C&&e===t.c}var ud=new E().i(0,`java.lang.Character`,{am:1,a:1,Q:1,M:1},(e=>e instanceof C)),dd=class extends H{};function fd(){this.p=null,this.p=``}S=fd.prototype=new w,S.constructor=fd;function pd(){}pd.prototype=S,S.fR=(function(e){var t=zc().h2(e,0,e.a.length);return this.p=``+this.p+t,this}),S.t=(function(){return this.p}),S.k=(function(){return this.p.length}),S.eQ=(function(e){return this.p.charCodeAt(e)}),new E().i(fd,`java.lang.StringBuilder`,{d2:1,a7:1,ak:1,a:1});function md(){}S=md.prototype=new du,S.constructor=md;function hd(){}hd.prototype=S;function gd(){}S=gd.prototype=new w,S.constructor=gd;function _d(){}_d.prototype=S,S.t=(function(){return`<function1>`}),S.fV=(function(e){throw new uf(e)}),S.e=(function(e){this.fV(e)}),new E().i(gd,`scala.PartialFunction$$anon$1`,{dq:1,g:1,e:1,a:1});function vd(){}S=vd.prototype=new w,S.constructor=vd;function yd(){}yd.prototype=S,S.m=(function(){return this}),S.bT=(function(e){return this.bx(e,-1)}),S.bx=(function(e,t){return bu(this,e,t)}),S.t=(function(){return`<iterator>`}),S.bf=(function(e,t,n,r){return vs(this,e,t,n,r)}),S.A=(function(){return-1});function bd(e,t){return e.bP=t,e}function xd(){this.bP=null}S=xd.prototype=new w,S.constructor=xd;function Sd(){}Sd.prototype=S,S.eD=(function(e){return this.bP.cD(e)}),S.f6=(function(e){return this.bP.cF(e)}),S.cF=(function(e){return this.f6(e)}),S.cD=(function(e){return this.eD(e)});function Cd(e){return e.aW(0)===0}function wd(e,t){var n=e.A();if(n!==-1)var r=t.A(),i=r!==-1&&n!==r;else var i=!1;return i?!1:xu(e.m(),t)}function Td(e){this.ew=null,this.ew=e}S=Td.prototype=new Ru,S.constructor=Td;function Ed(){}Ed.prototype=S,S.aD=(function(){return(0,this.ew)()}),new E().i(Td,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eC:1,eB:1,b3:1,at:1});function K(e){this.ex=null,this.ex=e}S=K.prototype=new Bu,S.constructor=K;function Dd(){}Dd.prototype=S,S.e=(function(e){return(0,this.ex)(e)}),new E().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eE:1,eD:1,b4:1,e:1});function Od(e){this.ey=null,this.ey=e}S=Od.prototype=new Hu,S.constructor=Od;function kd(){}kd.prototype=S,S.cC=(function(e,t){return(0,this.ey)(e,t)}),new E().i(Od,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eG:1,eF:1,el:1,dh:1});function Ad(e){this.ez=null,this.ez=e}S=Ad.prototype=new Wu,S.constructor=Ad;function jd(){}jd.prototype=S,S.fU=(function(e,t,n){return(0,this.ez)(e,t,n)}),new E().i(Ad,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eI:1,eH:1,em:1,di:1});function Md(e,t){this.bF=null,this.c6=null,this.bF=e,this.c6=t}S=Md.prototype=new w,S.constructor=Md;function Nd(){}Nd.prototype=S,S.Z=(function(e){var t=this.c6;t!==void 0&&t.fd(e,this.bF),ka().bg(e,this.bF,void 0)}),S.hK=(function(e){return new Md(this.bF,e.fT(this.c6))});var Pd=new E().i(Md,`com.raquo.laminar.inserters.StaticChildInserter`,{c0:1,S:1,bY:1,c2:1,bX:1});function Fd(e){e.cb=new gi(new Td((()=>{e.a2.eB()})),new Td((()=>{e.a2.ga()}))),e.as=void 0}function Id(e,t,n){if(e.as===void 0)e.as=xi().a4(I().h(new(Al.r()).C([t])));else if(n){var r=e.as;if(r===void 0){var i;throw new nf(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.as;if(a===void 0){var o;throw new nf(`undefined.get`)}else var o=a;o.push(t)}}function Ld(e,t){var n=e.as;n!==void 0&&n.splice(t,1)}function Rd(e,t){var n=e.as;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Kn(a,t))?r=!0:i=1+i|0}return r?i:-1}function zd(e,t){Vd(e,e.bK,t)&&Hd(e,t)}function Bd(e,t){var n=e.bK;e.bK=t,Vd(e,n,t)||Hd(e,t)}function Vd(e,t,n){var r=!t.g()&&!t.x().bU().G.g(),i=!n.g()&&!n.x().bU().G.g();return r&&!i}function Hd(e,t){Ud(e,t.g()?J():new Y(t.x().bU()))}function Ud(e,t){if(t.g())e.cb.g4();else{var n=t.x();e.cb.hu(n)}}function Wd(){}S=Wd.prototype=new id,S.constructor=Wd;function Gd(){}Gd.prototype=S;var Kd=class extends dd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Kd,`java.lang.ArithmeticException`,{cM:1,R:1,L:1,u:1,a:1});var qd=new E().i(0,`java.lang.Byte`,{cO:1,T:1,a:1,Q:1,M:1},(e=>rr(e))),Jd=class extends dd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Jd,`java.lang.IllegalArgumentException`,{cS:1,R:1,L:1,u:1,a:1});function Yd(e,t){return R(e,t,null,!0,!0),e}var Xd=class extends dd{};new E().i(Xd,`java.lang.IndexOutOfBoundsException`,{ao:1,R:1,L:1,u:1,a:1});function Zd(){}S=Zd.prototype=new id,S.constructor=Zd;function Qd(){}Qd.prototype=S,new E().i(Zd,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cV:1,aj:1,ah:1,al:1,ai:1});var $d=class extends dd{constructor(){super(),R(this,null,null,!0,!0)}};new E().i($d,`java.lang.NullPointerException`,{cW:1,R:1,L:1,u:1,a:1});var ef=new E().i(0,`java.lang.Short`,{cX:1,T:1,a:1,Q:1,M:1},(e=>ir(e))),tf=class extends dd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(tf,`java.lang.UnsupportedOperationException`,{d5:1,R:1,L:1,u:1,a:1});var nf=class extends dd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(nf,`java.util.NoSuchElementException`,{d9:1,R:1,L:1,u:1,a:1});function rf(){}S=rf.prototype=new hd,S.constructor=rf;function af(){}af.prototype=S,S.e=(function(e){return e}),S.t=(function(){return`generalized constraint`}),new E().i(rf,`scala.$less$colon$less$$anon$1`,{de:1,db:1,dc:1,e:1,a:1});function of(e){return e.ck||=(e.cl=e.bN===null?`null`:lf(e),!0),e.cl}function sf(e){return e.ck?e.cl:of(e)}function cf(e){var t=e.bN;return`of class `+Gn(t)}function lf(e){try{return e.bN+` (`+cf(e)+`)`}catch{return`an instance `+cf(e)}}var uf=class extends dd{constructor(e){super(),this.cl=null,this.bN=null,this.ck=!1,this.bN=e,R(this,null,null,!0,!0)}bs(){return sf(this)}};new E().i(uf,`scala.MatchError`,{dl:1,R:1,L:1,u:1,a:1});function df(){}S=df.prototype=new w,S.constructor=df;function ff(){}ff.prototype=S,S.g=(function(){return this===J()}),S.A=(function(){return this.g()?0:1}),S.m=(function(){return this.g()?U().w:new bf(this.x())});function pf(e){this.b7=0,this.el=0,this.ek=null,this.ek=e,this.b7=0,this.el=e.al()}S=pf.prototype=new yd,S.constructor=pf;function mf(){}mf.prototype=S,S.r=(function(){return this.b7<this.el}),S.i=(function(){var e=this.ek.am(this.b7);return this.b7=1+this.b7|0,e}),new E().i(pf,`scala.Product$$anon$1`,{ds:1,r:1,s:1,b:1,c:1});function hf(e){this.bO=null,gu(this,e)}S=hf.prototype=new vu,S.constructor=hf;function gf(){}gf.prototype=S,new E().i(hf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dG:1,dF:1,a0:1,a:1,a8:1});function _f(e){return _s(e,e.aU()+`(`,`, `,`)`)}function vf(){}S=vf.prototype=new yd,S.constructor=vf;function yf(){}yf.prototype=S,S.r=(function(){return!1}),S.h4=(function(){throw new nf(`next on empty iterator`)}),S.A=(function(){return 0}),S.bx=(function(e,t){return this}),S.i=(function(){this.h4()}),new E().i(vf,`scala.collection.Iterator$$anon$19`,{dL:1,r:1,s:1,b:1,c:1});function bf(e){this.b9=!1,this.ep=null,this.ep=e,this.b9=!1}S=bf.prototype=new yd,S.constructor=bf;function xf(){}xf.prototype=S,S.r=(function(){return!this.b9}),S.i=(function(){return this.b9?U().w.i():(this.b9=!0,this.ep)}),S.bx=(function(e,t){return this.b9||e>0||t===0?U().w:this}),new E().i(bf,`scala.collection.Iterator$$anon$20`,{dM:1,r:1,s:1,b:1,c:1});function Sf(e){for(;;){if(e.D instanceof wf){var t=e.D;e.D=t.D,e.aa=t.aa,t.P!==null&&(e.O===null&&(e.O=t.O),t.O.ba=e.P,e.P=t.P);continue}return}}function Cf(e){for(;;)if(e.P===null)return e.D=null,e.O=null,!1;else{if(e.D=e.P.gM(),e.O===e.P&&(e.O=e.O.ba),e.P=e.P.ba,Sf(e),e.aa)return!0;if(e.D!==null&&e.D.r())return e.aa=!0,!0}}function wf(e){this.D=null,this.P=null,this.O=null,this.aa=!1,this.D=e,this.P=null,this.O=null,this.aa=!1}S=wf.prototype=new yd,S.constructor=wf;function Tf(){}Tf.prototype=S,S.r=(function(){return this.aa?!0:this.D===null?!1:this.D.r()?(this.aa=!0,!0):Cf(this)}),S.i=(function(){return this.r()?(this.aa=!1,this.D.i()):U().w.i()}),S.g6=(function(e){var t=new ys(e,null);return this.P===null?(this.P=t,this.O=t):(this.O.ba=t,this.O=t),this.D===null&&(this.D=U().w),this}),new E().i(wf,`scala.collection.Iterator$ConcatIterator`,{az:1,r:1,s:1,b:1,c:1});function Ef(e){for(;e.a3>0;)e.ab.r()?(e.ab.i(),e.a3=-1+e.a3|0):e.a3=0}function Df(e,t){if(e.J<0)return-1;var n=e.J-t|0;return n<0?0:n}function Of(e,t,n){this.ab=null,this.J=0,this.a3=0,this.ab=e,this.J=n,this.a3=t}S=Of.prototype=new yd,S.constructor=Of;function kf(){}kf.prototype=S,S.A=(function(){var e=this.ab.A();if(e<0)return-1;var t=e-this.a3|0,n=t<0?0:t;if(this.J<0)return n;var r=this.J;return r<n?r:n}),S.r=(function(){return Ef(this),this.J!==0&&this.ab.r()}),S.i=(function(){return Ef(this),this.J>0?(this.J=-1+this.J|0,this.ab.i()):this.J<0?this.ab.i():U().w.i()}),S.bx=(function(e,t){var n=e>0?e:0;if(t<0)var r=Df(this,n);else if(t<=n)var r=0;else if(this.J<0)var r=t-n|0;else var i=Df(this,n),a=t-n|0,r=i<a?i:a;var o=this.a3+n|0;return r===0?U().w:o<0?(this.a3=2147483647,this.J=0,yu(this,new ku((()=>new Of(this.ab,-2147483647+o|0,r))))):(this.a3=o,this.J=r,this)}),new E().i(Of,`scala.collection.Iterator$SliceIterator`,{dO:1,r:1,s:1,b:1,c:1});function Af(e,t){if(t<0)throw Yd(new Xd,``+t);var n=e.gi(t);if(n.g())throw Yd(new Xd,``+t);return n.X()}function jf(e,t){return Cm(t)?Mf(e,e,t):wd(e,t)}function Mf(e,t,n){for(;;)if(t===n)return!0;else if(!t.g()&&!n.g()&&F().L(t.X(),n.X())){var r=t.M(),i=n.M();t=r,n=i}else return t.g()&&n.g()}function Nf(e){this.bc=null,this.bc=e}S=Nf.prototype=new yd,S.constructor=Nf;function Pf(){}Pf.prototype=S,S.r=(function(){return!this.bc.g()}),S.i=(function(){var e=this.bc.X();return this.bc=this.bc.M(),e}),new E().i(Nf,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dT:1,r:1,s:1,b:1,c:1});function Ff(){this.bP=null,bd(this,Wf())}S=Ff.prototype=new Sd,S.constructor=Ff;function If(){}If.prototype=S,new E().i(Ff,`scala.collection.mutable.Buffer$`,{e3:1,dQ:1,a8:1,a0:1,a:1});var Lf;function Rf(){return Lf||=new Ff,Lf}function zf(e){this.be=0,this.eu=0,this.ev=null,this.ev=e,this.be=0,this.eu=e.al()}S=zf.prototype=new yd,S.constructor=zf;function Bf(){}Bf.prototype=S,S.r=(function(){return this.be<this.eu}),S.i=(function(){var e=this.ev.am(this.be);return this.be=1+this.be|0,e}),new E().i(zf,`scala.runtime.ScalaRunTime$$anon$1`,{et:1,r:1,s:1,b:1,c:1});function Vf(){}S=Vf.prototype=new w,S.constructor=Vf;function Hf(){}Hf.prototype=S,S.cD=(function(e){return this.f7(e)}),S.f7=(function(e){return al(Uh(new Wh),e).fj()}),S.cF=(function(e){return this.f7(e)}),new E().i(Vf,`scala.scalajs.js.WrappedArray$`,{ez:1,dU:1,a8:1,a0:1,a:1});var Uf;function Wf(){return Uf||=new Vf,Uf}var Gf=class e extends xl{constructor(e,t){super(),this.aG=null,this.aF=0,this.aG=e,this.aF=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aY(){return new pf(this)}o(){var e=-889275714;return e=L().b(e,q(`TransactionDepthExceeded`)),e=L().b(e,L().y(this.aG)),e=L().b(e,this.aF),L().l(e,2)}j(t){return this===t?!0:t instanceof e&&this.aF===t.aF?this.aG===t.aG:!1}al(){return 2}an(){return`TransactionDepthExceeded`}am(e){if(e===0)return this.aG;if(e===1)return this.aF;throw Yd(new Xd,``+e)}t(){return`TransactionDepthExceeded: `+this.aG+`; maxDepth: `+this.aF}};new E().i(Gf,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aa:1,b6:1,u:1,a:1,d:1,U:1});function Kf(e){this.aL=null,this.aM=null,this.dp=null,this.dq=!1,Qu(this,e,$())}S=Kf.prototype=new ed,S.constructor=Kf;function qf(){}qf.prototype=S,S.hM=(function(){return this.dq||=(this.dp=this.v(`wrap`),!0),this.dp}),new E().i(Kf,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bM:1,Z:1,I:1,W:1,X:1,bQ:1});function Jf(e,t){this.bK=null,this.a2=null,this.cb=null,this.as=null,this.dG=null,this.H=null,this.dG=e,this.H=t,this.bK=J(),yc(this),Fd(this)}S=Jf.prototype=new w,S.constructor=Jf;function Yf(){}Yf.prototype=S,S.Z=(function(e){ka().bg(e,this,void 0)}),S.bU=(function(){return this.a2}),S.eS=(function(e){this.a2=e}),S.fp=(function(e){zd(this,e)}),S.fm=(function(e){Bd(this,e)}),S.t=(function(){return`ReactiveHtmlElement(`+(this.H===null?`tag=`+this.dG.cH():this.H.outerHTML)+`)`}),S.aE=(function(){return this.H});var Xf=new E().i(Jf,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ct:1,a3:1,S:1,ae:1,af:1,cr:1});function Zf(e,t){return Object.is(e,t)}function Qf(e){return no().cI(e)}var $f=new E().i(0,`java.lang.Double`,{an:1,T:1,a:1,Q:1,M:1,V:1},(e=>typeof e==`number`)),ep=new E().i(0,`java.lang.Float`,{cQ:1,T:1,a:1,Q:1,M:1,V:1},(e=>or(e))),tp=new E().i(0,`java.lang.Integer`,{cT:1,T:1,a:1,Q:1,M:1,V:1},(e=>ar(e)));function np(e,t){return t instanceof M&&e.c===t.c&&e.d===t.d}function rp(e){return e.c^e.d}var ip=new E().i(0,`java.lang.Long`,{ap:1,T:1,a:1,Q:1,M:1,V:1},(e=>e instanceof M));function q(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ap(e,t){return e===t}var op=new E().i(0,`java.lang.String`,{d0:1,a:1,Q:1,a7:1,M:1,V:1},(e=>typeof e==`string`)),sp=class extends Xd{constructor(){super(),R(this,null,null,!0,!0)}};new E().i(sp,`java.lang.StringIndexOutOfBoundsException`,{d3:1,ao:1,R:1,L:1,u:1,a:1});function cp(){}S=cp.prototype=new ff,S.constructor=cp;function lp(){}lp.prototype=S,S.gD=(function(){throw new nf(`None.get`)}),S.an=(function(){return`None`}),S.al=(function(){return 0}),S.am=(function(e){return L().bt(e)}),S.aY=(function(){return new zf(this)}),S.o=(function(){return 2433880}),S.t=(function(){return`None`}),S.x=(function(){this.gD()}),new E().i(cp,`scala.None$`,{dm:1,au:1,b:1,U:1,d:1,a:1});var up;function J(){return up||=new cp,up}function Y(e){this.b8=null,this.b8=e}S=Y.prototype=new ff,S.constructor=Y;function dp(){}dp.prototype=S,S.x=(function(){return this.b8}),S.an=(function(){return`Some`}),S.al=(function(){return 1}),S.am=(function(e){return e===0?this.b8:L().bt(e)}),S.aY=(function(){return new zf(this)}),S.o=(function(){return z().fi(this,-889275714,!1)}),S.t=(function(){return I().fK(this)}),S.j=(function(e){return this===e||e instanceof Y&&F().L(this.b8,e.b8)}),new E().i(Y,`scala.Some`,{av:1,au:1,b:1,U:1,d:1,a:1});function fp(){}S=fp.prototype=new w,S.constructor=fp;function pp(){}pp.prototype=S,S.aU=(function(){return this.aZ()}),S.W=(function(e){gs(this,e)}),S.bf=(function(e,t,n,r){return vs(this,e,t,n,r)}),S.A=(function(){return-1});function mp(e,t){return e.I=t,e.f=0,e.C=Jo().aV(e.I),e}function hp(){this.I=null,this.f=0,this.C=0}S=hp.prototype=new yd,S.constructor=hp;function gp(){}gp.prototype=S,S.A=(function(){return this.C-this.f|0}),S.r=(function(){return this.f<this.C}),S.i=(function(){this.f>=Jo().aV(this.I)&&U().w.i();var e=I().aT(this.I,this.f);return this.f=1+this.f|0,e}),S.bT=(function(e){if(e>0){var t=this.f+e|0;if(t<0)var n=this.C;else var r=this.C,n=r<t?r:t;this.f=n}return this}),new E().i(hp,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function _p(e,t){return t<0?0:t>e.S?e.S:t}function vp(e){this.eo=null,this.a9=0,this.S=0,this.eo=e,this.a9=0,this.S=e.k()}S=vp.prototype=new yd,S.constructor=vp;function yp(){}yp.prototype=S,S.A=(function(){return this.S}),S.r=(function(){return this.S>0}),S.i=(function(){if(this.S>0){var e=this.eo.n(this.a9);return this.a9=1+this.a9|0,this.S=-1+this.S|0,e}else return U().w.i()}),S.bT=(function(e){if(e>0){this.a9=this.a9+e|0;var t=this.S-e|0;this.S=t<0?0:t}return this}),S.bx=(function(e,t){var n=_p(this,e),r=_p(this,t)-n|0;return this.S=r<0?0:r,this.a9=this.a9+n|0,this}),new E().i(vp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dJ:1,r:1,s:1,b:1,c:1,a:1});function bp(e){return e.cv||=(e.cw=new rh(new T(0)),!0),e.cw}function xp(e){return e.cv?e.cw:bp(e)}function Sp(){this.cw=null,this.fE=null,this.cv=!1,wp=this,this.fE=new hf(this)}S=Sp.prototype=new w,S.constructor=Sp;function Cp(){}Cp.prototype=S,S.gz=(function(e,t){return e instanceof Bm?e:this.fo(Jc().f5(e,t))}),S.fo=(function(e){if(e===null)return null;if(e instanceof T)return new rh(e);if(e instanceof gr)return new $m(e);if(e instanceof yr)return new Ym(e);if(e instanceof _r)return new th(e);if(e instanceof vr)return new Zm(e);if(e instanceof pr)return new qm(e);if(e instanceof mr)return new Gm(e);if(e instanceof hr)return new ah(e);if(e instanceof fr)return new Um(e);if(Ho(e,1))return new sh(e);throw new uf(e)}),S.cE=(function(e,t){return this.gz(e,t)}),new E().i(Sp,`scala.collection.immutable.ArraySeq$`,{dX:1,aB:1,ax:1,aw:1,ay:1,a:1});var wp;function Tp(){return wp||=new Sp,wp}function Ep(){this.fF=null,this.er=null,Op=this,this.fF=new hf(this),this.er=new Dh(new T(0))}S=Ep.prototype=new w,S.constructor=Ep;function Dp(){}Dp.prototype=S,S.gA=(function(e,t){return this.gW(Jc().f5(e,t))}),S.gW=(function(e){if(e===null)return null;if(e instanceof T)return new Dh(e);if(e instanceof gr)return new Ch(e);if(e instanceof yr)return new yh(e);if(e instanceof _r)return new Th(e);if(e instanceof vr)return new xh(e);if(e instanceof pr)return new _h(e);if(e instanceof mr)return new hh(e);if(e instanceof hr)return new kh(e);if(e instanceof fr)return new ph(e);if(Ho(e,1))return new jh(e);throw new uf(e)}),S.cE=(function(e,t){return this.gA(e,t)}),new E().i(Ep,`scala.collection.mutable.ArraySeq$`,{e1:1,aB:1,ax:1,aw:1,ay:1,a:1});var Op;function kp(){return Op||=new Ep,Op}function Ap(e){this.aL=null,this.aM=null,this.dk=null,this.dl=!1,Qu(this,e,$())}S=Ap.prototype=new ed,S.constructor=Ap;function jp(){}jp.prototype=S,S.gv=(function(){return this.dl||=(this.dk=this.v(`flex`),!0),this.dk}),new E().i(Ap,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bK:1,Z:1,I:1,W:1,X:1,bR:1,bO:1});function Mp(e){this.aL=null,this.aM=null,this.dm=null,this.dn=!1,Qu(this,e,$())}S=Mp.prototype=new ed,S.constructor=Mp;function Np(){}Np.prototype=S,S.g3=(function(){return this.dn||=(this.dm=this.v(`center`),!0),this.dm}),new E().i(Mp,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bL:1,Z:1,I:1,W:1,X:1,bS:1,bP:1});function Pp(e){this.aL=null,this.aM=null,this.dr=null,this.ds=!1,Qu(this,e,$())}S=Pp.prototype=new ed,S.constructor=Pp;function Fp(){}Fp.prototype=S,S.hj=(function(){return this.ds||=(this.dr=Zs(this),!0),this.dr}),new E().i(Pp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bN:1,Z:1,I:1,W:1,X:1,bT:1,bU:1});function Ip(){}S=Ip.prototype=new Gd,S.constructor=Ip;function Lp(){}Lp.prototype=S;function Rp(e){this.I=null,this.f=0,this.C=0,this.cm=null,this.cm=e,mp(this,e)}S=Rp.prototype=new gp,S.constructor=Rp;function zp(){}zp.prototype=S,S.h5=(function(){this.f>=this.cm.a.length&&U().w.i();var e=this.cm.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.h5()}),new E().i(Rp,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dw:1,N:1,r:1,s:1,b:1,c:1,a:1});function Bp(e){this.I=null,this.f=0,this.C=0,this.cn=null,this.cn=e,mp(this,e)}S=Bp.prototype=new gp,S.constructor=Bp;function Vp(){}Vp.prototype=S,S.h6=(function(){this.f>=this.cn.a.length&&U().w.i();var e=this.cn.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return sr(this.h6())}),new E().i(Bp,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dx:1,N:1,r:1,s:1,b:1,c:1,a:1});function Hp(e){this.I=null,this.f=0,this.C=0,this.co=null,this.co=e,mp(this,e)}S=Hp.prototype=new gp,S.constructor=Hp;function Up(){}Up.prototype=S,S.h7=(function(){this.f>=this.co.a.length&&U().w.i();var e=this.co.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.h7()}),new E().i(Hp,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dy:1,N:1,r:1,s:1,b:1,c:1,a:1});function Wp(e){this.I=null,this.f=0,this.C=0,this.cp=null,this.cp=e,mp(this,e)}S=Wp.prototype=new gp,S.constructor=Wp;function Gp(){}Gp.prototype=S,S.h8=(function(){this.f>=this.cp.a.length&&U().w.i();var e=this.cp.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.h8()}),new E().i(Wp,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dz:1,N:1,r:1,s:1,b:1,c:1,a:1});function Kp(e){this.I=null,this.f=0,this.C=0,this.cq=null,this.cq=e,mp(this,e)}S=Kp.prototype=new gp,S.constructor=Kp;function qp(){}qp.prototype=S,S.h9=(function(){this.f>=this.cq.a.length&&U().w.i();var e=this.cq.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.h9()}),new E().i(Kp,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dA:1,N:1,r:1,s:1,b:1,c:1,a:1});function Jp(e){this.I=null,this.f=0,this.C=0,this.cr=null,this.cr=e,mp(this,e)}S=Jp.prototype=new gp,S.constructor=Jp;function Yp(){}Yp.prototype=S,S.ha=(function(){this.f>=this.cr.a.length&&U().w.i();var e=this.cr.a[this.f],t=e.c,n=e.d;return this.f=1+this.f|0,new M(t,n)}),S.i=(function(){return this.ha()}),new E().i(Jp,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dB:1,N:1,r:1,s:1,b:1,c:1,a:1});function Xp(e){this.I=null,this.f=0,this.C=0,this.cs=null,this.cs=e,mp(this,e)}S=Xp.prototype=new gp,S.constructor=Xp;function Zp(){}Zp.prototype=S,S.hb=(function(){this.f>=this.cs.a.length&&U().w.i();var e=this.cs.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.hb()}),new E().i(Xp,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dC:1,N:1,r:1,s:1,b:1,c:1,a:1});function Qp(e){this.I=null,this.f=0,this.C=0,this.en=null,this.en=e,mp(this,e)}S=Qp.prototype=new gp,S.constructor=Qp;function $p(){}$p.prototype=S,S.hc=(function(){this.f>=this.en.a.length&&U().w.i(),this.f=1+this.f|0}),S.i=(function(){this.hc()}),new E().i(Qp,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dD:1,N:1,r:1,s:1,b:1,c:1,a:1});function em(e){this.I=null,this.f=0,this.C=0,this.ct=null,this.ct=e,mp(this,e)}S=em.prototype=new gp,S.constructor=em;function tm(){}tm.prototype=S,S.hd=(function(){this.f>=this.ct.a.length&&U().w.i();var e=this.ct.a[this.f];return this.f=1+this.f|0,e}),S.i=(function(){return this.hd()}),new E().i(em,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dE:1,N:1,r:1,s:1,b:1,c:1,a:1});function nm(e){return e.aU()+`(<not computed>)`}function rm(){}S=rm.prototype=new w,S.constructor=rm;function im(){}im.prototype=S;var X=class e extends dd{constructor(e){super(),this.T=null,this.T=e,R(this,null,null,!0,!0)}bs(){return Jn(this.T)}an(){return`JavaScriptException`}al(){return 1}am(e){return e===0?this.T:L().bt(e)}aY(){return new zf(this)}o(){return z().fi(this,-889275714,!1)}j(t){return this===t||t instanceof e&&F().L(this.T,t.T)}};new E().i(X,`scala.scalajs.js.JavaScriptException`,{b5:1,R:1,L:1,u:1,a:1,U:1,d:1});function am(e,t){typeof console<`u`&&(e.ea&&console.error?console.error(t):console.log(t))}function om(e){this.ea=!1,this.b5=null,this.ea=e,new Zd,this.b5=``}S=om.prototype=new Lp,S.constructor=om;function sm(){}sm.prototype=S,S.gS=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b5=``+this.b5+t,t=``;else{var r=this.b5,i=t;am(this,``+r+i.substring(0,n)),this.b5=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(om,`java.lang.JSConsoleBasedPrintStream`,{cU:1,cL:1,cK:1,aj:1,ah:1,al:1,ai:1,ak:1});function cm(e,t,n){for(;;)if(t<=0||n.g())return n;else{var r=-1+t|0,i=n.M();t=r,n=i}}function lm(){this.cx=null}S=lm.prototype=new im,S.constructor=lm;function um(){}um.prototype=S,S.t=(function(){return this.cx}),S.j=(function(e){return this===e}),S.o=(function(){return nr(this)});function dm(){}S=dm.prototype=new pp,S.constructor=dm;function fm(){}fm.prototype=S,S.t=(function(){return nm(this)});function pm(){this.cx=null,this.cx=`Any`}S=pm.prototype=new um,S.constructor=pm;function mm(){}mm.prototype=S,S.hr=(function(){return br.l()}),S.h3=(function(e){return new T(e)}),new E().i(pm,`scala.reflect.ManifestFactory$AnyManifest$`,{ef:1,eh:1,eg:1,ee:1,ed:1,ec:1,ei:1,a:1,d:1});var hm;function gm(){return hm||=new pm,hm}function Z(e,t){return e===t?!0:_m(t)&&t.eP(e)?e.cK(t):!1}function _m(e){return!!(e&&e.$classData&&e.$classData.n.f)}function vm(){}S=vm.prototype=new pp,S.constructor=vm;function ym(){}ym.prototype=S,S.eP=(function(e){return!0}),S.j=(function(e){return Z(this,e)}),S.o=(function(){return z().hs(this)}),S.t=(function(){return _f(this)}),S.g=(function(){return Cd(this)}),S.cK=(function(e){return wd(this,e)});function bm(){}S=bm.prototype=new fm,S.constructor=bm;function xm(){}xm.prototype=S;function Sm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Cm(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function wm(e,t){return e.bb=t,e}function Tm(){this.bb=null}S=Tm.prototype=new xm,S.constructor=Tm;function Em(){}Em.prototype=S,S.n=(function(e){return this.bb.n(e)}),S.k=(function(){return this.bb.k()}),S.g=(function(){return this.bb.g()});function Dm(){this.dg=null,this.dh=!1,this.d4=null,this.d5=!1,this.d8=null,this.d9=!1,this.de=null,this.df=!1,this.d2=null,this.d3=!1,this.d6=null,this.d7=!1,this.da=null,this.db=!1,this.dc=null,this.dd=!1,this.fs=null,this.fr=null,this.di=null,this.dj=!1,Ui(this),Li(this),Fi(this),Ii(this)}S=Dm.prototype=new w,S.constructor=Dm;function Om(){}Om.prototype=S,S.hB=(function(){return this.dh||=(this.dg=bc(new xc,`strong`,!1),!0),this.dg}),S.g1=(function(){return this.d5||=(this.d4=bc(new xc,`br`,!0),!0),this.d4}),S.eT=(function(){return this.d9||=(this.d8=bc(new xc,`div`,!1),!0),this.d8}),S.fb=(function(){return this.df||=(this.de=new ec(`click`),!0),this.de}),S.fO=(function(){return this.d3||=(this.d2=new Mp(`align-items`),!0),this.d2}),S.gf=(function(){return this.d7||=(this.d6=new Ap(`display`),!0),this.d6}),S.gw=(function(){return this.db||=(this.da=new Kf(`flex-wrap`),!0),this.da}),S.gC=(function(){return this.dd||=(this.dc=new Pp(`gap`),!0),this.dc}),S.hC=(function(){return this.dj||=(this.di=new qu(this),!0),this.di}),new E().i(Dm,`com.raquo.laminar.api.package$$anon$1`,{bz:1,bV:1,bD:1,bI:1,bH:1,bJ:1,bF:1,bx:1,bt:1,bw:1,ac:1,ad:1,ab:1,bu:1});function km(e){this.bb=null,wm(this,e)}S=km.prototype=new Em,S.constructor=km;function Am(){}Am.prototype=S,S.m=(function(){return new vp(this)}),S.aZ=(function(){return`IndexedSeqView`}),S.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.A=(function(){return this.k()}),new E().i(km,`scala.collection.IndexedSeqView$Id`,{dI:1,dS:1,dt:1,du:1,h:1,i:1,b:1,k:1,c:1,j:1,dV:1,a:1,dR:1,l:1,dH:1,o:1});function jm(){}S=jm.prototype=new ym,S.constructor=jm;function Mm(){}Mm.prototype=S;function Nm(e,t){return!Fm(t)||e.k()===t.k()}function Pm(e,t){if(Fm(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.eE(),o=t.eE(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().L(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().bT(i),m=t.m().bT(i);r&&p.r();)r=F().L(p.i(),m.i())}return r}else return wd(e,t)}function Fm(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Im(){}S=Im.prototype=new ym,S.constructor=Im;function Lm(){}Lm.prototype=S;function Rm(){}S=Rm.prototype=new Lm,S.constructor=Rm;function zm(){}zm.prototype=S,S.eC=(function(e){return al(this,e)});function Bm(){}S=Bm.prototype=new Mm,S.constructor=Bm;function Vm(){}Vm.prototype=S,S.eP=(function(e){return Nm(this,e)}),S.cK=(function(e){return Pm(this,e)}),S.aZ=(function(){return`IndexedSeq`}),S.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.A=(function(){return this.k()}),S.gX=(function(e){for(var t=new T(this.k()),n=0;n<t.a.length;)t.a[n]=e.e(this.n(n)),n=1+n|0;return Tp().fo(t)}),S.aU=(function(){return`ArraySeq`}),S.eE=(function(){return 2147483647}),S.f9=(function(e){return this.gX(e)});function Q(){}S=Q.prototype=new Lm,S.constructor=Q;function Hm(){}Hm.prototype=S,S.aZ=(function(){return`IndexedSeq`}),S.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.A=(function(){return this.k()}),S.aU=(function(){return`ArraySeq`}),S.j=(function(e){return e instanceof Q&&Jo().aV(this.U())!==Jo().aV(e.U())?!1:Z(this,e)});function Um(e){this.at=null,this.at=e}S=Um.prototype=new Vm,S.constructor=Um;function Wm(){}Wm.prototype=S,S.k=(function(){return this.at.a.length}),S.o=(function(){var e=z();return e.eO(this.at,e.u)}),S.j=(function(e){return e instanceof Um?j().f2(this.at,e.at):Z(this,e)}),S.m=(function(){return new em(this.at)}),S.br=(function(e){return this.at.a[e]}),S.e=(function(e){return this.br(e|0)}),S.n=(function(e){return this.br(e)}),new E().i(Um,`scala.collection.immutable.ArraySeq$ofBoolean`,{aE:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Gm(e){this.au=null,this.au=e}S=Gm.prototype=new Vm,S.constructor=Gm;function Km(){}Km.prototype=S,S.k=(function(){return this.au.a.length}),S.bh=(function(e){return this.au.a[e]}),S.o=(function(){var e=z();return e.eG(this.au,e.u)}),S.j=(function(e){return e instanceof Gm?j().eV(this.au,e.au):Z(this,e)}),S.m=(function(){return new Rp(this.au)}),S.e=(function(e){return this.bh(e|0)}),S.n=(function(e){return this.bh(e)}),new E().i(Gm,`scala.collection.immutable.ArraySeq$ofByte`,{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function qm(e){this.ac=null,this.ac=e}S=qm.prototype=new Vm,S.constructor=qm;function Jm(){}Jm.prototype=S,S.k=(function(){return this.ac.a.length}),S.bi=(function(e){return this.ac.a[e]}),S.o=(function(){var e=z();return e.eH(this.ac,e.u)}),S.j=(function(e){return e instanceof qm?j().eW(this.ac,e.ac):Z(this,e)}),S.m=(function(){return new Bp(this.ac)}),S.bf=(function(e,t,n,r){return new _h(this.ac).bf(e,t,n,r)}),S.e=(function(e){return sr(this.bi(e|0))}),S.n=(function(e){return sr(this.bi(e))}),new E().i(qm,`scala.collection.immutable.ArraySeq$ofChar`,{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Ym(e){this.av=null,this.av=e}S=Ym.prototype=new Vm,S.constructor=Ym;function Xm(){}Xm.prototype=S,S.k=(function(){return this.av.a.length}),S.o=(function(){var e=z();return e.eI(this.av,e.u)}),S.j=(function(e){return e instanceof Ym?j().eX(this.av,e.av):Z(this,e)}),S.m=(function(){return new Hp(this.av)}),S.bm=(function(e){return this.av.a[e]}),S.e=(function(e){return this.bm(e|0)}),S.n=(function(e){return this.bm(e)}),new E().i(Ym,`scala.collection.immutable.ArraySeq$ofDouble`,{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Zm(e){this.aw=null,this.aw=e}S=Zm.prototype=new Vm,S.constructor=Zm;function Qm(){}Qm.prototype=S,S.k=(function(){return this.aw.a.length}),S.o=(function(){var e=z();return e.eJ(this.aw,e.u)}),S.j=(function(e){return e instanceof Zm?j().eY(this.aw,e.aw):Z(this,e)}),S.m=(function(){return new Wp(this.aw)}),S.bn=(function(e){return this.aw.a[e]}),S.e=(function(e){return this.bn(e|0)}),S.n=(function(e){return this.bn(e)}),new E().i(Zm,`scala.collection.immutable.ArraySeq$ofFloat`,{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function $m(e){this.ax=null,this.ax=e}S=$m.prototype=new Vm,S.constructor=$m;function eh(){}eh.prototype=S,S.k=(function(){return this.ax.a.length}),S.o=(function(){var e=z();return e.eK(this.ax,e.u)}),S.j=(function(e){return e instanceof $m?j().eZ(this.ax,e.ax):Z(this,e)}),S.m=(function(){return new Kp(this.ax)}),S.bo=(function(e){return this.ax.a[e]}),S.e=(function(e){return this.bo(e|0)}),S.n=(function(e){return this.bo(e)}),new E().i($m,`scala.collection.immutable.ArraySeq$ofInt`,{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function th(e){this.ay=null,this.ay=e}S=th.prototype=new Vm,S.constructor=th;function nh(){}nh.prototype=S,S.k=(function(){return this.ay.a.length}),S.o=(function(){var e=z();return e.eL(this.ay,e.u)}),S.j=(function(e){return e instanceof th?j().f0(this.ay,e.ay):Z(this,e)}),S.m=(function(){return new Jp(this.ay)}),S.bp=(function(e){return this.ay.a[e]}),S.e=(function(e){return this.bp(e|0)}),S.n=(function(e){return this.bp(e)}),new E().i(th,`scala.collection.immutable.ArraySeq$ofLong`,{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function rh(e){this.az=null,this.az=e}S=rh.prototype=new Vm,S.constructor=rh;function ih(){}ih.prototype=S,S.k=(function(){return this.az.a.length}),S.n=(function(e){return this.az.a[e]}),S.o=(function(){var e=z();return e.eF(this.az,e.u)}),S.j=(function(e){return e instanceof rh?Jc().f3(this.az,e.az):Z(this,e)}),S.m=(function(){return mp(new hp,this.az)}),S.e=(function(e){return this.n(e|0)}),new E().i(rh,`scala.collection.immutable.ArraySeq$ofRef`,{aL:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function ah(e){this.aA=null,this.aA=e}S=ah.prototype=new Vm,S.constructor=ah;function oh(){}oh.prototype=S,S.k=(function(){return this.aA.a.length}),S.bj=(function(e){return this.aA.a[e]}),S.o=(function(){var e=z();return e.eM(this.aA,e.u)}),S.j=(function(e){return e instanceof ah?j().f1(this.aA,e.aA):Z(this,e)}),S.m=(function(){return new Xp(this.aA)}),S.e=(function(e){return this.bj(e|0)}),S.n=(function(e){return this.bj(e)}),new E().i(ah,`scala.collection.immutable.ArraySeq$ofShort`,{aM:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function sh(e){this.aS=null,this.aS=e}S=sh.prototype=new Vm,S.constructor=sh;function ch(){}ch.prototype=S,S.k=(function(){return this.aS.a.length}),S.o=(function(){var e=z();return e.eN(this.aS,e.u)}),S.j=(function(e){return e instanceof sh?this.aS.a.length===e.aS.a.length:Z(this,e)}),S.m=(function(){return new Qp(this.aS)}),S.bq=(function(e){}),S.e=(function(e){this.bq(e|0)}),S.n=(function(e){this.bq(e)}),new E().i(sh,`scala.collection.immutable.ArraySeq$ofUnit`,{aN:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function lh(e,t,n,r){for(;;)if(t===r)return n.g()?0:1;else if(n.g())return-1;else{var i=1+t|0,a=n.M();t=i,n=a}}function uh(e,t,n){for(;;)if(t===n)return!0;else{var r=t.g(),i=n.g();if(!(r||i)&&F().L(t.X(),n.X())){var a=t.M(),o=n.M();t=a,n=o}else return r&&i}}function dh(){}S=dh.prototype=new Mm,S.constructor=dh;function fh(){}fh.prototype=S,S.m=(function(){return new Nf(this)}),S.aZ=(function(){return`LinearSeq`}),S.n=(function(e){return Af(this,e)}),S.cK=(function(e){return jf(this,e)}),S.g=(function(){return this===$()}),S.gY=(function(e){if(this===$())return $();for(var t=new Nh(e.e(this.X()),$()),n=t,r=this.M();r!==$();){var i=new Nh(e.e(r.X()),$());n.bQ=i,n=i,r=r.M()}return t}),S.W=(function(e){for(var t=this;!t.g();)e.e(t.X()),t=t.M()}),S.k=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.M();return t}),S.aW=(function(e){return e<0?1:lh(this,0,this,e)}),S.aU=(function(){return`List`}),S.j=(function(e){return e instanceof dh?uh(this,this,e):Z(this,e)}),S.e=(function(e){return Af(this,e|0)}),S.gi=(function(e){return cm(this,e,this)}),S.f9=(function(e){return this.gY(e)});function ph(e){this.ad=null,this.ad=e}S=ph.prototype=new Hm,S.constructor=ph;function mh(){}mh.prototype=S,S.k=(function(){return this.ad.a.length}),S.o=(function(){var e=z();return e.eO(this.ad,e.u)}),S.j=(function(e){return e instanceof ph?j().f2(this.ad,e.ad):Q.prototype.j.call(this,e)}),S.m=(function(){return new em(this.ad)}),S.br=(function(e){return this.ad.a[e]}),S.e=(function(e){return this.br(e|0)}),S.n=(function(e){return this.br(e)}),S.U=(function(){return this.ad}),new E().i(ph,`scala.collection.mutable.ArraySeq$ofBoolean`,{aQ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function hh(e){this.ae=null,this.ae=e}S=hh.prototype=new Hm,S.constructor=hh;function gh(){}gh.prototype=S,S.k=(function(){return this.ae.a.length}),S.bh=(function(e){return this.ae.a[e]}),S.o=(function(){var e=z();return e.eG(this.ae,e.u)}),S.j=(function(e){return e instanceof hh?j().eV(this.ae,e.ae):Q.prototype.j.call(this,e)}),S.m=(function(){return new Rp(this.ae)}),S.e=(function(e){return this.bh(e|0)}),S.n=(function(e){return this.bh(e)}),S.U=(function(){return this.ae}),new E().i(hh,`scala.collection.mutable.ArraySeq$ofByte`,{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function _h(e){this.Q=null,this.Q=e}S=_h.prototype=new Hm,S.constructor=_h;function vh(){}vh.prototype=S,S.k=(function(){return this.Q.a.length}),S.bi=(function(e){return this.Q.a[e]}),S.o=(function(){var e=z();return e.eH(this.Q,e.u)}),S.j=(function(e){return e instanceof _h?j().eW(this.Q,e.Q):Q.prototype.j.call(this,e)}),S.m=(function(){return new Bp(this.Q)}),S.bf=(function(e,t,n,r){var i=e.K;t.length!==0&&(i.p=``+i.p+t);var a=this.Q.a.length;if(a!==0)if(n===``)i.fR(this.Q);else{i.k();var o=this.Q.a[0],s=``+Qn(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.Q.a[c],u=``+Qn(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),S.e=(function(e){return sr(this.bi(e|0))}),S.n=(function(e){return sr(this.bi(e))}),S.U=(function(){return this.Q}),new E().i(_h,`scala.collection.mutable.ArraySeq$ofChar`,{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function yh(e){this.af=null,this.af=e}S=yh.prototype=new Hm,S.constructor=yh;function bh(){}bh.prototype=S,S.k=(function(){return this.af.a.length}),S.o=(function(){var e=z();return e.eI(this.af,e.u)}),S.j=(function(e){return e instanceof yh?j().eX(this.af,e.af):Q.prototype.j.call(this,e)}),S.m=(function(){return new Hp(this.af)}),S.bm=(function(e){return this.af.a[e]}),S.e=(function(e){return this.bm(e|0)}),S.n=(function(e){return this.bm(e)}),S.U=(function(){return this.af}),new E().i(yh,`scala.collection.mutable.ArraySeq$ofDouble`,{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function xh(e){this.ag=null,this.ag=e}S=xh.prototype=new Hm,S.constructor=xh;function Sh(){}Sh.prototype=S,S.k=(function(){return this.ag.a.length}),S.o=(function(){var e=z();return e.eJ(this.ag,e.u)}),S.j=(function(e){return e instanceof xh?j().eY(this.ag,e.ag):Q.prototype.j.call(this,e)}),S.m=(function(){return new Wp(this.ag)}),S.bn=(function(e){return this.ag.a[e]}),S.e=(function(e){return this.bn(e|0)}),S.n=(function(e){return this.bn(e)}),S.U=(function(){return this.ag}),new E().i(xh,`scala.collection.mutable.ArraySeq$ofFloat`,{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ch(e){this.ah=null,this.ah=e}S=Ch.prototype=new Hm,S.constructor=Ch;function wh(){}wh.prototype=S,S.k=(function(){return this.ah.a.length}),S.o=(function(){var e=z();return e.eK(this.ah,e.u)}),S.j=(function(e){return e instanceof Ch?j().eZ(this.ah,e.ah):Q.prototype.j.call(this,e)}),S.m=(function(){return new Kp(this.ah)}),S.bo=(function(e){return this.ah.a[e]}),S.e=(function(e){return this.bo(e|0)}),S.n=(function(e){return this.bo(e)}),S.U=(function(){return this.ah}),new E().i(Ch,`scala.collection.mutable.ArraySeq$ofInt`,{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Th(e){this.ai=null,this.ai=e}S=Th.prototype=new Hm,S.constructor=Th;function Eh(){}Eh.prototype=S,S.k=(function(){return this.ai.a.length}),S.o=(function(){var e=z();return e.eL(this.ai,e.u)}),S.j=(function(e){return e instanceof Th?j().f0(this.ai,e.ai):Q.prototype.j.call(this,e)}),S.m=(function(){return new Jp(this.ai)}),S.bp=(function(e){return this.ai.a[e]}),S.e=(function(e){return this.bp(e|0)}),S.n=(function(e){return this.bp(e)}),S.U=(function(){return this.ai}),new E().i(Th,`scala.collection.mutable.ArraySeq$ofLong`,{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Dh(e){this.aj=null,this.aj=e}S=Dh.prototype=new Hm,S.constructor=Dh;function Oh(){}Oh.prototype=S,S.k=(function(){return this.aj.a.length}),S.n=(function(e){return this.aj.a[e]}),S.o=(function(){var e=z();return e.eF(this.aj,e.u)}),S.j=(function(e){return e instanceof Dh?Jc().f3(this.aj,e.aj):Q.prototype.j.call(this,e)}),S.m=(function(){return mp(new hp,this.aj)}),S.e=(function(e){return this.n(e|0)}),S.U=(function(){return this.aj}),new E().i(Dh,`scala.collection.mutable.ArraySeq$ofRef`,{aX:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function kh(e){this.ak=null,this.ak=e}S=kh.prototype=new Hm,S.constructor=kh;function Ah(){}Ah.prototype=S,S.k=(function(){return this.ak.a.length}),S.bj=(function(e){return this.ak.a[e]}),S.o=(function(){var e=z();return e.eM(this.ak,e.u)}),S.j=(function(e){return e instanceof kh?j().f1(this.ak,e.ak):Q.prototype.j.call(this,e)}),S.m=(function(){return new Xp(this.ak)}),S.e=(function(e){return this.bj(e|0)}),S.n=(function(e){return this.bj(e)}),S.U=(function(){return this.ak}),new E().i(kh,`scala.collection.mutable.ArraySeq$ofShort`,{aY:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function jh(e){this.aB=null,this.aB=e}S=jh.prototype=new Hm,S.constructor=jh;function Mh(){}Mh.prototype=S,S.k=(function(){return this.aB.a.length}),S.o=(function(){var e=z();return e.eN(this.aB,e.u)}),S.j=(function(e){return e instanceof jh?this.aB.a.length===e.aB.a.length:Q.prototype.j.call(this,e)}),S.m=(function(){return new Qp(this.aB)}),S.bq=(function(e){}),S.e=(function(e){this.bq(e|0)}),S.n=(function(e){this.bq(e)}),S.U=(function(){return this.aB}),new E().i(jh,`scala.collection.mutable.ArraySeq$ofUnit`,{aZ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Nh(e,t){this.cu=null,this.bQ=null,this.cu=e,this.bQ=t}S=Nh.prototype=new fh,S.constructor=Nh;function Ph(){}Ph.prototype=S,S.X=(function(){return this.cu}),S.an=(function(){return`::`}),S.al=(function(){return 2}),S.am=(function(e){switch(e){case 0:return this.cu;case 1:return this.bQ;default:return L().bt(e)}}),S.aY=(function(){return new zf(this)}),S.M=(function(){return this.bQ}),new E().i(Nh,`scala.collection.immutable.$colon$colon`,{dW:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,a1:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});function Fh(){}S=Fh.prototype=new fh,S.constructor=Fh;function Ih(){}Ih.prototype=S,S.gL=(function(){throw new nf(`head of empty list`)}),S.hF=(function(){throw new tf(`tail of empty list`)}),S.A=(function(){return 0}),S.m=(function(){return U().w}),S.an=(function(){return`Nil`}),S.al=(function(){return 0}),S.am=(function(e){return L().bt(e)}),S.aY=(function(){return new zf(this)}),S.M=(function(){this.hF()}),S.X=(function(){this.gL()}),new E().i(Fh,`scala.collection.immutable.Nil$`,{dZ:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,a1:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});var Lh;function $(){return Lh||=new Fh,Lh}function Rh(e,t){return e.K=t,e}function zh(e){return Rh(e,new fd),e}function Bh(){this.K=null}S=Bh.prototype=new Lm,S.constructor=Bh;function Vh(){}Vh.prototype=S,S.aZ=(function(){return`IndexedSeq`}),S.m=(function(){return new vp(new km(this))}),S.aW=(function(e){var t=this.K.k();return t===e?0:t<e?-1:1}),S.eC=(function(e){return al(this,e)}),S.k=(function(){return this.K.k()}),S.A=(function(){return this.K.k()}),S.fM=(function(e){var t=this.K,n=``+Qn(e);return t.p+=n,this}),S.t=(function(){return this.K.p}),S.g=(function(){return this.K.k()===0}),S.fj=(function(){return this.K.p}),S.cB=(function(e){return this.fM(cr(e))}),S.e=(function(e){var t=e|0;return sr(this.K.eQ(t))}),S.n=(function(e){return sr(this.K.eQ(e))}),new E().i(Bh,`scala.collection.mutable.StringBuilder`,{e7:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,e5:1,b0:1,b2:1,b1:1,D:1,n:1,o:1,E:1,a7:1,a:1});function Hh(e,t){return e.aC=t,e}function Uh(e){return Hh(e,[]),e}function Wh(){this.aC=null}S=Wh.prototype=new zm,S.constructor=Wh;function Gh(){}Gh.prototype=S,S.aZ=(function(){return`IndexedSeq`}),S.m=(function(){return new vp(new km(this))}),S.aW=(function(e){var t=this.aC.length|0;return t===e?0:t<e?-1:1}),S.n=(function(e){return this.aC[e]}),S.k=(function(){return this.aC.length|0}),S.A=(function(){return this.aC.length|0}),S.aU=(function(){return`WrappedArray`}),S.fj=(function(){return this}),S.cB=(function(e){return this.aC.push(e),this}),S.e=(function(e){var t=e|0;return this.aC[t]}),new E().i(Wh,`scala.scalajs.js.WrappedArray`,{ey:1,e0:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,e2:1,b2:1,b1:1,e6:1,q:1,p:1,D:1,n:1,o:1,E:1,e4:1,b0:1,a:1}),Un=new M(0,0),Cr.z=Un,Ja(new(op.r()).C([]));