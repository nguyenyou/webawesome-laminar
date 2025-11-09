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
*/function w(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return st(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return st(n,r,{get(){return a(this)}})}}
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
`,lt,ut=class extends tt{constructor(){super(),f(this,lt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ct,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?v(e):e)}attributeChangedCallback(e,t,n){d(this,lt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),p(this,lt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};lt=new WeakMap,l([S()],ut.prototype,`dir`,2),l([S()],ut.prototype,`lang`,2),l([S({type:Boolean,reflect:!0,attribute:`did-ssr`})],ut.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var dt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},ft=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),pt=class extends ut{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new dt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[ft()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};pt.formAssociated=!0,l([S({reflect:!0})],pt.prototype,`name`,2),l([S({type:Boolean})],pt.prototype,`disabled`,2),l([S({state:!0,attribute:!1})],pt.prototype,`valueHasChanged`,2),l([S({state:!0,attribute:!1})],pt.prototype,`hasInteracted`,2),l([S({attribute:`custom-error`,reflect:!0})],pt.prototype,`customError`,2),l([S({attribute:!1,state:!0,type:Object})],pt.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var mt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},ht=`@layer wa-utilities {
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
`;function gt(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function _t(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function vt(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}const yt=new Set,bt=new Map;let xt,St=`ltr`,Ct=`en`;const wt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(wt){let e=new MutationObserver(Et);St=document.documentElement.dir||`ltr`,Ct=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Tt(...e){e.map(e=>{let t=e.$code.toLowerCase();bt.has(t)?bt.set(t,Object.assign(Object.assign({},bt.get(t)),e)):bt.set(t,e),xt||=e}),Et()}function Et(){wt&&(St=document.documentElement.dir||`ltr`,Ct=document.documentElement.lang||navigator.language),[...yt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Dt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){yt.add(this.host)}hostDisconnected(){yt.delete(this.host)}dir(){return`${this.host.dir||St}`.toLowerCase()}lang(){return`${this.host.lang||Ct}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:bt.get(`${n}-${r}`),secondary:bt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&xt&&xt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(xt&&xt[e])i=xt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ot={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Tt(Ot);var kt=Ot,At=class extends Dt{};Tt(kt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function jt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}function T(e,t){Nt(e)&&(e=`100%`);let n=Pt(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function Mt(e){return Math.min(1,Math.max(0,e))}function Nt(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function Pt(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function Ft(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function It(e){return Number(e)<=1?`${Number(e)*100}%`:e}function Lt(e){return e.length===1?`0`+e:String(e)}function Rt(e,t,n){return{r:T(e,255)*255,g:T(t,255)*255,b:T(n,255)*255}}function zt(e,t,n){e=T(e,255),t=T(t,255),n=T(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break;default:break}a/=6}return{h:a,s:o,l:s}}function Bt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Vt(e,t,n){let r,i,a;if(e=T(e,360),t=T(t,100),n=T(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=Bt(s,o,e+1/3),i=Bt(s,o,e),a=Bt(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function Ht(e,t,n){e=T(e,255),t=T(t,255),n=T(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:c,v:o}}function Ut(e,t,n){e=T(e,360)*6,t=T(t,100),n=T(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function Wt(e,t,n,r){let i=[Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function Gt(e,t,n,r,i){let a=[Lt(Math.round(e).toString(16)),Lt(Math.round(t).toString(16)),Lt(Math.round(n).toString(16)),Lt(Jt(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function Kt(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function qt(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function Jt(e){return Math.round(parseFloat(e)*255).toString(16)}function Yt(e){return E(e)/255}function E(e){return parseInt(e,16)}function Xt(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const Zt={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function Qt(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=rn(e)),typeof e==`object`&&(an(e.r)&&an(e.g)&&an(e.b)?(t=Rt(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):an(e.h)&&an(e.s)&&an(e.v)?(r=It(e.s),i=It(e.v),t=Ut(e.h,r,i),o=!0,s=`hsv`):an(e.h)&&an(e.s)&&an(e.l)?(r=It(e.s),a=It(e.l),t=Vt(e.h,r,a),o=!0,s=`hsl`):an(e.c)&&an(e.m)&&an(e.y)&&an(e.k)&&(t=Kt(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=Ft(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const $t=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,en=`[\\s|\\(]+(`+$t+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,tn=`[\\s|\\(]+(`+$t+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,nn={CSS_UNIT:new RegExp($t),rgb:RegExp(`rgb`+en),rgba:RegExp(`rgba`+tn),hsl:RegExp(`hsl`+en),hsla:RegExp(`hsla`+tn),hsv:RegExp(`hsv`+en),hsva:RegExp(`hsva`+tn),cmyk:RegExp(`cmyk`+tn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function rn(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(Zt[e])e=Zt[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=nn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=nn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=nn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=nn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=nn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=nn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=nn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=nn.hex8.exec(e),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),a:Yt(n[4]),format:t?`name`:`hex8`}:(n=nn.hex6.exec(e),n?{r:E(n[1]),g:E(n[2]),b:E(n[3]),format:t?`name`:`hex`}:(n=nn.hex4.exec(e),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),a:Yt(n[4]+n[4]),format:t?`name`:`hex8`}:(n=nn.hex3.exec(e),n?{r:E(n[1]+n[1]),g:E(n[2]+n[2]),b:E(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function an(e){return typeof e==`number`?!Number.isNaN(e):nn.CSS_UNIT.test(e)}var on=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=Xt(t)),this.originalInput=t;let r=Qt(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Ft(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Ht(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Ht(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=zt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=zt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return Wt(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return Gt(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(T(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(T(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...qt(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=qt(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+Wt(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(Zt))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=Mt(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=Mt(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=Mt(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=Mt(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}};
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
`,O=class extends pt{constructor(){super(),this.hasSlotController=new mt(this,`hint`,`label`),this.isSafeValue=!1,this.localize=new At(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue=``,this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label=``,this.hint=``,this.format=`hex`,this.size=`medium`,this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener(`invalid`,this.emitInvalid),this.reportValidity(),this.addEventListener(`invalid`,this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open){e.stopPropagation(),this.focus(),this.hide();return}e.key===`Tab`&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{let t=e.composedPath().some(e=>e instanceof Element&&(e.closest(`.color-picker`)||e===this.trigger));this&&!t&&this.hide()},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}static get validators(){let e=[n()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`preview-color-copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`preview-color-copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`];this.format=e[(e.indexOf(this.format)+1)%e.length],this.setColor(this.value||``),this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.slider.alpha`),n=t.querySelector(`.slider-handle`),{width:r}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),i(t,{onMove:e=>{this.alpha=gt(e/r*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.slider.hue`),n=t.querySelector(`.slider-handle`),{width:r}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),i(t,{onMove:e=>{this.hue=gt(e/r*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.grid`),n=t.querySelector(`.grid-handle`),{width:r,height:a}=t.getBoundingClientRect(),o=this.value,s=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,i(t,{onMove:(e,t)=>{this.saturation=gt(e/r*100,0,100),this.brightness=gt(100-t/a*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=gt(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=gt(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=gt(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=gt(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=gt(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=gt(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=gt(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=gt(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||``):this.value=``,this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()===``)return null;let t=new on(e);if(!t.isValid)return null;let n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let a={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=t.toHexString(),s=t.toHex8String(),c={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format===`hsl`?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`preview-color-copied`),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){this.hasEyeDropper&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){let i=new on(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){super.willUpdate(e),e.has(`value`)&&this.handleValueChange(e.get(`value`)||``,this.value||``)}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value||``,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues())}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){let e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener(`wa-after-show`,this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new dt),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper=`EyeDropper`in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}updateAccessibleTrigger(){let e=this.trigger;e&&(e.setAttribute(`aria-haspopup`,`true`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}async show(){if(!this.open)return this.open=!0,_t(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,_t(this,`wa-after-hide`)}addOpenListeners(){this.base.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){this.base&&this.base.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent(`wa-show`)),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await vt(this.popup.popup,`show-with-scale`),this.dispatchEvent(new CustomEvent(`wa-after-show`))):(this.dispatchEvent(new CustomEvent(`wa-hide`)),this.removeOpenListeners(),await vt(this.popup.popup,`hide-with-scale`),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent(`wa-after-hide`)))}render(){let e=this.hasUpdated?this.withLabel||this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.withHint||this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.saturation,a=100-this.brightness,o=Array.isArray(this.swatches)?this.swatches:this.swatches.split(`;`).filter(e=>e.trim()!==``),s=b`
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
    `}};O.css=[a,ht,r,pn],O.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0},l([w(`[part~="base"]`)],O.prototype,`base`,2),l([w(`[part~="input"]`)],O.prototype,`input`,2),l([w(`[part~="form-control-label"]`)],O.prototype,`triggerLabel`,2),l([w(`[part~="form-control-input"]`)],O.prototype,`triggerButton`,2),l([w(`.color-popup`)],O.prototype,`popup`,2),l([w(`[part~="preview"]`)],O.prototype,`previewButton`,2),l([w(`[part~="trigger"]`)],O.prototype,`trigger`,2),l([C()],O.prototype,`hasFocus`,2),l([C()],O.prototype,`isDraggingGridHandle`,2),l([C()],O.prototype,`isEmpty`,2),l([C()],O.prototype,`inputValue`,2),l([C()],O.prototype,`hue`,2),l([C()],O.prototype,`saturation`,2),l([C()],O.prototype,`brightness`,2),l([C()],O.prototype,`alpha`,2),l([C()],O.prototype,`value`,1),l([S({attribute:`value`,reflect:!0})],O.prototype,`defaultValue`,2),l([S({attribute:`with-label`,reflect:!0,type:Boolean})],O.prototype,`withLabel`,2),l([S({attribute:`with-hint`,reflect:!0,type:Boolean})],O.prototype,`withHint`,2),l([C()],O.prototype,`hasEyeDropper`,2),l([S()],O.prototype,`label`,2),l([S({attribute:`hint`})],O.prototype,`hint`,2),l([S()],O.prototype,`format`,2),l([S({reflect:!0})],O.prototype,`size`,2),l([S({attribute:`without-format-toggle`,type:Boolean})],O.prototype,`withoutFormatToggle`,2),l([S({reflect:!0})],O.prototype,`name`,2),l([S({type:Boolean})],O.prototype,`disabled`,2),l([S({type:Boolean,reflect:!0})],O.prototype,`open`,2),l([S({type:Boolean})],O.prototype,`opacity`,2),l([S({type:Boolean})],O.prototype,`uppercase`,2),l([S()],O.prototype,`swatches`,2),l([S({reflect:!0})],O.prototype,`form`,2),l([S({type:Boolean,reflect:!0})],O.prototype,`required`,2),l([ot({passive:!1})],O.prototype,`handleTouchMove`,1),l([jt(`format`,{waitUntilFirstUpdate:!0})],O.prototype,`handleFormatChange`,1),l([jt(`opacity`)],O.prototype,`handleOpacityChange`,1),l([jt(`value`)],O.prototype,`handleValueChange`,1),l([jt(`open`,{waitUntilFirstUpdate:!0})],O.prototype,`handleOpenChange`,1),O=l([rt(`wa-color-picker`)],O);
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
`,k=class extends pt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new mt(this,`hint`,`label`),this.localize=new At(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`medium`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,_n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new mn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){hn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return b`
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
    `}};k.css=[ht,r,wn],k.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0},l([w(`input`)],k.prototype,`input`,2),l([S()],k.prototype,`title`,2),l([S({reflect:!0})],k.prototype,`type`,2),l([C()],k.prototype,`value`,1),l([S({attribute:`value`,reflect:!0})],k.prototype,`defaultValue`,2),l([S({reflect:!0})],k.prototype,`size`,2),l([S({reflect:!0})],k.prototype,`appearance`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`pill`,2),l([S()],k.prototype,`label`,2),l([S({attribute:`hint`})],k.prototype,`hint`,2),l([S({attribute:`with-clear`,type:Boolean})],k.prototype,`withClear`,2),l([S()],k.prototype,`placeholder`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`readonly`,2),l([S({attribute:`password-toggle`,type:Boolean})],k.prototype,`passwordToggle`,2),l([S({attribute:`password-visible`,type:Boolean})],k.prototype,`passwordVisible`,2),l([S({attribute:`without-spin-buttons`,type:Boolean})],k.prototype,`withoutSpinButtons`,2),l([S({reflect:!0})],k.prototype,`form`,2),l([S({type:Boolean,reflect:!0})],k.prototype,`required`,2),l([S()],k.prototype,`pattern`,2),l([S({type:Number})],k.prototype,`minlength`,2),l([S({type:Number})],k.prototype,`maxlength`,2),l([S()],k.prototype,`min`,2),l([S()],k.prototype,`max`,2),l([S()],k.prototype,`step`,2),l([S()],k.prototype,`autocapitalize`,2),l([S()],k.prototype,`autocorrect`,2),l([S()],k.prototype,`autocomplete`,2),l([S({type:Boolean})],k.prototype,`autofocus`,2),l([S()],k.prototype,`enterkeyhint`,2),l([S({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],k.prototype,`spellcheck`,2),l([S()],k.prototype,`inputmode`,2),l([S({attribute:`with-label`,type:Boolean})],k.prototype,`withLabel`,2),l([S({attribute:`with-hint`,type:Boolean})],k.prototype,`withHint`,2),l([jt(`step`,{waitUntilFirstUpdate:!0})],k.prototype,`handleStepChange`,1),k=l([rt(`wa-input`)],k);
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
`;function wi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ti=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),j=class extends ut{constructor(){super(...arguments),this.localize=new At(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||wi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=pi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[mi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(_i({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;Ti&&!wi(this.anchor)&&this.boundary===`scroll`&&(t=Ir(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(gi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(hi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(_i({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(vi({element:this.arrowEl,padding:this.arrowPadding}));let n=Ti?e=>ui.getOffsetParent(e,bi):ui.getOffsetParent;yi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:Ti?`absolute`:`fixed`,platform:{...ui,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Tn)}render(){return b`
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
    `}};j.css=Ci,l([w(`.popup`)],j.prototype,`popup`,2),l([w(`.arrow`)],j.prototype,`arrowEl`,2),l([S()],j.prototype,`anchor`,2),l([S({type:Boolean,reflect:!0})],j.prototype,`active`,2),l([S({reflect:!0})],j.prototype,`placement`,2),l([S()],j.prototype,`boundary`,2),l([S({type:Number})],j.prototype,`distance`,2),l([S({type:Number})],j.prototype,`skidding`,2),l([S({type:Boolean})],j.prototype,`arrow`,2),l([S({attribute:`arrow-placement`})],j.prototype,`arrowPlacement`,2),l([S({attribute:`arrow-padding`,type:Number})],j.prototype,`arrowPadding`,2),l([S({type:Boolean})],j.prototype,`flip`,2),l([S({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],j.prototype,`flipFallbackPlacements`,2),l([S({attribute:`flip-fallback-strategy`})],j.prototype,`flipFallbackStrategy`,2),l([S({type:Object})],j.prototype,`flipBoundary`,2),l([S({attribute:`flip-padding`,type:Number})],j.prototype,`flipPadding`,2),l([S({type:Boolean})],j.prototype,`shift`,2),l([S({type:Object})],j.prototype,`shiftBoundary`,2),l([S({attribute:`shift-padding`,type:Number})],j.prototype,`shiftPadding`,2),l([S({attribute:`auto-size`})],j.prototype,`autoSize`,2),l([S()],j.prototype,`sync`,2),l([S({type:Object})],j.prototype,`autoSizeBoundary`,2),l([S({attribute:`auto-size-padding`,type:Number})],j.prototype,`autoSizePadding`,2),l([S({attribute:`hover-bridge`,type:Boolean})],j.prototype,`hoverBridge`,2),j=l([rt(`wa-popup`)],j);
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
`,M=class extends pt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new mt(this,`[default]`,`start`,`end`),this.localize=new At(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,_n()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new dt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?ki`a`:ki`button`;return ji`
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
    `}};M.shadowRootOptions={...pt.shadowRootOptions,delegatesFocus:!0},M.css=[Mi,Ei,ht],l([w(`.button`)],M.prototype,`button`,2),l([w(`slot:not([name])`)],M.prototype,`labelSlot`,2),l([C()],M.prototype,`invalid`,2),l([C()],M.prototype,`isIconButton`,2),l([S()],M.prototype,`title`,2),l([S({reflect:!0})],M.prototype,`variant`,2),l([S({reflect:!0})],M.prototype,`appearance`,2),l([S({reflect:!0})],M.prototype,`size`,2),l([S({attribute:`with-caret`,type:Boolean,reflect:!0})],M.prototype,`withCaret`,2),l([S({type:Boolean})],M.prototype,`disabled`,2),l([S({type:Boolean,reflect:!0})],M.prototype,`loading`,2),l([S({type:Boolean,reflect:!0})],M.prototype,`pill`,2),l([S()],M.prototype,`type`,2),l([S({reflect:!0})],M.prototype,`name`,2),l([S({reflect:!0})],M.prototype,`value`,2),l([S({reflect:!0})],M.prototype,`href`,2),l([S()],M.prototype,`target`,2),l([S()],M.prototype,`rel`,2),l([S()],M.prototype,`download`,2),l([S({reflect:!0})],M.prototype,`form`,2),l([S({attribute:`formaction`})],M.prototype,`formAction`,2),l([S({attribute:`formenctype`})],M.prototype,`formEnctype`,2),l([S({attribute:`formmethod`})],M.prototype,`formMethod`,2),l([S({attribute:`formnovalidate`,type:Boolean})],M.prototype,`formNoValidate`,2),l([S({attribute:`formtarget`})],M.prototype,`formTarget`,2),l([jt(`disabled`,{waitUntilFirstUpdate:!0})],M.prototype,`handleDisabledChange`,1),M=l([rt(`wa-button`)],M);
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
`,Pi=class extends ut{constructor(){super(...arguments),this.localize=new At(this)}render(){return b`
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
`,Ii=class extends ut{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label=``,this.orientation=`horizontal`,this.variant=`neutral`}updated(e){super.updated(e),e.has(`orientation`)&&(this.setAttribute(`aria-orientation`,this.orientation),this.updateClassNames())}handleFocus(e){Li(e.target)?.classList.add(`button-focus`)}handleBlur(e){Li(e.target)?.classList.remove(`button-focus`)}handleMouseOver(e){Li(e.target)?.classList.add(`button-hover`)}handleMouseOut(e){Li(e.target)?.classList.remove(`button-hover`)}handleSlotChange(){this.updateClassNames()}updateClassNames(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,e.forEach(t=>{let n=e.indexOf(t),r=Li(t);r&&(r.appearance===`outlined`&&(this.hasOutlined=!0),r.classList.add(`wa-button-group__button`),r.classList.toggle(`wa-button-group__horizontal`,this.orientation===`horizontal`),r.classList.toggle(`wa-button-group__vertical`,this.orientation===`vertical`),r.classList.toggle(`wa-button-group__button-first`,n===0),r.classList.toggle(`wa-button-group__button-inner`,n>0&&n<e.length-1),r.classList.toggle(`wa-button-group__button-last`,n===e.length-1),r.classList.toggle(`wa-button-group__button-radio`,r.tagName.toLowerCase()===`wa-radio-button`))})}render(){return b`
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
    `}};Ii.css=[Ei,Fi],l([w(`slot`)],Ii.prototype,`defaultSlot`,2),l([C()],Ii.prototype,`disableRole`,2),l([C()],Ii.prototype,`hasOutlined`,2),l([S()],Ii.prototype,`label`,2),l([S({reflect:!0})],Ii.prototype,`orientation`,2),l([S({reflect:!0})],Ii.prototype,`variant`,2),Ii=l([rt(`wa-button-group`)],Ii);function Li(e){let t=`wa-button, wa-radio-button`;return e.closest(t)??e.querySelector(t)}
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
`,ra=Symbol(),ia=Symbol(),aa,oa=new Map,N=class extends ut{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=b`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ra:ia}catch{return ia}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return ra;aa||=new DOMParser;let r=aa.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ra}catch{return ra}}}connectedCallback(){super.connectedCallback(),Zi(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qi(this)}getIconSource(){let e=$i(this.library),t=this.family||ea();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?$i(this.library):void 0;if(!e){this.svg=null;return}let r=oa.get(e);r||(r=this.resolveIcon(e,n),oa.set(e,r));let i=await r;if(i===ia&&oa.delete(e),e===this.getIconSource().url){if(yn(i)){this.svg=i;return}switch(i){case ia:case ra:this.svg=null,this.dispatchEvent(new ta);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Ri)}}}updated(e){super.updated(e);let t=$i(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:b`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};N.css=na,l([C()],N.prototype,`svg`,2),l([S({reflect:!0})],N.prototype,`name`,2),l([S({reflect:!0})],N.prototype,`family`,2),l([S({reflect:!0})],N.prototype,`variant`,2),l([S({attribute:`auto-width`,type:Boolean,reflect:!0})],N.prototype,`autoWidth`,2),l([S({attribute:`swap-opacity`,type:Boolean,reflect:!0})],N.prototype,`swapOpacity`,2),l([S()],N.prototype,`src`,2),l([S()],N.prototype,`label`,2),l([S({reflect:!0})],N.prototype,`library`,2),l([jt(`label`)],N.prototype,`handleLabelChange`,1),l([jt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],N.prototype,`setIcon`,1),N=l([rt(`wa-icon`)],N);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var sa=t({default:()=>O}),P;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var ca;function la(e){this.c=e}P=la.prototype,P.toString=(function(){return String.fromCharCode(this.c)});function ua(e){switch(typeof e){case`string`:return Cm.l();case`number`:return Ta(e)?e<<24>>24===e?up.l():e<<16>>16===e?_p.l():_m.l():Ea(e)?gm.l():hm.l();case`boolean`:return Mf.l();case`undefined`:return zc.l();default:return e instanceof V?bm.l():e instanceof la?Ff.l():e&&e.$classData?e.$classData.l():null}}function da(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Ta(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ea(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof V?`java.lang.Long`:e instanceof la?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hQ()}}function fa(e,t){switch(typeof e){case`string`:return Sm(e,t);case`number`:return pm(e,t);case`boolean`:return Af(e,t);case`undefined`:return Ic(e,t);default:return e&&e.$classData||e===null?e.h(t):e instanceof V?vm(e,t):e instanceof la?Pf(Oa(e),t):Aa.prototype.h.call(e,t)}}function pa(e){switch(typeof e){case`string`:return xm(e);case`number`:return mm(e);case`boolean`:return jf(e);case`undefined`:return Lc(e);default:return e&&e.$classData||e===null?e.p():e instanceof V?ym(e):e instanceof la?Nf(Oa(e)):Aa.prototype.p.call(e)}}function ma(e){return e===void 0?`undefined`:e.toString()}function ha(e,t){if(t===0)throw new lp(`/ by zero`);return e/t|0}function ga(e,t){if(t===0)throw new lp(`/ by zero`);return e%t|0}function _a(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function va(e){return String.fromCharCode(e)}function ya(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ba=0,xa=new WeakMap;function Sa(e){switch(typeof e){case`string`:return xm(e);case`number`:return mm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:xm(n);default:if(e===null)return 0;var r=xa.get(e);return r===void 0&&(r=ba+1|0,ba=r,xa.set(e,r)),r}}function Ca(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function wa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Ta(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ea(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Da(e){return new la(e)}Da(0);function Oa(e){return e===null?0:e.c}function ka(e){return e===null?ca:e}function Aa(){}P=Aa.prototype,P.constructor=Aa;function F(){}F.prototype=P,P.p=(function(){return Sa(this)}),P.h=(function(e){return this===e}),P.t=(function(){var e=this.p();return da(this)+`@`+(+(e>>>0)).toString(16)}),P.toString=(function(){return this.t()});function ja(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}P=ja.prototype=new F,P.constructor=ja,P.a1=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.X=(function(){return new ja(this.a.slice())});function Ma(){}Ma.prototype=P;function Na(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}P=Na.prototype=new F,P.constructor=Na,P.a1=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.X=(function(){return new Na(this.a.slice())});function Pa(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}P=Pa.prototype=new F,P.constructor=Pa,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new Pa(this.a.slice())});function Fa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}P=Fa.prototype=new F,P.constructor=Fa,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new Fa(this.a.slice())});function Ia(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}P=Ia.prototype=new F,P.constructor=Ia,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new Ia(this.a.slice())});function La(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}P=La.prototype=new F,P.constructor=La,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new La(this.a.slice())});function Ra(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=ca}else this.a=e}P=Ra.prototype=new F,P.constructor=Ra,P.a1=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),P.X=(function(){return new Ra(this.a.slice())});function za(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}P=za.prototype=new F,P.constructor=za,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new za(this.a.slice())});function Ba(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}P=Ba.prototype=new F,P.constructor=Ba,P.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),P.X=(function(){return new Ba(this.a.slice())});function I(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}P=I.prototype,P.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new I().y(this,r,i)),this}),P.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),P.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),P.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ma;n.constructor=t,n.a1=(function(e,t,n,r){ya(this.a,e,t.a,n,r)}),n.X=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Va});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),P.r=(function(){return this.A||=new I().a(this),this.A}),P.l=(function(){return this.L||=new Fd(this),this.L}),P.R=(function(e){return this===e||this.F(e)}),P.S=(function(){return this.P?this.P.l():null}),P.Q=(function(){return this.O?this.O.l():null});var Va=new I;Va.n={},Va.E=`Ljava.lang.Object;`,Va.F=(e=>!e.X),Va.N=`java.lang.Object`,Va.I=(e=>e!==null),Va.A=new I().y(Va,ja,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Aa.prototype.$classData=Va;var Ha=new I().p(void 0,`V`,`void`,void 0,void 0);new I().p(!1,`Z`,`boolean`,Na,void 0);var Ua=new I().p(0,`C`,`char`,Pa,Uint16Array);new I().p(0,`B`,`byte`,Fa,Int8Array),new I().p(0,`S`,`short`,Ia,Int16Array),new I().p(0,`I`,`int`,La,Int32Array);var Wa=new I().p(null,`J`,`long`,Ra,void 0);new I().p(0,`F`,`float`,za,Float32Array),new I().p(0,`D`,`double`,Ba,Float64Array);function Ga(e){return ua(e).cv()+`@`+Sa(e)}function Ka(e){var t=e.cG;return t===void 0?Ga(e):t}function qa(){Ya=this,Xa().hn(new Q((e=>void 0)),cl().e7,!0)}P=qa.prototype=new F,P.constructor=qa;function Ja(){}Ja.prototype=P,P.hn=(function(e,t,n){return new vf(e,n,t,this)}),new I().i(qa,`com.raquo.airstream.core.Observer$`,{b7:1});var Ya;function Xa(){return Ya||=new qa,Ya}function Za(e){this.bM=null,this.cH=null,this.bN=0,this.bM=e,this.cH=void 0;var t=vo().bo();this.bN=t===void 0?1:1+t.bN|0,ro().bq===-1||this.bN>ro().bq?pd().cC(new am(this,ro().bq)):co().P?co().al.push(this)|0:vo().co(this)}P=Za.prototype=new F,P.constructor=Za;function Qa(){}Qa.prototype=P;var $a=new I().i(Za,`com.raquo.airstream.core.Transaction`,{ba:1});function eo(){this.bq=0,this.cI=null,no=this,this.bq=1e3,this.cI=new Q((e=>{throw Ld(new J,`Attempted to run Transaction `+e+` after it was already executed.`)}))}P=eo.prototype=new F,P.constructor=eo;function to(){}to.prototype=P,P.eH=(function(e){try{e.bM.g(e);var t=e.cH;if(t!==void 0)for(;t.hU();)t.hK().hY(e)}catch(e){var n=e instanceof Pu?e:new xh(e);pd().cC(n)}}),new I().i(eo,`com.raquo.airstream.core.Transaction$`,{bb:1});var no;function ro(){return no||=new eo,no}function io(e){e.br.length|0?new Za(new Q((t=>{for(;(e.br.length|0)>0;){var n=e.br.shift();try{n.g(t)}catch(e){var r=e instanceof Pu?e:new xh(e);pd().cC(r)}}for(;(e.al.length|0)>0;){var i=e.al.shift();vo().co(i)}}))):(e.al.length|0)>0&&new Za(new Q((t=>{for(;(e.al.length|0)>0;)vo().co(e.al.shift())})))}function ao(){this.P=!1,this.br=null,this.al=null,so=this,this.P=!1,this.br=Uo().ag(W().l(new(H.r()).C([]))),this.al=Uo().ag(W().l(new($a.r()).C([])))}P=ao.prototype=new F,P.constructor=ao;function oo(){}oo.prototype=P,new I().i(ao,`com.raquo.airstream.core.Transaction$onStart$`,{bc:1});var so;function co(){return so||=new ao,so}function lo(e,t){return e.am.get(t)}function uo(e,t){e.bs.unshift(t)}function fo(e){return e.bs.shift()}function po(e,t,n){var r=lo(e,t),i=r===void 0,a=r===void 0?Uo().ag(W().l(new($a.r()).C([]))):r;a.push(n),i&&e.am.set(t,a)}function mo(e,t){var n=lo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.am.delete(t),i}}function ho(){this.bs=null,this.am=null,_o=this,this.bs=Uo().ag(W().l(new($a.r()).C([]))),this.am=new Map}P=ho.prototype=new F,P.constructor=ho;function go(){}go.prototype=P,P.co=(function(e){var t=this.bo();t===void 0?(uo(this,e),ro().eH(e),this.fR(e)):po(this,t,e)}),P.fR=(function(e){for(var t=e;;){var n=this.bo(),r=t;if(!(n!==void 0&&U().J(r,n)))throw Ld(new J,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gU(t),t.bM=ro().cI;var i=this.bo();if(U().J(i,void 0))if((this.am.size|0)>0){var a=new id(0);throw this.am.forEach((e=>((t,n)=>{e.b8=e.b8+(t.length|0)|0}))(a)),Ld(new J,`Transaction queue error: Stack cleared, but a total of `+a.b8+` children for `+(this.am.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ro().eH(i),t=i}}),P.gU=(function(e){for(var t=e;;){var n=mo(this,t);if(U().J(n,void 0)){fo(this);var r=this.bo();if(!U().J(r,void 0))t=r;else return}else{uo(this,n);return}}}),P.bo=(function(){return this.bs[0]}),new I().i(ho,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bd:1});var _o;function vo(){return _o||=new ho,_o}function yo(e,t){var n=e.a2.indexOf(t)|0;if(n!==-1)e.a2.splice(n,1),e.E.i()||t.f1();else throw Ld(new J,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function bo(e){for(;(e.bt.length|0)>0;)yo(e,e.bt.shift())}function xo(e){this.cJ=null,this.a2=null,this.aD=!1,this.bt=null,this.E=null,this.aE=0,this.cJ=e,this.a2=Uo().ag(W().l(new(To.r()).C([]))),this.aD=!0,this.bt=Uo().ag(W().l(new(To.r()).C([]))),this.E=$(),this.aE=0}P=xo.prototype=new F,P.constructor=xo;function So(){}So.prototype=P,P.er=(function(){if(this.E.i()){var e=co(),t=(()=>{var e=new Hl(this.cJ);this.E=new Om(e),this.aD=!1,this.aE=0;for(var t=0,n=this.a2.length|0;t<n;){var r=t+this.aE|0;this.a2[r].f0(e),t=1+t|0}bo(this),this.aD=!0,this.aE=0});if(co(),e.P)t();else{e.P=!0;try{t()}finally{e.P=!1,io(e)}}}else throw Ld(new J,`Can not activate `+this+`: it is already active`)}),P.fL=(function(){if(this.E.i())throw Ld(new J,`Can not deactivate DynamicOwner: it is not active`);this.aD=!1;for(var e=this.a2,t=0,n=e.length|0;t<n;)e[t].f1(),t=1+t|0;bo(this);var r=this.E;r.i()||r.y().gw(),bo(this),this.aD=!0,this.E=$()}),P.fx=(function(e,t){t?(this.aE=1+this.aE|0,this.a2.unshift(e)):this.a2.push(e);var n=this.E;if(!n.i()){var r=n.y();e.f0(r)}}),P.gZ=(function(e){this.aD?yo(this,e):this.bt.push(e)}),new I().i(xo,`com.raquo.airstream.ownership.DynamicOwner`,{be:1});function Co(e,t,n){this.bu=null,this.cK=null,this.bv=null,this.bu=e,this.cK=t,this.bv=$(),e.fx(this,n)}P=Co.prototype=new F,P.constructor=Co;function wo(){}wo.prototype=P,P.bJ=(function(){this.bu.gZ(this)}),P.f0=(function(e){var t=co(),n=(()=>{this.bv=this.cK.g(e)});if(co(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,io(t)}}}),P.f1=(function(){var e=this.bv;e.i()||(e.y().bJ(),this.bv=$())});var To=new I().i(Co,`com.raquo.airstream.ownership.DynamicSubscription`,{bf:1});function Eo(){}P=Eo.prototype=new F,P.constructor=Eo;function Do(){}Do.prototype=P,P.hl=(function(e,t,n){return new Co(e,new Q((e=>new Om(t.g(e)))),n)}),P.hd=(function(e,t,n){return new Co(e,new Q((e=>(t.g(e),$()))),n)}),new I().i(Eo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bg:1});var Oo;function ko(){return Oo||=new Eo,Oo}function Ao(e){e.aF=Uo().ag(W().l(new(Lo.r()).C([])))}function jo(e){for(var t=e.aF,n=0,r=t.length|0;n<r;)Po(t[n]),n=1+n|0;e.aF.length=0}function Mo(e,t){var n=e.aF.indexOf(t)|0;if(n!==-1)e.aF.splice(n,1);else throw Ld(new J,`Can not remove Subscription from Owner: subscription not found.`)}function No(e,t){e.aF.push(t)}function Po(e){if(!e.bP)e.cM.aA(),e.bP=!0;else throw Ld(new J,`Can not kill Subscription: it was already killed.`)}function Fo(e,t){this.cN=null,this.cM=null,this.bP=!1,this.cN=e,this.cM=t,this.bP=!1,e.gS(this)}P=Fo.prototype=new F,P.constructor=Fo;function Io(){}Io.prototype=P,P.bJ=(function(){Po(this),Mo(this.cN,this)});var Lo=new I().i(Fo,`com.raquo.airstream.ownership.Subscription`,{bj:1});function Ro(e,t){this.cO=null,this.cP=null,this.a3=null,this.an=!1,this.cO=e,this.cP=t,this.a3=$(),this.an=!1}P=Ro.prototype=new F,P.constructor=Ro;function zo(){}zo.prototype=P,P.gt=(function(){var e=this.a3;return!e.i()&&!e.y().bu.E.i()}),P.h7=(function(e){if(this.an)throw Ld(new J,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a3;if(t.i())var n=!1;else var n=e===t.y().bu;if(!n){this.gt()&&!e.E.i()&&(this.an=!0);var r=this.a3;r.i()||(r.y().bJ(),this.a3=$()),this.a3=new Om(ko().hl(e,new Q((e=>(this.an||this.cO.aA(),new Fo(e,new Jf((()=>{this.an||this.cP.aA()})))))),!1)),this.an=!1}}),P.fG=(function(){if(this.an)throw Ld(new J,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a3;e.i()||e.y().bJ(),this.a3=$()}),new I().i(Ro,`com.raquo.airstream.ownership.TransferableSubscription`,{bk:1});function Bo(){}P=Bo.prototype=new F,P.constructor=Bo;function Vo(){}Vo.prototype=P,P.ag=(function(e){return[...Fl().hj(e)]}),new I().i(Bo,`com.raquo.ew.JsArray$`,{bl:1});var Ho;function Uo(){return Ho||=new Bo,Ho}function Wo(){}P=Wo.prototype=new F,P.constructor=Wo;function Go(){}Go.prototype=P,P.g9=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new I().i(Wo,`com.raquo.ew.JsArray$RichJsArray$`,{bm:1});var Ko;function qo(){return Ko||=new Wo,Ko}function Jo(){this.cQ=null,Xo=this,document.createElement(`template`),this.fK(Z().w.he().hf()),this.cQ=RegExp(` `,`g`)}P=Jo.prototype=new F,P.constructor=Jo;function Yo(){}Yo.prototype=P,P.fA=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Pu?e:new xh(e);if(n instanceof xh&&n.S instanceof DOMException)return!1;throw n instanceof xh?n.S:n}}),P.gu=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(U().J(t,r))return!0;n=r}}),P.fJ=(function(e){return document.createElement(e.cw())}),P.gg=(function(e,t){var n=this.gh(e,t);return n===void 0?void 0:t.aY.bF(n)}),P.gh=(function(e,t){var n=e.Q.getAttributeNS(null,t.ap);return n===null?void 0:n}),P.f8=(function(e,t,n){this.h4(e,t,t.aY.bk(n))}),P.h4=(function(e,t,n){n===null?this.gY(e,t):e.Q.setAttribute(t.ap,n)}),P.gY=(function(e,t){e.Q.removeAttribute(t.ap)}),P.h5=(function(e,t,n){this.h6(e,t,t.dk.bk(n))}),P.h6=(function(e,t,n){e.Q[t.dl]=n}),P.f9=(function(e,t,n){var r=e.Q,i=t.aG,a=t.aH,o=n===null?null:n;o===null?(a.Y(new Q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.Y(new Q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),P.fK=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dw)}),P.gk=(function(e,t){var n=this.gl(e,t);return n===void 0?void 0:t.bT.bF(n)}),P.gl=(function(e,t){var n=e.cA(),r=t.bx,i=n.getAttributeNS(r.i()?null:r.y(),t.bU);return i===null?void 0:i}),P.h8=(function(e,t,n){this.h9(e,t,t.bT.bk(n))}),P.h9=(function(e,t,n){if(n===null)this.h0(e,t);else{var r=t.bx;if(r.i())e.cA().setAttribute(t.bw,n);else{var i=r.y();e.cA().setAttributeNS(i,t.bw,n)}}}),P.h0=(function(e,t){var n=e.cA(),r=t.bx;n.removeAttributeNS(r.i()?null:r.y(),t.bU)}),P.fN=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qg(this.fM(r),n);r=i,n=a}}),P.fM=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cQ,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new I().i(Jo,`com.raquo.laminar.DomApi$`,{bn:1});var Xo;function L(){return Xo||=new Jo,Xo}function Zo(e,t,n){this.bR=null,this.cR=null,this.bQ=null,this.bR=e,this.cR=t,this.bQ=n}P=Zo.prototype=new F,P.constructor=Zo;function Qo(){}Qo.prototype=P,P.Y=(function(e){this.bR===null?this.bQ===null?fl().ga(this.cR,e):qo().g9(this.bQ,lf().gd(e)):this.bR.Y(e)}),new I().i(Zo,`com.raquo.laminar.Seq`,{bo:1});function $o(){}P=$o.prototype=new F,P.constructor=$o;function es(){}es.prototype=P,new I().i($o,`com.raquo.laminar.Seq$`,{bp:1});var ts;function ns(){return ts||=new $o,ts}function rs(e){Xa(),pd()}function is(e){e.fb=Os()}function as(e){os(e,new Q((e=>{e.dm.Q.focus()})))}function os(e,t){return new ou(new Q((e=>{var n=new nd(!e.aI.E.i()),r=new Q((e=>{n.bE?n.bE=!1:t.g(e)}));ko().hd(e.aI,new Q((e=>(t=>{r.g(new Cs(e,t))}))(e)),!1)})),Os())}function ss(){this.ao=null,this.bS=null,ls=this,this.ao=new Kl(us()),new Kl(us()),new Kl(us()),this.bS=new Wl}P=ss.prototype=new F,P.constructor=ss;function cs(){}cs.prototype=P,new I().i(ss,`com.raquo.laminar.codecs.package$`,{bx:1});var ls;function us(){return ls||=new ss,ls}function ds(e){e.fc=fs(e,`class`,` `)}function fs(e,t,n){var r=Zl(new Ql,t,us().ao);return new Yl(r.ap,new Q((e=>{var t=L().gg(e,r);return t===void 0?``:t})),new Zf(((e,t)=>{L().f8(e,r,t)})),n)}function ps(e){e.fa=ms(e,`class`,` `)}function ms(e,t,n){var r=new nu(t,us().ao,$());return new Yl(r.bw,new Q((e=>{var t=L().gk(e,r);return t===void 0?``:t})),new Zf(((e,t)=>{L().h8(e,r,t)})),n)}function hs(e,t){this.dj=null,this.di=null,this.dj=e,this.di=t}P=hs.prototype=new F,P.constructor=hs;function gs(){}gs.prototype=P,P.m=(function(e){return new hd(this.dj,this.di.g(e),new $f(((e,t,n)=>{L().f9(e,t,n)})))}),new I().i(hs,`com.raquo.laminar.keys.DerivedStyleProp`,{bU:1});function _s(){}P=_s.prototype=new F,P.constructor=_s;function vs(){}vs.prototype=P;function ys(){this.fd=null,this.fe=null,this.ff=null,this.fg=null,this.fd=`http://www.w3.org/2000/svg`,this.fe=`http://www.w3.org/1999/xlink`,this.ff=`http://www.w3.org/XML/1998/namespace`,this.fg=`http://www.w3.org/2000/xmlns/`}P=ys.prototype=new F,P.constructor=ys;function bs(){}bs.prototype=P,P.gC=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new wp(e)}}),new I().i(ys,`com.raquo.laminar.keys.SvgAttr$`,{bX:1});var xs;function Ss(){return xs||=new ys,xs}function Cs(e,t){this.dm=null,this.dm=e}P=Cs.prototype=new F,P.constructor=Cs;function ws(){}ws.prototype=P,new I().i(Cs,`com.raquo.laminar.lifecycle.MountContext`,{bY:1});var R=new I().i(1,`com.raquo.laminar.modifiers.Modifier`,{U:1});function Ts(){this.fh=null,Ds=this,this.fh=new iu}P=Ts.prototype=new F,P.constructor=Ts;function Es(){}Es.prototype=P,new I().i(Ts,`com.raquo.laminar.modifiers.Modifier$`,{c0:1});var Ds;function Os(){return Ds||=new Ts,Ds}function ks(){}P=ks.prototype=new F,P.constructor=ks;function As(){}As.prototype=P,P.cq=(function(e,t,n){var r=new Om(e);np(t,r),n!==void 0&&n.hW(e,t);var i=L().fA(e.cz(),t.Q);return i&&rp(t,r),i}),new I().i(ks,`com.raquo.laminar.nodes.ParentNode$`,{c7:1});var js;function Ms(){return js||=new ks,js}function Ns(){Fs=this,Uo().ag(W().hp(new La(new Int32Array([0]))))}P=Ns.prototype=new F,P.constructor=Ns;function Ps(){}Ps.prototype=P,P.ft=(function(){return new Q((e=>void 0))}),new I().i(Ns,`com.raquo.laminar.tags.CustomHtmlTag$`,{cc:1});var Fs;function Is(){return Fs||=new Ns,Fs}function Ls(){}P=Ls.prototype=new F,P.constructor=Ls;function Rs(){}Rs.prototype=P,P.ep=(function(e){return Z().w.eK().cr(W().l(new(R.r()).C([Z().w.eJ().eU(),Z().w.g7().fH(),Z().w.eY().cy().m(8),md(Z().w,e,du())])))}),new I().i(Ls,`doc.ExampleGroups$package$`,{ce:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(){}P=Vs.prototype=new F,P.constructor=Vs;function Hs(){}Hs.prototype=P,P.eq=(function(e){return Z().w.eK().cr(W().l(new(R.r()).C([Z().w.eJ().eU(),Z().w.g8().ho(),Z().w.eY().cy().m(16),Z().w.gT().cy().m(8),md(Z().w,e,du())])))}),new I().i(Vs,`doc.Examples$package$`,{cf:1});var Us;function Ws(){return Us||=new Vs,Us}function Gs(){}P=Gs.prototype=new F,P.constructor=Gs;function Ks(){}Ks.prototype=P,P.fy=(function(){Js().fX(),Js().fY(),Js().fZ(),Js().g0(),Js().g1(),Js().g2(),Js().g3(),Js().g4()}),P.fX=(function(){var e=document.querySelector(`#example1`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([])))))}),P.fY=(function(){var e=document.querySelector(`#example2`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>(q().aW(),Z().w).aX().m(`#4a90e2`))),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([])))))}),P.fZ=(function(){var e=document.querySelector(`#example3`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>(q().aW(),Z().w).aX().m(`#f5a623ff`))),new X((e=>e.gP().m(!0))),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([])))))}),P.g0=(function(){var e=document.querySelector(`#example4`);e!==null&&(Z(),new _d(e,Bs().ep(W().l(new(fm.r()).C([Ws().eq(W().l(new(fm.r()).C([q().I(W().l(new(H.r()).C([new X((e=>e.bI().go())),new X((e=>(q().aW(),Z().w).aX().m(`#4a90e2`))),new X((e=>e.K().m(`Pick a hex color`)))])),W().l(new(R.r()).C([]))),q().I(W().l(new(H.r()).C([new X((e=>e.bI().h1())),new X((e=>(q().aW(),Z().w).aX().m(`rgb(80, 227, 194)`))),new X((e=>e.K().m(`Pick an RGB color`)))])),W().l(new(R.r()).C([]))),q().I(W().l(new(H.r()).C([new X((e=>e.bI().gq())),new X((e=>(q().aW(),Z().w).aX().m(`hsl(290, 87%, 47%)`))),new X((e=>e.K().m(`Pick an HSL color`)))])),W().l(new(R.r()).C([]))),q().I(W().l(new(H.r()).C([new X((e=>e.bI().gr())),new X((e=>(q().aW(),Z().w).aX().m(`hsv(55, 89%, 97%)`))),new X((e=>e.K().m(`Pick an HSV color`)))])),W().l(new(R.r()).C([])))])))])))))}),P.g1=(function(){var e=document.querySelector(`#example5`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>e.K().m(`Select a color`))),new X((e=>e.hg().m(`#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;`)))])),W().l(new(R.r()).C([])))))}),P.g2=(function(){var e=document.querySelector(`#example6`);e!==null&&(Z(),new _d(e,Bs().ep(W().l(new(fm.r()).C([Ws().eq(W().l(new(fm.r()).C([q().I(W().l(new(H.r()).C([new X((e=>e.cD().hc())),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([]))),q().I(W().l(new(H.r()).C([new X((e=>e.cD().gA())),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([]))),q().I(W().l(new(H.r()).C([new X((e=>e.cD().gx())),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([])))])))])))))}),P.g3=(function(){var e=document.querySelector(`#example7`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>e.fP().m(!0))),new X((e=>e.K().m(`Select a color`)))])),W().l(new(R.r()).C([])))))}),P.g4=(function(){var e=document.querySelector(`#example8`);e!==null&&(Z(),new _d(e,q().I(W().l(new(H.r()).C([new X((e=>e.K().m(`Select a color`))),new X((e=>e.gp().m(`Choose a color with appropriate contrast!`)))])),W().l(new(R.r()).C([])))))}),new I().i(Gs,`examples.colorPicker.Main$package$`,{cg:1});var qs;function Js(){return qs||=new Gs,qs}function Ys(e){try{Js().fy()}catch(e){throw e}}function Xs(){this.fj=!1,this.aZ=null,this.bz=null,this.dZ=null,this.c4=!1,this.fi=0,this.fl=0,this.fk=null,Qs=this,this.fj=!0,this.aZ=new ArrayBuffer(8),this.bz=new Int32Array(this.aZ,0,2),new Float32Array(this.aZ,0,2),this.dZ=new Float64Array(this.aZ,0,1),this.bz[0]=16909060,this.c4=(new Int8Array(this.aZ,0,8)[0]|0)==1,this.fi=this.c4?0:1,this.fl=this.c4?1:0,this.fk=null}P=Xs.prototype=new F,P.constructor=Xs;function Zs(){}Zs.prototype=P,P.cx=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dZ[0]=e,(this.bz[0]|0)^(this.bz[1]|0))}),new I().i(Xs,`java.lang.FloatingPointBits$`,{cv:1});var Qs;function $s(){return Qs||=new Xs,Qs}function ec(e,t){for(var n=z().V(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=tc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Eu(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Eu(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Ou.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function tc(e,t){var n=z().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=z().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=z().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=z().V(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=z().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[nc(e,c[1]),lc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[nc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[nc(e,d[1]),`<clinit>`]}function nc(e,t){var n=ic(e);if(Fc().e5.call(n,t))var r=ic(e)[t];else var r=bc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function rc(e){if(!((1&e.L)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c6=t,e.L=(1|e.L)<<24>>24}return e.c6}function ic(e){return(1&e.L)<<24>>24?e.c6:rc(e)}function ac(e){if(!((2&e.L)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c7=t,e.L=(2|e.L)<<24>>24}return e.c7}function oc(e){return(2&e.L)<<24>>24?e.c7:ac(e)}function sc(e){return(4&e.L)<<24>>24||(e.c5=Object.keys(oc(e)),e.L=(4|e.L)<<24>>24),e.c5}function cc(e){return(4&e.L)<<24>>24?e.c5:sc(e)}function lc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function uc(e,t){return t?t.arguments&&t.stack?dc(e,t):t.stack&&t.sourceURL?mc(e,t):t.stack&&t.number?pc(e,t):t.stack&&t.fileName?fc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?hc(e,t):gc(e,t):hc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?_c(e,t):vc(e,t):t.stack&&!t.fileName?dc(e,t):yc(e,t):[]}function dc(e,t){return(t.stack+`
`).replace(z().V(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(z().C(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(z().C(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(z().C(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(z().C(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function fc(e,t){return t.stack.replace(z().C(`(?:\\n@:0)?\\s+$`,`m`),``).replace(z().C(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function pc(e,t){return t.stack.replace(z().C(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(z().C(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(z().C(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function mc(e,t){return t.stack.replace(z().C(`\\[native code\\]\\n`,`m`),``).replace(z().C(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(z().C(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function hc(e,t){for(var n=z().C(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function gc(e,t){for(var n=z().C(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function _c(e,t){for(var n=z().V(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function vc(e,t){for(var n=z().V(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(z().V(`<anonymous function: (\\S+)>`),`$1`).replace(z().V(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function yc(e,t){return[]}function bc(e,t,n){for(;;)if(t<(cc(e).length|0)){var r=cc(e)[t];if(n.startsWith(r))return``+oc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function xc(){this.c6=null,this.c7=null,this.c5=null,this.L=0}P=xc.prototype=new F,P.constructor=xc;function Sc(){}Sc.prototype=P,P.g5=(function(e){return ec(this,uc(this,e))}),new I().i(xc,`java.lang.StackTrace$`,{cC:1});var Cc;function wc(){return Cc||=new xc,Cc}function Tc(){}P=Tc.prototype=new F,P.constructor=Tc;function Ec(){}Ec.prototype=P,P.V=(function(e){return new RegExp(e)}),P.C=(function(e,t){return new RegExp(e,t)}),new I().i(Tc,`java.lang.StackTrace$StringRE$`,{cD:1});var Dc;function z(){return Dc||=new Tc,Dc}function Oc(){this.e1=null,this.fm=null,Ac=this,this.e1=new Ch(!1),this.fm=new Ch(!0)}P=Oc.prototype=new F,P.constructor=Oc;function kc(){}kc.prototype=P,new I().i(Oc,`java.lang.System$Streams$`,{cI:1});var Ac;function jc(){return Ac||=new Oc,Ac}function Mc(){this.e5=null,Pc=this,this.e5=Object.prototype.hasOwnProperty}P=Mc.prototype=new F,P.constructor=Mc;function Nc(){}Nc.prototype=P,new I().i(Mc,`java.lang.Utils$Cache$`,{cK:1});var Pc;function Fc(){return Pc||=new Mc,Pc}function Ic(e,t){return e===t}function Lc(e){return 0}function Rc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ao)}var zc=new I().i(0,`java.lang.Void`,{ao:1},(e=>e===void 0));function Bc(e,t){throw new dp(`argument type mismatch`)}function Vc(){}P=Vc.prototype=new F,P.constructor=Vc;function Hc(){}Hc.prototype=P,P.aR=(function(e){return e instanceof ja||e instanceof Na||e instanceof Pa||e instanceof Fa||e instanceof Ia||e instanceof La||e instanceof Ra||e instanceof za||e instanceof Ba?e.a.length:Bc(this,e)}),new I().i(Vc,`java.lang.reflect.Array$`,{cL:1});var Uc;function Wc(){return Uc||=new Vc,Uc}function Gc(){}P=Gc.prototype=new F,P.constructor=Gc;function Kc(){}Kc.prototype=P,P.eQ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),P.eP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eR=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eS=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),P.eN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),P.eO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new I().i(Gc,`java.util.Arrays$`,{cM:1});var qc;function B(){return qc||=new Gc,qc}function V(e,t){this.c=0,this.d=0,this.c=e,this.d=t}P=V.prototype=new F,P.constructor=V;function Jc(){}Jc.prototype=P,P.h=(function(e){return e instanceof V&&this.c===e.c&&this.d===e.d}),P.p=(function(){return this.c^this.d}),P.t=(function(){return nl().f5(this.c,this.d)}),P.i1=(function(){return this.c}),P.i0=(function(){return nl().f4(this.c,this.d)}),P.hZ=(function(){return nl().bn(this.c,this.d)}),P.hH=(function(){return this.c<<24>>24}),P.hX=(function(){return this.c<<16>>16}),P.hR=(function(){return this.c}),P.hS=(function(){return this}),P.hN=(function(){return nl().f4(this.c,this.d)}),P.hL=(function(){return nl().bn(this.c,this.d)}),P.hJ=(function(e){return nl().f2(this.c,this.d,e.c,e.d)}),P.hI=(function(e){return nl().f2(this.c,this.d,e.c,e.d)}),P.hM=(function(e){return this.c===e.c&&this.d===e.d}),P.hV=(function(e){return!(this.c===e.c&&this.d===e.d)}),P.hz=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),P.hA=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),P.hv=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),P.hw=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),P.i3=(function(){return new V(~this.c,~this.d)}),P.ht=(function(e){return new V(this.c|e.c,this.d|e.d)}),P.hs=(function(e){return new V(this.c&e.c,this.d&e.d)}),P.hG=(function(e){return new V(this.c^e.c,this.d^e.d)}),P.hB=(function(e){var t=this.c;return new V(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),P.hy=(function(e){var t=this.d;return new V(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),P.hx=(function(e){var t=this.d;return new V(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),P.i2=(function(){var e=this.c,t=this.d;return new V(-e|0,e===0?-t|0:~t)}),P.hE=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new V(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),P.hC=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new V(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),P.hF=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new V(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),P.hu=(function(e){var t=nl();return new V(t.fQ(this.c,this.d,e.c,e.d),t.r)}),P.hD=(function(e){var t=nl();return new V(t.gX(this.c,this.d,e.c,e.d),t.r)}),new I().i(V,`org.scalajs.linker.runtime.RuntimeLong`,{ap:1});function Yc(e,t,n){return-2097152&n?Qc(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Xc(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.r=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.r=0,n>>>o|0}else return Qc(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.r=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.r=s/4294967296|0,s|0}}function Zc(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.r=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.r=n&(-1+i|0),t):Qc(e,t,n,r,i,1)|0;if(-2097152&i)return e.r=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.r=a/4294967296|0,a|0}function Qc(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,ee=u,v=d;if(_===v?(-2147483648^g)>=(-2147483648^ee):(-2147483648^_)>=(-2147483648^v)){var te=f,ne=p,re=u,y=d,ie=te-re|0,ae=(-2147483648^ie)>(-2147483648^te)?-1+(ne-y|0)|0:ne-y|0;f=ie,p=ae,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var oe=u,se=d,ce=oe>>>1|0|se<<31,le=se>>>1|0;u=ce,d=le}var ue=f,de=p;if(de===i?(-2147483648^ue)>=(-2147483648^r):(-2147483648^de)>=(-2147483648^i)){var fe=f,pe=4294967296*p+ +(fe>>>0),me=4294967296*i+ +(r>>>0);if(a!==1){var he=pe/me,ge=he|0,_e=he/4294967296|0,ve=m,ye=h,be=ve+ge|0,xe=(-2147483648^be)<(-2147483648^ve)?1+(ye+_e|0)|0:ye+_e|0;m=be,h=xe}if(a!==0){var Se=pe%me;f=Se|0,p=Se/4294967296|0}}if(a===0)return e.r=h,m;if(a===1)return e.r=p,f;var Ce=m,we=4294967296*h+ +(Ce>>>0),Te=``+f,Ee=Te.length;return``+we+`000000000`.substring(Ee)+Te}function $c(){this.r=0}P=$c.prototype=new F,P.constructor=$c;function el(){}el.prototype=P,P.f5=(function(e,t){return t===e>>31?``+e:t<0?`-`+Yc(this,-e|0,e===0?-t|0:~t):Yc(this,e,t)}),P.bn=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),P.f4=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),P.hP=(function(e){return new V(e,e>>31)}),P.hO=(function(e){return new V(this.f3(e),this.r)}),P.f3=(function(e){if(e<-0x8000000000000000)return this.r=-2147483648,0;if(e>=0x8000000000000000)return this.r=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.r=e<0&&t!==0?-1+n|0:n,t}),P.f2=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),P.fQ=(function(e,t,n,r){if((n|r)===0)throw new lp(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.r=0,-2147483648;var i=ha(e,n);return this.r=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=-1,-1;else return this.r=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Xc(this,a,o,s,c);if((t^r)>=0)return l;var u=this.r;return this.r=l===0?-u|0:~u,-l|0}}),P.gX=(function(e,t,n,r){if((n|r)===0)throw new lp(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ga(e,n);return this.r=i>>31,i}else return this.r=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=0,0;else return this.r=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Zc(this,a,o,s,c);if(t<0){var u=this.r;return this.r=l===0?-u|0:~u,-l|0}else return l}}),new I().i($c,`org.scalajs.linker.runtime.RuntimeLong$`,{cO:1});var tl;function nl(){return tl||=new $c,tl}var H=new I().i(1,`scala.Function1`,{e:1});function rl(){}P=rl.prototype=new F,P.constructor=rl;function il(){}il.prototype=P;function al(){this.e8=null,this.e7=null,sl=this,this.e8=new X((e=>cl().e8)),this.e7=new zf}P=al.prototype=new F,P.constructor=al;function ol(){}ol.prototype=P,new I().i(al,`scala.PartialFunction$`,{cY:1});var sl;function cl(){return sl||=new al,sl}function ll(){this.eb=null,dl=this,this.eb=new X((e=>fl().eb))}P=ll.prototype=new F,P.constructor=ll;function ul(){}ul.prototype=P,P.ga=(function(e,t){var n=Wc().aR(e),r=0;if(e instanceof ja)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof La)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Ba)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Ra)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof za)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Pa)for(;r<n;)t.g(Da(e.a[r])),r=1+r|0;else if(e instanceof Fa)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Ia)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Na)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new wp(e)}),new I().i(ll,`scala.collection.ArrayOps$`,{d4:1});var dl;function fl(){return dl||=new ll,dl}function pl(e,t){for(var n=e.n();n.s();)t.g(n.f())}function ml(e,t,n,r){return e.z()===0?``+t+r:e.ba(a_(new o_),t,n,r).H.q}function hl(e,t,n,r,i){var a=t.H;n.length!==0&&(a.q=``+a.q+n);var o=e.n();if(o.s()){var s=o.f();for(a.q=``+a.q+s;o.s();){a.q=``+a.q+r;var c=o.f();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function gl(e,t){this.ef=null,this.b5=null,this.ef=e,this.b5=t}P=gl.prototype=new F,P.constructor=gl;function _l(){}_l.prototype=P,P.gn=(function(){return this.ef.aA().n()}),new I().i(gl,`scala.collection.Iterator$ConcatIteratorCell`,{dm:1});function vl(){}P=vl.prototype=new F,P.constructor=vl;function yl(){}yl.prototype=P,P.J=(function(e,t){return e===t||(Tu(e)?this.fW(e,t):e instanceof la?this.fU(e,t):e===null?t===null:fa(e,t))}),P.fW=(function(e,t){if(Tu(t))return this.fV(e,t);if(t instanceof la){if(typeof e==`number`)return+e===t.c;if(e instanceof V){var n=ka(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:fa(e,t)}else return e===null?t===null:fa(e,t)}),P.fV=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof V){var r=ka(t);return n===nl().bn(r.c,r.d)}else return!1}else if(e instanceof V){var i=ka(e),a=i.c,o=i.d;if(t instanceof V){var s=ka(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return nl().bn(a,o)===u}else return!1}else return e===null?t===null:fa(e,t)}),P.fU=(function(e,t){if(t instanceof la)return e.c===t.c;if(Tu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof V){var n=ka(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:fa(t,e)}else return e===null&&t===null}),new I().i(vl,`scala.runtime.BoxesRunTime$`,{dY:1});var bl;function U(){return bl||=new vl,bl}var xl=new I().i(0,`scala.runtime.Null$`,{e1:1});function Sl(){}P=Sl.prototype=new F,P.constructor=Sl;function Cl(){}Cl.prototype=P,P.aP=(function(e,t){if(e instanceof ja||e instanceof La||e instanceof Ba||e instanceof Ra||e instanceof za)return e.a[t];if(e instanceof Pa)return Da(e.a[t]);if(e instanceof Fa||e instanceof Ia||e instanceof Na)return e.a[t];throw e===null?new gp:new wp(e)}),P.fD=(function(e,t,n){if(e instanceof ja)e.a[t]=n;else if(e instanceof La)e.a[t]=n|0;else if(e instanceof Ba)e.a[t]=+n;else if(e instanceof Ra)e.a[t]=ka(n);else if(e instanceof za)e.a[t]=Math.fround(n);else if(e instanceof Pa)e.a[t]=Oa(n);else if(e instanceof Fa)e.a[t]=n|0;else if(e instanceof Ia)e.a[t]=n|0;else if(e instanceof Na)e.a[t]=!!n;else if(e===null)throw new gp;else throw new wp(e)}),P.fv=(function(e){return ml(e.aU(),e.aj()+`(`,`,`,`)`)}),P.l=(function(e){return e===null?null:e.a.length===0?zm(Um()):new Sg(e)}),P.hp=(function(e){return e===null?null:new vg(e)}),new I().i(Sl,`scala.runtime.ScalaRunTime$`,{e2:1});var wl;function W(){return wl||=new Sl,wl}function Tl(){}P=Tl.prototype=new F,P.constructor=Tl;function El(){}El.prototype=P,P.b=(function(e,t){var n=this.bK(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),P.bK=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),P.k=(function(e,t){return this.fE(e^t)}),P.fE=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.aT=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),P.U=(function(e){var t=_a(e);if(t===e)return t;var n=nl(),r=n.f3(e),i=n.r;return nl().bn(r,i)===e?r^i:$s().cx(e)}),P.x=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof V){var t=ka(e);return this.aT(new V(t.c,t.d))}else return pa(e)}),P.bm=(function(e){throw fp(new pp,``+e)}),new I().i(Tl,`scala.runtime.Statics$`,{e4:1});var Dl;function G(){return Dl||=new Tl,Dl}function Ol(){}P=Ol.prototype=new F,P.constructor=Ol;function kl(){}kl.prototype=P,P.ha=(function(e,t){return setTimeout((()=>{t.aA()}),e)}),new I().i(Ol,`scala.scalajs.js.timers.package$`,{ea:1});var Al;function jl(){return Al||=new Ol,Al}function Ml(){}P=Ml.prototype=new F,P.constructor=Ml;function Nl(){}Nl.prototype=P,P.hj=(function(e){var t=[];return e.Y(new X((e=>t.push(e)|0))),t}),new I().i(Ml,`scala.scalajs.runtime.Compat$`,{ej:1});var Pl;function Fl(){return Pl||=new Ml,Pl}function Il(){}P=Il.prototype=new F,P.constructor=Il;function Ll(){}Ll.prototype=P,P.hb=(function(e){var t=`Illegal command line`+(e.eZ()===0?``:e.eZ()===1?` after first argument`:` after `+e.eZ()+` arguments`)+`: `+e.hT();Hu().gR().gv(t+`
`)}),new I().i(Il,`scala.util.CommandLineParser$`,{el:1});function Rl(e){this.cn=null,this.cn=e}P=Rl.prototype=new F,P.constructor=Rl;function zl(){}zl.prototype=P,P.t=(function(){return`DynamicVariable(`+this.cn+`)`}),new I().i(Rl,`scala.util.DynamicVariable`,{en:1});function Bl(){}P=Bl.prototype=new F,P.constructor=Bl;function Vl(){}Vl.prototype=P,P.b=(function(e,t){var n=this.bK(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),P.bK=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),P.k=(function(e,t){return this.D(e^t)}),P.D=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),P.f6=(function(e,t,n){var r=e.ah();if(r===0)return xm(e.aj());var i=t;n||(i=this.b(i,xm(e.aj())));for(var a=0;a<r;)i=this.b(i,G().x(e.ai(a))),a=1+a|0;return this.k(i,r)}),P.hk=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.s();){var s=o.f(),c=G().x(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bK(l,a),this.k(l,i)}),P.gQ=(function(e,t){var n=e.n(),r=t;if(!n.s())return this.k(r,0);var i=n.f();if(!n.s())return this.k(this.b(r,G().x(i)),1);var a=n.f(),o=G().x(i);r=this.b(r,o);for(var s=r,c=G().x(a),l=c-o|0,u=2;n.s();){r=this.b(r,c);var d=G().x(n.f());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.s();)r=this.b(r,G().x(n.f())),u=1+u|0;return this.k(r,u)}c=d,u=1+u|0}return this.D(this.b(this.b(s,l),c))}),P.ev=(function(e,t){var n=t,r=Wc().aR(e);switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,G().x(W().aP(e,0))),1);default:var i=G().x(W().aP(e,0));n=this.b(n,i);for(var a=n,o=G().x(W().aP(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().x(W().aP(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().x(W().aP(e,c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.gV=(function(e,t,n,r){return this.D(this.b(this.b(this.b(r,e),t),n))}),P.gs=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,G().x(e.o(0))),1);default:var i=G().x(e.o(0));n=this.b(n,i);for(var a=n,o=G().x(e.o(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().x(e.o(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().x(e.o(c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.gy=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.i();){var l=c.a0(),u=c.W(),d=G().x(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gV(s,a,o,t):this.k(r,n)}),P.eE=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.ew=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.ex=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.ey=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,G().U(e.a[0])),1);default:var i=G().U(e.a[0]);n=this.b(n,i);for(var a=n,o=G().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.ez=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,G().U(e.a[0])),1);default:var i=G().U(e.a[0]);n=this.b(n,i);for(var a=n,o=G().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.eA=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.eB=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:var i=n,a=e.a[0];return this.k(this.b(i,G().aT(new V(a.c,a.d))),1);default:var o=e.a[0],s=G().aT(new V(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=G().aT(new V(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=G().aT(new V(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.b(h,G().aT(new V(g.c,g.d))),f=1+f|0}return this.k(n,r)}u=m,f=1+f|0}return this.D(this.b(this.b(c,d),u))}}),P.eC=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.D(this.b(this.b(a,s),o))}}),P.eD=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.k(n,r)}a=0,s=1+s|0}return this.D(this.b(this.b(i,o),a))}});function Hl(e){this.aF=null,this.cL=null,this.bO=!1,this.cL=e,Ao(this),this.bO=!1}P=Hl.prototype=new F,P.constructor=Hl;function Ul(){}Ul.prototype=P,P.gS=(function(e){this.bO?(Po(e),this.cL.aA()):No(this,e)}),P.gw=(function(){jo(this),this.bO=!0}),new I().i(Hl,`com.raquo.airstream.ownership.OneTimeOwner`,{bh:1,bi:1});function Wl(){}P=Wl.prototype=new F,P.constructor=Wl;function Gl(){}Gl.prototype=P,P.fO=(function(e){return e!==null}),P.fT=(function(e){return e?``:null}),P.bF=(function(e){return this.fO(e)}),P.bk=(function(e){return this.fT(!!e)}),new I().i(Wl,`com.raquo.laminar.codecs.package$$anon$1`,{by:1,a1:1});function Kl(e){if(e===null)throw new gp}P=Kl.prototype=new F,P.constructor=Kl;function ql(){}ql.prototype=P,P.bk=(function(e){return e}),P.bF=(function(e){return e}),new I().i(Kl,`com.raquo.laminar.codecs.package$$anon$2`,{bz:1,a1:1});function Jl(e){return new hs(e,new Q((e=>e+`px`)))}function Yl(e,t,n,r){}P=Yl.prototype=new vs,P.constructor=Yl;function Xl(){}Xl.prototype=P,new I().i(Yl,`com.raquo.laminar.keys.CompositeKey`,{bT:1,K:1});function Zl(e,t,n){return e.ap=t,e.aY=n,e}function Ql(){this.ap=null,this.aY=null}P=Ql.prototype=new vs,P.constructor=Ql;function $l(){}$l.prototype=P,P.m=(function(e){return new hd(this,e,new $f(((e,t,n)=>{L().f8(e,t,n)})))}),new I().i(Ql,`com.raquo.laminar.keys.HtmlAttr`,{a2:1,K:1});function eu(e,t){this.dl=null,this.dk=null,this.dl=e,this.dk=t}P=eu.prototype=new vs,P.constructor=eu;function tu(){}tu.prototype=P,P.m=(function(e){return new hd(this,e,new $f(((e,t,n)=>{L().h5(e,t,n)})))}),new I().i(eu,`com.raquo.laminar.keys.HtmlProp`,{bV:1,K:1});function nu(e,t,n){this.bU=null,this.bT=null,this.bw=null,this.bx=null,this.bU=e,this.bT=t;var r=n.i()?$():new Om(n.y()+`:`+e);this.bw=r.i()?e:r.y(),this.bx=n.i()?$():new Om(Ss().gC(n.y()))}P=nu.prototype=new vs,P.constructor=nu;function ru(){}ru.prototype=P,new I().i(nu,`com.raquo.laminar.keys.SvgAttr`,{bW:1,K:1});function iu(){}P=iu.prototype=new F,P.constructor=iu;function au(){}au.prototype=P,P.aO=(function(e){}),new I().i(iu,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c1:1,U:1});function ou(e,t){if(this.dr=null,this.dr=e,t===null)throw new gp}P=ou.prototype=new F,P.constructor=ou;function su(){}su.prototype=P,P.aO=(function(e){var t=co(),n=(()=>{this.dr.g(e)});if(co(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,io(t)}}}),new I().i(ou,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c2:1,U:1});function cu(){}P=cu.prototype=new F,P.constructor=cu;function lu(){}lu.prototype=P,new I().i(cu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{c4:1,c3:1});var uu;function du(){return uu||=new cu,uu}function fu(e){e.eI(new xo(new Jf((()=>{throw Ld(new J,`Attempting to use owner of unmounted element: `+ml(L().fN(e.cz(),(L(),r_())),``,` > `,``))}))))}function pu(e,t,n){return e.bX=t,e}function mu(){this.bX=null}P=mu.prototype=new F,P.constructor=mu;function hu(){}hu.prototype=P,P.cw=(function(){return this.bX}),P.cr=(function(e){var t=this.fF();return e.Y(new Q((e=>{e.aO(t)}))),t}),P.fF=(function(){return new um(this,L().fJ(this))}),new I().i(mu,`com.raquo.laminar.tags.HtmlTag`,{ad:1,a3:1});function gu(e,t){this.dw=null,this.dw=e}P=gu.prototype=new F,P.constructor=gu;function _u(){}_u.prototype=P,new I().i(gu,`com.raquo.laminar.tags.SvgTag`,{cd:1,a3:1});function vu(){}P=vu.prototype=new F,P.constructor=vu;function yu(){}yu.prototype=P,P.bk=(function(e){return e}),P.bF=(function(e){return e}),new I().i(vu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cl:1,a1:1});function bu(e,t){return e.bZ=t,e.fu(),e}function xu(){this.bZ=null,this.bY=null,this.c0=!1,this.c1=null,this.c2=!1}P=xu.prototype=new F,P.constructor=xu;function Su(){}Su.prototype=P,P.hh=(function(){return this.c0||=(this.bY=new yd(this.bZ,Is().ft(),(Is(),void 0)),!0),this.bY}),P.I=(function(e,t){var n=this.hh().cr(W().l(new(R.r()).C([])));return e.Y(new Q((e=>{e.g(this).aO(n)}))),t.Y(new Q((e=>{e.aO(n)}))),n}),P.aW=(function(){return this.c2||=(this.c1=new Md,!0),this.c1});function Cu(){}P=Cu.prototype=new F,P.constructor=Cu;function wu(){}wu.prototype=P;function Tu(e){return e instanceof Cu||typeof e==`number`||e instanceof V}function Eu(e,t,n,r,i){this.aK=null,this.b1=null,this.aL=null,this.aM=0,this.aJ=0,this.aK=e,this.b1=t,this.aL=n,this.aM=r,this.aJ=i}P=Eu.prototype=new F,P.constructor=Eu;function Du(){}Du.prototype=P,P.h=(function(e){return e instanceof Eu&&this.aL===e.aL&&this.aM===e.aM&&this.aJ===e.aJ&&this.aK===e.aK&&this.b1===e.b1}),P.t=(function(){var e=``;return this.aK!==`<jscode>`&&(e=``+e+this.aK+`.`),e=``+e+this.b1,this.aL===null?e+=`(Unknown Source)`:(e=e+`(`+this.aL,this.aM>=0&&(e=e+`:`+this.aM,this.aJ>=0&&(e=e+`:`+this.aJ)),e+=`)`),e}),P.p=(function(){return xm(this.aK)^xm(this.b1)^xm(this.aL)^this.aM^this.aJ});var Ou=new I().i(Eu,`java.lang.StackTraceElement`,{an:1,a:1});function ku(){}P=ku.prototype=new F,P.constructor=ku;function Au(){}Au.prototype=P,P.gD=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new wm;for(var i=``,a=t;a!==r;)i+=``+va(e.a[a]),a=1+a|0;return i}),new I().i(ku,`java.lang.String$`,{cF:1,a:1});var ju;function Mu(){return ju||=new ku,ju}function Nu(e,t,n,r,i){return e.e3=t,e.e4=i,i&&e.g6(),e}var Pu=class extends Error{constructor(){super(),this.e3=null,this.e4=!1,this.e2=null,this.bA=null}bl(){return this.e3}g6(){var e=this instanceof xh?this.S:this;return this.e2=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gj(){return this.bA===null&&(this.e4?this.bA=wc().g5(this.e2):this.bA=new(Ou.r()).C(0)),this.bA}t(){var e=da(this),t=this.bl();return t===null?e:e+`: `+t}p(){return Aa.prototype.p.call(this)}h(e){return Aa.prototype.h.call(this,e)}get message(){var e=this.bl();return e===null?``:e}get name(){return da(this)}toString(){return this.t()}};function Fu(){}P=Fu.prototype=new F,P.constructor=Fu;function Iu(){}Iu.prototype=P,P.eV=(function(e,t){var n=e.z();if(n>-1){for(var r=t.gE(n),i=e.n(),a=0;a<n;)W().fD(r,a,i.f()),a=1+a|0;return r}else{var o=null,s=t.h2(),c=s===Ua.l();o=[];for(var l=e.n();l.s();){var u=l.f(),d=c?Oa(u):u===null?s.ak.z:u;o.push(d)}return(s===Ha.l()?zc.l():s===xl.l()||s===af.l()?Va.l():s).ak.r().w(o)}}),P.eT=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!U().J(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new I().i(Fu,`scala.Array$`,{cP:1,a:1});var Lu;function Ru(){return Lu||=new Fu,Lu}function zu(){this.e6=null,Vu=this,this.e6=new Rl(jc().e1)}P=zu.prototype=new F,P.constructor=zu;function Bu(){}Bu.prototype=P,P.gR=(function(){return this.e6.cn}),new I().i(zu,`scala.Console$`,{cQ:1,dK:1});var Vu;function Hu(){return Vu||=new zu,Vu}function Uu(){}P=Uu.prototype=new F,P.constructor=Uu;function Wu(){}Wu.prototype=P,P.t=(function(){return`<function1>`});function Gu(){}P=Gu.prototype=new il,P.constructor=Gu;function Ku(){}Ku.prototype=P,P.hq=(function(e){return e===null?null:e.a.length===0?qm().eg:new Kg(e)});function qu(e,t){if(t===e)e.es(Qp().eW(t));else for(var n=t.n();n.s();)e.cp(n.f());return e}function Ju(){}P=Ju.prototype=new F,P.constructor=Ju;function Yu(){}Yu.prototype=P,P.t=(function(){return`<function0>`});function Xu(){}P=Xu.prototype=new F,P.constructor=Xu;function Zu(){}Zu.prototype=P,P.t=(function(){return`<function1>`});function Qu(){}P=Qu.prototype=new F,P.constructor=Qu;function $u(){}$u.prototype=P,P.t=(function(){return`<function2>`});function ed(){}P=ed.prototype=new F,P.constructor=ed;function td(){}td.prototype=P,P.t=(function(){return`<function3>`});function nd(e){this.bE=!1,this.bE=e}P=nd.prototype=new F,P.constructor=nd;function rd(){}rd.prototype=P,P.t=(function(){return``+this.bE}),new I().i(nd,`scala.runtime.BooleanRef`,{dX:1,a:1});function id(e){this.b8=0,this.b8=e}P=id.prototype=new F,P.constructor=id;function ad(){}ad.prototype=P,P.t=(function(){return``+this.b8}),new I().i(id,`scala.runtime.IntRef`,{dZ:1,a:1});function od(){this.u=0,this.eo=0,this.fs=0,this.fr=0,cd=this,this.u=xm(`Seq`),this.eo=xm(`Map`),this.fs=xm(`Set`),this.fr=this.hk(r_(),this.eo)}P=od.prototype=new Vl,P.constructor=od;function sd(){}sd.prototype=P,P.h3=(function(e){return Bh(e)?this.gs(e,this.u):e instanceof Ag?this.gy(e,this.u):this.gQ(e,this.u)}),new I().i(od,`scala.util.hashing.MurmurHash3$`,{ep:1,eo:1});var cd;function K(){return cd||=new od,cd}var ld=class extends Pu{};function ud(){this.bL=null,this.cE=null,this.cF=null,fd=this,this.bL=Qp().et(W().l(new(H.r()).C([]))),this.cE=new Q((e=>{try{console.error(this.gf(e)+`
`+this.gi(e,`
`))}catch(e){var t=e instanceof Pu?e:new xh(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cF=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof xh?t.S:t})),this.gW(this.cE)}P=ud.prototype=new F,P.constructor=ud;function dd(){}dd.prototype=P,P.gf=(function(e){try{var t=e.bl()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ua(e).cv()+`: `+t}),P.gi=(function(e,t){try{return ml(Vd().hq(e.gj()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),P.gW=(function(e){this.bL.cp(e)}),P.cC=(function(e){for(var t=this.bL.n();t.s();){var n=t.f();try{n.g(e)}catch(e){var r=e instanceof Pu?e:new xh(e),i=this.cF;if(n===null?i===null:n.h(i))throw r instanceof xh?r.S:r;console.warn(`Error processing an unhandled error callback:`),jl().ha(0,new Jf((e=>(()=>{throw e instanceof xh?e.S:e}))(r)))}}}),new I().i(ud,`com.raquo.airstream.core.AirstreamError$`,{b4:1,dI:1,dJ:1});var fd;function pd(){return fd||=new ud,fd}function md(e,t,n){return new ou(new Q((e=>{(ns(),new Zo(t,null,null)).Y(new Q((e=>(t=>{Ms().cq(e,t,void 0)}))(e)))})),Os())}function hd(e,t,n){this.dp=null,this.dq=null,this.dn=null,this.dp=e,this.dq=t,this.dn=n}P=hd.prototype=new F,P.constructor=hd;function gd(){}gd.prototype=P,P.aO=(function(e){this.dn.fB(e,this.dp,this.dq)}),new I().i(hd,`com.raquo.laminar.modifiers.KeySetter`,{bZ:1,U:1,c5:1});function _d(e,t){if(this.bW=null,this.dt=null,this.du=null,this.dt=t,fu(this),e===null)throw Ld(new J,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!L().gu(e,document))throw Ld(new J,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.du=e,this.gB()}P=_d.prototype=new F,P.constructor=_d;function vd(){}vd.prototype=P,P.bH=(function(){return this.bW}),P.eI=(function(e){this.bW=e}),P.gB=(function(){return this.bW.er(),Ms().cq(this,this.dt,void 0)}),P.cz=(function(){return this.du}),new I().i(_d,`com.raquo.laminar.nodes.RootNode`,{ca:1,ac:1,ab:1});function yd(e,t,n){this.bX=null,this.dv=null,this.dv=e,pu(this,e,!1)}P=yd.prototype=new hu,P.constructor=yd;function bd(){}bd.prototype=P,P.cw=(function(){return this.dv}),new I().i(yd,`com.raquo.laminar.tags.CustomHtmlTag`,{cb:1,ad:1,a3:1});function xd(){this.bZ=null,this.bY=null,this.c0=!1,this.c1=null,this.c2=!1,this.dD=null,this.dE=!1,this.dB=null,this.dC=!1,this.dz=null,this.dA=!1,this.dH=null,this.dI=!1,this.dx=null,this.dy=!1,this.dF=null,this.dG=!1,this.dJ=null,this.dK=!1,bu(this,`wa-color-picker`)}P=xd.prototype=new Su,P.constructor=xd;function Sd(){}Sd.prototype=P,P.K=(function(){return this.dE||=(this.dD=(Z(),Zl(new Ql,`label`,us().ao)),!0),this.dD}),P.gp=(function(){return this.dC||=(this.dB=(Z(),Zl(new Ql,`hint`,us().ao)),!0),this.dB}),P.bI=(function(){return this.dA||=(this.dz=Dd(),!0),this.dz}),P.cD=(function(){return this.dI||=(this.dH=jd(),!0),this.dH}),P.fP=(function(){return this.dy||=(this.dx=(Z(),Zl(new Ql,`disabled`,us().bS)),!0),this.dx}),P.gP=(function(){return this.dG||=(this.dF=(Z(),Zl(new Ql,`opacity`,us().bS)),!0),this.dF}),P.hg=(function(){return this.dK||=(this.dJ=(Z(),Zl(new Ql,`swatches`,us().ao)),!0),this.dJ}),P.fu=(function(){return sa}),new I().i(xd,`io.github.nguyenyou.webawesome.laminar.ColorPicker$`,{ch:1,cm:1,ck:1});var Cd;function q(){return Cd||=new xd,Cd}function wd(){this.ap=null,this.aY=null,this.dL=null,this.dM=!1,this.dN=null,this.dO=!1,this.dP=null,this.dQ=!1,this.dR=null,this.dS=!1,Zl(this,`format`,new vu)}P=wd.prototype=new $l,P.constructor=wd;function Td(){}Td.prototype=P,P.go=(function(){return this.dM||=(this.dL=Dd().m(`hex`),!0),this.dL}),P.gq=(function(){return this.dO||=(this.dN=Dd().m(`hsl`),!0),this.dN}),P.gr=(function(){return this.dQ||=(this.dP=Dd().m(`hsv`),!0),this.dP}),P.h1=(function(){return this.dS||=(this.dR=Dd().m(`rgb`),!0),this.dR}),new I().i(wd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$`,{ci:1,a2:1,K:1});var Ed;function Dd(){return Ed||=new wd,Ed}function Od(){this.ap=null,this.aY=null,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dY=!1,Zl(this,`size`,new vu)}P=Od.prototype=new $l,P.constructor=Od;function kd(){}kd.prototype=P,P.gx=(function(){return this.dU||=(this.dT=jd().m(`large`),!0),this.dT}),P.gA=(function(){return this.dW||=(this.dV=jd().m(`medium`),!0),this.dV}),P.hc=(function(){return this.dY||=(this.dX=jd().m(`small`),!0),this.dX}),new I().i(Od,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cj:1,a2:1,K:1});var Ad;function jd(){return Ad||=new Od,Ad}function Md(){}P=Md.prototype=new Wu,P.constructor=Md;function Nd(){}Nd.prototype=P,P.g=(function(e){return Z().w}),new I().i(Md,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{cn:1,cR:1,e:1});function Pd(e){if(e.ak.Z)return e.ak.Q().cv()+`[]`;for(var t=e.ak.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Fd(e){this.c3=null,this.ak=e}P=Fd.prototype=new F,P.constructor=Fd;function Id(){}Id.prototype=P,P.t=(function(){return(this.ak.Y?`interface `:this.ak.X?``:`class `)+this.ak.N}),P.cv=(function(){return this.c3===null&&(this.c3=Pd(this)),this.c3}),new I().i(Fd,`java.lang.Class`,{ct:1,a:1,M:1});function Ld(e,t){return Nu(e,t,null,!0,!0),e}var J=class extends Pu{};new I().i(J,`java.lang.Exception`,{L:1,u:1,a:1});function Rd(){this.fn=null,Bd=this,this.fn=ef()}P=Rd.prototype=new Ku,P.constructor=Rd;function zd(){}zd.prototype=P,new I().i(Rd,`scala.Predef$`,{d0:1,cU:1,cV:1});var Bd;function Vd(){return Bd||=new Rd,Bd}function Hd(e,t){return e.bC=t,e}function Ud(){this.bC=null}P=Ud.prototype=new F,P.constructor=Ud;function Wd(){}Wd.prototype=P,P.cu=(function(e){return this.bC.ct(e,Nh())}),P.cs=(function(e){return this.bC.ct(e,Nh())});function Gd(e,t){return new Rp(e).fI(t)}function Kd(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Y().v:new Hp(e,r,i)}function qd(e,t){for(var n=t.n();e.s()&&n.s();)if(!U().J(e.f(),n.f()))return!1;return e.s()===n.s()}function Jd(){this.v=null,Xd=this,this.v=new Mp}P=Jd.prototype=new F,P.constructor=Jd;function Yd(){}Yd.prototype=P,new I().i(Jd,`scala.collection.Iterator$`,{dj:1,Z:1,a:1});var Xd;function Y(){return Xd||=new Jd,Xd}function Zd(){}P=Zd.prototype=new F,P.constructor=Zd;function Qd(){}Qd.prototype=P,new I().i(Zd,`scala.collection.immutable.Map$`,{dy:1,dp:1,a:1});var $d;function ef(){return $d||=new Zd,$d}function tf(e){this.eh=null,this.eh=e}P=tf.prototype=new Yu,P.constructor=tf;function nf(){}nf.prototype=P,P.aA=(function(){return(0,this.eh)()}),new I().i(tf,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dT:1,b0:1,aq:1});function X(e){this.ei=null,this.ei=e}P=X.prototype=new Zu,P.constructor=X;function rf(){}rf.prototype=P,P.g=(function(e){return(0,this.ei)(e)}),new I().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dU:1,b1:1,e:1});var af=new I().i(0,`scala.runtime.Nothing$`,{e0:1,u:1,a:1});function of(){}P=of.prototype=new F,P.constructor=of;function sf(){}sf.prototype=P,P.gd=(function(e){return(t=>e.g(t))}),new I().i(of,`scala.scalajs.js.Any$`,{e5:1,e6:1,e7:1});var cf;function lf(){return cf||=new of,cf}function uf(){}P=uf.prototype=new Yu,P.constructor=uf;function df(){}df.prototype=P;function ff(){}P=ff.prototype=new Zu,P.constructor=ff;function pf(){}pf.prototype=P;function mf(){}P=mf.prototype=new $u,P.constructor=mf;function hf(){}hf.prototype=P;function gf(){}P=gf.prototype=new td,P.constructor=gf;function _f(){}_f.prototype=P;function vf(e,t,n,r){if(this.cG=null,r===null)throw new gp;this.cG=void 0}P=vf.prototype=new F,P.constructor=vf;function yf(){}yf.prototype=P,P.t=(function(){return Ka(this)}),new I().i(vf,`com.raquo.airstream.core.Observer$$anon$8`,{b8:1,b9:1,b5:1,b6:1});function bf(e){if(this.cS=null,this.cT=!1,this.fa=null,e===null)throw new gp;ps(this)}P=bf.prototype=new F,P.constructor=bf;function xf(){}xf.prototype=P,P.hf=(function(){return this.cT||=(this.cS=new gu(`svg`,!1),!0),this.cS}),new I().i(bf,`com.raquo.laminar.api.Laminar$svg$`,{bs:1,bS:1,bB:1,bD:1});function Sf(){this.w=null,wf=this,this.w=new Gh}P=Sf.prototype=new F,P.constructor=Sf;function Cf(){}Cf.prototype=P,new I().i(Sf,`com.raquo.laminar.api.package$`,{bv:1,a9:1,aa:1,a8:1});var wf;function Z(){return wf||=new Sf,wf}function Tf(e,t,n){return e.aG=t,e.aH=n,e}function Ef(){this.aG=null,this.aH=null}P=Ef.prototype=new vs,P.constructor=Ef;function Df(){}Df.prototype=P,P.m=(function(e){return new hd(this,ma(e),new $f(((e,t,n)=>{L().f9(e,t,n)})))});function Of(){}P=Of.prototype=new F,P.constructor=Of;function kf(){}kf.prototype=P;function Af(e,t){return e===t}function jf(e){return e?1231:1237}var Mf=new I().i(0,`java.lang.Boolean`,{cr:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function Nf(e){return e}function Pf(e,t){return t instanceof la&&e===t.c}var Ff=new I().i(0,`java.lang.Character`,{aj:1,a:1,Q:1,M:1},(e=>e instanceof la)),If=class extends J{};function Lf(){this.q=null,this.q=``}P=Lf.prototype=new F,P.constructor=Lf;function Rf(){}Rf.prototype=P,P.fz=(function(e){var t=Mu().gD(e,0,e.a.length);return this.q=``+this.q+t,this}),P.t=(function(){return this.q}),P.j=(function(){return this.q.length}),P.eG=(function(e){return this.q.charCodeAt(e)}),new I().i(Lf,`java.lang.StringBuilder`,{cG:1,a4:1,ah:1,a:1});function zf(){}P=zf.prototype=new F,P.constructor=zf;function Bf(){}Bf.prototype=P,P.t=(function(){return`<function1>`}),P.fC=(function(e){throw new wp(e)}),P.g=(function(e){this.fC(e)}),new I().i(zf,`scala.PartialFunction$$anon$1`,{cZ:1,g:1,e:1,a:1});function Vf(){}P=Vf.prototype=new F,P.constructor=Vf;function Hf(){}Hf.prototype=P,P.n=(function(){return this}),P.bG=(function(e){return this.bp(e,-1)}),P.bp=(function(e,t){return Kd(this,e,t)}),P.t=(function(){return`<iterator>`}),P.ba=(function(e,t,n,r){return hl(this,e,t,n,r)}),P.z=(function(){return-1});function Uf(e,t){return e.bD=t,e}function Wf(){this.bD=null}P=Wf.prototype=new F,P.constructor=Wf;function Gf(){}Gf.prototype=P,P.et=(function(e){return this.bD.cs(e)}),P.eW=(function(e){return this.bD.cu(e)}),P.cu=(function(e){return this.eW(e)}),P.cs=(function(e){return this.et(e)});function Kf(e){return e.aS(0)===0}function qf(e,t){var n=e.z();if(n!==-1)var r=t.z(),i=r!==-1&&n!==r;else var i=!1;return i?!1:qd(e.n(),t)}function Jf(e){this.el=null,this.el=e}P=Jf.prototype=new df,P.constructor=Jf;function Yf(){}Yf.prototype=P,P.aA=(function(){return(0,this.el)()}),new I().i(Jf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ec:1,eb:1,b0:1,aq:1});function Q(e){this.em=null,this.em=e}P=Q.prototype=new pf,P.constructor=Q;function Xf(){}Xf.prototype=P,P.g=(function(e){return(0,this.em)(e)}),new I().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ee:1,ed:1,b1:1,e:1});function Zf(e){this.fq=null,this.fq=e}P=Zf.prototype=new hf,P.constructor=Zf;function Qf(){}Qf.prototype=P,new I().i(Zf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eg:1,ef:1,dV:1,cS:1});function $f(e){this.en=null,this.en=e}P=$f.prototype=new _f,P.constructor=$f;function ep(){}ep.prototype=P,P.fB=(function(e,t,n){return(0,this.en)(e,t,n)}),new I().i($f,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{ei:1,eh:1,dW:1,cT:1});function tp(e){e.bV=new Ro(new Jf((()=>{e.aI.er()})),new Jf((()=>{e.aI.fL()})))}function np(e,t){ip(e,e.by,t)&&ap(e,t)}function rp(e,t){var n=e.by;e.by=t,ip(e,n,t)||ap(e,t)}function ip(e,t,n){var r=!t.i()&&!t.y().bH().E.i(),i=!n.i()&&!n.y().bH().E.i();return r&&!i}function ap(e,t){op(e,t.i()?$():new Om(t.y().bH()))}function op(e,t){if(t.i())e.bV.fG();else{var n=t.y();e.bV.h7(n)}}function sp(){}P=sp.prototype=new kf,P.constructor=sp;function cp(){}cp.prototype=P;var lp=class extends If{constructor(e){super(),Nu(this,e,null,!0,!0)}};new I().i(lp,`java.lang.ArithmeticException`,{cq:1,R:1,L:1,u:1,a:1});var up=new I().i(0,`java.lang.Byte`,{cs:1,S:1,a:1,Q:1,M:1},(e=>Ca(e))),dp=class extends If{constructor(e){super(),Nu(this,e,null,!0,!0)}};new I().i(dp,`java.lang.IllegalArgumentException`,{cw:1,R:1,L:1,u:1,a:1});function fp(e,t){return Nu(e,t,null,!0,!0),e}var pp=class extends If{};new I().i(pp,`java.lang.IndexOutOfBoundsException`,{al:1,R:1,L:1,u:1,a:1});function mp(){}P=mp.prototype=new kf,P.constructor=mp;function hp(){}hp.prototype=P,new I().i(mp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cz:1,ag:1,ae:1,ai:1,af:1});var gp=class extends If{constructor(){super(),Nu(this,null,null,!0,!0)}};new I().i(gp,`java.lang.NullPointerException`,{cA:1,R:1,L:1,u:1,a:1});var _p=new I().i(0,`java.lang.Short`,{cB:1,S:1,a:1,Q:1,M:1},(e=>wa(e))),vp=class extends If{constructor(e){super(),Nu(this,e,null,!0,!0)}};new I().i(vp,`java.lang.UnsupportedOperationException`,{cJ:1,R:1,L:1,u:1,a:1});var yp=class extends If{constructor(e){super(),Nu(this,e,null,!0,!0)}};new I().i(yp,`java.util.NoSuchElementException`,{cN:1,R:1,L:1,u:1,a:1});function bp(e){return e.c8||=(e.c9=e.bB===null?`null`:Cp(e),!0),e.c9}function xp(e){return e.c8?e.c9:bp(e)}function Sp(e){var t=e.bB;return`of class `+da(t)}function Cp(e){try{return e.bB+` (`+Sp(e)+`)`}catch{return`an instance `+Sp(e)}}var wp=class extends If{constructor(e){super(),this.c9=null,this.bB=null,this.c8=!1,this.bB=e,Nu(this,null,null,!0,!0)}bl(){return xp(this)}};new I().i(wp,`scala.MatchError`,{cW:1,R:1,L:1,u:1,a:1});function Tp(){}P=Tp.prototype=new F,P.constructor=Tp;function Ep(){}Ep.prototype=P,P.i=(function(){return this===$()}),P.z=(function(){return this.i()?0:1}),P.n=(function(){return this.i()?Y().v:new Pp(this.y())});function Dp(e){this.b2=0,this.ea=0,this.e9=null,this.e9=e,this.b2=0,this.ea=e.ah()}P=Dp.prototype=new Hf,P.constructor=Dp;function Op(){}Op.prototype=P,P.s=(function(){return this.b2<this.ea}),P.f=(function(){var e=this.e9.ai(this.b2);return this.b2=1+this.b2|0,e}),new I().i(Dp,`scala.Product$$anon$1`,{d1:1,r:1,s:1,b:1,c:1});function kp(e){this.bC=null,Hd(this,e)}P=kp.prototype=new Wd,P.constructor=kp;function Ap(){}Ap.prototype=P,new I().i(kp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{df:1,de:1,Z:1,a:1,a5:1});function jp(e){return ml(e,e.aQ()+`(`,`, `,`)`)}function Mp(){}P=Mp.prototype=new Hf,P.constructor=Mp;function Np(){}Np.prototype=P,P.s=(function(){return!1}),P.gF=(function(){throw new yp(`next on empty iterator`)}),P.z=(function(){return 0}),P.bp=(function(e,t){return this}),P.f=(function(){this.gF()}),new I().i(Mp,`scala.collection.Iterator$$anon$19`,{dk:1,r:1,s:1,b:1,c:1});function Pp(e){this.b4=!1,this.ee=null,this.ee=e,this.b4=!1}P=Pp.prototype=new Hf,P.constructor=Pp;function Fp(){}Fp.prototype=P,P.s=(function(){return!this.b4}),P.f=(function(){return this.b4?Y().v.f():(this.b4=!0,this.ee)}),P.bp=(function(e,t){return this.b4||e>0||t===0?Y().v:this}),new I().i(Pp,`scala.collection.Iterator$$anon$20`,{dl:1,r:1,s:1,b:1,c:1});function Ip(e){for(;;){if(e.B instanceof Rp){var t=e.B;e.B=t.B,e.a5=t.a5,t.N!==null&&(e.M===null&&(e.M=t.M),t.M.b5=e.N,e.N=t.N);continue}return}}function Lp(e){for(;;)if(e.N===null)return e.B=null,e.M=null,!1;else{if(e.B=e.N.gn(),e.M===e.N&&(e.M=e.M.b5),e.N=e.N.b5,Ip(e),e.a5)return!0;if(e.B!==null&&e.B.s())return e.a5=!0,!0}}function Rp(e){this.B=null,this.N=null,this.M=null,this.a5=!1,this.B=e,this.N=null,this.M=null,this.a5=!1}P=Rp.prototype=new Hf,P.constructor=Rp;function zp(){}zp.prototype=P,P.s=(function(){return this.a5?!0:this.B===null?!1:this.B.s()?(this.a5=!0,!0):Lp(this)}),P.f=(function(){return this.s()?(this.a5=!1,this.B.f()):Y().v.f()}),P.fI=(function(e){var t=new gl(e,null);return this.N===null?(this.N=t,this.M=t):(this.M.b5=t,this.M=t),this.B===null&&(this.B=Y().v),this}),new I().i(Rp,`scala.collection.Iterator$ConcatIterator`,{aw:1,r:1,s:1,b:1,c:1});function Bp(e){for(;e.Z>0;)e.a6.s()?(e.a6.f(),e.Z=-1+e.Z|0):e.Z=0}function Vp(e,t){if(e.G<0)return-1;var n=e.G-t|0;return n<0?0:n}function Hp(e,t,n){this.a6=null,this.G=0,this.Z=0,this.a6=e,this.G=n,this.Z=t}P=Hp.prototype=new Hf,P.constructor=Hp;function Up(){}Up.prototype=P,P.z=(function(){var e=this.a6.z();if(e<0)return-1;var t=e-this.Z|0,n=t<0?0:t;if(this.G<0)return n;var r=this.G;return r<n?r:n}),P.s=(function(){return Bp(this),this.G!==0&&this.a6.s()}),P.f=(function(){return Bp(this),this.G>0?(this.G=-1+this.G|0,this.a6.f()):this.G<0?this.a6.f():Y().v.f()}),P.bp=(function(e,t){var n=e>0?e:0;if(t<0)var r=Vp(this,n);else if(t<=n)var r=0;else if(this.G<0)var r=t-n|0;else var i=Vp(this,n),a=t-n|0,r=i<a?i:a;var o=this.Z+n|0;return r===0?Y().v:o<0?(this.Z=2147483647,this.G=0,Gd(this,new tf((()=>new Hp(this.a6,-2147483647+o|0,r))))):(this.Z=o,this.G=r,this)}),new I().i(Hp,`scala.collection.Iterator$SliceIterator`,{dn:1,r:1,s:1,b:1,c:1});function Wp(e,t){if(t<0)throw fp(new pp,``+t);var n=e.fS(t);if(n.i())throw fp(new pp,``+t);return n.a0()}function Gp(e,t){return Vh(t)?Kp(e,e,t):qf(e,t)}function Kp(e,t,n){for(;;)if(t===n)return!0;else if(!t.i()&&!n.i()&&U().J(t.a0(),n.a0())){var r=t.W(),i=n.W();t=r,n=i}else return t.i()&&n.i()}function qp(e){this.b7=null,this.b7=e}P=qp.prototype=new Hf,P.constructor=qp;function Jp(){}Jp.prototype=P,P.s=(function(){return!this.b7.i()}),P.f=(function(){var e=this.b7.a0();return this.b7=this.b7.W(),e}),new I().i(qp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dt:1,r:1,s:1,b:1,c:1});function Yp(){this.bD=null,Uf(this,im())}P=Yp.prototype=new Gf,P.constructor=Yp;function Xp(){}Xp.prototype=P,new I().i(Yp,`scala.collection.mutable.Buffer$`,{dD:1,dq:1,a5:1,Z:1,a:1});var Zp;function Qp(){return Zp||=new Yp,Zp}function $p(e){this.b9=0,this.ej=0,this.ek=null,this.ek=e,this.b9=0,this.ej=e.ah()}P=$p.prototype=new Hf,P.constructor=$p;function em(){}em.prototype=P,P.s=(function(){return this.b9<this.ej}),P.f=(function(){var e=this.ek.ai(this.b9);return this.b9=1+this.b9|0,e}),new I().i($p,`scala.runtime.ScalaRunTime$$anon$1`,{e3:1,r:1,s:1,b:1,c:1});function tm(){}P=tm.prototype=new F,P.constructor=tm;function nm(){}nm.prototype=P,P.cs=(function(e){return this.eX(e)}),P.eX=(function(e){return qu(l_(new u_),e).f7()}),P.cu=(function(e){return this.eX(e)}),new I().i(tm,`scala.scalajs.js.WrappedArray$`,{e9:1,du:1,a5:1,Z:1,a:1});var rm;function im(){return rm||=new tm,rm}var am=class e extends ld{constructor(e,t){super(),this.aC=null,this.aB=0,this.aC=e,this.aB=t,Nu(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aU(){return new Dp(this)}p(){var e=-889275714;return e=G().b(e,xm(`TransactionDepthExceeded`)),e=G().b(e,G().x(this.aC)),e=G().b(e,this.aB),G().k(e,2)}h(t){return this===t?!0:t instanceof e&&this.aB===t.aB?this.aC===t.aC:!1}ah(){return 2}aj(){return`TransactionDepthExceeded`}ai(e){if(e===0)return this.aC;if(e===1)return this.aB;throw fp(new pp,``+e)}t(){return`TransactionDepthExceeded: `+this.aC+`; maxDepth: `+this.aB}};new I().i(am,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a7:1,b3:1,u:1,a:1,d:1,T:1});function om(e){this.aG=null,this.aH=null,this.dc=null,this.dd=!1,Tf(this,e,r_())}P=om.prototype=new Df,P.constructor=om;function sm(){}sm.prototype=P,P.fH=(function(){return this.dd||=(this.dc=this.m(`column`),!0),this.dc}),new I().i(om,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bI:1,Y:1,K:1,W:1,X:1,bM:1});function cm(e){this.aG=null,this.aH=null,this.de=null,this.df=!1,Tf(this,e,r_())}P=cm.prototype=new Df,P.constructor=cm;function lm(){}lm.prototype=P,P.ho=(function(){return this.df||=(this.de=this.m(`wrap`),!0),this.de}),new I().i(cm,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bJ:1,Y:1,K:1,W:1,X:1,bN:1});function um(e,t){this.by=null,this.aI=null,this.bV=null,this.ds=null,this.Q=null,this.ds=e,this.Q=t,this.by=$(),fu(this),tp(this)}P=um.prototype=new F,P.constructor=um;function dm(){}dm.prototype=P,P.aO=(function(e){Ms().cq(e,this,void 0)}),P.bH=(function(){return this.aI}),P.eI=(function(e){this.aI=e}),P.t=(function(){return`ReactiveHtmlElement(`+(this.Q===null?`tag=`+this.ds.cw():this.Q.outerHTML)+`)`}),P.cz=(function(){return this.Q});var fm=new I().i(um,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{c9:1,ac:1,U:1,c6:1,ab:1,c8:1});function pm(e,t){return Object.is(e,t)}function mm(e){return $s().cx(e)}var hm=new I().i(0,`java.lang.Double`,{ak:1,S:1,a:1,Q:1,M:1,V:1},(e=>typeof e==`number`)),gm=new I().i(0,`java.lang.Float`,{cu:1,S:1,a:1,Q:1,M:1,V:1},(e=>Ea(e))),_m=new I().i(0,`java.lang.Integer`,{cx:1,S:1,a:1,Q:1,M:1,V:1},(e=>Ta(e)));function vm(e,t){return t instanceof V&&e.c===t.c&&e.d===t.d}function ym(e){return e.c^e.d}var bm=new I().i(0,`java.lang.Long`,{am:1,S:1,a:1,Q:1,M:1,V:1},(e=>e instanceof V));function xm(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Sm(e,t){return e===t}var Cm=new I().i(0,`java.lang.String`,{cE:1,a:1,Q:1,a4:1,M:1,V:1},(e=>typeof e==`string`)),wm=class extends pp{constructor(){super(),Nu(this,null,null,!0,!0)}};new I().i(wm,`java.lang.StringIndexOutOfBoundsException`,{cH:1,al:1,R:1,L:1,u:1,a:1});function Tm(){}P=Tm.prototype=new Ep,P.constructor=Tm;function Em(){}Em.prototype=P,P.ge=(function(){throw new yp(`None.get`)}),P.aj=(function(){return`None`}),P.ah=(function(){return 0}),P.ai=(function(e){return G().bm(e)}),P.aU=(function(){return new $p(this)}),P.p=(function(){return 2433880}),P.t=(function(){return`None`}),P.y=(function(){this.ge()}),new I().i(Tm,`scala.None$`,{cX:1,ar:1,b:1,T:1,d:1,a:1});var Dm;function $(){return Dm||=new Tm,Dm}function Om(e){this.b3=null,this.b3=e}P=Om.prototype=new Ep,P.constructor=Om;function km(){}km.prototype=P,P.y=(function(){return this.b3}),P.aj=(function(){return`Some`}),P.ah=(function(){return 1}),P.ai=(function(e){return e===0?this.b3:G().bm(e)}),P.aU=(function(){return new $p(this)}),P.p=(function(){return K().f6(this,-889275714,!1)}),P.t=(function(){return W().fv(this)}),P.h=(function(e){return this===e||e instanceof Om&&U().J(this.b3,e.b3)}),new I().i(Om,`scala.Some`,{as:1,ar:1,b:1,T:1,d:1,a:1});function Am(){}P=Am.prototype=new F,P.constructor=Am;function jm(){}jm.prototype=P,P.aQ=(function(){return this.aV()}),P.Y=(function(e){pl(this,e)}),P.ba=(function(e,t,n,r){return hl(this,e,t,n,r)}),P.z=(function(){return-1});function Mm(e,t){return e.F=t,e.e=0,e.A=Wc().aR(e.F),e}function Nm(){this.F=null,this.e=0,this.A=0}P=Nm.prototype=new Hf,P.constructor=Nm;function Pm(){}Pm.prototype=P,P.z=(function(){return this.A-this.e|0}),P.s=(function(){return this.e<this.A}),P.f=(function(){this.e>=Wc().aR(this.F)&&Y().v.f();var e=W().aP(this.F,this.e);return this.e=1+this.e|0,e}),P.bG=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.A;else var r=this.A,n=r<t?r:t;this.e=n}return this}),new I().i(Nm,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Fm(e,t){return t<0?0:t>e.R?e.R:t}function Im(e){this.ed=null,this.a4=0,this.R=0,this.ed=e,this.a4=0,this.R=e.j()}P=Im.prototype=new Hf,P.constructor=Im;function Lm(){}Lm.prototype=P,P.z=(function(){return this.R}),P.s=(function(){return this.R>0}),P.f=(function(){if(this.R>0){var e=this.ed.o(this.a4);return this.a4=1+this.a4|0,this.R=-1+this.R|0,e}else return Y().v.f()}),P.bG=(function(e){if(e>0){this.a4=this.a4+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),P.bp=(function(e,t){var n=Fm(this,e),r=Fm(this,t)-n|0;return this.R=r<0?0:r,this.a4=this.a4+n|0,this}),new I().i(Im,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{di:1,r:1,s:1,b:1,c:1,a:1});function Rm(e){return e.ck||=(e.cl=new Sg(new ja(0)),!0),e.cl}function zm(e){return e.ck?e.cl:Rm(e)}function Bm(){this.cl=null,this.fo=null,this.ck=!1,Hm=this,this.fo=new kp(this)}P=Bm.prototype=new F,P.constructor=Bm;function Vm(){}Vm.prototype=P,P.gb=(function(e,t){return e instanceof ig?e:this.hm(Ru().eV(e,t))}),P.hm=(function(e){if(e===null)return null;if(e instanceof ja)return new Sg(e);if(e instanceof La)return new vg(e);if(e instanceof Ba)return new mg(e);if(e instanceof Ra)return new bg(e);if(e instanceof za)return new gg(e);if(e instanceof Pa)return new fg(e);if(e instanceof Fa)return new ug(e);if(e instanceof Ia)return new wg(e);if(e instanceof Na)return new cg(e);if(Rc(e,1))return new Eg(e);throw new wp(e)}),P.ct=(function(e,t){return this.gb(e,t)}),new I().i(Bm,`scala.collection.immutable.ArraySeq$`,{dx:1,ay:1,au:1,at:1,av:1,a:1});var Hm;function Um(){return Hm||=new Bm,Hm}function Wm(){this.fp=null,this.eg=null,Km=this,this.fp=new kp(this),this.eg=new Kg(new ja(0))}P=Wm.prototype=new F,P.constructor=Wm;function Gm(){}Gm.prototype=P,P.gc=(function(e,t){return this.gz(Ru().eV(e,t))}),P.gz=(function(e){if(e===null)return null;if(e instanceof ja)return new Kg(e);if(e instanceof La)return new Hg(e);if(e instanceof Ba)return new Rg(e);if(e instanceof Ra)return new Wg(e);if(e instanceof za)return new Bg(e);if(e instanceof Pa)return new Ig(e);if(e instanceof Fa)return new Pg(e);if(e instanceof Ia)return new Jg(e);if(e instanceof Na)return new Mg(e);if(Rc(e,1))return new Xg(e);throw new wp(e)}),P.ct=(function(e,t){return this.gc(e,t)}),new I().i(Wm,`scala.collection.mutable.ArraySeq$`,{dB:1,ay:1,au:1,at:1,av:1,a:1});var Km;function qm(){return Km||=new Wm,Km}function Jm(e){this.aG=null,this.aH=null,this.da=null,this.db=!1,Tf(this,e,r_())}P=Jm.prototype=new Df,P.constructor=Jm;function Ym(){}Ym.prototype=P,P.eU=(function(){return this.db||=(this.da=this.m(`flex`),!0),this.da}),new I().i(Jm,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bH:1,Y:1,K:1,W:1,X:1,bO:1,bL:1});function Xm(e){this.aG=null,this.aH=null,this.dg=null,this.dh=!1,Tf(this,e,r_())}P=Xm.prototype=new Df,P.constructor=Xm;function Zm(){}Zm.prototype=P,P.cy=(function(){return this.dh||=(this.dg=Jl(this),!0),this.dg}),new I().i(Xm,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bK:1,Y:1,K:1,W:1,X:1,bP:1,bQ:1});function Qm(){}P=Qm.prototype=new cp,P.constructor=Qm;function $m(){}$m.prototype=P;function eh(e){this.F=null,this.e=0,this.A=0,this.ca=null,this.ca=e,Mm(this,e)}P=eh.prototype=new Pm,P.constructor=eh;function th(){}th.prototype=P,P.gG=(function(){this.e>=this.ca.a.length&&Y().v.f();var e=this.ca.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gG()}),new I().i(eh,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{d5:1,N:1,r:1,s:1,b:1,c:1,a:1});function nh(e){this.F=null,this.e=0,this.A=0,this.cb=null,this.cb=e,Mm(this,e)}P=nh.prototype=new Pm,P.constructor=nh;function rh(){}rh.prototype=P,P.gH=(function(){this.e>=this.cb.a.length&&Y().v.f();var e=this.cb.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return Da(this.gH())}),new I().i(nh,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{d6:1,N:1,r:1,s:1,b:1,c:1,a:1});function ih(e){this.F=null,this.e=0,this.A=0,this.cc=null,this.cc=e,Mm(this,e)}P=ih.prototype=new Pm,P.constructor=ih;function ah(){}ah.prototype=P,P.gI=(function(){this.e>=this.cc.a.length&&Y().v.f();var e=this.cc.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gI()}),new I().i(ih,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{d7:1,N:1,r:1,s:1,b:1,c:1,a:1});function oh(e){this.F=null,this.e=0,this.A=0,this.cd=null,this.cd=e,Mm(this,e)}P=oh.prototype=new Pm,P.constructor=oh;function sh(){}sh.prototype=P,P.gJ=(function(){this.e>=this.cd.a.length&&Y().v.f();var e=this.cd.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gJ()}),new I().i(oh,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{d8:1,N:1,r:1,s:1,b:1,c:1,a:1});function ch(e){this.F=null,this.e=0,this.A=0,this.ce=null,this.ce=e,Mm(this,e)}P=ch.prototype=new Pm,P.constructor=ch;function lh(){}lh.prototype=P,P.gK=(function(){this.e>=this.ce.a.length&&Y().v.f();var e=this.ce.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gK()}),new I().i(ch,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{d9:1,N:1,r:1,s:1,b:1,c:1,a:1});function uh(e){this.F=null,this.e=0,this.A=0,this.cf=null,this.cf=e,Mm(this,e)}P=uh.prototype=new Pm,P.constructor=uh;function dh(){}dh.prototype=P,P.gL=(function(){this.e>=this.cf.a.length&&Y().v.f();var e=this.cf.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new V(t,n)}),P.f=(function(){return this.gL()}),new I().i(uh,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{da:1,N:1,r:1,s:1,b:1,c:1,a:1});function fh(e){this.F=null,this.e=0,this.A=0,this.cg=null,this.cg=e,Mm(this,e)}P=fh.prototype=new Pm,P.constructor=fh;function ph(){}ph.prototype=P,P.gM=(function(){this.e>=this.cg.a.length&&Y().v.f();var e=this.cg.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gM()}),new I().i(fh,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{db:1,N:1,r:1,s:1,b:1,c:1,a:1});function mh(e){this.F=null,this.e=0,this.A=0,this.ec=null,this.ec=e,Mm(this,e)}P=mh.prototype=new Pm,P.constructor=mh;function hh(){}hh.prototype=P,P.gN=(function(){this.e>=this.ec.a.length&&Y().v.f(),this.e=1+this.e|0}),P.f=(function(){this.gN()}),new I().i(mh,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dc:1,N:1,r:1,s:1,b:1,c:1,a:1});function gh(e){this.F=null,this.e=0,this.A=0,this.ch=null,this.ch=e,Mm(this,e)}P=gh.prototype=new Pm,P.constructor=gh;function _h(){}_h.prototype=P,P.gO=(function(){this.e>=this.ch.a.length&&Y().v.f();var e=this.ch.a[this.e];return this.e=1+this.e|0,e}),P.f=(function(){return this.gO()}),new I().i(gh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dd:1,N:1,r:1,s:1,b:1,c:1,a:1});function vh(e){return e.aQ()+`(<not computed>)`}function yh(){}P=yh.prototype=new F,P.constructor=yh;function bh(){}bh.prototype=P;var xh=class e extends If{constructor(e){super(),this.S=null,this.S=e,Nu(this,null,null,!0,!0)}bl(){return ma(this.S)}aj(){return`JavaScriptException`}ah(){return 1}ai(e){return e===0?this.S:G().bm(e)}aU(){return new $p(this)}p(){return K().f6(this,-889275714,!1)}h(t){return this===t||t instanceof e&&U().J(this.S,t.S)}};new I().i(xh,`scala.scalajs.js.JavaScriptException`,{b2:1,R:1,L:1,u:1,a:1,T:1,d:1});function Sh(e,t){typeof console<`u`&&(e.e0&&console.error?console.error(t):console.log(t))}function Ch(e){this.e0=!1,this.b0=null,this.e0=e,new mp,this.b0=``}P=Ch.prototype=new $m,P.constructor=Ch;function wh(){}wh.prototype=P,P.gv=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b0=``+this.b0+t,t=``;else{var r=this.b0,i=t;Sh(this,``+r+i.substring(0,n)),this.b0=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new I().i(Ch,`java.lang.JSConsoleBasedPrintStream`,{cy:1,cp:1,co:1,ag:1,ae:1,ai:1,af:1,ah:1});function Th(e,t,n){for(;;)if(t<=0||n.i())return n;else{var r=-1+t|0,i=n.W();t=r,n=i}}function Eh(){this.cm=null}P=Eh.prototype=new bh,P.constructor=Eh;function Dh(){}Dh.prototype=P,P.t=(function(){return this.cm}),P.h=(function(e){return this===e}),P.p=(function(){return Sa(this)});function Oh(){}P=Oh.prototype=new jm,P.constructor=Oh;function kh(){}kh.prototype=P,P.t=(function(){return vh(this)});function Ah(){this.cm=null,this.cm=`Any`}P=Ah.prototype=new Dh,P.constructor=Ah;function jh(){}jh.prototype=P,P.h2=(function(){return Va.l()}),P.gE=(function(e){return new ja(e)}),new I().i(Ah,`scala.reflect.ManifestFactory$AnyManifest$`,{dP:1,dR:1,dQ:1,dO:1,dN:1,dM:1,dS:1,a:1,d:1});var Mh;function Nh(){return Mh||=new Ah,Mh}function Ph(e,t){return e===t?!0:Fh(t)&&t.eF(e)?e.cB(t):!1}function Fh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Ih(){}P=Ih.prototype=new jm,P.constructor=Ih;function Lh(){}Lh.prototype=P,P.eF=(function(e){return!0}),P.h=(function(e){return Ph(this,e)}),P.p=(function(){return K().h3(this)}),P.t=(function(){return jp(this)}),P.i=(function(){return Kf(this)}),P.cB=(function(e){return qf(this,e)});function Rh(){}P=Rh.prototype=new kh,P.constructor=Rh;function zh(){}zh.prototype=P;function Bh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Vh(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function Hh(e,t){return e.b6=t,e}function Uh(){this.b6=null}P=Uh.prototype=new zh,P.constructor=Uh;function Wh(){}Wh.prototype=P,P.o=(function(e){return this.b6.o(e)}),P.j=(function(){return this.b6.j()}),P.i=(function(){return this.b6.i()});function Gh(){this.cW=null,this.cX=!1,this.d8=null,this.d9=!1,this.cU=null,this.cV=!1,this.cY=null,this.cZ=!1,this.d0=null,this.d1=!1,this.d2=null,this.d3=!1,this.d4=null,this.d5=!1,this.fc=null,this.fb=null,this.d6=null,this.d7=!1,ds(this),as(this),rs(this),is(this)}P=Gh.prototype=new F,P.constructor=Gh;function Kh(){}Kh.prototype=P,P.eK=(function(){return this.cX||=(this.cW=pu(new mu,`div`,!1),!0),this.cW}),P.aX=(function(){return this.d9||=(this.d8=new eu(`value`,us().ao),!0),this.d8}),P.eJ=(function(){return this.cV||=(this.cU=new Jm(`display`),!0),this.cU}),P.g7=(function(){return this.cZ||=(this.cY=new om(`flex-direction`),!0),this.cY}),P.g8=(function(){return this.d1||=(this.d0=new cm(`flex-wrap`),!0),this.d0}),P.eY=(function(){return this.d3||=(this.d2=new Xm(`gap`),!0),this.d2}),P.gT=(function(){return this.d5||=(this.d4=new Xm(`padding`),!0),this.d4}),P.he=(function(){return this.d7||=(this.d6=new bf(this),!0),this.d6}),new I().i(Gh,`com.raquo.laminar.api.package$$anon$1`,{bw:1,bR:1,bA:1,bF:1,bE:1,bG:1,bC:1,bu:1,bq:1,bt:1,a9:1,aa:1,a8:1,br:1});function qh(e){this.b6=null,Hh(this,e)}P=qh.prototype=new Wh,P.constructor=qh;function Jh(){}Jh.prototype=P,P.n=(function(){return new Im(this)}),P.aV=(function(){return`IndexedSeqView`}),P.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),P.z=(function(){return this.j()}),new I().i(qh,`scala.collection.IndexedSeqView$Id`,{dh:1,ds:1,d2:1,d3:1,h:1,i:1,b:1,k:1,c:1,j:1,dv:1,a:1,dr:1,l:1,dg:1,o:1});function Yh(){}P=Yh.prototype=new Lh,P.constructor=Yh;function Xh(){}Xh.prototype=P;function Zh(e,t){return!$h(t)||e.j()===t.j()}function Qh(e,t){if($h(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.eu(),o=t.eu(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=U().J(e.o(i),t.o(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().bG(i),m=t.n().bG(i);r&&p.s();)r=U().J(p.f(),m.f())}return r}else return qf(e,t)}function $h(e){return!!(e&&e.$classData&&e.$classData.n.w)}function eg(){}P=eg.prototype=new Lh,P.constructor=eg;function tg(){}tg.prototype=P;function ng(){}P=ng.prototype=new tg,P.constructor=ng;function rg(){}rg.prototype=P,P.es=(function(e){return qu(this,e)});function ig(){}P=ig.prototype=new Xh,P.constructor=ig;function ag(){}ag.prototype=P,P.eF=(function(e){return Zh(this,e)}),P.cB=(function(e){return Qh(this,e)}),P.aV=(function(){return`IndexedSeq`}),P.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),P.z=(function(){return this.j()}),P.aQ=(function(){return`ArraySeq`}),P.eu=(function(){return 2147483647});function og(){}P=og.prototype=new tg,P.constructor=og;function sg(){}sg.prototype=P,P.aV=(function(){return`IndexedSeq`}),P.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),P.z=(function(){return this.j()}),P.aQ=(function(){return`ArraySeq`}),P.h=(function(e){return e instanceof og&&Wc().aR(this.T())!==Wc().aR(e.T())?!1:Ph(this,e)});function cg(e){this.aq=null,this.aq=e}P=cg.prototype=new ag,P.constructor=cg;function lg(){}lg.prototype=P,P.j=(function(){return this.aq.a.length}),P.p=(function(){var e=K();return e.eE(this.aq,e.u)}),P.h=(function(e){return e instanceof cg?B().eS(this.aq,e.aq):Ph(this,e)}),P.n=(function(){return new gh(this.aq)}),P.bj=(function(e){return this.aq.a[e]}),P.g=(function(e){return this.bj(e|0)}),P.o=(function(e){return this.bj(e)}),new I().i(cg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aB:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function ug(e){this.ar=null,this.ar=e}P=ug.prototype=new ag,P.constructor=ug;function dg(){}dg.prototype=P,P.j=(function(){return this.ar.a.length}),P.bb=(function(e){return this.ar.a[e]}),P.p=(function(){var e=K();return e.ew(this.ar,e.u)}),P.h=(function(e){return e instanceof ug?B().eL(this.ar,e.ar):Ph(this,e)}),P.n=(function(){return new eh(this.ar)}),P.g=(function(e){return this.bb(e|0)}),P.o=(function(e){return this.bb(e)}),new I().i(ug,`scala.collection.immutable.ArraySeq$ofByte`,{aC:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function fg(e){this.a7=null,this.a7=e}P=fg.prototype=new ag,P.constructor=fg;function pg(){}pg.prototype=P,P.j=(function(){return this.a7.a.length}),P.bc=(function(e){return this.a7.a[e]}),P.p=(function(){var e=K();return e.ex(this.a7,e.u)}),P.h=(function(e){return e instanceof fg?B().eM(this.a7,e.a7):Ph(this,e)}),P.n=(function(){return new nh(this.a7)}),P.ba=(function(e,t,n,r){return new Ig(this.a7).ba(e,t,n,r)}),P.g=(function(e){return Da(this.bc(e|0))}),P.o=(function(e){return Da(this.bc(e))}),new I().i(fg,`scala.collection.immutable.ArraySeq$ofChar`,{aD:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function mg(e){this.as=null,this.as=e}P=mg.prototype=new ag,P.constructor=mg;function hg(){}hg.prototype=P,P.j=(function(){return this.as.a.length}),P.p=(function(){var e=K();return e.ey(this.as,e.u)}),P.h=(function(e){return e instanceof mg?B().eN(this.as,e.as):Ph(this,e)}),P.n=(function(){return new ih(this.as)}),P.be=(function(e){return this.as.a[e]}),P.g=(function(e){return this.be(e|0)}),P.o=(function(e){return this.be(e)}),new I().i(mg,`scala.collection.immutable.ArraySeq$ofDouble`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function gg(e){this.at=null,this.at=e}P=gg.prototype=new ag,P.constructor=gg;function _g(){}_g.prototype=P,P.j=(function(){return this.at.a.length}),P.p=(function(){var e=K();return e.ez(this.at,e.u)}),P.h=(function(e){return e instanceof gg?B().eO(this.at,e.at):Ph(this,e)}),P.n=(function(){return new oh(this.at)}),P.bf=(function(e){return this.at.a[e]}),P.g=(function(e){return this.bf(e|0)}),P.o=(function(e){return this.bf(e)}),new I().i(gg,`scala.collection.immutable.ArraySeq$ofFloat`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function vg(e){this.au=null,this.au=e}P=vg.prototype=new ag,P.constructor=vg;function yg(){}yg.prototype=P,P.j=(function(){return this.au.a.length}),P.p=(function(){var e=K();return e.eA(this.au,e.u)}),P.h=(function(e){return e instanceof vg?B().eP(this.au,e.au):Ph(this,e)}),P.n=(function(){return new ch(this.au)}),P.bg=(function(e){return this.au.a[e]}),P.g=(function(e){return this.bg(e|0)}),P.o=(function(e){return this.bg(e)}),new I().i(vg,`scala.collection.immutable.ArraySeq$ofInt`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function bg(e){this.av=null,this.av=e}P=bg.prototype=new ag,P.constructor=bg;function xg(){}xg.prototype=P,P.j=(function(){return this.av.a.length}),P.p=(function(){var e=K();return e.eB(this.av,e.u)}),P.h=(function(e){return e instanceof bg?B().eQ(this.av,e.av):Ph(this,e)}),P.n=(function(){return new uh(this.av)}),P.bh=(function(e){return this.av.a[e]}),P.g=(function(e){return this.bh(e|0)}),P.o=(function(e){return this.bh(e)}),new I().i(bg,`scala.collection.immutable.ArraySeq$ofLong`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Sg(e){this.aw=null,this.aw=e}P=Sg.prototype=new ag,P.constructor=Sg;function Cg(){}Cg.prototype=P,P.j=(function(){return this.aw.a.length}),P.o=(function(e){return this.aw.a[e]}),P.p=(function(){var e=K();return e.ev(this.aw,e.u)}),P.h=(function(e){return e instanceof Sg?Ru().eT(this.aw,e.aw):Ph(this,e)}),P.n=(function(){return Mm(new Nm,this.aw)}),P.g=(function(e){return this.o(e|0)}),new I().i(Sg,`scala.collection.immutable.ArraySeq$ofRef`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function wg(e){this.ax=null,this.ax=e}P=wg.prototype=new ag,P.constructor=wg;function Tg(){}Tg.prototype=P,P.j=(function(){return this.ax.a.length}),P.bd=(function(e){return this.ax.a[e]}),P.p=(function(){var e=K();return e.eC(this.ax,e.u)}),P.h=(function(e){return e instanceof wg?B().eR(this.ax,e.ax):Ph(this,e)}),P.n=(function(){return new fh(this.ax)}),P.g=(function(e){return this.bd(e|0)}),P.o=(function(e){return this.bd(e)}),new I().i(wg,`scala.collection.immutable.ArraySeq$ofShort`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Eg(e){this.aN=null,this.aN=e}P=Eg.prototype=new ag,P.constructor=Eg;function Dg(){}Dg.prototype=P,P.j=(function(){return this.aN.a.length}),P.p=(function(){var e=K();return e.eD(this.aN,e.u)}),P.h=(function(e){return e instanceof Eg?this.aN.a.length===e.aN.a.length:Ph(this,e)}),P.n=(function(){return new mh(this.aN)}),P.bi=(function(e){}),P.g=(function(e){this.bi(e|0)}),P.o=(function(e){this.bi(e)}),new I().i(Eg,`scala.collection.immutable.ArraySeq$ofUnit`,{aK:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Og(e,t,n,r){for(;;)if(t===r)return n.i()?0:1;else if(n.i())return-1;else{var i=1+t|0,a=n.W();t=i,n=a}}function kg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.i(),i=n.i();if(!(r||i)&&U().J(t.a0(),n.a0())){var a=t.W(),o=n.W();t=a,n=o}else return r&&i}}function Ag(){}P=Ag.prototype=new Xh,P.constructor=Ag;function jg(){}jg.prototype=P,P.n=(function(){return new qp(this)}),P.aV=(function(){return`LinearSeq`}),P.o=(function(e){return Wp(this,e)}),P.cB=(function(e){return Gp(this,e)}),P.i=(function(){return this===r_()}),P.Y=(function(e){for(var t=this;!t.i();)e.g(t.a0()),t=t.W()}),P.j=(function(){for(var e=this,t=0;!e.i();)t=1+t|0,e=e.W();return t}),P.aS=(function(e){return e<0?1:Og(this,0,this,e)}),P.aQ=(function(){return`List`}),P.h=(function(e){return e instanceof Ag?kg(this,this,e):Ph(this,e)}),P.g=(function(e){return Wp(this,e|0)}),P.fS=(function(e){return Th(this,e,this)});function Mg(e){this.a8=null,this.a8=e}P=Mg.prototype=new sg,P.constructor=Mg;function Ng(){}Ng.prototype=P,P.j=(function(){return this.a8.a.length}),P.p=(function(){var e=K();return e.eE(this.a8,e.u)}),P.h=(function(e){return e instanceof Mg?B().eS(this.a8,e.a8):og.prototype.h.call(this,e)}),P.n=(function(){return new gh(this.a8)}),P.bj=(function(e){return this.a8.a[e]}),P.g=(function(e){return this.bj(e|0)}),P.o=(function(e){return this.bj(e)}),P.T=(function(){return this.a8}),new I().i(Mg,`scala.collection.mutable.ArraySeq$ofBoolean`,{aN:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Pg(e){this.a9=null,this.a9=e}P=Pg.prototype=new sg,P.constructor=Pg;function Fg(){}Fg.prototype=P,P.j=(function(){return this.a9.a.length}),P.bb=(function(e){return this.a9.a[e]}),P.p=(function(){var e=K();return e.ew(this.a9,e.u)}),P.h=(function(e){return e instanceof Pg?B().eL(this.a9,e.a9):og.prototype.h.call(this,e)}),P.n=(function(){return new eh(this.a9)}),P.g=(function(e){return this.bb(e|0)}),P.o=(function(e){return this.bb(e)}),P.T=(function(){return this.a9}),new I().i(Pg,`scala.collection.mutable.ArraySeq$ofByte`,{aO:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ig(e){this.O=null,this.O=e}P=Ig.prototype=new sg,P.constructor=Ig;function Lg(){}Lg.prototype=P,P.j=(function(){return this.O.a.length}),P.bc=(function(e){return this.O.a[e]}),P.p=(function(){var e=K();return e.ex(this.O,e.u)}),P.h=(function(e){return e instanceof Ig?B().eM(this.O,e.O):og.prototype.h.call(this,e)}),P.n=(function(){return new nh(this.O)}),P.ba=(function(e,t,n,r){var i=e.H;t.length!==0&&(i.q=``+i.q+t);var a=this.O.a.length;if(a!==0)if(n===``)i.fz(this.O);else{i.j();var o=this.O.a[0],s=``+va(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.O.a[c],u=``+va(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),P.g=(function(e){return Da(this.bc(e|0))}),P.o=(function(e){return Da(this.bc(e))}),P.T=(function(){return this.O}),new I().i(Ig,`scala.collection.mutable.ArraySeq$ofChar`,{aP:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Rg(e){this.aa=null,this.aa=e}P=Rg.prototype=new sg,P.constructor=Rg;function zg(){}zg.prototype=P,P.j=(function(){return this.aa.a.length}),P.p=(function(){var e=K();return e.ey(this.aa,e.u)}),P.h=(function(e){return e instanceof Rg?B().eN(this.aa,e.aa):og.prototype.h.call(this,e)}),P.n=(function(){return new ih(this.aa)}),P.be=(function(e){return this.aa.a[e]}),P.g=(function(e){return this.be(e|0)}),P.o=(function(e){return this.be(e)}),P.T=(function(){return this.aa}),new I().i(Rg,`scala.collection.mutable.ArraySeq$ofDouble`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Bg(e){this.ab=null,this.ab=e}P=Bg.prototype=new sg,P.constructor=Bg;function Vg(){}Vg.prototype=P,P.j=(function(){return this.ab.a.length}),P.p=(function(){var e=K();return e.ez(this.ab,e.u)}),P.h=(function(e){return e instanceof Bg?B().eO(this.ab,e.ab):og.prototype.h.call(this,e)}),P.n=(function(){return new oh(this.ab)}),P.bf=(function(e){return this.ab.a[e]}),P.g=(function(e){return this.bf(e|0)}),P.o=(function(e){return this.bf(e)}),P.T=(function(){return this.ab}),new I().i(Bg,`scala.collection.mutable.ArraySeq$ofFloat`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Hg(e){this.ac=null,this.ac=e}P=Hg.prototype=new sg,P.constructor=Hg;function Ug(){}Ug.prototype=P,P.j=(function(){return this.ac.a.length}),P.p=(function(){var e=K();return e.eA(this.ac,e.u)}),P.h=(function(e){return e instanceof Hg?B().eP(this.ac,e.ac):og.prototype.h.call(this,e)}),P.n=(function(){return new ch(this.ac)}),P.bg=(function(e){return this.ac.a[e]}),P.g=(function(e){return this.bg(e|0)}),P.o=(function(e){return this.bg(e)}),P.T=(function(){return this.ac}),new I().i(Hg,`scala.collection.mutable.ArraySeq$ofInt`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Wg(e){this.ad=null,this.ad=e}P=Wg.prototype=new sg,P.constructor=Wg;function Gg(){}Gg.prototype=P,P.j=(function(){return this.ad.a.length}),P.p=(function(){var e=K();return e.eB(this.ad,e.u)}),P.h=(function(e){return e instanceof Wg?B().eQ(this.ad,e.ad):og.prototype.h.call(this,e)}),P.n=(function(){return new uh(this.ad)}),P.bh=(function(e){return this.ad.a[e]}),P.g=(function(e){return this.bh(e|0)}),P.o=(function(e){return this.bh(e)}),P.T=(function(){return this.ad}),new I().i(Wg,`scala.collection.mutable.ArraySeq$ofLong`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Kg(e){this.ae=null,this.ae=e}P=Kg.prototype=new sg,P.constructor=Kg;function qg(){}qg.prototype=P,P.j=(function(){return this.ae.a.length}),P.o=(function(e){return this.ae.a[e]}),P.p=(function(){var e=K();return e.ev(this.ae,e.u)}),P.h=(function(e){return e instanceof Kg?Ru().eT(this.ae,e.ae):og.prototype.h.call(this,e)}),P.n=(function(){return Mm(new Nm,this.ae)}),P.g=(function(e){return this.o(e|0)}),P.T=(function(){return this.ae}),new I().i(Kg,`scala.collection.mutable.ArraySeq$ofRef`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Jg(e){this.af=null,this.af=e}P=Jg.prototype=new sg,P.constructor=Jg;function Yg(){}Yg.prototype=P,P.j=(function(){return this.af.a.length}),P.bd=(function(e){return this.af.a[e]}),P.p=(function(){var e=K();return e.eC(this.af,e.u)}),P.h=(function(e){return e instanceof Jg?B().eR(this.af,e.af):og.prototype.h.call(this,e)}),P.n=(function(){return new fh(this.af)}),P.g=(function(e){return this.bd(e|0)}),P.o=(function(e){return this.bd(e)}),P.T=(function(){return this.af}),new I().i(Jg,`scala.collection.mutable.ArraySeq$ofShort`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Xg(e){this.ay=null,this.ay=e}P=Xg.prototype=new sg,P.constructor=Xg;function Zg(){}Zg.prototype=P,P.j=(function(){return this.ay.a.length}),P.p=(function(){var e=K();return e.eD(this.ay,e.u)}),P.h=(function(e){return e instanceof Xg?this.ay.a.length===e.ay.a.length:og.prototype.h.call(this,e)}),P.n=(function(){return new mh(this.ay)}),P.bi=(function(e){}),P.g=(function(e){this.bi(e|0)}),P.o=(function(e){this.bi(e)}),P.T=(function(){return this.ay}),new I().i(Xg,`scala.collection.mutable.ArraySeq$ofUnit`,{aW:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Qg(e,t){this.ci=null,this.cj=null,this.ci=e,this.cj=t}P=Qg.prototype=new jg,P.constructor=Qg;function $g(){}$g.prototype=P,P.a0=(function(){return this.ci}),P.aj=(function(){return`::`}),P.ah=(function(){return 2}),P.ai=(function(e){switch(e){case 0:return this.ci;case 1:return this.cj;default:return G().bm(e)}}),P.aU=(function(){return new $p(this)}),P.W=(function(){return this.cj}),new I().i(Qg,`scala.collection.immutable.$colon$colon`,{dw:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});function e_(){}P=e_.prototype=new jg,P.constructor=e_;function t_(){}t_.prototype=P,P.gm=(function(){throw new yp(`head of empty list`)}),P.hi=(function(){throw new vp(`tail of empty list`)}),P.z=(function(){return 0}),P.n=(function(){return Y().v}),P.aj=(function(){return`Nil`}),P.ah=(function(){return 0}),P.ai=(function(e){return G().bm(e)}),P.aU=(function(){return new $p(this)}),P.W=(function(){this.hi()}),P.a0=(function(){this.gm()}),new I().i(e_,`scala.collection.immutable.Nil$`,{dz:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});var n_;function r_(){return n_||=new e_,n_}function i_(e,t){return e.H=t,e}function a_(e){return i_(e,new Lf),e}function o_(){this.H=null}P=o_.prototype=new tg,P.constructor=o_;function s_(){}s_.prototype=P,P.aV=(function(){return`IndexedSeq`}),P.n=(function(){return new Im(new qh(this))}),P.aS=(function(e){var t=this.H.j();return t===e?0:t<e?-1:1}),P.es=(function(e){return qu(this,e)}),P.j=(function(){return this.H.j()}),P.z=(function(){return this.H.j()}),P.fw=(function(e){var t=this.H,n=``+va(e);return t.q+=n,this}),P.t=(function(){return this.H.q}),P.i=(function(){return this.H.j()===0}),P.f7=(function(){return this.H.q}),P.cp=(function(e){return this.fw(Oa(e))}),P.g=(function(e){var t=e|0;return Da(this.H.eG(t))}),P.o=(function(e){return Da(this.H.eG(e))}),new I().i(o_,`scala.collection.mutable.StringBuilder`,{dH:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dF:1,aX:1,aZ:1,aY:1,D:1,n:1,o:1,E:1,a4:1,a:1});function c_(e,t){return e.az=t,e}function l_(e){return c_(e,[]),e}function u_(){this.az=null}P=u_.prototype=new rg,P.constructor=u_;function d_(){}d_.prototype=P,P.aV=(function(){return`IndexedSeq`}),P.n=(function(){return new Im(new qh(this))}),P.aS=(function(e){var t=this.az.length|0;return t===e?0:t<e?-1:1}),P.o=(function(e){return this.az[e]}),P.j=(function(){return this.az.length|0}),P.z=(function(){return this.az.length|0}),P.aQ=(function(){return`WrappedArray`}),P.f7=(function(){return this}),P.cp=(function(e){return this.az.push(e),this}),P.g=(function(e){var t=e|0;return this.az[t]}),new I().i(u_,`scala.scalajs.js.WrappedArray`,{e8:1,dA:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dC:1,aZ:1,aY:1,dG:1,q:1,p:1,D:1,n:1,o:1,E:1,dE:1,aX:1,a:1}),ca=new V(0,0),Wa.z=ca,Ys(new(Cm.r()).C([]));