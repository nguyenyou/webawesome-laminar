var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=/* @__PURE__ */ new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:ee,getPrototypeOf:te}=Object,ne=globalThis,re=ne.trustedTypes,ie=re?re.emptyScript:``,ae=ne.reactiveElementPolyfillSupport,oe=(e,t)=>e,se={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!d(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),ne.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(oe(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe(`properties`))){let e=this.properties,t=[...m(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};ue.elementStyles=[],ue.shadowRootOptions={mode:`open`},ue[oe(`elementProperties`)]=/* @__PURE__ */ new Map,ue[oe(`finalized`)]=/* @__PURE__ */ new Map,ae?.({ReactiveElement:ue}),(ne.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const de=globalThis,fe=e=>e,pe=de.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,ge=`lit$${Math.random().toFixed(9).slice(2)}$`,_e=`?`+ge,ve=`<${_e}>`,ye=document,be=()=>ye.createComment(``),xe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Se=Array.isArray,Ce=e=>Se(e)||typeof e?.[Symbol.iterator]==`function`,we=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,De=/>/g,Oe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ke=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,Me=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Pe=/* @__PURE__ */ new WeakMap,Fe=ye.createTreeWalker(ye,129);function Ie(e,t){if(!Se(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}const Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Te;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Te?c[1]===`!--`?o=Ee:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Oe):(je.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Oe):o=De:o===Oe?c[0]===`>`?(o=i??Te,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Oe:c[3]===`"`?Ae:ke):o===Ae||o===ke?o=Oe:o===Ee||o===De?o=Te:(o=Oe,i=void 0);let d=o===Oe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Te?n+ve:l>=0?(r.push(s),n.slice(0,l)+he+n.slice(l)+ge+d):n+ge+(l===-2?t:d)}return[Ie(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),Fe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(ge),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ue:r[1]===`?`?We:r[1]===`@`?Ge:He}),i.removeAttribute(e)}else e.startsWith(ge)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(je.test(i.tagName)){let e=i.textContent.split(ge),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],be()),Fe.nextNode(),c.push({type:2,index:++a});i.append(e[t],be())}}}else if(i.nodeType===8){if(i.data===_e)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ge,e+1))!==-1;)c.push({type:7,index:a}),e+=ge.length-1}}a++}}static createElement(e,t){let n=ye.createElement(`template`);return n.innerHTML=e,n}};function ze(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=xe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ze(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ye).importNode(t,!0);Fe.currentNode=r;let i=Fe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Fe.nextNode(),a++)}return Fe.currentNode=ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),xe(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(Ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new Re(e)),t}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(be()),this.O(be()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=fe(e).nextSibling;fe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ze(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ze(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!xe(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ue=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},We=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Ge=class extends He{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??h)===Ne)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}};const qe={M:he,P:ge,A:_e,C:1,L:Le,R:Be,D:Ce,V:ze,I:Ve,H:He,N:We,U:Ge,B:Ue,F:Ke},Je=de.litHtmlPolyfillSupport;Je?.(Re,Ve),(de.litHtmlVersions??=[]).push(`3.3.3`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ve(t.insertBefore(be(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ze=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=c`
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
`,et=c`
  :host {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.375em 0.625em;
    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    font-size: max(var(--wa-font-size-3xs), 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    vertical-align: middle;
    white-space: nowrap;
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
    border-radius: var(--wa-border-radius-s);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;

    min-width: 1.25em; /* <-- this is what Safari respects for intrinsic */
    min-height: 1em;
  }

  /* Appearance modifiers */
  :host([appearance='outlined']) {
    --pulse-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));

    color: var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));
    background-color: transparent;
    border-color: var(--wa-color-border-loud, var(--wa-color-brand-border-loud));
  }

  :host([appearance='filled']) {
    --pulse-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: transparent;
  }

  :host([appearance='filled-outlined']) {
    --pulse-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));

    color: var(--wa-color-on-normal, var(--wa-color-brand-on-normal));
    background-color: var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal));
    border-color: var(--wa-color-border-normal, var(--wa-color-brand-border-normal));
  }

  :host([appearance='accent']) {
    --pulse-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));

    color: var(--wa-color-on-loud, var(--wa-color-brand-on-loud));
    background-color: var(--wa-color-fill-loud, var(--wa-color-brand-fill-loud));
    border-color: transparent;
  }

  /* Pill modifier */
  :host([pill]) {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse attention */
  :host([attention='pulse']) {
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  /* Bounce attention */
  :host([attention='bounce']) {
    animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-5px);
    }
    60% {
      transform: translateY(-2px);
    }
  }

  /* Prevents vertical space when icons with vertical-align are slotted in - https://github.com/shoelace-style/webawesome/issues/2280 */
  [part='start'],
  [part='end'] {
    line-height: 0;
  }

  slot[name='start']::slotted(*) {
    margin-inline-end: 0.375em;
  }

  slot[name='end']::slotted(*) {
    margin-inline-start: 0.375em;
  }
`,tt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,rt=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?nt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&tt(t,n,i),i},it=(e,t,n)=>t.has(e)||rt(`Cannot `+n),at=(e,t,n)=>(it(e,t,`read from private field`),n?n.call(e):t.get(e)),ot=(e,t,n)=>t.has(e)?rt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),st=(e,t,n,r)=>(it(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},lt={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},ut=(e=lt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?ut(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function dt(e){return _({...e,state:!0,attribute:!1})}
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
var mt=c`
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
`,ht=/;\s+$/;function gt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _t(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ht)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var vt,yt=class extends Ze{constructor(){super(),ot(this,vt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[mt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){at(this,vt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),st(this,vt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=_t({property:gt(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=_t({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};vt=/* @__PURE__ */ new WeakMap,g([_()],yt.prototype,`dir`,2),g([_()],yt.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],yt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=class extends yt{constructor(){super(...arguments),this.variant=`brand`,this.appearance=`accent`,this.pill=!1,this.attention=`none`}render(){return Me`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base badge" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};bt.css=[$e,et],g([_({reflect:!0})],bt.prototype,`variant`,2),g([_({reflect:!0})],bt.prototype,`appearance`,2),g([_({type:Boolean,reflect:!0})],bt.prototype,`pill`,2),g([_({reflect:!0})],bt.prototype,`attention`,2),bt=g([ct(`wa-badge`)],bt);var xt=/* @__PURE__ */ t({default:()=>bt}),St=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Ct=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},wt=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Tt=class extends yt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ct))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[wt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Tt.formAssociated=!0,g([_({reflect:!0})],Tt.prototype,`name`,2),g([_({type:Boolean})],Tt.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],Tt.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],Tt.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],Tt.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],Tt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Et={small:`s`,medium:`m`,large:`l`},Dt=/* @__PURE__ */ new Set;function Ot(e,t){t in Et&&!Dt.has(`${e}:${t}`)&&(Dt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Et[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},At=c`
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
`,jt=c`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Mt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Nt=/* @__PURE__ */ new Set,Pt=/* @__PURE__ */ new Map;let Ft,It=`ltr`,Lt=`en`;const Rt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Rt){let e=new MutationObserver(Bt);It=document.documentElement.dir||`ltr`,Lt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function zt(...e){e.map(e=>{let t=e.$code.toLowerCase();Pt.has(t)?Pt.set(t,Object.assign(Object.assign({},Pt.get(t)),e)):Pt.set(t,e),Ft||=e}),Bt()}function Bt(){Rt&&(It=document.documentElement.dir||`ltr`,Lt=document.documentElement.lang||navigator.language),[...Nt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Vt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Nt.add(this.host)}hostDisconnected(){Nt.delete(this.host)}dir(){return`${this.host.dir||It}`.toLowerCase()}lang(){let e=`${this.host.lang||Lt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ft?Ft.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Pt.get(`${n}-${r}`),a=Pt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ft&&Ft[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ft&&Ft[e])i=Ft[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ht={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;zt(Ht);var Ut=Ht,Wt=class extends Vt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};zt(Ut);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Gt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Kt=e=>(...t)=>({_$litDirective$:e,values:t});var qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Jt=Kt(class extends qt{constructor(e){if(super(e),e.type!==Gt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),Yt=e=>e??h,Xt=Symbol.for(``),Zt=e=>{
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
if(e?.r===Xt)return e?._$litStatic$},Qt=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Xt}),$t=/* @__PURE__ */ new Map,en=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Zt(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=$t.get(e))===void 0&&(o.raw=o,$t.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Tt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new kt(this,`[default]`,`start`,`end`),this.localize=new Wt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,St()]}handleSizeChange(){Ot(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Ct)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Qt`a`:Qt`button`;return en`
      <${t}
        part="base button"
        class=${Jt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Yt(e?void 0:this.disabled)}
        type=${Yt(e?void 0:this.type)}
        title=${this.title}
        name=${Yt(e?void 0:this.name)}
        value=${Yt(e?void 0:this.value)}
        href=${Yt(e?this.href:void 0)}
        target=${Yt(e?this.target:void 0)}
        download=${Yt(e?this.download:void 0)}
        rel=${Yt(e&&this.rel?this.rel:void 0)}
        role=${Yt(e?void 0:`button`)}
        aria-disabled=${Yt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?en`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?en`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};v.shadowRootOptions={...Tt.shadowRootOptions,delegatesFocus:!0},v.css=[jt,$e,At],g([pt(`.button`)],v.prototype,`button`,2),g([pt(`slot:not([name])`)],v.prototype,`labelSlot`,2),g([dt()],v.prototype,`invalid`,2),g([dt()],v.prototype,`isIconButton`,2),g([_()],v.prototype,`title`,2),g([_({reflect:!0})],v.prototype,`variant`,2),g([_({reflect:!0})],v.prototype,`appearance`,2),g([_({reflect:!0})],v.prototype,`size`,2),g([Mt(`size`)],v.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),g([_({type:Boolean})],v.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`pill`,2),g([_()],v.prototype,`type`,2),g([_({reflect:!0})],v.prototype,`name`,2),g([_({reflect:!0})],v.prototype,`value`,2),g([_({reflect:!0})],v.prototype,`href`,2),g([_()],v.prototype,`target`,2),g([_()],v.prototype,`rel`,2),g([_()],v.prototype,`download`,2),g([_({attribute:`formaction`})],v.prototype,`formAction`,2),g([_({attribute:`formenctype`})],v.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],v.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],v.prototype,`formTarget`,2),g([Mt(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),g([Mt(`href`)],v.prototype,`handleHrefChange`,1),g([Mt(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=g([ct(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tn=c`
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
`,nn=class extends yt{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Wt(this)}render(){return Me`
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
    `}};nn.css=tn,nn=g([ct(`wa-spinner`)],nn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},an=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},on=c`
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
`,sn=``,cn=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function ln(){return sn.replace(/\/$/,``)}function un(e){cn=e}function dn(){if(!cn){let e=document.querySelector(`[data-fa-kit-code]`);e&&un(e.getAttribute(`data-fa-kit-code`)||``)}return cn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=`7.3.0`;function pn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function mn(e,t,n){let r=pn(e,t,n),i=ln();if(i)return`${i}/${r}/${e}.svg`;let a=dn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${fn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${fn}/svgs/${r}/${e}.svg`}var hn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>mn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function gn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var _n={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},vn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=_n[n][e]??_n.regular[e]??_n.regular[`circle-question`];return r?gn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},yn=`classic`,bn=[hn,vn],xn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Sn(e){xn.add(e)}function Cn(e){xn.delete(e)}function wn(e){return bn.find(t=>t.name===e)}function Tn(){return yn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:En}=qe,Dn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=Symbol(),kn=Symbol(),An,jn=/* @__PURE__ */ new Map,y=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?On:kn}catch{return kn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return On;An||=new DOMParser;let r=An.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):On}catch{return On}}}connectedCallback(){super.connectedCallback(),Sn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Cn(this)}async getIconSource(){let e=wn(this.library),t=this.family||Tn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?wn(this.library):void 0;if(!e){this.svg=null;return}let r=jn.get(e);r||(r=this.resolveIcon(e,n),jn.set(e,r));let i=await r;if(i===kn&&jn.delete(e),e===(await this.getIconSource()).url){if(Dn(i))this.svg=i;else switch(i){case kn:case On:this.svg=null,this.dispatchEvent(new rn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new an)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=wn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=on,g([dt()],y.prototype,`svg`,2),g([_({reflect:!0})],y.prototype,`name`,2),g([_({reflect:!0})],y.prototype,`family`,2),g([_({reflect:!0})],y.prototype,`variant`,2),g([_({reflect:!0})],y.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),g([_()],y.prototype,`src`,2),g([_()],y.prototype,`label`,2),g([_({reflect:!0})],y.prototype,`library`,2),g([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),g([_({type:String,reflect:!0})],y.prototype,`flip`,2),g([_({type:String,reflect:!0})],y.prototype,`animation`,2),g([Mt(`label`)],y.prototype,`handleLabelChange`,1),g([Mt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=g([ct(`wa-icon`)],y);var Mn=/* @__PURE__ */ t({default:()=>v}),b
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Nn(e){this.c=e}b=Nn.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function x(e,t){this.l=e,this.h=t}b=x.prototype,b.toString=(function(){return Ka(this.l,this.h)});function Pn(e){switch(typeof e){case`string`:return Pu.l();case`number`:return Yn(e)?e<<24>>24===e?Al.l():e<<16>>16===e?Vl.l():Ou.l():Xn(e)?Du.l():Eu.l();case`boolean`:return il.l();case`undefined`:return za.l();default:return e instanceof x?ju.l():e instanceof Nn?sl.l():e&&e.$classData?e.$classData.l():null}}function Fn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Yn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Xn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof x?`java.lang.Long`:e instanceof Nn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hc()}}function In(e,t){switch(typeof e){case`string`:return Nu(e,t);case`number`:return wu(e,t);case`boolean`:return nl(e,t);case`undefined`:return Ia(e,t);default:return e&&e.$classData||e===null?e.i(t):e instanceof x?ku(e.l,e.h,t):e instanceof Nn?ol(e.c,t):tr.prototype.i.call(e,t)}}function Ln(e){switch(typeof e){case`string`:return K(e);case`number`:return Tu(e);case`boolean`:return rl(e);case`undefined`:return La(e);default:return e&&e.$classData||e===null?e.o():e instanceof x?Au(e.l,e.h):e instanceof Nn?al(e.c):tr.prototype.o.call(e)}}function Rn(e){return e===void 0?`undefined`:e.toString()}function zn(e){if(e===0)throw new kl(`/ by zero`);return e}function Bn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Vn(e){return String.fromCharCode(e)}var Hn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Un(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Wn=0,Gn=/* @__PURE__ */ new WeakMap;function Kn(e){switch(typeof e){case`string`:return K(e);case`number`:return Tu(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:K(n);default:if(e===null)return 0;var r=Gn.get(e);return r===void 0&&(r=Wn+1|0,Wn=r,Gn.set(e,r)),r}}function qn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Zn(e){return new Nn(e)}Zn(0);function S(e,t){return new x(e,t)}var Qn=S(0,0);function $n(e){return e===null?0:e.c}function er(e){return e===null?Qn:e}function tr(){}b=tr.prototype,b.constructor=tr;function C(){}C.prototype=b,b.o=(function(){return Kn(this)}),b.i=(function(e){return this===e}),b.s=(function(){var e=this.o();return Fn(this)+`@`+(e>>>0).toString(16)}),b.toString=(function(){return this.s()});function w(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=w.prototype=new C,b.constructor=w,b.a5=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),b.Z=(function(){return new w(this.a.slice())});function nr(){}nr.prototype=b;function rr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=rr.prototype=new C,b.constructor=rr,b.a5=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),b.Z=(function(){return new rr(this.a.slice())});function ir(e){this.a=typeof e==`number`?new Uint16Array(e):e}b=ir.prototype=new C,b.constructor=ir,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new ir(this.a.slice())});function ar(e){this.a=typeof e==`number`?new Int8Array(e):e}b=ar.prototype=new C,b.constructor=ar,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Int16Array(e):e}b=or.prototype=new C,b.constructor=or,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new or(this.a.slice())});function sr(e){this.a=typeof e==`number`?new Int32Array(e):e}b=sr.prototype=new C,b.constructor=sr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new sr(this.a.slice())});function cr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}b=cr.prototype=new C,b.constructor=cr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),b.Z=(function(){return new cr(this.a.slice())});function lr(e){this.a=typeof e==`number`?new Float32Array(e):e}b=lr.prototype=new C,b.constructor=lr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new lr(this.a.slice())});function ur(e){this.a=typeof e==`number`?new Float64Array(e):e}b=ur.prototype=new C,b.constructor=ur,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Z=(function(){return new ur(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=T.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i,t===`J`)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new nr;n.constructor=t,n.a5=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),n.Z=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===E});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new T().a(this),this.A}),b.l=(function(){return this.L||=new _c(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null}),b.U=(function(e){if(this===dr)throw Ml(new Nl);return new(this.r()).C(e)});var E=new T;E.n={},E.E=`Ljava.lang.Object;`,E.F=(e=>!e.X),E.N=`java.lang.Object`,E.I=(e=>e!==null),E.A=new T().y(E,w,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),tr.prototype.$classData=E;var dr=new T().p(void 0,`V`,`void`,void 0,void 0),fr=new T().p(!1,`Z`,`boolean`,rr,void 0),pr=new T().p(0,`C`,`char`,ir,Uint16Array),mr=new T().p(0,`B`,`byte`,ar,Int8Array),hr=new T().p(0,`S`,`short`,or,Int16Array),gr=new T().p(0,`I`,`int`,sr,Int32Array),_r=new T().p(Qn,`J`,`long`,cr,Int32Array),vr=new T().p(0,`F`,`float`,lr,Float32Array),yr=new T().p(0,`D`,`double`,ur,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function br(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function xr(e,t){return new sr(br(e,t,-1))}function Sr(e){return Pn(e).cA()+`@`+Kn(e)}function Cr(e){var t=e.cG;return t===void 0?Sr(e):t}function wr(){Tr=this,Er().h8(new G((e=>void 0)),oo().ef,!0)}b=wr.prototype=new C,b.constructor=wr,b.h8=(function(e,t,n){return new Kc(e,n,t,this)}),new T().i(wr,`com.raquo.airstream.core.Observer$`,{bi:1});var Tr;function Er(){return Tr||=new wr,Tr}function Dr(e){this.c8=null,this.cH=null,this.c9=0,this.c8=e,this.cH=void 0;var t=Ur().bx();this.c9=t===void 0?1:1+t.c9|0,jr().bD===-1||this.c9>jr().bD?Zs().cD(new yu(this,jr().bD)):Fr().Q?Fr().at.push(this)|0:Ur().cu(this)}b=Dr.prototype=new C,b.constructor=Dr;var Or=new T().i(Dr,`com.raquo.airstream.core.Transaction`,{bl:1});function kr(){this.bD=0,this.cI=null,Ar=this,this.bD=1e3,this.cI=new G((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=kr.prototype=new C,b.constructor=kr,b.eG=(function(e){try{e.c8.g(e);var t=e.cH;if(t!==void 0)for(;t.he();)t.hb().hg(e)}catch(e){var n=e instanceof ks?e:new Y(e);Zs().cD(n)}}),new T().i(kr,`com.raquo.airstream.core.Transaction$`,{bm:1});var Ar;function jr(){return Ar||=new kr,Ar}function Mr(e){e.bE.length|0?new Dr(new G((t=>{for(;(e.bE.length|0)>0;){var n=e.bE.shift();try{n.g(t)}catch(e){var r=e instanceof ks?e:new Y(e);Zs().cD(r)}}for(;(e.at.length|0)>0;){var i=e.at.shift();Ur().cu(i)}}))):(e.at.length|0)>0&&new Dr(new G((t=>{for(;(e.at.length|0)>0;)Ur().cu(e.at.shift())})))}function Nr(){this.Q=!1,this.bE=null,this.at=null,Pr=this,this.Q=!1,this.bE=ci().aI(P().ar(new(M.r()).C([]))),this.at=ci().aI(P().ar(new(Or.r()).C([])))}b=Nr.prototype=new C,b.constructor=Nr,new T().i(Nr,`com.raquo.airstream.core.Transaction$onStart$`,{bn:1});var Pr;function Fr(){return Pr||=new Nr,Pr}function Ir(e,t){return e.au.get(t)}function Lr(e,t){e.bF.unshift(t)}function Rr(e){return e.bF.shift()}function zr(e,t,n){var r=Ir(e,t),i=r===void 0,a=r===void 0?ci().aI(P().ar(new(Or.r()).C([]))):r;a.push(n),i&&e.au.set(t,a)}function Br(e,t){var n=Ir(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.au.delete(t),i}}function Vr(){this.bF=null,this.au=null,Hr=this,this.bF=ci().aI(P().ar(new(Or.r()).C([]))),this.au=/* @__PURE__ */ new Map}b=Vr.prototype=new C,b.constructor=Vr,b.cu=(function(e){var t=this.bx();t===void 0?(Lr(this,e),jr().eG(e),this.fU(e)):zr(this,t,e)}),b.fU=(function(e){for(var t=e;;){var n=this.bx(),r=t;if(!(n!==void 0&&N().H(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gI(t),t.c8=jr().cI;var i=this.bx();if(N().H(i,void 0)){if((this.au.size|0)>0){var a=new Gs(0);throw this.au.forEach((e=>((t,n)=>{e.be=e.be+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.be+` children for `+(this.au.size|0)+` transactions remain. This is a bug in Airstream.`)}return}jr().eG(i),t=i}}),b.gI=(function(e){for(var t=e;;){var n=Br(this,t);if(N().H(n,void 0)){Rr(this);var r=this.bx();if(!N().H(r,void 0))t=r;else return}else{Lr(this,n);return}}}),b.bx=(function(){return this.bF[0]}),new T().i(Vr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bo:1});var Hr;function Ur(){return Hr||=new Vr,Hr}function Wr(e,t){var n=e.a6.indexOf(t)|0;if(n!==-1)e.a6.splice(n,1),e.D.d()||t.f1();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Gr(e){for(;(e.bG.length|0)>0;)Wr(e,e.bG.shift())}function Kr(e){this.cJ=null,this.a6=null,this.aO=!1,this.bG=null,this.D=null,this.aP=0,this.cJ=e,this.a6=ci().aI(P().ar(new(Jr.r()).C([]))),this.aO=!0,this.bG=ci().aI(P().ar(new(Jr.r()).C([]))),this.D=q(),this.aP=0}b=Kr.prototype=new C,b.constructor=Kr,b.eB=(function(){if(this.D.d()){var e=Fr(),t=(()=>{var e=new Ko(this.cJ);this.D=new Lu(e),this.aO=!1,this.aP=0;for(var t=0,n=this.a6.length|0;t<n;){var r=t+this.aP|0;this.a6[r].f0(e),t=1+t|0}Gr(this),this.aO=!0,this.aP=0});if(Fr(),e.Q)t();else{e.Q=!0;try{t()}finally{e.Q=!1,Mr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),b.fN=(function(){if(this.D.d())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aO=!1;for(var e=this.a6,t=0,n=e.length|0;t<n;)e[t].f1(),t=1+t|0;Gr(this);var r=this.D;r.d()||r.x().gx(),Gr(this),this.aO=!0,this.D=q()}),b.fu=(function(e,t){t?(this.aP=1+this.aP|0,this.a6.unshift(e)):this.a6.push(e);var n=this.D;if(!n.d()){var r=n.x();e.f0(r)}}),b.gO=(function(e){this.aO?Wr(this,e):this.bG.push(e)}),new T().i(Kr,`com.raquo.airstream.ownership.DynamicOwner`,{bp:1});function qr(e,t,n){this.bH=null,this.cK=null,this.bI=null,this.bH=e,this.cK=t,this.bI=q(),e.fu(this,n)}b=qr.prototype=new C,b.constructor=qr,b.c3=(function(){this.bH.gO(this)}),b.f0=(function(e){var t=Fr(),n=(()=>{this.bI=this.cK.g(e)});if(Fr(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Mr(t)}}}),b.f1=(function(){var e=this.bI;e.d()||(e.x().c3(),this.bI=q())});var Jr=new T().i(qr,`com.raquo.airstream.ownership.DynamicSubscription`,{bq:1});function Yr(){}b=Yr.prototype=new C,b.constructor=Yr,b.h6=(function(e,t,n){return new qr(e,new G((e=>new Lu(t.g(e)))),n)}),b.gY=(function(e,t,n){return new qr(e,new G((e=>(t.g(e),q()))),n)}),new T().i(Yr,`com.raquo.airstream.ownership.DynamicSubscription$`,{br:1});var Xr;function Zr(){return Xr||=new Yr,Xr}function Qr(e){e.aQ=ci().aI(P().ar(new(ii.r()).C([])))}function $r(e){for(var t=e.aQ,n=0,r=t.length|0;n<r;)ni(t[n]),n=1+n|0;e.aQ.length=0}function ei(e,t){var n=e.aQ.indexOf(t)|0;if(n!==-1)e.aQ.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function ti(e,t){e.aQ.push(t)}function ni(e){if(!e.cb)e.cM.aJ(),e.cb=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function ri(e,t){this.cN=null,this.cM=null,this.cb=!1,this.cN=e,this.cM=t,this.cb=!1,e.gH(this)}b=ri.prototype=new C,b.constructor=ri,b.c3=(function(){ni(this),ei(this.cN,this)});var ii=new T().i(ri,`com.raquo.airstream.ownership.Subscription`,{bu:1});function ai(e,t){this.cO=null,this.cP=null,this.a7=null,this.av=!1,this.cO=e,this.cP=t,this.a7=q(),this.av=!1}b=ai.prototype=new C,b.constructor=ai,b.gt=(function(){var e=this.a7;return!e.d()&&!e.x().bH.D.d()}),b.gT=(function(e){if(this.av)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a7;if(t.d())var n=!1;else var r=t.x().bH,n=e===null?r===null:e===r;if(!n){this.gt()&&!e.D.d()&&(this.av=!0);var i=this.a7;i.d()||(i.x().c3(),this.a7=q());var a=Zr().h6(e,new G((e=>(this.av||this.cO.aJ(),new ri(e,new vl((()=>{this.av||this.cP.aJ()})))))),!1);this.a7=new Lu(a),this.av=!1}}),b.fH=(function(){if(this.av)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a7;e.d()||e.x().c3(),this.a7=q()}),new T().i(ai,`com.raquo.airstream.ownership.TransferableSubscription`,{bv:1});function oi(){}b=oi.prototype=new C,b.constructor=oi,b.aI=(function(e){return[...zo().h4(e)]}),new T().i(oi,`com.raquo.ew.JsArray$`,{bw:1});var si;function ci(){return si||=new oi,si}function li(){}b=li.prototype=new C,b.constructor=li,b.gc=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new T().i(li,`com.raquo.ew.JsArray$RichJsArray$`,{bx:1});var ui;function di(){return ui||=new li,ui}function fi(){this.cQ=null,pi=this,document.createElement(`template`),this.fL(W().c.gZ().h0()),this.cQ=/* @__PURE__ */ RegExp(` `,`g`)}b=fi.prototype=new C,b.constructor=fi,b.fz=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof ks?e:new Y(e);if(n instanceof Y&&n.S instanceof DOMException)return!1;throw n instanceof Y?n.S:n}}),b.gu=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().H(t,r))return!0;n=r}}),b.fK=(function(e){return document.createElement(e.cB())}),b.gj=(function(e,t){var n=this.gk(e,t);return n===void 0?void 0:t.aR.bY(n)}),b.gk=(function(e,t){var n=e.a0.getAttributeNS(null,t.a8);return n===null?void 0:n}),b.f7=(function(e,t,n){this.gS(e,t,t.aR.c1(n))}),b.gS=(function(e,t,n){n===null?this.gN(e,t):e.a0.setAttribute(t.a8,n)}),b.gN=(function(e,t){e.a0.removeAttribute(t.a8)}),b.f8=(function(e,t,n){var r=e.a0,i=t.a9,a=t.aa,o=n===null?null:n;o===null?(a.V(new G((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.V(new G((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.fL=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dB)}),b.gn=(function(e,t){var n=this.go(e,t);return n===void 0?void 0:t.cf.bY(n)}),b.go=(function(e,t){var n=e.cC(),r=t.bK,i=n.getAttributeNS(r.d()?null:r.x(),t.cg);return i===null?void 0:i}),b.gU=(function(e,t,n){this.gV(e,t,t.cf.c1(n))}),b.gV=(function(e,t,n){if(n===null)this.gP(e,t);else{var r=t.bK;if(r.d())e.cC().setAttribute(t.bJ,n);else{var i=r.x();e.cC().setAttributeNS(i,t.bJ,n)}}}),b.gP=(function(e,t){var n=e.cC(),r=t.bK;n.removeAttributeNS(r.d()?null:r.x(),t.cg)}),b.fM=(function(e){return document.createTextNode(e)}),b.fP=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new ff(this.fO(r),n);r=i,n=a}}),b.fO=(function(e){if(e instanceof HTMLElement){var t=e.id;if(_o(),t!==``)var n=`#`+t;else var r=e.className,n=(_o(),r===``?``:`.`+r.replace(this.cQ,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new T().i(fi,`com.raquo.laminar.DomApi$`,{by:1});var pi;function D(){return pi||=new fi,pi}function mi(e,t,n){this.cd=null,this.cR=null,this.cc=null,this.cd=e,this.cR=t,this.cc=n}b=mi.prototype=new C,b.constructor=mi,b.V=(function(e){this.cd===null?this.cc===null?lo().gd(this.cR,e):di().gc(this.cc,Lc().gg(e)):this.cd.V(e)}),new T().i(mi,`com.raquo.laminar.Seq`,{bz:1});function hi(){gi=this,$()}b=hi.prototype=new C,b.constructor=hi,new T().i(hi,`com.raquo.laminar.Seq$`,{bA:1});var gi;function _i(){return gi||=new hi,gi}function vi(e){Er(),Zs()}function yi(e){e.fd=Ri()}function bi(e){xi(e,new G((e=>{e.dq.a0.focus()})))}function xi(e,t){return new ns(new G((e=>{var n=new Ws(!e.aS.D.d()),r=new G((e=>{n.bU?n.bU=!1:t.g(e)}));Zr().gY(e.aS,new G((e=>(t=>{r.g(new Fi(e,t))}))(e)),!1)})),Ri())}function Si(){this.ce=null,this.da=null,Ci=this,this.ce=new Jo(wi()),new Jo(wi()),new Jo(wi()),this.da=new qo}b=Si.prototype=new C,b.constructor=Si,new T().i(Si,`com.raquo.laminar.codecs.package$`,{bI:1});var Ci;function wi(){return Ci||=new Si,Ci}function Ti(e){e.fe=Ei(e,`class`,` `)}function Ei(e,t,n){var r=Zo(new Qo,t,wi().ce);return new Xo(r.a8,new G((e=>{var t=D().gj(e,r);return t===void 0?``:t})),new yl(((e,t)=>{D().f7(e,r,t)})),n)}function Di(e){e.fc=Oi(e,`class`,` `)}function Oi(e,t,n){var r=new es(t,wi().ce,q());return new Xo(r.bJ,new G((e=>{var t=D().gn(e,r);return t===void 0?``:t})),new yl(((e,t)=>{D().gU(e,r,t)})),n)}function ki(e,t){this.dp=null,this.dn=null,this.dp=e,this.dn=t}b=ki.prototype=new C,b.constructor=ki,b.k=(function(e){return new $s(this.dp,this.dn.g(e),new bl(((e,t,n)=>{D().f8(e,t,n)})))}),new T().i(ki,`com.raquo.laminar.keys.DerivedStyleProp`,{c8:1});function Ai(){}b=Ai.prototype=new C,b.constructor=Ai;function ji(){}ji.prototype=b;function Mi(){this.ff=null,this.fg=null,this.fh=null,this.fi=null,this.ff=`http://www.w3.org/2000/svg`,this.fg=`http://www.w3.org/1999/xlink`,this.fh=`http://www.w3.org/XML/1998/namespace`,this.fi=`http://www.w3.org/2000/xmlns/`}b=Mi.prototype=new C,b.constructor=Mi,b.gC=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Gl(e)}}),new T().i(Mi,`com.raquo.laminar.keys.SvgAttr$`,{ca:1});var Ni;function Pi(){return Ni||=new Mi,Ni}function Fi(e,t){this.dq=null,this.dq=e}b=Fi.prototype=new C,b.constructor=Fi,new T().i(Fi,`com.raquo.laminar.lifecycle.MountContext`,{cb:1});var O=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{V:1});function Ii(){this.fj=null,Li=this,this.fj=new ts}b=Ii.prototype=new C,b.constructor=Ii,new T().i(Ii,`com.raquo.laminar.modifiers.Modifier$`,{cd:1});var Li;function Ri(){return Li||=new Ii,Li}function zi(){this.e=null,Bi=this,this.e=new os(new G((e=>e)),k()),new os(new G((e=>``+(e|0))),k()),new os(new G((e=>``+ +e)),k()),new os(new G((e=>``+!!e)),k()),new os(new G((e=>e.h3())),k())}b=zi.prototype=new C,b.constructor=zi,new T().i(zi,`com.raquo.laminar.modifiers.RenderableText$`,{cj:1});var Bi;function k(){return Bi||=new zi,Bi}function Vi(){}b=Vi.prototype=new C,b.constructor=Vi,b.bW=(function(e,t,n){var r=new Lu(e);t.fb(r),n!==void 0&&n.hf(e,t);var i=D().fz(e.bA(),t.bA());return i&&t.f9(r),i}),new T().i(Vi,`com.raquo.laminar.nodes.ParentNode$`,{cm:1});var Hi;function Ui(){return Hi||=new Vi,Hi}function Wi(){}b=Wi.prototype=new C,b.constructor=Wi,b.aY=(function(e){return W().c.eJ().cw(new Z([W().c.eI().eR(),W().c.ga().fI(),W().c.eW().ap().k(8),Qs(W().c,e,as())]))}),new T().i(Wi,`doc.ExampleGroups$package$`,{ct:1});var Gi;function Ki(){return Gi||=new Wi,Gi}function qi(){}b=qi.prototype=new C,b.constructor=qi,b.T=(function(e){return W().c.eJ().cw(new Z([W().c.eI().eR(),W().c.gb().h9(),W().c.fv().fG(),W().c.eW().ap().k(16),Qs(W().c,e,as())]))}),new T().i(qi,`doc.Examples$package$`,{cu:1});var Ji;function Yi(){return Ji||=new qi,Ji}function Xi(){}b=Xi.prototype=new C,b.constructor=Xi,b.fx=(function(){Qi().g1(),Qi().g2(),Qi().g3(),Qi().g4(),Qi().g5(),Qi().g6(),Qi().g7()}),b.g1=(function(){var e=document.querySelector(`#example1`);ro().aH(e).d()||(W(),new ec(e,B().f(new Z([]),new Z([z(W().c,`Badge`,k().e)]))))}),b.g2=(function(){var e=document.querySelector(`#example2`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z([Yi().T(new Z([B().f(new Z([new U((e=>e.h().G()))]),new Z([z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().aq()))]),new Z([z(W().c,`Success`,k().e)])),B().f(new Z([new U((e=>e.h().al()))]),new Z([z(W().c,`Neutral`,k().e)])),B().f(new Z([new U((e=>e.h().a4()))]),new Z([z(W().c,`Warning`,k().e)])),B().f(new Z([new U((e=>e.h().a3()))]),new Z([z(W().c,`Danger`,k().e)]))]))]))))}),b.g3=(function(){var e=document.querySelector(`#example3`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z(I().b(new(Cu.r()).C([Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bg())),new U((e=>e.h().al()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Accent`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bs())),new U((e=>e.h().al()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled + Outlined`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().br())),new U((e=>e.h().al()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bv())),new U((e=>e.h().al()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Outlined`,k().e)]))))])))),Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bg())),new U((e=>e.h().G()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Accent`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bs())),new U((e=>e.h().G()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled + Outlined`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().br())),new U((e=>e.h().G()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bv())),new U((e=>e.h().G()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Outlined`,k().e)]))))])))),Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bg())),new U((e=>e.h().aq()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Accent`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bs())),new U((e=>e.h().aq()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled + Outlined`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().br())),new U((e=>e.h().aq()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bv())),new U((e=>e.h().aq()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Outlined`,k().e)]))))])))),Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bg())),new U((e=>e.h().a4()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Accent`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bs())),new U((e=>e.h().a4()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled + Outlined`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().br())),new U((e=>e.h().a4()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bv())),new U((e=>e.h().a4()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Outlined`,k().e)]))))])))),Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bg())),new U((e=>e.h().a3()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Accent`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bs())),new U((e=>e.h().a3()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled + Outlined`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().br())),new U((e=>e.h().a3()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Filled`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.u().bv())),new U((e=>e.h().a3()))]))),new Z(I().b(new(O.r()).C([z(W().c,`Outlined`,k().e)]))))]))))]))))))}),b.g4=(function(){var e=document.querySelector(`#example4`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z([Yi().T(new Z([B().f(new Z([new U((e=>e.h().G()))]),new Z([W().c.bt().ap().k(12),z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().G()))]),new Z([W().c.bt().ap().k(14),z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().G()))]),new Z([W().c.bt().ap().k(16),z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().G()))]),new Z([W().c.bt().ap().k(18),z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().G()))]),new Z([W().c.bt().ap().k(20),z(W().c,`Brand`,k().e)]))]))]))))}),b.g5=(function(){var e=document.querySelector(`#example5`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z([Yi().T(new Z([B().f(new Z([new U((e=>e.h().G())),new U((e=>e.z().k(!0)))]),new Z([z(W().c,`Brand`,k().e)])),B().f(new Z([new U((e=>e.h().aq())),new U((e=>e.z().k(!0)))]),new Z([z(W().c,`Success`,k().e)])),B().f(new Z([new U((e=>e.h().al())),new U((e=>e.z().k(!0)))]),new Z([z(W().c,`Neutral`,k().e)])),B().f(new Z([new U((e=>e.h().a4())),new U((e=>e.z().k(!0)))]),new Z([z(W().c,`Warning`,k().e)])),B().f(new Z([new U((e=>e.h().a3())),new U((e=>e.z().k(!0)))]),new Z([z(W().c,`Danger`,k().e)]))]))]))))}),b.g6=(function(){var e=document.querySelector(`#example6`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z(I().b(new(Cu.r()).C([Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().G())),new U((e=>e.Y().bz())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().aq())),new U((e=>e.Y().bz())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().al())),new U((e=>e.Y().bz())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a4())),new U((e=>e.Y().bz())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a3())),new U((e=>e.Y().bz())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)]))))])))),Yi().T(new Z(I().b(new(Cu.r()).C([B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().G())),new U((e=>e.Y().bq())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().aq())),new U((e=>e.Y().bq())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().al())),new U((e=>e.Y().bq())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a4())),new U((e=>e.Y().bq())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)])))),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a3())),new U((e=>e.Y().bq())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`1`,k().e)]))))]))))]))))))}),b.g7=(function(){var e=document.querySelector(`#example7`);ro().aH(e).d()||(W(),new ec(e,Ki().aY(new Z(I().b(new(Cu.r()).C([Yi().T(new Z(I().b(new(Cu.r()).C([oc().f(new Z(I().b(new(M.r()).C([]))),new Z(I().b(new(O.r()).C([z(W().c,`Requests`,k().e),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`30`,k().e)]))))])))),oc().f(new Z(I().b(new(M.r()).C([]))),new Z(I().b(new(O.r()).C([z(W().c,`Warnings`,k().e),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a4())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`8`,k().e)]))))])))),oc().f(new Z(I().b(new(M.r()).C([]))),new Z(I().b(new(O.r()).C([z(W().c,`Errors`,k().e),B().f(new Z(I().b(new(M.r()).C([new U((e=>e.h().a3())),new U((e=>e.z().k(!0)))]))),new Z(I().b(new(O.r()).C([z(W().c,`6`,k().e)]))))]))))]))))]))))))}),new T().i(Xi,`examples.badge.Main$package$`,{cv:1});var Zi;function Qi(){return Zi||=new Xi,Zi}function $i(e){try{Qi().fx()}catch(e){throw e}}function ea(e,t){for(var n=A().X(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ta(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ws(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ws(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Ts.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function ta(e,t){var n=A().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().X(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[na(e,c[1]),la(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[na(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[na(e,d[1]),`<clinit>`]}function na(e,t){var n=ia(e);if(Fa().cr.call(n,t))var r=ia(e)[t];else var r=ba(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ra(e){if(!((1&e.J)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.co=t,e.J=(1|e.J)<<24>>24}return e.co}function ia(e){return(1&e.J)<<24>>24?e.co:ra(e)}function aa(e){if(!((2&e.J)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cp=t,e.J=(2|e.J)<<24>>24}return e.cp}function oa(e){return(2&e.J)<<24>>24?e.cp:aa(e)}function sa(e){return(4&e.J)<<24>>24||(e.cn=Object.keys(oa(e)),e.J=(4|e.J)<<24>>24),e.cn}function ca(e){return(4&e.J)<<24>>24?e.cn:sa(e)}function la(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function ua(e,t){return t?t.arguments&&t.stack?da(e,t):t.stack&&t.sourceURL?ma(e,t):t.stack&&t.number?pa(e,t):t.stack&&t.fileName?fa(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ha(e,t):ga(e,t):ha(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?_a(e,t):va(e,t):t.stack&&!t.fileName?da(e,t):ya(e,t):[]}function da(e,t){return(t.stack+`
`).replace(A().X(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().C(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().C(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().C(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().C(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function fa(e,t){return t.stack.replace(A().C(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().C(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function pa(e,t){return t.stack.replace(A().C(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().C(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().C(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ma(e,t){return t.stack.replace(A().C(`\\[native code\\]\\n`,`m`),``).replace(A().C(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().C(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ha(e,t){for(var n=A().C(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ga(e,t){for(var n=A().C(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function _a(e,t){for(var n=A().X(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function va(e,t){for(var n=A().X(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().X(`<anonymous function: (\\S+)>`),`$1`).replace(A().X(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function ya(e,t){return[]}function ba(e,t,n){for(;;)if(t<(ca(e).length|0)){var r=ca(e)[t];if(n.startsWith(r))return``+oa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function xa(){this.co=null,this.cp=null,this.cn=null,this.J=0}b=xa.prototype=new C,b.constructor=xa,b.g8=(function(e){return ea(this,ua(this,e))}),new T().i(xa,`java.lang.StackTrace$`,{cT:1});var Sa;function Ca(){return Sa||=new xa,Sa}function wa(){}b=wa.prototype=new C,b.constructor=wa,b.X=(function(e){return new RegExp(e)}),b.C=(function(e,t){return new RegExp(e,t)}),new T().i(wa,`java.lang.StackTrace$StringRE$`,{cU:1});var Ta;function A(){return Ta||=new wa,Ta}function Ea(){this.e7=null,this.fk=null,Da=this,this.e7=new ad(!1),this.fk=new ad(!0)}b=Ea.prototype=new C,b.constructor=Ea,new T().i(Ea,`java.lang.System$Streams$`,{cY:1});var Da;function Oa(){return Da||=new Ea,Da}function ka(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Aa(){this.cq=null,this.e8=null,ja=this,this.cq=ka(this),this.e8=null}b=Aa.prototype=new C,b.constructor=Aa,b.eX=(function(e,t){if(this.cq!==null){var n=this.cq;return Fa().cr.call(n,e)?n[e]:t}return this.e8.eX(e,t)}),new T().i(Aa,`java.lang.System$SystemProperties$`,{cZ:1});var ja;function Ma(){return ja||=new Aa,ja}function Na(){this.cr=null,Pa=this,this.cr=Object.prototype.hasOwnProperty}b=Na.prototype=new C,b.constructor=Na,new T().i(Na,`java.lang.Utils$Cache$`,{d1:1});var Pa;function Fa(){return Pa||=new Na,Pa}function Ia(e,t){return e===t}function La(e){return 0}function Ra(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.as)}var za=new T().i(0,`java.lang.Void`,{as:1},(e=>e===void 0));function Ba(e,t){throw jl(new Nl,`argument type mismatch`)}function Va(){}b=Va.prototype=new C,b.constructor=Va,b.b1=(function(e){return e instanceof w||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr?e.a.length:e instanceof cr?e.a.length>>>1|0:(e instanceof lr||e instanceof ur||Ba(this,e),e.a.length)}),new T().i(Va,`java.lang.reflect.Array$`,{d2:1});var Ha;function Ua(){return Ha||=new Va,Ha}function Wa(){}b=Wa.prototype=new C,b.constructor=Wa,b.fE=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),b.eN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),b.eM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.eO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.eL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.eK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.eP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new T().i(Wa,`java.util.Arrays$`,{d3:1});var Ga;function j(){return Ga||=new Wa,Ga}function Ka(e,t){return Ya().fa(e,t)}function qa(){}b=qa.prototype=new C,b.constructor=qa,b.fa=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),b.eV=(function(e){if(e<-0x8000000000000000)return S(0,-2147483648);if(e>=0x8000000000000000)return S(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return S(t,e<0&&t!==0?n-1|0:n)}),b.fS=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0)|0)-((o-se|0)>>>0>o>>>0|0)|0)<0)var le=p-1|0,ue=(m-1|0)+(le!==-1|0)|0,de=le,fe=ue;else var de=p,fe=m}else var pe=(s>>>0)/(zn(u)>>>0)|0,de=(4294967296*(s-Math.imul(u,pe)|0)+(o>>>0))/u|0,fe=pe;if((t^r)>=0)return S(de,fe);var me=-de|0;return S(me,(-fe|0)-(me!==0|0)|0)}),b.fT=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(zn(n)>>>0)|0;return S((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0)|0)-((e-ee|0)>>>0>e>>>0|0)|0)<0){var ne=o-1|0;return S(ne,(s-1|0)+(ne!==-1|0)|0)}return S(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?S(0,0):S(1,0)}),b.gL=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,ee=65535&u,te=u>>>16|0,ne=65535&p,re=p>>>16|0,ie=Math.imul(ee,ne),ae=Math.imul(te,ne),oe=Math.imul(ee,re),se=ie+((ae+oe|0)<<16)|0,ce=(ie>>>16|0)+oe|0,le=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(te,re)|0)+(ce>>>16|0)|0)+(((65535&ce)+ae|0)>>>16|0)|0,ue=o-se|0,de=(s-le|0)-(ue>>>0>o>>>0|0)|0;if(de<0)var fe=ue+u|0,pe=(de+d|0)+(fe>>>0<ue>>>0|0)|0,me=fe,he=pe;else var me=ue,he=de}else var ge=(4294967296*((s>>>0)%(zn(u)>>>0)|0)+(o>>>0))/u|0,me=o-Math.imul(u,ge)|0,he=0;if(t<0){var _e=-me|0;return S(_e,(-he|0)-(_e!==0|0)|0)}return S(me,he)}),b.gM=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(zn(n)>>>0)|0)+(e>>>0))/n|0;return S(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),ee=f+((p+m|0)<<16)|0,te=(f>>>16|0)+m|0,ne=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(te>>>16|0)|0)+(((65535&te)+p|0)>>>16|0)|0,re=e-ee|0,ie=(t-ne|0)-(re>>>0>e>>>0|0)|0;if(ie<0){var ae=re+n|0;return S(ae,(ie+r|0)+(ae>>>0<re>>>0|0)|0)}return S(re,ie)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return S(e,t);var oe=e-n|0;return S(oe,(t-r|0)-(oe>>>0>e>>>0|0)|0)}),new T().i(qa,`org.scalajs.linker.runtime.RuntimeLong$`,{d5:1});var Ja;function Ya(){return Ja||=new qa,Ja}function Xa(){}b=Xa.prototype=new C,b.constructor=Xa,b.eS=(function(e,t){var n=e.y();if(n>-1){for(var r=t.eZ(n),i=e.l(),a=0;a<n;)P().eE(r,a,i.n()),a=1+a|0;return r}var o=null,s=t.f5(),c=s===pr.l();o=[];for(var l=e.l();l.r();){var u=l.n(),d=c?$n(u):u===null?Co().gR(s):u;o.push(d)}return Co().gQ(s===dr.l()?za.l():s===Eo.l()||s===Pc.l()?E.l():s,o)}),b.eQ=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(Xa,`scala.Array$`,{d6:1});var Za;function Qa(){return Za||=new Xa,Za}var M=new T().i(1,`scala.Function1`,{e:1});function $a(){}b=$a.prototype=new C,b.constructor=$a;function eo(){}eo.prototype=b;function to(){}b=to.prototype=new C,b.constructor=to,b.aH=(function(e){return e===null?q():new Lu(e)}),new T().i(to,`scala.Option$`,{de:1});var no;function ro(){return no||=new to,no}function io(){this.eg=null,this.ef=null,ao=this,this.eg=new U((e=>this.eg)),this.ef=new ul}b=io.prototype=new C,b.constructor=io,new T().i(io,`scala.PartialFunction$`,{df:1});var ao;function oo(){return ao||=new io,ao}function so(){this.ej=null,co=this,this.ej=new U((e=>lo().ej))}b=so.prototype=new C,b.constructor=so,b.gd=(function(e,t){var n=Ua().b1(e),r=0;if(e instanceof w)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.g(S(o,s)),r=1+r|0}else if(e instanceof lr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.g(Zn(e.a[r])),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new Gl(e)}),new T().i(so,`scala.collection.ArrayOps$`,{dl:1});var co;function lo(){return co||=new so,co}function uo(e,t){for(var n=e.l();n.r();)t.g(n.n())}function fo(e,t,n,r){return e.y()===0?``+t+r:e.aZ(gf(new _f),t,n,r).F.q}function po(e,t,n,r,i){var a=t.F;n.length!==0&&(a.q=``+a.q+n);var o=e.l();if(o.r()){var s=o.n();for(a.q=``+a.q+s;o.r();){r.length!==0&&(a.q=``+a.q+r);var c=o.n();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function mo(e,t){this.em=null,this.b9=null,this.em=e,this.b9=t}b=mo.prototype=new C,b.constructor=mo,b.gq=(function(){return this.em.aJ().l()}),new T().i(mo,`scala.collection.Iterator$ConcatIteratorCell`,{dw:1});function ho(){this.en=null,go=this,this.en=new U((e=>this.en))}b=ho.prototype=new C,b.constructor=ho,new T().i(ho,`scala.collection.StringOps$`,{dD:1});var go;function _o(){return go||=new ho,go}function vo(){this.eq=0,yo=this;try{_o();var e=xs().gv(Ma().eX(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.eq=e}b=vo.prototype=new C,b.constructor=vo,new T().i(vo,`scala.collection.immutable.IndexedSeqDefaults$`,{dH:1});var yo;function bo(){return yo||=new vo,yo}function xo(){}b=xo.prototype=new C,b.constructor=xo,b.gR=(function(e){return e===mr.l()||e===hr.l()||e===pr.l()||e===gr.l()?0:e===_r.l()?S(0,0):e===vr.l()||e===yr.l()?0:e===fr.l()?!1:e===dr.l()?void 0:null}),b.gQ=(function(e,t){var n=t.length|0;if(e===pr.l()){for(var r=new ir(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.as.U(n),o=0;o!==n;)P().eE(a,o,t[o]),o=1+o|0;return a}),new T().i(xo,`scala.collection.mutable.ArrayBuilder$`,{dM:1});var So;function Co(){return So||=new xo,So}function wo(){}b=wo.prototype=new C,b.constructor=wo,b.H=(function(e,t){return e===t||(Cs(e)?this.g0(e,t):e instanceof Nn?this.fY(e,t):e===null?t===null:In(e,t))}),b.g0=(function(e,t){if(Cs(t))return this.fZ(e,t);if(t instanceof Nn){if(typeof e==`number`)return+e===t.c;if(e instanceof x){var n=er(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:In(e,t)}return e===null?t===null:In(e,t)}),b.fZ=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof x){var r=er(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof x){var a=er(e),o=a.l,s=a.h;if(t instanceof x){var c=er(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:In(e,t)}),b.fY=(function(e,t){if(t instanceof Nn)return e.c===t.c;if(Cs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof x){var n=er(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:In(t,e)}return e===null&&t===null}),new T().i(wo,`scala.runtime.BoxesRunTime$`,{e6:1});var To;function N(){return To||=new wo,To}var Eo=new T().i(0,`scala.runtime.Null$`,{e9:1});function Do(){}b=Do.prototype=new C,b.constructor=Do,b.c5=(function(){throw Rl(new Bl,`tried to cast away nullability, but value is null`)}),new T().i(Do,`scala.runtime.Scala3RunTime$`,{ea:1});var Oo;function ko(){return Oo||=new Do,Oo}function Ao(){}b=Ao.prototype=new C,b.constructor=Ao,b.fw=(function(e){return e===null?Eo.l():Pn(e)}),b.b0=(function(e,t){if(e instanceof w||e instanceof sr||e instanceof ur)return e.a[t];if(e instanceof cr){var n=e.a,r=t<<1;return S(n[r],n[r+1|0])}if(e instanceof lr)return e.a[t];if(e instanceof ir)return Zn(e.a[t]);if(e instanceof ar||e instanceof or||e instanceof rr)return e.a[t];throw e===null?zl(new Bl):new Gl(e)}),b.eE=(function(e,t,n){if(e instanceof w)e.a[t]=n;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ur)e.a[t]=+n;else if(e instanceof cr){var r=er(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof lr)e.a[t]=Math.fround(n);else if(e instanceof ir)e.a[t]=$n(n);else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof or)e.a[t]=n|0;else if(e instanceof rr)e.a[t]=!!n;else throw e===null?zl(new Bl):new Gl(e)}),b.fs=(function(e){return fo(e.by(),e.ao()+`(`,`,`,`)`)}),b.ar=(function(e){if(e===null)return null;if(e.a.length===0){var t=Gu();return gd(),Hu(t)}return new Jd(e)}),new T().i(Ao,`scala.runtime.ScalaRunTime$`,{eb:1});var jo;function P(){return jo||=new Ao,jo}function Mo(){}b=Mo.prototype=new C,b.constructor=Mo,b.p=(function(e,t){var n=this.c4(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.c4=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.B=(function(e,t){return this.fD(e^t)}),b.fD=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.gz=(function(e,t){return t===e>>31?e:e^t}),b.fV=(function(e){var t=Bn(e);if(t===e)return t;var n=Ya().eV(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Hn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),b.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.fV(+e);if(e instanceof x){var t=er(e);return this.gz(t.l,t.h)}return Ln(e)}),b.gs=(function(e){throw Pl(new Il,``+e)}),new T().i(Mo,`scala.runtime.Statics$`,{ed:1});var No;function F(){return No||=new Mo,No}function Po(){}b=Po.prototype=new C,b.constructor=Po,b.gW=(function(e,t){return setTimeout((()=>{t.aJ()}),e)}),new T().i(Po,`scala.scalajs.js.timers.package$`,{ej:1});var Fo;function Io(){return Fo||=new Po,Fo}function Lo(){}b=Lo.prototype=new C,b.constructor=Lo,b.h4=(function(e){if(e instanceof Z)return e.bV;var t=[];return e.V(new U((e=>t.push(e)|0))),t}),new T().i(Lo,`scala.scalajs.runtime.Compat$`,{es:1});var Ro;function zo(){return Ro||=new Lo,Ro}function Bo(){}b=Bo.prototype=new C,b.constructor=Bo,b.b=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new T().i(Bo,`scala.scalajs.runtime.package$`,{et:1});var Vo;function I(){return Vo||=new Bo,Vo}function Ho(){}b=Ho.prototype=new C,b.constructor=Ho,b.gX=(function(e){var t=`Illegal command line`+(e.eY()===0?``:e.eY()===1?` after first argument`:` after `+e.eY()+` arguments`)+`: `+e.hd();Ms().gG().gw(t+`
`)}),new T().i(Ho,`scala.util.CommandLineParser$`,{eu:1});function Uo(e){this.ct=null,this.ct=e}b=Uo.prototype=new C,b.constructor=Uo,b.s=(function(){return`DynamicVariable(`+this.ct+`)`}),new T().i(Uo,`scala.util.DynamicVariable`,{ew:1});function Wo(){}b=Wo.prototype=new C,b.constructor=Wo;function Go(){}Go.prototype=b,b.p=(function(e,t){var n=this.c4(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),b.c4=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),b.B=(function(e,t){return this.bB(e^t)}),b.bB=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.f3=(function(e,t,n){var r=e.am();if(r===0)return n?t:K(e.ao());var i=t;n||(i=this.p(i,K(e.ao())));for(var a=0;a<r;)i=this.p(i,F().w(e.an(a))),a=1+a|0;return this.B(i,r)}),b.h5=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.l();o.r();){var s=o.n(),c=F().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.p(l,n),l=this.p(l,r),l=this.c4(l,a),this.B(l,i)}),b.gF=(function(e,t){var n=e.l(),r=t;if(!n.r())return this.B(r,0);var i=n.n();if(!n.r())return this.B(this.p(r,F().w(i)),1);var a=n.n(),o=F().w(i);r=this.p(r,o);for(var s=r,c=F().w(a),l=c-o|0,u=2;n.r();){r=this.p(r,c);var d=F().w(n.n());if(l!==(d-c|0)||l===0){for(r=this.p(r,d),u=1+u|0;n.r();)r=this.p(r,F().w(n.n())),u=1+u|0;return this.B(r,u)}c=d,u=1+u|0}return this.bB(this.p(this.p(s,l),c))}),b.v=(function(e,t){var n=t,r=Ua().b1(e);switch(r){case 0:return this.B(n,0);case 1:return this.B(this.p(n,F().w(P().b0(e,0))),1);default:var i=F().w(P().b0(e,0));n=this.p(n,i);for(var a=n,o=F().w(P().b0(e,1)),s=o-i|0,c=2;c<r;){n=this.p(n,o);var l=F().w(P().b0(e,c));if(s!==(l-o|0)||s===0){for(n=this.p(n,l),c=1+c|0;c<r;)n=this.p(n,F().w(P().b0(e,c))),c=1+c|0;return this.B(n,r)}o=l,c=1+c|0}return this.bB(this.p(this.p(a,s),o))}}),b.gJ=(function(e,t,n,r){return this.bB(this.p(this.p(this.p(r,e),t),n))}),b.gr=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.B(n,0);case 1:return this.B(this.p(n,F().w(e.m(0))),1);default:var i=F().w(e.m(0));n=this.p(n,i);for(var a=n,o=F().w(e.m(1)),s=o-i|0,c=2;c<r;){n=this.p(n,o);var l=F().w(e.m(c));if(s!==(l-o|0)||s===0){for(n=this.p(n,l),c=1+c|0;c<r;)n=this.p(n,F().w(e.m(c))),c=1+c|0;return this.B(n,r)}o=l,c=1+c|0}return this.bB(this.p(this.p(a,s),o))}}),b.gy=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.d();){var l=c.W(),u=c.I(),d=F().w(l);switch(r=this.p(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.gJ(s,a,o,t):this.B(r,n)});function Ko(e){this.aQ=null,this.cL=null,this.ca=!1,this.cL=e,Qr(this),this.ca=!1}b=Ko.prototype=new C,b.constructor=Ko,b.gH=(function(e){this.ca?(ni(e),this.cL.aJ()):ti(this,e)}),b.gx=(function(){$r(this),this.ca=!0}),new T().i(Ko,`com.raquo.airstream.ownership.OneTimeOwner`,{bs:1,bt:1});function qo(){}b=qo.prototype=new C,b.constructor=qo,b.fQ=(function(e){return e!==null}),b.fX=(function(e){return e?``:null}),b.bY=(function(e){return this.fQ(e)}),b.c1=(function(e){return this.fX(!!e)}),new T().i(qo,`com.raquo.laminar.codecs.package$$anon$1`,{bJ:1,a2:1});function Jo(e){if(e===null)throw zl(new Bl)}b=Jo.prototype=new C,b.constructor=Jo,b.c1=(function(e){return e}),b.bY=(function(e){return e}),new T().i(Jo,`com.raquo.laminar.codecs.package$$anon$2`,{bK:1,a2:1});function Yo(e){return new ki(e,new G((e=>e+`px`)))}function Xo(e,t,n,r){}b=Xo.prototype=new ji,b.constructor=Xo,new T().i(Xo,`com.raquo.laminar.keys.CompositeKey`,{c7:1,y:1});function Zo(e,t,n){return e.a8=t,e.aR=n,e}function Qo(){this.a8=null,this.aR=null}b=Qo.prototype=new ji,b.constructor=Qo;function $o(){}$o.prototype=b,b.k=(function(e){return new $s(this,e,new bl(((e,t,n)=>{D().f7(e,t,n)})))}),new T().i(Qo,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,y:1});function es(e,t,n){this.cg=null,this.cf=null,this.bJ=null,this.bK=null,this.cg=e,this.cf=t;var r=n.d()?q():new Lu(n.x()+`:`+e);this.bJ=r.d()?e:r.x(),this.bK=n.d()?q():new Lu(Pi().gC(n.x()))}b=es.prototype=new ji,b.constructor=es,new T().i(es,`com.raquo.laminar.keys.SvgAttr`,{c9:1,y:1});function ts(){}b=ts.prototype=new C,b.constructor=ts,b.aG=(function(e){}),new T().i(ts,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ce:1,V:1});function ns(e,t){if(this.du=null,this.du=e,t===null)throw zl(new Bl)}b=ns.prototype=new C,b.constructor=ns,b.aG=(function(e){var t=Fr(),n=(()=>{this.du.g(e)});if(Fr(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Mr(t)}}}),new T().i(ns,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cf:1,V:1});function rs(){}b=rs.prototype=new C,b.constructor=rs,new T().i(rs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{ch:1,cg:1});var is;function as(){return is||=new rs,is}function os(e,t){if(this.dv=null,this.dv=e,t===null)throw zl(new Bl)}b=os.prototype=new C,b.constructor=os,b.fC=(function(e){return this.dv.g(e)}),new T().i(os,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{ck:1,ci:1});function ss(e){e.eH(new Kr(new vl((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+fo(D().fP(e.bA(),(D(),$())),``,` > `,``))}))))}function cs(e,t,n){return e.ck=t,e}function ls(){this.ck=null}b=ls.prototype=new C,b.constructor=ls;function us(){}us.prototype=b,b.cB=(function(){return this.ck}),b.cw=(function(e){var t=this.fF();return e.V(new G((e=>{e.aG(t)}))),t}),b.fF=(function(){return new Su(this,D().fK(this))}),new T().i(ls,`com.raquo.laminar.tags.HtmlTag`,{af:1,a4:1});function ds(e,t){this.dB=null,this.dB=e}b=ds.prototype=new C,b.constructor=ds,new T().i(ds,`com.raquo.laminar.tags.SvgTag`,{cs:1,a4:1});function fs(){}b=fs.prototype=new C,b.constructor=fs,b.c1=(function(e){return e}),b.bY=(function(e){return e}),new T().i(fs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cB:1,a2:1});function ps(e,t){return e.bN=t,e.eA(),e}function ms(){this.bN=null,this.bM=null,this.bO=!1}b=ms.prototype=new C,b.constructor=ms;function hs(){}hs.prototype=b,b.h1=(function(){return this.bO||=(this.bM=new tc(this.bN,new U((e=>void 0)),void 0),!0),this.bM}),b.f=(function(e,t){var n=this.h1().cw(new Z([]));return e.V(new U((e=>{e.g(this).aG(n)}))),t.V(new U((e=>{e.aG(n)}))),n});function gs(){this.cl=null,_s=this,this.cl=xr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}b=gs.prototype=new C,b.constructor=gs,b.fR=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=j().fE(this.cl,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.cl.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new T().i(gs,`java.lang.Character$`,{cH:1,a:1});var _s;function vs(){return _s||=new gs,_s}function ys(){}b=ys.prototype=new C,b.constructor=ys,b.bw=(function(e){throw new Mu(`For input string: "`+e+`"`)}),b.gv=(function(e,t,n){e===null&&xs().bw(e);var r=e.length;r===0&&xs().bw(e);var i=vs(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&xs().bw(e);var l=0;for(l=0;c!==r;){var u=i.fR(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&xs().bw(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&xs().bw(e),(l^s)-s|0}),new T().i(ys,`java.lang.Integer$`,{cM:1,a:1});var bs;function xs(){return bs||=new ys,bs}function Ss(){}b=Ss.prototype=new C,b.constructor=Ss;function Cs(e){return e instanceof Ss||typeof e==`number`||e instanceof x}function ws(e,t,n,r,i){this.aU=null,this.b4=null,this.aV=null,this.aW=0,this.aT=0,this.aU=e,this.b4=t,this.aV=n,this.aW=r,this.aT=i}b=ws.prototype=new C,b.constructor=ws,b.i=(function(e){return e instanceof ws&&this.aV===e.aV&&this.aW===e.aW&&this.aT===e.aT&&this.aU===e.aU&&this.b4===e.b4}),b.s=(function(){var e=``;return this.aU!==`<jscode>`&&(e=``+e+this.aU+`.`),e=``+e+this.b4,this.aV===null?e+=`(Unknown Source)`:(e=e+`(`+this.aV,this.aW>=0&&(e=e+`:`+this.aW,this.aT>=0&&(e=e+`:`+this.aT)),e+=`)`),e}),b.o=(function(){return K(this.aU)^K(this.b4)^K(this.aV)^this.aW^this.aT});var Ts=new T().i(ws,`java.lang.StackTraceElement`,{ar:1,a:1});function Es(){}b=Es.prototype=new C,b.constructor=Es,b.gD=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Vn(e.a[a]),a=1+a|0;return i}),new T().i(Es,`java.lang.String$`,{cW:1,a:1});var Ds;function Os(){return Ds||=new Es,Ds}function L(e,t,n,r,i){return e.ea=t,e.eb=i,i&&e.g9(),e}var ks=class extends Error{constructor(){super(),this.ea=null,this.eb=!1,this.e9=null,this.bP=null}bu(){return this.ea}g9(){var e=this instanceof Y?this.S:this;return this.e9=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gm(){return this.bP===null&&(this.bP=this.eb?Ca().g8(this.e9):new(Ts.r()).C(0)),this.bP}s(){var e=Fn(this),t=this.bu();return t===null?e:e+`: `+t}o(){return tr.prototype.o.call(this)}i(e){return tr.prototype.i.call(this,e)}get message(){var e=this.bu();return e===null?``:e}get name(){return Fn(this)}toString(){return this.s()}};function As(){this.ec=null,js=this,this.ec=new Uo(Oa().e7)}b=As.prototype=new C,b.constructor=As,b.gG=(function(){return this.ec.ct}),new T().i(As,`scala.Console$`,{d7:1,dX:1});var js;function Ms(){return js||=new As,js}function Ns(){}b=Ns.prototype=new eo,b.constructor=Ns;function Ps(){}Ps.prototype=b,b.ha=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ju();return gd(),t.er}return new lf(e)});function Fs(e,t){if(t===e)e.eC(mu().eT(t));else for(var n=t.l();n.r();)e.cv(n.n());return e}function Is(){}b=Is.prototype=new C,b.constructor=Is;function Ls(){}Ls.prototype=b,b.s=(function(){return`<function0>`});function Rs(){}b=Rs.prototype=new C,b.constructor=Rs;function zs(){}zs.prototype=b,b.s=(function(){return`<function1>`});function Bs(){}b=Bs.prototype=new C,b.constructor=Bs;function Vs(){}Vs.prototype=b,b.s=(function(){return`<function2>`});function Hs(){}b=Hs.prototype=new C,b.constructor=Hs;function Us(){}Us.prototype=b,b.s=(function(){return`<function3>`});function Ws(e){this.bU=!1,this.bU=e}b=Ws.prototype=new C,b.constructor=Ws,b.s=(function(){return``+this.bU}),new T().i(Ws,`scala.runtime.BooleanRef`,{e5:1,a:1});function Gs(e){this.be=0,this.be=e}b=Gs.prototype=new C,b.constructor=Gs,b.s=(function(){return``+this.be}),new T().i(Gs,`scala.runtime.IntRef`,{e7:1,a:1});function Ks(){this.t=0,this.ez=0,this.fq=0,this.fp=0,qs=this,this.t=K(`Seq`),this.ez=K(`Map`),this.fq=K(`Set`),this.fp=this.h5($(),this.ez)}b=Ks.prototype=new Go,b.constructor=Ks,b.f6=(function(e){return Sd(e)?this.gr(e,this.t):e instanceof $d?this.gy(e,this.t):this.gF(e,this.t)}),new T().i(Ks,`scala.util.hashing.MurmurHash3$`,{ey:1,ex:1});var qs;function R(){return qs||=new Ks,qs}var Js=class extends ks{};function Ys(){this.c7=null,this.cE=null,this.cF=null,Xs=this,this.c7=mu().eD(P().ar(new(M.r()).C([]))),this.cE=new G((e=>{try{console.error(this.gi(e)+`
`+this.gl(e,`
`))}catch(e){var t=e instanceof ks?e:new Y(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cF=new G((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Y?t.S:t})),this.gK(this.cE)}b=Ys.prototype=new C,b.constructor=Ys,b.gi=(function(e){try{var t=e.bu()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Pn(e).cA()+`: `+t}),b.gl=(function(e,t){try{return fo(bc().ha(e.gm()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.gK=(function(e){this.c7.cv(e)}),b.cD=(function(e){for(var t=this.c7.l();t.r();){var n=t.n();try{n.g(e)}catch(e){var r=e instanceof ks?e:new Y(e),i=this.cF;if(n===null?i===null:n.i(i))throw r instanceof Y?r.S:r;console.warn(`Error processing an unhandled error callback:`),Io().gW(0,new vl((e=>(()=>{throw e instanceof Y?e.S:e}))(r)))}}}),new T().i(Ys,`com.raquo.airstream.core.AirstreamError$`,{bf:1,dV:1,dW:1});var Xs;function Zs(){return Xs||=new Ys,Xs}function z(e,t,n){return new $c(n.fC(t))}function Qs(e,t,n){return new ns(new G((e=>{(_i(),new mi(t,null,null)).V(new G((e=>(t=>{Ui().bW(e,t,void 0)}))(e)))})),Ri())}function $s(e,t,n){this.ds=null,this.dt=null,this.dr=null,this.ds=e,this.dt=t,this.dr=n}b=$s.prototype=new C,b.constructor=$s,b.aG=(function(e){this.dr.fA(e,this.ds,this.dt)}),new T().i($s,`com.raquo.laminar.modifiers.KeySetter`,{cc:1,V:1,cl:1});function ec(e,t){if(this.ci=null,this.dx=null,this.dy=null,this.dx=t,ss(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().gu(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dy=e,this.gB()}b=ec.prototype=new C,b.constructor=ec,b.c0=(function(){return this.ci}),b.eH=(function(e){this.ci=e}),b.gB=(function(){return this.ci.eB(),Ui().bW(this,this.dx,void 0)}),b.bA=(function(){return this.dy}),new T().i(ec,`com.raquo.laminar.nodes.RootNode`,{cp:1,a3:1,ae:1});function tc(e,t,n){this.ck=null,this.dA=null,this.dA=e,cs(this,e,!1)}b=tc.prototype=new us,b.constructor=tc,b.cB=(function(){return this.dA}),new T().i(tc,`com.raquo.laminar.tags.CustomHtmlTag`,{cr:1,af:1,a4:1});function nc(){this.bN=null,this.bM=null,this.bO=!1,this.dI=null,this.dJ=!1,this.dC=null,this.dD=!1,this.dG=null,this.dH=!1,this.dE=null,this.dF=!1,ps(this,`wa-badge`)}b=nc.prototype=new hs,b.constructor=nc,b.h=(function(){return this.dJ||=(this.dI=hc(),!0),this.dI}),b.u=(function(){return this.dD||=(this.dC=fc(),!0),this.dC}),b.z=(function(){return this.dH||=(this.dG=(W(),Zo(new Qo,`pill`,wi().da)),!0),this.dG}),b.Y=(function(){return this.dF||=(this.dE=lc(),!0),this.dE}),b.eA=(function(){return xt}),new T().i(nc,`io.github.nguyenyou.webawesome.laminar.Badge$`,{cw:1,ah:1,ag:1});var rc;function B(){return rc||=new nc,rc}function ic(){this.bN=null,this.bM=null,this.bO=!1,ps(this,`wa-button`)}b=ic.prototype=new hs,b.constructor=ic,b.eA=(function(){return Mn}),new T().i(ic,`io.github.nguyenyou.webawesome.laminar.Button$`,{cx:1,ah:1,ag:1});var ac;function oc(){return ac||=new ic,ac}function sc(){this.a8=null,this.aR=null,this.dK=null,this.dL=!1,this.dM=null,this.dN=!1,Zo(this,`attention`,new fs)}b=sc.prototype=new $o,b.constructor=sc,b.bq=(function(){return this.dL||=(this.dK=lc().k(`bounce`),!0),this.dK}),b.bz=(function(){return this.dN||=(this.dM=lc().k(`pulse`),!0),this.dM}),new T().i(sc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Attention$`,{cy:1,Z:1,y:1});var cc;function lc(){return cc||=new sc,cc}function uc(){this.a8=null,this.aR=null,this.dO=null,this.dP=!1,this.dQ=null,this.dT=!1,this.dR=null,this.dS=!1,this.dU=null,this.dV=!1,Zo(this,`appearance`,new fs)}b=uc.prototype=new $o,b.constructor=uc,b.bg=(function(){return this.dP||=(this.dO=fc().k(`accent`),!0),this.dO}),b.br=(function(){return this.dT||=(this.dQ=fc().k(`filled`),!0),this.dQ}),b.bs=(function(){return this.dS||=(this.dR=fc().k(`filled-outlined`),!0),this.dR}),b.bv=(function(){return this.dV||=(this.dU=fc().k(`outlined`),!0),this.dU}),new T().i(uc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$`,{cz:1,Z:1,y:1});var dc;function fc(){return dc||=new uc,dc}function pc(){this.a8=null,this.aR=null,this.dW=null,this.dX=!1,this.dY=null,this.dZ=!1,this.e0=null,this.e1=!1,this.e2=null,this.e3=!1,this.e4=null,this.e5=!1,Zo(this,`variant`,new fs)}b=pc.prototype=new $o,b.constructor=pc,b.G=(function(){return this.dX||=(this.dW=hc().k(`brand`),!0),this.dW}),b.a3=(function(){return this.dZ||=(this.dY=hc().k(`danger`),!0),this.dY}),b.al=(function(){return this.e1||=(this.e0=hc().k(`neutral`),!0),this.e0}),b.aq=(function(){return this.e3||=(this.e2=hc().k(`success`),!0),this.e2}),b.a4=(function(){return this.e5||=(this.e4=hc().k(`warning`),!0),this.e4}),new T().i(pc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cA:1,Z:1,y:1});var mc;function hc(){return mc||=new pc,mc}function gc(e){if(e.as.Z)return e.as.Q().cA()+`[]`;for(var t=e.as.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function _c(e){this.cm=null,this.as=e}b=_c.prototype=new C,b.constructor=_c,b.s=(function(){return(this.as.Y?`interface `:this.as.X?``:`class `)+this.as.N}),b.cA=(function(){return this.cm===null&&(this.cm=gc(this)),this.cm}),new T().i(_c,`java.lang.Class`,{cI:1,a:1,L:1});function V(e,t){return L(e,t,null,!0,!0),e}var H=class extends ks{};new T().i(H,`java.lang.Exception`,{K:1,s:1,a:1});function vc(){this.fl=null,yc=this,du(),this.fl=Mc()}b=vc.prototype=new Ps,b.constructor=vc,new T().i(vc,`scala.Predef$`,{dh:1,da:1,db:1});var yc;function bc(){return yc||=new vc,yc}function xc(e,t){return e.bS=t,e}function Sc(){this.bS=null}b=Sc.prototype=new C,b.constructor=Sc;function Cc(){}Cc.prototype=b,b.c2=(function(e){return this.bS.cz(e,pd())}),b.bX=(function(e){return this.bS.cz(e,pd())});function wc(e,t){return new tu(e).fJ(t)}function Tc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?kc().K:new iu(e,r,i)}function Ec(e,t){for(var n=t.l();e.r();)if(!n.r()||!N().H(e.n(),n.n()))return!1;return!n.r()}function Dc(){this.K=null,Oc=this,this.K=new Zl}b=Dc.prototype=new C,b.constructor=Dc,new T().i(Dc,`scala.collection.Iterator$`,{dt:1,a:1,Y:1});var Oc;function kc(){return Oc||=new Dc,Oc}function Ac(){}b=Ac.prototype=new C,b.constructor=Ac,new T().i(Ac,`scala.collection.immutable.Map$`,{dJ:1,a:1,dy:1});var jc;function Mc(){return jc||=new Ac,jc}function Nc(e){this.es=null,this.es=e}b=Nc.prototype=new Ls,b.constructor=Nc,b.aJ=(function(){return(0,this.es)()}),new T().i(Nc,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{e1:1,ba:1,at:1});function U(e){this.et=null,this.et=e}b=U.prototype=new zs,b.constructor=U,b.g=(function(e){return(0,this.et)(e)}),new T().i(U,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{e2:1,bb:1,e:1});var Pc=new T().i(0,`scala.runtime.Nothing$`,{e8:1,s:1,a:1});function Fc(){}b=Fc.prototype=new C,b.constructor=Fc,b.gg=(function(e){return(t=>e.g(t))}),new T().i(Fc,`scala.scalajs.js.Any$`,{ee:1,ef:1,eg:1});var Ic;function Lc(){return Ic||=new Fc,Ic}function Rc(){}b=Rc.prototype=new Ls,b.constructor=Rc;function zc(){}zc.prototype=b;function Bc(){}b=Bc.prototype=new zs,b.constructor=Bc;function Vc(){}Vc.prototype=b;function Hc(){}b=Hc.prototype=new Vs,b.constructor=Hc;function Uc(){}Uc.prototype=b;function Wc(){}b=Wc.prototype=new Us,b.constructor=Wc;function Gc(){}Gc.prototype=b;function Kc(e,t,n,r){if(this.cG=null,r===null)throw zl(new Bl);this.cG=void 0}b=Kc.prototype=new C,b.constructor=Kc,b.s=(function(){return Cr(this)}),new T().i(Kc,`com.raquo.airstream.core.Observer$$anon$8`,{bj:1,bk:1,bg:1,bh:1});function qc(e){if(this.cS=null,this.cT=!1,this.fc=null,e===null)throw zl(new Bl);Di(this)}b=qc.prototype=new C,b.constructor=qc,b.h0=(function(){return this.cT||=(this.cS=new ds(`svg`,!1),!0),this.cS}),new T().i(qc,`com.raquo.laminar.api.Laminar$svg$`,{bD:1,c6:1,bM:1,bO:1});function Jc(){this.c=null,Yc=this,this.c=new Dd}b=Jc.prototype=new C,b.constructor=Jc,new T().i(Jc,`com.raquo.laminar.api.package$`,{bG:1,a9:1,ac:1,a8:1});var Yc;function W(){return Yc||=new Jc,Yc}function Xc(e,t,n){return e.a9=t,e.aa=n,e}function Zc(){this.a9=null,this.aa=null}b=Zc.prototype=new ji,b.constructor=Zc;function Qc(){}Qc.prototype=b,b.k=(function(e){return new $s(this,Rn(e),new bl(((e,t,n)=>{D().f8(e,t,n)})))});function $c(e){this.dz=null,this.cj=null,this.dz=q(),this.cj=D().fM(e)}b=$c.prototype=new C,b.constructor=$c,b.f9=(function(e){this.dz=e}),b.fb=(function(e){}),b.aG=(function(e){Ui().bW(e,this,void 0)}),b.h3=(function(){return this.cj.data}),b.bA=(function(){return this.cj}),new T().i($c,`com.raquo.laminar.nodes.TextNode`,{cq:1,a3:1,V:1,ad:1});function el(){}b=el.prototype=new C,b.constructor=el;function tl(){}tl.prototype=b;function nl(e,t){return e===t}function rl(e){return e?1231:1237}var il=new T().i(0,`java.lang.Boolean`,{cF:1,a:1,N:1,L:1},(e=>typeof e==`boolean`));function al(e){return e}function ol(e,t){return t instanceof Nn&&e===t.c}var sl=new T().i(0,`java.lang.Character`,{an:1,a:1,N:1,L:1},(e=>e instanceof Nn)),cl=class extends H{};function ll(){this.q=null,this.q=``}b=ll.prototype=new C,b.constructor=ll,b.fy=(function(e){var t=Os().gD(e,0,e.a.length);return this.q=``+this.q+t,this}),b.s=(function(){return this.q}),b.j=(function(){return this.q.length}),b.eF=(function(e){return this.q.charCodeAt(e)}),new T().i(ll,`java.lang.StringBuilder`,{cX:1,a5:1,al:1,a:1});function ul(){}b=ul.prototype=new C,b.constructor=ul,b.s=(function(){return`<function1>`}),b.fB=(function(e){throw new Gl(e)}),b.g=(function(e){this.fB(e)}),new T().i(ul,`scala.PartialFunction$$anon$1`,{dg:1,e:1,g:1,a:1});function dl(){}b=dl.prototype=new C,b.constructor=dl;function fl(){}fl.prototype=b,b.y=(function(){return-1}),b.aZ=(function(e,t,n,r){return po(this,e,t,n,r)}),b.l=(function(){return this}),b.bZ=(function(e){return this.bC(e,-1)}),b.bC=(function(e,t){return Tc(this,e,t)}),b.s=(function(){return`<iterator>`});function pl(e,t){return e.bT=t,e}function ml(){this.bT=null}b=ml.prototype=new C,b.constructor=ml;function hl(){}hl.prototype=b,b.eD=(function(e){return this.bT.bX(e)}),b.eT=(function(e){return this.bT.c2(e)}),b.bX=(function(e){return this.eD(e)}),b.c2=(function(e){return this.eT(e)});function gl(e){return e.aL(0)===0}function _l(e,t){var n=e.y();if(n!==-1){var r=t.y();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return Ec(e.l(),t)}function vl(e){this.ew=null,this.ew=e}b=vl.prototype=new zc,b.constructor=vl,b.aJ=(function(){return(0,this.ew)()}),new T().i(vl,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{el:1,ek:1,ba:1,at:1});function G(e){this.ex=null,this.ex=e}b=G.prototype=new Vc,b.constructor=G,b.g=(function(e){return(0,this.ex)(e)}),new T().i(G,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{en:1,em:1,bb:1,e:1});function yl(e){this.fo=null,this.fo=e}b=yl.prototype=new Uc,b.constructor=yl,new T().i(yl,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{ep:1,eo:1,e3:1,d8:1});function bl(e){this.ey=null,this.ey=e}b=bl.prototype=new Gc,b.constructor=bl,b.fA=(function(e,t,n){return(0,this.ey)(e,t,n)}),new T().i(bl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{er:1,eq:1,e4:1,d9:1});function xl(e){e.ch=new ai(new vl((()=>{e.aS.eB()})),new vl((()=>{e.aS.fN()})))}function Sl(e,t){wl(e,e.bL,t)&&Tl(e,t)}function Cl(e,t){var n=e.bL;e.bL=t,wl(e,n,t)||Tl(e,t)}function wl(e,t,n){var r=!t.d()&&!t.x().c0().D.d(),i=!n.d()&&!n.x().c0().D.d();return r&&!i}function Tl(e,t){El(e,t.d()?q():new Lu(t.x().c0()))}function El(e,t){if(t.d())e.ch.fH();else{var n=t.x();e.ch.gT(n)}}function Dl(){}b=Dl.prototype=new tl,b.constructor=Dl;function Ol(){}Ol.prototype=b;var kl=class extends cl{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(kl,`java.lang.ArithmeticException`,{cE:1,O:1,K:1,s:1,a:1});var Al=new T().i(0,`java.lang.Byte`,{cG:1,R:1,a:1,N:1,L:1},(e=>qn(e)));function jl(e,t){return L(e,t,null,!0,!0),e}function Ml(e){return L(e,null,null,!0,!0),e}var Nl=class extends cl{};new T().i(Nl,`java.lang.IllegalArgumentException`,{ap:1,O:1,K:1,s:1,a:1});function Pl(e,t){return L(e,t,null,!0,!0),e}function Fl(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var Il=class extends cl{};new T().i(Il,`java.lang.IndexOutOfBoundsException`,{cK:1,O:1,K:1,s:1,a:1});function Ll(){}b=Ll.prototype=new tl,b.constructor=Ll,new T().i(Ll,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cO:1,ak:1,ai:1,am:1,aj:1});function Rl(e,t){return L(e,t,null,!0,!0),e}function zl(e){return L(e,null,null,!0,!0),e}var Bl=class extends cl{};new T().i(Bl,`java.lang.NullPointerException`,{cP:1,O:1,K:1,s:1,a:1});var Vl=new T().i(0,`java.lang.Short`,{cS:1,R:1,a:1,N:1,L:1},(e=>Jn(e))),Hl=class extends cl{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Hl,`java.lang.UnsupportedOperationException`,{d0:1,O:1,K:1,s:1,a:1});var Ul=class extends cl{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Ul,`java.util.NoSuchElementException`,{d4:1,O:1,K:1,s:1,a:1});function Wl(e){if(!e.ee){if(e.bQ===null)var t=`null`;else{var n=P().fw(e.bQ),r=n===null?`of a JS class`:`of class `+n.as.N;try{var t=e.bQ+` (`+r+`)`}catch{var t=`an instance `+r}}e.ed=t,e.ee=!0}return e.ed}var Gl=class extends cl{constructor(e){super(),this.bQ=null,this.ed=null,this.ee=!1,this.bQ=e,L(this,null,null,!0,!0)}bu(){return Wl(this)}};new T().i(Gl,`scala.MatchError`,{dc:1,O:1,K:1,s:1,a:1});function Kl(){}b=Kl.prototype=new C,b.constructor=Kl;function ql(){}ql.prototype=b,b.by=(function(){return new Jl(this)}),b.d=(function(){return this===q()}),b.y=(function(){return!this.d()|0}),b.l=(function(){return this.d()?kc().K:new Ql(this.x())});function Jl(e){if(this.b5=0,this.ei=0,this.eh=null,e===null)throw zl(new Bl);this.eh=e,this.b5=0,this.ei=e.am()}b=Jl.prototype=new fl,b.constructor=Jl,b.r=(function(){return this.b5<this.ei}),b.n=(function(){var e=this.eh.an(this.b5);return this.b5=1+this.b5|0,e}),new T().i(Jl,`scala.Product$$anon$1`,{di:1,P:1,b:1,c:1,Q:1});function Yl(e){this.bS=null,xc(this,e)}b=Yl.prototype=new Cc,b.constructor=Yl,new T().i(Yl,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dp:1,dn:1,a:1,Y:1,a1:1});function Xl(e){return fo(e,e.aK()+`(`,`, `,`)`)}function Zl(){}b=Zl.prototype=new fl,b.constructor=Zl,b.r=(function(){return!1}),b.gE=(function(){throw new Ul(`next on empty iterator`)}),b.y=(function(){return 0}),b.n=(function(){this.gE()}),b.bC=(function(e,t){return this}),new T().i(Zl,`scala.collection.Iterator$$anon$19`,{du:1,P:1,b:1,c:1,Q:1});function Ql(e){this.el=null,this.b8=!1,this.el=e,this.b8=!1}b=Ql.prototype=new fl,b.constructor=Ql,b.r=(function(){return!this.b8}),b.n=(function(){return this.b8?kc().K.n():(this.b8=!0,this.el)}),b.bC=(function(e,t){return this.b8||e>0||t===0?kc().K:this}),new T().i(Ql,`scala.collection.Iterator$$anon$20`,{dv:1,P:1,b:1,c:1,Q:1});function $l(e){for(;;)if(e.A instanceof tu){var t=e.A;if(e.A=t.A,e.ac=t.ac,t.M!==null){e.L===null&&(e.L=t.L);var n=t.L;n===null&&ko().c5(),n.b9=e.M,e.M=t.M}}else return}function eu(e){for(;;)if(e.M===null)return e.A=null,e.L=null,!1;else{if(e.A=e.M.gq(),e.L===e.M){var t=e.L;t===null&&ko().c5(),e.L=t.b9}if(e.M=e.M.b9,$l(e),e.ac)return!0;if(!(e.A!==null&&e.A.r()))continue;return e.ac=!0,!0}}function tu(e){this.A=null,this.M=null,this.L=null,this.ac=!1,this.A=e,this.M=null,this.L=null,this.ac=!1}b=tu.prototype=new fl,b.constructor=tu,b.r=(function(){return this.ac?!0:this.A===null?!1:this.A.r()?(this.ac=!0,!0):eu(this)}),b.n=(function(){if(this.r()){this.ac=!1;var e=this.A;return e===null&&ko().c5(),e.n()}return kc().K.n()}),b.fJ=(function(e){var t=new mo(e,null);if(this.M===null)this.M=t,this.L=t;else{var n=this.L;n===null&&ko().c5(),n.b9=t,this.L=t}return this.A===null&&(this.A=kc().K),this}),new T().i(tu,`scala.collection.Iterator$ConcatIterator`,{az:1,P:1,b:1,c:1,Q:1});function nu(e){for(;e.a2>0;)e.ad.r()?(e.ad.n(),e.a2=e.a2-1|0):e.a2=0}function ru(e,t){if(e.E<0)return-1;var n=e.E-t|0;return n<0?0:n}function iu(e,t,n){this.ad=null,this.E=0,this.a2=0,this.ad=e,this.E=n,this.a2=t}b=iu.prototype=new fl,b.constructor=iu,b.y=(function(){var e=this.ad.y();if(e<0)return-1;var t=e-this.a2|0,n=t<0?0:t;if(this.E<0)return n;var r=this.E;return r<n?r:n}),b.r=(function(){return nu(this),this.E!==0&&this.ad.r()}),b.n=(function(){return nu(this),this.E>0?(this.E=this.E-1|0,this.ad.n()):this.E<0?this.ad.n():kc().K.n()}),b.bC=(function(e,t){var n=e>0?e:0;if(t<0)var r=ru(this,n);else if(t<=n)var r=0;else if(this.E<0)var r=t-n|0;else var i=ru(this,n),a=t-n|0,r=i<a?i:a;var o=this.a2+n|0;return r===0?kc().K:o<0?(this.a2=2147483647,this.E=0,wc(this,new Nc((()=>new iu(this.ad,o-2147483647|0,r))))):(this.a2=o,this.E=r,this)}),new T().i(iu,`scala.collection.Iterator$SliceIterator`,{dx:1,P:1,b:1,c:1,Q:1});function au(e,t){if(t<0)throw Pl(new Il,``+t);var n=e.fW(t);if(n.d())throw Pl(new Il,``+t);return n.W()}function ou(e,t){return Cd(t)?su(e,e,t):_l(e,t)}function su(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.d()&&!r.d()&&N().H(i.W(),r.W())){var a=i.I(),o=r.I();i=a,r=o;continue}return i.d()&&r.d()}}function cu(e){if(this.bb=null,e===null)throw zl(new Bl);this.bb=e}b=cu.prototype=new fl,b.constructor=cu,b.r=(function(){return!this.bb.d()}),b.n=(function(){var e=this.bb.W();return this.bb=this.bb.I(),e}),new T().i(cu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dC:1,P:1,b:1,c:1,Q:1});function lu(){uu=this,$(),$()}b=lu.prototype=new C,b.constructor=lu,b.bX=(function(e){return $().f2(e)}),b.c2=(function(e){return $().f2(e)}),new T().i(lu,`scala.collection.immutable.List$`,{dI:1,a:1,Y:1,a1:1,aD:1});var uu;function du(){return uu||=new lu,uu}function fu(){this.bT=null,pl(this,vu())}b=fu.prototype=new hl,b.constructor=fu,new T().i(fu,`scala.collection.mutable.Buffer$`,{dP:1,dz:1,a:1,Y:1,a1:1});var pu;function mu(){return pu||=new fu,pu}function hu(e){this.ev=null,this.bf=0,this.eu=0,this.ev=e,this.bf=0,this.eu=e.am()}b=hu.prototype=new fl,b.constructor=hu,b.r=(function(){return this.bf<this.eu}),b.n=(function(){var e=this.ev.an(this.bf);return this.bf=1+this.bf|0,e}),new T().i(hu,`scala.runtime.ScalaRunTime$$anon$1`,{ec:1,P:1,b:1,c:1,Q:1});function gu(){}b=gu.prototype=new C,b.constructor=gu,b.bX=(function(e){return this.eU(e)}),b.eU=(function(e){return Fs(yf(new bf),e).f4()}),b.c2=(function(e){return this.eU(e)}),new T().i(gu,`scala.scalajs.js.WrappedArray$`,{ei:1,aD:1,a:1,Y:1,a1:1});var _u;function vu(){return _u||=new gu,_u}var yu=class e extends Js{constructor(e,t){super(),this.aN=null,this.aM=0,this.aN=e,this.aM=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}by(){return new Jl(this)}o(){var e=-889275714;return e=F().p(e,K(`TransactionDepthExceeded`)),e=F().p(e,F().w(this.aN)),e=F().p(e,this.aM),F().B(e,2)}i(t){if(this===t)return!0;if(t instanceof e){if(this.aM===t.aM){var n=this.aN,r=t.aN;return n===null?r===null:n===r}return!1}return!1}am(){return 2}ao(){return`TransactionDepthExceeded`}an(e){if(e===0)return this.aN;if(e===1)return this.aM;throw Pl(new Il,``+e)}s(){return`TransactionDepthExceeded: `+this.aN+`; maxDepth: `+this.aM}};new T().i(yu,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a7:1,be:1,s:1,a:1,d:1,W:1});function bu(e){this.a9=null,this.aa=null,this.df=null,this.dg=!1,Xc(this,e,$())}b=bu.prototype=new Qc,b.constructor=bu,b.fI=(function(){return this.dg||=(this.df=this.k(`column`),!0),this.df}),new T().i(bu,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bU:1,U:1,y:1,S:1,T:1,bZ:1});function xu(e){this.a9=null,this.aa=null,this.dh=null,this.di=!1,Xc(this,e,$())}b=xu.prototype=new Qc,b.constructor=xu,b.h9=(function(){return this.di||=(this.dh=this.k(`wrap`),!0),this.dh}),new T().i(xu,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bV:1,U:1,y:1,S:1,T:1,c1:1});function Su(e,t){this.bL=null,this.aS=null,this.ch=null,this.dw=null,this.a0=null,this.dw=e,this.a0=t,this.bL=q(),ss(this),xl(this)}b=Su.prototype=new C,b.constructor=Su,b.aG=(function(e){Ui().bW(e,this,void 0)}),b.c0=(function(){return this.aS}),b.eH=(function(e){this.aS=e}),b.fb=(function(e){Sl(this,e)}),b.f9=(function(e){Cl(this,e)}),b.s=(function(){return`ReactiveHtmlElement(`+(this.a0===null?`tag=`+this.dw.cB():this.a0.outerHTML)+`)`}),b.bA=(function(){return this.a0});var Cu=new T().i(Su,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{co:1,a3:1,V:1,ad:1,ae:1,cn:1});function wu(e,t){return Object.is(e,t)}function Tu(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Hn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var Eu=new T().i(0,`java.lang.Double`,{ao:1,R:1,a:1,N:1,L:1,X:1},(e=>typeof e==`number`)),Du=new T().i(0,`java.lang.Float`,{cJ:1,R:1,a:1,N:1,L:1,X:1},(e=>Xn(e))),Ou=new T().i(0,`java.lang.Integer`,{cL:1,R:1,a:1,N:1,L:1,X:1},(e=>Yn(e)));function ku(e,t,n){if(n instanceof x){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function Au(e,t){return e^t}var ju=new T().i(0,`java.lang.Long`,{aq:1,R:1,a:1,N:1,L:1,X:1},(e=>e instanceof x)),Mu=class extends Nl{constructor(e){super(),L(this,e,null,!0,!0)}};new T().i(Mu,`java.lang.NumberFormatException`,{cQ:1,ap:1,O:1,K:1,s:1,a:1});function K(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Nu(e,t){return e===t}var Pu=new T().i(0,`java.lang.String`,{cV:1,a:1,N:1,a5:1,L:1,X:1},(e=>typeof e==`string`));function Fu(){}b=Fu.prototype=new ql,b.constructor=Fu,b.o=(function(){return 2433880}),b.s=(function(){return`None`}),b.am=(function(){return 0}),b.ao=(function(){return`None`}),b.an=(function(e){throw Fl(new Il,e)}),b.gh=(function(){throw new Ul(`None.get`)}),b.x=(function(){this.gh()}),new T().i(Fu,`scala.None$`,{dd:1,au:1,b:1,d:1,W:1,a:1});var Iu;function q(){return Iu||=new Fu,Iu}function Lu(e){this.b6=null,this.b6=e}b=Lu.prototype=new ql,b.constructor=Lu,b.o=(function(){return R().f3(this,1323286827,!0)}),b.i=(function(e){return this===e||e instanceof Lu&&N().H(this.b6,e.b6)}),b.s=(function(){return P().fs(this)}),b.am=(function(){return 1}),b.ao=(function(){return`Some`}),b.an=(function(e){if(e===0)return this.b6;throw Fl(new Il,e)}),b.x=(function(){return this.b6}),new T().i(Lu,`scala.Some`,{av:1,au:1,b:1,d:1,W:1,a:1});function Ru(){}b=Ru.prototype=new C,b.constructor=Ru;function zu(){}zu.prototype=b,b.y=(function(){return-1}),b.V=(function(e){uo(this,e)}),b.aZ=(function(e,t,n,r){return po(this,e,t,n,r)}),b.aK=(function(){return this.b2()});function J(e){this.bR=null,this.a1=0,this.b7=0,this.bR=e,this.a1=0,this.b7=Ua().b1(this.bR)}b=J.prototype=new fl,b.constructor=J,b.y=(function(){return this.b7-this.a1|0}),b.r=(function(){return this.a1<this.b7}),b.n=(function(){this.a1>=Ua().b1(this.bR)&&kc().K.n();var e=P().b0(this.bR,this.a1);return this.a1=1+this.a1|0,e}),b.bZ=(function(e){if(e>0){var t=this.a1+e|0;if(t<0)var n=this.b7;else var r=this.b7,n=r<t?r:t;this.a1=n}return this}),new T().i(J,`scala.collection.ArrayOps$ArrayIterator`,{dm:1,P:1,b:1,c:1,Q:1,a:1});function Bu(e,t){return t<0?0:t>e.R?e.R:t}function Vu(e){this.ek=null,this.ab=0,this.R=0,this.ek=e,this.ab=0,this.R=e.j()}b=Vu.prototype=new fl,b.constructor=Vu,b.y=(function(){return this.R}),b.r=(function(){return this.R>0}),b.n=(function(){if(this.R>0){var e=this.ek.m(this.ab);return this.ab=1+this.ab|0,this.R=this.R-1|0,e}return kc().K.n()}),b.bZ=(function(e){if(e>0){this.ab=this.ab+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),b.bC=(function(e,t){var n=Bu(this,e),r=Bu(this,t)-n|0;return this.R=r<0?0:r,this.ab=this.ab+n|0,this}),new T().i(Vu,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{ds:1,P:1,b:1,c:1,Q:1,a:1});function Hu(e){return e.ep||=(e.eo=new Jd(new(Pc.r()).C(0)),!0),e.eo}function Uu(){this.fm=null,this.eo=null,this.ep=!1,Wu=this,this.fm=new Yl(this)}b=Uu.prototype=new C,b.constructor=Uu,b.ge=(function(e,t){return e instanceof Rd?e:this.h7(Qa().eS(e,t))}),b.h7=(function(e){if(e===null)return null;if(e instanceof w)return new Jd(e);if(e instanceof sr)return new Kd(e);if(e instanceof ur)return new Wd(e);if(e instanceof cr)return new qd(e);if(e instanceof lr)return new Gd(e);if(e instanceof ir)return new Ud(e);if(e instanceof ar)return new Hd(e);if(e instanceof or)return new Yd(e);if(e instanceof rr)return new Vd(e);if(Ra(e,1))return new Xd(e);throw new Gl(e)}),b.cz=(function(e,t){return this.ge(e,t)}),new T().i(Uu,`scala.collection.immutable.ArraySeq$`,{dG:1,a:1,ay:1,aw:1,ax:1,aB:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Ku(){this.fn=null,this.er=null,qu=this,this.fn=new Yl(this),this.er=new lf(new w(0))}b=Ku.prototype=new C,b.constructor=Ku,b.gf=(function(e,t){return this.gA(Qa().eS(e,t))}),b.gA=(function(e){if(e===null)return null;if(e instanceof w)return new lf(e);if(e instanceof sr)return new sf(e);if(e instanceof ur)return new af(e);if(e instanceof cr)return new cf(e);if(e instanceof lr)return new of(e);if(e instanceof ir)return new rf(e);if(e instanceof ar)return new nf(e);if(e instanceof or)return new uf(e);if(e instanceof rr)return new tf(e);if(Ra(e,1))return new df(e);throw new Gl(e)}),b.cz=(function(e,t){return this.gf(e,t)}),new T().i(Ku,`scala.collection.mutable.ArraySeq$`,{dN:1,a:1,ay:1,aw:1,ax:1,aB:1});var qu;function Ju(){return qu||=new Ku,qu}function Yu(e){this.a9=null,this.aa=null,this.db=null,this.dc=!1,Xc(this,e,$())}b=Yu.prototype=new Qc,b.constructor=Yu,b.eR=(function(){return this.dc||=(this.db=this.k(`flex`),!0),this.db}),new T().i(Yu,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bS:1,U:1,y:1,S:1,T:1,c3:1,bY:1});function Xu(e){this.a9=null,this.aa=null,this.dd=null,this.de=!1,Xc(this,e,$())}b=Xu.prototype=new Qc,b.constructor=Xu,b.fG=(function(){return this.de||=(this.dd=this.k(`center`),!0),this.dd}),new T().i(Xu,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bT:1,U:1,y:1,S:1,T:1,c4:1,c0:1});function Zu(e){this.a9=null,this.aa=null,this.dl=null,this.dm=!1,Xc(this,e,$())}b=Zu.prototype=new Qc,b.constructor=Zu,b.ap=(function(){return this.dm||=(this.dl=Yo(this),!0),this.dl}),new T().i(Zu,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bX:1,U:1,y:1,S:1,T:1,aa:1,ab:1});function Qu(){}b=Qu.prototype=new Ol,b.constructor=Qu;function $u(){}$u.prototype=b;function ed(e){return e.aK()+`(<not computed>)`}function td(){}b=td.prototype=new C,b.constructor=td;function nd(){}nd.prototype=b;var Y=class e extends cl{constructor(e){super(),this.S=null,this.S=e,L(this,null,null,!0,!0)}bu(){return Rn(this.S)}ao(){return`JavaScriptException`}am(){return 1}an(e){return e===0?this.S:F().gs(e)}by(){return new hu(this)}o(){return R().f3(this,1744042595,!0)}i(t){return this===t||t instanceof e&&N().H(this.S,t.S)}};new T().i(Y,`scala.scalajs.js.JavaScriptException`,{bc:1,O:1,K:1,s:1,a:1,W:1,d:1});function rd(e){this.a9=null,this.aa=null,this.dj=null,this.dk=!1,Xc(this,e,$())}b=rd.prototype=new Qc,b.constructor=rd,b.ap=(function(){return this.dk||=(this.dj=Yo(this),!0),this.dj}),new T().i(rd,`com.raquo.laminar.defs.styles.StyleProps$$anon$33`,{bW:1,U:1,y:1,S:1,T:1,aa:1,ab:1,c2:1});function id(e,t){typeof console<`u`&&(e.e6&&console.error?console.error(t):console.log(t))}function ad(e){this.e6=!1,this.b3=null,this.e6=e,new Ll,this.b3=``}b=ad.prototype=new $u,b.constructor=ad,b.gw=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b3=``+this.b3+t,t=``;else{var r=this.b3,i=t;id(this,``+r+i.substring(0,n)),this.b3=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(ad,`java.lang.JSConsoleBasedPrintStream`,{cN:1,cD:1,cC:1,ak:1,ai:1,am:1,aj:1,al:1});function od(e,t,n){for(var r=n,i=t;;)if(i<=0||r.d())return r;else{var a=i-1|0,o=r.I();i=a,r=o}}function sd(){this.bd=null}b=sd.prototype=new nd,b.constructor=sd;function cd(){}cd.prototype=b,b.s=(function(){return this.bd}),b.i=(function(e){return this===e}),b.o=(function(){return Kn(this)});function ld(){}b=ld.prototype=new zu,b.constructor=ld;function ud(){}ud.prototype=b,b.s=(function(){return ed(this)});function dd(){this.bd=null,this.bd=`Any`,$()}b=dd.prototype=new cd,b.constructor=dd,b.f5=(function(){return E.l()}),b.eZ=(function(e){return new w(e)}),new T().i(dd,`scala.reflect.ManifestFactory$AnyManifest$`,{dZ:1,b8:1,b7:1,a:1,b9:1,b4:1,d:1,b5:1,b6:1});var fd;function pd(){return fd||=new dd,fd}function md(){this.bd=null,this.bd=`Object`,$()}b=md.prototype=new cd,b.constructor=md,b.f5=(function(){return E.l()}),b.eZ=(function(e){return new w(e)}),new T().i(md,`scala.reflect.ManifestFactory$ObjectManifest$`,{e0:1,b8:1,b7:1,a:1,b9:1,b4:1,d:1,b5:1,b6:1});var hd;function gd(){return hd||=new md,hd}function X(e,t){return e===t?!0:_d(t)&&t.cy(e)?e.c6(t):!1}function _d(e){return!!(e&&e.$classData&&e.$classData.n.f)}function vd(){}b=vd.prototype=new zu,b.constructor=vd;function yd(){}yd.prototype=b,b.d=(function(){return gl(this)}),b.c6=(function(e){return _l(this,e)}),b.cy=(function(e){return!0}),b.i=(function(e){return X(this,e)}),b.o=(function(){return R().f6(this)}),b.s=(function(){return Xl(this)});function bd(){}b=bd.prototype=new ud,b.constructor=bd;function xd(){}xd.prototype=b;function Sd(e){return!!(e&&e.$classData&&e.$classData.n.m)}function Cd(e){return!!(e&&e.$classData&&e.$classData.n.a0)}function wd(e,t){return e.ba=t,e}function Td(){this.ba=null}b=Td.prototype=new xd,b.constructor=Td;function Ed(){}Ed.prototype=b,b.m=(function(e){return this.ba.m(e)}),b.j=(function(){return this.ba.j()}),b.d=(function(){return this.ba.d()});function Dd(){this.cY=null,this.cZ=!1,this.cU=null,this.cV=!1,this.cW=null,this.cX=!1,this.d0=null,this.d1=!1,this.d2=null,this.d3=!1,this.d4=null,this.d5=!1,this.d6=null,this.d7=!1,this.fe=null,this.fd=null,this.d8=null,this.d9=!1,Ti(this),bi(this),vi(this),yi(this)}b=Dd.prototype=new C,b.constructor=Dd,b.eJ=(function(){return this.cZ||=(this.cY=cs(new ls,`div`,!1),!0),this.cY}),b.fv=(function(){return this.cV||=(this.cU=new Xu(`align-items`),!0),this.cU}),b.eI=(function(){return this.cX||=(this.cW=new Yu(`display`),!0),this.cW}),b.ga=(function(){return this.d1||=(this.d0=new bu(`flex-direction`),!0),this.d0}),b.gb=(function(){return this.d3||=(this.d2=new xu(`flex-wrap`),!0),this.d2}),b.bt=(function(){return this.d5||=(this.d4=new rd(`font-size`),!0),this.d4}),b.eW=(function(){return this.d7||=(this.d6=new Zu(`gap`),!0),this.d6}),b.gZ=(function(){return this.d9||=(this.d8=new qc(this),!0),this.d8}),new T().i(Dd,`com.raquo.laminar.api.package$$anon$1`,{bH:1,c5:1,bL:1,bQ:1,bP:1,bR:1,bN:1,bF:1,bB:1,bE:1,a9:1,ac:1,a8:1,bC:1});function Od(e){this.ba=null,wd(this,e)}b=Od.prototype=new Ed,b.constructor=Od,b.aL=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),b.y=(function(){return this.j()}),b.l=(function(){return new Vu(this)}),b.b2=(function(){return`IndexedSeqView`}),new T().i(Od,`scala.collection.IndexedSeqView$Id`,{dr:1,dB:1,dj:1,dk:1,l:1,b:1,c:1,j:1,i:1,h:1,a:1,dE:1,k:1,dA:1,o:1,dq:1});function kd(){}b=kd.prototype=new yd,b.constructor=kd;function Ad(){}Ad.prototype=b;function jd(e,t){return!Nd(t)||e.j()===t.j()}function Md(e,t){if(Nd(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.cx(),o=t.cx(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().H(e.m(i),t.m(i)),i=1+i|0;if(i<n&&r)for(var p=e.l().bZ(i),m=t.l().bZ(i);r&&p.r();)r=N().H(p.n(),m.n())}return r}return _l(e,t)}function Nd(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Pd(){}b=Pd.prototype=new yd,b.constructor=Pd;function Fd(){}Fd.prototype=b;function Z(e){this.bV=null,this.bV=e}b=Z.prototype=new C,b.constructor=Z,b.cy=(function(e){return jd(this,e)}),b.c6=(function(e){return Md(this,e)}),b.cx=(function(){return bo().eq}),b.l=(function(){return new Vu(new Od(this))}),b.aL=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),b.y=(function(){return this.j()}),b.i=(function(e){return X(this,e)}),b.o=(function(){return R().f6(this)}),b.s=(function(){return Xl(this)}),b.d=(function(){return gl(this)}),b.V=(function(e){uo(this,e)}),b.aZ=(function(e,t,n,r){return po(this,e,t,n,r)}),b.j=(function(){return this.bV.length|0}),b.m=(function(e){return this.bV[e]}),b.aK=(function(){return`WrappedVarArgs`}),b.g=(function(e){return this.m(e|0)}),new T().i(Z,`scala.scalajs.runtime.WrappedVarArgs`,{bd:1,t:1,b:1,c:1,j:1,i:1,h:1,u:1,e:1,g:1,k:1,d:1,f:1,w:1,v:1,o:1,m:1,I:1,x:1,p:1,q:1,a:1});function Id(){}b=Id.prototype=new Fd,b.constructor=Id;function Ld(){}Ld.prototype=b,b.eC=(function(e){return Fs(this,e)});function Rd(){}b=Rd.prototype=new Ad,b.constructor=Rd;function zd(){}zd.prototype=b,b.aL=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),b.y=(function(){return this.j()}),b.b2=(function(){return`IndexedSeq`}),b.cy=(function(e){return jd(this,e)}),b.c6=(function(e){return Md(this,e)}),b.aK=(function(){return`ArraySeq`}),b.cx=(function(){return 2147483647});function Q(){}b=Q.prototype=new Fd,b.constructor=Q;function Bd(){}Bd.prototype=b,b.aL=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),b.y=(function(){return this.j()}),b.b2=(function(){return`IndexedSeq`}),b.aK=(function(){return`ArraySeq`}),b.i=(function(e){return e instanceof Q&&Ua().b1(this.U())!==Ua().b1(e.U())?!1:X(this,e)});function Vd(e){this.aw=null,this.aw=e}b=Vd.prototype=new zd,b.constructor=Vd,b.j=(function(){return this.aw.a.length}),b.bp=(function(e){return this.aw.a[e]}),b.o=(function(){var e=R();return e.v(this.aw,e.t)}),b.i=(function(e){return e instanceof Vd?j().eP(this.aw,e.aw):X(this,e)}),b.l=(function(){return new J(this.aw)}),b.m=(function(e){return this.bp(e)}),b.g=(function(e){return this.bp(e|0)}),new T().i(Vd,`scala.collection.immutable.ArraySeq$ofBoolean`,{aF:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Hd(e){this.ax=null,this.ax=e}b=Hd.prototype=new zd,b.constructor=Hd,b.j=(function(){return this.ax.a.length}),b.bh=(function(e){return this.ax.a[e]}),b.o=(function(){var e=R();return e.v(this.ax,e.t)}),b.i=(function(e){return e instanceof Hd?j().eK(this.ax,e.ax):X(this,e)}),b.l=(function(){return new J(this.ax)}),b.m=(function(e){return this.bh(e)}),b.g=(function(e){return this.bh(e|0)}),new T().i(Hd,`scala.collection.immutable.ArraySeq$ofByte`,{aG:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Ud(e){this.ae=null,this.ae=e}b=Ud.prototype=new zd,b.constructor=Ud,b.j=(function(){return this.ae.a.length}),b.bi=(function(e){return this.ae.a[e]}),b.o=(function(){var e=R();return e.v(this.ae,e.t)}),b.i=(function(e){return e instanceof Ud?j().eL(this.ae,e.ae):X(this,e)}),b.l=(function(){return new J(this.ae)}),b.aZ=(function(e,t,n,r){return new rf(this.ae).aZ(e,t,n,r)}),b.m=(function(e){return Zn(this.bi(e))}),b.g=(function(e){return Zn(this.bi(e|0))}),new T().i(Ud,`scala.collection.immutable.ArraySeq$ofChar`,{aH:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Wd(e){this.ay=null,this.ay=e}b=Wd.prototype=new zd,b.constructor=Wd,b.j=(function(){return this.ay.a.length}),b.bj=(function(e){return this.ay.a[e]}),b.o=(function(){var e=R();return e.v(this.ay,e.t)}),b.i=(function(e){if(e instanceof Wd){var t=this.ay,n=e.ay;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),b.l=(function(){return new J(this.ay)}),b.m=(function(e){return this.bj(e)}),b.g=(function(e){return this.bj(e|0)}),new T().i(Wd,`scala.collection.immutable.ArraySeq$ofDouble`,{aI:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Gd(e){this.az=null,this.az=e}b=Gd.prototype=new zd,b.constructor=Gd,b.j=(function(){return this.az.a.length}),b.bk=(function(e){return this.az.a[e]}),b.o=(function(){var e=R();return e.v(this.az,e.t)}),b.i=(function(e){if(e instanceof Gd){var t=this.az,n=e.az;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return X(this,e)}),b.l=(function(){return new J(this.az)}),b.m=(function(e){return this.bk(e)}),b.g=(function(e){return this.bk(e|0)}),new T().i(Gd,`scala.collection.immutable.ArraySeq$ofFloat`,{aJ:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Kd(e){this.aA=null,this.aA=e}b=Kd.prototype=new zd,b.constructor=Kd,b.j=(function(){return this.aA.a.length}),b.bl=(function(e){return this.aA.a[e]}),b.o=(function(){var e=R();return e.v(this.aA,e.t)}),b.i=(function(e){return e instanceof Kd?j().eM(this.aA,e.aA):X(this,e)}),b.l=(function(){return new J(this.aA)}),b.m=(function(e){return this.bl(e)}),b.g=(function(e){return this.bl(e|0)}),new T().i(Kd,`scala.collection.immutable.ArraySeq$ofInt`,{aK:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function qd(e){this.aB=null,this.aB=e}b=qd.prototype=new zd,b.constructor=qd,b.j=(function(){return this.aB.a.length>>>1|0}),b.bm=(function(e){var t=this.aB.a,n=e<<1;return S(t[n],t[n+1|0])}),b.o=(function(){var e=R();return e.v(this.aB,e.t)}),b.i=(function(e){return e instanceof qd?j().eN(this.aB,e.aB):X(this,e)}),b.l=(function(){return new J(this.aB)}),b.m=(function(e){return this.bm(e)}),b.g=(function(e){return this.bm(e|0)}),new T().i(qd,`scala.collection.immutable.ArraySeq$ofLong`,{aL:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Jd(e){this.aC=null,this.aC=e}b=Jd.prototype=new zd,b.constructor=Jd,b.j=(function(){return this.aC.a.length}),b.m=(function(e){return this.aC.a[e]}),b.o=(function(){var e=R();return e.v(this.aC,e.t)}),b.i=(function(e){return e instanceof Jd?Qa().eQ(this.aC,e.aC):X(this,e)}),b.l=(function(){return new J(this.aC)}),b.g=(function(e){return this.m(e|0)}),new T().i(Jd,`scala.collection.immutable.ArraySeq$ofRef`,{aM:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Yd(e){this.aD=null,this.aD=e}b=Yd.prototype=new zd,b.constructor=Yd,b.j=(function(){return this.aD.a.length}),b.bn=(function(e){return this.aD.a[e]}),b.o=(function(){var e=R();return e.v(this.aD,e.t)}),b.i=(function(e){return e instanceof Yd?j().eO(this.aD,e.aD):X(this,e)}),b.l=(function(){return new J(this.aD)}),b.m=(function(e){return this.bn(e)}),b.g=(function(e){return this.bn(e|0)}),new T().i(Yd,`scala.collection.immutable.ArraySeq$ofShort`,{aN:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Xd(e){this.aX=null,this.aX=e}b=Xd.prototype=new zd,b.constructor=Xd,b.j=(function(){return this.aX.a.length}),b.bo=(function(e){}),b.o=(function(){var e=R();return e.v(this.aX,e.t)}),b.i=(function(e){return e instanceof Xd?this.aX.a.length===e.aX.a.length:X(this,e)}),b.l=(function(){return new J(this.aX)}),b.m=(function(e){this.bo(e)}),b.g=(function(e){this.bo(e|0)}),new T().i(Xd,`scala.collection.immutable.ArraySeq$ofUnit`,{aO:1,H:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,o:1,m:1,I:1,t:1,p:1,q:1,x:1,M:1,a:1});function Zd(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.d()|0;else{if(!i.d()){var o=1+a|0,s=i.I();a=o,i=s;continue}return-1}}function Qd(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.d(),o=r.d();if(!(a||o)&&N().H(i.W(),r.W())){var s=i.I(),c=r.I();i=s,r=c;continue}return a&&o}}function $d(){}b=$d.prototype=new Ad,b.constructor=$d;function ef(){}ef.prototype=b,b.m=(function(e){return au(this,e)}),b.c6=(function(e){return ou(this,e)}),b.b2=(function(){return`LinearSeq`}),b.l=(function(){return new cu(this)}),b.fr=(function(e){if(this.d())return e;if(e.d())return this;for(var t=new ff(e.W(),this),n=t,r=e.I();!r.d();){var i=new ff(r.W(),this);n.bc=i,n=i,r=r.I()}return t}),b.d=(function(){return this===$()}),b.f2=(function(e){if(e instanceof $d)return this.fr(e);if(e.y()===0)return this;var t=e.l();if(t.r()){for(var n=new ff(t.n(),this),r=n;t.r();){var i=new ff(t.n(),this);r.bc=i,r=i}return n}return this}),b.V=(function(e){for(var t=this;!t.d();)e.g(t.W()),t=t.I()}),b.j=(function(){for(var e=this,t=0;!e.d();)t=1+t|0,e=e.I();return t}),b.aL=(function(e){return e<0?1:Zd(this,e,0,this)}),b.aK=(function(){return`List`}),b.i=(function(e){return e instanceof $d?Qd(this,this,e):X(this,e)}),b.fW=(function(e){return od(this,e,this)}),b.g=(function(e){return au(this,e|0)});function tf(e){this.af=null,this.af=e}b=tf.prototype=new Bd,b.constructor=tf,b.j=(function(){return this.af.a.length}),b.bp=(function(e){return this.af.a[e]}),b.o=(function(){var e=R();return e.v(this.af,e.t)}),b.i=(function(e){return e instanceof tf?j().eP(this.af,e.af):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.af)}),b.U=(function(){return this.af}),b.m=(function(e){return this.bp(e)}),b.g=(function(e){return this.bp(e|0)}),new T().i(tf,`scala.collection.mutable.ArraySeq$ofBoolean`,{aR:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function nf(e){this.ag=null,this.ag=e}b=nf.prototype=new Bd,b.constructor=nf,b.j=(function(){return this.ag.a.length}),b.bh=(function(e){return this.ag.a[e]}),b.o=(function(){var e=R();return e.v(this.ag,e.t)}),b.i=(function(e){return e instanceof nf?j().eK(this.ag,e.ag):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.ag)}),b.U=(function(){return this.ag}),b.m=(function(e){return this.bh(e)}),b.g=(function(e){return this.bh(e|0)}),new T().i(nf,`scala.collection.mutable.ArraySeq$ofByte`,{aS:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function rf(e){this.N=null,this.N=e}b=rf.prototype=new Bd,b.constructor=rf,b.j=(function(){return this.N.a.length}),b.bi=(function(e){return this.N.a[e]}),b.o=(function(){var e=R();return e.v(this.N,e.t)}),b.i=(function(e){return e instanceof rf?j().eL(this.N,e.N):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.N)}),b.aZ=(function(e,t,n,r){var i=e.F;t.length!==0&&(i.q=``+i.q+t);var a=this.N.a.length;if(a!==0){if(n===``)i.fy(this.N);else{i.j();var o=this.N.a[0],s=``+Vn(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.N.a[c],u=``+Vn(l);i.q+=u,c=1+c|0}}}return r.length!==0&&(i.q=``+i.q+r),e}),b.U=(function(){return this.N}),b.m=(function(e){return Zn(this.bi(e))}),b.g=(function(e){return Zn(this.bi(e|0))}),new T().i(rf,`scala.collection.mutable.ArraySeq$ofChar`,{aT:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function af(e){this.O=null,this.O=e}b=af.prototype=new Bd,b.constructor=af,b.j=(function(){return this.O.a.length}),b.bj=(function(e){return this.O.a[e]}),b.o=(function(){var e=R();return e.v(this.O,e.t)}),b.i=(function(e){if(e instanceof af){var t=e.O;if(this.O===t)return!0;if(this.O.a.length===t.a.length){for(var n=0;n<this.O.a.length&&this.O.a[n]===t.a[n];)n=1+n|0;return n>=this.O.a.length}return!1}return Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.O)}),b.U=(function(){return this.O}),b.m=(function(e){return this.bj(e)}),b.g=(function(e){return this.bj(e|0)}),new T().i(af,`scala.collection.mutable.ArraySeq$ofDouble`,{aU:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function of(e){this.P=null,this.P=e}b=of.prototype=new Bd,b.constructor=of,b.j=(function(){return this.P.a.length}),b.bk=(function(e){return this.P.a[e]}),b.o=(function(){var e=R();return e.v(this.P,e.t)}),b.i=(function(e){if(e instanceof of){var t=e.P;if(this.P===t)return!0;if(this.P.a.length===t.a.length){for(var n=0;n<this.P.a.length&&this.P.a[n]===t.a[n];)n=1+n|0;return n>=this.P.a.length}return!1}return Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.P)}),b.U=(function(){return this.P}),b.m=(function(e){return this.bk(e)}),b.g=(function(e){return this.bk(e|0)}),new T().i(of,`scala.collection.mutable.ArraySeq$ofFloat`,{aV:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function sf(e){this.ah=null,this.ah=e}b=sf.prototype=new Bd,b.constructor=sf,b.j=(function(){return this.ah.a.length}),b.bl=(function(e){return this.ah.a[e]}),b.o=(function(){var e=R();return e.v(this.ah,e.t)}),b.i=(function(e){return e instanceof sf?j().eM(this.ah,e.ah):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.ah)}),b.U=(function(){return this.ah}),b.m=(function(e){return this.bl(e)}),b.g=(function(e){return this.bl(e|0)}),new T().i(sf,`scala.collection.mutable.ArraySeq$ofInt`,{aW:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function cf(e){this.ai=null,this.ai=e}b=cf.prototype=new Bd,b.constructor=cf,b.j=(function(){return this.ai.a.length>>>1|0}),b.bm=(function(e){var t=this.ai.a,n=e<<1;return S(t[n],t[n+1|0])}),b.o=(function(){var e=R();return e.v(this.ai,e.t)}),b.i=(function(e){return e instanceof cf?j().eN(this.ai,e.ai):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.ai)}),b.U=(function(){return this.ai}),b.m=(function(e){return this.bm(e)}),b.g=(function(e){return this.bm(e|0)}),new T().i(cf,`scala.collection.mutable.ArraySeq$ofLong`,{aX:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function lf(e){this.aj=null,this.aj=e}b=lf.prototype=new Bd,b.constructor=lf,b.j=(function(){return this.aj.a.length}),b.m=(function(e){return this.aj.a[e]}),b.o=(function(){var e=R();return e.v(this.aj,e.t)}),b.i=(function(e){return e instanceof lf?Qa().eQ(this.aj,e.aj):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.aj)}),b.U=(function(){return this.aj}),b.g=(function(e){return this.m(e|0)}),new T().i(lf,`scala.collection.mutable.ArraySeq$ofRef`,{aY:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function uf(e){this.ak=null,this.ak=e}b=uf.prototype=new Bd,b.constructor=uf,b.j=(function(){return this.ak.a.length}),b.bn=(function(e){return this.ak.a[e]}),b.o=(function(){var e=R();return e.v(this.ak,e.t)}),b.i=(function(e){return e instanceof uf?j().eO(this.ak,e.ak):Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.ak)}),b.U=(function(){return this.ak}),b.m=(function(e){return this.bn(e)}),b.g=(function(e){return this.bn(e|0)}),new T().i(uf,`scala.collection.mutable.ArraySeq$ofShort`,{aZ:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function df(e){this.aE=null,this.aE=e}b=df.prototype=new Bd,b.constructor=df,b.j=(function(){return this.aE.a.length}),b.bo=(function(e){}),b.o=(function(){var e=R();return e.v(this.aE,e.t)}),b.i=(function(e){return e instanceof df?this.aE.a.length===e.aE.a.length:Q.prototype.i.call(this,e)}),b.l=(function(){return new J(this.aE)}),b.U=(function(){return this.aE}),b.m=(function(e){this.bo(e)}),b.g=(function(e){this.bo(e|0)}),new T().i(df,`scala.collection.mutable.ArraySeq$ofUnit`,{b0:1,J:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,o:1,m:1,D:1,C:1,p:1,q:1,a:1});function ff(e,t){this.cs=null,this.bc=null,this.cs=e,this.bc=t}b=ff.prototype=new ef,b.constructor=ff,b.by=(function(){return new Jl(this)}),b.am=(function(){return 2}),b.ao=(function(){return`::`}),b.an=(function(e){if(e===0)return this.cs;if(e===1)return this.bc;throw Fl(new Il,e)}),b.W=(function(){return this.cs}),b.I=(function(){return this.bc}),new T().i(ff,`scala.collection.immutable.$colon$colon`,{dF:1,a6:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aA:1,a0:1,aQ:1,aP:1,p:1,q:1,aC:1,x:1,a:1,aE:1,W:1});function pf(){mf=this,$(),$()}b=pf.prototype=new ef,b.constructor=pf,b.by=(function(){return new Jl(this)}),b.am=(function(){return 0}),b.ao=(function(){return`Nil`}),b.an=(function(e){throw Fl(new Il,e)}),b.gp=(function(){throw new Ul(`head of empty list`)}),b.h2=(function(){throw new Hl(`tail of empty list`)}),b.y=(function(){return 0}),b.l=(function(){return kc().K}),b.W=(function(){this.gp()}),b.I=(function(){this.h2()}),new T().i(pf,`scala.collection.immutable.Nil$`,{dK:1,a6:1,z:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,u:1,w:1,v:1,aA:1,a0:1,aQ:1,aP:1,p:1,q:1,aC:1,x:1,a:1,aE:1,W:1});var mf;function $(){return mf||=new pf,mf}function hf(e,t){return e.F=t,e}function gf(e){return hf(e,new ll),e}function _f(){this.F=null}b=_f.prototype=new Fd,b.constructor=_f,b.eC=(function(e){return Fs(this,e)}),b.l=(function(){return new Vu(new Od(this))}),b.aL=(function(e){var t=this.F.j();return t===e?0:t<e?-1:1}),b.b2=(function(){return`IndexedSeq`}),b.j=(function(){return this.F.j()}),b.y=(function(){return this.F.j()}),b.ft=(function(e){var t=this.F,n=``+Vn(e);return t.q+=n,this}),b.s=(function(){return this.F.q}),b.d=(function(){return this.F.j()===0}),b.m=(function(e){return Zn(this.F.eF(e))}),b.g=(function(e){var t=e|0;return Zn(this.F.eF(t))}),b.cv=(function(e){return this.ft($n(e))}),b.f4=(function(){return this.F.q}),new T().i(_f,`scala.collection.mutable.StringBuilder`,{dU:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,b2:1,b3:1,b1:1,dS:1,o:1,m:1,D:1,C:1,a5:1,a:1});function vf(e,t){return e.aF=t,e}function yf(e){return vf(e,[]),e}function bf(){this.aF=null}b=bf.prototype=new Ld,b.constructor=bf,b.b2=(function(){return`IndexedSeq`}),b.l=(function(){return new Vu(new Od(this))}),b.aL=(function(e){var t=this.aF.length|0;return t===e?0:t<e?-1:1}),b.m=(function(e){return this.aF[e]}),b.j=(function(){return this.aF.length|0}),b.y=(function(){return this.aF.length|0}),b.aK=(function(){return`WrappedArray`}),b.f4=(function(){return this}),b.cv=(function(e){return this.aF.push(e),this}),b.g=(function(e){var t=e|0;return this.aF[t]}),new T().i(bf,`scala.scalajs.js.WrappedArray`,{eh:1,dL:1,A:1,n:1,l:1,b:1,c:1,j:1,i:1,h:1,e:1,g:1,k:1,d:1,f:1,E:1,r:1,B:1,G:1,F:1,b2:1,b3:1,dT:1,dO:1,q:1,p:1,C:1,o:1,m:1,D:1,dQ:1,b1:1,a:1}),$i(new(Pu.r()).C([]));