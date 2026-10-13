var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-create`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=/* @__PURE__ */ new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,oe=re.reactiveElementPolyfillSupport,se=(e,t)=>e,ce={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},le=(e,t)=>!f(e,t),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var h=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};h.elementStyles=[],h.shadowRootOptions={mode:`open`},h[se(`elementProperties`)]=/* @__PURE__ */ new Map,h[se(`finalized`)]=/* @__PURE__ */ new Map,oe?.({ReactiveElement:h}),(re.reactiveElementVersions??=[]).push(`2.1.2`);
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
;var Ze=class extends h{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=l`
  @layer wa-component {
    :host {
      border-width: 0;
    }

    :host(:focus) {
      outline: none;
    }

    /* The bordered box. Tags and the text box wrap together inside it. */
    .tag-input {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25em;
      position: relative;
      width: 100%;
      min-height: var(--wa-form-control-height);
      padding: 0 var(--wa-form-control-padding-inline);
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
      border-radius: var(--wa-form-control-border-radius);
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      color: var(--wa-form-control-value-color);
      font-size: var(--wa-form-control-value-font-size);
      font-family: inherit;
      font-weight: var(--wa-form-control-value-font-weight);
      line-height: var(--wa-form-control-value-line-height);
      cursor: text;
      transition:
        background-color var(--wa-transition-normal),
        border-color var(--wa-transition-normal),
        outline-color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);
      outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent;
      outline-offset: var(--wa-focus-ring-offset);

      /* Only ring the box when the text box has focus. A focused tag draws its own ring. */
      &:has(input:focus) {
        outline-color: var(--wa-color-focus);
      }

      /* Tighten the padding around tags, using the same math as multiple selects */
      &.has-tags {
        --_padding-with-tags: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));

        padding-block: var(--_padding-with-tags);
        padding-inline-start: var(--_padding-with-tags);
      }

      /* Show autofill styles over the entire box, not just the native input */
      &:has(:autofill),
      &:has(:-webkit-autofill) {
        background-color: var(--wa-color-brand-fill-quiet) !important;
      }
    }

    /* Appearance modifiers */
    :host([appearance='outlined']) .tag-input {
      background-color: var(--wa-form-control-background-color);
      border-color: var(--wa-form-control-border-color);
    }

    :host([appearance='filled']) .tag-input {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-color-neutral-fill-quiet);
    }

    :host([appearance='filled-outlined']) .tag-input {
      background-color: var(--wa-color-neutral-fill-quiet);
      border-color: var(--wa-form-control-border-color);
    }

    :host([pill]) .tag-input {
      border-radius: var(--wa-border-radius-pill);
    }

    /* States */
    :host(:state(disabled)) .tag-input {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :host(:state(disabled)) .tags {
      pointer-events: none;
    }

    :host(:state(readonly)) .tag-input {
      cursor: default;
    }

    /*
     * Tags. The list has no box of its own so each tag is laid out as a sibling of the text box and the text box
     * flows right after the last tag instead of dropping to its own line.
     */
    .tags {
      display: contents;
    }

    wa-tag {
      min-width: 0;
      max-width: 100%;
      cursor: default;

      /* Nested inside the box, so a step down from the box's radius */
      &:not([pill]) {
        border-radius: var(--wa-border-radius-s);
      }

      &::part(content) {
        display: block;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      &:focus {
        outline: none;
      }

      /* Drawn inward: a ring outside the tag would sit on the box's border */
      &:focus-visible,
      &.tag--focused {
        outline: var(--wa-focus-ring);
        outline-offset: calc(-1 * var(--wa-focus-ring-width));
      }
    }

    /* Text box */
    input {
      flex: 1 1 8ch;
      min-width: 8ch;
      width: auto;
      height: calc(var(--wa-form-control-height) - var(--wa-form-control-border-width) * 2);
      margin: 0;
      padding: 0;
      border: none;
      outline: none;
      box-shadow: none;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: inherit;
      -webkit-appearance: none;

      /*
       * With tags present, match their height so lines stay even when the box wraps, and inset the text so it sits
       * 0.75em from the last tag (0.25em gap + 0.5em), the same inset a tag gives its own text. Without tags, the box's
       * inline padding positions the text and the input has none of its own.
       */
      .has-tags & {
        height: calc(var(--wa-form-control-height) * 0.8);
        padding-inline-start: 0.5em;
      }

      &:autofill {
        &,
        &:hover,
        &:focus,
        &:active {
          box-shadow: none;
          caret-color: var(--wa-form-control-value-color);
        }
      }

      /* Turn off Safari's autofill styles */
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-background-clip: text;
        background-color: transparent;
        -webkit-text-fill-color: inherit;
      }

      &::placeholder {
        color: var(--wa-form-control-placeholder-color);
        user-select: none;
        -webkit-user-select: none;
      }
    }

    /*
     * Start and end decorations. The slots keep their default display of contents, so the slotted element is the flex
     * item and an empty slot adds no gap. This also sidesteps slot detection, which can't run on the server.
     */
    .start::slotted(*),
    .end::slotted(*) {
      flex: 0 0 auto;
      cursor: default;
    }

    .start::slotted(wa-icon),
    .end::slotted(wa-icon) {
      color: var(--wa-color-neutral-on-quiet);
    }

    /* The box's gap already contributes 0.25em, so subtract it to match other form controls */
    .start::slotted(*) {
      margin-inline-end: calc(var(--wa-form-control-padding-inline) - 0.25em);
    }

    .end::slotted(*) {
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.25em);
    }

    /* Keep the start decoration aligned with the tighter padding that tags bring */
    .has-tags .start::slotted(*) {
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - var(--_padding-with-tags));
    }

    /* Clear button */
    .clear {
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
      /* The button box is wider than the glyph, so overhang half of that growth on each side. Keeps the glyph
         flush with the box's trailing padding edge, like every other form control. */
      margin-inline-start: calc(var(--wa-form-control-padding-inline) - 0.375em);
      margin-inline-end: -0.125em;

      /* Enlarge the hit area to the full height of the box */
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
  }
