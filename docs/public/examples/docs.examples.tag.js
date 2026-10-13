var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=/* @__PURE__ */ new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,h=globalThis,re=h.trustedTypes,ie=re?re.emptyScript:``,ae=h.reactiveElementPolyfillSupport,oe=(e,t)=>e,se={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!f(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),h.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(oe(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ue.elementStyles=[],ue.shadowRootOptions={mode:`open`},ue[oe(`elementProperties`)]=/* @__PURE__ */ new Map,ue[oe(`finalized`)]=/* @__PURE__ */ new Map,ae?.({ReactiveElement:ue}),(h.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const de=globalThis,fe=e=>e,pe=de.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,ge=`lit$${Math.random().toFixed(9).slice(2)}$`,_e=`?`+ge,ve=`<${_e}>`,ye=document,be=()=>ye.createComment(``),xe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Se=Array.isArray,Ce=e=>Se(e)||typeof e?.[Symbol.iterator]==`function`,we=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,De=/>/g,Oe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ke=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,Me=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),Pe=/* @__PURE__ */ new WeakMap,Fe=ye.createTreeWalker(ye,129);function Ie(e,t){if(!Se(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}const Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Te;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Te?c[1]===`!--`?o=Ee:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Oe):(je.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Oe):o=De:o===Oe?c[0]===`>`?(o=i??Te,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Oe:c[3]===`"`?Ae:ke):o===Ae||o===ke?o=Oe:o===Ee||o===De?o=Te:(o=Oe,i=void 0);let d=o===Oe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Te?n+ve:l>=0?(r.push(s),n.slice(0,l)+he+n.slice(l)+ge+d):n+ge+(l===-2?t:d)}return[Ie(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),Fe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(ge),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ue:r[1]===`?`?We:r[1]===`@`?Ge:He}),i.removeAttribute(e)}else e.startsWith(ge)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(je.test(i.tagName)){let e=i.textContent.split(ge),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],be()),Fe.nextNode(),c.push({type:2,index:++a});i.append(e[t],be())}}}else if(i.nodeType===8){if(i.data===_e)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ge,e+1))!==-1;)c.push({type:7,index:a}),e+=ge.length-1}}a++}}static createElement(e,t){let n=ye.createElement(`template`);return n.innerHTML=e,n}};function ze(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=xe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ze(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ye).importNode(t,!0);Fe.currentNode=r;let i=Fe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Fe.nextNode(),a++)}return Fe.currentNode=ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),xe(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(Ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new Re(e)),t}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(be()),this.O(be()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=fe(e).nextSibling;fe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ze(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ze(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!xe(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ue=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},We=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Ge=class extends He{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??g)===Ne)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}};const qe={M:he,P:ge,A:_e,C:1,L:Le,R:Be,D:Ce,V:ze,I:Ve,H:He,N:We,U:Ge,B:Ue,F:Ke},Je=de.litHtmlPolyfillSupport;Je?.(Re,Ve),(de.litHtmlVersions??=[]).push(`3.3.3`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ve(t.insertBefore(be(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ze=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=l`
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
`,et={small:`s`,medium:`m`,large:`l`},tt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function nt(e,t){t in et&&!tt.has(`${e}:${t}`)&&(tt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${et[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rt=l`
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
`,it=l`
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
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function at(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=e=>{throw TypeError(e)},_=(e,t,n,r)=>{for(var i=r>1?void 0:r?st(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ot(t,n,i),i},lt=(e,t,n)=>t.has(e)||ct(`Cannot `+n),ut=(e,t,n)=>(lt(e,t,`read from private field`),n?n.call(e):t.get(e)),dt=(e,t,n)=>t.has(e)?ct(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ft=(e,t,n,r)=>(lt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},mt={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},ht=(e=mt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?ht(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function gt(e){return v({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const _t=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function vt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return _t(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return _t(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt=l`
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
`,bt=/;\s+$/;function xt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function St(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(bt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Ct,wt=class extends Ze{constructor(){super(),dt(this,Ct,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[yt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ut(this,Ct)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ft(this,Ct,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=St({property:xt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=St({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Ct=/* @__PURE__ */ new WeakMap,_([v()],wt.prototype,`dir`,2),_([v()],wt.prototype,`lang`,2),_([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],wt.prototype,`didSSR`,2);const Tt=/* @__PURE__ */ new Set,Et=/* @__PURE__ */ new Map;let Dt,Ot=`ltr`,kt=`en`;const At=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(At){let e=new MutationObserver(Mt);Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function jt(...e){e.map(e=>{let t=e.$code.toLowerCase();Et.has(t)?Et.set(t,Object.assign(Object.assign({},Et.get(t)),e)):Et.set(t,e),Dt||=e}),Mt()}function Mt(){At&&(Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language),[...Tt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Nt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Tt.add(this.host)}hostDisconnected(){Tt.delete(this.host)}dir(){return`${this.host.dir||Ot}`.toLowerCase()}lang(){let e=`${this.host.lang||kt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Dt?Dt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Et.get(`${n}-${r}`),a=Et.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Dt&&Dt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Dt&&Dt[e])i=Dt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Pt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;jt(Pt);var Ft=Pt,It=class extends Nt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};jt(Ft);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Lt=class extends wt{constructor(){super(...arguments),this.localize=new It(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){nt(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new n)}render(){return Me`
      <slot part="content" class="content"></slot>

      ${this.withRemove?Me`
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
    `}};Lt.css=[$e,it,rt],_([v({reflect:!0})],Lt.prototype,`variant`,2),_([v({reflect:!0})],Lt.prototype,`appearance`,2),_([v({reflect:!0})],Lt.prototype,`size`,2),_([at(`size`)],Lt.prototype,`handleSizeChange`,1),_([v({type:Boolean,reflect:!0})],Lt.prototype,`pill`,2),_([v({attribute:`with-remove`,type:Boolean})],Lt.prototype,`withRemove`,2),Lt=_([pt(`wa-tag`)],Lt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),zt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Vt=class extends wt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new zt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Vt.formAssociated=!0,_([v({reflect:!0})],Vt.prototype,`name`,2),_([v({type:Boolean})],Vt.prototype,`disabled`,2),_([v({state:!0,attribute:!1})],Vt.prototype,`valueHasChanged`,2),_([v({state:!0,attribute:!1})],Vt.prototype,`hasInteracted`,2),_([v({attribute:`custom-error`,reflect:!0})],Vt.prototype,`customError`,2),_([v({attribute:!1,state:!0,type:Object})],Vt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ht=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Ut=l`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Gt=e=>(...t)=>({_$litDirective$:e,values:t});var Kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const qt=Gt(class extends Kt{constructor(e){if(super(e),e.type!==Wt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),Jt=e=>e??g,Yt=Symbol.for(``),Xt=e=>{
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
if(e?.r===Yt)return e?._$litStatic$},Zt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Yt}),Qt=/* @__PURE__ */ new Map,$t=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Xt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Qt.get(e))===void 0&&(o.raw=o,Qt.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends Vt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ht(this,`[default]`,`start`,`end`),this.localize=new It(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Rt()]}handleSizeChange(){nt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new zt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Zt`a`:Zt`button`;return $t`
      <${t}
        part="base button"
        class=${qt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Jt(e?void 0:this.disabled)}
        type=${Jt(e?void 0:this.type)}
        title=${this.title}
        name=${Jt(e?void 0:this.name)}
        value=${Jt(e?void 0:this.value)}
        href=${Jt(e?this.href:void 0)}
        target=${Jt(e?this.target:void 0)}
        download=${Jt(e?this.download:void 0)}
        rel=${Jt(e&&this.rel?this.rel:void 0)}
        role=${Jt(e?void 0:`button`)}
        aria-disabled=${Jt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?$t`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?$t`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};y.shadowRootOptions={...Vt.shadowRootOptions,delegatesFocus:!0},y.css=[Ut,it,rt],_([vt(`.button`)],y.prototype,`button`,2),_([vt(`slot:not([name])`)],y.prototype,`labelSlot`,2),_([gt()],y.prototype,`invalid`,2),_([gt()],y.prototype,`isIconButton`,2),_([v()],y.prototype,`title`,2),_([v({reflect:!0})],y.prototype,`variant`,2),_([v({reflect:!0})],y.prototype,`appearance`,2),_([v({reflect:!0})],y.prototype,`size`,2),_([at(`size`)],y.prototype,`handleSizeChange`,1),_([v({attribute:`with-caret`,type:Boolean,reflect:!0})],y.prototype,`withCaret`,2),_([v({attribute:`with-start`,type:Boolean})],y.prototype,`withStart`,2),_([v({attribute:`with-end`,type:Boolean})],y.prototype,`withEnd`,2),_([v({type:Boolean})],y.prototype,`disabled`,2),_([v({type:Boolean,reflect:!0})],y.prototype,`loading`,2),_([v({type:Boolean,reflect:!0})],y.prototype,`pill`,2),_([v()],y.prototype,`type`,2),_([v({reflect:!0})],y.prototype,`name`,2),_([v({reflect:!0})],y.prototype,`value`,2),_([v({reflect:!0})],y.prototype,`href`,2),_([v()],y.prototype,`target`,2),_([v()],y.prototype,`rel`,2),_([v()],y.prototype,`download`,2),_([v({attribute:`formaction`})],y.prototype,`formAction`,2),_([v({attribute:`formenctype`})],y.prototype,`formEnctype`,2),_([v({attribute:`formmethod`})],y.prototype,`formMethod`,2),_([v({attribute:`formnovalidate`,type:Boolean})],y.prototype,`formNoValidate`,2),_([v({attribute:`formtarget`})],y.prototype,`formTarget`,2),_([at(`disabled`,{waitUntilFirstUpdate:!0})],y.prototype,`handleDisabledChange`,1),_([at(`href`)],y.prototype,`handleHrefChange`,1),_([at(`loading`,{waitUntilFirstUpdate:!0})],y.prototype,`handleLoadingChange`,1),y=_([pt(`wa-button`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var en=l`
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
`,tn=class extends wt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new It(this)}render(){return Me`
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
    `}};tn.css=en,tn=_([pt(`wa-spinner`)],tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},rn=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},an=l`
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
`,on=``,sn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function cn(){return on.replace(/\/$/,``)}function ln(e){sn=e}function un(){if(!sn){let e=document.querySelector(`[data-fa-kit-code]`);e&&ln(e.getAttribute(`data-fa-kit-code`)||``)}return sn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dn=`7.3.0`;function fn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function pn(e,t,n){let r=fn(e,t,n),i=cn();if(i)return`${i}/${r}/${e}.svg`;let a=un();return a.length>0?`https://ka-p.fontawesome.com/releases/v${dn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${dn}/svgs/${r}/${e}.svg`}var mn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>pn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function hn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var gn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},_n={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=gn[n][e]??gn.regular[e]??gn.regular[`circle-question`];return r?hn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},vn=`classic`,yn=[mn,_n],bn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function xn(e){bn.add(e)}function Sn(e){bn.delete(e)}function Cn(e){return yn.find(t=>t.name===e)}function wn(){return vn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Tn}=qe,En=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=Symbol(),On=Symbol(),kn,An=/* @__PURE__ */ new Map,b=class extends wt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Dn:On}catch{return On}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Dn;kn||=new DOMParser;let r=kn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Dn}catch{return Dn}}}connectedCallback(){super.connectedCallback(),xn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sn(this)}async getIconSource(){let e=Cn(this.library),t=this.family||wn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Cn(this.library):void 0;if(!e){this.svg=null;return}let r=An.get(e);r||(r=this.resolveIcon(e,n),An.set(e,r));let i=await r;if(i===On&&An.delete(e),e===(await this.getIconSource()).url){if(En(i))this.svg=i;else switch(i){case On:case Dn:this.svg=null,this.dispatchEvent(new nn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new rn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Cn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};b.css=an,_([gt()],b.prototype,`svg`,2),_([v({reflect:!0})],b.prototype,`name`,2),_([v({reflect:!0})],b.prototype,`family`,2),_([v({reflect:!0})],b.prototype,`variant`,2),_([v({reflect:!0})],b.prototype,`canvas`,2),_([v({attribute:`auto-width`,type:Boolean,reflect:!0})],b.prototype,`autoWidth`,2),_([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],b.prototype,`swapOpacity`,2),_([v()],b.prototype,`src`,2),_([v()],b.prototype,`label`,2),_([v({reflect:!0})],b.prototype,`library`,2),_([v({type:Number,reflect:!0})],b.prototype,`rotate`,2),_([v({type:String,reflect:!0})],b.prototype,`flip`,2),_([v({type:String,reflect:!0})],b.prototype,`animation`,2),_([at(`label`)],b.prototype,`handleLabelChange`,1),_([at([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],b.prototype,`setIcon`,1),b=_([pt(`wa-icon`)],b);var jn=/* @__PURE__ */ t({default:()=>Lt}),x
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Mn(e){this.c=e}x=Mn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function S(e,t){this.l=e,this.h=t}x=S.prototype,x.toString=(function(){return Ga(this.l,this.h)});function Nn(e){switch(typeof e){case`string`:return Au.l();case`number`:return Jn(e)?e<<24>>24===e?El.l():e<<16>>16===e?Ll.l():wu.l():Yn(e)?Cu.l():Su.l();case`boolean`:return el.l();case`undefined`:return Ra.l();default:return e instanceof S?Du.l():e instanceof Mn?rl.l():e&&e.$classData?e.$classData.l():null}}function Pn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Jn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Yn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof S?`java.lang.Long`:e instanceof Mn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hb()}}function Fn(e,t){switch(typeof e){case`string`:return ku(e,t);case`number`:return bu(e,t);case`boolean`:return Qc(e,t);case`undefined`:return Fa(e,t);default:return e&&e.$classData||e===null?e.e(t):e instanceof S?Tu(e.l,e.h,t):e instanceof Mn?nl(e.c,t):er.prototype.e.call(e,t)}}function In(e){switch(typeof e){case`string`:return q(e);case`number`:return xu(e);case`boolean`:return $c(e);case`undefined`:return Ia(e);default:return e&&e.$classData||e===null?e.m():e instanceof S?Eu(e.l,e.h):e instanceof Mn?tl(e.c):er.prototype.m.call(e)}}function Ln(e){return e===void 0?`undefined`:e.toString()}function Rn(e){if(e===0)throw new Tl(`/ by zero`);return e}function zn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Bn(e){return String.fromCharCode(e)}var Vn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Hn(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Un=0,Wn=/* @__PURE__ */ new WeakMap;function Gn(e){switch(typeof e){case`string`:return q(e);case`number`:return xu(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:q(n);default:if(e===null)return 0;var r=Wn.get(e);return r===void 0&&(r=Un+1|0,Un=r,Wn.set(e,r)),r}}function Kn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function qn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Xn(e){return new Mn(e)}Xn(0);function C(e,t){return new S(e,t)}var Zn=C(0,0);function Qn(e){return e===null?0:e.c}function $n(e){return e===null?Zn:e}function er(){}x=er.prototype,x.constructor=er;function w(){}w.prototype=x,x.m=(function(){return Gn(this)}),x.e=(function(e){return this===e}),x.r=(function(){var e=this.m();return Pn(this)+`@`+(e>>>0).toString(16)}),x.toString=(function(){return this.r()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=T.prototype=new w,x.constructor=T,x.a1=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),x.V=(function(){return new T(this.a.slice())});function tr(){}tr.prototype=x;function nr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=nr.prototype=new w,x.constructor=nr,x.a1=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),x.V=(function(){return new nr(this.a.slice())});function rr(e){this.a=typeof e==`number`?new Uint16Array(e):e}x=rr.prototype=new w,x.constructor=rr,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new rr(this.a.slice())});function ir(e){this.a=typeof e==`number`?new Int8Array(e):e}x=ir.prototype=new w,x.constructor=ir,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new ir(this.a.slice())});function ar(e){this.a=typeof e==`number`?new Int16Array(e):e}x=ar.prototype=new w,x.constructor=ar,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Int32Array(e):e}x=or.prototype=new w,x.constructor=or,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new or(this.a.slice())});function sr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}x=sr.prototype=new w,x.constructor=sr,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),x.V=(function(){return new sr(this.a.slice())});function cr(e){this.a=typeof e==`number`?new Float32Array(e):e}x=cr.prototype=new w,x.constructor=cr,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new cr(this.a.slice())});function lr(e){this.a=typeof e==`number`?new Float64Array(e):e}x=lr.prototype=new w,x.constructor=lr,x.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.V=(function(){return new lr(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=E.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i,t===`J`)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new tr;n.constructor=t,n.a1=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),n.V=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===D});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new E().a(this),this.A}),x.l=(function(){return this.L||=new pc(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===ur)throw Ol(new kl);return new(this.r()).C(e)});var D=new E;D.n={},D.E=`Ljava.lang.Object;`,D.F=(e=>!e.X),D.N=`java.lang.Object`,D.I=(e=>e!==null),D.A=new E().y(D,T,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),er.prototype.$classData=D;var ur=new E().p(void 0,`V`,`void`,void 0,void 0),dr=new E().p(!1,`Z`,`boolean`,nr,void 0),fr=new E().p(0,`C`,`char`,rr,Uint16Array),pr=new E().p(0,`B`,`byte`,ir,Int8Array),mr=new E().p(0,`S`,`short`,ar,Int16Array),hr=new E().p(0,`I`,`int`,or,Int32Array),gr=new E().p(Zn,`J`,`long`,sr,Int32Array),_r=new E().p(0,`F`,`float`,cr,Float32Array),vr=new E().p(0,`D`,`double`,lr,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function yr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function br(e,t){return new or(yr(e,t,-1))}function xr(e){return Nn(e).cw()+`@`+Gn(e)}function Sr(e){var t=e.cH;return t===void 0?xr(e):t}function Cr(){wr=this,Tr().h7(new K((e=>void 0)),ao().ef,!0)}x=Cr.prototype=new w,x.constructor=Cr,x.h7=(function(e,t,n){return new Hc(e,n,t,this)}),new E().i(Cr,`com.raquo.airstream.core.Observer$`,{be:1});var wr;function Tr(){return wr||=new Cr,wr}function Er(e){this.c0=null,this.cI=null,this.c1=0,this.c0=e,this.cI=void 0;var t=Hr().br();this.c1=t===void 0?1:1+t.c1|0,Ar().by===-1||this.c1>Ar().by?Xs().cC(new hu(this,Ar().by)):Pr().O?Pr().ak.push(this)|0:Hr().cq(this)}x=Er.prototype=new w,x.constructor=Er;var Dr=new E().i(Er,`com.raquo.airstream.core.Transaction`,{bh:1});function Or(){this.by=0,this.cJ=null,kr=this,this.by=1e3,this.cJ=new K((e=>{throw H(new U,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=Or.prototype=new w,x.constructor=Or,x.eF=(function(e){try{e.c0.c(e);var t=e.cI;if(t!==void 0)for(;t.hd();)t.ha().hf(e)}catch(e){var n=e instanceof Os?e:new $u(e);Xs().cC(n)}}),new E().i(Or,`com.raquo.airstream.core.Transaction$`,{bi:1});var kr;function Ar(){return kr||=new Or,kr}function jr(e){e.bz.length|0?new Er(new K((t=>{for(;(e.bz.length|0)>0;){var n=e.bz.shift();try{n.c(t)}catch(e){var r=e instanceof Os?e:new $u(e);Xs().cC(r)}}for(;(e.ak.length|0)>0;){var i=e.ak.shift();Hr().cq(i)}}))):(e.ak.length|0)>0&&new Er(new K((t=>{for(;(e.ak.length|0)>0;)Hr().cq(e.ak.shift())})))}function Mr(){this.O=!1,this.bz=null,this.ak=null,Nr=this,this.O=!1,this.bz=si().aA(F().ai(new(N.r()).C([]))),this.ak=si().aA(F().ai(new(Dr.r()).C([])))}x=Mr.prototype=new w,x.constructor=Mr,new E().i(Mr,`com.raquo.airstream.core.Transaction$onStart$`,{bj:1});var Nr;function Pr(){return Nr||=new Mr,Nr}function Fr(e,t){return e.al.get(t)}function Ir(e,t){e.bA.unshift(t)}function Lr(e){return e.bA.shift()}function Rr(e,t,n){var r=Fr(e,t),i=r===void 0,a=r===void 0?si().aA(F().ai(new(Dr.r()).C([]))):r;a.push(n),i&&e.al.set(t,a)}function zr(e,t){var n=Fr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.al.delete(t),i}}function Br(){this.bA=null,this.al=null,Vr=this,this.bA=si().aA(F().ai(new(Dr.r()).C([]))),this.al=/* @__PURE__ */ new Map}x=Br.prototype=new w,x.constructor=Br,x.cq=(function(e){var t=this.br();t===void 0?(Ir(this,e),Ar().eF(e),this.fV(e)):Rr(this,t,e)}),x.fV=(function(e){for(var t=e;;){var n=this.br(),r=t;if(!(n!==void 0&&P().F(r,n)))throw H(new U,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gH(t),t.c0=Ar().cJ;var i=this.br();if(P().F(i,void 0)){if((this.al.size|0)>0){var a=new Ws(0);throw this.al.forEach((e=>((t,n)=>{e.b5=e.b5+(t.length|0)|0}))(a)),H(new U,`Transaction queue error: Stack cleared, but a total of `+a.b5+` children for `+(this.al.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Ar().eF(i),t=i}}),x.gH=(function(e){for(var t=e;;){var n=zr(this,t);if(P().F(n,void 0)){Lr(this);var r=this.br();if(!P().F(r,void 0))t=r;else return}else{Ir(this,n);return}}}),x.br=(function(){return this.bA[0]}),new E().i(Br,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bk:1});var Vr;function Hr(){return Vr||=new Br,Vr}function Ur(e,t){var n=e.a2.indexOf(t)|0;if(n!==-1)e.a2.splice(n,1),e.C.b()||t.f0();else throw H(new U,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Wr(e){for(;(e.bB.length|0)>0;)Ur(e,e.bB.shift())}function Gr(e){this.cK=null,this.a2=null,this.aG=!1,this.bB=null,this.C=null,this.aH=0,this.cK=e,this.a2=si().aA(F().ai(new(qr.r()).C([]))),this.aG=!0,this.bB=si().aA(F().ai(new(qr.r()).C([]))),this.C=J(),this.aH=0}x=Gr.prototype=new w,x.constructor=Gr,x.eA=(function(){if(this.C.b()){var e=Pr(),t=(()=>{var e=new Go(this.cK);this.C=new Nu(e),this.aG=!1,this.aH=0;for(var t=0,n=this.a2.length|0;t<n;){var r=t+this.aH|0;this.a2[r].eZ(e),t=1+t|0}Wr(this),this.aG=!0,this.aH=0});if(Pr(),e.O)t();else{e.O=!0;try{t()}finally{e.O=!1,jr(e)}}}else throw H(new U,`Can not activate `+this+`: it is already active`)}),x.fO=(function(){if(this.C.b())throw H(new U,`Can not deactivate DynamicOwner: it is not active`);this.aG=!1;for(var e=this.a2,t=0,n=e.length|0;t<n;)e[t].f0(),t=1+t|0;Wr(this);var r=this.C;r.b()||r.x().gw(),Wr(this),this.aG=!0,this.C=J()}),x.fv=(function(e,t){t?(this.aH=1+this.aH|0,this.a2.unshift(e)):this.a2.push(e);var n=this.C;if(!n.b()){var r=n.x();e.eZ(r)}}),x.gN=(function(e){this.aG?Ur(this,e):this.bB.push(e)}),new E().i(Gr,`com.raquo.airstream.ownership.DynamicOwner`,{bl:1});function Kr(e,t,n){this.bC=null,this.cL=null,this.bD=null,this.bC=e,this.cL=t,this.bD=J(),e.fv(this,n)}x=Kr.prototype=new w,x.constructor=Kr,x.bV=(function(){this.bC.gN(this)}),x.eZ=(function(e){var t=Pr(),n=(()=>{this.bD=this.cL.c(e)});if(Pr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,jr(t)}}}),x.f0=(function(){var e=this.bD;e.b()||(e.x().bV(),this.bD=J())});var qr=new E().i(Kr,`com.raquo.airstream.ownership.DynamicSubscription`,{bm:1});function Jr(){}x=Jr.prototype=new w,x.constructor=Jr,x.h5=(function(e,t,n){return new Kr(e,new K((e=>new Nu(t.c(e)))),n)}),x.gX=(function(e,t,n){return new Kr(e,new K((e=>(t.c(e),J()))),n)}),new E().i(Jr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bn:1});var Yr;function Xr(){return Yr||=new Jr,Yr}function Zr(e){e.aI=si().aA(F().ai(new(ri.r()).C([])))}function Qr(e){for(var t=e.aI,n=0,r=t.length|0;n<r;)ti(t[n]),n=1+n|0;e.aI.length=0}function $r(e,t){var n=e.aI.indexOf(t)|0;if(n!==-1)e.aI.splice(n,1);else throw H(new U,`Can not remove Subscription from Owner: subscription not found.`)}function ei(e,t){e.aI.push(t)}function ti(e){if(!e.c3)e.cN.aB(),e.c3=!0;else throw H(new U,`Can not kill Subscription: it was already killed.`)}function ni(e,t){this.cO=null,this.cN=null,this.c3=!1,this.cO=e,this.cN=t,this.c3=!1,e.gG(this)}x=ni.prototype=new w,x.constructor=ni,x.bV=(function(){ti(this),$r(this.cO,this)});var ri=new E().i(ni,`com.raquo.airstream.ownership.Subscription`,{bq:1});function ii(e,t){this.cP=null,this.cQ=null,this.a3=null,this.am=!1,this.cP=e,this.cQ=t,this.a3=J(),this.am=!1}x=ii.prototype=new w,x.constructor=ii,x.gs=(function(){var e=this.a3;return!e.b()&&!e.x().bC.C.b()}),x.gS=(function(e){if(this.am)throw H(new U,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a3;if(t.b())var n=!1;else var r=t.x().bC,n=e===null?r===null:e===r;if(!n){this.gs()&&!e.C.b()&&(this.am=!0);var i=this.a3;i.b()||(i.x().bV(),this.a3=J());var a=Xr().h5(e,new K((e=>(this.am||this.cP.aB(),new ni(e,new ml((()=>{this.am||this.cQ.aB()})))))),!1);this.a3=new Nu(a),this.am=!1}}),x.fI=(function(){if(this.am)throw H(new U,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a3;e.b()||e.x().bV(),this.a3=J()}),new E().i(ii,`com.raquo.airstream.ownership.TransferableSubscription`,{br:1});function ai(){}x=ai.prototype=new w,x.constructor=ai,x.aA=(function(e){return[...Ro().h3(e)]}),new E().i(ai,`com.raquo.ew.JsArray$`,{bs:1});var oi;function si(){return oi||=new ai,oi}function ci(){}x=ci.prototype=new w,x.constructor=ci,x.gb=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(ci,`com.raquo.ew.JsArray$RichJsArray$`,{bt:1});var li;function ui(){return li||=new ci,li}function di(){this.cR=null,fi=this,document.createElement(`template`),this.fM(G().d.gY().gZ()),this.cR=/* @__PURE__ */ RegExp(` `,`g`)}x=di.prototype=new w,x.constructor=di,x.fA=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Os?e:new $u(e);if(n instanceof $u&&n.Q instanceof DOMException)return!1;throw n instanceof $u?n.Q:n}}),x.gt=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().F(t,r))return!0;n=r}}),x.fL=(function(e){return document.createElement(e.cz())}),x.gi=(function(e,t){var n=this.gj(e,t);return n===void 0?void 0:t.aJ.bQ(n)}),x.gj=(function(e,t){var n=e.W.getAttributeNS(null,t.a4);return n===null?void 0:n}),x.f7=(function(e,t,n){this.gR(e,t,t.aJ.bT(n))}),x.gR=(function(e,t,n){n===null?this.gM(e,t):e.W.setAttribute(t.a4,n)}),x.gM=(function(e,t){e.W.removeAttribute(t.a4)}),x.f8=(function(e,t,n){var r=e.W,i=t.an,a=t.ao,o=n===null?null:n;o===null?(a.S(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.S(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.fM=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dx)}),x.gm=(function(e,t){var n=this.gn(e,t);return n===void 0?void 0:t.c8.bQ(n)}),x.gn=(function(e,t){var n=e.cB(),r=t.bF,i=n.getAttributeNS(r.b()?null:r.x(),t.c9);return i===null?void 0:i}),x.gT=(function(e,t,n){this.gU(e,t,t.c8.bT(n))}),x.gU=(function(e,t,n){if(n===null)this.gO(e,t);else{var r=t.bF;if(r.b())e.cB().setAttribute(t.bE,n);else{var i=r.x();e.cB().setAttributeNS(i,t.bE,n)}}}),x.gO=(function(e,t){var n=e.cB(),r=t.bF;n.removeAttributeNS(r.b()?null:r.x(),t.c9)}),x.fN=(function(e){return document.createTextNode(e)}),x.fQ=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new cf(this.fP(r),n);r=i,n=a}}),x.fP=(function(e){if(e instanceof HTMLElement){var t=e.id;if(go(),t!==``)var n=`#`+t;else var r=e.className,n=(go(),r===``?``:`.`+r.replace(this.cR,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new E().i(di,`com.raquo.laminar.DomApi$`,{bu:1});var fi;function O(){return fi||=new di,fi}function pi(e,t,n){this.c5=null,this.cS=null,this.c4=null,this.c5=e,this.cS=t,this.c4=n}x=pi.prototype=new w,x.constructor=pi,x.S=(function(e){this.c5===null?this.c4===null?co().gc(this.cS,e):ui().gb(this.c4,Nc().gf(e)):this.c5.S(e)}),new E().i(pi,`com.raquo.laminar.Seq`,{bv:1});function mi(){hi=this,$()}x=mi.prototype=new w,x.constructor=mi,new E().i(mi,`com.raquo.laminar.Seq$`,{bw:1});var hi;function gi(){return hi||=new mi,hi}function _i(e){Tr(),Xs()}function vi(e){e.fd=Li()}function yi(e){bi(e,new K((e=>{e.dl.W.focus()})))}function bi(e,t){return new ts(new K((e=>{var n=new Us(!e.aK.C.b()),r=new K((e=>{n.bM?n.bM=!1:t.c(e)}));Xr().gX(e.aK,new K((e=>(t=>{r.c(new Pi(e,t))}))(e)),!1)})),Li())}function xi(){this.c7=null,this.c6=null,Si=this,this.c7=new qo(Ci()),new qo(Ci()),new qo(Ci()),this.c6=new Ko}x=xi.prototype=new w,x.constructor=xi,new E().i(xi,`com.raquo.laminar.codecs.package$`,{bE:1});var Si;function Ci(){return Si||=new xi,Si}function wi(e){e.fe=Ti(e,`class`,` `)}function Ti(e,t,n){var r=Xo(new Zo,t,Ci().c7);return new Yo(r.a4,new K((e=>{var t=O().gi(e,r);return t===void 0?``:t})),new hl(((e,t)=>{O().f7(e,r,t)})),n)}function Ei(e){e.fc=Di(e,`class`,` `)}function Di(e,t,n){var r=new $o(t,Ci().c7,J());return new Yo(r.bE,new K((e=>{var t=O().gm(e,r);return t===void 0?``:t})),new hl(((e,t)=>{O().gT(e,r,t)})),n)}function Oi(e,t){this.dk=null,this.dj=null,this.dk=e,this.dj=t}x=Oi.prototype=new w,x.constructor=Oi,x.q=(function(e){return new Qs(this.dk,this.dj.c(e),new gl(((e,t,n)=>{O().f8(e,t,n)})))}),new E().i(Oi,`com.raquo.laminar.keys.DerivedStyleProp`,{c4:1});function ki(){}x=ki.prototype=new w,x.constructor=ki;function Ai(){}Ai.prototype=x;function ji(){this.ff=null,this.fg=null,this.fh=null,this.fi=null,this.ff=`http://www.w3.org/2000/svg`,this.fg=`http://www.w3.org/1999/xlink`,this.fh=`http://www.w3.org/XML/1998/namespace`,this.fi=`http://www.w3.org/2000/xmlns/`}x=ji.prototype=new w,x.constructor=ji,x.gB=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Vl(e)}}),new E().i(ji,`com.raquo.laminar.keys.SvgAttr$`,{c6:1});var Mi;function Ni(){return Mi||=new ji,Mi}function Pi(e,t){this.dl=null,this.dl=e}x=Pi.prototype=new w,x.constructor=Pi,new E().i(Pi,`com.raquo.laminar.lifecycle.MountContext`,{c7:1});var k=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function Fi(){this.fj=null,Ii=this,this.fj=new es}x=Fi.prototype=new w,x.constructor=Fi,new E().i(Fi,`com.raquo.laminar.modifiers.Modifier$`,{c9:1});var Ii;function Li(){return Ii||=new Fi,Ii}function Ri(){this.j=null,zi=this,this.j=new as(new K((e=>e)),A()),new as(new K((e=>``+(e|0))),A()),new as(new K((e=>``+ +e)),A()),new as(new K((e=>``+!!e)),A()),new as(new K((e=>e.h2())),A())}x=Ri.prototype=new w,x.constructor=Ri,new E().i(Ri,`com.raquo.laminar.modifiers.RenderableText$`,{cf:1});var zi;function A(){return zi||=new Ri,zi}function Bi(){}x=Bi.prototype=new w,x.constructor=Bi,x.bO=(function(e,t,n){var r=new Nu(e);t.fb(r),n!==void 0&&n.he(e,t);var i=O().fA(e.bt(),t.bt());return i&&t.f9(r),i}),new E().i(Bi,`com.raquo.laminar.nodes.ParentNode$`,{ci:1});var Vi;function Hi(){return Vi||=new Bi,Vi}function Ui(){}x=Ui.prototype=new w,x.constructor=Ui,x.b7=(function(e){return G().d.eI().cs(new Z([G().d.eH().eQ(),G().d.g9().fJ(),G().d.eV().f3().q(8),Zs(G().d,e,is())]))}),new E().i(Ui,`doc.ExampleGroups$package$`,{cp:1});var Wi;function Gi(){return Wi||=new Ui,Wi}function Ki(){}x=Ki.prototype=new w,x.constructor=Ki,x.Z=(function(e){return G().d.eI().cs(new Z([G().d.eH().eQ(),G().d.ga().h8(),G().d.fw().fH(),G().d.eV().f3().q(16),Zs(G().d,e,is())]))}),new E().i(Ki,`doc.Examples$package$`,{cq:1});var qi;function Ji(){return qi||=new Ki,qi}function Yi(){}x=Yi.prototype=new w,x.constructor=Yi,x.fy=(function(){Zi().g2(),Zi().g3(),Zi().g4(),Zi().g5(),Zi().g6()}),x.g2=(function(){var e=document.querySelector(`#example1`);no().bi(e).b()||(G(),new $s(e,Gi().b7(new Z([Ji().Z(new Z([V().l(new Z([new W((e=>e.s().bj()))]),new Z([B(G().d,`Brand`,A().j)])),V().l(new Z([new W((e=>e.s().bw()))]),new Z([B(G().d,`Success`,A().j)])),V().l(new Z([new W((e=>e.s().bo()))]),new Z([B(G().d,`Neutral`,A().j)])),V().l(new Z([new W((e=>e.s().bx()))]),new Z([B(G().d,`Warning`,A().j)])),V().l(new Z([new W((e=>e.s().bk()))]),new Z([B(G().d,`Danger`,A().j)]))]))]))))}),x.g3=(function(){var e=document.querySelector(`#example2`);no().bi(e).b()||(G(),new $s(e,Gi().b7(new Z(L().f(new(yu.r()).C([Ji().Z(new Z(L().f(new(yu.r()).C([V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bj())),new W((e=>e.u().b8()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Accent`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bj())),new W((e=>e.u().bm()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled + Outlined`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bj())),new W((e=>e.u().bl()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bj())),new W((e=>e.u().bp()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Outlined`,A().j)]))))])))),Ji().Z(new Z(L().f(new(yu.r()).C([V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bw())),new W((e=>e.u().b8()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Accent`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bw())),new W((e=>e.u().bm()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled + Outlined`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bw())),new W((e=>e.u().bl()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bw())),new W((e=>e.u().bp()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Outlined`,A().j)]))))])))),Ji().Z(new Z(L().f(new(yu.r()).C([V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bo())),new W((e=>e.u().b8()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Accent`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bo())),new W((e=>e.u().bm()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled + Outlined`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bo())),new W((e=>e.u().bl()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bo())),new W((e=>e.u().bp()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Outlined`,A().j)]))))])))),Ji().Z(new Z(L().f(new(yu.r()).C([V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bx())),new W((e=>e.u().b8()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Accent`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bx())),new W((e=>e.u().bm()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled + Outlined`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bx())),new W((e=>e.u().bl()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bx())),new W((e=>e.u().bp()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Outlined`,A().j)]))))])))),Ji().Z(new Z(L().f(new(yu.r()).C([V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bk())),new W((e=>e.u().b8()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Accent`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bk())),new W((e=>e.u().bm()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled + Outlined`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bk())),new W((e=>e.u().bl()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Filled`,A().j)])))),V().l(new Z(L().f(new(N.r()).C([new W((e=>e.s().bk())),new W((e=>e.u().bp()))]))),new Z(L().f(new(k.r()).C([B(G().d,`Outlined`,A().j)]))))]))))]))))))}),x.g4=(function(){var e=document.querySelector(`#example3`);no().bi(e).b()||(G(),new $s(e,Gi().b7(new Z([Ji().Z(new Z([V().l(new Z([new W((e=>e.a0().cD()))]),new Z([B(G().d,`Small`,A().j)])),V().l(new Z([new W((e=>e.a0().cy()))]),new Z([B(G().d,`Medium`,A().j)])),V().l(new Z([new W((e=>e.a0().cx()))]),new Z([B(G().d,`Large`,A().j)]))]))]))))}),x.g5=(function(){var e=document.querySelector(`#example4`);no().bi(e).b()||(G(),new $s(e,Gi().b7(new Z([Ji().Z(new Z([V().l(new Z([new W((e=>e.a0().cD())),new W((e=>e.cA().q(!0)))]),new Z([B(G().d,`Small`,A().j)])),V().l(new Z([new W((e=>e.a0().cy())),new W((e=>e.cA().q(!0)))]),new Z([B(G().d,`Medium`,A().j)])),V().l(new Z([new W((e=>e.a0().cx())),new W((e=>e.cA().q(!0)))]),new Z([B(G().d,`Large`,A().j)]))]))]))))}),x.g6=(function(){var e=document.querySelector(`#example5`);no().bi(e).b()||(G(),new $s(e,Gi().b7(new Z([Ji().Z(new Z([V().l(new Z([new W((e=>e.a0().cD())),new W((e=>e.cE().q(!0)))]),new Z([B(G().d,`Small`,A().j)])),V().l(new Z([new W((e=>e.a0().cy())),new W((e=>e.cE().q(!0)))]),new Z([B(G().d,`Medium`,A().j)])),V().l(new Z([new W((e=>e.a0().cx())),new W((e=>e.cE().q(!0)))]),new Z([B(G().d,`Large`,A().j)]))]))]))))}),new E().i(Yi,`examples.tag.Main$package$`,{cr:1});var Xi;function Zi(){return Xi||=new Yi,Xi}function Qi(e){try{Zi().fy()}catch(e){throw e}}function $i(e,t){for(var n=j().U(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ea(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Cs(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Cs(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(ws.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function ea(e,t){var n=j().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().U(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().U(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[ta(e,c[1]),ca(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[ta(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[ta(e,d[1]),`<clinit>`]}function ta(e,t){var n=ra(e);if(Pa().cn.call(n,t))var r=ra(e)[t];else var r=ya(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function na(e){if(!((1&e.H)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ck=t,e.H=(1|e.H)<<24>>24}return e.ck}function ra(e){return(1&e.H)<<24>>24?e.ck:na(e)}function ia(e){if(!((2&e.H)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cl=t,e.H=(2|e.H)<<24>>24}return e.cl}function aa(e){return(2&e.H)<<24>>24?e.cl:ia(e)}function oa(e){return(4&e.H)<<24>>24||(e.cj=Object.keys(aa(e)),e.H=(4|e.H)<<24>>24),e.cj}function sa(e){return(4&e.H)<<24>>24?e.cj:oa(e)}function ca(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function la(e,t){return t?t.arguments&&t.stack?ua(e,t):t.stack&&t.sourceURL?pa(e,t):t.stack&&t.number?fa(e,t):t.stack&&t.fileName?da(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ma(e,t):ha(e,t):ma(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ga(e,t):_a(e,t):t.stack&&!t.fileName?ua(e,t):va(e,t):[]}function ua(e,t){return(t.stack+`
`).replace(j().U(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().B(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().B(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().B(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().B(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function da(e,t){return t.stack.replace(j().B(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().B(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function fa(e,t){return t.stack.replace(j().B(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().B(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().B(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function pa(e,t){return t.stack.replace(j().B(`\\[native code\\]\\n`,`m`),``).replace(j().B(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().B(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ma(e,t){for(var n=j().B(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ha(e,t){for(var n=j().B(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ga(e,t){for(var n=j().U(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function _a(e,t){for(var n=j().U(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().U(`<anonymous function: (\\S+)>`),`$1`).replace(j().U(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function va(e,t){return[]}function ya(e,t,n){for(;;)if(t<(sa(e).length|0)){var r=sa(e)[t];if(n.startsWith(r))return``+aa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function ba(){this.ck=null,this.cl=null,this.cj=null,this.H=0}x=ba.prototype=new w,x.constructor=ba,x.g7=(function(e){return $i(this,la(this,e))}),new E().i(ba,`java.lang.StackTrace$`,{cQ:1});var xa;function Sa(){return xa||=new ba,xa}function Ca(){}x=Ca.prototype=new w,x.constructor=Ca,x.U=(function(e){return new RegExp(e)}),x.B=(function(e,t){return new RegExp(e,t)}),new E().i(Ca,`java.lang.StackTrace$StringRE$`,{cR:1});var wa;function j(){return wa||=new Ca,wa}function Ta(){this.e7=null,this.fk=null,Ea=this,this.e7=new td(!1),this.fk=new td(!0)}x=Ta.prototype=new w,x.constructor=Ta,new E().i(Ta,`java.lang.System$Streams$`,{cV:1});var Ea;function Da(){return Ea||=new Ta,Ea}function Oa(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function ka(){this.cm=null,this.e8=null,Aa=this,this.cm=Oa(this),this.e8=null}x=ka.prototype=new w,x.constructor=ka,x.eW=(function(e,t){if(this.cm!==null){var n=this.cm;return Pa().cn.call(n,e)?n[e]:t}return this.e8.eW(e,t)}),new E().i(ka,`java.lang.System$SystemProperties$`,{cW:1});var Aa;function ja(){return Aa||=new ka,Aa}function Ma(){this.cn=null,Na=this,this.cn=Object.prototype.hasOwnProperty}x=Ma.prototype=new w,x.constructor=Ma,new E().i(Ma,`java.lang.Utils$Cache$`,{cY:1});var Na;function Pa(){return Na||=new Ma,Na}function Fa(e,t){return e===t}function Ia(e){return 0}function La(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ao)}var Ra=new E().i(0,`java.lang.Void`,{ao:1},(e=>e===void 0));function za(e,t){throw Dl(new kl,`argument type mismatch`)}function Ba(){}x=Ba.prototype=new w,x.constructor=Ba,x.aS=(function(e){return e instanceof T||e instanceof nr||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or?e.a.length:e instanceof sr?e.a.length>>>1|0:(e instanceof cr||e instanceof lr||za(this,e),e.a.length)}),new E().i(Ba,`java.lang.reflect.Array$`,{cZ:1});var Va;function Ha(){return Va||=new Ba,Va}function Ua(){}x=Ua.prototype=new w,x.constructor=Ua,x.fF=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),x.eM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),x.eL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eJ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new E().i(Ua,`java.util.Arrays$`,{d0:1});var Wa;function M(){return Wa||=new Ua,Wa}function Ga(e,t){return Ja().fa(e,t)}function Ka(){}x=Ka.prototype=new w,x.constructor=Ka,x.fa=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),x.eU=(function(e){if(e<-0x8000000000000000)return C(0,-2147483648);if(e>=0x8000000000000000)return C(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return C(t,e<0&&t!==0?n-1|0:n)}),x.fT=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,h=p>>>16|0,re=Math.imul(ee,ne),ie=Math.imul(te,ne),ae=Math.imul(ee,h),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,h)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0)|0)-((o-oe|0)>>>0>o>>>0|0)|0)<0)var ce=p-1|0,le=(m-1|0)+(ce!==-1|0)|0,ue=ce,de=le;else var ue=p,de=m}else var fe=(s>>>0)/(Rn(u)>>>0)|0,ue=(4294967296*(s-Math.imul(u,fe)|0)+(o>>>0))/u|0,de=fe;if((t^r)>=0)return C(ue,de);var pe=-ue|0;return C(pe,(-de|0)-(pe!==0|0)|0)}),x.fU=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(Rn(n)>>>0)|0;return C((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var ne=o-1|0;return C(ne,(s-1|0)+(ne!==-1|0)|0)}return C(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?C(0,0):C(1,0)}),x.gK=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,h=p>>>16|0,re=Math.imul(ee,ne),ie=Math.imul(te,ne),ae=Math.imul(ee,h),oe=re+((ie+ae|0)<<16)|0,se=(re>>>16|0)+ae|0,ce=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,h)|0)+(se>>>16|0)|0)+(((65535&se)+ie|0)>>>16|0)|0,le=o-oe|0,ue=(s-ce|0)-(le>>>0>o>>>0|0)|0;if(ue<0)var de=le+u|0,fe=(ue+d|0)+(de>>>0<le>>>0|0)|0,pe=de,me=fe;else var pe=le,me=ue}else var he=(4294967296*((s>>>0)%(Rn(u)>>>0)|0)+(o>>>0))/u|0,pe=o-Math.imul(u,he)|0,me=0;if(t<0){var ge=-pe|0;return C(ge,(-me|0)-(ge!==0|0)|0)}return C(pe,me)}),x.gL=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(Rn(n)>>>0)|0)+(e>>>0))/n|0;return C(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0,ne=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0,h=e-ee|0,re=(t-ne|0)-(h>>>0>e>>>0|0)|0;if(re<0){var ie=h+n|0;return C(ie,(re+r|0)+(ie>>>0<h>>>0|0)|0)}return C(h,re)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return C(e,t);var ae=e-n|0;return C(ae,(t-r|0)-(ae>>>0>e>>>0|0)|0)}),new E().i(Ka,`org.scalajs.linker.runtime.RuntimeLong$`,{d2:1});var qa;function Ja(){return qa||=new Ka,qa}function Ya(){}x=Ya.prototype=new w,x.constructor=Ya,x.eR=(function(e,t){var n=e.y();if(n>-1){for(var r=t.eY(n),i=e.h(),a=0;a<n;)F().eD(r,a,i.k()),a=1+a|0;return r}var o=null,s=t.f5(),c=s===fr.l();o=[];for(var l=e.h();l.p();){var u=l.k(),d=c?Qn(u):u===null?So().gQ(s):u;o.push(d)}return So().gP(s===ur.l()?Ra.l():s===To.l()||s===Ac.l()?D.l():s,o)}),x.eP=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().F(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(Ya,`scala.Array$`,{d3:1});var Xa;function Za(){return Xa||=new Ya,Xa}var N=new E().i(1,`scala.Function1`,{e:1});function Qa(){}x=Qa.prototype=new w,x.constructor=Qa;function $a(){}$a.prototype=x;function eo(){}x=eo.prototype=new w,x.constructor=eo,x.bi=(function(e){return e===null?J():new Nu(e)}),new E().i(eo,`scala.Option$`,{db:1});var to;function no(){return to||=new eo,to}function ro(){this.eg=null,this.ef=null,io=this,this.eg=new W((e=>this.eg)),this.ef=new ol}x=ro.prototype=new w,x.constructor=ro,new E().i(ro,`scala.PartialFunction$`,{dc:1});var io;function ao(){return io||=new ro,io}function oo(){this.ej=null,so=this,this.ej=new W((e=>co().ej))}x=oo.prototype=new w,x.constructor=oo,x.gc=(function(e,t){var n=Ha().aS(e),r=0;if(e instanceof T)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof lr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.c(C(o,s)),r=1+r|0}else if(e instanceof cr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.c(Xn(e.a[r])),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.c(e.a[r]),r=1+r|0;else if(e instanceof nr)for(;r<n;)t.c(e.a[r]),r=1+r|0;else throw new Vl(e)}),new E().i(oo,`scala.collection.ArrayOps$`,{di:1});var so;function co(){return so||=new oo,so}function lo(e,t){for(var n=e.h();n.p();)t.c(n.k())}function uo(e,t,n,r){return e.y()===0?``+t+r:e.aQ(ff(new pf),t,n,r).E.o}function fo(e,t,n,r,i){var a=t.E;n.length!==0&&(a.o=``+a.o+n);var o=e.h();if(o.p()){var s=o.k();for(a.o=``+a.o+s;o.p();){r.length!==0&&(a.o=``+a.o+r);var c=o.k();a.o=``+a.o+c}}return i.length!==0&&(a.o=``+a.o+i),t}function po(e,t){this.em=null,this.b0=null,this.em=e,this.b0=t}x=po.prototype=new w,x.constructor=po,x.gp=(function(){return this.em.aB().h()}),new E().i(po,`scala.collection.Iterator$ConcatIteratorCell`,{dt:1});function mo(){this.en=null,ho=this,this.en=new W((e=>this.en))}x=mo.prototype=new w,x.constructor=mo,new E().i(mo,`scala.collection.StringOps$`,{dA:1});var ho;function go(){return ho||=new mo,ho}function _o(){this.eq=0,vo=this;try{go();var e=bs().gu(ja().eW(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.eq=e}x=_o.prototype=new w,x.constructor=_o,new E().i(_o,`scala.collection.immutable.IndexedSeqDefaults$`,{dE:1});var vo;function yo(){return vo||=new _o,vo}function bo(){}x=bo.prototype=new w,x.constructor=bo,x.gQ=(function(e){return e===pr.l()||e===mr.l()||e===fr.l()||e===hr.l()?0:e===gr.l()?C(0,0):e===_r.l()||e===vr.l()?0:e===dr.l()?!1:e===ur.l()?void 0:null}),x.gP=(function(e,t){var n=t.length|0;if(e===fr.l()){for(var r=new rr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.aj.U(n),o=0;o!==n;)F().eD(a,o,t[o]),o=1+o|0;return a}),new E().i(bo,`scala.collection.mutable.ArrayBuilder$`,{dJ:1});var xo;function So(){return xo||=new bo,xo}function Co(){}x=Co.prototype=new w,x.constructor=Co,x.F=(function(e,t){return e===t||(Ss(e)?this.g1(e,t):e instanceof Mn?this.fZ(e,t):e===null?t===null:Fn(e,t))}),x.g1=(function(e,t){if(Ss(t))return this.g0(e,t);if(t instanceof Mn){if(typeof e==`number`)return+e===t.c;if(e instanceof S){var n=$n(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:Fn(e,t)}return e===null?t===null:Fn(e,t)}),x.g0=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof S){var r=$n(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof S){var a=$n(e),o=a.l,s=a.h;if(t instanceof S){var c=$n(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:Fn(e,t)}),x.fZ=(function(e,t){if(t instanceof Mn)return e.c===t.c;if(Ss(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof S){var n=$n(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:Fn(t,e)}return e===null&&t===null}),new E().i(Co,`scala.runtime.BoxesRunTime$`,{e3:1});var wo;function P(){return wo||=new Co,wo}var To=new E().i(0,`scala.runtime.Null$`,{e6:1});function Eo(){}x=Eo.prototype=new w,x.constructor=Eo,x.bX=(function(){throw Pl(new Il,`tried to cast away nullability, but value is null`)}),new E().i(Eo,`scala.runtime.Scala3RunTime$`,{e7:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(){}x=ko.prototype=new w,x.constructor=ko,x.fx=(function(e){return e===null?To.l():Nn(e)}),x.aR=(function(e,t){if(e instanceof T||e instanceof or||e instanceof lr)return e.a[t];if(e instanceof sr){var n=e.a,r=t<<1;return C(n[r],n[r+1|0])}if(e instanceof cr)return e.a[t];if(e instanceof rr)return Xn(e.a[t]);if(e instanceof ir||e instanceof ar||e instanceof nr)return e.a[t];throw e===null?Fl(new Il):new Vl(e)}),x.eD=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof or)e.a[t]=n|0;else if(e instanceof lr)e.a[t]=+n;else if(e instanceof sr){var r=$n(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof cr)e.a[t]=Math.fround(n);else if(e instanceof rr)e.a[t]=Qn(n);else if(e instanceof ir)e.a[t]=n|0;else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof nr)e.a[t]=!!n;else throw e===null?Fl(new Il):new Vl(e)}),x.ft=(function(e){return uo(e.bs(),e.ah()+`(`,`,`,`)`)}),x.ai=(function(e){if(e===null)return null;if(e.a.length===0){var t=Vu();return fd(),Ru(t)}return new Wd(e)}),new E().i(ko,`scala.runtime.ScalaRunTime$`,{e8:1});var Ao;function F(){return Ao||=new ko,Ao}function jo(){}x=jo.prototype=new w,x.constructor=jo,x.n=(function(e,t){var n=this.bW(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.bW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.A=(function(e,t){return this.fE(e^t)}),x.fE=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.gy=(function(e,t){return t===e>>31?e:e^t}),x.fW=(function(e){var t=zn(e);if(t===e)return t;var n=Ja().eU(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Vn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),x.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.fW(+e);if(e instanceof S){var t=$n(e);return this.gy(t.l,t.h)}return In(e)}),x.gr=(function(e){throw Al(new Ml,``+e)}),new E().i(jo,`scala.runtime.Statics$`,{ea:1});var Mo;function I(){return Mo||=new jo,Mo}function No(){}x=No.prototype=new w,x.constructor=No,x.gV=(function(e,t){return setTimeout((()=>{t.aB()}),e)}),new E().i(No,`scala.scalajs.js.timers.package$`,{eg:1});var Po;function Fo(){return Po||=new No,Po}function Io(){}x=Io.prototype=new w,x.constructor=Io,x.h3=(function(e){if(e instanceof Z)return e.bN;var t=[];return e.S(new W((e=>t.push(e)|0))),t}),new E().i(Io,`scala.scalajs.runtime.Compat$`,{ep:1});var Lo;function Ro(){return Lo||=new Io,Lo}function zo(){}x=zo.prototype=new w,x.constructor=zo,x.f=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new E().i(zo,`scala.scalajs.runtime.package$`,{eq:1});var Bo;function L(){return Bo||=new zo,Bo}function Vo(){}x=Vo.prototype=new w,x.constructor=Vo,x.gW=(function(e){var t=`Illegal command line`+(e.eX()===0?``:e.eX()===1?` after first argument`:` after `+e.eX()+` arguments`)+`: `+e.hc();js().gF().gv(t+`
`)}),new E().i(Vo,`scala.util.CommandLineParser$`,{er:1});function Ho(e){this.cp=null,this.cp=e}x=Ho.prototype=new w,x.constructor=Ho,x.r=(function(){return`DynamicVariable(`+this.cp+`)`}),new E().i(Ho,`scala.util.DynamicVariable`,{et:1});function Uo(){}x=Uo.prototype=new w,x.constructor=Uo;function Wo(){}Wo.prototype=x,x.n=(function(e,t){var n=this.bW(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.bW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.A=(function(e,t){return this.bu(e^t)}),x.bu=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.f2=(function(e,t,n){var r=e.af();if(r===0)return n?t:q(e.ah());var i=t;n||(i=this.n(i,q(e.ah())));for(var a=0;a<r;)i=this.n(i,I().w(e.ag(a))),a=1+a|0;return this.A(i,r)}),x.h4=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.h();o.p();){var s=o.k(),c=I().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.n(l,n),l=this.n(l,r),l=this.bW(l,a),this.A(l,i)}),x.gE=(function(e,t){var n=e.h(),r=t;if(!n.p())return this.A(r,0);var i=n.k();if(!n.p())return this.A(this.n(r,I().w(i)),1);var a=n.k(),o=I().w(i);r=this.n(r,o);for(var s=r,c=I().w(a),l=c-o|0,u=2;n.p();){r=this.n(r,c);var d=I().w(n.k());if(l!==(d-c|0)||l===0){for(r=this.n(r,d),u=1+u|0;n.p();)r=this.n(r,I().w(n.k())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bu(this.n(this.n(s,l),c))}),x.v=(function(e,t){var n=t,r=Ha().aS(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.n(n,I().w(F().aR(e,0))),1);default:var i=I().w(F().aR(e,0));n=this.n(n,i);for(var a=n,o=I().w(F().aR(e,1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=I().w(F().aR(e,c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,I().w(F().aR(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bu(this.n(this.n(a,s),o))}}),x.gI=(function(e,t,n,r){return this.bu(this.n(this.n(this.n(r,e),t),n))}),x.gq=(function(e,t){var n=t,r=e.g();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.n(n,I().w(e.i(0))),1);default:var i=I().w(e.i(0));n=this.n(n,i);for(var a=n,o=I().w(e.i(1)),s=o-i|0,c=2;c<r;){n=this.n(n,o);var l=I().w(e.i(c));if(s!==(l-o|0)||s===0){for(n=this.n(n,l),c=1+c|0;c<r;)n=this.n(n,I().w(e.i(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bu(this.n(this.n(a,s),o))}}),x.gx=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.T(),u=c.G(),d=I().w(l);switch(r=this.n(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.gI(s,a,o,t):this.A(r,n)});function Go(e){this.aI=null,this.cM=null,this.c2=!1,this.cM=e,Zr(this),this.c2=!1}x=Go.prototype=new w,x.constructor=Go,x.gG=(function(e){this.c2?(ti(e),this.cM.aB()):ei(this,e)}),x.gw=(function(){Qr(this),this.c2=!0}),new E().i(Go,`com.raquo.airstream.ownership.OneTimeOwner`,{bo:1,bp:1});function Ko(){}x=Ko.prototype=new w,x.constructor=Ko,x.fR=(function(e){return e!==null}),x.fY=(function(e){return e?``:null}),x.bQ=(function(e){return this.fR(e)}),x.bT=(function(e){return this.fY(!!e)}),new E().i(Ko,`com.raquo.laminar.codecs.package$$anon$1`,{bF:1,a2:1});function qo(e){if(e===null)throw Fl(new Il)}x=qo.prototype=new w,x.constructor=qo,x.bT=(function(e){return e}),x.bQ=(function(e){return e}),new E().i(qo,`com.raquo.laminar.codecs.package$$anon$2`,{bG:1,a2:1});function Jo(e){return new Oi(e,new K((e=>e+`px`)))}function Yo(e,t,n,r){}x=Yo.prototype=new Ai,x.constructor=Yo,new E().i(Yo,`com.raquo.laminar.keys.CompositeKey`,{c3:1,G:1});function Xo(e,t,n){return e.a4=t,e.aJ=n,e}function Zo(){this.a4=null,this.aJ=null}x=Zo.prototype=new Ai,x.constructor=Zo;function Qo(){}Qo.prototype=x,x.q=(function(e){return new Qs(this,e,new gl(((e,t,n)=>{O().f7(e,t,n)})))}),new E().i(Zo,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,G:1});function $o(e,t,n){this.c9=null,this.c8=null,this.bE=null,this.bF=null,this.c9=e,this.c8=t;var r=n.b()?J():new Nu(n.x()+`:`+e);this.bE=r.b()?e:r.x(),this.bF=n.b()?J():new Nu(Ni().gB(n.x()))}x=$o.prototype=new Ai,x.constructor=$o,new E().i($o,`com.raquo.laminar.keys.SvgAttr`,{c5:1,G:1});function es(){}x=es.prototype=new w,x.constructor=es,x.az=(function(e){}),new E().i(es,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ca:1,S:1});function ts(e,t){if(this.dq=null,this.dq=e,t===null)throw Fl(new Il)}x=ts.prototype=new w,x.constructor=ts,x.az=(function(e){var t=Pr(),n=(()=>{this.dq.c(e)});if(Pr(),t.O)n();else{t.O=!0;try{n()}finally{t.O=!1,jr(t)}}}),new E().i(ts,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cb:1,S:1});function ns(){}x=ns.prototype=new w,x.constructor=ns,new E().i(ns,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cd:1,cc:1});var rs;function is(){return rs||=new ns,rs}function as(e,t){if(this.dr=null,this.dr=e,t===null)throw Fl(new Il)}x=as.prototype=new w,x.constructor=as,x.fD=(function(e){return this.dr.c(e)}),new E().i(as,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cg:1,ce:1});function os(e){e.eG(new Gr(new ml((()=>{throw H(new U,`Attempting to use owner of unmounted element: `+uo(O().fQ(e.bt(),(O(),$())),``,` > `,``))}))))}function ss(e,t,n){return e.cd=t,e}function cs(){this.cd=null}x=cs.prototype=new w,x.constructor=cs;function ls(){}ls.prototype=x,x.cz=(function(){return this.cd}),x.cs=(function(e){var t=this.fG();return e.S(new K((e=>{e.az(t)}))),t}),x.fG=(function(){return new vu(this,O().fL(this))}),new E().i(cs,`com.raquo.laminar.tags.HtmlTag`,{ad:1,a4:1});function us(e,t){this.dx=null,this.dx=e}x=us.prototype=new w,x.constructor=us,new E().i(us,`com.raquo.laminar.tags.SvgTag`,{co:1,a4:1});function ds(){}x=ds.prototype=new w,x.constructor=ds,x.bT=(function(e){return e}),x.bQ=(function(e){return e}),new E().i(ds,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cx:1,a2:1});function fs(e,t){return e.cf=t,e.fs(),e}function ps(){this.cf=null,this.ce=null,this.cg=!1}x=ps.prototype=new w,x.constructor=ps;function ms(){}ms.prototype=x,x.h0=(function(){return this.cg||=(this.ce=new ec(this.cf,new W((e=>void 0)),void 0),!0),this.ce}),x.l=(function(e,t){var n=this.h0().cs(new Z([]));return e.S(new W((e=>{e.c(this).az(n)}))),t.S(new W((e=>{e.az(n)}))),n});function hs(){this.ch=null,gs=this,this.ch=br(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}x=hs.prototype=new w,x.constructor=hs,x.fS=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=M().fF(this.ch,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.ch.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new E().i(hs,`java.lang.Character$`,{cE:1,a:1});var gs;function _s(){return gs||=new hs,gs}function vs(){}x=vs.prototype=new w,x.constructor=vs,x.bq=(function(e){throw new Ou(`For input string: "`+e+`"`)}),x.gu=(function(e,t,n){e===null&&bs().bq(e);var r=e.length;r===0&&bs().bq(e);var i=_s(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&bs().bq(e);var l=0;for(l=0;c!==r;){var u=i.fS(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&bs().bq(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&bs().bq(e),(l^s)-s|0}),new E().i(vs,`java.lang.Integer$`,{cJ:1,a:1});var ys;function bs(){return ys||=new vs,ys}function xs(){}x=xs.prototype=new w,x.constructor=xs;function Ss(e){return e instanceof xs||typeof e==`number`||e instanceof S}function Cs(e,t,n,r,i){this.aM=null,this.aV=null,this.aN=null,this.aO=0,this.aL=0,this.aM=e,this.aV=t,this.aN=n,this.aO=r,this.aL=i}x=Cs.prototype=new w,x.constructor=Cs,x.e=(function(e){return e instanceof Cs&&this.aN===e.aN&&this.aO===e.aO&&this.aL===e.aL&&this.aM===e.aM&&this.aV===e.aV}),x.r=(function(){var e=``;return this.aM!==`<jscode>`&&(e=``+e+this.aM+`.`),e=``+e+this.aV,this.aN===null?e+=`(Unknown Source)`:(e=e+`(`+this.aN,this.aO>=0&&(e=e+`:`+this.aO,this.aL>=0&&(e=e+`:`+this.aL)),e+=`)`),e}),x.m=(function(){return q(this.aM)^q(this.aV)^q(this.aN)^this.aO^this.aL});var ws=new E().i(Cs,`java.lang.StackTraceElement`,{an:1,a:1});function Ts(){}x=Ts.prototype=new w,x.constructor=Ts,x.gC=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Bn(e.a[a]),a=1+a|0;return i}),new E().i(Ts,`java.lang.String$`,{cT:1,a:1});var Es;function Ds(){return Es||=new Ts,Es}function R(e,t,n,r,i){return e.ea=t,e.eb=i,i&&e.g8(),e}var Os=class extends Error{constructor(){super(),this.ea=null,this.eb=!1,this.e9=null,this.bH=null}bn(){return this.ea}g8(){var e=this instanceof $u?this.Q:this;return this.e9=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gl(){return this.bH===null&&(this.bH=this.eb?Sa().g7(this.e9):new(ws.r()).C(0)),this.bH}r(){var e=Pn(this),t=this.bn();return t===null?e:e+`: `+t}m(){return er.prototype.m.call(this)}e(e){return er.prototype.e.call(this,e)}get message(){var e=this.bn();return e===null?``:e}get name(){return Pn(this)}toString(){return this.r()}};function ks(){this.ec=null,As=this,this.ec=new Ho(Da().e7)}x=ks.prototype=new w,x.constructor=ks,x.gF=(function(){return this.ec.cp}),new E().i(ks,`scala.Console$`,{d4:1,dU:1});var As;function js(){return As||=new ks,As}function Ms(){}x=Ms.prototype=new $a,x.constructor=Ms;function Ns(){}Ns.prototype=x,x.h9=(function(e){if(e===null)return null;if(e.a.length===0){var t=Wu();return fd(),t.er}return new af(e)});function Ps(e,t){if(t===e)e.eB(uu().eS(t));else for(var n=t.h();n.p();)e.cr(n.k());return e}function Fs(){}x=Fs.prototype=new w,x.constructor=Fs;function Is(){}Is.prototype=x,x.r=(function(){return`<function0>`});function Ls(){}x=Ls.prototype=new w,x.constructor=Ls;function Rs(){}Rs.prototype=x,x.r=(function(){return`<function1>`});function zs(){}x=zs.prototype=new w,x.constructor=zs;function Bs(){}Bs.prototype=x,x.r=(function(){return`<function2>`});function Vs(){}x=Vs.prototype=new w,x.constructor=Vs;function Hs(){}Hs.prototype=x,x.r=(function(){return`<function3>`});function Us(e){this.bM=!1,this.bM=e}x=Us.prototype=new w,x.constructor=Us,x.r=(function(){return``+this.bM}),new E().i(Us,`scala.runtime.BooleanRef`,{e2:1,a:1});function Ws(e){this.b5=0,this.b5=e}x=Ws.prototype=new w,x.constructor=Ws,x.r=(function(){return``+this.b5}),new E().i(Ws,`scala.runtime.IntRef`,{e4:1,a:1});function Gs(){this.t=0,this.ez=0,this.fq=0,this.fp=0,Ks=this,this.t=q(`Seq`),this.ez=q(`Map`),this.fq=q(`Set`),this.fp=this.h4($(),this.ez)}x=Gs.prototype=new Wo,x.constructor=Gs,x.f6=(function(e){return vd(e)?this.gq(e,this.t):e instanceof Yd?this.gx(e,this.t):this.gE(e,this.t)}),new E().i(Gs,`scala.util.hashing.MurmurHash3$`,{ev:1,eu:1});var Ks;function z(){return Ks||=new Gs,Ks}var qs=class extends Os{};function Js(){this.bZ=null,this.cF=null,this.cG=null,Ys=this,this.bZ=uu().eC(F().ai(new(N.r()).C([]))),this.cF=new K((e=>{try{console.error(this.gh(e)+`
`+this.gk(e,`
`))}catch(e){var t=e instanceof Os?e:new $u(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cG=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $u?t.Q:t})),this.gJ(this.cF)}x=Js.prototype=new w,x.constructor=Js,x.gh=(function(e){try{var t=e.bn()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Nn(e).cw()+`: `+t}),x.gk=(function(e,t){try{return uo(gc().h9(e.gl()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.gJ=(function(e){this.bZ.cr(e)}),x.cC=(function(e){for(var t=this.bZ.h();t.p();){var n=t.k();try{n.c(e)}catch(e){var r=e instanceof Os?e:new $u(e),i=this.cG;if(n===null?i===null:n.e(i))throw r instanceof $u?r.Q:r;console.warn(`Error processing an unhandled error callback:`),Fo().gV(0,new ml((e=>(()=>{throw e instanceof $u?e.Q:e}))(r)))}}}),new E().i(Js,`com.raquo.airstream.core.AirstreamError$`,{bb:1,dS:1,dT:1});var Ys;function Xs(){return Ys||=new Js,Ys}function B(e,t,n){return new Yc(n.fD(t))}function Zs(e,t,n){return new ts(new K((e=>{(gi(),new pi(t,null,null)).S(new K((e=>(t=>{Hi().bO(e,t,void 0)}))(e)))})),Li())}function Qs(e,t,n){this.dn=null,this.dp=null,this.dm=null,this.dn=e,this.dp=t,this.dm=n}x=Qs.prototype=new w,x.constructor=Qs,x.az=(function(e){this.dm.fB(e,this.dn,this.dp)}),new E().i(Qs,`com.raquo.laminar.modifiers.KeySetter`,{c8:1,S:1,ch:1});function $s(e,t){if(this.cb=null,this.dt=null,this.du=null,this.dt=t,os(this),e===null)throw H(new U,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().gt(e,document))throw H(new U,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.du=e,this.gA()}x=$s.prototype=new w,x.constructor=$s,x.bS=(function(){return this.cb}),x.eG=(function(e){this.cb=e}),x.gA=(function(){return this.cb.eA(),Hi().bO(this,this.dt,void 0)}),x.bt=(function(){return this.du}),new E().i($s,`com.raquo.laminar.nodes.RootNode`,{cl:1,a3:1,ac:1});function ec(e,t,n){this.cd=null,this.dw=null,this.dw=e,ss(this,e,!1)}x=ec.prototype=new ls,x.constructor=ec,x.cz=(function(){return this.dw}),new E().i(ec,`com.raquo.laminar.tags.CustomHtmlTag`,{cn:1,ad:1,a4:1});function tc(){this.a4=null,this.aJ=null,this.dy=null,this.dz=!1,this.dA=null,this.dB=!1,this.dC=null,this.dD=!1,Xo(this,`size`,new ds)}x=tc.prototype=new Qo,x.constructor=tc,x.cx=(function(){return this.dz||=(this.dy=rc().q(`large`),!0),this.dy}),x.cy=(function(){return this.dB||=(this.dA=rc().q(`medium`),!0),this.dA}),x.cD=(function(){return this.dD||=(this.dC=rc().q(`small`),!0),this.dC}),new E().i(tc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cs:1,Z:1,G:1});var nc;function rc(){return nc||=new tc,nc}function ic(){this.a4=null,this.aJ=null,this.dE=null,this.dF=!1,this.dG=null,this.dJ=!1,this.dH=null,this.dI=!1,this.dK=null,this.dL=!1,Xo(this,`appearance`,new ds)}x=ic.prototype=new Qo,x.constructor=ic,x.b8=(function(){return this.dF||=(this.dE=oc().q(`accent`),!0),this.dE}),x.bl=(function(){return this.dJ||=(this.dG=oc().q(`filled`),!0),this.dG}),x.bm=(function(){return this.dI||=(this.dH=oc().q(`filled-outlined`),!0),this.dH}),x.bp=(function(){return this.dL||=(this.dK=oc().q(`outlined`),!0),this.dK}),new E().i(ic,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$`,{ct:1,Z:1,G:1});var ac;function oc(){return ac||=new ic,ac}function sc(){this.a4=null,this.aJ=null,this.dM=null,this.dN=!1,this.dO=null,this.dP=!1,this.dQ=null,this.dR=!1,this.dS=null,this.dT=!1,this.dU=null,this.dV=!1,Xo(this,`variant`,new ds)}x=sc.prototype=new Qo,x.constructor=sc,x.bj=(function(){return this.dN||=(this.dM=lc().q(`brand`),!0),this.dM}),x.bk=(function(){return this.dP||=(this.dO=lc().q(`danger`),!0),this.dO}),x.bo=(function(){return this.dR||=(this.dQ=lc().q(`neutral`),!0),this.dQ}),x.bw=(function(){return this.dT||=(this.dS=lc().q(`success`),!0),this.dS}),x.bx=(function(){return this.dV||=(this.dU=lc().q(`warning`),!0),this.dU}),new E().i(sc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cu:1,Z:1,G:1});var cc;function lc(){return cc||=new sc,cc}function uc(){this.cf=null,this.ce=null,this.cg=!1,this.e2=null,this.e3=!1,this.dW=null,this.dX=!1,this.e0=null,this.e1=!1,this.dY=null,this.dZ=!1,this.e4=null,this.e5=!1,fs(this,`wa-tag`)}x=uc.prototype=new ms,x.constructor=uc,x.s=(function(){return this.e3||=(this.e2=lc(),!0),this.e2}),x.u=(function(){return this.dX||=(this.dW=oc(),!0),this.dW}),x.a0=(function(){return this.e1||=(this.e0=rc(),!0),this.e0}),x.cA=(function(){return this.dZ||=(this.dY=(G(),Xo(new Zo,`pill`,Ci().c6)),!0),this.dY}),x.cE=(function(){return this.e5||=(this.e4=(G(),Xo(new Zo,`with-remove`,Ci().c6)),!0),this.e4}),x.fs=(function(){return jn}),new E().i(uc,`io.github.nguyenyou.webawesome.laminar.Tag$`,{cw:1,cy:1,cv:1});var dc;function V(){return dc||=new uc,dc}function fc(e){if(e.aj.Z)return e.aj.Q().cw()+`[]`;for(var t=e.aj.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function pc(e){this.ci=null,this.aj=e}x=pc.prototype=new w,x.constructor=pc,x.r=(function(){return(this.aj.Y?`interface `:this.aj.X?``:`class `)+this.aj.N}),x.cw=(function(){return this.ci===null&&(this.ci=fc(this)),this.ci}),new E().i(pc,`java.lang.Class`,{cF:1,a:1,L:1});function H(e,t){return R(e,t,null,!0,!0),e}var U=class extends Os{};new E().i(U,`java.lang.Exception`,{K:1,s:1,a:1});function mc(){this.fl=null,hc=this,su(),this.fl=Oc()}x=mc.prototype=new Ns,x.constructor=mc,new E().i(mc,`scala.Predef$`,{de:1,d7:1,d8:1});var hc;function gc(){return hc||=new mc,hc}function _c(e,t){return e.bK=t,e}function vc(){this.bK=null}x=vc.prototype=new w,x.constructor=vc;function yc(){}yc.prototype=x,x.bU=(function(e){return this.bK.cv(e,ld())}),x.bP=(function(e){return this.bK.cv(e,ld())});function bc(e,t){return new Zl(e).fK(t)}function xc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Tc().I:new eu(e,r,i)}function Sc(e,t){for(var n=t.h();e.p();)if(!n.p()||!P().F(e.k(),n.k()))return!1;return!n.p()}function Cc(){this.I=null,wc=this,this.I=new ql}x=Cc.prototype=new w,x.constructor=Cc,new E().i(Cc,`scala.collection.Iterator$`,{dq:1,a:1,Y:1});var wc;function Tc(){return wc||=new Cc,wc}function Ec(){}x=Ec.prototype=new w,x.constructor=Ec,new E().i(Ec,`scala.collection.immutable.Map$`,{dG:1,a:1,dv:1});var Dc;function Oc(){return Dc||=new Ec,Dc}function kc(e){this.es=null,this.es=e}x=kc.prototype=new Is,x.constructor=kc,x.aB=(function(){return(0,this.es)()}),new E().i(kc,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{dY:1,b6:1,ap:1});function W(e){this.et=null,this.et=e}x=W.prototype=new Rs,x.constructor=W,x.c=(function(e){return(0,this.et)(e)}),new E().i(W,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{dZ:1,b7:1,e:1});var Ac=new E().i(0,`scala.runtime.Nothing$`,{e5:1,s:1,a:1});function jc(){}x=jc.prototype=new w,x.constructor=jc,x.gf=(function(e){return(t=>e.c(t))}),new E().i(jc,`scala.scalajs.js.Any$`,{eb:1,ec:1,ed:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(){}x=Pc.prototype=new Is,x.constructor=Pc;function Fc(){}Fc.prototype=x;function Ic(){}x=Ic.prototype=new Rs,x.constructor=Ic;function Lc(){}Lc.prototype=x;function Rc(){}x=Rc.prototype=new Bs,x.constructor=Rc;function zc(){}zc.prototype=x;function Bc(){}x=Bc.prototype=new Hs,x.constructor=Bc;function Vc(){}Vc.prototype=x;function Hc(e,t,n,r){if(this.cH=null,r===null)throw Fl(new Il);this.cH=void 0}x=Hc.prototype=new w,x.constructor=Hc,x.r=(function(){return Sr(this)}),new E().i(Hc,`com.raquo.airstream.core.Observer$$anon$8`,{bf:1,bg:1,bc:1,bd:1});function Uc(e){if(this.cT=null,this.cU=!1,this.fc=null,e===null)throw Fl(new Il);Ei(this)}x=Uc.prototype=new w,x.constructor=Uc,x.gZ=(function(){return this.cU||=(this.cT=new us(`svg`,!1),!0),this.cT}),new E().i(Uc,`com.raquo.laminar.api.Laminar$svg$`,{bz:1,c2:1,bI:1,bK:1});function Wc(){this.d=null,Gc=this,this.d=new Cd}x=Wc.prototype=new w,x.constructor=Wc,new E().i(Wc,`com.raquo.laminar.api.package$`,{bC:1,a9:1,aa:1,a8:1});var Gc;function G(){return Gc||=new Wc,Gc}function Kc(e,t,n){return e.an=t,e.ao=n,e}function qc(){this.an=null,this.ao=null}x=qc.prototype=new Ai,x.constructor=qc;function Jc(){}Jc.prototype=x,x.q=(function(e){return new Qs(this,Ln(e),new gl(((e,t,n)=>{O().f8(e,t,n)})))});function Yc(e){this.dv=null,this.cc=null,this.dv=J(),this.cc=O().fN(e)}x=Yc.prototype=new w,x.constructor=Yc,x.f9=(function(e){this.dv=e}),x.fb=(function(e){}),x.az=(function(e){Hi().bO(e,this,void 0)}),x.h2=(function(){return this.cc.data}),x.bt=(function(){return this.cc}),new E().i(Yc,`com.raquo.laminar.nodes.TextNode`,{cm:1,a3:1,S:1,ab:1});function Xc(){}x=Xc.prototype=new w,x.constructor=Xc;function Zc(){}Zc.prototype=x;function Qc(e,t){return e===t}function $c(e){return e?1231:1237}var el=new E().i(0,`java.lang.Boolean`,{cC:1,a:1,N:1,L:1},(e=>typeof e==`boolean`));function tl(e){return e}function nl(e,t){return t instanceof Mn&&e===t.c}var rl=new E().i(0,`java.lang.Character`,{aj:1,a:1,N:1,L:1},(e=>e instanceof Mn)),il=class extends U{};function al(){this.o=null,this.o=``}x=al.prototype=new w,x.constructor=al,x.fz=(function(e){var t=Ds().gC(e,0,e.a.length);return this.o=``+this.o+t,this}),x.r=(function(){return this.o}),x.g=(function(){return this.o.length}),x.eE=(function(e){return this.o.charCodeAt(e)}),new E().i(al,`java.lang.StringBuilder`,{cU:1,a5:1,ah:1,a:1});function ol(){}x=ol.prototype=new w,x.constructor=ol,x.r=(function(){return`<function1>`}),x.fC=(function(e){throw new Vl(e)}),x.c=(function(e){this.fC(e)}),new E().i(ol,`scala.PartialFunction$$anon$1`,{dd:1,e:1,g:1,a:1});function sl(){}x=sl.prototype=new w,x.constructor=sl;function cl(){}cl.prototype=x,x.y=(function(){return-1}),x.aQ=(function(e,t,n,r){return fo(this,e,t,n,r)}),x.h=(function(){return this}),x.bR=(function(e){return this.bv(e,-1)}),x.bv=(function(e,t){return xc(this,e,t)}),x.r=(function(){return`<iterator>`});function ll(e,t){return e.bL=t,e}function ul(){this.bL=null}x=ul.prototype=new w,x.constructor=ul;function dl(){}dl.prototype=x,x.eC=(function(e){return this.bL.bP(e)}),x.eS=(function(e){return this.bL.bU(e)}),x.bP=(function(e){return this.eC(e)}),x.bU=(function(e){return this.eS(e)});function fl(e){return e.aD(0)===0}function pl(e,t){var n=e.y();if(n!==-1){var r=t.y();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Sc(e.h(),t)}function ml(e){this.ew=null,this.ew=e}x=ml.prototype=new Fc,x.constructor=ml,x.aB=(function(){return(0,this.ew)()}),new E().i(ml,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{ei:1,eh:1,b6:1,ap:1});function K(e){this.ex=null,this.ex=e}x=K.prototype=new Lc,x.constructor=K,x.c=(function(e){return(0,this.ex)(e)}),new E().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{ek:1,ej:1,b7:1,e:1});function hl(e){this.fo=null,this.fo=e}x=hl.prototype=new zc,x.constructor=hl,new E().i(hl,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{em:1,el:1,e0:1,d5:1});function gl(e){this.ey=null,this.ey=e}x=gl.prototype=new Vc,x.constructor=gl,x.fB=(function(e,t,n){return(0,this.ey)(e,t,n)}),new E().i(gl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eo:1,en:1,e1:1,d6:1});function _l(e){e.ca=new ii(new ml((()=>{e.aK.eA()})),new ml((()=>{e.aK.fO()})))}function vl(e,t){bl(e,e.bG,t)&&xl(e,t)}function yl(e,t){var n=e.bG;e.bG=t,bl(e,n,t)||xl(e,t)}function bl(e,t,n){var r=!t.b()&&!t.x().bS().C.b(),i=!n.b()&&!n.x().bS().C.b();return r&&!i}function xl(e,t){Sl(e,t.b()?J():new Nu(t.x().bS()))}function Sl(e,t){if(t.b())e.ca.fI();else{var n=t.x();e.ca.gS(n)}}function Cl(){}x=Cl.prototype=new Zc,x.constructor=Cl;function wl(){}wl.prototype=x;var Tl=class extends il{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Tl,`java.lang.ArithmeticException`,{cB:1,O:1,K:1,s:1,a:1});var El=new E().i(0,`java.lang.Byte`,{cD:1,R:1,a:1,N:1,L:1},(e=>Kn(e)));function Dl(e,t){return R(e,t,null,!0,!0),e}function Ol(e){return R(e,null,null,!0,!0),e}var kl=class extends il{};new E().i(kl,`java.lang.IllegalArgumentException`,{al:1,O:1,K:1,s:1,a:1});function Al(e,t){return R(e,t,null,!0,!0),e}function jl(e,t){return R(e,`Index out of range: `+t,null,!0,!0),e}var Ml=class extends il{};new E().i(Ml,`java.lang.IndexOutOfBoundsException`,{cH:1,O:1,K:1,s:1,a:1});function Nl(){}x=Nl.prototype=new Zc,x.constructor=Nl,new E().i(Nl,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cL:1,ag:1,ae:1,ai:1,af:1});function Pl(e,t){return R(e,t,null,!0,!0),e}function Fl(e){return R(e,null,null,!0,!0),e}var Il=class extends il{};new E().i(Il,`java.lang.NullPointerException`,{cM:1,O:1,K:1,s:1,a:1});var Ll=new E().i(0,`java.lang.Short`,{cP:1,R:1,a:1,N:1,L:1},(e=>qn(e))),Rl=class extends il{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Rl,`java.lang.UnsupportedOperationException`,{cX:1,O:1,K:1,s:1,a:1});var zl=class extends il{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(zl,`java.util.NoSuchElementException`,{d1:1,O:1,K:1,s:1,a:1});function Bl(e){if(!e.ee){if(e.bI===null)var t=`null`;else{var n=F().fx(e.bI),r=n===null?`of a JS class`:`of class `+n.aj.N;try{var t=e.bI+` (`+r+`)`}catch{var t=`an instance `+r}}e.ed=t,e.ee=!0}return e.ed}var Vl=class extends il{constructor(e){super(),this.bI=null,this.ed=null,this.ee=!1,this.bI=e,R(this,null,null,!0,!0)}bn(){return Bl(this)}};new E().i(Vl,`scala.MatchError`,{d9:1,O:1,K:1,s:1,a:1});function Hl(){}x=Hl.prototype=new w,x.constructor=Hl;function Ul(){}Ul.prototype=x,x.bs=(function(){return new Wl(this)}),x.b=(function(){return this===J()}),x.y=(function(){return!this.b()|0}),x.h=(function(){return this.b()?Tc().I:new Jl(this.x())});function Wl(e){if(this.aW=0,this.ei=0,this.eh=null,e===null)throw Fl(new Il);this.eh=e,this.aW=0,this.ei=e.af()}x=Wl.prototype=new cl,x.constructor=Wl,x.p=(function(){return this.aW<this.ei}),x.k=(function(){var e=this.eh.ag(this.aW);return this.aW=1+this.aW|0,e}),new E().i(Wl,`scala.Product$$anon$1`,{df:1,P:1,b:1,c:1,Q:1});function Gl(e){this.bK=null,_c(this,e)}x=Gl.prototype=new yc,x.constructor=Gl,new E().i(Gl,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dl:1,dk:1,a:1,Y:1,a1:1});function Kl(e){return uo(e,e.aC()+`(`,`, `,`)`)}function ql(){}x=ql.prototype=new cl,x.constructor=ql,x.p=(function(){return!1}),x.gD=(function(){throw new zl(`next on empty iterator`)}),x.y=(function(){return 0}),x.k=(function(){this.gD()}),x.bv=(function(e,t){return this}),new E().i(ql,`scala.collection.Iterator$$anon$19`,{dr:1,P:1,b:1,c:1,Q:1});function Jl(e){this.el=null,this.aZ=!1,this.el=e,this.aZ=!1}x=Jl.prototype=new cl,x.constructor=Jl,x.p=(function(){return!this.aZ}),x.k=(function(){return this.aZ?Tc().I.k():(this.aZ=!0,this.el)}),x.bv=(function(e,t){return this.aZ||e>0||t===0?Tc().I:this}),new E().i(Jl,`scala.collection.Iterator$$anon$20`,{ds:1,P:1,b:1,c:1,Q:1});function Yl(e){for(;;)if(e.z instanceof Zl){var t=e.z;if(e.z=t.z,e.a6=t.a6,t.K!==null){e.J===null&&(e.J=t.J);var n=t.J;n===null&&Oo().bX(),n.b0=e.K,e.K=t.K}}else return}function Xl(e){for(;;)if(e.K===null)return e.z=null,e.J=null,!1;else{if(e.z=e.K.gp(),e.J===e.K){var t=e.J;t===null&&Oo().bX(),e.J=t.b0}if(e.K=e.K.b0,Yl(e),e.a6)return!0;if(!(e.z!==null&&e.z.p()))continue;return e.a6=!0,!0}}function Zl(e){this.z=null,this.K=null,this.J=null,this.a6=!1,this.z=e,this.K=null,this.J=null,this.a6=!1}x=Zl.prototype=new cl,x.constructor=Zl,x.p=(function(){return this.a6?!0:this.z===null?!1:this.z.p()?(this.a6=!0,!0):Xl(this)}),x.k=(function(){if(this.p()){this.a6=!1;var e=this.z;return e===null&&Oo().bX(),e.k()}return Tc().I.k()}),x.fK=(function(e){var t=new po(e,null);if(this.K===null)this.K=t,this.J=t;else{var n=this.J;n===null&&Oo().bX(),n.b0=t,this.J=t}return this.z===null&&(this.z=Tc().I),this}),new E().i(Zl,`scala.collection.Iterator$ConcatIterator`,{av:1,P:1,b:1,c:1,Q:1});function Ql(e){for(;e.Y>0;)e.a7.p()?(e.a7.k(),e.Y=e.Y-1|0):e.Y=0}function $l(e,t){if(e.D<0)return-1;var n=e.D-t|0;return n<0?0:n}function eu(e,t,n){this.a7=null,this.D=0,this.Y=0,this.a7=e,this.D=n,this.Y=t}x=eu.prototype=new cl,x.constructor=eu,x.y=(function(){var e=this.a7.y();if(e<0)return-1;var t=e-this.Y|0,n=t<0?0:t;if(this.D<0)return n;var r=this.D;return r<n?r:n}),x.p=(function(){return Ql(this),this.D!==0&&this.a7.p()}),x.k=(function(){return Ql(this),this.D>0?(this.D=this.D-1|0,this.a7.k()):this.D<0?this.a7.k():Tc().I.k()}),x.bv=(function(e,t){var n=e>0?e:0;if(t<0)var r=$l(this,n);else if(t<=n)var r=0;else if(this.D<0)var r=t-n|0;else var i=$l(this,n),a=t-n|0,r=i<a?i:a;var o=this.Y+n|0;return r===0?Tc().I:o<0?(this.Y=2147483647,this.D=0,bc(this,new kc((()=>new eu(this.a7,o-2147483647|0,r))))):(this.Y=o,this.D=r,this)}),new E().i(eu,`scala.collection.Iterator$SliceIterator`,{du:1,P:1,b:1,c:1,Q:1});function tu(e,t){if(t<0)throw Al(new Ml,``+t);var n=e.fX(t);if(n.b())throw Al(new Ml,``+t);return n.T()}function nu(e,t){return yd(t)?ru(e,e,t):pl(e,t)}function ru(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&P().F(i.T(),r.T())){var a=i.G(),o=r.G();i=a,r=o;continue}return i.b()&&r.b()}}function iu(e){if(this.b2=null,e===null)throw Fl(new Il);this.b2=e}x=iu.prototype=new cl,x.constructor=iu,x.p=(function(){return!this.b2.b()}),x.k=(function(){var e=this.b2.T();return this.b2=this.b2.G(),e}),new E().i(iu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dz:1,P:1,b:1,c:1,Q:1});function au(){ou=this,$(),$()}x=au.prototype=new w,x.constructor=au,x.bP=(function(e){return $().f1(e)}),x.bU=(function(e){return $().f1(e)}),new E().i(au,`scala.collection.immutable.List$`,{dF:1,a:1,Y:1,a1:1,az:1});var ou;function su(){return ou||=new au,ou}function cu(){this.bL=null,ll(this,mu())}x=cu.prototype=new dl,x.constructor=cu,new E().i(cu,`scala.collection.mutable.Buffer$`,{dM:1,dw:1,a:1,Y:1,a1:1});var lu;function uu(){return lu||=new cu,lu}function du(e){this.ev=null,this.b6=0,this.eu=0,this.ev=e,this.b6=0,this.eu=e.af()}x=du.prototype=new cl,x.constructor=du,x.p=(function(){return this.b6<this.eu}),x.k=(function(){var e=this.ev.ag(this.b6);return this.b6=1+this.b6|0,e}),new E().i(du,`scala.runtime.ScalaRunTime$$anon$1`,{e9:1,P:1,b:1,c:1,Q:1});function fu(){}x=fu.prototype=new w,x.constructor=fu,x.bP=(function(e){return this.eT(e)}),x.eT=(function(e){return Ps(hf(new gf),e).f4()}),x.bU=(function(e){return this.eT(e)}),new E().i(fu,`scala.scalajs.js.WrappedArray$`,{ef:1,az:1,a:1,Y:1,a1:1});var pu;function mu(){return pu||=new fu,pu}var hu=class e extends qs{constructor(e,t){super(),this.aF=null,this.aE=0,this.aF=e,this.aE=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bs(){return new Wl(this)}m(){var e=-889275714;return e=I().n(e,q(`TransactionDepthExceeded`)),e=I().n(e,I().w(this.aF)),e=I().n(e,this.aE),I().A(e,2)}e(t){if(this===t)return!0;if(t instanceof e){if(this.aE===t.aE){var n=this.aF,r=t.aF;return n===null?r===null:n===r}return!1}return!1}af(){return 2}ah(){return`TransactionDepthExceeded`}ag(e){if(e===0)return this.aF;if(e===1)return this.aE;throw Al(new Ml,``+e)}r(){return`TransactionDepthExceeded: `+this.aF+`; maxDepth: `+this.aE}};new E().i(hu,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a7:1,ba:1,s:1,a:1,d:1,T:1});function gu(e){this.an=null,this.ao=null,this.dd=null,this.de=!1,Kc(this,e,$())}x=gu.prototype=new Jc,x.constructor=gu,x.fJ=(function(){return this.de||=(this.dd=this.q(`column`),!0),this.dd}),new E().i(gu,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bQ:1,W:1,G:1,U:1,V:1,bU:1});function _u(e){this.an=null,this.ao=null,this.df=null,this.dg=!1,Kc(this,e,$())}x=_u.prototype=new Jc,x.constructor=_u,x.h8=(function(){return this.dg||=(this.df=this.q(`wrap`),!0),this.df}),new E().i(_u,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bR:1,W:1,G:1,U:1,V:1,bW:1});function vu(e,t){this.bG=null,this.aK=null,this.ca=null,this.ds=null,this.W=null,this.ds=e,this.W=t,this.bG=J(),os(this),_l(this)}x=vu.prototype=new w,x.constructor=vu,x.az=(function(e){Hi().bO(e,this,void 0)}),x.bS=(function(){return this.aK}),x.eG=(function(e){this.aK=e}),x.fb=(function(e){vl(this,e)}),x.f9=(function(e){yl(this,e)}),x.r=(function(){return`ReactiveHtmlElement(`+(this.W===null?`tag=`+this.ds.cz():this.W.outerHTML)+`)`}),x.bt=(function(){return this.W});var yu=new E().i(vu,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ck:1,a3:1,S:1,ab:1,ac:1,cj:1});function bu(e,t){return Object.is(e,t)}function xu(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Vn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Su=new E().i(0,`java.lang.Double`,{ak:1,R:1,a:1,N:1,L:1,X:1},(e=>typeof e==`number`)),Cu=new E().i(0,`java.lang.Float`,{cG:1,R:1,a:1,N:1,L:1,X:1},(e=>Yn(e))),wu=new E().i(0,`java.lang.Integer`,{cI:1,R:1,a:1,N:1,L:1,X:1},(e=>Jn(e)));function Tu(e,t,n){if(n instanceof S){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Eu(e,t){return e^t}var Du=new E().i(0,`java.lang.Long`,{am:1,R:1,a:1,N:1,L:1,X:1},(e=>e instanceof S)),Ou=class extends kl{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Ou,`java.lang.NumberFormatException`,{cN:1,al:1,O:1,K:1,s:1,a:1});function q(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function ku(e,t){return e===t}var Au=new E().i(0,`java.lang.String`,{cS:1,a:1,N:1,a5:1,L:1,X:1},(e=>typeof e==`string`));function ju(){}x=ju.prototype=new Ul,x.constructor=ju,x.m=(function(){return 2433880}),x.r=(function(){return`None`}),x.af=(function(){return 0}),x.ah=(function(){return`None`}),x.ag=(function(e){throw jl(new Ml,e)}),x.gg=(function(){throw new zl(`None.get`)}),x.x=(function(){this.gg()}),new E().i(ju,`scala.None$`,{da:1,aq:1,b:1,d:1,T:1,a:1});var Mu;function J(){return Mu||=new ju,Mu}function Nu(e){this.aX=null,this.aX=e}x=Nu.prototype=new Ul,x.constructor=Nu,x.m=(function(){return z().f2(this,1323286827,!0)}),x.e=(function(e){return this===e||e instanceof Nu&&P().F(this.aX,e.aX)}),x.r=(function(){return F().ft(this)}),x.af=(function(){return 1}),x.ah=(function(){return`Some`}),x.ag=(function(e){if(e===0)return this.aX;throw jl(new Ml,e)}),x.x=(function(){return this.aX}),new E().i(Nu,`scala.Some`,{ar:1,aq:1,b:1,d:1,T:1,a:1});function Pu(){}x=Pu.prototype=new w,x.constructor=Pu;function Fu(){}Fu.prototype=x,x.y=(function(){return-1}),x.S=(function(e){lo(this,e)}),x.aQ=(function(e,t,n,r){return fo(this,e,t,n,r)}),x.aC=(function(){return this.aT()});function Y(e){this.bJ=null,this.X=0,this.aY=0,this.bJ=e,this.X=0,this.aY=Ha().aS(this.bJ)}x=Y.prototype=new cl,x.constructor=Y,x.y=(function(){return this.aY-this.X|0}),x.p=(function(){return this.X<this.aY}),x.k=(function(){this.X>=Ha().aS(this.bJ)&&Tc().I.k();var e=F().aR(this.bJ,this.X);return this.X=1+this.X|0,e}),x.bR=(function(e){if(e>0){var t=this.X+e|0;if(t<0)var n=this.aY;else var r=this.aY,n=r<t?r:t;this.X=n}return this}),new E().i(Y,`scala.collection.ArrayOps$ArrayIterator`,{dj:1,P:1,b:1,c:1,Q:1,a:1});function Iu(e,t){return t<0?0:t>e.P?e.P:t}function Lu(e){this.ek=null,this.a5=0,this.P=0,this.ek=e,this.a5=0,this.P=e.g()}x=Lu.prototype=new cl,x.constructor=Lu,x.y=(function(){return this.P}),x.p=(function(){return this.P>0}),x.k=(function(){if(this.P>0){var e=this.ek.i(this.a5);return this.a5=1+this.a5|0,this.P=this.P-1|0,e}return Tc().I.k()}),x.bR=(function(e){if(e>0){this.a5=this.a5+e|0;var t=this.P-e|0;this.P=t<0?0:t}return this}),x.bv=(function(e,t){var n=Iu(this,e),r=Iu(this,t)-n|0;return this.P=r<0?0:r,this.a5=this.a5+n|0,this}),new E().i(Lu,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dp:1,P:1,b:1,c:1,Q:1,a:1});function Ru(e){return e.ep||=(e.eo=new Wd(new(Ac.r()).C(0)),!0),e.eo}function zu(){this.fm=null,this.eo=null,this.ep=!1,Bu=this,this.fm=new Gl(this)}x=zu.prototype=new w,x.constructor=zu,x.gd=(function(e,t){return e instanceof Pd?e:this.h6(Za().eR(e,t))}),x.h6=(function(e){if(e===null)return null;if(e instanceof T)return new Wd(e);if(e instanceof or)return new Hd(e);if(e instanceof lr)return new Bd(e);if(e instanceof sr)return new Ud(e);if(e instanceof cr)return new Vd(e);if(e instanceof rr)return new zd(e);if(e instanceof ir)return new Rd(e);if(e instanceof ar)return new Gd(e);if(e instanceof nr)return new Ld(e);if(La(e,1))return new Kd(e);throw new Vl(e)}),x.cv=(function(e,t){return this.gd(e,t)}),new E().i(zu,`scala.collection.immutable.ArraySeq$`,{dD:1,a:1,au:1,as:1,at:1,ax:1});var Bu;function Vu(){return Bu||=new zu,Bu}function Hu(){this.fn=null,this.er=null,Uu=this,this.fn=new Gl(this),this.er=new af(new T(0))}x=Hu.prototype=new w,x.constructor=Hu,x.ge=(function(e,t){return this.gz(Za().eR(e,t))}),x.gz=(function(e){if(e===null)return null;if(e instanceof T)return new af(e);if(e instanceof or)return new nf(e);if(e instanceof lr)return new ef(e);if(e instanceof sr)return new rf(e);if(e instanceof cr)return new tf(e);if(e instanceof rr)return new $d(e);if(e instanceof ir)return new Qd(e);if(e instanceof ar)return new of(e);if(e instanceof nr)return new Zd(e);if(La(e,1))return new sf(e);throw new Vl(e)}),x.cv=(function(e,t){return this.ge(e,t)}),new E().i(Hu,`scala.collection.mutable.ArraySeq$`,{dK:1,a:1,au:1,as:1,at:1,ax:1});var Uu;function Wu(){return Uu||=new Hu,Uu}function Gu(e){this.an=null,this.ao=null,this.d9=null,this.da=!1,Kc(this,e,$())}x=Gu.prototype=new Jc,x.constructor=Gu,x.eQ=(function(){return this.da||=(this.d9=this.q(`flex`),!0),this.d9}),new E().i(Gu,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bO:1,W:1,G:1,U:1,V:1,bX:1,bT:1});function Ku(e){this.an=null,this.ao=null,this.db=null,this.dc=!1,Kc(this,e,$())}x=Ku.prototype=new Jc,x.constructor=Ku,x.fH=(function(){return this.dc||=(this.db=this.q(`center`),!0),this.db}),new E().i(Ku,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bP:1,W:1,G:1,U:1,V:1,bY:1,bV:1});function qu(e){this.an=null,this.ao=null,this.dh=null,this.di=!1,Kc(this,e,$())}x=qu.prototype=new Jc,x.constructor=qu,x.f3=(function(){return this.di||=(this.dh=Jo(this),!0),this.dh}),new E().i(qu,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bS:1,W:1,G:1,U:1,V:1,bZ:1,c0:1});function Ju(){}x=Ju.prototype=new wl,x.constructor=Ju;function Yu(){}Yu.prototype=x;function Xu(e){return e.aC()+`(<not computed>)`}function Zu(){}x=Zu.prototype=new w,x.constructor=Zu;function Qu(){}Qu.prototype=x;var $u=class e extends il{constructor(e){super(),this.Q=null,this.Q=e,R(this,null,null,!0,!0)}bn(){return Ln(this.Q)}ah(){return`JavaScriptException`}af(){return 1}ag(e){return e===0?this.Q:I().gr(e)}bs(){return new du(this)}m(){return z().f2(this,1744042595,!0)}e(t){return this===t||t instanceof e&&P().F(this.Q,t.Q)}};new E().i($u,`scala.scalajs.js.JavaScriptException`,{b8:1,O:1,K:1,s:1,a:1,T:1,d:1});function ed(e,t){typeof console<`u`&&(e.e6&&console.error?console.error(t):console.log(t))}function td(e){this.e6=!1,this.aU=null,this.e6=e,new Nl,this.aU=``}x=td.prototype=new Yu,x.constructor=td,x.gv=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aU=``+this.aU+t,t=``;else{var r=this.aU,i=t;ed(this,``+r+i.substring(0,n)),this.aU=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(td,`java.lang.JSConsoleBasedPrintStream`,{cK:1,cA:1,cz:1,ag:1,ae:1,ai:1,af:1,ah:1});function nd(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.G();i=a,r=o}}function rd(){this.b4=null}x=rd.prototype=new Qu,x.constructor=rd;function id(){}id.prototype=x,x.r=(function(){return this.b4}),x.e=(function(e){return this===e}),x.m=(function(){return Gn(this)});function ad(){}x=ad.prototype=new Fu,x.constructor=ad;function od(){}od.prototype=x,x.r=(function(){return Xu(this)});function sd(){this.b4=null,this.b4=`Any`,$()}x=sd.prototype=new id,x.constructor=sd,x.f5=(function(){return D.l()}),x.eY=(function(e){return new T(e)}),new E().i(sd,`scala.reflect.ManifestFactory$AnyManifest$`,{dW:1,b4:1,b3:1,a:1,b5:1,b0:1,d:1,b1:1,b2:1});var cd;function ld(){return cd||=new sd,cd}function ud(){this.b4=null,this.b4=`Object`,$()}x=ud.prototype=new id,x.constructor=ud,x.f5=(function(){return D.l()}),x.eY=(function(e){return new T(e)}),new E().i(ud,`scala.reflect.ManifestFactory$ObjectManifest$`,{dX:1,b4:1,b3:1,a:1,b5:1,b0:1,d:1,b1:1,b2:1});var dd;function fd(){return dd||=new ud,dd}function X(e,t){return e===t?!0:pd(t)&&t.cu(e)?e.bY(t):!1}function pd(e){return!!(e&&e.$classData&&e.$classData.n.f)}function md(){}x=md.prototype=new Fu,x.constructor=md;function hd(){}hd.prototype=x,x.b=(function(){return fl(this)}),x.bY=(function(e){return pl(this,e)}),x.cu=(function(e){return!0}),x.e=(function(e){return X(this,e)}),x.m=(function(){return z().f6(this)}),x.r=(function(){return Kl(this)});function gd(){}x=gd.prototype=new od,x.constructor=gd;function _d(){}_d.prototype=x;function vd(e){return!!(e&&e.$classData&&e.$classData.n.m)}function yd(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function bd(e,t){return e.b1=t,e}function xd(){this.b1=null}x=xd.prototype=new _d,x.constructor=xd;function Sd(){}Sd.prototype=x,x.i=(function(e){return this.b1.i(e)}),x.g=(function(){return this.b1.g()}),x.b=(function(){return this.b1.b()});function Cd(){this.cZ=null,this.d0=!1,this.cV=null,this.cW=!1,this.cX=null,this.cY=!1,this.d1=null,this.d2=!1,this.d3=null,this.d4=!1,this.d5=null,this.d6=!1,this.fe=null,this.fd=null,this.d7=null,this.d8=!1,wi(this),yi(this),_i(this),vi(this)}x=Cd.prototype=new w,x.constructor=Cd,x.eI=(function(){return this.d0||=(this.cZ=ss(new cs,`div`,!1),!0),this.cZ}),x.fw=(function(){return this.cW||=(this.cV=new Ku(`align-items`),!0),this.cV}),x.eH=(function(){return this.cY||=(this.cX=new Gu(`display`),!0),this.cX}),x.g9=(function(){return this.d2||=(this.d1=new gu(`flex-direction`),!0),this.d1}),x.ga=(function(){return this.d4||=(this.d3=new _u(`flex-wrap`),!0),this.d3}),x.eV=(function(){return this.d6||=(this.d5=new qu(`gap`),!0),this.d5}),x.gY=(function(){return this.d8||=(this.d7=new Uc(this),!0),this.d7}),new E().i(Cd,`com.raquo.laminar.api.package$$anon$1`,{bD:1,c1:1,bH:1,bM:1,bL:1,bN:1,bJ:1,bB:1,bx:1,bA:1,a9:1,aa:1,a8:1,by:1});function wd(e){this.b1=null,bd(this,e)}x=wd.prototype=new Sd,x.constructor=wd,x.aD=(function(e){var t=this.g();return t===e?0:t<e?-1:1}),x.y=(function(){return this.g()}),x.h=(function(){return new Lu(this)}),x.aT=(function(){return`IndexedSeqView`}),new E().i(wd,`scala.collection.IndexedSeqView$Id`,{dn:1,dy:1,dg:1,dh:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dB:1,k:1,dx:1,o:1,dm:1});function Td(){}x=Td.prototype=new hd,x.constructor=Td;function Ed(){}Ed.prototype=x;function Dd(e,t){return!kd(t)||e.g()===t.g()}function Od(e,t){if(kd(t)){if(e===t)return!0;var n=e.g(),r=n===t.g();if(r){var i=0,a=e.ct(),o=t.ct(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().F(e.i(i),t.i(i)),i=1+i|0;if(i<n&&r)for(var p=e.h().bR(i),m=t.h().bR(i);r&&p.p();)r=P().F(p.k(),m.k())}return r}return pl(e,t)}function kd(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Ad(){}x=Ad.prototype=new hd,x.constructor=Ad;function jd(){}jd.prototype=x;function Z(e){this.bN=null,this.bN=e}x=Z.prototype=new w,x.constructor=Z,x.cu=(function(e){return Dd(this,e)}),x.bY=(function(e){return Od(this,e)}),x.ct=(function(){return yo().eq}),x.h=(function(){return new Lu(new wd(this))}),x.aD=(function(e){var t=this.g();return t===e?0:t<e?-1:1}),x.y=(function(){return this.g()}),x.e=(function(e){return X(this,e)}),x.m=(function(){return z().f6(this)}),x.r=(function(){return Kl(this)}),x.b=(function(){return fl(this)}),x.S=(function(e){lo(this,e)}),x.aQ=(function(e,t,n,r){return fo(this,e,t,n,r)}),x.g=(function(){return this.bN.length|0}),x.i=(function(e){return this.bN[e]}),x.aC=(function(){return`WrappedVarArgs`}),x.c=(function(e){return this.i(e|0)}),new E().i(Z,`scala.scalajs.runtime.WrappedVarArgs`,{b9:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,I:1,x:1,p:1,q:1,a:1});function Md(){}x=Md.prototype=new jd,x.constructor=Md;function Nd(){}Nd.prototype=x,x.eB=(function(e){return Ps(this,e)});function Pd(){}x=Pd.prototype=new Ed,x.constructor=Pd;function Fd(){}Fd.prototype=x,x.aD=(function(e){var t=this.g();return t===e?0:t<e?-1:1}),x.y=(function(){return this.g()}),x.aT=(function(){return`IndexedSeq`}),x.cu=(function(e){return Dd(this,e)}),x.bY=(function(e){return Od(this,e)}),x.aC=(function(){return`ArraySeq`}),x.ct=(function(){return 2147483647});function Q(){}x=Q.prototype=new jd,x.constructor=Q;function Id(){}Id.prototype=x,x.aD=(function(e){var t=this.g();return t===e?0:t<e?-1:1}),x.y=(function(){return this.g()}),x.aT=(function(){return`IndexedSeq`}),x.aC=(function(){return`ArraySeq`}),x.e=(function(e){return e instanceof Q&&Ha().aS(this.R())!==Ha().aS(e.R())?!1:X(this,e)});function Ld(e){this.ap=null,this.ap=e}x=Ld.prototype=new Fd,x.constructor=Ld,x.g=(function(){return this.ap.a.length}),x.bh=(function(e){return this.ap.a[e]}),x.m=(function(){var e=z();return e.v(this.ap,e.t)}),x.e=(function(e){return e instanceof Ld?M().eO(this.ap,e.ap):X(this,e)}),x.h=(function(){return new Y(this.ap)}),x.i=(function(e){return this.bh(e)}),x.c=(function(e){return this.bh(e|0)}),new E().i(Ld,`scala.collection.immutable.ArraySeq$ofBoolean`,{aB:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Rd(e){this.aq=null,this.aq=e}x=Rd.prototype=new Fd,x.constructor=Rd,x.g=(function(){return this.aq.a.length}),x.b9=(function(e){return this.aq.a[e]}),x.m=(function(){var e=z();return e.v(this.aq,e.t)}),x.e=(function(e){return e instanceof Rd?M().eJ(this.aq,e.aq):X(this,e)}),x.h=(function(){return new Y(this.aq)}),x.i=(function(e){return this.b9(e)}),x.c=(function(e){return this.b9(e|0)}),new E().i(Rd,`scala.collection.immutable.ArraySeq$ofByte`,{aC:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function zd(e){this.a8=null,this.a8=e}x=zd.prototype=new Fd,x.constructor=zd,x.g=(function(){return this.a8.a.length}),x.ba=(function(e){return this.a8.a[e]}),x.m=(function(){var e=z();return e.v(this.a8,e.t)}),x.e=(function(e){return e instanceof zd?M().eK(this.a8,e.a8):X(this,e)}),x.h=(function(){return new Y(this.a8)}),x.aQ=(function(e,t,n,r){return new $d(this.a8).aQ(e,t,n,r)}),x.i=(function(e){return Xn(this.ba(e))}),x.c=(function(e){return Xn(this.ba(e|0))}),new E().i(zd,`scala.collection.immutable.ArraySeq$ofChar`,{aD:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Bd(e){this.ar=null,this.ar=e}x=Bd.prototype=new Fd,x.constructor=Bd,x.g=(function(){return this.ar.a.length}),x.bb=(function(e){return this.ar.a[e]}),x.m=(function(){var e=z();return e.v(this.ar,e.t)}),x.e=(function(e){if(e instanceof Bd){var t=this.ar,n=e.ar;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),x.h=(function(){return new Y(this.ar)}),x.i=(function(e){return this.bb(e)}),x.c=(function(e){return this.bb(e|0)}),new E().i(Bd,`scala.collection.immutable.ArraySeq$ofDouble`,{aE:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Vd(e){this.as=null,this.as=e}x=Vd.prototype=new Fd,x.constructor=Vd,x.g=(function(){return this.as.a.length}),x.bc=(function(e){return this.as.a[e]}),x.m=(function(){var e=z();return e.v(this.as,e.t)}),x.e=(function(e){if(e instanceof Vd){var t=this.as,n=e.as;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),x.h=(function(){return new Y(this.as)}),x.i=(function(e){return this.bc(e)}),x.c=(function(e){return this.bc(e|0)}),new E().i(Vd,`scala.collection.immutable.ArraySeq$ofFloat`,{aF:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Hd(e){this.at=null,this.at=e}x=Hd.prototype=new Fd,x.constructor=Hd,x.g=(function(){return this.at.a.length}),x.bd=(function(e){return this.at.a[e]}),x.m=(function(){var e=z();return e.v(this.at,e.t)}),x.e=(function(e){return e instanceof Hd?M().eL(this.at,e.at):X(this,e)}),x.h=(function(){return new Y(this.at)}),x.i=(function(e){return this.bd(e)}),x.c=(function(e){return this.bd(e|0)}),new E().i(Hd,`scala.collection.immutable.ArraySeq$ofInt`,{aG:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Ud(e){this.au=null,this.au=e}x=Ud.prototype=new Fd,x.constructor=Ud,x.g=(function(){return this.au.a.length>>>1|0}),x.be=(function(e){var t=this.au.a,n=e<<1;return C(t[n],t[n+1|0])}),x.m=(function(){var e=z();return e.v(this.au,e.t)}),x.e=(function(e){return e instanceof Ud?M().eM(this.au,e.au):X(this,e)}),x.h=(function(){return new Y(this.au)}),x.i=(function(e){return this.be(e)}),x.c=(function(e){return this.be(e|0)}),new E().i(Ud,`scala.collection.immutable.ArraySeq$ofLong`,{aH:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Wd(e){this.av=null,this.av=e}x=Wd.prototype=new Fd,x.constructor=Wd,x.g=(function(){return this.av.a.length}),x.i=(function(e){return this.av.a[e]}),x.m=(function(){var e=z();return e.v(this.av,e.t)}),x.e=(function(e){return e instanceof Wd?Za().eP(this.av,e.av):X(this,e)}),x.h=(function(){return new Y(this.av)}),x.c=(function(e){return this.i(e|0)}),new E().i(Wd,`scala.collection.immutable.ArraySeq$ofRef`,{aI:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Gd(e){this.aw=null,this.aw=e}x=Gd.prototype=new Fd,x.constructor=Gd,x.g=(function(){return this.aw.a.length}),x.bf=(function(e){return this.aw.a[e]}),x.m=(function(){var e=z();return e.v(this.aw,e.t)}),x.e=(function(e){return e instanceof Gd?M().eN(this.aw,e.aw):X(this,e)}),x.h=(function(){return new Y(this.aw)}),x.i=(function(e){return this.bf(e)}),x.c=(function(e){return this.bf(e|0)}),new E().i(Gd,`scala.collection.immutable.ArraySeq$ofShort`,{aJ:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Kd(e){this.aP=null,this.aP=e}x=Kd.prototype=new Fd,x.constructor=Kd,x.g=(function(){return this.aP.a.length}),x.bg=(function(e){}),x.m=(function(){var e=z();return e.v(this.aP,e.t)}),x.e=(function(e){return e instanceof Kd?this.aP.a.length===e.aP.a.length:X(this,e)}),x.h=(function(){return new Y(this.aP)}),x.i=(function(e){this.bg(e)}),x.c=(function(e){this.bg(e|0)}),new E().i(Kd,`scala.collection.immutable.ArraySeq$ofUnit`,{aK:1,H:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function qd(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.G();a=o,i=s;continue}return-1}}function Jd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&P().F(i.T(),r.T())){var s=i.G(),c=r.G();i=s,r=c;continue}return a&&o}}function Yd(){}x=Yd.prototype=new Ed,x.constructor=Yd;function Xd(){}Xd.prototype=x,x.i=(function(e){return tu(this,e)}),x.bY=(function(e){return nu(this,e)}),x.aT=(function(){return`LinearSeq`}),x.h=(function(){return new iu(this)}),x.fr=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new cf(e.T(),this),n=t,r=e.G();!r.b();){var i=new cf(r.T(),this);n.b3=i,n=i,r=r.G()}return t}),x.b=(function(){return this===$()}),x.f1=(function(e){if(e instanceof Yd)return this.fr(e);if(e.y()===0)return this;var t=e.h();if(t.p()){for(var n=new cf(t.k(),this),r=n;t.p();){var i=new cf(t.k(),this);r.b3=i,r=i}return n}return this}),x.S=(function(e){for(var t=this;!t.b();)e.c(t.T()),t=t.G()}),x.g=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.G();return t}),x.aD=(function(e){return e<0?1:qd(this,e,0,this)}),x.aC=(function(){return`List`}),x.e=(function(e){return e instanceof Yd?Jd(this,this,e):X(this,e)}),x.fX=(function(e){return nd(this,e,this)}),x.c=(function(e){return tu(this,e|0)});function Zd(e){this.a9=null,this.a9=e}x=Zd.prototype=new Id,x.constructor=Zd,x.g=(function(){return this.a9.a.length}),x.bh=(function(e){return this.a9.a[e]}),x.m=(function(){var e=z();return e.v(this.a9,e.t)}),x.e=(function(e){return e instanceof Zd?M().eO(this.a9,e.a9):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.a9)}),x.R=(function(){return this.a9}),x.i=(function(e){return this.bh(e)}),x.c=(function(e){return this.bh(e|0)}),new E().i(Zd,`scala.collection.mutable.ArraySeq$ofBoolean`,{aN:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function Qd(e){this.aa=null,this.aa=e}x=Qd.prototype=new Id,x.constructor=Qd,x.g=(function(){return this.aa.a.length}),x.b9=(function(e){return this.aa.a[e]}),x.m=(function(){var e=z();return e.v(this.aa,e.t)}),x.e=(function(e){return e instanceof Qd?M().eJ(this.aa,e.aa):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.aa)}),x.R=(function(){return this.aa}),x.i=(function(e){return this.b9(e)}),x.c=(function(e){return this.b9(e|0)}),new E().i(Qd,`scala.collection.mutable.ArraySeq$ofByte`,{aO:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function $d(e){this.L=null,this.L=e}x=$d.prototype=new Id,x.constructor=$d,x.g=(function(){return this.L.a.length}),x.ba=(function(e){return this.L.a[e]}),x.m=(function(){var e=z();return e.v(this.L,e.t)}),x.e=(function(e){return e instanceof $d?M().eK(this.L,e.L):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.L)}),x.aQ=(function(e,t,n,r){var i=e.E;t.length!==0&&(i.o=``+i.o+t);var a=this.L.a.length;if(a!==0){if(n===``)i.fz(this.L);else{i.g();var o=this.L.a[0],s=``+Bn(o);i.o+=s;for(var c=1;c<a;){i.o=``+i.o+n;var l=this.L.a[c],u=``+Bn(l);i.o+=u,c=1+c|0}}}return r.length!==0&&(i.o=``+i.o+r),e}),x.R=(function(){return this.L}),x.i=(function(e){return Xn(this.ba(e))}),x.c=(function(e){return Xn(this.ba(e|0))}),new E().i($d,`scala.collection.mutable.ArraySeq$ofChar`,{aP:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function ef(e){this.M=null,this.M=e}x=ef.prototype=new Id,x.constructor=ef,x.g=(function(){return this.M.a.length}),x.bb=(function(e){return this.M.a[e]}),x.m=(function(){var e=z();return e.v(this.M,e.t)}),x.e=(function(e){if(e instanceof ef){var t=e.M;if(this.M===t)return!0;if(this.M.a.length===t.a.length){for(var n=0;n<this.M.a.length&&this.M.a[n]===t.a[n];)n=1+n|0;return n>=this.M.a.length}return!1}return Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.M)}),x.R=(function(){return this.M}),x.i=(function(e){return this.bb(e)}),x.c=(function(e){return this.bb(e|0)}),new E().i(ef,`scala.collection.mutable.ArraySeq$ofDouble`,{aQ:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function tf(e){this.N=null,this.N=e}x=tf.prototype=new Id,x.constructor=tf,x.g=(function(){return this.N.a.length}),x.bc=(function(e){return this.N.a[e]}),x.m=(function(){var e=z();return e.v(this.N,e.t)}),x.e=(function(e){if(e instanceof tf){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.N)}),x.R=(function(){return this.N}),x.i=(function(e){return this.bc(e)}),x.c=(function(e){return this.bc(e|0)}),new E().i(tf,`scala.collection.mutable.ArraySeq$ofFloat`,{aR:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function nf(e){this.ab=null,this.ab=e}x=nf.prototype=new Id,x.constructor=nf,x.g=(function(){return this.ab.a.length}),x.bd=(function(e){return this.ab.a[e]}),x.m=(function(){var e=z();return e.v(this.ab,e.t)}),x.e=(function(e){return e instanceof nf?M().eL(this.ab,e.ab):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.ab)}),x.R=(function(){return this.ab}),x.i=(function(e){return this.bd(e)}),x.c=(function(e){return this.bd(e|0)}),new E().i(nf,`scala.collection.mutable.ArraySeq$ofInt`,{aS:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function rf(e){this.ac=null,this.ac=e}x=rf.prototype=new Id,x.constructor=rf,x.g=(function(){return this.ac.a.length>>>1|0}),x.be=(function(e){var t=this.ac.a,n=e<<1;return C(t[n],t[n+1|0])}),x.m=(function(){var e=z();return e.v(this.ac,e.t)}),x.e=(function(e){return e instanceof rf?M().eM(this.ac,e.ac):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.ac)}),x.R=(function(){return this.ac}),x.i=(function(e){return this.be(e)}),x.c=(function(e){return this.be(e|0)}),new E().i(rf,`scala.collection.mutable.ArraySeq$ofLong`,{aT:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function af(e){this.ad=null,this.ad=e}x=af.prototype=new Id,x.constructor=af,x.g=(function(){return this.ad.a.length}),x.i=(function(e){return this.ad.a[e]}),x.m=(function(){var e=z();return e.v(this.ad,e.t)}),x.e=(function(e){return e instanceof af?Za().eP(this.ad,e.ad):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.ad)}),x.R=(function(){return this.ad}),x.c=(function(e){return this.i(e|0)}),new E().i(af,`scala.collection.mutable.ArraySeq$ofRef`,{aU:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function of(e){this.ae=null,this.ae=e}x=of.prototype=new Id,x.constructor=of,x.g=(function(){return this.ae.a.length}),x.bf=(function(e){return this.ae.a[e]}),x.m=(function(){var e=z();return e.v(this.ae,e.t)}),x.e=(function(e){return e instanceof of?M().eN(this.ae,e.ae):Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.ae)}),x.R=(function(){return this.ae}),x.i=(function(e){return this.bf(e)}),x.c=(function(e){return this.bf(e|0)}),new E().i(of,`scala.collection.mutable.ArraySeq$ofShort`,{aV:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function sf(e){this.ax=null,this.ax=e}x=sf.prototype=new Id,x.constructor=sf,x.g=(function(){return this.ax.a.length}),x.bg=(function(e){}),x.m=(function(){var e=z();return e.v(this.ax,e.t)}),x.e=(function(e){return e instanceof sf?this.ax.a.length===e.ax.a.length:Q.prototype.e.call(this,e)}),x.h=(function(){return new Y(this.ax)}),x.R=(function(){return this.ax}),x.i=(function(e){this.bg(e)}),x.c=(function(e){this.bg(e|0)}),new E().i(sf,`scala.collection.mutable.ArraySeq$ofUnit`,{aW:1,J:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function cf(e,t){this.co=null,this.b3=null,this.co=e,this.b3=t}x=cf.prototype=new Xd,x.constructor=cf,x.bs=(function(){return new Wl(this)}),x.af=(function(){return 2}),x.ah=(function(){return`::`}),x.ag=(function(e){if(e===0)return this.co;if(e===1)return this.b3;throw jl(new Ml,e)}),x.T=(function(){return this.co}),x.G=(function(){return this.b3}),new E().i(cf,`scala.collection.immutable.$colon$colon`,{dC:1,a6:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aw:1,a0:1,aM:1,aL:1,p:1,q:1,ay:1,x:1,a:1,aA:1,T:1});function lf(){uf=this,$(),$()}x=lf.prototype=new Xd,x.constructor=lf,x.bs=(function(){return new Wl(this)}),x.af=(function(){return 0}),x.ah=(function(){return`Nil`}),x.ag=(function(e){throw jl(new Ml,e)}),x.go=(function(){throw new zl(`head of empty list`)}),x.h1=(function(){throw new Rl(`tail of empty list`)}),x.y=(function(){return 0}),x.h=(function(){return Tc().I}),x.T=(function(){this.go()}),x.G=(function(){this.h1()}),new E().i(lf,`scala.collection.immutable.Nil$`,{dH:1,a6:1,y:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aw:1,a0:1,aM:1,aL:1,p:1,q:1,ay:1,x:1,a:1,aA:1,T:1});var uf;function $(){return uf||=new lf,uf}function df(e,t){return e.E=t,e}function ff(e){return df(e,new al),e}function pf(){this.E=null}x=pf.prototype=new jd,x.constructor=pf,x.eB=(function(e){return Ps(this,e)}),x.h=(function(){return new Lu(new wd(this))}),x.aD=(function(e){var t=this.E.g();return t===e?0:t<e?-1:1}),x.aT=(function(){return`IndexedSeq`}),x.g=(function(){return this.E.g()}),x.y=(function(){return this.E.g()}),x.fu=(function(e){var t=this.E,n=``+Bn(e);return t.o+=n,this}),x.r=(function(){return this.E.o}),x.b=(function(){return this.E.g()===0}),x.i=(function(e){return Xn(this.E.eE(e))}),x.c=(function(e){var t=e|0;return Xn(this.E.eE(t))}),x.cr=(function(e){return this.fu(Qn(e))}),x.f4=(function(){return this.E.o}),new E().i(pf,`scala.collection.mutable.StringBuilder`,{dR:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aY:1,aZ:1,aX:1,dP:1,o:1,m:1,C:1,B:1,a5:1,a:1});function mf(e,t){return e.ay=t,e}function hf(e){return mf(e,[]),e}function gf(){this.ay=null}x=gf.prototype=new Nd,x.constructor=gf,x.aT=(function(){return`IndexedSeq`}),x.h=(function(){return new Lu(new wd(this))}),x.aD=(function(e){var t=this.ay.length|0;return t===e?0:t<e?-1:1}),x.i=(function(e){return this.ay[e]}),x.g=(function(){return this.ay.length|0}),x.y=(function(){return this.ay.length|0}),x.aC=(function(){return`WrappedArray`}),x.f4=(function(){return this}),x.cr=(function(e){return this.ay.push(e),this}),x.c=(function(e){var t=e|0;return this.ay[t]}),new E().i(gf,`scala.scalajs.js.WrappedArray`,{ee:1,dI:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,D:1,r:1,A:1,F:1,E:1,aY:1,aZ:1,dQ:1,dL:1,q:1,p:1,B:1,o:1,m:1,C:1,dN:1,aX:1,a:1}),Qi(new(Au.r()).C([]));