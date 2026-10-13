var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,ee=_.trustedTypes,v=ee?ee.emptyScript:``,te=_.reactiveElementPolyfillSupport,ne=(e,t)=>e,re={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ie=(e,t)=>!d(e,t),ae={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:ie};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=new WeakMap;var y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(ne(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?re:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?re:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ie)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:`open`},y[ne(`elementProperties`)]=new Map,y[ne(`finalized`)]=new Map,te?.({ReactiveElement:y}),(_.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const oe=globalThis,se=oe.trustedTypes,ce=se?se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,le=`$lit$`,b=`lit$${Math.random().toFixed(9).slice(2)}$`,ue=`?`+b,de=`<${ue}>`,fe=document,pe=()=>fe.createComment(``),me=e=>e===null||typeof e!=`object`&&typeof e!=`function`,he=Array.isArray,ge=e=>he(e)||typeof e?.[Symbol.iterator]==`function`,_e=`[ 	
\f\r]`,ve=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ye=/-->/g,be=/>/g,xe=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Se=/'/g,Ce=/"/g,we=/^(?:script|style|textarea|title)$/i,x=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Te=Symbol.for(`lit-noChange`),S=Symbol.for(`lit-nothing`),Ee=new WeakMap,De=fe.createTreeWalker(fe,129);function Oe(e,t){if(!he(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ce===void 0?t:ce.createHTML(t)}const ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ve;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ve?c[1]===`!--`?o=ye:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=xe):(we.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=xe):o=be:o===xe?c[0]===`>`?(o=i??ve,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?xe:c[3]===`"`?Ce:Se):o===Ce||o===Se?o=xe:o===ye||o===be?o=ve:(o=xe,i=void 0);let d=o===xe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ve?n+de:l>=0?(r.push(s),n.slice(0,l)+le+n.slice(l)+b+d):n+b+(l===-2?t:d)}return[Oe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ae=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ke(t,n);if(this.el=e.createElement(l,r),De.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=De.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(le)){let t=u[o++],n=i.getAttribute(e).split(b),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Fe:r[1]===`?`?Ie:r[1]===`@`?Le:Pe}),i.removeAttribute(e)}else e.startsWith(b)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(we.test(i.tagName)){let e=i.textContent.split(b),t=e.length-1;if(t>0){i.textContent=se?se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],pe()),De.nextNode(),c.push({type:2,index:++a});i.append(e[t],pe())}}}else if(i.nodeType===8)if(i.data===ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(b,e+1))!==-1;)c.push({type:7,index:a}),e+=b.length-1}a++}}static createElement(e,t){let n=fe.createElement(`template`);return n.innerHTML=e,n}};function je(e,t,n=e,r){if(t===Te)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=me(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=je(e,i._$AS(e,t.values),i,r)),t}var Me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??fe).importNode(t,!0);De.currentNode=r;let i=De.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ne(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Re(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=De.nextNode(),a++)}return De.currentNode=fe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ne=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=je(this,e,t),me(e)?e===S||e==null||e===``?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ge(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&me(this._$AH)?this._$AA.nextSibling.data=e:this.T(fe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ae.createElement(Oe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Me(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ee.get(e.strings);return t===void 0&&Ee.set(e.strings,t=new Ae(e)),t}k(t){he(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(pe()),this.O(pe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=je(this,e,t,0),a=!me(e)||e!==this._$AH&&e!==Te,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=je(this,r[n+o],t,o),s===Te&&(s=this._$AH[o]),a||=!me(s)||s!==this._$AH[o],s===S?e=S:e!==S&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Fe=class extends Pe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Ie=class extends Pe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Le=class extends Pe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=je(this,e,t,0)??S)===Te)return;let n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Re=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){je(this,e)}};const ze={M:le,P:b,A:ue,C:1,L:ke,R:Me,D:ge,V:je,I:Ne,H:Pe,N:Ie,U:Le,B:Fe,F:Re},Be=oe.litHtmlPolyfillSupport;Be?.(Ae,Ne),(oe.litHtmlVersions??=[]).push(`3.3.1`);const Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ne(t.insertBefore(pe(),e),e,void 0,n??{})}return i._$AI(e),i},He=globalThis;var Ue=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};Ue._$litElement$=!0,Ue.finalized=!0,He.litElementHydrateSupport?.({LitElement:Ue});const We=He.litElementPolyfillSupport;We?.({LitElement:Ue}),(He.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ge=c`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
    --label-spacing: var(--wa-space-s);
    --label-offset: 0;
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

  /* With a label, the host's border gives way to two lines that flank the label */
  :host([with-label]) {
    align-items: center;
    gap: var(--label-spacing);
    border: none;
  }

  :host([with-label]:not([orientation='vertical'])) {
    display: flex;
  }

  :host([with-label][orientation='vertical']) {
    display: inline-flex;
    flex-direction: column;
  }

  :host([with-label])::before,
  :host([with-label])::after {
    content: '';
    flex: 1 1 0;
  }

  :host([with-label]:not([orientation='vertical']))::before,
  :host([with-label]:not([orientation='vertical']))::after {
    min-inline-size: 1em;
    border-top: solid var(--width) var(--color);
  }

  :host([with-label][orientation='vertical'])::before,
  :host([with-label][orientation='vertical'])::after {
    min-block-size: 1lh;
    border-inline-start: solid var(--width) var(--color);
  }

  :host([with-label][label-placement='start'])::before,
  :host([with-label][label-placement='end'])::after {
    flex: 0 0 var(--label-offset);
    min-inline-size: 0;
    min-block-size: 0;
  }

  :host(:not([with-label])) .label {
    display: none;
  }

  :host([with-label]) .label {
    display: inline-flex;
    align-items: center;
    gap: var(--wa-space-2xs);
    flex: 0 1 auto;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-s);
    line-height: var(--wa-line-height-condensed);
    text-align: center;
  }
`,Ke=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function qe(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Je=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Xe=e=>{throw TypeError(e)},C=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ye(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Je(t,n,i),i},Ze=(e,t,n)=>t.has(e)||Xe(`Cannot `+n),Qe=(e,t,n)=>(Ze(e,t,`read from private field`),n?n.call(e):t.get(e)),$e=(e,t,n)=>t.has(e)?Xe(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),et=(e,t,n,r)=>(Ze(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},nt={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:ie},rt=(e=nt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function w(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e){return w({...e,state:!0,attribute:!1})}
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=c`
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
`,ct=/;\s+$/;function lt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ut(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ct)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var dt,ft=class extends Ue{constructor(){super(),$e(this,dt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[st,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Qe(this,dt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),et(this,dt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ut({property:lt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ut({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};dt=new WeakMap,C([w()],ft.prototype,`dir`,2),C([w()],ft.prototype,`lang`,2),C([w({type:Boolean,reflect:!0,attribute:`did-ssr`})],ft.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=class extends ft{constructor(){super(...arguments),this.hasSlotController=new Ke(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return x`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};pt.css=Ge,C([w({reflect:!0})],pt.prototype,`orientation`,2),C([w({attribute:`with-label`,type:Boolean,reflect:!0})],pt.prototype,`withLabel`,2),C([w({attribute:`label-placement`,reflect:!0})],pt.prototype,`labelPlacement`,2),C([qe(`orientation`)],pt.prototype,`handleVerticalChange`,1),pt=C([tt(`wa-divider`)],pt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var mt=t({default:()=>pt}),ht=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},gt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},_t=c`
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
`,vt=``,yt=``;function bt(){return vt.replace(/\/$/,``)}function xt(e){yt=e}function St(){if(!yt){let e=document.querySelector(`[data-fa-kit-code]`);e&&xt(e.getAttribute(`data-fa-kit-code`)||``)}return yt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=`7.3.0`;function wt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Tt(e,t,n){let r=wt(e,t,n),i=bt();if(i)return`${i}/${r}/${e}.svg`;let a=St();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Ct}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Ct}/svgs/${r}/${e}.svg`}var Et={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Tt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Dt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Ot={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},kt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Ot[n][e]??Ot.regular[e]??Ot.regular[`circle-question`];return r?Dt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},At=`classic`,jt=[Et,kt],Mt=new Set;function Nt(e){Mt.add(e)}function Pt(e){Mt.delete(e)}function Ft(e){return jt.find(t=>t.name===e)}function It(){return At}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Lt}=ze,Rt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=Symbol(),Bt=Symbol(),Vt,Ht=new Map,T=class extends ft{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=x`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?zt:Bt}catch{return Bt}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return zt;Vt||=new DOMParser;let r=Vt.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):zt}catch{return zt}}}connectedCallback(){super.connectedCallback(),Nt(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Pt(this)}async getIconSource(){let e=Ft(this.library),t=this.family||It();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Ft(this.library):void 0;if(!e){this.svg=null;return}let r=Ht.get(e);r||(r=this.resolveIcon(e,n),Ht.set(e,r));let i=await r;if(i===Bt&&Ht.delete(e),e===(await this.getIconSource()).url){if(Rt(i)){this.svg=i;return}switch(i){case Bt:case zt:this.svg=null,this.dispatchEvent(new ht);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new gt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Ft(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:x`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};T.css=_t,C([it()],T.prototype,`svg`,2),C([w({reflect:!0})],T.prototype,`name`,2),C([w({reflect:!0})],T.prototype,`family`,2),C([w({reflect:!0})],T.prototype,`variant`,2),C([w({reflect:!0})],T.prototype,`canvas`,2),C([w({attribute:`auto-width`,type:Boolean,reflect:!0})],T.prototype,`autoWidth`,2),C([w({attribute:`swap-opacity`,type:Boolean,reflect:!0})],T.prototype,`swapOpacity`,2),C([w()],T.prototype,`src`,2),C([w()],T.prototype,`label`,2),C([w({reflect:!0})],T.prototype,`library`,2),C([w({type:Number,reflect:!0})],T.prototype,`rotate`,2),C([w({type:String,reflect:!0})],T.prototype,`flip`,2),C([w({type:String,reflect:!0})],T.prototype,`animation`,2),C([qe(`label`)],T.prototype,`handleLabelChange`,1),C([qe([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],T.prototype,`setIcon`,1),T=C([tt(`wa-icon`)],T);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ut=t({default:()=>T}),Wt=c`
  :host {
    --current-text-color: var(--wa-color-brand-on-loud);

    display: block;
    color: var(--wa-color-text-normal);
    -webkit-user-select: none;
    user-select: none;

    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    padding: 0.5em 1em 0.5em 0.25em;
    border-radius: var(--wa-border-radius-s);
    line-height: var(--wa-line-height-condensed);
    transition: var(--wa-transition-fast) background-color var(--wa-transition-easing);
    cursor: pointer;
  }

  :host(:focus) {
    outline: none;
  }

  @media (hover: hover) {
    :host(:not(:state(disabled), :state(current)):is(:state(hover), :hover)) {
      background-color: var(--wa-color-neutral-fill-normal);
      color: var(--wa-color-neutral-on-normal);
    }
  }

  :host(:state(current)),
  :host(:state(disabled):state(current)) {
    background-color: var(--wa-form-control-activated-color);
    color: var(--current-text-color);
    opacity: 1;
  }

  :host(:state(disabled)) {
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
`;const Gt=new Set,Kt=new Map;let qt,Jt=`ltr`,Yt=`en`;const Xt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Xt){let e=new MutationObserver(Qt);Jt=document.documentElement.dir||`ltr`,Yt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Zt(...e){e.map(e=>{let t=e.$code.toLowerCase();Kt.has(t)?Kt.set(t,Object.assign(Object.assign({},Kt.get(t)),e)):Kt.set(t,e),qt||=e}),Qt()}function Qt(){Xt&&(Jt=document.documentElement.dir||`ltr`,Yt=document.documentElement.lang||navigator.language),[...Gt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var $t=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Gt.add(this.host)}hostDisconnected(){Gt.delete(this.host)}dir(){return`${this.host.dir||Jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Yt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return qt?qt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Kt.get(`${n}-${r}`),a=Kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&qt&&qt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(qt&&qt[e])i=qt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},en={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Zt(en);var tn=en,nn=class extends $t{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Zt(tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function rn(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>rn(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return rn(n,--t)}return t>-1?rn(e,--t):e.textContent??``}return n.hasChildNodes()?rn(n.childNodes,--t):``}var an=class extends ft{constructor(){super(...arguments),this.localize=new nn(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=rn(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),S):x`
      ${e?x`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:x`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};an.css=Wt,C([ot(`.label`)],an.prototype,`defaultSlot`,2),C([it()],an.prototype,`current`,2),C([w({reflect:!0})],an.prototype,`value`,2),C([w({type:Boolean})],an.prototype,`disabled`,2),C([w({type:Boolean,attribute:!1})],an.prototype,`selected`,2),C([w({type:Boolean,attribute:`selected`})],an.prototype,`defaultSelected`,2),C([w()],an.prototype,`label`,1),an=C([tt(`wa-option`)],an);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var on=t({default:()=>an}),sn=c`
  :host {
    --tag-max-size: 10ch;
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
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
    outline-color: var(--wa-color-focus);
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
    transition:
      background-color var(--wa-transition-normal),
      border-color var(--wa-transition-normal),
      outline-color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
    outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
    outline-offset: var(--wa-focus-ring-offset);

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

  /* Manage spacing when tags are present */
  :host([multiple]) {
    --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

    & .combobox:has(.tags wa-tag) {
      padding-block: var(--_padding-with-tags);
      padding-inline-start: var(--_padding-with-tags);
    }
  }

  /* Visually hide the display input when multiple is enabled */
  :host([multiple]) .combobox:has(.tags wa-tag) .display-input {
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
    gap: 0.25em;

    /* Nested inside the box, so a step down from the box's radius */
    & wa-tag:not([pill]) {
      border-radius: var(--wa-border-radius-s);
    }

    .disabled & {
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

  :host([multiple]) .combobox:has(.tags wa-tag) .start::slotted(*) {
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
  }

  /* Clear button */
  [part~='clear-button'] {
    flex: 0 0 auto;
    display: inline-flex;
    align-self: stretch;
    align-items: center;
    justify-content: center;
    inline-size: 1.5em;
    font-size: inherit;
    color: var(--wa-color-neutral-on-quiet);
    border: none;
    background: none;
    padding: 0;
    transition: color var(--wa-transition-normal);
    cursor: pointer;
    /* The box is wider than the glyph, so overhang half that growth on each side. Keeps the glyph
       on the same trailing axis as the segmented-field pickers' clear buttons. */
    margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.125em);
    margin-inline-end: -0.125em;

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
    transition: rotate var(--wa-transition-slow) var(--wa-transition-easing);
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
    padding: 0.25em;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);

    &::slotted(wa-divider) {
      --spacing: 0.5em;
    }
  }

  /* Space options with half the listbox's padding */
  .listbox slot:not([name]) {
    display: flex;
    flex-direction: column;
    gap: 0.125em;
  }

  slot:not([name])::slotted(small) {
    display: block;
    font-size: var(--wa-font-size-smaller);
    font-weight: var(--wa-font-weight-semibold);
    color: var(--wa-color-text-quiet);
    padding-block: 0.5em;
    padding-inline: 2.25em;
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function cn(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function ln(e,t,n=`vertical`,r=`smooth`){let i=cn(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var un=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},dn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},fn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},mn=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}},hn=[];function gn(e){_n(e),hn.push(e)}function _n(e){for(let t=hn.length-1;t>=0;t--)if(hn[t]===e){hn.splice(t,1);break}}function vn(e){return hn.length>0&&hn[hn.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yn=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},bn=c`
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
`,xn=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Sn=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Cn=class extends ft{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new xn))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Sn()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Cn.formAssociated=!0,C([w({reflect:!0})],Cn.prototype,`name`,2),C([w({type:Boolean})],Cn.prototype,`disabled`,2),C([w({state:!0,attribute:!1})],Cn.prototype,`valueHasChanged`,2),C([w({state:!0,attribute:!1})],Cn.prototype,`hasInteracted`,2),C([w({attribute:`custom-error`,reflect:!0})],Cn.prototype,`customError`,2),C([w({attribute:!1,state:!0,type:Object})],Cn.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn={small:`s`,medium:`m`,large:`l`},Tn=new Set;function En(e,t){t in wn&&!Tn.has(`${e}:${t}`)&&(Tn.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${wn[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=c`
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
function On(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function kn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const An={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},jn=e=>(...t)=>({_$litDirective$:e,values:t});var Mn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Nn=jn(class extends Mn{constructor(e){if(super(e),e.type!==An.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Te}});
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Pn=class extends Mn{constructor(e){if(super(e),this.it=S,e.type!==An.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===S||e==null)return this._t=void 0,this.it=e;if(e===Te)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Pn.directiveName=`unsafeHTML`,Pn.resultType=1;const Fn=jn(Pn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var E=class extends Cn{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new Ke(this,`hint`,`label`),this.localize=new nn(this),this.selectionOrder=new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>x`
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
          data-value=${e.value}
          @wa-remove=${t=>this.handleTagRemove(t,e)}
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&vn(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[yn({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){En(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),gn(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),_n(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new mn),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&ln(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Fn(n):n:null}else if(t===this.maxOptionsVisible)return x`
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
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new un;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await kn(this.popup.popup,`show`),this.currentOption&&ln(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new pn)}else{let e=new dn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await kn(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new fn)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,On(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,On(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return x`
      <div
        part="form-control"
        class=${Nn({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Nn({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Nn({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
              ${this.multiple&&this.hasUpdated?x`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?x`
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
          class=${Nn({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};E.css=[sn,bn,Dn],C([ot(`.select`)],E.prototype,`popup`,2),C([ot(`.combobox`)],E.prototype,`combobox`,2),C([ot(`.display-input`)],E.prototype,`displayInput`,2),C([ot(`.value-input`)],E.prototype,`valueInput`,2),C([ot(`.listbox`)],E.prototype,`listbox`,2),C([it()],E.prototype,`displayLabel`,2),C([it()],E.prototype,`currentOption`,2),C([it()],E.prototype,`selectedOptions`,2),C([w({reflect:!0})],E.prototype,`name`,2),C([w({attribute:!1})],E.prototype,`defaultValue`,1),C([w({attribute:`value`,reflect:!1})],E.prototype,`value`,1),C([w({reflect:!0})],E.prototype,`size`,2),C([qe(`size`)],E.prototype,`handleSizeChange`,1),C([w()],E.prototype,`placeholder`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`multiple`,2),C([w({attribute:`max-options-visible`,type:Number})],E.prototype,`maxOptionsVisible`,2),C([w({type:Boolean})],E.prototype,`disabled`,2),C([w({attribute:`with-clear`,type:Boolean})],E.prototype,`withClear`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`open`,2),C([w({reflect:!0})],E.prototype,`appearance`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`pill`,2),C([w()],E.prototype,`label`,2),C([w({reflect:!0})],E.prototype,`placement`,2),C([w({attribute:`hint`})],E.prototype,`hint`,2),C([w({attribute:`with-label`,type:Boolean})],E.prototype,`withLabel`,2),C([w({attribute:`with-hint`,type:Boolean})],E.prototype,`withHint`,2),C([w({type:Boolean,reflect:!0})],E.prototype,`required`,2),C([w({attribute:!1})],E.prototype,`getTag`,2),C([qe(`disabled`,{waitUntilFirstUpdate:!0})],E.prototype,`handleDisabledChange`,1),C([qe(`value`,{waitUntilFirstUpdate:!0})],E.prototype,`handleValueChange`,1),C([qe(`open`,{waitUntilFirstUpdate:!0})],E.prototype,`handleOpenChange`,1),E=C([tt(`wa-select`)],E),E.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var In=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Ln=c`
  @layer wa-component {
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
    line-height: 1;
  }

  [part='remove-button']::part(base) {
    padding: 0;
    height: 1em;
    width: 1em;
    color: currentColor;
  }

  @media (hover: hover) {
    :host(:hover) > [part='remove-button']::part(base) {
      background-color: transparent;
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  :host(:active) > [part='remove-button']::part(base) {
    background-color: transparent;
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  /*
   * Pill modifier
   */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }
`,Rn=c`
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
`,zn=class extends ft{constructor(){super(...arguments),this.localize=new nn(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){En(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new In)}render(){return x`
      <slot part="content" class="content"></slot>

      ${this.withRemove?x`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              size=${this.size}
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term(`remove`)}></wa-icon>
            </wa-button>
          `:``}
    `}};zn.css=[Ln,Rn,Dn],C([w({reflect:!0})],zn.prototype,`variant`,2),C([w({reflect:!0})],zn.prototype,`appearance`,2),C([w({reflect:!0})],zn.prototype,`size`,2),C([qe(`size`)],zn.prototype,`handleSizeChange`,1),C([w({type:Boolean,reflect:!0})],zn.prototype,`pill`,2),C([w({attribute:`with-remove`,type:Boolean})],zn.prototype,`withRemove`,2),zn=C([tt(`wa-tag`)],zn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Vn=c`
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
`;const Hn=Math.min,Un=Math.max,Wn=Math.round,Gn=Math.floor,Kn=e=>({x:e,y:e}),qn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Jn={start:`end`,end:`start`};function Yn(e,t,n){return Un(e,Hn(t,n))}function Xn(e,t){return typeof e==`function`?e(t):e}function Zn(e){return e.split(`-`)[0]}function Qn(e){return e.split(`-`)[1]}function $n(e){return e===`x`?`y`:`x`}function er(e){return e===`y`?`height`:`width`}const tr=new Set([`top`,`bottom`]);function nr(e){return tr.has(Zn(e))?`y`:`x`}function rr(e){return $n(nr(e))}function ir(e,t,n){n===void 0&&(n=!1);let r=Qn(e),i=rr(e),a=er(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=pr(o)),[o,pr(o)]}function ar(e){let t=pr(e);return[or(e),t,or(t)]}function or(e){return e.replace(/start|end/g,e=>Jn[e])}const sr=[`left`,`right`],cr=[`right`,`left`],lr=[`top`,`bottom`],ur=[`bottom`,`top`];function dr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?cr:sr:t?sr:cr;case`left`:case`right`:return t?lr:ur;default:return[]}}function fr(e,t,n,r){let i=Qn(e),a=dr(Zn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(or)))),a}function pr(e){return e.replace(/left|right|bottom|top/g,e=>qn[e])}function mr(e){return{top:0,right:0,bottom:0,left:0,...e}}function hr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:mr(e)}function gr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function _r(e,t,n){let{reference:r,floating:i}=e,a=nr(t),o=rr(t),s=er(o),c=Zn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Qn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const vr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=_r(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:ee,reset:v}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...ee}},v&&m<=50&&(m++,typeof v==`object`&&(v.placement&&(f=v.placement),v.rects&&(l=v.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):v.rects),{x:u,y:d}=_r(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function yr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Xn(t,e),p=hr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=gr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),ee=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},v=gr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-v.top+p.top)/ee.y,bottom:(v.bottom-h.bottom+p.bottom)/ee.y,left:(h.left-v.left+p.left)/ee.x,right:(v.right-h.right+p.right)/ee.x}}const br=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Xn(e,t)||{};if(l==null)return{};let d=hr(u),f={x:n,y:r},p=rr(i),m=er(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,ee=g?`bottom`:`right`,v=g?`clientHeight`:`clientWidth`,te=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ne=f[p]-a.reference[p],re=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),ie=re?re[v]:0;(!ie||!await(o.isElement==null?void 0:o.isElement(re)))&&(ie=s.floating[v]||a.floating[m]);let ae=te/2-ne/2,y=ie/2-h[m]/2-1,oe=Hn(d[_],y),se=Hn(d[ee],y),ce=oe,le=ie-h[m]-se,b=ie/2-h[m]/2+ae,ue=Yn(ce,b,le),de=!c.arrow&&Qn(i)!=null&&b!==ue&&a.reference[m]/2-(b<ce?oe:se)-h[m]/2<0,fe=de?b<ce?b-ce:b-le:0;return{[p]:f[p]+fe,data:{[p]:ue,centerOffset:b-ue-fe,...de&&{alignmentOffset:fe}},reset:de}}}),xr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Xn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Zn(r),_=nr(o),ee=Zn(o)===o,v=await(s.isRTL==null?void 0:s.isRTL(c.floating)),te=d||(ee||!m?[pr(o)]:ar(o)),ne=p!==`none`;!d&&ne&&te.push(...fr(o,m,p,v));let re=[o,...te],ie=await yr(t,h),ae=[],y=i.flip?.overflows||[];if(l&&ae.push(ie[g]),u){let e=ir(r,a,v);ae.push(ie[e[0]],ie[e[1]])}if(y=[...y,{placement:r,overflows:ae}],!ae.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=re[e];if(t&&(!(u===`alignment`&&_!==nr(t))||y.every(e=>nr(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:y},reset:{placement:t}};let n=y.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=y.filter(e=>{if(ne){let t=nr(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Sr=new Set([`left`,`top`]);async function Cr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Zn(n),s=Qn(n),c=nr(n)===`y`,l=Sr.has(o)?-1:1,u=a&&c?-1:1,d=Xn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const wr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Cr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Tr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Xn(e,t),l={x:n,y:r},u=await yr(t,c),d=nr(Zn(i)),f=$n(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Yn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Yn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Er=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Xn(e,t),u=await yr(t,l),d=Zn(i),f=Qn(i),p=nr(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let ee=h-u.top-u.bottom,v=m-u.left-u.right,te=Hn(h-u[g],ee),ne=Hn(m-u[_],v),re=!t.middlewareData.shift,ie=te,ae=ne;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ae=v),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(ie=ee),re&&!f){let e=Un(u.left,0),t=Un(u.right,0),n=Un(u.top,0),r=Un(u.bottom,0);p?ae=m-2*(e!==0||t!==0?e+t:Un(u.left,u.right)):ie=h-2*(n!==0||r!==0?n+r:Un(u.top,u.bottom))}await c({...t,availableWidth:ae,availableHeight:ie});let y=await o.getDimensions(s.floating);return m!==y.width||h!==y.height?{reset:{rects:!0}}:{}}}};function Dr(){return typeof window<`u`}function Or(e){return jr(e)?(e.nodeName||``).toLowerCase():`#document`}function kr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ar(e){return((jr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function jr(e){return Dr()?e instanceof Node||e instanceof kr(e).Node:!1}function Mr(e){return Dr()?e instanceof Element||e instanceof kr(e).Element:!1}function Nr(e){return Dr()?e instanceof HTMLElement||e instanceof kr(e).HTMLElement:!1}function Pr(e){return!Dr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof kr(e).ShadowRoot}const Fr=new Set([`inline`,`contents`]);function Ir(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Yr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Fr.has(i)}const Lr=new Set([`table`,`td`,`th`]);function Rr(e){return Lr.has(Or(e))}const zr=[`:popover-open`,`:modal`];function Br(e){return zr.some(t=>{try{return e.matches(t)}catch{return!1}})}const Vr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Hr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Ur=[`paint`,`layout`,`strict`,`content`];function Wr(e){let t=Kr(),n=Mr(e)?Yr(e):e;return Vr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Hr.some(e=>(n.willChange||``).includes(e))||Ur.some(e=>(n.contain||``).includes(e))}function Gr(e){let t=Zr(e);for(;Nr(t)&&!Jr(t);){if(Wr(t))return t;if(Br(t))return null;t=Zr(t)}return null}function Kr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const qr=new Set([`html`,`body`,`#document`]);function Jr(e){return qr.has(Or(e))}function Yr(e){return kr(e).getComputedStyle(e)}function Xr(e){return Mr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Zr(e){if(Or(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Pr(e)&&e.host||Ar(e);return Pr(t)?t.host:t}function Qr(e){let t=Zr(e);return Jr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Nr(t)&&Ir(t)?t:Qr(t)}function $r(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Qr(e),i=r===e.ownerDocument?.body,a=kr(r);if(i){let e=ei(a);return t.concat(a,a.visualViewport||[],Ir(r)?r:[],e&&n?$r(e):[])}return t.concat(r,$r(r,[],n))}function ei(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ti(e){let t=Yr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Nr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Wn(n)!==a||Wn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ni(e){return Mr(e)?e:e.contextElement}function ri(e){let t=ni(e);if(!Nr(t))return Kn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ti(t),o=(a?Wn(n.width):n.width)/r,s=(a?Wn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ii=Kn(0);function ai(e){let t=kr(e);return!Kr()||!t.visualViewport?ii:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function oi(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==kr(e)?!1:t}function si(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ni(e),o=Kn(1);t&&(r?Mr(r)&&(o=ri(r)):o=ri(e));let s=oi(a,n,r)?ai(a):Kn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=kr(a),t=r&&Mr(r)?kr(r):r,n=e,i=ei(n);for(;i&&r&&t!==n;){let e=ri(i),t=i.getBoundingClientRect(),r=Yr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=kr(i),i=ei(n)}}return gr({width:u,height:d,x:c,y:l})}function ci(e,t){let n=Xr(e).scrollLeft;return t?t.left+n:si(Ar(e)).left+n}function li(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ci(e,n),y:n.top+t.scrollTop}}function ui(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Ar(r),s=t?Br(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Kn(1),u=Kn(0),d=Nr(r);if((d||!d&&!a)&&((Or(r)!==`body`||Ir(o))&&(c=Xr(r)),Nr(r))){let e=si(r);l=ri(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?li(o,c):Kn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function di(e){return Array.from(e.getClientRects())}function fi(e){let t=Ar(e),n=Xr(e),r=e.ownerDocument.body,i=Un(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Un(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ci(e),s=-n.scrollTop;return Yr(r).direction===`rtl`&&(o+=Un(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function pi(e,t){let n=kr(e),r=Ar(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Kr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ci(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const mi=new Set([`absolute`,`fixed`]);function hi(e,t){let n=si(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Nr(e)?ri(e):Kn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function gi(e,t,n){let r;if(t===`viewport`)r=pi(e,n);else if(t===`document`)r=fi(Ar(e));else if(Mr(t))r=hi(t,n);else{let n=ai(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return gr(r)}function _i(e,t){let n=Zr(e);return n===t||!Mr(n)||Jr(n)?!1:Yr(n).position===`fixed`||_i(n,t)}function vi(e,t){let n=t.get(e);if(n)return n;let r=$r(e,[],!1).filter(e=>Mr(e)&&Or(e)!==`body`),i=null,a=Yr(e).position===`fixed`,o=a?Zr(e):e;for(;Mr(o)&&!Jr(o);){let t=Yr(o),n=Wr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&mi.has(i.position)||Ir(o)&&!n&&_i(e,o))?r=r.filter(e=>e!==o):i=t,o=Zr(o)}return t.set(e,r),r}function yi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Br(t)?[]:vi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=gi(t,n,i);return e.top=Un(r.top,e.top),e.right=Hn(r.right,e.right),e.bottom=Hn(r.bottom,e.bottom),e.left=Un(r.left,e.left),e},gi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function bi(e){let{width:t,height:n}=ti(e);return{width:t,height:n}}function xi(e,t,n){let r=Nr(t),i=Ar(t),a=n===`fixed`,o=si(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Kn(0);function l(){c.x=ci(i)}if(r||!r&&!a)if((Or(t)!==`body`||Ir(i))&&(s=Xr(t)),r){let e=si(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?li(i,s):Kn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Si(e){return Yr(e).position===`static`}function Ci(e,t){if(!Nr(e)||Yr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Ar(e)===n&&(n=n.ownerDocument.body),n}function wi(e,t){let n=kr(e);if(Br(e))return n;if(!Nr(e)){let t=Zr(e);for(;t&&!Jr(t);){if(Mr(t)&&!Si(t))return t;t=Zr(t)}return n}let r=Ci(e,t);for(;r&&Rr(r)&&Si(r);)r=Ci(r,t);return r&&Jr(r)&&Si(r)&&!Wr(r)?n:r||Gr(e)||n}const Ti=async function(e){let t=this.getOffsetParent||wi,n=this.getDimensions,r=await n(e.floating);return{reference:xi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ei(e){return Yr(e).direction===`rtl`}const Di={convertOffsetParentRelativeRectToViewportRelativeRect:ui,getDocumentElement:Ar,getClippingRect:yi,getOffsetParent:wi,getElementRects:Ti,getClientRects:di,getDimensions:bi,getScale:ri,isElement:Mr,isRTL:Ei};function Oi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ki(e,t){let n=null,r,i=Ar(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Gn(d),h=Gn(i.clientWidth-(u+f)),g=Gn(i.clientHeight-(d+p)),_=Gn(u),ee={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Un(0,Hn(1,c))||1},v=!0;function te(t){let n=t[0].intersectionRatio;if(n!==c){if(!v)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Oi(l,e.getBoundingClientRect())&&o(),v=!1}try{n=new IntersectionObserver(te,{...ee,root:i.ownerDocument})}catch{n=new IntersectionObserver(te,ee)}n.observe(e)}return o(!0),a}function Ai(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ni(e),u=i||a?[...l?$r(l):[],...$r(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ki(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?si(e):null;c&&g();function g(){let t=si(e);h&&!Oi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ji=wr,Mi=Tr,Ni=xr,Pi=Er,Fi=br,Ii=(e,t,n)=>{let r=new Map,i={platform:Di,...n},a={...i.platform,_c:r};return vr(e,t,{...i,platform:a})};function Li(e){return zi(e)}function Ri(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function zi(e){for(let t=e;t;t=Ri(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ri(e);t;t=Ri(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Wr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Bi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Vi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),D=class extends ft{constructor(){super(...arguments),this.localize=new nn(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Vi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Bi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Ai(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[ji({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Pi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Bi(this.anchor)&&this.boundary===`scroll`&&(t=$r(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ni({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Mi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Pi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Fi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Di.getOffsetParent(e,Li):Di.getOffsetParent;Ii(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Di,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Bn)}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Nn({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Nn({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};D.css=Vn,C([ot(`.popup`)],D.prototype,`popup`,2),C([ot(`.arrow`)],D.prototype,`arrowEl`,2),C([w({attribute:!1,type:Boolean})],D.prototype,`SUPPORTS_POPOVER`,2),C([w()],D.prototype,`anchor`,2),C([w({type:Boolean,reflect:!0})],D.prototype,`active`,2),C([w({reflect:!0})],D.prototype,`placement`,2),C([w()],D.prototype,`boundary`,2),C([w({type:Number})],D.prototype,`distance`,2),C([w({type:Number})],D.prototype,`skidding`,2),C([w({type:Boolean})],D.prototype,`arrow`,2),C([w({attribute:`arrow-placement`})],D.prototype,`arrowPlacement`,2),C([w({attribute:`arrow-padding`,type:Number})],D.prototype,`arrowPadding`,2),C([w({type:Boolean})],D.prototype,`flip`,2),C([w({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],D.prototype,`flipFallbackPlacements`,2),C([w({attribute:`flip-fallback-strategy`})],D.prototype,`flipFallbackStrategy`,2),C([w({type:Object})],D.prototype,`flipBoundary`,2),C([w({attribute:`flip-padding`,type:Number})],D.prototype,`flipPadding`,2),C([w({type:Boolean})],D.prototype,`shift`,2),C([w({type:Object})],D.prototype,`shiftBoundary`,2),C([w({attribute:`shift-padding`,type:Number})],D.prototype,`shiftPadding`,2),C([w({attribute:`auto-size`})],D.prototype,`autoSize`,2),C([w()],D.prototype,`sync`,2),C([w({type:Object})],D.prototype,`autoSizeBoundary`,2),C([w({attribute:`auto-size-padding`,type:Number})],D.prototype,`autoSizePadding`,2),C([w({attribute:`hover-bridge`,type:Boolean})],D.prototype,`hoverBridge`,2),D=C([tt(`wa-popup`)],D);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Hi=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Ui=c`
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
`;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Wi=e=>e??S,Gi=Symbol.for(``),Ki=e=>{if(e?.r===Gi)return e?._$litStatic$},qi=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Gi}),Ji=new Map,Yi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Ki(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ji.get(e))===void 0&&(o.raw=o,Ji.set(e,t=o)),n=s}return e(t,...n)})(x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var O=class extends Cn{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ke(this,`[default]`,`start`,`end`),this.localize=new nn(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Hi()]}handleSizeChange(){En(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new xn)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?qi`a`:qi`button`;return Yi`
      <${t}
        part="base button"
        class=${Nn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Wi(e?void 0:this.disabled)}
        type=${Wi(e?void 0:this.type)}
        title=${this.title}
        name=${Wi(e?void 0:this.name)}
        value=${Wi(e?void 0:this.value)}
        href=${Wi(e?this.href:void 0)}
        target=${Wi(e?this.target:void 0)}
        download=${Wi(e?this.download:void 0)}
        rel=${Wi(e&&this.rel?this.rel:void 0)}
        role=${Wi(e?void 0:`button`)}
        aria-disabled=${Wi(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Yi`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Yi`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};O.shadowRootOptions={...Cn.shadowRootOptions,delegatesFocus:!0},O.css=[Ui,Rn,Dn],C([ot(`.button`)],O.prototype,`button`,2),C([ot(`slot:not([name])`)],O.prototype,`labelSlot`,2),C([it()],O.prototype,`invalid`,2),C([it()],O.prototype,`isIconButton`,2),C([w()],O.prototype,`title`,2),C([w({reflect:!0})],O.prototype,`variant`,2),C([w({reflect:!0})],O.prototype,`appearance`,2),C([w({reflect:!0})],O.prototype,`size`,2),C([qe(`size`)],O.prototype,`handleSizeChange`,1),C([w({attribute:`with-caret`,type:Boolean,reflect:!0})],O.prototype,`withCaret`,2),C([w({attribute:`with-start`,type:Boolean})],O.prototype,`withStart`,2),C([w({attribute:`with-end`,type:Boolean})],O.prototype,`withEnd`,2),C([w({type:Boolean})],O.prototype,`disabled`,2),C([w({type:Boolean,reflect:!0})],O.prototype,`loading`,2),C([w({type:Boolean,reflect:!0})],O.prototype,`pill`,2),C([w()],O.prototype,`type`,2),C([w({reflect:!0})],O.prototype,`name`,2),C([w({reflect:!0})],O.prototype,`value`,2),C([w({reflect:!0})],O.prototype,`href`,2),C([w()],O.prototype,`target`,2),C([w()],O.prototype,`rel`,2),C([w()],O.prototype,`download`,2),C([w({attribute:`formaction`})],O.prototype,`formAction`,2),C([w({attribute:`formenctype`})],O.prototype,`formEnctype`,2),C([w({attribute:`formmethod`})],O.prototype,`formMethod`,2),C([w({attribute:`formnovalidate`,type:Boolean})],O.prototype,`formNoValidate`,2),C([w({attribute:`formtarget`})],O.prototype,`formTarget`,2),C([qe(`disabled`,{waitUntilFirstUpdate:!0})],O.prototype,`handleDisabledChange`,1),C([qe(`href`)],O.prototype,`handleHrefChange`,1),C([qe(`loading`,{waitUntilFirstUpdate:!0})],O.prototype,`handleLoadingChange`,1),O=C([tt(`wa-button`)],O),O.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xi=c`
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
`,Zi=class extends ft{constructor(){super(...arguments),this.localize=new nn(this)}render(){return x`
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
    `}};Zi.css=Xi,Zi=C([tt(`wa-spinner`)],Zi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qi=t({default:()=>E}),k;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var $i;function ea(e){this.c=e}k=ea.prototype,k.toString=(function(){return String.fromCharCode(this.c)});function ta(e){switch(typeof e){case`string`:return a_.l();case`number`:return ga(e)?e<<24>>24===e?kh.l():e<<16>>16===e?Rh.l():Qg.l():_a(e)?Zg.l():Xg.l();case`boolean`:return Dm.l();case`undefined`:return bl.l();default:return e instanceof R?t_.l():e instanceof ea?Am.l():e&&e.$classData?e.$classData.l():null}}function na(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ga(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:_a(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof R?`java.lang.Long`:e instanceof ea?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.kp()}}function ra(e,t){switch(typeof e){case`string`:return r_(e,t);case`number`:return Jg(e,t);case`boolean`:return Tm(e,t);case`undefined`:return _l(e,t);default:return e&&e.$classData||e===null?e.m(t):e instanceof R?$g(e,t):e instanceof ea?km(ya(e),t):xa.prototype.m.call(e,t)}}function ia(e){switch(typeof e){case`string`:return n_(e);case`number`:return Yg(e);case`boolean`:return Em(e);case`undefined`:return vl(e);default:return e&&e.$classData||e===null?e.r():e instanceof R?e_(e):e instanceof ea?Om(ya(e)):xa.prototype.r.call(e)}}function aa(e){return e===void 0?`undefined`:e.toString()}function oa(e,t){if(t===0)throw new Oh(`/ by zero`);return e/t|0}function sa(e,t){if(t===0)throw new Oh(`/ by zero`);return e%t|0}function ca(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function la(e){return String.fromCharCode(e)}function ua(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var da=0,fa=new WeakMap;function pa(e){switch(typeof e){case`string`:return n_(e);case`number`:return Yg(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:n_(n);default:if(e===null)return 0;var r=fa.get(e);return r===void 0&&(r=da+1|0,da=r,fa.set(e,r)),r}}function ma(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ha(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ga(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function _a(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function va(e){return new ea(e)}va(0);function ya(e){return e===null?0:e.c}function ba(e){return e===null?$i:e}function xa(){}k=xa.prototype,k.constructor=xa;function A(){}A.prototype=k,k.r=(function(){return pa(this)}),k.m=(function(e){return this===e}),k.t=(function(){var e=this.r();return na(this)+`@`+(+(e>>>0)).toString(16)}),k.toString=(function(){return this.t()});function Sa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}k=Sa.prototype=new A,k.constructor=Sa,k.ad=(function(e,t,n,r){ua(this.a,e,t.a,n,r)}),k.a9=(function(){return new Sa(this.a.slice())});function Ca(){}Ca.prototype=k;function wa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}k=wa.prototype=new A,k.constructor=wa,k.ad=(function(e,t,n,r){ua(this.a,e,t.a,n,r)}),k.a9=(function(){return new wa(this.a.slice())});function Ta(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}k=Ta.prototype=new A,k.constructor=Ta,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new Ta(this.a.slice())});function Ea(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}k=Ea.prototype=new A,k.constructor=Ea,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new Ea(this.a.slice())});function Da(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}k=Da.prototype=new A,k.constructor=Da,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new Da(this.a.slice())});function Oa(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}k=Oa.prototype=new A,k.constructor=Oa,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new Oa(this.a.slice())});function ka(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=$i}else this.a=e}k=ka.prototype=new A,k.constructor=ka,k.ad=(function(e,t,n,r){ua(this.a,e,t.a,n,r)}),k.a9=(function(){return new ka(this.a.slice())});function Aa(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}k=Aa.prototype=new A,k.constructor=Aa,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new Aa(this.a.slice())});function ja(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}k=ja.prototype=new A,k.constructor=ja,k.ad=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),k.a9=(function(){return new ja(this.a.slice())});function j(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}k=j.prototype,k.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new j().y(this,r,i)),this}),k.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),k.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),k.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ca;n.constructor=t,n.ad=(function(e,t,n,r){ua(this.a,e,t.a,n,r)}),n.a9=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ma});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),k.r=(function(){return this.A||=new j().a(this),this.A}),k.l=(function(){return this.L||=new bp(this),this.L}),k.R=(function(e){return this===e||this.F(e)}),k.S=(function(){return this.P?this.P.l():null}),k.Q=(function(){return this.O?this.O.l():null}),k.U=(function(e){if(this===Na)throw jh(new Mh);return new(this.r()).C(e)});var Ma=new j;Ma.n={},Ma.E=`Ljava.lang.Object;`,Ma.F=(e=>!e.X),Ma.N=`java.lang.Object`,Ma.I=(e=>e!==null),Ma.A=new j().y(Ma,Sa,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),xa.prototype.$classData=Ma;var Na=new j().p(void 0,`V`,`void`,void 0,void 0);new j().p(!1,`Z`,`boolean`,wa,void 0);var Pa=new j().p(0,`C`,`char`,Ta,Uint16Array);new j().p(0,`B`,`byte`,Ea,Int8Array),new j().p(0,`S`,`short`,Da,Int16Array),new j().p(0,`I`,`int`,Oa,Int32Array);var Fa=new j().p(null,`J`,`long`,ka,void 0);new j().p(0,`F`,`float`,Aa,Float32Array),new j().p(0,`D`,`double`,ja,Float64Array);var Ia=new j().i(1,`com.raquo.airstream.core.InternalObserver`,{bo:1});function La(e){return ta(e).dt()+`@`+e.r()}function Ra(e){var t=e.cv();return t===void 0?e.cq():t}function za(){Va=this,Ha().he(new Z((e=>void 0)),Gl().cj,!0)}k=za.prototype=new A,k.constructor=za;function Ba(){}Ba.prototype=k,k.he=(function(e,t,n){return new om(e,n,t,this)}),k.iE=(function(e,t){return new cm(e,t,this)}),new j().i(za,`com.raquo.airstream.core.Observer$`,{bq:1});var Va;function Ha(){return Va||=new za,Va}function Ua(){}k=Ua.prototype=new A,k.constructor=Ua;function Wa(){}Wa.prototype=k,k.jw=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new j().i(Ua,`com.raquo.airstream.core.ObserverList$`,{bt:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(){this.aR=0,this.aR=0}k=qa.prototype=new A,k.constructor=qa;function Ja(){}Ja.prototype=k,k.gV=(function(){return this.aR===2147483647?this.aR=1:this.aR=1+this.aR|0,this.aR}),new j().i(qa,`com.raquo.airstream.core.Signal$`,{bv:1});var Ya;function Xa(){return Ya||=new qa,Ya}function Za(e){this.cC=null,this.dK=null,this.cD=0,this.cC=e,this.dK=void 0;var t=vo().bY();this.cD=t===void 0?1:1+t.cD|0,ro().c0===-1||this.cD>ro().c0?kf().Z(new Fg(this,ro().c0)):co().F?co().ax.push(this)|0:vo().dl(this)}k=Za.prototype=new A,k.constructor=Za;function Qa(){}Qa.prototype=k;var $a=new j().i(Za,`com.raquo.airstream.core.Transaction`,{bw:1});function eo(){this.c0=0,this.dL=null,no=this,this.c0=1e3,this.dL=new Z((e=>{throw Sp(new K,`Attempted to run Transaction `+e+` after it was already executed.`)}))}k=eo.prototype=new A,k.constructor=eo;function to(){}to.prototype=k,k.gs=(function(e){try{e.cC.j(e);var t=e.dK;if(t!==void 0)for(;t.ku();)t.kj().ky(e)}catch(e){var n=e instanceof Vd?e:new $(e);kf().Z(n)}}),new j().i(eo,`com.raquo.airstream.core.Transaction$`,{bx:1});var no;function ro(){return no||=new eo,no}function io(e){e.c1.length|0?new Za(new Z((t=>{for(;(e.c1.length|0)>0;){var n=e.c1.shift();try{n.j(t)}catch(e){var r=e instanceof Vd?e:new $(e);kf().Z(r)}}for(;(e.ax.length|0)>0;){var i=e.ax.shift();vo().dl(i)}}))):(e.ax.length|0)>0&&new Za(new Z((t=>{for(;(e.ax.length|0)>0;)vo().dl(e.ax.shift())})))}function ao(){this.F=!1,this.c1=null,this.ax=null,so=this,this.F=!1,this.c1=M().C(B().b(new(z.r()).C([]))),this.ax=M().C(B().b(new($a.r()).C([])))}k=ao.prototype=new A,k.constructor=ao;function oo(){}oo.prototype=k,new j().i(ao,`com.raquo.airstream.core.Transaction$onStart$`,{by:1});var so;function co(){return so||=new ao,so}function lo(e,t){return e.ay.get(t)}function uo(e,t){e.c2.unshift(t)}function fo(e){return e.c2.shift()}function po(e,t,n){var r=lo(e,t),i=r===void 0,a=r===void 0?M().C(B().b(new($a.r()).C([]))):r;a.push(n),i&&e.ay.set(t,a)}function mo(e,t){var n=lo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ay.delete(t),i}}function ho(){this.c2=null,this.ay=null,_o=this,this.c2=M().C(B().b(new($a.r()).C([]))),this.ay=new Map}k=ho.prototype=new A,k.constructor=ho;function go(){}go.prototype=k,k.dl=(function(e){var t=this.bY();t===void 0?(uo(this,e),ro().gs(e),this.i7(e)):po(this,t,e)}),k.i7=(function(e){for(var t=e;;){var n=this.bY(),r=t;if(!(n!==void 0&&cu().J(r,n)))throw Sp(new K,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.jq(t),t.cC=ro().dL;var i=this.bY();if(cu().J(i,void 0))if((this.ay.size|0)>0){var a=new bf(0);throw this.ay.forEach((e=>((t,n)=>{e.bC=e.bC+(t.length|0)|0}))(a)),Sp(new K,`Transaction queue error: Stack cleared, but a total of `+a.bC+` children for `+(this.ay.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ro().gs(i),t=i}}),k.jq=(function(e){for(var t=e;;){var n=mo(this,t);if(cu().J(n,void 0)){fo(this);var r=this.bY();if(!cu().J(r,void 0))t=r;else return}else{uo(this,n);return}}}),k.bY=(function(){return this.c2[0]}),new j().i(ho,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bz:1});var _o;function vo(){return _o||=new ho,_o}function yo(e,t){var n=e.ae.indexOf(t)|0;if(n!==-1)e.ae.splice(n,1),e.M.l()||t.gX();else throw Sp(new K,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function bo(e){for(;(e.c3.length|0)>0;)yo(e,e.c3.shift())}function xo(e){this.dM=null,this.ae=null,this.aS=!1,this.c3=null,this.M=null,this.aT=0,this.dM=e,this.ae=M().C(B().b(new(To.r()).C([]))),this.aS=!0,this.c3=M().C(B().b(new(To.r()).C([]))),this.M=Q(),this.aT=0}k=xo.prototype=new A,k.constructor=xo;function So(){}So.prototype=k,k.g9=(function(){if(this.M.l()){var e=co(),t=(()=>{var e=new Ru(this.dM);this.M=new u_(e),this.aS=!1,this.aT=0;for(var t=0,n=this.ae.length|0;t<n;){var r=t+this.aT|0;this.ae[r].gW(e),t=1+t|0}bo(this),this.aS=!0,this.aT=0});if(co(),e.F)t();else{e.F=!0;try{t()}finally{e.F=!1,io(e)}}}else throw Sp(new K,`Can not activate `+this+`: it is already active`)}),k.i2=(function(){if(this.M.l())throw Sp(new K,`Can not deactivate DynamicOwner: it is not active`);this.aS=!1;for(var e=this.ae,t=0,n=e.length|0;t<n;)e[t].gX(),t=1+t|0;bo(this);var r=this.M;r.l()||r.A().iY(),bo(this),this.aS=!0,this.M=Q()}),k.hB=(function(e,t){t?(this.aT=1+this.aT|0,this.ae.unshift(e)):this.ae.push(e);var n=this.M;if(!n.l()){var r=n.A();e.gW(r)}}),k.jx=(function(e){this.aS?yo(this,e):this.c3.push(e)}),new j().i(xo,`com.raquo.airstream.ownership.DynamicOwner`,{bC:1});function Co(e,t,n){this.c4=null,this.dN=null,this.c5=null,this.c4=e,this.dN=t,this.c5=Q(),e.hB(this,n)}k=Co.prototype=new A,k.constructor=Co;function wo(){}wo.prototype=k,k.cu=(function(){this.c4.jx(this)}),k.gW=(function(e){var t=co(),n=(()=>{this.c5=this.dN.j(e)});if(co(),t.F)n();else{t.F=!0;try{n()}finally{t.F=!1,io(t)}}}),k.gX=(function(){var e=this.c5;e.l()||(e.A().cu(),this.c5=Q())});var To=new j().i(Co,`com.raquo.airstream.ownership.DynamicSubscription`,{bD:1});function Eo(){}k=Eo.prototype=new A,k.constructor=Eo;function Do(){}Do.prototype=k,k.cy=(function(e,t,n){return new Co(e,new Z((e=>new u_(t.j(e)))),n)}),k.h9=(function(e,t,n){return new Co(e,new Z((e=>(t.j(e),Q()))),n)}),k.jK=(function(e,t,n){return ko().cy(e,new Z((e=>jf(t,n,e))),!1)}),new j().i(Eo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bE:1});var Oo;function ko(){return Oo||=new Eo,Oo}function Ao(e){e.aU=M().C(B().b(new(Lo.r()).C([])))}function jo(e){for(var t=e.aU,n=0,r=t.length|0;n<r;)Po(t[n]),n=1+n|0;e.aU.length=0}function Mo(e,t){var n=e.aU.indexOf(t)|0;if(n!==-1)e.aU.splice(n,1);else throw Sp(new K,`Can not remove Subscription from Owner: subscription not found.`)}function No(e,t){e.aU.push(t)}function Po(e){if(!e.cF)e.dP.ac(),e.cF=!0;else throw Sp(new K,`Can not kill Subscription: it was already killed.`)}function Fo(e,t){this.dQ=null,this.dP=null,this.cF=!1,this.dQ=e,this.dP=t,this.cF=!1,e.jn(this)}k=Fo.prototype=new A,k.constructor=Fo;function Io(){}Io.prototype=k,k.cu=(function(){Po(this),Mo(this.dQ,this)});var Lo=new j().i(Fo,`com.raquo.airstream.ownership.Subscription`,{bH:1});function Ro(e,t){this.dR=null,this.dS=null,this.af=null,this.az=!1,this.dR=e,this.dS=t,this.af=Q(),this.az=!1}k=Ro.prototype=new A,k.constructor=Ro;function zo(){}zo.prototype=k,k.iU=(function(){var e=this.af;return!e.l()&&!e.A().c4.M.l()}),k.jF=(function(e){if(this.az)throw Sp(new K,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.af;if(t.l())var n=!1;else var n=e===t.A().c4;if(!n){this.iU()&&!e.M.l()&&(this.az=!0);var r=this.af;r.l()||(r.A().cu(),this.af=Q()),this.af=new u_(ko().cy(e,new Z((e=>(this.az||this.dR.ac(),new Fo(e,new Km((()=>{this.az||this.dS.ac()})))))),!1)),this.az=!1}}),k.hU=(function(){if(this.az)throw Sp(new K,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.af;e.l()||e.A().cu(),this.af=Q()}),new j().i(Ro,`com.raquo.airstream.ownership.TransferableSubscription`,{bI:1});function Bo(){}k=Bo.prototype=new A,k.constructor=Bo;function Vo(){}Vo.prototype=k,k.hJ=(function(e){return new Lg(new jg(e))}),new j().i(Bo,`com.raquo.airstream.state.Var$`,{bM:1});var Ho;function Uo(){return Ho||=new Bo,Ho}function Wo(){}k=Wo.prototype=new A,k.constructor=Wo;function Go(){}Go.prototype=k,k.C=(function(e){return[...Du().jQ(e)]}),new j().i(Wo,`com.raquo.ew.JsArray$`,{bP:1});var Ko;function M(){return Ko||=new Wo,Ko}function qo(){}k=qo.prototype=new A,k.constructor=qo;function Jo(){}Jo.prototype=k,k.iQ=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),k.iz=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new j().i(qo,`com.raquo.ew.JsArray$RichJsArray$`,{bQ:1});var Yo;function Xo(){return Yo||=new qo,Yo}function Zo(){this.dZ=null,$o=this,document.createElement(`template`),this.i0(Y().d.jL().jM()),this.dZ=RegExp(` `,`g`)}k=Zo.prototype=new A,k.constructor=Zo;function Qo(){}Qo.prototype=k,k.hG=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Vd?e:new $(e);if(n instanceof $&&n.V instanceof DOMException)return!1;throw n instanceof $?n.V:n}}),k.iW=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(cu().J(t,r))return!0;n=r}}),k.hz=(function(e,t){e.addEventListener(t.aY.bs.cc,t.cS,t.cT)}),k.ju=(function(e,t){e.removeEventListener(t.aY.bs.cc,t.cS,t.cT)}),k.hZ=(function(e){return document.createElement(e.dv())}),k.iG=(function(e,t){var n=this.iH(e,t);return n===void 0?void 0:t.aV.cp(n)}),k.iH=(function(e,t){var n=e.G.getAttributeNS(null,t.ag);return n===null?void 0:n}),k.dA=(function(e,t,n){this.jC(e,t,t.aV.bS(n))}),k.jC=(function(e,t,n){n===null?this.jv(e,t):e.G.setAttribute(t.ag,n)}),k.jv=(function(e,t){e.G.removeAttribute(t.ag)}),k.jD=(function(e,t,n){this.jE(e,t,t.eF.bS(n))}),k.jE=(function(e,t,n){e.G[t.ah]=n}),k.h5=(function(e,t,n){var r=e.G,i=t.aW,a=t.aX,o=n===null?null:n;o===null?(a.a5(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a5(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),k.i0=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eX)}),k.iK=(function(e,t){var n=this.iL(e,t);return n===void 0?void 0:t.cQ.cp(n)}),k.iL=(function(e,t){var n=e.dy(),r=t.ce,i=n.getAttributeNS(r.l()?null:r.A(),t.cR);return i===null?void 0:i}),k.jG=(function(e,t,n){this.jH(e,t,t.cQ.bS(n))}),k.jH=(function(e,t,n){if(n===null)this.jy(e,t);else{var r=t.ce;if(r.l())e.dy().setAttribute(t.cd,n);else{var i=r.A();e.dy().setAttributeNS(i,t.cd,n)}}}),k.jy=(function(e,t){var n=e.dy(),r=t.ce;n.removeAttributeNS(r.l()?null:r.A(),t.cR)}),k.i1=(function(e){return document.createTextNode(e)}),k.gN=(function(e){return iu().hX(e.tagName,45)}),k.iM=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.gN(e)){var t=e.value;return new fh(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),k.i3=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Ry(this.gu(r),n);r=i,n=a}}),k.gu=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dZ,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new j().i(Zo,`com.raquo.laminar.DomApi$`,{bR:1});var $o;function N(){return $o||=new Zo,$o}function es(e,t,n){this.cK=null,this.e0=null,this.cJ=null,this.cK=e,this.e0=t,this.cJ=n}k=es.prototype=new A,k.constructor=es;function ts(){}ts.prototype=k,k.a5=(function(e){this.cK===null?this.cJ===null?Yl().iA(this.e0,e):Xo().iz(this.cJ,Zp().iD(e)):this.cK.a5(e)}),new j().i(es,`com.raquo.laminar.Seq`,{bT:1});function ns(){}k=ns.prototype=new A,k.constructor=ns;function rs(){}rs.prototype=k,new j().i(ns,`com.raquo.laminar.Seq$`,{bU:1});var is;function as(){return is||=new ns,is}function os(e){Ha(),kf(),e.e3=Uo()}function ss(e){e.hg=Ks()}function cs(e){ls(e,new Z((e=>{e.eH.G.focus()})))}function ls(e,t){return new ad(new Z((e=>{var n=new vf(!e.a8.M.l()),r=new Z((e=>{n.cn?n.cn=!1:t.j(e)}));ko().h9(e.a8,new Z((e=>(t=>{r.j(new Vs(e,t))}))(e)),!1)})),Ks())}function us(){this.a0=null,this.cL=null,this.br=null,fs=this,this.a0=new Hu(P()),new Hu(P()),this.cL=new Hu(P()),this.br=new Bu}k=us.prototype=new A,k.constructor=us;function ds(){}ds.prototype=k,new j().i(us,`com.raquo.laminar.codecs.package$`,{c2:1});var fs;function P(){return fs||=new us,fs}function ps(e){e.hh=ms(e,`class`,` `)}function ms(e,t,n){var r=Xu(new Zu,t,P().a0);return new Gu(r.ag,new Z((e=>{var t=N().iG(e,r);return t===void 0?``:t})),new Ym(((e,t)=>{N().dA(e,r,t)})),n)}function hs(e){e.hf=gs(e,`class`,` `)}function gs(e,t,n){var r=new td(t,P().a0,Q());return new Gu(r.cd,new Z((e=>{var t=N().iK(e,r);return t===void 0?``:t})),new Ym(((e,t)=>{N().jG(e,r,t)})),n)}function _s(){this.eC=null,ys=this,Y().d.hc(),M().C(B().b(new(Yu.r()).C([Y().d.bV()]))),Y().d.hc(),M().C(B().b(new(Yu.r()).C([Y().d.bV(),Y().d.jj()]))),Y().d.hT(),M().C(B().b(new(Yu.r()).C([Y().d.bV(),Y().d.jk()]))),this.eC=M().C(B().b(new(a_.r()).C([`value`,`checked`])))}k=_s.prototype=new A,k.constructor=_s;function vs(){}vs.prototype=k,new j().i(_s,`com.raquo.laminar.inputs.InputController$`,{co:1});var ys;function bs(){return ys||=new _s,ys}function xs(e){this.ca=null,this.ca=e}k=xs.prototype=new A,k.constructor=xs;function Ss(){}Ss.prototype=k,k.gY=(function(e,t){try{this.ca.dn(e,t)}catch(e){var n=e instanceof Vd?e:new $(e);kf().Z(n)}}),k.hV=(function(e){return new xs(new Ym(((t,n)=>{this.ca.dn(t,n),e.ca.dn(t,n)})))}),k.hH=(function(e){return e===void 0?this:e.hV(this)}),new j().i(xs,`com.raquo.laminar.inserters.InserterHooks`,{cr:1});function Cs(){}k=Cs.prototype=new A,k.constructor=Cs;function ws(){}ws.prototype=k,k.bg=(function(e,t){return new mh(e,void 0)}),new j().i(Cs,`com.raquo.laminar.inserters.StaticChildInserter$`,{ct:1});var Ts;function Es(){return Ts||=new Cs,Ts}function Ds(e,t){this.eE=null,this.eD=null,this.eE=e,this.eD=t}k=Ds.prototype=new A,k.constructor=Ds;function Os(){}Os.prototype=k,k.c=(function(e){return new Vf(this.eE,this.eD.j(e),new Zm(((e,t,n)=>{N().h5(e,t,n)})))}),new j().i(Ds,`com.raquo.laminar.keys.DerivedStyleProp`,{cw:1});function ks(e,t,n,r){this.bs=null,this.cP=!1,this.cO=!1,this.cN=null,this.bs=e,this.cP=t,this.cO=n,this.cN=r}k=ks.prototype=new A,k.constructor=ks;function As(){}As.prototype=k,k.j3=(function(){var e=new Z((e=>{var t=this.cN.j(e);if(t.l())return Q();t.A();var n=N().iM(e.target);return new u_(n===void 0?``:n)}));return new ks(this.bs,this.cP,this.cO,e)}),new j().i(ks,`com.raquo.laminar.keys.EventProcessor`,{cx:1});function js(){}k=js.prototype=new A,k.constructor=js;function Ms(){}Ms.prototype=k,k.i9=(function(e,t,n){return new ks(e,t,n,new Z((e=>new u_(e))))}),new j().i(js,`com.raquo.laminar.keys.EventProcessor$`,{cy:1});var Ns;function Ps(){return Ns||=new js,Ns}function Fs(){}k=Fs.prototype=new A,k.constructor=Fs;function Is(){}Is.prototype=k;function Ls(){this.hi=null,this.hj=null,this.hk=null,this.hl=null,this.hi=`http://www.w3.org/2000/svg`,this.hj=`http://www.w3.org/1999/xlink`,this.hk=`http://www.w3.org/XML/1998/namespace`,this.hl=`http://www.w3.org/2000/xmlns/`}k=Ls.prototype=new A,k.constructor=Ls;function Rs(){}Rs.prototype=k,k.j5=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new qh(e)}}),new j().i(Ls,`com.raquo.laminar.keys.SvgAttr$`,{cB:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(e,t){this.eH=null,this.eG=null,this.eH=e,this.eG=t}k=Vs.prototype=new A,k.constructor=Vs;function Hs(){}Hs.prototype=k,new j().i(Vs,`com.raquo.laminar.lifecycle.MountContext`,{cC:1});var F=new j().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Us(){this.hm=null,Gs=this,this.hm=new rd}k=Us.prototype=new A,k.constructor=Us;function Ws(){}Ws.prototype=k,new j().i(Us,`com.raquo.laminar.modifiers.Modifier$`,{cG:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){this.aA=null,Ys=this,this.aA=new sd}k=qs.prototype=new A,k.constructor=qs;function Js(){}Js.prototype=k,new j().i(qs,`com.raquo.laminar.modifiers.RenderableNode$`,{cK:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){this.g=null,$s=this,this.g=new pd(new Z((e=>e)),I()),new pd(new Z((e=>``+(e|0))),I()),new pd(new Z((e=>``+ +e)),I()),new pd(new Z((e=>``+!!e)),I()),new pd(new Z((e=>e.jP())),I())}k=Zs.prototype=new A,k.constructor=Zs;function Qs(){}Qs.prototype=k,new j().i(Zs,`com.raquo.laminar.modifiers.RenderableText$`,{cP:1});var $s;function I(){return $s||=new Zs,$s}function ec(){}k=ec.prototype=new A,k.constructor=ec;function tc(){}tc.prototype=k,k.bH=(function(e,t,n){var r=new u_(e);t.hd(r),n!==void 0&&n.gY(e,t);var i=N().hG(e.aO(),t.aO());return i&&t.h6(r),i}),new j().i(ec,`com.raquo.laminar.nodes.ParentNode$`,{cS:1});var nc;function rc(){return nc||=new ec,nc}function ic(){}k=ic.prototype=new A,k.constructor=ic;function ac(){}ac.prototype=k,k.jU=(function(e,t){return ko().cy(e.a8,new Z((n=>t.j(new Vs(e,n)))),!0)}),new j().i(ic,`com.raquo.laminar.nodes.ReactiveElement$`,{cU:1});var oc;function sc(){return oc||=new ic,oc}function cc(e){this.eT=null,this.eT=new xs(new Ym(((t,n)=>{matchResult1:{var r=n.aO();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=kf(),a=r.textContent,o=t.aO().tagName;i.Z(Sp(new K,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}k=cc.prototype=new A,k.constructor=cc;function lc(){}lc.prototype=k,k.b9=(function(e){return e.gS(new Z((e=>e.jV(this.eT))))}),new j().i(cc,`com.raquo.laminar.nodes.Slot`,{cX:1});function uc(){fc=this,M().C(B().jX(new Oa(new Int32Array([0]))))}k=uc.prototype=new A,k.constructor=uc;function dc(){}dc.prototype=k,k.hy=(function(){return new Z((e=>void 0))}),new j().i(uc,`com.raquo.laminar.tags.CustomHtmlTag$`,{cZ:1});var fc;function pc(){return fc||=new uc,fc}function mc(){}k=mc.prototype=new A,k.constructor=mc;function hc(){}hc.prototype=k,k.g7=(function(e){return Y().d.gw().bL(B().b(new(F.r()).C([Y().d.gv().gG(),Y().d.gH().gr(),Y().d.gL().h3().c(8),Lf(Y().d,e,fd())])))}),new j().i(mc,`doc.ExampleGroups$package$`,{d1:1});var gc;function _c(){return gc||=new mc,gc}function vc(){}k=vc.prototype=new A,k.constructor=vc;function yc(){}yc.prototype=k,k.g8=(function(e){return Y().d.gw().bL(B().b(new(F.r()).C([Y().d.gv().gG(),Y().d.iy().jW(),Y().d.gH().gr(),Y().d.gL().h3().c(16),Lf(Y().d,e,fd())])))}),new j().i(vc,`doc.VerticalExamples$package$`,{d2:1});var bc;function xc(){return bc||=new vc,bc}function Sc(){}k=Sc.prototype=new A,k.constructor=Sc;function Cc(){}Cc.prototype=k,k.hD=(function(){Tc().ie(),Tc().im(),Tc().io(),Tc().ip(),Tc().iq(),Tc().ir(),Tc().is(),Tc().it(),Tc().iu(),Tc().ig(),Tc().ih(),Tc().ii(),Tc().ij(),Tc().ik(),Tc().il()}),k.ie=(function(){var e=document.querySelector(`#example1`);if(!cf().E(e).l()){Y();var t=Y().d.e3.hJ(``);new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.h().hx(t))),new J((e=>new Rf((Y(),Ps().i9(e.bV(),!1,!1)).j3(),new Z((e=>{t.dV.dx(e)})))))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(``)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-4`)))])),B().b(new(F.r()).C([U(Y().d,`Option 4`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-5`)))])),B().b(new(F.r()).C([U(Y().d,`Option 5`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-6`)))])),B().b(new(F.r()).C([U(Y().d,`Option 6`,I().g)])))]))))}}),k.im=(function(){var e=document.querySelector(`#example2`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.du().c(`Select one`)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.io=(function(){var e=document.querySelector(`#example3`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.du().c(`Experience`))),new J((e=>e.iP().c(`Please tell us your skill level.`)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`1`)))])),B().b(new(F.r()).C([U(Y().d,`Novice`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`2`)))])),B().b(new(F.r()).C([U(Y().d,`Intermediate`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`3`)))])),B().b(new(F.r()).C([U(Y().d,`Advanced`,I().g)])))])))))}),k.ip=(function(){var e=document.querySelector(`#example4`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Select one`)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.iq=(function(){var e=document.querySelector(`#example5`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.bm().c(!0))),new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.ir=(function(){var e=document.querySelector(`#example6`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.hE().ix()))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.is=(function(){var e=document.querySelector(`#example7`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.jo().c(!0)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.it=(function(){var e=document.querySelector(`#example8`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Disabled`))),new J((e=>e.i5().c(!0)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.iu=(function(){var e=document.querySelector(`#example9`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.du().c(`Select a Few`))),new J((e=>e.gU().c(!0))),new J((e=>e.bm().c(!0)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-4`)))])),B().b(new(F.r()).C([U(Y().d,`Option 4`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-5`)))])),B().b(new(F.r()).C([U(Y().d,`Option 5`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-6`)))])),B().b(new(F.r()).C([U(Y().d,`Option 6`,I().g)])))])))))}),k.ig=(function(){var e=document.querySelector(`#example10`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-4`)))])),B().b(new(F.r()).C([U(Y().d,`Option 4`,I().g)])))])))))}),k.ih=(function(){var e=document.querySelector(`#example11`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.gU().c(!0))),new J((e=>e.bm().c(!0)))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`))),new J((e=>(G().bl(),Y().d).bi().c(!0)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-4`)))])),B().b(new(F.r()).C([U(Y().d,`Option 4`,I().g)])))])))))}),k.ii=(function(){var e=document.querySelector(`#example12`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([])),B().b(new(F.r()).C([Y().d.h8().bL(B().b(new(F.r()).C([U(Y().d,`Section 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)]))),lp().f(B().b(new(z.r()).C([])),B().b(new(F.r()).C([]))),Y().d.h8().bL(B().b(new(F.r()).C([U(Y().d,`Section 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-4`)))])),B().b(new(F.r()).C([U(Y().d,`Option 4`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-5`)))])),B().b(new(F.r()).C([U(Y().d,`Option 5`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-6`)))])),B().b(new(F.r()).C([U(Y().d,`Option 6`,I().g)])))])))))}),k.ij=(function(){var e=document.querySelector(`#example13`);cf().E(e).l()||(Y(),new W(e,_c().g7(B().b(new(qg.r()).C([xc().g8(B().b(new(qg.r()).C([X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Small`))),new J((e=>e.bj().h7()))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))]))),X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Medium`))),new J((e=>e.bj().gT()))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))]))),X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Large`))),new J((e=>e.bj().gR()))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))])))])))))}),k.ik=(function(){var e=document.querySelector(`#example14`);cf().E(e).l()||(Y(),new W(e,X().f(B().b(new(z.r()).C([new J((e=>e.jp().jS()))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))))}),k.il=(function(){var e=document.querySelector(`#example15`);cf().E(e).l()||(Y(),new W(e,_c().g7(B().b(new(qg.r()).C([xc().g8(B().b(new(qg.r()).C([X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Small`))),new J((e=>e.bj().h7())),new J((e=>e.bm().c(!0))),new J((e=>If(Y().d,Ac().dB().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`house`))),new J((e=>e.dC().c(`solid`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd()))),new J((e=>If(Y().d,Ac().dq().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`flag-checkered`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd())))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))]))),X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Medium`))),new J((e=>e.bj().gT())),new J((e=>e.bm().c(!0))),new J((e=>If(Y().d,Ac().dB().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`house`))),new J((e=>e.dC().c(`solid`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd()))),new J((e=>If(Y().d,Ac().dq().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`flag-checkered`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd())))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))]))),X().f(B().b(new(z.r()).C([new J((e=>e.av().c(`Large`))),new J((e=>e.bj().gR())),new J((e=>e.bm().c(!0))),new J((e=>If(Y().d,Ac().dB().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`house`))),new J((e=>e.dC().c(`solid`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd()))),new J((e=>If(Y().d,Ac().dq().b9(B().b(new(gh.r()).C([(Y(),Es().bg(pp().f(B().b(new(z.r()).C([new J((e=>e.bf().c(`flag-checkered`)))])),B().b(new(F.r()).C([]))),Xs().aA))]))),Gd().aC,fd())))])),B().b(new(F.r()).C([G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-1`)))])),B().b(new(F.r()).C([U(Y().d,`Option 1`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-2`)))])),B().b(new(F.r()).C([U(Y().d,`Option 2`,I().g)]))),G().f(B().b(new(z.r()).C([new J((e=>e.h().c(`option-3`)))])),B().b(new(F.r()).C([U(Y().d,`Option 3`,I().g)])))])))])))])))))}),new j().i(Sc,`examples.select.Main$package$`,{d3:1});var wc;function Tc(){return wc||=new Sc,wc}function Ec(e){try{Tc().hD()}catch(e){throw e}}function Dc(){this.fC=null,this.fD=!1,this.fA=null,this.fB=!1}k=Dc.prototype=new A,k.constructor=Dc;function Oc(){}Oc.prototype=k,k.dB=(function(){return this.fD||=(this.fC=new cc(`start`),!0),this.fC}),k.dq=(function(){return this.fB||=(this.fA=new cc(`end`),!0),this.fA}),new j().i(Dc,`io.github.nguyenyou.webawesome.laminar.Select$slots$`,{da:1});var kc;function Ac(){return kc||=new Dc,kc}function jc(){this.ho=!1,this.bt=null,this.cg=null,this.fG=null,this.d1=!1,this.hn=0,this.hq=0,this.hp=null,Nc=this,this.ho=!0,this.bt=new ArrayBuffer(8),this.cg=new Int32Array(this.bt,0,2),new Float32Array(this.bt,0,2),this.fG=new Float64Array(this.bt,0,1),this.cg[0]=16909060,this.d1=(new Int8Array(this.bt,0,8)[0]|0)==1,this.hn=this.d1?0:1,this.hq=this.d1?1:0,this.hp=null}k=jc.prototype=new A,k.constructor=jc;function Mc(){}Mc.prototype=k,k.dw=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fG[0]=e,(this.cg[0]|0)^(this.cg[1]|0))}),new j().i(jc,`java.lang.FloatingPointBits$`,{dn:1});var Nc;function Pc(){return Nc||=new jc,Nc}function Fc(e,t){for(var n=L().a7(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ic(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Nd(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Nd(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Fd.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ic(e,t){var n=L().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=L().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=L().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=L().a7(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=L().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Lc(e,c[1]),Wc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Lc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Lc(e,d[1]),`<clinit>`]}function Lc(e,t){var n=zc(e);if(gl().fM.call(n,t))var r=zc(e)[t];else var r=tl(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Rc(e){if(!((1&e.R)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d3=t,e.R=(1|e.R)<<24>>24}return e.d3}function zc(e){return(1&e.R)<<24>>24?e.d3:Rc(e)}function Bc(e){if(!((2&e.R)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d4=t,e.R=(2|e.R)<<24>>24}return e.d4}function Vc(e){return(2&e.R)<<24>>24?e.d4:Bc(e)}function Hc(e){return(4&e.R)<<24>>24||(e.d2=Object.keys(Vc(e)),e.R=(4|e.R)<<24>>24),e.d2}function Uc(e){return(4&e.R)<<24>>24?e.d2:Hc(e)}function Wc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Gc(e,t){return t?t.arguments&&t.stack?Kc(e,t):t.stack&&t.sourceURL?Yc(e,t):t.stack&&t.number?Jc(e,t):t.stack&&t.fileName?qc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Xc(e,t):Zc(e,t):Xc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Qc(e,t):$c(e,t):t.stack&&!t.fileName?Kc(e,t):el(e,t):[]}function Kc(e,t){return(t.stack+`
`).replace(L().a7(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(L().K(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(L().K(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(L().K(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(L().K(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function qc(e,t){return t.stack.replace(L().K(`(?:\\n@:0)?\\s+$`,`m`),``).replace(L().K(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Jc(e,t){return t.stack.replace(L().K(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(L().K(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(L().K(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Yc(e,t){return t.stack.replace(L().K(`\\[native code\\]\\n`,`m`),``).replace(L().K(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(L().K(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Xc(e,t){for(var n=L().K(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Zc(e,t){for(var n=L().K(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Qc(e,t){for(var n=L().a7(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function $c(e,t){for(var n=L().a7(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(L().a7(`<anonymous function: (\\S+)>`),`$1`).replace(L().a7(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function el(e,t){return[]}function tl(e,t,n){for(;;)if(t<(Uc(e).length|0)){var r=Uc(e)[t];if(n.startsWith(r))return``+Vc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function nl(){this.d3=null,this.d4=null,this.d2=null,this.R=0}k=nl.prototype=new A,k.constructor=nl;function rl(){}rl.prototype=k,k.iv=(function(e){return Fc(this,Gc(this,e))}),new j().i(nl,`java.lang.StackTrace$`,{dx:1});var il;function al(){return il||=new nl,il}function ol(){}k=ol.prototype=new A,k.constructor=ol;function sl(){}sl.prototype=k,k.a7=(function(e){return new RegExp(e)}),k.K=(function(e,t){return new RegExp(e,t)}),new j().i(ol,`java.lang.StackTrace$StringRE$`,{dy:1});var cl;function L(){return cl||=new ol,cl}function ll(){this.fI=null,this.hr=null,dl=this,this.fI=new sv(!1),this.hr=new sv(!0)}k=ll.prototype=new A,k.constructor=ll;function ul(){}ul.prototype=k,new j().i(ll,`java.lang.System$Streams$`,{dC:1});var dl;function fl(){return dl||=new ll,dl}function pl(){this.fM=null,hl=this,this.fM=Object.prototype.hasOwnProperty}k=pl.prototype=new A,k.constructor=pl;function ml(){}ml.prototype=k,new j().i(pl,`java.lang.Utils$Cache$`,{dF:1});var hl;function gl(){return hl||=new pl,hl}function _l(e,t){return e===t}function vl(e){return 0}function yl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aE)}var bl=new j().i(0,`java.lang.Void`,{aE:1},(e=>e===void 0));function xl(e,t){throw Ah(new Mh,`argument type mismatch`)}function Sl(){}k=Sl.prototype=new A,k.constructor=Sl;function Cl(){}Cl.prototype=k,k.bc=(function(e){return e instanceof Sa||e instanceof wa||e instanceof Ta||e instanceof Ea||e instanceof Da||e instanceof Oa||e instanceof ka||e instanceof Aa||e instanceof ja?e.a.length:xl(this,e)}),new j().i(Sl,`java.lang.reflect.Array$`,{dH:1});var wl;function Tl(){return wl||=new Sl,wl}function El(){}k=El.prototype=new A,k.constructor=El;function Dl(){}Dl.prototype=k,k.gC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.i,s=a.k,c=r,l=t.a[c],u=l.i,d=l.k;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),k.gB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),k.gD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),k.gy=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),k.gx=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),k.gE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),k.gz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),k.gA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new j().i(El,`java.util.Arrays$`,{dI:1});var Ol;function kl(){return Ol||=new El,Ol}function R(e,t){this.i=0,this.k=0,this.i=e,this.k=t}k=R.prototype=new A,k.constructor=R;function Al(){}Al.prototype=k,k.m=(function(e){return e instanceof R&&this.i===e.i&&this.k===e.k}),k.r=(function(){return this.i^this.k}),k.t=(function(){return Rl().h2(this.i,this.k)}),k.kB=(function(){return this.i}),k.kA=(function(){return Rl().h1(this.i,this.k)}),k.kz=(function(){return Rl().bX(this.i,this.k)}),k.kg=(function(){return this.i<<24>>24}),k.kx=(function(){return this.i<<16>>16}),k.kr=(function(){return this.i}),k.ks=(function(){return this}),k.km=(function(){return Rl().h1(this.i,this.k)}),k.kk=(function(){return Rl().bX(this.i,this.k)}),k.ki=(function(e){return Rl().gZ(this.i,this.k,e.i,e.k)}),k.kh=(function(e){return Rl().gZ(this.i,this.k,e.i,e.k)}),k.kl=(function(e){return this.i===e.i&&this.k===e.k}),k.kv=(function(e){return!(this.i===e.i&&this.k===e.k)}),k.k8=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<(-2147483648^e.i):t<n}),k.k9=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)<=(-2147483648^e.i):t<n}),k.k4=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>(-2147483648^e.i):t>n}),k.k5=(function(e){var t=this.k,n=e.k;return t===n?(-2147483648^this.i)>=(-2147483648^e.i):t>n}),k.kD=(function(){return new R(~this.i,~this.k)}),k.k2=(function(e){return new R(this.i|e.i,this.k|e.k)}),k.k1=(function(e){return new R(this.i&e.i,this.k&e.k)}),k.kf=(function(e){return new R(this.i^e.i,this.k^e.k)}),k.ka=(function(e){var t=this.i;return new R(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.k<<e)}),k.k7=(function(e){var t=this.k;return new R(32&e?t>>>e|0:this.i>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),k.k6=(function(e){var t=this.k;return new R(32&e?t>>e:this.i>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),k.kC=(function(){var e=this.i,t=this.k;return new R(-e|0,e===0?-t|0:~t)}),k.kd=(function(e){var t=this.i,n=this.k,r=e.k,i=t+e.i|0;return new R(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),k.kb=(function(e){var t=this.i,n=this.k,r=e.k,i=t-e.i|0;return new R(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),k.ke=(function(e){var t=this.i,n=e.i,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new R(u,(((Math.imul(t,e.k)+Math.imul(this.k,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),k.k3=(function(e){var t=Rl();return new R(t.i6(this.i,this.k,e.i,e.k),t.w)}),k.kc=(function(e){var t=Rl();return new R(t.jt(this.i,this.k,e.i,e.k),t.w)}),new j().i(R,`org.scalajs.linker.runtime.RuntimeLong`,{aF:1});function jl(e,t,n){return-2097152&n?Pl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Ml(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.w=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.w=0,n>>>o|0}else return Pl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.w=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.w=s/4294967296|0,s|0}}function Nl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.w=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.w=n&(-1+i|0),t):Pl(e,t,n,r,i,1)|0;if(-2097152&i)return e.w=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.w=a/4294967296|0,a|0}function Pl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,ee=u,v=d;if(_===v?(-2147483648^g)>=(-2147483648^ee):(-2147483648^_)>=(-2147483648^v)){var te=f,ne=p,re=u,ie=d,ae=te-re|0,y=(-2147483648^ae)>(-2147483648^te)?-1+(ne-ie|0)|0:ne-ie|0;f=ae,p=y,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var oe=u,se=d,ce=oe>>>1|0|se<<31,le=se>>>1|0;u=ce,d=le}var b=f,ue=p;if(ue===i?(-2147483648^b)>=(-2147483648^r):(-2147483648^ue)>=(-2147483648^i)){var de=f,fe=4294967296*p+ +(de>>>0),pe=4294967296*i+ +(r>>>0);if(a!==1){var me=fe/pe,he=me|0,ge=me/4294967296|0,_e=m,ve=h,ye=_e+he|0,be=(-2147483648^ye)<(-2147483648^_e)?1+(ve+ge|0)|0:ve+ge|0;m=ye,h=be}if(a!==0){var xe=fe%pe;f=xe|0,p=xe/4294967296|0}}if(a===0)return e.w=h,m;if(a===1)return e.w=p,f;var Se=m,Ce=4294967296*h+ +(Se>>>0),we=``+f,x=we.length;return``+Ce+`000000000`.substring(x)+we}function Fl(){this.w=0}k=Fl.prototype=new A,k.constructor=Fl;function Il(){}Il.prototype=k,k.h2=(function(e,t){return t===e>>31?``+e:t<0?`-`+jl(this,-e|0,e===0?-t|0:~t):jl(this,e,t)}),k.bX=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),k.h1=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),k.ko=(function(e){return new R(e,e>>31)}),k.kn=(function(e){return new R(this.h0(e),this.w)}),k.h0=(function(e){if(e<-0x8000000000000000)return this.w=-2147483648,0;if(e>=0x8000000000000000)return this.w=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.w=e<0&&t!==0?-1+n|0:n,t}),k.gZ=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),k.i6=(function(e,t,n,r){if((n|r)===0)throw new Oh(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.w=0,-2147483648;var i=oa(e,n);return this.w=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=-1,-1;else return this.w=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Ml(this,a,o,s,c);if((t^r)>=0)return l;var u=this.w;return this.w=l===0?-u|0:~u,-l|0}}),k.jt=(function(e,t,n,r){if((n|r)===0)throw new Oh(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=sa(e,n);return this.w=i>>31,i}else return this.w=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=0,0;else return this.w=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Nl(this,a,o,s,c);if(t<0){var u=this.w;return this.w=l===0?-u|0:~u,-l|0}else return l}}),new j().i(Fl,`org.scalajs.linker.runtime.RuntimeLong$`,{dK:1});var Ll;function Rl(){return Ll||=new Fl,Ll}var zl=new j().i(1,`scala.Function0`,{ac:1}),z=new j().i(1,`scala.Function1`,{e:1});function Bl(){}k=Bl.prototype=new A,k.constructor=Bl;function Vl(){}Vl.prototype=k;function Hl(){this.fO=null,this.cj=null,Wl=this,this.fO=new J((e=>Gl().fO)),this.cj=new Im}k=Hl.prototype=new A,k.constructor=Hl;function Ul(){}Ul.prototype=k,new j().i(Hl,`scala.PartialFunction$`,{dZ:1});var Wl;function Gl(){return Wl||=new Hl,Wl}function Kl(){this.fR=null,Jl=this,this.fR=new J((e=>Yl().fR))}k=Kl.prototype=new A,k.constructor=Kl;function ql(){}ql.prototype=k,k.iA=(function(e,t){var n=Tl().bc(e),r=0;if(e instanceof Sa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof Oa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ja)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof ka)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof Aa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.j(va(e.a[r])),r=1+r|0;else if(e instanceof Ea)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof Da)for(;r<n;)t.j(e.a[r]),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.j(e.a[r]),r=1+r|0;else throw new qh(e)}),new j().i(Kl,`scala.collection.ArrayOps$`,{e5:1});var Jl;function Yl(){return Jl||=new Kl,Jl}function Xl(e,t){for(var n=e.s();n.x();)t.j(n.o())}function Zl(e,t,n,r){return e.D()===0?``+t+r:e.bG(Gy(new Ky),t,n,r).P.v}function Ql(e,t,n,r,i){var a=t.P;n.length!==0&&(a.v=``+a.v+n);var o=e.s();if(o.x()){var s=o.o();for(a.v=``+a.v+s;o.x();){a.v=``+a.v+r;var c=o.o();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function $l(e,t){this.fV=null,this.bz=null,this.fV=e,this.bz=t}k=$l.prototype=new A,k.constructor=$l;function eu(){}eu.prototype=k,k.iO=(function(){return this.fV.ac().s()}),new j().i($l,`scala.collection.Iterator$ConcatIteratorCell`,{en:1});function tu(){this.fW=null,ru=this,this.fW=new J((e=>iu().fW))}k=tu.prototype=new A,k.constructor=tu;function nu(){}nu.prototype=k,k.hX=(function(e,t){return i_(e,t)>=0}),new j().i(tu,`scala.collection.StringOps$`,{ev:1});var ru;function iu(){return ru||=new tu,ru}function au(){}k=au.prototype=new A,k.constructor=au;function ou(){}ou.prototype=k,k.J=(function(e,t){return e===t||(Md(e)?this.id(e,t):e instanceof ea?this.ib(e,t):e===null?t===null:ra(e,t))}),k.id=(function(e,t){if(Md(t))return this.ic(e,t);if(t instanceof ea){if(typeof e==`number`)return+e===t.c;if(e instanceof R){var n=ba(e),r=n.i,i=n.k,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ra(e,t)}else return e===null?t===null:ra(e,t)}),k.ic=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof R){var r=ba(t);return n===Rl().bX(r.i,r.k)}else return!1}else if(e instanceof R){var i=ba(e),a=i.i,o=i.k;if(t instanceof R){var s=ba(t),c=s.i,l=s.k;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Rl().bX(a,o)===u}else return!1}else return e===null?t===null:ra(e,t)}),k.ib=(function(e,t){if(t instanceof ea)return e.c===t.c;if(Md(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof R){var n=ba(t),r=n.i,i=n.k,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ra(t,e)}else return e===null&&t===null}),new j().i(au,`scala.runtime.BoxesRunTime$`,{eZ:1});var su;function cu(){return su||=new au,su}var lu=new j().i(0,`scala.runtime.Null$`,{f2:1});function uu(){}k=uu.prototype=new A,k.constructor=uu;function du(){}du.prototype=k,k.ba=(function(e,t){if(e instanceof Sa||e instanceof Oa||e instanceof ja||e instanceof ka||e instanceof Aa)return e.a[t];if(e instanceof Ta)return va(e.a[t]);if(e instanceof Ea||e instanceof Da||e instanceof wa)return e.a[t];throw e===null?new Lh:new qh(e)}),k.hN=(function(e,t,n){if(e instanceof Sa)e.a[t]=n;else if(e instanceof Oa)e.a[t]=n|0;else if(e instanceof ja)e.a[t]=+n;else if(e instanceof ka)e.a[t]=ba(n);else if(e instanceof Aa)e.a[t]=Math.fround(n);else if(e instanceof Ta)e.a[t]=ya(n);else if(e instanceof Ea)e.a[t]=n|0;else if(e instanceof Da)e.a[t]=n|0;else if(e instanceof wa)e.a[t]=!!n;else if(e===null)throw new Lh;else throw new qh(e)}),k.dk=(function(e){return Zl(e.aa(),e.Y()+`(`,`,`,`)`)}),k.b=(function(e){return e===null?null:e.a.length===0?x_(T_()):new cy(e)}),k.jX=(function(e){return e===null?null:new iy(e)}),new j().i(uu,`scala.runtime.ScalaRunTime$`,{f3:1});var fu;function B(){return fu||=new uu,fu}function pu(){}k=pu.prototype=new A,k.constructor=pu;function mu(){}mu.prototype=k,k.e=(function(e,t){var n=this.cw(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),k.cw=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),k.q=(function(e,t){return this.hP(e^t)}),k.hP=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),k.be=(function(e){var t=e.i,n=e.k;return n===t>>31?t:t^n}),k.a4=(function(e){var t=ca(e);if(t===e)return t;var n=Rl(),r=n.h0(e),i=n.w;return Rl().bX(r,i)===e?r^i:Pc().dw(e)}),k.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a4(+e);if(e instanceof R){var t=ba(e);return this.be(new R(t.i,t.k))}else return ia(e)}),k.aN=(function(e){throw Nh(new Ph,``+e)}),new j().i(pu,`scala.runtime.Statics$`,{f5:1});var hu;function V(){return hu||=new pu,hu}function gu(){}k=gu.prototype=new A,k.constructor=gu;function _u(){}_u.prototype=k,k.hK=(function(e){return e}),new j().i(gu,`scala.scalajs.js.defined$`,{fb:1});var vu;function yu(){return vu||=new gu,vu}function bu(){}k=bu.prototype=new A,k.constructor=bu;function xu(){}xu.prototype=k,k.jI=(function(e,t){return setTimeout((()=>{t.ac()}),e)}),new j().i(bu,`scala.scalajs.js.timers.package$`,{fc:1});var Su;function Cu(){return Su||=new bu,Su}function wu(){}k=wu.prototype=new A,k.constructor=wu;function Tu(){}Tu.prototype=k,k.jQ=(function(e){var t=[];return e.a5(new J((e=>t.push(e)|0))),t}),new j().i(wu,`scala.scalajs.runtime.Compat$`,{fl:1});var Eu;function Du(){return Eu||=new wu,Eu}function Ou(){}k=Ou.prototype=new A,k.constructor=Ou;function ku(){}ku.prototype=k,k.jJ=(function(e){var t=`Illegal command line`+(e.gM()===0?``:e.gM()===1?` after first argument`:` after `+e.gM()+` arguments`)+`: `+e.kt();$d().jm().iX(t+`
`)}),new j().i(Ou,`scala.util.CommandLineParser$`,{fn:1});function Au(e){this.dj=null,this.dj=e}k=Au.prototype=new A,k.constructor=Au;function ju(){}ju.prototype=k,k.t=(function(){return`DynamicVariable(`+this.dj+`)`}),new j().i(Au,`scala.util.DynamicVariable`,{fp:1});function Mu(){}k=Mu.prototype=new A,k.constructor=Mu;function Nu(){}Nu.prototype=k,k.hL=(function(e){return!0}),new j().i(Mu,`scala.util.control.NonFatal$`,{fr:1});var Pu;function Fu(){return Pu||=new Mu,Pu}function Iu(){}k=Iu.prototype=new A,k.constructor=Iu;function Lu(){}Lu.prototype=k,k.e=(function(e,t){var n=this.cw(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),k.cw=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),k.q=(function(e,t){return this.L(e^t)}),k.L=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),k.bh=(function(e,t,n){var r=e.W();if(r===0)return n_(e.Y());var i=t;n||(i=this.e(i,n_(e.Y())));for(var a=0;a<r;)i=this.e(i,V().B(e.X(a))),a=1+a|0;return this.q(i,r)}),k.jT=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.s();o.x();){var s=o.o(),c=V().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.cw(l,a),this.q(l,i)}),k.jl=(function(e,t){var n=e.s(),r=t;if(!n.x())return this.q(r,0);var i=n.o();if(!n.x())return this.q(this.e(r,V().B(i)),1);var a=n.o(),o=V().B(i);r=this.e(r,o);for(var s=r,c=V().B(a),l=c-o|0,u=2;n.x();){r=this.e(r,c);var d=V().B(n.o());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.x();)r=this.e(r,V().B(n.o())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.L(this.e(this.e(s,l),c))}),k.gf=(function(e,t){var n=t,r=Tl().bc(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,V().B(B().ba(e,0))),1);default:var i=V().B(B().ba(e,0));n=this.e(n,i);for(var a=n,o=V().B(B().ba(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=V().B(B().ba(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,V().B(B().ba(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.jr=(function(e,t,n,r){return this.L(this.e(this.e(this.e(r,e),t),n))}),k.iR=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,V().B(e.u(0))),1);default:var i=V().B(e.u(0));n=this.e(n,i);for(var a=n,o=V().B(e.u(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=V().B(e.u(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,V().B(e.u(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.iZ=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.l();){var l=c.a6(),u=c.Q(),d=V().B(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.jr(s,a,o,t):this.q(r,n)}),k.go=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gh=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gi=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,V().a4(e.a[0])),1);default:var i=V().a4(e.a[0]);n=this.e(n,i);for(var a=n,o=V().a4(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=V().a4(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,V().a4(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gj=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,V().a4(e.a[0])),1);default:var i=V().a4(e.a[0]);n=this.e(n,i);for(var a=n,o=V().a4(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=V().a4(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,V().a4(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gk=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gl=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.e(i,V().be(new R(a.i,a.k))),1);default:var o=e.a[0],s=V().be(new R(o.i,o.k));n=this.e(n,s);for(var c=n,l=e.a[1],u=V().be(new R(l.i,l.k)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.a[f],m=V().be(new R(p.i,p.k));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.e(h,V().be(new R(g.i,g.k))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.L(this.e(this.e(c,d),u))}}),k.gm=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),k.gn=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.L(this.e(this.e(i,o),a))}});function Ru(e){this.aU=null,this.dO=null,this.cE=!1,this.dO=e,Ao(this),this.cE=!1}k=Ru.prototype=new A,k.constructor=Ru;function zu(){}zu.prototype=k,k.jn=(function(e){this.cE?(Po(e),this.dO.ac()):No(this,e)}),k.iY=(function(){jo(this),this.cE=!0}),new j().i(Ru,`com.raquo.airstream.ownership.OneTimeOwner`,{bF:1,bG:1});function Bu(){}k=Bu.prototype=new A,k.constructor=Bu;function Vu(){}Vu.prototype=k,k.i4=(function(e){return e!==null}),k.ia=(function(e){return e?``:null}),k.cp=(function(e){return this.i4(e)}),k.bS=(function(e){return this.ia(!!e)}),new j().i(Bu,`com.raquo.laminar.codecs.package$$anon$1`,{c3:1,a8:1});function Hu(e){if(e===null)throw new Lh}k=Hu.prototype=new A,k.constructor=Hu;function Uu(){}Uu.prototype=k,k.bS=(function(e){return e}),k.cp=(function(e){return e}),new j().i(Hu,`com.raquo.laminar.codecs.package$$anon$2`,{c4:1,a8:1});function Wu(e){return new Ds(e,new Z((e=>e+`px`)))}function Gu(e,t,n,r){}k=Gu.prototype=new Is,k.constructor=Gu;function Ku(){}Ku.prototype=k,new j().i(Gu,`com.raquo.laminar.keys.CompositeKey`,{cv:1,v:1});function qu(e){this.cc=null,this.cc=e}k=qu.prototype=new Is,k.constructor=qu;function Ju(){}Ju.prototype=k;var Yu=new j().i(qu,`com.raquo.laminar.keys.EventProp`,{cz:1,v:1});function Xu(e,t,n){return e.ag=t,e.aV=n,e}function Zu(){this.ag=null,this.aV=null}k=Zu.prototype=new Is,k.constructor=Zu;function Qu(){}Qu.prototype=k,k.c=(function(e){return new Vf(this,e,new Zm(((e,t,n)=>{N().dA(e,t,n)})))}),k.hx=(function(e){return new Uf(this,e.ha(),new Zm(((e,t,n)=>{N().dA(e,this,t)})))}),new j().i(Zu,`com.raquo.laminar.keys.HtmlAttr`,{a0:1,v:1});function $u(e,t){this.ah=null,this.eF=null,this.ah=e,this.eF=t}k=$u.prototype=new Is,k.constructor=$u;function ed(){}ed.prototype=k,k.c=(function(e){return new Vf(this,e,new Zm(((e,t,n)=>{N().jD(e,t,n)})))}),new j().i($u,`com.raquo.laminar.keys.HtmlProp`,{an:1,v:1});function td(e,t,n){this.cR=null,this.cQ=null,this.cd=null,this.ce=null,this.cR=e,this.cQ=t;var r=n.l()?Q():new u_(n.A()+`:`+e);this.cd=r.l()?e:r.A(),this.ce=n.l()?Q():new u_(Bs().j5(n.A()))}k=td.prototype=new Is,k.constructor=td;function nd(){}nd.prototype=k,new j().i(td,`com.raquo.laminar.keys.SvgAttr`,{cA:1,v:1});function rd(){}k=rd.prototype=new A,k.constructor=rd;function id(){}id.prototype=k,k.a2=(function(e){}),new j().i(rd,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cH:1,R:1});function ad(e,t){if(this.eO=null,this.eO=e,t===null)throw new Lh}k=ad.prototype=new A,k.constructor=ad;function od(){}od.prototype=k,k.a2=(function(e){var t=co(),n=(()=>{this.eO.j(e)});if(co(),t.F)n();else{t.F=!0;try{n()}finally{t.F=!1,io(t)}}}),new j().i(ad,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cI:1,R:1});function sd(){}k=sd.prototype=new A,k.constructor=sd;function cd(){}cd.prototype=k,new j().i(sd,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cL:1,cJ:1});function ld(){}k=ld.prototype=new A,k.constructor=ld;function ud(){}ud.prototype=k,new j().i(ld,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cN:1,cM:1});var dd;function fd(){return dd||=new ld,dd}function pd(e,t){if(this.eP=null,this.eP=e,t===null)throw new Lh}k=pd.prototype=new A,k.constructor=pd;function md(){}md.prototype=k,k.hO=(function(e){return this.eP.j(e)}),new j().i(pd,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cQ:1,cO:1});function hd(e){e.gt(new xo(new Km((()=>{throw Sp(new K,`Attempting to use owner of unmounted element: `+Zl(N().i3(e.aO(),(N(),Uy())),``,` > `,``))}))))}function gd(e,t,n){return e.cZ=t,e}function _d(){this.cZ=null}k=_d.prototype=new A,k.constructor=_d;function vd(){}vd.prototype=k,k.dv=(function(){return this.cZ}),k.bL=(function(e){var t=this.hS();return e.a5(new Z((e=>{e.a2(t)}))),t}),k.hS=(function(){return new Gg(this,N().hZ(this))}),new j().i(_d,`com.raquo.laminar.tags.HtmlTag`,{as:1,aa:1});function yd(e,t){this.eX=null,this.eX=e}k=yd.prototype=new A,k.constructor=yd;function bd(){}bd.prototype=k,new j().i(yd,`com.raquo.laminar.tags.SvgTag`,{d0:1,aa:1});function xd(){}k=xd.prototype=new A,k.constructor=xd;function Sd(){}Sd.prototype=k,k.bS=(function(e){return e}),k.cp=(function(e){return e}),new j().i(xd,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dc:1,a8:1});function Cd(e,t){return e.b0=t,e.co(),e}function wd(){this.b0=null,this.aZ=null,this.b1=!1,this.b2=null,this.b3=!1}k=wd.prototype=new A,k.constructor=wd;function Td(){}Td.prototype=k,k.jN=(function(){return this.b1||=(this.aZ=new Kf(this.b0,pc().hy(),(pc(),void 0)),!0),this.aZ}),k.f=(function(e,t){var n=this.jN().bL(B().b(new(F.r()).C([])));return e.a5(new Z((e=>{e.j(this).a2(n)}))),t.a5(new Z((e=>{e.a2(n)}))),n}),k.bl=(function(){return this.b3||=(this.b2=new _p,!0),this.b2});function Ed(){}k=Ed.prototype=new A,k.constructor=Ed;function Dd(){}Dd.prototype=k,k.jR=(function(e){if(!(e>=0&&e<=1114111))throw jh(new Mh);return String.fromCodePoint(e)}),new j().i(Ed,`java.lang.Character$`,{dk:1,a:1});var Od;function kd(){return Od||=new Ed,Od}function Ad(){}k=Ad.prototype=new A,k.constructor=Ad;function jd(){}jd.prototype=k;function Md(e){return e instanceof Ad||typeof e==`number`||e instanceof R}function Nd(e,t,n,r,i){this.b5=null,this.bv=null,this.b6=null,this.b7=0,this.b4=0,this.b5=e,this.bv=t,this.b6=n,this.b7=r,this.b4=i}k=Nd.prototype=new A,k.constructor=Nd;function Pd(){}Pd.prototype=k,k.m=(function(e){return e instanceof Nd&&this.b6===e.b6&&this.b7===e.b7&&this.b4===e.b4&&this.b5===e.b5&&this.bv===e.bv}),k.t=(function(){var e=``;return this.b5!==`<jscode>`&&(e=``+e+this.b5+`.`),e=``+e+this.bv,this.b6===null?e+=`(Unknown Source)`:(e=e+`(`+this.b6,this.b7>=0&&(e=e+`:`+this.b7,this.b4>=0&&(e=e+`:`+this.b4)),e+=`)`),e}),k.r=(function(){return n_(this.b5)^n_(this.bv)^n_(this.b6)^this.b7^this.b4});var Fd=new j().i(Nd,`java.lang.StackTraceElement`,{aC:1,a:1});function Id(){}k=Id.prototype=new A,k.constructor=Id;function Ld(){}Ld.prototype=k,k.j6=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new o_;for(var i=``,a=t;a!==r;)i+=``+la(e.a[a]),a=1+a|0;return i}),new j().i(Id,`java.lang.String$`,{dz:1,a:1});var Rd;function zd(){return Rd||=new Id,Rd}function Bd(e,t,n,r,i){return e.fK=t,e.fL=i,i&&e.iw(),e}var Vd=class extends Error{constructor(){super(),this.fK=null,this.fL=!1,this.fJ=null,this.ch=null}iS(e){return this}bU(){return this.fK}iw(){var e=this instanceof $?this.V:this;return this.fJ=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}iJ(){return this.ch===null&&(this.fL?this.ch=al().iv(this.fJ):this.ch=new(Fd.r()).C(0)),this.ch}t(){var e=na(this),t=this.bU();return t===null?e:e+`: `+t}r(){return xa.prototype.r.call(this)}m(e){return xa.prototype.m.call(this,e)}get message(){var e=this.bU();return e===null?``:e}get name(){return na(this)}toString(){return this.t()}};function Hd(){this.aC=null,Wd=this,this.aC=new Vh}k=Hd.prototype=new A,k.constructor=Hd;function Ud(){}Ud.prototype=k,new j().i(Hd,`scala.$less$colon$less$`,{dN:1,a:1});var Wd;function Gd(){return Wd||=new Hd,Wd}function Kd(){}k=Kd.prototype=new A,k.constructor=Kd;function qd(){}qd.prototype=k,k.gI=(function(e,t){var n=e.D();if(n>-1){for(var r=t.j7(n),i=e.s(),a=0;a<n;)B().hN(r,a,i.o()),a=1+a|0;return r}else{var o=null,s=t.jz(),c=s===Pa.l();o=[];for(var l=e.s();l.x();){var u=l.o(),d=c?ya(u):u===null?s.aw.z:u;o.push(d)}return(s===Na.l()?bl.l():s===lu.l()||s===qp.l()?Ma.l():s).aw.r().w(o)}}),k.gF=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!cu().J(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new j().i(Kd,`scala.Array$`,{dP:1,a:1});var Jd;function Yd(){return Jd||=new Kd,Jd}function Xd(){this.fN=null,Qd=this,this.fN=new Au(fl().fI)}k=Xd.prototype=new A,k.constructor=Xd;function Zd(){}Zd.prototype=k,k.jm=(function(){return this.fN.dj}),new j().i(Xd,`scala.Console$`,{dQ:1,eL:1});var Qd;function $d(){return Qd||=new Xd,Qd}function ef(){}k=ef.prototype=new A,k.constructor=ef;function tf(){}tf.prototype=k,k.t=(function(){return`<function1>`});function nf(){}k=nf.prototype=new Vl,k.constructor=nf;function rf(){}rf.prototype=k,k.jY=(function(e){return e===null?null:e.a.length===0?k_().fX:new My(e)});function af(){}k=af.prototype=new A,k.constructor=af;function of(){}of.prototype=k,k.E=(function(e){return e===null?Q():new u_(e)}),new j().i(af,`scala.Option$`,{dY:1,a:1});var sf;function cf(){return sf||=new af,sf}function lf(e,t){if(t===e)e.ga(Sg().gJ(t));else for(var n=t.s();n.x();)e.dm(n.o());return e}function uf(){}k=uf.prototype=new A,k.constructor=uf;function df(){}df.prototype=k,k.t=(function(){return`<function0>`});function ff(){}k=ff.prototype=new A,k.constructor=ff;function pf(){}pf.prototype=k,k.t=(function(){return`<function1>`});function mf(){}k=mf.prototype=new A,k.constructor=mf;function hf(){}hf.prototype=k,k.t=(function(){return`<function2>`});function gf(){}k=gf.prototype=new A,k.constructor=gf;function _f(){}_f.prototype=k,k.t=(function(){return`<function3>`});function vf(e){this.cn=!1,this.cn=e}k=vf.prototype=new A,k.constructor=vf;function yf(){}yf.prototype=k,k.t=(function(){return``+this.cn}),new j().i(vf,`scala.runtime.BooleanRef`,{eY:1,a:1});function bf(e){this.bC=0,this.bC=e}k=bf.prototype=new A,k.constructor=bf;function xf(){}xf.prototype=k,k.t=(function(){return``+this.bC}),new j().i(bf,`scala.runtime.IntRef`,{f0:1,a:1});function Sf(){this.y=0,this.g6=0,this.hw=0,this.hv=0,wf=this,this.y=n_(`Seq`),this.g6=n_(`Map`),this.hw=n_(`Set`),this.hv=this.jT(Uy(),this.g6)}k=Sf.prototype=new Lu,k.constructor=Sf;function Cf(){}Cf.prototype=k,k.jA=(function(e){return Ev(e)?this.iR(e,this.y):e instanceof gy?this.iZ(e,this.y):this.jl(e,this.y)}),new j().i(Sf,`scala.util.hashing.MurmurHash3$`,{ft:1,fs:1});var wf;function H(){return wf||=new Sf,wf}var Tf=class extends Vd{};function Ef(){this.cz=null,this.dD=null,this.dE=null,Of=this,this.cz=Sg().gc(B().b(new(z.r()).C([]))),this.dD=new Z((e=>{try{console.error(this.ct(e)+`
`+this.iI(e,`
`))}catch(e){var t=e instanceof Vd?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dE=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.V:t})),this.js(this.dD)}k=Ef.prototype=new A,k.constructor=Ef;function Df(){}Df.prototype=k,k.ct=(function(e){try{var t=e.bU()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ta(e).dt()+`: `+t}),k.iI=(function(e,t){try{return Zl(Op().jY(e.iJ()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),k.js=(function(e){this.cz.dm(e)}),k.Z=(function(e){for(var t=this.cz.s();t.x();){var n=t.o();try{n.j(e)}catch(e){var r=e instanceof Vd?e:new $(e),i=this.dE;if(n===null?i===null:n.m(i))throw r instanceof $?r.V:r;console.warn(`Error processing an unhandled error callback:`),Cu().jI(0,new Km((e=>(()=>{throw e instanceof $?e.V:e}))(r)))}}}),new j().i(Ef,`com.raquo.airstream.core.AirstreamError$`,{bm:1,eJ:1,eK:1});var Of;function kf(){return Of||=new Ef,Of}function Af(e){e.c6=!0,e.c8=void 0}function jf(e,t,n){return nh(e,Ha().he(t,Gl().cj,!0),n)}function Mf(e,t){e.c6?ih(e,t):Pf(e).push(new Km((()=>{ih(e,t)})))}function Nf(e){return ch(e)>0}function Pf(e){var t=e.c8;if(t===void 0){var n=M().C(B().b(new(zl.r()).C([])));return e.c8=n,n}else return t}var Ff=new j().i(1,`com.raquo.airstream.core.Observer`,{a7:1,X:1,V:1});function U(e,t,n){return new vm(n.hO(t))}function If(e,t,n,r){return new ad(new Z((e=>{(as(),new es(t,null,null)).a5(new Z((e=>(t=>{n.j(t).a2(e)}))(e)))})),Ks())}function Lf(e,t,n){return new ad(new Z((e=>{(as(),new es(t,null,null)).a5(new Z((e=>(t=>{rc().bH(e,t,void 0)}))(e)))})),Ks())}function Rf(e,t){this.aY=null,this.cS=null,this.cT=null,this.aY=e,this.cS=(n=>{var r=e.cN.j(n);r.l()||t.j(r.A())}),this.cT=(()=>{var e=null;e=this;var t={};if(e===null)throw new Lh;return t.capture=e.aY.cP,t.passive=e.aY.cO,t})()}k=Rf.prototype=new A,k.constructor=Rf;function zf(){}zf.prototype=k,k.a2=(function(e){this.hQ(e,!1)}),k.hQ=(function(e,t){if(bh(e,this)===-1){var n=new Z((t=>(N().hz(e.G,this),new Fo(t.eG,new Km((()=>{var t=bh(e,this);t!==-1&&(yh(e,t),N().ju(e.G,this))})))))),r=t?sc().jU(e,n):ko().cy(e.a8,new Z((t=>n.j(new Vs(e,t)))),!1);return vh(e,this,t),r}else{var i=new Z((e=>void 0));return ko().h9(e.a8,new Z((t=>{i.j(new Vs(e,t))})),!1)}}),k.t=(function(){return`EventListener(`+this.aY.bs.cc+`)`});var Bf=new j().i(Rf,`com.raquo.laminar.modifiers.EventListener`,{cD:1,R:1,ao:1});function Vf(e,t,n){this.eJ=null,this.eK=null,this.eI=null,this.eJ=e,this.eK=t,this.eI=n}k=Vf.prototype=new A,k.constructor=Vf;function Hf(){}Hf.prototype=k,k.a2=(function(e){this.eI.gb(e,this.eJ,this.eK)}),new j().i(Vf,`com.raquo.laminar.modifiers.KeySetter`,{cE:1,R:1,cR:1});function Uf(e,t,n){this.eL=null,this.eN=null,this.eM=null,this.eL=e,this.eN=t,this.eM=n}k=Uf.prototype=new A,k.constructor=Uf;function Wf(){}Wf.prototype=k,k.a2=(function(e){this.hR(e)}),k.hR=(function(e){e.ji(this.eL);var t=this.eN,n=new Z((t=>{this.eM.gb(e,t,this)}));return ko().jK(e.a8,t,n)}),new j().i(Uf,`com.raquo.laminar.modifiers.KeyUpdater`,{cF:1,R:1,ao:1});function W(e,t){if(this.cX=null,this.eR=null,this.eS=null,this.eR=t,hd(this),e===null)throw Sp(new K,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!N().iW(e,document))throw Sp(new K,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eS=e,this.j4()}k=W.prototype=new A,k.constructor=W;function Gf(){}Gf.prototype=k,k.cs=(function(){return this.cX}),k.gt=(function(e){this.cX=e}),k.j4=(function(){return this.cX.g9(),rc().bH(this,this.eR,void 0)}),k.aO=(function(){return this.eS}),new j().i(W,`com.raquo.laminar.nodes.RootNode`,{cW:1,a9:1,aq:1});function Kf(e,t,n){this.cZ=null,this.eW=null,this.eV=null,this.eW=e,this.eV=n,gd(this,e,!1)}k=Kf.prototype=new vd,k.constructor=Kf;function qf(){}qf.prototype=k,k.dv=(function(){return this.eW}),k.hC=(function(){var e=this.eV;return e===void 0?void 0:e.map((e=>e.jZ.ah))}),new j().i(Kf,`com.raquo.laminar.tags.CustomHtmlTag`,{ar:1,as:1,aa:1});function Jf(){this.ag=null,this.aV=null,this.eY=null,this.eZ=!1,Xu(this,`appearance`,new xd)}k=Jf.prototype=new Qu,k.constructor=Jf;function Yf(){}Yf.prototype=k,k.ix=(function(){return this.eZ||=(this.eY=Zf().c(`filled`),!0),this.eY}),new j().i(Jf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Appearance$`,{d4:1,a0:1,v:1});var Xf;function Zf(){return Xf||=new Jf,Xf}function Qf(){this.ag=null,this.aV=null,this.f0=null,this.f1=!1,this.f2=null,this.f3=!1,this.f4=null,this.f5=!1,Xu(this,`size`,new xd)}k=Qf.prototype=new Qu,k.constructor=Qf;function $f(){}$f.prototype=k,k.gR=(function(){return this.f1||=(this.f0=tp().c(`large`),!0),this.f0}),k.gT=(function(){return this.f3||=(this.f2=tp().c(`medium`),!0),this.f2}),k.h7=(function(){return this.f5||=(this.f4=tp().c(`small`),!0),this.f4}),new j().i(Qf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{d5:1,a0:1,v:1});var ep;function tp(){return ep||=new Qf,ep}function np(){this.ag=null,this.aV=null,this.f6=null,this.f7=!1,Xu(this,`placement`,new xd)}k=np.prototype=new Qu,k.constructor=np;function rp(){}rp.prototype=k,k.jS=(function(){return this.f7||=(this.f6=ap().c(`top`),!0),this.f6}),new j().i(np,`io.github.nguyenyou.webawesome.laminar.CommonKeys$SelectPlacement$`,{d6:1,a0:1,v:1});var ip;function ap(){return ip||=new np,ip}function op(){this.b0=null,this.aZ=null,this.b1=!1,this.b2=null,this.b3=!1,Cd(this,`wa-divider`)}k=op.prototype=new Td,k.constructor=op;function sp(){}sp.prototype=k,k.co=(function(){return mt}),new j().i(op,`io.github.nguyenyou.webawesome.laminar.Divider$`,{d7:1,a3:1,a2:1});var cp;function lp(){return cp||=new op,cp}function up(){this.b0=null,this.aZ=null,this.b1=!1,this.b2=null,this.b3=!1,this.f8=null,this.f9=!1,this.fa=null,this.fb=!1,Cd(this,`wa-icon`)}k=up.prototype=new Td,k.constructor=up;function dp(){}dp.prototype=k,k.bf=(function(){return this.f9||=(this.f8=(Y(),Xu(new Zu,`name`,P().a0)),!0),this.f8}),k.dC=(function(){return this.fb||=(this.fa=(Y(),Xu(new Zu,`variant`,P().a0)),!0),this.fa}),k.co=(function(){return Ut}),new j().i(up,`io.github.nguyenyou.webawesome.laminar.Icon$`,{d8:1,a3:1,a2:1});var fp;function pp(){return fp||=new up,fp}function mp(){this.b0=null,this.aZ=null,this.b1=!1,this.b2=null,this.b3=!1,this.fE=null,this.fF=!1,Cd(this,`wa-option`)}k=mp.prototype=new Td,k.constructor=mp;function hp(){}hp.prototype=k,k.h=(function(){return this.fF||=(this.fE=(Y(),Xu(new Zu,`value`,P().a0)),!0),this.fE}),k.co=(function(){return on}),new j().i(mp,`io.github.nguyenyou.webawesome.laminar.UOption$`,{db:1,a3:1,a2:1});var gp;function G(){return gp||=new mp,gp}function _p(){}k=_p.prototype=new tf,k.constructor=_p;function vp(){}vp.prototype=k,k.j=(function(e){return Y().d}),new j().i(_p,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{dd:1,dR:1,e:1});function yp(e){if(e.aw.Z)return e.aw.Q().dt()+`[]`;for(var t=e.aw.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function bp(e){this.d0=null,this.aw=e}k=bp.prototype=new A,k.constructor=bp;function xp(){}xp.prototype=k,k.t=(function(){return(this.aw.Y?`interface `:this.aw.X?``:`class `)+this.aw.N}),k.dt=(function(){return this.d0===null&&(this.d0=yp(this)),this.d0}),new j().i(bp,`java.lang.Class`,{dl:1,a:1,M:1});function Sp(e,t){return Bd(e,t,null,!0,!0),e}var K=class extends Vd{};new j().i(K,`java.lang.Exception`,{L:1,t:1,a:1});function Cp(){}k=Cp.prototype=new A,k.constructor=Cp;function wp(){}wp.prototype=k;function Tp(){this.hs=null,Dp=this,this.hs=Vp()}k=Tp.prototype=new rf,k.constructor=Tp;function Ep(){}Ep.prototype=k,new j().i(Tp,`scala.Predef$`,{e1:1,dU:1,dV:1});var Dp;function Op(){return Dp||=new Tp,Dp}function kp(e,t){return e.ck=t,e}function Ap(){this.ck=null}k=Ap.prototype=new A,k.constructor=Ap;function jp(){}jp.prototype=k,k.ds=(function(e){return this.ck.dr(e,_v())}),k.dp=(function(e){return this.ck.dr(e,_v())});function Mp(e,t){return new sg(e).hW(t)}function Np(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?q().z:new dg(e,r,i)}function Pp(e,t){for(var n=t.s();e.x()&&n.x();)if(!cu().J(e.o(),n.o()))return!1;return e.x()===n.x()}function Fp(){this.z=null,Lp=this,this.z=new tg}k=Fp.prototype=new A,k.constructor=Fp;function Ip(){}Ip.prototype=k,new j().i(Fp,`scala.collection.Iterator$`,{ek:1,a4:1,a:1});var Lp;function q(){return Lp||=new Fp,Lp}function Rp(){}k=Rp.prototype=new A,k.constructor=Rp;function zp(){}zp.prototype=k,new j().i(Rp,`scala.collection.immutable.Map$`,{ez:1,ep:1,a:1});var Bp;function Vp(){return Bp||=new Rp,Bp}function Hp(e){this.fY=null,this.fY=e}k=Hp.prototype=new df,k.constructor=Hp;function Up(){}Up.prototype=k,k.ac=(function(){return(0,this.fY)()}),new j().i(Hp,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eU:1,bf:1,ac:1});function J(e){this.fZ=null,this.fZ=e}k=J.prototype=new pf,k.constructor=J;function Wp(){}Wp.prototype=k,k.j=(function(e){return(0,this.fZ)(e)}),new j().i(J,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eV:1,bg:1,e:1});function Gp(){}k=Gp.prototype=new A,k.constructor=Gp;function Kp(){}Kp.prototype=k,k.t=(function(){return`<function1>`}),k.j=(function(e){return this.gd(e,Gl().cj)});var qp=new j().i(0,`scala.runtime.Nothing$`,{f1:1,t:1,a:1});function Jp(){}k=Jp.prototype=new A,k.constructor=Jp;function Yp(){}Yp.prototype=k,k.iD=(function(e){return(t=>e.j(t))}),new j().i(Jp,`scala.scalajs.js.Any$`,{f6:1,f7:1,f8:1});var Xp;function Zp(){return Xp||=new Jp,Xp}function Qp(){}k=Qp.prototype=new df,k.constructor=Qp;function $p(){}$p.prototype=k;function em(){}k=em.prototype=new pf,k.constructor=em;function tm(){}tm.prototype=k;function nm(){}k=nm.prototype=new hf,k.constructor=nm;function rm(){}rm.prototype=k;function im(){}k=im.prototype=new _f,k.constructor=im;function am(){}am.prototype=k;function om(e,t,n,r){if(this.dH=null,this.dF=!1,this.cA=null,this.dG=null,this.dH=e,this.dF=t,this.cA=n,r===null)throw new Lh;this.dG=void 0}k=om.prototype=new A,k.constructor=om;function sm(){}sm.prototype=k,k.cv=(function(){return this.dG}),k.cq=(function(){return La(this)}),k.t=(function(){return Ra(this)}),k.dx=(function(e){try{this.dH.j(e)}catch(e){var t=e instanceof Vd?e:new $(e);this.dF?this.cx(new Ng(t)):kf().Z(new Ng(t))}}),k.cx=(function(e){try{this.cA.bd(e)?this.cA.j(e):kf().Z(e)}catch(n){var t=n instanceof Vd?n:new $(n);kf().Z(new Pg(t,e))}}),k.bW=(function(e){e.bT(new Z((e=>{this.cx(e)})),new Z((e=>{this.dx(e)})))}),new j().i(om,`com.raquo.airstream.core.Observer$$anon$8`,{br:1,X:1,V:1,a7:1});function cm(e,t,n){if(this.cB=null,this.dI=!1,this.dJ=null,this.cB=e,this.dI=t,n===null)throw new Lh;this.dJ=void 0}k=cm.prototype=new A,k.constructor=cm;function lm(){}lm.prototype=k,k.cv=(function(){return this.dJ}),k.cq=(function(){return La(this)}),k.t=(function(){return Ra(this)}),k.dx=(function(e){this.bW(new jg(e))}),k.cx=(function(e){this.bW(new kg(e))}),k.bW=(function(e){try{this.cB.bd(e)?this.cB.j(e):e.bT(new Z((e=>{kf().Z(e)})),new Z((e=>void 0)))}catch(n){var t=n instanceof Vd?n:new $(n);this.dI&&e.gQ()?this.cx(new Ng(t)):e.bT(new Z((e=>{kf().Z(new Pg(t,e))})),new Z((e=>{kf().Z(new Ng(t))})))}}),new j().i(cm,`com.raquo.airstream.core.Observer$$anon$9`,{bs:1,X:1,V:1,a7:1});function um(e){if(this.e1=null,this.e2=!1,this.hf=null,e===null)throw new Lh;hs(this)}k=um.prototype=new A,k.constructor=um;function dm(){}dm.prototype=k,k.jM=(function(){return this.e2||=(this.e1=new yd(`svg`,!1),!0),this.e1}),new j().i(um,`com.raquo.laminar.api.Laminar$svg$`,{bX:1,cn:1,c6:1,c8:1});function fm(){this.d=null,mm=this,this.d=new jv}k=fm.prototype=new A,k.constructor=fm;function pm(){}pm.prototype=k,new j().i(fm,`com.raquo.laminar.api.package$`,{c0:1,al:1,am:1,ak:1});var mm;function Y(){return mm||=new fm,mm}function hm(e,t,n){return e.aW=t,e.aX=n,e}function gm(){this.aW=null,this.aX=null}k=gm.prototype=new Is,k.constructor=gm;function _m(){}_m.prototype=k,k.c=(function(e){return new Vf(this,aa(e),new Zm(((e,t,n)=>{N().h5(e,t,n)})))});function vm(e){this.eU=null,this.cY=null,this.eU=Q(),this.cY=N().i1(e)}k=vm.prototype=new A,k.constructor=vm;function ym(){}ym.prototype=k,k.h6=(function(e){this.eU=e}),k.hd=(function(e){}),k.a2=(function(e){rc().bH(e,this,void 0)}),k.jP=(function(){return this.cY.data}),k.aO=(function(){return this.cY}),new j().i(vm,`com.raquo.laminar.nodes.TextNode`,{cY:1,a9:1,R:1,ap:1});function bm(){this.b0=null,this.aZ=null,this.b1=!1,this.b2=null,this.b3=!1,this.fm=null,this.fn=!1,this.fw=null,this.fx=!1,this.fu=null,this.fv=!1,this.fq=null,this.fr=!1,this.fk=null,this.fl=!1,this.fe=null,this.ff=!1,this.fy=null,this.fz=!1,this.fc=null,this.fd=!1,this.fo=null,this.fp=!1,this.fi=null,this.fj=!1,this.fs=null,this.ft=!1,this.fg=null,this.fh=!1,Cd(this,`wa-select`)}k=bm.prototype=new Td,k.constructor=bm;function xm(){}xm.prototype=k,k.bV=(function(){return this.fn||=(this.fm=(Y(),new qu(`input`)),!0),this.fm}),k.h=(function(){return this.fx||=(this.fw=(Y(),Xu(new Zu,`value`,P().a0)),!0),this.fw}),k.bj=(function(){return this.fv||=(this.fu=tp(),!0),this.fu}),k.av=(function(){return this.fr||=(this.fq=(Y(),Xu(new Zu,`placeholder`,P().a0)),!0),this.fq}),k.gU=(function(){return this.fl||=(this.fk=(Y(),Xu(new Zu,`multiple`,P().br)),!0),this.fk}),k.i5=(function(){return this.ff||=(this.fe=(Y(),Xu(new Zu,`disabled`,P().br)),!0),this.fe}),k.bm=(function(){return this.fz||=(this.fy=(Y(),Xu(new Zu,`with-clear`,P().br)),!0),this.fy}),k.hE=(function(){return this.fd||=(this.fc=Zf(),!0),this.fc}),k.jo=(function(){return this.fp||=(this.fo=(Y(),Xu(new Zu,`pill`,P().br)),!0),this.fo}),k.du=(function(){return this.fj||=(this.fi=(Y(),Xu(new Zu,`label`,P().a0)),!0),this.fi}),k.jp=(function(){return this.ft||=(this.fs=ap(),!0),this.fs}),k.iP=(function(){return this.fh||=(this.fg=(Y(),Xu(new Zu,`hint`,P().a0)),!0),this.fg}),k.co=(function(){return Qi}),new j().i(bm,`io.github.nguyenyou.webawesome.laminar.Select$`,{d9:1,a3:1,a2:1,de:1});var Sm;function X(){return Sm||=new bm,Sm}function Cm(){}k=Cm.prototype=new A,k.constructor=Cm;function wm(){}wm.prototype=k;function Tm(e,t){return e===t}function Em(e){return e?1231:1237}var Dm=new j().i(0,`java.lang.Boolean`,{di:1,a:1,S:1,M:1},(e=>typeof e==`boolean`));function Om(e){return e}function km(e,t){return t instanceof ea&&e===t.c}var Am=new j().i(0,`java.lang.Character`,{ay:1,a:1,S:1,M:1},(e=>e instanceof ea)),jm=class extends K{};function Mm(){this.v=null,this.v=``}k=Mm.prototype=new A,k.constructor=Mm;function Nm(){}Nm.prototype=k,k.hF=(function(e){var t=zd().j6(e,0,e.a.length);return this.v=``+this.v+t,this}),k.t=(function(){return this.v}),k.p=(function(){return this.v.length}),k.gq=(function(e){return this.v.charCodeAt(e)}),new j().i(Mm,`java.lang.StringBuilder`,{dA:1,ab:1,aw:1,a:1});function Pm(){}k=Pm.prototype=new wp,k.constructor=Pm;function Fm(){}Fm.prototype=k;function Im(){}k=Im.prototype=new A,k.constructor=Im;function Lm(){}Lm.prototype=k,k.t=(function(){return`<function1>`}),k.bd=(function(e){return!1}),k.hI=(function(e){throw new qh(e)}),k.j=(function(e){this.hI(e)}),new j().i(Im,`scala.PartialFunction$$anon$1`,{e0:1,f:1,e:1,a:1});function Rm(){}k=Rm.prototype=new A,k.constructor=Rm;function zm(){}zm.prototype=k,k.s=(function(){return this}),k.cr=(function(e){return this.bZ(e,-1)}),k.bZ=(function(e,t){return Np(this,e,t)}),k.t=(function(){return`<iterator>`}),k.bG=(function(e,t,n,r){return Ql(this,e,t,n,r)}),k.D=(function(){return-1});function Bm(e,t){return e.cl=t,e}function Vm(){this.cl=null}k=Vm.prototype=new A,k.constructor=Vm;function Hm(){}Hm.prototype=k,k.gc=(function(e){return this.cl.dp(e)}),k.gJ=(function(e){return this.cl.ds(e)}),k.ds=(function(e){return this.gJ(e)}),k.dp=(function(e){return this.gc(e)});function Um(e,t){return t>=0&&e.au(t)>0}function Wm(e){return e.au(0)===0}function Gm(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Pp(e.s(),t)}function Km(e){this.g2=null,this.g2=e}k=Km.prototype=new $p,k.constructor=Km;function qm(){}qm.prototype=k,k.ac=(function(){return(0,this.g2)()}),new j().i(Km,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{fe:1,fd:1,bf:1,ac:1});function Z(e){this.g3=null,this.g3=e}k=Z.prototype=new tm,k.constructor=Z;function Jm(){}Jm.prototype=k,k.j=(function(e){return(0,this.g3)(e)}),new j().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{fg:1,ff:1,bg:1,e:1});function Ym(e){this.g4=null,this.g4=e}k=Ym.prototype=new rm,k.constructor=Ym;function Xm(){}Xm.prototype=k,k.dn=(function(e,t){return(0,this.g4)(e,t)}),new j().i(Ym,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{fi:1,fh:1,eW:1,dS:1});function Zm(e){this.g5=null,this.g5=e}k=Zm.prototype=new am,k.constructor=Zm;function Qm(){}Qm.prototype=k,k.gb=(function(e,t,n){return(0,this.g5)(e,t,n)}),new j().i(Zm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{fk:1,fj:1,eX:1,dT:1});function $m(){}k=$m.prototype=new A,k.constructor=$m;function eh(){}eh.prototype=k;function th(e){e.bq=M().C(B().b(new(Ff.r()).C([]))),e.cI=M().C(B().b(new(Ia.r()).C([]))),e.c9=!1}function nh(e,t,n){var r=co(),i=(()=>{ah(e);var r=rh(e,t,n);return t.bW(iv(e)),oh(e),r}),a=!Nf(e);if(r.F||!a)var o=i();else{r.F=!0;try{var o=i()}finally{r.F=!1,io(r)}}return o}function rh(e,t,n){var r=new Fo(n,new Km((()=>{Mf(e,t)})));return e.bq.push(t),r}function ih(e,t){Ka().jw(e.bq,t)&&sh(e)}function ah(e){e.c9||=!0}function oh(e){ch(e)===1&&Ig(e)}function sh(e){Nf(e)||(e.c9=!1)}function ch(e){var t=e.bq.length,n=e.cI;return(t|0)+(n.length|0)|0}function lh(e){e.dV=Ha().iE(new uh(e),(Ha(),!0))}function uh(e){if(this.dW=null,e===null)throw new Lh;this.dW=e}k=uh.prototype=new Kp,k.constructor=uh;function dh(){}dh.prototype=k,k.iV=(function(e){return!0}),k.hM=(function(e,t){new Za(new Z((t=>{this.dW.jB(e,t)})))}),k.bd=(function(e){return this.iV(e)}),k.gd=(function(e,t){return this.hM(e,t)}),new j().i(uh,`com.raquo.airstream.state.Var$$anon$1`,{bN:1,bh:1,e:1,f:1,a:1});function fh(e){if(e===null)throw new Lh}k=fh.prototype=new Kp,k.constructor=fh;function ph(){}ph.prototype=k,k.bd=(function(e){return typeof e==`string`}),k.gd=(function(e,t){return typeof e==`string`?e:t.j(e)}),new j().i(fh,`com.raquo.laminar.DomApi$$anon$2`,{bS:1,bh:1,e:1,f:1,a:1});function mh(e,t){this.cb=null,this.cM=null,this.cb=e,this.cM=t}k=mh.prototype=new A,k.constructor=mh;function hh(){}hh.prototype=k,k.a2=(function(e){var t=this.cM;t!==void 0&&t.gY(e,this.cb),rc().bH(e,this.cb,void 0)}),k.jV=(function(e){return new mh(this.cb,e.hH(this.cM))});var gh=new j().i(mh,`com.raquo.laminar.inserters.StaticChildInserter`,{cs:1,R:1,cq:1,cu:1,cp:1});function _h(e){e.cU=new Ro(new Km((()=>{e.a8.g9()})),new Km((()=>{e.a8.i2()}))),e.aB=void 0}function vh(e,t,n){if(e.aB===void 0)e.aB=M().C(B().b(new(Bf.r()).C([t])));else if(n){var r=e.aB;if(r===void 0){var i;throw new Bh(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aB;if(a===void 0){var o;throw new Bh(`undefined.get`)}else var o=a;o.push(t)}}function yh(e,t){var n=e.aB;n!==void 0&&n.splice(t,1)}function bh(e,t){var n=e.aB;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:ra(a,t))?r=!0:i=1+i|0}return r?i:-1}function xh(e,t){Ch(e,e.cf,t)&&wh(e,t)}function Sh(e,t){var n=e.cf;e.cf=t,Ch(e,n,t)||wh(e,t)}function Ch(e,t,n){var r=!t.l()&&!t.A().cs().M.l(),i=!n.l()&&!n.A().cs().M.l();return r&&!i}function wh(e,t){Th(e,t.l()?Q():new u_(t.A().cs()))}function Th(e,t){if(t.l())e.cU.hU();else{var n=t.A();e.cU.jF(n)}}function Eh(){}k=Eh.prototype=new wm,k.constructor=Eh;function Dh(){}Dh.prototype=k;var Oh=class extends jm{constructor(e){super(),Bd(this,e,null,!0,!0)}};new j().i(Oh,`java.lang.ArithmeticException`,{dh:1,T:1,L:1,t:1,a:1});var kh=new j().i(0,`java.lang.Byte`,{dj:1,U:1,a:1,S:1,M:1},(e=>ma(e)));function Ah(e,t){return Bd(e,t,null,!0,!0),e}function jh(e){return Bd(e,null,null,!0,!0),e}var Mh=class extends jm{};new j().i(Mh,`java.lang.IllegalArgumentException`,{dp:1,T:1,L:1,t:1,a:1});function Nh(e,t){return Bd(e,t,null,!0,!0),e}var Ph=class extends jm{};new j().i(Ph,`java.lang.IndexOutOfBoundsException`,{aA:1,T:1,L:1,t:1,a:1});function Fh(){}k=Fh.prototype=new wm,k.constructor=Fh;function Ih(){}Ih.prototype=k,new j().i(Fh,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dt:1,av:1,at:1,ax:1,au:1});var Lh=class extends jm{constructor(){super(),Bd(this,null,null,!0,!0)}};new j().i(Lh,`java.lang.NullPointerException`,{dv:1,T:1,L:1,t:1,a:1});var Rh=new j().i(0,`java.lang.Short`,{dw:1,U:1,a:1,S:1,M:1},(e=>ha(e))),zh=class extends jm{constructor(e){super(),Bd(this,e,null,!0,!0)}};new j().i(zh,`java.lang.UnsupportedOperationException`,{dE:1,T:1,L:1,t:1,a:1});var Bh=class extends jm{constructor(e){super(),Bd(this,e,null,!0,!0)}};new j().i(Bh,`java.util.NoSuchElementException`,{dJ:1,T:1,L:1,t:1,a:1});function Vh(){}k=Vh.prototype=new Fm,k.constructor=Vh;function Hh(){}Hh.prototype=k,k.j=(function(e){return e}),k.t=(function(){return`generalized constraint`}),new j().i(Vh,`scala.$less$colon$less$$anon$1`,{dO:1,dL:1,dM:1,e:1,a:1});function Uh(e){return e.d5||=(e.d6=e.ci===null?`null`:Kh(e),!0),e.d6}function Wh(e){return e.d5?e.d6:Uh(e)}function Gh(e){var t=e.ci;return`of class `+na(t)}function Kh(e){try{return e.ci+` (`+Gh(e)+`)`}catch{return`an instance `+Gh(e)}}var qh=class extends jm{constructor(e){super(),this.d6=null,this.ci=null,this.d5=!1,this.ci=e,Bd(this,null,null,!0,!0)}bU(){return Wh(this)}};new j().i(qh,`scala.MatchError`,{dW:1,T:1,L:1,t:1,a:1});function Jh(){}k=Jh.prototype=new A,k.constructor=Jh;function Yh(){}Yh.prototype=k,k.l=(function(){return this===Q()}),k.D=(function(){return this.l()?0:1}),k.s=(function(){return this.l()?q().z:new rg(this.A())});function Xh(e){this.bw=0,this.fQ=0,this.fP=null,this.fP=e,this.bw=0,this.fQ=e.W()}k=Xh.prototype=new zm,k.constructor=Xh;function Zh(){}Zh.prototype=k,k.x=(function(){return this.bw<this.fQ}),k.o=(function(){var e=this.fP.X(this.bw);return this.bw=1+this.bw|0,e}),new j().i(Xh,`scala.Product$$anon$1`,{e2:1,r:1,s:1,b:1,c:1});function Qh(e){this.ck=null,kp(this,e)}k=Qh.prototype=new jp,k.constructor=Qh;function $h(){}$h.prototype=k,new j().i(Qh,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eg:1,ef:1,a4:1,a:1,ad:1});function eg(e){return Zl(e,e.bb()+`(`,`, `,`)`)}function tg(){}k=tg.prototype=new zm,k.constructor=tg;function ng(){}ng.prototype=k,k.x=(function(){return!1}),k.j8=(function(){throw new Bh(`next on empty iterator`)}),k.D=(function(){return 0}),k.bZ=(function(e,t){return this}),k.o=(function(){this.j8()}),new j().i(tg,`scala.collection.Iterator$$anon$19`,{el:1,r:1,s:1,b:1,c:1});function rg(e){this.by=!1,this.fU=null,this.fU=e,this.by=!1}k=rg.prototype=new zm,k.constructor=rg;function ig(){}ig.prototype=k,k.x=(function(){return!this.by}),k.o=(function(){return this.by?q().z.o():(this.by=!0,this.fU)}),k.bZ=(function(e,t){return this.by||e>0||t===0?q().z:this}),new j().i(rg,`scala.collection.Iterator$$anon$20`,{em:1,r:1,s:1,b:1,c:1});function ag(e){for(;;){if(e.I instanceof sg){var t=e.I;e.I=t.I,e.aj=t.aj,t.T!==null&&(e.S===null&&(e.S=t.S),t.S.bz=e.T,e.T=t.T);continue}return}}function og(e){for(;;)if(e.T===null)return e.I=null,e.S=null,!1;else{if(e.I=e.T.iO(),e.S===e.T&&(e.S=e.S.bz),e.T=e.T.bz,ag(e),e.aj)return!0;if(e.I!==null&&e.I.x())return e.aj=!0,!0}}function sg(e){this.I=null,this.T=null,this.S=null,this.aj=!1,this.I=e,this.T=null,this.S=null,this.aj=!1}k=sg.prototype=new zm,k.constructor=sg;function cg(){}cg.prototype=k,k.x=(function(){return this.aj?!0:this.I===null?!1:this.I.x()?(this.aj=!0,!0):og(this)}),k.o=(function(){return this.x()?(this.aj=!1,this.I.o()):q().z.o()}),k.hW=(function(e){var t=new $l(e,null);return this.T===null?(this.T=t,this.S=t):(this.S.bz=t,this.S=t),this.I===null&&(this.I=q().z),this}),new j().i(sg,`scala.collection.Iterator$ConcatIterator`,{aL:1,r:1,s:1,b:1,c:1});function lg(e){for(;e.ab>0;)e.ak.x()?(e.ak.o(),e.ab=-1+e.ab|0):e.ab=0}function ug(e,t){if(e.O<0)return-1;var n=e.O-t|0;return n<0?0:n}function dg(e,t,n){this.ak=null,this.O=0,this.ab=0,this.ak=e,this.O=n,this.ab=t}k=dg.prototype=new zm,k.constructor=dg;function fg(){}fg.prototype=k,k.D=(function(){var e=this.ak.D();if(e<0)return-1;var t=e-this.ab|0,n=t<0?0:t;if(this.O<0)return n;var r=this.O;return r<n?r:n}),k.x=(function(){return lg(this),this.O!==0&&this.ak.x()}),k.o=(function(){return lg(this),this.O>0?(this.O=-1+this.O|0,this.ak.o()):this.O<0?this.ak.o():q().z.o()}),k.bZ=(function(e,t){var n=e>0?e:0;if(t<0)var r=ug(this,n);else if(t<=n)var r=0;else if(this.O<0)var r=t-n|0;else var i=ug(this,n),a=t-n|0,r=i<a?i:a;var o=this.ab+n|0;return r===0?q().z:o<0?(this.ab=2147483647,this.O=0,Mp(this,new Hp((()=>new dg(this.ak,-2147483647+o|0,r))))):(this.ab=o,this.O=r,this)}),new j().i(dg,`scala.collection.Iterator$SliceIterator`,{eo:1,r:1,s:1,b:1,c:1});function pg(e,t){return t>=0&&e.au(t)>0}function mg(e,t){if(t<0)throw Nh(new Ph,``+t);var n=e.i8(t);if(n.l())throw Nh(new Ph,``+t);return n.a6()}function hg(e,t){return Dv(t)?gg(e,e,t):Gm(e,t)}function gg(e,t,n){for(;;)if(t===n)return!0;else if(!t.l()&&!n.l()&&cu().J(t.a6(),n.a6())){var r=t.Q(),i=n.Q();t=r,n=i}else return t.l()&&n.l()}function _g(e){this.bB=null,this.bB=e}k=_g.prototype=new zm,k.constructor=_g;function vg(){}vg.prototype=k,k.x=(function(){return!this.bB.l()}),k.o=(function(){var e=this.bB.a6();return this.bB=this.bB.Q(),e}),new j().i(_g,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{et:1,r:1,s:1,b:1,c:1});function yg(){this.cl=null,Bm(this,Og())}k=yg.prototype=new Hm,k.constructor=yg;function bg(){}bg.prototype=k,new j().i(yg,`scala.collection.mutable.Buffer$`,{eE:1,eq:1,ad:1,a4:1,a:1});var xg;function Sg(){return xg||=new yg,xg}function Cg(e){this.bD=0,this.g0=0,this.g1=null,this.g1=e,this.bD=0,this.g0=e.W()}k=Cg.prototype=new zm,k.constructor=Cg;function wg(){}wg.prototype=k,k.x=(function(){return this.bD<this.g0}),k.o=(function(){var e=this.g1.X(this.bD);return this.bD=1+this.bD|0,e}),new j().i(Cg,`scala.runtime.ScalaRunTime$$anon$1`,{f4:1,r:1,s:1,b:1,c:1});function Tg(){}k=Tg.prototype=new A,k.constructor=Tg;function Eg(){}Eg.prototype=k,k.dp=(function(e){return this.gK(e)}),k.gK=(function(e){return lf(Yy(new Xy),e).h4()}),k.ds=(function(e){return this.gK(e)}),new j().i(Tg,`scala.scalajs.js.WrappedArray$`,{fa:1,eu:1,ad:1,a4:1,a:1});var Dg;function Og(){return Dg||=new Tg,Dg}function kg(e){this.bE=null,this.bE=e}k=kg.prototype=new eh,k.constructor=kg;function Ag(){}Ag.prototype=k,k.gP=(function(){return!0}),k.gQ=(function(){return!1}),k.bT=(function(e,t){return e.j(this.bE)}),k.Y=(function(){return`Failure`}),k.W=(function(){return 1}),k.X=(function(e){return e===0?this.bE:V().aN(e)}),k.aa=(function(){return new Cg(this)}),k.r=(function(){return H().bh(this,-889275714,!1)}),k.t=(function(){return B().dk(this)}),k.m=(function(e){if(this===e)return!0;if(e instanceof kg){var t=this.bE,n=e.bE;return t===null?n===null:t.m(n)}else return!1}),new j().i(kg,`scala.util.Failure`,{bj:1,bl:1,N:1,d:1,a:1});function jg(e){this.bF=null,this.bF=e}k=jg.prototype=new eh,k.constructor=jg;function Mg(){}Mg.prototype=k,k.gP=(function(){return!1}),k.gQ=(function(){return!0}),k.bT=(function(e,t){try{return t.j(this.bF)}catch(t){var n=t instanceof Vd?t:new $(t);if(Fu().hL(n))return e.j(n);throw n instanceof $?n.V:n}}),k.Y=(function(){return`Success`}),k.W=(function(){return 1}),k.X=(function(e){return e===0?this.bF:V().aN(e)}),k.aa=(function(){return new Cg(this)}),k.r=(function(){return H().bh(this,-889275714,!1)}),k.t=(function(){return B().dk(this)}),k.m=(function(e){return this===e||e instanceof jg&&cu().J(this.bF,e.bF)}),new j().i(jg,`scala.util.Success`,{bk:1,bl:1,N:1,d:1,a:1});var Ng=class e extends Tf{constructor(e){super(),this.bn=null,this.bn=e,Bd(this,`ObserverError: `+kf().ct(e),null,!0,!0)}aa(){return new Xh(this)}r(){return H().bh(this,-889275714,!1)}m(t){if(this===t)return!0;if(t instanceof e){var n=this.bn,r=t.bn;return n===null?r===null:n.m(r)}else return!1}W(){return 1}Y(){return`ObserverError`}X(e){if(e===0)return this.bn;throw Nh(new Ph,``+e)}t(){return`ObserverError: `+this.bn}};new j().i(Ng,`com.raquo.airstream.core.AirstreamError$ObserverError`,{af:1,a6:1,t:1,a:1,d:1,N:1});var Pg=class e extends Tf{constructor(e,t){super(),this.bp=null,this.bo=null,this.bp=e,this.bo=t,Bd(this,`ObserverErrorHandlingError: `+kf().ct(e)+`; cause: `+kf().ct(t),null,!0,!0),this.iS(t)}aa(){return new Xh(this)}r(){return H().bh(this,-889275714,!1)}m(t){if(this===t)return!0;if(t instanceof e){var n=this.bp,r=t.bp;if(n===null?r===null:n.m(r)){var i=this.bo,a=t.bo;return i===null?a===null:i.m(a)}else return!1}else return!1}W(){return 2}Y(){return`ObserverErrorHandlingError`}X(e){if(e===0)return this.bp;if(e===1)return this.bo;throw Nh(new Ph,``+e)}t(){return`ObserverErrorHandlingError: `+this.bp+`; cause: `+this.bo}};new j().i(Pg,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ag:1,a6:1,t:1,a:1,d:1,N:1});var Fg=class e extends Tf{constructor(e,t){super(),this.aQ=null,this.aP=0,this.aQ=e,this.aP=t,Bd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aa(){return new Xh(this)}r(){var e=-889275714;return e=V().e(e,n_(`TransactionDepthExceeded`)),e=V().e(e,V().B(this.aQ)),e=V().e(e,this.aP),V().q(e,2)}m(t){return this===t?!0:t instanceof e&&this.aP===t.aP?this.aQ===t.aQ:!1}W(){return 2}Y(){return`TransactionDepthExceeded`}X(e){if(e===0)return this.aQ;if(e===1)return this.aP;throw Nh(new Ph,``+e)}t(){return`TransactionDepthExceeded: `+this.aQ+`; maxDepth: `+this.aP}};new j().i(Fg,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ah:1,a6:1,t:1,a:1,d:1,N:1});function Ig(e){iv(e)}function Lg(e){this.dT=null,this.dV=null,this.cH=null,this.cG=null,this.dU=null,this.dT=void 0,lh(this),this.cH=e,this.cG=new vv(this.cH,new Km((()=>Ra(this)))),this.dU=this.cG}k=Lg.prototype=new A,k.constructor=Lg;function Rg(){}Rg.prototype=k,k.cv=(function(){return this.dT}),k.cq=(function(){return La(this)}),k.t=(function(){return Ra(this)}),k.ha=(function(){return this.dU}),k.jB=(function(e,t){this.cH=e,av(this.cG,e,t)}),new j().i(Lg,`com.raquo.airstream.state.SourceVar`,{bJ:1,ai:1,aj:1,X:1,V:1,bL:1});function zg(e){this.aW=null,this.aX=null,this.ew=null,this.ex=!1,hm(this,e,Uy())}k=zg.prototype=new _m,k.constructor=zg;function Bg(){}Bg.prototype=k,k.gr=(function(){return this.ex||=(this.ew=this.c(`column`),!0),this.ew}),new j().i(zg,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cd:1,a1:1,v:1,Y:1,Z:1,ch:1});function Vg(e){this.aW=null,this.aX=null,this.ey=null,this.ez=!1,hm(this,e,Uy())}k=Vg.prototype=new _m,k.constructor=Vg;function Hg(){}Hg.prototype=k,k.jW=(function(){return this.ez||=(this.ey=this.c(`wrap`),!0),this.ey}),new j().i(Vg,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{ce:1,a1:1,v:1,Y:1,Z:1,ci:1});function Ug(e,t){var n=e.cV;n===void 0?e.cV=yu().hK(M().C(B().b(new(a_.r()).C([t])))):n.push(t)|0}function Wg(e,t){var n=e.eQ;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].kw()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function Gg(e,t){this.cf=null,this.a8=null,this.cU=null,this.aB=null,this.cW=null,this.G=null,this.eQ=null,this.cV=null,this.cW=e,this.G=t,this.cf=Q(),hd(this),_h(this),this.eQ=void 0,this.cV=void 0}k=Gg.prototype=new A,k.constructor=Gg;function Kg(){}Kg.prototype=k,k.a2=(function(e){rc().bH(e,this,void 0)}),k.cs=(function(){return this.a8}),k.gt=(function(e){this.a8=e}),k.hd=(function(e){xh(this,e)}),k.h6=(function(e){Sh(this,e)}),k.hY=(function(){if(N().gN(this.G)){var e=this.cW;return e instanceof Kf?e.hC():void 0}else return bs().eC}),k.iT=(function(e){var t=this.hY();return t!==void 0&&Xo().iQ(t,e,0)}),k.ji=(function(e){if(e instanceof $u&&this.iT(e.ah)){if(Wg(this,e.ah))throw Sp(new K,"Can not add uncontrolled `"+e.ah+" <-- ???` to element `"+N().gu(this.G)+"` that already has an input controller for `"+e.ah+"` property.");Ug(this,e.ah)}}),k.t=(function(){return`ReactiveHtmlElement(`+(this.G===null?`tag=`+this.cW.dv():this.G.outerHTML)+`)`}),k.aO=(function(){return this.G});var qg=new j().i(Gg,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cV:1,a9:1,R:1,ap:1,aq:1,cT:1});function Jg(e,t){return Object.is(e,t)}function Yg(e){return Pc().dw(e)}var Xg=new j().i(0,`java.lang.Double`,{az:1,U:1,a:1,S:1,M:1,W:1},(e=>typeof e==`number`)),Zg=new j().i(0,`java.lang.Float`,{dm:1,U:1,a:1,S:1,M:1,W:1},(e=>_a(e))),Qg=new j().i(0,`java.lang.Integer`,{dq:1,U:1,a:1,S:1,M:1,W:1},(e=>ga(e)));function $g(e,t){return t instanceof R&&e.i===t.i&&e.k===t.k}function e_(e){return e.i^e.k}var t_=new j().i(0,`java.lang.Long`,{aB:1,U:1,a:1,S:1,M:1,W:1},(e=>e instanceof R));function n_(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function r_(e,t){return e===t}function i_(e,t){var n=kd().jR(t);return e.indexOf(n)|0}var a_=new j().i(0,`java.lang.String`,{aD:1,a:1,S:1,ab:1,M:1,W:1},(e=>typeof e==`string`)),o_=class extends Ph{constructor(){super(),Bd(this,null,null,!0,!0)}};new j().i(o_,`java.lang.StringIndexOutOfBoundsException`,{dB:1,aA:1,T:1,L:1,t:1,a:1});function s_(){}k=s_.prototype=new Yh,k.constructor=s_;function c_(){}c_.prototype=k,k.iF=(function(){throw new Bh(`None.get`)}),k.Y=(function(){return`None`}),k.W=(function(){return 0}),k.X=(function(e){return V().aN(e)}),k.aa=(function(){return new Cg(this)}),k.r=(function(){return 2433880}),k.t=(function(){return`None`}),k.A=(function(){this.iF()}),new j().i(s_,`scala.None$`,{dX:1,aG:1,b:1,N:1,d:1,a:1});var l_;function Q(){return l_||=new s_,l_}function u_(e){this.bx=null,this.bx=e}k=u_.prototype=new Yh,k.constructor=u_;function d_(){}d_.prototype=k,k.A=(function(){return this.bx}),k.Y=(function(){return`Some`}),k.W=(function(){return 1}),k.X=(function(e){return e===0?this.bx:V().aN(e)}),k.aa=(function(){return new Cg(this)}),k.r=(function(){return H().bh(this,-889275714,!1)}),k.t=(function(){return B().dk(this)}),k.m=(function(e){return this===e||e instanceof u_&&cu().J(this.bx,e.bx)}),new j().i(u_,`scala.Some`,{aH:1,aG:1,b:1,N:1,d:1,a:1});function f_(){}k=f_.prototype=new A,k.constructor=f_;function p_(){}p_.prototype=k,k.bb=(function(){return this.bk()}),k.a5=(function(e){Xl(this,e)}),k.bG=(function(e,t,n,r){return Ql(this,e,t,n,r)}),k.D=(function(){return-1});function m_(e,t){return e.N=t,e.n=0,e.H=Tl().bc(e.N),e}function h_(){this.N=null,this.n=0,this.H=0}k=h_.prototype=new zm,k.constructor=h_;function g_(){}g_.prototype=k,k.D=(function(){return this.H-this.n|0}),k.x=(function(){return this.n<this.H}),k.o=(function(){this.n>=Tl().bc(this.N)&&q().z.o();var e=B().ba(this.N,this.n);return this.n=1+this.n|0,e}),k.cr=(function(e){if(e>0){var t=this.n+e|0;if(t<0)var n=this.H;else var r=this.H,n=r<t?r:t;this.n=n}return this}),new j().i(h_,`scala.collection.ArrayOps$ArrayIterator`,{O:1,r:1,s:1,b:1,c:1,a:1});function __(e,t){return t<0?0:t>e.a1?e.a1:t}function v_(e){this.fT=null,this.ai=0,this.a1=0,this.fT=e,this.ai=0,this.a1=e.p()}k=v_.prototype=new zm,k.constructor=v_;function y_(){}y_.prototype=k,k.D=(function(){return this.a1}),k.x=(function(){return this.a1>0}),k.o=(function(){if(this.a1>0){var e=this.fT.u(this.ai);return this.ai=1+this.ai|0,this.a1=-1+this.a1|0,e}else return q().z.o()}),k.cr=(function(e){if(e>0){this.ai=this.ai+e|0;var t=this.a1-e|0;this.a1=t<0?0:t}return this}),k.bZ=(function(e,t){var n=__(this,e),r=__(this,t)-n|0;return this.a1=r<0?0:r,this.ai=this.ai+n|0,this}),new j().i(v_,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{ej:1,r:1,s:1,b:1,c:1,a:1});function b_(e){return e.dg||=(e.dh=new cy(new Sa(0)),!0),e.dh}function x_(e){return e.dg?e.dh:b_(e)}function S_(){this.dh=null,this.ht=null,this.dg=!1,w_=this,this.ht=new Qh(this)}k=S_.prototype=new A,k.constructor=S_;function C_(){}C_.prototype=k,k.iB=(function(e,t){return e instanceof Wv?e:this.hb(Yd().gI(e,t))}),k.hb=(function(e){if(e===null)return null;if(e instanceof Sa)return new cy(e);if(e instanceof Oa)return new iy(e);if(e instanceof ja)return new ey(e);if(e instanceof ka)return new oy(e);if(e instanceof Aa)return new ny(e);if(e instanceof Ta)return new Qv(e);if(e instanceof Ea)return new Xv(e);if(e instanceof Da)return new uy(e);if(e instanceof wa)return new Jv(e);if(yl(e,1))return new fy(e);throw new qh(e)}),k.dr=(function(e,t){return this.iB(e,t)}),new j().i(S_,`scala.collection.immutable.ArraySeq$`,{ey:1,aN:1,aJ:1,aI:1,aK:1,a:1});var w_;function T_(){return w_||=new S_,w_}function E_(){this.hu=null,this.fX=null,O_=this,this.hu=new Qh(this),this.fX=new My(new Sa(0))}k=E_.prototype=new A,k.constructor=E_;function D_(){}D_.prototype=k,k.iC=(function(e,t){return this.j0(Yd().gI(e,t))}),k.j0=(function(e){if(e===null)return null;if(e instanceof Sa)return new My(e);if(e instanceof Oa)return new Oy(e);if(e instanceof ja)return new wy(e);if(e instanceof ka)return new Ay(e);if(e instanceof Aa)return new Ey(e);if(e instanceof Ta)return new Sy(e);if(e instanceof Ea)return new by(e);if(e instanceof Da)return new Py(e);if(e instanceof wa)return new vy(e);if(yl(e,1))return new Iy(e);throw new qh(e)}),k.dr=(function(e,t){return this.iC(e,t)}),new j().i(E_,`scala.collection.mutable.ArraySeq$`,{eC:1,aN:1,aJ:1,aI:1,aK:1,a:1});var O_;function k_(){return O_||=new E_,O_}function A_(e){this.aW=null,this.aX=null,this.eu=null,this.ev=!1,hm(this,e,Uy())}k=A_.prototype=new _m,k.constructor=A_;function j_(){}j_.prototype=k,k.gG=(function(){return this.ev||=(this.eu=this.c(`flex`),!0),this.eu}),new j().i(A_,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cc:1,a1:1,v:1,Y:1,Z:1,cj:1,cg:1});function M_(e){this.aW=null,this.aX=null,this.eA=null,this.eB=!1,hm(this,e,Uy())}k=M_.prototype=new _m,k.constructor=M_;function N_(){}N_.prototype=k,k.h3=(function(){return this.eB||=(this.eA=Wu(this),!0),this.eA}),new j().i(M_,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cf:1,a1:1,v:1,Y:1,Z:1,ck:1,cl:1});function P_(){}k=P_.prototype=new Dh,k.constructor=P_;function F_(){}F_.prototype=k;function I_(e){this.N=null,this.n=0,this.H=0,this.d7=null,this.d7=e,m_(this,e)}k=I_.prototype=new g_,k.constructor=I_;function L_(){}L_.prototype=k,k.j9=(function(){this.n>=this.d7.a.length&&q().z.o();var e=this.d7.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.j9()}),new j().i(I_,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{e6:1,O:1,r:1,s:1,b:1,c:1,a:1});function R_(e){this.N=null,this.n=0,this.H=0,this.d8=null,this.d8=e,m_(this,e)}k=R_.prototype=new g_,k.constructor=R_;function z_(){}z_.prototype=k,k.ja=(function(){this.n>=this.d8.a.length&&q().z.o();var e=this.d8.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return va(this.ja())}),new j().i(R_,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{e7:1,O:1,r:1,s:1,b:1,c:1,a:1});function B_(e){this.N=null,this.n=0,this.H=0,this.d9=null,this.d9=e,m_(this,e)}k=B_.prototype=new g_,k.constructor=B_;function V_(){}V_.prototype=k,k.jb=(function(){this.n>=this.d9.a.length&&q().z.o();var e=this.d9.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.jb()}),new j().i(B_,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{e8:1,O:1,r:1,s:1,b:1,c:1,a:1});function H_(e){this.N=null,this.n=0,this.H=0,this.da=null,this.da=e,m_(this,e)}k=H_.prototype=new g_,k.constructor=H_;function U_(){}U_.prototype=k,k.jc=(function(){this.n>=this.da.a.length&&q().z.o();var e=this.da.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.jc()}),new j().i(H_,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{e9:1,O:1,r:1,s:1,b:1,c:1,a:1});function W_(e){this.N=null,this.n=0,this.H=0,this.db=null,this.db=e,m_(this,e)}k=W_.prototype=new g_,k.constructor=W_;function G_(){}G_.prototype=k,k.jd=(function(){this.n>=this.db.a.length&&q().z.o();var e=this.db.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.jd()}),new j().i(W_,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{ea:1,O:1,r:1,s:1,b:1,c:1,a:1});function K_(e){this.N=null,this.n=0,this.H=0,this.dc=null,this.dc=e,m_(this,e)}k=K_.prototype=new g_,k.constructor=K_;function q_(){}q_.prototype=k,k.je=(function(){this.n>=this.dc.a.length&&q().z.o();var e=this.dc.a[this.n],t=e.i,n=e.k;return this.n=1+this.n|0,new R(t,n)}),k.o=(function(){return this.je()}),new j().i(K_,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{eb:1,O:1,r:1,s:1,b:1,c:1,a:1});function J_(e){this.N=null,this.n=0,this.H=0,this.dd=null,this.dd=e,m_(this,e)}k=J_.prototype=new g_,k.constructor=J_;function Y_(){}Y_.prototype=k,k.jf=(function(){this.n>=this.dd.a.length&&q().z.o();var e=this.dd.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.jf()}),new j().i(J_,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{ec:1,O:1,r:1,s:1,b:1,c:1,a:1});function X_(e){this.N=null,this.n=0,this.H=0,this.fS=null,this.fS=e,m_(this,e)}k=X_.prototype=new g_,k.constructor=X_;function Z_(){}Z_.prototype=k,k.jg=(function(){this.n>=this.fS.a.length&&q().z.o(),this.n=1+this.n|0}),k.o=(function(){this.jg()}),new j().i(X_,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{ed:1,O:1,r:1,s:1,b:1,c:1,a:1});function Q_(e){this.N=null,this.n=0,this.H=0,this.de=null,this.de=e,m_(this,e)}k=Q_.prototype=new g_,k.constructor=Q_;function $_(){}$_.prototype=k,k.jh=(function(){this.n>=this.de.a.length&&q().z.o();var e=this.de.a[this.n];return this.n=1+this.n|0,e}),k.o=(function(){return this.jh()}),new j().i(Q_,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{ee:1,O:1,r:1,s:1,b:1,c:1,a:1});function ev(e){return e.bb()+`(<not computed>)`}function tv(){}k=tv.prototype=new A,k.constructor=tv;function nv(){}nv.prototype=k;var $=class e extends jm{constructor(e){super(),this.V=null,this.V=e,Bd(this,null,null,!0,!0)}bU(){return aa(this.V)}Y(){return`JavaScriptException`}W(){return 1}X(e){return e===0?this.V:V().aN(e)}aa(){return new Cg(this)}r(){return H().bh(this,-889275714,!1)}m(t){return this===t||t instanceof e&&cu().J(this.V,t.V)}};new j().i($,`scala.scalajs.js.JavaScriptException`,{bi:1,T:1,L:1,t:1,a:1,N:1,d:1});function rv(e,t){e.c7!==void 0&&Xa().gV(),e.c7=t}function iv(e){var t=e.c7;if(t===void 0){Xa().gV();var n=iv(e);rv(e,n);var r=n}else var r=t;return r}function av(e,t,n){rv(e,t);var r=t.gP(),i=!1;i=!1,e.c6=!1;for(var a=e.bq,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bW(t),r&&!i&&(i=!0)}for(var c=e.cI,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.c6=!0;var u=e.c8;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].ac(),d=1+d|0;u.length=0}r&&!i&&t.bT(new Z((e=>{kf().Z(e)})),new Z((e=>void 0)))}function ov(e,t){typeof console<`u`&&(e.fH&&console.error?console.error(t):console.log(t))}function sv(e){this.fH=!1,this.bu=null,this.fH=e,new Fh,this.bu=``}k=sv.prototype=new F_,k.constructor=sv;function cv(){}cv.prototype=k,k.iX=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bu=``+this.bu+t,t=``;else{var r=this.bu,i=t;ov(this,``+r+i.substring(0,n)),this.bu=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new j().i(sv,`java.lang.JSConsoleBasedPrintStream`,{ds:1,dg:1,df:1,av:1,at:1,ax:1,au:1,aw:1});function lv(e,t,n){for(;;)if(t<=0||n.l())return n;else{var r=-1+t|0,i=n.Q();t=r,n=i}}function uv(){this.di=null}k=uv.prototype=new nv,k.constructor=uv;function dv(){}dv.prototype=k,k.t=(function(){return this.di}),k.m=(function(e){return this===e}),k.r=(function(){return pa(this)});function fv(){}k=fv.prototype=new p_,k.constructor=fv;function pv(){}pv.prototype=k,k.t=(function(){return ev(this)});function mv(){this.di=null,this.di=`Any`}k=mv.prototype=new dv,k.constructor=mv;function hv(){}hv.prototype=k,k.jz=(function(){return Ma.l()}),k.j7=(function(e){return new Sa(e)}),new j().i(mv,`scala.reflect.ManifestFactory$AnyManifest$`,{eQ:1,eS:1,eR:1,eP:1,eO:1,eN:1,eT:1,a:1,d:1});var gv;function _v(){return gv||=new mv,gv}function vv(e,t){this.dX=null,this.c6=!1,this.c8=null,this.bq=null,this.cI=null,this.c9=!1,this.c7=null,this.dY=null,this.dY=t,this.dX=void 0,Af(this),th(this),this.c7=void 0,rv(this,e)}k=vv.prototype=new A,k.constructor=vv;function yv(){}yv.prototype=k,k.cv=(function(){return this.dX}),k.t=(function(){return Ra(this)}),k.m=(function(e){return this===e}),k.r=(function(){return pa(this)}),k.ha=(function(){return this}),k.cq=(function(){return this.dY.ac()+`.signal`}),new j().i(vv,`com.raquo.airstream.state.VarSignal`,{bO:1,ai:1,V:1,bn:1,bp:1,aj:1,bu:1,bA:1,bB:1,bK:1});function bv(e,t){return e===t?!0:xv(t)&&t.gp(e)?e.dz(t):!1}function xv(e){return!!(e&&e.$classData&&e.$classData.n.g)}function Sv(){}k=Sv.prototype=new p_,k.constructor=Sv;function Cv(){}Cv.prototype=k,k.gp=(function(e){return!0}),k.m=(function(e){return bv(this,e)}),k.r=(function(){return H().jA(this)}),k.t=(function(){return eg(this)}),k.gO=(function(e){return Um(this,e)}),k.l=(function(){return Wm(this)}),k.dz=(function(e){return Gm(this,e)}),k.bd=(function(e){return this.gO(e|0)});function wv(){}k=wv.prototype=new pv,k.constructor=wv;function Tv(){}Tv.prototype=k;function Ev(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Dv(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function Ov(e,t){return e.bA=t,e}function kv(){this.bA=null}k=kv.prototype=new Tv,k.constructor=kv;function Av(){}Av.prototype=k,k.u=(function(e){return this.bA.u(e)}),k.p=(function(){return this.bA.p()}),k.l=(function(){return this.bA.l()});function jv(){this.eo=null,this.ep=!1,this.e8=null,this.e9=!1,this.e4=null,this.e5=!1,this.em=null,this.en=!1,this.es=null,this.et=!1,this.ei=null,this.ej=!1,this.eg=null,this.eh=!1,this.ek=null,this.el=!1,this.e6=null,this.e7=!1,this.ea=null,this.eb=!1,this.ec=null,this.ed=!1,this.ee=null,this.ef=!1,this.hh=null,this.e3=null,this.hg=null,this.eq=null,this.er=!1,ps(this),cs(this),os(this),ss(this)}k=jv.prototype=new A,k.constructor=jv;function Mv(){}Mv.prototype=k,k.h8=(function(){return this.ep||=(this.eo=gd(new _d,`small`,!1),!0),this.eo}),k.gw=(function(){return this.e9||=(this.e8=gd(new _d,`div`,!1),!0),this.e8}),k.hT=(function(){return this.e5||=(this.e4=new $u(`checked`,P().cL),!0),this.e4}),k.bi=(function(){return this.en||=(this.em=new $u(`selected`,P().cL),!0),this.em}),k.hc=(function(){return this.et||=(this.es=new $u(`value`,P().a0),!0),this.es}),k.jk=(function(){return this.ej||=(this.ei=new qu(`click`),!0),this.ei}),k.jj=(function(){return this.eh||=(this.eg=new qu(`change`),!0),this.eg}),k.bV=(function(){return this.el||=(this.ek=new qu(`input`),!0),this.ek}),k.gv=(function(){return this.e7||=(this.e6=new A_(`display`),!0),this.e6}),k.gH=(function(){return this.eb||=(this.ea=new zg(`flex-direction`),!0),this.ea}),k.iy=(function(){return this.ed||=(this.ec=new Vg(`flex-wrap`),!0),this.ec}),k.gL=(function(){return this.ef||=(this.ee=new M_(`gap`),!0),this.ee}),k.jL=(function(){return this.er||=(this.eq=new um(this),!0),this.eq}),new j().i(jv,`com.raquo.laminar.api.package$$anon$1`,{c1:1,cm:1,c5:1,ca:1,c9:1,cb:1,c7:1,bZ:1,bV:1,bY:1,al:1,am:1,ak:1,bW:1});function Nv(e){this.bA=null,Ov(this,e)}k=Nv.prototype=new Av,k.constructor=Nv;function Pv(){}Pv.prototype=k,k.s=(function(){return new v_(this)}),k.bk=(function(){return`IndexedSeqView`}),k.au=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),k.D=(function(){return this.p()}),new j().i(Nv,`scala.collection.IndexedSeqView$Id`,{ei:1,es:1,e3:1,e4:1,h:1,i:1,b:1,k:1,c:1,j:1,ew:1,a:1,er:1,l:1,eh:1,o:1});function Fv(){}k=Fv.prototype=new Cv,k.constructor=Fv;function Iv(){}Iv.prototype=k;function Lv(e,t){return!zv(t)||e.p()===t.p()}function Rv(e,t){if(zv(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.ge(),o=t.ge(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=cu().J(e.u(i),t.u(i)),i=1+i|0;if(i<n&&r)for(var p=e.s().cr(i),m=t.s().cr(i);r&&p.x();)r=cu().J(p.o(),m.o())}return r}else return Gm(e,t)}function zv(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Bv(){}k=Bv.prototype=new Cv,k.constructor=Bv;function Vv(){}Vv.prototype=k;function Hv(){}k=Hv.prototype=new Vv,k.constructor=Hv;function Uv(){}Uv.prototype=k,k.ga=(function(e){return lf(this,e)});function Wv(){}k=Wv.prototype=new Iv,k.constructor=Wv;function Gv(){}Gv.prototype=k,k.gp=(function(e){return Lv(this,e)}),k.dz=(function(e){return Rv(this,e)}),k.bk=(function(){return`IndexedSeq`}),k.au=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),k.D=(function(){return this.p()}),k.j1=(function(e){for(var t=new Sa(this.p()),n=0;n<t.a.length;)t.a[n]=e.j(this.u(n)),n=1+n|0;return T_().hb(t)}),k.bb=(function(){return`ArraySeq`}),k.ge=(function(){return 2147483647}),k.gS=(function(e){return this.j1(e)});function Kv(){}k=Kv.prototype=new Vv,k.constructor=Kv;function qv(){}qv.prototype=k,k.bk=(function(){return`IndexedSeq`}),k.au=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),k.D=(function(){return this.p()}),k.bb=(function(){return`ArraySeq`}),k.m=(function(e){return e instanceof Kv&&Tl().bc(this.a3())!==Tl().bc(e.a3())?!1:bv(this,e)});function Jv(e){this.aD=null,this.aD=e}k=Jv.prototype=new Gv,k.constructor=Jv;function Yv(){}Yv.prototype=k,k.p=(function(){return this.aD.a.length}),k.r=(function(){var e=H();return e.go(this.aD,e.y)}),k.m=(function(e){return e instanceof Jv?kl().gE(this.aD,e.aD):bv(this,e)}),k.s=(function(){return new Q_(this.aD)}),k.bR=(function(e){return this.aD.a[e]}),k.j=(function(e){return this.bR(e|0)}),k.u=(function(e){return this.bR(e)}),new j().i(Jv,`scala.collection.immutable.ArraySeq$ofBoolean`,{aQ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Xv(e){this.aE=null,this.aE=e}k=Xv.prototype=new Gv,k.constructor=Xv;function Zv(){}Zv.prototype=k,k.p=(function(){return this.aE.a.length}),k.bI=(function(e){return this.aE.a[e]}),k.r=(function(){var e=H();return e.gg(this.aE,e.y)}),k.m=(function(e){return e instanceof Xv?kl().gx(this.aE,e.aE):bv(this,e)}),k.s=(function(){return new I_(this.aE)}),k.j=(function(e){return this.bI(e|0)}),k.u=(function(e){return this.bI(e)}),new j().i(Xv,`scala.collection.immutable.ArraySeq$ofByte`,{aR:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Qv(e){this.al=null,this.al=e}k=Qv.prototype=new Gv,k.constructor=Qv;function $v(){}$v.prototype=k,k.p=(function(){return this.al.a.length}),k.bJ=(function(e){return this.al.a[e]}),k.r=(function(){var e=H();return e.gh(this.al,e.y)}),k.m=(function(e){return e instanceof Qv?kl().gy(this.al,e.al):bv(this,e)}),k.s=(function(){return new R_(this.al)}),k.bG=(function(e,t,n,r){return new Sy(this.al).bG(e,t,n,r)}),k.j=(function(e){return va(this.bJ(e|0))}),k.u=(function(e){return va(this.bJ(e))}),new j().i(Qv,`scala.collection.immutable.ArraySeq$ofChar`,{aS:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function ey(e){this.aF=null,this.aF=e}k=ey.prototype=new Gv,k.constructor=ey;function ty(){}ty.prototype=k,k.p=(function(){return this.aF.a.length}),k.r=(function(){var e=H();return e.gi(this.aF,e.y)}),k.m=(function(e){return e instanceof ey?kl().gz(this.aF,e.aF):bv(this,e)}),k.s=(function(){return new B_(this.aF)}),k.bM=(function(e){return this.aF.a[e]}),k.j=(function(e){return this.bM(e|0)}),k.u=(function(e){return this.bM(e)}),new j().i(ey,`scala.collection.immutable.ArraySeq$ofDouble`,{aT:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function ny(e){this.aG=null,this.aG=e}k=ny.prototype=new Gv,k.constructor=ny;function ry(){}ry.prototype=k,k.p=(function(){return this.aG.a.length}),k.r=(function(){var e=H();return e.gj(this.aG,e.y)}),k.m=(function(e){return e instanceof ny?kl().gA(this.aG,e.aG):bv(this,e)}),k.s=(function(){return new H_(this.aG)}),k.bN=(function(e){return this.aG.a[e]}),k.j=(function(e){return this.bN(e|0)}),k.u=(function(e){return this.bN(e)}),new j().i(ny,`scala.collection.immutable.ArraySeq$ofFloat`,{aU:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function iy(e){this.aH=null,this.aH=e}k=iy.prototype=new Gv,k.constructor=iy;function ay(){}ay.prototype=k,k.p=(function(){return this.aH.a.length}),k.r=(function(){var e=H();return e.gk(this.aH,e.y)}),k.m=(function(e){return e instanceof iy?kl().gB(this.aH,e.aH):bv(this,e)}),k.s=(function(){return new W_(this.aH)}),k.bO=(function(e){return this.aH.a[e]}),k.j=(function(e){return this.bO(e|0)}),k.u=(function(e){return this.bO(e)}),new j().i(iy,`scala.collection.immutable.ArraySeq$ofInt`,{aV:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function oy(e){this.aI=null,this.aI=e}k=oy.prototype=new Gv,k.constructor=oy;function sy(){}sy.prototype=k,k.p=(function(){return this.aI.a.length}),k.r=(function(){var e=H();return e.gl(this.aI,e.y)}),k.m=(function(e){return e instanceof oy?kl().gC(this.aI,e.aI):bv(this,e)}),k.s=(function(){return new K_(this.aI)}),k.bP=(function(e){return this.aI.a[e]}),k.j=(function(e){return this.bP(e|0)}),k.u=(function(e){return this.bP(e)}),new j().i(oy,`scala.collection.immutable.ArraySeq$ofLong`,{aW:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function cy(e){this.aJ=null,this.aJ=e}k=cy.prototype=new Gv,k.constructor=cy;function ly(){}ly.prototype=k,k.p=(function(){return this.aJ.a.length}),k.u=(function(e){return this.aJ.a[e]}),k.r=(function(){var e=H();return e.gf(this.aJ,e.y)}),k.m=(function(e){return e instanceof cy?Yd().gF(this.aJ,e.aJ):bv(this,e)}),k.s=(function(){return m_(new h_,this.aJ)}),k.j=(function(e){return this.u(e|0)}),new j().i(cy,`scala.collection.immutable.ArraySeq$ofRef`,{aX:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function uy(e){this.aK=null,this.aK=e}k=uy.prototype=new Gv,k.constructor=uy;function dy(){}dy.prototype=k,k.p=(function(){return this.aK.a.length}),k.bK=(function(e){return this.aK.a[e]}),k.r=(function(){var e=H();return e.gm(this.aK,e.y)}),k.m=(function(e){return e instanceof uy?kl().gD(this.aK,e.aK):bv(this,e)}),k.s=(function(){return new J_(this.aK)}),k.j=(function(e){return this.bK(e|0)}),k.u=(function(e){return this.bK(e)}),new j().i(uy,`scala.collection.immutable.ArraySeq$ofShort`,{aY:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function fy(e){this.b8=null,this.b8=e}k=fy.prototype=new Gv,k.constructor=fy;function py(){}py.prototype=k,k.p=(function(){return this.b8.a.length}),k.r=(function(){var e=H();return e.gn(this.b8,e.y)}),k.m=(function(e){return e instanceof fy?this.b8.a.length===e.b8.a.length:bv(this,e)}),k.s=(function(){return new X_(this.b8)}),k.bQ=(function(e){}),k.j=(function(e){this.bQ(e|0)}),k.u=(function(e){this.bQ(e)}),new j().i(fy,`scala.collection.immutable.ArraySeq$ofUnit`,{aZ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function my(e,t,n,r){for(;;)if(t===r)return n.l()?0:1;else if(n.l())return-1;else{var i=1+t|0,a=n.Q();t=i,n=a}}function hy(e,t,n){for(;;)if(t===n)return!0;else{var r=t.l(),i=n.l();if(!(r||i)&&cu().J(t.a6(),n.a6())){var a=t.Q(),o=n.Q();t=a,n=o}else return r&&i}}function gy(){}k=gy.prototype=new Iv,k.constructor=gy;function _y(){}_y.prototype=k,k.s=(function(){return new _g(this)}),k.bk=(function(){return`LinearSeq`}),k.gO=(function(e){return pg(this,e)}),k.u=(function(e){return mg(this,e)}),k.dz=(function(e){return hg(this,e)}),k.l=(function(){return this===Uy()}),k.j2=(function(e){if(this===Uy())return Uy();for(var t=new Ry(e.j(this.a6()),Uy()),n=t,r=this.Q();r!==Uy();){var i=new Ry(e.j(r.a6()),Uy());n.cm=i,n=i,r=r.Q()}return t}),k.a5=(function(e){for(var t=this;!t.l();)e.j(t.a6()),t=t.Q()}),k.p=(function(){for(var e=this,t=0;!e.l();)t=1+t|0,e=e.Q();return t}),k.au=(function(e){return e<0?1:my(this,0,this,e)}),k.bb=(function(){return`List`}),k.m=(function(e){return e instanceof gy?hy(this,this,e):bv(this,e)}),k.j=(function(e){return mg(this,e|0)}),k.bd=(function(e){return pg(this,e|0)}),k.i8=(function(e){return lv(this,e,this)}),k.gS=(function(e){return this.j2(e)});function vy(e){this.am=null,this.am=e}k=vy.prototype=new qv,k.constructor=vy;function yy(){}yy.prototype=k,k.p=(function(){return this.am.a.length}),k.r=(function(){var e=H();return e.go(this.am,e.y)}),k.m=(function(e){return e instanceof vy?kl().gE(this.am,e.am):Kv.prototype.m.call(this,e)}),k.s=(function(){return new Q_(this.am)}),k.bR=(function(e){return this.am.a[e]}),k.j=(function(e){return this.bR(e|0)}),k.u=(function(e){return this.bR(e)}),k.a3=(function(){return this.am}),new j().i(vy,`scala.collection.mutable.ArraySeq$ofBoolean`,{b2:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function by(e){this.an=null,this.an=e}k=by.prototype=new qv,k.constructor=by;function xy(){}xy.prototype=k,k.p=(function(){return this.an.a.length}),k.bI=(function(e){return this.an.a[e]}),k.r=(function(){var e=H();return e.gg(this.an,e.y)}),k.m=(function(e){return e instanceof by?kl().gx(this.an,e.an):Kv.prototype.m.call(this,e)}),k.s=(function(){return new I_(this.an)}),k.j=(function(e){return this.bI(e|0)}),k.u=(function(e){return this.bI(e)}),k.a3=(function(){return this.an}),new j().i(by,`scala.collection.mutable.ArraySeq$ofByte`,{b3:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Sy(e){this.U=null,this.U=e}k=Sy.prototype=new qv,k.constructor=Sy;function Cy(){}Cy.prototype=k,k.p=(function(){return this.U.a.length}),k.bJ=(function(e){return this.U.a[e]}),k.r=(function(){var e=H();return e.gh(this.U,e.y)}),k.m=(function(e){return e instanceof Sy?kl().gy(this.U,e.U):Kv.prototype.m.call(this,e)}),k.s=(function(){return new R_(this.U)}),k.bG=(function(e,t,n,r){var i=e.P;t.length!==0&&(i.v=``+i.v+t);var a=this.U.a.length;if(a!==0)if(n===``)i.hF(this.U);else{i.p();var o=this.U.a[0],s=``+la(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.U.a[c],u=``+la(l);i.v+=u,c=1+c|0}}return r.length!==0&&(i.v=``+i.v+r),e}),k.j=(function(e){return va(this.bJ(e|0))}),k.u=(function(e){return va(this.bJ(e))}),k.a3=(function(){return this.U}),new j().i(Sy,`scala.collection.mutable.ArraySeq$ofChar`,{b4:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function wy(e){this.ao=null,this.ao=e}k=wy.prototype=new qv,k.constructor=wy;function Ty(){}Ty.prototype=k,k.p=(function(){return this.ao.a.length}),k.r=(function(){var e=H();return e.gi(this.ao,e.y)}),k.m=(function(e){return e instanceof wy?kl().gz(this.ao,e.ao):Kv.prototype.m.call(this,e)}),k.s=(function(){return new B_(this.ao)}),k.bM=(function(e){return this.ao.a[e]}),k.j=(function(e){return this.bM(e|0)}),k.u=(function(e){return this.bM(e)}),k.a3=(function(){return this.ao}),new j().i(wy,`scala.collection.mutable.ArraySeq$ofDouble`,{b5:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Ey(e){this.ap=null,this.ap=e}k=Ey.prototype=new qv,k.constructor=Ey;function Dy(){}Dy.prototype=k,k.p=(function(){return this.ap.a.length}),k.r=(function(){var e=H();return e.gj(this.ap,e.y)}),k.m=(function(e){return e instanceof Ey?kl().gA(this.ap,e.ap):Kv.prototype.m.call(this,e)}),k.s=(function(){return new H_(this.ap)}),k.bN=(function(e){return this.ap.a[e]}),k.j=(function(e){return this.bN(e|0)}),k.u=(function(e){return this.bN(e)}),k.a3=(function(){return this.ap}),new j().i(Ey,`scala.collection.mutable.ArraySeq$ofFloat`,{b6:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Oy(e){this.aq=null,this.aq=e}k=Oy.prototype=new qv,k.constructor=Oy;function ky(){}ky.prototype=k,k.p=(function(){return this.aq.a.length}),k.r=(function(){var e=H();return e.gk(this.aq,e.y)}),k.m=(function(e){return e instanceof Oy?kl().gB(this.aq,e.aq):Kv.prototype.m.call(this,e)}),k.s=(function(){return new W_(this.aq)}),k.bO=(function(e){return this.aq.a[e]}),k.j=(function(e){return this.bO(e|0)}),k.u=(function(e){return this.bO(e)}),k.a3=(function(){return this.aq}),new j().i(Oy,`scala.collection.mutable.ArraySeq$ofInt`,{b7:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Ay(e){this.ar=null,this.ar=e}k=Ay.prototype=new qv,k.constructor=Ay;function jy(){}jy.prototype=k,k.p=(function(){return this.ar.a.length}),k.r=(function(){var e=H();return e.gl(this.ar,e.y)}),k.m=(function(e){return e instanceof Ay?kl().gC(this.ar,e.ar):Kv.prototype.m.call(this,e)}),k.s=(function(){return new K_(this.ar)}),k.bP=(function(e){return this.ar.a[e]}),k.j=(function(e){return this.bP(e|0)}),k.u=(function(e){return this.bP(e)}),k.a3=(function(){return this.ar}),new j().i(Ay,`scala.collection.mutable.ArraySeq$ofLong`,{b8:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function My(e){this.as=null,this.as=e}k=My.prototype=new qv,k.constructor=My;function Ny(){}Ny.prototype=k,k.p=(function(){return this.as.a.length}),k.u=(function(e){return this.as.a[e]}),k.r=(function(){var e=H();return e.gf(this.as,e.y)}),k.m=(function(e){return e instanceof My?Yd().gF(this.as,e.as):Kv.prototype.m.call(this,e)}),k.s=(function(){return m_(new h_,this.as)}),k.j=(function(e){return this.u(e|0)}),k.a3=(function(){return this.as}),new j().i(My,`scala.collection.mutable.ArraySeq$ofRef`,{b9:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Py(e){this.at=null,this.at=e}k=Py.prototype=new qv,k.constructor=Py;function Fy(){}Fy.prototype=k,k.p=(function(){return this.at.a.length}),k.bK=(function(e){return this.at.a[e]}),k.r=(function(){var e=H();return e.gm(this.at,e.y)}),k.m=(function(e){return e instanceof Py?kl().gD(this.at,e.at):Kv.prototype.m.call(this,e)}),k.s=(function(){return new J_(this.at)}),k.j=(function(e){return this.bK(e|0)}),k.u=(function(e){return this.bK(e)}),k.a3=(function(){return this.at}),new j().i(Py,`scala.collection.mutable.ArraySeq$ofShort`,{ba:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Iy(e){this.aL=null,this.aL=e}k=Iy.prototype=new qv,k.constructor=Iy;function Ly(){}Ly.prototype=k,k.p=(function(){return this.aL.a.length}),k.r=(function(){var e=H();return e.gn(this.aL,e.y)}),k.m=(function(e){return e instanceof Iy?this.aL.a.length===e.aL.a.length:Kv.prototype.m.call(this,e)}),k.s=(function(){return new X_(this.aL)}),k.bQ=(function(e){}),k.j=(function(e){this.bQ(e|0)}),k.u=(function(e){this.bQ(e)}),k.a3=(function(){return this.aL}),new j().i(Iy,`scala.collection.mutable.ArraySeq$ofUnit`,{bb:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Ry(e,t){this.df=null,this.cm=null,this.df=e,this.cm=t}k=Ry.prototype=new _y,k.constructor=Ry;function zy(){}zy.prototype=k,k.a6=(function(){return this.df}),k.Y=(function(){return`::`}),k.W=(function(){return 2}),k.X=(function(e){switch(e){case 0:return this.df;case 1:return this.cm;default:return V().aN(e)}}),k.aa=(function(){return new Cg(this)}),k.Q=(function(){return this.cm}),new j().i(Ry,`scala.collection.immutable.$colon$colon`,{ex:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b0:1,a5:1,aM:1,b1:1,aO:1,q:1,p:1,B:1,aP:1,a:1,N:1});function By(){}k=By.prototype=new _y,k.constructor=By;function Vy(){}Vy.prototype=k,k.iN=(function(){throw new Bh(`head of empty list`)}),k.jO=(function(){throw new zh(`tail of empty list`)}),k.D=(function(){return 0}),k.s=(function(){return q().z}),k.Y=(function(){return`Nil`}),k.W=(function(){return 0}),k.X=(function(e){return V().aN(e)}),k.aa=(function(){return new Cg(this)}),k.Q=(function(){this.jO()}),k.a6=(function(){this.iN()}),new j().i(By,`scala.collection.immutable.Nil$`,{eA:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b0:1,a5:1,aM:1,b1:1,aO:1,q:1,p:1,B:1,aP:1,a:1,N:1});var Hy;function Uy(){return Hy||=new By,Hy}function Wy(e,t){return e.P=t,e}function Gy(e){return Wy(e,new Mm),e}function Ky(){this.P=null}k=Ky.prototype=new Vv,k.constructor=Ky;function qy(){}qy.prototype=k,k.bk=(function(){return`IndexedSeq`}),k.s=(function(){return new v_(new Nv(this))}),k.au=(function(e){var t=this.P.p();return t===e?0:t<e?-1:1}),k.ga=(function(e){return lf(this,e)}),k.p=(function(){return this.P.p()}),k.D=(function(){return this.P.p()}),k.hA=(function(e){var t=this.P,n=``+la(e);return t.v+=n,this}),k.t=(function(){return this.P.v}),k.l=(function(){return this.P.p()===0}),k.h4=(function(){return this.P.v}),k.dm=(function(e){return this.hA(ya(e))}),k.j=(function(e){var t=e|0;return va(this.P.gq(t))}),k.u=(function(e){return va(this.P.gq(e))}),new j().i(Ky,`scala.collection.mutable.StringBuilder`,{eI:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,eG:1,bc:1,be:1,bd:1,E:1,n:1,o:1,F:1,ab:1,a:1});function Jy(e,t){return e.aM=t,e}function Yy(e){return Jy(e,[]),e}function Xy(){this.aM=null}k=Xy.prototype=new Uv,k.constructor=Xy;function Zy(){}Zy.prototype=k,k.bk=(function(){return`IndexedSeq`}),k.s=(function(){return new v_(new Nv(this))}),k.au=(function(e){var t=this.aM.length|0;return t===e?0:t<e?-1:1}),k.u=(function(e){return this.aM[e]}),k.p=(function(){return this.aM.length|0}),k.D=(function(){return this.aM.length|0}),k.bb=(function(){return`WrappedArray`}),k.h4=(function(){return this}),k.dm=(function(e){return this.aM.push(e),this}),k.j=(function(e){var t=e|0;return this.aM[t]}),new j().i(Xy,`scala.scalajs.js.WrappedArray`,{f9:1,eB:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,eD:1,be:1,bd:1,eH:1,q:1,p:1,E:1,n:1,o:1,F:1,eF:1,bc:1,a:1}),$i=new R(0,0),Fa.z=$i,Ec(new(a_.r()).C([]));