var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:ee,getPrototypeOf:te}=Object,ne=globalThis,re=ne.trustedTypes,ie=re?re.emptyScript:``,ae=ne.reactiveElementPolyfillSupport,oe=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!d(e,t),le={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),ne.litPropertyMetadata??=new WeakMap;var ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=le){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(oe(`elementProperties`)))return;let e=te(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe(`properties`))){let e=this.properties,t=[...m(e),...ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ue.elementStyles=[],ue.shadowRootOptions={mode:`open`},ue[oe(`elementProperties`)]=new Map,ue[oe(`finalized`)]=new Map,ae?.({ReactiveElement:ue}),(ne.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const de=globalThis,fe=de.trustedTypes,pe=fe?fe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,me=`$lit$`,he=`lit$${Math.random().toFixed(9).slice(2)}$`,ge=`?`+he,_e=`<${ge}>`,ve=document,ye=()=>ve.createComment(``),be=e=>e===null||typeof e!=`object`&&typeof e!=`function`,xe=Array.isArray,Se=e=>xe(e)||typeof e?.[Symbol.iterator]==`function`,Ce=`[ 	
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Ee=/>/g,De=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Oe=/'/g,ke=/"/g,Ae=/^(?:script|style|textarea|title)$/i,je=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Me=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ne=new WeakMap,Pe=ve.createTreeWalker(ve,129);function Fe(e,t){if(!xe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return pe===void 0?t:pe.createHTML(t)}const Ie=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=we;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===we?c[1]===`!--`?o=Te:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=De):(Ae.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=De):o=Ee:o===De?c[0]===`>`?(o=i??we,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?De:c[3]===`"`?ke:Oe):o===ke||o===Oe?o=De:o===Te||o===Ee?o=we:(o=De,i=void 0);let d=o===De&&e[t+1].startsWith(`/>`)?` `:``;a+=o===we?n+_e:l>=0?(r.push(s),n.slice(0,l)+me+n.slice(l)+he+d):n+he+(l===-2?t:d)}return[Fe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Le=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ie(t,n);if(this.el=e.createElement(l,r),Pe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Pe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(me)){let t=u[o++],n=i.getAttribute(e).split(he),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?He:r[1]===`?`?Ue:r[1]===`@`?We:Ve}),i.removeAttribute(e)}else e.startsWith(he)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ae.test(i.tagName)){let e=i.textContent.split(he),t=e.length-1;if(t>0){i.textContent=fe?fe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ye()),Pe.nextNode(),c.push({type:2,index:++a});i.append(e[t],ye())}}}else if(i.nodeType===8)if(i.data===ge)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(he,e+1))!==-1;)c.push({type:7,index:a}),e+=he.length-1}a++}}static createElement(e,t){let n=ve.createElement(`template`);return n.innerHTML=e,n}};function Re(e,t,n=e,r){if(t===Me)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=be(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Re(e,i._$AS(e,t.values),i,r)),t}var ze=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ve).importNode(t,!0);Pe.currentNode=r;let i=Pe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Be(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ge(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Pe.nextNode(),a++)}return Pe.currentNode=ve,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Be=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Re(this,e,t),be(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Me&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(ve.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Le.createElement(Fe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new ze(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new Le(e)),t}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ye()),this.O(ye()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Re(this,e,t,0),a=!be(e)||e!==this._$AH&&e!==Me,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Re(this,r[n+o],t,o),s===Me&&(s=this._$AH[o]),a||=!be(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},He=class extends Ve{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ue=class extends Ve{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},We=class extends Ve{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Re(this,e,t,0)??h)===Me)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ge=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}};const Ke={M:me,P:he,A:ge,C:1,L:Ie,R:ze,D:Se,V:Re,I:Be,H:Ve,N:Ue,U:We,B:He,F:Ge},qe=de.litHtmlPolyfillSupport;qe?.(Le,Be),(de.litHtmlVersions??=[]).push(`3.3.1`);const Je=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Be(t.insertBefore(ye(),e),e,void 0,n??{})}return i._$AI(e),i},Ye=globalThis;var Xe=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Je(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Me}};Xe._$litElement$=!0,Xe.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:Xe});const Ze=Ye.litElementPolyfillSupport;Ze?.({LitElement:Xe}),(Ye.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qe=c`
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
`,$e=c`
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
`,et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,nt=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?tt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&et(t,n,i),i},rt=(e,t,n)=>t.has(e)||nt(`Cannot `+n),it=(e,t,n)=>(rt(e,t,`read from private field`),n?n.call(e):t.get(e)),at=(e,t,n)=>t.has(e)?nt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ot=(e,t,n,r)=>(rt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ct={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},lt=(e=ct,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?lt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ut(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const dt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ft(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return dt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return dt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=c`
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
`,mt=/;\s+$/;function ht(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function gt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(mt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var _t,vt=class extends Xe{constructor(){super(),at(this,_t,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[pt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){it(this,_t)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ot(this,_t,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=gt({property:ht(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=gt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};_t=new WeakMap,g([_()],vt.prototype,`dir`,2),g([_()],vt.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],vt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt=class extends vt{constructor(){super(...arguments),this.variant=`brand`,this.appearance=`accent`,this.pill=!1,this.attention=`none`}render(){return je`
      <span part="start">
        <slot name="start"></slot>
      </span>

      <span part="base badge" role="status">
        <slot></slot>
      </span>

      <span part="end">
        <slot name="end"></slot>
      </span>
    `}};yt.css=[Qe,$e],g([_({reflect:!0})],yt.prototype,`variant`,2),g([_({reflect:!0})],yt.prototype,`appearance`,2),g([_({type:Boolean,reflect:!0})],yt.prototype,`pill`,2),g([_({reflect:!0})],yt.prototype,`attention`,2),yt=g([st(`wa-badge`)],yt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=t({default:()=>yt}),xt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),St=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Ct=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),wt=class extends vt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new St))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Ct()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};wt.formAssociated=!0,g([_({reflect:!0})],wt.prototype,`name`,2),g([_({type:Boolean})],wt.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],wt.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],wt.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],wt.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],wt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tt={small:`s`,medium:`m`,large:`l`},Et=new Set;function Dt(e,t){t in Tt&&!Et.has(`${e}:${t}`)&&(Et.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Tt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ot=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},kt=c`
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
`,At=c`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function jt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Mt=new Set,Nt=new Map;let Pt,Ft=`ltr`,It=`en`;const Lt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Lt){let e=new MutationObserver(zt);Ft=document.documentElement.dir||`ltr`,It=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Rt(...e){e.map(e=>{let t=e.$code.toLowerCase();Nt.has(t)?Nt.set(t,Object.assign(Object.assign({},Nt.get(t)),e)):Nt.set(t,e),Pt||=e}),zt()}function zt(){Lt&&(Ft=document.documentElement.dir||`ltr`,It=document.documentElement.lang||navigator.language),[...Mt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Bt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Mt.add(this.host)}hostDisconnected(){Mt.delete(this.host)}dir(){return`${this.host.dir||Ft}`.toLowerCase()}lang(){let e=`${this.host.lang||It}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Pt?Pt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Nt.get(`${n}-${r}`),a=Nt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Pt&&Pt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Pt&&Pt[e])i=Pt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Vt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Rt(Vt);var Ht=Vt,Ut=class extends Bt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Rt(Ht);
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
*/const qt=Gt(class extends Kt{constructor(e){if(super(e),e.type!==Wt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Me}}),Jt=e=>e??h,Yt=Symbol.for(``),Xt=e=>{if(e?.r===Yt)return e?._$litStatic$},Zt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Yt}),Qt=new Map,$t=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Xt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Qt.get(e))===void 0&&(o.raw=o,Qt.set(e,t=o)),n=s}return e(t,...n)})(je);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends wt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ot(this,`[default]`,`start`,`end`),this.localize=new Ut(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,xt()]}handleSizeChange(){Dt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new St)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Zt`a`:Zt`button`;return $t`
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
    `}};v.shadowRootOptions={...wt.shadowRootOptions,delegatesFocus:!0},v.css=[At,Qe,kt],g([ft(`.button`)],v.prototype,`button`,2),g([ft(`slot:not([name])`)],v.prototype,`labelSlot`,2),g([ut()],v.prototype,`invalid`,2),g([ut()],v.prototype,`isIconButton`,2),g([_()],v.prototype,`title`,2),g([_({reflect:!0})],v.prototype,`variant`,2),g([_({reflect:!0})],v.prototype,`appearance`,2),g([_({reflect:!0})],v.prototype,`size`,2),g([jt(`size`)],v.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),g([_({type:Boolean})],v.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`pill`,2),g([_()],v.prototype,`type`,2),g([_({reflect:!0})],v.prototype,`name`,2),g([_({reflect:!0})],v.prototype,`value`,2),g([_({reflect:!0})],v.prototype,`href`,2),g([_()],v.prototype,`target`,2),g([_()],v.prototype,`rel`,2),g([_()],v.prototype,`download`,2),g([_({attribute:`formaction`})],v.prototype,`formAction`,2),g([_({attribute:`formenctype`})],v.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],v.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],v.prototype,`formTarget`,2),g([jt(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),g([jt(`href`)],v.prototype,`handleHrefChange`,1),g([jt(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=g([st(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var en=c`
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
`,tn=class extends vt{constructor(){super(...arguments),this.localize=new Ut(this)}render(){return je`
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
    `}};tn.css=en,tn=g([st(`wa-spinner`)],tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},rn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},an=c`
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
`,on=``,sn=``;function cn(){return on.replace(/\/$/,``)}function ln(e){sn=e}function un(){if(!sn){let e=document.querySelector(`[data-fa-kit-code]`);e&&ln(e.getAttribute(`data-fa-kit-code`)||``)}return sn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dn=`7.3.0`;function fn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function pn(e,t,n){let r=fn(e,t,n),i=cn();if(i)return`${i}/${r}/${e}.svg`;let a=un();return a.length>0?`https://ka-p.fontawesome.com/releases/v${dn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${dn}/svgs/${r}/${e}.svg`}var mn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>pn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function hn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var gn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},_n={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=gn[n][e]??gn.regular[e]??gn.regular[`circle-question`];return r?hn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},vn=`classic`,yn=[mn,_n],bn=new Set;function xn(e){bn.add(e)}function Sn(e){bn.delete(e)}function Cn(e){return yn.find(t=>t.name===e)}function wn(){return vn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Tn}=Ke,En=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=Symbol(),On=Symbol(),kn,An=new Map,y=class extends vt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=je`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Dn:On}catch{return On}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Dn;kn||=new DOMParser;let r=kn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Dn}catch{return Dn}}}connectedCallback(){super.connectedCallback(),xn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sn(this)}async getIconSource(){let e=Cn(this.library),t=this.family||wn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Cn(this.library):void 0;if(!e){this.svg=null;return}let r=An.get(e);r||(r=this.resolveIcon(e,n),An.set(e,r));let i=await r;if(i===On&&An.delete(e),e===(await this.getIconSource()).url){if(En(i)){this.svg=i;return}switch(i){case On:case Dn:this.svg=null,this.dispatchEvent(new nn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new rn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Cn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:je`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=an,g([ut()],y.prototype,`svg`,2),g([_({reflect:!0})],y.prototype,`name`,2),g([_({reflect:!0})],y.prototype,`family`,2),g([_({reflect:!0})],y.prototype,`variant`,2),g([_({reflect:!0})],y.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),g([_()],y.prototype,`src`,2),g([_()],y.prototype,`label`,2),g([_({reflect:!0})],y.prototype,`library`,2),g([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),g([_({type:String,reflect:!0})],y.prototype,`flip`,2),g([_({type:String,reflect:!0})],y.prototype,`animation`,2),g([jt(`label`)],y.prototype,`handleLabelChange`,1),g([jt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=g([st(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=t({default:()=>v}),b;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Mn;function x(e){this.c=e}b=x.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function Nn(e){switch(typeof e){case`string`:return Zd.l();case`number`:return Jn(e)?e<<24>>24===e?Bu.l():e<<16>>16===e?qu.l():Kd.l():Yn(e)?Gd.l():Wd.l();case`boolean`:return cu.l();case`undefined`:return so.l();default:return e instanceof M?Yd.l():e instanceof x?du.l():e&&e.$classData?e.$classData.l():null}}function Pn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Jn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Yn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof x?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.i0()}}function Fn(e,t){switch(typeof e){case`string`:return Xd(e,t);case`number`:return Hd(e,t);case`boolean`:return ou(e,t);case`undefined`:return io(e,t);default:return e&&e.$classData||e===null?e.n(t):e instanceof M?qd(e,t):e instanceof x?uu(Zn(e),t):$n.prototype.n.call(e,t)}}function In(e){switch(typeof e){case`string`:return J(e);case`number`:return Ud(e);case`boolean`:return su(e);case`undefined`:return ao(e);default:return e&&e.$classData||e===null?e.t():e instanceof M?Jd(e):e instanceof x?lu(Zn(e)):$n.prototype.t.call(e)}}function Ln(e){return e===void 0?`undefined`:e.toString()}function Rn(e,t){if(t===0)throw new zu(`/ by zero`);return e/t|0}function zn(e,t){if(t===0)throw new zu(`/ by zero`);return e%t|0}function Bn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Vn(e){return String.fromCharCode(e)}function Hn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Un=0,Wn=new WeakMap;function Gn(e){switch(typeof e){case`string`:return J(e);case`number`:return Ud(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=Wn.get(e);return r===void 0&&(r=Un+1|0,Un=r,Wn.set(e,r)),r}}function Kn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function qn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Xn(e){return new x(e)}Xn(0);function Zn(e){return e===null?0:e.c}function Qn(e){return e===null?Mn:e}function $n(){}b=$n.prototype,b.constructor=$n;function S(){}S.prototype=b,b.t=(function(){return Gn(this)}),b.n=(function(e){return this===e}),b.x=(function(){var e=this.t();return Pn(this)+`@`+(+(e>>>0)).toString(16)}),b.toString=(function(){return this.x()});function C(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=C.prototype=new S,b.constructor=C,b.a9=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.a2=(function(){return new C(this.a.slice())});function er(){}er.prototype=b;function tr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=tr.prototype=new S,b.constructor=tr,b.a9=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.a2=(function(){return new tr(this.a.slice())});function nr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}b=nr.prototype=new S,b.constructor=nr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new nr(this.a.slice())});function rr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}b=rr.prototype=new S,b.constructor=rr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new rr(this.a.slice())});function ir(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}b=ir.prototype=new S,b.constructor=ir,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new ir(this.a.slice())});function w(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}b=w.prototype=new S,b.constructor=w,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new w(this.a.slice())});function ar(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Mn}else this.a=e}b=ar.prototype=new S,b.constructor=ar,b.a9=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.a2=(function(){return new ar(this.a.slice())});function or(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}b=or.prototype=new S,b.constructor=or,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new or(this.a.slice())});function sr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}b=sr.prototype=new S,b.constructor=sr,b.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a2=(function(){return new sr(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=T.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new er;n.constructor=t,n.a9=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),n.a2=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===E});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new T().a(this),this.A}),b.l=(function(){return this.L||=new dl(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null});var E=new T;E.n={},E.E=`Ljava.lang.Object;`,E.F=(e=>!e.X),E.N=`java.lang.Object`,E.I=(e=>e!==null),E.A=new T().y(E,C,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),$n.prototype.$classData=E;var cr=new T().p(void 0,`V`,`void`,void 0,void 0);new T().p(!1,`Z`,`boolean`,tr,void 0);var lr=new T().p(0,`C`,`char`,nr,Uint16Array);new T().p(0,`B`,`byte`,rr,Int8Array),new T().p(0,`S`,`short`,ir,Int16Array),new T().p(0,`I`,`int`,w,Int32Array);var ur=new T().p(null,`J`,`long`,ar,void 0);new T().p(0,`F`,`float`,or,Float32Array),new T().p(0,`D`,`double`,sr,Float64Array);function dr(e){return Nn(e).cL()+`@`+Gn(e)}function fr(e){var t=e.cT;return t===void 0?dr(e):t}function pr(){hr=this,gr().hx(new K((e=>void 0)),Ao().er,!0)}b=pr.prototype=new S,b.constructor=pr;function mr(){}mr.prototype=b,b.hx=(function(e,t,n){return new Kl(e,n,t,this)}),new T().i(pr,`com.raquo.airstream.core.Observer$`,{bc:1});var hr;function gr(){return hr||=new pr,hr}function _r(e){this.c7=null,this.cU=null,this.c8=0,this.c7=e,this.cU=void 0;var t=Lr().bD();this.c8=t===void 0?1:1+t.c8|0,Cr().bH===-1||this.c8>Cr().bH?Lc().cQ(new Fd(this,Cr().bH)):Or().T?Or().az.push(this)|0:Lr().cF(this)}b=_r.prototype=new S,b.constructor=_r;function vr(){}vr.prototype=b;var yr=new T().i(_r,`com.raquo.airstream.core.Transaction`,{bf:1});function br(){this.bH=0,this.cV=null,Sr=this,this.bH=1e3,this.cV=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=br.prototype=new S,b.constructor=br;function xr(){}xr.prototype=b,b.f0=(function(e){try{e.c7.l(e);var t=e.cU;if(t!==void 0)for(;t.i4();)t.hU().i8(e)}catch(e){var n=e instanceof nc?e:new Z(e);Lc().cQ(n)}}),new T().i(br,`com.raquo.airstream.core.Transaction$`,{bg:1});var Sr;function Cr(){return Sr||=new br,Sr}function wr(e){e.bI.length|0?new _r(new K((t=>{for(;(e.bI.length|0)>0;){var n=e.bI.shift();try{n.l(t)}catch(e){var r=e instanceof nc?e:new Z(e);Lc().cQ(r)}}for(;(e.az.length|0)>0;){var i=e.az.shift();Lr().cF(i)}}))):(e.az.length|0)>0&&new _r(new K((t=>{for(;(e.az.length|0)>0;)Lr().cF(e.az.shift())})))}function Tr(){this.T=!1,this.bI=null,this.az=null,Dr=this,this.T=!1,this.bI=ci().ar(I().b(new(P.r()).C([]))),this.az=ci().ar(I().b(new(yr.r()).C([])))}b=Tr.prototype=new S,b.constructor=Tr;function Er(){}Er.prototype=b,new T().i(Tr,`com.raquo.airstream.core.Transaction$onStart$`,{bh:1});var Dr;function Or(){return Dr||=new Tr,Dr}function kr(e,t){return e.aA.get(t)}function Ar(e,t){e.bJ.unshift(t)}function jr(e){return e.bJ.shift()}function Mr(e,t,n){var r=kr(e,t),i=r===void 0,a=r===void 0?ci().ar(I().b(new(yr.r()).C([]))):r;a.push(n),i&&e.aA.set(t,a)}function Nr(e,t){var n=kr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aA.delete(t),i}}function Pr(){this.bJ=null,this.aA=null,Ir=this,this.bJ=ci().ar(I().b(new(yr.r()).C([]))),this.aA=new Map}b=Pr.prototype=new S,b.constructor=Pr;function Fr(){}Fr.prototype=b,b.cF=(function(e){var t=this.bD();t===void 0?(Ar(this,e),Cr().f0(e),this.ge(e)):Mr(this,t,e)}),b.ge=(function(e){for(var t=e;;){var n=this.bD(),r=t;if(!(n!==void 0&&F().O(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.h8(t),t.c7=Cr().cV;var i=this.bD();if(F().O(i,void 0))if((this.aA.size|0)>0){var a=new Oc(0);throw this.aA.forEach((e=>((t,n)=>{e.bi=e.bi+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.bi+` children for `+(this.aA.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Cr().f0(i),t=i}}),b.h8=(function(e){for(var t=e;;){var n=Nr(this,t);if(F().O(n,void 0)){jr(this);var r=this.bD();if(!F().O(r,void 0))t=r;else return}else{Ar(this,n);return}}}),b.bD=(function(){return this.bJ[0]}),new T().i(Pr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bi:1});var Ir;function Lr(){return Ir||=new Pr,Ir}function Rr(e,t){var n=e.aa.indexOf(t)|0;if(n!==-1)e.aa.splice(n,1),e.J.i()||t.fk();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function zr(e){for(;(e.bK.length|0)>0;)Rr(e,e.bK.shift())}function Br(e){this.cW=null,this.aa=null,this.aR=!1,this.bK=null,this.J=null,this.aS=0,this.cW=e,this.aa=ci().ar(I().b(new(Wr.r()).C([]))),this.aR=!0,this.bK=ci().ar(I().b(new(Wr.r()).C([]))),this.J=Y(),this.aS=0}b=Br.prototype=new S,b.constructor=Br;function Vr(){}Vr.prototype=b,b.eK=(function(){if(this.J.i()){var e=Or(),t=(()=>{var e=new us(this.cW);this.J=new X(e),this.aR=!1,this.aS=0;for(var t=0,n=this.aa.length|0;t<n;){var r=t+this.aS|0;this.aa[r].fj(e),t=1+t|0}zr(this),this.aR=!0,this.aS=0});if(Or(),e.T)t();else{e.T=!0;try{t()}finally{e.T=!1,wr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),b.g9=(function(){if(this.J.i())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aR=!1;for(var e=this.aa,t=0,n=e.length|0;t<n;)e[t].fk(),t=1+t|0;zr(this);var r=this.J;r.i()||r.C().gO(),zr(this),this.aR=!0,this.J=Y()}),b.fR=(function(e,t){t?(this.aS=1+this.aS|0,this.aa.unshift(e)):this.aa.push(e);var n=this.J;if(!n.i()){var r=n.C();e.fj(r)}}),b.hd=(function(e){this.aR?Rr(this,e):this.bK.push(e)}),new T().i(Br,`com.raquo.airstream.ownership.DynamicOwner`,{bj:1});function Hr(e,t,n){this.bL=null,this.cX=null,this.bM=null,this.bL=e,this.cX=t,this.bM=Y(),e.fR(this,n)}b=Hr.prototype=new S,b.constructor=Hr;function Ur(){}Ur.prototype=b,b.c4=(function(){this.bL.hd(this)}),b.fj=(function(e){var t=Or(),n=(()=>{this.bM=this.cX.l(e)});if(Or(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,wr(t)}}}),b.fk=(function(){var e=this.bM;e.i()||(e.C().c4(),this.bM=Y())});var Wr=new T().i(Hr,`com.raquo.airstream.ownership.DynamicSubscription`,{bk:1});function Gr(){}b=Gr.prototype=new S,b.constructor=Gr;function Kr(){}Kr.prototype=b,b.hv=(function(e,t,n){return new Hr(e,new K((e=>new X(t.l(e)))),n)}),b.hn=(function(e,t,n){return new Hr(e,new K((e=>(t.l(e),Y()))),n)}),new T().i(Gr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bl:1});var qr;function Jr(){return qr||=new Gr,qr}function Yr(e){e.aT=ci().ar(I().b(new(ni.r()).C([])))}function Xr(e){for(var t=e.aT,n=0,r=t.length|0;n<r;)$r(t[n]),n=1+n|0;e.aT.length=0}function Zr(e,t){var n=e.aT.indexOf(t)|0;if(n!==-1)e.aT.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function Qr(e,t){e.aT.push(t)}function $r(e){if(!e.ca)e.cZ.aO(),e.ca=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function ei(e,t){this.d0=null,this.cZ=null,this.ca=!1,this.d0=e,this.cZ=t,this.ca=!1,e.h7(this)}b=ei.prototype=new S,b.constructor=ei;function ti(){}ti.prototype=b,b.c4=(function(){$r(this),Zr(this.d0,this)});var ni=new T().i(ei,`com.raquo.airstream.ownership.Subscription`,{bo:1});function ri(e,t){this.d1=null,this.d2=null,this.ab=null,this.aB=!1,this.d1=e,this.d2=t,this.ab=Y(),this.aB=!1}b=ri.prototype=new S,b.constructor=ri;function ii(){}ii.prototype=b,b.gL=(function(){var e=this.ab;return!e.i()&&!e.C().bL.J.i()}),b.hi=(function(e){if(this.aB)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ab;if(t.i())var n=!1;else var n=e===t.C().bL;if(!n){this.gL()&&!e.J.i()&&(this.aB=!0);var r=this.ab;r.i()||(r.C().c4(),this.ab=Y()),this.ab=new X(Jr().hv(e,new K((e=>(this.aB||this.d1.aO(),new ei(e,new wu((()=>{this.aB||this.d2.aO()})))))),!1)),this.aB=!1}}),b.g3=(function(){if(this.aB)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ab;e.i()||e.C().c4(),this.ab=Y()}),new T().i(ri,`com.raquo.airstream.ownership.TransferableSubscription`,{bp:1});function ai(){}b=ai.prototype=new S,b.constructor=ai;function oi(){}oi.prototype=b,b.ar=(function(e){return[...rs().ht(e)]}),new T().i(ai,`com.raquo.ew.JsArray$`,{bq:1});var si;function ci(){return si||=new ai,si}function li(){}b=li.prototype=new S,b.constructor=li;function ui(){}ui.prototype=b,b.gv=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new T().i(li,`com.raquo.ew.JsArray$RichJsArray$`,{br:1});var di;function fi(){return di||=new li,di}function pi(){this.d3=null,hi=this,document.createElement(`template`),this.g7(G().d.ho().hp()),this.d3=RegExp(` `,`g`)}b=pi.prototype=new S,b.constructor=pi;function mi(){}mi.prototype=b,b.fV=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof nc?e:new Z(e);if(n instanceof Z&&n.V instanceof DOMException)return!1;throw n instanceof Z?n.V:n}}),b.gM=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().O(t,r))return!0;n=r}}),b.g6=(function(e){return document.createElement(e.cM())}),b.gC=(function(e,t){var n=this.gD(e,t);return n===void 0?void 0:t.aU.c0(n)}),b.gD=(function(e,t){var n=e.a4.getAttributeNS(null,t.ac);return n===null?void 0:n}),b.fr=(function(e,t,n){this.hh(e,t,t.aU.c3(n))}),b.hh=(function(e,t,n){n===null?this.hc(e,t):e.a4.setAttribute(t.ac,n)}),b.hc=(function(e,t){e.a4.removeAttribute(t.ac)}),b.fs=(function(e,t,n){var r=e.a4,i=t.ad,a=t.ae,o=n===null?null:n;o===null?(a.a3(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a3(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.g7=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dO)}),b.gG=(function(e,t){var n=this.gH(e,t);return n===void 0?void 0:t.ce.c0(n)}),b.gH=(function(e,t){var n=e.cO(),r=t.bO,i=n.getAttributeNS(r.i()?null:r.C(),t.cf);return i===null?void 0:i}),b.hj=(function(e,t,n){this.hk(e,t,t.ce.c3(n))}),b.hk=(function(e,t,n){if(n===null)this.he(e,t);else{var r=t.bO;if(r.i())e.cO().setAttribute(t.bN,n);else{var i=r.C();e.cO().setAttributeNS(i,t.bN,n)}}}),b.he=(function(e,t){var n=e.cO(),r=t.bO;n.removeAttributeNS(r.i()?null:r.C(),t.cf)}),b.g8=(function(e){return document.createTextNode(e)}),b.gb=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Dm(this.ga(r),n);r=i,n=a}}),b.ga=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.d3,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new T().i(pi,`com.raquo.laminar.DomApi$`,{bs:1});var hi;function D(){return hi||=new pi,hi}function gi(e,t,n){this.cc=null,this.d4=null,this.cb=null,this.cc=e,this.d4=t,this.cb=n}b=gi.prototype=new S,b.constructor=gi;function _i(){}_i.prototype=b,b.a3=(function(e){this.cc===null?this.cb===null?Po().gw(this.d4,e):fi().gv(this.cb,Ll().gz(e)):this.cc.a3(e)}),new T().i(gi,`com.raquo.laminar.Seq`,{bt:1});function vi(){}b=vi.prototype=new S,b.constructor=vi;function yi(){}yi.prototype=b,new T().i(vi,`com.raquo.laminar.Seq$`,{bu:1});var bi;function xi(){return bi||=new vi,bi}function Si(e){gr(),Lc()}function Ci(e){e.fw=qi()}function wi(e){Ti(e,new K((e=>{e.dD.a4.focus()})))}function Ti(e,t){return new Es(new K((e=>{var n=new Ec(!e.aV.J.i()),r=new K((e=>{n.bY?n.bY=!1:t.l(e)}));Jr().hn(e.aV,new K((e=>(t=>{r.l(new Hi(e,t))}))(e)),!1)})),qi())}function Ei(){this.cd=null,this.dn=null,Oi=this,this.cd=new ms(ki()),new ms(ki()),new ms(ki()),this.dn=new fs}b=Ei.prototype=new S,b.constructor=Ei;function Di(){}Di.prototype=b,new T().i(Ei,`com.raquo.laminar.codecs.package$`,{bC:1});var Oi;function ki(){return Oi||=new Ei,Oi}function Ai(e){e.fx=ji(e,`class`,` `)}function ji(e,t,n){var r=ys(new bs,t,ki().cd);return new _s(r.ac,new K((e=>{var t=D().gC(e,r);return t===void 0?``:t})),new Du(((e,t)=>{D().fr(e,r,t)})),n)}function Mi(e){e.fv=Ni(e,`class`,` `)}function Ni(e,t,n){var r=new Ss(t,ki().cd,Y());return new _s(r.bN,new K((e=>{var t=D().gG(e,r);return t===void 0?``:t})),new Du(((e,t)=>{D().hj(e,r,t)})),n)}function Pi(e,t){this.dC=null,this.dB=null,this.dC=e,this.dB=t}b=Pi.prototype=new S,b.constructor=Pi;function Fi(){}Fi.prototype=b,b.o=(function(e){return new zc(this.dC,this.dB.l(e),new ku(((e,t,n)=>{D().fs(e,t,n)})))}),new T().i(Pi,`com.raquo.laminar.keys.DerivedStyleProp`,{c2:1});function Ii(){}b=Ii.prototype=new S,b.constructor=Ii;function Li(){}Li.prototype=b;function Ri(){this.fy=null,this.fz=null,this.fA=null,this.fB=null,this.fy=`http://www.w3.org/2000/svg`,this.fz=`http://www.w3.org/1999/xlink`,this.fA=`http://www.w3.org/XML/1998/namespace`,this.fB=`http://www.w3.org/2000/xmlns/`}b=Ri.prototype=new S,b.constructor=Ri;function zi(){}zi.prototype=b,b.gS=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new ed(e)}}),new T().i(Ri,`com.raquo.laminar.keys.SvgAttr$`,{c4:1});var Bi;function Vi(){return Bi||=new Ri,Bi}function Hi(e,t){this.dD=null,this.dD=e}b=Hi.prototype=new S,b.constructor=Hi;function Ui(){}Ui.prototype=b,new T().i(Hi,`com.raquo.laminar.lifecycle.MountContext`,{c5:1});var O=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{W:1});function Wi(){this.fC=null,Ki=this,this.fC=new ws}b=Wi.prototype=new S,b.constructor=Wi;function Gi(){}Gi.prototype=b,new T().i(Wi,`com.raquo.laminar.modifiers.Modifier$`,{c7:1});var Ki;function qi(){return Ki||=new Wi,Ki}function Ji(){this.g=null,Xi=this,this.g=new Ms(new K((e=>e)),k()),new Ms(new K((e=>``+(e|0))),k()),new Ms(new K((e=>``+ +e)),k()),new Ms(new K((e=>``+!!e)),k()),new Ms(new K((e=>e.hs())),k())}b=Ji.prototype=new S,b.constructor=Ji;function Yi(){}Yi.prototype=b,new T().i(Ji,`com.raquo.laminar.modifiers.RenderableText$`,{cd:1});var Xi;function k(){return Xi||=new Ji,Xi}function Zi(){}b=Zi.prototype=new S,b.constructor=Zi;function Qi(){}Qi.prototype=b,b.bZ=(function(e,t,n){var r=new X(e);t.fu(r),n!==void 0&&n.i6(e,t);var i=D().fV(e.bF(),t.bF());return i&&t.ft(r),i}),new T().i(Zi,`com.raquo.laminar.nodes.ParentNode$`,{cg:1});var $i;function ea(){return $i||=new Zi,$i}function ta(){ra=this,ci().ar(I().hz(new w(new Int32Array([0]))))}b=ta.prototype=new S,b.constructor=ta;function na(){}na.prototype=b,b.fO=(function(){return new K((e=>void 0))}),new T().i(ta,`com.raquo.laminar.tags.CustomHtmlTag$`,{cm:1});var ra;function ia(){return ra||=new ta,ra}function aa(){}b=aa.prototype=new S,b.constructor=aa;function oa(){}oa.prototype=b,b.b1=(function(e){return G().d.f3().cH(I().b(new(O.r()).C([G().d.f2().fd(),G().d.gt().g4(),G().d.fh().aw().o(8),Rc(G().d,e,js())])))}),new T().i(aa,`doc.ExampleGroups$package$`,{co:1});var sa;function ca(){return sa||=new aa,sa}function la(){}b=la.prototype=new S,b.constructor=la;function ua(){}ua.prototype=b,b.W=(function(e){return G().d.f3().cH(I().b(new(O.r()).C([G().d.f2().fd(),G().d.gu().hy(),G().d.fS().g2(),G().d.fh().aw().o(16),Rc(G().d,e,js())])))}),new T().i(la,`doc.Examples$package$`,{cp:1});var da;function fa(){return da||=new la,da}function pa(){}b=pa.prototype=new S,b.constructor=pa;function ma(){}ma.prototype=b,b.fT=(function(){ga().gk(),ga().gl(),ga().gm(),ga().gn(),ga().go(),ga().gp(),ga().gq()}),b.gk=(function(){var e=document.querySelector(`#example1`);gc().aN(e).i()||(G(),new Vc(e,B().j(I().b(new(P.r()).C([])),I().b(new(O.r()).C([z(G().d,`Badge`,k().g)])))))}),b.gl=(function(){var e=document.querySelector(`#example2`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().ax()))])),I().b(new(O.r()).C([z(G().d,`Success`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().as()))])),I().b(new(O.r()).C([z(G().d,`Neutral`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a8()))])),I().b(new(O.r()).C([z(G().d,`Warning`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a6()))])),I().b(new(O.r()).C([z(G().d,`Danger`,k().g)])))])))])))))}),b.gm=(function(){var e=document.querySelector(`#example3`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.A().bk())),new W((e=>e.m().as()))])),I().b(new(O.r()).C([z(G().d,`Accent`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bx())),new W((e=>e.m().as()))])),I().b(new(O.r()).C([z(G().d,`Filled + Outlined`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bw())),new W((e=>e.m().as()))])),I().b(new(O.r()).C([z(G().d,`Filled`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bC())),new W((e=>e.m().as()))])),I().b(new(O.r()).C([z(G().d,`Outlined`,k().g)])))]))),fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.A().bk())),new W((e=>e.m().N()))])),I().b(new(O.r()).C([z(G().d,`Accent`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bx())),new W((e=>e.m().N()))])),I().b(new(O.r()).C([z(G().d,`Filled + Outlined`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bw())),new W((e=>e.m().N()))])),I().b(new(O.r()).C([z(G().d,`Filled`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bC())),new W((e=>e.m().N()))])),I().b(new(O.r()).C([z(G().d,`Outlined`,k().g)])))]))),fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.A().bk())),new W((e=>e.m().ax()))])),I().b(new(O.r()).C([z(G().d,`Accent`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bx())),new W((e=>e.m().ax()))])),I().b(new(O.r()).C([z(G().d,`Filled + Outlined`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bw())),new W((e=>e.m().ax()))])),I().b(new(O.r()).C([z(G().d,`Filled`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bC())),new W((e=>e.m().ax()))])),I().b(new(O.r()).C([z(G().d,`Outlined`,k().g)])))]))),fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.A().bk())),new W((e=>e.m().a8()))])),I().b(new(O.r()).C([z(G().d,`Accent`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bx())),new W((e=>e.m().a8()))])),I().b(new(O.r()).C([z(G().d,`Filled + Outlined`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bw())),new W((e=>e.m().a8()))])),I().b(new(O.r()).C([z(G().d,`Filled`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bC())),new W((e=>e.m().a8()))])),I().b(new(O.r()).C([z(G().d,`Outlined`,k().g)])))]))),fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.A().bk())),new W((e=>e.m().a6()))])),I().b(new(O.r()).C([z(G().d,`Accent`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bx())),new W((e=>e.m().a6()))])),I().b(new(O.r()).C([z(G().d,`Filled + Outlined`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bw())),new W((e=>e.m().a6()))])),I().b(new(O.r()).C([z(G().d,`Filled`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.A().bC())),new W((e=>e.m().a6()))])),I().b(new(O.r()).C([z(G().d,`Outlined`,k().g)])))])))])))))}),b.gn=(function(){var e=document.querySelector(`#example4`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([G().d.by().aw().o(12),z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([G().d.by().aw().o(14),z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([G().d.by().aw().o(16),z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([G().d.by().aw().o(18),z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().N()))])),I().b(new(O.r()).C([G().d.by().aw().o(20),z(G().d,`Brand`,k().g)])))])))])))))}),b.go=(function(){var e=document.querySelector(`#example5`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.m().N())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`Brand`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().ax())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`Success`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().as())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`Neutral`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a8())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`Warning`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a6())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`Danger`,k().g)])))])))])))))}),b.gp=(function(){var e=document.querySelector(`#example6`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.m().N())),new W((e=>e.a1().bE())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().ax())),new W((e=>e.a1().bE())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().as())),new W((e=>e.a1().bE())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a8())),new W((e=>e.a1().bE())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a6())),new W((e=>e.a1().bE())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)])))]))),fa().W(I().b(new(q.r()).C([B().j(I().b(new(P.r()).C([new W((e=>e.m().N())),new W((e=>e.a1().bv())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().ax())),new W((e=>e.a1().bv())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().as())),new W((e=>e.a1().bv())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a8())),new W((e=>e.a1().bv())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)]))),B().j(I().b(new(P.r()).C([new W((e=>e.m().a6())),new W((e=>e.a1().bv())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`1`,k().g)])))])))])))))}),b.gq=(function(){var e=document.querySelector(`#example7`);gc().aN(e).i()||(G(),new Vc(e,ca().b1(I().b(new(q.r()).C([fa().W(I().b(new(q.r()).C([Zc().j(I().b(new(P.r()).C([])),I().b(new(O.r()).C([z(G().d,`Requests`,k().g),B().j(I().b(new(P.r()).C([new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`30`,k().g)])))]))),Zc().j(I().b(new(P.r()).C([])),I().b(new(O.r()).C([z(G().d,`Warnings`,k().g),B().j(I().b(new(P.r()).C([new W((e=>e.m().a8())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`8`,k().g)])))]))),Zc().j(I().b(new(P.r()).C([])),I().b(new(O.r()).C([z(G().d,`Errors`,k().g),B().j(I().b(new(P.r()).C([new W((e=>e.m().a6())),new W((e=>e.D().o(!0)))])),I().b(new(O.r()).C([z(G().d,`6`,k().g)])))])))])))])))))}),new T().i(pa,`examples.badge.Main$package$`,{cq:1});var ha;function ga(){return ha||=new pa,ha}function _a(e){try{ga().fT()}catch(e){throw e}}function va(){this.fE=!1,this.b9=null,this.bT=null,this.ej=null,this.cl=!1,this.fD=0,this.fG=0,this.fF=null,ba=this,this.fE=!0,this.b9=new ArrayBuffer(8),this.bT=new Int32Array(this.b9,0,2),new Float32Array(this.b9,0,2),this.ej=new Float64Array(this.b9,0,1),this.bT[0]=16909060,this.cl=(new Int8Array(this.b9,0,8)[0]|0)==1,this.fD=this.cl?0:1,this.fG=this.cl?1:0,this.fF=null}b=va.prototype=new S,b.constructor=va;function ya(){}ya.prototype=b,b.cN=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.ej[0]=e,(this.bT[0]|0)^(this.bT[1]|0))}),new T().i(va,`java.lang.FloatingPointBits$`,{cE:1});var ba;function xa(){return ba||=new va,ba}function Sa(e,t){for(var n=A().Z(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ca(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Js(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Js(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Xs.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Ca(e,t){var n=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().Z(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().Z(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[wa(e,c[1]),ja(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[wa(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[wa(e,d[1]),`<clinit>`]}function wa(e,t){var n=Ea(e);if(ro().ep.call(n,t))var r=Ea(e)[t];else var r=Ha(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ta(e){if(!((1&e.P)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cn=t,e.P=(1|e.P)<<24>>24}return e.cn}function Ea(e){return(1&e.P)<<24>>24?e.cn:Ta(e)}function Da(e){if(!((2&e.P)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.co=t,e.P=(2|e.P)<<24>>24}return e.co}function Oa(e){return(2&e.P)<<24>>24?e.co:Da(e)}function ka(e){return(4&e.P)<<24>>24||(e.cm=Object.keys(Oa(e)),e.P=(4|e.P)<<24>>24),e.cm}function Aa(e){return(4&e.P)<<24>>24?e.cm:ka(e)}function ja(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ma(e,t){return t?t.arguments&&t.stack?Na(e,t):t.stack&&t.sourceURL?Ia(e,t):t.stack&&t.number?Fa(e,t):t.stack&&t.fileName?Pa(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?La(e,t):Ra(e,t):La(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?za(e,t):Ba(e,t):t.stack&&!t.fileName?Na(e,t):Va(e,t):[]}function Na(e,t){return(t.stack+`
`).replace(A().Z(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().H(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().H(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().H(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().H(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Pa(e,t){return t.stack.replace(A().H(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().H(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Fa(e,t){return t.stack.replace(A().H(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().H(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().H(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ia(e,t){return t.stack.replace(A().H(`\\[native code\\]\\n`,`m`),``).replace(A().H(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().H(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function La(e,t){for(var n=A().H(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Ra(e,t){for(var n=A().H(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function za(e,t){for(var n=A().Z(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ba(e,t){for(var n=A().Z(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().Z(`<anonymous function: (\\S+)>`),`$1`).replace(A().Z(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Va(e,t){return[]}function Ha(e,t,n){for(;;)if(t<(Aa(e).length|0)){var r=Aa(e)[t];if(n.startsWith(r))return``+Oa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ua(){this.cn=null,this.co=null,this.cm=null,this.P=0}b=Ua.prototype=new S,b.constructor=Ua;function Wa(){}Wa.prototype=b,b.gr=(function(e){return Sa(this,Ma(this,e))}),new T().i(Ua,`java.lang.StackTrace$`,{cL:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(){}b=qa.prototype=new S,b.constructor=qa;function Ja(){}Ja.prototype=b,b.Z=(function(e){return new RegExp(e)}),b.H=(function(e,t){return new RegExp(e,t)}),new T().i(qa,`java.lang.StackTrace$StringRE$`,{cM:1});var Ya;function A(){return Ya||=new qa,Ya}function Xa(){this.el=null,this.fH=null,Qa=this,this.el=new ep(!1),this.fH=new ep(!0)}b=Xa.prototype=new S,b.constructor=Xa;function Za(){}Za.prototype=b,new T().i(Xa,`java.lang.System$Streams$`,{cR:1});var Qa;function $a(){return Qa||=new Xa,Qa}function eo(){this.ep=null,no=this,this.ep=Object.prototype.hasOwnProperty}b=eo.prototype=new S,b.constructor=eo;function to(){}to.prototype=b,new T().i(eo,`java.lang.Utils$Cache$`,{cT:1});var no;function ro(){return no||=new eo,no}function io(e,t){return e===t}function ao(e){return 0}function oo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.at)}var so=new T().i(0,`java.lang.Void`,{at:1},(e=>e===void 0));function co(e,t){throw new Vu(`argument type mismatch`)}function lo(){}b=lo.prototype=new S,b.constructor=lo;function uo(){}uo.prototype=b,b.b4=(function(e){return e instanceof C||e instanceof tr||e instanceof nr||e instanceof rr||e instanceof ir||e instanceof w||e instanceof ar||e instanceof or||e instanceof sr?e.a.length:co(this,e)}),new T().i(lo,`java.lang.reflect.Array$`,{cU:1});var fo;function po(){return fo||=new lo,fo}function mo(){}b=mo.prototype=new S,b.constructor=mo;function ho(){}ho.prototype=b,b.f9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.e,s=a.f,c=r,l=t.a[c],u=l.e,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),b.f8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fa=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),b.f7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new T().i(mo,`java.util.Arrays$`,{cV:1});var go;function j(){return go||=new mo,go}function M(e,t){this.e=0,this.f=0,this.e=e,this.f=t}b=M.prototype=new S,b.constructor=M;function _o(){}_o.prototype=b,b.n=(function(e){return e instanceof M&&this.e===e.e&&this.f===e.f}),b.t=(function(){return this.e^this.f}),b.x=(function(){return N().fo(this.e,this.f)}),b.ib=(function(){return this.e}),b.ia=(function(){return N().fn(this.e,this.f)}),b.i9=(function(){return N().bB(this.e,this.f)}),b.hR=(function(){return this.e<<24>>24}),b.i7=(function(){return this.e<<16>>16}),b.i1=(function(){return this.e}),b.i2=(function(){return this}),b.hX=(function(){return N().fn(this.e,this.f)}),b.hV=(function(){return N().bB(this.e,this.f)}),b.hT=(function(e){return N().fl(this.e,this.f,e.e,e.f)}),b.hS=(function(e){return N().fl(this.e,this.f,e.e,e.f)}),b.hW=(function(e){return this.e===e.e&&this.f===e.f}),b.i5=(function(e){return!(this.e===e.e&&this.f===e.f)}),b.hJ=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<(-2147483648^e.e):t<n}),b.hK=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<=(-2147483648^e.e):t<n}),b.hF=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>(-2147483648^e.e):t>n}),b.hG=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>=(-2147483648^e.e):t>n}),b.id=(function(){return new M(~this.e,~this.f)}),b.hD=(function(e){return new M(this.e|e.e,this.f|e.f)}),b.hC=(function(e){return new M(this.e&e.e,this.f&e.f)}),b.hQ=(function(e){return new M(this.e^e.e,this.f^e.f)}),b.hL=(function(e){var t=this.e;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),b.hI=(function(e){var t=this.f;return new M(32&e?t>>>e|0:this.e>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),b.hH=(function(e){var t=this.f;return new M(32&e?t>>e:this.e>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),b.ic=(function(){var e=this.e,t=this.f;return new M(-e|0,e===0?-t|0:~t)}),b.hO=(function(e){var t=this.e,n=this.f,r=e.f,i=t+e.e|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),b.hM=(function(e){var t=this.e,n=this.f,r=e.f,i=t-e.e|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),b.hP=(function(e){var t=this.e,n=e.e,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),b.hE=(function(e){var t=N();return new M(t.gd(this.e,this.f,e.e,e.f),t.v)}),b.hN=(function(e){var t=N();return new M(t.hb(this.e,this.f,e.e,e.f),t.v)}),new T().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{au:1});function vo(e,t,n){return-2097152&n?xo(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function yo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.v=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.v=0,n>>>o|0}else return xo(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.v=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.v=s/4294967296|0,s|0}}function bo(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.v=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.v=n&(-1+i|0),t):xo(e,t,n,r,i,1)|0;if(-2097152&i)return e.v=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.v=a/4294967296|0,a|0}function xo(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.v=ee,m;if(a===1)return e.v=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function So(){this.v=0}b=So.prototype=new S,b.constructor=So;function Co(){}Co.prototype=b,b.fo=(function(e,t){return t===e>>31?``+e:t<0?`-`+vo(this,-e|0,e===0?-t|0:~t):vo(this,e,t)}),b.bB=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),b.fn=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),b.hZ=(function(e){return new M(e,e>>31)}),b.hY=(function(e){return new M(this.fm(e),this.v)}),b.fm=(function(e){if(e<-0x8000000000000000)return this.v=-2147483648,0;if(e>=0x8000000000000000)return this.v=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.v=e<0&&t!==0?-1+n|0:n,t}),b.fl=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),b.gd=(function(e,t,n,r){if((n|r)===0)throw new zu(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.v=0,-2147483648;var i=Rn(e,n);return this.v=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=-1,-1;else return this.v=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=yo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.v;return this.v=l===0?-u|0:~u,-l|0}}),b.hb=(function(e,t,n,r){if((n|r)===0)throw new zu(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=zn(e,n);return this.v=i>>31,i}else return this.v=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=0,0;else return this.v=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=bo(this,a,o,s,c);if(t<0){var u=this.v;return this.v=l===0?-u|0:~u,-l|0}else return l}}),new T().i(So,`org.scalajs.linker.runtime.RuntimeLong$`,{cX:1});var wo;function N(){return wo||=new So,wo}var P=new T().i(1,`scala.Function1`,{e:1});function To(){}b=To.prototype=new S,b.constructor=To;function Eo(){}Eo.prototype=b;function Do(){this.es=null,this.er=null,ko=this,this.es=new W((e=>Ao().es)),this.er=new hu}b=Do.prototype=new S,b.constructor=Do;function Oo(){}Oo.prototype=b,new T().i(Do,`scala.PartialFunction$`,{d7:1});var ko;function Ao(){return ko||=new Do,ko}function jo(){this.ev=null,No=this,this.ev=new W((e=>Po().ev))}b=jo.prototype=new S,b.constructor=jo;function Mo(){}Mo.prototype=b,b.gw=(function(e,t){var n=po().b4(e),r=0;if(e instanceof C)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof w)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof nr)for(;r<n;)t.l(Xn(e.a[r])),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.l(e.a[r]),r=1+r|0;else if(e instanceof tr)for(;r<n;)t.l(e.a[r]),r=1+r|0;else throw new ed(e)}),new T().i(jo,`scala.collection.ArrayOps$`,{dd:1});var No;function Po(){return No||=new jo,No}function Fo(e,t){for(var n=e.r();n.w();)t.l(n.k())}function Io(e,t,n,r){return e.E()===0?``+t+r:e.bl(Pm(new Fm),t,n,r).M.u}function Lo(e,t,n,r,i){var a=t.M;n.length!==0&&(a.u=``+a.u+n);var o=e.r();if(o.w()){var s=o.k();for(a.u=``+a.u+s;o.w();){a.u=``+a.u+r;var c=o.k();a.u=``+a.u+c}}return i.length!==0&&(a.u=``+a.u+i),t}function Ro(e,t){this.ez=null,this.bf=null,this.ez=e,this.bf=t}b=Ro.prototype=new S,b.constructor=Ro;function zo(){}zo.prototype=b,b.gJ=(function(){return this.ez.aO().r()}),new T().i(Ro,`scala.collection.Iterator$ConcatIteratorCell`,{dw:1});function Bo(){}b=Bo.prototype=new S,b.constructor=Bo;function Vo(){}Vo.prototype=b,b.O=(function(e,t){return e===t||(qs(e)?this.gj(e,t):e instanceof x?this.gh(e,t):e===null?t===null:Fn(e,t))}),b.gj=(function(e,t){if(qs(t))return this.gi(e,t);if(t instanceof x){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=Qn(e),r=n.e,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Fn(e,t)}else return e===null?t===null:Fn(e,t)}),b.gi=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=Qn(t);return n===N().bB(r.e,r.f)}else return!1}else if(e instanceof M){var i=Qn(e),a=i.e,o=i.f;if(t instanceof M){var s=Qn(t),c=s.e,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return N().bB(a,o)===u}else return!1}else return e===null?t===null:Fn(e,t)}),b.gh=(function(e,t){if(t instanceof x)return e.c===t.c;if(qs(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=Qn(t),r=n.e,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Fn(t,e)}else return e===null&&t===null}),new T().i(Bo,`scala.runtime.BoxesRunTime$`,{e7:1});var Ho;function F(){return Ho||=new Bo,Ho}var Uo=new T().i(0,`scala.runtime.Null$`,{ea:1});function Wo(){}b=Wo.prototype=new S,b.constructor=Wo;function Go(){}Go.prototype=b,b.b2=(function(e,t){if(e instanceof C||e instanceof w||e instanceof sr||e instanceof ar||e instanceof or)return e.a[t];if(e instanceof nr)return Xn(e.a[t]);if(e instanceof rr||e instanceof ir||e instanceof tr)return e.a[t];throw e===null?new Ku:new ed(e)}),b.fY=(function(e,t,n){if(e instanceof C)e.a[t]=n;else if(e instanceof w)e.a[t]=n|0;else if(e instanceof sr)e.a[t]=+n;else if(e instanceof ar)e.a[t]=Qn(n);else if(e instanceof or)e.a[t]=Math.fround(n);else if(e instanceof nr)e.a[t]=Zn(n);else if(e instanceof rr)e.a[t]=n|0;else if(e instanceof ir)e.a[t]=n|0;else if(e instanceof tr)e.a[t]=!!n;else if(e===null)throw new Ku;else throw new ed(e)}),b.fP=(function(e){return Io(e.b7(),e.av()+`(`,`,`,`)`)}),b.b=(function(e){return e===null?null:e.a.length===0?pf(_f()):new Zp(e)}),b.hz=(function(e){return e===null?null:new qp(e)}),new T().i(Wo,`scala.runtime.ScalaRunTime$`,{eb:1});var Ko;function I(){return Ko||=new Wo,Ko}function qo(){}b=qo.prototype=new S,b.constructor=qo;function Jo(){}Jo.prototype=b,b.c=(function(e,t){var n=this.c5(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.c5=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.q=(function(e,t){return this.g0(e^t)}),b.g0=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.b6=(function(e){var t=e.e,n=e.f;return n===t>>31?t:t^n}),b.Y=(function(e){var t=Bn(e);if(t===e)return t;var n=N(),r=n.fm(e),i=n.v;return N().bB(r,i)===e?r^i:xa().cN(e)}),b.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.Y(+e);if(e instanceof M){var t=Qn(e);return this.b6(new M(t.e,t.f))}else return In(e)}),b.bA=(function(e){throw Hu(new Uu,``+e)}),new T().i(qo,`scala.runtime.Statics$`,{ed:1});var Yo;function L(){return Yo||=new qo,Yo}function Xo(){}b=Xo.prototype=new S,b.constructor=Xo;function Zo(){}Zo.prototype=b,b.hl=(function(e,t){return setTimeout((()=>{t.aO()}),e)}),new T().i(Xo,`scala.scalajs.js.timers.package$`,{ej:1});var Qo;function $o(){return Qo||=new Xo,Qo}function es(){}b=es.prototype=new S,b.constructor=es;function ts(){}ts.prototype=b,b.ht=(function(e){var t=[];return e.a3(new W((e=>t.push(e)|0))),t}),new T().i(es,`scala.scalajs.runtime.Compat$`,{es:1});var ns;function rs(){return ns||=new es,ns}function is(){}b=is.prototype=new S,b.constructor=is;function as(){}as.prototype=b,b.hm=(function(e){var t=`Illegal command line`+(e.fi()===0?``:e.fi()===1?` after first argument`:` after `+e.fi()+` arguments`)+`: `+e.i3();uc().h6().gN(t+`
`)}),new T().i(is,`scala.util.CommandLineParser$`,{eu:1});function os(e){this.cE=null,this.cE=e}b=os.prototype=new S,b.constructor=os;function ss(){}ss.prototype=b,b.x=(function(){return`DynamicVariable(`+this.cE+`)`}),new T().i(os,`scala.util.DynamicVariable`,{ew:1});function cs(){}b=cs.prototype=new S,b.constructor=cs;function ls(){}ls.prototype=b,b.c=(function(e,t){var n=this.c5(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.c5=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.q=(function(e,t){return this.I(e^t)}),b.I=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.fp=(function(e,t,n){var r=e.at();if(r===0)return J(e.av());var i=t;n||(i=this.c(i,J(e.av())));for(var a=0;a<r;)i=this.c(i,L().B(e.au(a))),a=1+a|0;return this.q(i,r)}),b.hu=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.r();o.w();){var s=o.k(),c=L().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.c(l,n),l=this.c(l,r),l=this.c5(l,a),this.q(l,i)}),b.h5=(function(e,t){var n=e.r(),r=t;if(!n.w())return this.q(r,0);var i=n.k();if(!n.w())return this.q(this.c(r,L().B(i)),1);var a=n.k(),o=L().B(i);r=this.c(r,o);for(var s=r,c=L().B(a),l=c-o|0,u=2;n.w();){r=this.c(r,c);var d=L().B(n.k());if(l!==(d-c|0)||l===0){for(r=this.c(r,d),u=1+u|0;n.w();)r=this.c(r,L().B(n.k())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.I(this.c(this.c(s,l),c))}),b.eO=(function(e,t){var n=t,r=po().b4(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,L().B(I().b2(e,0))),1);default:var i=L().B(I().b2(e,0));n=this.c(n,i);for(var a=n,o=L().B(I().b2(e,1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().B(I().b2(e,c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().B(I().b2(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.h9=(function(e,t,n,r){return this.I(this.c(this.c(this.c(r,e),t),n))}),b.gK=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,L().B(e.s(0))),1);default:var i=L().B(e.s(0));n=this.c(n,i);for(var a=n,o=L().B(e.s(1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().B(e.s(c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().B(e.s(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.gP=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.i();){var l=c.a7(),u=c.a0(),d=L().B(l);switch(r=this.c(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.h9(s,a,o,t):this.q(r,n)}),b.eX=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.c(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eP=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eQ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eR=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,L().Y(e.a[0])),1);default:var i=L().Y(e.a[0]);n=this.c(n,i);for(var a=n,o=L().Y(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().Y(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().Y(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eS=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,L().Y(e.a[0])),1);default:var i=L().Y(e.a[0]);n=this.c(n,i);for(var a=n,o=L().Y(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().Y(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().Y(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eT=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.c(i,L().b6(new M(a.e,a.f))),1);default:var o=e.a[0],s=L().b6(new M(o.e,o.f));n=this.c(n,s);for(var c=n,l=e.a[1],u=L().b6(new M(l.e,l.f)),d=u-s|0,f=2;f<r;){n=this.c(n,u);var p=e.a[f],m=L().b6(new M(p.e,p.f));if(d!==(m-u|0)||d===0){for(n=this.c(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.c(ee,L().b6(new M(te.e,te.f))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.I(this.c(this.c(c,d),u))}}),b.eV=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.I(this.c(this.c(a,s),o))}}),b.eW=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.c(n,0),1);default:n=this.c(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.c(n,a),o!==(-a|0)||o===0){for(n=this.c(n,0),s=1+s|0;s<r;)n=this.c(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.I(this.c(this.c(i,o),a))}});function us(e){this.aT=null,this.cY=null,this.c9=!1,this.cY=e,Yr(this),this.c9=!1}b=us.prototype=new S,b.constructor=us;function ds(){}ds.prototype=b,b.h7=(function(e){this.c9?($r(e),this.cY.aO()):Qr(this,e)}),b.gO=(function(){Xr(this),this.c9=!0}),new T().i(us,`com.raquo.airstream.ownership.OneTimeOwner`,{bm:1,bn:1});function fs(){}b=fs.prototype=new S,b.constructor=fs;function ps(){}ps.prototype=b,b.gc=(function(e){return e!==null}),b.gg=(function(e){return e?``:null}),b.c0=(function(e){return this.gc(e)}),b.c3=(function(e){return this.gg(!!e)}),new T().i(fs,`com.raquo.laminar.codecs.package$$anon$1`,{bD:1,a2:1});function ms(e){if(e===null)throw new Ku}b=ms.prototype=new S,b.constructor=ms;function hs(){}hs.prototype=b,b.c3=(function(e){return e}),b.c0=(function(e){return e}),new T().i(ms,`com.raquo.laminar.codecs.package$$anon$2`,{bE:1,a2:1});function gs(e){return new Pi(e,new K((e=>e+`px`)))}function _s(e,t,n,r){}b=_s.prototype=new Li,b.constructor=_s;function vs(){}vs.prototype=b,new T().i(_s,`com.raquo.laminar.keys.CompositeKey`,{c1:1,v:1});function ys(e,t,n){return e.ac=t,e.aU=n,e}function bs(){this.ac=null,this.aU=null}b=bs.prototype=new Li,b.constructor=bs;function xs(){}xs.prototype=b,b.o=(function(e){return new zc(this,e,new ku(((e,t,n)=>{D().fr(e,t,n)})))}),new T().i(bs,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,v:1});function Ss(e,t,n){this.cf=null,this.ce=null,this.bN=null,this.bO=null,this.cf=e,this.ce=t;var r=n.i()?Y():new X(n.C()+`:`+e);this.bN=r.i()?e:r.C(),this.bO=n.i()?Y():new X(Vi().gS(n.C()))}b=Ss.prototype=new Li,b.constructor=Ss;function Cs(){}Cs.prototype=b,new T().i(Ss,`com.raquo.laminar.keys.SvgAttr`,{c3:1,v:1});function ws(){}b=ws.prototype=new S,b.constructor=ws;function Ts(){}Ts.prototype=b,b.aM=(function(e){}),new T().i(ws,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c8:1,W:1});function Es(e,t){if(this.dH=null,this.dH=e,t===null)throw new Ku}b=Es.prototype=new S,b.constructor=Es;function Ds(){}Ds.prototype=b,b.aM=(function(e){var t=Or(),n=(()=>{this.dH.l(e)});if(Or(),t.T)n();else{t.T=!0;try{n()}finally{t.T=!1,wr(t)}}}),new T().i(Es,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c9:1,W:1});function Os(){}b=Os.prototype=new S,b.constructor=Os;function ks(){}ks.prototype=b,new T().i(Os,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cb:1,ca:1});var As;function js(){return As||=new Os,As}function Ms(e,t){if(this.dI=null,this.dI=e,t===null)throw new Ku}b=Ms.prototype=new S,b.constructor=Ms;function Ns(){}Ns.prototype=b,b.fZ=(function(e){return this.dI.l(e)}),new T().i(Ms,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{ce:1,cc:1});function Ps(e){e.f1(new Br(new wu((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Io(D().gb(e.bF(),(D(),Mm())),``,` > `,``))}))))}function Fs(e,t,n){return e.cj=t,e}function Is(){this.cj=null}b=Is.prototype=new S,b.constructor=Is;function Ls(){}Ls.prototype=b,b.cM=(function(){return this.cj}),b.cH=(function(e){var t=this.g1();return e.a3(new K((e=>{e.aM(t)}))),t}),b.g1=(function(){return new Bd(this,D().g6(this))}),new T().i(Is,`com.raquo.laminar.tags.HtmlTag`,{ag:1,a4:1});function Rs(e,t){this.dO=null,this.dO=e}b=Rs.prototype=new S,b.constructor=Rs;function zs(){}zs.prototype=b,new T().i(Rs,`com.raquo.laminar.tags.SvgTag`,{cn:1,a4:1});function Bs(){}b=Bs.prototype=new S,b.constructor=Bs;function Vs(){}Vs.prototype=b,b.c3=(function(e){return e}),b.c0=(function(e){return e}),new T().i(Bs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cw:1,a2:1});function Hs(e,t){return e.bR=t,e.eJ(),e}function Us(){this.bR=null,this.bQ=null,this.bS=!1}b=Us.prototype=new S,b.constructor=Us;function Ws(){}Ws.prototype=b,b.hq=(function(){return this.bS||=(this.bQ=new Uc(this.bR,ia().fO(),(ia(),void 0)),!0),this.bQ}),b.j=(function(e,t){var n=this.hq().cH(I().b(new(O.r()).C([])));return e.a3(new K((e=>{e.l(this).aM(n)}))),t.a3(new K((e=>{e.aM(n)}))),n});function Gs(){}b=Gs.prototype=new S,b.constructor=Gs;function Ks(){}Ks.prototype=b;function qs(e){return e instanceof Gs||typeof e==`number`||e instanceof M}function Js(e,t,n,r,i){this.aX=null,this.bb=null,this.aY=null,this.aZ=0,this.aW=0,this.aX=e,this.bb=t,this.aY=n,this.aZ=r,this.aW=i}b=Js.prototype=new S,b.constructor=Js;function Ys(){}Ys.prototype=b,b.n=(function(e){return e instanceof Js&&this.aY===e.aY&&this.aZ===e.aZ&&this.aW===e.aW&&this.aX===e.aX&&this.bb===e.bb}),b.x=(function(){var e=``;return this.aX!==`<jscode>`&&(e=``+e+this.aX+`.`),e=``+e+this.bb,this.aY===null?e+=`(Unknown Source)`:(e=e+`(`+this.aY,this.aZ>=0&&(e=e+`:`+this.aZ,this.aW>=0&&(e=e+`:`+this.aW)),e+=`)`),e}),b.t=(function(){return J(this.aX)^J(this.bb)^J(this.aY)^this.aZ^this.aW});var Xs=new T().i(Js,`java.lang.StackTraceElement`,{as:1,a:1});function Zs(){}b=Zs.prototype=new S,b.constructor=Zs;function Qs(){}Qs.prototype=b,b.gT=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Qd;for(var i=``,a=t;a!==r;)i+=``+Vn(e.a[a]),a=1+a|0;return i}),new T().i(Zs,`java.lang.String$`,{cO:1,a:1});var $s;function ec(){return $s||=new Zs,$s}function tc(e,t,n,r,i){return e.en=t,e.eo=i,i&&e.gs(),e}var nc=class extends Error{constructor(){super(),this.en=null,this.eo=!1,this.em=null,this.bU=null}bz(){return this.en}gs(){var e=this instanceof Z?this.V:this;return this.em=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gF(){return this.bU===null&&(this.eo?this.bU=Ka().gr(this.em):this.bU=new(Xs.r()).C(0)),this.bU}x(){var e=Pn(this),t=this.bz();return t===null?e:e+`: `+t}t(){return $n.prototype.t.call(this)}n(e){return $n.prototype.n.call(this,e)}get message(){var e=this.bz();return e===null?``:e}get name(){return Pn(this)}toString(){return this.x()}};function rc(){}b=rc.prototype=new S,b.constructor=rc;function ic(){}ic.prototype=b,b.fe=(function(e,t){var n=e.E();if(n>-1){for(var r=t.gU(n),i=e.r(),a=0;a<n;)I().fY(r,a,i.k()),a=1+a|0;return r}else{var o=null,s=t.hf(),c=s===lr.l();o=[];for(var l=e.r();l.w();){var u=l.k(),d=c?Zn(u):u===null?s.ay.z:u;o.push(d)}return(s===cr.l()?so.l():s===Uo.l()||s===Nl.l()?E.l():s).ay.r().w(o)}}),b.fc=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().O(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(rc,`scala.Array$`,{cY:1,a:1});var ac;function oc(){return ac||=new rc,ac}function sc(){this.eq=null,lc=this,this.eq=new os($a().el)}b=sc.prototype=new S,b.constructor=sc;function cc(){}cc.prototype=b,b.h6=(function(){return this.eq.cE}),new T().i(sc,`scala.Console$`,{cZ:1,dT:1});var lc;function uc(){return lc||=new sc,lc}function dc(){}b=dc.prototype=new Eo,b.constructor=dc;function fc(){}fc.prototype=b,b.hA=(function(e){return e===null?null:e.a.length===0?xf().eA:new xm(e)});function pc(){}b=pc.prototype=new S,b.constructor=pc;function mc(){}mc.prototype=b,b.aN=(function(e){return e===null?Y():new X(e)}),new T().i(pc,`scala.Option$`,{d6:1,a:1});var hc;function gc(){return hc||=new pc,hc}function _c(e,t){if(t===e)e.eL(Od().ff(t));else for(var n=t.r();n.w();)e.cG(n.k());return e}function vc(){}b=vc.prototype=new S,b.constructor=vc;function yc(){}yc.prototype=b,b.x=(function(){return`<function0>`});function bc(){}b=bc.prototype=new S,b.constructor=bc;function xc(){}xc.prototype=b,b.x=(function(){return`<function1>`});function Sc(){}b=Sc.prototype=new S,b.constructor=Sc;function Cc(){}Cc.prototype=b,b.x=(function(){return`<function2>`});function wc(){}b=wc.prototype=new S,b.constructor=wc;function Tc(){}Tc.prototype=b,b.x=(function(){return`<function3>`});function Ec(e){this.bY=!1,this.bY=e}b=Ec.prototype=new S,b.constructor=Ec;function Dc(){}Dc.prototype=b,b.x=(function(){return``+this.bY}),new T().i(Ec,`scala.runtime.BooleanRef`,{e6:1,a:1});function Oc(e){this.bi=0,this.bi=e}b=Oc.prototype=new S,b.constructor=Oc;function kc(){}kc.prototype=b,b.x=(function(){return``+this.bi}),new T().i(Oc,`scala.runtime.IntRef`,{e8:1,a:1});function Ac(){this.y=0,this.eI=0,this.fN=0,this.fM=0,Mc=this,this.y=J(`Seq`),this.eI=J(`Map`),this.fN=J(`Set`),this.fM=this.hu(Mm(),this.eI)}b=Ac.prototype=new ls,b.constructor=Ac;function jc(){}jc.prototype=b,b.hg=(function(e){return gp(e)?this.gK(e,this.y):e instanceof am?this.gP(e,this.y):this.h5(e,this.y)}),new T().i(Ac,`scala.util.hashing.MurmurHash3$`,{ey:1,ex:1});var Mc;function R(){return Mc||=new Ac,Mc}var Nc=class extends nc{};function Pc(){this.c6=null,this.cR=null,this.cS=null,Ic=this,this.c6=Od().eM(I().b(new(P.r()).C([]))),this.cR=new K((e=>{try{console.error(this.gB(e)+`
`+this.gE(e,`
`))}catch(e){var t=e instanceof nc?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cS=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.V:t})),this.ha(this.cR)}b=Pc.prototype=new S,b.constructor=Pc;function Fc(){}Fc.prototype=b,b.gB=(function(e){try{var t=e.bz()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Nn(e).cL()+`: `+t}),b.gE=(function(e,t){try{return Io(gl().hA(e.gF()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.ha=(function(e){this.c6.cG(e)}),b.cQ=(function(e){for(var t=this.c6.r();t.w();){var n=t.k();try{n.l(e)}catch(e){var r=e instanceof nc?e:new Z(e),i=this.cS;if(n===null?i===null:n.n(i))throw r instanceof Z?r.V:r;console.warn(`Error processing an unhandled error callback:`),$o().hl(0,new wu((e=>(()=>{throw e instanceof Z?e.V:e}))(r)))}}}),new T().i(Pc,`com.raquo.airstream.core.AirstreamError$`,{b9:1,dR:1,dS:1});var Ic;function Lc(){return Ic||=new Pc,Ic}function z(e,t,n){return new nu(n.fZ(t))}function Rc(e,t,n){return new Es(new K((e=>{(xi(),new gi(t,null,null)).a3(new K((e=>(t=>{ea().bZ(e,t,void 0)}))(e)))})),qi())}function zc(e,t,n){this.dF=null,this.dG=null,this.dE=null,this.dF=e,this.dG=t,this.dE=n}b=zc.prototype=new S,b.constructor=zc;function Bc(){}Bc.prototype=b,b.aM=(function(e){this.dE.fW(e,this.dF,this.dG)}),new T().i(zc,`com.raquo.laminar.modifiers.KeySetter`,{c6:1,W:1,cf:1});function Vc(e,t){if(this.ch=null,this.dK=null,this.dL=null,this.dK=t,Ps(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().gM(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dL=e,this.gR()}b=Vc.prototype=new S,b.constructor=Vc;function Hc(){}Hc.prototype=b,b.c2=(function(){return this.ch}),b.f1=(function(e){this.ch=e}),b.gR=(function(){return this.ch.eK(),ea().bZ(this,this.dK,void 0)}),b.bF=(function(){return this.dL}),new T().i(Vc,`com.raquo.laminar.nodes.RootNode`,{cj:1,a3:1,af:1});function Uc(e,t,n){this.cj=null,this.dN=null,this.dN=e,Fs(this,e,!1)}b=Uc.prototype=new Ls,b.constructor=Uc;function Wc(){}Wc.prototype=b,b.cM=(function(){return this.dN}),new T().i(Uc,`com.raquo.laminar.tags.CustomHtmlTag`,{cl:1,ag:1,a4:1});function Gc(){this.bR=null,this.bQ=null,this.bS=!1,this.dV=null,this.dW=!1,this.dP=null,this.dQ=!1,this.dT=null,this.dU=!1,this.dR=null,this.dS=!1,Hs(this,`wa-badge`)}b=Gc.prototype=new Ws,b.constructor=Gc;function Kc(){}Kc.prototype=b,b.m=(function(){return this.dW||=(this.dV=ll(),!0),this.dV}),b.A=(function(){return this.dQ||=(this.dP=al(),!0),this.dP}),b.D=(function(){return this.dU||=(this.dT=(G(),ys(new bs,`pill`,ki().dn)),!0),this.dT}),b.a1=(function(){return this.dS||=(this.dR=tl(),!0),this.dR}),b.eJ=(function(){return bt}),new T().i(Gc,`io.github.nguyenyou.webawesome.laminar.Badge$`,{cr:1,ai:1,ah:1});var qc;function B(){return qc||=new Gc,qc}function Jc(){this.bR=null,this.bQ=null,this.bS=!1,Hs(this,`wa-button`)}b=Jc.prototype=new Ws,b.constructor=Jc;function Yc(){}Yc.prototype=b,b.eJ=(function(){return jn}),new T().i(Jc,`io.github.nguyenyou.webawesome.laminar.Button$`,{cs:1,ai:1,ah:1});var Xc;function Zc(){return Xc||=new Jc,Xc}function Qc(){this.ac=null,this.aU=null,this.dX=null,this.dY=!1,this.dZ=null,this.e0=!1,ys(this,`attention`,new Bs)}b=Qc.prototype=new xs,b.constructor=Qc;function $c(){}$c.prototype=b,b.bv=(function(){return this.dY||=(this.dX=tl().o(`bounce`),!0),this.dX}),b.bE=(function(){return this.e0||=(this.dZ=tl().o(`pulse`),!0),this.dZ}),new T().i(Qc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Attention$`,{ct:1,Z:1,v:1});var el;function tl(){return el||=new Qc,el}function nl(){this.ac=null,this.aU=null,this.e1=null,this.e2=!1,this.e3=null,this.e6=!1,this.e4=null,this.e5=!1,this.e7=null,this.e8=!1,ys(this,`appearance`,new Bs)}b=nl.prototype=new xs,b.constructor=nl;function rl(){}rl.prototype=b,b.bk=(function(){return this.e2||=(this.e1=al().o(`accent`),!0),this.e1}),b.bw=(function(){return this.e6||=(this.e3=al().o(`filled`),!0),this.e3}),b.bx=(function(){return this.e5||=(this.e4=al().o(`filled-outlined`),!0),this.e4}),b.bC=(function(){return this.e8||=(this.e7=al().o(`outlined`),!0),this.e7}),new T().i(nl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$`,{cu:1,Z:1,v:1});var il;function al(){return il||=new nl,il}function ol(){this.ac=null,this.aU=null,this.e9=null,this.ea=!1,this.eb=null,this.ec=!1,this.ed=null,this.ee=!1,this.ef=null,this.eg=!1,this.eh=null,this.ei=!1,ys(this,`variant`,new Bs)}b=ol.prototype=new xs,b.constructor=ol;function sl(){}sl.prototype=b,b.N=(function(){return this.ea||=(this.e9=ll().o(`brand`),!0),this.e9}),b.a6=(function(){return this.ec||=(this.eb=ll().o(`danger`),!0),this.eb}),b.as=(function(){return this.ee||=(this.ed=ll().o(`neutral`),!0),this.ed}),b.ax=(function(){return this.eg||=(this.ef=ll().o(`success`),!0),this.ef}),b.a8=(function(){return this.ei||=(this.eh=ll().o(`warning`),!0),this.eh}),new T().i(ol,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cv:1,Z:1,v:1});var cl;function ll(){return cl||=new ol,cl}function ul(e){if(e.ay.Z)return e.ay.Q().cL()+`[]`;for(var t=e.ay.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function dl(e){this.ck=null,this.ay=e}b=dl.prototype=new S,b.constructor=dl;function fl(){}fl.prototype=b,b.x=(function(){return(this.ay.Y?`interface `:this.ay.X?``:`class `)+this.ay.N}),b.cL=(function(){return this.ck===null&&(this.ck=ul(this)),this.ck}),new T().i(dl,`java.lang.Class`,{cC:1,a:1,M:1});function V(e,t){return tc(e,t,null,!0,!0),e}var H=class extends nc{};new T().i(H,`java.lang.Exception`,{L:1,u:1,a:1});function pl(){this.fI=null,hl=this,this.fI=kl()}b=pl.prototype=new fc,b.constructor=pl;function ml(){}ml.prototype=b,new T().i(pl,`scala.Predef$`,{d9:1,d2:1,d3:1});var hl;function gl(){return hl||=new pl,hl}function _l(e,t){return e.bW=t,e}function vl(){this.bW=null}b=vl.prototype=new S,b.constructor=vl;function yl(){}yl.prototype=b,b.cK=(function(e){return this.bW.cJ(e,up())}),b.cI=(function(e){return this.bW.cJ(e,up())});function bl(e,t){return new md(e).g5(t)}function xl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().z:new vd(e,r,i)}function Sl(e,t){for(var n=t.r();e.w()&&n.w();)if(!F().O(e.k(),n.k()))return!1;return e.w()===n.w()}function Cl(){this.z=null,Tl=this,this.z=new cd}b=Cl.prototype=new S,b.constructor=Cl;function wl(){}wl.prototype=b,new T().i(Cl,`scala.collection.Iterator$`,{dt:1,a0:1,a:1});var Tl;function U(){return Tl||=new Cl,Tl}function El(){}b=El.prototype=new S,b.constructor=El;function Dl(){}Dl.prototype=b,new T().i(El,`scala.collection.immutable.Map$`,{dH:1,dy:1,a:1});var Ol;function kl(){return Ol||=new El,Ol}function Al(e){this.eB=null,this.eB=e}b=Al.prototype=new yc,b.constructor=Al;function jl(){}jl.prototype=b,b.aO=(function(){return(0,this.eB)()}),new T().i(Al,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{e2:1,b5:1,av:1});function W(e){this.eC=null,this.eC=e}b=W.prototype=new xc,b.constructor=W;function Ml(){}Ml.prototype=b,b.l=(function(e){return(0,this.eC)(e)}),new T().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{e3:1,b6:1,e:1});var Nl=new T().i(0,`scala.runtime.Nothing$`,{e9:1,u:1,a:1});function Pl(){}b=Pl.prototype=new S,b.constructor=Pl;function Fl(){}Fl.prototype=b,b.gz=(function(e){return(t=>e.l(t))}),new T().i(Pl,`scala.scalajs.js.Any$`,{ee:1,ef:1,eg:1});var Il;function Ll(){return Il||=new Pl,Il}function Rl(){}b=Rl.prototype=new yc,b.constructor=Rl;function zl(){}zl.prototype=b;function Bl(){}b=Bl.prototype=new xc,b.constructor=Bl;function Vl(){}Vl.prototype=b;function Hl(){}b=Hl.prototype=new Cc,b.constructor=Hl;function Ul(){}Ul.prototype=b;function Wl(){}b=Wl.prototype=new Tc,b.constructor=Wl;function Gl(){}Gl.prototype=b;function Kl(e,t,n,r){if(this.cT=null,r===null)throw new Ku;this.cT=void 0}b=Kl.prototype=new S,b.constructor=Kl;function ql(){}ql.prototype=b,b.x=(function(){return fr(this)}),new T().i(Kl,`com.raquo.airstream.core.Observer$$anon$8`,{bd:1,be:1,ba:1,bb:1});function Jl(e){if(this.d5=null,this.d6=!1,this.fv=null,e===null)throw new Ku;Mi(this)}b=Jl.prototype=new S,b.constructor=Jl;function Yl(){}Yl.prototype=b,b.hp=(function(){return this.d6||=(this.d5=new Rs(`svg`,!1),!0),this.d5}),new T().i(Jl,`com.raquo.laminar.api.Laminar$svg$`,{bx:1,c0:1,bG:1,bI:1});function Xl(){this.d=null,Ql=this,this.d=new xp}b=Xl.prototype=new S,b.constructor=Xl;function Zl(){}Zl.prototype=b,new T().i(Xl,`com.raquo.laminar.api.package$`,{bA:1,aa:1,ad:1,a9:1});var Ql;function G(){return Ql||=new Xl,Ql}function $l(e,t,n){return e.ad=t,e.ae=n,e}function eu(){this.ad=null,this.ae=null}b=eu.prototype=new Li,b.constructor=eu;function tu(){}tu.prototype=b,b.o=(function(e){return new zc(this,Ln(e),new ku(((e,t,n)=>{D().fs(e,t,n)})))});function nu(e){this.dM=null,this.ci=null,this.dM=Y(),this.ci=D().g8(e)}b=nu.prototype=new S,b.constructor=nu;function ru(){}ru.prototype=b,b.ft=(function(e){this.dM=e}),b.fu=(function(e){}),b.aM=(function(e){ea().bZ(e,this,void 0)}),b.hs=(function(){return this.ci.data}),b.bF=(function(){return this.ci}),new T().i(nu,`com.raquo.laminar.nodes.TextNode`,{ck:1,a3:1,W:1,ae:1});function iu(){}b=iu.prototype=new S,b.constructor=iu;function au(){}au.prototype=b;function ou(e,t){return e===t}function su(e){return e?1231:1237}var cu=new T().i(0,`java.lang.Boolean`,{cA:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function lu(e){return e}function uu(e,t){return t instanceof x&&e===t.c}var du=new T().i(0,`java.lang.Character`,{ao:1,a:1,Q:1,M:1},(e=>e instanceof x)),fu=class extends H{};function pu(){this.u=null,this.u=``}b=pu.prototype=new S,b.constructor=pu;function mu(){}mu.prototype=b,b.fU=(function(e){var t=ec().gT(e,0,e.a.length);return this.u=``+this.u+t,this}),b.x=(function(){return this.u}),b.p=(function(){return this.u.length}),b.eZ=(function(e){return this.u.charCodeAt(e)}),new T().i(pu,`java.lang.StringBuilder`,{cP:1,a5:1,am:1,a:1});function hu(){}b=hu.prototype=new S,b.constructor=hu;function gu(){}gu.prototype=b,b.x=(function(){return`<function1>`}),b.fX=(function(e){throw new ed(e)}),b.l=(function(e){this.fX(e)}),new T().i(hu,`scala.PartialFunction$$anon$1`,{d8:1,g:1,e:1,a:1});function _u(){}b=_u.prototype=new S,b.constructor=_u;function vu(){}vu.prototype=b,b.r=(function(){return this}),b.c1=(function(e){return this.bG(e,-1)}),b.bG=(function(e,t){return xl(this,e,t)}),b.x=(function(){return`<iterator>`}),b.bl=(function(e,t,n,r){return Lo(this,e,t,n,r)}),b.E=(function(){return-1});function yu(e,t){return e.bX=t,e}function bu(){this.bX=null}b=bu.prototype=new S,b.constructor=bu;function xu(){}xu.prototype=b,b.eM=(function(e){return this.bX.cI(e)}),b.ff=(function(e){return this.bX.cK(e)}),b.cK=(function(e){return this.ff(e)}),b.cI=(function(e){return this.eM(e)});function Su(e){return e.b5(0)===0}function Cu(e,t){var n=e.E();if(n!==-1)var r=t.E(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Sl(e.r(),t)}function wu(e){this.eF=null,this.eF=e}b=wu.prototype=new zl,b.constructor=wu;function Tu(){}Tu.prototype=b,b.aO=(function(){return(0,this.eF)()}),new T().i(wu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{el:1,ek:1,b5:1,av:1});function K(e){this.eG=null,this.eG=e}b=K.prototype=new Vl,b.constructor=K;function Eu(){}Eu.prototype=b,b.l=(function(e){return(0,this.eG)(e)}),new T().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{en:1,em:1,b6:1,e:1});function Du(e){this.fL=null,this.fL=e}b=Du.prototype=new Ul,b.constructor=Du;function Ou(){}Ou.prototype=b,new T().i(Du,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ep:1,eo:1,e4:1,d0:1});function ku(e){this.eH=null,this.eH=e}b=ku.prototype=new Gl,b.constructor=ku;function Au(){}Au.prototype=b,b.fW=(function(e,t,n){return(0,this.eH)(e,t,n)}),new T().i(ku,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{er:1,eq:1,e5:1,d1:1});function ju(e){e.cg=new ri(new wu((()=>{e.aV.eK()})),new wu((()=>{e.aV.g9()})))}function Mu(e,t){Pu(e,e.bP,t)&&Fu(e,t)}function Nu(e,t){var n=e.bP;e.bP=t,Pu(e,n,t)||Fu(e,t)}function Pu(e,t,n){var r=!t.i()&&!t.C().c2().J.i(),i=!n.i()&&!n.C().c2().J.i();return r&&!i}function Fu(e,t){Iu(e,t.i()?Y():new X(t.C().c2()))}function Iu(e,t){if(t.i())e.cg.g3();else{var n=t.C();e.cg.hi(n)}}function Lu(){}b=Lu.prototype=new au,b.constructor=Lu;function Ru(){}Ru.prototype=b;var zu=class extends fu{constructor(e){super(),tc(this,e,null,!0,!0)}};new T().i(zu,`java.lang.ArithmeticException`,{cz:1,R:1,L:1,u:1,a:1});var Bu=new T().i(0,`java.lang.Byte`,{cB:1,S:1,a:1,Q:1,M:1},(e=>Kn(e))),Vu=class extends fu{constructor(e){super(),tc(this,e,null,!0,!0)}};new T().i(Vu,`java.lang.IllegalArgumentException`,{cF:1,R:1,L:1,u:1,a:1});function Hu(e,t){return tc(e,t,null,!0,!0),e}var Uu=class extends fu{};new T().i(Uu,`java.lang.IndexOutOfBoundsException`,{aq:1,R:1,L:1,u:1,a:1});function Wu(){}b=Wu.prototype=new au,b.constructor=Wu;function Gu(){}Gu.prototype=b,new T().i(Wu,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cI:1,al:1,aj:1,an:1,ak:1});var Ku=class extends fu{constructor(){super(),tc(this,null,null,!0,!0)}};new T().i(Ku,`java.lang.NullPointerException`,{cJ:1,R:1,L:1,u:1,a:1});var qu=new T().i(0,`java.lang.Short`,{cK:1,S:1,a:1,Q:1,M:1},(e=>qn(e))),Ju=class extends fu{constructor(e){super(),tc(this,e,null,!0,!0)}};new T().i(Ju,`java.lang.UnsupportedOperationException`,{cS:1,R:1,L:1,u:1,a:1});var Yu=class extends fu{constructor(e){super(),tc(this,e,null,!0,!0)}};new T().i(Yu,`java.util.NoSuchElementException`,{cW:1,R:1,L:1,u:1,a:1});function Xu(e){return e.cp||=(e.cq=e.bV===null?`null`:$u(e),!0),e.cq}function Zu(e){return e.cp?e.cq:Xu(e)}function Qu(e){var t=e.bV;return`of class `+Pn(t)}function $u(e){try{return e.bV+` (`+Qu(e)+`)`}catch{return`an instance `+Qu(e)}}var ed=class extends fu{constructor(e){super(),this.cq=null,this.bV=null,this.cp=!1,this.bV=e,tc(this,null,null,!0,!0)}bz(){return Zu(this)}};new T().i(ed,`scala.MatchError`,{d4:1,R:1,L:1,u:1,a:1});function td(){}b=td.prototype=new S,b.constructor=td;function nd(){}nd.prototype=b,b.i=(function(){return this===Y()}),b.E=(function(){return this.i()?0:1}),b.r=(function(){return this.i()?U().z:new ud(this.C())});function rd(e){this.bc=0,this.eu=0,this.et=null,this.et=e,this.bc=0,this.eu=e.at()}b=rd.prototype=new vu,b.constructor=rd;function id(){}id.prototype=b,b.w=(function(){return this.bc<this.eu}),b.k=(function(){var e=this.et.au(this.bc);return this.bc=1+this.bc|0,e}),new T().i(rd,`scala.Product$$anon$1`,{da:1,r:1,s:1,b:1,c:1});function ad(e){this.bW=null,_l(this,e)}b=ad.prototype=new yl,b.constructor=ad;function od(){}od.prototype=b,new T().i(ad,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dp:1,dn:1,a0:1,a:1,a6:1});function sd(e){return Io(e,e.b3()+`(`,`, `,`)`)}function cd(){}b=cd.prototype=new vu,b.constructor=cd;function ld(){}ld.prototype=b,b.w=(function(){return!1}),b.gV=(function(){throw new Yu(`next on empty iterator`)}),b.E=(function(){return 0}),b.bG=(function(e,t){return this}),b.k=(function(){this.gV()}),new T().i(cd,`scala.collection.Iterator$$anon$19`,{du:1,r:1,s:1,b:1,c:1});function ud(e){this.be=!1,this.ey=null,this.ey=e,this.be=!1}b=ud.prototype=new vu,b.constructor=ud;function dd(){}dd.prototype=b,b.w=(function(){return!this.be}),b.k=(function(){return this.be?U().z.k():(this.be=!0,this.ey)}),b.bG=(function(e,t){return this.be||e>0||t===0?U().z:this}),new T().i(ud,`scala.collection.Iterator$$anon$20`,{dv:1,r:1,s:1,b:1,c:1});function fd(e){for(;;){if(e.G instanceof md){var t=e.G;e.G=t.G,e.ag=t.ag,t.R!==null&&(e.Q===null&&(e.Q=t.Q),t.Q.bf=e.R,e.R=t.R);continue}return}}function pd(e){for(;;)if(e.R===null)return e.G=null,e.Q=null,!1;else{if(e.G=e.R.gJ(),e.Q===e.R&&(e.Q=e.Q.bf),e.R=e.R.bf,fd(e),e.ag)return!0;if(e.G!==null&&e.G.w())return e.ag=!0,!0}}function md(e){this.G=null,this.R=null,this.Q=null,this.ag=!1,this.G=e,this.R=null,this.Q=null,this.ag=!1}b=md.prototype=new vu,b.constructor=md;function hd(){}hd.prototype=b,b.w=(function(){return this.ag?!0:this.G===null?!1:this.G.w()?(this.ag=!0,!0):pd(this)}),b.k=(function(){return this.w()?(this.ag=!1,this.G.k()):U().z.k()}),b.g5=(function(e){var t=new Ro(e,null);return this.R===null?(this.R=t,this.Q=t):(this.Q.bf=t,this.Q=t),this.G===null&&(this.G=U().z),this}),new T().i(md,`scala.collection.Iterator$ConcatIterator`,{aB:1,r:1,s:1,b:1,c:1});function gd(e){for(;e.a5>0;)e.ah.w()?(e.ah.k(),e.a5=-1+e.a5|0):e.a5=0}function _d(e,t){if(e.L<0)return-1;var n=e.L-t|0;return n<0?0:n}function vd(e,t,n){this.ah=null,this.L=0,this.a5=0,this.ah=e,this.L=n,this.a5=t}b=vd.prototype=new vu,b.constructor=vd;function yd(){}yd.prototype=b,b.E=(function(){var e=this.ah.E();if(e<0)return-1;var t=e-this.a5|0,n=t<0?0:t;if(this.L<0)return n;var r=this.L;return r<n?r:n}),b.w=(function(){return gd(this),this.L!==0&&this.ah.w()}),b.k=(function(){return gd(this),this.L>0?(this.L=-1+this.L|0,this.ah.k()):this.L<0?this.ah.k():U().z.k()}),b.bG=(function(e,t){var n=e>0?e:0;if(t<0)var r=_d(this,n);else if(t<=n)var r=0;else if(this.L<0)var r=t-n|0;else var i=_d(this,n),a=t-n|0,r=i<a?i:a;var o=this.a5+n|0;return r===0?U().z:o<0?(this.a5=2147483647,this.L=0,bl(this,new Al((()=>new vd(this.ah,-2147483647+o|0,r))))):(this.a5=o,this.L=r,this)}),new T().i(vd,`scala.collection.Iterator$SliceIterator`,{dx:1,r:1,s:1,b:1,c:1});function bd(e,t){if(t<0)throw Hu(new Uu,``+t);var n=e.gf(t);if(n.i())throw Hu(new Uu,``+t);return n.a7()}function xd(e,t){return _p(t)?Sd(e,e,t):Cu(e,t)}function Sd(e,t,n){for(;;)if(t===n)return!0;else if(!t.i()&&!n.i()&&F().O(t.a7(),n.a7())){var r=t.a0(),i=n.a0();t=r,n=i}else return t.i()&&n.i()}function Cd(e){this.bh=null,this.bh=e}b=Cd.prototype=new vu,b.constructor=Cd;function wd(){}wd.prototype=b,b.w=(function(){return!this.bh.i()}),b.k=(function(){var e=this.bh.a7();return this.bh=this.bh.a0(),e}),new T().i(Cd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dC:1,r:1,s:1,b:1,c:1});function Td(){this.bX=null,yu(this,Pd())}b=Td.prototype=new xu,b.constructor=Td;function Ed(){}Ed.prototype=b,new T().i(Td,`scala.collection.mutable.Buffer$`,{dM:1,dz:1,a6:1,a0:1,a:1});var Dd;function Od(){return Dd||=new Td,Dd}function kd(e){this.bj=0,this.eD=0,this.eE=null,this.eE=e,this.bj=0,this.eD=e.at()}b=kd.prototype=new vu,b.constructor=kd;function Ad(){}Ad.prototype=b,b.w=(function(){return this.bj<this.eD}),b.k=(function(){var e=this.eE.au(this.bj);return this.bj=1+this.bj|0,e}),new T().i(kd,`scala.runtime.ScalaRunTime$$anon$1`,{ec:1,r:1,s:1,b:1,c:1});function jd(){}b=jd.prototype=new S,b.constructor=jd;function Md(){}Md.prototype=b,b.cI=(function(e){return this.fg(e)}),b.fg=(function(e){return _c(Rm(new zm),e).fq()}),b.cK=(function(e){return this.fg(e)}),new T().i(jd,`scala.scalajs.js.WrappedArray$`,{ei:1,dD:1,a6:1,a0:1,a:1});var Nd;function Pd(){return Nd||=new jd,Nd}var Fd=class e extends Nc{constructor(e,t){super(),this.aQ=null,this.aP=0,this.aQ=e,this.aP=t,tc(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}b7(){return new rd(this)}t(){var e=-889275714;return e=L().c(e,J(`TransactionDepthExceeded`)),e=L().c(e,L().B(this.aQ)),e=L().c(e,this.aP),L().q(e,2)}n(t){return this===t?!0:t instanceof e&&this.aP===t.aP?this.aQ===t.aQ:!1}at(){return 2}av(){return`TransactionDepthExceeded`}au(e){if(e===0)return this.aQ;if(e===1)return this.aP;throw Hu(new Uu,``+e)}x(){return`TransactionDepthExceeded: `+this.aQ+`; maxDepth: `+this.aP}};new T().i(Fd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a8:1,b8:1,u:1,a:1,d:1,X:1});function Id(e){this.ad=null,this.ae=null,this.dt=null,this.du=!1,$l(this,e,Mm())}b=Id.prototype=new tu,b.constructor=Id;function Ld(){}Ld.prototype=b,b.g4=(function(){return this.du||=(this.dt=this.o(`column`),!0),this.dt}),new T().i(Id,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bO:1,V:1,v:1,T:1,U:1,bT:1});function Rd(e){this.ad=null,this.ae=null,this.dv=null,this.dw=!1,$l(this,e,Mm())}b=Rd.prototype=new tu,b.constructor=Rd;function zd(){}zd.prototype=b,b.hy=(function(){return this.dw||=(this.dv=this.o(`wrap`),!0),this.dv}),new T().i(Rd,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bP:1,V:1,v:1,T:1,U:1,bV:1});function Bd(e,t){this.bP=null,this.aV=null,this.cg=null,this.dJ=null,this.a4=null,this.dJ=e,this.a4=t,this.bP=Y(),Ps(this),ju(this)}b=Bd.prototype=new S,b.constructor=Bd;function Vd(){}Vd.prototype=b,b.aM=(function(e){ea().bZ(e,this,void 0)}),b.c2=(function(){return this.aV}),b.f1=(function(e){this.aV=e}),b.fu=(function(e){Mu(this,e)}),b.ft=(function(e){Nu(this,e)}),b.x=(function(){return`ReactiveHtmlElement(`+(this.a4===null?`tag=`+this.dJ.cM():this.a4.outerHTML)+`)`}),b.bF=(function(){return this.a4});var q=new T().i(Bd,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ci:1,a3:1,W:1,ae:1,af:1,ch:1});function Hd(e,t){return Object.is(e,t)}function Ud(e){return xa().cN(e)}var Wd=new T().i(0,`java.lang.Double`,{ap:1,S:1,a:1,Q:1,M:1,Y:1},(e=>typeof e==`number`)),Gd=new T().i(0,`java.lang.Float`,{cD:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Yn(e))),Kd=new T().i(0,`java.lang.Integer`,{cG:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Jn(e)));function qd(e,t){return t instanceof M&&e.e===t.e&&e.f===t.f}function Jd(e){return e.e^e.f}var Yd=new T().i(0,`java.lang.Long`,{ar:1,S:1,a:1,Q:1,M:1,Y:1},(e=>e instanceof M));function J(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Xd(e,t){return e===t}var Zd=new T().i(0,`java.lang.String`,{cN:1,a:1,Q:1,a5:1,M:1,Y:1},(e=>typeof e==`string`)),Qd=class extends Uu{constructor(){super(),tc(this,null,null,!0,!0)}};new T().i(Qd,`java.lang.StringIndexOutOfBoundsException`,{cQ:1,aq:1,R:1,L:1,u:1,a:1});function $d(){}b=$d.prototype=new nd,b.constructor=$d;function ef(){}ef.prototype=b,b.gA=(function(){throw new Yu(`None.get`)}),b.av=(function(){return`None`}),b.at=(function(){return 0}),b.au=(function(e){return L().bA(e)}),b.b7=(function(){return new kd(this)}),b.t=(function(){return 2433880}),b.x=(function(){return`None`}),b.C=(function(){this.gA()}),new T().i($d,`scala.None$`,{d5:1,aw:1,b:1,X:1,d:1,a:1});var tf;function Y(){return tf||=new $d,tf}function X(e){this.bd=null,this.bd=e}b=X.prototype=new nd,b.constructor=X;function nf(){}nf.prototype=b,b.C=(function(){return this.bd}),b.av=(function(){return`Some`}),b.at=(function(){return 1}),b.au=(function(e){return e===0?this.bd:L().bA(e)}),b.b7=(function(){return new kd(this)}),b.t=(function(){return R().fp(this,-889275714,!1)}),b.x=(function(){return I().fP(this)}),b.n=(function(e){return this===e||e instanceof X&&F().O(this.bd,e.bd)}),new T().i(X,`scala.Some`,{ax:1,aw:1,b:1,X:1,d:1,a:1});function rf(){}b=rf.prototype=new S,b.constructor=rf;function af(){}af.prototype=b,b.b3=(function(){return this.b8()}),b.a3=(function(e){Fo(this,e)}),b.bl=(function(e,t,n,r){return Lo(this,e,t,n,r)}),b.E=(function(){return-1});function of(e,t){return e.K=t,e.h=0,e.F=po().b4(e.K),e}function sf(){this.K=null,this.h=0,this.F=0}b=sf.prototype=new vu,b.constructor=sf;function cf(){}cf.prototype=b,b.E=(function(){return this.F-this.h|0}),b.w=(function(){return this.h<this.F}),b.k=(function(){this.h>=po().b4(this.K)&&U().z.k();var e=I().b2(this.K,this.h);return this.h=1+this.h|0,e}),b.c1=(function(e){if(e>0){var t=this.h+e|0;if(t<0)var n=this.F;else var r=this.F,n=r<t?r:t;this.h=n}return this}),new T().i(sf,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function lf(e,t){return t<0?0:t>e.U?e.U:t}function uf(e){this.ex=null,this.af=0,this.U=0,this.ex=e,this.af=0,this.U=e.p()}b=uf.prototype=new vu,b.constructor=uf;function df(){}df.prototype=b,b.E=(function(){return this.U}),b.w=(function(){return this.U>0}),b.k=(function(){if(this.U>0){var e=this.ex.s(this.af);return this.af=1+this.af|0,this.U=-1+this.U|0,e}else return U().z.k()}),b.c1=(function(e){if(e>0){this.af=this.af+e|0;var t=this.U-e|0;this.U=t<0?0:t}return this}),b.bG=(function(e,t){var n=lf(this,e),r=lf(this,t)-n|0;return this.U=r<0?0:r,this.af=this.af+n|0,this}),new T().i(uf,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{ds:1,r:1,s:1,b:1,c:1,a:1});function ff(e){return e.cB||=(e.cC=new Zp(new C(0)),!0),e.cC}function pf(e){return e.cB?e.cC:ff(e)}function mf(){this.cC=null,this.fJ=null,this.cB=!1,gf=this,this.fJ=new ad(this)}b=mf.prototype=new S,b.constructor=mf;function hf(){}hf.prototype=b,b.gx=(function(e,t){return e instanceof Pp?e:this.hw(oc().fe(e,t))}),b.hw=(function(e){if(e===null)return null;if(e instanceof C)return new Zp(e);if(e instanceof w)return new qp(e);if(e instanceof sr)return new Up(e);if(e instanceof ar)return new Yp(e);if(e instanceof or)return new Gp(e);if(e instanceof nr)return new Vp(e);if(e instanceof rr)return new zp(e);if(e instanceof ir)return new $p(e);if(e instanceof tr)return new Lp(e);if(oo(e,1))return new tm(e);throw new ed(e)}),b.cJ=(function(e,t){return this.gx(e,t)}),new T().i(mf,`scala.collection.immutable.ArraySeq$`,{dG:1,aD:1,az:1,ay:1,aA:1,a:1});var gf;function _f(){return gf||=new mf,gf}function vf(){this.fK=null,this.eA=null,bf=this,this.fK=new ad(this),this.eA=new xm(new C(0))}b=vf.prototype=new S,b.constructor=vf;function yf(){}yf.prototype=b,b.gy=(function(e,t){return this.gQ(oc().fe(e,t))}),b.gQ=(function(e){if(e===null)return null;if(e instanceof C)return new xm(e);if(e instanceof w)return new _m(e);if(e instanceof sr)return new pm(e);if(e instanceof ar)return new ym(e);if(e instanceof or)return new hm(e);if(e instanceof nr)return new dm(e);if(e instanceof rr)return new lm(e);if(e instanceof ir)return new Cm(e);if(e instanceof tr)return new sm(e);if(oo(e,1))return new Tm(e);throw new ed(e)}),b.cJ=(function(e,t){return this.gy(e,t)}),new T().i(vf,`scala.collection.mutable.ArraySeq$`,{dK:1,aD:1,az:1,ay:1,aA:1,a:1});var bf;function xf(){return bf||=new vf,bf}function Sf(e){this.ad=null,this.ae=null,this.dp=null,this.dq=!1,$l(this,e,Mm())}b=Sf.prototype=new tu,b.constructor=Sf;function Cf(){}Cf.prototype=b,b.fd=(function(){return this.dq||=(this.dp=this.o(`flex`),!0),this.dp}),new T().i(Sf,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bM:1,V:1,v:1,T:1,U:1,bX:1,bS:1});function wf(e){this.ad=null,this.ae=null,this.dr=null,this.ds=!1,$l(this,e,Mm())}b=wf.prototype=new tu,b.constructor=wf;function Tf(){}Tf.prototype=b,b.g2=(function(){return this.ds||=(this.dr=this.o(`center`),!0),this.dr}),new T().i(wf,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bN:1,V:1,v:1,T:1,U:1,bY:1,bU:1});function Ef(e){this.ad=null,this.ae=null,this.dz=null,this.dA=!1,$l(this,e,Mm())}b=Ef.prototype=new tu,b.constructor=Ef;function Df(){}Df.prototype=b,b.aw=(function(){return this.dA||=(this.dz=gs(this),!0),this.dz}),new T().i(Ef,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bR:1,V:1,v:1,T:1,U:1,ab:1,ac:1});function Of(){}b=Of.prototype=new Ru,b.constructor=Of;function kf(){}kf.prototype=b;function Af(e){this.K=null,this.h=0,this.F=0,this.cr=null,this.cr=e,of(this,e)}b=Af.prototype=new cf,b.constructor=Af;function jf(){}jf.prototype=b,b.gW=(function(){this.h>=this.cr.a.length&&U().z.k();var e=this.cr.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.gW()}),new T().i(Af,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{de:1,N:1,r:1,s:1,b:1,c:1,a:1});function Mf(e){this.K=null,this.h=0,this.F=0,this.cs=null,this.cs=e,of(this,e)}b=Mf.prototype=new cf,b.constructor=Mf;function Nf(){}Nf.prototype=b,b.gX=(function(){this.h>=this.cs.a.length&&U().z.k();var e=this.cs.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return Xn(this.gX())}),new T().i(Mf,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{df:1,N:1,r:1,s:1,b:1,c:1,a:1});function Pf(e){this.K=null,this.h=0,this.F=0,this.ct=null,this.ct=e,of(this,e)}b=Pf.prototype=new cf,b.constructor=Pf;function Ff(){}Ff.prototype=b,b.gY=(function(){this.h>=this.ct.a.length&&U().z.k();var e=this.ct.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.gY()}),new T().i(Pf,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dg:1,N:1,r:1,s:1,b:1,c:1,a:1});function If(e){this.K=null,this.h=0,this.F=0,this.cu=null,this.cu=e,of(this,e)}b=If.prototype=new cf,b.constructor=If;function Lf(){}Lf.prototype=b,b.gZ=(function(){this.h>=this.cu.a.length&&U().z.k();var e=this.cu.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.gZ()}),new T().i(If,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dh:1,N:1,r:1,s:1,b:1,c:1,a:1});function Rf(e){this.K=null,this.h=0,this.F=0,this.cv=null,this.cv=e,of(this,e)}b=Rf.prototype=new cf,b.constructor=Rf;function zf(){}zf.prototype=b,b.h0=(function(){this.h>=this.cv.a.length&&U().z.k();var e=this.cv.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.h0()}),new T().i(Rf,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{di:1,N:1,r:1,s:1,b:1,c:1,a:1});function Bf(e){this.K=null,this.h=0,this.F=0,this.cw=null,this.cw=e,of(this,e)}b=Bf.prototype=new cf,b.constructor=Bf;function Vf(){}Vf.prototype=b,b.h1=(function(){this.h>=this.cw.a.length&&U().z.k();var e=this.cw.a[this.h],t=e.e,n=e.f;return this.h=1+this.h|0,new M(t,n)}),b.k=(function(){return this.h1()}),new T().i(Bf,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dj:1,N:1,r:1,s:1,b:1,c:1,a:1});function Hf(e){this.K=null,this.h=0,this.F=0,this.cx=null,this.cx=e,of(this,e)}b=Hf.prototype=new cf,b.constructor=Hf;function Uf(){}Uf.prototype=b,b.h2=(function(){this.h>=this.cx.a.length&&U().z.k();var e=this.cx.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.h2()}),new T().i(Hf,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dk:1,N:1,r:1,s:1,b:1,c:1,a:1});function Wf(e){this.K=null,this.h=0,this.F=0,this.ew=null,this.ew=e,of(this,e)}b=Wf.prototype=new cf,b.constructor=Wf;function Gf(){}Gf.prototype=b,b.h3=(function(){this.h>=this.ew.a.length&&U().z.k(),this.h=1+this.h|0}),b.k=(function(){this.h3()}),new T().i(Wf,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dl:1,N:1,r:1,s:1,b:1,c:1,a:1});function Kf(e){this.K=null,this.h=0,this.F=0,this.cy=null,this.cy=e,of(this,e)}b=Kf.prototype=new cf,b.constructor=Kf;function qf(){}qf.prototype=b,b.h4=(function(){this.h>=this.cy.a.length&&U().z.k();var e=this.cy.a[this.h];return this.h=1+this.h|0,e}),b.k=(function(){return this.h4()}),new T().i(Kf,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dm:1,N:1,r:1,s:1,b:1,c:1,a:1});function Jf(e){return e.b3()+`(<not computed>)`}function Yf(){}b=Yf.prototype=new S,b.constructor=Yf;function Xf(){}Xf.prototype=b;var Z=class e extends fu{constructor(e){super(),this.V=null,this.V=e,tc(this,null,null,!0,!0)}bz(){return Ln(this.V)}av(){return`JavaScriptException`}at(){return 1}au(e){return e===0?this.V:L().bA(e)}b7(){return new kd(this)}t(){return R().fp(this,-889275714,!1)}n(t){return this===t||t instanceof e&&F().O(this.V,t.V)}};new T().i(Z,`scala.scalajs.js.JavaScriptException`,{b7:1,R:1,L:1,u:1,a:1,X:1,d:1});function Zf(e){this.ad=null,this.ae=null,this.dx=null,this.dy=!1,$l(this,e,Mm())}b=Zf.prototype=new tu,b.constructor=Zf;function Qf(){}Qf.prototype=b,b.aw=(function(){return this.dy||=(this.dx=gs(this),!0),this.dx}),new T().i(Zf,`com.raquo.laminar.defs.styles.StyleProps$$anon$33`,{bQ:1,V:1,v:1,T:1,U:1,ab:1,ac:1,bW:1});function $f(e,t){typeof console<`u`&&(e.ek&&console.error?console.error(t):console.log(t))}function ep(e){this.ek=!1,this.ba=null,this.ek=e,new Wu,this.ba=``}b=ep.prototype=new kf,b.constructor=ep;function tp(){}tp.prototype=b,b.gN=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.ba=``+this.ba+t,t=``;else{var r=this.ba,i=t;$f(this,``+r+i.substring(0,n)),this.ba=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(ep,`java.lang.JSConsoleBasedPrintStream`,{cH:1,cy:1,cx:1,al:1,aj:1,an:1,ak:1,am:1});function np(e,t,n){for(;;)if(t<=0||n.i())return n;else{var r=-1+t|0,i=n.a0();t=r,n=i}}function rp(){this.cD=null}b=rp.prototype=new Xf,b.constructor=rp;function ip(){}ip.prototype=b,b.x=(function(){return this.cD}),b.n=(function(e){return this===e}),b.t=(function(){return Gn(this)});function ap(){}b=ap.prototype=new af,b.constructor=ap;function op(){}op.prototype=b,b.x=(function(){return Jf(this)});function sp(){this.cD=null,this.cD=`Any`}b=sp.prototype=new ip,b.constructor=sp;function cp(){}cp.prototype=b,b.hf=(function(){return E.l()}),b.gU=(function(e){return new C(e)}),new T().i(sp,`scala.reflect.ManifestFactory$AnyManifest$`,{dY:1,e0:1,dZ:1,dX:1,dW:1,dV:1,e1:1,a:1,d:1});var lp;function up(){return lp||=new sp,lp}function Q(e,t){return e===t?!0:dp(t)&&t.eY(e)?e.cP(t):!1}function dp(e){return!!(e&&e.$classData&&e.$classData.n.f)}function fp(){}b=fp.prototype=new af,b.constructor=fp;function pp(){}pp.prototype=b,b.eY=(function(e){return!0}),b.n=(function(e){return Q(this,e)}),b.t=(function(){return R().hg(this)}),b.x=(function(){return sd(this)}),b.i=(function(){return Su(this)}),b.cP=(function(e){return Cu(this,e)});function mp(){}b=mp.prototype=new op,b.constructor=mp;function hp(){}hp.prototype=b;function gp(e){return!!(e&&e.$classData&&e.$classData.n.n)}function _p(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function vp(e,t){return e.bg=t,e}function yp(){this.bg=null}b=yp.prototype=new hp,b.constructor=yp;function bp(){}bp.prototype=b,b.s=(function(e){return this.bg.s(e)}),b.p=(function(){return this.bg.p()}),b.i=(function(){return this.bg.i()});function xp(){this.db=null,this.dc=!1,this.d7=null,this.d8=!1,this.d9=null,this.da=!1,this.dd=null,this.de=!1,this.df=null,this.dg=!1,this.dh=null,this.di=!1,this.dj=null,this.dk=!1,this.fx=null,this.fw=null,this.dl=null,this.dm=!1,Ai(this),wi(this),Si(this),Ci(this)}b=xp.prototype=new S,b.constructor=xp;function Sp(){}Sp.prototype=b,b.f3=(function(){return this.dc||=(this.db=Fs(new Is,`div`,!1),!0),this.db}),b.fS=(function(){return this.d8||=(this.d7=new wf(`align-items`),!0),this.d7}),b.f2=(function(){return this.da||=(this.d9=new Sf(`display`),!0),this.d9}),b.gt=(function(){return this.de||=(this.dd=new Id(`flex-direction`),!0),this.dd}),b.gu=(function(){return this.dg||=(this.df=new Rd(`flex-wrap`),!0),this.df}),b.by=(function(){return this.di||=(this.dh=new Zf(`font-size`),!0),this.dh}),b.fh=(function(){return this.dk||=(this.dj=new Ef(`gap`),!0),this.dj}),b.ho=(function(){return this.dm||=(this.dl=new Jl(this),!0),this.dl}),new T().i(xp,`com.raquo.laminar.api.package$$anon$1`,{bB:1,bZ:1,bF:1,bK:1,bJ:1,bL:1,bH:1,bz:1,bv:1,by:1,aa:1,ad:1,a9:1,bw:1});function Cp(e){this.bg=null,vp(this,e)}b=Cp.prototype=new bp,b.constructor=Cp;function wp(){}wp.prototype=b,b.r=(function(){return new uf(this)}),b.b8=(function(){return`IndexedSeqView`}),b.b5=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),b.E=(function(){return this.p()}),new T().i(Cp,`scala.collection.IndexedSeqView$Id`,{dr:1,dB:1,db:1,dc:1,h:1,i:1,b:1,k:1,c:1,j:1,dE:1,a:1,dA:1,l:1,dq:1,o:1});function Tp(){}b=Tp.prototype=new pp,b.constructor=Tp;function Ep(){}Ep.prototype=b;function Dp(e,t){return!kp(t)||e.p()===t.p()}function Op(e,t){if(kp(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.eN(),o=t.eN(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().O(e.s(i),t.s(i)),i=1+i|0;if(i<n&&r)for(var p=e.r().c1(i),m=t.r().c1(i);r&&p.w();)r=F().O(p.k(),m.k())}return r}else return Cu(e,t)}function kp(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Ap(){}b=Ap.prototype=new pp,b.constructor=Ap;function jp(){}jp.prototype=b;function Mp(){}b=Mp.prototype=new jp,b.constructor=Mp;function Np(){}Np.prototype=b,b.eL=(function(e){return _c(this,e)});function Pp(){}b=Pp.prototype=new Ep,b.constructor=Pp;function Fp(){}Fp.prototype=b,b.eY=(function(e){return Dp(this,e)}),b.cP=(function(e){return Op(this,e)}),b.b8=(function(){return`IndexedSeq`}),b.b5=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),b.E=(function(){return this.p()}),b.b3=(function(){return`ArraySeq`}),b.eN=(function(){return 2147483647});function $(){}b=$.prototype=new jp,b.constructor=$;function Ip(){}Ip.prototype=b,b.b8=(function(){return`IndexedSeq`}),b.b5=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),b.E=(function(){return this.p()}),b.b3=(function(){return`ArraySeq`}),b.n=(function(e){return e instanceof $&&po().b4(this.X())!==po().b4(e.X())?!1:Q(this,e)});function Lp(e){this.aC=null,this.aC=e}b=Lp.prototype=new Fp,b.constructor=Lp;function Rp(){}Rp.prototype=b,b.p=(function(){return this.aC.a.length}),b.t=(function(){var e=R();return e.eX(this.aC,e.y)}),b.n=(function(e){return e instanceof Lp?j().fb(this.aC,e.aC):Q(this,e)}),b.r=(function(){return new Kf(this.aC)}),b.bu=(function(e){return this.aC.a[e]}),b.l=(function(e){return this.bu(e|0)}),b.s=(function(e){return this.bu(e)}),new T().i(Lp,`scala.collection.immutable.ArraySeq$ofBoolean`,{aG:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function zp(e){this.aD=null,this.aD=e}b=zp.prototype=new Fp,b.constructor=zp;function Bp(){}Bp.prototype=b,b.p=(function(){return this.aD.a.length}),b.bm=(function(e){return this.aD.a[e]}),b.t=(function(){var e=R();return e.eP(this.aD,e.y)}),b.n=(function(e){return e instanceof zp?j().f4(this.aD,e.aD):Q(this,e)}),b.r=(function(){return new Af(this.aD)}),b.l=(function(e){return this.bm(e|0)}),b.s=(function(e){return this.bm(e)}),new T().i(zp,`scala.collection.immutable.ArraySeq$ofByte`,{aH:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Vp(e){this.ai=null,this.ai=e}b=Vp.prototype=new Fp,b.constructor=Vp;function Hp(){}Hp.prototype=b,b.p=(function(){return this.ai.a.length}),b.bn=(function(e){return this.ai.a[e]}),b.t=(function(){var e=R();return e.eQ(this.ai,e.y)}),b.n=(function(e){return e instanceof Vp?j().f5(this.ai,e.ai):Q(this,e)}),b.r=(function(){return new Mf(this.ai)}),b.bl=(function(e,t,n,r){return new dm(this.ai).bl(e,t,n,r)}),b.l=(function(e){return Xn(this.bn(e|0))}),b.s=(function(e){return Xn(this.bn(e))}),new T().i(Vp,`scala.collection.immutable.ArraySeq$ofChar`,{aI:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Up(e){this.aE=null,this.aE=e}b=Up.prototype=new Fp,b.constructor=Up;function Wp(){}Wp.prototype=b,b.p=(function(){return this.aE.a.length}),b.t=(function(){var e=R();return e.eR(this.aE,e.y)}),b.n=(function(e){return e instanceof Up?j().f6(this.aE,e.aE):Q(this,e)}),b.r=(function(){return new Pf(this.aE)}),b.bp=(function(e){return this.aE.a[e]}),b.l=(function(e){return this.bp(e|0)}),b.s=(function(e){return this.bp(e)}),new T().i(Up,`scala.collection.immutable.ArraySeq$ofDouble`,{aJ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Gp(e){this.aF=null,this.aF=e}b=Gp.prototype=new Fp,b.constructor=Gp;function Kp(){}Kp.prototype=b,b.p=(function(){return this.aF.a.length}),b.t=(function(){var e=R();return e.eS(this.aF,e.y)}),b.n=(function(e){return e instanceof Gp?j().f7(this.aF,e.aF):Q(this,e)}),b.r=(function(){return new If(this.aF)}),b.bq=(function(e){return this.aF.a[e]}),b.l=(function(e){return this.bq(e|0)}),b.s=(function(e){return this.bq(e)}),new T().i(Gp,`scala.collection.immutable.ArraySeq$ofFloat`,{aK:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function qp(e){this.aG=null,this.aG=e}b=qp.prototype=new Fp,b.constructor=qp;function Jp(){}Jp.prototype=b,b.p=(function(){return this.aG.a.length}),b.t=(function(){var e=R();return e.eT(this.aG,e.y)}),b.n=(function(e){return e instanceof qp?j().f8(this.aG,e.aG):Q(this,e)}),b.r=(function(){return new Rf(this.aG)}),b.br=(function(e){return this.aG.a[e]}),b.l=(function(e){return this.br(e|0)}),b.s=(function(e){return this.br(e)}),new T().i(qp,`scala.collection.immutable.ArraySeq$ofInt`,{aL:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Yp(e){this.aH=null,this.aH=e}b=Yp.prototype=new Fp,b.constructor=Yp;function Xp(){}Xp.prototype=b,b.p=(function(){return this.aH.a.length}),b.t=(function(){var e=R();return e.eU(this.aH,e.y)}),b.n=(function(e){return e instanceof Yp?j().f9(this.aH,e.aH):Q(this,e)}),b.r=(function(){return new Bf(this.aH)}),b.bs=(function(e){return this.aH.a[e]}),b.l=(function(e){return this.bs(e|0)}),b.s=(function(e){return this.bs(e)}),new T().i(Yp,`scala.collection.immutable.ArraySeq$ofLong`,{aM:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Zp(e){this.aI=null,this.aI=e}b=Zp.prototype=new Fp,b.constructor=Zp;function Qp(){}Qp.prototype=b,b.p=(function(){return this.aI.a.length}),b.s=(function(e){return this.aI.a[e]}),b.t=(function(){var e=R();return e.eO(this.aI,e.y)}),b.n=(function(e){return e instanceof Zp?oc().fc(this.aI,e.aI):Q(this,e)}),b.r=(function(){return of(new sf,this.aI)}),b.l=(function(e){return this.s(e|0)}),new T().i(Zp,`scala.collection.immutable.ArraySeq$ofRef`,{aN:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function $p(e){this.aJ=null,this.aJ=e}b=$p.prototype=new Fp,b.constructor=$p;function em(){}em.prototype=b,b.p=(function(){return this.aJ.a.length}),b.bo=(function(e){return this.aJ.a[e]}),b.t=(function(){var e=R();return e.eV(this.aJ,e.y)}),b.n=(function(e){return e instanceof $p?j().fa(this.aJ,e.aJ):Q(this,e)}),b.r=(function(){return new Hf(this.aJ)}),b.l=(function(e){return this.bo(e|0)}),b.s=(function(e){return this.bo(e)}),new T().i($p,`scala.collection.immutable.ArraySeq$ofShort`,{aO:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function tm(e){this.b0=null,this.b0=e}b=tm.prototype=new Fp,b.constructor=tm;function nm(){}nm.prototype=b,b.p=(function(){return this.b0.a.length}),b.t=(function(){var e=R();return e.eW(this.b0,e.y)}),b.n=(function(e){return e instanceof tm?this.b0.a.length===e.b0.a.length:Q(this,e)}),b.r=(function(){return new Wf(this.b0)}),b.bt=(function(e){}),b.l=(function(e){this.bt(e|0)}),b.s=(function(e){this.bt(e)}),new T().i(tm,`scala.collection.immutable.ArraySeq$ofUnit`,{aP:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function rm(e,t,n,r){for(;;)if(t===r)return n.i()?0:1;else if(n.i())return-1;else{var i=1+t|0,a=n.a0();t=i,n=a}}function im(e,t,n){for(;;)if(t===n)return!0;else{var r=t.i(),i=n.i();if(!(r||i)&&F().O(t.a7(),n.a7())){var a=t.a0(),o=n.a0();t=a,n=o}else return r&&i}}function am(){}b=am.prototype=new Ep,b.constructor=am;function om(){}om.prototype=b,b.r=(function(){return new Cd(this)}),b.b8=(function(){return`LinearSeq`}),b.s=(function(e){return bd(this,e)}),b.cP=(function(e){return xd(this,e)}),b.i=(function(){return this===Mm()}),b.a3=(function(e){for(var t=this;!t.i();)e.l(t.a7()),t=t.a0()}),b.p=(function(){for(var e=this,t=0;!e.i();)t=1+t|0,e=e.a0();return t}),b.b5=(function(e){return e<0?1:rm(this,0,this,e)}),b.b3=(function(){return`List`}),b.n=(function(e){return e instanceof am?im(this,this,e):Q(this,e)}),b.l=(function(e){return bd(this,e|0)}),b.gf=(function(e){return np(this,e,this)});function sm(e){this.aj=null,this.aj=e}b=sm.prototype=new Ip,b.constructor=sm;function cm(){}cm.prototype=b,b.p=(function(){return this.aj.a.length}),b.t=(function(){var e=R();return e.eX(this.aj,e.y)}),b.n=(function(e){return e instanceof sm?j().fb(this.aj,e.aj):$.prototype.n.call(this,e)}),b.r=(function(){return new Kf(this.aj)}),b.bu=(function(e){return this.aj.a[e]}),b.l=(function(e){return this.bu(e|0)}),b.s=(function(e){return this.bu(e)}),b.X=(function(){return this.aj}),new T().i(sm,`scala.collection.mutable.ArraySeq$ofBoolean`,{aS:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function lm(e){this.ak=null,this.ak=e}b=lm.prototype=new Ip,b.constructor=lm;function um(){}um.prototype=b,b.p=(function(){return this.ak.a.length}),b.bm=(function(e){return this.ak.a[e]}),b.t=(function(){var e=R();return e.eP(this.ak,e.y)}),b.n=(function(e){return e instanceof lm?j().f4(this.ak,e.ak):$.prototype.n.call(this,e)}),b.r=(function(){return new Af(this.ak)}),b.l=(function(e){return this.bm(e|0)}),b.s=(function(e){return this.bm(e)}),b.X=(function(){return this.ak}),new T().i(lm,`scala.collection.mutable.ArraySeq$ofByte`,{aT:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function dm(e){this.S=null,this.S=e}b=dm.prototype=new Ip,b.constructor=dm;function fm(){}fm.prototype=b,b.p=(function(){return this.S.a.length}),b.bn=(function(e){return this.S.a[e]}),b.t=(function(){var e=R();return e.eQ(this.S,e.y)}),b.n=(function(e){return e instanceof dm?j().f5(this.S,e.S):$.prototype.n.call(this,e)}),b.r=(function(){return new Mf(this.S)}),b.bl=(function(e,t,n,r){var i=e.M;t.length!==0&&(i.u=``+i.u+t);var a=this.S.a.length;if(a!==0)if(n===``)i.fU(this.S);else{i.p();var o=this.S.a[0],s=``+Vn(o);i.u+=s;for(var c=1;c<a;){i.u=``+i.u+n;var l=this.S.a[c],u=``+Vn(l);i.u+=u,c=1+c|0}}return r.length!==0&&(i.u=``+i.u+r),e}),b.l=(function(e){return Xn(this.bn(e|0))}),b.s=(function(e){return Xn(this.bn(e))}),b.X=(function(){return this.S}),new T().i(dm,`scala.collection.mutable.ArraySeq$ofChar`,{aU:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function pm(e){this.al=null,this.al=e}b=pm.prototype=new Ip,b.constructor=pm;function mm(){}mm.prototype=b,b.p=(function(){return this.al.a.length}),b.t=(function(){var e=R();return e.eR(this.al,e.y)}),b.n=(function(e){return e instanceof pm?j().f6(this.al,e.al):$.prototype.n.call(this,e)}),b.r=(function(){return new Pf(this.al)}),b.bp=(function(e){return this.al.a[e]}),b.l=(function(e){return this.bp(e|0)}),b.s=(function(e){return this.bp(e)}),b.X=(function(){return this.al}),new T().i(pm,`scala.collection.mutable.ArraySeq$ofDouble`,{aV:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function hm(e){this.am=null,this.am=e}b=hm.prototype=new Ip,b.constructor=hm;function gm(){}gm.prototype=b,b.p=(function(){return this.am.a.length}),b.t=(function(){var e=R();return e.eS(this.am,e.y)}),b.n=(function(e){return e instanceof hm?j().f7(this.am,e.am):$.prototype.n.call(this,e)}),b.r=(function(){return new If(this.am)}),b.bq=(function(e){return this.am.a[e]}),b.l=(function(e){return this.bq(e|0)}),b.s=(function(e){return this.bq(e)}),b.X=(function(){return this.am}),new T().i(hm,`scala.collection.mutable.ArraySeq$ofFloat`,{aW:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function _m(e){this.an=null,this.an=e}b=_m.prototype=new Ip,b.constructor=_m;function vm(){}vm.prototype=b,b.p=(function(){return this.an.a.length}),b.t=(function(){var e=R();return e.eT(this.an,e.y)}),b.n=(function(e){return e instanceof _m?j().f8(this.an,e.an):$.prototype.n.call(this,e)}),b.r=(function(){return new Rf(this.an)}),b.br=(function(e){return this.an.a[e]}),b.l=(function(e){return this.br(e|0)}),b.s=(function(e){return this.br(e)}),b.X=(function(){return this.an}),new T().i(_m,`scala.collection.mutable.ArraySeq$ofInt`,{aX:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function ym(e){this.ao=null,this.ao=e}b=ym.prototype=new Ip,b.constructor=ym;function bm(){}bm.prototype=b,b.p=(function(){return this.ao.a.length}),b.t=(function(){var e=R();return e.eU(this.ao,e.y)}),b.n=(function(e){return e instanceof ym?j().f9(this.ao,e.ao):$.prototype.n.call(this,e)}),b.r=(function(){return new Bf(this.ao)}),b.bs=(function(e){return this.ao.a[e]}),b.l=(function(e){return this.bs(e|0)}),b.s=(function(e){return this.bs(e)}),b.X=(function(){return this.ao}),new T().i(ym,`scala.collection.mutable.ArraySeq$ofLong`,{aY:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function xm(e){this.ap=null,this.ap=e}b=xm.prototype=new Ip,b.constructor=xm;function Sm(){}Sm.prototype=b,b.p=(function(){return this.ap.a.length}),b.s=(function(e){return this.ap.a[e]}),b.t=(function(){var e=R();return e.eO(this.ap,e.y)}),b.n=(function(e){return e instanceof xm?oc().fc(this.ap,e.ap):$.prototype.n.call(this,e)}),b.r=(function(){return of(new sf,this.ap)}),b.l=(function(e){return this.s(e|0)}),b.X=(function(){return this.ap}),new T().i(xm,`scala.collection.mutable.ArraySeq$ofRef`,{aZ:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Cm(e){this.aq=null,this.aq=e}b=Cm.prototype=new Ip,b.constructor=Cm;function wm(){}wm.prototype=b,b.p=(function(){return this.aq.a.length}),b.bo=(function(e){return this.aq.a[e]}),b.t=(function(){var e=R();return e.eV(this.aq,e.y)}),b.n=(function(e){return e instanceof Cm?j().fa(this.aq,e.aq):$.prototype.n.call(this,e)}),b.r=(function(){return new Hf(this.aq)}),b.l=(function(e){return this.bo(e|0)}),b.s=(function(e){return this.bo(e)}),b.X=(function(){return this.aq}),new T().i(Cm,`scala.collection.mutable.ArraySeq$ofShort`,{b0:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Tm(e){this.aK=null,this.aK=e}b=Tm.prototype=new Ip,b.constructor=Tm;function Em(){}Em.prototype=b,b.p=(function(){return this.aK.a.length}),b.t=(function(){var e=R();return e.eW(this.aK,e.y)}),b.n=(function(e){return e instanceof Tm?this.aK.a.length===e.aK.a.length:$.prototype.n.call(this,e)}),b.r=(function(){return new Wf(this.aK)}),b.bt=(function(e){}),b.l=(function(e){this.bt(e|0)}),b.s=(function(e){this.bt(e)}),b.X=(function(){return this.aK}),new T().i(Tm,`scala.collection.mutable.ArraySeq$ofUnit`,{b1:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Dm(e,t){this.cz=null,this.cA=null,this.cz=e,this.cA=t}b=Dm.prototype=new om,b.constructor=Dm;function Om(){}Om.prototype=b,b.a7=(function(){return this.cz}),b.av=(function(){return`::`}),b.at=(function(){return 2}),b.au=(function(e){switch(e){case 0:return this.cz;case 1:return this.cA;default:return L().bA(e)}}),b.b7=(function(){return new kd(this)}),b.a0=(function(){return this.cA}),new T().i(Dm,`scala.collection.immutable.$colon$colon`,{dF:1,a7:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aQ:1,a1:1,aC:1,aR:1,aE:1,q:1,p:1,B:1,aF:1,a:1,X:1});function km(){}b=km.prototype=new om,b.constructor=km;function Am(){}Am.prototype=b,b.gI=(function(){throw new Yu(`head of empty list`)}),b.hr=(function(){throw new Ju(`tail of empty list`)}),b.E=(function(){return 0}),b.r=(function(){return U().z}),b.av=(function(){return`Nil`}),b.at=(function(){return 0}),b.au=(function(e){return L().bA(e)}),b.b7=(function(){return new kd(this)}),b.a0=(function(){this.hr()}),b.a7=(function(){this.gI()}),new T().i(km,`scala.collection.immutable.Nil$`,{dI:1,a7:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aQ:1,a1:1,aC:1,aR:1,aE:1,q:1,p:1,B:1,aF:1,a:1,X:1});var jm;function Mm(){return jm||=new km,jm}function Nm(e,t){return e.M=t,e}function Pm(e){return Nm(e,new pu),e}function Fm(){this.M=null}b=Fm.prototype=new jp,b.constructor=Fm;function Im(){}Im.prototype=b,b.b8=(function(){return`IndexedSeq`}),b.r=(function(){return new uf(new Cp(this))}),b.b5=(function(e){var t=this.M.p();return t===e?0:t<e?-1:1}),b.eL=(function(e){return _c(this,e)}),b.p=(function(){return this.M.p()}),b.E=(function(){return this.M.p()}),b.fQ=(function(e){var t=this.M,n=``+Vn(e);return t.u+=n,this}),b.x=(function(){return this.M.u}),b.i=(function(){return this.M.p()===0}),b.fq=(function(){return this.M.u}),b.cG=(function(e){return this.fQ(Zn(e))}),b.l=(function(e){var t=e|0;return Xn(this.M.eZ(t))}),b.s=(function(e){return Xn(this.M.eZ(e))}),new T().i(Fm,`scala.collection.mutable.StringBuilder`,{dQ:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,dO:1,b2:1,b4:1,b3:1,E:1,n:1,o:1,F:1,a5:1,a:1});function Lm(e,t){return e.aL=t,e}function Rm(e){return Lm(e,[]),e}function zm(){this.aL=null}b=zm.prototype=new Np,b.constructor=zm;function Bm(){}Bm.prototype=b,b.b8=(function(){return`IndexedSeq`}),b.r=(function(){return new uf(new Cp(this))}),b.b5=(function(e){var t=this.aL.length|0;return t===e?0:t<e?-1:1}),b.s=(function(e){return this.aL[e]}),b.p=(function(){return this.aL.length|0}),b.E=(function(){return this.aL.length|0}),b.b3=(function(){return`WrappedArray`}),b.fq=(function(){return this}),b.cG=(function(e){return this.aL.push(e),this}),b.l=(function(e){var t=e|0;return this.aL[t]}),new T().i(zm,`scala.scalajs.js.WrappedArray`,{eh:1,dJ:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,t:1,dL:1,b4:1,b3:1,dP:1,q:1,p:1,E:1,n:1,o:1,F:1,dN:1,b2:1,a:1}),Mn=new M(0,0),ur.z=Mn,_a(new(Zd.r()).C([]));