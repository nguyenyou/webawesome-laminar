var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=e=>{throw TypeError(e)},o=(e,t,n,a)=>{for(var o=a>1?void 0:a?i(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(a?c(t,n,o):c(o))||o);return a&&o&&r(t,n,o),o},s=(e,t,n)=>t.has(e)||a(`Cannot `+n),c=(e,t,n)=>(s(e,t,`read from private field`),n?n.call(e):t.get(e)),l=(e,t,n)=>t.has(e)?a(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),u=(e,t,n,r)=>(s(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const d=globalThis,f=d.ShadowRoot&&(d.ShadyCSS===void 0||d.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,p=Symbol(),m=new WeakMap;var h=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(f&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=m.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&m.set(t,e))}return e}toString(){return this.cssText}};const g=e=>new h(typeof e==`string`?e:e+``,void 0,p),_=(e,t)=>{if(f)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=d.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},v=f?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return g(t)})(e):e,{is:y,defineProperty:ee,getOwnPropertyDescriptor:te,getOwnPropertyNames:ne,getOwnPropertySymbols:b,getPrototypeOf:re}=Object,x=globalThis,ie=x.trustedTypes,ae=ie?ie.emptyScript:``,oe=x.reactiveElementPolyfillSupport,se=(e,t)=>e,ce={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},le=(e,t)=>!y(e,t),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),x.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ee(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=te(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,t=[...ne(e),...b(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(v(e))}else e!==void 0&&t.push(v(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:`open`},de[se(`elementProperties`)]=new Map,de[se(`finalized`)]=new Map,oe?.({ReactiveElement:de}),(x.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const fe=globalThis,pe=fe.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,ge=`lit$${Math.random().toFixed(9).slice(2)}$`,_e=`?`+ge,ve=`<${_e}>`,ye=document,be=()=>ye.createComment(``),xe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Se=Array.isArray,Ce=e=>Se(e)||typeof e?.[Symbol.iterator]==`function`,we=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,De=/>/g,Oe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ke=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,Me=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),S=Symbol.for(`lit-nothing`),Pe=new WeakMap,Fe=ye.createTreeWalker(ye,129);function Ie(e,t){if(!Se(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}const Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Te;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Te?c[1]===`!--`?o=Ee:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Oe):(je.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Oe):o=De:o===Oe?c[0]===`>`?(o=i??Te,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Oe:c[3]===`"`?Ae:ke):o===Ae||o===ke?o=Oe:o===Ee||o===De?o=Te:(o=Oe,i=void 0);let d=o===Oe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Te?n+ve:l>=0?(r.push(s),n.slice(0,l)+he+n.slice(l)+ge+d):n+ge+(l===-2?t:d)}return[Ie(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),Fe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(ge),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ue:r[1]===`?`?We:r[1]===`@`?Ge:He}),i.removeAttribute(e)}else e.startsWith(ge)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(je.test(i.tagName)){let e=i.textContent.split(ge),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],be()),Fe.nextNode(),c.push({type:2,index:++a});i.append(e[t],be())}}}else if(i.nodeType===8)if(i.data===_e)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ge,e+1))!==-1;)c.push({type:7,index:a}),e+=ge.length-1}a++}}static createElement(e,t){let n=ye.createElement(`template`);return n.innerHTML=e,n}};function ze(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=xe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ze(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ye).importNode(t,!0);Fe.currentNode=r;let i=Fe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Fe.nextNode(),a++)}return Fe.currentNode=ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),xe(e)?e===S||e==null||e===``?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(Ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new Re(e)),t}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(be()),this.O(be()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ze(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ze(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!xe(s)||s!==this._$AH[o],s===S?e=S:e!==S&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ue=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},We=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Ge=class extends He{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??S)===Ne)return;let n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}};const qe={M:he,P:ge,A:_e,C:1,L:Le,R:Be,D:Ce,V:ze,I:Ve,H:He,N:We,U:Ge,B:Ue,F:Ke},Je=fe.litHtmlPolyfillSupport;Je?.(Re,Ve),(fe.litHtmlVersions??=[]).push(`3.3.1`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ve(t.insertBefore(be(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis;var Ze=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const $e=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},et={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},tt=(e=et,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function C(e){return(t,n)=>typeof n==`object`?tt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function nt(e){return C({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const rt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return rt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return rt(n,r,{get(){return a(this)}})}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var at=`:host {
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
`,ot,st=class extends Ze{constructor(){super(),l(this,ot,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[at,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?g(e):e)}attributeChangedCallback(e,t,n){c(this,ot)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),u(this,ot,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ot=new WeakMap,o([C()],st.prototype,`dir`,2),o([C()],st.prototype,`lang`,2),o([C({type:Boolean,reflect:!0,attribute:`did-ssr`})],st.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ct=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},lt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),ut=class extends st{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ct))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[lt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};ut.formAssociated=!0,o([C({reflect:!0})],ut.prototype,`name`,2),o([C({type:Boolean})],ut.prototype,`disabled`,2),o([C({state:!0,attribute:!1})],ut.prototype,`valueHasChanged`,2),o([C({state:!0,attribute:!1})],ut.prototype,`hasInteracted`,2),o([C({attribute:`custom-error`,reflect:!0})],ut.prototype,`customError`,2),o([C({attribute:!1,state:!0,type:Object})],ut.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var dt=`@layer wa-utilities {
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
`,ft=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},pt=`@layer wa-utilities {
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
`;const mt=new Set,ht=new Map;let gt,_t=`ltr`,vt=`en`;const yt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(yt){let e=new MutationObserver(xt);_t=document.documentElement.dir||`ltr`,vt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function bt(...e){e.map(e=>{let t=e.$code.toLowerCase();ht.has(t)?ht.set(t,Object.assign(Object.assign({},ht.get(t)),e)):ht.set(t,e),gt||=e}),xt()}function xt(){yt&&(_t=document.documentElement.dir||`ltr`,vt=document.documentElement.lang||navigator.language),[...mt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var St=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){mt.add(this.host)}hostDisconnected(){mt.delete(this.host)}dir(){return`${this.host.dir||_t}`.toLowerCase()}lang(){return`${this.host.lang||vt}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:ht.get(`${n}-${r}`),secondary:ht.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&gt&&gt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(gt&&gt[e])i=gt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ct={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};bt(Ct);var wt=Ct,Tt=class extends St{};bt(wt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Et(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=e=>(...t)=>({_$litDirective$:e,values:t});var kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const At=Ot(class extends kt{constructor(e){if(super(e),e.type!==Dt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),jt=e=>e??S,Mt=Symbol.for(``),Nt=e=>{if(e?.r===Mt)return e?._$litStatic$},Pt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Mt}),Ft=new Map,It=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Nt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ft.get(e))===void 0&&(o.raw=o,Ft.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Lt=`@layer wa-component {
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
`,w=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new ft(this,`[default]`,`start`,`end`),this.localize=new Tt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,n()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new ct)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Pt`a`:Pt`button`;return It`
      <${t}
        part="base"
        class=${At({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${jt(e?void 0:this.disabled)}
        type=${jt(e?void 0:this.type)}
        title=${this.title}
        name=${jt(e?void 0:this.name)}
        value=${jt(e?void 0:this.value)}
        href=${jt(e?this.href:void 0)}
        target=${jt(e?this.target:void 0)}
        download=${jt(e?this.download:void 0)}
        rel=${jt(e&&this.rel?this.rel:void 0)}
        role=${jt(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?It`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?It`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};w.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},w.css=[Lt,dt,pt],o([it(`.button`)],w.prototype,`button`,2),o([it(`slot:not([name])`)],w.prototype,`labelSlot`,2),o([nt()],w.prototype,`invalid`,2),o([nt()],w.prototype,`isIconButton`,2),o([C()],w.prototype,`title`,2),o([C({reflect:!0})],w.prototype,`variant`,2),o([C({reflect:!0})],w.prototype,`appearance`,2),o([C({reflect:!0})],w.prototype,`size`,2),o([C({attribute:`with-caret`,type:Boolean,reflect:!0})],w.prototype,`withCaret`,2),o([C({type:Boolean})],w.prototype,`disabled`,2),o([C({type:Boolean,reflect:!0})],w.prototype,`loading`,2),o([C({type:Boolean,reflect:!0})],w.prototype,`pill`,2),o([C()],w.prototype,`type`,2),o([C({reflect:!0})],w.prototype,`name`,2),o([C({reflect:!0})],w.prototype,`value`,2),o([C({reflect:!0})],w.prototype,`href`,2),o([C()],w.prototype,`target`,2),o([C()],w.prototype,`rel`,2),o([C()],w.prototype,`download`,2),o([C({reflect:!0})],w.prototype,`form`,2),o([C({attribute:`formaction`})],w.prototype,`formAction`,2),o([C({attribute:`formenctype`})],w.prototype,`formEnctype`,2),o([C({attribute:`formmethod`})],w.prototype,`formMethod`,2),o([C({attribute:`formnovalidate`,type:Boolean})],w.prototype,`formNoValidate`,2),o([C({attribute:`formtarget`})],w.prototype,`formTarget`,2),o([Et(`disabled`,{waitUntilFirstUpdate:!0})],w.prototype,`handleDisabledChange`,1),w=o([$e(`wa-button`)],w);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Rt=`:host {
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
`,zt=class extends st{constructor(){super(...arguments),this.localize=new Tt(this)}render(){return Me`
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
    `}};zt.css=Rt,zt=o([$e(`wa-spinner`)],zt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Bt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Vt=``;function Ht(e){Vt=e}function Ut(){if(!Vt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Ht(e.getAttribute(`data-fa-kit-code`)||``)}return Vt}var Wt=`7.0.1`;function Gt(e,t,n){let r=Ut(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${Wt}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Wt}/svgs/${a}/${e}.svg`)}var Kt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Gt(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function qt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Jt={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},Yt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Jt[n][e]??Jt.regular[e]??Jt.regular[`circle-question`];return r?qt(r):``}},Xt=`classic`,Zt=[Kt,Yt],Qt=[];function $t(e){Qt.push(e)}function en(e){Qt=Qt.filter(t=>t!==e)}function tn(e){return Zt.find(t=>t.name===e)}function nn(){return Xt}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:rn}=qe,an=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var on=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},sn=`:host {
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
`,cn=Symbol(),ln=Symbol(),un,dn=new Map,T=class extends st{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?cn:ln}catch{return ln}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return cn;un||=new DOMParser;let r=un.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):cn}catch{return cn}}}connectedCallback(){super.connectedCallback(),$t(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),en(this)}getIconSource(){let e=tn(this.library),t=this.family||nn();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?tn(this.library):void 0;if(!e){this.svg=null;return}let r=dn.get(e);r||(r=this.resolveIcon(e,n),dn.set(e,r));let i=await r;if(i===ln&&dn.delete(e),e===this.getIconSource().url){if(an(i)){this.svg=i;return}switch(i){case ln:case cn:this.svg=null,this.dispatchEvent(new on);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Bt)}}}updated(e){super.updated(e);let t=tn(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};T.css=sn,o([nt()],T.prototype,`svg`,2),o([C({reflect:!0})],T.prototype,`name`,2),o([C({reflect:!0})],T.prototype,`family`,2),o([C({reflect:!0})],T.prototype,`variant`,2),o([C({attribute:`auto-width`,type:Boolean,reflect:!0})],T.prototype,`autoWidth`,2),o([C({attribute:`swap-opacity`,type:Boolean,reflect:!0})],T.prototype,`swapOpacity`,2),o([C()],T.prototype,`src`,2),o([C()],T.prototype,`label`,2),o([C({reflect:!0})],T.prototype,`library`,2),o([Et(`label`)],T.prototype,`handleLabelChange`,1),o([Et([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],T.prototype,`setIcon`,1),T=o([$e(`wa-icon`)],T);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var fn=t({default:()=>w}),pn=`:host {
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
`,mn=class extends st{constructor(){super(...arguments),this.orientation=`horizontal`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}};mn.css=pn,o([C({reflect:!0})],mn.prototype,`orientation`,2),o([Et(`orientation`)],mn.prototype,`handleVerticalChange`,1),mn=o([$e(`wa-divider`)],mn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var hn=t({default:()=>mn});function gn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var _n=`:host {
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
    100ms background-color ease,
    100ms color ease;
}

@media (hover: hover) {
  :host(:hover:not(:state(disabled))) {
    background-color: var(--wa-color-neutral-fill-normal);
  }
}

:host(:focus-visible) {
  z-index: 1;
  outline: var(--wa-focus-ring);
  background-color: var(--wa-color-neutral-fill-normal);
}

:host(:state(disabled)) {
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
    animation: submenu-show var(--show-duration, 50ms) ease;
  }

  &.hide {
    animation: submenu-show var(--show-duration, 50ms) ease reverse;
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
`,E=class extends st{constructor(){super(...arguments),this.hasSlotController=new ft(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`medium`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))}}connectedCallback(){super.connectedCallback(),this.addEventListener(`mouseenter`,this.handleMouseEnter.bind(this)),this.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener(`mouseenter`,this.handleMouseEnter),this.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}firstUpdated(){this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?this.setAttribute(`role`,`menuitemcheckbox`):this.setAttribute(`role`,`menuitem`)),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.notifyParentOfOpening(),this.submenuElement.showPopover(),this.submenuElement.hidden=!1,this.submenuElement.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await gn(this.submenuElement,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus())},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){!this.hasSubmenu||!this.submenuElement||(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),this.submenuElement.hidden||(await gn(this.submenuElement,`hide`),this.submenuElement.hidden=!0,this.submenuElement.removeAttribute(`data-visible`),this.submenuElement.hidePopover()))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}handleMouseEnter(){this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}render(){return Me`
      ${this.type===`checkbox`?Me`
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

      ${this.hasSubmenu?Me`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?Me`
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
    `}};E.css=_n,o([it(`#submenu`)],E.prototype,`submenuElement`,2),o([C({type:Boolean})],E.prototype,`active`,2),o([C({reflect:!0})],E.prototype,`variant`,2),o([C({reflect:!0})],E.prototype,`size`,2),o([C({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],E.prototype,`checkboxAdjacent`,2),o([C({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],E.prototype,`submenuAdjacent`,2),o([C()],E.prototype,`value`,2),o([C({reflect:!0})],E.prototype,`type`,2),o([C({type:Boolean})],E.prototype,`checked`,2),o([C({type:Boolean,reflect:!0})],E.prototype,`disabled`,2),o([C({type:Boolean,reflect:!0})],E.prototype,`submenuOpen`,2),o([nt()],E.prototype,`hasSubmenu`,2),E=o([$e(`wa-dropdown-item`)],E);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var vn=t({default:()=>E}),yn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},bn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},xn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Sn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}};let Cn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function wn(e=``){return`${e}${Cn()}`}const Tn=Math.min,D=Math.max,En=Math.round,Dn=Math.floor,On=e=>({x:e,y:e}),kn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},An={start:`end`,end:`start`};function jn(e,t,n){return D(e,Tn(t,n))}function Mn(e,t){return typeof e==`function`?e(t):e}function Nn(e){return e.split(`-`)[0]}function Pn(e){return e.split(`-`)[1]}function Fn(e){return e===`x`?`y`:`x`}function In(e){return e===`y`?`height`:`width`}const Ln=new Set([`top`,`bottom`]);function Rn(e){return Ln.has(Nn(e))?`y`:`x`}function zn(e){return Fn(Rn(e))}function Bn(e,t,n){n===void 0&&(n=!1);let r=Pn(e),i=zn(e),a=In(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Yn(o)),[o,Yn(o)]}function Vn(e){let t=Yn(e);return[Hn(e),t,Hn(t)]}function Hn(e){return e.replace(/start|end/g,e=>An[e])}const Un=[`left`,`right`],Wn=[`right`,`left`],Gn=[`top`,`bottom`],Kn=[`bottom`,`top`];function qn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Wn:Un:t?Un:Wn;case`left`:case`right`:return t?Gn:Kn;default:return[]}}function Jn(e,t,n,r){let i=Pn(e),a=qn(Nn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Hn)))),a}function Yn(e){return e.replace(/left|right|bottom|top/g,e=>kn[e])}function Xn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Zn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Xn(e)}function Qn(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function $n(e,t,n){let{reference:r,floating:i}=e,a=Rn(t),o=zn(t),s=In(o),c=Nn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Pn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const er=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=$n(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=$n(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function tr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Mn(t,e),p=Zn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Qn(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Qn(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const nr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Mn(e,t)||{};if(l==null)return{};let d=Zn(u),f={x:n,y:r},p=zn(i),m=In(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),b=ne?ne[y]:0;(!b||!await(o.isElement==null?void 0:o.isElement(ne)))&&(b=s.floating[y]||a.floating[m]);let re=ee/2-te/2,x=b/2-h[m]/2-1,ie=Tn(d[_],x),ae=Tn(d[v],x),oe=ie,se=b-h[m]-ae,ce=b/2-h[m]/2+re,le=jn(oe,ce,se),ue=!c.arrow&&Pn(i)!=null&&ce!==le&&a.reference[m]/2-(ce<oe?ie:ae)-h[m]/2<0,de=ue?ce<oe?ce-oe:ce-se:0;return{[p]:f[p]+de,data:{[p]:le,centerOffset:ce-le-de,...ue&&{alignmentOffset:de}},reset:ue}}}),rr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Mn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Nn(r),_=Rn(o),v=Nn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[Yn(o)]:Vn(o)),te=p!==`none`;!d&&te&&ee.push(...Jn(o,m,p,y));let ne=[o,...ee],b=await tr(t,h),re=[],x=i.flip?.overflows||[];if(l&&re.push(b[g]),u){let e=Bn(r,a,y);re.push(b[e[0]],b[e[1]])}if(x=[...x,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==Rn(t))||x.every(e=>Rn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:x},reset:{placement:t}};let n=x.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=x.filter(e=>{if(te){let t=Rn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},ir=new Set([`left`,`top`]);async function ar(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Nn(n),s=Pn(n),c=Rn(n)===`y`,l=ir.has(o)?-1:1,u=a&&c?-1:1,d=Mn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const or=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await ar(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Mn(e,t),l={x:n,y:r},u=await tr(t,c),d=Rn(Nn(i)),f=Fn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=jn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=jn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Mn(e,t),u=await tr(t,l),d=Nn(i),f=Pn(i),p=Rn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=Tn(h-u[g],v),te=Tn(m-u[_],y),ne=!t.middlewareData.shift,b=ee,re=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(re=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(b=v),ne&&!f){let e=D(u.left,0),t=D(u.right,0),n=D(u.top,0),r=D(u.bottom,0);p?re=m-2*(e!==0||t!==0?e+t:D(u.left,u.right)):b=h-2*(n!==0||r!==0?n+r:D(u.top,u.bottom))}await c({...t,availableWidth:re,availableHeight:b});let x=await o.getDimensions(s.floating);return m!==x.width||h!==x.height?{reset:{rects:!0}}:{}}}};function lr(){return typeof window<`u`}function ur(e){return fr(e)?(e.nodeName||``).toLowerCase():`#document`}function O(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function dr(e){return((fr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function fr(e){return lr()?e instanceof Node||e instanceof O(e).Node:!1}function pr(e){return lr()?e instanceof Element||e instanceof O(e).Element:!1}function mr(e){return lr()?e instanceof HTMLElement||e instanceof O(e).HTMLElement:!1}function hr(e){return!lr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof O(e).ShadowRoot}const gr=new Set([`inline`,`contents`]);function _r(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ar(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!gr.has(i)}const vr=new Set([`table`,`td`,`th`]);function yr(e){return vr.has(ur(e))}const br=[`:popover-open`,`:modal`];function xr(e){return br.some(t=>{try{return e.matches(t)}catch{return!1}})}const Sr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Cr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],wr=[`paint`,`layout`,`strict`,`content`];function Tr(e){let t=Dr(),n=pr(e)?Ar(e):e;return Sr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Cr.some(e=>(n.willChange||``).includes(e))||wr.some(e=>(n.contain||``).includes(e))}function Er(e){let t=Mr(e);for(;mr(t)&&!kr(t);){if(Tr(t))return t;if(xr(t))return null;t=Mr(t)}return null}function Dr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Or=new Set([`html`,`body`,`#document`]);function kr(e){return Or.has(ur(e))}function Ar(e){return O(e).getComputedStyle(e)}function jr(e){return pr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Mr(e){if(ur(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||hr(e)&&e.host||dr(e);return hr(t)?t.host:t}function Nr(e){let t=Mr(e);return kr(t)?e.ownerDocument?e.ownerDocument.body:e.body:mr(t)&&_r(t)?t:Nr(t)}function Pr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Nr(e),i=r===e.ownerDocument?.body,a=O(r);if(i){let e=Fr(a);return t.concat(a,a.visualViewport||[],_r(r)?r:[],e&&n?Pr(e):[])}return t.concat(r,Pr(r,[],n))}function Fr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ir(e){let t=Ar(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=mr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=En(n)!==a||En(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Lr(e){return pr(e)?e:e.contextElement}function Rr(e){let t=Lr(e);if(!mr(t))return On(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ir(t),o=(a?En(n.width):n.width)/r,s=(a?En(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const zr=On(0);function Br(e){let t=O(e);return!Dr()||!t.visualViewport?zr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==O(e)?!1:t}function Hr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Lr(e),o=On(1);t&&(r?pr(r)&&(o=Rr(r)):o=Rr(e));let s=Vr(a,n,r)?Br(a):On(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=O(a),t=r&&pr(r)?O(r):r,n=e,i=Fr(n);for(;i&&r&&t!==n;){let e=Rr(i),t=i.getBoundingClientRect(),r=Ar(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=O(i),i=Fr(n)}}return Qn({width:u,height:d,x:c,y:l})}function Ur(e,t){let n=jr(e).scrollLeft;return t?t.left+n:Hr(dr(e)).left+n}function Wr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Ur(e,n),y:n.top+t.scrollTop}}function Gr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=dr(r),s=t?xr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=On(1),u=On(0),d=mr(r);if((d||!d&&!a)&&((ur(r)!==`body`||_r(o))&&(c=jr(r)),mr(r))){let e=Hr(r);l=Rr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Wr(o,c):On(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Kr(e){return Array.from(e.getClientRects())}function qr(e){let t=dr(e),n=jr(e),r=e.ownerDocument.body,i=D(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=D(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Ur(e),s=-n.scrollTop;return Ar(r).direction===`rtl`&&(o+=D(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Jr(e,t){let n=O(e),r=dr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Dr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Ur(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const Yr=new Set([`absolute`,`fixed`]);function Xr(e,t){let n=Hr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=mr(e)?Rr(e):On(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Zr(e,t,n){let r;if(t===`viewport`)r=Jr(e,n);else if(t===`document`)r=qr(dr(e));else if(pr(t))r=Xr(t,n);else{let n=Br(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Qn(r)}function Qr(e,t){let n=Mr(e);return n===t||!pr(n)||kr(n)?!1:Ar(n).position===`fixed`||Qr(n,t)}function $r(e,t){let n=t.get(e);if(n)return n;let r=Pr(e,[],!1).filter(e=>pr(e)&&ur(e)!==`body`),i=null,a=Ar(e).position===`fixed`,o=a?Mr(e):e;for(;pr(o)&&!kr(o);){let t=Ar(o),n=Tr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Yr.has(i.position)||_r(o)&&!n&&Qr(e,o))?r=r.filter(e=>e!==o):i=t,o=Mr(o)}return t.set(e,r),r}function ei(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?xr(t)?[]:$r(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=Zr(t,n,i);return e.top=D(r.top,e.top),e.right=Tn(r.right,e.right),e.bottom=Tn(r.bottom,e.bottom),e.left=D(r.left,e.left),e},Zr(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function ti(e){let{width:t,height:n}=Ir(e);return{width:t,height:n}}function ni(e,t,n){let r=mr(t),i=dr(t),a=n===`fixed`,o=Hr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=On(0);function l(){c.x=Ur(i)}if(r||!r&&!a)if((ur(t)!==`body`||_r(i))&&(s=jr(t)),r){let e=Hr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Wr(i,s):On(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ri(e){return Ar(e).position===`static`}function ii(e,t){if(!mr(e)||Ar(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return dr(e)===n&&(n=n.ownerDocument.body),n}function ai(e,t){let n=O(e);if(xr(e))return n;if(!mr(e)){let t=Mr(e);for(;t&&!kr(t);){if(pr(t)&&!ri(t))return t;t=Mr(t)}return n}let r=ii(e,t);for(;r&&yr(r)&&ri(r);)r=ii(r,t);return r&&kr(r)&&ri(r)&&!Tr(r)?n:r||Er(e)||n}const oi=async function(e){let t=this.getOffsetParent||ai,n=this.getDimensions,r=await n(e.floating);return{reference:ni(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function si(e){return Ar(e).direction===`rtl`}const ci={convertOffsetParentRelativeRectToViewportRelativeRect:Gr,getDocumentElement:dr,getClippingRect:ei,getOffsetParent:ai,getElementRects:oi,getClientRects:Kr,getDimensions:ti,getScale:Rr,isElement:pr,isRTL:si};function li(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ui(e,t){let n=null,r,i=dr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Dn(d),h=Dn(i.clientWidth-(u+f)),g=Dn(i.clientHeight-(d+p)),_=Dn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:D(0,Tn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!li(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function di(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Lr(e),u=i||a?[...l?Pr(l):[],...Pr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ui(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Hr(e):null;c&&g();function g(){let t=Hr(e);h&&!li(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const fi=or,pi=sr,mi=rr,hi=cr,gi=nr,_i=(e,t,n)=>{let r=new Map,i={platform:ci,...n},a={...i.platform,_c:r};return er(e,t,{...i,platform:a})};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var vi=class extends Event{constructor(e){super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};function*yi(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*yi(e.shadowRoot.activeElement)))}var bi=`:host {
  --show-duration: 50ms;
  --hide-duration: 50ms;
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
    color: var(--wa-color-text-quiet) !important;
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
`,xi=new Set,k=class extends st{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new Tt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`medium`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus();return}let n=[...yi()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu){e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus())},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus(),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l){e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus();return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus())},0)):this.makeSelection(s))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=t.matches(`:hover`),c=t.submenuElement?.matches(`:hover`)||!!e.composedPath().find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!s&&!c&&setTimeout(()=>{!t.matches(`:hover`)&&!t.submenuElement?.matches(`:hover`)&&(t.submenuOpen=!1)},100)}}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove)}firstUpdated(){this.syncAriaAttributes()}async updated(e){e.has(`open`)&&(this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())),e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger())return;let e=new Sn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}xi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,xi.add(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await gn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus()),this.dispatchEvent(new bn)}async hideMenu(){let e=new xn({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,xi.delete(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await gn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new yn)}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation();return}this.makeSelection(t)}}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((e,r)=>{e.active=r===0,e.checkboxAdjacent=t,e.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=di(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,k.handleSubmenuSlotChange),n.addEventListener(`slotchange`,k.handleSubmenuSlotChange),k.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;_i(e,e.submenuElement,{placement:t,middleware:[fi({mainAxis:0,crossAxis:-5}),mi({fallbackStrategy:`bestFit`}),pi({padding:8})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e){let t=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let n=new vi({item:e});this.dispatchEvent(n),n.defaultPrevented||(this.open=!1,t?.focus())}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,wn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu.setAttribute(`aria-expanded`,`false`))}render(){let e=this.hasUpdated?this.popup.active:this.open;return Me`
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
    `}};k.css=[pt,bi],o([it(`slot:not([name])`)],k.prototype,`defaultSlot`,2),o([it(`#menu`)],k.prototype,`menu`,2),o([it(`wa-popup`)],k.prototype,`popup`,2),o([C({type:Boolean,reflect:!0})],k.prototype,`open`,2),o([C({reflect:!0})],k.prototype,`size`,2),o([C({reflect:!0})],k.prototype,`placement`,2),o([C({type:Number})],k.prototype,`distance`,2),o([C({type:Number})],k.prototype,`skidding`,2),k=o([$e(`wa-dropdown`)],k);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Si=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}};function Ci(e){return Ti(e)}function wi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ti(e){for(let t=e;t;t=wi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=wi(e);t;t=wi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Tr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ei=`:host {
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
`;function Di(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Oi=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),A=class extends st{constructor(){super(...arguments),this.localize=new Tt(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Di(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=di(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[fi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(hi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;Oi&&!Di(this.anchor)&&this.boundary===`scroll`&&(t=Pr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(mi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(pi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(hi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(gi({element:this.arrowEl,padding:this.arrowPadding}));let n=Oi?e=>ci.getOffsetParent(e,Ci):ci.getOffsetParent;_i(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Oi?`absolute`:`fixed`,platform:{...ci,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Si)}render(){return Me`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${At({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${At({popup:!0,"popup-active":this.active,"popup-fixed":!Oi,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Me`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};A.css=Ei,o([it(`.popup`)],A.prototype,`popup`,2),o([it(`.arrow`)],A.prototype,`arrowEl`,2),o([C()],A.prototype,`anchor`,2),o([C({type:Boolean,reflect:!0})],A.prototype,`active`,2),o([C({reflect:!0})],A.prototype,`placement`,2),o([C()],A.prototype,`boundary`,2),o([C({type:Number})],A.prototype,`distance`,2),o([C({type:Number})],A.prototype,`skidding`,2),o([C({type:Boolean})],A.prototype,`arrow`,2),o([C({attribute:`arrow-placement`})],A.prototype,`arrowPlacement`,2),o([C({attribute:`arrow-padding`,type:Number})],A.prototype,`arrowPadding`,2),o([C({type:Boolean})],A.prototype,`flip`,2),o([C({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],A.prototype,`flipFallbackPlacements`,2),o([C({attribute:`flip-fallback-strategy`})],A.prototype,`flipFallbackStrategy`,2),o([C({type:Object})],A.prototype,`flipBoundary`,2),o([C({attribute:`flip-padding`,type:Number})],A.prototype,`flipPadding`,2),o([C({type:Boolean})],A.prototype,`shift`,2),o([C({type:Object})],A.prototype,`shiftBoundary`,2),o([C({attribute:`shift-padding`,type:Number})],A.prototype,`shiftPadding`,2),o([C({attribute:`auto-size`})],A.prototype,`autoSize`,2),o([C()],A.prototype,`sync`,2),o([C({type:Object})],A.prototype,`autoSizeBoundary`,2),o([C({attribute:`auto-size-padding`,type:Number})],A.prototype,`autoSizePadding`,2),o([C({attribute:`hover-bridge`,type:Boolean})],A.prototype,`hoverBridge`,2),A=o([$e(`wa-popup`)],A);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ki=t({default:()=>k}),j;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Ai;function ji(e){this.c=e}j=ji.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function Mi(e){switch(typeof e){case`string`:return _m.l();case`number`:return qi(e)?e<<24>>24===e?ap.l():e<<16>>16===e?fp.l():dm.l():Ji(e)?um.l():lm.l();case`boolean`:return Sf.l();case`undefined`:return gc.l();default:return e instanceof z?mm.l():e instanceof ji?Tf.l():e&&e.$classData?e.$classData.l():null}}function Ni(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return qi(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ji(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof z?`java.lang.Long`:e instanceof ji?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hu()}}function Pi(e,t){switch(typeof e){case`string`:return gm(e,t);case`number`:return sm(e,t);case`boolean`:return bf(e,t);case`undefined`:return pc(e,t);default:return e&&e.$classData||e===null?e.h(t):e instanceof z?fm(e,t):e instanceof ji?wf(Xi(e),t):Qi.prototype.h.call(e,t)}}function Fi(e){switch(typeof e){case`string`:return hm(e);case`number`:return cm(e);case`boolean`:return xf(e);case`undefined`:return mc(e);default:return e&&e.$classData||e===null?e.o():e instanceof z?pm(e):e instanceof ji?Cf(Xi(e)):Qi.prototype.o.call(e)}}function Ii(e){return e===void 0?`undefined`:e.toString()}function Li(e,t){if(t===0)throw new ip(`/ by zero`);return e/t|0}function Ri(e,t){if(t===0)throw new ip(`/ by zero`);return e%t|0}function zi(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Bi(e){return String.fromCharCode(e)}function Vi(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Hi=0,Ui=new WeakMap;function Wi(e){switch(typeof e){case`string`:return hm(e);case`number`:return cm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:hm(n);default:if(e===null)return 0;var r=Ui.get(e);return r===void 0&&(r=Hi+1|0,Hi=r,Ui.set(e,r)),r}}function Gi(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Ki(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function qi(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ji(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Yi(e){return new ji(e)}Yi(0);function Xi(e){return e===null?0:e.c}function Zi(e){return e===null?Ai:e}function Qi(){}j=Qi.prototype,j.constructor=Qi;function M(){}M.prototype=j,j.o=(function(){return Wi(this)}),j.h=(function(e){return this===e}),j.s=(function(){var e=this.o();return Ni(this)+`@`+(+(e>>>0)).toString(16)}),j.toString=(function(){return this.s()});function N(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=N.prototype=new M,j.constructor=N,j.a2=(function(e,t,n,r){Vi(this.a,e,t.a,n,r)}),j.X=(function(){return new N(this.a.slice())});function $i(){}$i.prototype=j;function ea(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=ea.prototype=new M,j.constructor=ea,j.a2=(function(e,t,n,r){Vi(this.a,e,t.a,n,r)}),j.X=(function(){return new ea(this.a.slice())});function ta(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}j=ta.prototype=new M,j.constructor=ta,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ta(this.a.slice())});function na(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}j=na.prototype=new M,j.constructor=na,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new na(this.a.slice())});function ra(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}j=ra.prototype=new M,j.constructor=ra,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ra(this.a.slice())});function ia(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}j=ia.prototype=new M,j.constructor=ia,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ia(this.a.slice())});function aa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Ai}else this.a=e}j=aa.prototype=new M,j.constructor=aa,j.a2=(function(e,t,n,r){Vi(this.a,e,t.a,n,r)}),j.X=(function(){return new aa(this.a.slice())});function oa(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}j=oa.prototype=new M,j.constructor=oa,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new oa(this.a.slice())});function sa(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}j=sa.prototype=new M,j.constructor=sa,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new sa(this.a.slice())});function P(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=P.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new P().y(this,r,i)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new $i;n.constructor=t,n.a2=(function(e,t,n,r){Vi(this.a,e,t.a,n,r)}),n.X=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===ca});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new P().a(this),this.A}),j.l=(function(){return this.L||=new Sd(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null});var ca=new P;ca.n={},ca.E=`Ljava.lang.Object;`,ca.F=(e=>!e.X),ca.N=`java.lang.Object`,ca.I=(e=>e!==null),ca.A=new P().y(ca,N,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Qi.prototype.$classData=ca;var la=new P().p(void 0,`V`,`void`,void 0,void 0);new P().p(!1,`Z`,`boolean`,ea,void 0);var ua=new P().p(0,`C`,`char`,ta,Uint16Array);new P().p(0,`B`,`byte`,na,Int8Array),new P().p(0,`S`,`short`,ra,Int16Array),new P().p(0,`I`,`int`,ia,Int32Array);var da=new P().p(null,`J`,`long`,aa,void 0);new P().p(0,`F`,`float`,oa,Float32Array),new P().p(0,`D`,`double`,sa,Float64Array);function fa(e){return Mi(e).cC()+`@`+Wi(e)}function pa(e){var t=e.cJ;return t===void 0?fa(e):t}function ma(){ga=this,_a().h2(new Z((e=>void 0)),Rc().dO,!0)}j=ma.prototype=new M,j.constructor=ma;function ha(){}ha.prototype=j,j.h2=(function(e,t,n){return new of(e,n,t,this)}),new P().i(ma,`com.raquo.airstream.core.Observer$`,{ba:1});var ga;function _a(){return ga||=new ma,ga}function va(e){this.bX=null,this.cK=null,this.bY=0,this.bX=e,this.cK=void 0;var t=Ra().br();this.bY=t===void 0?1:1+t.bY|0,wa().bu===-1||this.bY>wa().bu?Ku().bs(new nm(this,wa().bu)):ka().Q?ka().am.push(this)|0:Ra().cu(this)}j=va.prototype=new M,j.constructor=va;function ya(){}ya.prototype=j;var ba=new P().i(va,`com.raquo.airstream.core.Transaction`,{bd:1});function xa(){this.bu=0,this.cL=null,Ca=this,this.bu=1e3,this.cL=new Z((e=>{throw K(new q,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=xa.prototype=new M,j.constructor=xa;function Sa(){}Sa.prototype=j,j.en=(function(e){try{e.bX.f(e);var t=e.cK;if(t!==void 0)for(;t.hy();)t.ho().hB(e)}catch(e){var n=e instanceof du?e:new hh(e);Ku().bs(n)}}),new P().i(xa,`com.raquo.airstream.core.Transaction$`,{be:1});var Ca;function wa(){return Ca||=new xa,Ca}function Ta(e){e.bv.length|0?new va(new Z((t=>{for(;(e.bv.length|0)>0;){var n=e.bv.shift();try{n.f(t)}catch(e){var r=e instanceof du?e:new hh(e);Ku().bs(r)}}for(;(e.am.length|0)>0;){var i=e.am.shift();Ra().cu(i)}}))):(e.am.length|0)>0&&new va(new Z((t=>{for(;(e.am.length|0)>0;)Ra().cu(e.am.shift())})))}function Ea(){this.Q=!1,this.bv=null,this.am=null,Oa=this,this.Q=!1,this.bv=lo().ah(U().k(new(V.r()).C([]))),this.am=lo().ah(U().k(new(ba.r()).C([])))}j=Ea.prototype=new M,j.constructor=Ea;function Da(){}Da.prototype=j,new P().i(Ea,`com.raquo.airstream.core.Transaction$onStart$`,{bf:1});var Oa;function ka(){return Oa||=new Ea,Oa}function Aa(e,t){return e.an.get(t)}function ja(e,t){e.bw.unshift(t)}function Ma(e){return e.bw.shift()}function Na(e,t,n){var r=Aa(e,t),i=r===void 0,a=r===void 0?lo().ah(U().k(new(ba.r()).C([]))):r;a.push(n),i&&e.an.set(t,a)}function Pa(e,t){var n=Aa(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.an.delete(t),i}}function Fa(){this.bw=null,this.an=null,La=this,this.bw=lo().ah(U().k(new(ba.r()).C([]))),this.an=new Map}j=Fa.prototype=new M,j.constructor=Fa;function Ia(){}Ia.prototype=j,j.cu=(function(e){var t=this.br();t===void 0?(ja(this,e),wa().en(e),this.fD(e)):Na(this,t,e)}),j.fD=(function(e){for(var t=e;;){var n=this.br(),r=t;if(!(n!==void 0&&H().K(r,n)))throw K(new q,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gy(t),t.bX=wa().cL;var i=this.br();if(H().K(i,void 0))if((this.an.size|0)>0){var a=new Lu(0);throw this.an.forEach((e=>((t,n)=>{e.bc=e.bc+(t.length|0)|0}))(a)),K(new q,`Transaction queue error: Stack cleared, but a total of `+a.bc+` children for `+(this.an.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else wa().en(i),t=i}}),j.gy=(function(e){for(var t=e;;){var n=Pa(this,t);if(H().K(n,void 0)){Ma(this);var r=this.br();if(!H().K(r,void 0))t=r;else return}else{ja(this,n);return}}}),j.br=(function(){return this.bw[0]}),new P().i(Fa,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bg:1});var La;function Ra(){return La||=new Fa,La}function za(e,t){var n=e.a3.indexOf(t)|0;if(n!==-1)e.a3.splice(n,1),e.F.i()||t.eF();else throw K(new q,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Ba(e){for(;(e.bx.length|0)>0;)za(e,e.bx.shift())}function Va(e){this.cM=null,this.a3=null,this.aD=!1,this.bx=null,this.F=null,this.aE=0,this.cM=e,this.a3=lo().ah(U().k(new(Ga.r()).C([]))),this.aD=!0,this.bx=lo().ah(U().k(new(Ga.r()).C([]))),this.F=Q(),this.aE=0}j=Va.prototype=new M,j.constructor=Va;function Ha(){}Ha.prototype=j,j.e7=(function(){if(this.F.i()){var e=ka(),t=(()=>{var e=new vl(this.cM);this.F=new Sm(e),this.aD=!1,this.aE=0;for(var t=0,n=this.a3.length|0;t<n;){var r=t+this.aE|0;this.a3[r].eE(e),t=1+t|0}Ba(this),this.aD=!0,this.aE=0});if(ka(),e.Q)t();else{e.Q=!0;try{t()}finally{e.Q=!1,Ta(e)}}}else throw K(new q,`Can not activate `+this+`: it is already active`)}),j.fx=(function(){if(this.F.i())throw K(new q,`Can not deactivate DynamicOwner: it is not active`);this.aD=!1;for(var e=this.a3,t=0,n=e.length|0;t<n;)e[t].eF(),t=1+t|0;Ba(this);var r=this.F;r.i()||r.x().gb(),Ba(this),this.aD=!0,this.F=Q()}),j.fe=(function(e,t){t?(this.aE=1+this.aE|0,this.a3.unshift(e)):this.a3.push(e);var n=this.F;if(!n.i()){var r=n.x();e.eE(r)}}),j.gD=(function(e){this.aD?za(this,e):this.bx.push(e)}),new P().i(Va,`com.raquo.airstream.ownership.DynamicOwner`,{bh:1});function Ua(e,t,n){this.by=null,this.cN=null,this.bz=null,this.by=e,this.cN=t,this.bz=Q(),e.fe(this,n)}j=Ua.prototype=new M,j.constructor=Ua;function Wa(){}Wa.prototype=j,j.bT=(function(){this.by.gD(this)}),j.eE=(function(e){var t=ka(),n=(()=>{this.bz=this.cN.f(e)});if(ka(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Ta(t)}}}),j.eF=(function(){var e=this.bz;e.i()||(e.x().bT(),this.bz=Q())});var Ga=new P().i(Ua,`com.raquo.airstream.ownership.DynamicSubscription`,{bi:1});function Ka(){}j=Ka.prototype=new M,j.constructor=Ka;function qa(){}qa.prototype=j,j.gZ=(function(e,t,n){return new Ua(e,new Z((e=>new Sm(t.f(e)))),n)}),j.gP=(function(e,t,n){return new Ua(e,new Z((e=>(t.f(e),Q()))),n)}),new P().i(Ka,`com.raquo.airstream.ownership.DynamicSubscription$`,{bj:1});var Ja;function Ya(){return Ja||=new Ka,Ja}function Xa(e){e.aF=lo().ah(U().k(new(ro.r()).C([])))}function Za(e){for(var t=e.aF,n=0,r=t.length|0;n<r;)eo(t[n]),n=1+n|0;e.aF.length=0}function Qa(e,t){var n=e.aF.indexOf(t)|0;if(n!==-1)e.aF.splice(n,1);else throw K(new q,`Can not remove Subscription from Owner: subscription not found.`)}function $a(e,t){e.aF.push(t)}function eo(e){if(!e.c0)e.cP.az(),e.c0=!0;else throw K(new q,`Can not kill Subscription: it was already killed.`)}function to(e,t){this.cQ=null,this.cP=null,this.c0=!1,this.cQ=e,this.cP=t,this.c0=!1,e.gx(this)}j=to.prototype=new M,j.constructor=to;function no(){}no.prototype=j,j.bT=(function(){eo(this),Qa(this.cQ,this)});var ro=new P().i(to,`com.raquo.airstream.ownership.Subscription`,{bm:1});function io(e,t){this.cR=null,this.cS=null,this.a4=null,this.ao=!1,this.cR=e,this.cS=t,this.a4=Q(),this.ao=!1}j=io.prototype=new M,j.constructor=io;function ao(){}ao.prototype=j,j.g8=(function(){var e=this.a4;return!e.i()&&!e.x().by.F.i()}),j.gJ=(function(e){if(this.ao)throw K(new q,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a4;if(t.i())var n=!1;else var n=e===t.x().by;if(!n){this.g8()&&!e.F.i()&&(this.ao=!0);var r=this.a4;r.i()||(r.x().bT(),this.a4=Q()),this.a4=new Sm(Ya().gZ(e,new Z((e=>(this.ao||this.cR.az(),new to(e,new Bf((()=>{this.ao||this.cS.az()})))))),!1)),this.ao=!1}}),j.fr=(function(){if(this.ao)throw K(new q,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a4;e.i()||e.x().bT(),this.a4=Q()}),new P().i(io,`com.raquo.airstream.ownership.TransferableSubscription`,{bn:1});function oo(){}j=oo.prototype=new M,j.constructor=oo;function so(){}so.prototype=j,j.ah=(function(e){return[...dl().gW(e)]}),new P().i(oo,`com.raquo.ew.JsArray$`,{bo:1});var co;function lo(){return co||=new oo,co}function uo(){}j=uo.prototype=new M,j.constructor=uo;function fo(){}fo.prototype=j,j.fS=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new P().i(uo,`com.raquo.ew.JsArray$RichJsArray$`,{bp:1});var po;function mo(){return po||=new uo,po}function ho(){this.cT=null,_o=this,document.createElement(`template`),this.fv(X().u.gQ().gR()),this.cT=RegExp(` `,`g`)}j=ho.prototype=new M,j.constructor=ho;function go(){}go.prototype=j,j.fi=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof du?e:new hh(e);if(n instanceof hh&&n.S instanceof DOMException)return!1;throw n instanceof hh?n.S:n}}),j.g9=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().K(t,r))return!0;n=r}}),j.fu=(function(e){return document.createElement(e.cD())}),j.fZ=(function(e,t){var n=this.g0(e,t);return n===void 0?void 0:t.bC.bP(n)}),j.g0=(function(e,t){var n=e.Z.getAttributeNS(null,t.aG);return n===null?void 0:n}),j.eO=(function(e,t,n){this.gH(e,t,t.bC.bS(n))}),j.gH=(function(e,t,n){n===null?this.gC(e,t):e.Z.setAttribute(t.aG,n)}),j.gC=(function(e,t){e.Z.removeAttribute(t.aG)}),j.gI=(function(e,t,n){var r=e.Z,i=t.b1,a=t.b2,o=n===null?null:n;o===null?(a.Y(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.Y(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.fv=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.du)}),j.g3=(function(e,t){var n=this.g4(e,t);return n===void 0?void 0:t.c4.bP(n)}),j.g4=(function(e,t){var n=e.cF(),r=t.bE,i=n.getAttributeNS(r.i()?null:r.x(),t.c5);return i===null?void 0:i}),j.gK=(function(e,t,n){this.gL(e,t,t.c4.bS(n))}),j.gL=(function(e,t,n){if(n===null)this.gE(e,t);else{var r=t.bE;if(r.i())e.cF().setAttribute(t.bD,n);else{var i=r.x();e.cF().setAttributeNS(i,t.bD,n)}}}),j.gE=(function(e,t){var n=e.cF(),r=t.bE;n.removeAttributeNS(r.i()?null:r.x(),t.c5)}),j.fw=(function(e){return document.createTextNode(e)}),j.fz=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Gg(this.fy(r),n);r=i,n=a}}),j.fy=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cT,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new P().i(ho,`com.raquo.laminar.DomApi$`,{bq:1});var _o;function vo(){return _o||=new ho,_o}function yo(e,t,n){this.c2=null,this.cU=null,this.c1=null,this.c2=e,this.cU=t,this.c1=n}j=yo.prototype=new M,j.constructor=yo;function bo(){}bo.prototype=j,j.Y=(function(e){this.c2===null?this.c1===null?Hc().fT(this.cU,e):mo().fS(this.c1,Xd().fW(e)):this.c2.Y(e)}),new P().i(yo,`com.raquo.laminar.Seq`,{br:1});function xo(){}j=xo.prototype=new M,j.constructor=xo;function So(){}So.prototype=j,new P().i(xo,`com.raquo.laminar.Seq$`,{bs:1});var Co;function wo(){return Co||=new xo,Co}function To(e){_a(),Ku()}function Eo(e){e.eU=es()}function Do(e){Oo(e,new Z((e=>{e.dg.Z.focus()})))}function Oo(e,t){return new Nl(new Z((e=>{var n=new Fu(!e.aH.F.i()),r=new Z((e=>{n.bM?n.bM=!1:t.f(e)}));Ya().gP(e.aH,new Z((e=>(t=>{r.f(new Yo(e,t))}))(e)),!1)})),es())}function ko(){this.b0=null,this.d9=null,jo=this,this.b0=new Sl(Mo()),new Sl(Mo()),new Sl(Mo()),this.d9=new bl}j=ko.prototype=new M,j.constructor=ko;function Ao(){}Ao.prototype=j,new P().i(ko,`com.raquo.laminar.codecs.package$`,{bA:1});var jo;function Mo(){return jo||=new ko,jo}function No(e){e.eV=Po(e,`class`,` `)}function Po(e,t,n){var r=El(new Dl,t,Mo().b0);return new wl(r.aG,new Z((e=>{var t=vo().fZ(e,r);return t===void 0?``:t})),new Uf(((e,t)=>{vo().eO(e,r,t)})),n)}function Fo(e){e.eT=Io(e,`class`,` `)}function Io(e,t,n){var r=new kl(t,Mo().b0,Q());return new wl(r.bD,new Z((e=>{var t=vo().g3(e,r);return t===void 0?``:t})),new Uf(((e,t)=>{vo().gK(e,r,t)})),n)}function Lo(e){this.bA=null,this.bA=e}j=Lo.prototype=new M,j.constructor=Lo;function Ro(){}Ro.prototype=j,j.eG=(function(e,t){try{this.bA.cw(e,t)}catch(e){var n=e instanceof du?e:new hh(e);Ku().bs(n)}}),j.fs=(function(e){return new Lo(new Uf(((t,n)=>{this.bA.cw(t,n),e.bA.cw(t,n)})))}),j.fj=(function(e){return e===void 0?this:e.fs(this)}),new P().i(Lo,`com.raquo.laminar.inserters.InserterHooks`,{bW:1});function zo(){}j=zo.prototype=new M,j.constructor=zo;function Bo(){}Bo.prototype=j,j.gu=(function(e,t){return new qf(e,void 0)}),new P().i(zo,`com.raquo.laminar.inserters.StaticChildInserter$`,{bY:1});var Vo;function Ho(){return Vo||=new zo,Vo}function Uo(){}j=Uo.prototype=new M,j.constructor=Uo;function Wo(){}Wo.prototype=j;function Go(){this.eW=null,this.eX=null,this.eY=null,this.eZ=null,this.eW=`http://www.w3.org/2000/svg`,this.eX=`http://www.w3.org/1999/xlink`,this.eY=`http://www.w3.org/XML/1998/namespace`,this.eZ=`http://www.w3.org/2000/xmlns/`}j=Go.prototype=new M,j.constructor=Go;function Ko(){}Ko.prototype=j,j.gh=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new xp(e)}}),new P().i(Go,`com.raquo.laminar.keys.SvgAttr$`,{c2:1});var qo;function Jo(){return qo||=new Go,qo}function Yo(e,t){this.dg=null,this.dg=e}j=Yo.prototype=new M,j.constructor=Yo;function Xo(){}Xo.prototype=j,new P().i(Yo,`com.raquo.laminar.lifecycle.MountContext`,{c3:1});var F=new P().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function Zo(){this.f0=null,$o=this,this.f0=new jl}j=Zo.prototype=new M,j.constructor=Zo;function Qo(){}Qo.prototype=j,new P().i(Zo,`com.raquo.laminar.modifiers.Modifier$`,{c5:1});var $o;function es(){return $o||=new Zo,$o}function ts(){this.dl=null,rs=this,this.dl=new Fl}j=ts.prototype=new M,j.constructor=ts;function ns(){}ns.prototype=j,new P().i(ts,`com.raquo.laminar.modifiers.RenderableNode$`,{c9:1});var rs;function is(){return rs||=new ts,rs}function as(){this.G=null,ss=this,this.G=new Vl(new Z((e=>e)),I()),new Vl(new Z((e=>``+(e|0))),I()),new Vl(new Z((e=>``+ +e)),I()),new Vl(new Z((e=>``+!!e)),I()),new Vl(new Z((e=>e.gU())),I())}j=as.prototype=new M,j.constructor=as;function os(){}os.prototype=j,new P().i(as,`com.raquo.laminar.modifiers.RenderableText$`,{ce:1});var ss;function I(){return ss||=new as,ss}function cs(){}j=cs.prototype=new M,j.constructor=cs;function ls(){}ls.prototype=j,j.bO=(function(e,t,n){var r=new Sm(e);t.eS(r),n!==void 0&&n.eG(e,t);var i=vo().fi(e.aA(),t.aA());return i&&t.eP(r),i}),new P().i(cs,`com.raquo.laminar.nodes.ParentNode$`,{ch:1});var us;function ds(){return us||=new cs,us}function fs(e){this.dr=null,this.dr=new Lo(new Uf(((t,n)=>{matchResult1:{var r=n.aA();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Ku(),a=r.textContent,o=t.aA().tagName;i.bs(K(new q,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=fs.prototype=new M,j.constructor=fs;function ps(){}ps.prototype=j,j.fm=(function(e){return e.eD(new Z((e=>e.h1(this.dr))))}),new P().i(fs,`com.raquo.laminar.nodes.Slot`,{cl:1});function ms(){gs=this,lo().ah(U().h3(new ia(new Int32Array([0]))))}j=ms.prototype=new M,j.constructor=ms;function hs(){}hs.prototype=j,j.fb=(function(){return new Z((e=>void 0))}),new P().i(ms,`com.raquo.laminar.tags.CustomHtmlTag$`,{co:1});var gs;function _s(){return gs||=new ms,gs}function vs(){}j=vs.prototype=new M,j.constructor=vs;function ys(){}ys.prototype=j,j.fg=(function(){xs().fJ(),xs().fK(),xs().fL(),xs().fM(),xs().fN(),xs().fO()}),j.fJ=(function(){var e=document.querySelector(`#example1`);e!==null&&(X(),new Zu(e,fd().A(U().k(new(V.r()).C([])),U().k(new(F.r()).C([])))))}),j.fK=(function(){var e=document.querySelector(`#example2`);e!==null&&(X(),new Zu(e,fd().A(U().k(new(V.r()).C([new Y((e=>e.bV().z(`--width: 4px;`)))])),U().k(new(F.r()).C([])))))}),j.fL=(function(){var e=document.querySelector(`#example3`);e!==null&&(X(),new Zu(e,fd().A(U().k(new(V.r()).C([new Y((e=>e.bV().z(`--color: tomato;`)))])),U().k(new(F.r()).C([])))))}),j.fM=(function(){var e=document.querySelector(`#example4`);e!==null&&(X(),new Zu(e,X().u.ep().cx(U().k(new(F.r()).C([X().u.gV().cz(),qu(X().u,`Above`,I().G),fd().A(U().k(new(V.r()).C([new Y((e=>e.bV().z(`--spacing: 2rem;`)))])),U().k(new(F.r()).C([]))),qu(X().u,`Below`,I().G)])))))}),j.fN=(function(){var e=document.querySelector(`#example5`);e!==null&&(X(),new Zu(e,X().u.ep().cx(U().k(new(F.r()).C([X().u.fB().fR(),X().u.ff().cz(),qu(X().u,`First`,I().G),fd().A(U().k(new(V.r()).C([new Y((e=>e.eL().eR()))])),U().k(new(F.r()).C([]))),qu(X().u,`Middle`,I().G),fd().A(U().k(new(V.r()).C([new Y((e=>e.eL().eR()))])),U().k(new(F.r()).C([]))),qu(X().u,`Last`,I().G)])))))}),j.fO=(function(){var e=document.querySelector(`#example6`);e!==null&&(X(),new Zu(e,gd().A(U().k(new(V.r()).C([new Y((e=>Ju(X().u,Es().gX().fm(U().k(new(Yf.r()).C([(X(),Ho().gu(id().A(U().k(new(V.r()).C([new Y((e=>e.h0().z(!0)))])),U().k(new(F.r()).C([qu(X().u,`Menu`,I().G)]))),is().dl))]))),hu().dM,Bl()))),new Y((e=>e.bV().z(`max-width: 200px;`)))])),U().k(new(F.r()).C([bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`1`)))])),U().k(new(F.r()).C([qu(X().u,`Option 1`,I().G)]))),bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`2`)))])),U().k(new(F.r()).C([qu(X().u,`Option 2`,I().G)]))),bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`3`)))])),U().k(new(F.r()).C([qu(X().u,`Option 3`,I().G)]))),fd().A(U().k(new(V.r()).C([])),U().k(new(F.r()).C([]))),bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`4`)))])),U().k(new(F.r()).C([qu(X().u,`Option 4`,I().G)]))),bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`5`)))])),U().k(new(F.r()).C([qu(X().u,`Option 5`,I().G)]))),bd().A(U().k(new(V.r()).C([new Y((e=>e.aZ().z(`6`)))])),U().k(new(F.r()).C([qu(X().u,`Option 6`,I().G)])))])))))}),new P().i(vs,`examples.divider.Main$package$`,{cq:1});var bs;function xs(){return bs||=new vs,bs}function Ss(e){try{xs().fg()}catch(e){throw e}}function Cs(){this.dB=null,this.dC=!1}j=Cs.prototype=new M,j.constructor=Cs;function ws(){}ws.prototype=j,j.gX=(function(){return this.dC||=(this.dB=new fs(`trigger`),!0),this.dB}),new P().i(Cs,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{cv:1});var Ts;function Es(){return Ts||=new Cs,Ts}function Ds(){this.f2=!1,this.b3=null,this.bG=null,this.dF=null,this.cb=!1,this.f1=0,this.f4=0,this.f3=null,ks=this,this.f2=!0,this.b3=new ArrayBuffer(8),this.bG=new Int32Array(this.b3,0,2),new Float32Array(this.b3,0,2),this.dF=new Float64Array(this.b3,0,1),this.bG[0]=16909060,this.cb=(new Int8Array(this.b3,0,8)[0]|0)==1,this.f1=this.cb?0:1,this.f4=this.cb?1:0,this.f3=null}j=Ds.prototype=new M,j.constructor=Ds;function Os(){}Os.prototype=j,j.cE=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dF[0]=e,(this.bG[0]|0)^(this.bG[1]|0))}),new P().i(Ds,`java.lang.FloatingPointBits$`,{cF:1});var ks;function As(){return ks||=new Ds,ks}function js(e,t){for(var n=L().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ms(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ru(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ru(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(au.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ms(e,t){var n=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=L().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ns(e,c[1]),Bs(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ns(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ns(e,d[1]),`<clinit>`]}function Ns(e,t){var n=Fs(e);if(fc().dL.call(n,t))var r=Fs(e)[t];else var r=Zs(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ps(e){if(!((1&e.M)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cd=t,e.M=(1|e.M)<<24>>24}return e.cd}function Fs(e){return(1&e.M)<<24>>24?e.cd:Ps(e)}function Is(e){if(!((2&e.M)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ce=t,e.M=(2|e.M)<<24>>24}return e.ce}function Ls(e){return(2&e.M)<<24>>24?e.ce:Is(e)}function Rs(e){return(4&e.M)<<24>>24||(e.cc=Object.keys(Ls(e)),e.M=(4|e.M)<<24>>24),e.cc}function zs(e){return(4&e.M)<<24>>24?e.cc:Rs(e)}function Bs(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Vs(e,t){return t?t.arguments&&t.stack?Hs(e,t):t.stack&&t.sourceURL?Gs(e,t):t.stack&&t.number?Ws(e,t):t.stack&&t.fileName?Us(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ks(e,t):qs(e,t):Ks(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Js(e,t):Ys(e,t):t.stack&&!t.fileName?Hs(e,t):Xs(e,t):[]}function Hs(e,t){return(t.stack+`
`).replace(L().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(L().D(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(L().D(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(L().D(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(L().D(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Us(e,t){return t.stack.replace(L().D(`(?:\\n@:0)?\\s+$`,`m`),``).replace(L().D(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ws(e,t){return t.stack.replace(L().D(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(L().D(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(L().D(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Gs(e,t){return t.stack.replace(L().D(`\\[native code\\]\\n`,`m`),``).replace(L().D(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(L().D(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ks(e,t){for(var n=L().D(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function qs(e,t){for(var n=L().D(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Js(e,t){for(var n=L().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ys(e,t){for(var n=L().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(L().W(`<anonymous function: (\\S+)>`),`$1`).replace(L().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Xs(e,t){return[]}function Zs(e,t,n){for(;;)if(t<(zs(e).length|0)){var r=zs(e)[t];if(n.startsWith(r))return``+Ls(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Qs(){this.cd=null,this.ce=null,this.cc=null,this.M=0}j=Qs.prototype=new M,j.constructor=Qs;function $s(){}$s.prototype=j,j.fP=(function(e){return js(this,Vs(this,e))}),new P().i(Qs,`java.lang.StackTrace$`,{cM:1});var ec;function tc(){return ec||=new Qs,ec}function nc(){}j=nc.prototype=new M,j.constructor=nc;function rc(){}rc.prototype=j,j.W=(function(e){return new RegExp(e)}),j.D=(function(e,t){return new RegExp(e,t)}),new P().i(nc,`java.lang.StackTrace$StringRE$`,{cN:1});var ic;function L(){return ic||=new nc,ic}function ac(){this.dH=null,this.f5=null,sc=this,this.dH=new _h(!1),this.f5=new _h(!0)}j=ac.prototype=new M,j.constructor=ac;function oc(){}oc.prototype=j,new P().i(ac,`java.lang.System$Streams$`,{cS:1});var sc;function cc(){return sc||=new ac,sc}function lc(){this.dL=null,dc=this,this.dL=Object.prototype.hasOwnProperty}j=lc.prototype=new M,j.constructor=lc;function uc(){}uc.prototype=j,new P().i(lc,`java.lang.Utils$Cache$`,{cU:1});var dc;function fc(){return dc||=new lc,dc}function pc(e,t){return e===t}function mc(e){return 0}function hc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ar)}var gc=new P().i(0,`java.lang.Void`,{ar:1},(e=>e===void 0));function _c(e,t){throw new op(`argument type mismatch`)}function vc(){}j=vc.prototype=new M,j.constructor=vc;function yc(){}yc.prototype=j,j.aU=(function(e){return e instanceof N||e instanceof ea||e instanceof ta||e instanceof na||e instanceof ra||e instanceof ia||e instanceof aa||e instanceof oa||e instanceof sa?e.a.length:_c(this,e)}),new P().i(vc,`java.lang.reflect.Array$`,{cV:1});var bc;function xc(){return bc||=new vc,bc}function Sc(){}j=Sc.prototype=new M,j.constructor=Sc;function Cc(){}Cc.prototype=j,j.ev=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),j.eu=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.ew=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.er=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.eq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.ex=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.es=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.et=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new P().i(Sc,`java.util.Arrays$`,{cW:1});var wc;function R(){return wc||=new Sc,wc}function z(e,t){this.c=0,this.d=0,this.c=e,this.d=t}j=z.prototype=new M,j.constructor=z;function Tc(){}Tc.prototype=j,j.h=(function(e){return e instanceof z&&this.c===e.c&&this.d===e.d}),j.o=(function(){return this.c^this.d}),j.s=(function(){return B().eK(this.c,this.d)}),j.hE=(function(){return this.c}),j.hD=(function(){return B().eJ(this.c,this.d)}),j.hC=(function(){return B().bq(this.c,this.d)}),j.hl=(function(){return this.c<<24>>24}),j.hA=(function(){return this.c<<16>>16}),j.hv=(function(){return this.c}),j.hw=(function(){return this}),j.hr=(function(){return B().eJ(this.c,this.d)}),j.hp=(function(){return B().bq(this.c,this.d)}),j.hn=(function(e){return B().eH(this.c,this.d,e.c,e.d)}),j.hm=(function(e){return B().eH(this.c,this.d,e.c,e.d)}),j.hq=(function(e){return this.c===e.c&&this.d===e.d}),j.hz=(function(e){return!(this.c===e.c&&this.d===e.d)}),j.hd=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),j.he=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),j.h9=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),j.ha=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),j.hG=(function(){return new z(~this.c,~this.d)}),j.h7=(function(e){return new z(this.c|e.c,this.d|e.d)}),j.h6=(function(e){return new z(this.c&e.c,this.d&e.d)}),j.hk=(function(e){return new z(this.c^e.c,this.d^e.d)}),j.hf=(function(e){var t=this.c;return new z(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),j.hc=(function(e){var t=this.d;return new z(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),j.hb=(function(e){var t=this.d;return new z(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),j.hF=(function(){var e=this.c,t=this.d;return new z(-e|0,e===0?-t|0:~t)}),j.hi=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new z(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),j.hg=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new z(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),j.hj=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new z(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),j.h8=(function(e){var t=B();return new z(t.fC(this.c,this.d,e.c,e.d),t.q)}),j.hh=(function(e){var t=B();return new z(t.gB(this.c,this.d,e.c,e.d),t.q)}),new P().i(z,`org.scalajs.linker.runtime.RuntimeLong`,{as:1});function Ec(e,t,n){return-2097152&n?kc(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Dc(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.q=0,n>>>o|0}else return kc(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.q=s/4294967296|0,s|0}}function Oc(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.q=n&(-1+i|0),t):kc(e,t,n,r,i,1)|0;if(-2097152&i)return e.q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.q=a/4294967296|0,a|0}function kc(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,b=d,re=ee-ne|0,x=(-2147483648^re)>(-2147483648^ee)?-1+(te-b|0)|0:te-b|0;f=re,p=x,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ie=u,ae=d,oe=ie>>>1|0|ae<<31,se=ae>>>1|0;u=oe,d=se}var ce=f,le=p;if(le===i?(-2147483648^ce)>=(-2147483648^r):(-2147483648^le)>=(-2147483648^i)){var ue=f,de=4294967296*p+ +(ue>>>0),fe=4294967296*i+ +(r>>>0);if(a!==1){var pe=de/fe,me=pe|0,he=pe/4294967296|0,ge=m,_e=h,ve=ge+me|0,ye=(-2147483648^ve)<(-2147483648^ge)?1+(_e+he|0)|0:_e+he|0;m=ve,h=ye}if(a!==0){var be=de%fe;f=be|0,p=be/4294967296|0}}if(a===0)return e.q=h,m;if(a===1)return e.q=p,f;var xe=m,Se=4294967296*h+ +(xe>>>0),Ce=``+f,we=Ce.length;return``+Se+`000000000`.substring(we)+Ce}function Ac(){this.q=0}j=Ac.prototype=new M,j.constructor=Ac;function jc(){}jc.prototype=j,j.eK=(function(e,t){return t===e>>31?``+e:t<0?`-`+Ec(this,-e|0,e===0?-t|0:~t):Ec(this,e,t)}),j.bq=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),j.eJ=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),j.ht=(function(e){return new z(e,e>>31)}),j.hs=(function(e){return new z(this.eI(e),this.q)}),j.eI=(function(e){if(e<-0x8000000000000000)return this.q=-2147483648,0;if(e>=0x8000000000000000)return this.q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.q=e<0&&t!==0?-1+n|0:n,t}),j.eH=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),j.fC=(function(e,t,n,r){if((n|r)===0)throw new ip(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.q=0,-2147483648;var i=Li(e,n);return this.q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=-1,-1;else return this.q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Dc(this,a,o,s,c);if((t^r)>=0)return l;var u=this.q;return this.q=l===0?-u|0:~u,-l|0}}),j.gB=(function(e,t,n,r){if((n|r)===0)throw new ip(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Ri(e,n);return this.q=i>>31,i}else return this.q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=0,0;else return this.q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Oc(this,a,o,s,c);if(t<0){var u=this.q;return this.q=l===0?-u|0:~u,-l|0}else return l}}),new P().i(Ac,`org.scalajs.linker.runtime.RuntimeLong$`,{cY:1});var Mc;function B(){return Mc||=new Ac,Mc}var V=new P().i(1,`scala.Function1`,{e:1});function Nc(){}j=Nc.prototype=new M,j.constructor=Nc;function Pc(){}Pc.prototype=j;function Fc(){this.dP=null,this.dO=null,Lc=this,this.dP=new Y((e=>Rc().dP)),this.dO=new jf}j=Fc.prototype=new M,j.constructor=Fc;function Ic(){}Ic.prototype=j,new P().i(Fc,`scala.PartialFunction$`,{db:1});var Lc;function Rc(){return Lc||=new Fc,Lc}function zc(){this.dS=null,Vc=this,this.dS=new Y((e=>Hc().dS))}j=zc.prototype=new M,j.constructor=zc;function Bc(){}Bc.prototype=j,j.fT=(function(e,t){var n=xc().aU(e),r=0;if(e instanceof N)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ia)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof sa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof aa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof oa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ta)for(;r<n;)t.f(Yi(e.a[r])),r=1+r|0;else if(e instanceof na)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ra)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ea)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new xp(e)}),new P().i(zc,`scala.collection.ArrayOps$`,{dh:1});var Vc;function Hc(){return Vc||=new zc,Vc}function Uc(e,t){for(var n=e.m();n.r();)t.f(n.g())}function Wc(e,t,n,r){return e.y()===0?``+t+r:e.be(Qg(new $g),t,n,r).J.p}function Gc(e,t,n,r,i){var a=t.J;n.length!==0&&(a.p=``+a.p+n);var o=e.m();if(o.r()){var s=o.g();for(a.p=``+a.p+s;o.r();){a.p=``+a.p+r;var c=o.g();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function Kc(e,t){this.dW=null,this.b9=null,this.dW=e,this.b9=t}j=Kc.prototype=new M,j.constructor=Kc;function qc(){}qc.prototype=j,j.g6=(function(){return this.dW.az().m()}),new P().i(Kc,`scala.collection.Iterator$ConcatIteratorCell`,{dA:1});function Jc(){}j=Jc.prototype=new M,j.constructor=Jc;function Yc(){}Yc.prototype=j,j.K=(function(e,t){return e===t||(nu(e)?this.fI(e,t):e instanceof ji?this.fG(e,t):e===null?t===null:Pi(e,t))}),j.fI=(function(e,t){if(nu(t))return this.fH(e,t);if(t instanceof ji){if(typeof e==`number`)return+e===t.c;if(e instanceof z){var n=Zi(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Pi(e,t)}else return e===null?t===null:Pi(e,t)}),j.fH=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof z){var r=Zi(t);return n===B().bq(r.c,r.d)}else return!1}else if(e instanceof z){var i=Zi(e),a=i.c,o=i.d;if(t instanceof z){var s=Zi(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return B().bq(a,o)===u}else return!1}else return e===null?t===null:Pi(e,t)}),j.fG=(function(e,t){if(t instanceof ji)return e.c===t.c;if(nu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof z){var n=Zi(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Pi(t,e)}else return e===null&&t===null}),new P().i(Jc,`scala.runtime.BoxesRunTime$`,{eb:1});var Xc;function H(){return Xc||=new Jc,Xc}var Zc=new P().i(0,`scala.runtime.Null$`,{ee:1});function Qc(){}j=Qc.prototype=new M,j.constructor=Qc;function $c(){}$c.prototype=j,j.aS=(function(e,t){if(e instanceof N||e instanceof ia||e instanceof sa||e instanceof aa||e instanceof oa)return e.a[t];if(e instanceof ta)return Yi(e.a[t]);if(e instanceof na||e instanceof ra||e instanceof ea)return e.a[t];throw e===null?new dp:new xp(e)}),j.fn=(function(e,t,n){if(e instanceof N)e.a[t]=n;else if(e instanceof ia)e.a[t]=n|0;else if(e instanceof sa)e.a[t]=+n;else if(e instanceof aa)e.a[t]=Zi(n);else if(e instanceof oa)e.a[t]=Math.fround(n);else if(e instanceof ta)e.a[t]=Xi(n);else if(e instanceof na)e.a[t]=n|0;else if(e instanceof ra)e.a[t]=n|0;else if(e instanceof ea)e.a[t]=!!n;else if(e===null)throw new dp;else throw new xp(e)}),j.fc=(function(e){return Wc(e.aX(),e.ak()+`(`,`,`,`)`)}),j.k=(function(e){return e===null?null:e.a.length===0?Nm(Lm()):new hg(e)}),j.h3=(function(e){return e===null?null:new dg(e)}),new P().i(Qc,`scala.runtime.ScalaRunTime$`,{ef:1});var el;function U(){return el||=new Qc,el}function tl(){}j=tl.prototype=new M,j.constructor=tl;function nl(){}nl.prototype=j,j.b=(function(e,t){var n=this.bU(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.bU=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.l=(function(e,t){return this.fp(e^t)}),j.fp=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.aW=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),j.U=(function(e){var t=zi(e);if(t===e)return t;var n=B(),r=n.eI(e),i=n.q;return B().bq(r,i)===e?r^i:As().cE(e)}),j.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof z){var t=Zi(e);return this.aW(new z(t.c,t.d))}else return Fi(e)}),j.bp=(function(e){throw sp(new cp,``+e)}),new P().i(tl,`scala.runtime.Statics$`,{eh:1});var rl;function W(){return rl||=new tl,rl}function il(){}j=il.prototype=new M,j.constructor=il;function al(){}al.prototype=j,j.gM=(function(e,t){return setTimeout((()=>{t.az()}),e)}),new P().i(il,`scala.scalajs.js.timers.package$`,{en:1});var ol;function sl(){return ol||=new il,ol}function cl(){}j=cl.prototype=new M,j.constructor=cl;function ll(){}ll.prototype=j,j.gW=(function(e){var t=[];return e.Y(new Y((e=>t.push(e)|0))),t}),new P().i(cl,`scala.scalajs.runtime.Compat$`,{ew:1});var ul;function dl(){return ul||=new cl,ul}function fl(){}j=fl.prototype=new M,j.constructor=fl;function pl(){}pl.prototype=j,j.gN=(function(e){var t=`Illegal command line`+(e.eC()===0?``:e.eC()===1?` after first argument`:` after `+e.eC()+` arguments`)+`: `+e.hx();Cu().gw().ga(t+`
`)}),new P().i(fl,`scala.util.CommandLineParser$`,{ey:1});function ml(e){this.ct=null,this.ct=e}j=ml.prototype=new M,j.constructor=ml;function hl(){}hl.prototype=j,j.s=(function(){return`DynamicVariable(`+this.ct+`)`}),new P().i(ml,`scala.util.DynamicVariable`,{eA:1});function gl(){}j=gl.prototype=new M,j.constructor=gl;function _l(){}_l.prototype=j,j.b=(function(e,t){var n=this.bU(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.bU=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.l=(function(e,t){return this.E(e^t)}),j.E=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.eM=(function(e,t,n){var r=e.ai();if(r===0)return hm(e.ak());var i=t;n||(i=this.b(i,hm(e.ak())));for(var a=0;a<r;)i=this.b(i,W().w(e.aj(a))),a=1+a|0;return this.l(i,r)}),j.gY=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.r();){var s=o.g(),c=W().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bU(l,a),this.l(l,i)}),j.gv=(function(e,t){var n=e.m(),r=t;if(!n.r())return this.l(r,0);var i=n.g();if(!n.r())return this.l(this.b(r,W().w(i)),1);var a=n.g(),o=W().w(i);r=this.b(r,o);for(var s=r,c=W().w(a),l=c-o|0,u=2;n.r();){r=this.b(r,c);var d=W().w(n.g());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.r();)r=this.b(r,W().w(n.g())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.E(this.b(this.b(s,l),c))}),j.eb=(function(e,t){var n=t,r=xc().aU(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().w(U().aS(e,0))),1);default:var i=W().w(U().aS(e,0));n=this.b(n,i);for(var a=n,o=W().w(U().aS(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().w(U().aS(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().w(U().aS(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.gz=(function(e,t,n,r){return this.E(this.b(this.b(this.b(r,e),t),n))}),j.g7=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().w(e.n(0))),1);default:var i=W().w(e.n(0));n=this.b(n,i);for(var a=n,o=W().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().w(e.n(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.gc=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.i();){var l=c.V(),u=c.L(),d=W().w(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gz(s,a,o,t):this.l(r,n)}),j.ek=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.ec=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.ed=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.ee=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().U(e.a[0])),1);default:var i=W().U(e.a[0]);n=this.b(n,i);for(var a=n,o=W().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().U(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.ef=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().U(e.a[0])),1);default:var i=W().U(e.a[0]);n=this.b(n,i);for(var a=n,o=W().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().U(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.eg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.eh=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,W().aW(new z(a.c,a.d))),1);default:var o=e.a[0],s=W().aW(new z(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=W().aW(new z(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=W().aW(new z(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.b(h,W().aW(new z(g.c,g.d))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.E(this.b(this.b(c,d),u))}}),j.ei=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),j.ej=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.E(this.b(this.b(i,o),a))}});function vl(e){this.aF=null,this.cO=null,this.bZ=!1,this.cO=e,Xa(this),this.bZ=!1}j=vl.prototype=new M,j.constructor=vl;function yl(){}yl.prototype=j,j.gx=(function(e){this.bZ?(eo(e),this.cO.az()):$a(this,e)}),j.gb=(function(){Za(this),this.bZ=!0}),new P().i(vl,`com.raquo.airstream.ownership.OneTimeOwner`,{bk:1,bl:1});function bl(){}j=bl.prototype=new M,j.constructor=bl;function xl(){}xl.prototype=j,j.fA=(function(e){return e!==null}),j.fF=(function(e){return e?``:null}),j.bP=(function(e){return this.fA(e)}),j.bS=(function(e){return this.fF(!!e)}),new P().i(bl,`com.raquo.laminar.codecs.package$$anon$1`,{bB:1,a0:1});function Sl(e){if(e===null)throw new dp}j=Sl.prototype=new M,j.constructor=Sl;function Cl(){}Cl.prototype=j,j.bS=(function(e){return e}),j.bP=(function(e){return e}),new P().i(Sl,`com.raquo.laminar.codecs.package$$anon$2`,{bC:1,a0:1});function wl(e,t,n,r){}j=wl.prototype=new Wo,j.constructor=wl;function Tl(){}Tl.prototype=j,new P().i(wl,`com.raquo.laminar.keys.CompositeKey`,{c0:1,R:1});function El(e,t,n){return e.aG=t,e.bC=n,e}function Dl(){this.aG=null,this.bC=null}j=Dl.prototype=new Wo,j.constructor=Dl;function Ol(){}Ol.prototype=j,j.z=(function(e){return new Yu(this,e,new Gf(((e,t,n)=>{vo().eO(e,t,n)})))}),new P().i(Dl,`com.raquo.laminar.keys.HtmlAttr`,{ad:1,R:1});function kl(e,t,n){this.c5=null,this.c4=null,this.bD=null,this.bE=null,this.c5=e,this.c4=t;var r=n.i()?Q():new Sm(n.x()+`:`+e);this.bD=r.i()?e:r.x(),this.bE=n.i()?Q():new Sm(Jo().gh(n.x()))}j=kl.prototype=new Wo,j.constructor=kl;function Al(){}Al.prototype=j,new P().i(kl,`com.raquo.laminar.keys.SvgAttr`,{c1:1,R:1});function jl(){}j=jl.prototype=new M,j.constructor=jl;function Ml(){}Ml.prototype=j,j.a1=(function(e){}),new P().i(jl,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c6:1,S:1});function Nl(e,t){if(this.dk=null,this.dk=e,t===null)throw new dp}j=Nl.prototype=new M,j.constructor=Nl;function Pl(){}Pl.prototype=j,j.a1=(function(e){var t=ka(),n=(()=>{this.dk.f(e)});if(ka(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Ta(t)}}}),new P().i(Nl,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c7:1,S:1});function Fl(){}j=Fl.prototype=new M,j.constructor=Fl;function Il(){}Il.prototype=j,new P().i(Fl,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{ca:1,c8:1});function Ll(){}j=Ll.prototype=new M,j.constructor=Ll;function Rl(){}Rl.prototype=j,new P().i(Ll,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cc:1,cb:1});var zl;function Bl(){return zl||=new Ll,zl}function Vl(e,t){if(this.dm=null,this.dm=e,t===null)throw new dp}j=Vl.prototype=new M,j.constructor=Vl;function Hl(){}Hl.prototype=j,j.fo=(function(e){return this.dm.f(e)}),new P().i(Vl,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cf:1,cd:1});function Ul(e){e.eo(new Va(new Bf((()=>{throw K(new q,`Attempting to use owner of unmounted element: `+Wc(vo().fz(e.aA(),(vo(),Xg())),``,` > `,``))}))))}function Wl(e,t,n){return e.c9=t,e}function Gl(){this.c9=null}j=Gl.prototype=new M,j.constructor=Gl;function Kl(){}Kl.prototype=j,j.cD=(function(){return this.c9}),j.cx=(function(e){var t=this.fq();return e.Y(new Z((e=>{e.a1(t)}))),t}),j.fq=(function(){return new am(this,vo().fu(this))}),new P().i(Gl,`com.raquo.laminar.tags.HtmlTag`,{ag:1,a5:1});function ql(e,t){this.du=null,this.du=e}j=ql.prototype=new M,j.constructor=ql;function Jl(){}Jl.prototype=j,new P().i(ql,`com.raquo.laminar.tags.SvgTag`,{cp:1,a5:1});function Yl(){}j=Yl.prototype=new M,j.constructor=Yl;function Xl(){}Xl.prototype=j,j.bS=(function(e){return e}),j.bP=(function(e){return e}),new P().i(Yl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cx:1,a0:1});function Zl(e,t){return e.aL=t,e.bN(),e}function Ql(){this.aL=null,this.aI=null,this.aJ=!1,this.aK=null,this.aM=!1}j=Ql.prototype=new M,j.constructor=Ql;function $l(){}$l.prototype=j,j.bV=(function(){return this.aJ||=(this.aI=X().u.gO(),!0),this.aI}),j.gS=(function(){return this.aM||=(this.aK=new $u(this.aL,_s().fb(),(_s(),void 0)),!0),this.aK}),j.A=(function(e,t){var n=this.gS().cx(U().k(new(F.r()).C([])));return e.Y(new Z((e=>{e.f(this).a1(n)}))),t.Y(new Z((e=>{e.a1(n)}))),n});function eu(){}j=eu.prototype=new M,j.constructor=eu;function tu(){}tu.prototype=j;function nu(e){return e instanceof eu||typeof e==`number`||e instanceof z}function ru(e,t,n,r,i){this.aO=null,this.b5=null,this.aP=null,this.aQ=0,this.aN=0,this.aO=e,this.b5=t,this.aP=n,this.aQ=r,this.aN=i}j=ru.prototype=new M,j.constructor=ru;function iu(){}iu.prototype=j,j.h=(function(e){return e instanceof ru&&this.aP===e.aP&&this.aQ===e.aQ&&this.aN===e.aN&&this.aO===e.aO&&this.b5===e.b5}),j.s=(function(){var e=``;return this.aO!==`<jscode>`&&(e=``+e+this.aO+`.`),e=``+e+this.b5,this.aP===null?e+=`(Unknown Source)`:(e=e+`(`+this.aP,this.aQ>=0&&(e=e+`:`+this.aQ,this.aN>=0&&(e=e+`:`+this.aN)),e+=`)`),e}),j.o=(function(){return hm(this.aO)^hm(this.b5)^hm(this.aP)^this.aQ^this.aN});var au=new P().i(ru,`java.lang.StackTraceElement`,{aq:1,a:1});function ou(){}j=ou.prototype=new M,j.constructor=ou;function su(){}su.prototype=j,j.gi=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new vm;for(var i=``,a=t;a!==r;)i+=``+Bi(e.a[a]),a=1+a|0;return i}),new P().i(ou,`java.lang.String$`,{cP:1,a:1});var cu;function lu(){return cu||=new ou,cu}function uu(e,t,n,r,i){return e.dJ=t,e.dK=i,i&&e.fQ(),e}var du=class extends Error{constructor(){super(),this.dJ=null,this.dK=!1,this.dI=null,this.bH=null}bo(){return this.dJ}fQ(){var e=this instanceof hh?this.S:this;return this.dI=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}g2(){return this.bH===null&&(this.dK?this.bH=tc().fP(this.dI):this.bH=new(au.r()).C(0)),this.bH}s(){var e=Ni(this),t=this.bo();return t===null?e:e+`: `+t}o(){return Qi.prototype.o.call(this)}h(e){return Qi.prototype.h.call(this,e)}get message(){var e=this.bo();return e===null?``:e}get name(){return Ni(this)}toString(){return this.s()}};function fu(){this.dM=null,mu=this,this.dM=new hp}j=fu.prototype=new M,j.constructor=fu;function pu(){}pu.prototype=j,new P().i(fu,`scala.$less$colon$less$`,{d1:1,a:1});var mu;function hu(){return mu||=new fu,mu}function gu(){}j=gu.prototype=new M,j.constructor=gu;function _u(){}_u.prototype=j,j.ez=(function(e,t){var n=e.y();if(n>-1){for(var r=t.gj(n),i=e.m(),a=0;a<n;)U().fn(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.gF(),c=s===ua.l();o=[];for(var l=e.m();l.r();){var u=l.g(),d=c?Xi(u):u===null?s.al.z:u;o.push(d)}return(s===la.l()?gc.l():s===Zc.l()||s===Kd.l()?ca.l():s).al.r().w(o)}}),j.ey=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().K(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new P().i(gu,`scala.Array$`,{d3:1,a:1});var vu;function yu(){return vu||=new gu,vu}function bu(){this.dN=null,Su=this,this.dN=new ml(cc().dH)}j=bu.prototype=new M,j.constructor=bu;function xu(){}xu.prototype=j,j.gw=(function(){return this.dN.ct}),new P().i(bu,`scala.Console$`,{d4:1,dX:1});var Su;function Cu(){return Su||=new bu,Su}function wu(){}j=wu.prototype=new Pc,j.constructor=wu;function Tu(){}Tu.prototype=j,j.h4=(function(e){return e===null?null:e.a.length===0?Vm().dX:new zg(e)});function Eu(e,t){if(t===e)e.e8(Yp().eA(t));else for(var n=t.m();n.r();)e.cv(n.g());return e}function Du(){}j=Du.prototype=new M,j.constructor=Du;function Ou(){}Ou.prototype=j,j.s=(function(){return`<function0>`});function ku(){}j=ku.prototype=new M,j.constructor=ku;function Au(){}Au.prototype=j,j.s=(function(){return`<function1>`});function ju(){}j=ju.prototype=new M,j.constructor=ju;function Mu(){}Mu.prototype=j,j.s=(function(){return`<function2>`});function Nu(){}j=Nu.prototype=new M,j.constructor=Nu;function Pu(){}Pu.prototype=j,j.s=(function(){return`<function3>`});function Fu(e){this.bM=!1,this.bM=e}j=Fu.prototype=new M,j.constructor=Fu;function Iu(){}Iu.prototype=j,j.s=(function(){return``+this.bM}),new P().i(Fu,`scala.runtime.BooleanRef`,{ea:1,a:1});function Lu(e){this.bc=0,this.bc=e}j=Lu.prototype=new M,j.constructor=Lu;function Ru(){}Ru.prototype=j,j.s=(function(){return``+this.bc}),new P().i(Lu,`scala.runtime.IntRef`,{ec:1,a:1});function zu(){this.t=0,this.e6=0,this.fa=0,this.f9=0,Vu=this,this.t=hm(`Seq`),this.e6=hm(`Map`),this.fa=hm(`Set`),this.f9=this.gY(Xg(),this.e6)}j=zu.prototype=new _l,j.constructor=zu;function Bu(){}Bu.prototype=j,j.gG=(function(e){return Nh(e)?this.g7(e,this.t):e instanceof Cg?this.gc(e,this.t):this.gv(e,this.t)}),new P().i(zu,`scala.util.hashing.MurmurHash3$`,{eC:1,eB:1});var Vu;function G(){return Vu||=new zu,Vu}var Hu=class extends du{};function Uu(){this.bW=null,this.cH=null,this.cI=null,Gu=this,this.bW=Yp().e9(U().k(new(V.r()).C([]))),this.cH=new Z((e=>{try{console.error(this.fY(e)+`
`+this.g1(e,`
`))}catch(e){var t=e instanceof du?e:new hh(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cI=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof hh?t.S:t})),this.gA(this.cH)}j=Uu.prototype=new M,j.constructor=Uu;function Wu(){}Wu.prototype=j,j.fY=(function(e){try{var t=e.bo()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Mi(e).cC()+`: `+t}),j.g1=(function(e,t){try{return Wc(kd().h4(e.g2()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.gA=(function(e){this.bW.cv(e)}),j.bs=(function(e){for(var t=this.bW.m();t.r();){var n=t.g();try{n.f(e)}catch(e){var r=e instanceof du?e:new hh(e),i=this.cI;if(n===null?i===null:n.h(i))throw r instanceof hh?r.S:r;console.warn(`Error processing an unhandled error callback:`),sl().gM(0,new Bf((e=>(()=>{throw e instanceof hh?e.S:e}))(r)))}}}),new P().i(Uu,`com.raquo.airstream.core.AirstreamError$`,{b7:1,dV:1,dW:1});var Gu;function Ku(){return Gu||=new Uu,Gu}function qu(e,t,n){return new gf(n.fo(t))}function Ju(e,t,n,r){return new Nl(new Z((e=>{(wo(),new yo(t,null,null)).Y(new Z((e=>(t=>{n.f(t).a1(e)}))(e)))})),es())}function Yu(e,t,n){this.di=null,this.dj=null,this.dh=null,this.di=e,this.dj=t,this.dh=n}j=Yu.prototype=new M,j.constructor=Yu;function Xu(){}Xu.prototype=j,j.a1=(function(e){this.dh.fk(e,this.di,this.dj)}),new P().i(Yu,`com.raquo.laminar.modifiers.KeySetter`,{c4:1,S:1,cg:1});function Zu(e,t){if(this.c7=null,this.dp=null,this.dq=null,this.dp=t,Ul(this),e===null)throw K(new q,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!vo().g9(e,document))throw K(new q,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dq=e,this.gg()}j=Zu.prototype=new M,j.constructor=Zu;function Qu(){}Qu.prototype=j,j.bR=(function(){return this.c7}),j.eo=(function(e){this.c7=e}),j.gg=(function(){return this.c7.e7(),ds().bO(this,this.dp,void 0)}),j.aA=(function(){return this.dq}),new P().i(Zu,`com.raquo.laminar.nodes.RootNode`,{ck:1,a4:1,af:1});function $u(e,t,n){this.c9=null,this.dt=null,this.dt=e,Wl(this,e,!1)}j=$u.prototype=new Kl,j.constructor=$u;function ed(){}ed.prototype=j,j.cD=(function(){return this.dt}),new P().i($u,`com.raquo.laminar.tags.CustomHtmlTag`,{cn:1,ag:1,a5:1});function td(){this.aL=null,this.aI=null,this.aJ=!1,this.aK=null,this.aM=!1,this.dv=null,this.dw=!1,Zl(this,`wa-button`)}j=td.prototype=new $l,j.constructor=td;function nd(){}nd.prototype=j,j.h0=(function(){return this.dw||=(this.dv=(X(),El(new Dl,`with-caret`,Mo().d9)),!0),this.dv}),j.bN=(function(){return fn}),new P().i(td,`io.github.nguyenyou.webawesome.laminar.Button$`,{cr:1,X:1,W:1});var rd;function id(){return rd||=new td,rd}function ad(){this.aG=null,this.bC=null,this.dx=null,this.dy=!1,El(this,`orientation`,new Yl)}j=ad.prototype=new Ol,j.constructor=ad;function od(){}od.prototype=j,j.eR=(function(){return this.dy||=(this.dx=cd().z(`vertical`),!0),this.dx}),new P().i(ad,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{cs:1,ad:1,R:1});var sd;function cd(){return sd||=new ad,sd}function ld(){this.aL=null,this.aI=null,this.aJ=!1,this.aK=null,this.aM=!1,this.dz=null,this.dA=!1,Zl(this,`wa-divider`)}j=ld.prototype=new $l,j.constructor=ld;function ud(){}ud.prototype=j,j.eL=(function(){return this.dA||=(this.dz=cd(),!0),this.dz}),j.bN=(function(){return hn}),new P().i(ld,`io.github.nguyenyou.webawesome.laminar.Divider$`,{ct:1,X:1,W:1});var dd;function fd(){return dd||=new ld,dd}function pd(){this.aL=null,this.aI=null,this.aJ=!1,this.aK=null,this.aM=!1,Zl(this,`wa-dropdown`)}j=pd.prototype=new $l,j.constructor=pd;function md(){}md.prototype=j,j.bN=(function(){return ki}),new P().i(pd,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{cu:1,X:1,W:1});var hd;function gd(){return hd||=new pd,hd}function _d(){this.aL=null,this.aI=null,this.aJ=!1,this.aK=null,this.aM=!1,this.dD=null,this.dE=!1,Zl(this,`wa-dropdown-item`)}j=_d.prototype=new $l,j.constructor=_d;function vd(){}vd.prototype=j,j.aZ=(function(){return this.dE||=(this.dD=(X(),El(new Dl,`value`,Mo().b0)),!0),this.dD}),j.bN=(function(){return vn}),new P().i(_d,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{cw:1,X:1,W:1});var yd;function bd(){return yd||=new _d,yd}function xd(e){if(e.al.Z)return e.al.Q().cC()+`[]`;for(var t=e.al.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Sd(e){this.ca=null,this.al=e}j=Sd.prototype=new M,j.constructor=Sd;function Cd(){}Cd.prototype=j,j.s=(function(){return(this.al.Y?`interface `:this.al.X?``:`class `)+this.al.N}),j.cC=(function(){return this.ca===null&&(this.ca=xd(this)),this.ca}),new P().i(Sd,`java.lang.Class`,{cD:1,a:1,L:1});function K(e,t){return uu(e,t,null,!0,!0),e}var q=class extends du{};new P().i(q,`java.lang.Exception`,{K:1,u:1,a:1});function wd(){}j=wd.prototype=new M,j.constructor=wd;function Td(){}Td.prototype=j;function Ed(){this.f6=null,Od=this,this.f6=Hd()}j=Ed.prototype=new Tu,j.constructor=Ed;function Dd(){}Dd.prototype=j,new P().i(Ed,`scala.Predef$`,{dd:1,d7:1,d8:1});var Od;function kd(){return Od||=new Ed,Od}function Ad(e,t){return e.bJ=t,e}function jd(){this.bJ=null}j=jd.prototype=new M,j.constructor=jd;function Md(){}Md.prototype=j,j.cB=(function(e){return this.bJ.cA(e,Dh())}),j.cy=(function(e){return this.bJ.cA(e,Dh())});function Nd(e,t){return new Fp(e).ft(t)}function Pd(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?J().v:new zp(e,r,i)}function Fd(e,t){for(var n=t.m();e.r()&&n.r();)if(!H().K(e.g(),n.g()))return!1;return e.r()===n.r()}function Id(){this.v=null,Rd=this,this.v=new kp}j=Id.prototype=new M,j.constructor=Id;function Ld(){}Ld.prototype=j,new P().i(Id,`scala.collection.Iterator$`,{dx:1,Y:1,a:1});var Rd;function J(){return Rd||=new Id,Rd}function zd(){}j=zd.prototype=new M,j.constructor=zd;function Bd(){}Bd.prototype=j,new P().i(zd,`scala.collection.immutable.Map$`,{dL:1,dC:1,a:1});var Vd;function Hd(){return Vd||=new zd,Vd}function Ud(e){this.dY=null,this.dY=e}j=Ud.prototype=new Ou,j.constructor=Ud;function Wd(){}Wd.prototype=j,j.az=(function(){return(0,this.dY)()}),new P().i(Ud,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{e6:1,b3:1,at:1});function Y(e){this.dZ=null,this.dZ=e}j=Y.prototype=new Au,j.constructor=Y;function Gd(){}Gd.prototype=j,j.f=(function(e){return(0,this.dZ)(e)}),new P().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{e7:1,b4:1,e:1});var Kd=new P().i(0,`scala.runtime.Nothing$`,{ed:1,u:1,a:1});function qd(){}j=qd.prototype=new M,j.constructor=qd;function Jd(){}Jd.prototype=j,j.fW=(function(e){return(t=>e.f(t))}),new P().i(qd,`scala.scalajs.js.Any$`,{ei:1,ej:1,ek:1});var Yd;function Xd(){return Yd||=new qd,Yd}function Zd(){}j=Zd.prototype=new Ou,j.constructor=Zd;function Qd(){}Qd.prototype=j;function $d(){}j=$d.prototype=new Au,j.constructor=$d;function ef(){}ef.prototype=j;function tf(){}j=tf.prototype=new Mu,j.constructor=tf;function nf(){}nf.prototype=j;function rf(){}j=rf.prototype=new Pu,j.constructor=rf;function af(){}af.prototype=j;function of(e,t,n,r){if(this.cJ=null,r===null)throw new dp;this.cJ=void 0}j=of.prototype=new M,j.constructor=of;function sf(){}sf.prototype=j,j.s=(function(){return pa(this)}),new P().i(of,`com.raquo.airstream.core.Observer$$anon$8`,{bb:1,bc:1,b8:1,b9:1});function cf(e){if(this.cV=null,this.cW=!1,this.eT=null,e===null)throw new dp;Fo(this)}j=cf.prototype=new M,j.constructor=cf;function lf(){}lf.prototype=j,j.gR=(function(){return this.cW||=(this.cV=new ql(`svg`,!1),!0),this.cV}),new P().i(cf,`com.raquo.laminar.api.Laminar$svg$`,{bv:1,bT:1,bE:1,bG:1});function uf(){this.u=null,ff=this,this.u=new Rh}j=uf.prototype=new M,j.constructor=uf;function df(){}df.prototype=j,new P().i(uf,`com.raquo.laminar.api.package$`,{by:1,ab:1,ac:1,aa:1});var ff;function X(){return ff||=new uf,ff}function pf(e,t,n){return e.b1=t,e.b2=n,e}function mf(){this.b1=null,this.b2=null}j=mf.prototype=new Wo,j.constructor=mf;function hf(){}hf.prototype=j,j.z=(function(e){return new Yu(this,Ii(e),new Gf(((e,t,n)=>{vo().gI(e,t,n)})))});function gf(e){this.ds=null,this.c8=null,this.ds=Q(),this.c8=vo().fw(e)}j=gf.prototype=new M,j.constructor=gf;function _f(){}_f.prototype=j,j.eP=(function(e){this.ds=e}),j.eS=(function(e){}),j.a1=(function(e){ds().bO(e,this,void 0)}),j.gU=(function(){return this.c8.data}),j.aA=(function(){return this.c8}),new P().i(gf,`com.raquo.laminar.nodes.TextNode`,{cm:1,a4:1,S:1,ae:1});function vf(){}j=vf.prototype=new M,j.constructor=vf;function yf(){}yf.prototype=j;function bf(e,t){return e===t}function xf(e){return e?1231:1237}var Sf=new P().i(0,`java.lang.Boolean`,{cB:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function Cf(e){return e}function wf(e,t){return t instanceof ji&&e===t.c}var Tf=new P().i(0,`java.lang.Character`,{am:1,a:1,P:1,L:1},(e=>e instanceof ji)),Ef=class extends q{};function Df(){this.p=null,this.p=``}j=Df.prototype=new M,j.constructor=Df;function Of(){}Of.prototype=j,j.fh=(function(e){var t=lu().gi(e,0,e.a.length);return this.p=``+this.p+t,this}),j.s=(function(){return this.p}),j.j=(function(){return this.p.length}),j.em=(function(e){return this.p.charCodeAt(e)}),new P().i(Df,`java.lang.StringBuilder`,{cQ:1,a6:1,ak:1,a:1});function kf(){}j=kf.prototype=new Td,j.constructor=kf;function Af(){}Af.prototype=j;function jf(){}j=jf.prototype=new M,j.constructor=jf;function Mf(){}Mf.prototype=j,j.s=(function(){return`<function1>`}),j.fl=(function(e){throw new xp(e)}),j.f=(function(e){this.fl(e)}),new P().i(jf,`scala.PartialFunction$$anon$1`,{dc:1,g:1,e:1,a:1});function Nf(){}j=Nf.prototype=new M,j.constructor=Nf;function Pf(){}Pf.prototype=j,j.m=(function(){return this}),j.bQ=(function(e){return this.bt(e,-1)}),j.bt=(function(e,t){return Pd(this,e,t)}),j.s=(function(){return`<iterator>`}),j.be=(function(e,t,n,r){return Gc(this,e,t,n,r)}),j.y=(function(){return-1});function Ff(e,t){return e.bK=t,e}function If(){this.bK=null}j=If.prototype=new M,j.constructor=If;function Lf(){}Lf.prototype=j,j.e9=(function(e){return this.bK.cy(e)}),j.eA=(function(e){return this.bK.cB(e)}),j.cB=(function(e){return this.eA(e)}),j.cy=(function(e){return this.e9(e)});function Rf(e){return e.aV(0)===0}function zf(e,t){var n=e.y();if(n!==-1)var r=t.y(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Fd(e.m(),t)}function Bf(e){this.e2=null,this.e2=e}j=Bf.prototype=new Qd,j.constructor=Bf;function Vf(){}Vf.prototype=j,j.az=(function(){return(0,this.e2)()}),new P().i(Bf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ep:1,eo:1,b3:1,at:1});function Z(e){this.e3=null,this.e3=e}j=Z.prototype=new ef,j.constructor=Z;function Hf(){}Hf.prototype=j,j.f=(function(e){return(0,this.e3)(e)}),new P().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{er:1,eq:1,b4:1,e:1});function Uf(e){this.e4=null,this.e4=e}j=Uf.prototype=new nf,j.constructor=Uf;function Wf(){}Wf.prototype=j,j.cw=(function(e,t){return(0,this.e4)(e,t)}),new P().i(Uf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{et:1,es:1,e8:1,d5:1});function Gf(e){this.e5=null,this.e5=e}j=Gf.prototype=new af,j.constructor=Gf;function Kf(){}Kf.prototype=j,j.fk=(function(e,t,n){return(0,this.e5)(e,t,n)}),new P().i(Gf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{ev:1,eu:1,e9:1,d6:1});function qf(e,t){this.bB=null,this.c3=null,this.bB=e,this.c3=t}j=qf.prototype=new M,j.constructor=qf;function Jf(){}Jf.prototype=j,j.a1=(function(e){var t=this.c3;t!==void 0&&t.eG(e,this.bB),ds().bO(e,this.bB,void 0)}),j.h1=(function(e){return new qf(this.bB,e.fj(this.c3))});var Yf=new P().i(qf,`com.raquo.laminar.inserters.StaticChildInserter`,{bX:1,S:1,bV:1,bZ:1,bU:1});function Xf(e){e.c6=new io(new Bf((()=>{e.aH.e7()})),new Bf((()=>{e.aH.fx()})))}function Zf(e,t){$f(e,e.bF,t)&&ep(e,t)}function Qf(e,t){var n=e.bF;e.bF=t,$f(e,n,t)||ep(e,t)}function $f(e,t,n){var r=!t.i()&&!t.x().bR().F.i(),i=!n.i()&&!n.x().bR().F.i();return r&&!i}function ep(e,t){tp(e,t.i()?Q():new Sm(t.x().bR()))}function tp(e,t){if(t.i())e.c6.fr();else{var n=t.x();e.c6.gJ(n)}}function np(){}j=np.prototype=new yf,j.constructor=np;function rp(){}rp.prototype=j;var ip=class extends Ef{constructor(e){super(),uu(this,e,null,!0,!0)}};new P().i(ip,`java.lang.ArithmeticException`,{cA:1,Q:1,K:1,u:1,a:1});var ap=new P().i(0,`java.lang.Byte`,{cC:1,T:1,a:1,P:1,L:1},(e=>Gi(e))),op=class extends Ef{constructor(e){super(),uu(this,e,null,!0,!0)}};new P().i(op,`java.lang.IllegalArgumentException`,{cG:1,Q:1,K:1,u:1,a:1});function sp(e,t){return uu(e,t,null,!0,!0),e}var cp=class extends Ef{};new P().i(cp,`java.lang.IndexOutOfBoundsException`,{ao:1,Q:1,K:1,u:1,a:1});function lp(){}j=lp.prototype=new yf,j.constructor=lp;function up(){}up.prototype=j,new P().i(lp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cJ:1,aj:1,ah:1,al:1,ai:1});var dp=class extends Ef{constructor(){super(),uu(this,null,null,!0,!0)}};new P().i(dp,`java.lang.NullPointerException`,{cK:1,Q:1,K:1,u:1,a:1});var fp=new P().i(0,`java.lang.Short`,{cL:1,T:1,a:1,P:1,L:1},(e=>Ki(e))),pp=class extends Ef{constructor(e){super(),uu(this,e,null,!0,!0)}};new P().i(pp,`java.lang.UnsupportedOperationException`,{cT:1,Q:1,K:1,u:1,a:1});var mp=class extends Ef{constructor(e){super(),uu(this,e,null,!0,!0)}};new P().i(mp,`java.util.NoSuchElementException`,{cX:1,Q:1,K:1,u:1,a:1});function hp(){}j=hp.prototype=new Af,j.constructor=hp;function gp(){}gp.prototype=j,j.f=(function(e){return e}),j.s=(function(){return`generalized constraint`}),new P().i(hp,`scala.$less$colon$less$$anon$1`,{d2:1,cZ:1,d0:1,e:1,a:1});function _p(e){return e.cf||=(e.cg=e.bI===null?`null`:bp(e),!0),e.cg}function vp(e){return e.cf?e.cg:_p(e)}function yp(e){var t=e.bI;return`of class `+Ni(t)}function bp(e){try{return e.bI+` (`+yp(e)+`)`}catch{return`an instance `+yp(e)}}var xp=class extends Ef{constructor(e){super(),this.cg=null,this.bI=null,this.cf=!1,this.bI=e,uu(this,null,null,!0,!0)}bo(){return vp(this)}};new P().i(xp,`scala.MatchError`,{d9:1,Q:1,K:1,u:1,a:1});function Sp(){}j=Sp.prototype=new M,j.constructor=Sp;function Cp(){}Cp.prototype=j,j.i=(function(){return this===Q()}),j.y=(function(){return this.i()?0:1}),j.m=(function(){return this.i()?J().v:new jp(this.x())});function wp(e){this.b6=0,this.dR=0,this.dQ=null,this.dQ=e,this.b6=0,this.dR=e.ai()}j=wp.prototype=new Pf,j.constructor=wp;function Tp(){}Tp.prototype=j,j.r=(function(){return this.b6<this.dR}),j.g=(function(){var e=this.dQ.aj(this.b6);return this.b6=1+this.b6|0,e}),new P().i(wp,`scala.Product$$anon$1`,{de:1,r:1,s:1,b:1,c:1});function Ep(e){this.bJ=null,Ad(this,e)}j=Ep.prototype=new Md,j.constructor=Ep;function Dp(){}Dp.prototype=j,new P().i(Ep,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dt:1,ds:1,Y:1,a:1,a7:1});function Op(e){return Wc(e,e.aT()+`(`,`, `,`)`)}function kp(){}j=kp.prototype=new Pf,j.constructor=kp;function Ap(){}Ap.prototype=j,j.r=(function(){return!1}),j.gk=(function(){throw new mp(`next on empty iterator`)}),j.y=(function(){return 0}),j.bt=(function(e,t){return this}),j.g=(function(){this.gk()}),new P().i(kp,`scala.collection.Iterator$$anon$19`,{dy:1,r:1,s:1,b:1,c:1});function jp(e){this.b8=!1,this.dV=null,this.dV=e,this.b8=!1}j=jp.prototype=new Pf,j.constructor=jp;function Mp(){}Mp.prototype=j,j.r=(function(){return!this.b8}),j.g=(function(){return this.b8?J().v.g():(this.b8=!0,this.dV)}),j.bt=(function(e,t){return this.b8||e>0||t===0?J().v:this}),new P().i(jp,`scala.collection.Iterator$$anon$20`,{dz:1,r:1,s:1,b:1,c:1});function Np(e){for(;;){if(e.C instanceof Fp){var t=e.C;e.C=t.C,e.a6=t.a6,t.O!==null&&(e.N===null&&(e.N=t.N),t.N.b9=e.O,e.O=t.O);continue}return}}function Pp(e){for(;;)if(e.O===null)return e.C=null,e.N=null,!1;else{if(e.C=e.O.g6(),e.N===e.O&&(e.N=e.N.b9),e.O=e.O.b9,Np(e),e.a6)return!0;if(e.C!==null&&e.C.r())return e.a6=!0,!0}}function Fp(e){this.C=null,this.O=null,this.N=null,this.a6=!1,this.C=e,this.O=null,this.N=null,this.a6=!1}j=Fp.prototype=new Pf,j.constructor=Fp;function Ip(){}Ip.prototype=j,j.r=(function(){return this.a6?!0:this.C===null?!1:this.C.r()?(this.a6=!0,!0):Pp(this)}),j.g=(function(){return this.r()?(this.a6=!1,this.C.g()):J().v.g()}),j.ft=(function(e){var t=new Kc(e,null);return this.O===null?(this.O=t,this.N=t):(this.N.b9=t,this.N=t),this.C===null&&(this.C=J().v),this}),new P().i(Fp,`scala.collection.Iterator$ConcatIterator`,{az:1,r:1,s:1,b:1,c:1});function Lp(e){for(;e.a0>0;)e.a7.r()?(e.a7.g(),e.a0=-1+e.a0|0):e.a0=0}function Rp(e,t){if(e.I<0)return-1;var n=e.I-t|0;return n<0?0:n}function zp(e,t,n){this.a7=null,this.I=0,this.a0=0,this.a7=e,this.I=n,this.a0=t}j=zp.prototype=new Pf,j.constructor=zp;function Bp(){}Bp.prototype=j,j.y=(function(){var e=this.a7.y();if(e<0)return-1;var t=e-this.a0|0,n=t<0?0:t;if(this.I<0)return n;var r=this.I;return r<n?r:n}),j.r=(function(){return Lp(this),this.I!==0&&this.a7.r()}),j.g=(function(){return Lp(this),this.I>0?(this.I=-1+this.I|0,this.a7.g()):this.I<0?this.a7.g():J().v.g()}),j.bt=(function(e,t){var n=e>0?e:0;if(t<0)var r=Rp(this,n);else if(t<=n)var r=0;else if(this.I<0)var r=t-n|0;else var i=Rp(this,n),a=t-n|0,r=i<a?i:a;var o=this.a0+n|0;return r===0?J().v:o<0?(this.a0=2147483647,this.I=0,Nd(this,new Ud((()=>new zp(this.a7,-2147483647+o|0,r))))):(this.a0=o,this.I=r,this)}),new P().i(zp,`scala.collection.Iterator$SliceIterator`,{dB:1,r:1,s:1,b:1,c:1});function Vp(e,t){if(t<0)throw sp(new cp,``+t);var n=e.fE(t);if(n.i())throw sp(new cp,``+t);return n.V()}function Hp(e,t){return Ph(t)?Up(e,e,t):zf(e,t)}function Up(e,t,n){for(;;)if(t===n)return!0;else if(!t.i()&&!n.i()&&H().K(t.V(),n.V())){var r=t.L(),i=n.L();t=r,n=i}else return t.i()&&n.i()}function Wp(e){this.bb=null,this.bb=e}j=Wp.prototype=new Pf,j.constructor=Wp;function Gp(){}Gp.prototype=j,j.r=(function(){return!this.bb.i()}),j.g=(function(){var e=this.bb.V();return this.bb=this.bb.L(),e}),new P().i(Wp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dG:1,r:1,s:1,b:1,c:1});function Kp(){this.bK=null,Ff(this,tm())}j=Kp.prototype=new Lf,j.constructor=Kp;function qp(){}qp.prototype=j,new P().i(Kp,`scala.collection.mutable.Buffer$`,{dQ:1,dD:1,a7:1,Y:1,a:1});var Jp;function Yp(){return Jp||=new Kp,Jp}function Xp(e){this.bd=0,this.e0=0,this.e1=null,this.e1=e,this.bd=0,this.e0=e.ai()}j=Xp.prototype=new Pf,j.constructor=Xp;function Zp(){}Zp.prototype=j,j.r=(function(){return this.bd<this.e0}),j.g=(function(){var e=this.e1.aj(this.bd);return this.bd=1+this.bd|0,e}),new P().i(Xp,`scala.runtime.ScalaRunTime$$anon$1`,{eg:1,r:1,s:1,b:1,c:1});function Qp(){}j=Qp.prototype=new M,j.constructor=Qp;function $p(){}$p.prototype=j,j.cy=(function(e){return this.eB(e)}),j.eB=(function(e){return Eu(n_(new r_),e).eN()}),j.cB=(function(e){return this.eB(e)}),new P().i(Qp,`scala.scalajs.js.WrappedArray$`,{em:1,dH:1,a7:1,Y:1,a:1});var em;function tm(){return em||=new Qp,em}var nm=class e extends Hu{constructor(e,t){super(),this.aC=null,this.aB=0,this.aC=e,this.aB=t,uu(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aX(){return new wp(this)}o(){var e=-889275714;return e=W().b(e,hm(`TransactionDepthExceeded`)),e=W().b(e,W().w(this.aC)),e=W().b(e,this.aB),W().l(e,2)}h(t){return this===t?!0:t instanceof e&&this.aB===t.aB?this.aC===t.aC:!1}ai(){return 2}ak(){return`TransactionDepthExceeded`}aj(e){if(e===0)return this.aC;if(e===1)return this.aB;throw sp(new cp,``+e)}s(){return`TransactionDepthExceeded: `+this.aC+`; maxDepth: `+this.aB}};new P().i(nm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a9:1,b6:1,u:1,a:1,d:1,U:1});function rm(e){this.b1=null,this.b2=null,this.da=null,this.db=!1,pf(this,e,Xg())}j=rm.prototype=new hf,j.constructor=rm;function im(){}im.prototype=j,j.cz=(function(){return this.db||=(this.da=this.z(`center`),!0),this.da}),new P().i(rm,`com.raquo.laminar.defs.styles.StyleProps$$anon$14`,{bK:1,a3:1,R:1,a1:1,a2:1,bR:1});function am(e,t){this.bF=null,this.aH=null,this.c6=null,this.dn=null,this.Z=null,this.dn=e,this.Z=t,this.bF=Q(),Ul(this),Xf(this)}j=am.prototype=new M,j.constructor=am;function om(){}om.prototype=j,j.a1=(function(e){ds().bO(e,this,void 0)}),j.bR=(function(){return this.aH}),j.eo=(function(e){this.aH=e}),j.eS=(function(e){Zf(this,e)}),j.eP=(function(e){Qf(this,e)}),j.s=(function(){return`ReactiveHtmlElement(`+(this.Z===null?`tag=`+this.dn.cD():this.Z.outerHTML)+`)`}),j.aA=(function(){return this.Z}),new P().i(am,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cj:1,a4:1,S:1,ae:1,af:1,ci:1});function sm(e,t){return Object.is(e,t)}function cm(e){return As().cE(e)}var lm=new P().i(0,`java.lang.Double`,{an:1,T:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),um=new P().i(0,`java.lang.Float`,{cE:1,T:1,a:1,P:1,L:1,V:1},(e=>Ji(e))),dm=new P().i(0,`java.lang.Integer`,{cH:1,T:1,a:1,P:1,L:1,V:1},(e=>qi(e)));function fm(e,t){return t instanceof z&&e.c===t.c&&e.d===t.d}function pm(e){return e.c^e.d}var mm=new P().i(0,`java.lang.Long`,{ap:1,T:1,a:1,P:1,L:1,V:1},(e=>e instanceof z));function hm(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function gm(e,t){return e===t}var _m=new P().i(0,`java.lang.String`,{cO:1,a:1,P:1,a6:1,L:1,V:1},(e=>typeof e==`string`)),vm=class extends cp{constructor(){super(),uu(this,null,null,!0,!0)}};new P().i(vm,`java.lang.StringIndexOutOfBoundsException`,{cR:1,ao:1,Q:1,K:1,u:1,a:1});function ym(){}j=ym.prototype=new Cp,j.constructor=ym;function bm(){}bm.prototype=j,j.fX=(function(){throw new mp(`None.get`)}),j.ak=(function(){return`None`}),j.ai=(function(){return 0}),j.aj=(function(e){return W().bp(e)}),j.aX=(function(){return new Xp(this)}),j.o=(function(){return 2433880}),j.s=(function(){return`None`}),j.x=(function(){this.fX()}),new P().i(ym,`scala.None$`,{da:1,au:1,b:1,U:1,d:1,a:1});var xm;function Q(){return xm||=new ym,xm}function Sm(e){this.b7=null,this.b7=e}j=Sm.prototype=new Cp,j.constructor=Sm;function Cm(){}Cm.prototype=j,j.x=(function(){return this.b7}),j.ak=(function(){return`Some`}),j.ai=(function(){return 1}),j.aj=(function(e){return e===0?this.b7:W().bp(e)}),j.aX=(function(){return new Xp(this)}),j.o=(function(){return G().eM(this,-889275714,!1)}),j.s=(function(){return U().fc(this)}),j.h=(function(e){return this===e||e instanceof Sm&&H().K(this.b7,e.b7)}),new P().i(Sm,`scala.Some`,{av:1,au:1,b:1,U:1,d:1,a:1});function wm(){}j=wm.prototype=new M,j.constructor=wm;function Tm(){}Tm.prototype=j,j.aT=(function(){return this.aY()}),j.Y=(function(e){Uc(this,e)}),j.be=(function(e,t,n,r){return Gc(this,e,t,n,r)}),j.y=(function(){return-1});function Em(e,t){return e.H=t,e.e=0,e.B=xc().aU(e.H),e}function Dm(){this.H=null,this.e=0,this.B=0}j=Dm.prototype=new Pf,j.constructor=Dm;function Om(){}Om.prototype=j,j.y=(function(){return this.B-this.e|0}),j.r=(function(){return this.e<this.B}),j.g=(function(){this.e>=xc().aU(this.H)&&J().v.g();var e=U().aS(this.H,this.e);return this.e=1+this.e|0,e}),j.bQ=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.B;else var r=this.B,n=r<t?r:t;this.e=n}return this}),new P().i(Dm,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function km(e,t){return t<0?0:t>e.R?e.R:t}function Am(e){this.dU=null,this.a5=0,this.R=0,this.dU=e,this.a5=0,this.R=e.j()}j=Am.prototype=new Pf,j.constructor=Am;function jm(){}jm.prototype=j,j.y=(function(){return this.R}),j.r=(function(){return this.R>0}),j.g=(function(){if(this.R>0){var e=this.dU.n(this.a5);return this.a5=1+this.a5|0,this.R=-1+this.R|0,e}else return J().v.g()}),j.bQ=(function(e){if(e>0){this.a5=this.a5+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),j.bt=(function(e,t){var n=km(this,e),r=km(this,t)-n|0;return this.R=r<0?0:r,this.a5=this.a5+n|0,this}),new P().i(Am,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dw:1,r:1,s:1,b:1,c:1,a:1});function Mm(e){return e.cq||=(e.cr=new hg(new N(0)),!0),e.cr}function Nm(e){return e.cq?e.cr:Mm(e)}function Pm(){this.cr=null,this.f7=null,this.cq=!1,Im=this,this.f7=new Ep(this)}j=Pm.prototype=new M,j.constructor=Pm;function Fm(){}Fm.prototype=j,j.fU=(function(e,t){return e instanceof Zh?e:this.eQ(yu().ez(e,t))}),j.eQ=(function(e){if(e===null)return null;if(e instanceof N)return new hg(e);if(e instanceof ia)return new dg(e);if(e instanceof sa)return new sg(e);if(e instanceof aa)return new pg(e);if(e instanceof oa)return new lg(e);if(e instanceof ta)return new ag(e);if(e instanceof na)return new rg(e);if(e instanceof ra)return new _g(e);if(e instanceof ea)return new tg(e);if(hc(e,1))return new yg(e);throw new xp(e)}),j.cA=(function(e,t){return this.fU(e,t)}),new P().i(Pm,`scala.collection.immutable.ArraySeq$`,{dK:1,aB:1,ax:1,aw:1,ay:1,a:1});var Im;function Lm(){return Im||=new Pm,Im}function Rm(){this.f8=null,this.dX=null,Bm=this,this.f8=new Ep(this),this.dX=new zg(new N(0))}j=Rm.prototype=new M,j.constructor=Rm;function zm(){}zm.prototype=j,j.fV=(function(e,t){return this.gd(yu().ez(e,t))}),j.gd=(function(e){if(e===null)return null;if(e instanceof N)return new zg(e);if(e instanceof ia)return new Fg(e);if(e instanceof sa)return new jg(e);if(e instanceof aa)return new Lg(e);if(e instanceof oa)return new Ng(e);if(e instanceof ta)return new kg(e);if(e instanceof na)return new Dg(e);if(e instanceof ra)return new Vg(e);if(e instanceof ea)return new Tg(e);if(hc(e,1))return new Ug(e);throw new xp(e)}),j.cA=(function(e,t){return this.fV(e,t)}),new P().i(Rm,`scala.collection.mutable.ArraySeq$`,{dO:1,aB:1,ax:1,aw:1,ay:1,a:1});var Bm;function Vm(){return Bm||=new Rm,Bm}function Hm(e){this.b1=null,this.b2=null,this.dc=null,this.dd=!1,pf(this,e,Xg())}j=Hm.prototype=new hf,j.constructor=Hm;function Um(){}Um.prototype=j,j.fR=(function(){return this.dd||=(this.dc=this.z(`flex`),!0),this.dc}),new P().i(Hm,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bL:1,a3:1,R:1,a1:1,a2:1,bP:1,bN:1});function Wm(e){this.b1=null,this.b2=null,this.de=null,this.df=!1,pf(this,e,Xg())}j=Wm.prototype=new hf,j.constructor=Wm;function Gm(){}Gm.prototype=j,j.cz=(function(){return this.df||=(this.de=this.z(`center`),!0),this.de}),new P().i(Wm,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bM:1,a3:1,R:1,a1:1,a2:1,bQ:1,bO:1});function Km(){}j=Km.prototype=new rp,j.constructor=Km;function qm(){}qm.prototype=j;function Jm(e){this.H=null,this.e=0,this.B=0,this.ch=null,this.ch=e,Em(this,e)}j=Jm.prototype=new Om,j.constructor=Jm;function Ym(){}Ym.prototype=j,j.gl=(function(){this.e>=this.ch.a.length&&J().v.g();var e=this.ch.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.gl()}),new P().i(Jm,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{di:1,M:1,r:1,s:1,b:1,c:1,a:1});function Xm(e){this.H=null,this.e=0,this.B=0,this.ci=null,this.ci=e,Em(this,e)}j=Xm.prototype=new Om,j.constructor=Xm;function Zm(){}Zm.prototype=j,j.gm=(function(){this.e>=this.ci.a.length&&J().v.g();var e=this.ci.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return Yi(this.gm())}),new P().i(Xm,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dj:1,M:1,r:1,s:1,b:1,c:1,a:1});function Qm(e){this.H=null,this.e=0,this.B=0,this.cj=null,this.cj=e,Em(this,e)}j=Qm.prototype=new Om,j.constructor=Qm;function $m(){}$m.prototype=j,j.gn=(function(){this.e>=this.cj.a.length&&J().v.g();var e=this.cj.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.gn()}),new P().i(Qm,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dk:1,M:1,r:1,s:1,b:1,c:1,a:1});function eh(e){this.H=null,this.e=0,this.B=0,this.ck=null,this.ck=e,Em(this,e)}j=eh.prototype=new Om,j.constructor=eh;function th(){}th.prototype=j,j.go=(function(){this.e>=this.ck.a.length&&J().v.g();var e=this.ck.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.go()}),new P().i(eh,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dl:1,M:1,r:1,s:1,b:1,c:1,a:1});function nh(e){this.H=null,this.e=0,this.B=0,this.cl=null,this.cl=e,Em(this,e)}j=nh.prototype=new Om,j.constructor=nh;function rh(){}rh.prototype=j,j.gp=(function(){this.e>=this.cl.a.length&&J().v.g();var e=this.cl.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.gp()}),new P().i(nh,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dm:1,M:1,r:1,s:1,b:1,c:1,a:1});function ih(e){this.H=null,this.e=0,this.B=0,this.cm=null,this.cm=e,Em(this,e)}j=ih.prototype=new Om,j.constructor=ih;function ah(){}ah.prototype=j,j.gq=(function(){this.e>=this.cm.a.length&&J().v.g();var e=this.cm.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new z(t,n)}),j.g=(function(){return this.gq()}),new P().i(ih,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dn:1,M:1,r:1,s:1,b:1,c:1,a:1});function oh(e){this.H=null,this.e=0,this.B=0,this.cn=null,this.cn=e,Em(this,e)}j=oh.prototype=new Om,j.constructor=oh;function sh(){}sh.prototype=j,j.gr=(function(){this.e>=this.cn.a.length&&J().v.g();var e=this.cn.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.gr()}),new P().i(oh,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dp:1,M:1,r:1,s:1,b:1,c:1,a:1});function ch(e){this.H=null,this.e=0,this.B=0,this.dT=null,this.dT=e,Em(this,e)}j=ch.prototype=new Om,j.constructor=ch;function lh(){}lh.prototype=j,j.gs=(function(){this.e>=this.dT.a.length&&J().v.g(),this.e=1+this.e|0}),j.g=(function(){this.gs()}),new P().i(ch,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dq:1,M:1,r:1,s:1,b:1,c:1,a:1});function uh(e){this.H=null,this.e=0,this.B=0,this.co=null,this.co=e,Em(this,e)}j=uh.prototype=new Om,j.constructor=uh;function dh(){}dh.prototype=j,j.gt=(function(){this.e>=this.co.a.length&&J().v.g();var e=this.co.a[this.e];return this.e=1+this.e|0,e}),j.g=(function(){return this.gt()}),new P().i(uh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dr:1,M:1,r:1,s:1,b:1,c:1,a:1});function fh(e){return e.aT()+`(<not computed>)`}function ph(){}j=ph.prototype=new M,j.constructor=ph;function mh(){}mh.prototype=j;var hh=class e extends Ef{constructor(e){super(),this.S=null,this.S=e,uu(this,null,null,!0,!0)}bo(){return Ii(this.S)}ak(){return`JavaScriptException`}ai(){return 1}aj(e){return e===0?this.S:W().bp(e)}aX(){return new Xp(this)}o(){return G().eM(this,-889275714,!1)}h(t){return this===t||t instanceof e&&H().K(this.S,t.S)}};new P().i(hh,`scala.scalajs.js.JavaScriptException`,{b5:1,Q:1,K:1,u:1,a:1,U:1,d:1});function gh(e,t){typeof console<`u`&&(e.dG&&console.error?console.error(t):console.log(t))}function _h(e){this.dG=!1,this.b4=null,this.dG=e,new lp,this.b4=``}j=_h.prototype=new qm,j.constructor=_h;function vh(){}vh.prototype=j,j.ga=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b4=``+this.b4+t,t=``;else{var r=this.b4,i=t;gh(this,``+r+i.substring(0,n)),this.b4=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new P().i(_h,`java.lang.JSConsoleBasedPrintStream`,{cI:1,cz:1,cy:1,aj:1,ah:1,al:1,ai:1,ak:1});function yh(e,t,n){for(;;)if(t<=0||n.i())return n;else{var r=-1+t|0,i=n.L();t=r,n=i}}function bh(){this.cs=null}j=bh.prototype=new mh,j.constructor=bh;function xh(){}xh.prototype=j,j.s=(function(){return this.cs}),j.h=(function(e){return this===e}),j.o=(function(){return Wi(this)});function Sh(){}j=Sh.prototype=new Tm,j.constructor=Sh;function Ch(){}Ch.prototype=j,j.s=(function(){return fh(this)});function wh(){this.cs=null,this.cs=`Any`}j=wh.prototype=new xh,j.constructor=wh;function Th(){}Th.prototype=j,j.gF=(function(){return ca.l()}),j.gj=(function(e){return new N(e)}),new P().i(wh,`scala.reflect.ManifestFactory$AnyManifest$`,{e2:1,e4:1,e3:1,e1:1,e0:1,dZ:1,e5:1,a:1,d:1});var Eh;function Dh(){return Eh||=new wh,Eh}function $(e,t){return e===t?!0:Oh(t)&&t.el(e)?e.cG(t):!1}function Oh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function kh(){}j=kh.prototype=new Tm,j.constructor=kh;function Ah(){}Ah.prototype=j,j.el=(function(e){return!0}),j.h=(function(e){return $(this,e)}),j.o=(function(){return G().gG(this)}),j.s=(function(){return Op(this)}),j.i=(function(){return Rf(this)}),j.cG=(function(e){return zf(this,e)});function jh(){}j=jh.prototype=new Ch,j.constructor=jh;function Mh(){}Mh.prototype=j;function Nh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Ph(e){return!!(e&&e.$classData&&e.$classData.n.Z)}function Fh(e,t){return e.ba=t,e}function Ih(){this.ba=null}j=Ih.prototype=new Mh,j.constructor=Ih;function Lh(){}Lh.prototype=j,j.n=(function(e){return this.ba.n(e)}),j.j=(function(){return this.ba.j()}),j.i=(function(){return this.ba.i()});function Rh(){this.d1=null,this.d2=!1,this.cX=null,this.cY=!1,this.cZ=null,this.d0=!1,this.d7=null,this.d8=!1,this.eV=null,this.d3=null,this.d4=!1,this.eU=null,this.d5=null,this.d6=!1,No(this),Do(this),To(this),Eo(this)}j=Rh.prototype=new M,j.constructor=Rh;function zh(){}zh.prototype=j,j.ep=(function(){return this.d2||=(this.d1=Wl(new Gl,`div`,!1),!0),this.d1}),j.ff=(function(){return this.cY||=(this.cX=new Wm(`align-items`),!0),this.cX}),j.fB=(function(){return this.d0||=(this.cZ=new Hm(`display`),!0),this.cZ}),j.gV=(function(){return this.d8||=(this.d7=new rm(`text-align`),!0),this.d7}),j.gO=(function(){return this.d4||=(this.d3=El(new Dl,`style`,Mo().b0),!0),this.d3}),j.gQ=(function(){return this.d6||=(this.d5=new cf(this),!0),this.d5}),new P().i(Rh,`com.raquo.laminar.api.package$$anon$1`,{bz:1,bS:1,bD:1,bI:1,bH:1,bJ:1,bF:1,bx:1,bt:1,bw:1,ab:1,ac:1,aa:1,bu:1});function Bh(e){this.ba=null,Fh(this,e)}j=Bh.prototype=new Lh,j.constructor=Bh;function Vh(){}Vh.prototype=j,j.m=(function(){return new Am(this)}),j.aY=(function(){return`IndexedSeqView`}),j.aV=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),j.y=(function(){return this.j()}),new P().i(Bh,`scala.collection.IndexedSeqView$Id`,{dv:1,dF:1,df:1,dg:1,h:1,i:1,b:1,k:1,c:1,j:1,dI:1,a:1,dE:1,l:1,du:1,o:1});function Hh(){}j=Hh.prototype=new Ah,j.constructor=Hh;function Uh(){}Uh.prototype=j;function Wh(e,t){return!Kh(t)||e.j()===t.j()}function Gh(e,t){if(Kh(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.ea(),o=t.ea(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().K(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().bQ(i),m=t.m().bQ(i);r&&p.r();)r=H().K(p.g(),m.g())}return r}else return zf(e,t)}function Kh(e){return!!(e&&e.$classData&&e.$classData.n.w)}function qh(){}j=qh.prototype=new Ah,j.constructor=qh;function Jh(){}Jh.prototype=j;function Yh(){}j=Yh.prototype=new Jh,j.constructor=Yh;function Xh(){}Xh.prototype=j,j.e8=(function(e){return Eu(this,e)});function Zh(){}j=Zh.prototype=new Uh,j.constructor=Zh;function Qh(){}Qh.prototype=j,j.el=(function(e){return Wh(this,e)}),j.cG=(function(e){return Gh(this,e)}),j.aY=(function(){return`IndexedSeq`}),j.aV=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),j.y=(function(){return this.j()}),j.ge=(function(e){for(var t=new N(this.j()),n=0;n<t.a.length;)t.a[n]=e.f(this.n(n)),n=1+n|0;return Lm().eQ(t)}),j.aT=(function(){return`ArraySeq`}),j.ea=(function(){return 2147483647}),j.eD=(function(e){return this.ge(e)});function $h(){}j=$h.prototype=new Jh,j.constructor=$h;function eg(){}eg.prototype=j,j.aY=(function(){return`IndexedSeq`}),j.aV=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),j.y=(function(){return this.j()}),j.aT=(function(){return`ArraySeq`}),j.h=(function(e){return e instanceof $h&&xc().aU(this.T())!==xc().aU(e.T())?!1:$(this,e)});function tg(e){this.ap=null,this.ap=e}j=tg.prototype=new Qh,j.constructor=tg;function ng(){}ng.prototype=j,j.j=(function(){return this.ap.a.length}),j.o=(function(){var e=G();return e.ek(this.ap,e.t)}),j.h=(function(e){return e instanceof tg?R().ex(this.ap,e.ap):$(this,e)}),j.m=(function(){return new uh(this.ap)}),j.bn=(function(e){return this.ap.a[e]}),j.f=(function(e){return this.bn(e|0)}),j.n=(function(e){return this.bn(e)}),new P().i(tg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function rg(e){this.aq=null,this.aq=e}j=rg.prototype=new Qh,j.constructor=rg;function ig(){}ig.prototype=j,j.j=(function(){return this.aq.a.length}),j.bf=(function(e){return this.aq.a[e]}),j.o=(function(){var e=G();return e.ec(this.aq,e.t)}),j.h=(function(e){return e instanceof rg?R().eq(this.aq,e.aq):$(this,e)}),j.m=(function(){return new Jm(this.aq)}),j.f=(function(e){return this.bf(e|0)}),j.n=(function(e){return this.bf(e)}),new P().i(rg,`scala.collection.immutable.ArraySeq$ofByte`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function ag(e){this.a8=null,this.a8=e}j=ag.prototype=new Qh,j.constructor=ag;function og(){}og.prototype=j,j.j=(function(){return this.a8.a.length}),j.bg=(function(e){return this.a8.a[e]}),j.o=(function(){var e=G();return e.ed(this.a8,e.t)}),j.h=(function(e){return e instanceof ag?R().er(this.a8,e.a8):$(this,e)}),j.m=(function(){return new Xm(this.a8)}),j.be=(function(e,t,n,r){return new kg(this.a8).be(e,t,n,r)}),j.f=(function(e){return Yi(this.bg(e|0))}),j.n=(function(e){return Yi(this.bg(e))}),new P().i(ag,`scala.collection.immutable.ArraySeq$ofChar`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function sg(e){this.ar=null,this.ar=e}j=sg.prototype=new Qh,j.constructor=sg;function cg(){}cg.prototype=j,j.j=(function(){return this.ar.a.length}),j.o=(function(){var e=G();return e.ee(this.ar,e.t)}),j.h=(function(e){return e instanceof sg?R().es(this.ar,e.ar):$(this,e)}),j.m=(function(){return new Qm(this.ar)}),j.bi=(function(e){return this.ar.a[e]}),j.f=(function(e){return this.bi(e|0)}),j.n=(function(e){return this.bi(e)}),new P().i(sg,`scala.collection.immutable.ArraySeq$ofDouble`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function lg(e){this.as=null,this.as=e}j=lg.prototype=new Qh,j.constructor=lg;function ug(){}ug.prototype=j,j.j=(function(){return this.as.a.length}),j.o=(function(){var e=G();return e.ef(this.as,e.t)}),j.h=(function(e){return e instanceof lg?R().et(this.as,e.as):$(this,e)}),j.m=(function(){return new eh(this.as)}),j.bj=(function(e){return this.as.a[e]}),j.f=(function(e){return this.bj(e|0)}),j.n=(function(e){return this.bj(e)}),new P().i(lg,`scala.collection.immutable.ArraySeq$ofFloat`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function dg(e){this.at=null,this.at=e}j=dg.prototype=new Qh,j.constructor=dg;function fg(){}fg.prototype=j,j.j=(function(){return this.at.a.length}),j.o=(function(){var e=G();return e.eg(this.at,e.t)}),j.h=(function(e){return e instanceof dg?R().eu(this.at,e.at):$(this,e)}),j.m=(function(){return new nh(this.at)}),j.bk=(function(e){return this.at.a[e]}),j.f=(function(e){return this.bk(e|0)}),j.n=(function(e){return this.bk(e)}),new P().i(dg,`scala.collection.immutable.ArraySeq$ofInt`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function pg(e){this.au=null,this.au=e}j=pg.prototype=new Qh,j.constructor=pg;function mg(){}mg.prototype=j,j.j=(function(){return this.au.a.length}),j.o=(function(){var e=G();return e.eh(this.au,e.t)}),j.h=(function(e){return e instanceof pg?R().ev(this.au,e.au):$(this,e)}),j.m=(function(){return new ih(this.au)}),j.bl=(function(e){return this.au.a[e]}),j.f=(function(e){return this.bl(e|0)}),j.n=(function(e){return this.bl(e)}),new P().i(pg,`scala.collection.immutable.ArraySeq$ofLong`,{aK:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function hg(e){this.av=null,this.av=e}j=hg.prototype=new Qh,j.constructor=hg;function gg(){}gg.prototype=j,j.j=(function(){return this.av.a.length}),j.n=(function(e){return this.av.a[e]}),j.o=(function(){var e=G();return e.eb(this.av,e.t)}),j.h=(function(e){return e instanceof hg?yu().ey(this.av,e.av):$(this,e)}),j.m=(function(){return Em(new Dm,this.av)}),j.f=(function(e){return this.n(e|0)}),new P().i(hg,`scala.collection.immutable.ArraySeq$ofRef`,{aL:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function _g(e){this.aw=null,this.aw=e}j=_g.prototype=new Qh,j.constructor=_g;function vg(){}vg.prototype=j,j.j=(function(){return this.aw.a.length}),j.bh=(function(e){return this.aw.a[e]}),j.o=(function(){var e=G();return e.ei(this.aw,e.t)}),j.h=(function(e){return e instanceof _g?R().ew(this.aw,e.aw):$(this,e)}),j.m=(function(){return new oh(this.aw)}),j.f=(function(e){return this.bh(e|0)}),j.n=(function(e){return this.bh(e)}),new P().i(_g,`scala.collection.immutable.ArraySeq$ofShort`,{aM:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function yg(e){this.aR=null,this.aR=e}j=yg.prototype=new Qh,j.constructor=yg;function bg(){}bg.prototype=j,j.j=(function(){return this.aR.a.length}),j.o=(function(){var e=G();return e.ej(this.aR,e.t)}),j.h=(function(e){return e instanceof yg?this.aR.a.length===e.aR.a.length:$(this,e)}),j.m=(function(){return new ch(this.aR)}),j.bm=(function(e){}),j.f=(function(e){this.bm(e|0)}),j.n=(function(e){this.bm(e)}),new P().i(yg,`scala.collection.immutable.ArraySeq$ofUnit`,{aN:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function xg(e,t,n,r){for(;;)if(t===r)return n.i()?0:1;else if(n.i())return-1;else{var i=1+t|0,a=n.L();t=i,n=a}}function Sg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.i(),i=n.i();if(!(r||i)&&H().K(t.V(),n.V())){var a=t.L(),o=n.L();t=a,n=o}else return r&&i}}function Cg(){}j=Cg.prototype=new Uh,j.constructor=Cg;function wg(){}wg.prototype=j,j.m=(function(){return new Wp(this)}),j.aY=(function(){return`LinearSeq`}),j.n=(function(e){return Vp(this,e)}),j.cG=(function(e){return Hp(this,e)}),j.i=(function(){return this===Xg()}),j.gf=(function(e){if(this===Xg())return Xg();for(var t=new Gg(e.f(this.V()),Xg()),n=t,r=this.L();r!==Xg();){var i=new Gg(e.f(r.V()),Xg());n.bL=i,n=i,r=r.L()}return t}),j.Y=(function(e){for(var t=this;!t.i();)e.f(t.V()),t=t.L()}),j.j=(function(){for(var e=this,t=0;!e.i();)t=1+t|0,e=e.L();return t}),j.aV=(function(e){return e<0?1:xg(this,0,this,e)}),j.aT=(function(){return`List`}),j.h=(function(e){return e instanceof Cg?Sg(this,this,e):$(this,e)}),j.f=(function(e){return Vp(this,e|0)}),j.fE=(function(e){return yh(this,e,this)}),j.eD=(function(e){return this.gf(e)});function Tg(e){this.a9=null,this.a9=e}j=Tg.prototype=new eg,j.constructor=Tg;function Eg(){}Eg.prototype=j,j.j=(function(){return this.a9.a.length}),j.o=(function(){var e=G();return e.ek(this.a9,e.t)}),j.h=(function(e){return e instanceof Tg?R().ex(this.a9,e.a9):$h.prototype.h.call(this,e)}),j.m=(function(){return new uh(this.a9)}),j.bn=(function(e){return this.a9.a[e]}),j.f=(function(e){return this.bn(e|0)}),j.n=(function(e){return this.bn(e)}),j.T=(function(){return this.a9}),new P().i(Tg,`scala.collection.mutable.ArraySeq$ofBoolean`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Dg(e){this.aa=null,this.aa=e}j=Dg.prototype=new eg,j.constructor=Dg;function Og(){}Og.prototype=j,j.j=(function(){return this.aa.a.length}),j.bf=(function(e){return this.aa.a[e]}),j.o=(function(){var e=G();return e.ec(this.aa,e.t)}),j.h=(function(e){return e instanceof Dg?R().eq(this.aa,e.aa):$h.prototype.h.call(this,e)}),j.m=(function(){return new Jm(this.aa)}),j.f=(function(e){return this.bf(e|0)}),j.n=(function(e){return this.bf(e)}),j.T=(function(){return this.aa}),new P().i(Dg,`scala.collection.mutable.ArraySeq$ofByte`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function kg(e){this.P=null,this.P=e}j=kg.prototype=new eg,j.constructor=kg;function Ag(){}Ag.prototype=j,j.j=(function(){return this.P.a.length}),j.bg=(function(e){return this.P.a[e]}),j.o=(function(){var e=G();return e.ed(this.P,e.t)}),j.h=(function(e){return e instanceof kg?R().er(this.P,e.P):$h.prototype.h.call(this,e)}),j.m=(function(){return new Xm(this.P)}),j.be=(function(e,t,n,r){var i=e.J;t.length!==0&&(i.p=``+i.p+t);var a=this.P.a.length;if(a!==0)if(n===``)i.fh(this.P);else{i.j();var o=this.P.a[0],s=``+Bi(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.P.a[c],u=``+Bi(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),j.f=(function(e){return Yi(this.bg(e|0))}),j.n=(function(e){return Yi(this.bg(e))}),j.T=(function(){return this.P}),new P().i(kg,`scala.collection.mutable.ArraySeq$ofChar`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function jg(e){this.ab=null,this.ab=e}j=jg.prototype=new eg,j.constructor=jg;function Mg(){}Mg.prototype=j,j.j=(function(){return this.ab.a.length}),j.o=(function(){var e=G();return e.ee(this.ab,e.t)}),j.h=(function(e){return e instanceof jg?R().es(this.ab,e.ab):$h.prototype.h.call(this,e)}),j.m=(function(){return new Qm(this.ab)}),j.bi=(function(e){return this.ab.a[e]}),j.f=(function(e){return this.bi(e|0)}),j.n=(function(e){return this.bi(e)}),j.T=(function(){return this.ab}),new P().i(jg,`scala.collection.mutable.ArraySeq$ofDouble`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ng(e){this.ac=null,this.ac=e}j=Ng.prototype=new eg,j.constructor=Ng;function Pg(){}Pg.prototype=j,j.j=(function(){return this.ac.a.length}),j.o=(function(){var e=G();return e.ef(this.ac,e.t)}),j.h=(function(e){return e instanceof Ng?R().et(this.ac,e.ac):$h.prototype.h.call(this,e)}),j.m=(function(){return new eh(this.ac)}),j.bj=(function(e){return this.ac.a[e]}),j.f=(function(e){return this.bj(e|0)}),j.n=(function(e){return this.bj(e)}),j.T=(function(){return this.ac}),new P().i(Ng,`scala.collection.mutable.ArraySeq$ofFloat`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Fg(e){this.ad=null,this.ad=e}j=Fg.prototype=new eg,j.constructor=Fg;function Ig(){}Ig.prototype=j,j.j=(function(){return this.ad.a.length}),j.o=(function(){var e=G();return e.eg(this.ad,e.t)}),j.h=(function(e){return e instanceof Fg?R().eu(this.ad,e.ad):$h.prototype.h.call(this,e)}),j.m=(function(){return new nh(this.ad)}),j.bk=(function(e){return this.ad.a[e]}),j.f=(function(e){return this.bk(e|0)}),j.n=(function(e){return this.bk(e)}),j.T=(function(){return this.ad}),new P().i(Fg,`scala.collection.mutable.ArraySeq$ofInt`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Lg(e){this.ae=null,this.ae=e}j=Lg.prototype=new eg,j.constructor=Lg;function Rg(){}Rg.prototype=j,j.j=(function(){return this.ae.a.length}),j.o=(function(){var e=G();return e.eh(this.ae,e.t)}),j.h=(function(e){return e instanceof Lg?R().ev(this.ae,e.ae):$h.prototype.h.call(this,e)}),j.m=(function(){return new ih(this.ae)}),j.bl=(function(e){return this.ae.a[e]}),j.f=(function(e){return this.bl(e|0)}),j.n=(function(e){return this.bl(e)}),j.T=(function(){return this.ae}),new P().i(Lg,`scala.collection.mutable.ArraySeq$ofLong`,{aW:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function zg(e){this.af=null,this.af=e}j=zg.prototype=new eg,j.constructor=zg;function Bg(){}Bg.prototype=j,j.j=(function(){return this.af.a.length}),j.n=(function(e){return this.af.a[e]}),j.o=(function(){var e=G();return e.eb(this.af,e.t)}),j.h=(function(e){return e instanceof zg?yu().ey(this.af,e.af):$h.prototype.h.call(this,e)}),j.m=(function(){return Em(new Dm,this.af)}),j.f=(function(e){return this.n(e|0)}),j.T=(function(){return this.af}),new P().i(zg,`scala.collection.mutable.ArraySeq$ofRef`,{aX:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Vg(e){this.ag=null,this.ag=e}j=Vg.prototype=new eg,j.constructor=Vg;function Hg(){}Hg.prototype=j,j.j=(function(){return this.ag.a.length}),j.bh=(function(e){return this.ag.a[e]}),j.o=(function(){var e=G();return e.ei(this.ag,e.t)}),j.h=(function(e){return e instanceof Vg?R().ew(this.ag,e.ag):$h.prototype.h.call(this,e)}),j.m=(function(){return new oh(this.ag)}),j.f=(function(e){return this.bh(e|0)}),j.n=(function(e){return this.bh(e)}),j.T=(function(){return this.ag}),new P().i(Vg,`scala.collection.mutable.ArraySeq$ofShort`,{aY:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ug(e){this.ax=null,this.ax=e}j=Ug.prototype=new eg,j.constructor=Ug;function Wg(){}Wg.prototype=j,j.j=(function(){return this.ax.a.length}),j.o=(function(){var e=G();return e.ej(this.ax,e.t)}),j.h=(function(e){return e instanceof Ug?this.ax.a.length===e.ax.a.length:$h.prototype.h.call(this,e)}),j.m=(function(){return new ch(this.ax)}),j.bm=(function(e){}),j.f=(function(e){this.bm(e|0)}),j.n=(function(e){this.bm(e)}),j.T=(function(){return this.ax}),new P().i(Ug,`scala.collection.mutable.ArraySeq$ofUnit`,{aZ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Gg(e,t){this.cp=null,this.bL=null,this.cp=e,this.bL=t}j=Gg.prototype=new wg,j.constructor=Gg;function Kg(){}Kg.prototype=j,j.V=(function(){return this.cp}),j.ak=(function(){return`::`}),j.ai=(function(){return 2}),j.aj=(function(e){switch(e){case 0:return this.cp;case 1:return this.bL;default:return W().bp(e)}}),j.aX=(function(){return new Xp(this)}),j.L=(function(){return this.bL}),new P().i(Gg,`scala.collection.immutable.$colon$colon`,{dJ:1,a8:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,Z:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});function qg(){}j=qg.prototype=new wg,j.constructor=qg;function Jg(){}Jg.prototype=j,j.g5=(function(){throw new mp(`head of empty list`)}),j.gT=(function(){throw new pp(`tail of empty list`)}),j.y=(function(){return 0}),j.m=(function(){return J().v}),j.ak=(function(){return`Nil`}),j.ai=(function(){return 0}),j.aj=(function(e){return W().bp(e)}),j.aX=(function(){return new Xp(this)}),j.L=(function(){this.gT()}),j.V=(function(){this.g5()}),new P().i(qg,`scala.collection.immutable.Nil$`,{dM:1,a8:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,Z:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});var Yg;function Xg(){return Yg||=new qg,Yg}function Zg(e,t){return e.J=t,e}function Qg(e){return Zg(e,new Df),e}function $g(){this.J=null}j=$g.prototype=new Jh,j.constructor=$g;function e_(){}e_.prototype=j,j.aY=(function(){return`IndexedSeq`}),j.m=(function(){return new Am(new Bh(this))}),j.aV=(function(e){var t=this.J.j();return t===e?0:t<e?-1:1}),j.e8=(function(e){return Eu(this,e)}),j.j=(function(){return this.J.j()}),j.y=(function(){return this.J.j()}),j.fd=(function(e){var t=this.J,n=``+Bi(e);return t.p+=n,this}),j.s=(function(){return this.J.p}),j.i=(function(){return this.J.j()===0}),j.eN=(function(){return this.J.p}),j.cv=(function(e){return this.fd(Xi(e))}),j.f=(function(e){var t=e|0;return Yi(this.J.em(t))}),j.n=(function(e){return Yi(this.J.em(e))}),new P().i($g,`scala.collection.mutable.StringBuilder`,{dU:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dS:1,b0:1,b2:1,b1:1,D:1,n:1,o:1,E:1,a6:1,a:1});function t_(e,t){return e.ay=t,e}function n_(e){return t_(e,[]),e}function r_(){this.ay=null}j=r_.prototype=new Xh,j.constructor=r_;function i_(){}i_.prototype=j,j.aY=(function(){return`IndexedSeq`}),j.m=(function(){return new Am(new Bh(this))}),j.aV=(function(e){var t=this.ay.length|0;return t===e?0:t<e?-1:1}),j.n=(function(e){return this.ay[e]}),j.j=(function(){return this.ay.length|0}),j.y=(function(){return this.ay.length|0}),j.aT=(function(){return`WrappedArray`}),j.eN=(function(){return this}),j.cv=(function(e){return this.ay.push(e),this}),j.f=(function(e){var t=e|0;return this.ay[t]}),new P().i(r_,`scala.scalajs.js.WrappedArray`,{el:1,dN:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dP:1,b2:1,b1:1,dT:1,q:1,p:1,D:1,n:1,o:1,E:1,dR:1,b0:1,a:1}),Ai=new z(0,0),da.z=Ai,Ss(new(_m.r()).C([]));