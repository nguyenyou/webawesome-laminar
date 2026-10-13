var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const n=globalThis,r=n.ShadowRoot&&(n.ShadyCSS===void 0||n.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;var o=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(r&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=a.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}};const s=e=>new o(typeof e==`string`?e:e+``,void 0,i),c=(e,...t)=>new o(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,i),l=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let r of t){let t=document.createElement(`style`),i=n.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=r.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return s(t)})(e):e,{is:d,defineProperty:f,getOwnPropertyDescriptor:p,getOwnPropertyNames:m,getOwnPropertySymbols:h,getPrototypeOf:g}=Object,_=globalThis,v=_.trustedTypes,y=v?v.emptyScript:``,b=_.reactiveElementPolyfillSupport,ee=(e,t)=>e,te={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},x=(e,t)=>!d(e,t),S={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol(`metadata`),_.litPropertyMetadata??=new WeakMap;var C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&f(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(ee(`elementProperties`)))return;let e=g(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ee(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ee(`properties`))){let e=this.properties,t=[...m(e),...h(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(u(e))}else e!==void 0&&t.push(u(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return l(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?te:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?te:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??x)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:`open`},C[ee(`elementProperties`)]=new Map,C[ee(`finalized`)]=new Map,b?.({ReactiveElement:C}),(_.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ne=globalThis,re=ne.trustedTypes,ie=re?re.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ae=`$lit$`,w=`lit$${Math.random().toFixed(9).slice(2)}$`,T=`?`+w,E=`<${T}>`,oe=document,se=()=>oe.createComment(``),ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,le=Array.isArray,ue=e=>le(e)||typeof e?.[Symbol.iterator]==`function`,de=`[ 	
\f\r]`,fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pe=/-->/g,me=/>/g,he=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ge=/'/g,_e=/"/g,ve=/^(?:script|style|textarea|title)$/i,ye=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),be=Symbol.for(`lit-noChange`),xe=Symbol.for(`lit-nothing`),Se=new WeakMap,Ce=oe.createTreeWalker(oe,129);function we(e,t){if(!le(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ie===void 0?t:ie.createHTML(t)}const D=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=fe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===fe?c[1]===`!--`?o=pe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=he):(ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=he):o=me:o===he?c[0]===`>`?(o=i??fe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?he:c[3]===`"`?_e:ge):o===_e||o===ge?o=he:o===pe||o===me?o=fe:(o=he,i=void 0);let d=o===he&&e[t+1].startsWith(`/>`)?` `:``;a+=o===fe?n+E:l>=0?(r.push(s),n.slice(0,l)+ae+n.slice(l)+w+d):n+w+(l===-2?t:d)}return[we(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Te=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=D(t,n);if(this.el=e.createElement(l,r),Ce.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ce.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ae)){let t=u[o++],n=i.getAttribute(e).split(w),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?je:r[1]===`@`?Me:ke}),i.removeAttribute(e)}else e.startsWith(w)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(ve.test(i.tagName)){let e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=re?re.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],se()),Ce.nextNode(),c.push({type:2,index:++a});i.append(e[t],se())}}}else if(i.nodeType===8)if(i.data===T)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(w,e+1))!==-1;)c.push({type:7,index:a}),e+=w.length-1}a++}}static createElement(e,t){let n=oe.createElement(`template`);return n.innerHTML=e,n}};function Ee(e,t,n=e,r){if(t===be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ee(e,i._$AS(e,t.values),i,r)),t}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??oe).importNode(t,!0);Ce.currentNode=r;let i=Ce.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Oe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ne(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ce.nextNode(),a++)}return Ce.currentNode=oe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Oe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=xe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),ce(e)?e===xe||e==null||e===``?(this._$AH!==xe&&this._$AR(),this._$AH=xe):e!==this._$AH&&e!==be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ue(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==xe&&ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Te.createElement(we(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new De(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Se.get(e.strings);return t===void 0&&Se.set(e.strings,t=new Te(e)),t}k(t){le(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(se()),this.O(se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=xe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=xe}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ee(this,e,t,0),a=!ce(e)||e!==this._$AH&&e!==be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ee(this,r[n+o],t,o),s===be&&(s=this._$AH[o]),a||=!ce(s)||s!==this._$AH[o],s===xe?e=xe:e!==xe&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===xe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ae=class extends ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===xe?void 0:e}},je=class extends ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==xe)}},Me=class extends ke{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ee(this,e,t,0)??xe)===be)return;let n=this._$AH,r=e===xe&&n!==xe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==xe&&(n===xe||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};const Pe={M:ae,P:w,A:T,C:1,L:D,R:De,D:ue,V:Ee,I:Oe,H:ke,N:je,U:Me,B:Ae,F:Ne},Fe=ne.litHtmlPolyfillSupport;Fe?.(Te,Oe),(ne.litHtmlVersions??=[]).push(`3.3.1`);const Ie=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Oe(t.insertBefore(se(),e),e,void 0,n??{})}return i._$AI(e),i},Le=globalThis;var Re=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return be}};Re._$litElement$=!0,Re.finalized=!0,Le.litElementHydrateSupport?.({LitElement:Re});const ze=Le.litElementPolyfillSupport;ze?.({LitElement:Re}),(Le.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Be=c`
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
`,Ve=Object.defineProperty,He=Object.getOwnPropertyDescriptor,Ue=e=>{throw TypeError(e)},O=(e,t,n,r)=>{for(var i=r>1?void 0:r?He(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ve(t,n,i),i},We=(e,t,n)=>t.has(e)||Ue(`Cannot `+n),Ge=(e,t,n)=>(We(e,t,`read from private field`),n?n.call(e):t.get(e)),Ke=(e,t,n)=>t.has(e)?Ue(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),qe=(e,t,n,r)=>(We(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Je=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Ye={attribute:!0,type:String,converter:te,reflect:!1,hasChanged:x},Xe=(e=Ye,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function k(e){return(t,n)=>typeof n==`object`?Xe(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ze(e){return k({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Qe=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function $e(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Qe(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Qe(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var et=c`
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
`,tt=/;\s+$/;function nt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function rt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(tt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var it,at=class extends Re{constructor(){super(),Ke(this,it,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[et,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){Ge(this,it)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),qe(this,it,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=rt({property:nt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=rt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};it=new WeakMap,O([k()],at.prototype,`dir`,2),O([k()],at.prototype,`lang`,2),O([k({type:Boolean,reflect:!0,attribute:`did-ssr`})],at.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=class extends at{constructor(){super(...arguments),this.disableRole=!1,this.hasOutlined=!1,this.label=``,this.orientation=`horizontal`}updated(e){super.updated(e),e.has(`orientation`)&&this.setAttribute(`aria-orientation`,this.orientation)}handleFocus(e){st(e.target)?.classList.add(`button-focus`)}handleBlur(e){st(e.target)?.classList.remove(`button-focus`)}handleMouseOver(e){st(e.target)?.classList.add(`button-hover`)}handleMouseOut(e){st(e.target)?.classList.remove(`button-hover`)}render(){return ye`
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
    `}};ot.css=[Be],O([$e(`slot`)],ot.prototype,`defaultSlot`,2),O([Ze()],ot.prototype,`disableRole`,2),O([Ze()],ot.prototype,`hasOutlined`,2),O([k()],ot.prototype,`label`,2),O([k({reflect:!0})],ot.prototype,`orientation`,2),ot=O([Je(`wa-button-group`)],ot);function st(e){let t=`wa-button, wa-radio-button`;return e.closest(t)??e.querySelector(t)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ct=t({default:()=>ot}),lt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),ut=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},dt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),ft=class extends at{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ut))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[dt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};ft.formAssociated=!0,O([k({reflect:!0})],ft.prototype,`name`,2),O([k({type:Boolean})],ft.prototype,`disabled`,2),O([k({state:!0,attribute:!1})],ft.prototype,`valueHasChanged`,2),O([k({state:!0,attribute:!1})],ft.prototype,`hasInteracted`,2),O([k({attribute:`custom-error`,reflect:!0})],ft.prototype,`customError`,2),O([k({attribute:!1,state:!0,type:Object})],ft.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt={small:`s`,medium:`m`,large:`l`},mt=new Set;function ht(e,t){t in pt&&!mt.has(`${e}:${t}`)&&(mt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${pt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},_t=c`
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
`,vt=c`
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
`,yt=c`
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
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function bt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const xt=new Set,St=new Map;let Ct,wt=`ltr`,Tt=`en`;const Et=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Et){let e=new MutationObserver(Ot);wt=document.documentElement.dir||`ltr`,Tt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Dt(...e){e.map(e=>{let t=e.$code.toLowerCase();St.has(t)?St.set(t,Object.assign(Object.assign({},St.get(t)),e)):St.set(t,e),Ct||=e}),Ot()}function Ot(){Et&&(wt=document.documentElement.dir||`ltr`,Tt=document.documentElement.lang||navigator.language),[...xt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var kt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){xt.add(this.host)}hostDisconnected(){xt.delete(this.host)}dir(){return`${this.host.dir||wt}`.toLowerCase()}lang(){let e=`${this.host.lang||Tt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ct?Ct.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=St.get(`${n}-${r}`),a=St.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ct&&Ct[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ct&&Ct[e])i=Ct[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},At={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Dt(At);var jt=At,Mt=class extends kt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Dt(jt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Nt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=e=>(...t)=>({_$litDirective$:e,values:t});var Ft=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const It=Pt(class extends Ft{constructor(e){if(super(e),e.type!==Nt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return be}}),Lt=e=>e??xe,Rt=Symbol.for(``),zt=e=>{if(e?.r===Rt)return e?._$litStatic$},Bt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Rt}),Vt=new Map,Ht=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=zt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Vt.get(e))===void 0&&(o.raw=o,Vt.set(e,t=o)),n=s}return e(t,...n)})(ye);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var A=class extends ft{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new gt(this,`[default]`,`start`,`end`),this.localize=new Mt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,lt()]}handleSizeChange(){ht(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new ut)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Bt`a`:Bt`button`;return Ht`
      <${t}
        part="base button"
        class=${It({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Lt(e?void 0:this.disabled)}
        type=${Lt(e?void 0:this.type)}
        title=${this.title}
        name=${Lt(e?void 0:this.name)}
        value=${Lt(e?void 0:this.value)}
        href=${Lt(e?this.href:void 0)}
        target=${Lt(e?this.target:void 0)}
        download=${Lt(e?this.download:void 0)}
        rel=${Lt(e&&this.rel?this.rel:void 0)}
        role=${Lt(e?void 0:`button`)}
        aria-disabled=${Lt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ht`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ht`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};A.shadowRootOptions={...ft.shadowRootOptions,delegatesFocus:!0},A.css=[vt,yt,_t],O([$e(`.button`)],A.prototype,`button`,2),O([$e(`slot:not([name])`)],A.prototype,`labelSlot`,2),O([Ze()],A.prototype,`invalid`,2),O([Ze()],A.prototype,`isIconButton`,2),O([k()],A.prototype,`title`,2),O([k({reflect:!0})],A.prototype,`variant`,2),O([k({reflect:!0})],A.prototype,`appearance`,2),O([k({reflect:!0})],A.prototype,`size`,2),O([bt(`size`)],A.prototype,`handleSizeChange`,1),O([k({attribute:`with-caret`,type:Boolean,reflect:!0})],A.prototype,`withCaret`,2),O([k({attribute:`with-start`,type:Boolean})],A.prototype,`withStart`,2),O([k({attribute:`with-end`,type:Boolean})],A.prototype,`withEnd`,2),O([k({type:Boolean})],A.prototype,`disabled`,2),O([k({type:Boolean,reflect:!0})],A.prototype,`loading`,2),O([k({type:Boolean,reflect:!0})],A.prototype,`pill`,2),O([k()],A.prototype,`type`,2),O([k({reflect:!0})],A.prototype,`name`,2),O([k({reflect:!0})],A.prototype,`value`,2),O([k({reflect:!0})],A.prototype,`href`,2),O([k()],A.prototype,`target`,2),O([k()],A.prototype,`rel`,2),O([k()],A.prototype,`download`,2),O([k({attribute:`formaction`})],A.prototype,`formAction`,2),O([k({attribute:`formenctype`})],A.prototype,`formEnctype`,2),O([k({attribute:`formmethod`})],A.prototype,`formMethod`,2),O([k({attribute:`formnovalidate`,type:Boolean})],A.prototype,`formNoValidate`,2),O([k({attribute:`formtarget`})],A.prototype,`formTarget`,2),O([bt(`disabled`,{waitUntilFirstUpdate:!0})],A.prototype,`handleDisabledChange`,1),O([bt(`href`)],A.prototype,`handleHrefChange`,1),O([bt(`loading`,{waitUntilFirstUpdate:!0})],A.prototype,`handleLoadingChange`,1),A=O([Je(`wa-button`)],A),A.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ut=c`
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
`,Wt=class extends at{constructor(){super(...arguments),this.localize=new Mt(this)}render(){return ye`
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
    `}};Wt.css=Ut,Wt=O([Je(`wa-spinner`)],Wt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Gt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Kt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},qt=c`
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
`,Jt=``,Yt=``;function Xt(){return Jt.replace(/\/$/,``)}function Zt(e){Yt=e}function Qt(){if(!Yt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Zt(e.getAttribute(`data-fa-kit-code`)||``)}return Yt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $t=`7.3.0`;function en(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function tn(e,t,n){let r=en(e,t,n),i=Xt();if(i)return`${i}/${r}/${e}.svg`;let a=Qt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${$t}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${$t}/svgs/${r}/${e}.svg`}var nn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>tn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function rn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var an={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},on={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=an[n][e]??an.regular[e]??an.regular[`circle-question`];return r?rn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},sn=`classic`,cn=[nn,on],ln=new Set;function un(e){ln.add(e)}function dn(e){ln.delete(e)}function fn(e){return cn.find(t=>t.name===e)}function pn(){return sn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:mn}=Pe,hn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var gn=Symbol(),_n=Symbol(),vn,yn=new Map,bn=class extends at{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ye`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?gn:_n}catch{return _n}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return gn;vn||=new DOMParser;let r=vn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):gn}catch{return gn}}}connectedCallback(){super.connectedCallback(),un(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),dn(this)}async getIconSource(){let e=fn(this.library),t=this.family||pn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?fn(this.library):void 0;if(!e){this.svg=null;return}let r=yn.get(e);r||(r=this.resolveIcon(e,n),yn.set(e,r));let i=await r;if(i===_n&&yn.delete(e),e===(await this.getIconSource()).url){if(hn(i)){this.svg=i;return}switch(i){case _n:case gn:this.svg=null,this.dispatchEvent(new Gt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Kt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=fn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ye`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};bn.css=qt,O([Ze()],bn.prototype,`svg`,2),O([k({reflect:!0})],bn.prototype,`name`,2),O([k({reflect:!0})],bn.prototype,`family`,2),O([k({reflect:!0})],bn.prototype,`variant`,2),O([k({reflect:!0})],bn.prototype,`canvas`,2),O([k({attribute:`auto-width`,type:Boolean,reflect:!0})],bn.prototype,`autoWidth`,2),O([k({attribute:`swap-opacity`,type:Boolean,reflect:!0})],bn.prototype,`swapOpacity`,2),O([k()],bn.prototype,`src`,2),O([k()],bn.prototype,`label`,2),O([k({reflect:!0})],bn.prototype,`library`,2),O([k({type:Number,reflect:!0})],bn.prototype,`rotate`,2),O([k({type:String,reflect:!0})],bn.prototype,`flip`,2),O([k({type:String,reflect:!0})],bn.prototype,`animation`,2),O([bt(`label`)],bn.prototype,`handleLabelChange`,1),O([bt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],bn.prototype,`setIcon`,1),bn=O([Je(`wa-icon`)],bn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xn=t({default:()=>A}),Sn=c`
  :host {
    display: flex;
    position: relative;
    align-items: center;
    padding: 0.5em 1em;
    border-radius: var(--wa-border-radius-s);
    isolation: isolate;
    color: var(--wa-color-text-normal);
    line-height: var(--wa-line-height-condensed);
    cursor: pointer;
    transition:
      var(--wa-transition-fast) background-color var(--wa-transition-easing),
      var(--wa-transition-fast) color var(--wa-transition-easing);
  }

  @media (hover: hover) {
    :host(:hover:not(:state(disabled))) {
      background-color: var(--wa-color-neutral-fill-normal);
    }
  }

  :host(:state(submenu-open)) {
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:focus-visible) {
    z-index: 1;
    outline: var(--wa-focus-ring);
    background-color: var(--wa-color-neutral-fill-normal);
  }

  :host(:state(disabled)),
  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Danger variant */
  :host([variant='danger']),
  :host([variant='danger']) #details {
    color: var(--wa-color-danger-on-quiet);
  }

  @media (hover: hover) {
    :host([variant='danger']:hover) {
      background-color: var(--wa-color-danger-fill-normal);
      color: var(--wa-color-danger-on-normal);
    }
  }

  :host([variant='danger']:state(submenu-open)),
  :host([variant='danger']:focus-visible) {
    background-color: var(--wa-color-danger-fill-normal);
    color: var(--wa-color-danger-on-normal);
  }

  :host([checkbox-adjacent]) {
    padding-inline-start: 2em;
  }

  /* Only add padding when item actually has a submenu */
  :host([submenu-adjacent]:not(:state(has-submenu))) #details {
    padding-inline-end: 0;
  }

  :host(:state(has-submenu)[submenu-adjacent]) #details {
    padding-inline-end: 1.75em;
  }

  /* The link only exists to be clicked programmatically. */
  #link {
    display: none;
  }

  #check {
    visibility: hidden;
    margin-inline-start: -1.5em;
    margin-inline-end: 0.5em;
    font-size: var(--wa-font-size-smaller);
  }

  :host(:state(checked)) #check {
    visibility: visible;
  }

  #icon ::slotted(*) {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    margin-inline-end: 0.75em !important;
    font-size: var(--wa-font-size-smaller);
  }

  #label {
    flex: 1 1 auto;
    min-width: 0;
  }

  #details {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: end;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-smaller) !important;
  }

  #details ::slotted(*) {
    margin-inline-start: 2em !important;
  }

  /* Submenu indicator icon */
  #submenu-indicator {
    position: absolute;
    inset-inline-end: 1em;
    color: var(--wa-color-neutral-on-quiet);
    font-size: var(--wa-font-size-smaller);
  }

  /* Flip chevron icon when RTL */
  :host(:dir(rtl)) #submenu-indicator {
    transform: scaleX(-1);
  }

  /* Submenu styles */
  #submenu {
    display: flex;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;

    /* Override default popover styles */
    &[popover] {
      margin: 0;
      inset: auto;
      padding: 0.25em;
      overflow: visible;
      border-radius: var(--wa-border-radius-m);
    }

    &.show {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease;
    }

    &.hide {
      animation: submenu-show var(--show-duration, var(--wa-transition-fast)) ease reverse;
    }

    /* Submenu placement transform origins */
    &[data-placement^='top'] {
      transform-origin: bottom;
    }

    &[data-placement^='bottom'] {
      transform-origin: top;
    }

    &[data-placement^='left'] {
      transform-origin: right;
    }

    &[data-placement^='right'] {
      transform-origin: left;
    }

    &[data-placement='left-start'] {
      transform-origin: right top;
    }

    &[data-placement='left-end'] {
      transform-origin: right bottom;
    }

    &[data-placement='right-start'] {
      transform-origin: left top;
    }

    &[data-placement='right-end'] {
      transform-origin: left bottom;
    }

    /* Safe triangle styling */
    &::before {
      display: none;
      z-index: 9;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: transparent;
      content: '';
      clip-path: polygon(
        var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
        var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
        var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
      );
      pointer-events: auto; /* Enable mouse events on the triangle */
    }

    &[data-visible]::before {
      display: block;
    }
  }

  ::slotted(wa-dropdown-item) {
    font-size: inherit;
  }

  ::slotted(wa-divider) {
    --spacing: 0.25em;
  }

  @keyframes submenu-show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;function Cn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=class extends at{constructor(){super(...arguments),this.hasSlotController=new gt(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){ht(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await Cn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await Cn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;!this.isLink()||this.disabled||!t||t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return ye`
      ${this.href?ye`
            <a
              id="link"
              href=${this.href}
              target=${Lt(this.target)}
              rel=${Lt(this.rel)}
              download=${Lt(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?ye`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `:``}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu?ye`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?ye`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `:``}
    `}};wn.css=Sn,O([$e(`#submenu`)],wn.prototype,`submenuElement`,2),O([$e(`#link`)],wn.prototype,`linkElement`,2),O([k({type:Boolean})],wn.prototype,`active`,2),O([k({reflect:!0})],wn.prototype,`variant`,2),O([k({reflect:!0})],wn.prototype,`size`,2),O([bt(`size`)],wn.prototype,`handleSizeChange`,1),O([k({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],wn.prototype,`checkboxAdjacent`,2),O([k({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],wn.prototype,`submenuAdjacent`,2),O([k()],wn.prototype,`value`,2),O([k({reflect:!0})],wn.prototype,`type`,2),O([k({type:Boolean})],wn.prototype,`checked`,2),O([k({type:Boolean,reflect:!0})],wn.prototype,`disabled`,2),O([k({type:Boolean,reflect:!0})],wn.prototype,`submenuOpen`,2),O([k({reflect:!0})],wn.prototype,`href`,2),O([k()],wn.prototype,`target`,2),O([k()],wn.prototype,`rel`,2),O([k()],wn.prototype,`download`,2),O([Ze()],wn.prototype,`hasSubmenu`,2),wn=O([Je(`wa-dropdown-item`)],wn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tn=t({default:()=>wn}),En=class extends Event{constructor(e){super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*Dn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Dn(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=c`
  :host {
    --show-duration: var(--wa-transition-fast);
    --hide-duration: var(--wa-transition-fast);
    display: contents;
  }

  #menu {
    display: flex;
    flex-direction: column;
    width: max-content;
    margin: 0;
    padding: 0.25em;
    border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-m);
    color: var(--wa-color-text-normal);
    text-align: start;
    user-select: none;
    overflow: auto;
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;

    &.show {
      animation: show var(--show-duration) ease;
    }

    &.hide {
      animation: show var(--hide-duration) ease reverse;
    }

    ::slotted(h1),
    ::slotted(h2),
    ::slotted(h3),
    ::slotted(h4),
    ::slotted(h5),
    ::slotted(h6) {
      display: block !important;
      margin: 0.25em 0 !important;
      padding: 0.25em 0.75em !important;
      color: var(--wa-color-text-quiet);
      font-family: var(--wa-font-family-body) !important;
      font-weight: var(--wa-font-weight-semibold) !important;
      font-size: var(--wa-font-size-smaller) !important;
    }

    ::slotted(wa-divider) {
      --spacing: 0.25em; /* Component-specific, left as-is */
    }
  }

  wa-popup[data-current-placement^='top'] #menu {
    transform-origin: bottom;
  }

  wa-popup[data-current-placement^='bottom'] #menu {
    transform-origin: top;
  }

  wa-popup[data-current-placement^='left'] #menu {
    transform-origin: right;
  }

  wa-popup[data-current-placement^='right'] #menu {
    transform-origin: left;
  }

  wa-popup[data-current-placement='left-start'] #menu {
    transform-origin: right top;
  }

  wa-popup[data-current-placement='left-end'] #menu {
    transform-origin: right bottom;
  }

  wa-popup[data-current-placement='right-start'] #menu {
    transform-origin: left top;
  }

  wa-popup[data-current-placement='right-end'] #menu {
    transform-origin: left bottom;
  }

  @keyframes show {
    from {
      scale: 0.9;
      opacity: 0;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`,kn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},An=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},jn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Mn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Nn=[];function Pn(e){Fn(e),Nn.push(e)}function Fn(e){for(let t=Nn.length-1;t>=0;t--)if(Nn[t]===e){Nn.splice(t,1);break}}function In(e){return Nn.length>0&&Nn[Nn.length-1]===e}let Ln=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Rn(e=``){return`${e}${Ln()}`}const zn=Math.min,Bn=Math.max,Vn=Math.round,Hn=Math.floor,Un=e=>({x:e,y:e}),Wn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Gn={start:`end`,end:`start`};function Kn(e,t,n){return Bn(e,zn(t,n))}function qn(e,t){return typeof e==`function`?e(t):e}function Jn(e){return e.split(`-`)[0]}function Yn(e){return e.split(`-`)[1]}function Xn(e){return e===`x`?`y`:`x`}function Zn(e){return e===`y`?`height`:`width`}const Qn=new Set([`top`,`bottom`]);function $n(e){return Qn.has(Jn(e))?`y`:`x`}function er(e){return Xn($n(e))}function tr(e,t,n){n===void 0&&(n=!1);let r=Yn(e),i=er(e),a=Zn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=ur(o)),[o,ur(o)]}function nr(e){let t=ur(e);return[rr(e),t,rr(t)]}function rr(e){return e.replace(/start|end/g,e=>Gn[e])}const ir=[`left`,`right`],ar=[`right`,`left`],or=[`top`,`bottom`],sr=[`bottom`,`top`];function cr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ar:ir:t?ir:ar;case`left`:case`right`:return t?or:sr;default:return[]}}function lr(e,t,n,r){let i=Yn(e),a=cr(Jn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(rr)))),a}function ur(e){return e.replace(/left|right|bottom|top/g,e=>Wn[e])}function dr(e){return{top:0,right:0,bottom:0,left:0,...e}}function fr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:dr(e)}function pr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function mr(e,t,n){let{reference:r,floating:i}=e,a=$n(t),o=er(t),s=Zn(o),c=Jn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Yn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const hr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=mr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=mr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function gr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=qn(t,e),p=fr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=pr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=pr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const _r=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=qn(e,t)||{};if(l==null)return{};let d=fr(u),f={x:n,y:r},p=er(i),m=Zn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ee=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let S=b/2-ee/2,C=x/2-h[m]/2-1,ne=zn(d[_],C),re=zn(d[v],C),ie=ne,ae=x-h[m]-re,w=x/2-h[m]/2+S,T=Kn(ie,w,ae),E=!c.arrow&&Yn(i)!=null&&w!==T&&a.reference[m]/2-(w<ie?ne:re)-h[m]/2<0,oe=E?w<ie?w-ie:w-ae:0;return{[p]:f[p]+oe,data:{[p]:T,centerOffset:w-T-oe,...E&&{alignmentOffset:oe}},reset:E}}}),vr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=qn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Jn(r),_=$n(o),v=Jn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[ur(o)]:nr(o)),ee=p!==`none`;!d&&ee&&b.push(...lr(o,m,p,y));let te=[o,...b],x=await gr(t,h),S=[],C=i.flip?.overflows||[];if(l&&S.push(x[g]),u){let e=tr(r,a,y);S.push(x[e[0]],x[e[1]])}if(C=[...C,{placement:r,overflows:S}],!S.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==$n(t))||C.every(e=>$n(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(ee){let t=$n(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},yr=new Set([`left`,`top`]);async function br(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Jn(n),s=Yn(n),c=$n(n)===`y`,l=yr.has(o)?-1:1,u=a&&c?-1:1,d=qn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const xr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await br(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Sr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=qn(e,t),l={x:n,y:r},u=await gr(t,c),d=$n(Jn(i)),f=Xn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Kn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Kn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=qn(e,t),u=await gr(t,l),d=Jn(i),f=Yn(i),p=$n(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=zn(h-u[g],v),ee=zn(m-u[_],y),te=!t.middlewareData.shift,x=b,S=ee;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(x=v),te&&!f){let e=Bn(u.left,0),t=Bn(u.right,0),n=Bn(u.top,0),r=Bn(u.bottom,0);p?S=m-2*(e!==0||t!==0?e+t:Bn(u.left,u.right)):x=h-2*(n!==0||r!==0?n+r:Bn(u.top,u.bottom))}await c({...t,availableWidth:S,availableHeight:x});let C=await o.getDimensions(s.floating);return m!==C.width||h!==C.height?{reset:{rects:!0}}:{}}}};function wr(){return typeof window<`u`}function Tr(e){return Or(e)?(e.nodeName||``).toLowerCase():`#document`}function Er(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Dr(e){return((Or(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Or(e){return wr()?e instanceof Node||e instanceof Er(e).Node:!1}function kr(e){return wr()?e instanceof Element||e instanceof Er(e).Element:!1}function Ar(e){return wr()?e instanceof HTMLElement||e instanceof Er(e).HTMLElement:!1}function jr(e){return!wr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Er(e).ShadowRoot}const Mr=new Set([`inline`,`contents`]);function Nr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Kr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Mr.has(i)}const Pr=new Set([`table`,`td`,`th`]);function Fr(e){return Pr.has(Tr(e))}const Ir=[`:popover-open`,`:modal`];function Lr(e){return Ir.some(t=>{try{return e.matches(t)}catch{return!1}})}const Rr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],zr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Br=[`paint`,`layout`,`strict`,`content`];function Vr(e){let t=Ur(),n=kr(e)?Kr(e):e;return Rr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||zr.some(e=>(n.willChange||``).includes(e))||Br.some(e=>(n.contain||``).includes(e))}function Hr(e){let t=Jr(e);for(;Ar(t)&&!Gr(t);){if(Vr(t))return t;if(Lr(t))return null;t=Jr(t)}return null}function Ur(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Wr=new Set([`html`,`body`,`#document`]);function Gr(e){return Wr.has(Tr(e))}function Kr(e){return Er(e).getComputedStyle(e)}function qr(e){return kr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Jr(e){if(Tr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||jr(e)&&e.host||Dr(e);return jr(t)?t.host:t}function Yr(e){let t=Jr(e);return Gr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ar(t)&&Nr(t)?t:Yr(t)}function Xr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Yr(e),i=r===e.ownerDocument?.body,a=Er(r);if(i){let e=Zr(a);return t.concat(a,a.visualViewport||[],Nr(r)?r:[],e&&n?Xr(e):[])}return t.concat(r,Xr(r,[],n))}function Zr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qr(e){let t=Kr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Ar(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Vn(n)!==a||Vn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function $r(e){return kr(e)?e:e.contextElement}function ei(e){let t=$r(e);if(!Ar(t))return Un(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Qr(t),o=(a?Vn(n.width):n.width)/r,s=(a?Vn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ti=Un(0);function ni(e){let t=Er(e);return!Ur()||!t.visualViewport?ti:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ri(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Er(e)?!1:t}function ii(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=$r(e),o=Un(1);t&&(r?kr(r)&&(o=ei(r)):o=ei(e));let s=ri(a,n,r)?ni(a):Un(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Er(a),t=r&&kr(r)?Er(r):r,n=e,i=Zr(n);for(;i&&r&&t!==n;){let e=ei(i),t=i.getBoundingClientRect(),r=Kr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Er(i),i=Zr(n)}}return pr({width:u,height:d,x:c,y:l})}function ai(e,t){let n=qr(e).scrollLeft;return t?t.left+n:ii(Dr(e)).left+n}function oi(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ai(e,n),y:n.top+t.scrollTop}}function si(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Dr(r),s=t?Lr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Un(1),u=Un(0),d=Ar(r);if((d||!d&&!a)&&((Tr(r)!==`body`||Nr(o))&&(c=qr(r)),Ar(r))){let e=ii(r);l=ei(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?oi(o,c):Un(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ci(e){return Array.from(e.getClientRects())}function li(e){let t=Dr(e),n=qr(e),r=e.ownerDocument.body,i=Bn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Bn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ai(e),s=-n.scrollTop;return Kr(r).direction===`rtl`&&(o+=Bn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ui(e,t){let n=Er(e),r=Dr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Ur();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ai(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const di=new Set([`absolute`,`fixed`]);function fi(e,t){let n=ii(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ar(e)?ei(e):Un(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function pi(e,t,n){let r;if(t===`viewport`)r=ui(e,n);else if(t===`document`)r=li(Dr(e));else if(kr(t))r=fi(t,n);else{let n=ni(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return pr(r)}function mi(e,t){let n=Jr(e);return n===t||!kr(n)||Gr(n)?!1:Kr(n).position===`fixed`||mi(n,t)}function hi(e,t){let n=t.get(e);if(n)return n;let r=Xr(e,[],!1).filter(e=>kr(e)&&Tr(e)!==`body`),i=null,a=Kr(e).position===`fixed`,o=a?Jr(e):e;for(;kr(o)&&!Gr(o);){let t=Kr(o),n=Vr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&di.has(i.position)||Nr(o)&&!n&&mi(e,o))?r=r.filter(e=>e!==o):i=t,o=Jr(o)}return t.set(e,r),r}function gi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Lr(t)?[]:hi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=pi(t,n,i);return e.top=Bn(r.top,e.top),e.right=zn(r.right,e.right),e.bottom=zn(r.bottom,e.bottom),e.left=Bn(r.left,e.left),e},pi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function _i(e){let{width:t,height:n}=Qr(e);return{width:t,height:n}}function vi(e,t,n){let r=Ar(t),i=Dr(t),a=n===`fixed`,o=ii(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Un(0);function l(){c.x=ai(i)}if(r||!r&&!a)if((Tr(t)!==`body`||Nr(i))&&(s=qr(t)),r){let e=ii(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?oi(i,s):Un(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function yi(e){return Kr(e).position===`static`}function bi(e,t){if(!Ar(e)||Kr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Dr(e)===n&&(n=n.ownerDocument.body),n}function xi(e,t){let n=Er(e);if(Lr(e))return n;if(!Ar(e)){let t=Jr(e);for(;t&&!Gr(t);){if(kr(t)&&!yi(t))return t;t=Jr(t)}return n}let r=bi(e,t);for(;r&&Fr(r)&&yi(r);)r=bi(r,t);return r&&Gr(r)&&yi(r)&&!Vr(r)?n:r||Hr(e)||n}const Si=async function(e){let t=this.getOffsetParent||xi,n=this.getDimensions,r=await n(e.floating);return{reference:vi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ci(e){return Kr(e).direction===`rtl`}const wi={convertOffsetParentRelativeRectToViewportRelativeRect:si,getDocumentElement:Dr,getClippingRect:gi,getOffsetParent:xi,getElementRects:Si,getClientRects:ci,getDimensions:_i,getScale:ei,isElement:kr,isRTL:Ci};function Ti(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Ei(e,t){let n=null,r,i=Dr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Hn(d),h=Hn(i.clientWidth-(u+f)),g=Hn(i.clientHeight-(d+p)),_=Hn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Bn(0,zn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ti(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Di(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=$r(e),u=i||a?[...l?Xr(l):[],...Xr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Ei(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?ii(e):null;c&&g();function g(){let t=ii(e);h&&!Ti(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Oi=xr,ki=Sr,Ai=vr,ji=Cr,Mi=_r,Ni=(e,t,n)=>{let r=new Map,i={platform:wi,...n},a={...i.platform,_c:r};return hr(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pi=new Set,Fi=class extends at{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new Mt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&In(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...Dn()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu){e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l){e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`});return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){ht(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Fn(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new kn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Pi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,Pi.add(this),Pn(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await Cn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Mn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new An({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,Pi.delete(this),Fn(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await Cn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new jn)}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation();return}this.makeSelection(t,e)}}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Di(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,Fi.handleSubmenuSlotChange),n.addEventListener(`slotchange`,Fi.handleSubmenuSlotChange),Fi.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Ni(e,e.submenuElement,{placement:t,middleware:[Oi({mainAxis:0,crossAxis:-5}),Ai({fallbackStrategy:`bestFit`}),ki({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new En({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Rn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return ye`
      <wa-popup
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        ?active=${e}
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot
          name="trigger"
          slot="anchor"
          @click=${this.handleTriggerClick}
          @slotchange=${this.syncAriaAttributes}
        ></slot>
        <div
          id="menu"
          part="menu"
          role="menu"
          tabindex="-1"
          aria-orientation="vertical"
          @click=${this.handleMenuClick}
          @submenu-opening=${this.handleSubmenuOpening}
        >
          <slot @slotchange=${this.handleMenuSlotChange}></slot>
        </div>
      </wa-popup>
    `}};Fi.css=[_t,On],O([$e(`slot:not([name])`)],Fi.prototype,`defaultSlot`,2),O([$e(`#menu`)],Fi.prototype,`menu`,2),O([$e(`wa-popup`)],Fi.prototype,`popup`,2),O([k({type:Boolean,reflect:!0})],Fi.prototype,`open`,2),O([k({reflect:!0})],Fi.prototype,`size`,2),O([bt(`size`)],Fi.prototype,`handleSizeChange`,1),O([k({reflect:!0})],Fi.prototype,`placement`,2),O([k({type:Number})],Fi.prototype,`distance`,2),O([k({type:Number})],Fi.prototype,`skidding`,2),Fi=O([Je(`wa-dropdown`)],Fi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ii=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Li=c`
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
`;function Ri(e){return Bi(e)}function zi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Bi(e){for(let t=e;t;t=zi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=zi(e);t;t=zi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Vr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Hi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Ui=class extends at{constructor(){super(...arguments),this.localize=new Mt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Hi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Vi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Di(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Oi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(ji({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Vi(this.anchor)&&this.boundary===`scroll`&&(t=Xr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Ai({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ki({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(ji({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Mi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>wi.getOffsetParent(e,Ri):wi.getOffsetParent;Ni(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...wi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Ii)}render(){return ye`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${It({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${It({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?ye`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Ui.css=Li,O([$e(`.popup`)],Ui.prototype,`popup`,2),O([$e(`.arrow`)],Ui.prototype,`arrowEl`,2),O([k({attribute:!1,type:Boolean})],Ui.prototype,`SUPPORTS_POPOVER`,2),O([k()],Ui.prototype,`anchor`,2),O([k({type:Boolean,reflect:!0})],Ui.prototype,`active`,2),O([k({reflect:!0})],Ui.prototype,`placement`,2),O([k()],Ui.prototype,`boundary`,2),O([k({type:Number})],Ui.prototype,`distance`,2),O([k({type:Number})],Ui.prototype,`skidding`,2),O([k({type:Boolean})],Ui.prototype,`arrow`,2),O([k({attribute:`arrow-placement`})],Ui.prototype,`arrowPlacement`,2),O([k({attribute:`arrow-padding`,type:Number})],Ui.prototype,`arrowPadding`,2),O([k({type:Boolean})],Ui.prototype,`flip`,2),O([k({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Ui.prototype,`flipFallbackPlacements`,2),O([k({attribute:`flip-fallback-strategy`})],Ui.prototype,`flipFallbackStrategy`,2),O([k({type:Object})],Ui.prototype,`flipBoundary`,2),O([k({attribute:`flip-padding`,type:Number})],Ui.prototype,`flipPadding`,2),O([k({type:Boolean})],Ui.prototype,`shift`,2),O([k({type:Object})],Ui.prototype,`shiftBoundary`,2),O([k({attribute:`shift-padding`,type:Number})],Ui.prototype,`shiftPadding`,2),O([k({attribute:`auto-size`})],Ui.prototype,`autoSize`,2),O([k()],Ui.prototype,`sync`,2),O([k({type:Object})],Ui.prototype,`autoSizeBoundary`,2),O([k({attribute:`auto-size-padding`,type:Number})],Ui.prototype,`autoSizePadding`,2),O([k({attribute:`hover-bridge`,type:Boolean})],Ui.prototype,`hoverBridge`,2),Ui=O([Je(`wa-popup`)],Ui);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wi=t({default:()=>Fi}),Gi=t({default:()=>bn}),Ki=c`
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
function qi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ji(e,t){for(;t;){if(t===e)return!0;t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}return!1}var Yi=class extends at{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{if(this.hasTrigger(`click`)){this.open?this.hide():this.show();return}this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&In(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor&&Ji(this.anchor,t)),r=!!(t&&Ji(this,t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=Rn(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Fn(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new kn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),Pn(this)),this.body.hidden=!1,this.popup.active=!0,await Cn(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Mn)}else{let e=new An;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Fn(this),await Cn(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new jn)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,qi(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,qi(this,`wa-after-hide`)}render(){return ye`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${It({tooltip:!0,"tooltip-open":this.open})}
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
    `}};Yi.css=Ki,Yi.dependencies={"wa-popup":Ui},O([$e(`slot:not([name])`)],Yi.prototype,`defaultSlot`,2),O([$e(`.body`)],Yi.prototype,`body`,2),O([$e(`wa-popup`)],Yi.prototype,`popup`,2),O([k()],Yi.prototype,`placement`,2),O([k({type:Boolean,reflect:!0})],Yi.prototype,`disabled`,2),O([k({type:Number})],Yi.prototype,`distance`,2),O([k({type:Boolean,reflect:!0})],Yi.prototype,`open`,2),O([k({type:Number})],Yi.prototype,`skidding`,2),O([k({attribute:`show-delay`,type:Number})],Yi.prototype,`showDelay`,2),O([k({attribute:`hide-delay`,type:Number})],Yi.prototype,`hideDelay`,2),O([k()],Yi.prototype,`trigger`,2),O([k({attribute:`without-arrow`,type:Boolean,reflect:!0})],Yi.prototype,`withoutArrow`,2),O([k()],Yi.prototype,`for`,2),O([Ze()],Yi.prototype,`anchor`,2),O([bt(`open`,{waitUntilFirstUpdate:!0})],Yi.prototype,`handleOpenChange`,1),O([bt(`for`)],Yi.prototype,`handleForChange`,1),O([bt([`distance`,`placement`,`skidding`])],Yi.prototype,`handleOptionsChange`,1),O([bt(`disabled`)],Yi.prototype,`handleDisabledChange`,1),Yi=O([Je(`wa-tooltip`)],Yi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xi=t({default:()=>Yi}),j;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Zi;function Qi(e){this.c=e}j=Qi.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function $i(e){switch(typeof e){case`string`:return ab.l();case`number`:return ma(e)?e<<24>>24===e?Gg.l():e<<16>>16===e?r_.l():Qy.l():ha(e)?Zy.l():Xy.l();case`boolean`:return Rh.l();case`undefined`:return ll.l();default:return e instanceof z?tb.l():e instanceof Qi?Vh.l():e&&e.$classData?e.$classData.l():null}}function ea(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ma(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ha(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof z?`java.lang.Long`:e instanceof Qi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.p3()}}function ta(e,t){switch(typeof e){case`string`:return ib(e,t);case`number`:return Jy(e,t);case`boolean`:return Ih(e,t);case`undefined`:return ol(e,t);default:return e&&e.$classData||e===null?e.x(t):e instanceof z?$y(e,t):e instanceof Qi?Bh(_a(e),t):ba.prototype.x.call(e,t)}}function na(e){switch(typeof e){case`string`:return rb(e);case`number`:return Yy(e);case`boolean`:return Lh(e);case`undefined`:return sl(e);default:return e&&e.$classData||e===null?e.C():e instanceof z?eb(e):e instanceof Qi?zh(_a(e)):ba.prototype.C.call(e)}}function ra(e){return e===void 0?`undefined`:e.toString()}function ia(e,t){if(t===0)throw new Wg(`/ by zero`);return e/t|0}function aa(e,t){if(t===0)throw new Wg(`/ by zero`);return e%t|0}function oa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function sa(e){return String.fromCharCode(e)}function ca(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var la=0,ua=new WeakMap;function da(e){switch(typeof e){case`string`:return rb(e);case`number`:return Yy(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:rb(n);default:if(e===null)return 0;var r=ua.get(e);return r===void 0&&(r=la+1|0,la=r,ua.set(e,r)),r}}function fa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function pa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ma(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ha(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ga(e){return new Qi(e)}ga(0);function _a(e){return e===null?0:e.c}function va(e){return e===null?Zi:e}function ya(e){return e}function ba(){}j=ba.prototype,j.constructor=ba;function M(){}M.prototype=j,j.C=(function(){return da(this)}),j.x=(function(e){return this===e}),j.I=(function(){var e=this.C();return ea(this)+`@`+(+(e>>>0)).toString(16)}),j.toString=(function(){return this.I()});function N(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=N.prototype=new M,j.constructor=N,j.v=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),j.f=(function(){return new N(this.a.slice())});function xa(){}xa.prototype=j;function Sa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=Sa.prototype=new M,j.constructor=Sa,j.v=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),j.f=(function(){return new Sa(this.a.slice())});function Ca(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}j=Ca.prototype=new M,j.constructor=Ca,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new Ca(this.a.slice())});function wa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}j=wa.prototype=new M,j.constructor=wa,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new wa(this.a.slice())});function Ta(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}j=Ta.prototype=new M,j.constructor=Ta,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new Ta(this.a.slice())});function Ea(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}j=Ea.prototype=new M,j.constructor=Ea,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new Ea(this.a.slice())});function Da(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Zi}else this.a=e}j=Da.prototype=new M,j.constructor=Da,j.v=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),j.f=(function(){return new Da(this.a.slice())});function Oa(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}j=Oa.prototype=new M,j.constructor=Oa,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new Oa(this.a.slice())});function ka(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}j=ka.prototype=new M,j.constructor=ka,j.v=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.f=(function(){return new ka(this.a.slice())});function P(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=P.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new P().y(this,r,i)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new xa;n.constructor=t,n.v=(function(e,t,n,r){ca(this.a,e,t.a,n,r)}),n.f=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===F});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new P().a(this),this.A}),j.l=(function(){return this.L||=new im(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null}),j.U=(function(e){if(this===Aa)throw Jg(new Yg);return new(this.r()).C(e)});var F=new P;F.n={},F.E=`Ljava.lang.Object;`,F.F=(e=>!e.X),F.N=`java.lang.Object`,F.I=(e=>e!==null),F.A=new P().y(F,N,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ba.prototype.$classData=F;var Aa=new P().p(void 0,`V`,`void`,void 0,void 0),ja=new P().p(!1,`Z`,`boolean`,Sa,void 0),Ma=new P().p(0,`C`,`char`,Ca,Uint16Array),Na=new P().p(0,`B`,`byte`,wa,Int8Array),Pa=new P().p(0,`S`,`short`,Ta,Int16Array),Fa=new P().p(0,`I`,`int`,Ea,Int32Array),Ia=new P().p(null,`J`,`long`,Da,void 0),La=new P().p(0,`F`,`float`,Oa,Float32Array),Ra=new P().p(0,`D`,`double`,ka,Float64Array);function za(e){return $i(e).hh()+`@`+da(e)}function Ba(e){var t=e.hF;return t===void 0?za(e):t}function Va(){Ua=this,Wa().oy(new Z((e=>void 0)),Il().jo,!0)}j=Va.prototype=new M,j.constructor=Va;function Ha(){}Ha.prototype=j,j.oy=(function(e,t,n){return new Sh(e,n,t,this)}),new P().i(Va,`com.raquo.airstream.core.Observer$`,{c6:1});var Ua;function Wa(){return Ua||=new Va,Ua}function Ga(e){this.fT=null,this.hG=null,this.fU=0,this.fT=e,this.hG=void 0;var t=fo().fa();this.fU=t===void 0?1:1+t.fU|0,Za().fd===-1||this.fU>Za().fd?dp().fb(new Ly(this,Za().fd)):no().bM?no().dC.push(this)|0:fo().gX(this)}j=Ga.prototype=new M,j.constructor=Ga;function Ka(){}Ka.prototype=j;var qa=new P().i(Ga,`com.raquo.airstream.core.Transaction`,{c9:1});function Ja(){this.fd=0,this.hH=null,Xa=this,this.fd=1e3,this.hH=new Z((e=>{throw om(new sm,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=Ja.prototype=new M,j.constructor=Ja;function Ya(){}Ya.prototype=j,j.kG=(function(e){try{e.fT.i(e);var t=e.hG;if(t!==void 0)for(;t.p8();)t.oW().pb(e)}catch(e){var n=e instanceof hf?e:new Jx(e);dp().fb(n)}}),new P().i(Ja,`com.raquo.airstream.core.Transaction$`,{ca:1});var Xa;function Za(){return Xa||=new Ja,Xa}function Qa(e){e.fe.length|0?new Ga(new Z((t=>{for(;(e.fe.length|0)>0;){var n=e.fe.shift();try{n.i(t)}catch(e){var r=e instanceof hf?e:new Jx(e);dp().fb(r)}}for(;(e.dC.length|0)>0;){var i=e.dC.shift();fo().gX(i)}}))):(e.dC.length|0)>0&&new Ga(new Z((t=>{for(;(e.dC.length|0)>0;)fo().gX(e.dC.shift())})))}function $a(){this.bM=!1,this.fe=null,this.dC=null,to=this,this.bM=!1,this.fe=Lo().dr(U().b(new(B.r()).C([]))),this.dC=Lo().dr(U().b(new(qa.r()).C([])))}j=$a.prototype=new M,j.constructor=$a;function eo(){}eo.prototype=j,new P().i($a,`com.raquo.airstream.core.Transaction$onStart$`,{cb:1});var to;function no(){return to||=new $a,to}function ro(e,t){return e.dD.get(t)}function io(e,t){e.ff.unshift(t)}function ao(e){return e.ff.shift()}function oo(e,t,n){var r=ro(e,t),i=r===void 0,a=r===void 0?Lo().dr(U().b(new(qa.r()).C([]))):r;a.push(n),i&&e.dD.set(t,a)}function so(e,t){var n=ro(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.dD.delete(t),i}}function co(){this.ff=null,this.dD=null,uo=this,this.ff=Lo().dr(U().b(new(qa.r()).C([]))),this.dD=new Map}j=co.prototype=new M,j.constructor=co;function lo(){}lo.prototype=j,j.gX=(function(e){var t=this.fa();t===void 0?(io(this,e),Za().kG(e),this.mN(e)):oo(this,t,e)}),j.mN=(function(e){for(var t=e;;){var n=this.fa(),r=t;if(!(n!==void 0&&H().s(r,n)))throw om(new sm,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.nZ(t),t.fT=Za().hH;var i=this.fa();if(H().s(i,void 0))if((this.dD.size|0)>0){var a=new Qf(0);throw this.dD.forEach((e=>((t,n)=>{e.dN=e.dN+(t.length|0)|0}))(a)),om(new sm,`Transaction queue error: Stack cleared, but a total of `+a.dN+` children for `+(this.dD.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Za().kG(i),t=i}}),j.nZ=(function(e){for(var t=e;;){var n=so(this,t);if(H().s(n,void 0)){ao(this);var r=this.fa();if(!H().s(r,void 0))t=r;else return}else{io(this,n);return}}}),j.fa=(function(){return this.ff[0]}),new P().i(co,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cc:1});var uo;function fo(){return uo||=new co,uo}function po(e,t){var n=e.cI.indexOf(t)|0;if(n!==-1)e.cI.splice(n,1),e.br.c()||t.le();else throw om(new sm,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function mo(e){for(;(e.fg.length|0)>0;)po(e,e.fg.shift())}function ho(e){this.hI=null,this.cI=null,this.dX=!1,this.fg=null,this.br=null,this.dY=0,this.hI=e,this.cI=Lo().dr(U().b(new(yo.r()).C([]))),this.dX=!0,this.fg=Lo().dr(U().b(new(yo.r()).C([]))),this.br=ub(),this.dY=0}j=ho.prototype=new M,j.constructor=ho;function go(){}go.prototype=j,j.ke=(function(){if(this.br.c()){var e=no(),t=(()=>{var e=new rd(this.hI);this.br=new db(e),this.dX=!1,this.dY=0;for(var t=0,n=this.cI.length|0;t<n;){var r=t+this.dY|0;this.cI[r].ld(e),t=1+t|0}mo(this),this.dX=!0,this.dY=0});if(no(),e.bM)t();else{e.bM=!0;try{t()}finally{e.bM=!1,Qa(e)}}}else throw om(new sm,`Can not activate `+this+`: it is already active`)}),j.mH=(function(){if(this.br.c())throw om(new sm,`Can not deactivate DynamicOwner: it is not active`);this.dX=!1;for(var e=this.cI,t=0,n=e.length|0;t<n;)e[t].le(),t=1+t|0;mo(this);var r=this.br;r.c()||r.aI().nx(),mo(this),this.dX=!0,this.br=ub()}),j.ml=(function(e,t){t?(this.dY=1+this.dY|0,this.cI.unshift(e)):this.cI.push(e);var n=this.br;if(!n.c()){var r=n.aI();e.ld(r)}}),j.o4=(function(e){this.dX?po(this,e):this.fg.push(e)}),new P().i(ho,`com.raquo.airstream.ownership.DynamicOwner`,{cd:1});function _o(e,t,n){this.fh=null,this.hJ=null,this.fi=null,this.fh=e,this.hJ=t,this.fi=ub(),e.ml(this,n)}j=_o.prototype=new M,j.constructor=_o;function vo(){}vo.prototype=j,j.fO=(function(){this.fh.o4(this)}),j.ld=(function(e){var t=no(),n=(()=>{this.fi=this.hJ.i(e)});if(no(),t.bM)n();else{t.bM=!0;try{n()}finally{t.bM=!1,Qa(t)}}}),j.le=(function(){var e=this.fi;e.c()||(e.aI().fO(),this.fi=ub())});var yo=new P().i(_o,`com.raquo.airstream.ownership.DynamicSubscription`,{ce:1});function bo(){}j=bo.prototype=new M,j.constructor=bo;function xo(){}xo.prototype=j,j.os=(function(e,t,n){return new _o(e,new Z((e=>new db(t.i(e)))),n)}),j.oj=(function(e,t,n){return new _o(e,new Z((e=>(t.i(e),ub()))),n)}),new P().i(bo,`com.raquo.airstream.ownership.DynamicSubscription$`,{cf:1});var So;function Co(){return So||=new bo,So}function wo(e){e.dZ=Lo().dr(U().b(new(jo.r()).C([])))}function To(e){for(var t=e.dZ,n=0,r=t.length|0;n<r;)Oo(t[n]),n=1+n|0;e.dZ.length=0}function Eo(e,t){var n=e.dZ.indexOf(t)|0;if(n!==-1)e.dZ.splice(n,1);else throw om(new sm,`Can not remove Subscription from Owner: subscription not found.`)}function Do(e,t){e.dZ.push(t)}function Oo(e){if(!e.fW)e.hL.ai(),e.fW=!0;else throw om(new sm,`Can not kill Subscription: it was already killed.`)}function ko(e,t){this.hM=null,this.hL=null,this.fW=!1,this.hM=e,this.hL=t,this.fW=!1,e.nX(this)}j=ko.prototype=new M,j.constructor=ko;function Ao(){}Ao.prototype=j,j.fO=(function(){Oo(this),Eo(this.hM,this)});var jo=new P().i(ko,`com.raquo.airstream.ownership.Subscription`,{ci:1});function Mo(e,t){this.hN=null,this.hO=null,this.cJ=null,this.dE=!1,this.hN=e,this.hO=t,this.cJ=ub(),this.dE=!1}j=Mo.prototype=new M,j.constructor=Mo;function No(){}No.prototype=j,j.nu=(function(){var e=this.cJ;return!e.c()&&!e.aI().fh.br.c()}),j.oe=(function(e){if(this.dE)throw om(new sm,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cJ;if(t.c())var n=!1;else var n=e===t.aI().fh;if(!n){this.nu()&&!e.br.c()&&(this.dE=!0);var r=this.cJ;r.c()||(r.aI().fO(),this.cJ=ub()),this.cJ=new db(Co().os(e,new Z((e=>(this.dE||this.hN.ai(),new ko(e,new Tg((()=>{this.dE||this.hO.ai()})))))),!1)),this.dE=!1}}),j.my=(function(){if(this.dE)throw om(new sm,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cJ;e.c()||e.aI().fO(),this.cJ=ub()}),new P().i(Mo,`com.raquo.airstream.ownership.TransferableSubscription`,{cj:1});function Po(){}j=Po.prototype=new M,j.constructor=Po;function Fo(){}Fo.prototype=j,j.dr=(function(e){return[...Xu().oq(e)]}),new P().i(Po,`com.raquo.ew.JsArray$`,{ck:1});var Io;function Lo(){return Io||=new Po,Io}function Ro(){}j=Ro.prototype=new M,j.constructor=Ro;function zo(){}zo.prototype=j,j.n7=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new P().i(Ro,`com.raquo.ew.JsArray$RichJsArray$`,{cl:1});var Bo;function Vo(){return Bo||=new Ro,Bo}function Ho(){this.hP=null,Wo=this,document.createElement(`template`),this.mF(X().o.ol().om()),this.hP=RegExp(` `,`g`)}j=Ho.prototype=new M,j.constructor=Ho;function Uo(){}Uo.prototype=j,j.mn=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof hf?e:new Jx(e);if(n instanceof Jx&&n.bU instanceof DOMException)return!1;throw n instanceof Jx?n.bU:n}}),j.nv=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().s(t,r))return!0;n=r}}),j.mE=(function(e){return document.createElement(e.hp())}),j.ni=(function(e,t){var n=this.nj(e,t);return n===void 0?void 0:t.e0.f0(n)}),j.nj=(function(e,t){var n=e.c4.getAttributeNS(null,t.cK);return n===null?void 0:n}),j.lt=(function(e,t,n){this.ob(e,t,t.e0.ek(n))}),j.ob=(function(e,t,n){n===null?this.o3(e,t):e.c4.setAttribute(t.cK,n)}),j.o3=(function(e,t){e.c4.removeAttribute(t.cK)}),j.oc=(function(e,t,n){this.od(e,t,t.ip.ek(n))}),j.od=(function(e,t,n){e.c4[t.iq]=n}),j.lu=(function(e,t,n){var r=e.c4,i=t.e1,a=t.e2,o=n===null?null:n;o===null?(a.ba(new Z((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.ba(new Z((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.mF=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.iE)}),j.nm=(function(e,t){var n=this.nn(e,t);return n===void 0?void 0:t.g3.f0(n)}),j.nn=(function(e,t){var n=e.hx(),r=t.fm,i=n.getAttributeNS(r.c()?null:r.aI(),t.g4);return i===null?void 0:i}),j.of=(function(e,t,n){this.og(e,t,t.g3.ek(n))}),j.og=(function(e,t,n){if(n===null)this.o5(e,t);else{var r=t.fm;if(r.c())e.hx().setAttribute(t.fl,n);else{var i=r.aI();e.hx().setAttributeNS(i,t.fl,n)}}}),j.o5=(function(e,t){var n=e.hx(),r=t.fm;n.removeAttributeNS(r.c()?null:r.aI(),t.g4)}),j.mG=(function(e){return document.createTextNode(e)}),j.mJ=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new WT(this.mI(r),n);r=i,n=a}}),j.mI=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.hP,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new P().i(Ho,`com.raquo.laminar.DomApi$`,{cm:1});var Wo;function Go(){return Wo||=new Ho,Wo}function Ko(e,t,n){this.fY=null,this.hQ=null,this.fX=null,this.fY=e,this.hQ=t,this.fX=n}j=Ko.prototype=new M,j.constructor=Ko;function qo(){}qo.prototype=j,j.ba=(function(e){this.fY===null?this.fX===null?Bl().n8(this.hQ,e):Vo().n7(this.fX,ph().ne(e)):this.fY.ba(e)}),new P().i(Ko,`com.raquo.laminar.Seq`,{cn:1});function Jo(){}j=Jo.prototype=new M,j.constructor=Jo;function Yo(){}Yo.prototype=j,new P().i(Jo,`com.raquo.laminar.Seq$`,{co:1});var Xo;function Zo(){return Xo||=new Jo,Xo}function Qo(e){Wa(),dp()}function $o(e){e.lD=Ns()}function es(e){ts(e,new Z((e=>{e.ir.c4.focus()})))}function ts(e,t){return new Td(new Z((e=>{var n=new Xf(!e.e3.br.c()),r=new Z((e=>{n.fC?n.fC=!1:t.i(e)}));Co().oj(e.e3,new Z((e=>(t=>{r.i(new Os(e,t))}))(e)),!1)})),Ns())}function ns(){this.ch=null,this.fZ=null,is=this,this.ch=new sd(as()),new sd(as()),new sd(as()),this.fZ=new ad}j=ns.prototype=new M,j.constructor=ns;function rs(){}rs.prototype=j,new P().i(ns,`com.raquo.laminar.codecs.package$`,{cw:1});var is;function as(){return is||=new ns,is}function os(e){e.hV=ss(e,`class`,` `)}function ss(e,t,n){var r=gd(new _d,t,as().ch);return new ud(r.cK,new Z((e=>{var t=Go().ni(e,r);return t===void 0?``:t})),new Og(((e,t)=>{Go().lt(e,r,t)})),n)}function cs(e){e.lC=ls(e,`class`,` `)}function ls(e,t,n){var r=new xd(t,as().ch,ub());return new ud(r.fl,new Z((e=>{var t=Go().nm(e,r);return t===void 0?``:t})),new Og(((e,t)=>{Go().of(e,r,t)})),n)}function us(e){this.fj=null,this.fj=e}j=us.prototype=new M,j.constructor=us;function ds(){}ds.prototype=j,j.lf=(function(e,t){try{this.fj.cx(e,t)}catch(e){var n=e instanceof hf?e:new Jx(e);dp().fb(n)}}),j.mz=(function(e){return new us(new Og(((t,n)=>{this.fj.cx(t,n),e.fj.cx(t,n)})))}),j.mo=(function(e){return e===void 0?this:e.mz(this)}),new P().i(us,`com.raquo.laminar.inserters.InserterHooks`,{cU:1});function fs(){}j=fs.prototype=new M,j.constructor=fs;function ps(){}ps.prototype=j,j.lb=(function(e,t){return new Mg(e,void 0)}),new P().i(fs,`com.raquo.laminar.inserters.StaticChildInserter$`,{cW:1});var ms;function hs(){return ms||=new fs,ms}function gs(){}j=gs.prototype=new M,j.constructor=gs;function _s(){}_s.prototype=j,j.lc=(function(e,t){return e===``?$():$().hv(xE(new CE,e.split(t).filter((e=>e!==``))))}),new P().i(gs,`com.raquo.laminar.keys.CompositeKey$`,{cZ:1});var vs;function ys(){return vs||=new gs,vs}function bs(e,t){this.io=null,this.im=null,this.io=e,this.im=t}j=bs.prototype=new M,j.constructor=bs;function xs(){}xs.prototype=j,j.l=(function(e){return new gp(this.io,this.im.i(e),new Ag(((e,t,n)=>{Go().lu(e,t,n)})))}),new P().i(bs,`com.raquo.laminar.keys.DerivedStyleProp`,{d3:1});function Ss(){}j=Ss.prototype=new M,j.constructor=Ss;function Cs(){}Cs.prototype=j;function ws(){this.lE=null,this.lF=null,this.lG=null,this.lH=null,this.lE=`http://www.w3.org/2000/svg`,this.lF=`http://www.w3.org/1999/xlink`,this.lG=`http://www.w3.org/XML/1998/namespace`,this.lH=`http://www.w3.org/2000/xmlns/`}j=ws.prototype=new M,j.constructor=ws;function Ts(){}Ts.prototype=j,j.nH=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new p_(e)}}),new P().i(ws,`com.raquo.laminar.keys.SvgAttr$`,{d6:1});var Es;function Ds(){return Es||=new ws,Es}function Os(e,t){this.ir=null,this.ir=e}j=Os.prototype=new M,j.constructor=Os;function ks(){}ks.prototype=j,new P().i(Os,`com.raquo.laminar.lifecycle.MountContext`,{d7:1});var I=new P().i(1,`com.raquo.laminar.modifiers.Modifier`,{a3:1});function As(){this.lI=null,Ms=this,this.lI=new Cd}j=As.prototype=new M,j.constructor=As;function js(){}js.prototype=j,new P().i(As,`com.raquo.laminar.modifiers.Modifier$`,{da:1});var Ms;function Ns(){return Ms||=new As,Ms}function Ps(){this.g6=null,Is=this,this.g6=new Dd}j=Ps.prototype=new M,j.constructor=Ps;function Fs(){}Fs.prototype=j,new P().i(Ps,`com.raquo.laminar.modifiers.RenderableNode$`,{de:1});var Is;function Ls(){return Is||=new Ps,Is}function Rs(){this.y=null,Bs=this,this.y=new Nd(new Z((e=>e)),L()),new Nd(new Z((e=>``+(e|0))),L()),new Nd(new Z((e=>``+ +e)),L()),new Nd(new Z((e=>``+!!e)),L()),new Nd(new Z((e=>e.op())),L())}j=Rs.prototype=new M,j.constructor=Rs;function zs(){}zs.prototype=j,new P().i(Rs,`com.raquo.laminar.modifiers.RenderableText$`,{dj:1});var Bs;function L(){return Bs||=new Rs,Bs}function Vs(){}j=Vs.prototype=new M,j.constructor=Vs;function Hs(){}Hs.prototype=j,j.eO=(function(e,t,n){var r=new db(e);t.lB(r),n!==void 0&&n.lf(e,t);var i=Go().mn(e.dT(),t.dT());return i&&t.lv(r),i}),new P().i(Vs,`com.raquo.laminar.nodes.ParentNode$`,{dl:1});var Us;function Ws(){return Us||=new Vs,Us}function Gs(e){this.iB=null,this.iB=new us(new Og(((t,n)=>{matchResult1:{var r=n.dT();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=dp(),a=r.textContent,o=t.dT().tagName;i.fb(om(new sm,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=Gs.prototype=new M,j.constructor=Gs;function Ks(){}Ks.prototype=j,j.kr=(function(e){return e.c0(new Z((e=>e.ox(this.iB))))}),new P().i(Gs,`com.raquo.laminar.nodes.Slot`,{dq:1});function qs(){Ys=this,Lo().dr(U().oA(new Ea(new Int32Array([0]))))}j=qs.prototype=new M,j.constructor=qs;function Js(){}Js.prototype=j,j.m4=(function(){return new Z((e=>void 0))}),new P().i(qs,`com.raquo.laminar.tags.CustomHtmlTag$`,{dt:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){}j=Zs.prototype=new M,j.constructor=Zs;function Qs(){}Qs.prototype=j,j.kc=(function(e){return X().o.f1().ei(U().b(new(I.r()).C([X().o.kL().kW(),X().o.kX().kF(),X().o.l5().ll().l(8),pp(X().o,e,Md())])))}),new P().i(Zs,`doc.ExampleGroups$package$`,{dv:1});var $s;function ec(){return $s||=new Zs,$s}function tc(){}j=tc.prototype=new M,j.constructor=tc;function nc(){}nc.prototype=j,j.kd=(function(e){return X().o.f1().ei(U().b(new(I.r()).C([X().o.kL().kW(),X().o.n5().oz(),X().o.kX().kF(),X().o.l5().ll().l(16),pp(X().o,e,Md())])))}),new P().i(tc,`doc.VerticalExamples$package$`,{dw:1});var rc;function ic(){return rc||=new tc,rc}function ac(){}j=ac.prototype=new M,j.constructor=ac;function oc(){}oc.prototype=j,j.mm=(function(){cc().mU(),cc().mV(),cc().mW(),cc().mX(),cc().mY(),cc().mZ(),cc().n0(),cc().n1()}),j.mU=(function(){var e=document.querySelector(`#example1`);Pf().dq(e).c()||(X(),new vp(e,Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))])))))}),j.mV=(function(){var e=document.querySelector(`#example2`);Pf().dq(e).c()||(X(),new vp(e,ec().kc(U().b(new(Wy.r()).C([ic().kd(U().b(new(Wy.r()).C([Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))])))])))])))))}),j.mW=(function(){var e=document.querySelector(`#example3`);Pf().dq(e).c()||(X(),new vp(e,Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.hC().nI()))])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))])))))}),j.mX=(function(){var e=document.querySelector(`#example4`);Pf().dq(e).c()||(X(),new vp(e,ec().kc(U().b(new(Wy.r()).C([ic().kd(U().b(new(Wy.r()).C([Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hz())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hz())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hz())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hn())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hn())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hn())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hl())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hl())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.cH().hl())),new Y((e=>e.cD().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))])))])))])))))}),j.mY=(function(){var e=document.querySelector(`#example5`);Pf().dq(e).c()||(X(),new vp(e,Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Example Button Group`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Button`,L().y)]))),Wp().k(U().b(new(B.r()).C([new Y((e=>fp(X().o,pc().lx().kr(U().b(new(Pg.r()).C([(X(),hs().lb(q().k(U().b(new(B.r()).C([new Y((e=>e.ow().l(!0)))])),U().b(new(I.r()).C([K(X().o,`Dropdown`,L().y)]))),Ls().g6))]))),yf().gj,Md())))])),U().b(new(I.r()).C([Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Item 1`,L().y)]))),Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Item 2`,L().y)]))),Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Item 3`,L().y)])))]))),q().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Button`,L().y)])))])))))}),j.mZ=(function(){var e=document.querySelector(`#example6`);Pf().dq(e).c()||(X(),new vp(e,Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Example Button Group`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.hC().kC()))])),U().b(new(I.r()).C([K(X().o,`Save`,L().y)]))),Wp().k(U().b(new(B.r()).C([new Y((e=>e.nY().mu())),new Y((e=>fp(X().o,pc().lx().kr(U().b(new(Pg.r()).C([(X(),hs().lb(q().k(U().b(new(B.r()).C([new Y((e=>e.hC().kC()))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`chevron-down`))),new Y((e=>e.a4().l(`More options`)))])),U().b(new(I.r()).C([])))]))),Ls().g6))]))),yf().gj,Md())))])),U().b(new(I.r()).C([Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Save`,L().y)]))),Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Save as…`,L().y)]))),Jp().k(U().b(new(B.r()).C([])),U().b(new(I.r()).C([K(X().o,`Save all`,L().y)])))])))])))))}),j.n0=(function(){var e=document.querySelector(`#example7`);Pf().dq(e).c()||(X(),new vp(e,X().o.f1().ei(U().b(new(I.r()).C([Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-left`)))])),U().b(new(I.r()).C([K(X().o,`Left`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-center`)))])),U().b(new(I.r()).C([K(X().o,`Center`,L().y)]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-right`)))])),U().b(new(I.r()).C([K(X().o,`Right`,L().y)])))]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-left`)))])),U().b(new(I.r()).C([K(X().o,`I'm on the left`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-center`)))])),U().b(new(I.r()).C([K(X().o,`I'm in the middle`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-right`)))])),U().b(new(I.r()).C([K(X().o,`I'm on the right`,L().y)])))])))))}),j.n1=(function(){var e=document.querySelector(`#example8`);Pf().dq(e).c()||(X(),new vp(e,X().o.f1().ei(U().b(new(I.r()).C([X().o.f1().ei(U().b(new(I.r()).C([X().o.hV.m3(`button-group-toolbar`),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`History`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`undo-button`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`undo`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Undo`)))])),U().b(new(I.r()).C([])))]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`redo-button`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`redo`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Redo`)))])),U().b(new(I.r()).C([])))])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Formatting`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-bold`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`bold`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Bold`)))])),U().b(new(I.r()).C([])))]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-italic`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`italic`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Italic`)))])),U().b(new(I.r()).C([])))]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-underline`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`underline`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Underline`)))])),U().b(new(I.r()).C([])))])))]))),Op().k(U().b(new(B.r()).C([new Y((e=>e.a4().l(`Alignment`)))])),U().b(new(I.r()).C([q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-align-left`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`align-left`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Align Left`)))])),U().b(new(I.r()).C([])))]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-align-center`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`align-center`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Align Center`)))])),U().b(new(I.r()).C([])))]))),q().k(U().b(new(B.r()).C([new Y((e=>e.bY().l(`button-align-right`)))])),U().b(new(I.r()).C([Qp().k(U().b(new(B.r()).C([new Y((e=>e.cC().l(`align-right`))),new Y((e=>e.dB().l(`solid`))),new Y((e=>e.a4().l(`Align Right`)))])),U().b(new(I.r()).C([])))])))])))]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`undo-button`)))])),U().b(new(I.r()).C([K(X().o,`Undo`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`redo-button`)))])),U().b(new(I.r()).C([K(X().o,`Redo`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-bold`)))])),U().b(new(I.r()).C([K(X().o,`Bold`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-italic`)))])),U().b(new(I.r()).C([K(X().o,`Italic`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-underline`)))])),U().b(new(I.r()).C([K(X().o,`Underline`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-align-left`)))])),U().b(new(I.r()).C([K(X().o,`Align Left`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-align-center`)))])),U().b(new(I.r()).C([K(X().o,`Align Center`,L().y)]))),nm().k(U().b(new(B.r()).C([new Y((e=>e.bX().l(`button-align-right`)))])),U().b(new(I.r()).C([K(X().o,`Align Right`,L().y)])))])))))}),new P().i(ac,`examples.buttonGroup.Main$package$`,{dx:1});var sc;function cc(){return sc||=new ac,sc}function lc(e){try{cc().mm()}catch(e){throw e}}function uc(){this.j3=null,this.j4=!1}j=uc.prototype=new M,j.constructor=uc;function dc(){}dc.prototype=j,j.lx=(function(){return this.j4||=(this.j3=new Gs(`trigger`),!0),this.j3}),new P().i(uc,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{dE:1});var fc;function pc(){return fc||=new uc,fc}function mc(){this.lK=!1,this.es=null,this.fp=null,this.jf=null,this.gd=!1,this.lJ=0,this.lM=0,this.lL=null,gc=this,this.lK=!0,this.es=new ArrayBuffer(8),this.fp=new Int32Array(this.es,0,2),new Float32Array(this.es,0,2),this.jf=new Float64Array(this.es,0,1),this.fp[0]=16909060,this.gd=(new Int8Array(this.es,0,8)[0]|0)==1,this.lJ=this.gd?0:1,this.lM=this.gd?1:0,this.lL=null}j=mc.prototype=new M,j.constructor=mc;function hc(){}hc.prototype=j,j.ht=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.jf[0]=e,(this.fp[0]|0)^(this.fp[1]|0))}),new P().i(mc,`java.lang.FloatingPointBits$`,{dS:1});var gc;function _c(){return gc||=new mc,gc}function vc(e,t){for(var n=Kc().c2(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=yc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new sf(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new sf(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(lf.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function yc(e,t){var n=Kc().c2(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=Kc().c2(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=Kc().c2(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=Kc().c2(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=Kc().c2(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[bc(e,c[1]),Dc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[bc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[bc(e,d[1]),`<clinit>`]}function bc(e,t){var n=Sc(e);if(al().gi.call(n,t))var r=Sc(e)[t];else var r=Rc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function xc(e){if(!((1&e.bA)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.gf=t,e.bA=(1|e.bA)<<24>>24}return e.gf}function Sc(e){return(1&e.bA)<<24>>24?e.gf:xc(e)}function Cc(e){if(!((2&e.bA)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.gg=t,e.bA=(2|e.bA)<<24>>24}return e.gg}function wc(e){return(2&e.bA)<<24>>24?e.gg:Cc(e)}function Tc(e){return(4&e.bA)<<24>>24||(e.ge=Object.keys(wc(e)),e.bA=(4|e.bA)<<24>>24),e.ge}function Ec(e){return(4&e.bA)<<24>>24?e.ge:Tc(e)}function Dc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Oc(e,t){return t?t.arguments&&t.stack?kc(e,t):t.stack&&t.sourceURL?Mc(e,t):t.stack&&t.number?jc(e,t):t.stack&&t.fileName?Ac(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Nc(e,t):Pc(e,t):Nc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Fc(e,t):Ic(e,t):t.stack&&!t.fileName?kc(e,t):Lc(e,t):[]}function kc(e,t){return(t.stack+`
`).replace(Kc().c2(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(Kc().bp(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(Kc().bp(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(Kc().bp(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(Kc().bp(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ac(e,t){return t.stack.replace(Kc().bp(`(?:\\n@:0)?\\s+$`,`m`),``).replace(Kc().bp(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function jc(e,t){return t.stack.replace(Kc().bp(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(Kc().bp(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(Kc().bp(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Mc(e,t){return t.stack.replace(Kc().bp(`\\[native code\\]\\n`,`m`),``).replace(Kc().bp(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(Kc().bp(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Nc(e,t){for(var n=Kc().bp(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Pc(e,t){for(var n=Kc().bp(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Fc(e,t){for(var n=Kc().c2(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ic(e,t){for(var n=Kc().c2(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(Kc().c2(`<anonymous function: (\\S+)>`),`$1`).replace(Kc().c2(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Lc(e,t){return[]}function Rc(e,t,n){for(;;)if(t<(Ec(e).length|0)){var r=Ec(e)[t];if(n.startsWith(r))return``+wc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function zc(){this.gf=null,this.gg=null,this.ge=null,this.bA=0}j=zc.prototype=new M,j.constructor=zc;function Bc(){}Bc.prototype=j,j.n2=(function(e){return vc(this,Oc(this,e))}),new P().i(zc,`java.lang.StackTrace$`,{e3:1});var Vc;function Hc(){return Vc||=new zc,Vc}function Uc(){}j=Uc.prototype=new M,j.constructor=Uc;function Wc(){}Wc.prototype=j,j.c2=(function(e){return new RegExp(e)}),j.bp=(function(e,t){return new RegExp(e,t)}),new P().i(Uc,`java.lang.StackTrace$StringRE$`,{e4:1});var Gc;function Kc(){return Gc||=new Uc,Gc}function qc(){this.jh=null,this.lN=null,Yc=this,this.jh=new Xx(!1),this.lN=new Xx(!0)}j=qc.prototype=new M,j.constructor=qc;function Jc(){}Jc.prototype=j,new P().i(qc,`java.lang.System$Streams$`,{e9:1});var Yc;function Xc(){return Yc||=new qc,Yc}function Zc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Qc(){this.gh=null,this.ji=null,el=this,this.gh=Zc(this),this.ji=null}j=Qc.prototype=new M,j.constructor=Qc;function $c(){}$c.prototype=j,j.hg=(function(e,t){if(this.gh!==null){var n=this.gh;return al().gi.call(n,e)?n[e]:t}else return this.ji.hg(e,t)}),new P().i(Qc,`java.lang.System$SystemProperties$`,{ea:1});var el;function tl(){return el||=new Qc,el}function nl(){this.gi=null,il=this,this.gi=Object.prototype.hasOwnProperty}j=nl.prototype=new M,j.constructor=nl;function rl(){}rl.prototype=j,new P().i(nl,`java.lang.Utils$Cache$`,{ec:1});var il;function al(){return il||=new nl,il}function ol(e,t){return e===t}function sl(e){return 0}function cl(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b7)}var ll=new P().i(0,`java.lang.Void`,{b7:1},(e=>e===void 0));function ul(e,t){throw qg(new Yg,`argument type mismatch`)}function dl(){}j=dl.prototype=new M,j.constructor=dl;function fl(){}fl.prototype=j,j.bK=(function(e){return e instanceof N||e instanceof Sa||e instanceof Ca||e instanceof wa||e instanceof Ta||e instanceof Ea||e instanceof Da||e instanceof Oa||e instanceof ka?e.a.length:ul(this,e)}),new P().i(dl,`java.lang.reflect.Array$`,{ed:1});var pl;function ml(){return pl||=new dl,pl}function hl(){}j=hl.prototype=new M,j.constructor=hl;function gl(){}gl.prototype=j,j.mt=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),j.kS=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.p,s=a.r,c=r,l=t.a[c],u=l.p,d=l.r;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),j.h5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.kT=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.kP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.kO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.kU=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.kQ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.kR=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.V=(function(e,t){if(t<0)throw new t_;var n=e.a.length,r=t<n?t:n,i=$i(e).Q.Q().Q.U(t);return e.v(0,i,0,r),i}),j.a3=(function(e,t,n){if(t>n)throw qg(new Yg,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=$i(e).Q.Q().Q.U(i);return e.v(t,s,0,o),s}),new P().i(hl,`java.util.Arrays$`,{ee:1});var _l;function R(){return _l||=new hl,_l}function z(e,t){this.p=0,this.r=0,this.p=e,this.r=t}j=z.prototype=new M,j.constructor=z;function vl(){}vl.prototype=j,j.x=(function(e){return e instanceof z&&this.p===e.p&&this.r===e.r}),j.C=(function(){return this.p^this.r}),j.I=(function(){return El().lj(this.p,this.r)}),j.pe=(function(){return this.p}),j.pd=(function(){return El().li(this.p,this.r)}),j.pc=(function(){return El().f9(this.p,this.r)}),j.oT=(function(){return this.p<<24>>24}),j.pa=(function(){return this.p<<16>>16}),j.p4=(function(){return this.p}),j.p5=(function(){return this}),j.oZ=(function(){return El().li(this.p,this.r)}),j.oX=(function(){return El().f9(this.p,this.r)}),j.oV=(function(e){return El().lg(this.p,this.r,e.p,e.r)}),j.oU=(function(e){return El().lg(this.p,this.r,e.p,e.r)}),j.oY=(function(e){return this.p===e.p&&this.r===e.r}),j.p9=(function(e){return!(this.p===e.p&&this.r===e.r)}),j.oL=(function(e){var t=this.r,n=e.r;return t===n?(-2147483648^this.p)<(-2147483648^e.p):t<n}),j.oM=(function(e){var t=this.r,n=e.r;return t===n?(-2147483648^this.p)<=(-2147483648^e.p):t<n}),j.oH=(function(e){var t=this.r,n=e.r;return t===n?(-2147483648^this.p)>(-2147483648^e.p):t>n}),j.oI=(function(e){var t=this.r,n=e.r;return t===n?(-2147483648^this.p)>=(-2147483648^e.p):t>n}),j.pg=(function(){return new z(~this.p,~this.r)}),j.oF=(function(e){return new z(this.p|e.p,this.r|e.r)}),j.oE=(function(e){return new z(this.p&e.p,this.r&e.r)}),j.oS=(function(e){return new z(this.p^e.p,this.r^e.r)}),j.oN=(function(e){var t=this.p;return new z(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.r<<e)}),j.oK=(function(e){var t=this.r;return new z(32&e?t>>>e|0:this.p>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),j.oJ=(function(e){var t=this.r;return new z(32&e?t>>e:this.p>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),j.pf=(function(){var e=this.p,t=this.r;return new z(-e|0,e===0?-t|0:~t)}),j.oQ=(function(e){var t=this.p,n=this.r,r=e.r,i=t+e.p|0;return new z(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),j.oO=(function(e){var t=this.p,n=this.r,r=e.r,i=t-e.p|0;return new z(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),j.oR=(function(e){var t=this.p,n=e.p,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new z(u,(((Math.imul(t,e.r)+Math.imul(this.r,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),j.oG=(function(e){var t=El();return new z(t.mM(this.p,this.r,e.p,e.r),t.S)}),j.oP=(function(e){var t=El();return new z(t.o2(this.p,this.r,e.p,e.r),t.S)}),new P().i(z,`org.scalajs.linker.runtime.RuntimeLong`,{b8:1});function yl(e,t,n){return-2097152&n?Sl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function bl(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.S=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.S=0,n>>>o|0}else return Sl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.S=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.S=s/4294967296|0,s|0}}function xl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.S=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.S=n&(-1+i|0),t):Sl(e,t,n,r,i,1)|0;if(-2097152&i)return e.S=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.S=a/4294967296|0,a|0}function Sl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var b=f,ee=p,te=u,x=d,S=b-te|0,C=(-2147483648^S)>(-2147483648^b)?-1+(ee-x|0)|0:ee-x|0;f=S,p=C,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ne=u,re=d,ie=ne>>>1|0|re<<31,ae=re>>>1|0;u=ie,d=ae}var w=f,T=p;if(T===i?(-2147483648^w)>=(-2147483648^r):(-2147483648^T)>=(-2147483648^i)){var E=f,oe=4294967296*p+ +(E>>>0),se=4294967296*i+ +(r>>>0);if(a!==1){var ce=oe/se,le=ce|0,ue=ce/4294967296|0,de=m,fe=h,pe=de+le|0,me=(-2147483648^pe)<(-2147483648^de)?1+(fe+ue|0)|0:fe+ue|0;m=pe,h=me}if(a!==0){var he=oe%se;f=he|0,p=he/4294967296|0}}if(a===0)return e.S=h,m;if(a===1)return e.S=p,f;var ge=m,_e=4294967296*h+ +(ge>>>0),ve=``+f,ye=ve.length;return``+_e+`000000000`.substring(ye)+ve}function Cl(){this.S=0}j=Cl.prototype=new M,j.constructor=Cl;function wl(){}wl.prototype=j,j.lj=(function(e,t){return t===e>>31?``+e:t<0?`-`+yl(this,-e|0,e===0?-t|0:~t):yl(this,e,t)}),j.f9=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),j.li=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),j.p2=(function(e){return new z(e,e>>31)}),j.p1=(function(e){return new z(this.lh(e),this.S)}),j.lh=(function(e){if(e<-0x8000000000000000)return this.S=-2147483648,0;if(e>=0x8000000000000000)return this.S=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.S=e<0&&t!==0?-1+n|0:n,t}),j.lg=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),j.mM=(function(e,t,n,r){if((n|r)===0)throw new Wg(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.S=0,-2147483648;var i=ia(e,n);return this.S=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.S=-1,-1;else return this.S=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=bl(this,a,o,s,c);if((t^r)>=0)return l;var u=this.S;return this.S=l===0?-u|0:~u,-l|0}}),j.o2=(function(e,t,n,r){if((n|r)===0)throw new Wg(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=aa(e,n);return this.S=i>>31,i}else return this.S=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.S=0,0;else return this.S=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=xl(this,a,o,s,c);if(t<0){var u=this.S;return this.S=l===0?-u|0:~u,-l|0}else return l}}),new P().i(Cl,`org.scalajs.linker.runtime.RuntimeLong$`,{eh:1});var Tl;function El(){return Tl||=new Cl,Tl}function Dl(){this.gk=null,this.jm=null,kl=this,this.gk=new Ea(0),this.jm=new N(0)}j=Dl.prototype=new M,j.constructor=Dl;function Ol(){}Ol.prototype=j,new P().i(Dl,`scala.Array$EmptyArrays$`,{en:1});var kl;function Al(){return kl||=new Dl,kl}var B=new P().i(1,`scala.Function1`,{f:1});function jl(){}j=jl.prototype=new M,j.constructor=jl;function Ml(){}Ml.prototype=j;function Nl(){this.jp=null,this.jo=null,Fl=this,this.jp=new Y((e=>Il().jp)),this.jo=new Xh}j=Nl.prototype=new M,j.constructor=Nl;function Pl(){}Pl.prototype=j,new P().i(Nl,`scala.PartialFunction$`,{ev:1});var Fl;function Il(){return Fl||=new Nl,Fl}function Ll(){this.ju=null,zl=this,this.ju=new Y((e=>Bl().ju))}j=Ll.prototype=new M,j.constructor=Ll;function Rl(){}Rl.prototype=j,j.n8=(function(e,t){var n=ml().bK(e),r=0;if(e instanceof N)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Ea)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof ka)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Da)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Oa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Ca)for(;r<n;)t.i(ga(e.a[r])),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof Sa)for(;r<n;)t.i(e.a[r]),r=1+r|0;else throw new p_(e)}),new P().i(Ll,`scala.collection.ArrayOps$`,{eC:1});var zl;function Bl(){return zl||=new Ll,zl}function Vl(){}j=Vl.prototype=new M,j.constructor=Vl;function Hl(){}Hl.prototype=j,j.bZ=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new P().i(Vl,`scala.collection.Hashing$`,{eO:1});var Ul;function Wl(){return Ul||=new Vl,Ul}function Gl(e,t){for(var n=e.m();n.n();)t.i(n.g())}function Kl(e,t){for(var n=!0,r=e.m();n&&r.n();)n=!!t.i(r.g());return n}function ql(e){switch(e.B()){case-1:return!e.m().n();case 0:return!0;default:return!1}}function Jl(e,t,n,r){for(var i=e.m(),a=n,o=ml().bK(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.n();)U().h1(t,a,i.g()),a=1+a|0;return a-n|0}function Yl(e,t,n,r){return e.B()===0?``+t+r:e.dn(uE(new dE),t,n,r).aS.q}function Xl(e,t,n,r,i){var a=t.aS;n.length!==0&&(a.q=``+a.q+n);var o=e.m();if(o.n()){var s=o.g();for(a.q=``+a.q+s;o.n();){a.q=``+a.q+r;var c=o.g();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function Zl(e,t){if(e.B()>=0){var n=t.bc(e.B());return e.bz(n,0,2147483647),n}else{var r=null,i=t.aJ(),a=i===Ma.l();r=[];for(var o=e.m();o.n();){var s=o.g(),c=a?_a(s):s===null?i.Q.z:s;r.push(c)}return(i===Aa.l()?ll.l():i===Iu.l()||i===lh.l()?F.l():i).Q.r().w(r)}}function Ql(e,t){this.jB=null,this.ez=null,this.jB=e,this.ez=t}j=Ql.prototype=new M,j.constructor=Ql;function $l(){}$l.prototype=j,j.no=(function(){return this.jB.ai().m()}),new P().i(Ql,`scala.collection.Iterator$ConcatIteratorCell`,{eX:1});function eu(){}j=eu.prototype=new M,j.constructor=eu;function tu(){}tu.prototype=j,j.f6=(function(e,t){return Zg(new Qg,e+` is out of bounds (min 0, max `+t+`)`)}),new P().i(eu,`scala.collection.generic.CommonErrors$`,{f7:1});var nu;function ru(){return nu||=new eu,nu}function iu(){try{return nf().lk(tl().hg(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function au(){this.jG=0,su=this,this.jG=iu()}j=au.prototype=new M,j.constructor=au;function ou(){}ou.prototype=j,new P().i(au,`scala.collection.immutable.IndexedSeqDefaults$`,{ff:1});var su;function cu(){return su||=new au,su}function lu(){this.gH=null}j=lu.prototype=new M,j.constructor=lu;function uu(){}uu.prototype=j,j.h6=(function(){var e=this.gH;if(e===null)throw new Xg(`uninitialized`);return e.ai()}),j.hk=(function(e){if(this.gH!==null)throw new Xg(`already initialized`);this.gH=e}),new P().i(lu,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{fj:1});function du(){this.jL=null,pu=this,this.jL=new Fm(0,0,new N(0),new Ea(0),0,0)}j=du.prototype=new M,j.constructor=du;function fu(){}fu.prototype=j,new P().i(du,`scala.collection.immutable.MapNode$`,{fA:1});var pu;function mu(){return pu||=new du,pu}function hu(e,t,n){return Gy(new qy,n+` is out of bounds (min 0, max `+(-1+ml().bK(t)|0))}function gu(){}j=gu.prototype=new M,j.constructor=gu;function _u(){}_u.prototype=j,j.lm=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw hu(this,e,t);var n=new Ea(-1+e.a.length|0);e.v(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.v(r,n,t,i),n}),j.nt=(function(e,t,n){if(t<0||t>e.a.length)throw hu(this,e,t);var r=new Ea(1+e.a.length|0);e.v(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.v(t,r,i,a),r});var vu=new P().i(0,`scala.collection.immutable.Node`,{aJ:1});function yu(){this.eH=0,xu=this,this.eH=oa(7)}j=yu.prototype=new M,j.constructor=yu;function bu(){}bu.prototype=j,j.dR=(function(e,t){return 31&(e>>>t|0)}),j.dt=(function(e){return 1<<e}),j.nq=(function(e,t){return nf().ds(e&(-1+t|0))}),j.cd=(function(e,t,n){return e===-1?t:this.nq(e,n)}),new P().i(yu,`scala.collection.immutable.Node$`,{fD:1});var xu;function Su(){return xu||=new yu,xu}function Cu(){this.gL=null,this.b9=null,this.c9=null,this.ee=null,this.gM=null,this.jP=null,Tu=this,this.gL=new N(0),this.b9=new(F.r().r()).C(0),this.c9=new(F.r().r().r()).C(0),this.ee=new(F.r().r().r().r()).C(0),this.gM=new(F.r().r().r().r().r()).C(0),this.jP=new(F.r().r().r().r().r().r()).C(0)}j=Cu.prototype=new M,j.constructor=Cu;function wu(){}wu.prototype=j,j.ej=(function(e,t){var n=e.a.length,r=new N(1+n|0);return e.v(0,r,0,n),r.a[n]=t,r}),j.G=(function(e,t){var n=R().V(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),j.cb=(function(e,t){var n=$i(t).Q.Q().Q.U(1+t.a.length|0),r=t.a.length;return t.v(0,n,1,r),n.a[0]=e,n}),j.h8=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.i(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.h8(a,t.a[r],n),r=1+r|0}),j.bL=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.i(r);if(!Object.is(r,i))return this.nC(e,t,n,i);n=1+n|0}return e}),j.nC=(function(e,t,n,r){var i=new N(e.a.length);n>0&&e.v(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.i(e.a[a]),a=1+a|0;return i}),j.a2=(function(e,t,n){if(e===1)return this.bL(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.a2(-1+e|0,i,n);if(i!==a)return this.nD(e,t,n,r,a);r=1+r|0}return t}),j.nD=(function(e,t,n,r,i){var a=$i(t).Q.Q().Q.U(t.a.length);r>0&&t.v(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.a2(-1+e|0,t.a[o],n),o=1+o|0;return a}),new P().i(Cu,`scala.collection.immutable.VectorStatics$`,{fU:1});var Tu;function V(){return Tu||=new Cu,Tu}function Eu(e,t,n){this.eg=null,this.cu=0,this.aR=null,this.eg=e,this.cu=t,this.aR=n}j=Eu.prototype=new M,j.constructor=Eu;function Du(){}Du.prototype=j,j.n4=(function(e,t){for(var n=this;;)if(t===n.cu&&H().s(e,n.eg))return n;else if(n.aR===null||n.cu>t)return null;else n=n.aR}),j.I=(function(){return`Node(`+this.eg+`, `+this.cu+`) -> `+this.aR});var Ou=new P().i(Eu,`scala.collection.mutable.HashSet$Node`,{gc:1});function ku(){}j=ku.prototype=new M,j.constructor=ku;function Au(){}Au.prototype=j,j.kE=(function(e,t,n){if(t!==e)throw new a_(n)}),new P().i(ku,`scala.collection.mutable.MutationTracker$`,{gi:1});var ju;function Mu(){return ju||=new ku,ju}function Nu(){}j=Nu.prototype=new M,j.constructor=Nu;function Pu(){}Pu.prototype=j,j.s=(function(e,t){return e===t||(of(e)?this.mT(e,t):e instanceof Qi?this.mR(e,t):e===null?t===null:ta(e,t))}),j.mT=(function(e,t){if(of(t))return this.mS(e,t);if(t instanceof Qi){if(typeof e==`number`)return+e===t.c;if(e instanceof z){var n=va(e),r=n.p,i=n.r,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ta(e,t)}else return e===null?t===null:ta(e,t)}),j.mS=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof z){var r=va(t);return n===El().f9(r.p,r.r)}else return!1}else if(e instanceof z){var i=va(e),a=i.p,o=i.r;if(t instanceof z){var s=va(t),c=s.p,l=s.r;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return El().f9(a,o)===u}else return!1}else return e===null?t===null:ta(e,t)}),j.mR=(function(e,t){if(t instanceof Qi)return e.c===t.c;if(of(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof z){var n=va(t),r=n.p,i=n.r,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ta(t,e)}else return e===null&&t===null}),new P().i(Nu,`scala.runtime.BoxesRunTime$`,{gT:1});var Fu;function H(){return Fu||=new Nu,Fu}var Iu=new P().i(0,`scala.runtime.Null$`,{gW:1});function Lu(){}j=Lu.prototype=new M,j.constructor=Lu;function Ru(){}Ru.prototype=j,j.dP=(function(e,t){if(e instanceof N||e instanceof Ea||e instanceof ka||e instanceof Da||e instanceof Oa)return e.a[t];if(e instanceof Ca)return ga(e.a[t]);if(e instanceof wa||e instanceof Ta||e instanceof Sa)return e.a[t];throw e===null?new n_:new p_(e)}),j.h1=(function(e,t,n){if(e instanceof N)e.a[t]=n;else if(e instanceof Ea)e.a[t]=n|0;else if(e instanceof ka)e.a[t]=+n;else if(e instanceof Da)e.a[t]=va(n);else if(e instanceof Oa)e.a[t]=Math.fround(n);else if(e instanceof Ca)e.a[t]=_a(n);else if(e instanceof wa)e.a[t]=n|0;else if(e instanceof Ta)e.a[t]=n|0;else if(e instanceof Sa)e.a[t]=!!n;else if(e===null)throw new n_;else throw new p_(e)}),j.m6=(function(e){return Yl(e.dS(),e.cG()+`(`,`,`,`)`)}),j.b=(function(e){return e===null?null:e.a.length===0?kb(Nb()):new sT(e)}),j.oA=(function(e){return e===null?null:new rT(e)}),new P().i(Lu,`scala.runtime.ScalaRunTime$`,{gY:1});var zu;function U(){return zu||=new Lu,zu}function Bu(){}j=Bu.prototype=new M,j.constructor=Bu;function Vu(){}Vu.prototype=j,j.e=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.E=(function(e,t){return this.ms(e^t)}),j.ms=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.en=(function(e){var t=e.p,n=e.r;return n===t>>31?t:t^n}),j.bW=(function(e){var t=oa(e);if(t===e)return t;var n=El(),r=n.lh(e),i=n.S;return El().f9(r,i)===e?r^i:_c().ht(e)}),j.P=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.bW(+e);if(e instanceof z){var t=va(e);return this.en(new z(t.p,t.r))}else return na(e)}),j.f7=(function(e){throw Zg(new Qg,``+e)}),new P().i(Bu,`scala.runtime.Statics$`,{h0:1});var Hu;function W(){return Hu||=new Bu,Hu}function Uu(){}j=Uu.prototype=new M,j.constructor=Uu;function Wu(){}Wu.prototype=j,j.oh=(function(e,t){return setTimeout((()=>{t.ai()}),e)}),new P().i(Uu,`scala.scalajs.js.timers.package$`,{h6:1});var Gu;function Ku(){return Gu||=new Uu,Gu}function qu(){}j=qu.prototype=new M,j.constructor=qu;function Ju(){}Ju.prototype=j,j.oq=(function(e){if(e instanceof Ew)return e.fE;var t=[];return e.ba(new Y((e=>t.push(e)|0))),t}),new P().i(qu,`scala.scalajs.runtime.Compat$`,{hf:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){}j=Zu.prototype=new M,j.constructor=Zu;function Qu(){}Qu.prototype=j,j.oi=(function(e){var t=`Illegal command line`+(e.l8()===0?``:e.l8()===1?` after first argument`:` after `+e.l8()+` arguments`)+`: `+e.p6();Of().nW().nw(t+`
`)}),new P().i(Zu,`scala.util.CommandLineParser$`,{hh:1});function $u(e){this.gV=null,this.gV=e}j=$u.prototype=new M,j.constructor=$u;function ed(){}ed.prototype=j,j.I=(function(){return`DynamicVariable(`+this.gV+`)`}),new P().i($u,`scala.util.DynamicVariable`,{hj:1});function td(){}j=td.prototype=new M,j.constructor=td;function nd(){}nd.prototype=j,j.e=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.E=(function(e,t){return this.bq(e^t)}),j.bq=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.ly=(function(e,t,n){var r=n;return r=this.e(r,rb(`Tuple2`)),r=this.e(r,e),r=this.e(r,t),this.E(r,2)}),j.hw=(function(e,t,n){var r=e.cE();if(r===0)return rb(e.cG());var i=t;n||(i=this.e(i,rb(e.cG())));for(var a=0;a<r;)i=this.e(i,W().P(e.cF(a))),a=1+a|0;return this.E(i,r)}),j.hA=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.n();){var s=o.g(),c=W().P(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.cB(l,a),this.E(l,i)}),j.nV=(function(e,t){var n=e.m(),r=t;if(!n.n())return this.E(r,0);var i=n.g();if(!n.n())return this.E(this.e(r,W().P(i)),1);var a=n.g(),o=W().P(i);r=this.e(r,o);for(var s=r,c=W().P(a),l=c-o|0,u=2;n.n();){r=this.e(r,c);var d=W().P(n.g());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.n();)r=this.e(r,W().P(n.g())),u=1+u|0;return this.E(r,u)}c=d,u=1+u|0}return this.bq(this.e(this.e(s,l),c))}),j.ks=(function(e,t){var n=t,r=ml().bK(e);switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,W().P(U().dP(e,0))),1);default:var i=W().P(U().dP(e,0));n=this.e(n,i);for(var a=n,o=W().P(U().dP(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=W().P(U().dP(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,W().P(U().dP(e,c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.o0=(function(e,t,n,r){return this.bq(this.e(this.e(this.e(r,e),t),n))}),j.nr=(function(e,t){var n=t,r=e.t();switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,W().P(e.w(0))),1);default:var i=W().P(e.w(0));n=this.e(n,i);for(var a=n,o=W().P(e.w(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=W().P(e.w(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,W().P(e.w(c))),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.ny=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.c();){var l=c.z(),u=c.u(),d=W().P(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.o0(s,a,o,t):this.E(r,n)}),j.kB=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]?1231:1237),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.kt=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.ku=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.kv=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,W().bW(e.a[0])),1);default:var i=W().bW(e.a[0]);n=this.e(n,i);for(var a=n,o=W().bW(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=W().bW(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,W().bW(e.a[c])),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.kw=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,W().bW(e.a[0])),1);default:var i=W().bW(e.a[0]);n=this.e(n,i);for(var a=n,o=W().bW(e.a[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=W().bW(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,W().bW(e.a[c])),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.kx=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.ky=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:var i=n,a=e.a[0];return this.E(this.e(i,W().en(new z(a.p,a.r))),1);default:var o=e.a[0],s=W().en(new z(o.p,o.r));n=this.e(n,s);for(var c=n,l=e.a[1],u=W().en(new z(l.p,l.r)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.a[f],m=W().en(new z(p.p,p.r));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.e(h,W().en(new z(g.p,g.r))),f=1+f|0}return this.E(n,r)}u=m,f=1+f|0}return this.bq(this.e(this.e(c,d),u))}}),j.kz=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,e.a[0]),1);default:var i=e.a[0];n=this.e(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.a[c]),c=1+c|0;return this.E(n,r)}o=l,c=1+c|0}return this.bq(this.e(this.e(a,s),o))}}),j.kA=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.E(n,0);case 1:return this.E(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.E(n,r)}a=0,s=1+s|0}return this.bq(this.e(this.e(i,o),a))}});function rd(e){this.dZ=null,this.hK=null,this.fV=!1,this.hK=e,wo(this),this.fV=!1}j=rd.prototype=new M,j.constructor=rd;function id(){}id.prototype=j,j.nX=(function(e){this.fV?(Oo(e),this.hK.ai()):Do(this,e)}),j.nx=(function(){To(this),this.fV=!0}),new P().i(rd,`com.raquo.airstream.ownership.OneTimeOwner`,{cg:1,ch:1});function ad(){}j=ad.prototype=new M,j.constructor=ad;function od(){}od.prototype=j,j.mK=(function(e){return e!==null}),j.mP=(function(e){return e?``:null}),j.f0=(function(e){return this.mK(e)}),j.ek=(function(e){return this.mP(!!e)}),new P().i(ad,`com.raquo.laminar.codecs.package$$anon$1`,{cx:1,ao:1});function sd(e){if(e===null)throw new n_}j=sd.prototype=new M,j.constructor=sd;function cd(){}cd.prototype=j,j.ek=(function(e){return e}),j.f0=(function(e){return e}),new P().i(sd,`com.raquo.laminar.codecs.package$$anon$2`,{cy:1,ao:1});function ld(e){return new bs(e,new Z((e=>e+`px`)))}function ud(e,t,n,r){this.ij=null,this.il=null,this.ik=null,this.g1=null,this.ij=t,this.il=n,this.ik=r,this.g1=new fd(r)}j=ud.prototype=new Cs,j.constructor=ud;function dd(){}dd.prototype=j,j.m3=(function(e){return new mp(this,(X().o.m5(),ys().lc(e,this.ik)))}),new P().i(ud,`com.raquo.laminar.keys.CompositeKey`,{cY:1,U:1});function fd(e){this.g2=null,this.g2=e}j=fd.prototype=new M,j.constructor=fd;function pd(){}pd.prototype=j,j.kK=(function(e){return ys().lc(e,this.g2)}),j.kN=(function(e){return Yl(e,``,this.g2,``)}),j.f0=(function(e){return this.kK(e)}),j.ek=(function(e){return this.kN(e)}),new P().i(fd,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{d0:1,ao:1});function md(e){if(e===null)throw new n_}j=md.prototype=new M,j.constructor=md;function hd(){}hd.prototype=j,new P().i(md,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{d2:1,d1:1});function gd(e,t,n){return e.cK=t,e.e0=n,e}function _d(){this.cK=null,this.e0=null}j=_d.prototype=new Cs,j.constructor=_d;function vd(){}vd.prototype=j,j.l=(function(e){return new gp(this,e,new Ag(((e,t,n)=>{Go().lt(e,t,n)})))}),new P().i(_d,`com.raquo.laminar.keys.HtmlAttr`,{ar:1,U:1});function yd(e,t){this.iq=null,this.ip=null,this.iq=e,this.ip=t}j=yd.prototype=new Cs,j.constructor=yd;function bd(){}bd.prototype=j,j.l=(function(e){return new gp(this,e,new Ag(((e,t,n)=>{Go().oc(e,t,n)})))}),new P().i(yd,`com.raquo.laminar.keys.HtmlProp`,{d4:1,U:1});function xd(e,t,n){this.g4=null,this.g3=null,this.fl=null,this.fm=null,this.g4=e,this.g3=t;var r=n.c()?ub():new db(n.aI()+`:`+e);this.fl=r.c()?e:r.aI(),this.fm=n.c()?ub():new db(Ds().nH(n.aI()))}j=xd.prototype=new Cs,j.constructor=xd;function Sd(){}Sd.prototype=j,new P().i(xd,`com.raquo.laminar.keys.SvgAttr`,{d5:1,U:1});function Cd(){}j=Cd.prototype=new M,j.constructor=Cd;function wd(){}wd.prototype=j,j.ca=(function(e){}),new P().i(Cd,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{db:1,a3:1});function Td(e,t){if(this.iw=null,this.iw=e,t===null)throw new n_}j=Td.prototype=new M,j.constructor=Td;function Ed(){}Ed.prototype=j,j.ca=(function(e){var t=no(),n=(()=>{this.iw.i(e)});if(no(),t.bM)n();else{t.bM=!0;try{n()}finally{t.bM=!1,Qa(t)}}}),new P().i(Td,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dc:1,a3:1});function Dd(){}j=Dd.prototype=new M,j.constructor=Dd;function Od(){}Od.prototype=j,new P().i(Dd,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{df:1,dd:1});function kd(){}j=kd.prototype=new M,j.constructor=kd;function Ad(){}Ad.prototype=j,new P().i(kd,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{dh:1,dg:1});var jd;function Md(){return jd||=new kd,jd}function Nd(e,t){if(this.ix=null,this.ix=e,t===null)throw new n_}j=Nd.prototype=new M,j.constructor=Nd;function Pd(){}Pd.prototype=j,j.mr=(function(e){return this.ix.i(e)}),new P().i(Nd,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{dk:1,di:1});function Fd(e){e.kH(new ho(new Tg((()=>{throw om(new sm,`Attempting to use owner of unmounted element: `+Yl(Go().mJ(e.dT(),(Go(),$())),``,` > `,``))}))))}function Id(e,t,n){return e.ga=t,e}function Ld(){this.ga=null}j=Ld.prototype=new M,j.constructor=Ld;function Rd(){}Rd.prototype=j,j.hp=(function(){return this.ga}),j.ei=(function(e){var t=this.mv();return e.ba(new Z((e=>{e.ca(t)}))),t}),j.mv=(function(){return new Hy(this,Go().mE(this))}),new P().i(Ld,`com.raquo.laminar.tags.HtmlTag`,{aV:1,ax:1});function zd(e,t){this.iE=null,this.iE=e}j=zd.prototype=new M,j.constructor=zd;function Bd(){}Bd.prototype=j,new P().i(zd,`com.raquo.laminar.tags.SvgTag`,{du:1,ax:1});function Vd(){}j=Vd.prototype=new M,j.constructor=Vd;function Hd(){}Hd.prototype=j,j.ek=(function(e){return e}),j.f0=(function(e){return e}),new P().i(Vd,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dI:1,ao:1});function Ud(e,t){return e.cO=t,e.eh(),e}function Wd(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1}j=Wd.prototype=new M,j.constructor=Wd;function Gd(){}Gd.prototype=j,j.bY=(function(){return this.cM||=(this.cL=X().o.np(),!0),this.cL}),j.on=(function(){return this.cP||=(this.cN=new bp(this.cO,Xs().m4(),(Xs(),void 0)),!0),this.cN}),j.k=(function(e,t){var n=this.on().ei(U().b(new(I.r()).C([])));return e.ba(new Z((e=>{e.i(this).ca(n)}))),t.ba(new Z((e=>{e.ca(n)}))),n});function Kd(e){return(32&e.fo)<<24>>24||(e.gb=new Ea(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.fo=(32|e.fo)<<24>>24),e.gb}function qd(e){return(32&e.fo)<<24>>24?e.gb:Kd(e)}function Jd(){this.gb=null,this.fo=0}j=Jd.prototype=new M,j.constructor=Jd;function Yd(){}Yd.prototype=j,j.mL=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=R().mt(qd(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-qd(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new P().i(Jd,`java.lang.Character$`,{dP:1,a:1});var Xd;function Zd(){return Xd||=new Jd,Xd}function Qd(e){throw new nb(`For input string: "`+e+`"`)}function $d(){}j=$d.prototype=new M,j.constructor=$d;function ef(){}ef.prototype=j,j.lk=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&Qd(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&Qd(e);for(var s=0;o!==n;){var c=Zd().mL(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&Qd(e),o=1+o|0}return i?-s|0:s|0}),j.ds=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new P().i($d,`java.lang.Integer$`,{dV:1,a:1});var tf;function nf(){return tf||=new $d,tf}function rf(){}j=rf.prototype=new M,j.constructor=rf;function af(){}af.prototype=j;function of(e){return e instanceof rf||typeof e==`number`||e instanceof z}function sf(e,t,n,r,i){this.e5=null,this.eu=null,this.e6=null,this.e7=0,this.e4=0,this.e5=e,this.eu=t,this.e6=n,this.e7=r,this.e4=i}j=sf.prototype=new M,j.constructor=sf;function cf(){}cf.prototype=j,j.x=(function(e){return e instanceof sf&&this.e6===e.e6&&this.e7===e.e7&&this.e4===e.e4&&this.e5===e.e5&&this.eu===e.eu}),j.I=(function(){var e=``;return this.e5!==`<jscode>`&&(e=``+e+this.e5+`.`),e=``+e+this.eu,this.e6===null?e+=`(Unknown Source)`:(e=e+`(`+this.e6,this.e7>=0&&(e=e+`:`+this.e7,this.e4>=0&&(e=e+`:`+this.e4)),e+=`)`),e}),j.C=(function(){return rb(this.e5)^rb(this.eu)^rb(this.e6)^this.e7^this.e4});var lf=new P().i(sf,`java.lang.StackTraceElement`,{b6:1,a:1});function uf(){}j=uf.prototype=new M,j.constructor=uf;function df(){}df.prototype=j,j.nJ=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new ob;for(var i=``,a=t;a!==r;)i+=``+sa(e.a[a]),a=1+a|0;return i}),new P().i(uf,`java.lang.String$`,{e6:1,a:1});var ff;function pf(){return ff||=new uf,ff}function mf(e,t,n,r,i){return e.jk=t,e.jl=i,i&&e.n3(),e}var hf=class extends Error{constructor(){super(),this.jk=null,this.jl=!1,this.jj=null,this.fq=null}f5(){return this.jk}n3(){var e=this instanceof Jx?this.bU:this;return this.jj=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}nl(){return this.fq===null&&(this.jl?this.fq=Hc().n2(this.jj):this.fq=new(lf.r()).C(0)),this.fq}I(){var e=ea(this),t=this.f5();return t===null?e:e+`: `+t}C(){return ba.prototype.C.call(this)}x(e){return ba.prototype.x.call(this,e)}get message(){var e=this.f5();return e===null?``:e}get name(){return ea(this)}toString(){return this.I()}};function gf(){this.gj=null,vf=this,this.gj=new s_}j=gf.prototype=new M,j.constructor=gf;function _f(){}_f.prototype=j,new P().i(gf,`scala.$less$colon$less$`,{ek:1,a:1});var vf;function yf(){return vf||=new gf,vf}function bf(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)U().h1(r,s,U().dP(t,o)),o=1+o|0,s=1+s|0}function xf(){}j=xf.prototype=new M,j.constructor=xf;function Sf(){}Sf.prototype=j,j.kZ=(function(e,t){var n=e.B();if(n>-1){for(var r=t.bc(n),i=e.m(),a=0;a<n;)U().h1(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.aJ(),c=s===Ma.l();o=[];for(var l=e.m();l.n();){var u=l.g(),d=c?_a(u):u===null?s.Q.z:u;o.push(d)}return(s===Aa.l()?ll.l():s===Iu.l()||s===lh.l()?F.l():s).Q.r().w(o)}}),j.eY=(function(e,t,n,r,i){var a=$i(e);a.Q.Z&&$i(n).Q.R(a.Q)?e.v(t,n,r,i):bf(this,e,t,n,r,i)}),j.kV=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().s(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new P().i(xf,`scala.Array$`,{em:1,a:1});var Cf;function wf(){return Cf||=new xf,Cf}function Tf(){this.jn=null,Df=this,this.jn=new $u(Xc().jh)}j=Tf.prototype=new M,j.constructor=Tf;function Ef(){}Ef.prototype=j,j.nW=(function(){return this.jn.gV}),new P().i(Tf,`scala.Console$`,{eo:1,go:1});var Df;function Of(){return Df||=new Tf,Df}function kf(){}j=kf.prototype=new Ml,j.constructor=kf;function Af(){}Af.prototype=j,j.oB=(function(e){return e===null?null:e.a.length===0?ax().jU:new NT(e)});function jf(){}j=jf.prototype=new M,j.constructor=jf;function Mf(){}Mf.prototype=j,j.dq=(function(e){return e===null?ub():new db(e)}),new P().i(jf,`scala.Option$`,{eu:1,a:1});var Nf;function Pf(){return Nf||=new jf,Nf}function Ff(){}j=Ff.prototype=new _u,j.constructor=Ff;function If(){}If.prototype=j;function Lf(e,t){if(t===e)e.aX(ay().l0(t));else for(var n=t.m();n.n();)e.aT(n.g());return e}function Rf(){this.lS=null,this.m1=null,this.lT=null,this.lW=null,this.lX=null,this.lV=null,this.lU=null,this.lR=null,this.m2=null,this.lP=null,this.m0=null,this.lQ=null,this.lY=null,this.lZ=null,Bf=this,this.lS=FS(),this.m1=_C(),this.lT=zS(),this.lW=ZS(),this.lX=tC(),this.lV=qS(),this.lU=US(),this.lR=jS(),this.m2=xC(),this.lP=DS(),this.m0=pC(),this.lQ=pC(),this.lY=aC(),this.lZ=lC()}j=Rf.prototype=new M,j.constructor=Rf;function zf(){}zf.prototype=j,j.kp=(function(e){return e===Na.l()?FS():e===Pa.l()?_C():e===Ma.l()?zS():e===Fa.l()?ZS():e===Ia.l()?tC():e===La.l()?qS():e===Ra.l()?US():e===ja.l()?jS():e===Aa.l()?xC():e===F.l()?pC():e===lh.l()?aC():e===Iu.l()?lC():new fx(e)}),new P().i(Rf,`scala.reflect.ClassTag$`,{gq:1,a:1});var Bf;function Vf(){return Bf||=new Rf,Bf}function Hf(){}j=Hf.prototype=new M,j.constructor=Hf;function Uf(){}Uf.prototype=j,j.I=(function(){return`<function0>`});function Wf(){}j=Wf.prototype=new M,j.constructor=Wf;function Gf(){}Gf.prototype=j,j.I=(function(){return`<function1>`});function Kf(){}j=Kf.prototype=new M,j.constructor=Kf;function qf(){}qf.prototype=j,j.I=(function(){return`<function2>`});function Jf(){}j=Jf.prototype=new M,j.constructor=Jf;function Yf(){}Yf.prototype=j,j.I=(function(){return`<function3>`});function Xf(e){this.fC=!1,this.fC=e}j=Xf.prototype=new M,j.constructor=Xf;function Zf(){}Zf.prototype=j,j.I=(function(){return``+this.fC}),new P().i(Xf,`scala.runtime.BooleanRef`,{gS:1,a:1});function Qf(e){this.dN=0,this.dN=e}j=Qf.prototype=new M,j.constructor=Qf;function $f(){}$f.prototype=j,j.I=(function(){return``+this.dN}),new P().i(Qf,`scala.runtime.IntRef`,{gU:1,a:1});function ep(e){this.fD=null,this.fD=e}j=ep.prototype=new M,j.constructor=ep;function tp(){}tp.prototype=j,j.I=(function(){return``+this.fD}),new P().i(ep,`scala.runtime.ObjectRef`,{gX:1,a:1});function np(){this.ah=0,this.dm=0,this.ka=0,this.gW=0,ip=this,this.ah=rb(`Seq`),this.dm=rb(`Map`),this.ka=rb(`Set`),this.gW=this.hA($(),this.dm)}j=np.prototype=new nd,j.constructor=np;function rp(){}rp.prototype=j,j.c3=(function(e,t){return this.ly(W().P(e),W().P(t),-889275714)}),j.ls=(function(e){return IC(e)?this.nr(e,this.ah):e instanceof hT?this.ny(e,this.ah):this.nV(e,this.ah)}),j.nE=(function(e){if(e.c())return this.gW;var t=new ap,n=this.dm;return e.dQ(t),n=this.e(n,t.fF),n=this.e(n,t.fG),n=this.cB(n,t.fH),this.E(n,t.fI)}),new P().i(np,`scala.util.hashing.MurmurHash3$`,{hl:1,hk:1});var ip;function G(){return ip||=new np,ip}function ap(){this.fF=0,this.fG=0,this.fI=0,this.fH=0,this.fF=0,this.fG=0,this.fI=0,this.fH=1}j=ap.prototype=new M,j.constructor=ap;function op(){}op.prototype=j,j.I=(function(){return`<function2>`}),j.mq=(function(e,t){var n=G().c3(e,t);this.fF=this.fF+n|0,this.fG^=n,this.fH=Math.imul(this.fH,1|n),this.fI=1+this.fI|0}),j.cx=(function(e,t){this.mq(e,t)}),new P().i(ap,`scala.util.hashing.MurmurHash3$accum$1`,{hm:1,aA:1});var sp=class extends hf{};function cp(){this.fS=null,this.hD=null,this.hE=null,up=this,this.fS=ay().kq(U().b(new(B.r()).C([]))),this.hD=new Z((e=>{try{console.error(this.nh(e)+`
`+this.nk(e,`
`))}catch(e){var t=e instanceof hf?e:new Jx(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.hE=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Jx?t.bU:t})),this.o1(this.hD)}j=cp.prototype=new M,j.constructor=cp;function lp(){}lp.prototype=j,j.nh=(function(e){try{var t=e.f5()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return $i(e).hh()+`: `+t}),j.nk=(function(e,t){try{return Yl(pm().oB(e.nl()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.o1=(function(e){this.fS.aT(e)}),j.fb=(function(e){for(var t=this.fS.m();t.n();){var n=t.g();try{n.i(e)}catch(e){var r=e instanceof hf?e:new Jx(e),i=this.hE;if(n===null?i===null:n.x(i))throw r instanceof Jx?r.bU:r;console.warn(`Error processing an unhandled error callback:`),Ku().oh(0,new Tg((e=>(()=>{throw e instanceof Jx?e.bU:e}))(r)))}}}),new P().i(cp,`com.raquo.airstream.core.AirstreamError$`,{c3:1,gm:1,gn:1});var up;function dp(){return up||=new cp,up}function K(e,t,n){return new Mh(n.mr(t))}function fp(e,t,n,r){return new Td(new Z((e=>{(Zo(),new Ko(t,null,null)).ba(new Z((e=>(t=>{n.i(t).ca(e)}))(e)))})),Ns())}function pp(e,t,n){return new Td(new Z((e=>{(Zo(),new Ko(t,null,null)).ba(new Z((e=>(t=>{Ws().eO(e,t,void 0)}))(e)))})),Ns())}function mp(e,t){this.is=null,this.g5=null,this.is=e,this.g5=t}j=mp.prototype=new M,j.constructor=mp;function hp(){}hp.prototype=j,j.ca=(function(e){this.g5.c()||Ig(e,this.is,null,this.g5,$())}),new P().i(mp,`com.raquo.laminar.modifiers.CompositeKeySetter`,{d8:1,a3:1,aS:1});function gp(e,t,n){this.iu=null,this.iv=null,this.it=null,this.iu=e,this.iv=t,this.it=n}j=gp.prototype=new M,j.constructor=gp;function _p(){}_p.prototype=j,j.ca=(function(e){this.it.mp(e,this.iu,this.iv)}),new P().i(gp,`com.raquo.laminar.modifiers.KeySetter`,{d9:1,a3:1,aS:1});function vp(e,t){if(this.g8=null,this.iz=null,this.iA=null,this.iz=t,Fd(this),e===null)throw om(new sm,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Go().nv(e,document))throw om(new sm,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.iA=e,this.nG()}j=vp.prototype=new M,j.constructor=vp;function yp(){}yp.prototype=j,j.fM=(function(){return this.g8}),j.kH=(function(e){this.g8=e}),j.nG=(function(){return this.g8.ke(),Ws().eO(this,this.iz,void 0)}),j.dT=(function(){return this.iA}),new P().i(vp,`com.raquo.laminar.nodes.RootNode`,{dp:1,aw:1,aU:1});function bp(e,t,n){this.ga=null,this.iD=null,this.iD=e,Id(this,e,!1)}j=bp.prototype=new Rd,j.constructor=bp;function xp(){}xp.prototype=j,j.hp=(function(){return this.iD}),new P().i(bp,`com.raquo.laminar.tags.CustomHtmlTag`,{ds:1,aV:1,ax:1});function Sp(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,this.iJ=null,this.iK=!1,this.iH=null,this.iI=!1,this.iL=null,this.iM=!1,this.iF=null,this.iG=!1,Ud(this,`wa-button`)}j=Sp.prototype=new Gd,j.constructor=Sp;function Cp(){}Cp.prototype=j,j.hC=(function(){return this.iK||=(this.iJ=Bp(),!0),this.iJ}),j.cH=(function(){return this.iI||=(this.iH=Mp(),!0),this.iH}),j.ow=(function(){return this.iM||=(this.iL=(X(),gd(new _d,`with-caret`,as().fZ)),!0),this.iL}),j.cD=(function(){return this.iG||=(this.iF=(X(),gd(new _d,`pill`,as().fZ)),!0),this.iF}),j.eh=(function(){return xn}),new P().i(Sp,`io.github.nguyenyou.webawesome.laminar.Button$`,{dy:1,ae:1,ad:1});var wp;function q(){return wp||=new Sp,wp}function Tp(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,this.iN=null,this.iO=!1,Ud(this,`wa-button-group`)}j=Tp.prototype=new Gd,j.constructor=Tp;function Ep(){}Ep.prototype=j,j.a4=(function(){return this.iO||=(this.iN=(X(),gd(new _d,`label`,as().ch)),!0),this.iN}),j.eh=(function(){return ct}),new P().i(Tp,`io.github.nguyenyou.webawesome.laminar.ButtonGroup$`,{dz:1,ae:1,ad:1});var Dp;function Op(){return Dp||=new Tp,Dp}function kp(){this.cK=null,this.e0=null,this.iP=null,this.iQ=!1,this.iR=null,this.iS=!1,this.iT=null,this.iU=!1,gd(this,`size`,new Vd)}j=kp.prototype=new vd,j.constructor=kp;function Ap(){}Ap.prototype=j,j.hl=(function(){return this.iQ||=(this.iP=Mp().l(`large`),!0),this.iP}),j.hn=(function(){return this.iS||=(this.iR=Mp().l(`medium`),!0),this.iR}),j.hz=(function(){return this.iU||=(this.iT=Mp().l(`small`),!0),this.iT}),new P().i(kp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{dA:1,ar:1,U:1});var jp;function Mp(){return jp||=new kp,jp}function Np(){this.cK=null,this.e0=null,this.iV=null,this.iW=!1,gd(this,`placement`,new Vd)}j=Np.prototype=new vd,j.constructor=Np;function Pp(){}Pp.prototype=j,j.mu=(function(){return this.iW||=(this.iV=Ip().l(`bottom-end`),!0),this.iV}),new P().i(Np,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{dB:1,ar:1,U:1});var Fp;function Ip(){return Fp||=new Np,Fp}function Lp(){this.cK=null,this.e0=null,this.iX=null,this.iY=!1,this.iZ=null,this.j0=!1,gd(this,`variant`,new Vd)}j=Lp.prototype=new vd,j.constructor=Lp;function Rp(){}Rp.prototype=j,j.kC=(function(){return this.iY||=(this.iX=Bp().l(`brand`),!0),this.iX}),j.nI=(function(){return this.j0||=(this.iZ=Bp().l(`neutral`),!0),this.iZ}),new P().i(Lp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{dC:1,ar:1,U:1});var zp;function Bp(){return zp||=new Lp,zp}function Vp(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,this.j1=null,this.j2=!1,Ud(this,`wa-dropdown`)}j=Vp.prototype=new Gd,j.constructor=Vp;function Hp(){}Hp.prototype=j,j.nY=(function(){return this.j2||=(this.j1=Ip(),!0),this.j1}),j.eh=(function(){return Wi}),new P().i(Vp,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{dD:1,ae:1,ad:1});var Up;function Wp(){return Up||=new Vp,Up}function Gp(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,Ud(this,`wa-dropdown-item`)}j=Gp.prototype=new Gd,j.constructor=Gp;function Kp(){}Kp.prototype=j,j.eh=(function(){return Tn}),new P().i(Gp,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{dF:1,ae:1,ad:1});var qp;function Jp(){return qp||=new Gp,qp}function Yp(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,this.j7=null,this.j8=!1,this.j9=null,this.ja=!1,this.j5=null,this.j6=!1,Ud(this,`wa-icon`)}j=Yp.prototype=new Gd,j.constructor=Yp;function Xp(){}Xp.prototype=j,j.cC=(function(){return this.j8||=(this.j7=(X(),gd(new _d,`name`,as().ch)),!0),this.j7}),j.dB=(function(){return this.ja||=(this.j9=(X(),gd(new _d,`variant`,as().ch)),!0),this.j9}),j.a4=(function(){return this.j6||=(this.j5=(X(),gd(new _d,`label`,as().ch)),!0),this.j5}),j.eh=(function(){return Gi}),new P().i(Yp,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dG:1,ae:1,ad:1});var Zp;function Qp(){return Zp||=new Yp,Zp}function $p(){this.cO=null,this.cL=null,this.cM=!1,this.cN=null,this.cP=!1,this.jb=null,this.je=!1,this.jc=null,this.jd=!1,Ud(this,`wa-tooltip`)}j=$p.prototype=new Gd,j.constructor=$p;function em(){}em.prototype=j,j.n6=(function(){return this.je||=(this.jb=(X(),gd(new _d,`for`,as().ch)),!0),this.jb}),j.bX=(function(){return this.jd||=(this.jc=this.n6(),!0),this.jc}),j.eh=(function(){return Xi}),new P().i($p,`io.github.nguyenyou.webawesome.laminar.Tooltip$`,{dH:1,ae:1,ad:1});var tm;function nm(){return tm||=new $p,tm}function rm(e){if(e.Q.Z)return e.Q.Q().hh()+`[]`;for(var t=e.Q.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function im(e){this.gc=null,this.Q=e}j=im.prototype=new M,j.constructor=im;function am(){}am.prototype=j,j.I=(function(){return(this.Q.Y?`interface `:this.Q.X?``:`class `)+this.Q.N}),j.hh=(function(){return this.gc===null&&(this.gc=rm(this)),this.gc}),new P().i(im,`java.lang.Class`,{dQ:1,a:1,X:1});function om(e,t){return mf(e,t,null,!0,!0),e}var sm=class extends hf{};new P().i(sm,`java.lang.Exception`,{C:1,w:1,a:1});function cm(){}j=cm.prototype=new M,j.constructor=cm;function lm(){}lm.prototype=j;function um(){this.lO=null,fm=this,this.lO=Qm()}j=um.prototype=new Af,j.constructor=um;function dm(){}dm.prototype=j,j.o6=(function(e){if(!e)throw qg(new Yg,`requirement failed`)}),new P().i(um,`scala.Predef$`,{ex:1,eq:1,er:1});var fm;function pm(){return fm||=new um,fm}function mm(e,t){switch(t){case 0:return e.b4();case 1:return e.b2();default:throw Zg(new Qg,t+` is out of bounds (min 0, max 1)`)}}function hm(e,t){return e.ex=t,e}function gm(){this.ex=null}j=gm.prototype=new M,j.constructor=gm;function _m(){}_m.prototype=j,j.ay=(function(e){return this.ex.h9(e,DS())}),j.aU=(function(){return this.ex.fP(DS())}),j.cy=(function(e){return this.ex.h9(e,DS())});function vm(e,t){return e.fs=t,e}function ym(){this.fs=null}j=ym.prototype=new M,j.constructor=ym;function bm(){}bm.prototype=j,j.ay=(function(e){return this.fs.ay(e)}),j.aU=(function(){return this.fs.aU()});function xm(e,t){if(t<0)return 1;var n=e.B();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.m();i.n();){if(r===t)return 1;i.g(),r=1+r|0}return r-t|0}function Sm(e,t){return new N_(e).h2(t)}function Cm(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?J().K:new L_(e,r,i)}function wm(e,t){for(var n=t.m();e.n()&&n.n();)if(!H().s(e.g(),n.g()))return!1;return e.n()===n.n()}function Tm(){this.K=null,Dm=this,this.K=new C_}j=Tm.prototype=new M,j.constructor=Tm;function Em(){}Em.prototype=j,j.aU=(function(){return new Sb}),j.ay=(function(e){return e.m()}),new P().i(Tm,`scala.collection.Iterator$`,{eR:1,J:1,a:1});var Dm;function J(){return Dm||=new Tm,Dm}function Om(e,t){return e.gx=t,e}function km(){this.gx=null}j=km.prototype=new M,j.constructor=km;function Am(){}Am.prototype=j,j.ay=(function(e){return this.gx.ay(e)});function jm(){}j=jm.prototype=new M,j.constructor=jm;function Mm(){}Mm.prototype=j,j.l1=(function(e){return zx(e)?e:S_(e)?new wC(new ih((e=>(()=>e.m()))(e))):BC(new VC,yg().hb(e))}),j.aU=(function(){return new bg(($v(),new ey),new Y((e=>Pm().l1(e))))}),j.ay=(function(e){return this.l1(e)}),new P().i(jm,`scala.collection.View$`,{f4:1,J:1,a:1});var Nm;function Pm(){return Nm||=new jm,Nm}function Fm(e,t,n,r,i,a){this.W=0,this.ae=0,this.aj=null,this.bg=null,this.aL=0,this.b5=0,this.W=e,this.ae=t,this.aj=n,this.bg=r,this.aL=i,this.b5=a}j=Fm.prototype=new If,j.constructor=Fm;function Im(){}Im.prototype=j,j.aK=(function(){return this.aL}),j.du=(function(){return this.b5}),j.dw=(function(e){return this.aj.a[e<<1]}),j.cA=(function(e){return this.aj.a[1+(e<<1)|0]}),j.l6=(function(e){return new Q(this.aj.a[e<<1],this.aj.a[1+(e<<1)|0])}),j.f4=(function(e){return this.bg.a[e]}),j.cz=(function(e){return this.aj.a[(-1+this.aj.a.length|0)-e|0]}),j.gZ=(function(e,t,n,r){var i=Su().dR(n,r),a=Su().dt(i);if((this.W&a)!==0){var o=Su().cd(this.W,i,a);if(H().s(e,this.dw(o)))return this.cA(o);throw new o_(`key not found: `+e)}else if((this.ae&a)!==0)return this.cz(Su().cd(this.ae,i,a)).gZ(e,t,n,5+r|0);else throw new o_(`key not found: `+e)}),j.hf=(function(e,t,n,r,i){var a=Su().dR(n,r),o=Su().dt(a);if((this.W&o)!==0){var s=Su().cd(this.W,a,o);return H().s(e,this.dw(s))?this.cA(s):i.ai()}else return(this.ae&o)===0?i.ai():this.cz(Su().cd(this.ae,a,o)).hf(e,t,n,5+r|0,i)}),j.h3=(function(e,t,n,r){var i=Su().dR(n,r),a=Su().dt(i);if((this.W&a)!==0){var o=Su().cd(this.W,i,a);return this.bg.a[o]===t&&H().s(e,this.dw(o))}else return(this.ae&a)!==0&&this.cz(Su().cd(this.ae,i,a)).h3(e,t,n,5+r|0)}),j.lz=(function(e,t,n,r,i,a){var o=Su().dR(r,i),s=Su().dt(o);if((this.W&s)!==0){var c=Su().cd(this.W,o,s),l=this.dw(c),u=this.f4(c);if(u===n&&H().s(l,e))if(a){var d=this.cA(c);return Object.is(l,e)&&Object.is(d,t)?this:this.mD(s,e,t)}else return this;else{var f=this.cA(c),p=Wl().bZ(u);return this.mB(s,p,this.ho(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.ae&s)!==0){var m=Su().cd(this.ae,o,s),h=this.cz(m),g=h.lA(e,t,n,r,5+i|0,a);return g===h?this:this.mC(s,h,g)}else return this.mA(s,e,n,r,t)}),j.ho=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new Lm(n,r,Bv().hc(new Ew([new Q(e,t),new Q(i,a)])));var l=Su().dR(r,c),u=Su().dR(s,c),d=r+s|0;if(l!==u){var f=Su().dt(l)|Su().dt(u);return l<u?new Fm(f,0,new N([e,t,i,a]),new Ea(new Int32Array([n,o])),2,d):new Fm(f,0,new N([i,a,e,t]),new Ea(new Int32Array([o,n])),2,d)}else{var p=Su().dt(l),m=this.ho(e,t,n,r,i,a,o,s,5+c|0);return new Fm(0,p,new N([m]),Al().gk,m.aK(),m.du())}}),j.hi=(function(){return this.ae!==0}),j.hr=(function(){return nf().ds(this.ae)}),j.fN=(function(){return this.W!==0}),j.hu=(function(){return nf().ds(this.W)}),j.eZ=(function(e){return nf().ds(this.W&(-1+e|0))}),j.hs=(function(e){return nf().ds(this.ae&(-1+e|0))}),j.mD=(function(e,t,n){var r=this.eZ(e)<<1,i=this.aj,a=new N(i.a.length),o=i.a.length;return i.v(0,a,0,o),a.a[1+r|0]=n,new Fm(this.W,this.ae,a,this.bg,this.aL,this.b5)}),j.mC=(function(e,t,n){var r=(-1+this.aj.a.length|0)-this.hs(e)|0,i=this.aj,a=new N(i.a.length),o=i.a.length;return i.v(0,a,0,o),a.a[r]=n,new Fm(this.W,this.ae,a,this.bg,(this.aL-t.aK()|0)+n.aK()|0,(this.b5-t.du()|0)+n.du()|0)}),j.mA=(function(e,t,n,r,i){var a=this.eZ(e),o=a<<1,s=this.aj,c=new N(2+s.a.length|0);s.v(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.v(o,c,l,u);var d=this.nt(this.bg,a,n);return new Fm(this.W|e,this.ae,c,d,1+this.aL|0,this.b5+r|0)}),j.nF=(function(e,t,n){var r=this.eZ(e),i=r<<1,a=(-2+this.aj.a.length|0)-this.hs(e)|0,o=this.aj,s=new N(-1+o.a.length|0);o.v(0,s,0,i);var c=2+i|0,l=a-i|0;o.v(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.v(u,s,d,f);var p=this.lm(this.bg,r);return this.W^=e,this.ae|=e,this.aj=s,this.bg=p,this.aL=(-1+this.aL|0)+n.aK()|0,this.b5=(this.b5-t|0)+n.du()|0,this}),j.mB=(function(e,t,n){var r=this.eZ(e),i=r<<1,a=(-2+this.aj.a.length|0)-this.hs(e)|0,o=this.aj,s=new N(-1+o.a.length|0);o.v(0,s,0,i);var c=2+i|0,l=a-i|0;o.v(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.v(u,s,d,f);var p=this.lm(this.bg,r);return new Fm(this.W^e,this.ae|e,s,p,(-1+this.aL|0)+n.aK()|0,(this.b5-t|0)+n.du()|0)}),j.dQ=(function(e){for(var t=nf().ds(this.W),n=0;n<t;)e.cx(this.dw(n),this.cA(n)),n=1+n|0;for(var r=nf().ds(this.ae),i=0;i<r;)this.cz(i).dQ(e),i=1+i|0}),j.x=(function(e){if(e instanceof Fm){if(this===e)return!0;if(this.b5===e.b5&&this.ae===e.ae&&this.W===e.W&&this.aL===e.aL&&R().h5(this.bg,e.bg)){var t=this.aj,n=e.aj,r=this.aj.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=H().s(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),j.C=(function(){throw new i_(`Trie nodes do not support hashing.`)}),j.kI=(function(){for(var e=this.aj.f(),t=e.a.length,n=nf().ds(this.W)<<1;n<t;)e.a[n]=e.a[n].kJ(),n=1+n|0;return new Fm(this.W,this.ae,e,this.bg.f(),this.aL,this.b5)}),j.kJ=(function(){return this.kI()}),j.lA=(function(e,t,n,r,i,a){return this.lz(e,t,n,r,i,a)}),j.he=(function(e){return this.cz(e)}),new P().i(Fm,`scala.collection.immutable.BitmapIndexedMapNode`,{bx:1,bH:1,aJ:1});function Lm(e,t,n){this.gC=0,this.d0=0,this.af=null,this.gC=e,this.d0=t,this.af=n,pm().o6(this.af.t()>=2)}j=Lm.prototype=new If,j.constructor=Lm;function Rm(){}Rm.prototype=j,j.em=(function(e){for(var t=this.af.m(),n=0;t.n();){if(H().s(t.g().b4(),e))return n;n=1+n|0}return-1}),j.aK=(function(){return this.af.t()}),j.gZ=(function(e,t,n,r){var i=this.nf(e,t,n,r);if(i.c())throw J().K.g(),new Kg;return i.aI()}),j.nf=(function(e,t,n,r){if(this.d0===n){var i=this.em(e);return i>=0?new db(this.af.w(i).b2()):ub()}else return ub()}),j.hf=(function(e,t,n,r,i){if(this.d0===n){var a=this.em(e);return a===-1?i.ai():this.af.w(a).b2()}else return i.ai()}),j.h3=(function(e,t,n,r){return this.d0===n&&this.em(e)>=0}),j.lA=(function(e,t,n,r,i,a){var o=this.em(e);return o>=0?a?Object.is(this.af.w(o).b2(),t)?this:new Lm(n,r,this.af.dz(o,new Q(e,t))):this:new Lm(n,r,this.af.dp(new Q(e,t)))}),j.hi=(function(){return!1}),j.hr=(function(){return 0}),j.cz=(function(e){throw Zg(new Qg,`No sub-nodes present in hash-collision leaf node.`)}),j.fN=(function(){return!0}),j.hu=(function(){return this.af.t()}),j.dw=(function(e){return this.af.w(e).b4()}),j.cA=(function(e){return this.af.w(e).b2()}),j.l6=(function(e){return this.af.w(e)}),j.f4=(function(e){return this.gC}),j.dQ=(function(e){this.af.ba(new Y((t=>{if(t!==null){var n=t.b4(),r=t.b2();return e.cx(n,r)}else throw new p_(t)})))}),j.x=(function(e){if(e instanceof Lm){if(this===e)return!0;if(this.d0===e.d0&&this.af.t()===e.af.t()){for(var t=this.af.m();t.n();){var n=t.g();if(n===null)throw new p_(n);var r=n.b4(),i=n.b2(),a=e.em(r);if(a<0||!H().s(i,e.af.w(a).b2()))return!1}return!0}else return!1}else return!1}),j.C=(function(){throw new i_(`Trie nodes do not support hashing.`)}),j.du=(function(){return Math.imul(this.af.t(),this.d0)}),j.kJ=(function(){return new Lm(this.gC,this.d0,this.af)}),j.he=(function(e){return this.cz(e)}),new P().i(Lm,`scala.collection.immutable.HashCollisionMapNode`,{bz:1,bH:1,aJ:1});function zm(){this.gD=null,Vm=this,this.gD=new Ow(mu().jL)}j=zm.prototype=new M,j.constructor=zm;function Bm(){}Bm.prototype=j,j.na=(function(e){return e instanceof Ow?e:new hv().gY(e).hy()}),j.ay=(function(e){return this.na(e)}),new P().i(zm,`scala.collection.immutable.HashMap$`,{fb:1,aD:1,a:1});var Vm;function Hm(){return Vm||=new zm,Vm}function Um(e,t){this.jI=null,this.jJ=null,this.jI=e,this.jJ=t}j=Um.prototype=new M,j.constructor=Um;function Wm(){}Wm.prototype=j,j.z=(function(){return this.jI}),j.aE=(function(){return this.jJ}),new P().i(Um,`scala.collection.immutable.LazyList$State$Cons`,{fl:1,bC:1,a:1});function Gm(){}j=Gm.prototype=new M,j.constructor=Gm;function Km(){}Km.prototype=j,j.hj=(function(){throw new o_(`head of empty lazy list`)}),j.aE=(function(){throw new i_(`tail of empty lazy list`)}),j.z=(function(){this.hj()}),new P().i(Gm,`scala.collection.immutable.LazyList$State$Empty$`,{fm:1,bC:1,a:1});var qm;function Jm(){return qm||=new Gm,qm}function Ym(){}j=Ym.prototype=new M,j.constructor=Ym;function Xm(){}Xm.prototype=j,j.nc=(function(e){return Ib(e)&&e.c()?uw():e instanceof Ow||e instanceof dw||e instanceof pw||e instanceof hw||e instanceof _w?e:new Pv().kf(e).ln()}),j.ay=(function(e){return this.nc(e)}),new P().i(Ym,`scala.collection.immutable.Map$`,{fp:1,aD:1,a:1});var Zm;function Qm(){return Zm||=new Ym,Zm}function $m(e,t,n){var r=t.B();if(r!==-1){var i=r+n|0;e.aZ(i<0?0:i)}}function eh(){}j=eh.prototype=new M,j.constructor=eh;function th(){}th.prototype=j,j.nd=(function(e){var t=e.B();return Iw(new Rw,t>0?oa((1+t|0)/.75):16,.75).ki(e)}),j.aU=(function(){return new oy(16,.75)}),j.ay=(function(e){return this.nd(e)}),new P().i(eh,`scala.collection.mutable.HashSet$`,{g7:1,J:1,a:1});var nh;function rh(){return nh||=new eh,nh}function ih(e){this.k1=null,this.k1=e}j=ih.prototype=new Uf,j.constructor=ih;function ah(){}ah.prototype=j,j.ai=(function(){return(0,this.k1)()}),new P().i(ih,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{gO:1,bX:1,b9:1});function Y(e){this.k2=null,this.k2=e}j=Y.prototype=new Gf,j.constructor=Y;function oh(){}oh.prototype=j,j.i=(function(e){return(0,this.k2)(e)}),new P().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{gP:1,bY:1,f:1});function sh(e){this.k3=null,this.k3=e}j=sh.prototype=new qf,j.constructor=sh;function ch(){}ch.prototype=j,j.cx=(function(e,t){return(0,this.k3)(e,t)}),new P().i(sh,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{gQ:1,bZ:1,aA:1});var lh=new P().i(0,`scala.runtime.Nothing$`,{gV:1,w:1,a:1});function uh(){}j=uh.prototype=new M,j.constructor=uh;function dh(){}dh.prototype=j,j.ne=(function(e){return(t=>e.i(t))}),new P().i(uh,`scala.scalajs.js.Any$`,{h1:1,h2:1,h3:1});var fh;function ph(){return fh||=new uh,fh}function mh(){}j=mh.prototype=new Uf,j.constructor=mh;function hh(){}hh.prototype=j;function gh(){}j=gh.prototype=new Gf,j.constructor=gh;function _h(){}_h.prototype=j;function vh(){}j=vh.prototype=new qf,j.constructor=vh;function yh(){}yh.prototype=j;function bh(){}j=bh.prototype=new Yf,j.constructor=bh;function xh(){}xh.prototype=j;function Sh(e,t,n,r){if(this.hF=null,r===null)throw new n_;this.hF=void 0}j=Sh.prototype=new M,j.constructor=Sh;function Ch(){}Ch.prototype=j,j.I=(function(){return Ba(this)}),new P().i(Sh,`com.raquo.airstream.core.Observer$$anon$8`,{c7:1,c8:1,c4:1,c5:1});function wh(e){if(this.hR=null,this.hS=!1,this.lC=null,e===null)throw new n_;cs(this)}j=wh.prototype=new M,j.constructor=wh;function Th(){}Th.prototype=j,j.om=(function(){return this.hS||=(this.hR=new zd(`svg`,!1),!0),this.hR}),new P().i(wh,`com.raquo.laminar.api.Laminar$svg$`,{cr:1,cR:1,cA:1,cC:1});function Eh(){this.o=null,Oh=this,this.o=new UC}j=Eh.prototype=new M,j.constructor=Eh;function Dh(){}Dh.prototype=j,new P().i(Eh,`com.raquo.laminar.api.package$`,{cu:1,aQ:1,aR:1,aP:1});var Oh;function X(){return Oh||=new Eh,Oh}function kh(e,t,n){return e.e1=t,e.e2=n,e}function Ah(){this.e1=null,this.e2=null}j=Ah.prototype=new Cs,j.constructor=Ah;function jh(){}jh.prototype=j,j.l=(function(e){return new gp(this,ra(e),new Ag(((e,t,n)=>{Go().lu(e,t,n)})))});function Mh(e){this.iC=null,this.g9=null,this.iC=ub(),this.g9=Go().mG(e)}j=Mh.prototype=new M,j.constructor=Mh;function Nh(){}Nh.prototype=j,j.lv=(function(e){this.iC=e}),j.lB=(function(e){}),j.ca=(function(e){Ws().eO(e,this,void 0)}),j.op=(function(){return this.g9.data}),j.dT=(function(){return this.g9}),new P().i(Mh,`com.raquo.laminar.nodes.TextNode`,{dr:1,aw:1,a3:1,aT:1});function Ph(){}j=Ph.prototype=new M,j.constructor=Ph;function Fh(){}Fh.prototype=j;function Ih(e,t){return e===t}function Lh(e){return e?1231:1237}var Rh=new P().i(0,`java.lang.Boolean`,{dN:1,a:1,a1:1,X:1},(e=>typeof e==`boolean`));function zh(e){return e}function Bh(e,t){return t instanceof Qi&&e===t.c}var Vh=new P().i(0,`java.lang.Character`,{b1:1,a:1,a1:1,X:1},(e=>e instanceof Qi));function Hh(e,t){return mf(e,t,null,!0,!0),e}var Uh=class extends sm{};new P().i(Uh,`java.lang.RuntimeException`,{D:1,C:1,w:1,a:1});function Wh(e){return e.q=``,e}function Gh(e,t){if(Wh(e),t===null)throw new n_;return e.q=t,e}function Kh(){this.q=null}j=Kh.prototype=new M,j.constructor=Kh;function qh(){}qh.prototype=j,j.kl=(function(e){var t=pf().nJ(e,0,e.a.length);return this.q=``+this.q+t,this}),j.I=(function(){return this.q}),j.t=(function(){return this.q.length}),j.kD=(function(e){return this.q.charCodeAt(e)}),new P().i(Kh,`java.lang.StringBuilder`,{e7:1,ay:1,aZ:1,a:1});function Jh(){}j=Jh.prototype=new lm,j.constructor=Jh;function Yh(){}Yh.prototype=j;function Xh(){}j=Xh.prototype=new M,j.constructor=Xh;function Zh(){}Zh.prototype=j,j.I=(function(){return`<function1>`}),j.h0=(function(e){throw new p_(e)}),j.i=(function(e){this.h0(e)}),new P().i(Xh,`scala.PartialFunction$$anon$1`,{ew:1,j:1,f:1,a:1});function Qh(){}j=Qh.prototype=new M,j.constructor=Qh;function $h(){}$h.prototype=j,j.m=(function(){return this}),j.h2=(function(e){return Sm(this,e)}),j.dv=(function(e){return this.fc(e,-1)}),j.fc=(function(e,t){return Cm(this,e,t)}),j.I=(function(){return`<iterator>`}),j.bz=(function(e,t,n){return Jl(this,e,t,n)}),j.dn=(function(e,t,n,r){return Xl(this,e,t,n,r)}),j.B=(function(){return-1});function eg(){this.gx=null,this.jC=null,this.jD=null,Om(this,Qm()),ng=this,this.jC=ya(new ba),this.jD=new ih((()=>rg().jC))}j=eg.prototype=new Am,j.constructor=eg;function tg(){}tg.prototype=j,new P().i(eg,`scala.collection.Map$`,{eZ:1,f0:1,aD:1,a:1});var ng;function rg(){return ng||=new eg,ng}function ig(e,t){return e.e8=t,e}function ag(){this.e8=null}j=ag.prototype=new M,j.constructor=ag;function og(){}og.prototype=j,j.kq=(function(e){return this.e8.cy(e)}),j.l0=(function(e){return this.e8.ay(e)}),j.aU=(function(){return this.e8.aU()}),j.ay=(function(e){return this.l0(e)}),j.cy=(function(e){return this.kq(e)});function sg(e){return e.cc(new Y((e=>e)))}function cg(e,t){return e.f2(new EC(e,t))}function lg(e){return e.bo(0)===0}function ug(e,t){var n=e.B();if(n!==-1)var r=t.B(),i=r!==-1&&n!==r;else var i=!1;return i?!1:wm(e.m(),t)}function dg(e,t){for(var n=e.bb().aU(),r=e.m();r.n();)n.aT(t.i(r.g()));return n.aY()}function fg(){this.fs=null,vm(this,wv())}j=fg.prototype=new bm,j.constructor=fg;function pg(){}pg.prototype=j,j.nb=(function(e){return Ib(e)?e:ym.prototype.ay.call(this,e)}),j.ay=(function(e){return this.nb(e)}),new P().i(fg,`scala.collection.immutable.Iterable$`,{fg:1,eQ:1,J:1,a:1});var mg;function hg(){return mg||=new fg,mg}function gg(){this.fy=null,vg=this,this.fy=new ww(new ih((()=>Jm()))).kY()}j=gg.prototype=new M,j.constructor=gg;function _g(){}_g.prototype=j,j.cy=(function(e){return this.hb(e)}),j.oa=(function(e,t){return new ww(new ih(((e,t)=>(()=>{for(var n=e.fD,r=t.dN;r>0&&!n.c();)n=n.F().aE(),e.fD=n,r=-1+r|0,t.dN=r;return n.F()}))(new ep(e),new Qf(t))))}),j.hb=(function(e){return e instanceof ww?e:e.B()===0?this.fy:new ww(new ih((()=>yg().lp(e.m()))))}),j.lq=(function(e,t){return e.n()?new Um(e.g(),new ww(new ih((()=>yg().lq(e,t))))):t.ai()}),j.lp=(function(e){return e.n()?new Um(e.g(),new ww(new ih((()=>yg().lp(e))))):Jm()}),j.aU=(function(){return new _v}),j.ay=(function(e){return this.hb(e)}),new P().i(gg,`scala.collection.immutable.LazyList$`,{fh:1,a0:1,J:1,a:1});var vg;function yg(){return vg||=new gg,vg}function bg(e,t){this.eI=null,this.jV=null,this.eI=e,this.jV=t}j=bg.prototype=new M,j.constructor=bg;function xg(){}xg.prototype=j,j.mi=(function(e){return this.eI.aT(e),this}),j.m9=(function(e){return this.eI.aX(e),this}),j.aZ=(function(e){this.eI.aZ(e)}),j.aY=(function(){return this.jV.i(this.eI.aY())}),j.aX=(function(e){return this.m9(e)}),j.aT=(function(e){return this.mi(e)}),new P().i(bg,`scala.collection.mutable.Builder$$anon$1`,{g4:1,L:1,H:1,F:1});function Sg(e,t){return e.di=t,e}function Cg(){this.di=null}j=Cg.prototype=new M,j.constructor=Cg;function wg(){}wg.prototype=j,j.aZ=(function(e){}),j.mj=(function(e){return this.di.aT(e),this}),j.ma=(function(e){return this.di.aX(e),this}),j.aX=(function(e){return this.ma(e)}),j.aT=(function(e){return this.mj(e)}),j.aY=(function(){return this.di}),new P().i(Cg,`scala.collection.mutable.GrowableBuilder`,{aM:1,L:1,H:1,F:1});function Tg(e){this.k6=null,this.k6=e}j=Tg.prototype=new hh,j.constructor=Tg;function Eg(){}Eg.prototype=j,j.ai=(function(){return(0,this.k6)()}),new P().i(Tg,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{h8:1,h7:1,bX:1,b9:1});function Z(e){this.k7=null,this.k7=e}j=Z.prototype=new _h,j.constructor=Z;function Dg(){}Dg.prototype=j,j.i=(function(e){return(0,this.k7)(e)}),new P().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ha:1,h9:1,bY:1,f:1});function Og(e){this.k8=null,this.k8=e}j=Og.prototype=new yh,j.constructor=Og;function kg(){}kg.prototype=j,j.cx=(function(e,t){return(0,this.k8)(e,t)}),new P().i(Og,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{hc:1,hb:1,bZ:1,aA:1});function Ag(e){this.k9=null,this.k9=e}j=Ag.prototype=new xh,j.constructor=Ag;function jg(){}jg.prototype=j,j.mp=(function(e,t,n){return(0,this.k9)(e,t,n)}),new P().i(Ag,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{he:1,hd:1,gR:1,ep:1});function Mg(e,t){this.fk=null,this.g0=null,this.fk=e,this.g0=t}j=Mg.prototype=new M,j.constructor=Mg;function Ng(){}Ng.prototype=j,j.ca=(function(e){var t=this.g0;t!==void 0&&t.lf(e,this.fk),Ws().eO(e,this.fk,void 0)}),j.ox=(function(e){return new Mg(this.fk,e.mo(this.g0))});var Pg=new P().i(Mg,`com.raquo.laminar.inserters.StaticChildInserter`,{cV:1,a3:1,cT:1,cX:1,cS:1});function Fg(e){e.g7=new Mo(new Tg((()=>{e.e3.ke()})),new Tg((()=>{e.e3.mH()}))),e.er=uw()}function Ig(e,t,n,r,i){var a=e.er.dx(t,new Tg((()=>$()))),o=(e=>{for(var t=a;!t.c();){var r=t.z(),i=r.b4();if(i===null?e===null:ta(i,e)){var o=r.b2();if(o===null?n===null:ta(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.u()}return!1}),s=sg(r),c=i;block:for(var l;;)if(c.c()){var l=$();break}else{var u=c.z(),d=c.u();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.c()){var l=f;break block}else{if(!o(p.z())){p=p.u();continue}for(var m=p,h=new WT(f.z(),$()),g=f.u(),_=h;g!==m;){var v=new WT(g.z(),$());_.as=v,_=v,g=g.u()}for(var y=m.u(),b=y;!y.c();)if(!o(y.z()))y=y.u();else{for(;b!==y;){var ee=new WT(b.z(),$());_.as=ee,_=ee,b=b.u()}b=y.u(),y=y.u()}b.c()||(_.as=b);var l=h;break block}}var te=e.er.dx(t,new Tg((()=>$()))),x=(e=>l.bV(e.b4())),S=te;block$2:for(var C;;)if(S.c()){var C=$();break}else{var ne=S.z(),re=S.u();if(x(ne)){S=re;continue}for(var ie=S,ae=re;;)if(ae.c()){var C=ie;break block$2}else{if(!x(ae.z())){ae=ae.u();continue}for(var w=ae,T=new WT(ie.z(),$()),E=ie.u(),oe=T;E!==w;){var se=new WT(E.z(),$());oe.as=se,oe=se,E=E.u()}for(var ce=w.u(),le=ce;!ce.c();)if(!x(ce.z()))ce=ce.u();else{for(;le!==ce;){var ue=new WT(le.z(),$());oe.as=ue,oe=ue,le=le.u()}le=ce.u(),ce=ce.u()}le.c()||(oe.as=le);var C=T;break block$2}}var de=(e=>new Q(e,n));if(s===$())var fe=$();else{for(var pe=new WT(de(s.z()),$()),me=pe,he=s.u();he!==$();){var ge=new WT(de(he.z()),$());me.as=ge,me=ge,he=he.u()}var fe=pe}var _e=C.kn(fe),ve=t.g1.kK(t.ij.i(e)),ye=(e=>l.bV(e)),be=ve;block$4:for(var xe;;)if(be.c()){var xe=$();break}else{var Se=be.z(),Ce=be.u();if(ye(Se)){be=Ce;continue}for(var we=be,D=Ce;;)if(D.c()){var xe=we;break block$4}else{if(!ye(D.z())){D=D.u();continue}for(var Te=D,Ee=new WT(we.z(),$()),De=we.u(),Oe=Ee;De!==Te;){var ke=new WT(De.z(),$());Oe.as=ke,Oe=ke,De=De.u()}for(var Ae=Te.u(),je=Ae;!Ae.c();)if(!ye(Ae.z()))Ae=Ae.u();else{for(;je!==Ae;){var Me=new WT(je.z(),$());Oe.as=Me,Oe=Me,je=je.u()}je=Ae.u(),Ae=Ae.u()}je.c()||(Oe.as=je);var xe=Ee;break block$4}}var Ne=s;block$6:for(var Pe;;)if(Ne.c()){var Pe=$();break}else{var Fe=Ne.z(),Ie=Ne.u();if(o(Fe)){Ne=Ie;continue}for(var Le=Ne,Re=Ie;;)if(Re.c()){var Pe=Le;break block$6}else{if(!o(Re.z())){Re=Re.u();continue}for(var ze=Re,Be=new WT(Le.z(),$()),Ve=Le.u(),He=Be;Ve!==ze;){var Ue=new WT(Ve.z(),$());He.as=Ue,He=Ue,Ve=Ve.u()}for(var O=ze.u(),We=O;!O.c();)if(!o(O.z()))O=O.u();else{for(;We!==O;){var Ge=new WT(We.z(),$());He.as=Ge,He=Ge,We=We.u()}We=O.u(),O=O.u()}We.c()||(He.as=We);var Pe=Be;break block$6}}var Ke=xe.kn(Pe);e.er=e.er.dA(t,_e),t.il.cx(e,t.g1.kN(Ke))}function Lg(e,t){zg(e,e.fn,t)&&Bg(e,t)}function Rg(e,t){var n=e.fn;e.fn=t,zg(e,n,t)||Bg(e,t)}function zg(e,t,n){var r=!t.c()&&!t.aI().fM().br.c(),i=!n.c()&&!n.aI().fM().br.c();return r&&!i}function Bg(e,t){Vg(e,t.c()?ub():new db(t.aI().fM()))}function Vg(e,t){if(t.c())e.g7.my();else{var n=t.aI();e.g7.oe(n)}}function Hg(){}j=Hg.prototype=new Fh,j.constructor=Hg;function Ug(){}Ug.prototype=j;var Wg=class extends Uh{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(Wg,`java.lang.ArithmeticException`,{dL:1,D:1,C:1,w:1,a:1});var Gg=new P().i(0,`java.lang.Byte`,{dO:1,a8:1,a:1,a1:1,X:1},(e=>fa(e))),Kg=class extends Uh{constructor(){super(),mf(this,null,null,!0,!0)}};new P().i(Kg,`java.lang.ClassCastException`,{b2:1,D:1,C:1,w:1,a:1});function qg(e,t){return mf(e,t,null,!0,!0),e}function Jg(e){return mf(e,null,null,!0,!0),e}var Yg=class extends Uh{};new P().i(Yg,`java.lang.IllegalArgumentException`,{b4:1,D:1,C:1,w:1,a:1});var Xg=class extends Uh{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(Xg,`java.lang.IllegalStateException`,{dT:1,D:1,C:1,w:1,a:1});function Zg(e,t){return mf(e,t,null,!0,!0),e}var Qg=class extends Uh{};new P().i(Qg,`java.lang.IndexOutOfBoundsException`,{az:1,D:1,C:1,w:1,a:1});function $g(){}j=$g.prototype=new Fh,j.constructor=$g;function e_(){}e_.prototype=j,new P().i($g,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dX:1,aY:1,aW:1,b0:1,aX:1});var t_=class extends Uh{constructor(){super(),mf(this,null,null,!0,!0)}};new P().i(t_,`java.lang.NegativeArraySizeException`,{dY:1,D:1,C:1,w:1,a:1});var n_=class extends Uh{constructor(){super(),mf(this,null,null,!0,!0)}};new P().i(n_,`java.lang.NullPointerException`,{dZ:1,D:1,C:1,w:1,a:1});var r_=new P().i(0,`java.lang.Short`,{e2:1,a8:1,a:1,a1:1,X:1},(e=>pa(e))),i_=class extends Uh{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(i_,`java.lang.UnsupportedOperationException`,{eb:1,D:1,C:1,w:1,a:1});var a_=class extends Uh{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(a_,`java.util.ConcurrentModificationException`,{ef:1,D:1,C:1,w:1,a:1});var o_=class extends Uh{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(o_,`java.util.NoSuchElementException`,{eg:1,D:1,C:1,w:1,a:1});function s_(){}j=s_.prototype=new Yh,j.constructor=s_;function c_(){}c_.prototype=j,j.i=(function(e){return e}),j.I=(function(){return`generalized constraint`}),new P().i(s_,`scala.$less$colon$less$$anon$1`,{el:1,ei:1,ej:1,f:1,a:1});function l_(e){return e.gl||=(e.gm=e.fr===null?`null`:f_(e),!0),e.gm}function u_(e){return e.gl?e.gm:l_(e)}function d_(e){var t=e.fr;return`of class `+ea(t)}function f_(e){try{return e.fr+` (`+d_(e)+`)`}catch{return`an instance `+d_(e)}}var p_=class extends Uh{constructor(e){super(),this.gm=null,this.fr=null,this.gl=!1,this.fr=e,mf(this,null,null,!0,!0)}f5(){return u_(this)}};new P().i(p_,`scala.MatchError`,{es:1,D:1,C:1,w:1,a:1});function m_(){}j=m_.prototype=new M,j.constructor=m_;function h_(){}h_.prototype=j,j.c=(function(){return this===ub()}),j.B=(function(){return this.c()?0:1}),j.m=(function(){return this.c()?J().K:new T_(this.aI())});function g_(e){this.ev=0,this.jr=0,this.jq=null,this.jq=e,this.ev=0,this.jr=e.cE()}j=g_.prototype=new $h,j.constructor=g_;function __(){}__.prototype=j,j.n=(function(){return this.ev<this.jr}),j.g=(function(){var e=this.jq.cF(this.ev);return this.ev=1+this.ev|0,e}),new P().i(g_,`scala.Product$$anon$1`,{ey:1,o:1,r:1,b:1,c:1});function Q(e,t){this.js=null,this.jt=null,this.js=e,this.jt=t}j=Q.prototype=new M,j.constructor=Q;function v_(){}v_.prototype=j,j.cE=(function(){return 2}),j.cF=(function(e){return mm(this,e)}),j.b4=(function(){return this.js}),j.b2=(function(){return this.jt}),j.I=(function(){return`(`+this.b4()+`,`+this.b2()+`)`}),j.cG=(function(){return`Tuple2`}),j.dS=(function(){return new Dy(this)}),j.C=(function(){return G().hw(this,-889275714,!1)}),j.x=(function(e){return this===e||e instanceof Q&&H().s(this.b4(),e.b4())&&H().s(this.b2(),e.b2())}),new P().i(Q,`scala.Tuple2`,{bc:1,ez:1,a9:1,d:1,a:1});function y_(e){this.ex=null,hm(this,e)}j=y_.prototype=new _m,j.constructor=y_;function b_(){}b_.prototype=j,new P().i(y_,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{eN:1,eM:1,J:1,a:1,a0:1});function x_(e){return Yl(e,e.bJ()+`(`,`, `,`)`)}function S_(e){return!!(e&&e.$classData&&e.$classData.n.e)}function C_(){}j=C_.prototype=new $h,j.constructor=C_;function w_(){}w_.prototype=j,j.n=(function(){return!1}),j.hq=(function(){throw new o_(`next on empty iterator`)}),j.B=(function(){return 0}),j.fc=(function(e,t){return this}),j.g=(function(){this.hq()}),new P().i(C_,`scala.collection.Iterator$$anon$19`,{eS:1,o:1,r:1,b:1,c:1});function T_(e){this.ey=!1,this.jw=null,this.jw=e,this.ey=!1}j=T_.prototype=new $h,j.constructor=T_;function E_(){}E_.prototype=j,j.n=(function(){return!this.ey}),j.g=(function(){return this.ey?J().K.g():(this.ey=!0,this.jw)}),j.fc=(function(e,t){return this.ey||e>0||t===0?J().K:this}),new P().i(T_,`scala.collection.Iterator$$anon$20`,{eT:1,o:1,r:1,b:1,c:1});function D_(e,t){this.jz=null,this.ft=!1,this.jy=null,this.gw=null,this.jx=null,this.gw=e,this.jx=t,this.jz=Lw(new Rw),this.ft=!1}j=D_.prototype=new $h,j.constructor=D_;function O_(){}O_.prototype=j,j.n=(function(){for(;;)if(this.ft)return!0;else if(this.gw.n()){var e=this.gw.g();if(this.jz.fJ(this.jx.i(e)))return this.jy=e,this.ft=!0,!0}else return!1}),j.g=(function(){return this.n()?(this.ft=!1,this.jy):J().K.g()}),new P().i(D_,`scala.collection.Iterator$$anon$8`,{eV:1,o:1,r:1,b:1,c:1});function k_(e,t){this.fu=null,this.jA=null,this.fu=e,this.jA=t}j=k_.prototype=new $h,j.constructor=k_;function A_(){}A_.prototype=j,j.B=(function(){return this.fu.B()}),j.n=(function(){return this.fu.n()}),j.g=(function(){return this.jA.i(this.fu.g())}),new P().i(k_,`scala.collection.Iterator$$anon$9`,{eW:1,o:1,r:1,b:1,c:1});function j_(e){for(;;){if(e.bf instanceof N_){var t=e.bf;e.bf=t.bf,e.cQ=t.cQ,t.bC!==null&&(e.bB===null&&(e.bB=t.bB),t.bB.ez=e.bC,e.bC=t.bC);continue}return}}function M_(e){for(;;)if(e.bC===null)return e.bf=null,e.bB=null,!1;else{if(e.bf=e.bC.no(),e.bB===e.bC&&(e.bB=e.bB.ez),e.bC=e.bC.ez,j_(e),e.cQ)return!0;if(e.bf!==null&&e.bf.n())return e.cQ=!0,!0}}function N_(e){this.bf=null,this.bC=null,this.bB=null,this.cQ=!1,this.bf=e,this.bC=null,this.bB=null,this.cQ=!1}j=N_.prototype=new $h,j.constructor=N_;function P_(){}P_.prototype=j,j.n=(function(){return this.cQ?!0:this.bf===null?!1:this.bf.n()?(this.cQ=!0,!0):M_(this)}),j.g=(function(){return this.n()?(this.cQ=!1,this.bf.g()):J().K.g()}),j.h2=(function(e){var t=new Ql(e,null);return this.bC===null?(this.bC=t,this.bB=t):(this.bB.ez=t,this.bB=t),this.bf===null&&(this.bf=J().K),this}),new P().i(N_,`scala.collection.Iterator$ConcatIterator`,{bi:1,o:1,r:1,b:1,c:1});function F_(e){for(;e.cj>0;)e.cR.n()?(e.cR.g(),e.cj=-1+e.cj|0):e.cj=0}function I_(e,t){if(e.bu<0)return-1;var n=e.bu-t|0;return n<0?0:n}function L_(e,t,n){this.cR=null,this.bu=0,this.cj=0,this.cR=e,this.bu=n,this.cj=t}j=L_.prototype=new $h,j.constructor=L_;function R_(){}R_.prototype=j,j.B=(function(){var e=this.cR.B();if(e<0)return-1;var t=e-this.cj|0,n=t<0?0:t;if(this.bu<0)return n;var r=this.bu;return r<n?r:n}),j.n=(function(){return F_(this),this.bu!==0&&this.cR.n()}),j.g=(function(){return F_(this),this.bu>0?(this.bu=-1+this.bu|0,this.cR.g()):this.bu<0?this.cR.g():J().K.g()}),j.fc=(function(e,t){var n=e>0?e:0;if(t<0)var r=I_(this,n);else if(t<=n)var r=0;else if(this.bu<0)var r=t-n|0;else var i=I_(this,n),a=t-n|0,r=i<a?i:a;var o=this.cj+n|0;return r===0?J().K:o<0?(this.cj=2147483647,this.bu=0,Sm(this,new ih((()=>new L_(this.cR,-2147483647+o|0,r))))):(this.cj=o,this.bu=r,this)}),new P().i(L_,`scala.collection.Iterator$SliceIterator`,{eY:1,o:1,r:1,b:1,c:1});function z_(e){for(var t=e,n=0;!t.c();)n=1+n|0,t=t.u();return n}function B_(e,t){return t<0?1:U_(e,0,e,t)}function V_(e,t){if(t<0)throw Zg(new Qg,``+t);var n=e.kM(t);if(n.c())throw Zg(new Qg,``+t);return n.z()}function H_(e,t){return LC(t)?W_(e,e,t):ug(e,t)}function U_(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.u();t=i,n=a}}function W_(e,t,n){for(;;)if(t===n)return!0;else if(!t.c()&&!n.c()&&H().s(t.z(),n.z())){var r=t.u(),i=n.u();t=r,n=i}else return t.c()&&n.c()}function G_(e){this.eA=null,this.eA=e}j=G_.prototype=new $h,j.constructor=G_;function K_(){}K_.prototype=j,j.n=(function(){return!this.eA.c()}),j.g=(function(){var e=this.eA.z();return this.eA=this.eA.u(),e}),new P().i(G_,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{f2:1,o:1,r:1,b:1,c:1});function q_(e){e.cl===null&&(e.cl=new Ea(Su().eH<<1),e.eC=new(vu.r()).C(Su().eH))}function J_(e,t){e.dH=t,e.bv=0,e.eB=t.hu()}function Y_(e,t){q_(e),e.bh=1+e.bh|0;var n=e.bh<<1,r=1+(e.bh<<1)|0;e.eC.a[e.bh]=t,e.cl.a[n]=0,e.cl.a[r]=t.hr()}function X_(e){e.bh=-1+e.bh|0}function Z_(e){for(;e.bh>=0;){var t=e.bh<<1,n=1+(e.bh<<1)|0,r=e.cl.a[t];if(r<e.cl.a[n]){var i=e.cl;i.a[t]=1+i.a[t]|0;var a=e.eC.a[e.bh].he(r);if(a.hi()&&Y_(e,a),a.fN())return J_(e,a),!0}else X_(e)}return!1}function Q_(e){return e.bv=0,e.eB=0,e.bh=-1,e}function $_(e,t){return Q_(e),t.hi()&&Y_(e,t),t.fN()&&J_(e,t),e}function ev(){this.bv=0,this.eB=0,this.dH=null,this.bh=0,this.cl=null,this.eC=null}j=ev.prototype=new $h,j.constructor=ev;function tv(){}tv.prototype=j,j.n=(function(){return this.bv<this.eB||Z_(this)});function nv(e,t){e.fw=t,e.cZ=-1+t.hu()|0}function rv(e,t){e.bw=1+e.bw|0,e.eE.a[e.bw]=t,e.eD.a[e.bw]=-1+t.hr()|0}function iv(e){e.bw=-1+e.bw|0}function av(e){for(;e.bw>=0;){var t=e.eD.a[e.bw];if(e.eD.a[e.bw]=-1+t|0,t>=0)rv(e,e.eE.a[e.bw].he(t));else{var n=e.eE.a[e.bw];if(iv(e),n.fN())return nv(e,n),!0}}return!1}function ov(e){return e.cZ=-1,e.bw=-1,e.eD=new Ea(1+Su().eH|0),e.eE=new(vu.r()).C(1+Su().eH|0),e}function sv(e,t){return ov(e),rv(e,t),av(e),e}function cv(){this.cZ=0,this.fw=null,this.bw=0,this.eD=null,this.eE=null}j=cv.prototype=new $h,j.constructor=cv;function lv(){}lv.prototype=j,j.n=(function(){return this.cZ>=0||av(this)});function uv(e){return e.e9!==null}function dv(e,t,n,r){if(n<0||n>t.a.length)throw Ky(new qy);var i=new Ea(1+t.a.length|0);t.v(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.v(n,i,a,o),i}function fv(e,t,n,r,i,a,o){var s=t.eZ(n),c=s<<1,l=t.aj,u=new N(2+l.a.length|0);l.v(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.v(c,u,d,f);var p=dv(e,t.bg,s,i);t.W|=n,t.aj=u,t.bg=p,t.aL=1+t.aL|0,t.b5=t.b5+a|0}function pv(e){uv(e)&&mv(e),e.e9=null}function mv(e){e.c6=e.c6.kI()}function hv(){this.e9=null,this.c6=null,this.c6=new Fm(0,0,Al().jm,Al().gk,0,0)}j=hv.prototype=new M,j.constructor=hv;function gv(){}gv.prototype=j,j.aZ=(function(e){}),j.ep=(function(e,t,n,r,i,a){if(e instanceof Fm){var o=Su().dR(i,a),s=Su().dt(o);if((e.W&s)!==0){var c=Su().cd(e.W,o,s),l=e.dw(c),u=e.f4(c);if(u===r&&H().s(l,t))e.aj.a[1+(c<<1)|0]=n;else{var d=e.cA(c),f=Wl().bZ(u),p=e.ho(l,d,u,f,t,n,r,i,5+a|0);e.nF(s,f,p)}}else if((e.ae&s)!==0){var m=Su().cd(e.ae,o,s),h=e.cz(m),g=h.aK(),_=h.du();this.ep(h,t,n,r,i,5+a|0),e.aL=e.aL+(h.aK()-g|0)|0,e.b5=e.b5+(h.du()-_|0)|0}else fv(this,e,s,t,r,i,n)}else if(e instanceof Lm){var v=e.em(t);v<0?e.af=e.af.dp(new Q(t,n)):e.af=e.af.dz(v,new Q(t,n))}else throw new p_(e)}),j.hy=(function(){return this.c6.aL===0?Hm().gD:(this.e9===null&&(this.e9=new Ow(this.c6)),this.e9)}),j.kk=(function(e){pv(this);var t=W().P(e.b4()),n=Wl().bZ(t);return this.ep(this.c6,e.b4(),e.b2(),t,n,0),this}),j.dO=(function(e,t){pv(this);var n=W().P(e);return this.ep(this.c6,e,t,n,Wl().bZ(n),0),this}),j.gY=(function(e){if(pv(this),e instanceof Ow)new Pb(this,e);else if(GC(e))e.dQ(new sh(((e,t)=>this.dO(e,t))));else for(var t=e.m();t.n();)this.kk(t.g());return this}),j.aX=(function(e){return this.gY(e)}),j.aT=(function(e){return this.kk(e)}),j.aY=(function(){return this.hy()}),new P().i(hv,`scala.collection.immutable.HashMapBuilder`,{fc:1,a7:1,L:1,H:1,F:1});function _v(){this.ea=null,this.jH=null,this.mx()}j=_v.prototype=new M,j.constructor=_v;function vv(){}vv.prototype=j,j.aZ=(function(e){}),j.mx=(function(){var e=new lu;this.jH=(yg(),new ww(new ih((()=>e.h6())))),this.ea=e}),j.o9=(function(){return this.ea.hk(new ih((()=>Jm()))),this.jH}),j.mf=(function(e){var t=new lu;return this.ea.hk(new ih((()=>(yg(),new Um(e,(yg(),new ww(new ih((()=>t.h6()))))))))),this.ea=t,this}),j.m7=(function(e){if(e.B()!==0){var t=new lu;this.ea.hk(new ih((()=>yg().lq(e.m(),new ih((()=>t.h6())))))),this.ea=t}return this}),j.aX=(function(e){return this.m7(e)}),j.aT=(function(e){return this.mf(e)}),j.aY=(function(){return this.o9()}),new P().i(_v,`scala.collection.immutable.LazyList$LazyBuilder`,{fi:1,a7:1,L:1,H:1,F:1});function yv(e){this.eb=null,this.eb=e}j=yv.prototype=new $h,j.constructor=yv;function bv(){}bv.prototype=j,j.n=(function(){return!this.eb.c()}),j.g=(function(){if(this.eb.c())return J().K.g();var e=this.eb.F().z();return this.eb=this.eb.F().aE(),e}),new P().i(yv,`scala.collection.immutable.LazyList$LazyIterator`,{fk:1,o:1,r:1,b:1,c:1});function xv(){}j=xv.prototype=new M,j.constructor=xv;function Sv(){}Sv.prototype=j,j.cy=(function(e){return $().hv(e)}),j.aU=(function(){return new hE}),j.ay=(function(e){return $().hv(e)}),new P().i(xv,`scala.collection.immutable.List$`,{fn:1,ai:1,a0:1,J:1,a:1});var Cv;function wv(){return Cv||=new xv,Cv}function Tv(e,t){return e.ec=t,e.d3=0,e}function Ev(){this.d3=0,this.ec=null}j=Ev.prototype=new $h,j.constructor=Ev;function Dv(){}Dv.prototype=j,j.n=(function(){return this.d3<2}),j.g=(function(){switch(this.d3){case 0:var e=new Q(this.ec.bN,this.ec.d1);break;case 1:var e=new Q(this.ec.bO,this.ec.d2);break;default:var e=J().K.g()}return this.d3=1+this.d3|0,e}),j.dv=(function(e){return this.d3=this.d3+e|0,this});function Ov(e,t){return e.d4=t,e.d5=0,e}function kv(){this.d5=0,this.d4=null}j=kv.prototype=new $h,j.constructor=kv;function Av(){}Av.prototype=j,j.n=(function(){return this.d5<3}),j.g=(function(){switch(this.d5){case 0:var e=new Q(this.d4.bD,this.d4.cm);break;case 1:var e=new Q(this.d4.bE,this.d4.cn);break;case 2:var e=new Q(this.d4.bF,this.d4.co);break;default:var e=J().K.g()}return this.d5=1+this.d5|0,e}),j.dv=(function(e){return this.d5=this.d5+e|0,this});function jv(e,t){return e.c8=t,e.d6=0,e}function Mv(){this.d6=0,this.c8=null}j=Mv.prototype=new $h,j.constructor=Mv;function Nv(){}Nv.prototype=j,j.n=(function(){return this.d6<4}),j.g=(function(){switch(this.d6){case 0:var e=new Q(this.c8.bi,this.c8.bP);break;case 1:var e=new Q(this.c8.bj,this.c8.bQ);break;case 2:var e=new Q(this.c8.bk,this.c8.bR);break;case 3:var e=new Q(this.c8.bl,this.c8.bS);break;default:var e=J().K.g()}return this.d6=1+this.d6|0,e}),j.dv=(function(e){return this.d6=this.d6+e|0,this});function Pv(){this.cp=null,this.eF=!1,this.dJ=null,this.cp=uw(),this.eF=!1}j=Pv.prototype=new M,j.constructor=Pv;function Fv(){}Fv.prototype=j,j.aZ=(function(e){}),j.ln=(function(){return this.eF?this.dJ.hy():this.cp}),j.md=(function(e,t){return this.eF?this.dJ.dO(e,t):this.cp.aK()<4||this.cp.bV(e)?this.cp=this.cp.dA(e,t):(this.eF=!0,this.dJ===null&&(this.dJ=new hv),this.cp.mw(this.dJ),this.dJ.dO(e,t)),this}),j.kf=(function(e){return this.eF?(this.dJ.gY(e),this):Lf(this,e)}),j.aX=(function(e){return this.kf(e)}),j.aT=(function(e){return this.md(e.b4(),e.b2())}),j.aY=(function(){return this.ln()}),new P().i(Pv,`scala.collection.immutable.MapBuilderImpl`,{fx:1,a7:1,L:1,H:1,F:1});function Iv(){try{return nf().lk(tl().hg(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function Lv(){this.jN=0,this.jO=null,zv=this,this.jN=Iv(),this.jO=new Zb(QT(),0,0)}j=Lv.prototype=new M,j.constructor=Lv;function Rv(){}Rv.prototype=j,j.cy=(function(e){return this.hc(e)}),j.hc=(function(e){if(e instanceof Uw)return e;var t=e.B();if(t===0)return QT();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof sT){var r=e.ad().aJ();if(r!==null&&r===F.l()){var n=e.c5;break matchEnd5}}if(Ib(e)){var i=new N(t);e.bz(i,0,2147483647);var n=i;break matchEnd5}var a=new N(t);e.m().bz(a,0,2147483647);var n=a}return new HT(n)}else return new Jv().kg(e).lo()}),j.aU=(function(){return new Jv}),j.ay=(function(e){return this.hc(e)}),new P().i(Lv,`scala.collection.immutable.Vector$`,{fK:1,ai:1,a0:1,J:1,a:1});var zv;function Bv(){return zv||=new Lv,zv}function Vv(e){var t=null,n=null;if(e.N>=6){t=e.aC;var r=e.J>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.v(r,a,0,o)}var s=e.J%33554432|0;e.D=e.D-(e.J-s|0)|0,e.J=s,e.D>>>25|0||(e.N=5),n=t,t=t.a[0]}if(e.N>=5){t===null&&(t=e.T);var c=31&(e.J>>>20|0);if(e.N===5){if(c>0){var l=t,u=t,d=32-c|0;l.v(c,u,0,d)}e.T=t;var f=e.J%1048576|0;e.D=e.D-(e.J-f|0)|0,e.J=f,e.D>>>20|0||(e.N=4)}else c>0&&(t=R().a3(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=4){t===null&&(t=e.O);var p=31&(e.J>>>15|0);if(e.N===4){if(p>0){var m=t,h=t,g=32-p|0;m.v(p,h,0,g)}e.O=t;var _=e.J%32768|0;e.D=e.D-(e.J-_|0)|0,e.J=_,e.D>>>15|0||(e.N=3)}else p>0&&(t=R().a3(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=3){t===null&&(t=e.L);var v=31&(e.J>>>10|0);if(e.N===3){if(v>0){var y=t,b=t,ee=32-v|0;y.v(v,b,0,ee)}e.L=t;var te=e.J%1024|0;e.D=e.D-(e.J-te|0)|0,e.J=te,e.D>>>10|0||(e.N=2)}else v>0&&(t=R().a3(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=2){t===null&&(t=e.H);var x=31&(e.J>>>5|0);if(e.N===2){if(x>0){var S=t,C=t,ne=32-x|0;S.v(x,C,0,ne)}e.H=t;var re=e.J%32|0;e.D=e.D-(e.J-re|0)|0,e.J=re,e.D>>>5|0||(e.N=1)}else x>0&&(t=R().a3(t,x,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.N>=1){t===null&&(t=e.R);var ie=31&e.J;if(e.N===1){if(ie>0){var ae=t,w=t,T=32-ie|0;ae.v(ie,w,0,T)}e.R=t,e.M=e.M-e.J|0,e.J=0}else ie>0&&(t=R().a3(t,ie,32)),n.a[0]=t}e.fz=!1}function Hv(e,t){var n=t.a.length;if(n>0){e.M===32&&Gv(e);var r=32-e.M|0,i=r<n?r:n,a=n-i|0,o=e.R,s=e.M;if(t.v(0,o,s,i),e.M=e.M+i|0,a>0){Gv(e);var c=e.R;t.v(i,c,0,a),e.M=e.M+a|0}}}function Uv(e,t,n){if(t.a.length!==0){e.M===32&&Gv(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.D|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.D>>>5|0),c=e.H;if(t.v(0,c,s,a),Kv(e,a<<5),o>0){var l=e.H;t.v(a,l,0,o),Kv(e,o<<5)}break;case 3:if(e.D%1024|0){var u=(t=>{Uv(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof Ea)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof ka)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof Da)for(;f<d;){var g=t.a[f],_=g.p,v=g.r;u(new z(_,v)),f=1+f|0}else if(t instanceof Oa)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof Ca)for(;f<d;){var b=t.a[f];u(ga(b)),f=1+f|0}else if(t instanceof wa)for(;f<d;){var ee=t.a[f];u(ee),f=1+f|0}else if(t instanceof Ta)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof Sa)for(;f<d;){var x=t.a[f];u(x),f=1+f|0}else throw new p_(t);return}var S=31&((32768-e.D|0)>>>10|0),C=S<r?S:r,ne=r-C|0,re=31&(e.D>>>10|0),ie=e.L;if(t.v(0,ie,re,C),Kv(e,C<<10),ne>0){var ae=e.L;t.v(C,ae,0,ne),Kv(e,ne<<10)}break;case 4:if(e.D%32768|0){var w=(t=>{Uv(e,t,3)}),T=t.a.length,E=0;if(t!==null)for(;E<T;){var oe=t.a[E];w(oe),E=1+E|0}else if(t instanceof Ea)for(;E<T;){var se=t.a[E];w(se),E=1+E|0}else if(t instanceof ka)for(;E<T;){var ce=t.a[E];w(ce),E=1+E|0}else if(t instanceof Da)for(;E<T;){var le=t.a[E],ue=le.p,de=le.r;w(new z(ue,de)),E=1+E|0}else if(t instanceof Oa)for(;E<T;){var fe=t.a[E];w(fe),E=1+E|0}else if(t instanceof Ca)for(;E<T;){var pe=t.a[E];w(ga(pe)),E=1+E|0}else if(t instanceof wa)for(;E<T;){var me=t.a[E];w(me),E=1+E|0}else if(t instanceof Ta)for(;E<T;){var he=t.a[E];w(he),E=1+E|0}else if(t instanceof Sa)for(;E<T;){var ge=t.a[E];w(ge),E=1+E|0}else throw new p_(t);return}var _e=31&((1048576-e.D|0)>>>15|0),ve=_e<r?_e:r,ye=r-ve|0,be=31&(e.D>>>15|0),xe=e.O;if(t.v(0,xe,be,ve),Kv(e,ve<<15),ye>0){var Se=e.O;t.v(ve,Se,0,ye),Kv(e,ye<<15)}break;case 5:if(e.D%1048576|0){var Ce=(t=>{Uv(e,t,4)}),we=t.a.length,D=0;if(t!==null)for(;D<we;){var Te=t.a[D];Ce(Te),D=1+D|0}else if(t instanceof Ea)for(;D<we;){var Ee=t.a[D];Ce(Ee),D=1+D|0}else if(t instanceof ka)for(;D<we;){var De=t.a[D];Ce(De),D=1+D|0}else if(t instanceof Da)for(;D<we;){var Oe=t.a[D],ke=Oe.p,Ae=Oe.r;Ce(new z(ke,Ae)),D=1+D|0}else if(t instanceof Oa)for(;D<we;){var je=t.a[D];Ce(je),D=1+D|0}else if(t instanceof Ca)for(;D<we;){var Me=t.a[D];Ce(ga(Me)),D=1+D|0}else if(t instanceof wa)for(;D<we;){var Ne=t.a[D];Ce(Ne),D=1+D|0}else if(t instanceof Ta)for(;D<we;){var Pe=t.a[D];Ce(Pe),D=1+D|0}else if(t instanceof Sa)for(;D<we;){var Fe=t.a[D];Ce(Fe),D=1+D|0}else throw new p_(t);return}var Ie=31&((33554432-e.D|0)>>>20|0),Le=Ie<r?Ie:r,Re=r-Le|0,ze=31&(e.D>>>20|0),Be=e.T;if(t.v(0,Be,ze,Le),Kv(e,Le<<20),Re>0){var Ve=e.T;t.v(Le,Ve,0,Re),Kv(e,Re<<20)}break;case 6:if(e.D%33554432|0){var He=(t=>{Uv(e,t,5)}),Ue=t.a.length,O=0;if(t!==null)for(;O<Ue;){var We=t.a[O];He(We),O=1+O|0}else if(t instanceof Ea)for(;O<Ue;){var Ge=t.a[O];He(Ge),O=1+O|0}else if(t instanceof ka)for(;O<Ue;){var Ke=t.a[O];He(Ke),O=1+O|0}else if(t instanceof Da)for(;O<Ue;){var qe=t.a[O],Je=qe.p,Ye=qe.r;He(new z(Je,Ye)),O=1+O|0}else if(t instanceof Oa)for(;O<Ue;){var Xe=t.a[O];He(Xe),O=1+O|0}else if(t instanceof Ca)for(;O<Ue;){var k=t.a[O];He(ga(k)),O=1+O|0}else if(t instanceof wa)for(;O<Ue;){var Ze=t.a[O];He(Ze),O=1+O|0}else if(t instanceof Ta)for(;O<Ue;){var Qe=t.a[O];He(Qe),O=1+O|0}else if(t instanceof Sa)for(;O<Ue;){var $e=t.a[O];He($e),O=1+O|0}else throw new p_(t);return}var et=e.D>>>25|0;if((et+r|0)>64)throw qg(new Yg,`exceeding 2^31 elements`);var tt=e.aC;t.v(0,tt,et,r),Kv(e,r<<25);break;default:throw new p_(n)}}}function Wv(e,t){for(var n=t.cg(),r=0;r<n;){var i=t.cf(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?Hv(e,i):e.M===32||e.M===0?Uv(e,i,c):V().h8(-2+c|0,i,new Y((t=>{Hv(e,t)}))),r=1+r|0}return e}function Gv(e){var t=32+e.D|0,n=t^e.D;e.D=t,e.M=0,qv(e,t,n)}function Kv(e,t){if(t>0){var n=e.D+t|0,r=n^e.D;e.D=n,e.M=0,qv(e,n,r)}}function qv(e,t,n){if(n<=0)throw qg(new Yg,`advance1(`+t+`, `+n+`): a1=`+e.R+`, a2=`+e.H+`, a3=`+e.L+`, a4=`+e.O+`, a5=`+e.T+`, a6=`+e.aC+`, depth=`+e.N);n<1024?(e.N<=1&&(e.H=new(F.r().r()).C(32),e.H.a[0]=e.R,e.N=2),e.R=new N(32),e.H.a[31&(t>>>5|0)]=e.R):n<32768?(e.N<=2&&(e.L=new(F.r().r().r()).C(32),e.L.a[0]=e.H,e.N=3),e.R=new N(32),e.H=new(F.r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H):n<1048576?(e.N<=3&&(e.O=new(F.r().r().r().r()).C(32),e.O.a[0]=e.L,e.N=4),e.R=new N(32),e.H=new(F.r().r()).C(32),e.L=new(F.r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L):n<33554432?(e.N<=4&&(e.T=new(F.r().r().r().r().r()).C(32),e.T.a[0]=e.O,e.N=5),e.R=new N(32),e.H=new(F.r().r()).C(32),e.L=new(F.r().r().r()).C(32),e.O=new(F.r().r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L,e.T.a[31&(t>>>20|0)]=e.O):(e.N<=5&&(e.aC=new(F.r().r().r().r().r().r()).C(64),e.aC.a[0]=e.T,e.N=6),e.R=new N(32),e.H=new(F.r().r()).C(32),e.L=new(F.r().r().r()).C(32),e.O=new(F.r().r().r().r()).C(32),e.T=new(F.r().r().r().r().r()).C(32),e.H.a[31&(t>>>5|0)]=e.R,e.L.a[31&(t>>>10|0)]=e.H,e.O.a[31&(t>>>15|0)]=e.L,e.T.a[31&(t>>>20|0)]=e.O,e.aC.a[t>>>25|0]=e.T)}function Jv(){this.aC=null,this.T=null,this.O=null,this.L=null,this.H=null,this.R=null,this.M=0,this.D=0,this.J=0,this.fz=!1,this.N=0,this.R=new N(32),this.M=0,this.D=0,this.J=0,this.fz=!1,this.N=1}j=Jv.prototype=new M,j.constructor=Jv;function Yv(){}Yv.prototype=j,j.aZ=(function(e){}),j.ns=(function(e){var t=e.cg();switch(t){case 0:break;case 1:this.N=1;var n=e.d.a.length;this.M=31&n,this.D=n-this.M|0;var r=e.d;this.R=r.a.length===32?r:R().a3(r,0,32);break;case 3:var i=e.b3,a=e.h;this.R=a.a.length===32?a:R().a3(a,0,32),this.N=2,this.J=32-e.bn|0;var o=e.j+this.J|0;this.M=31&o,this.D=o-this.M|0,this.H=new(F.r().r()).C(32),this.H.a[0]=e.d;var s=this.H,c=i.a.length;i.v(0,s,1,c),this.H.a[1+i.a.length|0]=this.R;break;case 5:var l=e.aO,u=e.aP,d=e.h;this.R=d.a.length===32?d:R().a3(d,0,32),this.N=3,this.J=1024-e.b1|0;var f=e.j+this.J|0;this.M=31&f,this.D=f-this.M|0,this.L=new(F.r().r().r()).C(32),this.L.a[0]=V().cb(e.d,e.b8);var p=this.L,m=l.a.length;l.v(0,p,1,m),this.H=R().V(u,32),this.L.a[1+l.a.length|0]=this.H,this.H.a[u.a.length]=this.R;break;case 7:var h=e.au,g=e.aw,_=e.av,v=e.h;this.R=v.a.length===32?v:R().a3(v,0,32),this.N=4,this.J=32768-e.aH|0;var y=e.j+this.J|0;this.M=31&y,this.D=y-this.M|0,this.O=new(F.r().r().r().r()).C(32),this.O.a[0]=V().cb(V().cb(e.d,e.aV),e.aW);var b=this.O,ee=h.a.length;h.v(0,b,1,ee),this.L=R().V(g,32),this.H=R().V(_,32),this.O.a[1+h.a.length|0]=this.L,this.L.a[g.a.length]=this.H,this.H.a[_.a.length]=this.R;break;case 9:var te=e.a5,x=e.a8,S=e.a7,C=e.a6,ne=e.h;this.R=ne.a.length===32?ne:R().a3(ne,0,32),this.N=5,this.J=1048576-e.an|0;var re=e.j+this.J|0;this.M=31&re,this.D=re-this.M|0,this.T=new(F.r().r().r().r().r()).C(32),this.T.a[0]=V().cb(V().cb(V().cb(e.d,e.az),e.aA),e.aB);var ie=this.T,ae=te.a.length;te.v(0,ie,1,ae),this.O=R().V(x,32),this.L=R().V(S,32),this.H=R().V(C,32),this.T.a[1+te.a.length|0]=this.O,this.O.a[x.a.length]=this.L,this.L.a[S.a.length]=this.H,this.H.a[C.a.length]=this.R;break;case 11:var w=e.X,T=e.a1,E=e.a0,oe=e.Z,se=e.Y,ce=e.h;this.R=ce.a.length===32?ce:R().a3(ce,0,32),this.N=6,this.J=33554432-e.ag|0;var le=e.j+this.J|0;this.M=31&le,this.D=le-this.M|0,this.aC=new(F.r().r().r().r().r().r()).C(64),this.aC.a[0]=V().cb(V().cb(V().cb(V().cb(e.d,e.ao),e.ap),e.aq),e.ar);var ue=this.aC,de=w.a.length;w.v(0,ue,1,de),this.T=R().V(T,32),this.O=R().V(E,32),this.L=R().V(oe,32),this.H=R().V(se,32),this.aC.a[1+w.a.length|0]=this.T,this.T.a[T.a.length]=this.O,this.O.a[E.a.length]=this.L,this.L.a[oe.a.length]=this.H,this.H.a[se.a.length]=this.R;break;default:throw new p_(t)}return this.M===0&&this.D>0&&(this.M=32,this.D=-32+this.D|0),this}),j.mg=(function(e){return this.M===32&&Gv(this),this.R.a[this.M]=e,this.M=1+this.M|0,this}),j.kg=(function(e){return e instanceof Uw?this.M===0&&this.D===0&&!this.fz?this.ns(e):Wv(this,e):Lf(this,e)}),j.lo=(function(){this.fz&&Vv(this);var e=this.M+this.D|0,t=e-this.J|0;if(t===0)return Bv(),QT();if(e<0)throw Zg(new Qg,`Vector cannot have negative size `+e);if(e<=32){var n=this.R;return new HT(n.a.length===t?n:R().V(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=R().a3(this.H,1,i),o=this.H.a[0],s=this.H.a[i],c=1+r|0,l=s.a.length===c?s:R().V(s,c);return new $T(o,32-this.J|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=R().a3(this.L,1,f),m=this.L.a[0],h=R().a3(m,1,m.a.length),g=this.L.a[0].a[0],_=R().V(this.L.a[f],d),v=this.L.a[f].a[d],y=1+u|0,b=v.a.length===y?v:R().V(v,y),ee=g.a.length;return new tE(g,ee,h,ee+(h.a.length<<5)|0,p,_,b,t)}else if(e<=1048576){var te=31&(-1+e|0),x=31&((-1+e|0)>>>5|0),S=31&((-1+e|0)>>>10|0),C=(-1+e|0)>>>15|0,ne=R().a3(this.O,1,C),re=this.O.a[0],ie=R().a3(re,1,re.a.length),ae=this.O.a[0].a[0],w=R().a3(ae,1,ae.a.length),T=this.O.a[0].a[0].a[0],E=R().V(this.O.a[C],S),oe=R().V(this.O.a[C].a[S],x),se=this.O.a[C].a[S].a[x],ce=1+te|0,le=se.a.length===ce?se:R().V(se,ce),ue=T.a.length,de=ue+(w.a.length<<5)|0;return new rE(T,ue,w,de,ie,de+(ie.a.length<<10)|0,ne,E,oe,le,t)}else if(e<=33554432){var fe=31&(-1+e|0),pe=31&((-1+e|0)>>>5|0),me=31&((-1+e|0)>>>10|0),he=31&((-1+e|0)>>>15|0),ge=(-1+e|0)>>>20|0,_e=R().a3(this.T,1,ge),ve=this.T.a[0],ye=R().a3(ve,1,ve.a.length),be=this.T.a[0].a[0],xe=R().a3(be,1,be.a.length),Se=this.T.a[0].a[0].a[0],Ce=R().a3(Se,1,Se.a.length),we=this.T.a[0].a[0].a[0].a[0],D=R().V(this.T.a[ge],he),Te=R().V(this.T.a[ge].a[he],me),Ee=R().V(this.T.a[ge].a[he].a[me],pe),De=this.T.a[ge].a[he].a[me].a[pe],Oe=1+fe|0,ke=De.a.length===Oe?De:R().V(De,Oe),Ae=we.a.length,je=Ae+(Ce.a.length<<5)|0,Me=je+(xe.a.length<<10)|0;return new aE(we,Ae,Ce,je,xe,Me,ye,Me+(ye.a.length<<15)|0,_e,D,Te,Ee,ke,t)}else{var Ne=31&(-1+e|0),Pe=31&((-1+e|0)>>>5|0),Fe=31&((-1+e|0)>>>10|0),Ie=31&((-1+e|0)>>>15|0),Le=31&((-1+e|0)>>>20|0),Re=(-1+e|0)>>>25|0,ze=R().a3(this.aC,1,Re),Be=this.aC.a[0],Ve=R().a3(Be,1,Be.a.length),He=this.aC.a[0].a[0],Ue=R().a3(He,1,He.a.length),O=this.aC.a[0].a[0].a[0],We=R().a3(O,1,O.a.length),Ge=this.aC.a[0].a[0].a[0].a[0],Ke=R().a3(Ge,1,Ge.a.length),qe=this.aC.a[0].a[0].a[0].a[0].a[0],Je=R().V(this.aC.a[Re],Le),Ye=R().V(this.aC.a[Re].a[Le],Ie),Xe=R().V(this.aC.a[Re].a[Le].a[Ie],Fe),k=R().V(this.aC.a[Re].a[Le].a[Ie].a[Fe],Pe),Ze=this.aC.a[Re].a[Le].a[Ie].a[Fe].a[Pe],Qe=1+Ne|0,$e=Ze.a.length===Qe?Ze:R().V(Ze,Qe),et=qe.a.length,tt=et+(Ke.a.length<<5)|0,nt=tt+(We.a.length<<10)|0,rt=nt+(Ue.a.length<<15)|0;return new sE(qe,et,Ke,tt,We,nt,Ue,rt,Ve,rt+(Ve.a.length<<20)|0,ze,Je,Ye,Xe,k,$e,t)}}),j.I=(function(){return`VectorBuilder(len1=`+this.M+`, lenRest=`+this.D+`, offset=`+this.J+`, depth=`+this.N+`)`}),j.aY=(function(){return this.lo()}),j.aX=(function(e){return this.kg(e)}),j.aT=(function(e){return this.mg(e)}),new P().i(Jv,`scala.collection.immutable.VectorBuilder`,{fS:1,a7:1,L:1,H:1,F:1});function Xv(){this.jQ=null,Qv=this,this.jQ=new N(0)}j=Xv.prototype=new M,j.constructor=Xv;function Zv(){}Zv.prototype=j,j.cy=(function(e){return this.l2(e)}),j.l2=(function(e){var t=e.B();if(t>=0){var n=this.lr(this.jQ,0,t),r=S_(e)?e.bz(n,0,2147483647):e.m().bz(n,0,2147483647);if(r!==t)throw new Xg(`Copied `+r+` of `+t);return _E(new yE,n,t)}else return vE(new yE).kh(e)}),j.aU=(function(){return new ey}),j.o8=(function(e,t){if(t<0)throw Hh(new Uh,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Hh(new Uh,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),j.lr=(function(e,t,n){var r=this.o8(e.a.length,n);if(r<0)return e;var i=new N(r);return e.v(0,i,0,t),i}),j.ay=(function(e){return this.l2(e)}),new P().i(Xv,`scala.collection.mutable.ArrayBuffer$`,{fX:1,ai:1,a0:1,J:1,a:1});var Qv;function $v(){return Qv||=new Xv,Qv}function ey(){this.di=null,Sg(this,($v(),vE(new yE)))}j=ey.prototype=new wg,j.constructor=ey;function ty(){}ty.prototype=j,j.aZ=(function(e){this.di.aZ(e)}),new P().i(ey,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fY:1,aM:1,L:1,H:1,F:1});function ny(){this.e8=null,ig(this,My())}j=ny.prototype=new og,j.constructor=ny;function ry(){}ry.prototype=j,new P().i(ny,`scala.collection.mutable.Buffer$`,{g3:1,bj:1,a0:1,J:1,a:1});var iy;function ay(){return iy||=new ny,iy}function oy(e,t){this.di=null,Sg(this,Iw(new Rw,e,t))}j=oy.prototype=new wg,j.constructor=oy;function sy(){}sy.prototype=j,j.aZ=(function(e){this.di.aZ(e)}),new P().i(oy,`scala.collection.mutable.HashSet$$anon$4`,{gb:1,aM:1,L:1,H:1,F:1});function cy(e,t){return e.eJ=t,e.dk=0,e.ct=null,e.eK=t.aQ.a.length,e}function ly(){this.dk=0,this.ct=null,this.eK=0,this.eJ=null}j=ly.prototype=new $h,j.constructor=ly;function uy(){}uy.prototype=j,j.n=(function(){if(this.ct!==null)return!0;for(;this.dk<this.eK;){var e=this.eJ.aQ.a[this.dk];if(this.dk=1+this.dk|0,e!==null)return this.ct=e,!0}return!1}),j.g=(function(){if(this.n()){var e=this.h7(this.ct);return this.ct=this.ct.aR,e}else return J().K.g()});function dy(e,t){return e.eL=t,e}function fy(){this.eL=null}j=fy.prototype=new M,j.constructor=fy;function py(){}py.prototype=j,j.aZ=(function(e){}),j.aX=(function(e){return Lf(this,e)}),j.aY=(function(){return this.eL});function my(){this.e8=null,ig(this,$v())}j=my.prototype=new og,j.constructor=my;function hy(){}hy.prototype=j,new P().i(my,`scala.collection.mutable.IndexedSeq$`,{ge:1,bj:1,a0:1,J:1,a:1});var gy;function _y(){return gy||=new my,gy}function vy(){}j=vy.prototype=new M,j.constructor=vy;function yy(){}yy.prototype=j,j.cy=(function(e){return new hE().fR(e)}),j.aU=(function(){return Sg(new Cg,new hE)}),j.ay=(function(e){return new hE().fR(e)}),new P().i(vy,`scala.collection.mutable.ListBuffer$`,{gh:1,ai:1,a0:1,J:1,a:1});var by;function xy(){return by||=new vy,by}function Sy(e,t){this.gU=null,this.k0=null,this.jZ=0,this.gU=e,this.k0=t,this.jZ=t.ai()|0}j=Sy.prototype=new $h,j.constructor=Sy;function Cy(){}Cy.prototype=j,j.n=(function(){return Mu().kE(this.jZ,this.k0.ai()|0,`mutation occurred during iteration`),this.gU.n()}),j.g=(function(){return this.gU.g()}),new P().i(Sy,`scala.collection.mutable.MutationTracker$CheckedIterator`,{gj:1,o:1,r:1,b:1,c:1});function wy(e,t){return Ey(t)?e.aJ()===t.aJ():!1}function Ty(e){return e.Q.Z?`Array[`+Ty(e.Q.Q())+`]`:e.Q.N}function Ey(e){return!!(e&&e.$classData&&e.$classData.n.E)}function Dy(e){this.eN=0,this.k4=0,this.k5=null,this.k5=e,this.eN=0,this.k4=e.cE()}j=Dy.prototype=new $h,j.constructor=Dy;function Oy(){}Oy.prototype=j,j.n=(function(){return this.eN<this.k4}),j.g=(function(){var e=this.k5.cF(this.eN);return this.eN=1+this.eN|0,e}),new P().i(Dy,`scala.runtime.ScalaRunTime$$anon$1`,{gZ:1,o:1,r:1,b:1,c:1});function ky(){}j=ky.prototype=new M,j.constructor=ky;function Ay(){}Ay.prototype=j,j.cy=(function(e){return this.l3(e)}),j.aU=(function(){return SE(new CE)}),j.l3=(function(e){return Lf(SE(new CE),e).aY()}),j.ay=(function(e){return this.l3(e)}),new P().i(ky,`scala.scalajs.js.WrappedArray$`,{h5:1,ai:1,a0:1,J:1,a:1});var jy;function My(){return jy||=new ky,jy}function Ny(){}j=Ny.prototype=new M,j.constructor=Ny;function Py(){}Py.prototype=j,j.cy=(function(e){return this.hd(e)}),j.hd=(function(e){return this.aU().aX(e).aY()}),j.aU=(function(){return new bg(xE(new CE,[]),new Y((e=>new Ew(e.dl))))}),j.ay=(function(e){return this.hd(e)}),new P().i(Ny,`scala.scalajs.runtime.WrappedVarArgs$`,{hg:1,ai:1,a0:1,J:1,a:1});var Fy;function Iy(){return Fy||=new Ny,Fy}var Ly=class e extends sp{constructor(e,t){super(),this.dW=null,this.dV=0,this.dW=e,this.dV=t,mf(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}dS(){return new g_(this)}C(){var e=-889275714;return e=W().e(e,rb(`TransactionDepthExceeded`)),e=W().e(e,W().P(this.dW)),e=W().e(e,this.dV),W().E(e,2)}x(t){return this===t?!0:t instanceof e&&this.dV===t.dV?this.dW===t.dW:!1}cE(){return 2}cG(){return`TransactionDepthExceeded`}cF(e){if(e===0)return this.dW;if(e===1)return this.dV;throw Zg(new Qg,``+e)}I(){return`TransactionDepthExceeded: `+this.dW+`; maxDepth: `+this.dV}};new P().i(Ly,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aO:1,c2:1,w:1,a:1,d:1,a9:1});function Ry(e){this.e1=null,this.e2=null,this.ic=null,this.id=!1,kh(this,e,$())}j=Ry.prototype=new jh,j.constructor=Ry;function zy(){}zy.prototype=j,j.kF=(function(){return this.id||=(this.ic=this.l(`column`),!0),this.ic}),new P().i(Ry,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cH:1,as:1,U:1,ap:1,aq:1,cL:1});function By(e){this.e1=null,this.e2=null,this.ie=null,this.ig=!1,kh(this,e,$())}j=By.prototype=new jh,j.constructor=By;function Vy(){}Vy.prototype=j,j.oz=(function(){return this.ig||=(this.ie=this.l(`wrap`),!0),this.ie}),new P().i(By,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cI:1,as:1,U:1,ap:1,aq:1,cM:1});function Hy(e,t){this.fn=null,this.e3=null,this.g7=null,this.er=null,this.iy=null,this.c4=null,this.iy=e,this.c4=t,this.fn=ub(),Fd(this),Fg(this)}j=Hy.prototype=new M,j.constructor=Hy;function Uy(){}Uy.prototype=j,j.ca=(function(e){Ws().eO(e,this,void 0)}),j.fM=(function(){return this.e3}),j.kH=(function(e){this.e3=e}),j.lB=(function(e){Lg(this,e)}),j.lv=(function(e){Rg(this,e)}),j.I=(function(){return`ReactiveHtmlElement(`+(this.c4===null?`tag=`+this.iy.hp():this.c4.outerHTML)+`)`}),j.dT=(function(){return this.c4});var Wy=new P().i(Hy,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{dn:1,aw:1,a3:1,aT:1,aU:1,dm:1});function Gy(e,t){return mf(e,t,null,!0,!0),e}function Ky(e){return mf(e,null,null,!0,!0),e}var qy=class extends Qg{};new P().i(qy,`java.lang.ArrayIndexOutOfBoundsException`,{dM:1,az:1,D:1,C:1,w:1,a:1});function Jy(e,t){return Object.is(e,t)}function Yy(e){return _c().ht(e)}var Xy=new P().i(0,`java.lang.Double`,{b3:1,a8:1,a:1,a1:1,X:1,al:1},(e=>typeof e==`number`)),Zy=new P().i(0,`java.lang.Float`,{dR:1,a8:1,a:1,a1:1,X:1,al:1},(e=>ha(e))),Qy=new P().i(0,`java.lang.Integer`,{dU:1,a8:1,a:1,a1:1,X:1,al:1},(e=>ma(e)));function $y(e,t){return t instanceof z&&e.p===t.p&&e.r===t.r}function eb(e){return e.p^e.r}var tb=new P().i(0,`java.lang.Long`,{b5:1,a8:1,a:1,a1:1,X:1,al:1},(e=>e instanceof z)),nb=class extends Yg{constructor(e){super(),mf(this,e,null,!0,!0)}};new P().i(nb,`java.lang.NumberFormatException`,{e0:1,b4:1,D:1,C:1,w:1,a:1});function rb(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ib(e,t){return e===t}var ab=new P().i(0,`java.lang.String`,{e5:1,a:1,a1:1,ay:1,X:1,al:1},(e=>typeof e==`string`)),ob=class extends Qg{constructor(){super(),mf(this,null,null,!0,!0)}};new P().i(ob,`java.lang.StringIndexOutOfBoundsException`,{e8:1,az:1,D:1,C:1,w:1,a:1});function sb(){}j=sb.prototype=new h_,j.constructor=sb;function cb(){}cb.prototype=j,j.ng=(function(){throw new o_(`None.get`)}),j.cG=(function(){return`None`}),j.cE=(function(){return 0}),j.cF=(function(e){return W().f7(e)}),j.dS=(function(){return new Dy(this)}),j.C=(function(){return 2433880}),j.I=(function(){return`None`}),j.aI=(function(){this.ng()}),new P().i(sb,`scala.None$`,{et:1,ba:1,b:1,a9:1,d:1,a:1});var lb;function ub(){return lb||=new sb,lb}function db(e){this.ew=null,this.ew=e}j=db.prototype=new h_,j.constructor=db;function fb(){}fb.prototype=j,j.aI=(function(){return this.ew}),j.cG=(function(){return`Some`}),j.cE=(function(){return 1}),j.cF=(function(e){return e===0?this.ew:W().f7(e)}),j.dS=(function(){return new Dy(this)}),j.C=(function(){return G().hw(this,-889275714,!1)}),j.I=(function(){return U().m6(this)}),j.x=(function(e){return this===e||e instanceof db&&H().s(this.ew,e.ew)}),new P().i(db,`scala.Some`,{bb:1,ba:1,b:1,a9:1,d:1,a:1});function pb(){}j=pb.prototype=new M,j.constructor=pb;function mb(){}mb.prototype=j,j.bJ=(function(){return this.bd()}),j.f3=(function(e){return this.bb().ay(e)}),j.f8=(function(){return this.bb().aU()}),j.ba=(function(e){Gl(this,e)}),j.el=(function(e){return Kl(this,e)}),j.c=(function(){return ql(this)}),j.bz=(function(e,t,n){return Jl(this,e,t,n)}),j.dn=(function(e,t,n,r){return Xl(this,e,t,n,r)}),j.B=(function(){return-1}),j.f2=(function(e){return this.f3(e)});function hb(e,t){return e.bs=t,e.A=0,e.be=ml().bK(e.bs),e}function gb(){this.bs=null,this.A=0,this.be=0}j=gb.prototype=new $h,j.constructor=gb;function _b(){}_b.prototype=j,j.B=(function(){return this.be-this.A|0}),j.n=(function(){return this.A<this.be}),j.g=(function(){this.A>=ml().bK(this.bs)&&J().K.g();var e=U().dP(this.bs,this.A);return this.A=1+this.A|0,e}),j.dv=(function(e){if(e>0){var t=this.A+e|0;if(t<0)var n=this.be;else var r=this.be,n=r<t?r:t;this.A=n}return this}),new P().i(gb,`scala.collection.ArrayOps$ArrayIterator`,{Y:1,o:1,r:1,b:1,c:1,a:1});function vb(e,t){return t<0?0:t>e.bt?e.bt:t}function yb(e,t){return e.gv=t,e.ci=0,e.bt=t.t(),e}function bb(){this.gv=null,this.ci=0,this.bt=0}j=bb.prototype=new $h,j.constructor=bb;function xb(){}xb.prototype=j,j.B=(function(){return this.bt}),j.n=(function(){return this.bt>0}),j.g=(function(){if(this.bt>0){var e=this.gv.w(this.ci);return this.ci=1+this.ci|0,this.bt=-1+this.bt|0,e}else return J().K.g()}),j.dv=(function(e){if(e>0){this.ci=this.ci+e|0;var t=this.bt-e|0;this.bt=t<0?0:t}return this}),j.fc=(function(e,t){var n=vb(this,e),r=vb(this,t)-n|0;return this.bt=r<0?0:r,this.ci=this.ci+n|0,this}),new P().i(bb,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bh:1,o:1,r:1,b:1,c:1,a:1});function Sb(){this.eL=null,dy(this,J().K)}j=Sb.prototype=new py,j.constructor=Sb;function Cb(){}Cb.prototype=j,j.me=(function(e){return this.eL=this.eL.h2(new ih((()=>new T_(e)))),this}),j.aT=(function(e){return this.me(e)}),new P().i(Sb,`scala.collection.Iterator$$anon$21`,{eU:1,gd:1,a7:1,L:1,H:1,F:1});function wb(e,t){for(var n=e.m();n.n();){var r=n.g();t.cx(r.b4(),r.b2())}}function Tb(e,t,n,r,i){return Xl(new k_(e.m(),new Y((e=>{if(e!==null){var t=e.b4(),n=e.b2();return t+` -> `+n}else throw new p_(e)}))),t,n,r,i)}function Eb(e,t){for(var n=e.f8(),r=Lw(new Rw),i=e.m();i.n();){var a=i.g();r.fJ(t.i(a))&&n.aT(a)}return n.aY()}function Db(e,t){var n=e.dy().aU();return n.aX(e),n.aX(t),n.aY()}function Ob(e){return e.gz||=(e.gA=new sT(new N(0)),!0),e.gA}function kb(e){return e.gz?e.gA:Ob(e)}function Ab(){this.gA=null,this.gB=null,this.gz=!1,Mb=this,this.gB=new y_(this)}j=Ab.prototype=new M,j.constructor=Ab;function jb(){}jb.prototype=j,j.ha=(function(e,t){return e instanceof Bw?e:this.hB(wf().kZ(e,t))}),j.fP=(function(e){return new bg(($v(),new ey),new Y((t=>Nb().hB(Zl(t,e)))))}),j.hB=(function(e){if(e===null)return null;if(e instanceof N)return new sT(e);if(e instanceof Ea)return new rT(e);if(e instanceof ka)return new $w(e);if(e instanceof Da)return new aT(e);if(e instanceof Oa)return new tT(e);if(e instanceof Ca)return new Zw(e);if(e instanceof wa)return new Yw(e);if(e instanceof Ta)return new lT(e);if(e instanceof Sa)return new qw(e);if(cl(e,1))return new dT(e);throw new p_(e)}),j.h9=(function(e,t){return this.ha(e,t)}),new P().i(Ab,`scala.collection.immutable.ArraySeq$`,{f9:1,bl:1,be:1,bd:1,bf:1,a:1});var Mb;function Nb(){return Mb||=new Ab,Mb}function Pb(e,t){for(this.bv=0,this.eB=0,this.dH=null,this.bh=0,this.cl=null,this.eC=null,$_(this,t.b6);this.n();){var n=this.dH.f4(this.bv);e.ep(e.c6,this.dH.dw(this.bv),this.dH.cA(this.bv),n,Wl().bZ(n),0),this.bv=1+this.bv|0}}j=Pb.prototype=new tv,j.constructor=Pb;function Fb(){}Fb.prototype=j,j.hq=(function(){throw J().K.g(),new Kg}),j.g=(function(){this.hq()}),new P().i(Pb,`scala.collection.immutable.HashMapBuilder$$anon$1`,{fd:1,by:1,o:1,r:1,b:1,c:1});function Ib(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Lb(e){this.d3=0,this.ec=null,Tv(this,e)}j=Lb.prototype=new Dv,j.constructor=Lb;function Rb(){}Rb.prototype=j,new P().i(Lb,`scala.collection.immutable.Map$Map2$$anon$1`,{fr:1,fs:1,o:1,r:1,b:1,c:1});function zb(e){this.d5=0,this.d4=null,Ov(this,e)}j=zb.prototype=new Av,j.constructor=zb;function Bb(){}Bb.prototype=j,new P().i(zb,`scala.collection.immutable.Map$Map3$$anon$4`,{ft:1,fu:1,o:1,r:1,b:1,c:1});function Vb(e){this.d6=0,this.c8=null,jv(this,e)}j=Vb.prototype=new Nv,j.constructor=Vb;function Hb(){}Hb.prototype=j,new P().i(Vb,`scala.collection.immutable.Map$Map4$$anon$7`,{fv:1,fw:1,o:1,r:1,b:1,c:1});function Ub(e){this.cZ=0,this.fw=null,this.bw=0,this.eD=null,this.eE=null,this.gI=0,this.jK=null,sv(this,e),this.gI=0}j=Ub.prototype=new lv,j.constructor=Ub;function Wb(){}Wb.prototype=j,j.C=(function(){return G().ly(this.gI,W().P(this.jK),-889275714)}),j.nL=(function(){return this.n()||J().K.g(),this.gI=this.fw.f4(this.cZ),this.jK=this.fw.cA(this.cZ),this.cZ=-1+this.cZ|0,this}),j.g=(function(){return this.nL()}),new P().i(Ub,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fy:1,fa:1,o:1,r:1,b:1,c:1});function Gb(e){this.bv=0,this.eB=0,this.dH=null,this.bh=0,this.cl=null,this.eC=null,$_(this,e)}j=Gb.prototype=new tv,j.constructor=Gb;function Kb(){}Kb.prototype=j,j.nK=(function(){this.n()||J().K.g();var e=this.dH.l6(this.bv);return this.bv=1+this.bv|0,e}),j.g=(function(){return this.nK()}),new P().i(Gb,`scala.collection.immutable.MapKeyValueTupleIterator`,{fz:1,by:1,o:1,r:1,b:1,c:1});function qb(e){e.bm<=e.at&&J().K.g(),e.d8=1+e.d8|0;for(var t=e.gK.cf(e.d8);t.a.length===0;)e.d8=1+e.d8|0,t=e.gK.cf(e.d8);e.eG=e.dL;var n=e.jM,r=e.d8,i=n/2|0,a=r-i|0;e.d7=(1+i|0)-(a<0?-a|0:a)|0;var o=e.d7;switch(o){case 1:e.aM=t;break;case 2:e.aN=t;break;case 3:e.b7=t;break;case 4:e.bT=t;break;case 5:e.dK=t;break;case 6:e.gJ=t;break;default:throw new p_(o)}e.dL=e.eG+Math.imul(t.a.length,1<<Math.imul(5,-1+e.d7|0))|0,e.dL>e.cr&&(e.dL=e.cr),e.d7>1&&(e.ed=-1+(1<<Math.imul(5,e.d7))|0)}function Jb(e){var t=(e.at-e.bm|0)+e.cr|0;if(t===e.dL&&qb(e),e.d7>1){var n=t-e.eG|0;Yb(e,n,e.ed^n),e.ed=n}e.bm=e.bm-e.at|0;var r=e.aM.a.length,i=e.bm;e.cq=r<i?r:i,e.at=0}function Yb(e,t,n){n<1024?e.aM=e.aN.a[31&(t>>>5|0)]:n<32768?(e.aN=e.b7.a[31&(t>>>10|0)],e.aM=e.aN.a[0]):n<1048576?(e.b7=e.bT.a[31&(t>>>15|0)],e.aN=e.b7.a[0],e.aM=e.aN.a[0]):n<33554432?(e.bT=e.dK.a[31&(t>>>20|0)],e.b7=e.bT.a[0],e.aN=e.b7.a[0],e.aM=e.aN.a[0]):(e.dK=e.gJ.a[t>>>25|0],e.bT=e.dK.a[0],e.b7=e.bT.a[0],e.aN=e.b7.a[0],e.aM=e.aN.a[0])}function Xb(e,t,n){n<1024?e.aM=e.aN.a[31&(t>>>5|0)]:n<32768?(e.aN=e.b7.a[31&(t>>>10|0)],e.aM=e.aN.a[31&(t>>>5|0)]):n<1048576?(e.b7=e.bT.a[31&(t>>>15|0)],e.aN=e.b7.a[31&(t>>>10|0)],e.aM=e.aN.a[31&(t>>>5|0)]):n<33554432?(e.bT=e.dK.a[31&(t>>>20|0)],e.b7=e.bT.a[31&(t>>>15|0)],e.aN=e.b7.a[31&(t>>>10|0)],e.aM=e.aN.a[31&(t>>>5|0)]):(e.dK=e.gJ.a[t>>>25|0],e.bT=e.dK.a[31&(t>>>20|0)],e.b7=e.bT.a[31&(t>>>15|0)],e.aN=e.b7.a[31&(t>>>10|0)],e.aM=e.aN.a[31&(t>>>5|0)])}function Zb(e,t,n){this.gK=null,this.cr=0,this.jM=0,this.aM=null,this.aN=null,this.b7=null,this.bT=null,this.dK=null,this.gJ=null,this.cq=0,this.at=0,this.ed=0,this.bm=0,this.d8=0,this.d7=0,this.eG=0,this.dL=0,this.gK=e,this.cr=t,this.jM=n,this.aM=e.d,this.cq=this.aM.a.length,this.at=0,this.ed=0,this.bm=this.cr,this.d8=0,this.d7=1,this.eG=0,this.dL=this.cq}j=Zb.prototype=new $h,j.constructor=Zb;function Qb(){}Qb.prototype=j,j.B=(function(){return this.bm-this.at|0}),j.n=(function(){return this.bm>this.at}),j.g=(function(){this.at===this.cq&&Jb(this);var e=this.aM.a[this.at];return this.at=1+this.at|0,e}),j.dv=(function(e){if(e>0){var t=((this.at-this.bm|0)+this.cr|0)+e|0,n=this.cr,r=t<n?t:n;if(r===this.cr)this.at=0,this.bm=0,this.cq=0;else{for(;r>=this.dL;)qb(this);var i=r-this.eG|0;this.d7>1&&(Xb(this,i,this.ed^i),this.ed=i),this.cq=this.aM.a.length,this.at=31&i,this.bm=this.at+(this.cr-r|0)|0,this.cq>this.bm&&(this.cq=this.bm)}}return this}),j.bz=(function(e,t,n){for(var r=ml().bK(e),i=this.bm-this.at|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof N;l<c;){this.at===this.cq&&Jb(this);var d=c-l|0,f=this.aM.a.length-this.at|0,p=d<f?d:f;if(u){var m=this.aM,h=this.at,g=t+l|0;m.v(h,e,g,p)}else wf().eY(this.aM,this.at,e,t+l|0,p);this.at=this.at+p|0,l=l+p|0}return c}),new P().i(Zb,`scala.collection.immutable.NewVectorIterator`,{fB:1,o:1,r:1,b:1,c:1,A:1});function $b(e){return e.gO=0,e.jS=0,e}function ex(){this.gO=0,this.jS=0}j=ex.prototype=new M,j.constructor=ex;function tx(){}tx.prototype=j,j.aZ=(function(e){this.gO<e&&this.o7(e)});function nx(){this.gQ=null,this.jU=null,ix=this,this.gQ=new y_(this),this.jU=new NT(new N(0))}j=nx.prototype=new M,j.constructor=nx;function rx(){}rx.prototype=j,j.n9=(function(e,t){return this.hm(wf().kZ(e,t))}),j.fP=(function(e){return new bg(new Bx(e.aJ()),new Y((e=>ax().hm(e))))}),j.hm=(function(e){if(e===null)return null;if(e instanceof N)return new NT(e);if(e instanceof Ea)return new kT(e);if(e instanceof ka)return new TT(e);if(e instanceof Da)return new jT(e);if(e instanceof Oa)return new DT(e);if(e instanceof Ca)return new CT(e);if(e instanceof wa)return new xT(e);if(e instanceof Ta)return new FT(e);if(e instanceof Sa)return new yT(e);if(cl(e,1))return new LT(e);throw new p_(e)}),j.h9=(function(e,t){return this.n9(e,t)}),new P().i(nx,`scala.collection.mutable.ArraySeq$`,{g2:1,bl:1,be:1,bd:1,bf:1,a:1});var ix;function ax(){return ix||=new nx,ix}function ox(e){this.dk=0,this.ct=null,this.eK=0,this.eJ=null,cy(this,e)}j=ox.prototype=new uy,j.constructor=ox;function sx(){}sx.prototype=j,j.h7=(function(e){return e.eg}),new P().i(ox,`scala.collection.mutable.HashSet$$anon$1`,{g8:1,aN:1,o:1,r:1,b:1,c:1});function cx(e){this.dk=0,this.ct=null,this.eK=0,this.eJ=null,cy(this,e)}j=cx.prototype=new uy,j.constructor=cx;function lx(){}lx.prototype=j,j.h7=(function(e){return e}),new P().i(cx,`scala.collection.mutable.HashSet$$anon$2`,{g9:1,aN:1,o:1,r:1,b:1,c:1});function ux(e){this.dk=0,this.ct=null,this.eK=0,this.eJ=null,this.gT=0,this.jY=null,this.jY=e,cy(this,e),this.gT=0}j=ux.prototype=new uy,j.constructor=ux;function dx(){}dx.prototype=j,j.C=(function(){return this.gT}),j.h7=(function(e){return this.gT=this.jY.fQ(e.cu),this}),new P().i(ux,`scala.collection.mutable.HashSet$$anon$3`,{ga:1,aN:1,o:1,r:1,b:1,c:1});function fx(e){this.eM=null,this.eM=e}j=fx.prototype=new M,j.constructor=fx;function px(){}px.prototype=j,j.x=(function(e){return wy(this,e)}),j.C=(function(){return W().P(this.eM)}),j.I=(function(){return Ty(this.eM)}),j.aJ=(function(){return this.eM}),j.bc=(function(e){return this.eM.Q.U(e)}),new P().i(fx,`scala.reflect.ClassTag$GenericClassTag`,{gr:1,E:1,O:1,P:1,a:1,d:1});function mx(e){this.e1=null,this.e2=null,this.ia=null,this.ib=!1,kh(this,e,$())}j=mx.prototype=new jh,j.constructor=mx;function hx(){}hx.prototype=j,j.kW=(function(){return this.ib||=(this.ia=this.l(`flex`),!0),this.ia}),new P().i(mx,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{cG:1,as:1,U:1,ap:1,aq:1,cN:1,cK:1});function gx(e){this.e1=null,this.e2=null,this.ih=null,this.ii=!1,kh(this,e,$())}j=gx.prototype=new jh,j.constructor=gx;function _x(){}_x.prototype=j,j.ll=(function(){return this.ii||=(this.ih=ld(this),!0),this.ih}),new P().i(gx,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cJ:1,as:1,U:1,ap:1,aq:1,cO:1,cP:1});function vx(){}j=vx.prototype=new Ug,j.constructor=vx;function yx(){}yx.prototype=j;function bx(e){this.bs=null,this.A=0,this.be=0,this.gn=null,this.gn=e,hb(this,e)}j=bx.prototype=new _b,j.constructor=bx;function xx(){}xx.prototype=j,j.nM=(function(){this.A>=this.gn.a.length&&J().K.g();var e=this.gn.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nM()}),new P().i(bx,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{eD:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Sx(e){this.bs=null,this.A=0,this.be=0,this.go=null,this.go=e,hb(this,e)}j=Sx.prototype=new _b,j.constructor=Sx;function Cx(){}Cx.prototype=j,j.nN=(function(){this.A>=this.go.a.length&&J().K.g();var e=this.go.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return ga(this.nN())}),new P().i(Sx,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{eE:1,Y:1,o:1,r:1,b:1,c:1,a:1});function wx(e){this.bs=null,this.A=0,this.be=0,this.gp=null,this.gp=e,hb(this,e)}j=wx.prototype=new _b,j.constructor=wx;function Tx(){}Tx.prototype=j,j.nO=(function(){this.A>=this.gp.a.length&&J().K.g();var e=this.gp.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nO()}),new P().i(wx,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{eF:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Ex(e){this.bs=null,this.A=0,this.be=0,this.gq=null,this.gq=e,hb(this,e)}j=Ex.prototype=new _b,j.constructor=Ex;function Dx(){}Dx.prototype=j,j.nP=(function(){this.A>=this.gq.a.length&&J().K.g();var e=this.gq.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nP()}),new P().i(Ex,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{eG:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Ox(e){this.bs=null,this.A=0,this.be=0,this.gr=null,this.gr=e,hb(this,e)}j=Ox.prototype=new _b,j.constructor=Ox;function kx(){}kx.prototype=j,j.nQ=(function(){this.A>=this.gr.a.length&&J().K.g();var e=this.gr.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nQ()}),new P().i(Ox,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{eH:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Ax(e){this.bs=null,this.A=0,this.be=0,this.gs=null,this.gs=e,hb(this,e)}j=Ax.prototype=new _b,j.constructor=Ax;function jx(){}jx.prototype=j,j.nR=(function(){this.A>=this.gs.a.length&&J().K.g();var e=this.gs.a[this.A],t=e.p,n=e.r;return this.A=1+this.A|0,new z(t,n)}),j.g=(function(){return this.nR()}),new P().i(Ax,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{eI:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Mx(e){this.bs=null,this.A=0,this.be=0,this.gt=null,this.gt=e,hb(this,e)}j=Mx.prototype=new _b,j.constructor=Mx;function Nx(){}Nx.prototype=j,j.nS=(function(){this.A>=this.gt.a.length&&J().K.g();var e=this.gt.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nS()}),new P().i(Mx,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{eJ:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Px(e){this.bs=null,this.A=0,this.be=0,this.jv=null,this.jv=e,hb(this,e)}j=Px.prototype=new _b,j.constructor=Px;function Fx(){}Fx.prototype=j,j.nT=(function(){this.A>=this.jv.a.length&&J().K.g(),this.A=1+this.A|0}),j.g=(function(){this.nT()}),new P().i(Px,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{eK:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Ix(e){this.bs=null,this.A=0,this.be=0,this.gu=null,this.gu=e,hb(this,e)}j=Ix.prototype=new _b,j.constructor=Ix;function Lx(){}Lx.prototype=j,j.nU=(function(){this.A>=this.gu.a.length&&J().K.g();var e=this.gu.a[this.A];return this.A=1+this.A|0,e}),j.g=(function(){return this.nU()}),new P().i(Ix,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{eL:1,Y:1,o:1,r:1,b:1,c:1,a:1});function Rx(e){return e.bJ()+`(<not computed>)`}function zx(e){return!!(e&&e.$classData&&e.$classData.n.aa)}function Bx(e){this.gO=0,this.jS=0,this.ef=null,this.jT=!1,this.gP=null,this.ef=e,$b(this),this.jT=e===Ma.l(),this.gP=[]}j=Bx.prototype=new tx,j.constructor=Bx;function Vx(){}Vx.prototype=j,j.kj=(function(e){var t=this.jT?_a(e):e===null?this.ef.Q.z:e;return this.gP.push(t),this}),j.m8=(function(e){for(var t=e.m();t.n();)this.kj(t.g());return this}),j.o7=(function(e){}),j.aY=(function(){return(this.ef===Aa.l()?ll.l():this.ef===Iu.l()||this.ef===lh.l()?F.l():this.ef).Q.r().w(this.gP)}),j.I=(function(){return`ArrayBuilder.generic`}),j.aX=(function(e){return this.m8(e)}),j.aT=(function(e){return this.kj(e)}),new P().i(Bx,`scala.collection.mutable.ArrayBuilder$generic`,{g1:1,g0:1,a7:1,L:1,H:1,F:1,a:1});function Hx(e,t){this.gv=null,this.ci=0,this.bt=0,this.jX=null,this.jW=0,this.jX=t,yb(this,e),this.jW=t.ai()|0}j=Hx.prototype=new xb,j.constructor=Hx;function Ux(){}Ux.prototype=j,j.n=(function(){return Mu().kE(this.jW,this.jX.ai()|0,`mutation occurred during iteration`),this.bt>0}),new P().i(Hx,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{g5:1,bh:1,o:1,r:1,b:1,c:1,a:1});function Wx(){this.U=null}j=Wx.prototype=new M,j.constructor=Wx;function Gx(){}Gx.prototype=j,j.I=(function(){return this.U}),j.x=(function(e){return this===e}),j.C=(function(){return da(this)});function Kx(){}j=Kx.prototype=new M,j.constructor=Kx;function qx(){}qx.prototype=j;var Jx=class e extends Uh{constructor(e){super(),this.bU=null,this.bU=e,mf(this,null,null,!0,!0)}f5(){return ra(this.bU)}cG(){return`JavaScriptException`}cE(){return 1}cF(e){return e===0?this.bU:W().f7(e)}dS(){return new Dy(this)}C(){return G().hw(this,-889275714,!1)}x(t){return this===t||t instanceof e&&H().s(this.bU,t.bU)}};new P().i(Jx,`scala.scalajs.js.JavaScriptException`,{c0:1,D:1,C:1,w:1,a:1,a9:1,d:1});function Yx(e,t){typeof console<`u`&&(e.jg&&console.error?console.error(t):console.log(t))}function Xx(e){this.jg=!1,this.et=null,this.jg=e,new $g,this.et=``}j=Xx.prototype=new yx,j.constructor=Xx;function Zx(){}Zx.prototype=j,j.nw=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.et=``+this.et+t,t=``;else{var r=this.et,i=t;Yx(this,``+r+i.substring(0,n)),this.et=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new P().i(Xx,`java.lang.JSConsoleBasedPrintStream`,{dW:1,dK:1,dJ:1,aY:1,aW:1,b0:1,aX:1,aZ:1});function Qx(e,t,n){for(;;)if(t<=0||n.c())return n;else{var r=-1+t|0,i=n.u();t=r,n=i}}function $x(e,t){if(e.bo(1)<=0)return e;for(var n=e.f8(),r=Lw(new Rw),i=e.m(),a=!1;i.n();){var o=i.g();r.fJ(t.i(o))?n.aT(o):a=!0}return a?n.aY():e}function eS(){this.U=null}j=eS.prototype=new Gx,j.constructor=eS;function tS(){}tS.prototype=j,j.aJ=(function(){return ja.l()}),j.bc=(function(e){return new Sa(e)});function nS(){this.U=null}j=nS.prototype=new Gx,j.constructor=nS;function rS(){}rS.prototype=j,j.aJ=(function(){return Na.l()}),j.bc=(function(e){return new wa(e)});function iS(){this.U=null}j=iS.prototype=new Gx,j.constructor=iS;function aS(){}aS.prototype=j,j.aJ=(function(){return Ma.l()}),j.bc=(function(e){return new Ca(e)});function oS(){this.U=null}j=oS.prototype=new Gx,j.constructor=oS;function sS(){}sS.prototype=j,j.aJ=(function(){return Ra.l()}),j.bc=(function(e){return new ka(e)});function cS(){this.U=null}j=cS.prototype=new Gx,j.constructor=cS;function lS(){}lS.prototype=j,j.aJ=(function(){return La.l()}),j.bc=(function(e){return new Oa(e)});function uS(){this.U=null}j=uS.prototype=new Gx,j.constructor=uS;function dS(){}dS.prototype=j,j.aJ=(function(){return Fa.l()}),j.bc=(function(e){return new Ea(e)});function fS(){this.U=null}j=fS.prototype=new Gx,j.constructor=fS;function pS(){}pS.prototype=j,j.aJ=(function(){return Ia.l()}),j.bc=(function(e){return new Da(e)});function mS(){this.cw=null}j=mS.prototype=new qx,j.constructor=mS;function hS(){}hS.prototype=j,j.I=(function(){return this.cw}),j.x=(function(e){return this===e}),j.C=(function(){return da(this)});function gS(){this.U=null}j=gS.prototype=new Gx,j.constructor=gS;function _S(){}_S.prototype=j,j.aJ=(function(){return Pa.l()}),j.bc=(function(e){return new Ta(e)});function vS(){this.U=null}j=vS.prototype=new Gx,j.constructor=vS;function yS(){}yS.prototype=j,j.aJ=(function(){return Aa.l()}),j.bc=(function(e){return new(ll.r()).C(e)});function bS(){}j=bS.prototype=new mb,j.constructor=bS;function xS(){}xS.prototype=j,j.bb=(function(){return Pm()}),j.I=(function(){return Rx(this)}),j.bd=(function(){return`View`});function SS(e,t){if(e===t)return!0;if(CS(t))if(e.aK()===t.aK())try{return e.ok(t)}catch(e){if(e instanceof Kg)return!1;throw e}else return!1;else return!1}function CS(e){return!!(e&&e.$classData&&e.$classData.n.aF)}function wS(){this.cw=null,this.cw=`Any`}j=wS.prototype=new hS,j.constructor=wS;function TS(){}TS.prototype=j,j.aJ=(function(){return F.l()}),j.bc=(function(e){return new N(e)}),new P().i(wS,`scala.reflect.ManifestFactory$AnyManifest$`,{gs:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var ES;function DS(){return ES||=new wS,ES}function OS(){this.U=null,this.U=`Boolean`}j=OS.prototype=new tS,j.constructor=OS;function kS(){}kS.prototype=j,new P().i(OS,`scala.reflect.ManifestFactory$BooleanManifest$`,{gu:1,gt:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var AS;function jS(){return AS||=new OS,AS}function MS(){this.U=null,this.U=`Byte`}j=MS.prototype=new rS,j.constructor=MS;function NS(){}NS.prototype=j,new P().i(MS,`scala.reflect.ManifestFactory$ByteManifest$`,{gw:1,gv:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var PS;function FS(){return PS||=new MS,PS}function IS(){this.U=null,this.U=`Char`}j=IS.prototype=new aS,j.constructor=IS;function LS(){}LS.prototype=j,new P().i(IS,`scala.reflect.ManifestFactory$CharManifest$`,{gy:1,gx:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var RS;function zS(){return RS||=new IS,RS}function BS(){this.U=null,this.U=`Double`}j=BS.prototype=new sS,j.constructor=BS;function VS(){}VS.prototype=j,new P().i(BS,`scala.reflect.ManifestFactory$DoubleManifest$`,{gA:1,gz:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var HS;function US(){return HS||=new BS,HS}function WS(){this.U=null,this.U=`Float`}j=WS.prototype=new lS,j.constructor=WS;function GS(){}GS.prototype=j,new P().i(WS,`scala.reflect.ManifestFactory$FloatManifest$`,{gC:1,gB:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var KS;function qS(){return KS||=new WS,KS}function JS(){this.U=null,this.U=`Int`}j=JS.prototype=new dS,j.constructor=JS;function YS(){}YS.prototype=j,new P().i(JS,`scala.reflect.ManifestFactory$IntManifest$`,{gE:1,gD:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var XS;function ZS(){return XS||=new JS,XS}function QS(){this.U=null,this.U=`Long`}j=QS.prototype=new pS,j.constructor=QS;function $S(){}$S.prototype=j,new P().i(QS,`scala.reflect.ManifestFactory$LongManifest$`,{gG:1,gF:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var eC;function tC(){return eC||=new QS,eC}function nC(){this.cw=null,this.cw=`Nothing`}j=nC.prototype=new hS,j.constructor=nC;function rC(){}rC.prototype=j,j.aJ=(function(){return lh.l()}),j.bc=(function(e){return new N(e)}),new P().i(nC,`scala.reflect.ManifestFactory$NothingManifest$`,{gH:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var iC;function aC(){return iC||=new nC,iC}function oC(){this.cw=null,this.cw=`Null`}j=oC.prototype=new hS,j.constructor=oC;function sC(){}sC.prototype=j,j.aJ=(function(){return Iu.l()}),j.bc=(function(e){return new N(e)}),new P().i(oC,`scala.reflect.ManifestFactory$NullManifest$`,{gI:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var cC;function lC(){return cC||=new oC,cC}function uC(){this.cw=null,this.cw=`Object`}j=uC.prototype=new hS,j.constructor=uC;function dC(){}dC.prototype=j,j.aJ=(function(){return F.l()}),j.bc=(function(e){return new N(e)}),new P().i(uC,`scala.reflect.ManifestFactory$ObjectManifest$`,{gJ:1,av:1,au:1,S:1,E:1,O:1,P:1,a:1,d:1});var fC;function pC(){return fC||=new uC,fC}function mC(){this.U=null,this.U=`Short`}j=mC.prototype=new _S,j.constructor=mC;function hC(){}hC.prototype=j,new P().i(mC,`scala.reflect.ManifestFactory$ShortManifest$`,{gL:1,gK:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var gC;function _C(){return gC||=new mC,gC}function vC(){this.U=null,this.U=`Unit`}j=vC.prototype=new yS,j.constructor=vC;function yC(){}yC.prototype=j,new P().i(vC,`scala.reflect.ManifestFactory$UnitManifest$`,{gN:1,gM:1,a2:1,S:1,E:1,O:1,P:1,a:1,d:1});var bC;function xC(){return bC||=new vC,bC}function SC(e,t){return e===t?!0:CC(t)&&t.fL(e)?e.eo(t):!1}function CC(e){return!!(e&&e.$classData&&e.$classData.n.m)}function wC(e){this.jE=null,this.jE=e}j=wC.prototype=new xS,j.constructor=wC;function TC(){}TC.prototype=j,j.m=(function(){return this.jE.ai()}),new P().i(wC,`scala.collection.View$$anon$1`,{f5:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function EC(e,t){this.fv=null,this.jF=null,this.fv=e,this.jF=t}j=EC.prototype=new xS,j.constructor=EC;function DC(){}DC.prototype=j,j.m=(function(){return new D_(this.fv.m(),this.jF)}),j.B=(function(){return this.fv.B()===0?0:-1}),j.c=(function(){return this.fv.c()}),new P().i(EC,`scala.collection.View$DistinctBy`,{f6:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function OC(){}j=OC.prototype=new mb,j.constructor=OC;function kC(){}kC.prototype=j,j.x=(function(e){return SS(this,e)}),j.bd=(function(){return`Set`}),j.I=(function(){return x_(this)}),j.ok=(function(e){return this.el(e)}),j.i=(function(e){return this.bV(e)});function AC(e,t){if(e===t)return!0;if(jC(t))if(e.aK()===t.aK())try{return e.el(new Y((e=>(t=>H().s(e.dx(t.b4(),rg().jD),t.b2())))(t)))}catch(e){if(e instanceof Kg)return!1;throw e}else return!1;else return!1}function jC(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function MC(){}j=MC.prototype=new mb,j.constructor=MC;function NC(){}NC.prototype=j,j.fL=(function(e){return!0}),j.x=(function(e){return SC(this,e)}),j.C=(function(){return G().ls(this)}),j.I=(function(){return x_(this)}),j.cc=(function(e){return cg(this,e)}),j.bo=(function(e){return xm(this,e)}),j.c=(function(){return lg(this)}),j.eo=(function(e){return ug(this,e)});function PC(){}j=PC.prototype=new xS,j.constructor=PC;function FC(){}FC.prototype=j,j.bd=(function(){return`SeqView`}),j.cc=(function(e){return cg(this,e)}),j.bo=(function(e){return xm(this,e)}),j.c=(function(){return lg(this)});function IC(e){return!!(e&&e.$classData&&e.$classData.n.p)}function LC(e){return!!(e&&e.$classData&&e.$classData.n.an)}function RC(){}j=RC.prototype=new mb,j.constructor=RC;function zC(){}zC.prototype=j,j.x=(function(e){return AC(this,e)}),j.C=(function(){return G().nE(this)}),j.bd=(function(){return`Map`}),j.I=(function(){return x_(this)}),j.f3=(function(e){return this.la().ay(e)}),j.dQ=(function(e){wb(this,e)}),j.dn=(function(e,t,n,r){return Tb(this,e,t,n,r)});function BC(e,t){return e.dF=t,e}function VC(){this.dF=null}j=VC.prototype=new FC,j.constructor=VC;function HC(){}HC.prototype=j,j.w=(function(e){return this.dF.w(e)}),j.t=(function(){return this.dF.t()}),j.m=(function(){return this.dF.m()}),j.B=(function(){return this.dF.B()}),j.c=(function(){return this.dF.c()}),new P().i(VC,`scala.collection.SeqView$Id`,{bk:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1});function UC(){this.hY=null,this.hZ=!1,this.i6=null,this.i7=!1,this.hW=null,this.hX=!1,this.i0=null,this.i1=!1,this.i2=null,this.i3=!1,this.i4=null,this.i5=!1,this.hV=null,this.lD=null,this.hT=null,this.hU=!1,this.i8=null,this.i9=!1,os(this),es(this),Qo(this),$o(this)}j=UC.prototype=new M,j.constructor=UC;function WC(){}WC.prototype=j,j.f1=(function(){return this.hZ||=(this.hY=Id(new Ld,`div`,!1),!0),this.hY}),j.np=(function(){return this.i7||=(this.i6=new yd(`id`,as().ch),!0),this.i6}),j.kL=(function(){return this.hX||=(this.hW=new mx(`display`),!0),this.hW}),j.kX=(function(){return this.i1||=(this.i0=new Ry(`flex-direction`),!0),this.i0}),j.n5=(function(){return this.i3||=(this.i2=new By(`flex-wrap`),!0),this.i2}),j.l5=(function(){return this.i5||=(this.i4=new gx(`gap`),!0),this.i4}),j.m5=(function(){return this.hU||=(this.hT=new md(this),!0),this.hT}),j.ol=(function(){return this.i9||=(this.i8=new wh(this),!0),this.i8}),new P().i(UC,`com.raquo.laminar.api.package$$anon$1`,{cv:1,cQ:1,cz:1,cE:1,cD:1,cF:1,cB:1,ct:1,cp:1,cs:1,aQ:1,aR:1,aP:1,cq:1});function GC(e){return!!(e&&e.$classData&&e.$classData.n.a5)}function KC(){}j=KC.prototype=new FC,j.constructor=KC;function qC(){}qC.prototype=j,j.bd=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()});function JC(e){this.dF=null,BC(this,e)}j=JC.prototype=new HC,j.constructor=JC;function YC(){}YC.prototype=j,j.m=(function(){return yb(new bb,this)}),j.bd=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()}),new P().i(JC,`scala.collection.IndexedSeqView$Id`,{eP:1,bk:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1,bg:1,q:1});function XC(){}j=XC.prototype=new NC,j.constructor=XC;function ZC(){}ZC.prototype=j;function QC(e,t){this.gN=null,this.jR=null,this.gN=e,this.jR=t}j=QC.prototype=new qC,j.constructor=QC;function $C(){}$C.prototype=j,j.w=(function(e){return this.gN.w(e)}),j.t=(function(){return this.gN.ax}),j.bJ=(function(){return`ArrayBufferView`}),j.m=(function(){return new Hx(this,this.jR)}),new P().i(QC,`scala.collection.mutable.ArrayBufferView`,{fZ:1,eA:1,aB:1,am:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aE:1,l:1,bg:1,q:1});function ew(){}j=ew.prototype=new zC,j.constructor=ew;function tw(){}tw.prototype=j,j.la=(function(){return Qm()}),j.bb=(function(){return hg()});function nw(e,t){return!iw(t)||e.t()===t.t()}function rw(e,t){if(iw(t)){if(e===t)return!0;var n=e.t(),r=n===t.t();if(r){var i=0,a=e.fK(),o=t.fK(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().s(e.w(i),t.w(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().dv(i),m=t.m().dv(i);r&&p.n();)r=H().s(p.g(),m.g())}return r}else return ug(e,t)}function iw(e){return!!(e&&e.$classData&&e.$classData.n.y)}function aw(){}j=aw.prototype=new NC,j.constructor=aw;function ow(){}ow.prototype=j;function sw(){}j=sw.prototype=new tw,j.constructor=sw;function cw(){}cw.prototype=j,j.aK=(function(){return 0}),j.B=(function(){return 0}),j.c=(function(){return!0}),j.h0=(function(e){throw new o_(`key not found: `+e)}),j.bV=(function(e){return!1}),j.dx=(function(e,t){return t.ai()}),j.m=(function(){return J().K}),j.dA=(function(e,t){return new dw(e,t)}),j.i=(function(e){this.h0(e)}),new P().i(sw,`scala.collection.immutable.Map$EmptyMap$`,{fq:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,a:1});var lw;function uw(){return lw||=new sw,lw}function dw(e,t){this.c7=null,this.dI=null,this.c7=e,this.dI=t}j=dw.prototype=new tw,j.constructor=dw;function fw(){}fw.prototype=j,j.aK=(function(){return 1}),j.B=(function(){return 1}),j.c=(function(){return!1}),j.i=(function(e){if(H().s(e,this.c7))return this.dI;throw new o_(`key not found: `+e)}),j.bV=(function(e){return H().s(e,this.c7)}),j.dx=(function(e,t){return H().s(e,this.c7)?this.dI:t.ai()}),j.m=(function(){return new T_(new Q(this.c7,this.dI))}),j.dU=(function(e,t){return H().s(e,this.c7)?new dw(this.c7,t):new pw(this.c7,this.dI,e,t)}),j.el=(function(e){return!!e.i(new Q(this.c7,this.dI))}),j.C=(function(){var e=0,t=0,n=1,r=G().c3(this.c7,this.dI);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dm,r=G().e(r,e),r=G().e(r,t),r=G().cB(r,n),G().E(r,1)}),j.dA=(function(e,t){return this.dU(e,t)}),new P().i(dw,`scala.collection.immutable.Map$Map1`,{bD:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function pw(e,t,n,r){this.bN=null,this.d1=null,this.bO=null,this.d2=null,this.bN=e,this.d1=t,this.bO=n,this.d2=r}j=pw.prototype=new tw,j.constructor=pw;function mw(){}mw.prototype=j,j.aK=(function(){return 2}),j.B=(function(){return 2}),j.c=(function(){return!1}),j.i=(function(e){if(H().s(e,this.bN))return this.d1;if(H().s(e,this.bO))return this.d2;throw new o_(`key not found: `+e)}),j.bV=(function(e){return H().s(e,this.bN)||H().s(e,this.bO)}),j.dx=(function(e,t){return H().s(e,this.bN)?this.d1:H().s(e,this.bO)?this.d2:t.ai()}),j.m=(function(){return new Lb(this)}),j.dU=(function(e,t){return H().s(e,this.bN)?new pw(this.bN,t,this.bO,this.d2):H().s(e,this.bO)?new pw(this.bN,this.d1,this.bO,t):new hw(this.bN,this.d1,this.bO,this.d2,e,t)}),j.el=(function(e){return!!e.i(new Q(this.bN,this.d1))&&!!e.i(new Q(this.bO,this.d2))}),j.C=(function(){var e=0,t=0,n=1,r=G().c3(this.bN,this.d1);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bO,this.d2),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dm,r=G().e(r,e),r=G().e(r,t),r=G().cB(r,n),G().E(r,2)}),j.dA=(function(e,t){return this.dU(e,t)}),new P().i(pw,`scala.collection.immutable.Map$Map2`,{bE:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function hw(e,t,n,r,i,a){this.bD=null,this.cm=null,this.bE=null,this.cn=null,this.bF=null,this.co=null,this.bD=e,this.cm=t,this.bE=n,this.cn=r,this.bF=i,this.co=a}j=hw.prototype=new tw,j.constructor=hw;function gw(){}gw.prototype=j,j.aK=(function(){return 3}),j.B=(function(){return 3}),j.c=(function(){return!1}),j.i=(function(e){if(H().s(e,this.bD))return this.cm;if(H().s(e,this.bE))return this.cn;if(H().s(e,this.bF))return this.co;throw new o_(`key not found: `+e)}),j.bV=(function(e){return H().s(e,this.bD)||H().s(e,this.bE)||H().s(e,this.bF)}),j.dx=(function(e,t){return H().s(e,this.bD)?this.cm:H().s(e,this.bE)?this.cn:H().s(e,this.bF)?this.co:t.ai()}),j.m=(function(){return new zb(this)}),j.dU=(function(e,t){return H().s(e,this.bD)?new hw(this.bD,t,this.bE,this.cn,this.bF,this.co):H().s(e,this.bE)?new hw(this.bD,this.cm,this.bE,t,this.bF,this.co):H().s(e,this.bF)?new hw(this.bD,this.cm,this.bE,this.cn,this.bF,t):new _w(this.bD,this.cm,this.bE,this.cn,this.bF,this.co,e,t)}),j.el=(function(e){return!!e.i(new Q(this.bD,this.cm))&&!!e.i(new Q(this.bE,this.cn))&&!!e.i(new Q(this.bF,this.co))}),j.C=(function(){var e=0,t=0,n=1,r=G().c3(this.bD,this.cm);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bE,this.cn),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bF,this.co),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dm,r=G().e(r,e),r=G().e(r,t),r=G().cB(r,n),G().E(r,3)}),j.dA=(function(e,t){return this.dU(e,t)}),new P().i(hw,`scala.collection.immutable.Map$Map3`,{bF:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function _w(e,t,n,r,i,a,o,s){this.bi=null,this.bP=null,this.bj=null,this.bQ=null,this.bk=null,this.bR=null,this.bl=null,this.bS=null,this.bi=e,this.bP=t,this.bj=n,this.bQ=r,this.bk=i,this.bR=a,this.bl=o,this.bS=s}j=_w.prototype=new tw,j.constructor=_w;function vw(){}vw.prototype=j,j.aK=(function(){return 4}),j.B=(function(){return 4}),j.c=(function(){return!1}),j.i=(function(e){if(H().s(e,this.bi))return this.bP;if(H().s(e,this.bj))return this.bQ;if(H().s(e,this.bk))return this.bR;if(H().s(e,this.bl))return this.bS;throw new o_(`key not found: `+e)}),j.bV=(function(e){return H().s(e,this.bi)||H().s(e,this.bj)||H().s(e,this.bk)||H().s(e,this.bl)}),j.dx=(function(e,t){return H().s(e,this.bi)?this.bP:H().s(e,this.bj)?this.bQ:H().s(e,this.bk)?this.bR:H().s(e,this.bl)?this.bS:t.ai()}),j.m=(function(){return new Vb(this)}),j.dU=(function(e,t){return H().s(e,this.bi)?new _w(this.bi,t,this.bj,this.bQ,this.bk,this.bR,this.bl,this.bS):H().s(e,this.bj)?new _w(this.bi,this.bP,this.bj,t,this.bk,this.bR,this.bl,this.bS):H().s(e,this.bk)?new _w(this.bi,this.bP,this.bj,this.bQ,this.bk,t,this.bl,this.bS):H().s(e,this.bl)?new _w(this.bi,this.bP,this.bj,this.bQ,this.bk,this.bR,this.bl,t):Hm().gD.eq(this.bi,this.bP).eq(this.bj,this.bQ).eq(this.bk,this.bR).eq(this.bl,this.bS).eq(e,t)}),j.el=(function(e){return!!e.i(new Q(this.bi,this.bP))&&!!e.i(new Q(this.bj,this.bQ))&&!!e.i(new Q(this.bk,this.bR))&&!!e.i(new Q(this.bl,this.bS))}),j.mw=(function(e){return e.dO(this.bi,this.bP).dO(this.bj,this.bQ).dO(this.bk,this.bR).dO(this.bl,this.bS)}),j.C=(function(){var e=0,t=0,n=1,r=G().c3(this.bi,this.bP);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bj,this.bQ),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bk,this.bR),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().c3(this.bl,this.bS),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().dm,r=G().e(r,e),r=G().e(r,t),r=G().cB(r,n),G().E(r,4)}),j.dA=(function(e,t){return this.dU(e,t)}),new P().i(_w,`scala.collection.immutable.Map$Map4`,{bG:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,k:1,a:1});function yw(){}j=yw.prototype=new kC,j.constructor=yw;function bw(){}bw.prototype=j,j.aY=(function(){return this});function xw(e){if(!e.gE){if(e.fx)throw Hh(new Uh,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.fx=!0;try{var t=e.gF.ai()}finally{e.fx=!1}e.bx=!0,e.gF=null,e.gG=t,e.gE=!0}return e.gG}function Sw(e,t){return yg(),new ww(new ih((()=>e.c()?Jm():(yg(),new Um(t.i(e.F().z()),Sw(e.F().aE(),t))))))}function Cw(e,t,n,r,i){if(t.q=``+t.q+n,!e.bx)t.q+=`<not computed>`;else if(!e.c()){var a=e.F().z();t.q=``+t.q+a;var o=null;o=e;var s=e.F().aE(),c=null;if(c=s,o!==c&&(!c.bx||o.F()!==c.F())&&(o=c,c.bx&&!c.c()))for(c=c.F().aE();o!==c&&c.bx&&!c.c()&&o.F()!==c.F();){t.q=``+t.q+r;var l=o.F().z();t.q=``+t.q+l,o=o.F().aE(),c=c.F().aE(),c.bx&&!c.c()&&(c=c.F().aE())}if(c.bx&&!c.c()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.F()===p.F()))u=u.F().aE(),c=c.F().aE(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.F()===h.F())&&d>0){t.q=``+t.q+r;var g=o.F().z();t.q=``+t.q+g,o=o.F().aE()}for(;;){var _=o,v=c;if(_===v||_.F()===v.F())break;t.q=``+t.q+r;var y=o.F().z();t.q=``+t.q+y,o=o.F().aE()}t.q=``+t.q+r,t.q+=`<cycle>`}else{for(;o!==c;){t.q=``+t.q+r;var b=o.F().z();t.q=``+t.q+b,o=o.F().aE()}o.bx||(t.q=``+t.q+r,t.q+=`<not computed>`)}}return t.q=``+t.q+i,t}function ww(e){this.gG=null,this.gF=null,this.bx=!1,this.fx=!1,this.gE=!1,this.gF=e,this.bx=!1,this.fx=!1}j=ww.prototype=new ZC,j.constructor=ww;function Tw(){}Tw.prototype=j,j.bd=(function(){return`LinearSeq`}),j.t=(function(){return z_(this)}),j.bo=(function(e){return B_(this,e)}),j.w=(function(e){return V_(this,e)}),j.eo=(function(e){return H_(this,e)}),j.F=(function(){return this.gE?this.gG:xw(this)}),j.c=(function(){return this.F()===Jm()}),j.B=(function(){return this.bx&&this.F()===Jm()?0:-1}),j.z=(function(){return this.F().z()}),j.kY=(function(){var e=this,t=this;for(e.c()||(e=e.F().aE());t!==e;){if(e.c()||(e=e.F().aE(),e.c())||(e=e.F().aE(),e===t))return this;t=t.F().aE()}return this}),j.m=(function(){return this.bx&&this.F()===Jm()?J().K:new yv(this)}),j.ba=(function(e){for(var t=this;;){if(!t.c()){e.i(t.F().z()),t=t.F().aE();continue}break}}),j.bJ=(function(){return`LazyList`}),j.nA=(function(e){return this.bx&&this.F()===Jm()?yg().fy:(yg(),new ww(new ih((()=>this.c()?Jm():(yg(),new Um(e.i(this.F().z()),Sw(this.F().aE(),e)))))))}),j.mO=(function(e){return e<=0?this:this.bx&&this.F()===Jm()?yg().fy:yg().oa(this,e)}),j.dn=(function(e,t,n,r){return this.kY(),Cw(this,e.aS,t,n,r),e}),j.I=(function(){return Cw(this,Gh(new Kh,`LazyList`),`(`,`, `,`)`).q}),j.i=(function(e){return V_(this,e|0)}),j.kM=(function(e){return this.mO(e)}),j.c0=(function(e){return this.nA(e)}),j.u=(function(){return this.F().aE()}),j.bb=(function(){return yg()}),new P().i(ww,`scala.collection.immutable.LazyList`,{bB:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,a:1});function Ew(e){this.fE=null,this.fE=e}j=Ew.prototype=new M,j.constructor=Ew;function Dw(){}Dw.prototype=j,j.cc=(function(e){return $x(this,e)}),j.c0=(function(e){return dg(this,e)}),j.fL=(function(e){return nw(this,e)}),j.eo=(function(e){return rw(this,e)}),j.fK=(function(){return cu().jG}),j.m=(function(){return yb(new bb,new JC(this))}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()}),j.x=(function(e){return SC(this,e)}),j.C=(function(){return G().ls(this)}),j.I=(function(){return x_(this)}),j.c=(function(){return lg(this)}),j.f8=(function(){return Iy().aU()}),j.ba=(function(e){Gl(this,e)}),j.bz=(function(e,t,n){return Jl(this,e,t,n)}),j.dn=(function(e,t,n,r){return Xl(this,e,t,n,r)}),j.dy=(function(){return Iy()}),j.t=(function(){return this.fE.length|0}),j.w=(function(e){return this.fE[e]}),j.bJ=(function(){return`WrappedVarArgs`}),j.f2=(function(e){return Iy().hd(e)}),j.i=(function(e){return this.w(e|0)}),j.bb=(function(){return Iy()}),new P().i(Ew,`scala.scalajs.runtime.WrappedVarArgs`,{c1:1,y:1,u:1,t:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,v:1,p:1,q:1,B:1,z:1,s:1,k:1,a:1});function Ow(e){this.b6=null,this.b6=e}j=Ow.prototype=new tw,j.constructor=Ow;function kw(){}kw.prototype=j,j.la=(function(){return Hm()}),j.B=(function(){return this.b6.aL}),j.aK=(function(){return this.b6.aL}),j.c=(function(){return this.b6.aL===0}),j.m=(function(){return this.c()?J().K:new Gb(this.b6)}),j.bV=(function(e){var t=W().P(e),n=Wl().bZ(t);return this.b6.h3(e,t,n,0)}),j.i=(function(e){var t=W().P(e),n=Wl().bZ(t);return this.b6.gZ(e,t,n,0)}),j.dx=(function(e,t){var n=W().P(e),r=Wl().bZ(n);return this.b6.hf(e,n,r,0,t)}),j.eq=(function(e,t){var n=W().P(e),r=this.b6.lz(e,t,n,Wl().bZ(n),0,!0);return r===this.b6?this:new Ow(r)}),j.dQ=(function(e){this.b6.dQ(e)}),j.x=(function(e){if(e instanceof Ow){if(this===e)return!0;var t=this.b6,n=e.b6;return t===null?n===null:t.x(n)}else return AC(this,e)}),j.C=(function(){if(this.c())return G().gW;var e=new Ub(this.b6);return G().hA(e,G().dm)}),j.bJ=(function(){return`HashMap`}),j.dA=(function(e,t){return this.eq(e,t)}),new P().i(Ow,`scala.collection.immutable.HashMap`,{bA:1,aj:1,af:1,i:1,e:1,b:1,h:1,c:1,g:1,a4:1,ah:1,j:1,f:1,ag:1,d:1,a5:1,t:1,ak:1,fI:1,f3:1,k:1,T:1,a:1});function Aw(){}j=Aw.prototype=new ow,j.constructor=Aw;function jw(){}jw.prototype=j,j.aX=(function(e){return Lf(this,e)});function Mw(e,t,n){var r=n&(-1+e.aQ.a.length|0),i=e.aQ.a[r];if(i===null)e.aQ.a[r]=new Eu(t,n,null);else{for(var a=null,o=i;o!==null&&o.cu<=n;){if(o.cu===n&&H().s(t,o.eg))return!1;a=o,o=o.aR}a===null?e.aQ.a[r]=new Eu(t,n,i):a.aR=new Eu(t,n,a.aR)}return e.dj=1+e.dj|0,!0}function Nw(e,t){var n=e.aQ.a.length;if(e.gS=Fw(e,t),e.dj===0)e.aQ=new(Ou.r()).C(t);else{e.aQ=R().V(e.aQ,t);for(var r=new Eu(null,0,null),i=new Eu(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aQ.a[a];if(o!==null){r.aR=null,i.aR=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aR;(l.cu&n)===0?(s.aR=l,s=l):(c.aR=l,c=l),l=u}s.aR=null,o!==r.aR&&(e.aQ.a[a]=r.aR),i.aR!==null&&(e.aQ.a[a+n|0]=i.aR,c.aR=null)}a=1+a|0}n<<=1}}}function Pw(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function Fw(e,t){return oa(t*e.gR)}function Iw(e,t,n){return e.gR=n,e.aQ=new(Ou.r()).C(Pw(e,t)),e.gS=Fw(e,e.aQ.a.length),e.dj=0,e}function Lw(e){return Iw(e,16,.75),e}function Rw(){this.gR=0,this.aQ=null,this.gS=0,this.dj=0}j=Rw.prototype=new bw,j.constructor=Rw;function zw(){}zw.prototype=j,j.aK=(function(){return this.dj}),j.fQ=(function(e){return e^(e>>>16|0)}),j.bV=(function(e){var t=this.fQ(W().P(e)),n=this.aQ.a[t&(-1+this.aQ.a.length|0)];return(n===null?null:n.n4(e,t))!==null}),j.aZ=(function(e){var t=Pw(this,oa((1+e|0)/this.gR));t>this.aQ.a.length&&Nw(this,t)}),j.fJ=(function(e){return(1+this.dj|0)>=this.gS&&Nw(this,this.aQ.a.length<<1),Mw(this,e,this.fQ(W().P(e)))}),j.ki=(function(e){if($m(this,e,0),e instanceof Rw){for(var t=new cx(e);t.n();){var n=t.g();Mw(this,n.eg,n.cu)}return this}else return Lf(this,e)}),j.m=(function(){return new ox(this)}),j.bb=(function(){return rh()}),j.B=(function(){return this.dj}),j.c=(function(){return this.dj===0}),j.bJ=(function(){return`HashSet`}),j.C=(function(){var e=new ox(this),t=e.n()?new ux(this):e;return G().hA(t,G().ka)}),j.aT=(function(e){return this.fJ(e),this}),j.aX=(function(e){return this.ki(e)}),new P().i(Rw,`scala.collection.mutable.HashSet`,{bT:1,fW:1,eB:1,i:1,e:1,b:1,h:1,c:1,g:1,aF:1,f1:1,f:1,d:1,gk:1,I:1,gl:1,G:1,A:1,L:1,H:1,F:1,at:1,k:1,a:1});function Bw(){}j=Bw.prototype=new ZC,j.constructor=Bw;function Vw(){}Vw.prototype=j,j.f3=(function(e){return Nb().ha(e,this.ad())}),j.f8=(function(){return Nb().fP(this.ad())}),j.cc=(function(e){return $x(this,e)}),j.fL=(function(e){return nw(this,e)}),j.eo=(function(e){return rw(this,e)}),j.bd=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()}),j.dy=(function(){return Nb().gB}),j.nz=(function(e){for(var t=new N(this.t()),n=0;n<t.a.length;)t.a[n]=e.i(this.w(n)),n=1+n|0;return Nb().hB(t)}),j.bJ=(function(){return`ArraySeq`}),j.bz=(function(e,t,n){var r=this.t(),i=ml().bK(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&wf().eY(this.ce(),0,e,t,c),c}),j.fK=(function(){return 2147483647}),j.f2=(function(e){return Nb().ha(e,this.ad())}),j.c0=(function(e){return this.nz(e)}),j.bb=(function(){return Nb().gB});function Hw(e,t){return e.d=t,e}function Uw(){this.d=null}j=Uw.prototype=new ZC,j.constructor=Uw;function Ww(){}Ww.prototype=j,j.cc=(function(e){return $x(this,e)}),j.fL=(function(e){return nw(this,e)}),j.eo=(function(e){return rw(this,e)}),j.bd=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()}),j.dy=(function(){return Bv()}),j.t=(function(){return this instanceof BT?this.j:this.d.a.length}),j.m=(function(){return QT()===this?Bv().jO:new Zb(this,this.t(),this.cg())}),j.bJ=(function(){return`Vector`}),j.bz=(function(e,t,n){return this.m().bz(e,t,n)}),j.fK=(function(){return Bv().jN}),j.aD=(function(e){return ru().f6(e,-1+this.t()|0)}),j.ba=(function(e){for(var t=this.cg(),n=0;n<t;){var r=V(),i=n,a=t/2|0,o=i-a|0;r.h8(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cf(n),e),n=1+n|0}}),j.bb=(function(){return Bv()});function Gw(){}j=Gw.prototype=new ow,j.constructor=Gw;function Kw(){}Kw.prototype=j,j.cc=(function(e){return Eb(this,e)}),j.bd=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),j.B=(function(){return this.t()}),j.dy=(function(){return ax().gQ}),j.l4=(function(e){var t=this.ad(),n=null,r=t.aJ(),i=r===Ma.l();n=[],e.B();for(var a=e.m();a.n();){var o=a.g(),s=i?_a(o):o===null?r.Q.z:o;n.push(s)}var c=ax(),l=r===Aa.l()?ll.l():r===Iu.l()||r===lh.l()?F.l():r;return c.hm(l.Q.r().w(n))}),j.f8=(function(){return ax().fP(this.ad())}),j.bJ=(function(){return`ArraySeq`}),j.bz=(function(e,t,n){var r=this.t(),i=ml().bK(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&wf().eY(this.bI(),0,e,t,c),c}),j.x=(function(e){return e instanceof Gw&&ml().bK(this.bI())!==ml().bK(e.bI())?!1:SC(this,e)}),j.f2=(function(e){return this.l4(e)}),j.f3=(function(e){return this.l4(e)}),j.bb=(function(){return ax().gQ});function qw(e){this.cS=null,this.cS=e}j=qw.prototype=new Vw,j.constructor=qw;function Jw(){}Jw.prototype=j,j.t=(function(){return this.cS.a.length}),j.C=(function(){var e=G();return e.kB(this.cS,e.ah)}),j.x=(function(e){return e instanceof qw?R().kU(this.cS,e.cS):SC(this,e)}),j.m=(function(){return new Ix(this.cS)}),j.eX=(function(e){return this.cS.a[e]}),j.i=(function(e){return this.eX(e|0)}),j.w=(function(e){return this.eX(e)}),j.ad=(function(){return jS()}),j.ce=(function(){return this.cS}),new P().i(qw,`scala.collection.immutable.ArraySeq$ofBoolean`,{bn:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function Yw(e){this.cT=null,this.cT=e}j=Yw.prototype=new Vw,j.constructor=Yw;function Xw(){}Xw.prototype=j,j.t=(function(){return this.cT.a.length}),j.eP=(function(e){return this.cT.a[e]}),j.C=(function(){var e=G();return e.kt(this.cT,e.ah)}),j.x=(function(e){return e instanceof Yw?R().kO(this.cT,e.cT):SC(this,e)}),j.m=(function(){return new bx(this.cT)}),j.i=(function(e){return this.eP(e|0)}),j.w=(function(e){return this.eP(e)}),j.ad=(function(){return FS()}),j.ce=(function(){return this.cT}),new P().i(Yw,`scala.collection.immutable.ArraySeq$ofByte`,{bo:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function Zw(e){this.ck=null,this.ck=e}j=Zw.prototype=new Vw,j.constructor=Zw;function Qw(){}Qw.prototype=j,j.t=(function(){return this.ck.a.length}),j.eQ=(function(e){return this.ck.a[e]}),j.C=(function(){var e=G();return e.ku(this.ck,e.ah)}),j.x=(function(e){return e instanceof Zw?R().kP(this.ck,e.ck):SC(this,e)}),j.m=(function(){return new Sx(this.ck)}),j.dn=(function(e,t,n,r){return new CT(this.ck).dn(e,t,n,r)}),j.i=(function(e){return ga(this.eQ(e|0))}),j.w=(function(e){return ga(this.eQ(e))}),j.ad=(function(){return zS()}),j.ce=(function(){return this.ck}),new P().i(Zw,`scala.collection.immutable.ArraySeq$ofChar`,{bp:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function $w(e){this.cU=null,this.cU=e}j=$w.prototype=new Vw,j.constructor=$w;function eT(){}eT.prototype=j,j.t=(function(){return this.cU.a.length}),j.C=(function(){var e=G();return e.kv(this.cU,e.ah)}),j.x=(function(e){return e instanceof $w?R().kQ(this.cU,e.cU):SC(this,e)}),j.m=(function(){return new wx(this.cU)}),j.eS=(function(e){return this.cU.a[e]}),j.i=(function(e){return this.eS(e|0)}),j.w=(function(e){return this.eS(e)}),j.ad=(function(){return US()}),j.ce=(function(){return this.cU}),new P().i($w,`scala.collection.immutable.ArraySeq$ofDouble`,{bq:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function tT(e){this.cV=null,this.cV=e}j=tT.prototype=new Vw,j.constructor=tT;function nT(){}nT.prototype=j,j.t=(function(){return this.cV.a.length}),j.C=(function(){var e=G();return e.kw(this.cV,e.ah)}),j.x=(function(e){return e instanceof tT?R().kR(this.cV,e.cV):SC(this,e)}),j.m=(function(){return new Ex(this.cV)}),j.eT=(function(e){return this.cV.a[e]}),j.i=(function(e){return this.eT(e|0)}),j.w=(function(e){return this.eT(e)}),j.ad=(function(){return qS()}),j.ce=(function(){return this.cV}),new P().i(tT,`scala.collection.immutable.ArraySeq$ofFloat`,{br:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function rT(e){this.cW=null,this.cW=e}j=rT.prototype=new Vw,j.constructor=rT;function iT(){}iT.prototype=j,j.t=(function(){return this.cW.a.length}),j.C=(function(){var e=G();return e.kx(this.cW,e.ah)}),j.x=(function(e){return e instanceof rT?R().h5(this.cW,e.cW):SC(this,e)}),j.m=(function(){return new Ox(this.cW)}),j.eU=(function(e){return this.cW.a[e]}),j.i=(function(e){return this.eU(e|0)}),j.w=(function(e){return this.eU(e)}),j.ad=(function(){return ZS()}),j.ce=(function(){return this.cW}),new P().i(rT,`scala.collection.immutable.ArraySeq$ofInt`,{bs:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function aT(e){this.cX=null,this.cX=e}j=aT.prototype=new Vw,j.constructor=aT;function oT(){}oT.prototype=j,j.t=(function(){return this.cX.a.length}),j.C=(function(){var e=G();return e.ky(this.cX,e.ah)}),j.x=(function(e){return e instanceof aT?R().kS(this.cX,e.cX):SC(this,e)}),j.m=(function(){return new Ax(this.cX)}),j.eV=(function(e){return this.cX.a[e]}),j.i=(function(e){return this.eV(e|0)}),j.w=(function(e){return this.eV(e)}),j.ad=(function(){return tC()}),j.ce=(function(){return this.cX}),new P().i(aT,`scala.collection.immutable.ArraySeq$ofLong`,{bt:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function sT(e){this.c5=null,this.c5=e}j=sT.prototype=new Vw,j.constructor=sT;function cT(){}cT.prototype=j,j.ad=(function(){return Vf().kp($i(this.c5).Q.Q())}),j.t=(function(){return this.c5.a.length}),j.w=(function(e){return this.c5.a[e]}),j.C=(function(){var e=G();return e.ks(this.c5,e.ah)}),j.x=(function(e){return e instanceof sT?wf().kV(this.c5,e.c5):SC(this,e)}),j.m=(function(){return hb(new gb,this.c5)}),j.i=(function(e){return this.w(e|0)}),j.ce=(function(){return this.c5}),new P().i(sT,`scala.collection.immutable.ArraySeq$ofRef`,{bu:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function lT(e){this.cY=null,this.cY=e}j=lT.prototype=new Vw,j.constructor=lT;function uT(){}uT.prototype=j,j.t=(function(){return this.cY.a.length}),j.eR=(function(e){return this.cY.a[e]}),j.C=(function(){var e=G();return e.kz(this.cY,e.ah)}),j.x=(function(e){return e instanceof lT?R().kT(this.cY,e.cY):SC(this,e)}),j.m=(function(){return new Mx(this.cY)}),j.i=(function(e){return this.eR(e|0)}),j.w=(function(e){return this.eR(e)}),j.ad=(function(){return _C()}),j.ce=(function(){return this.cY}),new P().i(lT,`scala.collection.immutable.ArraySeq$ofShort`,{bv:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function dT(e){this.dG=null,this.dG=e}j=dT.prototype=new Vw,j.constructor=dT;function fT(){}fT.prototype=j,j.t=(function(){return this.dG.a.length}),j.C=(function(){var e=G();return e.kA(this.dG,e.ah)}),j.x=(function(e){return e instanceof dT?this.dG.a.length===e.dG.a.length:SC(this,e)}),j.m=(function(){return new Px(this.dG)}),j.eW=(function(e){}),j.i=(function(e){this.eW(e|0)}),j.w=(function(e){this.eW(e)}),j.ad=(function(){return xC()}),j.ce=(function(){return this.dG}),new P().i(dT,`scala.collection.immutable.ArraySeq$ofUnit`,{bw:1,V:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Z:1,a:1});function pT(e,t,n,r){for(;;)if(t===r)return n.c()?0:1;else if(n.c())return-1;else{var i=1+t|0,a=n.u();t=i,n=a}}function mT(e,t,n){for(;;)if(t===n)return!0;else{var r=t.c(),i=n.c();if(!(r||i)&&H().s(t.z(),n.z())){var a=t.u(),o=n.u();t=a,n=o}else return r&&i}}function hT(){}j=hT.prototype=new ZC,j.constructor=hT;function gT(){}gT.prototype=j,j.cc=(function(e){return $x(this,e)}),j.m=(function(){return new G_(this)}),j.bd=(function(){return`LinearSeq`}),j.w=(function(e){return V_(this,e)}),j.eo=(function(e){return H_(this,e)}),j.dy=(function(){return wv()}),j.kb=(function(e){if(this.c())return e;if(e.c())return this;for(var t=new WT(e.z(),this),n=t,r=e.u();!r.c();){var i=new WT(r.z(),this);n.as=i,n=i,r=r.u()}return t}),j.c=(function(){return this===$()}),j.hv=(function(e){if(e instanceof hT)return this.kb(e);if(e.B()===0)return this;if(e instanceof hE&&this.c())return e.lw();var t=e.m();if(t.n()){for(var n=new WT(t.g(),this),r=n;t.n();){var i=new WT(t.g(),this);r.as=i,r=i}return n}else return this}),j.kn=(function(e){return e instanceof hT?e.kb(this):Db(this,e)}),j.nB=(function(e){if(this===$())return $();for(var t=new WT(e.i(this.z()),$()),n=t,r=this.u();r!==$();){var i=new WT(e.i(r.z()),$());n.as=i,n=i,r=r.u()}return t}),j.ba=(function(e){for(var t=this;!t.c();)e.i(t.z()),t=t.u()}),j.t=(function(){for(var e=this,t=0;!e.c();)t=1+t|0,e=e.u();return t}),j.bo=(function(e){return e<0?1:pT(this,0,this,e)}),j.bV=(function(e){for(var t=this;!t.c();){if(H().s(t.z(),e))return!0;t=t.u()}return!1}),j.bJ=(function(){return`List`}),j.x=(function(e){return e instanceof hT?mT(this,this,e):SC(this,e)}),j.i=(function(e){return V_(this,e|0)}),j.kM=(function(e){return Qx(this,e,this)}),j.c0=(function(e){return this.nB(e)}),j.bb=(function(){return wv()});function _T(){this.d=null}j=_T.prototype=new Ww,j.constructor=_T;function vT(){}vT.prototype=j;function yT(e){this.db=null,this.db=e}j=yT.prototype=new Kw,j.constructor=yT;function bT(){}bT.prototype=j,j.t=(function(){return this.db.a.length}),j.C=(function(){var e=G();return e.kB(this.db,e.ah)}),j.x=(function(e){return e instanceof yT?R().kU(this.db,e.db):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Ix(this.db)}),j.eX=(function(e){return this.db.a[e]}),j.i=(function(e){return this.eX(e|0)}),j.w=(function(e){return this.eX(e)}),j.ad=(function(){return jS()}),j.bI=(function(){return this.db}),new P().i(yT,`scala.collection.mutable.ArraySeq$ofBoolean`,{bJ:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function xT(e){this.dc=null,this.dc=e}j=xT.prototype=new Kw,j.constructor=xT;function ST(){}ST.prototype=j,j.t=(function(){return this.dc.a.length}),j.eP=(function(e){return this.dc.a[e]}),j.C=(function(){var e=G();return e.kt(this.dc,e.ah)}),j.x=(function(e){return e instanceof xT?R().kO(this.dc,e.dc):Gw.prototype.x.call(this,e)}),j.m=(function(){return new bx(this.dc)}),j.i=(function(e){return this.eP(e|0)}),j.w=(function(e){return this.eP(e)}),j.ad=(function(){return FS()}),j.bI=(function(){return this.dc}),new P().i(xT,`scala.collection.mutable.ArraySeq$ofByte`,{bK:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function CT(e){this.by=null,this.by=e}j=CT.prototype=new Kw,j.constructor=CT;function wT(){}wT.prototype=j,j.t=(function(){return this.by.a.length}),j.eQ=(function(e){return this.by.a[e]}),j.C=(function(){var e=G();return e.ku(this.by,e.ah)}),j.x=(function(e){return e instanceof CT?R().kP(this.by,e.by):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Sx(this.by)}),j.dn=(function(e,t,n,r){var i=e.aS;t.length!==0&&(i.q=``+i.q+t);var a=this.by.a.length;if(a!==0)if(n===``)i.kl(this.by);else{i.t();var o=this.by.a[0],s=``+sa(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.by.a[c],u=``+sa(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),j.i=(function(e){return ga(this.eQ(e|0))}),j.w=(function(e){return ga(this.eQ(e))}),j.ad=(function(){return zS()}),j.bI=(function(){return this.by}),new P().i(CT,`scala.collection.mutable.ArraySeq$ofChar`,{bL:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function TT(e){this.dd=null,this.dd=e}j=TT.prototype=new Kw,j.constructor=TT;function ET(){}ET.prototype=j,j.t=(function(){return this.dd.a.length}),j.C=(function(){var e=G();return e.kv(this.dd,e.ah)}),j.x=(function(e){return e instanceof TT?R().kQ(this.dd,e.dd):Gw.prototype.x.call(this,e)}),j.m=(function(){return new wx(this.dd)}),j.eS=(function(e){return this.dd.a[e]}),j.i=(function(e){return this.eS(e|0)}),j.w=(function(e){return this.eS(e)}),j.ad=(function(){return US()}),j.bI=(function(){return this.dd}),new P().i(TT,`scala.collection.mutable.ArraySeq$ofDouble`,{bM:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function DT(e){this.de=null,this.de=e}j=DT.prototype=new Kw,j.constructor=DT;function OT(){}OT.prototype=j,j.t=(function(){return this.de.a.length}),j.C=(function(){var e=G();return e.kw(this.de,e.ah)}),j.x=(function(e){return e instanceof DT?R().kR(this.de,e.de):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Ex(this.de)}),j.eT=(function(e){return this.de.a[e]}),j.i=(function(e){return this.eT(e|0)}),j.w=(function(e){return this.eT(e)}),j.ad=(function(){return qS()}),j.bI=(function(){return this.de}),new P().i(DT,`scala.collection.mutable.ArraySeq$ofFloat`,{bN:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function kT(e){this.df=null,this.df=e}j=kT.prototype=new Kw,j.constructor=kT;function AT(){}AT.prototype=j,j.t=(function(){return this.df.a.length}),j.C=(function(){var e=G();return e.kx(this.df,e.ah)}),j.x=(function(e){return e instanceof kT?R().h5(this.df,e.df):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Ox(this.df)}),j.eU=(function(e){return this.df.a[e]}),j.i=(function(e){return this.eU(e|0)}),j.w=(function(e){return this.eU(e)}),j.ad=(function(){return ZS()}),j.bI=(function(){return this.df}),new P().i(kT,`scala.collection.mutable.ArraySeq$ofInt`,{bO:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function jT(e){this.dg=null,this.dg=e}j=jT.prototype=new Kw,j.constructor=jT;function MT(){}MT.prototype=j,j.t=(function(){return this.dg.a.length}),j.C=(function(){var e=G();return e.ky(this.dg,e.ah)}),j.x=(function(e){return e instanceof jT?R().kS(this.dg,e.dg):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Ax(this.dg)}),j.eV=(function(e){return this.dg.a[e]}),j.i=(function(e){return this.eV(e|0)}),j.w=(function(e){return this.eV(e)}),j.ad=(function(){return tC()}),j.bI=(function(){return this.dg}),new P().i(jT,`scala.collection.mutable.ArraySeq$ofLong`,{bP:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function NT(e){this.cs=null,this.cs=e}j=NT.prototype=new Kw,j.constructor=NT;function PT(){}PT.prototype=j,j.ad=(function(){return Vf().kp($i(this.cs).Q.Q())}),j.t=(function(){return this.cs.a.length}),j.w=(function(e){return this.cs.a[e]}),j.C=(function(){var e=G();return e.ks(this.cs,e.ah)}),j.x=(function(e){return e instanceof NT?wf().kV(this.cs,e.cs):Gw.prototype.x.call(this,e)}),j.m=(function(){return hb(new gb,this.cs)}),j.i=(function(e){return this.w(e|0)}),j.bI=(function(){return this.cs}),new P().i(NT,`scala.collection.mutable.ArraySeq$ofRef`,{bQ:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function FT(e){this.dh=null,this.dh=e}j=FT.prototype=new Kw,j.constructor=FT;function IT(){}IT.prototype=j,j.t=(function(){return this.dh.a.length}),j.eR=(function(e){return this.dh.a[e]}),j.C=(function(){var e=G();return e.kz(this.dh,e.ah)}),j.x=(function(e){return e instanceof FT?R().kT(this.dh,e.dh):Gw.prototype.x.call(this,e)}),j.m=(function(){return new Mx(this.dh)}),j.i=(function(e){return this.eR(e|0)}),j.w=(function(e){return this.eR(e)}),j.ad=(function(){return _C()}),j.bI=(function(){return this.dh}),new P().i(FT,`scala.collection.mutable.ArraySeq$ofShort`,{bR:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function LT(e){this.dM=null,this.dM=e}j=LT.prototype=new Kw,j.constructor=LT;function RT(){}RT.prototype=j,j.t=(function(){return this.dM.a.length}),j.C=(function(){var e=G();return e.kA(this.dM,e.ah)}),j.x=(function(e){return e instanceof LT?this.dM.a.length===e.dM.a.length:Gw.prototype.x.call(this,e)}),j.m=(function(){return new Px(this.dM)}),j.eW=(function(e){}),j.i=(function(e){this.eW(e|0)}),j.w=(function(e){this.eW(e)}),j.ad=(function(){return xC()}),j.bI=(function(){return this.dM}),new P().i(LT,`scala.collection.mutable.ArraySeq$ofUnit`,{bS:1,W:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function zT(e,t,n,r){return e.h=n,e.j=r,Hw(e,t),e}function BT(){this.d=null,this.h=null,this.j=0}j=BT.prototype=new vT,j.constructor=BT;function VT(){}VT.prototype=j;function HT(e){this.d=null,Hw(this,e)}j=HT.prototype=new vT,j.constructor=HT;function UT(){}UT.prototype=j,j.w=(function(e){if(e>=0&&e<this.d.a.length)return this.d.a[e];throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.d.a.length){var n=this.d.f();return n.a[e]=t,new HT(n)}else throw this.aD(e)}),j.dp=(function(e){if(this.d.a.length<32)return new HT(V().ej(this.d,e));var t=this.d,n=V().b9,r=new N(1);return r.a[0]=e,new $T(t,32,n,r,33)}),j.c1=(function(e){return new HT(V().bL(this.d,e))}),j.cg=(function(){return 1}),j.cf=(function(e){return this.d}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.d.a.length)return this.d.a[t];throw this.aD(t)}),new P().i(HT,`scala.collection.immutable.Vector1`,{fM:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function WT(e,t){this.gy=null,this.as=null,this.gy=e,this.as=t}j=WT.prototype=new gT,j.constructor=WT;function GT(){}GT.prototype=j,j.z=(function(){return this.gy}),j.cG=(function(){return`::`}),j.cE=(function(){return 2}),j.cF=(function(e){switch(e){case 0:return this.gy;case 1:return this.as;default:return W().f7(e)}}),j.dS=(function(){return new Dy(this)}),j.u=(function(){return this.as}),new P().i(WT,`scala.collection.immutable.$colon$colon`,{f8:1,aI:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,bm:1,s:1,k:1,z:1,T:1,a:1,a9:1});function KT(){}j=KT.prototype=new gT,j.constructor=KT;function qT(){}qT.prototype=j,j.hj=(function(){throw new o_(`head of empty list`)}),j.oo=(function(){throw new i_(`tail of empty list`)}),j.B=(function(){return 0}),j.m=(function(){return J().K}),j.cG=(function(){return`Nil`}),j.cE=(function(){return 0}),j.cF=(function(e){return W().f7(e)}),j.dS=(function(){return new Dy(this)}),j.u=(function(){this.oo()}),j.z=(function(){this.hj()}),new P().i(KT,`scala.collection.immutable.Nil$`,{fC:1,aI:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aG:1,an:1,aC:1,aH:1,bm:1,s:1,k:1,z:1,T:1,a:1,a9:1});var JT;function $(){return JT||=new KT,JT}function YT(){this.d=null,this.h=null,this.j=0,zT(this,V().gL,V().gL,0)}j=YT.prototype=new VT,j.constructor=YT;function XT(){}XT.prototype=j,j.ko=(function(e){throw this.aD(e)}),j.dz=(function(e,t){throw this.aD(e)}),j.dp=(function(e){var t=new N(1);return t.a[0]=e,new HT(t)}),j.cg=(function(){return 0}),j.cf=(function(e){return null}),j.x=(function(e){return this===e||!(e instanceof Uw)&&SC(this,e)}),j.aD=(function(e){return Zg(new Qg,e+` is out of bounds (empty vector)`)}),j.c0=(function(e){return this}),j.i=(function(e){this.ko(e|0)}),j.w=(function(e){this.ko(e)}),new P().i(YT,`scala.collection.immutable.Vector0$`,{fL:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});var ZT;function QT(){return ZT||=new YT,ZT}function $T(e,t,n,r,i){this.d=null,this.h=null,this.j=0,this.bn=0,this.b3=null,this.bn=t,this.b3=n,zT(this,e,r,i)}j=$T.prototype=new VT,j.constructor=$T;function eE(){}eE.prototype=j,j.w=(function(e){if(e>=0&&e<this.j){var t=e-this.bn|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b3.a.length?this.b3.a[n].a[r]:this.h.a[31&t]}else return this.d.a[e]}else throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.j)if(e>=this.bn){var n=e-this.bn|0,r=n>>>5|0,i=31&n;if(r<this.b3.a.length){var a=this.b3.f(),o=a.a[r].f();return o.a[i]=t,a.a[r]=o,new $T(this.d,this.bn,a,this.h,this.j)}else{var s=this.h.f();return s.a[i]=t,new $T(this.d,this.bn,this.b3,s,this.j)}}else{var c=this.d.f();return c.a[e]=t,new $T(c,this.bn,this.b3,this.h,this.j)}else throw this.aD(e)}),j.dp=(function(e){if(this.h.a.length<32){var t=V().ej(this.h,e),n=1+this.j|0;return new $T(this.d,this.bn,this.b3,t,n)}else if(this.b3.a.length<30){var r=V().G(this.b3,this.h),i=new N(1);i.a[0]=e;var a=1+this.j|0;return new $T(this.d,this.bn,r,i,a)}else{var o=this.d,s=this.bn,c=this.b3,l=this.bn,u=V().c9,d=this.h,f=new(F.r().r()).C(1);f.a[0]=d;var p=new N(1);return p.a[0]=e,new tE(o,s,c,960+l|0,u,f,p,1+this.j|0)}}),j.c1=(function(e){var t=V().bL(this.d,e),n=V().a2(2,this.b3,e),r=V().bL(this.h,e);return new $T(t,this.bn,n,r,this.j)}),j.cg=(function(){return 3}),j.cf=(function(e){switch(e){case 0:return this.d;case 1:return this.b3;case 2:return this.h;default:throw new p_(e)}}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.bn|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b3.a.length?this.b3.a[r].a[i]:this.h.a[31&n]}else return this.d.a[t]}else throw this.aD(t)}),new P().i($T,`scala.collection.immutable.Vector2`,{fN:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function tE(e,t,n,r,i,a,o,s){this.d=null,this.h=null,this.j=0,this.b0=0,this.b8=null,this.b1=0,this.aO=null,this.aP=null,this.b0=t,this.b8=n,this.b1=r,this.aO=i,this.aP=a,zT(this,e,o,s)}j=tE.prototype=new VT,j.constructor=tE;function nE(){}nE.prototype=j,j.w=(function(e){if(e>=0&&e<this.j){var t=e-this.b1|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aO.a.length?this.aO.a[n].a[r].a[i]:r<this.aP.a.length?this.aP.a[r].a[i]:this.h.a[i]}else if(e>=this.b0){var a=e-this.b0|0;return this.b8.a[a>>>5|0].a[31&a]}else return this.d.a[e]}else throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.j)if(e>=this.b1){var n=e-this.b1|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aO.a.length){var o=this.aO.f(),s=o.a[r].f(),c=s.a[i].f();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new tE(this.d,this.b0,this.b8,this.b1,o,this.aP,this.h,this.j)}else if(i<this.aP.a.length){var l=this.aP.f(),u=l.a[i].f();return u.a[a]=t,l.a[i]=u,new tE(this.d,this.b0,this.b8,this.b1,this.aO,l,this.h,this.j)}else{var d=this.h.f();return d.a[a]=t,new tE(this.d,this.b0,this.b8,this.b1,this.aO,this.aP,d,this.j)}}else if(e>=this.b0){var f=e-this.b0|0,p=this.b8,m=f>>>5|0,h=31&f,g=p.f(),_=g.a[m].f();return _.a[h]=t,g.a[m]=_,new tE(this.d,this.b0,g,this.b1,this.aO,this.aP,this.h,this.j)}else{var v=this.d.f();return v.a[e]=t,new tE(v,this.b0,this.b8,this.b1,this.aO,this.aP,this.h,this.j)}else throw this.aD(e)}),j.dp=(function(e){if(this.h.a.length<32){var t=V().ej(this.h,e),n=1+this.j|0;return new tE(this.d,this.b0,this.b8,this.b1,this.aO,this.aP,t,n)}else if(this.aP.a.length<31){var r=V().G(this.aP,this.h),i=new N(1);i.a[0]=e;var a=1+this.j|0;return new tE(this.d,this.b0,this.b8,this.b1,this.aO,r,i,a)}else if(this.aO.a.length<30){var o=V().G(this.aO,V().G(this.aP,this.h)),s=V().b9,c=new N(1);c.a[0]=e;var l=1+this.j|0;return new tE(this.d,this.b0,this.b8,this.b1,o,s,c,l)}else{var u=this.d,d=this.b0,f=this.b8,p=this.b1,m=this.aO,h=this.b1,g=V().ee,_=V().G(this.aP,this.h),v=new(F.r().r().r()).C(1);v.a[0]=_;var y=V().b9,b=new N(1);return b.a[0]=e,new rE(u,d,f,p,m,30720+h|0,g,v,y,b,1+this.j|0)}}),j.c1=(function(e){var t=V().bL(this.d,e),n=V().a2(2,this.b8,e),r=V().a2(3,this.aO,e),i=V().a2(2,this.aP,e),a=V().bL(this.h,e);return new tE(t,this.b0,n,this.b1,r,i,a,this.j)}),j.cg=(function(){return 5}),j.cf=(function(e){switch(e){case 0:return this.d;case 1:return this.b8;case 2:return this.aO;case 3:return this.aP;case 4:return this.h;default:throw new p_(e)}}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.b1|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aO.a.length?this.aO.a[r].a[i].a[a]:i<this.aP.a.length?this.aP.a[i].a[a]:this.h.a[a]}else if(t>=this.b0){var o=t-this.b0|0;return this.b8.a[o>>>5|0].a[31&o]}else return this.d.a[t]}else throw this.aD(t)}),new P().i(tE,`scala.collection.immutable.Vector3`,{fO:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function rE(e,t,n,r,i,a,o,s,c,l,u){this.d=null,this.h=null,this.j=0,this.aF=0,this.aV=null,this.aG=0,this.aW=null,this.aH=0,this.au=null,this.aw=null,this.av=null,this.aF=t,this.aV=n,this.aG=r,this.aW=i,this.aH=a,this.au=o,this.aw=s,this.av=c,zT(this,e,l,u)}j=rE.prototype=new VT,j.constructor=rE;function iE(){}iE.prototype=j,j.w=(function(e){if(e>=0&&e<this.j){var t=e-this.aH|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.au.a.length?this.au.a[n].a[r].a[i].a[a]:r<this.aw.a.length?this.aw.a[r].a[i].a[a]:i<this.av.a.length?this.av.a[i].a[a]:this.h.a[a]}else if(e>=this.aG){var o=e-this.aG|0;return this.aW.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aF){var s=e-this.aF|0;return this.aV.a[s>>>5|0].a[31&s]}else return this.d.a[e]}else throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.j)if(e>=this.aH){var n=e-this.aH|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.au.a.length){var s=this.au.f(),c=s.a[r].f(),l=c.a[i].f(),u=l.a[a].f();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,s,this.aw,this.av,this.h,this.j)}else if(i<this.aw.a.length){var d=this.aw.f(),f=d.a[i].f(),p=f.a[a].f();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,d,this.av,this.h,this.j)}else if(a<this.av.a.length){var m=this.av.f(),h=m.a[a].f();return h.a[o]=t,m.a[a]=h,new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,this.aw,m,this.h,this.j)}else{var g=this.h.f();return g.a[o]=t,new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,this.aw,this.av,g,this.j)}}else if(e>=this.aG){var _=e-this.aG|0,v=this.aW,y=_>>>10|0,b=31&(_>>>5|0),ee=31&_,te=v.f(),x=te.a[y].f(),S=x.a[b].f();return S.a[ee]=t,x.a[b]=S,te.a[y]=x,new rE(this.d,this.aF,this.aV,this.aG,te,this.aH,this.au,this.aw,this.av,this.h,this.j)}else if(e>=this.aF){var C=e-this.aF|0,ne=this.aV,re=C>>>5|0,ie=31&C,ae=ne.f(),w=ae.a[re].f();return w.a[ie]=t,ae.a[re]=w,new rE(this.d,this.aF,ae,this.aG,this.aW,this.aH,this.au,this.aw,this.av,this.h,this.j)}else{var T=this.d.f();return T.a[e]=t,new rE(T,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,this.aw,this.av,this.h,this.j)}else throw this.aD(e)}),j.dp=(function(e){if(this.h.a.length<32){var t=V().ej(this.h,e),n=1+this.j|0;return new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,this.aw,this.av,t,n)}else if(this.av.a.length<31){var r=V().G(this.av,this.h),i=new N(1);i.a[0]=e;var a=1+this.j|0;return new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,this.aw,r,i,a)}else if(this.aw.a.length<31){var o=V().G(this.aw,V().G(this.av,this.h)),s=V().b9,c=new N(1);c.a[0]=e;var l=1+this.j|0;return new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,this.au,o,s,c,l)}else if(this.au.a.length<30){var u=V().G(this.au,V().G(this.aw,V().G(this.av,this.h))),d=V().c9,f=V().b9,p=new N(1);p.a[0]=e;var m=1+this.j|0;return new rE(this.d,this.aF,this.aV,this.aG,this.aW,this.aH,u,d,f,p,m)}else{var h=this.d,g=this.aF,_=this.aV,v=this.aG,y=this.aW,b=this.aH,ee=this.au,te=this.aH,x=V().gM,S=V().G(this.aw,V().G(this.av,this.h)),C=new(F.r().r().r().r()).C(1);C.a[0]=S;var ne=V().c9,re=V().b9,ie=new N(1);return ie.a[0]=e,new aE(h,g,_,v,y,b,ee,983040+te|0,x,C,ne,re,ie,1+this.j|0)}}),j.c1=(function(e){var t=V().bL(this.d,e),n=V().a2(2,this.aV,e),r=V().a2(3,this.aW,e),i=V().a2(4,this.au,e),a=V().a2(3,this.aw,e),o=V().a2(2,this.av,e),s=V().bL(this.h,e);return new rE(t,this.aF,n,this.aG,r,this.aH,i,a,o,s,this.j)}),j.cg=(function(){return 7}),j.cf=(function(e){switch(e){case 0:return this.d;case 1:return this.aV;case 2:return this.aW;case 3:return this.au;case 4:return this.aw;case 5:return this.av;case 6:return this.h;default:throw new p_(e)}}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.aH|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.au.a.length?this.au.a[r].a[i].a[a].a[o]:i<this.aw.a.length?this.aw.a[i].a[a].a[o]:a<this.av.a.length?this.av.a[a].a[o]:this.h.a[o]}else if(t>=this.aG){var s=t-this.aG|0;return this.aW.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aF){var c=t-this.aF|0;return this.aV.a[c>>>5|0].a[31&c]}else return this.d.a[t]}else throw this.aD(t)}),new P().i(rE,`scala.collection.immutable.Vector4`,{fP:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function aE(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.d=null,this.h=null,this.j=0,this.ak=0,this.az=null,this.al=0,this.aA=null,this.am=0,this.aB=null,this.an=0,this.a5=null,this.a8=null,this.a7=null,this.a6=null,this.ak=t,this.az=n,this.al=r,this.aA=i,this.am=a,this.aB=o,this.an=s,this.a5=c,this.a8=l,this.a7=u,this.a6=d,zT(this,e,f,p)}j=aE.prototype=new VT,j.constructor=aE;function oE(){}oE.prototype=j,j.w=(function(e){if(e>=0&&e<this.j){var t=e-this.an|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a5.a.length?this.a5.a[n].a[r].a[i].a[a].a[o]:r<this.a8.a.length?this.a8.a[r].a[i].a[a].a[o]:i<this.a7.a.length?this.a7.a[i].a[a].a[o]:a<this.a6.a.length?this.a6.a[a].a[o]:this.h.a[o]}else if(e>=this.am){var s=e-this.am|0;return this.aB.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.al){var c=e-this.al|0;return this.aA.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.ak){var l=e-this.ak|0;return this.az.a[l>>>5|0].a[31&l]}else return this.d.a[e]}else throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.j)if(e>=this.an){var n=e-this.an|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a5.a.length){var c=this.a5.f(),l=c.a[r].f(),u=l.a[i].f(),d=u.a[a].f(),f=d.a[o].f();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,c,this.a8,this.a7,this.a6,this.h,this.j)}else if(i<this.a8.a.length){var p=this.a8.f(),m=p.a[i].f(),h=m.a[a].f(),g=h.a[o].f();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,p,this.a7,this.a6,this.h,this.j)}else if(a<this.a7.a.length){var _=this.a7.f(),v=_.a[a].f(),y=v.a[o].f();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,_,this.a6,this.h,this.j)}else if(o<this.a6.a.length){var b=this.a6.f(),ee=b.a[o].f();return ee.a[s]=t,b.a[o]=ee,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,b,this.h,this.j)}else{var te=this.h.f();return te.a[s]=t,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,this.a6,te,this.j)}}else if(e>=this.am){var x=e-this.am|0,S=this.aB,C=x>>>15|0,ne=31&(x>>>10|0),re=31&(x>>>5|0),ie=31&x,ae=S.f(),w=ae.a[C].f(),T=w.a[ne].f(),E=T.a[re].f();return E.a[ie]=t,T.a[re]=E,w.a[ne]=T,ae.a[C]=w,new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,ae,this.an,this.a5,this.a8,this.a7,this.a6,this.h,this.j)}else if(e>=this.al){var oe=e-this.al|0,se=this.aA,ce=oe>>>10|0,le=31&(oe>>>5|0),ue=31&oe,de=se.f(),fe=de.a[ce].f(),pe=fe.a[le].f();return pe.a[ue]=t,fe.a[le]=pe,de.a[ce]=fe,new aE(this.d,this.ak,this.az,this.al,de,this.am,this.aB,this.an,this.a5,this.a8,this.a7,this.a6,this.h,this.j)}else if(e>=this.ak){var me=e-this.ak|0,he=this.az,ge=me>>>5|0,_e=31&me,ve=he.f(),ye=ve.a[ge].f();return ye.a[_e]=t,ve.a[ge]=ye,new aE(this.d,this.ak,ve,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,this.a6,this.h,this.j)}else{var be=this.d.f();return be.a[e]=t,new aE(be,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,this.a6,this.h,this.j)}else throw this.aD(e)}),j.dp=(function(e){if(this.h.a.length<32){var t=V().ej(this.h,e),n=1+this.j|0;return new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,this.a6,t,n)}else if(this.a6.a.length<31){var r=V().G(this.a6,this.h),i=new N(1);i.a[0]=e;var a=1+this.j|0;return new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,this.a7,r,i,a)}else if(this.a7.a.length<31){var o=V().G(this.a7,V().G(this.a6,this.h)),s=V().b9,c=new N(1);c.a[0]=e;var l=1+this.j|0;return new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,this.a8,o,s,c,l)}else if(this.a8.a.length<31){var u=V().G(this.a8,V().G(this.a7,V().G(this.a6,this.h))),d=V().c9,f=V().b9,p=new N(1);p.a[0]=e;var m=1+this.j|0;return new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,this.a5,u,d,f,p,m)}else if(this.a5.a.length<30){var h=V().G(this.a5,V().G(this.a8,V().G(this.a7,V().G(this.a6,this.h)))),g=V().ee,_=V().c9,v=V().b9,y=new N(1);y.a[0]=e;var b=1+this.j|0;return new aE(this.d,this.ak,this.az,this.al,this.aA,this.am,this.aB,this.an,h,g,_,v,y,b)}else{var ee=this.d,te=this.ak,x=this.az,S=this.al,C=this.aA,ne=this.am,re=this.aB,ie=this.an,ae=this.a5,w=this.an,T=V().jP,E=V().G(this.a8,V().G(this.a7,V().G(this.a6,this.h))),oe=new(F.r().r().r().r().r()).C(1);oe.a[0]=E;var se=V().ee,ce=V().c9,le=V().b9,ue=new N(1);return ue.a[0]=e,new sE(ee,te,x,S,C,ne,re,ie,ae,31457280+w|0,T,oe,se,ce,le,ue,1+this.j|0)}}),j.c1=(function(e){var t=V().bL(this.d,e),n=V().a2(2,this.az,e),r=V().a2(3,this.aA,e),i=V().a2(4,this.aB,e),a=V().a2(5,this.a5,e),o=V().a2(4,this.a8,e),s=V().a2(3,this.a7,e),c=V().a2(2,this.a6,e),l=V().bL(this.h,e);return new aE(t,this.ak,n,this.al,r,this.am,i,this.an,a,o,s,c,l,this.j)}),j.cg=(function(){return 9}),j.cf=(function(e){switch(e){case 0:return this.d;case 1:return this.az;case 2:return this.aA;case 3:return this.aB;case 4:return this.a5;case 5:return this.a8;case 6:return this.a7;case 7:return this.a6;case 8:return this.h;default:throw new p_(e)}}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.an|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a5.a.length?this.a5.a[r].a[i].a[a].a[o].a[s]:i<this.a8.a.length?this.a8.a[i].a[a].a[o].a[s]:a<this.a7.a.length?this.a7.a[a].a[o].a[s]:o<this.a6.a.length?this.a6.a[o].a[s]:this.h.a[s]}else if(t>=this.am){var c=t-this.am|0;return this.aB.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.al){var l=t-this.al|0;return this.aA.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.ak){var u=t-this.ak|0;return this.az.a[u>>>5|0].a[31&u]}else return this.d.a[t]}else throw this.aD(t)}),new P().i(aE,`scala.collection.immutable.Vector5`,{fQ:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function sE(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.d=null,this.h=null,this.j=0,this.a9=0,this.ao=null,this.aa=0,this.ap=null,this.ab=0,this.aq=null,this.ac=0,this.ar=null,this.ag=0,this.X=null,this.a1=null,this.a0=null,this.Z=null,this.Y=null,this.a9=t,this.ao=n,this.aa=r,this.ap=i,this.ab=a,this.aq=o,this.ac=s,this.ar=c,this.ag=l,this.X=u,this.a1=d,this.a0=f,this.Z=p,this.Y=m,zT(this,e,h,g)}j=sE.prototype=new VT,j.constructor=sE;function cE(){}cE.prototype=j,j.w=(function(e){if(e>=0&&e<this.j){var t=e-this.ag|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.X.a.length?this.X.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a1.a.length?this.a1.a[r].a[i].a[a].a[o].a[s]:i<this.a0.a.length?this.a0.a[i].a[a].a[o].a[s]:a<this.Z.a.length?this.Z.a[a].a[o].a[s]:o<this.Y.a.length?this.Y.a[o].a[s]:this.h.a[s]}else if(e>=this.ac){var c=e-this.ac|0;return this.ar.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.ab){var l=e-this.ab|0;return this.aq.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.aa){var u=e-this.aa|0;return this.ap.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.a9){var d=e-this.a9|0;return this.ao.a[d>>>5|0].a[31&d]}else return this.d.a[e]}else throw this.aD(e)}),j.dz=(function(e,t){if(e>=0&&e<this.j)if(e>=this.ag){var n=e-this.ag|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.X.a.length){var l=this.X.f(),u=l.a[r].f(),d=u.a[i].f(),f=d.a[a].f(),p=f.a[o].f(),m=p.a[s].f();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,l,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(i<this.a1.a.length){var h=this.a1.f(),g=h.a[i].f(),_=g.a[a].f(),v=_.a[o].f(),y=v.a[s].f();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,h,this.a0,this.Z,this.Y,this.h,this.j)}else if(a<this.a0.a.length){var b=this.a0.f(),ee=b.a[a].f(),te=ee.a[o].f(),x=te.a[s].f();return x.a[c]=t,te.a[s]=x,ee.a[o]=te,b.a[a]=ee,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,b,this.Z,this.Y,this.h,this.j)}else if(o<this.Z.a.length){var S=this.Z.f(),C=S.a[o].f(),ne=C.a[s].f();return ne.a[c]=t,C.a[s]=ne,S.a[o]=C,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,S,this.Y,this.h,this.j)}else if(s<this.Y.a.length){var re=this.Y.f(),ie=re.a[s].f();return ie.a[c]=t,re.a[s]=ie,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,re,this.h,this.j)}else{var ae=this.h.f();return ae.a[c]=t,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,ae,this.j)}}else if(e>=this.ac){var w=e-this.ac|0,T=this.ar,E=w>>>20|0,oe=31&(w>>>15|0),se=31&(w>>>10|0),ce=31&(w>>>5|0),le=31&w,ue=T.f(),de=ue.a[E].f(),fe=de.a[oe].f(),pe=fe.a[se].f(),me=pe.a[ce].f();return me.a[le]=t,pe.a[ce]=me,fe.a[se]=pe,de.a[oe]=fe,ue.a[E]=de,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,ue,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.ab){var he=e-this.ab|0,ge=this.aq,_e=he>>>15|0,ve=31&(he>>>10|0),ye=31&(he>>>5|0),be=31&he,xe=ge.f(),Se=xe.a[_e].f(),Ce=Se.a[ve].f(),we=Ce.a[ye].f();return we.a[be]=t,Ce.a[ye]=we,Se.a[ve]=Ce,xe.a[_e]=Se,new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,xe,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.aa){var D=e-this.aa|0,Te=this.ap,Ee=D>>>10|0,De=31&(D>>>5|0),Oe=31&D,ke=Te.f(),Ae=ke.a[Ee].f(),je=Ae.a[De].f();return je.a[Oe]=t,Ae.a[De]=je,ke.a[Ee]=Ae,new sE(this.d,this.a9,this.ao,this.aa,ke,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else if(e>=this.a9){var Me=e-this.a9|0,Ne=this.ao,Pe=Me>>>5|0,Fe=31&Me,Ie=Ne.f(),Le=Ie.a[Pe].f();return Le.a[Fe]=t,Ie.a[Pe]=Le,new sE(this.d,this.a9,Ie,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else{var Re=this.d.f();return Re.a[e]=t,new sE(Re,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,this.h,this.j)}else throw this.aD(e)}),j.dp=(function(e){if(this.h.a.length<32){var t=V().ej(this.h,e),n=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,this.Y,t,n)}else if(this.Y.a.length<31){var r=V().G(this.Y,this.h),i=new N(1);i.a[0]=e;var a=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,this.Z,r,i,a)}else if(this.Z.a.length<31){var o=V().G(this.Z,V().G(this.Y,this.h)),s=V().b9,c=new N(1);c.a[0]=e;var l=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,this.a0,o,s,c,l)}else if(this.a0.a.length<31){var u=V().G(this.a0,V().G(this.Z,V().G(this.Y,this.h))),d=V().c9,f=V().b9,p=new N(1);p.a[0]=e;var m=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,this.a1,u,d,f,p,m)}else if(this.a1.a.length<31){var h=V().G(this.a1,V().G(this.a0,V().G(this.Z,V().G(this.Y,this.h)))),g=V().ee,_=V().c9,v=V().b9,y=new N(1);y.a[0]=e;var b=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,this.X,h,g,_,v,y,b)}else if(this.X.a.length<62){var ee=V().G(this.X,V().G(this.a1,V().G(this.a0,V().G(this.Z,V().G(this.Y,this.h))))),te=V().gM,x=V().ee,S=V().c9,C=V().b9,ne=new N(1);ne.a[0]=e;var re=1+this.j|0;return new sE(this.d,this.a9,this.ao,this.aa,this.ap,this.ab,this.aq,this.ac,this.ar,this.ag,ee,te,x,S,C,ne,re)}else throw Jg(new Yg)}),j.c1=(function(e){var t=V().bL(this.d,e),n=V().a2(2,this.ao,e),r=V().a2(3,this.ap,e),i=V().a2(4,this.aq,e),a=V().a2(5,this.ar,e),o=V().a2(6,this.X,e),s=V().a2(5,this.a1,e),c=V().a2(4,this.a0,e),l=V().a2(3,this.Z,e),u=V().a2(2,this.Y,e),d=V().bL(this.h,e);return new sE(t,this.a9,n,this.aa,r,this.ab,i,this.ac,a,this.ag,o,s,c,l,u,d,this.j)}),j.cg=(function(){return 11}),j.cf=(function(e){switch(e){case 0:return this.d;case 1:return this.ao;case 2:return this.ap;case 3:return this.aq;case 4:return this.ar;case 5:return this.X;case 6:return this.a1;case 7:return this.a0;case 8:return this.Z;case 9:return this.Y;case 10:return this.h;default:throw new p_(e)}}),j.c0=(function(e){return this.c1(e)}),j.i=(function(e){var t=e|0;if(t>=0&&t<this.j){var n=t-this.ag|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.X.a.length?this.X.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a1.a.length?this.a1.a[i].a[a].a[o].a[s].a[c]:a<this.a0.a.length?this.a0.a[a].a[o].a[s].a[c]:o<this.Z.a.length?this.Z.a[o].a[s].a[c]:s<this.Y.a.length?this.Y.a[s].a[c]:this.h.a[c]}else if(t>=this.ac){var l=t-this.ac|0;return this.ar.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.ab){var u=t-this.ab|0;return this.aq.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.aa){var d=t-this.aa|0;return this.ap.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.a9){var f=t-this.a9|0;return this.ao.a[f>>>5|0].a[31&f]}else return this.d.a[t]}else throw this.aD(t)}),new P().i(sE,`scala.collection.immutable.Vector6`,{fR:1,ab:1,ac:1,a6:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function lE(e,t){return e.aS=t,e}function uE(e){return lE(e,Wh(new Kh)),e}function dE(){this.aS=null}j=dE.prototype=new ow,j.constructor=dE;function fE(){}fE.prototype=j,j.bd=(function(){return`IndexedSeq`}),j.m=(function(){return yb(new bb,new JC(this))}),j.bo=(function(e){var t=this.aS.t();return t===e?0:t<e?-1:1}),j.aZ=(function(e){}),j.aX=(function(e){return Lf(this,e)}),j.t=(function(){return this.aS.t()}),j.B=(function(){return this.aS.t()}),j.mc=(function(e){var t=this.aS,n=``+sa(e);return t.q+=n,this}),j.I=(function(){return this.aS.q}),j.km=(function(e){if(e instanceof CT)this.aS.kl(e.by);else if(e instanceof dE){var t=this.aS,n=e.aS;t.q=``+t.q+n}else{var r=e.B();if(r!==0){var i=this.aS;r>0&&i.t();for(var a=e.m();a.n();){var o=``+sa(_a(a.g()));i.q+=o}}}return this}),j.c=(function(){return this.aS.t()===0}),j.bb=(function(){return _y()}),j.aY=(function(){return this.aS.q}),j.aT=(function(e){return this.mc(_a(e))}),j.f2=(function(e){return uE(new dE).km(e)}),j.f3=(function(e){return uE(new dE).km(e)}),j.i=(function(e){var t=e|0;return ga(this.aS.kD(t))}),j.w=(function(e){return ga(this.aS.kD(e))}),new P().i(dE,`scala.collection.mutable.StringBuilder`,{bW:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,a7:1,L:1,H:1,F:1,Q:1,p:1,q:1,R:1,ay:1,a:1});function pE(e){var t=new hE().fR(e);e.bG=t.bG,e.cv=t.cv,e.fA=!1}function mE(e){e.fB=1+e.fB|0,e.fA&&pE(e)}function hE(){this.fB=0,this.bG=null,this.cv=null,this.fA=!1,this.bH=0,this.fB=0,this.bG=$(),this.cv=null,this.fA=!1,this.bH=0}j=hE.prototype=new jw,j.constructor=hE;function gE(){}gE.prototype=j,j.aZ=(function(e){}),j.cc=(function(e){return Eb(this,e)}),j.m=(function(){return new Sy(this.bG.m(),new ih((()=>this.fB)))}),j.dy=(function(){return xy()}),j.w=(function(e){return V_(this.bG,e)}),j.t=(function(){return this.bH}),j.B=(function(){return this.bH}),j.c=(function(){return this.bH===0}),j.lw=(function(){return this.fA=!this.c(),this.bG}),j.mk=(function(e){mE(this);var t=new WT(e,$());return this.bH===0?this.bG=t:this.cv.as=t,this.cv=t,this.bH=1+this.bH|0,this}),j.fR=(function(e){var t=e.m();if(t.n()){var n=1,r=new WT(t.g(),$());for(this.bG=r;t.n();){var i=new WT(t.g(),$());r.as=i,r=i,n=1+n|0}this.bH=n,this.cv=r}return this}),j.mb=(function(e){var t=e.m();if(t.n()){var n=new hE().fR(t);mE(this),this.bH===0?this.bG=n.bG:this.cv.as=n.bG,this.cv=n.cv,this.bH=this.bH+n.bH|0}return this}),j.bd=(function(){return`ListBuffer`}),j.aX=(function(e){return this.mb(e)}),j.aT=(function(e){return this.mk(e)}),j.aY=(function(){return this.lw()}),j.i=(function(e){var t=e|0;return V_(this.bG,t)}),j.bb=(function(){return xy()}),new P().i(hE,`scala.collection.mutable.ListBuffer`,{bV:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,s:1,k:1,a7:1,L:1,T:1,a:1});function _E(e,t,n){return e.da=0,e.d9=t,e.ax=n,e}function vE(e){return _E(e,new N(16),0),e}function yE(){this.da=0,this.d9=null,this.ax=0}j=yE.prototype=new jw,j.constructor=yE;function bE(){}bE.prototype=j,j.cc=(function(e){return Eb(this,e)}),j.m=(function(){return this.ov().m()}),j.bo=(function(e){var t=this.ax;return t===e?0:t<e?-1:1}),j.B=(function(){return this.ax}),j.h4=(function(e){this.d9=$v().lr(this.d9,this.ax,e)}),j.aZ=(function(e){e>this.ax&&e>=1&&this.h4(e)}),j.w=(function(e){var t=1+e|0;if(e<0)throw ru().f6(e,-1+this.ax|0);if(t>this.ax)throw ru().f6(-1+t|0,-1+this.ax|0);return this.d9.a[e]}),j.ot=(function(e,t){var n=1+e|0;if(e<0)throw ru().f6(e,-1+this.ax|0);if(n>this.ax)throw ru().f6(-1+n|0,-1+this.ax|0);this.da=1+this.da|0,this.d9.a[e]=t}),j.t=(function(){return this.ax}),j.ov=(function(){return new QC(this,new ih((()=>this.da)))}),j.dy=(function(){return $v()}),j.mh=(function(e){this.da=1+this.da|0;var t=1+this.ax|0;return this.h4(t),this.ax=t,this.ot(-1+this.ax|0,e),this}),j.kh=(function(e){if(e instanceof yE){var t=e.ax;t>0&&(this.da=1+this.da|0,this.h4(this.ax+t|0),wf().eY(e.d9,0,this.d9,this.ax,t),this.ax=this.ax+t|0)}else Lf(this,e);return this}),j.bd=(function(){return`ArrayBuffer`}),j.bz=(function(e,t,n){var r=this.ax,i=ml().bK(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&wf().eY(this.d9,0,e,t,c),c}),j.aX=(function(e){return this.kh(e)}),j.aT=(function(e){return this.mh(e)}),j.bb=(function(){return $v()}),j.i=(function(e){return this.w(e|0)}),new P().i(yE,`scala.collection.mutable.ArrayBuffer`,{bI:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,bU:1,Q:1,p:1,q:1,R:1,s:1,k:1,T:1,a:1});function xE(e,t){return e.dl=t,e}function SE(e){return xE(e,[]),e}function CE(){this.dl=null}j=CE.prototype=new jw,j.constructor=CE;function wE(){}wE.prototype=j,j.aZ=(function(e){}),j.bd=(function(){return`IndexedSeq`}),j.m=(function(){return yb(new bb,new JC(this))}),j.bo=(function(e){var t=this.dl.length|0;return t===e?0:t<e?-1:1}),j.cc=(function(e){return Eb(this,e)}),j.dy=(function(){return My()}),j.w=(function(e){return this.dl[e]}),j.t=(function(){return this.dl.length|0}),j.B=(function(){return this.dl.length|0}),j.bJ=(function(){return`WrappedArray`}),j.aY=(function(){return this}),j.aT=(function(e){return this.dl.push(e),this}),j.i=(function(e){var t=e|0;return this.dl[t]}),j.bb=(function(){return My()}),new P().i(CE,`scala.scalajs.js.WrappedArray`,{h4:1,aK:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aL:1,H:1,F:1,at:1,s:1,k:1,Q:1,p:1,q:1,R:1,bU:1,L:1,a:1}),Zi=new z(0,0),Ia.z=Zi,lc(new(ab.r()).C([]));