var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},n=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function r(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&s(t)})}var i=/* @__PURE__ */ new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),a=/* @__PURE__ */ new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),o=e=>{let t=e?.localName;if(!t||!i.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!a.get(n)};function s(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)o(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const c=globalThis,l=c.ShadowRoot&&(c.ShadyCSS===void 0||c.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,u=Symbol(),d=/* @__PURE__ */ new WeakMap;var f=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(l&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=d.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&d.set(t,e))}return e}toString(){return this.cssText}};const p=e=>new f(typeof e==`string`?e:e+``,void 0,u),m=(e,...t)=>new f(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,u),h=(e,t)=>{if(l)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=c.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},g=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return p(t)})(e):e,{is:_,defineProperty:v,getOwnPropertyDescriptor:y,getOwnPropertyNames:b,getOwnPropertySymbols:x,getPrototypeOf:ee}=Object,S=globalThis,te=S.trustedTypes,C=te?te.emptyScript:``,ne=S.reactiveElementPolyfillSupport,re=(e,t)=>e,ie={toAttribute(e,t){
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
switch(t){case Boolean:e=e?C:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},w=(e,t)=>!_(e,t),ae={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:w};Symbol.metadata??=Symbol(`metadata`),S.litPropertyMetadata??=/* @__PURE__ */ new WeakMap;var oe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ae){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&v(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=y(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ae}static _$Ei(){if(this.hasOwnProperty(re(`elementProperties`)))return;let e=ee(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(re(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(re(`properties`))){let e=this.properties,t=[...b(e),...x(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=/* @__PURE__ */ new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(g(e))}else e!==void 0&&t.push(g(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=/* @__PURE__ */ new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=/* @__PURE__ */ new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=/* @__PURE__ */ new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ie:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ie:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??w)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=/* @__PURE__ */ new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=/* @__PURE__ */ new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=/* @__PURE__ */ new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};oe.elementStyles=[],oe.shadowRootOptions={mode:`open`},oe[re(`elementProperties`)]=/* @__PURE__ */ new Map,oe[re(`finalized`)]=/* @__PURE__ */ new Map,ne?.({ReactiveElement:oe}),(S.reactiveElementVersions??=[]).push(`2.1.2`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,T=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+T,pe=`<${fe}>`,me=document,he=()=>me.createComment(``),ge=e=>e===null||typeof e!=`object`&&typeof e!=`function`,_e=Array.isArray,ve=e=>_e(e)||typeof e?.[Symbol.iterator]==`function`,ye=`[ 	
\f\r]`,be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,Se=/>/g,Ce=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),we=/'/g,Te=/"/g,Ee=/^(?:script|style|textarea|title)$/i,De=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Oe=Symbol.for(`lit-noChange`),ke=Symbol.for(`lit-nothing`),Ae=/* @__PURE__ */ new WeakMap,je=me.createTreeWalker(me,129);function Me(e,t){if(!_e(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}const Ne=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=be;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===be?c[1]===`!--`?o=xe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Ce):(Ee.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Ce):o=Se:o===Ce?c[0]===`>`?(o=i??be,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Ce:c[3]===`"`?Te:we):o===Te||o===we?o=Ce:o===xe||o===Se?o=be:(o=Ce,i=void 0);let d=o===Ce&&e[t+1].startsWith(`/>`)?` `:``;a+=o===be?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+T+d):n+T+(l===-2?t:d)}return[Me(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var E=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ne(t,n);if(this.el=e.createElement(l,r),je.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=je.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Re:r[1]===`?`?ze:r[1]===`@`?Be:Le}),i.removeAttribute(e)}else e.startsWith(T)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ee.test(i.tagName)){let e=i.textContent.split(T),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],he()),je.nextNode(),c.push({type:2,index:++a});i.append(e[t],he())}}}else if(i.nodeType===8){if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(T,e+1))!==-1;)c.push({type:7,index:a}),e+=T.length-1}}a++}}static createElement(e,t){let n=me.createElement(`template`);return n.innerHTML=e,n}};function Pe(e,t,n=e,r){if(t===Oe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ge(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Pe(e,i._$AS(e,t.values),i,r)),t}var Fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??me).importNode(t,!0);je.currentNode=r;let i=je.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ie(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ve(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=je.nextNode(),a++)}return je.currentNode=me,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ie=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=ke,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),ge(e)?e===ke||e==null||e===``?(this._$AH!==ke&&this._$AR(),this._$AH=ke):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ve(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ke&&ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=E.createElement(Me(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ae.get(e.strings);return t===void 0&&Ae.set(e.strings,t=new E(e)),t}k(t){_e(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(he()),this.O(he()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=ke,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(/* @__PURE__ */ new String),this.strings=n):this._$AH=ke}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Pe(this,e,t,0),a=!ge(e)||e!==this._$AH&&e!==Oe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Pe(this,r[n+o],t,o),s===Oe&&(s=this._$AH[o]),a||=!ge(s)||s!==this._$AH[o],s===ke?e=ke:e!==ke&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===ke?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Re=class extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ke?void 0:e}},ze=class extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ke)}},Be=class extends Le{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??ke)===Oe)return;let n=this._$AH,r=e===ke&&n!==ke||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==ke&&(n===ke||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ve=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};const He={M:de,P:T,A:fe,C:1,L:Ne,R:Fe,D:ve,V:Pe,I:Ie,H:Le,N:ze,U:Be,B:Re,F:Ve},Ue=se.litHtmlPolyfillSupport;Ue?.(E,Ie),(se.litHtmlVersions??=[]).push(`3.3.3`);const We=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ie(t.insertBefore(he(),e),e,void 0,n??{})}return i._$AI(e),i},Ge=globalThis
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
;var Ke=class extends oe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=We(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};Ke._$litElement$=!0,Ke.finalized=!0,Ge.litElementHydrateSupport?.({LitElement:Ke});const qe=Ge.litElementPolyfillSupport;qe?.({LitElement:Ke}),(Ge.litElementVersions??=[]).push(`4.2.2`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Je=m`
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
`,Ye=m`
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
`,Xe=()=>({checkValidity(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Ze=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Qe=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,et=e=>{
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
throw TypeError(e)},D=(e,t,n,r)=>{for(var i=r>1?void 0:r?$e(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Qe(t,n,i),i},O=(e,t,n)=>t.has(e)||et(`Cannot `+n),tt=(e,t,n)=>(O(e,t,`read from private field`),n?n.call(e):t.get(e)),nt=(e,t,n)=>t.has(e)?et(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),rt=(e,t,n,r)=>(O(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const it=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},at={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:w},ot=(e=at,t,n)=>{
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=/* @__PURE__ */ new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function k(e){return(t,n)=>typeof n==`object`?ot(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function st(e){return k({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ct(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ct(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ut=m`
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
`,dt=/;\s+$/;function ft(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function pt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(dt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var mt,ht=class extends Ke{constructor(){super(),nt(this,mt,!1),this.initialReflectedProperties=/* @__PURE__ */ new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ut,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){tt(this,mt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),rt(this,mt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(this.style)this.style[e]=t;else{let n=pt({property:ft(e),value:t,element:this});n&&this.setAttribute(`style`,n)}}setStyleProperty(e,t){if(this.style)this.style.setProperty(e,t);else{let n=pt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n)}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};mt=/* @__PURE__ */ new WeakMap,D([k()],ht.prototype,`dir`,2),D([k()],ht.prototype,`lang`,2),D([k({type:Boolean,reflect:!0,attribute:`did-ssr`})],ht.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),_t=class extends ht{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Ze))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[gt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){e?(this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)):(this.customError=null,this.setValidity({}))}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};_t.formAssociated=!0,D([k({reflect:!0})],_t.prototype,`name`,2),D([k({type:Boolean})],_t.prototype,`disabled`,2),D([k({state:!0,attribute:!1})],_t.prototype,`valueHasChanged`,2),D([k({state:!0,attribute:!1})],_t.prototype,`hasInteracted`,2),D([k({attribute:`custom-error`,reflect:!0})],_t.prototype,`customError`,2),D([k({attribute:!1,state:!0,type:Object})],_t.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt={small:`s`,medium:`m`,large:`l`},yt=/* @__PURE__ */ new Set;function bt(e,t){t in vt&&!yt.has(`${e}:${t}`)&&(yt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${vt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},St=m`
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
function Ct(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const wt=/* @__PURE__ */ new Set,Tt=/* @__PURE__ */ new Map;let Et,Dt=`ltr`,Ot=`en`;const kt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(kt){let e=new MutationObserver(jt);Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function At(...e){e.map(e=>{let t=e.$code.toLowerCase();Tt.has(t)?Tt.set(t,Object.assign(Object.assign({},Tt.get(t)),e)):Tt.set(t,e),Et||=e}),jt()}function jt(){kt&&(Dt=document.documentElement.dir||`ltr`,Ot=document.documentElement.lang||navigator.language),[...wt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Mt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){wt.add(this.host)}hostDisconnected(){wt.delete(this.host)}dir(){return`${this.host.dir||Dt}`.toLowerCase()}lang(){let e=`${this.host.lang||Ot}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Et?Et.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Tt.get(`${n}-${r}`),a=Tt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Et&&Et[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Et&&Et[e])i=Et[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Nt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;At(Nt);var Pt=Nt,Ft=class extends Mt{lang(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};At(Pt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const It={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Lt=e=>(...t)=>({_$litDirective$:e,values:t});var Rt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const zt=Lt(class extends Rt{constructor(e){if(super(e),e.type!==It.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=/* @__PURE__ */ new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Oe}}),Bt=e=>e??ke,{I:Vt}=He,Ht=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Ut=e=>e.strings===void 0,Wt={},Gt=(e,t=Wt)=>e._$AH=t,Kt=Lt(class extends Rt{constructor(e){
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
if(super(e),e.type!==It.PROPERTY&&e.type!==It.ATTRIBUTE&&e.type!==It.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Ut(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Oe||t===ke)return t;let n=e.element,r=e.name;if(e.type===It.PROPERTY){if(t===n[r])return Oe}else if(e.type===It.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Oe}else if(e.type===It.ATTRIBUTE&&n.getAttribute(r)===t+``)return Oe;return Gt(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var A=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new xt(this,`hint`,`label`),this.localize=new Ft(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Xe()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){e==null?this.setValue(``,null):super.updateFormValue(e)}handleSizeChange(){bt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){r(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return De`
      <label
        part="form-control-label label"
        class=${zt({label:!0,"has-label":n})}
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
          name=${Bt(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Bt(this.placeholder)}
          minlength=${Bt(this.minlength)}
          maxlength=${Bt(this.maxlength)}
          min=${Bt(this.min)}
          max=${Bt(this.max)}
          step=${Bt(this.step)}
          .value=${Kt(this.value??``)}
          autocapitalize=${Bt(this.autocapitalize)}
          autocomplete=${Bt(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Bt(this.pattern)}
          enterkeyhint=${Bt(this.enterkeyhint)}
          inputmode=${Bt(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?De`
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
        ${this.passwordToggle&&!this.disabled?De`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?De`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:De`
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
        class=${zt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};A.css=[St,Ye,Je],A.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},D([lt(`input`)],A.prototype,`input`,2),D([k()],A.prototype,`title`,2),D([k({reflect:!0})],A.prototype,`type`,2),D([st()],A.prototype,`value`,1),D([k({attribute:`value`,reflect:!0})],A.prototype,`defaultValue`,2),D([k({reflect:!0})],A.prototype,`size`,2),D([Ct(`size`)],A.prototype,`handleSizeChange`,1),D([k({reflect:!0})],A.prototype,`appearance`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`pill`,2),D([k()],A.prototype,`label`,2),D([k({attribute:`hint`})],A.prototype,`hint`,2),D([k({attribute:`with-clear`,type:Boolean})],A.prototype,`withClear`,2),D([k()],A.prototype,`placeholder`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`readonly`,2),D([k({attribute:`password-toggle`,type:Boolean})],A.prototype,`passwordToggle`,2),D([k({attribute:`password-visible`,type:Boolean})],A.prototype,`passwordVisible`,2),D([k({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],A.prototype,`withoutSpinButtons`,2),D([k({type:Boolean,reflect:!0})],A.prototype,`required`,2),D([k()],A.prototype,`pattern`,2),D([k({type:Number})],A.prototype,`minlength`,2),D([k({type:Number})],A.prototype,`maxlength`,2),D([k()],A.prototype,`min`,2),D([k()],A.prototype,`max`,2),D([k()],A.prototype,`step`,2),D([k()],A.prototype,`autocapitalize`,2),D([k({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],A.prototype,`autocorrect`,2),D([k()],A.prototype,`autocomplete`,2),D([k({type:Boolean})],A.prototype,`autofocus`,2),D([k()],A.prototype,`enterkeyhint`,2),D([k({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],A.prototype,`spellcheck`,2),D([k()],A.prototype,`inputmode`,2),D([k({attribute:`with-label`,type:Boolean})],A.prototype,`withLabel`,2),D([k({attribute:`with-hint`,type:Boolean})],A.prototype,`withHint`,2),D([Ct(`step`,{waitUntilFirstUpdate:!0})],A.prototype,`handleStepChange`,1),A=D([it(`wa-input`)],A),A.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Jt=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Yt=m`
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
`,Xt=``,Zt=``
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function Qt(){return Xt.replace(/\/$/,``)}function $t(e){Zt=e}function en(){if(!Zt){let e=document.querySelector(`[data-fa-kit-code]`);e&&$t(e.getAttribute(`data-fa-kit-code`)||``)}return Zt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var tn=`7.3.0`;function nn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function rn(e,t,n){let r=nn(e,t,n),i=Qt();if(i)return`${i}/${r}/${e}.svg`;let a=en();return a.length>0?`https://ka-p.fontawesome.com/releases/v${tn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${tn}/svgs/${r}/${e}.svg`}var an={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>rn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function on(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var sn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},cn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=sn[n][e]??sn.regular[e]??sn.regular[`circle-question`];return r?on(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},ln=`classic`,un=[an,cn],dn=/* @__PURE__ */ new Set
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function fn(e){dn.add(e)}function pn(e){dn.delete(e)}function mn(e){return un.find(t=>t.name===e)}function hn(){return ln}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=Symbol(),_n=Symbol(),vn,yn=/* @__PURE__ */ new Map,bn=class extends ht{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=De`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?gn:_n}catch{return _n}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return gn;vn||=new DOMParser;let r=vn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):gn}catch{return gn}}}connectedCallback(){super.connectedCallback(),fn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),pn(this)}async getIconSource(){let e=mn(this.library),t=this.family||hn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?mn(this.library):void 0;if(!e){this.svg=null;return}let r=yn.get(e);r||(r=this.resolveIcon(e,n),yn.set(e,r));let i=await r;if(i===_n&&yn.delete(e),e===(await this.getIconSource()).url){if(Ht(i))this.svg=i;else switch(i){case _n:case gn:this.svg=null,this.dispatchEvent(new qt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Jt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=mn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:De`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};bn.css=Yt,D([st()],bn.prototype,`svg`,2),D([k({reflect:!0})],bn.prototype,`name`,2),D([k({reflect:!0})],bn.prototype,`family`,2),D([k({reflect:!0})],bn.prototype,`variant`,2),D([k({reflect:!0})],bn.prototype,`canvas`,2),D([k({attribute:`auto-width`,type:Boolean,reflect:!0})],bn.prototype,`autoWidth`,2),D([k({attribute:`swap-opacity`,type:Boolean,reflect:!0})],bn.prototype,`swapOpacity`,2),D([k()],bn.prototype,`src`,2),D([k()],bn.prototype,`label`,2),D([k({reflect:!0})],bn.prototype,`library`,2),D([k({type:Number,reflect:!0})],bn.prototype,`rotate`,2),D([k({type:String,reflect:!0})],bn.prototype,`flip`,2),D([k({type:String,reflect:!0})],bn.prototype,`animation`,2),D([Ct(`label`)],bn.prototype,`handleLabelChange`,1),D([Ct([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],bn.prototype,`setIcon`,1),bn=D([it(`wa-icon`)],bn);var xn=/* @__PURE__ */ t({default:()=>A}),Sn=m`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Cn(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>Cn(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return Cn(n,--t)}return t>-1?Cn(e,--t):e.textContent??``}return n.hasChildNodes()?Cn(n.childNodes,--t):``}var wn=class extends ht{constructor(){super(...arguments),this.localize=new Ft(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=Cn(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),ke):De`
      ${e?De`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:De`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};wn.css=Sn,D([lt(`.label`)],wn.prototype,`defaultSlot`,2),D([st()],wn.prototype,`current`,2),D([k({reflect:!0})],wn.prototype,`value`,2),D([k({type:Boolean})],wn.prototype,`disabled`,2),D([k({type:Boolean,attribute:!1})],wn.prototype,`selected`,2),D([k({type:Boolean,attribute:`selected`})],wn.prototype,`defaultSelected`,2),D([k()],wn.prototype,`label`,1),wn=D([it(`wa-option`)],wn);var Tn=/* @__PURE__ */ t({default:()=>wn}),En=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Dn=m`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;const On=Math.min,kn=Math.max,An=Math.round,jn=Math.floor,Mn=e=>({x:e,y:e}),Nn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function Pn(e,t,n){return kn(e,On(t,n))}function Fn(e,t){return typeof e==`function`?e(t):e}function In(e){return e.split(`-`)[0]}function Ln(e){return e.split(`-`)[1]}function Rn(e){return e===`x`?`y`:`x`}function zn(e){return e===`y`?`height`:`width`}function Bn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Vn(e){return Rn(Bn(e))}function Hn(e,t,n){n===void 0&&(n=!1);let r=Ln(e),i=Vn(e),a=zn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Zn(o)),[o,Zn(o)]}function Un(e){let t=Zn(e);return[Wn(e),t,Wn(t)]}function Wn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}const Gn=[`left`,`right`],Kn=[`right`,`left`],qn=[`top`,`bottom`],Jn=[`bottom`,`top`];function Yn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Kn:Gn:t?Gn:Kn;case`left`:case`right`:return t?qn:Jn;default:return[]}}function Xn(e,t,n,r){let i=Ln(e),a=Yn(In(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Wn)))),a}function Zn(e){let t=In(e);return Nn[t]+e.slice(t.length)}function Qn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function $n(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Qn(e)}function er(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function tr(e,t,n){let{reference:r,floating:i}=e,a=Bn(t),o=Vn(t),s=zn(o),c=In(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Ln(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function nr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Fn(t,e),p=$n(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=er(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=er(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const rr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:nr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=tr(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<50&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=tr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},ir=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Fn(e,t)||{};if(l==null)return{};let d=$n(u),f={x:n,y:r},p=Vn(i),m=zn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],x=f[p]-a.reference[p],ee=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),S=ee?ee[y]:0;(!S||!await(o.isElement==null?void 0:o.isElement(ee)))&&(S=s.floating[y]||a.floating[m]);let te=b/2-x/2,C=S/2-h[m]/2-1,ne=On(d[_],C),re=On(d[v],C),ie=S-h[m]-re,w=S/2-h[m]/2+te,ae=Pn(ne,w,ie),oe=!c.arrow&&Ln(i)!=null&&w!==ae&&a.reference[m]/2-(w<ne?ne:re)-h[m]/2<0,se=oe?w<ne?w-ne:w-ie:0;return{[p]:f[p]+se,data:{[p]:ae,centerOffset:w-ae-se,...oe&&{alignmentOffset:se}},reset:oe}}}),ar=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Fn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=In(r),_=Bn(o),v=In(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Zn(o)]:Un(o)),x=p!==`none`;!d&&x&&b.push(...Xn(o,m,p,y));let ee=[o,...b],S=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(S[g]),u){let e=Hn(r,a,y);te.push(S[e[0]],S[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(u!==`alignment`||_===Bn(t)||C.every(e=>Bn(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=Bn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},or=/*#__PURE__*/ new Set([`left`,`top`]);async function sr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=In(n),s=Ln(n),c=Bn(n)===`y`,l=or.has(o)?-1:1,u=a&&c?-1:1,d=Fn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const cr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await sr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},lr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Fn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Bn(i),p=Rn(f),m=u[p],h=u[f],g=(e,t)=>Pn(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}},ur=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){let{placement:n,rects:r,platform:i,elements:a}=t,{apply:o=()=>{},...s}=Fn(e,t),c=await i.detectOverflow(t,s),l=In(n),u=Ln(n),d=Bn(n)===`y`,{width:f,height:p}=r.floating,m,h;l===`top`||l===`bottom`?(m=l,h=u===(await(i.isRTL==null?void 0:i.isRTL(a.floating))?`start`:`end`)?`left`:`right`):(h=l,m=u===`end`?`top`:`bottom`);let g=p-c.top-c.bottom,_=f-c.left-c.right,v=On(p-c[m],g),y=On(f-c[h],_),b=t.middlewareData.shift,x=!b,ee=v,S=y;b!=null&&b.enabled.x&&(S=_),b!=null&&b.enabled.y&&(ee=g),x&&!u&&(d?S=f-2*kn(c.left,c.right):ee=p-2*kn(c.top,c.bottom)),await o({...t,availableWidth:S,availableHeight:ee});let te=await i.getDimensions(a.floating);return f!==te.width||p!==te.height?{reset:{rects:!0}}:{}}}};function dr(){return typeof window<`u`}function fr(e){return hr(e)?(e.nodeName||``).toLowerCase():`#document`}function pr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function mr(e){return((hr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function hr(e){return dr()?e instanceof Node||e instanceof pr(e).Node:!1}function gr(e){return dr()?e instanceof Element||e instanceof pr(e).Element:!1}function _r(e){return dr()?e instanceof HTMLElement||e instanceof pr(e).HTMLElement:!1}function vr(e){return!dr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof pr(e).ShadowRoot}function yr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ar(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function br(e){return/^(table|td|th)$/.test(fr(e))}function xr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}const Sr=/transform|translate|scale|rotate|perspective|filter/,Cr=/paint|layout|strict|content/,wr=e=>!!e&&e!==`none`;let Tr;function Er(e){let t=gr(e)?Ar(e):e;return wr(t.transform)||wr(t.translate)||wr(t.scale)||wr(t.rotate)||wr(t.perspective)||!Or()&&(wr(t.backdropFilter)||wr(t.filter))||Sr.test(t.willChange||``)||Cr.test(t.contain||``)}function Dr(e){let t=Mr(e);for(;_r(t)&&!kr(t);){if(Er(t))return t;if(xr(t))return null;t=Mr(t)}return null}function Or(){return Tr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Tr}function kr(e){return/^(html|body|#document)$/.test(fr(e))}function Ar(e){return pr(e).getComputedStyle(e)}function jr(e){return gr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Mr(e){if(fr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||vr(e)&&e.host||mr(e);return vr(t)?t.host:t}function Nr(e){let t=Mr(e);return kr(t)?(e.ownerDocument||e).body:_r(t)&&yr(t)?t:Nr(t)}function Pr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Nr(e),i=r===e.ownerDocument?.body,a=pr(r);if(i){let e=Fr(a);return t.concat(a,a.visualViewport||[],yr(r)?r:[],e&&n?Pr(e):[])}return t.concat(r,Pr(r,[],n))}function Fr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ir(e){let t=Ar(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=_r(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=An(n)!==a||An(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Lr(e){return gr(e)?e:e.contextElement}function Rr(e){let t=Lr(e);if(!_r(t))return Mn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ir(t),o=(a?An(n.width):n.width)/r,s=(a?An(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const zr=/*#__PURE__*/ Mn(0);function Br(e){let t=pr(e);return!Or()||!t.visualViewport?zr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Vr(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===pr(e)}function Hr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Lr(e),o=Mn(1);t&&(r?gr(r)&&(o=Rr(r)):o=Rr(e));let s=Vr(a,n,r)?Br(a):Mn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=pr(a),t=gr(r)?pr(r):r,n=e,i=Fr(n);for(;i&&t!==n;){let e=Rr(i),t=i.getBoundingClientRect(),r=Ar(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=pr(i),i=Fr(n)}}return er({width:u,height:d,x:c,y:l})}function Ur(e,t){let n=jr(e).scrollLeft;return t?t.left+n:Hr(mr(e)).left+n}function Wr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Ur(e,n),y:n.top+t.scrollTop}}function Gr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=mr(r),s=t?xr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Mn(1),u=Mn(0),d=_r(r);if((d||!a)&&((fr(r)!==`body`||yr(o))&&(c=jr(r)),d)){let e=Hr(r);l=Rr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Wr(o,c):Mn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Kr(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function qr(e){let t=jr(e),n=e.ownerDocument.body,r=kn(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=kn(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Ur(e),o=-t.scrollTop;return Ar(n).direction===`rtl`&&(a+=kn(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Jr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=pr(e),a=mr(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Or()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Ur(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=25&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Yr(e,t){let n=Hr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Rr(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Xr(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Jr(e,n,t);else if(t===`document`)r=qr(mr(e));else if(gr(t))r=Yr(t,n);else{let n=Br(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return er(r)}function Zr(e,t){let n=t.get(e);if(n)return n;let r=Pr(e,[],!1).filter(e=>gr(e)&&fr(e)!==`body`),i=null,a=Ar(e).position===`fixed`,o=a?Mr(e):e;for(;gr(o)&&!kr(o);){let e=Ar(o),t=Er(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Mr(o)}return t.set(e,r),r}function Qr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?xr(t)?[]:Zr(t,this._c):[].concat(n),r],o=Xr(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Xr(t,a[e],i);s=kn(n.top,s),c=On(n.right,c),l=On(n.bottom,l),u=kn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function $r(e){let{width:t,height:n}=Ir(e);return{width:t,height:n}}function ei(e,t,n){let r=_r(t),i=mr(t),a=n===`fixed`,o=Hr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Mn(0);if((r||!a)&&((fr(t)!==`body`||yr(i))&&(s=jr(t)),r)){let e=Hr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Ur(i));let l=i&&!r&&!a?Wr(i,s):Mn(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ti(e){return Ar(e).position===`static`}function ni(e,t){if(!_r(e)||Ar(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return mr(e)===n&&(n=n.ownerDocument.body),n}function ri(e,t){let n=pr(e);if(xr(e))return n;if(!_r(e)){let t=Mr(e);for(;t&&!kr(t);){if(gr(t)&&!ti(t))return t;t=Mr(t)}return n}let r=ni(e,t);for(;r&&br(r)&&ti(r);)r=ni(r,t);return r&&kr(r)&&ti(r)&&!Er(r)?n:r||Dr(e)||n}const ii=async function(e){let t=this.getOffsetParent||ri,n=this.getDimensions,r=await n(e.floating);return{reference:ei(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function ai(e){return Ar(e).direction===`rtl`}const oi={convertOffsetParentRelativeRectToViewportRelativeRect:Gr,getDocumentElement:mr,getClippingRect:Qr,getOffsetParent:ri,getElementRects:ii,getClientRects:Kr,getDimensions:$r,getScale:Rr,isElement:gr,isRTL:ai};function si(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ci(e,t,n){let r=null,i,a=mr(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=jn(d),h=jn(a.clientWidth-(u+f)),g=jn(a.clientHeight-(d+p)),_=jn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:kn(0,On(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!si(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=pr(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function li(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Lr(e),u=i||a?[...l?Pr(l):[],...t?Pr(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ci(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Hr(e):null;c&&g();function g(){let t=Hr(e);h&&!si(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ui=cr,di=lr,fi=ar,pi=ur,mi=ir,hi=(e,t,n)=>{let r=/* @__PURE__ */ new Map,i=n??{},a={...oi,...i.platform,_c:r};return rr(e,t,{...i,platform:a})};function gi(e){return vi(e)}function _i(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function vi(e){for(let t=e;t;t=_i(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=_i(e);t;t=_i(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Er(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function yi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var bi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),xi=class extends ht{constructor(){super(...arguments),this.localize=new Ft(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=bi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==`string`){let e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchorEl=this.anchor instanceof Element||yi(this.anchor)?this.anchor:this.querySelector(`[slot="anchor"]`);this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&this.active&&this.isConnected&&(this.popup?.showPopover?.(),this.cleanup=li(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[ui({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(pi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!yi(this.anchor)&&this.boundary===`scroll`&&(t=Pr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(fi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(di({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(pi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(mi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>oi.getOffsetParent(e,gi):oi.getOffsetParent;hi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...oi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new En)}render(){return De`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${zt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${zt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?De`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};xi.css=Dn,D([lt(`.popup`)],xi.prototype,`popup`,2),D([lt(`.arrow`)],xi.prototype,`arrowEl`,2),D([k({attribute:!1,type:Boolean})],xi.prototype,`SUPPORTS_POPOVER`,2),D([k()],xi.prototype,`anchor`,2),D([k({type:Boolean,reflect:!0})],xi.prototype,`active`,2),D([k({reflect:!0})],xi.prototype,`placement`,2),D([k()],xi.prototype,`boundary`,2),D([k({type:Number})],xi.prototype,`distance`,2),D([k({type:Number})],xi.prototype,`skidding`,2),D([k({type:Boolean})],xi.prototype,`arrow`,2),D([k({attribute:`arrow-placement`})],xi.prototype,`arrowPlacement`,2),D([k({attribute:`arrow-padding`,type:Number})],xi.prototype,`arrowPadding`,2),D([k({type:Boolean})],xi.prototype,`flip`,2),D([k({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],xi.prototype,`flipFallbackPlacements`,2),D([k({attribute:`flip-fallback-strategy`})],xi.prototype,`flipFallbackStrategy`,2),D([k({type:Object})],xi.prototype,`flipBoundary`,2),D([k({attribute:`flip-padding`,type:Number})],xi.prototype,`flipPadding`,2),D([k({type:Boolean})],xi.prototype,`shift`,2),D([k({type:Object})],xi.prototype,`shiftBoundary`,2),D([k({attribute:`shift-padding`,type:Number})],xi.prototype,`shiftPadding`,2),D([k({attribute:`auto-size`})],xi.prototype,`autoSize`,2),D([k()],xi.prototype,`sync`,2),D([k({type:Object})],xi.prototype,`autoSizeBoundary`,2),D([k({attribute:`auto-size-padding`,type:Number})],xi.prototype,`autoSizePadding`,2),D([k({attribute:`hover-bridge`,type:Boolean})],xi.prototype,`hoverBridge`,2),xi=D([it(`wa-popup`)],xi);var Si=/* @__PURE__ */ t({default:()=>xi}),Ci=m`
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
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function wi(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Ti(e,t,n=`vertical`,r=`smooth`){let i=wi(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ei=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Di=class extends Event{constructor(e){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Oi=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},ki=class extends Event{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Ai=[]
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;function ji(e){Mi(e),Ai.push(e)}function Mi(e){for(let t=Ai.length-1;t>=0;t--)if(Ai[t]===e){Ai.splice(t,1);break}}function Ni(e){return Ai.length>0&&Ai[Ai.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pi=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Fi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ii(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Li=class extends Rt{constructor(e){if(super(e),this.it=ke,e.type!==It.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===ke||e==null)return this._t=void 0,this.it=e;if(e===Oe)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Li.directiveName=`unsafeHTML`,Li.resultType=1;const Ri=Lt(Li);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zi=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new xt(this,`hint`,`label`),this.localize=new Ft(this),this.selectionOrder=/* @__PURE__ */ new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>De`
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
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&Ni(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}else{if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[Pi({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){bt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),ji(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),Mi(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&Ti(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){e.selected=t===!0||t===!1?t:!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}if(this.multiple)this.displayLabel=this.placeholder&&!this.value?.length?``:this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.displayLabel=e?.label??``}this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Ri(n):n:null}return t===this.maxOptionsVisible?De`
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
        `:null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Ii(this.popup.popup,`show`),this.currentOption&&Ti(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new ki)}else{let e=new Di;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Ii(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Oi)}}async show(){if(this.open||this.disabled)this.open=!1;else return this.open=!0,Fi(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled)this.open=!1;else return this.open=!1,Fi(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return De`
      <div
        part="form-control"
        class=${zt({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${zt({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${zt({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
              ${this.multiple&&this.hasUpdated?De`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?De`
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
          class=${zt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};zi.css=[Ci,Ye,St],D([lt(`.select`)],zi.prototype,`popup`,2),D([lt(`.combobox`)],zi.prototype,`combobox`,2),D([lt(`.display-input`)],zi.prototype,`displayInput`,2),D([lt(`.value-input`)],zi.prototype,`valueInput`,2),D([lt(`.listbox`)],zi.prototype,`listbox`,2),D([st()],zi.prototype,`displayLabel`,2),D([st()],zi.prototype,`currentOption`,2),D([st()],zi.prototype,`selectedOptions`,2),D([k({reflect:!0})],zi.prototype,`name`,2),D([k({attribute:!1})],zi.prototype,`defaultValue`,1),D([k({attribute:`value`,reflect:!1})],zi.prototype,`value`,1),D([k({reflect:!0})],zi.prototype,`size`,2),D([Ct(`size`)],zi.prototype,`handleSizeChange`,1),D([k()],zi.prototype,`placeholder`,2),D([k({type:Boolean,reflect:!0})],zi.prototype,`multiple`,2),D([k({attribute:`max-options-visible`,type:Number})],zi.prototype,`maxOptionsVisible`,2),D([k({type:Boolean})],zi.prototype,`disabled`,2),D([k({attribute:`with-clear`,type:Boolean})],zi.prototype,`withClear`,2),D([k({type:Boolean,reflect:!0})],zi.prototype,`open`,2),D([k({reflect:!0})],zi.prototype,`appearance`,2),D([k({type:Boolean,reflect:!0})],zi.prototype,`pill`,2),D([k()],zi.prototype,`label`,2),D([k({reflect:!0})],zi.prototype,`placement`,2),D([k({attribute:`hint`})],zi.prototype,`hint`,2),D([k({attribute:`with-label`,type:Boolean})],zi.prototype,`withLabel`,2),D([k({attribute:`with-hint`,type:Boolean})],zi.prototype,`withHint`,2),D([k({type:Boolean,reflect:!0})],zi.prototype,`required`,2),D([k({attribute:!1})],zi.prototype,`getTag`,2),D([Ct(`disabled`,{waitUntilFirstUpdate:!0})],zi.prototype,`handleDisabledChange`,1),D([Ct(`value`,{waitUntilFirstUpdate:!0})],zi.prototype,`handleValueChange`,1),D([Ct(`open`,{waitUntilFirstUpdate:!0})],zi.prototype,`handleOpenChange`,1),zi=D([it(`wa-select`)],zi),zi.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bi=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Vi=m`
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
`,Hi=m`
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
`,Ui=class extends ht{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Ft(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){bt(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Bi)}render(){return De`
      <slot part="content" class="content"></slot>

      ${this.withRemove?De`
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
    `}};Ui.css=[Vi,Hi,St],D([k({reflect:!0})],Ui.prototype,`variant`,2),D([k({reflect:!0})],Ui.prototype,`appearance`,2),D([k({reflect:!0})],Ui.prototype,`size`,2),D([Ct(`size`)],Ui.prototype,`handleSizeChange`,1),D([k({type:Boolean,reflect:!0})],Ui.prototype,`pill`,2),D([k({attribute:`with-remove`,type:Boolean})],Ui.prototype,`withRemove`,2),Ui=D([it(`wa-tag`)],Ui);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wi=m`
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
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Gi=Symbol.for(``),Ki=e=>{if(e?.r===Gi)return e?._$litStatic$},qi=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Gi}),Ji=/* @__PURE__ */ new Map,Yi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],(i=Ki(a))!==void 0);)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ji.get(e))===void 0&&(o.raw=o,Ji.set(e,t=o)),n=s}return e(t,...n)})(De);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xi=class extends _t{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new xt(this,`[default]`,`start`,`end`),this.localize=new Ft(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Xe()]}handleSizeChange(){bt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Ze)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?qi`a`:qi`button`;return Yi`
      <${t}
        part="base button"
        class=${zt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Bt(e?void 0:this.disabled)}
        type=${Bt(e?void 0:this.type)}
        title=${this.title}
        name=${Bt(e?void 0:this.name)}
        value=${Bt(e?void 0:this.value)}
        href=${Bt(e?this.href:void 0)}
        target=${Bt(e?this.target:void 0)}
        download=${Bt(e?this.download:void 0)}
        rel=${Bt(e&&this.rel?this.rel:void 0)}
        role=${Bt(e?void 0:`button`)}
        aria-disabled=${Bt(e&&this.disabled?`true`:void 0)}
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
    `}};Xi.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},Xi.css=[Wi,Hi,St],D([lt(`.button`)],Xi.prototype,`button`,2),D([lt(`slot:not([name])`)],Xi.prototype,`labelSlot`,2),D([st()],Xi.prototype,`invalid`,2),D([st()],Xi.prototype,`isIconButton`,2),D([k()],Xi.prototype,`title`,2),D([k({reflect:!0})],Xi.prototype,`variant`,2),D([k({reflect:!0})],Xi.prototype,`appearance`,2),D([k({reflect:!0})],Xi.prototype,`size`,2),D([Ct(`size`)],Xi.prototype,`handleSizeChange`,1),D([k({attribute:`with-caret`,type:Boolean,reflect:!0})],Xi.prototype,`withCaret`,2),D([k({attribute:`with-start`,type:Boolean})],Xi.prototype,`withStart`,2),D([k({attribute:`with-end`,type:Boolean})],Xi.prototype,`withEnd`,2),D([k({type:Boolean})],Xi.prototype,`disabled`,2),D([k({type:Boolean,reflect:!0})],Xi.prototype,`loading`,2),D([k({type:Boolean,reflect:!0})],Xi.prototype,`pill`,2),D([k()],Xi.prototype,`type`,2),D([k({reflect:!0})],Xi.prototype,`name`,2),D([k({reflect:!0})],Xi.prototype,`value`,2),D([k({reflect:!0})],Xi.prototype,`href`,2),D([k()],Xi.prototype,`target`,2),D([k()],Xi.prototype,`rel`,2),D([k()],Xi.prototype,`download`,2),D([k({attribute:`formaction`})],Xi.prototype,`formAction`,2),D([k({attribute:`formenctype`})],Xi.prototype,`formEnctype`,2),D([k({attribute:`formmethod`})],Xi.prototype,`formMethod`,2),D([k({attribute:`formnovalidate`,type:Boolean})],Xi.prototype,`formNoValidate`,2),D([k({attribute:`formtarget`})],Xi.prototype,`formTarget`,2),D([Ct(`disabled`,{waitUntilFirstUpdate:!0})],Xi.prototype,`handleDisabledChange`,1),D([Ct(`href`)],Xi.prototype,`handleHrefChange`,1),D([Ct(`loading`,{waitUntilFirstUpdate:!0})],Xi.prototype,`handleLoadingChange`,1),Xi=D([it(`wa-button`)],Xi),Xi.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zi=m`
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
`,Qi=class extends ht{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.localize=new Ft(this)}render(){return De`
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
    `}};Qi.css=Zi,Qi=D([it(`wa-spinner`)],Qi);var $i=/* @__PURE__ */ t({default:()=>zi}),ea=m`
  :host {
    --track-size: 0.5em;
    --thumb-width: 1.4em;
    --thumb-height: 1.4em;
    --marker-width: 0.1875em;
    --marker-height: 0.1875em;
  }

  :host([orientation='vertical']) {
    width: auto;
  }

  #label:has(~ .vertical) {
    display: block;
    order: 2;
    max-width: none;
    text-align: center;
  }

  #description:has(~ .vertical) {
    order: 3;
    text-align: center;
  }

  /* Add extra space between slider and label, when present */
  #label.has-label ~ #slider {
    &.horizontal {
      margin-block-start: 0.5em;
    }
    &.vertical {
      margin-block-end: 0.5em;
    }
  }

  #slider {
    touch-action: none;

    &:focus {
      outline: none;
    }

    &:focus-visible:not(.disabled) #thumb,
    &:focus-visible:not(.disabled) #thumb-min,
    &:focus-visible:not(.disabled) #thumb-max {
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  #track {
    position: relative;
    border-radius: 9999px;
    background: var(--wa-color-neutral-fill-normal);
    isolation: isolate;
  }

  /* Orientation */
  .horizontal #track {
    height: var(--track-size);
  }

  .vertical #track {
    order: 1;
    width: var(--track-size);
    height: 200px;
  }

  /* Disabled */
  .disabled #track {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Indicator */
  #indicator {
    position: absolute;
    border-radius: inherit;
    background-color: var(--wa-form-control-activated-color);

    &:dir(ltr) {
      right: calc(100% - max(var(--start), var(--end)));
      left: min(var(--start), var(--end));
    }

    &:dir(rtl) {
      right: min(var(--start), var(--end));
      left: calc(100% - max(var(--start), var(--end)));
    }
  }

  .horizontal #indicator {
    top: 0;
    height: 100%;
  }

  .vertical #indicator {
    top: calc(100% - var(--end));
    bottom: var(--start);
    left: 0;
    width: 100%;
  }

  /* Thumbs */
  #thumb,
  #thumb-min,
  #thumb-max {
    z-index: 3;
    position: absolute;
    width: var(--thumb-width);
    height: var(--thumb-height);
    border: solid 0.125em var(--wa-color-surface-default);
    border-radius: 50%;
    background-color: var(--wa-form-control-activated-color);
    cursor: pointer;
  }

  .disabled #thumb,
  .disabled #thumb-min,
  .disabled #thumb-max {
    cursor: inherit;
  }

  .horizontal #thumb,
  .horizontal #thumb-min,
  .horizontal #thumb-max {
    top: calc(50% - var(--thumb-height) / 2);

    &:dir(ltr) {
      right: auto;
      left: calc(var(--position) - var(--thumb-width) / 2);
    }

    &:dir(rtl) {
      right: calc(var(--position) - var(--thumb-width) / 2);
      left: auto;
    }
  }

  .vertical #thumb,
  .vertical #thumb-min,
  .vertical #thumb-max {
    bottom: calc(var(--position) - var(--thumb-height) / 2);
    left: calc(50% - var(--thumb-width) / 2);
  }

  /* Range-specific thumb styles */
  :host([range]) {
    #thumb-min:focus-visible,
    #thumb-max:focus-visible {
      z-index: 4; /* Ensure focused thumb appears on top */
      outline: var(--wa-focus-ring);
      /* intentionally no offset due to border */
    }
  }

  /* Markers */
  #markers {
    pointer-events: none;
  }

  .marker {
    z-index: 2;
    position: absolute;
    width: var(--marker-width);
    height: var(--marker-height);
    border-radius: 50%;
    background-color: var(--wa-color-surface-default);
  }

  .marker:first-of-type,
  .marker:last-of-type {
    display: none;
  }

  .horizontal .marker {
    top: calc(50% - var(--marker-height) / 2);
    left: calc(var(--position) - var(--marker-width) / 2);
  }

  .vertical .marker {
    top: calc(var(--position) - var(--marker-height) / 2);
    left: calc(50% - var(--marker-width) / 2);
  }

  /* Marker labels */
  #references {
    position: relative;

    slot {
      display: flex;
      justify-content: space-between;
      height: 100%;
    }

    ::slotted(*) {
      color: var(--wa-color-text-quiet);
      font-size: 0.875em;
      line-height: 1;
    }
  }

  .horizontal {
    #references {
      margin-block-start: 0.5em;
    }
  }

  .vertical {
    display: flex;
    margin-inline: auto;

    #track {
      order: 1;
    }

    #references {
      order: 2;
      width: min-content;
      margin-inline-start: 0.75em;

      slot {
        flex-direction: column;
      }
    }
  }

  .vertical #references slot {
    flex-direction: column;
  }
`
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*ta(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*ta(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var na=typeof window<`u`&&`ontouchstart`in window,ra=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=e=>{let t=`touches`in e?e.touches[0].clientX:e.clientX,n=`touches`in e?e.touches[0].clientY:e.clientY;this.isDragging||!na&&e.buttons>1||(this.isDragging=!0,document.addEventListener(`pointerup`,this.handleDragStop),document.addEventListener(`pointermove`,this.handleDragMove),document.addEventListener(`pointercancel`,this.handleDragStop),document.addEventListener(`touchend`,this.handleDragStop),document.addEventListener(`touchmove`,this.handleDragMove),document.addEventListener(`touchcancel`,this.handleDragStop),this.options.start(t,n))},this.handleDragStop=e=>{let t=`changedTouches`in e?e.changedTouches[0].clientX:e.clientX,n=`changedTouches`in e?e.changedTouches[0].clientY:e.clientY;this.isDragging=!1,document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`pointercancel`,this.handleDragStop),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),document.removeEventListener(`touchcancel`,this.handleDragStop),this.options.stop(t,n)},this.handleDragMove=e=>{let t=`touches`in e?e.touches[0].clientX:e.clientX,n=`touches`in e?e.touches[0].clientY:e.clientY;window.getSelection()?.removeAllRanges(),this.options.move(t,n)},this.element=e,this.options={start:()=>void 0,stop:()=>void 0,move:()=>void 0,...t},this.start()}start(){this.isActive||=(this.element.addEventListener(`pointerdown`,this.handleDragStart),na&&this.element.addEventListener(`touchstart`,this.handleDragStart),!0)}stop(){document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`pointercancel`,this.handleDragStop),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),document.removeEventListener(`touchcancel`,this.handleDragStop),this.element.removeEventListener(`pointerdown`,this.handleDragStart),na&&this.element.removeEventListener(`touchstart`,this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e===void 0?!this.isActive:e)?this.start():this.stop()}};let ia=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function aa(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function oa(e=``){return`${e}${ia()}`}
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const sa=Lt(class extends Rt{constructor(e){if(super(e),e.type!==It.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?`important`:``):n[e]=r}}return Oe}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ca(e,t,n){let r=(e-t)/n;return Math.abs(r-Math.round(r))>1e-9}var la=()=>({observedAttributes:[`min`,`max`,`step`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]},n=(e,t,n,r)=>{if(typeof document>`u`)return``;let i=document.createElement(`input`);return i.type=`range`,i.min=String(t),i.max=String(n),i.step=String(r),i.value=String(e),i.checkValidity(),i.validationMessage};if(e.isRange){let r=e.minValue,i=e.maxValue;if(r<e.min)return t.isValid=!1,t.invalidKeys.push(`rangeUnderflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(i>e.max)return t.isValid=!1,t.invalidKeys.push(`rangeOverflow`),t.message=n(i,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;if(e.step&&e.step!==1){let a=ca(r,e.min,e.step),o=ca(i,e.min,e.step);if(a||o)return t.isValid=!1,t.invalidKeys.push(`stepMismatch`),t.message=n(a?r:i,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,t}}else{let r=e.value;if(r<e.min)return t.isValid=!1,t.invalidKeys.push(`rangeUnderflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(r>e.max)return t.isValid=!1,t.invalidKeys.push(`rangeOverflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;if(e.step&&e.step!==1&&ca(r,e.min,e.step))return t.isValid=!1,t.invalidKeys.push(`stepMismatch`),t.message=n(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,t}return t}}),j=class extends _t{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new xt(this,`hint`,`label`),this.localize=new Ft(this),this.activeThumb=null,this.lastTrackPosition=null,this.label=``,this.hint=``,this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute(`value`)==null?this.minValue:Number(this.getAttribute(`value`)),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation=`horizontal`,this.size=`m`,this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement=`top`,this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,la()]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?aa(this._value??this.minValue??0,this.min,this.max):aa(this._value??this.defaultValue,this.min,this.max)}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}handleSizeChange(){bt(this.localName,this.size)}firstUpdated(e){super.firstUpdated(e),this.isRange?(this.draggableThumbMin=new ra(this.thumbMin,{start:()=>{this.activeThumb=`min`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`min`)},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ra(this.thumbMax,{start:()=>{this.activeThumb=`max`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`max`)},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ra(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue;else{let n=this.getValueFromCoordinates(e,t),r=Math.abs(n-this.minValue),i=Math.abs(n-this.maxValue);if(r===i){if(n>this.maxValue)this.activeThumb=`max`;else if(n<this.minValue)this.activeThumb=`min`;else{let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,i=r?t:e,a=this.lastTrackPosition||i;this.lastTrackPosition=i;let o=i>a!==n&&!r||i<a&&r;this.activeThumb=o?`max`:`min`}}else this.activeThumb=r<=i?`min`:`max`;this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue}this.customStates.set(`dragging`,!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb===`min`?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ra(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set(`dragging`,!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(e){this.isRange&&(e.has(`minValue`)||e.has(`maxValue`)||e.has(`min`)||e.has(`max`))&&(this.minValue=aa(this.minValue,this.min,this.maxValue),this.maxValue=aa(this.maxValue,this.minValue,this.max)),super.willUpdate(e)}updated(e){if(this.isRange&&(e.has(`minValue`)||e.has(`maxValue`))&&this.updateFormValue(),e.has(`disabled`)||e.has(`readonly`)){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute(`min-value`)??String(this.min)),this.maxValue=parseFloat(this.getAttribute(`max-value`)??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute(`value`)??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){let t=(String(this.step).split(`.`)[1]||``).replace(/0+$/g,``).length,n=Number(this.step),r=Number(this.min),i=Number(this.max);return e=Math.round(e/n)*n,e=aa(e,r,i),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,{top:i,right:a,bottom:o,left:s,height:c,width:l}=this.trackBoundingClientRect,u=r?t:e,d=r?{start:i,end:o,size:c}:{start:s,end:a,size:l},f=(r||n?d.end-u:u-d.start)/d.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*f)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;e!==this.thumbMin&&e!==this.thumbMax&&this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set(`focused`,!1),this.dispatchEvent(new FocusEvent(`blur`,{bubbles:!0,composed:!0}))}handleFocus(e){let t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb=`min`:t===this.thumbMax&&(this.activeThumb=`max`),this.showRangeTooltips()):this.showTooltip(),this.customStates.set(`focused`,!0),this.dispatchEvent(new FocusEvent(`focus`,{bubbles:!0,composed:!0}))}handleKeyDown(e){let t=this.localize.dir()===`rtl`,n=e.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb=`min`:n===this.thumbMax&&(this.activeThumb=`max`),!this.activeThumb))return;let i=this.isRange?this.activeThumb===`min`?this.minValue:this.maxValue:this.value,a=i;switch(e.key){case`ArrowUp`:case t?`ArrowLeft`:`ArrowRight`:e.preventDefault(),a=this.clampAndRoundToStep(i+this.step);break;case`ArrowDown`:case t?`ArrowRight`:`ArrowLeft`:e.preventDefault(),a=this.clampAndRoundToStep(i-this.step);break;case`Home`:e.preventDefault(),a=this.isRange&&this.activeThumb===`min`?this.min:this.isRange?this.minValue:this.min;break;case`End`:e.preventDefault(),a=this.isRange&&this.activeThumb===`max`?this.max:this.isRange?this.maxValue:this.max;break;case`PageUp`:e.preventDefault();let n=Math.max(i+(this.max-this.min)/10,i+this.step);a=this.clampAndRoundToStep(n);break;case`PageDown`:e.preventDefault();let o=Math.min(i-(this.max-this.min)/10,i-this.step);a=this.clampAndRoundToStep(o);break;case`Enter`:r(e,this);return}a!==i&&(this.isRange?(this.activeThumb===`min`?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=aa(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){let n=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,n){let r=this.getValueFromCoordinates(e,t),i=n===`min`?this.minValue:this.maxValue;n===`min`?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),i!==(n===`min`?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);this.activeThumb===`min`?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb===`max`&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(e){if(this.isRange){let e=new FormData;e.append(this.name||``,String(this.minValue)),e.append(this.name||``,String(this.maxValue)),this.setValue(e,e)}else super.updateFormValue(e)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange){for(let e of ta())if(e===this.thumbMin){this.thumbMin.blur();break}else if(e===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){if(this.isRange){let e=this.clampAndRoundToStep(this.minValue-this.step);this.minValue=aa(e,this.min,this.maxValue),this.updateFormValue()}else{let e=this.clampAndRoundToStep(this.value-this.step);this.value=e}}stepUp(){if(this.isRange){let e=this.clampAndRoundToStep(this.maxValue+this.step);this.maxValue=aa(e,this.minValue,this.max),this.updateFormValue()}else{let e=this.clampAndRoundToStep(this.value+this.step);this.value=e}}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.hasSlotController.test(`reference`),a=zt({xs:this.size===`xs`,s:this.size===`s`||this.size===`small`,m:this.size===`m`||this.size===`medium`,l:this.size===`l`||this.size===`large`,xl:this.size===`xl`,small:this.size===`small`||this.size===`s`,medium:this.size===`medium`||this.size===`m`,large:this.size===`large`||this.size===`l`,horizontal:this.orientation===`horizontal`,vertical:this.orientation===`vertical`,disabled:this.disabled}),o=[];if(this.withMarkers)for(let e=this.min;e<=this.max;e+=this.step)o.push(this.getPercentageFromValue(e));let s=De`
      <label
        id="label"
        part="label"
        for=${this.isRange?`thumb-min`:`text-box`}
        class=${zt({vh:!n,"has-label":n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=De`
      <div
        id="hint"
        part="hint"
        class=${zt({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,l=this.withMarkers?De`
          <div id="markers" part="markers">
            ${o.map(e=>De`<span part="marker" class="marker" style=${sa({"--position":`${e}%`})}></span>`)}
          </div>
        `:``,u=i?De`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:``,d=(e,t)=>this.withTooltip?De`
            <wa-tooltip
              id=${`tooltip${e===`thumb`?``:`-`+e}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
                tooltip:tooltip__tooltip,
                body:tooltip__body,
                arrow:tooltip__arrow
              "
              trigger="manual"
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${e}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter==`function`?this.valueFormatter(t):this.localize.number(t)}
              </span>
            </wa-tooltip>
          `:``;if(this.isRange){let e=aa(this.getPercentageFromValue(this.minValue),0,100),t=aa(this.getPercentageFromValue(this.maxValue),0,100);return De`
        ${s}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${sa({"--start":`${Math.min(e,t)}%`,"--end":`${Math.max(e,t)}%`})}
            ></div>

            ${l}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${sa({"--position":`${e}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter==`function`?this.valueFormatter(this.minValue):this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (minimum value)`:`Minimum value`}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?`true`:`false`}
              aria-readonly=${this.readonly?`true`:`false`}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style=${sa({"--position":`${t}%`})}
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter==`function`?this.valueFormatter(this.maxValue):this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label?`${this.label} (maximum value)`:`Maximum value`}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled?`true`:`false`}
              aria-readonly=${this.readonly?`true`:`false`}
              tabindex=${this.disabled?-1:0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${u} ${c}
        </div>

        ${d(`thumb-min`,this.minValue)} ${d(`thumb-max`,this.maxValue)}
      `}{let e=aa(this.getPercentageFromValue(this.value),0,100),t=aa(this.getPercentageFromValue(typeof this.indicatorOffset==`number`?this.indicatorOffset:this.min),0,100);return De`
        ${s}

        <div
          id="slider"
          part="slider"
          class=${a}
          role="slider"
          aria-disabled=${this.disabled?`true`:`false`}
          aria-readonly=${this.disabled?`true`:`false`}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter==`function`?this.valueFormatter(this.value):this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="hint"
          tabindex=${this.disabled?-1:0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${sa({"--start":`${t}%`,"--end":`${e}%`})}
            ></div>

            ${l}
            <span id="thumb" part="thumb" style=${sa({"--position":`${e}%`})}></span>
          </div>

          ${u} ${c}
        </div>

        ${d(`thumb`,this.value)}
      `}}};j.formAssociated=!0,j.observeSlots=!0,j.css=[St,Ye,ea],D([lt(`#slider`)],j.prototype,`slider`,2),D([lt(`#thumb`)],j.prototype,`thumb`,2),D([lt(`#thumb-min`)],j.prototype,`thumbMin`,2),D([lt(`#thumb-max`)],j.prototype,`thumbMax`,2),D([lt(`#track`)],j.prototype,`track`,2),D([lt(`#tooltip`)],j.prototype,`tooltip`,2),D([k()],j.prototype,`label`,2),D([k({attribute:`hint`})],j.prototype,`hint`,2),D([k({reflect:!0})],j.prototype,`name`,2),D([k({type:Number,attribute:`min-value`})],j.prototype,`minValue`,2),D([k({type:Number,attribute:`max-value`})],j.prototype,`maxValue`,2),D([k({attribute:`value`,reflect:!0,type:Number})],j.prototype,`defaultValue`,2),D([st()],j.prototype,`value`,1),D([k({type:Boolean,reflect:!0})],j.prototype,`range`,2),D([k({type:Boolean})],j.prototype,`disabled`,2),D([k({type:Boolean,reflect:!0})],j.prototype,`readonly`,2),D([k({reflect:!0})],j.prototype,`orientation`,2),D([k({reflect:!0})],j.prototype,`size`,2),D([Ct(`size`)],j.prototype,`handleSizeChange`,1),D([k({attribute:`indicator-offset`,type:Number})],j.prototype,`indicatorOffset`,2),D([k({type:Number})],j.prototype,`min`,2),D([k({type:Number})],j.prototype,`max`,2),D([k({type:Number})],j.prototype,`step`,2),D([k({type:Boolean})],j.prototype,`autofocus`,2),D([k({attribute:`tooltip-distance`,type:Number})],j.prototype,`tooltipDistance`,2),D([k({attribute:`tooltip-placement`,reflect:!0})],j.prototype,`tooltipPlacement`,2),D([k({attribute:`with-markers`,type:Boolean})],j.prototype,`withMarkers`,2),D([k({attribute:`with-tooltip`,type:Boolean})],j.prototype,`withTooltip`,2),D([k({attribute:`with-label`,type:Boolean})],j.prototype,`withLabel`,2),D([k({attribute:`with-hint`,type:Boolean})],j.prototype,`withHint`,2),D([k({attribute:!1})],j.prototype,`valueFormatter`,2),j=D([it(`wa-slider`)],j);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ua=m`
  :host {
    --max-width: 30ch;

    /** These styles are added so we don't interfere in the DOM. */
    display: inline-block;
    position: absolute;

    /** Defaults for inherited CSS properties */
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--wa-tooltip-border-radius);
    background-color: var(--wa-tooltip-background-color);
    border: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
    padding: 0.25em 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  .tooltip {
    --popup-border-width: var(--wa-tooltip-border-width);

    /* Inset box-shadow, not a border: Safari seams a clip-path edge that runs along a border. */
    &::part(arrow) {
      box-shadow: inset calc(-1 * var(--wa-tooltip-border-width)) calc(-1 * var(--wa-tooltip-border-width)) 0 0
        var(--wa-tooltip-border-color);
    }
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function da(e,t){for(;t;){if(t===e)return!0;t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}return!1}var fa=class extends ht{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)?this.open?this.hide():this.show():this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&Ni(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor&&da(this.anchor,t)),r=!!(t&&da(this,t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=oa(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Mi(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new Ei;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),ji(this)),this.body.hidden=!1,this.popup.active=!0,await Ii(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new ki)}else{let e=new Di;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Mi(this),await Ii(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Oi)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Fi(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Fi(this,`wa-after-hide`)}render(){return De`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${zt({tooltip:!0,"tooltip-open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        flip
        shift
        ?arrow=${!this.withoutArrow}
        hover-bridge
        .anchor=${this.anchor}
      >
        <div part="body" class="body">
          <slot></slot>
        </div>
      </wa-popup>
    `}};fa.css=ua,fa.dependencies={"wa-popup":xi},D([lt(`slot:not([name])`)],fa.prototype,`defaultSlot`,2),D([lt(`.body`)],fa.prototype,`body`,2),D([lt(`wa-popup`)],fa.prototype,`popup`,2),D([k()],fa.prototype,`placement`,2),D([k({type:Boolean,reflect:!0})],fa.prototype,`disabled`,2),D([k({type:Number})],fa.prototype,`distance`,2),D([k({type:Boolean,reflect:!0})],fa.prototype,`open`,2),D([k({type:Number})],fa.prototype,`skidding`,2),D([k({attribute:`show-delay`,type:Number})],fa.prototype,`showDelay`,2),D([k({attribute:`hide-delay`,type:Number})],fa.prototype,`hideDelay`,2),D([k()],fa.prototype,`trigger`,2),D([k({attribute:`without-arrow`,type:Boolean,reflect:!0})],fa.prototype,`withoutArrow`,2),D([k()],fa.prototype,`for`,2),D([st()],fa.prototype,`anchor`,2),D([Ct(`open`,{waitUntilFirstUpdate:!0})],fa.prototype,`handleOpenChange`,1),D([Ct(`for`)],fa.prototype,`handleForChange`,1),D([Ct([`distance`,`placement`,`skidding`])],fa.prototype,`handleOptionsChange`,1),D([Ct(`disabled`)],fa.prototype,`handleDisabledChange`,1),fa=D([it(`wa-tooltip`)],fa);var pa=/* @__PURE__ */ t({default:()=>j}),ma=m`
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
`,ha=class extends _t{constructor(){
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
super(...arguments),this.hasSlotController=new xt(this,`hint`),this.localize=new Ft(this),this.title=``,this.name=null,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``,this.withHint=!1}static get validators(){return[...super.validators,Xe()]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){bt(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleKeyDown(e){let t=this.localize.dir()===`rtl`;e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.handleValueOrCheckedChange()}):(this.setValue(this.checked?this.value:null,this._value),this.updateValidity())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set(`checked`,this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){this.checked?this.internals.setFormValue(e??`on`,t):this.internals.setFormValue(null,null)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let e=this.hasSlotController.test(`hint`,`withHint`),t=this.hint?!0:!!e,n=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,r=this.didSSR&&!this.hasUpdated?null:Kt(this.checked);return De`
      <label
        part="base switch"
        class=${zt({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Bt(this.name)}
          value=${Bt(this.value)}
          .checked=${Bt(r)}
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
        class=${zt({"has-slotted":t})}
        aria-hidden=${t?`false`:`true`}
        >${this.hint}</slot
      >
    `}};ha.shadowRootOptions={..._t.shadowRootOptions,delegatesFocus:!0},ha.css=[Ye,St,ma],D([lt(`input[type="checkbox"]`)],ha.prototype,`input`,2),D([k()],ha.prototype,`title`,2),D([k({reflect:!0})],ha.prototype,`name`,2),D([k({reflect:!0})],ha.prototype,`value`,1),D([k({reflect:!0})],ha.prototype,`size`,2),D([Ct(`size`)],ha.prototype,`handleSizeChange`,1),D([k({type:Boolean})],ha.prototype,`disabled`,2),D([k({type:Boolean,attribute:!1})],ha.prototype,`checked`,1),D([k({type:Boolean,attribute:`checked`,reflect:!0})],ha.prototype,`defaultChecked`,2),D([k({type:Boolean,reflect:!0})],ha.prototype,`required`,2),D([k({attribute:`hint`})],ha.prototype,`hint`,2),D([k({attribute:`with-hint`,type:Boolean})],ha.prototype,`withHint`,2),D([Ct([`checked`,`defaultChecked`])],ha.prototype,`handleStateChange`,1),D([Ct(`disabled`,{waitUntilFirstUpdate:!0})],ha.prototype,`handleDisabledChange`,1),ha=D([it(`wa-switch`)],ha),ha.disableWarning?.(`change-in-update`);var ga=/* @__PURE__ */ t({default:()=>ha}),M
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();function _a(e){this.c=e}M=_a.prototype,M.toString=(function(){return String.fromCharCode(this.c)});function va(e,t){this.l=e,this.h=t}M=va.prototype,M.toString=(function(){return yl(this.l,this.h)});function ya(e){switch(typeof e){case`string`:return vy.l();case`number`:return Pa(e)?e<<24>>24===e?Eg.l():e<<16>>16===e?Rg.l():ly.l():Fa(e)?cy.l():sy.l();case`boolean`:return ch.l();case`undefined`:return fl.l();default:return e instanceof va?fy.l():e instanceof _a?dh.l():e&&e.$classData?e.$classData.l():null}}function ba(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Pa(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Fa(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof va?`java.lang.Long`:e instanceof _a?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.sS()}}function xa(e,t){switch(typeof e){case`string`:return hy(e,t);case`number`:return ay(e,t);case`boolean`:return oh(e,t);case`undefined`:return ll(e,t);default:return e&&e.$classData||e===null?e.q(t):e instanceof va?uy(e.l,e.h,t):e instanceof _a?uh(e.c,t):Ha.prototype.q.call(e,t)}}function Sa(e){switch(typeof e){case`string`:return my(e);case`number`:return oy(e);case`boolean`:return sh(e);case`undefined`:return ul(e);default:return e&&e.$classData||e===null?e.w():e instanceof va?dy(e.l,e.h):e instanceof _a?lh(e.c):Ha.prototype.w.call(e)}}function Ca(e){return e===void 0?`undefined`:e.toString()}function wa(e){if(e===0)throw new Tg(`/ by zero`);return e}function Ta(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Ea(e){return String.fromCharCode(e)}var Da=/* @__PURE__ */ new DataView(/* @__PURE__ */ new ArrayBuffer(8));function Oa(e,t,n,r,i){if(e!==n||r-t>>>0>i>>>0)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ka=0,Aa=/* @__PURE__ */ new WeakMap;function ja(e){switch(typeof e){case`string`:return my(e);case`number`:return oy(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:my(n);default:if(e===null)return 0;var r=Aa.get(e);return r===void 0&&(r=ka+1|0,ka=r,Aa.set(e,r)),r}}function Ma(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Na(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Pa(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Fa(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Ia(e){return new _a(e)}Ia(0);function La(e,t){return new va(e,t)}var Ra=La(0,0);function za(e){return e===null?0:e.c}function Ba(e){return e===null?Ra:e}function Va(e){return e}function Ha(){}M=Ha.prototype,M.constructor=Ha;function N(){}N.prototype=M,M.w=(function(){return ja(this)}),M.q=(function(e){return this===e}),M.z=(function(){var e=this.w();return ba(this)+`@`+(e>>>0).toString(16)}),M.toString=(function(){return this.z()});function P(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}M=P.prototype=new N,M.constructor=P,M.u=(function(e,t,n,r){Oa(this.a,e,t.a,n,r)}),M.h=(function(){return new P(this.a.slice())});function Ua(){}Ua.prototype=M;function Wa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}M=Wa.prototype=new N,M.constructor=Wa,M.u=(function(e,t,n,r){Oa(this.a,e,t.a,n,r)}),M.h=(function(){return new Wa(this.a.slice())});function Ga(e){this.a=typeof e==`number`?new Uint16Array(e):e}M=Ga.prototype=new N,M.constructor=Ga,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new Ga(this.a.slice())});function Ka(e){this.a=typeof e==`number`?new Int8Array(e):e}M=Ka.prototype=new N,M.constructor=Ka,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new Ka(this.a.slice())});function qa(e){this.a=typeof e==`number`?new Int16Array(e):e}M=qa.prototype=new N,M.constructor=qa,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new qa(this.a.slice())});function Ja(e){this.a=typeof e==`number`?new Int32Array(e):e}M=Ja.prototype=new N,M.constructor=Ja,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new Ja(this.a.slice())});function Ya(e){typeof e==`number`?(e<<=1,this.a=new Int32Array(e)):this.a=e}M=Ya.prototype=new N,M.constructor=Ya,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e<<1,(e+r|0)<<1),n<<1)}),M.h=(function(){return new Ya(this.a.slice())});function Xa(e){this.a=typeof e==`number`?new Float32Array(e):e}M=Xa.prototype=new N,M.constructor=Xa,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new Xa(this.a.slice())});function Za(e){this.a=typeof e==`number`?new Float64Array(e):e}M=Za.prototype=new N,M.constructor=Za,M.u=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),M.h=(function(){return new Za(this.a.slice())});function F(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}M=F.prototype,M.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new F().y(this,r,i,t===`J`)),this}),M.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),M.y=(function(e,t,n,r,i){t.prototype.$classData=this;var a=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=e,this.D=1,this.E=a,this.N=a,this.Z=!0;var o=this;return this.F=i||(e=>o===e),this.w=r?(e=>{for(var n=e.length|0,r=new t(n),i=r.a,a=0;a<n;a=a+1|0){var o=e[a];i[a<<1]=o.l,i[(a<<1)+1|0]=o.h}return r}):n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),M.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ua;n.constructor=t,n.u=(function(e,t,n,r){Oa(this.a,e,t.a,n,r)}),n.h=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===I});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),M.r=(function(){return this.A||=new F().a(this),this.A}),M.l=(function(){return this.L||=new Wp(this),this.L}),M.R=(function(e){return this===e||this.F(e)}),M.S=(function(){return this.P?this.P.l():null}),M.Q=(function(){return this.O?this.O.l():null}),M.U=(function(e){if(this===Qa)throw Og(new kg);return new(this.r()).C(e)});var I=new F;I.n={},I.E=`Ljava.lang.Object;`,I.F=(e=>!e.X),I.N=`java.lang.Object`,I.I=(e=>e!==null),I.A=new F().y(I,P,void 0,!1,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ha.prototype.$classData=I;var Qa=new F().p(void 0,`V`,`void`,void 0,void 0),$a=new F().p(!1,`Z`,`boolean`,Wa,void 0),eo=new F().p(0,`C`,`char`,Ga,Uint16Array),to=new F().p(0,`B`,`byte`,Ka,Int8Array),no=new F().p(0,`S`,`short`,qa,Int16Array),ro=new F().p(0,`I`,`int`,Ja,Int32Array),io=new F().p(Ra,`J`,`long`,Ya,Int32Array),ao=new F().p(0,`F`,`float`,Xa,Float32Array),oo=new F().p(0,`D`,`double`,Za,Float64Array);new Int8Array(new Int32Array([1]).buffer)[0];function so(e,t,n){for(var r=new Int32Array(e),i=t.length|0,a=0,o=0,s=0,c=0;o!==i;){var l=t.charCodeAt(o);l<80?c=(c|l-48)<<5:(c|=l-93,a=(a&n)+c|0,r[s]=a,s=s+1|0,c=0),o=o+1|0}return r}function co(e,t){return new Ja(so(e,t,-1))}var lo=new F().i(1,`com.raquo.airstream.core.InternalObserver`,{b1:1});function uo(e){return ya(e).iL()+`@`+e.w()}function fo(e){var t=e.g5();return t===void 0?e.fX():t}function po(){this.jj=null,mo=this,this.jj=ho().pm(new Z((e=>void 0)),Hl().gt,!0)}M=po.prototype=new N,M.constructor=po,M.pm=(function(e,t,n){return new Km(e,n,t,this)}),M.re=(function(e,t){return new qm(e,t,this)}),new F().i(po,`com.raquo.airstream.core.Observer$`,{cu:1});var mo;function ho(){return mo||=new po,mo}function go(){}M=go.prototype=new N,M.constructor=go,M.p0=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new F().i(go,`com.raquo.airstream.core.ObserverList$`,{cx:1});var _o;function vo(){return _o||=new go,_o}function yo(){this.eF=0,this.eF=0}M=yo.prototype=new N,M.constructor=yo,M.oQ=(function(){return this.eF=this.eF===2147483647?1:1+this.eF|0,this.eF}),new F().i(yo,`com.raquo.airstream.core.Signal$`,{cy:1});var bo;function xo(){return bo||=new yo,bo}function So(e){this.hh=null,this.jp=null,this.hi=0,this.hh=e,this.jp=void 0;var t=Ro().g9();this.hi=t===void 0?1:1+t.hi|0,Eo().ge===-1||this.hi>Eo().ge?Yf().cj(new Yv(this,Eo().ge)):Ao().bd?Ao().eh.push(this)|0:Ro().im(this)}M=So.prototype=new N,M.constructor=So;var Co=new F().i(So,`com.raquo.airstream.core.Transaction`,{cz:1});function wo(){this.ge=0,this.jq=null,To=this,this.ge=1e3,this.jq=new Z((e=>{throw Gp(new Kp,`Attempted to run Transaction `+e+` after it was already executed.`)}))}M=wo.prototype=new N,M.constructor=wo,M.og=(function(e){try{e.hh.e(e);var t=e.jp;if(t!==void 0)for(;t.sW();)t.sQ().sZ(e)}catch(e){var n=e instanceof _f?e:new xb(e);Yf().cj(n)}}),new F().i(wo,`com.raquo.airstream.core.Transaction$`,{cA:1});var To;function Eo(){return To||=new wo,To}function Do(e){e.gf.length|0?new So(new Z((t=>{for(;(e.gf.length|0)>0;){var n=e.gf.shift();try{n.e(t)}catch(e){var r=e instanceof _f?e:new xb(e);Yf().cj(r)}}for(;(e.eh.length|0)>0;){var i=e.eh.shift();Ro().im(i)}}))):(e.eh.length|0)>0&&new So(new Z((t=>{for(;(e.eh.length|0)>0;)Ro().im(e.eh.shift())})))}function Oo(){this.bd=!1,this.gf=null,this.eh=null,ko=this,this.bd=!1,this.gf=os().bo(Ju().bj(new(B.r()).C([]))),this.eh=os().bo(Ju().bj(new(Co.r()).C([])))}M=Oo.prototype=new N,M.constructor=Oo,new F().i(Oo,`com.raquo.airstream.core.Transaction$onStart$`,{cB:1});var ko;function Ao(){return ko||=new Oo,ko}function jo(e,t){return e.ei.get(t)}function Mo(e,t){e.gg.unshift(t)}function No(e){return e.gg.shift()}function Po(e,t,n){var r=jo(e,t),i=r===void 0,a=r===void 0?os().bo(Ju().bj(new(Co.r()).C([]))):r;a.push(n),i&&e.ei.set(t,a)}function Fo(e,t){var n=jo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ei.delete(t),i}}function Io(){this.gg=null,this.ei=null,Lo=this,this.gg=os().bo(Ju().bj(new(Co.r()).C([]))),this.ei=/* @__PURE__ */ new Map}M=Io.prototype=new N,M.constructor=Io,M.im=(function(e){var t=this.g9();t===void 0?(Mo(this,e),Eo().og(e),this.qF(e)):Po(this,t,e)}),M.qF=(function(e){for(var t=e;;){var n=this.g9(),r=t;if(!(n!==void 0&&H().p(r,n)))throw Gp(new Kp,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.s5(t),t.hh=Eo().jq;var i=this.g9();if(H().p(i,void 0)){if((this.ei.size|0)>0){var a=new Vf(0);throw this.ei.forEach((e=>((t,n)=>{e.ev=e.ev+(t.length|0)|0}))(a)),Gp(new Kp,`Transaction queue error: Stack cleared, but a total of `+a.ev+` children for `+(this.ei.size|0)+` transactions remain. This is a bug in Airstream.`)}return}Eo().og(i),t=i}}),M.s5=(function(e){for(var t=e;;){var n=Fo(this,t);if(H().p(n,void 0)){No(this);var r=this.g9();if(!H().p(r,void 0))t=r;else return}else{Mo(this,n);return}}}),M.g9=(function(){return this.gg[0]}),new F().i(Io,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cC:1});var Lo;function Ro(){return Lo||=new Io,Lo}function zo(e,t){var n=e.dr.indexOf(t)|0;if(n!==-1)e.dr.splice(n,1),e.bN.f()||t.oU();else throw Gp(new Kp,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Bo(e){for(;(e.gi.length|0)>0;)zo(e,e.gi.shift())}function Vo(e){this.jy=null,this.dr=null,this.eG=!1,this.gi=null,this.bN=null,this.eH=0,this.jy=e,this.dr=os().bo(Ju().bj(new(Uo.r()).C([]))),this.eG=!0,this.gi=os().bo(Ju().bj(new(Uo.r()).C([]))),this.bN=xy(),this.eH=0}M=Vo.prototype=new N,M.constructor=Vo,M.nY=(function(){if(this.bN.f()){var e=Ao(),t=(()=>{var e=new hd(this.jy);this.bN=new Sy(e),this.eG=!1,this.eH=0;for(var t=0,n=this.dr.length|0;t<n;){var r=t+this.eH|0;this.dr[r].oT(e),t=1+t|0}Bo(this),this.eG=!0,this.eH=0});if(Ao(),e.bd)t();else{e.bd=!0;try{t()}finally{e.bd=!1,Do(e)}}}else throw Gp(new Kp,`Can not activate `+this+`: it is already active`)}),M.qx=(function(){if(this.bN.f())throw Gp(new Kp,`Can not deactivate DynamicOwner: it is not active`);this.eG=!1;for(var e=this.dr,t=0,n=e.length|0;t<n;)e[t].oU(),t=1+t|0;Bo(this);var r=this.bN;r.f()||r.N().rG(),Bo(this),this.eG=!0,this.bN=xy()}),M.pZ=(function(e,t){t?(this.eH=1+this.eH|0,this.dr.unshift(e)):this.dr.push(e);var n=this.bN;if(!n.f()){var r=n.N();e.oT(r)}}),M.sc=(function(e){this.eG?zo(this,e):this.gi.push(e)}),new F().i(Vo,`com.raquo.airstream.ownership.DynamicOwner`,{cE:1});function Ho(e,t,n){this.gj=null,this.jz=null,this.gk=null,this.gj=e,this.jz=t,this.gk=xy(),e.pZ(this,n)}M=Ho.prototype=new N,M.constructor=Ho,M.gW=(function(){this.gj.sc(this)}),M.oT=(function(e){var t=Ao(),n=(()=>{this.gk=this.jz.e(e)});if(Ao(),t.bd)n();else{t.bd=!0;try{n()}finally{t.bd=!1,Do(t)}}}),M.oU=(function(){var e=this.gk;e.f()||(e.N().gW(),this.gk=xy())});var Uo=new F().i(Ho,`com.raquo.airstream.ownership.DynamicSubscription`,{cF:1});function Wo(){}M=Wo.prototype=new N,M.constructor=Wo,M.hc=(function(e,t,n){return new Ho(e,new Z((e=>new Sy(t.e(e)))),n)}),M.pc=(function(e,t,n){return new Ho(e,new Z((e=>(t.e(e),xy()))),n)}),M.sv=(function(e,t,n){return Ko().hc(e,new Z((e=>Zf(t,n,e))),!1)}),new F().i(Wo,`com.raquo.airstream.ownership.DynamicSubscription$`,{cG:1});var Go;function Ko(){return Go||=new Wo,Go}function qo(e){e.eI=os().bo(Ju().bj(new($o.r()).C([])))}function Jo(e){for(var t=e.eI,n=0,r=t.length|0;n<r;)Zo(t[n]),n=1+n|0;e.eI.length=0}function Yo(e,t){var n=e.eI.indexOf(t)|0;if(n!==-1)e.eI.splice(n,1);else throw Gp(new Kp,`Can not remove Subscription from Owner: subscription not found.`)}function Xo(e,t){e.eI.push(t)}function Zo(e){if(!e.hp)e.jB.a4(),e.hp=!0;else throw Gp(new Kp,`Can not kill Subscription: it was already killed.`)}function Qo(e,t){this.jC=null,this.jB=null,this.hp=!1,this.jC=e,this.jB=t,this.hp=!1,e.s3(this)}M=Qo.prototype=new N,M.constructor=Qo,M.gW=(function(){Zo(this),Yo(this.jC,this)});var $o=new F().i(Qo,`com.raquo.airstream.ownership.Subscription`,{cJ:1});function es(e,t){this.jD=null,this.jE=null,this.ds=null,this.ej=!1,this.jD=e,this.jE=t,this.ds=xy(),this.ej=!1}M=es.prototype=new N,M.constructor=es,M.rC=(function(){var e=this.ds;return!e.f()&&!e.N().gj.bN.f()}),M.sm=(function(e){if(this.ej)throw Gp(new Kp,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ds;if(t.f())var n=!1;else var r=t.N().gj,n=e===null?r===null:e===r;if(!n){this.rC()&&!e.bN.f()&&(this.ej=!0);var i=this.ds;i.f()||(i.N().gW(),this.ds=xy());var a=Ko().hc(e,new Z((e=>(this.ej||this.jD.a4(),new Qo(e,new Gh((()=>{this.ej||this.jE.a4()})))))),!1);this.ds=new Sy(a),this.ej=!1}}),M.qm=(function(){if(this.ej)throw Gp(new Kp,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ds;e.f()||e.N().gW(),this.ds=xy()}),new F().i(es,`com.raquo.airstream.ownership.TransferableSubscription`,{cK:1});function ts(){}M=ts.prototype=new N,M.constructor=ts,M.aI=(function(e){return new Zv(new Gv(e))}),new F().i(ts,`com.raquo.airstream.state.Var$`,{cO:1});var ns;function rs(){return ns||=new ts,ns}function is(){}M=is.prototype=new N,M.constructor=is,M.bo=(function(e){return[...ad().sC(e)]}),new F().i(is,`com.raquo.ew.JsArray$`,{cR:1});var as;function os(){return as||=new is,as}function ss(){}M=ss.prototype=new N,M.constructor=ss,M.ru=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),M.r5=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new F().i(ss,`com.raquo.ew.JsArray$RichJsArray$`,{cS:1});var cs;function ls(){return cs||=new ss,cs}function us(){this.jP=null,ds=this,document.createElement(`template`),this.qv(X().b.sx().sy()),this.jP=/* @__PURE__ */ RegExp(` `,`g`)}M=us.prototype=new N,M.constructor=us,M.q5=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof _f?e:new xb(e);if(n instanceof xb&&n.bn instanceof DOMException)return!1;throw n instanceof xb?n.bn:n}}),M.rE=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().p(t,r))return!0;n=r}}),M.pP=(function(e,t){e.addEventListener(t.eK.ek.gn,t.hE,t.hF)}),M.sa=(function(e,t){e.removeEventListener(t.eK.ek.gn,t.hE,t.hF)}),M.qu=(function(e){return document.createElement(e.j1())}),M.ri=(function(e,t){var n=this.rj(e,t);return n===void 0?void 0:t.cV.f3(n)}),M.rj=(function(e,t){var n=e.bq.getAttributeNS(null,t.cm);return n===null?void 0:n}),M.jb=(function(e,t,n){this.sl(e,t,t.cV.ea(n))}),M.sl=(function(e,t,n){n===null?this.sb(e,t):e.bq.setAttribute(t.cm,n)}),M.sb=(function(e,t){e.bq.removeAttribute(t.cm)}),M.rk=(function(e,t){return e.bq[t.cF]}),M.p8=(function(e,t,n){this.p9(e,t,t.hA.ea(n))}),M.p9=(function(e,t,n){e.bq[t.cF]=n}),M.pa=(function(e,t,n){var r=e.bq,i=t.cW,a=t.cX,o=n===null?null:n;o===null?(a.bL(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.bL(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),M.qv=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.lq)}),M.rn=(function(e,t){var n=this.ro(e,t);return n===void 0?void 0:t.hB.f3(n)}),M.ro=(function(e,t){var n=e.j7(),r=t.gp,i=n.getAttributeNS(r.f()?null:r.N(),t.hC);return i===null?void 0:i}),M.sn=(function(e,t,n){this.so(e,t,t.hB.ea(n))}),M.so=(function(e,t,n){if(n===null)this.sd(e,t);else{var r=t.gp;if(r.f())e.j7().setAttribute(t.go,n);else{var i=r.N();e.j7().setAttributeNS(i,t.go,n)}}}),M.sd=(function(e,t){var n=e.j7(),r=t.gp;n.removeAttributeNS(r.f()?null:r.N(),t.hC)}),M.qw=(function(e){return document.createTextNode(e)}),M.iP=(function(e){return au().qo(e.tagName,45)}),M.rh=(function(e){if(e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`))return!!e.checked;if(this.iP(e)){var t=e.checked;return new lg(this),t===void 0?void 0:typeof t==`boolean`?!!t:void 0}}),M.rp=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.iP(e)){var t=e.value;return new ug(this),t===void 0?void 0:typeof t==`string`?t:void 0}}),M.qy=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new GC(this.om(r),n);r=i,n=a}}),M.om=(function(e){if(e instanceof HTMLElement){var t=e.id;if(au(),t!==``)var n=`#`+t;else var r=e.className,n=(au(),r===``?``:`.`+r.replace(this.jP,`.`));return e.tagName.toLowerCase()+n}return e.nodeName}),new F().i(us,`com.raquo.laminar.DomApi$`,{cT:1});var ds;function fs(){return ds||=new us,ds}function ps(e,t,n){this.hv=null,this.jQ=null,this.hu=null,this.hv=e,this.jQ=t,this.hu=n}M=ps.prototype=new N,M.constructor=ps,M.bL=(function(e){this.hv===null?this.hu===null?Gl().r7(this.jQ,e):ls().r5(this.hu,Lm().rd(e)):this.hv.bL(e)}),new F().i(ps,`com.raquo.laminar.Seq`,{cW:1});function ms(){hs=this,$()}M=ms.prototype=new N,M.constructor=ms,new F().i(ms,`com.raquo.laminar.Seq$`,{cX:1});var hs;function gs(){return hs||=new ms,hs}function _s(e){e.jT=ho(),Yf(),e.aw=rs()}function vs(e){e.po=Zs()}function ys(e){bs(e,new Z((e=>{e.la.bq.focus()})))}function bs(e,t){return new jd(new Z((e=>{var n=new Bf(!e.cG.bN.f()),r=new Z((e=>{n.gE?n.gE=!1:t.e(e)}));Ko().pc(e.cG,new Z((e=>(t=>{r.e(new Js(e,t))}))(e)),!1)})),Zs())}function xs(){this.bk=null,this.kN=null,this.kO=!1,this.hw=null,this.eJ=null,Ss=this,this.bk=new _d(Cs()),new _d(Cs()),this.hw=new _d(Cs()),this.eJ=new gd}M=xs.prototype=new N,M.constructor=xs,M.ew=(function(){return this.kO||=(this.kN=new vd(this),!0),this.kN}),new F().i(xs,`com.raquo.laminar.codecs.package$`,{d5:1});var Ss;function Cs(){return Ss||=new xs,Ss}function ws(e){e.k8=Ts(e,`class`,` `),e.fi=e.k8}function Ts(e,t,n){var r=Td(new Ed,t,Cs().bk);return new bd(r.cm,new Z((e=>{var t=fs().ri(e,r);return t===void 0?``:t})),new Kh(((e,t)=>{fs().jb(e,r,t)})),n)}function Es(e){e.pn=Ds(e,`class`,` `)}function Ds(e,t,n){var r=new kd(t,Cs().bk,xy());return new bd(r.go,new Z((e=>{var t=fs().rn(e,r);return t===void 0?``:t})),new Kh(((e,t)=>{fs().sn(e,r,t)})),n)}function Os(){this.l3=null,ks=this,X().b.eg(),os().bo(Ju().bj(new(wd.r()).C([X().b.a8()]))),X().b.eg(),os().bo(Ju().bj(new(wd.r()).C([X().b.a8(),X().b.rY()]))),X().b.of(),os().bo(Ju().bj(new(wd.r()).C([X().b.a8(),X().b.rZ()]))),this.l3=os().bo(Ju().bj(new(vy.r()).C([`value`,`checked`])))}M=Os.prototype=new N,M.constructor=Os,new F().i(Os,`com.raquo.laminar.inputs.InputController$`,{dx:1});var ks;function As(){return ks||=new Os,ks}function js(e){this.gl=null,this.gl=e}M=js.prototype=new N,M.constructor=js,M.oX=(function(e,t){try{this.gl.dg(e,t)}catch(e){var n=e instanceof _f?e:new xb(e);Yf().cj(n)}}),M.qn=(function(e){return new js(new Kh(((t,n)=>{this.gl.dg(t,n),e.gl.dg(t,n)})))}),M.q6=(function(e){return e===void 0?this:e.qn(this)}),new F().i(js,`com.raquo.laminar.inserters.InserterHooks`,{dA:1});function Ms(){}M=Ms.prototype=new N,M.constructor=Ms,M.cC=(function(e,t){return new dg(e,void 0)}),new F().i(Ms,`com.raquo.laminar.inserters.StaticChildInserter$`,{dC:1});var Ns;function Ps(){return Ns||=new Ms,Ns}function Fs(){}M=Fs.prototype=new N,M.constructor=Fs,M.oR=(function(e,t){if(e===``)return $();var n=dw(new pw,e.split(t).filter((e=>(au(),e!==``))));return G_(),$().j6(n)}),new F().i(Fs,`com.raquo.laminar.keys.CompositeKey$`,{dF:1});var Is;function Ls(){return Is||=new Fs,Is}function Rs(e,t){this.l8=null,this.l7=null,this.l8=e,this.l7=t}M=Rs.prototype=new N,M.constructor=Rs,M.c=(function(e){return new sp(this.l8,this.l7.e(e),new qh(((e,t,n)=>{fs().pa(e,t,n)})))}),new F().i(Rs,`com.raquo.laminar.keys.DerivedStyleProp`,{dJ:1});function zs(e,t,n,r){this.ek=null,this.fl=!1,this.fk=!1,this.fj=null,this.ek=e,this.fl=t,this.fk=n,this.fj=r}M=zs.prototype=new N,M.constructor=zs,M.ed=(function(e){var t=new Z((t=>{var n=this.fj.e(t);return n.f()?xy():new Sy(e.e(n.N()))}));return new zs(this.ek,this.fl,this.fk,t)}),M.f7=(function(){var e=new Z((e=>{var t=this.fj.e(e);if(t.f())return xy();t.N();var n=fs().rp(e.target);return new Sy(n===void 0?``:n)}));return new zs(this.ek,this.fl,this.fk,e)}),M.dn=(function(){var e=new Z((e=>{var t=this.fj.e(e);if(t.f())return xy();t.N();var n=fs().rh(e.target);return new Sy(!!(n!==void 0&&n))}));return new zs(this.ek,this.fl,this.fk,e)}),new F().i(zs,`com.raquo.laminar.keys.EventProcessor`,{dK:1});function Bs(){}M=Bs.prototype=new N,M.constructor=Bs,M.b3=(function(e,t,n){return new zs(e,t,n,new Z((e=>new Sy(e))))}),new F().i(Bs,`com.raquo.laminar.keys.EventProcessor$`,{dL:1});var Vs;function Hs(){return Vs||=new Bs,Vs}function Us(){}M=Us.prototype=new N,M.constructor=Us;function Ws(){}Ws.prototype=M;function Gs(){this.pp=null,this.pq=null,this.pr=null,this.ps=null,this.pp=`http://www.w3.org/2000/svg`,this.pq=`http://www.w3.org/1999/xlink`,this.pr=`http://www.w3.org/XML/1998/namespace`,this.ps=`http://www.w3.org/2000/xmlns/`}M=Gs.prototype=new N,M.constructor=Gs,M.rS=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Wg(e)}}),new F().i(Gs,`com.raquo.laminar.keys.SvgAttr$`,{dO:1});var Ks;function qs(){return Ks||=new Gs,Ks}function Js(e,t){this.la=null,this.l9=null,this.la=e,this.l9=t}M=Js.prototype=new N,M.constructor=Js,new F().i(Js,`com.raquo.laminar.lifecycle.MountContext`,{dP:1});var L=new F().i(1,`com.raquo.laminar.modifiers.Modifier`,{Y:1});function Ys(){this.pt=null,Xs=this,this.pt=new Ad}M=Ys.prototype=new N,M.constructor=Ys,new F().i(Ys,`com.raquo.laminar.modifiers.Modifier$`,{dU:1});var Xs;function Zs(){return Xs||=new Ys,Xs}function Qs(){this.bY=null,$s=this,this.bY=new Md}M=Qs.prototype=new N,M.constructor=Qs,new F().i(Qs,`com.raquo.laminar.modifiers.RenderableNode$`,{dY:1});var $s;function ec(){return $s||=new Qs,$s}function tc(){this.A=null,nc=this,this.A=new Id(new Z((e=>e)),R()),new Id(new Z((e=>``+(e|0))),R()),new Id(new Z((e=>``+ +e)),R()),new Id(new Z((e=>``+!!e)),R()),new Id(new Z((e=>e.sB())),R())}M=tc.prototype=new N,M.constructor=tc,new F().i(tc,`com.raquo.laminar.modifiers.RenderableText$`,{e3:1});var nc;function R(){return nc||=new tc,nc}function rc(){}M=rc.prototype=new N,M.constructor=rc,M.gN=(function(e,t,n){var r=new Sy(e);t.pk(r),n!==void 0&&n.oX(e,t);var i=fs().q5(e.eB(),t.eB());return i&&t.pb(r),i}),new F().i(rc,`com.raquo.laminar.nodes.ParentNode$`,{e5:1});var ic;function ac(){return ic||=new rc,ic}function oc(){}M=oc.prototype=new N,M.constructor=oc,M.sG=(function(e,t){return Ko().hc(e.cG,new Z((n=>t.e(new Js(e,n)))),!0)}),new F().i(oc,`com.raquo.laminar.nodes.ReactiveElement$`,{e7:1});var sc;function cc(){return sc||=new oc,sc}function lc(e){this.lm=null,this.lm=new js(new Kh(((t,n)=>{matchResult1:{var r=n.eB();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Yf(),a=r.textContent,o=t.eB().tagName;i.cj(Gp(new Kp,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}M=lc.prototype=new N,M.constructor=lc,M.cw=(function(e){return e.cz(new Z((e=>e.sJ(this.lm))))}),new F().i(lc,`com.raquo.laminar.nodes.Slot`,{ea:1});function uc(){}M=uc.prototype=new N,M.constructor=uc,M.q4=(function(){fc().qN(),fc().qS(),fc().qT(),fc().qU(),fc().qV(),fc().qW(),fc().qX(),fc().qY(),fc().qZ(),fc().qO(),fc().qP(),fc().qQ(),fc().qR()}),M.qN=(function(){var e=document.querySelector(`#example1`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(`top`),n=X().b.aw.aI(`0`),r=X().b.aw.aI(`0`),i=X().b.aw.aI(!0),a=X().b.aw.aI(!1);new lp(e,X().b.M().y(new Q(W().d(new(L.r()).C([Np().n(new Q(W().d(new(B.r()).C([new Y((e=>e.bX().P(t))),new Y((e=>e.gS().P(new iS(n.cU,new Y((e=>(au(),rf().j4(e)))),xy())))),new Y((e=>e.jc().P(new iS(r.cU,new Y((e=>(au(),rf().j4(e)))),xy())))),new Y((e=>e.bS().P(i))),new Y((e=>e.oc().P(a))),new Y((e=>e.gd().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new Y((e=>rp(X().b,gc().cv().cw(new Q(W().d(new(fg.r()).C([(X(),Ps().cC(X().b.ck().y(new Q(W().d(new(L.r()).C([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`1px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])))),ec().bY))])))),Tl().aD,Fd())))]))),new Q(W().d(new(L.r()).C([X().b.M().y(new Q(W().d(new(L.r()).C([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))))])))),X().b.M().y(new Q(W().d(new(L.r()).C([X().b.fi.gL(`flex gap-2`),rh().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Placement`))),new Y((e=>e.cP().c(`placement`))),new Y((e=>e.E().P(t))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7().ed(new Y((e=>e))),new Z((e=>{t.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().cl().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().je().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().jd().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ir().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().it().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().is().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().j9().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().h3().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ja().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iS().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iU().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iT().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-end`,R().A)]))))])))),Ap().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Distance`))),new Y((e=>e.ph().oS())),new Y((e=>e.cP().c(`distance`))),new Y((e=>(Ap().fa(),X().b).eg().P(n))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7(),new Z((e=>{n.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([])))),Ap().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Skidding`))),new Y((e=>e.ph().oS())),new Y((e=>e.cP().c(`skidding`))),new Y((e=>(Ap().fa(),X().b).eg().P(r))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7(),new Z((e=>{r.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([]))))])))),X().b.M().y(new Q(W().d(new(L.r()).C([X().b.fi.gL(`flex gap-2 mt-2`),zp().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cP().c(`active`))),new Y((e=>rp(X().b,yc().df(i),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{i.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([K(X().b,`Active`,R().A)])))),zp().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cP().c(`arrow`))),new Y((e=>rp(X().b,yc().df(a),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{a.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([K(X().b,`Arrow`,R().A)]))))]))))])))))}}),M.qS=(function(){var e=document.querySelector(`#example2`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!0);new lp(e,X().b.M().y(new Q([Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.bS().P(t))),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))])),X().b.fU().y(new Q([])),zp().n(new Q([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]),new Q([K(X().b,`Active`,R().A)]))])))}}),M.qT=(function(){var e=document.querySelector(`#example3`);zl().bT(e).f()||(X(),new lp(e,X().b.M().y(new Q([X().b.ck().y(new Q([X().b.rt().c(`external-anchor`),X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().c(`50px 0 0 50px`)])),Np().n(new Q([new Y((e=>e.q1().c(`external-anchor`))),new Y((e=>e.bX().cl())),new Y((e=>e.bS().c(!0)))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))]))]))))}),M.qU=(function(){var e=document.querySelector(`#example4`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(`top`);new lp(e,X().b.M().y(new Q(W().d(new(L.r()).C([Np().n(new Q(W().d(new(B.r()).C([new Y((e=>e.bX().P(t))),new Y((e=>e.bS().c(!0))),new Y((e=>rp(X().b,gc().cv().cw(new Q(W().d(new(fg.r()).C([(X(),Ps().cC(X().b.ck().y(new Q(W().d(new(L.r()).C([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])))),ec().bY))])))),Tl().aD,Fd())))]))),new Q(W().d(new(L.r()).C([X().b.M().y(new Q(W().d(new(L.r()).C([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))))])))),rh().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Placement`))),new Y((e=>e.E().P(t))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7().ed(new Y((e=>e))),new Z((e=>{t.aM.aL(e)}))))),new Y((e=>e.gd().c(`max-width: 280px;`)))]))),new Q(W().d(new(L.r()).C([J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().cl().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().je().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().jd().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ir().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().it().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().is().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().j9().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().h3().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ja().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iS().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iU().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iT().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-end`,R().A)]))))]))))])))))}}),M.qV=(function(){var e=document.querySelector(`#example5`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(0);new lp(e,X().b.M().y(new Q([Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.gS().P(t))),new Y((e=>e.bS().c(!0))),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))])),Ip().n(new Q([new Y((e=>e.cg().c(`Distance`))),new Y((e=>e.gY().c(-50))),new Y((e=>e.gX().c(50))),new Y((e=>e.h8().c(1))),new Y((e=>(Ip().fa(),X().b).eg().P(new iS(t.cU,new Y((e=>``+ +e)),xy())))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).ed(new Y((e=>+e.target.value))),new Z((e=>{t.aM.aL(e)})))))]),new Q([X().b.g4().c(`260px`)]))])))}}),M.qW=(function(){var e=document.querySelector(`#example6`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(0);new lp(e,X().b.M().y(new Q([Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.jc().P(t))),new Y((e=>e.bS().c(!0))),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))])),Ip().n(new Q([new Y((e=>e.cg().c(`Skidding`))),new Y((e=>e.gY().c(-50))),new Y((e=>e.gX().c(50))),new Y((e=>e.h8().c(1))),new Y((e=>(Ip().fa(),X().b).eg().P(new iS(t.cU,new Y((e=>``+ +e)),xy())))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).ed(new Y((e=>+e.target.value))),new Z((e=>{t.aM.aL(e)})))))]),new Q([X().b.g4().c(`260px`)]))])))}}),M.qX=(function(){var e=document.querySelector(`#example7`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(`top`),n=X().b.aw.aI(`anchor`),r=X().b.aw.aI(!0);new lp(e,X().b.M().y(new Q(W().d(new(L.r()).C([Np().n(new Q(W().d(new(B.r()).C([new Y((e=>e.bX().P(t))),new Y((e=>e.oc().P(r))),new Y((e=>e.qb().P(n))),new Y((e=>e.gS().c(8))),new Y((e=>e.bS().c(!0))),new Y((e=>e.gd().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new Y((e=>rp(X().b,gc().cv().cw(new Q(W().d(new(fg.r()).C([(X(),Ps().cC(X().b.ck().y(new Q(W().d(new(L.r()).C([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])))),ec().bY))])))),Tl().aD,Fd())))]))),new Q(W().d(new(L.r()).C([X().b.M().y(new Q(W().d(new(L.r()).C([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))))])))),X().b.M().y(new Q(W().d(new(L.r()).C([X().b.fi.gL(`flex flex-wrap gap-4 items-end`),rh().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Placement`))),new Y((e=>e.cP().c(`placement`))),new Y((e=>e.E().P(t))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7().ed(new Y((e=>e))),new Z((e=>{t.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([X().b.a6().c(`160px`),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().cl().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().je().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().jd().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`top-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ir().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().it().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().is().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`bottom-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().j9().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().h3().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().ja().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`right-end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iS().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iU().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(q().iT().H)))]))),new Q(W().d(new(L.r()).C([K(X().b,`left-end`,R().A)]))))])))),rh().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Arrow Placement`))),new Y((e=>e.cP().c(`arrow-placement`))),new Y((e=>e.E().P(n))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).f7().ed(new Y((e=>{(e===`anchor`||e===`center`||e===`end`||e===`start`)&&sg(n,e)}))),new Z((e=>(t=>{e.aL(t)}))(X().b.jT.jj)))))]))),new Q(W().d(new(L.r()).C([X().b.a6().c(`160px`),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(`anchor`)))]))),new Q(W().d(new(L.r()).C([K(X().b,`anchor`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(`start`)))]))),new Q(W().d(new(L.r()).C([K(X().b,`start`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(`end`)))]))),new Q(W().d(new(L.r()).C([K(X().b,`end`,R().A)])))),J().n(new Q(W().d(new(B.r()).C([new Y((e=>e.E().c(`center`)))]))),new Q(W().d(new(L.r()).C([K(X().b,`center`,R().A)]))))]))))])))),X().b.M().y(new Q(W().d(new(L.r()).C([X().b.fi.gL(`flex gap-4 mt-4`),zp().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cP().c(`arrow`))),new Y((e=>rp(X().b,yc().df(r),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{r.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([K(X().b,`Arrow`,R().A)]))))]))))])))))}}),M.qY=(function(){var e=document.querySelector(`#example8`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!0);new lp(e,X().b.M().y(new Q([X().b.M().y(new Q([X().b.h1().h2(),X().b.X().s().c(300),X().b.bi().c(`2px solid var(--wa-color-surface-border)`),X().b.g7().f1(),Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.ow().P(t))),new Y((e=>e.bS().c(!0))),new Y((e=>e.gQ().h7())),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().c(`150px 50px`)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))]))])),X().b.fU().y(new Q([])),zp().n(new Q([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]),new Q([K(X().b,`Flip`,R().A)]))])))}}),M.qZ=(function(){var e=document.querySelector(`#example9`);zl().bT(e).f()||(X(),new lp(e,X().b.M().y(new Q([X().b.h1().h2(),X().b.X().s().c(300),X().b.bi().c(`2px solid var(--wa-color-surface-border)`),X().b.g7().f1(),Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.ow().c(!0))),new Y((e=>e.r3().c(`right bottom`))),new Y((e=>e.r4().ry())),new Y((e=>e.bS().c(!0))),new Y((e=>e.gQ().h7())),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().c(`250px 50px`)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))]))]))))}),M.qO=(function(){var e=document.querySelector(`#example10`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!0);new lp(e,X().b.M().y(new Q([X().b.M().y(new Q([X().b.h1().h2(),X().b.bi().c(`2px solid var(--wa-color-surface-border)`),X().b.g7().f1(),Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.sq().P(t))),new Y((e=>e.sr().c(10))),new Y((e=>e.bS().c(!0))),new Y((e=>e.gQ().h7())),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().c(`60px 0 0 10px`)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(300),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))]))])),zp().n(new Q([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]),new Q([K(X().b,`Shift`,R().A)]))])))}}),M.qP=(function(){var e=document.querySelector(`#example11`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!0);new lp(e,X().b.M().y(new Q([X().b.M().y(new Q([X().b.h1().h2(),X().b.X().s().c(300),X().b.bi().c(`2px solid var(--wa-color-surface-border)`),X().b.g7().f1(),Np().n(new Q([new Y((e=>e.bX().cl())),new Y((e=>e.qd().P(new iS(t.cU,new Y((e=>e?`both`:`vertical`)),xy())))),new Y((e=>e.qe().c(10))),new Y((e=>e.bS().c(!0))),new Y((e=>e.gQ().h7())),new Y((e=>rp(X().b,gc().cv().cw(new Q([(X(),Ps().cC(X().b.ck().y(new Q([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().c(`250px 50px 100px 50px`)])),ec().bY))])),Tl().aD,Fd())))]),new Q([X().b.M().y(new Q([X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`),X().b.a6().s().c(100),X().b.X().s().c(200),X().b.g4().c(`var(--auto-size-available-width)`),X().b.rP().c(`var(--auto-size-available-height)`),X().b.g7().f1()]))]))])),X().b.fU().y(new Q([])),zp().n(new Q([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]),new Q([K(X().b,`Auto-size`,R().A)]))])))}}),M.qQ=(function(){var e=document.querySelector(`#example12`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!0),n=X().b.aw.aI(10),r=X().b.aw.aI(0);new lp(e,X().b.M().y(new Q(W().d(new(L.r()).C([Np().n(new Q(W().d(new(B.r()).C([new Y((e=>e.bX().cl())),new Y((e=>e.rs().P(t))),new Y((e=>e.gS().P(n))),new Y((e=>e.jc().P(r))),new Y((e=>e.bS().c(!0))),new Y((e=>e.gd().c(_y(au().st(`
            --arrow-color: var(--wa-color-brand-fill-loud);
          `,124))))),new Y((e=>rp(X().b,gc().cv().cw(new Q(W().d(new(fg.r()).C([(X(),Ps().cC(X().b.ck().y(new Q(W().d(new(L.r()).C([X().b.ce().cf(),X().b.a6().s().c(150),X().b.X().s().c(150),X().b.bi().c(`2px dashed var(--wa-color-neutral-fill-loud)`),X().b.ci().s().c(50)])))),ec().bY))])))),Tl().aD,Fd())))]))),new Q(W().d(new(L.r()).C([X().b.M().y(new Q(W().d(new(L.r()).C([X().b.a6().s().c(100),X().b.X().s().c(50),X().b.cb().c(`var(--wa-color-brand-fill-loud)`),X().b.bU().c(`var(--wa-border-radius-m)`)]))))])))),X().b.fU().y(new Q(W().d(new(L.r()).C([])))),zp().n(new Q(W().d(new(B.r()).C([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([K(X().b,`Hover Bridge`,R().A)])))),X().b.fU().y(new Q(W().d(new(L.r()).C([])))),Ip().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Distance`))),new Y((e=>e.gY().c(0))),new Y((e=>e.gX().c(50))),new Y((e=>e.h8().c(1))),new Y((e=>(Ip().fa(),X().b).eg().P(new iS(n.cU,new Y((e=>``+ +e)),xy())))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).ed(new Y((e=>+e.target.value))),new Z((e=>{n.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([X().b.g4().c(`260px`),X().b.oN().c(`0.5rem`)])))),Ip().n(new Q(W().d(new(B.r()).C([new Y((e=>e.cg().c(`Skidding`))),new Y((e=>e.gY().c(-50))),new Y((e=>e.gX().c(50))),new Y((e=>e.h8().c(1))),new Y((e=>(Ip().fa(),X().b).eg().P(new iS(r.cU,new Y((e=>``+ +e)),xy())))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).ed(new Y((e=>+e.target.value))),new Z((e=>{r.aM.aL(e)})))))]))),new Q(W().d(new(L.r()).C([X().b.g4().c(`260px`),X().b.oN().c(`0.5rem`)]))))])))))}}),M.qR=(function(){var e=document.querySelector(`#example13`);if(!zl().bT(e).f()){X();var t=X().b.aw.aI(!1);X().b.aw.aI(0),X().b.aw.aI(0),new lp(e,X().b.M().y(new Q([Np().n(new Q([new Y((e=>e.bX().h3())),new Y((e=>e.bS().P(t))),new Y((e=>e.gd().c(`z-index: 1000; pointer-events: none;`)))]),new Q([X().b.M().y(new Q([X().b.a6().s().c(100),X().b.X().s().c(100),X().b.bi().c(`4px solid var(--wa-color-neutral-fill-loud)`),X().b.bU().c(`50%`),X().b.sE().c(`translate(-50px, -50px)`),X().b.q2().c(`1s virtual-cursor infinite`)]))])),zp().n(new Q([new Y((e=>rp(X().b,yc().df(t),Tl().aD,Fd()))),new Y((e=>new ap((X(),Hs().b3(e.a8(),!1,!1)).dn(),new Z((e=>{t.aM.aL(e)})))))]),new Q([K(X().b,`Highlight mouse cursor`,R().A)]))])))}}),new F().i(uc,`examples.popup.Main$package$`,{ed:1});var dc;function fc(){return dc||=new uc,dc}function pc(e){try{fc().q4()}catch(e){throw e}}function mc(){this.mz=null,this.mA=!1}M=mc.prototype=new N,M.constructor=mc,M.cv=(function(){return this.mA||=(this.mz=new lc(`anchor`),!0),this.mz}),new F().i(mc,`io.github.nguyenyou.webawesome.laminar.Popup$slots$`,{em:1});var hc;function gc(){return hc||=new mc,hc}function _c(){}M=_c.prototype=new N,M.constructor=_c,M.df=(function(e){return new GC(X().b.qB().P(e),new GC(X().b.of().P(e),$()))}),new F().i(_c,`io.github.nguyenyou.webawesome.laminar.Switch$checked$`,{eq:1});var vc;function yc(){return vc||=new _c,vc}function bc(){}M=bc.prototype=new N,M.constructor=bc,M.sj=(function(e,t){var n=Da;n.setFloat64(0,e,!0);var r=n.getInt32(0,!0)|0,i=n.getInt32(4,!0)|0,a=2047&(i>>>20|0),o=a+t|0,s=-2146435073&i,c=0,l=0;if(c=r,l=s,!((a-1|0)>>>0<=2045)){var u=2147483647&i;if((r|u)===0||u>=2146435072)return e;var d=1048575&i,f=d===0?32+Math.clz32(r)|0:Math.clz32(d);o=o-(f-12|0)|0;var p=-2147483648&i,m=f-11|0,h=32&m?0:r<<m,g=p|1048575&(32&m?r<<m:(r>>>1|0)>>>~m|0|i<<m);c=h,l=g}if((o-1|0)>>>0<=2045){var _=o,v=c,y=l,b=_<<20|y,x=Da;return x.setInt32(0,v,!0),x.setInt32(4,b,!0),+x.getFloat64(0,!0)}if((53+o|0)>>>0<=53){var ee=54+o|0,S=c,te=l,C=ee<<20|te,ne=Da;return ne.setInt32(0,S,!0),ne.setInt32(4,C,!0),5551115123125783e-32*ne.getFloat64(0,!0)}var re=2047&~(t>>31),ie=-2147483648&i,w=re<<20|ie,ae=Da;return ae.setInt32(0,0,!0),ae.setInt32(4,w,!0),+ae.getFloat64(0,!0)}),new F().i(bc,`java.lang.Math$`,{eM:1});var xc;function Sc(){return xc||=new bc,xc}function Cc(e,t){for(var n=Yc().cD(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=wc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new uf(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new uf(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(df.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function wc(e,t){var n=Yc().cD(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=Yc().cD(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=Yc().cD(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=Yc().cD(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=Yc().cD(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Tc(e,c[1]),Mc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Tc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Tc(e,d[1]),`<clinit>`]}function Tc(e,t){var n=Dc(e);if(cl().hU.call(n,t))var r=Dc(e)[t];else var r=Uc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ec(e){if(!((1&e.bZ)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.hR=t,e.bZ=(1|e.bZ)<<24>>24}return e.hR}function Dc(e){return(1&e.bZ)<<24>>24?e.hR:Ec(e)}function Oc(e){if(!((2&e.bZ)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.hS=t,e.bZ=(2|e.bZ)<<24>>24}return e.hS}function kc(e){return(2&e.bZ)<<24>>24?e.hS:Oc(e)}function Ac(e){return(4&e.bZ)<<24>>24||(e.hQ=Object.keys(kc(e)),e.bZ=(4|e.bZ)<<24>>24),e.hQ}function jc(e){return(4&e.bZ)<<24>>24?e.hQ:Ac(e)}function Mc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Nc(e,t){return t?t.arguments&&t.stack?Pc(e,t):t.stack&&t.sourceURL?Lc(e,t):t.stack&&t.number?Ic(e,t):t.stack&&t.fileName?Fc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Rc(e,t):zc(e,t):Rc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Bc(e,t):Vc(e,t):t.stack&&!t.fileName?Pc(e,t):Hc(e,t):[]}function Pc(e,t){return(t.stack+`
`).replace(Yc().cD(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(Yc().bM(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(Yc().bM(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(Yc().bM(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(Yc().bM(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Fc(e,t){return t.stack.replace(Yc().bM(`(?:\\n@:0)?\\s+$`,`m`),``).replace(Yc().bM(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ic(e,t){return t.stack.replace(Yc().bM(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(Yc().bM(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(Yc().bM(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Lc(e,t){return t.stack.replace(Yc().bM(`\\[native code\\]\\n`,`m`),``).replace(Yc().bM(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(Yc().bM(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Rc(e,t){for(var n=Yc().bM(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function zc(e,t){for(var n=Yc().bM(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Bc(e,t){for(var n=Yc().cD(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Vc(e,t){for(var n=Yc().cD(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(Yc().cD(`<anonymous function: (\\S+)>`),`$1`).replace(Yc().cD(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Hc(e,t){return[]}function Uc(e,t,n){for(;;)if(t<(jc(e).length|0)){var r=jc(e)[t];if(n.startsWith(r))return``+kc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Wc(){this.hR=null,this.hS=null,this.hQ=null,this.bZ=0}M=Wc.prototype=new N,M.constructor=Wc,M.r0=(function(e){return Cc(this,Nc(this,e))}),new F().i(Wc,`java.lang.StackTrace$`,{eS:1});var Gc;function Kc(){return Gc||=new Wc,Gc}function qc(){}M=qc.prototype=new N,M.constructor=qc,M.cD=(function(e){return new RegExp(e)}),M.bM=(function(e,t){return new RegExp(e,t)}),new F().i(qc,`java.lang.StackTrace$StringRE$`,{eT:1});var Jc;function Yc(){return Jc||=new qc,Jc}function Xc(){this.n0=null,this.pu=null,Zc=this,this.n0=new Ab(!1),this.pu=new Ab(!0)}M=Xc.prototype=new N,M.constructor=Xc,new F().i(Xc,`java.lang.System$Streams$`,{eW:1});var Zc;function Qc(){return Zc||=new Xc,Zc}function $c(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.22.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function el(){this.hT=null,this.n1=null,tl=this,this.hT=$c(this),this.n1=null}M=el.prototype=new N,M.constructor=el,M.iK=(function(e,t){if(this.hT!==null){var n=this.hT;return cl().hU.call(n,e)?n[e]:t}return this.n1.iK(e,t)}),new F().i(el,`java.lang.System$SystemProperties$`,{eX:1});var tl;function nl(){return tl||=new el,tl}function rl(){this.n2=null,il=this,this.n2=new hf(void 0)}M=rl.prototype=new N,M.constructor=rl,new F().i(rl,`java.lang.Thread$`,{eY:1});var il;function al(){return il||=new rl,il}function ol(){this.hU=null,sl=this,this.hU=Object.prototype.hasOwnProperty}M=ol.prototype=new N,M.constructor=ol,new F().i(ol,`java.lang.Utils$Cache$`,{f1:1});var sl;function cl(){return sl||=new ol,sl}function ll(e,t){return e===t}function ul(e){return 0}function dl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.bw)}var fl=new F().i(0,`java.lang.Void`,{bw:1},(e=>e===void 0));function pl(e,t){throw Dg(new kg,`argument type mismatch`)}function ml(){}M=ml.prototype=new N,M.constructor=ml,M.bW=(function(e){return e instanceof P||e instanceof Wa||e instanceof Ga||e instanceof Ka||e instanceof qa||e instanceof Ja?e.a.length:e instanceof Ya?e.a.length>>>1|0:(e instanceof Xa||e instanceof Za||pl(this,e),e.a.length)}),new F().i(ml,`java.lang.reflect.Array$`,{f3:1});var hl;function gl(){return hl||=new ml,hl}function _l(){}M=_l.prototype=new N,M.constructor=_l,M.qg=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return~n;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0){r=i;continue}if(o!==0){n=1+i|0;continue}return i}}),M.os=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length>>>1|0;if((t.a.length>>>1|0)!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a,o=i<<1,s=a[o],c=a[o+1|0],l=r,u=t.a,d=l<<1,f=u[d],p=u[d+1|0];if((s^f|c^p)!==0)return!1;r=1+r|0}return!0}),M.iz=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.ot=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.or=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.oq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.ou=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),M.W=(function(e,t){var n=e.a.length,r=t<n?t:n,i=ya(e).ai.Q().ai.U(t);return e.u(0,i,0,r),i}),M.a7=(function(e,t,n){if(t>n)throw Dg(new kg,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=ya(e).ai.Q().ai.U(i);return e.u(t,s,0,o),s}),new F().i(_l,`java.util.Arrays$`,{f4:1});var vl;function z(){return vl||=new _l,vl}function yl(e,t){return Sl().pe(e,t)}function bl(){}M=bl.prototype=new N,M.constructor=bl,M.pe=(function(e,t){if(t===e>>31)return``+e;if(-2097152&(t^t>>10)){var n=t>>31,r=e^n,i=r-n|0,a=4294967296*(((t^n)+(i>>>0<r>>>0|0)|0)>>>0)+(i>>>0),o=+Math.floor(1.0000000000000265e-9*a),s=i-Math.imul(1e9,o|0)|0;s<0&&(--o,s=1e9+s|0);var c=``+s,l=o,u=c.length,d=``+l+`000000000`.substring(u)+c;return t<0?`-`+d:d}return``+(4294967296*t+(e>>>0))}),M.oC=(function(e){if(e<-0x8000000000000000)return La(0,-2147483648);if(e>=0x8000000000000000)return La(-1,2147483647);var t=e|0,n=23283064365386963e-26*e|0;return La(t,e<0&&t!==0?n-1|0:n)}),M.qD=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0;if(((s-((((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0)|0)-((o-ee|0)>>>0>o>>>0|0)|0)<0)var te=p-1|0,C=(m-1|0)+(te!==-1|0)|0,ne=te,re=C;else var ne=p,re=m}else var ie=(s>>>0)/(wa(u)>>>0)|0,ne=(4294967296*(s-Math.imul(u,ie)|0)+(o>>>0))/u|0,re=ie;if((t^r)>=0)return La(ne,re);var w=-ne|0;return La(w,(-re|0)-(w!==0|0)|0)}),M.qE=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(t>>>0)/(wa(n)>>>0)|0;return La((4294967296*(t-Math.imul(n,i)|0)+(e>>>0))/n|0,i)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0;if(((t-((((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0)|0)-((e-h|0)>>>0>e>>>0|0)|0)<0){var _=o-1|0;return La(_,(s-1|0)+(_!==-1|0)|0)}return La(o,s)}return(t===r?e>>>0<n>>>0:t>>>0<r>>>0)?La(0,0):La(1,0)}),M.s8=(function(e,t,n,r){var i=t>>31,a=e^i,o=a-i|0,s=(t^i)+(o>>>0<a>>>0|0)|0,c=r>>31,l=n^c,u=l-c|0,d=(r^c)+(u>>>0<l>>>0|0)|0;if(d|-2097152&u){var f=(4294967296*(s>>>0)+(o>>>0))/(4294967296*(d>>>0)+(u>>>0))+.00390625,p=f|0,m=23283064365386963e-26*f|0,h=65535&u,g=u>>>16|0,_=65535&p,v=p>>>16|0,y=Math.imul(h,_),b=Math.imul(g,_),x=Math.imul(h,v),ee=y+((b+x|0)<<16)|0,S=(y>>>16|0)+x|0,te=(((Math.imul(u,m)+Math.imul(d,p)|0)+Math.imul(g,v)|0)+(S>>>16|0)|0)+(((65535&S)+b|0)>>>16|0)|0,C=o-ee|0,ne=(s-te|0)-(C>>>0>o>>>0|0)|0;if(ne<0)var re=C+u|0,ie=(ne+d|0)+(re>>>0<C>>>0|0)|0,w=re,ae=ie;else var w=C,ae=ne}else var oe=(4294967296*((s>>>0)%(wa(u)>>>0)|0)+(o>>>0))/u|0,w=o-Math.imul(u,oe)|0,ae=0;if(t<0){var se=-w|0;return La(se,(-ae|0)-(se!==0|0)|0)}return La(w,ae)}),M.s9=(function(e,t,n,r){if(!(r|-2097152&n)){var i=(4294967296*((t>>>0)%(wa(n)>>>0)|0)+(e>>>0))/n|0;return La(e-Math.imul(n,i)|0,0)}if(r>=0){var a=(4294967296*(t>>>0)+(e>>>0))/(4294967296*(r>>>0)+(n>>>0))+.00390625,o=a|0,s=23283064365386963e-26*a|0,c=65535&n,l=n>>>16|0,u=65535&o,d=o>>>16|0,f=Math.imul(c,u),p=Math.imul(l,u),m=Math.imul(c,d),h=f+((p+m|0)<<16)|0,g=(f>>>16|0)+m|0,_=(((Math.imul(n,s)+Math.imul(r,o)|0)+Math.imul(l,d)|0)+(g>>>16|0)|0)+(((65535&g)+p|0)>>>16|0)|0,v=e-h|0,y=(t-_|0)-(v>>>0>e>>>0|0)|0;if(y<0){var b=v+n|0;return La(b,(y+r|0)+(b>>>0<v>>>0|0)|0)}return La(v,y)}if(t===r?e>>>0<n>>>0:t>>>0<r>>>0)return La(e,t);var x=e-n|0;return La(x,(t-r|0)-(x>>>0>e>>>0|0)|0)}),new F().i(bl,`org.scalajs.linker.runtime.RuntimeLong$`,{f7:1});var xl;function Sl(){return xl||=new bl,xl}function Cl(){this.aD=null,wl=this,this.aD=new Hg}M=Cl.prototype=new N,M.constructor=Cl,new F().i(Cl,`scala.$less$colon$less$`,{fa:1});var wl;function Tl(){return wl||=new Cl,wl}function El(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)Ju().gP(r,s,Ju().ey(t,o)),o=1+o|0,s=1+s|0}function Dl(){}M=Dl.prototype=new N,M.constructor=Dl,M.ox=(function(e,t){var n=e.x();if(n>-1){for(var r=t.bx(n),i=e.l(),a=0;a<n;)Ju().gP(r,a,i.k()),a=1+a|0;return r}var o=null,s=t.aR(),c=s===eo.l();o=[];for(var l=e.l();l.m();){var u=l.k(),d=c?za(u):u===null?ju().h5(s):u;o.push(d)}return ju().h4(s===Qa.l()?fl.l():s===Hu.l()||s===Pm.l()?I.l():s,o)}),M.fV=(function(e,t,n,r,i){var a=ya(e);a.ai.Z&&ya(n).ai.R(a.ai)?e.u(t,n,r,i):El(this,e,t,n,r,i)}),M.ov=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().p(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new F().i(Dl,`scala.Array$`,{fc:1});var Ol;function kl(){return Ol||=new Dl,Ol}function Al(){this.hV=null,this.n6=null,jl=this,this.hV=new Ja(0),this.n6=new P(0)}M=Al.prototype=new N,M.constructor=Al,new F().i(Al,`scala.Array$EmptyArrays$`,{fd:1});var jl;function Ml(){return jl||=new Al,jl}function Nl(e){return!!(e&&e.$classData&&e.$classData.n.ar)}var Pl=new F().i(1,`scala.Function0`,{ar:1}),B=new F().i(1,`scala.Function1`,{e:1});function Fl(){}M=Fl.prototype=new N,M.constructor=Fl;function Il(){}Il.prototype=M;function Ll(){}M=Ll.prototype=new N,M.constructor=Ll,M.bT=(function(e){return e===null?xy():new Sy(e)}),new F().i(Ll,`scala.Option$`,{fl:1});var Rl;function zl(){return Rl||=new Ll,Rl}function Bl(){this.na=null,this.gt=null,Vl=this,this.na=new Y((e=>this.na)),this.gt=new bh}M=Bl.prototype=new N,M.constructor=Bl,new F().i(Bl,`scala.PartialFunction$`,{fm:1});var Vl;function Hl(){return Vl||=new Bl,Vl}function Ul(){this.nd=null,Wl=this,this.nd=new Y((e=>Gl().nd))}M=Ul.prototype=new N,M.constructor=Ul,M.r7=(function(e,t){var n=gl().bW(e),r=0;if(e instanceof P)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Ja)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Za)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Ya)for(;r<n;){var i=e.a,a=r<<1,o=i[a],s=i[a+1|0];t.e(La(o,s)),r=1+r|0}else if(e instanceof Xa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Ga)for(;r<n;)t.e(Ia(e.a[r])),r=1+r|0;else if(e instanceof Ka)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof qa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Wa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else throw new Wg(e)}),new F().i(Ul,`scala.collection.ArrayOps$`,{ft:1});var Wl;function Gl(){return Wl||=new Ul,Wl}function Kl(){}M=Kl.prototype=new N,M.constructor=Kl,M.cx=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new F().i(Kl,`scala.collection.Hashing$`,{fx:1});var ql;function Jl(){return ql||=new Kl,ql}function Yl(e,t){for(var n=e.l();n.m();)t.e(n.k())}function Xl(e,t){for(var n=!0,r=e.l();n&&r.m();)n=!!t.e(r.k());return n}function Zl(e){var t=e.x();return t===-1?!e.l().m():t===0}function Ql(e,t,n,r){var i=e.l(),a=n;matchResult18:{var o,s=e.x();if(s===-1){var o=gl().bW(t);break matchResult18}var o=s}for(var c=gl().bW(t),l=r<o?r:o,u=n<0?c:c-n|0,d=u<l?u:l,f=n+(d<0?0:d)|0;a<f&&i.m();)Ju().gP(t,a,i.k()),a=1+a|0;return a-n|0}function $l(e,t,n,r){return e.x()===0?``+t+r:e.e4(rw(new iw),t,n,r).b1.o}function eu(e,t,n,r,i){var a=t.b1;n.length!==0&&(a.o=``+a.o+n);var o=e.l();if(o.m()){var s=o.k();for(a.o=``+a.o+s;o.m();){r.length!==0&&(a.o=``+a.o+r);var c=o.k();a.o=``+a.o+c}}return i.length!==0&&(a.o=``+a.o+i),t}function tu(e,t){if(e.x()>=0){var n=e.x(),r=t.bx(n);return e.bV(r,0,2147483647),r}var i=null,a=t.aR(),o=a===eo.l();i=[];for(var s=e.l();s.m();){var c=s.k(),l=o?za(c):c===null?ju().h5(a):c;i.push(l)}return ju().h4(a===Qa.l()?fl.l():a===Hu.l()||a===Pm.l()?I.l():a,i)}function nu(e,t){this.nj=null,this.fu=null,this.nj=e,this.fu=t}M=nu.prototype=new N,M.constructor=nu,M.rr=(function(){return this.nj.a4().l()}),new F().i(nu,`scala.collection.Iterator$ConcatIteratorCell`,{fG:1});function ru(){this.nm=null,iu=this,this.nm=new Y((e=>this.nm))}M=ru.prototype=new N,M.constructor=ru,M.qo=(function(e,t){return gy(e,t)>=0}),M.st=(function(e,t){for(var n=gh(new _h,e.length),r=new __(e,!1);r.aT<r.en;){for(var i=r.oP(),a=i.length,o=0;o<a&&i.charCodeAt(o)<=32;)o=1+o|0;if(o<a&&i.charCodeAt(o)===t)var s=1+o|0,c=i.substring(s);else var c=i;n.o=``+n.o+c}return n.o}),new F().i(ru,`scala.collection.StringOps$`,{fN:1});var iu;function au(){return iu||=new ru,iu}function ou(){}M=ou.prototype=new N,M.constructor=ou,M.iN=(function(e,t){return jg(new Ng,e+` is out of bounds (min 0, max `+t+`)`)}),new F().i(ou,`scala.collection.generic.CommonErrors$`,{fS:1});var su;function cu(){return su||=new ou,su}function lu(){this.ns=0,uu=this;try{au();var e=sf().oK(nl().iK(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.ns=e}M=lu.prototype=new N,M.constructor=lu,new F().i(lu,`scala.collection.immutable.IndexedSeqDefaults$`,{g0:1});var uu;function du(){return uu||=new lu,uu}function fu(){}M=fu.prototype=new N,M.constructor=fu,new F().i(fu,`scala.collection.immutable.LazyList$EmptyMarker$`,{g3:1});var pu;function mu(){return pu||=new fu,pu}function hu(){this.i2=null}M=hu.prototype=new N,M.constructor=hu,M.iA=(function(){var e=this.i2;if(e===null)throw new Ag(`uninitialized`);return e.a4()}),M.iO=(function(e){if(this.i2!==null)throw new Ag(`already initialized`);this.i2=e}),new F().i(hu,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{g5:1});function gu(){}M=gu.prototype=new N,M.constructor=gu,new F().i(gu,`scala.collection.immutable.LazyListBase$TailUpdater`,{ga:1});function _u(){this.nx=null,vu=this,wx(),this.nx=new vm(0,0,new P(0),new Ja(0),0,0)}M=_u.prototype=new N,M.constructor=_u,new F().i(_u,`scala.collection.immutable.MapNode$`,{go:1});var vu;function yu(){return vu||=new _u,vu}function bu(e,t,n){return ny(new iy,n+` is out of bounds (min 0, max `+(gl().bW(t)-1|0))}function xu(){}M=xu.prototype=new N,M.constructor=xu;function Su(){}Su.prototype=M,M.oZ=(function(e,t){if(t<0||t>(e.a.length-1|0))throw bu(this,e,t);var n=new Ja(e.a.length-1|0);e.u(0,n,0,t);var r=1+t|0,i=(e.a.length-t|0)-1|0;return e.u(r,n,t,i),n}),M.rz=(function(e,t,n){if(t<0||t>e.a.length)throw bu(this,e,t);var r=new Ja(1+e.a.length|0);e.u(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.u(t,r,i,a),r});var Cu=new F().i(0,`scala.collection.immutable.Node`,{aQ:1});function wu(){this.fD=0,Tu=this,this.fD=Ta(7)}M=wu.prototype=new N,M.constructor=wu,M.eA=(function(e,t){return 31&(e>>>t|0)}),M.e7=(function(e){return 1<<e}),M.rv=(function(e,t){return sf().e6(e&(t-1|0))}),M.cO=(function(e,t,n){return e===-1?t:this.rv(e,n)}),new F().i(wu,`scala.collection.immutable.Node$`,{gr:1});var Tu;function Eu(){return Tu||=new wu,Tu}function Du(){this.i6=null,this.bv=null,this.cL=null,this.eV=null,this.i7=null,this.nB=null,Ou=this,this.i6=new P(0),this.bv=new(I.r().r()).C(0),this.cL=new(I.r().r().r()).C(0),this.eV=new(I.r().r().r().r()).C(0),this.i7=new(I.r().r().r().r().r()).C(0),this.nB=new(I.r().r().r().r().r().r()).C(0)}M=Du.prototype=new N,M.constructor=Du,M.f2=(function(e,t){var n=e.a.length,r=new P(1+n|0);return e.u(0,r,0,n),r.a[n]=t,r}),M.F=(function(e,t){var n=z().W(e,1+e.a.length|0);return n.a[n.a.length-1|0]=t,n}),M.cM=(function(e,t){var n=ya(t).ai.Q().ai.U(1+t.a.length|0),r=t.a.length;return t.u(0,n,1,r),n.a[0]=e,n}),M.iC=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.e(t.a[r]),r=1+r|0;else for(var a=e-1|0;r<i;)this.iC(a,t.a[r],n),r=1+r|0}),M.ch=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.e(r);if(!Object.is(r,i))return this.rM(e,t,n,i);n=1+n|0}return e}),M.rM=(function(e,t,n,r){var i=new P(e.a.length);n>0&&e.u(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.e(e.a[a]),a=1+a|0;return i}),M.a5=(function(e,t,n){if(e===1)return this.ch(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.a5(e-1|0,i,n);if(i!==a)return this.rN(e,t,n,r,a);r=1+r|0}return t}),M.rN=(function(e,t,n,r,i){var a=ya(t).ai.Q().ai.U(t.a.length);r>0&&t.u(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.a5(e-1|0,t.a[o],n),o=1+o|0;return a}),new F().i(Du,`scala.collection.immutable.VectorStatics$`,{gI:1});var Ou;function V(){return Ou||=new Du,Ou}function ku(){}M=ku.prototype=new N,M.constructor=ku,M.h5=(function(e){return e===to.l()||e===no.l()||e===eo.l()||e===ro.l()?0:e===io.l()?La(0,0):e===ao.l()||e===oo.l()?0:e===$a.l()?!1:e===Qa.l()?void 0:null}),M.h4=(function(e,t){var n=t.length|0;if(e===eo.l()){for(var r=new Ga(n),i=0;i!==n;)r.a[i]=65535&(t[i]|0),i=1+i|0;return r}for(var a=e.ai.U(n),o=0;o!==n;)Ju().gP(a,o,t[o]),o=1+o|0;return a}),new F().i(ku,`scala.collection.mutable.ArrayBuilder$`,{gP:1});var Au;function ju(){return Au||=new ku,Au}function Mu(e,t,n){this.eY=null,this.dc=0,this.b0=null,this.eY=e,this.dc=t,this.b0=n}M=Mu.prototype=new N,M.constructor=Mu,M.r2=(function(e,t){for(var n=this;;)if(t===n.dc&&H().p(e,n.eY))return n;else if(n.b0===null||n.dc>t)return null;else n=n.b0}),M.z=(function(){return`Node(`+this.eY+`, `+this.dc+`) -> `+this.b0});var Nu=new F().i(Mu,`scala.collection.mutable.HashSet$Node`,{h1:1});function Pu(){}M=Pu.prototype=new N,M.constructor=Pu,M.oe=(function(e,t,n){if(t!==e)throw new Bg(n)}),new F().i(Pu,`scala.collection.mutable.MutationTracker$`,{h7:1});var Fu;function Iu(){return Fu||=new Pu,Fu}function Lu(){this.py=null,this.pH=null,this.pz=null,this.pC=null,this.pD=null,this.pB=null,this.pA=null,this.px=null,this.pI=null,this.pw=null,this.pG=null,this.pE=null,this.pF=null,Ru=this,this.py=fx(),this.pH=zx(),this.pz=hx(),this.pC=wx(),this.pD=Dx(),this.pB=xx(),this.pA=vx(),this.px=lx(),this.pI=Hx(),this.pw=ox(),this.pG=Ix(),this.pE=Ax(),this.pF=Nx()}M=Lu.prototype=new N,M.constructor=Lu,M.o9=(function(e){return e===to.l()?fx():e===no.l()?zx():e===eo.l()?hx():e===ro.l()?wx():e===io.l()?Dx():e===ao.l()?xx():e===oo.l()?vx():e===$a.l()?lx():e===Qa.l()?Hx():e===I.l()?Ix():e===Pm.l()?Ax():e===Hu.l()?Nx():new sb(e)}),new F().i(Lu,`scala.reflect.ClassTag$`,{hf:1});var Ru;function zu(){return Ru||=new Lu,Ru}function Bu(){}M=Bu.prototype=new N,M.constructor=Bu,M.p=(function(e,t){return e===t||(lf(e)?this.qM(e,t):e instanceof _a?this.qK(e,t):e===null?t===null:xa(e,t))}),M.qM=(function(e,t){if(lf(t))return this.qL(e,t);if(t instanceof _a){if(typeof e==`number`)return+e===t.c;if(e instanceof va){var n=Ba(e),r=n.l,i=n.h,a=t.c,o=a>>31;return(r^a|i^o)===0}return e===null?t===null:xa(e,t)}return e===null?t===null:xa(e,t)}),M.qL=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof va){var r=Ba(t),i=r.l;return n===4294967296*r.h+(i>>>0)}return!1}if(e instanceof va){var a=Ba(e),o=a.l,s=a.h;if(t instanceof va){var c=Ba(t),l=c.l,u=c.h;return(o^l|s^u)===0}if(typeof t==`number`){var d=+t;return 4294967296*s+(o>>>0)===d}return!1}return e===null?t===null:xa(e,t)}),M.qK=(function(e,t){if(t instanceof _a)return e.c===t.c;if(lf(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof va){var n=Ba(t),r=n.l,i=n.h,a=e.c,o=a>>31;return(r^a|i^o)===0}return t===null?e===null:xa(t,e)}return e===null&&t===null}),new F().i(Bu,`scala.runtime.BoxesRunTime$`,{hI:1});var Vu;function H(){return Vu||=new Bu,Vu}var Hu=new F().i(0,`scala.runtime.Null$`,{hL:1});function Uu(){}M=Uu.prototype=new N,M.constructor=Uu,M.cB=(function(){throw Fg(new Lg,`tried to cast away nullability, but value is null`)}),new F().i(Uu,`scala.runtime.Scala3RunTime$`,{hN:1});var Wu;function Gu(){return Wu||=new Uu,Wu}function Ku(){}M=Ku.prototype=new N,M.constructor=Ku,M.q3=(function(e){return e===null?Hu.l():ya(e)}),M.ey=(function(e,t){if(e instanceof P||e instanceof Ja||e instanceof Za)return e.a[t];if(e instanceof Ya){var n=e.a,r=t<<1;return La(n[r],n[r+1|0])}if(e instanceof Xa)return e.a[t];if(e instanceof Ga)return Ia(e.a[t]);if(e instanceof Ka||e instanceof qa||e instanceof Wa)return e.a[t];throw e===null?Ig(new Lg):new Wg(e)}),M.gP=(function(e,t,n){if(e instanceof P)e.a[t]=n;else if(e instanceof Ja)e.a[t]=n|0;else if(e instanceof Za)e.a[t]=+n;else if(e instanceof Ya){var r=Ba(n),i=e.a,a=t<<1;i[a]=r.l,i[a+1|0]=r.h}else if(e instanceof Xa)e.a[t]=Math.fround(n);else if(e instanceof Ga)e.a[t]=za(n);else if(e instanceof Ka)e.a[t]=n|0;else if(e instanceof qa)e.a[t]=n|0;else if(e instanceof Wa)e.a[t]=!!n;else throw e===null?Ig(new Lg):new Wg(e)}),M.il=(function(e){return $l(e.cQ(),e.bA()+`(`,`,`,`)`)}),M.bj=(function(e){if(e===null)return null;if(e.a.length===0){var t=zy();return Ix(),Iy(t)}return new SC(e)}),new F().i(Ku,`scala.runtime.ScalaRunTime$`,{hO:1});var qu;function Ju(){return qu||=new Ku,qu}function Yu(){}M=Yu.prototype=new N,M.constructor=Yu,M.C=(function(e,t){var n=this.dp(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),M.dp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),M.aJ=(function(e,t){return this.qf(e^t)}),M.qf=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.rI=(function(e,t){return t===e>>31?e:e^t}),M.qG=(function(e){var t=Ta(e);if(t===e)return t;var n=Sl().oC(e),r=n.l,i=n.h;if(4294967296*i+(r>>>0)===e)return r^i;var a=e|0;if(a===e&&1/e!=-1/0)return a;if(e!==e)return 2146959360;var o=Da;return o.setFloat64(0,e,!0),(o.getInt32(0,!0)|0)^(o.getInt32(4,!0)|0)}),M.Q=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.qG(+e);if(e instanceof va){var t=Ba(e);return this.rI(t.l,t.h)}return Sa(e)}),M.rA=(function(e){throw jg(new Ng,``+e)}),new F().i(Yu,`scala.runtime.Statics$`,{hQ:1});var Xu;function U(){return Xu||=new Yu,Xu}function Zu(){}M=Zu.prototype=new N,M.constructor=Zu,M.q8=(function(e){return e}),new F().i(Zu,`scala.scalajs.js.defined$`,{hW:1});var Qu;function $u(){return Qu||=new Zu,Qu}function ed(){}M=ed.prototype=new N,M.constructor=ed,M.sp=(function(e,t){return setTimeout((()=>{t.a4()}),e)}),new F().i(ed,`scala.scalajs.js.timers.package$`,{hX:1});var td;function nd(){return td||=new ed,td}function rd(){}M=rd.prototype=new N,M.constructor=rd,M.sC=(function(e){if(e instanceof Q)return e.gG;var t=[];return e.bL(new Y((e=>t.push(e)|0))),t}),new F().i(rd,`scala.scalajs.runtime.Compat$`,{i6:1});var id;function ad(){return id||=new rd,id}function od(){}M=od.prototype=new N,M.constructor=od,M.d=(function(e){for(var t=e.a.length,n=[],r=0;r!==t;){var i=r;n.push(e.a[i]),r=1+r|0}return n}),new F().i(od,`scala.scalajs.runtime.package$`,{i8:1});var sd;function W(){return sd||=new od,sd}function cd(){}M=cd.prototype=new N,M.constructor=cd,M.ss=(function(e){var t=`Illegal command line`+(e.oG()===0?``:e.oG()===1?` after first argument`:` after `+e.oG()+` arguments`)+`: `+e.sU();bf().s2().rF(t+`
`)}),new F().i(cd,`scala.util.CommandLineParser$`,{i9:1});function ld(e){this.ih=null,this.ih=e}M=ld.prototype=new N,M.constructor=ld,M.z=(function(){return`DynamicVariable(`+this.ih+`)`}),new F().i(ld,`scala.util.DynamicVariable`,{ib:1});function ud(){}M=ud.prototype=new N,M.constructor=ud,M.q9=(function(e){matchAlts1:{matchAlts2:break matchAlts1;return!1}return!0}),M.hb=(function(e){return this.q9(e)?new Sy(e):xy()}),new F().i(ud,`scala.util.control.NonFatal$`,{id:1});var dd;function fd(){return dd||=new ud,dd}function pd(){}M=pd.prototype=new N,M.constructor=pd;function md(){}md.prototype=M,M.C=(function(e,t){var n=this.dp(e,t),r=n;return n=r<<13|r>>>19,Math.imul(5,n)-430675100|0}),M.dp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|r>>>17,n=Math.imul(461845907,n),e^n}),M.aJ=(function(e,t){return this.gb(e^t)}),M.gb=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),M.pg=(function(e,t,n){var r=n;return r=this.C(r,my(`Tuple2`)),r=this.C(r,e),r=this.C(r,t),this.aJ(r,2)}),M.ga=(function(e,t,n){var r=e.by();if(r===0)return n?t:my(e.bA());var i=t;n||(i=this.C(i,my(e.bA())));for(var a=0;a<r;)i=this.C(i,U().Q(e.bz(a))),a=1+a|0;return this.aJ(i,r)}),M.iu=(function(e,t,n){var r=e.by(),i=my(n===null?e.bA():n);if(r===0)return i;var a=t;a=this.C(a,i);for(var o=0;o<r;)a=this.C(a,U().Q(e.bz(o))),o=1+o|0;return this.aJ(a,r)}),M.jf=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.l();o.m();){var s=o.k(),c=U().Q(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.C(l,n),l=this.C(l,r),l=this.dp(l,a),this.aJ(l,i)}),M.s1=(function(e,t){var n=e.l(),r=t;if(!n.m())return this.aJ(r,0);var i=n.k();if(!n.m())return this.aJ(this.C(r,U().Q(i)),1);var a=n.k(),o=U().Q(i);r=this.C(r,o);for(var s=r,c=U().Q(a),l=c-o|0,u=2;n.m();){r=this.C(r,c);var d=U().Q(n.k());if(l!==(d-c|0)||l===0){for(r=this.C(r,d),u=1+u|0;n.m();)r=this.C(r,U().Q(n.k())),u=1+u|0;return this.aJ(r,u)}c=d,u=1+u|0}return this.gb(this.C(this.C(s,l),c))}),M.aQ=(function(e,t){var n=t,r=gl().bW(e);switch(r){case 0:return this.aJ(n,0);case 1:return this.aJ(this.C(n,U().Q(Ju().ey(e,0))),1);default:var i=U().Q(Ju().ey(e,0));n=this.C(n,i);for(var a=n,o=U().Q(Ju().ey(e,1)),s=o-i|0,c=2;c<r;){n=this.C(n,o);var l=U().Q(Ju().ey(e,c));if(s!==(l-o|0)||s===0){for(n=this.C(n,l),c=1+c|0;c<r;)n=this.C(n,U().Q(Ju().ey(e,c))),c=1+c|0;return this.aJ(n,r)}o=l,c=1+c|0}return this.gb(this.C(this.C(a,s),o))}}),M.s6=(function(e,t,n,r){return this.gb(this.C(this.C(this.C(r,e),t),n))}),M.rw=(function(e,t){var n=t,r=e.r();switch(r){case 0:return this.aJ(n,0);case 1:return this.aJ(this.C(n,U().Q(e.v(0))),1);default:var i=U().Q(e.v(0));n=this.C(n,i);for(var a=n,o=U().Q(e.v(1)),s=o-i|0,c=2;c<r;){n=this.C(n,o);var l=U().Q(e.v(c));if(s!==(l-o|0)||s===0){for(n=this.C(n,l),c=1+c|0;c<r;)n=this.C(n,U().Q(e.v(c))),c=1+c|0;return this.aJ(n,r)}o=l,c=1+c|0}return this.gb(this.C(this.C(a,s),o))}}),M.rH=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.f();){var l=c.B(),u=c.t(),d=U().Q(l);switch(r=this.C(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3)}o=d,n=1+n|0,c=u}return i===2?this.s6(s,a,o,t):this.aJ(r,n)});function hd(e){this.eI=null,this.jA=null,this.ho=!1,this.jA=e,qo(this),this.ho=!1}M=hd.prototype=new N,M.constructor=hd,M.s3=(function(e){this.ho?(Zo(e),this.jA.a4()):Xo(this,e)}),M.rG=(function(){Jo(this),this.ho=!0}),new F().i(hd,`com.raquo.airstream.ownership.OneTimeOwner`,{cH:1,cI:1});function gd(){}M=gd.prototype=new N,M.constructor=gd,M.qA=(function(e){return e!==null}),M.qI=(function(e){return e?``:null}),M.f3=(function(e){return this.qA(e)}),M.ea=(function(e){return this.qI(!!e)}),new F().i(gd,`com.raquo.laminar.codecs.package$$anon$1`,{d6:1,ap:1});function _d(e){if(e===null)throw Ig(new Lg)}M=_d.prototype=new N,M.constructor=_d,M.ea=(function(e){return e}),M.f3=(function(e){return e}),new F().i(_d,`com.raquo.laminar.codecs.package$$anon$2`,{d7:1,ap:1});function vd(e){if(e===null)throw Ig(new Lg)}M=vd.prototype=new N,M.constructor=vd,M.qz=(function(e){return au(),rf().j4(e)}),M.f3=(function(e){return this.qz(e)}),M.ea=(function(e){return``+ +e}),new F().i(vd,`com.raquo.laminar.codecs.package$$anon$4`,{d8:1,ap:1});function yd(e){return new Rs(e,new Z((e=>e+`px`)))}function bd(e,t,n,r){this.l4=null,this.l6=null,this.l5=null,this.hy=null,this.l4=t,this.l6=n,this.l5=r,this.hy=new xd(r)}M=bd.prototype=new Ws,M.constructor=bd,M.gL=(function(e){return new ip(this,(X().b.pJ(),Ls().oR(e,this.l5)))}),new F().i(bd,`com.raquo.laminar.keys.CompositeKey`,{dE:1,A:1});function xd(e){this.hz=null,this.hz=e}M=xd.prototype=new N,M.constructor=xd,M.on=(function(e){return Ls().oR(e,this.hz)}),M.op=(function(e){return $l(e,``,this.hz,``)}),M.f3=(function(e){return this.on(e)}),M.ea=(function(e){return this.op(e)}),new F().i(xd,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{dG:1,ap:1});function Sd(e){if(e===null)throw Ig(new Lg)}M=Sd.prototype=new N,M.constructor=Sd,new F().i(Sd,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{dI:1,dH:1});function Cd(e){this.gn=null,this.gn=e}M=Cd.prototype=new Ws,M.constructor=Cd;var wd=new F().i(Cd,`com.raquo.laminar.keys.EventProp`,{dM:1,A:1});function Td(e,t,n){return e.cm=t,e.cV=n,e}function Ed(){this.cm=null,this.cV=null}M=Ed.prototype=new Ws,M.constructor=Ed;function Dd(){}Dd.prototype=M,M.c=(function(e){return new sp(this,e,new qh(((e,t,n)=>{fs().jb(e,t,n)})))}),M.P=(function(e){return new cp(this,e.h9(),new qh(((e,t,n)=>{fs().jb(e,this,t)})))}),new F().i(Ed,`com.raquo.laminar.keys.HtmlAttr`,{ab:1,A:1});function Od(e,t){this.cF=null,this.hA=null,this.cF=e,this.hA=t}M=Od.prototype=new Ws,M.constructor=Od,M.c=(function(e){return new sp(this,e,new qh(((e,t,n)=>{fs().p8(e,t,n)})))}),M.P=(function(e){var t=this.cF===`value`?new qh(((e,t,n)=>{var r=this.hA.ea(t),i=fs().rk(e,this);i!==void 0&&H().p(r,i)||fs().p9(e,this,r)})):new qh(((e,t,n)=>{fs().p8(e,this,t)}));return new cp(this,e.h9(),t)}),new F().i(Od,`com.raquo.laminar.keys.HtmlProp`,{bb:1,A:1});function kd(e,t,n){this.hC=null,this.hB=null,this.go=null,this.gp=null,this.hC=e,this.hB=t;var r=n.f()?xy():new Sy(n.N()+`:`+e);this.go=r.f()?e:r.N(),this.gp=n.f()?xy():new Sy(qs().rS(n.N()))}M=kd.prototype=new Ws,M.constructor=kd,new F().i(kd,`com.raquo.laminar.keys.SvgAttr`,{dN:1,A:1});function Ad(){}M=Ad.prototype=new N,M.constructor=Ad,M.c9=(function(e){}),new F().i(Ad,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{dV:1,Y:1});function jd(e,t){if(this.lh=null,this.lh=e,t===null)throw Ig(new Lg)}M=jd.prototype=new N,M.constructor=jd,M.c9=(function(e){var t=Ao(),n=(()=>{this.lh.e(e)});if(Ao(),t.bd)n();else{t.bd=!0;try{n()}finally{t.bd=!1,Do(t)}}}),new F().i(jd,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dW:1,Y:1});function Md(){}M=Md.prototype=new N,M.constructor=Md,new F().i(Md,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{dZ:1,dX:1});function Nd(){}M=Nd.prototype=new N,M.constructor=Nd,new F().i(Nd,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{e1:1,e0:1});var Pd;function Fd(){return Pd||=new Nd,Pd}function Id(e,t){if(this.li=null,this.li=e,t===null)throw Ig(new Lg)}M=Id.prototype=new N,M.constructor=Id,M.qc=(function(e){return this.li.e(e)}),new F().i(Id,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{e4:1,e2:1});function Ld(e){e.oj(new Vo(new Gh((()=>{throw Gp(new Kp,`Attempting to use owner of unmounted element: `+$l(fs().qy(e.eB(),(fs(),$())),``,` > `,``))}))))}function Rd(e,t,n){return e.hL=t,e}function zd(){this.hL=null}M=zd.prototype=new N,M.constructor=zd;function Bd(){}Bd.prototype=M,M.j1=(function(){return this.hL}),M.y=(function(e){var t=this.qj();return e.bL(new Z((e=>{e.c9(t)}))),t}),M.qj=(function(){return new ty(this,fs().qu(this))}),new F().i(zd,`com.raquo.laminar.tags.HtmlTag`,{bh:1,aF:1});function Vd(e,t){this.lq=null,this.lq=e}M=Vd.prototype=new N,M.constructor=Vd,new F().i(Vd,`com.raquo.laminar.tags.SvgTag`,{ec:1,aF:1});function Hd(){}M=Hd.prototype=new N,M.constructor=Hd,M.ea=(function(e){return e}),M.f3=(function(e){return e}),new F().i(Hd,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{es:1,ap:1});function Ud(e,t){return e.dw=t,e.f0(),e}function Wd(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1}M=Wd.prototype=new N,M.constructor=Wd;function Gd(){}Gd.prototype=M,M.gd=(function(){return this.du||=(this.dt=X().b.su(),!0),this.dt}),M.sz=(function(){return this.dx||=(this.dv=new up(this.dw,new Y((e=>void 0)),void 0),!0),this.dv}),M.n=(function(e,t){var n=this.sz().y(new Q([]));return e.bL(new Y((e=>{e.e(this).c9(n)}))),t.bL(new Y((e=>{e.c9(n)}))),n}),M.fa=(function(){return this.dz||=(this.dy=new Hp,!0),this.dy});function Kd(){this.hM=null,qd=this,this.hM=co(67,`1C]4m6m=c4]4]4]4]4]4]4]4]4]3g4]2m9]2m1Jm1m9s4g5mm6]3]4mm12>mEm1m6m1]3]=]DI]1<m24mIs4g2c4w9];]4]<]3m3m=m3mH]8]2m=mBHm3]4mK3{gggg2:g=m@]13]4E]`)}M=Kd.prototype=new N,M.constructor=Kd,M.sD=(function(e){if(e>>>0>1114111)throw Og(new kg);return String.fromCodePoint(e)}),M.qC=(function(e,t){if(e<256)var n=(e-48|0)>>>0<=9?e-48|0:(e-65|0)>>>0<=25?e-55|0:(e-97|0)>>>0<=25?e-87|0:-1;else if((e-65313|0)>>>0<=25)var n=e-65303|0;else if((e-65345|0)>>>0<=25)var n=e-65335|0;else{var r=z().qg(this.hM,e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-this.hM.a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new F().i(Kd,`java.lang.Character$`,{eA:1,a:1});var qd;function Jd(){return qd||=new Kd,qd}function Yd(e){return(1&e.dA)<<24>>24||(e.hP=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.dA=(1|e.dA)<<24>>24),e.hP}function Xd(e){return(1&e.dA)<<24>>24?e.hP:Yd(e)}function Zd(e){return(2&e.dA)<<24>>24||(e.hO=/* @__PURE__ */ RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.dA=(2|e.dA)<<24>>24),e.hO}function Qd(e){return(2&e.dA)<<24>>24?e.hO:Zd(e)}function $d(e,t){var n=Qd(e).exec(t);n===null&&ef(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&ef(t);var s=e.s4(i,a,o,15);return r===`-`?-s:s}function ef(e){throw new py(`For input string: "`+e+`"`)}function tf(){this.hP=null,this.hO=null,this.dA=0}M=tf.prototype=new N,M.constructor=tf,M.j4=(function(e){var t=Xd(this).exec(e);return t===null?$d(this,e):+parseFloat(t[1])}),M.s4=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=i.length-1|0,s=0;s!==o&&i.charCodeAt(s)===48;)s=1+s|0;var c=s,l=i.substring(c),u=l.length,d=u>r;if(d){for(var f=!1,p=r;!f&&p!==u;)l.charCodeAt(p)!==48&&(f=!0),p=1+p|0;var m=f?`1`:`0`,h=l.substring(0,r)+m}else var h=l;var g=a+(d?(l.length-(1+r|0)|0)<<2:0)|0;return Sc().sj(+parseInt(h,16),Ta(+parseInt(n,10))+g|0)}),new F().i(tf,`java.lang.Double$`,{eD:1,a:1});var nf;function rf(){return nf||=new tf,nf}function af(){}M=af.prototype=new N,M.constructor=af,M.g8=(function(e){throw new py(`For input string: "`+e+`"`)}),M.oK=(function(e,t,n){e===null&&sf().g8(e);var r=e.length;r===0&&sf().g8(e);var i=Jd(),a=e.charCodeAt(0),o=a===45,s=o?-1:0,c=(o||a===43)|0;c>=r&&sf().g8(e);var l=0;for(l=0;c!==r;){var u=i.qC(e.charCodeAt(c),t);(u<0||l>>>0>n>>>0)&&sf().g8(e),l=Math.imul(l,t)+u|0,c=1+c|0}return l>>>0>(2147483647-s|0)>>>0&&sf().g8(e),(l^s)-s|0}),M.e6=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new F().i(af,`java.lang.Integer$`,{eH:1,a:1});var of;function sf(){return of||=new af,of}function cf(){}M=cf.prototype=new N,M.constructor=cf;function lf(e){return e instanceof cf||typeof e==`number`||e instanceof va}function uf(e,t,n,r,i){this.eM=null,this.fo=null,this.eN=null,this.eO=0,this.eL=0,this.eM=e,this.fo=t,this.eN=n,this.eO=r,this.eL=i}M=uf.prototype=new N,M.constructor=uf,M.q=(function(e){return e instanceof uf&&this.eN===e.eN&&this.eO===e.eO&&this.eL===e.eL&&this.eM===e.eM&&this.fo===e.fo}),M.z=(function(){var e=``;return this.eM!==`<jscode>`&&(e=``+e+this.eM+`.`),e=``+e+this.fo,this.eN===null?e+=`(Unknown Source)`:(e=e+`(`+this.eN,this.eO>=0&&(e=e+`:`+this.eO,this.eL>=0&&(e=e+`:`+this.eL)),e+=`)`),e}),M.w=(function(){return my(this.eM)^my(this.fo)^my(this.eN)^this.eO^this.eL});var df=new F().i(uf,`java.lang.StackTraceElement`,{bt:1,a:1});function ff(){}M=ff.prototype=new N,M.constructor=ff,M.rT=(function(e,t,n){for(var r=t+n|0,i=``,a=t;a!==r;)i+=``+Ea(e.a[a]),a=1+a|0;return i}),new F().i(ff,`java.lang.String$`,{eU:1,a:1});var pf;function mf(){return pf||=new ff,pf}function hf(e){}M=hf.prototype=new N,M.constructor=hf,new F().i(hf,`java.lang.Thread`,{bv:1,eP:1});function gf(e,t,n,r,i){return e.n4=t,e.n5=i,i&&e.r1(),e}var _f=class extends Error{constructor(){super(),this.n4=null,this.n5=!1,this.n3=null,this.gr=null}oH(e){return this}g2(){return this.n4}r1(){var e=this instanceof xb?this.bn:this;return this.n3=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?/* @__PURE__ */ Error():(Error.captureStackTrace(this),this),this}rm(){return this.gr===null&&(this.gr=this.n5?Kc().r0(this.n3):new(df.r()).C(0)),this.gr}z(){var e=ba(this),t=this.g2();return t===null?e:e+`: `+t}w(){return Ha.prototype.w.call(this)}q(e){return Ha.prototype.q.call(this,e)}get message(){var e=this.g2();return e===null?``:e}get name(){return ba(this)}toString(){return this.z()}};function vf(){this.n7=null,yf=this,this.n7=new ld(Qc().n0)}M=vf.prototype=new N,M.constructor=vf,M.s2=(function(){return this.n7.ih}),new F().i(vf,`scala.Console$`,{fe:1,hd:1});var yf;function bf(){return yf||=new vf,yf}function xf(){}M=xf.prototype=new N,M.constructor=xf;function Sf(){}Sf.prototype=M,M.z=(function(){return`<function1>`});function Cf(){}M=Cf.prototype=new Il,M.constructor=Cf;function wf(){}wf.prototype=M,M.sK=(function(e){if(e===null)return null;if(e.a.length===0){var t=rb();return Ix(),t.nG}return new RC(e)});function Tf(e,t,n){return e.cy(t)?e.e(t):n.e(t)}function Ef(){}M=Ef.prototype=new N,M.constructor=Ef,new F().i(Ef,`scala.collection.immutable.LazyList$Uninitialized$`,{g7:1,a:1});var Df;function Of(){return Df||=new Ef,Df}function kf(){}M=kf.prototype=new Su,M.constructor=kf;function Af(){}Af.prototype=M;function jf(e,t){if(t===e)e.b9(yv().oy(t));else for(var n=t.l();n.m();)e.b2(n.k());return e}function Mf(){}M=Mf.prototype=new N,M.constructor=Mf;function Nf(){}Nf.prototype=M,M.z=(function(){return`<function0>`});function Pf(){}M=Pf.prototype=new N,M.constructor=Pf;function Ff(){}Ff.prototype=M,M.z=(function(){return`<function1>`});function If(){}M=If.prototype=new N,M.constructor=If;function Lf(){}Lf.prototype=M,M.z=(function(){return`<function2>`});function Rf(){}M=Rf.prototype=new N,M.constructor=Rf;function zf(){}zf.prototype=M,M.z=(function(){return`<function3>`});function Bf(e){this.gE=!1,this.gE=e}M=Bf.prototype=new N,M.constructor=Bf,M.z=(function(){return``+this.gE}),new F().i(Bf,`scala.runtime.BooleanRef`,{hH:1,a:1});function Vf(e){this.ev=0,this.ev=e}M=Vf.prototype=new N,M.constructor=Vf,M.z=(function(){return``+this.ev}),new F().i(Vf,`scala.runtime.IntRef`,{hJ:1,a:1});function Hf(e){this.gF=null,this.gF=e}M=Hf.prototype=new N,M.constructor=Hf,M.z=(function(){return``+this.gF}),new F().i(Hf,`scala.runtime.ObjectRef`,{hM:1,a:1});function Uf(){this.am=0,this.e3=0,this.nW=0,this.ii=0,Wf=this,this.am=my(`Seq`),this.e3=my(`Map`),this.nW=my(`Set`),this.ii=this.jf($(),this.e3)}M=Uf.prototype=new md,M.constructor=Uf,M.cE=(function(e,t){return this.pg(U().Q(e),U().Q(t),-889275714)}),M.p7=(function(e){return lS(e)?this.rw(e,this.am):e instanceof DC?this.rH(e,this.am):this.s1(e,this.am)}),M.rO=(function(e){if(e.f())return this.ii;var t=new Gf,n=this.e3;return e.ez(t),n=this.C(n,t.gH),n=this.C(n,t.gI),n=this.dp(n,t.gJ),this.aJ(n,t.gK)}),new F().i(Uf,`scala.util.hashing.MurmurHash3$`,{ig:1,ie:1});var Wf;function G(){return Wf||=new Uf,Wf}function Gf(){this.gH=0,this.gI=0,this.gK=0,this.gJ=0,this.gH=0,this.gI=0,this.gK=0,this.gJ=1}M=Gf.prototype=new N,M.constructor=Gf,M.z=(function(){return`<function2>`}),M.q7=(function(e,t){var n=G().cE(e,t);this.gH=this.gH+n|0,this.gI^=n,this.gJ=Math.imul(this.gJ,1|n),this.gK=1+this.gK|0}),M.dg=(function(e,t){this.q7(e,t)}),new F().i(Gf,`scala.util.hashing.MurmurHash3$accum$1`,{ih:1,aH:1});var Kf=class extends _f{};function qf(){this.he=null,this.jh=null,this.ji=null,Jf=this,this.he=yv().ob(Ju().bj(new(B.r()).C([]))),this.jh=new Z((e=>{try{console.error(this.f5(e)+`
`+this.rl(e,`
`))}catch(e){var t=e instanceof _f?e:new xb(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.ji=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof xb?t.bn:t})),this.s7(this.jh)}M=qf.prototype=new N,M.constructor=qf,M.f5=(function(e){try{var t=e.g2()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ya(e).iL()+`: `+t}),M.rl=(function(e,t){try{return $l(Zp().sK(e.rm()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),M.s7=(function(e){this.he.b2(e)}),M.cj=(function(e){for(var t=this.he.l();t.m();){var n=t.k();try{n.e(e)}catch(e){var r=e instanceof _f?e:new xb(e),i=this.ji;if(n===null?i===null:n.q(i))throw r instanceof xb?r.bn:r;console.warn(`Error processing an unhandled error callback:`),nd().sp(0,new Gh((e=>(()=>{throw e instanceof xb?e.bn:e}))(r)))}}}),new F().i(qf,`com.raquo.airstream.core.AirstreamError$`,{ct:1,hb:1,hc:1});var Jf;function Yf(){return Jf||=new qf,Jf}function Xf(e){e.gV(!0),e.iZ(void 0)}function Zf(e,t,n){return Zh(e,ho().pm(t,Hl().gt,!0),n)}function Qf(e,t){e.iR()?tg(e,t):tp(e).push(new Gh((()=>{tg(e,t)})))}function $f(e,t){e.iR()?eg(e,t):tp(e).push(new Gh((()=>{eg(e,t)})))}function ep(e){return ag(e)>0}function tp(e){var t=e.iY();if(t===void 0){var n=os().bo(Ju().bj(new(Pl.r()).C([])));return e.iZ(n),n}return t}var np=new F().i(1,`com.raquo.airstream.core.Observer`,{az:1,av:1,ag:1});function K(e,t,n){return new eh(n.qc(t))}function rp(e,t,n,r){return new jd(new Z((e=>{(gs(),new ps(t,null,null)).bL(new Z((e=>(t=>{n.e(t).c9(e)}))(e)))})),Zs())}function ip(e,t){this.lb=null,this.hD=null,this.lb=e,this.hD=t}M=ip.prototype=new N,M.constructor=ip,M.c9=(function(e){this.hD.f()||_g(e,this.lb,null,this.hD,$())}),new F().i(ip,`com.raquo.laminar.modifiers.CompositeKeySetter`,{dQ:1,Y:1,bd:1});function ap(e,t){this.eK=null,this.hE=null,this.hF=null,this.eK=e,this.hE=(n=>{var r=e.fj.e(n);r.f()||t.e(r.N())}),this.hF=(()=>{var e=null;e=this;var t={};if(e===null)throw Ig(new Lg);return t.capture=e.eK.fl,t.passive=e.eK.fk,t})()}M=ap.prototype=new N,M.constructor=ap,M.c9=(function(e){this.qh(e,!1)}),M.qh=(function(e,t){if(gg(e,this)===-1){var n=new Z((t=>(fs().pP(e.bq,this),new Qo(t.l9,new Gh((()=>{var t=gg(e,this);t!==-1&&(hg(e,t),fs().sa(e.bq,this))})))))),r=t?cc().sG(e,n):Ko().hc(e.cG,new Z((t=>n.e(new Js(e,t)))),!1);return mg(e,this,t),r}var i=new Z((e=>void 0));return Ko().pc(e.cG,new Z((t=>{i.e(new Js(e,t))})),!1)}),M.z=(function(){return`EventListener(`+this.eK.ek.gn+`)`});var op=new F().i(ap,`com.raquo.laminar.modifiers.EventListener`,{dR:1,Y:1,bc:1});function sp(e,t,n){this.ld=null,this.H=null,this.lc=null,this.ld=e,this.H=t,this.lc=n}M=sp.prototype=new N,M.constructor=sp,M.c9=(function(e){this.lc.oa(e,this.ld,this.H)}),new F().i(sp,`com.raquo.laminar.modifiers.KeySetter`,{dS:1,Y:1,bd:1});function cp(e,t,n){this.le=null,this.lg=null,this.lf=null,this.le=e,this.lg=t,this.lf=n}M=cp.prototype=new N,M.constructor=cp,M.c9=(function(e){this.qi(e)}),M.qi=(function(e){e.rX(this.le);var t=this.lg,n=new Z((t=>{this.lf.oa(e,t,this)}));return Ko().sv(e.cG,t,n)}),new F().i(cp,`com.raquo.laminar.modifiers.KeyUpdater`,{dT:1,Y:1,bc:1});function lp(e,t){if(this.hJ=null,this.lk=null,this.ll=null,this.lk=t,Ld(this),e===null)throw Gp(new Kp,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!fs().rE(e,document))throw Gp(new Kp,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.ll=e,this.rR()}M=lp.prototype=new N,M.constructor=lp,M.gT=(function(){return this.hJ}),M.oj=(function(e){this.hJ=e}),M.rR=(function(){return this.hJ.nY(),ac().gN(this,this.lk,void 0)}),M.eB=(function(){return this.ll}),new F().i(lp,`com.raquo.laminar.nodes.RootNode`,{e9:1,aE:1,bf:1});function up(e,t,n){this.hL=null,this.lp=null,this.lo=null,this.lp=e,this.lo=n,Rd(this,e,!1)}M=up.prototype=new Bd,M.constructor=up,M.j1=(function(){return this.lp}),M.q0=(function(){var e=this.lo;return e===void 0?void 0:e.map((e=>e.sL.cF))}),new F().i(up,`com.raquo.laminar.tags.CustomHtmlTag`,{bg:1,bh:1,aF:1});function dp(){this.cm=null,this.cV=null,this.lr=null,this.ls=!1,Td(this,`type`,new Hd)}M=dp.prototype=new Dd,M.constructor=dp,M.oS=(function(){return this.ls||=(this.lr=pp().c(`number`),!0),this.lr}),new F().i(dp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{ee:1,ab:1,A:1});var fp;function pp(){return fp||=new dp,fp}function mp(){this.cm=null,this.cV=null,this.lt=null,this.ly=!1,this.lu=null,this.lv=!1,this.lw=null,this.lx=!1,this.lz=null,this.lE=!1,this.lA=null,this.lB=!1,this.lC=null,this.lD=!1,this.lF=null,this.lK=!1,this.lG=null,this.lH=!1,this.lI=null,this.lJ=!1,this.lL=null,this.lQ=!1,this.lM=null,this.lN=!1,this.lO=null,this.lP=!1,Td(this,`placement`,new Hd)}M=mp.prototype=new Dd,M.constructor=mp,M.ir=(function(){return this.ly||=(this.lt=q().c(`bottom`),!0),this.lt}),M.is=(function(){return this.lv||=(this.lu=q().c(`bottom-end`),!0),this.lu}),M.it=(function(){return this.lx||=(this.lw=q().c(`bottom-start`),!0),this.lw}),M.iS=(function(){return this.lE||=(this.lz=q().c(`left`),!0),this.lz}),M.iT=(function(){return this.lB||=(this.lA=q().c(`left-end`),!0),this.lA}),M.iU=(function(){return this.lD||=(this.lC=q().c(`left-start`),!0),this.lC}),M.j9=(function(){return this.lK||=(this.lF=q().c(`right`),!0),this.lF}),M.ja=(function(){return this.lH||=(this.lG=q().c(`right-end`),!0),this.lG}),M.h3=(function(){return this.lJ||=(this.lI=q().c(`right-start`),!0),this.lI}),M.cl=(function(){return this.lQ||=(this.lL=q().c(`top`),!0),this.lL}),M.jd=(function(){return this.lN||=(this.lM=q().c(`top-end`),!0),this.lM}),M.je=(function(){return this.lP||=(this.lO=q().c(`top-start`),!0),this.lO}),new F().i(mp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{ef:1,ab:1,A:1});var hp;function q(){return hp||=new mp,hp}function gp(){this.cm=null,this.cV=null,Td(this,`arrow-placement`,new Hd)}M=gp.prototype=new Dd,M.constructor=gp,new F().i(gp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupArrowPlacement$`,{eg:1,ab:1,A:1});var _p;function vp(){return _p||=new gp,_p}function yp(){this.cm=null,this.cV=null,Td(this,`auto-size`,new Hd)}M=yp.prototype=new Dd,M.constructor=yp,new F().i(yp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupAutoSize$`,{eh:1,ab:1,A:1});var bp;function xp(){return bp||=new yp,bp}function Sp(){this.cm=null,this.cV=null,this.lR=null,this.lS=!1,Td(this,`boundary`,new Hd)}M=Sp.prototype=new Dd,M.constructor=Sp,M.h7=(function(){return this.lS||=(this.lR=wp().c(`scroll`),!0),this.lR}),new F().i(Sp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupBoundary$`,{ei:1,ab:1,A:1});var Cp;function wp(){return Cp||=new Sp,Cp}function Tp(){this.cm=null,this.cV=null,this.lT=null,this.lU=!1,Td(this,`flip-fallback-strategy`,new Hd)}M=Tp.prototype=new Dd,M.constructor=Tp,M.ry=(function(){return this.lU||=(this.lT=Dp().c(`initial`),!0),this.lT}),new F().i(Tp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupFlipFallbackStrategy$`,{ej:1,ab:1,A:1});var Ep;function Dp(){return Ep||=new Tp,Ep}function Op(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.lZ=null,this.m0=!1,this.m1=null,this.m2=!1,this.lV=null,this.lW=!1,this.lX=null,this.lY=!1,Ud(this,`wa-input`)}M=Op.prototype=new Gd,M.constructor=Op,M.a8=(function(){return this.m0||=(this.lZ=(X(),new Cd(`input`)),!0),this.lZ}),M.ph=(function(){return this.m2||=(this.m1=pp(),!0),this.m1}),M.cg=(function(){return this.lW||=(this.lV=(X(),Td(new Ed,`label`,Cs().bk)),!0),this.lV}),M.cP=(function(){return this.lY||=(this.lX=(X(),Td(new Ed,`name`,Cs().bk)),!0),this.lX}),M.f0=(function(){return xn}),new F().i(Op,`io.github.nguyenyou.webawesome.laminar.Input$`,{ek:1,ai:1,ah:1});var kp;function Ap(){return kp||=new Op,kp}function jp(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.m5=null,this.m6=!1,this.m3=null,this.m4=!1,this.mr=null,this.ms=!1,this.mf=null,this.mg=!1,this.mh=null,this.mi=!1,this.mx=null,this.my=!1,this.m7=null,this.ma=!1,this.m8=null,this.m9=!1,this.mj=null,this.mo=!1,this.mk=null,this.ml=!1,this.mm=null,this.mn=!1,this.mt=null,this.mw=!1,this.mu=null,this.mv=!1,this.mb=null,this.me=!1,this.mc=null,this.md=!1,this.mp=null,this.mq=!1,Ud(this,`wa-popup`)}M=jp.prototype=new Gd,M.constructor=jp,M.q1=(function(){return this.m6||=(this.m5=(X(),Td(new Ed,`anchor`,Cs().bk)),!0),this.m5}),M.bS=(function(){return this.m4||=(this.m3=(X(),Td(new Ed,`active`,Cs().eJ)),!0),this.m3}),M.bX=(function(){return this.ms||=(this.mr=q(),!0),this.mr}),M.gQ=(function(){return this.mg||=(this.mf=wp(),!0),this.mf}),M.gS=(function(){return this.mi||=(this.mh=(X(),Td(new Ed,`distance`,Cs().ew())),!0),this.mh}),M.jc=(function(){return this.my||=(this.mx=(X(),Td(new Ed,`skidding`,Cs().ew())),!0),this.mx}),M.oc=(function(){return this.ma||=(this.m7=(X(),Td(new Ed,`arrow`,Cs().eJ)),!0),this.m7}),M.qb=(function(){return this.m9||=(this.m8=vp(),!0),this.m8}),M.ow=(function(){return this.mo||=(this.mj=(X(),Td(new Ed,`flip`,Cs().eJ)),!0),this.mj}),M.r3=(function(){return this.ml||=(this.mk=(X(),Td(new Ed,`flip-fallback-placements`,Cs().bk)),!0),this.mk}),M.r4=(function(){return this.mn||=(this.mm=Dp(),!0),this.mm}),M.sq=(function(){return this.mw||=(this.mt=(X(),Td(new Ed,`shift`,Cs().eJ)),!0),this.mt}),M.sr=(function(){return this.mv||=(this.mu=(X(),Td(new Ed,`shift-padding`,Cs().ew())),!0),this.mu}),M.qd=(function(){return this.me||=(this.mb=xp(),!0),this.mb}),M.qe=(function(){return this.md||=(this.mc=(X(),Td(new Ed,`auto-size-padding`,Cs().ew())),!0),this.mc}),M.rs=(function(){return this.mq||=(this.mp=(X(),Td(new Ed,`hover-bridge`,Cs().eJ)),!0),this.mp}),M.f0=(function(){return Si}),new F().i(jp,`io.github.nguyenyou.webawesome.laminar.Popup$`,{el:1,ai:1,ah:1});var Mp;function Np(){return Mp||=new jp,Mp}function Pp(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mP=null,this.mQ=!1,this.mJ=null,this.mK=!1,this.mN=null,this.mO=!1,this.mL=null,this.mM=!1,this.mR=null,this.mS=!1,Ud(this,`wa-slider`)}M=Pp.prototype=new Gd,M.constructor=Pp,M.a8=(function(){return this.mQ||=(this.mP=(X(),new Cd(`input`)),!0),this.mP}),M.cg=(function(){return this.mK||=(this.mJ=(X(),Td(new Ed,`label`,Cs().bk)),!0),this.mJ}),M.gY=(function(){return this.mO||=(this.mN=(X(),Td(new Ed,`min`,Cs().ew())),!0),this.mN}),M.gX=(function(){return this.mM||=(this.mL=(X(),Td(new Ed,`max`,Cs().ew())),!0),this.mL}),M.h8=(function(){return this.mS||=(this.mR=(X(),Td(new Ed,`step`,Cs().ew())),!0),this.mR}),M.f0=(function(){return pa}),new F().i(Pp,`io.github.nguyenyou.webawesome.laminar.Slider$`,{eo:1,ai:1,ah:1});var Fp;function Ip(){return Fp||=new Pp,Fp}function Lp(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mV=null,this.mW=!1,this.mT=null,this.mU=!1,Ud(this,`wa-switch`)}M=Lp.prototype=new Gd,M.constructor=Lp,M.a8=(function(){return this.mW||=(this.mV=(X(),new Cd(`input`)),!0),this.mV}),M.cP=(function(){return this.mU||=(this.mT=(X(),Td(new Ed,`name`,Cs().bk)),!0),this.mT}),M.f0=(function(){return ga}),new F().i(Lp,`io.github.nguyenyou.webawesome.laminar.Switch$`,{ep:1,ai:1,ah:1});var Rp;function zp(){return Rp||=new Lp,Rp}function Bp(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mX=null,this.mY=!1,Ud(this,`wa-option`)}M=Bp.prototype=new Gd,M.constructor=Bp,M.E=(function(){return this.mY||=(this.mX=(X(),Td(new Ed,`value`,Cs().bk)),!0),this.mX}),M.f0=(function(){return Tn}),new F().i(Bp,`io.github.nguyenyou.webawesome.laminar.UOption$`,{er:1,ai:1,ah:1});var Vp;function J(){return Vp||=new Bp,Vp}function Hp(){}M=Hp.prototype=new Sf,M.constructor=Hp,M.e=(function(e){return X().b}),new F().i(Hp,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{et:1,ff:1,e:1});function Up(e){if(e.ai.Z)return e.ai.Q().iL()+`[]`;for(var t=e.ai.N,n=t.length-1|0;n>=0&&t.charCodeAt(n)===36;)n=n-1|0;if(n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9){for(n=n-1|0;n>=0&&(t.charCodeAt(n)-48|0)>>>0<=9;)n=n-1|0;for(;n>=0&&t.charCodeAt(n)===36;)n=n-1|0}for(;;){if(n>=0)var r=n,i=t.charCodeAt(r),a=i!==36&&i!==46;else var a=!1;if(a)n=n-1|0;else break}var o=1+n|0;return t.substring(o)}function Wp(e){this.hN=null,this.ai=e}M=Wp.prototype=new N,M.constructor=Wp,M.z=(function(){return(this.ai.Y?`interface `:this.ai.X?``:`class `)+this.ai.N}),M.iL=(function(){return this.hN===null&&(this.hN=Up(this)),this.hN}),new F().i(Wp,`java.lang.Class`,{eB:1,a:1,Z:1});function Gp(e,t){return gf(e,t,null,!0,!0),e}var Kp=class extends _f{};new F().i(Kp,`java.lang.Exception`,{I:1,w:1,a:1});function qp(){}M=qp.prototype=new N,M.constructor=qp;function Jp(){}Jp.prototype=M;function Yp(){this.pv=null,Xp=this,G_(),this.pv=Tm()}M=Yp.prototype=new wf,M.constructor=Yp,M.se=(function(e){if(!e)throw Dg(new kg,`requirement failed`)}),new F().i(Yp,`scala.Predef$`,{fo:1,fh:1,fi:1});var Xp;function Zp(){return Xp||=new Yp,Xp}function Qp(e,t){switch(t){case 0:return e.be;case 1:return e.b5;default:throw jg(new Ng,t+` is out of bounds (min 0, max 1)`)}}function $p(e,t){return e.fs=t,e}function em(){this.fs=null}M=em.prototype=new N,M.constructor=em;function tm(){}tm.prototype=M,M.aC=(function(e){return this.fs.iD(e,ox())}),M.b4=(function(){return this.fs.gZ(ox())}),M.dh=(function(e){return this.fs.iD(e,ox())});function nm(e,t){return e.gv=t,e}function rm(){this.gv=null}M=rm.prototype=new N,M.constructor=rm;function im(){}im.prototype=M,M.aC=(function(e){return this.gv.aC(e)}),M.b4=(function(){return this.gv.b4()});function am(e,t){if(t<0)return 1;var n=e.x();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.l();i.m();){if(r===t)return 1;i.k(),r=1+r|0}return r-t|0}function om(e,t){return new i_(e).iv(t)}function sm(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?dm().S:new s_(e,r,i)}function cm(e,t){for(var n=t.l();e.m();)if(!n.m()||!H().p(e.k(),n.k()))return!1;return!n.m()}function lm(){this.S=null,um=this,this.S=new Qg}M=lm.prototype=new N,M.constructor=lm,M.b4=(function(){return new Ay}),M.aC=(function(e){return e.l()}),new F().i(lm,`scala.collection.Iterator$`,{fA:1,a:1,J:1});var um;function dm(){return um||=new lm,um}function fm(e,t){return e.hY=t,e}function pm(){this.hY=null}M=pm.prototype=new N,M.constructor=pm;function mm(){}mm.prototype=M,M.aC=(function(e){return this.hY.aC(e)});function hm(){}M=hm.prototype=new N,M.constructor=hm,M.oz=(function(e){return mb(e)?e:Zg(e)?new Kx(new Am((e=>(()=>e.l()))(e))):pS(new mS,Bh().iF(e))}),M.b4=(function(){return new Vh(new Y((e=>this.oz(e))),(hv(),new gv))}),M.aC=(function(e){return this.oz(e)}),new F().i(hm,`scala.collection.View$`,{fP:1,a:1,J:1});var gm;function _m(){return gm||=new hm,gm}function vm(e,t,n,r,i,a){this.Y=0,this.aj=0,this.an=null,this.bD=null,this.aU=0,this.br=0,this.Y=e,this.aj=t,this.an=n,this.bD=r,this.aU=i,this.br=a}M=vm.prototype=new Af,M.constructor=vm,M.aS=(function(){return this.aU}),M.e8=(function(){return this.br}),M.eb=(function(e){return this.an.a[e<<1]}),M.dm=(function(e){return this.an.a[1+(e<<1)|0]}),M.oE=(function(e){return new Jg(this.an.a[e<<1],this.an.a[1+(e<<1)|0])}),M.g1=(function(e){return this.bD.a[e]}),M.dk=(function(e){return this.an.a[(this.an.a.length-1|0)-e|0]}),M.ip=(function(e,t,n,r){var i=Eu().eA(n,r),a=Eu().e7(i);if((this.Y&a)!==0){var o=Eu().cO(this.Y,i,a);if(H().p(e,this.eb(o)))return this.dm(o);throw new Vg(`key not found: `+e)}if((this.aj&a)!==0)return this.dk(Eu().cO(this.aj,i,a)).ip(e,t,n,5+r|0);throw new Vg(`key not found: `+e)}),M.iJ=(function(e,t,n,r,i){var a=Eu().eA(n,r),o=Eu().e7(a);if((this.Y&o)!==0){var s=Eu().cO(this.Y,a,o);return H().p(e,this.eb(s))?this.dm(s):i.a4()}return(this.aj&o)===0?i.a4():this.dk(Eu().cO(this.aj,a,o)).iJ(e,t,n,5+r|0,i)}),M.iw=(function(e,t,n,r){var i=Eu().eA(n,r),a=Eu().e7(i);if((this.Y&a)!==0){var o=Eu().cO(this.Y,i,a);return this.bD.a[o]===t&&H().p(e,this.eb(o))}return(this.aj&a)!==0&&this.dk(Eu().cO(this.aj,i,a)).iw(e,t,n,5+r|0)}),M.pi=(function(e,t,n,r,i,a){var o=Eu().eA(r,i),s=Eu().e7(o);if((this.Y&s)!==0){var c=Eu().cO(this.Y,o,s),l=this.eb(c),u=this.g1(c);if(u===n&&H().p(l,e)){if(a){var d=this.dm(c);return Object.is(l,e)&&Object.is(d,t)?this:this.qt(s,e,t)}return this}var f=this.dm(c),p=Jl().cx(u);return this.qr(s,p,this.j0(l,f,u,p,e,t,n,r,5+i|0))}if((this.aj&s)!==0){var m=Eu().cO(this.aj,o,s),h=this.dk(m),g=h.pj(e,t,n,r,5+i|0,a);return g===h?this:this.qs(s,h,g)}return this.qq(s,e,n,r,t)}),M.j0=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new ym(n,r,iv().iG(new Q([new Jg(e,t),new Jg(i,a)])));var l=Eu().eA(r,c),u=Eu().eA(s,c),d=r+s|0;if(l!==u){var f=Eu().e7(l)|Eu().e7(u);if(l<u){for(var p=new Q([e,t,i,a]),m=new P(p.r()),h=Ey(new Oy,new bS(p)),g=0;h.bl>0;)m.a[g]=h.k(),g=1+g|0;return new vm(f,0,m,new Ja(new Int32Array([n,o])),2,d)}for(var _=new Q([i,a,e,t]),v=new P(_.r()),y=Ey(new Oy,new bS(_)),b=0;y.bl>0;)v.a[b]=y.k(),b=1+b|0;return new vm(f,0,v,new Ja(new Int32Array([o,n])),2,d)}for(var x=Eu().e7(l),ee=this.j0(e,t,n,r,i,a,o,s,5+c|0),S=new Q([ee]),te=new P(S.r()),C=Ey(new Oy,new bS(S)),ne=0;C.bl>0;)te.a[ne]=C.k(),ne=1+ne|0;return new vm(0,x,te,Ml().hV,ee.aS(),ee.e8())}),M.iM=(function(){return this.aj!==0}),M.j2=(function(){return sf().e6(this.aj)}),M.gU=(function(){return this.Y!==0}),M.j5=(function(){return sf().e6(this.Y)}),M.fW=(function(e){return sf().e6(this.Y&(e-1|0))}),M.j3=(function(e){return sf().e6(this.aj&(e-1|0))}),M.qt=(function(e,t,n){var r=this.fW(e)<<1,i=this.an,a=new P(i.a.length),o=i.a.length;return i.u(0,a,0,o),a.a[1+r|0]=n,new vm(this.Y,this.aj,a,this.bD,this.aU,this.br)}),M.qs=(function(e,t,n){var r=(this.an.a.length-1|0)-this.j3(e)|0,i=this.an,a=new P(i.a.length),o=i.a.length;return i.u(0,a,0,o),a.a[r]=n,new vm(this.Y,this.aj,a,this.bD,(this.aU-t.aS()|0)+n.aS()|0,(this.br-t.e8()|0)+n.e8()|0)}),M.qq=(function(e,t,n,r,i){var a=this.fW(e),o=a<<1,s=this.an,c=new P(2+s.a.length|0);s.u(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.u(o,c,l,u);var d=this.rz(this.bD,a,n);return new vm(this.Y|e,this.aj,c,d,1+this.aU|0,this.br+r|0)}),M.rQ=(function(e,t,n){var r=this.fW(e),i=r<<1,a=(this.an.a.length-2|0)-this.j3(e)|0,o=this.an,s=new P(o.a.length-1|0);o.u(0,s,0,i);var c=2+i|0,l=a-i|0;o.u(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.u(u,s,d,f);var p=this.oZ(this.bD,r);return this.Y^=e,this.aj|=e,this.an=s,this.bD=p,this.aU=(this.aU-1|0)+n.aS()|0,this.br=(this.br-t|0)+n.e8()|0,this}),M.qr=(function(e,t,n){var r=this.fW(e),i=r<<1,a=(this.an.a.length-2|0)-this.j3(e)|0,o=this.an,s=new P(o.a.length-1|0);o.u(0,s,0,i);var c=2+i|0,l=a-i|0;o.u(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=(o.a.length-a|0)-2|0;o.u(u,s,d,f);var p=this.oZ(this.bD,r);return new vm(this.Y^e,this.aj|e,s,p,(this.aU-1|0)+n.aS()|0,(this.br-t|0)+n.e8()|0)}),M.ez=(function(e){for(var t=sf().e6(this.Y),n=0;n<t;)e.dg(this.eb(n),this.dm(n)),n=1+n|0;for(var r=sf().e6(this.aj),i=0;i<r;)this.dk(i).ez(e),i=1+i|0}),M.q=(function(e){if(e instanceof vm){if(this===e)return!0;if(this.br===e.br&&this.aj===e.aj&&this.Y===e.Y&&this.aU===e.aU&&z().iz(this.bD,e.bD)){var t=this.an,n=e.an,r=this.an.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=H().p(t.a[a],n.a[a]),a=1+a|0;return i}return!1}return!1}),M.w=(function(){throw new zg(`Trie nodes do not support hashing.`)}),M.z=(function(){var e=ja(this);return ba(this)+`@`+(e>>>0).toString(16)}),M.ok=(function(){for(var e=this.an.h(),t=e.a.length,n=sf().e6(this.Y)<<1;n<t;)e.a[n]=e.a[n].ol(),n=1+n|0;return new vm(this.Y,this.aj,e,this.bD.h(),this.aU,this.br)}),M.iI=(function(e){return this.dk(e)}),M.pj=(function(e,t,n,r,i,a){return this.pi(e,t,n,r,i,a)}),M.ol=(function(){return this.ok()}),new F().i(vm,`scala.collection.immutable.BitmapIndexedMapNode`,{bU:1,c3:1,aQ:1});function ym(e,t,n){this.i1=0,this.dL=0,this.ak=null,this.i1=e,this.dL=t,this.ak=n,Zp().se(this.ak.r()>=2)}M=ym.prototype=new Af,M.constructor=ym,M.f6=(function(e){for(var t=this.ak.l(),n=0;t.m();){if(H().p(t.k().be,e))return n;n=1+n|0}return-1}),M.aS=(function(){return this.ak.r()}),M.ip=(function(e,t,n,r){var i=this.rf(e,t,n,r);return i.f()?dm().S.k():i.N()}),M.rf=(function(e,t,n,r){if(this.dL===n){var i=this.f6(e);return i>=0?new Sy(this.ak.v(i).b5):xy()}return xy()}),M.iJ=(function(e,t,n,r,i){if(this.dL===n){var a=this.f6(e);return a===-1?i.a4():this.ak.v(a).b5}return i.a4()}),M.iw=(function(e,t,n,r){return this.dL===n&&this.f6(e)>=0}),M.pj=(function(e,t,n,r,i,a){var o=this.f6(e);return o>=0?a?Object.is(this.ak.v(o).b5,t)?this:new ym(n,r,this.ak.ee(o,new Jg(e,t))):this:new ym(n,r,this.ak.e5(new Jg(e,t)))}),M.iM=(function(){return!1}),M.j2=(function(){return 0}),M.dk=(function(e){throw jg(new Ng,`No sub-nodes present in hash-collision leaf node.`)}),M.gU=(function(){return!0}),M.j5=(function(){return this.ak.r()}),M.eb=(function(e){return this.ak.v(e).be}),M.dm=(function(e){return this.ak.v(e).b5}),M.oE=(function(e){return this.ak.v(e)}),M.g1=(function(e){return this.i1}),M.ez=(function(e){this.ak.bL(new Y((t=>{var n=t.be,r=t.b5;return e.dg(n,r)})))}),M.q=(function(e){if(e instanceof ym){if(this===e)return!0;if(this.dL===e.dL&&this.ak.r()===e.ak.r()){for(var t=this.ak.l();t.m();){var n=t.k(),r=n.be,i=n.b5,a=e.f6(r);if(a<0||!H().p(i,e.ak.v(a).b5))return!1}return!0}return!1}return!1}),M.w=(function(){throw new zg(`Trie nodes do not support hashing.`)}),M.z=(function(){var e=ja(this);return ba(this)+`@`+(e>>>0).toString(16)}),M.e8=(function(){return Math.imul(this.ak.r(),this.dL)}),M.iI=(function(e){return this.dk(e)}),M.ol=(function(){return new ym(this.i1,this.dL,this.ak)}),new F().i(ym,`scala.collection.immutable.HashCollisionMapNode`,{bW:1,c3:1,aQ:1});function bm(){this.gA=null,xm=this,this.gA=new US(yu().nx)}M=bm.prototype=new N,M.constructor=bm,M.r9=(function(e){return e instanceof US?e:e.x()===0?this.gA:new B_().io(e).j8()}),M.aC=(function(e){return this.r9(e)}),new F().i(bm,`scala.collection.immutable.HashMap$`,{fW:1,a:1,aK:1});var xm;function Sm(){return xm||=new bm,xm}function Cm(){}M=Cm.prototype=new N,M.constructor=Cm,M.rb=(function(e){return Vy(e)&&e.f()?IS():e instanceof US||e instanceof LS||e instanceof RS||e instanceof zS||e instanceof BS?e:new tv().nZ(e).p1()}),M.aC=(function(e){return this.rb(e)}),new F().i(Cm,`scala.collection.immutable.Map$`,{gd:1,a:1,aK:1});var wm;function Tm(){return wm||=new Cm,wm}function Em(e,t,n){var r=t.x();if(r!==-1){var i=r+n|0;e.bb(i<0?0:i)}}function Dm(){}M=Dm.prototype=new N,M.constructor=Dm,M.rc=(function(e){var t=e.x();return eC(new sC,t>0?Ta((1+t|0)/.75):16,.75).o2(e)}),M.b4=(function(){return new bv(16,.75)}),M.aC=(function(e){return this.rc(e)}),new F().i(Dm,`scala.collection.mutable.HashSet$`,{gW:1,a:1,J:1});var Om;function km(){return Om||=new Dm,Om}function Am(e){this.nN=null,this.nN=e}M=Am.prototype=new Nf,M.constructor=Am,M.a4=(function(){return(0,this.nN)()}),new F().i(Am,`scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c`,{hD:1,cj:1,ar:1});function Y(e){this.nO=null,this.nO=e}M=Y.prototype=new Ff,M.constructor=Y,M.e=(function(e){return(0,this.nO)(e)}),new F().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919`,{hE:1,ck:1,e:1});function jm(e){this.nP=null,this.nP=e}M=jm.prototype=new Lf,M.constructor=jm,M.dg=(function(e,t){return(0,this.nP)(e,t)}),new F().i(jm,`scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8`,{hF:1,cl:1,aH:1});function Mm(){}M=Mm.prototype=new N,M.constructor=Mm;function Nm(){}Nm.prototype=M,M.z=(function(){return`<function1>`}),M.e=(function(e){return this.di(e,Hl().gt)});var Pm=new F().i(0,`scala.runtime.Nothing$`,{hK:1,w:1,a:1});function Fm(){}M=Fm.prototype=new N,M.constructor=Fm,M.rd=(function(e){return(t=>e.e(t))}),new F().i(Fm,`scala.scalajs.js.Any$`,{hR:1,hS:1,hT:1});var Im;function Lm(){return Im||=new Fm,Im}function Rm(){}M=Rm.prototype=new Nf,M.constructor=Rm;function zm(){}zm.prototype=M;function Bm(){}M=Bm.prototype=new Ff,M.constructor=Bm;function Vm(){}Vm.prototype=M;function Hm(){}M=Hm.prototype=new Lf,M.constructor=Hm;function Um(){}Um.prototype=M;function Wm(){}M=Wm.prototype=new zf,M.constructor=Wm;function Gm(){}Gm.prototype=M;function Km(e,t,n,r){if(this.jm=null,this.jk=!1,this.hf=null,this.jl=null,this.jm=e,this.jk=t,this.hf=n,r===null)throw Ig(new Lg);this.jl=void 0}M=Km.prototype=new N,M.constructor=Km,M.g5=(function(){return this.jl}),M.fX=(function(){return uo(this)}),M.z=(function(){return fo(this)}),M.aL=(function(e){try{this.jm.e(e)}catch(e){var t=e instanceof _f?e:new xb(e);this.jk?this.h0(new qv(t)):Yf().cj(new qv(t))}}),M.h0=(function(e){try{this.hf.cy(e)?this.hf.e(e):Yf().cj(e)}catch(n){var t=n instanceof _f?n:new xb(n);Yf().cj(new Jv(t,e))}}),M.f8=(function(e){e.dj(new Z((e=>{this.h0(e)})),new Z((e=>{this.aL(e)})))}),new F().i(Km,`com.raquo.airstream.core.Observer$$anon$8`,{cv:1,av:1,ag:1,az:1});function qm(e,t,n){if(this.hg=null,this.jn=!1,this.jo=null,this.hg=e,this.jn=t,n===null)throw Ig(new Lg);this.jo=void 0}M=qm.prototype=new N,M.constructor=qm,M.g5=(function(){return this.jo}),M.fX=(function(){return uo(this)}),M.z=(function(){return fo(this)}),M.aL=(function(e){this.f8(new Gv(e))}),M.h0=(function(e){this.f8(new Wv(e))}),M.f8=(function(e){try{this.hg.cy(e)?this.hg.e(e):e.dj(new Z((e=>{Yf().cj(e)})),new Z((e=>void 0)))}catch(n){var t=n instanceof _f?n:new xb(n);this.jn&&e.oJ()?this.h0(new qv(t)):e.dj(new Z((e=>{Yf().cj(new Jv(t,e))})),new Z((e=>{Yf().cj(new qv(t))})))}}),new F().i(qm,`com.raquo.airstream.core.Observer$$anon$9`,{cw:1,av:1,ag:1,az:1});function Jm(e){if(this.jR=null,this.jS=!1,this.pn=null,e===null)throw Ig(new Lg);Es(this)}M=Jm.prototype=new N,M.constructor=Jm,M.sy=(function(){return this.jS||=(this.jR=new Vd(`svg`,!1),!0),this.jR}),new F().i(Jm,`com.raquo.laminar.api.Laminar$svg$`,{d0:1,dw:1,da:1,dc:1});function Ym(){this.b=null,Xm=this,this.b=new gS}M=Ym.prototype=new N,M.constructor=Ym,new F().i(Ym,`com.raquo.laminar.api.package$`,{d3:1,b7:1,ba:1,b6:1});var Xm;function X(){return Xm||=new Ym,Xm}function Zm(e,t,n){return e.cW=t,e.cX=n,e}function Qm(){this.cW=null,this.cX=null}M=Qm.prototype=new Ws,M.constructor=Qm;function $m(){}$m.prototype=M,M.c=(function(e){return new sp(this,Ca(e),new qh(((e,t,n)=>{fs().pa(e,t,n)})))}),new F().i(Qm,`com.raquo.laminar.keys.StyleProp`,{a6:1,A:1,a4:1,a5:1});function eh(e){this.ln=null,this.hK=null,this.ln=xy(),this.hK=fs().qw(e)}M=eh.prototype=new N,M.constructor=eh,M.pb=(function(e){this.ln=e}),M.pk=(function(e){}),M.c9=(function(e){ac().gN(e,this,void 0)}),M.sB=(function(){return this.hK.data}),M.eB=(function(){return this.hK}),new F().i(eh,`com.raquo.laminar.nodes.TextNode`,{eb:1,aE:1,Y:1,be:1});function th(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mF=null,this.mG=!1,this.mD=null,this.mE=!1,this.mH=null,this.mI=!1,this.mB=null,this.mC=!1,Ud(this,`wa-select`)}M=th.prototype=new Gd,M.constructor=th,M.a8=(function(){return this.mG||=(this.mF=(X(),new Cd(`input`)),!0),this.mF}),M.cP=(function(){return this.mE||=(this.mD=(X(),Td(new Ed,`name`,Cs().bk)),!0),this.mD}),M.E=(function(){return this.mI||=(this.mH=(X(),Td(new Ed,`value`,Cs().bk)),!0),this.mH}),M.cg=(function(){return this.mC||=(this.mB=(X(),Td(new Ed,`label`,Cs().bk)),!0),this.mB}),M.f0=(function(){return $i}),new F().i(th,`io.github.nguyenyou.webawesome.laminar.Select$`,{en:1,ai:1,ah:1,eu:1});var nh;function rh(){return nh||=new th,nh}function ih(){}M=ih.prototype=new N,M.constructor=ih;function ah(){}ah.prototype=M;function oh(e,t){return e===t}function sh(e){return e?1231:1237}var ch=new F().i(0,`java.lang.Boolean`,{bn:1,a:1,a2:1,Z:1},(e=>typeof e==`boolean`));function lh(e){return e}function uh(e,t){return t instanceof _a&&e===t.c}var dh=new F().i(0,`java.lang.Character`,{bo:1,a:1,a2:1,Z:1},(e=>e instanceof _a));function fh(e,t){return gf(e,t,null,!0,!0),e}var ph=class extends Kp{};new F().i(ph,`java.lang.RuntimeException`,{Q:1,I:1,w:1,a:1});function mh(e){return e.o=``,e}function hh(e,t){return mh(e),e.o=t,e}function gh(e,t){return mh(e),e}function _h(){this.o=null}M=_h.prototype=new N,M.constructor=_h,M.o5=(function(e){var t=mf().rT(e,0,e.a.length);return this.o=``+this.o+t,this}),M.z=(function(){return this.o}),M.r=(function(){return this.o.length}),M.od=(function(e){return this.o.charCodeAt(e)}),new F().i(_h,`java.lang.StringBuilder`,{eV:1,aG:1,bl:1,a:1});function vh(){}M=vh.prototype=new Jp,M.constructor=vh;function yh(){}yh.prototype=M;function bh(){}M=bh.prototype=new N,M.constructor=bh,M.z=(function(){return`<function1>`}),M.di=(function(e,t){return Tf(this,e,t)}),M.cy=(function(e){return!1}),M.iq=(function(e){throw new Wg(e)}),M.e=(function(e){this.iq(e)}),new F().i(bh,`scala.PartialFunction$$anon$1`,{fn:1,e:1,j:1,a:1});function xh(){}M=xh.prototype=new N,M.constructor=xh;function Sh(){}Sh.prototype=M,M.x=(function(){return-1}),M.bV=(function(e,t,n){return Ql(this,e,t,n)}),M.e4=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.l=(function(){return this}),M.iv=(function(e){return om(this,e)}),M.e9=(function(e){return this.gc(e,-1)}),M.gc=(function(e,t){return sm(this,e,t)}),M.z=(function(){return`<iterator>`});function Ch(){this.hY=null,this.nk=null,this.nl=null,fm(this,Tm()),wh=this,this.nk=Va(new Ha),this.nl=new Am((()=>this.nk))}M=Ch.prototype=new mm,M.constructor=Ch,new F().i(Ch,`scala.collection.Map$`,{fI:1,fJ:1,a:1,aK:1});var wh;function Th(){return wh||=new Ch,wh}function Eh(e,t){return e.eP=t,e}function Dh(){this.eP=null}M=Dh.prototype=new N,M.constructor=Dh;function Oh(){}Oh.prototype=M,M.ob=(function(e){return this.eP.dh(e)}),M.oy=(function(e){return this.eP.aC(e)}),M.b4=(function(){return this.eP.b4()}),M.dh=(function(e){return this.ob(e)}),M.aC=(function(e){return this.oy(e)});function kh(e){return e.cN(new Y((e=>e)))}function Ah(e,t){return e.fZ(new qx(e,t))}function jh(e,t){return t>=0&&e.bp(t)>0}function Mh(e){return e.bp(0)===0}function Nh(e,t){var n=e.x();if(n!==-1){var r=t.x();if(r!==-1){if(n!==r)return!1;if(n===0)return!0}}return cm(e.l(),t)}function Ph(e,t){for(var n=e.bw().b4(),r=e.l();r.m();)n.b2(t.e(r.k()));return n.ba()}function Fh(){this.gv=null,nm(this,G_())}M=Fh.prototype=new im,M.constructor=Fh,M.ra=(function(e){return Vy(e)?e:rm.prototype.aC.call(this,e)}),M.aC=(function(e){return this.ra(e)}),new F().i(Fh,`scala.collection.immutable.Iterable$`,{g1:1,fz:1,a:1,J:1});var Ih;function Lh(){return Ih||=new Fh,Ih}function Rh(){this.T=null,this.nt=null,this.nu=!1,zh=this,this.T=WS(new ZS,mu())}M=Rh.prototype=new N,M.constructor=Rh,M.dh=(function(e){return this.iF(e)}),M.p3=(function(){return this.nu||=(this.nt=new gu,!0),this.nt}),M.si=(function(e,t){return WS(new ZS,new Am(((e,t)=>(()=>{for(var n=e.gF,r=t.ev;r>0&&qS(n)!==Bh().T;)n=n.bc(),e.gF=n,r=r-1|0,t.ev=r;return n}))(new Hf(e),new Vf(t))))}),M.iF=(function(e){return e instanceof ZS?e:e.x()===0?this.T:WS(new ZS,new Am((()=>this.p4(e.l()))))}),M.p5=(function(e,t){return e.m()?GS(new ZS,e.k(),WS(new ZS,new Am((()=>this.p5(e,t))))):t.a4()}),M.p4=(function(e){return e.m()?GS(new ZS,e.k(),WS(new ZS,new Am((()=>this.p4(e))))):this.T}),M.b4=(function(){return new V_}),M.aC=(function(e){return this.iF(e)}),new F().i(Rh,`scala.collection.immutable.LazyList$`,{g2:1,a:1,J:1,a1:1});var zh;function Bh(){return zh||=new Rh,zh}function Vh(e,t){if(this.nH=null,this.fE=null,this.nH=e,t===null)throw Ig(new Lg);this.fE=t}M=Vh.prototype=new N,M.constructor=Vh,M.pW=(function(e){return this.fE.b2(e),this}),M.pM=(function(e){return this.fE.b9(e),this}),M.bb=(function(e){this.fE.bb(e)}),M.ba=(function(){return this.nH.e(this.fE.ba())}),M.b2=(function(e){return this.pW(e)}),M.b9=(function(e){return this.pM(e)}),new F().i(Vh,`scala.collection.mutable.Builder$$anon$1`,{gT:1,E:1,G:1,L:1});function Hh(e,t){return e.dZ=t,e}function Uh(){this.dZ=null}M=Uh.prototype=new N,M.constructor=Uh;function Wh(){}Wh.prototype=M,M.bb=(function(e){}),M.pX=(function(e){return this.dZ.b2(e),this}),M.pN=(function(e){return this.dZ.b9(e),this}),M.ba=(function(){return this.dZ}),M.b2=(function(e){return this.pX(e)}),M.b9=(function(e){return this.pN(e)}),new F().i(Uh,`scala.collection.mutable.GrowableBuilder`,{aT:1,E:1,G:1,L:1});function Gh(e){this.nS=null,this.nS=e}M=Gh.prototype=new zm,M.constructor=Gh,M.a4=(function(){return(0,this.nS)()}),new F().i(Gh,`scala.scalajs.runtime.AnonFunction0.$$Lambda$2bf0f8dc580d6edeb2d6a336c52a1bab3049702d`,{hZ:1,hY:1,cj:1,ar:1});function Z(e){this.nT=null,this.nT=e}M=Z.prototype=new Vm,M.constructor=Z,M.e=(function(e){return(0,this.nT)(e)}),new F().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$412915ce24663401f4bc24349a746e1dbd693dc1`,{i1:1,i0:1,ck:1,e:1});function Kh(e){this.nU=null,this.nU=e}M=Kh.prototype=new Um,M.constructor=Kh,M.dg=(function(e,t){return(0,this.nU)(e,t)}),new F().i(Kh,`scala.scalajs.runtime.AnonFunction2.$$Lambda$770e9b86e03b055b1d78d82135c9f39ea48d32d7`,{i3:1,i2:1,cl:1,aH:1});function qh(e){this.nV=null,this.nV=e}M=qh.prototype=new Gm,M.constructor=qh,M.oa=(function(e,t,n){return(0,this.nV)(e,t,n)}),new F().i(qh,`scala.scalajs.runtime.AnonFunction3.$$Lambda$73f37e31ba038fe839c174212837da323f140c96`,{i5:1,i4:1,hG:1,fg:1});function Jh(){}M=Jh.prototype=new N,M.constructor=Jh;function Yh(){}Yh.prototype=M,M.cQ=(function(){return new qg(this)});function Xh(e){e.oh(os().bo(Ju().bj(new(np.r()).C([])))),e.oi(os().bo(Ju().bj(new(lo.r()).C([])))),e.hd(!1)}function Zh(e,t,n){var r=Ao(),i=(()=>{ng(e);var r=Qh(e,t,n);return t.f8(e.ha()),rg(e),r}),a=!ep(e);if(r.bd||!a)var o=i();else{r.bd=!0;try{var o=i()}finally{r.bd=!1,Do(r)}}return o}function Qh(e,t,n){var r=new Qo(n,new Gh((()=>{Qf(e,t)})));return e.fY().push(t),r}function $h(e,t,n){var r=Ao(),i=(()=>{!ep(e)&&n&&ng(e),e.g3().push(t),rg(e)}),a=!ep(e);if(r.bd||!a)i();else{r.bd=!0;try{i()}finally{r.bd=!1,Do(r)}}}function eg(e,t){vo().p0(e.g3(),t)&&ig(e)}function tg(e,t){vo().p0(e.fY(),t)&&ig(e)}function ng(e){e.pl()||(e.oY(),e.hd(!0))}function rg(e){ag(e)===1&&e.oV()}function ig(e){ep(e)||(e.oW(),e.hd(!1))}function ag(e){var t=e.fY().length,n=e.g3();return(t|0)+(n.length|0)|0}function og(e){e.aM=ho().re(new cg(e),(ho(),!0))}function sg(e,t){var n=new Gv(t);e.aM.f8(n)}function cg(e){if(this.jG=null,e===null)throw Ig(new Lg);this.jG=e}M=cg.prototype=new Nm,M.constructor=cg,M.rD=(function(e){return!0}),M.qa=(function(e,t){new So(new Z((t=>{this.jG.sk(e,t)})))}),M.cy=(function(e){return this.rD(e)}),M.di=(function(e,t){return this.qa(e,t)}),new F().i(cg,`com.raquo.airstream.state.Var$$anon$1`,{cP:1,aV:1,e:1,j:1,a:1});function lg(e){if(e===null)throw Ig(new Lg)}M=lg.prototype=new Nm,M.constructor=lg,M.cy=(function(e){return typeof e==`boolean`&&!0}),M.di=(function(e,t){return typeof e==`boolean`?!!e:t.e(e)}),new F().i(lg,`com.raquo.laminar.DomApi$$anon$1`,{cU:1,aV:1,e:1,j:1,a:1});function ug(e){if(e===null)throw Ig(new Lg)}M=ug.prototype=new Nm,M.constructor=ug,M.cy=(function(e){return typeof e==`string`||!1}),M.di=(function(e,t){return typeof e==`string`?e:t.e(e)}),new F().i(ug,`com.raquo.laminar.DomApi$$anon$2`,{cV:1,aV:1,e:1,j:1,a:1});function dg(e,t){this.gm=null,this.hx=null,this.gm=e,this.hx=t}M=dg.prototype=new N,M.constructor=dg,M.c9=(function(e){var t=this.hx;t!==void 0&&t.oX(e,this.gm),ac().gN(e,this.gm,void 0)}),M.sJ=(function(e){return new dg(this.gm,e.q6(this.hx))});var fg=new F().i(dg,`com.raquo.laminar.inserters.StaticChildInserter`,{dB:1,Y:1,dz:1,dD:1,dy:1});function pg(e){e.hG=new es(new Gh((()=>{e.cG.nY()})),new Gh((()=>{e.cG.qx()}))),e.el=void 0,e.fm=IS()}function mg(e,t,n){if(e.el===void 0)e.el=os().bo(Ju().bj(new(op.r()).C([t])));else if(n){var r=e.el;if(r===void 0)throw new Vg(`undefined.get`);r.unshift(t)}else{var i=e.el;if(i===void 0)throw new Vg(`undefined.get`);i.push(t)}}function hg(e,t){var n=e.el;n!==void 0&&n.splice(t,1)}function gg(e,t){var n=e.el;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:xa(a,t))?r=!0:i=1+i|0}return r?i:-1}function _g(e,t,n,r,i){var a=e.fm.dl(t,new Gh((()=>$()))),o=(e=>{for(var t=a;!t.f();){var r=t.B(),i=r.be;if(i===null?e===null:xa(i,e)){var o=r.b5;if(o===null?n===null:xa(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.t()}return!1}),s=kh(r);_return$1:{for(var c,l=i;;)if(l.f()){var c=$();break}else{var u=l.B(),d=l.t();if(o(u)){l=d;continue}for(var f=l,p=d;;)if(p.f()){var c=f;break _return$1}else{if(!o(p.B())){p=p.t();continue}for(var m=p,h=new GC(f.B(),$()),g=f.t(),_=h;g!==m;){var v=new GC(g.B(),$());_.ax=v,_=v,g=g.t()}for(var y=m.t(),b=y;!y.f();)if(!o(y.B()))y=y.t();else{for(;b!==y;){var x=new GC(b.B(),$());_.ax=x,_=x,b=b.t()}b=y.t(),y=y.t()}b.f()||(_.ax=b);var c=h;break _return$1}}}var ee=e.fm.dl(t,new Gh((()=>$()))),S=(e=>c.cd(e.be));_return$3:{for(var te,C=ee;;)if(C.f()){var te=$();break}else{var ne=C.B(),re=C.t();if(S(ne)){C=re;continue}for(var ie=C,w=re;;)if(w.f()){var te=ie;break _return$3}else{if(!S(w.B())){w=w.t();continue}for(var ae=w,oe=new GC(ie.B(),$()),se=ie.t(),ce=oe;se!==ae;){var le=new GC(se.B(),$());ce.ax=le,ce=le,se=se.t()}for(var ue=ae.t(),de=ue;!ue.f();)if(!S(ue.B()))ue=ue.t();else{for(;de!==ue;){var T=new GC(de.B(),$());ce.ax=T,ce=T,de=de.t()}de=ue.t(),ue=ue.t()}de.f()||(ce.ax=de);var te=oe;break _return$3}}}var fe=(e=>new Jg(e,n));if(s===$())var pe=$();else{for(var me=new GC(fe(s.B()),$()),he=me,ge=s.t();ge!==$();){var _e=new GC(fe(ge.B()),$());he.ax=_e,he=_e,ge=ge.t()}var pe=me}var ve=te.o7(pe),ye=t.hy.on(t.l4.e(e)),be=(e=>c.cd(e));_return$5:{for(var xe,Se=ye;;)if(Se.f()){var xe=$();break}else{var Ce=Se.B(),we=Se.t();if(be(Ce)){Se=we;continue}for(var Te=Se,Ee=we;;)if(Ee.f()){var xe=Te;break _return$5}else{if(!be(Ee.B())){Ee=Ee.t();continue}for(var De=Ee,Oe=new GC(Te.B(),$()),ke=Te.t(),Ae=Oe;ke!==De;){var je=new GC(ke.B(),$());Ae.ax=je,Ae=je,ke=ke.t()}for(var Me=De.t(),Ne=Me;!Me.f();)if(!be(Me.B()))Me=Me.t();else{for(;Ne!==Me;){var E=new GC(Ne.B(),$());Ae.ax=E,Ae=E,Ne=Ne.t()}Ne=Me.t(),Me=Me.t()}Ne.f()||(Ae.ax=Ne);var xe=Oe;break _return$5}}}_return$7:{for(var Pe,Fe=s;;)if(Fe.f()){var Pe=$();break}else{var Ie=Fe.B(),Le=Fe.t();if(o(Ie)){Fe=Le;continue}for(var Re=Fe,ze=Le;;)if(ze.f()){var Pe=Re;break _return$7}else{if(!o(ze.B())){ze=ze.t();continue}for(var Be=ze,Ve=new GC(Re.B(),$()),He=Re.t(),Ue=Ve;He!==Be;){var We=new GC(He.B(),$());Ue.ax=We,Ue=We,He=He.t()}for(var Ge=Be.t(),Ke=Ge;!Ge.f();)if(!o(Ge.B()))Ge=Ge.t();else{for(;Ke!==Ge;){var qe=new GC(Ke.B(),$());Ue.ax=qe,Ue=qe,Ke=Ke.t()}Ke=Ge.t(),Ge=Ge.t()}Ke.f()||(Ue.ax=Ke);var Pe=Ve;break _return$7}}}var Je=xe.o7(Pe);e.fm=e.fm.ef(t,ve),t.l6.dg(e,t.hy.op(Je))}function vg(e,t){bg(e,e.gq,t)&&xg(e,t)}function yg(e,t){var n=e.gq;e.gq=t,bg(e,n,t)||xg(e,t)}function bg(e,t,n){var r=!t.f()&&!t.N().gT().bN.f(),i=!n.f()&&!n.N().gT().bN.f();return r&&!i}function xg(e,t){Sg(e,t.f()?xy():new Sy(t.N().gT()))}function Sg(e,t){if(t.f())e.hG.qm();else{var n=t.N();e.hG.sm(n)}}function Cg(){}M=Cg.prototype=new ah,M.constructor=Cg;function wg(){}wg.prototype=M;var Tg=class extends ph{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(Tg,`java.lang.ArithmeticException`,{ex:1,Q:1,I:1,w:1,a:1});var Eg=new F().i(0,`java.lang.Byte`,{ez:1,ac:1,a:1,a2:1,Z:1},(e=>Ma(e)));function Dg(e,t){return gf(e,t,null,!0,!0),e}function Og(e){return gf(e,null,null,!0,!0),e}var kg=class extends ph{};new F().i(kg,`java.lang.IllegalArgumentException`,{bq:1,Q:1,I:1,w:1,a:1});var Ag=class extends ph{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(Ag,`java.lang.IllegalStateException`,{eF:1,Q:1,I:1,w:1,a:1});function jg(e,t){return gf(e,t,null,!0,!0),e}function Mg(e,t){return gf(e,`Index out of range: `+t,null,!0,!0),e}var Ng=class extends ph{};new F().i(Ng,`java.lang.IndexOutOfBoundsException`,{br:1,Q:1,I:1,w:1,a:1});function Pg(){}M=Pg.prototype=new ah,M.constructor=Pg,new F().i(Pg,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{eK:1,bk:1,bi:1,bm:1,bj:1});function Fg(e,t){return gf(e,t,null,!0,!0),e}function Ig(e){return gf(e,null,null,!0,!0),e}var Lg=class extends ph{};new F().i(Lg,`java.lang.NullPointerException`,{eN:1,Q:1,I:1,w:1,a:1});var Rg=new F().i(0,`java.lang.Short`,{eR:1,ac:1,a:1,a2:1,Z:1},(e=>Na(e))),zg=class extends ph{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(zg,`java.lang.UnsupportedOperationException`,{f0:1,Q:1,I:1,w:1,a:1});var Bg=class extends ph{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(Bg,`java.util.ConcurrentModificationException`,{f5:1,Q:1,I:1,w:1,a:1});var Vg=class extends ph{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(Vg,`java.util.NoSuchElementException`,{f6:1,Q:1,I:1,w:1,a:1});function Hg(){}M=Hg.prototype=new yh,M.constructor=Hg,M.e=(function(e){return e}),M.z=(function(){return`generalized constraint`}),new F().i(Hg,`scala.$less$colon$less$$anon$1`,{fb:1,f8:1,f9:1,e:1,a:1});function Ug(e){if(!e.n9){if(e.gs===null)var t=`null`;else{var n=Ju().q3(e.gs),r=n===null?`of a JS class`:`of class `+n.ai.N;try{var t=e.gs+` (`+r+`)`}catch{var t=`an instance `+r}}e.n8=t,e.n9=!0}return e.n8}var Wg=class extends ph{constructor(e){super(),this.gs=null,this.n8=null,this.n9=!1,this.gs=e,gf(this,null,null,!0,!0)}g2(){return Ug(this)}};new F().i(Wg,`scala.MatchError`,{fj:1,Q:1,I:1,w:1,a:1});function Gg(){}M=Gg.prototype=new N,M.constructor=Gg;function Kg(){}Kg.prototype=M,M.cQ=(function(){return new qg(this)}),M.f=(function(){return this===xy()}),M.x=(function(){return!this.f()|0}),M.l=(function(){return this.f()?dm().S:new $g(this.N())});function qg(e){if(this.fp=0,this.nc=0,this.nb=null,e===null)throw Ig(new Lg);this.nb=e,this.fp=0,this.nc=e.by()}M=qg.prototype=new Sh,M.constructor=qg,M.m=(function(){return this.fp<this.nc}),M.k=(function(){var e=this.nb.bz(this.fp);return this.fp=1+this.fp|0,e}),new F().i(qg,`scala.Product$$anon$1`,{fp:1,s:1,b:1,c:1,t:1});function Jg(e,t){this.be=null,this.b5=null,this.be=e,this.b5=t}M=Jg.prototype=new N,M.constructor=Jg,M.by=(function(){return 2}),M.bz=(function(e){return Qp(this,e)}),M.z=(function(){return`(`+this.be+`,`+this.b5+`)`}),M.bA=(function(){return`Tuple2`}),M.cQ=(function(){return new Lv(this)}),M.w=(function(){return G().ga(this,-116390334,!0)}),M.q=(function(e){return this===e||e instanceof Jg&&H().p(this.be,e.be)&&H().p(this.b5,e.b5)}),new F().i(Jg,`scala.Tuple2`,{bz:1,fq:1,U:1,d:1,a:1});function Yg(e){this.fs=null,$p(this,e)}M=Yg.prototype=new tm,M.constructor=Yg,new F().i(Yg,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{fw:1,fv:1,a:1,J:1,a1:1});function Xg(e){return $l(e,e.cc()+`(`,`, `,`)`)}function Zg(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Qg(){}M=Qg.prototype=new Sh,M.constructor=Qg,M.m=(function(){return!1}),M.rU=(function(){throw new Vg(`next on empty iterator`)}),M.x=(function(){return 0}),M.k=(function(){this.rU()}),M.gc=(function(e,t){return this}),new F().i(Qg,`scala.collection.Iterator$$anon$19`,{fB:1,s:1,b:1,c:1,t:1});function $g(e){this.ne=null,this.ft=!1,this.ne=e,this.ft=!1}M=$g.prototype=new Sh,M.constructor=$g,M.m=(function(){return!this.ft}),M.k=(function(){return this.ft?dm().S.k():(this.ft=!0,this.ne)}),M.gc=(function(e,t){return this.ft||e>0||t===0?dm().S:this}),new F().i($g,`scala.collection.Iterator$$anon$20`,{fC:1,s:1,b:1,c:1,t:1});function e_(e,t){if(this.nf=null,this.nh=null,this.gw=!1,this.ng=null,this.hX=null,this.nf=e,t===null)throw Ig(new Lg);this.hX=t,this.nh=tC(new sC),this.gw=!1}M=e_.prototype=new Sh,M.constructor=e_,M.m=(function(){for(;;)if(this.gw)return!0;else if(this.hX.m()){var e=this.hX.k();if(!this.nh.gM(this.nf.e(e)))continue;return this.ng=e,this.gw=!0,!0}else return!1}),M.k=(function(){return this.m()?(this.gw=!1,this.ng):dm().S.k()}),new F().i(e_,`scala.collection.Iterator$$anon$8`,{fE:1,s:1,b:1,c:1,t:1});function t_(e,t){if(this.ni=null,this.gx=null,this.ni=e,t===null)throw Ig(new Lg);this.gx=t}M=t_.prototype=new Sh,M.constructor=t_,M.x=(function(){return this.gx.x()}),M.m=(function(){return this.gx.m()}),M.k=(function(){return this.ni.e(this.gx.k())}),new F().i(t_,`scala.collection.Iterator$$anon$9`,{fF:1,s:1,b:1,c:1,t:1});function n_(e){for(;;)if(e.bC instanceof i_){var t=e.bC;if(e.bC=t.bC,e.dB=t.dB,t.c1!==null){e.c0===null&&(e.c0=t.c0);var n=t.c0;n===null&&Gu().cB(),n.fu=e.c1,e.c1=t.c1}}else return}function r_(e){for(;;)if(e.c1===null)return e.bC=null,e.c0=null,!1;else{if(e.bC=e.c1.rr(),e.c0===e.c1){var t=e.c0;t===null&&Gu().cB(),e.c0=t.fu}if(e.c1=e.c1.fu,n_(e),e.dB)return!0;if(!(e.bC!==null&&e.bC.m()))continue;return e.dB=!0,!0}}function i_(e){this.bC=null,this.c1=null,this.c0=null,this.dB=!1,this.bC=e,this.c1=null,this.c0=null,this.dB=!1}M=i_.prototype=new Sh,M.constructor=i_,M.m=(function(){return this.dB?!0:this.bC===null?!1:this.bC.m()?(this.dB=!0,!0):r_(this)}),M.k=(function(){if(this.m()){this.dB=!1;var e=this.bC;return e===null&&Gu().cB(),e.k()}return dm().S.k()}),M.iv=(function(e){var t=new nu(e,null);if(this.c1===null)this.c1=t,this.c0=t;else{var n=this.c0;n===null&&Gu().cB(),n.fu=t,this.c0=t}return this.bC===null&&(this.bC=dm().S),this}),new F().i(i_,`scala.collection.Iterator$ConcatIterator`,{bF:1,s:1,b:1,c:1,t:1});function a_(e){for(;e.d0>0;)e.dC.m()?(e.dC.k(),e.d0=e.d0-1|0):e.d0=0}function o_(e,t){if(e.bO<0)return-1;var n=e.bO-t|0;return n<0?0:n}function s_(e,t,n){this.dC=null,this.bO=0,this.d0=0,this.dC=e,this.bO=n,this.d0=t}M=s_.prototype=new Sh,M.constructor=s_,M.x=(function(){var e=this.dC.x();if(e<0)return-1;var t=e-this.d0|0,n=t<0?0:t;if(this.bO<0)return n;var r=this.bO;return r<n?r:n}),M.m=(function(){return a_(this),this.bO!==0&&this.dC.m()}),M.k=(function(){return a_(this),this.bO>0?(this.bO=this.bO-1|0,this.dC.k()):this.bO<0?this.dC.k():dm().S.k()}),M.gc=(function(e,t){var n=e>0?e:0;if(t<0)var r=o_(this,n);else if(t<=n)var r=0;else if(this.bO<0)var r=t-n|0;else var i=o_(this,n),a=t-n|0,r=i<a?i:a;var o=this.d0+n|0;return r===0?dm().S:o<0?(this.d0=2147483647,this.bO=0,om(this,new Am((()=>new s_(this.dC,o-2147483647|0,r))))):(this.d0=o,this.bO=r,this)}),new F().i(s_,`scala.collection.Iterator$SliceIterator`,{fH:1,s:1,b:1,c:1,t:1});function c_(e){for(var t=e,n=0;!t.f();)n=1+n|0,t=t.t();return n}function l_(e,t){return t<0?1:p_(e,t,0,e)}function u_(e,t){return t>=0&&e.bp(t)>0}function d_(e,t){if(t<0)throw jg(new Ng,``+t);var n=e.oo(t);if(n.f())throw jg(new Ng,``+t);return n.B()}function f_(e,t){return uS(t)?m_(e,e,t):Nh(e,t)}function p_(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.f()|0;else{if(!i.f()){var o=1+a|0,s=i.t();a=o,i=s;continue}return-1}}function m_(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{if(!i.f()&&!r.f()&&H().p(i.B(),r.B())){var a=i.t(),o=r.t();i=a,r=o;continue}return i.f()&&r.f()}}function h_(e){if(this.fv=null,e===null)throw Ig(new Lg);this.fv=e}M=h_.prototype=new Sh,M.constructor=h_,M.m=(function(){return!this.fv.f()}),M.k=(function(){var e=this.fv.B();return this.fv=this.fv.t(),e}),new F().i(h_,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{fL:1,s:1,b:1,c:1,t:1});function g_(e){for(var t=e.aT;;){if(e.aT<e.en){au(),au();var n=e.fw,r=e.aT,i=n.charCodeAt(r),a=i!==10&&i!==13}else var a=!1;if(a)e.aT=1+e.aT|0;else break}var o=e.aT;if(e.aT<e.en){au();var s=e.fw,c=e.aT,l=s.charCodeAt(c);e.aT=1+e.aT|0,e.aT<e.en&&(au(),au(),!(13^l|10^e.fw.charCodeAt(e.aT)))&&(e.aT=1+e.aT|0),e.nn||(o=e.aT)}var u=e.fw,d=o;return u.substring(t,d)}function __(e,t){this.fw=null,this.nn=!1,this.en=0,this.aT=0,this.fw=e,this.nn=t,this.en=e.length,this.aT=0}M=__.prototype=new Sh,M.constructor=__,M.m=(function(){return this.aT<this.en}),M.oP=(function(){return this.aT>=this.en?dm().S.k():g_(this)}),M.k=(function(){return this.oP()}),new F().i(__,`scala.collection.StringOps$$anon$1`,{fO:1,s:1,b:1,c:1,t:1});function v_(e){return e.bP=0,e.fx=0,e.bE=-1,e}function y_(e){e.d2===null&&(e.d2=new Ja(Eu().fD<<1),e.fy=new(Cu.r()).C(Eu().fD))}function b_(e,t){return v_(e),t.iM()&&S_(e,t),t.gU()&&x_(e,t),e}function x_(e,t){e.ep=t,e.bP=0,e.fx=t.j5()}function S_(e,t){y_(e),e.bE=1+e.bE|0;var n=e.bE<<1,r=1+(e.bE<<1)|0;e.fy.a[e.bE]=t,e.d2.a[n]=0,e.d2.a[r]=t.j2()}function C_(e){e.bE=e.bE-1|0}function w_(e){for(;e.bE>=0;){var t=e.bE<<1,n=1+(e.bE<<1)|0,r=e.d2.a[t];if(r<e.d2.a[n]){var i=e.d2;i.a[t]=1+i.a[t]|0;var a=e.fy.a[e.bE].iI(r);if(a.iM()&&S_(e,a),a.gU())return x_(e,a),!0}else C_(e)}return!1}function T_(){this.bP=0,this.fx=0,this.ep=null,this.bE=0,this.d2=null,this.fy=null}M=T_.prototype=new Sh,M.constructor=T_;function E_(){}E_.prototype=M,M.m=(function(){return this.bP<this.fx||w_(this)});function D_(e){return e.dK=-1,e.bQ=-1,e.fz=new Ja(1+Eu().fD|0),e.fA=new(Cu.r()).C(1+Eu().fD|0),e}function O_(e,t){return D_(e),A_(e,t),M_(e),e}function k_(e,t){e.gz=t,e.dK=t.j5()-1|0}function A_(e,t){e.bQ=1+e.bQ|0,e.fA.a[e.bQ]=t,e.fz.a[e.bQ]=t.j2()-1|0}function j_(e){e.bQ=e.bQ-1|0}function M_(e){for(;e.bQ>=0;){var t=e.fz.a[e.bQ];if(e.fz.a[e.bQ]=t-1|0,t>=0)A_(e,e.fA.a[e.bQ].iI(t));else{var n=e.fA.a[e.bQ];if(j_(e),n.gU())return k_(e,n),!0}}return!1}function N_(){this.dK=0,this.gz=null,this.bQ=0,this.fz=null,this.fA=null}M=N_.prototype=new Sh,M.constructor=N_;function P_(){}P_.prototype=M,M.m=(function(){return this.dK>=0||M_(this)});function F_(e){return e.eQ!==null}function I_(e,t,n,r){if(n<0||n>t.a.length)throw ry(new iy);var i=new Ja(1+t.a.length|0);t.u(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.u(n,i,a,o),i}function L_(e,t,n,r,i,a,o){var s=t.fW(n),c=s<<1,l=t.an,u=new P(2+l.a.length|0);l.u(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.u(c,u,d,f);var p=I_(e,t.bD,s,i);t.Y|=n,t.an=u,t.bD=p,t.aU=1+t.aU|0,t.br=t.br+a|0}function R_(e){F_(e)&&z_(e),e.eQ=null}function z_(e){e.cI=e.cI.ok()}function B_(){this.eQ=null,this.cI=null,this.cI=new vm(0,0,Ml().n6,Ml().hV,0,0)}M=B_.prototype=new N,M.constructor=B_,M.bb=(function(e){}),M.fb=(function(e,t,n,r,i,a){if(e instanceof vm){var o=Eu().eA(i,a),s=Eu().e7(o);if((e.Y&s)!==0){var c=Eu().cO(e.Y,o,s),l=e.eb(c),u=e.g1(c);if(u===r&&H().p(l,t)){e.an.a[1+(c<<1)|0]=n;return}var d=e.dm(c),f=Jl().cx(u),p=e.j0(l,d,u,f,t,n,r,i,5+a|0);e.rQ(s,f,p);return}if((e.aj&s)!==0){var m=Eu().cO(e.aj,o,s),h=e.dk(m),g=h.aS(),_=h.e8();this.fb(h,t,n,r,i,5+a|0),e.aU=e.aU+(h.aS()-g|0)|0,e.br=e.br+(h.e8()-_|0)|0;return}L_(this,e,s,t,r,i,n)}else if(e instanceof ym){var v=e.f6(t);if(v<0){e.ak=e.ak.e5(new Jg(t,n));return}e.ak=e.ak.ee(v,new Jg(t,n))}else throw new Wg(e)}),M.j8=(function(){return this.cI.aU===0?Sm().gA:(this.eQ===null&&(this.eQ=new US(this.cI)),this.eQ)}),M.o4=(function(e){R_(this);var t=U().Q(e.be),n=Jl().cx(t);return this.fb(this.cI,e.be,e.b5,t,n,0),this}),M.ex=(function(e,t){R_(this);var n=U().Q(e);return this.fb(this.cI,e,t,n,Jl().cx(n),0),this}),M.io=(function(e){if(R_(this),e instanceof US)new By(e,this);else if(_S(e))e.ez(new jm(((e,t)=>this.ex(e,t))));else for(var t=e.l();t.m();)this.o4(t.k());return this}),M.ba=(function(){return this.j8()}),M.b2=(function(e){return this.o4(e)}),M.b9=(function(e){return this.io(e)}),new F().i(B_,`scala.collection.immutable.HashMapBuilder`,{fX:1,E:1,G:1,L:1,aa:1});function V_(){this.eR=null,this.nv=null,this.ql()}M=V_.prototype=new N,M.constructor=V_,M.bb=(function(e){}),M.ql=(function(){var e=new hu;this.nv=(Bh(),WS(new ZS,new Am((()=>e.iA())))),this.eR=e}),M.sh=(function(){return this.eR.iO(new Am((()=>Bh().T))),this.nv}),M.pT=(function(e){var t=new hu;return this.eR.iO(new Am((()=>(Bh(),GS(new ZS,e,(Bh(),WS(new ZS,new Am((()=>t.iA()))))))))),this.eR=t,this}),M.pK=(function(e){if(e.x()!==0){var t=new hu;this.eR.iO(new Am((()=>Bh().p5(e.l(),new Am((()=>t.iA())))))),this.eR=t}return this}),M.ba=(function(){return this.sh()}),M.b2=(function(e){return this.pT(e)}),M.b9=(function(e){return this.pK(e)}),new F().i(V_,`scala.collection.immutable.LazyList$LazyBuilder`,{g4:1,E:1,G:1,L:1,aa:1});function H_(e){this.eS=null,this.eS=e}M=H_.prototype=new Sh,M.constructor=H_,M.m=(function(){return qS(this.eS)!==Bh().T}),M.k=(function(){if(qS(this.eS)===Bh().T)return dm().S.k();var e=this.eS.B();return this.eS=this.eS.bc(),e}),new F().i(H_,`scala.collection.immutable.LazyList$LazyIterator`,{g6:1,s:1,b:1,c:1,t:1});function U_(){W_=this,$(),$()}M=U_.prototype=new N,M.constructor=U_,M.dh=(function(e){return $().j6(e)}),M.b4=(function(){return new sw}),M.aC=(function(e){return $().j6(e)}),new F().i(U_,`scala.collection.immutable.List$`,{gb:1,a:1,J:1,a1:1,am:1});var W_;function G_(){return W_||=new U_,W_}function K_(e,t){if(t===null)throw Ig(new Lg);return e.eT=t,e.dO=0,e}function q_(){this.dO=0,this.eT=null}M=q_.prototype=new Sh,M.constructor=q_;function J_(){}J_.prototype=M,M.m=(function(){return this.dO<2}),M.k=(function(){matchResult5$1:{var e,t=this.dO;if(t===0){var e=new Jg(this.eT.co,this.eT.dM);break matchResult5$1}if(t===1){var e=new Jg(this.eT.cp,this.eT.dN);break matchResult5$1}var e=dm().S.k()}return this.dO=1+this.dO|0,e}),M.e9=(function(e){return this.dO=this.dO+e|0,this});function Y_(e,t){if(t===null)throw Ig(new Lg);return e.dP=t,e.dQ=0,e}function X_(){this.dQ=0,this.dP=null}M=X_.prototype=new Sh,M.constructor=X_;function Z_(){}Z_.prototype=M,M.m=(function(){return this.dQ<3}),M.k=(function(){var e;switch(this.dQ){case 0:var e=new Jg(this.dP.c2,this.dP.d3);break;case 1:var e=new Jg(this.dP.c3,this.dP.d4);break;case 2:var e=new Jg(this.dP.c4,this.dP.d5);break;default:var e=dm().S.k()}return this.dQ=1+this.dQ|0,e}),M.e9=(function(e){return this.dQ=this.dQ+e|0,this});function Q_(e,t){if(t===null)throw Ig(new Lg);return e.cK=t,e.dR=0,e}function $_(){this.dR=0,this.cK=null}M=$_.prototype=new Sh,M.constructor=$_;function ev(){}ev.prototype=M,M.m=(function(){return this.dR<4}),M.k=(function(){var e;switch(this.dR){case 0:var e=new Jg(this.cK.bF,this.cK.cq);break;case 1:var e=new Jg(this.cK.bG,this.cK.cr);break;case 2:var e=new Jg(this.cK.bH,this.cK.cs);break;case 3:var e=new Jg(this.cK.bI,this.cK.ct);break;default:var e=dm().S.k()}return this.dR=1+this.dR|0,e}),M.e9=(function(e){return this.dR=this.dR+e|0,this});function tv(){this.d6=null,this.fB=!1,this.er=null,this.d6=IS(),this.fB=!1}M=tv.prototype=new N,M.constructor=tv,M.bb=(function(e){}),M.p1=(function(){return this.fB?this.er.j8():this.d6}),M.pR=(function(e,t){return this.fB?this.er.ex(e,t):this.d6.aS()<4||this.d6.cd(e)?this.d6=this.d6.ef(e,t):(this.fB=!0,this.er===null&&(this.er=new B_),this.d6.qk(this.er),this.er.ex(e,t)),this}),M.nZ=(function(e){return this.fB?(this.er.io(e),this):jf(this,e)}),M.ba=(function(){return this.p1()}),M.b2=(function(e){return this.pR(e.be,e.b5)}),M.b9=(function(e){return this.nZ(e)}),new F().i(tv,`scala.collection.immutable.MapBuilderImpl`,{gl:1,E:1,G:1,L:1,aa:1});function nv(){this.nz=0,this.nA=null,rv=this;try{au();var e=sf().oK(nl().iK(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10,214748364)}catch(t){if(0)var e;else{var e;throw t}}this.nz=e,this.nA=new Zy(XC(),0,0)}M=nv.prototype=new N,M.constructor=nv,M.dh=(function(e){return this.iG(e)}),M.iG=(function(e){if(e instanceof dC)return e;var t=e.x();if(t===0)return XC();if((t-1|0)>>>0<=31){matchResult3:{var n;if(e instanceof SC){var r=e.ah().aR();if(r!==null&&r===I.l()){var n=e.cH;break matchResult3}}if(Vy(e)){var i=new P(t);e.bV(i,0,2147483647);var n=i;break matchResult3}var a=new P(t);e.l().bV(a,0,2147483647);var n=a}return new WC(n)}return new fv().o0(e).p2()}),M.aC=(function(e){return this.iG(e)}),M.b4=(function(){return new fv}),new F().i(nv,`scala.collection.immutable.Vector$`,{gy:1,a:1,J:1,a1:1,am:1});var rv;function iv(){return rv||=new nv,rv}function av(e){var t=null,n=null;if(e.L>=6){t=e.aH;var r=e.I>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.u(r,a,0,o)}var s=e.I,c=s>>24>>>7|0,l=(33554431&(s+c|0))-c|0;e.D=e.D-(e.I-l|0)|0,e.I=l,e.D>>>25|0||(e.L=5),n=t,t=t.a[0]}if(e.L>=5){t===null&&(t=e.U);var u=31&(e.I>>>20|0);if(e.L===5){if(u>0){var d=t,f=t,p=32-u|0;d.u(u,f,0,p)}e.U=t;var m=e.I,h=m>>19>>>12|0,g=(1048575&(m+h|0))-h|0;e.D=e.D-(e.I-g|0)|0,e.I=g,e.D>>>20|0||(e.L=4)}else u>0&&(t=z().a7(t,u,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.L>=4){t===null&&(t=e.O);var _=31&(e.I>>>15|0);if(e.L===4){if(_>0){var v=t,y=t,b=32-_|0;v.u(_,y,0,b)}e.O=t;var x=e.I,ee=x>>14>>>17|0,S=(32767&(x+ee|0))-ee|0;e.D=e.D-(e.I-S|0)|0,e.I=S,e.D>>>15|0||(e.L=3)}else _>0&&(t=z().a7(t,_,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.L>=3){t===null&&(t=e.J);var te=31&(e.I>>>10|0);if(e.L===3){if(te>0){var C=t,ne=t,re=32-te|0;C.u(te,ne,0,re)}e.J=t;var ie=e.I,w=ie>>9>>>22|0,ae=(1023&(ie+w|0))-w|0;e.D=e.D-(e.I-ae|0)|0,e.I=ae,e.D>>>10|0||(e.L=2)}else te>0&&(t=z().a7(t,te,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.L>=2){t===null&&(t=e.G);var oe=31&(e.I>>>5|0);if(e.L===2){if(oe>0){var se=t,ce=t,le=32-oe|0;se.u(oe,ce,0,le)}e.G=t;var ue=e.I,de=ue>>4>>>27|0,T=(31&(ue+de|0))-de|0;e.D=e.D-(e.I-T|0)|0,e.I=T,e.D>>>5|0||(e.L=1)}else oe>0&&(t=z().a7(t,oe,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.L>=1){t===null&&(t=e.R);var fe=31&e.I;if(e.L===1){if(fe>0){var pe=t,me=t,he=32-fe|0;pe.u(fe,me,0,he)}e.R=t,e.K=e.K-e.I|0,e.I=0}else fe>0&&(t=z().a7(t,fe,32)),n.a[0]=t}e.gB=!1}function ov(e,t){var n=t.a.length;if(n>0){e.K===32&&lv(e);var r=32-e.K|0,i=r<n?r:n,a=n-i|0,o=e.R,s=e.K;if(t.u(0,o,s,i),e.K=e.K+i|0,a>0){lv(e);var c=e.R;t.u(i,c,0,a),e.K=e.K+a|0}}}function sv(e,t,n){if(t.a.length!==0){e.K===32&&lv(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.D|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.D>>>5|0),c=e.G;if(t.u(0,c,s,a),uv(e,a<<5),o>0){var l=e.G;t.u(a,l,0,o),uv(e,o<<5)}break;case 3:var u=e.D,d=u>>9>>>22|0;if((1023&(u+d|0))-d|0){var f=(t=>{sv(e,t,2)}),p=t.a.length,m=0;if(t!==null)for(;m<p;){var h=t.a[m];f(h),m=1+m|0}else if(t instanceof Ja)for(;m<p;){var g=t.a[m];f(g),m=1+m|0}else if(t instanceof Za)for(;m<p;){var _=t.a[m];f(_),m=1+m|0}else if(t instanceof Ya)for(;m<p;){var v=t.a,y=m<<1,b=v[y],x=v[y+1|0];f(La(b,x)),m=1+m|0}else if(t instanceof Xa)for(;m<p;){var ee=t.a[m];f(ee),m=1+m|0}else if(t instanceof Ga)for(;m<p;){var S=t.a[m];f(Ia(S)),m=1+m|0}else if(t instanceof Ka)for(;m<p;){var te=t.a[m];f(te),m=1+m|0}else if(t instanceof qa)for(;m<p;){var C=t.a[m];f(C),m=1+m|0}else if(t instanceof Wa)for(;m<p;){var ne=t.a[m];f(ne),m=1+m|0}else throw new Wg(t);return}var re=31&((32768-e.D|0)>>>10|0),ie=re<r?re:r,w=r-ie|0,ae=31&(e.D>>>10|0),oe=e.J;if(t.u(0,oe,ae,ie),uv(e,ie<<10),w>0){var se=e.J;t.u(ie,se,0,w),uv(e,w<<10)}break;case 4:var ce=e.D,le=ce>>14>>>17|0;if((32767&(ce+le|0))-le|0){var ue=(t=>{sv(e,t,3)}),de=t.a.length,T=0;if(t!==null)for(;T<de;){var fe=t.a[T];ue(fe),T=1+T|0}else if(t instanceof Ja)for(;T<de;){var pe=t.a[T];ue(pe),T=1+T|0}else if(t instanceof Za)for(;T<de;){var me=t.a[T];ue(me),T=1+T|0}else if(t instanceof Ya)for(;T<de;){var he=t.a,ge=T<<1,_e=he[ge],ve=he[ge+1|0];ue(La(_e,ve)),T=1+T|0}else if(t instanceof Xa)for(;T<de;){var ye=t.a[T];ue(ye),T=1+T|0}else if(t instanceof Ga)for(;T<de;){var be=t.a[T];ue(Ia(be)),T=1+T|0}else if(t instanceof Ka)for(;T<de;){var xe=t.a[T];ue(xe),T=1+T|0}else if(t instanceof qa)for(;T<de;){var Se=t.a[T];ue(Se),T=1+T|0}else if(t instanceof Wa)for(;T<de;){var Ce=t.a[T];ue(Ce),T=1+T|0}else throw new Wg(t);return}var we=31&((1048576-e.D|0)>>>15|0),Te=we<r?we:r,Ee=r-Te|0,De=31&(e.D>>>15|0),Oe=e.O;if(t.u(0,Oe,De,Te),uv(e,Te<<15),Ee>0){var ke=e.O;t.u(Te,ke,0,Ee),uv(e,Ee<<15)}break;case 5:var Ae=e.D,je=Ae>>19>>>12|0;if((1048575&(Ae+je|0))-je|0){var Me=(t=>{sv(e,t,4)}),Ne=t.a.length,E=0;if(t!==null)for(;E<Ne;){var Pe=t.a[E];Me(Pe),E=1+E|0}else if(t instanceof Ja)for(;E<Ne;){var Fe=t.a[E];Me(Fe),E=1+E|0}else if(t instanceof Za)for(;E<Ne;){var Ie=t.a[E];Me(Ie),E=1+E|0}else if(t instanceof Ya)for(;E<Ne;){var Le=t.a,Re=E<<1,ze=Le[Re],Be=Le[Re+1|0];Me(La(ze,Be)),E=1+E|0}else if(t instanceof Xa)for(;E<Ne;){var Ve=t.a[E];Me(Ve),E=1+E|0}else if(t instanceof Ga)for(;E<Ne;){var He=t.a[E];Me(Ia(He)),E=1+E|0}else if(t instanceof Ka)for(;E<Ne;){var Ue=t.a[E];Me(Ue),E=1+E|0}else if(t instanceof qa)for(;E<Ne;){var We=t.a[E];Me(We),E=1+E|0}else if(t instanceof Wa)for(;E<Ne;){var Ge=t.a[E];Me(Ge),E=1+E|0}else throw new Wg(t);return}var Ke=31&((33554432-e.D|0)>>>20|0),qe=Ke<r?Ke:r,Je=r-qe|0,Ye=31&(e.D>>>20|0),Xe=e.U;if(t.u(0,Xe,Ye,qe),uv(e,qe<<20),Je>0){var Ze=e.U;t.u(qe,Ze,0,Je),uv(e,Je<<20)}break;case 6:var Qe=e.D,$e=Qe>>24>>>7|0;if((33554431&(Qe+$e|0))-$e|0){var et=(t=>{sv(e,t,5)}),D=t.a.length,O=0;if(t!==null)for(;O<D;){var tt=t.a[O];et(tt),O=1+O|0}else if(t instanceof Ja)for(;O<D;){var nt=t.a[O];et(nt),O=1+O|0}else if(t instanceof Za)for(;O<D;){var rt=t.a[O];et(rt),O=1+O|0}else if(t instanceof Ya)for(;O<D;){var it=t.a,at=O<<1,ot=it[at],k=it[at+1|0];et(La(ot,k)),O=1+O|0}else if(t instanceof Xa)for(;O<D;){var st=t.a[O];et(st),O=1+O|0}else if(t instanceof Ga)for(;O<D;){var ct=t.a[O];et(Ia(ct)),O=1+O|0}else if(t instanceof Ka)for(;O<D;){var lt=t.a[O];et(lt),O=1+O|0}else if(t instanceof qa)for(;O<D;){var ut=t.a[O];et(ut),O=1+O|0}else if(t instanceof Wa)for(;O<D;){var dt=t.a[O];et(dt),O=1+O|0}else throw new Wg(t);return}var ft=e.D>>>25|0;if((ft+r|0)>64)throw Dg(new kg,`exceeding 2^31 elements`);var pt=e.aH;t.u(0,pt,ft,r),uv(e,r<<25);break;default:throw new Wg(n)}}}function cv(e,t){for(var n=t.cT(),r=0;r<n;){var i=t.cS(r);matchResult26:{var a=r,o=(n+(n>>>31|0)|0)>>1,s=a-o|0,c=s>>31,l=(1+o|0)-((s^c)-c|0)|0;if(l===1){ov(e,i);break matchResult26}if(e.K===32||e.K===0){sv(e,i,l);break matchResult26}V().iC(l-2|0,i,new Y((t=>{ov(e,t)})))}r=1+r|0}return e}function lv(e){var t=32+e.D|0,n=t^e.D;e.D=t,e.K=0,dv(e,t,n)}function uv(e,t){if(t>0){var n=e.D+t|0,r=n^e.D;e.D=n,e.K=0,dv(e,n,r)}}function dv(e,t,n){if(n<=0)throw Dg(new kg,`advance1(`+t+`, `+n+`): a1=`+e.R+`, a2=`+e.G+`, a3=`+e.J+`, a4=`+e.O+`, a5=`+e.U+`, a6=`+e.aH+`, depth=`+e.L);n<1024?(e.L<=1&&(e.G=new(I.r().r()).C(32),e.G.a[0]=e.R,e.L=2),e.R=new P(32),e.G.a[31&(t>>>5|0)]=e.R):n<32768?(e.L<=2&&(e.J=new(I.r().r().r()).C(32),e.J.a[0]=e.G,e.L=3),e.R=new P(32),e.G=new(I.r().r()).C(32),e.G.a[31&(t>>>5|0)]=e.R,e.J.a[31&(t>>>10|0)]=e.G):n<1048576?(e.L<=3&&(e.O=new(I.r().r().r().r()).C(32),e.O.a[0]=e.J,e.L=4),e.R=new P(32),e.G=new(I.r().r()).C(32),e.J=new(I.r().r().r()).C(32),e.G.a[31&(t>>>5|0)]=e.R,e.J.a[31&(t>>>10|0)]=e.G,e.O.a[31&(t>>>15|0)]=e.J):n<33554432?(e.L<=4&&(e.U=new(I.r().r().r().r().r()).C(32),e.U.a[0]=e.O,e.L=5),e.R=new P(32),e.G=new(I.r().r()).C(32),e.J=new(I.r().r().r()).C(32),e.O=new(I.r().r().r().r()).C(32),e.G.a[31&(t>>>5|0)]=e.R,e.J.a[31&(t>>>10|0)]=e.G,e.O.a[31&(t>>>15|0)]=e.J,e.U.a[31&(t>>>20|0)]=e.O):(e.L<=5&&(e.aH=new(I.r().r().r().r().r().r()).C(64),e.aH.a[0]=e.U,e.L=6),e.R=new P(32),e.G=new(I.r().r()).C(32),e.J=new(I.r().r().r()).C(32),e.O=new(I.r().r().r().r()).C(32),e.U=new(I.r().r().r().r().r()).C(32),e.G.a[31&(t>>>5|0)]=e.R,e.J.a[31&(t>>>10|0)]=e.G,e.O.a[31&(t>>>15|0)]=e.J,e.U.a[31&(t>>>20|0)]=e.O,e.aH.a[t>>>25|0]=e.U)}function fv(){this.aH=null,this.U=null,this.O=null,this.J=null,this.G=null,this.R=null,this.K=0,this.D=0,this.I=0,this.gB=!1,this.L=0,this.R=new P(32),this.K=0,this.D=0,this.I=0,this.gB=!1,this.L=1}M=fv.prototype=new N,M.constructor=fv,M.bb=(function(e){}),M.rx=(function(e){var t=e.cT();switch(t){case 0:break;case 1:this.L=1;var n=e.g.a.length;this.K=31&n,this.D=n-this.K|0;var r=e.g;this.R=r.a.length===32?r:z().a7(r,0,32);break;case 3:var i=e.bm,a=e.i;this.R=a.a.length===32?a:z().a7(a,0,32),this.L=2,this.I=32-e.bK|0;var o=e.j+this.I|0;this.K=31&o,this.D=o-this.K|0,this.G=new(I.r().r()).C(32),this.G.a[0]=e.g;var s=this.G,c=i.a.length;i.u(0,s,1,c),this.G.a[1+i.a.length|0]=this.R;break;case 5:var l=e.aX,u=e.aY,d=e.i;this.R=d.a.length===32?d:z().a7(d,0,32),this.L=3,this.I=1024-e.bh|0;var f=e.j+this.I|0;this.K=31&f,this.D=f-this.K|0,this.J=new(I.r().r().r()).C(32),this.J.a[0]=V().cM(e.g,e.bu);var p=this.J,m=l.a.length;l.u(0,p,1,m),this.G=z().W(u,32),this.J.a[1+l.a.length|0]=this.G,this.G.a[u.a.length]=this.R;break;case 7:var h=e.az,g=e.aB,_=e.aA,v=e.i;this.R=v.a.length===32?v:z().a7(v,0,32),this.L=4,this.I=32768-e.aP|0;var y=e.j+this.I|0;this.K=31&y,this.D=y-this.K|0,this.O=new(I.r().r().r().r()).C(32),this.O.a[0]=V().cM(V().cM(e.g,e.b6),e.b7);var b=this.O,x=h.a.length;h.u(0,b,1,x),this.J=z().W(g,32),this.G=z().W(_,32),this.O.a[1+h.a.length|0]=this.J,this.J.a[g.a.length]=this.G,this.G.a[_.a.length]=this.R;break;case 9:var ee=e.a9,S=e.ac,te=e.ab,C=e.aa,ne=e.i;this.R=ne.a.length===32?ne:z().a7(ne,0,32),this.L=5,this.I=1048576-e.ar|0;var re=e.j+this.I|0;this.K=31&re,this.D=re-this.K|0,this.U=new(I.r().r().r().r().r()).C(32),this.U.a[0]=V().cM(V().cM(V().cM(e.g,e.aE),e.aF),e.aG);var ie=this.U,w=ee.a.length;ee.u(0,ie,1,w),this.O=z().W(S,32),this.J=z().W(te,32),this.G=z().W(C,32),this.U.a[1+ee.a.length|0]=this.O,this.O.a[S.a.length]=this.J,this.J.a[te.a.length]=this.G,this.G.a[C.a.length]=this.R;break;case 11:var ae=e.Z,oe=e.a3,se=e.a2,ce=e.a1,le=e.a0,ue=e.i;this.R=ue.a.length===32?ue:z().a7(ue,0,32),this.L=6,this.I=33554432-e.al|0;var de=e.j+this.I|0;this.K=31&de,this.D=de-this.K|0,this.aH=new(I.r().r().r().r().r().r()).C(64),this.aH.a[0]=V().cM(V().cM(V().cM(V().cM(e.g,e.as),e.at),e.au),e.av);var T=this.aH,fe=ae.a.length;ae.u(0,T,1,fe),this.U=z().W(oe,32),this.O=z().W(se,32),this.J=z().W(ce,32),this.G=z().W(le,32),this.aH.a[1+ae.a.length|0]=this.U,this.U.a[oe.a.length]=this.O,this.O.a[se.a.length]=this.J,this.J.a[ce.a.length]=this.G,this.G.a[le.a.length]=this.R;break;default:throw new Wg(t)}return this.K===0&&this.D>0&&(this.K=32,this.D=this.D-32|0),this}),M.pU=(function(e){return this.K===32&&lv(this),this.R.a[this.K]=e,this.K=1+this.K|0,this}),M.o0=(function(e){return e instanceof dC?this.K===0&&this.D===0&&!this.gB?this.rx(e):cv(this,e):jf(this,e)}),M.p2=(function(){this.gB&&av(this);var e=this.K+this.D|0,t=e-this.I|0;if(t===0)return iv(),XC();if(e<0)throw jg(new Ng,`Vector cannot have negative size `+e);if(e<=32){var n=this.R;return new WC(n.a.length===t?n:z().W(n,t))}if(e<=1024){var r=31&(e-1|0),i=(e-1|0)>>>5|0,a=z().a7(this.G,1,i),o=this.G.a[0],s=this.G.a[i],c=1+r|0,l=s.a.length===c?s:z().W(s,c);return new ZC(o,32-this.I|0,a,l,t)}if(e<=32768){var u=31&(e-1|0),d=31&((e-1|0)>>>5|0),f=(e-1|0)>>>10|0,p=z().a7(this.J,1,f),m=this.J.a[0],h=z().a7(m,1,m.a.length),g=this.J.a[0].a[0],_=z().W(this.J.a[f],d),v=this.J.a[f].a[d],y=1+u|0,b=v.a.length===y?v:z().W(v,y),x=g.a.length;return new QC(g,x,h,x+(h.a.length<<5)|0,p,_,b,t)}if(e<=1048576){var ee=31&(e-1|0),S=31&((e-1|0)>>>5|0),te=31&((e-1|0)>>>10|0),C=(e-1|0)>>>15|0,ne=z().a7(this.O,1,C),re=this.O.a[0],ie=z().a7(re,1,re.a.length),w=this.O.a[0].a[0],ae=z().a7(w,1,w.a.length),oe=this.O.a[0].a[0].a[0],se=z().W(this.O.a[C],te),ce=z().W(this.O.a[C].a[te],S),le=this.O.a[C].a[te].a[S],ue=1+ee|0,de=le.a.length===ue?le:z().W(le,ue),T=oe.a.length,fe=T+(ae.a.length<<5)|0;return new $C(oe,T,ae,fe,ie,fe+(ie.a.length<<10)|0,ne,se,ce,de,t)}if(e<=33554432){var pe=31&(e-1|0),me=31&((e-1|0)>>>5|0),he=31&((e-1|0)>>>10|0),ge=31&((e-1|0)>>>15|0),_e=(e-1|0)>>>20|0,ve=z().a7(this.U,1,_e),ye=this.U.a[0],be=z().a7(ye,1,ye.a.length),xe=this.U.a[0].a[0],Se=z().a7(xe,1,xe.a.length),Ce=this.U.a[0].a[0].a[0],we=z().a7(Ce,1,Ce.a.length),Te=this.U.a[0].a[0].a[0].a[0],Ee=z().W(this.U.a[_e],ge),De=z().W(this.U.a[_e].a[ge],he),Oe=z().W(this.U.a[_e].a[ge].a[he],me),ke=this.U.a[_e].a[ge].a[he].a[me],Ae=1+pe|0,je=ke.a.length===Ae?ke:z().W(ke,Ae),Me=Te.a.length,Ne=Me+(we.a.length<<5)|0,E=Ne+(Se.a.length<<10)|0;return new ew(Te,Me,we,Ne,Se,E,be,E+(be.a.length<<15)|0,ve,Ee,De,Oe,je,t)}var Pe=31&(e-1|0),Fe=31&((e-1|0)>>>5|0),Ie=31&((e-1|0)>>>10|0),Le=31&((e-1|0)>>>15|0),Re=31&((e-1|0)>>>20|0),ze=(e-1|0)>>>25|0,Be=z().a7(this.aH,1,ze),Ve=this.aH.a[0],He=z().a7(Ve,1,Ve.a.length),Ue=this.aH.a[0].a[0],We=z().a7(Ue,1,Ue.a.length),Ge=this.aH.a[0].a[0].a[0],Ke=z().a7(Ge,1,Ge.a.length),qe=this.aH.a[0].a[0].a[0].a[0],Je=z().a7(qe,1,qe.a.length),Ye=this.aH.a[0].a[0].a[0].a[0].a[0],Xe=z().W(this.aH.a[ze],Re),Ze=z().W(this.aH.a[ze].a[Re],Le),Qe=z().W(this.aH.a[ze].a[Re].a[Le],Ie),$e=z().W(this.aH.a[ze].a[Re].a[Le].a[Ie],Fe),et=this.aH.a[ze].a[Re].a[Le].a[Ie].a[Fe],D=1+Pe|0,O=et.a.length===D?et:z().W(et,D),tt=Ye.a.length,nt=tt+(Je.a.length<<5)|0,rt=nt+(Ke.a.length<<10)|0,it=rt+(We.a.length<<15)|0;return new tw(Ye,tt,Je,nt,Ke,rt,We,it,He,it+(He.a.length<<20)|0,Be,Xe,Ze,Qe,$e,O,t)}),M.z=(function(){return`VectorBuilder(len1=`+this.K+`, lenRest=`+this.D+`, offset=`+this.I+`, depth=`+this.L+`)`}),M.b2=(function(e){return this.pU(e)}),M.b9=(function(e){return this.o0(e)}),M.ba=(function(){return this.p2()}),new F().i(fv,`scala.collection.immutable.VectorBuilder`,{gG:1,E:1,G:1,L:1,aa:1});function pv(){this.nC=null,mv=this,this.nC=new P(0)}M=pv.prototype=new N,M.constructor=pv,M.dh=(function(e){return this.oA(e)}),M.oA=(function(e){var t=e.x();if(t>=0){var n=this.p6(this.nC,0,t),r=Zg(e)?e.bV(n,0,2147483647):e.l().bV(n,0,2147483647);if(r!==t)throw new Ag(`Copied `+r+` of `+t);return cw(new uw,n,t)}return lw(new uw).o1(e)}),M.b4=(function(){return new gv}),M.sg=(function(e,t){if(t<0)throw fh(new ph,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw fh(new ph,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),M.p6=(function(e,t,n){var r=this.sg(e.a.length,n);if(r<0)return e;var i=new P(r);return e.u(0,i,0,t),i}),M.aC=(function(e){return this.oA(e)}),new F().i(pv,`scala.collection.mutable.ArrayBuffer$`,{gL:1,a:1,J:1,a1:1,am:1});var mv;function hv(){return mv||=new pv,mv}function gv(){this.dZ=null,Hh(this,(hv(),lw(new uw)))}M=gv.prototype=new Wh,M.constructor=gv,M.bb=(function(e){this.dZ.bb(e)}),new F().i(gv,`scala.collection.mutable.ArrayBuffer$$anon$1`,{gM:1,aT:1,E:1,G:1,L:1});function _v(){this.eP=null,Eh(this,Bv())}M=_v.prototype=new Oh,M.constructor=_v,new F().i(_v,`scala.collection.mutable.Buffer$`,{gS:1,bG:1,a:1,J:1,a1:1});var vv;function yv(){return vv||=new _v,vv}function bv(e,t){this.dZ=null,Hh(this,eC(new sC,e,t))}M=bv.prototype=new Wh,M.constructor=bv,M.bb=(function(e){this.dZ.bb(e)}),new F().i(bv,`scala.collection.mutable.HashSet$$anon$4`,{h0:1,aT:1,E:1,G:1,L:1});function xv(e,t){if(t===null)throw Ig(new Lg);return e.fF=t,e.e1=0,e.db=null,e.fG=t.aZ.a.length,e}function Sv(){this.e1=0,this.db=null,this.fG=0,this.fF=null}M=Sv.prototype=new Sh,M.constructor=Sv;function Cv(){}Cv.prototype=M,M.m=(function(){if(this.db!==null)return!0;for(;this.e1<this.fG;){var e=this.fF.aZ.a[this.e1];if(this.e1=1+this.e1|0,e!==null)return this.db=e,!0}return!1}),M.k=(function(){if(this.m()){var e=this.db;e===null&&Gu().cB();var t=this.iB(e),n=this.db;return n===null&&Gu().cB(),this.db=n.b0,t}return dm().S.k()});function wv(e,t){return e.fH=t,e}function Tv(){this.fH=null}M=Tv.prototype=new N,M.constructor=Tv;function Ev(){}Ev.prototype=M,M.b9=(function(e){return jf(this,e)}),M.bb=(function(e){}),M.ba=(function(){return this.fH});function Dv(){this.eP=null,Eh(this,hv())}M=Dv.prototype=new Oh,M.constructor=Dv,new F().i(Dv,`scala.collection.mutable.IndexedSeq$`,{h3:1,bG:1,a:1,J:1,a1:1});var Ov;function kv(){return Ov||=new Dv,Ov}function Av(){}M=Av.prototype=new N,M.constructor=Av,M.dh=(function(e){return new sw().h6(e)}),M.b4=(function(){return Hh(new Uh,new sw)}),M.aC=(function(e){return new sw().h6(e)}),new F().i(Av,`scala.collection.mutable.ListBuffer$`,{h6:1,a:1,J:1,a1:1,am:1});var jv;function Mv(){return jv||=new Av,jv}function Nv(e,t){this.ig=null,this.nM=null,this.nL=0,this.ig=e,this.nM=t,this.nL=t.a4()|0}M=Nv.prototype=new Sh,M.constructor=Nv,M.m=(function(){return Iu().oe(this.nL,this.nM.a4()|0,`mutation occurred during iteration`),this.ig.m()}),M.k=(function(){return this.ig.k()}),new F().i(Nv,`scala.collection.mutable.MutationTracker$CheckedIterator`,{h8:1,s:1,b:1,c:1,t:1});function Pv(e,t){if(Iv(t)){var n=e.aR(),r=t.aR();return n===null?r===null:n===r}return!1}function Fv(e,t){return t.ai.Z?`Array[`+Fv(e,t.ai.Q())+`]`:t.ai.N}function Iv(e){return!!(e&&e.$classData&&e.$classData.n.D)}function Lv(e){this.nR=null,this.fJ=0,this.nQ=0,this.nR=e,this.fJ=0,this.nQ=e.by()}M=Lv.prototype=new Sh,M.constructor=Lv,M.m=(function(){return this.fJ<this.nQ}),M.k=(function(){var e=this.nR.bz(this.fJ);return this.fJ=1+this.fJ|0,e}),new F().i(Lv,`scala.runtime.ScalaRunTime$$anon$1`,{hP:1,s:1,b:1,c:1,t:1});function Rv(){}M=Rv.prototype=new N,M.constructor=Rv,M.dh=(function(e){return this.oB(e)}),M.b4=(function(){return fw(new pw)}),M.oB=(function(e){return jf(fw(new pw),e).ba()}),M.aC=(function(e){return this.oB(e)}),new F().i(Rv,`scala.scalajs.js.WrappedArray$`,{hV:1,am:1,a:1,J:1,a1:1});var zv;function Bv(){return zv||=new Rv,zv}function Vv(){}M=Vv.prototype=new N,M.constructor=Vv,M.dh=(function(e){return this.iH(e)}),M.iH=(function(e){return this.b4().b9(e).ba()}),M.b4=(function(){return new Vh(new Y((e=>new Q(e.e2))),dw(new pw,[]))}),M.aC=(function(e){return this.iH(e)}),new F().i(Vv,`scala.scalajs.runtime.WrappedVarArgs$`,{i7:1,am:1,a:1,J:1,a1:1});var Hv;function Uv(){return Hv||=new Vv,Hv}function Wv(e){this.fK=null,this.fK=e}M=Wv.prototype=new Yh,M.constructor=Wv,M.w=(function(){return G().ga(this,-1408943127,!0)}),M.q=(function(e){if(this===e)return!0;if(e instanceof Wv){var t=this.fK,n=e.fK;return t===null?n===null:t.q(n)}return!1}),M.z=(function(){return Ju().il(this)}),M.by=(function(){return 1}),M.bA=(function(){return`Failure`}),M.bz=(function(e){if(e===0)return this.fK;throw Mg(new Ng,e)}),M.oI=(function(){return!0}),M.oJ=(function(){return!1}),M.iW=(function(e){return this}),M.dj=(function(e,t){return e.e(this.fK)}),new F().i(Wv,`scala.util.Failure`,{co:1,cq:1,d:1,U:1,a:1});function Gv(e){this.eZ=null,this.eZ=e}M=Gv.prototype=new Yh,M.constructor=Gv,M.w=(function(){return G().ga(this,-1750213842,!0)}),M.q=(function(e){return this===e||e instanceof Gv&&H().p(this.eZ,e.eZ)}),M.z=(function(){return Ju().il(this)}),M.by=(function(){return 1}),M.bA=(function(){return`Success`}),M.bz=(function(e){if(e===0)return this.eZ;throw Mg(new Ng,e)}),M.oI=(function(){return!1}),M.oJ=(function(){return!0}),M.iW=(function(e){try{return new Gv(e.e(this.eZ))}catch(e){var t=e instanceof _f?e:new xb(e),n=fd().hb(t);if(!n.f())return new Wv(n.N());throw t instanceof xb?t.bn:t}}),M.dj=(function(e,t){try{return t.e(this.eZ)}catch(t){var n=t instanceof _f?t:new xb(t),r=fd().hb(n);if(!r.f()){var i=r.N();return e.e(i)}throw n instanceof xb?n.bn:n}}),new F().i(Gv,`scala.util.Success`,{cp:1,cq:1,d:1,U:1,a:1});var Kv=class e extends Kf{constructor(e,t){super(),this.fe=null,this.fd=null,this.fe=e,this.fd=t,gf(this,`ErrorHandlingError: `+Yf().f5(e)+`; cause: `+Yf().f5(t),null,!0,!0),this.oH(t)}cQ(){return new qg(this)}w(){return G().iu(this,-889275714,null)}q(t){if(this===t)return!0;if(t instanceof e){var n=this.fe,r=t.fe;if(n===null?r===null:n.q(r)){var i=this.fd,a=t.fd;return i===null?a===null:i.q(a)}return!1}return!1}by(){return 2}bA(){return`ErrorHandlingError`}bz(e){if(e===0)return this.fe;if(e===1)return this.fd;throw jg(new Ng,``+e)}z(){return`ErrorHandlingError: `+this.fe+`; cause: `+this.fd}};new F().i(Kv,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{aW:1,au:1,w:1,a:1,d:1,U:1});var qv=class e extends Kf{constructor(e){super(),this.ff=null,this.ff=e,gf(this,`ObserverError: `+Yf().f5(e),null,!0,!0)}cQ(){return new qg(this)}w(){return G().iu(this,-889275714,null)}q(t){if(this===t)return!0;if(t instanceof e){var n=this.ff,r=t.ff;return n===null?r===null:n.q(r)}return!1}by(){return 1}bA(){return`ObserverError`}bz(e){if(e===0)return this.ff;throw jg(new Ng,``+e)}z(){return`ObserverError: `+this.ff}};new F().i(qv,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aX:1,au:1,w:1,a:1,d:1,U:1});var Jv=class e extends Kf{constructor(e,t){super(),this.fh=null,this.fg=null,this.fh=e,this.fg=t,gf(this,`ObserverErrorHandlingError: `+Yf().f5(e)+`; cause: `+Yf().f5(t),null,!0,!0),this.oH(t)}cQ(){return new qg(this)}w(){return G().iu(this,-889275714,null)}q(t){if(this===t)return!0;if(t instanceof e){var n=this.fh,r=t.fh;if(n===null?r===null:n.q(r)){var i=this.fg,a=t.fg;return i===null?a===null:i.q(a)}return!1}return!1}by(){return 2}bA(){return`ObserverErrorHandlingError`}bz(e){if(e===0)return this.fh;if(e===1)return this.fg;throw jg(new Ng,``+e)}z(){return`ObserverErrorHandlingError: `+this.fh+`; cause: `+this.fg}};new F().i(Jv,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{aY:1,au:1,w:1,a:1,d:1,U:1});var Yv=class e extends Kf{constructor(e,t){super(),this.eE=null,this.eD=0,this.eE=e,this.eD=t,gf(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}cQ(){return new qg(this)}w(){var e=-889275714;return e=U().C(e,my(`TransactionDepthExceeded`)),e=U().C(e,U().Q(this.eE)),e=U().C(e,this.eD),U().aJ(e,2)}q(t){if(this===t)return!0;if(t instanceof e){if(this.eD===t.eD){var n=this.eE,r=t.eE;return n===null?r===null:n===r}return!1}return!1}by(){return 2}bA(){return`TransactionDepthExceeded`}bz(e){if(e===0)return this.eE;if(e===1)return this.eD;throw jg(new Ng,``+e)}z(){return`TransactionDepthExceeded: `+this.eE+`; maxDepth: `+this.eD}};new F().i(Yv,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aZ:1,au:1,w:1,a:1,d:1,U:1});function Xv(e){e.ha()}function Zv(e){this.jF=null,this.aM=null,this.hr=null,this.hq=null,this.cU=null,this.jF=void 0,og(this),this.hr=e,this.hq=new Ux(this.hr,new Gh((()=>fo(this)))),this.cU=this.hq}M=Zv.prototype=new N,M.constructor=Zv,M.g5=(function(){return this.jF}),M.fX=(function(){return uo(this)}),M.z=(function(){return fo(this)}),M.h9=(function(){return this.cU}),M.sk=(function(e,t){this.hr=e,Eb(this.hq,e,t)}),new F().i(Zv,`com.raquo.airstream.state.SourceVar`,{cL:1,aA:1,aB:1,av:1,ag:1,cN:1});function Qv(e){this.cW=null,this.cX=null,this.kX=null,this.kY=!1,Zm(this,e,$())}M=Qv.prototype=new $m,M.constructor=Qv,M.h2=(function(){return this.kY||=(this.kX=this.c(`relative`),!0),this.kX}),new F().i(Qv,`com.raquo.laminar.defs.styles.StyleProps$$anon$43`,{dk:1,a6:1,A:1,a4:1,a5:1,ds:1});function $v(e,t){var n=e.hH;n===void 0?e.hH=$u().q8(os().bo(Ju().bj(new(vy.r()).C([t])))):n.push(t)|0}function ey(e,t){var n=e.lj;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].sY()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}return!1}function ty(e,t){this.gq=null,this.cG=null,this.hG=null,this.el=null,this.fm=null,this.hI=null,this.bq=null,this.lj=null,this.hH=null,this.hI=e,this.bq=t,this.gq=xy(),Ld(this),pg(this),this.lj=void 0,this.hH=void 0}M=ty.prototype=new N,M.constructor=ty,M.c9=(function(e){ac().gN(e,this,void 0)}),M.gT=(function(){return this.cG}),M.oj=(function(e){this.cG=e}),M.pk=(function(e){vg(this,e)}),M.pb=(function(e){yg(this,e)}),M.qp=(function(){if(fs().iP(this.bq)){var e=this.hI;return e instanceof up?e.q0():void 0}return As().l3}),M.rB=(function(e){var t=this.qp();return t!==void 0&&ls().ru(t,e,0)}),M.rX=(function(e){if(e instanceof Od&&this.rB(e.cF)){if(ey(this,e.cF))throw Gp(new Kp,"Can not add uncontrolled `"+e.cF+" <-- ???` to element `"+fs().om(this.bq)+"` that already has an input controller for `"+e.cF+"` property.");$v(this,e.cF)}}),M.z=(function(){return`ReactiveHtmlElement(`+(this.bq===null?`tag=`+this.hI.j1():this.bq.outerHTML)+`)`}),M.eB=(function(){return this.bq}),new F().i(ty,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{e8:1,aE:1,Y:1,be:1,bf:1,e6:1});function ny(e,t){return gf(e,t,null,!0,!0),e}function ry(e){return gf(e,null,null,!0,!0),e}var iy=class extends Ng{};new F().i(iy,`java.lang.ArrayIndexOutOfBoundsException`,{ey:1,br:1,Q:1,I:1,w:1,a:1});function ay(e,t){return Object.is(e,t)}function oy(e){var t=e|0;if(t===e&&1/e!=-1/0)return t;if(e!==e)return 2146959360;var n=Da;return n.setFloat64(0,e,!0),(n.getInt32(0,!0)|0)^(n.getInt32(4,!0)|0)}var sy=new F().i(0,`java.lang.Double`,{bp:1,ac:1,a:1,a2:1,Z:1,aq:1},(e=>typeof e==`number`)),cy=new F().i(0,`java.lang.Float`,{eE:1,ac:1,a:1,a2:1,Z:1,aq:1},(e=>Fa(e))),ly=new F().i(0,`java.lang.Integer`,{eG:1,ac:1,a:1,a2:1,Z:1,aq:1},(e=>Pa(e)));function uy(e,t,n){if(n instanceof va){var r=n,i=r.l,a=r.h;return(e^i|t^a)===0}return!1}function dy(e,t){return e^t}var fy=new F().i(0,`java.lang.Long`,{bs:1,ac:1,a:1,a2:1,Z:1,aq:1},(e=>e instanceof va)),py=class extends kg{constructor(e){super(),gf(this,e,null,!0,!0)}};new F().i(py,`java.lang.NumberFormatException`,{eO:1,bq:1,Q:1,I:1,w:1,a:1});function my(e){for(var t=e.length,n=0,r=0;r!==t;)n=((n<<5)-n|0)+e.charCodeAt(r)|0,r=1+r|0;return n}function hy(e,t){return e===t}function gy(e,t){var n=Jd().sD(t);return e.indexOf(n)|0}function _y(e){for(var t=e.length,n=0;n!==t&&e.charCodeAt(n)<=32;)n=1+n|0;if(n===t)return``;for(var r=t;e.charCodeAt(r-1|0)<=32;)r=r-1|0;if((n|r^t)===0)return e;var i=n,a=r;return e.substring(i,a)}var vy=new F().i(0,`java.lang.String`,{bu:1,a:1,a2:1,aG:1,Z:1,aq:1},(e=>typeof e==`string`));function yy(){}M=yy.prototype=new Kg,M.constructor=yy,M.w=(function(){return 2433880}),M.z=(function(){return`None`}),M.by=(function(){return 0}),M.bA=(function(){return`None`}),M.bz=(function(e){throw Mg(new Ng,e)}),M.rg=(function(){throw new Vg(`None.get`)}),M.N=(function(){this.rg()}),new F().i(yy,`scala.None$`,{fk:1,bx:1,b:1,d:1,U:1,a:1});var by;function xy(){return by||=new yy,by}function Sy(e){this.fq=null,this.fq=e}M=Sy.prototype=new Kg,M.constructor=Sy,M.w=(function(){return G().ga(this,1323286827,!0)}),M.q=(function(e){return this===e||e instanceof Sy&&H().p(this.fq,e.fq)}),M.z=(function(){return Ju().il(this)}),M.by=(function(){return 1}),M.bA=(function(){return`Some`}),M.bz=(function(e){if(e===0)return this.fq;throw Mg(new Ng,e)}),M.N=(function(){return this.fq}),new F().i(Sy,`scala.Some`,{by:1,bx:1,b:1,d:1,U:1,a:1});function Cy(){}M=Cy.prototype=new N,M.constructor=Cy;function wy(){}wy.prototype=M,M.x=(function(){return-1}),M.bL=(function(e){Yl(this,e)}),M.f4=(function(e){return Xl(this,e)}),M.f=(function(){return Zl(this)}),M.bV=(function(e,t,n){return Ql(this,e,t,n)}),M.e4=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.g0=(function(e){return this.bw().aC(e)}),M.g6=(function(){return this.bw().b4()}),M.cc=(function(){return this.bB()}),M.fZ=(function(e){return this.g0(e)});function Ty(e){this.gu=null,this.cY=0,this.fr=0,this.gu=e,this.cY=0,this.fr=gl().bW(this.gu)}M=Ty.prototype=new Sh,M.constructor=Ty,M.x=(function(){return this.fr-this.cY|0}),M.m=(function(){return this.cY<this.fr}),M.k=(function(){this.cY>=gl().bW(this.gu)&&dm().S.k();var e=Ju().ey(this.gu,this.cY);return this.cY=1+this.cY|0,e}),M.e9=(function(e){if(e>0){var t=this.cY+e|0;if(t<0)var n=this.fr;else var r=this.fr,n=r<t?r:t;this.cY=n}return this}),new F().i(Ty,`scala.collection.ArrayOps$ArrayIterator`,{fu:1,s:1,b:1,c:1,t:1,a:1});function Ey(e,t){return e.hW=t,e.cZ=0,e.bl=t.r(),e}function Dy(e,t){return t<0?0:t>e.bl?e.bl:t}function Oy(){this.hW=null,this.cZ=0,this.bl=0}M=Oy.prototype=new Sh,M.constructor=Oy;function ky(){}ky.prototype=M,M.x=(function(){return this.bl}),M.m=(function(){return this.bl>0}),M.k=(function(){if(this.bl>0){var e=this.hW.v(this.cZ);return this.cZ=1+this.cZ|0,this.bl=this.bl-1|0,e}return dm().S.k()}),M.e9=(function(e){if(e>0){this.cZ=this.cZ+e|0;var t=this.bl-e|0;this.bl=t<0?0:t}return this}),M.gc=(function(e,t){var n=Dy(this,e),r=Dy(this,t)-n|0;return this.bl=r<0?0:r,this.cZ=this.cZ+n|0,this}),new F().i(Oy,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bE:1,s:1,b:1,c:1,t:1,a:1});function Ay(){this.fH=null,wv(this,dm().S)}M=Ay.prototype=new Ev,M.constructor=Ay,M.pS=(function(e){return this.fH=this.fH.iv(new Am((()=>new $g(e)))),this}),M.b2=(function(e){return this.pS(e)}),new F().i(Ay,`scala.collection.Iterator$$anon$21`,{fD:1,h2:1,E:1,G:1,L:1,aa:1});function jy(e,t,n){return e.dl(t,new Am((()=>n.e(t))))}function My(e,t){for(var n=e.l();n.m();){var r=n.k();t.dg(r.be,r.b5)}}function Ny(e,t,n,r,i){return eu(new t_(new Y((e=>{var t=e.be,n=e.b5;return t+` -> `+n})),e.l()),t,n,r,i)}function Py(e,t){for(var n=e.g6(),r=tC(new sC),i=e.l();i.m();){var a=i.k();r.gM(t.e(a))&&n.b2(a)}return n.ba()}function Fy(e,t){var n=e.ec().b4();return n.b9(e),n.b9(t),n.ba()}function Iy(e){return e.nr||=(e.nq=new SC(new(Pm.r()).C(0)),!0),e.nq}function Ly(){this.i0=null,this.nq=null,this.nr=!1,Ry=this,this.i0=new Yg(this)}M=Ly.prototype=new N,M.constructor=Ly,M.iE=(function(e,t){return e instanceof cC?e:this.jg(kl().ox(e,t))}),M.gZ=(function(e){return new Vh(new Y((t=>this.jg(tu(t,e)))),(hv(),new gv))}),M.jg=(function(e){if(e===null)return null;if(e instanceof P)return new SC(e);if(e instanceof Ja)return new bC(e);if(e instanceof Za)return new vC(e);if(e instanceof Ya)return new xC(e);if(e instanceof Xa)return new yC(e);if(e instanceof Ga)return new _C(e);if(e instanceof Ka)return new gC(e);if(e instanceof qa)return new CC(e);if(e instanceof Wa)return new hC(e);if(dl(e,1))return new wC(e);throw new Wg(e)}),M.iD=(function(e,t){return this.iE(e,t)}),new F().i(Ly,`scala.collection.immutable.ArraySeq$`,{fU:1,a:1,bC:1,bA:1,bB:1,bI:1});var Ry;function zy(){return Ry||=new Ly,Ry}function By(e,t){if(this.bP=0,this.fx=0,this.ep=null,this.bE=0,this.d2=null,this.fy=null,t===null)throw Ig(new Lg);for(b_(this,e.bs);this.m();){var n=this.ep.g1(this.bP);t.fb(t.cI,this.ep.eb(this.bP),this.ep.dm(this.bP),n,Jl().cx(n),0),this.bP=1+this.bP|0}}M=By.prototype=new E_,M.constructor=By,M.k=(function(){return dm().S.k()}),new F().i(By,`scala.collection.immutable.HashMapBuilder$$anon$1`,{fY:1,bV:1,s:1,b:1,c:1,t:1});function Vy(e){return!!(e&&e.$classData&&e.$classData.n.r)}function Hy(e){if(this.dO=0,this.eT=null,e===null)throw Ig(new Lg);K_(this,e)}M=Hy.prototype=new J_,M.constructor=Hy,new F().i(Hy,`scala.collection.immutable.Map$Map2$$anon$1`,{gf:1,gg:1,s:1,b:1,c:1,t:1});function Uy(e){if(this.dQ=0,this.dP=null,e===null)throw Ig(new Lg);Y_(this,e)}M=Uy.prototype=new Z_,M.constructor=Uy,new F().i(Uy,`scala.collection.immutable.Map$Map3$$anon$4`,{gh:1,gi:1,s:1,b:1,c:1,t:1});function Wy(e){if(this.dR=0,this.cK=null,e===null)throw Ig(new Lg);Q_(this,e)}M=Wy.prototype=new ev,M.constructor=Wy,new F().i(Wy,`scala.collection.immutable.Map$Map4$$anon$7`,{gj:1,gk:1,s:1,b:1,c:1,t:1});function Gy(e){this.dK=0,this.gz=null,this.bQ=0,this.fz=null,this.fA=null,this.i3=0,this.nw=null,O_(this,e),this.i3=0}M=Gy.prototype=new P_,M.constructor=Gy,M.w=(function(){return G().pg(this.i3,U().Q(this.nw),-889275714)}),M.rW=(function(){return this.m()||dm().S.k(),this.i3=this.gz.g1(this.dK),this.nw=this.gz.dm(this.dK),this.dK=this.dK-1|0,this}),M.k=(function(){return this.rW()}),new F().i(Gy,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{gm:1,fV:1,s:1,b:1,c:1,t:1});function Ky(e){this.bP=0,this.fx=0,this.ep=null,this.bE=0,this.d2=null,this.fy=null,b_(this,e)}M=Ky.prototype=new E_,M.constructor=Ky,M.rV=(function(){this.m()||dm().S.k();var e=this.ep.oE(this.bP);return this.bP=1+this.bP|0,e}),M.k=(function(){return this.rV()}),new F().i(Ky,`scala.collection.immutable.MapKeyValueTupleIterator`,{gn:1,bV:1,s:1,b:1,c:1,t:1});function qy(e){e.bJ<=e.ay&&dm().S.k(),e.dT=1+e.dT|0;for(var t=e.i5.cS(e.dT);t.a.length===0;)e.dT=1+e.dT|0,t=e.i5.cS(e.dT);e.fC=e.et;var n=e.ny,r=e.dT,i=(n+(n>>>31|0)|0)>>1,a=r-i|0,o=a>>31;e.dS=(1+i|0)-((a^o)-o|0)|0;var s=e.dS;switch(s){case 1:e.aV=t;break;case 2:e.aW=t;break;case 3:e.bt=t;break;case 4:e.cu=t;break;case 5:e.es=t;break;case 6:e.i4=t;break;default:throw new Wg(s)}e.et=e.fC+Math.imul(t.a.length,1<<Math.imul(5,e.dS-1|0))|0,e.et>e.d8&&(e.et=e.d8),e.dS>1&&(e.eU=(1<<Math.imul(5,e.dS))-1|0)}function Jy(e){var t=(e.ay-e.bJ|0)+e.d8|0;if(t===e.et&&qy(e),e.dS>1){var n=t-e.fC|0;Yy(e,n,e.eU^n),e.eU=n}e.bJ=e.bJ-e.ay|0;var r=e.aV.a.length,i=e.bJ;e.d7=r<i?r:i,e.ay=0}function Yy(e,t,n){n<1024?e.aV=e.aW.a[31&(t>>>5|0)]:n<32768?(e.aW=e.bt.a[31&(t>>>10|0)],e.aV=e.aW.a[0]):n<1048576?(e.bt=e.cu.a[31&(t>>>15|0)],e.aW=e.bt.a[0],e.aV=e.aW.a[0]):n<33554432?(e.cu=e.es.a[31&(t>>>20|0)],e.bt=e.cu.a[0],e.aW=e.bt.a[0],e.aV=e.aW.a[0]):(e.es=e.i4.a[t>>>25|0],e.cu=e.es.a[0],e.bt=e.cu.a[0],e.aW=e.bt.a[0],e.aV=e.aW.a[0])}function Xy(e,t,n){n<1024?e.aV=e.aW.a[31&(t>>>5|0)]:n<32768?(e.aW=e.bt.a[31&(t>>>10|0)],e.aV=e.aW.a[31&(t>>>5|0)]):n<1048576?(e.bt=e.cu.a[31&(t>>>15|0)],e.aW=e.bt.a[31&(t>>>10|0)],e.aV=e.aW.a[31&(t>>>5|0)]):n<33554432?(e.cu=e.es.a[31&(t>>>20|0)],e.bt=e.cu.a[31&(t>>>15|0)],e.aW=e.bt.a[31&(t>>>10|0)],e.aV=e.aW.a[31&(t>>>5|0)]):(e.es=e.i4.a[t>>>25|0],e.cu=e.es.a[31&(t>>>20|0)],e.bt=e.cu.a[31&(t>>>15|0)],e.aW=e.bt.a[31&(t>>>10|0)],e.aV=e.aW.a[31&(t>>>5|0)])}function Zy(e,t,n){this.i5=null,this.d8=0,this.ny=0,this.aV=null,this.aW=null,this.bt=null,this.cu=null,this.es=null,this.i4=null,this.d7=0,this.ay=0,this.eU=0,this.bJ=0,this.dT=0,this.dS=0,this.fC=0,this.et=0,this.i5=e,this.d8=t,this.ny=n,this.aV=e.g,this.d7=this.aV.a.length,this.ay=0,this.eU=0,this.bJ=this.d8,this.dT=0,this.dS=1,this.fC=0,this.et=this.d7}M=Zy.prototype=new Sh,M.constructor=Zy,M.x=(function(){return this.bJ-this.ay|0}),M.m=(function(){return this.bJ>this.ay}),M.k=(function(){this.ay===this.d7&&Jy(this);var e=this.aV.a[this.ay];return this.ay=1+this.ay|0,e}),M.e9=(function(e){if(e>0){var t=((this.ay-this.bJ|0)+this.d8|0)+e|0,n=this.d8,r=t<n?t:n;if(r===this.d8)this.ay=0,this.bJ=0,this.d7=0;else{for(;r>=this.et;)qy(this);var i=r-this.fC|0;this.dS>1&&(Xy(this,i,this.eU^i),this.eU=i),this.d7=this.aV.a.length,this.ay=31&i,this.bJ=this.ay+(this.d8-r|0)|0,this.d7>this.bJ&&(this.d7=this.bJ)}}return this}),M.bV=(function(e,t,n){for(var r=gl().bW(e),i=this.bJ-this.ay|0,a=n<i?n:i,o=t<0?r:r-t|0,s=o<a?o:a,c=s<0?0:s,l=0,u=e instanceof P;l<c;){this.ay===this.d7&&Jy(this);var d=c-l|0,f=this.aV.a.length-this.ay|0,p=d<f?d:f;if(u){var m=this.aV,h=this.ay,g=t+l|0;m.u(h,e,g,p)}else kl().fV(this.aV,this.ay,e,t+l|0,p);this.ay=this.ay+p|0,l=l+p|0}return c}),new F().i(Zy,`scala.collection.immutable.NewVectorIterator`,{gp:1,s:1,b:1,c:1,t:1,B:1});function Qy(e){return e.i9=0,e.nE=0,e}function $y(){this.i9=0,this.nE=0}M=$y.prototype=new N,M.constructor=$y;function eb(){}eb.prototype=M,M.bb=(function(e){this.i9<e&&this.sf(e)});function tb(){this.ib=null,this.nG=null,nb=this,this.ib=new Yg(this),this.nG=new RC(new P(0))}M=tb.prototype=new N,M.constructor=tb,M.r8=(function(e,t){return this.iV(kl().ox(e,t))}),M.gZ=(function(e){return new Vh(new Y((e=>this.iV(e))),new hb(e.aR()))}),M.iV=(function(e){if(e===null)return null;if(e instanceof P)return new RC(e);if(e instanceof Ja)return new IC(e);if(e instanceof Za)return new PC(e);if(e instanceof Ya)return new LC(e);if(e instanceof Xa)return new FC(e);if(e instanceof Ga)return new NC(e);if(e instanceof Ka)return new MC(e);if(e instanceof qa)return new zC(e);if(e instanceof Wa)return new jC(e);if(dl(e,1))return new BC(e);throw new Wg(e)}),M.iD=(function(e,t){return this.r8(e,t)}),new F().i(tb,`scala.collection.mutable.ArraySeq$`,{gR:1,a:1,bC:1,bA:1,bB:1,bI:1});var nb;function rb(){return nb||=new tb,nb}function ib(e){if(this.e1=0,this.db=null,this.fG=0,this.fF=null,e===null)throw Ig(new Lg);xv(this,e)}M=ib.prototype=new Cv,M.constructor=ib,M.iB=(function(e){return e.eY}),new F().i(ib,`scala.collection.mutable.HashSet$$anon$1`,{gX:1,aU:1,s:1,b:1,c:1,t:1});function ab(e){if(this.e1=0,this.db=null,this.fG=0,this.fF=null,e===null)throw Ig(new Lg);xv(this,e)}M=ab.prototype=new Cv,M.constructor=ab,M.iB=(function(e){return e}),new F().i(ab,`scala.collection.mutable.HashSet$$anon$2`,{gY:1,aU:1,s:1,b:1,c:1,t:1});function ob(e){if(this.e1=0,this.db=null,this.fG=0,this.fF=null,this.ie=0,this.nK=null,e===null)throw Ig(new Lg);this.nK=e,xv(this,e),this.ie=0}M=ob.prototype=new Cv,M.constructor=ob,M.w=(function(){return this.ie}),M.iB=(function(e){return this.ie=nC(this.nK,e.dc),this}),new F().i(ob,`scala.collection.mutable.HashSet$$anon$3`,{gZ:1,aU:1,s:1,b:1,c:1,t:1});function sb(e){this.fI=null,this.fI=e}M=sb.prototype=new N,M.constructor=sb,M.q=(function(e){return Pv(this,e)}),M.w=(function(){return U().Q(this.fI)}),M.z=(function(){return Fv(this,this.fI)}),M.aR=(function(){return this.fI}),M.bx=(function(e){return this.fI.ai.U(e)}),new F().i(sb,`scala.reflect.ClassTag$GenericClassTag`,{hg:1,a:1,P:1,O:1,d:1,D:1});function cb(e){this.cW=null,this.cX=null,this.kP=null,this.kQ=!1,Zm(this,e,$())}M=cb.prototype=new $m,M.constructor=cb,M.f1=(function(){return this.kQ||=(this.kP=this.c(`auto`),!0),this.kP}),new F().i(cb,`com.raquo.laminar.defs.styles.StyleProps$$anon$11`,{dg:1,a6:1,A:1,a4:1,a5:1,b8:1,dr:1});function lb(e){this.cW=null,this.cX=null,this.kR=null,this.kS=!1,Zm(this,e,$())}M=lb.prototype=new $m,M.constructor=lb,M.cf=(function(){return this.kS||=(this.kR=this.c(`inline-block`),!0),this.kR}),new F().i(lb,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{di:1,a6:1,A:1,a4:1,a5:1,b9:1,dp:1});function ub(e){this.cW=null,this.cX=null,this.kZ=null,this.l0=!1,Zm(this,e,$())}M=ub.prototype=new $m,M.constructor=ub,M.s=(function(){return this.l0||=(this.kZ=yd(this),!0),this.kZ}),new F().i(ub,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{dl:1,a6:1,A:1,a4:1,a5:1,aC:1,aD:1});function db(){}M=db.prototype=new wg,M.constructor=db;function fb(){}fb.prototype=M;function pb(e){return e.cc()+`(<not computed>)`}function mb(e){return!!(e&&e.$classData&&e.$classData.n.ad)}function hb(e){this.i9=0,this.nE=0,this.eX=null,this.nF=!1,this.ia=null,this.eX=e,Qy(this),this.nF=e===eo.l(),this.ia=[]}M=hb.prototype=new eb,M.constructor=hb,M.o3=(function(e){var t=this.nF?za(e):e===null?ju().h5(this.eX):e;return this.ia.push(t),this}),M.pL=(function(e){for(var t=e.l();t.m();)this.o3(t.k());return this}),M.sf=(function(e){}),M.ba=(function(){return ju().h4(this.eX===Qa.l()?fl.l():this.eX===Hu.l()||this.eX===Pm.l()?I.l():this.eX,this.ia)}),M.z=(function(){return`ArrayBuilder.generic`}),M.b2=(function(e){return this.o3(e)}),M.b9=(function(e){return this.pL(e)}),new F().i(hb,`scala.collection.mutable.ArrayBuilder$generic`,{gQ:1,gO:1,E:1,G:1,L:1,aa:1,a:1});function gb(e,t){this.hW=null,this.cZ=0,this.bl=0,this.nJ=null,this.nI=0,this.nJ=t,Ey(this,e),this.nI=t.a4()|0}M=gb.prototype=new ky,M.constructor=gb,M.m=(function(){return Iu().oe(this.nI,this.nJ.a4()|0,`mutation occurred during iteration`),this.bl>0}),new F().i(gb,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{gU:1,bE:1,s:1,b:1,c:1,t:1,a:1});function _b(){this.V=null}M=_b.prototype=new N,M.constructor=_b;function vb(){}vb.prototype=M,M.z=(function(){return this.V}),M.q=(function(e){return this===e}),M.w=(function(){return ja(this)});function yb(){}M=yb.prototype=new N,M.constructor=yb;function bb(){}bb.prototype=M;var xb=class e extends ph{constructor(e){super(),this.bn=null,this.bn=e,gf(this,null,null,!0,!0)}g2(){return Ca(this.bn)}bA(){return`JavaScriptException`}by(){return 1}bz(e){return e===0?this.bn:U().rA(e)}cQ(){return new Lv(this)}w(){return G().ga(this,1744042595,!0)}q(t){return this===t||t instanceof e&&H().p(this.bn,t.bn)}};new F().i(xb,`scala.scalajs.js.JavaScriptException`,{cm:1,Q:1,I:1,w:1,a:1,U:1,d:1});function Sb(e,t){e.iX()!==void 0&&e.ik(xo().oQ()),e.oO(t)}function Cb(e){var t=e.iX();if(t===void 0){e.ik(xo().oQ());var n=e.ix();Sb(e,n);var r=n}else var r=t;return r}function wb(e,t,n){Eb(e,new Gv(t),n)}function Tb(e,t,n){Eb(e,new Wv(t),n)}function Eb(e,t,n){Sb(e,t);var r=t.oI(),i=!1;i=!1,e.gV(!1);for(var a=e.fY(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.f8(t),r&&!i&&(i=!0)}for(var c=e.g3(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.s0(t,n),r&&!i&&(i=!0)}e.gV(!0);var d=e.iY();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].a4(),f=1+f|0;d.length=0}r&&!i&&t.dj(new Z((e=>{Yf().cj(e)})),new Z((e=>void 0)))}function Db(e){this.cW=null,this.cX=null,Zm(this,e,$())}M=Db.prototype=new $m,M.constructor=Db,new F().i(Db,`com.raquo.laminar.defs.styles.StyleProps$$anon$25`,{dh:1,a6:1,A:1,a4:1,a5:1,dn:1,dt:1,du:1});function Ob(e){this.cW=null,this.cX=null,this.kT=null,this.kU=!1,this.kV=null,this.kW=!1,Zm(this,e,$())}M=Ob.prototype=new $m,M.constructor=Ob,M.f1=(function(){return this.kU||=(this.kT=this.c(`auto`),!0),this.kT}),M.s=(function(){return this.kW||=(this.kV=yd(this),!0),this.kV}),new F().i(Ob,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{dj:1,a6:1,A:1,a4:1,a5:1,b8:1,aC:1,aD:1});function kb(e,t){typeof console<`u`&&(e.mZ&&console.error?console.error(t):console.log(t))}function Ab(e){this.mZ=!1,this.fn=null,this.mZ=e,new Pg,this.fn=``}M=Ab.prototype=new fb,M.constructor=Ab,M.rF=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.fn=``+this.fn+t,t=``;else{var r=this.fn,i=t;kb(this,``+r+i.substring(0,n)),this.fn=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new F().i(Ab,`java.lang.JSConsoleBasedPrintStream`,{eJ:1,ew:1,ev:1,bk:1,bi:1,bm:1,bj:1,bl:1});function jb(e,t,n){for(var r=n,i=t;;)if(i<=0||r.f())return r;else{var a=i-1|0,o=r.t();i=a,r=o}}function Mb(e,t){if(e.bp(1)<=0)return e;for(var n=e.g6(),r=tC(new sC),i=e.l(),a=!1;i.m();){var o=i.k();r.gM(t.e(o))?n.b2(o):a=!0}return a?n.ba():e}function Nb(){this.V=null}M=Nb.prototype=new vb,M.constructor=Nb;function Pb(){}Pb.prototype=M,M.aR=(function(){return $a.l()}),M.bx=(function(e){return new Wa(e)});function Fb(){this.V=null}M=Fb.prototype=new vb,M.constructor=Fb;function Ib(){}Ib.prototype=M,M.aR=(function(){return to.l()}),M.bx=(function(e){return new Ka(e)});function Lb(){this.V=null}M=Lb.prototype=new vb,M.constructor=Lb;function Rb(){}Rb.prototype=M,M.aR=(function(){return eo.l()}),M.bx=(function(e){return new Ga(e)});function zb(){this.V=null}M=zb.prototype=new vb,M.constructor=zb;function Bb(){}Bb.prototype=M,M.aR=(function(){return oo.l()}),M.bx=(function(e){return new Za(e)});function Vb(){this.V=null}M=Vb.prototype=new vb,M.constructor=Vb;function Hb(){}Hb.prototype=M,M.aR=(function(){return ao.l()}),M.bx=(function(e){return new Xa(e)});function Ub(){this.V=null}M=Ub.prototype=new vb,M.constructor=Ub;function Wb(){}Wb.prototype=M,M.aR=(function(){return ro.l()}),M.bx=(function(e){return new Ja(e)});function Gb(){this.V=null}M=Gb.prototype=new vb,M.constructor=Gb;function Kb(){}Kb.prototype=M,M.aR=(function(){return io.l()}),M.bx=(function(e){return new Ya(e)});function qb(){this.de=null}M=qb.prototype=new bb,M.constructor=qb;function Jb(){}Jb.prototype=M,M.z=(function(){return this.de}),M.q=(function(e){return this===e}),M.w=(function(){return ja(this)});function Yb(){this.V=null}M=Yb.prototype=new vb,M.constructor=Yb;function Xb(){}Xb.prototype=M,M.aR=(function(){return no.l()}),M.bx=(function(e){return new qa(e)});function Zb(){this.V=null}M=Zb.prototype=new vb,M.constructor=Zb;function Qb(){}Qb.prototype=M,M.aR=(function(){return Qa.l()}),M.bx=(function(e){return new(fl.r()).C(e)});function $b(e){this.cW=null,this.cX=null,this.l1=null,this.l2=!1,Zm(this,e,$())}M=$b.prototype=new $m,M.constructor=$b,M.s=(function(){return this.l2||=(this.l1=yd(this),!0),this.l1}),new F().i($b,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{dm:1,a6:1,A:1,a4:1,a5:1,aC:1,aD:1,dq:1,b9:1});function ex(){}M=ex.prototype=new wy,M.constructor=ex;function tx(){}tx.prototype=M,M.bw=(function(){return _m()}),M.z=(function(){return pb(this)}),M.bB=(function(){return`View`});function nx(e,t){if(e===t)return!0;if(rx(t)){if(e.aS()===t.aS())try{return e.sw(t)}catch(e){throw e}return!1}return!1}function rx(e){return!!(e&&e.$classData&&e.$classData.n.aM)}function ix(){this.de=null,this.de=`Any`,$()}M=ix.prototype=new Jb,M.constructor=ix,M.aR=(function(){return I.l()}),M.bx=(function(e){return new P(e)}),new F().i(ix,`scala.reflect.ManifestFactory$AnyManifest$`,{hh:1,ay:1,ax:1,a:1,P:1,O:1,d:1,D:1,T:1});var ax;function ox(){return ax||=new ix,ax}function sx(){this.V=null,this.V=`Boolean`}M=sx.prototype=new Pb,M.constructor=sx,new F().i(sx,`scala.reflect.ManifestFactory$BooleanManifest$`,{hj:1,hi:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var cx;function lx(){return cx||=new sx,cx}function ux(){this.V=null,this.V=`Byte`}M=ux.prototype=new Ib,M.constructor=ux,new F().i(ux,`scala.reflect.ManifestFactory$ByteManifest$`,{hl:1,hk:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var dx;function fx(){return dx||=new ux,dx}function px(){this.V=null,this.V=`Char`}M=px.prototype=new Rb,M.constructor=px,new F().i(px,`scala.reflect.ManifestFactory$CharManifest$`,{hn:1,hm:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var mx;function hx(){return mx||=new px,mx}function gx(){this.V=null,this.V=`Double`}M=gx.prototype=new Bb,M.constructor=gx,new F().i(gx,`scala.reflect.ManifestFactory$DoubleManifest$`,{hp:1,ho:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var _x;function vx(){return _x||=new gx,_x}function yx(){this.V=null,this.V=`Float`}M=yx.prototype=new Hb,M.constructor=yx,new F().i(yx,`scala.reflect.ManifestFactory$FloatManifest$`,{hr:1,hq:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var bx;function xx(){return bx||=new yx,bx}function Sx(){this.V=null,this.V=`Int`}M=Sx.prototype=new Wb,M.constructor=Sx,new F().i(Sx,`scala.reflect.ManifestFactory$IntManifest$`,{ht:1,hs:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var Cx;function wx(){return Cx||=new Sx,Cx}function Tx(){this.V=null,this.V=`Long`}M=Tx.prototype=new Kb,M.constructor=Tx,new F().i(Tx,`scala.reflect.ManifestFactory$LongManifest$`,{hv:1,hu:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var Ex;function Dx(){return Ex||=new Tx,Ex}function Ox(){this.de=null,this.de=`Nothing`,$()}M=Ox.prototype=new Jb,M.constructor=Ox,M.aR=(function(){return Pm.l()}),M.bx=(function(e){return new(Pm.r()).C(e)}),new F().i(Ox,`scala.reflect.ManifestFactory$NothingManifest$`,{hw:1,ay:1,ax:1,a:1,P:1,O:1,d:1,D:1,T:1});var kx;function Ax(){return kx||=new Ox,kx}function jx(){this.de=null,this.de=`Null`,$()}M=jx.prototype=new Jb,M.constructor=jx,M.aR=(function(){return Hu.l()}),M.bx=(function(e){return new(Hu.r()).C(e)}),new F().i(jx,`scala.reflect.ManifestFactory$NullManifest$`,{hx:1,ay:1,ax:1,a:1,P:1,O:1,d:1,D:1,T:1});var Mx;function Nx(){return Mx||=new jx,Mx}function Px(){this.de=null,this.de=`Object`,$()}M=Px.prototype=new Jb,M.constructor=Px,M.aR=(function(){return I.l()}),M.bx=(function(e){return new P(e)}),new F().i(Px,`scala.reflect.ManifestFactory$ObjectManifest$`,{hy:1,ay:1,ax:1,a:1,P:1,O:1,d:1,D:1,T:1});var Fx;function Ix(){return Fx||=new Px,Fx}function Lx(){this.V=null,this.V=`Short`}M=Lx.prototype=new Xb,M.constructor=Lx,new F().i(Lx,`scala.reflect.ManifestFactory$ShortManifest$`,{hA:1,hz:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var Rx;function zx(){return Rx||=new Lx,Rx}function Bx(){this.V=null,this.V=`Unit`}M=Bx.prototype=new Qb,M.constructor=Bx,new F().i(Bx,`scala.reflect.ManifestFactory$UnitManifest$`,{hC:1,hB:1,a3:1,a:1,P:1,O:1,d:1,D:1,T:1});var Vx;function Hx(){return Vx||=new Bx,Vx}function Ux(e,t){this.jK=null,this.jJ=!1,this.jL=null,this.hs=0,this.jH=null,this.jI=null,this.jO=!1,this.ht=null,this.jM=null,this.jN=0,this.jM=t,this.jK=void 0,Xf(this),this.hs=0,Xh(this),this.ht=void 0,this.jN=1,Sb(this,e)}M=Ux.prototype=new N,M.constructor=Ux,M.g5=(function(){return this.jK}),M.z=(function(){return fo(this)}),M.iR=(function(){return this.jJ}),M.iY=(function(){return this.jL}),M.gV=(function(e){this.jJ=e}),M.iZ=(function(e){this.jL=e}),M.oW=(function(){}),M.q=(function(e){return this===e}),M.w=(function(){return ja(this)}),M.ij=(function(){return this.hs}),M.ik=(function(e){this.hs=e}),M.h9=(function(){return this}),M.oV=(function(){Xv(this)}),M.fY=(function(){return this.jH}),M.g3=(function(){return this.jI}),M.pl=(function(){return this.jO}),M.hd=(function(e){this.jO=e}),M.oh=(function(e){this.jH=e}),M.oi=(function(e){this.jI=e}),M.iX=(function(){return this.ht}),M.oO=(function(e){this.ht=e}),M.ha=(function(){return Cb(this)}),M.pf=(function(){return this.jN}),M.ix=(function(){return Cb(this)}),M.oY=(function(){}),M.fX=(function(){return this.jM.a4()+`.signal`}),new F().i(Ux,`com.raquo.airstream.state.VarSignal`,{cQ:1,aA:1,ag:1,b0:1,b2:1,aB:1,b3:1,b4:1,b5:1,cM:1});function Wx(e,t){return e===t?!0:Gx(t)&&t.gR(e)?e.f9(t):!1}function Gx(e){return!!(e&&e.$classData&&e.$classData.n.m)}function Kx(e){this.no=null,this.no=e}M=Kx.prototype=new tx,M.constructor=Kx,M.l=(function(){return this.no.a4()}),new F().i(Kx,`scala.collection.View$$anon$1`,{fQ:1,as:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,ad:1});function qx(e,t){this.gy=null,this.np=null,this.gy=e,this.np=t}M=qx.prototype=new tx,M.constructor=qx,M.l=(function(){var e=this.gy.l();return new e_(this.np,e)}),M.x=(function(){return this.gy.x()===0?0:-1}),M.f=(function(){return this.gy.f()}),new F().i(qx,`scala.collection.View$DistinctBy`,{fR:1,as:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,ad:1});function Jx(e){e.hl=e.dq!==null,e.gh=-1}function Yx(e){if(ng(e.dq),e.hl){var t=e.dq.ij();t!==e.gh&&Xx(e,e.ix(),t)}}function Xx(e,t,n){Sb(e,t),e.gh=n}function Zx(e,t,n){e.hl&&(e.gh=e.dq.ij())}function Qx(e){$h(e.dq,e,!1),Xv(e)}function $x(e){$f(e.dq,e)}function eS(){}M=eS.prototype=new wy,M.constructor=eS;function tS(){}tS.prototype=M,M.sw=(function(e){return this.f4(e)}),M.q=(function(e){return nx(this,e)}),M.bB=(function(){return`Set`}),M.z=(function(){return Xg(this)}),M.e=(function(e){return this.cd(e)});function nS(e,t){if(e===t)return!0;if(rS(t)){if(e.aS()===t.aS())try{return e.f4(new Y((e=>(t=>H().p(e.dl(t.be,new Am((()=>Th().nl.a4()))),t.b5)))(t)))}catch(e){throw e}return!1}return!1}function rS(e){return!!(e&&e.$classData&&e.$classData.n.a7)}function iS(e,t,n){this.ju=null,this.jt=!1,this.jv=null,this.hj=0,this.jr=null,this.js=null,this.jx=!1,this.hk=null,this.hl=!1,this.gh=0,this.dq=null,this.hm=null,this.hn=null,this.jw=0,this.dq=e,this.hm=t,this.hn=n,this.ju=void 0,Xf(this),this.hj=0,Xh(this),this.hk=void 0,Jx(this),this.jw=1+e.pf()|0}M=iS.prototype=new N,M.constructor=iS,M.g5=(function(){return this.ju}),M.fX=(function(){return uo(this)}),M.z=(function(){return fo(this)}),M.iR=(function(){return this.jt}),M.iY=(function(){return this.jv}),M.gV=(function(e){this.jt=e}),M.iZ=(function(e){this.jv=e}),M.q=(function(e){return this===e}),M.w=(function(){return ja(this)}),M.ij=(function(){return this.hj}),M.ik=(function(e){this.hj=e}),M.h9=(function(){return this}),M.fY=(function(){return this.jr}),M.g3=(function(){return this.js}),M.pl=(function(){return this.jx}),M.hd=(function(e){this.jx=e}),M.oh=(function(e){this.jr=e}),M.oi=(function(e){this.js=e}),M.iX=(function(){return this.hk}),M.oO=(function(e){this.hk=e}),M.ha=(function(){return Cb(this)}),M.oY=(function(){Yx(this)}),M.oV=(function(){Qx(this)}),M.oW=(function(){$x(this)}),M.pf=(function(){return this.jw}),M.s0=(function(e,t){Zx(this,e,t),e.dj(new Z((e=>{var n=this.hn;if(n.f())Tb(this,e,t);else{var r=n.N();try{var i=new Gv(r.di(e,new Z((e=>null))))}catch(e){var a=e instanceof _f?e:new xb(e);matchResult1:{var i,o=fd().hb(a);if(!o.f()){var i=new Wv(o.N());break matchResult1}throw a instanceof xb?a.bn:a}}i.dj(new Z((e=>(n=>{Tb(this,new Kv(n,e),t)}))(e)),new Z((e=>(n=>{n===null?Tb(this,e,t):n.f()||wb(this,n.N(),t)}))(e)))}})),new Z((n=>{Eb(this,e.iW(this.hm),t)})))}),M.ix=(function(){var e=this.dq.ha().iW(this.hm);return e.dj(new Z((t=>{var n=this.hn;if(n.f())return e;var r=n.N();try{var i=new Gv(r.di(t,new Z((e=>null))))}catch(e){var a=e instanceof _f?e:new xb(e);matchResult1:{var i,o=fd().hb(a);if(!o.f()){var i=new Wv(o.N());break matchResult1}throw a instanceof xb?a.bn:a}}return i.dj(new Z((e=>(t=>new Wv(new Kv(t,e))))(t)),new Z((t=>{if(t===null)return e;var n=t.f()?xy():new Sy(new Gv(t.N()));return n.f()?e:n.N()})))})),new Z((t=>e)))}),new F().i(iS,`com.raquo.airstream.misc.MapSignal`,{cD:1,aA:1,ag:1,b0:1,b2:1,aB:1,b3:1,b4:1,b5:1,b1:1,cr:1,cs:1});function aS(){}M=aS.prototype=new wy,M.constructor=aS;function oS(){}oS.prototype=M,M.di=(function(e,t){return Tf(this,e,t)}),M.cN=(function(e){return Ah(this,e)}),M.iQ=(function(e){return jh(this,e)}),M.bp=(function(e){return am(this,e)}),M.f=(function(){return Mh(this)}),M.f9=(function(e){return Nh(this,e)}),M.gR=(function(e){return!0}),M.q=(function(e){return Wx(this,e)}),M.w=(function(){return G().p7(this)}),M.z=(function(){return Xg(this)}),M.cy=(function(e){return this.iQ(e|0)});function sS(){}M=sS.prototype=new tx,M.constructor=sS;function cS(){}cS.prototype=M,M.cN=(function(e){return Ah(this,e)}),M.bp=(function(e){return am(this,e)}),M.f=(function(){return Mh(this)}),M.bB=(function(){return`SeqView`});function lS(e){return!!(e&&e.$classData&&e.$classData.n.o)}function uS(e){return!!(e&&e.$classData&&e.$classData.n.at)}function dS(){}M=dS.prototype=new wy,M.constructor=dS;function fS(){}fS.prototype=M,M.di=(function(e,t){return jy(this,e,t)}),M.ez=(function(e){My(this,e)}),M.cy=(function(e){return this.cd(e)}),M.e4=(function(e,t,n,r){return Ny(this,e,t,n,r)}),M.g0=(function(e){return this.oM().aC(e)}),M.q=(function(e){return nS(this,e)}),M.w=(function(){return G().rO(this)}),M.bB=(function(){return`Map`}),M.z=(function(){return Xg(this)});function pS(e,t){return e.em=t,e}function mS(){this.em=null}M=mS.prototype=new cS,M.constructor=mS;function hS(){}hS.prototype=M,M.v=(function(e){return this.em.v(e)}),M.r=(function(){return this.em.r()}),M.l=(function(){return this.em.l()}),M.x=(function(){return this.em.x()}),M.f=(function(){return this.em.f()}),new F().i(mS,`scala.collection.SeqView$Id`,{bH:1,aI:1,as:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,ad:1,l:1,aL:1});function gS(){this.kB=null,this.kC=!1,this.k4=null,this.k5=!1,this.kd=null,this.ke=!1,this.k6=null,this.k7=!1,this.kJ=null,this.kK=!1,this.k9=null,this.ka=!1,this.kh=null,this.ki=!1,this.kt=null,this.ku=!1,this.kr=null,this.ks=!1,this.kv=null,this.kw=!1,this.jW=null,this.jX=!1,this.jY=null,this.jZ=!1,this.k0=null,this.k3=!1,this.k1=null,this.k2=!1,this.kb=null,this.kc=!1,this.kf=null,this.kg=!1,this.kj=null,this.km=!1,this.kk=null,this.kl=!1,this.kn=null,this.ko=!1,this.kp=null,this.kq=!1,this.kx=null,this.ky=!1,this.kz=null,this.kA=!1,this.kH=null,this.kI=!1,this.kL=null,this.kM=!1,this.k8=null,this.fi=null,this.kD=null,this.kE=!1,this.jT=null,this.aw=null,this.po=null,this.jU=null,this.jV=!1,this.kF=null,this.kG=!1,ws(this),ys(this),_s(this),vs(this)}M=gS.prototype=new N,M.constructor=gS,M.ck=(function(){return this.kC||=(this.kB=Rd(new zd,`span`,!1),!0),this.kB}),M.fU=(function(){return this.k5||=(this.k4=Rd(new zd,`br`,!0),!0),this.k4}),M.M=(function(){return this.ke||=(this.kd=Rd(new zd,`div`,!1),!0),this.kd}),M.of=(function(){return this.k7||=(this.k6=new Od(`checked`,Cs().hw),!0),this.k6}),M.eg=(function(){return this.kK||=(this.kJ=new Od(`value`,Cs().bk),!0),this.kJ}),M.qB=(function(){return this.ka||=(this.k9=new Od(`defaultChecked`,Cs().hw),!0),this.k9}),M.rt=(function(){return this.ki||=(this.kh=new Od(`id`,Cs().bk),!0),this.kh}),M.rZ=(function(){return this.ku||=(this.kt=new Cd(`click`),!0),this.kt}),M.rY=(function(){return this.ks||=(this.kr=new Cd(`change`),!0),this.kr}),M.a8=(function(){return this.kw||=(this.kv=new Cd(`input`),!0),this.kv}),M.q2=(function(){return this.jX||=(this.jW=Zm(new Qm,`animation`,$()),!0),this.jW}),M.cb=(function(){return this.jZ||=(this.jY=new Db(`background`),!0),this.jY}),M.bi=(function(){return this.k3||=(this.k0=Zm(new Qm,`border`,$()),!0),this.k0}),M.bU=(function(){return this.k2||=(this.k1=new ub(`border-radius`),!0),this.k1}),M.ce=(function(){return this.kc||=(this.kb=new lb(`display`),!0),this.kb}),M.X=(function(){return this.kg||=(this.kf=new Ob(`height`),!0),this.kf}),M.ci=(function(){return this.km||=(this.kj=new Ob(`margin`),!0),this.kj}),M.oN=(function(){return this.kl||=(this.kk=new Ob(`margin-top`),!0),this.kk}),M.rP=(function(){return this.ko||=(this.kn=new $b(`max-height`),!0),this.kn}),M.g4=(function(){return this.kq||=(this.kp=new $b(`max-width`),!0),this.kp}),M.g7=(function(){return this.ky||=(this.kx=new cb(`overflow`),!0),this.kx}),M.h1=(function(){return this.kA||=(this.kz=new Qv(`position`),!0),this.kz}),M.sE=(function(){return this.kI||=(this.kH=Zm(new Qm,`transform`,$()),!0),this.kH}),M.a6=(function(){return this.kM||=(this.kL=new Ob(`width`),!0),this.kL}),M.su=(function(){return this.kE||=(this.kD=Td(new Ed,`style`,Cs().bk),!0),this.kD}),M.pJ=(function(){return this.jV||=(this.jU=new Sd(this),!0),this.jU}),M.sx=(function(){return this.kG||=(this.kF=new Jm(this),!0),this.kF}),new F().i(gS,`com.raquo.laminar.api.package$$anon$1`,{d4:1,dv:1,d9:1,de:1,dd:1,df:1,db:1,d2:1,cY:1,d1:1,b7:1,ba:1,b6:1,cZ:1});function _S(e){return!!(e&&e.$classData&&e.$classData.n.a8)}function vS(){}M=vS.prototype=new cS,M.constructor=vS;function yS(){}yS.prototype=M,M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.bB=(function(){return`IndexedSeqView`});function bS(e){this.em=null,pS(this,e)}M=bS.prototype=new hS,M.constructor=bS,M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.l=(function(){return Ey(new Oy,this)}),M.bB=(function(){return`IndexedSeqView`}),new F().i(bS,`scala.collection.IndexedSeqView$Id`,{fy:1,bH:1,aI:1,as:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,ad:1,l:1,aL:1,p:1,bD:1});function xS(){}M=xS.prototype=new oS,M.constructor=xS;function SS(){}SS.prototype=M;function CS(e,t){this.i8=null,this.nD=null,this.i8=e,this.nD=t}M=CS.prototype=new yS,M.constructor=CS,M.v=(function(e){return this.i8.v(e)}),M.r=(function(){return this.i8.b8}),M.cc=(function(){return`ArrayBufferView`}),M.l=(function(){return new gb(this,this.nD)}),new F().i(CS,`scala.collection.mutable.ArrayBufferView`,{gN:1,fr:1,aI:1,as:1,i:1,b:1,c:1,h:1,g:1,f:1,a:1,ad:1,l:1,aL:1,p:1,bD:1});function wS(){}M=wS.prototype=new fS,M.constructor=wS;function TS(){}TS.prototype=M,M.bw=(function(){return Lh()}),M.oM=(function(){return Tm()});function ES(e,t){return!OS(t)||e.r()===t.r()}function DS(e,t){if(OS(t)){if(e===t)return!0;var n=e.r(),r=n===t.r();if(r){var i=0,a=e.gO(),o=t.gO(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?n>>>0>u>>>0:c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().p(e.v(i),t.v(i)),i=1+i|0;if(i<n&&r)for(var p=e.l().e9(i),m=t.l().e9(i);r&&p.m();)r=H().p(p.k(),m.k())}return r}return Nh(e,t)}function OS(e){return!!(e&&e.$classData&&e.$classData.n.y)}function kS(e,t){return e.cn=t,e}function AS(){this.cn=null}M=AS.prototype=new SS,M.constructor=AS;function jS(){}jS.prototype=M;function MS(){}M=MS.prototype=new oS,M.constructor=MS;function NS(){}NS.prototype=M;function PS(){}M=PS.prototype=new TS,M.constructor=PS,M.aS=(function(){return 0}),M.x=(function(){return 0}),M.f=(function(){return!0}),M.iq=(function(e){throw new Vg(`key not found: `+e)}),M.cd=(function(e){return!1}),M.dl=(function(e,t){return t.a4()}),M.l=(function(){return dm().S}),M.e=(function(e){this.iq(e)}),M.ef=(function(e,t){return new LS(e,t)}),new F().i(PS,`scala.collection.immutable.Map$EmptyMap$`,{ge:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,a:1});var FS;function IS(){return FS||=new PS,FS}function LS(e,t){this.cJ=null,this.eq=null,this.cJ=e,this.eq=t}M=LS.prototype=new TS,M.constructor=LS,M.aS=(function(){return 1}),M.x=(function(){return 1}),M.f=(function(){return!1}),M.e=(function(e){if(H().p(e,this.cJ))return this.eq;throw new Vg(`key not found: `+e)}),M.cd=(function(e){return H().p(e,this.cJ)}),M.dl=(function(e,t){return H().p(e,this.cJ)?this.eq:t.a4()}),M.l=(function(){return new $g(new Jg(this.cJ,this.eq))}),M.eC=(function(e,t){return H().p(e,this.cJ)?new LS(this.cJ,t):new RS(this.cJ,this.eq,e,t)}),M.f4=(function(e){return!!e.e(new Jg(this.cJ,this.eq))}),M.w=(function(){var e=0,t=0,n=1,r=G().cE(this.cJ,this.eq);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e3,r=G().C(r,e),r=G().C(r,t),r=G().dp(r,n),G().aJ(r,1)}),M.ef=(function(e,t){return this.eC(e,t)}),new F().i(LS,`scala.collection.immutable.Map$Map1`,{bZ:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,k:1,a:1});function RS(e,t,n,r){this.co=null,this.dM=null,this.cp=null,this.dN=null,this.co=e,this.dM=t,this.cp=n,this.dN=r}M=RS.prototype=new TS,M.constructor=RS,M.aS=(function(){return 2}),M.x=(function(){return 2}),M.f=(function(){return!1}),M.e=(function(e){if(H().p(e,this.co))return this.dM;if(H().p(e,this.cp))return this.dN;throw new Vg(`key not found: `+e)}),M.cd=(function(e){return H().p(e,this.co)||H().p(e,this.cp)}),M.dl=(function(e,t){return H().p(e,this.co)?this.dM:H().p(e,this.cp)?this.dN:t.a4()}),M.l=(function(){return new Hy(this)}),M.eC=(function(e,t){return H().p(e,this.co)?new RS(this.co,t,this.cp,this.dN):H().p(e,this.cp)?new RS(this.co,this.dM,this.cp,t):new zS(this.co,this.dM,this.cp,this.dN,e,t)}),M.f4=(function(e){return!!e.e(new Jg(this.co,this.dM))&&!!e.e(new Jg(this.cp,this.dN))}),M.w=(function(){var e=0,t=0,n=1,r=G().cE(this.co,this.dM);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.cp,this.dN),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e3,r=G().C(r,e),r=G().C(r,t),r=G().dp(r,n),G().aJ(r,2)}),M.ef=(function(e,t){return this.eC(e,t)}),new F().i(RS,`scala.collection.immutable.Map$Map2`,{c0:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,k:1,a:1});function zS(e,t,n,r,i,a){this.c2=null,this.d3=null,this.c3=null,this.d4=null,this.c4=null,this.d5=null,this.c2=e,this.d3=t,this.c3=n,this.d4=r,this.c4=i,this.d5=a}M=zS.prototype=new TS,M.constructor=zS,M.aS=(function(){return 3}),M.x=(function(){return 3}),M.f=(function(){return!1}),M.e=(function(e){if(H().p(e,this.c2))return this.d3;if(H().p(e,this.c3))return this.d4;if(H().p(e,this.c4))return this.d5;throw new Vg(`key not found: `+e)}),M.cd=(function(e){return H().p(e,this.c2)||H().p(e,this.c3)||H().p(e,this.c4)}),M.dl=(function(e,t){return H().p(e,this.c2)?this.d3:H().p(e,this.c3)?this.d4:H().p(e,this.c4)?this.d5:t.a4()}),M.l=(function(){return new Uy(this)}),M.eC=(function(e,t){return H().p(e,this.c2)?new zS(this.c2,t,this.c3,this.d4,this.c4,this.d5):H().p(e,this.c3)?new zS(this.c2,this.d3,this.c3,t,this.c4,this.d5):H().p(e,this.c4)?new zS(this.c2,this.d3,this.c3,this.d4,this.c4,t):new BS(this.c2,this.d3,this.c3,this.d4,this.c4,this.d5,e,t)}),M.f4=(function(e){return!!e.e(new Jg(this.c2,this.d3))&&!!e.e(new Jg(this.c3,this.d4))&&!!e.e(new Jg(this.c4,this.d5))}),M.w=(function(){var e=0,t=0,n=1,r=G().cE(this.c2,this.d3);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.c3,this.d4),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.c4,this.d5),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e3,r=G().C(r,e),r=G().C(r,t),r=G().dp(r,n),G().aJ(r,3)}),M.ef=(function(e,t){return this.eC(e,t)}),new F().i(zS,`scala.collection.immutable.Map$Map3`,{c1:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,k:1,a:1});function BS(e,t,n,r,i,a,o,s){this.bF=null,this.cq=null,this.bG=null,this.cr=null,this.bH=null,this.cs=null,this.bI=null,this.ct=null,this.bF=e,this.cq=t,this.bG=n,this.cr=r,this.bH=i,this.cs=a,this.bI=o,this.ct=s}M=BS.prototype=new TS,M.constructor=BS,M.aS=(function(){return 4}),M.x=(function(){return 4}),M.f=(function(){return!1}),M.e=(function(e){if(H().p(e,this.bF))return this.cq;if(H().p(e,this.bG))return this.cr;if(H().p(e,this.bH))return this.cs;if(H().p(e,this.bI))return this.ct;throw new Vg(`key not found: `+e)}),M.cd=(function(e){return H().p(e,this.bF)||H().p(e,this.bG)||H().p(e,this.bH)||H().p(e,this.bI)}),M.dl=(function(e,t){return H().p(e,this.bF)?this.cq:H().p(e,this.bG)?this.cr:H().p(e,this.bH)?this.cs:H().p(e,this.bI)?this.ct:t.a4()}),M.l=(function(){return new Wy(this)}),M.eC=(function(e,t){return H().p(e,this.bF)?new BS(this.bF,t,this.bG,this.cr,this.bH,this.cs,this.bI,this.ct):H().p(e,this.bG)?new BS(this.bF,this.cq,this.bG,t,this.bH,this.cs,this.bI,this.ct):H().p(e,this.bH)?new BS(this.bF,this.cq,this.bG,this.cr,this.bH,t,this.bI,this.ct):H().p(e,this.bI)?new BS(this.bF,this.cq,this.bG,this.cr,this.bH,this.cs,this.bI,t):Sm().gA.fc(this.bF,this.cq).fc(this.bG,this.cr).fc(this.bH,this.cs).fc(this.bI,this.ct).fc(e,t)}),M.f4=(function(e){return!!e.e(new Jg(this.bF,this.cq))&&!!e.e(new Jg(this.bG,this.cr))&&!!e.e(new Jg(this.bH,this.cs))&&!!e.e(new Jg(this.bI,this.ct))}),M.qk=(function(e){return e.ex(this.bF,this.cq).ex(this.bG,this.cr).ex(this.bH,this.cs).ex(this.bI,this.ct)}),M.w=(function(){var e=0,t=0,n=1,r=G().cE(this.bF,this.cq);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.bG,this.cr),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.bH,this.cs),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cE(this.bI,this.ct),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e3,r=G().C(r,e),r=G().C(r,t),r=G().dp(r,n),G().aJ(r,4)}),M.ef=(function(e,t){return this.eC(e,t)}),new F().i(BS,`scala.collection.immutable.Map$Map4`,{c2:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,k:1,a:1});function VS(){}M=VS.prototype=new tS,M.constructor=VS;function HS(){}HS.prototype=M,M.ba=(function(){return this});function Q(e){this.gG=null,this.gG=e}M=Q.prototype=new N,M.constructor=Q,M.cN=(function(e){return Mb(this,e)}),M.cz=(function(e){return Ph(this,e)}),M.gR=(function(e){return ES(this,e)}),M.f9=(function(e){return DS(this,e)}),M.gO=(function(){return du().ns}),M.l=(function(){return Ey(new Oy,new bS(this))}),M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.q=(function(e){return Wx(this,e)}),M.w=(function(){return G().p7(this)}),M.z=(function(){return Xg(this)}),M.f=(function(){return Mh(this)}),M.di=(function(e,t){return Tf(this,e,t)}),M.g6=(function(){return Uv().b4()}),M.bL=(function(e){Yl(this,e)}),M.bV=(function(e,t,n){return Ql(this,e,t,n)}),M.e4=(function(e,t,n,r){return eu(this,e,t,n,r)}),M.ec=(function(){return Uv()}),M.r=(function(){return this.gG.length|0}),M.v=(function(e){return this.gG[e]}),M.cc=(function(){return`WrappedVarArgs`}),M.fZ=(function(e){return Uv().iH(e)}),M.cy=(function(e){return jh(this,e|0)}),M.e=(function(e){return this.v(e|0)}),M.bw=(function(){return Uv()}),new F().i(Q,`scala.scalajs.runtime.WrappedVarArgs`,{cn:1,y:1,b:1,c:1,h:1,g:1,f:1,r:1,e:1,j:1,l:1,d:1,m:1,v:1,u:1,p:1,o:1,C:1,z:1,k:1,q:1,a:1});function US(e){this.bs=null,this.bs=e}M=US.prototype=new TS,M.constructor=US,M.oM=(function(){return Sm()}),M.x=(function(){return this.bs.aU}),M.aS=(function(){return this.bs.aU}),M.f=(function(){return this.bs.aU===0}),M.l=(function(){return this.f()?dm().S:new Ky(this.bs)}),M.cd=(function(e){var t=U().Q(e),n=Jl().cx(t);return this.bs.iw(e,t,n,0)}),M.e=(function(e){var t=U().Q(e),n=Jl().cx(t);return this.bs.ip(e,t,n,0)}),M.dl=(function(e,t){var n=U().Q(e),r=Jl().cx(n);return this.bs.iJ(e,n,r,0,t)}),M.fc=(function(e,t){var n=U().Q(e),r=this.bs.pi(e,t,n,Jl().cx(n),0,!0);return r===this.bs?this:new US(r)}),M.ez=(function(e){this.bs.ez(e)}),M.q=(function(e){if(e instanceof US){if(this===e)return!0;var t=this.bs,n=e.bs;return t===null?n===null:t.q(n)}return nS(this,e)}),M.w=(function(){if(this.f())return G().ii;var e=new Gy(this.bs);return G().jf(e,G().e3)}),M.cc=(function(){return`HashMap`}),M.ef=(function(e,t){return this.fc(e,t)}),new F().i(US,`scala.collection.immutable.HashMap`,{bX:1,an:1,aj:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,al:1,ak:1,d:1,a7:1,r:1,ao:1,a8:1,k:1,fM:1,gw:1,a:1,V:1});function WS(e,t){return kS(e,t===mu()?null:t),e.bf=t===mu()?null:Of(),e}function GS(e,t,n){return WS(e,mu()),e.bf=t,e.cn=n,e}function KS(e){for(;e.bf===Of();){var t=e.cn;if(t instanceof hf&&XS(e),Nl(t)){Bh().p3();var n=al().n2;if(e.cn===t){e.cn=n;var r=!0}else var r=!1;if(r){var i=null;try{var a=qS(t.a4())}catch(e){i=e instanceof _f?e:new xb(e);var a=null}if(i===null){a===null&&Gu().cB();var o=a.cn}else var o=t;if(Bh().p3(),e.cn,e.cn=o,i===null&&(a===null&&Gu().cB(),e.bf=a.bf),i!==null){var s=i;s===null&&Gu().cB();var c=s;throw c instanceof xb?c.bn:c}continue}}}}function qS(e){for(;;)if(e.bf!==Of())return e.cn===null?Bh().T:e;else KS(e)}function JS(e,t){return Bh(),WS(new ZS,new Am((()=>qS(e)===Bh().T?Bh().T:(Bh(),GS(new ZS,t.e(e.B()),JS(e.bc(),t))))))}function YS(e,t,n,r,i){if(t.o=``+t.o+n,e.bf===Of())t.o+=`<not computed>`;else if(qS(e)!==Bh().T){var a=e.B();t.o=``+t.o+a;var o=e,s=e.bc();if(o!==s){o=s;var c=s;if(c.bf!==Of()&&qS(c)!==Bh().T)for(s=s.bc();;){if(o!==s)var l=s,u=l.bf!==Of()&&qS(l)!==Bh().T;else var u=!1;if(u){var d=o;t.o=``+t.o+r;var f=d.B();t.o=``+t.o+f,o=o.bc(),s=s.bc();var p=s;p.bf!==Of()&&qS(p)!==Bh().T&&(s=s.bc())}else break}}var m=s;if(m.bf===Of()||qS(m)===Bh().T){for(;o!==s;){var h=o;t.o=``+t.o+r;var g=h.B();t.o=``+t.o+g,o=o.bc()}o.bf===Of()&&(t.o=``+t.o+r,t.o+=`<not computed>`)}else{if(o!==e){for(var _=e;_!==s;)_=_.bc(),s=s.bc();for(;;){var v=o.bc();if(v!==s){var y=o;t.o=``+t.o+r;var b=y.B();t.o=``+t.o+b}if(o=v,o===s)break}}t.o=``+t.o+r,t.o+=`<cycle>`}}return t.o=``+t.o+i,t}function XS(e){throw fh(new ph,`LazyList evaluation depends on its own result (self-reference); see docs for more info`)}function ZS(){this.cn=null,this.bf=null}M=ZS.prototype=new jS,M.constructor=ZS,M.r=(function(){return c_(this)}),M.bp=(function(e){return l_(this,e)}),M.iQ=(function(e){return u_(this,e)}),M.v=(function(e){return d_(this,e)}),M.f9=(function(e){return f_(this,e)}),M.bB=(function(){return`LinearSeq`}),M.f=(function(){return qS(this)===Bh().T}),M.x=(function(){return this.bf!==Of()&&qS(this)===Bh().T?0:-1}),M.B=(function(){if(qS(this)===Bh().T)throw new Vg(`head of empty lazy list`);return this.bf}),M.bc=(function(){if(qS(this)===Bh().T)throw new zg(`tail of empty lazy list`);return this.cn}),M.r6=(function(){var e=this,t=this;for(qS(e)!==Bh().T&&(e=e.bc());t!==e;){if(qS(e)===Bh().T||(e=e.bc(),qS(e)===Bh().T)||(e=e.bc(),e===t))return this;t=t.bc()}return this}),M.l=(function(){return this.bf!==Of()&&qS(this)===Bh().T?dm().S:new H_(this)}),M.bL=(function(e){for(var t=this;;)if(qS(t)!==Bh().T)e.e(t.B()),t=t.bc();else return}),M.cc=(function(){return`LazyList`}),M.rK=(function(e){return this.bf!==Of()&&qS(this)===Bh().T?Bh().T:JS(this,e)}),M.qH=(function(e){return e<=0?this:this.bf!==Of()&&qS(this)===Bh().T?Bh().T:Bh().si(this,e)}),M.e4=(function(e,t,n,r){return this.r6(),YS(this,e.b1,t,n,r),e}),M.z=(function(){return YS(this,hh(new _h,`LazyList`),`(`,`, `,`)`).o}),M.bw=(function(){return Bh()}),M.t=(function(){return this.bc()}),M.cz=(function(e){return this.rK(e)}),M.oo=(function(e){return this.qH(e)}),M.cy=(function(e){return u_(this,e|0)}),M.e=(function(e){return d_(this,e|0)}),new F().i(ZS,`scala.collection.immutable.LazyList`,{bY:1,g8:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,a:1,aJ:1,at:1,aO:1,aN:1});function QS(){}M=QS.prototype=new NS,M.constructor=QS;function $S(){}$S.prototype=M,M.b9=(function(e){return jf(this,e)});function eC(e,t,n){return e.ic=n,e.aZ=new(Nu.r()).C(aC(e,t)),e.id=oC(e,e.aZ.a.length),e.e0=0,e}function tC(e){return eC(e,16,.75),e}function nC(e,t){return t^(t>>>16|0)}function rC(e,t,n){var r=n&(e.aZ.a.length-1|0);matchResult4:{var i=e.aZ.a[r];if(i===null){e.aZ.a[r]=new Mu(t,n,null);break matchResult4}for(var a=null,o=i;o!==null&&o.dc<=n;){if(o.dc===n&&H().p(t,o.eY))return!1;a=o,o=o.b0}if(a===null)e.aZ.a[r]=new Mu(t,n,i);else{var s=a;s.b0=new Mu(t,n,a.b0)}}return e.e0=1+e.e0|0,!0}function iC(e,t){var n=e.aZ.a.length;if(e.id=oC(e,t),e.e0===0)e.aZ=new(Nu.r()).C(t);else{e.aZ=z().W(e.aZ,t);for(var r=new Mu(null,0,null),i=new Mu(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aZ.a[a];if(o!==null){r.b0=null,i.b0=null;for(var s=r,c=i,l=o;l!==null;){var u=l.b0;if((l.dc&n)===0){var d=s;d.b0=l,s=l}else{var f=c;f.b0=l,c=l}l=u}var p=s;if(p.b0=null,o!==r.b0&&(e.aZ.a[a]=r.b0),i.b0!==null){e.aZ.a[a+n|0]=i.b0;var m=c;m.b0=null}}a=1+a|0}n<<=1}}}function aC(e,t){var n=t-1|0,r=n>4?n:4,i=(-2147483648>>Math.clz32(r)&r)<<1;return i<1073741824?i:1073741824}function oC(e,t){return Ta(t*e.ic)}function sC(){this.ic=0,this.aZ=null,this.id=0,this.e0=0}M=sC.prototype=new HS,M.constructor=sC,M.aS=(function(){return this.e0}),M.cd=(function(e){var t=nC(this,U().Q(e));matchResult1:{var n,r=this.aZ.a[t&(this.aZ.a.length-1|0)];if(r===null){var n=null;break matchResult1}var n=r.r2(e,t)}return n!==null}),M.bb=(function(e){var t=aC(this,Ta((1+e|0)/this.ic));t>this.aZ.a.length&&iC(this,t)}),M.gM=(function(e){return(1+this.e0|0)>=this.id&&iC(this,this.aZ.a.length<<1),rC(this,e,nC(this,U().Q(e)))}),M.o2=(function(e){if(Em(this,e,0),e instanceof sC){for(var t=new ab(e);t.m();){var n=t.k();rC(this,n.eY,n.dc)}return this}return jf(this,e)}),M.l=(function(){return new ib(this)}),M.bw=(function(){return km()}),M.x=(function(){return this.e0}),M.f=(function(){return this.e0===0}),M.cc=(function(){return`HashSet`}),M.w=(function(){var e=new ib(this),t=e.m()?new ob(this):e;return G().jf(t,G().nW)}),M.b9=(function(e){return this.o2(e)}),M.b2=(function(e){return this.gM(e),this}),new F().i(sC,`scala.collection.mutable.HashSet`,{cf:1,gK:1,fs:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,fK:1,d:1,aM:1,H:1,B:1,F:1,E:1,G:1,L:1,aw:1,ha:1,h9:1,k:1,a:1});function cC(){}M=cC.prototype=new SS,M.constructor=cC;function lC(){}lC.prototype=M,M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.bB=(function(){return`IndexedSeq`}),M.gR=(function(e){return ES(this,e)}),M.f9=(function(e){return DS(this,e)}),M.cN=(function(e){return Mb(this,e)}),M.g0=(function(e){return zy().iE(e,this.ah())}),M.g6=(function(){return zy().gZ(this.ah())}),M.ec=(function(){return zy().i0}),M.rJ=(function(e){for(var t=new P(this.r()),n=0;n<t.a.length;)t.a[n]=e.e(this.v(n)),n=1+n|0;return zy().jg(t)}),M.cc=(function(){return`ArraySeq`}),M.bV=(function(e,t,n){var r=this.r(),i=gl().bW(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&kl().fV(this.cR(),0,e,t,c),c}),M.gO=(function(){return 2147483647}),M.bw=(function(){return zy().i0}),M.cz=(function(e){return this.rJ(e)}),M.fZ=(function(e){return zy().iE(e,this.ah())});function uC(e,t){return e.g=t,e}function dC(){this.g=null}M=dC.prototype=new SS,M.constructor=dC;function fC(){}fC.prototype=M,M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.bB=(function(){return`IndexedSeq`}),M.gR=(function(e){return ES(this,e)}),M.f9=(function(e){return DS(this,e)}),M.cN=(function(e){return Mb(this,e)}),M.ec=(function(){return iv()}),M.r=(function(){return this instanceof HC?this.j:this.g.a.length}),M.l=(function(){return this===XC()?iv().nA:new Zy(this,this.r(),this.cT())}),M.cc=(function(){return`Vector`}),M.bV=(function(e,t,n){return this.l().bV(e,t,n)}),M.gO=(function(){return iv().nz}),M.aK=(function(e){return cu().iN(e,this.r()-1|0)}),M.bL=(function(e){for(var t=this.cT(),n=0;n<t;){var r=V(),i=n,a=(t+(t>>>31|0)|0)>>1,o=i-a|0,s=o>>31;r.iC(((1+a|0)-((o^s)-s|0)|0)-1|0,this.cS(n),e),n=1+n|0}}),M.bw=(function(){return iv()});function pC(){}M=pC.prototype=new NS,M.constructor=pC;function mC(){}mC.prototype=M,M.bp=(function(e){var t=this.r();return t===e?0:t<e?-1:1}),M.x=(function(){return this.r()}),M.bB=(function(){return`IndexedSeq`}),M.cN=(function(e){return Py(this,e)}),M.ec=(function(){return rb().ib}),M.oD=(function(e){var t=this.ah(),n=null,r=t.aR(),i=r===eo.l();n=[],e.x();for(var a=e.l();a.m();){var o=a.k(),s=i?za(o):o===null?ju().h5(r):o;n.push(s)}return rb().iV(ju().h4(r===Qa.l()?fl.l():r===Hu.l()||r===Pm.l()?I.l():r,n))}),M.g6=(function(){return rb().gZ(this.ah())}),M.cc=(function(){return`ArraySeq`}),M.bV=(function(e,t,n){var r=this.r(),i=gl().bW(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&kl().fV(this.ca(),0,e,t,c),c}),M.q=(function(e){return e instanceof pC&&gl().bW(this.ca())!==gl().bW(e.ca())?!1:Wx(this,e)}),M.bw=(function(){return rb().ib}),M.g0=(function(e){return this.oD(e)}),M.fZ=(function(e){return this.oD(e)});function hC(e){this.dD=null,this.dD=e}M=hC.prototype=new lC,M.constructor=hC,M.r=(function(){return this.dD.a.length}),M.fT=(function(e){return this.dD.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dD,e.am)}),M.q=(function(e){return e instanceof hC?z().ou(this.dD,e.dD):Wx(this,e)}),M.l=(function(){return new Ty(this.dD)}),M.cR=(function(){return this.dD}),M.ah=(function(){return lx()}),M.v=(function(e){return this.fT(e)}),M.e=(function(e){return this.fT(e|0)}),new F().i(hC,`scala.collection.immutable.ArraySeq$ofBoolean`,{bK:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function gC(e){this.dE=null,this.dE=e}M=gC.prototype=new lC,M.constructor=gC,M.r=(function(){return this.dE.a.length}),M.fL=(function(e){return this.dE.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dE,e.am)}),M.q=(function(e){return e instanceof gC?z().oq(this.dE,e.dE):Wx(this,e)}),M.l=(function(){return new Ty(this.dE)}),M.cR=(function(){return this.dE}),M.ah=(function(){return fx()}),M.v=(function(e){return this.fL(e)}),M.e=(function(e){return this.fL(e|0)}),new F().i(gC,`scala.collection.immutable.ArraySeq$ofByte`,{bL:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function _C(e){this.d1=null,this.d1=e}M=_C.prototype=new lC,M.constructor=_C,M.r=(function(){return this.d1.a.length}),M.fM=(function(e){return this.d1.a[e]}),M.w=(function(){var e=G();return e.aQ(this.d1,e.am)}),M.q=(function(e){return e instanceof _C?z().or(this.d1,e.d1):Wx(this,e)}),M.l=(function(){return new Ty(this.d1)}),M.e4=(function(e,t,n,r){return new NC(this.d1).e4(e,t,n,r)}),M.cR=(function(){return this.d1}),M.ah=(function(){return hx()}),M.v=(function(e){return Ia(this.fM(e))}),M.e=(function(e){return Ia(this.fM(e|0))}),new F().i(_C,`scala.collection.immutable.ArraySeq$ofChar`,{bM:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function vC(e){this.dF=null,this.dF=e}M=vC.prototype=new lC,M.constructor=vC,M.r=(function(){return this.dF.a.length}),M.fN=(function(e){return this.dF.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dF,e.am)}),M.q=(function(e){if(e instanceof vC){var t=this.dF,n=e.dF;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Wx(this,e)}),M.l=(function(){return new Ty(this.dF)}),M.cR=(function(){return this.dF}),M.ah=(function(){return vx()}),M.v=(function(e){return this.fN(e)}),M.e=(function(e){return this.fN(e|0)}),new F().i(vC,`scala.collection.immutable.ArraySeq$ofDouble`,{bN:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function yC(e){this.dG=null,this.dG=e}M=yC.prototype=new lC,M.constructor=yC,M.r=(function(){return this.dG.a.length}),M.fO=(function(e){return this.dG.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dG,e.am)}),M.q=(function(e){if(e instanceof yC){var t=this.dG,n=e.dG;if(t===n)return!0;if(t.a.length===n.a.length){for(var r=0;r<t.a.length&&t.a[r]===n.a[r];)r=1+r|0;return r>=t.a.length}return!1}return Wx(this,e)}),M.l=(function(){return new Ty(this.dG)}),M.cR=(function(){return this.dG}),M.ah=(function(){return xx()}),M.v=(function(e){return this.fO(e)}),M.e=(function(e){return this.fO(e|0)}),new F().i(yC,`scala.collection.immutable.ArraySeq$ofFloat`,{bO:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function bC(e){this.dH=null,this.dH=e}M=bC.prototype=new lC,M.constructor=bC,M.r=(function(){return this.dH.a.length}),M.fP=(function(e){return this.dH.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dH,e.am)}),M.q=(function(e){return e instanceof bC?z().iz(this.dH,e.dH):Wx(this,e)}),M.l=(function(){return new Ty(this.dH)}),M.cR=(function(){return this.dH}),M.ah=(function(){return wx()}),M.v=(function(e){return this.fP(e)}),M.e=(function(e){return this.fP(e|0)}),new F().i(bC,`scala.collection.immutable.ArraySeq$ofInt`,{bP:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function xC(e){this.dI=null,this.dI=e}M=xC.prototype=new lC,M.constructor=xC,M.r=(function(){return this.dI.a.length>>>1|0}),M.fQ=(function(e){var t=this.dI.a,n=e<<1;return La(t[n],t[n+1|0])}),M.w=(function(){var e=G();return e.aQ(this.dI,e.am)}),M.q=(function(e){return e instanceof xC?z().os(this.dI,e.dI):Wx(this,e)}),M.l=(function(){return new Ty(this.dI)}),M.cR=(function(){return this.dI}),M.ah=(function(){return Dx()}),M.v=(function(e){return this.fQ(e)}),M.e=(function(e){return this.fQ(e|0)}),new F().i(xC,`scala.collection.immutable.ArraySeq$ofLong`,{bQ:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function SC(e){this.cH=null,this.cH=e}M=SC.prototype=new lC,M.constructor=SC,M.ah=(function(){return zu().o9(ya(this.cH).ai.Q())}),M.r=(function(){return this.cH.a.length}),M.v=(function(e){return this.cH.a[e]}),M.w=(function(){var e=G();return e.aQ(this.cH,e.am)}),M.q=(function(e){return e instanceof SC?kl().ov(this.cH,e.cH):Wx(this,e)}),M.l=(function(){return new Ty(this.cH)}),M.cR=(function(){return this.cH}),M.e=(function(e){return this.v(e|0)}),new F().i(SC,`scala.collection.immutable.ArraySeq$ofRef`,{bR:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function CC(e){this.dJ=null,this.dJ=e}M=CC.prototype=new lC,M.constructor=CC,M.r=(function(){return this.dJ.a.length}),M.fR=(function(e){return this.dJ.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dJ,e.am)}),M.q=(function(e){return e instanceof CC?z().ot(this.dJ,e.dJ):Wx(this,e)}),M.l=(function(){return new Ty(this.dJ)}),M.cR=(function(){return this.dJ}),M.ah=(function(){return zx()}),M.v=(function(e){return this.fR(e)}),M.e=(function(e){return this.fR(e|0)}),new F().i(CC,`scala.collection.immutable.ArraySeq$ofShort`,{bS:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function wC(e){this.eo=null,this.eo=e}M=wC.prototype=new lC,M.constructor=wC,M.r=(function(){return this.eo.a.length}),M.fS=(function(e){}),M.w=(function(){var e=G();return e.aQ(this.eo,e.am)}),M.q=(function(e){return e instanceof wC?this.eo.a.length===e.eo.a.length:Wx(this,e)}),M.l=(function(){return new Ty(this.eo)}),M.cR=(function(){return this.eo}),M.ah=(function(){return Hx()}),M.v=(function(e){this.fS(e)}),M.e=(function(e){this.fS(e|0)}),new F().i(wC,`scala.collection.immutable.ArraySeq$ofUnit`,{bT:1,W:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a0:1,a:1});function TC(e,t,n,r){for(var i=r,a=n;;)if(a===t)return!i.f()|0;else{if(!i.f()){var o=1+a|0,s=i.t();a=o,i=s;continue}return-1}}function EC(e,t,n){for(var r=n,i=t;;)if(i===r)return!0;else{var a=i.f(),o=r.f();if(!(a||o)&&H().p(i.B(),r.B())){var s=i.t(),c=r.t();i=s,r=c;continue}return a&&o}}function DC(){}M=DC.prototype=new SS,M.constructor=DC;function OC(){}OC.prototype=M,M.iQ=(function(e){return u_(this,e)}),M.v=(function(e){return d_(this,e)}),M.f9=(function(e){return f_(this,e)}),M.bB=(function(){return`LinearSeq`}),M.l=(function(){return new h_(this)}),M.cN=(function(e){return Mb(this,e)}),M.ec=(function(){return G_()}),M.nX=(function(e){if(this.f())return e;if(e.f())return this;for(var t=new GC(e.B(),this),n=t,r=e.t();!r.f();){var i=new GC(r.B(),this);n.ax=i,n=i,r=r.t()}return t}),M.f=(function(){return this===$()}),M.j6=(function(e){if(e instanceof DC)return this.nX(e);if(e.x()===0)return this;if(e instanceof sw&&this.f())return e.pd();var t=e.l();if(t.m()){for(var n=new GC(t.k(),this),r=n;t.m();){var i=new GC(t.k(),this);r.ax=i,r=i}return n}return this}),M.o7=(function(e){return e instanceof DC?e.nX(this):Fy(this,e)}),M.rL=(function(e){if(this===$())var t=$();else{for(var n=new GC(e.e(this.B()),$()),r=n,i=this.t();i!==$();){var a=new GC(e.e(i.B()),$());r.ax=a,r=a,i=i.t()}var t=n}return t}),M.bL=(function(e){for(var t=this;!t.f();)e.e(t.B()),t=t.t()}),M.r=(function(){for(var e=this,t=0;!e.f();)t=1+t|0,e=e.t();return t}),M.bp=(function(e){return e<0?1:TC(this,e,0,this)}),M.cd=(function(e){for(var t=this;!t.f();){if(H().p(t.B(),e))return!0;t=t.t()}return!1}),M.cc=(function(){return`List`}),M.q=(function(e){return e instanceof DC?EC(this,this,e):Wx(this,e)}),M.bw=(function(){return G_()}),M.cz=(function(e){return this.rL(e)}),M.oo=(function(e){return jb(this,e,this)}),M.cy=(function(e){return u_(this,e|0)}),M.e=(function(e){return d_(this,e|0)});function kC(){this.g=null}M=kC.prototype=new fC,M.constructor=kC;function AC(){}AC.prototype=M;function jC(e){this.dU=null,this.dU=e}M=jC.prototype=new mC,M.constructor=jC,M.r=(function(){return this.dU.a.length}),M.fT=(function(e){return this.dU.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dU,e.am)}),M.q=(function(e){return e instanceof jC?z().ou(this.dU,e.dU):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.dU)}),M.ca=(function(){return this.dU}),M.ah=(function(){return lx()}),M.v=(function(e){return this.fT(e)}),M.e=(function(e){return this.fT(e|0)}),new F().i(jC,`scala.collection.mutable.ArraySeq$ofBoolean`,{c5:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function MC(e){this.dV=null,this.dV=e}M=MC.prototype=new mC,M.constructor=MC,M.r=(function(){return this.dV.a.length}),M.fL=(function(e){return this.dV.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dV,e.am)}),M.q=(function(e){return e instanceof MC?z().oq(this.dV,e.dV):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.dV)}),M.ca=(function(){return this.dV}),M.ah=(function(){return fx()}),M.v=(function(e){return this.fL(e)}),M.e=(function(e){return this.fL(e|0)}),new F().i(MC,`scala.collection.mutable.ArraySeq$ofByte`,{c6:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function NC(e){this.bR=null,this.bR=e}M=NC.prototype=new mC,M.constructor=NC,M.r=(function(){return this.bR.a.length}),M.fM=(function(e){return this.bR.a[e]}),M.w=(function(){var e=G();return e.aQ(this.bR,e.am)}),M.q=(function(e){return e instanceof NC?z().or(this.bR,e.bR):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.bR)}),M.e4=(function(e,t,n,r){var i=e.b1;t.length!==0&&(i.o=``+i.o+t);var a=this.bR.a.length;if(a!==0){if(n===``)i.o5(this.bR);else{i.r();var o=this.bR.a[0],s=``+Ea(o);i.o+=s;for(var c=1;c<a;){i.o=``+i.o+n;var l=this.bR.a[c],u=``+Ea(l);i.o+=u,c=1+c|0}}}return r.length!==0&&(i.o=``+i.o+r),e}),M.ca=(function(){return this.bR}),M.ah=(function(){return hx()}),M.v=(function(e){return Ia(this.fM(e))}),M.e=(function(e){return Ia(this.fM(e|0))}),new F().i(NC,`scala.collection.mutable.ArraySeq$ofChar`,{c7:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function PC(e){this.c5=null,this.c5=e}M=PC.prototype=new mC,M.constructor=PC,M.r=(function(){return this.c5.a.length}),M.fN=(function(e){return this.c5.a[e]}),M.w=(function(){var e=G();return e.aQ(this.c5,e.am)}),M.q=(function(e){if(e instanceof PC){var t=e.c5;if(this.c5===t)return!0;if(this.c5.a.length===t.a.length){for(var n=0;n<this.c5.a.length&&this.c5.a[n]===t.a[n];)n=1+n|0;return n>=this.c5.a.length}return!1}return pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.c5)}),M.ca=(function(){return this.c5}),M.ah=(function(){return vx()}),M.v=(function(e){return this.fN(e)}),M.e=(function(e){return this.fN(e|0)}),new F().i(PC,`scala.collection.mutable.ArraySeq$ofDouble`,{c8:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function FC(e){this.c6=null,this.c6=e}M=FC.prototype=new mC,M.constructor=FC,M.r=(function(){return this.c6.a.length}),M.fO=(function(e){return this.c6.a[e]}),M.w=(function(){var e=G();return e.aQ(this.c6,e.am)}),M.q=(function(e){if(e instanceof FC){var t=e.c6;if(this.c6===t)return!0;if(this.c6.a.length===t.a.length){for(var n=0;n<this.c6.a.length&&this.c6.a[n]===t.a[n];)n=1+n|0;return n>=this.c6.a.length}return!1}return pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.c6)}),M.ca=(function(){return this.c6}),M.ah=(function(){return xx()}),M.v=(function(e){return this.fO(e)}),M.e=(function(e){return this.fO(e|0)}),new F().i(FC,`scala.collection.mutable.ArraySeq$ofFloat`,{c9:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function IC(e){this.dW=null,this.dW=e}M=IC.prototype=new mC,M.constructor=IC,M.r=(function(){return this.dW.a.length}),M.fP=(function(e){return this.dW.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dW,e.am)}),M.q=(function(e){return e instanceof IC?z().iz(this.dW,e.dW):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.dW)}),M.ca=(function(){return this.dW}),M.ah=(function(){return wx()}),M.v=(function(e){return this.fP(e)}),M.e=(function(e){return this.fP(e|0)}),new F().i(IC,`scala.collection.mutable.ArraySeq$ofInt`,{ca:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function LC(e){this.dX=null,this.dX=e}M=LC.prototype=new mC,M.constructor=LC,M.r=(function(){return this.dX.a.length>>>1|0}),M.fQ=(function(e){var t=this.dX.a,n=e<<1;return La(t[n],t[n+1|0])}),M.w=(function(){var e=G();return e.aQ(this.dX,e.am)}),M.q=(function(e){return e instanceof LC?z().os(this.dX,e.dX):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.dX)}),M.ca=(function(){return this.dX}),M.ah=(function(){return Dx()}),M.v=(function(e){return this.fQ(e)}),M.e=(function(e){return this.fQ(e|0)}),new F().i(LC,`scala.collection.mutable.ArraySeq$ofLong`,{cb:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function RC(e){this.da=null,this.da=e}M=RC.prototype=new mC,M.constructor=RC,M.ah=(function(){return zu().o9(ya(this.da).ai.Q())}),M.r=(function(){return this.da.a.length}),M.v=(function(e){return this.da.a[e]}),M.w=(function(){var e=G();return e.aQ(this.da,e.am)}),M.q=(function(e){return e instanceof RC?kl().ov(this.da,e.da):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.da)}),M.ca=(function(){return this.da}),M.e=(function(e){return this.v(e|0)}),new F().i(RC,`scala.collection.mutable.ArraySeq$ofRef`,{cc:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function zC(e){this.dY=null,this.dY=e}M=zC.prototype=new mC,M.constructor=zC,M.r=(function(){return this.dY.a.length}),M.fR=(function(e){return this.dY.a[e]}),M.w=(function(){var e=G();return e.aQ(this.dY,e.am)}),M.q=(function(e){return e instanceof zC?z().ot(this.dY,e.dY):pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.dY)}),M.ca=(function(){return this.dY}),M.ah=(function(){return zx()}),M.v=(function(e){return this.fR(e)}),M.e=(function(e){return this.fR(e|0)}),new F().i(zC,`scala.collection.mutable.ArraySeq$ofShort`,{cd:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function BC(e){this.eu=null,this.eu=e}M=BC.prototype=new mC,M.constructor=BC,M.r=(function(){return this.eu.a.length}),M.fS=(function(e){}),M.w=(function(){var e=G();return e.aQ(this.eu,e.am)}),M.q=(function(e){return e instanceof BC?this.eu.a.length===e.eu.a.length:pC.prototype.q.call(this,e)}),M.l=(function(){return new Ty(this.eu)}),M.ca=(function(){return this.eu}),M.ah=(function(){return Hx()}),M.v=(function(e){this.fS(e)}),M.e=(function(e){this.fS(e|0)}),new F().i(BC,`scala.collection.mutable.ArraySeq$ofUnit`,{ce:1,X:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,p:1,o:1,S:1,R:1,k:1,q:1,a:1});function VC(e,t,n,r){return e.i=n,e.j=r,uC(e,t),e}function HC(){this.g=null,this.i=null,this.j=0}M=HC.prototype=new AC,M.constructor=HC;function UC(){}UC.prototype=M;function WC(e){this.g=null,uC(this,e)}M=WC.prototype=new AC,M.constructor=WC,M.v=(function(e){if(e>=0&&e<this.g.a.length)return this.g.a[e];throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.g.a.length){var n=this.g.h();return n.a[e]=t,new WC(n)}throw this.aK(e)}),M.e5=(function(e){if(this.g.a.length<32)return new WC(V().f2(this.g,e));var t=this.g,n=V().bv,r=new P(1);return r.a[0]=e,new ZC(t,32,n,r,33)}),M.cA=(function(e){return new WC(V().ch(this.g,e))}),M.cT=(function(){return 1}),M.cS=(function(e){return this.g}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.g.a.length)return this.g.a[t];throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i(WC,`scala.collection.immutable.Vector1`,{gA:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function GC(e,t){this.hZ=null,this.ax=null,this.hZ=e,this.ax=t}M=GC.prototype=new OC,M.constructor=GC,M.cQ=(function(){return new qg(this)}),M.by=(function(){return 2}),M.bA=(function(){return`::`}),M.bz=(function(e){if(e===0)return this.hZ;if(e===1)return this.ax;throw Mg(new Ng,e)}),M.B=(function(){return this.hZ}),M.t=(function(){return this.ax}),new F().i(GC,`scala.collection.immutable.$colon$colon`,{fT:1,aP:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,aJ:1,at:1,aO:1,aN:1,k:1,q:1,bJ:1,z:1,a:1,V:1,U:1});function KC(){qC=this,$(),$()}M=KC.prototype=new OC,M.constructor=KC,M.cQ=(function(){return new qg(this)}),M.by=(function(){return 0}),M.bA=(function(){return`Nil`}),M.bz=(function(e){throw Mg(new Ng,e)}),M.rq=(function(){throw new Vg(`head of empty list`)}),M.sA=(function(){throw new zg(`tail of empty list`)}),M.x=(function(){return 0}),M.l=(function(){return dm().S}),M.B=(function(){this.rq()}),M.t=(function(){this.sA()}),new F().i(KC,`scala.collection.immutable.Nil$`,{gq:1,aP:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,aJ:1,at:1,aO:1,aN:1,k:1,q:1,bJ:1,z:1,a:1,V:1,U:1});var qC;function $(){return qC||=new KC,qC}function JC(){this.g=null,this.i=null,this.j=0,VC(this,V().i6,V().i6,0)}M=JC.prototype=new UC,M.constructor=JC,M.o8=(function(e){throw this.aK(e)}),M.ee=(function(e,t){throw this.aK(e)}),M.e5=(function(e){var t=new P(1);return t.a[0]=e,new WC(t)}),M.cT=(function(){return 0}),M.cS=(function(e){return null}),M.q=(function(e){return this===e||(e instanceof dC?!1:Wx(this,e))}),M.aK=(function(e){return jg(new Ng,e+` is out of bounds (empty vector)`)}),M.v=(function(e){this.o8(e)}),M.e=(function(e){this.o8(e|0)}),M.cz=(function(e){return this}),new F().i(JC,`scala.collection.immutable.Vector0$`,{gz:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});var YC;function XC(){return YC||=new JC,YC}function ZC(e,t,n,r,i){this.g=null,this.i=null,this.j=0,this.bK=0,this.bm=null,this.bK=t,this.bm=n,VC(this,e,r,i)}M=ZC.prototype=new UC,M.constructor=ZC,M.v=(function(e){if(e>=0&&e<this.j){var t=e-this.bK|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.bm.a.length?this.bm.a[n].a[r]:this.i.a[31&t]}return this.g.a[e]}throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.j){if(e>=this.bK){var n=e-this.bK|0,r=n>>>5|0,i=31&n;if(r<this.bm.a.length){var a=this.bm.h(),o=a.a[r].h();return o.a[i]=t,a.a[r]=o,new ZC(this.g,this.bK,a,this.i,this.j)}var s=this.i.h();return s.a[i]=t,new ZC(this.g,this.bK,this.bm,s,this.j)}var c=this.g.h();return c.a[e]=t,new ZC(c,this.bK,this.bm,this.i,this.j)}throw this.aK(e)}),M.e5=(function(e){if(this.i.a.length<32){var t=V().f2(this.i,e),n=1+this.j|0;return new ZC(this.g,this.bK,this.bm,t,n)}if(this.bm.a.length<30){var r=V().F(this.bm,this.i),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new ZC(this.g,this.bK,r,i,a)}var o=this.g,s=this.bK,c=this.bm,l=this.bK,u=V().cL,d=this.i,f=new(I.r().r()).C(1);f.a[0]=d;var p=new P(1);return p.a[0]=e,new QC(o,s,c,960+l|0,u,f,p,1+this.j|0)}),M.cA=(function(e){var t=V().ch(this.g,e),n=V().a5(2,this.bm,e),r=V().ch(this.i,e);return new ZC(t,this.bK,n,r,this.j)}),M.cT=(function(){return 3}),M.cS=(function(e){switch(e){case 0:return this.g;case 1:return this.bm;case 2:return this.i;default:throw new Wg(e)}}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.bK|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.bm.a.length?this.bm.a[r].a[i]:this.i.a[31&n]}return this.g.a[t]}throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i(ZC,`scala.collection.immutable.Vector2`,{gB:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function QC(e,t,n,r,i,a,o,s){this.g=null,this.i=null,this.j=0,this.bg=0,this.bu=null,this.bh=0,this.aX=null,this.aY=null,this.bg=t,this.bu=n,this.bh=r,this.aX=i,this.aY=a,VC(this,e,o,s)}M=QC.prototype=new UC,M.constructor=QC,M.v=(function(e){if(e>=0&&e<this.j){var t=e-this.bh|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aX.a.length?this.aX.a[n].a[r].a[i]:r<this.aY.a.length?this.aY.a[r].a[i]:this.i.a[i]}if(e>=this.bg){var a=e-this.bg|0;return this.bu.a[a>>>5|0].a[31&a]}return this.g.a[e]}throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.j){if(e>=this.bh){var n=e-this.bh|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aX.a.length){var o=this.aX.h(),s=o.a[r].h(),c=s.a[i].h();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new QC(this.g,this.bg,this.bu,this.bh,o,this.aY,this.i,this.j)}if(i<this.aY.a.length){var l=this.aY.h(),u=l.a[i].h();return u.a[a]=t,l.a[i]=u,new QC(this.g,this.bg,this.bu,this.bh,this.aX,l,this.i,this.j)}var d=this.i.h();return d.a[a]=t,new QC(this.g,this.bg,this.bu,this.bh,this.aX,this.aY,d,this.j)}if(e>=this.bg){var f=e-this.bg|0,p=this.bu,m=f>>>5|0,h=31&f,g=p.h(),_=g.a[m].h();return _.a[h]=t,g.a[m]=_,new QC(this.g,this.bg,g,this.bh,this.aX,this.aY,this.i,this.j)}var v=this.g.h();return v.a[e]=t,new QC(v,this.bg,this.bu,this.bh,this.aX,this.aY,this.i,this.j)}throw this.aK(e)}),M.e5=(function(e){if(this.i.a.length<32){var t=V().f2(this.i,e),n=1+this.j|0;return new QC(this.g,this.bg,this.bu,this.bh,this.aX,this.aY,t,n)}if(this.aY.a.length<31){var r=V().F(this.aY,this.i),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new QC(this.g,this.bg,this.bu,this.bh,this.aX,r,i,a)}if(this.aX.a.length<30){var o=V().F(this.aX,V().F(this.aY,this.i)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new QC(this.g,this.bg,this.bu,this.bh,o,V().bv,s,c)}var l=this.g,u=this.bg,d=this.bu,f=this.bh,p=this.aX,m=this.bh,h=V().eV,g=V().F(this.aY,this.i),_=new(I.r().r().r()).C(1);_.a[0]=g;var v=V().bv,y=new P(1);return y.a[0]=e,new $C(l,u,d,f,p,30720+m|0,h,_,v,y,1+this.j|0)}),M.cA=(function(e){var t=V().ch(this.g,e),n=V().a5(2,this.bu,e),r=V().a5(3,this.aX,e),i=V().a5(2,this.aY,e),a=V().ch(this.i,e);return new QC(t,this.bg,n,this.bh,r,i,a,this.j)}),M.cT=(function(){return 5}),M.cS=(function(e){switch(e){case 0:return this.g;case 1:return this.bu;case 2:return this.aX;case 3:return this.aY;case 4:return this.i;default:throw new Wg(e)}}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.bh|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aX.a.length?this.aX.a[r].a[i].a[a]:i<this.aY.a.length?this.aY.a[i].a[a]:this.i.a[a]}if(t>=this.bg){var o=t-this.bg|0;return this.bu.a[o>>>5|0].a[31&o]}return this.g.a[t]}throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i(QC,`scala.collection.immutable.Vector3`,{gC:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function $C(e,t,n,r,i,a,o,s,c,l,u){this.g=null,this.i=null,this.j=0,this.aN=0,this.b6=null,this.aO=0,this.b7=null,this.aP=0,this.az=null,this.aB=null,this.aA=null,this.aN=t,this.b6=n,this.aO=r,this.b7=i,this.aP=a,this.az=o,this.aB=s,this.aA=c,VC(this,e,l,u)}M=$C.prototype=new UC,M.constructor=$C,M.v=(function(e){if(e>=0&&e<this.j){var t=e-this.aP|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.az.a.length?this.az.a[n].a[r].a[i].a[a]:r<this.aB.a.length?this.aB.a[r].a[i].a[a]:i<this.aA.a.length?this.aA.a[i].a[a]:this.i.a[a]}if(e>=this.aO){var o=e-this.aO|0;return this.b7.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}if(e>=this.aN){var s=e-this.aN|0;return this.b6.a[s>>>5|0].a[31&s]}return this.g.a[e]}throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.j){if(e>=this.aP){var n=e-this.aP|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.az.a.length){var s=this.az.h(),c=s.a[r].h(),l=c.a[i].h(),u=l.a[a].h();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,s,this.aB,this.aA,this.i,this.j)}if(i<this.aB.a.length){var d=this.aB.h(),f=d.a[i].h(),p=f.a[a].h();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,d,this.aA,this.i,this.j)}if(a<this.aA.a.length){var m=this.aA.h(),h=m.a[a].h();return h.a[o]=t,m.a[a]=h,new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,this.aB,m,this.i,this.j)}var g=this.i.h();return g.a[o]=t,new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,this.aB,this.aA,g,this.j)}if(e>=this.aO){var _=e-this.aO|0,v=this.b7,y=_>>>10|0,b=31&(_>>>5|0),x=31&_,ee=v.h(),S=ee.a[y].h(),te=S.a[b].h();return te.a[x]=t,S.a[b]=te,ee.a[y]=S,new $C(this.g,this.aN,this.b6,this.aO,ee,this.aP,this.az,this.aB,this.aA,this.i,this.j)}if(e>=this.aN){var C=e-this.aN|0,ne=this.b6,re=C>>>5|0,ie=31&C,w=ne.h(),ae=w.a[re].h();return ae.a[ie]=t,w.a[re]=ae,new $C(this.g,this.aN,w,this.aO,this.b7,this.aP,this.az,this.aB,this.aA,this.i,this.j)}var oe=this.g.h();return oe.a[e]=t,new $C(oe,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,this.aB,this.aA,this.i,this.j)}throw this.aK(e)}),M.e5=(function(e){if(this.i.a.length<32){var t=V().f2(this.i,e),n=1+this.j|0;return new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,this.aB,this.aA,t,n)}if(this.aA.a.length<31){var r=V().F(this.aA,this.i),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,this.aB,r,i,a)}if(this.aB.a.length<31){var o=V().F(this.aB,V().F(this.aA,this.i)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,this.az,o,V().bv,s,c)}if(this.az.a.length<30){var l=V().F(this.az,V().F(this.aB,V().F(this.aA,this.i))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new $C(this.g,this.aN,this.b6,this.aO,this.b7,this.aP,l,V().cL,V().bv,u,d)}var f=this.g,p=this.aN,m=this.b6,h=this.aO,g=this.b7,_=this.aP,v=this.az,y=this.aP,b=V().i7,x=V().F(this.aB,V().F(this.aA,this.i)),ee=new(I.r().r().r().r()).C(1);ee.a[0]=x;var S=V().cL,te=V().bv,C=new P(1);return C.a[0]=e,new ew(f,p,m,h,g,_,v,983040+y|0,b,ee,S,te,C,1+this.j|0)}),M.cA=(function(e){var t=V().ch(this.g,e),n=V().a5(2,this.b6,e),r=V().a5(3,this.b7,e),i=V().a5(4,this.az,e),a=V().a5(3,this.aB,e),o=V().a5(2,this.aA,e),s=V().ch(this.i,e);return new $C(t,this.aN,n,this.aO,r,this.aP,i,a,o,s,this.j)}),M.cT=(function(){return 7}),M.cS=(function(e){switch(e){case 0:return this.g;case 1:return this.b6;case 2:return this.b7;case 3:return this.az;case 4:return this.aB;case 5:return this.aA;case 6:return this.i;default:throw new Wg(e)}}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.aP|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.az.a.length?this.az.a[r].a[i].a[a].a[o]:i<this.aB.a.length?this.aB.a[i].a[a].a[o]:a<this.aA.a.length?this.aA.a[a].a[o]:this.i.a[o]}if(t>=this.aO){var s=t-this.aO|0;return this.b7.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}if(t>=this.aN){var c=t-this.aN|0;return this.b6.a[c>>>5|0].a[31&c]}return this.g.a[t]}throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i($C,`scala.collection.immutable.Vector4`,{gD:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function ew(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.g=null,this.i=null,this.j=0,this.ao=0,this.aE=null,this.ap=0,this.aF=null,this.aq=0,this.aG=null,this.ar=0,this.a9=null,this.ac=null,this.ab=null,this.aa=null,this.ao=t,this.aE=n,this.ap=r,this.aF=i,this.aq=a,this.aG=o,this.ar=s,this.a9=c,this.ac=l,this.ab=u,this.aa=d,VC(this,e,f,p)}M=ew.prototype=new UC,M.constructor=ew,M.v=(function(e){if(e>=0&&e<this.j){var t=e-this.ar|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a9.a.length?this.a9.a[n].a[r].a[i].a[a].a[o]:r<this.ac.a.length?this.ac.a[r].a[i].a[a].a[o]:i<this.ab.a.length?this.ab.a[i].a[a].a[o]:a<this.aa.a.length?this.aa.a[a].a[o]:this.i.a[o]}if(e>=this.aq){var s=e-this.aq|0;return this.aG.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}if(e>=this.ap){var c=e-this.ap|0;return this.aF.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}if(e>=this.ao){var l=e-this.ao|0;return this.aE.a[l>>>5|0].a[31&l]}return this.g.a[e]}throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.j){if(e>=this.ar){var n=e-this.ar|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a9.a.length){var c=this.a9.h(),l=c.a[r].h(),u=l.a[i].h(),d=u.a[a].h(),f=d.a[o].h();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,c,this.ac,this.ab,this.aa,this.i,this.j)}if(i<this.ac.a.length){var p=this.ac.h(),m=p.a[i].h(),h=m.a[a].h(),g=h.a[o].h();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,p,this.ab,this.aa,this.i,this.j)}if(a<this.ab.a.length){var _=this.ab.h(),v=_.a[a].h(),y=v.a[o].h();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,_,this.aa,this.i,this.j)}if(o<this.aa.a.length){var b=this.aa.h(),x=b.a[o].h();return x.a[s]=t,b.a[o]=x,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,b,this.i,this.j)}var ee=this.i.h();return ee.a[s]=t,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,this.aa,ee,this.j)}if(e>=this.aq){var S=e-this.aq|0,te=this.aG,C=S>>>15|0,ne=31&(S>>>10|0),re=31&(S>>>5|0),ie=31&S,w=te.h(),ae=w.a[C].h(),oe=ae.a[ne].h(),se=oe.a[re].h();return se.a[ie]=t,oe.a[re]=se,ae.a[ne]=oe,w.a[C]=ae,new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,w,this.ar,this.a9,this.ac,this.ab,this.aa,this.i,this.j)}if(e>=this.ap){var ce=e-this.ap|0,le=this.aF,ue=ce>>>10|0,de=31&(ce>>>5|0),T=31&ce,fe=le.h(),pe=fe.a[ue].h(),me=pe.a[de].h();return me.a[T]=t,pe.a[de]=me,fe.a[ue]=pe,new ew(this.g,this.ao,this.aE,this.ap,fe,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,this.aa,this.i,this.j)}if(e>=this.ao){var he=e-this.ao|0,ge=this.aE,_e=he>>>5|0,ve=31&he,ye=ge.h(),be=ye.a[_e].h();return be.a[ve]=t,ye.a[_e]=be,new ew(this.g,this.ao,ye,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,this.aa,this.i,this.j)}var xe=this.g.h();return xe.a[e]=t,new ew(xe,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,this.aa,this.i,this.j)}throw this.aK(e)}),M.e5=(function(e){if(this.i.a.length<32){var t=V().f2(this.i,e),n=1+this.j|0;return new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,this.aa,t,n)}if(this.aa.a.length<31){var r=V().F(this.aa,this.i),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,this.ab,r,i,a)}if(this.ab.a.length<31){var o=V().F(this.ab,V().F(this.aa,this.i)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,this.ac,o,V().bv,s,c)}if(this.ac.a.length<31){var l=V().F(this.ac,V().F(this.ab,V().F(this.aa,this.i))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,this.a9,l,V().cL,V().bv,u,d)}if(this.a9.a.length<30){var f=V().F(this.a9,V().F(this.ac,V().F(this.ab,V().F(this.aa,this.i)))),p=new P(1);p.a[0]=e;var m=1+this.j|0;return new ew(this.g,this.ao,this.aE,this.ap,this.aF,this.aq,this.aG,this.ar,f,V().eV,V().cL,V().bv,p,m)}var h=this.g,g=this.ao,_=this.aE,v=this.ap,y=this.aF,b=this.aq,x=this.aG,ee=this.ar,S=this.a9,te=this.ar,C=V().nB,ne=V().F(this.ac,V().F(this.ab,V().F(this.aa,this.i))),re=new(I.r().r().r().r().r()).C(1);re.a[0]=ne;var ie=V().eV,w=V().cL,ae=V().bv,oe=new P(1);return oe.a[0]=e,new tw(h,g,_,v,y,b,x,ee,S,31457280+te|0,C,re,ie,w,ae,oe,1+this.j|0)}),M.cA=(function(e){var t=V().ch(this.g,e),n=V().a5(2,this.aE,e),r=V().a5(3,this.aF,e),i=V().a5(4,this.aG,e),a=V().a5(5,this.a9,e),o=V().a5(4,this.ac,e),s=V().a5(3,this.ab,e),c=V().a5(2,this.aa,e),l=V().ch(this.i,e);return new ew(t,this.ao,n,this.ap,r,this.aq,i,this.ar,a,o,s,c,l,this.j)}),M.cT=(function(){return 9}),M.cS=(function(e){switch(e){case 0:return this.g;case 1:return this.aE;case 2:return this.aF;case 3:return this.aG;case 4:return this.a9;case 5:return this.ac;case 6:return this.ab;case 7:return this.aa;case 8:return this.i;default:throw new Wg(e)}}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.ar|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a9.a.length?this.a9.a[r].a[i].a[a].a[o].a[s]:i<this.ac.a.length?this.ac.a[i].a[a].a[o].a[s]:a<this.ab.a.length?this.ab.a[a].a[o].a[s]:o<this.aa.a.length?this.aa.a[o].a[s]:this.i.a[s]}if(t>=this.aq){var c=t-this.aq|0;return this.aG.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(t>=this.ap){var l=t-this.ap|0;return this.aF.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}if(t>=this.ao){var u=t-this.ao|0;return this.aE.a[u>>>5|0].a[31&u]}return this.g.a[t]}throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i(ew,`scala.collection.immutable.Vector5`,{gE:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function tw(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.g=null,this.i=null,this.j=0,this.ad=0,this.as=null,this.ae=0,this.at=null,this.af=0,this.au=null,this.ag=0,this.av=null,this.al=0,this.Z=null,this.a3=null,this.a2=null,this.a1=null,this.a0=null,this.ad=t,this.as=n,this.ae=r,this.at=i,this.af=a,this.au=o,this.ag=s,this.av=c,this.al=l,this.Z=u,this.a3=d,this.a2=f,this.a1=p,this.a0=m,VC(this,e,h,g)}M=tw.prototype=new UC,M.constructor=tw,M.v=(function(e){if(e>=0&&e<this.j){var t=e-this.al|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.Z.a.length?this.Z.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a3.a.length?this.a3.a[r].a[i].a[a].a[o].a[s]:i<this.a2.a.length?this.a2.a[i].a[a].a[o].a[s]:a<this.a1.a.length?this.a1.a[a].a[o].a[s]:o<this.a0.a.length?this.a0.a[o].a[s]:this.i.a[s]}if(e>=this.ag){var c=e-this.ag|0;return this.av.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}if(e>=this.af){var l=e-this.af|0;return this.au.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(e>=this.ae){var u=e-this.ae|0;return this.at.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}if(e>=this.ad){var d=e-this.ad|0;return this.as.a[d>>>5|0].a[31&d]}return this.g.a[e]}throw this.aK(e)}),M.ee=(function(e,t){if(e>=0&&e<this.j){if(e>=this.al){var n=e-this.al|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.Z.a.length){var l=this.Z.h(),u=l.a[r].h(),d=u.a[i].h(),f=d.a[a].h(),p=f.a[o].h(),m=p.a[s].h();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,l,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}if(i<this.a3.a.length){var h=this.a3.h(),g=h.a[i].h(),_=g.a[a].h(),v=_.a[o].h(),y=v.a[s].h();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,h,this.a2,this.a1,this.a0,this.i,this.j)}if(a<this.a2.a.length){var b=this.a2.h(),x=b.a[a].h(),ee=x.a[o].h(),S=ee.a[s].h();return S.a[c]=t,ee.a[s]=S,x.a[o]=ee,b.a[a]=x,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,b,this.a1,this.a0,this.i,this.j)}if(o<this.a1.a.length){var te=this.a1.h(),C=te.a[o].h(),ne=C.a[s].h();return ne.a[c]=t,C.a[s]=ne,te.a[o]=C,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,te,this.a0,this.i,this.j)}if(s<this.a0.a.length){var re=this.a0.h(),ie=re.a[s].h();return ie.a[c]=t,re.a[s]=ie,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,re,this.i,this.j)}var w=this.i.h();return w.a[c]=t,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,w,this.j)}if(e>=this.ag){var ae=e-this.ag|0,oe=this.av,se=ae>>>20|0,ce=31&(ae>>>15|0),le=31&(ae>>>10|0),ue=31&(ae>>>5|0),de=31&ae,T=oe.h(),fe=T.a[se].h(),pe=fe.a[ce].h(),me=pe.a[le].h(),he=me.a[ue].h();return he.a[de]=t,me.a[ue]=he,pe.a[le]=me,fe.a[ce]=pe,T.a[se]=fe,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,T,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}if(e>=this.af){var ge=e-this.af|0,_e=this.au,ve=ge>>>15|0,ye=31&(ge>>>10|0),be=31&(ge>>>5|0),xe=31&ge,Se=_e.h(),Ce=Se.a[ve].h(),we=Ce.a[ye].h(),Te=we.a[be].h();return Te.a[xe]=t,we.a[be]=Te,Ce.a[ye]=we,Se.a[ve]=Ce,new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,Se,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}if(e>=this.ae){var Ee=e-this.ae|0,De=this.at,Oe=Ee>>>10|0,ke=31&(Ee>>>5|0),Ae=31&Ee,je=De.h(),Me=je.a[Oe].h(),Ne=Me.a[ke].h();return Ne.a[Ae]=t,Me.a[ke]=Ne,je.a[Oe]=Me,new tw(this.g,this.ad,this.as,this.ae,je,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}if(e>=this.ad){var E=e-this.ad|0,Pe=this.as,Fe=E>>>5|0,Ie=31&E,Le=Pe.h(),Re=Le.a[Fe].h();return Re.a[Ie]=t,Le.a[Fe]=Re,new tw(this.g,this.ad,Le,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}var ze=this.g.h();return ze.a[e]=t,new tw(ze,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,this.i,this.j)}throw this.aK(e)}),M.e5=(function(e){if(this.i.a.length<32){var t=V().f2(this.i,e),n=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,this.a0,t,n)}if(this.a0.a.length<31){var r=V().F(this.a0,this.i),i=new P(1);i.a[0]=e;var a=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,this.a1,r,i,a)}if(this.a1.a.length<31){var o=V().F(this.a1,V().F(this.a0,this.i)),s=new P(1);s.a[0]=e;var c=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,this.a2,o,V().bv,s,c)}if(this.a2.a.length<31){var l=V().F(this.a2,V().F(this.a1,V().F(this.a0,this.i))),u=new P(1);u.a[0]=e;var d=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,this.a3,l,V().cL,V().bv,u,d)}if(this.a3.a.length<31){var f=V().F(this.a3,V().F(this.a2,V().F(this.a1,V().F(this.a0,this.i)))),p=new P(1);p.a[0]=e;var m=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,this.Z,f,V().eV,V().cL,V().bv,p,m)}if(this.Z.a.length<62){var h=V().F(this.Z,V().F(this.a3,V().F(this.a2,V().F(this.a1,V().F(this.a0,this.i))))),g=new P(1);g.a[0]=e;var _=1+this.j|0;return new tw(this.g,this.ad,this.as,this.ae,this.at,this.af,this.au,this.ag,this.av,this.al,h,V().i7,V().eV,V().cL,V().bv,g,_)}throw Og(new kg)}),M.cA=(function(e){var t=V().ch(this.g,e),n=V().a5(2,this.as,e),r=V().a5(3,this.at,e),i=V().a5(4,this.au,e),a=V().a5(5,this.av,e),o=V().a5(6,this.Z,e),s=V().a5(5,this.a3,e),c=V().a5(4,this.a2,e),l=V().a5(3,this.a1,e),u=V().a5(2,this.a0,e),d=V().ch(this.i,e);return new tw(t,this.ad,n,this.ae,r,this.af,i,this.ag,a,this.al,o,s,c,l,u,d,this.j)}),M.cT=(function(){return 11}),M.cS=(function(e){switch(e){case 0:return this.g;case 1:return this.as;case 2:return this.at;case 3:return this.au;case 4:return this.av;case 5:return this.Z;case 6:return this.a3;case 7:return this.a2;case 8:return this.a1;case 9:return this.a0;case 10:return this.i;default:throw new Wg(e)}}),M.e=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.al|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.Z.a.length?this.Z.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a3.a.length?this.a3.a[i].a[a].a[o].a[s].a[c]:a<this.a2.a.length?this.a2.a[a].a[o].a[s].a[c]:o<this.a1.a.length?this.a1.a[o].a[s].a[c]:s<this.a0.a.length?this.a0.a[s].a[c]:this.i.a[c]}if(t>=this.ag){var l=t-this.ag|0;return this.av.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}if(t>=this.af){var u=t-this.af|0;return this.au.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}if(t>=this.ae){var d=t-this.ae|0;return this.at.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}if(t>=this.ad){var f=t-this.ad|0;return this.as.a[f>>>5|0].a[31&f]}return this.g.a[t]}throw this.aK(t)}),M.cz=(function(e){return this.cA(e)}),new F().i(tw,`scala.collection.immutable.Vector6`,{gF:1,ae:1,af:1,a9:1,x:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,r:1,v:1,u:1,p:1,o:1,C:1,y:1,k:1,q:1,z:1,a:1,V:1});function nw(e,t){return e.b1=t,e}function rw(e){return nw(e,mh(new _h)),e}function iw(){this.b1=null}M=iw.prototype=new NS,M.constructor=iw,M.b9=(function(e){return jf(this,e)}),M.bb=(function(e){}),M.l=(function(){return Ey(new Oy,new bS(this))}),M.bp=(function(e){var t=this.b1.r();return t===e?0:t<e?-1:1}),M.bB=(function(){return`IndexedSeq`}),M.r=(function(){return this.b1.r()}),M.x=(function(){return this.b1.r()}),M.pQ=(function(e){var t=this.b1,n=``+Ea(e);return t.o+=n,this}),M.z=(function(){return this.b1.o}),M.o6=(function(e){if(e instanceof NC)this.b1.o5(e.bR);else if(e instanceof iw){var t=this.b1,n=e.b1;t.o=``+t.o+n}else{var r=e.x();if(r!==0){var i=this.b1;r>0&&i.r();for(var a=e.l();a.m();){var o=``+Ea(za(a.k()));i.o+=o}}}return this}),M.f=(function(){return this.b1.r()===0}),M.v=(function(e){return Ia(this.b1.od(e))}),M.e=(function(e){var t=e|0;return Ia(this.b1.od(t))}),M.g0=(function(e){return rw(new iw).o6(e)}),M.fZ=(function(e){return rw(new iw).o6(e)}),M.b2=(function(e){return this.pQ(za(e))}),M.ba=(function(){return this.b1.o}),M.bw=(function(){return kv()}),new F().i(iw,`scala.collection.mutable.StringBuilder`,{ci:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,E:1,G:1,L:1,aa:1,p:1,o:1,S:1,R:1,aG:1,a:1});function aw(e){var t=new sw().h6(e);e.c7=t.c7,e.dd=t.dd,e.gC=!1}function ow(e){e.gD=1+e.gD|0,e.gC&&aw(e)}function sw(){this.gD=0,this.c7=null,this.dd=null,this.gC=!1,this.c8=0,this.gD=0,this.c7=$(),this.dd=null,this.gC=!1,this.c8=0}M=sw.prototype=new $S,M.constructor=sw,M.cN=(function(e){return Py(this,e)}),M.bb=(function(e){}),M.l=(function(){return new Nv(this.c7.l(),new Am((()=>this.gD)))}),M.ec=(function(){return Mv()}),M.v=(function(e){return d_(this.c7,e)}),M.r=(function(){return this.c8}),M.x=(function(){return this.c8}),M.f=(function(){return this.c8===0}),M.pd=(function(){return this.gC=!this.f(),this.c7}),M.pY=(function(e){ow(this);var t=new GC(e,$());if(this.c8===0)this.c7=t;else{var n=this.dd;n===null&&Gu().cB(),n.ax=t}return this.dd=t,this.c8=1+this.c8|0,this}),M.h6=(function(e){var t=e.l();if(t.m()){var n=1,r=new GC(t.k(),$());for(this.c7=r;t.m();){var i=new GC(t.k(),$());r.ax=i,r=i,n=1+n|0}this.c8=n,this.dd=r}return this}),M.pO=(function(e){var t=e.l();if(t.m()){var n=new sw().h6(t);if(ow(this),this.c8===0)this.c7=n.c7;else{var r=this.dd;r===null&&Gu().cB(),r.ax=n.c7}this.dd=n.dd,this.c8=this.c8+n.c8|0}return this}),M.bB=(function(){return`ListBuffer`}),M.bw=(function(){return Mv()}),M.e=(function(e){var t=e|0;return d_(this.c7,t)}),M.ba=(function(){return this.pd()}),M.b2=(function(e){return this.pY(e)}),M.b9=(function(e){return this.pO(e)}),new F().i(sw,`scala.collection.mutable.ListBuffer`,{ch:1,aR:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,E:1,G:1,aw:1,aS:1,k:1,q:1,L:1,aa:1,a:1,V:1});function cw(e,t,n){return e.eW=0,e.d9=t,e.b8=n,e}function lw(e){return cw(e,new P(16),0),e}function uw(){this.eW=0,this.d9=null,this.b8=0}M=uw.prototype=new $S,M.constructor=uw,M.l=(function(){return this.sI().l()}),M.bp=(function(e){var t=this.b8;return t===e?0:t<e?-1:1}),M.cN=(function(e){return Py(this,e)}),M.x=(function(){return this.b8}),M.iy=(function(e){this.d9=hv().p6(this.d9,this.b8,e)}),M.bb=(function(e){e>this.b8&&e>=1&&this.iy(e)}),M.v=(function(e){var t=1+e|0;if(e<0)throw cu().iN(e,this.b8-1|0);if(t>this.b8)throw cu().iN(t-1|0,this.b8-1|0);return this.d9.a[e]}),M.r=(function(){return this.b8}),M.sI=(function(){return new CS(this,new Am((()=>this.eW)))}),M.ec=(function(){return hv()}),M.pV=(function(e){this.eW=1+this.eW|0;var t=1+this.b8|0;return this.d9.a.length<=(t-1|0)&&this.iy(t),this.b8=t,this.d9.a[t-1|0]=e,this}),M.o1=(function(e){if(e instanceof uw){var t=e.b8;t>0&&(this.eW=1+this.eW|0,this.iy(this.b8+t|0),kl().fV(e.d9,0,this.d9,this.b8,t),this.b8=this.b8+t|0)}else jf(this,e);return this}),M.bB=(function(){return`ArrayBuffer`}),M.bV=(function(e,t,n){var r=this.b8,i=gl().bW(e),a=n<r?n:r,o=t<0?i:i-t|0,s=o<a?o:a,c=s<0?0:s;return c>0&&kl().fV(this.d9,0,e,t,c),c}),M.e=(function(e){return this.v(e|0)}),M.bw=(function(){return hv()}),M.b2=(function(e){return this.pV(e)}),M.b9=(function(e){return this.o1(e)}),new F().i(uw,`scala.collection.mutable.ArrayBuffer`,{c4:1,aR:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,E:1,G:1,aw:1,aS:1,p:1,o:1,S:1,R:1,cg:1,k:1,q:1,a:1,V:1});function dw(e,t){return e.e2=t,e}function fw(e){return dw(e,[]),e}function pw(){this.e2=null}M=pw.prototype=new $S,M.constructor=pw,M.bb=(function(e){}),M.bB=(function(){return`IndexedSeq`}),M.l=(function(){return Ey(new Oy,new bS(this))}),M.bp=(function(e){var t=this.e2.length|0;return t===e?0:t<e?-1:1}),M.cN=(function(e){return Py(this,e)}),M.ec=(function(){return Bv()}),M.v=(function(e){return this.e2[e]}),M.r=(function(){return this.e2.length|0}),M.x=(function(){return this.e2.length|0}),M.cc=(function(){return`WrappedArray`}),M.ba=(function(){return this}),M.b2=(function(e){return this.e2.push(e),this}),M.e=(function(e){var t=e|0;return this.e2[t]}),M.bw=(function(){return Bv()}),new F().i(pw,`scala.scalajs.js.WrappedArray`,{hU:1,aR:1,K:1,n:1,i:1,b:1,c:1,h:1,g:1,f:1,e:1,j:1,l:1,d:1,m:1,H:1,B:1,F:1,N:1,M:1,E:1,G:1,aw:1,aS:1,q:1,k:1,R:1,p:1,o:1,S:1,cg:1,L:1,a:1}),pc(new(vy.r()).C([]));