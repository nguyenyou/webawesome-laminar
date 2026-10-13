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
\f\r]`,we=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,Ee=/>/g,De=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Oe=/'/g,ke=/"/g,Ae=/^(?:script|style|textarea|title)$/i,je=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),h=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),Me=new WeakMap,Ne=ve.createTreeWalker(ve,129);function Pe(e,t){if(!xe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return pe===void 0?t:pe.createHTML(t)}const Fe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=we;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===we?c[1]===`!--`?o=Te:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=De):(Ae.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=De):o=Ee:o===De?c[0]===`>`?(o=i??we,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?De:c[3]===`"`?ke:Oe):o===ke||o===Oe?o=De:o===Te||o===Ee?o=we:(o=De,i=void 0);let d=o===De&&e[t+1].startsWith(`/>`)?` `:``;a+=o===we?n+_e:l>=0?(r.push(s),n.slice(0,l)+me+n.slice(l)+he+d):n+he+(l===-2?t:d)}return[Pe(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ie=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Fe(t,n);if(this.el=e.createElement(l,r),Ne.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ne.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(me)){let t=u[o++],n=i.getAttribute(e).split(he),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ve:r[1]===`?`?He:r[1]===`@`?Ue:Be}),i.removeAttribute(e)}else e.startsWith(he)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ae.test(i.tagName)){let e=i.textContent.split(he),t=e.length-1;if(t>0){i.textContent=fe?fe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ye()),Ne.nextNode(),c.push({type:2,index:++a});i.append(e[t],ye())}}}else if(i.nodeType===8)if(i.data===ge)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(he,e+1))!==-1;)c.push({type:7,index:a}),e+=he.length-1}a++}}static createElement(e,t){let n=ve.createElement(`template`);return n.innerHTML=e,n}};function Le(e,t,n=e,r){if(t===h)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=be(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Le(e,i._$AS(e,t.values),i,r)),t}var Re=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ve).importNode(t,!0);Ne.currentNode=r;let i=Ne.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ze(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new We(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ne.nextNode(),a++)}return Ne.currentNode=ve,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ze=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Le(this,e,t),be(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==h&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Se(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(ve.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ie.createElement(Pe(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Re(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Me.get(e.strings);return t===void 0&&Me.set(e.strings,t=new Ie(e)),t}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ye()),this.O(ye()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Be=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Le(this,e,t,0),a=!be(e)||e!==this._$AH&&e!==h,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Le(this,r[n+o],t,o),s===h&&(s=this._$AH[o]),a||=!be(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ve=class extends Be{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},He=class extends Be{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},Ue=class extends Be{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Le(this,e,t,0)??g)===h)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},We=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Le(this,e)}};const Ge={M:me,P:he,A:ge,C:1,L:Fe,R:Re,D:Se,V:Le,I:ze,H:Be,N:He,U:Ue,B:Ve,F:We},Ke=de.litHtmlPolyfillSupport;Ke?.(Ie,ze),(de.litHtmlVersions??=[]).push(`3.3.1`);const qe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ze(t.insertBefore(ye(),e),e,void 0,n??{})}return i._$AI(e),i},Je=globalThis;var Ye=class extends ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return h}};Ye._$litElement$=!0,Ye.finalized=!0,Je.litElementHydrateSupport?.({LitElement:Ye});const Xe=Je.litElementPolyfillSupport;Xe?.({LitElement:Ye}),(Je.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ze=c`
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
`,Qe=c`
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
`,$e={small:`s`,medium:`m`,large:`l`},et=new Set;function tt(e,t){t in $e&&!et.has(`${e}:${t}`)&&(et.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${$e[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var nt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},rt=c`
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
function it(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var at=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,st=e=>{throw TypeError(e)},_=(e,t,n,r)=>{for(var i=r>1?void 0:r?ot(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&at(t,n,i),i},ct=(e,t,n)=>t.has(e)||st(`Cannot `+n),lt=(e,t,n)=>(ct(e,t,`read from private field`),n?n.call(e):t.get(e)),ut=(e,t,n)=>t.has(e)?st(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),dt=(e,t,n,r)=>(ct(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},pt={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},mt=(e=pt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?mt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ht(e){return v({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const gt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function _t(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return gt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return gt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=c`
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
`,yt=/;\s+$/;function bt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function xt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(yt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var St,Ct=class extends Ye{constructor(){super(),ut(this,St,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[vt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){lt(this,St)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),dt(this,St,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=xt({property:bt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=xt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};St=new WeakMap,_([v()],Ct.prototype,`dir`,2),_([v()],Ct.prototype,`lang`,2),_([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],Ct.prototype,`didSSR`,2);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const wt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Tt=e=>(...t)=>({_$litDirective$:e,values:t});var Et=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Dt=Tt(class extends Et{constructor(e){if(super(e),e.type!==wt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return h}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends Ct{constructor(){super(...arguments),this.hasSlotController=new nt(this,`hint`,`label`),this.label=``,this.hint=``,this.orientation=`vertical`,this.required=!1,this.withLabel=!1,this.withHint=!1,this.syncCheckboxElements=()=>{if(this.size)for(let e of this.getAllCheckboxes())e.setAttribute(`size`,this.size)}}handleSizeChange(){tt(this.localName,this.size)}updated(e){e.has(`size`)&&this.syncCheckboxElements()}getAllCheckboxes(){return[...this.querySelectorAll(`:is(wa-checkbox, wa-switch)`)]}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t;return je`
      <fieldset
        part="form-control"
        class=${Dt({"form-control":!0,"checkbox-group-required":this.required,"form-control-has-label":n})}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Dt({label:!0,"has-label":n})}
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
          class=${Dt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </fieldset>
    `}};y.css=[rt,Qe,Ze],_([v()],y.prototype,`label`,2),_([v({attribute:`hint`})],y.prototype,`hint`,2),_([v({reflect:!0})],y.prototype,`orientation`,2),_([v({reflect:!0})],y.prototype,`size`,2),_([it(`size`)],y.prototype,`handleSizeChange`,1),_([v({type:Boolean,reflect:!0})],y.prototype,`required`,2),_([v({type:Boolean,attribute:`with-label`})],y.prototype,`withLabel`,2),_([v({type:Boolean,attribute:`with-hint`})],y.prototype,`withHint`,2),y=_([ft(`wa-checkbox-group`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ot=c`
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
`,kt=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},At=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},jt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Mt=class extends Ct{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new At))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[jt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Mt.formAssociated=!0,_([v({reflect:!0})],Mt.prototype,`name`,2),_([v({type:Boolean})],Mt.prototype,`disabled`,2),_([v({state:!0,attribute:!1})],Mt.prototype,`valueHasChanged`,2),_([v({state:!0,attribute:!1})],Mt.prototype,`hasInteracted`,2),_([v({attribute:`custom-error`,reflect:!0})],Mt.prototype,`customError`,2),_([v({attribute:!1,state:!0,type:Object})],Mt.prototype,`validity`,1);
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Nt=e=>e??g,{I:Pt}=Ge,Ft=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,It=e=>e.strings===void 0,Lt={},Rt=(e,t=Lt)=>e._$AH=t,zt=Tt(class extends Et{constructor(e){if(super(e),e.type!==wt.PROPERTY&&e.type!==wt.ATTRIBUTE&&e.type!==wt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!It(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===h||t===g)return t;let n=e.element,r=e.name;if(e.type===wt.PROPERTY){if(t===n[r])return h}else if(e.type===wt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return h}else if(e.type===wt.ATTRIBUTE&&n.getAttribute(r)===t+``)return h;return Rt(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new nt(this,`hint`),this.title=``,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this.indeterminate=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``}static get validators(){let e=[kt({validationProperty:`checked`,validationElement:Object.assign(document.createElement(`input`),{type:`checkbox`,required:!0})})];return[...super.validators,...e]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){tt(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.indeterminate=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}connectedCallback(){if(super.connectedCallback(),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultCheckedChange()});return}this.handleDefaultCheckedChange()}handleDefaultCheckedChange(){this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked,this.input.indeterminate=this.indeterminate),this.customStates.set(`checked`,this.checked),this.customStates.set(`indeterminate`,this.indeterminate),this.updateValidity()}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){let e=this.hasSlotController.test(`hint`),t=this.hint?!0:!!e,n=!this.checked&&this.indeterminate,r=n?`indeterminate`:`check`,i=n?`indeterminate`:`checked`,a=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,o=this.didSSR&&!this.hasUpdated?null:zt(this.checked);return je`
      <label part="base checkbox">
        <span part="control">
          <input
            class="input"
            type="checkbox"
            title=${this.title}
            name=${Nt(this.name)}
            value=${Nt(this.value)}
            .indeterminate=${zt(this.indeterminate)}
            .checked=${Nt(o)}
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
        class="${Dt({"has-slotted":t})}"
      >
        ${this.hint}
      </slot>
    `}};b.css=[Qe,rt,Ot],b.shadowRootOptions={...Mt.shadowRootOptions,delegatesFocus:!0},_([_t(`input[type="checkbox"]`)],b.prototype,`input`,2),_([v()],b.prototype,`title`,2),_([v({reflect:!0})],b.prototype,`value`,1),_([v({reflect:!0})],b.prototype,`size`,2),_([it(`size`)],b.prototype,`handleSizeChange`,1),_([v({type:Boolean})],b.prototype,`disabled`,2),_([v({type:Boolean,reflect:!0})],b.prototype,`indeterminate`,2),_([v({type:Boolean,attribute:!1})],b.prototype,`checked`,1),_([v({type:Boolean,reflect:!0,attribute:`checked`})],b.prototype,`defaultChecked`,2),_([v({type:Boolean,reflect:!0})],b.prototype,`required`,2),_([v()],b.prototype,`hint`,2),_([it([`checked`,`defaultChecked`])],b.prototype,`handleDefaultCheckedChange`,1),_([it([`checked`,`indeterminate`])],b.prototype,`handleStateChange`,1),_([it(`disabled`)],b.prototype,`handleDisabledChange`,1),b=_([ft(`wa-checkbox`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Vt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Ht=c`
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
`,Ut=``,Wt=``;function Gt(){return Ut.replace(/\/$/,``)}function Kt(e){Wt=e}function qt(){if(!Wt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Kt(e.getAttribute(`data-fa-kit-code`)||``)}return Wt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Jt=`7.3.0`;function Yt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Xt(e,t,n){let r=Yt(e,t,n),i=Gt();if(i)return`${i}/${r}/${e}.svg`;let a=qt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${Jt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${Jt}/svgs/${r}/${e}.svg`}var Zt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Xt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Qt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var $t={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},en={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=$t[n][e]??$t.regular[e]??$t.regular[`circle-question`];return r?Qt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},tn=`classic`,nn=[Zt,en],rn=new Set;function an(e){rn.add(e)}function on(e){rn.delete(e)}function sn(e){return nn.find(t=>t.name===e)}function cn(){return tn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ln=Symbol(),un=Symbol(),dn,fn=new Map,x=class extends Ct{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=je`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?ln:un}catch{return un}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return ln;dn||=new DOMParser;let r=dn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):ln}catch{return ln}}}connectedCallback(){super.connectedCallback(),an(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),on(this)}async getIconSource(){let e=sn(this.library),t=this.family||cn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?sn(this.library):void 0;if(!e){this.svg=null;return}let r=fn.get(e);r||(r=this.resolveIcon(e,n),fn.set(e,r));let i=await r;if(i===un&&fn.delete(e),e===(await this.getIconSource()).url){if(Ft(i)){this.svg=i;return}switch(i){case un:case ln:this.svg=null,this.dispatchEvent(new Bt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Vt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=sn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:je`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=Ht,_([ht()],x.prototype,`svg`,2),_([v({reflect:!0})],x.prototype,`name`,2),_([v({reflect:!0})],x.prototype,`family`,2),_([v({reflect:!0})],x.prototype,`variant`,2),_([v({reflect:!0})],x.prototype,`canvas`,2),_([v({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),_([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),_([v()],x.prototype,`src`,2),_([v()],x.prototype,`label`,2),_([v({reflect:!0})],x.prototype,`library`,2),_([v({type:Number,reflect:!0})],x.prototype,`rotate`,2),_([v({type:String,reflect:!0})],x.prototype,`flip`,2),_([v({type:String,reflect:!0})],x.prototype,`animation`,2),_([it(`label`)],x.prototype,`handleLabelChange`,1),_([it([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=_([ft(`wa-icon`)],x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pn=t({default:()=>y}),mn=t({default:()=>b}),hn=c`
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
`,gn=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}});const _n=new Set,vn=new Map;let yn,bn=`ltr`,xn=`en`;const Sn=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Sn){let e=new MutationObserver(wn);bn=document.documentElement.dir||`ltr`,xn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Cn(...e){e.map(e=>{let t=e.$code.toLowerCase();vn.has(t)?vn.set(t,Object.assign(Object.assign({},vn.get(t)),e)):vn.set(t,e),yn||=e}),wn()}function wn(){Sn&&(bn=document.documentElement.dir||`ltr`,xn=document.documentElement.lang||navigator.language),[..._n.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Tn=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){_n.add(this.host)}hostDisconnected(){_n.delete(this.host)}dir(){return`${this.host.dir||bn}`.toLowerCase()}lang(){let e=`${this.host.lang||xn}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return yn?yn.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=vn.get(`${n}-${r}`),a=vn.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&yn&&yn[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(yn&&yn[e])i=yn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},En={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Cn(En);var Dn=En,On=class extends Tn{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Cn(Dn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var S=class extends Mt{constructor(){super(...arguments),this.hasSlotController=new nt(this,`hint`),this.localize=new On(this),this.title=``,this.name=null,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``,this.withHint=!1}static get validators(){return[...super.validators,gn()]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){tt(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleKeyDown(e){let t=this.localize.dir()===`rtl`;e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set(`checked`,this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??`on`,t)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let e=this.hasSlotController.test(`hint`,`withHint`),t=this.hint?!0:!!e,n=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,r=this.didSSR&&!this.hasUpdated?null:zt(this.checked);return je`
      <label
        part="base switch"
        class=${Dt({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Nt(this.name)}
          value=${Nt(this.value)}
          .checked=${Nt(r)}
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
        class=${Dt({"has-slotted":t})}
        aria-hidden=${t?`false`:`true`}
        >${this.hint}</slot
      >
    `}};S.shadowRootOptions={...Mt.shadowRootOptions,delegatesFocus:!0},S.css=[Qe,rt,hn],_([_t(`input[type="checkbox"]`)],S.prototype,`input`,2),_([v()],S.prototype,`title`,2),_([v({reflect:!0})],S.prototype,`name`,2),_([v({reflect:!0})],S.prototype,`value`,1),_([v({reflect:!0})],S.prototype,`size`,2),_([it(`size`)],S.prototype,`handleSizeChange`,1),_([v({type:Boolean})],S.prototype,`disabled`,2),_([v({type:Boolean,attribute:!1})],S.prototype,`checked`,1),_([v({type:Boolean,attribute:`checked`,reflect:!0})],S.prototype,`defaultChecked`,2),_([v({type:Boolean,reflect:!0})],S.prototype,`required`,2),_([v({attribute:`hint`})],S.prototype,`hint`,2),_([v({attribute:`with-hint`,type:Boolean})],S.prototype,`withHint`,2),_([it([`checked`,`defaultChecked`])],S.prototype,`handleStateChange`,1),_([it(`disabled`,{waitUntilFirstUpdate:!0})],S.prototype,`handleDisabledChange`,1),S=_([ft(`wa-switch`)],S),S.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kn=t({default:()=>S}),C;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var An;function jn(e){this.c=e}C=jn.prototype,C.toString=(function(){return String.fromCharCode(this.c)});function Mn(e){switch(typeof e){case`string`:return ff.l();case`number`:return qn(e)?e<<24>>24===e?nd.l():e<<16>>16===e?ld.l():sf.l():Jn(e)?of.l():af.l();case`boolean`:return yu.l();case`undefined`:return mo.l();default:return e instanceof N?uf.l():e instanceof jn?Su.l():e&&e.$classData?e.$classData.l():null}}function Nn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return qn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Jn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof N?`java.lang.Long`:e instanceof jn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hq()}}function Pn(e,t){switch(typeof e){case`string`:return df(e,t);case`number`:return nf(e,t);case`boolean`:return _u(e,t);case`undefined`:return uo(e,t);default:return e&&e.$classData||e===null?e.i(t):e instanceof N?cf(e,t):e instanceof jn?xu(Xn(e),t):Qn.prototype.i.call(e,t)}}function Fn(e){switch(typeof e){case`string`:return q(e);case`number`:return rf(e);case`boolean`:return vu(e);case`undefined`:return fo(e);default:return e&&e.$classData||e===null?e.o():e instanceof N?lf(e):e instanceof jn?bu(Xn(e)):Qn.prototype.o.call(e)}}function In(e){return e===void 0?`undefined`:e.toString()}function Ln(e,t){if(t===0)throw new td(`/ by zero`);return e/t|0}function Rn(e,t){if(t===0)throw new td(`/ by zero`);return e%t|0}function zn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Bn(e){return String.fromCharCode(e)}function Vn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Hn=0,Un=new WeakMap;function Wn(e){switch(typeof e){case`string`:return q(e);case`number`:return rf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:q(n);default:if(e===null)return 0;var r=Un.get(e);return r===void 0&&(r=Hn+1|0,Hn=r,Un.set(e,r)),r}}function Gn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Kn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function qn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Jn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Yn(e){return new jn(e)}Yn(0);function Xn(e){return e===null?0:e.c}function Zn(e){return e===null?An:e}function Qn(){}C=Qn.prototype,C.constructor=Qn;function w(){}w.prototype=C,C.o=(function(){return Wn(this)}),C.i=(function(e){return this===e}),C.s=(function(){var e=this.o();return Nn(this)+`@`+(+(e>>>0)).toString(16)}),C.toString=(function(){return this.s()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}C=T.prototype=new w,C.constructor=T,C.a1=(function(e,t,n,r){Vn(this.a,e,t.a,n,r)}),C.Y=(function(){return new T(this.a.slice())});function $n(){}$n.prototype=C;function er(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}C=er.prototype=new w,C.constructor=er,C.a1=(function(e,t,n,r){Vn(this.a,e,t.a,n,r)}),C.Y=(function(){return new er(this.a.slice())});function tr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}C=tr.prototype=new w,C.constructor=tr,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new tr(this.a.slice())});function nr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}C=nr.prototype=new w,C.constructor=nr,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new nr(this.a.slice())});function rr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}C=rr.prototype=new w,C.constructor=rr,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new rr(this.a.slice())});function E(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}C=E.prototype=new w,C.constructor=E,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new E(this.a.slice())});function ir(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=An}else this.a=e}C=ir.prototype=new w,C.constructor=ir,C.a1=(function(e,t,n,r){Vn(this.a,e,t.a,n,r)}),C.Y=(function(){return new ir(this.a.slice())});function ar(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}C=ar.prototype=new w,C.constructor=ar,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new ar(this.a.slice())});function or(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}C=or.prototype=new w,C.constructor=or,C.a1=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new or(this.a.slice())});function D(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}C=D.prototype,C.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new D().y(this,r,i)),this}),C.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),C.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),C.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new $n;n.constructor=t,n.a1=(function(e,t,n,r){Vn(this.a,e,t.a,n,r)}),n.Y=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===O});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),C.r=(function(){return this.A||=new D().a(this),this.A}),C.l=(function(){return this.L||=new Cl(this),this.L}),C.R=(function(e){return this===e||this.F(e)}),C.S=(function(){return this.P?this.P.l():null}),C.Q=(function(){return this.O?this.O.l():null});var O=new D;O.n={},O.E=`Ljava.lang.Object;`,O.F=(e=>!e.X),O.N=`java.lang.Object`,O.I=(e=>e!==null),O.A=new D().y(O,T,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Qn.prototype.$classData=O;var sr=new D().p(void 0,`V`,`void`,void 0,void 0);new D().p(!1,`Z`,`boolean`,er,void 0);var cr=new D().p(0,`C`,`char`,tr,Uint16Array);new D().p(0,`B`,`byte`,nr,Int8Array),new D().p(0,`S`,`short`,rr,Int16Array),new D().p(0,`I`,`int`,E,Int32Array);var lr=new D().p(null,`J`,`long`,ir,void 0);new D().p(0,`F`,`float`,ar,Float32Array),new D().p(0,`D`,`double`,or,Float64Array);function ur(e){return Mn(e).cz()+`@`+Wn(e)}function dr(e){var t=e.cI;return t===void 0?ur(e):t}function fr(){mr=this,hr().gY(new K((e=>void 0)),Io().dN,!0)}C=fr.prototype=new w,C.constructor=fr;function pr(){}pr.prototype=C,C.gY=(function(e,t,n){return new ou(e,n,t,this)}),new D().i(fr,`com.raquo.airstream.core.Observer$`,{b7:1});var mr;function hr(){return mr||=new fr,mr}function gr(e){this.bS=null,this.cJ=null,this.bT=0,this.bS=e,this.cJ=void 0;var t=Ir().bo();this.bT=t===void 0?1:1+t.bT|0,Sr().br===-1||this.bT>Sr().br?Jc().bp(new $d(this,Sr().br)):Dr().Q?Dr().ao.push(this)|0:Ir().cs(this)}C=gr.prototype=new w,C.constructor=gr;function _r(){}_r.prototype=C;var vr=new D().i(gr,`com.raquo.airstream.core.Transaction`,{ba:1});function yr(){this.br=0,this.cK=null,xr=this,this.br=1e3,this.cK=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}C=yr.prototype=new w,C.constructor=yr;function br(){}br.prototype=C,C.en=(function(e){try{e.bS.f(e);var t=e.cJ;if(t!==void 0)for(;t.hu();)t.hk().hx(e)}catch(e){var n=e instanceof lc?e:new X(e);Jc().bp(n)}}),new D().i(yr,`com.raquo.airstream.core.Transaction$`,{bb:1});var xr;function Sr(){return xr||=new yr,xr}function Cr(e){e.bs.length|0?new gr(new K((t=>{for(;(e.bs.length|0)>0;){var n=e.bs.shift();try{n.f(t)}catch(e){var r=e instanceof lc?e:new X(e);Jc().bp(r)}}for(;(e.ao.length|0)>0;){var i=e.ao.shift();Ir().cs(i)}}))):(e.ao.length|0)>0&&new gr(new K((t=>{for(;(e.ao.length|0)>0;)Ir().cs(e.ao.shift())})))}function wr(){this.Q=!1,this.bs=null,this.ao=null,Er=this,this.Q=!1,this.bs=si().ai(L().l(new(F.r()).C([]))),this.ao=si().ai(L().l(new(vr.r()).C([])))}C=wr.prototype=new w,C.constructor=wr;function Tr(){}Tr.prototype=C,new D().i(wr,`com.raquo.airstream.core.Transaction$onStart$`,{bc:1});var Er;function Dr(){return Er||=new wr,Er}function Or(e,t){return e.ap.get(t)}function kr(e,t){e.bt.unshift(t)}function Ar(e){return e.bt.shift()}function jr(e,t,n){var r=Or(e,t),i=r===void 0,a=r===void 0?si().ai(L().l(new(vr.r()).C([]))):r;a.push(n),i&&e.ap.set(t,a)}function Mr(e,t){var n=Or(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ap.delete(t),i}}function Nr(){this.bt=null,this.ap=null,Fr=this,this.bt=si().ai(L().l(new(vr.r()).C([]))),this.ap=new Map}C=Nr.prototype=new w,C.constructor=Nr;function Pr(){}Pr.prototype=C,C.cs=(function(e){var t=this.bo();t===void 0?(kr(this,e),Sr().en(e),this.fz(e)):jr(this,t,e)}),C.fz=(function(e){for(var t=e;;){var n=this.bo(),r=t;if(!(n!==void 0&&I().K(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gw(t),t.bS=Sr().cK;var i=this.bo();if(I().K(i,void 0))if((this.ap.size|0)>0){var a=new zc(0);throw this.ap.forEach((e=>((t,n)=>{e.b9=e.b9+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.b9+` children for `+(this.ap.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Sr().en(i),t=i}}),C.gw=(function(e){for(var t=e;;){var n=Mr(this,t);if(I().K(n,void 0)){Ar(this);var r=this.bo();if(!I().K(r,void 0))t=r;else return}else{kr(this,n);return}}}),C.bo=(function(){return this.bt[0]}),new D().i(Nr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bd:1});var Fr;function Ir(){return Fr||=new Nr,Fr}function Lr(e,t){var n=e.a2.indexOf(t)|0;if(n!==-1)e.a2.splice(n,1),e.F.h()||t.eF();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Rr(e){for(;(e.bu.length|0)>0;)Lr(e,e.bu.shift())}function zr(e){this.cL=null,this.a2=null,this.aG=!1,this.bu=null,this.F=null,this.aH=0,this.cL=e,this.a2=si().ai(L().l(new(Ur.r()).C([]))),this.aG=!0,this.bu=si().ai(L().l(new(Ur.r()).C([]))),this.F=J(),this.aH=0}C=zr.prototype=new w,C.constructor=zr;function Br(){}Br.prototype=C,C.e6=(function(){if(this.F.h()){var e=Dr(),t=(()=>{var e=new gs(this.cL);this.F=new Y(e),this.aG=!1,this.aH=0;for(var t=0,n=this.a2.length|0;t<n;){var r=t+this.aH|0;this.a2[r].eE(e),t=1+t|0}Rr(this),this.aG=!0,this.aH=0});if(Dr(),e.Q)t();else{e.Q=!0;try{t()}finally{e.Q=!1,Cr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),C.ft=(function(){if(this.F.h())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aG=!1;for(var e=this.a2,t=0,n=e.length|0;t<n;)e[t].eF(),t=1+t|0;Rr(this);var r=this.F;r.h()||r.x().g7(),Rr(this),this.aG=!0,this.F=J()}),C.fc=(function(e,t){t?(this.aH=1+this.aH|0,this.a2.unshift(e)):this.a2.push(e);var n=this.F;if(!n.h()){var r=n.x();e.eE(r)}}),C.gB=(function(e){this.aG?Lr(this,e):this.bu.push(e)}),new D().i(zr,`com.raquo.airstream.ownership.DynamicOwner`,{be:1});function Vr(e,t,n){this.bv=null,this.cM=null,this.bw=null,this.bv=e,this.cM=t,this.bw=J(),e.fc(this,n)}C=Vr.prototype=new w,C.constructor=Vr;function Hr(){}Hr.prototype=C,C.bP=(function(){this.bv.gB(this)}),C.eE=(function(e){var t=Dr(),n=(()=>{this.bw=this.cM.f(e)});if(Dr(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Cr(t)}}}),C.eF=(function(){var e=this.bw;e.h()||(e.x().bP(),this.bw=J())});var Ur=new D().i(Vr,`com.raquo.airstream.ownership.DynamicSubscription`,{bf:1});function Wr(){}C=Wr.prototype=new w,C.constructor=Wr;function Gr(){}Gr.prototype=C,C.gW=(function(e,t,n){return new Vr(e,new K((e=>new Y(t.f(e)))),n)}),C.gO=(function(e,t,n){return new Vr(e,new K((e=>(t.f(e),J()))),n)}),new D().i(Wr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bg:1});var Kr;function qr(){return Kr||=new Wr,Kr}function Jr(e){e.aI=si().ai(L().l(new(ti.r()).C([])))}function Yr(e){for(var t=e.aI,n=0,r=t.length|0;n<r;)Qr(t[n]),n=1+n|0;e.aI.length=0}function Xr(e,t){var n=e.aI.indexOf(t)|0;if(n!==-1)e.aI.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function Zr(e,t){e.aI.push(t)}function Qr(e){if(!e.bV)e.cO.aC(),e.bV=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function $r(e,t){this.cP=null,this.cO=null,this.bV=!1,this.cP=e,this.cO=t,this.bV=!1,e.gv(this)}C=$r.prototype=new w,C.constructor=$r;function ei(){}ei.prototype=C,C.bP=(function(){Qr(this),Xr(this.cP,this)});var ti=new D().i($r,`com.raquo.airstream.ownership.Subscription`,{bj:1});function ni(e,t){this.cQ=null,this.cR=null,this.a3=null,this.aq=!1,this.cQ=e,this.cR=t,this.a3=J(),this.aq=!1}C=ni.prototype=new w,C.constructor=ni;function ri(){}ri.prototype=C,C.g4=(function(){var e=this.a3;return!e.h()&&!e.x().bv.F.h()}),C.gG=(function(e){if(this.aq)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a3;if(t.h())var n=!1;else var n=e===t.x().bv;if(!n){this.g4()&&!e.F.h()&&(this.aq=!0);var r=this.a3;r.h()||(r.x().bP(),this.a3=J()),this.a3=new Y(qr().gW(e,new K((e=>(this.aq||this.cQ.aC(),new $r(e,new Lu((()=>{this.aq||this.cR.aC()})))))),!1)),this.aq=!1}}),C.fn=(function(){if(this.aq)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a3;e.h()||e.x().bP(),this.a3=J()}),new D().i(ni,`com.raquo.airstream.ownership.TransferableSubscription`,{bk:1});function ii(){}C=ii.prototype=new w,C.constructor=ii;function ai(){}ai.prototype=C,C.ai=(function(e){return[...ls().gU(e)]}),new D().i(ii,`com.raquo.ew.JsArray$`,{bl:1});var oi;function si(){return oi||=new ii,oi}function ci(){}C=ci.prototype=new w,C.constructor=ci;function li(){}li.prototype=C,C.fL=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new D().i(ci,`com.raquo.ew.JsArray$RichJsArray$`,{bm:1});var ui;function di(){return ui||=new ci,ui}function fi(){this.cS=null,mi=this,document.createElement(`template`),this.fr(G().y.gP().gQ()),this.cS=RegExp(` `,`g`)}C=fi.prototype=new w,C.constructor=fi;function pi(){}pi.prototype=C,C.ff=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof lc?e:new X(e);if(n instanceof X&&n.S instanceof DOMException)return!1;throw n instanceof X?n.S:n}}),C.g5=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(I().K(t,r))return!0;n=r}}),C.fq=(function(e){return document.createElement(e.cB())}),C.fS=(function(e,t){var n=this.fT(e,t);return n===void 0?void 0:t.aW.bL(n)}),C.fT=(function(e,t){var n=e.a5.getAttributeNS(null,t.ar);return n===null?void 0:n}),C.eN=(function(e,t,n){this.gF(e,t,t.aW.bO(n))}),C.gF=(function(e,t,n){n===null?this.gA(e,t):e.a5.setAttribute(t.ar,n)}),C.gA=(function(e,t){e.a5.removeAttribute(t.ar)}),C.fr=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.df)}),C.fW=(function(e,t){var n=this.fX(e,t);return n===void 0?void 0:t.bZ.bL(n)}),C.fX=(function(e,t){var n=e.cD(),r=t.bA,i=n.getAttributeNS(r.h()?null:r.x(),t.c0);return i===null?void 0:i}),C.gH=(function(e,t,n){this.gI(e,t,t.bZ.bO(n))}),C.gI=(function(e,t,n){if(n===null)this.gC(e,t);else{var r=t.bA;if(r.h())e.cD().setAttribute(t.bz,n);else{var i=r.x();e.cD().setAttributeNS(i,t.bz,n)}}}),C.gC=(function(e,t){var n=e.cD(),r=t.bA;n.removeAttributeNS(r.h()?null:r.x(),t.c0)}),C.fs=(function(e){return document.createTextNode(e)}),C.fv=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Mm(this.fu(r),n);r=i,n=a}}),C.fu=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cS,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new D().i(fi,`com.raquo.laminar.DomApi$`,{bn:1});var mi;function hi(){return mi||=new fi,mi}function gi(e,t,n){this.bX=null,this.cT=null,this.bW=null,this.bX=e,this.cT=t,this.bW=n}C=gi.prototype=new w,C.constructor=gi;function _i(){}_i.prototype=C,C.aj=(function(e){this.bX===null?this.bW===null?Bo().fM(this.cT,e):di().fL(this.bW,Zl().fP(e)):this.bX.aj(e)}),new D().i(gi,`com.raquo.laminar.Seq`,{bo:1});function vi(){}C=vi.prototype=new w,C.constructor=vi;function yi(){}yi.prototype=C,new D().i(vi,`com.raquo.laminar.Seq$`,{bp:1});var bi;function xi(){return bi||=new vi,bi}function Si(e){hr(),Jc()}function Ci(e){e.eS=Zi()}function wi(e){Ti(e,new K((e=>{e.d3.a5.focus()})))}function Ti(e,t){return new js(new K((e=>{var n=new Lc(!e.aJ.F.h()),r=new K((e=>{n.bI?n.bI=!1:t.f(e)}));qr().gO(e.aJ,new K((e=>(t=>{r.f(new Ki(e,t))}))(e)),!1)})),Zi())}function Ei(){this.a4=null,this.d2=null,Oi=this,this.a4=new bs(ki()),new bs(ki()),new bs(ki()),this.d2=new vs}C=Ei.prototype=new w,C.constructor=Ei;function Di(){}Di.prototype=C,new D().i(Ei,`com.raquo.laminar.codecs.package$`,{bx:1});var Oi;function ki(){return Oi||=new Ei,Oi}function Ai(e){e.eT=ji(e,`class`,` `)}function ji(e,t,n){var r=ws(new Ts,t,ki().a4);return new Ss(r.ar,new K((e=>{var t=hi().fS(e,r);return t===void 0?``:t})),new Bu(((e,t)=>{hi().eN(e,r,t)})),n)}function Mi(e){e.eR=Ni(e,`class`,` `)}function Ni(e,t,n){var r=new Ds(t,ki().a4,J());return new Ss(r.bz,new K((e=>{var t=hi().fW(e,r);return t===void 0?``:t})),new Bu(((e,t)=>{hi().gH(e,r,t)})),n)}function Pi(e){this.bx=null,this.bx=e}C=Pi.prototype=new w,C.constructor=Pi;function Fi(){}Fi.prototype=C,C.eG=(function(e,t){try{this.bx.cu(e,t)}catch(e){var n=e instanceof lc?e:new X(e);Jc().bp(n)}}),C.fo=(function(e){return new Pi(new Bu(((t,n)=>{this.bx.cu(t,n),e.bx.cu(t,n)})))}),C.fg=(function(e){return e===void 0?this:e.fo(this)}),new D().i(Pi,`com.raquo.laminar.inserters.InserterHooks`,{bL:1});function Ii(){}C=Ii.prototype=new w,C.constructor=Ii;function Li(){}Li.prototype=C,C.eD=(function(e,t){return new Wu(e,void 0)}),new D().i(Ii,`com.raquo.laminar.inserters.StaticChildInserter$`,{bN:1});var Ri;function zi(){return Ri||=new Ii,Ri}function Bi(){}C=Bi.prototype=new w,C.constructor=Bi;function Vi(){}Vi.prototype=C;function Hi(){this.eU=null,this.eV=null,this.eW=null,this.eX=null,this.eU=`http://www.w3.org/2000/svg`,this.eV=`http://www.w3.org/1999/xlink`,this.eW=`http://www.w3.org/XML/1998/namespace`,this.eX=`http://www.w3.org/2000/xmlns/`}C=Hi.prototype=new w,C.constructor=Hi;function Ui(){}Ui.prototype=C,C.gf=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new vd(e)}}),new D().i(Hi,`com.raquo.laminar.keys.SvgAttr$`,{bR:1});var Wi;function Gi(){return Wi||=new Hi,Wi}function Ki(e,t){this.d3=null,this.d3=e}C=Ki.prototype=new w,C.constructor=Ki;function qi(){}qi.prototype=C,new D().i(Ki,`com.raquo.laminar.lifecycle.MountContext`,{bS:1});var k=new D().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Ji(){this.eY=null,Xi=this,this.eY=new ks}C=Ji.prototype=new w,C.constructor=Ji;function Yi(){}Yi.prototype=C,new D().i(Ji,`com.raquo.laminar.modifiers.Modifier$`,{bU:1});var Xi;function Zi(){return Xi||=new Ji,Xi}function Qi(){this.c1=null,ea=this,this.c1=new Ns}C=Qi.prototype=new w,C.constructor=Qi;function $i(){}$i.prototype=C,new D().i(Qi,`com.raquo.laminar.modifiers.RenderableNode$`,{bY:1});var ea;function ta(){return ea||=new Qi,ea}function na(){this.G=null,ia=this,this.G=new zs(new K((e=>e)),A()),new zs(new K((e=>``+(e|0))),A()),new zs(new K((e=>``+ +e)),A()),new zs(new K((e=>``+!!e)),A()),new zs(new K((e=>e.gT())),A())}C=na.prototype=new w,C.constructor=na;function ra(){}ra.prototype=C,new D().i(na,`com.raquo.laminar.modifiers.RenderableText$`,{c3:1});var ia;function A(){return ia||=new na,ia}function aa(){}C=aa.prototype=new w,C.constructor=aa;function oa(){}oa.prototype=C,C.bJ=(function(e,t,n){var r=new Y(e);t.eQ(r),n!==void 0&&n.eG(e,t);var i=hi().ff(e.aD(),t.aD());return i&&t.eO(r),i}),new D().i(aa,`com.raquo.laminar.nodes.ParentNode$`,{c6:1});var sa;function ca(){return sa||=new aa,sa}function la(e){this.dc=null,this.dc=new Pi(new Bu(((t,n)=>{matchResult1:{var r=n.aD();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Jc(),a=r.textContent,o=t.aD().tagName;i.bp(V(new H,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}C=la.prototype=new w,C.constructor=la;function ua(){}ua.prototype=C,C.e9=(function(e){return e.eC(new K((e=>e.gX(this.dc))))}),new D().i(la,`com.raquo.laminar.nodes.Slot`,{ca:1});function da(){pa=this,si().ai(L().gZ(new E(new Int32Array([0]))))}C=da.prototype=new w,C.constructor=da;function fa(){}fa.prototype=C,C.f9=(function(){return new K((e=>void 0))}),new D().i(da,`com.raquo.laminar.tags.CustomHtmlTag$`,{cd:1});var pa;function ma(){return pa||=new da,pa}function ha(){}C=ha.prototype=new w,C.constructor=ha;function ga(){}ga.prototype=C,C.fd=(function(){va().fF(),va().fG(),va().fH(),va().fI()}),C.fF=(function(){var e=document.querySelector(`#example1`);Dc().bK(e).h()||(G(),new Qc(e,ll().C(L().l(new(F.r()).C([new W((e=>e.cA().v(`Interests`))),new W((e=>e.g0().v(`Choose as many as you like.`)))])),L().l(new(k.r()).C([al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`interests`))),new W((e=>e.cF().v(`design`)))])),L().l(new(k.r()).C([B(G().y,`Design`,A().G)]))),al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`interests`))),new W((e=>e.cF().v(`development`)))])),L().l(new(k.r()).C([B(G().y,`Development`,A().G)]))),al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`interests`))),new W((e=>e.cF().v(`writing`)))])),L().l(new(k.r()).C([B(G().y,`Writing`,A().G)])))])))))}),C.fG=(function(){var e=document.querySelector(`#example2`);Dc().bK(e).h()||(G(),new Qc(e,ll().C(L().l(new(F.r()).C([new W((e=>e.cA().v(`Days`))),new W((e=>e.gt().g2()))])),L().l(new(k.r()).C([al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`monday`)))])),L().l(new(k.r()).C([B(G().y,`Monday`,A().G)]))),al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`wednesday`)))])),L().l(new(k.r()).C([B(G().y,`Wednesday`,A().G)]))),al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`friday`)))])),L().l(new(k.r()).C([B(G().y,`Friday`,A().G)])))])))))}),C.fH=(function(){var e=document.querySelector(`#example3`);Dc().bK(e).h()||(G(),new Qc(e,ll().C(L().l(new(F.r()).C([new W((e=>e.cA().v(`Notifications`))),new W((e=>e.gL().g8()))])),L().l(new(k.r()).C([xl().C(L().l(new(F.r()).C([new W((e=>e.W().v(`email`)))])),L().l(new(k.r()).C([B(G().y,`Email`,A().G)]))),xl().C(L().l(new(F.r()).C([new W((e=>e.W().v(`push`)))])),L().l(new(k.r()).C([B(G().y,`Push notifications`,A().G)])))])))))}),C.fI=(function(){var e=document.querySelector(`#example4`);Dc().bK(e).h()||(G(),new Qc(e,ll().C(L().l(new(F.r()).C([new W((e=>Yc(G().y,Ca().g9().e9(L().l(new(Ku.r()).C([(G(),zi().eD(G().y.gN().cv(L().l(new(k.r()).C([B(G().y,`Available features`,A().G)]))),ta().c1))]))),pc().cb,Rs()))),new W((e=>Yc(G().y,Ca().g1().e9(L().l(new(Ku.r()).C([(G(),zi().eD(G().y.gM().cv(L().l(new(k.r()).C([B(G().y,`Some features require an upgraded plan.`,A().G)]))),ta().c1))]))),pc().cb,Rs())))])),L().l(new(k.r()).C([al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`search`)))])),L().l(new(k.r()).C([B(G().y,`Search`,A().G)]))),al().C(L().l(new(F.r()).C([new W((e=>e.W().v(`export`))),new W((e=>e.fx().v(!0)))])),L().l(new(k.r()).C([B(G().y,`Export`,A().G)])))])))))}),new D().i(ha,`examples.checkboxGroup.Main$package$`,{cf:1});var _a;function va(){return _a||=new ha,_a}function ya(e){try{va().fd()}catch(e){throw e}}function ba(){this.dx=null,this.dy=!1,this.dv=null,this.dw=!1}C=ba.prototype=new w,C.constructor=ba;function xa(){}xa.prototype=C,C.g9=(function(){return this.dy||=(this.dx=new la(`label`),!0),this.dx}),C.g1=(function(){return this.dw||=(this.dv=new la(`hint`),!0),this.dv}),new D().i(ba,`io.github.nguyenyou.webawesome.laminar.CheckboxGroup$slots$`,{ci:1});var Sa;function Ca(){return Sa||=new ba,Sa}function wa(){this.f0=!1,this.b0=null,this.bC=null,this.dF=null,this.c7=!1,this.eZ=0,this.f2=0,this.f1=null,Ea=this,this.f0=!0,this.b0=new ArrayBuffer(8),this.bC=new Int32Array(this.b0,0,2),new Float32Array(this.b0,0,2),this.dF=new Float64Array(this.b0,0,1),this.bC[0]=16909060,this.c7=(new Int8Array(this.b0,0,8)[0]|0)==1,this.eZ=this.c7?0:1,this.f2=this.c7?1:0,this.f1=null}C=wa.prototype=new w,C.constructor=wa;function Ta(){}Ta.prototype=C,C.cC=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dF[0]=e,(this.bC[0]|0)^(this.bC[1]|0))}),new D().i(wa,`java.lang.FloatingPointBits$`,{cu:1});var Ea;function Da(){return Ea||=new wa,Ea}function Oa(e,t){for(var n=j().X(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ka(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new tc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new tc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(rc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function ka(e,t){var n=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().X(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().X(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Aa(e,c[1]),La(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Aa(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Aa(e,d[1]),`<clinit>`]}function Aa(e,t){var n=Ma(e);if(lo().dL.call(n,t))var r=Ma(e)[t];else var r=Ja(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ja(e){if(!((1&e.M)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c9=t,e.M=(1|e.M)<<24>>24}return e.c9}function Ma(e){return(1&e.M)<<24>>24?e.c9:ja(e)}function Na(e){if(!((2&e.M)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.ca=t,e.M=(2|e.M)<<24>>24}return e.ca}function Pa(e){return(2&e.M)<<24>>24?e.ca:Na(e)}function Fa(e){return(4&e.M)<<24>>24||(e.c8=Object.keys(Pa(e)),e.M=(4|e.M)<<24>>24),e.c8}function Ia(e){return(4&e.M)<<24>>24?e.c8:Fa(e)}function La(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ra(e,t){return t?t.arguments&&t.stack?za(e,t):t.stack&&t.sourceURL?Ha(e,t):t.stack&&t.number?Va(e,t):t.stack&&t.fileName?Ba(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ua(e,t):Wa(e,t):Ua(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ga(e,t):Ka(e,t):t.stack&&!t.fileName?za(e,t):qa(e,t):[]}function za(e,t){return(t.stack+`
`).replace(j().X(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().D(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().D(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().D(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().D(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ba(e,t){return t.stack.replace(j().D(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().D(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Va(e,t){return t.stack.replace(j().D(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().D(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().D(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Ha(e,t){return t.stack.replace(j().D(`\\[native code\\]\\n`,`m`),``).replace(j().D(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().D(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ua(e,t){for(var n=j().D(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Wa(e,t){for(var n=j().D(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ga(e,t){for(var n=j().X(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Ka(e,t){for(var n=j().X(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().X(`<anonymous function: (\\S+)>`),`$1`).replace(j().X(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function qa(e,t){return[]}function Ja(e,t,n){for(;;)if(t<(Ia(e).length|0)){var r=Ia(e)[t];if(n.startsWith(r))return``+Pa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ya(){this.c9=null,this.ca=null,this.c8=null,this.M=0}C=Ya.prototype=new w,C.constructor=Ya;function Xa(){}Xa.prototype=C,C.fJ=(function(e){return Oa(this,Ra(this,e))}),new D().i(Ya,`java.lang.StackTrace$`,{cB:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(){}C=$a.prototype=new w,C.constructor=$a;function eo(){}eo.prototype=C,C.X=(function(e){return new RegExp(e)}),C.D=(function(e,t){return new RegExp(e,t)}),new D().i($a,`java.lang.StackTrace$StringRE$`,{cC:1});var to;function j(){return to||=new $a,to}function no(){this.dH=null,this.f3=null,io=this,this.dH=new op(!1),this.f3=new op(!0)}C=no.prototype=new w,C.constructor=no;function ro(){}ro.prototype=C,new D().i(no,`java.lang.System$Streams$`,{cH:1});var io;function ao(){return io||=new no,io}function oo(){this.dL=null,co=this,this.dL=Object.prototype.hasOwnProperty}C=oo.prototype=new w,C.constructor=oo;function so(){}so.prototype=C,new D().i(oo,`java.lang.Utils$Cache$`,{cJ:1});var co;function lo(){return co||=new oo,co}function uo(e,t){return e===t}function fo(e){return 0}function po(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ao)}var mo=new D().i(0,`java.lang.Void`,{ao:1},(e=>e===void 0));function ho(e,t){throw new rd(`argument type mismatch`)}function go(){}C=go.prototype=new w,C.constructor=go;function _o(){}_o.prototype=C,C.aR=(function(e){return e instanceof T||e instanceof er||e instanceof tr||e instanceof nr||e instanceof rr||e instanceof E||e instanceof ir||e instanceof ar||e instanceof or?e.a.length:ho(this,e)}),new D().i(go,`java.lang.reflect.Array$`,{cK:1});var vo;function yo(){return vo||=new go,vo}function bo(){}C=bo.prototype=new w,C.constructor=bo;function xo(){}xo.prototype=C,C.eu=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),C.et=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.ev=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.eq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.ep=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.ew=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.er=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),C.es=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new D().i(bo,`java.util.Arrays$`,{cL:1});var So;function M(){return So||=new bo,So}function N(e,t){this.c=0,this.d=0,this.c=e,this.d=t}C=N.prototype=new w,C.constructor=N;function Co(){}Co.prototype=C,C.i=(function(e){return e instanceof N&&this.c===e.c&&this.d===e.d}),C.o=(function(){return this.c^this.d}),C.s=(function(){return P().eK(this.c,this.d)}),C.hA=(function(){return this.c}),C.hz=(function(){return P().eJ(this.c,this.d)}),C.hy=(function(){return P().bn(this.c,this.d)}),C.hh=(function(){return this.c<<24>>24}),C.hw=(function(){return this.c<<16>>16}),C.hr=(function(){return this.c}),C.hs=(function(){return this}),C.hn=(function(){return P().eJ(this.c,this.d)}),C.hl=(function(){return P().bn(this.c,this.d)}),C.hj=(function(e){return P().eH(this.c,this.d,e.c,e.d)}),C.hi=(function(e){return P().eH(this.c,this.d,e.c,e.d)}),C.hm=(function(e){return this.c===e.c&&this.d===e.d}),C.hv=(function(e){return!(this.c===e.c&&this.d===e.d)}),C.h9=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),C.ha=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),C.h5=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),C.h6=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),C.hC=(function(){return new N(~this.c,~this.d)}),C.h3=(function(e){return new N(this.c|e.c,this.d|e.d)}),C.h2=(function(e){return new N(this.c&e.c,this.d&e.d)}),C.hg=(function(e){return new N(this.c^e.c,this.d^e.d)}),C.hb=(function(e){var t=this.c;return new N(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),C.h8=(function(e){var t=this.d;return new N(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),C.h7=(function(e){var t=this.d;return new N(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),C.hB=(function(){var e=this.c,t=this.d;return new N(-e|0,e===0?-t|0:~t)}),C.he=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new N(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),C.hc=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new N(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),C.hf=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new N(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),C.h4=(function(e){var t=P();return new N(t.fy(this.c,this.d,e.c,e.d),t.q)}),C.hd=(function(e){var t=P();return new N(t.gz(this.c,this.d,e.c,e.d),t.q)}),new D().i(N,`org.scalajs.linker.runtime.RuntimeLong`,{ap:1});function wo(e,t,n){return-2097152&n?Do(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function To(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.q=0,n>>>o|0}else return Do(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.q=s/4294967296|0,s|0}}function Eo(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.q=n&(-1+i|0),t):Do(e,t,n,r,i,1)|0;if(-2097152&i)return e.q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.q=a/4294967296|0,a|0}function Do(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.q=ee,m;if(a===1)return e.q=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function Oo(){this.q=0}C=Oo.prototype=new w,C.constructor=Oo;function ko(){}ko.prototype=C,C.eK=(function(e,t){return t===e>>31?``+e:t<0?`-`+wo(this,-e|0,e===0?-t|0:~t):wo(this,e,t)}),C.bn=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),C.eJ=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),C.hp=(function(e){return new N(e,e>>31)}),C.ho=(function(e){return new N(this.eI(e),this.q)}),C.eI=(function(e){if(e<-0x8000000000000000)return this.q=-2147483648,0;if(e>=0x8000000000000000)return this.q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.q=e<0&&t!==0?-1+n|0:n,t}),C.eH=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),C.fy=(function(e,t,n,r){if((n|r)===0)throw new td(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.q=0,-2147483648;var i=Ln(e,n);return this.q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=-1,-1;else return this.q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=To(this,a,o,s,c);if((t^r)>=0)return l;var u=this.q;return this.q=l===0?-u|0:~u,-l|0}}),C.gz=(function(e,t,n,r){if((n|r)===0)throw new td(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Rn(e,n);return this.q=i>>31,i}else return this.q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=0,0;else return this.q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Eo(this,a,o,s,c);if(t<0){var u=this.q;return this.q=l===0?-u|0:~u,-l|0}else return l}}),new D().i(Oo,`org.scalajs.linker.runtime.RuntimeLong$`,{cN:1});var Ao;function P(){return Ao||=new Oo,Ao}var F=new D().i(1,`scala.Function1`,{e:1});function jo(){}C=jo.prototype=new w,C.constructor=jo;function Mo(){}Mo.prototype=C;function No(){this.dO=null,this.dN=null,Fo=this,this.dO=new W((e=>Io().dO)),this.dN=new Ou}C=No.prototype=new w,C.constructor=No;function Po(){}Po.prototype=C,new D().i(No,`scala.PartialFunction$`,{d1:1});var Fo;function Io(){return Fo||=new No,Fo}function Lo(){this.dR=null,zo=this,this.dR=new W((e=>Bo().dR))}C=Lo.prototype=new w,C.constructor=Lo;function Ro(){}Ro.prototype=C,C.fM=(function(e,t){var n=yo().aR(e),r=0;if(e instanceof T)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof E)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof or)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof tr)for(;r<n;)t.f(Yn(e.a[r])),r=1+r|0;else if(e instanceof nr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof rr)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof er)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new vd(e)}),new D().i(Lo,`scala.collection.ArrayOps$`,{d7:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(e,t){for(var n=e.m();n.r();)t.f(n.g())}function Ho(e,t,n,r){return e.z()===0?``+t+r:e.bb(zm(new Bm),t,n,r).J.p}function Uo(e,t,n,r,i){var a=t.J;n.length!==0&&(a.p=``+a.p+n);var o=e.m();if(o.r()){var s=o.g();for(a.p=``+a.p+s;o.r();){a.p=``+a.p+r;var c=o.g();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function Wo(e,t){this.dV=null,this.b6=null,this.dV=e,this.b6=t}C=Wo.prototype=new w,C.constructor=Wo;function Go(){}Go.prototype=C,C.fZ=(function(){return this.dV.aC().m()}),new D().i(Wo,`scala.collection.Iterator$ConcatIteratorCell`,{dq:1});function Ko(){}C=Ko.prototype=new w,C.constructor=Ko;function qo(){}qo.prototype=C,C.K=(function(e,t){return e===t||(ec(e)?this.fE(e,t):e instanceof jn?this.fC(e,t):e===null?t===null:Pn(e,t))}),C.fE=(function(e,t){if(ec(t))return this.fD(e,t);if(t instanceof jn){if(typeof e==`number`)return+e===t.c;if(e instanceof N){var n=Zn(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Pn(e,t)}else return e===null?t===null:Pn(e,t)}),C.fD=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof N){var r=Zn(t);return n===P().bn(r.c,r.d)}else return!1}else if(e instanceof N){var i=Zn(e),a=i.c,o=i.d;if(t instanceof N){var s=Zn(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return P().bn(a,o)===u}else return!1}else return e===null?t===null:Pn(e,t)}),C.fC=(function(e,t){if(t instanceof jn)return e.c===t.c;if(ec(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof N){var n=Zn(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Pn(t,e)}else return e===null&&t===null}),new D().i(Ko,`scala.runtime.BoxesRunTime$`,{e1:1});var Jo;function I(){return Jo||=new Ko,Jo}var Yo=new D().i(0,`scala.runtime.Null$`,{e4:1});function Xo(){}C=Xo.prototype=new w,C.constructor=Xo;function Zo(){}Zo.prototype=C,C.aP=(function(e,t){if(e instanceof T||e instanceof E||e instanceof or||e instanceof ir||e instanceof ar)return e.a[t];if(e instanceof tr)return Yn(e.a[t]);if(e instanceof nr||e instanceof rr||e instanceof er)return e.a[t];throw e===null?new cd:new vd(e)}),C.fj=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof E)e.a[t]=n|0;else if(e instanceof or)e.a[t]=+n;else if(e instanceof ir)e.a[t]=Zn(n);else if(e instanceof ar)e.a[t]=Math.fround(n);else if(e instanceof tr)e.a[t]=Xn(n);else if(e instanceof nr)e.a[t]=n|0;else if(e instanceof rr)e.a[t]=n|0;else if(e instanceof er)e.a[t]=!!n;else if(e===null)throw new cd;else throw new vd(e)}),C.fa=(function(e){return Ho(e.aU(),e.am()+`(`,`,`,`)`)}),C.l=(function(e){return e===null?null:e.a.length===0?Df(jf()):new nm(e)}),C.gZ=(function(e){return e===null?null:new Qp(e)}),new D().i(Xo,`scala.runtime.ScalaRunTime$`,{e5:1});var Qo;function L(){return Qo||=new Xo,Qo}function $o(){}C=$o.prototype=new w,C.constructor=$o;function es(){}es.prototype=C,C.b=(function(e,t){var n=this.bQ(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.bQ=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.k=(function(e,t){return this.fl(e^t)}),C.fl=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.aT=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),C.U=(function(e){var t=zn(e);if(t===e)return t;var n=P(),r=n.eI(e),i=n.q;return P().bn(r,i)===e?r^i:Da().cC(e)}),C.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof N){var t=Zn(e);return this.aT(new N(t.c,t.d))}else return Fn(e)}),C.bm=(function(e){throw id(new ad,``+e)}),new D().i($o,`scala.runtime.Statics$`,{e7:1});var ts;function R(){return ts||=new $o,ts}function ns(){}C=ns.prototype=new w,C.constructor=ns;function rs(){}rs.prototype=C,C.gJ=(function(e,t){return setTimeout((()=>{t.aC()}),e)}),new D().i(ns,`scala.scalajs.js.timers.package$`,{ed:1});var is;function as(){return is||=new ns,is}function os(){}C=os.prototype=new w,C.constructor=os;function ss(){}ss.prototype=C,C.gU=(function(e){var t=[];return e.aj(new W((e=>t.push(e)|0))),t}),new D().i(os,`scala.scalajs.runtime.Compat$`,{em:1});var cs;function ls(){return cs||=new os,cs}function us(){}C=us.prototype=new w,C.constructor=us;function ds(){}ds.prototype=C,C.gK=(function(e){var t=`Illegal command line`+(e.eB()===0?``:e.eB()===1?` after first argument`:` after `+e.eB()+` arguments`)+`: `+e.ht();xc().gu().g6(t+`
`)}),new D().i(us,`scala.util.CommandLineParser$`,{eo:1});function fs(e){this.cq=null,this.cq=e}C=fs.prototype=new w,C.constructor=fs;function ps(){}ps.prototype=C,C.s=(function(){return`DynamicVariable(`+this.cq+`)`}),new D().i(fs,`scala.util.DynamicVariable`,{eq:1});function ms(){}C=ms.prototype=new w,C.constructor=ms;function hs(){}hs.prototype=C,C.b=(function(e,t){var n=this.bQ(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.bQ=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.k=(function(e,t){return this.E(e^t)}),C.E=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.eL=(function(e,t,n){var r=e.ak();if(r===0)return q(e.am());var i=t;n||(i=this.b(i,q(e.am())));for(var a=0;a<r;)i=this.b(i,R().w(e.al(a))),a=1+a|0;return this.k(i,r)}),C.gV=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.r();){var s=o.g(),c=R().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bQ(l,a),this.k(l,i)}),C.gs=(function(e,t){var n=e.m(),r=t;if(!n.r())return this.k(r,0);var i=n.g();if(!n.r())return this.k(this.b(r,R().w(i)),1);var a=n.g(),o=R().w(i);r=this.b(r,o);for(var s=r,c=R().w(a),l=c-o|0,u=2;n.r();){r=this.b(r,c);var d=R().w(n.g());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.r();)r=this.b(r,R().w(n.g())),u=1+u|0;return this.k(r,u)}c=d,u=1+u|0}return this.E(this.b(this.b(s,l),c))}),C.eb=(function(e,t){var n=t,r=yo().aR(e);switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,R().w(L().aP(e,0))),1);default:var i=R().w(L().aP(e,0));n=this.b(n,i);for(var a=n,o=R().w(L().aP(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=R().w(L().aP(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,R().w(L().aP(e,c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.gx=(function(e,t,n,r){return this.E(this.b(this.b(this.b(r,e),t),n))}),C.g3=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,R().w(e.n(0))),1);default:var i=R().w(e.n(0));n=this.b(n,i);for(var a=n,o=R().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=R().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,R().w(e.n(c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ga=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.h();){var l=c.V(),u=c.L(),d=R().w(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gx(s,a,o,t):this.k(r,n)}),C.ek=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ec=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ed=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ee=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,R().U(e.a[0])),1);default:var i=R().U(e.a[0]);n=this.b(n,i);for(var a=n,o=R().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=R().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,R().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ef=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,R().U(e.a[0])),1);default:var i=R().U(e.a[0]);n=this.b(n,i);for(var a=n,o=R().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=R().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,R().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.eg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.eh=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:var i=n,a=e.a[0];return this.k(this.b(i,R().aT(new N(a.c,a.d))),1);default:var o=e.a[0],s=R().aT(new N(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=R().aT(new N(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=R().aT(new N(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,R().aT(new N(te.c,te.d))),f=1+f|0}return this.k(n,r)}u=m,f=1+f|0}return this.E(this.b(this.b(c,d),u))}}),C.ei=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),C.ej=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.k(n,r)}a=0,s=1+s|0}return this.E(this.b(this.b(i,o),a))}});function gs(e){this.aI=null,this.cN=null,this.bU=!1,this.cN=e,Jr(this),this.bU=!1}C=gs.prototype=new w,C.constructor=gs;function _s(){}_s.prototype=C,C.gv=(function(e){this.bU?(Qr(e),this.cN.aC()):Zr(this,e)}),C.g7=(function(){Yr(this),this.bU=!0}),new D().i(gs,`com.raquo.airstream.ownership.OneTimeOwner`,{bh:1,bi:1});function vs(){}C=vs.prototype=new w,C.constructor=vs;function ys(){}ys.prototype=C,C.fw=(function(e){return e!==null}),C.fB=(function(e){return e?``:null}),C.bL=(function(e){return this.fw(e)}),C.bO=(function(e){return this.fB(!!e)}),new D().i(vs,`com.raquo.laminar.codecs.package$$anon$1`,{by:1,Y:1});function bs(e){if(e===null)throw new cd}C=bs.prototype=new w,C.constructor=bs;function xs(){}xs.prototype=C,C.bO=(function(e){return e}),C.bL=(function(e){return e}),new D().i(bs,`com.raquo.laminar.codecs.package$$anon$2`,{bz:1,Y:1});function Ss(e,t,n,r){}C=Ss.prototype=new Vi,C.constructor=Ss;function Cs(){}Cs.prototype=C,new D().i(Ss,`com.raquo.laminar.keys.CompositeKey`,{bP:1,U:1});function ws(e,t,n){return e.ar=t,e.aW=n,e}function Ts(){this.ar=null,this.aW=null}C=Ts.prototype=new Vi,C.constructor=Ts;function Es(){}Es.prototype=C,C.v=(function(e){return new Xc(this,e,new Hu(((e,t,n)=>{hi().eN(e,t,n)})))}),new D().i(Ts,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,U:1});function Ds(e,t,n){this.c0=null,this.bZ=null,this.bz=null,this.bA=null,this.c0=e,this.bZ=t;var r=n.h()?J():new Y(n.x()+`:`+e);this.bz=r.h()?e:r.x(),this.bA=n.h()?J():new Y(Gi().gf(n.x()))}C=Ds.prototype=new Vi,C.constructor=Ds;function Os(){}Os.prototype=C,new D().i(Ds,`com.raquo.laminar.keys.SvgAttr`,{bQ:1,U:1});function ks(){}C=ks.prototype=new w,C.constructor=ks;function As(){}As.prototype=C,C.a0=(function(e){}),new D().i(ks,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bV:1,R:1});function js(e,t){if(this.d7=null,this.d7=e,t===null)throw new cd}C=js.prototype=new w,C.constructor=js;function Ms(){}Ms.prototype=C,C.a0=(function(e){var t=Dr(),n=(()=>{this.d7.f(e)});if(Dr(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,Cr(t)}}}),new D().i(js,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bW:1,R:1});function Ns(){}C=Ns.prototype=new w,C.constructor=Ns;function Ps(){}Ps.prototype=C,new D().i(Ns,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{bZ:1,bX:1});function Fs(){}C=Fs.prototype=new w,C.constructor=Fs;function Is(){}Is.prototype=C,new D().i(Fs,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{c1:1,c0:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(e,t){if(this.d8=null,this.d8=e,t===null)throw new cd}C=zs.prototype=new w,C.constructor=zs;function Bs(){}Bs.prototype=C,C.fk=(function(e){return this.d8.f(e)}),new D().i(zs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{c4:1,c2:1});function Vs(e){e.eo(new zr(new Lu((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Ho(hi().fv(e.aD(),(hi(),Lm())),``,` > `,``))}))))}function Hs(e,t,n){return e.c5=t,e}function Us(){this.c5=null}C=Us.prototype=new w,C.constructor=Us;function Ws(){}Ws.prototype=C,C.cB=(function(){return this.c5}),C.cv=(function(e){var t=this.fm();return e.aj(new K((e=>{e.a0(t)}))),t}),C.fm=(function(){return new ef(this,hi().fq(this))}),new D().i(Us,`com.raquo.laminar.tags.HtmlTag`,{ad:1,a1:1});function Gs(e,t){this.df=null,this.df=e}C=Gs.prototype=new w,C.constructor=Gs;function Ks(){}Ks.prototype=C,new D().i(Gs,`com.raquo.laminar.tags.SvgTag`,{ce:1,a1:1});function qs(){}C=qs.prototype=new w,C.constructor=qs;function Js(){}Js.prototype=C,C.bO=(function(e){return e}),C.bL=(function(e){return e}),new D().i(qs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cm:1,Y:1});function Ys(e,t){return e.aY=t,e.cr(),e}function Xs(){this.aY=null,this.aX=null,this.aZ=!1}C=Xs.prototype=new w,C.constructor=Xs;function Zs(){}Zs.prototype=C,C.gR=(function(){return this.aZ||=(this.aX=new el(this.aY,ma().f9(),(ma(),void 0)),!0),this.aX}),C.C=(function(e,t){var n=this.gR().cv(L().l(new(k.r()).C([])));return e.aj(new K((e=>{e.f(this).a0(n)}))),t.aj(new K((e=>{e.a0(n)}))),n});function Qs(){}C=Qs.prototype=new w,C.constructor=Qs;function $s(){}$s.prototype=C;function ec(e){return e instanceof Qs||typeof e==`number`||e instanceof N}function tc(e,t,n,r,i){this.aL=null,this.b2=null,this.aM=null,this.aN=0,this.aK=0,this.aL=e,this.b2=t,this.aM=n,this.aN=r,this.aK=i}C=tc.prototype=new w,C.constructor=tc;function nc(){}nc.prototype=C,C.i=(function(e){return e instanceof tc&&this.aM===e.aM&&this.aN===e.aN&&this.aK===e.aK&&this.aL===e.aL&&this.b2===e.b2}),C.s=(function(){var e=``;return this.aL!==`<jscode>`&&(e=``+e+this.aL+`.`),e=``+e+this.b2,this.aM===null?e+=`(Unknown Source)`:(e=e+`(`+this.aM,this.aN>=0&&(e=e+`:`+this.aN,this.aK>=0&&(e=e+`:`+this.aK)),e+=`)`),e}),C.o=(function(){return q(this.aL)^q(this.b2)^q(this.aM)^this.aN^this.aK});var rc=new D().i(tc,`java.lang.StackTraceElement`,{an:1,a:1});function ic(){}C=ic.prototype=new w,C.constructor=ic;function ac(){}ac.prototype=C,C.gg=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new pf;for(var i=``,a=t;a!==r;)i+=``+Bn(e.a[a]),a=1+a|0;return i}),new D().i(ic,`java.lang.String$`,{cE:1,a:1});var oc;function sc(){return oc||=new ic,oc}function cc(e,t,n,r,i){return e.dJ=t,e.dK=i,i&&e.fK(),e}var lc=class extends Error{constructor(){super(),this.dJ=null,this.dK=!1,this.dI=null,this.bD=null}bl(){return this.dJ}fK(){var e=this instanceof X?this.S:this;return this.dI=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}fV(){return this.bD===null&&(this.dK?this.bD=Qa().fJ(this.dI):this.bD=new(rc.r()).C(0)),this.bD}s(){var e=Nn(this),t=this.bl();return t===null?e:e+`: `+t}o(){return Qn.prototype.o.call(this)}i(e){return Qn.prototype.i.call(this,e)}get message(){var e=this.bl();return e===null?``:e}get name(){return Nn(this)}toString(){return this.s()}};function uc(){this.cb=null,fc=this,this.cb=new fd}C=uc.prototype=new w,C.constructor=uc;function dc(){}dc.prototype=C,new D().i(uc,`scala.$less$colon$less$`,{cQ:1,a:1});var fc;function pc(){return fc||=new uc,fc}function mc(){}C=mc.prototype=new w,C.constructor=mc;function hc(){}hc.prototype=C,C.ey=(function(e,t){var n=e.z();if(n>-1){for(var r=t.gh(n),i=e.m(),a=0;a<n;)L().fj(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.gD(),c=s===cr.l();o=[];for(var l=e.m();l.r();){var u=l.g(),d=c?Xn(u):u===null?s.an.z:u;o.push(d)}return(s===sr.l()?mo.l():s===Yo.l()||s===ql.l()?O.l():s).an.r().w(o)}}),C.ex=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!I().K(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new D().i(mc,`scala.Array$`,{cS:1,a:1});var gc;function _c(){return gc||=new mc,gc}function vc(){this.dM=null,bc=this,this.dM=new fs(ao().dH)}C=vc.prototype=new w,C.constructor=vc;function yc(){}yc.prototype=C,C.gu=(function(){return this.dM.cq}),new D().i(vc,`scala.Console$`,{cT:1,dN:1});var bc;function xc(){return bc||=new vc,bc}function Sc(){}C=Sc.prototype=new Mo,C.constructor=Sc;function Cc(){}Cc.prototype=C,C.h0=(function(e){return e===null?null:e.a.length===0?Ff().dW:new Em(e)});function wc(){}C=wc.prototype=new w,C.constructor=wc;function Tc(){}Tc.prototype=C,C.bK=(function(e){return e===null?J():new Y(e)}),new D().i(wc,`scala.Option$`,{d0:1,a:1});var Ec;function Dc(){return Ec||=new wc,Ec}function Oc(e,t){if(t===e)e.e7(Kd().ez(t));else for(var n=t.m();n.r();)e.ct(n.g());return e}function kc(){}C=kc.prototype=new w,C.constructor=kc;function Ac(){}Ac.prototype=C,C.s=(function(){return`<function0>`});function jc(){}C=jc.prototype=new w,C.constructor=jc;function Mc(){}Mc.prototype=C,C.s=(function(){return`<function1>`});function Nc(){}C=Nc.prototype=new w,C.constructor=Nc;function Pc(){}Pc.prototype=C,C.s=(function(){return`<function2>`});function Fc(){}C=Fc.prototype=new w,C.constructor=Fc;function Ic(){}Ic.prototype=C,C.s=(function(){return`<function3>`});function Lc(e){this.bI=!1,this.bI=e}C=Lc.prototype=new w,C.constructor=Lc;function Rc(){}Rc.prototype=C,C.s=(function(){return``+this.bI}),new D().i(Lc,`scala.runtime.BooleanRef`,{e0:1,a:1});function zc(e){this.b9=0,this.b9=e}C=zc.prototype=new w,C.constructor=zc;function Bc(){}Bc.prototype=C,C.s=(function(){return``+this.b9}),new D().i(zc,`scala.runtime.IntRef`,{e2:1,a:1});function Vc(){this.t=0,this.e5=0,this.f8=0,this.f7=0,Uc=this,this.t=q(`Seq`),this.e5=q(`Map`),this.f8=q(`Set`),this.f7=this.gV(Lm(),this.e5)}C=Vc.prototype=new hs,C.constructor=Vc;function Hc(){}Hc.prototype=C,C.gE=(function(e){return Sp(e)?this.g3(e,this.t):e instanceof um?this.ga(e,this.t):this.gs(e,this.t)}),new D().i(Vc,`scala.util.hashing.MurmurHash3$`,{es:1,er:1});var Uc;function z(){return Uc||=new Vc,Uc}var Wc=class extends lc{};function Gc(){this.bR=null,this.cG=null,this.cH=null,qc=this,this.bR=Kd().e8(L().l(new(F.r()).C([]))),this.cG=new K((e=>{try{console.error(this.fR(e)+`
`+this.fU(e,`
`))}catch(e){var t=e instanceof lc?e:new X(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cH=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof X?t.S:t})),this.gy(this.cG)}C=Gc.prototype=new w,C.constructor=Gc;function Kc(){}Kc.prototype=C,C.fR=(function(e){try{var t=e.bl()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Mn(e).cz()+`: `+t}),C.fU=(function(e,t){try{return Ho(Al().h0(e.fV()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),C.gy=(function(e){this.bR.ct(e)}),C.bp=(function(e){for(var t=this.bR.m();t.r();){var n=t.g();try{n.f(e)}catch(e){var r=e instanceof lc?e:new X(e),i=this.cH;if(n===null?i===null:n.i(i))throw r instanceof X?r.S:r;console.warn(`Error processing an unhandled error callback:`),as().gJ(0,new Lu((e=>(()=>{throw e instanceof X?e.S:e}))(r)))}}}),new D().i(Gc,`com.raquo.airstream.core.AirstreamError$`,{b4:1,dL:1,dM:1});var qc;function Jc(){return qc||=new Gc,qc}function B(e,t,n){return new pu(n.fk(t))}function Yc(e,t,n,r){return new js(new K((e=>{(xi(),new gi(t,null,null)).aj(new K((e=>(t=>{n.f(t).a0(e)}))(e)))})),Zi())}function Xc(e,t,n){this.d5=null,this.d6=null,this.d4=null,this.d5=e,this.d6=t,this.d4=n}C=Xc.prototype=new w,C.constructor=Xc;function Zc(){}Zc.prototype=C,C.a0=(function(e){this.d4.fh(e,this.d5,this.d6)}),new D().i(Xc,`com.raquo.laminar.modifiers.KeySetter`,{bT:1,R:1,c5:1});function Qc(e,t){if(this.c3=null,this.da=null,this.db=null,this.da=t,Vs(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!hi().g5(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.db=e,this.ge()}C=Qc.prototype=new w,C.constructor=Qc;function $c(){}$c.prototype=C,C.bN=(function(){return this.c3}),C.eo=(function(e){this.c3=e}),C.ge=(function(){return this.c3.e6(),ca().bJ(this,this.da,void 0)}),C.aD=(function(){return this.db}),new D().i(Qc,`com.raquo.laminar.nodes.RootNode`,{c9:1,a0:1,ac:1});function el(e,t,n){this.c5=null,this.de=null,this.de=e,Hs(this,e,!1)}C=el.prototype=new Ws,C.constructor=el;function tl(){}tl.prototype=C,C.cB=(function(){return this.de}),new D().i(el,`com.raquo.laminar.tags.CustomHtmlTag`,{cc:1,ad:1,a1:1});function nl(){this.aY=null,this.aX=null,this.aZ=!1,this.dk=null,this.dl=!1,this.dg=null,this.dh=!1,this.di=null,this.dj=!1,Ys(this,`wa-checkbox`)}C=nl.prototype=new Zs,C.constructor=nl;function rl(){}rl.prototype=C,C.cF=(function(){return this.dl||=(this.dk=(G(),ws(new Ts,`value`,ki().a4)),!0),this.dk}),C.fx=(function(){return this.dh||=(this.dg=(G(),ws(new Ts,`disabled`,ki().d2)),!0),this.dg}),C.W=(function(){return this.dj||=(this.di=(G(),ws(new Ts,`name`,ki().a4)),!0),this.di}),C.cr=(function(){return mn}),new D().i(nl,`io.github.nguyenyou.webawesome.laminar.Checkbox$`,{cg:1,a3:1,a2:1});var il;function al(){return il||=new nl,il}function ol(){this.aY=null,this.aX=null,this.aZ=!1,this.dp=null,this.dq=!1,this.dm=null,this.dn=!1,this.dr=null,this.ds=!1,this.dt=null,this.du=!1,Ys(this,`wa-checkbox-group`)}C=ol.prototype=new Zs,C.constructor=ol;function sl(){}sl.prototype=C,C.cA=(function(){return this.dq||=(this.dp=(G(),ws(new Ts,`label`,ki().a4)),!0),this.dp}),C.g0=(function(){return this.dn||=(this.dm=(G(),ws(new Ts,`hint`,ki().a4)),!0),this.dm}),C.gt=(function(){return this.ds||=(this.dr=_l(),!0),this.dr}),C.gL=(function(){return this.du||=(this.dt=pl(),!0),this.dt}),C.cr=(function(){return pn}),new D().i(ol,`io.github.nguyenyou.webawesome.laminar.CheckboxGroup$`,{ch:1,a3:1,a2:1});var cl;function ll(){return cl||=new ol,cl}function ul(){this.ar=null,this.aW=null,this.dz=null,this.dA=!1,ws(this,`size`,new qs)}C=ul.prototype=new Es,C.constructor=ul;function dl(){}dl.prototype=C,C.g8=(function(){return this.dA||=(this.dz=pl().v(`l`),!0),this.dz}),new D().i(ul,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cj:1,Z:1,U:1});var fl;function pl(){return fl||=new ul,fl}function ml(){this.ar=null,this.aW=null,this.dB=null,this.dC=!1,ws(this,`orientation`,new qs)}C=ml.prototype=new Es,C.constructor=ml;function hl(){}hl.prototype=C,C.g2=(function(){return this.dC||=(this.dB=_l().v(`horizontal`),!0),this.dB}),new D().i(ml,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{ck:1,Z:1,U:1});var gl;function _l(){return gl||=new ml,gl}function vl(){this.aY=null,this.aX=null,this.aZ=!1,this.dD=null,this.dE=!1,Ys(this,`wa-switch`)}C=vl.prototype=new Zs,C.constructor=vl;function yl(){}yl.prototype=C,C.W=(function(){return this.dE||=(this.dD=(G(),ws(new Ts,`name`,ki().a4)),!0),this.dD}),C.cr=(function(){return kn}),new D().i(vl,`io.github.nguyenyou.webawesome.laminar.Switch$`,{cl:1,a3:1,a2:1});var bl;function xl(){return bl||=new vl,bl}function Sl(e){if(e.an.Z)return e.an.Q().cz()+`[]`;for(var t=e.an.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Cl(e){this.c6=null,this.an=e}C=Cl.prototype=new w,C.constructor=Cl;function wl(){}wl.prototype=C,C.s=(function(){return(this.an.Y?`interface `:this.an.X?``:`class `)+this.an.N}),C.cz=(function(){return this.c6===null&&(this.c6=Sl(this)),this.c6}),new D().i(Cl,`java.lang.Class`,{cs:1,a:1,L:1});function V(e,t){return cc(e,t,null,!0,!0),e}var H=class extends lc{};new D().i(H,`java.lang.Exception`,{K:1,u:1,a:1});function Tl(){}C=Tl.prototype=new w,C.constructor=Tl;function El(){}El.prototype=C;function Dl(){this.f4=null,kl=this,this.f4=Ul()}C=Dl.prototype=new Cc,C.constructor=Dl;function Ol(){}Ol.prototype=C,new D().i(Dl,`scala.Predef$`,{d3:1,cW:1,cX:1});var kl;function Al(){return kl||=new Dl,kl}function jl(e,t){return e.bF=t,e}function Ml(){this.bF=null}C=Ml.prototype=new w,C.constructor=Ml;function Nl(){}Nl.prototype=C,C.cy=(function(e){return this.bF.cx(e,gp())}),C.cw=(function(e){return this.bF.cx(e,gp())});function Pl(e,t){return new Md(e).fp(t)}function Fl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().u:new Id(e,r,i)}function Il(e,t){for(var n=t.m();e.r()&&n.r();)if(!I().K(e.g(),n.g()))return!1;return e.r()===n.r()}function Ll(){this.u=null,zl=this,this.u=new Ed}C=Ll.prototype=new w,C.constructor=Ll;function Rl(){}Rl.prototype=C,new D().i(Ll,`scala.collection.Iterator$`,{dm:1,W:1,a:1});var zl;function U(){return zl||=new Ll,zl}function Bl(){}C=Bl.prototype=new w,C.constructor=Bl;function Vl(){}Vl.prototype=C,new D().i(Bl,`scala.collection.immutable.Map$`,{dB:1,ds:1,a:1});var Hl;function Ul(){return Hl||=new Bl,Hl}function Wl(e){this.dX=null,this.dX=e}C=Wl.prototype=new Ac,C.constructor=Wl;function Gl(){}Gl.prototype=C,C.aC=(function(){return(0,this.dX)()}),new D().i(Wl,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dW:1,b0:1,aq:1});function W(e){this.dY=null,this.dY=e}C=W.prototype=new Mc,C.constructor=W;function Kl(){}Kl.prototype=C,C.f=(function(e){return(0,this.dY)(e)}),new D().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dX:1,b1:1,e:1});var ql=new D().i(0,`scala.runtime.Nothing$`,{e3:1,u:1,a:1});function Jl(){}C=Jl.prototype=new w,C.constructor=Jl;function Yl(){}Yl.prototype=C,C.fP=(function(e){return(t=>e.f(t))}),new D().i(Jl,`scala.scalajs.js.Any$`,{e8:1,e9:1,ea:1});var Xl;function Zl(){return Xl||=new Jl,Xl}function Ql(){}C=Ql.prototype=new Ac,C.constructor=Ql;function $l(){}$l.prototype=C;function eu(){}C=eu.prototype=new Mc,C.constructor=eu;function tu(){}tu.prototype=C;function nu(){}C=nu.prototype=new Pc,C.constructor=nu;function ru(){}ru.prototype=C;function iu(){}C=iu.prototype=new Ic,C.constructor=iu;function au(){}au.prototype=C;function ou(e,t,n,r){if(this.cI=null,r===null)throw new cd;this.cI=void 0}C=ou.prototype=new w,C.constructor=ou;function su(){}su.prototype=C,C.s=(function(){return dr(this)}),new D().i(ou,`com.raquo.airstream.core.Observer$$anon$8`,{b8:1,b9:1,b5:1,b6:1});function cu(e){if(this.cU=null,this.cV=!1,this.eR=null,e===null)throw new cd;Mi(this)}C=cu.prototype=new w,C.constructor=cu;function lu(){}lu.prototype=C,C.gQ=(function(){return this.cV||=(this.cU=new Gs(`svg`,!1),!0),this.cU}),new D().i(cu,`com.raquo.laminar.api.Laminar$svg$`,{bs:1,bI:1,bB:1,bD:1});function uu(){this.y=null,fu=this,this.y=new Dp}C=uu.prototype=new w,C.constructor=uu;function du(){}du.prototype=C,new D().i(uu,`com.raquo.laminar.api.package$`,{bv:1,a9:1,aa:1,a8:1});var fu;function G(){return fu||=new uu,fu}function pu(e){this.dd=null,this.c4=null,this.dd=J(),this.c4=hi().fs(e)}C=pu.prototype=new w,C.constructor=pu;function mu(){}mu.prototype=C,C.eO=(function(e){this.dd=e}),C.eQ=(function(e){}),C.a0=(function(e){ca().bJ(e,this,void 0)}),C.gT=(function(){return this.c4.data}),C.aD=(function(){return this.c4}),new D().i(pu,`com.raquo.laminar.nodes.TextNode`,{cb:1,a0:1,R:1,ab:1});function hu(){}C=hu.prototype=new w,C.constructor=hu;function gu(){}gu.prototype=C;function _u(e,t){return e===t}function vu(e){return e?1231:1237}var yu=new D().i(0,`java.lang.Boolean`,{cq:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function bu(e){return e}function xu(e,t){return t instanceof jn&&e===t.c}var Su=new D().i(0,`java.lang.Character`,{aj:1,a:1,P:1,L:1},(e=>e instanceof jn)),Cu=class extends H{};function wu(){this.p=null,this.p=``}C=wu.prototype=new w,C.constructor=wu;function Tu(){}Tu.prototype=C,C.fe=(function(e){var t=sc().gg(e,0,e.a.length);return this.p=``+this.p+t,this}),C.s=(function(){return this.p}),C.j=(function(){return this.p.length}),C.em=(function(e){return this.p.charCodeAt(e)}),new D().i(wu,`java.lang.StringBuilder`,{cF:1,a4:1,ah:1,a:1});function Eu(){}C=Eu.prototype=new El,C.constructor=Eu;function Du(){}Du.prototype=C;function Ou(){}C=Ou.prototype=new w,C.constructor=Ou;function ku(){}ku.prototype=C,C.s=(function(){return`<function1>`}),C.fi=(function(e){throw new vd(e)}),C.f=(function(e){this.fi(e)}),new D().i(Ou,`scala.PartialFunction$$anon$1`,{d2:1,g:1,e:1,a:1});function Au(){}C=Au.prototype=new w,C.constructor=Au;function ju(){}ju.prototype=C,C.m=(function(){return this}),C.bM=(function(e){return this.bq(e,-1)}),C.bq=(function(e,t){return Fl(this,e,t)}),C.s=(function(){return`<iterator>`}),C.bb=(function(e,t,n,r){return Uo(this,e,t,n,r)}),C.z=(function(){return-1});function Mu(e,t){return e.bG=t,e}function Nu(){this.bG=null}C=Nu.prototype=new w,C.constructor=Nu;function Pu(){}Pu.prototype=C,C.e8=(function(e){return this.bG.cw(e)}),C.ez=(function(e){return this.bG.cy(e)}),C.cy=(function(e){return this.ez(e)}),C.cw=(function(e){return this.e8(e)});function Fu(e){return e.aS(0)===0}function Iu(e,t){var n=e.z();if(n!==-1)var r=t.z(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Il(e.m(),t)}function Lu(e){this.e1=null,this.e1=e}C=Lu.prototype=new $l,C.constructor=Lu;function Ru(){}Ru.prototype=C,C.aC=(function(){return(0,this.e1)()}),new D().i(Lu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ef:1,ee:1,b0:1,aq:1});function K(e){this.e2=null,this.e2=e}C=K.prototype=new tu,C.constructor=K;function zu(){}zu.prototype=C,C.f=(function(e){return(0,this.e2)(e)}),new D().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eh:1,eg:1,b1:1,e:1});function Bu(e){this.e3=null,this.e3=e}C=Bu.prototype=new ru,C.constructor=Bu;function Vu(){}Vu.prototype=C,C.cu=(function(e,t){return(0,this.e3)(e,t)}),new D().i(Bu,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ej:1,ei:1,dY:1,cU:1});function Hu(e){this.e4=null,this.e4=e}C=Hu.prototype=new au,C.constructor=Hu;function Uu(){}Uu.prototype=C,C.fh=(function(e,t,n){return(0,this.e4)(e,t,n)}),new D().i(Hu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{el:1,ek:1,dZ:1,cV:1});function Wu(e,t){this.by=null,this.bY=null,this.by=e,this.bY=t}C=Wu.prototype=new w,C.constructor=Wu;function Gu(){}Gu.prototype=C,C.a0=(function(e){var t=this.bY;t!==void 0&&t.eG(e,this.by),ca().bJ(e,this.by,void 0)}),C.gX=(function(e){return new Wu(this.by,e.fg(this.bY))});var Ku=new D().i(Wu,`com.raquo.laminar.inserters.StaticChildInserter`,{bM:1,R:1,bK:1,bO:1,bJ:1});function qu(e){e.c2=new ni(new Lu((()=>{e.aJ.e6()})),new Lu((()=>{e.aJ.ft()})))}function Ju(e,t){Xu(e,e.bB,t)&&Zu(e,t)}function Yu(e,t){var n=e.bB;e.bB=t,Xu(e,n,t)||Zu(e,t)}function Xu(e,t,n){var r=!t.h()&&!t.x().bN().F.h(),i=!n.h()&&!n.x().bN().F.h();return r&&!i}function Zu(e,t){Qu(e,t.h()?J():new Y(t.x().bN()))}function Qu(e,t){if(t.h())e.c2.fn();else{var n=t.x();e.c2.gG(n)}}function $u(){}C=$u.prototype=new gu,C.constructor=$u;function ed(){}ed.prototype=C;var td=class extends Cu{constructor(e){super(),cc(this,e,null,!0,!0)}};new D().i(td,`java.lang.ArithmeticException`,{cp:1,Q:1,K:1,u:1,a:1});var nd=new D().i(0,`java.lang.Byte`,{cr:1,S:1,a:1,P:1,L:1},(e=>Gn(e))),rd=class extends Cu{constructor(e){super(),cc(this,e,null,!0,!0)}};new D().i(rd,`java.lang.IllegalArgumentException`,{cv:1,Q:1,K:1,u:1,a:1});function id(e,t){return cc(e,t,null,!0,!0),e}var ad=class extends Cu{};new D().i(ad,`java.lang.IndexOutOfBoundsException`,{al:1,Q:1,K:1,u:1,a:1});function od(){}C=od.prototype=new gu,C.constructor=od;function sd(){}sd.prototype=C,new D().i(od,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cy:1,ag:1,ae:1,ai:1,af:1});var cd=class extends Cu{constructor(){super(),cc(this,null,null,!0,!0)}};new D().i(cd,`java.lang.NullPointerException`,{cz:1,Q:1,K:1,u:1,a:1});var ld=new D().i(0,`java.lang.Short`,{cA:1,S:1,a:1,P:1,L:1},(e=>Kn(e))),ud=class extends Cu{constructor(e){super(),cc(this,e,null,!0,!0)}};new D().i(ud,`java.lang.UnsupportedOperationException`,{cI:1,Q:1,K:1,u:1,a:1});var dd=class extends Cu{constructor(e){super(),cc(this,e,null,!0,!0)}};new D().i(dd,`java.util.NoSuchElementException`,{cM:1,Q:1,K:1,u:1,a:1});function fd(){}C=fd.prototype=new Du,C.constructor=fd;function pd(){}pd.prototype=C,C.f=(function(e){return e}),C.s=(function(){return`generalized constraint`}),new D().i(fd,`scala.$less$colon$less$$anon$1`,{cR:1,cO:1,cP:1,e:1,a:1});function md(e){return e.cc||=(e.cd=e.bE===null?`null`:_d(e),!0),e.cd}function hd(e){return e.cc?e.cd:md(e)}function gd(e){var t=e.bE;return`of class `+Nn(t)}function _d(e){try{return e.bE+` (`+gd(e)+`)`}catch{return`an instance `+gd(e)}}var vd=class extends Cu{constructor(e){super(),this.cd=null,this.bE=null,this.cc=!1,this.bE=e,cc(this,null,null,!0,!0)}bl(){return hd(this)}};new D().i(vd,`scala.MatchError`,{cY:1,Q:1,K:1,u:1,a:1});function yd(){}C=yd.prototype=new w,C.constructor=yd;function bd(){}bd.prototype=C,C.h=(function(){return this===J()}),C.z=(function(){return this.h()?0:1}),C.m=(function(){return this.h()?U().u:new Od(this.x())});function xd(e){this.b3=0,this.dQ=0,this.dP=null,this.dP=e,this.b3=0,this.dQ=e.ak()}C=xd.prototype=new ju,C.constructor=xd;function Sd(){}Sd.prototype=C,C.r=(function(){return this.b3<this.dQ}),C.g=(function(){var e=this.dP.al(this.b3);return this.b3=1+this.b3|0,e}),new D().i(xd,`scala.Product$$anon$1`,{d4:1,r:1,s:1,b:1,c:1});function Cd(e){this.bF=null,jl(this,e)}C=Cd.prototype=new Nl,C.constructor=Cd;function wd(){}wd.prototype=C,new D().i(Cd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{di:1,dh:1,W:1,a:1,a5:1});function Td(e){return Ho(e,e.aQ()+`(`,`, `,`)`)}function Ed(){}C=Ed.prototype=new ju,C.constructor=Ed;function Dd(){}Dd.prototype=C,C.r=(function(){return!1}),C.gi=(function(){throw new dd(`next on empty iterator`)}),C.z=(function(){return 0}),C.bq=(function(e,t){return this}),C.g=(function(){this.gi()}),new D().i(Ed,`scala.collection.Iterator$$anon$19`,{dn:1,r:1,s:1,b:1,c:1});function Od(e){this.b5=!1,this.dU=null,this.dU=e,this.b5=!1}C=Od.prototype=new ju,C.constructor=Od;function kd(){}kd.prototype=C,C.r=(function(){return!this.b5}),C.g=(function(){return this.b5?U().u.g():(this.b5=!0,this.dU)}),C.bq=(function(e,t){return this.b5||e>0||t===0?U().u:this}),new D().i(Od,`scala.collection.Iterator$$anon$20`,{dp:1,r:1,s:1,b:1,c:1});function Ad(e){for(;;){if(e.B instanceof Md){var t=e.B;e.B=t.B,e.a7=t.a7,t.O!==null&&(e.N===null&&(e.N=t.N),t.N.b6=e.O,e.O=t.O);continue}return}}function jd(e){for(;;)if(e.O===null)return e.B=null,e.N=null,!1;else{if(e.B=e.O.fZ(),e.N===e.O&&(e.N=e.N.b6),e.O=e.O.b6,Ad(e),e.a7)return!0;if(e.B!==null&&e.B.r())return e.a7=!0,!0}}function Md(e){this.B=null,this.O=null,this.N=null,this.a7=!1,this.B=e,this.O=null,this.N=null,this.a7=!1}C=Md.prototype=new ju,C.constructor=Md;function Nd(){}Nd.prototype=C,C.r=(function(){return this.a7?!0:this.B===null?!1:this.B.r()?(this.a7=!0,!0):jd(this)}),C.g=(function(){return this.r()?(this.a7=!1,this.B.g()):U().u.g()}),C.fp=(function(e){var t=new Wo(e,null);return this.O===null?(this.O=t,this.N=t):(this.N.b6=t,this.N=t),this.B===null&&(this.B=U().u),this}),new D().i(Md,`scala.collection.Iterator$ConcatIterator`,{aw:1,r:1,s:1,b:1,c:1});function Pd(e){for(;e.Z>0;)e.a8.r()?(e.a8.g(),e.Z=-1+e.Z|0):e.Z=0}function Fd(e,t){if(e.I<0)return-1;var n=e.I-t|0;return n<0?0:n}function Id(e,t,n){this.a8=null,this.I=0,this.Z=0,this.a8=e,this.I=n,this.Z=t}C=Id.prototype=new ju,C.constructor=Id;function Ld(){}Ld.prototype=C,C.z=(function(){var e=this.a8.z();if(e<0)return-1;var t=e-this.Z|0,n=t<0?0:t;if(this.I<0)return n;var r=this.I;return r<n?r:n}),C.r=(function(){return Pd(this),this.I!==0&&this.a8.r()}),C.g=(function(){return Pd(this),this.I>0?(this.I=-1+this.I|0,this.a8.g()):this.I<0?this.a8.g():U().u.g()}),C.bq=(function(e,t){var n=e>0?e:0;if(t<0)var r=Fd(this,n);else if(t<=n)var r=0;else if(this.I<0)var r=t-n|0;else var i=Fd(this,n),a=t-n|0,r=i<a?i:a;var o=this.Z+n|0;return r===0?U().u:o<0?(this.Z=2147483647,this.I=0,Pl(this,new Wl((()=>new Id(this.a8,-2147483647+o|0,r))))):(this.Z=o,this.I=r,this)}),new D().i(Id,`scala.collection.Iterator$SliceIterator`,{dr:1,r:1,s:1,b:1,c:1});function Rd(e,t){if(t<0)throw id(new ad,``+t);var n=e.fA(t);if(n.h())throw id(new ad,``+t);return n.V()}function zd(e,t){return Cp(t)?Bd(e,e,t):Iu(e,t)}function Bd(e,t,n){for(;;)if(t===n)return!0;else if(!t.h()&&!n.h()&&I().K(t.V(),n.V())){var r=t.L(),i=n.L();t=r,n=i}else return t.h()&&n.h()}function Vd(e){this.b8=null,this.b8=e}C=Vd.prototype=new ju,C.constructor=Vd;function Hd(){}Hd.prototype=C,C.r=(function(){return!this.b8.h()}),C.g=(function(){var e=this.b8.V();return this.b8=this.b8.L(),e}),new D().i(Vd,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dw:1,r:1,s:1,b:1,c:1});function Ud(){this.bG=null,Mu(this,Qd())}C=Ud.prototype=new Pu,C.constructor=Ud;function Wd(){}Wd.prototype=C,new D().i(Ud,`scala.collection.mutable.Buffer$`,{dG:1,dt:1,a5:1,W:1,a:1});var Gd;function Kd(){return Gd||=new Ud,Gd}function qd(e){this.ba=0,this.dZ=0,this.e0=null,this.e0=e,this.ba=0,this.dZ=e.ak()}C=qd.prototype=new ju,C.constructor=qd;function Jd(){}Jd.prototype=C,C.r=(function(){return this.ba<this.dZ}),C.g=(function(){var e=this.e0.al(this.ba);return this.ba=1+this.ba|0,e}),new D().i(qd,`scala.runtime.ScalaRunTime$$anon$1`,{e6:1,r:1,s:1,b:1,c:1});function Yd(){}C=Yd.prototype=new w,C.constructor=Yd;function Xd(){}Xd.prototype=C,C.cw=(function(e){return this.eA(e)}),C.eA=(function(e){return Oc(Um(new Wm),e).eM()}),C.cy=(function(e){return this.eA(e)}),new D().i(Yd,`scala.scalajs.js.WrappedArray$`,{ec:1,dx:1,a5:1,W:1,a:1});var Zd;function Qd(){return Zd||=new Yd,Zd}var $d=class e extends Wc{constructor(e,t){super(),this.aF=null,this.aE=0,this.aF=e,this.aE=t,cc(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aU(){return new xd(this)}o(){var e=-889275714;return e=R().b(e,q(`TransactionDepthExceeded`)),e=R().b(e,R().w(this.aF)),e=R().b(e,this.aE),R().k(e,2)}i(t){return this===t?!0:t instanceof e&&this.aE===t.aE?this.aF===t.aF:!1}ak(){return 2}am(){return`TransactionDepthExceeded`}al(e){if(e===0)return this.aF;if(e===1)return this.aE;throw id(new ad,``+e)}s(){return`TransactionDepthExceeded: `+this.aF+`; maxDepth: `+this.aE}};new D().i($d,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a7:1,b3:1,u:1,a:1,d:1,T:1});function ef(e,t){this.bB=null,this.aJ=null,this.c2=null,this.d9=null,this.a5=null,this.d9=e,this.a5=t,this.bB=J(),Vs(this),qu(this)}C=ef.prototype=new w,C.constructor=ef;function tf(){}tf.prototype=C,C.a0=(function(e){ca().bJ(e,this,void 0)}),C.bN=(function(){return this.aJ}),C.eo=(function(e){this.aJ=e}),C.eQ=(function(e){Ju(this,e)}),C.eO=(function(e){Yu(this,e)}),C.s=(function(){return`ReactiveHtmlElement(`+(this.a5===null?`tag=`+this.d9.cB():this.a5.outerHTML)+`)`}),C.aD=(function(){return this.a5}),new D().i(ef,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{c8:1,a0:1,R:1,ab:1,ac:1,c7:1});function nf(e,t){return Object.is(e,t)}function rf(e){return Da().cC(e)}var af=new D().i(0,`java.lang.Double`,{ak:1,S:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),of=new D().i(0,`java.lang.Float`,{ct:1,S:1,a:1,P:1,L:1,V:1},(e=>Jn(e))),sf=new D().i(0,`java.lang.Integer`,{cw:1,S:1,a:1,P:1,L:1,V:1},(e=>qn(e)));function cf(e,t){return t instanceof N&&e.c===t.c&&e.d===t.d}function lf(e){return e.c^e.d}var uf=new D().i(0,`java.lang.Long`,{am:1,S:1,a:1,P:1,L:1,V:1},(e=>e instanceof N));function q(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function df(e,t){return e===t}var ff=new D().i(0,`java.lang.String`,{cD:1,a:1,P:1,a4:1,L:1,V:1},(e=>typeof e==`string`)),pf=class extends ad{constructor(){super(),cc(this,null,null,!0,!0)}};new D().i(pf,`java.lang.StringIndexOutOfBoundsException`,{cG:1,al:1,Q:1,K:1,u:1,a:1});function mf(){}C=mf.prototype=new bd,C.constructor=mf;function hf(){}hf.prototype=C,C.fQ=(function(){throw new dd(`None.get`)}),C.am=(function(){return`None`}),C.ak=(function(){return 0}),C.al=(function(e){return R().bm(e)}),C.aU=(function(){return new qd(this)}),C.o=(function(){return 2433880}),C.s=(function(){return`None`}),C.x=(function(){this.fQ()}),new D().i(mf,`scala.None$`,{cZ:1,ar:1,b:1,T:1,d:1,a:1});var gf;function J(){return gf||=new mf,gf}function Y(e){this.b4=null,this.b4=e}C=Y.prototype=new bd,C.constructor=Y;function _f(){}_f.prototype=C,C.x=(function(){return this.b4}),C.am=(function(){return`Some`}),C.ak=(function(){return 1}),C.al=(function(e){return e===0?this.b4:R().bm(e)}),C.aU=(function(){return new qd(this)}),C.o=(function(){return z().eL(this,-889275714,!1)}),C.s=(function(){return L().fa(this)}),C.i=(function(e){return this===e||e instanceof Y&&I().K(this.b4,e.b4)}),new D().i(Y,`scala.Some`,{as:1,ar:1,b:1,T:1,d:1,a:1});function vf(){}C=vf.prototype=new w,C.constructor=vf;function yf(){}yf.prototype=C,C.aQ=(function(){return this.aV()}),C.aj=(function(e){Vo(this,e)}),C.bb=(function(e,t,n,r){return Uo(this,e,t,n,r)}),C.z=(function(){return-1});function bf(e,t){return e.H=t,e.e=0,e.A=yo().aR(e.H),e}function xf(){this.H=null,this.e=0,this.A=0}C=xf.prototype=new ju,C.constructor=xf;function Sf(){}Sf.prototype=C,C.z=(function(){return this.A-this.e|0}),C.r=(function(){return this.e<this.A}),C.g=(function(){this.e>=yo().aR(this.H)&&U().u.g();var e=L().aP(this.H,this.e);return this.e=1+this.e|0,e}),C.bM=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.A;else var r=this.A,n=r<t?r:t;this.e=n}return this}),new D().i(xf,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function Cf(e,t){return t<0?0:t>e.R?e.R:t}function wf(e){this.dT=null,this.a6=0,this.R=0,this.dT=e,this.a6=0,this.R=e.j()}C=wf.prototype=new ju,C.constructor=wf;function Tf(){}Tf.prototype=C,C.z=(function(){return this.R}),C.r=(function(){return this.R>0}),C.g=(function(){if(this.R>0){var e=this.dT.n(this.a6);return this.a6=1+this.a6|0,this.R=-1+this.R|0,e}else return U().u.g()}),C.bM=(function(e){if(e>0){this.a6=this.a6+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),C.bq=(function(e,t){var n=Cf(this,e),r=Cf(this,t)-n|0;return this.R=r<0?0:r,this.a6=this.a6+n|0,this}),new D().i(wf,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dl:1,r:1,s:1,b:1,c:1,a:1});function Ef(e){return e.cn||=(e.co=new nm(new T(0)),!0),e.co}function Df(e){return e.cn?e.co:Ef(e)}function Of(){this.co=null,this.f5=null,this.cn=!1,Af=this,this.f5=new Cd(this)}C=Of.prototype=new w,C.constructor=Of;function kf(){}kf.prototype=C,C.fN=(function(e,t){return e instanceof Bp?e:this.eP(_c().ey(e,t))}),C.eP=(function(e){if(e===null)return null;if(e instanceof T)return new nm(e);if(e instanceof E)return new Qp(e);if(e instanceof or)return new Jp(e);if(e instanceof ir)return new em(e);if(e instanceof ar)return new Xp(e);if(e instanceof tr)return new Kp(e);if(e instanceof nr)return new Wp(e);if(e instanceof rr)return new im(e);if(e instanceof er)return new Hp(e);if(po(e,1))return new om(e);throw new vd(e)}),C.cx=(function(e,t){return this.fN(e,t)}),new D().i(Of,`scala.collection.immutable.ArraySeq$`,{dA:1,ay:1,au:1,at:1,av:1,a:1});var Af;function jf(){return Af||=new Of,Af}function Mf(){this.f6=null,this.dW=null,Pf=this,this.f6=new Cd(this),this.dW=new Em(new T(0))}C=Mf.prototype=new w,C.constructor=Mf;function Nf(){}Nf.prototype=C,C.fO=(function(e,t){return this.gb(_c().ey(e,t))}),C.gb=(function(e){if(e===null)return null;if(e instanceof T)return new Em(e);if(e instanceof E)return new Sm(e);if(e instanceof or)return new vm(e);if(e instanceof ir)return new wm(e);if(e instanceof ar)return new bm(e);if(e instanceof tr)return new gm(e);if(e instanceof nr)return new mm(e);if(e instanceof rr)return new Om(e);if(e instanceof er)return new fm(e);if(po(e,1))return new Am(e);throw new vd(e)}),C.cx=(function(e,t){return this.fO(e,t)}),new D().i(Mf,`scala.collection.mutable.ArraySeq$`,{dE:1,ay:1,au:1,at:1,av:1,a:1});var Pf;function Ff(){return Pf||=new Mf,Pf}function If(){}C=If.prototype=new ed,C.constructor=If;function Lf(){}Lf.prototype=C;function Rf(e){this.H=null,this.e=0,this.A=0,this.ce=null,this.ce=e,bf(this,e)}C=Rf.prototype=new Sf,C.constructor=Rf;function zf(){}zf.prototype=C,C.gj=(function(){this.e>=this.ce.a.length&&U().u.g();var e=this.ce.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gj()}),new D().i(Rf,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{d8:1,M:1,r:1,s:1,b:1,c:1,a:1});function Bf(e){this.H=null,this.e=0,this.A=0,this.cf=null,this.cf=e,bf(this,e)}C=Bf.prototype=new Sf,C.constructor=Bf;function Vf(){}Vf.prototype=C,C.gk=(function(){this.e>=this.cf.a.length&&U().u.g();var e=this.cf.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return Yn(this.gk())}),new D().i(Bf,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{d9:1,M:1,r:1,s:1,b:1,c:1,a:1});function Hf(e){this.H=null,this.e=0,this.A=0,this.cg=null,this.cg=e,bf(this,e)}C=Hf.prototype=new Sf,C.constructor=Hf;function Uf(){}Uf.prototype=C,C.gl=(function(){this.e>=this.cg.a.length&&U().u.g();var e=this.cg.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gl()}),new D().i(Hf,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{da:1,M:1,r:1,s:1,b:1,c:1,a:1});function Wf(e){this.H=null,this.e=0,this.A=0,this.ch=null,this.ch=e,bf(this,e)}C=Wf.prototype=new Sf,C.constructor=Wf;function Gf(){}Gf.prototype=C,C.gm=(function(){this.e>=this.ch.a.length&&U().u.g();var e=this.ch.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gm()}),new D().i(Wf,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{db:1,M:1,r:1,s:1,b:1,c:1,a:1});function Kf(e){this.H=null,this.e=0,this.A=0,this.ci=null,this.ci=e,bf(this,e)}C=Kf.prototype=new Sf,C.constructor=Kf;function qf(){}qf.prototype=C,C.gn=(function(){this.e>=this.ci.a.length&&U().u.g();var e=this.ci.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gn()}),new D().i(Kf,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dc:1,M:1,r:1,s:1,b:1,c:1,a:1});function Jf(e){this.H=null,this.e=0,this.A=0,this.cj=null,this.cj=e,bf(this,e)}C=Jf.prototype=new Sf,C.constructor=Jf;function Yf(){}Yf.prototype=C,C.go=(function(){this.e>=this.cj.a.length&&U().u.g();var e=this.cj.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new N(t,n)}),C.g=(function(){return this.go()}),new D().i(Jf,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dd:1,M:1,r:1,s:1,b:1,c:1,a:1});function Xf(e){this.H=null,this.e=0,this.A=0,this.ck=null,this.ck=e,bf(this,e)}C=Xf.prototype=new Sf,C.constructor=Xf;function Zf(){}Zf.prototype=C,C.gp=(function(){this.e>=this.ck.a.length&&U().u.g();var e=this.ck.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gp()}),new D().i(Xf,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{de:1,M:1,r:1,s:1,b:1,c:1,a:1});function Qf(e){this.H=null,this.e=0,this.A=0,this.dS=null,this.dS=e,bf(this,e)}C=Qf.prototype=new Sf,C.constructor=Qf;function $f(){}$f.prototype=C,C.gq=(function(){this.e>=this.dS.a.length&&U().u.g(),this.e=1+this.e|0}),C.g=(function(){this.gq()}),new D().i(Qf,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{df:1,M:1,r:1,s:1,b:1,c:1,a:1});function ep(e){this.H=null,this.e=0,this.A=0,this.cl=null,this.cl=e,bf(this,e)}C=ep.prototype=new Sf,C.constructor=ep;function tp(){}tp.prototype=C,C.gr=(function(){this.e>=this.cl.a.length&&U().u.g();var e=this.cl.a[this.e];return this.e=1+this.e|0,e}),C.g=(function(){return this.gr()}),new D().i(ep,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dg:1,M:1,r:1,s:1,b:1,c:1,a:1});function np(e){return e.aQ()+`(<not computed>)`}function rp(){}C=rp.prototype=new w,C.constructor=rp;function ip(){}ip.prototype=C;var X=class e extends Cu{constructor(e){super(),this.S=null,this.S=e,cc(this,null,null,!0,!0)}bl(){return In(this.S)}am(){return`JavaScriptException`}ak(){return 1}al(e){return e===0?this.S:R().bm(e)}aU(){return new qd(this)}o(){return z().eL(this,-889275714,!1)}i(t){return this===t||t instanceof e&&I().K(this.S,t.S)}};new D().i(X,`scala.scalajs.js.JavaScriptException`,{b2:1,Q:1,K:1,u:1,a:1,T:1,d:1});function ap(e,t){typeof console<`u`&&(e.dG&&console.error?console.error(t):console.log(t))}function op(e){this.dG=!1,this.b1=null,this.dG=e,new od,this.b1=``}C=op.prototype=new Lf,C.constructor=op;function sp(){}sp.prototype=C,C.g6=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b1=``+this.b1+t,t=``;else{var r=this.b1,i=t;ap(this,``+r+i.substring(0,n)),this.b1=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new D().i(op,`java.lang.JSConsoleBasedPrintStream`,{cx:1,co:1,cn:1,ag:1,ae:1,ai:1,af:1,ah:1});function cp(e,t,n){for(;;)if(t<=0||n.h())return n;else{var r=-1+t|0,i=n.L();t=r,n=i}}function lp(){this.cp=null}C=lp.prototype=new ip,C.constructor=lp;function up(){}up.prototype=C,C.s=(function(){return this.cp}),C.i=(function(e){return this===e}),C.o=(function(){return Wn(this)});function dp(){}C=dp.prototype=new yf,C.constructor=dp;function fp(){}fp.prototype=C,C.s=(function(){return np(this)});function pp(){this.cp=null,this.cp=`Any`}C=pp.prototype=new up,C.constructor=pp;function mp(){}mp.prototype=C,C.gD=(function(){return O.l()}),C.gh=(function(e){return new T(e)}),new D().i(pp,`scala.reflect.ManifestFactory$AnyManifest$`,{dS:1,dU:1,dT:1,dR:1,dQ:1,dP:1,dV:1,a:1,d:1});var hp;function gp(){return hp||=new pp,hp}function Z(e,t){return e===t?!0:_p(t)&&t.el(e)?e.cE(t):!1}function _p(e){return!!(e&&e.$classData&&e.$classData.n.f)}function vp(){}C=vp.prototype=new yf,C.constructor=vp;function yp(){}yp.prototype=C,C.el=(function(e){return!0}),C.i=(function(e){return Z(this,e)}),C.o=(function(){return z().gE(this)}),C.s=(function(){return Td(this)}),C.h=(function(){return Fu(this)}),C.cE=(function(e){return Iu(this,e)});function bp(){}C=bp.prototype=new fp,C.constructor=bp;function xp(){}xp.prototype=C;function Sp(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Cp(e){return!!(e&&e.$classData&&e.$classData.n.X)}function wp(e,t){return e.b7=t,e}function Tp(){this.b7=null}C=Tp.prototype=new xp,C.constructor=Tp;function Ep(){}Ep.prototype=C,C.n=(function(e){return this.b7.n(e)}),C.j=(function(){return this.b7.j()}),C.h=(function(){return this.b7.h()});function Dp(){this.cY=null,this.cZ=!1,this.cW=null,this.cX=!1,this.eT=null,this.eS=null,this.d0=null,this.d1=!1,Ai(this),wi(this),Si(this),Ci(this)}C=Dp.prototype=new w,C.constructor=Dp;function Op(){}Op.prototype=C,C.gN=(function(){return this.cZ||=(this.cY=Hs(new Us,`strong`,!1),!0),this.cY}),C.gM=(function(){return this.cX||=(this.cW=Hs(new Us,`span`,!1),!0),this.cW}),C.gP=(function(){return this.d1||=(this.d0=new cu(this),!0),this.d0}),new D().i(Dp,`com.raquo.laminar.api.package$$anon$1`,{bw:1,bH:1,bA:1,bF:1,bE:1,bG:1,bC:1,bu:1,bq:1,bt:1,a9:1,aa:1,a8:1,br:1});function kp(e){this.b7=null,wp(this,e)}C=kp.prototype=new Ep,C.constructor=kp;function Ap(){}Ap.prototype=C,C.m=(function(){return new wf(this)}),C.aV=(function(){return`IndexedSeqView`}),C.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),C.z=(function(){return this.j()}),new D().i(kp,`scala.collection.IndexedSeqView$Id`,{dk:1,dv:1,d5:1,d6:1,h:1,i:1,b:1,k:1,c:1,j:1,dy:1,a:1,du:1,l:1,dj:1,o:1});function jp(){}C=jp.prototype=new yp,C.constructor=jp;function Mp(){}Mp.prototype=C;function Np(e,t){return!Fp(t)||e.j()===t.j()}function Pp(e,t){if(Fp(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.ea(),o=t.ea(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=I().K(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().bM(i),m=t.m().bM(i);r&&p.r();)r=I().K(p.g(),m.g())}return r}else return Iu(e,t)}function Fp(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Ip(){}C=Ip.prototype=new yp,C.constructor=Ip;function Lp(){}Lp.prototype=C;function Rp(){}C=Rp.prototype=new Lp,C.constructor=Rp;function zp(){}zp.prototype=C,C.e7=(function(e){return Oc(this,e)});function Bp(){}C=Bp.prototype=new Mp,C.constructor=Bp;function Vp(){}Vp.prototype=C,C.el=(function(e){return Np(this,e)}),C.cE=(function(e){return Pp(this,e)}),C.aV=(function(){return`IndexedSeq`}),C.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),C.z=(function(){return this.j()}),C.gc=(function(e){for(var t=new T(this.j()),n=0;n<t.a.length;)t.a[n]=e.f(this.n(n)),n=1+n|0;return jf().eP(t)}),C.aQ=(function(){return`ArraySeq`}),C.ea=(function(){return 2147483647}),C.eC=(function(e){return this.gc(e)});function Q(){}C=Q.prototype=new Lp,C.constructor=Q;function $(){}$.prototype=C,C.aV=(function(){return`IndexedSeq`}),C.aS=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),C.z=(function(){return this.j()}),C.aQ=(function(){return`ArraySeq`}),C.i=(function(e){return e instanceof Q&&yo().aR(this.T())!==yo().aR(e.T())?!1:Z(this,e)});function Hp(e){this.as=null,this.as=e}C=Hp.prototype=new Vp,C.constructor=Hp;function Up(){}Up.prototype=C,C.j=(function(){return this.as.a.length}),C.o=(function(){var e=z();return e.ek(this.as,e.t)}),C.i=(function(e){return e instanceof Hp?M().ew(this.as,e.as):Z(this,e)}),C.m=(function(){return new ep(this.as)}),C.bk=(function(e){return this.as.a[e]}),C.f=(function(e){return this.bk(e|0)}),C.n=(function(e){return this.bk(e)}),new D().i(Hp,`scala.collection.immutable.ArraySeq$ofBoolean`,{aB:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Wp(e){this.at=null,this.at=e}C=Wp.prototype=new Vp,C.constructor=Wp;function Gp(){}Gp.prototype=C,C.j=(function(){return this.at.a.length}),C.bc=(function(e){return this.at.a[e]}),C.o=(function(){var e=z();return e.ec(this.at,e.t)}),C.i=(function(e){return e instanceof Wp?M().ep(this.at,e.at):Z(this,e)}),C.m=(function(){return new Rf(this.at)}),C.f=(function(e){return this.bc(e|0)}),C.n=(function(e){return this.bc(e)}),new D().i(Wp,`scala.collection.immutable.ArraySeq$ofByte`,{aC:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Kp(e){this.a9=null,this.a9=e}C=Kp.prototype=new Vp,C.constructor=Kp;function qp(){}qp.prototype=C,C.j=(function(){return this.a9.a.length}),C.bd=(function(e){return this.a9.a[e]}),C.o=(function(){var e=z();return e.ed(this.a9,e.t)}),C.i=(function(e){return e instanceof Kp?M().eq(this.a9,e.a9):Z(this,e)}),C.m=(function(){return new Bf(this.a9)}),C.bb=(function(e,t,n,r){return new gm(this.a9).bb(e,t,n,r)}),C.f=(function(e){return Yn(this.bd(e|0))}),C.n=(function(e){return Yn(this.bd(e))}),new D().i(Kp,`scala.collection.immutable.ArraySeq$ofChar`,{aD:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Jp(e){this.au=null,this.au=e}C=Jp.prototype=new Vp,C.constructor=Jp;function Yp(){}Yp.prototype=C,C.j=(function(){return this.au.a.length}),C.o=(function(){var e=z();return e.ee(this.au,e.t)}),C.i=(function(e){return e instanceof Jp?M().er(this.au,e.au):Z(this,e)}),C.m=(function(){return new Hf(this.au)}),C.bf=(function(e){return this.au.a[e]}),C.f=(function(e){return this.bf(e|0)}),C.n=(function(e){return this.bf(e)}),new D().i(Jp,`scala.collection.immutable.ArraySeq$ofDouble`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Xp(e){this.av=null,this.av=e}C=Xp.prototype=new Vp,C.constructor=Xp;function Zp(){}Zp.prototype=C,C.j=(function(){return this.av.a.length}),C.o=(function(){var e=z();return e.ef(this.av,e.t)}),C.i=(function(e){return e instanceof Xp?M().es(this.av,e.av):Z(this,e)}),C.m=(function(){return new Wf(this.av)}),C.bg=(function(e){return this.av.a[e]}),C.f=(function(e){return this.bg(e|0)}),C.n=(function(e){return this.bg(e)}),new D().i(Xp,`scala.collection.immutable.ArraySeq$ofFloat`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Qp(e){this.aw=null,this.aw=e}C=Qp.prototype=new Vp,C.constructor=Qp;function $p(){}$p.prototype=C,C.j=(function(){return this.aw.a.length}),C.o=(function(){var e=z();return e.eg(this.aw,e.t)}),C.i=(function(e){return e instanceof Qp?M().et(this.aw,e.aw):Z(this,e)}),C.m=(function(){return new Kf(this.aw)}),C.bh=(function(e){return this.aw.a[e]}),C.f=(function(e){return this.bh(e|0)}),C.n=(function(e){return this.bh(e)}),new D().i(Qp,`scala.collection.immutable.ArraySeq$ofInt`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function em(e){this.ax=null,this.ax=e}C=em.prototype=new Vp,C.constructor=em;function tm(){}tm.prototype=C,C.j=(function(){return this.ax.a.length}),C.o=(function(){var e=z();return e.eh(this.ax,e.t)}),C.i=(function(e){return e instanceof em?M().eu(this.ax,e.ax):Z(this,e)}),C.m=(function(){return new Jf(this.ax)}),C.bi=(function(e){return this.ax.a[e]}),C.f=(function(e){return this.bi(e|0)}),C.n=(function(e){return this.bi(e)}),new D().i(em,`scala.collection.immutable.ArraySeq$ofLong`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function nm(e){this.ay=null,this.ay=e}C=nm.prototype=new Vp,C.constructor=nm;function rm(){}rm.prototype=C,C.j=(function(){return this.ay.a.length}),C.n=(function(e){return this.ay.a[e]}),C.o=(function(){var e=z();return e.eb(this.ay,e.t)}),C.i=(function(e){return e instanceof nm?_c().ex(this.ay,e.ay):Z(this,e)}),C.m=(function(){return bf(new xf,this.ay)}),C.f=(function(e){return this.n(e|0)}),new D().i(nm,`scala.collection.immutable.ArraySeq$ofRef`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function im(e){this.az=null,this.az=e}C=im.prototype=new Vp,C.constructor=im;function am(){}am.prototype=C,C.j=(function(){return this.az.a.length}),C.be=(function(e){return this.az.a[e]}),C.o=(function(){var e=z();return e.ei(this.az,e.t)}),C.i=(function(e){return e instanceof im?M().ev(this.az,e.az):Z(this,e)}),C.m=(function(){return new Xf(this.az)}),C.f=(function(e){return this.be(e|0)}),C.n=(function(e){return this.be(e)}),new D().i(im,`scala.collection.immutable.ArraySeq$ofShort`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function om(e){this.aO=null,this.aO=e}C=om.prototype=new Vp,C.constructor=om;function sm(){}sm.prototype=C,C.j=(function(){return this.aO.a.length}),C.o=(function(){var e=z();return e.ej(this.aO,e.t)}),C.i=(function(e){return e instanceof om?this.aO.a.length===e.aO.a.length:Z(this,e)}),C.m=(function(){return new Qf(this.aO)}),C.bj=(function(e){}),C.f=(function(e){this.bj(e|0)}),C.n=(function(e){this.bj(e)}),new D().i(om,`scala.collection.immutable.ArraySeq$ofUnit`,{aK:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function cm(e,t,n,r){for(;;)if(t===r)return n.h()?0:1;else if(n.h())return-1;else{var i=1+t|0,a=n.L();t=i,n=a}}function lm(e,t,n){for(;;)if(t===n)return!0;else{var r=t.h(),i=n.h();if(!(r||i)&&I().K(t.V(),n.V())){var a=t.L(),o=n.L();t=a,n=o}else return r&&i}}function um(){}C=um.prototype=new Mp,C.constructor=um;function dm(){}dm.prototype=C,C.m=(function(){return new Vd(this)}),C.aV=(function(){return`LinearSeq`}),C.n=(function(e){return Rd(this,e)}),C.cE=(function(e){return zd(this,e)}),C.h=(function(){return this===Lm()}),C.gd=(function(e){if(this===Lm())return Lm();for(var t=new Mm(e.f(this.V()),Lm()),n=t,r=this.L();r!==Lm();){var i=new Mm(e.f(r.V()),Lm());n.bH=i,n=i,r=r.L()}return t}),C.aj=(function(e){for(var t=this;!t.h();)e.f(t.V()),t=t.L()}),C.j=(function(){for(var e=this,t=0;!e.h();)t=1+t|0,e=e.L();return t}),C.aS=(function(e){return e<0?1:cm(this,0,this,e)}),C.aQ=(function(){return`List`}),C.i=(function(e){return e instanceof um?lm(this,this,e):Z(this,e)}),C.f=(function(e){return Rd(this,e|0)}),C.fA=(function(e){return cp(this,e,this)}),C.eC=(function(e){return this.gd(e)});function fm(e){this.aa=null,this.aa=e}C=fm.prototype=new $,C.constructor=fm;function pm(){}pm.prototype=C,C.j=(function(){return this.aa.a.length}),C.o=(function(){var e=z();return e.ek(this.aa,e.t)}),C.i=(function(e){return e instanceof fm?M().ew(this.aa,e.aa):Q.prototype.i.call(this,e)}),C.m=(function(){return new ep(this.aa)}),C.bk=(function(e){return this.aa.a[e]}),C.f=(function(e){return this.bk(e|0)}),C.n=(function(e){return this.bk(e)}),C.T=(function(){return this.aa}),new D().i(fm,`scala.collection.mutable.ArraySeq$ofBoolean`,{aN:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function mm(e){this.ab=null,this.ab=e}C=mm.prototype=new $,C.constructor=mm;function hm(){}hm.prototype=C,C.j=(function(){return this.ab.a.length}),C.bc=(function(e){return this.ab.a[e]}),C.o=(function(){var e=z();return e.ec(this.ab,e.t)}),C.i=(function(e){return e instanceof mm?M().ep(this.ab,e.ab):Q.prototype.i.call(this,e)}),C.m=(function(){return new Rf(this.ab)}),C.f=(function(e){return this.bc(e|0)}),C.n=(function(e){return this.bc(e)}),C.T=(function(){return this.ab}),new D().i(mm,`scala.collection.mutable.ArraySeq$ofByte`,{aO:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function gm(e){this.P=null,this.P=e}C=gm.prototype=new $,C.constructor=gm;function _m(){}_m.prototype=C,C.j=(function(){return this.P.a.length}),C.bd=(function(e){return this.P.a[e]}),C.o=(function(){var e=z();return e.ed(this.P,e.t)}),C.i=(function(e){return e instanceof gm?M().eq(this.P,e.P):Q.prototype.i.call(this,e)}),C.m=(function(){return new Bf(this.P)}),C.bb=(function(e,t,n,r){var i=e.J;t.length!==0&&(i.p=``+i.p+t);var a=this.P.a.length;if(a!==0)if(n===``)i.fe(this.P);else{i.j();var o=this.P.a[0],s=``+Bn(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.P.a[c],u=``+Bn(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),C.f=(function(e){return Yn(this.bd(e|0))}),C.n=(function(e){return Yn(this.bd(e))}),C.T=(function(){return this.P}),new D().i(gm,`scala.collection.mutable.ArraySeq$ofChar`,{aP:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function vm(e){this.ac=null,this.ac=e}C=vm.prototype=new $,C.constructor=vm;function ym(){}ym.prototype=C,C.j=(function(){return this.ac.a.length}),C.o=(function(){var e=z();return e.ee(this.ac,e.t)}),C.i=(function(e){return e instanceof vm?M().er(this.ac,e.ac):Q.prototype.i.call(this,e)}),C.m=(function(){return new Hf(this.ac)}),C.bf=(function(e){return this.ac.a[e]}),C.f=(function(e){return this.bf(e|0)}),C.n=(function(e){return this.bf(e)}),C.T=(function(){return this.ac}),new D().i(vm,`scala.collection.mutable.ArraySeq$ofDouble`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function bm(e){this.ad=null,this.ad=e}C=bm.prototype=new $,C.constructor=bm;function xm(){}xm.prototype=C,C.j=(function(){return this.ad.a.length}),C.o=(function(){var e=z();return e.ef(this.ad,e.t)}),C.i=(function(e){return e instanceof bm?M().es(this.ad,e.ad):Q.prototype.i.call(this,e)}),C.m=(function(){return new Wf(this.ad)}),C.bg=(function(e){return this.ad.a[e]}),C.f=(function(e){return this.bg(e|0)}),C.n=(function(e){return this.bg(e)}),C.T=(function(){return this.ad}),new D().i(bm,`scala.collection.mutable.ArraySeq$ofFloat`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Sm(e){this.ae=null,this.ae=e}C=Sm.prototype=new $,C.constructor=Sm;function Cm(){}Cm.prototype=C,C.j=(function(){return this.ae.a.length}),C.o=(function(){var e=z();return e.eg(this.ae,e.t)}),C.i=(function(e){return e instanceof Sm?M().et(this.ae,e.ae):Q.prototype.i.call(this,e)}),C.m=(function(){return new Kf(this.ae)}),C.bh=(function(e){return this.ae.a[e]}),C.f=(function(e){return this.bh(e|0)}),C.n=(function(e){return this.bh(e)}),C.T=(function(){return this.ae}),new D().i(Sm,`scala.collection.mutable.ArraySeq$ofInt`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function wm(e){this.af=null,this.af=e}C=wm.prototype=new $,C.constructor=wm;function Tm(){}Tm.prototype=C,C.j=(function(){return this.af.a.length}),C.o=(function(){var e=z();return e.eh(this.af,e.t)}),C.i=(function(e){return e instanceof wm?M().eu(this.af,e.af):Q.prototype.i.call(this,e)}),C.m=(function(){return new Jf(this.af)}),C.bi=(function(e){return this.af.a[e]}),C.f=(function(e){return this.bi(e|0)}),C.n=(function(e){return this.bi(e)}),C.T=(function(){return this.af}),new D().i(wm,`scala.collection.mutable.ArraySeq$ofLong`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Em(e){this.ag=null,this.ag=e}C=Em.prototype=new $,C.constructor=Em;function Dm(){}Dm.prototype=C,C.j=(function(){return this.ag.a.length}),C.n=(function(e){return this.ag.a[e]}),C.o=(function(){var e=z();return e.eb(this.ag,e.t)}),C.i=(function(e){return e instanceof Em?_c().ex(this.ag,e.ag):Q.prototype.i.call(this,e)}),C.m=(function(){return bf(new xf,this.ag)}),C.f=(function(e){return this.n(e|0)}),C.T=(function(){return this.ag}),new D().i(Em,`scala.collection.mutable.ArraySeq$ofRef`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Om(e){this.ah=null,this.ah=e}C=Om.prototype=new $,C.constructor=Om;function km(){}km.prototype=C,C.j=(function(){return this.ah.a.length}),C.be=(function(e){return this.ah.a[e]}),C.o=(function(){var e=z();return e.ei(this.ah,e.t)}),C.i=(function(e){return e instanceof Om?M().ev(this.ah,e.ah):Q.prototype.i.call(this,e)}),C.m=(function(){return new Xf(this.ah)}),C.f=(function(e){return this.be(e|0)}),C.n=(function(e){return this.be(e)}),C.T=(function(){return this.ah}),new D().i(Om,`scala.collection.mutable.ArraySeq$ofShort`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Am(e){this.aA=null,this.aA=e}C=Am.prototype=new $,C.constructor=Am;function jm(){}jm.prototype=C,C.j=(function(){return this.aA.a.length}),C.o=(function(){var e=z();return e.ej(this.aA,e.t)}),C.i=(function(e){return e instanceof Am?this.aA.a.length===e.aA.a.length:Q.prototype.i.call(this,e)}),C.m=(function(){return new Qf(this.aA)}),C.bj=(function(e){}),C.f=(function(e){this.bj(e|0)}),C.n=(function(e){this.bj(e)}),C.T=(function(){return this.aA}),new D().i(Am,`scala.collection.mutable.ArraySeq$ofUnit`,{aW:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Mm(e,t){this.cm=null,this.bH=null,this.cm=e,this.bH=t}C=Mm.prototype=new dm,C.constructor=Mm;function Nm(){}Nm.prototype=C,C.V=(function(){return this.cm}),C.am=(function(){return`::`}),C.ak=(function(){return 2}),C.al=(function(e){switch(e){case 0:return this.cm;case 1:return this.bH;default:return R().bm(e)}}),C.aU=(function(){return new qd(this)}),C.L=(function(){return this.bH}),new D().i(Mm,`scala.collection.immutable.$colon$colon`,{dz:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,X:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});function Pm(){}C=Pm.prototype=new dm,C.constructor=Pm;function Fm(){}Fm.prototype=C,C.fY=(function(){throw new dd(`head of empty list`)}),C.gS=(function(){throw new ud(`tail of empty list`)}),C.z=(function(){return 0}),C.m=(function(){return U().u}),C.am=(function(){return`Nil`}),C.ak=(function(){return 0}),C.al=(function(e){return R().bm(e)}),C.aU=(function(){return new qd(this)}),C.L=(function(){this.gS()}),C.V=(function(){this.fY()}),new D().i(Pm,`scala.collection.immutable.Nil$`,{dC:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,X:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});var Im;function Lm(){return Im||=new Pm,Im}function Rm(e,t){return e.J=t,e}function zm(e){return Rm(e,new wu),e}function Bm(){this.J=null}C=Bm.prototype=new Lp,C.constructor=Bm;function Vm(){}Vm.prototype=C,C.aV=(function(){return`IndexedSeq`}),C.m=(function(){return new wf(new kp(this))}),C.aS=(function(e){var t=this.J.j();return t===e?0:t<e?-1:1}),C.e7=(function(e){return Oc(this,e)}),C.j=(function(){return this.J.j()}),C.z=(function(){return this.J.j()}),C.fb=(function(e){var t=this.J,n=``+Bn(e);return t.p+=n,this}),C.s=(function(){return this.J.p}),C.h=(function(){return this.J.j()===0}),C.eM=(function(){return this.J.p}),C.ct=(function(e){return this.fb(Xn(e))}),C.f=(function(e){var t=e|0;return Yn(this.J.em(t))}),C.n=(function(e){return Yn(this.J.em(e))}),new D().i(Bm,`scala.collection.mutable.StringBuilder`,{dK:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dI:1,aX:1,aZ:1,aY:1,D:1,n:1,o:1,E:1,a4:1,a:1});function Hm(e,t){return e.aB=t,e}function Um(e){return Hm(e,[]),e}function Wm(){this.aB=null}C=Wm.prototype=new zp,C.constructor=Wm;function Gm(){}Gm.prototype=C,C.aV=(function(){return`IndexedSeq`}),C.m=(function(){return new wf(new kp(this))}),C.aS=(function(e){var t=this.aB.length|0;return t===e?0:t<e?-1:1}),C.n=(function(e){return this.aB[e]}),C.j=(function(){return this.aB.length|0}),C.z=(function(){return this.aB.length|0}),C.aQ=(function(){return`WrappedArray`}),C.eM=(function(){return this}),C.ct=(function(e){return this.aB.push(e),this}),C.f=(function(e){var t=e|0;return this.aB[t]}),new D().i(Wm,`scala.scalajs.js.WrappedArray`,{eb:1,dD:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dF:1,aZ:1,aY:1,dJ:1,q:1,p:1,D:1,n:1,o:1,E:1,dH:1,aX:1,a:1}),An=new N(0,0),lr.z=An,ya(new(ff.r()).C([]));