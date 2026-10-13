var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function n(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.pageXOffset,o=r.top+i.pageYOffset,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}typeof window<`u`&&`ontouchstart`in window;
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:h,getOwnPropertySymbols:g,getPrototypeOf:_}=Object,v=globalThis,y=v.trustedTypes,ee=y?y.emptyScript:``,te=v.reactiveElementPolyfillSupport,ne=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?ee:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},re=(e,t)=>!f(e,t),ie={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??=Symbol(`metadata`),v.litPropertyMetadata??=new WeakMap;var ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(ne(`elementProperties`)))return;let e=_(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne(`properties`))){let e=this.properties,t=[...h(e),...g(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?b:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?b:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??re)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ae.elementStyles=[],ae.shadowRootOptions={mode:`open`},ae[ne(`elementProperties`)]=new Map,ae[ne(`finalized`)]=new Map,te?.({ReactiveElement:ae}),(v.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const oe=globalThis,se=oe.trustedTypes,ce=se?se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,x=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+x,de=`<${ue}>`,fe=document,pe=()=>fe.createComment(``),me=e=>e===null||typeof e!=`object`&&typeof e!=`function`,he=Array.isArray,ge=e=>he(e)||typeof e?.[Symbol.iterator]==`function`,_e=`[ 	
\f\r]`,ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,be=/>/g,xe=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Te=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),Ee=new WeakMap,De=fe.createTreeWalker(fe,129);function Oe(e,t){if(!he(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}const ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ve;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ve?c[1]===`!--`?o=ye:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xe):(we.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xe):o=be:o===xe?c[0]===`>`?(o=i??ve,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xe:c[3]===`"`?Ce:Se):o===Ce||o===Se?o=xe:o===ye||o===be?o=ve:(o=xe,i=void 0);let d=o===xe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ve?n+de:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+x+d):n+x+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(x),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(x)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(x),t=e.length-1;if(t>0){i.textContent=se?se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pe()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],pe())}}}else if(i.nodeType===8)if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(x,e+1))!==-1;)c.push({type:7,index:a}),e+=x.length-1}a++}}static createElement(e,t){let n=fe.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===Te)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=me(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fe).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=fe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),me(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ge(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new Ae(e)),t}k(t){he(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pe()),this.O(pe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!me(e)||e!==this._$AH&&e!==Te,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===Te&&(s=this._$AH[o]),a||=!me(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??C)===Te)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};const ze={M:le,P:x,A:ue,C:1,L:ke,R:Me,D:ge,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=oe.litHtmlPolyfillSupport;Be?.(Ae,Ne),(oe.litHtmlVersions??=[]).push(`3.3.1`);const Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(pe(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis;var Ue=class extends ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});const We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ge=l`
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
`,Ke=[];function qe(e){Je(e),Ke.push(e)}function Je(e){for(let t=Ke.length-1;t>=0;t--)if(Ke[t]===e){Ke.splice(t,1);break}}function Ye(e){return Ke.length>0&&Ke[Ke.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xe=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},Ze=l`
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
`,Qe=l`
  :host {
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
    grid-template-columns: repeat(auto-fill, minmax(min(1.5em, 100%), 1fr));
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
`;function $e(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var et=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},tt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,rt=e=>{throw TypeError(e)},w=(e,t,n,r)=>{for(var i=r>1?void 0:r?nt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&tt(t,n,i),i},it=(e,t,n)=>t.has(e)||rt(`Cannot `+n),at=(e,t,n)=>(it(e,t,`read from private field`),n?n.call(e):t.get(e)),ot=(e,t,n)=>t.has(e)?rt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),st=(e,t,n,r)=>(it(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},lt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:re},ut=(e=lt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function T(e){return(t,n)=>typeof n==`object`?ut(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function E(e){return T({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
function dt(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function pt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ft(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ft(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var mt=l`
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
`,ht=/;\s+$/;function gt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _t(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ht)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var vt,yt=class extends Ue{constructor(){super(),ot(this,vt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[mt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){at(this,vt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),st(this,vt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=_t({property:gt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=_t({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};vt=new WeakMap,w([T()],yt.prototype,`dir`,2),w([T()],yt.prototype,`lang`,2),w([T({type:Boolean,reflect:!0,attribute:`did-ssr`})],yt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),xt=class extends yt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new et))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};xt.formAssociated=!0,w([T({reflect:!0})],xt.prototype,`name`,2),w([T({type:Boolean})],xt.prototype,`disabled`,2),w([T({state:!0,attribute:!1})],xt.prototype,`valueHasChanged`,2),w([T({state:!0,attribute:!1})],xt.prototype,`hasInteracted`,2),w([T({attribute:`custom-error`,reflect:!0})],xt.prototype,`customError`,2),w([T({attribute:!1,state:!0,type:Object})],xt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St={small:`s`,medium:`m`,large:`l`},Ct=new Set;function wt(e,t){t in St&&!Ct.has(`${e}:${t}`)&&(Ct.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${St[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Et=l`
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dt(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Ot(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function kt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const At=new Set,jt=new Map;let Mt,Nt=`ltr`,Pt=`en`;const Ft=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ft){let e=new MutationObserver(Lt);Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function It(...e){e.map(e=>{let t=e.$code.toLowerCase();jt.has(t)?jt.set(t,Object.assign(Object.assign({},jt.get(t)),e)):jt.set(t,e),Mt||=e}),Lt()}function Lt(){Ft&&(Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language),[...At.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Rt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){At.add(this.host)}hostDisconnected(){At.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){let e=`${this.host.lang||Pt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Mt?Mt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=jt.get(`${n}-${r}`),a=jt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Mt&&Mt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Mt&&Mt[e])i=Mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},zt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};It(zt);var Bt=zt,Vt=class extends Rt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};It(Bt);function D(e,t){Ut(e)&&(e=`100%`);let n=Wt(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function Ht(e){return Math.min(1,Math.max(0,e))}function Ut(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function Wt(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function Gt(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Kt(e){return Number(e)<=1?`${Number(e)*100}%`:e}function qt(e){return e.length===1?`0`+e:String(e)}function Jt(e,t,n){return{r:D(e,255)*255,g:D(t,255)*255,b:D(n,255)*255}}function Yt(e,t,n){e=D(e,255),t=D(t,255),n=D(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break;default:break}a/=6}return{h:a,s:o,l:s}}function Xt(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zt(e,t,n){let r,i,a;if(e=D(e,360),t=D(t,100),n=D(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=Xt(s,o,e+1/3),i=Xt(s,o,e),a=Xt(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function Qt(e,t,n){e=D(e,255),t=D(t,255),n=D(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:c,v:o}}function $t(e,t,n){e=D(e,360)*6,t=D(t,100),n=D(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function en(e,t,n,r){let i=[qt(Math.round(e).toString(16)),qt(Math.round(t).toString(16)),qt(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function tn(e,t,n,r,i){let a=[qt(Math.round(e).toString(16)),qt(Math.round(t).toString(16)),qt(Math.round(n).toString(16)),qt(an(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function nn(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function rn(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function an(e){return Math.round(parseFloat(e)*255).toString(16)}function on(e){return sn(e)/255}function sn(e){return parseInt(e,16)}function cn(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}const ln={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function un(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=hn(e)),typeof e==`object`&&(gn(e.r)&&gn(e.g)&&gn(e.b)?(t=Jt(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):gn(e.h)&&gn(e.s)&&gn(e.v)?(r=Kt(e.s),i=Kt(e.v),t=$t(e.h,r,i),o=!0,s=`hsv`):gn(e.h)&&gn(e.s)&&gn(e.l)?(r=Kt(e.s),a=Kt(e.l),t=Zt(e.h,r,a),o=!0,s=`hsl`):gn(e.c)&&gn(e.m)&&gn(e.y)&&gn(e.k)&&(t=nn(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=Gt(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}const dn=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,fn=`[\\s|\\(]+(`+dn+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,pn=`[\\s|\\(]+(`+dn+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,mn={CSS_UNIT:new RegExp(dn),rgb:RegExp(`rgb`+fn),rgba:RegExp(`rgba`+pn),hsl:RegExp(`hsl`+fn),hsla:RegExp(`hsla`+pn),hsv:RegExp(`hsv`+fn),hsva:RegExp(`hsva`+pn),cmyk:RegExp(`cmyk`+pn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function hn(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(ln[e])e=ln[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=mn.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=mn.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=mn.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=mn.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=mn.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=mn.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=mn.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=mn.hex8.exec(e),n?{r:sn(n[1]),g:sn(n[2]),b:sn(n[3]),a:on(n[4]),format:t?`name`:`hex8`}:(n=mn.hex6.exec(e),n?{r:sn(n[1]),g:sn(n[2]),b:sn(n[3]),format:t?`name`:`hex`}:(n=mn.hex4.exec(e),n?{r:sn(n[1]+n[1]),g:sn(n[2]+n[2]),b:sn(n[3]+n[3]),a:on(n[4]+n[4]),format:t?`name`:`hex8`}:(n=mn.hex3.exec(e),n?{r:sn(n[1]+n[1]),g:sn(n[2]+n[2]),b:sn(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function gn(e){return typeof e==`number`?!Number.isNaN(e):mn.CSS_UNIT.test(e)}var _n=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=cn(t)),this.originalInput=t;let r=un(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=Gt(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=Qt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=Qt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=Yt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=Yt(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return en(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return tn(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(D(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(D(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...rn(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=rn(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+en(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(ln))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=Ht(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=Ht(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=Ht(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=Ht(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}};
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
*/const xn=yn(class extends bn{constructor(e){if(super(e),e.type!==vn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Te}}),O=e=>e??C,Sn=`important`;``+Sn;const Cn=yn(class extends bn{constructor(e){if(super(e),e.type!==vn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Sn:``):n[e]=r}}return Te}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var k=class extends xt{constructor(){super(),this.hasSlotController=new Tt(this,`hint`,`label`),this.isSafeValue=!1,this.localize=new Vt(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.inputValue=``,this.hue=0,this.isEmpty=!0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label=``,this.hint=``,this.format=`hex`,this.size=`m`,this.placement=`bottom-start`,this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener(`invalid`,this.emitInvalid),this.reportValidity(),this.addEventListener(`invalid`,this.emitInvalid)},this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&Ye(this)&&(e.stopPropagation(),this.hide(),this.focus())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&Ye(this)){e.stopPropagation(),this.focus(),this.hide();return}e.key===`Tab`&&setTimeout(()=>{let e=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this||e?.closest(this.tagName.toLowerCase())!==this)&&this.hide()})},this.handleDocumentMouseDown=e=>{let t=e.composedPath().some(e=>e instanceof Element&&(e.closest(`.color-picker`)||e===this.trigger));this&&!t&&this.hide()},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.opacity=this.hasAttribute(`opacity`),this.uppercase=this.hasAttribute(`uppercase`);let e=this.getAttribute(`format`);(e===`rgb`||e===`hsl`||e===`hsv`)&&(this.format=e),this.handleValueChange(``,this.value||``)}static get validators(){let e=[Xe()];return[...super.validators,...e]}get validationTarget(){return this.popup?.active?this.input:this.trigger}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleSizeChange(){wt(this.localName,this.size)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`preview-color-copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`preview-color-copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`];this.format=e[(e.indexOf(this.format)+1)%e.length],this.setColor(this.value||``),this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.slider.alpha`),r=t.querySelector(`.slider-handle`),{width:i}=t.getBoundingClientRect(),a=this.value,o=this.value;r.focus(),e.preventDefault(),n(t,{onMove:e=>{this.alpha=$e(e/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.slider.hue`),r=t.querySelector(`.slider-handle`),{width:i}=t.getBoundingClientRect(),a=this.value,o=this.value;r.focus(),e.preventDefault(),n(t,{onMove:e=>{this.hue=$e(e/i*360,0,360),this.syncValues(),this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`))}))},onStop:()=>{this.value!==a&&(a=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.grid`),r=t.querySelector(`.grid-handle`),{width:i,height:a}=t.getBoundingClientRect(),o=this.value,s=this.value;r.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,n(t,{onMove:(e,t)=>{this.saturation=$e(e/i*100,0,100),this.brightness=$e(100-t/a*100,0,100),this.syncValues(),this.value!==s&&(s=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==o&&(o=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=$e(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=$e(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=$e(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=$e(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=$e(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=$e(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=$e(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=$e(this.brightness-t,0,100),this.syncValues()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value||``):this.value=``,this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleInputInput(e){this.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),setTimeout(()=>this.input.select())):this.hue=0}}handleTouchMove(e){e.preventDefault()}parseColor(e){if(!e||e.trim()===``)return null;let t=new _n(e);if(!t.isValid)return null;let n=t.toHsl(),r=t.toRgb(),i=t.toHsv();if(!r||r.r==null||r.g==null||r.b==null)return null;let a={h:n.h||0,s:(n.s||0)*100,l:(n.l||0)*100,a:n.a||0},o=t.toHexString(),s=t.toHex8String(),c={h:i.h||0,s:(i.s||0)*100,v:(i.v||0)*100,a:i.a||0};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:r.r,g:r.g,b:r.b,string:this.setLetterCase(`rgb(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)})`)},rgba:{r:r.r,g:r.g,b:r.b,a:r.a||0,string:this.setLetterCase(`rgba(${Math.round(r.r)}, ${Math.round(r.g)}, ${Math.round(r.b)}, ${(r.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(o),hexa:this.setLetterCase(s)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format===`hsl`?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`preview-color-copied`),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){this.hasEyeDropper&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getHexString(e,t,n,r=100){let i=new _n(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(e){(e.has(`value`)||e.has(`defaultValue`))&&this.handleValueChange(e.get(`value`)||``,this.value||``),super.willUpdate(e)}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value||``,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=this.opacity?n.hsva.a*100:100,this.syncValues())}this.requestUpdate()}focus(e){this.trigger.focus(e)}blur(){let e=this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.popup?.active&&this.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}reportValidity(){return!this.validity.valid&&!this.open?(this.addEventListener(`wa-after-show`,this.reportValidityAfterShow,{once:!0}),this.show(),this.disabled||this.dispatchEvent(new et),!1):super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(e){super.firstUpdated(e),this.hasEyeDropper=`EyeDropper`in window}handleTriggerClick(){this.open?this.hide():(this.show(),this.focus())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}updateAccessibleTrigger(){let e=this.trigger;e&&(e.setAttribute(`aria-haspopup`,`true`),e.setAttribute(`aria-expanded`,this.open?`true`:`false`))}async show(){if(!this.open)return this.open=!0,Dt(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Dt(this,`wa-after-hide`)}addOpenListeners(){this.base.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),qe(this)}removeOpenListeners(){this.base&&this.base.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),Je(this)}async handleOpenChange(){if(this.disabled){this.open=!1;return}this.updateAccessibleTrigger(),this.open?(this.dispatchEvent(new CustomEvent(`wa-show`)),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await Ot(this.popup.popup,`show-with-scale`),this.dispatchEvent(new CustomEvent(`wa-after-show`))):(this.dispatchEvent(new CustomEvent(`wa-hide`)),this.removeOpenListeners(),await Ot(this.popup.popup,`hide-with-scale`),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent(`wa-after-hide`)))}render(){let e=this.isEmpty,t=this.hasSlotController.test(`label`,`withLabel`),n=this.hasSlotController.test(`hint`,`withHint`),r=this.label?!0:!!t,i=this.hint?!0:!!n,a=this.saturation,o=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches.map(e=>typeof e==`string`?{color:e,label:e}:e):this.swatches.split(`;`).filter(e=>e.trim()!==``).map(e=>({color:e.trim(),label:e.trim()})),c=S`
      <div
        part="base color-picker"
        class=${xn({"color-picker":!0})}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${Cn({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${xn({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${Cn({top:`${o}%`,left:`${a}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${O(this.disabled?void 0:`0`)}
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
                style=${Cn({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${O(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?S`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${Cn({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${Cn({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${O(this.disabled?void 0:`0`)}
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
            style=${Cn({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="s"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${e?``:this.inputValue}
            value=${e?``:this.inputValue}
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
            ${this.withoutFormatToggle?``:S`
                  <wa-button
                    part="format-button"
                    size="s"
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
            ${this.hasEyeDropper?S`
                  <wa-button
                    part="eyedropper-button"
                    size="s"
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

        ${s.length>0?S`
              <div part="swatches" class="swatches">
                ${s.map(e=>{let t=this.parseColor(e.color);return t?S`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${O(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e.label}
                      @click=${()=>this.selectSwatch(e.color)}
                      @keydown=${t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),this.selectSwatch(e.color))}}
                    >
                      <div class="swatch-color" style=${Cn({backgroundColor:t.hexa})}></div>
                    </div>
                  `:``})}
              </div>
            `:``}
      </div>
    `;return S`
      <div
        class=${xn({container:!0,"form-control":!0,"form-control-has-label":r})}
        part="trigger-container form-control"
      >
        <div
          part="form-control-label"
          class=${xn({label:!0,"has-label":r})}
          id="form-control-label"
        >
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${xn({trigger:!0,"trigger-empty":e,"transparent-bg":!0,"form-control-input":!0})}
          style=${Cn({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${xn({"has-slotted":i})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement=${this.placement}
        distance="0"
        skidding="0"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?`true`:`false`}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${c}
      </wa-popup>
    `}};k.css=[Ge,Et,Ze,Qe],k.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},w([pt(`[part~="base"]`)],k.prototype,`base`,2),w([pt(`[part~="input"]`)],k.prototype,`input`,2),w([pt(`[part~="form-control-label"]`)],k.prototype,`triggerLabel`,2),w([pt(`[part~="form-control-input"]`)],k.prototype,`triggerButton`,2),w([pt(`.color-popup`)],k.prototype,`popup`,2),w([pt(`[part~="preview"]`)],k.prototype,`previewButton`,2),w([pt(`[part~="trigger"]`)],k.prototype,`trigger`,2),w([E()],k.prototype,`hasFocus`,2),w([E()],k.prototype,`isDraggingGridHandle`,2),w([E()],k.prototype,`inputValue`,2),w([E()],k.prototype,`hue`,2),w([E()],k.prototype,`isEmpty`,2),w([E()],k.prototype,`saturation`,2),w([E()],k.prototype,`brightness`,2),w([E()],k.prototype,`alpha`,2),w([E()],k.prototype,`value`,1),w([T({attribute:`value`,reflect:!0})],k.prototype,`defaultValue`,2),w([T({attribute:`with-label`,reflect:!0,type:Boolean})],k.prototype,`withLabel`,2),w([T({attribute:`with-hint`,reflect:!0,type:Boolean})],k.prototype,`withHint`,2),w([E()],k.prototype,`hasEyeDropper`,2),w([T()],k.prototype,`label`,2),w([T({attribute:`hint`})],k.prototype,`hint`,2),w([T()],k.prototype,`format`,2),w([T({reflect:!0})],k.prototype,`size`,2),w([kt(`size`)],k.prototype,`handleSizeChange`,1),w([T({reflect:!0})],k.prototype,`placement`,2),w([T({attribute:`without-format-toggle`,type:Boolean})],k.prototype,`withoutFormatToggle`,2),w([T({reflect:!0})],k.prototype,`name`,2),w([T({type:Boolean})],k.prototype,`disabled`,2),w([T({type:Boolean,reflect:!0})],k.prototype,`open`,2),w([T({type:Boolean})],k.prototype,`opacity`,2),w([T({type:Boolean})],k.prototype,`uppercase`,2),w([T()],k.prototype,`swatches`,2),w([T({type:Boolean,reflect:!0})],k.prototype,`required`,2),w([dt({passive:!1})],k.prototype,`handleTouchMove`,1),w([kt(`format`,{waitUntilFirstUpdate:!0})],k.prototype,`handleFormatChange`,1),w([kt(`opacity`,{waitUntilFirstUpdate:!0})],k.prototype,`handleOpacityChange`,1),w([kt(`value`)],k.prototype,`handleValueChange`,1),w([kt(`open`,{waitUntilFirstUpdate:!0})],k.prototype,`handleOpenChange`,1),k=w([ct(`wa-color-picker`)],k),k.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Tn(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&kn(t)})}var En=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),Dn=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),On=e=>{let t=e?.localName;if(!t||!En.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!Dn.get(n)};function kn(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)On(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=l`
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
`,jn=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Mn}=ze,Nn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Pn=e=>e.strings===void 0,Fn={},In=(e,t=Fn)=>e._$AH=t,Ln=yn(class extends bn{constructor(e){if(super(e),e.type!==vn.PROPERTY&&e.type!==vn.ATTRIBUTE&&e.type!==vn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Pn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Te||t===C)return t;let n=e.element,r=e.name;if(e.type===vn.PROPERTY){if(t===n[r])return Te}else if(e.type===vn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Te}else if(e.type===vn.ATTRIBUTE&&n.getAttribute(r)===t+``)return Te;return In(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var A=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Tt(this,`hint`,`label`),this.localize=new Vt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,jn()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){wt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new wn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Tn(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return S`
      <label
        part="form-control-label label"
        class=${xn({label:!0,"has-label":n})}
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
          name=${O(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${O(this.placeholder)}
          minlength=${O(this.minlength)}
          maxlength=${O(this.maxlength)}
          min=${O(this.min)}
          max=${O(this.max)}
          step=${O(this.step)}
          .value=${Ln(this.value??``)}
          autocapitalize=${O(this.autocapitalize)}
          autocomplete=${O(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${O(this.pattern)}
          enterkeyhint=${O(this.enterkeyhint)}
          inputmode=${O(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?S`
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
        ${this.passwordToggle&&!this.disabled?S`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?S`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:S`
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
        class=${xn({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};A.css=[Et,Ze,An],A.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},w([pt(`input`)],A.prototype,`input`,2),w([T()],A.prototype,`title`,2),w([T({reflect:!0})],A.prototype,`type`,2),w([E()],A.prototype,`value`,1),w([T({attribute:`value`,reflect:!0})],A.prototype,`defaultValue`,2),w([T({reflect:!0})],A.prototype,`size`,2),w([kt(`size`)],A.prototype,`handleSizeChange`,1),w([T({reflect:!0})],A.prototype,`appearance`,2),w([T({type:Boolean,reflect:!0})],A.prototype,`pill`,2),w([T()],A.prototype,`label`,2),w([T({attribute:`hint`})],A.prototype,`hint`,2),w([T({attribute:`with-clear`,type:Boolean})],A.prototype,`withClear`,2),w([T()],A.prototype,`placeholder`,2),w([T({type:Boolean,reflect:!0})],A.prototype,`readonly`,2),w([T({attribute:`password-toggle`,type:Boolean})],A.prototype,`passwordToggle`,2),w([T({attribute:`password-visible`,type:Boolean})],A.prototype,`passwordVisible`,2),w([T({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],A.prototype,`withoutSpinButtons`,2),w([T({type:Boolean,reflect:!0})],A.prototype,`required`,2),w([T()],A.prototype,`pattern`,2),w([T({type:Number})],A.prototype,`minlength`,2),w([T({type:Number})],A.prototype,`maxlength`,2),w([T()],A.prototype,`min`,2),w([T()],A.prototype,`max`,2),w([T()],A.prototype,`step`,2),w([T()],A.prototype,`autocapitalize`,2),w([T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],A.prototype,`autocorrect`,2),w([T()],A.prototype,`autocomplete`,2),w([T({type:Boolean})],A.prototype,`autofocus`,2),w([T()],A.prototype,`enterkeyhint`,2),w([T({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],A.prototype,`spellcheck`,2),w([T()],A.prototype,`inputmode`,2),w([T({attribute:`with-label`,type:Boolean})],A.prototype,`withLabel`,2),w([T({attribute:`with-hint`,type:Boolean})],A.prototype,`withHint`,2),w([kt(`step`,{waitUntilFirstUpdate:!0})],A.prototype,`handleStepChange`,1),A=w([ct(`wa-input`)],A),A.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},zn=l`
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
`;const Bn=Math.min,j=Math.max,Vn=Math.round,Hn=Math.floor,Un=e=>({x:e,y:e}),Wn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Gn={start:`end`,end:`start`};function Kn(e,t,n){return j(e,Bn(t,n))}function qn(e,t){return typeof e==`function`?e(t):e}function Jn(e){return e.split(`-`)[0]}function Yn(e){return e.split(`-`)[1]}function Xn(e){return e===`x`?`y`:`x`}function Zn(e){return e===`y`?`height`:`width`}const Qn=new Set([`top`,`bottom`]);function $n(e){return Qn.has(Jn(e))?`y`:`x`}function er(e){return Xn($n(e))}function tr(e,t,n){n===void 0&&(n=!1);let r=Yn(e),i=er(e),a=Zn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ur(o)),[o,ur(o)]}function nr(e){let t=ur(e);return[rr(e),t,rr(t)]}function rr(e){return e.replace(/start|end/g,e=>Gn[e])}const ir=[`left`,`right`],ar=[`right`,`left`],or=[`top`,`bottom`],sr=[`bottom`,`top`];function cr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ar:ir:t?ir:ar;case`left`:case`right`:return t?or:sr;default:return[]}}function lr(e,t,n,r){let i=Yn(e),a=cr(Jn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(rr)))),a}function ur(e){return e.replace(/left|right|bottom|top/g,e=>Wn[e])}function dr(e){return{top:0,right:0,bottom:0,left:0,...e}}function fr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:dr(e)}function pr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mr(e,t,n){let{reference:r,floating:i}=e,a=$n(t),o=er(t),s=Zn(o),c=Jn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Yn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const hr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=mr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=mr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function gr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=qn(t,e),p=fr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=pr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=pr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const _r=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=qn(e,t)||{};if(l==null)return{};let d=fr(u),f={x:n,y:r},p=er(i),m=Zn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),b=ne?ne[y]:0;(!b||!await(o.isElement==null?void 0:o.isElement(ne)))&&(b=s.floating[y]||a.floating[m]);let re=ee/2-te/2,ie=b/2-h[m]/2-1,ae=Bn(d[_],ie),oe=Bn(d[v],ie),se=ae,ce=b-h[m]-oe,le=b/2-h[m]/2+re,x=Kn(se,le,ce),ue=!c.arrow&&Yn(i)!=null&&le!==x&&a.reference[m]/2-(le<se?ae:oe)-h[m]/2<0,de=ue?le<se?le-se:le-ce:0;return{[p]:f[p]+de,data:{[p]:x,centerOffset:le-x-de,...ue&&{alignmentOffset:de}},reset:ue}}}),vr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=qn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Jn(r),_=$n(o),v=Jn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[ur(o)]:nr(o)),te=p!==`none`;!d&&te&&ee.push(...lr(o,m,p,y));let ne=[o,...ee],b=await gr(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(b[g]),u){let e=tr(r,a,y);re.push(b[e[0]],b[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==$n(t))||ie.every(e=>$n(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(te){let t=$n(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},yr=new Set([`left`,`top`]);async function br(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Jn(n),s=Yn(n),c=$n(n)===`y`,l=yr.has(o)?-1:1,u=a&&c?-1:1,d=qn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const xr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await br(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=qn(e,t),l={x:n,y:r},u=await gr(t,c),d=$n(Jn(i)),f=Xn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Kn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Kn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=qn(e,t),u=await gr(t,l),d=Jn(i),f=Yn(i),p=$n(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=Bn(h-u[g],v),te=Bn(m-u[_],y),ne=!t.middlewareData.shift,b=ee,re=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(re=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(b=v),ne&&!f){let e=j(u.left,0),t=j(u.right,0),n=j(u.top,0),r=j(u.bottom,0);p?re=m-2*(e!==0||t!==0?e+t:j(u.left,u.right)):b=h-2*(n!==0||r!==0?n+r:j(u.top,u.bottom))}await c({...t,availableWidth:re,availableHeight:b});let ie=await o.getDimensions(s.floating);return m!==ie.width||h!==ie.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<`u`}function Tr(e){return Or(e)?(e.nodeName||``).toLowerCase():`#document`}function Er(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dr(e){return((Or(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Or(e){return wr()?e instanceof Node||e instanceof Er(e).Node:!1}function kr(e){return wr()?e instanceof Element||e instanceof Er(e).Element:!1}function Ar(e){return wr()?e instanceof HTMLElement||e instanceof Er(e).HTMLElement:!1}function jr(e){return!wr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Er(e).ShadowRoot}const Mr=new Set([`inline`,`contents`]);function Nr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Kr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Mr.has(i)}const Pr=new Set([`table`,`td`,`th`]);function Fr(e){return Pr.has(Tr(e))}const Ir=[`:popover-open`,`:modal`];function Lr(e){return Ir.some(t=>{try{return e.matches(t)}catch{return!1}})}const Rr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],zr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Br=[`paint`,`layout`,`strict`,`content`];function Vr(e){let t=Ur(),n=kr(e)?Kr(e):e;return Rr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||zr.some(e=>(n.willChange||``).includes(e))||Br.some(e=>(n.contain||``).includes(e))}function Hr(e){let t=Jr(e);for(;Ar(t)&&!Gr(t);){if(Vr(t))return t;if(Lr(t))return null;t=Jr(t)}return null}function Ur(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Wr=new Set([`html`,`body`,`#document`]);function Gr(e){return Wr.has(Tr(e))}function Kr(e){return Er(e).getComputedStyle(e)}function qr(e){return kr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Jr(e){if(Tr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||jr(e)&&e.host||Dr(e);return jr(t)?t.host:t}function Yr(e){let t=Jr(e);return Gr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ar(t)&&Nr(t)?t:Yr(t)}function Xr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Yr(e),i=r===e.ownerDocument?.body,a=Er(r);if(i){let e=Zr(a);return t.concat(a,a.visualViewport||[],Nr(r)?r:[],e&&n?Xr(e):[])}return t.concat(r,Xr(r,[],n))}function Zr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qr(e){let t=Kr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ar(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Vn(n)!==a||Vn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function $r(e){return kr(e)?e:e.contextElement}function ei(e){let t=$r(e);if(!Ar(t))return Un(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Qr(t),o=(a?Vn(n.width):n.width)/r,s=(a?Vn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ti=Un(0);function ni(e){let t=Er(e);return!Ur()||!t.visualViewport?ti:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ri(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Er(e)?!1:t}function ii(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=$r(e),o=Un(1);t&&(r?kr(r)&&(o=ei(r)):o=ei(e));let s=ri(a,n,r)?ni(a):Un(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Er(a),t=r&&kr(r)?Er(r):r,n=e,i=Zr(n);for(;i&&r&&t!==n;){let e=ei(i),t=i.getBoundingClientRect(),r=Kr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Er(i),i=Zr(n)}}return pr({width:u,height:d,x:c,y:l})}function ai(e,t){let n=qr(e).scrollLeft;return t?t.left+n:ii(Dr(e)).left+n}function oi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ai(e,n),y:n.top+t.scrollTop}}function si(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Dr(r),s=t?Lr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Un(1),u=Un(0),d=Ar(r);if((d||!d&&!a)&&((Tr(r)!==`body`||Nr(o))&&(c=qr(r)),Ar(r))){let e=ii(r);l=ei(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?oi(o,c):Un(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ci(e){return Array.from(e.getClientRects())}function li(e){let t=Dr(e),n=qr(e),r=e.ownerDocument.body,i=j(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=j(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ai(e),s=-n.scrollTop;return Kr(r).direction===`rtl`&&(o+=j(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ui(e,t){let n=Er(e),r=Dr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ur();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ai(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const di=new Set([`absolute`,`fixed`]);function fi(e,t){let n=ii(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ar(e)?ei(e):Un(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function pi(e,t,n){let r;if(t===`viewport`)r=ui(e,n);else if(t===`document`)r=li(Dr(e));else if(kr(t))r=fi(t,n);else{let n=ni(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return pr(r)}function mi(e,t){let n=Jr(e);return n===t||!kr(n)||Gr(n)?!1:Kr(n).position===`fixed`||mi(n,t)}function hi(e,t){let n=t.get(e);if(n)return n;let r=Xr(e,[],!1).filter(e=>kr(e)&&Tr(e)!==`body`),i=null,a=Kr(e).position===`fixed`,o=a?Jr(e):e;for(;kr(o)&&!Gr(o);){let t=Kr(o),n=Vr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&di.has(i.position)||Nr(o)&&!n&&mi(e,o))?r=r.filter(e=>e!==o):i=t,o=Jr(o)}return t.set(e,r),r}function gi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Lr(t)?[]:hi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=pi(t,n,i);return e.top=j(r.top,e.top),e.right=Bn(r.right,e.right),e.bottom=Bn(r.bottom,e.bottom),e.left=j(r.left,e.left),e},pi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function _i(e){let{width:t,height:n}=Qr(e);return{width:t,height:n}}function vi(e,t,n){let r=Ar(t),i=Dr(t),a=n===`fixed`,o=ii(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Un(0);function l(){c.x=ai(i)}if(r||!r&&!a)if((Tr(t)!==`body`||Nr(i))&&(s=qr(t)),r){let e=ii(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?oi(i,s):Un(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function yi(e){return Kr(e).position===`static`}function bi(e,t){if(!Ar(e)||Kr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Dr(e)===n&&(n=n.ownerDocument.body),n}function xi(e,t){let n=Er(e);if(Lr(e))return n;if(!Ar(e)){let t=Jr(e);for(;t&&!Gr(t);){if(kr(t)&&!yi(t))return t;t=Jr(t)}return n}let r=bi(e,t);for(;r&&Fr(r)&&yi(r);)r=bi(r,t);return r&&Gr(r)&&yi(r)&&!Vr(r)?n:r||Hr(e)||n}const Si=async function(e){let t=this.getOffsetParent||xi,n=this.getDimensions,r=await n(e.floating);return{reference:vi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ci(e){return Kr(e).direction===`rtl`}const wi={convertOffsetParentRelativeRectToViewportRelativeRect:si,getDocumentElement:Dr,getClippingRect:gi,getOffsetParent:xi,getElementRects:Si,getClientRects:ci,getDimensions:_i,getScale:ei,isElement:kr,isRTL:Ci};function Ti(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ei(e,t){let n=null,r,i=Dr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Hn(d),h=Hn(i.clientWidth-(u+f)),g=Hn(i.clientHeight-(d+p)),_=Hn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:j(0,Bn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ti(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function Di(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=$r(e),u=i||a?[...l?Xr(l):[],...Xr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ei(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?ii(e):null;c&&g();function g(){let t=ii(e);h&&!Ti(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Oi=xr,ki=Sr,Ai=vr,ji=Cr,Mi=_r,Ni=(e,t,n)=>{let r=new Map,i={platform:wi,...n},a={...i.platform,_c:r};return hr(e,t,{...i,platform:a})};function Pi(e){return Ii(e)}function Fi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ii(e){for(let t=e;t;t=Fi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Fi(e);t;t=Fi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Vr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Li(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Ri=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),M=class extends yt{constructor(){super(...arguments),this.localize=new Vt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Ri,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Li(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Di(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Oi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ji({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Li(this.anchor)&&this.boundary===`scroll`&&(t=Xr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ai({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ki({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ji({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Mi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>wi.getOffsetParent(e,Pi):wi.getOffsetParent;Ni(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...wi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Rn)}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${xn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${xn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};M.css=zn,w([pt(`.popup`)],M.prototype,`popup`,2),w([pt(`.arrow`)],M.prototype,`arrowEl`,2),w([T({attribute:!1,type:Boolean})],M.prototype,`SUPPORTS_POPOVER`,2),w([T()],M.prototype,`anchor`,2),w([T({type:Boolean,reflect:!0})],M.prototype,`active`,2),w([T({reflect:!0})],M.prototype,`placement`,2),w([T()],M.prototype,`boundary`,2),w([T({type:Number})],M.prototype,`distance`,2),w([T({type:Number})],M.prototype,`skidding`,2),w([T({type:Boolean})],M.prototype,`arrow`,2),w([T({attribute:`arrow-placement`})],M.prototype,`arrowPlacement`,2),w([T({attribute:`arrow-padding`,type:Number})],M.prototype,`arrowPadding`,2),w([T({type:Boolean})],M.prototype,`flip`,2),w([T({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],M.prototype,`flipFallbackPlacements`,2),w([T({attribute:`flip-fallback-strategy`})],M.prototype,`flipFallbackStrategy`,2),w([T({type:Object})],M.prototype,`flipBoundary`,2),w([T({attribute:`flip-padding`,type:Number})],M.prototype,`flipPadding`,2),w([T({type:Boolean})],M.prototype,`shift`,2),w([T({type:Object})],M.prototype,`shiftBoundary`,2),w([T({attribute:`shift-padding`,type:Number})],M.prototype,`shiftPadding`,2),w([T({attribute:`auto-size`})],M.prototype,`autoSize`,2),w([T()],M.prototype,`sync`,2),w([T({type:Object})],M.prototype,`autoSizeBoundary`,2),w([T({attribute:`auto-size-padding`,type:Number})],M.prototype,`autoSizePadding`,2),w([T({attribute:`hover-bridge`,type:Boolean})],M.prototype,`hoverBridge`,2),M=w([ct(`wa-popup`)],M);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zi=l`
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
`,Bi=l`
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
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Vi=Symbol.for(``),Hi=e=>{if(e?.r===Vi)return e?._$litStatic$},Ui=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Vi}),Wi=new Map,Gi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Hi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Wi.get(e))===void 0&&(o.raw=o,Wi.set(e,t=o)),n=s}return e(t,...n)})(S);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var N=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Tt(this,`[default]`,`start`,`end`),this.localize=new Vt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,jn()]}handleSizeChange(){wt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new et)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ui`a`:Ui`button`;return Gi`
      <${t}
        part="base button"
        class=${xn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${O(e?void 0:this.disabled)}
        type=${O(e?void 0:this.type)}
        title=${this.title}
        name=${O(e?void 0:this.name)}
        value=${O(e?void 0:this.value)}
        href=${O(e?this.href:void 0)}
        target=${O(e?this.target:void 0)}
        download=${O(e?this.download:void 0)}
        rel=${O(e&&this.rel?this.rel:void 0)}
        role=${O(e?void 0:`button`)}
        aria-disabled=${O(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Gi`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Gi`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};N.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},N.css=[zi,Bi,Et],w([pt(`.button`)],N.prototype,`button`,2),w([pt(`slot:not([name])`)],N.prototype,`labelSlot`,2),w([E()],N.prototype,`invalid`,2),w([E()],N.prototype,`isIconButton`,2),w([T()],N.prototype,`title`,2),w([T({reflect:!0})],N.prototype,`variant`,2),w([T({reflect:!0})],N.prototype,`appearance`,2),w([T({reflect:!0})],N.prototype,`size`,2),w([kt(`size`)],N.prototype,`handleSizeChange`,1),w([T({attribute:`with-caret`,type:Boolean,reflect:!0})],N.prototype,`withCaret`,2),w([T({attribute:`with-start`,type:Boolean})],N.prototype,`withStart`,2),w([T({attribute:`with-end`,type:Boolean})],N.prototype,`withEnd`,2),w([T({type:Boolean})],N.prototype,`disabled`,2),w([T({type:Boolean,reflect:!0})],N.prototype,`loading`,2),w([T({type:Boolean,reflect:!0})],N.prototype,`pill`,2),w([T()],N.prototype,`type`,2),w([T({reflect:!0})],N.prototype,`name`,2),w([T({reflect:!0})],N.prototype,`value`,2),w([T({reflect:!0})],N.prototype,`href`,2),w([T()],N.prototype,`target`,2),w([T()],N.prototype,`rel`,2),w([T()],N.prototype,`download`,2),w([T({attribute:`formaction`})],N.prototype,`formAction`,2),w([T({attribute:`formenctype`})],N.prototype,`formEnctype`,2),w([T({attribute:`formmethod`})],N.prototype,`formMethod`,2),w([T({attribute:`formnovalidate`,type:Boolean})],N.prototype,`formNoValidate`,2),w([T({attribute:`formtarget`})],N.prototype,`formTarget`,2),w([kt(`disabled`,{waitUntilFirstUpdate:!0})],N.prototype,`handleDisabledChange`,1),w([kt(`href`)],N.prototype,`handleHrefChange`,1),w([kt(`loading`,{waitUntilFirstUpdate:!0})],N.prototype,`handleLoadingChange`,1),N=w([ct(`wa-button`)],N),N.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ki=l`
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
`,qi=class extends yt{constructor(){super(...arguments),this.localize=new Vt(this)}render(){return S`
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
    `}};qi.css=Ki,qi=w([ct(`wa-spinner`)],qi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ji=l`
  :host {
    display: inline-flex;
  }

  .button-group {
    display: flex;
    position: relative;
    isolation: isolate;
    flex-wrap: wrap;

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

    :host([orientation='horizontal']) & {
      flex-direction: row;
    }

    :host([orientation='vertical']) & {
      flex-direction: column;
    }
  }

  /* Set custom properties to be inherited by slotted buttons */
  :host([orientation='horizontal']) {
    --_button-horizontal-indent: var(--wa-form-control-border-width);
    --_button-horizontal-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-horizontal-indent: 0;
      --_button-horizontal-indent-outlined: 0;
    }
  }

  :host([orientation='vertical']) {
    --_button-vertical-indent: var(--wa-form-control-border-width);
    --_button-vertical-indent-outlined: calc(var(--wa-form-control-border-width) * -1);

    ::slotted(:first-child) {
      --_button-vertical-indent: 0;
      --_button-vertical-indent-outlined: 0;
    }
  }

  /* All buttons that are not in front or at the end get their border radius removed */
  ::slotted(:not(:first-child):not(:last-child)) {
    --_button-start-start-radius: 0;
    --_button-start-end-radius: 0;
    --_button-end-start-radius: 0;
    --_button-end-end-radius: 0;
  }

  /* Remove leading and trailing buttons border radius individually */
  :host([orientation='horizontal']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-start-end-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-end-start-radius: 0;
    }
  }

  :host([orientation='vertical']) {
    ::slotted(:first-child:not(:last-child)) {
      --_button-end-start-radius: 0;
      --_button-end-end-radius: 0;
    }

    ::slotted(:last-child:not(:first-child)) {
      --_button-start-start-radius: 0;
      --_button-start-end-radius: 0;
    }
  }
`,Yi=class extends yt{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label=``,this.orientation=`horizontal`}updated(e){super.updated(e),e.has(`orientation`)&&this.setAttribute(`aria-orientation`,this.orientation)}handleFocus(e){Xi(e.target)?.classList.add(`button-focus`)}handleBlur(e){Xi(e.target)?.classList.remove(`button-focus`)}handleMouseOver(e){Xi(e.target)?.classList.add(`button-hover`)}handleMouseOut(e){Xi(e.target)?.classList.remove(`button-hover`)}render(){return S`
      <slot
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      ></slot>
    `}};Yi.css=[Ji],w([pt(`slot`)],Yi.prototype,`defaultSlot`,2),w([E()],Yi.prototype,`disableRole`,2),w([E()],Yi.prototype,`hasOutlined`,2),w([T()],Yi.prototype,`label`,2),w([T({reflect:!0})],Yi.prototype,`orientation`,2),Yi=w([ct(`wa-button-group`)],Yi);function Xi(e){let t=`wa-button, wa-radio-button`;return e.closest(t)??e.querySelector(t)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zi=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Qi=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},$i=l`
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
`,ea=``,ta=``;function na(){return ea.replace(/\/$/,``)}function ra(e){ta=e}function ia(){if(!ta){let e=document.querySelector(`[data-fa-kit-code]`);e&&ra(e.getAttribute(`data-fa-kit-code`)||``)}return ta}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var aa=`7.3.0`;function oa(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function sa(e,t,n){let r=oa(e,t,n),i=na();if(i)return`${i}/${r}/${e}.svg`;let a=ia();return a.length>0?`https://ka-p.fontawesome.com/releases/v${aa}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${aa}/svgs/${r}/${e}.svg`}var ca={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>sa(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function la(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var ua={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},da={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=ua[n][e]??ua.regular[e]??ua.regular[`circle-question`];return r?la(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},fa=`classic`,pa=[ca,da],ma=new Set;function ha(e){ma.add(e)}function ga(e){ma.delete(e)}function _a(e){return pa.find(t=>t.name===e)}function va(){return fa}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ya=Symbol(),ba=Symbol(),xa,Sa=new Map,P=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=S`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ya:ba}catch{return ba}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return ya;xa||=new DOMParser;let r=xa.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ya}catch{return ya}}}connectedCallback(){super.connectedCallback(),ha(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ga(this)}async getIconSource(){let e=_a(this.library),t=this.family||va();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?_a(this.library):void 0;if(!e){this.svg=null;return}let r=Sa.get(e);r||(r=this.resolveIcon(e,n),Sa.set(e,r));let i=await r;if(i===ba&&Sa.delete(e),e===(await this.getIconSource()).url){if(Nn(i)){this.svg=i;return}switch(i){case ba:case ya:this.svg=null,this.dispatchEvent(new Zi);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Qi)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=_a(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:S`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};P.css=$i,w([E()],P.prototype,`svg`,2),w([T({reflect:!0})],P.prototype,`name`,2),w([T({reflect:!0})],P.prototype,`family`,2),w([T({reflect:!0})],P.prototype,`variant`,2),w([T({reflect:!0})],P.prototype,`canvas`,2),w([T({attribute:`auto-width`,type:Boolean,reflect:!0})],P.prototype,`autoWidth`,2),w([T({attribute:`swap-opacity`,type:Boolean,reflect:!0})],P.prototype,`swapOpacity`,2),w([T()],P.prototype,`src`,2),w([T()],P.prototype,`label`,2),w([T({reflect:!0})],P.prototype,`library`,2),w([T({type:Number,reflect:!0})],P.prototype,`rotate`,2),w([T({type:String,reflect:!0})],P.prototype,`flip`,2),w([T({type:String,reflect:!0})],P.prototype,`animation`,2),w([kt(`label`)],P.prototype,`handleLabelChange`,1),w([kt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],P.prototype,`setIcon`,1),P=w([ct(`wa-icon`)],P);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ca=t({default:()=>k}),F;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var wa;function Ta(e){this.c=e}F=Ta.prototype,F.toString=(function(){return String.fromCharCode(this.c)});function Ea(e){switch(typeof e){case`string`:return oh.l();case`number`:return Va(e)?e<<24>>24===e?Wp.l():e<<16>>16===e?Zp.l():eh.l():Ha(e)?$m.l():Qm.l();case`boolean`:return fp.l();case`undefined`:return ol.l();default:return e instanceof V?rh.l():e instanceof Ta?hp.l():e&&e.$classData?e.$classData.l():null}}function Da(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Va(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ha(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof V?`java.lang.Long`:e instanceof Ta?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.i9()}}function Oa(e,t){switch(typeof e){case`string`:return ah(e,t);case`number`:return Xm(e,t);case`boolean`:return up(e,t);case`undefined`:return rl(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof V?th(e,t):e instanceof Ta?mp(Wa(e),t):Ka.prototype.j.call(e,t)}}function ka(e){switch(typeof e){case`string`:return ih(e);case`number`:return Zm(e);case`boolean`:return dp(e);case`undefined`:return il(e);default:return e&&e.$classData||e===null?e.p():e instanceof V?nh(e):e instanceof Ta?pp(Wa(e)):Ka.prototype.p.call(e)}}function Aa(e){return e===void 0?`undefined`:e.toString()}function ja(e,t){if(t===0)throw new Up(`/ by zero`);return e/t|0}function Ma(e,t){if(t===0)throw new Up(`/ by zero`);return e%t|0}function Na(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Pa(e){return String.fromCharCode(e)}function Fa(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Ia=0,La=new WeakMap;function Ra(e){switch(typeof e){case`string`:return ih(e);case`number`:return Zm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:ih(n);default:if(e===null)return 0;var r=La.get(e);return r===void 0&&(r=Ia+1|0,Ia=r,La.set(e,r)),r}}function za(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Ba(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Va(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ha(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Ua(e){return new Ta(e)}Ua(0);function Wa(e){return e===null?0:e.c}function Ga(e){return e===null?wa:e}function Ka(){}F=Ka.prototype,F.constructor=Ka;function I(){}I.prototype=F,F.p=(function(){return Ra(this)}),F.j=(function(e){return this===e}),F.t=(function(){var e=this.p();return Da(this)+`@`+(+(e>>>0)).toString(16)}),F.toString=(function(){return this.t()});function qa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}F=qa.prototype=new I,F.constructor=qa,F.a5=(function(e,t,n,r){Fa(this.a,e,t.a,n,r)}),F.Z=(function(){return new qa(this.a.slice())});function Ja(){}Ja.prototype=F;function Ya(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}F=Ya.prototype=new I,F.constructor=Ya,F.a5=(function(e,t,n,r){Fa(this.a,e,t.a,n,r)}),F.Z=(function(){return new Ya(this.a.slice())});function Xa(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}F=Xa.prototype=new I,F.constructor=Xa,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new Xa(this.a.slice())});function Za(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}F=Za.prototype=new I,F.constructor=Za,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new Za(this.a.slice())});function Qa(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}F=Qa.prototype=new I,F.constructor=Qa,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new Qa(this.a.slice())});function $a(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}F=$a.prototype=new I,F.constructor=$a,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new $a(this.a.slice())});function eo(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=wa}else this.a=e}F=eo.prototype=new I,F.constructor=eo,F.a5=(function(e,t,n,r){Fa(this.a,e,t.a,n,r)}),F.Z=(function(){return new eo(this.a.slice())});function to(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}F=to.prototype=new I,F.constructor=to,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new to(this.a.slice())});function no(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}F=no.prototype=new I,F.constructor=no,F.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.Z=(function(){return new no(this.a.slice())});function L(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}F=L.prototype,F.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new L().y(this,r,i)),this}),F.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),F.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),F.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ja;n.constructor=t,n.a5=(function(e,t,n,r){Fa(this.a,e,t.a,n,r)}),n.Z=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===ro});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),F.r=(function(){return this.A||=new L().a(this),this.A}),F.l=(function(){return this.L||=new hf(this),this.L}),F.R=(function(e){return this===e||this.F(e)}),F.S=(function(){return this.P?this.P.l():null}),F.Q=(function(){return this.O?this.O.l():null});var ro=new L;ro.n={},ro.E=`Ljava.lang.Object;`,ro.F=(e=>!e.X),ro.N=`java.lang.Object`,ro.I=(e=>e!==null),ro.A=new L().y(ro,qa,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ka.prototype.$classData=ro;var io=new L().p(void 0,`V`,`void`,void 0,void 0);new L().p(!1,`Z`,`boolean`,Ya,void 0);var ao=new L().p(0,`C`,`char`,Xa,Uint16Array);new L().p(0,`B`,`byte`,Za,Int8Array),new L().p(0,`S`,`short`,Qa,Int16Array),new L().p(0,`I`,`int`,$a,Int32Array);var oo=new L().p(null,`J`,`long`,eo,void 0);new L().p(0,`F`,`float`,to,Float32Array),new L().p(0,`D`,`double`,no,Float64Array);function so(e){return Ea(e).cC()+`@`+Ra(e)}function co(e){var t=e.cP;return t===void 0?so(e):t}function lo(){fo=this,po().hH(new Q((e=>void 0)),kl().eo,!0)}F=lo.prototype=new I,F.constructor=lo;function uo(){}uo.prototype=F,F.hH=(function(e,t,n){return new Qf(e,n,t,this)}),new L().i(lo,`com.raquo.airstream.core.Observer$`,{b8:1});var fo;function po(){return fo||=new lo,fo}function mo(e){this.bQ=null,this.cQ=null,this.bR=0,this.bQ=e,this.cQ=void 0;var t=Po().br();this.bR=t===void 0?1:1+t.bR|0,bo().bt===-1||this.bR>bo().bt?Hd().cL(new Hm(this,bo().bt)):To().P?To().an.push(this)|0:Po().cs(this)}F=mo.prototype=new I,F.constructor=mo;function ho(){}ho.prototype=F;var go=new L().i(mo,`com.raquo.airstream.core.Transaction`,{bb:1});function _o(){this.bt=0,this.cR=null,yo=this,this.bt=1e3,this.cR=new Q((e=>{throw _f(new J,`Attempted to run Transaction `+e+` after it was already executed.`)}))}F=_o.prototype=new I,F.constructor=_o;function vo(){}vo.prototype=F,F.eY=(function(e){try{e.bQ.h(e);var t=e.cQ;if(t!==void 0)for(;t.id();)t.i3().ii(e)}catch(e){var n=e instanceof ad?e:new og(e);Hd().cL(n)}}),new L().i(_o,`com.raquo.airstream.core.Transaction$`,{bc:1});var yo;function bo(){return yo||=new _o,yo}function xo(e){e.bu.length|0?new mo(new Q((t=>{for(;(e.bu.length|0)>0;){var n=e.bu.shift();try{n.h(t)}catch(e){var r=e instanceof ad?e:new og(e);Hd().cL(r)}}for(;(e.an.length|0)>0;){var i=e.an.shift();Po().cs(i)}}))):(e.an.length|0)>0&&new mo(new Q((t=>{for(;(e.an.length|0)>0;)Po().cs(e.an.shift())})))}function So(){this.P=!1,this.bu=null,this.an=null,wo=this,this.P=!1,this.bu=as().al(W().i(new(H.r()).C([]))),this.an=as().al(W().i(new(go.r()).C([])))}F=So.prototype=new I,F.constructor=So;function Co(){}Co.prototype=F,new L().i(So,`com.raquo.airstream.core.Transaction$onStart$`,{bd:1});var wo;function To(){return wo||=new So,wo}function Eo(e,t){return e.ao.get(t)}function Do(e,t){e.bv.unshift(t)}function Oo(e){return e.bv.shift()}function ko(e,t,n){var r=Eo(e,t),i=r===void 0,a=r===void 0?as().al(W().i(new(go.r()).C([]))):r;a.push(n),i&&e.ao.set(t,a)}function Ao(e,t){var n=Eo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ao.delete(t),i}}function jo(){this.bv=null,this.ao=null,No=this,this.bv=as().al(W().i(new(go.r()).C([]))),this.ao=new Map}F=jo.prototype=new I,F.constructor=jo;function Mo(){}Mo.prototype=F,F.cs=(function(e){var t=this.br();t===void 0?(Do(this,e),bo().eY(e),this.ga(e)):ko(this,t,e)}),F.ga=(function(e){for(var t=e;;){var n=this.br(),r=t;if(!(n!==void 0&&U().B(r,n)))throw _f(new J,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hd(t),t.bQ=bo().cR;var i=this.br();if(U().B(i,void 0))if((this.ao.size|0)>0){var a=new Nd(0);throw this.ao.forEach((e=>((t,n)=>{e.bb=e.bb+(t.length|0)|0}))(a)),_f(new J,`Transaction queue error: Stack cleared, but a total of `+a.bb+` children for `+(this.ao.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else bo().eY(i),t=i}}),F.hd=(function(e){for(var t=e;;){var n=Ao(this,t);if(U().B(n,void 0)){Oo(this);var r=this.br();if(!U().B(r,void 0))t=r;else return}else{Do(this,n);return}}}),F.br=(function(){return this.bv[0]}),new L().i(jo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{be:1});var No;function Po(){return No||=new jo,No}function Fo(e,t){var n=e.a6.indexOf(t)|0;if(n!==-1)e.a6.splice(n,1),e.H.e()||t.fg();else throw _f(new J,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Io(e){for(;(e.bw.length|0)>0;)Fo(e,e.bw.shift())}function Lo(e){this.cS=null,this.a6=null,this.aH=!1,this.bw=null,this.H=null,this.aI=0,this.cS=e,this.a6=as().al(W().i(new(Vo.r()).C([]))),this.aH=!0,this.bw=as().al(W().i(new(Vo.r()).C([]))),this.H=$(),this.aI=0}F=Lo.prototype=new I,F.constructor=Lo;function Ro(){}Ro.prototype=F,F.eH=(function(){if(this.H.e()){var e=To(),t=(()=>{var e=new pu(this.cS);this.H=new dh(e),this.aH=!1,this.aI=0;for(var t=0,n=this.a6.length|0;t<n;){var r=t+this.aI|0;this.a6[r].ff(e),t=1+t|0}Io(this),this.aH=!0,this.aI=0});if(To(),e.P)t();else{e.P=!0;try{t()}finally{e.P=!1,xo(e)}}}else throw _f(new J,`Can not activate `+this+`: it is already active`)}),F.g4=(function(){if(this.H.e())throw _f(new J,`Can not deactivate DynamicOwner: it is not active`);this.aH=!1;for(var e=this.a6,t=0,n=e.length|0;t<n;)e[t].fg(),t=1+t|0;Io(this);var r=this.H;r.e()||r.y().gP(),Io(this),this.aH=!0,this.H=$()}),F.fO=(function(e,t){t?(this.aI=1+this.aI|0,this.a6.unshift(e)):this.a6.push(e);var n=this.H;if(!n.e()){var r=n.y();e.ff(r)}}),F.hi=(function(e){this.aH?Fo(this,e):this.bw.push(e)}),new L().i(Lo,`com.raquo.airstream.ownership.DynamicOwner`,{bf:1});function zo(e,t,n){this.bx=null,this.cT=null,this.by=null,this.bx=e,this.cT=t,this.by=$(),e.fO(this,n)}F=zo.prototype=new I,F.constructor=zo;function Bo(){}Bo.prototype=F,F.bN=(function(){this.bx.hi(this)}),F.ff=(function(e){var t=To(),n=(()=>{this.by=this.cT.h(e)});if(To(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,xo(t)}}}),F.fg=(function(){var e=this.by;e.e()||(e.y().bN(),this.by=$())});var Vo=new L().i(zo,`com.raquo.airstream.ownership.DynamicSubscription`,{bg:1});function Ho(){}F=Ho.prototype=new I,F.constructor=Ho;function Uo(){}Uo.prototype=F,F.hF=(function(e,t,n){return new zo(e,new Q((e=>new dh(t.h(e)))),n)}),F.hw=(function(e,t,n){return new zo(e,new Q((e=>(t.h(e),$()))),n)}),new L().i(Ho,`com.raquo.airstream.ownership.DynamicSubscription$`,{bh:1});var Wo;function Go(){return Wo||=new Ho,Wo}function Ko(e){e.aJ=as().al(W().i(new($o.r()).C([])))}function qo(e){for(var t=e.aJ,n=0,r=t.length|0;n<r;)Xo(t[n]),n=1+n|0;e.aJ.length=0}function Jo(e,t){var n=e.aJ.indexOf(t)|0;if(n!==-1)e.aJ.splice(n,1);else throw _f(new J,`Can not remove Subscription from Owner: subscription not found.`)}function Yo(e,t){e.aJ.push(t)}function Xo(e){if(!e.bT)e.cV.aD(),e.bT=!0;else throw _f(new J,`Can not kill Subscription: it was already killed.`)}function Zo(e,t){this.cW=null,this.cV=null,this.bT=!1,this.cW=e,this.cV=t,this.bT=!1,e.hb(this)}F=Zo.prototype=new I,F.constructor=Zo;function Qo(){}Qo.prototype=F,F.bN=(function(){Xo(this),Jo(this.cW,this)});var $o=new L().i(Zo,`com.raquo.airstream.ownership.Subscription`,{bk:1});function es(e,t){this.cX=null,this.cY=null,this.a7=null,this.ap=!1,this.cX=e,this.cY=t,this.a7=$(),this.ap=!1}F=es.prototype=new I,F.constructor=es;function ts(){}ts.prototype=F,F.gM=(function(){var e=this.a7;return!e.e()&&!e.y().bx.H.e()}),F.hq=(function(e){if(this.ap)throw _f(new J,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a7;if(t.e())var n=!1;else var n=e===t.y().bx;if(!n){this.gM()&&!e.H.e()&&(this.ap=!0);var r=this.a7;r.e()||(r.y().bN(),this.a7=$()),this.a7=new dh(Go().hF(e,new Q((e=>(this.ap||this.cX.aD(),new Zo(e,new Op((()=>{this.ap||this.cY.aD()})))))),!1)),this.ap=!1}}),F.g0=(function(){if(this.ap)throw _f(new J,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a7;e.e()||e.y().bN(),this.a7=$()}),new L().i(es,`com.raquo.airstream.ownership.TransferableSubscription`,{bl:1});function ns(){}F=ns.prototype=new I,F.constructor=ns;function rs(){}rs.prototype=F,F.al=(function(e){return[...ou().hD(e)]}),new L().i(ns,`com.raquo.ew.JsArray$`,{bm:1});var is;function as(){return is||=new ns,is}function os(){}F=os.prototype=new I,F.constructor=os;function ss(){}ss.prototype=F,F.gs=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new L().i(os,`com.raquo.ew.JsArray$RichJsArray$`,{bn:1});var cs;function ls(){return cs||=new os,cs}function us(){this.cZ=null,fs=this,document.createElement(`template`),this.g3(Z().u.hx().hy()),this.cZ=RegExp(` `,`g`)}F=us.prototype=new I,F.constructor=us;function ds(){}ds.prototype=F,F.fS=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof ad?e:new og(e);if(n instanceof og&&n.S instanceof DOMException)return!1;throw n instanceof og?n.S:n}}),F.gN=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(U().B(t,r))return!0;n=r}}),F.g2=(function(e){return document.createElement(e.cD())}),F.gz=(function(e,t){var n=this.gA(e,t);return n===void 0?void 0:t.aK.bJ(n)}),F.gA=(function(e,t){var n=e.Q.getAttributeNS(null,t.a8);return n===null?void 0:n}),F.fm=(function(e,t,n){this.hn(e,t,t.aK.bn(n))}),F.hn=(function(e,t,n){n===null?this.hh(e,t):e.Q.setAttribute(t.a8,n)}),F.hh=(function(e,t){e.Q.removeAttribute(t.a8)}),F.ho=(function(e,t,n){this.hp(e,t,t.dw.bn(n))}),F.hp=(function(e,t,n){e.Q[t.dx]=n}),F.fn=(function(e,t,n){var r=e.Q,i=t.ar,a=t.as,o=n===null?null:n;o===null?(a.V(new Q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.V(new Q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),F.g3=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dH)}),F.gD=(function(e,t){var n=this.gE(e,t);return n===void 0?void 0:t.bX.bJ(n)}),F.gE=(function(e,t){var n=e.cJ(),r=t.bA,i=n.getAttributeNS(r.e()?null:r.y(),t.bY);return i===null?void 0:i}),F.hr=(function(e,t,n){this.hs(e,t,t.bX.bn(n))}),F.hs=(function(e,t,n){if(n===null)this.hj(e,t);else{var r=t.bA;if(r.e())e.cJ().setAttribute(t.bz,n);else{var i=r.y();e.cJ().setAttributeNS(i,t.bz,n)}}}),F.hj=(function(e,t){var n=e.cJ(),r=t.bA;n.removeAttributeNS(r.e()?null:r.y(),t.bY)}),F.g6=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new L_(this.g5(r),n);r=i,n=a}}),F.g5=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cZ,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new L().i(us,`com.raquo.laminar.DomApi$`,{bo:1});var fs;function ps(){return fs||=new us,fs}function ms(e,t,n){this.bV=null,this.d0=null,this.bU=null,this.bV=e,this.d0=t,this.bU=n}F=ms.prototype=new I,F.constructor=ms;function hs(){}hs.prototype=F,F.V=(function(e){this.bV===null?this.bU===null?Nl().gt(this.d0,e):ls().gs(this.bU,Uf().gw(e)):this.bV.V(e)}),new L().i(ms,`com.raquo.laminar.Seq`,{bp:1});function gs(){}F=gs.prototype=new I,F.constructor=gs;function _s(){}_s.prototype=F,new L().i(gs,`com.raquo.laminar.Seq$`,{bq:1});var vs;function ys(){return vs||=new gs,vs}function bs(e){po(),Hd()}function xs(e){e.fq=Gs()}function Ss(e){Cs(e,new Q((e=>{e.dy.Q.focus()})))}function Cs(e,t){return new ju(new Q((e=>{var n=new jd(!e.aL.H.e()),r=new Q((e=>{n.bH?n.bH=!1:t.h(e)}));Go().hw(e.aL,new Q((e=>(t=>{r.h(new Bs(e,t))}))(e)),!1)})),Gs())}function ws(){this.aq=null,this.bW=null,Es=this,this.aq=new _u(Ds()),new _u(Ds()),new _u(Ds()),this.bW=new hu}F=ws.prototype=new I,F.constructor=ws;function Ts(){}Ts.prototype=F,new L().i(ws,`com.raquo.laminar.codecs.package$`,{by:1});var Es;function Ds(){return Es||=new ws,Es}function Os(e){e.fr=ks(e,`class`,` `)}function ks(e,t,n){var r=Su(new Cu,t,Ds().aq);return new bu(r.a8,new Q((e=>{var t=ps().gz(e,r);return t===void 0?``:t})),new jp(((e,t)=>{ps().fm(e,r,t)})),n)}function As(e){e.fp=js(e,`class`,` `)}function js(e,t,n){var r=new Du(t,Ds().aq,$());return new bu(r.bz,new Q((e=>{var t=ps().gD(e,r);return t===void 0?``:t})),new jp(((e,t)=>{ps().hr(e,r,t)})),n)}function Ms(e,t){this.dv=null,this.du=null,this.dv=e,this.du=t}F=Ms.prototype=new I,F.constructor=Ms;function Ns(){}Ns.prototype=F,F.k=(function(e){return new Wd(this.dv,this.du.h(e),new Np(((e,t,n)=>{ps().fn(e,t,n)})))}),new L().i(Ms,`com.raquo.laminar.keys.DerivedStyleProp`,{bY:1});function Ps(){}F=Ps.prototype=new I,F.constructor=Ps;function Fs(){}Fs.prototype=F;function Is(){this.fs=null,this.ft=null,this.fu=null,this.fv=null,this.fs=`http://www.w3.org/2000/svg`,this.ft=`http://www.w3.org/1999/xlink`,this.fu=`http://www.w3.org/XML/1998/namespace`,this.fv=`http://www.w3.org/2000/xmlns/`}F=Is.prototype=new I,F.constructor=Is;function Ls(){}Ls.prototype=F,F.gV=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new im(e)}}),new L().i(Is,`com.raquo.laminar.keys.SvgAttr$`,{c1:1});var Rs;function zs(){return Rs||=new Is,Rs}function Bs(e,t){this.dy=null,this.dy=e}F=Bs.prototype=new I,F.constructor=Bs;function Vs(){}Vs.prototype=F,new L().i(Bs,`com.raquo.laminar.lifecycle.MountContext`,{c2:1});var R=new L().i(1,`com.raquo.laminar.modifiers.Modifier`,{X:1});function Hs(){this.fw=null,Ws=this,this.fw=new ku}F=Hs.prototype=new I,F.constructor=Hs;function Us(){}Us.prototype=F,new L().i(Hs,`com.raquo.laminar.modifiers.Modifier$`,{c4:1});var Ws;function Gs(){return Ws||=new Hs,Ws}function Ks(){}F=Ks.prototype=new I,F.constructor=Ks;function qs(){}qs.prototype=F,F.cu=(function(e,t,n){var r=new dh(e);Ip(t,r),n!==void 0&&n.ig(e,t);var i=ps().fS(e.cI(),t.Q);return i&&Lp(t,r),i}),new L().i(Ks,`com.raquo.laminar.nodes.ParentNode$`,{cb:1});var Js;function Ys(){return Js||=new Ks,Js}function Xs(){Qs=this,as().al(W().hI(new $a(new Int32Array([0]))))}F=Xs.prototype=new I,F.constructor=Xs;function Zs(){}Zs.prototype=F,F.fI=(function(){return new Q((e=>void 0))}),new L().i(Xs,`com.raquo.laminar.tags.CustomHtmlTag$`,{cg:1});var Qs;function $s(){return Qs||=new Xs,Qs}function ec(){}F=ec.prototype=new I,F.constructor=ec;function tc(){}tc.prototype=F,F.eG=(function(e){return Z().u.cx().bI(W().i(new(R.r()).C([Z().u.cw().cy(),Z().u.f9().eX(),Z().u.cB().cH().k(8),Ud(Z().u,e,Iu())])))}),new L().i(ec,`doc.ExampleGroups$package$`,{ci:1});var nc;function rc(){return nc||=new ec,nc}function ic(){}F=ic.prototype=new I,F.constructor=ic;function ac(){}ac.prototype=F,F.fJ=(function(e){return Z().u.cx().bI(W().i(new(R.r()).C([Z().u.cw().cy(),Z().u.fa().fo(),Z().u.fP().fZ(),Z().u.cB().cH().k(16),Ud(Z().u,e,Iu())])))}),new L().i(ic,`doc.Examples$package$`,{cj:1});var oc;function sc(){return oc||=new ic,oc}function cc(){}F=cc.prototype=new I,F.constructor=cc;function lc(){}lc.prototype=F,F.fL=(function(e){return Z().u.cx().bI(W().i(new(R.r()).C([Z().u.cw().cy(),Z().u.fa().fo(),Z().u.f9().eX(),Z().u.cB().cH().k(16),Ud(Z().u,e,Iu())])))}),new L().i(cc,`doc.VerticalExamples$package$`,{ck:1});var uc;function dc(){return uc||=new cc,uc}function fc(){}F=fc.prototype=new I,F.constructor=fc;function pc(){}pc.prototype=F,F.fQ=(function(){hc().gg(),hc().gi(),hc().gj(),hc().gk(),hc().gl(),hc().gm(),hc().gn(),hc().go(),hc().gp(),hc().gh()}),F.gg=(function(){var e=document.querySelector(`#example1`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([])))))}),F.gi=(function(){var e=document.querySelector(`#example2`);if(!xd().Y(e).e()){Z();var t=[Ql().cF(W().i(new(dm.r()).C([new lm(`color`,`#2563eb`),new lm(`label`,`Ocean blue`)]))),Ql().cF(W().i(new(dm.r()).C([new lm(`color`,`#16a34a`),new lm(`label`,`Forest green`)]))),Ql().cF(W().i(new(dm.r()).C([new lm(`color`,`#dc2626`),new lm(`label`,`Brick red`)])))];new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.C().k(`Accent color`))),new X((e=>e.hA().k(t)))])),W().i(new(R.r()).C([]))))}}),F.gj=(function(){var e=document.querySelector(`#example3`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.C().k(`Color`))),new X((e=>e.hc().fX()))])),W().i(new(R.r()).C([])))))}),F.gk=(function(){var e=document.querySelector(`#example4`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>(q().b0(),Z().u).b1().k(`#4a90e2`))),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([])))))}),F.gl=(function(){var e=document.querySelector(`#example5`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>(q().b0(),Z().u).b1().k(`#f5a623ff`))),new X((e=>e.h8().k(!0))),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([])))))}),F.gm=(function(){var e=document.querySelector(`#example6`);xd().Y(e).e()||(Z(),new Kd(e,rc().eG(W().i(new(Ym.r()).C([dc().fL(W().i(new(Ym.r()).C([q().A(W().i(new(H.r()).C([new X((e=>e.bM().gH())),new X((e=>(q().b0(),Z().u).b1().k(`#4a90e2`))),new X((e=>e.C().k(`Pick a hex color`)))])),W().i(new(R.r()).C([]))),q().A(W().i(new(H.r()).C([new X((e=>e.bM().hk())),new X((e=>(q().b0(),Z().u).b1().k(`rgb(80, 227, 194)`))),new X((e=>e.C().k(`Pick an RGB color`)))])),W().i(new(R.r()).C([]))),q().A(W().i(new(H.r()).C([new X((e=>e.bM().gJ())),new X((e=>(q().b0(),Z().u).b1().k(`hsl(290, 87%, 47%)`))),new X((e=>e.C().k(`Pick an HSL color`)))])),W().i(new(R.r()).C([]))),q().A(W().i(new(H.r()).C([new X((e=>e.bM().gK())),new X((e=>(q().b0(),Z().u).b1().k(`hsv(55, 89%, 97%)`))),new X((e=>e.C().k(`Pick an HSV color`)))])),W().i(new(R.r()).C([])))])))])))))}),F.gn=(function(){var e=document.querySelector(`#example7`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.C().k(`Select a color`))),new X((e=>e.hz().k(`#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;`)))])),W().i(new(R.r()).C([])))))}),F.go=(function(){var e=document.querySelector(`#example8`);xd().Y(e).e()||(Z(),new Kd(e,rc().eG(W().i(new(Ym.r()).C([sc().fJ(W().i(new(Ym.r()).C([q().A(W().i(new(H.r()).C([new X((e=>e.cM().hv())),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([]))),q().A(W().i(new(H.r()).C([new X((e=>e.cM().gT())),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([]))),q().A(W().i(new(H.r()).C([new X((e=>e.cM().gQ())),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([])))])))])))))}),F.gp=(function(){var e=document.querySelector(`#example9`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.g8().k(!0))),new X((e=>e.C().k(`Select a color`)))])),W().i(new(R.r()).C([])))))}),F.gh=(function(){var e=document.querySelector(`#example10`);xd().Y(e).e()||(Z(),new Kd(e,q().A(W().i(new(H.r()).C([new X((e=>e.C().k(`Select a color`))),new X((e=>e.gI().k(`Choose a color with appropriate contrast!`)))])),W().i(new(R.r()).C([])))))}),new L().i(fc,`examples.colorPicker.Main$package$`,{cl:1});var mc;function hc(){return mc||=new fc,mc}function gc(e){try{hc().fQ()}catch(e){throw e}}function _c(){this.fy=!1,this.b2=null,this.bC=null,this.eg=null,this.c8=!1,this.fx=0,this.fA=0,this.fz=null,yc=this,this.fy=!0,this.b2=new ArrayBuffer(8),this.bC=new Int32Array(this.b2,0,2),new Float32Array(this.b2,0,2),this.eg=new Float64Array(this.b2,0,1),this.bC[0]=16909060,this.c8=(new Int8Array(this.b2,0,8)[0]|0)==1,this.fx=this.c8?0:1,this.fA=this.c8?1:0,this.fz=null}F=_c.prototype=new I,F.constructor=_c;function vc(){}vc.prototype=F,F.cE=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.eg[0]=e,(this.bC[0]|0)^(this.bC[1]|0))}),new L().i(_c,`java.lang.FloatingPointBits$`,{cB:1});var yc;function bc(){return yc||=new _c,yc}function xc(e,t){for(var n=z().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Sc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Zu(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Zu(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new($u.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Sc(e,t){var n=z().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=z().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=z().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=z().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=z().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Cc(e,c[1]),Ac(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Cc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Cc(e,d[1]),`<clinit>`]}function Cc(e,t){var n=Tc(e);if(nl().em.call(n,t))var r=Tc(e)[t];else var r=Vc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function wc(e){if(!((1&e.L)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ca=t,e.L=(1|e.L)<<24>>24}return e.ca}function Tc(e){return(1&e.L)<<24>>24?e.ca:wc(e)}function Ec(e){if(!((2&e.L)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cb=t,e.L=(2|e.L)<<24>>24}return e.cb}function Dc(e){return(2&e.L)<<24>>24?e.cb:Ec(e)}function Oc(e){return(4&e.L)<<24>>24||(e.c9=Object.keys(Dc(e)),e.L=(4|e.L)<<24>>24),e.c9}function kc(e){return(4&e.L)<<24>>24?e.c9:Oc(e)}function Ac(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function jc(e,t){return t?t.arguments&&t.stack?Mc(e,t):t.stack&&t.sourceURL?Fc(e,t):t.stack&&t.number?Pc(e,t):t.stack&&t.fileName?Nc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ic(e,t):Lc(e,t):Ic(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Rc(e,t):zc(e,t):t.stack&&!t.fileName?Mc(e,t):Bc(e,t):[]}function Mc(e,t){return(t.stack+`
`).replace(z().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(z().F(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(z().F(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(z().F(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(z().F(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Nc(e,t){return t.stack.replace(z().F(`(?:\\n@:0)?\\s+$`,`m`),``).replace(z().F(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Pc(e,t){return t.stack.replace(z().F(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(z().F(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(z().F(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Fc(e,t){return t.stack.replace(z().F(`\\[native code\\]\\n`,`m`),``).replace(z().F(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(z().F(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ic(e,t){for(var n=z().F(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Lc(e,t){for(var n=z().F(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Rc(e,t){for(var n=z().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function zc(e,t){for(var n=z().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(z().W(`<anonymous function: (\\S+)>`),`$1`).replace(z().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Bc(e,t){return[]}function Vc(e,t,n){for(;;)if(t<(kc(e).length|0)){var r=kc(e)[t];if(n.startsWith(r))return``+Dc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Hc(){this.ca=null,this.cb=null,this.c9=null,this.L=0}F=Hc.prototype=new I,F.constructor=Hc;function Uc(){}Uc.prototype=F,F.gq=(function(e){return xc(this,jc(this,e))}),new L().i(Hc,`java.lang.StackTrace$`,{cI:1});var Wc;function Gc(){return Wc||=new Hc,Wc}function Kc(){}F=Kc.prototype=new I,F.constructor=Kc;function qc(){}qc.prototype=F,F.W=(function(e){return new RegExp(e)}),F.F=(function(e,t){return new RegExp(e,t)}),new L().i(Kc,`java.lang.StackTrace$StringRE$`,{cJ:1});var Jc;function z(){return Jc||=new Kc,Jc}function Yc(){this.ei=null,this.fB=null,Zc=this,this.ei=new cg(!1),this.fB=new cg(!0)}F=Yc.prototype=new I,F.constructor=Yc;function Xc(){}Xc.prototype=F,new L().i(Yc,`java.lang.System$Streams$`,{cO:1});var Zc;function Qc(){return Zc||=new Yc,Zc}function $c(){this.em=null,tl=this,this.em=Object.prototype.hasOwnProperty}F=$c.prototype=new I,F.constructor=$c;function el(){}el.prototype=F,new L().i($c,`java.lang.Utils$Cache$`,{cQ:1});var tl;function nl(){return tl||=new $c,tl}function rl(e,t){return e===t}function il(e){return 0}function al(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ao)}var ol=new L().i(0,`java.lang.Void`,{ao:1},(e=>e===void 0));function sl(e,t){throw new Gp(`argument type mismatch`)}function cl(){}F=cl.prototype=new I,F.constructor=cl;function ll(){}ll.prototype=F,F.aW=(function(e){return e instanceof qa||e instanceof Ya||e instanceof Xa||e instanceof Za||e instanceof Qa||e instanceof $a||e instanceof eo||e instanceof to||e instanceof no?e.a.length:sl(this,e)}),new L().i(cl,`java.lang.reflect.Array$`,{cR:1});var ul;function dl(){return ul||=new cl,ul}function fl(){}F=fl.prototype=new I,F.constructor=fl;function pl(){}pl.prototype=F,F.f5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),F.f4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.f6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.f1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.f0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.f7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.f2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),F.f3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new L().i(fl,`java.util.Arrays$`,{cS:1});var ml;function B(){return ml||=new fl,ml}function V(e,t){this.c=0,this.d=0,this.c=e,this.d=t}F=V.prototype=new I,F.constructor=V;function hl(){}hl.prototype=F,F.j=(function(e){return e instanceof V&&this.c===e.c&&this.d===e.d}),F.p=(function(){return this.c^this.d}),F.t=(function(){return Cl().fk(this.c,this.d)}),F.il=(function(){return this.c}),F.ik=(function(){return Cl().fj(this.c,this.d)}),F.ij=(function(){return Cl().bq(this.c,this.d)}),F.i0=(function(){return this.c<<24>>24}),F.ih=(function(){return this.c<<16>>16}),F.ia=(function(){return this.c}),F.ib=(function(){return this}),F.i6=(function(){return Cl().fj(this.c,this.d)}),F.i4=(function(){return Cl().bq(this.c,this.d)}),F.i2=(function(e){return Cl().fh(this.c,this.d,e.c,e.d)}),F.i1=(function(e){return Cl().fh(this.c,this.d,e.c,e.d)}),F.i5=(function(e){return this.c===e.c&&this.d===e.d}),F.ie=(function(e){return!(this.c===e.c&&this.d===e.d)}),F.hS=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),F.hT=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),F.hO=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),F.hP=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),F.io=(function(){return new V(~this.c,~this.d)}),F.hM=(function(e){return new V(this.c|e.c,this.d|e.d)}),F.hL=(function(e){return new V(this.c&e.c,this.d&e.d)}),F.hZ=(function(e){return new V(this.c^e.c,this.d^e.d)}),F.hU=(function(e){var t=this.c;return new V(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),F.hR=(function(e){var t=this.d;return new V(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),F.hQ=(function(e){var t=this.d;return new V(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),F.im=(function(){var e=this.c,t=this.d;return new V(-e|0,e===0?-t|0:~t)}),F.hX=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new V(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),F.hV=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new V(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),F.hY=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new V(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),F.hN=(function(e){var t=Cl();return new V(t.g9(this.c,this.d,e.c,e.d),t.r)}),F.hW=(function(e){var t=Cl();return new V(t.hg(this.c,this.d,e.c,e.d),t.r)}),new L().i(V,`org.scalajs.linker.runtime.RuntimeLong`,{ap:1});function gl(e,t,n){return-2097152&n?yl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function _l(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.r=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.r=0,n>>>o|0}else return yl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.r=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.r=s/4294967296|0,s|0}}function vl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.r=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.r=n&(-1+i|0),t):yl(e,t,n,r,i,1)|0;if(-2097152&i)return e.r=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.r=a/4294967296|0,a|0}function yl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,b=d,re=ee-ne|0,ie=(-2147483648^re)>(-2147483648^ee)?-1+(te-b|0)|0:te-b|0;f=re,p=ie,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ae=u,oe=d,se=ae>>>1|0|oe<<31,ce=oe>>>1|0;u=se,d=ce}var le=f,x=p;if(x===i?(-2147483648^le)>=(-2147483648^r):(-2147483648^x)>=(-2147483648^i)){var ue=f,de=4294967296*p+ +(ue>>>0),fe=4294967296*i+ +(r>>>0);if(a!==1){var pe=de/fe,me=pe|0,he=pe/4294967296|0,ge=m,_e=h,ve=ge+me|0,ye=(-2147483648^ve)<(-2147483648^ge)?1+(_e+he|0)|0:_e+he|0;m=ve,h=ye}if(a!==0){var be=de%fe;f=be|0,p=be/4294967296|0}}if(a===0)return e.r=h,m;if(a===1)return e.r=p,f;var xe=m,Se=4294967296*h+ +(xe>>>0),Ce=``+f,we=Ce.length;return``+Se+`000000000`.substring(we)+Ce}function bl(){this.r=0}F=bl.prototype=new I,F.constructor=bl;function xl(){}xl.prototype=F,F.fk=(function(e,t){return t===e>>31?``+e:t<0?`-`+gl(this,-e|0,e===0?-t|0:~t):gl(this,e,t)}),F.bq=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),F.fj=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),F.i8=(function(e){return new V(e,e>>31)}),F.i7=(function(e){return new V(this.fi(e),this.r)}),F.fi=(function(e){if(e<-0x8000000000000000)return this.r=-2147483648,0;if(e>=0x8000000000000000)return this.r=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.r=e<0&&t!==0?-1+n|0:n,t}),F.fh=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),F.g9=(function(e,t,n,r){if((n|r)===0)throw new Up(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.r=0,-2147483648;var i=ja(e,n);return this.r=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=-1,-1;else return this.r=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=_l(this,a,o,s,c);if((t^r)>=0)return l;var u=this.r;return this.r=l===0?-u|0:~u,-l|0}}),F.hg=(function(e,t,n,r){if((n|r)===0)throw new Up(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Ma(e,n);return this.r=i>>31,i}else return this.r=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=0,0;else return this.r=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=vl(this,a,o,s,c);if(t<0){var u=this.r;return this.r=l===0?-u|0:~u,-l|0}else return l}}),new L().i(bl,`org.scalajs.linker.runtime.RuntimeLong$`,{cU:1});var Sl;function Cl(){return Sl||=new bl,Sl}var H=new L().i(1,`scala.Function1`,{e:1});function wl(){}F=wl.prototype=new I,F.constructor=wl;function Tl(){}Tl.prototype=F;function El(){this.ep=null,this.eo=null,Ol=this,this.ep=new X((e=>kl().ep)),this.eo=new yp}F=El.prototype=new I,F.constructor=El;function Dl(){}Dl.prototype=F,new L().i(El,`scala.PartialFunction$`,{d5:1});var Ol;function kl(){return Ol||=new El,Ol}function Al(){this.es=null,Ml=this,this.es=new X((e=>Nl().es))}F=Al.prototype=new I,F.constructor=Al;function jl(){}jl.prototype=F,F.gt=(function(e,t){var n=dl().aW(e),r=0;if(e instanceof qa)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof $a)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof no)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof eo)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof to)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Xa)for(;r<n;)t.h(Ua(e.a[r])),r=1+r|0;else if(e instanceof Za)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Qa)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Ya)for(;r<n;)t.h(e.a[r]),r=1+r|0;else throw new im(e)}),new L().i(Al,`scala.collection.ArrayOps$`,{dc:1});var Ml;function Nl(){return Ml||=new Al,Ml}function Pl(e,t){for(var n=e.n();n.s();)t.h(n.g())}function Fl(e,t,n,r){return e.z()===0?``+t+r:e.bd(W_(new G_),t,n,r).K.q}function Il(e,t,n,r,i){var a=t.K;n.length!==0&&(a.q=``+a.q+n);var o=e.n();if(o.s()){var s=o.g();for(a.q=``+a.q+s;o.s();){a.q=``+a.q+r;var c=o.g();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function Ll(e,t){this.ew=null,this.b8=null,this.ew=e,this.b8=t}F=Ll.prototype=new I,F.constructor=Ll;function Rl(){}Rl.prototype=F,F.gG=(function(){return this.ew.aD().n()}),new L().i(Ll,`scala.collection.Iterator$ConcatIteratorCell`,{dv:1});function zl(){}F=zl.prototype=new I,F.constructor=zl;function Bl(){}Bl.prototype=F,F.B=(function(e,t){return e===t||(Xu(e)?this.gf(e,t):e instanceof Ta?this.gd(e,t):e===null?t===null:Oa(e,t))}),F.gf=(function(e,t){if(Xu(t))return this.ge(e,t);if(t instanceof Ta){if(typeof e==`number`)return+e===t.c;if(e instanceof V){var n=Ga(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Oa(e,t)}else return e===null?t===null:Oa(e,t)}),F.ge=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof V){var r=Ga(t);return n===Cl().bq(r.c,r.d)}else return!1}else if(e instanceof V){var i=Ga(e),a=i.c,o=i.d;if(t instanceof V){var s=Ga(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Cl().bq(a,o)===u}else return!1}else return e===null?t===null:Oa(e,t)}),F.gd=(function(e,t){if(t instanceof Ta)return e.c===t.c;if(Xu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof V){var n=Ga(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Oa(t,e)}else return e===null&&t===null}),new L().i(zl,`scala.runtime.BoxesRunTime$`,{e6:1});var Vl;function U(){return Vl||=new zl,Vl}var Hl=new L().i(0,`scala.runtime.Null$`,{e9:1});function Ul(){}F=Ul.prototype=new I,F.constructor=Ul;function Wl(){}Wl.prototype=F,F.aU=(function(e,t){if(e instanceof qa||e instanceof $a||e instanceof no||e instanceof eo||e instanceof to)return e.a[t];if(e instanceof Xa)return Ua(e.a[t]);if(e instanceof Za||e instanceof Qa||e instanceof Ya)return e.a[t];throw e===null?new Xp:new im(e)}),F.fV=(function(e,t,n){if(e instanceof qa)e.a[t]=n;else if(e instanceof $a)e.a[t]=n|0;else if(e instanceof no)e.a[t]=+n;else if(e instanceof eo)e.a[t]=Ga(n);else if(e instanceof to)e.a[t]=Math.fround(n);else if(e instanceof Xa)e.a[t]=Wa(n);else if(e instanceof Za)e.a[t]=n|0;else if(e instanceof Qa)e.a[t]=n|0;else if(e instanceof Ya)e.a[t]=!!n;else if(e===null)throw new Xp;else throw new im(e)}),F.fM=(function(e){return Fl(e.aE(),e.a4()+`(`,`,`,`)`)}),F.i=(function(e){return e===null?null:e.a.length===0?Sh(Eh()):new s_(e)}),F.hI=(function(e){return e===null?null:new r_(e)}),new L().i(Ul,`scala.runtime.ScalaRunTime$`,{ea:1});var Gl;function W(){return Gl||=new Ul,Gl}function Kl(){}F=Kl.prototype=new I,F.constructor=Kl;function ql(){}ql.prototype=F,F.b=(function(e,t){var n=this.bO(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),F.bO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),F.m=(function(e,t){return this.fW(e^t)}),F.fW=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),F.aY=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),F.U=(function(e){var t=Na(e);if(t===e)return t;var n=Cl(),r=n.fi(e),i=n.r;return Cl().bq(r,i)===e?r^i:bc().cE(e)}),F.x=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof V){var t=Ga(e);return this.aY(new V(t.c,t.d))}else return ka(e)}),F.bp=(function(e){throw Kp(new qp,``+e)}),new L().i(Kl,`scala.runtime.Statics$`,{ec:1});var Jl;function G(){return Jl||=new Kl,Jl}function Yl(){}F=Yl.prototype=new I,F.constructor=Yl;function Xl(){}Xl.prototype=F,F.cF=(function(e){var t={};return e.V(new X((e=>{t[e.aQ]=e.aR}))),t}),new L().i(Yl,`scala.scalajs.js.special.package$`,{ei:1});var Zl;function Ql(){return Zl||=new Yl,Zl}function $l(){}F=$l.prototype=new I,F.constructor=$l;function eu(){}eu.prototype=F,F.ht=(function(e,t){return setTimeout((()=>{t.aD()}),e)}),new L().i($l,`scala.scalajs.js.timers.package$`,{ej:1});var tu;function nu(){return tu||=new $l,tu}function ru(){}F=ru.prototype=new I,F.constructor=ru;function iu(){}iu.prototype=F,F.hD=(function(e){var t=[];return e.V(new X((e=>t.push(e)|0))),t}),new L().i(ru,`scala.scalajs.runtime.Compat$`,{es:1});var au;function ou(){return au||=new ru,au}function su(){}F=su.prototype=new I,F.constructor=su;function cu(){}cu.prototype=F,F.hu=(function(e){var t=`Illegal command line`+(e.fe()===0?``:e.fe()===1?` after first argument`:` after `+e.fe()+` arguments`)+`: `+e.ic();pd().ha().gO(t+`
`)}),new L().i(su,`scala.util.CommandLineParser$`,{eu:1});function lu(e){this.cr=null,this.cr=e}F=lu.prototype=new I,F.constructor=lu;function uu(){}uu.prototype=F,F.t=(function(){return`DynamicVariable(`+this.cr+`)`}),new L().i(lu,`scala.util.DynamicVariable`,{ew:1});function du(){}F=du.prototype=new I,F.constructor=du;function fu(){}fu.prototype=F,F.b=(function(e,t){var n=this.bO(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),F.bO=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),F.m=(function(e,t){return this.G(e^t)}),F.G=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),F.cG=(function(e,t,n){var r=e.a2();if(r===0)return ih(e.a4());var i=t;n||(i=this.b(i,ih(e.a4())));for(var a=0;a<r;)i=this.b(i,G().x(e.a3(a))),a=1+a|0;return this.m(i,r)}),F.hE=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.s();){var s=o.g(),c=G().x(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bO(l,a),this.m(l,i)}),F.h9=(function(e,t){var n=e.n(),r=t;if(!n.s())return this.m(r,0);var i=n.g();if(!n.s())return this.m(this.b(r,G().x(i)),1);var a=n.g(),o=G().x(i);r=this.b(r,o);for(var s=r,c=G().x(a),l=c-o|0,u=2;n.s();){r=this.b(r,c);var d=G().x(n.g());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.s();)r=this.b(r,G().x(n.g())),u=1+u|0;return this.m(r,u)}c=d,u=1+u|0}return this.G(this.b(this.b(s,l),c))}),F.eL=(function(e,t){var n=t,r=dl().aW(e);switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,G().x(W().aU(e,0))),1);default:var i=G().x(W().aU(e,0));n=this.b(n,i);for(var a=n,o=G().x(W().aU(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().x(W().aU(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().x(W().aU(e,c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.he=(function(e,t,n,r){return this.G(this.b(this.b(this.b(r,e),t),n))}),F.gL=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,G().x(e.o(0))),1);default:var i=G().x(e.o(0));n=this.b(n,i);for(var a=n,o=G().x(e.o(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().x(e.o(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().x(e.o(c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.gR=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.e();){var l=c.a1(),u=c.X(),d=G().x(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.he(s,a,o,t):this.m(r,n)}),F.eU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eM=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eN=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eO=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,G().U(e.a[0])),1);default:var i=G().U(e.a[0]);n=this.b(n,i);for(var a=n,o=G().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().U(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eP=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,G().U(e.a[0])),1);default:var i=G().U(e.a[0]);n=this.b(n,i);for(var a=n,o=G().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=G().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,G().U(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eQ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eR=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:var i=n,a=e.a[0];return this.m(this.b(i,G().aY(new V(a.c,a.d))),1);default:var o=e.a[0],s=G().aY(new V(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=G().aY(new V(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=G().aY(new V(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.b(h,G().aY(new V(g.c,g.d))),f=1+f|0}return this.m(n,r)}u=m,f=1+f|0}return this.G(this.b(this.b(c,d),u))}}),F.eS=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.G(this.b(this.b(a,s),o))}}),F.eT=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.m(n,r)}a=0,s=1+s|0}return this.G(this.b(this.b(i,o),a))}});function pu(e){this.aJ=null,this.cU=null,this.bS=!1,this.cU=e,Ko(this),this.bS=!1}F=pu.prototype=new I,F.constructor=pu;function mu(){}mu.prototype=F,F.hb=(function(e){this.bS?(Xo(e),this.cU.aD()):Yo(this,e)}),F.gP=(function(){qo(this),this.bS=!0}),new L().i(pu,`com.raquo.airstream.ownership.OneTimeOwner`,{bi:1,bj:1});function hu(){}F=hu.prototype=new I,F.constructor=hu;function gu(){}gu.prototype=F,F.g7=(function(e){return e!==null}),F.gc=(function(e){return e?``:null}),F.bJ=(function(e){return this.g7(e)}),F.bn=(function(e){return this.gc(!!e)}),new L().i(hu,`com.raquo.laminar.codecs.package$$anon$1`,{bz:1,a2:1});function _u(e){if(e===null)throw new Xp}F=_u.prototype=new I,F.constructor=_u;function vu(){}vu.prototype=F,F.bn=(function(e){return e}),F.bJ=(function(e){return e}),new L().i(_u,`com.raquo.laminar.codecs.package$$anon$2`,{bA:1,a2:1});function yu(e){return new Ms(e,new Q((e=>e+`px`)))}function bu(e,t,n,r){}F=bu.prototype=new Fs,F.constructor=bu;function xu(){}xu.prototype=F,new L().i(bu,`com.raquo.laminar.keys.CompositeKey`,{bX:1,v:1});function Su(e,t,n){return e.a8=t,e.aK=n,e}function Cu(){this.a8=null,this.aK=null}F=Cu.prototype=new Fs,F.constructor=Cu;function wu(){}wu.prototype=F,F.k=(function(e){return new Wd(this,e,new Np(((e,t,n)=>{ps().fm(e,t,n)})))}),new L().i(Cu,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,v:1});function Tu(e,t){this.dx=null,this.dw=null,this.dx=e,this.dw=t}F=Tu.prototype=new Fs,F.constructor=Tu;function Eu(){}Eu.prototype=F,F.k=(function(e){return new Wd(this,e,new Np(((e,t,n)=>{ps().ho(e,t,n)})))}),new L().i(Tu,`com.raquo.laminar.keys.HtmlProp`,{bZ:1,v:1});function Du(e,t,n){this.bY=null,this.bX=null,this.bz=null,this.bA=null,this.bY=e,this.bX=t;var r=n.e()?$():new dh(n.y()+`:`+e);this.bz=r.e()?e:r.y(),this.bA=n.e()?$():new dh(zs().gV(n.y()))}F=Du.prototype=new Fs,F.constructor=Du;function Ou(){}Ou.prototype=F,new L().i(Du,`com.raquo.laminar.keys.SvgAttr`,{c0:1,v:1});function ku(){}F=ku.prototype=new I,F.constructor=ku;function Au(){}Au.prototype=F,F.aT=(function(e){}),new L().i(ku,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c5:1,X:1});function ju(e,t){if(this.dC=null,this.dC=e,t===null)throw new Xp}F=ju.prototype=new I,F.constructor=ju;function Mu(){}Mu.prototype=F,F.aT=(function(e){var t=To(),n=(()=>{this.dC.h(e)});if(To(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,xo(t)}}}),new L().i(ju,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c6:1,X:1});function Nu(){}F=Nu.prototype=new I,F.constructor=Nu;function Pu(){}Pu.prototype=F,new L().i(Nu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{c8:1,c7:1});var Fu;function Iu(){return Fu||=new Nu,Fu}function Lu(e){e.eZ(new Lo(new Op((()=>{throw _f(new J,`Attempting to use owner of unmounted element: `+Fl(ps().g6(e.cI(),(ps(),H_())),``,` > `,``))}))))}function Ru(e,t,n){return e.c1=t,e}function zu(){this.c1=null}F=zu.prototype=new I,F.constructor=zu;function Bu(){}Bu.prototype=F,F.cD=(function(){return this.c1}),F.bI=(function(e){var t=this.fY();return e.V(new Q((e=>{e.aT(t)}))),t}),F.fY=(function(){return new qm(this,ps().g2(this))}),new L().i(zu,`com.raquo.laminar.tags.HtmlTag`,{ad:1,a3:1});function Vu(e,t){this.dH=null,this.dH=e}F=Vu.prototype=new I,F.constructor=Vu;function Hu(){}Hu.prototype=F,new L().i(Vu,`com.raquo.laminar.tags.SvgTag`,{ch:1,a3:1});function Uu(){}F=Uu.prototype=new I,F.constructor=Uu;function Wu(){}Wu.prototype=F,F.bn=(function(e){return e}),F.bJ=(function(e){return e}),new L().i(Uu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cr:1,a2:1});function Gu(e,t){return e.c3=t,e.fK(),e}function Ku(){this.c3=null,this.c2=null,this.c4=!1,this.c5=null,this.c6=!1}F=Ku.prototype=new I,F.constructor=Ku;function qu(){}qu.prototype=F,F.hB=(function(){return this.c4||=(this.c2=new Jd(this.c3,$s().fI(),($s(),void 0)),!0),this.c2}),F.A=(function(e,t){var n=this.hB().bI(W().i(new(R.r()).C([])));return e.V(new Q((e=>{e.h(this).aT(n)}))),t.V(new Q((e=>{e.aT(n)}))),n}),F.b0=(function(){return this.c6||=(this.c5=new ff,!0),this.c5});function Ju(){}F=Ju.prototype=new I,F.constructor=Ju;function Yu(){}Yu.prototype=F;function Xu(e){return e instanceof Ju||typeof e==`number`||e instanceof V}function Zu(e,t,n,r,i){this.aN=null,this.b4=null,this.aO=null,this.aP=0,this.aM=0,this.aN=e,this.b4=t,this.aO=n,this.aP=r,this.aM=i}F=Zu.prototype=new I,F.constructor=Zu;function Qu(){}Qu.prototype=F,F.j=(function(e){return e instanceof Zu&&this.aO===e.aO&&this.aP===e.aP&&this.aM===e.aM&&this.aN===e.aN&&this.b4===e.b4}),F.t=(function(){var e=``;return this.aN!==`<jscode>`&&(e=``+e+this.aN+`.`),e=``+e+this.b4,this.aO===null?e+=`(Unknown Source)`:(e=e+`(`+this.aO,this.aP>=0&&(e=e+`:`+this.aP,this.aM>=0&&(e=e+`:`+this.aM)),e+=`)`),e}),F.p=(function(){return ih(this.aN)^ih(this.b4)^ih(this.aO)^this.aP^this.aM});var $u=new L().i(Zu,`java.lang.StackTraceElement`,{an:1,a:1});function ed(){}F=ed.prototype=new I,F.constructor=ed;function td(){}td.prototype=F,F.gW=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new sh;for(var i=``,a=t;a!==r;)i+=``+Pa(e.a[a]),a=1+a|0;return i}),new L().i(ed,`java.lang.String$`,{cL:1,a:1});var nd;function rd(){return nd||=new ed,nd}function id(e,t,n,r,i){return e.ek=t,e.el=i,i&&e.gr(),e}var ad=class extends Error{constructor(){super(),this.ek=null,this.el=!1,this.ej=null,this.bD=null}bo(){return this.ek}gr(){var e=this instanceof og?this.S:this;return this.ej=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gC(){return this.bD===null&&(this.el?this.bD=Gc().gq(this.ej):this.bD=new($u.r()).C(0)),this.bD}t(){var e=Da(this),t=this.bo();return t===null?e:e+`: `+t}p(){return Ka.prototype.p.call(this)}j(e){return Ka.prototype.j.call(this,e)}get message(){var e=this.bo();return e===null?``:e}get name(){return Da(this)}toString(){return this.t()}};function od(){}F=od.prototype=new I,F.constructor=od;function sd(){}sd.prototype=F,F.fb=(function(e,t){var n=e.z();if(n>-1){for(var r=t.gX(n),i=e.n(),a=0;a<n;)W().fV(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.hl(),c=s===ao.l();o=[];for(var l=e.n();l.s();){var u=l.g(),d=c?Wa(u):u===null?s.am.z:u;o.push(d)}return(s===io.l()?ol.l():s===Hl.l()||s===zf.l()?ro.l():s).am.r().w(o)}}),F.f8=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!U().B(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new L().i(od,`scala.Array$`,{cV:1,a:1});var cd;function ld(){return cd||=new od,cd}function ud(){this.en=null,fd=this,this.en=new lu(Qc().ei)}F=ud.prototype=new I,F.constructor=ud;function dd(){}dd.prototype=F,F.ha=(function(){return this.en.cr}),new L().i(ud,`scala.Console$`,{cW:1,dS:1});var fd;function pd(){return fd||=new ud,fd}function md(){}F=md.prototype=new I,F.constructor=md;function hd(){}hd.prototype=F,F.t=(function(){return`<function1>`});function gd(){}F=gd.prototype=new Tl,F.constructor=gd;function _d(){}_d.prototype=F,F.hJ=(function(e){return e===null?null:e.a.length===0?Ah().ex:new j_(e)});function vd(){}F=vd.prototype=new I,F.constructor=vd;function yd(){}yd.prototype=F,F.Y=(function(e){return e===null?$():new dh(e)}),new L().i(vd,`scala.Option$`,{d4:1,a:1});var bd;function xd(){return bd||=new vd,bd}function Sd(e,t){if(t===e)e.eI(Fm().fc(t));else for(var n=t.n();n.s();)e.ct(n.g());return e}function Cd(){}F=Cd.prototype=new I,F.constructor=Cd;function wd(){}wd.prototype=F,F.t=(function(){return`<function0>`});function Td(){}F=Td.prototype=new I,F.constructor=Td;function Ed(){}Ed.prototype=F,F.t=(function(){return`<function1>`});function Dd(){}F=Dd.prototype=new I,F.constructor=Dd;function Od(){}Od.prototype=F,F.t=(function(){return`<function2>`});function kd(){}F=kd.prototype=new I,F.constructor=kd;function Ad(){}Ad.prototype=F,F.t=(function(){return`<function3>`});function jd(e){this.bH=!1,this.bH=e}F=jd.prototype=new I,F.constructor=jd;function Md(){}Md.prototype=F,F.t=(function(){return``+this.bH}),new L().i(jd,`scala.runtime.BooleanRef`,{e5:1,a:1});function Nd(e){this.bb=0,this.bb=e}F=Nd.prototype=new I,F.constructor=Nd;function Pd(){}Pd.prototype=F,F.t=(function(){return``+this.bb}),new L().i(Nd,`scala.runtime.IntRef`,{e7:1,a:1});function Fd(){this.v=0,this.eF=0,this.fH=0,this.fG=0,Ld=this,this.v=ih(`Seq`),this.eF=ih(`Map`),this.fH=ih(`Set`),this.fG=this.hE(H_(),this.eF)}F=Fd.prototype=new fu,F.constructor=Fd;function Id(){}Id.prototype=F,F.hm=(function(e){return Tg(e)?this.gL(e,this.v):e instanceof h_?this.gR(e,this.v):this.h9(e,this.v)}),new L().i(Fd,`scala.util.hashing.MurmurHash3$`,{ey:1,ex:1});var Ld;function K(){return Ld||=new Fd,Ld}var Rd=class extends ad{};function zd(){this.bP=null,this.cN=null,this.cO=null,Vd=this,this.bP=Fm().eJ(W().i(new(H.r()).C([]))),this.cN=new Q((e=>{try{console.error(this.gy(e)+`
`+this.gB(e,`
`))}catch(e){var t=e instanceof ad?e:new og(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cO=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof og?t.S:t})),this.hf(this.cN)}F=zd.prototype=new I,F.constructor=zd;function Bd(){}Bd.prototype=F,F.gy=(function(e){try{var t=e.bo()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Ea(e).cC()+`: `+t}),F.gB=(function(e,t){try{return Fl(xf().hJ(e.gC()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),F.hf=(function(e){this.bP.ct(e)}),F.cL=(function(e){for(var t=this.bP.n();t.s();){var n=t.g();try{n.h(e)}catch(e){var r=e instanceof ad?e:new og(e),i=this.cO;if(n===null?i===null:n.j(i))throw r instanceof og?r.S:r;console.warn(`Error processing an unhandled error callback:`),nu().ht(0,new Op((e=>(()=>{throw e instanceof og?e.S:e}))(r)))}}}),new L().i(zd,`com.raquo.airstream.core.AirstreamError$`,{b5:1,dQ:1,dR:1});var Vd;function Hd(){return Vd||=new zd,Vd}function Ud(e,t,n){return new ju(new Q((e=>{(ys(),new ms(t,null,null)).V(new Q((e=>(t=>{Ys().cu(e,t,void 0)}))(e)))})),Gs())}function Wd(e,t,n){this.dA=null,this.dB=null,this.dz=null,this.dA=e,this.dB=t,this.dz=n}F=Wd.prototype=new I,F.constructor=Wd;function Gd(){}Gd.prototype=F,F.aT=(function(e){this.dz.fT(e,this.dA,this.dB)}),new L().i(Wd,`com.raquo.laminar.modifiers.KeySetter`,{c3:1,X:1,c9:1});function Kd(e,t){if(this.c0=null,this.dE=null,this.dF=null,this.dE=t,Lu(this),e===null)throw _f(new J,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!ps().gN(e,document))throw _f(new J,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dF=e,this.gU()}F=Kd.prototype=new I,F.constructor=Kd;function qd(){}qd.prototype=F,F.bL=(function(){return this.c0}),F.eZ=(function(e){this.c0=e}),F.gU=(function(){return this.c0.eH(),Ys().cu(this,this.dE,void 0)}),F.cI=(function(){return this.dF}),new L().i(Kd,`com.raquo.laminar.nodes.RootNode`,{ce:1,ac:1,ab:1});function Jd(e,t,n){this.c1=null,this.dG=null,this.dG=e,Ru(this,e,!1)}F=Jd.prototype=new Bu,F.constructor=Jd;function Yd(){}Yd.prototype=F,F.cD=(function(){return this.dG}),new L().i(Jd,`com.raquo.laminar.tags.CustomHtmlTag`,{cf:1,ad:1,a3:1});function Xd(){this.c3=null,this.c2=null,this.c4=!1,this.c5=null,this.c6=!1,this.dO=null,this.dP=!1,this.dM=null,this.dN=!1,this.dK=null,this.dL=!1,this.dU=null,this.dV=!1,this.dS=null,this.dT=!1,this.dI=null,this.dJ=!1,this.dQ=null,this.dR=!1,this.dW=null,this.dZ=!1,this.dX=null,this.dY=!1,Gu(this,`wa-color-picker`)}F=Xd.prototype=new qu,F.constructor=Xd;function Zd(){}Zd.prototype=F,F.C=(function(){return this.dP||=(this.dO=(Z(),Su(new Cu,`label`,Ds().aq)),!0),this.dO}),F.gI=(function(){return this.dN||=(this.dM=(Z(),Su(new Cu,`hint`,Ds().aq)),!0),this.dM}),F.bM=(function(){return this.dL||=(this.dK=nf(),!0),this.dK}),F.cM=(function(){return this.dV||=(this.dU=sf(),!0),this.dU}),F.hc=(function(){return this.dT||=(this.dS=df(),!0),this.dS}),F.g8=(function(){return this.dJ||=(this.dI=(Z(),Su(new Cu,`disabled`,Ds().bW)),!0),this.dI}),F.h8=(function(){return this.dR||=(this.dQ=(Z(),Su(new Cu,`opacity`,Ds().bW)),!0),this.dQ}),F.hz=(function(){return this.dZ||=(this.dW=(Z(),Su(new Cu,`swatches`,Ds().aq)),!0),this.dW}),F.hA=(function(){return this.dY||=(this.dX=(Z(),new Tu(`swatches`,new _u(Ds()))),!0),this.dX}),F.fK=(function(){return Ca}),new L().i(Xd,`io.github.nguyenyou.webawesome.laminar.ColorPicker$`,{cm:1,cs:1,cq:1});var Qd;function q(){return Qd||=new Xd,Qd}function $d(){this.a8=null,this.aK=null,this.e0=null,this.e1=!1,this.e2=null,this.e3=!1,this.e4=null,this.e5=!1,this.e6=null,this.e7=!1,Su(this,`format`,new Uu)}F=$d.prototype=new wu,F.constructor=$d;function ef(){}ef.prototype=F,F.gH=(function(){return this.e1||=(this.e0=nf().k(`hex`),!0),this.e0}),F.gJ=(function(){return this.e3||=(this.e2=nf().k(`hsl`),!0),this.e2}),F.gK=(function(){return this.e5||=(this.e4=nf().k(`hsv`),!0),this.e4}),F.hk=(function(){return this.e7||=(this.e6=nf().k(`rgb`),!0),this.e6}),new L().i($d,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$`,{cn:1,Z:1,v:1});var tf;function nf(){return tf||=new $d,tf}function rf(){this.a8=null,this.aK=null,this.e8=null,this.e9=!1,this.ea=null,this.eb=!1,this.ec=null,this.ed=!1,Su(this,`size`,new Uu)}F=rf.prototype=new wu,F.constructor=rf;function af(){}af.prototype=F,F.gQ=(function(){return this.e9||=(this.e8=sf().k(`large`),!0),this.e8}),F.gT=(function(){return this.eb||=(this.ea=sf().k(`medium`),!0),this.ea}),F.hv=(function(){return this.ed||=(this.ec=sf().k(`small`),!0),this.ec}),new L().i(rf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{co:1,Z:1,v:1});var of;function sf(){return of||=new rf,of}function cf(){this.a8=null,this.aK=null,this.ee=null,this.ef=!1,Su(this,`placement`,new Uu)}F=cf.prototype=new wu,F.constructor=cf;function lf(){}lf.prototype=F,F.fX=(function(){return this.ef||=(this.ee=df().k(`bottom-start`),!0),this.ee}),new L().i(cf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{cp:1,Z:1,v:1});var uf;function df(){return uf||=new cf,uf}function ff(){}F=ff.prototype=new hd,F.constructor=ff;function pf(){}pf.prototype=F,F.h=(function(e){return Z().u}),new L().i(ff,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{ct:1,cX:1,e:1});function mf(e){if(e.am.Z)return e.am.Q().cC()+`[]`;for(var t=e.am.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function hf(e){this.c7=null,this.am=e}F=hf.prototype=new I,F.constructor=hf;function gf(){}gf.prototype=F,F.t=(function(){return(this.am.Y?`interface `:this.am.X?``:`class `)+this.am.N}),F.cC=(function(){return this.c7===null&&(this.c7=mf(this)),this.c7}),new L().i(hf,`java.lang.Class`,{cz:1,a:1,M:1});function _f(e,t){return id(e,t,null,!0,!0),e}var J=class extends ad{};new L().i(J,`java.lang.Exception`,{L:1,u:1,a:1});function vf(){this.fC=null,bf=this,this.fC=Ff()}F=vf.prototype=new _d,F.constructor=vf;function yf(){}yf.prototype=F,new L().i(vf,`scala.Predef$`,{d7:1,d0:1,d1:1});var bf;function xf(){return bf||=new vf,bf}function Sf(e,t){switch(t){case 0:return e.aQ;case 1:return e.aR;default:throw Kp(new qp,t+` is out of bounds (min 0, max 1)`)}}function Cf(e,t){return e.bF=t,e}function wf(){this.bF=null}F=wf.prototype=new I,F.constructor=wf;function Tf(){}Tf.prototype=F,F.cA=(function(e){return this.bF.cz(e,vg())}),F.cv=(function(e){return this.bF.cz(e,vg())});function Ef(e,t){return new xm(e).g1(t)}function Df(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Y().w:new Tm(e,r,i)}function Of(e,t){for(var n=t.n();e.s()&&n.s();)if(!U().B(e.g(),n.g()))return!1;return e.s()===n.s()}function kf(){this.w=null,jf=this,this.w=new hm}F=kf.prototype=new I,F.constructor=kf;function Af(){}Af.prototype=F,new L().i(kf,`scala.collection.Iterator$`,{ds:1,a0:1,a:1});var jf;function Y(){return jf||=new kf,jf}function Mf(){}F=Mf.prototype=new I,F.constructor=Mf;function Nf(){}Nf.prototype=F,new L().i(Mf,`scala.collection.immutable.Map$`,{dG:1,dx:1,a:1});var Pf;function Ff(){return Pf||=new Mf,Pf}function If(e){this.ey=null,this.ey=e}F=If.prototype=new wd,F.constructor=If;function Lf(){}Lf.prototype=F,F.aD=(function(){return(0,this.ey)()}),new L().i(If,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{e1:1,b1:1,aq:1});function X(e){this.ez=null,this.ez=e}F=X.prototype=new Ed,F.constructor=X;function Rf(){}Rf.prototype=F,F.h=(function(e){return(0,this.ez)(e)}),new L().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{e2:1,b2:1,e:1});var zf=new L().i(0,`scala.runtime.Nothing$`,{e8:1,u:1,a:1});function Bf(){}F=Bf.prototype=new I,F.constructor=Bf;function Vf(){}Vf.prototype=F,F.gw=(function(e){return(t=>e.h(t))}),new L().i(Bf,`scala.scalajs.js.Any$`,{ed:1,ee:1,ef:1});var Hf;function Uf(){return Hf||=new Bf,Hf}function Wf(){}F=Wf.prototype=new wd,F.constructor=Wf;function Gf(){}Gf.prototype=F;function Kf(){}F=Kf.prototype=new Ed,F.constructor=Kf;function qf(){}qf.prototype=F;function Jf(){}F=Jf.prototype=new Od,F.constructor=Jf;function Yf(){}Yf.prototype=F;function Xf(){}F=Xf.prototype=new Ad,F.constructor=Xf;function Zf(){}Zf.prototype=F;function Qf(e,t,n,r){if(this.cP=null,r===null)throw new Xp;this.cP=void 0}F=Qf.prototype=new I,F.constructor=Qf;function $f(){}$f.prototype=F,F.t=(function(){return co(this)}),new L().i(Qf,`com.raquo.airstream.core.Observer$$anon$8`,{b9:1,ba:1,b6:1,b7:1});function ep(e){if(this.d1=null,this.d2=!1,this.fp=null,e===null)throw new Xp;As(this)}F=ep.prototype=new I,F.constructor=ep;function tp(){}tp.prototype=F,F.hy=(function(){return this.d2||=(this.d1=new Vu(`svg`,!1),!0),this.d1}),new L().i(ep,`com.raquo.laminar.api.Laminar$svg$`,{bt:1,bW:1,bC:1,bE:1});function np(){this.u=null,ip=this,this.u=new Ag}F=np.prototype=new I,F.constructor=np;function rp(){}rp.prototype=F,new L().i(np,`com.raquo.laminar.api.package$`,{bw:1,a9:1,aa:1,a8:1});var ip;function Z(){return ip||=new np,ip}function ap(e,t,n){return e.ar=t,e.as=n,e}function op(){this.ar=null,this.as=null}F=op.prototype=new Fs,F.constructor=op;function sp(){}sp.prototype=F,F.k=(function(e){return new Wd(this,Aa(e),new Np(((e,t,n)=>{ps().fn(e,t,n)})))});function cp(){}F=cp.prototype=new I,F.constructor=cp;function lp(){}lp.prototype=F;function up(e,t){return e===t}function dp(e){return e?1231:1237}var fp=new L().i(0,`java.lang.Boolean`,{cx:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function pp(e){return e}function mp(e,t){return t instanceof Ta&&e===t.c}var hp=new L().i(0,`java.lang.Character`,{aj:1,a:1,Q:1,M:1},(e=>e instanceof Ta)),gp=class extends J{};function _p(){this.q=null,this.q=``}F=_p.prototype=new I,F.constructor=_p;function vp(){}vp.prototype=F,F.fR=(function(e){var t=rd().gW(e,0,e.a.length);return this.q=``+this.q+t,this}),F.t=(function(){return this.q}),F.l=(function(){return this.q.length}),F.eW=(function(e){return this.q.charCodeAt(e)}),new L().i(_p,`java.lang.StringBuilder`,{cM:1,a4:1,ah:1,a:1});function yp(){}F=yp.prototype=new I,F.constructor=yp;function bp(){}bp.prototype=F,F.t=(function(){return`<function1>`}),F.fU=(function(e){throw new im(e)}),F.h=(function(e){this.fU(e)}),new L().i(yp,`scala.PartialFunction$$anon$1`,{d6:1,g:1,e:1,a:1});function xp(){}F=xp.prototype=new I,F.constructor=xp;function Sp(){}Sp.prototype=F,F.n=(function(){return this}),F.bK=(function(e){return this.bs(e,-1)}),F.bs=(function(e,t){return Df(this,e,t)}),F.t=(function(){return`<iterator>`}),F.bd=(function(e,t,n,r){return Il(this,e,t,n,r)}),F.z=(function(){return-1});function Cp(e,t){return e.bG=t,e}function wp(){this.bG=null}F=wp.prototype=new I,F.constructor=wp;function Tp(){}Tp.prototype=F,F.eJ=(function(e){return this.bG.cv(e)}),F.fc=(function(e){return this.bG.cA(e)}),F.cA=(function(e){return this.fc(e)}),F.cv=(function(e){return this.eJ(e)});function Ep(e){return e.aX(0)===0}function Dp(e,t){var n=e.z();if(n!==-1)var r=t.z(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Of(e.n(),t)}function Op(e){this.eC=null,this.eC=e}F=Op.prototype=new Gf,F.constructor=Op;function kp(){}kp.prototype=F,F.aD=(function(){return(0,this.eC)()}),new L().i(Op,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{el:1,ek:1,b1:1,aq:1});function Q(e){this.eD=null,this.eD=e}F=Q.prototype=new qf,F.constructor=Q;function Ap(){}Ap.prototype=F,F.h=(function(e){return(0,this.eD)(e)}),new L().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{en:1,em:1,b2:1,e:1});function jp(e){this.fF=null,this.fF=e}F=jp.prototype=new Yf,F.constructor=jp;function Mp(){}Mp.prototype=F,new L().i(jp,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ep:1,eo:1,e3:1,cY:1});function Np(e){this.eE=null,this.eE=e}F=Np.prototype=new Zf,F.constructor=Np;function Pp(){}Pp.prototype=F,F.fT=(function(e,t,n){return(0,this.eE)(e,t,n)}),new L().i(Np,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{er:1,eq:1,e4:1,cZ:1});function Fp(e){e.bZ=new es(new Op((()=>{e.aL.eH()})),new Op((()=>{e.aL.g4()})))}function Ip(e,t){Rp(e,e.bB,t)&&zp(e,t)}function Lp(e,t){var n=e.bB;e.bB=t,Rp(e,n,t)||zp(e,t)}function Rp(e,t,n){var r=!t.e()&&!t.y().bL().H.e(),i=!n.e()&&!n.y().bL().H.e();return r&&!i}function zp(e,t){Bp(e,t.e()?$():new dh(t.y().bL()))}function Bp(e,t){if(t.e())e.bZ.g0();else{var n=t.y();e.bZ.hq(n)}}function Vp(){}F=Vp.prototype=new lp,F.constructor=Vp;function Hp(){}Hp.prototype=F;var Up=class extends gp{constructor(e){super(),id(this,e,null,!0,!0)}};new L().i(Up,`java.lang.ArithmeticException`,{cw:1,R:1,L:1,u:1,a:1});var Wp=new L().i(0,`java.lang.Byte`,{cy:1,S:1,a:1,Q:1,M:1},(e=>za(e))),Gp=class extends gp{constructor(e){super(),id(this,e,null,!0,!0)}};new L().i(Gp,`java.lang.IllegalArgumentException`,{cC:1,R:1,L:1,u:1,a:1});function Kp(e,t){return id(e,t,null,!0,!0),e}var qp=class extends gp{};new L().i(qp,`java.lang.IndexOutOfBoundsException`,{al:1,R:1,L:1,u:1,a:1});function Jp(){}F=Jp.prototype=new lp,F.constructor=Jp;function Yp(){}Yp.prototype=F,new L().i(Jp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cF:1,ag:1,ae:1,ai:1,af:1});var Xp=class extends gp{constructor(){super(),id(this,null,null,!0,!0)}};new L().i(Xp,`java.lang.NullPointerException`,{cG:1,R:1,L:1,u:1,a:1});var Zp=new L().i(0,`java.lang.Short`,{cH:1,S:1,a:1,Q:1,M:1},(e=>Ba(e))),Qp=class extends gp{constructor(e){super(),id(this,e,null,!0,!0)}};new L().i(Qp,`java.lang.UnsupportedOperationException`,{cP:1,R:1,L:1,u:1,a:1});var $p=class extends gp{constructor(e){super(),id(this,e,null,!0,!0)}};new L().i($p,`java.util.NoSuchElementException`,{cT:1,R:1,L:1,u:1,a:1});function em(e){return e.cc||=(e.cd=e.bE===null?`null`:rm(e),!0),e.cd}function tm(e){return e.cc?e.cd:em(e)}function nm(e){var t=e.bE;return`of class `+Da(t)}function rm(e){try{return e.bE+` (`+nm(e)+`)`}catch{return`an instance `+nm(e)}}var im=class extends gp{constructor(e){super(),this.cd=null,this.bE=null,this.cc=!1,this.bE=e,id(this,null,null,!0,!0)}bo(){return tm(this)}};new L().i(im,`scala.MatchError`,{d2:1,R:1,L:1,u:1,a:1});function am(){}F=am.prototype=new I,F.constructor=am;function om(){}om.prototype=F,F.e=(function(){return this===$()}),F.z=(function(){return this.e()?0:1}),F.n=(function(){return this.e()?Y().w:new _m(this.y())});function sm(e){this.b5=0,this.er=0,this.eq=null,this.eq=e,this.b5=0,this.er=e.a2()}F=sm.prototype=new Sp,F.constructor=sm;function cm(){}cm.prototype=F,F.s=(function(){return this.b5<this.er}),F.g=(function(){var e=this.eq.a3(this.b5);return this.b5=1+this.b5|0,e}),new L().i(sm,`scala.Product$$anon$1`,{d8:1,r:1,s:1,b:1,c:1});function lm(e,t){this.aQ=null,this.aR=null,this.aQ=e,this.aR=t}F=lm.prototype=new I,F.constructor=lm;function um(){}um.prototype=F,F.a2=(function(){return 2}),F.a3=(function(e){return Sf(this,e)}),F.t=(function(){return`(`+this.aQ+`,`+this.aR+`)`}),F.a4=(function(){return`Tuple2`}),F.aE=(function(){return new Im(this)}),F.p=(function(){return K().cG(this,-889275714,!1)}),F.j=(function(e){return this===e||e instanceof lm&&U().B(this.aQ,e.aQ)&&U().B(this.aR,e.aR)});var dm=new L().i(lm,`scala.Tuple2`,{at:1,d9:1,T:1,d:1,a:1});function fm(e){this.bF=null,Cf(this,e)}F=fm.prototype=new Tf,F.constructor=fm;function pm(){}pm.prototype=F,new L().i(fm,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dn:1,dm:1,a0:1,a:1,a5:1});function mm(e){return Fl(e,e.aV()+`(`,`, `,`)`)}function hm(){}F=hm.prototype=new Sp,F.constructor=hm;function gm(){}gm.prototype=F,F.s=(function(){return!1}),F.gY=(function(){throw new $p(`next on empty iterator`)}),F.z=(function(){return 0}),F.bs=(function(e,t){return this}),F.g=(function(){this.gY()}),new L().i(hm,`scala.collection.Iterator$$anon$19`,{dt:1,r:1,s:1,b:1,c:1});function _m(e){this.b7=!1,this.ev=null,this.ev=e,this.b7=!1}F=_m.prototype=new Sp,F.constructor=_m;function vm(){}vm.prototype=F,F.s=(function(){return!this.b7}),F.g=(function(){return this.b7?Y().w.g():(this.b7=!0,this.ev)}),F.bs=(function(e,t){return this.b7||e>0||t===0?Y().w:this}),new L().i(_m,`scala.collection.Iterator$$anon$20`,{du:1,r:1,s:1,b:1,c:1});function ym(e){for(;;){if(e.E instanceof xm){var t=e.E;e.E=t.E,e.aa=t.aa,t.N!==null&&(e.M===null&&(e.M=t.M),t.M.b8=e.N,e.N=t.N);continue}return}}function bm(e){for(;;)if(e.N===null)return e.E=null,e.M=null,!1;else{if(e.E=e.N.gG(),e.M===e.N&&(e.M=e.M.b8),e.N=e.N.b8,ym(e),e.aa)return!0;if(e.E!==null&&e.E.s())return e.aa=!0,!0}}function xm(e){this.E=null,this.N=null,this.M=null,this.aa=!1,this.E=e,this.N=null,this.M=null,this.aa=!1}F=xm.prototype=new Sp,F.constructor=xm;function Sm(){}Sm.prototype=F,F.s=(function(){return this.aa?!0:this.E===null?!1:this.E.s()?(this.aa=!0,!0):bm(this)}),F.g=(function(){return this.s()?(this.aa=!1,this.E.g()):Y().w.g()}),F.g1=(function(e){var t=new Ll(e,null);return this.N===null?(this.N=t,this.M=t):(this.M.b8=t,this.M=t),this.E===null&&(this.E=Y().w),this}),new L().i(xm,`scala.collection.Iterator$ConcatIterator`,{ax:1,r:1,s:1,b:1,c:1});function Cm(e){for(;e.a0>0;)e.ab.s()?(e.ab.g(),e.a0=-1+e.a0|0):e.a0=0}function wm(e,t){if(e.J<0)return-1;var n=e.J-t|0;return n<0?0:n}function Tm(e,t,n){this.ab=null,this.J=0,this.a0=0,this.ab=e,this.J=n,this.a0=t}F=Tm.prototype=new Sp,F.constructor=Tm;function Em(){}Em.prototype=F,F.z=(function(){var e=this.ab.z();if(e<0)return-1;var t=e-this.a0|0,n=t<0?0:t;if(this.J<0)return n;var r=this.J;return r<n?r:n}),F.s=(function(){return Cm(this),this.J!==0&&this.ab.s()}),F.g=(function(){return Cm(this),this.J>0?(this.J=-1+this.J|0,this.ab.g()):this.J<0?this.ab.g():Y().w.g()}),F.bs=(function(e,t){var n=e>0?e:0;if(t<0)var r=wm(this,n);else if(t<=n)var r=0;else if(this.J<0)var r=t-n|0;else var i=wm(this,n),a=t-n|0,r=i<a?i:a;var o=this.a0+n|0;return r===0?Y().w:o<0?(this.a0=2147483647,this.J=0,Ef(this,new If((()=>new Tm(this.ab,-2147483647+o|0,r))))):(this.a0=o,this.J=r,this)}),new L().i(Tm,`scala.collection.Iterator$SliceIterator`,{dw:1,r:1,s:1,b:1,c:1});function Dm(e,t){if(t<0)throw Kp(new qp,``+t);var n=e.gb(t);if(n.e())throw Kp(new qp,``+t);return n.a1()}function Om(e,t){return Eg(t)?km(e,e,t):Dp(e,t)}function km(e,t,n){for(;;)if(t===n)return!0;else if(!t.e()&&!n.e()&&U().B(t.a1(),n.a1())){var r=t.X(),i=n.X();t=r,n=i}else return t.e()&&n.e()}function Am(e){this.ba=null,this.ba=e}F=Am.prototype=new Sp,F.constructor=Am;function jm(){}jm.prototype=F,F.s=(function(){return!this.ba.e()}),F.g=(function(){var e=this.ba.a1();return this.ba=this.ba.X(),e}),new L().i(Am,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dB:1,r:1,s:1,b:1,c:1});function Mm(){this.bG=null,Cp(this,Vm())}F=Mm.prototype=new Tp,F.constructor=Mm;function Nm(){}Nm.prototype=F,new L().i(Mm,`scala.collection.mutable.Buffer$`,{dL:1,dy:1,a5:1,a0:1,a:1});var Pm;function Fm(){return Pm||=new Mm,Pm}function Im(e){this.bc=0,this.eA=0,this.eB=null,this.eB=e,this.bc=0,this.eA=e.a2()}F=Im.prototype=new Sp,F.constructor=Im;function Lm(){}Lm.prototype=F,F.s=(function(){return this.bc<this.eA}),F.g=(function(){var e=this.eB.a3(this.bc);return this.bc=1+this.bc|0,e}),new L().i(Im,`scala.runtime.ScalaRunTime$$anon$1`,{eb:1,r:1,s:1,b:1,c:1});function Rm(){}F=Rm.prototype=new I,F.constructor=Rm;function zm(){}zm.prototype=F,F.cv=(function(e){return this.fd(e)}),F.fd=(function(e){return Sd(J_(new Y_),e).fl()}),F.cA=(function(e){return this.fd(e)}),new L().i(Rm,`scala.scalajs.js.WrappedArray$`,{eh:1,dC:1,a5:1,a0:1,a:1});var Bm;function Vm(){return Bm||=new Rm,Bm}var Hm=class e extends Rd{constructor(e,t){super(),this.aG=null,this.aF=0,this.aG=e,this.aF=t,id(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aE(){return new sm(this)}p(){var e=-889275714;return e=G().b(e,ih(`TransactionDepthExceeded`)),e=G().b(e,G().x(this.aG)),e=G().b(e,this.aF),G().m(e,2)}j(t){return this===t?!0:t instanceof e&&this.aF===t.aF?this.aG===t.aG:!1}a2(){return 2}a4(){return`TransactionDepthExceeded`}a3(e){if(e===0)return this.aG;if(e===1)return this.aF;throw Kp(new qp,``+e)}t(){return`TransactionDepthExceeded: `+this.aG+`; maxDepth: `+this.aF}};new L().i(Hm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a7:1,b4:1,u:1,a:1,d:1,T:1});function Um(e){this.ar=null,this.as=null,this.dn=null,this.dp=!1,ap(this,e,H_())}F=Um.prototype=new sp,F.constructor=Um;function Wm(){}Wm.prototype=F,F.eX=(function(){return this.dp||=(this.dn=this.k(`column`),!0),this.dn}),new L().i(Um,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bK:1,W:1,v:1,U:1,V:1,bO:1});function Gm(e){this.ar=null,this.as=null,this.dq=null,this.dr=!1,ap(this,e,H_())}F=Gm.prototype=new sp,F.constructor=Gm;function Km(){}Km.prototype=F,F.fo=(function(){return this.dr||=(this.dq=this.k(`wrap`),!0),this.dq}),new L().i(Gm,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bL:1,W:1,v:1,U:1,V:1,bQ:1});function qm(e,t){this.bB=null,this.aL=null,this.bZ=null,this.dD=null,this.Q=null,this.dD=e,this.Q=t,this.bB=$(),Lu(this),Fp(this)}F=qm.prototype=new I,F.constructor=qm;function Jm(){}Jm.prototype=F,F.aT=(function(e){Ys().cu(e,this,void 0)}),F.bL=(function(){return this.aL}),F.eZ=(function(e){this.aL=e}),F.t=(function(){return`ReactiveHtmlElement(`+(this.Q===null?`tag=`+this.dD.cD():this.Q.outerHTML)+`)`}),F.cI=(function(){return this.Q});var Ym=new L().i(qm,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cd:1,ac:1,X:1,ca:1,ab:1,cc:1});function Xm(e,t){return Object.is(e,t)}function Zm(e){return bc().cE(e)}var Qm=new L().i(0,`java.lang.Double`,{ak:1,S:1,a:1,Q:1,M:1,Y:1},(e=>typeof e==`number`)),$m=new L().i(0,`java.lang.Float`,{cA:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Ha(e))),eh=new L().i(0,`java.lang.Integer`,{cD:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Va(e)));function th(e,t){return t instanceof V&&e.c===t.c&&e.d===t.d}function nh(e){return e.c^e.d}var rh=new L().i(0,`java.lang.Long`,{am:1,S:1,a:1,Q:1,M:1,Y:1},(e=>e instanceof V));function ih(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ah(e,t){return e===t}var oh=new L().i(0,`java.lang.String`,{cK:1,a:1,Q:1,a4:1,M:1,Y:1},(e=>typeof e==`string`)),sh=class extends qp{constructor(){super(),id(this,null,null,!0,!0)}};new L().i(sh,`java.lang.StringIndexOutOfBoundsException`,{cN:1,al:1,R:1,L:1,u:1,a:1});function ch(){}F=ch.prototype=new om,F.constructor=ch;function lh(){}lh.prototype=F,F.gx=(function(){throw new $p(`None.get`)}),F.a4=(function(){return`None`}),F.a2=(function(){return 0}),F.a3=(function(e){return G().bp(e)}),F.aE=(function(){return new Im(this)}),F.p=(function(){return 2433880}),F.t=(function(){return`None`}),F.y=(function(){this.gx()}),new L().i(ch,`scala.None$`,{d3:1,ar:1,b:1,T:1,d:1,a:1});var uh;function $(){return uh||=new ch,uh}function dh(e){this.b6=null,this.b6=e}F=dh.prototype=new om,F.constructor=dh;function fh(){}fh.prototype=F,F.y=(function(){return this.b6}),F.a4=(function(){return`Some`}),F.a2=(function(){return 1}),F.a3=(function(e){return e===0?this.b6:G().bp(e)}),F.aE=(function(){return new Im(this)}),F.p=(function(){return K().cG(this,-889275714,!1)}),F.t=(function(){return W().fM(this)}),F.j=(function(e){return this===e||e instanceof dh&&U().B(this.b6,e.b6)}),new L().i(dh,`scala.Some`,{as:1,ar:1,b:1,T:1,d:1,a:1});function ph(){}F=ph.prototype=new I,F.constructor=ph;function mh(){}mh.prototype=F,F.aV=(function(){return this.aZ()}),F.V=(function(e){Pl(this,e)}),F.bd=(function(e,t,n,r){return Il(this,e,t,n,r)}),F.z=(function(){return-1});function hh(e,t){return e.I=t,e.f=0,e.D=dl().aW(e.I),e}function gh(){this.I=null,this.f=0,this.D=0}F=gh.prototype=new Sp,F.constructor=gh;function _h(){}_h.prototype=F,F.z=(function(){return this.D-this.f|0}),F.s=(function(){return this.f<this.D}),F.g=(function(){this.f>=dl().aW(this.I)&&Y().w.g();var e=W().aU(this.I,this.f);return this.f=1+this.f|0,e}),F.bK=(function(e){if(e>0){var t=this.f+e|0;if(t<0)var n=this.D;else var r=this.D,n=r<t?r:t;this.f=n}return this}),new L().i(gh,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function vh(e,t){return t<0?0:t>e.R?e.R:t}function yh(e){this.eu=null,this.a9=0,this.R=0,this.eu=e,this.a9=0,this.R=e.l()}F=yh.prototype=new Sp,F.constructor=yh;function bh(){}bh.prototype=F,F.z=(function(){return this.R}),F.s=(function(){return this.R>0}),F.g=(function(){if(this.R>0){var e=this.eu.o(this.a9);return this.a9=1+this.a9|0,this.R=-1+this.R|0,e}else return Y().w.g()}),F.bK=(function(e){if(e>0){this.a9=this.a9+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),F.bs=(function(e,t){var n=vh(this,e),r=vh(this,t)-n|0;return this.R=r<0?0:r,this.a9=this.a9+n|0,this}),new L().i(yh,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dr:1,r:1,s:1,b:1,c:1,a:1});function xh(e){return e.co||=(e.cp=new s_(new qa(0)),!0),e.cp}function Sh(e){return e.co?e.cp:xh(e)}function Ch(){this.cp=null,this.fD=null,this.co=!1,Th=this,this.fD=new fm(this)}F=Ch.prototype=new I,F.constructor=Ch;function wh(){}wh.prototype=F,F.gu=(function(e,t){return e instanceof Ug?e:this.hG(ld().fb(e,t))}),F.hG=(function(e){if(e===null)return null;if(e instanceof qa)return new s_(e);if(e instanceof $a)return new r_(e);if(e instanceof no)return new $g(e);if(e instanceof eo)return new a_(e);if(e instanceof to)return new t_(e);if(e instanceof Xa)return new Zg(e);if(e instanceof Za)return new Yg(e);if(e instanceof Qa)return new l_(e);if(e instanceof Ya)return new qg(e);if(al(e,1))return new d_(e);throw new im(e)}),F.cz=(function(e,t){return this.gu(e,t)}),new L().i(Ch,`scala.collection.immutable.ArraySeq$`,{dF:1,az:1,av:1,au:1,aw:1,a:1});var Th;function Eh(){return Th||=new Ch,Th}function Dh(){this.fE=null,this.ex=null,kh=this,this.fE=new fm(this),this.ex=new j_(new qa(0))}F=Dh.prototype=new I,F.constructor=Dh;function Oh(){}Oh.prototype=F,F.gv=(function(e,t){return this.gS(ld().fb(e,t))}),F.gS=(function(e){if(e===null)return null;if(e instanceof qa)return new j_(e);if(e instanceof $a)return new D_(e);if(e instanceof no)return new C_(e);if(e instanceof eo)return new k_(e);if(e instanceof to)return new T_(e);if(e instanceof Xa)return new x_(e);if(e instanceof Za)return new y_(e);if(e instanceof Qa)return new N_(e);if(e instanceof Ya)return new __(e);if(al(e,1))return new F_(e);throw new im(e)}),F.cz=(function(e,t){return this.gv(e,t)}),new L().i(Dh,`scala.collection.mutable.ArraySeq$`,{dJ:1,az:1,av:1,au:1,aw:1,a:1});var kh;function Ah(){return kh||=new Dh,kh}function jh(e){this.ar=null,this.as=null,this.dj=null,this.dk=!1,ap(this,e,H_())}F=jh.prototype=new sp,F.constructor=jh;function Mh(){}Mh.prototype=F,F.cy=(function(){return this.dk||=(this.dj=this.k(`flex`),!0),this.dj}),new L().i(jh,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bI:1,W:1,v:1,U:1,V:1,bR:1,bN:1});function Nh(e){this.ar=null,this.as=null,this.dl=null,this.dm=!1,ap(this,e,H_())}F=Nh.prototype=new sp,F.constructor=Nh;function Ph(){}Ph.prototype=F,F.fZ=(function(){return this.dm||=(this.dl=this.k(`center`),!0),this.dl}),new L().i(Nh,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bJ:1,W:1,v:1,U:1,V:1,bS:1,bP:1});function Fh(e){this.ar=null,this.as=null,this.ds=null,this.dt=!1,ap(this,e,H_())}F=Fh.prototype=new sp,F.constructor=Fh;function Ih(){}Ih.prototype=F,F.cH=(function(){return this.dt||=(this.ds=yu(this),!0),this.ds}),new L().i(Fh,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bM:1,W:1,v:1,U:1,V:1,bT:1,bU:1});function Lh(){}F=Lh.prototype=new Hp,F.constructor=Lh;function Rh(){}Rh.prototype=F;function zh(e){this.I=null,this.f=0,this.D=0,this.ce=null,this.ce=e,hh(this,e)}F=zh.prototype=new _h,F.constructor=zh;function Bh(){}Bh.prototype=F,F.gZ=(function(){this.f>=this.ce.a.length&&Y().w.g();var e=this.ce.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.gZ()}),new L().i(zh,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dd:1,N:1,r:1,s:1,b:1,c:1,a:1});function Vh(e){this.I=null,this.f=0,this.D=0,this.cf=null,this.cf=e,hh(this,e)}F=Vh.prototype=new _h,F.constructor=Vh;function Hh(){}Hh.prototype=F,F.h0=(function(){this.f>=this.cf.a.length&&Y().w.g();var e=this.cf.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return Ua(this.h0())}),new L().i(Vh,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{de:1,N:1,r:1,s:1,b:1,c:1,a:1});function Uh(e){this.I=null,this.f=0,this.D=0,this.cg=null,this.cg=e,hh(this,e)}F=Uh.prototype=new _h,F.constructor=Uh;function Wh(){}Wh.prototype=F,F.h1=(function(){this.f>=this.cg.a.length&&Y().w.g();var e=this.cg.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.h1()}),new L().i(Uh,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{df:1,N:1,r:1,s:1,b:1,c:1,a:1});function Gh(e){this.I=null,this.f=0,this.D=0,this.ch=null,this.ch=e,hh(this,e)}F=Gh.prototype=new _h,F.constructor=Gh;function Kh(){}Kh.prototype=F,F.h2=(function(){this.f>=this.ch.a.length&&Y().w.g();var e=this.ch.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.h2()}),new L().i(Gh,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dg:1,N:1,r:1,s:1,b:1,c:1,a:1});function qh(e){this.I=null,this.f=0,this.D=0,this.ci=null,this.ci=e,hh(this,e)}F=qh.prototype=new _h,F.constructor=qh;function Jh(){}Jh.prototype=F,F.h3=(function(){this.f>=this.ci.a.length&&Y().w.g();var e=this.ci.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.h3()}),new L().i(qh,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dh:1,N:1,r:1,s:1,b:1,c:1,a:1});function Yh(e){this.I=null,this.f=0,this.D=0,this.cj=null,this.cj=e,hh(this,e)}F=Yh.prototype=new _h,F.constructor=Yh;function Xh(){}Xh.prototype=F,F.h4=(function(){this.f>=this.cj.a.length&&Y().w.g();var e=this.cj.a[this.f],t=e.c,n=e.d;return this.f=1+this.f|0,new V(t,n)}),F.g=(function(){return this.h4()}),new L().i(Yh,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{di:1,N:1,r:1,s:1,b:1,c:1,a:1});function Zh(e){this.I=null,this.f=0,this.D=0,this.ck=null,this.ck=e,hh(this,e)}F=Zh.prototype=new _h,F.constructor=Zh;function Qh(){}Qh.prototype=F,F.h5=(function(){this.f>=this.ck.a.length&&Y().w.g();var e=this.ck.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.h5()}),new L().i(Zh,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dj:1,N:1,r:1,s:1,b:1,c:1,a:1});function $h(e){this.I=null,this.f=0,this.D=0,this.et=null,this.et=e,hh(this,e)}F=$h.prototype=new _h,F.constructor=$h;function eg(){}eg.prototype=F,F.h6=(function(){this.f>=this.et.a.length&&Y().w.g(),this.f=1+this.f|0}),F.g=(function(){this.h6()}),new L().i($h,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dk:1,N:1,r:1,s:1,b:1,c:1,a:1});function tg(e){this.I=null,this.f=0,this.D=0,this.cl=null,this.cl=e,hh(this,e)}F=tg.prototype=new _h,F.constructor=tg;function ng(){}ng.prototype=F,F.h7=(function(){this.f>=this.cl.a.length&&Y().w.g();var e=this.cl.a[this.f];return this.f=1+this.f|0,e}),F.g=(function(){return this.h7()}),new L().i(tg,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dl:1,N:1,r:1,s:1,b:1,c:1,a:1});function rg(e){return e.aV()+`(<not computed>)`}function ig(){}F=ig.prototype=new I,F.constructor=ig;function ag(){}ag.prototype=F;var og=class e extends gp{constructor(e){super(),this.S=null,this.S=e,id(this,null,null,!0,!0)}bo(){return Aa(this.S)}a4(){return`JavaScriptException`}a2(){return 1}a3(e){return e===0?this.S:G().bp(e)}aE(){return new Im(this)}p(){return K().cG(this,-889275714,!1)}j(t){return this===t||t instanceof e&&U().B(this.S,t.S)}};new L().i(og,`scala.scalajs.js.JavaScriptException`,{b3:1,R:1,L:1,u:1,a:1,T:1,d:1});function sg(e,t){typeof console<`u`&&(e.eh&&console.error?console.error(t):console.log(t))}function cg(e){this.eh=!1,this.b3=null,this.eh=e,new Jp,this.b3=``}F=cg.prototype=new Rh,F.constructor=cg;function lg(){}lg.prototype=F,F.gO=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b3=``+this.b3+t,t=``;else{var r=this.b3,i=t;sg(this,``+r+i.substring(0,n)),this.b3=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new L().i(cg,`java.lang.JSConsoleBasedPrintStream`,{cE:1,cv:1,cu:1,ag:1,ae:1,ai:1,af:1,ah:1});function ug(e,t,n){for(;;)if(t<=0||n.e())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function dg(){this.cq=null}F=dg.prototype=new ag,F.constructor=dg;function fg(){}fg.prototype=F,F.t=(function(){return this.cq}),F.j=(function(e){return this===e}),F.p=(function(){return Ra(this)});function pg(){}F=pg.prototype=new mh,F.constructor=pg;function mg(){}mg.prototype=F,F.t=(function(){return rg(this)});function hg(){this.cq=null,this.cq=`Any`}F=hg.prototype=new fg,F.constructor=hg;function gg(){}gg.prototype=F,F.hl=(function(){return ro.l()}),F.gX=(function(e){return new qa(e)}),new L().i(hg,`scala.reflect.ManifestFactory$AnyManifest$`,{dX:1,dZ:1,dY:1,dW:1,dV:1,dU:1,e0:1,a:1,d:1});var _g;function vg(){return _g||=new hg,_g}function yg(e,t){return e===t?!0:bg(t)&&t.eV(e)?e.cK(t):!1}function bg(e){return!!(e&&e.$classData&&e.$classData.n.f)}function xg(){}F=xg.prototype=new mh,F.constructor=xg;function Sg(){}Sg.prototype=F,F.eV=(function(e){return!0}),F.j=(function(e){return yg(this,e)}),F.p=(function(){return K().hm(this)}),F.t=(function(){return mm(this)}),F.e=(function(){return Ep(this)}),F.cK=(function(e){return Dp(this,e)});function Cg(){}F=Cg.prototype=new mg,F.constructor=Cg;function wg(){}wg.prototype=F;function Tg(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Eg(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function Dg(e,t){return e.b9=t,e}function Og(){this.b9=null}F=Og.prototype=new wg,F.constructor=Og;function kg(){}kg.prototype=F,F.o=(function(e){return this.b9.o(e)}),F.l=(function(){return this.b9.l()}),F.e=(function(){return this.b9.e()});function Ag(){this.d7=null,this.d8=!1,this.dh=null,this.di=!1,this.d3=null,this.d4=!1,this.d5=null,this.d6=!1,this.d9=null,this.da=!1,this.db=null,this.dc=!1,this.dd=null,this.de=!1,this.fr=null,this.fq=null,this.df=null,this.dg=!1,Os(this),Ss(this),bs(this),xs(this)}F=Ag.prototype=new I,F.constructor=Ag;function jg(){}jg.prototype=F,F.cx=(function(){return this.d8||=(this.d7=Ru(new zu,`div`,!1),!0),this.d7}),F.b1=(function(){return this.di||=(this.dh=new Tu(`value`,Ds().aq),!0),this.dh}),F.fP=(function(){return this.d4||=(this.d3=new Nh(`align-items`),!0),this.d3}),F.cw=(function(){return this.d6||=(this.d5=new jh(`display`),!0),this.d5}),F.f9=(function(){return this.da||=(this.d9=new Um(`flex-direction`),!0),this.d9}),F.fa=(function(){return this.dc||=(this.db=new Gm(`flex-wrap`),!0),this.db}),F.cB=(function(){return this.de||=(this.dd=new Fh(`gap`),!0),this.dd}),F.hx=(function(){return this.dg||=(this.df=new ep(this),!0),this.df}),new L().i(Ag,`com.raquo.laminar.api.package$$anon$1`,{bx:1,bV:1,bB:1,bG:1,bF:1,bH:1,bD:1,bv:1,br:1,bu:1,a9:1,aa:1,a8:1,bs:1});function Mg(e){this.b9=null,Dg(this,e)}F=Mg.prototype=new kg,F.constructor=Mg;function Ng(){}Ng.prototype=F,F.n=(function(){return new yh(this)}),F.aZ=(function(){return`IndexedSeqView`}),F.aX=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),F.z=(function(){return this.l()}),new L().i(Mg,`scala.collection.IndexedSeqView$Id`,{dq:1,dA:1,da:1,db:1,h:1,i:1,b:1,k:1,c:1,j:1,dD:1,a:1,dz:1,l:1,dp:1,o:1});function Pg(){}F=Pg.prototype=new Sg,F.constructor=Pg;function Fg(){}Fg.prototype=F;function Ig(e,t){return!Rg(t)||e.l()===t.l()}function Lg(e,t){if(Rg(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.eK(),o=t.eK(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=U().B(e.o(i),t.o(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().bK(i),m=t.n().bK(i);r&&p.s();)r=U().B(p.g(),m.g())}return r}else return Dp(e,t)}function Rg(e){return!!(e&&e.$classData&&e.$classData.n.x)}function zg(){}F=zg.prototype=new Sg,F.constructor=zg;function Bg(){}Bg.prototype=F;function Vg(){}F=Vg.prototype=new Bg,F.constructor=Vg;function Hg(){}Hg.prototype=F,F.eI=(function(e){return Sd(this,e)});function Ug(){}F=Ug.prototype=new Fg,F.constructor=Ug;function Wg(){}Wg.prototype=F,F.eV=(function(e){return Ig(this,e)}),F.cK=(function(e){return Lg(this,e)}),F.aZ=(function(){return`IndexedSeq`}),F.aX=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),F.z=(function(){return this.l()}),F.aV=(function(){return`ArraySeq`}),F.eK=(function(){return 2147483647});function Gg(){}F=Gg.prototype=new Bg,F.constructor=Gg;function Kg(){}Kg.prototype=F,F.aZ=(function(){return`IndexedSeq`}),F.aX=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),F.z=(function(){return this.l()}),F.aV=(function(){return`ArraySeq`}),F.j=(function(e){return e instanceof Gg&&dl().aW(this.T())!==dl().aW(e.T())?!1:yg(this,e)});function qg(e){this.at=null,this.at=e}F=qg.prototype=new Wg,F.constructor=qg;function Jg(){}Jg.prototype=F,F.l=(function(){return this.at.a.length}),F.p=(function(){var e=K();return e.eU(this.at,e.v)}),F.j=(function(e){return e instanceof qg?B().f7(this.at,e.at):yg(this,e)}),F.n=(function(){return new tg(this.at)}),F.bm=(function(e){return this.at.a[e]}),F.h=(function(e){return this.bm(e|0)}),F.o=(function(e){return this.bm(e)}),new L().i(qg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aC:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Yg(e){this.au=null,this.au=e}F=Yg.prototype=new Wg,F.constructor=Yg;function Xg(){}Xg.prototype=F,F.l=(function(){return this.au.a.length}),F.be=(function(e){return this.au.a[e]}),F.p=(function(){var e=K();return e.eM(this.au,e.v)}),F.j=(function(e){return e instanceof Yg?B().f0(this.au,e.au):yg(this,e)}),F.n=(function(){return new zh(this.au)}),F.h=(function(e){return this.be(e|0)}),F.o=(function(e){return this.be(e)}),new L().i(Yg,`scala.collection.immutable.ArraySeq$ofByte`,{aD:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Zg(e){this.ac=null,this.ac=e}F=Zg.prototype=new Wg,F.constructor=Zg;function Qg(){}Qg.prototype=F,F.l=(function(){return this.ac.a.length}),F.bf=(function(e){return this.ac.a[e]}),F.p=(function(){var e=K();return e.eN(this.ac,e.v)}),F.j=(function(e){return e instanceof Zg?B().f1(this.ac,e.ac):yg(this,e)}),F.n=(function(){return new Vh(this.ac)}),F.bd=(function(e,t,n,r){return new x_(this.ac).bd(e,t,n,r)}),F.h=(function(e){return Ua(this.bf(e|0))}),F.o=(function(e){return Ua(this.bf(e))}),new L().i(Zg,`scala.collection.immutable.ArraySeq$ofChar`,{aE:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function $g(e){this.av=null,this.av=e}F=$g.prototype=new Wg,F.constructor=$g;function e_(){}e_.prototype=F,F.l=(function(){return this.av.a.length}),F.p=(function(){var e=K();return e.eO(this.av,e.v)}),F.j=(function(e){return e instanceof $g?B().f2(this.av,e.av):yg(this,e)}),F.n=(function(){return new Uh(this.av)}),F.bh=(function(e){return this.av.a[e]}),F.h=(function(e){return this.bh(e|0)}),F.o=(function(e){return this.bh(e)}),new L().i($g,`scala.collection.immutable.ArraySeq$ofDouble`,{aF:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function t_(e){this.aw=null,this.aw=e}F=t_.prototype=new Wg,F.constructor=t_;function n_(){}n_.prototype=F,F.l=(function(){return this.aw.a.length}),F.p=(function(){var e=K();return e.eP(this.aw,e.v)}),F.j=(function(e){return e instanceof t_?B().f3(this.aw,e.aw):yg(this,e)}),F.n=(function(){return new Gh(this.aw)}),F.bi=(function(e){return this.aw.a[e]}),F.h=(function(e){return this.bi(e|0)}),F.o=(function(e){return this.bi(e)}),new L().i(t_,`scala.collection.immutable.ArraySeq$ofFloat`,{aG:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function r_(e){this.ax=null,this.ax=e}F=r_.prototype=new Wg,F.constructor=r_;function i_(){}i_.prototype=F,F.l=(function(){return this.ax.a.length}),F.p=(function(){var e=K();return e.eQ(this.ax,e.v)}),F.j=(function(e){return e instanceof r_?B().f4(this.ax,e.ax):yg(this,e)}),F.n=(function(){return new qh(this.ax)}),F.bj=(function(e){return this.ax.a[e]}),F.h=(function(e){return this.bj(e|0)}),F.o=(function(e){return this.bj(e)}),new L().i(r_,`scala.collection.immutable.ArraySeq$ofInt`,{aH:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function a_(e){this.ay=null,this.ay=e}F=a_.prototype=new Wg,F.constructor=a_;function o_(){}o_.prototype=F,F.l=(function(){return this.ay.a.length}),F.p=(function(){var e=K();return e.eR(this.ay,e.v)}),F.j=(function(e){return e instanceof a_?B().f5(this.ay,e.ay):yg(this,e)}),F.n=(function(){return new Yh(this.ay)}),F.bk=(function(e){return this.ay.a[e]}),F.h=(function(e){return this.bk(e|0)}),F.o=(function(e){return this.bk(e)}),new L().i(a_,`scala.collection.immutable.ArraySeq$ofLong`,{aI:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function s_(e){this.az=null,this.az=e}F=s_.prototype=new Wg,F.constructor=s_;function c_(){}c_.prototype=F,F.l=(function(){return this.az.a.length}),F.o=(function(e){return this.az.a[e]}),F.p=(function(){var e=K();return e.eL(this.az,e.v)}),F.j=(function(e){return e instanceof s_?ld().f8(this.az,e.az):yg(this,e)}),F.n=(function(){return hh(new gh,this.az)}),F.h=(function(e){return this.o(e|0)}),new L().i(s_,`scala.collection.immutable.ArraySeq$ofRef`,{aJ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function l_(e){this.aA=null,this.aA=e}F=l_.prototype=new Wg,F.constructor=l_;function u_(){}u_.prototype=F,F.l=(function(){return this.aA.a.length}),F.bg=(function(e){return this.aA.a[e]}),F.p=(function(){var e=K();return e.eS(this.aA,e.v)}),F.j=(function(e){return e instanceof l_?B().f6(this.aA,e.aA):yg(this,e)}),F.n=(function(){return new Zh(this.aA)}),F.h=(function(e){return this.bg(e|0)}),F.o=(function(e){return this.bg(e)}),new L().i(l_,`scala.collection.immutable.ArraySeq$ofShort`,{aK:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function d_(e){this.aS=null,this.aS=e}F=d_.prototype=new Wg,F.constructor=d_;function f_(){}f_.prototype=F,F.l=(function(){return this.aS.a.length}),F.p=(function(){var e=K();return e.eT(this.aS,e.v)}),F.j=(function(e){return e instanceof d_?this.aS.a.length===e.aS.a.length:yg(this,e)}),F.n=(function(){return new $h(this.aS)}),F.bl=(function(e){}),F.h=(function(e){this.bl(e|0)}),F.o=(function(e){this.bl(e)}),new L().i(d_,`scala.collection.immutable.ArraySeq$ofUnit`,{aL:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function p_(e,t,n,r){for(;;)if(t===r)return n.e()?0:1;else if(n.e())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function m_(e,t,n){for(;;)if(t===n)return!0;else{var r=t.e(),i=n.e();if(!(r||i)&&U().B(t.a1(),n.a1())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function h_(){}F=h_.prototype=new Fg,F.constructor=h_;function g_(){}g_.prototype=F,F.n=(function(){return new Am(this)}),F.aZ=(function(){return`LinearSeq`}),F.o=(function(e){return Dm(this,e)}),F.cK=(function(e){return Om(this,e)}),F.e=(function(){return this===H_()}),F.V=(function(e){for(var t=this;!t.e();)e.h(t.a1()),t=t.X()}),F.l=(function(){for(var e=this,t=0;!e.e();)t=1+t|0,e=e.X();return t}),F.aX=(function(e){return e<0?1:p_(this,0,this,e)}),F.aV=(function(){return`List`}),F.j=(function(e){return e instanceof h_?m_(this,this,e):yg(this,e)}),F.h=(function(e){return Dm(this,e|0)}),F.gb=(function(e){return ug(this,e,this)});function __(e){this.ad=null,this.ad=e}F=__.prototype=new Kg,F.constructor=__;function v_(){}v_.prototype=F,F.l=(function(){return this.ad.a.length}),F.p=(function(){var e=K();return e.eU(this.ad,e.v)}),F.j=(function(e){return e instanceof __?B().f7(this.ad,e.ad):Gg.prototype.j.call(this,e)}),F.n=(function(){return new tg(this.ad)}),F.bm=(function(e){return this.ad.a[e]}),F.h=(function(e){return this.bm(e|0)}),F.o=(function(e){return this.bm(e)}),F.T=(function(){return this.ad}),new L().i(__,`scala.collection.mutable.ArraySeq$ofBoolean`,{aO:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function y_(e){this.ae=null,this.ae=e}F=y_.prototype=new Kg,F.constructor=y_;function b_(){}b_.prototype=F,F.l=(function(){return this.ae.a.length}),F.be=(function(e){return this.ae.a[e]}),F.p=(function(){var e=K();return e.eM(this.ae,e.v)}),F.j=(function(e){return e instanceof y_?B().f0(this.ae,e.ae):Gg.prototype.j.call(this,e)}),F.n=(function(){return new zh(this.ae)}),F.h=(function(e){return this.be(e|0)}),F.o=(function(e){return this.be(e)}),F.T=(function(){return this.ae}),new L().i(y_,`scala.collection.mutable.ArraySeq$ofByte`,{aP:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function x_(e){this.O=null,this.O=e}F=x_.prototype=new Kg,F.constructor=x_;function S_(){}S_.prototype=F,F.l=(function(){return this.O.a.length}),F.bf=(function(e){return this.O.a[e]}),F.p=(function(){var e=K();return e.eN(this.O,e.v)}),F.j=(function(e){return e instanceof x_?B().f1(this.O,e.O):Gg.prototype.j.call(this,e)}),F.n=(function(){return new Vh(this.O)}),F.bd=(function(e,t,n,r){var i=e.K;t.length!==0&&(i.q=``+i.q+t);var a=this.O.a.length;if(a!==0)if(n===``)i.fR(this.O);else{i.l();var o=this.O.a[0],s=``+Pa(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.O.a[c],u=``+Pa(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),F.h=(function(e){return Ua(this.bf(e|0))}),F.o=(function(e){return Ua(this.bf(e))}),F.T=(function(){return this.O}),new L().i(x_,`scala.collection.mutable.ArraySeq$ofChar`,{aQ:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function C_(e){this.af=null,this.af=e}F=C_.prototype=new Kg,F.constructor=C_;function w_(){}w_.prototype=F,F.l=(function(){return this.af.a.length}),F.p=(function(){var e=K();return e.eO(this.af,e.v)}),F.j=(function(e){return e instanceof C_?B().f2(this.af,e.af):Gg.prototype.j.call(this,e)}),F.n=(function(){return new Uh(this.af)}),F.bh=(function(e){return this.af.a[e]}),F.h=(function(e){return this.bh(e|0)}),F.o=(function(e){return this.bh(e)}),F.T=(function(){return this.af}),new L().i(C_,`scala.collection.mutable.ArraySeq$ofDouble`,{aR:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function T_(e){this.ag=null,this.ag=e}F=T_.prototype=new Kg,F.constructor=T_;function E_(){}E_.prototype=F,F.l=(function(){return this.ag.a.length}),F.p=(function(){var e=K();return e.eP(this.ag,e.v)}),F.j=(function(e){return e instanceof T_?B().f3(this.ag,e.ag):Gg.prototype.j.call(this,e)}),F.n=(function(){return new Gh(this.ag)}),F.bi=(function(e){return this.ag.a[e]}),F.h=(function(e){return this.bi(e|0)}),F.o=(function(e){return this.bi(e)}),F.T=(function(){return this.ag}),new L().i(T_,`scala.collection.mutable.ArraySeq$ofFloat`,{aS:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function D_(e){this.ah=null,this.ah=e}F=D_.prototype=new Kg,F.constructor=D_;function O_(){}O_.prototype=F,F.l=(function(){return this.ah.a.length}),F.p=(function(){var e=K();return e.eQ(this.ah,e.v)}),F.j=(function(e){return e instanceof D_?B().f4(this.ah,e.ah):Gg.prototype.j.call(this,e)}),F.n=(function(){return new qh(this.ah)}),F.bj=(function(e){return this.ah.a[e]}),F.h=(function(e){return this.bj(e|0)}),F.o=(function(e){return this.bj(e)}),F.T=(function(){return this.ah}),new L().i(D_,`scala.collection.mutable.ArraySeq$ofInt`,{aT:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function k_(e){this.ai=null,this.ai=e}F=k_.prototype=new Kg,F.constructor=k_;function A_(){}A_.prototype=F,F.l=(function(){return this.ai.a.length}),F.p=(function(){var e=K();return e.eR(this.ai,e.v)}),F.j=(function(e){return e instanceof k_?B().f5(this.ai,e.ai):Gg.prototype.j.call(this,e)}),F.n=(function(){return new Yh(this.ai)}),F.bk=(function(e){return this.ai.a[e]}),F.h=(function(e){return this.bk(e|0)}),F.o=(function(e){return this.bk(e)}),F.T=(function(){return this.ai}),new L().i(k_,`scala.collection.mutable.ArraySeq$ofLong`,{aU:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function j_(e){this.aj=null,this.aj=e}F=j_.prototype=new Kg,F.constructor=j_;function M_(){}M_.prototype=F,F.l=(function(){return this.aj.a.length}),F.o=(function(e){return this.aj.a[e]}),F.p=(function(){var e=K();return e.eL(this.aj,e.v)}),F.j=(function(e){return e instanceof j_?ld().f8(this.aj,e.aj):Gg.prototype.j.call(this,e)}),F.n=(function(){return hh(new gh,this.aj)}),F.h=(function(e){return this.o(e|0)}),F.T=(function(){return this.aj}),new L().i(j_,`scala.collection.mutable.ArraySeq$ofRef`,{aV:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function N_(e){this.ak=null,this.ak=e}F=N_.prototype=new Kg,F.constructor=N_;function P_(){}P_.prototype=F,F.l=(function(){return this.ak.a.length}),F.bg=(function(e){return this.ak.a[e]}),F.p=(function(){var e=K();return e.eS(this.ak,e.v)}),F.j=(function(e){return e instanceof N_?B().f6(this.ak,e.ak):Gg.prototype.j.call(this,e)}),F.n=(function(){return new Zh(this.ak)}),F.h=(function(e){return this.bg(e|0)}),F.o=(function(e){return this.bg(e)}),F.T=(function(){return this.ak}),new L().i(N_,`scala.collection.mutable.ArraySeq$ofShort`,{aW:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function F_(e){this.aB=null,this.aB=e}F=F_.prototype=new Kg,F.constructor=F_;function I_(){}I_.prototype=F,F.l=(function(){return this.aB.a.length}),F.p=(function(){var e=K();return e.eT(this.aB,e.v)}),F.j=(function(e){return e instanceof F_?this.aB.a.length===e.aB.a.length:Gg.prototype.j.call(this,e)}),F.n=(function(){return new $h(this.aB)}),F.bl=(function(e){}),F.h=(function(e){this.bl(e|0)}),F.o=(function(e){this.bl(e)}),F.T=(function(){return this.aB}),new L().i(F_,`scala.collection.mutable.ArraySeq$ofUnit`,{aX:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function L_(e,t){this.cm=null,this.cn=null,this.cm=e,this.cn=t}F=L_.prototype=new g_,F.constructor=L_;function R_(){}R_.prototype=F,F.a1=(function(){return this.cm}),F.a4=(function(){return`::`}),F.a2=(function(){return 2}),F.a3=(function(e){switch(e){case 0:return this.cm;case 1:return this.cn;default:return G().bp(e)}}),F.aE=(function(){return new Im(this)}),F.X=(function(){return this.cn}),new L().i(L_,`scala.collection.immutable.$colon$colon`,{dE:1,a6:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aM:1,a1:1,ay:1,aN:1,aA:1,q:1,p:1,B:1,aB:1,a:1,T:1});function z_(){}F=z_.prototype=new g_,F.constructor=z_;function B_(){}B_.prototype=F,F.gF=(function(){throw new $p(`head of empty list`)}),F.hC=(function(){throw new Qp(`tail of empty list`)}),F.z=(function(){return 0}),F.n=(function(){return Y().w}),F.a4=(function(){return`Nil`}),F.a2=(function(){return 0}),F.a3=(function(e){return G().bp(e)}),F.aE=(function(){return new Im(this)}),F.X=(function(){this.hC()}),F.a1=(function(){this.gF()}),new L().i(z_,`scala.collection.immutable.Nil$`,{dH:1,a6:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aM:1,a1:1,ay:1,aN:1,aA:1,q:1,p:1,B:1,aB:1,a:1,T:1});var V_;function H_(){return V_||=new z_,V_}function U_(e,t){return e.K=t,e}function W_(e){return U_(e,new _p),e}function G_(){this.K=null}F=G_.prototype=new Bg,F.constructor=G_;function K_(){}K_.prototype=F,F.aZ=(function(){return`IndexedSeq`}),F.n=(function(){return new yh(new Mg(this))}),F.aX=(function(e){var t=this.K.l();return t===e?0:t<e?-1:1}),F.eI=(function(e){return Sd(this,e)}),F.l=(function(){return this.K.l()}),F.z=(function(){return this.K.l()}),F.fN=(function(e){var t=this.K,n=``+Pa(e);return t.q+=n,this}),F.t=(function(){return this.K.q}),F.e=(function(){return this.K.l()===0}),F.fl=(function(){return this.K.q}),F.ct=(function(e){return this.fN(Wa(e))}),F.h=(function(e){var t=e|0;return Ua(this.K.eW(t))}),F.o=(function(e){return Ua(this.K.eW(e))}),new L().i(G_,`scala.collection.mutable.StringBuilder`,{dP:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,dN:1,aY:1,b0:1,aZ:1,E:1,n:1,o:1,F:1,a4:1,a:1});function q_(e,t){return e.aC=t,e}function J_(e){return q_(e,[]),e}function Y_(){this.aC=null}F=Y_.prototype=new Hg,F.constructor=Y_;function X_(){}X_.prototype=F,F.aZ=(function(){return`IndexedSeq`}),F.n=(function(){return new yh(new Mg(this))}),F.aX=(function(e){var t=this.aC.length|0;return t===e?0:t<e?-1:1}),F.o=(function(e){return this.aC[e]}),F.l=(function(){return this.aC.length|0}),F.z=(function(){return this.aC.length|0}),F.aV=(function(){return`WrappedArray`}),F.fl=(function(){return this}),F.ct=(function(e){return this.aC.push(e),this}),F.h=(function(e){var t=e|0;return this.aC[t]}),new L().i(Y_,`scala.scalajs.js.WrappedArray`,{eg:1,dI:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,dK:1,b0:1,aZ:1,dO:1,q:1,p:1,E:1,n:1,o:1,F:1,dM:1,aY:1,a:1}),wa=new V(0,0),oo.z=wa,gc(new(oh.r()).C([]));