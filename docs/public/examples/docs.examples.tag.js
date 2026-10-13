var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}};
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const r=globalThis,i=r.ShadowRoot&&(r.ShadyCSS===void 0||r.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;var s=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=o.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&o.set(t,e))}return e}toString(){return this.cssText}};const c=e=>new s(typeof e==`string`?e:e+``,void 0,a),l=(e,...t)=>new s(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,a),u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),i=r.litNonce;i!==void 0&&t.setAttribute(`nonce`,i),t.textContent=n.cssText,e.appendChild(t)}},d=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return c(t)})(e):e,{is:f,defineProperty:p,getOwnPropertyDescriptor:m,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,oe=re.reactiveElementPolyfillSupport,se=(e,t)=>e,ce={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},le=(e,t)=>!f(e,t),ue={attribute:!0,type:String,converter:ce,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=new WeakMap;var de=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ue){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&p(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=m(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ue}static _$Ei(){if(this.hasOwnProperty(se(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(d(e))}else e!==void 0&&t.push(d(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ce:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ce:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??le)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};de.elementStyles=[],de.shadowRootOptions={mode:`open`},de[se(`elementProperties`)]=new Map,de[se(`finalized`)]=new Map,oe?.({ReactiveElement:de}),(re.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const fe=globalThis,pe=fe.trustedTypes,me=pe?pe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,he=`$lit$`,ge=`lit$${Math.random().toFixed(9).slice(2)}$`,_e=`?`+ge,ve=`<${_e}>`,ye=document,be=()=>ye.createComment(``),xe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Se=Array.isArray,Ce=e=>Se(e)||typeof e?.[Symbol.iterator]==`function`,we=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=/-->/g,De=/>/g,Oe=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ke=/'/g,Ae=/"/g,je=/^(?:script|style|textarea|title)$/i,Me=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Pe=new WeakMap,Fe=ye.createTreeWalker(ye,129);function Ie(e,t){if(!Se(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return me===void 0?t:me.createHTML(t)}const Le=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Te;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Te?c[1]===`!--`?o=Ee:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Oe):(je.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Oe):o=De:o===Oe?c[0]===`>`?(o=i??Te,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Oe:c[3]===`"`?Ae:ke):o===Ae||o===ke?o=Oe:o===Ee||o===De?o=Te:(o=Oe,i=void 0);let d=o===Oe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Te?n+ve:l>=0?(r.push(s),n.slice(0,l)+he+n.slice(l)+ge+d):n+ge+(l===-2?t:d)}return[Ie(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Re=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Le(t,n);if(this.el=e.createElement(l,r),Fe.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Fe.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(he)){let t=u[o++],n=i.getAttribute(e).split(ge),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ue:r[1]===`?`?We:r[1]===`@`?Ge:He}),i.removeAttribute(e)}else e.startsWith(ge)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(je.test(i.tagName)){let e=i.textContent.split(ge),t=e.length-1;if(t>0){i.textContent=pe?pe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],be()),Fe.nextNode(),c.push({type:2,index:++a});i.append(e[t],be())}}}else if(i.nodeType===8)if(i.data===_e)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ge,e+1))!==-1;)c.push({type:7,index:a}),e+=ge.length-1}a++}}static createElement(e,t){let n=ye.createElement(`template`);return n.innerHTML=e,n}};function ze(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=xe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ze(e,i._$AS(e,t.values),i,r)),t}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ye).importNode(t,!0);Fe.currentNode=r;let i=Fe.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ve(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Fe.nextNode(),a++)}return Fe.currentNode=ye,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ve=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ze(this,e,t),xe(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ce(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(ye.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Re.createElement(Ie(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Be(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Pe.get(e.strings);return t===void 0&&Pe.set(e.strings,t=new Re(e)),t}k(t){Se(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(be()),this.O(be()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},He=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ze(this,e,t,0),a=!xe(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ze(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!xe(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ue=class extends He{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},We=class extends He{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Ge=class extends He{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ze(this,e,t,0)??h)===Ne)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ze(this,e)}};const qe={M:he,P:ge,A:_e,C:1,L:Le,R:Be,D:Ce,V:ze,I:Ve,H:He,N:We,U:Ge,B:Ue,F:Ke},Je=fe.litHtmlPolyfillSupport;Je?.(Re,Ve),(fe.litHtmlVersions??=[]).push(`3.3.1`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ve(t.insertBefore(be(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis;var Ze=class extends de{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.1`);
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
`,et={small:`s`,medium:`m`,large:`l`},tt=new Set;function nt(e,t){t in et&&!tt.has(`${e}:${t}`)&&(tt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${et[t]}" instead. The long-form value will be removed in the next major version.`))}
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function at(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ot=Object.defineProperty,st=Object.getOwnPropertyDescriptor,ct=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?st(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ot(t,n,i),i},lt=(e,t,n)=>t.has(e)||ct(`Cannot `+n),ut=(e,t,n)=>(lt(e,t,`read from private field`),n?n.call(e):t.get(e)),dt=(e,t,n)=>t.has(e)?ct(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ft=(e,t,n,r)=>(lt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},mt={attribute:!0,type:String,converter:ce,reflect:!1,hasChanged:le},ht=(e=mt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?ht(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function gt(e){return _({...e,state:!0,attribute:!1})}
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
`,bt=/;\s+$/;function xt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function St(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(bt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var Ct,wt=class extends Ze{constructor(){super(),dt(this,Ct,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[yt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){ut(this,Ct)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ft(this,Ct,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=St({property:xt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=St({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Ct=new WeakMap,g([_()],wt.prototype,`dir`,2),g([_()],wt.prototype,`lang`,2),g([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],wt.prototype,`didSSR`,2);const Tt=new Set,Et=new Map;let Dt,Ot=`ltr`,kt=`en`;const At=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(At){let e=new MutationObserver(Mt);Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function jt(...e){e.map(e=>{let t=e.$code.toLowerCase();Et.has(t)?Et.set(t,Object.assign(Object.assign({},Et.get(t)),e)):Et.set(t,e),Dt||=e}),Mt()}function Mt(){At&&(Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language),[...Tt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Nt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Tt.add(this.host)}hostDisconnected(){Tt.delete(this.host)}dir(){return`${this.host.dir||Ot}`.toLowerCase()}lang(){let e=`${this.host.lang||kt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Dt?Dt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Et.get(`${n}-${r}`),a=Et.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Dt&&Dt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Dt&&Dt[e])i=Dt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Pt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};jt(Pt);var Ft=Pt,It=class extends Nt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};jt(Ft);
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
    `}};Lt.css=[$e,it,rt],g([_({reflect:!0})],Lt.prototype,`variant`,2),g([_({reflect:!0})],Lt.prototype,`appearance`,2),g([_({reflect:!0})],Lt.prototype,`size`,2),g([at(`size`)],Lt.prototype,`handleSizeChange`,1),g([_({type:Boolean,reflect:!0})],Lt.prototype,`pill`,2),g([_({attribute:`with-remove`,type:Boolean})],Lt.prototype,`withRemove`,2),Lt=g([pt(`wa-tag`)],Lt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),zt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Vt=class extends wt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new zt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Vt.formAssociated=!0,g([_({reflect:!0})],Vt.prototype,`name`,2),g([_({type:Boolean})],Vt.prototype,`disabled`,2),g([_({state:!0,attribute:!1})],Vt.prototype,`valueHasChanged`,2),g([_({state:!0,attribute:!1})],Vt.prototype,`hasInteracted`,2),g([_({attribute:`custom-error`,reflect:!0})],Vt.prototype,`customError`,2),g([_({attribute:!1,state:!0,type:Object})],Vt.prototype,`validity`,1);
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
`;
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
*/const qt=Gt(class extends Kt{constructor(e){if(super(e),e.type!==Wt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),Jt=e=>e??h,Yt=Symbol.for(``),Xt=e=>{if(e?.r===Yt)return e?._$litStatic$},Zt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Yt}),Qt=new Map,$t=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Xt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Qt.get(e))===void 0&&(o.raw=o,Qt.set(e,t=o)),n=s}return e(t,...n)})(Me);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Vt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ht(this,`[default]`,`start`,`end`),this.localize=new It(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Rt()]}handleSizeChange(){nt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new zt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Zt`a`:Zt`button`;return $t`
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
    `}};v.shadowRootOptions={...Vt.shadowRootOptions,delegatesFocus:!0},v.css=[Ut,it,rt],g([vt(`.button`)],v.prototype,`button`,2),g([vt(`slot:not([name])`)],v.prototype,`labelSlot`,2),g([gt()],v.prototype,`invalid`,2),g([gt()],v.prototype,`isIconButton`,2),g([_()],v.prototype,`title`,2),g([_({reflect:!0})],v.prototype,`variant`,2),g([_({reflect:!0})],v.prototype,`appearance`,2),g([_({reflect:!0})],v.prototype,`size`,2),g([at(`size`)],v.prototype,`handleSizeChange`,1),g([_({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),g([_({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),g([_({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),g([_({type:Boolean})],v.prototype,`disabled`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`loading`,2),g([_({type:Boolean,reflect:!0})],v.prototype,`pill`,2),g([_()],v.prototype,`type`,2),g([_({reflect:!0})],v.prototype,`name`,2),g([_({reflect:!0})],v.prototype,`value`,2),g([_({reflect:!0})],v.prototype,`href`,2),g([_()],v.prototype,`target`,2),g([_()],v.prototype,`rel`,2),g([_()],v.prototype,`download`,2),g([_({attribute:`formaction`})],v.prototype,`formAction`,2),g([_({attribute:`formenctype`})],v.prototype,`formEnctype`,2),g([_({attribute:`formmethod`})],v.prototype,`formMethod`,2),g([_({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),g([_({attribute:`formtarget`})],v.prototype,`formTarget`,2),g([at(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),g([at(`href`)],v.prototype,`handleHrefChange`,1),g([at(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=g([pt(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
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
`,tn=class extends wt{constructor(){super(...arguments),this.localize=new It(this)}render(){return Me`
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
    `}};tn.css=en,tn=g([pt(`wa-spinner`)],tn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},rn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},an=l`
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
*/const{I:Tn}=qe,En=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=Symbol(),On=Symbol(),kn,An=new Map,y=class extends wt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Me`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Dn:On}catch{return On}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Dn;kn||=new DOMParser;let r=kn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Dn}catch{return Dn}}}connectedCallback(){super.connectedCallback(),xn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Sn(this)}async getIconSource(){let e=Cn(this.library),t=this.family||wn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Cn(this.library):void 0;if(!e){this.svg=null;return}let r=An.get(e);r||(r=this.resolveIcon(e,n),An.set(e,r));let i=await r;if(i===On&&An.delete(e),e===(await this.getIconSource()).url){if(En(i)){this.svg=i;return}switch(i){case On:case Dn:this.svg=null,this.dispatchEvent(new nn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new rn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Cn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Me`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=an,g([gt()],y.prototype,`svg`,2),g([_({reflect:!0})],y.prototype,`name`,2),g([_({reflect:!0})],y.prototype,`family`,2),g([_({reflect:!0})],y.prototype,`variant`,2),g([_({reflect:!0})],y.prototype,`canvas`,2),g([_({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),g([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),g([_()],y.prototype,`src`,2),g([_()],y.prototype,`label`,2),g([_({reflect:!0})],y.prototype,`library`,2),g([_({type:Number,reflect:!0})],y.prototype,`rotate`,2),g([_({type:String,reflect:!0})],y.prototype,`flip`,2),g([_({type:String,reflect:!0})],y.prototype,`animation`,2),g([at(`label`)],y.prototype,`handleLabelChange`,1),g([at([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=g([pt(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=t({default:()=>Lt}),b;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Mn;function x(e){this.c=e}b=x.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function Nn(e){switch(typeof e){case`string`:return qd.l();case`number`:return Jn(e)?e<<24>>24===e?Iu.l():e<<16>>16===e?Uu.l():Hd.l():Yn(e)?Vd.l():Bd.l();case`boolean`:return iu.l();case`undefined`:return co.l();default:return e instanceof j?Gd.l():e instanceof x?su.l():e&&e.$classData?e.$classData.l():null}}function Pn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Jn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Yn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof j?`java.lang.Long`:e instanceof x?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hZ()}}function Fn(e,t){switch(typeof e){case`string`:return Kd(e,t);case`number`:return Rd(e,t);case`boolean`:return nu(e,t);case`undefined`:return ao(e,t);default:return e&&e.$classData||e===null?e.k(t):e instanceof j?Ud(e,t):e instanceof x?ou(Zn(e),t):$n.prototype.k.call(e,t)}}function In(e){switch(typeof e){case`string`:return J(e);case`number`:return zd(e);case`boolean`:return ru(e);case`undefined`:return oo(e);default:return e&&e.$classData||e===null?e.r():e instanceof j?Wd(e):e instanceof x?au(Zn(e)):$n.prototype.r.call(e)}}function Ln(e){return e===void 0?`undefined`:e.toString()}function Rn(e,t){if(t===0)throw new Fu(`/ by zero`);return e/t|0}function zn(e,t){if(t===0)throw new Fu(`/ by zero`);return e%t|0}function Bn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Vn(e){return String.fromCharCode(e)}function Hn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Un=0,Wn=new WeakMap;function Gn(e){switch(typeof e){case`string`:return J(e);case`number`:return zd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=Wn.get(e);return r===void 0&&(r=Un+1|0,Un=r,Wn.set(e,r)),r}}function Kn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function qn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Xn(e){return new x(e)}Xn(0);function Zn(e){return e===null?0:e.c}function Qn(e){return e===null?Mn:e}function $n(){}b=$n.prototype,b.constructor=$n;function S(){}S.prototype=b,b.r=(function(){return Gn(this)}),b.k=(function(e){return this===e}),b.w=(function(){var e=this.r();return Pn(this)+`@`+(+(e>>>0)).toString(16)}),b.toString=(function(){return this.w()});function C(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=C.prototype=new S,b.constructor=C,b.a5=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.Y=(function(){return new C(this.a.slice())});function er(){}er.prototype=b;function tr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=tr.prototype=new S,b.constructor=tr,b.a5=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.Y=(function(){return new tr(this.a.slice())});function nr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}b=nr.prototype=new S,b.constructor=nr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new nr(this.a.slice())});function rr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}b=rr.prototype=new S,b.constructor=rr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new rr(this.a.slice())});function ir(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}b=ir.prototype=new S,b.constructor=ir,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new ir(this.a.slice())});function ar(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}b=ar.prototype=new S,b.constructor=ar,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new ar(this.a.slice())});function or(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Mn}else this.a=e}b=or.prototype=new S,b.constructor=or,b.a5=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),b.Y=(function(){return new or(this.a.slice())});function sr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}b=sr.prototype=new S,b.constructor=sr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new sr(this.a.slice())});function cr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}b=cr.prototype=new S,b.constructor=cr,b.a5=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.Y=(function(){return new cr(this.a.slice())});function w(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=w.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new w().y(this,r,i)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new er;n.constructor=t,n.a5=(function(e,t,n,r){Hn(this.a,e,t.a,n,r)}),n.Y=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===T});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new w().a(this),this.A}),b.l=(function(){return this.L||=new sl(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null});var T=new w;T.n={},T.E=`Ljava.lang.Object;`,T.F=(e=>!e.X),T.N=`java.lang.Object`,T.I=(e=>e!==null),T.A=new w().y(T,C,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),$n.prototype.$classData=T;var lr=new w().p(void 0,`V`,`void`,void 0,void 0);new w().p(!1,`Z`,`boolean`,tr,void 0);var ur=new w().p(0,`C`,`char`,nr,Uint16Array);new w().p(0,`B`,`byte`,rr,Int8Array),new w().p(0,`S`,`short`,ir,Int16Array),new w().p(0,`I`,`int`,ar,Int32Array);var dr=new w().p(null,`J`,`long`,or,void 0);new w().p(0,`F`,`float`,sr,Float32Array),new w().p(0,`D`,`double`,cr,Float64Array);function fr(e){return Nn(e).cH()+`@`+Gn(e)}function pr(e){var t=e.cU;return t===void 0?fr(e):t}function mr(){gr=this,_r().hw(new K((e=>void 0)),jo().er,!0)}b=mr.prototype=new S,b.constructor=mr;function hr(){}hr.prototype=b,b.hw=(function(e,t,n){return new Hl(e,n,t,this)}),new w().i(mr,`com.raquo.airstream.core.Observer$`,{b8:1});var gr;function _r(){return gr||=new mr,gr}function vr(e){this.bZ=null,this.cV=null,this.c0=0,this.bZ=e,this.cV=void 0;var t=Rr().bx();this.c0=t===void 0?1:1+t.c0|0,wr().bC===-1||this.c0>wr().bC?Lc().cP(new jd(this,wr().bC)):kr().R?kr().aq.push(this)|0:Rr().cB(this)}b=vr.prototype=new S,b.constructor=vr;function yr(){}yr.prototype=b;var br=new w().i(vr,`com.raquo.airstream.core.Transaction`,{bb:1});function xr(){this.bC=0,this.cW=null,Cr=this,this.bC=1e3,this.cW=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=xr.prototype=new S,b.constructor=xr;function Sr(){}Sr.prototype=b,b.eZ=(function(e){try{e.bZ.i(e);var t=e.cV;if(t!==void 0)for(;t.i3();)t.hT().i7(e)}catch(e){var n=e instanceof nc?e:new Z(e);Lc().cP(n)}}),new w().i(xr,`com.raquo.airstream.core.Transaction$`,{bc:1});var Cr;function wr(){return Cr||=new xr,Cr}function Tr(e){e.bD.length|0?new vr(new K((t=>{for(;(e.bD.length|0)>0;){var n=e.bD.shift();try{n.i(t)}catch(e){var r=e instanceof nc?e:new Z(e);Lc().cP(r)}}for(;(e.aq.length|0)>0;){var i=e.aq.shift();Rr().cB(i)}}))):(e.aq.length|0)>0&&new vr(new K((t=>{for(;(e.aq.length|0)>0;)Rr().cB(e.aq.shift())})))}function Er(){this.R=!1,this.bD=null,this.aq=null,Or=this,this.R=!1,this.bD=li().al(F().c(new(N.r()).C([]))),this.aq=li().al(F().c(new(br.r()).C([])))}b=Er.prototype=new S,b.constructor=Er;function Dr(){}Dr.prototype=b,new w().i(Er,`com.raquo.airstream.core.Transaction$onStart$`,{bd:1});var Or;function kr(){return Or||=new Er,Or}function Ar(e,t){return e.ar.get(t)}function jr(e,t){e.bE.unshift(t)}function Mr(e){return e.bE.shift()}function Nr(e,t,n){var r=Ar(e,t),i=r===void 0,a=r===void 0?li().al(F().c(new(br.r()).C([]))):r;a.push(n),i&&e.ar.set(t,a)}function Pr(e,t){var n=Ar(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ar.delete(t),i}}function Fr(){this.bE=null,this.ar=null,Lr=this,this.bE=li().al(F().c(new(br.r()).C([]))),this.ar=new Map}b=Fr.prototype=new S,b.constructor=Fr;function Ir(){}Ir.prototype=b,b.cB=(function(e){var t=this.bx();t===void 0?(jr(this,e),wr().eZ(e),this.gf(e)):Nr(this,t,e)}),b.gf=(function(e){for(var t=e;;){var n=this.bx(),r=t;if(!(n!==void 0&&P().M(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.h7(t),t.bZ=wr().cW;var i=this.bx();if(P().M(i,void 0))if((this.ar.size|0)>0){var a=new Oc(0);throw this.ar.forEach((e=>((t,n)=>{e.b9=e.b9+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.b9+` children for `+(this.ar.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else wr().eZ(i),t=i}}),b.h7=(function(e){for(var t=e;;){var n=Pr(this,t);if(P().M(n,void 0)){Mr(this);var r=this.bx();if(!P().M(r,void 0))t=r;else return}else{jr(this,n);return}}}),b.bx=(function(){return this.bE[0]}),new w().i(Fr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{be:1});var Lr;function Rr(){return Lr||=new Fr,Lr}function zr(e,t){var n=e.a6.indexOf(t)|0;if(n!==-1)e.a6.splice(n,1),e.I.g()||t.fj();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Br(e){for(;(e.bF.length|0)>0;)zr(e,e.bF.shift())}function Vr(e){this.cX=null,this.a6=null,this.aJ=!1,this.bF=null,this.I=null,this.aK=0,this.cX=e,this.a6=li().al(F().c(new(Gr.r()).C([]))),this.aJ=!0,this.bF=li().al(F().c(new(Gr.r()).C([]))),this.I=Y(),this.aK=0}b=Vr.prototype=new S,b.constructor=Vr;function Hr(){}Hr.prototype=b,b.eJ=(function(){if(this.I.g()){var e=kr(),t=(()=>{var e=new ds(this.cX);this.I=new X(e),this.aJ=!1,this.aK=0;for(var t=0,n=this.a6.length|0;t<n;){var r=t+this.aK|0;this.a6[r].fi(e),t=1+t|0}Br(this),this.aJ=!0,this.aK=0});if(kr(),e.R)t();else{e.R=!0;try{t()}finally{e.R=!1,Tr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),b.ga=(function(){if(this.I.g())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aJ=!1;for(var e=this.a6,t=0,n=e.length|0;t<n;)e[t].fj(),t=1+t|0;Br(this);var r=this.I;r.g()||r.C().gN(),Br(this),this.aJ=!0,this.I=Y()}),b.fS=(function(e,t){t?(this.aK=1+this.aK|0,this.a6.unshift(e)):this.a6.push(e);var n=this.I;if(!n.g()){var r=n.C();e.fi(r)}}),b.hc=(function(e){this.aJ?zr(this,e):this.bF.push(e)}),new w().i(Vr,`com.raquo.airstream.ownership.DynamicOwner`,{bf:1});function Ur(e,t,n){this.bG=null,this.cY=null,this.bH=null,this.bG=e,this.cY=t,this.bH=Y(),e.fS(this,n)}b=Ur.prototype=new S,b.constructor=Ur;function Wr(){}Wr.prototype=b,b.bW=(function(){this.bG.hc(this)}),b.fi=(function(e){var t=kr(),n=(()=>{this.bH=this.cY.i(e)});if(kr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Tr(t)}}}),b.fj=(function(){var e=this.bH;e.g()||(e.C().bW(),this.bH=Y())});var Gr=new w().i(Ur,`com.raquo.airstream.ownership.DynamicSubscription`,{bg:1});function Kr(){}b=Kr.prototype=new S,b.constructor=Kr;function qr(){}qr.prototype=b,b.hu=(function(e,t,n){return new Ur(e,new K((e=>new X(t.i(e)))),n)}),b.hm=(function(e,t,n){return new Ur(e,new K((e=>(t.i(e),Y()))),n)}),new w().i(Kr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bh:1});var Jr;function Yr(){return Jr||=new Kr,Jr}function Xr(e){e.aL=li().al(F().c(new(ri.r()).C([])))}function Zr(e){for(var t=e.aL,n=0,r=t.length|0;n<r;)ei(t[n]),n=1+n|0;e.aL.length=0}function Qr(e,t){var n=e.aL.indexOf(t)|0;if(n!==-1)e.aL.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function $r(e,t){e.aL.push(t)}function ei(e){if(!e.c2)e.d0.aG(),e.c2=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function ti(e,t){this.d1=null,this.d0=null,this.c2=!1,this.d1=e,this.d0=t,this.c2=!1,e.h6(this)}b=ti.prototype=new S,b.constructor=ti;function ni(){}ni.prototype=b,b.bW=(function(){ei(this),Qr(this.d1,this)});var ri=new w().i(ti,`com.raquo.airstream.ownership.Subscription`,{bk:1});function ii(e,t){this.d2=null,this.d3=null,this.a7=null,this.as=!1,this.d2=e,this.d3=t,this.a7=Y(),this.as=!1}b=ii.prototype=new S,b.constructor=ii;function ai(){}ai.prototype=b,b.gK=(function(){var e=this.a7;return!e.g()&&!e.C().bG.I.g()}),b.hh=(function(e){if(this.as)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a7;if(t.g())var n=!1;else var n=e===t.C().bG;if(!n){this.gK()&&!e.I.g()&&(this.as=!0);var r=this.a7;r.g()||(r.C().bW(),this.a7=Y()),this.a7=new X(Yr().hu(e,new K((e=>(this.as||this.d2.aG(),new ti(e,new bu((()=>{this.as||this.d3.aG()})))))),!1)),this.as=!1}}),b.g4=(function(){if(this.as)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a7;e.g()||e.C().bW(),this.a7=Y()}),new w().i(ii,`com.raquo.airstream.ownership.TransferableSubscription`,{bl:1});function oi(){}b=oi.prototype=new S,b.constructor=oi;function si(){}si.prototype=b,b.al=(function(e){return[...is().hs(e)]}),new w().i(oi,`com.raquo.ew.JsArray$`,{bm:1});var ci;function li(){return ci||=new oi,ci}function ui(){}b=ui.prototype=new S,b.constructor=ui;function di(){}di.prototype=b,b.gu=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new w().i(ui,`com.raquo.ew.JsArray$RichJsArray$`,{bn:1});var fi;function pi(){return fi||=new ui,fi}function mi(){this.d4=null,gi=this,document.createElement(`template`),this.g8(G().j.hn().ho()),this.d4=RegExp(` `,`g`)}b=mi.prototype=new S,b.constructor=mi;function hi(){}hi.prototype=b,b.fW=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof nc?e:new Z(e);if(n instanceof Z&&n.T instanceof DOMException)return!1;throw n instanceof Z?n.T:n}}),b.gL=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().M(t,r))return!0;n=r}}),b.g7=(function(e){return document.createElement(e.cK())}),b.gB=(function(e,t){var n=this.gC(e,t);return n===void 0?void 0:t.aM.bS(n)}),b.gC=(function(e,t){var n=e.a0.getAttributeNS(null,t.a8);return n===null?void 0:n}),b.fr=(function(e,t,n){this.hg(e,t,t.aM.bV(n))}),b.hg=(function(e,t,n){n===null?this.hb(e,t):e.a0.setAttribute(t.a8,n)}),b.hb=(function(e,t){e.a0.removeAttribute(t.a8)}),b.fs=(function(e,t,n){var r=e.a0,i=t.at,a=t.au,o=n===null?null:n;o===null?(a.Z(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.Z(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.g8=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dK)}),b.gF=(function(e,t){var n=this.gG(e,t);return n===void 0?void 0:t.c7.bS(n)}),b.gG=(function(e,t){var n=e.cN(),r=t.bJ,i=n.getAttributeNS(r.g()?null:r.C(),t.c8);return i===null?void 0:i}),b.hi=(function(e,t,n){this.hj(e,t,t.c7.bV(n))}),b.hj=(function(e,t,n){if(n===null)this.hd(e,t);else{var r=t.bJ;if(r.g())e.cN().setAttribute(t.bI,n);else{var i=r.C();e.cN().setAttributeNS(i,t.bI,n)}}}),b.hd=(function(e,t){var n=e.cN(),r=t.bJ;n.removeAttributeNS(r.g()?null:r.C(),t.c8)}),b.g9=(function(e){return document.createTextNode(e)}),b.gc=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new xm(this.gb(r),n);r=i,n=a}}),b.gb=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.d4,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new w().i(mi,`com.raquo.laminar.DomApi$`,{bo:1});var gi;function E(){return gi||=new mi,gi}function _i(e,t,n){this.c4=null,this.d5=null,this.c3=null,this.c4=e,this.d5=t,this.c3=n}b=_i.prototype=new S,b.constructor=_i;function vi(){}vi.prototype=b,b.Z=(function(e){this.c4===null?this.c3===null?Fo().gv(this.d5,e):pi().gu(this.c3,Nl().gy(e)):this.c4.Z(e)}),new w().i(_i,`com.raquo.laminar.Seq`,{bp:1});function yi(){}b=yi.prototype=new S,b.constructor=yi;function bi(){}bi.prototype=b,new w().i(yi,`com.raquo.laminar.Seq$`,{bq:1});var xi;function Si(){return xi||=new yi,xi}function Ci(e){_r(),Lc()}function wi(e){e.fw=Ji()}function Ti(e){Ei(e,new K((e=>{e.dz.a0.focus()})))}function Ei(e,t){return new Ds(new K((e=>{var n=new Ec(!e.aN.I.g()),r=new K((e=>{n.bQ?n.bQ=!1:t.i(e)}));Yr().hm(e.aN,new K((e=>(t=>{r.i(new Ui(e,t))}))(e)),!1)})),Ji())}function Di(){this.c6=null,this.c5=null,ki=this,this.c6=new hs(Ai()),new hs(Ai()),new hs(Ai()),this.c5=new ps}b=Di.prototype=new S,b.constructor=Di;function Oi(){}Oi.prototype=b,new w().i(Di,`com.raquo.laminar.codecs.package$`,{by:1});var ki;function Ai(){return ki||=new Di,ki}function ji(e){e.fx=Mi(e,`class`,` `)}function Mi(e,t,n){var r=bs(new xs,t,Ai().c6);return new vs(r.a8,new K((e=>{var t=E().gB(e,r);return t===void 0?``:t})),new Cu(((e,t)=>{E().fr(e,r,t)})),n)}function Ni(e){e.fv=Pi(e,`class`,` `)}function Pi(e,t,n){var r=new Cs(t,Ai().c6,Y());return new vs(r.bI,new K((e=>{var t=E().gF(e,r);return t===void 0?``:t})),new Cu(((e,t)=>{E().hi(e,r,t)})),n)}function Fi(e,t){this.dy=null,this.dx=null,this.dy=e,this.dx=t}b=Fi.prototype=new S,b.constructor=Fi;function Ii(){}Ii.prototype=b,b.v=(function(e){return new zc(this.dy,this.dx.i(e),new Tu(((e,t,n)=>{E().fs(e,t,n)})))}),new w().i(Fi,`com.raquo.laminar.keys.DerivedStyleProp`,{bY:1});function Li(){}b=Li.prototype=new S,b.constructor=Li;function Ri(){}Ri.prototype=b;function zi(){this.fy=null,this.fz=null,this.fA=null,this.fB=null,this.fy=`http://www.w3.org/2000/svg`,this.fz=`http://www.w3.org/1999/xlink`,this.fA=`http://www.w3.org/XML/1998/namespace`,this.fB=`http://www.w3.org/2000/xmlns/`}b=zi.prototype=new S,b.constructor=zi;function Bi(){}Bi.prototype=b,b.gR=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Xu(e)}}),new w().i(zi,`com.raquo.laminar.keys.SvgAttr$`,{c0:1});var Vi;function Hi(){return Vi||=new zi,Vi}function Ui(e,t){this.dz=null,this.dz=e}b=Ui.prototype=new S,b.constructor=Ui;function Wi(){}Wi.prototype=b,new w().i(Ui,`com.raquo.laminar.lifecycle.MountContext`,{c1:1});var D=new w().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function Gi(){this.fC=null,qi=this,this.fC=new Ts}b=Gi.prototype=new S,b.constructor=Gi;function Ki(){}Ki.prototype=b,new w().i(Gi,`com.raquo.laminar.modifiers.Modifier$`,{c3:1});var qi;function Ji(){return qi||=new Gi,qi}function Yi(){this.o=null,Zi=this,this.o=new Ns(new K((e=>e)),O()),new Ns(new K((e=>``+(e|0))),O()),new Ns(new K((e=>``+ +e)),O()),new Ns(new K((e=>``+!!e)),O()),new Ns(new K((e=>e.hr())),O())}b=Yi.prototype=new S,b.constructor=Yi;function Xi(){}Xi.prototype=b,new w().i(Yi,`com.raquo.laminar.modifiers.RenderableText$`,{c9:1});var Zi;function O(){return Zi||=new Yi,Zi}function Qi(){}b=Qi.prototype=new S,b.constructor=Qi;function $i(){}$i.prototype=b,b.bR=(function(e,t,n){var r=new X(e);t.fu(r),n!==void 0&&n.i5(e,t);var i=E().fW(e.by(),t.by());return i&&t.ft(r),i}),new w().i(Qi,`com.raquo.laminar.nodes.ParentNode$`,{cc:1});var ea;function ta(){return ea||=new Qi,ea}function na(){ia=this,li().al(F().hy(new ar(new Int32Array([0]))))}b=na.prototype=new S,b.constructor=na;function ra(){}ra.prototype=b,b.fO=(function(){return new K((e=>void 0))}),new w().i(na,`com.raquo.laminar.tags.CustomHtmlTag$`,{ci:1});var ia;function aa(){return ia||=new na,ia}function oa(){}b=oa.prototype=new S,b.constructor=oa;function sa(){}sa.prototype=b,b.bb=(function(e){return G().j.f2().cD(F().c(new(D.r()).C([G().j.f1().fc(),G().j.gs().g5(),G().j.fg().fp().v(8),Rc(G().j,e,Ms())])))}),new w().i(oa,`doc.ExampleGroups$package$`,{ck:1});var ca;function la(){return ca||=new oa,ca}function ua(){}b=ua.prototype=new S,b.constructor=ua;function da(){}da.prototype=b,b.a2=(function(e){return G().j.f2().cD(F().c(new(D.r()).C([G().j.f1().fc(),G().j.gt().hx(),G().j.fT().g3(),G().j.fg().fp().v(16),Rc(G().j,e,Ms())])))}),new w().i(ua,`doc.Examples$package$`,{cl:1});var fa;function pa(){return fa||=new ua,fa}function ma(){}b=ma.prototype=new S,b.constructor=ma;function ha(){}ha.prototype=b,b.fU=(function(){_a().gl(),_a().gm(),_a().gn(),_a().go(),_a().gp()}),b.gl=(function(){var e=document.querySelector(`#example1`);gc().bh(e).g()||(G(),new Vc(e,la().bb(F().c(new(q.r()).C([pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bo()))])),F().c(new(D.r()).C([z(G().j,`Brand`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bA()))])),F().c(new(D.r()).C([z(G().j,`Success`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bu()))])),F().c(new(D.r()).C([z(G().j,`Neutral`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bB()))])),F().c(new(D.r()).C([z(G().j,`Warning`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bp()))])),F().c(new(D.r()).C([z(G().j,`Danger`,O().o)])))])))])))))}),b.gm=(function(){var e=document.querySelector(`#example2`);gc().bh(e).g()||(G(),new Vc(e,la().bb(F().c(new(q.r()).C([pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bo())),new W((e=>e.A().bc()))])),F().c(new(D.r()).C([z(G().j,`Accent`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bo())),new W((e=>e.A().br()))])),F().c(new(D.r()).C([z(G().j,`Filled + Outlined`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bo())),new W((e=>e.A().bq()))])),F().c(new(D.r()).C([z(G().j,`Filled`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bo())),new W((e=>e.A().bw()))])),F().c(new(D.r()).C([z(G().j,`Outlined`,O().o)])))]))),pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bA())),new W((e=>e.A().bc()))])),F().c(new(D.r()).C([z(G().j,`Accent`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bA())),new W((e=>e.A().br()))])),F().c(new(D.r()).C([z(G().j,`Filled + Outlined`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bA())),new W((e=>e.A().bq()))])),F().c(new(D.r()).C([z(G().j,`Filled`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bA())),new W((e=>e.A().bw()))])),F().c(new(D.r()).C([z(G().j,`Outlined`,O().o)])))]))),pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bu())),new W((e=>e.A().bc()))])),F().c(new(D.r()).C([z(G().j,`Accent`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bu())),new W((e=>e.A().br()))])),F().c(new(D.r()).C([z(G().j,`Filled + Outlined`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bu())),new W((e=>e.A().bq()))])),F().c(new(D.r()).C([z(G().j,`Filled`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bu())),new W((e=>e.A().bw()))])),F().c(new(D.r()).C([z(G().j,`Outlined`,O().o)])))]))),pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bB())),new W((e=>e.A().bc()))])),F().c(new(D.r()).C([z(G().j,`Accent`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bB())),new W((e=>e.A().br()))])),F().c(new(D.r()).C([z(G().j,`Filled + Outlined`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bB())),new W((e=>e.A().bq()))])),F().c(new(D.r()).C([z(G().j,`Filled`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bB())),new W((e=>e.A().bw()))])),F().c(new(D.r()).C([z(G().j,`Outlined`,O().o)])))]))),pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.x().bp())),new W((e=>e.A().bc()))])),F().c(new(D.r()).C([z(G().j,`Accent`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bp())),new W((e=>e.A().br()))])),F().c(new(D.r()).C([z(G().j,`Filled + Outlined`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bp())),new W((e=>e.A().bq()))])),F().c(new(D.r()).C([z(G().j,`Filled`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.x().bp())),new W((e=>e.A().bw()))])),F().c(new(D.r()).C([z(G().j,`Outlined`,O().o)])))])))])))))}),b.gn=(function(){var e=document.querySelector(`#example3`);gc().bh(e).g()||(G(),new Vc(e,la().bb(F().c(new(q.r()).C([pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.a4().cQ()))])),F().c(new(D.r()).C([z(G().j,`Small`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cJ()))])),F().c(new(D.r()).C([z(G().j,`Medium`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cI()))])),F().c(new(D.r()).C([z(G().j,`Large`,O().o)])))])))])))))}),b.go=(function(){var e=document.querySelector(`#example4`);gc().bh(e).g()||(G(),new Vc(e,la().bb(F().c(new(q.r()).C([pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.a4().cQ())),new W((e=>e.cM().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Small`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cJ())),new W((e=>e.cM().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Medium`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cI())),new W((e=>e.cM().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Large`,O().o)])))])))])))))}),b.gp=(function(){var e=document.querySelector(`#example5`);gc().bh(e).g()||(G(),new Vc(e,la().bb(F().c(new(q.r()).C([pa().a2(F().c(new(q.r()).C([B().q(F().c(new(N.r()).C([new W((e=>e.a4().cQ())),new W((e=>e.cR().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Small`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cJ())),new W((e=>e.cR().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Medium`,O().o)]))),B().q(F().c(new(N.r()).C([new W((e=>e.a4().cI())),new W((e=>e.cR().v(!0)))])),F().c(new(D.r()).C([z(G().j,`Large`,O().o)])))])))])))))}),new w().i(ma,`examples.tag.Main$package$`,{cm:1});var ga;function _a(){return ga||=new ma,ga}function va(e){try{_a().fU()}catch(e){throw e}}function ya(){this.fE=!1,this.b0=null,this.bL=null,this.ej=null,this.ch=!1,this.fD=0,this.fG=0,this.fF=null,xa=this,this.fE=!0,this.b0=new ArrayBuffer(8),this.bL=new Int32Array(this.b0,0,2),new Float32Array(this.b0,0,2),this.ej=new Float64Array(this.b0,0,1),this.bL[0]=16909060,this.ch=(new Int8Array(this.b0,0,8)[0]|0)==1,this.fD=this.ch?0:1,this.fG=this.ch?1:0,this.fF=null}b=ya.prototype=new S,b.constructor=ya;function ba(){}ba.prototype=b,b.cL=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.ej[0]=e,(this.bL[0]|0)^(this.bL[1]|0))}),new w().i(ya,`java.lang.FloatingPointBits$`,{cB:1});var xa;function Sa(){return xa||=new ya,xa}function Ca(e,t){for(var n=k().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=wa(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Ys(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Ys(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Zs.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function wa(e,t){var n=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=k().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ta(e,c[1]),Ma(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ta(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ta(e,d[1]),`<clinit>`]}function Ta(e,t){var n=Da(e);if(io().ep.call(n,t))var r=Da(e)[t];else var r=Ua(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ea(e){if(!((1&e.N)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cj=t,e.N=(1|e.N)<<24>>24}return e.cj}function Da(e){return(1&e.N)<<24>>24?e.cj:Ea(e)}function Oa(e){if(!((2&e.N)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ck=t,e.N=(2|e.N)<<24>>24}return e.ck}function ka(e){return(2&e.N)<<24>>24?e.ck:Oa(e)}function Aa(e){return(4&e.N)<<24>>24||(e.ci=Object.keys(ka(e)),e.N=(4|e.N)<<24>>24),e.ci}function ja(e){return(4&e.N)<<24>>24?e.ci:Aa(e)}function Ma(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Na(e,t){return t?t.arguments&&t.stack?Pa(e,t):t.stack&&t.sourceURL?La(e,t):t.stack&&t.number?Ia(e,t):t.stack&&t.fileName?Fa(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ra(e,t):za(e,t):Ra(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ba(e,t):Va(e,t):t.stack&&!t.fileName?Pa(e,t):Ha(e,t):[]}function Pa(e,t){return(t.stack+`
`).replace(k().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(k().G(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(k().G(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(k().G(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(k().G(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Fa(e,t){return t.stack.replace(k().G(`(?:\\n@:0)?\\s+$`,`m`),``).replace(k().G(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ia(e,t){return t.stack.replace(k().G(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(k().G(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(k().G(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function La(e,t){return t.stack.replace(k().G(`\\[native code\\]\\n`,`m`),``).replace(k().G(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(k().G(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ra(e,t){for(var n=k().G(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function za(e,t){for(var n=k().G(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ba(e,t){for(var n=k().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Va(e,t){for(var n=k().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(k().W(`<anonymous function: (\\S+)>`),`$1`).replace(k().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Ha(e,t){return[]}function Ua(e,t,n){for(;;)if(t<(ja(e).length|0)){var r=ja(e)[t];if(n.startsWith(r))return``+ka(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Wa(){this.cj=null,this.ck=null,this.ci=null,this.N=0}b=Wa.prototype=new S,b.constructor=Wa;function Ga(){}Ga.prototype=b,b.gq=(function(e){return Ca(this,Na(this,e))}),new w().i(Wa,`java.lang.StackTrace$`,{cI:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(){}b=Ja.prototype=new S,b.constructor=Ja;function Ya(){}Ya.prototype=b,b.W=(function(e){return new RegExp(e)}),b.G=(function(e,t){return new RegExp(e,t)}),new w().i(Ja,`java.lang.StackTrace$StringRE$`,{cJ:1});var Xa;function k(){return Xa||=new Ja,Xa}function Za(){this.el=null,this.fH=null,$a=this,this.el=new Jf(!1),this.fH=new Jf(!0)}b=Za.prototype=new S,b.constructor=Za;function Qa(){}Qa.prototype=b,new w().i(Za,`java.lang.System$Streams$`,{cO:1});var $a;function eo(){return $a||=new Za,$a}function to(){this.ep=null,ro=this,this.ep=Object.prototype.hasOwnProperty}b=to.prototype=new S,b.constructor=to;function no(){}no.prototype=b,new w().i(to,`java.lang.Utils$Cache$`,{cQ:1});var ro;function io(){return ro||=new to,ro}function ao(e,t){return e===t}function oo(e){return 0}function so(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ap)}var co=new w().i(0,`java.lang.Void`,{ap:1},(e=>e===void 0));function lo(e,t){throw new Lu(`argument type mismatch`)}function uo(){}b=uo.prototype=new S,b.constructor=uo;function fo(){}fo.prototype=b,b.aV=(function(e){return e instanceof C||e instanceof tr||e instanceof nr||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr||e instanceof cr?e.a.length:lo(this,e)}),new w().i(uo,`java.lang.reflect.Array$`,{cR:1});var po;function mo(){return po||=new uo,po}function ho(){}b=ho.prototype=new S,b.constructor=ho;function go(){}go.prototype=b,b.f8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.d,s=a.e,c=r,l=t.a[c],u=l.d,d=l.e;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),b.f7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.fa=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.f5=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),b.f6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new w().i(ho,`java.util.Arrays$`,{cS:1});var _o;function A(){return _o||=new ho,_o}function j(e,t){this.d=0,this.e=0,this.d=e,this.e=t}b=j.prototype=new S,b.constructor=j;function vo(){}vo.prototype=b,b.k=(function(e){return e instanceof j&&this.d===e.d&&this.e===e.e}),b.r=(function(){return this.d^this.e}),b.w=(function(){return M().fn(this.d,this.e)}),b.ia=(function(){return this.d}),b.i9=(function(){return M().fm(this.d,this.e)}),b.i8=(function(){return M().bv(this.d,this.e)}),b.hQ=(function(){return this.d<<24>>24}),b.i6=(function(){return this.d<<16>>16}),b.i0=(function(){return this.d}),b.i1=(function(){return this}),b.hW=(function(){return M().fm(this.d,this.e)}),b.hU=(function(){return M().bv(this.d,this.e)}),b.hS=(function(e){return M().fk(this.d,this.e,e.d,e.e)}),b.hR=(function(e){return M().fk(this.d,this.e,e.d,e.e)}),b.hV=(function(e){return this.d===e.d&&this.e===e.e}),b.i4=(function(e){return!(this.d===e.d&&this.e===e.e)}),b.hI=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.d)<(-2147483648^e.d):t<n}),b.hJ=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.d)<=(-2147483648^e.d):t<n}),b.hE=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.d)>(-2147483648^e.d):t>n}),b.hF=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.d)>=(-2147483648^e.d):t>n}),b.ic=(function(){return new j(~this.d,~this.e)}),b.hC=(function(e){return new j(this.d|e.d,this.e|e.e)}),b.hB=(function(e){return new j(this.d&e.d,this.e&e.e)}),b.hP=(function(e){return new j(this.d^e.d,this.e^e.e)}),b.hK=(function(e){var t=this.d;return new j(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.e<<e)}),b.hH=(function(e){var t=this.e;return new j(32&e?t>>>e|0:this.d>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),b.hG=(function(e){var t=this.e;return new j(32&e?t>>e:this.d>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),b.ib=(function(){var e=this.d,t=this.e;return new j(-e|0,e===0?-t|0:~t)}),b.hN=(function(e){var t=this.d,n=this.e,r=e.e,i=t+e.d|0;return new j(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),b.hL=(function(e){var t=this.d,n=this.e,r=e.e,i=t-e.d|0;return new j(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),b.hO=(function(e){var t=this.d,n=e.d,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new j(u,(((Math.imul(t,e.e)+Math.imul(this.e,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),b.hD=(function(e){var t=M();return new j(t.ge(this.d,this.e,e.d,e.e),t.t)}),b.hM=(function(e){var t=M();return new j(t.ha(this.d,this.e,e.d,e.e),t.t)}),new w().i(j,`org.scalajs.linker.runtime.RuntimeLong`,{aq:1});function yo(e,t,n){return-2097152&n?So(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function bo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.t=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.t=0,n>>>o|0}else return So(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.t=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.t=s/4294967296|0,s|0}}function xo(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.t=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.t=n&(-1+i|0),t):So(e,t,n,r,i,1)|0;if(-2097152&i)return e.t=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.t=a/4294967296|0,a|0}function So(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.t=ee,m;if(a===1)return e.t=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function Co(){this.t=0}b=Co.prototype=new S,b.constructor=Co;function wo(){}wo.prototype=b,b.fn=(function(e,t){return t===e>>31?``+e:t<0?`-`+yo(this,-e|0,e===0?-t|0:~t):yo(this,e,t)}),b.bv=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),b.fm=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),b.hY=(function(e){return new j(e,e>>31)}),b.hX=(function(e){return new j(this.fl(e),this.t)}),b.fl=(function(e){if(e<-0x8000000000000000)return this.t=-2147483648,0;if(e>=0x8000000000000000)return this.t=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.t=e<0&&t!==0?-1+n|0:n,t}),b.fk=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),b.ge=(function(e,t,n,r){if((n|r)===0)throw new Fu(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.t=0,-2147483648;var i=Rn(e,n);return this.t=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.t=-1,-1;else return this.t=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=bo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.t;return this.t=l===0?-u|0:~u,-l|0}}),b.ha=(function(e,t,n,r){if((n|r)===0)throw new Fu(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=zn(e,n);return this.t=i>>31,i}else return this.t=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.t=0,0;else return this.t=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=xo(this,a,o,s,c);if(t<0){var u=this.t;return this.t=l===0?-u|0:~u,-l|0}else return l}}),new w().i(Co,`org.scalajs.linker.runtime.RuntimeLong$`,{cU:1});var To;function M(){return To||=new Co,To}var N=new w().i(1,`scala.Function1`,{e:1});function Eo(){}b=Eo.prototype=new S,b.constructor=Eo;function Do(){}Do.prototype=b;function Oo(){this.es=null,this.er=null,Ao=this,this.es=new W((e=>jo().es)),this.er=new du}b=Oo.prototype=new S,b.constructor=Oo;function ko(){}ko.prototype=b,new w().i(Oo,`scala.PartialFunction$`,{d4:1});var Ao;function jo(){return Ao||=new Oo,Ao}function Mo(){this.ev=null,Po=this,this.ev=new W((e=>Fo().ev))}b=Mo.prototype=new S,b.constructor=Mo;function No(){}No.prototype=b,b.gv=(function(e,t){var n=mo().aV(e),r=0;if(e instanceof C)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof nr)for(;r<n;)t.i(Xn(e.a[r])),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.i(e.a[r]),r=1+r|0;else if(e instanceof tr)for(;r<n;)t.i(e.a[r]),r=1+r|0;else throw new Xu(e)}),new w().i(Mo,`scala.collection.ArrayOps$`,{da:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(e,t){for(var n=e.n();n.u();)t.i(n.h())}function Lo(e,t,n,r){return e.D()===0?``+t+r:e.bd(Om(new km),t,n,r).L.s}function Ro(e,t,n,r,i){var a=t.L;n.length!==0&&(a.s=``+a.s+n);var o=e.n();if(o.u()){var s=o.h();for(a.s=``+a.s+s;o.u();){a.s=``+a.s+r;var c=o.h();a.s=``+a.s+c}}return i.length!==0&&(a.s=``+a.s+i),t}function zo(e,t){this.ez=null,this.b6=null,this.ez=e,this.b6=t}b=zo.prototype=new S,b.constructor=zo;function Bo(){}Bo.prototype=b,b.gI=(function(){return this.ez.aG().n()}),new w().i(zo,`scala.collection.Iterator$ConcatIteratorCell`,{dt:1});function Vo(){}b=Vo.prototype=new S,b.constructor=Vo;function Ho(){}Ho.prototype=b,b.M=(function(e,t){return e===t||(Js(e)?this.gk(e,t):e instanceof x?this.gi(e,t):e===null?t===null:Fn(e,t))}),b.gk=(function(e,t){if(Js(t))return this.gj(e,t);if(t instanceof x){if(typeof e==`number`)return+e===t.c;if(e instanceof j){var n=Qn(e),r=n.d,i=n.e,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Fn(e,t)}else return e===null?t===null:Fn(e,t)}),b.gj=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof j){var r=Qn(t);return n===M().bv(r.d,r.e)}else return!1}else if(e instanceof j){var i=Qn(e),a=i.d,o=i.e;if(t instanceof j){var s=Qn(t),c=s.d,l=s.e;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return M().bv(a,o)===u}else return!1}else return e===null?t===null:Fn(e,t)}),b.gi=(function(e,t){if(t instanceof x)return e.c===t.c;if(Js(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof j){var n=Qn(t),r=n.d,i=n.e,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Fn(t,e)}else return e===null&&t===null}),new w().i(Vo,`scala.runtime.BoxesRunTime$`,{e4:1});var Uo;function P(){return Uo||=new Vo,Uo}var Wo=new w().i(0,`scala.runtime.Null$`,{e7:1});function Go(){}b=Go.prototype=new S,b.constructor=Go;function Ko(){}Ko.prototype=b,b.aT=(function(e,t){if(e instanceof C||e instanceof ar||e instanceof cr||e instanceof or||e instanceof sr)return e.a[t];if(e instanceof nr)return Xn(e.a[t]);if(e instanceof rr||e instanceof ir||e instanceof tr)return e.a[t];throw e===null?new Hu:new Xu(e)}),b.fZ=(function(e,t,n){if(e instanceof C)e.a[t]=n;else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof cr)e.a[t]=+n;else if(e instanceof or)e.a[t]=Qn(n);else if(e instanceof sr)e.a[t]=Math.fround(n);else if(e instanceof nr)e.a[t]=Zn(n);else if(e instanceof rr)e.a[t]=n|0;else if(e instanceof ir)e.a[t]=n|0;else if(e instanceof tr)e.a[t]=!!n;else if(e===null)throw new Hu;else throw new Xu(e)}),b.fQ=(function(e){return Lo(e.aY(),e.ao()+`(`,`,`,`)`)}),b.c=(function(e){return e===null?null:e.a.length===0?lf(pf()):new Gp(e)}),b.hy=(function(e){return e===null?null:new Vp(e)}),new w().i(Go,`scala.runtime.ScalaRunTime$`,{e8:1});var qo;function F(){return qo||=new Go,qo}function Jo(){}b=Jo.prototype=new S,b.constructor=Jo;function Yo(){}Yo.prototype=b,b.b=(function(e,t){var n=this.bX(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.bX=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.m=(function(e,t){return this.g1(e^t)}),b.g1=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.aX=(function(e){var t=e.d,n=e.e;return n===t>>31?t:t^n}),b.V=(function(e){var t=Bn(e);if(t===e)return t;var n=M(),r=n.fl(e),i=n.t;return M().bv(r,i)===e?r^i:Sa().cL(e)}),b.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof j){var t=Qn(e);return this.aX(new j(t.d,t.e))}else return In(e)}),b.bt=(function(e){throw Ru(new zu,``+e)}),new w().i(Jo,`scala.runtime.Statics$`,{ea:1});var Xo;function I(){return Xo||=new Jo,Xo}function Zo(){}b=Zo.prototype=new S,b.constructor=Zo;function Qo(){}Qo.prototype=b,b.hk=(function(e,t){return setTimeout((()=>{t.aG()}),e)}),new w().i(Zo,`scala.scalajs.js.timers.package$`,{eg:1});var $o;function es(){return $o||=new Zo,$o}function ts(){}b=ts.prototype=new S,b.constructor=ts;function ns(){}ns.prototype=b,b.hs=(function(e){var t=[];return e.Z(new W((e=>t.push(e)|0))),t}),new w().i(ts,`scala.scalajs.runtime.Compat$`,{ep:1});var rs;function is(){return rs||=new ts,rs}function as(){}b=as.prototype=new S,b.constructor=as;function os(){}os.prototype=b,b.hl=(function(e){var t=`Illegal command line`+(e.fh()===0?``:e.fh()===1?` after first argument`:` after `+e.fh()+` arguments`)+`: `+e.i2();uc().h5().gM(t+`
`)}),new w().i(as,`scala.util.CommandLineParser$`,{er:1});function ss(e){this.cA=null,this.cA=e}b=ss.prototype=new S,b.constructor=ss;function cs(){}cs.prototype=b,b.w=(function(){return`DynamicVariable(`+this.cA+`)`}),new w().i(ss,`scala.util.DynamicVariable`,{et:1});function ls(){}b=ls.prototype=new S,b.constructor=ls;function us(){}us.prototype=b,b.b=(function(e,t){var n=this.bX(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.bX=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.m=(function(e,t){return this.H(e^t)}),b.H=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.fo=(function(e,t,n){var r=e.am();if(r===0)return J(e.ao());var i=t;n||(i=this.b(i,J(e.ao())));for(var a=0;a<r;)i=this.b(i,I().B(e.an(a))),a=1+a|0;return this.m(i,r)}),b.ht=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.u();){var s=o.h(),c=I().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bX(l,a),this.m(l,i)}),b.h4=(function(e,t){var n=e.n(),r=t;if(!n.u())return this.m(r,0);var i=n.h();if(!n.u())return this.m(this.b(r,I().B(i)),1);var a=n.h(),o=I().B(i);r=this.b(r,o);for(var s=r,c=I().B(a),l=c-o|0,u=2;n.u();){r=this.b(r,c);var d=I().B(n.h());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.u();)r=this.b(r,I().B(n.h())),u=1+u|0;return this.m(r,u)}c=d,u=1+u|0}return this.H(this.b(this.b(s,l),c))}),b.eN=(function(e,t){var n=t,r=mo().aV(e);switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,I().B(F().aT(e,0))),1);default:var i=I().B(F().aT(e,0));n=this.b(n,i);for(var a=n,o=I().B(F().aT(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=I().B(F().aT(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,I().B(F().aT(e,c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.h8=(function(e,t,n,r){return this.H(this.b(this.b(this.b(r,e),t),n))}),b.gJ=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,I().B(e.p(0))),1);default:var i=I().B(e.p(0));n=this.b(n,i);for(var a=n,o=I().B(e.p(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=I().B(e.p(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,I().B(e.p(c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.gO=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.a3(),u=c.X(),d=I().B(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.h8(s,a,o,t):this.m(r,n)}),b.eW=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eO=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eP=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eQ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,I().V(e.a[0])),1);default:var i=I().V(e.a[0]);n=this.b(n,i);for(var a=n,o=I().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=I().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,I().V(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eR=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,I().V(e.a[0])),1);default:var i=I().V(e.a[0]);n=this.b(n,i);for(var a=n,o=I().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=I().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,I().V(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eS=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eT=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:var i=n,a=e.a[0];return this.m(this.b(i,I().aX(new j(a.d,a.e))),1);default:var o=e.a[0],s=I().aX(new j(o.d,o.e));n=this.b(n,s);for(var c=n,l=e.a[1],u=I().aX(new j(l.d,l.e)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=I().aX(new j(p.d,p.e));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,I().aX(new j(te.d,te.e))),f=1+f|0}return this.m(n,r)}u=m,f=1+f|0}return this.H(this.b(this.b(c,d),u))}}),b.eU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.H(this.b(this.b(a,s),o))}}),b.eV=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.m(n,r)}a=0,s=1+s|0}return this.H(this.b(this.b(i,o),a))}});function ds(e){this.aL=null,this.cZ=null,this.c1=!1,this.cZ=e,Xr(this),this.c1=!1}b=ds.prototype=new S,b.constructor=ds;function fs(){}fs.prototype=b,b.h6=(function(e){this.c1?(ei(e),this.cZ.aG()):$r(this,e)}),b.gN=(function(){Zr(this),this.c1=!0}),new w().i(ds,`com.raquo.airstream.ownership.OneTimeOwner`,{bi:1,bj:1});function ps(){}b=ps.prototype=new S,b.constructor=ps;function ms(){}ms.prototype=b,b.gd=(function(e){return e!==null}),b.gh=(function(e){return e?``:null}),b.bS=(function(e){return this.gd(e)}),b.bV=(function(e){return this.gh(!!e)}),new w().i(ps,`com.raquo.laminar.codecs.package$$anon$1`,{bz:1,a2:1});function hs(e){if(e===null)throw new Hu}b=hs.prototype=new S,b.constructor=hs;function gs(){}gs.prototype=b,b.bV=(function(e){return e}),b.bS=(function(e){return e}),new w().i(hs,`com.raquo.laminar.codecs.package$$anon$2`,{bA:1,a2:1});function _s(e){return new Fi(e,new K((e=>e+`px`)))}function vs(e,t,n,r){}b=vs.prototype=new Ri,b.constructor=vs;function ys(){}ys.prototype=b,new w().i(vs,`com.raquo.laminar.keys.CompositeKey`,{bX:1,I:1});function bs(e,t,n){return e.a8=t,e.aM=n,e}function xs(){this.a8=null,this.aM=null}b=xs.prototype=new Ri,b.constructor=xs;function Ss(){}Ss.prototype=b,b.v=(function(e){return new zc(this,e,new Tu(((e,t,n)=>{E().fr(e,t,n)})))}),new w().i(xs,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,I:1});function Cs(e,t,n){this.c8=null,this.c7=null,this.bI=null,this.bJ=null,this.c8=e,this.c7=t;var r=n.g()?Y():new X(n.C()+`:`+e);this.bI=r.g()?e:r.C(),this.bJ=n.g()?Y():new X(Hi().gR(n.C()))}b=Cs.prototype=new Ri,b.constructor=Cs;function ws(){}ws.prototype=b,new w().i(Cs,`com.raquo.laminar.keys.SvgAttr`,{bZ:1,I:1});function Ts(){}b=Ts.prototype=new S,b.constructor=Ts;function Es(){}Es.prototype=b,b.aF=(function(e){}),new w().i(Ts,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c4:1,T:1});function Ds(e,t){if(this.dD=null,this.dD=e,t===null)throw new Hu}b=Ds.prototype=new S,b.constructor=Ds;function Os(){}Os.prototype=b,b.aF=(function(e){var t=kr(),n=(()=>{this.dD.i(e)});if(kr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Tr(t)}}}),new w().i(Ds,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c5:1,T:1});function ks(){}b=ks.prototype=new S,b.constructor=ks;function As(){}As.prototype=b,new w().i(ks,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{c7:1,c6:1});var js;function Ms(){return js||=new ks,js}function Ns(e,t){if(this.dE=null,this.dE=e,t===null)throw new Hu}b=Ns.prototype=new S,b.constructor=Ns;function Ps(){}Ps.prototype=b,b.g0=(function(e){return this.dE.i(e)}),new w().i(Ns,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{ca:1,c8:1});function Fs(e){e.f0(new Vr(new bu((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Lo(E().gc(e.by(),(E(),Em())),``,` > `,``))}))))}function Is(e,t,n){return e.cc=t,e}function Ls(){this.cc=null}b=Ls.prototype=new S,b.constructor=Ls;function Rs(){}Rs.prototype=b,b.cK=(function(){return this.cc}),b.cD=(function(e){var t=this.g2();return e.Z(new K((e=>{e.aF(t)}))),t}),b.g2=(function(){return new Id(this,E().g7(this))}),new w().i(Ls,`com.raquo.laminar.tags.HtmlTag`,{ae:1,a4:1});function zs(e,t){this.dK=null,this.dK=e}b=zs.prototype=new S,b.constructor=zs;function Bs(){}Bs.prototype=b,new w().i(zs,`com.raquo.laminar.tags.SvgTag`,{cj:1,a4:1});function Vs(){}b=Vs.prototype=new S,b.constructor=Vs;function Hs(){}Hs.prototype=b,b.bV=(function(e){return e}),b.bS=(function(e){return e}),new w().i(Vs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cs:1,a2:1});function Us(e,t){return e.ce=t,e.fP(),e}function Ws(){this.ce=null,this.cd=null,this.cf=!1}b=Ws.prototype=new S,b.constructor=Ws;function Gs(){}Gs.prototype=b,b.hp=(function(){return this.cf||=(this.cd=new Uc(this.ce,aa().fO(),(aa(),void 0)),!0),this.cd}),b.q=(function(e,t){var n=this.hp().cD(F().c(new(D.r()).C([])));return e.Z(new K((e=>{e.i(this).aF(n)}))),t.Z(new K((e=>{e.aF(n)}))),n});function Ks(){}b=Ks.prototype=new S,b.constructor=Ks;function qs(){}qs.prototype=b;function Js(e){return e instanceof Ks||typeof e==`number`||e instanceof j}function Ys(e,t,n,r,i){this.aP=null,this.b2=null,this.aQ=null,this.aR=0,this.aO=0,this.aP=e,this.b2=t,this.aQ=n,this.aR=r,this.aO=i}b=Ys.prototype=new S,b.constructor=Ys;function Xs(){}Xs.prototype=b,b.k=(function(e){return e instanceof Ys&&this.aQ===e.aQ&&this.aR===e.aR&&this.aO===e.aO&&this.aP===e.aP&&this.b2===e.b2}),b.w=(function(){var e=``;return this.aP!==`<jscode>`&&(e=``+e+this.aP+`.`),e=``+e+this.b2,this.aQ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aQ,this.aR>=0&&(e=e+`:`+this.aR,this.aO>=0&&(e=e+`:`+this.aO)),e+=`)`),e}),b.r=(function(){return J(this.aP)^J(this.b2)^J(this.aQ)^this.aR^this.aO});var Zs=new w().i(Ys,`java.lang.StackTraceElement`,{ao:1,a:1});function Qs(){}b=Qs.prototype=new S,b.constructor=Qs;function $s(){}$s.prototype=b,b.gS=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Jd;for(var i=``,a=t;a!==r;)i+=``+Vn(e.a[a]),a=1+a|0;return i}),new w().i(Qs,`java.lang.String$`,{cL:1,a:1});var ec;function tc(){return ec||=new Qs,ec}function L(e,t,n,r,i){return e.en=t,e.eo=i,i&&e.gr(),e}var nc=class extends Error{constructor(){super(),this.en=null,this.eo=!1,this.em=null,this.bM=null}bs(){return this.en}gr(){var e=this instanceof Z?this.T:this;return this.em=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gE(){return this.bM===null&&(this.eo?this.bM=qa().gq(this.em):this.bM=new(Zs.r()).C(0)),this.bM}w(){var e=Pn(this),t=this.bs();return t===null?e:e+`: `+t}r(){return $n.prototype.r.call(this)}k(e){return $n.prototype.k.call(this,e)}get message(){var e=this.bs();return e===null?``:e}get name(){return Pn(this)}toString(){return this.w()}};function rc(){}b=rc.prototype=new S,b.constructor=rc;function ic(){}ic.prototype=b,b.fd=(function(e,t){var n=e.D();if(n>-1){for(var r=t.gT(n),i=e.n(),a=0;a<n;)F().fZ(r,a,i.h()),a=1+a|0;return r}else{var o=null,s=t.he(),c=s===ur.l();o=[];for(var l=e.n();l.u();){var u=l.h(),d=c?Zn(u):u===null?s.ap.z:u;o.push(d)}return(s===lr.l()?co.l():s===Wo.l()||s===kl.l()?T.l():s).ap.r().w(o)}}),b.fb=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().M(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new w().i(rc,`scala.Array$`,{cV:1,a:1});var ac;function oc(){return ac||=new rc,ac}function sc(){this.eq=null,lc=this,this.eq=new ss(eo().el)}b=sc.prototype=new S,b.constructor=sc;function cc(){}cc.prototype=b,b.h5=(function(){return this.eq.cA}),new w().i(sc,`scala.Console$`,{cW:1,dQ:1});var lc;function uc(){return lc||=new sc,lc}function dc(){}b=dc.prototype=new Do,b.constructor=dc;function fc(){}fc.prototype=b,b.hz=(function(e){return e===null?null:e.a.length===0?_f().eA:new hm(e)});function pc(){}b=pc.prototype=new S,b.constructor=pc;function mc(){}mc.prototype=b,b.bh=(function(e){return e===null?Y():new X(e)}),new w().i(pc,`scala.Option$`,{d3:1,a:1});var hc;function gc(){return hc||=new pc,hc}function _c(e,t){if(t===e)e.eK(wd().fe(t));else for(var n=t.n();n.u();)e.cC(n.h());return e}function vc(){}b=vc.prototype=new S,b.constructor=vc;function yc(){}yc.prototype=b,b.w=(function(){return`<function0>`});function bc(){}b=bc.prototype=new S,b.constructor=bc;function xc(){}xc.prototype=b,b.w=(function(){return`<function1>`});function Sc(){}b=Sc.prototype=new S,b.constructor=Sc;function Cc(){}Cc.prototype=b,b.w=(function(){return`<function2>`});function wc(){}b=wc.prototype=new S,b.constructor=wc;function Tc(){}Tc.prototype=b,b.w=(function(){return`<function3>`});function Ec(e){this.bQ=!1,this.bQ=e}b=Ec.prototype=new S,b.constructor=Ec;function Dc(){}Dc.prototype=b,b.w=(function(){return``+this.bQ}),new w().i(Ec,`scala.runtime.BooleanRef`,{e3:1,a:1});function Oc(e){this.b9=0,this.b9=e}b=Oc.prototype=new S,b.constructor=Oc;function kc(){}kc.prototype=b,b.w=(function(){return``+this.b9}),new w().i(Oc,`scala.runtime.IntRef`,{e5:1,a:1});function Ac(){this.y=0,this.eI=0,this.fN=0,this.fM=0,Mc=this,this.y=J(`Seq`),this.eI=J(`Map`),this.fN=J(`Set`),this.fM=this.ht(Em(),this.eI)}b=Ac.prototype=new us,b.constructor=Ac;function jc(){}jc.prototype=b,b.hf=(function(e){return up(e)?this.gJ(e,this.y):e instanceof $p?this.gO(e,this.y):this.h4(e,this.y)}),new w().i(Ac,`scala.util.hashing.MurmurHash3$`,{ev:1,eu:1});var Mc;function R(){return Mc||=new Ac,Mc}var Nc=class extends nc{};function Pc(){this.bY=null,this.cS=null,this.cT=null,Ic=this,this.bY=wd().eL(F().c(new(N.r()).C([]))),this.cS=new K((e=>{try{console.error(this.gA(e)+`
`+this.gD(e,`
`))}catch(e){var t=e instanceof nc?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cT=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.T:t})),this.h9(this.cS)}b=Pc.prototype=new S,b.constructor=Pc;function Fc(){}Fc.prototype=b,b.gA=(function(e){try{var t=e.bs()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Nn(e).cH()+`: `+t}),b.gD=(function(e,t){try{return Lo(fl().hz(e.gE()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.h9=(function(e){this.bY.cC(e)}),b.cP=(function(e){for(var t=this.bY.n();t.u();){var n=t.h();try{n.i(e)}catch(e){var r=e instanceof nc?e:new Z(e),i=this.cT;if(n===null?i===null:n.k(i))throw r instanceof Z?r.T:r;console.warn(`Error processing an unhandled error callback:`),es().hk(0,new bu((e=>(()=>{throw e instanceof Z?e.T:e}))(r)))}}}),new w().i(Pc,`com.raquo.airstream.core.AirstreamError$`,{b5:1,dO:1,dP:1});var Ic;function Lc(){return Ic||=new Pc,Ic}function z(e,t,n){return new Ql(n.g0(t))}function Rc(e,t,n){return new Ds(new K((e=>{(Si(),new _i(t,null,null)).Z(new K((e=>(t=>{ta().bR(e,t,void 0)}))(e)))})),Ji())}function zc(e,t,n){this.dB=null,this.dC=null,this.dA=null,this.dB=e,this.dC=t,this.dA=n}b=zc.prototype=new S,b.constructor=zc;function Bc(){}Bc.prototype=b,b.aF=(function(e){this.dA.fX(e,this.dB,this.dC)}),new w().i(zc,`com.raquo.laminar.modifiers.KeySetter`,{c2:1,T:1,cb:1});function Vc(e,t){if(this.ca=null,this.dG=null,this.dH=null,this.dG=t,Fs(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!E().gL(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dH=e,this.gQ()}b=Vc.prototype=new S,b.constructor=Vc;function Hc(){}Hc.prototype=b,b.bU=(function(){return this.ca}),b.f0=(function(e){this.ca=e}),b.gQ=(function(){return this.ca.eJ(),ta().bR(this,this.dG,void 0)}),b.by=(function(){return this.dH}),new w().i(Vc,`com.raquo.laminar.nodes.RootNode`,{cf:1,a3:1,ad:1});function Uc(e,t,n){this.cc=null,this.dJ=null,this.dJ=e,Is(this,e,!1)}b=Uc.prototype=new Rs,b.constructor=Uc;function Wc(){}Wc.prototype=b,b.cK=(function(){return this.dJ}),new w().i(Uc,`com.raquo.laminar.tags.CustomHtmlTag`,{ch:1,ae:1,a4:1});function Gc(){this.a8=null,this.aM=null,this.dL=null,this.dM=!1,this.dN=null,this.dO=!1,this.dP=null,this.dQ=!1,bs(this,`size`,new Vs)}b=Gc.prototype=new Ss,b.constructor=Gc;function Kc(){}Kc.prototype=b,b.cI=(function(){return this.dM||=(this.dL=Jc().v(`large`),!0),this.dL}),b.cJ=(function(){return this.dO||=(this.dN=Jc().v(`medium`),!0),this.dN}),b.cQ=(function(){return this.dQ||=(this.dP=Jc().v(`small`),!0),this.dP}),new w().i(Gc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cn:1,Z:1,I:1});var qc;function Jc(){return qc||=new Gc,qc}function Yc(){this.a8=null,this.aM=null,this.dR=null,this.dS=!1,this.dT=null,this.dW=!1,this.dU=null,this.dV=!1,this.dX=null,this.dY=!1,bs(this,`appearance`,new Vs)}b=Yc.prototype=new Ss,b.constructor=Yc;function Xc(){}Xc.prototype=b,b.bc=(function(){return this.dS||=(this.dR=Qc().v(`accent`),!0),this.dR}),b.bq=(function(){return this.dW||=(this.dT=Qc().v(`filled`),!0),this.dT}),b.br=(function(){return this.dV||=(this.dU=Qc().v(`filled-outlined`),!0),this.dU}),b.bw=(function(){return this.dY||=(this.dX=Qc().v(`outlined`),!0),this.dX}),new w().i(Yc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$`,{co:1,Z:1,I:1});var Zc;function Qc(){return Zc||=new Yc,Zc}function $c(){this.a8=null,this.aM=null,this.dZ=null,this.e0=!1,this.e1=null,this.e2=!1,this.e3=null,this.e4=!1,this.e5=null,this.e6=!1,this.e7=null,this.e8=!1,bs(this,`variant`,new Vs)}b=$c.prototype=new Ss,b.constructor=$c;function el(){}el.prototype=b,b.bo=(function(){return this.e0||=(this.dZ=nl().v(`brand`),!0),this.dZ}),b.bp=(function(){return this.e2||=(this.e1=nl().v(`danger`),!0),this.e1}),b.bu=(function(){return this.e4||=(this.e3=nl().v(`neutral`),!0),this.e3}),b.bA=(function(){return this.e6||=(this.e5=nl().v(`success`),!0),this.e5}),b.bB=(function(){return this.e8||=(this.e7=nl().v(`warning`),!0),this.e7}),new w().i($c,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cp:1,Z:1,I:1});var tl;function nl(){return tl||=new $c,tl}function rl(){this.ce=null,this.cd=null,this.cf=!1,this.ef=null,this.eg=!1,this.e9=null,this.ea=!1,this.ed=null,this.ee=!1,this.eb=null,this.ec=!1,this.eh=null,this.ei=!1,Us(this,`wa-tag`)}b=rl.prototype=new Gs,b.constructor=rl;function il(){}il.prototype=b,b.x=(function(){return this.eg||=(this.ef=nl(),!0),this.ef}),b.A=(function(){return this.ea||=(this.e9=Qc(),!0),this.e9}),b.a4=(function(){return this.ee||=(this.ed=Jc(),!0),this.ed}),b.cM=(function(){return this.ec||=(this.eb=(G(),bs(new xs,`pill`,Ai().c5)),!0),this.eb}),b.cR=(function(){return this.ei||=(this.eh=(G(),bs(new xs,`with-remove`,Ai().c5)),!0),this.eh}),b.fP=(function(){return jn}),new w().i(rl,`io.github.nguyenyou.webawesome.laminar.Tag$`,{cr:1,ct:1,cq:1});var al;function B(){return al||=new rl,al}function ol(e){if(e.ap.Z)return e.ap.Q().cH()+`[]`;for(var t=e.ap.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function sl(e){this.cg=null,this.ap=e}b=sl.prototype=new S,b.constructor=sl;function cl(){}cl.prototype=b,b.w=(function(){return(this.ap.Y?`interface `:this.ap.X?``:`class `)+this.ap.N}),b.cH=(function(){return this.cg===null&&(this.cg=ol(this)),this.cg}),new w().i(sl,`java.lang.Class`,{cz:1,a:1,M:1});function V(e,t){return L(e,t,null,!0,!0),e}var H=class extends nc{};new w().i(H,`java.lang.Exception`,{L:1,u:1,a:1});function ll(){this.fI=null,dl=this,this.fI=Tl()}b=ll.prototype=new fc,b.constructor=ll;function ul(){}ul.prototype=b,new w().i(ll,`scala.Predef$`,{d6:1,cZ:1,d0:1});var dl;function fl(){return dl||=new ll,dl}function pl(e,t){return e.bO=t,e}function ml(){this.bO=null}b=ml.prototype=new S,b.constructor=ml;function hl(){}hl.prototype=b,b.cG=(function(e){return this.bO.cF(e,ip())}),b.cE=(function(e){return this.bO.cF(e,ip())});function gl(e,t){return new ud(e).g6(t)}function _l(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().z:new md(e,r,i)}function vl(e,t){for(var n=t.n();e.u()&&n.u();)if(!P().M(e.h(),n.h()))return!1;return e.u()===n.u()}function yl(){this.z=null,xl=this,this.z=new id}b=yl.prototype=new S,b.constructor=yl;function bl(){}bl.prototype=b,new w().i(yl,`scala.collection.Iterator$`,{dq:1,a0:1,a:1});var xl;function U(){return xl||=new yl,xl}function Sl(){}b=Sl.prototype=new S,b.constructor=Sl;function Cl(){}Cl.prototype=b,new w().i(Sl,`scala.collection.immutable.Map$`,{dE:1,dv:1,a:1});var wl;function Tl(){return wl||=new Sl,wl}function El(e){this.eB=null,this.eB=e}b=El.prototype=new yc,b.constructor=El;function Dl(){}Dl.prototype=b,b.aG=(function(){return(0,this.eB)()}),new w().i(El,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dZ:1,b1:1,ar:1});function W(e){this.eC=null,this.eC=e}b=W.prototype=new xc,b.constructor=W;function Ol(){}Ol.prototype=b,b.i=(function(e){return(0,this.eC)(e)}),new w().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{e0:1,b2:1,e:1});var kl=new w().i(0,`scala.runtime.Nothing$`,{e6:1,u:1,a:1});function Al(){}b=Al.prototype=new S,b.constructor=Al;function jl(){}jl.prototype=b,b.gy=(function(e){return(t=>e.i(t))}),new w().i(Al,`scala.scalajs.js.Any$`,{eb:1,ec:1,ed:1});var Ml;function Nl(){return Ml||=new Al,Ml}function Pl(){}b=Pl.prototype=new yc,b.constructor=Pl;function Fl(){}Fl.prototype=b;function Il(){}b=Il.prototype=new xc,b.constructor=Il;function Ll(){}Ll.prototype=b;function Rl(){}b=Rl.prototype=new Cc,b.constructor=Rl;function zl(){}zl.prototype=b;function Bl(){}b=Bl.prototype=new Tc,b.constructor=Bl;function Vl(){}Vl.prototype=b;function Hl(e,t,n,r){if(this.cU=null,r===null)throw new Hu;this.cU=void 0}b=Hl.prototype=new S,b.constructor=Hl;function Ul(){}Ul.prototype=b,b.w=(function(){return pr(this)}),new w().i(Hl,`com.raquo.airstream.core.Observer$$anon$8`,{b9:1,ba:1,b6:1,b7:1});function Wl(e){if(this.d6=null,this.d7=!1,this.fv=null,e===null)throw new Hu;Ni(this)}b=Wl.prototype=new S,b.constructor=Wl;function Gl(){}Gl.prototype=b,b.ho=(function(){return this.d7||=(this.d6=new zs(`svg`,!1),!0),this.d6}),new w().i(Wl,`com.raquo.laminar.api.Laminar$svg$`,{bt:1,bW:1,bC:1,bE:1});function Kl(){this.j=null,Jl=this,this.j=new hp}b=Kl.prototype=new S,b.constructor=Kl;function ql(){}ql.prototype=b,new w().i(Kl,`com.raquo.laminar.api.package$`,{bw:1,aa:1,ab:1,a9:1});var Jl;function G(){return Jl||=new Kl,Jl}function Yl(e,t,n){return e.at=t,e.au=n,e}function Xl(){this.at=null,this.au=null}b=Xl.prototype=new Ri,b.constructor=Xl;function Zl(){}Zl.prototype=b,b.v=(function(e){return new zc(this,Ln(e),new Tu(((e,t,n)=>{E().fs(e,t,n)})))});function Ql(e){this.dI=null,this.cb=null,this.dI=Y(),this.cb=E().g9(e)}b=Ql.prototype=new S,b.constructor=Ql;function $l(){}$l.prototype=b,b.ft=(function(e){this.dI=e}),b.fu=(function(e){}),b.aF=(function(e){ta().bR(e,this,void 0)}),b.hr=(function(){return this.cb.data}),b.by=(function(){return this.cb}),new w().i(Ql,`com.raquo.laminar.nodes.TextNode`,{cg:1,a3:1,T:1,ac:1});function eu(){}b=eu.prototype=new S,b.constructor=eu;function tu(){}tu.prototype=b;function nu(e,t){return e===t}function ru(e){return e?1231:1237}var iu=new w().i(0,`java.lang.Boolean`,{cx:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function au(e){return e}function ou(e,t){return t instanceof x&&e===t.c}var su=new w().i(0,`java.lang.Character`,{ak:1,a:1,Q:1,M:1},(e=>e instanceof x)),cu=class extends H{};function lu(){this.s=null,this.s=``}b=lu.prototype=new S,b.constructor=lu;function uu(){}uu.prototype=b,b.fV=(function(e){var t=tc().gS(e,0,e.a.length);return this.s=``+this.s+t,this}),b.w=(function(){return this.s}),b.l=(function(){return this.s.length}),b.eY=(function(e){return this.s.charCodeAt(e)}),new w().i(lu,`java.lang.StringBuilder`,{cM:1,a5:1,ai:1,a:1});function du(){}b=du.prototype=new S,b.constructor=du;function fu(){}fu.prototype=b,b.w=(function(){return`<function1>`}),b.fY=(function(e){throw new Xu(e)}),b.i=(function(e){this.fY(e)}),new w().i(du,`scala.PartialFunction$$anon$1`,{d5:1,g:1,e:1,a:1});function pu(){}b=pu.prototype=new S,b.constructor=pu;function mu(){}mu.prototype=b,b.n=(function(){return this}),b.bT=(function(e){return this.bz(e,-1)}),b.bz=(function(e,t){return _l(this,e,t)}),b.w=(function(){return`<iterator>`}),b.bd=(function(e,t,n,r){return Ro(this,e,t,n,r)}),b.D=(function(){return-1});function hu(e,t){return e.bP=t,e}function gu(){this.bP=null}b=gu.prototype=new S,b.constructor=gu;function _u(){}_u.prototype=b,b.eL=(function(e){return this.bP.cE(e)}),b.fe=(function(e){return this.bP.cG(e)}),b.cG=(function(e){return this.fe(e)}),b.cE=(function(e){return this.eL(e)});function vu(e){return e.aW(0)===0}function yu(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:vl(e.n(),t)}function bu(e){this.eF=null,this.eF=e}b=bu.prototype=new Fl,b.constructor=bu;function xu(){}xu.prototype=b,b.aG=(function(){return(0,this.eF)()}),new w().i(bu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ei:1,eh:1,b1:1,ar:1});function K(e){this.eG=null,this.eG=e}b=K.prototype=new Ll,b.constructor=K;function Su(){}Su.prototype=b,b.i=(function(e){return(0,this.eG)(e)}),new w().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ek:1,ej:1,b2:1,e:1});function Cu(e){this.fL=null,this.fL=e}b=Cu.prototype=new zl,b.constructor=Cu;function wu(){}wu.prototype=b,new w().i(Cu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{em:1,el:1,e1:1,cX:1});function Tu(e){this.eH=null,this.eH=e}b=Tu.prototype=new Vl,b.constructor=Tu;function Eu(){}Eu.prototype=b,b.fX=(function(e,t,n){return(0,this.eH)(e,t,n)}),new w().i(Tu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eo:1,en:1,e2:1,cY:1});function Du(e){e.c9=new ii(new bu((()=>{e.aN.eJ()})),new bu((()=>{e.aN.ga()})))}function Ou(e,t){Au(e,e.bK,t)&&ju(e,t)}function ku(e,t){var n=e.bK;e.bK=t,Au(e,n,t)||ju(e,t)}function Au(e,t,n){var r=!t.g()&&!t.C().bU().I.g(),i=!n.g()&&!n.C().bU().I.g();return r&&!i}function ju(e,t){Mu(e,t.g()?Y():new X(t.C().bU()))}function Mu(e,t){if(t.g())e.c9.g4();else{var n=t.C();e.c9.hh(n)}}function Nu(){}b=Nu.prototype=new tu,b.constructor=Nu;function Pu(){}Pu.prototype=b;var Fu=class extends cu{constructor(e){super(),L(this,e,null,!0,!0)}};new w().i(Fu,`java.lang.ArithmeticException`,{cw:1,R:1,L:1,u:1,a:1});var Iu=new w().i(0,`java.lang.Byte`,{cy:1,S:1,a:1,Q:1,M:1},(e=>Kn(e))),Lu=class extends cu{constructor(e){super(),L(this,e,null,!0,!0)}};new w().i(Lu,`java.lang.IllegalArgumentException`,{cC:1,R:1,L:1,u:1,a:1});function Ru(e,t){return L(e,t,null,!0,!0),e}var zu=class extends cu{};new w().i(zu,`java.lang.IndexOutOfBoundsException`,{am:1,R:1,L:1,u:1,a:1});function Bu(){}b=Bu.prototype=new tu,b.constructor=Bu;function Vu(){}Vu.prototype=b,new w().i(Bu,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cF:1,ah:1,af:1,aj:1,ag:1});var Hu=class extends cu{constructor(){super(),L(this,null,null,!0,!0)}};new w().i(Hu,`java.lang.NullPointerException`,{cG:1,R:1,L:1,u:1,a:1});var Uu=new w().i(0,`java.lang.Short`,{cH:1,S:1,a:1,Q:1,M:1},(e=>qn(e))),Wu=class extends cu{constructor(e){super(),L(this,e,null,!0,!0)}};new w().i(Wu,`java.lang.UnsupportedOperationException`,{cP:1,R:1,L:1,u:1,a:1});var Gu=class extends cu{constructor(e){super(),L(this,e,null,!0,!0)}};new w().i(Gu,`java.util.NoSuchElementException`,{cT:1,R:1,L:1,u:1,a:1});function Ku(e){return e.cl||=(e.cm=e.bN===null?`null`:Yu(e),!0),e.cm}function qu(e){return e.cl?e.cm:Ku(e)}function Ju(e){var t=e.bN;return`of class `+Pn(t)}function Yu(e){try{return e.bN+` (`+Ju(e)+`)`}catch{return`an instance `+Ju(e)}}var Xu=class extends cu{constructor(e){super(),this.cm=null,this.bN=null,this.cl=!1,this.bN=e,L(this,null,null,!0,!0)}bs(){return qu(this)}};new w().i(Xu,`scala.MatchError`,{d1:1,R:1,L:1,u:1,a:1});function Zu(){}b=Zu.prototype=new S,b.constructor=Zu;function Qu(){}Qu.prototype=b,b.g=(function(){return this===Y()}),b.D=(function(){return this.g()?0:1}),b.n=(function(){return this.g()?U().z:new od(this.C())});function $u(e){this.b3=0,this.eu=0,this.et=null,this.et=e,this.b3=0,this.eu=e.am()}b=$u.prototype=new mu,b.constructor=$u;function ed(){}ed.prototype=b,b.u=(function(){return this.b3<this.eu}),b.h=(function(){var e=this.et.an(this.b3);return this.b3=1+this.b3|0,e}),new w().i($u,`scala.Product$$anon$1`,{d7:1,r:1,s:1,b:1,c:1});function td(e){this.bO=null,pl(this,e)}b=td.prototype=new hl,b.constructor=td;function nd(){}nd.prototype=b,new w().i(td,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dl:1,dk:1,a0:1,a:1,a6:1});function rd(e){return Lo(e,e.aU()+`(`,`, `,`)`)}function id(){}b=id.prototype=new mu,b.constructor=id;function ad(){}ad.prototype=b,b.u=(function(){return!1}),b.gU=(function(){throw new Gu(`next on empty iterator`)}),b.D=(function(){return 0}),b.bz=(function(e,t){return this}),b.h=(function(){this.gU()}),new w().i(id,`scala.collection.Iterator$$anon$19`,{dr:1,r:1,s:1,b:1,c:1});function od(e){this.b5=!1,this.ey=null,this.ey=e,this.b5=!1}b=od.prototype=new mu,b.constructor=od;function sd(){}sd.prototype=b,b.u=(function(){return!this.b5}),b.h=(function(){return this.b5?U().z.h():(this.b5=!0,this.ey)}),b.bz=(function(e,t){return this.b5||e>0||t===0?U().z:this}),new w().i(od,`scala.collection.Iterator$$anon$20`,{ds:1,r:1,s:1,b:1,c:1});function cd(e){for(;;){if(e.F instanceof ud){var t=e.F;e.F=t.F,e.aa=t.aa,t.P!==null&&(e.O===null&&(e.O=t.O),t.O.b6=e.P,e.P=t.P);continue}return}}function ld(e){for(;;)if(e.P===null)return e.F=null,e.O=null,!1;else{if(e.F=e.P.gI(),e.O===e.P&&(e.O=e.O.b6),e.P=e.P.b6,cd(e),e.aa)return!0;if(e.F!==null&&e.F.u())return e.aa=!0,!0}}function ud(e){this.F=null,this.P=null,this.O=null,this.aa=!1,this.F=e,this.P=null,this.O=null,this.aa=!1}b=ud.prototype=new mu,b.constructor=ud;function dd(){}dd.prototype=b,b.u=(function(){return this.aa?!0:this.F===null?!1:this.F.u()?(this.aa=!0,!0):ld(this)}),b.h=(function(){return this.u()?(this.aa=!1,this.F.h()):U().z.h()}),b.g6=(function(e){var t=new zo(e,null);return this.P===null?(this.P=t,this.O=t):(this.O.b6=t,this.O=t),this.F===null&&(this.F=U().z),this}),new w().i(ud,`scala.collection.Iterator$ConcatIterator`,{ax:1,r:1,s:1,b:1,c:1});function fd(e){for(;e.a1>0;)e.ab.u()?(e.ab.h(),e.a1=-1+e.a1|0):e.a1=0}function pd(e,t){if(e.K<0)return-1;var n=e.K-t|0;return n<0?0:n}function md(e,t,n){this.ab=null,this.K=0,this.a1=0,this.ab=e,this.K=n,this.a1=t}b=md.prototype=new mu,b.constructor=md;function hd(){}hd.prototype=b,b.D=(function(){var e=this.ab.D();if(e<0)return-1;var t=e-this.a1|0,n=t<0?0:t;if(this.K<0)return n;var r=this.K;return r<n?r:n}),b.u=(function(){return fd(this),this.K!==0&&this.ab.u()}),b.h=(function(){return fd(this),this.K>0?(this.K=-1+this.K|0,this.ab.h()):this.K<0?this.ab.h():U().z.h()}),b.bz=(function(e,t){var n=e>0?e:0;if(t<0)var r=pd(this,n);else if(t<=n)var r=0;else if(this.K<0)var r=t-n|0;else var i=pd(this,n),a=t-n|0,r=i<a?i:a;var o=this.a1+n|0;return r===0?U().z:o<0?(this.a1=2147483647,this.K=0,gl(this,new El((()=>new md(this.ab,-2147483647+o|0,r))))):(this.a1=o,this.K=r,this)}),new w().i(md,`scala.collection.Iterator$SliceIterator`,{du:1,r:1,s:1,b:1,c:1});function gd(e,t){if(t<0)throw Ru(new zu,``+t);var n=e.gg(t);if(n.g())throw Ru(new zu,``+t);return n.a3()}function _d(e,t){return dp(t)?vd(e,e,t):yu(e,t)}function vd(e,t,n){for(;;)if(t===n)return!0;else if(!t.g()&&!n.g()&&P().M(t.a3(),n.a3())){var r=t.X(),i=n.X();t=r,n=i}else return t.g()&&n.g()}function yd(e){this.b8=null,this.b8=e}b=yd.prototype=new mu,b.constructor=yd;function bd(){}bd.prototype=b,b.u=(function(){return!this.b8.g()}),b.h=(function(){var e=this.b8.a3();return this.b8=this.b8.X(),e}),new w().i(yd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dz:1,r:1,s:1,b:1,c:1});function xd(){this.bP=null,hu(this,Ad())}b=xd.prototype=new _u,b.constructor=xd;function Sd(){}Sd.prototype=b,new w().i(xd,`scala.collection.mutable.Buffer$`,{dJ:1,dw:1,a6:1,a0:1,a:1});var Cd;function wd(){return Cd||=new xd,Cd}function Td(e){this.ba=0,this.eD=0,this.eE=null,this.eE=e,this.ba=0,this.eD=e.am()}b=Td.prototype=new mu,b.constructor=Td;function Ed(){}Ed.prototype=b,b.u=(function(){return this.ba<this.eD}),b.h=(function(){var e=this.eE.an(this.ba);return this.ba=1+this.ba|0,e}),new w().i(Td,`scala.runtime.ScalaRunTime$$anon$1`,{e9:1,r:1,s:1,b:1,c:1});function Dd(){}b=Dd.prototype=new S,b.constructor=Dd;function Od(){}Od.prototype=b,b.cE=(function(e){return this.ff(e)}),b.ff=(function(e){return _c(Mm(new Nm),e).fq()}),b.cG=(function(e){return this.ff(e)}),new w().i(Dd,`scala.scalajs.js.WrappedArray$`,{ef:1,dA:1,a6:1,a0:1,a:1});var kd;function Ad(){return kd||=new Dd,kd}var jd=class e extends Nc{constructor(e,t){super(),this.aI=null,this.aH=0,this.aI=e,this.aH=t,L(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aY(){return new $u(this)}r(){var e=-889275714;return e=I().b(e,J(`TransactionDepthExceeded`)),e=I().b(e,I().B(this.aI)),e=I().b(e,this.aH),I().m(e,2)}k(t){return this===t?!0:t instanceof e&&this.aH===t.aH?this.aI===t.aI:!1}am(){return 2}ao(){return`TransactionDepthExceeded`}an(e){if(e===0)return this.aI;if(e===1)return this.aH;throw Ru(new zu,``+e)}w(){return`TransactionDepthExceeded: `+this.aI+`; maxDepth: `+this.aH}};new w().i(jd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a8:1,b4:1,u:1,a:1,d:1,U:1});function Md(e){this.at=null,this.au=null,this.dr=null,this.ds=!1,Yl(this,e,Em())}b=Md.prototype=new Zl,b.constructor=Md;function Nd(){}Nd.prototype=b,b.g5=(function(){return this.ds||=(this.dr=this.v(`column`),!0),this.dr}),new w().i(Md,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bK:1,X:1,I:1,V:1,W:1,bO:1});function Pd(e){this.at=null,this.au=null,this.dt=null,this.du=!1,Yl(this,e,Em())}b=Pd.prototype=new Zl,b.constructor=Pd;function Fd(){}Fd.prototype=b,b.hx=(function(){return this.du||=(this.dt=this.v(`wrap`),!0),this.dt}),new w().i(Pd,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bL:1,X:1,I:1,V:1,W:1,bQ:1});function Id(e,t){this.bK=null,this.aN=null,this.c9=null,this.dF=null,this.a0=null,this.dF=e,this.a0=t,this.bK=Y(),Fs(this),Du(this)}b=Id.prototype=new S,b.constructor=Id;function Ld(){}Ld.prototype=b,b.aF=(function(e){ta().bR(e,this,void 0)}),b.bU=(function(){return this.aN}),b.f0=(function(e){this.aN=e}),b.fu=(function(e){Ou(this,e)}),b.ft=(function(e){ku(this,e)}),b.w=(function(){return`ReactiveHtmlElement(`+(this.a0===null?`tag=`+this.dF.cK():this.a0.outerHTML)+`)`}),b.by=(function(){return this.a0});var q=new w().i(Id,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ce:1,a3:1,T:1,ac:1,ad:1,cd:1});function Rd(e,t){return Object.is(e,t)}function zd(e){return Sa().cL(e)}var Bd=new w().i(0,`java.lang.Double`,{al:1,S:1,a:1,Q:1,M:1,Y:1},(e=>typeof e==`number`)),Vd=new w().i(0,`java.lang.Float`,{cA:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Yn(e))),Hd=new w().i(0,`java.lang.Integer`,{cD:1,S:1,a:1,Q:1,M:1,Y:1},(e=>Jn(e)));function Ud(e,t){return t instanceof j&&e.d===t.d&&e.e===t.e}function Wd(e){return e.d^e.e}var Gd=new w().i(0,`java.lang.Long`,{an:1,S:1,a:1,Q:1,M:1,Y:1},(e=>e instanceof j));function J(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Kd(e,t){return e===t}var qd=new w().i(0,`java.lang.String`,{cK:1,a:1,Q:1,a5:1,M:1,Y:1},(e=>typeof e==`string`)),Jd=class extends zu{constructor(){super(),L(this,null,null,!0,!0)}};new w().i(Jd,`java.lang.StringIndexOutOfBoundsException`,{cN:1,am:1,R:1,L:1,u:1,a:1});function Yd(){}b=Yd.prototype=new Qu,b.constructor=Yd;function Xd(){}Xd.prototype=b,b.gz=(function(){throw new Gu(`None.get`)}),b.ao=(function(){return`None`}),b.am=(function(){return 0}),b.an=(function(e){return I().bt(e)}),b.aY=(function(){return new Td(this)}),b.r=(function(){return 2433880}),b.w=(function(){return`None`}),b.C=(function(){this.gz()}),new w().i(Yd,`scala.None$`,{d2:1,as:1,b:1,U:1,d:1,a:1});var Zd;function Y(){return Zd||=new Yd,Zd}function X(e){this.b4=null,this.b4=e}b=X.prototype=new Qu,b.constructor=X;function Qd(){}Qd.prototype=b,b.C=(function(){return this.b4}),b.ao=(function(){return`Some`}),b.am=(function(){return 1}),b.an=(function(e){return e===0?this.b4:I().bt(e)}),b.aY=(function(){return new Td(this)}),b.r=(function(){return R().fo(this,-889275714,!1)}),b.w=(function(){return F().fQ(this)}),b.k=(function(e){return this===e||e instanceof X&&P().M(this.b4,e.b4)}),new w().i(X,`scala.Some`,{at:1,as:1,b:1,U:1,d:1,a:1});function $d(){}b=$d.prototype=new S,b.constructor=$d;function ef(){}ef.prototype=b,b.aU=(function(){return this.aZ()}),b.Z=(function(e){Io(this,e)}),b.bd=(function(e,t,n,r){return Ro(this,e,t,n,r)}),b.D=(function(){return-1});function tf(e,t){return e.J=t,e.f=0,e.E=mo().aV(e.J),e}function nf(){this.J=null,this.f=0,this.E=0}b=nf.prototype=new mu,b.constructor=nf;function rf(){}rf.prototype=b,b.D=(function(){return this.E-this.f|0}),b.u=(function(){return this.f<this.E}),b.h=(function(){this.f>=mo().aV(this.J)&&U().z.h();var e=F().aT(this.J,this.f);return this.f=1+this.f|0,e}),b.bT=(function(e){if(e>0){var t=this.f+e|0;if(t<0)var n=this.E;else var r=this.E,n=r<t?r:t;this.f=n}return this}),new w().i(nf,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function af(e,t){return t<0?0:t>e.S?e.S:t}function of(e){this.ex=null,this.a9=0,this.S=0,this.ex=e,this.a9=0,this.S=e.l()}b=of.prototype=new mu,b.constructor=of;function sf(){}sf.prototype=b,b.D=(function(){return this.S}),b.u=(function(){return this.S>0}),b.h=(function(){if(this.S>0){var e=this.ex.p(this.a9);return this.a9=1+this.a9|0,this.S=-1+this.S|0,e}else return U().z.h()}),b.bT=(function(e){if(e>0){this.a9=this.a9+e|0;var t=this.S-e|0;this.S=t<0?0:t}return this}),b.bz=(function(e,t){var n=af(this,e),r=af(this,t)-n|0;return this.S=r<0?0:r,this.a9=this.a9+n|0,this}),new w().i(of,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dp:1,r:1,s:1,b:1,c:1,a:1});function cf(e){return e.cx||=(e.cy=new Gp(new C(0)),!0),e.cy}function lf(e){return e.cx?e.cy:cf(e)}function uf(){this.cy=null,this.fJ=null,this.cx=!1,ff=this,this.fJ=new td(this)}b=uf.prototype=new S,b.constructor=uf;function df(){}df.prototype=b,b.gw=(function(e,t){return e instanceof Op?e:this.hv(oc().fd(e,t))}),b.hv=(function(e){if(e===null)return null;if(e instanceof C)return new Gp(e);if(e instanceof ar)return new Vp(e);if(e instanceof cr)return new Lp(e);if(e instanceof or)return new Up(e);if(e instanceof sr)return new zp(e);if(e instanceof nr)return new Fp(e);if(e instanceof rr)return new Np(e);if(e instanceof ir)return new qp(e);if(e instanceof tr)return new jp(e);if(so(e,1))return new Yp(e);throw new Xu(e)}),b.cF=(function(e,t){return this.gw(e,t)}),new w().i(uf,`scala.collection.immutable.ArraySeq$`,{dD:1,az:1,av:1,au:1,aw:1,a:1});var ff;function pf(){return ff||=new uf,ff}function mf(){this.fK=null,this.eA=null,gf=this,this.fK=new td(this),this.eA=new hm(new C(0))}b=mf.prototype=new S,b.constructor=mf;function hf(){}hf.prototype=b,b.gx=(function(e,t){return this.gP(oc().fd(e,t))}),b.gP=(function(e){if(e===null)return null;if(e instanceof C)return new hm(e);if(e instanceof ar)return new dm(e);if(e instanceof cr)return new sm(e);if(e instanceof or)return new pm(e);if(e instanceof sr)return new lm(e);if(e instanceof nr)return new am(e);if(e instanceof rr)return new rm(e);if(e instanceof ir)return new _m(e);if(e instanceof tr)return new tm(e);if(so(e,1))return new ym(e);throw new Xu(e)}),b.cF=(function(e,t){return this.gx(e,t)}),new w().i(mf,`scala.collection.mutable.ArraySeq$`,{dH:1,az:1,av:1,au:1,aw:1,a:1});var gf;function _f(){return gf||=new mf,gf}function vf(e){this.at=null,this.au=null,this.dm=null,this.dn=!1,Yl(this,e,Em())}b=vf.prototype=new Zl,b.constructor=vf;function yf(){}yf.prototype=b,b.fc=(function(){return this.dn||=(this.dm=this.v(`flex`),!0),this.dm}),new w().i(vf,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bI:1,X:1,I:1,V:1,W:1,bR:1,bN:1});function bf(e){this.at=null,this.au=null,this.dp=null,this.dq=!1,Yl(this,e,Em())}b=bf.prototype=new Zl,b.constructor=bf;function xf(){}xf.prototype=b,b.g3=(function(){return this.dq||=(this.dp=this.v(`center`),!0),this.dp}),new w().i(bf,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bJ:1,X:1,I:1,V:1,W:1,bS:1,bP:1});function Sf(e){this.at=null,this.au=null,this.dv=null,this.dw=!1,Yl(this,e,Em())}b=Sf.prototype=new Zl,b.constructor=Sf;function Cf(){}Cf.prototype=b,b.fp=(function(){return this.dw||=(this.dv=_s(this),!0),this.dv}),new w().i(Sf,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bM:1,X:1,I:1,V:1,W:1,bT:1,bU:1});function wf(){}b=wf.prototype=new Pu,b.constructor=wf;function Tf(){}Tf.prototype=b;function Ef(e){this.J=null,this.f=0,this.E=0,this.cn=null,this.cn=e,tf(this,e)}b=Ef.prototype=new rf,b.constructor=Ef;function Df(){}Df.prototype=b,b.gV=(function(){this.f>=this.cn.a.length&&U().z.h();var e=this.cn.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.gV()}),new w().i(Ef,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{db:1,N:1,r:1,s:1,b:1,c:1,a:1});function Of(e){this.J=null,this.f=0,this.E=0,this.co=null,this.co=e,tf(this,e)}b=Of.prototype=new rf,b.constructor=Of;function kf(){}kf.prototype=b,b.gW=(function(){this.f>=this.co.a.length&&U().z.h();var e=this.co.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return Xn(this.gW())}),new w().i(Of,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dc:1,N:1,r:1,s:1,b:1,c:1,a:1});function Af(e){this.J=null,this.f=0,this.E=0,this.cp=null,this.cp=e,tf(this,e)}b=Af.prototype=new rf,b.constructor=Af;function jf(){}jf.prototype=b,b.gX=(function(){this.f>=this.cp.a.length&&U().z.h();var e=this.cp.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.gX()}),new w().i(Af,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dd:1,N:1,r:1,s:1,b:1,c:1,a:1});function Mf(e){this.J=null,this.f=0,this.E=0,this.cq=null,this.cq=e,tf(this,e)}b=Mf.prototype=new rf,b.constructor=Mf;function Nf(){}Nf.prototype=b,b.gY=(function(){this.f>=this.cq.a.length&&U().z.h();var e=this.cq.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.gY()}),new w().i(Mf,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{de:1,N:1,r:1,s:1,b:1,c:1,a:1});function Pf(e){this.J=null,this.f=0,this.E=0,this.cr=null,this.cr=e,tf(this,e)}b=Pf.prototype=new rf,b.constructor=Pf;function Ff(){}Ff.prototype=b,b.gZ=(function(){this.f>=this.cr.a.length&&U().z.h();var e=this.cr.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.gZ()}),new w().i(Pf,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{df:1,N:1,r:1,s:1,b:1,c:1,a:1});function If(e){this.J=null,this.f=0,this.E=0,this.cs=null,this.cs=e,tf(this,e)}b=If.prototype=new rf,b.constructor=If;function Lf(){}Lf.prototype=b,b.h0=(function(){this.f>=this.cs.a.length&&U().z.h();var e=this.cs.a[this.f],t=e.d,n=e.e;return this.f=1+this.f|0,new j(t,n)}),b.h=(function(){return this.h0()}),new w().i(If,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dg:1,N:1,r:1,s:1,b:1,c:1,a:1});function Rf(e){this.J=null,this.f=0,this.E=0,this.ct=null,this.ct=e,tf(this,e)}b=Rf.prototype=new rf,b.constructor=Rf;function zf(){}zf.prototype=b,b.h1=(function(){this.f>=this.ct.a.length&&U().z.h();var e=this.ct.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.h1()}),new w().i(Rf,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dh:1,N:1,r:1,s:1,b:1,c:1,a:1});function Bf(e){this.J=null,this.f=0,this.E=0,this.ew=null,this.ew=e,tf(this,e)}b=Bf.prototype=new rf,b.constructor=Bf;function Vf(){}Vf.prototype=b,b.h2=(function(){this.f>=this.ew.a.length&&U().z.h(),this.f=1+this.f|0}),b.h=(function(){this.h2()}),new w().i(Bf,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{di:1,N:1,r:1,s:1,b:1,c:1,a:1});function Hf(e){this.J=null,this.f=0,this.E=0,this.cu=null,this.cu=e,tf(this,e)}b=Hf.prototype=new rf,b.constructor=Hf;function Uf(){}Uf.prototype=b,b.h3=(function(){this.f>=this.cu.a.length&&U().z.h();var e=this.cu.a[this.f];return this.f=1+this.f|0,e}),b.h=(function(){return this.h3()}),new w().i(Hf,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dj:1,N:1,r:1,s:1,b:1,c:1,a:1});function Wf(e){return e.aU()+`(<not computed>)`}function Gf(){}b=Gf.prototype=new S,b.constructor=Gf;function Kf(){}Kf.prototype=b;var Z=class e extends cu{constructor(e){super(),this.T=null,this.T=e,L(this,null,null,!0,!0)}bs(){return Ln(this.T)}ao(){return`JavaScriptException`}am(){return 1}an(e){return e===0?this.T:I().bt(e)}aY(){return new Td(this)}r(){return R().fo(this,-889275714,!1)}k(t){return this===t||t instanceof e&&P().M(this.T,t.T)}};new w().i(Z,`scala.scalajs.js.JavaScriptException`,{b3:1,R:1,L:1,u:1,a:1,U:1,d:1});function qf(e,t){typeof console<`u`&&(e.ek&&console.error?console.error(t):console.log(t))}function Jf(e){this.ek=!1,this.b1=null,this.ek=e,new Bu,this.b1=``}b=Jf.prototype=new Tf,b.constructor=Jf;function Yf(){}Yf.prototype=b,b.gM=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b1=``+this.b1+t,t=``;else{var r=this.b1,i=t;qf(this,``+r+i.substring(0,n)),this.b1=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new w().i(Jf,`java.lang.JSConsoleBasedPrintStream`,{cE:1,cv:1,cu:1,ah:1,af:1,aj:1,ag:1,ai:1});function Xf(e,t,n){for(;;)if(t<=0||n.g())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function Zf(){this.cz=null}b=Zf.prototype=new Kf,b.constructor=Zf;function Qf(){}Qf.prototype=b,b.w=(function(){return this.cz}),b.k=(function(e){return this===e}),b.r=(function(){return Gn(this)});function $f(){}b=$f.prototype=new ef,b.constructor=$f;function ep(){}ep.prototype=b,b.w=(function(){return Wf(this)});function tp(){this.cz=null,this.cz=`Any`}b=tp.prototype=new Qf,b.constructor=tp;function np(){}np.prototype=b,b.he=(function(){return T.l()}),b.gT=(function(e){return new C(e)}),new w().i(tp,`scala.reflect.ManifestFactory$AnyManifest$`,{dV:1,dX:1,dW:1,dU:1,dT:1,dS:1,dY:1,a:1,d:1});var rp;function ip(){return rp||=new tp,rp}function Q(e,t){return e===t?!0:ap(t)&&t.eX(e)?e.cO(t):!1}function ap(e){return!!(e&&e.$classData&&e.$classData.n.f)}function op(){}b=op.prototype=new ef,b.constructor=op;function sp(){}sp.prototype=b,b.eX=(function(e){return!0}),b.k=(function(e){return Q(this,e)}),b.r=(function(){return R().hf(this)}),b.w=(function(){return rd(this)}),b.g=(function(){return vu(this)}),b.cO=(function(e){return yu(this,e)});function cp(){}b=cp.prototype=new ep,b.constructor=cp;function lp(){}lp.prototype=b;function up(e){return!!(e&&e.$classData&&e.$classData.n.n)}function dp(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function fp(e,t){return e.b7=t,e}function pp(){this.b7=null}b=pp.prototype=new lp,b.constructor=pp;function mp(){}mp.prototype=b,b.p=(function(e){return this.b7.p(e)}),b.l=(function(){return this.b7.l()}),b.g=(function(){return this.b7.g()});function hp(){this.dc=null,this.dd=!1,this.d8=null,this.d9=!1,this.da=null,this.db=!1,this.de=null,this.df=!1,this.dg=null,this.dh=!1,this.di=null,this.dj=!1,this.fx=null,this.fw=null,this.dk=null,this.dl=!1,ji(this),Ti(this),Ci(this),wi(this)}b=hp.prototype=new S,b.constructor=hp;function gp(){}gp.prototype=b,b.f2=(function(){return this.dd||=(this.dc=Is(new Ls,`div`,!1),!0),this.dc}),b.fT=(function(){return this.d9||=(this.d8=new bf(`align-items`),!0),this.d8}),b.f1=(function(){return this.db||=(this.da=new vf(`display`),!0),this.da}),b.gs=(function(){return this.df||=(this.de=new Md(`flex-direction`),!0),this.de}),b.gt=(function(){return this.dh||=(this.dg=new Pd(`flex-wrap`),!0),this.dg}),b.fg=(function(){return this.dj||=(this.di=new Sf(`gap`),!0),this.di}),b.hn=(function(){return this.dl||=(this.dk=new Wl(this),!0),this.dk}),new w().i(hp,`com.raquo.laminar.api.package$$anon$1`,{bx:1,bV:1,bB:1,bG:1,bF:1,bH:1,bD:1,bv:1,br:1,bu:1,aa:1,ab:1,a9:1,bs:1});function _p(e){this.b7=null,fp(this,e)}b=_p.prototype=new mp,b.constructor=_p;function vp(){}vp.prototype=b,b.n=(function(){return new of(this)}),b.aZ=(function(){return`IndexedSeqView`}),b.aW=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),b.D=(function(){return this.l()}),new w().i(_p,`scala.collection.IndexedSeqView$Id`,{dn:1,dy:1,d8:1,d9:1,h:1,i:1,b:1,k:1,c:1,j:1,dB:1,a:1,dx:1,l:1,dm:1,o:1});function yp(){}b=yp.prototype=new sp,b.constructor=yp;function bp(){}bp.prototype=b;function xp(e,t){return!Cp(t)||e.l()===t.l()}function Sp(e,t){if(Cp(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.eM(),o=t.eM(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().M(e.p(i),t.p(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().bT(i),m=t.n().bT(i);r&&p.u();)r=P().M(p.h(),m.h())}return r}else return yu(e,t)}function Cp(e){return!!(e&&e.$classData&&e.$classData.n.w)}function wp(){}b=wp.prototype=new sp,b.constructor=wp;function Tp(){}Tp.prototype=b;function Ep(){}b=Ep.prototype=new Tp,b.constructor=Ep;function Dp(){}Dp.prototype=b,b.eK=(function(e){return _c(this,e)});function Op(){}b=Op.prototype=new bp,b.constructor=Op;function kp(){}kp.prototype=b,b.eX=(function(e){return xp(this,e)}),b.cO=(function(e){return Sp(this,e)}),b.aZ=(function(){return`IndexedSeq`}),b.aW=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),b.D=(function(){return this.l()}),b.aU=(function(){return`ArraySeq`}),b.eM=(function(){return 2147483647});function $(){}b=$.prototype=new Tp,b.constructor=$;function Ap(){}Ap.prototype=b,b.aZ=(function(){return`IndexedSeq`}),b.aW=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),b.D=(function(){return this.l()}),b.aU=(function(){return`ArraySeq`}),b.k=(function(e){return e instanceof $&&mo().aV(this.U())!==mo().aV(e.U())?!1:Q(this,e)});function jp(e){this.av=null,this.av=e}b=jp.prototype=new kp,b.constructor=jp;function Mp(){}Mp.prototype=b,b.l=(function(){return this.av.a.length}),b.r=(function(){var e=R();return e.eW(this.av,e.y)}),b.k=(function(e){return e instanceof jp?A().fa(this.av,e.av):Q(this,e)}),b.n=(function(){return new Hf(this.av)}),b.bn=(function(e){return this.av.a[e]}),b.i=(function(e){return this.bn(e|0)}),b.p=(function(e){return this.bn(e)}),new w().i(jp,`scala.collection.immutable.ArraySeq$ofBoolean`,{aC:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Np(e){this.aw=null,this.aw=e}b=Np.prototype=new kp,b.constructor=Np;function Pp(){}Pp.prototype=b,b.l=(function(){return this.aw.a.length}),b.be=(function(e){return this.aw.a[e]}),b.r=(function(){var e=R();return e.eO(this.aw,e.y)}),b.k=(function(e){return e instanceof Np?A().f3(this.aw,e.aw):Q(this,e)}),b.n=(function(){return new Ef(this.aw)}),b.i=(function(e){return this.be(e|0)}),b.p=(function(e){return this.be(e)}),new w().i(Np,`scala.collection.immutable.ArraySeq$ofByte`,{aD:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Fp(e){this.ac=null,this.ac=e}b=Fp.prototype=new kp,b.constructor=Fp;function Ip(){}Ip.prototype=b,b.l=(function(){return this.ac.a.length}),b.bf=(function(e){return this.ac.a[e]}),b.r=(function(){var e=R();return e.eP(this.ac,e.y)}),b.k=(function(e){return e instanceof Fp?A().f4(this.ac,e.ac):Q(this,e)}),b.n=(function(){return new Of(this.ac)}),b.bd=(function(e,t,n,r){return new am(this.ac).bd(e,t,n,r)}),b.i=(function(e){return Xn(this.bf(e|0))}),b.p=(function(e){return Xn(this.bf(e))}),new w().i(Fp,`scala.collection.immutable.ArraySeq$ofChar`,{aE:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Lp(e){this.ax=null,this.ax=e}b=Lp.prototype=new kp,b.constructor=Lp;function Rp(){}Rp.prototype=b,b.l=(function(){return this.ax.a.length}),b.r=(function(){var e=R();return e.eQ(this.ax,e.y)}),b.k=(function(e){return e instanceof Lp?A().f5(this.ax,e.ax):Q(this,e)}),b.n=(function(){return new Af(this.ax)}),b.bi=(function(e){return this.ax.a[e]}),b.i=(function(e){return this.bi(e|0)}),b.p=(function(e){return this.bi(e)}),new w().i(Lp,`scala.collection.immutable.ArraySeq$ofDouble`,{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function zp(e){this.ay=null,this.ay=e}b=zp.prototype=new kp,b.constructor=zp;function Bp(){}Bp.prototype=b,b.l=(function(){return this.ay.a.length}),b.r=(function(){var e=R();return e.eR(this.ay,e.y)}),b.k=(function(e){return e instanceof zp?A().f6(this.ay,e.ay):Q(this,e)}),b.n=(function(){return new Mf(this.ay)}),b.bj=(function(e){return this.ay.a[e]}),b.i=(function(e){return this.bj(e|0)}),b.p=(function(e){return this.bj(e)}),new w().i(zp,`scala.collection.immutable.ArraySeq$ofFloat`,{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Vp(e){this.az=null,this.az=e}b=Vp.prototype=new kp,b.constructor=Vp;function Hp(){}Hp.prototype=b,b.l=(function(){return this.az.a.length}),b.r=(function(){var e=R();return e.eS(this.az,e.y)}),b.k=(function(e){return e instanceof Vp?A().f7(this.az,e.az):Q(this,e)}),b.n=(function(){return new Pf(this.az)}),b.bk=(function(e){return this.az.a[e]}),b.i=(function(e){return this.bk(e|0)}),b.p=(function(e){return this.bk(e)}),new w().i(Vp,`scala.collection.immutable.ArraySeq$ofInt`,{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Up(e){this.aA=null,this.aA=e}b=Up.prototype=new kp,b.constructor=Up;function Wp(){}Wp.prototype=b,b.l=(function(){return this.aA.a.length}),b.r=(function(){var e=R();return e.eT(this.aA,e.y)}),b.k=(function(e){return e instanceof Up?A().f8(this.aA,e.aA):Q(this,e)}),b.n=(function(){return new If(this.aA)}),b.bl=(function(e){return this.aA.a[e]}),b.i=(function(e){return this.bl(e|0)}),b.p=(function(e){return this.bl(e)}),new w().i(Up,`scala.collection.immutable.ArraySeq$ofLong`,{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Gp(e){this.aB=null,this.aB=e}b=Gp.prototype=new kp,b.constructor=Gp;function Kp(){}Kp.prototype=b,b.l=(function(){return this.aB.a.length}),b.p=(function(e){return this.aB.a[e]}),b.r=(function(){var e=R();return e.eN(this.aB,e.y)}),b.k=(function(e){return e instanceof Gp?oc().fb(this.aB,e.aB):Q(this,e)}),b.n=(function(){return tf(new nf,this.aB)}),b.i=(function(e){return this.p(e|0)}),new w().i(Gp,`scala.collection.immutable.ArraySeq$ofRef`,{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function qp(e){this.aC=null,this.aC=e}b=qp.prototype=new kp,b.constructor=qp;function Jp(){}Jp.prototype=b,b.l=(function(){return this.aC.a.length}),b.bg=(function(e){return this.aC.a[e]}),b.r=(function(){var e=R();return e.eU(this.aC,e.y)}),b.k=(function(e){return e instanceof qp?A().f9(this.aC,e.aC):Q(this,e)}),b.n=(function(){return new Rf(this.aC)}),b.i=(function(e){return this.bg(e|0)}),b.p=(function(e){return this.bg(e)}),new w().i(qp,`scala.collection.immutable.ArraySeq$ofShort`,{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Yp(e){this.aS=null,this.aS=e}b=Yp.prototype=new kp,b.constructor=Yp;function Xp(){}Xp.prototype=b,b.l=(function(){return this.aS.a.length}),b.r=(function(){var e=R();return e.eV(this.aS,e.y)}),b.k=(function(e){return e instanceof Yp?this.aS.a.length===e.aS.a.length:Q(this,e)}),b.n=(function(){return new Bf(this.aS)}),b.bm=(function(e){}),b.i=(function(e){this.bm(e|0)}),b.p=(function(e){this.bm(e)}),new w().i(Yp,`scala.collection.immutable.ArraySeq$ofUnit`,{aL:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Zp(e,t,n,r){for(;;)if(t===r)return n.g()?0:1;else if(n.g())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function Qp(e,t,n){for(;;)if(t===n)return!0;else{var r=t.g(),i=n.g();if(!(r||i)&&P().M(t.a3(),n.a3())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function $p(){}b=$p.prototype=new bp,b.constructor=$p;function em(){}em.prototype=b,b.n=(function(){return new yd(this)}),b.aZ=(function(){return`LinearSeq`}),b.p=(function(e){return gd(this,e)}),b.cO=(function(e){return _d(this,e)}),b.g=(function(){return this===Em()}),b.Z=(function(e){for(var t=this;!t.g();)e.i(t.a3()),t=t.X()}),b.l=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.X();return t}),b.aW=(function(e){return e<0?1:Zp(this,0,this,e)}),b.aU=(function(){return`List`}),b.k=(function(e){return e instanceof $p?Qp(this,this,e):Q(this,e)}),b.i=(function(e){return gd(this,e|0)}),b.gg=(function(e){return Xf(this,e,this)});function tm(e){this.ad=null,this.ad=e}b=tm.prototype=new Ap,b.constructor=tm;function nm(){}nm.prototype=b,b.l=(function(){return this.ad.a.length}),b.r=(function(){var e=R();return e.eW(this.ad,e.y)}),b.k=(function(e){return e instanceof tm?A().fa(this.ad,e.ad):$.prototype.k.call(this,e)}),b.n=(function(){return new Hf(this.ad)}),b.bn=(function(e){return this.ad.a[e]}),b.i=(function(e){return this.bn(e|0)}),b.p=(function(e){return this.bn(e)}),b.U=(function(){return this.ad}),new w().i(tm,`scala.collection.mutable.ArraySeq$ofBoolean`,{aO:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function rm(e){this.ae=null,this.ae=e}b=rm.prototype=new Ap,b.constructor=rm;function im(){}im.prototype=b,b.l=(function(){return this.ae.a.length}),b.be=(function(e){return this.ae.a[e]}),b.r=(function(){var e=R();return e.eO(this.ae,e.y)}),b.k=(function(e){return e instanceof rm?A().f3(this.ae,e.ae):$.prototype.k.call(this,e)}),b.n=(function(){return new Ef(this.ae)}),b.i=(function(e){return this.be(e|0)}),b.p=(function(e){return this.be(e)}),b.U=(function(){return this.ae}),new w().i(rm,`scala.collection.mutable.ArraySeq$ofByte`,{aP:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function am(e){this.Q=null,this.Q=e}b=am.prototype=new Ap,b.constructor=am;function om(){}om.prototype=b,b.l=(function(){return this.Q.a.length}),b.bf=(function(e){return this.Q.a[e]}),b.r=(function(){var e=R();return e.eP(this.Q,e.y)}),b.k=(function(e){return e instanceof am?A().f4(this.Q,e.Q):$.prototype.k.call(this,e)}),b.n=(function(){return new Of(this.Q)}),b.bd=(function(e,t,n,r){var i=e.L;t.length!==0&&(i.s=``+i.s+t);var a=this.Q.a.length;if(a!==0)if(n===``)i.fV(this.Q);else{i.l();var o=this.Q.a[0],s=``+Vn(o);i.s+=s;for(var c=1;c<a;){i.s=``+i.s+n;var l=this.Q.a[c],u=``+Vn(l);i.s+=u,c=1+c|0}}return r.length!==0&&(i.s=``+i.s+r),e}),b.i=(function(e){return Xn(this.bf(e|0))}),b.p=(function(e){return Xn(this.bf(e))}),b.U=(function(){return this.Q}),new w().i(am,`scala.collection.mutable.ArraySeq$ofChar`,{aQ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function sm(e){this.af=null,this.af=e}b=sm.prototype=new Ap,b.constructor=sm;function cm(){}cm.prototype=b,b.l=(function(){return this.af.a.length}),b.r=(function(){var e=R();return e.eQ(this.af,e.y)}),b.k=(function(e){return e instanceof sm?A().f5(this.af,e.af):$.prototype.k.call(this,e)}),b.n=(function(){return new Af(this.af)}),b.bi=(function(e){return this.af.a[e]}),b.i=(function(e){return this.bi(e|0)}),b.p=(function(e){return this.bi(e)}),b.U=(function(){return this.af}),new w().i(sm,`scala.collection.mutable.ArraySeq$ofDouble`,{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function lm(e){this.ag=null,this.ag=e}b=lm.prototype=new Ap,b.constructor=lm;function um(){}um.prototype=b,b.l=(function(){return this.ag.a.length}),b.r=(function(){var e=R();return e.eR(this.ag,e.y)}),b.k=(function(e){return e instanceof lm?A().f6(this.ag,e.ag):$.prototype.k.call(this,e)}),b.n=(function(){return new Mf(this.ag)}),b.bj=(function(e){return this.ag.a[e]}),b.i=(function(e){return this.bj(e|0)}),b.p=(function(e){return this.bj(e)}),b.U=(function(){return this.ag}),new w().i(lm,`scala.collection.mutable.ArraySeq$ofFloat`,{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function dm(e){this.ah=null,this.ah=e}b=dm.prototype=new Ap,b.constructor=dm;function fm(){}fm.prototype=b,b.l=(function(){return this.ah.a.length}),b.r=(function(){var e=R();return e.eS(this.ah,e.y)}),b.k=(function(e){return e instanceof dm?A().f7(this.ah,e.ah):$.prototype.k.call(this,e)}),b.n=(function(){return new Pf(this.ah)}),b.bk=(function(e){return this.ah.a[e]}),b.i=(function(e){return this.bk(e|0)}),b.p=(function(e){return this.bk(e)}),b.U=(function(){return this.ah}),new w().i(dm,`scala.collection.mutable.ArraySeq$ofInt`,{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function pm(e){this.ai=null,this.ai=e}b=pm.prototype=new Ap,b.constructor=pm;function mm(){}mm.prototype=b,b.l=(function(){return this.ai.a.length}),b.r=(function(){var e=R();return e.eT(this.ai,e.y)}),b.k=(function(e){return e instanceof pm?A().f8(this.ai,e.ai):$.prototype.k.call(this,e)}),b.n=(function(){return new If(this.ai)}),b.bl=(function(e){return this.ai.a[e]}),b.i=(function(e){return this.bl(e|0)}),b.p=(function(e){return this.bl(e)}),b.U=(function(){return this.ai}),new w().i(pm,`scala.collection.mutable.ArraySeq$ofLong`,{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function hm(e){this.aj=null,this.aj=e}b=hm.prototype=new Ap,b.constructor=hm;function gm(){}gm.prototype=b,b.l=(function(){return this.aj.a.length}),b.p=(function(e){return this.aj.a[e]}),b.r=(function(){var e=R();return e.eN(this.aj,e.y)}),b.k=(function(e){return e instanceof hm?oc().fb(this.aj,e.aj):$.prototype.k.call(this,e)}),b.n=(function(){return tf(new nf,this.aj)}),b.i=(function(e){return this.p(e|0)}),b.U=(function(){return this.aj}),new w().i(hm,`scala.collection.mutable.ArraySeq$ofRef`,{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function _m(e){this.ak=null,this.ak=e}b=_m.prototype=new Ap,b.constructor=_m;function vm(){}vm.prototype=b,b.l=(function(){return this.ak.a.length}),b.bg=(function(e){return this.ak.a[e]}),b.r=(function(){var e=R();return e.eU(this.ak,e.y)}),b.k=(function(e){return e instanceof _m?A().f9(this.ak,e.ak):$.prototype.k.call(this,e)}),b.n=(function(){return new Rf(this.ak)}),b.i=(function(e){return this.bg(e|0)}),b.p=(function(e){return this.bg(e)}),b.U=(function(){return this.ak}),new w().i(_m,`scala.collection.mutable.ArraySeq$ofShort`,{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function ym(e){this.aD=null,this.aD=e}b=ym.prototype=new Ap,b.constructor=ym;function bm(){}bm.prototype=b,b.l=(function(){return this.aD.a.length}),b.r=(function(){var e=R();return e.eV(this.aD,e.y)}),b.k=(function(e){return e instanceof ym?this.aD.a.length===e.aD.a.length:$.prototype.k.call(this,e)}),b.n=(function(){return new Bf(this.aD)}),b.bm=(function(e){}),b.i=(function(e){this.bm(e|0)}),b.p=(function(e){this.bm(e)}),b.U=(function(){return this.aD}),new w().i(ym,`scala.collection.mutable.ArraySeq$ofUnit`,{aX:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function xm(e,t){this.cv=null,this.cw=null,this.cv=e,this.cw=t}b=xm.prototype=new em,b.constructor=xm;function Sm(){}Sm.prototype=b,b.a3=(function(){return this.cv}),b.ao=(function(){return`::`}),b.am=(function(){return 2}),b.an=(function(e){switch(e){case 0:return this.cv;case 1:return this.cw;default:return I().bt(e)}}),b.aY=(function(){return new Td(this)}),b.X=(function(){return this.cw}),new w().i(xm,`scala.collection.immutable.$colon$colon`,{dC:1,a7:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aM:1,a1:1,ay:1,aN:1,aA:1,q:1,p:1,A:1,aB:1,a:1,U:1});function Cm(){}b=Cm.prototype=new em,b.constructor=Cm;function wm(){}wm.prototype=b,b.gH=(function(){throw new Gu(`head of empty list`)}),b.hq=(function(){throw new Wu(`tail of empty list`)}),b.D=(function(){return 0}),b.n=(function(){return U().z}),b.ao=(function(){return`Nil`}),b.am=(function(){return 0}),b.an=(function(e){return I().bt(e)}),b.aY=(function(){return new Td(this)}),b.X=(function(){this.hq()}),b.a3=(function(){this.gH()}),new w().i(Cm,`scala.collection.immutable.Nil$`,{dF:1,a7:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aM:1,a1:1,ay:1,aN:1,aA:1,q:1,p:1,A:1,aB:1,a:1,U:1});var Tm;function Em(){return Tm||=new Cm,Tm}function Dm(e,t){return e.L=t,e}function Om(e){return Dm(e,new lu),e}function km(){this.L=null}b=km.prototype=new Tp,b.constructor=km;function Am(){}Am.prototype=b,b.aZ=(function(){return`IndexedSeq`}),b.n=(function(){return new of(new _p(this))}),b.aW=(function(e){var t=this.L.l();return t===e?0:t<e?-1:1}),b.eK=(function(e){return _c(this,e)}),b.l=(function(){return this.L.l()}),b.D=(function(){return this.L.l()}),b.fR=(function(e){var t=this.L,n=``+Vn(e);return t.s+=n,this}),b.w=(function(){return this.L.s}),b.g=(function(){return this.L.l()===0}),b.fq=(function(){return this.L.s}),b.cC=(function(e){return this.fR(Zn(e))}),b.i=(function(e){var t=e|0;return Xn(this.L.eY(t))}),b.p=(function(e){return Xn(this.L.eY(e))}),new w().i(km,`scala.collection.mutable.StringBuilder`,{dN:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dL:1,aY:1,b0:1,aZ:1,D:1,n:1,o:1,E:1,a5:1,a:1});function jm(e,t){return e.aE=t,e}function Mm(e){return jm(e,[]),e}function Nm(){this.aE=null}b=Nm.prototype=new Dp,b.constructor=Nm;function Pm(){}Pm.prototype=b,b.aZ=(function(){return`IndexedSeq`}),b.n=(function(){return new of(new _p(this))}),b.aW=(function(e){var t=this.aE.length|0;return t===e?0:t<e?-1:1}),b.p=(function(e){return this.aE[e]}),b.l=(function(){return this.aE.length|0}),b.D=(function(){return this.aE.length|0}),b.aU=(function(){return`WrappedArray`}),b.fq=(function(){return this}),b.cC=(function(e){return this.aE.push(e),this}),b.i=(function(e){var t=e|0;return this.aE[t]}),new w().i(Nm,`scala.scalajs.js.WrappedArray`,{ee:1,dG:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dI:1,b0:1,aZ:1,dM:1,q:1,p:1,D:1,n:1,o:1,E:1,dK:1,aY:1,a:1}),Mn=new j(0,0),dr.z=Mn,va(new(qd.r()).C([]));