var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=/* @__PURE__ */ new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,oe=re.reactiveElementPolyfillSupport,se=(e,t)=>e,ce={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},le=(e,t)=>!d(e,t),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:`open`},de[se(`elementProperties`)]=/* @__PURE__ */ new Map,de[se(`finalized`)]=/* @__PURE__ */ new Map,oe?.({ReactiveElement:de}),(re.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const fe=globalThis,pe=e=>e,me=fe.trustedTypes,he=me?me.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ge=`$lit$`,_e=`lit$${Math.random().toFixed(9).slice(2)}$`,ve=`?`+_e,ye=`<${ve}>`,be=document,xe=()=>be.createComment(``),Se=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ce=Array.isArray,we=e=>Ce(e)||typeof e?.[Symbol.iterator]==`function`,Te=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Oe=/>/g,ke=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ae=/'/g,je=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ne=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Pe=Symbol.for(`lit-noChange`),m=Symbol.for(`lit-nothing`),Fe=/* @__PURE__ */ new WeakMap,Ie=be.createTreeWalker(be,129);function Le(e,t){if(!Ce(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return he===void 0?t:he.createHTML(t)}const Re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ee;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ee?c[1]===`!--`?o=De:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ke):(Me.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ke):o=Oe:o===ke?c[0]===`>`?(o=i??Ee,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ke:c[3]===`"`?je:Ae):o===je||o===Ae?o=ke:o===De||o===Oe?o=Ee:(o=ke,i=void 0);let d=o===ke&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ee?n+ye:l>=0?(r.push(s),n.slice(0,l)+ge+n.slice(l)+_e+d):n+_e+(l===-2?t:d)}return[Le(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Re(t,n);if(this.el=e.createElement(l,r),Ie.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ie.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ge)){let t=u[o++],n=i.getAttribute(e).split(_e),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?We:r[1]===`?`?Ge:r[1]===`@`?Ke:Ue}),i.removeAttribute(e)}else e.startsWith(_e)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Me.test(i.tagName)){let e=i.textContent.split(_e),t=e.length-1;if(t>0){i.textContent=me?me.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],xe()),Ie.nextNode(),c.push({type:2,index:++a});i.append(e[t],xe())}}}else if(i.nodeType===8){if(i.data===ve)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_e,e+1))!==-1;)c.push({type:7,index:a}),e+=_e.length-1}}a++}}static createElement(e,t){let n=be.createElement(`template`);return n.innerHTML=e,n}};function Be(e,t,n=e,r){if(t===Pe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Se(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Be(e,i._$AS(e,t.values),i,r)),t}var Ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??be).importNode(t,!0);Ie.currentNode=r;let i=Ie.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new He(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new qe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ie.nextNode(),a++)}return Ie.currentNode=be,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},He=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Be(this,e,t),Se(e)?e===m||e==null||e===``?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?we(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ze.createElement(Le(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ve(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Fe.get(e.strings);return t===void 0&&Fe.set(e.strings,t=new ze(e)),t}k(t){Ce(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(xe()),this.O(xe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=pe(e).nextSibling;pe(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=m}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Be(this,e,t,0),a=!Se(e)||e!==this._$AH&&e!==Pe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Be(this,r[n+o],t,o),s===Pe&&(s=this._$AH[o]),a||=!Se(s)||s!==this._$AH[o],s===m?e=m:e!==m&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},We=class extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},Ge=class extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},Ke=class extends Ue{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Be(this,e,t,0)??m)===Pe)return;let n=this._$AH,r=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==m&&(n===m||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}};const Je={M:ge,P:_e,A:ve,C:1,L:Re,R:Ve,D:we,V:Be,I:He,H:Ue,N:Ge,U:Ke,B:We,F:qe},Ye=fe.litHtmlPolyfillSupport;Ye?.(ze,He),(fe.litHtmlVersions??=[]).push(`3.3.3`);const Xe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new He(t.insertBefore(xe(),e),e,void 0,n??{})}return i._$AI(e),i},Ze=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Qe=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};Qe._$litElement$=!0,Qe.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:Qe});const $e=Ze.litElementPolyfillSupport;$e?.({LitElement:Qe}),(Ze.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var et=c`
  :host {
    --gap: 0.5em;

    display: block;
  }

  :host([orientation='horizontal']) {
    --gap: 1em;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .checkbox-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  /* The group of checkboxes */
  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    /* Keep items sized to their content so the clickable label doesn't span the full width */
    align-items: start;
    gap: var(--gap);
    margin-block-start: 0.5em;
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }

  /* Hint */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Hide the required asterisk on individual controls; the group's label carries the indicator instead. */
  ::slotted(wa-checkbox[required]),
  ::slotted(wa-switch[required]) {
    --wa-form-control-required-content: '';
  }
`,tt=c`
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
`,nt={small:`s`,medium:`m`,large:`l`},rt=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function it(e,t){t in nt&&!rt.has(`${e}:${t}`)&&(rt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${nt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var at=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},ot=c`
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
function st(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ct=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,ut=e=>{throw TypeError(e)},h=(e,t,n,r)=>{for(var i=r>1?void 0:r?lt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ct(t,n,i),i},dt=(e,t,n)=>t.has(e)||ut(`Cannot `+n),ft=(e,t,n)=>(dt(e,t,`read from private field`),n?n.call(e):t.get(e)),pt=(e,t,n)=>t.has(e)?ut(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),mt=(e,t,n,r)=>(dt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ht=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},gt={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},_t=(e=gt,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?_t(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function vt(e){return g({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const yt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function bt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return yt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return yt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=c`
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
`,St=/;\s+$/;function Ct(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function wt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(St)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Tt,Et=class extends Qe{constructor(){super(),pt(this,Tt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[xt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ft(this,Tt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),mt(this,Tt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=wt({property:Ct(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=wt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Tt=/* @__PURE__ */ new WeakMap,h([g()],Et.prototype,`dir`,2),h([g()],Et.prototype,`lang`,2),h([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],Et.prototype,`didSSR`,2);
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
*/const At=Ot(class extends kt{constructor(e){if(super(e),e.type!==Dt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Pe}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _=class extends Et{constructor(){super(...arguments),this.hasSlotController=new at(this,`hint`,`label`),this.label=``,this.hint=``,this.orientation=`vertical`,this.required=!1,this.withLabel=!1,this.withHint=!1,this.syncCheckboxElements=()=>{if(this.size)for(let e of this.getAllCheckboxes())e.setAttribute(`size`,this.size)}}handleSizeChange(){it(this.localName,this.size)}updated(e){e.has(`size`)&&this.syncCheckboxElements()}getAllCheckboxes(){return[...this.querySelectorAll(`:is(wa-checkbox, wa-switch)`)]}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t;return Ne`
      <fieldset
        part="form-control"
        class=${At({"form-control":!0,"checkbox-group-required":this.required,"form-control-has-label":n})}
      >
        <label
          part="form-control-label"
          id="label"
          class=${At({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" role="group" aria-labelledby="label" aria-describedby="hint">
          <slot @slotchange=${this.syncCheckboxElements}></slot>
        </div>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${At({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </fieldset>
    `}};_.css=[ot,tt,et],h([g()],_.prototype,`label`,2),h([g({attribute:`hint`})],_.prototype,`hint`,2),h([g({reflect:!0})],_.prototype,`orientation`,2),h([g({reflect:!0})],_.prototype,`size`,2),h([st(`size`)],_.prototype,`handleSizeChange`,1),h([g({type:Boolean,reflect:!0})],_.prototype,`required`,2),h([g({type:Boolean,attribute:`with-label`})],_.prototype,`withLabel`,2),h([g({type:Boolean,attribute:`with-hint`})],_.prototype,`withHint`,2),_=h([ht(`wa-checkbox-group`)],_),_.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jt=c`
  :host {
    --checked-icon-color: var(--wa-color-brand-on-loud);
    --checked-icon-scale: 0.8;

    display: inline-flex;
    color: var(--wa-form-control-value-color);
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    user-select: none;
    -webkit-user-select: none;
  }

  [part~='control'] {
    display: inline-flex;
    flex: 0 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: var(--wa-form-control-toggle-size);
    height: var(--wa-form-control-toggle-size);
    border-color: var(--wa-form-control-border-color);
    border-radius: min(
      calc(var(--wa-form-control-toggle-size) * 0.375),
      var(--wa-border-radius-s)
    ); /* min prevents entirely circular checkbox */
    border-style: var(--wa-border-style);
    border-width: var(--wa-form-control-border-width);
    background-color: var(--wa-form-control-background-color);
    transition:
      background var(--wa-transition-normal),
      border-color var(--wa-transition-fast),
      box-shadow var(--wa-transition-fast),
      color var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);

    margin-inline-end: 0.5em;
  }

  [part~='base'] {
    display: flex;
    align-items: flex-start;
    position: relative;
    color: currentColor;
    vertical-align: middle;
    cursor: pointer;
  }

  [part~='label'] {
    display: inline;
  }

  /* Checked */
  [part~='control']:has(:checked, :indeterminate) {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-activated-color);
  }

  /* Focus */
  [part~='control']:has(> input:focus-visible:not(:disabled)) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host [part~='base']:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input {
    position: absolute;
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    pointer-events: none;
  }

  [part~='icon'] {
    display: flex;
    scale: var(--checked-icon-scale);

    /* Without this, Safari renders the icon slightly to the left */
    &::part(svg) {
      translate: 0.0009765625em;
    }

    input:not(:checked, :indeterminate) + & {
      visibility: hidden;
    }
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }
`,Mt=(e={})=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},Nt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ft=class extends Et{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Nt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ft.formAssociated=!0,h([g({reflect:!0})],Ft.prototype,`name`,2),h([g({type:Boolean})],Ft.prototype,`disabled`,2),h([g({state:!0,attribute:!1})],Ft.prototype,`valueHasChanged`,2),h([g({state:!0,attribute:!1})],Ft.prototype,`hasInteracted`,2),h([g({attribute:`custom-error`,reflect:!0})],Ft.prototype,`customError`,2),h([g({attribute:!1,state:!0,type:Object})],Ft.prototype,`validity`,1);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const It=e=>e??m,{I:Lt}=Je,Rt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,zt=e=>e.strings===void 0,Bt={},Vt=(e,t=Bt)=>e._$AH=t,Ht=Ot(class extends kt{constructor(e){
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
if(super(e),e.type!==Dt.PROPERTY&&e.type!==Dt.ATTRIBUTE&&e.type!==Dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!zt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Pe||t===m)return t;let n=e.element,r=e.name;if(e.type===Dt.PROPERTY){if(t===n[r])return Pe}else if(e.type===Dt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Pe}else if(e.type===Dt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Pe;return Vt(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Ft{constructor(){super(...arguments),this.hasSlotController=new at(this,`hint`),this.title=``,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``}static get validators(){let e=[Mt({validationProperty:`checked`,validationElement:Object.assign(document.createElement(`input`),{type:`checkbox`,required:!0})})];return[...super.validators,...e]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){it(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleDefaultCheckedChange()}):this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleValueOrCheckedChange()}):(this.setValue(this.checked?this.value:null,this._value),this.updateValidity())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set(`checked`,this.checked),this.customStates.set(`indeterminate`,this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`hint`),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?`indeterminate`:`check`,i=n?`indeterminate`:`checked`,a=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,o=this.didSSR&&!this.hasUpdated?null:Ht(this.checked);return Ne`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${It(this.name)}
            value=${It(this.value)}
            .indeterminate=${Ht(this.indeterminate)}
            .checked=${It(o)}
            ?checked=${a}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-checked=${this.indeterminate?`mixed`:this.checked?`true`:`false`}
            aria-describedby="hint"
            @click=${this.handleClick}
          />

          <wa-icon part="${i}-icon icon" library="system" name=${r}></wa-icon>
        </span>

        <slot part="label"></slot>
      </label>

      <slot
        id="hint"
        part="hint"
        name="hint"
        aria-hidden=${t?`false`:`true`}
        class="${At({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};v.css=[tt,ot,jt],v.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0},h([bt(`input[type="checkbox"]`)],v.prototype,`input`,2),h([g()],v.prototype,`title`,2),h([g({reflect:!0})],v.prototype,`value`,1),h([g({reflect:!0})],v.prototype,`size`,2),h([st(`size`)],v.prototype,`handleSizeChange`,1),h([g({type:Boolean})],v.prototype,`disabled`,2),h([g({type:Boolean,reflect:!0})],v.prototype,`indeterminate`,2),h([g({type:Boolean,attribute:!1})],v.prototype,`checked`,1),h([g({type:Boolean,reflect:!0,attribute:`checked`})],v.prototype,`defaultChecked`,2),h([g({type:Boolean,reflect:!0})],v.prototype,`required`,2),h([g()],v.prototype,`hint`,2),h([st([`checked`,`defaultChecked`])],v.prototype,`handleDefaultCheckedChange`,1),h([st([`checked`,`indeterminate`])],v.prototype,`handleStateChange`,1),h([st(`disabled`)],v.prototype,`handleDisabledChange`,1),v=h([ht(`wa-checkbox`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ut=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Wt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Gt=c`
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
`,Kt=``,qt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Jt(){return Kt.replace(/\/$/,``)}function Yt(e){qt=e}function Xt(){if(!qt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Yt(e.getAttribute(`data-fa-kit-code`)||``)}return qt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=`7.3.0`;function Qt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function $t(e,t,n){let r=Qt(e,t,n),i=Jt();if(i)return`${i}/${r}/${e}.svg`;let a=Xt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Zt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Zt}/svgs/${r}/${e}.svg`}var en={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>$t(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var nn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},rn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=nn[n][e]??nn.regular[e]??nn.regular[`circle-question`];return r?tn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},an=`classic`,on=[en,rn],sn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function cn(e){sn.add(e)}function ln(e){sn.delete(e)}function un(e){return on.find(t=>t.name===e)}function dn(){return an}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var fn=Symbol(),pn=Symbol(),mn,hn=/* @__PURE__ */ new Map,y=class extends Et{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ne`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?fn:pn}catch{return pn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return fn;mn||=new DOMParser;let r=mn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):fn}catch{return fn}}}connectedCallback(){super.connectedCallback(),cn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),ln(this)}async getIconSource(){let e=un(this.library),t=this.family||dn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?un(this.library):void 0;if(!e){this.svg=null;return}let r=hn.get(e);r||(r=this.resolveIcon(e,n),hn.set(e,r));let i=await r;if(i===pn&&hn.delete(e),e===(await this.getIconSource()).url){if(Rt(i))this.svg=i;else switch(i){case pn:case fn:this.svg=null,this.dispatchEvent(new Ut);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Wt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=un(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ne`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=Gt,h([vt()],y.prototype,`svg`,2),h([g({reflect:!0})],y.prototype,`name`,2),h([g({reflect:!0})],y.prototype,`family`,2),h([g({reflect:!0})],y.prototype,`variant`,2),h([g({reflect:!0})],y.prototype,`canvas`,2),h([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),h([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),h([g()],y.prototype,`src`,2),h([g()],y.prototype,`label`,2),h([g({reflect:!0})],y.prototype,`library`,2),h([g({type:Number,reflect:!0})],y.prototype,`rotate`,2),h([g({type:String,reflect:!0})],y.prototype,`flip`,2),h([g({type:String,reflect:!0})],y.prototype,`animation`,2),h([st(`label`)],y.prototype,`handleLabelChange`,1),h([st([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=h([ht(`wa-icon`)],y);var gn=/* @__PURE__ */ t({default:()=>_}),_n=/* @__PURE__ */ t({default:()=>v}),vn=c`
  :host {
    --height: var(--wa-form-control-toggle-size);
    --width: calc(var(--height) * 1.75);
    --thumb-size: 0.75em;

    display: inline-flex;
    line-height: var(--wa-form-control-value-line-height);
  }

  label {
    position: relative;
    display: flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch {
    flex: 0 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--wa-form-control-background-color);
    border-color: var(--wa-form-control-border-color);
    border-radius: var(--height);
    border-style: var(--wa-form-control-border-style);
    border-width: var(--wa-form-control-border-width);
    transition-property: translate, background, border-color, box-shadow;
    transition-duration: var(--wa-transition-normal);
    transition-timing-function: var(--wa-transition-easing);
  }

  :host([did-ssr]:not(:defined)) .switch {
    transition-property: unset;
    transition-duration: unset;
    transition-timing-function: unset;
  }

  .switch .thumb {
    aspect-ratio: 1 / 1;
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--wa-form-control-border-color);
    border-radius: 50%;
    translate: calc((var(--width) - var(--height)) / -2);
    transition: inherit;
  }
  .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / 2);
  }

  .input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  label:not(.disabled) .input:focus-visible ~ [part~='control'] {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .checked .switch {
    background-color: var(--wa-form-control-activated-color);
    border-color: var(--wa-form-control-activated-color);
  }

  .checked .switch .thumb {
    background-color: var(--wa-color-surface-default);
    translate: calc((var(--width) - var(--height)) / 2);
  }
  .checked .switch .thumb:dir(rtl) {
    translate: calc((var(--width) - var(--height)) / -2);
  }

  /* Disabled */
  label:has(> :disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  [part~='label'] {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) [part~='label']::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    :checked:enabled + .switch:hover .thumb,
    :checked + .switch .thumb {
      background-color: ButtonText;
    }
  }
`,yn=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});const bn=/* @__PURE__ */ new Set,xn=/* @__PURE__ */ new Map;let Sn,Cn=`ltr`,wn=`en`;const Tn=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Tn){let e=new MutationObserver(Dn);Cn=document.documentElement.dir||`ltr`,wn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function En(...e){e.map(e=>{let t=e.$code.toLowerCase();xn.has(t)?xn.set(t,Object.assign(Object.assign({},xn.get(t)),e)):xn.set(t,e),Sn||=e}),Dn()}function Dn(){Tn&&(Cn=document.documentElement.dir||`ltr`,wn=document.documentElement.lang||navigator.language),[...bn.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var On=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){bn.add(this.host)}hostDisconnected(){bn.delete(this.host)}dir(){return`${this.host.dir||Cn}`.toLowerCase()}lang(){let e=`${this.host.lang||wn}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Sn?Sn.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=xn.get(`${n}-${r}`),a=xn.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Sn&&Sn[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Sn&&Sn[e])i=Sn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},kn={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;En(kn);var An=kn,jn=class extends On{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};En(An);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends Ft{constructor(){super(...arguments),this.hasSlotController=new at(this,`hint`),this.localize=new jn(this),this.title=``,this.name=null,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``,this.withHint=!1}static get validators(){return[...super.validators,yn()]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){it(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleKeyDown(e){let t=this.localize.dir()===`rtl`;e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleValueOrCheckedChange()}):(this.setValue(this.checked?this.value:null,this._value),this.updateValidity())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set(`checked`,this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){this.checked?this.internals.setFormValue(e??`on`,t):this.internals.setFormValue(null,null)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let e=this.hasSlotController.test(`hint`,`withHint`),t=this.hint?!0:!!e,n=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,r=this.didSSR&&!this.hasUpdated?null:Ht(this.checked);return Ne`
      <label
        part="base switch"
        class=${At({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${It(this.name)}
          value=${It(this.value)}
          .checked=${It(r)}
          ?checked=${n}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked?`true`:`false`}
          aria-describedby="hint"
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch">
          <span part="thumb" class="thumb"></span>
        </span>

        <slot part="label" class="label"></slot>
      </label>

      <slot
        id="hint"
        name="hint"
        part="hint"
        class=${At({"has-slotted":t})}
        aria-hidden=${t?`false`:`true`}
        >${this.hint}</slot
      >
    `}};b.shadowRootOptions={...Ft.shadowRootOptions,delegatesFocus:!0},b.css=[tt,ot,vn],h([bt(`input[type="checkbox"]`)],b.prototype,`input`,2),h([g()],b.prototype,`title`,2),h([g({reflect:!0})],b.prototype,`name`,2),h([g({reflect:!0})],b.prototype,`value`,1),h([g({reflect:!0})],b.prototype,`size`,2),h([st(`size`)],b.prototype,`handleSizeChange`,1),h([g({type:Boolean})],b.prototype,`disabled`,2),h([g({type:Boolean,attribute:!1})],b.prototype,`checked`,1),h([g({type:Boolean,attribute:`checked`,reflect:!0})],b.prototype,`defaultChecked`,2),h([g({type:Boolean,reflect:!0})],b.prototype,`required`,2),h([g({attribute:`hint`})],b.prototype,`hint`,2),h([g({attribute:`with-hint`,type:Boolean})],b.prototype,`withHint`,2),h([st([`checked`,`defaultChecked`])],b.prototype,`handleStateChange`,1),h([st(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),b=h([ht(`wa-switch`)],b),b.disableWarning?.(`change-in-update`);var Mn=/* @__PURE__ */ t({default:()=>b}),x
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function Nn(e){this.c=e}x=Nn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function S(e,t){this.l=e,this.h=t}x=S.prototype,x.toString=(function(){return Za(this.l,this.h)});function Pn(e){switch(typeof e){case`string`:return Cd.l();case`number`:return Yn(e)?e<<24>>24===e?ru.l():e<<16>>16===e?hu.l():gd.l():Xn(e)?hd.l():md.l();case`boolean`:return Sl.l();case`undefined`:return Wa.l();default:return e instanceof S?yd.l():e instanceof Nn?Tl.l():e&&e.$classData?e.$classData.l():null}}function Fn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Yn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Xn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof S?`java.lang.Long`:e instanceof Nn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hs()}}function In(e,t){switch(typeof e){case`string`:return Sd(e,t);case`number`:return fd(e,t);case`boolean`:return bl(e,t);case`undefined`:return Va(e,t);default:return e&&e.$classData||e===null?e.f(t):e instanceof S?_d(e.l,e.h,t):e instanceof Nn?wl(e.c,t):tr.prototype.f.call(e,t)}}function Ln(e){switch(typeof e){case`string`:return xd(e);case`number`:return pd(e);case`boolean`:return xl(e);case`undefined`:return Ha(e);default:return e&&e.$classData||e===null?e.j():e instanceof S?vd(e.l,e.h):e instanceof Nn?Cl(e.c):tr.prototype.j.call(e)}}function Rn(e){return e===void 0?`undefined`:e.toString()}function zn(e){if(e===0)throw new nu(`/ by zero`);return e}function Bn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Vn(e){return String.fromCharCode(e)}var Hn=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Un(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Wn=0,Gn=/* @__PURE__ */ new WeakMap;function Kn(e){switch(typeof e){case`string`:return xd(e);case`number`:return pd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:xd(n);default:if(e===null)return 0;var r=Gn.get(e);return r===void 0&&(r=Wn+1|0,Wn=r,Gn.set(e,r)),r}}function qn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Zn(e){return new Nn(e)}Zn(0);function C(e,t){return new S(e,t)}var Qn=C(0,0);function $n(e){return e===null?0:e.c}function er(e){return e===null?Qn:e}function tr(){}x=tr.prototype,x.constructor=tr;function w(){}w.prototype=x,x.j=(function(){return Kn(this)}),x.f=(function(e){return this===e}),x.o=(function(){var e=this.j();return Fn(this)+`@`+(e>>>0).toString(16)}),x.toString=(function(){return this.o()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=T.prototype=new w,x.constructor=T,x.a0=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),x.a2=(function(){return new T(this.a.slice())});function nr(){}nr.prototype=x;function rr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=rr.prototype=new w,x.constructor=rr,x.a0=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),x.a2=(function(){return new rr(this.a.slice())});function ir(e){this.a=typeof e==`number`?new Uint16Array(e):e}x=ir.prototype=new w,x.constructor=ir,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new ir(this.a.slice())});function ar(e){this.a=typeof e==`number`?new Int8Array(e):e}x=ar.prototype=new w,x.constructor=ar,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new ar(this.a.slice())});function or(e){this.a=typeof e==`number`?new Int16Array(e):e}x=or.prototype=new w,x.constructor=or,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new or(this.a.slice())});function sr(e){this.a=typeof e==`number`?new Int32Array(e):e}x=sr.prototype=new w,x.constructor=sr,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new sr(this.a.slice())});function cr(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}x=cr.prototype=new w,x.constructor=cr,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),x.a2=(function(){return new cr(this.a.slice())});function lr(e){this.a=typeof e==`number`?new Float32Array(e):e}x=lr.prototype=new w,x.constructor=lr,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new lr(this.a.slice())});function ur(e){this.a=typeof e==`number`?new Float64Array(e):e}x=ur.prototype=new w,x.constructor=ur,x.a0=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.a2=(function(){return new ur(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=E.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i,t===`J`)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new nr;n.constructor=t,n.a0=(function(e,t,n,r){Un(this.a,e,t.a,n,r)}),n.a2=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={r:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===D});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new E().a(this),this.A}),x.l=(function(){return this.L||=new Fc(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===dr)throw au(new ou);return new(this.r()).C(e)});var D=new E;D.n={},D.E=`Ljava.lang.Object;`,D.F=(e=>!e.X),D.N=`java.lang.Object`,D.I=(e=>e!==null),D.A=new E().y(D,T,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),tr.prototype.$classData=D;var dr=new E().p(void 0,`V`,`void`,void 0,void 0),fr=new E().p(!1,`Z`,`boolean`,rr,void 0),pr=new E().p(0,`C`,`char`,ir,Uint16Array),mr=new E().p(0,`B`,`byte`,ar,Int8Array),hr=new E().p(0,`S`,`short`,or,Int16Array),gr=new E().p(0,`I`,`int`,sr,Int32Array),_r=new E().p(Qn,`J`,`long`,cr,Int32Array),vr=new E().p(0,`F`,`float`,lr,Float32Array),yr=new E().p(0,`D`,`double`,ur,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function br(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function xr(e,t){return new sr(br(e,t,-1))}function Sr(e){return Pn(e).cP()+`@`+Kn(e)}function Cr(e){var t=e.d1;return t===void 0?Sr(e):t}function wr(){Tr=this,Er().hp(new G((e=>void 0)),go().e7,!0)}x=wr.prototype=new w,x.constructor=wr,x.hp=(function(e,t,n){return new pl(e,n,t,this)}),new E().i(wr,`com.raquo.airstream.core.Observer$`,{br:1});var Tr;function Er(){return Tr||=new wr,Tr}function Dr(e){this.cf=null,this.d2=null,this.cg=0,this.cf=e,this.d2=void 0;var t=Ur().bD();this.cg=t===void 0?1:1+t.cg|0,jr().bI===-1||this.cg>jr().bI?mc().bG(new ud(this,jr().bI)):Fr().T?Fr().aI.push(this)|0:Ur().cI(this)}x=Dr.prototype=new w,x.constructor=Dr;var Or=new E().i(Dr,`com.raquo.airstream.core.Transaction`,{bu:1});function kr(){this.bI=0,this.d3=null,Ar=this,this.bI=1e3,this.d3=new G((e=>{throw B(new V,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=kr.prototype=new w,x.constructor=kr,x.eL=(function(e){try{e.cf.b(e);var t=e.d2;if(t!==void 0)for(;t.hu();)t.hr().hv(e)}catch(e){var n=e instanceof Ks?e:new J(e);mc().bG(n)}}),new E().i(kr,`com.raquo.airstream.core.Transaction$`,{bv:1});var Ar;function jr(){return Ar||=new kr,Ar}function Mr(e){e.bJ.length|0?new Dr(new G((t=>{for(;(e.bJ.length|0)>0;){var n=e.bJ.shift();try{n.b(t)}catch(e){var r=e instanceof Ks?e:new J(e);mc().bG(r)}}for(;(e.aI.length|0)>0;){var i=e.aI.shift();Ur().cI(i)}}))):(e.aI.length|0)>0&&new Dr(new G((t=>{for(;(e.aI.length|0)>0;)Ur().cI(e.aI.shift())})))}function Nr(){this.T=!1,this.bJ=null,this.aI=null,Pr=this,this.T=!1,this.bJ=ci().aO(P().aH(new(M.r()).C([]))),this.aI=ci().aO(P().aH(new(Or.r()).C([])))}x=Nr.prototype=new w,x.constructor=Nr,new E().i(Nr,`com.raquo.airstream.core.Transaction$onStart$`,{bw:1});var Pr;function Fr(){return Pr||=new Nr,Pr}function Ir(e,t){return e.aJ.get(t)}function Lr(e,t){e.bK.unshift(t)}function Rr(e){return e.bK.shift()}function zr(e,t,n){var r=Ir(e,t),i=r===void 0,a=r===void 0?ci().aO(P().aH(new(Or.r()).C([]))):r;a.push(n),i&&e.aJ.set(t,a)}function Br(e,t){var n=Ir(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aJ.delete(t),i}}function Vr(){this.bK=null,this.aJ=null,Hr=this,this.bK=ci().aO(P().aH(new(Or.r()).C([]))),this.aJ=/* @__PURE__ */ new Map}x=Vr.prototype=new w,x.constructor=Vr,x.cI=(function(e){var t=this.bD();t===void 0?(Lr(this,e),jr().eL(e),this.g6(e)):zr(this,t,e)}),x.g6=(function(e){for(var t=e;;){var n=this.bD(),r=t;if(!(n!==void 0&&N().H(r,n)))throw B(new V,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gW(t),t.cf=jr().d3;var i=this.bD();if(N().H(i,void 0)){if((this.aJ.size|0)>0){var a=new cc(0);throw this.aJ.forEach((e=>((t,n)=>{e.bq=e.bq+(t.length|0)|0}))(a)),B(new V,`Transaction queue error: Stack cleared, but a total of `+a.bq+` children for `+(this.aJ.size|0)+` transactions remain. This is a bug in Airstream.`)}return}jr().eL(i),t=i}}),x.gW=(function(e){for(var t=e;;){var n=Br(this,t);if(N().H(n,void 0)){Rr(this);var r=this.bD();if(!N().H(r,void 0))t=r;else return}else{Lr(this,n);return}}}),x.bD=(function(){return this.bK[0]}),new E().i(Vr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bx:1});var Hr;function Ur(){return Hr||=new Vr,Hr}function Wr(e,t){var n=e.ah.indexOf(t)|0;if(n!==-1)e.ah.splice(n,1),e.B.c()||t.f8();else throw B(new V,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Gr(e){for(;(e.bL.length|0)>0;)Wr(e,e.bL.shift())}function Kr(e){this.d4=null,this.ah=null,this.aW=!1,this.bL=null,this.B=null,this.aX=0,this.d4=e,this.ah=ci().aO(P().aH(new(Jr.r()).C([]))),this.aW=!0,this.bL=ci().aO(P().aH(new(Jr.r()).C([]))),this.B=K(),this.aX=0}x=Kr.prototype=new w,x.constructor=Kr,x.eE=(function(){if(this.B.c()){var e=Fr(),t=(()=>{var e=new ls(this.d4);this.B=new Ed(e),this.aW=!1,this.aX=0;for(var t=0,n=this.ah.length|0;t<n;){var r=t+this.aX|0;this.ah[r].f7(e),t=1+t|0}Gr(this),this.aW=!0,this.aX=0});if(Fr(),e.T)t();else{e.T=!0;try{t()}finally{e.T=!1,Mr(e)}}}else throw B(new V,`Can not activate `+this+`: it is already active`)}),x.fY=(function(){if(this.B.c())throw B(new V,`Can not deactivate DynamicOwner: it is not active`);this.aW=!1;for(var e=this.ah,t=0,n=e.length|0;t<n;)e[t].f8(),t=1+t|0;Gr(this);var r=this.B;r.c()||r.t().gH(),Gr(this),this.aW=!0,this.B=K()}),x.fH=(function(e,t){t?(this.aX=1+this.aX|0,this.ah.unshift(e)):this.ah.push(e);var n=this.B;if(!n.c()){var r=n.t();e.f7(r)}}),x.h2=(function(e){this.aW?Wr(this,e):this.bL.push(e)}),new E().i(Kr,`com.raquo.airstream.ownership.DynamicOwner`,{by:1});function qr(e,t,n){this.bM=null,this.d5=null,this.bN=null,this.bM=e,this.d5=t,this.bN=K(),e.fH(this,n)}x=qr.prototype=new w,x.constructor=qr,x.c9=(function(){this.bM.h2(this)}),x.f7=(function(e){var t=Fr(),n=(()=>{this.bN=this.d5.b(e)});if(Fr(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,Mr(t)}}}),x.f8=(function(){var e=this.bN;e.c()||(e.t().c9(),this.bN=K())});var Jr=new E().i(qr,`com.raquo.airstream.ownership.DynamicSubscription`,{bz:1});function Yr(){}x=Yr.prototype=new w,x.constructor=Yr,x.hm=(function(e,t,n){return new qr(e,new G((e=>new Ed(t.b(e)))),n)}),x.he=(function(e,t,n){return new qr(e,new G((e=>(t.b(e),K()))),n)}),new E().i(Yr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bA:1});var Xr;function Zr(){return Xr||=new Yr,Xr}function Qr(e){e.aY=ci().aO(P().aH(new(ii.r()).C([])))}function $r(e){for(var t=e.aY,n=0,r=t.length|0;n<r;)ni(t[n]),n=1+n|0;e.aY.length=0}function ei(e,t){var n=e.aY.indexOf(t)|0;if(n!==-1)e.aY.splice(n,1);else throw B(new V,`Can not remove Subscription from Owner: subscription not found.`)}function ti(e,t){e.aY.push(t)}function ni(e){if(!e.ci)e.d7.W(),e.ci=!0;else throw B(new V,`Can not kill Subscription: it was already killed.`)}function ri(e,t){this.d8=null,this.d7=null,this.ci=!1,this.d8=e,this.d7=t,this.ci=!1,e.gV(this)}x=ri.prototype=new w,x.constructor=ri,x.c9=(function(){ni(this),ei(this.d8,this)});var ii=new E().i(ri,`com.raquo.airstream.ownership.Subscription`,{bD:1});function ai(e,t){this.d9=null,this.da=null,this.ai=null,this.aK=!1,this.d9=e,this.da=t,this.ai=K(),this.aK=!1}x=ai.prototype=new w,x.constructor=ai,x.gD=(function(){var e=this.ai;return!e.c()&&!e.t().bM.B.c()}),x.h6=(function(e){if(this.aK)throw B(new V,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ai;if(t.c())var n=!1;else var r=t.t().bM,n=e===null?r===null:e===r;if(!n){this.gD()&&!e.B.c()&&(this.aK=!0);var i=this.ai;i.c()||(i.t().c9(),this.ai=K());var a=Zr().hm(e,new G((e=>(this.aK||this.d9.W(),new ri(e,new Ul((()=>{this.aK||this.da.W()})))))),!1);this.ai=new Ed(a),this.aK=!1}}),x.fT=(function(){if(this.aK)throw B(new V,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ai;e.c()||e.t().c9(),this.ai=K()}),new E().i(ai,`com.raquo.airstream.ownership.TransferableSubscription`,{bE:1});function oi(){}x=oi.prototype=new w,x.constructor=oi,x.aO=(function(e){return[...ns().hk(e)]}),new E().i(oi,`com.raquo.ew.JsArray$`,{bF:1});var si;function ci(){return si||=new oi,si}function li(){}x=li.prototype=new w,x.constructor=li,x.gj=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(li,`com.raquo.ew.JsArray$RichJsArray$`,{bG:1});var ui;function di(){return ui||=new li,ui}function fi(){this.db=null,pi=this,document.createElement(`template`),this.fW(U().u.hf().hg()),this.db=/* @__PURE__ */ RegExp(` `,`g`)}x=fi.prototype=new w,x.constructor=fi,x.fL=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Ks?e:new J(e);if(n instanceof J&&n.U instanceof DOMException)return!1;throw n instanceof J?n.U:n}}),x.gE=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().H(t,r))return!0;n=r}}),x.fV=(function(e){return document.createElement(e.cS())}),x.gq=(function(e,t){var n=this.gr(e,t);return n===void 0?void 0:t.b8.c5(n)}),x.gr=(function(e,t){var n=e.ak.getAttributeNS(null,t.aL);return n===null?void 0:n}),x.fe=(function(e,t,n){this.h5(e,t,t.b8.c8(n))}),x.h5=(function(e,t,n){n===null?this.h1(e,t):e.ak.setAttribute(t.aL,n)}),x.h1=(function(e,t){e.ak.removeAttribute(t.aL)}),x.fW=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dz)}),x.gu=(function(e,t){var n=this.gv(e,t);return n===void 0?void 0:t.cm.c5(n)}),x.gv=(function(e,t){var n=e.cU(),r=t.bR,i=n.getAttributeNS(r.c()?null:r.t(),t.cn);return i===null?void 0:i}),x.h7=(function(e,t,n){this.h8(e,t,t.cm.c8(n))}),x.h8=(function(e,t,n){if(n===null)this.h3(e,t);else{var r=t.bR;if(r.c())e.cU().setAttribute(t.bQ,n);else{var i=r.t();e.cU().setAttributeNS(i,t.bQ,n)}}}),x.h3=(function(e,t){var n=e.cU(),r=t.bR;n.removeAttributeNS(r.c()?null:r.t(),t.cn)}),x.fX=(function(e){return document.createTextNode(e)}),x.g0=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Q(this.fZ(r),n);r=i,n=a}}),x.fZ=(function(e){if(e instanceof HTMLElement){var t=e.id;if(Oo(),t!==``)var n=`#`+t;else var r=e.className,n=(Oo(),r===``?``:`.`+r.replace(this.db,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new E().i(fi,`com.raquo.laminar.DomApi$`,{bH:1});var pi;function mi(){return pi||=new fi,pi}function hi(e,t,n){this.ck=null,this.dc=null,this.cj=null,this.ck=e,this.dc=t,this.cj=n}x=hi.prototype=new w,x.constructor=hi,x.af=(function(e){this.ck===null?this.cj===null?yo().gk(this.dc,e):di().gj(this.cj,il().gn(e)):this.ck.af(e)}),new E().i(hi,`com.raquo.laminar.Seq`,{bI:1});function gi(){_i=this,$()}x=gi.prototype=new w,x.constructor=gi,new E().i(gi,`com.raquo.laminar.Seq$`,{bJ:1});var _i;function vi(){return _i||=new gi,_i}function yi(e){Er(),mc()}function bi(e){e.fk=Hi()}function xi(e){Si(e,new G((e=>{e.dm.ak.focus()})))}function Si(e,t){return new vs(new G((e=>{var n=new sc(!e.aZ.B.c()),r=new G((e=>{n.bZ?n.bZ=!1:t.b(e)}));Zr().he(e.aZ,new G((e=>(t=>{r.b(new zi(e,t))}))(e)),!1)})),Hi())}function Ci(){this.aj=null,this.dl=null,wi=this,this.aj=new ds(Ti()),new ds(Ti()),new ds(Ti()),this.dl=new us}x=Ci.prototype=new w,x.constructor=Ci,new E().i(Ci,`com.raquo.laminar.codecs.package$`,{bR:1});var wi;function Ti(){return wi||=new Ci,wi}function Ei(e){e.fl=Di(e,`class`,` `)}function Di(e,t,n){var r=ps(new ms,t,Ti().aj);return new fs(r.aL,new G((e=>{var t=mi().gq(e,r);return t===void 0?``:t})),new Wl(((e,t)=>{mi().fe(e,r,t)})),n)}function Oi(e){e.fj=ki(e,`class`,` `)}function ki(e,t,n){var r=new gs(t,Ti().aj,K());return new fs(r.bQ,new G((e=>{var t=mi().gu(e,r);return t===void 0?``:t})),new Wl(((e,t)=>{mi().h7(e,r,t)})),n)}function Ai(e){this.bO=null,this.bO=e}x=Ai.prototype=new w,x.constructor=Ai,x.f9=(function(e,t){try{this.bO.cJ(e,t)}catch(e){var n=e instanceof Ks?e:new J(e);mc().bG(n)}}),x.fU=(function(e){return new Ai(new Wl(((t,n)=>{this.bO.cJ(t,n),e.bO.cJ(t,n)})))}),x.fM=(function(e){return e===void 0?this:e.fU(this)}),new E().i(Ai,`com.raquo.laminar.inserters.InserterHooks`,{c5:1});function ji(){}x=ji.prototype=new w,x.constructor=ji,x.f6=(function(e,t){return new Kl(e,void 0)}),new E().i(ji,`com.raquo.laminar.inserters.StaticChildInserter$`,{c7:1});var Mi;function Ni(){return Mi||=new ji,Mi}function Pi(){}x=Pi.prototype=new w,x.constructor=Pi;function Fi(){}Fi.prototype=x;function Ii(){this.fm=null,this.fn=null,this.fo=null,this.fp=null,this.fm=`http://www.w3.org/2000/svg`,this.fn=`http://www.w3.org/1999/xlink`,this.fo=`http://www.w3.org/XML/1998/namespace`,this.fp=`http://www.w3.org/2000/xmlns/`}x=Ii.prototype=new w,x.constructor=Ii,x.gP=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new xu(e)}}),new E().i(Ii,`com.raquo.laminar.keys.SvgAttr$`,{cb:1});var Li;function Ri(){return Li||=new Ii,Li}function zi(e,t){this.dm=null,this.dm=e}x=zi.prototype=new w,x.constructor=zi,new E().i(zi,`com.raquo.laminar.lifecycle.MountContext`,{cc:1});var O=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{U:1});function Bi(){this.fq=null,Vi=this,this.fq=new _s}x=Bi.prototype=new w,x.constructor=Bi,new E().i(Bi,`com.raquo.laminar.modifiers.Modifier$`,{ce:1});var Vi;function Hi(){return Vi||=new Bi,Vi}function Ui(){this.co=null,Wi=this,this.co=new ys}x=Ui.prototype=new w,x.constructor=Ui,new E().i(Ui,`com.raquo.laminar.modifiers.RenderableNode$`,{ci:1});var Wi;function Gi(){return Wi||=new Ui,Wi}function Ki(){this.C=null,qi=this,this.C=new Cs(new G((e=>e)),k()),new Cs(new G((e=>``+(e|0))),k()),new Cs(new G((e=>``+ +e)),k()),new Cs(new G((e=>``+!!e)),k()),new Cs(new G((e=>e.hj())),k())}x=Ki.prototype=new w,x.constructor=Ki,new E().i(Ki,`com.raquo.laminar.modifiers.RenderableText$`,{cn:1});var qi;function k(){return qi||=new Ki,qi}function Ji(){}x=Ji.prototype=new w,x.constructor=Ji,x.c1=(function(e,t,n){var r=new Ed(e);t.fi(r),n!==void 0&&n.f9(e,t);var i=mi().fL(e.aT(),t.aT());return i&&t.ff(r),i}),new E().i(Ji,`com.raquo.laminar.nodes.ParentNode$`,{cq:1});var Yi;function Xi(){return Yi||=new Ji,Yi}function Zi(e){this.dw=null,this.dw=new Ai(new Wl(((t,n)=>{matchResult1:{var r=n.aT();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=mc(),a=r.textContent,o=t.aT().tagName;i.bG(B(new V,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}x=Zi.prototype=new w,x.constructor=Zi,x.eI=(function(e){return e.cR(new G((e=>e.ho(this.dw))))}),new E().i(Zi,`com.raquo.laminar.nodes.Slot`,{cu:1});function Qi(){}x=Qi.prototype=new w,x.constructor=Qi,x.fJ=(function(){ea().gd(),ea().ge(),ea().gf(),ea().gg()}),x.gd=(function(){var e=document.querySelector(`#example1`);po().c2(e).c()||(U(),new _c(e,wc().y(new X(I().l(new(M.r()).C([new H((e=>e.cQ().q(`Interests`))),new H((e=>e.gy().q(`Choose as many as you like.`)))]))),new X(I().l(new(O.r()).C([xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`interests`))),new H((e=>e.cY().q(`design`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Design`,k().C)])))),xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`interests`))),new H((e=>e.cY().q(`development`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Development`,k().C)])))),xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`interests`))),new H((e=>e.cY().q(`writing`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Writing`,k().C)]))))]))))))}),x.ge=(function(){var e=document.querySelector(`#example2`);po().c2(e).c()||(U(),new _c(e,wc().y(new X(I().l(new(M.r()).C([new H((e=>e.cQ().q(`Days`))),new H((e=>e.gT().gA()))]))),new X(I().l(new(O.r()).C([xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`monday`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Monday`,k().C)])))),xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`wednesday`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Wednesday`,k().C)])))),xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`friday`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Friday`,k().C)]))))]))))))}),x.gf=(function(){var e=document.querySelector(`#example3`);po().c2(e).c()||(U(),new _c(e,wc().y(new X(I().l(new(M.r()).C([new H((e=>e.cQ().q(`Notifications`))),new H((e=>e.hb().gI()))]))),new X(I().l(new(O.r()).C([Nc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`email`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Email`,k().C)])))),Nc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`push`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Push notifications`,k().C)]))))]))))))}),x.gg=(function(){var e=document.querySelector(`#example4`);po().c2(e).c()||(U(),new _c(e,wc().y(new X(I().l(new(M.r()).C([new H((e=>hc(U().u,ia().gJ().eI(new X(I().l(new(ql.r()).C([(U(),Ni().f6(U().u.hd().cK(new X(I().l(new(O.r()).C([z(U().u,`Available features`,k().C)])))),Gi().co))])))),ro().cA,Ss()))),new H((e=>hc(U().u,ia().gz().eI(new X(I().l(new(ql.r()).C([(U(),Ni().f6(U().u.hc().cK(new X(I().l(new(O.r()).C([z(U().u,`Some features require an upgraded plan.`,k().C)])))),Gi().co))])))),ro().cA,Ss())))]))),new X(I().l(new(O.r()).C([xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`search`)))]))),new X(I().l(new(O.r()).C([z(U().u,`Search`,k().C)])))),xc().y(new X(I().l(new(M.r()).C([new H((e=>e.Y().q(`export`))),new H((e=>e.g3().q(!0)))]))),new X(I().l(new(O.r()).C([z(U().u,`Export`,k().C)]))))]))))))}),new E().i(Qi,`examples.checkboxGroup.Main$package$`,{cy:1});var $i;function ea(){return $i||=new Qi,$i}function ta(e){try{ea().fJ()}catch(e){throw e}}function na(){this.dQ=null,this.dR=!1,this.dO=null,this.dP=!1}x=na.prototype=new w,x.constructor=na,x.gJ=(function(){return this.dR||=(this.dQ=new Zi(`label`),!0),this.dQ}),x.gz=(function(){return this.dP||=(this.dO=new Zi(`hint`),!0),this.dO}),new E().i(na,`io.github.nguyenyou.webawesome.laminar.CheckboxGroup$slots$`,{cB:1});var ra;function ia(){return ra||=new na,ra}function aa(e,t){for(var n=A().Z(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=oa(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Vs(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Vs(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var ee=r.length|0,te=new(Hs.r()).C(ee);for(i=0;i<ee;)te.a[i]=r[i],i=1+i|0;return te}function oa(e,t){var n=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().Z(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[sa(e,c[1]),ma(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[sa(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[sa(e,d[1]),`<clinit>`]}function sa(e,t){var n=la(e);if(Ba().cz.call(n,t))var r=la(e)[t];else var r=Ta(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ca(e){if(!((1&e.J)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cw=t,e.J=(1|e.J)<<24>>24}return e.cw}function la(e){return(1&e.J)<<24>>24?e.cw:ca(e)}function ua(e){if(!((2&e.J)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cx=t,e.J=(2|e.J)<<24>>24}return e.cx}function da(e){return(2&e.J)<<24>>24?e.cx:ua(e)}function fa(e){return(4&e.J)<<24>>24||(e.cv=Object.keys(da(e)),e.J=(4|e.J)<<24>>24),e.cv}function pa(e){return(4&e.J)<<24>>24?e.cv:fa(e)}function ma(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function ha(e,t){return t?t.arguments&&t.stack?ga(e,t):t.stack&&t.sourceURL?ya(e,t):t.stack&&t.number?va(e,t):t.stack&&t.fileName?_a(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ba(e,t):xa(e,t):ba(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Sa(e,t):Ca(e,t):t.stack&&!t.fileName?ga(e,t):wa(e,t):[]}function ga(e,t){return(t.stack+`
`).replace(A().Z(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().A(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().A(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().A(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().A(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function _a(e,t){return t.stack.replace(A().A(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().A(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function va(e,t){return t.stack.replace(A().A(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().A(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().A(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ya(e,t){return t.stack.replace(A().A(`\\[native code\\]\\n`,`m`),``).replace(A().A(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().A(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ba(e,t){for(var n=A().A(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function xa(e,t){for(var n=A().A(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Sa(e,t){for(var n=A().Z(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ca(e,t){for(var n=A().Z(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().Z(`<anonymous function: (\\S+)>`),`$1`).replace(A().Z(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function wa(e,t){return[]}function Ta(e,t,n){for(;;)if(t<(pa(e).length|0)){var r=pa(e)[t];if(n.startsWith(r))return``+da(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ea(){this.cw=null,this.cx=null,this.cv=null,this.J=0}x=Ea.prototype=new w,x.constructor=Ea,x.gh=(function(e){return aa(this,ha(this,e))}),new E().i(Ea,`java.lang.StackTrace$`,{cY:1});var Da;function Oa(){return Da||=new Ea,Da}function ka(){}x=ka.prototype=new w,x.constructor=ka,x.Z=(function(e){return new RegExp(e)}),x.A=(function(e,t){return new RegExp(e,t)}),new E().i(ka,`java.lang.StackTrace$StringRE$`,{cZ:1});var Aa;function A(){return Aa||=new ka,Aa}function ja(){this.dZ=null,this.fr=null,Ma=this,this.dZ=new Qd(!1),this.fr=new Qd(!0)}x=ja.prototype=new w,x.constructor=ja,new E().i(ja,`java.lang.System$Streams$`,{d3:1});var Ma;function Na(){return Ma||=new ja,Ma}function Pa(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Fa(){this.cy=null,this.e0=null,Ia=this,this.cy=Pa(this),this.e0=null}x=Fa.prototype=new w,x.constructor=Fa,x.f1=(function(e,t){if(this.cy!==null){var n=this.cy;return Ba().cz.call(n,e)?n[e]:t}return this.e0.f1(e,t)}),new E().i(Fa,`java.lang.System$SystemProperties$`,{d4:1});var Ia;function La(){return Ia||=new Fa,Ia}function Ra(){this.cz=null,za=this,this.cz=Object.prototype.hasOwnProperty}x=Ra.prototype=new w,x.constructor=Ra,new E().i(Ra,`java.lang.Utils$Cache$`,{d6:1});var za;function Ba(){return za||=new Ra,za}function Va(e,t){return e===t}function Ha(e){return 0}function Ua(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aw)}var Wa=new E().i(0,`java.lang.Void`,{aw:1},(e=>e===void 0));function Ga(e,t){throw iu(new ou,`argument type mismatch`)}function Ka(){}x=Ka.prototype=new w,x.constructor=Ka,x.X=(function(e){return e instanceof T||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr?e.a.length:e instanceof cr?e.a.length>>>1|0:(e instanceof lr||e instanceof ur||Ga(this,e),e.a.length)}),new E().i(Ka,`java.lang.reflect.Array$`,{d7:1});var qa;function Ja(){return qa||=new Ka,qa}function Ya(){}x=Ya.prototype=new w,x.constructor=Ya,x.fR=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),x.eR=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),x.eQ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eS=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.eT=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),new E().i(Ya,`java.util.Arrays$`,{d8:1});var Xa;function j(){return Xa||=new Ya,Xa}function Za(e,t){return eo().fh(e,t)}function Qa(){}x=Qa.prototype=new w,x.constructor=Qa,x.fh=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),x.f0=(function(e){if(e<-0x8000000000000000)return C(0,-2147483648);if(e>=0x8000000000000000)return C(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return C(t,e<0&&t!==0?n-1|0:n)}),x.g4=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,ie=p>>>16|0,ae=Math.imul(te,re),oe=Math.imul(ne,re),se=Math.imul(te,ie),ce=ae+((oe+se|0)<<16)|0,le=(ae>>>16|0)+se|0;if(((s-((((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,ie)|0)+(le>>>16|0)|0)+(((65535&le)+oe|0)>>>16|0)|0)|0)-((o-ce|0)>>>0>o>>>0|0)|0)<0)var ue=p-1|0,de=(ee-1|0)+(ue!==-1|0)|0,fe=ue,pe=de;else var fe=p,pe=ee}else var me=(s>>>0)/(zn(u)>>>0)|0,fe=(4294967296*(s-Math.imul(u,me)|0)+(o>>>0))/u|0,pe=me;if((t^r)>=0)return C(fe,pe);var he=-fe|0;return C(he,(-pe|0)-(he!==0|0)|0)}),x.g5=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(zn(n)>>>0)|0;return C((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0)|0)-((e-te|0)>>>0>e>>>0|0)|0)<0){var re=o-1|0;return C(re,(s-1|0)+(re!==-1|0)|0)}return C(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?C(0,0):C(1,0)}),x.gZ=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,ee=23283064365386963e-26*f|0,te=65535&u,ne=u>>>16|0,re=65535&p,ie=p>>>16|0,ae=Math.imul(te,re),oe=Math.imul(ne,re),se=Math.imul(te,ie),ce=ae+((oe+se|0)<<16)|0,le=(ae>>>16|0)+se|0,ue=(((Math.imul(u,ee)+Math.imul(d,p)|0)+Math.imul(ne,ie)|0)+(le>>>16|0)|0)+(((65535&le)+oe|0)>>>16|0)|0,de=o-ce|0,fe=(s-ue|0)-(de>>>0>o>>>0|0)|0;if(fe<0)var pe=de+u|0,me=(fe+d|0)+(pe>>>0<de>>>0|0)|0,he=pe,ge=me;else var he=de,ge=fe}else var _e=(4294967296*((s>>>0)%(zn(u)>>>0)|0)+(o>>>0))/u|0,he=o-Math.imul(u,_e)|0,ge=0;if(t<0){var ve=-he|0;return C(ve,(-ge|0)-(ve!==0|0)|0)}return C(he,ge)}),x.h0=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(zn(n)>>>0)|0)+(e>>>0))/n|0;return C(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),ee=Math.imul(c,d),te=f+((p+ee|0)<<16)|0,ne=(f>>>16|0)+ee|0,re=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(ne>>>16|0)|0)+(((65535&ne)+p|0)>>>16|0)|0,ie=e-te|0,ae=(t-re|0)-(ie>>>0>e>>>0|0)|0;if(ae<0){var oe=ie+n|0;return C(oe,(ae+r|0)+(oe>>>0<ie>>>0|0)|0)}return C(ie,ae)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return C(e,t);var se=e-n|0;return C(se,(t-r|0)-(se>>>0>e>>>0|0)|0)}),new E().i(Qa,`org.scalajs.linker.runtime.RuntimeLong$`,{db:1});var $a;function eo(){return $a||=new Qa,$a}function to(){this.cA=null,no=this,this.cA=new yu}x=to.prototype=new w,x.constructor=to,new E().i(to,`scala.$less$colon$less$`,{de:1});var no;function ro(){return no||=new to,no}function io(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)P().c3(r,s,P().aQ(t,o)),o=1+o|0,s=1+s|0}function ao(){}x=ao.prototype=new w,x.constructor=ao,x.eV=(function(e,t){var n=e.n();if(n>-1){for(var r=t.cT(n),i=e.d(),a=0;a<n;)P().c3(r,a,i.g()),a=1+a|0;return r}var o=null,s=t.cb(),c=s===pr.l();o=[];for(var l=e.d();l.i();){var u=l.g(),d=c?$n(u):u===null?Lo().cW(s):u;o.push(d)}return Lo().cV(s===dr.l()?Wa.l():s===Uo.l()||s===tl.l()?D.l():s,o)}),x.c4=(function(e,t,n,r,i){var a=Pn(e);a.a1.Z&&Pn(n).a1.R(a.a1)?e.a0(t,n,r,i):io(this,e,t,n,r,i)}),x.eU=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().H(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(ao,`scala.Array$`,{dg:1});var oo;function so(){return oo||=new ao,oo}var M=new E().i(1,`scala.Function1`,{e:1});function co(){}x=co.prototype=new w,x.constructor=co;function lo(){}lo.prototype=x;function uo(){}x=uo.prototype=new w,x.constructor=uo,x.c2=(function(e){return e===null?K():new Ed(e)}),new E().i(uo,`scala.Option$`,{dp:1});var fo;function po(){return fo||=new uo,fo}function mo(){this.e8=null,this.e7=null,ho=this,this.e8=new H((e=>this.e8)),this.e7=new Al}x=mo.prototype=new w,x.constructor=mo,new E().i(mo,`scala.PartialFunction$`,{dq:1});var ho;function go(){return ho||=new mo,ho}function _o(){this.eb=null,vo=this,this.eb=new H((e=>yo().eb))}x=_o.prototype=new w,x.constructor=_o,x.gk=(function(e,t){var n=Ja().X(e),r=0;if(e instanceof T)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.b(C(o,s)),r=1+r|0}else if(e instanceof lr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.b(Zn(e.a[r])),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.b(e.a[r]),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.b(e.a[r]),r=1+r|0;else throw new xu(e)}),new E().i(_o,`scala.collection.ArrayOps$`,{dv:1});var vo;function yo(){return vo||=new _o,vo}function bo(e,t){for(var n=e.d();n.i();)t.b(n.g())}function xo(e,t,n,r){var i=e.d(),a=n;matchResult18:{var o,s=e.n();if(s===-1){var o=Ja().X(t);break matchResult18}var o=s}for(var c=Ja().X(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.i();)P().c3(t,a,i.g()),a=1+a|0;return a-n|0}function So(e,t,n,r){return e.n()===0?``+t+r:e.b6(dp(new fp),t,n,r).G.m}function Co(e,t,n,r,i){var a=t.G;n.length!==0&&(a.m=``+a.m+n);var o=e.d();if(o.i()){var s=o.g();for(a.m=``+a.m+s;o.i();){r.length!==0&&(a.m=``+a.m+r);var c=o.g();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function wo(e,t){if(e.n()>=0){var n=e.n(),r=t.cT(n);return e.aD(r,0,2147483647),r}var i=null,a=t.cb(),o=a===pr.l();i=[];for(var s=e.d();s.i();){var c=s.g(),l=o?$n(c):c===null?Lo().cW(a):c;i.push(l)}return Lo().cV(a===dr.l()?Wa.l():a===Uo.l()||a===tl.l()?D.l():a,i)}function To(e,t){this.ed=null,this.bj=null,this.ed=e,this.bj=t}x=To.prototype=new w,x.constructor=To,x.gx=(function(){return this.ed.W().d()}),new E().i(To,`scala.collection.Iterator$ConcatIteratorCell`,{dE:1});function Eo(){this.ee=null,Do=this,this.ee=new H((e=>this.ee))}x=Eo.prototype=new w,x.constructor=Eo,new E().i(Eo,`scala.collection.StringOps$`,{dK:1});var Do;function Oo(){return Do||=new Eo,Do}function ko(){}x=ko.prototype=new w,x.constructor=ko,x.f3=(function(e,t){return cu(new uu,e+` is out of bounds (min 0, max `+t+`)`)}),new E().i(ko,`scala.collection.generic.CommonErrors$`,{dL:1});var Ao;function jo(){return Ao||=new ko,Ao}function Mo(){this.ei=0,No=this;try{Oo();var e=Rs().gF(La().f1(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.ei=e}x=Mo.prototype=new w,x.constructor=Mo,new E().i(Mo,`scala.collection.immutable.IndexedSeqDefaults$`,{dO:1});var No;function Po(){return No||=new Mo,No}function Fo(){}x=Fo.prototype=new w,x.constructor=Fo,x.cW=(function(e){return e===mr.l()||e===hr.l()||e===pr.l()||e===gr.l()?0:e===_r.l()?C(0,0):e===vr.l()||e===yr.l()?0:e===fr.l()?!1:e===dr.l()?void 0:null}),x.cV=(function(e,t){var n=t.length|0;if(e===pr.l()){for(var r=new ir(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.a1.U(n),o=0;o!==n;)P().c3(a,o,t[o]),o=1+o|0;return a}),new E().i(Fo,`scala.collection.mutable.ArrayBuilder$`,{dW:1});var Io;function Lo(){return Io||=new Fo,Io}function Ro(){}x=Ro.prototype=new w,x.constructor=Ro,x.eK=(function(e,t,n){if(t!==e)throw new _u(n)}),new E().i(Ro,`scala.collection.mutable.MutationTracker$`,{e4:1});var zo;function Bo(){return zo||=new Ro,zo}function Vo(){}x=Vo.prototype=new w,x.constructor=Vo,x.H=(function(e,t){return e===t||(Bs(e)?this.gc(e,t):e instanceof Nn?this.ga(e,t):e===null?t===null:In(e,t))}),x.gc=(function(e,t){if(Bs(t))return this.gb(e,t);if(t instanceof Nn){if(typeof e==`number`)return+e===t.c;if(e instanceof S){var n=er(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:In(e,t)}return e===null?t===null:In(e,t)}),x.gb=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof S){var r=er(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof S){var a=er(e),o=a.l,s=a.h;if(t instanceof S){var c=er(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:In(e,t)}),x.ga=(function(e,t){if(t instanceof Nn)return e.c===t.c;if(Bs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof S){var n=er(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:In(t,e)}return e===null&&t===null}),new E().i(Vo,`scala.runtime.BoxesRunTime$`,{ei:1});var Ho;function N(){return Ho||=new Vo,Ho}var Uo=new E().i(0,`scala.runtime.Null$`,{el:1});function Wo(){}x=Wo.prototype=new w,x.constructor=Wo,x.b7=(function(){throw fu(new mu,`tried to cast away nullability, but value is null`)}),new E().i(Wo,`scala.runtime.Scala3RunTime$`,{em:1});var Go;function Ko(){return Go||=new Wo,Go}function qo(){}x=qo.prototype=new w,x.constructor=qo,x.fI=(function(e){return e===null?Uo.l():Pn(e)}),x.aQ=(function(e,t){if(e instanceof T||e instanceof sr||e instanceof ur)return e.a[t];if(e instanceof cr){var n=e.a,r=t<<1;return C(n[r],n[r+1|0])}if(e instanceof lr)return e.a[t];if(e instanceof ir)return Zn(e.a[t]);if(e instanceof ar||e instanceof or||e instanceof rr)return e.a[t];throw e===null?pu(new mu):new xu(e)}),x.c3=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ur)e.a[t]=+n;else if(e instanceof cr){var r=er(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof lr)e.a[t]=Math.fround(n);else if(e instanceof ir)e.a[t]=$n(n);else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof or)e.a[t]=n|0;else if(e instanceof rr)e.a[t]=!!n;else throw e===null?pu(new mu):new xu(e)}),x.fw=(function(e){return So(e.bE(),e.aG()+`(`,`,`,`)`)}),x.aH=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ld();return uf(),Pd(t)}return new Gf(e)}),new E().i(qo,`scala.runtime.ScalaRunTime$`,{en:1});var Jo;function P(){return Jo||=new qo,Jo}function Yo(){}x=Yo.prototype=new w,x.constructor=Yo,x.k=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.z=(function(e,t){return this.fQ(e^t)}),x.fQ=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.gL=(function(e,t){return t===e>>31?e:e^t}),x.g7=(function(e){var t=Bn(e);if(t===e)return t;var n=eo().f0(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Hn;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),x.s=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.g7(+e);if(e instanceof S){var t=er(e);return this.gL(t.l,t.h)}return Ln(e)}),x.gC=(function(e){throw cu(new uu,``+e)}),new E().i(Yo,`scala.runtime.Statics$`,{ep:1});var Xo;function F(){return Xo||=new Yo,Xo}function Zo(){}x=Zo.prototype=new w,x.constructor=Zo,x.h9=(function(e,t){return setTimeout((()=>{t.W()}),e)}),new E().i(Zo,`scala.scalajs.js.timers.package$`,{ev:1});var Qo;function $o(){return Qo||=new Zo,Qo}function es(){}x=es.prototype=new w,x.constructor=es,x.hk=(function(e){if(e instanceof X)return e.c0;var t=[];return e.af(new H((e=>t.push(e)|0))),t}),new E().i(es,`scala.scalajs.runtime.Compat$`,{eE:1});var ts;function ns(){return ts||=new es,ts}function rs(){}x=rs.prototype=new w,x.constructor=rs,x.l=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new E().i(rs,`scala.scalajs.runtime.package$`,{eG:1});var is;function I(){return is||=new rs,is}function as(){}x=as.prototype=new w,x.constructor=as,x.ha=(function(e){var t=`Illegal command line`+(e.f2()===0?``:e.f2()===1?` after first argument`:` after `+e.f2()+` arguments`)+`: `+e.ht();Ys().gU().gG(t+`
`)}),new E().i(as,`scala.util.CommandLineParser$`,{eH:1});function os(e){this.cG=null,this.cG=e}x=os.prototype=new w,x.constructor=os,x.o=(function(){return`DynamicVariable(`+this.cG+`)`}),new E().i(os,`scala.util.DynamicVariable`,{eJ:1});function ss(){}x=ss.prototype=new w,x.constructor=ss;function cs(){}cs.prototype=x,x.k=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),x.z=(function(e,t){return this.bF(e^t)}),x.bF=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.fb=(function(e,t,n){var r=e.aE();if(r===0)return n?t:xd(e.aG());var i=t;n||(i=this.k(i,xd(e.aG())));for(var a=0;a<r;)i=this.k(i,F().s(e.aF(a))),a=1+a|0;return this.z(i,r)}),x.hl=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.d();o.i();){var s=o.g(),c=F().s(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.k(l,n),l=this.k(l,r),l=this.ca(l,a),this.z(l,i)}),x.gS=(function(e,t){var n=e.d(),r=t;if(!n.i())return this.z(r,0);var i=n.g();if(!n.i())return this.z(this.k(r,F().s(i)),1);var a=n.g(),o=F().s(i);r=this.k(r,o);for(var s=r,c=F().s(a),l=c-o|0,u=2;n.i();){r=this.k(r,c);var d=F().s(n.g());if(l!==(d-c|0)||l===0){for(r=this.k(r,d),u=1+u|0;n.i();)r=this.k(r,F().s(n.g())),u=1+u|0;return this.z(r,u)}c=d,u=1+u|0}return this.bF(this.k(this.k(s,l),c))}),x.r=(function(e,t){var n=t,r=Ja().X(e);switch(r){case 0:return this.z(n,0);case 1:return this.z(this.k(n,F().s(P().aQ(e,0))),1);default:var i=F().s(P().aQ(e,0));n=this.k(n,i);for(var a=n,o=F().s(P().aQ(e,1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=F().s(P().aQ(e,c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,F().s(P().aQ(e,c))),c=1+c|0;return this.z(n,r)}o=l,c=1+c|0}return this.bF(this.k(this.k(a,s),o))}}),x.gX=(function(e,t,n,r){return this.bF(this.k(this.k(this.k(r,e),t),n))}),x.gB=(function(e,t){var n=t,r=e.e();switch(r){case 0:return this.z(n,0);case 1:return this.z(this.k(n,F().s(e.h(0))),1);default:var i=F().s(e.h(0));n=this.k(n,i);for(var a=n,o=F().s(e.h(1)),s=o-i|0,c=2;c<r;){n=this.k(n,o);var l=F().s(e.h(c));if(s!==(l-o|0)||s===0){for(n=this.k(n,l),c=1+c|0;c<r;)n=this.k(n,F().s(e.h(c))),c=1+c|0;return this.z(n,r)}o=l,c=1+c|0}return this.bF(this.k(this.k(a,s),o))}}),x.gK=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.I(),u=c.w(),d=F().s(l);switch(r=this.k(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.gX(s,a,o,t):this.z(r,n)});function ls(e){this.aY=null,this.d6=null,this.ch=!1,this.d6=e,Qr(this),this.ch=!1}x=ls.prototype=new w,x.constructor=ls,x.gV=(function(e){this.ch?(ni(e),this.d6.W()):ti(this,e)}),x.gH=(function(){$r(this),this.ch=!0}),new E().i(ls,`com.raquo.airstream.ownership.OneTimeOwner`,{bB:1,bC:1});function us(){}x=us.prototype=new w,x.constructor=us,x.g1=(function(e){return e!==null}),x.g9=(function(e){return e?``:null}),x.c5=(function(e){return this.g1(e)}),x.c8=(function(e){return this.g9(!!e)}),new E().i(us,`com.raquo.laminar.codecs.package$$anon$1`,{bS:1,a4:1});function ds(e){if(e===null)throw pu(new mu)}x=ds.prototype=new w,x.constructor=ds,x.c8=(function(e){return e}),x.c5=(function(e){return e}),new E().i(ds,`com.raquo.laminar.codecs.package$$anon$2`,{bT:1,a4:1});function fs(e,t,n,r){}x=fs.prototype=new Fi,x.constructor=fs,new E().i(fs,`com.raquo.laminar.keys.CompositeKey`,{c9:1,Y:1});function ps(e,t,n){return e.aL=t,e.b8=n,e}function ms(){this.aL=null,this.b8=null}x=ms.prototype=new Fi,x.constructor=ms;function hs(){}hs.prototype=x,x.q=(function(e){return new gc(this,e,new Gl(((e,t,n)=>{mi().fe(e,t,n)})))}),new E().i(ms,`com.raquo.laminar.keys.HtmlAttr`,{a5:1,Y:1});function gs(e,t,n){this.cn=null,this.cm=null,this.bQ=null,this.bR=null,this.cn=e,this.cm=t;var r=n.c()?K():new Ed(n.t()+`:`+e);this.bQ=r.c()?e:r.t(),this.bR=n.c()?K():new Ed(Ri().gP(n.t()))}x=gs.prototype=new Fi,x.constructor=gs,new E().i(gs,`com.raquo.laminar.keys.SvgAttr`,{ca:1,Y:1});function _s(){}x=_s.prototype=new w,x.constructor=_s,x.ae=(function(e){}),new E().i(_s,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cf:1,U:1});function vs(e,t){if(this.dr=null,this.dr=e,t===null)throw pu(new mu)}x=vs.prototype=new w,x.constructor=vs,x.ae=(function(e){var t=Fr(),n=(()=>{this.dr.b(e)});if(Fr(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,Mr(t)}}}),new E().i(vs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cg:1,U:1});function ys(){}x=ys.prototype=new w,x.constructor=ys,new E().i(ys,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cj:1,ch:1});function bs(){}x=bs.prototype=new w,x.constructor=bs,new E().i(bs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cl:1,ck:1});var xs;function Ss(){return xs||=new bs,xs}function Cs(e,t){if(this.ds=null,this.ds=e,t===null)throw pu(new mu)}x=Cs.prototype=new w,x.constructor=Cs,x.fP=(function(e){return this.ds.b(e)}),new E().i(Cs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{co:1,cm:1});function ws(e){e.eM(new Kr(new Ul((()=>{throw B(new V,`Attempting to use owner of unmounted element: `+So(mi().g0(e.aT(),(mi(),$())),``,` > `,``))}))))}function Ts(e,t,n){return e.cs=t,e}function Es(){this.cs=null}x=Es.prototype=new w,x.constructor=Es;function Ds(){}Ds.prototype=x,x.cS=(function(){return this.cs}),x.cK=(function(e){var t=this.fS();return e.af(new G((e=>{e.ae(t)}))),t}),x.fS=(function(){return new dd(this,mi().fV(this))}),new E().i(Es,`com.raquo.laminar.tags.HtmlTag`,{al:1,a7:1});function Os(e,t){this.dz=null,this.dz=e}x=Os.prototype=new w,x.constructor=Os,new E().i(Os,`com.raquo.laminar.tags.SvgTag`,{cx:1,a7:1});function ks(){}x=ks.prototype=new w,x.constructor=ks,x.c8=(function(e){return e}),x.c5=(function(e){return e}),new E().i(ks,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cF:1,a4:1});function As(e,t){return e.ba=t,e.cH(),e}function js(){this.ba=null,this.b9=null,this.bb=!1}x=js.prototype=new w,x.constructor=js;function Ms(){}Ms.prototype=x,x.hh=(function(){return this.bb||=(this.b9=new vc(this.ba,new H((e=>void 0)),void 0),!0),this.b9}),x.y=(function(e,t){var n=this.hh().cK(new X([]));return e.af(new H((e=>{e.b(this).ae(n)}))),t.af(new H((e=>{e.ae(n)}))),n});function Ns(){this.ct=null,Ps=this,this.ct=xr(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}x=Ns.prototype=new w,x.constructor=Ns,x.g2=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=j().fR(this.ct,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.ct.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new E().i(Ns,`java.lang.Character$`,{cL:1,a:1});var Ps;function Fs(){return Ps||=new Ns,Ps}function Is(){}x=Is.prototype=new w,x.constructor=Is,x.bC=(function(e){throw new bd(`For input string: "`+e+`"`)}),x.gF=(function(e,t,n){e===null&&Rs().bC(e);var r=e.length;r===0&&Rs().bC(e);var i=Fs(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&Rs().bC(e);var l=0;for(l=0;c!==r;){var u=i.g2(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&Rs().bC(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&Rs().bC(e),(l^s)-s|0}),new E().i(Is,`java.lang.Integer$`,{cR:1,a:1});var Ls;function Rs(){return Ls||=new Is,Ls}function zs(){}x=zs.prototype=new w,x.constructor=zs;function Bs(e){return e instanceof zs||typeof e==`number`||e instanceof S}function Vs(e,t,n,r,i){this.b1=null,this.bd=null,this.b2=null,this.b3=0,this.b0=0,this.b1=e,this.bd=t,this.b2=n,this.b3=r,this.b0=i}x=Vs.prototype=new w,x.constructor=Vs,x.f=(function(e){return e instanceof Vs&&this.b2===e.b2&&this.b3===e.b3&&this.b0===e.b0&&this.b1===e.b1&&this.bd===e.bd}),x.o=(function(){var e=``;return this.b1!==`<jscode>`&&(e=``+e+this.b1+`.`),e=``+e+this.bd,this.b2===null?e+=`(Unknown Source)`:(e=e+`(`+this.b2,this.b3>=0&&(e=e+`:`+this.b3,this.b0>=0&&(e=e+`:`+this.b0)),e+=`)`),e}),x.j=(function(){return xd(this.b1)^xd(this.bd)^xd(this.b2)^this.b3^this.b0});var Hs=new E().i(Vs,`java.lang.StackTraceElement`,{av:1,a:1});function Us(){}x=Us.prototype=new w,x.constructor=Us,x.gQ=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Vn(e.a[a]),a=1+a|0;return i}),new E().i(Us,`java.lang.String$`,{d1:1,a:1});var Ws;function Gs(){return Ws||=new Us,Ws}function L(e,t,n,r,i){return e.e2=t,e.e3=i,i&&e.gi(),e}var Ks=class extends Error{constructor(){super(),this.e2=null,this.e3=!1,this.e1=null,this.bT=null}bB(){return this.e2}gi(){var e=this instanceof J?this.U:this;return this.e1=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}gt(){return this.bT===null&&(this.bT=this.e3?Oa().gh(this.e1):new(Hs.r()).C(0)),this.bT}o(){var e=Fn(this),t=this.bB();return t===null?e:e+`: `+t}j(){return tr.prototype.j.call(this)}f(e){return tr.prototype.f.call(this,e)}get message(){var e=this.bB();return e===null?``:e}get name(){return Fn(this)}toString(){return this.o()}};function qs(){this.e4=null,Js=this,this.e4=new os(Na().dZ)}x=qs.prototype=new w,x.constructor=qs,x.gU=(function(){return this.e4.cG}),new E().i(qs,`scala.Console$`,{dh:1,e9:1});var Js;function Ys(){return Js||=new qs,Js}function Xs(){}x=Xs.prototype=new lo,x.constructor=Xs;function Zs(){}Zs.prototype=x,x.hq=(function(e){if(e===null)return null;if(e.a.length===0){var t=Ud();return uf(),t.eo}return new ap(e)});function Qs(e,t){if(t===e)e.V(Yu().eW(t));else for(var n=t.d();n.i();)e.R(n.g());return e}function $s(){}x=$s.prototype=new w,x.constructor=$s;function ec(){}ec.prototype=x,x.o=(function(){return`<function0>`});function tc(){}x=tc.prototype=new w,x.constructor=tc;function nc(){}nc.prototype=x,x.o=(function(){return`<function1>`});function rc(){}x=rc.prototype=new w,x.constructor=rc;function ic(){}ic.prototype=x,x.o=(function(){return`<function2>`});function ac(){}x=ac.prototype=new w,x.constructor=ac;function oc(){}oc.prototype=x,x.o=(function(){return`<function3>`});function sc(e){this.bZ=!1,this.bZ=e}x=sc.prototype=new w,x.constructor=sc,x.o=(function(){return``+this.bZ}),new E().i(sc,`scala.runtime.BooleanRef`,{eh:1,a:1});function cc(e){this.bq=0,this.bq=e}x=cc.prototype=new w,x.constructor=cc,x.o=(function(){return``+this.bq}),new E().i(cc,`scala.runtime.IntRef`,{ej:1,a:1});function lc(){this.p=0,this.eD=0,this.fu=0,this.ft=0,uc=this,this.p=xd(`Seq`),this.eD=xd(`Map`),this.fu=xd(`Set`),this.ft=this.hl($(),this.eD)}x=lc.prototype=new cs,x.constructor=lc,x.fd=(function(e){return gf(e)?this.gB(e,this.p):e instanceof Xf?this.gK(e,this.p):this.gS(e,this.p)}),new E().i(lc,`scala.util.hashing.MurmurHash3$`,{eL:1,eK:1});var uc;function R(){return uc||=new lc,uc}var dc=class extends Ks{};function fc(){this.ce=null,this.cZ=null,this.d0=null,pc=this,this.ce=Yu().eH(P().aH(new(M.r()).C([]))),this.cZ=new G((e=>{try{console.error(this.gp(e)+`
`+this.gs(e,`
`))}catch(e){var t=e instanceof Ks?e:new J(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.d0=new G((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof J?t.U:t})),this.gY(this.cZ)}x=fc.prototype=new w,x.constructor=fc,x.gp=(function(e){try{var t=e.bB()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Pn(e).cP()+`: `+t}),x.gs=(function(e,t){try{return So(Bc().hq(e.gt()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.gY=(function(e){this.ce.R(e)}),x.bG=(function(e){for(var t=this.ce.d();t.i();){var n=t.g();try{n.b(e)}catch(e){var r=e instanceof Ks?e:new J(e),i=this.d0;if(n===null?i===null:n.f(i))throw r instanceof J?r.U:r;console.warn(`Error processing an unhandled error callback:`),$o().h9(0,new Ul((e=>(()=>{throw e instanceof J?e.U:e}))(r)))}}}),new E().i(fc,`com.raquo.airstream.core.AirstreamError$`,{bo:1,e7:1,e8:1});var pc;function mc(){return pc||=new fc,pc}function z(e,t,n){return new _l(n.fP(t))}function hc(e,t,n,r){return new vs(new G((e=>{(vi(),new hi(t,null,null)).af(new G((e=>(t=>{n.b(t).ae(e)}))(e)))})),Hi())}function gc(e,t,n){this.dp=null,this.dq=null,this.dn=null,this.dp=e,this.dq=t,this.dn=n}x=gc.prototype=new w,x.constructor=gc,x.ae=(function(e){this.dn.fN(e,this.dp,this.dq)}),new E().i(gc,`com.raquo.laminar.modifiers.KeySetter`,{cd:1,U:1,cp:1});function _c(e,t){if(this.cq=null,this.du=null,this.dv=null,this.du=t,ws(this),e===null)throw B(new V,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!mi().gE(e,document))throw B(new V,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dv=e,this.gO()}x=_c.prototype=new w,x.constructor=_c,x.c7=(function(){return this.cq}),x.eM=(function(e){this.cq=e}),x.gO=(function(){return this.cq.eE(),Xi().c1(this,this.du,void 0)}),x.aT=(function(){return this.dv}),new E().i(_c,`com.raquo.laminar.nodes.RootNode`,{ct:1,a6:1,ak:1});function vc(e,t,n){this.cs=null,this.dy=null,this.dy=e,Ts(this,e,!1)}x=vc.prototype=new Ds,x.constructor=vc,x.cS=(function(){return this.dy}),new E().i(vc,`com.raquo.laminar.tags.CustomHtmlTag`,{cw:1,al:1,a7:1});function yc(){this.ba=null,this.b9=null,this.bb=!1,this.dE=null,this.dF=!1,this.dA=null,this.dB=!1,this.dC=null,this.dD=!1,As(this,`wa-checkbox`)}x=yc.prototype=new Ms,x.constructor=yc,x.cY=(function(){return this.dF||=(this.dE=(U(),ps(new ms,`value`,Ti().aj)),!0),this.dE}),x.g3=(function(){return this.dB||=(this.dA=(U(),ps(new ms,`disabled`,Ti().dl)),!0),this.dA}),x.Y=(function(){return this.dD||=(this.dC=(U(),ps(new ms,`name`,Ti().aj)),!0),this.dC}),x.cH=(function(){return _n}),new E().i(yc,`io.github.nguyenyou.webawesome.laminar.Checkbox$`,{cz:1,a9:1,a8:1});var bc;function xc(){return bc||=new yc,bc}function Sc(){this.ba=null,this.b9=null,this.bb=!1,this.dI=null,this.dJ=!1,this.dG=null,this.dH=!1,this.dK=null,this.dL=!1,this.dM=null,this.dN=!1,As(this,`wa-checkbox-group`)}x=Sc.prototype=new Ms,x.constructor=Sc,x.cQ=(function(){return this.dJ||=(this.dI=(U(),ps(new ms,`label`,Ti().aj)),!0),this.dI}),x.gy=(function(){return this.dH||=(this.dG=(U(),ps(new ms,`hint`,Ti().aj)),!0),this.dG}),x.gT=(function(){return this.dL||=(this.dK=Ac(),!0),this.dK}),x.hb=(function(){return this.dN||=(this.dM=Dc(),!0),this.dM}),x.cH=(function(){return gn}),new E().i(Sc,`io.github.nguyenyou.webawesome.laminar.CheckboxGroup$`,{cA:1,a9:1,a8:1});var Cc;function wc(){return Cc||=new Sc,Cc}function Tc(){this.aL=null,this.b8=null,this.dS=null,this.dT=!1,ps(this,`size`,new ks)}x=Tc.prototype=new hs,x.constructor=Tc,x.gI=(function(){return this.dT||=(this.dS=Dc().q(`l`),!0),this.dS}),new E().i(Tc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cC:1,a5:1,Y:1});var Ec;function Dc(){return Ec||=new Tc,Ec}function Oc(){this.aL=null,this.b8=null,this.dU=null,this.dV=!1,ps(this,`orientation`,new ks)}x=Oc.prototype=new hs,x.constructor=Oc,x.gA=(function(){return this.dV||=(this.dU=Ac().q(`horizontal`),!0),this.dU}),new E().i(Oc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{cD:1,a5:1,Y:1});var kc;function Ac(){return kc||=new Oc,kc}function jc(){this.ba=null,this.b9=null,this.bb=!1,this.dW=null,this.dX=!1,As(this,`wa-switch`)}x=jc.prototype=new Ms,x.constructor=jc,x.Y=(function(){return this.dX||=(this.dW=(U(),ps(new ms,`name`,Ti().aj)),!0),this.dW}),x.cH=(function(){return Mn}),new E().i(jc,`io.github.nguyenyou.webawesome.laminar.Switch$`,{cE:1,a9:1,a8:1});var Mc;function Nc(){return Mc||=new jc,Mc}function Pc(e){if(e.a1.Z)return e.a1.Q().cP()+`[]`;for(var t=e.a1.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Fc(e){this.cu=null,this.a1=e}x=Fc.prototype=new w,x.constructor=Fc,x.o=(function(){return(this.a1.Y?`interface `:this.a1.X?``:`class `)+this.a1.N}),x.cP=(function(){return this.cu===null&&(this.cu=Pc(this)),this.cu}),new E().i(Fc,`java.lang.Class`,{cM:1,a:1,N:1});function B(e,t){return L(e,t,null,!0,!0),e}var V=class extends Ks{};new E().i(V,`java.lang.Exception`,{y:1,s:1,a:1});function Ic(){}x=Ic.prototype=new w,x.constructor=Ic;function Lc(){}Lc.prototype=x;function Rc(){this.fs=null,zc=this,Hu(),this.fs=$c()}x=Rc.prototype=new Zs,x.constructor=Rc,new E().i(Rc,`scala.Predef$`,{ds:1,dk:1,dl:1});var zc;function Bc(){return zc||=new Rc,zc}function Vc(e,t){return e.bh=t,e}function Hc(){this.bh=null}x=Hc.prototype=new w,x.constructor=Hc;function Uc(){}Uc.prototype=x,x.aR=(function(e){return this.bh.cO(e,sf())}),x.a4=(function(){return this.bh.f5(sf())}),x.aP=(function(e){return this.bh.cO(e,sf())});function Wc(e,t){if(t<0)return 1;var n=e.n();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.d();i.i();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function Gc(e,t){return new Mu(e).cN(t)}function Kc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Xc().E:new Fu(e,r,i)}function qc(e,t){for(var n=t.d();e.i();)if(!n.i()||!N().H(e.g(),n.g()))return!1;return!n.i()}function Jc(){this.E=null,Yc=this,this.E=new Ou}x=Jc.prototype=new w,x.constructor=Jc,x.a4=(function(){return new Nd}),new E().i(Jc,`scala.collection.Iterator$`,{dA:1,a:1,S:1});var Yc;function Xc(){return Yc||=new Jc,Yc}function Zc(){}x=Zc.prototype=new w,x.constructor=Zc,new E().i(Zc,`scala.collection.immutable.Map$`,{dQ:1,a:1,dG:1});var Qc;function $c(){return Qc||=new Zc,Qc}function el(e){this.ev=null,this.ev=e}x=el.prototype=new ec,x.constructor=el,x.W=(function(){return(0,this.ev)()}),new E().i(el,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{ed:1,bj:1,ax:1});function H(e){this.ew=null,this.ew=e}x=H.prototype=new nc,x.constructor=H,x.b=(function(e){return(0,this.ew)(e)}),new E().i(H,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{ee:1,bk:1,e:1});var tl=new E().i(0,`scala.runtime.Nothing$`,{ek:1,s:1,a:1});function nl(){}x=nl.prototype=new w,x.constructor=nl,x.gn=(function(e){return(t=>e.b(t))}),new E().i(nl,`scala.scalajs.js.Any$`,{eq:1,er:1,es:1});var rl;function il(){return rl||=new nl,rl}function al(){}x=al.prototype=new ec,x.constructor=al;function ol(){}ol.prototype=x;function sl(){}x=sl.prototype=new nc,x.constructor=sl;function cl(){}cl.prototype=x;function ll(){}x=ll.prototype=new ic,x.constructor=ll;function ul(){}ul.prototype=x;function dl(){}x=dl.prototype=new oc,x.constructor=dl;function fl(){}fl.prototype=x;function pl(e,t,n,r){if(this.d1=null,r===null)throw pu(new mu);this.d1=void 0}x=pl.prototype=new w,x.constructor=pl,x.o=(function(){return Cr(this)}),new E().i(pl,`com.raquo.airstream.core.Observer$$anon$8`,{bs:1,bt:1,bp:1,bq:1});function ml(e){if(this.dd=null,this.de=!1,this.fj=null,e===null)throw pu(new mu);Oi(this)}x=ml.prototype=new w,x.constructor=ml,x.hg=(function(){return this.de||=(this.dd=new Os(`svg`,!1),!0),this.dd}),new E().i(ml,`com.raquo.laminar.api.Laminar$svg$`,{bM:1,c2:1,bV:1,bX:1});function hl(){this.u=null,gl=this,this.u=new xf}x=hl.prototype=new w,x.constructor=hl,new E().i(hl,`com.raquo.laminar.api.package$`,{bP:1,ah:1,ai:1,ag:1});var gl;function U(){return gl||=new hl,gl}function _l(e){this.dx=null,this.cr=null,this.dx=K(),this.cr=mi().fX(e)}x=_l.prototype=new w,x.constructor=_l,x.ff=(function(e){this.dx=e}),x.fi=(function(e){}),x.ae=(function(e){Xi().c1(e,this,void 0)}),x.hj=(function(){return this.cr.data}),x.aT=(function(){return this.cr}),new E().i(_l,`com.raquo.laminar.nodes.TextNode`,{cv:1,a6:1,U:1,aj:1});function vl(){}x=vl.prototype=new w,x.constructor=vl;function yl(){}yl.prototype=x;function bl(e,t){return e===t}function xl(e){return e?1231:1237}var Sl=new E().i(0,`java.lang.Boolean`,{cJ:1,a:1,P:1,N:1},(e=>typeof e==`boolean`));function Cl(e){return e}function wl(e,t){return t instanceof Nn&&e===t.c}var Tl=new E().i(0,`java.lang.Character`,{ar:1,a:1,P:1,N:1},(e=>e instanceof Nn));function El(e,t){return L(e,t,null,!0,!0),e}var W=class extends V{};new E().i(W,`java.lang.RuntimeException`,{G:1,y:1,s:1,a:1});function Dl(){this.m=null,this.m=``}x=Dl.prototype=new w,x.constructor=Dl,x.fK=(function(e){var t=Gs().gQ(e,0,e.a.length);return this.m=``+this.m+t,this}),x.o=(function(){return this.m}),x.e=(function(){return this.m.length}),x.eJ=(function(e){return this.m.charCodeAt(e)}),new E().i(Dl,`java.lang.StringBuilder`,{d2:1,aa:1,ap:1,a:1});function Ol(){}x=Ol.prototype=new Lc,x.constructor=Ol;function kl(){}kl.prototype=x;function Al(){}x=Al.prototype=new w,x.constructor=Al,x.o=(function(){return`<function1>`}),x.fO=(function(e){throw new xu(e)}),x.b=(function(e){this.fO(e)}),new E().i(Al,`scala.PartialFunction$$anon$1`,{dr:1,e:1,k:1,a:1});function jl(){}x=jl.prototype=new w,x.constructor=jl;function Ml(){}Ml.prototype=x,x.n=(function(){return-1}),x.aD=(function(e,t,n){return xo(this,e,t,n)}),x.b6=(function(e,t,n,r){return Co(this,e,t,n,r)}),x.d=(function(){return this}),x.cN=(function(e){return Gc(this,e)}),x.c6=(function(e){return this.bH(e,-1)}),x.bH=(function(e,t){return Kc(this,e,t)}),x.o=(function(){return`<iterator>`});function Nl(e,t){return e.bk=t,e}function Pl(){this.bk=null}x=Pl.prototype=new w,x.constructor=Pl;function Fl(){}Fl.prototype=x,x.eH=(function(e){return this.bk.aP(e)}),x.eW=(function(e){return this.bk.aR(e)}),x.a4=(function(){return this.bk.a4()}),x.aP=(function(e){return this.eH(e)}),x.aR=(function(e){return this.eW(e)});function Il(e){return e.a3(0)===0}function Ll(e,t){var n=e.n();if(n!==-1){var r=t.n();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return qc(e.d(),t)}function Rl(e,t){for(var n=e.aS().a4(),r=e.d();r.i();)n.R(t.b(r.g()));return n.a5()}function zl(e,t){if(this.eq=null,this.bW=null,this.eq=e,t===null)throw pu(new mu);this.bW=t}x=zl.prototype=new w,x.constructor=zl,x.fE=(function(e){return this.bW.R(e),this}),x.fy=(function(e){return this.bW.V(e),this}),x.a5=(function(){return this.eq.b(this.bW.a5())}),x.R=(function(e){return this.fE(e)}),x.V=(function(e){return this.fy(e)}),new E().i(zl,`scala.collection.mutable.Builder$$anon$1`,{e0:1,Q:1,R:1,T:1});function Bl(e,t){return e.bn=t,e}function Vl(){this.bn=null}x=Vl.prototype=new w,x.constructor=Vl;function Hl(){}Hl.prototype=x,x.fF=(function(e){return this.bn.R(e),this}),x.fz=(function(e){return this.bn.V(e),this}),x.a5=(function(){return this.bn}),x.R=(function(e){return this.fF(e)}),x.V=(function(e){return this.fz(e)}),new E().i(Vl,`scala.collection.mutable.GrowableBuilder`,{ba:1,Q:1,R:1,T:1});function Ul(e){this.ez=null,this.ez=e}x=Ul.prototype=new ol,x.constructor=Ul,x.W=(function(){return(0,this.ez)()}),new E().i(Ul,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{ex:1,ew:1,bj:1,ax:1});function G(e){this.eA=null,this.eA=e}x=G.prototype=new cl,x.constructor=G,x.b=(function(e){return(0,this.eA)(e)}),new E().i(G,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{ez:1,ey:1,bk:1,e:1});function Wl(e){this.eB=null,this.eB=e}x=Wl.prototype=new ul,x.constructor=Wl,x.cJ=(function(e,t){return(0,this.eB)(e,t)}),new E().i(Wl,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{eB:1,eA:1,ef:1,di:1});function Gl(e){this.eC=null,this.eC=e}x=Gl.prototype=new fl,x.constructor=Gl,x.fN=(function(e,t,n){return(0,this.eC)(e,t,n)}),new E().i(Gl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{eD:1,eC:1,eg:1,dj:1});function Kl(e,t){this.bP=null,this.cl=null,this.bP=e,this.cl=t}x=Kl.prototype=new w,x.constructor=Kl,x.ae=(function(e){var t=this.cl;t!==void 0&&t.f9(e,this.bP),Xi().c1(e,this.bP,void 0)}),x.ho=(function(e){return new Kl(this.bP,e.fM(this.cl))});var ql=new E().i(Kl,`com.raquo.laminar.inserters.StaticChildInserter`,{c6:1,U:1,c4:1,c8:1,c3:1});function Jl(e){e.cp=new ai(new Ul((()=>{e.aZ.eE()})),new Ul((()=>{e.aZ.fY()})))}function Yl(e,t){Zl(e,e.bS,t)&&Ql(e,t)}function Xl(e,t){var n=e.bS;e.bS=t,Zl(e,n,t)||Ql(e,t)}function Zl(e,t,n){var r=!t.c()&&!t.t().c7().B.c(),i=!n.c()&&!n.t().c7().B.c();return r&&!i}function Ql(e,t){$l(e,t.c()?K():new Ed(t.t().c7()))}function $l(e,t){if(t.c())e.cp.fT();else{var n=t.t();e.cp.h6(n)}}function eu(){}x=eu.prototype=new yl,x.constructor=eu;function tu(){}tu.prototype=x;var nu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(nu,`java.lang.ArithmeticException`,{cI:1,G:1,y:1,s:1,a:1});var ru=new E().i(0,`java.lang.Byte`,{cK:1,V:1,a:1,P:1,N:1},(e=>qn(e)));function iu(e,t){return L(e,t,null,!0,!0),e}function au(e){return L(e,null,null,!0,!0),e}var ou=class extends W{};new E().i(ou,`java.lang.IllegalArgumentException`,{at:1,G:1,y:1,s:1,a:1});var su=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(su,`java.lang.IllegalStateException`,{cO:1,G:1,y:1,s:1,a:1});function cu(e,t){return L(e,t,null,!0,!0),e}function lu(e,t){return L(e,`Index out of range: `+t,null,!0,!0),e}var uu=class extends W{};new E().i(uu,`java.lang.IndexOutOfBoundsException`,{cP:1,G:1,y:1,s:1,a:1});function du(){}x=du.prototype=new yl,x.constructor=du,new E().i(du,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cT:1,ao:1,am:1,aq:1,an:1});function fu(e,t){return L(e,t,null,!0,!0),e}function pu(e){return L(e,null,null,!0,!0),e}var mu=class extends W{};new E().i(mu,`java.lang.NullPointerException`,{cU:1,G:1,y:1,s:1,a:1});var hu=new E().i(0,`java.lang.Short`,{cX:1,V:1,a:1,P:1,N:1},(e=>Jn(e))),gu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(gu,`java.lang.UnsupportedOperationException`,{d5:1,G:1,y:1,s:1,a:1});var _u=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(_u,`java.util.ConcurrentModificationException`,{d9:1,G:1,y:1,s:1,a:1});var vu=class extends W{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(vu,`java.util.NoSuchElementException`,{da:1,G:1,y:1,s:1,a:1});function yu(){}x=yu.prototype=new kl,x.constructor=yu,x.b=(function(e){return e}),x.o=(function(){return`generalized constraint`}),new E().i(yu,`scala.$less$colon$less$$anon$1`,{df:1,dc:1,dd:1,e:1,a:1});function bu(e){if(!e.e6){if(e.bU===null)var t=`null`;else{var n=P().fI(e.bU),r=n===null?`of a JS class`:`of class `+n.a1.N;try{var t=e.bU+` (`+r+`)`}catch{var t=`an instance `+r}}e.e5=t,e.e6=!0}return e.e5}var xu=class extends W{constructor(e){super(),this.bU=null,this.e5=null,this.e6=!1,this.bU=e,L(this,null,null,!0,!0)}bB(){return bu(this)}};new E().i(xu,`scala.MatchError`,{dm:1,G:1,y:1,s:1,a:1});function Su(){}x=Su.prototype=new w,x.constructor=Su;function Cu(){}Cu.prototype=x,x.bE=(function(){return new wu(this)}),x.c=(function(){return this===K()}),x.n=(function(){return!this.c()|0}),x.d=(function(){return this.c()?Xc().E:new ku(this.t())});function wu(e){if(this.be=0,this.ea=0,this.e9=null,e===null)throw pu(new mu);this.e9=e,this.be=0,this.ea=e.aE()}x=wu.prototype=new Ml,x.constructor=wu,x.i=(function(){return this.be<this.ea}),x.g=(function(){var e=this.e9.aF(this.be);return this.be=1+this.be|0,e}),new E().i(wu,`scala.Product$$anon$1`,{dt:1,I:1,b:1,c:1,J:1});function Tu(e){this.bh=null,Vc(this,e)}x=Tu.prototype=new Uc,x.constructor=Tu,new E().i(Tu,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dy:1,dx:1,a:1,S:1,W:1});function Eu(e){return So(e,e.aC()+`(`,`, `,`)`)}function Du(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Ou(){}x=Ou.prototype=new Ml,x.constructor=Ou,x.i=(function(){return!1}),x.gR=(function(){throw new vu(`next on empty iterator`)}),x.n=(function(){return 0}),x.g=(function(){this.gR()}),x.bH=(function(e,t){return this}),new E().i(Ou,`scala.collection.Iterator$$anon$19`,{dB:1,I:1,b:1,c:1,J:1});function ku(e){this.ec=null,this.bi=!1,this.ec=e,this.bi=!1}x=ku.prototype=new Ml,x.constructor=ku,x.i=(function(){return!this.bi}),x.g=(function(){return this.bi?Xc().E.g():(this.bi=!0,this.ec)}),x.bH=(function(e,t){return this.bi||e>0||t===0?Xc().E:this}),new E().i(ku,`scala.collection.Iterator$$anon$20`,{dC:1,I:1,b:1,c:1,J:1});function Au(e){for(;;)if(e.x instanceof Mu){var t=e.x;if(e.x=t.x,e.al=t.al,t.L!==null){e.K===null&&(e.K=t.K);var n=t.K;n===null&&Ko().b7(),n.bj=e.L,e.L=t.L}}else return}function ju(e){for(;;)if(e.L===null)return e.x=null,e.K=null,!1;else{if(e.x=e.L.gx(),e.K===e.L){var t=e.K;t===null&&Ko().b7(),e.K=t.bj}if(e.L=e.L.bj,Au(e),e.al)return!0;if(!(e.x!==null&&e.x.i()))continue;return e.al=!0,!0}}function Mu(e){this.x=null,this.L=null,this.K=null,this.al=!1,this.x=e,this.L=null,this.K=null,this.al=!1}x=Mu.prototype=new Ml,x.constructor=Mu,x.i=(function(){return this.al?!0:this.x===null?!1:this.x.i()?(this.al=!0,!0):ju(this)}),x.g=(function(){if(this.i()){this.al=!1;var e=this.x;return e===null&&Ko().b7(),e.g()}return Xc().E.g()}),x.cN=(function(e){var t=new To(e,null);if(this.L===null)this.L=t,this.K=t;else{var n=this.K;n===null&&Ko().b7(),n.bj=t,this.K=t}return this.x===null&&(this.x=Xc().E),this}),new E().i(Mu,`scala.collection.Iterator$ConcatIterator`,{aH:1,I:1,b:1,c:1,J:1});function Nu(e){for(;e.a9>0;)e.am.i()?(e.am.g(),e.a9=e.a9-1|0):e.a9=0}function Pu(e,t){if(e.F<0)return-1;var n=e.F-t|0;return n<0?0:n}function Fu(e,t,n){this.am=null,this.F=0,this.a9=0,this.am=e,this.F=n,this.a9=t}x=Fu.prototype=new Ml,x.constructor=Fu,x.n=(function(){var e=this.am.n();if(e<0)return-1;var t=e-this.a9|0,n=t<0?0:t;if(this.F<0)return n;var r=this.F;return r<n?r:n}),x.i=(function(){return Nu(this),this.F!==0&&this.am.i()}),x.g=(function(){return Nu(this),this.F>0?(this.F=this.F-1|0,this.am.g()):this.F<0?this.am.g():Xc().E.g()}),x.bH=(function(e,t){var n=e>0?e:0;if(t<0)var r=Pu(this,n);else if(t<=n)var r=0;else if(this.F<0)var r=t-n|0;else var i=Pu(this,n),a=t-n|0,r=i<a?i:a;var o=this.a9+n|0;return r===0?Xc().E:o<0?(this.a9=2147483647,this.F=0,Gc(this,new el((()=>new Fu(this.am,o-2147483647|0,r))))):(this.a9=o,this.F=r,this)}),new E().i(Fu,`scala.collection.Iterator$SliceIterator`,{dF:1,I:1,b:1,c:1,J:1});function Iu(e,t){if(t<0)throw cu(new uu,``+t);var n=e.g8(t);if(n.c())throw cu(new uu,``+t);return n.I()}function Lu(e,t){return _f(t)?Ru(e,e,t):Ll(e,t)}function Ru(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.c()&&!r.c()&&N().H(i.I(),r.I())){var a=i.w(),o=r.w();i=a,r=o;continue}return i.c()&&r.c()}}function zu(e){if(this.bm=null,e===null)throw pu(new mu);this.bm=e}x=zu.prototype=new Ml,x.constructor=zu,x.i=(function(){return!this.bm.c()}),x.g=(function(){var e=this.bm.I();return this.bm=this.bm.w(),e}),new E().i(zu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dJ:1,I:1,b:1,c:1,J:1});function Bu(){Vu=this,$(),$()}x=Bu.prototype=new w,x.constructor=Bu,x.aP=(function(e){return $().fa(e)}),x.a4=(function(){return new hp}),x.aR=(function(e){return $().fa(e)}),new E().i(Bu,`scala.collection.immutable.List$`,{dP:1,a:1,S:1,W:1,a0:1});var Vu;function Hu(){return Vu||=new Bu,Vu}function Uu(){this.ej=null,Wu=this,this.ej=new T(0)}x=Uu.prototype=new w,x.constructor=Uu,x.aP=(function(e){return this.eX(e)}),x.eX=(function(e){var t=e.n();if(t>=0){var n=this.fc(this.ej,0,t),r=Du(e)?e.aD(n,0,2147483647):e.d().aD(n,0,2147483647);if(r!==t)throw new su(`Copied `+r+` of `+t);return gp(new vp,n,t)}return _p(new vp).eF(e)}),x.a4=(function(){return new Ku}),x.h4=(function(e,t){if(t<0)throw El(new W,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw El(new W,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),x.fc=(function(e,t,n){var r=this.h4(e.a.length,n);if(r<0)return e;var i=new T(r);return e.a0(0,i,0,t),i}),x.aR=(function(e){return this.eX(e)}),new E().i(Uu,`scala.collection.mutable.ArrayBuffer$`,{dS:1,a:1,S:1,W:1,a0:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Ku(){this.bn=null,Bl(this,(Gu(),_p(new vp)))}x=Ku.prototype=new Hl,x.constructor=Ku,new E().i(Ku,`scala.collection.mutable.ArrayBuffer$$anon$1`,{dT:1,ba:1,Q:1,R:1,T:1});function qu(){this.bk=null,Nl(this,od())}x=qu.prototype=new Fl,x.constructor=qu,new E().i(qu,`scala.collection.mutable.Buffer$`,{dZ:1,dH:1,a:1,S:1,W:1});var Ju;function Yu(){return Ju||=new qu,Ju}function Xu(e,t){return e.bo=t,e}function Zu(){this.bo=null}x=Zu.prototype=new w,x.constructor=Zu;function Qu(){}Qu.prototype=x,x.V=(function(e){return Qs(this,e)}),x.a5=(function(){return this.bo});function $u(){}x=$u.prototype=new w,x.constructor=$u,x.aP=(function(e){return new hp().cd(e)}),x.a4=(function(){return Bl(new Vl,new hp)}),x.aR=(function(e){return new hp().cd(e)}),new E().i($u,`scala.collection.mutable.ListBuffer$`,{e3:1,a:1,S:1,W:1,a0:1});var ed;function td(){return ed||=new $u,ed}function nd(e,t){this.cF=null,this.eu=null,this.et=0,this.cF=e,this.eu=t,this.et=t.W()|0}x=nd.prototype=new Ml,x.constructor=nd,x.i=(function(){return Bo().eK(this.et,this.eu.W()|0,`mutation occurred during iteration`),this.cF.i()}),x.g=(function(){return this.cF.g()}),new E().i(nd,`scala.collection.mutable.MutationTracker$CheckedIterator`,{e5:1,I:1,b:1,c:1,J:1});function rd(e){this.ey=null,this.br=0,this.ex=0,this.ey=e,this.br=0,this.ex=e.aE()}x=rd.prototype=new Ml,x.constructor=rd,x.i=(function(){return this.br<this.ex}),x.g=(function(){var e=this.ey.aF(this.br);return this.br=1+this.br|0,e}),new E().i(rd,`scala.runtime.ScalaRunTime$$anon$1`,{eo:1,I:1,b:1,c:1,J:1});function id(){}x=id.prototype=new w,x.constructor=id,x.aP=(function(e){return this.eY(e)}),x.a4=(function(){return bp(new xp)}),x.eY=(function(e){return Qs(bp(new xp),e).a5()}),x.aR=(function(e){return this.eY(e)}),new E().i(id,`scala.scalajs.js.WrappedArray$`,{eu:1,a0:1,a:1,S:1,W:1});var ad;function od(){return ad||=new id,ad}function sd(){}x=sd.prototype=new w,x.constructor=sd,x.aP=(function(e){return this.eZ(e)}),x.eZ=(function(e){return this.a4().V(e).a5()}),x.a4=(function(){return new zl(new H((e=>new X(e.aB))),yp(new xp,[]))}),x.aR=(function(e){return this.eZ(e)}),new E().i(sd,`scala.scalajs.runtime.WrappedVarArgs$`,{eF:1,a0:1,a:1,S:1,W:1});var cd;function ld(){return cd||=new sd,cd}var ud=class e extends dc{constructor(e,t){super(),this.aV=null,this.aU=0,this.aV=e,this.aU=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}bE(){return new wu(this)}j(){var e=-889275714;return e=F().k(e,xd(`TransactionDepthExceeded`)),e=F().k(e,F().s(this.aV)),e=F().k(e,this.aU),F().z(e,2)}f(t){if(this===t)return!0;if(t instanceof e){if(this.aU===t.aU){var n=this.aV,r=t.aV;return n===null?r===null:n===r}return!1}return!1}aE(){return 2}aG(){return`TransactionDepthExceeded`}aF(e){if(e===0)return this.aV;if(e===1)return this.aU;throw cu(new uu,``+e)}o(){return`TransactionDepthExceeded: `+this.aV+`; maxDepth: `+this.aU}};new E().i(ud,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{af:1,bn:1,s:1,a:1,d:1,X:1});function dd(e,t){this.bS=null,this.aZ=null,this.cp=null,this.dt=null,this.ak=null,this.dt=e,this.ak=t,this.bS=K(),ws(this),Jl(this)}x=dd.prototype=new w,x.constructor=dd,x.ae=(function(e){Xi().c1(e,this,void 0)}),x.c7=(function(){return this.aZ}),x.eM=(function(e){this.aZ=e}),x.fi=(function(e){Yl(this,e)}),x.ff=(function(e){Xl(this,e)}),x.o=(function(){return`ReactiveHtmlElement(`+(this.ak===null?`tag=`+this.dt.cS():this.ak.outerHTML)+`)`}),x.aT=(function(){return this.ak}),new E().i(dd,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cs:1,a6:1,U:1,aj:1,ak:1,cr:1});function fd(e,t){return Object.is(e,t)}function pd(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Hn;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var md=new E().i(0,`java.lang.Double`,{as:1,V:1,a:1,P:1,N:1,Z:1},(e=>typeof e==`number`)),hd=new E().i(0,`java.lang.Float`,{cN:1,V:1,a:1,P:1,N:1,Z:1},(e=>Xn(e))),gd=new E().i(0,`java.lang.Integer`,{cQ:1,V:1,a:1,P:1,N:1,Z:1},(e=>Yn(e)));function _d(e,t,n){if(n instanceof S){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function vd(e,t){return e^t}var yd=new E().i(0,`java.lang.Long`,{au:1,V:1,a:1,P:1,N:1,Z:1},(e=>e instanceof S)),bd=class extends ou{constructor(e){super(),L(this,e,null,!0,!0)}};new E().i(bd,`java.lang.NumberFormatException`,{cV:1,at:1,G:1,y:1,s:1,a:1});function xd(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function Sd(e,t){return e===t}var Cd=new E().i(0,`java.lang.String`,{d0:1,a:1,P:1,aa:1,N:1,Z:1},(e=>typeof e==`string`));function wd(){}x=wd.prototype=new Cu,x.constructor=wd,x.j=(function(){return 2433880}),x.o=(function(){return`None`}),x.aE=(function(){return 0}),x.aG=(function(){return`None`}),x.aF=(function(e){throw lu(new uu,e)}),x.go=(function(){throw new vu(`None.get`)}),x.t=(function(){this.go()}),new E().i(wd,`scala.None$`,{dn:1,ay:1,b:1,d:1,X:1,a:1});var Td;function K(){return Td||=new wd,Td}function Ed(e){this.bf=null,this.bf=e}x=Ed.prototype=new Cu,x.constructor=Ed,x.j=(function(){return R().fb(this,1323286827,!0)}),x.f=(function(e){return this===e||e instanceof Ed&&N().H(this.bf,e.bf)}),x.o=(function(){return P().fw(this)}),x.aE=(function(){return 1}),x.aG=(function(){return`Some`}),x.aF=(function(e){if(e===0)return this.bf;throw lu(new uu,e)}),x.t=(function(){return this.bf}),new E().i(Ed,`scala.Some`,{az:1,ay:1,b:1,d:1,X:1,a:1});function Dd(){}x=Dd.prototype=new w,x.constructor=Dd;function Od(){}Od.prototype=x,x.n=(function(){return-1}),x.af=(function(e){bo(this,e)}),x.aD=(function(e,t,n){return xo(this,e,t,n)}),x.b6=(function(e,t,n,r){return Co(this,e,t,n,r)}),x.aC=(function(){return this.ag()});function q(e){this.bV=null,this.a7=0,this.bg=0,this.bV=e,this.a7=0,this.bg=Ja().X(this.bV)}x=q.prototype=new Ml,x.constructor=q,x.n=(function(){return this.bg-this.a7|0}),x.i=(function(){return this.a7<this.bg}),x.g=(function(){this.a7>=Ja().X(this.bV)&&Xc().E.g();var e=P().aQ(this.bV,this.a7);return this.a7=1+this.a7|0,e}),x.c6=(function(e){if(e>0){var t=this.a7+e|0;if(t<0)var n=this.bg;else var r=this.bg,n=r<t?r:t;this.a7=n}return this}),new E().i(q,`scala.collection.ArrayOps$ArrayIterator`,{dw:1,I:1,b:1,c:1,J:1,a:1});function kd(e,t){return e.cB=t,e.a8=0,e.D=t.e(),e}function Ad(e,t){return t<0?0:t>e.D?e.D:t}function jd(){this.cB=null,this.a8=0,this.D=0}x=jd.prototype=new Ml,x.constructor=jd;function Md(){}Md.prototype=x,x.n=(function(){return this.D}),x.i=(function(){return this.D>0}),x.g=(function(){if(this.D>0){var e=this.cB.h(this.a8);return this.a8=1+this.a8|0,this.D=this.D-1|0,e}return Xc().E.g()}),x.c6=(function(e){if(e>0){this.a8=this.a8+e|0;var t=this.D-e|0;this.D=t<0?0:t}return this}),x.bH=(function(e,t){var n=Ad(this,e),r=Ad(this,t)-n|0;return this.D=r<0?0:r,this.a8=this.a8+n|0,this}),new E().i(jd,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{aG:1,I:1,b:1,c:1,J:1,a:1});function Nd(){this.bo=null,Xu(this,Xc().E)}x=Nd.prototype=new Qu,x.constructor=Nd,x.fC=(function(e){return this.bo=this.bo.cN(new el((()=>new ku(e)))),this}),x.R=(function(e){return this.fC(e)}),new E().i(Nd,`scala.collection.Iterator$$anon$21`,{dD:1,e2:1,Q:1,R:1,T:1,a3:1});function Pd(e){return e.eg||=(e.ef=new Gf(new(tl.r()).C(0)),!0),e.ef}function Fd(){this.eh=null,this.ef=null,this.eg=!1,Id=this,this.eh=new Tu(this)}x=Fd.prototype=new w,x.constructor=Fd,x.gl=(function(e,t){return e instanceof Ff?e:this.cX(so().eV(e,t))}),x.f5=(function(e){return new zl(new H((t=>this.cX(wo(t,e)))),(Gu(),new Ku))}),x.cX=(function(e){if(e===null)return null;if(e instanceof T)return new Gf(e);if(e instanceof sr)return new Uf(e);if(e instanceof ur)return new Vf(e);if(e instanceof cr)return new Wf(e);if(e instanceof lr)return new Hf(e);if(e instanceof ir)return new Bf(e);if(e instanceof ar)return new zf(e);if(e instanceof or)return new Kf(e);if(e instanceof rr)return new Rf(e);if(Ua(e,1))return new qf(e);throw new xu(e)}),x.cO=(function(e,t){return this.gl(e,t)}),new E().i(Fd,`scala.collection.immutable.ArraySeq$`,{dN:1,a:1,aE:1,aC:1,aD:1,aK:1});var Id;function Ld(){return Id||=new Fd,Id}function Rd(e){return e.el=0,e.em=0,e}function zd(){this.el=0,this.em=0}x=zd.prototype=new w,x.constructor=zd;function Bd(){}Bd.prototype=x;function Vd(){this.ep=null,this.eo=null,Hd=this,this.ep=new Tu(this),this.eo=new ap(new T(0))}x=Vd.prototype=new w,x.constructor=Vd,x.gm=(function(e,t){return this.f4(so().eV(e,t))}),x.f5=(function(e){return new zl(new H((e=>this.f4(e))),new qd(e.cb()))}),x.f4=(function(e){if(e===null)return null;if(e instanceof T)return new ap(e);if(e instanceof sr)return new rp(e);if(e instanceof ur)return new tp(e);if(e instanceof cr)return new ip(e);if(e instanceof lr)return new np(e);if(e instanceof ir)return new ep(e);if(e instanceof ar)return new $f(e);if(e instanceof or)return new op(e);if(e instanceof rr)return new Qf(e);if(Ua(e,1))return new sp(e);throw new xu(e)}),x.cO=(function(e,t){return this.gm(e,t)}),new E().i(Vd,`scala.collection.mutable.ArraySeq$`,{dY:1,a:1,aE:1,aC:1,aD:1,aK:1});var Hd;function Ud(){return Hd||=new Vd,Hd}function Wd(){}x=Wd.prototype=new tu,x.constructor=Wd;function Gd(){}Gd.prototype=x;function Kd(e){return e.aC()+`(<not computed>)`}function qd(e){this.el=0,this.em=0,this.b5=null,this.en=!1,this.cE=null,this.b5=e,Rd(this),this.en=e===pr.l(),this.cE=[]}x=qd.prototype=new Bd,x.constructor=qd,x.eG=(function(e){var t=this.en?$n(e):e===null?Lo().cW(this.b5):e;return this.cE.push(t),this}),x.fx=(function(e){for(var t=e.d();t.i();)this.eG(t.g());return this}),x.a5=(function(){return Lo().cV(this.b5===dr.l()?Wa.l():this.b5===Uo.l()||this.b5===tl.l()?D.l():this.b5,this.cE)}),x.o=(function(){return`ArrayBuilder.generic`}),x.R=(function(e){return this.eG(e)}),x.V=(function(e){return this.fx(e)}),new E().i(qd,`scala.collection.mutable.ArrayBuilder$generic`,{dX:1,dV:1,Q:1,R:1,T:1,a3:1,a:1});function Jd(e,t){this.cB=null,this.a8=0,this.D=0,this.es=null,this.er=0,this.es=t,kd(this,e),this.er=t.W()|0}x=Jd.prototype=new Md,x.constructor=Jd,x.i=(function(){return Bo().eK(this.er,this.es.W()|0,`mutation occurred during iteration`),this.D>0}),new E().i(Jd,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{e1:1,aG:1,I:1,b:1,c:1,J:1,a:1});function Yd(){}x=Yd.prototype=new w,x.constructor=Yd;function Xd(){}Xd.prototype=x;var J=class e extends W{constructor(e){super(),this.U=null,this.U=e,L(this,null,null,!0,!0)}bB(){return Rn(this.U)}aG(){return`JavaScriptException`}aE(){return 1}aF(e){return e===0?this.U:F().gC(e)}bE(){return new rd(this)}j(){return R().fb(this,1744042595,!0)}f(t){return this===t||t instanceof e&&N().H(this.U,t.U)}};new E().i(J,`scala.scalajs.js.JavaScriptException`,{bl:1,G:1,y:1,s:1,a:1,X:1,d:1});function Zd(e,t){typeof console<`u`&&(e.dY&&console.error?console.error(t):console.log(t))}function Qd(e){this.dY=!1,this.bc=null,this.dY=e,new du,this.bc=``}x=Qd.prototype=new Gd,x.constructor=Qd,x.gG=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bc=``+this.bc+t,t=``;else{var r=this.bc,i=t;Zd(this,``+r+i.substring(0,n)),this.bc=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(Qd,`java.lang.JSConsoleBasedPrintStream`,{cS:1,cH:1,cG:1,ao:1,am:1,aq:1,an:1,ap:1});function $d(e,t,n){for(var r=n,i=t;;)if(i<=0||r.c())return r;else{var a=i-1|0,o=r.w();i=a,r=o}}function ef(){this.bp=null}x=ef.prototype=new Xd,x.constructor=ef;function tf(){}tf.prototype=x,x.o=(function(){return this.bp}),x.f=(function(e){return this===e}),x.j=(function(){return Kn(this)});function nf(){}x=nf.prototype=new Od,x.constructor=nf;function rf(){}rf.prototype=x,x.o=(function(){return Kd(this)});function af(){this.bp=null,this.bp=`Any`,$()}x=af.prototype=new tf,x.constructor=af,x.cb=(function(){return D.l()}),x.cT=(function(e){return new T(e)}),new E().i(af,`scala.reflect.ManifestFactory$AnyManifest$`,{eb:1,bh:1,bg:1,a:1,bi:1,bd:1,d:1,be:1,bf:1});var of;function sf(){return of||=new af,of}function cf(){this.bp=null,this.bp=`Object`,$()}x=cf.prototype=new tf,x.constructor=cf,x.cb=(function(){return D.l()}),x.cT=(function(e){return new T(e)}),new E().i(cf,`scala.reflect.ManifestFactory$ObjectManifest$`,{ec:1,bh:1,bg:1,a:1,bi:1,bd:1,d:1,be:1,bf:1});var lf;function uf(){return lf||=new cf,lf}function Y(e,t){return e===t?!0:df(t)&&t.cM(e)?e.cc(t):!1}function df(e){return!!(e&&e.$classData&&e.$classData.n.i)}function ff(){}x=ff.prototype=new Od,x.constructor=ff;function pf(){}pf.prototype=x,x.a3=(function(e){return Wc(this,e)}),x.c=(function(){return Il(this)}),x.cc=(function(e){return Ll(this,e)}),x.cM=(function(e){return!0}),x.f=(function(e){return Y(this,e)}),x.j=(function(){return R().fd(this)}),x.o=(function(){return Eu(this)});function mf(){}x=mf.prototype=new rf,x.constructor=mf;function hf(){}hf.prototype=x,x.c=(function(){return Il(this)});function gf(e){return!!(e&&e.$classData&&e.$classData.n.n)}function _f(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function vf(e,t){return e.bl=t,e}function yf(){this.bl=null}x=yf.prototype=new hf,x.constructor=yf;function bf(){}bf.prototype=x,x.h=(function(e){return this.bl.h(e)}),x.e=(function(){return this.bl.e()}),x.c=(function(){return this.bl.c()});function xf(){this.dh=null,this.di=!1,this.df=null,this.dg=!1,this.fl=null,this.fk=null,this.dj=null,this.dk=!1,Ei(this),xi(this),yi(this),bi(this)}x=xf.prototype=new w,x.constructor=xf,x.hd=(function(){return this.di||=(this.dh=Ts(new Es,`strong`,!1),!0),this.dh}),x.hc=(function(){return this.dg||=(this.df=Ts(new Es,`span`,!1),!0),this.df}),x.hf=(function(){return this.dk||=(this.dj=new ml(this),!0),this.dj}),new E().i(xf,`com.raquo.laminar.api.package$$anon$1`,{bQ:1,c1:1,bU:1,bZ:1,bY:1,c0:1,bW:1,bO:1,bK:1,bN:1,ah:1,ai:1,ag:1,bL:1});function Sf(){}x=Sf.prototype=new hf,x.constructor=Sf;function Cf(){}Cf.prototype=x,x.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.n=(function(){return this.e()}),x.ag=(function(){return`IndexedSeqView`});function wf(e){this.bl=null,vf(this,e)}x=wf.prototype=new bf,x.constructor=wf,x.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.n=(function(){return this.e()}),x.d=(function(){return kd(new jd,this)}),x.ag=(function(){return`IndexedSeqView`}),new E().i(wf,`scala.collection.IndexedSeqView$Id`,{dz:1,dI:1,aA:1,aB:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aM:1,j:1,aJ:1,o:1,aF:1});function Tf(){}x=Tf.prototype=new pf,x.constructor=Tf;function Ef(){}Ef.prototype=x;function Df(e,t){this.cD=null,this.ek=null,this.cD=e,this.ek=t}x=Df.prototype=new Cf,x.constructor=Df,x.h=(function(e){return this.cD.h(e)}),x.e=(function(){return this.cD.v}),x.aC=(function(){return`ArrayBufferView`}),x.d=(function(){return new Jd(this,this.ek)}),new E().i(Df,`scala.collection.mutable.ArrayBufferView`,{dU:1,du:1,aA:1,aB:1,l:1,b:1,c:1,h:1,g:1,f:1,a:1,aM:1,j:1,aJ:1,o:1,aF:1});function Of(e,t){return!Af(t)||e.e()===t.e()}function kf(e,t){if(Af(t)){if(e===t)return!0;var n=e.e(),r=n===t.e();if(r){var i=0,a=e.cL(),o=t.cL(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().H(e.h(i),t.h(i)),i=1+i|0;if(i<n&&r)for(var p=e.d().c6(i),ee=t.d().c6(i);r&&p.i();)r=N().H(p.g(),ee.g())}return r}return Ll(e,t)}function Af(e){return!!(e&&e.$classData&&e.$classData.n.z)}function jf(){}x=jf.prototype=new pf,x.constructor=jf;function Mf(){}Mf.prototype=x;function X(e){this.c0=null,this.c0=e}x=X.prototype=new w,x.constructor=X,x.cR=(function(e){return Rl(this,e)}),x.cM=(function(e){return Of(this,e)}),x.cc=(function(e){return kf(this,e)}),x.cL=(function(){return Po().ei}),x.d=(function(){return kd(new jd,new wf(this))}),x.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.n=(function(){return this.e()}),x.f=(function(e){return Y(this,e)}),x.j=(function(){return R().fd(this)}),x.o=(function(){return Eu(this)}),x.c=(function(){return Il(this)}),x.af=(function(e){bo(this,e)}),x.aD=(function(e,t,n){return xo(this,e,t,n)}),x.b6=(function(e,t,n,r){return Co(this,e,t,n,r)}),x.e=(function(){return this.c0.length|0}),x.h=(function(e){return this.c0[e]}),x.aC=(function(){return`WrappedVarArgs`}),x.b=(function(e){return this.h(e|0)}),x.aS=(function(){return ld()}),new E().i(X,`scala.scalajs.runtime.WrappedVarArgs`,{bm:1,z:1,b:1,c:1,h:1,g:1,f:1,A:1,e:1,k:1,j:1,d:1,i:1,C:1,B:1,o:1,n:1,L:1,D:1,p:1,q:1,a:1});function Nf(){}x=Nf.prototype=new Mf,x.constructor=Nf;function Pf(){}Pf.prototype=x,x.V=(function(e){return Qs(this,e)});function Ff(){}x=Ff.prototype=new Ef,x.constructor=Ff;function If(){}If.prototype=x,x.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.n=(function(){return this.e()}),x.ag=(function(){return`IndexedSeq`}),x.cM=(function(e){return Of(this,e)}),x.cc=(function(e){return kf(this,e)}),x.gM=(function(e){for(var t=new T(this.e()),n=0;n<t.a.length;)t.a[n]=e.b(this.h(n)),n=1+n|0;return Ld().cX(t)}),x.aC=(function(){return`ArraySeq`}),x.aD=(function(e,t,n){var r=this.e(),i=Ja().X(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&so().c4(this.a6(),0,e,t,c),c}),x.cL=(function(){return 2147483647}),x.aS=(function(){return Ld().eh}),x.cR=(function(e){return this.gM(e)});function Z(){}x=Z.prototype=new Mf,x.constructor=Z;function Lf(){}Lf.prototype=x,x.a3=(function(e){var t=this.e();return t===e?0:t<e?-1:1}),x.n=(function(){return this.e()}),x.ag=(function(){return`IndexedSeq`}),x.aC=(function(){return`ArraySeq`}),x.aD=(function(e,t,n){var r=this.e(),i=Ja().X(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&so().c4(this.S(),0,e,t,c),c}),x.f=(function(e){return e instanceof Z&&Ja().X(this.S())!==Ja().X(e.S())?!1:Y(this,e)}),x.aS=(function(){return Ud().ep});function Rf(e){this.an=null,this.an=e}x=Rf.prototype=new If,x.constructor=Rf,x.e=(function(){return this.an.a.length}),x.bA=(function(e){return this.an.a[e]}),x.j=(function(){var e=R();return e.r(this.an,e.p)}),x.f=(function(e){return e instanceof Rf?j().eT(this.an,e.an):Y(this,e)}),x.d=(function(){return new q(this.an)}),x.a6=(function(){return this.an}),x.h=(function(e){return this.bA(e)}),x.b=(function(e){return this.bA(e|0)}),new E().i(Rf,`scala.collection.immutable.ArraySeq$ofBoolean`,{aN:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function zf(e){this.ao=null,this.ao=e}x=zf.prototype=new If,x.constructor=zf,x.e=(function(){return this.ao.a.length}),x.bs=(function(e){return this.ao.a[e]}),x.j=(function(){var e=R();return e.r(this.ao,e.p)}),x.f=(function(e){return e instanceof zf?j().eO(this.ao,e.ao):Y(this,e)}),x.d=(function(){return new q(this.ao)}),x.a6=(function(){return this.ao}),x.h=(function(e){return this.bs(e)}),x.b=(function(e){return this.bs(e|0)}),new E().i(zf,`scala.collection.immutable.ArraySeq$ofByte`,{aO:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Bf(e){this.ab=null,this.ab=e}x=Bf.prototype=new If,x.constructor=Bf,x.e=(function(){return this.ab.a.length}),x.bt=(function(e){return this.ab.a[e]}),x.j=(function(){var e=R();return e.r(this.ab,e.p)}),x.f=(function(e){return e instanceof Bf?j().eP(this.ab,e.ab):Y(this,e)}),x.d=(function(){return new q(this.ab)}),x.b6=(function(e,t,n,r){return new ep(this.ab).b6(e,t,n,r)}),x.a6=(function(){return this.ab}),x.h=(function(e){return Zn(this.bt(e))}),x.b=(function(e){return Zn(this.bt(e|0))}),new E().i(Bf,`scala.collection.immutable.ArraySeq$ofChar`,{aP:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Vf(e){this.ap=null,this.ap=e}x=Vf.prototype=new If,x.constructor=Vf,x.e=(function(){return this.ap.a.length}),x.bu=(function(e){return this.ap.a[e]}),x.j=(function(){var e=R();return e.r(this.ap,e.p)}),x.f=(function(e){if(e instanceof Vf){var t=this.ap,n=e.ap;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Y(this,e)}),x.d=(function(){return new q(this.ap)}),x.a6=(function(){return this.ap}),x.h=(function(e){return this.bu(e)}),x.b=(function(e){return this.bu(e|0)}),new E().i(Vf,`scala.collection.immutable.ArraySeq$ofDouble`,{aQ:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Hf(e){this.aq=null,this.aq=e}x=Hf.prototype=new If,x.constructor=Hf,x.e=(function(){return this.aq.a.length}),x.bv=(function(e){return this.aq.a[e]}),x.j=(function(){var e=R();return e.r(this.aq,e.p)}),x.f=(function(e){if(e instanceof Hf){var t=this.aq,n=e.aq;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Y(this,e)}),x.d=(function(){return new q(this.aq)}),x.a6=(function(){return this.aq}),x.h=(function(e){return this.bv(e)}),x.b=(function(e){return this.bv(e|0)}),new E().i(Hf,`scala.collection.immutable.ArraySeq$ofFloat`,{aR:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Uf(e){this.ar=null,this.ar=e}x=Uf.prototype=new If,x.constructor=Uf,x.e=(function(){return this.ar.a.length}),x.bw=(function(e){return this.ar.a[e]}),x.j=(function(){var e=R();return e.r(this.ar,e.p)}),x.f=(function(e){return e instanceof Uf?j().eQ(this.ar,e.ar):Y(this,e)}),x.d=(function(){return new q(this.ar)}),x.a6=(function(){return this.ar}),x.h=(function(e){return this.bw(e)}),x.b=(function(e){return this.bw(e|0)}),new E().i(Uf,`scala.collection.immutable.ArraySeq$ofInt`,{aS:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Wf(e){this.as=null,this.as=e}x=Wf.prototype=new If,x.constructor=Wf,x.e=(function(){return this.as.a.length>>>1|0}),x.bx=(function(e){var t=this.as.a,n=e<<1;return C(t[n],t[n+1|0])}),x.j=(function(){var e=R();return e.r(this.as,e.p)}),x.f=(function(e){return e instanceof Wf?j().eR(this.as,e.as):Y(this,e)}),x.d=(function(){return new q(this.as)}),x.a6=(function(){return this.as}),x.h=(function(e){return this.bx(e)}),x.b=(function(e){return this.bx(e|0)}),new E().i(Wf,`scala.collection.immutable.ArraySeq$ofLong`,{aT:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Gf(e){this.at=null,this.at=e}x=Gf.prototype=new If,x.constructor=Gf,x.e=(function(){return this.at.a.length}),x.h=(function(e){return this.at.a[e]}),x.j=(function(){var e=R();return e.r(this.at,e.p)}),x.f=(function(e){return e instanceof Gf?so().eU(this.at,e.at):Y(this,e)}),x.d=(function(){return new q(this.at)}),x.a6=(function(){return this.at}),x.b=(function(e){return this.h(e|0)}),new E().i(Gf,`scala.collection.immutable.ArraySeq$ofRef`,{aU:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Kf(e){this.au=null,this.au=e}x=Kf.prototype=new If,x.constructor=Kf,x.e=(function(){return this.au.a.length}),x.by=(function(e){return this.au.a[e]}),x.j=(function(){var e=R();return e.r(this.au,e.p)}),x.f=(function(e){return e instanceof Kf?j().eS(this.au,e.au):Y(this,e)}),x.d=(function(){return new q(this.au)}),x.a6=(function(){return this.au}),x.h=(function(e){return this.by(e)}),x.b=(function(e){return this.by(e|0)}),new E().i(Kf,`scala.collection.immutable.ArraySeq$ofShort`,{aV:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function qf(e){this.aM=null,this.aM=e}x=qf.prototype=new If,x.constructor=qf,x.e=(function(){return this.aM.a.length}),x.bz=(function(e){}),x.j=(function(){var e=R();return e.r(this.aM,e.p)}),x.f=(function(e){return e instanceof qf?this.aM.a.length===e.aM.a.length:Y(this,e)}),x.d=(function(){return new q(this.aM)}),x.a6=(function(){return this.aM}),x.h=(function(e){this.bz(e)}),x.b=(function(e){this.bz(e|0)}),new E().i(qf,`scala.collection.immutable.ArraySeq$ofUnit`,{aW:1,K:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,o:1,n:1,L:1,z:1,p:1,q:1,D:1,O:1,a:1});function Jf(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.c()|0;else{if(!i.c()){var o=1+a|0,s=i.w();a=o,i=s;continue}return-1}}function Yf(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.c(),o=r.c();if(!(a||o)&&N().H(i.I(),r.I())){var s=i.w(),c=r.w();i=s,r=c;continue}return a&&o}}function Xf(){}x=Xf.prototype=new Ef,x.constructor=Xf;function Zf(){}Zf.prototype=x,x.h=(function(e){return Iu(this,e)}),x.cc=(function(e){return Lu(this,e)}),x.ag=(function(){return`LinearSeq`}),x.d=(function(){return new zu(this)}),x.fv=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new Q(e.I(),this),n=t,r=e.w();!r.c();){var i=new Q(r.I(),this);n.aa=i,n=i,r=r.w()}return t}),x.c=(function(){return this===$()}),x.fa=(function(e){if(e instanceof Xf)return this.fv(e);if(e.n()===0)return this;if(e instanceof hp&&this.c())return e.fg();var t=e.d();if(t.i()){for(var n=new Q(t.g(),this),r=n;t.i();){var i=new Q(t.g(),this);r.aa=i,r=i}return n}return this}),x.gN=(function(e){if(this===$())var t=$();else{for(var n=new Q(e.b(this.I()),$()),r=n,i=this.w();i!==$();){var a=new Q(e.b(i.I()),$());r.aa=a,r=a,i=i.w()}var t=n}return t}),x.af=(function(e){for(var t=this;!t.c();)e.b(t.I()),t=t.w()}),x.e=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.w();return t}),x.a3=(function(e){return e<0?1:Jf(this,e,0,this)}),x.aC=(function(){return`List`}),x.f=(function(e){return e instanceof Xf?Yf(this,this,e):Y(this,e)}),x.aS=(function(){return Hu()}),x.cR=(function(e){return this.gN(e)}),x.g8=(function(e){return $d(this,e,this)}),x.b=(function(e){return Iu(this,e|0)});function Qf(e){this.av=null,this.av=e}x=Qf.prototype=new Lf,x.constructor=Qf,x.e=(function(){return this.av.a.length}),x.bA=(function(e){return this.av.a[e]}),x.j=(function(){var e=R();return e.r(this.av,e.p)}),x.f=(function(e){return e instanceof Qf?j().eT(this.av,e.av):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.av)}),x.S=(function(){return this.av}),x.h=(function(e){return this.bA(e)}),x.b=(function(e){return this.bA(e|0)}),new E().i(Qf,`scala.collection.mutable.ArraySeq$ofBoolean`,{b0:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function $f(e){this.aw=null,this.aw=e}x=$f.prototype=new Lf,x.constructor=$f,x.e=(function(){return this.aw.a.length}),x.bs=(function(e){return this.aw.a[e]}),x.j=(function(){var e=R();return e.r(this.aw,e.p)}),x.f=(function(e){return e instanceof $f?j().eO(this.aw,e.aw):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.aw)}),x.S=(function(){return this.aw}),x.h=(function(e){return this.bs(e)}),x.b=(function(e){return this.bs(e|0)}),new E().i($f,`scala.collection.mutable.ArraySeq$ofByte`,{b1:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ep(e){this.M=null,this.M=e}x=ep.prototype=new Lf,x.constructor=ep,x.e=(function(){return this.M.a.length}),x.bt=(function(e){return this.M.a[e]}),x.j=(function(){var e=R();return e.r(this.M,e.p)}),x.f=(function(e){return e instanceof ep?j().eP(this.M,e.M):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.M)}),x.b6=(function(e,t,n,r){var i=e.G;t.length!==0&&(i.m=``+i.m+t);var a=this.M.a.length;if(a!==0){if(n===``)i.fK(this.M);else{i.e();var o=this.M.a[0],s=``+Vn(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.M.a[c],u=``+Vn(l);i.m+=u,c=1+c|0}}}return r.length!==0&&(i.m=``+i.m+r),e}),x.S=(function(){return this.M}),x.h=(function(e){return Zn(this.bt(e))}),x.b=(function(e){return Zn(this.bt(e|0))}),new E().i(ep,`scala.collection.mutable.ArraySeq$ofChar`,{b2:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function tp(e){this.N=null,this.N=e}x=tp.prototype=new Lf,x.constructor=tp,x.e=(function(){return this.N.a.length}),x.bu=(function(e){return this.N.a[e]}),x.j=(function(){var e=R();return e.r(this.N,e.p)}),x.f=(function(e){if(e instanceof tp){var t=e.N;if(this.N===t)return!0;if(this.N.a.length===t.a.length){for(var n=0;n<this.N.a.length&&this.N.a[n]===t.a[n];)n=1+n|0;return n>=this.N.a.length}return!1}return Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.N)}),x.S=(function(){return this.N}),x.h=(function(e){return this.bu(e)}),x.b=(function(e){return this.bu(e|0)}),new E().i(tp,`scala.collection.mutable.ArraySeq$ofDouble`,{b3:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function np(e){this.O=null,this.O=e}x=np.prototype=new Lf,x.constructor=np,x.e=(function(){return this.O.a.length}),x.bv=(function(e){return this.O.a[e]}),x.j=(function(){var e=R();return e.r(this.O,e.p)}),x.f=(function(e){if(e instanceof np){var t=e.O;if(this.O===t)return!0;if(this.O.a.length===t.a.length){for(var n=0;n<this.O.a.length&&this.O.a[n]===t.a[n];)n=1+n|0;return n>=this.O.a.length}return!1}return Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.O)}),x.S=(function(){return this.O}),x.h=(function(e){return this.bv(e)}),x.b=(function(e){return this.bv(e|0)}),new E().i(np,`scala.collection.mutable.ArraySeq$ofFloat`,{b4:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function rp(e){this.ax=null,this.ax=e}x=rp.prototype=new Lf,x.constructor=rp,x.e=(function(){return this.ax.a.length}),x.bw=(function(e){return this.ax.a[e]}),x.j=(function(){var e=R();return e.r(this.ax,e.p)}),x.f=(function(e){return e instanceof rp?j().eQ(this.ax,e.ax):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.ax)}),x.S=(function(){return this.ax}),x.h=(function(e){return this.bw(e)}),x.b=(function(e){return this.bw(e|0)}),new E().i(rp,`scala.collection.mutable.ArraySeq$ofInt`,{b5:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ip(e){this.ay=null,this.ay=e}x=ip.prototype=new Lf,x.constructor=ip,x.e=(function(){return this.ay.a.length>>>1|0}),x.bx=(function(e){var t=this.ay.a,n=e<<1;return C(t[n],t[n+1|0])}),x.j=(function(){var e=R();return e.r(this.ay,e.p)}),x.f=(function(e){return e instanceof ip?j().eR(this.ay,e.ay):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.ay)}),x.S=(function(){return this.ay}),x.h=(function(e){return this.bx(e)}),x.b=(function(e){return this.bx(e|0)}),new E().i(ip,`scala.collection.mutable.ArraySeq$ofLong`,{b6:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function ap(e){this.az=null,this.az=e}x=ap.prototype=new Lf,x.constructor=ap,x.e=(function(){return this.az.a.length}),x.h=(function(e){return this.az.a[e]}),x.j=(function(){var e=R();return e.r(this.az,e.p)}),x.f=(function(e){return e instanceof ap?so().eU(this.az,e.az):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.az)}),x.S=(function(){return this.az}),x.b=(function(e){return this.h(e|0)}),new E().i(ap,`scala.collection.mutable.ArraySeq$ofRef`,{b7:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function op(e){this.aA=null,this.aA=e}x=op.prototype=new Lf,x.constructor=op,x.e=(function(){return this.aA.a.length}),x.by=(function(e){return this.aA.a[e]}),x.j=(function(){var e=R();return e.r(this.aA,e.p)}),x.f=(function(e){return e instanceof op?j().eS(this.aA,e.aA):Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.aA)}),x.S=(function(){return this.aA}),x.h=(function(e){return this.by(e)}),x.b=(function(e){return this.by(e|0)}),new E().i(op,`scala.collection.mutable.ArraySeq$ofShort`,{b8:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function sp(e){this.aN=null,this.aN=e}x=sp.prototype=new Lf,x.constructor=sp,x.e=(function(){return this.aN.a.length}),x.bz=(function(e){}),x.j=(function(){var e=R();return e.r(this.aN,e.p)}),x.f=(function(e){return e instanceof sp?this.aN.a.length===e.aN.a.length:Z.prototype.f.call(this,e)}),x.d=(function(){return new q(this.aN)}),x.S=(function(){return this.aN}),x.h=(function(e){this.bz(e)}),x.b=(function(e){this.bz(e|0)}),new E().i(sp,`scala.collection.mutable.ArraySeq$ofUnit`,{b9:1,M:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,o:1,n:1,F:1,E:1,p:1,q:1,a:1});function Q(e,t){this.cC=null,this.aa=null,this.cC=e,this.aa=t}x=Q.prototype=new Zf,x.constructor=Q,x.bE=(function(){return new wu(this)}),x.aE=(function(){return 2}),x.aG=(function(){return`::`}),x.aF=(function(e){if(e===0)return this.cC;if(e===1)return this.aa;throw lu(new uu,e)}),x.I=(function(){return this.cC}),x.w=(function(){return this.aa}),new E().i(Q,`scala.collection.immutable.$colon$colon`,{dM:1,ab:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aI:1,a1:1,aY:1,aX:1,p:1,q:1,aL:1,D:1,a:1,a2:1,X:1});function cp(){lp=this,$(),$()}x=cp.prototype=new Zf,x.constructor=cp,x.bE=(function(){return new wu(this)}),x.aE=(function(){return 0}),x.aG=(function(){return`Nil`}),x.aF=(function(e){throw lu(new uu,e)}),x.gw=(function(){throw new vu(`head of empty list`)}),x.hi=(function(){throw new gu(`tail of empty list`)}),x.n=(function(){return 0}),x.d=(function(){return Xc().E}),x.I=(function(){this.gw()}),x.w=(function(){this.hi()}),new E().i(cp,`scala.collection.immutable.Nil$`,{dR:1,ab:1,H:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,A:1,C:1,B:1,aI:1,a1:1,aY:1,aX:1,p:1,q:1,aL:1,D:1,a:1,a2:1,X:1});var lp;function $(){return lp||=new cp,lp}function up(e,t){return e.G=t,e}function dp(e){return up(e,new Dl),e}function fp(){this.G=null}x=fp.prototype=new Mf,x.constructor=fp,x.V=(function(e){return Qs(this,e)}),x.d=(function(){return kd(new jd,new wf(this))}),x.a3=(function(e){var t=this.G.e();return t===e?0:t<e?-1:1}),x.ag=(function(){return`IndexedSeq`}),x.e=(function(){return this.G.e()}),x.n=(function(){return this.G.e()}),x.fB=(function(e){var t=this.G,n=``+Vn(e);return t.m+=n,this}),x.o=(function(){return this.G.m}),x.c=(function(){return this.G.e()===0}),x.h=(function(e){return Zn(this.G.eJ(e))}),x.b=(function(e){var t=e|0;return Zn(this.G.eJ(t))}),x.R=(function(e){return this.fB($n(e))}),x.a5=(function(){return this.G.m}),new E().i(fp,`scala.collection.mutable.StringBuilder`,{e6:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,T:1,a3:1,o:1,n:1,F:1,E:1,aa:1,a:1});function pp(e){var t=new hp().cd(e);e.P=t.P,e.ad=t.ad,e.bX=!1}function mp(e){e.bY=1+e.bY|0,e.bX&&pp(e)}function hp(){this.bY=0,this.P=null,this.ad=null,this.bX=!1,this.Q=0,this.bY=0,this.P=$(),this.ad=null,this.bX=!1,this.Q=0}x=hp.prototype=new Pf,x.constructor=hp,x.d=(function(){return new nd(this.P.d(),new el((()=>this.bY)))}),x.h=(function(e){return Iu(this.P,e)}),x.e=(function(){return this.Q}),x.n=(function(){return this.Q}),x.c=(function(){return this.Q===0}),x.fg=(function(){return this.bX=!this.c(),this.P}),x.fG=(function(e){mp(this);var t=new Q(e,$());if(this.Q===0)this.P=t;else{var n=this.ad;n===null&&Ko().b7(),n.aa=t}return this.ad=t,this.Q=1+this.Q|0,this}),x.cd=(function(e){var t=e.d();if(t.i()){var n=1,r=new Q(t.g(),$());for(this.P=r;t.i();){var i=new Q(t.g(),$());r.aa=i,r=i,n=1+n|0}this.Q=n,this.ad=r}return this}),x.fA=(function(e){var t=e.d();if(t.i()){var n=new hp().cd(t);if(mp(this),this.Q===0)this.P=n.P;else{var r=this.ad;r===null&&Ko().b7(),r.aa=n.P}this.ad=n.ad,this.Q=this.Q+n.Q|0}return this}),x.ag=(function(){return`ListBuffer`}),x.aS=(function(){return td()}),x.b=(function(e){var t=e|0;return Iu(this.P,t)}),x.a5=(function(){return this.fg()}),x.R=(function(e){return this.fG(e)}),x.V=(function(e){return this.fA(e)}),new E().i(hp,`scala.collection.mutable.ListBuffer`,{bc:1,ac:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ae:1,ad:1,p:1,q:1,T:1,a3:1,a:1,a2:1});function gp(e,t,n){return e.b4=0,e.ac=t,e.v=n,e}function _p(e){return gp(e,new T(16),0),e}function vp(){this.b4=0,this.ac=null,this.v=0}x=vp.prototype=new Pf,x.constructor=vp,x.d=(function(){return this.hn().d()}),x.a3=(function(e){var t=this.v;return t===e?0:t<e?-1:1}),x.n=(function(){return this.v}),x.eN=(function(e){this.ac=Gu().fc(this.ac,this.v,e)}),x.h=(function(e){var t=1+e|0;if(e<0)throw jo().f3(e,this.v-1|0);if(t>this.v)throw jo().f3(t-1|0,this.v-1|0);return this.ac.a[e]}),x.e=(function(){return this.v}),x.hn=(function(){return new Df(this,new el((()=>this.b4)))}),x.fD=(function(e){this.b4=1+this.b4|0;var t=1+this.v|0;return this.ac.a.length<=(t-1|0)&&this.eN(t),this.v=t,this.ac.a[t-1|0]=e,this}),x.eF=(function(e){if(e instanceof vp){var t=e.v;t>0&&(this.b4=1+this.b4|0,this.eN(this.v+t|0),so().c4(e.ac,0,this.ac,this.v,t),this.v=this.v+t|0)}else Qs(this,e);return this}),x.ag=(function(){return`ArrayBuffer`}),x.aD=(function(e,t,n){var r=this.v,i=Ja().X(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&so().c4(this.ac,0,e,t,c),c}),x.b=(function(e){return this.h(e|0)}),x.aS=(function(){return Gu()}),x.R=(function(e){return this.fD(e)}),x.V=(function(e){return this.eF(e)}),new E().i(vp,`scala.collection.mutable.ArrayBuffer`,{aZ:1,ac:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ae:1,ad:1,o:1,n:1,F:1,E:1,bb:1,p:1,q:1,a:1,a2:1});function yp(e,t){return e.aB=t,e}function bp(e){return yp(e,[]),e}function xp(){this.aB=null}x=xp.prototype=new Pf,x.constructor=xp,x.ag=(function(){return`IndexedSeq`}),x.d=(function(){return kd(new jd,new wf(this))}),x.a3=(function(e){var t=this.aB.length|0;return t===e?0:t<e?-1:1}),x.h=(function(e){return this.aB[e]}),x.e=(function(){return this.aB.length|0}),x.n=(function(){return this.aB.length|0}),x.aC=(function(){return`WrappedArray`}),x.a5=(function(){return this}),x.R=(function(e){return this.aB.push(e),this}),x.b=(function(e){var t=e|0;return this.aB[t]}),x.aS=(function(){return od()}),new E().i(xp,`scala.scalajs.js.WrappedArray`,{et:1,ac:1,t:1,m:1,l:1,b:1,c:1,h:1,g:1,f:1,e:1,k:1,j:1,d:1,i:1,v:1,r:1,u:1,x:1,w:1,Q:1,R:1,ae:1,ad:1,q:1,p:1,E:1,o:1,n:1,F:1,bb:1,T:1,a:1}),ta(new(Cd.r()).C([]));