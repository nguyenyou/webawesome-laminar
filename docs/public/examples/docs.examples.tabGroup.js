var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(e){super(`wa-tab-show`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},r=class extends Event{constructor(e){super(`wa-tab-hide`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const i=globalThis,a=i.ShadowRoot&&(i.ShadyCSS===void 0||i.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;var c=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(a&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=s.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}};const l=e=>new c(typeof e==`string`?e:e+``,void 0,o),u=(e,...t)=>new c(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,o),d=(e,t)=>{if(a)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=i.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},f=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:m,getOwnPropertyDescriptor:ee,getOwnPropertyNames:te,getOwnPropertySymbols:ne,getPrototypeOf:re}=Object,ie=globalThis,ae=ie.trustedTypes,oe=ae?ae.emptyScript:``,se=ie.reactiveElementPolyfillSupport,ce=(e,t)=>e,le={toAttribute(e,t){switch(t){case Boolean:e=e?oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ue=(e,t)=>!p(e,t),de={attribute:!0,type:String,converter:le,reflect:!1,useDefault:!1,hasChanged:ue};Symbol.metadata??=Symbol(`metadata`),ie.litPropertyMetadata??=new WeakMap;var fe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=de){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&m(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ee(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??de}static _$Ei(){if(this.hasOwnProperty(ce(`elementProperties`)))return;let e=re(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ce(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ce(`properties`))){let e=this.properties,t=[...te(e),...ne(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(f(e))}else e!==void 0&&t.push(f(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?le:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?le:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ue)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};fe.elementStyles=[],fe.shadowRootOptions={mode:`open`},fe[ce(`elementProperties`)]=new Map,fe[ce(`finalized`)]=new Map,se?.({ReactiveElement:fe}),(ie.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pe=globalThis,me=pe.trustedTypes,he=me?me.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ge=`$lit$`,_e=`lit$${Math.random().toFixed(9).slice(2)}$`,ve=`?`+_e,ye=`<${ve}>`,be=document,xe=()=>be.createComment(``),Se=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ce=Array.isArray,we=e=>Ce(e)||typeof e?.[Symbol.iterator]==`function`,Te=`[ 	
\f\r]`,Ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Oe=/>/g,ke=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ae=/'/g,je=/"/g,Me=/^(?:script|style|textarea|title)$/i,Ne=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Pe=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Fe=new WeakMap,Ie=be.createTreeWalker(be,129);function Le(e,t){if(!Ce(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return he===void 0?t:he.createHTML(t)}const Re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ee;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ee?c[1]===`!--`?o=De:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ke):(Me.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ke):o=Oe:o===ke?c[0]===`>`?(o=i??Ee,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ke:c[3]===`"`?je:Ae):o===je||o===Ae?o=ke:o===De||o===Oe?o=Ee:(o=ke,i=void 0);let d=o===ke&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ee?n+ye:l>=0?(r.push(s),n.slice(0,l)+ge+n.slice(l)+_e+d):n+_e+(l===-2?t:d)}return[Le(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Re(t,n);if(this.el=e.createElement(l,r),Ie.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ie.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ge)){let t=u[o++],n=i.getAttribute(e).split(_e),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?We:r[1]===`?`?Ge:r[1]===`@`?Ke:Ue}),i.removeAttribute(e)}else e.startsWith(_e)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Me.test(i.tagName)){let e=i.textContent.split(_e),t=e.length-1;if(t>0){i.textContent=me?me.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],xe()),Ie.nextNode(),c.push({type:2,index:++a});i.append(e[t],xe())}}}else if(i.nodeType===8)if(i.data===ve)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_e,e+1))!==-1;)c.push({type:7,index:a}),e+=_e.length-1}a++}}static createElement(e,t){let n=be.createElement(`template`);return n.innerHTML=e,n}};function Be(e,t,n=e,r){if(t===Pe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Se(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Be(e,i._$AS(e,t.values),i,r)),t}var Ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??be).importNode(t,!0);Ie.currentNode=r;let i=Ie.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new He(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new qe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ie.nextNode(),a++)}return Ie.currentNode=be,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},He=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Be(this,e,t),Se(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Pe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?we(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Se(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ze.createElement(Le(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ve(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Fe.get(e.strings);return t===void 0&&Fe.set(e.strings,t=new ze(e)),t}k(t){Ce(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(xe()),this.O(xe()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Be(this,e,t,0),a=!Se(e)||e!==this._$AH&&e!==Pe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Be(this,r[n+o],t,o),s===Pe&&(s=this._$AH[o]),a||=!Se(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},We=class extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ge=class extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Ke=class extends Ue{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Be(this,e,t,0)??h)===Pe)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}};const Je={M:ge,P:_e,A:ve,C:1,L:Re,R:Ve,D:we,V:Be,I:He,H:Ue,N:Ge,U:Ke,B:We,F:qe},Ye=pe.litHtmlPolyfillSupport;Ye?.(ze,He),(pe.litHtmlVersions??=[]).push(`3.3.1`);const Xe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new He(t.insertBefore(xe(),e),e,void 0,n??{})}return i._$AI(e),i},Ze=globalThis;var Qe=class extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Pe}};Qe._$litElement$=!0,Qe.finalized=!0,Ze.litElementHydrateSupport?.({LitElement:Qe});const $e=Ze.litElementPolyfillSupport;$e?.({LitElement:Qe}),(Ze.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var et=u`
  :host {
    --indicator-color: var(--wa-color-brand-fill-loud);
    --track-color: var(--wa-color-neutral-fill-normal);
    --track-width: 0.125rem;

    /* Private */
    --safe-track-width: max(0.5px, round(var(--track-width), 0.5px));

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tabs {
    display: flex;
    position: relative;
  }

  .indicator {
    position: absolute;
  }

  .tab-group-has-scroll-controls .nav-container {
    position: relative;
    padding: 0 1.5em;
  }

  .body {
    display: block;
  }

  .scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1.5em;
  }

  .scroll-button-start {
    inset-inline-start: 0;
  }

  .scroll-button-end {
    inset-inline-end: 0;
  }

  /*
    * Top
    */

  .tab-group-top {
    flex-direction: column;
  }

  .tab-group-top .nav-container {
    order: 1;
  }

  .tab-group-top .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-top .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-top .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-top .indicator {
    bottom: calc(-1 * var(--safe-track-width));
    border-bottom: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-top .body {
    order: 2;
  }

  .tab-group-top ::slotted(wa-tab[active]) {
    border-block-end: solid var(--safe-track-width) var(--indicator-color);
    margin-block-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-top .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Bottom
    */

  .tab-group-bottom {
    flex-direction: column;
  }

  .tab-group-bottom .nav-container {
    order: 2;
  }

  .tab-group-bottom .nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group-bottom .nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group-bottom .tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-bottom .indicator {
    top: calc(-1 * var(--safe-track-width));
    border-top: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-bottom .body {
    order: 1;
  }

  .tab-group-bottom ::slotted(wa-tab[active]) {
    border-block-start: solid var(--safe-track-width) var(--indicator-color);
    margin-block-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-bottom .body slot::slotted(wa-tab-panel) {
    --padding: var(--wa-space-xl) 0;
  }

  /*
    * Start
    */

  .tab-group-start {
    flex-direction: row;
  }

  .tab-group-start .nav-container {
    order: 1;
  }

  .tab-group-start .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-start .indicator {
    inset-inline-end: calc(-1 * var(--safe-track-width));
    border-right: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-start .body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group-start ::slotted(wa-tab[active]) {
    border-inline-end: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-end: calc(-1 * var(--safe-track-width));
  }

  .tab-group-start .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }

  /*
    * End
    */

  .tab-group-end {
    flex-direction: row;
  }

  .tab-group-end .nav-container {
    order: 2;
  }

  .tab-group-end .tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--safe-track-width) var(--track-color);
  }

  .tab-group-end .indicator {
    inset-inline-start: calc(-1 * var(--safe-track-width));
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
  }

  .tab-group-end .body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group-end ::slotted(wa-tab[active]) {
    border-inline-start: solid var(--safe-track-width) var(--indicator-color);
    margin-inline-start: calc(-1 * var(--safe-track-width));
  }

  .tab-group-end .body slot::slotted(wa-tab-panel) {
    --padding: 0 var(--wa-space-xl);
  }
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tt(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function nt(e,t,n=`vertical`,r=`smooth`){let i=tt(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function rt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var it=Object.defineProperty,at=Object.getOwnPropertyDescriptor,ot=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?at(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&it(t,n,i),i},st=(e,t,n)=>t.has(e)||ot(`Cannot `+n),ct=(e,t,n)=>(st(e,t,`read from private field`),n?n.call(e):t.get(e)),lt=(e,t,n)=>t.has(e)?ot(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ut=(e,t,n,r)=>(st(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const dt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ft={attribute:!0,type:String,converter:le,reflect:!1,hasChanged:ue},pt=(e=ft,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?pt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function mt(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ht=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function gt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ht(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ht(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _t=u`
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
`,vt=/;\s+$/;function yt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function bt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(vt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var xt,St=class extends Qe{constructor(){super(),lt(this,xt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[_t,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ct(this,xt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ut(this,xt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=bt({property:yt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=bt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};xt=new WeakMap,g([_()],St.prototype,`dir`,2),g([_()],St.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],St.prototype,`didSSR`,2);const Ct=new Set,wt=new Map;let Tt,Et=`ltr`,Dt=`en`;const Ot=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ot){let e=new MutationObserver(At);Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function kt(...e){e.map(e=>{let t=e.$code.toLowerCase();wt.has(t)?wt.set(t,Object.assign(Object.assign({},wt.get(t)),e)):wt.set(t,e),Tt||=e}),At()}function At(){Ot&&(Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language),[...Ct.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var jt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ct.add(this.host)}hostDisconnected(){Ct.delete(this.host)}dir(){return`${this.host.dir||Et}`.toLowerCase()}lang(){let e=`${this.host.lang||Dt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Tt?Tt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=wt.get(`${n}-${r}`),a=wt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Tt&&Tt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Tt&&Tt[e])i=Tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Mt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};kt(Mt);var Nt=Mt,Pt=class extends jt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};kt(Nt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},It=e=>(...t)=>({_$litDirective$:e,values:t});var Lt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Rt=It(class extends Lt{constructor(e){if(super(e),e.type!==Ft.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Pe}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends St{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Pt(this),this.hasScrollControls=!1,this.active=``,this.placement=`top`,this.activation=`auto`,this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let t=e.filter(e=>e.target.closest(`wa-tab-group`)===this);if(t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`wa-tab`).map(e=>e.target).find(e=>e.active);e&&e.closest(`wa-tab-group`)===this&&this.setActiveTab(e)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,t)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});t.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab`)}getAllPanels(){return[...this.defaultSlot.assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`wa-tab`);t?.closest(`wa-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`wa-tab`);if(t?.closest(`wa-tab-group`)===this){if([`Enter`,` `].includes(e.key)){t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault());return}if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`wa-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&nt(r,this.nav,`horizontal`),e.preventDefault()}}}}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:`auto`,...t},e.closest(`wa-tab-group`)===this&&e!==this.activeTab&&!e.disabled){let i=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),[`top`,`bottom`].includes(this.placement)&&nt(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(i&&this.dispatchEvent(new r({name:i.panel})),this.dispatchEvent(new n({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:`smooth`})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let e=this.hasUpdated?this.localize.dir()===`rtl`:this.dir===`rtl`;return Ne`
      <div
        part="base tab-group"
        class=${Rt({"tab-group":!0,"tab-group-top":this.placement===`top`,"tab-group-bottom":this.placement===`bottom`,"tab-group-start":this.placement===`start`,"tab-group-end":this.placement===`end`,"tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?Ne`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?`chevron-right`:`chevron-left`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToStart`)}
                  ></wa-icon>
                </wa-button>
              `:``}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?Ne`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?`chevron-left`:`chevron-right`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToEnd`)}
                  ></wa-icon>
                </wa-button>
              `:``}
        </div>

        <div part="body" class="body"><slot @slotchange=${this.syncTabsAndPanels}></slot></div>
      </div>
    `}};v.css=et,g([gt(`.tab-group`)],v.prototype,`tabGroup`,2),g([gt(`.body slot`)],v.prototype,`defaultSlot`,2),g([gt(`.nav`)],v.prototype,`nav`,2),g([mt()],v.prototype,`hasScrollControls`,2),g([_({reflect:!0})],v.prototype,`active`,2),g([_()],v.prototype,`placement`,2),g([_()],v.prototype,`activation`,2),g([_({attribute:`without-scroll-controls`,type:Boolean})],v.prototype,`withoutScrollControls`,2),g([rt(`active`)],v.prototype,`updateActiveTab`,1),g([rt(`withoutScrollControls`,{waitUntilFirstUpdate:!0})],v.prototype,`updateScrollControls`,1),v=g([dt(`wa-tab-group`)],v);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=u`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Bt=0,Vt=class extends St{constructor(){super(...arguments),this.attrId=++Bt,this.componentId=`wa-tab-panel-${this.attrId}`,this.name=``,this.active=!1,this.role=`tabpanel`}connectedCallback(){super.connectedCallback(),this.id=(this.id||``).length>0?this.id:this.componentId}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return Ne`
      <slot
        part="base"
        class=${Rt({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Vt.css=zt,g([_({reflect:!0})],Vt.prototype,`name`,2),g([_({type:Boolean,reflect:!0})],Vt.prototype,`active`,2),g([_({reflect:!0})],Vt.prototype,`role`,2),g([rt(`active`)],Vt.prototype,`handleActiveChange`,1),Vt=g([dt(`wa-tab-panel`)],Vt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ht=u`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
    font-weight: var(--wa-font-weight-action);
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font: inherit;
    padding: 1em 1.5em;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);

    ::slotted(wa-icon:first-child) {
      margin-inline-end: 0.5em;
    }

    ::slotted(wa-icon:last-child) {
      margin-inline-start: 0.5em;
    }
  }

  @media (hover: hover) {
    :host(:hover:not([disabled])) .tab {
      color: currentColor;
    }
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) .tab {
    outline: var(--wa-focus-ring);
    outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
  }

  :host([active]:not([disabled])) {
    color: var(--wa-color-brand-on-quiet);
  }

  :host([disabled]) .tab {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (forced-colors: active) {
    :host([active]:not([disabled])) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ut=0,y=class extends St{constructor(){super(...arguments),this.attrId=++Ut,this.componentId=`wa-tab-${this.attrId}`,this.panel=``,this.active=!1,this.disabled=!1,this.tabIndex=0,this.slot=`nav`,this.role=`tab`}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,Ne`
      <div
        part="base tab"
        class=${Rt({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};y.css=Ht,g([gt(`.tab`)],y.prototype,`tab`,2),g([_({reflect:!0})],y.prototype,`panel`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`active`,2),g([_({type:Boolean,reflect:!0})],y.prototype,`disabled`,2),g([_({type:Number,reflect:!0})],y.prototype,`tabIndex`,2),g([_({reflect:!0})],y.prototype,`slot`,2),g([_({reflect:!0})],y.prototype,`role`,2),g([rt(`active`)],y.prototype,`handleActiveChange`,1),g([rt(`disabled`)],y.prototype,`handleDisabledChange`,1),y=g([dt(`wa-tab`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Gt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Kt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),qt=class extends St{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Gt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Kt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};qt.formAssociated=!0,g([_({reflect:!0})],qt.prototype,`name`,2),g([_({type:Boolean})],qt.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],qt.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],qt.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],qt.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],qt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Jt={small:`s`,medium:`m`,large:`l`},Yt=new Set;function Xt(e,t){t in Jt&&!Yt.has(`${e}:${t}`)&&(Yt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Jt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Qt=u`
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
`,$t=u`
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
`,en=u`
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
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const tn=e=>e??h,nn=Symbol.for(``),rn=e=>{if(e?.r===nn)return e?._$litStatic$},an=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:nn}),on=new Map,sn=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=rn(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=on.get(e))===void 0&&(o.raw=o,on.set(e,t=o)),n=s}return e(t,...n)})(Ne);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends qt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Zt(this,`[default]`,`start`,`end`),this.localize=new Pt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Wt()]}handleSizeChange(){Xt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Gt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?an`a`:an`button`;return sn`
      <${t}
        part="base button"
        class=${Rt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${tn(e?void 0:this.disabled)}
        type=${tn(e?void 0:this.type)}
        title=${this.title}
        name=${tn(e?void 0:this.name)}
        value=${tn(e?void 0:this.value)}
        href=${tn(e?this.href:void 0)}
        target=${tn(e?this.target:void 0)}
        download=${tn(e?this.download:void 0)}
        rel=${tn(e&&this.rel?this.rel:void 0)}
        role=${tn(e?void 0:`button`)}
        aria-disabled=${tn(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?sn`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?sn`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};b.shadowRootOptions={...qt.shadowRootOptions,delegatesFocus:!0},b.css=[$t,en,Qt],g([gt(`.button`)],b.prototype,`button`,2),g([gt(`slot:not([name])`)],b.prototype,`labelSlot`,2),g([mt()],b.prototype,`invalid`,2),g([mt()],b.prototype,`isIconButton`,2),g([_()],b.prototype,`title`,2),g([_({reflect:!0})],b.prototype,`variant`,2),g([_({reflect:!0})],b.prototype,`appearance`,2),g([_({reflect:!0})],b.prototype,`size`,2),g([rt(`size`)],b.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],b.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],b.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],b.prototype,`withEnd`,2),g([_({type:Boolean})],b.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],b.prototype,`pill`,2),g([_()],b.prototype,`type`,2),g([_({reflect:!0})],b.prototype,`name`,2),g([_({reflect:!0})],b.prototype,`value`,2),g([_({reflect:!0})],b.prototype,`href`,2),g([_()],b.prototype,`target`,2),g([_()],b.prototype,`rel`,2),g([_()],b.prototype,`download`,2),g([_({attribute:`formaction`})],b.prototype,`formAction`,2),g([_({attribute:`formenctype`})],b.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],b.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],b.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],b.prototype,`formTarget`,2),g([rt(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),g([rt(`href`)],b.prototype,`handleHrefChange`,1),g([rt(`loading`,{waitUntilFirstUpdate:!0})],b.prototype,`handleLoadingChange`,1),b=g([dt(`wa-button`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cn=u`
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
`,ln=class extends St{constructor(){super(...arguments),this.localize=new Pt(this)}render(){return Ne`
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
    `}};ln.css=cn,ln=g([dt(`wa-spinner`)],ln);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var un=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},dn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},fn=u`
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
`,pn=``,mn=``;function hn(){return pn.replace(/\/$/,``)}function gn(e){mn=e}function _n(){if(!mn){let e=document.querySelector(`[data-fa-kit-code]`);e&&gn(e.getAttribute(`data-fa-kit-code`)||``)}return mn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vn=`7.3.0`;function yn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function bn(e,t,n){let r=yn(e,t,n),i=hn();if(i)return`${i}/${r}/${e}.svg`;let a=_n();return a.length>0?`https://ka-p.fontawesome.com/releases/v${vn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${vn}/svgs/${r}/${e}.svg`}var xn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>bn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Sn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Cn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},wn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Cn[n][e]??Cn.regular[e]??Cn.regular[`circle-question`];return r?Sn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Tn=`classic`,En=[xn,wn],Dn=new Set;function On(e){Dn.add(e)}function kn(e){Dn.delete(e)}function An(e){return En.find(t=>t.name===e)}function jn(){return Tn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Mn}=Je,Nn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pn=Symbol(),Fn=Symbol(),In,Ln=new Map,x=class extends St{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ne`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Pn:Fn}catch{return Fn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Pn;In||=new DOMParser;let r=In.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Pn}catch{return Pn}}}connectedCallback(){super.connectedCallback(),On(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),kn(this)}async getIconSource(){let e=An(this.library),t=this.family||jn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?An(this.library):void 0;if(!e){this.svg=null;return}let r=Ln.get(e);r||(r=this.resolveIcon(e,n),Ln.set(e,r));let i=await r;if(i===Fn&&Ln.delete(e),e===(await this.getIconSource()).url){if(Nn(i)){this.svg=i;return}switch(i){case Fn:case Pn:this.svg=null,this.dispatchEvent(new un);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new dn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=An(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ne`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=fn,g([mt()],x.prototype,`svg`,2),g([_({reflect:!0})],x.prototype,`name`,2),g([_({reflect:!0})],x.prototype,`family`,2),g([_({reflect:!0})],x.prototype,`variant`,2),g([_({reflect:!0})],x.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),g([_()],x.prototype,`src`,2),g([_()],x.prototype,`label`,2),g([_({reflect:!0})],x.prototype,`library`,2),g([_({type:Number,reflect:!0})],x.prototype,`rotate`,2),g([_({type:String,reflect:!0})],x.prototype,`flip`,2),g([_({type:String,reflect:!0})],x.prototype,`animation`,2),g([rt(`label`)],x.prototype,`handleLabelChange`,1),g([rt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=g([dt(`wa-icon`)],x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rn=t({default:()=>v}),zn=t({default:()=>Vt}),Bn=t({default:()=>y}),S;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Vn;function C(e){this.c=e}S=C.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function Hn(e){switch(typeof e){case`string`:return xd.l();case`number`:return rr(e)?e<<24>>24===e?mu.l():e<<16>>16===e?xu.l():gd.l():ir(e)?hd.l():md.l();case`boolean`:return Il.l();case`undefined`:return Qa.l();default:return e instanceof M?yd.l():e instanceof C?zl.l():e&&e.$classData?e.$classData.l():null}}function Un(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return rr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ir(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof C?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.h1()}}function Wn(e,t){switch(typeof e){case`string`:return bd(e,t);case`number`:return fd(e,t);case`boolean`:return Pl(e,t);case`undefined`:return Ya(e,t);default:return e&&e.$classData||e===null?e.m(t):e instanceof M?_d(e,t):e instanceof C?Rl(or(e),t):cr.prototype.m.call(e,t)}}function Gn(e){switch(typeof e){case`string`:return J(e);case`number`:return pd(e);case`boolean`:return Fl(e);case`undefined`:return Xa(e);default:return e&&e.$classData||e===null?e.u():e instanceof M?vd(e):e instanceof C?Ll(or(e)):cr.prototype.u.call(e)}}function Kn(e){return e===void 0?`undefined`:e.toString()}function qn(e,t){if(t===0)throw new pu(`/ by zero`);return e/t|0}function Jn(e,t){if(t===0)throw new pu(`/ by zero`);return e%t|0}function Yn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Xn(e){return String.fromCharCode(e)}function Zn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Qn=0,$n=new WeakMap;function er(e){switch(typeof e){case`string`:return J(e);case`number`:return pd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=$n.get(e);return r===void 0&&(r=Qn+1|0,Qn=r,$n.set(e,r)),r}}function tr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function nr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function rr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ir(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ar(e){return new C(e)}ar(0);function or(e){return e===null?0:e.c}function sr(e){return e===null?Vn:e}function cr(){}S=cr.prototype,S.constructor=cr;function w(){}w.prototype=S,S.u=(function(){return er(this)}),S.m=(function(e){return this===e}),S.y=(function(){var e=this.u();return Un(this)+`@`+(+(e>>>0)).toString(16)}),S.toString=(function(){return this.y()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=T.prototype=new w,S.constructor=T,S.a2=(function(e,t,n,r){Zn(this.a,e,t.a,n,r)}),S.Y=(function(){return new T(this.a.slice())});function lr(){}lr.prototype=S;function ur(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=ur.prototype=new w,S.constructor=ur,S.a2=(function(e,t,n,r){Zn(this.a,e,t.a,n,r)}),S.Y=(function(){return new ur(this.a.slice())});function dr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}S=dr.prototype=new w,S.constructor=dr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new dr(this.a.slice())});function fr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}S=fr.prototype=new w,S.constructor=fr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new fr(this.a.slice())});function pr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}S=pr.prototype=new w,S.constructor=pr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new pr(this.a.slice())});function mr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}S=mr.prototype=new w,S.constructor=mr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new mr(this.a.slice())});function hr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Vn}else this.a=e}S=hr.prototype=new w,S.constructor=hr,S.a2=(function(e,t,n,r){Zn(this.a,e,t.a,n,r)}),S.Y=(function(){return new hr(this.a.slice())});function gr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}S=gr.prototype=new w,S.constructor=gr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new gr(this.a.slice())});function _r(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}S=_r.prototype=new w,S.constructor=_r,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.Y=(function(){return new _r(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=E.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new lr;n.constructor=t,n.a2=(function(e,t,n,r){Zn(this.a,e,t.a,n,r)}),n.Y=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===vr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new E().a(this),this.A}),S.l=(function(){return this.L||=new Kc(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null});var vr=new E;vr.n={},vr.E=`Ljava.lang.Object;`,vr.F=(e=>!e.X),vr.N=`java.lang.Object`,vr.I=(e=>e!==null),vr.A=new E().y(vr,T,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),cr.prototype.$classData=vr;var yr=new E().p(void 0,`V`,`void`,void 0,void 0);new E().p(!1,`Z`,`boolean`,ur,void 0);var br=new E().p(0,`C`,`char`,dr,Uint16Array);new E().p(0,`B`,`byte`,fr,Int8Array),new E().p(0,`S`,`short`,pr,Int16Array),new E().p(0,`I`,`int`,mr,Int32Array);var xr=new E().p(null,`J`,`long`,hr,void 0);new E().p(0,`F`,`float`,gr,Float32Array),new E().p(0,`D`,`double`,_r,Float64Array);function Sr(e){return Hn(e).cr()+`@`+er(e)}function Cr(e){var t=e.cz;return t===void 0?Sr(e):t}function wr(){Er=this,Dr().gz(new q((e=>void 0)),xo().dy,!0)}S=wr.prototype=new w,S.constructor=wr;function Tr(){}Tr.prototype=S,S.gz=(function(e,t,n){return new Cl(e,n,t,this)}),new E().i(wr,`com.raquo.airstream.core.Observer$`,{b6:1});var Er;function Dr(){return Er||=new wr,Er}function Or(e){this.bP=null,this.cA=null,this.bQ=0,this.bP=e,this.cA=void 0;var t=Jr().br();this.bQ=t===void 0?1:1+t.bQ|0,Pr().bu===-1||this.bQ>Pr().bu?bc().cw(new ld(this,Pr().bu)):zr().R?zr().am.push(this)|0:Jr().cl(this)}S=Or.prototype=new w,S.constructor=Or;function kr(){}kr.prototype=S;var Ar=new E().i(Or,`com.raquo.airstream.core.Transaction`,{b9:1});function jr(){this.bu=0,this.cB=null,Nr=this,this.bu=1e3,this.cB=new q((e=>{throw H(new U,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=jr.prototype=new w,S.constructor=jr;function Mr(){}Mr.prototype=S,S.e5=(function(e){try{e.bP.s(e);var t=e.cA;if(t!==void 0)for(;t.h5();)t.gV().h9(e)}catch(e){var n=e instanceof zs?e:new Z(e);bc().cw(n)}}),new E().i(jr,`com.raquo.airstream.core.Transaction$`,{ba:1});var Nr;function Pr(){return Nr||=new jr,Nr}function Fr(e){e.bv.length|0?new Or(new q((t=>{for(;(e.bv.length|0)>0;){var n=e.bv.shift();try{n.s(t)}catch(e){var r=e instanceof zs?e:new Z(e);bc().cw(r)}}for(;(e.am.length|0)>0;){var i=e.am.shift();Jr().cl(i)}}))):(e.am.length|0)>0&&new Or(new q((t=>{for(;(e.am.length|0)>0;)Jr().cl(e.am.shift())})))}function Ir(){this.R=!1,this.bv=null,this.am=null,Rr=this,this.R=!1,this.bv=yi().ah(I().b(new(P.r()).C([]))),this.am=yi().ah(I().b(new(Ar.r()).C([])))}S=Ir.prototype=new w,S.constructor=Ir;function Lr(){}Lr.prototype=S,new E().i(Ir,`com.raquo.airstream.core.Transaction$onStart$`,{bb:1});var Rr;function zr(){return Rr||=new Ir,Rr}function Br(e,t){return e.an.get(t)}function Vr(e,t){e.bw.unshift(t)}function Hr(e){return e.bw.shift()}function Ur(e,t,n){var r=Br(e,t),i=r===void 0,a=r===void 0?yi().ah(I().b(new(Ar.r()).C([]))):r;a.push(n),i&&e.an.set(t,a)}function Wr(e,t){var n=Br(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.an.delete(t),i}}function Gr(){this.bw=null,this.an=null,qr=this,this.bw=yi().ah(I().b(new(Ar.r()).C([]))),this.an=new Map}S=Gr.prototype=new w,S.constructor=Gr;function Kr(){}Kr.prototype=S,S.cl=(function(e){var t=this.br();t===void 0?(Vr(this,e),Pr().e5(e),this.fg(e)):Ur(this,t,e)}),S.fg=(function(e){for(var t=e;;){var n=this.br(),r=t;if(!(n!==void 0&&F().M(r,n)))throw H(new U,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.g7(t),t.bP=Pr().cB;var i=this.br();if(F().M(i,void 0))if((this.an.size|0)>0){var a=new dc(0);throw this.an.forEach((e=>((t,n)=>{e.b8=e.b8+(t.length|0)|0}))(a)),H(new U,`Transaction queue error: Stack cleared, but a total of `+a.b8+` children for `+(this.an.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Pr().e5(i),t=i}}),S.g7=(function(e){for(var t=e;;){var n=Wr(this,t);if(F().M(n,void 0)){Hr(this);var r=this.br();if(!F().M(r,void 0))t=r;else return}else{Vr(this,n);return}}}),S.br=(function(){return this.bw[0]}),new E().i(Gr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bc:1});var qr;function Jr(){return qr||=new Gr,qr}function Yr(e,t){var n=e.a3.indexOf(t)|0;if(n!==-1)e.a3.splice(n,1),e.I.k()||t.el();else throw H(new U,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Xr(e){for(;(e.bx.length|0)>0;)Yr(e,e.bx.shift())}function Zr(e){this.cC=null,this.a3=null,this.aF=!1,this.bx=null,this.I=null,this.aG=0,this.cC=e,this.a3=yi().ah(I().b(new(ti.r()).C([]))),this.aF=!0,this.bx=yi().ah(I().b(new(ti.r()).C([]))),this.I=Y(),this.aG=0}S=Zr.prototype=new w,S.constructor=Zr;function Qr(){}Qr.prototype=S,S.dP=(function(){if(this.I.k()){var e=zr(),t=(()=>{var e=new Zo(this.cC);this.I=new X(e),this.aF=!1,this.aG=0;for(var t=0,n=this.a3.length|0;t<n;){var r=t+this.aG|0;this.a3[r].ek(e),t=1+t|0}Xr(this),this.aF=!0,this.aG=0});if(zr(),e.R)t();else{e.R=!0;try{t()}finally{e.R=!1,Fr(e)}}}else throw H(new U,`Can not activate `+this+`: it is already active`)}),S.fa=(function(){if(this.I.k())throw H(new U,`Can not deactivate DynamicOwner: it is not active`);this.aF=!1;for(var e=this.a3,t=0,n=e.length|0;t<n;)e[t].el(),t=1+t|0;Xr(this);var r=this.I;r.k()||r.C().fM(),Xr(this),this.aF=!0,this.I=Y()}),S.eT=(function(e,t){t?(this.aG=1+this.aG|0,this.a3.unshift(e)):this.a3.push(e);var n=this.I;if(!n.k()){var r=n.C();e.ek(r)}}),S.gc=(function(e){this.aF?Yr(this,e):this.bx.push(e)}),new E().i(Zr,`com.raquo.airstream.ownership.DynamicOwner`,{bd:1});function $r(e,t,n){this.by=null,this.cD=null,this.bz=null,this.by=e,this.cD=t,this.bz=Y(),e.eT(this,n)}S=$r.prototype=new w,S.constructor=$r;function ei(){}ei.prototype=S,S.bM=(function(){this.by.gc(this)}),S.ek=(function(e){var t=zr(),n=(()=>{this.bz=this.cD.s(e)});if(zr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Fr(t)}}}),S.el=(function(){var e=this.bz;e.k()||(e.C().bM(),this.bz=Y())});var ti=new E().i($r,`com.raquo.airstream.ownership.DynamicSubscription`,{be:1});function ni(){}S=ni.prototype=new w,S.constructor=ni;function ri(){}ri.prototype=S,S.gx=(function(e,t,n){return new $r(e,new q((e=>new X(t.s(e)))),n)}),S.gp=(function(e,t,n){return new $r(e,new q((e=>(t.s(e),Y()))),n)}),new E().i(ni,`com.raquo.airstream.ownership.DynamicSubscription$`,{bf:1});var ii;function ai(){return ii||=new ni,ii}function oi(e){e.aH=yi().ah(I().b(new(pi.r()).C([])))}function si(e){for(var t=e.aH,n=0,r=t.length|0;n<r;)ui(t[n]),n=1+n|0;e.aH.length=0}function ci(e,t){var n=e.aH.indexOf(t)|0;if(n!==-1)e.aH.splice(n,1);else throw H(new U,`Can not remove Subscription from Owner: subscription not found.`)}function li(e,t){e.aH.push(t)}function ui(e){if(!e.bS)e.cF.aC(),e.bS=!0;else throw H(new U,`Can not kill Subscription: it was already killed.`)}function di(e,t){this.cG=null,this.cF=null,this.bS=!1,this.cG=e,this.cF=t,this.bS=!1,e.g6(this)}S=di.prototype=new w,S.constructor=di;function fi(){}fi.prototype=S,S.bM=(function(){ui(this),ci(this.cG,this)});var pi=new E().i(di,`com.raquo.airstream.ownership.Subscription`,{bi:1});function mi(e,t){this.cH=null,this.cI=null,this.a4=null,this.ao=!1,this.cH=e,this.cI=t,this.a4=Y(),this.ao=!1}S=mi.prototype=new w,S.constructor=mi;function hi(){}hi.prototype=S,S.fJ=(function(){var e=this.a4;return!e.k()&&!e.C().by.I.k()}),S.gj=(function(e){if(this.ao)throw H(new U,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a4;if(t.k())var n=!1;else var n=e===t.C().by;if(!n){this.fJ()&&!e.I.k()&&(this.ao=!0);var r=this.a4;r.k()||(r.C().bM(),this.a4=Y()),this.a4=new X(ai().gx(e,new q((e=>(this.ao||this.cH.aC(),new di(e,new Ql((()=>{this.ao||this.cI.aC()})))))),!1)),this.ao=!1}}),S.f5=(function(){if(this.ao)throw H(new U,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a4;e.k()||e.C().bM(),this.a4=Y()}),new E().i(mi,`com.raquo.airstream.ownership.TransferableSubscription`,{bj:1});function gi(){}S=gi.prototype=new w,S.constructor=gi;function _i(){}_i.prototype=S,S.ah=(function(e){return[...Wo().gv(e)]}),new E().i(gi,`com.raquo.ew.JsArray$`,{bk:1});var vi;function yi(){return vi||=new gi,vi}function bi(){this.cJ=null,Si=this,document.createElement(`template`),this.f8(K().f.gq().gr()),this.cJ=RegExp(` `,`g`)}S=bi.prototype=new w,S.constructor=bi;function xi(){}xi.prototype=S,S.eW=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof zs?e:new Z(e);if(n instanceof Z&&n.T instanceof DOMException)return!1;throw n instanceof Z?n.T:n}}),S.fK=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().M(t,r))return!0;n=r}}),S.f7=(function(e){return document.createElement(e.bY)}),S.fA=(function(e,t){var n=this.fB(e,t);return n===void 0?void 0:t.aV.bJ(n)}),S.fB=(function(e,t){var n=e.Z.getAttributeNS(null,t.ap);return n===null?void 0:n}),S.es=(function(e,t,n){this.gg(e,t,t.aV.bl(n))}),S.gg=(function(e,t,n){n===null?this.gb(e,t):e.Z.setAttribute(t.ap,n)}),S.gb=(function(e,t){e.Z.removeAttribute(t.ap)}),S.gh=(function(e,t,n){this.gi(e,t,t.cS.bl(n))}),S.gi=(function(e,t,n){e.Z[t.cT]=n}),S.f8=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.d4)}),S.fE=(function(e,t){var n=this.fF(e,t);return n===void 0?void 0:t.bT.bJ(n)}),S.fF=(function(e,t){var n=e.cu(),r=t.bB,i=n.getAttributeNS(r.k()?null:r.C(),t.bU);return i===null?void 0:i}),S.gk=(function(e,t,n){this.gl(e,t,t.bT.bl(n))}),S.gl=(function(e,t,n){if(n===null)this.gd(e,t);else{var r=t.bB;if(r.k())e.cu().setAttribute(t.bA,n);else{var i=r.C();e.cu().setAttributeNS(i,t.bA,n)}}}),S.gd=(function(e,t){var n=e.cu(),r=t.bB;n.removeAttributeNS(r.k()?null:r.C(),t.bU)}),S.f9=(function(e){return document.createTextNode(e)}),S.fc=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Up(this.fb(r),n);r=i,n=a}}),S.fb=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cJ,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new E().i(bi,`com.raquo.laminar.DomApi$`,{bl:1});var Si;function D(){return Si||=new bi,Si}function Ci(e){Dr(),bc()}function wi(e){e.ew=Ki()}function Ti(e){Ei(e,new q((e=>{e.cU.Z.focus()})))}function Ei(e,t){return new ms(new q((e=>{var n=new lc(!e.aJ.I.k()),r=new q((e=>{n.bI?n.bI=!1:t.s(e)}));ai().gp(e.aJ,new q((e=>(t=>{r.s(new Vi(e,t))}))(e)),!1)})),Ki())}function Di(){this.aI=null,this.cR=null,this.cQ=null,ki=this,this.aI=new ts(Ai()),new ts(Ai()),this.cR=new ts(Ai()),this.cQ=new $o}S=Di.prototype=new w,S.constructor=Di;function Oi(){}Oi.prototype=S,new E().i(Di,`com.raquo.laminar.codecs.package$`,{bt:1});var ki;function Ai(){return ki||=new Di,ki}function ji(e){e.ex=Mi(e,`class`,` `)}function Mi(e,t,n){var r=as(new os,t,Ai().aI);return new rs(r.ap,new q((e=>{var t=D().fA(e,r);return t===void 0?``:t})),new tu(((e,t)=>{D().es(e,r,t)})),n)}function Ni(e){e.ev=Pi(e,`class`,` `)}function Pi(e,t,n){var r=new us(t,Ai().aI,Y());return new rs(r.bA,new q((e=>{var t=D().fE(e,r);return t===void 0?``:t})),new tu(((e,t)=>{D().gk(e,r,t)})),n)}function Fi(){}S=Fi.prototype=new w,S.constructor=Fi;function Ii(){}Ii.prototype=S;function Li(){this.ey=null,this.ez=null,this.eA=null,this.eB=null,this.ey=`http://www.w3.org/2000/svg`,this.ez=`http://www.w3.org/1999/xlink`,this.eA=`http://www.w3.org/XML/1998/namespace`,this.eB=`http://www.w3.org/2000/xmlns/`}S=Li.prototype=new w,S.constructor=Li;function Ri(){}Ri.prototype=S,S.fR=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Ou(e)}}),new E().i(Li,`com.raquo.laminar.keys.SvgAttr$`,{bI:1});var zi;function Bi(){return zi||=new Li,zi}function Vi(e,t){this.cU=null,this.cU=e}S=Vi.prototype=new w,S.constructor=Vi;function Hi(){}Hi.prototype=S,new E().i(Vi,`com.raquo.laminar.lifecycle.MountContext`,{bJ:1});var O=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function Ui(){this.eC=null,Gi=this,this.eC=new fs}S=Ui.prototype=new w,S.constructor=Ui;function Wi(){}Wi.prototype=S,new E().i(Ui,`com.raquo.laminar.modifiers.Modifier$`,{bL:1});var Gi;function Ki(){return Gi||=new Ui,Gi}function qi(){this.g=null,Yi=this,this.g=new gs(new q((e=>e)),k()),new gs(new q((e=>``+(e|0))),k()),new gs(new q((e=>``+ +e)),k()),new gs(new q((e=>``+!!e)),k()),new gs(new q((e=>e.gu())),k())}S=qi.prototype=new w,S.constructor=qi;function Ji(){}Ji.prototype=S,new E().i(qi,`com.raquo.laminar.modifiers.RenderableText$`,{bP:1});var Yi;function k(){return Yi||=new qi,Yi}function Xi(){}S=Xi.prototype=new w,S.constructor=Xi;function Zi(){}Zi.prototype=S,S.cn=(function(e,t,n){var r=new X(e);t.eu(r),n!==void 0&&n.h7(e,t);var i=D().eW(e.bs(),t.bs());return i&&t.et(r),i}),new E().i(Xi,`com.raquo.laminar.nodes.ParentNode$`,{bS:1});var Qi;function $i(){return Qi||=new Xi,Qi}function ea(){na=this,yi().ah(I().gA(new mr(new Int32Array([0]))))}S=ea.prototype=new w,S.constructor=ea;function ta(){}ta.prototype=S,S.eO=(function(){return new q((e=>void 0))}),new E().i(ea,`com.raquo.laminar.tags.CustomHtmlTag$`,{bY:1});var na;function ra(){return na||=new ea,na}function ia(){}S=ia.prototype=new w,S.constructor=ia;function aa(){}aa.prototype=S,S.eU=(function(){sa().fn(),sa().fo(),sa().fp(),sa().fq(),sa().fr(),sa().fs(),sa().ft()}),S.fn=(function(){var e=document.querySelector(`#example1`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`disabled`))),new G((e=>e.bk().c(!0)))])),I().b(new(O.r()).C([z(K().f,`Disabled`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`disabled`)))])),I().b(new(O.r()).C([K().f.fe().c(!0),z(K().f,`This is the disabled tab panel.`,k().g)])))])))))}),S.fo=(function(){var e=document.querySelector(`#example2`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([new G((e=>e.eR().c(`advanced`)))])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)])))])))))}),S.fp=(function(){var e=document.querySelector(`#example3`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([new G((e=>e.ct().f3()))])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`disabled`))),new G((e=>e.bk().c(!0)))])),I().b(new(O.r()).C([z(K().f,`Disabled`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`disabled`)))])),I().b(new(O.r()).C([z(K().f,`This is a disabled tab panel.`,k().g)])))])))))}),S.fq=(function(){var e=document.querySelector(`#example4`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([new G((e=>e.ct().go()))])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`disabled`))),new G((e=>e.bk().c(!0)))])),I().b(new(O.r()).C([z(K().f,`Disabled`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`disabled`)))])),I().b(new(O.r()).C([z(K().f,`This is a disabled tab panel.`,k().g)])))])))))}),S.fr=(function(){var e=document.querySelector(`#example5`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([new G((e=>e.ct().fj()))])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`disabled`))),new G((e=>e.bk().c(!0)))])),I().b(new(O.r()).C([z(K().f,`Disabled`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`disabled`)))])),I().b(new(O.r()).C([z(K().f,`This is a disabled tab panel.`,k().g)])))])))))}),S.fs=(function(){var e=document.querySelector(`#example6`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-1`)))])),I().b(new(O.r()).C([z(K().f,`Tab 1`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-2`)))])),I().b(new(O.r()).C([z(K().f,`Tab 2`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-3`)))])),I().b(new(O.r()).C([z(K().f,`Tab 3`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-4`)))])),I().b(new(O.r()).C([z(K().f,`Tab 4`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-5`)))])),I().b(new(O.r()).C([z(K().f,`Tab 5`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-6`)))])),I().b(new(O.r()).C([z(K().f,`Tab 6`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-7`)))])),I().b(new(O.r()).C([z(K().f,`Tab 7`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-8`)))])),I().b(new(O.r()).C([z(K().f,`Tab 8`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-9`)))])),I().b(new(O.r()).C([z(K().f,`Tab 9`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-10`)))])),I().b(new(O.r()).C([z(K().f,`Tab 10`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-11`)))])),I().b(new(O.r()).C([z(K().f,`Tab 11`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-12`)))])),I().b(new(O.r()).C([z(K().f,`Tab 12`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-13`)))])),I().b(new(O.r()).C([z(K().f,`Tab 13`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-14`)))])),I().b(new(O.r()).C([z(K().f,`Tab 14`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-15`)))])),I().b(new(O.r()).C([z(K().f,`Tab 15`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-16`)))])),I().b(new(O.r()).C([z(K().f,`Tab 16`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-17`)))])),I().b(new(O.r()).C([z(K().f,`Tab 17`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-18`)))])),I().b(new(O.r()).C([z(K().f,`Tab 18`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-19`)))])),I().b(new(O.r()).C([z(K().f,`Tab 19`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`tab-20`)))])),I().b(new(O.r()).C([z(K().f,`Tab 20`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-1`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 1`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-2`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 2`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-3`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 3`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-4`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 4`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-5`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 5`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-6`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 6`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-7`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 7`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-8`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 8`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-9`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 9`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-10`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 10`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-11`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 11`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-12`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 12`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-13`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 13`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-14`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 14`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-15`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 15`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-16`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 16`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-17`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 17`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-18`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 18`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-19`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 19`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`tab-20`)))])),I().b(new(O.r()).C([z(K().f,`Tab panel 20`,k().g)])))])))))}),S.ft=(function(){var e=document.querySelector(`#example7`);$s().aB(e).k()||(K(),new Cc(e,Vc().e(I().b(new(P.r()).C([new G((e=>e.eQ().fP()))])),I().b(new(O.r()).C([B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`General`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`Custom`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`Advanced`,k().g)]))),B().e(I().b(new(P.r()).C([new G((e=>e.o().c(`disabled`))),new G((e=>e.bk().c(!0)))])),I().b(new(O.r()).C([z(K().f,`Disabled`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`general`)))])),I().b(new(O.r()).C([z(K().f,`This is the general tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`custom`)))])),I().b(new(O.r()).C([z(K().f,`This is the custom tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`advanced`)))])),I().b(new(O.r()).C([z(K().f,`This is the advanced tab panel.`,k().g)]))),V().e(I().b(new(P.r()).C([new G((e=>e.n().c(`disabled`)))])),I().b(new(O.r()).C([z(K().f,`This is a disabled tab panel.`,k().g)])))])))))}),new E().i(ia,`examples.tabGroup.Main$package$`,{c1:1});var oa;function sa(){return oa||=new ia,oa}function ca(e){try{sa().eU()}catch(e){throw e}}function la(){this.eE=!1,this.aZ=null,this.bD=null,this.dq=null,this.c0=!1,this.eD=0,this.eG=0,this.eF=null,da=this,this.eE=!0,this.aZ=new ArrayBuffer(8),this.bD=new Int32Array(this.aZ,0,2),new Float32Array(this.aZ,0,2),this.dq=new Float64Array(this.aZ,0,1),this.bD[0]=16909060,this.c0=(new Int8Array(this.aZ,0,8)[0]|0)==1,this.eD=this.c0?0:1,this.eG=this.c0?1:0,this.eF=null}S=la.prototype=new w,S.constructor=la;function ua(){}ua.prototype=S,S.cs=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dq[0]=e,(this.bD[0]|0)^(this.bD[1]|0))}),new E().i(la,`java.lang.FloatingPointBits$`,{cf:1});var da;function fa(){return da||=new la,da}function pa(e,t){for(var n=A().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ma(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new js(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new js(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Ns.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function ma(e,t){var n=A().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[ha(e,c[1]),Sa(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[ha(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[ha(e,d[1]),`<clinit>`]}function ha(e,t){var n=_a(e);if(Ja().dw.call(n,t))var r=_a(e)[t];else var r=Na(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ga(e){if(!((1&e.N)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c2=t,e.N=(1|e.N)<<24>>24}return e.c2}function _a(e){return(1&e.N)<<24>>24?e.c2:ga(e)}function va(e){if(!((2&e.N)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c3=t,e.N=(2|e.N)<<24>>24}return e.c3}function ya(e){return(2&e.N)<<24>>24?e.c3:va(e)}function ba(e){return(4&e.N)<<24>>24||(e.c1=Object.keys(ya(e)),e.N=(4|e.N)<<24>>24),e.c1}function xa(e){return(4&e.N)<<24>>24?e.c1:ba(e)}function Sa(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ca(e,t){return t?t.arguments&&t.stack?wa(e,t):t.stack&&t.sourceURL?Da(e,t):t.stack&&t.number?Ea(e,t):t.stack&&t.fileName?Ta(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Oa(e,t):ka(e,t):Oa(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Aa(e,t):ja(e,t):t.stack&&!t.fileName?wa(e,t):Ma(e,t):[]}function wa(e,t){return(t.stack+`
`).replace(A().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().G(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().G(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().G(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().G(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ta(e,t){return t.stack.replace(A().G(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().G(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ea(e,t){return t.stack.replace(A().G(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().G(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().G(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Da(e,t){return t.stack.replace(A().G(`\\[native code\\]\\n`,`m`),``).replace(A().G(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().G(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Oa(e,t){for(var n=A().G(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ka(e,t){for(var n=A().G(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Aa(e,t){for(var n=A().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ja(e,t){for(var n=A().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().W(`<anonymous function: (\\S+)>`),`$1`).replace(A().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Ma(e,t){return[]}function Na(e,t,n){for(;;)if(t<(xa(e).length|0)){var r=xa(e)[t];if(n.startsWith(r))return``+ya(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Pa(){this.c2=null,this.c3=null,this.c1=null,this.N=0}S=Pa.prototype=new w,S.constructor=Pa;function Fa(){}Fa.prototype=S,S.fu=(function(e){return pa(this,Ca(this,e))}),new E().i(Pa,`java.lang.StackTrace$`,{cm:1});var Ia;function La(){return Ia||=new Pa,Ia}function Ra(){}S=Ra.prototype=new w,S.constructor=Ra;function za(){}za.prototype=S,S.W=(function(e){return new RegExp(e)}),S.G=(function(e,t){return new RegExp(e,t)}),new E().i(Ra,`java.lang.StackTrace$StringRE$`,{cn:1});var Ba;function A(){return Ba||=new Ra,Ba}function Va(){this.ds=null,this.eH=null,Ua=this,this.ds=new gf(!1),this.eH=new gf(!0)}S=Va.prototype=new w,S.constructor=Va;function Ha(){}Ha.prototype=S,new E().i(Va,`java.lang.System$Streams$`,{cs:1});var Ua;function Wa(){return Ua||=new Va,Ua}function Ga(){this.dw=null,qa=this,this.dw=Object.prototype.hasOwnProperty}S=Ga.prototype=new w,S.constructor=Ga;function Ka(){}Ka.prototype=S,new E().i(Ga,`java.lang.Utils$Cache$`,{cu:1});var qa;function Ja(){return qa||=new Ga,qa}function Ya(e,t){return e===t}function Xa(e){return 0}function Za(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.an)}var Qa=new E().i(0,`java.lang.Void`,{an:1},(e=>e===void 0));function $a(e,t){throw new hu(`argument type mismatch`)}function eo(){}S=eo.prototype=new w,S.constructor=eo;function to(){}to.prototype=S,S.bn=(function(e){return e instanceof T||e instanceof ur||e instanceof dr||e instanceof fr||e instanceof pr||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r?e.a.length:$a(this,e)}),new E().i(eo,`java.lang.reflect.Array$`,{cv:1});var no;function ro(){return no||=new eo,no}function io(){}S=io.prototype=new w,S.constructor=io;function ao(){}ao.prototype=S,S.ec=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.h,s=a.i,c=r,l=t.a[c],u=l.h,d=l.i;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),S.eb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.ed=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.e8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.e7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.ee=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.e9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),S.ea=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new E().i(io,`java.util.Arrays$`,{cw:1});var oo;function j(){return oo||=new io,oo}function M(e,t){this.h=0,this.i=0,this.h=e,this.i=t}S=M.prototype=new w,S.constructor=M;function so(){}so.prototype=S,S.m=(function(e){return e instanceof M&&this.h===e.h&&this.i===e.i}),S.u=(function(){return this.h^this.i}),S.y=(function(){return N().ep(this.h,this.i)}),S.hc=(function(){return this.h}),S.hb=(function(){return N().eo(this.h,this.i)}),S.ha=(function(){return N().bq(this.h,this.i)}),S.gS=(function(){return this.h<<24>>24}),S.h8=(function(){return this.h<<16>>16}),S.h2=(function(){return this.h}),S.h3=(function(){return this}),S.gY=(function(){return N().eo(this.h,this.i)}),S.gW=(function(){return N().bq(this.h,this.i)}),S.gU=(function(e){return N().em(this.h,this.i,e.h,e.i)}),S.gT=(function(e){return N().em(this.h,this.i,e.h,e.i)}),S.gX=(function(e){return this.h===e.h&&this.i===e.i}),S.h6=(function(e){return!(this.h===e.h&&this.i===e.i)}),S.gK=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<(-2147483648^e.h):t<n}),S.gL=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<=(-2147483648^e.h):t<n}),S.gG=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>(-2147483648^e.h):t>n}),S.gH=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>=(-2147483648^e.h):t>n}),S.he=(function(){return new M(~this.h,~this.i)}),S.gE=(function(e){return new M(this.h|e.h,this.i|e.i)}),S.gD=(function(e){return new M(this.h&e.h,this.i&e.i)}),S.gR=(function(e){return new M(this.h^e.h,this.i^e.i)}),S.gM=(function(e){var t=this.h;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.i<<e)}),S.gJ=(function(e){var t=this.i;return new M(32&e?t>>>e|0:this.h>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),S.gI=(function(e){var t=this.i;return new M(32&e?t>>e:this.h>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),S.hd=(function(){var e=this.h,t=this.i;return new M(-e|0,e===0?-t|0:~t)}),S.gP=(function(e){var t=this.h,n=this.i,r=e.i,i=t+e.h|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),S.gN=(function(e){var t=this.h,n=this.i,r=e.i,i=t-e.h|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),S.gQ=(function(e){var t=this.h,n=e.h,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.i)+Math.imul(this.i,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),S.gF=(function(e){var t=N();return new M(t.ff(this.h,this.i,e.h,e.i),t.w)}),S.gO=(function(e){var t=N();return new M(t.ga(this.h,this.i,e.h,e.i),t.w)}),new E().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{ao:1});function co(e,t,n){return-2097152&n?fo(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function lo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.w=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.w=0,n>>>o|0}else return fo(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.w=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.w=s/4294967296|0,s|0}}function uo(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.w=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.w=n&(-1+i|0),t):fo(e,t,n,r,i,1)|0;if(-2097152&i)return e.w=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.w=a/4294967296|0,a|0}function fo(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.w=ee,m;if(a===1)return e.w=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function po(){this.w=0}S=po.prototype=new w,S.constructor=po;function mo(){}mo.prototype=S,S.ep=(function(e,t){return t===e>>31?``+e:t<0?`-`+co(this,-e|0,e===0?-t|0:~t):co(this,e,t)}),S.bq=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),S.eo=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),S.h0=(function(e){return new M(e,e>>31)}),S.gZ=(function(e){return new M(this.en(e),this.w)}),S.en=(function(e){if(e<-0x8000000000000000)return this.w=-2147483648,0;if(e>=0x8000000000000000)return this.w=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.w=e<0&&t!==0?-1+n|0:n,t}),S.em=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),S.ff=(function(e,t,n,r){if((n|r)===0)throw new pu(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.w=0,-2147483648;var i=qn(e,n);return this.w=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=-1,-1;else return this.w=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=lo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.w;return this.w=l===0?-u|0:~u,-l|0}}),S.ga=(function(e,t,n,r){if((n|r)===0)throw new pu(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Jn(e,n);return this.w=i>>31,i}else return this.w=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=0,0;else return this.w=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=uo(this,a,o,s,c);if(t<0){var u=this.w;return this.w=l===0?-u|0:~u,-l|0}else return l}}),new E().i(po,`org.scalajs.linker.runtime.RuntimeLong$`,{cy:1});var ho;function N(){return ho||=new po,ho}var P=new E().i(1,`scala.Function1`,{e:1});function go(){}S=go.prototype=new w,S.constructor=go;function _o(){}_o.prototype=S;function vo(){this.dz=null,this.dy=null,bo=this,this.dz=new G((e=>xo().dz)),this.dy=new Ul}S=vo.prototype=new w,S.constructor=vo;function yo(){}yo.prototype=S,new E().i(vo,`scala.PartialFunction$`,{cI:1});var bo;function xo(){return bo||=new vo,bo}function So(e,t){for(var n=e.r();n.x();)t.s(n.l())}function Co(e,t,n,r){return e.D()===0?``+t+r:e.ba(Xp(new Zp),t,n,r).L.v}function wo(e,t,n,r,i){var a=t.L;n.length!==0&&(a.v=``+a.v+n);var o=e.r();if(o.x()){var s=o.l();for(a.v=``+a.v+s;o.x();){a.v=``+a.v+r;var c=o.l();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function To(e,t){this.dF=null,this.b5=null,this.dF=e,this.b5=t}S=To.prototype=new w,S.constructor=To;function Eo(){}Eo.prototype=S,S.fH=(function(){return this.dF.aC().r()}),new E().i(To,`scala.collection.Iterator$ConcatIteratorCell`,{d5:1});function Do(){}S=Do.prototype=new w,S.constructor=Do;function Oo(){}Oo.prototype=S,S.M=(function(e,t){return e===t||(As(e)?this.fm(e,t):e instanceof C?this.fk(e,t):e===null?t===null:Wn(e,t))}),S.fm=(function(e,t){if(As(t))return this.fl(e,t);if(t instanceof C){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=sr(e),r=n.h,i=n.i,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Wn(e,t)}else return e===null?t===null:Wn(e,t)}),S.fl=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=sr(t);return n===N().bq(r.h,r.i)}else return!1}else if(e instanceof M){var i=sr(e),a=i.h,o=i.i;if(t instanceof M){var s=sr(t),c=s.h,l=s.i;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return N().bq(a,o)===u}else return!1}else return e===null?t===null:Wn(e,t)}),S.fk=(function(e,t){if(t instanceof C)return e.c===t.c;if(As(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=sr(t),r=n.h,i=n.i,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Wn(t,e)}else return e===null&&t===null}),new E().i(Do,`scala.runtime.BoxesRunTime$`,{dH:1});var ko;function F(){return ko||=new Do,ko}var Ao=new E().i(0,`scala.runtime.Null$`,{dK:1});function jo(){}S=jo.prototype=new w,S.constructor=jo;function Mo(){}Mo.prototype=S,S.aP=(function(e,t){if(e instanceof T||e instanceof mr||e instanceof _r||e instanceof hr||e instanceof gr)return e.a[t];if(e instanceof dr)return ar(e.a[t]);if(e instanceof fr||e instanceof pr||e instanceof ur)return e.a[t];throw e===null?new bu:new Ou(e)}),S.f0=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof mr)e.a[t]=n|0;else if(e instanceof _r)e.a[t]=+n;else if(e instanceof hr)e.a[t]=sr(n);else if(e instanceof gr)e.a[t]=Math.fround(n);else if(e instanceof dr)e.a[t]=or(n);else if(e instanceof fr)e.a[t]=n|0;else if(e instanceof pr)e.a[t]=n|0;else if(e instanceof ur)e.a[t]=!!n;else if(e===null)throw new bu;else throw new Ou(e)}),S.eP=(function(e){return Co(e.aT(),e.ak()+`(`,`,`,`)`)}),S.b=(function(e){return e===null?null:e.a.length===0?Id(Bd()):new pp(e)}),S.gA=(function(e){return e===null?null:new lp(e)}),new E().i(jo,`scala.runtime.ScalaRunTime$`,{dL:1});var No;function I(){return No||=new jo,No}function Po(){}S=Po.prototype=new w,S.constructor=Po;function Fo(){}Fo.prototype=S,S.d=(function(e,t){var n=this.bN(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bN=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.q=(function(e,t){return this.f2(e^t)}),S.f2=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.aS=(function(e){var t=e.h,n=e.i;return n===t>>31?t:t^n}),S.V=(function(e){var t=Yn(e);if(t===e)return t;var n=N(),r=n.en(e),i=n.w;return N().bq(r,i)===e?r^i:fa().cs(e)}),S.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof M){var t=sr(e);return this.aS(new M(t.h,t.i))}else return Gn(e)}),S.bp=(function(e){throw gu(new _u,``+e)}),new E().i(Po,`scala.runtime.Statics$`,{dN:1});var Io;function L(){return Io||=new Po,Io}function Lo(){}S=Lo.prototype=new w,S.constructor=Lo;function Ro(){}Ro.prototype=S,S.gm=(function(e,t){return setTimeout((()=>{t.aC()}),e)}),new E().i(Lo,`scala.scalajs.js.timers.package$`,{dQ:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(){}S=Vo.prototype=new w,S.constructor=Vo;function Ho(){}Ho.prototype=S,S.gv=(function(e){var t=[];return e.bm(new G((e=>t.push(e)|0))),t}),new E().i(Vo,`scala.scalajs.runtime.Compat$`,{dZ:1});var Uo;function Wo(){return Uo||=new Vo,Uo}function Go(){}S=Go.prototype=new w,S.constructor=Go;function Ko(){}Ko.prototype=S,S.gn=(function(e){var t=`Illegal command line`+(e.ej()===0?``:e.ej()===1?` after first argument`:` after `+e.ej()+` arguments`)+`: `+e.h4();qs().g5().fL(t+`
`)}),new E().i(Go,`scala.util.CommandLineParser$`,{e1:1});function qo(e){this.cj=null,this.cj=e}S=qo.prototype=new w,S.constructor=qo;function Jo(){}Jo.prototype=S,S.y=(function(){return`DynamicVariable(`+this.cj+`)`}),new E().i(qo,`scala.util.DynamicVariable`,{e3:1});function Yo(){}S=Yo.prototype=new w,S.constructor=Yo;function Xo(){}Xo.prototype=S,S.d=(function(e,t){var n=this.bN(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bN=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.q=(function(e,t){return this.H(e^t)}),S.H=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.eq=(function(e,t,n){var r=e.ai();if(r===0)return J(e.ak());var i=t;n||(i=this.d(i,J(e.ak())));for(var a=0;a<r;)i=this.d(i,L().B(e.aj(a))),a=1+a|0;return this.q(i,r)}),S.gw=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.r();o.x();){var s=o.l(),c=L().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.d(l,n),l=this.d(l,r),l=this.bN(l,a),this.q(l,i)}),S.g4=(function(e,t){var n=e.r(),r=t;if(!n.x())return this.q(r,0);var i=n.l();if(!n.x())return this.q(this.d(r,L().B(i)),1);var a=n.l(),o=L().B(i);r=this.d(r,o);for(var s=r,c=L().B(a),l=c-o|0,u=2;n.x();){r=this.d(r,c);var d=L().B(n.l());if(l!==(d-c|0)||l===0){for(r=this.d(r,d),u=1+u|0;n.x();)r=this.d(r,L().B(n.l())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.H(this.d(this.d(s,l),c))}),S.dT=(function(e,t){var n=t,r=ro().bn(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,L().B(I().aP(e,0))),1);default:var i=L().B(I().aP(e,0));n=this.d(n,i);for(var a=n,o=L().B(I().aP(e,1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=L().B(I().aP(e,c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,L().B(I().aP(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.g8=(function(e,t,n,r){return this.H(this.d(this.d(this.d(r,e),t),n))}),S.fI=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,L().B(e.t(0))),1);default:var i=L().B(e.t(0));n=this.d(n,i);for(var a=n,o=L().B(e.t(1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=L().B(e.t(c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,L().B(e.t(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.fN=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.k();){var l=c.a1(),u=c.X(),d=L().B(l);switch(r=this.d(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.g8(s,a,o,t):this.q(r,n)}),S.e2=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.d(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dV=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dW=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,L().V(e.a[0])),1);default:var i=L().V(e.a[0]);n=this.d(n,i);for(var a=n,o=L().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=L().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,L().V(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dX=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,L().V(e.a[0])),1);default:var i=L().V(e.a[0]);n=this.d(n,i);for(var a=n,o=L().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=L().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,L().V(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dY=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.dZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.d(i,L().aS(new M(a.h,a.i))),1);default:var o=e.a[0],s=L().aS(new M(o.h,o.i));n=this.d(n,s);for(var c=n,l=e.a[1],u=L().aS(new M(l.h,l.i)),d=u-s|0,f=2;f<r;){n=this.d(n,u);var p=e.a[f],m=L().aS(new M(p.h,p.i));if(d!==(m-u|0)||d===0){for(n=this.d(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.d(ee,L().aS(new M(te.h,te.i))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.H(this.d(this.d(c,d),u))}}),S.e0=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),S.e1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,0),1);default:n=this.d(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.d(n,a),o!==(-a|0)||o===0){for(n=this.d(n,0),s=1+s|0;s<r;)n=this.d(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.H(this.d(this.d(i,o),a))}});function Zo(e){this.aH=null,this.cE=null,this.bR=!1,this.cE=e,oi(this),this.bR=!1}S=Zo.prototype=new w,S.constructor=Zo;function Qo(){}Qo.prototype=S,S.g6=(function(e){this.bR?(ui(e),this.cE.aC()):li(this,e)}),S.fM=(function(){si(this),this.bR=!0}),new E().i(Zo,`com.raquo.airstream.ownership.OneTimeOwner`,{bg:1,bh:1});function $o(){}S=$o.prototype=new w,S.constructor=$o;function es(){}es.prototype=S,S.fd=(function(e){return e!==null}),S.fi=(function(e){return e?``:null}),S.bJ=(function(e){return this.fd(e)}),S.bl=(function(e){return this.fi(!!e)}),new E().i($o,`com.raquo.laminar.codecs.package$$anon$1`,{bu:1,Y:1});function ts(e){if(e===null)throw new bu}S=ts.prototype=new w,S.constructor=ts;function ns(){}ns.prototype=S,S.bl=(function(e){return e}),S.bJ=(function(e){return e}),new E().i(ts,`com.raquo.laminar.codecs.package$$anon$2`,{bv:1,Y:1});function rs(e,t,n,r){}S=rs.prototype=new Ii,S.constructor=rs;function is(){}is.prototype=S,new E().i(rs,`com.raquo.laminar.keys.CompositeKey`,{bF:1,S:1});function as(e,t,n){return e.ap=t,e.aV=n,e}function os(){this.ap=null,this.aV=null}S=os.prototype=new Ii,S.constructor=os;function ss(){}ss.prototype=S,S.c=(function(e){return new xc(this,e,new ru(((e,t,n)=>{D().es(e,t,n)})))}),new E().i(os,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,S:1});function cs(e,t){this.cT=null,this.cS=null,this.cT=e,this.cS=t}S=cs.prototype=new Ii,S.constructor=cs;function ls(){}ls.prototype=S,S.c=(function(e){return new xc(this,e,new ru(((e,t,n)=>{D().gh(e,t,n)})))}),new E().i(cs,`com.raquo.laminar.keys.HtmlProp`,{bG:1,S:1});function us(e,t,n){this.bU=null,this.bT=null,this.bA=null,this.bB=null,this.bU=e,this.bT=t;var r=n.k()?Y():new X(n.C()+`:`+e);this.bA=r.k()?e:r.C(),this.bB=n.k()?Y():new X(Bi().fR(n.C()))}S=us.prototype=new Ii,S.constructor=us;function ds(){}ds.prototype=S,new E().i(us,`com.raquo.laminar.keys.SvgAttr`,{bH:1,S:1});function fs(){}S=fs.prototype=new w,S.constructor=fs;function ps(){}ps.prototype=S,S.aA=(function(e){}),new E().i(fs,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bM:1,T:1});function ms(e,t){if(this.cY=null,this.cY=e,t===null)throw new bu}S=ms.prototype=new w,S.constructor=ms;function hs(){}hs.prototype=S,S.aA=(function(e){var t=zr(),n=(()=>{this.cY.s(e)});if(zr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Fr(t)}}}),new E().i(ms,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bN:1,T:1});function gs(e,t){if(this.cZ=null,this.cZ=e,t===null)throw new bu}S=gs.prototype=new w,S.constructor=gs;function _s(){}_s.prototype=S,S.f1=(function(e){return this.cZ.s(e)}),new E().i(gs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{bQ:1,bO:1});function vs(e){e.e6(new Zr(new Ql((()=>{throw H(new U,`Attempting to use owner of unmounted element: `+Co(D().fc(e.bs(),(D(),Jp())),``,` > `,``))}))))}function ys(){}S=ys.prototype=new w,S.constructor=ys;function bs(){}bs.prototype=S,S.eZ=(function(e){var t=this.f4();return e.bm(new q((e=>{e.aA(t)}))),t}),S.f4=(function(){return new ud(this,D().f7(this))});function xs(e,t){this.d4=null,this.d4=e}S=xs.prototype=new w,S.constructor=xs;function Ss(){}Ss.prototype=S,new E().i(xs,`com.raquo.laminar.tags.SvgTag`,{c0:1,ac:1});function Cs(){}S=Cs.prototype=new w,S.constructor=Cs;function ws(){}ws.prototype=S,S.bl=(function(e){return e}),S.bJ=(function(e){return e}),new E().i(Cs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{c7:1,Y:1});function Ts(e,t){return e.aX=t,e.ck(),e}function Es(){this.aX=null,this.aW=null,this.aY=!1}S=Es.prototype=new w,S.constructor=Es;function Ds(){}Ds.prototype=S,S.gs=(function(){return this.aY||=(this.aW=new Tc(this.aX,ra().eO(),(ra(),void 0)),!0),this.aW}),S.e=(function(e,t){var n=this.gs().eZ(I().b(new(O.r()).C([])));return e.bm(new q((e=>{e.s(this).aA(n)}))),t.bm(new q((e=>{e.aA(n)}))),n});function Os(){}S=Os.prototype=new w,S.constructor=Os;function ks(){}ks.prototype=S;function As(e){return e instanceof Os||typeof e==`number`||e instanceof M}function js(e,t,n,r,i){this.aL=null,this.b1=null,this.aM=null,this.aN=0,this.aK=0,this.aL=e,this.b1=t,this.aM=n,this.aN=r,this.aK=i}S=js.prototype=new w,S.constructor=js;function Ms(){}Ms.prototype=S,S.m=(function(e){return e instanceof js&&this.aM===e.aM&&this.aN===e.aN&&this.aK===e.aK&&this.aL===e.aL&&this.b1===e.b1}),S.y=(function(){var e=``;return this.aL!==`<jscode>`&&(e=``+e+this.aL+`.`),e=``+e+this.b1,this.aM===null?e+=`(Unknown Source)`:(e=e+`(`+this.aM,this.aN>=0&&(e=e+`:`+this.aN,this.aK>=0&&(e=e+`:`+this.aK)),e+=`)`),e}),S.u=(function(){return J(this.aL)^J(this.b1)^J(this.aM)^this.aN^this.aK});var Ns=new E().i(js,`java.lang.StackTraceElement`,{am:1,a:1});function Ps(){}S=Ps.prototype=new w,S.constructor=Ps;function Fs(){}Fs.prototype=S,S.fS=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Sd;for(var i=``,a=t;a!==r;)i+=``+Xn(e.a[a]),a=1+a|0;return i}),new E().i(Ps,`java.lang.String$`,{cp:1,a:1});var Is;function Ls(){return Is||=new Ps,Is}function Rs(e,t,n,r,i){return e.du=t,e.dv=i,i&&e.fv(),e}var zs=class extends Error{constructor(){super(),this.du=null,this.dv=!1,this.dt=null,this.bE=null}bo(){return this.du}fv(){var e=this instanceof Z?this.T:this;return this.dt=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}fD(){return this.bE===null&&(this.dv?this.bE=La().fu(this.dt):this.bE=new(Ns.r()).C(0)),this.bE}y(){var e=Un(this),t=this.bo();return t===null?e:e+`: `+t}u(){return cr.prototype.u.call(this)}m(e){return cr.prototype.m.call(this,e)}get message(){var e=this.bo();return e===null?``:e}get name(){return Un(this)}toString(){return this.y()}};function Bs(){}S=Bs.prototype=new w,S.constructor=Bs;function Vs(){}Vs.prototype=S,S.eg=(function(e,t){var n=e.D();if(n>-1){for(var r=t.fT(n),i=e.r(),a=0;a<n;)I().f0(r,a,i.l()),a=1+a|0;return r}else{var o=null,s=t.ge(),c=s===br.l();o=[];for(var l=e.r();l.x();){var u=l.l(),d=c?or(u):u===null?s.al.z:u;o.push(d)}return(s===yr.l()?Qa.l():s===Ao.l()||s===ml.l()?vr.l():s).al.r().w(o)}}),S.ef=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().M(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(Bs,`scala.Array$`,{cz:1,a:1});var Hs;function Us(){return Hs||=new Bs,Hs}function Ws(){this.dx=null,Ks=this,this.dx=new qo(Wa().ds)}S=Ws.prototype=new w,S.constructor=Ws;function Gs(){}Gs.prototype=S,S.g5=(function(){return this.dx.cj}),new E().i(Ws,`scala.Console$`,{cA:1,dt:1});var Ks;function qs(){return Ks||=new Ws,Ks}function Js(){}S=Js.prototype=new _o,S.constructor=Js;function Ys(){}Ys.prototype=S,S.gB=(function(e){return e===null?null:e.a.length===0?Wd().dG:new Lp(e)});function Xs(){}S=Xs.prototype=new w,S.constructor=Xs;function Zs(){}Zs.prototype=S,S.aB=(function(e){return e===null?Y():new X(e)}),new E().i(Xs,`scala.Option$`,{cH:1,a:1});var Qs;function $s(){return Qs||=new Xs,Qs}function ec(e,t){if(t===e)e.dQ(nd().eh(t));else for(var n=t.r();n.x();)e.cm(n.l());return e}function tc(){}S=tc.prototype=new w,S.constructor=tc;function nc(){}nc.prototype=S,S.y=(function(){return`<function0>`});function rc(){}S=rc.prototype=new w,S.constructor=rc;function ic(){}ic.prototype=S,S.y=(function(){return`<function1>`});function ac(){}S=ac.prototype=new w,S.constructor=ac;function oc(){}oc.prototype=S,S.y=(function(){return`<function2>`});function sc(){}S=sc.prototype=new w,S.constructor=sc;function cc(){}cc.prototype=S,S.y=(function(){return`<function3>`});function lc(e){this.bI=!1,this.bI=e}S=lc.prototype=new w,S.constructor=lc;function uc(){}uc.prototype=S,S.y=(function(){return``+this.bI}),new E().i(lc,`scala.runtime.BooleanRef`,{dG:1,a:1});function dc(e){this.b8=0,this.b8=e}S=dc.prototype=new w,S.constructor=dc;function fc(){}fc.prototype=S,S.y=(function(){return``+this.b8}),new E().i(dc,`scala.runtime.IntRef`,{dI:1,a:1});function pc(){this.z=0,this.dO=0,this.eN=0,this.eM=0,hc=this,this.z=J(`Seq`),this.dO=J(`Map`),this.eN=J(`Set`),this.eM=this.gw(Jp(),this.dO)}S=pc.prototype=new Xo,S.constructor=pc;function mc(){}mc.prototype=S,S.gf=(function(e){return Mf(e)?this.fI(e,this.z):e instanceof xp?this.fN(e,this.z):this.g4(e,this.z)}),new E().i(pc,`scala.util.hashing.MurmurHash3$`,{e5:1,e4:1});var hc;function R(){return hc||=new pc,hc}var gc=class extends zs{};function _c(){this.bO=null,this.cx=null,this.cy=null,yc=this,this.bO=nd().dR(I().b(new(P.r()).C([]))),this.cx=new q((e=>{try{console.error(this.fz(e)+`
`+this.fC(e,`
`))}catch(e){var t=e instanceof zs?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cy=new q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.T:t})),this.g9(this.cx)}S=_c.prototype=new w,S.constructor=_c;function vc(){}vc.prototype=S,S.fz=(function(e){try{var t=e.bo()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Hn(e).cr()+`: `+t}),S.fC=(function(e,t){try{return Co(Zc().gB(e.fD()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.g9=(function(e){this.bO.cm(e)}),S.cw=(function(e){for(var t=this.bO.r();t.x();){var n=t.l();try{n.s(e)}catch(e){var r=e instanceof zs?e:new Z(e),i=this.cy;if(n===null?i===null:n.m(i))throw r instanceof Z?r.T:r;console.warn(`Error processing an unhandled error callback:`),Bo().gm(0,new Ql((e=>(()=>{throw e instanceof Z?e.T:e}))(r)))}}}),new E().i(_c,`com.raquo.airstream.core.AirstreamError$`,{b3:1,dr:1,ds:1});var yc;function bc(){return yc||=new _c,yc}function z(e,t,n){return new Al(n.f1(t))}function xc(e,t,n){this.cW=null,this.cX=null,this.cV=null,this.cW=e,this.cX=t,this.cV=n}S=xc.prototype=new w,S.constructor=xc;function Sc(){}Sc.prototype=S,S.aA=(function(e){this.cV.eX(e,this.cW,this.cX)}),new E().i(xc,`com.raquo.laminar.modifiers.KeySetter`,{bK:1,T:1,bR:1});function Cc(e,t){if(this.bW=null,this.d1=null,this.d2=null,this.d1=t,vs(this),e===null)throw H(new U,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().fK(e,document))throw H(new U,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.d2=e,this.fQ()}S=Cc.prototype=new w,S.constructor=Cc;function wc(){}wc.prototype=S,S.bL=(function(){return this.bW}),S.e6=(function(e){this.bW=e}),S.fQ=(function(){return this.bW.dP(),$i().cn(this,this.d1,void 0)}),S.bs=(function(){return this.d2}),new E().i(Cc,`com.raquo.laminar.nodes.RootNode`,{bV:1,a0:1,ab:1});function Tc(e,t,n){this.bY=null,this.bY=e}S=Tc.prototype=new bs,S.constructor=Tc;function Ec(){}Ec.prototype=S,new E().i(Tc,`com.raquo.laminar.tags.CustomHtmlTag`,{bX:1,bZ:1,ac:1});function Dc(){this.ap=null,this.aV=null,this.d5=null,this.d6=!1,this.d7=null,this.d8=!1,this.d9=null,this.da=!1,as(this,`placement`,new Cs)}S=Dc.prototype=new ss,S.constructor=Dc;function Oc(){}Oc.prototype=S,S.f3=(function(){return this.d6||=(this.d5=Ac().c(`bottom`),!0),this.d5}),S.fj=(function(){return this.d8||=(this.d7=Ac().c(`end`),!0),this.d7}),S.go=(function(){return this.da||=(this.d9=Ac().c(`start`),!0),this.d9}),new E().i(Dc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentPlacement$`,{c2:1,Z:1,S:1});var kc;function Ac(){return kc||=new Dc,kc}function jc(){this.ap=null,this.aV=null,this.db=null,this.dc=!1,as(this,`activation`,new Cs)}S=jc.prototype=new ss,S.constructor=jc;function Mc(){}Mc.prototype=S,S.fP=(function(){return this.dc||=(this.db=Pc().c(`manual`),!0),this.db}),new E().i(jc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TabGroupActivation$`,{c3:1,Z:1,S:1});var Nc;function Pc(){return Nc||=new jc,Nc}function Fc(){this.aX=null,this.aW=null,this.aY=!1,this.df=null,this.dg=!1,this.dd=null,this.de=!1,Ts(this,`wa-tab`)}S=Fc.prototype=new Ds,S.constructor=Fc;function Ic(){}Ic.prototype=S,S.o=(function(){return this.dg||=(this.df=(K(),as(new os,`panel`,Ai().aI)),!0),this.df}),S.bk=(function(){return this.de||=(this.dd=(K(),as(new os,`disabled`,Ai().cQ)),!0),this.dd}),S.ck=(function(){return Bn}),new E().i(Fc,`io.github.nguyenyou.webawesome.laminar.Tab$`,{c4:1,a2:1,a1:1});var Lc;function B(){return Lc||=new Fc,Lc}function Rc(){this.aX=null,this.aW=null,this.aY=!1,this.dj=null,this.dk=!1,this.dl=null,this.dm=!1,this.dh=null,this.di=!1,Ts(this,`wa-tab-group`)}S=Rc.prototype=new Ds,S.constructor=Rc;function zc(){}zc.prototype=S,S.eR=(function(){return this.dk||=(this.dj=(K(),as(new os,`active`,Ai().aI)),!0),this.dj}),S.ct=(function(){return this.dm||=(this.dl=Ac(),!0),this.dl}),S.eQ=(function(){return this.di||=(this.dh=Pc(),!0),this.dh}),S.ck=(function(){return Rn}),new E().i(Rc,`io.github.nguyenyou.webawesome.laminar.TabGroup$`,{c5:1,a2:1,a1:1});var Bc;function Vc(){return Bc||=new Rc,Bc}function Hc(){this.aX=null,this.aW=null,this.aY=!1,this.dn=null,this.dp=!1,Ts(this,`wa-tab-panel`)}S=Hc.prototype=new Ds,S.constructor=Hc;function Uc(){}Uc.prototype=S,S.n=(function(){return this.dp||=(this.dn=(K(),as(new os,`name`,Ai().aI)),!0),this.dn}),S.ck=(function(){return zn}),new E().i(Hc,`io.github.nguyenyou.webawesome.laminar.TabPanel$`,{c6:1,a2:1,a1:1});var Wc;function V(){return Wc||=new Hc,Wc}function Gc(e){if(e.al.Z)return e.al.Q().cr()+`[]`;for(var t=e.al.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Kc(e){this.bZ=null,this.al=e}S=Kc.prototype=new w,S.constructor=Kc;function qc(){}qc.prototype=S,S.y=(function(){return(this.al.Y?`interface `:this.al.X?``:`class `)+this.al.N}),S.cr=(function(){return this.bZ===null&&(this.bZ=Gc(this)),this.bZ}),new E().i(Kc,`java.lang.Class`,{cd:1,a:1,L:1});function H(e,t){return Rs(e,t,null,!0,!0),e}var U=class extends zs{};new E().i(U,`java.lang.Exception`,{K:1,u:1,a:1});function Jc(){this.eI=null,Xc=this,this.eI=ul()}S=Jc.prototype=new Ys,S.constructor=Jc;function Yc(){}Yc.prototype=S,new E().i(Jc,`scala.Predef$`,{cK:1,cD:1,cE:1});var Xc;function Zc(){return Xc||=new Jc,Xc}function Qc(e,t){return e.bG=t,e}function $c(){this.bG=null}S=$c.prototype=new w,S.constructor=$c;function el(){}el.prototype=S,S.cq=(function(e){return this.bG.cp(e,Ef())}),S.co=(function(e){return this.bG.cp(e,Ef())});function tl(e,t){return new Hu(e).f6(t)}function nl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?W().A:new Ku(e,r,i)}function rl(e,t){for(var n=t.r();e.x()&&n.x();)if(!F().M(e.l(),n.l()))return!1;return e.x()===n.x()}function il(){this.A=null,ol=this,this.A=new Iu}S=il.prototype=new w,S.constructor=il;function al(){}al.prototype=S,new E().i(il,`scala.collection.Iterator$`,{d2:1,W:1,a:1});var ol;function W(){return ol||=new il,ol}function sl(){}S=sl.prototype=new w,S.constructor=sl;function cl(){}cl.prototype=S,new E().i(sl,`scala.collection.immutable.Map$`,{dg:1,d7:1,a:1});var ll;function ul(){return ll||=new sl,ll}function dl(e){this.dH=null,this.dH=e}S=dl.prototype=new nc,S.constructor=dl;function fl(){}fl.prototype=S,S.aC=(function(){return(0,this.dH)()}),new E().i(dl,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dC:1,aZ:1,ap:1});function G(e){this.dI=null,this.dI=e}S=G.prototype=new ic,S.constructor=G;function pl(){}pl.prototype=S,S.s=(function(e){return(0,this.dI)(e)}),new E().i(G,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dD:1,b0:1,e:1});var ml=new E().i(0,`scala.runtime.Nothing$`,{dJ:1,u:1,a:1});function hl(){}S=hl.prototype=new nc,S.constructor=hl;function gl(){}gl.prototype=S;function _l(){}S=_l.prototype=new ic,S.constructor=_l;function vl(){}vl.prototype=S;function yl(){}S=yl.prototype=new oc,S.constructor=yl;function bl(){}bl.prototype=S;function xl(){}S=xl.prototype=new cc,S.constructor=xl;function Sl(){}Sl.prototype=S;function Cl(e,t,n,r){if(this.cz=null,r===null)throw new bu;this.cz=void 0}S=Cl.prototype=new w,S.constructor=Cl;function wl(){}wl.prototype=S,S.y=(function(){return Cr(this)}),new E().i(Cl,`com.raquo.airstream.core.Observer$$anon$8`,{b7:1,b8:1,b4:1,b5:1});function Tl(e){if(this.cK=null,this.cL=!1,this.ev=null,e===null)throw new bu;Ni(this)}S=Tl.prototype=new w,S.constructor=Tl;function El(){}El.prototype=S,S.gr=(function(){return this.cL||=(this.cK=new xs(`svg`,!1),!0),this.cK}),new E().i(Tl,`com.raquo.laminar.api.Laminar$svg$`,{bo:1,bE:1,bx:1,bz:1});function Dl(){this.f=null,kl=this,this.f=new Lf}S=Dl.prototype=new w,S.constructor=Dl;function Ol(){}Ol.prototype=S,new E().i(Dl,`com.raquo.laminar.api.package$`,{br:1,a8:1,a9:1,a7:1});var kl;function K(){return kl||=new Dl,kl}function Al(e){this.d3=null,this.bX=null,this.d3=Y(),this.bX=D().f9(e)}S=Al.prototype=new w,S.constructor=Al;function jl(){}jl.prototype=S,S.et=(function(e){this.d3=e}),S.eu=(function(e){}),S.aA=(function(e){$i().cn(e,this,void 0)}),S.gu=(function(){return this.bX.data}),S.bs=(function(){return this.bX}),new E().i(Al,`com.raquo.laminar.nodes.TextNode`,{bW:1,a0:1,T:1,aa:1});function Ml(){}S=Ml.prototype=new w,S.constructor=Ml;function Nl(){}Nl.prototype=S;function Pl(e,t){return e===t}function Fl(e){return e?1231:1237}var Il=new E().i(0,`java.lang.Boolean`,{cb:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function Ll(e){return e}function Rl(e,t){return t instanceof C&&e===t.c}var zl=new E().i(0,`java.lang.Character`,{ai:1,a:1,P:1,L:1},(e=>e instanceof C)),Bl=class extends U{};function Vl(){this.v=null,this.v=``}S=Vl.prototype=new w,S.constructor=Vl;function Hl(){}Hl.prototype=S,S.eV=(function(e){var t=Ls().fS(e,0,e.a.length);return this.v=``+this.v+t,this}),S.y=(function(){return this.v}),S.p=(function(){return this.v.length}),S.e4=(function(e){return this.v.charCodeAt(e)}),new E().i(Vl,`java.lang.StringBuilder`,{cq:1,a3:1,ag:1,a:1});function Ul(){}S=Ul.prototype=new w,S.constructor=Ul;function Wl(){}Wl.prototype=S,S.y=(function(){return`<function1>`}),S.eY=(function(e){throw new Ou(e)}),S.s=(function(e){this.eY(e)}),new E().i(Ul,`scala.PartialFunction$$anon$1`,{cJ:1,g:1,e:1,a:1});function Gl(){}S=Gl.prototype=new w,S.constructor=Gl;function Kl(){}Kl.prototype=S,S.r=(function(){return this}),S.bK=(function(e){return this.bt(e,-1)}),S.bt=(function(e,t){return nl(this,e,t)}),S.y=(function(){return`<iterator>`}),S.ba=(function(e,t,n,r){return wo(this,e,t,n,r)}),S.D=(function(){return-1});function ql(e,t){return e.bH=t,e}function Jl(){this.bH=null}S=Jl.prototype=new w,S.constructor=Jl;function Yl(){}Yl.prototype=S,S.dR=(function(e){return this.bH.co(e)}),S.eh=(function(e){return this.bH.cq(e)}),S.cq=(function(e){return this.eh(e)}),S.co=(function(e){return this.dR(e)});function Xl(e){return e.aR(0)===0}function Zl(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:rl(e.r(),t)}function Ql(e){this.dL=null,this.dL=e}S=Ql.prototype=new gl,S.constructor=Ql;function $l(){}$l.prototype=S,S.aC=(function(){return(0,this.dL)()}),new E().i(Ql,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{dS:1,dR:1,aZ:1,ap:1});function q(e){this.dM=null,this.dM=e}S=q.prototype=new vl,S.constructor=q;function eu(){}eu.prototype=S,S.s=(function(e){return(0,this.dM)(e)}),new E().i(q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{dU:1,dT:1,b0:1,e:1});function tu(e){this.eL=null,this.eL=e}S=tu.prototype=new bl,S.constructor=tu;function nu(){}nu.prototype=S,new E().i(tu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{dW:1,dV:1,dE:1,cB:1});function ru(e){this.dN=null,this.dN=e}S=ru.prototype=new Sl,S.constructor=ru;function iu(){}iu.prototype=S,S.eX=(function(e,t,n){return(0,this.dN)(e,t,n)}),new E().i(ru,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{dY:1,dX:1,dF:1,cC:1});function au(e){e.bV=new mi(new Ql((()=>{e.aJ.dP()})),new Ql((()=>{e.aJ.fa()})))}function ou(e,t){cu(e,e.bC,t)&&lu(e,t)}function su(e,t){var n=e.bC;e.bC=t,cu(e,n,t)||lu(e,t)}function cu(e,t,n){var r=!t.k()&&!t.C().bL().I.k(),i=!n.k()&&!n.C().bL().I.k();return r&&!i}function lu(e,t){uu(e,t.k()?Y():new X(t.C().bL()))}function uu(e,t){if(t.k())e.bV.f5();else{var n=t.C();e.bV.gj(n)}}function du(){}S=du.prototype=new Nl,S.constructor=du;function fu(){}fu.prototype=S;var pu=class extends Bl{constructor(e){super(),Rs(this,e,null,!0,!0)}};new E().i(pu,`java.lang.ArithmeticException`,{ca:1,Q:1,K:1,u:1,a:1});var mu=new E().i(0,`java.lang.Byte`,{cc:1,R:1,a:1,P:1,L:1},(e=>tr(e))),hu=class extends Bl{constructor(e){super(),Rs(this,e,null,!0,!0)}};new E().i(hu,`java.lang.IllegalArgumentException`,{cg:1,Q:1,K:1,u:1,a:1});function gu(e,t){return Rs(e,t,null,!0,!0),e}var _u=class extends Bl{};new E().i(_u,`java.lang.IndexOutOfBoundsException`,{ak:1,Q:1,K:1,u:1,a:1});function vu(){}S=vu.prototype=new Nl,S.constructor=vu;function yu(){}yu.prototype=S,new E().i(vu,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cj:1,af:1,ad:1,ah:1,ae:1});var bu=class extends Bl{constructor(){super(),Rs(this,null,null,!0,!0)}};new E().i(bu,`java.lang.NullPointerException`,{ck:1,Q:1,K:1,u:1,a:1});var xu=new E().i(0,`java.lang.Short`,{cl:1,R:1,a:1,P:1,L:1},(e=>nr(e))),Su=class extends Bl{constructor(e){super(),Rs(this,e,null,!0,!0)}};new E().i(Su,`java.lang.UnsupportedOperationException`,{ct:1,Q:1,K:1,u:1,a:1});var Cu=class extends Bl{constructor(e){super(),Rs(this,e,null,!0,!0)}};new E().i(Cu,`java.util.NoSuchElementException`,{cx:1,Q:1,K:1,u:1,a:1});function wu(e){return e.c4||=(e.c5=e.bF===null?`null`:Du(e),!0),e.c5}function Tu(e){return e.c4?e.c5:wu(e)}function Eu(e){var t=e.bF;return`of class `+Un(t)}function Du(e){try{return e.bF+` (`+Eu(e)+`)`}catch{return`an instance `+Eu(e)}}var Ou=class extends Bl{constructor(e){super(),this.c5=null,this.bF=null,this.c4=!1,this.bF=e,Rs(this,null,null,!0,!0)}bo(){return Tu(this)}};new E().i(Ou,`scala.MatchError`,{cF:1,Q:1,K:1,u:1,a:1});function ku(){}S=ku.prototype=new w,S.constructor=ku;function Au(){}Au.prototype=S,S.k=(function(){return this===Y()}),S.D=(function(){return this.k()?0:1}),S.r=(function(){return this.k()?W().A:new Ru(this.C())});function ju(e){this.b2=0,this.dB=0,this.dA=null,this.dA=e,this.b2=0,this.dB=e.ai()}S=ju.prototype=new Kl,S.constructor=ju;function Mu(){}Mu.prototype=S,S.x=(function(){return this.b2<this.dB}),S.l=(function(){var e=this.dA.aj(this.b2);return this.b2=1+this.b2|0,e}),new E().i(ju,`scala.Product$$anon$1`,{cL:1,r:1,s:1,b:1,c:1});function Nu(e){this.bG=null,Qc(this,e)}S=Nu.prototype=new el,S.constructor=Nu;function Pu(){}Pu.prototype=S,new E().i(Nu,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{cY:1,cX:1,W:1,a:1,a4:1});function Fu(e){return Co(e,e.aQ()+`(`,`, `,`)`)}function Iu(){}S=Iu.prototype=new Kl,S.constructor=Iu;function Lu(){}Lu.prototype=S,S.x=(function(){return!1}),S.fU=(function(){throw new Cu(`next on empty iterator`)}),S.D=(function(){return 0}),S.bt=(function(e,t){return this}),S.l=(function(){this.fU()}),new E().i(Iu,`scala.collection.Iterator$$anon$19`,{d3:1,r:1,s:1,b:1,c:1});function Ru(e){this.b4=!1,this.dE=null,this.dE=e,this.b4=!1}S=Ru.prototype=new Kl,S.constructor=Ru;function zu(){}zu.prototype=S,S.x=(function(){return!this.b4}),S.l=(function(){return this.b4?W().A.l():(this.b4=!0,this.dE)}),S.bt=(function(e,t){return this.b4||e>0||t===0?W().A:this}),new E().i(Ru,`scala.collection.Iterator$$anon$20`,{d4:1,r:1,s:1,b:1,c:1});function Bu(e){for(;;){if(e.F instanceof Hu){var t=e.F;e.F=t.F,e.a6=t.a6,t.P!==null&&(e.O===null&&(e.O=t.O),t.O.b5=e.P,e.P=t.P);continue}return}}function Vu(e){for(;;)if(e.P===null)return e.F=null,e.O=null,!1;else{if(e.F=e.P.fH(),e.O===e.P&&(e.O=e.O.b5),e.P=e.P.b5,Bu(e),e.a6)return!0;if(e.F!==null&&e.F.x())return e.a6=!0,!0}}function Hu(e){this.F=null,this.P=null,this.O=null,this.a6=!1,this.F=e,this.P=null,this.O=null,this.a6=!1}S=Hu.prototype=new Kl,S.constructor=Hu;function Uu(){}Uu.prototype=S,S.x=(function(){return this.a6?!0:this.F===null?!1:this.F.x()?(this.a6=!0,!0):Vu(this)}),S.l=(function(){return this.x()?(this.a6=!1,this.F.l()):W().A.l()}),S.f6=(function(e){var t=new To(e,null);return this.P===null?(this.P=t,this.O=t):(this.O.b5=t,this.O=t),this.F===null&&(this.F=W().A),this}),new E().i(Hu,`scala.collection.Iterator$ConcatIterator`,{av:1,r:1,s:1,b:1,c:1});function Wu(e){for(;e.a0>0;)e.a7.x()?(e.a7.l(),e.a0=-1+e.a0|0):e.a0=0}function Gu(e,t){if(e.K<0)return-1;var n=e.K-t|0;return n<0?0:n}function Ku(e,t,n){this.a7=null,this.K=0,this.a0=0,this.a7=e,this.K=n,this.a0=t}S=Ku.prototype=new Kl,S.constructor=Ku;function qu(){}qu.prototype=S,S.D=(function(){var e=this.a7.D();if(e<0)return-1;var t=e-this.a0|0,n=t<0?0:t;if(this.K<0)return n;var r=this.K;return r<n?r:n}),S.x=(function(){return Wu(this),this.K!==0&&this.a7.x()}),S.l=(function(){return Wu(this),this.K>0?(this.K=-1+this.K|0,this.a7.l()):this.K<0?this.a7.l():W().A.l()}),S.bt=(function(e,t){var n=e>0?e:0;if(t<0)var r=Gu(this,n);else if(t<=n)var r=0;else if(this.K<0)var r=t-n|0;else var i=Gu(this,n),a=t-n|0,r=i<a?i:a;var o=this.a0+n|0;return r===0?W().A:o<0?(this.a0=2147483647,this.K=0,tl(this,new dl((()=>new Ku(this.a7,-2147483647+o|0,r))))):(this.a0=o,this.K=r,this)}),new E().i(Ku,`scala.collection.Iterator$SliceIterator`,{d6:1,r:1,s:1,b:1,c:1});function Ju(e,t){if(t<0)throw gu(new _u,``+t);var n=e.fh(t);if(n.k())throw gu(new _u,``+t);return n.a1()}function Yu(e,t){return Nf(t)?Xu(e,e,t):Zl(e,t)}function Xu(e,t,n){for(;;)if(t===n)return!0;else if(!t.k()&&!n.k()&&F().M(t.a1(),n.a1())){var r=t.X(),i=n.X();t=r,n=i}else return t.k()&&n.k()}function Zu(e){this.b7=null,this.b7=e}S=Zu.prototype=new Kl,S.constructor=Zu;function Qu(){}Qu.prototype=S,S.x=(function(){return!this.b7.k()}),S.l=(function(){var e=this.b7.a1();return this.b7=this.b7.X(),e}),new E().i(Zu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{db:1,r:1,s:1,b:1,c:1});function $u(){this.bH=null,ql(this,cd())}S=$u.prototype=new Yl,S.constructor=$u;function ed(){}ed.prototype=S,new E().i($u,`scala.collection.mutable.Buffer$`,{dl:1,d8:1,a4:1,W:1,a:1});var td;function nd(){return td||=new $u,td}function rd(e){this.b9=0,this.dJ=0,this.dK=null,this.dK=e,this.b9=0,this.dJ=e.ai()}S=rd.prototype=new Kl,S.constructor=rd;function id(){}id.prototype=S,S.x=(function(){return this.b9<this.dJ}),S.l=(function(){var e=this.dK.aj(this.b9);return this.b9=1+this.b9|0,e}),new E().i(rd,`scala.runtime.ScalaRunTime$$anon$1`,{dM:1,r:1,s:1,b:1,c:1});function ad(){}S=ad.prototype=new w,S.constructor=ad;function od(){}od.prototype=S,S.co=(function(e){return this.ei(e)}),S.ei=(function(e){return ec(em(new tm),e).er()}),S.cq=(function(e){return this.ei(e)}),new E().i(ad,`scala.scalajs.js.WrappedArray$`,{dP:1,dc:1,a4:1,W:1,a:1});var sd;function cd(){return sd||=new ad,sd}var ld=class e extends gc{constructor(e,t){super(),this.aE=null,this.aD=0,this.aE=e,this.aD=t,Rs(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aT(){return new ju(this)}u(){var e=-889275714;return e=L().d(e,J(`TransactionDepthExceeded`)),e=L().d(e,L().B(this.aE)),e=L().d(e,this.aD),L().q(e,2)}m(t){return this===t?!0:t instanceof e&&this.aD===t.aD?this.aE===t.aE:!1}ai(){return 2}ak(){return`TransactionDepthExceeded`}aj(e){if(e===0)return this.aE;if(e===1)return this.aD;throw gu(new _u,``+e)}y(){return`TransactionDepthExceeded: `+this.aE+`; maxDepth: `+this.aD}};new E().i(ld,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a6:1,b2:1,u:1,a:1,d:1,U:1});function ud(e,t){this.bC=null,this.aJ=null,this.bV=null,this.d0=null,this.Z=null,this.d0=e,this.Z=t,this.bC=Y(),vs(this),au(this)}S=ud.prototype=new w,S.constructor=ud;function dd(){}dd.prototype=S,S.aA=(function(e){$i().cn(e,this,void 0)}),S.bL=(function(){return this.aJ}),S.e6=(function(e){this.aJ=e}),S.eu=(function(e){ou(this,e)}),S.et=(function(e){su(this,e)}),S.y=(function(){return`ReactiveHtmlElement(`+(this.Z===null?`tag=`+this.d0.bY:this.Z.outerHTML)+`)`}),S.bs=(function(){return this.Z}),new E().i(ud,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{bU:1,a0:1,T:1,aa:1,ab:1,bT:1});function fd(e,t){return Object.is(e,t)}function pd(e){return fa().cs(e)}var md=new E().i(0,`java.lang.Double`,{aj:1,R:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),hd=new E().i(0,`java.lang.Float`,{ce:1,R:1,a:1,P:1,L:1,V:1},(e=>ir(e))),gd=new E().i(0,`java.lang.Integer`,{ch:1,R:1,a:1,P:1,L:1,V:1},(e=>rr(e)));function _d(e,t){return t instanceof M&&e.h===t.h&&e.i===t.i}function vd(e){return e.h^e.i}var yd=new E().i(0,`java.lang.Long`,{al:1,R:1,a:1,P:1,L:1,V:1},(e=>e instanceof M));function J(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function bd(e,t){return e===t}var xd=new E().i(0,`java.lang.String`,{co:1,a:1,P:1,a3:1,L:1,V:1},(e=>typeof e==`string`)),Sd=class extends _u{constructor(){super(),Rs(this,null,null,!0,!0)}};new E().i(Sd,`java.lang.StringIndexOutOfBoundsException`,{cr:1,ak:1,Q:1,K:1,u:1,a:1});function Cd(){}S=Cd.prototype=new Au,S.constructor=Cd;function wd(){}wd.prototype=S,S.fy=(function(){throw new Cu(`None.get`)}),S.ak=(function(){return`None`}),S.ai=(function(){return 0}),S.aj=(function(e){return L().bp(e)}),S.aT=(function(){return new rd(this)}),S.u=(function(){return 2433880}),S.y=(function(){return`None`}),S.C=(function(){this.fy()}),new E().i(Cd,`scala.None$`,{cG:1,aq:1,b:1,U:1,d:1,a:1});var Td;function Y(){return Td||=new Cd,Td}function X(e){this.b3=null,this.b3=e}S=X.prototype=new Au,S.constructor=X;function Ed(){}Ed.prototype=S,S.C=(function(){return this.b3}),S.ak=(function(){return`Some`}),S.ai=(function(){return 1}),S.aj=(function(e){return e===0?this.b3:L().bp(e)}),S.aT=(function(){return new rd(this)}),S.u=(function(){return R().eq(this,-889275714,!1)}),S.y=(function(){return I().eP(this)}),S.m=(function(e){return this===e||e instanceof X&&F().M(this.b3,e.b3)}),new E().i(X,`scala.Some`,{ar:1,aq:1,b:1,U:1,d:1,a:1});function Dd(){}S=Dd.prototype=new w,S.constructor=Dd;function Od(){}Od.prototype=S,S.aQ=(function(){return this.aU()}),S.bm=(function(e){So(this,e)}),S.ba=(function(e,t,n,r){return wo(this,e,t,n,r)}),S.D=(function(){return-1});function kd(e,t){return e.J=t,e.j=0,e.E=ro().bn(e.J),e}function Ad(){this.J=null,this.j=0,this.E=0}S=Ad.prototype=new Kl,S.constructor=Ad;function jd(){}jd.prototype=S,S.D=(function(){return this.E-this.j|0}),S.x=(function(){return this.j<this.E}),S.l=(function(){this.j>=ro().bn(this.J)&&W().A.l();var e=I().aP(this.J,this.j);return this.j=1+this.j|0,e}),S.bK=(function(e){if(e>0){var t=this.j+e|0;if(t<0)var n=this.E;else var r=this.E,n=r<t?r:t;this.j=n}return this}),new E().i(Ad,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function Md(e,t){return t<0?0:t>e.S?e.S:t}function Nd(e){this.dD=null,this.a5=0,this.S=0,this.dD=e,this.a5=0,this.S=e.p()}S=Nd.prototype=new Kl,S.constructor=Nd;function Pd(){}Pd.prototype=S,S.D=(function(){return this.S}),S.x=(function(){return this.S>0}),S.l=(function(){if(this.S>0){var e=this.dD.t(this.a5);return this.a5=1+this.a5|0,this.S=-1+this.S|0,e}else return W().A.l()}),S.bK=(function(e){if(e>0){this.a5=this.a5+e|0;var t=this.S-e|0;this.S=t<0?0:t}return this}),S.bt=(function(e,t){var n=Md(this,e),r=Md(this,t)-n|0;return this.S=r<0?0:r,this.a5=this.a5+n|0,this}),new E().i(Nd,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{d1:1,r:1,s:1,b:1,c:1,a:1});function Fd(e){return e.cg||=(e.ch=new pp(new T(0)),!0),e.ch}function Id(e){return e.cg?e.ch:Fd(e)}function Ld(){this.ch=null,this.eJ=null,this.cg=!1,zd=this,this.eJ=new Nu(this)}S=Ld.prototype=new w,S.constructor=Ld;function Rd(){}Rd.prototype=S,S.fw=(function(e,t){return e instanceof Xf?e:this.gy(Us().eg(e,t))}),S.gy=(function(e){if(e===null)return null;if(e instanceof T)return new pp(e);if(e instanceof mr)return new lp(e);if(e instanceof _r)return new ap(e);if(e instanceof hr)return new dp(e);if(e instanceof gr)return new sp(e);if(e instanceof dr)return new rp(e);if(e instanceof fr)return new tp(e);if(e instanceof pr)return new hp(e);if(e instanceof ur)return new $f(e);if(Za(e,1))return new _p(e);throw new Ou(e)}),S.cp=(function(e,t){return this.fw(e,t)}),new E().i(Ld,`scala.collection.immutable.ArraySeq$`,{df:1,ax:1,at:1,as:1,au:1,a:1});var zd;function Bd(){return zd||=new Ld,zd}function Vd(){this.eK=null,this.dG=null,Ud=this,this.eK=new Nu(this),this.dG=new Lp(new T(0))}S=Vd.prototype=new w,S.constructor=Vd;function Hd(){}Hd.prototype=S,S.fx=(function(e,t){return this.fO(Us().eg(e,t))}),S.fO=(function(e){if(e===null)return null;if(e instanceof T)return new Lp(e);if(e instanceof mr)return new Np(e);if(e instanceof _r)return new kp(e);if(e instanceof hr)return new Fp(e);if(e instanceof gr)return new jp(e);if(e instanceof dr)return new Dp(e);if(e instanceof fr)return new Tp(e);if(e instanceof pr)return new zp(e);if(e instanceof ur)return new Cp(e);if(Za(e,1))return new Vp(e);throw new Ou(e)}),S.cp=(function(e,t){return this.fx(e,t)}),new E().i(Vd,`scala.collection.mutable.ArraySeq$`,{dj:1,ax:1,at:1,as:1,au:1,a:1});var Ud;function Wd(){return Ud||=new Vd,Ud}function Gd(){}S=Gd.prototype=new fu,S.constructor=Gd;function Kd(){}Kd.prototype=S;function qd(e){this.J=null,this.j=0,this.E=0,this.c6=null,this.c6=e,kd(this,e)}S=qd.prototype=new jd,S.constructor=qd;function Jd(){}Jd.prototype=S,S.fV=(function(){this.j>=this.c6.a.length&&W().A.l();var e=this.c6.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.fV()}),new E().i(qd,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{cO:1,M:1,r:1,s:1,b:1,c:1,a:1});function Yd(e){this.J=null,this.j=0,this.E=0,this.c7=null,this.c7=e,kd(this,e)}S=Yd.prototype=new jd,S.constructor=Yd;function Xd(){}Xd.prototype=S,S.fW=(function(){this.j>=this.c7.a.length&&W().A.l();var e=this.c7.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return ar(this.fW())}),new E().i(Yd,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{cP:1,M:1,r:1,s:1,b:1,c:1,a:1});function Zd(e){this.J=null,this.j=0,this.E=0,this.c8=null,this.c8=e,kd(this,e)}S=Zd.prototype=new jd,S.constructor=Zd;function Qd(){}Qd.prototype=S,S.fX=(function(){this.j>=this.c8.a.length&&W().A.l();var e=this.c8.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.fX()}),new E().i(Zd,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{cQ:1,M:1,r:1,s:1,b:1,c:1,a:1});function $d(e){this.J=null,this.j=0,this.E=0,this.c9=null,this.c9=e,kd(this,e)}S=$d.prototype=new jd,S.constructor=$d;function ef(){}ef.prototype=S,S.fY=(function(){this.j>=this.c9.a.length&&W().A.l();var e=this.c9.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.fY()}),new E().i($d,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{cR:1,M:1,r:1,s:1,b:1,c:1,a:1});function tf(e){this.J=null,this.j=0,this.E=0,this.ca=null,this.ca=e,kd(this,e)}S=tf.prototype=new jd,S.constructor=tf;function nf(){}nf.prototype=S,S.fZ=(function(){this.j>=this.ca.a.length&&W().A.l();var e=this.ca.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.fZ()}),new E().i(tf,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{cS:1,M:1,r:1,s:1,b:1,c:1,a:1});function rf(e){this.J=null,this.j=0,this.E=0,this.cb=null,this.cb=e,kd(this,e)}S=rf.prototype=new jd,S.constructor=rf;function af(){}af.prototype=S,S.g0=(function(){this.j>=this.cb.a.length&&W().A.l();var e=this.cb.a[this.j],t=e.h,n=e.i;return this.j=1+this.j|0,new M(t,n)}),S.l=(function(){return this.g0()}),new E().i(rf,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{cT:1,M:1,r:1,s:1,b:1,c:1,a:1});function of(e){this.J=null,this.j=0,this.E=0,this.cc=null,this.cc=e,kd(this,e)}S=of.prototype=new jd,S.constructor=of;function sf(){}sf.prototype=S,S.g1=(function(){this.j>=this.cc.a.length&&W().A.l();var e=this.cc.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.g1()}),new E().i(of,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{cU:1,M:1,r:1,s:1,b:1,c:1,a:1});function cf(e){this.J=null,this.j=0,this.E=0,this.dC=null,this.dC=e,kd(this,e)}S=cf.prototype=new jd,S.constructor=cf;function lf(){}lf.prototype=S,S.g2=(function(){this.j>=this.dC.a.length&&W().A.l(),this.j=1+this.j|0}),S.l=(function(){this.g2()}),new E().i(cf,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{cV:1,M:1,r:1,s:1,b:1,c:1,a:1});function uf(e){this.J=null,this.j=0,this.E=0,this.cd=null,this.cd=e,kd(this,e)}S=uf.prototype=new jd,S.constructor=uf;function df(){}df.prototype=S,S.g3=(function(){this.j>=this.cd.a.length&&W().A.l();var e=this.cd.a[this.j];return this.j=1+this.j|0,e}),S.l=(function(){return this.g3()}),new E().i(uf,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{cW:1,M:1,r:1,s:1,b:1,c:1,a:1});function ff(e){return e.aQ()+`(<not computed>)`}function pf(){}S=pf.prototype=new w,S.constructor=pf;function mf(){}mf.prototype=S;var Z=class e extends Bl{constructor(e){super(),this.T=null,this.T=e,Rs(this,null,null,!0,!0)}bo(){return Kn(this.T)}ak(){return`JavaScriptException`}ai(){return 1}aj(e){return e===0?this.T:L().bp(e)}aT(){return new rd(this)}u(){return R().eq(this,-889275714,!1)}m(t){return this===t||t instanceof e&&F().M(this.T,t.T)}};new E().i(Z,`scala.scalajs.js.JavaScriptException`,{b1:1,Q:1,K:1,u:1,a:1,U:1,d:1});function hf(e,t){typeof console<`u`&&(e.dr&&console.error?console.error(t):console.log(t))}function gf(e){this.dr=!1,this.b0=null,this.dr=e,new vu,this.b0=``}S=gf.prototype=new Kd,S.constructor=gf;function _f(){}_f.prototype=S,S.fL=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b0=``+this.b0+t,t=``;else{var r=this.b0,i=t;hf(this,``+r+i.substring(0,n)),this.b0=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(gf,`java.lang.JSConsoleBasedPrintStream`,{ci:1,c9:1,c8:1,af:1,ad:1,ah:1,ae:1,ag:1});function vf(e,t,n){for(;;)if(t<=0||n.k())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function yf(){this.ci=null}S=yf.prototype=new mf,S.constructor=yf;function bf(){}bf.prototype=S,S.y=(function(){return this.ci}),S.m=(function(e){return this===e}),S.u=(function(){return er(this)});function xf(){}S=xf.prototype=new Od,S.constructor=xf;function Sf(){}Sf.prototype=S,S.y=(function(){return ff(this)});function Cf(){this.ci=null,this.ci=`Any`}S=Cf.prototype=new bf,S.constructor=Cf;function wf(){}wf.prototype=S,S.ge=(function(){return vr.l()}),S.fT=(function(e){return new T(e)}),new E().i(Cf,`scala.reflect.ManifestFactory$AnyManifest$`,{dy:1,dA:1,dz:1,dx:1,dw:1,dv:1,dB:1,a:1,d:1});var Tf;function Ef(){return Tf||=new Cf,Tf}function Q(e,t){return e===t?!0:Df(t)&&t.e3(e)?e.cv(t):!1}function Df(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Of(){}S=Of.prototype=new Od,S.constructor=Of;function kf(){}kf.prototype=S,S.e3=(function(e){return!0}),S.m=(function(e){return Q(this,e)}),S.u=(function(){return R().gf(this)}),S.y=(function(){return Fu(this)}),S.k=(function(){return Xl(this)}),S.cv=(function(e){return Zl(this,e)});function Af(){}S=Af.prototype=new Sf,S.constructor=Af;function jf(){}jf.prototype=S;function Mf(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Nf(e){return!!(e&&e.$classData&&e.$classData.n.X)}function Pf(e,t){return e.b6=t,e}function Ff(){this.b6=null}S=Ff.prototype=new jf,S.constructor=Ff;function If(){}If.prototype=S,S.t=(function(e){return this.b6.t(e)}),S.p=(function(){return this.b6.p()}),S.k=(function(){return this.b6.k()});function Lf(){this.cM=null,this.cN=!1,this.ex=null,this.ew=null,this.cO=null,this.cP=!1,ji(this),Ti(this),Ci(this),wi(this)}S=Lf.prototype=new w,S.constructor=Lf;function Rf(){}Rf.prototype=S,S.fe=(function(){return this.cN||=(this.cM=new cs(`disabled`,Ai().cR),!0),this.cM}),S.gq=(function(){return this.cP||=(this.cO=new Tl(this),!0),this.cO}),new E().i(Lf,`com.raquo.laminar.api.package$$anon$1`,{bs:1,bD:1,bw:1,bB:1,bA:1,bC:1,by:1,bq:1,bm:1,bp:1,a8:1,a9:1,a7:1,bn:1});function zf(e){this.b6=null,Pf(this,e)}S=zf.prototype=new If,S.constructor=zf;function Bf(){}Bf.prototype=S,S.r=(function(){return new Nd(this)}),S.aU=(function(){return`IndexedSeqView`}),S.aR=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),S.D=(function(){return this.p()}),new E().i(zf,`scala.collection.IndexedSeqView$Id`,{d0:1,da:1,cM:1,cN:1,h:1,i:1,b:1,k:1,c:1,j:1,dd:1,a:1,d9:1,l:1,cZ:1,o:1});function Vf(){}S=Vf.prototype=new kf,S.constructor=Vf;function Hf(){}Hf.prototype=S;function Uf(e,t){return!Gf(t)||e.p()===t.p()}function Wf(e,t){if(Gf(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.dS(),o=t.dS(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().M(e.t(i),t.t(i)),i=1+i|0;if(i<n&&r)for(var p=e.r().bK(i),m=t.r().bK(i);r&&p.x();)r=F().M(p.l(),m.l())}return r}else return Zl(e,t)}function Gf(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Kf(){}S=Kf.prototype=new kf,S.constructor=Kf;function qf(){}qf.prototype=S;function Jf(){}S=Jf.prototype=new qf,S.constructor=Jf;function Yf(){}Yf.prototype=S,S.dQ=(function(e){return ec(this,e)});function Xf(){}S=Xf.prototype=new Hf,S.constructor=Xf;function Zf(){}Zf.prototype=S,S.e3=(function(e){return Uf(this,e)}),S.cv=(function(e){return Wf(this,e)}),S.aU=(function(){return`IndexedSeq`}),S.aR=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),S.D=(function(){return this.p()}),S.aQ=(function(){return`ArraySeq`}),S.dS=(function(){return 2147483647});function $(){}S=$.prototype=new qf,S.constructor=$;function Qf(){}Qf.prototype=S,S.aU=(function(){return`IndexedSeq`}),S.aR=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),S.D=(function(){return this.p()}),S.aQ=(function(){return`ArraySeq`}),S.m=(function(e){return e instanceof $&&ro().bn(this.U())!==ro().bn(e.U())?!1:Q(this,e)});function $f(e){this.aq=null,this.aq=e}S=$f.prototype=new Zf,S.constructor=$f;function ep(){}ep.prototype=S,S.p=(function(){return this.aq.a.length}),S.u=(function(){var e=R();return e.e2(this.aq,e.z)}),S.m=(function(e){return e instanceof $f?j().ee(this.aq,e.aq):Q(this,e)}),S.r=(function(){return new uf(this.aq)}),S.bj=(function(e){return this.aq.a[e]}),S.s=(function(e){return this.bj(e|0)}),S.t=(function(e){return this.bj(e)}),new E().i($f,`scala.collection.immutable.ArraySeq$ofBoolean`,{aA:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function tp(e){this.ar=null,this.ar=e}S=tp.prototype=new Zf,S.constructor=tp;function np(){}np.prototype=S,S.p=(function(){return this.ar.a.length}),S.bb=(function(e){return this.ar.a[e]}),S.u=(function(){var e=R();return e.dU(this.ar,e.z)}),S.m=(function(e){return e instanceof tp?j().e7(this.ar,e.ar):Q(this,e)}),S.r=(function(){return new qd(this.ar)}),S.s=(function(e){return this.bb(e|0)}),S.t=(function(e){return this.bb(e)}),new E().i(tp,`scala.collection.immutable.ArraySeq$ofByte`,{aB:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function rp(e){this.a8=null,this.a8=e}S=rp.prototype=new Zf,S.constructor=rp;function ip(){}ip.prototype=S,S.p=(function(){return this.a8.a.length}),S.bc=(function(e){return this.a8.a[e]}),S.u=(function(){var e=R();return e.dV(this.a8,e.z)}),S.m=(function(e){return e instanceof rp?j().e8(this.a8,e.a8):Q(this,e)}),S.r=(function(){return new Yd(this.a8)}),S.ba=(function(e,t,n,r){return new Dp(this.a8).ba(e,t,n,r)}),S.s=(function(e){return ar(this.bc(e|0))}),S.t=(function(e){return ar(this.bc(e))}),new E().i(rp,`scala.collection.immutable.ArraySeq$ofChar`,{aC:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function ap(e){this.as=null,this.as=e}S=ap.prototype=new Zf,S.constructor=ap;function op(){}op.prototype=S,S.p=(function(){return this.as.a.length}),S.u=(function(){var e=R();return e.dW(this.as,e.z)}),S.m=(function(e){return e instanceof ap?j().e9(this.as,e.as):Q(this,e)}),S.r=(function(){return new Zd(this.as)}),S.be=(function(e){return this.as.a[e]}),S.s=(function(e){return this.be(e|0)}),S.t=(function(e){return this.be(e)}),new E().i(ap,`scala.collection.immutable.ArraySeq$ofDouble`,{aD:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function sp(e){this.at=null,this.at=e}S=sp.prototype=new Zf,S.constructor=sp;function cp(){}cp.prototype=S,S.p=(function(){return this.at.a.length}),S.u=(function(){var e=R();return e.dX(this.at,e.z)}),S.m=(function(e){return e instanceof sp?j().ea(this.at,e.at):Q(this,e)}),S.r=(function(){return new $d(this.at)}),S.bf=(function(e){return this.at.a[e]}),S.s=(function(e){return this.bf(e|0)}),S.t=(function(e){return this.bf(e)}),new E().i(sp,`scala.collection.immutable.ArraySeq$ofFloat`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function lp(e){this.au=null,this.au=e}S=lp.prototype=new Zf,S.constructor=lp;function up(){}up.prototype=S,S.p=(function(){return this.au.a.length}),S.u=(function(){var e=R();return e.dY(this.au,e.z)}),S.m=(function(e){return e instanceof lp?j().eb(this.au,e.au):Q(this,e)}),S.r=(function(){return new tf(this.au)}),S.bg=(function(e){return this.au.a[e]}),S.s=(function(e){return this.bg(e|0)}),S.t=(function(e){return this.bg(e)}),new E().i(lp,`scala.collection.immutable.ArraySeq$ofInt`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function dp(e){this.av=null,this.av=e}S=dp.prototype=new Zf,S.constructor=dp;function fp(){}fp.prototype=S,S.p=(function(){return this.av.a.length}),S.u=(function(){var e=R();return e.dZ(this.av,e.z)}),S.m=(function(e){return e instanceof dp?j().ec(this.av,e.av):Q(this,e)}),S.r=(function(){return new rf(this.av)}),S.bh=(function(e){return this.av.a[e]}),S.s=(function(e){return this.bh(e|0)}),S.t=(function(e){return this.bh(e)}),new E().i(dp,`scala.collection.immutable.ArraySeq$ofLong`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function pp(e){this.aw=null,this.aw=e}S=pp.prototype=new Zf,S.constructor=pp;function mp(){}mp.prototype=S,S.p=(function(){return this.aw.a.length}),S.t=(function(e){return this.aw.a[e]}),S.u=(function(){var e=R();return e.dT(this.aw,e.z)}),S.m=(function(e){return e instanceof pp?Us().ef(this.aw,e.aw):Q(this,e)}),S.r=(function(){return kd(new Ad,this.aw)}),S.s=(function(e){return this.t(e|0)}),new E().i(pp,`scala.collection.immutable.ArraySeq$ofRef`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function hp(e){this.ax=null,this.ax=e}S=hp.prototype=new Zf,S.constructor=hp;function gp(){}gp.prototype=S,S.p=(function(){return this.ax.a.length}),S.bd=(function(e){return this.ax.a[e]}),S.u=(function(){var e=R();return e.e0(this.ax,e.z)}),S.m=(function(e){return e instanceof hp?j().ed(this.ax,e.ax):Q(this,e)}),S.r=(function(){return new of(this.ax)}),S.s=(function(e){return this.bd(e|0)}),S.t=(function(e){return this.bd(e)}),new E().i(hp,`scala.collection.immutable.ArraySeq$ofShort`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function _p(e){this.aO=null,this.aO=e}S=_p.prototype=new Zf,S.constructor=_p;function vp(){}vp.prototype=S,S.p=(function(){return this.aO.a.length}),S.u=(function(){var e=R();return e.e1(this.aO,e.z)}),S.m=(function(e){return e instanceof _p?this.aO.a.length===e.aO.a.length:Q(this,e)}),S.r=(function(){return new cf(this.aO)}),S.bi=(function(e){}),S.s=(function(e){this.bi(e|0)}),S.t=(function(e){this.bi(e)}),new E().i(_p,`scala.collection.immutable.ArraySeq$ofUnit`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function yp(e,t,n,r){for(;;)if(t===r)return n.k()?0:1;else if(n.k())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function bp(e,t,n){for(;;)if(t===n)return!0;else{var r=t.k(),i=n.k();if(!(r||i)&&F().M(t.a1(),n.a1())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function xp(){}S=xp.prototype=new Hf,S.constructor=xp;function Sp(){}Sp.prototype=S,S.r=(function(){return new Zu(this)}),S.aU=(function(){return`LinearSeq`}),S.t=(function(e){return Ju(this,e)}),S.cv=(function(e){return Yu(this,e)}),S.k=(function(){return this===Jp()}),S.bm=(function(e){for(var t=this;!t.k();)e.s(t.a1()),t=t.X()}),S.p=(function(){for(var e=this,t=0;!e.k();)t=1+t|0,e=e.X();return t}),S.aR=(function(e){return e<0?1:yp(this,0,this,e)}),S.aQ=(function(){return`List`}),S.m=(function(e){return e instanceof xp?bp(this,this,e):Q(this,e)}),S.s=(function(e){return Ju(this,e|0)}),S.fh=(function(e){return vf(this,e,this)});function Cp(e){this.a9=null,this.a9=e}S=Cp.prototype=new Qf,S.constructor=Cp;function wp(){}wp.prototype=S,S.p=(function(){return this.a9.a.length}),S.u=(function(){var e=R();return e.e2(this.a9,e.z)}),S.m=(function(e){return e instanceof Cp?j().ee(this.a9,e.a9):$.prototype.m.call(this,e)}),S.r=(function(){return new uf(this.a9)}),S.bj=(function(e){return this.a9.a[e]}),S.s=(function(e){return this.bj(e|0)}),S.t=(function(e){return this.bj(e)}),S.U=(function(){return this.a9}),new E().i(Cp,`scala.collection.mutable.ArraySeq$ofBoolean`,{aM:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Tp(e){this.aa=null,this.aa=e}S=Tp.prototype=new Qf,S.constructor=Tp;function Ep(){}Ep.prototype=S,S.p=(function(){return this.aa.a.length}),S.bb=(function(e){return this.aa.a[e]}),S.u=(function(){var e=R();return e.dU(this.aa,e.z)}),S.m=(function(e){return e instanceof Tp?j().e7(this.aa,e.aa):$.prototype.m.call(this,e)}),S.r=(function(){return new qd(this.aa)}),S.s=(function(e){return this.bb(e|0)}),S.t=(function(e){return this.bb(e)}),S.U=(function(){return this.aa}),new E().i(Tp,`scala.collection.mutable.ArraySeq$ofByte`,{aN:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Dp(e){this.Q=null,this.Q=e}S=Dp.prototype=new Qf,S.constructor=Dp;function Op(){}Op.prototype=S,S.p=(function(){return this.Q.a.length}),S.bc=(function(e){return this.Q.a[e]}),S.u=(function(){var e=R();return e.dV(this.Q,e.z)}),S.m=(function(e){return e instanceof Dp?j().e8(this.Q,e.Q):$.prototype.m.call(this,e)}),S.r=(function(){return new Yd(this.Q)}),S.ba=(function(e,t,n,r){var i=e.L;t.length!==0&&(i.v=``+i.v+t);var a=this.Q.a.length;if(a!==0)if(n===``)i.eV(this.Q);else{i.p();var o=this.Q.a[0],s=``+Xn(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.Q.a[c],u=``+Xn(l);i.v+=u,c=1+c|0}}return r.length!==0&&(i.v=``+i.v+r),e}),S.s=(function(e){return ar(this.bc(e|0))}),S.t=(function(e){return ar(this.bc(e))}),S.U=(function(){return this.Q}),new E().i(Dp,`scala.collection.mutable.ArraySeq$ofChar`,{aO:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function kp(e){this.ab=null,this.ab=e}S=kp.prototype=new Qf,S.constructor=kp;function Ap(){}Ap.prototype=S,S.p=(function(){return this.ab.a.length}),S.u=(function(){var e=R();return e.dW(this.ab,e.z)}),S.m=(function(e){return e instanceof kp?j().e9(this.ab,e.ab):$.prototype.m.call(this,e)}),S.r=(function(){return new Zd(this.ab)}),S.be=(function(e){return this.ab.a[e]}),S.s=(function(e){return this.be(e|0)}),S.t=(function(e){return this.be(e)}),S.U=(function(){return this.ab}),new E().i(kp,`scala.collection.mutable.ArraySeq$ofDouble`,{aP:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function jp(e){this.ac=null,this.ac=e}S=jp.prototype=new Qf,S.constructor=jp;function Mp(){}Mp.prototype=S,S.p=(function(){return this.ac.a.length}),S.u=(function(){var e=R();return e.dX(this.ac,e.z)}),S.m=(function(e){return e instanceof jp?j().ea(this.ac,e.ac):$.prototype.m.call(this,e)}),S.r=(function(){return new $d(this.ac)}),S.bf=(function(e){return this.ac.a[e]}),S.s=(function(e){return this.bf(e|0)}),S.t=(function(e){return this.bf(e)}),S.U=(function(){return this.ac}),new E().i(jp,`scala.collection.mutable.ArraySeq$ofFloat`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Np(e){this.ad=null,this.ad=e}S=Np.prototype=new Qf,S.constructor=Np;function Pp(){}Pp.prototype=S,S.p=(function(){return this.ad.a.length}),S.u=(function(){var e=R();return e.dY(this.ad,e.z)}),S.m=(function(e){return e instanceof Np?j().eb(this.ad,e.ad):$.prototype.m.call(this,e)}),S.r=(function(){return new tf(this.ad)}),S.bg=(function(e){return this.ad.a[e]}),S.s=(function(e){return this.bg(e|0)}),S.t=(function(e){return this.bg(e)}),S.U=(function(){return this.ad}),new E().i(Np,`scala.collection.mutable.ArraySeq$ofInt`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Fp(e){this.ae=null,this.ae=e}S=Fp.prototype=new Qf,S.constructor=Fp;function Ip(){}Ip.prototype=S,S.p=(function(){return this.ae.a.length}),S.u=(function(){var e=R();return e.dZ(this.ae,e.z)}),S.m=(function(e){return e instanceof Fp?j().ec(this.ae,e.ae):$.prototype.m.call(this,e)}),S.r=(function(){return new rf(this.ae)}),S.bh=(function(e){return this.ae.a[e]}),S.s=(function(e){return this.bh(e|0)}),S.t=(function(e){return this.bh(e)}),S.U=(function(){return this.ae}),new E().i(Fp,`scala.collection.mutable.ArraySeq$ofLong`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Lp(e){this.af=null,this.af=e}S=Lp.prototype=new Qf,S.constructor=Lp;function Rp(){}Rp.prototype=S,S.p=(function(){return this.af.a.length}),S.t=(function(e){return this.af.a[e]}),S.u=(function(){var e=R();return e.dT(this.af,e.z)}),S.m=(function(e){return e instanceof Lp?Us().ef(this.af,e.af):$.prototype.m.call(this,e)}),S.r=(function(){return kd(new Ad,this.af)}),S.s=(function(e){return this.t(e|0)}),S.U=(function(){return this.af}),new E().i(Lp,`scala.collection.mutable.ArraySeq$ofRef`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function zp(e){this.ag=null,this.ag=e}S=zp.prototype=new Qf,S.constructor=zp;function Bp(){}Bp.prototype=S,S.p=(function(){return this.ag.a.length}),S.bd=(function(e){return this.ag.a[e]}),S.u=(function(){var e=R();return e.e0(this.ag,e.z)}),S.m=(function(e){return e instanceof zp?j().ed(this.ag,e.ag):$.prototype.m.call(this,e)}),S.r=(function(){return new of(this.ag)}),S.s=(function(e){return this.bd(e|0)}),S.t=(function(e){return this.bd(e)}),S.U=(function(){return this.ag}),new E().i(zp,`scala.collection.mutable.ArraySeq$ofShort`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Vp(e){this.ay=null,this.ay=e}S=Vp.prototype=new Qf,S.constructor=Vp;function Hp(){}Hp.prototype=S,S.p=(function(){return this.ay.a.length}),S.u=(function(){var e=R();return e.e1(this.ay,e.z)}),S.m=(function(e){return e instanceof Vp?this.ay.a.length===e.ay.a.length:$.prototype.m.call(this,e)}),S.r=(function(){return new cf(this.ay)}),S.bi=(function(e){}),S.s=(function(e){this.bi(e|0)}),S.t=(function(e){this.bi(e)}),S.U=(function(){return this.ay}),new E().i(Vp,`scala.collection.mutable.ArraySeq$ofUnit`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Up(e,t){this.ce=null,this.cf=null,this.ce=e,this.cf=t}S=Up.prototype=new Sp,S.constructor=Up;function Wp(){}Wp.prototype=S,S.a1=(function(){return this.ce}),S.ak=(function(){return`::`}),S.ai=(function(){return 2}),S.aj=(function(e){switch(e){case 0:return this.ce;case 1:return this.cf;default:return L().bp(e)}}),S.aT=(function(){return new rd(this)}),S.X=(function(){return this.cf}),new E().i(Up,`scala.collection.immutable.$colon$colon`,{de:1,a5:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aK:1,X:1,aw:1,aL:1,ay:1,q:1,p:1,A:1,az:1,a:1,U:1});function Gp(){}S=Gp.prototype=new Sp,S.constructor=Gp;function Kp(){}Kp.prototype=S,S.fG=(function(){throw new Cu(`head of empty list`)}),S.gt=(function(){throw new Su(`tail of empty list`)}),S.D=(function(){return 0}),S.r=(function(){return W().A}),S.ak=(function(){return`Nil`}),S.ai=(function(){return 0}),S.aj=(function(e){return L().bp(e)}),S.aT=(function(){return new rd(this)}),S.X=(function(){this.gt()}),S.a1=(function(){this.fG()}),new E().i(Gp,`scala.collection.immutable.Nil$`,{dh:1,a5:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aK:1,X:1,aw:1,aL:1,ay:1,q:1,p:1,A:1,az:1,a:1,U:1});var qp;function Jp(){return qp||=new Gp,qp}function Yp(e,t){return e.L=t,e}function Xp(e){return Yp(e,new Vl),e}function Zp(){this.L=null}S=Zp.prototype=new qf,S.constructor=Zp;function Qp(){}Qp.prototype=S,S.aU=(function(){return`IndexedSeq`}),S.r=(function(){return new Nd(new zf(this))}),S.aR=(function(e){var t=this.L.p();return t===e?0:t<e?-1:1}),S.dQ=(function(e){return ec(this,e)}),S.p=(function(){return this.L.p()}),S.D=(function(){return this.L.p()}),S.eS=(function(e){var t=this.L,n=``+Xn(e);return t.v+=n,this}),S.y=(function(){return this.L.v}),S.k=(function(){return this.L.p()===0}),S.er=(function(){return this.L.v}),S.cm=(function(e){return this.eS(or(e))}),S.s=(function(e){var t=e|0;return ar(this.L.e4(t))}),S.t=(function(e){return ar(this.L.e4(e))}),new E().i(Zp,`scala.collection.mutable.StringBuilder`,{dq:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dn:1,aW:1,aY:1,aX:1,D:1,n:1,o:1,E:1,a3:1,a:1});function $p(e,t){return e.az=t,e}function em(e){return $p(e,[]),e}function tm(){this.az=null}S=tm.prototype=new Yf,S.constructor=tm;function nm(){}nm.prototype=S,S.aU=(function(){return`IndexedSeq`}),S.r=(function(){return new Nd(new zf(this))}),S.aR=(function(e){var t=this.az.length|0;return t===e?0:t<e?-1:1}),S.t=(function(e){return this.az[e]}),S.p=(function(){return this.az.length|0}),S.D=(function(){return this.az.length|0}),S.aQ=(function(){return`WrappedArray`}),S.er=(function(){return this}),S.cm=(function(e){return this.az.push(e),this}),S.s=(function(e){var t=e|0;return this.az[t]}),new E().i(tm,`scala.scalajs.js.WrappedArray`,{dO:1,di:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dk:1,aY:1,aX:1,dp:1,q:1,p:1,D:1,n:1,o:1,E:1,dm:1,aW:1,a:1}),Vn=new M(0,0),xr.z=Vn,ca(new(xd.r()).C([]));