`,et=null,tt=null,nt=7e3
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function rt(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function it(e){return e===`assertive`?(tt??=document.body.appendChild(rt(`assertive`)),tt):(et??=document.body.appendChild(rt(`polite`)),et)}function at(e,t=`polite`){if(!e)return;let n=it(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),nt)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function st(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&dt(t)})}var ct=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),lt=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),ut=e=>{let t=e?.localName;if(!t||!ct.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!lt.get(n)};function dt(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)ut(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ft=l`
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
`,pt=l`
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
`,mt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},ht=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,_t=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},_=(e,t,n,r)=>{for(var i=r>1?void 0:r?gt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ht(t,n,i),i},vt=(e,t,n)=>t.has(e)||_t(`Cannot `+n),yt=(e,t,n)=>(vt(e,t,`read from private field`),n?n.call(e):t.get(e)),bt=(e,t,n)=>t.has(e)?_t(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),xt=(e,t,n,r)=>(vt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const St=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},Ct={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},wt=(e=Ct,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?wt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Tt(e){return v({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Et=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Dt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Et(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Et(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ot=l`
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
`,kt=/;\s+$/;function At(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function jt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(kt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Mt,Nt=class extends Ze{constructor(){super(),bt(this,Mt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[Ot,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){yt(this,Mt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),xt(this,Mt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=jt({property:At(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=jt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Mt=/* @__PURE__ */ new WeakMap,_([v()],Nt.prototype,`dir`,2),_([v()],Nt.prototype,`lang`,2),_([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],Nt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ft=class extends Nt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new mt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ft.formAssociated=!0,_([v({reflect:!0})],Ft.prototype,`name`,2),_([v({type:Boolean})],Ft.prototype,`disabled`,2),_([v({state:!0,attribute:!1})],Ft.prototype,`valueHasChanged`,2),_([v({state:!0,attribute:!1})],Ft.prototype,`hasInteracted`,2),_([v({attribute:`custom-error`,reflect:!0})],Ft.prototype,`customError`,2),_([v({attribute:!1,state:!0,type:Object})],Ft.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var It={small:`s`,medium:`m`,large:`l`},Lt=/* @__PURE__ */ new Set;function Rt(e,t){t in It&&!Lt.has(`${e}:${t}`)&&(Lt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${It[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Bt=l`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ht=/* @__PURE__ */ new Set,Ut=/* @__PURE__ */ new Map;let Wt,Gt=`ltr`,Kt=`en`;const qt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(qt){let e=new MutationObserver(Yt);Gt=document.documentElement.dir||`ltr`,Kt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Jt(...e){e.map(e=>{let t=e.$code.toLowerCase();Ut.has(t)?Ut.set(t,Object.assign(Object.assign({},Ut.get(t)),e)):Ut.set(t,e),Wt||=e}),Yt()}function Yt(){qt&&(Gt=document.documentElement.dir||`ltr`,Kt=document.documentElement.lang||navigator.language),[...Ht.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Xt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ht.add(this.host)}hostDisconnected(){Ht.delete(this.host)}dir(){return`${this.host.dir||Gt}`.toLowerCase()}lang(){let e=`${this.host.lang||Kt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Wt?Wt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Ut.get(`${n}-${r}`),a=Ut.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Wt&&Wt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Wt&&Wt[e])i=Wt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Zt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Jt(Zt);var Qt=Zt,$t=class extends Xt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Jt(Qt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const en={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tn=e=>(...t)=>({_$litDirective$:e,values:t});var nn=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const rn=tn(class extends nn{constructor(e){if(super(e),e.type!==en.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),y=e=>e??g,{I:an}=qe,on=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,sn=e=>e.strings===void 0,cn={},ln=(e,t=cn)=>e._$AH=t,un=tn(class extends nn{constructor(e){
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
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
if(super(e),e.type!==en.PROPERTY&&e.type!==en.ATTRIBUTE&&e.type!==en.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!sn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ne||t===g)return t;let n=e.element,r=e.name;if(e.type===en.PROPERTY){if(t===n[r])return Ne}else if(e.type===en.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ne}else if(e.type===en.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ne;return ln(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dn=()=>{let e=typeof document<`u`&&`createElement`in document?Object.assign(document.createElement(`input`),{required:!0}):void 0;return{observedAttributes:[`required`,`min-tags`,`max-tags`],checkValidity(t){let n={message:``,isValid:!0,invalidKeys:[]},r=t.value.length;return t.required&&r===0?(n.isValid=!1,n.invalidKeys.push(`valueMissing`),n.message=e?.validationMessage||`Please fill out this field.`,n):t.minTags!=null&&r>0&&r<t.minTags?(n.isValid=!1,n.invalidKeys.push(`rangeUnderflow`),n.message=t.localize.term(`tooFewTags`,t.minTags),n):(t.maxTags!=null&&r>t.maxTags&&(n.isValid=!1,n.invalidKeys.push(`rangeOverflow`),n.message=t.localize.term(`tooManyTags`,t.maxTags)),n)}}},b=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new zt(this,`hint`,`label`),this.localize=new $t(this),this.focusedTagIndex=-1,this._value=null,this.defaultValue=this.getAttribute(`value`)??null,this.inputValue=``,this.delimiter=`,`,this.allowDuplicates=!1,this.withClear=!1,this.placeholder=``,this.label=``,this.hint=``,this.withLabel=!1,this.withHint=!1,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.readonly=!1,this.required=!1,this.spellcheck=!0}static get validators(){return[...super.validators,dn()]}get value(){return[...this._value??this.parseDelimited(this.defaultValue)]}set value(e){e instanceof FormData&&(e=this.name?e.getAll(this.name):[]),typeof e==`string`&&(e=this.parseDelimited(e));let t=e?[...e]:[],n=this._value;n&&n.length===t.length&&n.every((e,n)=>e===t[n])||(this._value=t,this.valueHasChanged=!0)}handleSizeChange(){Rt(this.localName,this.size)}get delimiterRegex(){return this.delimiter?RegExp(`[${this.delimiter.replace(/[.*+?^${}()|[\]\\-]/g,`\\$&`)}]`):null}get isAtMax(){return this.maxTags!=null&&this.value.length>=this.maxTags}parseDelimited(e){if(!e)return[];let t=this.delimiter||`,`,n=RegExp(`[${t.replace(/[.*+?^${}()|[\]\\-]/g,`\\$&`)}]`);return e.split(n).map(e=>e.trim()).filter(Boolean)}get tagElements(){return[...this.shadowRoot?.querySelectorAll(`[part~="tag"]`)??[]]}getTagIndex(e){let t=e?.closest?.(`[part~="tag"]`);return t?Number(t.dataset.index):-1}setInputText(e){this.inputValue=e,this.input&&(this.input.value=e)}emitInputAndChange(){this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}tryAddTag(e){if(this.disabled||this.readonly)return!1;let t=e.trim();if(!t||this.isAtMax)return!1;let r=this.value;if(!this.allowDuplicates&&r.includes(t))return this.shakeTag(r.indexOf(t)),at(this.localize.term(`tagAlreadyAdded`,t)),!1;let i=new n({inputValue:t});return this.dispatchEvent(i),!i.defaultPrevented&&(this.value=[...r,t],at(this.localize.term(`tagAdded`,t)),!0)}addTags(e){let t=[],n=!1;for(let r of e)this.tryAddTag(r)?n=!0:r.trim()&&t.push(r.trim());return n&&(this.hasInteracted=!0,this.emitInputAndChange()),t}removeTagAt(e){let t=this.value;if(this.disabled||this.readonly||e<0||e>=t.length)return!1;let[n]=t.splice(e,1);return this.hasInteracted=!0,this.value=t,at(this.localize.term(`tagRemoved`,n)),this.emitInputAndChange(),!0}shakeTag(e){let t=this.tagElements[e];t&&typeof t.animate==`function`&&(typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion: reduce)`).matches||t.animate([{translate:`0`},{translate:`-0.2em`},{translate:`0.2em`},{translate:`-0.2em`},{translate:`0.2em`},{translate:`0`}],{duration:300,easing:`ease-in-out`}))}async focusTag(e){this.focusedTagIndex=e,await this.updateComplete,this.tagElements[e]?.focus()}handleInput(e){let t=this.input.value,n=this.delimiterRegex;if(n&&!e.isComposing&&n.test(t)){let e=t.split(n),r=e.pop()??``,i=this.addTags(e);this.setInputText([...i,r].filter(Boolean).join(this.delimiter[0]))}else this.inputValue=t}handlePaste(e){let t=this.delimiterRegex;if(this.disabled||this.readonly||!t)return;let n=e.clipboardData?.getData(`text/plain`)??``;if(!t.test(n))return;e.preventDefault();let r=this.input.selectionStart??this.input.value.length,i=this.input.selectionEnd??r,a=this.input.value.slice(0,r)+n+this.input.value.slice(i),o=this.addTags(a.split(t));this.setInputText(o.join(this.delimiter[0]))}handleKeyDown(e){if(e.isComposing)return;let t=this.input.value,n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey,r=this.localize.dir()===`rtl`?`ArrowRight`:`ArrowLeft`;e.key===`Enter`&&!n?t?(e.preventDefault(),this.addTags([t]).length===0&&this.setInputText(``)):st(e,this):this.disabled||this.readonly?e.key===`Backspace`&&e.preventDefault():e.key===`Backspace`&&t===``&&this.value.length>0?(e.preventDefault(),this.removeTagAt(this.value.length-1)):e.key===r&&!n&&t===``&&this.input.selectionStart===0&&this.value.length>0?(e.preventDefault(),this.focusTag(this.value.length-1)):e.key===`Escape`&&t&&(e.preventDefault(),this.setInputText(``),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})))}handleInputFocus(){this.focusedTagIndex=-1}handleInputBlur(){this.input.value&&!this.readonly&&!this.disabled&&(this.addTags([this.input.value]),this.setInputText(``))}handleTagKeyDown(e){let t=this.getTagIndex(e.target);if((e.key===`Backspace`||e.key===`Delete`)&&e.preventDefault(),this.disabled||this.readonly||t<0)return;let n=this.value.length,r=e.metaKey||e.ctrlKey||e.altKey,i=this.localize.dir()===`rtl`,a=i?`ArrowRight`:`ArrowLeft`,o=i?`ArrowLeft`:`ArrowRight`;switch(e.key){case a:e.preventDefault(),this.focusTag(Math.max(0,t-1));break;case o:e.preventDefault(),t<n-1?this.focusTag(t+1):this.input.focus();break;case`Home`:e.preventDefault(),this.focusTag(0);break;case`End`:e.preventDefault(),this.input.focus();break;case`Backspace`:e.preventDefault(),this.removeTagAt(t),t>0?this.focusTag(t-1):this.input.focus();break;case`Delete`:e.preventDefault(),this.removeTagAt(t),t<n-1?this.focusTag(t):t>0?this.focusTag(t-1):this.input.focus();break;case`Escape`:this.input.focus();break;default:e.key.length===1&&!r&&this.input.focus()}}handleTagClick(e){let t=this.getTagIndex(e.target);this.disabled||t<0||e.composedPath().some(e=>e instanceof Element&&e.localName===`wa-button`)||this.focusTag(t)}handleTagFocusIn(e){this.focusedTagIndex=this.getTagIndex(e.target)}handleTagFocusOut(){this.focusedTagIndex=-1}handleTagRemove(e){e.stopPropagation(),this.removeTagAt(this.getTagIndex(e.target))&&this.input.focus()}handleWrapperMouseDown(e){let t=e.target;t===this.input||t.closest?.(`[slot="start"], [slot="end"]`)||e.preventDefault()}handleWrapperClick(e){let t=e.target;this.disabled||t===this.input||t.closest?.(`[slot="start"], [slot="end"], [part~="tag"], [part~="clear-button"]`)||this.input.focus()}handleClearMouseDown(e){e.preventDefault(),e.stopPropagation()}handleClearClick(e){e.stopPropagation(),this.value.length>0&&(this.hasInteracted=!0,this.value=[],this.setInputText(``),at(this.localize.term(`allTagsRemoved`)),this.updateComplete.then(()=>{this.dispatchEvent(new ot),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}updated(e){super.updated(e),this.customStates.set(`blank`,this.value.length===0),this.customStates.set(`readonly`,this.readonly),(e.has(`value`)||e.has(`defaultValue`)||e.has(`required`)||e.has(`minTags`)||e.has(`maxTags`))&&this.updateValidity()}formResetCallback(){this._value=null,this.setInputText(``),super.formResetCallback(),this.requestUpdate(`value`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.value,a=this.isAtMax,o=(!this.didSSR||this.hasUpdated)&&this.withClear&&!this.disabled&&!this.readonly&&i.length>0;return Me`
      <label
        id="label"
        part="form-control-label"
        class=${rn({label:!0,"has-label":n})}
        for="input"
        aria-hidden=${n?`false`:`true`}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div
        part="tag-input"
        class=${rn({"tag-input":!0,"has-tags":i.length>0})}
        @mousedown=${this.handleWrapperMouseDown}
        @click=${this.handleWrapperClick}
      >
        <slot name="start" part="start" class="start"></slot>

        ${i.length>0?Me`
              ${this.readonly?``:Me`
                    <span id="tag-help" class="wa-visually-hidden-force">
                      ${this.localize.term(`tagInputKeyboardHelp`)}
                    </span>
                  `}
              <div
                part="tags"
                class="tags"
                role="list"
                aria-labelledby="label"
                @keydown=${this.handleTagKeyDown}
                @click=${this.handleTagClick}
                @focusin=${this.handleTagFocusIn}
                @focusout=${this.handleTagFocusOut}
                @wa-remove=${this.handleTagRemove}
              >
                ${i.map((e,t)=>Me`
                    <wa-tag
                      part="tag"
                      class=${rn({tag:!0,"tag--focused":this.focusedTagIndex===t})}
                      exportparts="
                        content:tag__content,
                        remove-button:tag__remove-button,
                        remove-button__base:tag__remove-button__base
                      "
                      role="listitem"
                      tabindex="-1"
                      aria-describedby=${y(this.readonly?void 0:`tag-help`)}
                      size=${this.size}
                      ?pill=${this.pill}
                      ?with-remove=${!this.readonly}
                      data-index=${t}
                      >${e}</wa-tag
                    >
                  `)}
              </div>
            `:``}

        <input
          part="input"
          id="input"
          class="control"
          type="text"
          .value=${un(this.inputValue)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly||a}
          placeholder=${y(a?void 0:this.placeholder||void 0)}
          autocapitalize=${y(this.autocapitalize)}
          autocomplete=${this.autocomplete??`off`}
          autocorrect=${this.autocorrect?`on`:`off`}
          spellcheck=${this.spellcheck}
          enterkeyhint=${y(this.enterkeyhint)}
          inputmode=${y(this.inputmode)}
          aria-describedby="hint"
          aria-invalid=${this.validity.valid?`false`:`true`}
          @input=${this.handleInput}
          @paste=${this.handlePaste}
          @keydown=${this.handleKeyDown}
          @focus=${this.handleInputFocus}
          @blur=${this.handleInputBlur}
        />

        ${o?Me`
              <button
                part="clear-button"
                class="clear"
                type="button"
                tabindex="-1"
                aria-label=${this.localize.term(`clearEntry`)}
                @mousedown=${this.handleClearMouseDown}
                @click=${this.handleClearClick}
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:``}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${rn({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};b.css=[Bt,pt,ft,$e],_([Dt(`.control`)],b.prototype,`input`,2),_([Tt()],b.prototype,`focusedTagIndex`,2),_([v({attribute:!1})],b.prototype,`value`,1),_([v({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),_([v({attribute:!1})],b.prototype,`inputValue`,2),_([v()],b.prototype,`delimiter`,2),_([v({attribute:`max-tags`,type:Number})],b.prototype,`maxTags`,2),_([v({attribute:`min-tags`,type:Number})],b.prototype,`minTags`,2),_([v({attribute:`allow-duplicates`,type:Boolean,reflect:!0})],b.prototype,`allowDuplicates`,2),_([v({attribute:`with-clear`,type:Boolean})],b.prototype,`withClear`,2),_([v()],b.prototype,`placeholder`,2),_([v()],b.prototype,`label`,2),_([v({attribute:`hint`})],b.prototype,`hint`,2),_([v({attribute:`with-label`,type:Boolean})],b.prototype,`withLabel`,2),_([v({attribute:`with-hint`,type:Boolean})],b.prototype,`withHint`,2),_([v({reflect:!0})],b.prototype,`size`,2),_([Vt(`size`)],b.prototype,`handleSizeChange`,1),_([v({reflect:!0})],b.prototype,`appearance`,2),_([v({type:Boolean,reflect:!0})],b.prototype,`pill`,2),_([v({type:Boolean,reflect:!0})],b.prototype,`readonly`,2),_([v({type:Boolean,reflect:!0})],b.prototype,`required`,2),_([v()],b.prototype,`autocapitalize`,2),_([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],b.prototype,`autocorrect`,2),_([v()],b.prototype,`autocomplete`,2),_([v()],b.prototype,`enterkeyhint`,2),_([v({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],b.prototype,`spellcheck`,2),_([v()],b.prototype,`inputmode`,2),b=_([St(`wa-tag-input`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},pn=l`
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
`,mn=l`
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
`,hn=class extends Nt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new $t(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){Rt(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new fn)}render(){return Me`
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
    `}};hn.css=[pn,mn,Bt],_([v({reflect:!0})],hn.prototype,`variant`,2),_([v({reflect:!0})],hn.prototype,`appearance`,2),_([v({reflect:!0})],hn.prototype,`size`,2),_([Vt(`size`)],hn.prototype,`handleSizeChange`,1),_([v({type:Boolean,reflect:!0})],hn.prototype,`pill`,2),_([v({attribute:`with-remove`,type:Boolean})],hn.prototype,`withRemove`,2),hn=_([St(`wa-tag`)],hn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),_n=l`
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
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const vn=Symbol.for(``),yn=e=>{if(e?.r===vn)return e?._$litStatic$},bn=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:vn}),xn=/* @__PURE__ */ new Map,Sn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=yn(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=xn.get(e))===void 0&&(o.raw=o,xn.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var x=class extends Ft{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new zt(this,`[default]`,`start`,`end`),this.localize=new $t(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,gn()]}handleSizeChange(){Rt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new mt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?bn`a`:bn`button`;return Sn`
      <${t}
        part="base button"
        class=${rn({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${y(e?void 0:this.disabled)}
        type=${y(e?void 0:this.type)}
        title=${this.title}
        name=${y(e?void 0:this.name)}
        value=${y(e?void 0:this.value)}
        href=${y(e?this.href:void 0)}
        target=${y(e?this.target:void 0)}
        download=${y(e?this.download:void 0)}
        rel=${y(e&&this.rel?this.rel:void 0)}
        role=${y(e?void 0:`button`)}
        aria-disabled=${y(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Sn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Sn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};x.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0},x.css=[_n,mn,Bt],_([Dt(`.button`)],x.prototype,`button`,2),_([Dt(`slot:not([name])`)],x.prototype,`labelSlot`,2),_([Tt()],x.prototype,`invalid`,2),_([Tt()],x.prototype,`isIconButton`,2),_([v()],x.prototype,`title`,2),_([v({reflect:!0})],x.prototype,`variant`,2),_([v({reflect:!0})],x.prototype,`appearance`,2),_([v({reflect:!0})],x.prototype,`size`,2),_([Vt(`size`)],x.prototype,`handleSizeChange`,1),_([v({attribute:`with-caret`,type:Boolean,reflect:!0})],x.prototype,`withCaret`,2),_([v({attribute:`with-start`,type:Boolean})],x.prototype,`withStart`,2),_([v({attribute:`with-end`,type:Boolean})],x.prototype,`withEnd`,2),_([v({type:Boolean})],x.prototype,`disabled`,2),_([v({type:Boolean,reflect:!0})],x.prototype,`loading`,2),_([v({type:Boolean,reflect:!0})],x.prototype,`pill`,2),_([v()],x.prototype,`type`,2),_([v({reflect:!0})],x.prototype,`name`,2),_([v({reflect:!0})],x.prototype,`value`,2),_([v({reflect:!0})],x.prototype,`href`,2),_([v()],x.prototype,`target`,2),_([v()],x.prototype,`rel`,2),_([v()],x.prototype,`download`,2),_([v({attribute:`formaction`})],x.prototype,`formAction`,2),_([v({attribute:`formenctype`})],x.prototype,`formEnctype`,2),_([v({attribute:`formmethod`})],x.prototype,`formMethod`,2),_([v({attribute:`formnovalidate`,type:Boolean})],x.prototype,`formNoValidate`,2),_([v({attribute:`formtarget`})],x.prototype,`formTarget`,2),_([Vt(`disabled`,{waitUntilFirstUpdate:!0})],x.prototype,`handleDisabledChange`,1),_([Vt(`href`)],x.prototype,`handleHrefChange`,1),_([Vt(`loading`,{waitUntilFirstUpdate:!0})],x.prototype,`handleLoadingChange`,1),x=_([St(`wa-button`)],x),x.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=l`
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
`,wn=class extends Nt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new $t(this)}render(){return Me`
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
    `}};wn.css=Cn,wn=_([St(`wa-spinner`)],wn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},En=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Dn=l`
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
`,On=``,kn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function An(){return On.replace(/\/$/,``)}function jn(e){kn=e}function Mn(){if(!kn){let e=document.querySelector(`[data-fa-kit-code]`);e&&jn(e.getAttribute(`data-fa-kit-code`)||``)}return kn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=`7.3.0`;function Pn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Fn(e,t,n){let r=Pn(e,t,n),i=An();if(i)return`${i}/${r}/${e}.svg`;let a=Mn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Nn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Nn}/svgs/${r}/${e}.svg`}var In={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Fn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ln(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Rn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},zn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Rn[n][e]??Rn.regular[e]??Rn.regular[`circle-question`];return r?Ln(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Bn=`classic`,Vn=[In,zn],Hn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Un(e){Hn.add(e)}function Wn(e){Hn.delete(e)}function Gn(e){return Vn.find(t=>t.name===e)}function Kn(){return Bn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qn=Symbol(),Jn=Symbol(),Yn,Xn=/* @__PURE__ */ new Map,S=class extends Nt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?qn:Jn}catch{return Jn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return qn;Yn||=new DOMParser;let r=Yn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):qn}catch{return qn}}}connectedCallback(){super.connectedCallback(),Un(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Wn(this)}async getIconSource(){let e=Gn(this.library),t=this.family||Kn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Gn(this.library):void 0;if(!e){this.svg=null;return}let r=Xn.get(e);r||(r=this.resolveIcon(e,n),Xn.set(e,r));let i=await r;if(i===Jn&&Xn.delete(e),e===(await this.getIconSource()).url){if(on(i))this.svg=i;else switch(i){case Jn:case qn:this.svg=null,this.dispatchEvent(new Tn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new En)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Gn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};S.css=Dn,_([Tt()],S.prototype,`svg`,2),_([v({reflect:!0})],S.prototype,`name`,2),_([v({reflect:!0})],S.prototype,`family`,2),_([v({reflect:!0})],S.prototype,`variant`,2),_([v({reflect:!0})],S.prototype,`canvas`,2),_([v({attribute:`auto-width`,type:Boolean,reflect:!0})],S.prototype,`autoWidth`,2),_([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],S.prototype,`swapOpacity`,2),_([v()],S.prototype,`src`,2),_([v()],S.prototype,`label`,2),_([v({reflect:!0})],S.prototype,`library`,2),_([v({type:Number,reflect:!0})],S.prototype,`rotate`,2),_([v({type:String,reflect:!0})],S.prototype,`flip`,2),_([v({type:String,reflect:!0})],S.prototype,`animation`,2),_([Vt(`label`)],S.prototype,`handleLabelChange`,1),_([Vt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],S.prototype,`setIcon`,1),S=_([St(`wa-icon`)],S);var Zn=/* @__PURE__ */ t({default:()=>b}),C
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Qn(e){this.c=e}C=Qn.prototype,C.toString=(function(){return String.fromCharCode(this.c)});function w(e,t){this.l=e,this.h=t}C=w.prototype,C.toString=(function(){return jo(this.l,this.h)});function $n(e){switch(typeof e){case`string`:return Nd.l();case`number`:return mr(e)?e<<24>>24===e?Ou.l():e<<16>>16===e?Iu.l():Dd.l():hr(e)?Ed.l():Td.l();case`boolean`:return zl.l();case`undefined`:return Co.l();default:return e instanceof w?Ad.l():e instanceof Qn?Hl.l():e&&e.$classData?e.$classData.l():null}}function er(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return mr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:hr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof w?`java.lang.Long`:e instanceof Qn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hP()}}function tr(e,t){switch(typeof e){case`string`:return Md(e,t);case`number`:return Cd(e,t);case`boolean`:return Ll(e,t);case`undefined`:return bo(e,t);default:return e&&e.$classData||e===null?e.c(t):e instanceof w?Od(e.l,e.h,t):e instanceof Qn?Vl(e.c,t):br.prototype.c.call(e,t)}}function nr(e){switch(typeof e){case`string`:return q(e);case`number`:return wd(e);case`boolean`:return Rl(e);case`undefined`:return xo(e);default:return e&&e.$classData||e===null?e.g():e instanceof w?kd(e.l,e.h):e instanceof Qn?Bl(e.c):br.prototype.g.call(e)}}function rr(e){return e===void 0?`undefined`:e.toString()}function ir(e){if(e===0)throw new Du(`/ by zero`);return e}function ar(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function or(e){return String.fromCharCode(e)}var sr=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function cr(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var lr=0,ur=/* @__PURE__ */ new WeakMap;function dr(e){switch(typeof e){case`string`:return q(e);case`number`:return wd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:q(n);default:if(e===null)return 0;var r=ur.get(e);return r===void 0&&(r=lr+1|0,lr=r,ur.set(e,r)),r}}function fr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function pr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function mr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function hr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function gr(e){return new Qn(e)}gr(0);function T(e,t){return new w(e,t)}var _r=T(0,0);function vr(e){return e===null?0:e.c}function yr(e){return e===null?_r:e}function br(){}C=br.prototype,C.constructor=br;function E(){}E.prototype=C,C.g=(function(){return dr(this)}),C.c=(function(e){return this===e}),C.k=(function(){var e=this.g();return er(this)+`@`+(e>>>0).toString(16)}),C.toString=(function(){return this.k()});function xr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}C=xr.prototype=new E,C.constructor=xr,C.a4=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),C.X=(function(){return new xr(this.a.slice())});function Sr(){}Sr.prototype=C;function Cr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}C=Cr.prototype=new E,C.constructor=Cr,C.a4=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),C.X=(function(){return new Cr(this.a.slice())});function wr(e){this.a=typeof e==`number`?new Uint16Array(e):e}C=wr.prototype=new E,C.constructor=wr,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new wr(this.a.slice())});function Tr(e){this.a=typeof e==`number`?new Int8Array(e):e}C=Tr.prototype=new E,C.constructor=Tr,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new Tr(this.a.slice())});function Er(e){this.a=typeof e==`number`?new Int16Array(e):e}C=Er.prototype=new E,C.constructor=Er,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new Er(this.a.slice())});function Dr(e){this.a=typeof e==`number`?new Int32Array(e):e}C=Dr.prototype=new E,C.constructor=Dr,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new Dr(this.a.slice())});function Or(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}C=Or.prototype=new E,C.constructor=Or,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),C.X=(function(){return new Or(this.a.slice())});function kr(e){this.a=typeof e==`number`?new Float32Array(e):e}C=kr.prototype=new E,C.constructor=kr,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new kr(this.a.slice())});function Ar(e){this.a=typeof e==`number`?new Float64Array(e):e}C=Ar.prototype=new E,C.constructor=Ar,C.a4=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.X=(function(){return new Ar(this.a.slice())});function D(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}C=D.prototype,C.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new D().y(this,r,i,t===`J`)),this}),C.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),C.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),C.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Sr;n.constructor=t,n.a4=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),n.X=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={s:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===jr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),C.r=(function(){return this.A||=new D().a(this),this.A}),C.l=(function(){return this.L||=new $c(this),this.L}),C.R=(function(e){return this===e||this.F(e)}),C.S=(function(){return this.P?this.P.l():null}),C.Q=(function(){return this.O?this.O.l():null}),C.U=(function(e){if(this===Mr)throw Au(new ju);return new(this.r()).C(e)});var jr=new D;jr.n={},jr.E=`Ljava.lang.Object;`,jr.F=(e=>!e.X),jr.N=`java.lang.Object`,jr.I=(e=>e!==null),jr.A=new D().y(jr,xr,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),br.prototype.$classData=jr;var Mr=new D().p(void 0,`V`,`void`,void 0,void 0),Nr=new D().p(!1,`Z`,`boolean`,Cr,void 0),Pr=new D().p(0,`C`,`char`,wr,Uint16Array),Fr=new D().p(0,`B`,`byte`,Tr,Int8Array),Ir=new D().p(0,`S`,`short`,Er,Int16Array),Lr=new D().p(0,`I`,`int`,Dr,Int32Array),Rr=new D().p(_r,`J`,`long`,Or,Int32Array),zr=new D().p(0,`F`,`float`,kr,Float32Array),Br=new D().p(0,`D`,`double`,Ar,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function Vr(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function Hr(e,t){return new Dr(Vr(e,t,-1))}var Ur=new D().i(1,`com.raquo.airstream.core.InternalObserver`,{bj:1});function Wr(e){return $n(e).d1()+`@`+e.g()}function Gr(e){var t=e.c6();return t===void 0?e.bZ():t}function Kr(){qr=this,Jr().fp(new U((e=>void 0)),qo().bQ,!0)}C=Kr.prototype=new E,C.constructor=Kr,C.fp=(function(e,t,n){return new Dl(e,n,t,this)}),C.gx=(function(e,t){return new Ol(e,t,this)}),new D().i(Kr,`com.raquo.airstream.core.Observer$`,{bl:1});var qr;function Jr(){return qr||=new Kr,qr}function Yr(){}C=Yr.prototype=new E,C.constructor=Yr,C.hi=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new D().i(Yr,`com.raquo.airstream.core.ObserverList$`,{bo:1});var Xr;function Zr(){return Xr||=new Yr,Xr}function Qr(){this.aB=0,this.aB=0}C=Qr.prototype=new E,C.constructor=Qr,C.fe=(function(){return this.aB=this.aB===2147483647?1:1+this.aB|0,this.aB}),new D().i(Qr,`com.raquo.airstream.core.Signal$`,{bq:1});var $r;function ei(){return $r||=new Qr,$r}function ti(e){this.cg=null,this.db=null,this.ch=0,this.cg=e,this.db=void 0;var t=_i().bw();this.ch=t===void 0?1:1+t.ch|0,ai().bz===-1||this.ch>ai().bz?R().Y(new yd(this,ai().bz)):li().w?li().ak.push(this)|0:_i().cU(this)}C=ti.prototype=new E,C.constructor=ti;var ni=new D().i(ti,`com.raquo.airstream.core.Transaction`,{br:1});function ri(){this.bz=0,this.dc=null,ii=this,this.bz=1e3,this.dc=new U((e=>{throw z(new B,`Attempted to run Transaction `+e+` after it was already executed.`)}))}C=ri.prototype=new E,C.constructor=ri,C.eT=(function(e){try{e.cg.d(e);var t=e.db;if(t!==void 0)for(;t.hR();)t.hO().hS(e)}catch(e){var n=e instanceof I?e:new Z(e);R().Y(n)}}),new D().i(ri,`com.raquo.airstream.core.Transaction$`,{bs:1});var ii;function ai(){return ii||=new ri,ii}function oi(e){e.bA.length|0?new ti(new U((t=>{for(;(e.bA.length|0)>0;){var n=e.bA.shift();try{n.d(t)}catch(e){var r=e instanceof I?e:new Z(e);R().Y(r)}}for(;(e.ak.length|0)>0;){var i=e.ak.shift();_i().cU(i)}}))):(e.ak.length|0)>0&&new ti(new U((t=>{for(;(e.ak.length|0)>0;)_i().cU(e.ak.shift())})))}function si(){this.w=!1,this.bA=null,this.ak=null,ci=this,this.w=!1,this.bA=zi().Q(M().O(new(zo.r()).C([]))),this.ak=zi().Q(M().O(new(ni.r()).C([])))}C=si.prototype=new E,C.constructor=si,new D().i(si,`com.raquo.airstream.core.Transaction$onStart$`,{bt:1});var ci;function li(){return ci||=new si,ci}function ui(e,t){return e.al.get(t)}function di(e,t){e.bB.unshift(t)}function fi(e){return e.bB.shift()}function pi(e,t,n){var r=ui(e,t),i=r===void 0,a=r===void 0?zi().Q(M().O(new(ni.r()).C([]))):r;a.push(n),i&&e.al.set(t,a)}function mi(e,t){var n=ui(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.al.delete(t),i}}function hi(){this.bB=null,this.al=null,gi=this,this.bB=zi().Q(M().O(new(ni.r()).C([]))),this.al=/* @__PURE__ */ new Map}C=hi.prototype=new E,C.constructor=hi,C.cU=(function(e){var t=this.bw();t===void 0?(di(this,e),ai().eT(e),this.gg(e)):pi(this,t,e)}),C.gg=(function(e){for(var t=e;;){var n=this.bw(),r=t;if(!(n!==void 0&&j().u(r,n)))throw z(new B,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.h9(t),t.cg=ai().dc;var i=this.bw();if(j().u(i,void 0)){if((this.al.size|0)>0){var a=new jc(0);throw this.al.forEach((e=>((t,n)=>{e.ba=e.ba+(t.length|0)|0}))(a)),z(new B,`Transaction queue error: Stack cleared, but a total of `+a.ba+` children for `+(this.al.size|0)+` transactions remain. This is a bug in Airstream.`)}return}ai().eT(i),t=i}}),C.h9=(function(e){for(var t=e;;){var n=mi(this,t);if(j().u(n,void 0)){fi(this);var r=this.bw();if(!j().u(r,void 0))t=r;else return}else{di(this,n);return}}}),C.bw=(function(){return this.bB[0]}),new D().i(hi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bu:1});var gi;function _i(){return gi||=new hi,gi}function vi(e,t){var n=e.a5.indexOf(t)|0;if(n!==-1)e.a5.splice(n,1),e.A.b()||t.fg();else throw z(new B,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function yi(e){for(;(e.bC.length|0)>0;)vi(e,e.bC.shift())}function bi(e){this.dd=null,this.a5=null,this.aC=!1,this.bC=null,this.A=null,this.aD=0,this.dd=e,this.a5=zi().Q(M().O(new(Si.r()).C([]))),this.aC=!0,this.bC=zi().Q(M().O(new(Si.r()).C([]))),this.A=J(),this.aD=0}C=bi.prototype=new E,C.constructor=bi,C.eL=(function(){if(this.A.b()){var e=li(),t=(()=>{var e=new As(this.dd);this.A=new Y(e),this.aC=!1,this.aD=0;for(var t=0,n=this.a5.length|0;t<n;){var r=t+this.aD|0;this.a5[r].ff(e),t=1+t|0}yi(this),this.aC=!0,this.aD=0});if(li(),e.w)t();else{e.w=!0;try{t()}finally{e.w=!1,oi(e)}}}else throw z(new B,`Can not activate `+this+`: it is already active`)}),C.g6=(function(){if(this.A.b())throw z(new B,`Can not deactivate DynamicOwner: it is not active`);this.aC=!1;for(var e=this.a5,t=0,n=e.length|0;t<n;)e[t].fg(),t=1+t|0;yi(this);var r=this.A;r.b()||r.o().gP(),yi(this),this.aC=!0,this.A=J()}),C.fK=(function(e,t){t?(this.aD=1+this.aD|0,this.a5.unshift(e)):this.a5.push(e);var n=this.A;if(!n.b()){var r=n.o();e.ff(r)}}),C.hk=(function(e){this.aC?vi(this,e):this.bC.push(e)}),new D().i(bi,`com.raquo.airstream.ownership.DynamicOwner`,{bx:1});function xi(e,t,n){this.bD=null,this.de=null,this.bE=null,this.bD=e,this.de=t,this.bE=J(),e.fK(this,n)}C=xi.prototype=new E,C.constructor=xi,C.c5=(function(){this.bD.hk(this)}),C.ff=(function(e){var t=li(),n=(()=>{this.bE=this.de.d(e)});if(li(),t.w)n();else{t.w=!0;try{n()}finally{t.w=!1,oi(t)}}}),C.fg=(function(){var e=this.bE;e.b()||(e.o().c5(),this.bE=J())});var Si=new D().i(xi,`com.raquo.airstream.ownership.DynamicSubscription`,{by:1});function Ci(){}C=Ci.prototype=new E,C.constructor=Ci,C.cc=(function(e,t,n){return new xi(e,new U((e=>new Y(t.d(e)))),n)}),C.fn=(function(e,t,n){return new xi(e,new U((e=>(t.d(e),J()))),n)}),new D().i(Ci,`com.raquo.airstream.ownership.DynamicSubscription$`,{bz:1});var wi;function Ti(){return wi||=new Ci,wi}function Ei(e){e.aE=zi().Q(M().O(new(Mi.r()).C([])))}function Di(e){for(var t=e.aE,n=0,r=t.length|0;n<r;)Ai(t[n]),n=1+n|0;e.aE.length=0}function Oi(e,t){var n=e.aE.indexOf(t)|0;if(n!==-1)e.aE.splice(n,1);else throw z(new B,`Can not remove Subscription from Owner: subscription not found.`)}function ki(e,t){e.aE.push(t)}function Ai(e){if(!e.cj)e.dg.a2(),e.cj=!0;else throw z(new B,`Can not kill Subscription: it was already killed.`)}function ji(e,t){this.dh=null,this.dg=null,this.cj=!1,this.dh=e,this.dg=t,this.cj=!1,e.h5(this)}C=ji.prototype=new E,C.constructor=ji,C.c5=(function(){Ai(this),Oi(this.dh,this)});var Mi=new D().i(ji,`com.raquo.airstream.ownership.Subscription`,{bC:1});function Ni(e,t){this.di=null,this.dj=null,this.a6=null,this.am=!1,this.di=e,this.dj=t,this.a6=J(),this.am=!1}C=Ni.prototype=new E,C.constructor=Ni,C.gK=(function(){var e=this.a6;return!e.b()&&!e.o().bD.A.b()}),C.hv=(function(e){if(this.am)throw z(new B,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a6;if(t.b())var n=!1;else var r=t.o().bD,n=e===null?r===null:e===r;if(!n){this.gK()&&!e.A.b()&&(this.am=!0);var i=this.a6;i.b()||(i.o().c5(),this.a6=J());var a=Ti().cc(e,new U((e=>(this.am||this.di.a2(),new ji(e,new eu((()=>{this.am||this.dj.a2()})))))),!1);this.a6=new Y(a),this.am=!1}}),C.fZ=(function(){if(this.am)throw z(new B,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a6;e.b()||e.o().c5(),this.a6=J()}),new D().i(Ni,`com.raquo.airstream.ownership.TransferableSubscription`,{bD:1});function Pi(){}C=Pi.prototype=new E,C.constructor=Pi,C.fR=(function(e){return new xd(new gd(e))}),new D().i(Pi,`com.raquo.airstream.state.Var$`,{bH:1});var Fi;function Ii(){return Fi||=new Pi,Fi}function Li(){}C=Li.prototype=new E,C.constructor=Li,C.Q=(function(e){return[...Ss().hG(e)]}),new D().i(Li,`com.raquo.ew.JsArray$`,{bK:1});var Ri;function zi(){return Ri||=new Li,Ri}function Bi(){this.dr=null,Vi=this,document.createElement(`template`),this.g4(H().aW.hA().hB()),this.dr=/* @__PURE__ */ RegExp(` `,`g`)}C=Bi.prototype=new E,C.constructor=Bi,C.fO=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof I?e:new Z(e);if(n instanceof Z&&n.t instanceof DOMException)return!1;throw n instanceof Z?n.t:n}}),C.hf=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof I?e:new Z(e);if(n instanceof Z&&n.t instanceof DOMException)return!1;throw n instanceof Z?n.t:n}}),C.hn=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof I?e:new Z(e);if(r instanceof Z&&r.t instanceof DOMException)return!1;throw r instanceof Z?r.t:r}}),C.gM=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(j().u(t,r))return!0;n=r}}),C.fI=(function(e,t){e.addEventListener(t.aF.bJ.bK,t.cy,t.cz)}),C.hg=(function(e,t){e.removeEventListener(t.aF.bJ.bK,t.cy,t.cz)}),C.g3=(function(e){return document.createElement(e.d2())}),C.gz=(function(e,t){var n=this.gA(e,t);return n===void 0?void 0:t.cu.bY(n)}),C.gA=(function(e,t){var n=e.V.getAttributeNS(null,t.aX);return n===null?void 0:n}),C.fm=(function(e,t,n){this.hu(e,t,t.cu.c2(n))}),C.hu=(function(e,t,n){n===null?this.hh(e,t):e.V.setAttribute(t.aX,n)}),C.hh=(function(e,t){e.V.removeAttribute(t.aX)}),C.g4=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dV)}),C.gD=(function(e,t){var n=this.gE(e,t);return n===void 0?void 0:t.cv.bY(n)}),C.gE=(function(e,t){var n=e.d3(),r=t.bM,i=n.getAttributeNS(r.b()?null:r.o(),t.cw);return i===null?void 0:i}),C.hw=(function(e,t,n){this.hx(e,t,t.cv.c2(n))}),C.hx=(function(e,t,n){if(n===null)this.hl(e,t);else{var r=t.bM;if(r.b())e.d3().setAttribute(t.bL,n);else{var i=r.o();e.d3().setAttributeNS(i,t.bL,n)}}}),C.hl=(function(e,t){var n=e.d3(),r=t.bM;n.removeAttributeNS(r.b()?null:r.o(),t.cw)}),C.g2=(function(e){return document.createComment(e)}),C.g5=(function(e){return document.createTextNode(e)}),C.g8=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new fp(this.g7(r),n);r=i,n=a}}),C.g7=(function(e){if(e instanceof HTMLElement){var t=e.id;if(es(),t!==``)var n=`#`+t;else var r=e.className,n=(es(),r===``?``:`.`+r.replace(this.dr,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new D().i(Bi,`com.raquo.laminar.DomApi$`,{bL:1});var Vi;function O(){return Vi||=new Bi,Vi}function Hi(e){Jr(),R(),e.du=Ii()}function Ui(e){e.fr=_a()}function Wi(e){Gi(e,new U((e=>{e.dJ.V.focus()})))}function Gi(e,t){return new Rs(new U((e=>{var n=new Ac(!e.U.A.b()),r=new U((e=>{n.bU?n.bU=!1:t.d(e)}));Ti().fn(e.U,new U((e=>(t=>{r.d(new ma(e,t))}))(e)),!1)})),_a())}function Ki(){this.Z=null,this.dB=null,this.dC=!1,this.cn=null,qi=this,this.Z=new Ms(k()),new Ms(k()),new Ms(k()),this.cn=new js}C=Ki.prototype=new E,C.constructor=Ki,C.eK=(function(){return this.dC||=(this.dB=new Ns(this),!0),this.dB}),new D().i(Ki,`com.raquo.laminar.codecs.package$`,{bT:1});var qi;function k(){return qi||=new Ki,qi}function Ji(e){e.fs=Yi(e,`class`,` `)}function Yi(e,t,n){var r=new P(t,k().Z);return new Ps(r.aX,new U((e=>{var t=O().gz(e,r);return t===void 0?``:t})),new tu(((e,t)=>{O().fm(e,r,t)})),n)}function Xi(e){e.fq=Zi(e,`class`,` `)}function Zi(e,t,n){var r=new Is(t,k().Z,J());return new Ps(r.bL,new U((e=>{var t=O().gD(e,r);return t===void 0?``:t})),new tu(((e,t)=>{O().hw(e,r,t)})),n)}function Qi(){}C=Qi.prototype=new E,C.constructor=Qi,C.fP=(function(e,t){return new Ml(J(),!1,new nu(((n,r,i)=>zc(e,new U(((e,n)=>(r=>{var i=n.bV;if(i===void 0){var a=new Pl(t.eQ(r));this.hC(a,e);var o=a;n.bV=o,o=null}else i.bN.textContent=t.eQ(r)}))(n,new Mc(void 0))),r))),void 0)}),C.hC=(function(e,t){Ca().hm(t.cr,t.cs,e,void 0),t.cs=e,t.ct&&(t.ct=!1,t.hj(e),t.cq.clear(),t.cp=0)}),new D().i(Qi,`com.raquo.laminar.inserters.ChildTextInserter$`,{c6:1});var $i;function ea(){return $i||=new Qi,$i}function ta(e,t,n,r,i){this.cr=null,this.cs=null,this.ct=!1,this.cp=0,this.cq=null,this.cr=e,this.cs=t,this.ct=n,this.cp=r,this.cq=i}C=ta.prototype=new E,C.constructor=ta,C.hj=(function(e){var t=this.cp,n=0;for(n=t;n>0;){var r=e.z().nextSibling;if(r===null)n=0;else{var i=this.cq.get(r);i===void 0?n=0:i!==void 0&&(Ca().he(this.cr,i),n=n-1|0)}}}),new D().i(ta,`com.raquo.laminar.inserters.InsertContext`,{c9:1});function na(){}C=na.prototype=new E,C.constructor=na,C.hp=(function(e,t,n){var r=new Nl(``);return Ca().be(e,r,n),this.hK(e,r,t)}),C.hK=(function(e,t,n){return new ta(e,t,n,0,n?/* @__PURE__ */ new Map:null)}),new D().i(na,`com.raquo.laminar.inserters.InsertContext$`,{ca:1});var ra;function ia(){return ra||=new na,ra}function aa(e,t,n,r){this.bJ=null,this.dI=!1,this.dH=!1,this.dG=null,this.bJ=e,this.dI=t,this.dH=n,this.dG=r}C=aa.prototype=new E,C.constructor=aa,new D().i(aa,`com.raquo.laminar.keys.EventProcessor`,{cd:1});function oa(){}C=oa.prototype=new E,C.constructor=oa,C.gj=(function(e,t,n){return new aa(e,t,n,new U((e=>new Y(e))))}),new D().i(oa,`com.raquo.laminar.keys.EventProcessor$`,{ce:1});var sa;function ca(){return sa||=new oa,sa}function la(){}C=la.prototype=new E,C.constructor=la;function ua(){}ua.prototype=C;function da(){this.fu=null,this.fv=null,this.fw=null,this.fx=null,this.fu=`http://www.w3.org/2000/svg`,this.fv=`http://www.w3.org/1999/xlink`,this.fw=`http://www.w3.org/XML/1998/namespace`,this.fx=`http://www.w3.org/2000/xmlns/`}C=da.prototype=new E,C.constructor=da,C.gX=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Bu(e)}}),new D().i(da,`com.raquo.laminar.keys.SvgAttr$`,{ci:1});var fa;function pa(){return fa||=new da,fa}function ma(e,t){this.dJ=null,this.cx=null,this.dJ=e,this.cx=t}C=ma.prototype=new E,C.constructor=ma,new D().i(ma,`com.raquo.laminar.lifecycle.MountContext`,{cj:1});function ha(){this.fy=null,ga=this,this.fy=new Ls}C=ha.prototype=new E,C.constructor=ha,new D().i(ha,`com.raquo.laminar.modifiers.Modifier$`,{cn:1});var ga;function _a(){return ga||=new ha,ga}function va(){this.dO=null,ya=this,this.dO=new zs(new U((e=>e)),ba()),new zs(new U((e=>``+(e|0))),ba()),new zs(new U((e=>``+ +e)),ba()),new zs(new U((e=>``+!!e)),ba()),new zs(new U((e=>e.hF())),ba())}C=va.prototype=new E,C.constructor=va,new D().i(va,`com.raquo.laminar.modifiers.RenderableText$`,{cr:1});var ya;function ba(){return ya||=new va,ya}function xa(){}C=xa.prototype=new E,C.constructor=xa,C.be=(function(e,t,n){var r=new Y(e);t.aR(r),n!==void 0&&n.h2(e,t);var i=O().fO(e.z(),t.z());return i&&t.aP(r),i}),C.he=(function(e,t){var n=!1;return j().u(t.z().parentNode,e.z())&&(t.aR(J()),n=O().hf(e.z(),t.z()),t.aP(J())),n}),C.hm=(function(e,t,n,r){var i=!1;if(t!==n&&t.cZ().g1(e)){var a=new Y(e);t.aR(J()),n.aR(a),r!==void 0&&r.h2(e,n),i=O().hn(e.z(),n.z(),t.z()),i&&(t.aP(J()),n.aP(a))}return i}),new D().i(xa,`com.raquo.laminar.nodes.ParentNode$`,{cv:1});var Sa;function Ca(){return Sa||=new xa,Sa}function wa(){}C=wa.prototype=new E,C.constructor=wa,C.hJ=(function(e,t){return Ti().cc(e.U,new U((n=>t.d(new ma(e,n)))),!0)}),new D().i(wa,`com.raquo.laminar.nodes.ReactiveElement$`,{cx:1});var Ta;function Ea(){return Ta||=new wa,Ta}function Da(){}C=Da.prototype=new E,C.constructor=Da,new D().i(Da,`com.raquo.laminar.receivers.ChildTextReceiver$`,{cB:1});var Oa;function ka(){return Oa||=new Da,Oa}function Aa(){}C=Aa.prototype=new E,C.constructor=Aa,C.fM=(function(){Ma().go(),Ma().gp(),Ma().gq(),Ma().gr(),Ma().gs()}),C.go=(function(){var e=document.querySelector(`#example1`);Wo().bo(e).b()||(H(),new qc(e,Zc().bp(new $([new V((e=>e.bt().s(`Topics`))),new V((e=>e.f8().s(`Press Enter or type a comma after each topic.`))),new V((e=>e.fh().s(`Add a topic`))),new V((e=>e.gW().s(`topics`)))]),new $([]))))}),C.gp=(function(){var e=document.querySelector(`#example2`);Wo().bo(e).b()||(H(),new qc(e,Zc().bp(new $([new V((e=>e.bt().s(`Skills`))),new V((e=>e.eV().s(`Scala, TypeScript, CSS`))),new V((e=>e.hM().s(!0)))]),new $([]))))}),C.gq=(function(){var e=document.querySelector(`#example3`);Wo().bo(e).b()||(H(),new qc(e,Zc().bp(new $([new V((e=>e.bt().s(`Recipients`))),new V((e=>e.gb().s(`,;`))),new V((e=>e.fh().s(`Enter a name`)))]),new $([]))))}),C.gr=(function(){var e=document.querySelector(`#example4`);Wo().bo(e).b()||(H(),new qc(e,Zc().bp(new $([new V((e=>e.bt().s(`Favorite colors`))),new V((e=>e.f8().s(`Choose one to three colors.`))),new V((e=>e.eV().s(`Blue, Green`))),new V((e=>e.gU().s(1))),new V((e=>e.gT().s(3))),new V((e=>e.ho().s(!0)))]),new $([]))))}),C.gs=(function(){var e=document.querySelector(`#example5`);if(!Wo().bo(e).b()){H();var t=H().aW.du.fR(`Try adding a tag longer than 12 characters.`);new qc(e,H().aW.gd().cW(new $([Zc().bp(new $([new V((e=>e.bt().s(`Short tags`))),new V((e=>new Wc((H(),ca().gj(e.h0(),!1,!1)),new V((e=>{e.detail.inputValue.length>12?(e.preventDefault(),mu(t,`Keep each tag to 12 characters or fewer.`)):mu(t,`Tag accepted.`)})))))]),new $([])),H().aW.h6().cW(new $([(H(),ea().fP(t.dl,ba().dO))]))])))}}),new D().i(Aa,`examples.tagInput.Main$package$`,{cE:1});var ja;function Ma(){return ja||=new Aa,ja}function Na(e){try{Ma().fM()}catch(e){throw e}}function Pa(){}C=Pa.prototype=new E,C.constructor=Pa,C.hs=(function(e,t){var n=sr;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,ee=32&m?0:r<<m,te=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=ee,l=te}if((o-1|0)>>>0<=2045){var ne=o,re=c,ie=l,ae=ne<<20|ie,oe=sr;return oe.setInt32(0,re,!0),oe.setInt32(4,ae,!0),+oe.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var se=54+o|0,ce=c,le=l,ue=se<<20|le,h=sr;return h.setInt32(0,ce,!0),h.setInt32(4,ue,!0),5551115123125783e-32*h.getFloat64(0,!0)}var de=2047&~(t>>31),fe=-2147483648&i,pe=de<<20|fe,me=sr;return me.setInt32(0,0,!0),me.setInt32(4,pe,!0),+me.getFloat64(0,!0)}),new D().i(Pa,`java.lang.Math$`,{cY:1});var Fa;function Ia(){return Fa||=new Pa,Fa}function La(e,t){for(var n=A().T(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ra(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new dc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new dc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(fc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Ra(e,t){var n=A().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().T(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().T(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[za(e,c[1]),Ka(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[za(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[za(e,d[1]),`<clinit>`]}function za(e,t){var n=Va(e);if(yo().cQ.call(n,t))var r=Va(e)[t];else var r=ro(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ba(e){if(!((1&e.H)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cN=t,e.H=(1|e.H)<<24>>24}return e.cN}function Va(e){return(1&e.H)<<24>>24?e.cN:Ba(e)}function Ha(e){if(!((2&e.H)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cO=t,e.H=(2|e.H)<<24>>24}return e.cO}function Ua(e){return(2&e.H)<<24>>24?e.cO:Ha(e)}function Wa(e){return(4&e.H)<<24>>24||(e.cM=Object.keys(Ua(e)),e.H=(4|e.H)<<24>>24),e.cM}function Ga(e){return(4&e.H)<<24>>24?e.cM:Wa(e)}function Ka(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function qa(e,t){return t?t.arguments&&t.stack?Ja(e,t):t.stack&&t.sourceURL?Za(e,t):t.stack&&t.number?Xa(e,t):t.stack&&t.fileName?Ya(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Qa(e,t):$a(e,t):Qa(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?eo(e,t):to(e,t):t.stack&&!t.fileName?Ja(e,t):no(e,t):[]}function Ja(e,t){return(t.stack+`
`).replace(A().T(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().y(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().y(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().y(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().y(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ya(e,t){return t.stack.replace(A().y(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().y(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Xa(e,t){return t.stack.replace(A().y(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().y(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().y(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Za(e,t){return t.stack.replace(A().y(`\\[native code\\]\\n`,`m`),``).replace(A().y(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().y(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Qa(e,t){for(var n=A().y(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function $a(e,t){for(var n=A().y(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function eo(e,t){for(var n=A().T(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function to(e,t){for(var n=A().T(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().T(`<anonymous function: (\\S+)>`),`$1`).replace(A().T(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function no(e,t){return[]}function ro(e,t,n){for(;;)if(t<(Ga(e).length|0)){var r=Ga(e)[t];if(n.startsWith(r))return``+Ua(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function io(){this.cN=null,this.cO=null,this.cM=null,this.H=0}C=io.prototype=new E,C.constructor=io,C.gt=(function(e){return La(this,qa(this,e))}),new D().i(io,`java.lang.StackTrace$`,{d3:1});var ao;function oo(){return ao||=new io,ao}function so(){}C=so.prototype=new E,C.constructor=so,C.T=(function(e){return new RegExp(e)}),C.y=(function(e,t){return new RegExp(e,t)}),new D().i(so,`java.lang.StackTrace$StringRE$`,{d4:1});var co;function A(){return co||=new so,co}function lo(){this.ej=null,this.fz=null,uo=this,this.ej=new nf(!1),this.fz=new nf(!0)}C=lo.prototype=new E,C.constructor=lo,new D().i(lo,`java.lang.System$Streams$`,{d8:1});var uo;function fo(){return uo||=new lo,uo}function po(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function mo(){this.cP=null,this.ek=null,ho=this,this.cP=po(this),this.ek=null}C=mo.prototype=new E,C.constructor=mo,C.f7=(function(e,t){if(this.cP!==null){var n=this.cP;return yo().cQ.call(n,e)?n[e]:t}return this.ek.f7(e,t)}),new D().i(mo,`java.lang.System$SystemProperties$`,{d9:1});var ho;function go(){return ho||=new mo,ho}function _o(){this.cQ=null,vo=this,this.cQ=Object.prototype.hasOwnProperty}C=_o.prototype=new E,C.constructor=_o,new D().i(_o,`java.lang.Utils$Cache$`,{dc:1});var vo;function yo(){return vo||=new _o,vo}function bo(e,t){return e===t}function xo(e){return 0}function So(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.at)}var Co=new D().i(0,`java.lang.Void`,{at:1},(e=>e===void 0));function wo(e,t){throw ku(new ju,`argument type mismatch`)}function To(){}C=To.prototype=new E,C.constructor=To,C.br=(function(e){return e instanceof xr||e instanceof Cr||e instanceof wr||e instanceof Tr||e instanceof Er||e instanceof Dr?e.a.length:e instanceof Or?e.a.length>>>1|0:(e instanceof kr||e instanceof Ar||wo(this,e),e.a.length)}),new D().i(To,`java.lang.reflect.Array$`,{de:1});var Eo;function Do(){return Eo||=new To,Eo}function Oo(){}C=Oo.prototype=new E,C.constructor=Oo,C.fV=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),C.eZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),C.eY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.f0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.eX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.eW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.f1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new D().i(Oo,`java.util.Arrays$`,{df:1});var ko;function Ao(){return ko||=new Oo,ko}function jo(e,t){return Po().fo(e,t)}function Mo(){}C=Mo.prototype=new E,C.constructor=Mo,C.fo=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),C.f6=(function(e){if(e<-0x8000000000000000)return T(0,-2147483648);if(e>=0x8000000000000000)return T(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return T(t,e<0&&t!==0?n-1|0:n)}),C.ge=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0)|0)-((o-se|0)>>>0>o>>>0|0)|0)<0)var le=p-1|0,ue=(m-1|0)+(le!==-1|0)|0,h=le,de=ue;else var h=p,de=m}else var fe=(s>>>0)/(ir(u)>>>0)|0,h=(4294967296*(s-Math.imul(u,fe)|0)+(o>>>0))/u|0,de=fe;if((t^r)>=0)return T(h,de);var pe=-h|0;return T(pe,(-de|0)-(pe!==0|0)|0)}),C.gf=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(ir(n)>>>0)|0;return T((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var ne=o-1|0;return T(ne,(s-1|0)+(ne!==-1|0)|0)}return T(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?T(0,0):T(1,0)}),C.hc=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0,le=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0,ue=o-se|0,h=(s-le|0)-(ue>>>0>o>>>0|0)|0;if(h<0)var de=ue+u|0,fe=(h+d|0)+(de>>>0<ue>>>0|0)|0,pe=de,me=fe;else var pe=ue,me=h}else var he=(4294967296*((s>>>0)%(ir(u)>>>0)|0)+(o>>>0))/u|0,pe=o-Math.imul(u,he)|0,me=0;if(t<0){var ge=-pe|0;return T(ge,(-me|0)-(ge!==0|0)|0)}return T(pe,me)}),C.hd=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(ir(n)>>>0)|0)+(e>>>0))/n|0;return T(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0,ne=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0,re=e-ee|0,ie=(t-ne|0)-(re>>>0>e>>>0|0)|0;if(ie<0){var ae=re+n|0;return T(ae,(ie+r|0)+(ae>>>0<re>>>0|0)|0)}return T(re,ie)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return T(e,t);var oe=e-n|0;return T(oe,(t-r|0)-(oe>>>0>e>>>0|0)|0)}),new D().i(Mo,`org.scalajs.linker.runtime.RuntimeLong$`,{dh:1});var No;function Po(){return No||=new Mo,No}function Fo(){}C=Fo.prototype=new E,C.constructor=Fo,C.f3=(function(e,t){var n=e.r();if(n>-1){for(var r=t.fd(n),i=e.f(),a=0;a<n;)M().eP(r,a,i.j()),a=1+a|0;return r}var o=null,s=t.fk(),c=s===Pr.l();o=[];for(var l=e.f();l.m();){var u=l.j(),d=c?vr(u):u===null?os().hr(s):u;o.push(d)}return os().hq(s===Mr.l()?Co.l():s===ls.l()||s===vl.l()?jr.l():s,o)}),C.f2=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!j().u(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new D().i(Fo,`scala.Array$`,{di:1});var Io;function Lo(){return Io||=new Fo,Io}var Ro=new D().i(1,`scala.Function0`,{a7:1}),zo=new D().i(1,`scala.Function1`,{e:1});function Bo(){}C=Bo.prototype=new E,C.constructor=Bo;function Vo(){}Vo.prototype=C;function Ho(){}C=Ho.prototype=new E,C.constructor=Ho,C.bo=(function(e){return e===null?J():new Y(e)}),new D().i(Ho,`scala.Option$`,{dr:1});var Uo;function Wo(){return Uo||=new Ho,Uo}function Go(){this.er=null,this.bQ=null,Ko=this,this.er=new V((e=>this.er)),this.bQ=new Gl}C=Go.prototype=new E,C.constructor=Go,new D().i(Go,`scala.PartialFunction$`,{ds:1});var Ko;function qo(){return Ko||=new Go,Ko}function Jo(e,t){for(var n=e.f();n.m();)t.d(n.j())}function Yo(e,t,n,r){return e.r()===0?``+t+r:e.aL(_p(new vp),t,n,r).C.l}function Xo(e,t,n,r,i){var a=t.C;n.length!==0&&(a.l=``+a.l+n);var o=e.f();if(o.m()){var s=o.j();for(a.l=``+a.l+s;o.m();){r.length!==0&&(a.l=``+a.l+r);var c=o.j();a.l=``+a.l+c}}return i.length!==0&&(a.l=``+a.l+i),t}function Zo(e,t){this.ew=null,this.b5=null,this.ew=e,this.b5=t}C=Zo.prototype=new E,C.constructor=Zo,C.gG=(function(){return this.ew.a2().f()}),new D().i(Zo,`scala.collection.Iterator$ConcatIteratorCell`,{dH:1});function Qo(){this.ex=null,$o=this,this.ex=new V((e=>this.ex))}C=Qo.prototype=new E,C.constructor=Qo,new D().i(Qo,`scala.collection.StringOps$`,{dO:1});var $o;function es(){return $o||=new Qo,$o}function ts(){this.eA=0,ns=this;try{es();var e=cc().gN(go().f7(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.eA=e}C=ts.prototype=new E,C.constructor=ts,new D().i(ts,`scala.collection.immutable.IndexedSeqDefaults$`,{dS:1});var ns;function rs(){return ns||=new ts,ns}function is(){}C=is.prototype=new E,C.constructor=is,C.hr=(function(e){return e===Fr.l()||e===Ir.l()||e===Pr.l()||e===Lr.l()?0:e===Rr.l()?T(0,0):e===zr.l()||e===Br.l()?0:e===Nr.l()?!1:e===Mr.l()?void 0:null}),C.hq=(function(e,t){var n=t.length|0;if(e===Pr.l()){for(var r=new wr(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.aj.U(n),o=0;o!==n;)M().eP(a,o,t[o]),o=1+o|0;return a}),new D().i(is,`scala.collection.mutable.ArrayBuilder$`,{dX:1});var as;function os(){return as||=new is,as}function ss(){}C=ss.prototype=new E,C.constructor=ss,C.u=(function(e,t){return e===t||(uc(e)?this.gn(e,t):e instanceof Qn?this.gl(e,t):e===null?t===null:tr(e,t))}),C.gn=(function(e,t){if(uc(t))return this.gm(e,t);if(t instanceof Qn){if(typeof e==`number`)return+e===t.c;if(e instanceof w){var n=yr(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:tr(e,t)}return e===null?t===null:tr(e,t)}),C.gm=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof w){var r=yr(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof w){var a=yr(e),o=a.l,s=a.h;if(t instanceof w){var c=yr(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:tr(e,t)}),C.gl=(function(e,t){if(t instanceof Qn)return e.c===t.c;if(uc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof w){var n=yr(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:tr(t,e)}return e===null&&t===null}),new D().i(ss,`scala.runtime.BoxesRunTime$`,{ei:1});var cs;function j(){return cs||=new ss,cs}var ls=new D().i(0,`scala.runtime.Null$`,{el:1});function us(){}C=us.prototype=new E,C.constructor=us,C.c8=(function(){throw Fu(new K,`tried to cast away nullability, but value is null`)}),new D().i(us,`scala.runtime.Scala3RunTime$`,{en:1});var ds;function fs(){return ds||=new us,ds}function ps(){}C=ps.prototype=new E,C.constructor=ps,C.fL=(function(e){return e===null?ls.l():$n(e)}),C.aM=(function(e,t){if(e instanceof xr||e instanceof Dr||e instanceof Ar)return e.a[t];if(e instanceof Or){var n=e.a,r=t<<1;return T(n[r],n[r+1|0])}if(e instanceof kr)return e.a[t];if(e instanceof wr)return gr(e.a[t]);if(e instanceof Tr||e instanceof Er||e instanceof Cr)return e.a[t];throw e===null?G(new K):new Bu(e)}),C.eP=(function(e,t,n){if(e instanceof xr)e.a[t]=n;else if(e instanceof Dr)e.a[t]=n|0;else if(e instanceof Ar)e.a[t]=+n;else if(e instanceof Or){var r=yr(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof kr)e.a[t]=Math.fround(n);else if(e instanceof wr)e.a[t]=vr(n);else if(e instanceof Tr)e.a[t]=n|0;else if(e instanceof Er)e.a[t]=n|0;else if(e instanceof Cr)e.a[t]=!!n;else throw e===null?G(new K):new Bu(e)}),C.cT=(function(e){return Yo(e.ai(),e.F()+`(`,`,`,`)`)}),C.O=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ud();return mf(),Bd(t)}return new Yf(e)}),new D().i(ps,`scala.runtime.ScalaRunTime$`,{eo:1});var ms;function M(){return ms||=new ps,ms}function hs(){}C=hs.prototype=new E,C.constructor=hs,C.i=(function(e,t){var n=this.c7(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),C.c7=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),C.v=(function(e,t){return this.fU(e^t)}),C.fU=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.gR=(function(e,t){return t===e>>31?e:e^t}),C.gh=(function(e){var t=ar(e);if(t===e)return t;var n=Po().f6(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=sr;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),C.p=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.gh(+e);if(e instanceof w){var t=yr(e);return this.gR(t.l,t.h)}return nr(e)}),C.gJ=(function(e){throw Mu(new W,``+e)}),new D().i(hs,`scala.runtime.Statics$`,{eq:1});var gs;function N(){return gs||=new hs,gs}function _s(){}C=_s.prototype=new E,C.constructor=_s,C.hy=(function(e,t){return setTimeout((()=>{t.a2()}),e)}),new D().i(_s,`scala.scalajs.js.timers.package$`,{et:1});var vs;function ys(){return vs||=new _s,vs}function bs(){}C=bs.prototype=new E,C.constructor=bs,C.hG=(function(e){if(e instanceof $)return e.bW;var t=[];return e.aN(new V((e=>t.push(e)|0))),t}),new D().i(bs,`scala.scalajs.runtime.Compat$`,{eC:1});var xs;function Ss(){return xs||=new bs,xs}function Cs(){}C=Cs.prototype=new E,C.constructor=Cs,C.hz=(function(e){var t=`Illegal command line`+(e.f9()===0?``:e.f9()===1?` after first argument`:` after `+e.f9()+` arguments`)+`: `+e.hQ();vc().h4().gO(t+`
`)}),new D().i(Cs,`scala.util.CommandLineParser$`,{eD:1});function ws(e){this.cS=null,this.cS=e}C=ws.prototype=new E,C.constructor=ws,C.k=(function(){return`DynamicVariable(`+this.cS+`)`}),new D().i(ws,`scala.util.DynamicVariable`,{eF:1});function Ts(){}C=Ts.prototype=new E,C.constructor=Ts,C.fS=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),C.hH=(function(e){return this.fS(e)?new Y(e):J()}),new D().i(Ts,`scala.util.control.NonFatal$`,{eH:1});var Es;function Ds(){return Es||=new Ts,Es}function Os(){}C=Os.prototype=new E,C.constructor=Os;function ks(){}ks.prototype=C,C.i=(function(e,t){var n=this.c7(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),C.c7=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),C.v=(function(e,t){return this.bx(e^t)}),C.bx=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.ca=(function(e,t,n){var r=e.D();if(r===0)return n?t:q(e.F());var i=t;n||(i=this.i(i,q(e.F())));for(var a=0;a<r;)i=this.i(i,N().p(e.E(a))),a=1+a|0;return this.v(i,r)}),C.eR=(function(e,t,n){var r=e.D(),i=q(n===null?e.F():n);if(r===0)return i;var a=t;a=this.i(a,i);for(var o=0;o<r;)a=this.i(a,N().p(e.E(o))),o=1+o|0;return this.v(a,r)}),C.hI=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.f();o.m();){var s=o.j(),c=N().p(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.i(l,n),l=this.i(l,r),l=this.c7(l,a),this.v(l,i)}),C.h3=(function(e,t){var n=e.f(),r=t;if(!n.m())return this.v(r,0);var i=n.j();if(!n.m())return this.v(this.i(r,N().p(i)),1);var a=n.j(),o=N().p(i);r=this.i(r,o);for(var s=r,c=N().p(a),l=c-o|0,u=2;n.m();){r=this.i(r,c);var d=N().p(n.j());if(l!==(d-c|0)||l===0){for(r=this.i(r,d),u=1+u|0;n.m();)r=this.i(r,N().p(n.j())),u=1+u|0;return this.v(r,u)}c=d,u=1+u|0}return this.bx(this.i(this.i(s,l),c))}),C.q=(function(e,t){var n=t,r=Do().br(e);switch(r){case 0:return this.v(n,0);case 1:return this.v(this.i(n,N().p(M().aM(e,0))),1);default:var i=N().p(M().aM(e,0));n=this.i(n,i);for(var a=n,o=N().p(M().aM(e,1)),s=o-i|0,c=2;c<r;){n=this.i(n,o);var l=N().p(M().aM(e,c));if(s!==(l-o|0)||s===0){for(n=this.i(n,l),c=1+c|0;c<r;)n=this.i(n,N().p(M().aM(e,c))),c=1+c|0;return this.v(n,r)}o=l,c=1+c|0}return this.bx(this.i(this.i(a,s),o))}}),C.ha=(function(e,t,n,r){return this.bx(this.i(this.i(this.i(r,e),t),n))}),C.gH=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.v(n,0);case 1:return this.v(this.i(n,N().p(e.h(0))),1);default:var i=N().p(e.h(0));n=this.i(n,i);for(var a=n,o=N().p(e.h(1)),s=o-i|0,c=2;c<r;){n=this.i(n,o);var l=N().p(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.i(n,l),c=1+c|0;c<r;)n=this.i(n,N().p(e.h(c))),c=1+c|0;return this.v(n,r)}o=l,c=1+c|0}return this.bx(this.i(this.i(a,s),o))}}),C.gQ=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.S(),u=c.G(),d=N().p(l);switch(r=this.i(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.ha(s,a,o,t):this.v(r,n)});function As(e){this.aE=null,this.df=null,this.ci=!1,this.df=e,Ei(this),this.ci=!1}C=As.prototype=new E,C.constructor=As,C.h5=(function(e){this.ci?(Ai(e),this.df.a2()):ki(this,e)}),C.gP=(function(){Di(this),this.ci=!0}),new D().i(As,`com.raquo.airstream.ownership.OneTimeOwner`,{bA:1,bB:1});function js(){}C=js.prototype=new E,C.constructor=js,C.ga=(function(e){return e!==null}),C.gk=(function(e){return e?``:null}),C.bY=(function(e){return this.ga(e)}),C.c2=(function(e){return this.gk(!!e)}),new D().i(js,`com.raquo.laminar.codecs.package$$anon$1`,{bU:1,a3:1});function Ms(e){if(e===null)throw G(new K)}C=Ms.prototype=new E,C.constructor=Ms,C.c2=(function(e){return e}),C.bY=(function(e){return e}),new D().i(Ms,`com.raquo.laminar.codecs.package$$anon$2`,{bV:1,a3:1});function Ns(e){if(e===null)throw G(new K)}C=Ns.prototype=new E,C.constructor=Ns,C.g9=(function(e){return es(),ac().h7(e)}),C.bY=(function(e){return this.g9(e)}),C.c2=(function(e){return``+ +e}),new D().i(Ns,`com.raquo.laminar.codecs.package$$anon$4`,{bW:1,a3:1});function Ps(e,t,n,r){}C=Ps.prototype=new ua,C.constructor=Ps,new D().i(Ps,`com.raquo.laminar.keys.CompositeKey`,{cc:1,X:1});function Fs(e){this.bK=null,this.bK=e}C=Fs.prototype=new ua,C.constructor=Fs,new D().i(Fs,`com.raquo.laminar.keys.EventProp`,{cf:1,X:1});function P(e,t){this.aX=null,this.cu=null,this.aX=e,this.cu=t}C=P.prototype=new ua,C.constructor=P,C.s=(function(e){return new Kc(this,e,new nu(((e,t,n)=>{O().fm(e,t,n)})))}),new D().i(P,`com.raquo.laminar.keys.HtmlAttr`,{cg:1,X:1});function Is(e,t,n){this.cw=null,this.cv=null,this.bL=null,this.bM=null,this.cw=e,this.cv=t;var r=n.b()?J():new Y(n.o()+`:`+e);this.bL=r.b()?e:r.o(),this.bM=n.b()?J():new Y(pa().gX(n.o()))}C=Is.prototype=new ua,C.constructor=Is,new D().i(Is,`com.raquo.laminar.keys.SvgAttr`,{ch:1,X:1});function Ls(){}C=Ls.prototype=new E,C.constructor=Ls,C.W=(function(e){}),new D().i(Ls,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{co:1,R:1});function Rs(e,t){if(this.dN=null,this.dN=e,t===null)throw G(new K)}C=Rs.prototype=new E,C.constructor=Rs,C.W=(function(e){var t=li(),n=(()=>{this.dN.d(e)});if(li(),t.w)n();else{t.w=!0;try{n()}finally{t.w=!1,oi(t)}}}),new D().i(Rs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cp:1,R:1});function zs(e,t){if(this.dP=null,this.dP=e,t===null)throw G(new K)}C=zs.prototype=new E,C.constructor=zs,C.eQ=(function(e){return this.dP.d(e)}),new D().i(zs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cs:1,cq:1});function Bs(e){e.eU(new bi(new eu((()=>{throw z(new B,`Attempting to use owner of unmounted element: `+Yo(O().g8(e.z(),(O(),hp())),``,` > `,``))}))))}function Vs(e,t,n){return e.cE=t,e}function Hs(){this.cE=null}C=Hs.prototype=new E,C.constructor=Hs;function Us(){}Us.prototype=C,C.d2=(function(){return this.cE}),C.cW=(function(e){var t=this.fY();return e.aN(new U((e=>{e.W(t)}))),t}),C.fY=(function(){return new Sd(this,O().g3(this))}),new D().i(Hs,`com.raquo.laminar.tags.HtmlTag`,{ai:1,a5:1});function Ws(e,t){this.dV=null,this.dV=e}C=Ws.prototype=new E,C.constructor=Ws,new D().i(Ws,`com.raquo.laminar.tags.SvgTag`,{cD:1,a5:1});function Gs(e,t){return e.cG=t,e.fH(),e}function Ks(){this.cG=null,this.cF=null,this.cH=!1}C=Ks.prototype=new E,C.constructor=Ks;function qs(){}qs.prototype=C,C.hD=(function(){return this.cH||=(this.cF=new Jc(this.cG,new V((e=>void 0)),void 0),!0),this.cF}),C.bp=(function(e,t){var n=this.hD().cW(new $([]));return e.aN(new V((e=>{e.d(this).W(n)}))),t.aN(new V((e=>{e.W(n)}))),n});function Js(){this.cI=null,Ys=this,this.cI=Hr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}C=Js.prototype=new E,C.constructor=Js,C.gc=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=Ao().fV(this.cI,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.cI.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new D().i(Js,`java.lang.Character$`,{cN:1,a:1});var Ys;function Xs(){return Ys||=new Js,Ys}function Zs(e){return(1&e.a7)<<24>>24||(e.cL=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.a7=(1|e.a7)<<24>>24),e.cL}function Qs(e){return(1&e.a7)<<24>>24?e.cL:Zs(e)}function $s(e){return(2&e.a7)<<24>>24||(e.cK=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.a7=(2|e.a7)<<24>>24),e.cK}function ec(e){return(2&e.a7)<<24>>24?e.cK:$s(e)}function tc(e,t){var n=ec(e).exec(t);n===null&&nc(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&nc(t);var s=e.h8(i,a,o,15);return r===`-`?-s:s}function nc(e){throw new jd(`For input string: "`+e+`"`)}function rc(){this.cL=null,this.cK=null,this.a7=0}C=rc.prototype=new E,C.constructor=rc,C.h7=(function(e){var t=Qs(this).exec(e);return t===null?tc(this,e):+parseFloat(t[1])}),C.h8=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,ee=l.substring(0,r)+m}else var ee=l;var te=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Ia().hs(+parseInt(ee,16),ar(+parseInt(n,10))+te|0)}),new D().i(rc,`java.lang.Double$`,{cP:1,a:1});var ic;function ac(){return ic||=new rc,ic}function oc(){}C=oc.prototype=new E,C.constructor=oc,C.bv=(function(e){throw new jd(`For input string: "`+e+`"`)}),C.gN=(function(e,t,n){e===null&&cc().bv(e);var r=e.length;r===0&&cc().bv(e);var i=Xs(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&cc().bv(e);var l=0;for(l=0;c!==r;){var u=i.gc(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&cc().bv(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&cc().bv(e),(l^s)-s|0}),new D().i(oc,`java.lang.Integer$`,{cT:1,a:1});var sc;function cc(){return sc||=new oc,sc}function lc(){}C=lc.prototype=new E,C.constructor=lc;function uc(e){return e instanceof lc||typeof e==`number`||e instanceof w}function dc(e,t,n,r,i){this.aH=null,this.b0=null,this.aI=null,this.aJ=0,this.aG=0,this.aH=e,this.b0=t,this.aI=n,this.aJ=r,this.aG=i}C=dc.prototype=new E,C.constructor=dc,C.c=(function(e){return e instanceof dc&&this.aI===e.aI&&this.aJ===e.aJ&&this.aG===e.aG&&this.aH===e.aH&&this.b0===e.b0}),C.k=(function(){var e=``;return this.aH!==`<jscode>`&&(e=``+e+this.aH+`.`),e=``+e+this.b0,this.aI===null?e+=`(Unknown Source)`:(e=e+`(`+this.aI,this.aJ>=0&&(e=e+`:`+this.aJ,this.aG>=0&&(e=e+`:`+this.aG)),e+=`)`),e}),C.g=(function(){return q(this.aH)^q(this.b0)^q(this.aI)^this.aJ^this.aG});var fc=new D().i(dc,`java.lang.StackTraceElement`,{as:1,a:1});function pc(){}C=pc.prototype=new E,C.constructor=pc,C.gY=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+or(e.a[a]),a=1+a|0;return i}),new D().i(pc,`java.lang.String$`,{d6:1,a:1});var mc;function hc(){return mc||=new pc,mc}function F(e,t,n,r,i){return e.em=t,e.en=i,i&&e.gu(),e}var I=class extends Error{constructor(){super(),this.em=null,this.en=!1,this.el=null,this.bO=null}gI(e){return this}bs(){return this.em}gu(){var e=this instanceof Z?this.t:this;return this.el=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gC(){return this.bO===null&&(this.bO=this.en?oo().gt(this.el):new(fc.r()).C(0)),this.bO}k(){var e=er(this),t=this.bs();return t===null?e:e+`: `+t}g(){return br.prototype.g.call(this)}c(e){return br.prototype.c.call(this,e)}get message(){var e=this.bs();return e===null?``:e}get name(){return er(this)}toString(){return this.k()}};function gc(){this.eo=null,_c=this,this.eo=new ws(fo().ej)}C=gc.prototype=new E,C.constructor=gc,C.h4=(function(){return this.eo.cS}),new D().i(gc,`scala.Console$`,{dj:1,e8:1});var _c;function vc(){return _c||=new gc,_c}function yc(){}C=yc.prototype=new Vo,C.constructor=yc;function bc(){}bc.prototype=C,C.hN=(function(e){if(e===null)return null;if(e.a.length===0){var t=Kd();return mf(),t.eB}return new lp(e)});function xc(e,t){if(t===e)e.eM(ud().f4(t));else for(var n=t.f();n.m();)e.cV(n.j());return e}function Sc(){}C=Sc.prototype=new E,C.constructor=Sc;function Cc(){}Cc.prototype=C,C.k=(function(){return`<function0>`});function wc(){}C=wc.prototype=new E,C.constructor=wc;function Tc(){}Tc.prototype=C,C.k=(function(){return`<function1>`});function Ec(){}C=Ec.prototype=new E,C.constructor=Ec;function Dc(){}Dc.prototype=C,C.k=(function(){return`<function2>`});function Oc(){}C=Oc.prototype=new E,C.constructor=Oc;function kc(){}kc.prototype=C,C.k=(function(){return`<function3>`});function Ac(e){this.bU=!1,this.bU=e}C=Ac.prototype=new E,C.constructor=Ac,C.k=(function(){return``+this.bU}),new D().i(Ac,`scala.runtime.BooleanRef`,{eh:1,a:1});function jc(e){this.ba=0,this.ba=e}C=jc.prototype=new E,C.constructor=jc,C.k=(function(){return``+this.ba}),new D().i(jc,`scala.runtime.IntRef`,{ej:1,a:1});function Mc(e){this.bV=null,this.bV=e}C=Mc.prototype=new E,C.constructor=Mc,C.k=(function(){return``+this.bV}),new D().i(Mc,`scala.runtime.ObjectRef`,{em:1,a:1});function Nc(){this.n=0,this.eJ=0,this.fF=0,this.fE=0,Pc=this,this.n=q(`Seq`),this.eJ=q(`Map`),this.fF=q(`Set`),this.fE=this.hI(hp(),this.eJ)}C=Nc.prototype=new ks,C.constructor=Nc,C.fl=(function(e){return xf(e)?this.gH(e,this.n):e instanceof ep?this.gQ(e,this.n):this.h3(e,this.n)}),new D().i(Nc,`scala.util.hashing.MurmurHash3$`,{eJ:1,eI:1});var Pc;function L(){return Pc||=new Nc,Pc}var Fc=class extends I{};function Ic(){this.cd=null,this.d4=null,this.d5=null,Lc=this,this.cd=ud().eO(M().O(new(zo.r()).C([]))),this.d4=new U((e=>{try{console.error(this.c4(e)+`
`+this.gB(e,`
`))}catch(e){var t=e instanceof I?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.d5=new U((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.t:t})),this.hb(this.d4)}C=Ic.prototype=new E,C.constructor=Ic,C.c4=(function(e){try{var t=e.bs()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return $n(e).d1()+`: `+t}),C.gB=(function(e,t){try{return Yo(nl().hN(e.gC()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),C.hb=(function(e){this.cd.cV(e)}),C.Y=(function(e){for(var t=this.cd.f();t.m();){var n=t.j();try{n.d(e)}catch(e){var r=e instanceof I?e:new Z(e),i=this.d5;if(n===null?i===null:n.c(i))throw r instanceof Z?r.t:r;console.warn(`Error processing an unhandled error callback:`),ys().hy(0,new eu((e=>(()=>{throw e instanceof Z?e.t:e}))(r)))}}}),new D().i(Ic,`com.raquo.airstream.core.AirstreamError$`,{bh:1,e6:1,e7:1});var Lc;function R(){return Lc||=new Ic,Lc}function Rc(e){e.bF=!0,e.bH=void 0}function zc(e,t,n){return ou(e,Jr().fp(t,qo().bQ,!0),n)}function Bc(e,t){e.bF?cu(e,t):Hc(e).push(new eu((()=>{cu(e,t)})))}function Vc(e){return fu(e)>0}function Hc(e){var t=e.bH;if(t===void 0){var n=zi().Q(M().O(new(Ro.r()).C([])));return e.bH=n,n}return t}var Uc=new D().i(1,`com.raquo.airstream.core.Observer`,{a2:1,W:1,T:1});function Wc(e,t){this.aF=null,this.cy=null,this.cz=null,this.aF=e,this.cy=(n=>{var r=e.dG.d(n);r.b()||t.d(r.o())}),this.cz=(()=>{var e=null;e=this;var t={};if(e===null)throw G(new K);return t.capture=e.aF.dI,t.passive=e.aF.dH,t})()}C=Wc.prototype=new E,C.constructor=Wc,C.W=(function(e){this.fW(e,!1)}),C.fW=(function(e,t){if(yu(e,this)===-1){var n=new U((t=>(O().fI(e.V,this),new ji(t.cx,new eu((()=>{var t=yu(e,this);t!==-1&&(vu(e,t),O().hg(e.V,this))})))))),r=t?Ea().hJ(e,n):Ti().cc(e.U,new U((t=>n.d(new ma(e,t)))),!1);return _u(e,this,t),r}var i=new U((e=>void 0));return Ti().fn(e.U,new U((t=>{i.d(new ma(e,t))})),!1)}),C.k=(function(){return`EventListener(`+this.aF.bJ.bK+`)`});var Gc=new D().i(Wc,`com.raquo.laminar.modifiers.EventListener`,{cl:1,R:1,ck:1});function Kc(e,t,n){this.dL=null,this.dM=null,this.dK=null,this.dL=e,this.dM=t,this.dK=n}C=Kc.prototype=new E,C.constructor=Kc,C.W=(function(e){this.dK.eN(e,this.dL,this.dM)}),new D().i(Kc,`com.raquo.laminar.modifiers.KeySetter`,{cm:1,R:1,ct:1});function qc(e,t){if(this.cC=null,this.dS=null,this.dT=null,this.dS=t,Bs(this),e===null)throw z(new B,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().gM(e,document))throw z(new B,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dT=e,this.gV()}C=qc.prototype=new E,C.constructor=qc,C.c1=(function(){return this.cC}),C.eU=(function(e){this.cC=e}),C.gV=(function(){return this.cC.eL(),Ca().be(this,this.dS,void 0)}),C.z=(function(){return this.dT}),new D().i(qc,`com.raquo.laminar.nodes.RootNode`,{cz:1,Y:1,ah:1});function Jc(e,t,n){this.cE=null,this.dU=null,this.dU=e,Vs(this,e,!1)}C=Jc.prototype=new Us,C.constructor=Jc,C.d2=(function(){return this.dU}),new D().i(Jc,`com.raquo.laminar.tags.CustomHtmlTag`,{cC:1,ai:1,a5:1});function Yc(){this.cG=null,this.cF=null,this.cH=!1,this.ea=null,this.eb=!1,this.dW=null,this.dX=!1,this.dY=null,this.dZ=!1,this.e4=null,this.e5=!1,this.e6=null,this.e7=!1,this.eg=null,this.eh=!1,this.ec=null,this.ed=!1,this.e2=null,this.e3=!1,this.e0=null,this.e1=!1,this.ee=null,this.ef=!1,this.e8=null,this.e9=!1,Gs(this,`wa-tag-input`)}C=Yc.prototype=new qs,C.constructor=Yc,C.h0=(function(){return this.eb||=(this.ea=(H(),new Fs(`wa-create`)),!0),this.ea}),C.eV=(function(){return this.dX||=(this.dW=(H(),new P(`value`,k().Z)),!0),this.dW}),C.gb=(function(){return this.dZ||=(this.dY=(H(),new P(`delimiter`,k().Z)),!0),this.dY}),C.gT=(function(){return this.e5||=(this.e4=(H(),new P(`max-tags`,k().eK())),!0),this.e4}),C.gU=(function(){return this.e7||=(this.e6=(H(),new P(`min-tags`,k().eK())),!0),this.e6}),C.hM=(function(){return this.eh||=(this.eg=(H(),new P(`with-clear`,k().cn)),!0),this.eg}),C.fh=(function(){return this.ed||=(this.ec=(H(),new P(`placeholder`,k().Z)),!0),this.ec}),C.bt=(function(){return this.e3||=(this.e2=(H(),new P(`label`,k().Z)),!0),this.e2}),C.f8=(function(){return this.e1||=(this.e0=(H(),new P(`hint`,k().Z)),!0),this.e0}),C.ho=(function(){return this.ef||=(this.ee=(H(),new P(`required`,k().cn)),!0),this.ee}),C.gW=(function(){return this.e9||=(this.e8=(H(),new P(`name`,k().Z)),!0),this.e8}),C.fH=(function(){return Zn}),new D().i(Yc,`io.github.nguyenyou.webawesome.laminar.TagInput$`,{cG:1,cH:1,cF:1});var Xc;function Zc(){return Xc||=new Yc,Xc}function Qc(e){if(e.aj.Z)return e.aj.Q().d1()+`[]`;for(var t=e.aj.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function $c(e){this.cJ=null,this.aj=e}C=$c.prototype=new E,C.constructor=$c,C.k=(function(){return(this.aj.Y?`interface `:this.aj.X?``:`class `)+this.aj.N}),C.d1=(function(){return this.cJ===null&&(this.cJ=Qc(this)),this.cJ}),new D().i($c,`java.lang.Class`,{cO:1,a:1,K:1});function z(e,t){return F(e,t,null,!0,!0),e}var B=class extends I{};new D().i(B,`java.lang.Exception`,{J:1,r:1,a:1});function el(){this.fA=null,tl=this,sd(),this.fA=ml()}C=el.prototype=new bc,C.constructor=el,new D().i(el,`scala.Predef$`,{du:1,dm:1,dn:1});var tl;function nl(){return tl||=new el,tl}function rl(e,t){return e.bS=t,e}function il(){this.bS=null}C=il.prototype=new E,C.constructor=il;function al(){}al.prototype=C,C.c3=(function(e){return this.bS.d0(e,df())}),C.bX=(function(e){return this.bS.d0(e,df())});function ol(e,t){return new Xu(e).g0(t)}function sl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?dl().I:new $u(e,r,i)}function cl(e,t){for(var n=t.f();e.m();)if(!n.m()||!j().u(e.j(),n.j()))return!1;return!n.m()}function ll(){this.I=null,ul=this,this.I=new Ku}C=ll.prototype=new E,C.constructor=ll,new D().i(ll,`scala.collection.Iterator$`,{dE:1,a:1,V:1});var ul;function dl(){return ul||=new ll,ul}function fl(){}C=fl.prototype=new E,C.constructor=fl,new D().i(fl,`scala.collection.immutable.Map$`,{dU:1,a:1,dJ:1});var pl;function ml(){return pl||=new fl,pl}function hl(e){this.eC=null,this.eC=e}C=hl.prototype=new Cc,C.constructor=hl,C.a2=(function(){return(0,this.eC)()}),new D().i(hl,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{ec:1,ba:1,a7:1});function V(e){this.eD=null,this.eD=e}C=V.prototype=new Tc,C.constructor=V,C.d=(function(e){return(0,this.eD)(e)}),new D().i(V,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{ed:1,bb:1,e:1});function gl(){}C=gl.prototype=new E,C.constructor=gl;function _l(){}_l.prototype=C,C.k=(function(){return`<function1>`}),C.d=(function(e){return this.fT(e,qo().bQ)});var vl=new D().i(0,`scala.runtime.Nothing$`,{ek:1,r:1,a:1});function yl(){}C=yl.prototype=new Cc,C.constructor=yl;function bl(){}bl.prototype=C;function xl(){}C=xl.prototype=new Tc,C.constructor=xl;function Sl(){}Sl.prototype=C;function Cl(){}C=Cl.prototype=new Dc,C.constructor=Cl;function wl(){}wl.prototype=C;function Tl(){}C=Tl.prototype=new kc,C.constructor=Tl;function El(){}El.prototype=C;function Dl(e,t,n,r){if(this.d8=null,this.d6=!1,this.ce=null,this.d7=null,this.d8=e,this.d6=t,this.ce=n,r===null)throw G(new K);this.d7=void 0}C=Dl.prototype=new E,C.constructor=Dl,C.c6=(function(){return this.d7}),C.bZ=(function(){return Wr(this)}),C.k=(function(){return Gr(this)}),C.h1=(function(e){try{this.d8.d(e)}catch(e){var t=e instanceof I?e:new Z(e);this.d6?this.c9(new _d(t)):R().Y(new _d(t))}}),C.c9=(function(e){try{this.ce.aO(e)?this.ce.d(e):R().Y(e)}catch(n){var t=n instanceof I?n:new Z(n);R().Y(new vd(t,e))}}),C.bu=(function(e){e.bq(new U((e=>{this.c9(e)})),new U((e=>{this.h1(e)})))}),new D().i(Dl,`com.raquo.airstream.core.Observer$$anon$8`,{bm:1,W:1,T:1,a2:1});function Ol(e,t,n){if(this.cf=null,this.d9=!1,this.da=null,this.cf=e,this.d9=t,n===null)throw G(new K);this.da=void 0}C=Ol.prototype=new E,C.constructor=Ol,C.c6=(function(){return this.da}),C.bZ=(function(){return Wr(this)}),C.k=(function(){return Gr(this)}),C.c9=(function(e){this.bu(new hd(e))}),C.bu=(function(e){try{this.cf.aO(e)?this.cf.d(e):e.bq(new U((e=>{R().Y(e)})),new U((e=>void 0)))}catch(n){var t=n instanceof I?n:new Z(n);this.d9&&e.fc()?this.c9(new _d(t)):e.bq(new U((e=>{R().Y(new vd(t,e))})),new U((e=>{R().Y(new _d(t))})))}}),new D().i(Ol,`com.raquo.airstream.core.Observer$$anon$9`,{bn:1,W:1,T:1,a2:1});function kl(e){if(this.ds=null,this.dt=!1,this.fq=null,e===null)throw G(new K);Xi(this)}C=kl.prototype=new E,C.constructor=kl,C.hB=(function(){return this.dt||=(this.ds=new Ws(`svg`,!1),!0),this.ds}),new D().i(kl,`com.raquo.laminar.api.Laminar$svg$`,{bO:1,c5:1,bY:1,c0:1});function Al(){this.aW=null,jl=this,this.aW=new Df}C=Al.prototype=new E,C.constructor=Al,new D().i(Al,`com.raquo.laminar.api.package$`,{bR:1,af:1,ag:1,ae:1});var jl;function H(){return jl||=new Al,jl}function Ml(e,t,n,r){this.dD=null,this.dF=!1,this.dE=null,this.co=null,this.dD=e,this.dF=t,this.dE=n,this.co=r}C=Ml.prototype=new E,C.constructor=Ml,C.fX=(function(e){var t=this.dD,n=t.b()?ia().hp(e,this.dF,this.co):t.o(),r=new U((e=>this.dE.eN(n,e.cx,this.co)));return Ti().cc(e.U,new U((t=>r.d(new ma(e,t)))),!1)}),C.W=(function(e){this.fX(e)}),new D().i(Ml,`com.raquo.laminar.inserters.DynamicInserter`,{c7:1,R:1,cb:1,c8:1});function Nl(e){this.cA=null,this.dQ=null,this.cA=J(),this.dQ=O().g2(e)}C=Nl.prototype=new E,C.constructor=Nl,C.cZ=(function(){return this.cA}),C.aP=(function(e){this.cA=e}),C.aR=(function(e){}),C.W=(function(e){Ca().be(e,this,void 0)}),C.z=(function(){return this.dQ}),new D().i(Nl,`com.raquo.laminar.nodes.CommentNode`,{cu:1,Y:1,R:1,a4:1});function Pl(e){this.cD=null,this.bN=null,this.cD=J(),this.bN=O().g5(e)}C=Pl.prototype=new E,C.constructor=Pl,C.cZ=(function(){return this.cD}),C.aP=(function(e){this.cD=e}),C.aR=(function(e){}),C.W=(function(e){Ca().be(e,this,void 0)}),C.hF=(function(){return this.bN.data}),C.z=(function(){return this.bN}),new D().i(Pl,`com.raquo.laminar.nodes.TextNode`,{cA:1,Y:1,R:1,a4:1});function Fl(){}C=Fl.prototype=new E,C.constructor=Fl;function Il(){}Il.prototype=C;function Ll(e,t){return e===t}function Rl(e){return e?1231:1237}var zl=new D().i(0,`java.lang.Boolean`,{cL:1,a:1,N:1,K:1},(e=>typeof e==`boolean`));function Bl(e){return e}function Vl(e,t){return t instanceof Qn&&e===t.c}var Hl=new D().i(0,`java.lang.Character`,{ao:1,a:1,N:1,K:1},(e=>e instanceof Qn)),Ul=class extends B{};function Wl(){this.l=null,this.l=``}C=Wl.prototype=new E,C.constructor=Wl,C.fN=(function(e){var t=hc().gY(e,0,e.a.length);return this.l=``+this.l+t,this}),C.k=(function(){return this.l}),C.e=(function(){return this.l.length}),C.eS=(function(e){return this.l.charCodeAt(e)}),new D().i(Wl,`java.lang.StringBuilder`,{d7:1,a6:1,am:1,a:1});function Gl(){}C=Gl.prototype=new E,C.constructor=Gl,C.k=(function(){return`<function1>`}),C.aO=(function(e){return!1}),C.fQ=(function(e){throw new Bu(e)}),C.d=(function(e){this.fQ(e)}),new D().i(Gl,`scala.PartialFunction$$anon$1`,{dt:1,e:1,f:1,a:1});function Kl(){}C=Kl.prototype=new E,C.constructor=Kl;function ql(){}ql.prototype=C,C.r=(function(){return-1}),C.aL=(function(e,t,n,r){return Xo(this,e,t,n,r)}),C.f=(function(){return this}),C.c0=(function(e){return this.by(e,-1)}),C.by=(function(e,t){return sl(this,e,t)}),C.k=(function(){return`<iterator>`});function Jl(e,t){return e.bT=t,e}function Yl(){this.bT=null}C=Yl.prototype=new E,C.constructor=Yl;function Xl(){}Xl.prototype=C,C.eO=(function(e){return this.bT.bX(e)}),C.f4=(function(e){return this.bT.c3(e)}),C.bX=(function(e){return this.eO(e)}),C.c3=(function(e){return this.f4(e)});function Zl(e,t){return t>=0&&e.a3(t)>0}function Ql(e){return e.a3(0)===0}function $l(e,t){var n=e.r();if(n!==-1){var r=t.r();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return cl(e.f(),t)}function eu(e){this.eG=null,this.eG=e}C=eu.prototype=new bl,C.constructor=eu,C.a2=(function(){return(0,this.eG)()}),new D().i(eu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{ev:1,eu:1,ba:1,a7:1});function U(e){this.eH=null,this.eH=e}C=U.prototype=new Sl,C.constructor=U,C.d=(function(e){return(0,this.eH)(e)}),new D().i(U,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{ex:1,ew:1,bb:1,e:1});function tu(e){this.fD=null,this.fD=e}C=tu.prototype=new wl,C.constructor=tu,new D().i(tu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{ez:1,ey:1,ee:1,dk:1});function nu(e){this.eI=null,this.eI=e}C=nu.prototype=new El,C.constructor=nu,C.eN=(function(e,t,n){return(0,this.eI)(e,t,n)}),new D().i(nu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eB:1,eA:1,ef:1,dl:1});function ru(){}C=ru.prototype=new E,C.constructor=ru;function iu(){}iu.prototype=C,C.ai=(function(){return new Uu(this)});function au(e){e.aV=zi().Q(M().O(new(Uc.r()).C([]))),e.cm=zi().Q(M().O(new(Ur.r()).C([]))),e.bI=!1}function ou(e,t,n){var r=li(),i=(()=>{lu(e);var r=su(e,t,n);return t.bu($d(e)),uu(e),r}),a=!Vc(e);if(r.w||!a)var o=i();else{r.w=!0;try{var o=i()}finally{r.w=!1,oi(r)}}return o}function su(e,t,n){var r=new ji(n,new eu((()=>{Bc(e,t)})));return e.aV.push(t),r}function cu(e,t){Zr().hi(e.aV,t)&&du(e)}function lu(e){e.bI||=!0}function uu(e){fu(e)===1&&bd(e)}function du(e){Vc(e)||(e.bI=!1)}function fu(e){var t=e.aV.length,n=e.cm;return(t|0)+(n.length|0)|0}function pu(e){e.dm=Jr().gx(new hu(e),(Jr(),!0))}function mu(e,t){var n=new gd(t);e.dm.bu(n)}function hu(e){if(this.dn=null,e===null)throw G(new K);this.dn=e}C=hu.prototype=new _l,C.constructor=hu,C.gL=(function(e){return!0}),C.fT=(function(e,t){new ti(new U((t=>{this.dn.ht(e,t)})))}),C.aO=(function(e){return this.gL(e)}),new D().i(hu,`com.raquo.airstream.state.Var$$anon$1`,{bI:1,eg:1,e:1,f:1,a:1});function gu(e){e.cB=new Ni(new eu((()=>{e.U.eL()})),new eu((()=>{e.U.g6()}))),e.an=void 0}function _u(e,t,n){if(e.an===void 0)e.an=zi().Q(M().O(new(Gc.r()).C([t])));else if(n){var r=e.an;if(r===void 0)throw new Ru(`undefined.get`);r.unshift(t)}else{var i=e.an;if(i===void 0)throw new Ru(`undefined.get`);i.push(t)}}function vu(e,t){var n=e.an;n!==void 0&&n.splice(t,1)}function yu(e,t){var n=e.an;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:tr(a,t))?r=!0:i=1+i|0}return r?i:-1}function bu(e,t){Su(e,e.aY,t)&&Cu(e,t)}function xu(e,t){var n=e.aY;e.aY=t,Su(e,n,t)||Cu(e,t)}function Su(e,t,n){var r=!t.b()&&!t.o().c1().A.b(),i=!n.b()&&!n.o().c1().A.b();return r&&!i}function Cu(e,t){wu(e,t.b()?J():new Y(t.o().c1()))}function wu(e,t){if(t.b())e.cB.fZ();else{var n=t.o();e.cB.hv(n)}}function Tu(){}C=Tu.prototype=new Il,C.constructor=Tu;function Eu(){}Eu.prototype=C;var Du=class extends Ul{constructor(e){super(),F(this,e,null,!0,!0)}};new D().i(Du,`java.lang.ArithmeticException`,{cK:1,O:1,J:1,r:1,a:1});var Ou=new D().i(0,`java.lang.Byte`,{cM:1,S:1,a:1,N:1,K:1},(e=>fr(e)));function ku(e,t){return F(e,t,null,!0,!0),e}function Au(e){return F(e,null,null,!0,!0),e}var ju=class extends Ul{};new D().i(ju,`java.lang.IllegalArgumentException`,{aq:1,O:1,J:1,r:1,a:1});function Mu(e,t){return F(e,t,null,!0,!0),e}function Nu(e,t){return F(e,`Index out of range: `+t,null,!0,!0),e}var W=class extends Ul{};new D().i(W,`java.lang.IndexOutOfBoundsException`,{cR:1,O:1,J:1,r:1,a:1});function Pu(){}C=Pu.prototype=new Il,C.constructor=Pu,new D().i(Pu,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cW:1,al:1,aj:1,an:1,ak:1});function Fu(e,t){return F(e,t,null,!0,!0),e}function G(e){return F(e,null,null,!0,!0),e}var K=class extends Ul{};new D().i(K,`java.lang.NullPointerException`,{cZ:1,O:1,J:1,r:1,a:1});var Iu=new D().i(0,`java.lang.Short`,{d2:1,S:1,a:1,N:1,K:1},(e=>pr(e))),Lu=class extends Ul{constructor(e){super(),F(this,e,null,!0,!0)}};new D().i(Lu,`java.lang.UnsupportedOperationException`,{db:1,O:1,J:1,r:1,a:1});var Ru=class extends Ul{constructor(e){super(),F(this,e,null,!0,!0)}};new D().i(Ru,`java.util.NoSuchElementException`,{dg:1,O:1,J:1,r:1,a:1});function zu(e){if(!e.eq){if(e.bP===null)var t=`null`;else{var n=M().fL(e.bP),r=n===null?`of a JS class`:`of class `+n.aj.N;try{var t=e.bP+` (`+r+`)`}catch{var t=`an instance `+r}}e.ep=t,e.eq=!0}return e.ep}var Bu=class extends Ul{constructor(e){super(),this.bP=null,this.ep=null,this.eq=!1,this.bP=e,F(this,null,null,!0,!0)}bs(){return zu(this)}};new D().i(Bu,`scala.MatchError`,{dp:1,O:1,J:1,r:1,a:1});function Vu(){}C=Vu.prototype=new E,C.constructor=Vu;function Hu(){}Hu.prototype=C,C.ai=(function(){return new Uu(this)}),C.b=(function(){return this===J()}),C.r=(function(){return!this.b()|0}),C.g1=(function(e){return!this.b()&&j().u(this.o(),e)}),C.f=(function(){return this.b()?dl().I:new qu(this.o())});function Uu(e){if(this.b1=0,this.et=0,this.es=null,e===null)throw G(new K);this.es=e,this.b1=0,this.et=e.D()}C=Uu.prototype=new ql,C.constructor=Uu,C.m=(function(){return this.b1<this.et}),C.j=(function(){var e=this.es.E(this.b1);return this.b1=1+this.b1|0,e}),new D().i(Uu,`scala.Product$$anon$1`,{dv:1,P:1,b:1,d:1,Q:1});function Wu(e){this.bS=null,rl(this,e)}C=Wu.prototype=new al,C.constructor=Wu,new D().i(Wu,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dA:1,dz:1,a:1,V:1,a0:1});function Gu(e){return Yo(e,e.ay()+`(`,`, `,`)`)}function Ku(){}C=Ku.prototype=new ql,C.constructor=Ku,C.m=(function(){return!1}),C.gZ=(function(){throw new Ru(`next on empty iterator`)}),C.r=(function(){return 0}),C.j=(function(){this.gZ()}),C.by=(function(e,t){return this}),new D().i(Ku,`scala.collection.Iterator$$anon$19`,{dF:1,P:1,b:1,d:1,Q:1});function qu(e){this.ev=null,this.b4=!1,this.ev=e,this.b4=!1}C=qu.prototype=new ql,C.constructor=qu,C.m=(function(){return!this.b4}),C.j=(function(){return this.b4?dl().I.j():(this.b4=!0,this.ev)}),C.by=(function(e,t){return this.b4||e>0||t===0?dl().I:this}),new D().i(qu,`scala.collection.Iterator$$anon$20`,{dG:1,P:1,b:1,d:1,Q:1});function Ju(e){for(;;)if(e.x instanceof Xu){var t=e.x;if(e.x=t.x,e.a9=t.a9,t.K!==null){e.J===null&&(e.J=t.J);var n=t.J;n===null&&fs().c8(),n.b5=e.K,e.K=t.K}}else return}function Yu(e){for(;;)if(e.K===null)return e.x=null,e.J=null,!1;else{if(e.x=e.K.gG(),e.J===e.K){var t=e.J;t===null&&fs().c8(),e.J=t.b5}if(e.K=e.K.b5,Ju(e),e.a9)return!0;if(!(e.x!==null&&e.x.m()))continue;return e.a9=!0,!0}}function Xu(e){this.x=null,this.K=null,this.J=null,this.a9=!1,this.x=e,this.K=null,this.J=null,this.a9=!1}C=Xu.prototype=new ql,C.constructor=Xu,C.m=(function(){return this.a9?!0:this.x===null?!1:this.x.m()?(this.a9=!0,!0):Yu(this)}),C.j=(function(){if(this.m()){this.a9=!1;var e=this.x;return e===null&&fs().c8(),e.j()}return dl().I.j()}),C.g0=(function(e){var t=new Zo(e,null);if(this.K===null)this.K=t,this.J=t;else{var n=this.J;n===null&&fs().c8(),n.b5=t,this.J=t}return this.x===null&&(this.x=dl().I),this}),new D().i(Xu,`scala.collection.Iterator$ConcatIterator`,{az:1,P:1,b:1,d:1,Q:1});function Zu(e){for(;e.a1>0;)e.aa.m()?(e.aa.j(),e.a1=e.a1-1|0):e.a1=0}function Qu(e,t){if(e.B<0)return-1;var n=e.B-t|0;return n<0?0:n}function $u(e,t,n){this.aa=null,this.B=0,this.a1=0,this.aa=e,this.B=n,this.a1=t}C=$u.prototype=new ql,C.constructor=$u,C.r=(function(){var e=this.aa.r();if(e<0)return-1;var t=e-this.a1|0,n=t<0?0:t;if(this.B<0)return n;var r=this.B;return r<n?r:n}),C.m=(function(){return Zu(this),this.B!==0&&this.aa.m()}),C.j=(function(){return Zu(this),this.B>0?(this.B=this.B-1|0,this.aa.j()):this.B<0?this.aa.j():dl().I.j()}),C.by=(function(e,t){var n=e>0?e:0;if(t<0)var r=Qu(this,n);else if(t<=n)var r=0;else if(this.B<0)var r=t-n|0;else var i=Qu(this,n),a=t-n|0,r=i<a?i:a;var o=this.a1+n|0;return r===0?dl().I:o<0?(this.a1=2147483647,this.B=0,ol(this,new hl((()=>new $u(this.aa,o-2147483647|0,r))))):(this.a1=o,this.B=r,this)}),new D().i($u,`scala.collection.Iterator$SliceIterator`,{dI:1,P:1,b:1,d:1,Q:1});function ed(e,t){return t>=0&&e.a3(t)>0}function td(e,t){if(t<0)throw Mu(new W,``+t);var n=e.gi(t);if(n.b())throw Mu(new W,``+t);return n.S()}function nd(e,t){return Sf(t)?rd(e,e,t):$l(e,t)}function rd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.b()&&!r.b()&&j().u(i.S(),r.S())){var a=i.G(),o=r.G();i=a,r=o;continue}return i.b()&&r.b()}}function id(e){if(this.b7=null,e===null)throw G(new K);this.b7=e}C=id.prototype=new ql,C.constructor=id,C.m=(function(){return!this.b7.b()}),C.j=(function(){var e=this.b7.S();return this.b7=this.b7.G(),e}),new D().i(id,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dN:1,P:1,b:1,d:1,Q:1});function ad(){od=this,hp(),hp()}C=ad.prototype=new E,C.constructor=ad,C.bX=(function(e){return hp().fi(e)}),C.c3=(function(e){return hp().fi(e)}),new D().i(ad,`scala.collection.immutable.List$`,{dT:1,a:1,V:1,a0:1,aD:1});var od;function sd(){return od||=new ad,od}function cd(){this.bT=null,Jl(this,md())}C=cd.prototype=new Xl,C.constructor=cd,new D().i(cd,`scala.collection.mutable.Buffer$`,{e0:1,dK:1,a:1,V:1,a0:1});var ld;function ud(){return ld||=new cd,ld}function dd(e){this.eF=null,this.bb=0,this.eE=0,this.eF=e,this.bb=0,this.eE=e.D()}C=dd.prototype=new ql,C.constructor=dd,C.m=(function(){return this.bb<this.eE}),C.j=(function(){var e=this.eF.E(this.bb);return this.bb=1+this.bb|0,e}),new D().i(dd,`scala.runtime.ScalaRunTime$$anon$1`,{ep:1,P:1,b:1,d:1,Q:1});function fd(){}C=fd.prototype=new E,C.constructor=fd,C.bX=(function(e){return this.f5(e)}),C.f5=(function(e){return xc(bp(new xp),e).fj()}),C.c3=(function(e){return this.f5(e)}),new D().i(fd,`scala.scalajs.js.WrappedArray$`,{es:1,aD:1,a:1,V:1,a0:1});var pd;function md(){return pd||=new fd,pd}function hd(e){this.bc=null,this.bc=e}C=hd.prototype=new iu,C.constructor=hd,C.g=(function(){return L().ca(this,-1408943127,!0)}),C.c=(function(e){if(this===e)return!0;if(e instanceof hd){var t=this.bc,n=e.bc;return t===null?n===null:t.c(n)}return!1}),C.k=(function(){return M().cT(this)}),C.D=(function(){return 1}),C.F=(function(){return`Failure`}),C.E=(function(e){if(e===0)return this.bc;throw Nu(new W,e)}),C.fb=(function(){return!0}),C.fc=(function(){return!1}),C.bq=(function(e,t){return e.d(this.bc)}),new D().i(hd,`scala.util.Failure`,{be:1,bg:1,c:1,L:1,a:1});function gd(e){this.bd=null,this.bd=e}C=gd.prototype=new iu,C.constructor=gd,C.g=(function(){return L().ca(this,-1750213842,!0)}),C.c=(function(e){return this===e||e instanceof gd&&j().u(this.bd,e.bd)}),C.k=(function(){return M().cT(this)}),C.D=(function(){return 1}),C.F=(function(){return`Success`}),C.E=(function(e){if(e===0)return this.bd;throw Nu(new W,e)}),C.fb=(function(){return!1}),C.fc=(function(){return!0}),C.bq=(function(e,t){try{return t.d(this.bd)}catch(t){var n=t instanceof I?t:new Z(t),r=Ds().hH(n);if(!r.b()){var i=r.o();return e.d(i)}throw n instanceof Z?n.t:n}}),new D().i(gd,`scala.util.Success`,{bf:1,bg:1,c:1,L:1,a:1});var _d=class e extends Fc{constructor(e){super(),this.aS=null,this.aS=e,F(this,`ObserverError: `+R().c4(e),null,!0,!0)}ai(){return new Uu(this)}g(){return L().eR(this,-889275714,null)}c(t){if(this===t)return!0;if(t instanceof e){var n=this.aS,r=t.aS;return n===null?r===null:n.c(r)}return!1}D(){return 1}F(){return`ObserverError`}E(e){if(e===0)return this.aS;throw Mu(new W,``+e)}k(){return`ObserverError: `+this.aS}};new D().i(_d,`com.raquo.airstream.core.AirstreamError$ObserverError`,{a9:1,a1:1,r:1,a:1,c:1,L:1});var vd=class e extends Fc{constructor(e,t){super(),this.aU=null,this.aT=null,this.aU=e,this.aT=t,F(this,`ObserverErrorHandlingError: `+R().c4(e)+`; cause: `+R().c4(t),null,!0,!0),this.gI(t)}ai(){return new Uu(this)}g(){return L().eR(this,-889275714,null)}c(t){if(this===t)return!0;if(t instanceof e){var n=this.aU,r=t.aU;if(n===null?r===null:n.c(r)){var i=this.aT,a=t.aT;return i===null?a===null:i.c(a)}return!1}return!1}D(){return 2}F(){return`ObserverErrorHandlingError`}E(e){if(e===0)return this.aU;if(e===1)return this.aT;throw Mu(new W,``+e)}k(){return`ObserverErrorHandlingError: `+this.aU+`; cause: `+this.aT}};new D().i(vd,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{aa:1,a1:1,r:1,a:1,c:1,L:1});var yd=class e extends Fc{constructor(e,t){super(),this.aA=null,this.az=0,this.aA=e,this.az=t,F(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}ai(){return new Uu(this)}g(){var e=-889275714;return e=N().i(e,q(`TransactionDepthExceeded`)),e=N().i(e,N().p(this.aA)),e=N().i(e,this.az),N().v(e,2)}c(t){if(this===t)return!0;if(t instanceof e){if(this.az===t.az){var n=this.aA,r=t.aA;return n===null?r===null:n===r}return!1}return!1}D(){return 2}F(){return`TransactionDepthExceeded`}E(e){if(e===0)return this.aA;if(e===1)return this.az;throw Mu(new W,``+e)}k(){return`TransactionDepthExceeded: `+this.aA+`; maxDepth: `+this.az}};new D().i(yd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ab:1,a1:1,r:1,a:1,c:1,L:1});function bd(e){$d(e)}function xd(e){this.dk=null,this.dm=null,this.cl=null,this.ck=null,this.dl=null,this.dk=void 0,pu(this),this.cl=e,this.ck=new hf(this.cl,new eu((()=>Gr(this)))),this.dl=this.ck}C=xd.prototype=new E,C.constructor=xd,C.c6=(function(){return this.dk}),C.bZ=(function(){return Wr(this)}),C.k=(function(){return Gr(this)}),C.ht=(function(e,t){this.cl=e,ef(this.ck,e,t)}),new D().i(xd,`com.raquo.airstream.state.SourceVar`,{bE:1,ac:1,ad:1,W:1,T:1,bG:1});function Sd(e,t){this.aY=null,this.U=null,this.cB=null,this.an=null,this.dR=null,this.V=null,this.dR=e,this.V=t,this.aY=J(),Bs(this),gu(this)}C=Sd.prototype=new E,C.constructor=Sd,C.cZ=(function(){return this.aY}),C.W=(function(e){Ca().be(e,this,void 0)}),C.c1=(function(){return this.U}),C.eU=(function(e){this.U=e}),C.aR=(function(e){bu(this,e)}),C.aP=(function(e){xu(this,e)}),C.k=(function(){return`ReactiveHtmlElement(`+(this.V===null?`tag=`+this.dR.d2():this.V.outerHTML)+`)`}),C.z=(function(){return this.V}),new D().i(Sd,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cy:1,Y:1,R:1,a4:1,ah:1,cw:1});function Cd(e,t){return Object.is(e,t)}function wd(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=sr;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Td=new D().i(0,`java.lang.Double`,{ap:1,S:1,a:1,N:1,K:1,U:1},(e=>typeof e==`number`)),Ed=new D().i(0,`java.lang.Float`,{cQ:1,S:1,a:1,N:1,K:1,U:1},(e=>hr(e))),Dd=new D().i(0,`java.lang.Integer`,{cS:1,S:1,a:1,N:1,K:1,U:1},(e=>mr(e)));function Od(e,t,n){if(n instanceof w){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function kd(e,t){return e^t}var Ad=new D().i(0,`java.lang.Long`,{ar:1,S:1,a:1,N:1,K:1,U:1},(e=>e instanceof w)),jd=class extends ju{constructor(e){super(),F(this,e,null,!0,!0)}};new D().i(jd,`java.lang.NumberFormatException`,{d0:1,aq:1,O:1,J:1,r:1,a:1});function q(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Md(e,t){return e===t}var Nd=new D().i(0,`java.lang.String`,{d5:1,a:1,N:1,a6:1,K:1,U:1},(e=>typeof e==`string`));function Pd(){}C=Pd.prototype=new Hu,C.constructor=Pd,C.g=(function(){return 2433880}),C.k=(function(){return`None`}),C.D=(function(){return 0}),C.F=(function(){return`None`}),C.E=(function(e){throw Nu(new W,e)}),C.gy=(function(){throw new Ru(`None.get`)}),C.o=(function(){this.gy()}),new D().i(Pd,`scala.None$`,{dq:1,au:1,b:1,c:1,L:1,a:1});var Fd;function J(){return Fd||=new Pd,Fd}function Y(e){this.b2=null,this.b2=e}C=Y.prototype=new Hu,C.constructor=Y,C.g=(function(){return L().ca(this,1323286827,!0)}),C.c=(function(e){return this===e||e instanceof Y&&j().u(this.b2,e.b2)}),C.k=(function(){return M().cT(this)}),C.D=(function(){return 1}),C.F=(function(){return`Some`}),C.E=(function(e){if(e===0)return this.b2;throw Nu(new W,e)}),C.o=(function(){return this.b2}),new D().i(Y,`scala.Some`,{av:1,au:1,b:1,c:1,L:1,a:1});function Id(){}C=Id.prototype=new E,C.constructor=Id;function Ld(){}Ld.prototype=C,C.r=(function(){return-1}),C.aN=(function(e){Jo(this,e)}),C.aL=(function(e,t,n,r){return Xo(this,e,t,n,r)}),C.ay=(function(){return this.aQ()});function X(e){this.bR=null,this.a0=0,this.b3=0,this.bR=e,this.a0=0,this.b3=Do().br(this.bR)}C=X.prototype=new ql,C.constructor=X,C.r=(function(){return this.b3-this.a0|0}),C.m=(function(){return this.a0<this.b3}),C.j=(function(){this.a0>=Do().br(this.bR)&&dl().I.j();var e=M().aM(this.bR,this.a0);return this.a0=1+this.a0|0,e}),C.c0=(function(e){if(e>0){var t=this.a0+e|0;if(t<0)var n=this.b3;else var r=this.b3,n=r<t?r:t;this.a0=n}return this}),new D().i(X,`scala.collection.ArrayOps$ArrayIterator`,{dy:1,P:1,b:1,d:1,Q:1,a:1});function Rd(e,t){return t<0?0:t>e.P?e.P:t}function zd(e){this.eu=null,this.a8=0,this.P=0,this.eu=e,this.a8=0,this.P=e.e()}C=zd.prototype=new ql,C.constructor=zd,C.r=(function(){return this.P}),C.m=(function(){return this.P>0}),C.j=(function(){if(this.P>0){var e=this.eu.h(this.a8);return this.a8=1+this.a8|0,this.P=this.P-1|0,e}return dl().I.j()}),C.c0=(function(e){if(e>0){this.a8=this.a8+e|0;var t=this.P-e|0;this.P=t<0?0:t}return this}),C.by=(function(e,t){var n=Rd(this,e),r=Rd(this,t)-n|0;return this.P=r<0?0:r,this.a8=this.a8+n|0,this}),new D().i(zd,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dD:1,P:1,b:1,d:1,Q:1,a:1});function Bd(e){return e.ez||=(e.ey=new Yf(new(vl.r()).C(0)),!0),e.ey}function Vd(){this.fB=null,this.ey=null,this.ez=!1,Hd=this,this.fB=new Wu(this)}C=Vd.prototype=new E,C.constructor=Vd,C.gv=(function(e,t){return e instanceof Rf?e:this.hL(Lo().f3(e,t))}),C.hL=(function(e){if(e===null)return null;if(e instanceof xr)return new Yf(e);if(e instanceof Dr)return new qf(e);if(e instanceof Ar)return new Gf(e);if(e instanceof Or)return new Jf(e);if(e instanceof kr)return new Kf(e);if(e instanceof wr)return new Wf(e);if(e instanceof Tr)return new Uf(e);if(e instanceof Er)return new Xf(e);if(e instanceof Cr)return new Hf(e);if(So(e,1))return new Zf(e);throw new Bu(e)}),C.d0=(function(e,t){return this.gv(e,t)}),new D().i(Vd,`scala.collection.immutable.ArraySeq$`,{dR:1,a:1,ay:1,aw:1,ax:1,aB:1});var Hd;function Ud(){return Hd||=new Vd,Hd}function Wd(){this.fC=null,this.eB=null,Gd=this,this.fC=new Wu(this),this.eB=new lp(new xr(0))}C=Wd.prototype=new E,C.constructor=Wd,C.gw=(function(e,t){return this.gS(Lo().f3(e,t))}),C.gS=(function(e){if(e===null)return null;if(e instanceof xr)return new lp(e);if(e instanceof Dr)return new sp(e);if(e instanceof Ar)return new ap(e);if(e instanceof Or)return new cp(e);if(e instanceof kr)return new op(e);if(e instanceof wr)return new ip(e);if(e instanceof Tr)return new rp(e);if(e instanceof Er)return new up(e);if(e instanceof Cr)return new np(e);if(So(e,1))return new dp(e);throw new Bu(e)}),C.d0=(function(e,t){return this.gw(e,t)}),new D().i(Wd,`scala.collection.mutable.ArraySeq$`,{dY:1,a:1,ay:1,aw:1,ax:1,aB:1});var Gd;function Kd(){return Gd||=new Wd,Gd}function qd(){}C=qd.prototype=new Eu,C.constructor=qd;function Jd(){}Jd.prototype=C;function Yd(e){return e.ay()+`(<not computed>)`}function Xd(){}C=Xd.prototype=new E,C.constructor=Xd;function Zd(){}Zd.prototype=C;var Z=class e extends Ul{constructor(e){super(),this.t=null,this.t=e,F(this,null,null,!0,!0)}bs(){return rr(this.t)}F(){return`JavaScriptException`}D(){return 1}E(e){return e===0?this.t:N().gJ(e)}ai(){return new dd(this)}g(){return L().ca(this,1744042595,!0)}c(t){return this===t||t instanceof e&&j().u(this.t,t.t)}};new D().i(Z,`scala.scalajs.js.JavaScriptException`,{bc:1,O:1,J:1,r:1,a:1,L:1,c:1});function Qd(e,t){e.bG!==void 0&&ei().fe(),e.bG=t}function $d(e){var t=e.bG;if(t===void 0){ei().fe();var n=$d(e);Qd(e,n);var r=n}else var r=t;return r}function ef(e,t,n){Qd(e,t);var r=t.fb(),i=!1;i=!1,e.bF=!1;for(var a=e.aV,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bu(t),r&&!i&&(i=!0)}for(var c=e.cm,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.bF=!0;var u=e.bH;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].a2(),d=1+d|0;u.length=0}r&&!i&&t.bq(new U((e=>{R().Y(e)})),new U((e=>void 0)))}function tf(e,t){typeof console<`u`&&(e.ei&&console.error?console.error(t):console.log(t))}function nf(e){this.ei=!1,this.aZ=null,this.ei=e,new Pu,this.aZ=``}C=nf.prototype=new Jd,C.constructor=nf,C.gO=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aZ=``+this.aZ+t,t=``;else{var r=this.aZ,i=t;tf(this,``+r+i.substring(0,n)),this.aZ=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new D().i(nf,`java.lang.JSConsoleBasedPrintStream`,{cV:1,cJ:1,cI:1,al:1,aj:1,an:1,ak:1,am:1});function rf(e,t,n){for(var r=n,i=t;;)if(i<=0||r.b())return r;else{var a=i-1|0,o=r.G();i=a,r=o}}function af(){this.b9=null}C=af.prototype=new Zd,C.constructor=af;function of(){}of.prototype=C,C.k=(function(){return this.b9}),C.c=(function(e){return this===e}),C.g=(function(){return dr(this)});function sf(){}C=sf.prototype=new Ld,C.constructor=sf;function cf(){}cf.prototype=C,C.k=(function(){return Yd(this)});function lf(){this.b9=null,this.b9=`Any`,hp()}C=lf.prototype=new of,C.constructor=lf,C.fk=(function(){return jr.l()}),C.fd=(function(e){return new xr(e)}),new D().i(lf,`scala.reflect.ManifestFactory$AnyManifest$`,{ea:1,b8:1,b7:1,a:1,b9:1,b4:1,c:1,b5:1,b6:1});var uf;function df(){return uf||=new lf,uf}function ff(){this.b9=null,this.b9=`Object`,hp()}C=ff.prototype=new of,C.constructor=ff,C.fk=(function(){return jr.l()}),C.fd=(function(e){return new xr(e)}),new D().i(ff,`scala.reflect.ManifestFactory$ObjectManifest$`,{eb:1,b8:1,b7:1,a:1,b9:1,b4:1,c:1,b5:1,b6:1});var pf;function mf(){return pf||=new ff,pf}function hf(e,t){this.dp=null,this.bF=!1,this.bH=null,this.aV=null,this.cm=null,this.bI=!1,this.bG=null,this.dq=null,this.dq=t,this.dp=void 0,Rc(this),au(this),this.bG=void 0,Qd(this,e)}C=hf.prototype=new E,C.constructor=hf,C.c6=(function(){return this.dp}),C.k=(function(){return Gr(this)}),C.c=(function(e){return this===e}),C.g=(function(){return dr(this)}),C.bZ=(function(){return this.dq.a2()+`.signal`}),new D().i(hf,`com.raquo.airstream.state.VarSignal`,{bJ:1,ac:1,T:1,bi:1,bk:1,ad:1,bp:1,bv:1,bw:1,bF:1});function Q(e,t){return e===t?!0:gf(t)&&t.cY(e)?e.cb(t):!1}function gf(e){return!!(e&&e.$classData&&e.$classData.n.g)}function _f(){}C=_f.prototype=new Ld,C.constructor=_f;function vf(){}vf.prototype=C,C.fa=(function(e){return Zl(this,e)}),C.b=(function(){return Ql(this)}),C.cb=(function(e){return $l(this,e)}),C.cY=(function(e){return!0}),C.c=(function(e){return Q(this,e)}),C.g=(function(){return L().fl(this)}),C.k=(function(){return Gu(this)}),C.aO=(function(e){return this.fa(e|0)});function yf(){}C=yf.prototype=new cf,C.constructor=yf;function bf(){}bf.prototype=C;function xf(e){return!!(e&&e.$classData&&e.$classData.n.m)}function Sf(e){return!!(e&&e.$classData&&e.$classData.n.Z)}function Cf(e){e.ft=ka()}function wf(e,t){return e.b6=t,e}function Tf(){this.b6=null}C=Tf.prototype=new bf,C.constructor=Tf;function Ef(){}Ef.prototype=C,C.h=(function(e){return this.b6.h(e)}),C.e=(function(){return this.b6.e()}),C.b=(function(){return this.b6.b()});function Df(){this.dx=null,this.dy=!1,this.dv=null,this.dw=!1,this.fs=null,this.du=null,this.fr=null,this.dz=null,this.dA=!1,this.ft=null,Ji(this),Wi(this),Hi(this),Ui(this),Cf(this)}C=Df.prototype=new E,C.constructor=Df,C.h6=(function(){return this.dy||=(this.dx=Vs(new Hs,`p`,!1),!0),this.dx}),C.gd=(function(){return this.dw||=(this.dv=Vs(new Hs,`div`,!1),!0),this.dv}),C.hA=(function(){return this.dA||=(this.dz=new kl(this),!0),this.dz}),new D().i(Df,`com.raquo.laminar.api.package$$anon$1`,{bS:1,c4:1,bX:1,c2:1,c1:1,c3:1,bZ:1,bQ:1,bM:1,bP:1,af:1,ag:1,ae:1,bN:1});function Of(e){this.b6=null,wf(this,e)}C=Of.prototype=new Ef,C.constructor=Of,C.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),C.r=(function(){return this.e()}),C.f=(function(){return new zd(this)}),C.aQ=(function(){return`IndexedSeqView`}),new D().i(Of,`scala.collection.IndexedSeqView$Id`,{dC:1,dM:1,dw:1,dx:1,l:1,b:1,d:1,j:1,i:1,h:1,a:1,dP:1,k:1,dL:1,o:1,dB:1});function kf(){}C=kf.prototype=new vf,C.constructor=kf;function Af(){}Af.prototype=C;function jf(e,t){return!Nf(t)||e.e()===t.e()}function Mf(e,t){if(Nf(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.cX(),o=t.cX(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=j().u(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.f().c0(i),m=t.f().c0(i);r&&p.m();)r=j().u(p.j(),m.j())}return r}return $l(e,t)}function Nf(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Pf(){}C=Pf.prototype=new vf,C.constructor=Pf;function Ff(){}Ff.prototype=C;function $(e){this.bW=null,this.bW=e}C=$.prototype=new E,C.constructor=$,C.cY=(function(e){return jf(this,e)}),C.cb=(function(e){return Mf(this,e)}),C.cX=(function(){return rs().eA}),C.f=(function(){return new zd(new Of(this))}),C.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),C.r=(function(){return this.e()}),C.c=(function(e){return Q(this,e)}),C.g=(function(){return L().fl(this)}),C.k=(function(){return Gu(this)}),C.b=(function(){return Ql(this)}),C.aN=(function(e){Jo(this,e)}),C.aL=(function(e,t,n,r){return Xo(this,e,t,n,r)}),C.e=(function(){return this.bW.length|0}),C.h=(function(e){return this.bW[e]}),C.ay=(function(){return`WrappedVarArgs`}),C.aO=(function(e){return Zl(this,e|0)}),C.d=(function(e){return this.h(e|0)}),new D().i($,`scala.scalajs.runtime.WrappedVarArgs`,{bd:1,t:1,b:1,d:1,j:1,i:1,h:1,u:1,e:1,f:1,k:1,c:1,g:1,w:1,v:1,o:1,m:1,H:1,x:1,p:1,q:1,a:1});function If(){}C=If.prototype=new Ff,C.constructor=If;function Lf(){}Lf.prototype=C,C.eM=(function(e){return xc(this,e)});function Rf(){}C=Rf.prototype=new Af,C.constructor=Rf;function zf(){}zf.prototype=C,C.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),C.r=(function(){return this.e()}),C.aQ=(function(){return`IndexedSeq`}),C.cY=(function(e){return jf(this,e)}),C.cb=(function(e){return Mf(this,e)}),C.ay=(function(){return`ArraySeq`}),C.cX=(function(){return 2147483647});function Bf(){}C=Bf.prototype=new Ff,C.constructor=Bf;function Vf(){}Vf.prototype=C,C.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),C.r=(function(){return this.e()}),C.aQ=(function(){return`IndexedSeq`}),C.ay=(function(){return`ArraySeq`}),C.c=(function(e){return e instanceof Bf&&Do().br(this.R())!==Do().br(e.R())?!1:Q(this,e)});function Hf(e){this.ao=null,this.ao=e}C=Hf.prototype=new zf,C.constructor=Hf,C.e=(function(){return this.ao.a.length}),C.bn=(function(e){return this.ao.a[e]}),C.g=(function(){var e=L();return e.q(this.ao,e.n)}),C.c=(function(e){return e instanceof Hf?Ao().f1(this.ao,e.ao):Q(this,e)}),C.f=(function(){return new X(this.ao)}),C.h=(function(e){return this.bn(e)}),C.d=(function(e){return this.bn(e|0)}),new D().i(Hf,`scala.collection.immutable.ArraySeq$ofBoolean`,{aF:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Uf(e){this.ap=null,this.ap=e}C=Uf.prototype=new zf,C.constructor=Uf,C.e=(function(){return this.ap.a.length}),C.bf=(function(e){return this.ap.a[e]}),C.g=(function(){var e=L();return e.q(this.ap,e.n)}),C.c=(function(e){return e instanceof Uf?Ao().eW(this.ap,e.ap):Q(this,e)}),C.f=(function(){return new X(this.ap)}),C.h=(function(e){return this.bf(e)}),C.d=(function(e){return this.bf(e|0)}),new D().i(Uf,`scala.collection.immutable.ArraySeq$ofByte`,{aG:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Wf(e){this.ab=null,this.ab=e}C=Wf.prototype=new zf,C.constructor=Wf,C.e=(function(){return this.ab.a.length}),C.bg=(function(e){return this.ab.a[e]}),C.g=(function(){var e=L();return e.q(this.ab,e.n)}),C.c=(function(e){return e instanceof Wf?Ao().eX(this.ab,e.ab):Q(this,e)}),C.f=(function(){return new X(this.ab)}),C.aL=(function(e,t,n,r){return new ip(this.ab).aL(e,t,n,r)}),C.h=(function(e){return gr(this.bg(e))}),C.d=(function(e){return gr(this.bg(e|0))}),new D().i(Wf,`scala.collection.immutable.ArraySeq$ofChar`,{aH:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Gf(e){this.aq=null,this.aq=e}C=Gf.prototype=new zf,C.constructor=Gf,C.e=(function(){return this.aq.a.length}),C.bh=(function(e){return this.aq.a[e]}),C.g=(function(){var e=L();return e.q(this.aq,e.n)}),C.c=(function(e){if(e instanceof Gf){var t=this.aq,n=e.aq;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Q(this,e)}),C.f=(function(){return new X(this.aq)}),C.h=(function(e){return this.bh(e)}),C.d=(function(e){return this.bh(e|0)}),new D().i(Gf,`scala.collection.immutable.ArraySeq$ofDouble`,{aI:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Kf(e){this.ar=null,this.ar=e}C=Kf.prototype=new zf,C.constructor=Kf,C.e=(function(){return this.ar.a.length}),C.bi=(function(e){return this.ar.a[e]}),C.g=(function(){var e=L();return e.q(this.ar,e.n)}),C.c=(function(e){if(e instanceof Kf){var t=this.ar,n=e.ar;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Q(this,e)}),C.f=(function(){return new X(this.ar)}),C.h=(function(e){return this.bi(e)}),C.d=(function(e){return this.bi(e|0)}),new D().i(Kf,`scala.collection.immutable.ArraySeq$ofFloat`,{aJ:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function qf(e){this.as=null,this.as=e}C=qf.prototype=new zf,C.constructor=qf,C.e=(function(){return this.as.a.length}),C.bj=(function(e){return this.as.a[e]}),C.g=(function(){var e=L();return e.q(this.as,e.n)}),C.c=(function(e){return e instanceof qf?Ao().eY(this.as,e.as):Q(this,e)}),C.f=(function(){return new X(this.as)}),C.h=(function(e){return this.bj(e)}),C.d=(function(e){return this.bj(e|0)}),new D().i(qf,`scala.collection.immutable.ArraySeq$ofInt`,{aK:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Jf(e){this.at=null,this.at=e}C=Jf.prototype=new zf,C.constructor=Jf,C.e=(function(){return this.at.a.length>>>1|0}),C.bk=(function(e){var t=this.at.a,n=e<<1;return T(t[n],t[n+1|0])}),C.g=(function(){var e=L();return e.q(this.at,e.n)}),C.c=(function(e){return e instanceof Jf?Ao().eZ(this.at,e.at):Q(this,e)}),C.f=(function(){return new X(this.at)}),C.h=(function(e){return this.bk(e)}),C.d=(function(e){return this.bk(e|0)}),new D().i(Jf,`scala.collection.immutable.ArraySeq$ofLong`,{aL:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Yf(e){this.au=null,this.au=e}C=Yf.prototype=new zf,C.constructor=Yf,C.e=(function(){return this.au.a.length}),C.h=(function(e){return this.au.a[e]}),C.g=(function(){var e=L();return e.q(this.au,e.n)}),C.c=(function(e){return e instanceof Yf?Lo().f2(this.au,e.au):Q(this,e)}),C.f=(function(){return new X(this.au)}),C.d=(function(e){return this.h(e|0)}),new D().i(Yf,`scala.collection.immutable.ArraySeq$ofRef`,{aM:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Xf(e){this.av=null,this.av=e}C=Xf.prototype=new zf,C.constructor=Xf,C.e=(function(){return this.av.a.length}),C.bl=(function(e){return this.av.a[e]}),C.g=(function(){var e=L();return e.q(this.av,e.n)}),C.c=(function(e){return e instanceof Xf?Ao().f0(this.av,e.av):Q(this,e)}),C.f=(function(){return new X(this.av)}),C.h=(function(e){return this.bl(e)}),C.d=(function(e){return this.bl(e|0)}),new D().i(Xf,`scala.collection.immutable.ArraySeq$ofShort`,{aN:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Zf(e){this.aK=null,this.aK=e}C=Zf.prototype=new zf,C.constructor=Zf,C.e=(function(){return this.aK.a.length}),C.bm=(function(e){}),C.g=(function(){var e=L();return e.q(this.aK,e.n)}),C.c=(function(e){return e instanceof Zf?this.aK.a.length===e.aK.a.length:Q(this,e)}),C.f=(function(){return new X(this.aK)}),C.h=(function(e){this.bm(e)}),C.d=(function(e){this.bm(e|0)}),new D().i(Zf,`scala.collection.immutable.ArraySeq$ofUnit`,{aO:1,G:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,o:1,m:1,H:1,t:1,p:1,q:1,x:1,M:1,a:1});function Qf(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.b()|0;else{if(!i.b()){var o=1+a|0,s=i.G();a=o,i=s;continue}return-1}}function $f(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.b(),o=r.b();if(!(a||o)&&j().u(i.S(),r.S())){var s=i.G(),c=r.G();i=s,r=c;continue}return a&&o}}function ep(){}C=ep.prototype=new Af,C.constructor=ep;function tp(){}tp.prototype=C,C.fa=(function(e){return ed(this,e)}),C.h=(function(e){return td(this,e)}),C.cb=(function(e){return nd(this,e)}),C.aQ=(function(){return`LinearSeq`}),C.f=(function(){return new id(this)}),C.fG=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new fp(e.S(),this),n=t,r=e.G();!r.b();){var i=new fp(r.S(),this);n.b8=i,n=i,r=r.G()}return t}),C.b=(function(){return this===hp()}),C.fi=(function(e){if(e instanceof ep)return this.fG(e);if(e.r()===0)return this;var t=e.f();if(t.m()){for(var n=new fp(t.j(),this),r=n;t.m();){var i=new fp(t.j(),this);r.b8=i,r=i}return n}return this}),C.aN=(function(e){for(var t=this;!t.b();)e.d(t.S()),t=t.G()}),C.e=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.G();return t}),C.a3=(function(e){return e<0?1:Qf(this,e,0,this)}),C.ay=(function(){return`List`}),C.c=(function(e){return e instanceof ep?$f(this,this,e):Q(this,e)}),C.gi=(function(e){return rf(this,e,this)}),C.aO=(function(e){return ed(this,e|0)}),C.d=(function(e){return td(this,e|0)});function np(e){this.ac=null,this.ac=e}C=np.prototype=new Vf,C.constructor=np,C.e=(function(){return this.ac.a.length}),C.bn=(function(e){return this.ac.a[e]}),C.g=(function(){var e=L();return e.q(this.ac,e.n)}),C.c=(function(e){return e instanceof np?Ao().f1(this.ac,e.ac):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.ac)}),C.R=(function(){return this.ac}),C.h=(function(e){return this.bn(e)}),C.d=(function(e){return this.bn(e|0)}),new D().i(np,`scala.collection.mutable.ArraySeq$ofBoolean`,{aR:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function rp(e){this.ad=null,this.ad=e}C=rp.prototype=new Vf,C.constructor=rp,C.e=(function(){return this.ad.a.length}),C.bf=(function(e){return this.ad.a[e]}),C.g=(function(){var e=L();return e.q(this.ad,e.n)}),C.c=(function(e){return e instanceof rp?Ao().eW(this.ad,e.ad):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.ad)}),C.R=(function(){return this.ad}),C.h=(function(e){return this.bf(e)}),C.d=(function(e){return this.bf(e|0)}),new D().i(rp,`scala.collection.mutable.ArraySeq$ofByte`,{aS:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function ip(e){this.L=null,this.L=e}C=ip.prototype=new Vf,C.constructor=ip,C.e=(function(){return this.L.a.length}),C.bg=(function(e){return this.L.a[e]}),C.g=(function(){var e=L();return e.q(this.L,e.n)}),C.c=(function(e){return e instanceof ip?Ao().eX(this.L,e.L):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.L)}),C.aL=(function(e,t,n,r){var i=e.C;t.length!==0&&(i.l=``+i.l+t);var a=this.L.a.length;if(a!==0){if(n===``)i.fN(this.L);else{i.e();var o=this.L.a[0],s=``+or(o);i.l+=s;for(var c=1;c<a;){i.l=``+i.l+n;var l=this.L.a[c],u=``+or(l);i.l+=u,c=1+c|0}}}return r.length!==0&&(i.l=``+i.l+r),e}),C.R=(function(){return this.L}),C.h=(function(e){return gr(this.bg(e))}),C.d=(function(e){return gr(this.bg(e|0))}),new D().i(ip,`scala.collection.mutable.ArraySeq$ofChar`,{aT:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function ap(e){this.M=null,this.M=e}C=ap.prototype=new Vf,C.constructor=ap,C.e=(function(){return this.M.a.length}),C.bh=(function(e){return this.M.a[e]}),C.g=(function(){var e=L();return e.q(this.M,e.n)}),C.c=(function(e){if(e instanceof ap){var t=e.M;if(this.M===t)return!0;if(this.M.a.length===t.a.length){for(var n=0;n<this.M.a.length&&this.M.a[n]===t.a[n];)n=1+n|0;return n>=this.M.a.length}return!1}return Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.M)}),C.R=(function(){return this.M}),C.h=(function(e){return this.bh(e)}),C.d=(function(e){return this.bh(e|0)}),new D().i(ap,`scala.collection.mutable.ArraySeq$ofDouble`,{aU:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function op(e){this.N=null,this.N=e}C=op.prototype=new Vf,C.constructor=op,C.e=(function(){return this.N.a.length}),C.bi=(function(e){return this.N.a[e]}),C.g=(function(){var e=L();return e.q(this.N,e.n)}),C.c=(function(e){if(e instanceof op){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.N)}),C.R=(function(){return this.N}),C.h=(function(e){return this.bi(e)}),C.d=(function(e){return this.bi(e|0)}),new D().i(op,`scala.collection.mutable.ArraySeq$ofFloat`,{aV:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function sp(e){this.ae=null,this.ae=e}C=sp.prototype=new Vf,C.constructor=sp,C.e=(function(){return this.ae.a.length}),C.bj=(function(e){return this.ae.a[e]}),C.g=(function(){var e=L();return e.q(this.ae,e.n)}),C.c=(function(e){return e instanceof sp?Ao().eY(this.ae,e.ae):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.ae)}),C.R=(function(){return this.ae}),C.h=(function(e){return this.bj(e)}),C.d=(function(e){return this.bj(e|0)}),new D().i(sp,`scala.collection.mutable.ArraySeq$ofInt`,{aW:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function cp(e){this.af=null,this.af=e}C=cp.prototype=new Vf,C.constructor=cp,C.e=(function(){return this.af.a.length>>>1|0}),C.bk=(function(e){var t=this.af.a,n=e<<1;return T(t[n],t[n+1|0])}),C.g=(function(){var e=L();return e.q(this.af,e.n)}),C.c=(function(e){return e instanceof cp?Ao().eZ(this.af,e.af):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.af)}),C.R=(function(){return this.af}),C.h=(function(e){return this.bk(e)}),C.d=(function(e){return this.bk(e|0)}),new D().i(cp,`scala.collection.mutable.ArraySeq$ofLong`,{aX:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function lp(e){this.ag=null,this.ag=e}C=lp.prototype=new Vf,C.constructor=lp,C.e=(function(){return this.ag.a.length}),C.h=(function(e){return this.ag.a[e]}),C.g=(function(){var e=L();return e.q(this.ag,e.n)}),C.c=(function(e){return e instanceof lp?Lo().f2(this.ag,e.ag):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.ag)}),C.R=(function(){return this.ag}),C.d=(function(e){return this.h(e|0)}),new D().i(lp,`scala.collection.mutable.ArraySeq$ofRef`,{aY:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function up(e){this.ah=null,this.ah=e}C=up.prototype=new Vf,C.constructor=up,C.e=(function(){return this.ah.a.length}),C.bl=(function(e){return this.ah.a[e]}),C.g=(function(){var e=L();return e.q(this.ah,e.n)}),C.c=(function(e){return e instanceof up?Ao().f0(this.ah,e.ah):Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.ah)}),C.R=(function(){return this.ah}),C.h=(function(e){return this.bl(e)}),C.d=(function(e){return this.bl(e|0)}),new D().i(up,`scala.collection.mutable.ArraySeq$ofShort`,{aZ:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function dp(e){this.aw=null,this.aw=e}C=dp.prototype=new Vf,C.constructor=dp,C.e=(function(){return this.aw.a.length}),C.bm=(function(e){}),C.g=(function(){var e=L();return e.q(this.aw,e.n)}),C.c=(function(e){return e instanceof dp?this.aw.a.length===e.aw.a.length:Bf.prototype.c.call(this,e)}),C.f=(function(){return new X(this.aw)}),C.R=(function(){return this.aw}),C.h=(function(e){this.bm(e)}),C.d=(function(e){this.bm(e|0)}),new D().i(dp,`scala.collection.mutable.ArraySeq$ofUnit`,{b0:1,I:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,o:1,m:1,C:1,B:1,p:1,q:1,a:1});function fp(e,t){this.cR=null,this.b8=null,this.cR=e,this.b8=t}C=fp.prototype=new tp,C.constructor=fp,C.ai=(function(){return new Uu(this)}),C.D=(function(){return 2}),C.F=(function(){return`::`}),C.E=(function(e){if(e===0)return this.cR;if(e===1)return this.b8;throw Nu(new W,e)}),C.S=(function(){return this.cR}),C.G=(function(){return this.b8}),new D().i(fp,`scala.collection.immutable.$colon$colon`,{dQ:1,a8:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,aA:1,Z:1,aQ:1,aP:1,p:1,q:1,aC:1,x:1,a:1,aE:1,L:1});function pp(){mp=this,hp(),hp()}C=pp.prototype=new tp,C.constructor=pp,C.ai=(function(){return new Uu(this)}),C.D=(function(){return 0}),C.F=(function(){return`Nil`}),C.E=(function(e){throw Nu(new W,e)}),C.gF=(function(){throw new Ru(`head of empty list`)}),C.hE=(function(){throw new Lu(`tail of empty list`)}),C.r=(function(){return 0}),C.f=(function(){return dl().I}),C.S=(function(){this.gF()}),C.G=(function(){this.hE()}),new D().i(pp,`scala.collection.immutable.Nil$`,{dV:1,a8:1,y:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,u:1,w:1,v:1,aA:1,Z:1,aQ:1,aP:1,p:1,q:1,aC:1,x:1,a:1,aE:1,L:1});var mp;function hp(){return mp||=new pp,mp}function gp(e,t){return e.C=t,e}function _p(e){return gp(e,new Wl),e}function vp(){this.C=null}C=vp.prototype=new Ff,C.constructor=vp,C.eM=(function(e){return xc(this,e)}),C.f=(function(){return new zd(new Of(this))}),C.a3=(function(e){var t=this.C.e();return t===e?0:t<e?-1:1}),C.aQ=(function(){return`IndexedSeq`}),C.e=(function(){return this.C.e()}),C.r=(function(){return this.C.e()}),C.fJ=(function(e){var t=this.C,n=``+or(e);return t.l+=n,this}),C.k=(function(){return this.C.l}),C.b=(function(){return this.C.e()===0}),C.h=(function(e){return gr(this.C.eS(e))}),C.d=(function(e){var t=e|0;return gr(this.C.eS(t))}),C.cV=(function(e){return this.fJ(vr(e))}),C.fj=(function(){return this.C.l}),new D().i(vp,`scala.collection.mutable.StringBuilder`,{e5:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,b2:1,b3:1,b1:1,e3:1,o:1,m:1,C:1,B:1,a6:1,a:1});function yp(e,t){return e.ax=t,e}function bp(e){return yp(e,[]),e}function xp(){this.ax=null}C=xp.prototype=new Lf,C.constructor=xp,C.aQ=(function(){return`IndexedSeq`}),C.f=(function(){return new zd(new Of(this))}),C.a3=(function(e){var t=this.ax.length|0;return t===e?0:t<e?-1:1}),C.h=(function(e){return this.ax[e]}),C.e=(function(){return this.ax.length|0}),C.r=(function(){return this.ax.length|0}),C.ay=(function(){return`WrappedArray`}),C.fj=(function(){return this}),C.cV=(function(e){return this.ax.push(e),this}),C.d=(function(e){var t=e|0;return this.ax[t]}),new D().i(xp,`scala.scalajs.js.WrappedArray`,{er:1,dW:1,z:1,n:1,l:1,b:1,d:1,j:1,i:1,h:1,e:1,f:1,k:1,c:1,g:1,D:1,s:1,A:1,F:1,E:1,b2:1,b3:1,e4:1,dZ:1,q:1,p:1,B:1,o:1,m:1,C:1,e1:1,b1:1,a:1}),Na(new(Nd.r()).C([]));