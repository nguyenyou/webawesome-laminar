var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||=Object.assign(document.createElement(`input`),{required:!0}),n||=`value`;let r={observedAttributes:[`required`],message:t.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},r=`:host {
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
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function i(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.pageXOffset,o=r.top+i.pageYOffset,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}typeof window<`u`&&`ontouchstart`in window;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var a=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
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
}
`,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},l=(e,t,n,r)=>{for(var i=r>1?void 0:r?s(t,n):t,a=e.length-1,c;a>=0;a--)(c=e[a])&&(i=(r?c(t,n,i):c(i))||i);return r&&i&&o(t,n,i),i},u=(e,t,n)=>t.has(e)||c(`Cannot `+n),d=(e,t,n)=>(u(e,t,`read from private field`),n?n.call(e):t.get(e)),f=(e,t,n)=>t.has(e)?c(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),p=(e,t,n,r)=>(u(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const m=globalThis,h=m.ShadowRoot&&(m.ShadyCSS===void 0||m.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,g=Symbol(),_=new WeakMap;var ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==g)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(h&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=_.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_.set(t,e))}return e}toString(){return this.cssText}};const v=e=>new ee(typeof e==`string`?e:e+``,void 0,g),te=(e,t)=>{if(h)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=m.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ne=h?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return v(t)})(e):e,{is:re,defineProperty:y,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ae,getOwnPropertySymbols:oe,getPrototypeOf:se}=Object,ce=globalThis,le=ce.trustedTypes,ue=le?le.emptyScript:``,de=ce.reactiveElementPolyfillSupport,fe=(e,t)=>e,pe={toAttribute(e,t){switch(t){case Boolean:e=e?ue:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},me=(e,t)=>!re(e,t),he={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol(`metadata`),ce.litPropertyMetadata??=new WeakMap;var ge=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&y(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ie(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(fe(`elementProperties`)))return;let e=se(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(fe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fe(`properties`))){let e=this.properties,t=[...ae(e),...oe(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ne(e))}else e!==void 0&&t.push(ne(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return te(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?pe:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?pe:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??me)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ge.elementStyles=[],ge.shadowRootOptions={mode:`open`},ge[fe(`elementProperties`)]=new Map,ge[fe(`finalized`)]=new Map,de?.({ReactiveElement:ge}),(ce.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const _e=globalThis,ve=_e.trustedTypes,ye=ve?ve.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,be=`$lit$`,xe=`lit$${Math.random().toFixed(9).slice(2)}$`,Se=`?`+xe,Ce=`<${Se}>`,we=document,Te=()=>we.createComment(``),Ee=e=>e===null||typeof e!=`object`&&typeof e!=`function`,De=Array.isArray,Oe=e=>De(e)||typeof e?.[Symbol.iterator]==`function`,ke=`[ 	
\f\r]`,Ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,je=/-->/g,Me=/>/g,Ne=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Pe=/'/g,Fe=/"/g,Ie=/^(?:script|style|textarea|title)$/i,b=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Le=Symbol.for(`lit-noChange`),x=Symbol.for(`lit-nothing`),Re=new WeakMap,ze=we.createTreeWalker(we,129);function Be(e,t){if(!De(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ye===void 0?t:ye.createHTML(t)}const Ve=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ae;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ae?c[1]===`!--`?o=je:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ne):(Ie.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ne):o=Me:o===Ne?c[0]===`>`?(o=i??Ae,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ne:c[3]===`"`?Fe:Pe):o===Fe||o===Pe?o=Ne:o===je||o===Me?o=Ae:(o=Ne,i=void 0);let d=o===Ne&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ae?n+Ce:l>=0?(r.push(s),n.slice(0,l)+be+n.slice(l)+xe+d):n+xe+(l===-2?t:d)}return[Be(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var He=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ve(t,n);if(this.el=e.createElement(l,r),ze.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ze.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(be)){let t=u[o++],n=i.getAttribute(e).split(xe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?qe:r[1]===`?`?Je:r[1]===`@`?Ye:Ke}),i.removeAttribute(e)}else e.startsWith(xe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ie.test(i.tagName)){let e=i.textContent.split(xe),t=e.length-1;if(t>0){i.textContent=ve?ve.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Te()),ze.nextNode(),c.push({type:2,index:++a});i.append(e[t],Te())}}}else if(i.nodeType===8)if(i.data===Se)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(xe,e+1))!==-1;)c.push({type:7,index:a}),e+=xe.length-1}a++}}static createElement(e,t){let n=we.createElement(`template`);return n.innerHTML=e,n}};function Ue(e,t,n=e,r){if(t===Le)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ee(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ue(e,i._$AS(e,t.values),i,r)),t}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??we).importNode(t,!0);ze.currentNode=r;let i=ze.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ge(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Xe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ze.nextNode(),a++)}return ze.currentNode=we,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ge=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ue(this,e,t),Ee(e)?e===x||e==null||e===``?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Le&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Oe(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(we.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=He.createElement(Be(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new We(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new He(e)),t}k(t){De(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Te()),this.O(Te()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ue(this,e,t,0),a=!Ee(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ue(this,r[n+o],t,o),s===Le&&(s=this._$AH[o]),a||=!Ee(s)||s!==this._$AH[o],s===x?e=x:e!==x&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},qe=class extends Ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Je=class extends Ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Ye=class extends Ke{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ue(this,e,t,0)??x)===Le)return;let n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Xe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}};const Ze={M:be,P:xe,A:Se,C:1,L:Ve,R:We,D:Oe,V:Ue,I:Ge,H:Ke,N:Je,U:Ye,B:qe,F:Xe},Qe=_e.litHtmlPolyfillSupport;Qe?.(He,Ge),(_e.litHtmlVersions??=[]).push(`3.3.1`);const $e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ge(t.insertBefore(Te(),e),e,void 0,n??{})}return i._$AI(e),i},et=globalThis;var tt=class extends ge{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}};tt._$litElement$=!0,tt.finalized=!0,et.litElementHydrateSupport?.({LitElement:tt});const nt=et.litElementPolyfillSupport;nt?.({LitElement:tt}),(et.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const rt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},it={attribute:!0,type:String,converter:pe,reflect:!1,hasChanged:me},at=(e=it,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function S(e){return(t,n)=>typeof n==`object`?at(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function C(e){return S({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function ot(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ct(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return st(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return st(n,r,{get(){return a(this)}})}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var lt=`:host {
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
`,ut,dt=class extends tt{constructor(){super(),f(this,ut,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[lt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?v(e):e)}attributeChangedCallback(e,t,n){d(this,ut)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),p(this,ut,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ut=new WeakMap,l([S()],dt.prototype,`dir`,2),l([S()],dt.prototype,`lang`,2),l([S({type:Boolean,reflect:!0,attribute:`did-ssr`})],dt.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ft=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),mt=class extends dt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ft))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};mt.formAssociated=!0,l([S({reflect:!0})],mt.prototype,`name`,2),l([S({type:Boolean})],mt.prototype,`disabled`,2),l([S({state:!0,attribute:!1})],mt.prototype,`valueHasChanged`,2),l([S({state:!0,attribute:!1})],mt.prototype,`hasInteracted`,2),l([S({attribute:`custom-error`,reflect:!0})],mt.prototype,`customError`,2),l([S({attribute:!1,state:!0,type:Object})],mt.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ht=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},gt=`@layer wa-utilities {
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
`;function _t(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function vt(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function yt(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}const bt=new Set,xt=new Map;let St,Ct=`ltr`,wt=`en`;const Tt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Tt){let e=new MutationObserver(Dt);Ct=document.documentElement.dir||`ltr`,wt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Et(...e){e.map(e=>{let t=e.$code.toLowerCase();xt.has(t)?xt.set(t,Object.assign(Object.assign({},xt.get(t)),e)):xt.set(t,e),St||=e}),Dt()}function Dt(){Tt&&(Ct=document.documentElement.dir||`ltr`,wt=document.documentElement.lang||navigator.language),[...bt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Ot=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){bt.add(this.host)}hostDisconnected(){bt.delete(this.host)}dir(){return`${this.host.dir||Ct}`.toLowerCase()}lang(){return`${this.host.lang||wt}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:xt.get(`${n}-${r}`),secondary:xt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&St&&St[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(St&&St[e])i=St[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},kt={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Et(kt);var At=kt,jt=class extends Ot{};Et(At);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Mt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}function w(e,t){Pt(e)&&(e=`100%`);let n=Ft(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function Nt(e){return Math.min(1,Math.max(0,e))}function Pt(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function Ft(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function It(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Lt(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Rt(e){return e.length===1?`0`+e:String(e)}function zt(e,t,n){return{r:w(e,255)*255,g:w(t,255)*255,b:w(n,255)*255}}function Bt(e,t,n){e=w(e,255),t=w(t,255),n=w(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break;default:break}a/=6}return{h:a,s:o,l:s}}function Vt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ht(e,t,n){let r,i,a;if(e=w(e,360),t=w(t,100),n=w(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=Vt(s,o,e+1/3),i=Vt(s,o,e),a=Vt(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function Ut(e,t,n){e=w(e,255),t=w(t,255),n=w(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:c,v:o}}function Wt(e,t,n){e=w(e,360)*6,t=w(t,100),n=w(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function Gt(e,t,n,r){let i=[Rt(Math.round(e).toString(16)),Rt(Math.round(t).toString(16)),Rt(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function Kt(e,t,n,r,i){let a=[Rt(Math.round(e).toString(16)),Rt(Math.round(t).toString(16)),Rt(Math.round(n).toString(16)),Rt(Yt(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function qt(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function Jt(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function Yt(e){return Math.round(parseFloat(e)*255).toString(16)}function Xt(e){return T(e)/255}function T(e){return parseInt(e,16)}function Zt(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Qt={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function $t(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=an(e)),typeof e==`object`&&(E(e.r)&&E(e.g)&&E(e.b)?(t=zt(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):E(e.h)&&E(e.s)&&E(e.v)?(r=Lt(e.s),i=Lt(e.v),t=Wt(e.h,r,i),o=!0,s=`hsv`):E(e.h)&&E(e.s)&&E(e.l)?(r=Lt(e.s),a=Lt(e.l),t=Ht(e.h,r,a),o=!0,s=`hsl`):E(e.c)&&E(e.m)&&E(e.y)&&E(e.k)&&(t=qt(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=It(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const en=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,tn=`[\\s|\\(]+(`+en+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,nn=`[\\s|\\(]+(`+en+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,rn={CSS_UNIT:new RegExp(en),rgb:RegExp(`rgb`+tn),rgba:RegExp(`rgba`+nn),hsl:RegExp(`hsl`+tn),hsla:RegExp(`hsla`+nn),hsv:RegExp(`hsv`+tn),hsva:RegExp(`hsva`+nn),cmyk:RegExp(`cmyk`+nn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function an(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Qt[e])e=Qt[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=rn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=rn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=rn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=rn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=rn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=rn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=rn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=rn.hex8.exec(e),n?{r:T(n[1]),g:T(n[2]),b:T(n[3]),a:Xt(n[4]),format:t?`name`:`hex8`}:(n=rn.hex6.exec(e),n?{r:T(n[1]),g:T(n[2]),b:T(n[3]),format:t?`name`:`hex`}:(n=rn.hex4.exec(e),n?{r:T(n[1]+n[1]),g:T(n[2]+n[2]),b:T(n[3]+n[3]),a:Xt(n[4]+n[4]),format:t?`name`:`hex8`}:(n=rn.hex3.exec(e),n?{r:T(n[1]+n[1]),g:T(n[2]+n[2]),b:T(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function E(e){return typeof e==`number`?!Number.isNaN(e):rn.CSS_UNIT.test(e)}var on=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=Zt(t)),this.originalInput=t;let r=$t(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=It(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Ut(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Ut(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=Bt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Bt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Gt(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return Kt(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(w(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(w(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...Jt(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=Jt(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+Gt(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(Qt))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=Nt(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=Nt(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=Nt(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=Nt(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}};
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const sn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cn=e=>(...t)=>({_$litDirective$:e,values:t});var ln=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const un=cn(class extends ln{constructor(e){if(super(e),e.type!==sn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Le}}),D=e=>e??x,dn=`important`;``+dn;const fn=cn(class extends ln{constructor(e){if(super(e),e.type!==sn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?dn:``):n[e]=r}}return Le}});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var pn=`:host {
  --grid-width: 17em;
  --grid-height: 12em;
  --grid-handle-size: 1.25em;
  --slider-height: 1em;
  --slider-handle-size: calc(var(--slider-height) + 0.25em);
}

.color-picker {
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  border-color: var(--wa-color-surface-border);
  box-shadow: var(--wa-shadow-m);
  color: var(--color);
  font: inherit;
  font-size: inherit;
  user-select: none;
  width: var(--grid-width);
  -webkit-user-select: none;
}

.grid {
  position: relative;
  height: var(--grid-height);
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
  border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  cursor: crosshair;
  forced-color-adjust: none;
}

.grid-handle {
  position: absolute;
  width: var(--grid-handle-size);
  height: var(--grid-handle-size);
  border-radius: var(--wa-border-radius-circle);
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  border: solid 0.125rem white;
  margin-top: calc(var(--grid-handle-size) / -2);
  margin-left: calc(var(--grid-handle-size) / -2);
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
}

.grid-handle-dragging {
  cursor: none;
  scale: 1.5;
}

.grid-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.controls {
  padding: 0.75em;
  display: flex;
  align-items: center;
}

.sliders {
  flex: 1 1 auto;
}

.slider {
  position: relative;
  height: var(--slider-height);
  border-radius: var(--wa-border-radius-s);
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  forced-color-adjust: none;
}

.slider:not(:last-of-type) {
  margin-bottom: 0.75em;
}

.slider-handle {
  position: absolute;
  top: calc(50% - var(--slider-handle-size) / 2);
  width: var(--slider-handle-size);
  height: var(--slider-handle-size);
  border-radius: var(--wa-border-radius-circle);
  border: solid 0.125rem white;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  margin-left: calc(var(--slider-handle-size) / -2);
}

.slider-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.hue {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0) 0%,
    rgb(255, 255, 0) 17%,
    rgb(0, 255, 0) 33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 67%,
    rgb(255, 0, 255) 83%,
    rgb(255, 0, 0) 100%
  );
}

.alpha .alpha-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.preview {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: var(--wa-border-radius-circle);
  background: none;
  font-size: inherit;
  margin-inline-start: 0.75em;
  cursor: copy;
  forced-color-adjust: none;
}

.preview:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

  /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
  background-color: var(--preview-color);
}

.preview:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.preview-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
}

.preview-color-copied {
  animation: pulse 850ms;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.user-input {
  display: flex;
  align-items: center;
  padding: 0 0.75em 0.75em 0.75em;
}

.user-input wa-input {
  min-width: 0; /* fix input width in Safari */
  flex: 1 1 auto;

  &::part(form-control-label) {
    /* Visually hidden */
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
}

.user-input wa-button-group {
  margin-inline-start: 0.75em;

  &::part(base) {
    flex-wrap: nowrap;
  }
}

.user-input wa-button:first-of-type {
  min-width: 3em;
  max-width: 3em;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
  grid-gap: 0.5em;
  justify-items: center;
  border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
    var(--wa-color-surface-border);
  padding: 0.5em;
  forced-color-adjust: none;
}

.swatch {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: var(--wa-border-radius-s);
}

.swatch .swatch-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  border-radius: inherit;
  cursor: pointer;
}

.swatch:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.transparent-bg {
  background-image:
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
  background-size: 0.5rem 0.5rem;
  background-position:
    0 0,
    0 0,
    -0.25rem -0.25rem,
    0.25rem 0.25rem;
}

:host([disabled]) {
  opacity: 0.5;
  cursor: not-allowed;

  .grid,
  .grid-handle,
  .slider,
  .slider-handle,
  .preview,
  .swatch,
  .swatch-color {
    pointer-events: none;
  }
}

/*
 * Color dropdown
 */

.color-dropdown {
  display: contents;
}

.color-dropdown::part(panel) {
  max-height: none;
  background-color: var(--wa-color-surface-raised);
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  overflow: visible;
}

.trigger {
  display: block;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  forced-color-adjust: none;
  width: var(--wa-form-control-height);
  height: var(--wa-form-control-height);
  border-radius: var(--wa-form-control-border-radius);
}

.trigger:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: currentColor;
  box-shadow:
    inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
    inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
}

.trigger-empty:before {
  background-color: transparent;
}

.trigger:focus-visible {
  outline: none;
}

.trigger:focus-visible:not(.trigger:disabled) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([disabled]) :is(.label, .trigger) {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-control.form-control-has-label .label {
  cursor: pointer;
  display: inline-block;
}
`,O=class extends mt{constructor(){super(),this.hasSlotController=new ht(this,`hint`,`label`),this.isSafeValue=!1,this.localize=new jt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue=``,this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label=``,this.hint=``,this.format=`hex`,this.size=`medium`,this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener(`invalid`,this.emitInvalid),this.reportValidity(),this.addEventListener(`invalid`,this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key===`Tab`&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{let t=e.composedPath().some(e=>e instanceof Element&&(e.closest(`.color-picker`)||e===this.trigger));this&&!t&&this.hide()},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}static get validators(){let e=[n()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`preview-color-copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`preview-color-copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`];this.format=e[(e.indexOf(this.format)+1)%e.length],this.setColor(this.value||``),this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.slider.alpha`),n=t.querySelector(`.slider-handle`),{width:r}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),i(t,{onMove:e=>{this.alpha=_t(e/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.slider.hue`),n=t.querySelector(`.slider-handle`),{width:r}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),i(t,{onMove:e=>{this.hue=_t(e/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.grid`),n=t.querySelector(`.grid-handle`),{width:r,height:a}=t.getBoundingClientRect(),o=this.value,s=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,i(t,{onMove:(e,t)=>{this.saturation=_t(e/r*100,0,100),this.brightness=_t(100-t/a*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=_t(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=_t(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=_t(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=_t(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=_t(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=_t(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=_t(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=_t(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||``):this.value=``,this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()===``)return null;let t=new on(e);if(!t.isValid)return null;let n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let a={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=t.toHexString(),s=t.toHex8String(),c={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format===`hsl`?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`preview-color-copied`),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){this.hasEyeDropper&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){let i=new on(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has(`value`)&&this.handleValueChange(e.get(`value`)||``,this.value||``)}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value||``,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues())}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){let e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener(`wa-after-show`,this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new ft),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper=`EyeDropper`in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}updateAccessibleTrigger(){let e=this.trigger;e&&(e.setAttribute(`aria-haspopup`,`true`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}async show(){if(!this.open)return this.open=!0,vt(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,vt(this,`wa-after-hide`)}addOpenListeners(){this.base.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent(`wa-show`)),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await yt(this.popup.popup,`show-with-scale`),this.dispatchEvent(new CustomEvent(`wa-after-show`))):(this.dispatchEvent(new CustomEvent(`wa-hide`)),this.removeOpenListeners(),await yt(this.popup.popup,`hide-with-scale`),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent(`wa-after-hide`)))}render(){let e=this.hasUpdated?this.withLabel||this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.saturation,a=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(`;`).filter(e=>e.trim()!==``),s=b`
      <div
        part="base"
        class=${un({"color-picker":!0})}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${fn({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${un({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${fn({top:`${a}%`,left:`${i}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${D(this.disabled?void 0:`0`)}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${fn({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${D(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?b`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${fn({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${fn({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${D(this.disabled?void 0:`0`)}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:``}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term(`copy`)}
            style=${fn({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?``:this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`currentValue`)}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${this.withoutFormatToggle?``:b`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term(`toggleColorFormat`)}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `}
            ${this.hasEyeDropper?b`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term(`selectAColorFromTheScreen`)}
                    ></wa-icon>
                  </wa-button>
                `:``}
          </wa-button-group>
        </div>

        ${o.length>0?b`
              <div part="swatches" class="swatches">
                ${o.map(e=>{let t=this.parseColor(e);return t?b`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${D(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e}
                      @click=${()=>this.selectSwatch(e)}
                      @keydown=${e=>!this.disabled&&e.key===`Enter`&&this.setColor(t.hexa)}
                    >
                      <div class="swatch-color" style=${fn({backgroundColor:t.hexa})}></div>
                    </div>
                  `:``})}
              </div>
            `:``}
      </div>
    `;return b`
      <div
        class=${un({container:!0,"form-control":!0,"form-control-has-label":n})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${un({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${fn({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${un({"has-slotted":r})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?`true`:`false`}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${s}
      </wa-popup>
    `}};O.css=[a,gt,r,pn],O.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},l([ct(`[part~="base"]`)],O.prototype,`base`,2),l([ct(`[part~="input"]`)],O.prototype,`input`,2),l([ct(`[part~="form-control-label"]`)],O.prototype,`triggerLabel`,2),l([ct(`[part~="form-control-input"]`)],O.prototype,`triggerButton`,2),l([ct(`.color-popup`)],O.prototype,`popup`,2),l([ct(`[part~="preview"]`)],O.prototype,`previewButton`,2),l([ct(`[part~="trigger"]`)],O.prototype,`trigger`,2),l([C()],O.prototype,`hasFocus`,2),l([C()],O.prototype,`isDraggingGridHandle`,2),l([C()],O.prototype,`isEmpty`,2),l([C()],O.prototype,`inputValue`,2),l([C()],O.prototype,`hue`,2),l([C()],O.prototype,`saturation`,2),l([C()],O.prototype,`brightness`,2),l([C()],O.prototype,`alpha`,2),l([C()],O.prototype,`value`,1),l([S({attribute:`value`,reflect:!0})],O.prototype,`defaultValue`,2),l([S({attribute:`with-label`,reflect:!0,type:Boolean})],O.prototype,`withLabel`,2),l([S({attribute:`with-hint`,reflect:!0,type:Boolean})],O.prototype,`withHint`,2),l([C()],O.prototype,`hasEyeDropper`,2),l([S()],O.prototype,`label`,2),l([S({attribute:`hint`})],O.prototype,`hint`,2),l([S()],O.prototype,`format`,2),l([S({reflect:!0})],O.prototype,`size`,2),l([S({attribute:`without-format-toggle`,type:Boolean})],O.prototype,`withoutFormatToggle`,2),l([S({reflect:!0})],O.prototype,`name`,2),l([S({type:Boolean})],O.prototype,`disabled`,2),l([S({type:Boolean,reflect:!0})],O.prototype,`open`,2),l([S({type:Boolean})],O.prototype,`opacity`,2),l([S({type:Boolean})],O.prototype,`uppercase`,2),l([S()],O.prototype,`swatches`,2),l([S({reflect:!0})],O.prototype,`form`,2),l([S({type:Boolean,reflect:!0})],O.prototype,`required`,2),l([ot({passive:!1})],O.prototype,`handleTouchMove`,1),l([Mt(`format`,{waitUntilFirstUpdate:!0})],O.prototype,`handleFormatChange`,1),l([Mt(`opacity`)],O.prototype,`handleOpacityChange`,1),l([Mt(`value`)],O.prototype,`handleValueChange`,1),l([Mt(`open`,{waitUntilFirstUpdate:!0})],O.prototype,`handleOpenChange`,1),O=l([rt(`wa-color-picker`)],O);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var mn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function hn(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&gn(t)})}function gn(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=[...t.elements];if(n.length===1){t.requestSubmit(null);return}let r=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));r&&([`input`,`button`].includes(r.localName)?t.requestSubmit(r):r.click())}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var _n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:vn}=Ze,yn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,bn=e=>e.strings===void 0,xn={},Sn=(e,t=xn)=>e._$AH=t,Cn=cn(class extends ln{constructor(e){if(super(e),e.type!==sn.PROPERTY&&e.type!==sn.ATTRIBUTE&&e.type!==sn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!bn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Le||t===x)return t;let n=e.element,r=e.name;if(e.type===sn.PROPERTY){if(t===n[r])return Le}else if(e.type===sn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Le}else if(e.type===sn.ATTRIBUTE&&n.getAttribute(r)===t+``)return Le;return Sn(e),t}});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var wn=`:host {
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
`,k=class extends mt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new ht(this,`hint`,`label`),this.localize=new jt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`medium`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,_n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new mn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){hn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return b`
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
          name=${D(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${D(this.placeholder)}
          minlength=${D(this.minlength)}
          maxlength=${D(this.maxlength)}
          min=${D(this.min)}
          max=${D(this.max)}
          step=${D(this.step)}
          .value=${Cn(this.value??``)}
          autocapitalize=${D(this.autocapitalize)}
          autocomplete=${D(this.autocomplete)}
          autocorrect=${D(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${D(this.pattern)}
          enterkeyhint=${D(this.enterkeyhint)}
          inputmode=${D(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?b`
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
        ${this.passwordToggle&&!this.disabled?b`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?b`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:b`
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
        class=${un({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};k.css=[gt,r,wn],k.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},l([ct(`input`)],k.prototype,`input`,2),l([S()],k.prototype,`title`,2),l([S({reflect:!0})],k.prototype,`type`,2),l([C()],k.prototype,`value`,1),l([S({attribute:`value`,reflect:!0})],k.prototype,`defaultValue`,2),l([S({reflect:!0})],k.prototype,`size`,2),l([S({reflect:!0})],k.prototype,`appearance`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`pill`,2),l([S()],k.prototype,`label`,2),l([S({attribute:`hint`})],k.prototype,`hint`,2),l([S({attribute:`with-clear`,type:Boolean})],k.prototype,`withClear`,2),l([S()],k.prototype,`placeholder`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`readonly`,2),l([S({attribute:`password-toggle`,type:Boolean})],k.prototype,`passwordToggle`,2),l([S({attribute:`password-visible`,type:Boolean})],k.prototype,`passwordVisible`,2),l([S({attribute:`without-spin-buttons`,type:Boolean})],k.prototype,`withoutSpinButtons`,2),l([S({reflect:!0})],k.prototype,`form`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`required`,2),l([S()],k.prototype,`pattern`,2),l([S({type:Number})],k.prototype,`minlength`,2),l([S({type:Number})],k.prototype,`maxlength`,2),l([S()],k.prototype,`min`,2),l([S()],k.prototype,`max`,2),l([S()],k.prototype,`step`,2),l([S()],k.prototype,`autocapitalize`,2),l([S()],k.prototype,`autocorrect`,2),l([S()],k.prototype,`autocomplete`,2),l([S({type:Boolean})],k.prototype,`autofocus`,2),l([S()],k.prototype,`enterkeyhint`,2),l([S({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],k.prototype,`spellcheck`,2),l([S()],k.prototype,`inputmode`,2),l([S({attribute:`with-label`,type:Boolean})],k.prototype,`withLabel`,2),l([S({attribute:`with-hint`,type:Boolean})],k.prototype,`withHint`,2),l([Mt(`step`,{waitUntilFirstUpdate:!0})],k.prototype,`handleStepChange`,1),k=l([rt(`wa-input`)],k);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Tn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}};const En=Math.min,A=Math.max,Dn=Math.round,On=Math.floor,kn=e=>({x:e,y:e}),An={left:`right`,right:`left`,bottom:`top`,top:`bottom`},jn={start:`end`,end:`start`};function Mn(e,t,n){return A(e,En(t,n))}function Nn(e,t){return typeof e==`function`?e(t):e}function Pn(e){return e.split(`-`)[0]}function Fn(e){return e.split(`-`)[1]}function In(e){return e===`x`?`y`:`x`}function Ln(e){return e===`y`?`height`:`width`}const Rn=new Set([`top`,`bottom`]);function zn(e){return Rn.has(Pn(e))?`y`:`x`}function Bn(e){return In(zn(e))}function Vn(e,t,n){n===void 0&&(n=!1);let r=Fn(e),i=Bn(e),a=Ln(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Xn(o)),[o,Xn(o)]}function Hn(e){let t=Xn(e);return[Un(e),t,Un(t)]}function Un(e){return e.replace(/start|end/g,e=>jn[e])}const Wn=[`left`,`right`],Gn=[`right`,`left`],Kn=[`top`,`bottom`],qn=[`bottom`,`top`];function Jn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Gn:Wn:t?Wn:Gn;case`left`:case`right`:return t?Kn:qn;default:return[]}}function Yn(e,t,n,r){let i=Fn(e),a=Jn(Pn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Un)))),a}function Xn(e){return e.replace(/left|right|bottom|top/g,e=>An[e])}function Zn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Qn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Zn(e)}function $n(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function er(e,t,n){let{reference:r,floating:i}=e,a=zn(t),o=Bn(t),s=Ln(o),c=Pn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Fn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const tr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=er(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:ee,reset:v}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...ee}},v&&m<=50&&(m++,typeof v==`object`&&(v.placement&&(f=v.placement),v.rects&&(l=v.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:d}=er(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function nr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Nn(t,e),p=Qn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=$n(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),ee=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},v=$n(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-v.top+p.top)/ee.y,bottom:(v.bottom-h.bottom+p.bottom)/ee.y,left:(h.left-v.left+p.left)/ee.x,right:(v.right-h.right+p.right)/ee.x}}const rr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Nn(e,t)||{};if(l==null)return{};let d=Qn(u),f={x:n,y:r},p=Bn(i),m=Ln(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,ee=g?`bottom`:`right`,v=g?`clientHeight`:`clientWidth`,te=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ne=f[p]-a.reference[p],re=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),y=re?re[v]:0;(!y||!await(o.isElement==null?void 0:o.isElement(re)))&&(y=s.floating[v]||a.floating[m]);let ie=te/2-ne/2,ae=y/2-h[m]/2-1,oe=En(d[_],ae),se=En(d[ee],ae),ce=oe,le=y-h[m]-se,ue=y/2-h[m]/2+ie,de=Mn(ce,ue,le),fe=!c.arrow&&Fn(i)!=null&&ue!==de&&a.reference[m]/2-(ue<ce?oe:se)-h[m]/2<0,pe=fe?ue<ce?ue-ce:ue-le:0;return{[p]:f[p]+pe,data:{[p]:de,centerOffset:ue-de-pe,...fe&&{alignmentOffset:pe}},reset:fe}}}),ir=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Nn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Pn(r),_=zn(o),ee=Pn(o)===o,v=await(s.isRTL==null?void 0:s.isRTL(c.floating)),te=d||(ee||!m?[Xn(o)]:Hn(o)),ne=p!==`none`;!d&&ne&&te.push(...Yn(o,m,p,v));let re=[o,...te],y=await nr(t,h),ie=[],ae=i.flip?.overflows||[];if(l&&ie.push(y[g]),u){let e=Vn(r,a,v);ie.push(y[e[0]],y[e[1]])}if(ae=[...ae,{placement:r,overflows:ie}],!ie.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=re[e];if(t&&(!(u===`alignment`&&_!==zn(t))||ae.every(e=>zn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ae},reset:{placement:t}};let n=ae.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ae.filter(e=>{if(ne){let t=zn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},ar=new Set([`left`,`top`]);async function or(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Pn(n),s=Fn(n),c=zn(n)===`y`,l=ar.has(o)?-1:1,u=a&&c?-1:1,d=Nn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const sr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await or(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},cr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Nn(e,t),l={x:n,y:r},u=await nr(t,c),d=zn(Pn(i)),f=In(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Mn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Mn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},lr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Nn(e,t),u=await nr(t,l),d=Pn(i),f=Fn(i),p=zn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let ee=h-u.top-u.bottom,v=m-u.left-u.right,te=En(h-u[g],ee),ne=En(m-u[_],v),re=!t.middlewareData.shift,y=te,ie=ne;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ie=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(y=ee),re&&!f){let e=A(u.left,0),t=A(u.right,0),n=A(u.top,0),r=A(u.bottom,0);p?ie=m-2*(e!==0||t!==0?e+t:A(u.left,u.right)):y=h-2*(n!==0||r!==0?n+r:A(u.top,u.bottom))}await c({...t,availableWidth:ie,availableHeight:y});let ae=await o.getDimensions(s.floating);return m!==ae.width||h!==ae.height?{reset:{rects:!0}}:{}}}};function ur(){return typeof window<`u`}function dr(e){return mr(e)?(e.nodeName||``).toLowerCase():`#document`}function fr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function pr(e){return((mr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function mr(e){return ur()?e instanceof Node||e instanceof fr(e).Node:!1}function hr(e){return ur()?e instanceof Element||e instanceof fr(e).Element:!1}function gr(e){return ur()?e instanceof HTMLElement||e instanceof fr(e).HTMLElement:!1}function _r(e){return!ur()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof fr(e).ShadowRoot}const vr=new Set([`inline`,`contents`]);function yr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Mr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!vr.has(i)}const br=new Set([`table`,`td`,`th`]);function xr(e){return br.has(dr(e))}const Sr=[`:popover-open`,`:modal`];function Cr(e){return Sr.some(t=>{try{return e.matches(t)}catch{return!1}})}const wr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Tr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Er=[`paint`,`layout`,`strict`,`content`];function Dr(e){let t=kr(),n=hr(e)?Mr(e):e;return wr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Tr.some(e=>(n.willChange||``).includes(e))||Er.some(e=>(n.contain||``).includes(e))}function Or(e){let t=Pr(e);for(;gr(t)&&!jr(t);){if(Dr(t))return t;if(Cr(t))return null;t=Pr(t)}return null}function kr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Ar=new Set([`html`,`body`,`#document`]);function jr(e){return Ar.has(dr(e))}function Mr(e){return fr(e).getComputedStyle(e)}function Nr(e){return hr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Pr(e){if(dr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||_r(e)&&e.host||pr(e);return _r(t)?t.host:t}function Fr(e){let t=Pr(e);return jr(t)?e.ownerDocument?e.ownerDocument.body:e.body:gr(t)&&yr(t)?t:Fr(t)}function Ir(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Fr(e),i=r===e.ownerDocument?.body,a=fr(r);if(i){let e=Lr(a);return t.concat(a,a.visualViewport||[],yr(r)?r:[],e&&n?Ir(e):[])}return t.concat(r,Ir(r,[],n))}function Lr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Rr(e){let t=Mr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=gr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Dn(n)!==a||Dn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function zr(e){return hr(e)?e:e.contextElement}function Br(e){let t=zr(e);if(!gr(t))return kn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Rr(t),o=(a?Dn(n.width):n.width)/r,s=(a?Dn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Vr=kn(0);function Hr(e){let t=fr(e);return!kr()||!t.visualViewport?Vr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Ur(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==fr(e)?!1:t}function Wr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=zr(e),o=kn(1);t&&(r?hr(r)&&(o=Br(r)):o=Br(e));let s=Ur(a,n,r)?Hr(a):kn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=fr(a),t=r&&hr(r)?fr(r):r,n=e,i=Lr(n);for(;i&&r&&t!==n;){let e=Br(i),t=i.getBoundingClientRect(),r=Mr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=fr(i),i=Lr(n)}}return $n({width:u,height:d,x:c,y:l})}function Gr(e,t){let n=Nr(e).scrollLeft;return t?t.left+n:Wr(pr(e)).left+n}function Kr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Gr(e,n),y:n.top+t.scrollTop}}function qr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=pr(r),s=t?Cr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=kn(1),u=kn(0),d=gr(r);if((d||!d&&!a)&&((dr(r)!==`body`||yr(o))&&(c=Nr(r)),gr(r))){let e=Wr(r);l=Br(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Kr(o,c):kn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Jr(e){return Array.from(e.getClientRects())}function Yr(e){let t=pr(e),n=Nr(e),r=e.ownerDocument.body,i=A(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=A(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Gr(e),s=-n.scrollTop;return Mr(r).direction===`rtl`&&(o+=A(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Xr(e,t){let n=fr(e),r=pr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=kr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Gr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const Zr=new Set([`absolute`,`fixed`]);function Qr(e,t){let n=Wr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=gr(e)?Br(e):kn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function $r(e,t,n){let r;if(t===`viewport`)r=Xr(e,n);else if(t===`document`)r=Yr(pr(e));else if(hr(t))r=Qr(t,n);else{let n=Hr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return $n(r)}function ei(e,t){let n=Pr(e);return n===t||!hr(n)||jr(n)?!1:Mr(n).position===`fixed`||ei(n,t)}function ti(e,t){let n=t.get(e);if(n)return n;let r=Ir(e,[],!1).filter(e=>hr(e)&&dr(e)!==`body`),i=null,a=Mr(e).position===`fixed`,o=a?Pr(e):e;for(;hr(o)&&!jr(o);){let t=Mr(o),n=Dr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Zr.has(i.position)||yr(o)&&!n&&ei(e,o))?r=r.filter(e=>e!==o):i=t,o=Pr(o)}return t.set(e,r),r}function ni(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Cr(t)?[]:ti(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=$r(t,n,i);return e.top=A(r.top,e.top),e.right=En(r.right,e.right),e.bottom=En(r.bottom,e.bottom),e.left=A(r.left,e.left),e},$r(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function ri(e){let{width:t,height:n}=Rr(e);return{width:t,height:n}}function ii(e,t,n){let r=gr(t),i=pr(t),a=n===`fixed`,o=Wr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=kn(0);function l(){c.x=Gr(i)}if(r||!r&&!a)if((dr(t)!==`body`||yr(i))&&(s=Nr(t)),r){let e=Wr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Kr(i,s):kn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ai(e){return Mr(e).position===`static`}function oi(e,t){if(!gr(e)||Mr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return pr(e)===n&&(n=n.ownerDocument.body),n}function si(e,t){let n=fr(e);if(Cr(e))return n;if(!gr(e)){let t=Pr(e);for(;t&&!jr(t);){if(hr(t)&&!ai(t))return t;t=Pr(t)}return n}let r=oi(e,t);for(;r&&xr(r)&&ai(r);)r=oi(r,t);return r&&jr(r)&&ai(r)&&!Dr(r)?n:r||Or(e)||n}const ci=async function(e){let t=this.getOffsetParent||si,n=this.getDimensions,r=await n(e.floating);return{reference:ii(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function li(e){return Mr(e).direction===`rtl`}const ui={convertOffsetParentRelativeRectToViewportRelativeRect:qr,getDocumentElement:pr,getClippingRect:ni,getOffsetParent:si,getElementRects:ci,getClientRects:Jr,getDimensions:ri,getScale:Br,isElement:hr,isRTL:li};function di(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function fi(e,t){let n=null,r,i=pr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=On(d),h=On(i.clientWidth-(u+f)),g=On(i.clientHeight-(d+p)),_=On(u),ee={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:A(0,En(1,c))||1},v=!0;function te(t){let n=t[0].intersectionRatio;if(n!==c){if(!v)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!di(l,e.getBoundingClientRect())&&o(),v=!1}try{n=new IntersectionObserver(te,{...ee,root:i.ownerDocument})}catch{n=new IntersectionObserver(te,ee)}n.observe(e)}return o(!0),a}function pi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=zr(e),u=i||a?[...l?Ir(l):[],...Ir(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?fi(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Wr(e):null;c&&g();function g(){let t=Wr(e);h&&!di(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const mi=sr,hi=cr,gi=ir,_i=lr,vi=rr,yi=(e,t,n)=>{let r=new Map,i={platform:ui,...n},a={...i.platform,_c:r};return tr(e,t,{...i,platform:a})};function bi(e){return Si(e)}function xi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Si(e){for(let t=e;t;t=xi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=xi(e);t;t=xi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Dr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ci=`:host {
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
`;function wi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ti=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),j=class extends dt{constructor(){super(...arguments),this.localize=new jt(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||wi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=pi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[mi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(_i({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;Ti&&!wi(this.anchor)&&this.boundary===`scroll`&&(t=Ir(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(gi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(hi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(_i({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(vi({element:this.arrowEl,padding:this.arrowPadding}));let n=Ti?e=>ui.getOffsetParent(e,bi):ui.getOffsetParent;yi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Ti?`absolute`:`fixed`,platform:{...ui,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Tn)}render(){return b`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${un({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${un({popup:!0,"popup-active":this.active,"popup-fixed":!Ti,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?b`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};j.css=Ci,l([ct(`.popup`)],j.prototype,`popup`,2),l([ct(`.arrow`)],j.prototype,`arrowEl`,2),l([S()],j.prototype,`anchor`,2),l([S({type:Boolean,reflect:!0})],j.prototype,`active`,2),l([S({reflect:!0})],j.prototype,`placement`,2),l([S()],j.prototype,`boundary`,2),l([S({type:Number})],j.prototype,`distance`,2),l([S({type:Number})],j.prototype,`skidding`,2),l([S({type:Boolean})],j.prototype,`arrow`,2),l([S({attribute:`arrow-placement`})],j.prototype,`arrowPlacement`,2),l([S({attribute:`arrow-padding`,type:Number})],j.prototype,`arrowPadding`,2),l([S({type:Boolean})],j.prototype,`flip`,2),l([S({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],j.prototype,`flipFallbackPlacements`,2),l([S({attribute:`flip-fallback-strategy`})],j.prototype,`flipFallbackStrategy`,2),l([S({type:Object})],j.prototype,`flipBoundary`,2),l([S({attribute:`flip-padding`,type:Number})],j.prototype,`flipPadding`,2),l([S({type:Boolean})],j.prototype,`shift`,2),l([S({type:Object})],j.prototype,`shiftBoundary`,2),l([S({attribute:`shift-padding`,type:Number})],j.prototype,`shiftPadding`,2),l([S({attribute:`auto-size`})],j.prototype,`autoSize`,2),l([S()],j.prototype,`sync`,2),l([S({type:Object})],j.prototype,`autoSizeBoundary`,2),l([S({attribute:`auto-size-padding`,type:Number})],j.prototype,`autoSizePadding`,2),l([S({attribute:`hover-bridge`,type:Boolean})],j.prototype,`hoverBridge`,2),j=l([rt(`wa-popup`)],j);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ei=`@layer wa-utilities {
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
`;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Di=Symbol.for(``),Oi=e=>{if(e?.r===Di)return e?._$litStatic$},ki=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Di}),Ai=new Map,ji=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Oi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ai.get(e))===void 0&&(o.raw=o,Ai.set(e,t=o)),n=s}return e(t,...n)})(b);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Mi=`@layer wa-component {
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
`,M=class extends mt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new ht(this,`[default]`,`start`,`end`),this.localize=new jt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,_n()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new ft)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?ki`a`:ki`button`;return ji`
      <${t}
        part="base"
        class=${un({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${D(e?void 0:this.disabled)}
        type=${D(e?void 0:this.type)}
        title=${this.title}
        name=${D(e?void 0:this.name)}
        value=${D(e?void 0:this.value)}
        href=${D(e?this.href:void 0)}
        target=${D(e?this.target:void 0)}
        download=${D(e?this.download:void 0)}
        rel=${D(e&&this.rel?this.rel:void 0)}
        role=${D(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?ji`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?ji`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};M.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},M.css=[Mi,Ei,gt],l([ct(`.button`)],M.prototype,`button`,2),l([ct(`slot:not([name])`)],M.prototype,`labelSlot`,2),l([C()],M.prototype,`invalid`,2),l([C()],M.prototype,`isIconButton`,2),l([S()],M.prototype,`title`,2),l([S({reflect:!0})],M.prototype,`variant`,2),l([S({reflect:!0})],M.prototype,`appearance`,2),l([S({reflect:!0})],M.prototype,`size`,2),l([S({attribute:`with-caret`,type:Boolean,reflect:!0})],M.prototype,`withCaret`,2),l([S({type:Boolean})],M.prototype,`disabled`,2),l([S({type:Boolean,reflect:!0})],M.prototype,`loading`,2),l([S({type:Boolean,reflect:!0})],M.prototype,`pill`,2),l([S()],M.prototype,`type`,2),l([S({reflect:!0})],M.prototype,`name`,2),l([S({reflect:!0})],M.prototype,`value`,2),l([S({reflect:!0})],M.prototype,`href`,2),l([S()],M.prototype,`target`,2),l([S()],M.prototype,`rel`,2),l([S()],M.prototype,`download`,2),l([S({reflect:!0})],M.prototype,`form`,2),l([S({attribute:`formaction`})],M.prototype,`formAction`,2),l([S({attribute:`formenctype`})],M.prototype,`formEnctype`,2),l([S({attribute:`formmethod`})],M.prototype,`formMethod`,2),l([S({attribute:`formnovalidate`,type:Boolean})],M.prototype,`formNoValidate`,2),l([S({attribute:`formtarget`})],M.prototype,`formTarget`,2),l([Mt(`disabled`,{waitUntilFirstUpdate:!0})],M.prototype,`handleDisabledChange`,1),M=l([rt(`wa-button`)],M);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ni=`:host {
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
`,Pi=class extends dt{constructor(){super(...arguments),this.localize=new jt(this)}render(){return b`
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
    `}};Pi.css=Ni,Pi=l([rt(`wa-spinner`)],Pi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Fi=`:host {
  display: inline-flex;
}

.button-group {
  display: flex;
  position: relative;
  isolation: isolate;
  flex-wrap: wrap;
  gap: 1px;

  @media (hover: hover) {
    > :hover,
    &::slotted(:hover) {
      z-index: 1;
    }
  }

  /* Focus and checked are always on top */
  > :focus,
  &::slotted(:focus),
  > [aria-checked='true'],
  &::slotted([aria-checked='true']),
  > [checked],
  &::slotted([checked]) {
    z-index: 2 !important;
  }
}
:host([orientation='vertical']) .button-group {
  flex-direction: column;
}

/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
.button-group.has-outlined {
  gap: 0;

  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
    margin-inline-start: calc(-1 * var(--border-width));
  }

  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
    margin-block-start: calc(-1 * var(--border-width));
  }
}
`,Ii=class extends dt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label=``,this.orientation=`horizontal`,this.variant=`neutral`}updated(e){super.updated(e),e.has(`orientation`)&&(this.setAttribute(`aria-orientation`,this.orientation),this.updateClassNames())}handleFocus(e){Li(e.target)?.classList.add(`button-focus`)}handleBlur(e){Li(e.target)?.classList.remove(`button-focus`)}handleMouseOver(e){Li(e.target)?.classList.add(`button-hover`)}handleMouseOut(e){Li(e.target)?.classList.remove(`button-hover`)}handleSlotChange(){this.updateClassNames()}updateClassNames(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{let n=e.indexOf(t),r=Li(t);r&&(r.appearance===`outlined`&&(this.hasOutlined=!0),r.classList.add(`wa-button-group__button`),r.classList.toggle(`wa-button-group__horizontal`,this.orientation===`horizontal`),r.classList.toggle(`wa-button-group__vertical`,this.orientation===`vertical`),r.classList.toggle(`wa-button-group__button-first`,n===0),r.classList.toggle(`wa-button-group__button-inner`,n>0&&n<e.length-1),r.classList.toggle(`wa-button-group__button-last`,n===e.length-1),r.classList.toggle(`wa-button-group__button-radio`,r.tagName.toLowerCase()===`wa-radio-button`))})}render(){return b`
      <slot
        part="base"
        class=${un({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};Ii.css=[Ei,Fi],l([ct(`slot`)],Ii.prototype,`defaultSlot`,2),l([C()],Ii.prototype,`disableRole`,2),l([C()],Ii.prototype,`hasOutlined`,2),l([S()],Ii.prototype,`label`,2),l([S({reflect:!0})],Ii.prototype,`orientation`,2),l([S({reflect:!0})],Ii.prototype,`variant`,2),Ii=l([rt(`wa-button-group`)],Ii);function Li(e){let t=`wa-button, wa-radio-button`;return e.closest(t)??e.querySelector(t)}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ri=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},zi=``;function Bi(e){zi=e}function Vi(){if(!zi){let e=document.querySelector(`[data-fa-kit-code]`);e&&Bi(e.getAttribute(`data-fa-kit-code`)||``)}return zi}var Hi=`7.0.1`;function Ui(e,t,n){let r=Vi(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${Hi}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Hi}/svgs/${a}/${e}.svg`)}var Wi={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Ui(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Gi(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ki={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},qi={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Ki[n][e]??Ki.regular[e]??Ki.regular[`circle-question`];return r?Gi(r):``}},Ji=`classic`,Yi=[Wi,qi],Xi=[];function Zi(e){Xi.push(e)}function Qi(e){Xi=Xi.filter(t=>t!==e)}function $i(e){return Yi.find(t=>t.name===e)}function ea(){return Ji}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ta=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},na=`:host {
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
`,ra=Symbol(),ia=Symbol(),aa,oa=new Map,N=class extends dt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ra:ia}catch{return ia}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return ra;aa||=new DOMParser;let r=aa.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ra}catch{return ra}}}connectedCallback(){super.connectedCallback(),Zi(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qi(this)}getIconSource(){let e=$i(this.library),t=this.family||ea();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?$i(this.library):void 0;if(!e){this.svg=null;return}let r=oa.get(e);r||(r=this.resolveIcon(e,n),oa.set(e,r));let i=await r;if(i===ia&&oa.delete(e),e===this.getIconSource().url){if(yn(i)){this.svg=i;return}switch(i){case ia:case ra:this.svg=null,this.dispatchEvent(new ta);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ri)}}}updated(e){super.updated(e);let t=$i(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:b`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};N.css=na,l([C()],N.prototype,`svg`,2),l([S({reflect:!0})],N.prototype,`name`,2),l([S({reflect:!0})],N.prototype,`family`,2),l([S({reflect:!0})],N.prototype,`variant`,2),l([S({attribute:`auto-width`,type:Boolean,reflect:!0})],N.prototype,`autoWidth`,2),l([S({attribute:`swap-opacity`,type:Boolean,reflect:!0})],N.prototype,`swapOpacity`,2),l([S()],N.prototype,`src`,2),l([S()],N.prototype,`label`,2),l([S({reflect:!0})],N.prototype,`library`,2),l([Mt(`label`)],N.prototype,`handleLabelChange`,1),l([Mt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],N.prototype,`setIcon`,1),N=l([rt(`wa-icon`)],N);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var sa=t({default:()=>O}),P;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var ca;function la(e){this.c=e}P=la.prototype,P.toString=(function(){return String.fromCharCode(this.c)});function ua(e){switch(typeof e){case`string`:return Ip.l();case`number`:return Ta(e)?e<<24>>24===e?Of.l():e<<16>>16===e?Ff.l():Ap.l():Ea(e)?kp.l():Op.l();case`boolean`:return Yd.l();case`undefined`:return bc.l();default:return e instanceof B?Np.l():e instanceof la?Qd.l():e&&e.$classData?e.$classData.l():null}}function da(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Ta(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ea(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof B?`java.lang.Long`:e instanceof la?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.h6()}}function fa(e,t){switch(typeof e){case`string`:return Fp(e,t);case`number`:return Ep(e,t);case`boolean`:return qd(e,t);case`undefined`:return _c(e,t);default:return e&&e.$classData||e===null?e.g(t):e instanceof B?jp(e,t):e instanceof la?Zd(Oa(e),t):Aa.prototype.g.call(e,t)}}function pa(e){switch(typeof e){case`string`:return Pp(e);case`number`:return Dp(e);case`boolean`:return Jd(e);case`undefined`:return vc(e);default:return e&&e.$classData||e===null?e.o():e instanceof B?Mp(e):e instanceof la?Xd(Oa(e)):Aa.prototype.o.call(e)}}function ma(e){return e===void 0?`undefined`:e.toString()}function ha(e,t){if(t===0)throw new Df(`/ by zero`);return e/t|0}function ga(e,t){if(t===0)throw new Df(`/ by zero`);return e%t|0}function _a(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function va(e){return String.fromCharCode(e)}function ya(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ba=0,xa=new WeakMap;function Sa(e){switch(typeof e){case`string`:return Pp(e);case`number`:return Dp(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Pp(n);default:if(e===null)return 0;var r=xa.get(e);return r===void 0&&(r=ba+1|0,ba=r,xa.set(e,r)),r}}function Ca(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function wa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Ta(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ea(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Da(e){return new la(e)}Da(0);function Oa(e){return e===null?0:e.c}function ka(e){return e===null?ca:e}function Aa(){}P=Aa.prototype,P.constructor=Aa;function F(){}F.prototype=P,P.o=(function(){return Sa(this)}),P.g=(function(e){return this===e}),P.t=(function(){var e=this.o();return da(this)+`@`+(+(e>>>0)).toString(16)}),P.toString=(function(){return this.t()});function ja(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}P=ja.prototype=new F,P.constructor=ja,P.a0=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.W=(function(){return new ja(this.a.slice())});function Ma(){}Ma.prototype=P;function Na(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}P=Na.prototype=new F,P.constructor=Na,P.a0=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.W=(function(){return new Na(this.a.slice())});function Pa(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}P=Pa.prototype=new F,P.constructor=Pa,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new Pa(this.a.slice())});function Fa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}P=Fa.prototype=new F,P.constructor=Fa,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new Fa(this.a.slice())});function Ia(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}P=Ia.prototype=new F,P.constructor=Ia,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new Ia(this.a.slice())});function La(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}P=La.prototype=new F,P.constructor=La,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new La(this.a.slice())});function Ra(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=ca}else this.a=e}P=Ra.prototype=new F,P.constructor=Ra,P.a0=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.W=(function(){return new Ra(this.a.slice())});function za(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}P=za.prototype=new F,P.constructor=za,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new za(this.a.slice())});function Ba(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}P=Ba.prototype=new F,P.constructor=Ba,P.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.W=(function(){return new Ba(this.a.slice())});function I(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}P=I.prototype,P.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new I().y(this,r,i)),this}),P.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),P.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),P.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ma;n.constructor=t,n.a0=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),n.W=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Va});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),P.r=(function(){return this.A||=new I().a(this),this.A}),P.l=(function(){return this.L||=new od(this),this.L}),P.R=(function(e){return this===e||this.F(e)}),P.S=(function(){return this.P?this.P.l():null}),P.Q=(function(){return this.O?this.O.l():null});var Va=new I;Va.n={},Va.E=`Ljava.lang.Object;`,Va.F=(e=>!e.X),Va.N=`java.lang.Object`,Va.I=(e=>e!==null),Va.A=new I().y(Va,ja,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Aa.prototype.$classData=Va;var Ha=new I().p(void 0,`V`,`void`,void 0,void 0);new I().p(!1,`Z`,`boolean`,Na,void 0);var Ua=new I().p(0,`C`,`char`,Pa,Uint16Array);new I().p(0,`B`,`byte`,Fa,Int8Array),new I().p(0,`S`,`short`,Ia,Int16Array),new I().p(0,`I`,`int`,La,Int32Array);var Wa=new I().p(null,`J`,`long`,Ra,void 0);new I().p(0,`F`,`float`,za,Float32Array),new I().p(0,`D`,`double`,Ba,Float64Array);function Ga(e){return ua(e).cp()+`@`+Sa(e)}function Ka(e){var t=e.cy;return t===void 0?Ga(e):t}function qa(){Ya=this,Xa().gE(new X((e=>void 0)),Uc().dB,!0)}P=qa.prototype=new F,P.constructor=qa;function Ja(){}Ja.prototype=P,P.gE=(function(e,t,n){return new Rd(e,n,t,this)}),new I().i(qa,`com.raquo.airstream.core.Observer$`,{b3:1});var Ya;function Xa(){return Ya||=new qa,Ya}function Za(e){this.bK=null,this.cz=null,this.bL=0,this.bK=e,this.cz=void 0;var t=vo().bm();this.bL=t===void 0?1:1+t.bL|0,ro().bo===-1||this.bL>ro().bo?zu().cu(new Cp(this,ro().bo)):co().O?co().ak.push(this)|0:vo().ck(this)}P=Za.prototype=new F,P.constructor=Za;function Qa(){}Qa.prototype=P;var $a=new I().i(Za,`com.raquo.airstream.core.Transaction`,{b6:1});function eo(){this.bo=0,this.cA=null,no=this,this.bo=1e3,this.cA=new X((e=>{throw cd(new K,`Attempted to run Transaction `+e+` after it was already executed.`)}))}P=eo.prototype=new F,P.constructor=eo;function to(){}to.prototype=P,P.e9=(function(e){try{e.bK.l(e);var t=e.cz;if(t!==void 0)for(;t.ha();)t.h0().he(e)}catch(e){var n=e instanceof ou?e:new Am(e);zu().cu(n)}}),new I().i(eo,`com.raquo.airstream.core.Transaction$`,{b7:1});var no;function ro(){return no||=new eo,no}function io(e){e.bp.length|0?new Za(new X((t=>{for(;(e.bp.length|0)>0;){var n=e.bp.shift();try{n.l(t)}catch(e){var r=e instanceof ou?e:new Am(e);zu().cu(r)}}for(;(e.ak.length|0)>0;){var i=e.ak.shift();vo().ck(i)}}))):(e.ak.length|0)>0&&new Za(new X((t=>{for(;(e.ak.length|0)>0;)vo().ck(e.ak.shift())})))}function ao(){this.O=!1,this.bp=null,this.ak=null,so=this,this.O=!1,this.bp=Uo().af(H().m(new(V.r()).C([]))),this.ak=Uo().af(H().m(new($a.r()).C([])))}P=ao.prototype=new F,P.constructor=ao;function oo(){}oo.prototype=P,new I().i(ao,`com.raquo.airstream.core.Transaction$onStart$`,{b8:1});var so;function co(){return so||=new ao,so}function lo(e,t){return e.al.get(t)}function uo(e,t){e.bq.unshift(t)}function fo(e){return e.bq.shift()}function po(e,t,n){var r=lo(e,t),i=r===void 0,a=r===void 0?Uo().af(H().m(new($a.r()).C([]))):r;a.push(n),i&&e.al.set(t,a)}function mo(e,t){var n=lo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.al.delete(t),i}}function ho(){this.bq=null,this.al=null,_o=this,this.bq=Uo().af(H().m(new($a.r()).C([]))),this.al=new Map}P=ho.prototype=new F,P.constructor=ho;function go(){}go.prototype=P,P.ck=(function(e){var t=this.bm();t===void 0?(uo(this,e),ro().e9(e),this.fe(e)):po(this,t,e)}),P.fe=(function(e){for(var t=e;;){var n=this.bm(),r=t;if(!(n!==void 0&&Qc().I(r,n)))throw cd(new K,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gb(t),t.bK=ro().cA;var i=this.bm();if(Qc().I(i,void 0))if((this.al.size|0)>0){var a=new Au(0);throw this.al.forEach((e=>((t,n)=>{e.b4=e.b4+(t.length|0)|0}))(a)),cd(new K,`Transaction queue error: Stack cleared, but a total of `+a.b4+` children for `+(this.al.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ro().e9(i),t=i}}),P.gb=(function(e){for(var t=e;;){var n=mo(this,t);if(Qc().I(n,void 0)){fo(this);var r=this.bm();if(!Qc().I(r,void 0))t=r;else return}else{uo(this,n);return}}}),P.bm=(function(){return this.bq[0]}),new I().i(ho,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{b9:1});var _o;function vo(){return _o||=new ho,_o}function yo(e,t){var n=e.a1.indexOf(t)|0;if(n!==-1)e.a1.splice(n,1),e.D.h()||t.ep();else throw cd(new K,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function bo(e){for(;(e.br.length|0)>0;)yo(e,e.br.shift())}function xo(e){this.cB=null,this.a1=null,this.aC=!1,this.br=null,this.D=null,this.aD=0,this.cB=e,this.a1=Uo().af(H().m(new(To.r()).C([]))),this.aC=!0,this.br=Uo().af(H().m(new(To.r()).C([]))),this.D=Z(),this.aD=0}P=xo.prototype=new F,P.constructor=xo;function So(){}So.prototype=P,P.dS=(function(){if(this.D.h()){var e=co(),t=(()=>{var e=new bl(this.cB);this.D=new Vp(e),this.aC=!1,this.aD=0;for(var t=0,n=this.a1.length|0;t<n;){var r=t+this.aD|0;this.a1[r].eo(e),t=1+t|0}bo(this),this.aC=!0,this.aD=0});if(co(),e.O)t();else{e.O=!0;try{t()}finally{e.O=!1,io(e)}}}else throw cd(new K,`Can not activate `+this+`: it is already active`)}),P.f8=(function(){if(this.D.h())throw cd(new K,`Can not deactivate DynamicOwner: it is not active`);this.aC=!1;for(var e=this.a1,t=0,n=e.length|0;t<n;)e[t].ep(),t=1+t|0;bo(this);var r=this.D;r.h()||r.x().fO(),bo(this),this.aC=!0,this.D=Z()}),P.eU=(function(e,t){t?(this.aD=1+this.aD|0,this.a1.unshift(e)):this.a1.push(e);var n=this.D;if(!n.h()){var r=n.x();e.eo(r)}}),P.gg=(function(e){this.aC?yo(this,e):this.br.push(e)}),new I().i(xo,`com.raquo.airstream.ownership.DynamicOwner`,{ba:1});function Co(e,t,n){this.bs=null,this.cC=null,this.bt=null,this.bs=e,this.cC=t,this.bt=Z(),e.eU(this,n)}P=Co.prototype=new F,P.constructor=Co;function wo(){}wo.prototype=P,P.bH=(function(){this.bs.gg(this)}),P.eo=(function(e){var t=co(),n=(()=>{this.bt=this.cC.l(e)});if(co(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,io(t)}}}),P.ep=(function(){var e=this.bt;e.h()||(e.x().bH(),this.bt=Z())});var To=new I().i(Co,`com.raquo.airstream.ownership.DynamicSubscription`,{bb:1});function Eo(){}P=Eo.prototype=new F,P.constructor=Eo;function Do(){}Do.prototype=P,P.gC=(function(e,t,n){return new Co(e,new X((e=>new Vp(t.l(e)))),n)}),P.gu=(function(e,t,n){return new Co(e,new X((e=>(t.l(e),Z()))),n)}),new I().i(Eo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bc:1});var Oo;function ko(){return Oo||=new Eo,Oo}function Ao(e){e.aE=Uo().af(H().m(new(Lo.r()).C([])))}function jo(e){for(var t=e.aE,n=0,r=t.length|0;n<r;)Po(t[n]),n=1+n|0;e.aE.length=0}function Mo(e,t){var n=e.aE.indexOf(t)|0;if(n!==-1)e.aE.splice(n,1);else throw cd(new K,`Can not remove Subscription from Owner: subscription not found.`)}function No(e,t){e.aE.push(t)}function Po(e){if(!e.bN)e.cE.az(),e.bN=!0;else throw cd(new K,`Can not kill Subscription: it was already killed.`)}function Fo(e,t){this.cF=null,this.cE=null,this.bN=!1,this.cF=e,this.cE=t,this.bN=!1,e.ga(this)}P=Fo.prototype=new F,P.constructor=Fo;function Io(){}Io.prototype=P,P.bH=(function(){Po(this),Mo(this.cF,this)});var Lo=new I().i(Fo,`com.raquo.airstream.ownership.Subscription`,{bf:1});function Ro(e,t){this.cG=null,this.cH=null,this.a2=null,this.am=!1,this.cG=e,this.cH=t,this.a2=Z(),this.am=!1}P=Ro.prototype=new F,P.constructor=Ro;function zo(){}zo.prototype=P,P.fL=(function(){var e=this.a2;return!e.h()&&!e.x().bs.D.h()}),P.go=(function(e){if(this.am)throw cd(new K,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a2;if(t.h())var n=!1;else var n=e===t.x().bs;if(!n){this.fL()&&!e.D.h()&&(this.am=!0);var r=this.a2;r.h()||(r.x().bH(),this.a2=Z()),this.a2=new Vp(ko().gC(e,new X((e=>(this.am||this.cG.az(),new Fo(e,new ff((()=>{this.am||this.cH.az()})))))),!1)),this.am=!1}}),P.f4=(function(){if(this.am)throw cd(new K,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a2;e.h()||e.x().bH(),this.a2=Z()}),new I().i(Ro,`com.raquo.airstream.ownership.TransferableSubscription`,{bg:1});function Bo(){}P=Bo.prototype=new F,P.constructor=Bo;function Vo(){}Vo.prototype=P,P.af=(function(e){return[...pl().gA(e)]}),new I().i(Bo,`com.raquo.ew.JsArray$`,{bh:1});var Ho;function Uo(){return Ho||=new Bo,Ho}function Wo(){this.cI=null,Ko=this,document.createElement(`template`),this.f7(Y().X.gv().gw()),this.cI=RegExp(` `,`g`)}P=Wo.prototype=new F,P.constructor=Wo;function Go(){}Go.prototype=P,P.eX=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof ou?e:new Am(e);if(n instanceof Am&&n.Q instanceof DOMException)return!1;throw n instanceof Am?n.Q:n}}),P.fM=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Qc().I(t,r))return!0;n=r}}),P.f6=(function(e){return document.createElement(e.bT)}),P.fy=(function(e,t){var n=this.fz(e,t);return n===void 0?void 0:t.aU.bD(n)}),P.fz=(function(e,t){var n=e.V.getAttributeNS(null,t.ao);return n===null?void 0:n}),P.ew=(function(e,t,n){this.gl(e,t,t.aU.bg(n))}),P.gl=(function(e,t,n){n===null?this.gf(e,t):e.V.setAttribute(t.ao,n)}),P.gf=(function(e,t){e.V.removeAttribute(t.ao)}),P.gm=(function(e,t,n){this.gn(e,t,t.cP.bg(n))}),P.gn=(function(e,t,n){e.V[t.cQ]=n}),P.f7=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.cZ)}),P.fC=(function(e,t){var n=this.fD(e,t);return n===void 0?void 0:t.bP.bD(n)}),P.fD=(function(e,t){var n=e.cs(),r=t.bv,i=n.getAttributeNS(r.h()?null:r.x(),t.bQ);return i===null?void 0:i}),P.gp=(function(e,t,n){this.gq(e,t,t.bP.bg(n))}),P.gq=(function(e,t,n){if(n===null)this.gh(e,t);else{var r=t.bv;if(r.h())e.cs().setAttribute(t.bu,n);else{var i=r.x();e.cs().setAttributeNS(i,t.bu,n)}}}),P.gh=(function(e,t){var n=e.cs(),r=t.bv;n.removeAttributeNS(r.h()?null:r.x(),t.bQ)}),P.fa=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new ag(this.f9(r),n);r=i,n=a}}),P.f9=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cI,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new I().i(Wo,`com.raquo.laminar.DomApi$`,{bi:1});var Ko;function qo(){return Ko||=new Wo,Ko}function Jo(e){Xa(),zu()}function Yo(e){e.ey=_s()}function Xo(e){Zo(e,new X((e=>{e.cR.V.focus()})))}function Zo(e,t){return new Ll(new X((e=>{var n=new Ou(!e.aF.D.h()),r=new X((e=>{n.bC?n.bC=!1:t.l(e)}));ko().gu(e.aF,new X((e=>(t=>{r.l(new fs(e,t))}))(e)),!1)})),_s())}function Qo(){this.an=null,this.bO=null,es=this,this.an=new wl(ts()),new wl(ts()),new wl(ts()),this.bO=new Sl}P=Qo.prototype=new F,P.constructor=Qo;function $o(){}$o.prototype=P,new I().i(Qo,`com.raquo.laminar.codecs.package$`,{bq:1});var es;function ts(){return es||=new Qo,es}function ns(e){e.ez=rs(e,`class`,` `)}function rs(e,t,n){var r=Ol(new kl,t,ts().an);return new El(r.ao,new X((e=>{var t=qo().fy(e,r);return t===void 0?``:t})),new hf(((e,t)=>{qo().ew(e,r,t)})),n)}function is(e){e.ex=as(e,`class`,` `)}function as(e,t,n){var r=new Nl(t,ts().an,Z());return new El(r.bu,new X((e=>{var t=qo().fC(e,r);return t===void 0?``:t})),new hf(((e,t)=>{qo().gp(e,r,t)})),n)}function os(){}P=os.prototype=new F,P.constructor=os;function ss(){}ss.prototype=P;function cs(){this.eA=null,this.eB=null,this.eC=null,this.eD=null,this.eA=`http://www.w3.org/2000/svg`,this.eB=`http://www.w3.org/1999/xlink`,this.eC=`http://www.w3.org/XML/1998/namespace`,this.eD=`http://www.w3.org/2000/xmlns/`}P=cs.prototype=new F,P.constructor=cs;function ls(){}ls.prototype=P,P.fU=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Hf(e)}}),new I().i(cs,`com.raquo.laminar.keys.SvgAttr$`,{bF:1});var us;function ds(){return us||=new cs,us}function fs(e,t){this.cR=null,this.cR=e}P=fs.prototype=new F,P.constructor=fs;function ps(){}ps.prototype=P,new I().i(fs,`com.raquo.laminar.lifecycle.MountContext`,{bG:1});var L=new I().i(1,`com.raquo.laminar.modifiers.Modifier`,{U:1});function ms(){this.eE=null,gs=this,this.eE=new Fl}P=ms.prototype=new F,P.constructor=ms;function hs(){}hs.prototype=P,new I().i(ms,`com.raquo.laminar.modifiers.Modifier$`,{bI:1});var gs;function _s(){return gs||=new ms,gs}function vs(){}P=vs.prototype=new F,P.constructor=vs;function ys(){}ys.prototype=P,P.dU=(function(e,t,n){var r=new Vp(e);bf(t,r),n!==void 0&&n.hc(e,t);var i=qo().eX(e.cr(),t.V);return i&&xf(t,r),i}),new I().i(vs,`com.raquo.laminar.nodes.ParentNode$`,{bN:1});var bs;function xs(){return bs||=new vs,bs}function Ss(){ws=this,Uo().af(H().gF(new La(new Int32Array([0]))))}P=Ss.prototype=new F,P.constructor=Ss;function Cs(){}Cs.prototype=P,P.eQ=(function(){return new X((e=>void 0))}),new I().i(Ss,`com.raquo.laminar.tags.CustomHtmlTag$`,{bS:1});var ws;function Ts(){return ws||=new Ss,ws}function Es(){}P=Es.prototype=new F,P.constructor=Es;function Ds(){}Ds.prototype=P,P.eV=(function(){ks().fk(),ks().fl(),ks().fm(),ks().fn(),ks().fo(),ks().fp(),ks().fq(),ks().fr()}),P.fk=(function(){var e=document.querySelector(`#example1`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([])))))}),P.fl=(function(){var e=document.querySelector(`#example2`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>(G().aS(),Y().X).aT().q(`#4a90e2`))),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([])))))}),P.fm=(function(){var e=document.querySelector(`#example3`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>(G().aS(),Y().X).aT().q(`#f5a623ff`))),new J((e=>e.g7().q(!0))),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([])))))}),P.fn=(function(){var e=document.querySelector(`#example4`);e!==null&&(Y(),new Hu(e,(G().H(H().m(new(V.r()).C([new J((e=>e.bG().fG())),new J((e=>(G().aS(),Y().X).aT().q(`#4a90e2`))),new J((e=>e.J().q(`Pick a hex color`)))])),H().m(new(L.r()).C([]))),G().H(H().m(new(V.r()).C([new J((e=>e.bG().gi())),new J((e=>(G().aS(),Y().X).aT().q(`rgb(80, 227, 194)`))),new J((e=>e.J().q(`Pick an RGB color`)))])),H().m(new(L.r()).C([]))),G().H(H().m(new(V.r()).C([new J((e=>e.bG().fI())),new J((e=>(G().aS(),Y().X).aT().q(`hsl(290, 87%, 47%)`))),new J((e=>e.J().q(`Pick an HSL color`)))])),H().m(new(L.r()).C([]))),G().H(H().m(new(V.r()).C([new J((e=>e.bG().fJ())),new J((e=>(G().aS(),Y().X).aT().q(`hsv(55, 89%, 97%)`))),new J((e=>e.J().q(`Pick an HSV color`)))])),H().m(new(L.r()).C([]))))))}),P.fo=(function(){var e=document.querySelector(`#example5`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>e.J().q(`Select a color`))),new J((e=>e.gx().q(`#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;`)))])),H().m(new(L.r()).C([])))))}),P.fp=(function(){var e=document.querySelector(`#example6`);e!==null&&(Y(),new Hu(e,(G().H(H().m(new(V.r()).C([new J((e=>e.cv().gt())),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([]))),G().H(H().m(new(V.r()).C([new J((e=>e.cv().fS())),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([]))),G().H(H().m(new(V.r()).C([new J((e=>e.cv().fP())),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([]))))))}),P.fq=(function(){var e=document.querySelector(`#example7`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>e.fc().q(!0))),new J((e=>e.J().q(`Select a color`)))])),H().m(new(L.r()).C([])))))}),P.fr=(function(){var e=document.querySelector(`#example8`);e!==null&&(Y(),new Hu(e,G().H(H().m(new(V.r()).C([new J((e=>e.J().q(`Select a color`))),new J((e=>e.fH().q(`Choose a color with appropriate contrast!`)))])),H().m(new(L.r()).C([])))))}),new I().i(Es,`examples.colorPicker.Main$package$`,{bV:1});var Os;function ks(){return Os||=new Es,Os}function As(e){try{ks().eV()}catch(e){throw e}}function js(){this.eG=!1,this.aV=null,this.bx=null,this.dt=null,this.c0=!1,this.eF=0,this.eI=0,this.eH=null,Ns=this,this.eG=!0,this.aV=new ArrayBuffer(8),this.bx=new Int32Array(this.aV,0,2),new Float32Array(this.aV,0,2),this.dt=new Float64Array(this.aV,0,1),this.bx[0]=16909060,this.c0=(new Int8Array(this.aV,0,8)[0]|0)==1,this.eF=this.c0?0:1,this.eI=this.c0?1:0,this.eH=null}P=js.prototype=new F,P.constructor=js;function Ms(){}Ms.prototype=P,P.cq=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dt[0]=e,(this.bx[0]|0)^(this.bx[1]|0))}),new I().i(js,`java.lang.FloatingPointBits$`,{ca:1});var Ns;function Ps(){return Ns||=new js,Ns}function Fs(e,t){for(var n=R().T(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Is(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Ql(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Ql(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(eu.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Is(e,t){var n=R().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=R().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=R().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=R().T(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=R().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ls(e,c[1]),Ws(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ls(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ls(e,d[1]),`<clinit>`]}function Ls(e,t){var n=zs(e);if(gc().dz.call(n,t))var r=zs(e)[t];else var r=tc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Rs(e){if(!((1&e.K)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c2=t,e.K=(1|e.K)<<24>>24}return e.c2}function zs(e){return(1&e.K)<<24>>24?e.c2:Rs(e)}function Bs(e){if(!((2&e.K)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c3=t,e.K=(2|e.K)<<24>>24}return e.c3}function Vs(e){return(2&e.K)<<24>>24?e.c3:Bs(e)}function Hs(e){return(4&e.K)<<24>>24||(e.c1=Object.keys(Vs(e)),e.K=(4|e.K)<<24>>24),e.c1}function Us(e){return(4&e.K)<<24>>24?e.c1:Hs(e)}function Ws(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Gs(e,t){return t?t.arguments&&t.stack?Ks(e,t):t.stack&&t.sourceURL?Ys(e,t):t.stack&&t.number?Js(e,t):t.stack&&t.fileName?qs(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Xs(e,t):Zs(e,t):Xs(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Qs(e,t):$s(e,t):t.stack&&!t.fileName?Ks(e,t):ec(e,t):[]}function Ks(e,t){return(t.stack+`
`).replace(R().T(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(R().B(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(R().B(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(R().B(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(R().B(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function qs(e,t){return t.stack.replace(R().B(`(?:\\n@:0)?\\s+$`,`m`),``).replace(R().B(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Js(e,t){return t.stack.replace(R().B(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(R().B(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(R().B(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ys(e,t){return t.stack.replace(R().B(`\\[native code\\]\\n`,`m`),``).replace(R().B(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(R().B(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Xs(e,t){for(var n=R().B(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Zs(e,t){for(var n=R().B(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Qs(e,t){for(var n=R().T(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function $s(e,t){for(var n=R().T(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(R().T(`<anonymous function: (\\S+)>`),`$1`).replace(R().T(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function ec(e,t){return[]}function tc(e,t,n){for(;;)if(t<(Us(e).length|0)){var r=Us(e)[t];if(n.startsWith(r))return``+Vs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function nc(){this.c2=null,this.c3=null,this.c1=null,this.K=0}P=nc.prototype=new F,P.constructor=nc;function rc(){}rc.prototype=P,P.fs=(function(e){return Fs(this,Gs(this,e))}),new I().i(nc,`java.lang.StackTrace$`,{ch:1});var ic;function ac(){return ic||=new nc,ic}function oc(){}P=oc.prototype=new F,P.constructor=oc;function sc(){}sc.prototype=P,P.T=(function(e){return new RegExp(e)}),P.B=(function(e,t){return new RegExp(e,t)}),new I().i(oc,`java.lang.StackTrace$StringRE$`,{ci:1});var cc;function R(){return cc||=new oc,cc}function lc(){this.dv=null,this.eJ=null,dc=this,this.dv=new Mm(!1),this.eJ=new Mm(!0)}P=lc.prototype=new F,P.constructor=lc;function uc(){}uc.prototype=P,new I().i(lc,`java.lang.System$Streams$`,{cn:1});var dc;function fc(){return dc||=new lc,dc}function pc(){this.dz=null,hc=this,this.dz=Object.prototype.hasOwnProperty}P=pc.prototype=new F,P.constructor=pc;function mc(){}mc.prototype=P,new I().i(pc,`java.lang.Utils$Cache$`,{cp:1});var hc;function gc(){return hc||=new pc,hc}function _c(e,t){return e===t}function vc(e){return 0}function yc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ak)}var bc=new I().i(0,`java.lang.Void`,{ak:1},(e=>e===void 0));function xc(e,t){throw new kf(`argument type mismatch`)}function Sc(){}P=Sc.prototype=new F,P.constructor=Sc;function Cc(){}Cc.prototype=P,P.bi=(function(e){return e instanceof ja||e instanceof Na||e instanceof Pa||e instanceof Fa||e instanceof Ia||e instanceof La||e instanceof Ra||e instanceof za||e instanceof Ba?e.a.length:xc(this,e)}),new I().i(Sc,`java.lang.reflect.Array$`,{cq:1});var wc;function Tc(){return wc||=new Sc,wc}function Ec(){}P=Ec.prototype=new F,P.constructor=Ec;function Dc(){}Dc.prototype=P,P.eg=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),P.ef=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eh=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.ec=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.ei=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.ed=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),P.ee=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new I().i(Ec,`java.util.Arrays$`,{cr:1});var Oc;function z(){return Oc||=new Ec,Oc}function B(e,t){this.c=0,this.d=0,this.c=e,this.d=t}P=B.prototype=new F,P.constructor=B;function kc(){}kc.prototype=P,P.g=(function(e){return e instanceof B&&this.c===e.c&&this.d===e.d}),P.o=(function(){return this.c^this.d}),P.t=(function(){return Lc().et(this.c,this.d)}),P.hh=(function(){return this.c}),P.hg=(function(){return Lc().es(this.c,this.d)}),P.hf=(function(){return Lc().bl(this.c,this.d)}),P.gX=(function(){return this.c<<24>>24}),P.hd=(function(){return this.c<<16>>16}),P.h7=(function(){return this.c}),P.h8=(function(){return this}),P.h3=(function(){return Lc().es(this.c,this.d)}),P.h1=(function(){return Lc().bl(this.c,this.d)}),P.gZ=(function(e){return Lc().eq(this.c,this.d,e.c,e.d)}),P.gY=(function(e){return Lc().eq(this.c,this.d,e.c,e.d)}),P.h2=(function(e){return this.c===e.c&&this.d===e.d}),P.hb=(function(e){return!(this.c===e.c&&this.d===e.d)}),P.gP=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),P.gQ=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),P.gL=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),P.gM=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),P.hj=(function(){return new B(~this.c,~this.d)}),P.gJ=(function(e){return new B(this.c|e.c,this.d|e.d)}),P.gI=(function(e){return new B(this.c&e.c,this.d&e.d)}),P.gW=(function(e){return new B(this.c^e.c,this.d^e.d)}),P.gR=(function(e){var t=this.c;return new B(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),P.gO=(function(e){var t=this.d;return new B(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),P.gN=(function(e){var t=this.d;return new B(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),P.hi=(function(){var e=this.c,t=this.d;return new B(-e|0,e===0?-t|0:~t)}),P.gU=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new B(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),P.gS=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new B(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),P.gV=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new B(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),P.gK=(function(e){var t=Lc();return new B(t.fd(this.c,this.d,e.c,e.d),t.r)}),P.gT=(function(e){var t=Lc();return new B(t.ge(this.c,this.d,e.c,e.d),t.r)}),new I().i(B,`org.scalajs.linker.runtime.RuntimeLong`,{al:1});function Ac(e,t,n){return-2097152&n?Nc(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function jc(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.r=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.r=0,n>>>o|0}else return Nc(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.r=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.r=s/4294967296|0,s|0}}function Mc(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.r=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.r=n&(-1+i|0),t):Nc(e,t,n,r,i,1)|0;if(-2097152&i)return e.r=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.r=a/4294967296|0,a|0}function Nc(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,ee=u,v=d;if(_===v?(-2147483648^g)>=(-2147483648^ee):(-2147483648^_)>=(-2147483648^v)){var te=f,ne=p,re=u,y=d,ie=te-re|0,ae=(-2147483648^ie)>(-2147483648^te)?-1+(ne-y|0)|0:ne-y|0;f=ie,p=ae,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var oe=u,se=d,ce=oe>>>1|0|se<<31,le=se>>>1|0;u=ce,d=le}var ue=f,de=p;if(de===i?(-2147483648^ue)>=(-2147483648^r):(-2147483648^de)>=(-2147483648^i)){var fe=f,pe=4294967296*p+ +(fe>>>0),me=4294967296*i+ +(r>>>0);if(a!==1){var he=pe/me,ge=he|0,_e=he/4294967296|0,ve=m,ye=h,be=ve+ge|0,xe=(-2147483648^be)<(-2147483648^ve)?1+(ye+_e|0)|0:ye+_e|0;m=be,h=xe}if(a!==0){var Se=pe%me;f=Se|0,p=Se/4294967296|0}}if(a===0)return e.r=h,m;if(a===1)return e.r=p,f;var Ce=m,we=4294967296*h+ +(Ce>>>0),Te=``+f,Ee=Te.length;return``+we+`000000000`.substring(Ee)+Te}function Pc(){this.r=0}P=Pc.prototype=new F,P.constructor=Pc;function Fc(){}Fc.prototype=P,P.et=(function(e,t){return t===e>>31?``+e:t<0?`-`+Ac(this,-e|0,e===0?-t|0:~t):Ac(this,e,t)}),P.bl=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),P.es=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),P.h5=(function(e){return new B(e,e>>31)}),P.h4=(function(e){return new B(this.er(e),this.r)}),P.er=(function(e){if(e<-0x8000000000000000)return this.r=-2147483648,0;if(e>=0x8000000000000000)return this.r=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.r=e<0&&t!==0?-1+n|0:n,t}),P.eq=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),P.fd=(function(e,t,n,r){if((n|r)===0)throw new Df(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.r=0,-2147483648;var i=ha(e,n);return this.r=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=-1,-1;else return this.r=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=jc(this,a,o,s,c);if((t^r)>=0)return l;var u=this.r;return this.r=l===0?-u|0:~u,-l|0}}),P.ge=(function(e,t,n,r){if((n|r)===0)throw new Df(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ga(e,n);return this.r=i>>31,i}else return this.r=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=0,0;else return this.r=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Mc(this,a,o,s,c);if(t<0){var u=this.r;return this.r=l===0?-u|0:~u,-l|0}else return l}}),new I().i(Pc,`org.scalajs.linker.runtime.RuntimeLong$`,{ct:1});var Ic;function Lc(){return Ic||=new Pc,Ic}var V=new I().i(1,`scala.Function1`,{e:1});function Rc(){}P=Rc.prototype=new F,P.constructor=Rc;function zc(){}zc.prototype=P;function Bc(){this.dC=null,this.dB=null,Hc=this,this.dC=new J((e=>Uc().dC)),this.dB=new nf}P=Bc.prototype=new F,P.constructor=Bc;function Vc(){}Vc.prototype=P,new I().i(Bc,`scala.PartialFunction$`,{cD:1});var Hc;function Uc(){return Hc||=new Bc,Hc}function Wc(e,t){for(var n=e.k();n.s();)t.l(n.f())}function Gc(e,t,n,r){return e.y()===0?``+t+r:e.b6(fg(new pg),t,n,r).G.p}function Kc(e,t,n,r,i){var a=t.G;n.length!==0&&(a.p=``+a.p+n);var o=e.k();if(o.s()){var s=o.f();for(a.p=``+a.p+s;o.s();){a.p=``+a.p+r;var c=o.f();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function qc(e,t){this.dI=null,this.b1=null,this.dI=e,this.b1=t}P=qc.prototype=new F,P.constructor=qc;function Jc(){}Jc.prototype=P,P.fF=(function(){return this.dI.az().k()}),new I().i(qc,`scala.collection.Iterator$ConcatIteratorCell`,{d0:1});function Yc(){}P=Yc.prototype=new F,P.constructor=Yc;function Xc(){}Xc.prototype=P,P.I=(function(e,t){return e===t||(Zl(e)?this.fj(e,t):e instanceof la?this.fh(e,t):e===null?t===null:fa(e,t))}),P.fj=(function(e,t){if(Zl(t))return this.fi(e,t);if(t instanceof la){if(typeof e==`number`)return+e===t.c;if(e instanceof B){var n=ka(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:fa(e,t)}else return e===null?t===null:fa(e,t)}),P.fi=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof B){var r=ka(t);return n===Lc().bl(r.c,r.d)}else return!1}else if(e instanceof B){var i=ka(e),a=i.c,o=i.d;if(t instanceof B){var s=ka(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Lc().bl(a,o)===u}else return!1}else return e===null?t===null:fa(e,t)}),P.fh=(function(e,t){if(t instanceof la)return e.c===t.c;if(Zl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof B){var n=ka(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:fa(t,e)}else return e===null&&t===null}),new I().i(Yc,`scala.runtime.BoxesRunTime$`,{dC:1});var Zc;function Qc(){return Zc||=new Yc,Zc}var $c=new I().i(0,`scala.runtime.Null$`,{dF:1});function el(){}P=el.prototype=new F,P.constructor=el;function tl(){}tl.prototype=P,P.aM=(function(e,t){if(e instanceof ja||e instanceof La||e instanceof Ba||e instanceof Ra||e instanceof za)return e.a[t];if(e instanceof Pa)return Da(e.a[t]);if(e instanceof Fa||e instanceof Ia||e instanceof Na)return e.a[t];throw e===null?new Pf:new Hf(e)}),P.f1=(function(e,t,n){if(e instanceof ja)e.a[t]=n;else if(e instanceof La)e.a[t]=n|0;else if(e instanceof Ba)e.a[t]=+n;else if(e instanceof Ra)e.a[t]=ka(n);else if(e instanceof za)e.a[t]=Math.fround(n);else if(e instanceof Pa)e.a[t]=Oa(n);else if(e instanceof Fa)e.a[t]=n|0;else if(e instanceof Ia)e.a[t]=n|0;else if(e instanceof Na)e.a[t]=!!n;else if(e===null)throw new Pf;else throw new Hf(e)}),P.eS=(function(e){return Gc(e.aQ(),e.ai()+`(`,`,`,`)`)}),P.m=(function(e){return e===null?null:e.a.length===0?Qp(nm()):new kh(e)}),P.gF=(function(e){return e===null?null:new Th(e)}),new I().i(el,`scala.runtime.ScalaRunTime$`,{dG:1});var nl;function H(){return nl||=new el,nl}function rl(){}P=rl.prototype=new F,P.constructor=rl;function il(){}il.prototype=P,P.b=(function(e,t){var n=this.bI(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),P.bI=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),P.j=(function(e,t){return this.f2(e^t)}),P.f2=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.aP=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),P.S=(function(e){var t=_a(e);if(t===e)return t;var n=Lc(),r=n.er(e),i=n.r;return Lc().bl(r,i)===e?r^i:Ps().cq(e)}),P.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.S(+e);if(e instanceof B){var t=ka(e);return this.aP(new B(t.c,t.d))}else return pa(e)}),P.bk=(function(e){throw Af(new jf,``+e)}),new I().i(rl,`scala.runtime.Statics$`,{dI:1});var al;function U(){return al||=new rl,al}function ol(){}P=ol.prototype=new F,P.constructor=ol;function sl(){}sl.prototype=P,P.gr=(function(e,t){return setTimeout((()=>{t.az()}),e)}),new I().i(ol,`scala.scalajs.js.timers.package$`,{dL:1});var cl;function ll(){return cl||=new ol,cl}function ul(){}P=ul.prototype=new F,P.constructor=ul;function dl(){}dl.prototype=P,P.gA=(function(e){var t=[];return e.bh(new J((e=>t.push(e)|0))),t}),new I().i(ul,`scala.scalajs.runtime.Compat$`,{dU:1});var fl;function pl(){return fl||=new ul,fl}function ml(){}P=ml.prototype=new F,P.constructor=ml;function hl(){}hl.prototype=P,P.gs=(function(e){var t=`Illegal command line`+(e.en()===0?``:e.en()===1?` after first argument`:` after `+e.en()+` arguments`)+`: `+e.h9();mu().g9().fN(t+`
`)}),new I().i(ml,`scala.util.CommandLineParser$`,{dW:1});function gl(e){this.cj=null,this.cj=e}P=gl.prototype=new F,P.constructor=gl;function _l(){}_l.prototype=P,P.t=(function(){return`DynamicVariable(`+this.cj+`)`}),new I().i(gl,`scala.util.DynamicVariable`,{dY:1});function vl(){}P=vl.prototype=new F,P.constructor=vl;function yl(){}yl.prototype=P,P.b=(function(e,t){var n=this.bI(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),P.bI=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),P.j=(function(e,t){return this.C(e^t)}),P.C=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.eu=(function(e,t,n){var r=e.ag();if(r===0)return Pp(e.ai());var i=t;n||(i=this.b(i,Pp(e.ai())));for(var a=0;a<r;)i=this.b(i,U().w(e.ah(a))),a=1+a|0;return this.j(i,r)}),P.gB=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.k();o.s();){var s=o.f(),c=U().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bI(l,a),this.j(l,i)}),P.g8=(function(e,t){var n=e.k(),r=t;if(!n.s())return this.j(r,0);var i=n.f();if(!n.s())return this.j(this.b(r,U().w(i)),1);var a=n.f(),o=U().w(i);r=this.b(r,o);for(var s=r,c=U().w(a),l=c-o|0,u=2;n.s();){r=this.b(r,c);var d=U().w(n.f());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.s();)r=this.b(r,U().w(n.f())),u=1+u|0;return this.j(r,u)}c=d,u=1+u|0}return this.C(this.b(this.b(s,l),c))}),P.dX=(function(e,t){var n=t,r=Tc().bi(e);switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,U().w(H().aM(e,0))),1);default:var i=U().w(H().aM(e,0));n=this.b(n,i);for(var a=n,o=U().w(H().aM(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=U().w(H().aM(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,U().w(H().aM(e,c))),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.gc=(function(e,t,n,r){return this.C(this.b(this.b(this.b(r,e),t),n))}),P.fK=(function(e,t){var n=t,r=e.i();switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,U().w(e.n(0))),1);default:var i=U().w(e.n(0));n=this.b(n,i);for(var a=n,o=U().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=U().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,U().w(e.n(c))),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.fQ=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.h();){var l=c.Z(),u=c.U(),d=U().w(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gc(s,a,o,t):this.j(r,n)}),P.e6=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.dY=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.dZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.e0=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,U().S(e.a[0])),1);default:var i=U().S(e.a[0]);n=this.b(n,i);for(var a=n,o=U().S(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=U().S(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,U().S(e.a[c])),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.e1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,U().S(e.a[0])),1);default:var i=U().S(e.a[0]);n=this.b(n,i);for(var a=n,o=U().S(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=U().S(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,U().S(e.a[c])),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.e2=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.e3=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:var i=n,a=e.a[0];return this.j(this.b(i,U().aP(new B(a.c,a.d))),1);default:var o=e.a[0],s=U().aP(new B(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=U().aP(new B(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=U().aP(new B(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.b(h,U().aP(new B(g.c,g.d))),f=1+f|0}return this.j(n,r)}u=m,f=1+f|0}return this.C(this.b(this.b(c,d),u))}}),P.e4=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.j(n,r)}o=l,c=1+c|0}return this.C(this.b(this.b(a,s),o))}}),P.e5=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.j(n,0);case 1:return this.j(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.j(n,r)}a=0,s=1+s|0}return this.C(this.b(this.b(i,o),a))}});function bl(e){this.aE=null,this.cD=null,this.bM=!1,this.cD=e,Ao(this),this.bM=!1}P=bl.prototype=new F,P.constructor=bl;function xl(){}xl.prototype=P,P.ga=(function(e){this.bM?(Po(e),this.cD.az()):No(this,e)}),P.fO=(function(){jo(this),this.bM=!0}),new I().i(bl,`com.raquo.airstream.ownership.OneTimeOwner`,{bd:1,be:1});function Sl(){}P=Sl.prototype=new F,P.constructor=Sl;function Cl(){}Cl.prototype=P,P.fb=(function(e){return e!==null}),P.fg=(function(e){return e?``:null}),P.bD=(function(e){return this.fb(e)}),P.bg=(function(e){return this.fg(!!e)}),new I().i(Sl,`com.raquo.laminar.codecs.package$$anon$1`,{br:1,Y:1});function wl(e){if(e===null)throw new Pf}P=wl.prototype=new F,P.constructor=wl;function Tl(){}Tl.prototype=P,P.bg=(function(e){return e}),P.bD=(function(e){return e}),new I().i(wl,`com.raquo.laminar.codecs.package$$anon$2`,{bs:1,Y:1});function El(e,t,n,r){}P=El.prototype=new ss,P.constructor=El;function Dl(){}Dl.prototype=P,new I().i(El,`com.raquo.laminar.keys.CompositeKey`,{bC:1,S:1});function Ol(e,t,n){return e.ao=t,e.aU=n,e}function kl(){this.ao=null,this.aU=null}P=kl.prototype=new ss,P.constructor=kl;function Al(){}Al.prototype=P,P.q=(function(e){return new Bu(this,e,new _f(((e,t,n)=>{qo().ew(e,t,n)})))}),new I().i(kl,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,S:1});function jl(e,t){this.cQ=null,this.cP=null,this.cQ=e,this.cP=t}P=jl.prototype=new ss,P.constructor=jl;function Ml(){}Ml.prototype=P,P.q=(function(e){return new Bu(this,e,new _f(((e,t,n)=>{qo().gm(e,t,n)})))}),new I().i(jl,`com.raquo.laminar.keys.HtmlProp`,{bD:1,S:1});function Nl(e,t,n){this.bQ=null,this.bP=null,this.bu=null,this.bv=null,this.bQ=e,this.bP=t;var r=n.h()?Z():new Vp(n.x()+`:`+e);this.bu=r.h()?e:r.x(),this.bv=n.h()?Z():new Vp(ds().fU(n.x()))}P=Nl.prototype=new ss,P.constructor=Nl;function Pl(){}Pl.prototype=P,new I().i(Nl,`com.raquo.laminar.keys.SvgAttr`,{bE:1,S:1});function Fl(){}P=Fl.prototype=new F,P.constructor=Fl;function Il(){}Il.prototype=P,P.aL=(function(e){}),new I().i(Fl,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bJ:1,U:1});function Ll(e,t){if(this.cV=null,this.cV=e,t===null)throw new Pf}P=Ll.prototype=new F,P.constructor=Ll;function Rl(){}Rl.prototype=P,P.aL=(function(e){var t=co(),n=(()=>{this.cV.l(e)});if(co(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,io(t)}}}),new I().i(Ll,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bK:1,U:1});function zl(e){e.ea(new xo(new ff((()=>{throw cd(new K,`Attempting to use owner of unmounted element: `+Gc(qo().fa(e.cr(),(qo(),ug())),``,` > `,``))}))))}function Bl(){}P=Bl.prototype=new F,P.constructor=Bl;function Vl(){}Vl.prototype=P,P.f0=(function(e){var t=this.f3();return e.bh(new X((e=>{e.aL(t)}))),t}),P.f3=(function(){return new wp(this,qo().f6(this))});function Hl(e,t){this.cZ=null,this.cZ=e}P=Hl.prototype=new F,P.constructor=Hl;function Ul(){}Ul.prototype=P,new I().i(Hl,`com.raquo.laminar.tags.SvgTag`,{bU:1,a9:1});function Wl(){}P=Wl.prototype=new F,P.constructor=Wl;function Gl(){}Gl.prototype=P,P.bg=(function(e){return e}),P.bD=(function(e){return e}),new I().i(Wl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{c0:1,Y:1});function Kl(e,t){return e.bV=t,e.eR(),e}function ql(){this.bV=null,this.bU=null,this.bW=!1,this.bX=null,this.bY=!1}P=ql.prototype=new F,P.constructor=ql;function Jl(){}Jl.prototype=P,P.gy=(function(){return this.bW||=(this.bU=new Wu(this.bV,Ts().eQ(),(Ts(),void 0)),!0),this.bU}),P.H=(function(e,t){var n=this.gy().f0(H().m(new(L.r()).C([])));return e.bh(new X((e=>{e.l(this).aL(n)}))),t.bh(new X((e=>{e.aL(n)}))),n}),P.aS=(function(){return this.bY||=(this.bX=new rd,!0),this.bX});function Yl(){}P=Yl.prototype=new F,P.constructor=Yl;function Xl(){}Xl.prototype=P;function Zl(e){return e instanceof Yl||typeof e==`number`||e instanceof B}function Ql(e,t,n,r,i){this.aH=null,this.aX=null,this.aI=null,this.aJ=0,this.aG=0,this.aH=e,this.aX=t,this.aI=n,this.aJ=r,this.aG=i}P=Ql.prototype=new F,P.constructor=Ql;function $l(){}$l.prototype=P,P.g=(function(e){return e instanceof Ql&&this.aI===e.aI&&this.aJ===e.aJ&&this.aG===e.aG&&this.aH===e.aH&&this.aX===e.aX}),P.t=(function(){var e=``;return this.aH!==`<jscode>`&&(e=``+e+this.aH+`.`),e=``+e+this.aX,this.aI===null?e+=`(Unknown Source)`:(e=e+`(`+this.aI,this.aJ>=0&&(e=e+`:`+this.aJ,this.aG>=0&&(e=e+`:`+this.aG)),e+=`)`),e}),P.o=(function(){return Pp(this.aH)^Pp(this.aX)^Pp(this.aI)^this.aJ^this.aG});var eu=new I().i(Ql,`java.lang.StackTraceElement`,{aj:1,a:1});function tu(){}P=tu.prototype=new F,P.constructor=tu;function nu(){}nu.prototype=P,P.fV=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Lp;for(var i=``,a=t;a!==r;)i+=``+va(e.a[a]),a=1+a|0;return i}),new I().i(tu,`java.lang.String$`,{ck:1,a:1});var ru;function iu(){return ru||=new tu,ru}function au(e,t,n,r,i){return e.dx=t,e.dy=i,i&&e.ft(),e}var ou=class extends Error{constructor(){super(),this.dx=null,this.dy=!1,this.dw=null,this.by=null}bj(){return this.dx}ft(){var e=this instanceof Am?this.Q:this;return this.dw=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}fB(){return this.by===null&&(this.dy?this.by=ac().fs(this.dw):this.by=new(eu.r()).C(0)),this.by}t(){var e=da(this),t=this.bj();return t===null?e:e+`: `+t}o(){return Aa.prototype.o.call(this)}g(e){return Aa.prototype.g.call(this,e)}get message(){var e=this.bj();return e===null?``:e}get name(){return da(this)}toString(){return this.t()}};function su(){}P=su.prototype=new F,P.constructor=su;function cu(){}cu.prototype=P,P.ek=(function(e,t){var n=e.y();if(n>-1){for(var r=t.fW(n),i=e.k(),a=0;a<n;)H().f1(r,a,i.f()),a=1+a|0;return r}else{var o=null,s=t.gj(),c=s===Ua.l();o=[];for(var l=e.k();l.s();){var u=l.f(),d=c?Oa(u):u===null?s.aj.z:u;o.push(d)}return(s===Ha.l()?bc.l():s===$c.l()||s===kd.l()?Va.l():s).aj.r().w(o)}}),P.ej=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!Qc().I(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new I().i(su,`scala.Array$`,{cu:1,a:1});var lu;function uu(){return lu||=new su,lu}function du(){this.dA=null,pu=this,this.dA=new gl(fc().dv)}P=du.prototype=new F,P.constructor=du;function fu(){}fu.prototype=P,P.g9=(function(){return this.dA.cj}),new I().i(du,`scala.Console$`,{cv:1,dn:1});var pu;function mu(){return pu||=new du,pu}function hu(){}P=hu.prototype=new F,P.constructor=hu;function gu(){}gu.prototype=P,P.t=(function(){return`<function1>`});function _u(){}P=_u.prototype=new zc,P.constructor=_u;function vu(){}vu.prototype=P,P.gG=(function(e){return e===null?null:e.a.length===0?om().dJ:new $h(e)});function yu(e,t){if(t===e)e.dT(gp().el(t));else for(var n=t.k();n.s();)e.cl(n.f());return e}function bu(){}P=bu.prototype=new F,P.constructor=bu;function xu(){}xu.prototype=P,P.t=(function(){return`<function0>`});function Su(){}P=Su.prototype=new F,P.constructor=Su;function Cu(){}Cu.prototype=P,P.t=(function(){return`<function1>`});function wu(){}P=wu.prototype=new F,P.constructor=wu;function Tu(){}Tu.prototype=P,P.t=(function(){return`<function2>`});function Eu(){}P=Eu.prototype=new F,P.constructor=Eu;function Du(){}Du.prototype=P,P.t=(function(){return`<function3>`});function Ou(e){this.bC=!1,this.bC=e}P=Ou.prototype=new F,P.constructor=Ou;function ku(){}ku.prototype=P,P.t=(function(){return``+this.bC}),new I().i(Ou,`scala.runtime.BooleanRef`,{dB:1,a:1});function Au(e){this.b4=0,this.b4=e}P=Au.prototype=new F,P.constructor=Au;function ju(){}ju.prototype=P,P.t=(function(){return``+this.b4}),new I().i(Au,`scala.runtime.IntRef`,{dD:1,a:1});function Mu(){this.u=0,this.dR=0,this.eP=0,this.eO=0,Pu=this,this.u=Pp(`Seq`),this.dR=Pp(`Map`),this.eP=Pp(`Set`),this.eO=this.gB(ug(),this.dR)}P=Mu.prototype=new yl,P.constructor=Mu;function Nu(){}Nu.prototype=P,P.gk=(function(e){return Jm(e)?this.fK(e,this.u):e instanceof Lh?this.fQ(e,this.u):this.g8(e,this.u)}),new I().i(Mu,`scala.util.hashing.MurmurHash3$`,{e0:1,dZ:1});var Pu;function W(){return Pu||=new Mu,Pu}var Fu=class extends ou{};function Iu(){this.bJ=null,this.cw=null,this.cx=null,Ru=this,this.bJ=gp().dV(H().m(new(V.r()).C([]))),this.cw=new X((e=>{try{console.error(this.fx(e)+`
`+this.fA(e,`
`))}catch(e){var t=e instanceof ou?e:new Am(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cx=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Am?t.Q:t})),this.gd(this.cw)}P=Iu.prototype=new F,P.constructor=Iu;function Lu(){}Lu.prototype=P,P.fx=(function(e){try{var t=e.bj()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ua(e).cp()+`: `+t}),P.fA=(function(e,t){try{return Gc(fd().gG(e.fB()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),P.gd=(function(e){this.bJ.cl(e)}),P.cu=(function(e){for(var t=this.bJ.k();t.s();){var n=t.f();try{n.l(e)}catch(e){var r=e instanceof ou?e:new Am(e),i=this.cx;if(n===null?i===null:n.g(i))throw r instanceof Am?r.Q:r;console.warn(`Error processing an unhandled error callback:`),ll().gr(0,new ff((e=>(()=>{throw e instanceof Am?e.Q:e}))(r)))}}}),new I().i(Iu,`com.raquo.airstream.core.AirstreamError$`,{b0:1,dl:1,dm:1});var Ru;function zu(){return Ru||=new Iu,Ru}function Bu(e,t,n){this.cT=null,this.cU=null,this.cS=null,this.cT=e,this.cU=t,this.cS=n}P=Bu.prototype=new F,P.constructor=Bu;function Vu(){}Vu.prototype=P,P.aL=(function(e){this.cS.eY(e,this.cT,this.cU)}),new I().i(Bu,`com.raquo.laminar.modifiers.KeySetter`,{bH:1,U:1,bL:1});function Hu(e,t){if(this.bS=null,this.cX=null,this.cY=null,this.cX=t,zl(this),e===null)throw cd(new K,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!qo().fM(e,document))throw cd(new K,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.cY=e,this.fT()}P=Hu.prototype=new F,P.constructor=Hu;function Uu(){}Uu.prototype=P,P.bF=(function(){return this.bS}),P.ea=(function(e){this.bS=e}),P.fT=(function(){return this.bS.dS(),xs().dU(this,this.cX,void 0)}),P.cr=(function(){return this.cY}),new I().i(Hu,`com.raquo.laminar.nodes.RootNode`,{bQ:1,a8:1,a7:1});function Wu(e,t,n){this.bT=null,this.bT=e}P=Wu.prototype=new Vl,P.constructor=Wu;function Gu(){}Gu.prototype=P,new I().i(Wu,`com.raquo.laminar.tags.CustomHtmlTag`,{bR:1,bT:1,a9:1});function Ku(){this.bV=null,this.bU=null,this.bW=!1,this.bX=null,this.bY=!1,this.d6=null,this.d7=!1,this.d4=null,this.d5=!1,this.d2=null,this.d3=!1,this.da=null,this.db=!1,this.d0=null,this.d1=!1,this.d8=null,this.d9=!1,this.dc=null,this.dd=!1,Kl(this,`wa-color-picker`)}P=Ku.prototype=new Jl,P.constructor=Ku;function qu(){}qu.prototype=P,P.J=(function(){return this.d7||=(this.d6=(Y(),Ol(new kl,`label`,ts().an)),!0),this.d6}),P.fH=(function(){return this.d5||=(this.d4=(Y(),Ol(new kl,`hint`,ts().an)),!0),this.d4}),P.bG=(function(){return this.d3||=(this.d2=Qu(),!0),this.d2}),P.cv=(function(){return this.db||=(this.da=nd(),!0),this.da}),P.fc=(function(){return this.d1||=(this.d0=(Y(),Ol(new kl,`disabled`,ts().bO)),!0),this.d0}),P.g7=(function(){return this.d9||=(this.d8=(Y(),Ol(new kl,`opacity`,ts().bO)),!0),this.d8}),P.gx=(function(){return this.dd||=(this.dc=(Y(),Ol(new kl,`swatches`,ts().an)),!0),this.dc}),P.eR=(function(){return sa}),new I().i(Ku,`io.github.nguyenyou.webawesome.laminar.ColorPicker$`,{bW:1,c1:1,bZ:1});var Ju;function G(){return Ju||=new Ku,Ju}function Yu(){this.ao=null,this.aU=null,this.de=null,this.df=!1,this.dg=null,this.dh=!1,this.di=null,this.dj=!1,this.dk=null,this.dl=!1,Ol(this,`format`,new Wl)}P=Yu.prototype=new Al,P.constructor=Yu;function Xu(){}Xu.prototype=P,P.fG=(function(){return this.df||=(this.de=Qu().q(`hex`),!0),this.de}),P.fI=(function(){return this.dh||=(this.dg=Qu().q(`hsl`),!0),this.dg}),P.fJ=(function(){return this.dj||=(this.di=Qu().q(`hsv`),!0),this.di}),P.gi=(function(){return this.dl||=(this.dk=Qu().q(`rgb`),!0),this.dk}),new I().i(Yu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$`,{bX:1,Z:1,S:1});var Zu;function Qu(){return Zu||=new Yu,Zu}function $u(){this.ao=null,this.aU=null,this.dm=null,this.dn=!1,this.dp=null,this.dq=!1,this.dr=null,this.ds=!1,Ol(this,`size`,new Wl)}P=$u.prototype=new Al,P.constructor=$u;function ed(){}ed.prototype=P,P.fP=(function(){return this.dn||=(this.dm=nd().q(`large`),!0),this.dm}),P.fS=(function(){return this.dq||=(this.dp=nd().q(`medium`),!0),this.dp}),P.gt=(function(){return this.ds||=(this.dr=nd().q(`small`),!0),this.dr}),new I().i($u,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{bY:1,Z:1,S:1});var td;function nd(){return td||=new $u,td}function rd(){}P=rd.prototype=new gu,P.constructor=rd;function id(){}id.prototype=P,P.l=(function(e){return Y().X}),new I().i(rd,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{c2:1,cw:1,e:1});function ad(e){if(e.aj.Z)return e.aj.Q().cp()+`[]`;for(var t=e.aj.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function od(e){this.bZ=null,this.aj=e}P=od.prototype=new F,P.constructor=od;function sd(){}sd.prototype=P,P.t=(function(){return(this.aj.Y?`interface `:this.aj.X?``:`class `)+this.aj.N}),P.cp=(function(){return this.bZ===null&&(this.bZ=ad(this)),this.bZ}),new I().i(od,`java.lang.Class`,{c8:1,a:1,L:1});function cd(e,t){return au(e,t,null,!0,!0),e}var K=class extends ou{};new I().i(K,`java.lang.Exception`,{K:1,u:1,a:1});function ld(){this.eK=null,dd=this,this.eK=Td()}P=ld.prototype=new vu,P.constructor=ld;function ud(){}ud.prototype=P,new I().i(ld,`scala.Predef$`,{cF:1,cz:1,cA:1});var dd;function fd(){return dd||=new ld,dd}function pd(e,t){return e.bA=t,e}function md(){this.bA=null}P=md.prototype=new F,P.constructor=md;function hd(){}hd.prototype=P,P.co=(function(e){return this.bA.cn(e,Hm())}),P.cm=(function(e){return this.bA.cn(e,Hm())});function gd(e,t){return new np(e).f5(t)}function _d(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?q().v:new op(e,r,i)}function vd(e,t){for(var n=t.k();e.s()&&n.s();)if(!Qc().I(e.f(),n.f()))return!1;return e.s()===n.s()}function yd(){this.v=null,xd=this,this.v=new Xf}P=yd.prototype=new F,P.constructor=yd;function bd(){}bd.prototype=P,new I().i(yd,`scala.collection.Iterator$`,{cX:1,W:1,a:1});var xd;function q(){return xd||=new yd,xd}function Sd(){}P=Sd.prototype=new F,P.constructor=Sd;function Cd(){}Cd.prototype=P,new I().i(Sd,`scala.collection.immutable.Map$`,{db:1,d2:1,a:1});var wd;function Td(){return wd||=new Sd,wd}function Ed(e){this.dK=null,this.dK=e}P=Ed.prototype=new xu,P.constructor=Ed;function Dd(){}Dd.prototype=P,P.az=(function(){return(0,this.dK)()}),new I().i(Ed,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dx:1,aW:1,am:1});function J(e){this.dL=null,this.dL=e}P=J.prototype=new Cu,P.constructor=J;function Od(){}Od.prototype=P,P.l=(function(e){return(0,this.dL)(e)}),new I().i(J,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dy:1,aX:1,e:1});var kd=new I().i(0,`scala.runtime.Nothing$`,{dE:1,u:1,a:1});function Ad(){}P=Ad.prototype=new xu,P.constructor=Ad;function jd(){}jd.prototype=P;function Md(){}P=Md.prototype=new Cu,P.constructor=Md;function Nd(){}Nd.prototype=P;function Pd(){}P=Pd.prototype=new Tu,P.constructor=Pd;function Fd(){}Fd.prototype=P;function Id(){}P=Id.prototype=new Du,P.constructor=Id;function Ld(){}Ld.prototype=P;function Rd(e,t,n,r){if(this.cy=null,r===null)throw new Pf;this.cy=void 0}P=Rd.prototype=new F,P.constructor=Rd;function zd(){}zd.prototype=P,P.t=(function(){return Ka(this)}),new I().i(Rd,`com.raquo.airstream.core.Observer$$anon$8`,{b4:1,b5:1,b1:1,b2:1});function Bd(e){if(this.cJ=null,this.cK=!1,this.ex=null,e===null)throw new Pf;is(this)}P=Bd.prototype=new F,P.constructor=Bd;function Vd(){}Vd.prototype=P,P.gw=(function(){return this.cK||=(this.cJ=new Hl(`svg`,!1),!0),this.cJ}),new I().i(Bd,`com.raquo.laminar.api.Laminar$svg$`,{bl:1,bB:1,bu:1,bw:1});function Hd(){this.X=null,Wd=this,this.X=new $m}P=Hd.prototype=new F,P.constructor=Hd;function Ud(){}Ud.prototype=P,new I().i(Hd,`com.raquo.laminar.api.package$`,{bo:1,a5:1,a6:1,a4:1});var Wd;function Y(){return Wd||=new Hd,Wd}function Gd(){}P=Gd.prototype=new F,P.constructor=Gd;function Kd(){}Kd.prototype=P;function qd(e,t){return e===t}function Jd(e){return e?1231:1237}var Yd=new I().i(0,`java.lang.Boolean`,{c6:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function Xd(e){return e}function Zd(e,t){return t instanceof la&&e===t.c}var Qd=new I().i(0,`java.lang.Character`,{af:1,a:1,P:1,L:1},(e=>e instanceof la)),$d=class extends K{};function ef(){this.p=null,this.p=``}P=ef.prototype=new F,P.constructor=ef;function tf(){}tf.prototype=P,P.eW=(function(e){var t=iu().fV(e,0,e.a.length);return this.p=``+this.p+t,this}),P.t=(function(){return this.p}),P.i=(function(){return this.p.length}),P.e8=(function(e){return this.p.charCodeAt(e)}),new I().i(ef,`java.lang.StringBuilder`,{cl:1,a0:1,ad:1,a:1});function nf(){}P=nf.prototype=new F,P.constructor=nf;function rf(){}rf.prototype=P,P.t=(function(){return`<function1>`}),P.eZ=(function(e){throw new Hf(e)}),P.l=(function(e){this.eZ(e)}),new I().i(nf,`scala.PartialFunction$$anon$1`,{cE:1,g:1,e:1,a:1});function af(){}P=af.prototype=new F,P.constructor=af;function of(){}of.prototype=P,P.k=(function(){return this}),P.bE=(function(e){return this.bn(e,-1)}),P.bn=(function(e,t){return _d(this,e,t)}),P.t=(function(){return`<iterator>`}),P.b6=(function(e,t,n,r){return Kc(this,e,t,n,r)}),P.y=(function(){return-1});function sf(e,t){return e.bB=t,e}function cf(){this.bB=null}P=cf.prototype=new F,P.constructor=cf;function lf(){}lf.prototype=P,P.dV=(function(e){return this.bB.cm(e)}),P.el=(function(e){return this.bB.co(e)}),P.co=(function(e){return this.el(e)}),P.cm=(function(e){return this.dV(e)});function uf(e){return e.aO(0)===0}function df(e,t){var n=e.y();if(n!==-1)var r=t.y(),i=r!==-1&&n!==r;else var i=!1;return i?!1:vd(e.k(),t)}function ff(e){this.dO=null,this.dO=e}P=ff.prototype=new jd,P.constructor=ff;function pf(){}pf.prototype=P,P.az=(function(){return(0,this.dO)()}),new I().i(ff,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{dN:1,dM:1,aW:1,am:1});function X(e){this.dP=null,this.dP=e}P=X.prototype=new Nd,P.constructor=X;function mf(){}mf.prototype=P,P.l=(function(e){return(0,this.dP)(e)}),new I().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{dP:1,dO:1,aX:1,e:1});function hf(e){this.eN=null,this.eN=e}P=hf.prototype=new Fd,P.constructor=hf;function gf(){}gf.prototype=P,new I().i(hf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{dR:1,dQ:1,dz:1,cx:1});function _f(e){this.dQ=null,this.dQ=e}P=_f.prototype=new Ld,P.constructor=_f;function vf(){}vf.prototype=P,P.eY=(function(e,t,n){return(0,this.dQ)(e,t,n)}),new I().i(_f,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{dT:1,dS:1,dA:1,cy:1});function yf(e){e.bR=new Ro(new ff((()=>{e.aF.dS()})),new ff((()=>{e.aF.f8()})))}function bf(e,t){Sf(e,e.bw,t)&&Cf(e,t)}function xf(e,t){var n=e.bw;e.bw=t,Sf(e,n,t)||Cf(e,t)}function Sf(e,t,n){var r=!t.h()&&!t.x().bF().D.h(),i=!n.h()&&!n.x().bF().D.h();return r&&!i}function Cf(e,t){wf(e,t.h()?Z():new Vp(t.x().bF()))}function wf(e,t){if(t.h())e.bR.f4();else{var n=t.x();e.bR.go(n)}}function Tf(){}P=Tf.prototype=new Kd,P.constructor=Tf;function Ef(){}Ef.prototype=P;var Df=class extends $d{constructor(e){super(),au(this,e,null,!0,!0)}};new I().i(Df,`java.lang.ArithmeticException`,{c5:1,Q:1,K:1,u:1,a:1});var Of=new I().i(0,`java.lang.Byte`,{c7:1,R:1,a:1,P:1,L:1},(e=>Ca(e))),kf=class extends $d{constructor(e){super(),au(this,e,null,!0,!0)}};new I().i(kf,`java.lang.IllegalArgumentException`,{cb:1,Q:1,K:1,u:1,a:1});function Af(e,t){return au(e,t,null,!0,!0),e}var jf=class extends $d{};new I().i(jf,`java.lang.IndexOutOfBoundsException`,{ah:1,Q:1,K:1,u:1,a:1});function Mf(){}P=Mf.prototype=new Kd,P.constructor=Mf;function Nf(){}Nf.prototype=P,new I().i(Mf,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{ce:1,ac:1,aa:1,ae:1,ab:1});var Pf=class extends $d{constructor(){super(),au(this,null,null,!0,!0)}};new I().i(Pf,`java.lang.NullPointerException`,{cf:1,Q:1,K:1,u:1,a:1});var Ff=new I().i(0,`java.lang.Short`,{cg:1,R:1,a:1,P:1,L:1},(e=>wa(e))),If=class extends $d{constructor(e){super(),au(this,e,null,!0,!0)}};new I().i(If,`java.lang.UnsupportedOperationException`,{co:1,Q:1,K:1,u:1,a:1});var Lf=class extends $d{constructor(e){super(),au(this,e,null,!0,!0)}};new I().i(Lf,`java.util.NoSuchElementException`,{cs:1,Q:1,K:1,u:1,a:1});function Rf(e){return e.c4||=(e.c5=e.bz===null?`null`:Vf(e),!0),e.c5}function zf(e){return e.c4?e.c5:Rf(e)}function Bf(e){var t=e.bz;return`of class `+da(t)}function Vf(e){try{return e.bz+` (`+Bf(e)+`)`}catch{return`an instance `+Bf(e)}}var Hf=class extends $d{constructor(e){super(),this.c5=null,this.bz=null,this.c4=!1,this.bz=e,au(this,null,null,!0,!0)}bj(){return zf(this)}};new I().i(Hf,`scala.MatchError`,{cB:1,Q:1,K:1,u:1,a:1});function Uf(){}P=Uf.prototype=new F,P.constructor=Uf;function Wf(){}Wf.prototype=P,P.h=(function(){return this===Z()}),P.y=(function(){return this.h()?0:1}),P.k=(function(){return this.h()?q().v:new Qf(this.x())});function Gf(e){this.aY=0,this.dE=0,this.dD=null,this.dD=e,this.aY=0,this.dE=e.ag()}P=Gf.prototype=new of,P.constructor=Gf;function Kf(){}Kf.prototype=P,P.s=(function(){return this.aY<this.dE}),P.f=(function(){var e=this.dD.ah(this.aY);return this.aY=1+this.aY|0,e}),new I().i(Gf,`scala.Product$$anon$1`,{cG:1,r:1,s:1,b:1,c:1});function qf(e){this.bA=null,pd(this,e)}P=qf.prototype=new hd,P.constructor=qf;function Jf(){}Jf.prototype=P,new I().i(qf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{cT:1,cS:1,W:1,a:1,a1:1});function Yf(e){return Gc(e,e.aN()+`(`,`, `,`)`)}function Xf(){}P=Xf.prototype=new of,P.constructor=Xf;function Zf(){}Zf.prototype=P,P.s=(function(){return!1}),P.fX=(function(){throw new Lf(`next on empty iterator`)}),P.y=(function(){return 0}),P.bn=(function(e,t){return this}),P.f=(function(){this.fX()}),new I().i(Xf,`scala.collection.Iterator$$anon$19`,{cY:1,r:1,s:1,b:1,c:1});function Qf(e){this.b0=!1,this.dH=null,this.dH=e,this.b0=!1}P=Qf.prototype=new of,P.constructor=Qf;function $f(){}$f.prototype=P,P.s=(function(){return!this.b0}),P.f=(function(){return this.b0?q().v.f():(this.b0=!0,this.dH)}),P.bn=(function(e,t){return this.b0||e>0||t===0?q().v:this}),new I().i(Qf,`scala.collection.Iterator$$anon$20`,{cZ:1,r:1,s:1,b:1,c:1});function ep(e){for(;;){if(e.A instanceof np){var t=e.A;e.A=t.A,e.a4=t.a4,t.M!==null&&(e.L===null&&(e.L=t.L),t.L.b1=e.M,e.M=t.M);continue}return}}function tp(e){for(;;)if(e.M===null)return e.A=null,e.L=null,!1;else{if(e.A=e.M.fF(),e.L===e.M&&(e.L=e.L.b1),e.M=e.M.b1,ep(e),e.a4)return!0;if(e.A!==null&&e.A.s())return e.a4=!0,!0}}function np(e){this.A=null,this.M=null,this.L=null,this.a4=!1,this.A=e,this.M=null,this.L=null,this.a4=!1}P=np.prototype=new of,P.constructor=np;function rp(){}rp.prototype=P,P.s=(function(){return this.a4?!0:this.A===null?!1:this.A.s()?(this.a4=!0,!0):tp(this)}),P.f=(function(){return this.s()?(this.a4=!1,this.A.f()):q().v.f()}),P.f5=(function(e){var t=new qc(e,null);return this.M===null?(this.M=t,this.L=t):(this.L.b1=t,this.L=t),this.A===null&&(this.A=q().v),this}),new I().i(np,`scala.collection.Iterator$ConcatIterator`,{as:1,r:1,s:1,b:1,c:1});function ip(e){for(;e.Y>0;)e.a5.s()?(e.a5.f(),e.Y=-1+e.Y|0):e.Y=0}function ap(e,t){if(e.F<0)return-1;var n=e.F-t|0;return n<0?0:n}function op(e,t,n){this.a5=null,this.F=0,this.Y=0,this.a5=e,this.F=n,this.Y=t}P=op.prototype=new of,P.constructor=op;function sp(){}sp.prototype=P,P.y=(function(){var e=this.a5.y();if(e<0)return-1;var t=e-this.Y|0,n=t<0?0:t;if(this.F<0)return n;var r=this.F;return r<n?r:n}),P.s=(function(){return ip(this),this.F!==0&&this.a5.s()}),P.f=(function(){return ip(this),this.F>0?(this.F=-1+this.F|0,this.a5.f()):this.F<0?this.a5.f():q().v.f()}),P.bn=(function(e,t){var n=e>0?e:0;if(t<0)var r=ap(this,n);else if(t<=n)var r=0;else if(this.F<0)var r=t-n|0;else var i=ap(this,n),a=t-n|0,r=i<a?i:a;var o=this.Y+n|0;return r===0?q().v:o<0?(this.Y=2147483647,this.F=0,gd(this,new Ed((()=>new op(this.a5,-2147483647+o|0,r))))):(this.Y=o,this.F=r,this)}),new I().i(op,`scala.collection.Iterator$SliceIterator`,{d1:1,r:1,s:1,b:1,c:1});function cp(e,t){if(t<0)throw Af(new jf,``+t);var n=e.ff(t);if(n.h())throw Af(new jf,``+t);return n.Z()}function lp(e,t){return Ym(t)?up(e,e,t):df(e,t)}function up(e,t,n){for(;;)if(t===n)return!0;else if(!t.h()&&!n.h()&&Qc().I(t.Z(),n.Z())){var r=t.U(),i=n.U();t=r,n=i}else return t.h()&&n.h()}function dp(e){this.b3=null,this.b3=e}P=dp.prototype=new of,P.constructor=dp;function fp(){}fp.prototype=P,P.s=(function(){return!this.b3.h()}),P.f=(function(){var e=this.b3.Z();return this.b3=this.b3.U(),e}),new I().i(dp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{d6:1,r:1,s:1,b:1,c:1});function pp(){this.bB=null,sf(this,Sp())}P=pp.prototype=new lf,P.constructor=pp;function mp(){}mp.prototype=P,new I().i(pp,`scala.collection.mutable.Buffer$`,{dg:1,d3:1,a1:1,W:1,a:1});var hp;function gp(){return hp||=new pp,hp}function _p(e){this.b5=0,this.dM=0,this.dN=null,this.dN=e,this.b5=0,this.dM=e.ag()}P=_p.prototype=new of,P.constructor=_p;function vp(){}vp.prototype=P,P.s=(function(){return this.b5<this.dM}),P.f=(function(){var e=this.dN.ah(this.b5);return this.b5=1+this.b5|0,e}),new I().i(_p,`scala.runtime.ScalaRunTime$$anon$1`,{dH:1,r:1,s:1,b:1,c:1});function yp(){}P=yp.prototype=new F,P.constructor=yp;function bp(){}bp.prototype=P,P.cm=(function(e){return this.em(e)}),P.em=(function(e){return yu(gg(new _g),e).ev()}),P.co=(function(e){return this.em(e)}),new I().i(yp,`scala.scalajs.js.WrappedArray$`,{dK:1,d7:1,a1:1,W:1,a:1});var xp;function Sp(){return xp||=new yp,xp}var Cp=class e extends Fu{constructor(e,t){super(),this.aB=null,this.aA=0,this.aB=e,this.aA=t,au(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aQ(){return new Gf(this)}o(){var e=-889275714;return e=U().b(e,Pp(`TransactionDepthExceeded`)),e=U().b(e,U().w(this.aB)),e=U().b(e,this.aA),U().j(e,2)}g(t){return this===t?!0:t instanceof e&&this.aA===t.aA?this.aB===t.aB:!1}ag(){return 2}ai(){return`TransactionDepthExceeded`}ah(e){if(e===0)return this.aB;if(e===1)return this.aA;throw Af(new jf,``+e)}t(){return`TransactionDepthExceeded: `+this.aB+`; maxDepth: `+this.aA}};new I().i(Cp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a3:1,aZ:1,u:1,a:1,d:1,T:1});function wp(e,t){this.bw=null,this.aF=null,this.bR=null,this.cW=null,this.V=null,this.cW=e,this.V=t,this.bw=Z(),zl(this),yf(this)}P=wp.prototype=new F,P.constructor=wp;function Tp(){}Tp.prototype=P,P.aL=(function(e){xs().dU(e,this,void 0)}),P.bF=(function(){return this.aF}),P.ea=(function(e){this.aF=e}),P.t=(function(){return`ReactiveHtmlElement(`+(this.V===null?`tag=`+this.cW.bT:this.V.outerHTML)+`)`}),P.cr=(function(){return this.V}),new I().i(wp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{bP:1,a8:1,U:1,bM:1,a7:1,bO:1});function Ep(e,t){return Object.is(e,t)}function Dp(e){return Ps().cq(e)}var Op=new I().i(0,`java.lang.Double`,{ag:1,R:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),kp=new I().i(0,`java.lang.Float`,{c9:1,R:1,a:1,P:1,L:1,V:1},(e=>Ea(e))),Ap=new I().i(0,`java.lang.Integer`,{cc:1,R:1,a:1,P:1,L:1,V:1},(e=>Ta(e)));function jp(e,t){return t instanceof B&&e.c===t.c&&e.d===t.d}function Mp(e){return e.c^e.d}var Np=new I().i(0,`java.lang.Long`,{ai:1,R:1,a:1,P:1,L:1,V:1},(e=>e instanceof B));function Pp(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Fp(e,t){return e===t}var Ip=new I().i(0,`java.lang.String`,{cj:1,a:1,P:1,a0:1,L:1,V:1},(e=>typeof e==`string`)),Lp=class extends jf{constructor(){super(),au(this,null,null,!0,!0)}};new I().i(Lp,`java.lang.StringIndexOutOfBoundsException`,{cm:1,ah:1,Q:1,K:1,u:1,a:1});function Rp(){}P=Rp.prototype=new Wf,P.constructor=Rp;function zp(){}zp.prototype=P,P.fw=(function(){throw new Lf(`None.get`)}),P.ai=(function(){return`None`}),P.ag=(function(){return 0}),P.ah=(function(e){return U().bk(e)}),P.aQ=(function(){return new _p(this)}),P.o=(function(){return 2433880}),P.t=(function(){return`None`}),P.x=(function(){this.fw()}),new I().i(Rp,`scala.None$`,{cC:1,an:1,b:1,T:1,d:1,a:1});var Bp;function Z(){return Bp||=new Rp,Bp}function Vp(e){this.aZ=null,this.aZ=e}P=Vp.prototype=new Wf,P.constructor=Vp;function Hp(){}Hp.prototype=P,P.x=(function(){return this.aZ}),P.ai=(function(){return`Some`}),P.ag=(function(){return 1}),P.ah=(function(e){return e===0?this.aZ:U().bk(e)}),P.aQ=(function(){return new _p(this)}),P.o=(function(){return W().eu(this,-889275714,!1)}),P.t=(function(){return H().eS(this)}),P.g=(function(e){return this===e||e instanceof Vp&&Qc().I(this.aZ,e.aZ)}),new I().i(Vp,`scala.Some`,{ao:1,an:1,b:1,T:1,d:1,a:1});function Up(){}P=Up.prototype=new F,P.constructor=Up;function Wp(){}Wp.prototype=P,P.aN=(function(){return this.aR()}),P.bh=(function(e){Wc(this,e)}),P.b6=(function(e,t,n,r){return Kc(this,e,t,n,r)}),P.y=(function(){return-1});function Gp(e,t){return e.E=t,e.e=0,e.z=Tc().bi(e.E),e}function Kp(){this.E=null,this.e=0,this.z=0}P=Kp.prototype=new of,P.constructor=Kp;function qp(){}qp.prototype=P,P.y=(function(){return this.z-this.e|0}),P.s=(function(){return this.e<this.z}),P.f=(function(){this.e>=Tc().bi(this.E)&&q().v.f();var e=H().aM(this.E,this.e);return this.e=1+this.e|0,e}),P.bE=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.z;else var r=this.z,n=r<t?r:t;this.e=n}return this}),new I().i(Kp,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function Jp(e,t){return t<0?0:t>e.P?e.P:t}function Yp(e){this.dG=null,this.a3=0,this.P=0,this.dG=e,this.a3=0,this.P=e.i()}P=Yp.prototype=new of,P.constructor=Yp;function Xp(){}Xp.prototype=P,P.y=(function(){return this.P}),P.s=(function(){return this.P>0}),P.f=(function(){if(this.P>0){var e=this.dG.n(this.a3);return this.a3=1+this.a3|0,this.P=-1+this.P|0,e}else return q().v.f()}),P.bE=(function(e){if(e>0){this.a3=this.a3+e|0;var t=this.P-e|0;this.P=t<0?0:t}return this}),P.bn=(function(e,t){var n=Jp(this,e),r=Jp(this,t)-n|0;return this.P=r<0?0:r,this.a3=this.a3+n|0,this}),new I().i(Yp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{cW:1,r:1,s:1,b:1,c:1,a:1});function Zp(e){return e.cg||=(e.ch=new kh(new ja(0)),!0),e.ch}function Qp(e){return e.cg?e.ch:Zp(e)}function $p(){this.ch=null,this.eL=null,this.cg=!1,tm=this,this.eL=new qf(this)}P=$p.prototype=new F,P.constructor=$p;function em(){}em.prototype=P,P.fu=(function(e,t){return e instanceof fh?e:this.gD(uu().ek(e,t))}),P.gD=(function(e){if(e===null)return null;if(e instanceof ja)return new kh(e);if(e instanceof La)return new Th(e);if(e instanceof Ba)return new xh(e);if(e instanceof Ra)return new Dh(e);if(e instanceof za)return new Ch(e);if(e instanceof Pa)return new yh(e);if(e instanceof Fa)return new _h(e);if(e instanceof Ia)return new jh(e);if(e instanceof Na)return new hh(e);if(yc(e,1))return new Nh(e);throw new Hf(e)}),P.cn=(function(e,t){return this.fu(e,t)}),new I().i($p,`scala.collection.immutable.ArraySeq$`,{da:1,au:1,aq:1,ap:1,ar:1,a:1});var tm;function nm(){return tm||=new $p,tm}function rm(){this.eM=null,this.dJ=null,am=this,this.eM=new qf(this),this.dJ=new $h(new ja(0))}P=rm.prototype=new F,P.constructor=rm;function im(){}im.prototype=P,P.fv=(function(e,t){return this.fR(uu().ek(e,t))}),P.fR=(function(e){if(e===null)return null;if(e instanceof ja)return new $h(e);if(e instanceof La)return new Yh(e);if(e instanceof Ba)return new Gh(e);if(e instanceof Ra)return new Zh(e);if(e instanceof za)return new qh(e);if(e instanceof Pa)return new Uh(e);if(e instanceof Fa)return new Vh(e);if(e instanceof Ia)return new tg(e);if(e instanceof Na)return new zh(e);if(yc(e,1))return new rg(e);throw new Hf(e)}),P.cn=(function(e,t){return this.fv(e,t)}),new I().i(rm,`scala.collection.mutable.ArraySeq$`,{de:1,au:1,aq:1,ap:1,ar:1,a:1});var am;function om(){return am||=new rm,am}function sm(){}P=sm.prototype=new Ef,P.constructor=sm;function cm(){}cm.prototype=P;function lm(e){this.E=null,this.e=0,this.z=0,this.c6=null,this.c6=e,Gp(this,e)}P=lm.prototype=new qp,P.constructor=lm;function um(){}um.prototype=P,P.fY=(function(){this.e>=this.c6.a.length&&q().v.f();var e=this.c6.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.fY()}),new I().i(lm,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{cJ:1,M:1,r:1,s:1,b:1,c:1,a:1});function dm(e){this.E=null,this.e=0,this.z=0,this.c7=null,this.c7=e,Gp(this,e)}P=dm.prototype=new qp,P.constructor=dm;function fm(){}fm.prototype=P,P.fZ=(function(){this.e>=this.c7.a.length&&q().v.f();var e=this.c7.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return Da(this.fZ())}),new I().i(dm,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{cK:1,M:1,r:1,s:1,b:1,c:1,a:1});function pm(e){this.E=null,this.e=0,this.z=0,this.c8=null,this.c8=e,Gp(this,e)}P=pm.prototype=new qp,P.constructor=pm;function mm(){}mm.prototype=P,P.g0=(function(){this.e>=this.c8.a.length&&q().v.f();var e=this.c8.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.g0()}),new I().i(pm,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{cL:1,M:1,r:1,s:1,b:1,c:1,a:1});function hm(e){this.E=null,this.e=0,this.z=0,this.c9=null,this.c9=e,Gp(this,e)}P=hm.prototype=new qp,P.constructor=hm;function gm(){}gm.prototype=P,P.g1=(function(){this.e>=this.c9.a.length&&q().v.f();var e=this.c9.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.g1()}),new I().i(hm,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{cM:1,M:1,r:1,s:1,b:1,c:1,a:1});function _m(e){this.E=null,this.e=0,this.z=0,this.ca=null,this.ca=e,Gp(this,e)}P=_m.prototype=new qp,P.constructor=_m;function vm(){}vm.prototype=P,P.g2=(function(){this.e>=this.ca.a.length&&q().v.f();var e=this.ca.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.g2()}),new I().i(_m,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{cN:1,M:1,r:1,s:1,b:1,c:1,a:1});function ym(e){this.E=null,this.e=0,this.z=0,this.cb=null,this.cb=e,Gp(this,e)}P=ym.prototype=new qp,P.constructor=ym;function bm(){}bm.prototype=P,P.g3=(function(){this.e>=this.cb.a.length&&q().v.f();var e=this.cb.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new B(t,n)}),P.f=(function(){return this.g3()}),new I().i(ym,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{cO:1,M:1,r:1,s:1,b:1,c:1,a:1});function xm(e){this.E=null,this.e=0,this.z=0,this.cc=null,this.cc=e,Gp(this,e)}P=xm.prototype=new qp,P.constructor=xm;function Sm(){}Sm.prototype=P,P.g4=(function(){this.e>=this.cc.a.length&&q().v.f();var e=this.cc.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.g4()}),new I().i(xm,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{cP:1,M:1,r:1,s:1,b:1,c:1,a:1});function Cm(e){this.E=null,this.e=0,this.z=0,this.dF=null,this.dF=e,Gp(this,e)}P=Cm.prototype=new qp,P.constructor=Cm;function wm(){}wm.prototype=P,P.g5=(function(){this.e>=this.dF.a.length&&q().v.f(),this.e=1+this.e|0}),P.f=(function(){this.g5()}),new I().i(Cm,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{cQ:1,M:1,r:1,s:1,b:1,c:1,a:1});function Tm(e){this.E=null,this.e=0,this.z=0,this.cd=null,this.cd=e,Gp(this,e)}P=Tm.prototype=new qp,P.constructor=Tm;function Em(){}Em.prototype=P,P.g6=(function(){this.e>=this.cd.a.length&&q().v.f();var e=this.cd.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.g6()}),new I().i(Tm,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{cR:1,M:1,r:1,s:1,b:1,c:1,a:1});function Dm(e){return e.aN()+`(<not computed>)`}function Om(){}P=Om.prototype=new F,P.constructor=Om;function km(){}km.prototype=P;var Am=class e extends $d{constructor(e){super(),this.Q=null,this.Q=e,au(this,null,null,!0,!0)}bj(){return ma(this.Q)}ai(){return`JavaScriptException`}ag(){return 1}ah(e){return e===0?this.Q:U().bk(e)}aQ(){return new _p(this)}o(){return W().eu(this,-889275714,!1)}g(t){return this===t||t instanceof e&&Qc().I(this.Q,t.Q)}};new I().i(Am,`scala.scalajs.js.JavaScriptException`,{aY:1,Q:1,K:1,u:1,a:1,T:1,d:1});function jm(e,t){typeof console<`u`&&(e.du&&console.error?console.error(t):console.log(t))}function Mm(e){this.du=!1,this.aW=null,this.du=e,new Mf,this.aW=``}P=Mm.prototype=new cm,P.constructor=Mm;function Nm(){}Nm.prototype=P,P.fN=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aW=``+this.aW+t,t=``;else{var r=this.aW,i=t;jm(this,``+r+i.substring(0,n)),this.aW=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new I().i(Mm,`java.lang.JSConsoleBasedPrintStream`,{cd:1,c4:1,c3:1,ac:1,aa:1,ae:1,ab:1,ad:1});function Pm(e,t,n){for(;;)if(t<=0||n.h())return n;else{var r=-1+t|0,i=n.U();t=r,n=i}}function Fm(){this.ci=null}P=Fm.prototype=new km,P.constructor=Fm;function Im(){}Im.prototype=P,P.t=(function(){return this.ci}),P.g=(function(e){return this===e}),P.o=(function(){return Sa(this)});function Lm(){}P=Lm.prototype=new Wp,P.constructor=Lm;function Rm(){}Rm.prototype=P,P.t=(function(){return Dm(this)});function zm(){this.ci=null,this.ci=`Any`}P=zm.prototype=new Im,P.constructor=zm;function Bm(){}Bm.prototype=P,P.gj=(function(){return Va.l()}),P.fW=(function(e){return new ja(e)}),new I().i(zm,`scala.reflect.ManifestFactory$AnyManifest$`,{dt:1,dv:1,du:1,ds:1,dr:1,dq:1,dw:1,a:1,d:1});var Vm;function Hm(){return Vm||=new zm,Vm}function Q(e,t){return e===t?!0:Um(t)&&t.e7(e)?e.ct(t):!1}function Um(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Wm(){}P=Wm.prototype=new Wp,P.constructor=Wm;function Gm(){}Gm.prototype=P,P.e7=(function(e){return!0}),P.g=(function(e){return Q(this,e)}),P.o=(function(){return W().gk(this)}),P.t=(function(){return Yf(this)}),P.h=(function(){return uf(this)}),P.ct=(function(e){return df(this,e)});function Km(){}P=Km.prototype=new Rm,P.constructor=Km;function qm(){}qm.prototype=P;function Jm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Ym(e){return!!(e&&e.$classData&&e.$classData.n.X)}function Xm(e,t){return e.b2=t,e}function Zm(){this.b2=null}P=Zm.prototype=new qm,P.constructor=Zm;function Qm(){}Qm.prototype=P,P.n=(function(e){return this.b2.n(e)}),P.i=(function(){return this.b2.i()}),P.h=(function(){return this.b2.h()});function $m(){this.cN=null,this.cO=!1,this.ez=null,this.ey=null,this.cL=null,this.cM=!1,ns(this),Xo(this),Jo(this),Yo(this)}P=$m.prototype=new F,P.constructor=$m;function eh(){}eh.prototype=P,P.aT=(function(){return this.cO||=(this.cN=new jl(`value`,ts().an),!0),this.cN}),P.gv=(function(){return this.cM||=(this.cL=new Bd(this),!0),this.cL}),new I().i($m,`com.raquo.laminar.api.package$$anon$1`,{bp:1,bA:1,bt:1,by:1,bx:1,bz:1,bv:1,bn:1,bj:1,bm:1,a5:1,a6:1,a4:1,bk:1});function th(e){this.b2=null,Xm(this,e)}P=th.prototype=new Qm,P.constructor=th;function nh(){}nh.prototype=P,P.k=(function(){return new Yp(this)}),P.aR=(function(){return`IndexedSeqView`}),P.aO=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),P.y=(function(){return this.i()}),new I().i(th,`scala.collection.IndexedSeqView$Id`,{cV:1,d5:1,cH:1,cI:1,h:1,i:1,b:1,k:1,c:1,j:1,d8:1,a:1,d4:1,l:1,cU:1,o:1});function rh(){}P=rh.prototype=new Gm,P.constructor=rh;function ih(){}ih.prototype=P;function ah(e,t){return!sh(t)||e.i()===t.i()}function oh(e,t){if(sh(t)){if(e===t)return!0;var n=e.i(),r=n===t.i();if(r){var i=0,a=e.dW(),o=t.dW(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=Qc().I(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.k().bE(i),m=t.k().bE(i);r&&p.s();)r=Qc().I(p.f(),m.f())}return r}else return df(e,t)}function sh(e){return!!(e&&e.$classData&&e.$classData.n.w)}function ch(){}P=ch.prototype=new Gm,P.constructor=ch;function lh(){}lh.prototype=P;function uh(){}P=uh.prototype=new lh,P.constructor=uh;function dh(){}dh.prototype=P,P.dT=(function(e){return yu(this,e)});function fh(){}P=fh.prototype=new ih,P.constructor=fh;function ph(){}ph.prototype=P,P.e7=(function(e){return ah(this,e)}),P.ct=(function(e){return oh(this,e)}),P.aR=(function(){return`IndexedSeq`}),P.aO=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),P.y=(function(){return this.i()}),P.aN=(function(){return`ArraySeq`}),P.dW=(function(){return 2147483647});function $(){}P=$.prototype=new lh,P.constructor=$;function mh(){}mh.prototype=P,P.aR=(function(){return`IndexedSeq`}),P.aO=(function(e){var t=this.i();return t===e?0:t<e?-1:1}),P.y=(function(){return this.i()}),P.aN=(function(){return`ArraySeq`}),P.g=(function(e){return e instanceof $&&Tc().bi(this.R())!==Tc().bi(e.R())?!1:Q(this,e)});function hh(e){this.ap=null,this.ap=e}P=hh.prototype=new ph,P.constructor=hh;function gh(){}gh.prototype=P,P.i=(function(){return this.ap.a.length}),P.o=(function(){var e=W();return e.e6(this.ap,e.u)}),P.g=(function(e){return e instanceof hh?z().ei(this.ap,e.ap):Q(this,e)}),P.k=(function(){return new Tm(this.ap)}),P.bf=(function(e){return this.ap.a[e]}),P.l=(function(e){return this.bf(e|0)}),P.n=(function(e){return this.bf(e)}),new I().i(hh,`scala.collection.immutable.ArraySeq$ofBoolean`,{ax:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function _h(e){this.aq=null,this.aq=e}P=_h.prototype=new ph,P.constructor=_h;function vh(){}vh.prototype=P,P.i=(function(){return this.aq.a.length}),P.b7=(function(e){return this.aq.a[e]}),P.o=(function(){var e=W();return e.dY(this.aq,e.u)}),P.g=(function(e){return e instanceof _h?z().eb(this.aq,e.aq):Q(this,e)}),P.k=(function(){return new lm(this.aq)}),P.l=(function(e){return this.b7(e|0)}),P.n=(function(e){return this.b7(e)}),new I().i(_h,`scala.collection.immutable.ArraySeq$ofByte`,{ay:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function yh(e){this.a6=null,this.a6=e}P=yh.prototype=new ph,P.constructor=yh;function bh(){}bh.prototype=P,P.i=(function(){return this.a6.a.length}),P.b8=(function(e){return this.a6.a[e]}),P.o=(function(){var e=W();return e.dZ(this.a6,e.u)}),P.g=(function(e){return e instanceof yh?z().ec(this.a6,e.a6):Q(this,e)}),P.k=(function(){return new dm(this.a6)}),P.b6=(function(e,t,n,r){return new Uh(this.a6).b6(e,t,n,r)}),P.l=(function(e){return Da(this.b8(e|0))}),P.n=(function(e){return Da(this.b8(e))}),new I().i(yh,`scala.collection.immutable.ArraySeq$ofChar`,{az:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function xh(e){this.ar=null,this.ar=e}P=xh.prototype=new ph,P.constructor=xh;function Sh(){}Sh.prototype=P,P.i=(function(){return this.ar.a.length}),P.o=(function(){var e=W();return e.e0(this.ar,e.u)}),P.g=(function(e){return e instanceof xh?z().ed(this.ar,e.ar):Q(this,e)}),P.k=(function(){return new pm(this.ar)}),P.ba=(function(e){return this.ar.a[e]}),P.l=(function(e){return this.ba(e|0)}),P.n=(function(e){return this.ba(e)}),new I().i(xh,`scala.collection.immutable.ArraySeq$ofDouble`,{aA:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Ch(e){this.as=null,this.as=e}P=Ch.prototype=new ph,P.constructor=Ch;function wh(){}wh.prototype=P,P.i=(function(){return this.as.a.length}),P.o=(function(){var e=W();return e.e1(this.as,e.u)}),P.g=(function(e){return e instanceof Ch?z().ee(this.as,e.as):Q(this,e)}),P.k=(function(){return new hm(this.as)}),P.bb=(function(e){return this.as.a[e]}),P.l=(function(e){return this.bb(e|0)}),P.n=(function(e){return this.bb(e)}),new I().i(Ch,`scala.collection.immutable.ArraySeq$ofFloat`,{aB:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Th(e){this.at=null,this.at=e}P=Th.prototype=new ph,P.constructor=Th;function Eh(){}Eh.prototype=P,P.i=(function(){return this.at.a.length}),P.o=(function(){var e=W();return e.e2(this.at,e.u)}),P.g=(function(e){return e instanceof Th?z().ef(this.at,e.at):Q(this,e)}),P.k=(function(){return new _m(this.at)}),P.bc=(function(e){return this.at.a[e]}),P.l=(function(e){return this.bc(e|0)}),P.n=(function(e){return this.bc(e)}),new I().i(Th,`scala.collection.immutable.ArraySeq$ofInt`,{aC:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Dh(e){this.au=null,this.au=e}P=Dh.prototype=new ph,P.constructor=Dh;function Oh(){}Oh.prototype=P,P.i=(function(){return this.au.a.length}),P.o=(function(){var e=W();return e.e3(this.au,e.u)}),P.g=(function(e){return e instanceof Dh?z().eg(this.au,e.au):Q(this,e)}),P.k=(function(){return new ym(this.au)}),P.bd=(function(e){return this.au.a[e]}),P.l=(function(e){return this.bd(e|0)}),P.n=(function(e){return this.bd(e)}),new I().i(Dh,`scala.collection.immutable.ArraySeq$ofLong`,{aD:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function kh(e){this.av=null,this.av=e}P=kh.prototype=new ph,P.constructor=kh;function Ah(){}Ah.prototype=P,P.i=(function(){return this.av.a.length}),P.n=(function(e){return this.av.a[e]}),P.o=(function(){var e=W();return e.dX(this.av,e.u)}),P.g=(function(e){return e instanceof kh?uu().ej(this.av,e.av):Q(this,e)}),P.k=(function(){return Gp(new Kp,this.av)}),P.l=(function(e){return this.n(e|0)}),new I().i(kh,`scala.collection.immutable.ArraySeq$ofRef`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function jh(e){this.aw=null,this.aw=e}P=jh.prototype=new ph,P.constructor=jh;function Mh(){}Mh.prototype=P,P.i=(function(){return this.aw.a.length}),P.b9=(function(e){return this.aw.a[e]}),P.o=(function(){var e=W();return e.e4(this.aw,e.u)}),P.g=(function(e){return e instanceof jh?z().eh(this.aw,e.aw):Q(this,e)}),P.k=(function(){return new xm(this.aw)}),P.l=(function(e){return this.b9(e|0)}),P.n=(function(e){return this.b9(e)}),new I().i(jh,`scala.collection.immutable.ArraySeq$ofShort`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Nh(e){this.aK=null,this.aK=e}P=Nh.prototype=new ph,P.constructor=Nh;function Ph(){}Ph.prototype=P,P.i=(function(){return this.aK.a.length}),P.o=(function(){var e=W();return e.e5(this.aK,e.u)}),P.g=(function(e){return e instanceof Nh?this.aK.a.length===e.aK.a.length:Q(this,e)}),P.k=(function(){return new Cm(this.aK)}),P.be=(function(e){}),P.l=(function(e){this.be(e|0)}),P.n=(function(e){this.be(e)}),new I().i(Nh,`scala.collection.immutable.ArraySeq$ofUnit`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Fh(e,t,n,r){for(;;)if(t===r)return n.h()?0:1;else if(n.h())return-1;else{var i=1+t|0,a=n.U();t=i,n=a}}function Ih(e,t,n){for(;;)if(t===n)return!0;else{var r=t.h(),i=n.h();if(!(r||i)&&Qc().I(t.Z(),n.Z())){var a=t.U(),o=n.U();t=a,n=o}else return r&&i}}function Lh(){}P=Lh.prototype=new ih,P.constructor=Lh;function Rh(){}Rh.prototype=P,P.k=(function(){return new dp(this)}),P.aR=(function(){return`LinearSeq`}),P.n=(function(e){return cp(this,e)}),P.ct=(function(e){return lp(this,e)}),P.h=(function(){return this===ug()}),P.bh=(function(e){for(var t=this;!t.h();)e.l(t.Z()),t=t.U()}),P.i=(function(){for(var e=this,t=0;!e.h();)t=1+t|0,e=e.U();return t}),P.aO=(function(e){return e<0?1:Fh(this,0,this,e)}),P.aN=(function(){return`List`}),P.g=(function(e){return e instanceof Lh?Ih(this,this,e):Q(this,e)}),P.l=(function(e){return cp(this,e|0)}),P.ff=(function(e){return Pm(this,e,this)});function zh(e){this.a7=null,this.a7=e}P=zh.prototype=new mh,P.constructor=zh;function Bh(){}Bh.prototype=P,P.i=(function(){return this.a7.a.length}),P.o=(function(){var e=W();return e.e6(this.a7,e.u)}),P.g=(function(e){return e instanceof zh?z().ei(this.a7,e.a7):$.prototype.g.call(this,e)}),P.k=(function(){return new Tm(this.a7)}),P.bf=(function(e){return this.a7.a[e]}),P.l=(function(e){return this.bf(e|0)}),P.n=(function(e){return this.bf(e)}),P.R=(function(){return this.a7}),new I().i(zh,`scala.collection.mutable.ArraySeq$ofBoolean`,{aJ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Vh(e){this.a8=null,this.a8=e}P=Vh.prototype=new mh,P.constructor=Vh;function Hh(){}Hh.prototype=P,P.i=(function(){return this.a8.a.length}),P.b7=(function(e){return this.a8.a[e]}),P.o=(function(){var e=W();return e.dY(this.a8,e.u)}),P.g=(function(e){return e instanceof Vh?z().eb(this.a8,e.a8):$.prototype.g.call(this,e)}),P.k=(function(){return new lm(this.a8)}),P.l=(function(e){return this.b7(e|0)}),P.n=(function(e){return this.b7(e)}),P.R=(function(){return this.a8}),new I().i(Vh,`scala.collection.mutable.ArraySeq$ofByte`,{aK:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Uh(e){this.N=null,this.N=e}P=Uh.prototype=new mh,P.constructor=Uh;function Wh(){}Wh.prototype=P,P.i=(function(){return this.N.a.length}),P.b8=(function(e){return this.N.a[e]}),P.o=(function(){var e=W();return e.dZ(this.N,e.u)}),P.g=(function(e){return e instanceof Uh?z().ec(this.N,e.N):$.prototype.g.call(this,e)}),P.k=(function(){return new dm(this.N)}),P.b6=(function(e,t,n,r){var i=e.G;t.length!==0&&(i.p=``+i.p+t);var a=this.N.a.length;if(a!==0)if(n===``)i.eW(this.N);else{i.i();var o=this.N.a[0],s=``+va(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.N.a[c],u=``+va(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),P.l=(function(e){return Da(this.b8(e|0))}),P.n=(function(e){return Da(this.b8(e))}),P.R=(function(){return this.N}),new I().i(Uh,`scala.collection.mutable.ArraySeq$ofChar`,{aL:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Gh(e){this.a9=null,this.a9=e}P=Gh.prototype=new mh,P.constructor=Gh;function Kh(){}Kh.prototype=P,P.i=(function(){return this.a9.a.length}),P.o=(function(){var e=W();return e.e0(this.a9,e.u)}),P.g=(function(e){return e instanceof Gh?z().ed(this.a9,e.a9):$.prototype.g.call(this,e)}),P.k=(function(){return new pm(this.a9)}),P.ba=(function(e){return this.a9.a[e]}),P.l=(function(e){return this.ba(e|0)}),P.n=(function(e){return this.ba(e)}),P.R=(function(){return this.a9}),new I().i(Gh,`scala.collection.mutable.ArraySeq$ofDouble`,{aM:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function qh(e){this.aa=null,this.aa=e}P=qh.prototype=new mh,P.constructor=qh;function Jh(){}Jh.prototype=P,P.i=(function(){return this.aa.a.length}),P.o=(function(){var e=W();return e.e1(this.aa,e.u)}),P.g=(function(e){return e instanceof qh?z().ee(this.aa,e.aa):$.prototype.g.call(this,e)}),P.k=(function(){return new hm(this.aa)}),P.bb=(function(e){return this.aa.a[e]}),P.l=(function(e){return this.bb(e|0)}),P.n=(function(e){return this.bb(e)}),P.R=(function(){return this.aa}),new I().i(qh,`scala.collection.mutable.ArraySeq$ofFloat`,{aN:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Yh(e){this.ab=null,this.ab=e}P=Yh.prototype=new mh,P.constructor=Yh;function Xh(){}Xh.prototype=P,P.i=(function(){return this.ab.a.length}),P.o=(function(){var e=W();return e.e2(this.ab,e.u)}),P.g=(function(e){return e instanceof Yh?z().ef(this.ab,e.ab):$.prototype.g.call(this,e)}),P.k=(function(){return new _m(this.ab)}),P.bc=(function(e){return this.ab.a[e]}),P.l=(function(e){return this.bc(e|0)}),P.n=(function(e){return this.bc(e)}),P.R=(function(){return this.ab}),new I().i(Yh,`scala.collection.mutable.ArraySeq$ofInt`,{aO:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Zh(e){this.ac=null,this.ac=e}P=Zh.prototype=new mh,P.constructor=Zh;function Qh(){}Qh.prototype=P,P.i=(function(){return this.ac.a.length}),P.o=(function(){var e=W();return e.e3(this.ac,e.u)}),P.g=(function(e){return e instanceof Zh?z().eg(this.ac,e.ac):$.prototype.g.call(this,e)}),P.k=(function(){return new ym(this.ac)}),P.bd=(function(e){return this.ac.a[e]}),P.l=(function(e){return this.bd(e|0)}),P.n=(function(e){return this.bd(e)}),P.R=(function(){return this.ac}),new I().i(Zh,`scala.collection.mutable.ArraySeq$ofLong`,{aP:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $h(e){this.ad=null,this.ad=e}P=$h.prototype=new mh,P.constructor=$h;function eg(){}eg.prototype=P,P.i=(function(){return this.ad.a.length}),P.n=(function(e){return this.ad.a[e]}),P.o=(function(){var e=W();return e.dX(this.ad,e.u)}),P.g=(function(e){return e instanceof $h?uu().ej(this.ad,e.ad):$.prototype.g.call(this,e)}),P.k=(function(){return Gp(new Kp,this.ad)}),P.l=(function(e){return this.n(e|0)}),P.R=(function(){return this.ad}),new I().i($h,`scala.collection.mutable.ArraySeq$ofRef`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function tg(e){this.ae=null,this.ae=e}P=tg.prototype=new mh,P.constructor=tg;function ng(){}ng.prototype=P,P.i=(function(){return this.ae.a.length}),P.b9=(function(e){return this.ae.a[e]}),P.o=(function(){var e=W();return e.e4(this.ae,e.u)}),P.g=(function(e){return e instanceof tg?z().eh(this.ae,e.ae):$.prototype.g.call(this,e)}),P.k=(function(){return new xm(this.ae)}),P.l=(function(e){return this.b9(e|0)}),P.n=(function(e){return this.b9(e)}),P.R=(function(){return this.ae}),new I().i(tg,`scala.collection.mutable.ArraySeq$ofShort`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function rg(e){this.ax=null,this.ax=e}P=rg.prototype=new mh,P.constructor=rg;function ig(){}ig.prototype=P,P.i=(function(){return this.ax.a.length}),P.o=(function(){var e=W();return e.e5(this.ax,e.u)}),P.g=(function(e){return e instanceof rg?this.ax.a.length===e.ax.a.length:$.prototype.g.call(this,e)}),P.k=(function(){return new Cm(this.ax)}),P.be=(function(e){}),P.l=(function(e){this.be(e|0)}),P.n=(function(e){this.be(e)}),P.R=(function(){return this.ax}),new I().i(rg,`scala.collection.mutable.ArraySeq$ofUnit`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function ag(e,t){this.ce=null,this.cf=null,this.ce=e,this.cf=t}P=ag.prototype=new Rh,P.constructor=ag;function og(){}og.prototype=P,P.Z=(function(){return this.ce}),P.ai=(function(){return`::`}),P.ag=(function(){return 2}),P.ah=(function(e){switch(e){case 0:return this.ce;case 1:return this.cf;default:return U().bk(e)}}),P.aQ=(function(){return new _p(this)}),P.U=(function(){return this.cf}),new I().i(ag,`scala.collection.immutable.$colon$colon`,{d9:1,a2:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aH:1,X:1,at:1,aI:1,av:1,q:1,p:1,A:1,aw:1,a:1,T:1});function sg(){}P=sg.prototype=new Rh,P.constructor=sg;function cg(){}cg.prototype=P,P.fE=(function(){throw new Lf(`head of empty list`)}),P.gz=(function(){throw new If(`tail of empty list`)}),P.y=(function(){return 0}),P.k=(function(){return q().v}),P.ai=(function(){return`Nil`}),P.ag=(function(){return 0}),P.ah=(function(e){return U().bk(e)}),P.aQ=(function(){return new _p(this)}),P.U=(function(){this.gz()}),P.Z=(function(){this.fE()}),new I().i(sg,`scala.collection.immutable.Nil$`,{dc:1,a2:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aH:1,X:1,at:1,aI:1,av:1,q:1,p:1,A:1,aw:1,a:1,T:1});var lg;function ug(){return lg||=new sg,lg}function dg(e,t){return e.G=t,e}function fg(e){return dg(e,new ef),e}function pg(){this.G=null}P=pg.prototype=new lh,P.constructor=pg;function mg(){}mg.prototype=P,P.aR=(function(){return`IndexedSeq`}),P.k=(function(){return new Yp(new th(this))}),P.aO=(function(e){var t=this.G.i();return t===e?0:t<e?-1:1}),P.dT=(function(e){return yu(this,e)}),P.i=(function(){return this.G.i()}),P.y=(function(){return this.G.i()}),P.eT=(function(e){var t=this.G,n=``+va(e);return t.p+=n,this}),P.t=(function(){return this.G.p}),P.h=(function(){return this.G.i()===0}),P.ev=(function(){return this.G.p}),P.cl=(function(e){return this.eT(Oa(e))}),P.l=(function(e){var t=e|0;return Da(this.G.e8(t))}),P.n=(function(e){return Da(this.G.e8(e))}),new I().i(pg,`scala.collection.mutable.StringBuilder`,{dk:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,di:1,aT:1,aV:1,aU:1,D:1,n:1,o:1,E:1,a0:1,a:1});function hg(e,t){return e.ay=t,e}function gg(e){return hg(e,[]),e}function _g(){this.ay=null}P=_g.prototype=new dh,P.constructor=_g;function vg(){}vg.prototype=P,P.aR=(function(){return`IndexedSeq`}),P.k=(function(){return new Yp(new th(this))}),P.aO=(function(e){var t=this.ay.length|0;return t===e?0:t<e?-1:1}),P.n=(function(e){return this.ay[e]}),P.i=(function(){return this.ay.length|0}),P.y=(function(){return this.ay.length|0}),P.aN=(function(){return`WrappedArray`}),P.ev=(function(){return this}),P.cl=(function(e){return this.ay.push(e),this}),P.l=(function(e){var t=e|0;return this.ay[t]}),new I().i(_g,`scala.scalajs.js.WrappedArray`,{dJ:1,dd:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,df:1,aV:1,aU:1,dj:1,q:1,p:1,D:1,n:1,o:1,E:1,dh:1,aT:1,a:1}),ca=new B(0,0),Wa.z=ca,As(new(Ip.r()).C([]));