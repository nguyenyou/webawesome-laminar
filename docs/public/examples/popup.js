var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function r(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&i(t)})}function i(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=[...t.elements];if(n.length===1){t.requestSubmit(null);return}let r=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));r&&([`input`,`button`].includes(r.localName)?t.requestSubmit(r):r.click())}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var a=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
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
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`,o=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,l=e=>{throw TypeError(e)},u=(e,t,n,r)=>{for(var i=r>1?void 0:r?c(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&s(t,n,i),i},d=(e,t,n)=>t.has(e)||l(`Cannot `+n),f=(e,t,n)=>(d(e,t,`read from private field`),n?n.call(e):t.get(e)),p=(e,t,n)=>t.has(e)?l(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),m=(e,t,n,r)=>(d(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const h=globalThis,g=h.ShadowRoot&&(h.ShadyCSS===void 0||h.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,_=Symbol(),v=new WeakMap;var y=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==_)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(g&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=v.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&v.set(t,e))}return e}toString(){return this.cssText}};const b=e=>new y(typeof e==`string`?e:e+``,void 0,_),ee=(e,t)=>{if(g)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=h.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},te=g?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return b(t)})(e):e,{is:x,defineProperty:ne,getOwnPropertyDescriptor:re,getOwnPropertyNames:ie,getOwnPropertySymbols:ae,getPrototypeOf:oe}=Object,se=globalThis,S=se.trustedTypes,ce=S?S.emptyScript:``,C=se.reactiveElementPolyfillSupport,le=(e,t)=>e,ue={toAttribute(e,t){switch(t){case Boolean:e=e?ce:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},de=(e,t)=>!x(e,t),fe={attribute:!0,type:String,converter:ue,reflect:!1,useDefault:!1,hasChanged:de};Symbol.metadata??=Symbol(`metadata`),se.litPropertyMetadata??=new WeakMap;var pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ne(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=re(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??fe}static _$Ei(){if(this.hasOwnProperty(le(`elementProperties`)))return;let e=oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(le(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(le(`properties`))){let e=this.properties,t=[...ie(e),...ae(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(te(e))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ue:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ue:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??de)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};pe.elementStyles=[],pe.shadowRootOptions={mode:`open`},pe[le(`elementProperties`)]=new Map,pe[le(`finalized`)]=new Map,C?.({ReactiveElement:pe}),(se.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const me=globalThis,he=me.trustedTypes,ge=he?he.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_e=`$lit$`,ve=`lit$${Math.random().toFixed(9).slice(2)}$`,ye=`?`+ve,be=`<${ye}>`,xe=document,Se=()=>xe.createComment(``),Ce=e=>e===null||typeof e!=`object`&&typeof e!=`function`,we=Array.isArray,Te=e=>we(e)||typeof e?.[Symbol.iterator]==`function`,Ee=`[ 	
\f\r]`,De=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,w=/-->/g,Oe=/>/g,ke=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ae=/'/g,je=/"/g,Me=/^(?:script|style|textarea|title)$/i,T=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ne=Symbol.for(`lit-noChange`),Pe=Symbol.for(`lit-nothing`),Fe=new WeakMap,Ie=xe.createTreeWalker(xe,129);function Le(e,t){if(!we(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ge===void 0?t:ge.createHTML(t)}const Re=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=De;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===De?c[1]===`!--`?o=w:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=ke):(Me.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=ke):o=Oe:o===ke?c[0]===`>`?(o=i??De,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?ke:c[3]===`"`?je:Ae):o===je||o===Ae?o=ke:o===w||o===Oe?o=De:(o=ke,i=void 0);let d=o===ke&&e[t+1].startsWith(`/>`)?` `:``;a+=o===De?n+be:l>=0?(r.push(s),n.slice(0,l)+_e+n.slice(l)+ve+d):n+ve+(l===-2?t:d)}return[Le(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var ze=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Re(t,n);if(this.el=e.createElement(l,r),Ie.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ie.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_e)){let t=u[o++],n=i.getAttribute(e).split(ve),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?We:r[1]===`?`?Ge:r[1]===`@`?E:Ue}),i.removeAttribute(e)}else e.startsWith(ve)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Me.test(i.tagName)){let e=i.textContent.split(ve),t=e.length-1;if(t>0){i.textContent=he?he.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Se()),Ie.nextNode(),c.push({type:2,index:++a});i.append(e[t],Se())}}}else if(i.nodeType===8)if(i.data===ye)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ve,e+1))!==-1;)c.push({type:7,index:a}),e+=ve.length-1}a++}}static createElement(e,t){let n=xe.createElement(`template`);return n.innerHTML=e,n}};function Be(e,t,n=e,r){if(t===Ne)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ce(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Be(e,i._$AS(e,t.values),i,r)),t}var Ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??xe).importNode(t,!0);Ie.currentNode=r;let i=Ie.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new He(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ke(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ie.nextNode(),a++)}return Ie.currentNode=xe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},He=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Be(this,e,t),Ce(e)?e===Pe||e==null||e===``?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Te(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Pe&&Ce(this._$AH)?this._$AA.nextSibling.data=e:this.T(xe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=ze.createElement(Le(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ve(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Fe.get(e.strings);return t===void 0&&Fe.set(e.strings,t=new ze(e)),t}k(t){we(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Se()),this.O(Se()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Pe}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Be(this,e,t,0),a=!Ce(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Be(this,r[n+o],t,o),s===Ne&&(s=this._$AH[o]),a||=!Ce(s)||s!==this._$AH[o],s===Pe?e=Pe:e!==Pe&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},We=class extends Ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Pe?void 0:e}},Ge=class extends Ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Pe)}},E=class extends Ue{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Be(this,e,t,0)??Pe)===Ne)return;let n=this._$AH,r=e===Pe&&n!==Pe||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Pe&&(n===Pe||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ke=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Be(this,e)}};const qe={M:_e,P:ve,A:ye,C:1,L:Re,R:Ve,D:Te,V:Be,I:He,H:Ue,N:Ge,U:E,B:We,F:Ke},Je=me.litHtmlPolyfillSupport;Je?.(ze,He),(me.litHtmlVersions??=[]).push(`3.3.1`);const Ye=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new He(t.insertBefore(Se(),e),e,void 0,n??{})}return i._$AI(e),i},Xe=globalThis;var Ze=class extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};Ze._$litElement$=!0,Ze.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:Ze});const Qe=Xe.litElementPolyfillSupport;Qe?.({LitElement:Ze}),(Xe.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const $e=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},et={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:de},tt=(e=et,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function D(e){return(t,n)=>typeof n==`object`?tt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function nt(e){return D({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const rt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return rt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return rt(n,r,{get(){return a(this)}})}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var at=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,ot,st=class extends Ze{constructor(){super(),p(this,ot,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[at,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?b(e):e)}attributeChangedCallback(e,t,n){f(this,ot)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),m(this,ot,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ot=new WeakMap,u([D()],st.prototype,`dir`,2),u([D()],st.prototype,`lang`,2),u([D({type:Boolean,reflect:!0,attribute:`did-ssr`})],st.prototype,`didSSR`,2);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ct=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},lt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),ut=class extends st{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new ct))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[lt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};ut.formAssociated=!0,u([D({reflect:!0})],ut.prototype,`name`,2),u([D({type:Boolean})],ut.prototype,`disabled`,2),u([D({state:!0,attribute:!1})],ut.prototype,`valueHasChanged`,2),u([D({state:!0,attribute:!1})],ut.prototype,`hasInteracted`,2),u([D({attribute:`custom-error`,reflect:!0})],ut.prototype,`customError`,2),u([D({attribute:!1,state:!0,type:Object})],ut.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var dt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},ft=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;const pt=new Set,mt=new Map;let ht,gt=`ltr`,_t=`en`;const vt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(vt){let e=new MutationObserver(bt);gt=document.documentElement.dir||`ltr`,_t=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function yt(...e){e.map(e=>{let t=e.$code.toLowerCase();mt.has(t)?mt.set(t,Object.assign(Object.assign({},mt.get(t)),e)):mt.set(t,e),ht||=e}),bt()}function bt(){vt&&(gt=document.documentElement.dir||`ltr`,_t=document.documentElement.lang||navigator.language),[...pt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var xt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){pt.add(this.host)}hostDisconnected(){pt.delete(this.host)}dir(){return`${this.host.dir||gt}`.toLowerCase()}lang(){return`${this.host.lang||_t}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:mt.get(`${n}-${r}`),secondary:mt.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&ht&&ht[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(ht&&ht[e])i=ht[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},St={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};yt(St);var Ct=St,wt=class extends xt{};yt(Ct);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Tt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Et={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Dt=e=>(...t)=>({_$litDirective$:e,values:t});var Ot=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const kt=Dt(class extends Ot{constructor(e){if(super(e),e.type!==Et.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ne}}),At=e=>e??Pe,{I:jt}=qe,Mt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Nt=e=>e.strings===void 0,Pt={},Ft=(e,t=Pt)=>e._$AH=t,It=Dt(class extends Ot{constructor(e){if(super(e),e.type!==Et.PROPERTY&&e.type!==Et.ATTRIBUTE&&e.type!==Et.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Nt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ne||t===Pe)return t;let n=e.element,r=e.name;if(e.type===Et.PROPERTY){if(t===n[r])return Ne}else if(e.type===Et.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ne}else if(e.type===Et.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ne;return Ft(e),t}});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Lt=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
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
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  background-color: var(--wa-form-control-background-color);
  box-shadow: var(--box-shadow);
  padding: 0 var(--wa-form-control-padding-inline);

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: var(--wa-transition-normal) color;
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

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
`,O=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new dt(this,`hint`,`label`),this.localize=new wt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`medium`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,o()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){r(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=this.hasUpdated&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return T`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${n?`false`:`true`}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
          title=${this.title}
          name=${At(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${At(this.placeholder)}
          minlength=${At(this.minlength)}
          maxlength=${At(this.maxlength)}
          min=${At(this.min)}
          max=${At(this.max)}
          step=${At(this.step)}
          .value=${It(this.value??``)}
          autocapitalize=${At(this.autocapitalize)}
          autocomplete=${At(this.autocomplete)}
          autocorrect=${At(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${At(this.pattern)}
          enterkeyhint=${At(this.enterkeyhint)}
          inputmode=${At(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?T`
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
        ${this.passwordToggle&&!this.disabled?T`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${this.passwordVisible?T`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:T`
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
        class=${kt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};O.css=[ft,a,Lt],O.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},u([it(`input`)],O.prototype,`input`,2),u([D()],O.prototype,`title`,2),u([D({reflect:!0})],O.prototype,`type`,2),u([nt()],O.prototype,`value`,1),u([D({attribute:`value`,reflect:!0})],O.prototype,`defaultValue`,2),u([D({reflect:!0})],O.prototype,`size`,2),u([D({reflect:!0})],O.prototype,`appearance`,2),u([D({type:Boolean,reflect:!0})],O.prototype,`pill`,2),u([D()],O.prototype,`label`,2),u([D({attribute:`hint`})],O.prototype,`hint`,2),u([D({attribute:`with-clear`,type:Boolean})],O.prototype,`withClear`,2),u([D()],O.prototype,`placeholder`,2),u([D({type:Boolean,reflect:!0})],O.prototype,`readonly`,2),u([D({attribute:`password-toggle`,type:Boolean})],O.prototype,`passwordToggle`,2),u([D({attribute:`password-visible`,type:Boolean})],O.prototype,`passwordVisible`,2),u([D({attribute:`without-spin-buttons`,type:Boolean})],O.prototype,`withoutSpinButtons`,2),u([D({reflect:!0})],O.prototype,`form`,2),u([D({type:Boolean,reflect:!0})],O.prototype,`required`,2),u([D()],O.prototype,`pattern`,2),u([D({type:Number})],O.prototype,`minlength`,2),u([D({type:Number})],O.prototype,`maxlength`,2),u([D()],O.prototype,`min`,2),u([D()],O.prototype,`max`,2),u([D()],O.prototype,`step`,2),u([D()],O.prototype,`autocapitalize`,2),u([D()],O.prototype,`autocorrect`,2),u([D()],O.prototype,`autocomplete`,2),u([D({type:Boolean})],O.prototype,`autofocus`,2),u([D()],O.prototype,`enterkeyhint`,2),u([D({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],O.prototype,`spellcheck`,2),u([D()],O.prototype,`inputmode`,2),u([D({attribute:`with-label`,type:Boolean})],O.prototype,`withLabel`,2),u([D({attribute:`with-hint`,type:Boolean})],O.prototype,`withHint`,2),u([Tt(`step`,{waitUntilFirstUpdate:!0})],O.prototype,`handleStepChange`,1),O=u([$e(`wa-input`)],O);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Rt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},zt=``;function Bt(e){zt=e}function Vt(){if(!zt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Bt(e.getAttribute(`data-fa-kit-code`)||``)}return zt}var Ht=`7.0.1`;function Ut(e,t,n){let r=Vt(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${Ht}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${Ht}/svgs/${a}/${e}.svg`)}var Wt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Ut(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Gt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Kt={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},qt={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Kt[n][e]??Kt.regular[e]??Kt.regular[`circle-question`];return r?Gt(r):``}},Jt=`classic`,Yt=[Wt,qt],Xt=[];function Zt(e){Xt.push(e)}function Qt(e){Xt=Xt.filter(t=>t!==e)}function $t(e){return Yt.find(t=>t.name===e)}function en(){return Jt}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var tn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},nn=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.125em;
}

/* Standard */
:host(:not([auto-width])) {
  width: 1.25em;
  height: 1em;
}

/* Auto-width */
:host([auto-width]) {
  width: auto;
  height: 1em;
}

svg {
  height: 1em;
  fill: currentColor;
  overflow: visible;

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
`,rn=Symbol(),an=Symbol(),on,sn=new Map,cn=class extends st{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?rn:an}catch{return an}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return rn;on||=new DOMParser;let r=on.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):rn}catch{return rn}}}connectedCallback(){super.connectedCallback(),Zt(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Qt(this)}getIconSource(){let e=$t(this.library),t=this.family||en();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?$t(this.library):void 0;if(!e){this.svg=null;return}let r=sn.get(e);r||(r=this.resolveIcon(e,n),sn.set(e,r));let i=await r;if(i===an&&sn.delete(e),e===this.getIconSource().url){if(Mt(i)){this.svg=i;return}switch(i){case an:case rn:this.svg=null,this.dispatchEvent(new tn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Rt)}}}updated(e){super.updated(e);let t=$t(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:T`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};cn.css=nn,u([nt()],cn.prototype,`svg`,2),u([D({reflect:!0})],cn.prototype,`name`,2),u([D({reflect:!0})],cn.prototype,`family`,2),u([D({reflect:!0})],cn.prototype,`variant`,2),u([D({attribute:`auto-width`,type:Boolean,reflect:!0})],cn.prototype,`autoWidth`,2),u([D({attribute:`swap-opacity`,type:Boolean,reflect:!0})],cn.prototype,`swapOpacity`,2),u([D()],cn.prototype,`src`,2),u([D()],cn.prototype,`label`,2),u([D({reflect:!0})],cn.prototype,`library`,2),u([Tt(`label`)],cn.prototype,`handleLabelChange`,1),u([Tt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],cn.prototype,`setIcon`,1),cn=u([$e(`wa-icon`)],cn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ln=t({default:()=>O});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function un(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>un(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return un(n,--t)}return t>-1?un(e,--t):e.textContent??``}return n.hasChildNodes()?un(n.childNodes,--t):``}var dn=`:host {
  display: block;
  color: var(--wa-color-text-normal);
  -webkit-user-select: none;
  user-select: none;

  position: relative;
  display: flex;
  align-items: center;
  font: inherit;
  padding: 0.5em 1em 0.5em 0.25em;
  line-height: var(--wa-line-height-condensed);
  transition: fill var(--wa-transition-normal) var(--wa-transition-easing);
  cursor: pointer;
}

:host(:focus) {
  outline: none;
}

@media (hover: hover) {
  :host(:not([disabled], :state(current)):is(:state(hover), :hover)) {
    background-color: var(--wa-color-neutral-fill-normal);
    color: var(--wa-color-neutral-on-normal);
  }
}

:host(:state(current)),
:host([disabled]:state(current)) {
  background-color: var(--wa-color-brand-fill-loud);
  color: var(--wa-color-brand-on-loud);
  opacity: 1;
}

:host([disabled]) {
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
`,fn=class extends st{constructor(){super(...arguments),this.localize=new wt(this),this.isInitialized=!1,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.defaultLabel=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:(this.defaultLabel||this.updateDefaultLabel(),this.defaultLabel)}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover),this.updateDefaultLabel()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){this.updateDefaultLabel(),this.isInitialized?customElements.whenDefined(`wa-select`).then(()=>{let e=this.closest(`wa-select`);e&&(e.handleDefaultSlotChange(),e.selectionChanged?.())}):this.isInitialized=!0}willUpdate(e){if(e.has(`defaultSelected`)&&!this.closest(`wa-select`)?.hasInteracted){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}super.willUpdate(e)}updated(e){super.updated(e),e.has(`disabled`)&&this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected),this.handleDefaultSlotChange()),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current)}updateDefaultLabel(){let e=this.defaultLabel;this.defaultLabel=un(this).trim();let t=this.defaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){return T`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};fn.css=dn,u([it(`.label`)],fn.prototype,`defaultSlot`,2),u([nt()],fn.prototype,`current`,2),u([D({reflect:!0})],fn.prototype,`value`,2),u([D({type:Boolean})],fn.prototype,`disabled`,2),u([D({type:Boolean,attribute:!1})],fn.prototype,`selected`,2),u([D({type:Boolean,attribute:`selected`})],fn.prototype,`defaultSelected`,2),u([D()],fn.prototype,`label`,1),u([nt()],fn.prototype,`defaultLabel`,2),fn=u([$e(`wa-option`)],fn);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var pn=t({default:()=>fn}),mn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}};const hn=Math.min,gn=Math.max,_n=Math.round,vn=Math.floor,yn=e=>({x:e,y:e}),bn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},xn={start:`end`,end:`start`};function Sn(e,t,n){return gn(e,hn(t,n))}function Cn(e,t){return typeof e==`function`?e(t):e}function wn(e){return e.split(`-`)[0]}function Tn(e){return e.split(`-`)[1]}function En(e){return e===`x`?`y`:`x`}function Dn(e){return e===`y`?`height`:`width`}const On=new Set([`top`,`bottom`]);function kn(e){return On.has(wn(e))?`y`:`x`}function An(e){return En(kn(e))}function jn(e,t,n){n===void 0&&(n=!1);let r=Tn(e),i=An(e),a=Dn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Bn(o)),[o,Bn(o)]}function Mn(e){let t=Bn(e);return[Nn(e),t,Nn(t)]}function Nn(e){return e.replace(/start|end/g,e=>xn[e])}const Pn=[`left`,`right`],Fn=[`right`,`left`],In=[`top`,`bottom`],Ln=[`bottom`,`top`];function Rn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Fn:Pn:t?Pn:Fn;case`left`:case`right`:return t?In:Ln;default:return[]}}function zn(e,t,n,r){let i=Tn(e),a=Rn(wn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Nn)))),a}function Bn(e){return e.replace(/left|right|bottom|top/g,e=>bn[e])}function Vn(e){return{top:0,right:0,bottom:0,left:0,...e}}function Hn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Vn(e)}function Un(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Wn(e,t,n){let{reference:r,floating:i}=e,a=kn(t),o=An(t),s=Dn(o),c=wn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Tn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const Gn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Wn(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Wn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function Kn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Cn(t,e),p=Hn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Un(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Un(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const qn=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Cn(e,t)||{};if(l==null)return{};let d=Hn(u),f={x:n,y:r},p=An(i),m=Dn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ee=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let ne=b/2-ee/2,re=x/2-h[m]/2-1,ie=hn(d[_],re),ae=hn(d[v],re),oe=ie,se=x-h[m]-ae,S=x/2-h[m]/2+ne,ce=Sn(oe,S,se),C=!c.arrow&&Tn(i)!=null&&S!==ce&&a.reference[m]/2-(S<oe?ie:ae)-h[m]/2<0,le=C?S<oe?S-oe:S-se:0;return{[p]:f[p]+le,data:{[p]:ce,centerOffset:S-ce-le,...C&&{alignmentOffset:le}},reset:C}}}),Jn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Cn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=wn(r),_=kn(o),v=wn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Bn(o)]:Mn(o)),ee=p!==`none`;!d&&ee&&b.push(...zn(o,m,p,y));let te=[o,...b],x=await Kn(t,h),ne=[],re=i.flip?.overflows||[];if(l&&ne.push(x[g]),u){let e=jn(r,a,y);ne.push(x[e[0]],x[e[1]])}if(re=[...re,{placement:r,overflows:ne}],!ne.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==kn(t))||re.every(e=>kn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:re},reset:{placement:t}};let n=re.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=re.filter(e=>{if(ee){let t=kn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Yn=new Set([`left`,`top`]);async function Xn(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=wn(n),s=Tn(n),c=kn(n)===`y`,l=Yn.has(o)?-1:1,u=a&&c?-1:1,d=Cn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Zn=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Xn(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Qn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Cn(e,t),l={x:n,y:r},u=await Kn(t,c),d=kn(wn(i)),f=En(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Sn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Sn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},$n=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Cn(e,t),u=await Kn(t,l),d=wn(i),f=Tn(i),p=kn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=hn(h-u[g],v),ee=hn(m-u[_],y),te=!t.middlewareData.shift,x=b,ne=ee;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ne=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(x=v),te&&!f){let e=gn(u.left,0),t=gn(u.right,0),n=gn(u.top,0),r=gn(u.bottom,0);p?ne=m-2*(e!==0||t!==0?e+t:gn(u.left,u.right)):x=h-2*(n!==0||r!==0?n+r:gn(u.top,u.bottom))}await c({...t,availableWidth:ne,availableHeight:x});let re=await o.getDimensions(s.floating);return m!==re.width||h!==re.height?{reset:{rects:!0}}:{}}}};function er(){return typeof window<`u`}function tr(e){return ir(e)?(e.nodeName||``).toLowerCase():`#document`}function nr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rr(e){return((ir(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function ir(e){return er()?e instanceof Node||e instanceof nr(e).Node:!1}function ar(e){return er()?e instanceof Element||e instanceof nr(e).Element:!1}function or(e){return er()?e instanceof HTMLElement||e instanceof nr(e).HTMLElement:!1}function sr(e){return!er()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof nr(e).ShadowRoot}const cr=new Set([`inline`,`contents`]);function lr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Sr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!cr.has(i)}const ur=new Set([`table`,`td`,`th`]);function dr(e){return ur.has(tr(e))}const fr=[`:popover-open`,`:modal`];function pr(e){return fr.some(t=>{try{return e.matches(t)}catch{return!1}})}const mr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],hr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],gr=[`paint`,`layout`,`strict`,`content`];function _r(e){let t=yr(),n=ar(e)?Sr(e):e;return mr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||hr.some(e=>(n.willChange||``).includes(e))||gr.some(e=>(n.contain||``).includes(e))}function vr(e){let t=wr(e);for(;or(t)&&!xr(t);){if(_r(t))return t;if(pr(t))return null;t=wr(t)}return null}function yr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const br=new Set([`html`,`body`,`#document`]);function xr(e){return br.has(tr(e))}function Sr(e){return nr(e).getComputedStyle(e)}function Cr(e){return ar(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function wr(e){if(tr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||sr(e)&&e.host||rr(e);return sr(t)?t.host:t}function Tr(e){let t=wr(e);return xr(t)?e.ownerDocument?e.ownerDocument.body:e.body:or(t)&&lr(t)?t:Tr(t)}function Er(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Tr(e),i=r===e.ownerDocument?.body,a=nr(r);if(i){let e=Dr(a);return t.concat(a,a.visualViewport||[],lr(r)?r:[],e&&n?Er(e):[])}return t.concat(r,Er(r,[],n))}function Dr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Or(e){let t=Sr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=or(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=_n(n)!==a||_n(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function kr(e){return ar(e)?e:e.contextElement}function Ar(e){let t=kr(e);if(!or(t))return yn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Or(t),o=(a?_n(n.width):n.width)/r,s=(a?_n(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const jr=yn(0);function Mr(e){let t=nr(e);return!yr()||!t.visualViewport?jr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Nr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==nr(e)?!1:t}function Pr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=kr(e),o=yn(1);t&&(r?ar(r)&&(o=Ar(r)):o=Ar(e));let s=Nr(a,n,r)?Mr(a):yn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=nr(a),t=r&&ar(r)?nr(r):r,n=e,i=Dr(n);for(;i&&r&&t!==n;){let e=Ar(i),t=i.getBoundingClientRect(),r=Sr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=nr(i),i=Dr(n)}}return Un({width:u,height:d,x:c,y:l})}function Fr(e,t){let n=Cr(e).scrollLeft;return t?t.left+n:Pr(rr(e)).left+n}function Ir(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Fr(e,n),y:n.top+t.scrollTop}}function Lr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=rr(r),s=t?pr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=yn(1),u=yn(0),d=or(r);if((d||!d&&!a)&&((tr(r)!==`body`||lr(o))&&(c=Cr(r)),or(r))){let e=Pr(r);l=Ar(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Ir(o,c):yn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Rr(e){return Array.from(e.getClientRects())}function zr(e){let t=rr(e),n=Cr(e),r=e.ownerDocument.body,i=gn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=gn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Fr(e),s=-n.scrollTop;return Sr(r).direction===`rtl`&&(o+=gn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Br(e,t){let n=nr(e),r=rr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=yr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Fr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const Vr=new Set([`absolute`,`fixed`]);function Hr(e,t){let n=Pr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=or(e)?Ar(e):yn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Ur(e,t,n){let r;if(t===`viewport`)r=Br(e,n);else if(t===`document`)r=zr(rr(e));else if(ar(t))r=Hr(t,n);else{let n=Mr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Un(r)}function Wr(e,t){let n=wr(e);return n===t||!ar(n)||xr(n)?!1:Sr(n).position===`fixed`||Wr(n,t)}function Gr(e,t){let n=t.get(e);if(n)return n;let r=Er(e,[],!1).filter(e=>ar(e)&&tr(e)!==`body`),i=null,a=Sr(e).position===`fixed`,o=a?wr(e):e;for(;ar(o)&&!xr(o);){let t=Sr(o),n=_r(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Vr.has(i.position)||lr(o)&&!n&&Wr(e,o))?r=r.filter(e=>e!==o):i=t,o=wr(o)}return t.set(e,r),r}function Kr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?pr(t)?[]:Gr(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=Ur(t,n,i);return e.top=gn(r.top,e.top),e.right=hn(r.right,e.right),e.bottom=hn(r.bottom,e.bottom),e.left=gn(r.left,e.left),e},Ur(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function qr(e){let{width:t,height:n}=Or(e);return{width:t,height:n}}function Jr(e,t,n){let r=or(t),i=rr(t),a=n===`fixed`,o=Pr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=yn(0);function l(){c.x=Fr(i)}if(r||!r&&!a)if((tr(t)!==`body`||lr(i))&&(s=Cr(t)),r){let e=Pr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Ir(i,s):yn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Yr(e){return Sr(e).position===`static`}function Xr(e,t){if(!or(e)||Sr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return rr(e)===n&&(n=n.ownerDocument.body),n}function Zr(e,t){let n=nr(e);if(pr(e))return n;if(!or(e)){let t=wr(e);for(;t&&!xr(t);){if(ar(t)&&!Yr(t))return t;t=wr(t)}return n}let r=Xr(e,t);for(;r&&dr(r)&&Yr(r);)r=Xr(r,t);return r&&xr(r)&&Yr(r)&&!_r(r)?n:r||vr(e)||n}const Qr=async function(e){let t=this.getOffsetParent||Zr,n=this.getDimensions,r=await n(e.floating);return{reference:Jr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function $r(e){return Sr(e).direction===`rtl`}const ei={convertOffsetParentRelativeRectToViewportRelativeRect:Lr,getDocumentElement:rr,getClippingRect:Kr,getOffsetParent:Zr,getElementRects:Qr,getClientRects:Rr,getDimensions:qr,getScale:Ar,isElement:ar,isRTL:$r};function ti(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ni(e,t){let n=null,r,i=rr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=vn(d),h=vn(i.clientWidth-(u+f)),g=vn(i.clientHeight-(d+p)),_=vn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:gn(0,hn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!ti(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function ri(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=kr(e),u=i||a?[...l?Er(l):[],...Er(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ni(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Pr(e):null;c&&g();function g(){let t=Pr(e);h&&!ti(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ii=Zn,ai=Qn,oi=Jn,si=$n,ci=qn,li=(e,t,n)=>{let r=new Map,i={platform:ei,...n},a={...i.platform,_c:r};return Gn(e,t,{...i,platform:a})};function ui(e){return fi(e)}function di(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function fi(e){for(let t=e;t;t=di(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=di(e);t;t=di(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||_r(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var pi=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

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
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
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
`;function mi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var hi=globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),gi=class extends st{constructor(){super(...arguments),this.localize=new wt(this),this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||mi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||(this.popup.showPopover?.(),this.cleanup=ri(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[ii({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(si({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;hi&&!mi(this.anchor)&&this.boundary===`scroll`&&(t=Er(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(oi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ai({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(si({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(ci({element:this.arrowEl,padding:this.arrowPadding}));let n=hi?e=>ei.getOffsetParent(e,ui):ei.getOffsetParent;li(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:hi?`absolute`:`fixed`,platform:{...ei,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new mn)}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${kt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${kt({popup:!0,"popup-active":this.active,"popup-fixed":!hi,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};gi.css=pi,u([it(`.popup`)],gi.prototype,`popup`,2),u([it(`.arrow`)],gi.prototype,`arrowEl`,2),u([D()],gi.prototype,`anchor`,2),u([D({type:Boolean,reflect:!0})],gi.prototype,`active`,2),u([D({reflect:!0})],gi.prototype,`placement`,2),u([D()],gi.prototype,`boundary`,2),u([D({type:Number})],gi.prototype,`distance`,2),u([D({type:Number})],gi.prototype,`skidding`,2),u([D({type:Boolean})],gi.prototype,`arrow`,2),u([D({attribute:`arrow-placement`})],gi.prototype,`arrowPlacement`,2),u([D({attribute:`arrow-padding`,type:Number})],gi.prototype,`arrowPadding`,2),u([D({type:Boolean})],gi.prototype,`flip`,2),u([D({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],gi.prototype,`flipFallbackPlacements`,2),u([D({attribute:`flip-fallback-strategy`})],gi.prototype,`flipFallbackStrategy`,2),u([D({type:Object})],gi.prototype,`flipBoundary`,2),u([D({attribute:`flip-padding`,type:Number})],gi.prototype,`flipPadding`,2),u([D({type:Boolean})],gi.prototype,`shift`,2),u([D({type:Object})],gi.prototype,`shiftBoundary`,2),u([D({attribute:`shift-padding`,type:Number})],gi.prototype,`shiftPadding`,2),u([D({attribute:`auto-size`})],gi.prototype,`autoSize`,2),u([D()],gi.prototype,`sync`,2),u([D({type:Object})],gi.prototype,`autoSizeBoundary`,2),u([D({attribute:`auto-size-padding`,type:Number})],gi.prototype,`autoSizePadding`,2),u([D({attribute:`hover-bridge`,type:Boolean})],gi.prototype,`hoverBridge`,2),gi=u([$e(`wa-popup`)],gi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var _i=t({default:()=>gi});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function vi(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function yi(e,t,n=`vertical`,r=`smooth`){let i=vi(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var bi=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||=Object.assign(document.createElement(`input`),{required:!0}),n||=`value`;let r={observedAttributes:[`required`],message:t.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},xi=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Si=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Ci=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},wi=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function Ti(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Ei(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.remove(t),e.classList.add(t);let a=()=>{e.classList.remove(t),n(),r.abort()};e.addEventListener(`animationend`,a,{once:!0,signal:i}),e.addEventListener(`animationcancel`,a,{once:!0,signal:i})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Di=class extends Ot{constructor(e){if(super(e),this.it=Pe,e.type!==Et.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===Pe||e==null)return this._t=void 0,this.it=e;if(e===Ne)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Di.directiveName=`unsafeHTML`,Di.resultType=1;const Oi=Dt(Di);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var ki=`:host {
  --tag-max-size: 10ch;
  --show-duration: 100ms;
  --hide-duration: 100ms;
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
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
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
  width: 100%;
  transition:
    background-color var(--wa-transition-normal),
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);

  :host([multiple]) .select:not(.placeholder-visible) & {
    padding-inline-start: 0;
    padding-block: calc(var(--wa-form-control-height) * 0.1 - var(--wa-form-control-border-width));
  }

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

/* Visually hide the display input when multiple is enabled */
:host([multiple]) .select:not(.placeholder-visible) .display-input {
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
  margin-inline-start: 0.25em;
  gap: 0.25em;

  &::slotted(wa-tag) {
    cursor: pointer !important;
  }

  .disabled &,
  .disabled &::slotted(wa-tag) {
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

:host([multiple]) .start::slotted(*) {
  margin-inline: var(--wa-form-control-padding-inline);
}

/* Clear button */
[part~='clear-button'] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: color var(--wa-transition-normal);
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

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
  transition: rotate var(--wa-transition-slow) ease;
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
  padding-block: 0.5em;
  padding-inline: 0;
  overflow: auto;
  overscroll-behavior: none;

  /* Make sure it adheres to the popup's auto size */
  max-width: var(--auto-size-available-width);
  max-height: var(--auto-size-available-height);

  &::slotted(wa-divider) {
    --spacing: 0.5em;
  }
}

slot:not([name])::slotted(small) {
  display: block;
  font-size: var(--wa-font-size-smaller);
  font-weight: var(--wa-font-weight-semibold);
  color: var(--wa-color-text-quiet);
  padding-block: 0.5em;
  padding-inline: 2.25em;
}
`,k=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new dt(this,`hint`,`label`),this.localize=new wt(this),this.typeToSelectString=``,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.form=null,this.required=!1,this.getTag=e=>T`
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
        >
          ${e.label}
        </wa-tag>
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[bi({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]),this._value=e??null,this.value!==t&&(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),e==null?this.optionValues=new Set(null):this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}connectedCallback(){super.connectedCallback(),this.handleDefaultSlotChange(),this.open=!1}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.value!==null&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions();this.optionValues=void 0,this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;let n=t;if(!n){let t=e.target.closest(`wa-tag[part~=tag]`);if(t){let e=this.shadowRoot?.querySelector(`[part="tags"]`);if(e){let r=Array.from(e.children).indexOf(t);r>=0&&r<this.selectedOptions.length&&(n=this.selectedOptions[r])}}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this?.querySelectorAll?[...this.querySelectorAll(`wa-option`)]:[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected});let e=new Set(this.selectedOptions.map(e=>e.value));if(e.size>0||this._value){let t=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...e),this.requestUpdate(`value`,t)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?Oi(n):n:null}else if(t===this.maxOptionsVisible)return T`
          <wa-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
            >+${this.selectedOptions.length-t}</wa-tag
          >
        `;return null})}updated(e){super.updated(e),e.has(`value`)&&this.customStates.set(`blank`,!this.value)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new wi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Ei(this.popup.popup,`show`),this.currentOption&&yi(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new Si)}else{let e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Ei(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new xi)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Ti(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Ti(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasUpdated?this.hasSlotController.test(`label`):this.withLabel,t=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&this.value&&this.value.length>0,a=!!(this.placeholder&&(!this.value||this.value.length===0));return T`
      <div
        part="form-control"
        class=${kt({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class="label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${kt({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple,"placeholder-visible":a})}
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
              ${this.multiple&&this.hasUpdated?T`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?T`
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
          class=${kt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};k.css=[ki,a,ft],u([it(`.select`)],k.prototype,`popup`,2),u([it(`.combobox`)],k.prototype,`combobox`,2),u([it(`.display-input`)],k.prototype,`displayInput`,2),u([it(`.value-input`)],k.prototype,`valueInput`,2),u([it(`.listbox`)],k.prototype,`listbox`,2),u([nt()],k.prototype,`displayLabel`,2),u([nt()],k.prototype,`currentOption`,2),u([nt()],k.prototype,`selectedOptions`,2),u([nt()],k.prototype,`optionValues`,2),u([D()],k.prototype,`name`,2),u([D({attribute:!1})],k.prototype,`defaultValue`,1),u([D({attribute:`value`,reflect:!1})],k.prototype,`value`,1),u([D({reflect:!0})],k.prototype,`size`,2),u([D()],k.prototype,`placeholder`,2),u([D({type:Boolean,reflect:!0})],k.prototype,`multiple`,2),u([D({attribute:`max-options-visible`,type:Number})],k.prototype,`maxOptionsVisible`,2),u([D({type:Boolean})],k.prototype,`disabled`,2),u([D({attribute:`with-clear`,type:Boolean})],k.prototype,`withClear`,2),u([D({type:Boolean,reflect:!0})],k.prototype,`open`,2),u([D({reflect:!0})],k.prototype,`appearance`,2),u([D({type:Boolean,reflect:!0})],k.prototype,`pill`,2),u([D()],k.prototype,`label`,2),u([D({reflect:!0})],k.prototype,`placement`,2),u([D({attribute:`hint`})],k.prototype,`hint`,2),u([D({attribute:`with-label`,type:Boolean})],k.prototype,`withLabel`,2),u([D({attribute:`with-hint`,type:Boolean})],k.prototype,`withHint`,2),u([D({reflect:!0})],k.prototype,`form`,2),u([D({type:Boolean,reflect:!0})],k.prototype,`required`,2),u([D({attribute:!1})],k.prototype,`getTag`,2),u([Tt(`disabled`,{waitUntilFirstUpdate:!0})],k.prototype,`handleDisabledChange`,1),u([Tt(`value`,{waitUntilFirstUpdate:!0})],k.prototype,`handleValueChange`,1),u([Tt(`open`,{waitUntilFirstUpdate:!0})],k.prototype,`handleOpenChange`,1),k=u([$e(`wa-select`)],k);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ai=`@layer wa-utilities {
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
}
`,ji=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Mi=`@layer wa-component {
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
  color: inherit;
  line-height: 1;
}

[part='remove-button']::part(base) {
  padding: 0;
  height: 1em;
  width: 1em;
}

@media (hover: hover) {
  :host(:hover) > [part='remove-button']::part(base) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }
}

:host(:active) > [part='remove-button']::part(base) {
  color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
}

/*
 * Pill modifier
 */
:host([pill]) {
  border-radius: var(--wa-border-radius-pill);
}
`,Ni=class extends st{constructor(){super(...arguments),this.localize=new wt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`medium`,this.pill=!1,this.withRemove=!1}handleRemoveClick(){this.dispatchEvent(new ji)}render(){return T`
      <slot part="content" class="content"></slot>

      ${this.withRemove?T`
            <wa-button
              part="remove-button"
              exportparts="base:remove-button__base"
              class="remove"
              appearance="plain"
              @click=${this.handleRemoveClick}
              tabindex="-1"
            >
              <wa-icon name="xmark" library="system" variant="solid" label=${this.localize.term(`remove`)}></wa-icon>
            </wa-button>
          `:``}
    `}};Ni.css=[Mi,Ai,ft],u([D({reflect:!0})],Ni.prototype,`variant`,2),u([D({reflect:!0})],Ni.prototype,`appearance`,2),u([D({reflect:!0})],Ni.prototype,`size`,2),u([D({type:Boolean,reflect:!0})],Ni.prototype,`pill`,2),u([D({attribute:`with-remove`,type:Boolean})],Ni.prototype,`withRemove`,2),Ni=u([$e(`wa-tag`)],Ni);
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Pi=Symbol.for(``),Fi=e=>{if(e?.r===Pi)return e?._$litStatic$},Ii=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Pi}),Li=new Map,Ri=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Fi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Li.get(e))===void 0&&(o.raw=o,Li.set(e,t=o)),n=s}return e(t,...n)})(T);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var zi=`@layer wa-component {
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
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance='plain']) {
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
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
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

.button.is-icon-button:has(wa-icon) {
  width: auto;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
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
    visibility: hidden;
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

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,Bi=class extends ut{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new dt(this,`[default]`,`start`,`end`),this.localize=new wt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,o()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new ct)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Ii`a`:Ii`button`;return Ri`
      <${t}
        part="base"
        class=${kt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${At(e?void 0:this.disabled)}
        type=${At(e?void 0:this.type)}
        title=${this.title}
        name=${At(e?void 0:this.name)}
        value=${At(e?void 0:this.value)}
        href=${At(e?this.href:void 0)}
        target=${At(e?this.target:void 0)}
        download=${At(e?this.download:void 0)}
        rel=${At(e&&this.rel?this.rel:void 0)}
        role=${At(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ri`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ri`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};Bi.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},Bi.css=[zi,Ai,ft],u([it(`.button`)],Bi.prototype,`button`,2),u([it(`slot:not([name])`)],Bi.prototype,`labelSlot`,2),u([nt()],Bi.prototype,`invalid`,2),u([nt()],Bi.prototype,`isIconButton`,2),u([D()],Bi.prototype,`title`,2),u([D({reflect:!0})],Bi.prototype,`variant`,2),u([D({reflect:!0})],Bi.prototype,`appearance`,2),u([D({reflect:!0})],Bi.prototype,`size`,2),u([D({attribute:`with-caret`,type:Boolean,reflect:!0})],Bi.prototype,`withCaret`,2),u([D({type:Boolean})],Bi.prototype,`disabled`,2),u([D({type:Boolean,reflect:!0})],Bi.prototype,`loading`,2),u([D({type:Boolean,reflect:!0})],Bi.prototype,`pill`,2),u([D()],Bi.prototype,`type`,2),u([D({reflect:!0})],Bi.prototype,`name`,2),u([D({reflect:!0})],Bi.prototype,`value`,2),u([D({reflect:!0})],Bi.prototype,`href`,2),u([D()],Bi.prototype,`target`,2),u([D()],Bi.prototype,`rel`,2),u([D()],Bi.prototype,`download`,2),u([D({reflect:!0})],Bi.prototype,`form`,2),u([D({attribute:`formaction`})],Bi.prototype,`formAction`,2),u([D({attribute:`formenctype`})],Bi.prototype,`formEnctype`,2),u([D({attribute:`formmethod`})],Bi.prototype,`formMethod`,2),u([D({attribute:`formnovalidate`,type:Boolean})],Bi.prototype,`formNoValidate`,2),u([D({attribute:`formtarget`})],Bi.prototype,`formTarget`,2),u([Tt(`disabled`,{waitUntilFirstUpdate:!0})],Bi.prototype,`handleDisabledChange`,1),Bi=u([$e(`wa-button`)],Bi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Vi=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
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
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,Hi=class extends st{constructor(){super(...arguments),this.localize=new wt(this)}render(){return T`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};Hi.css=Vi,Hi=u([$e(`wa-spinner`)],Hi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ui=t({default:()=>k}),Wi=typeof window<`u`&&`ontouchstart`in window,Gi=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=e=>{let t=Wi&&`touches`in e?e.touches[0].clientX:e.clientX,n=Wi&&`touches`in e?e.touches[0].clientY:e.clientY;this.isDragging||!Wi&&e.buttons>1||(this.isDragging=!0,document.addEventListener(`pointerup`,this.handleDragStop),document.addEventListener(`pointermove`,this.handleDragMove),document.addEventListener(`touchend`,this.handleDragStop),document.addEventListener(`touchmove`,this.handleDragMove),this.options.start(t,n))},this.handleDragStop=e=>{let t=Wi&&`touches`in e?e.touches[0].clientX:e.clientX,n=Wi&&`touches`in e?e.touches[0].clientY:e.clientY;this.isDragging=!1,document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),this.options.stop(t,n)},this.handleDragMove=e=>{let t=Wi&&`touches`in e?e.touches[0].clientX:e.clientX,n=Wi&&`touches`in e?e.touches[0].clientY:e.clientY;window.getSelection()?.removeAllRanges(),this.options.move(t,n)},this.element=e,this.options={start:()=>void 0,stop:()=>void 0,move:()=>void 0,...t},this.start()}start(){this.isActive||=(this.element.addEventListener(`pointerdown`,this.handleDragStart),Wi&&this.element.addEventListener(`touchstart`,this.handleDragStart),!0)}stop(){document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),this.element.removeEventListener(`pointerdown`,this.handleDragStart),Wi&&this.element.removeEventListener(`touchstart`,this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e===void 0?!this.isActive:e)?this.start():this.stop()}};let Ki=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function qi(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function Ji(e=``){return`${e}${Ki()}`}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Yi=()=>{let e=Object.assign(document.createElement(`input`),{type:`range`,required:!0});return{observedAttributes:[`required`,`min`,`max`,`step`],checkValidity(t){let n={message:``,isValid:!0,invalidKeys:[]},r=(e,t,n,r)=>{let i=document.createElement(`input`);return i.type=`range`,i.min=String(t),i.max=String(n),i.step=String(r),i.value=String(e),i.checkValidity(),i.validationMessage};if(t.required&&!t.hasInteracted)return n.isValid=!1,n.invalidKeys.push(`valueMissing`),n.message=e.validationMessage||`Please fill out this field.`,n;if(t.isRange){let e=t.minValue,i=t.maxValue;if(e<t.min)return n.isValid=!1,n.invalidKeys.push(`rangeUnderflow`),n.message=r(e,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(i>t.max)return n.isValid=!1,n.invalidKeys.push(`rangeOverflow`),n.message=r(i,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1){let a=(e-t.min)%t.step!==0,o=(i-t.min)%t.step!==0;if(a||o)return n.isValid=!1,n.invalidKeys.push(`stepMismatch`),n.message=r(a?e:i,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}}else{let e=t.value;if(e<t.min)return n.isValid=!1,n.invalidKeys.push(`rangeUnderflow`),n.message=r(e,t.min,t.max,t.step)||`Value must be greater than or equal to ${t.min}.`,n;if(e>t.max)return n.isValid=!1,n.invalidKeys.push(`rangeOverflow`),n.message=r(e,t.min,t.max,t.step)||`Value must be less than or equal to ${t.max}.`,n;if(t.step&&t.step!==1&&(e-t.min)%t.step!==0)return n.isValid=!1,n.invalidKeys.push(`stepMismatch`),n.message=r(e,t.min,t.max,t.step)||`Value must be a multiple of ${t.step}.`,n}return n}}},Xi=`:host {
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
#label:has(*:not(:empty)) ~ #slider {
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
`,A=class extends ut{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new dt(this,`hint`,`label`),this.localize=new wt(this),this.activeThumb=null,this.lastTrackPosition=null,this.label=``,this.hint=``,this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute(`value`)==null?this.minValue:Number(this.getAttribute(`value`)),this._value=this.defaultValue,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation=`horizontal`,this.size=`medium`,this.form=null,this.min=0,this.max=100,this.step=1,this.required=!1,this.tooltipDistance=8,this.tooltipPlacement=`top`,this.withMarkers=!1,this.withTooltip=!1}static get validators(){return[...super.validators,Yi()]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}firstUpdated(){this.isRange?(this.draggableThumbMin=new Gi(this.thumbMin,{start:()=>{this.activeThumb=`min`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`min`)},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new Gi(this.thumbMax,{start:()=>{this.activeThumb=`max`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`max`)},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new Gi(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue;else{let n=this.getValueFromCoordinates(e,t),r=Math.abs(n-this.minValue),i=Math.abs(n-this.maxValue);if(r===i)if(n>this.maxValue)this.activeThumb=`max`;else if(n<this.minValue)this.activeThumb=`min`;else{let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,i=r?t:e,a=this.lastTrackPosition||i;this.lastTrackPosition=i,this.activeThumb=i>a!==n&&!r||i<a&&r?`max`:`min`}else this.activeThumb=r<=i?`min`:`max`;this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue}this.customStates.set(`dragging`,!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb===`min`?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new Gi(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set(`dragging`,!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0}})}updated(e){if(e.has(`range`)&&this.requestUpdate(),this.isRange?(e.has(`minValue`)||e.has(`maxValue`))&&(this.minValue=qi(this.minValue,this.min,this.maxValue),this.maxValue=qi(this.maxValue,this.minValue,this.max),this.updateFormValue()):e.has(`value`)&&(this.value=qi(this.value,this.min,this.max),this.setValue(String(this.value))),(e.has(`min`)||e.has(`max`))&&(this.isRange?(this.minValue=qi(this.minValue,this.min,this.max),this.maxValue=qi(this.maxValue,this.min,this.max)):this.value=qi(this.value,this.min,this.max)),e.has(`disabled`)&&this.customStates.set(`disabled`,this.disabled),e.has(`disabled`)||e.has(`readonly`)){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute(`min-value`)??String(this.min)),this.maxValue=parseFloat(this.getAttribute(`max-value`)??String(this.max))):this.value=parseFloat(this.getAttribute(`value`)??String(this.min)),this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){let t=(String(this.step).split(`.`)[1]||``).replace(/0+$/g,``).length;return e=Math.round(e/this.step)*this.step,e=qi(e,this.min,this.max),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,{top:i,right:a,bottom:o,left:s,height:c,width:l}=this.trackBoundingClientRect,u=r?t:e,d=r?{start:i,end:o,size:c}:{start:s,end:a,size:l},f=(r||n?d.end-u:u-d.start)/d.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*f)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set(`focused`,!1),this.dispatchEvent(new FocusEvent(`blur`,{bubbles:!0,composed:!0}))}handleFocus(e){let t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb=`min`:t===this.thumbMax&&(this.activeThumb=`max`),this.showRangeTooltips()):this.showTooltip(),this.customStates.set(`focused`,!0),this.dispatchEvent(new FocusEvent(`focus`,{bubbles:!0,composed:!0}))}handleKeyDown(e){let t=this.localize.dir()===`rtl`,n=e.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb=`min`:n===this.thumbMax&&(this.activeThumb=`max`),!this.activeThumb))return;let i=this.isRange?this.activeThumb===`min`?this.minValue:this.maxValue:this.value,a=i;switch(e.key){case`ArrowUp`:case t?`ArrowLeft`:`ArrowRight`:e.preventDefault(),a=this.clampAndRoundToStep(i+this.step);break;case`ArrowDown`:case t?`ArrowRight`:`ArrowLeft`:e.preventDefault(),a=this.clampAndRoundToStep(i-this.step);break;case`Home`:e.preventDefault(),a=this.isRange&&this.activeThumb===`min`?this.min:this.isRange?this.minValue:this.min;break;case`End`:e.preventDefault(),a=this.isRange&&this.activeThumb===`max`?this.max:this.isRange?this.maxValue:this.max;break;case`PageUp`:e.preventDefault();let n=Math.max(i+(this.max-this.min)/10,i+this.step);a=this.clampAndRoundToStep(n);break;case`PageDown`:e.preventDefault();let o=Math.min(i-(this.max-this.min)/10,i-this.step);a=this.clampAndRoundToStep(o);break;case`Enter`:r(e,this);return}a!==i&&(this.isRange?(this.activeThumb===`min`?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=qi(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){let n=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,n){let r=this.getValueFromCoordinates(e,t),i=n===`min`?this.minValue:this.maxValue;n===`min`?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),i!==(n===`min`?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);this.activeThumb===`min`?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb===`max`&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(){if(this.isRange){let e=new FormData;e.append(this.name||``,String(this.minValue)),e.append(this.name||``,String(this.maxValue)),this.setValue(e)}}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){this.isRange?document.activeElement===this.thumbMin?this.thumbMin.blur():document.activeElement===this.thumbMax&&this.thumbMax.blur():this.slider.blur()}stepDown(){this.isRange?(this.minValue=qi(this.clampAndRoundToStep(this.minValue-this.step),this.min,this.maxValue),this.updateFormValue()):this.value=this.clampAndRoundToStep(this.value-this.step)}stepUp(){this.isRange?(this.maxValue=qi(this.clampAndRoundToStep(this.maxValue+this.step),this.minValue,this.max),this.updateFormValue()):this.value=this.clampAndRoundToStep(this.value+this.step)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`hint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.hasSlotController.test(`reference`),a=kt({small:this.size===`small`,medium:this.size===`medium`,large:this.size===`large`,horizontal:this.orientation===`horizontal`,vertical:this.orientation===`vertical`,disabled:this.disabled}),o=[];if(this.withMarkers)for(let e=this.min;e<=this.max;e+=this.step)o.push(this.getPercentageFromValue(e));let s=T`
      <label
        id="label"
        part="label"
        for=${this.isRange?`thumb-min`:`text-box`}
        class=${kt({vh:!n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=T`
      <div
        id="hint"
        part="hint"
        class=${kt({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,l=this.withMarkers?T`
          <div id="markers" part="markers">
            ${o.map(e=>T`<span part="marker" class="marker" style="--position: ${e}%"></span>`)}
          </div>
        `:``,u=i?T`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:``,d=(e,t)=>this.withTooltip?T`
            <wa-tooltip
              id=${`tooltip${e===`thumb`?``:`-`+e}`}
              part="tooltip"
              exportparts="
                base:tooltip__base,
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
          `:``;if(this.isRange){let e=qi(this.getPercentageFromValue(this.minValue),0,100),t=qi(this.getPercentageFromValue(this.maxValue),0,100);return T`
        ${s}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(e,t)}%; --end: ${Math.max(e,t)}%"
            ></div>

            ${l}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${e}%"
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
              style="--position: ${t}%"
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
      `}else{let e=qi(this.getPercentageFromValue(this.value),0,100),t=qi(this.getPercentageFromValue(typeof this.indicatorOffset==`number`?this.indicatorOffset:this.min),0,100);return T`
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
              style="--start: ${t}%; --end: ${e}%"
            ></div>

            ${l}
            <span id="thumb" part="thumb" style="--position: ${e}%"></span>
          </div>

          ${u} ${c}
        </div>

        ${d(`thumb`,this.value)}
      `}}};A.formAssociated=!0,A.observeSlots=!0,A.css=[ft,a,Xi],u([it(`#slider`)],A.prototype,`slider`,2),u([it(`#thumb`)],A.prototype,`thumb`,2),u([it(`#thumb-min`)],A.prototype,`thumbMin`,2),u([it(`#thumb-max`)],A.prototype,`thumbMax`,2),u([it(`#track`)],A.prototype,`track`,2),u([it(`#tooltip`)],A.prototype,`tooltip`,2),u([D()],A.prototype,`label`,2),u([D({attribute:`hint`})],A.prototype,`hint`,2),u([D({reflect:!0})],A.prototype,`name`,2),u([D({type:Number,attribute:`min-value`})],A.prototype,`minValue`,2),u([D({type:Number,attribute:`max-value`})],A.prototype,`maxValue`,2),u([D({attribute:`value`,reflect:!0,type:Number})],A.prototype,`defaultValue`,2),u([nt()],A.prototype,`value`,1),u([D({type:Boolean,reflect:!0})],A.prototype,`range`,2),u([D({type:Boolean})],A.prototype,`disabled`,2),u([D({type:Boolean,reflect:!0})],A.prototype,`readonly`,2),u([D({reflect:!0})],A.prototype,`orientation`,2),u([D({reflect:!0})],A.prototype,`size`,2),u([D({attribute:`indicator-offset`,type:Number})],A.prototype,`indicatorOffset`,2),u([D({reflect:!0})],A.prototype,`form`,2),u([D({type:Number})],A.prototype,`min`,2),u([D({type:Number})],A.prototype,`max`,2),u([D({type:Number})],A.prototype,`step`,2),u([D({type:Boolean,reflect:!0})],A.prototype,`required`,2),u([D({type:Boolean})],A.prototype,`autofocus`,2),u([D({attribute:`tooltip-distance`,type:Number})],A.prototype,`tooltipDistance`,2),u([D({attribute:`tooltip-placement`,reflect:!0})],A.prototype,`tooltipPlacement`,2),u([D({attribute:`with-markers`,type:Boolean})],A.prototype,`withMarkers`,2),u([D({attribute:`with-tooltip`,type:Boolean})],A.prototype,`withTooltip`,2),u([D({attribute:!1})],A.prototype,`valueFormatter`,2),A=u([$e(`wa-slider`)],A);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Zi=`:host {
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

.tooltip::part(arrow) {
  border-bottom: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
  border-right: var(--wa-tooltip-border-width) var(--wa-tooltip-border-style) var(--wa-tooltip-border-color);
}
`,Qi=class extends st{constructor(){super(...arguments),this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=()=>{this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),this.hideDelay))}}connectedCallback(){super.connectedCallback(),this.eventController.signal.aborted&&(this.eventController=new AbortController),this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=Ji(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new wi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),this.body.hidden=!1,this.popup.active=!0,await Ei(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Si)}else{let e=new Ci;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await Ei(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new xi)}}handleForChange(){let e=this.getRootNode();if(!e)return;let t=this.for?e.getElementById(this.for):null,n=this.anchor;if(t===n)return;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Ti(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Ti(this,`wa-after-hide`)}render(){return T`
      <wa-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${kt({tooltip:!0,"tooltip-open":this.open})}
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
    `}};Qi.css=Zi,Qi.dependencies={"wa-popup":gi},u([it(`slot:not([name])`)],Qi.prototype,`defaultSlot`,2),u([it(`.body`)],Qi.prototype,`body`,2),u([it(`wa-popup`)],Qi.prototype,`popup`,2),u([D()],Qi.prototype,`placement`,2),u([D({type:Boolean,reflect:!0})],Qi.prototype,`disabled`,2),u([D({type:Number})],Qi.prototype,`distance`,2),u([D({type:Boolean,reflect:!0})],Qi.prototype,`open`,2),u([D({type:Number})],Qi.prototype,`skidding`,2),u([D({attribute:`show-delay`,type:Number})],Qi.prototype,`showDelay`,2),u([D({attribute:`hide-delay`,type:Number})],Qi.prototype,`hideDelay`,2),u([D()],Qi.prototype,`trigger`,2),u([D({attribute:`without-arrow`,type:Boolean,reflect:!0})],Qi.prototype,`withoutArrow`,2),u([D()],Qi.prototype,`for`,2),u([nt()],Qi.prototype,`anchor`,2),u([Tt(`open`,{waitUntilFirstUpdate:!0})],Qi.prototype,`handleOpenChange`,1),u([Tt(`for`)],Qi.prototype,`handleForChange`,1),u([Tt([`distance`,`placement`,`skidding`])],Qi.prototype,`handleOptionsChange`,1),u([Tt(`disabled`)],Qi.prototype,`handleDisabledChange`,1),Qi=u([$e(`wa-tooltip`)],Qi);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var $i=t({default:()=>A}),ea=`:host {
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

.switch .thumb {
  aspect-ratio: 1 / 1;
  width: var(--thumb-size);
  height: var(--thumb-size);
  background-color: var(--wa-form-control-border-color);
  border-radius: 50%;
  translate: calc((var(--width) - var(--height)) / -2);
  transition: inherit;
}

.input {
  position: absolute;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

/* Focus */
label:not(.disabled) .input:focus-visible ~ .switch .thumb {
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
`,ta=class extends ut{constructor(){super(...arguments),this.hasSlotController=new dt(this,`hint`),this.title=``,this.name=null,this._value=this.getAttribute(`value`)??null,this.size=`medium`,this.disabled=!1,this.checked=this.hasAttribute(`checked`),this.defaultChecked=this.hasAttribute(`checked`),this.form=null,this.required=!1,this.hint=``,this.withHint=!1}static get validators(){return[...super.validators,o()]}get value(){return this._value??`on`}set value(e){this._value=e}firstUpdated(e){super.firstUpdated(e),this.handleValueOrCheckedChange()}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),e.has(`defaultChecked`)&&(this.hasInteracted||(this.checked=this.defaultChecked)),(e.has(`value`)||e.has(`checked`))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleDefaultCheckedChange(){!this.hasInteracted&&this.checked!==this.defaultChecked&&(this.checked=this.defaultChecked,this.handleValueOrCheckedChange())}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set(`checked`,this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??`on`,t)}formResetCallback(){this.checked=this.defaultChecked,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let e=this.hasUpdated?this.hasSlotController.test(`hint`):this.withHint,t=this.hint?!0:!!e;return T`
      <label
        part="base"
        class=${kt({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${At(this.value)}
          .checked=${It(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
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
        class=${kt({"has-slotted":t})}
        aria-hidden=${t?`false`:`true`}
        >${this.hint}</slot
      >
    `}};ta.shadowRootOptions={...ut.shadowRootOptions,delegatesFocus:!0},ta.css=[a,ft,ea],u([it(`input[type="checkbox"]`)],ta.prototype,`input`,2),u([D()],ta.prototype,`title`,2),u([D({reflect:!0})],ta.prototype,`name`,2),u([D({reflect:!0})],ta.prototype,`value`,1),u([D({reflect:!0})],ta.prototype,`size`,2),u([D({type:Boolean})],ta.prototype,`disabled`,2),u([D({type:Boolean,attribute:!1})],ta.prototype,`checked`,2),u([D({type:Boolean,attribute:`checked`,reflect:!0})],ta.prototype,`defaultChecked`,2),u([D({reflect:!0})],ta.prototype,`form`,2),u([D({type:Boolean,reflect:!0})],ta.prototype,`required`,2),u([D({attribute:`hint`})],ta.prototype,`hint`,2),u([D({attribute:`with-hint`,type:Boolean})],ta.prototype,`withHint`,2),u([Tt(`defaultChecked`)],ta.prototype,`handleDefaultCheckedChange`,1),u([Tt([`checked`])],ta.prototype,`handleStateChange`,1),u([Tt(`disabled`,{waitUntilFirstUpdate:!0})],ta.prototype,`handleDisabledChange`,1),ta=u([$e(`wa-switch`)],ta);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var na=t({default:()=>ta}),j;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var ra;function ia(e){this.c=e}j=ia.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function aa(e){switch(typeof e){case`string`:return SS.l();case`number`:return ba(e)?e<<24>>24===e?Kv.l():e<<16>>16===e?iy.l():pS.l():xa(e)?fS.l():dS.l();case`boolean`:return m_.l();case`undefined`:return Rl.l();default:return e instanceof z?gS.l():e instanceof ia?__.l():e&&e.$classData?e.$classData.l():null}}function oa(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ba(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:xa(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof z?`java.lang.Long`:e instanceof ia?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.tW()}}function sa(e,t){switch(typeof e){case`string`:return yS(e,t);case`number`:return lS(e,t);case`boolean`:return f_(e,t);case`undefined`:return Fl(e,t);default:return e&&e.$classData||e===null?e.r(t):e instanceof z?mS(e,t):e instanceof ia?g_(Ca(e),t):Ea.prototype.r.call(e,t)}}function ca(e){switch(typeof e){case`string`:return vS(e);case`number`:return uS(e);case`boolean`:return p_(e);case`undefined`:return Il(e);default:return e&&e.$classData||e===null?e.z():e instanceof z?hS(e):e instanceof ia?h_(Ca(e)):Ea.prototype.z.call(e)}}function la(e){return e===void 0?`undefined`:e.toString()}function ua(e,t){if(t===0)throw new Gv(`/ by zero`);return e/t|0}function da(e,t){if(t===0)throw new Gv(`/ by zero`);return e%t|0}function fa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function pa(e){return String.fromCharCode(e)}function ma(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ha=0,ga=new WeakMap;function _a(e){switch(typeof e){case`string`:return vS(e);case`number`:return uS(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:vS(n);default:if(e===null)return 0;var r=ga.get(e);return r===void 0&&(r=ha+1|0,ha=r,ga.set(e,r)),r}}function va(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ya(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ba(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function xa(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Sa(e){return new ia(e)}Sa(0);function Ca(e){return e===null?0:e.c}function wa(e){return e===null?ra:e}function Ta(e){return e}function Ea(){}j=Ea.prototype,j.constructor=Ea;function M(){}M.prototype=j,j.z=(function(){return _a(this)}),j.r=(function(e){return this===e}),j.F=(function(){var e=this.z();return oa(this)+`@`+(+(e>>>0)).toString(16)}),j.toString=(function(){return this.F()});function N(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=N.prototype=new M,j.constructor=N,j.x=(function(e,t,n,r){ma(this.a,e,t.a,n,r)}),j.i=(function(){return new N(this.a.slice())});function Da(){}Da.prototype=j;function Oa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=Oa.prototype=new M,j.constructor=Oa,j.x=(function(e,t,n,r){ma(this.a,e,t.a,n,r)}),j.i=(function(){return new Oa(this.a.slice())});function ka(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}j=ka.prototype=new M,j.constructor=ka,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new ka(this.a.slice())});function Aa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}j=Aa.prototype=new M,j.constructor=Aa,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Aa(this.a.slice())});function ja(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}j=ja.prototype=new M,j.constructor=ja,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new ja(this.a.slice())});function Ma(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}j=Ma.prototype=new M,j.constructor=Ma,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Ma(this.a.slice())});function Na(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=ra}else this.a=e}j=Na.prototype=new M,j.constructor=Na,j.x=(function(e,t,n,r){ma(this.a,e,t.a,n,r)}),j.i=(function(){return new Na(this.a.slice())});function Pa(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}j=Pa.prototype=new M,j.constructor=Pa,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Pa(this.a.slice())});function Fa(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}j=Fa.prototype=new M,j.constructor=Fa,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Fa(this.a.slice())});function P(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=P.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new P().y(this,r,i)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Da;n.constructor=t,n.x=(function(e,t,n,r){ma(this.a,e,t.a,n,r)}),n.i=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===F});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new P().a(this),this.A}),j.l=(function(){return this.L||=new Eh(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null}),j.U=(function(e){if(this===Ia)throw Yv(new Xv);return new(this.r()).C(e)});var F=new P;F.n={},F.E=`Ljava.lang.Object;`,F.F=(e=>!e.X),F.N=`java.lang.Object`,F.I=(e=>e!==null),F.A=new P().y(F,N,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ea.prototype.$classData=F;var Ia=new P().p(void 0,`V`,`void`,void 0,void 0),La=new P().p(!1,`Z`,`boolean`,Oa,void 0),Ra=new P().p(0,`C`,`char`,ka,Uint16Array),za=new P().p(0,`B`,`byte`,Aa,Int8Array),Ba=new P().p(0,`S`,`short`,ja,Int16Array),Va=new P().p(0,`I`,`int`,Ma,Int32Array),Ha=new P().p(null,`J`,`long`,Na,void 0),Ua=new P().p(0,`F`,`float`,Pa,Float32Array),Wa=new P().p(0,`D`,`double`,Fa,Float64Array),Ga=new P().i(1,`com.raquo.airstream.core.InternalObserver`,{b3:1});function Ka(e){return aa(e).j6()+`@`+e.z()}function qa(e){var t=e.gb();return t===void 0?e.g2():t}function Ja(){this.jG=null,Xa=this,this.jG=Za().pY(new Q((e=>void 0)),fu().gz,!0)}j=Ja.prototype=new M,j.constructor=Ja;function Ya(){}Ya.prototype=j,j.pY=(function(e,t,n){return new Kg(e,n,t,this)}),j.rR=(function(e,t){return new Jg(e,t,this)}),new P().i(Ja,`com.raquo.airstream.core.Observer$`,{cx:1});var Xa;function Za(){return Xa||=new Ja,Xa}function Qa(){}j=Qa.prototype=new M,j.constructor=Qa;function $a(){}$a.prototype=j,j.pE=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new P().i(Qa,`com.raquo.airstream.core.ObserverList$`,{cA:1});var eo;function to(){return eo||=new Qa,eo}function no(){this.eK=0,this.eK=0}j=no.prototype=new M,j.constructor=no;function ro(){}ro.prototype=j,j.pp=(function(){return this.eK===2147483647?this.eK=1:this.eK=1+this.eK|0,this.eK}),new P().i(no,`com.raquo.airstream.core.Signal$`,{cB:1});var io;function ao(){return io||=new no,io}function oo(e){this.hl=null,this.jM=null,this.hm=0,this.hl=e,this.jM=void 0;var t=Do().gf();this.hm=t===void 0?1:1+t.hm|0,po().gi===-1||this.hm>po().gi?pm().cm(new Xx(this,po().gi)):vo().bf?vo().el.push(this)|0:Do().iI(this)}j=oo.prototype=new M,j.constructor=oo;function so(){}so.prototype=j;var co=new P().i(oo,`com.raquo.airstream.core.Transaction`,{cC:1});function lo(){this.gi=0,this.jN=null,fo=this,this.gi=1e3,this.jN=new Q((e=>{throw Oh(new kh,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=lo.prototype=new M,j.constructor=lo;function uo(){}uo.prototype=j,j.oO=(function(e){try{e.hl.e(e);var t=e.jM;if(t!==void 0)for(;t.u2();)t.tP().u6(e)}catch(e){var n=e instanceof vp?e:new mw(e);pm().cm(n)}}),new P().i(lo,`com.raquo.airstream.core.Transaction$`,{cD:1});var fo;function po(){return fo||=new lo,fo}function mo(e){e.gj.length|0?new oo(new Q((t=>{for(;(e.gj.length|0)>0;){var n=e.gj.shift();try{n.e(t)}catch(e){var r=e instanceof vp?e:new mw(e);pm().cm(r)}}for(;(e.el.length|0)>0;){var i=e.el.shift();Do().iI(i)}}))):(e.el.length|0)>0&&new oo(new Q((t=>{for(;(e.el.length|0)>0;)Do().iI(e.el.shift())})))}function ho(){this.bf=!1,this.gj=null,this.el=null,_o=this,this.bf=!1,this.gj=ns().bj(U().d(new(B.r()).C([]))),this.el=ns().bj(U().d(new(co.r()).C([])))}j=ho.prototype=new M,j.constructor=ho;function go(){}go.prototype=j,new P().i(ho,`com.raquo.airstream.core.Transaction$onStart$`,{cE:1});var _o;function vo(){return _o||=new ho,_o}function yo(e,t){return e.em.get(t)}function bo(e,t){e.gk.unshift(t)}function xo(e){return e.gk.shift()}function So(e,t,n){var r=yo(e,t),i=r===void 0,a=r===void 0?ns().bj(U().d(new(co.r()).C([]))):r;a.push(n),i&&e.em.set(t,a)}function Co(e,t){var n=yo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.em.delete(t),i}}function wo(){this.gk=null,this.em=null,Eo=this,this.gk=ns().bj(U().d(new(co.r()).C([]))),this.em=new Map}j=wo.prototype=new M,j.constructor=wo;function To(){}To.prototype=j,j.iI=(function(e){var t=this.gf();t===void 0?(bo(this,e),po().oO(e),this.rk(e)):So(this,t,e)}),j.rk=(function(e){for(var t=e;;){var n=this.gf(),r=t;if(!(n!==void 0&&H().t(r,n)))throw Oh(new kh,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.sO(t),t.hl=po().jN;var i=this.gf();if(H().t(i,void 0))if((this.em.size|0)>0){var a=new em(0);throw this.em.forEach((e=>((t,n)=>{e.ez=e.ez+(t.length|0)|0}))(a)),Oh(new kh,`Transaction queue error: Stack cleared, but a total of `+a.ez+` children for `+(this.em.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else po().oO(i),t=i}}),j.sO=(function(e){for(var t=e;;){var n=Co(this,t);if(H().t(n,void 0)){xo(this);var r=this.gf();if(!H().t(r,void 0))t=r;else return}else{bo(this,n);return}}}),j.gf=(function(){return this.gk[0]}),new P().i(wo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cF:1});var Eo;function Do(){return Eo||=new wo,Eo}function Oo(e,t){var n=e.dq.indexOf(t)|0;if(n!==-1)e.dq.splice(n,1),e.bP.f()||t.pt();else throw Oh(new kh,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function ko(e){for(;(e.gm.length|0)>0;)Oo(e,e.gm.shift())}function Ao(e){this.jV=null,this.dq=null,this.eL=!1,this.gm=null,this.bP=null,this.eM=0,this.jV=e,this.dq=ns().bj(U().d(new(Po.r()).C([]))),this.eL=!0,this.gm=ns().bj(U().d(new(Po.r()).C([]))),this.bP=DS(),this.eM=0}j=Ao.prototype=new M,j.constructor=Ao;function jo(){}jo.prototype=j,j.om=(function(){if(this.bP.f()){var e=vo(),t=(()=>{var e=new Gd(this.jV);this.bP=new OS(e),this.eL=!1,this.eM=0;for(var t=0,n=this.dq.length|0;t<n;){var r=t+this.eM|0;this.dq[r].ps(e),t=1+t|0}ko(this),this.eL=!0,this.eM=0});if(vo(),e.bf)t();else{e.bf=!0;try{t()}finally{e.bf=!1,mo(e)}}}else throw Oh(new kh,`Can not activate `+this+`: it is already active`)}),j.rd=(function(){if(this.bP.f())throw Oh(new kh,`Can not deactivate DynamicOwner: it is not active`);this.eL=!1;for(var e=this.dq,t=0,n=e.length|0;t<n;)e[t].pt(),t=1+t|0;ko(this);var r=this.bP;r.f()||r.Z().sh(),ko(this),this.eL=!0,this.bP=DS()}),j.qH=(function(e,t){t?(this.eM=1+this.eM|0,this.dq.unshift(e)):this.dq.push(e);var n=this.bP;if(!n.f()){var r=n.Z();e.ps(r)}}),j.sU=(function(e){this.eL?Oo(this,e):this.gm.push(e)}),new P().i(Ao,`com.raquo.airstream.ownership.DynamicOwner`,{cH:1});function Mo(e,t,n){this.gn=null,this.jW=null,this.go=null,this.gn=e,this.jW=t,this.go=DS(),e.qH(this,n)}j=Mo.prototype=new M,j.constructor=Mo;function No(){}No.prototype=j,j.h2=(function(){this.gn.sU(this)}),j.ps=(function(e){var t=vo(),n=(()=>{this.go=this.jW.e(e)});if(vo(),t.bf)n();else{t.bf=!0;try{n()}finally{t.bf=!1,mo(t)}}}),j.pt=(function(){var e=this.go;e.f()||(e.Z().h2(),this.go=DS())});var Po=new P().i(Mo,`com.raquo.airstream.ownership.DynamicSubscription`,{cI:1});function Fo(){}j=Fo.prototype=new M,j.constructor=Fo;function Io(){}Io.prototype=j,j.hg=(function(e,t,n){return new Mo(e,new Q((e=>new OS(t.e(e)))),n)}),j.pP=(function(e,t,n){return new Mo(e,new Q((e=>(t.e(e),DS()))),n)}),j.tc=(function(e,t,n){return Ro().hg(e,new Q((e=>hm(t,n,e))),!1)}),new P().i(Fo,`com.raquo.airstream.ownership.DynamicSubscription$`,{cJ:1});var Lo;function Ro(){return Lo||=new Fo,Lo}function zo(e){e.eN=ns().bj(U().d(new(Ko.r()).C([])))}function Bo(e){for(var t=e.eN,n=0,r=t.length|0;n<r;)Uo(t[n]),n=1+n|0;e.eN.length=0}function Vo(e,t){var n=e.eN.indexOf(t)|0;if(n!==-1)e.eN.splice(n,1);else throw Oh(new kh,`Can not remove Subscription from Owner: subscription not found.`)}function Ho(e,t){e.eN.push(t)}function Uo(e){if(!e.ht)e.jY.ac(),e.ht=!0;else throw Oh(new kh,`Can not kill Subscription: it was already killed.`)}function Wo(e,t){this.jZ=null,this.jY=null,this.ht=!1,this.jZ=e,this.jY=t,this.ht=!1,e.sL(this)}j=Wo.prototype=new M,j.constructor=Wo;function Go(){}Go.prototype=j,j.h2=(function(){Uo(this),Vo(this.jZ,this)});var Ko=new P().i(Wo,`com.raquo.airstream.ownership.Subscription`,{cM:1});function qo(e,t){this.k0=null,this.k1=null,this.dr=null,this.en=!1,this.k0=e,this.k1=t,this.dr=DS(),this.en=!1}j=qo.prototype=new M,j.constructor=qo;function Jo(){}Jo.prototype=j,j.sd=(function(){var e=this.dr;return!e.f()&&!e.Z().gn.bP.f()}),j.t3=(function(e){if(this.en)throw Oh(new kh,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.dr;if(t.f())var n=!1;else var n=e===t.Z().gn;if(!n){this.sd()&&!e.bP.f()&&(this.en=!0);var r=this.dr;r.f()||(r.Z().h2(),this.dr=DS()),this.dr=new OS(Ro().hg(e,new Q((e=>(this.en||this.k0.ac(),new Wo(e,new rv((()=>{this.en||this.k1.ac()})))))),!1)),this.en=!1}}),j.r2=(function(){if(this.en)throw Oh(new kh,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.dr;e.f()||e.Z().h2(),this.dr=DS()}),new P().i(qo,`com.raquo.airstream.ownership.TransferableSubscription`,{cN:1});function Yo(){}j=Yo.prototype=new M,j.constructor=Yo;function Xo(){}Xo.prototype=j,j.aO=(function(e){return new Qx(new Gx(e))}),new P().i(Yo,`com.raquo.airstream.state.Var$`,{cR:1});var Zo;function Qo(){return Zo||=new Yo,Zo}function $o(){}j=$o.prototype=new M,j.constructor=$o;function es(){}es.prototype=j,j.bj=(function(e){return[...Pd().tj(e)]}),new P().i($o,`com.raquo.ew.JsArray$`,{cU:1});var ts;function ns(){return ts||=new $o,ts}function rs(){}j=rs.prototype=new M,j.constructor=rs;function is(){}is.prototype=j,j.s6=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),j.rJ=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new P().i(rs,`com.raquo.ew.JsArray$RichJsArray$`,{cV:1});var as;function os(){return as||=new rs,as}function ss(){this.kc=null,ls=this,document.createElement(`template`),this.rb(Z().b.te().tf()),this.kc=RegExp(` `,`g`)}j=ss.prototype=new M,j.constructor=ss;function cs(){}cs.prototype=j,j.qM=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof vp?e:new mw(e);if(n instanceof mw&&n.bv instanceof DOMException)return!1;throw n instanceof mw?n.bv:n}}),j.sf=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().t(t,r))return!0;n=r}}),j.qx=(function(e,t){e.addEventListener(t.eP.eo.gr,t.hI,t.hJ)}),j.sS=(function(e,t){e.removeEventListener(t.eP.eo.gr,t.hI,t.hJ)}),j.ra=(function(e){return document.createElement(e.jm())}),j.rV=(function(e,t){var n=this.rW(e,t);return n===void 0?void 0:t.cW.f7(n)}),j.rW=(function(e,t){var n=e.bp.getAttributeNS(null,t.cp);return n===null?void 0:n}),j.jy=(function(e,t,n){this.t2(e,t,t.cW.ed(n))}),j.t2=(function(e,t,n){n===null?this.sT(e,t):e.bp.setAttribute(t.cp,n)}),j.sT=(function(e,t){e.bp.removeAttribute(t.cp)}),j.rX=(function(e,t){return e.bp[t.cH]}),j.pL=(function(e,t,n){this.pM(e,t,t.hE.ed(n))}),j.pM=(function(e,t,n){e.bp[t.cH]=n}),j.pN=(function(e,t,n){var r=e.bp,i=t.cX,a=t.cY,o=n===null?null:n;o===null?(a.bJ(new Q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.bJ(new Q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.rb=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.lP)}),j.s0=(function(e,t){var n=this.s1(e,t);return n===void 0?void 0:t.hF.f7(n)}),j.s1=(function(e,t){var n=e.ju(),r=t.gt,i=n.getAttributeNS(r.f()?null:r.Z(),t.hG);return i===null?void 0:i}),j.t4=(function(e,t,n){this.t5(e,t,t.hF.ed(n))}),j.t5=(function(e,t,n){if(n===null)this.sV(e,t);else{var r=t.gt;if(r.f())e.ju().setAttribute(t.gs,n);else{var i=r.Z();e.ju().setAttributeNS(i,t.gs,n)}}}),j.sV=(function(e,t){var n=e.ju(),r=t.gt;n.removeAttributeNS(r.f()?null:r.Z(),t.hG)}),j.rc=(function(e){return document.createTextNode(e)}),j.ja=(function(e){return Nu().r4(e.tagName,45)}),j.rU=(function(e){if(e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`))return!!e.checked;if(this.ja(e)){var t=e.checked;return new Ev(this),t===void 0?void 0:typeof t==`boolean`?!!t:void 0}}),j.s2=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.ja(e)){var t=e.value;return new Ov(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),j.re=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new jO(this.oU(r),n);r=i,n=a}}),j.oU=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.kc,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new P().i(ss,`com.raquo.laminar.DomApi$`,{cW:1});var ls;function us(){return ls||=new ss,ls}function ds(e,t,n){this.hz=null,this.kd=null,this.hy=null,this.hz=e,this.kd=t,this.hy=n}j=ds.prototype=new M,j.constructor=ds;function fs(){}fs.prototype=j,j.bJ=(function(e){this.hz===null?this.hy===null?gu().rK(this.kd,e):os().rJ(this.hy,Lg().rQ(e)):this.hz.bJ(e)}),new P().i(ds,`com.raquo.laminar.Seq`,{cZ:1});function ps(){}j=ps.prototype=new M,j.constructor=ps;function ms(){}ms.prototype=j,new P().i(ps,`com.raquo.laminar.Seq$`,{d0:1});var hs;function gs(){return hs||=new ps,hs}function _s(e){e.kg=Za(),pm(),e.aB=Qo()}function vs(e){e.q0=cc()}function ys(e){bs(e,new Q((e=>{e.lz.bp.focus()})))}function bs(e,t){return new yf(new Q((e=>{var n=new Qp(!e.cI.bP.f()),r=new Q((e=>{n.gK?n.gK=!1:t.e(e)}));Ro().pP(e.cI,new Q((e=>(t=>{r.e(new rc(e,t))}))(e)),!1)})),cc())}function xs(){this.bl=null,this.lc=null,this.ld=!1,this.hA=null,this.eO=null,Cs=this,this.bl=new Yd(ws()),new Yd(ws()),this.hA=new Yd(ws()),this.eO=new qd}j=xs.prototype=new M,j.constructor=xs;function Ss(){}Ss.prototype=j,j.eA=(function(){return this.ld||=(this.lc=new Zd(this),!0),this.lc}),new P().i(xs,`com.raquo.laminar.codecs.package$`,{d8:1});var Cs;function ws(){return Cs||=new xs,Cs}function Ts(e){e.kv=Es(e,`class`,` `),e.fn=e.kv}function Es(e,t,n){var r=uf(new df,t,ws().bl);return new ef(r.cp,new Q((e=>{var t=us().rV(e,r);return t===void 0?``:t})),new ov(((e,t)=>{us().jy(e,r,t)})),n)}function Ds(e){e.pZ=Os(e,`class`,` `)}function Os(e,t,n){var r=new hf(t,ws().bl,DS());return new ef(r.gs,new Q((e=>{var t=us().s0(e,r);return t===void 0?``:t})),new ov(((e,t)=>{us().t4(e,r,t)})),n)}function ks(){this.ls=null,js=this,Z().b.ek(),ns().bj(U().d(new(lf.r()).C([Z().b.ae()]))),Z().b.ek(),ns().bj(U().d(new(lf.r()).C([Z().b.ae(),Z().b.sG()]))),Z().b.oN(),ns().bj(U().d(new(lf.r()).C([Z().b.ae(),Z().b.sH()]))),this.ls=ns().bj(U().d(new(SS.r()).C([`value`,`checked`])))}j=ks.prototype=new M,j.constructor=ks;function As(){}As.prototype=j,new P().i(ks,`com.raquo.laminar.inputs.InputController$`,{dA:1});var js;function Ms(){return js||=new ks,js}function Ns(e){this.gp=null,this.gp=e}j=Ns.prototype=new M,j.constructor=Ns;function Ps(){}Ps.prototype=j,j.pw=(function(e,t){try{this.gp.df(e,t)}catch(e){var n=e instanceof vp?e:new mw(e);pm().cm(n)}}),j.r3=(function(e){return new Ns(new ov(((t,n)=>{this.gp.df(t,n),e.gp.df(t,n)})))}),j.qN=(function(e){return e===void 0?this:e.r3(this)}),new P().i(Ns,`com.raquo.laminar.inserters.InserterHooks`,{dD:1});function Fs(){}j=Fs.prototype=new M,j.constructor=Fs;function Is(){}Is.prototype=j,j.cE=(function(e,t){return new Av(e,void 0)}),new P().i(Fs,`com.raquo.laminar.inserters.StaticChildInserter$`,{dF:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(){}j=zs.prototype=new M,j.constructor=zs;function Bs(){}Bs.prototype=j,j.pq=(function(e,t){return e===``?$():$().jt(ck(new uk,e.split(t).filter((e=>e!==``))))}),new P().i(zs,`com.raquo.laminar.keys.CompositeKey$`,{dI:1});var Vs;function Hs(){return Vs||=new zs,Vs}function Us(e,t){this.lx=null,this.lw=null,this.lx=e,this.lw=t}j=Us.prototype=new M,j.constructor=Us;function Ws(){}Ws.prototype=j,j.c=(function(e){return new Dm(this.lx,this.lw.e(e),new cv(((e,t,n)=>{us().pN(e,t,n)})))}),new P().i(Us,`com.raquo.laminar.keys.DerivedStyleProp`,{dM:1});function Gs(e,t,n,r){this.eo=null,this.fq=!1,this.fp=!1,this.fo=null,this.eo=e,this.fq=t,this.fp=n,this.fo=r}j=Gs.prototype=new M,j.constructor=Gs;function Ks(){}Ks.prototype=j,j.eg=(function(e){var t=new Q((t=>{var n=this.fo.e(t);return n.f()?DS():new OS(e.e(n.Z()))}));return new Gs(this.eo,this.fq,this.fp,t)}),j.fc=(function(){var e=new Q((e=>{var t=this.fo.e(e);if(t.f())return DS();t.Z();var n=us().s2(e.target);return new OS(n===void 0?``:n)}));return new Gs(this.eo,this.fq,this.fp,e)}),j.dm=(function(){var e=new Q((e=>{var t=this.fo.e(e);if(t.f())return DS();t.Z();var n=us().rU(e.target);return new OS(!!(n!==void 0&&n))}));return new Gs(this.eo,this.fq,this.fp,e)}),new P().i(Gs,`com.raquo.laminar.keys.EventProcessor`,{dN:1});function qs(){}j=qs.prototype=new M,j.constructor=qs;function Js(){}Js.prototype=j,j.b8=(function(e,t,n){return new Gs(e,t,n,new Q((e=>new OS(e))))}),new P().i(qs,`com.raquo.laminar.keys.EventProcessor$`,{dO:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){}j=Zs.prototype=new M,j.constructor=Zs;function Qs(){}Qs.prototype=j;function $s(){this.q1=null,this.q2=null,this.q3=null,this.q4=null,this.q1=`http://www.w3.org/2000/svg`,this.q2=`http://www.w3.org/1999/xlink`,this.q3=`http://www.w3.org/XML/1998/namespace`,this.q4=`http://www.w3.org/2000/xmlns/`}j=$s.prototype=new M,j.constructor=$s;function ec(){}ec.prototype=j,j.ss=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new my(e)}}),new P().i($s,`com.raquo.laminar.keys.SvgAttr$`,{dR:1});var tc;function nc(){return tc||=new $s,tc}function rc(e,t){this.lz=null,this.ly=null,this.lz=e,this.ly=t}j=rc.prototype=new M,j.constructor=rc;function ic(){}ic.prototype=j,new P().i(rc,`com.raquo.laminar.lifecycle.MountContext`,{dS:1});var I=new P().i(1,`com.raquo.laminar.modifiers.Modifier`,{Y:1});function ac(){this.q5=null,sc=this,this.q5=new _f}j=ac.prototype=new M,j.constructor=ac;function oc(){}oc.prototype=j,new P().i(ac,`com.raquo.laminar.modifiers.Modifier$`,{dX:1});var sc;function cc(){return sc||=new ac,sc}function lc(){this.c1=null,dc=this,this.c1=new xf}j=lc.prototype=new M,j.constructor=lc;function uc(){}uc.prototype=j,new P().i(lc,`com.raquo.laminar.modifiers.RenderableNode$`,{e1:1});var dc;function fc(){return dc||=new lc,dc}function pc(){this.D=null,hc=this,this.D=new Df(new Q((e=>e)),L()),new Df(new Q((e=>``+(e|0))),L()),new Df(new Q((e=>``+ +e)),L()),new Df(new Q((e=>``+!!e)),L()),new Df(new Q((e=>e.ti())),L())}j=pc.prototype=new M,j.constructor=pc;function mc(){}mc.prototype=j,new P().i(pc,`com.raquo.laminar.modifiers.RenderableText$`,{e6:1});var hc;function L(){return hc||=new pc,hc}function gc(){}j=gc.prototype=new M,j.constructor=gc;function _c(){}_c.prototype=j,j.gT=(function(e,t,n){var r=new OS(e);t.pW(r),n!==void 0&&n.pw(e,t);var i=us().qM(e.eG(),t.eG());return i&&t.pO(r),i}),new P().i(gc,`com.raquo.laminar.nodes.ParentNode$`,{e8:1});var vc;function yc(){return vc||=new gc,vc}function bc(){}j=bc.prototype=new M,j.constructor=bc;function xc(){}xc.prototype=j,j.tn=(function(e,t){return Ro().hg(e.cI,new Q((n=>t.e(new rc(e,n)))),!0)}),new P().i(bc,`com.raquo.laminar.nodes.ReactiveElement$`,{ea:1});var Sc;function Cc(){return Sc||=new bc,Sc}function wc(e){this.lL=null,this.lL=new Ns(new ov(((t,n)=>{matchResult1:{var r=n.eG();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=pm(),a=r.textContent,o=t.eG().tagName;i.cm(Oh(new kh,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=wc.prototype=new M,j.constructor=wc;function Tc(){}Tc.prototype=j,j.cy=(function(e){return e.cC(new Q((e=>e.tr(this.lL))))}),new P().i(wc,`com.raquo.laminar.nodes.Slot`,{ed:1});function Ec(){Oc=this,ns().bj(U().ts(new Ma(new Int32Array([0]))))}j=Ec.prototype=new M,j.constructor=Ec;function Dc(){}Dc.prototype=j,j.qq=(function(){return new Q((e=>void 0))}),new P().i(Ec,`com.raquo.laminar.tags.CustomHtmlTag$`,{ef:1});var Oc;function kc(){return Oc||=new Ec,Oc}function Ac(){}j=Ac.prototype=new M,j.constructor=Ac;function jc(){}jc.prototype=j,j.qL=(function(){Nc().rr(),Nc().rw(),Nc().rx(),Nc().ry(),Nc().rz(),Nc().rA(),Nc().rB(),Nc().rC(),Nc().rD(),Nc().rs(),Nc().rt(),Nc().ru(),Nc().rv()}),j.rr=(function(){var e=document.querySelector(`#example1`);if(e!==null){Z();var t=Z().b.aB.aO(`top`),n=Z().b.aB.aO(`0`),r=Z().b.aB.aO(`0`),i=Z().b.aB.aO(!0),a=Z().b.aB.aO(!1);new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.sM().v().c(40),dh().q(U().d(new(B.r()).C([new X((e=>e.c0().U(t))),new X((e=>e.gY().U(new _E(n.cV,new X((e=>tp().jr(e))),DS())))),new X((e=>e.jz().U(new _E(r.cV,new X((e=>tp().jr(e))),DS())))),new X((e=>e.bX().U(i))),new X((e=>e.oK().U(a))),new X((e=>e.gh().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`1px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fn.gR(`flex gap-2`),l_().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Placement`))),new X((e=>e.cR().c(`placement`))),new X((e=>e.J().U(t))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc().eg(new X((e=>e))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().co().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jA().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iN().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jw().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().h9().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jd().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))]))),sh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Distance`))),new X((e=>e.pT().pr())),new X((e=>e.cR().c(`distance`))),new X((e=>(sh().ff(),Z().b).ek().U(n))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc(),new Q((e=>{n.aS.aQ(e)})))))])),U().d(new(I.r()).C([]))),sh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Skidding`))),new X((e=>e.pT().pr())),new X((e=>e.cR().c(`skidding`))),new X((e=>(sh().ff(),Z().b).ek().U(r))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc(),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fn.gR(`flex gap-2 mt-2`),yh().q(U().d(new(B.r()).C([new X((e=>e.cR().c(`active`))),new X((e=>xm(Z().b,Hc().de(i),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{i.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Active`,L().D)]))),yh().q(U().d(new(B.r()).C([new X((e=>e.cR().c(`arrow`))),new X((e=>xm(Z().b,Hc().de(a),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{a.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Arrow`,L().D)])))])))]))))}}),j.rw=(function(){var e=document.querySelector(`#example2`);if(e!==null){Z();var t=Z().b.aB.aO(!0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.bX().U(t))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),Z().b.fZ().C(U().d(new(I.r()).C([]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Active`,L().D)])))]))))}}),j.rx=(function(){var e=document.querySelector(`#example3`);e!==null&&(Z(),new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.cn().C(U().d(new(I.r()).C([Z().b.s5().c(`external-anchor`),Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().c(`50px 0 0 50px`)]))),dh().q(U().d(new(B.r()).C([new X((e=>e.qJ().c(`external-anchor`))),new X((e=>e.c0().co())),new X((e=>e.bX().c(!0)))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))])))])))))}),j.ry=(function(){var e=document.querySelector(`#example4`);if(e!==null){Z();var t=Z().b.aB.aO(`top`);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().U(t))),new X((e=>e.bX().c(!0))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),l_().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Placement`))),new X((e=>e.J().U(t))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc().eg(new X((e=>e))),new Q((e=>{t.aS.aQ(e)}))))),new X((e=>e.gh().c(`max-width: 280px;`)))])),U().d(new(I.r()).C([J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().co().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jA().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iN().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jw().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().h9().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jd().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))])))]))))}}),j.rz=(function(){var e=document.querySelector(`#example5`);if(e!==null){Z();var t=Z().b.aB.aO(0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.gY().U(t))),new X((e=>e.bX().c(!0))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),hh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Distance`))),new X((e=>e.h4().c(-50))),new X((e=>e.h3().c(50))),new X((e=>e.hd().c(1))),new X((e=>(hh().ff(),Z().b).ek().U(new _E(t.cV,new X((e=>``+ +e)),DS())))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).eg(new X((e=>+e.target.value))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ga().c(`260px`)])))]))))}}),j.rA=(function(){var e=document.querySelector(`#example6`);if(e!==null){Z();var t=Z().b.aB.aO(0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.jz().U(t))),new X((e=>e.bX().c(!0))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),hh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Skidding`))),new X((e=>e.h4().c(-50))),new X((e=>e.h3().c(50))),new X((e=>e.hd().c(1))),new X((e=>(hh().ff(),Z().b).ek().U(new _E(t.cV,new X((e=>``+ +e)),DS())))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).eg(new X((e=>+e.target.value))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ga().c(`260px`)])))]))))}}),j.rB=(function(){var e=document.querySelector(`#example7`);if(e!==null){Z();var t=Z().b.aB.aO(`top`),n=Z().b.aB.aO(`anchor`),r=Z().b.aB.aO(!0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().U(t))),new X((e=>e.oK().U(r))),new X((e=>e.qR().U(n))),new X((e=>e.gY().c(8))),new X((e=>e.bX().c(!0))),new X((e=>e.gh().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fn.gR(`flex flex-wrap gap-4 items-end`),l_().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Placement`))),new X((e=>e.cR().c(`placement`))),new X((e=>e.J().U(t))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc().eg(new X((e=>e))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ab().c(`160px`),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().co().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jA().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iN().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jw().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().h9().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jd().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))]))),l_().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Arrow Placement`))),new X((e=>e.cR().c(`arrow-placement`))),new X((e=>e.J().U(n))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).fc().eg(new X((e=>{(e===`anchor`||e===`center`||e===`end`||e===`start`)&&Cv(n,e)}))),new Q((e=>(t=>{e.aQ(t)}))(Z().b.kg.jG)))))])),U().d(new(I.r()).C([Z().b.ab().c(`160px`),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`anchor`)))])),U().d(new(I.r()).C([K(Z().b,`anchor`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`start`)))])),U().d(new(I.r()).C([K(Z().b,`start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`end`)))])),U().d(new(I.r()).C([K(Z().b,`end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`center`)))])),U().d(new(I.r()).C([K(Z().b,`center`,L().D)])))])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fn.gR(`flex gap-4 mt-4`),yh().q(U().d(new(B.r()).C([new X((e=>e.cR().c(`arrow`))),new X((e=>xm(Z().b,Hc().de(r),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Arrow`,L().D)])))])))]))))}}),j.rC=(function(){var e=document.querySelector(`#example8`);if(e!==null){Z();var t=Z().b.aB.aO(!0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h7().h8(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.ge().f5(),dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.p6().U(t))),new X((e=>e.bX().c(!0))),new X((e=>e.gW().hc())),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().c(`150px 50px`)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))])))]))),Z().b.fZ().C(U().d(new(I.r()).C([]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Flip`,L().D)])))]))))}}),j.rD=(function(){var e=document.querySelector(`#example9`);e!==null&&(Z(),new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.h7().h8(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.ge().f5(),dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.p6().c(!0))),new X((e=>e.rH().c(`right bottom`))),new X((e=>e.rI().sa())),new X((e=>e.bX().c(!0))),new X((e=>e.gW().hc())),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().c(`250px 50px`)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))])))])))))}),j.rs=(function(){var e=document.querySelector(`#example10`);if(e!==null){Z();var t=Z().b.aB.aO(!0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h7().h8(),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.ge().f5(),dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.t7().U(t))),new X((e=>e.t8().c(10))),new X((e=>e.bX().c(!0))),new X((e=>e.gW().hc())),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().c(`60px 0 0 10px`)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(300),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))])))]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Shift`,L().D)])))]))))}}),j.rt=(function(){var e=document.querySelector(`#example11`);if(e!==null){Z();var t=Z().b.aB.aO(!0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h7().h8(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.ge().f5(),dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.qT().U(new _E(t.cV,new X((e=>e?`both`:`vertical`)),DS())))),new X((e=>e.qU().c(10))),new X((e=>e.bX().c(!0))),new X((e=>e.gW().hc())),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().c(`250px 50px 100px 50px`)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`),Z().b.ab().v().c(100),Z().b.a3().v().c(200),Z().b.ga().c(`var(--auto-size-available-width)`),Z().b.sp().c(`var(--auto-size-available-height)`),Z().b.ge().f5()])))])))]))),Z().b.fZ().C(U().d(new(I.r()).C([]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Auto-size`,L().D)])))]))))}}),j.ru=(function(){var e=document.querySelector(`#example12`);if(e!==null){Z();var t=Z().b.aB.aO(!0),n=Z().b.aB.aO(10),r=Z().b.aB.aO(0);new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().co())),new X((e=>e.s4().U(t))),new X((e=>e.gY().U(n))),new X((e=>e.jz().U(r))),new X((e=>e.bX().c(!0))),new X((e=>e.gh().c(xS(Nu().ta(`
            --arrow-color: var(--wa-color-brand-fill-loud);
          `,124))))),new X((e=>xm(Z().b,Rc().cx().cy(U().d(new(Mv.r()).C([(Z(),Rs().cE(Z().b.cn().C(U().d(new(I.r()).C([Z().b.cf().ch(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.ck().v().c(50)]))),fc().c1))]))),Sp().aJ,Ef())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cc().c(`var(--wa-color-brand-fill-loud)`),Z().b.bY().c(`var(--wa-border-radius-m)`)])))]))),Z().b.fZ().C(U().d(new(I.r()).C([]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Hover Bridge`,L().D)]))),Z().b.fZ().C(U().d(new(I.r()).C([]))),hh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Distance`))),new X((e=>e.h4().c(0))),new X((e=>e.h3().c(50))),new X((e=>e.hd().c(1))),new X((e=>(hh().ff(),Z().b).ek().U(new _E(n.cV,new X((e=>``+ +e)),DS())))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).eg(new X((e=>+e.target.value))),new Q((e=>{n.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ga().c(`260px`),Z().b.pm().c(`0.5rem`)]))),hh().q(U().d(new(B.r()).C([new X((e=>e.ci().c(`Skidding`))),new X((e=>e.h4().c(-50))),new X((e=>e.h3().c(50))),new X((e=>e.hd().c(1))),new X((e=>(hh().ff(),Z().b).ek().U(new _E(r.cV,new X((e=>``+ +e)),DS())))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).eg(new X((e=>+e.target.value))),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ga().c(`260px`),Z().b.pm().c(`0.5rem`)])))]))))}}),j.rv=(function(){var e=document.querySelector(`#example13`);if(e!==null){Z();var t=Z().b.aB.aO(!1);Z().b.aB.aO(0),Z().b.aB.aO(0),new jm(e,Z().b.S().C(U().d(new(I.r()).C([dh().q(U().d(new(B.r()).C([new X((e=>e.c0().h9())),new X((e=>e.bX().U(t))),new X((e=>e.gh().c(`z-index: 1000; pointer-events: none;`)))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(100),Z().b.bk().c(`4px solid var(--wa-color-neutral-fill-loud)`),Z().b.bY().c(`50%`),Z().b.tl().c(`translate(-50px, -50px)`),Z().b.qK().c(`1s virtual-cursor infinite`)])))]))),yh().q(U().d(new(B.r()).C([new X((e=>xm(Z().b,Hc().de(t),Sp().aJ,Ef()))),new X((e=>new wm((Z(),Xs().b8(e.ae(),!1,!1)).dm(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Highlight mouse cursor`,L().D)])))]))))}}),new P().i(Ac,`examples.popup.Main$package$`,{eh:1});var Mc;function Nc(){return Mc||=new Ac,Mc}function Pc(e){try{Nc().qL()}catch(e){throw e}}function Fc(){this.mY=null,this.mZ=!1}j=Fc.prototype=new M,j.constructor=Fc;function Ic(){}Ic.prototype=j,j.cx=(function(){return this.mZ||=(this.mY=new wc(`anchor`),!0),this.mY}),new P().i(Fc,`io.github.nguyenyou.webawesome.laminar.Popup$slots$`,{eq:1});var Lc;function Rc(){return Lc||=new Fc,Lc}function zc(){}j=zc.prototype=new M,j.constructor=zc;function Bc(){}Bc.prototype=j,j.de=(function(e){return new jO(Z().b.rh().U(e),new jO(Z().b.oN().U(e),$()))}),new P().i(zc,`io.github.nguyenyou.webawesome.laminar.Switch$checked$`,{eu:1});var Vc;function Hc(){return Vc||=new zc,Vc}function Uc(){this.q7=!1,this.fs=null,this.gw=null,this.no=null,this.hU=!1,this.q6=0,this.q9=0,this.q8=null,Gc=this,this.q7=!0,this.fs=new ArrayBuffer(8),this.gw=new Int32Array(this.fs,0,2),new Float32Array(this.fs,0,2),this.no=new Float64Array(this.fs,0,1),this.gw[0]=16909060,this.hU=(new Int8Array(this.fs,0,8)[0]|0)==1,this.q6=this.hU?0:1,this.q9=this.hU?1:0,this.q8=null}j=Uc.prototype=new M,j.constructor=Uc;function Wc(){}Wc.prototype=j,j.jq=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.no[0]=e,(this.gw[0]|0)^(this.gw[1]|0))}),new P().i(Uc,`java.lang.FloatingPointBits$`,{eI:1});var Gc;function Kc(){return Gc||=new Uc,Gc}function qc(e,t){for(var n=xl().cF(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Jc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new up(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new up(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(fp.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Jc(e,t){var n=xl().cF(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=xl().cF(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=xl().cF(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=xl().cF(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=xl().cF(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Yc(e,c[1]),nl(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Yc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Yc(e,d[1]),`<clinit>`]}function Yc(e,t){var n=Zc(e);if(Pl().hZ.call(n,t))var r=Zc(e)[t];else var r=pl(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Xc(e){if(!((1&e.c2)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.hW=t,e.c2=(1|e.c2)<<24>>24}return e.hW}function Zc(e){return(1&e.c2)<<24>>24?e.hW:Xc(e)}function Qc(e){if(!((2&e.c2)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.hX=t,e.c2=(2|e.c2)<<24>>24}return e.hX}function $c(e){return(2&e.c2)<<24>>24?e.hX:Qc(e)}function el(e){return(4&e.c2)<<24>>24||(e.hV=Object.keys($c(e)),e.c2=(4|e.c2)<<24>>24),e.hV}function tl(e){return(4&e.c2)<<24>>24?e.hV:el(e)}function nl(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function rl(e,t){return t?t.arguments&&t.stack?il(e,t):t.stack&&t.sourceURL?sl(e,t):t.stack&&t.number?ol(e,t):t.stack&&t.fileName?al(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?cl(e,t):ll(e,t):cl(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ul(e,t):dl(e,t):t.stack&&!t.fileName?il(e,t):fl(e,t):[]}function il(e,t){return(t.stack+`
`).replace(xl().cF(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(xl().bN(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(xl().bN(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(xl().bN(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(xl().bN(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function al(e,t){return t.stack.replace(xl().bN(`(?:\\n@:0)?\\s+$`,`m`),``).replace(xl().bN(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ol(e,t){return t.stack.replace(xl().bN(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(xl().bN(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(xl().bN(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function sl(e,t){return t.stack.replace(xl().bN(`\\[native code\\]\\n`,`m`),``).replace(xl().bN(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(xl().bN(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function cl(e,t){for(var n=xl().bN(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ll(e,t){for(var n=xl().bN(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ul(e,t){for(var n=xl().cF(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function dl(e,t){for(var n=xl().cF(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(xl().cF(`<anonymous function: (\\S+)>`),`$1`).replace(xl().cF(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function fl(e,t){return[]}function pl(e,t,n){for(;;)if(t<(tl(e).length|0)){var r=tl(e)[t];if(n.startsWith(r))return``+$c(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function ml(){this.hW=null,this.hX=null,this.hV=null,this.c2=0}j=ml.prototype=new M,j.constructor=ml;function hl(){}hl.prototype=j,j.rE=(function(e){return qc(this,rl(this,e))}),new P().i(ml,`java.lang.StackTrace$`,{eV:1});var gl;function _l(){return gl||=new ml,gl}function vl(){}j=vl.prototype=new M,j.constructor=vl;function yl(){}yl.prototype=j,j.cF=(function(e){return new RegExp(e)}),j.bN=(function(e,t){return new RegExp(e,t)}),new P().i(vl,`java.lang.StackTrace$StringRE$`,{eW:1});var bl;function xl(){return bl||=new vl,bl}function Sl(){this.nq=null,this.qa=null,wl=this,this.nq=new Tw(!1),this.qa=new Tw(!0)}j=Sl.prototype=new M,j.constructor=Sl;function Cl(){}Cl.prototype=j,new P().i(Sl,`java.lang.System$Streams$`,{f0:1});var wl;function Tl(){return wl||=new Sl,wl}function El(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Dl(){this.hY=null,this.nr=null,kl=this,this.hY=El(this),this.nr=null}j=Dl.prototype=new M,j.constructor=Dl;function Ol(){}Ol.prototype=j,j.j5=(function(e,t){if(this.hY!==null){var n=this.hY;return Pl().hZ.call(n,e)?n[e]:t}else return this.nr.j5(e,t)}),new P().i(Dl,`java.lang.System$SystemProperties$`,{f1:1});var kl;function Al(){return kl||=new Dl,kl}function jl(){this.hZ=null,Nl=this,this.hZ=Object.prototype.hasOwnProperty}j=jl.prototype=new M,j.constructor=jl;function Ml(){}Ml.prototype=j,new P().i(jl,`java.lang.Utils$Cache$`,{f4:1});var Nl;function Pl(){return Nl||=new jl,Nl}function Fl(e,t){return e===t}function Il(e){return 0}function Ll(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.bx)}var Rl=new P().i(0,`java.lang.Void`,{bx:1},(e=>e===void 0));function zl(e,t){throw Jv(new Xv,`argument type mismatch`)}function Bl(){}j=Bl.prototype=new M,j.constructor=Bl;function Vl(){}Vl.prototype=j,j.cg=(function(e){return e instanceof N||e instanceof Oa||e instanceof ka||e instanceof Aa||e instanceof ja||e instanceof Ma||e instanceof Na||e instanceof Pa||e instanceof Fa?e.a.length:zl(this,e)}),new P().i(Bl,`java.lang.reflect.Array$`,{f6:1});var Hl;function Ul(){return Hl||=new Bl,Hl}function Wl(){}j=Wl.prototype=new M,j.constructor=Wl;function Gl(){}Gl.prototype=j,j.qW=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),j.p2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.p,s=a.s,c=r,l=t.a[c],u=l.p,d=l.s;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),j.iU=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.p3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.oZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.oY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.p4=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.p0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.p1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.a2=(function(e,t){if(t<0)throw new ny;var n=e.a.length,r=t<n?t:n,i=aa(e).W.Q().W.U(t);return e.x(0,i,0,r),i}),j.ad=(function(e,t,n){if(t>n)throw Jv(new Xv,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=aa(e).W.Q().W.U(i);return e.x(t,s,0,o),s}),new P().i(Wl,`java.util.Arrays$`,{f7:1});var Kl;function R(){return Kl||=new Wl,Kl}function z(e,t){this.p=0,this.s=0,this.p=e,this.s=t}j=z.prototype=new M,j.constructor=z;function ql(){}ql.prototype=j,j.r=(function(e){return e instanceof z&&this.p===e.p&&this.s===e.s}),j.z=(function(){return this.p^this.s}),j.F=(function(){return tu().pB(this.p,this.s)}),j.u9=(function(){return this.p}),j.u8=(function(){return tu().pA(this.p,this.s)}),j.u7=(function(){return tu().gd(this.p,this.s)}),j.tM=(function(){return this.p<<24>>24}),j.u5=(function(){return this.p<<16>>16}),j.tY=(function(){return this.p}),j.tZ=(function(){return this}),j.tS=(function(){return tu().pA(this.p,this.s)}),j.tQ=(function(){return tu().gd(this.p,this.s)}),j.tO=(function(e){return tu().py(this.p,this.s,e.p,e.s)}),j.tN=(function(e){return tu().py(this.p,this.s,e.p,e.s)}),j.tR=(function(e){return this.p===e.p&&this.s===e.s}),j.u3=(function(e){return!(this.p===e.p&&this.s===e.s)}),j.tE=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)<(-2147483648^e.p):t<n}),j.tF=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)<=(-2147483648^e.p):t<n}),j.tA=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)>(-2147483648^e.p):t>n}),j.tB=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)>=(-2147483648^e.p):t>n}),j.uc=(function(){return new z(~this.p,~this.s)}),j.ty=(function(e){return new z(this.p|e.p,this.s|e.s)}),j.tx=(function(e){return new z(this.p&e.p,this.s&e.s)}),j.tL=(function(e){return new z(this.p^e.p,this.s^e.s)}),j.tG=(function(e){var t=this.p;return new z(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.s<<e)}),j.tD=(function(e){var t=this.s;return new z(32&e?t>>>e|0:this.p>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),j.tC=(function(e){var t=this.s;return new z(32&e?t>>e:this.p>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),j.ub=(function(){var e=this.p,t=this.s;return new z(-e|0,e===0?-t|0:~t)}),j.tJ=(function(e){var t=this.p,n=this.s,r=e.s,i=t+e.p|0;return new z(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),j.tH=(function(e){var t=this.p,n=this.s,r=e.s,i=t-e.p|0;return new z(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),j.tK=(function(e){var t=this.p,n=e.p,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new z(u,(((Math.imul(t,e.s)+Math.imul(this.s,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),j.tz=(function(e){var t=tu();return new z(t.rj(this.p,this.s,e.p,e.s),t.Y)}),j.tI=(function(e){var t=tu();return new z(t.sR(this.p,this.s,e.p,e.s),t.Y)}),new P().i(z,`org.scalajs.linker.runtime.RuntimeLong`,{by:1});function Jl(e,t,n){return-2097152&n?Zl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Yl(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.Y=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.Y=0,n>>>o|0}else return Zl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.Y=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.Y=s/4294967296|0,s|0}}function Xl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.Y=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.Y=n&(-1+i|0),t):Zl(e,t,n,r,i,1)|0;if(-2097152&i)return e.Y=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.Y=a/4294967296|0,a|0}function Zl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var b=f,ee=p,te=u,x=d,ne=b-te|0,re=(-2147483648^ne)>(-2147483648^b)?-1+(ee-x|0)|0:ee-x|0;f=ne,p=re,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ie=u,ae=d,oe=ie>>>1|0|ae<<31,se=ae>>>1|0;u=oe,d=se}var S=f,ce=p;if(ce===i?(-2147483648^S)>=(-2147483648^r):(-2147483648^ce)>=(-2147483648^i)){var C=f,le=4294967296*p+ +(C>>>0),ue=4294967296*i+ +(r>>>0);if(a!==1){var de=le/ue,fe=de|0,pe=de/4294967296|0,me=m,he=h,ge=me+fe|0,_e=(-2147483648^ge)<(-2147483648^me)?1+(he+pe|0)|0:he+pe|0;m=ge,h=_e}if(a!==0){var ve=le%ue;f=ve|0,p=ve/4294967296|0}}if(a===0)return e.Y=h,m;if(a===1)return e.Y=p,f;var ye=m,be=4294967296*h+ +(ye>>>0),xe=``+f,Se=xe.length;return``+be+`000000000`.substring(Se)+xe}function Ql(){this.Y=0}j=Ql.prototype=new M,j.constructor=Ql;function $l(){}$l.prototype=j,j.pB=(function(e,t){return t===e>>31?``+e:t<0?`-`+Jl(this,-e|0,e===0?-t|0:~t):Jl(this,e,t)}),j.gd=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),j.pA=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),j.tV=(function(e){return new z(e,e>>31)}),j.tU=(function(e){return new z(this.pz(e),this.Y)}),j.pz=(function(e){if(e<-0x8000000000000000)return this.Y=-2147483648,0;if(e>=0x8000000000000000)return this.Y=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.Y=e<0&&t!==0?-1+n|0:n,t}),j.py=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),j.rj=(function(e,t,n,r){if((n|r)===0)throw new Gv(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.Y=0,-2147483648;var i=ua(e,n);return this.Y=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.Y=-1,-1;else return this.Y=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Yl(this,a,o,s,c);if((t^r)>=0)return l;var u=this.Y;return this.Y=l===0?-u|0:~u,-l|0}}),j.sR=(function(e,t,n,r){if((n|r)===0)throw new Gv(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=da(e,n);return this.Y=i>>31,i}else return this.Y=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.Y=0,0;else return this.Y=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Xl(this,a,o,s,c);if(t<0){var u=this.Y;return this.Y=l===0?-u|0:~u,-l|0}else return l}}),new P().i(Ql,`org.scalajs.linker.runtime.RuntimeLong$`,{fa:1});var eu;function tu(){return eu||=new Ql,eu}function nu(){this.i0=null,this.nv=null,iu=this,this.i0=new Ma(0),this.nv=new N(0)}j=nu.prototype=new M,j.constructor=nu;function ru(){}ru.prototype=j,new P().i(nu,`scala.Array$EmptyArrays$`,{fg:1});var iu;function au(){return iu||=new nu,iu}var ou=new P().i(1,`scala.Function0`,{aI:1}),B=new P().i(1,`scala.Function1`,{e:1});function su(){}j=su.prototype=new M,j.constructor=su;function cu(){}cu.prototype=j;function lu(){this.nx=null,this.gz=null,du=this,this.nx=new X((e=>fu().nx)),this.gz=new D_}j=lu.prototype=new M,j.constructor=lu;function uu(){}uu.prototype=j,new P().i(lu,`scala.PartialFunction$`,{fo:1});var du;function fu(){return du||=new lu,du}function pu(){this.nC=null,hu=this,this.nC=new X((e=>gu().nC))}j=pu.prototype=new M,j.constructor=pu;function mu(){}mu.prototype=j,j.rK=(function(e,t){var n=Ul().cg(e),r=0;if(e instanceof N)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Ma)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Fa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Na)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Pa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof ka)for(;r<n;)t.e(Sa(e.a[r])),r=1+r|0;else if(e instanceof Aa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof ja)for(;r<n;)t.e(e.a[r]),r=1+r|0;else if(e instanceof Oa)for(;r<n;)t.e(e.a[r]),r=1+r|0;else throw new my(e)}),new P().i(pu,`scala.collection.ArrayOps$`,{fv:1});var hu;function gu(){return hu||=new pu,hu}function _u(){}j=_u.prototype=new M,j.constructor=_u;function vu(){}vu.prototype=j,j.cA=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new P().i(_u,`scala.collection.Hashing$`,{fH:1});var yu;function bu(){return yu||=new _u,yu}function xu(e,t){for(var n=e.m();n.n();)t.e(n.j())}function Su(e,t){for(var n=!0,r=e.m();n&&r.n();)n=!!t.e(r.j());return n}function Cu(e){switch(e.E()){case-1:return!e.m().n();case 0:return!0;default:return!1}}function wu(e,t,n,r){for(var i=e.m(),a=n,o=Ul().cg(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.n();)U().iM(t,a,i.j()),a=1+a|0;return a-n|0}function Tu(e,t,n,r){return e.E()===0?``+t+r:e.e7(ZO(new QO),t,n,r).b6.o}function Eu(e,t,n,r,i){var a=t.b6;n.length!==0&&(a.o=``+a.o+n);var o=e.m();if(o.n()){var s=o.j();for(a.o=``+a.o+s;o.n();){a.o=``+a.o+r;var c=o.j();a.o=``+a.o+c}}return i.length!==0&&(a.o=``+a.o+i),t}function Du(e,t){if(e.E()>=0){var n=t.bx(e.E());return e.bZ(n,0,2147483647),n}else{var r=null,i=t.aW(),a=i===Ra.l();r=[];for(var o=e.m();o.n();){var s=o.j(),c=a?Ca(s):s===null?i.W.z:s;r.push(c)}return(i===Ia.l()?Rl.l():i===gd.l()||i===Ng.l()?F.l():i).W.r().w(r)}}function Ou(e,t){this.nJ=null,this.fz=null,this.nJ=e,this.fz=t}j=Ou.prototype=new M,j.constructor=Ou;function ku(){}ku.prototype=j,j.s3=(function(){return this.nJ.ac().m()}),new P().i(Ou,`scala.collection.Iterator$ConcatIteratorCell`,{fQ:1});function Au(){this.nM=null,Mu=this,this.nM=new X((e=>Nu().nM))}j=Au.prototype=new M,j.constructor=Au;function ju(){}ju.prototype=j,j.r4=(function(e,t){return bS(e,t)>=0}),j.ta=(function(e,t){for(var n=S_(new C_,e.length),r=new Zy(e,!1);r.aY<r.er;){for(var i=r.po(),a=i.length,o=0;o<a&&i.charCodeAt(o)<=32;)o=1+o|0;if(o<a&&i.charCodeAt(o)===t)var s=1+o|0,c=i.substring(s);else var c=i;n.o=``+n.o+c}return n.o}),new P().i(Au,`scala.collection.StringOps$`,{fX:1});var Mu;function Nu(){return Mu||=new Au,Mu}function Pu(){}j=Pu.prototype=new M,j.constructor=Pu;function Fu(){}Fu.prototype=j,j.g8=(function(e,t){return Qv(new $v,e+` is out of bounds (min 0, max `+t+`)`)}),new P().i(Pu,`scala.collection.generic.CommonErrors$`,{g2:1});var Iu;function Lu(){return Iu||=new Pu,Iu}function Ru(){try{return op().pC(Al().j5(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function zu(){this.nQ=0,Vu=this,this.nQ=Ru()}j=zu.prototype=new M,j.constructor=zu;function Bu(){}Bu.prototype=j,new P().i(zu,`scala.collection.immutable.IndexedSeqDefaults$`,{ga:1});var Vu;function Hu(){return Vu||=new zu,Vu}function Uu(){this.ip=null}j=Uu.prototype=new M,j.constructor=Uu;function Wu(){}Wu.prototype=j,j.iV=(function(){var e=this.ip;if(e===null)throw new Zv(`uninitialized`);return e.ac()}),j.j9=(function(e){if(this.ip!==null)throw new Zv(`already initialized`);this.ip=e}),new P().i(Uu,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{ge:1});function Gu(){this.nV=null,qu=this,this.nV=new rg(0,0,new N(0),new Ma(0),0,0)}j=Gu.prototype=new M,j.constructor=Gu;function Ku(){}Ku.prototype=j,new P().i(Gu,`scala.collection.immutable.MapNode$`,{gv:1});var qu;function Ju(){return qu||=new Gu,qu}function Yu(e,t,n){return oS(new cS,n+` is out of bounds (min 0, max `+(-1+Ul().cg(t)|0))}function Xu(){}j=Xu.prototype=new M,j.constructor=Xu;function Zu(){}Zu.prototype=j,j.pD=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw Yu(this,e,t);var n=new Ma(-1+e.a.length|0);e.x(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.x(r,n,t,i),n}),j.sb=(function(e,t,n){if(t<0||t>e.a.length)throw Yu(this,e,t);var r=new Ma(1+e.a.length|0);e.x(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.x(t,r,i,a),r});var Qu=new P().i(0,`scala.collection.immutable.Node`,{aS:1});function $u(){this.fI=0,td=this,this.fI=fa(7)}j=$u.prototype=new M,j.constructor=$u;function ed(){}ed.prototype=j,j.eF=(function(e,t){return 31&(e>>>t|0)}),j.ea=(function(e){return 1<<e}),j.s7=(function(e,t){return op().e9(e&(-1+t|0))}),j.cQ=(function(e,t,n){return e===-1?t:this.s7(e,n)}),new P().i($u,`scala.collection.immutable.Node$`,{gy:1});var td;function nd(){return td||=new $u,td}function rd(){this.it=null,this.bu=null,this.cN=null,this.f0=null,this.iu=null,this.nZ=null,ad=this,this.it=new N(0),this.bu=new(F.r().r()).C(0),this.cN=new(F.r().r().r()).C(0),this.f0=new(F.r().r().r().r()).C(0),this.iu=new(F.r().r().r().r().r()).C(0),this.nZ=new(F.r().r().r().r().r().r()).C(0)}j=rd.prototype=new M,j.constructor=rd;function id(){}id.prototype=j,j.f6=(function(e,t){var n=e.a.length,r=new N(1+n|0);return e.x(0,r,0,n),r.a[n]=t,r}),j.K=(function(e,t){var n=R().a2(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),j.cO=(function(e,t){var n=aa(t).W.Q().W.U(1+t.a.length|0),r=t.a.length;return t.x(0,n,1,r),n.a[0]=e,n}),j.iX=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.e(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.iX(a,t.a[r],n),r=1+r|0}),j.cj=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.e(r);if(!Object.is(r,i))return this.sm(e,t,n,i);n=1+n|0}return e}),j.sm=(function(e,t,n,r){var i=new N(e.a.length);n>0&&e.x(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.e(e.a[a]),a=1+a|0;return i}),j.aa=(function(e,t,n){if(e===1)return this.cj(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.aa(-1+e|0,i,n);if(i!==a)return this.sn(e,t,n,r,a);r=1+r|0}return t}),j.sn=(function(e,t,n,r,i){var a=aa(t).W.Q().W.U(t.a.length);r>0&&t.x(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.aa(-1+e|0,t.a[o],n),o=1+o|0;return a}),new P().i(rd,`scala.collection.immutable.VectorStatics$`,{gP:1});var ad;function V(){return ad||=new rd,ad}function od(e,t,n){this.f2=null,this.db=0,this.b5=null,this.f2=e,this.db=t,this.b5=n}j=od.prototype=new M,j.constructor=od;function sd(){}sd.prototype=j,j.rG=(function(e,t){for(var n=this;;)if(t===n.db&&H().t(e,n.f2))return n;else if(n.b5===null||n.db>t)return null;else n=n.b5}),j.F=(function(){return`Node(`+this.f2+`, `+this.db+`) -> `+this.b5});var cd=new P().i(od,`scala.collection.mutable.HashSet$Node`,{h7:1});function ld(){}j=ld.prototype=new M,j.constructor=ld;function ud(){}ud.prototype=j,j.oM=(function(e,t,n){if(t!==e)throw new oy(n)}),new P().i(ld,`scala.collection.mutable.MutationTracker$`,{hd:1});var dd;function fd(){return dd||=new ld,dd}function pd(){}j=pd.prototype=new M,j.constructor=pd;function md(){}md.prototype=j,j.t=(function(e,t){return e===t||(lp(e)?this.rq(e,t):e instanceof ia?this.ro(e,t):e===null?t===null:sa(e,t))}),j.rq=(function(e,t){if(lp(t))return this.rp(e,t);if(t instanceof ia){if(typeof e==`number`)return+e===t.c;if(e instanceof z){var n=wa(e),r=n.p,i=n.s,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:sa(e,t)}else return e===null?t===null:sa(e,t)}),j.rp=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof z){var r=wa(t);return n===tu().gd(r.p,r.s)}else return!1}else if(e instanceof z){var i=wa(e),a=i.p,o=i.s;if(t instanceof z){var s=wa(t),c=s.p,l=s.s;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return tu().gd(a,o)===u}else return!1}else return e===null?t===null:sa(e,t)}),j.ro=(function(e,t){if(t instanceof ia)return e.c===t.c;if(lp(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof z){var n=wa(t),r=n.p,i=n.s,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:sa(t,e)}else return e===null&&t===null}),new P().i(pd,`scala.runtime.BoxesRunTime$`,{hO:1});var hd;function H(){return hd||=new pd,hd}var gd=new P().i(0,`scala.runtime.Null$`,{hR:1});function _d(){}j=_d.prototype=new M,j.constructor=_d;function vd(){}vd.prototype=j,j.eC=(function(e,t){if(e instanceof N||e instanceof Ma||e instanceof Fa||e instanceof Na||e instanceof Pa)return e.a[t];if(e instanceof ka)return Sa(e.a[t]);if(e instanceof Aa||e instanceof ja||e instanceof Oa)return e.a[t];throw e===null?new ry:new my(e)}),j.iM=(function(e,t,n){if(e instanceof N)e.a[t]=n;else if(e instanceof Ma)e.a[t]=n|0;else if(e instanceof Fa)e.a[t]=+n;else if(e instanceof Na)e.a[t]=wa(n);else if(e instanceof Pa)e.a[t]=Math.fround(n);else if(e instanceof ka)e.a[t]=Ca(n);else if(e instanceof Aa)e.a[t]=n|0;else if(e instanceof ja)e.a[t]=n|0;else if(e instanceof Oa)e.a[t]=!!n;else if(e===null)throw new ry;else throw new my(e)}),j.iH=(function(e){return Tu(e.cl(),e.bM()+`(`,`,`,`)`)}),j.d=(function(e){return e===null?null:e.a.length===0?qS(ZS()):new JD(e)}),j.ts=(function(e){return e===null?null:new WD(e)}),new P().i(_d,`scala.runtime.ScalaRunTime$`,{hT:1});var yd;function U(){return yd||=new _d,yd}function bd(){}j=bd.prototype=new M,j.constructor=bd;function xd(){}xd.prototype=j,j.h=(function(e,t){var n=this.dn(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.dn=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.H=(function(e,t){return this.qV(e^t)}),j.qV=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.fb=(function(e){var t=e.p,n=e.s;return n===t>>31?t:t^n}),j.cz=(function(e){var t=fa(e);if(t===e)return t;var n=tu(),r=n.pz(e),i=n.Y;return tu().gd(r,i)===e?r^i:Kc().jq(e)}),j.V=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.cz(+e);if(e instanceof z){var t=wa(e);return this.fb(new z(t.p,t.s))}else return ca(e)}),j.eE=(function(e){throw Qv(new $v,``+e)}),new P().i(bd,`scala.runtime.Statics$`,{hV:1});var Sd;function W(){return Sd||=new bd,Sd}function Cd(){}j=Cd.prototype=new M,j.constructor=Cd;function wd(){}wd.prototype=j,j.qP=(function(e){return e}),new P().i(Cd,`scala.scalajs.js.defined$`,{i1:1});var Td;function Ed(){return Td||=new Cd,Td}function Dd(){}j=Dd.prototype=new M,j.constructor=Dd;function Od(){}Od.prototype=j,j.t6=(function(e,t){return setTimeout((()=>{t.ac()}),e)}),new P().i(Dd,`scala.scalajs.js.timers.package$`,{i2:1});var kd;function Ad(){return kd||=new Dd,kd}function jd(){}j=jd.prototype=new M,j.constructor=jd;function Md(){}Md.prototype=j,j.tj=(function(e){if(e instanceof pD)return e.gM;var t=[];return e.bJ(new X((e=>t.push(e)|0))),t}),new P().i(jd,`scala.scalajs.runtime.Compat$`,{ib:1});var Nd;function Pd(){return Nd||=new jd,Nd}function Fd(){}j=Fd.prototype=new M,j.constructor=Fd;function Id(){}Id.prototype=j,j.t9=(function(e){var t=`Illegal command line`+(e.pg()===0?``:e.pg()===1?` after first argument`:` after `+e.pg()+` arguments`)+`: `+e.u0();jp().sK().sg(t+`
`)}),new P().i(Fd,`scala.util.CommandLineParser$`,{id:1});function Ld(e){this.iD=null,this.iD=e}j=Ld.prototype=new M,j.constructor=Ld;function Rd(){}Rd.prototype=j,j.F=(function(){return`DynamicVariable(`+this.iD+`)`}),new P().i(Ld,`scala.util.DynamicVariable`,{ig:1});function zd(){}j=zd.prototype=new M,j.constructor=zd;function Bd(){}Bd.prototype=j,j.gU=(function(e){return!0}),new P().i(zd,`scala.util.control.NonFatal$`,{ii:1});var Vd;function Hd(){return Vd||=new zd,Vd}function Ud(){}j=Ud.prototype=new M,j.constructor=Ud;function Wd(){}Wd.prototype=j,j.h=(function(e,t){var n=this.dn(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.dn=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.H=(function(e,t){return this.bO(e^t)}),j.bO=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.pS=(function(e,t,n){var r=n;return r=this.h(r,vS(`Tuple2`)),r=this.h(r,e),r=this.h(r,t),this.H(r,2)}),j.eh=(function(e,t,n){var r=e.bK();if(r===0)return vS(e.bM());var i=t;n||(i=this.h(i,vS(e.bM())));for(var a=0;a<r;)i=this.h(i,W().V(e.bL(a))),a=1+a|0;return this.H(i,r)}),j.jC=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.n();){var s=o.j(),c=W().V(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.h(l,n),l=this.h(l,r),l=this.dn(l,a),this.H(l,i)}),j.sJ=(function(e,t){var n=e.m(),r=t;if(!n.n())return this.H(r,0);var i=n.j();if(!n.n())return this.H(this.h(r,W().V(i)),1);var a=n.j(),o=W().V(i);r=this.h(r,o);for(var s=r,c=W().V(a),l=c-o|0,u=2;n.n();){r=this.h(r,c);var d=W().V(n.j());if(l!==(d-c|0)||l===0){for(r=this.h(r,d),u=1+u|0;n.n();)r=this.h(r,W().V(n.j())),u=1+u|0;return this.H(r,u)}c=d,u=1+u|0}return this.bO(this.h(this.h(s,l),c))}),j.oA=(function(e,t){var n=t,r=Ul().cg(e);switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().V(U().eC(e,0))),1);default:var i=W().V(U().eC(e,0));n=this.h(n,i);for(var a=n,o=W().V(U().eC(e,1)),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().V(U().eC(e,c));if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().V(U().eC(e,c))),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.sP=(function(e,t,n,r){return this.bO(this.h(this.h(this.h(r,e),t),n))}),j.s8=(function(e,t){var n=t,r=e.u();switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().V(e.y(0))),1);default:var i=W().V(e.y(0));n=this.h(n,i);for(var a=n,o=W().V(e.y(1)),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().V(e.y(c));if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().V(e.y(c))),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.si=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.f();){var l=c.A(),u=c.w(),d=W().V(l);switch(r=this.h(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.sP(s,a,o,t):this.H(r,n)}),j.oJ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.h(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]?1231:1237),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oB=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oC=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oD=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().cz(e.a[0])),1);default:var i=W().cz(e.a[0]);n=this.h(n,i);for(var a=n,o=W().cz(e.a[1]),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().cz(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().cz(e.a[c])),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oE=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().cz(e.a[0])),1);default:var i=W().cz(e.a[0]);n=this.h(n,i);for(var a=n,o=W().cz(e.a[1]),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().cz(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().cz(e.a[c])),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oF=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oG=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:var i=n,a=e.a[0];return this.H(this.h(i,W().fb(new z(a.p,a.s))),1);default:var o=e.a[0],s=W().fb(new z(o.p,o.s));n=this.h(n,s);for(var c=n,l=e.a[1],u=W().fb(new z(l.p,l.s)),d=u-s|0,f=2;f<r;){n=this.h(n,u);var p=e.a[f],m=W().fb(new z(p.p,p.s));if(d!==(m-u|0)||d===0){for(n=this.h(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.h(h,W().fb(new z(g.p,g.s))),f=1+f|0}return this.H(n,r)}u=m,f=1+f|0}return this.bO(this.h(this.h(c,d),u))}}),j.oH=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oI=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,0),1);default:n=this.h(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.h(n,a),o!==(-a|0)||o===0){for(n=this.h(n,0),s=1+s|0;s<r;)n=this.h(n,0),s=1+s|0;return this.H(n,r)}a=0,s=1+s|0}return this.bO(this.h(this.h(i,o),a))}});function Gd(e){this.eN=null,this.jX=null,this.hs=!1,this.jX=e,zo(this),this.hs=!1}j=Gd.prototype=new M,j.constructor=Gd;function Kd(){}Kd.prototype=j,j.sL=(function(e){this.hs?(Uo(e),this.jX.ac()):Ho(this,e)}),j.sh=(function(){Bo(this),this.hs=!0}),new P().i(Gd,`com.raquo.airstream.ownership.OneTimeOwner`,{cK:1,cL:1});function qd(){}j=qd.prototype=new M,j.constructor=qd;function Jd(){}Jd.prototype=j,j.rg=(function(e){return e!==null}),j.rm=(function(e){return e?``:null}),j.f7=(function(e){return this.rg(e)}),j.ed=(function(e){return this.rm(!!e)}),new P().i(qd,`com.raquo.laminar.codecs.package$$anon$1`,{d9:1,aq:1});function Yd(e){if(e===null)throw new ry}j=Yd.prototype=new M,j.constructor=Yd;function Xd(){}Xd.prototype=j,j.ed=(function(e){return e}),j.f7=(function(e){return e}),new P().i(Yd,`com.raquo.laminar.codecs.package$$anon$2`,{da:1,aq:1});function Zd(e){if(e===null)throw new ry}j=Zd.prototype=new M,j.constructor=Zd;function Qd(){}Qd.prototype=j,j.rf=(function(e){return tp().jr(e)}),j.f7=(function(e){return this.rf(e)}),j.ed=(function(e){return``+ +e}),new P().i(Zd,`com.raquo.laminar.codecs.package$$anon$4`,{db:1,aq:1});function $d(e){return new Us(e,new Q((e=>e+`px`)))}function ef(e,t,n,r){this.lt=null,this.lv=null,this.lu=null,this.hC=null,this.lt=t,this.lv=n,this.lu=r,this.hC=new nf(r)}j=ef.prototype=new Qs,j.constructor=ef;function tf(){}tf.prototype=j,j.gR=(function(e){return new Sm(this,(Z().b.qr(),Hs().pq(e,this.lu)))}),new P().i(ef,`com.raquo.laminar.keys.CompositeKey`,{dH:1,A:1});function nf(e){this.hD=null,this.hD=e}j=nf.prototype=new M,j.constructor=nf;function rf(){}rf.prototype=j,j.oV=(function(e){return Hs().pq(e,this.hD)}),j.oX=(function(e){return Tu(e,``,this.hD,``)}),j.f7=(function(e){return this.oV(e)}),j.ed=(function(e){return this.oX(e)}),new P().i(nf,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{dJ:1,aq:1});function af(e){if(e===null)throw new ry}j=af.prototype=new M,j.constructor=af;function of(){}of.prototype=j,new P().i(af,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{dL:1,dK:1});function sf(e){this.gr=null,this.gr=e}j=sf.prototype=new Qs,j.constructor=sf;function cf(){}cf.prototype=j;var lf=new P().i(sf,`com.raquo.laminar.keys.EventProp`,{dP:1,A:1});function uf(e,t,n){return e.cp=t,e.cW=n,e}function df(){this.cp=null,this.cW=null}j=df.prototype=new Qs,j.constructor=df;function ff(){}ff.prototype=j,j.c=(function(e){return new Dm(this,e,new cv(((e,t,n)=>{us().jy(e,t,n)})))}),j.U=(function(e){return new km(this,e.he(),new cv(((e,t,n)=>{us().jy(e,this,t)})))}),new P().i(df,`com.raquo.laminar.keys.HtmlAttr`,{ac:1,A:1});function pf(e,t){this.cH=null,this.hE=null,this.cH=e,this.hE=t}j=pf.prototype=new Qs,j.constructor=pf;function mf(){}mf.prototype=j,j.c=(function(e){return new Dm(this,e,new cv(((e,t,n)=>{us().pL(e,t,n)})))}),j.U=(function(e){var t=this.cH===`value`?new cv(((e,t,n)=>{var r=this.hE.ed(t),i=us().rX(e,this);i!==void 0&&H().t(r,i)||us().pM(e,this,r)})):new cv(((e,t,n)=>{us().pL(e,this,t)}));return new km(this,e.he(),t)}),new P().i(pf,`com.raquo.laminar.keys.HtmlProp`,{bd:1,A:1});function hf(e,t,n){this.hG=null,this.hF=null,this.gs=null,this.gt=null,this.hG=e,this.hF=t;var r=n.f()?DS():new OS(n.Z()+`:`+e);this.gs=r.f()?e:r.Z(),this.gt=n.f()?DS():new OS(nc().ss(n.Z()))}j=hf.prototype=new Qs,j.constructor=hf;function gf(){}gf.prototype=j,new P().i(hf,`com.raquo.laminar.keys.SvgAttr`,{dQ:1,A:1});function _f(){}j=_f.prototype=new M,j.constructor=_f;function vf(){}vf.prototype=j,j.ca=(function(e){}),new P().i(_f,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{dY:1,Y:1});function yf(e,t){if(this.lG=null,this.lG=e,t===null)throw new ry}j=yf.prototype=new M,j.constructor=yf;function bf(){}bf.prototype=j,j.ca=(function(e){var t=vo(),n=(()=>{this.lG.e(e)});if(vo(),t.bf)n();else{t.bf=!0;try{n()}finally{t.bf=!1,mo(t)}}}),new P().i(yf,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dZ:1,Y:1});function xf(){}j=xf.prototype=new M,j.constructor=xf;function Sf(){}Sf.prototype=j,new P().i(xf,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{e2:1,e0:1});function Cf(){}j=Cf.prototype=new M,j.constructor=Cf;function wf(){}wf.prototype=j,new P().i(Cf,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{e4:1,e3:1});var Tf;function Ef(){return Tf||=new Cf,Tf}function Df(e,t){if(this.lH=null,this.lH=e,t===null)throw new ry}j=Df.prototype=new M,j.constructor=Df;function Of(){}Of.prototype=j,j.qS=(function(e){return this.lH.e(e)}),new P().i(Df,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{e7:1,e5:1});function kf(e){e.oR(new Ao(new rv((()=>{throw Oh(new kh,`Attempting to use owner of unmounted element: `+Tu(us().re(e.eG(),(us(),$())),``,` > `,``))}))))}function Af(e,t,n){return e.hP=t,e}function jf(){this.hP=null}j=jf.prototype=new M,j.constructor=jf;function Mf(){}Mf.prototype=j,j.jm=(function(){return this.hP}),j.C=(function(e){var t=this.qZ();return e.bJ(new Q((e=>{e.ca(t)}))),t}),j.qZ=(function(){return new iS(this,us().ra(this))}),new P().i(jf,`com.raquo.laminar.tags.HtmlTag`,{bj:1,aF:1});function Nf(e,t){this.lP=null,this.lP=e}j=Nf.prototype=new M,j.constructor=Nf;function Pf(){}Pf.prototype=j,new P().i(Nf,`com.raquo.laminar.tags.SvgTag`,{eg:1,aF:1});function Ff(){}j=Ff.prototype=new M,j.constructor=Ff;function If(){}If.prototype=j,j.ed=(function(e){return e}),j.f7=(function(e){return e}),new P().i(Ff,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{ew:1,aq:1});function Lf(e,t){return e.dv=t,e.f4(),e}function Rf(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1}j=Rf.prototype=new M,j.constructor=Rf;function zf(){}zf.prototype=j,j.gh=(function(){return this.dt||=(this.ds=Z().b.tb(),!0),this.ds}),j.tg=(function(){return this.dw||=(this.du=new Nm(this.dv,kc().qq(),(kc(),void 0)),!0),this.du}),j.q=(function(e,t){var n=this.tg().C(U().d(new(I.r()).C([])));return e.bJ(new Q((e=>{e.e(this).ca(n)}))),t.bJ(new Q((e=>{e.ca(n)}))),n}),j.ff=(function(){return this.dy||=(this.dx=new Ch,!0),this.dx});function Bf(e){return(32&e.gv)<<24>>24||(e.hQ=new Ma(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.gv=(32|e.gv)<<24>>24),e.hQ}function Vf(e){return(32&e.gv)<<24>>24?e.hQ:Bf(e)}function Hf(){this.hQ=null,this.gv=0}j=Hf.prototype=new M,j.constructor=Hf;function Uf(){}Uf.prototype=j,j.tk=(function(e){if(!(e>=0&&e<=1114111))throw Yv(new Xv);return String.fromCodePoint(e)}),j.ri=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=R().qW(Vf(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-Vf(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new P().i(Hf,`java.lang.Character$`,{eE:1,a:1});var Wf;function Gf(){return Wf||=new Hf,Wf}function Kf(e){return(1&e.dz)<<24>>24||(e.hT=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.dz=(1|e.dz)<<24>>24),e.hT}function qf(e){return(1&e.dz)<<24>>24?e.hT:Kf(e)}function Jf(e){return(2&e.dz)<<24>>24||(e.hS=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.dz=(2|e.dz)<<24>>24),e.hS}function Yf(e){return(2&e.dz)<<24>>24?e.hS:Jf(e)}function Xf(e,t){var n=Yf(e).exec(t);n===null&&Zf(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Zf(t);var s=e.sN(i,a,o,15);return r===`-`?-s:s}function Zf(e){throw new _S(`For input string: "`+e+`"`)}function Qf(){this.hT=null,this.hS=null,this.dz=0}j=Qf.prototype=new M,j.constructor=Qf;function $f(){}$f.prototype=j,j.jr=(function(e){var t=qf(this).exec(e);return t===null?Xf(this,e):+parseFloat(t[1])}),j.sN=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,g=+parseInt(m,16),_=fa(+parseInt(n,10))+h|0,v=_/3|0,y=+(2**v),b=_-(v<<1)|0;return g*y*y*+(2**b)}),new P().i(Qf,`java.lang.Double$`,{eG:1,a:1});var ep;function tp(){return ep||=new Qf,ep}function np(e){throw new _S(`For input string: "`+e+`"`)}function rp(){}j=rp.prototype=new M,j.constructor=rp;function ip(){}ip.prototype=j,j.pC=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&np(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&np(e);for(var s=0;o!==n;){var c=Gf().ri(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&np(e),o=1+o|0}return i?-s|0:s|0}),j.e9=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new P().i(rp,`java.lang.Integer$`,{eL:1,a:1});var ap;function op(){return ap||=new rp,ap}function sp(){}j=sp.prototype=new M,j.constructor=sp;function cp(){}cp.prototype=j;function lp(e){return e instanceof sp||typeof e==`number`||e instanceof z}function up(e,t,n,r,i){this.eR=null,this.fu=null,this.eS=null,this.eT=0,this.eQ=0,this.eR=e,this.fu=t,this.eS=n,this.eT=r,this.eQ=i}j=up.prototype=new M,j.constructor=up;function dp(){}dp.prototype=j,j.r=(function(e){return e instanceof up&&this.eS===e.eS&&this.eT===e.eT&&this.eQ===e.eQ&&this.eR===e.eR&&this.fu===e.fu}),j.F=(function(){var e=``;return this.eR!==`<jscode>`&&(e=``+e+this.eR+`.`),e=``+e+this.fu,this.eS===null?e+=`(Unknown Source)`:(e=e+`(`+this.eS,this.eT>=0&&(e=e+`:`+this.eT,this.eQ>=0&&(e=e+`:`+this.eQ)),e+=`)`),e}),j.z=(function(){return vS(this.eR)^vS(this.fu)^vS(this.eS)^this.eT^this.eQ});var fp=new P().i(up,`java.lang.StackTraceElement`,{bv:1,a:1});function pp(){}j=pp.prototype=new M,j.constructor=pp;function mp(){}mp.prototype=j,j.st=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new CS;for(var i=``,a=t;a!==r;)i+=``+pa(e.a[a]),a=1+a|0;return i}),new P().i(pp,`java.lang.String$`,{eX:1,a:1});var hp;function gp(){return hp||=new pp,hp}function _p(e,t,n,r,i){return e.nt=t,e.nu=i,i&&e.rF(),e}var vp=class extends Error{constructor(){super(),this.nt=null,this.nu=!1,this.ns=null,this.gx=null}ph(e){return this}g7(){return this.nt}rF(){var e=this instanceof mw?this.bv:this;return this.ns=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}rZ(){return this.gx===null&&(this.nu?this.gx=_l().rE(this.ns):this.gx=new(fp.r()).C(0)),this.gx}F(){var e=oa(this),t=this.g7();return t===null?e:e+`: `+t}z(){return Ea.prototype.z.call(this)}r(e){return Ea.prototype.r.call(this,e)}get message(){var e=this.g7();return e===null?``:e}get name(){return oa(this)}toString(){return this.F()}};function yp(){this.aJ=null,xp=this,this.aJ=new cy}j=yp.prototype=new M,j.constructor=yp;function bp(){}bp.prototype=j,new P().i(yp,`scala.$less$colon$less$`,{fd:1,a:1});var xp;function Sp(){return xp||=new yp,xp}function Cp(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)U().iM(r,s,U().eC(t,o)),o=1+o|0,s=1+s|0}function wp(){}j=wp.prototype=new M,j.constructor=wp;function Tp(){}Tp.prototype=j,j.p8=(function(e,t){var n=e.E();if(n>-1){for(var r=t.bx(n),i=e.m(),a=0;a<n;)U().iM(r,a,i.j()),a=1+a|0;return r}else{var o=null,s=t.aW(),c=s===Ra.l();o=[];for(var l=e.m();l.n();){var u=l.j(),d=c?Ca(u):u===null?s.W.z:u;o.push(d)}return(s===Ia.l()?Rl.l():s===gd.l()||s===Ng.l()?F.l():s).W.r().w(o)}}),j.g0=(function(e,t,n,r,i){var a=aa(e);a.W.Z&&aa(n).W.R(a.W)?e.x(t,n,r,i):Cp(this,e,t,n,r,i)}),j.p5=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().t(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new P().i(wp,`scala.Array$`,{ff:1,a:1});var Ep;function Dp(){return Ep||=new wp,Ep}function Op(){this.nw=null,Ap=this,this.nw=new Ld(Tl().nq)}j=Op.prototype=new M,j.constructor=Op;function kp(){}kp.prototype=j,j.sK=(function(){return this.nw.iD}),new P().i(Op,`scala.Console$`,{fh:1,hj:1});var Ap;function jp(){return Ap||=new Op,Ap}function Mp(){}j=Mp.prototype=new M,j.constructor=Mp;function Np(){}Np.prototype=j,j.F=(function(){return`<function1>`});function Pp(){}j=Pp.prototype=new cu,j.constructor=Pp;function Fp(){}Fp.prototype=j,j.tt=(function(e){return e===null?null:e.a.length===0?CC().o4:new bO(e)});function Ip(e,t,n){return e.cB(t)?e.e(t):n.e(t)}function Lp(){}j=Lp.prototype=new Zu,j.constructor=Lp;function Rp(){}Rp.prototype=j;function zp(e,t){if(t===e)e.bc(dx().p9(t));else for(var n=t.m();n.n();)e.b7(n.j());return e}function Bp(){this.qf=null,this.qo=null,this.qg=null,this.qj=null,this.qk=null,this.qi=null,this.qh=null,this.qe=null,this.qp=null,this.qc=null,this.qn=null,this.qd=null,this.ql=null,this.qm=null,Hp=this,this.qf=fT(),this.qo=JT(),this.qg=gT(),this.qj=OT(),this.qk=MT(),this.qi=wT(),this.qh=bT(),this.qe=cT(),this.qp=QT(),this.qc=iT(),this.qn=WT(),this.qd=WT(),this.ql=IT(),this.qm=BT()}j=Bp.prototype=new M,j.constructor=Bp;function Vp(){}Vp.prototype=j,j.ox=(function(e){return e===za.l()?fT():e===Ba.l()?JT():e===Ra.l()?gT():e===Va.l()?OT():e===Ha.l()?MT():e===Ua.l()?wT():e===Wa.l()?bT():e===La.l()?cT():e===Ia.l()?QT():e===F.l()?WT():e===Ng.l()?IT():e===gd.l()?BT():new AC(e)}),new P().i(Bp,`scala.reflect.ClassTag$`,{hl:1,a:1});var Hp;function Up(){return Hp||=new Bp,Hp}function Wp(){}j=Wp.prototype=new M,j.constructor=Wp;function Gp(){}Gp.prototype=j,j.F=(function(){return`<function0>`});function Kp(){}j=Kp.prototype=new M,j.constructor=Kp;function qp(){}qp.prototype=j,j.F=(function(){return`<function1>`});function Jp(){}j=Jp.prototype=new M,j.constructor=Jp;function Yp(){}Yp.prototype=j,j.F=(function(){return`<function2>`});function Xp(){}j=Xp.prototype=new M,j.constructor=Xp;function Zp(){}Zp.prototype=j,j.F=(function(){return`<function3>`});function Qp(e){this.gK=!1,this.gK=e}j=Qp.prototype=new M,j.constructor=Qp;function $p(){}$p.prototype=j,j.F=(function(){return``+this.gK}),new P().i(Qp,`scala.runtime.BooleanRef`,{hN:1,a:1});function em(e){this.ez=0,this.ez=e}j=em.prototype=new M,j.constructor=em;function tm(){}tm.prototype=j,j.F=(function(){return``+this.ez}),new P().i(em,`scala.runtime.IntRef`,{hP:1,a:1});function nm(e){this.gL=null,this.gL=e}j=nm.prototype=new M,j.constructor=nm;function rm(){}rm.prototype=j,j.F=(function(){return``+this.gL}),new P().i(nm,`scala.runtime.ObjectRef`,{hS:1,a:1});function im(){this.ar=0,this.e6=0,this.ok=0,this.iE=0,om=this,this.ar=vS(`Seq`),this.e6=vS(`Map`),this.ok=vS(`Set`),this.iE=this.jC($(),this.e6)}j=im.prototype=new Wd,j.constructor=im;function am(){}am.prototype=j,j.cG=(function(e,t){return this.pS(W().V(e),W().V(t),-889275714)}),j.pK=(function(e){return CE(e)?this.s8(e,this.ar):e instanceof nO?this.si(e,this.ar):this.sJ(e,this.ar)}),j.so=(function(e){if(e.f())return this.iE;var t=new sm,n=this.e6;return e.eD(t),n=this.h(n,t.gN),n=this.h(n,t.gO),n=this.dn(n,t.gP),this.H(n,t.gQ)}),new P().i(im,`scala.util.hashing.MurmurHash3$`,{ik:1,ij:1});var om;function G(){return om||=new im,om}function sm(){this.gN=0,this.gO=0,this.gQ=0,this.gP=0,this.gN=0,this.gO=0,this.gQ=0,this.gP=1}j=sm.prototype=new M,j.constructor=sm;function cm(){}cm.prototype=j,j.F=(function(){return`<function2>`}),j.qO=(function(e,t){var n=G().cG(e,t);this.gN=this.gN+n|0,this.gO^=n,this.gP=Math.imul(this.gP,1|n),this.gQ=1+this.gQ|0}),j.df=(function(e,t){this.qO(e,t)}),new P().i(sm,`scala.util.hashing.MurmurHash3$accum$1`,{il:1,aJ:1});var lm=class extends vp{};function um(){this.hi=null,this.jE=null,this.jF=null,fm=this,this.hi=dx().oz(U().d(new(B.r()).C([]))),this.jE=new Q((e=>{try{console.error(this.f9(e)+`
`+this.rY(e,`
`))}catch(e){var t=e instanceof vp?e:new mw(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.jF=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof mw?t.bv:t})),this.sQ(this.jE)}j=um.prototype=new M,j.constructor=um;function dm(){}dm.prototype=j,j.f9=(function(e){try{var t=e.g7()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return aa(e).j6()+`: `+t}),j.rY=(function(e,t){try{return Tu(Fh().tt(e.rZ()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.sQ=(function(e){this.hi.b7(e)}),j.cm=(function(e){for(var t=this.hi.m();t.n();){var n=t.j();try{n.e(e)}catch(e){var r=e instanceof vp?e:new mw(e),i=this.jF;if(n===null?i===null:n.r(i))throw r instanceof mw?r.bv:r;console.warn(`Error processing an unhandled error callback:`),Ad().t6(0,new rv((e=>(()=>{throw e instanceof mw?e.bv:e}))(r)))}}}),new P().i(um,`com.raquo.airstream.core.AirstreamError$`,{cw:1,hh:1,hi:1});var fm;function pm(){return fm||=new um,fm}function mm(e){e.h1(!0),e.jk(void 0)}function hm(e,t,n){return pv(e,Za().pY(t,fu().gz,!0),n)}function gm(e,t){e.jc()?_v(e,t):ym(e).push(new rv((()=>{_v(e,t)})))}function _m(e,t){e.jc()?gv(e,t):ym(e).push(new rv((()=>{gv(e,t)})))}function vm(e){return xv(e)>0}function ym(e){var t=e.jj();if(t===void 0){var n=ns().bj(U().d(new(ou.r()).C([])));return e.jk(n),n}else return t}var bm=new P().i(1,`com.raquo.airstream.core.Observer`,{az:1,av:1,ah:1});function K(e,t,n){return new i_(n.qS(t))}function xm(e,t,n,r){return new yf(new Q((e=>{(gs(),new ds(t,null,null)).bJ(new Q((e=>(t=>{n.e(t).ca(e)}))(e)))})),cc())}function Sm(e,t){this.lA=null,this.hH=null,this.lA=e,this.hH=t}j=Sm.prototype=new M,j.constructor=Sm;function Cm(){}Cm.prototype=j,j.ca=(function(e){this.hH.f()||Lv(e,this.lA,null,this.hH,$())}),new P().i(Sm,`com.raquo.laminar.modifiers.CompositeKeySetter`,{dT:1,Y:1,bf:1});function wm(e,t){this.eP=null,this.hI=null,this.hJ=null,this.eP=e,this.hI=(n=>{var r=e.fo.e(n);r.f()||t.e(r.Z())}),this.hJ=(()=>{var e=null;e=this;var t={};if(e===null)throw new ry;return t.capture=e.eP.fq,t.passive=e.eP.fp,t})()}j=wm.prototype=new M,j.constructor=wm;function Tm(){}Tm.prototype=j,j.ca=(function(e){this.qX(e,!1)}),j.qX=(function(e,t){if(Iv(e,this)===-1){var n=new Q((t=>(us().qx(e.bp,this),new Wo(t.ly,new rv((()=>{var t=Iv(e,this);t!==-1&&(Fv(e,t),us().sS(e.bp,this))})))))),r=t?Cc().tn(e,n):Ro().hg(e.cI,new Q((t=>n.e(new rc(e,t)))),!1);return Pv(e,this,t),r}else{var i=new Q((e=>void 0));return Ro().pP(e.cI,new Q((t=>{i.e(new rc(e,t))})),!1)}}),j.F=(function(){return`EventListener(`+this.eP.eo.gr+`)`});var Em=new P().i(wm,`com.raquo.laminar.modifiers.EventListener`,{dU:1,Y:1,be:1});function Dm(e,t,n){this.lC=null,this.M=null,this.lB=null,this.lC=e,this.M=t,this.lB=n}j=Dm.prototype=new M,j.constructor=Dm;function Om(){}Om.prototype=j,j.ca=(function(e){this.lB.oy(e,this.lC,this.M)}),new P().i(Dm,`com.raquo.laminar.modifiers.KeySetter`,{dV:1,Y:1,bf:1});function km(e,t,n){this.lD=null,this.lF=null,this.lE=null,this.lD=e,this.lF=t,this.lE=n}j=km.prototype=new M,j.constructor=km;function Am(){}Am.prototype=j,j.ca=(function(e){this.qY(e)}),j.qY=(function(e){e.sF(this.lD);var t=this.lF,n=new Q((t=>{this.lE.oy(e,t,this)}));return Ro().tc(e.cI,t,n)}),new P().i(km,`com.raquo.laminar.modifiers.KeyUpdater`,{dW:1,Y:1,be:1});function jm(e,t){if(this.hN=null,this.lJ=null,this.lK=null,this.lJ=t,kf(this),e===null)throw Oh(new kh,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!us().sf(e,document))throw Oh(new kh,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.lK=e,this.sr()}j=jm.prototype=new M,j.constructor=jm;function Mm(){}Mm.prototype=j,j.gZ=(function(){return this.hN}),j.oR=(function(e){this.hN=e}),j.sr=(function(){return this.hN.om(),yc().gT(this,this.lJ,void 0)}),j.eG=(function(){return this.lK}),new P().i(jm,`com.raquo.laminar.nodes.RootNode`,{ec:1,aE:1,bh:1});function Nm(e,t,n){this.hP=null,this.lO=null,this.lN=null,this.lO=e,this.lN=n,Af(this,e,!1)}j=Nm.prototype=new Mf,j.constructor=Nm;function Pm(){}Pm.prototype=j,j.jm=(function(){return this.lO}),j.qI=(function(){var e=this.lN;return e===void 0?void 0:e.map((e=>e.tu.cH))}),new P().i(Nm,`com.raquo.laminar.tags.CustomHtmlTag`,{bi:1,bj:1,aF:1});function Fm(){this.cp=null,this.cW=null,this.lQ=null,this.lR=!1,uf(this,`type`,new Ff)}j=Fm.prototype=new ff,j.constructor=Fm;function Im(){}Im.prototype=j,j.pr=(function(){return this.lR||=(this.lQ=Rm().c(`number`),!0),this.lQ}),new P().i(Fm,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{ei:1,ac:1,A:1});var Lm;function Rm(){return Lm||=new Fm,Lm}function zm(){this.cp=null,this.cW=null,this.lS=null,this.lX=!1,this.lT=null,this.lU=!1,this.lV=null,this.lW=!1,this.lY=null,this.m3=!1,this.lZ=null,this.m0=!1,this.m1=null,this.m2=!1,this.m4=null,this.m9=!1,this.m5=null,this.m6=!1,this.m7=null,this.m8=!1,this.ma=null,this.mf=!1,this.mb=null,this.mc=!1,this.md=null,this.me=!1,uf(this,`placement`,new Ff)}j=zm.prototype=new ff,j.constructor=zm;function Bm(){}Bm.prototype=j,j.iN=(function(){return this.lX||=(this.lS=q().c(`bottom`),!0),this.lS}),j.iO=(function(){return this.lU||=(this.lT=q().c(`bottom-end`),!0),this.lT}),j.iP=(function(){return this.lW||=(this.lV=q().c(`bottom-start`),!0),this.lV}),j.jd=(function(){return this.m3||=(this.lY=q().c(`left`),!0),this.lY}),j.je=(function(){return this.m0||=(this.lZ=q().c(`left-end`),!0),this.lZ}),j.jf=(function(){return this.m2||=(this.m1=q().c(`left-start`),!0),this.m1}),j.jw=(function(){return this.m9||=(this.m4=q().c(`right`),!0),this.m4}),j.jx=(function(){return this.m6||=(this.m5=q().c(`right-end`),!0),this.m5}),j.h9=(function(){return this.m8||=(this.m7=q().c(`right-start`),!0),this.m7}),j.co=(function(){return this.mf||=(this.ma=q().c(`top`),!0),this.ma}),j.jA=(function(){return this.mc||=(this.mb=q().c(`top-end`),!0),this.mb}),j.jB=(function(){return this.me||=(this.md=q().c(`top-start`),!0),this.md}),new P().i(zm,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{ej:1,ac:1,A:1});var Vm;function q(){return Vm||=new zm,Vm}function Hm(){this.cp=null,this.cW=null,uf(this,`arrow-placement`,new Ff)}j=Hm.prototype=new ff,j.constructor=Hm;function Um(){}Um.prototype=j,new P().i(Hm,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupArrowPlacement$`,{ek:1,ac:1,A:1});var Wm;function Gm(){return Wm||=new Hm,Wm}function Km(){this.cp=null,this.cW=null,uf(this,`auto-size`,new Ff)}j=Km.prototype=new ff,j.constructor=Km;function qm(){}qm.prototype=j,new P().i(Km,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupAutoSize$`,{el:1,ac:1,A:1});var Jm;function Ym(){return Jm||=new Km,Jm}function Xm(){this.cp=null,this.cW=null,this.mg=null,this.mh=!1,uf(this,`boundary`,new Ff)}j=Xm.prototype=new ff,j.constructor=Xm;function Zm(){}Zm.prototype=j,j.hc=(function(){return this.mh||=(this.mg=$m().c(`scroll`),!0),this.mg}),new P().i(Xm,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupBoundary$`,{em:1,ac:1,A:1});var Qm;function $m(){return Qm||=new Xm,Qm}function eh(){this.cp=null,this.cW=null,this.mi=null,this.mj=!1,uf(this,`flip-fallback-strategy`,new Ff)}j=eh.prototype=new ff,j.constructor=eh;function th(){}th.prototype=j,j.sa=(function(){return this.mj||=(this.mi=rh().c(`initial`),!0),this.mi}),new P().i(eh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupFlipFallbackStrategy$`,{en:1,ac:1,A:1});var nh;function rh(){return nh||=new eh,nh}function ih(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.mo=null,this.mp=!1,this.mq=null,this.mr=!1,this.mk=null,this.ml=!1,this.mm=null,this.mn=!1,Lf(this,`wa-input`)}j=ih.prototype=new zf,j.constructor=ih;function ah(){}ah.prototype=j,j.ae=(function(){return this.mp||=(this.mo=(Z(),new sf(`input`)),!0),this.mo}),j.pT=(function(){return this.mr||=(this.mq=Rm(),!0),this.mq}),j.ci=(function(){return this.ml||=(this.mk=(Z(),uf(new df,`label`,ws().bl)),!0),this.mk}),j.cR=(function(){return this.mn||=(this.mm=(Z(),uf(new df,`name`,ws().bl)),!0),this.mm}),j.f4=(function(){return ln}),new P().i(ih,`io.github.nguyenyou.webawesome.laminar.Input$`,{eo:1,aj:1,ai:1});var oh;function sh(){return oh||=new ih,oh}function ch(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.mu=null,this.mv=!1,this.ms=null,this.mt=!1,this.mQ=null,this.mR=!1,this.mE=null,this.mF=!1,this.mG=null,this.mH=!1,this.mW=null,this.mX=!1,this.mw=null,this.mz=!1,this.mx=null,this.my=!1,this.mI=null,this.mN=!1,this.mJ=null,this.mK=!1,this.mL=null,this.mM=!1,this.mS=null,this.mV=!1,this.mT=null,this.mU=!1,this.mA=null,this.mD=!1,this.mB=null,this.mC=!1,this.mO=null,this.mP=!1,Lf(this,`wa-popup`)}j=ch.prototype=new zf,j.constructor=ch;function lh(){}lh.prototype=j,j.qJ=(function(){return this.mv||=(this.mu=(Z(),uf(new df,`anchor`,ws().bl)),!0),this.mu}),j.bX=(function(){return this.mt||=(this.ms=(Z(),uf(new df,`active`,ws().eO)),!0),this.ms}),j.c0=(function(){return this.mR||=(this.mQ=q(),!0),this.mQ}),j.gW=(function(){return this.mF||=(this.mE=$m(),!0),this.mE}),j.gY=(function(){return this.mH||=(this.mG=(Z(),uf(new df,`distance`,ws().eA())),!0),this.mG}),j.jz=(function(){return this.mX||=(this.mW=(Z(),uf(new df,`skidding`,ws().eA())),!0),this.mW}),j.oK=(function(){return this.mz||=(this.mw=(Z(),uf(new df,`arrow`,ws().eO)),!0),this.mw}),j.qR=(function(){return this.my||=(this.mx=Gm(),!0),this.mx}),j.p6=(function(){return this.mN||=(this.mI=(Z(),uf(new df,`flip`,ws().eO)),!0),this.mI}),j.rH=(function(){return this.mK||=(this.mJ=(Z(),uf(new df,`flip-fallback-placements`,ws().bl)),!0),this.mJ}),j.rI=(function(){return this.mM||=(this.mL=rh(),!0),this.mL}),j.t7=(function(){return this.mV||=(this.mS=(Z(),uf(new df,`shift`,ws().eO)),!0),this.mS}),j.t8=(function(){return this.mU||=(this.mT=(Z(),uf(new df,`shift-padding`,ws().eA())),!0),this.mT}),j.qT=(function(){return this.mD||=(this.mA=Ym(),!0),this.mA}),j.qU=(function(){return this.mC||=(this.mB=(Z(),uf(new df,`auto-size-padding`,ws().eA())),!0),this.mB}),j.s4=(function(){return this.mP||=(this.mO=(Z(),uf(new df,`hover-bridge`,ws().eO)),!0),this.mO}),j.f4=(function(){return _i}),new P().i(ch,`io.github.nguyenyou.webawesome.laminar.Popup$`,{ep:1,aj:1,ai:1});var uh;function dh(){return uh||=new ch,uh}function fh(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.ne=null,this.nf=!1,this.n8=null,this.n9=!1,this.nc=null,this.nd=!1,this.na=null,this.nb=!1,this.ng=null,this.nh=!1,Lf(this,`wa-slider`)}j=fh.prototype=new zf,j.constructor=fh;function ph(){}ph.prototype=j,j.ae=(function(){return this.nf||=(this.ne=(Z(),new sf(`input`)),!0),this.ne}),j.ci=(function(){return this.n9||=(this.n8=(Z(),uf(new df,`label`,ws().bl)),!0),this.n8}),j.h4=(function(){return this.nd||=(this.nc=(Z(),uf(new df,`min`,ws().eA())),!0),this.nc}),j.h3=(function(){return this.nb||=(this.na=(Z(),uf(new df,`max`,ws().eA())),!0),this.na}),j.hd=(function(){return this.nh||=(this.ng=(Z(),uf(new df,`step`,ws().eA())),!0),this.ng}),j.f4=(function(){return $i}),new P().i(fh,`io.github.nguyenyou.webawesome.laminar.Slider$`,{es:1,aj:1,ai:1});var mh;function hh(){return mh||=new fh,mh}function gh(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.nk=null,this.nl=!1,this.ni=null,this.nj=!1,Lf(this,`wa-switch`)}j=gh.prototype=new zf,j.constructor=gh;function _h(){}_h.prototype=j,j.ae=(function(){return this.nl||=(this.nk=(Z(),new sf(`input`)),!0),this.nk}),j.cR=(function(){return this.nj||=(this.ni=(Z(),uf(new df,`name`,ws().bl)),!0),this.ni}),j.f4=(function(){return na}),new P().i(gh,`io.github.nguyenyou.webawesome.laminar.Switch$`,{et:1,aj:1,ai:1});var vh;function yh(){return vh||=new gh,vh}function bh(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.nm=null,this.nn=!1,Lf(this,`wa-option`)}j=bh.prototype=new zf,j.constructor=bh;function xh(){}xh.prototype=j,j.J=(function(){return this.nn||=(this.nm=(Z(),uf(new df,`value`,ws().bl)),!0),this.nm}),j.f4=(function(){return pn}),new P().i(bh,`io.github.nguyenyou.webawesome.laminar.UOption$`,{ev:1,aj:1,ai:1});var Sh;function J(){return Sh||=new bh,Sh}function Ch(){}j=Ch.prototype=new Np,j.constructor=Ch;function wh(){}wh.prototype=j,j.e=(function(e){return Z().b}),new P().i(Ch,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{ex:1,fi:1,e:1});function Th(e){if(e.W.Z)return e.W.Q().j6()+`[]`;for(var t=e.W.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Eh(e){this.hR=null,this.W=e}j=Eh.prototype=new M,j.constructor=Eh;function Dh(){}Dh.prototype=j,j.F=(function(){return(this.W.Y?`interface `:this.W.X?``:`class `)+this.W.N}),j.j6=(function(){return this.hR===null&&(this.hR=Th(this)),this.hR}),new P().i(Eh,`java.lang.Class`,{eF:1,a:1,Z:1});function Oh(e,t){return _p(e,t,null,!0,!0),e}var kh=class extends vp{};new P().i(kh,`java.lang.Exception`,{D:1,u:1,a:1});function Ah(){}j=Ah.prototype=new M,j.constructor=Ah;function jh(){}jh.prototype=j;function Mh(){this.qb=null,Ph=this,this.qb=bg()}j=Mh.prototype=new Fp,j.constructor=Mh;function Nh(){}Nh.prototype=j,j.sW=(function(e){if(!e)throw Jv(new Xv,`requirement failed`)}),new P().i(Mh,`scala.Predef$`,{fq:1,fk:1,fl:1});var Ph;function Fh(){return Ph||=new Mh,Ph}function Ih(e,t){switch(t){case 0:return e.bn();case 1:return e.bi();default:throw Qv(new $v,t+` is out of bounds (min 0, max 1)`)}}function Lh(e,t){return e.fx=t,e}function Rh(){this.fx=null}j=Rh.prototype=new M,j.constructor=Rh;function zh(){}zh.prototype=j,j.aI=(function(e){return this.fx.iY(e,iT())}),j.b9=(function(){return this.fx.h5(iT())}),j.dg=(function(e){return this.fx.iY(e,iT())});function Bh(e,t){return e.gA=t,e}function Vh(){this.gA=null}j=Vh.prototype=new M,j.constructor=Vh;function Hh(){}Hh.prototype=j,j.aI=(function(e){return this.gA.aI(e)}),j.b9=(function(){return this.gA.b9()});function Uh(e,t){if(t<0)return 1;var n=e.E();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.m();i.n();){if(r===t)return 1;i.j(),r=1+r|0}return r-t|0}function Wh(e,t){return new Fy(e).iQ(t)}function Gh(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Y().N:new zy(e,r,i)}function Kh(e,t){for(var n=t.m();e.n()&&n.n();)if(!H().t(e.j(),n.j()))return!1;return e.n()===n.n()}function qh(){this.N=null,Yh=this,this.N=new Ty}j=qh.prototype=new M,j.constructor=qh;function Jh(){}Jh.prototype=j,j.b9=(function(){return new zS}),j.aI=(function(e){return e.m()}),new P().i(qh,`scala.collection.Iterator$`,{fK:1,K:1,a:1});var Yh;function Y(){return Yh||=new qh,Yh}function Xh(e,t){return e.id=t,e}function Zh(){this.id=null}j=Zh.prototype=new M,j.constructor=Zh;function Qh(){}Qh.prototype=j,j.aI=(function(e){return this.id.aI(e)});function $h(){}j=$h.prototype=new M,j.constructor=$h;function eg(){}eg.prototype=j,j.pa=(function(e){return aw(e)?e:wy(e)?new rE(new Eg((e=>(()=>e.m()))(e))):DE(new OE,Z_().j0(e))}),j.b9=(function(){return new Q_((ax(),new ox),new X((e=>ng().pa(e))))}),j.aI=(function(e){return this.pa(e)}),new P().i($h,`scala.collection.View$`,{fZ:1,K:1,a:1});var tg;function ng(){return tg||=new $h,tg}function rg(e,t,n,r,i,a){this.a4=0,this.ao=0,this.as=null,this.bB=null,this.aZ=0,this.bq=0,this.a4=e,this.ao=t,this.as=n,this.bB=r,this.aZ=i,this.bq=a}j=rg.prototype=new Rp,j.constructor=rg;function ig(){}ig.prototype=j,j.aX=(function(){return this.aZ}),j.eb=(function(){return this.bq}),j.ee=(function(e){return this.as.a[e<<1]}),j.dl=(function(e){return this.as.a[1+(e<<1)|0]}),j.pe=(function(e){return new yy(this.as.a[e<<1],this.as.a[1+(e<<1)|0])}),j.g6=(function(e){return this.bB.a[e]}),j.dj=(function(e){return this.as.a[(-1+this.as.a.length|0)-e|0]}),j.iK=(function(e,t,n,r){var i=nd().eF(n,r),a=nd().ea(i);if((this.a4&a)!==0){var o=nd().cQ(this.a4,i,a);if(H().t(e,this.ee(o)))return this.dl(o);throw new sy(`key not found: `+e)}else if((this.ao&a)!==0)return this.dj(nd().cQ(this.ao,i,a)).iK(e,t,n,5+r|0);else throw new sy(`key not found: `+e)}),j.j4=(function(e,t,n,r,i){var a=nd().eF(n,r),o=nd().ea(a);if((this.a4&o)!==0){var s=nd().cQ(this.a4,a,o);return H().t(e,this.ee(s))?this.dl(s):i.ac()}else return(this.ao&o)===0?i.ac():this.dj(nd().cQ(this.ao,a,o)).j4(e,t,n,5+r|0,i)}),j.iR=(function(e,t,n,r){var i=nd().eF(n,r),a=nd().ea(i);if((this.a4&a)!==0){var o=nd().cQ(this.a4,i,a);return this.bB.a[o]===t&&H().t(e,this.ee(o))}else return(this.ao&a)!==0&&this.dj(nd().cQ(this.ao,i,a)).iR(e,t,n,5+r|0)}),j.pU=(function(e,t,n,r,i,a){var o=nd().eF(r,i),s=nd().ea(o);if((this.a4&s)!==0){var c=nd().cQ(this.a4,o,s),l=this.ee(c),u=this.g6(c);if(u===n&&H().t(l,e))if(a){var d=this.dl(c);return Object.is(l,e)&&Object.is(d,t)?this:this.r9(s,e,t)}else return this;else{var f=this.dl(c),p=bu().cA(u);return this.r7(s,p,this.jl(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.ao&s)!==0){var m=nd().cQ(this.ao,o,s),h=this.dj(m),g=h.pV(e,t,n,r,5+i|0,a);return g===h?this:this.r8(s,h,g)}else return this.r6(s,e,n,r,t)}),j.jl=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new ag(n,r,Kb().j1(new pD([new yy(e,t),new yy(i,a)])));var l=nd().eF(r,c),u=nd().eF(s,c),d=r+s|0;if(l!==u){var f=nd().ea(l)|nd().ea(u);return l<u?new rg(f,0,new N([e,t,i,a]),new Ma(new Int32Array([n,o])),2,d):new rg(f,0,new N([i,a,e,t]),new Ma(new Int32Array([o,n])),2,d)}else{var p=nd().ea(l),m=this.jl(e,t,n,r,i,a,o,s,5+c|0);return new rg(0,p,new N([m]),au().i0,m.aX(),m.eb())}}),j.j7=(function(){return this.ao!==0}),j.jo=(function(){return op().e9(this.ao)}),j.h0=(function(){return this.a4!==0}),j.js=(function(){return op().e9(this.a4)}),j.g1=(function(e){return op().e9(this.a4&(-1+e|0))}),j.jp=(function(e){return op().e9(this.ao&(-1+e|0))}),j.r9=(function(e,t,n){var r=this.g1(e)<<1,i=this.as,a=new N(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[1+r|0]=n,new rg(this.a4,this.ao,a,this.bB,this.aZ,this.bq)}),j.r8=(function(e,t,n){var r=(-1+this.as.a.length|0)-this.jp(e)|0,i=this.as,a=new N(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[r]=n,new rg(this.a4,this.ao,a,this.bB,(this.aZ-t.aX()|0)+n.aX()|0,(this.bq-t.eb()|0)+n.eb()|0)}),j.r6=(function(e,t,n,r,i){var a=this.g1(e),o=a<<1,s=this.as,c=new N(2+s.a.length|0);s.x(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.x(o,c,l,u);var d=this.sb(this.bB,a,n);return new rg(this.a4|e,this.ao,c,d,1+this.aZ|0,this.bq+r|0)}),j.sq=(function(e,t,n){var r=this.g1(e),i=r<<1,a=(-2+this.as.a.length|0)-this.jp(e)|0,o=this.as,s=new N(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.pD(this.bB,r);return this.a4^=e,this.ao|=e,this.as=s,this.bB=p,this.aZ=(-1+this.aZ|0)+n.aX()|0,this.bq=(this.bq-t|0)+n.eb()|0,this}),j.r7=(function(e,t,n){var r=this.g1(e),i=r<<1,a=(-2+this.as.a.length|0)-this.jp(e)|0,o=this.as,s=new N(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.pD(this.bB,r);return new rg(this.a4^e,this.ao|e,s,p,(-1+this.aZ|0)+n.aX()|0,(this.bq-t|0)+n.eb()|0)}),j.eD=(function(e){for(var t=op().e9(this.a4),n=0;n<t;)e.df(this.ee(n),this.dl(n)),n=1+n|0;for(var r=op().e9(this.ao),i=0;i<r;)this.dj(i).eD(e),i=1+i|0}),j.r=(function(e){if(e instanceof rg){if(this===e)return!0;if(this.bq===e.bq&&this.ao===e.ao&&this.a4===e.a4&&this.aZ===e.aZ&&R().iU(this.bB,e.bB)){var t=this.as,n=e.as,r=this.as.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=H().t(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),j.z=(function(){throw new ay(`Trie nodes do not support hashing.`)}),j.oS=(function(){for(var e=this.as.i(),t=e.a.length,n=op().e9(this.a4)<<1;n<t;)e.a[n]=e.a[n].oT(),n=1+n|0;return new rg(this.a4,this.ao,e,this.bB.i(),this.aZ,this.bq)}),j.oT=(function(){return this.oS()}),j.pV=(function(e,t,n,r,i,a){return this.pU(e,t,n,r,i,a)}),j.j3=(function(e){return this.dj(e)}),new P().i(rg,`scala.collection.immutable.BitmapIndexedMapNode`,{bW:1,c6:1,aS:1});function ag(e,t,n){this.ij=0,this.dK=0,this.ap=null,this.ij=e,this.dK=t,this.ap=n,Fh().sW(this.ap.u()>=2)}j=ag.prototype=new Rp,j.constructor=ag;function og(){}og.prototype=j,j.fa=(function(e){for(var t=this.ap.m(),n=0;t.n();){if(H().t(t.j().bn(),e))return n;n=1+n|0}return-1}),j.aX=(function(){return this.ap.u()}),j.iK=(function(e,t,n,r){var i=this.rS(e,t,n,r);if(i.f())throw Y().N.j(),new qv;return i.Z()}),j.rS=(function(e,t,n,r){if(this.dK===n){var i=this.fa(e);return i>=0?new OS(this.ap.y(i).bi()):DS()}else return DS()}),j.j4=(function(e,t,n,r,i){if(this.dK===n){var a=this.fa(e);return a===-1?i.ac():this.ap.y(a).bi()}else return i.ac()}),j.iR=(function(e,t,n,r){return this.dK===n&&this.fa(e)>=0}),j.pV=(function(e,t,n,r,i,a){var o=this.fa(e);return o>=0?a?Object.is(this.ap.y(o).bi(),t)?this:new ag(n,r,this.ap.ei(o,new yy(e,t))):this:new ag(n,r,this.ap.e8(new yy(e,t)))}),j.j7=(function(){return!1}),j.jo=(function(){return 0}),j.dj=(function(e){throw Qv(new $v,`No sub-nodes present in hash-collision leaf node.`)}),j.h0=(function(){return!0}),j.js=(function(){return this.ap.u()}),j.ee=(function(e){return this.ap.y(e).bn()}),j.dl=(function(e){return this.ap.y(e).bi()}),j.pe=(function(e){return this.ap.y(e)}),j.g6=(function(e){return this.ij}),j.eD=(function(e){this.ap.bJ(new X((t=>{if(t!==null){var n=t.bn(),r=t.bi();return e.df(n,r)}else throw new my(t)})))}),j.r=(function(e){if(e instanceof ag){if(this===e)return!0;if(this.dK===e.dK&&this.ap.u()===e.ap.u()){for(var t=this.ap.m();t.n();){var n=t.j();if(n===null)throw new my(n);var r=n.bn(),i=n.bi(),a=e.fa(r);if(a<0||!H().t(i,e.ap.y(a).bi()))return!1}return!0}else return!1}else return!1}),j.z=(function(){throw new ay(`Trie nodes do not support hashing.`)}),j.eb=(function(){return Math.imul(this.ap.u(),this.dK)}),j.oT=(function(){return new ag(this.ij,this.dK,this.ap)}),j.j3=(function(e){return this.dj(e)}),new P().i(ag,`scala.collection.immutable.HashCollisionMapNode`,{bY:1,c6:1,aS:1});function sg(){this.ik=null,lg=this,this.ik=new hD(Ju().nV)}j=sg.prototype=new M,j.constructor=sg;function cg(){}cg.prototype=j,j.rM=(function(e){return e instanceof hD?e:new xb().iJ(e).jv()}),j.aI=(function(e){return this.rM(e)}),new P().i(sg,`scala.collection.immutable.HashMap$`,{g6:1,aM:1,a:1});var lg;function ug(){return lg||=new sg,lg}function dg(e,t){this.nS=null,this.nT=null,this.nS=e,this.nT=t}j=dg.prototype=new M,j.constructor=dg;function fg(){}fg.prototype=j,j.A=(function(){return this.nS}),j.aR=(function(){return this.nT}),new P().i(dg,`scala.collection.immutable.LazyList$State$Cons`,{gg:1,c1:1,a:1});function pg(){}j=pg.prototype=new M,j.constructor=pg;function mg(){}mg.prototype=j,j.j8=(function(){throw new sy(`head of empty lazy list`)}),j.aR=(function(){throw new ay(`tail of empty lazy list`)}),j.A=(function(){this.j8()}),new P().i(pg,`scala.collection.immutable.LazyList$State$Empty$`,{gh:1,c1:1,a:1});var hg;function gg(){return hg||=new pg,hg}function _g(){}j=_g.prototype=new M,j.constructor=_g;function vg(){}vg.prototype=j,j.rO=(function(e){return eC(e)&&e.f()?ZE():e instanceof hD||e instanceof QE||e instanceof eD||e instanceof nD||e instanceof iD?e:new Bb().on(e).pF()}),j.aI=(function(e){return this.rO(e)}),new P().i(_g,`scala.collection.immutable.Map$`,{gk:1,aM:1,a:1});var yg;function bg(){return yg||=new _g,yg}function xg(e,t,n){var r=t.E();if(r!==-1){var i=r+n|0;e.be(i<0?0:i)}}function Sg(){}j=Sg.prototype=new M,j.constructor=Sg;function Cg(){}Cg.prototype=j,j.rP=(function(e){var t=e.E();return CD(new TD,t>0?fa((1+t|0)/.75):16,.75).oq(e)}),j.b9=(function(){return new fx(16,.75)}),j.aI=(function(e){return this.rP(e)}),new P().i(Sg,`scala.collection.mutable.HashSet$`,{h2:1,K:1,a:1});var wg;function Tg(){return wg||=new Sg,wg}function Eg(e){this.ob=null,this.ob=e}j=Eg.prototype=new Gp,j.constructor=Eg;function Dg(){}Dg.prototype=j,j.ac=(function(){return(0,this.ob)()}),new P().i(Eg,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{hJ:1,cm:1,aI:1});function X(e){this.oc=null,this.oc=e}j=X.prototype=new qp,j.constructor=X;function Og(){}Og.prototype=j,j.e=(function(e){return(0,this.oc)(e)}),new P().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{hK:1,cn:1,e:1});function kg(e){this.od=null,this.od=e}j=kg.prototype=new Yp,j.constructor=kg;function Ag(){}Ag.prototype=j,j.df=(function(e,t){return(0,this.od)(e,t)}),new P().i(kg,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{hL:1,co:1,aJ:1});function jg(){}j=jg.prototype=new M,j.constructor=jg;function Mg(){}Mg.prototype=j,j.F=(function(){return`<function1>`}),j.e=(function(e){return this.dh(e,fu().gz)});var Ng=new P().i(0,`scala.runtime.Nothing$`,{hQ:1,u:1,a:1});function Pg(){}j=Pg.prototype=new M,j.constructor=Pg;function Fg(){}Fg.prototype=j,j.rQ=(function(e){return(t=>e.e(t))}),new P().i(Pg,`scala.scalajs.js.Any$`,{hW:1,hX:1,hY:1});var Ig;function Lg(){return Ig||=new Pg,Ig}function Rg(){}j=Rg.prototype=new Gp,j.constructor=Rg;function zg(){}zg.prototype=j;function Bg(){}j=Bg.prototype=new qp,j.constructor=Bg;function Vg(){}Vg.prototype=j;function Hg(){}j=Hg.prototype=new Yp,j.constructor=Hg;function Ug(){}Ug.prototype=j;function Wg(){}j=Wg.prototype=new Zp,j.constructor=Wg;function Gg(){}Gg.prototype=j;function Kg(e,t,n,r){if(this.jJ=null,this.jH=!1,this.hj=null,this.jI=null,this.jJ=e,this.jH=t,this.hj=n,r===null)throw new ry;this.jI=void 0}j=Kg.prototype=new M,j.constructor=Kg;function qg(){}qg.prototype=j,j.gb=(function(){return this.jI}),j.g2=(function(){return Ka(this)}),j.F=(function(){return qa(this)}),j.aQ=(function(e){try{this.jJ.e(e)}catch(e){var t=e instanceof vp?e:new mw(e);this.jH?this.h6(new Jx(t)):pm().cm(new Jx(t))}}),j.h6=(function(e){try{this.hj.cB(e)?this.hj.e(e):pm().cm(e)}catch(n){var t=n instanceof vp?n:new mw(n);pm().cm(new Yx(t,e))}}),j.fd=(function(e){e.di(new Q((e=>{this.h6(e)})),new Q((e=>{this.aQ(e)})))}),new P().i(Kg,`com.raquo.airstream.core.Observer$$anon$8`,{cy:1,av:1,ah:1,az:1});function Jg(e,t,n){if(this.hk=null,this.jK=!1,this.jL=null,this.hk=e,this.jK=t,n===null)throw new ry;this.jL=void 0}j=Jg.prototype=new M,j.constructor=Jg;function Yg(){}Yg.prototype=j,j.gb=(function(){return this.jL}),j.g2=(function(){return Ka(this)}),j.F=(function(){return qa(this)}),j.aQ=(function(e){this.fd(new Gx(e))}),j.h6=(function(e){this.fd(new Ux(e))}),j.fd=(function(e){try{this.hk.cB(e)?this.hk.e(e):e.di(new Q((e=>{pm().cm(e)})),new Q((e=>void 0)))}catch(n){var t=n instanceof vp?n:new mw(n);this.jK&&e.pj()?this.h6(new Jx(t)):e.di(new Q((e=>{pm().cm(new Yx(t,e))})),new Q((e=>{pm().cm(new Jx(t))})))}}),new P().i(Jg,`com.raquo.airstream.core.Observer$$anon$9`,{cz:1,av:1,ah:1,az:1});function Xg(e){if(this.ke=null,this.kf=!1,this.pZ=null,e===null)throw new ry;Ds(this)}j=Xg.prototype=new M,j.constructor=Xg;function Zg(){}Zg.prototype=j,j.tf=(function(){return this.kf||=(this.ke=new Nf(`svg`,!1),!0),this.ke}),new P().i(Xg,`com.raquo.laminar.api.Laminar$svg$`,{d3:1,dz:1,dd:1,df:1});function Qg(){this.b=null,e_=this,this.b=new AE}j=Qg.prototype=new M,j.constructor=Qg;function $g(){}$g.prototype=j,new P().i(Qg,`com.raquo.laminar.api.package$`,{d6:1,b9:1,bc:1,b8:1});var e_;function Z(){return e_||=new Qg,e_}function t_(e,t,n){return e.cX=t,e.cY=n,e}function n_(){this.cX=null,this.cY=null}j=n_.prototype=new Qs,j.constructor=n_;function r_(){}r_.prototype=j,j.c=(function(e){return new Dm(this,la(e),new cv(((e,t,n)=>{us().pN(e,t,n)})))}),new P().i(n_,`com.raquo.laminar.keys.StyleProp`,{a7:1,A:1,a5:1,a6:1});function i_(e){this.lM=null,this.hO=null,this.lM=DS(),this.hO=us().rc(e)}j=i_.prototype=new M,j.constructor=i_;function a_(){}a_.prototype=j,j.pO=(function(e){this.lM=e}),j.pW=(function(e){}),j.ca=(function(e){yc().gT(e,this,void 0)}),j.ti=(function(){return this.hO.data}),j.eG=(function(){return this.hO}),new P().i(i_,`com.raquo.laminar.nodes.TextNode`,{ee:1,aE:1,Y:1,bg:1});function o_(){this.dv=null,this.ds=null,this.dt=!1,this.du=null,this.dw=!1,this.dx=null,this.dy=!1,this.n4=null,this.n5=!1,this.n2=null,this.n3=!1,this.n6=null,this.n7=!1,this.n0=null,this.n1=!1,Lf(this,`wa-select`)}j=o_.prototype=new zf,j.constructor=o_;function s_(){}s_.prototype=j,j.ae=(function(){return this.n5||=(this.n4=(Z(),new sf(`input`)),!0),this.n4}),j.cR=(function(){return this.n3||=(this.n2=(Z(),uf(new df,`name`,ws().bl)),!0),this.n2}),j.J=(function(){return this.n7||=(this.n6=(Z(),uf(new df,`value`,ws().bl)),!0),this.n6}),j.ci=(function(){return this.n1||=(this.n0=(Z(),uf(new df,`label`,ws().bl)),!0),this.n0}),j.f4=(function(){return Ui}),new P().i(o_,`io.github.nguyenyou.webawesome.laminar.Select$`,{er:1,aj:1,ai:1,ey:1});var c_;function l_(){return c_||=new o_,c_}function u_(){}j=u_.prototype=new M,j.constructor=u_;function d_(){}d_.prototype=j;function f_(e,t){return e===t}function p_(e){return e?1231:1237}var m_=new P().i(0,`java.lang.Boolean`,{bp:1,a:1,a3:1,Z:1},(e=>typeof e==`boolean`));function h_(e){return e}function g_(e,t){return t instanceof ia&&e===t.c}var __=new P().i(0,`java.lang.Character`,{bq:1,a:1,a3:1,Z:1},(e=>e instanceof ia));function v_(e,t){return _p(e,t,null,!0,!0),e}var y_=class extends kh{};new P().i(y_,`java.lang.RuntimeException`,{E:1,D:1,u:1,a:1});function b_(e){return e.o=``,e}function x_(e,t){if(b_(e),t===null)throw new ry;return e.o=t,e}function S_(e,t){if(b_(e),t<0)throw new ny;return e}function C_(){this.o=null}j=C_.prototype=new M,j.constructor=C_;function w_(){}w_.prototype=j,j.ot=(function(e){var t=gp().st(e,0,e.a.length);return this.o=``+this.o+t,this}),j.F=(function(){return this.o}),j.u=(function(){return this.o.length}),j.oL=(function(e){return this.o.charCodeAt(e)}),new P().i(C_,`java.lang.StringBuilder`,{eY:1,aG:1,bn:1,a:1});function T_(){}j=T_.prototype=new jh,j.constructor=T_;function E_(){}E_.prototype=j;function D_(){}j=D_.prototype=new M,j.constructor=D_;function O_(){}O_.prototype=j,j.dh=(function(e,t){return Ip(this,e,t)}),j.F=(function(){return`<function1>`}),j.cB=(function(e){return!1}),j.iL=(function(e){throw new my(e)}),j.e=(function(e){this.iL(e)}),new P().i(D_,`scala.PartialFunction$$anon$1`,{fp:1,j:1,e:1,a:1});function k_(){}j=k_.prototype=new M,j.constructor=k_;function A_(){}A_.prototype=j,j.m=(function(){return this}),j.iQ=(function(e){return Wh(this,e)}),j.ec=(function(e){return this.gg(e,-1)}),j.gg=(function(e,t){return Gh(this,e,t)}),j.F=(function(){return`<iterator>`}),j.bZ=(function(e,t,n){return wu(this,e,t,n)}),j.e7=(function(e,t,n,r){return Eu(this,e,t,n,r)}),j.E=(function(){return-1});function j_(){this.id=null,this.nK=null,this.nL=null,Xh(this,bg()),N_=this,this.nK=Ta(new Ea),this.nL=new Eg((()=>P_().nK))}j=j_.prototype=new Qh,j.constructor=j_;function M_(){}M_.prototype=j,new P().i(j_,`scala.collection.Map$`,{fS:1,fT:1,aM:1,a:1});var N_;function P_(){return N_||=new j_,N_}function F_(e,t){return e.eU=t,e}function I_(){this.eU=null}j=I_.prototype=new M,j.constructor=I_;function L_(){}L_.prototype=j,j.oz=(function(e){return this.eU.dg(e)}),j.p9=(function(e){return this.eU.aI(e)}),j.b9=(function(){return this.eU.b9()}),j.aI=(function(e){return this.p9(e)}),j.dg=(function(e){return this.oz(e)});function R_(e){return e.cP(new X((e=>e)))}function z_(e,t){return e.g4(new aE(e,t))}function B_(e,t){return t>=0&&e.bo(t)>0}function V_(e){return e.bo(0)===0}function H_(e,t){var n=e.E();if(n!==-1)var r=t.E(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Kh(e.m(),t)}function U_(e,t){for(var n=e.bw().b9(),r=e.m();r.n();)n.b7(t.e(r.j()));return n.bd()}function W_(){this.gA=null,Bh(this,Ab())}j=W_.prototype=new Hh,j.constructor=W_;function G_(){}G_.prototype=j,j.rN=(function(e){return eC(e)?e:Vh.prototype.aI.call(this,e)}),j.aI=(function(e){return this.rN(e)}),new P().i(W_,`scala.collection.immutable.Iterable$`,{gb:1,fJ:1,K:1,a:1});var K_;function q_(){return K_||=new W_,K_}function J_(){this.gG=null,X_=this,this.gG=new dD(new Eg((()=>gg()))).p7()}j=J_.prototype=new M,j.constructor=J_;function Y_(){}Y_.prototype=j,j.dg=(function(e){return this.j0(e)}),j.t0=(function(e,t){return new dD(new Eg(((e,t)=>(()=>{for(var n=e.gL,r=t.ez;r>0&&!n.f();)n=n.I().aR(),e.gL=n,r=-1+r|0,t.ez=r;return n.I()}))(new nm(e),new em(t))))}),j.j0=(function(e){return e instanceof dD?e:e.E()===0?this.gG:new dD(new Eg((()=>Z_().pH(e.m()))))}),j.pI=(function(e,t){return e.n()?new dg(e.j(),new dD(new Eg((()=>Z_().pI(e,t))))):t.ac()}),j.pH=(function(e){return e.n()?new dg(e.j(),new dD(new Eg((()=>Z_().pH(e))))):gg()}),j.b9=(function(){return new Cb}),j.aI=(function(e){return this.j0(e)}),new P().i(J_,`scala.collection.immutable.LazyList$`,{gc:1,a2:1,K:1,a:1});var X_;function Z_(){return X_||=new J_,X_}function Q_(e,t){this.fJ=null,this.o5=null,this.fJ=e,this.o5=t}j=Q_.prototype=new M,j.constructor=Q_;function $_(){}$_.prototype=j,j.qE=(function(e){return this.fJ.b7(e),this}),j.qu=(function(e){return this.fJ.bc(e),this}),j.be=(function(e){this.fJ.be(e)}),j.bd=(function(){return this.o5.e(this.fJ.bd())}),j.bc=(function(e){return this.qu(e)}),j.b7=(function(e){return this.qE(e)}),new P().i(Q_,`scala.collection.mutable.Builder$$anon$1`,{gZ:1,M:1,I:1,G:1});function ev(e,t){return e.e2=t,e}function tv(){this.e2=null}j=tv.prototype=new M,j.constructor=tv;function nv(){}nv.prototype=j,j.be=(function(e){}),j.qF=(function(e){return this.e2.b7(e),this}),j.qv=(function(e){return this.e2.bc(e),this}),j.bc=(function(e){return this.qv(e)}),j.b7=(function(e){return this.qF(e)}),j.bd=(function(){return this.e2}),new P().i(tv,`scala.collection.mutable.GrowableBuilder`,{aV:1,M:1,I:1,G:1});function rv(e){this.og=null,this.og=e}j=rv.prototype=new zg,j.constructor=rv;function iv(){}iv.prototype=j,j.ac=(function(){return(0,this.og)()}),new P().i(rv,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{i4:1,i3:1,cm:1,aI:1});function Q(e){this.oh=null,this.oh=e}j=Q.prototype=new Vg,j.constructor=Q;function av(){}av.prototype=j,j.e=(function(e){return(0,this.oh)(e)}),new P().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{i6:1,i5:1,cn:1,e:1});function ov(e){this.oi=null,this.oi=e}j=ov.prototype=new Ug,j.constructor=ov;function sv(){}sv.prototype=j,j.df=(function(e,t){return(0,this.oi)(e,t)}),new P().i(ov,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{i8:1,i7:1,co:1,aJ:1});function cv(e){this.oj=null,this.oj=e}j=cv.prototype=new Gg,j.constructor=cv;function lv(){}lv.prototype=j,j.oy=(function(e,t,n){return(0,this.oj)(e,t,n)}),new P().i(cv,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{ia:1,i9:1,hM:1,fj:1});function uv(){}j=uv.prototype=new M,j.constructor=uv;function dv(){}dv.prototype=j;function fv(e){e.oP(ns().bj(U().d(new(bm.r()).C([])))),e.oQ(ns().bj(U().d(new(Ga.r()).C([])))),e.hh(!1)}function pv(e,t,n){var r=vo(),i=(()=>{vv(e);var r=mv(e,t,n);return t.fd(e.hf()),yv(e),r}),a=!vm(e);if(r.bf||!a)var o=i();else{r.bf=!0;try{var o=i()}finally{r.bf=!1,mo(r)}}return o}function mv(e,t,n){var r=new Wo(n,new rv((()=>{gm(e,t)})));return e.g3().push(t),r}function hv(e,t,n){var r=vo(),i=(()=>{!vm(e)&&n&&vv(e),e.g9().push(t),yv(e)}),a=!vm(e);if(r.bf||!a)i();else{r.bf=!0;try{i()}finally{r.bf=!1,mo(r)}}}function gv(e,t){to().pE(e.g9(),t)&&bv(e)}function _v(e,t){to().pE(e.g3(),t)&&bv(e)}function vv(e){e.pX()||(e.px(),e.hh(!0))}function yv(e){xv(e)===1&&e.pu()}function bv(e){vm(e)||(e.pv(),e.hh(!1))}function xv(e){var t=e.g3().length,n=e.g9();return(t|0)+(n.length|0)|0}function Sv(e){e.aS=Za().rR(new wv(e),(Za(),!0))}function Cv(e,t){var n=new Gx(t);e.aS.fd(n)}function wv(e){if(this.k3=null,e===null)throw new ry;this.k3=e}j=wv.prototype=new Mg,j.constructor=wv;function Tv(){}Tv.prototype=j,j.se=(function(e){return!0}),j.qQ=(function(e,t){new oo(new Q((t=>{this.k3.t1(e,t)})))}),j.cB=(function(e){return this.se(e)}),j.dh=(function(e,t){return this.qQ(e,t)}),new P().i(wv,`com.raquo.airstream.state.Var$$anon$1`,{cS:1,aX:1,e:1,j:1,a:1});function Ev(e){if(e===null)throw new ry}j=Ev.prototype=new Mg,j.constructor=Ev;function Dv(){}Dv.prototype=j,j.cB=(function(e){return typeof e==`boolean`&&!0}),j.dh=(function(e,t){return typeof e==`boolean`?!!e:t.e(e)}),new P().i(Ev,`com.raquo.laminar.DomApi$$anon$1`,{cX:1,aX:1,e:1,j:1,a:1});function Ov(e){if(e===null)throw new ry}j=Ov.prototype=new Mg,j.constructor=Ov;function kv(){}kv.prototype=j,j.cB=(function(e){return typeof e==`string`}),j.dh=(function(e,t){return typeof e==`string`?e:t.e(e)}),new P().i(Ov,`com.raquo.laminar.DomApi$$anon$2`,{cY:1,aX:1,e:1,j:1,a:1});function Av(e,t){this.gq=null,this.hB=null,this.gq=e,this.hB=t}j=Av.prototype=new M,j.constructor=Av;function jv(){}jv.prototype=j,j.ca=(function(e){var t=this.hB;t!==void 0&&t.pw(e,this.gq),yc().gT(e,this.gq,void 0)}),j.tr=(function(e){return new Av(this.gq,e.qN(this.hB))});var Mv=new P().i(Av,`com.raquo.laminar.inserters.StaticChildInserter`,{dE:1,Y:1,dC:1,dG:1,dB:1});function Nv(e){e.hK=new qo(new rv((()=>{e.cI.om()})),new rv((()=>{e.cI.rd()}))),e.ep=void 0,e.fr=ZE()}function Pv(e,t,n){if(e.ep===void 0)e.ep=ns().bj(U().d(new(Em.r()).C([t])));else if(n){var r=e.ep;if(r===void 0){var i;throw new sy(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.ep;if(a===void 0){var o;throw new sy(`undefined.get`)}else var o=a;o.push(t)}}function Fv(e,t){var n=e.ep;n!==void 0&&n.splice(t,1)}function Iv(e,t){var n=e.ep;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:sa(a,t))?r=!0:i=1+i|0}return r?i:-1}function Lv(e,t,n,r,i){var a=e.fr.dk(t,new rv((()=>$()))),o=(e=>{for(var t=a;!t.f();){var r=t.A(),i=r.bn();if(i===null?e===null:sa(i,e)){var o=r.bi();if(o===null?n===null:sa(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.w()}return!1}),s=R_(r),c=i;block:for(var l;;)if(c.f()){var l=$();break}else{var u=c.A(),d=c.w();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.f()){var l=f;break block}else{if(!o(p.A())){p=p.w();continue}for(var m=p,h=new jO(f.A(),$()),g=f.w(),_=h;g!==m;){var v=new jO(g.A(),$());_.aC=v,_=v,g=g.w()}for(var y=m.w(),b=y;!y.f();)if(!o(y.A()))y=y.w();else{for(;b!==y;){var ee=new jO(b.A(),$());_.aC=ee,_=ee,b=b.w()}b=y.w(),y=y.w()}b.f()||(_.aC=b);var l=h;break block}}var te=e.fr.dk(t,new rv((()=>$()))),x=(e=>l.ce(e.bn())),ne=te;block$2:for(var re;;)if(ne.f()){var re=$();break}else{var ie=ne.A(),ae=ne.w();if(x(ie)){ne=ae;continue}for(var oe=ne,se=ae;;)if(se.f()){var re=oe;break block$2}else{if(!x(se.A())){se=se.w();continue}for(var S=se,ce=new jO(oe.A(),$()),C=oe.w(),le=ce;C!==S;){var ue=new jO(C.A(),$());le.aC=ue,le=ue,C=C.w()}for(var de=S.w(),fe=de;!de.f();)if(!x(de.A()))de=de.w();else{for(;fe!==de;){var pe=new jO(fe.A(),$());le.aC=pe,le=pe,fe=fe.w()}fe=de.w(),de=de.w()}fe.f()||(le.aC=fe);var re=ce;break block$2}}var me=(e=>new yy(e,n));if(s===$())var he=$();else{for(var ge=new jO(me(s.A()),$()),_e=ge,ve=s.w();ve!==$();){var ye=new jO(me(ve.A()),$());_e.aC=ye,_e=ye,ve=ve.w()}var he=ge}var be=re.ov(he),xe=t.hC.oV(t.lt.e(e)),Se=(e=>l.ce(e)),Ce=xe;block$4:for(var we;;)if(Ce.f()){var we=$();break}else{var Te=Ce.A(),Ee=Ce.w();if(Se(Te)){Ce=Ee;continue}for(var De=Ce,w=Ee;;)if(w.f()){var we=De;break block$4}else{if(!Se(w.A())){w=w.w();continue}for(var Oe=w,ke=new jO(De.A(),$()),Ae=De.w(),je=ke;Ae!==Oe;){var Me=new jO(Ae.A(),$());je.aC=Me,je=Me,Ae=Ae.w()}for(var T=Oe.w(),Ne=T;!T.f();)if(!Se(T.A()))T=T.w();else{for(;Ne!==T;){var Pe=new jO(Ne.A(),$());je.aC=Pe,je=Pe,Ne=Ne.w()}Ne=T.w(),T=T.w()}Ne.f()||(je.aC=Ne);var we=ke;break block$4}}var Fe=s;block$6:for(var Ie;;)if(Fe.f()){var Ie=$();break}else{var Le=Fe.A(),Re=Fe.w();if(o(Le)){Fe=Re;continue}for(var ze=Fe,Be=Re;;)if(Be.f()){var Ie=ze;break block$6}else{if(!o(Be.A())){Be=Be.w();continue}for(var Ve=Be,He=new jO(ze.A(),$()),Ue=ze.w(),We=He;Ue!==Ve;){var Ge=new jO(Ue.A(),$());We.aC=Ge,We=Ge,Ue=Ue.w()}for(var E=Ve.w(),Ke=E;!E.f();)if(!o(E.A()))E=E.w();else{for(;Ke!==E;){var qe=new jO(Ke.A(),$());We.aC=qe,We=qe,Ke=Ke.w()}Ke=E.w(),E=E.w()}Ke.f()||(We.aC=Ke);var Ie=He;break block$6}}var Je=we.ov(Ie);e.fr=e.fr.ej(t,be),t.lv.df(e,t.hC.oX(Je))}function Rv(e,t){Bv(e,e.gu,t)&&Vv(e,t)}function zv(e,t){var n=e.gu;e.gu=t,Bv(e,n,t)||Vv(e,t)}function Bv(e,t,n){var r=!t.f()&&!t.Z().gZ().bP.f(),i=!n.f()&&!n.Z().gZ().bP.f();return r&&!i}function Vv(e,t){Hv(e,t.f()?DS():new OS(t.Z().gZ()))}function Hv(e,t){if(t.f())e.hK.r2();else{var n=t.Z();e.hK.t3(n)}}function Uv(){}j=Uv.prototype=new d_,j.constructor=Uv;function Wv(){}Wv.prototype=j;var Gv=class extends y_{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(Gv,`java.lang.ArithmeticException`,{eB:1,E:1,D:1,u:1,a:1});var Kv=new P().i(0,`java.lang.Byte`,{eD:1,ad:1,a:1,a3:1,Z:1},(e=>va(e))),qv=class extends y_{constructor(){super(),_p(this,null,null,!0,!0)}};new P().i(qv,`java.lang.ClassCastException`,{br:1,E:1,D:1,u:1,a:1});function Jv(e,t){return _p(e,t,null,!0,!0),e}function Yv(e){return _p(e,null,null,!0,!0),e}var Xv=class extends y_{};new P().i(Xv,`java.lang.IllegalArgumentException`,{bt:1,E:1,D:1,u:1,a:1});var Zv=class extends y_{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(Zv,`java.lang.IllegalStateException`,{eJ:1,E:1,D:1,u:1,a:1});function Qv(e,t){return _p(e,t,null,!0,!0),e}var $v=class extends y_{};new P().i($v,`java.lang.IndexOutOfBoundsException`,{aH:1,E:1,D:1,u:1,a:1});function ey(){}j=ey.prototype=new d_,j.constructor=ey;function ty(){}ty.prototype=j,new P().i(ey,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{eO:1,bm:1,bk:1,bo:1,bl:1});var ny=class extends y_{constructor(){super(),_p(this,null,null,!0,!0)}};new P().i(ny,`java.lang.NegativeArraySizeException`,{eQ:1,E:1,D:1,u:1,a:1});var ry=class extends y_{constructor(){super(),_p(this,null,null,!0,!0)}};new P().i(ry,`java.lang.NullPointerException`,{eR:1,E:1,D:1,u:1,a:1});var iy=new P().i(0,`java.lang.Short`,{eU:1,ad:1,a:1,a3:1,Z:1},(e=>ya(e))),ay=class extends y_{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(ay,`java.lang.UnsupportedOperationException`,{f3:1,E:1,D:1,u:1,a:1});var oy=class extends y_{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(oy,`java.util.ConcurrentModificationException`,{f8:1,E:1,D:1,u:1,a:1});var sy=class extends y_{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(sy,`java.util.NoSuchElementException`,{f9:1,E:1,D:1,u:1,a:1});function cy(){}j=cy.prototype=new E_,j.constructor=cy;function ly(){}ly.prototype=j,j.e=(function(e){return e}),j.F=(function(){return`generalized constraint`}),new P().i(cy,`scala.$less$colon$less$$anon$1`,{fe:1,fb:1,fc:1,e:1,a:1});function uy(e){return e.i1||=(e.i2=e.gy===null?`null`:py(e),!0),e.i2}function dy(e){return e.i1?e.i2:uy(e)}function fy(e){var t=e.gy;return`of class `+oa(t)}function py(e){try{return e.gy+` (`+fy(e)+`)`}catch{return`an instance `+fy(e)}}var my=class extends y_{constructor(e){super(),this.i2=null,this.gy=null,this.i1=!1,this.gy=e,_p(this,null,null,!0,!0)}g7(){return dy(this)}};new P().i(my,`scala.MatchError`,{fm:1,E:1,D:1,u:1,a:1});function hy(){}j=hy.prototype=new M,j.constructor=hy;function gy(){}gy.prototype=j,j.f=(function(){return this===DS()}),j.E=(function(){return this.f()?0:1}),j.m=(function(){return this.f()?Y().N:new Dy(this.Z())});function _y(e){this.fv=0,this.nz=0,this.ny=null,this.ny=e,this.fv=0,this.nz=e.bK()}j=_y.prototype=new A_,j.constructor=_y;function vy(){}vy.prototype=j,j.n=(function(){return this.fv<this.nz}),j.j=(function(){var e=this.ny.bL(this.fv);return this.fv=1+this.fv|0,e}),new P().i(_y,`scala.Product$$anon$1`,{fr:1,n:1,p:1,b:1,c:1});function yy(e,t){this.nA=null,this.nB=null,this.nA=e,this.nB=t}j=yy.prototype=new M,j.constructor=yy;function by(){}by.prototype=j,j.bK=(function(){return 2}),j.bL=(function(e){return Ih(this,e)}),j.bn=(function(){return this.nA}),j.bi=(function(){return this.nB}),j.F=(function(){return`(`+this.bn()+`,`+this.bi()+`)`}),j.bM=(function(){return`Tuple2`}),j.cl=(function(){return new Nx(this)}),j.z=(function(){return G().eh(this,-889275714,!1)}),j.r=(function(e){return this===e||e instanceof yy&&H().t(this.bn(),e.bn())&&H().t(this.bi(),e.bi())}),new P().i(yy,`scala.Tuple2`,{bB:1,fs:1,U:1,d:1,a:1});function xy(e){this.fx=null,Lh(this,e)}j=xy.prototype=new zh,j.constructor=xy;function Sy(){}Sy.prototype=j,new P().i(xy,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{fG:1,fF:1,K:1,a:1,a2:1});function Cy(e){return Tu(e,e.cd()+`(`,`, `,`)`)}function wy(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Ty(){}j=Ty.prototype=new A_,j.constructor=Ty;function Ey(){}Ey.prototype=j,j.n=(function(){return!1}),j.jn=(function(){throw new sy(`next on empty iterator`)}),j.E=(function(){return 0}),j.gg=(function(e,t){return this}),j.j=(function(){this.jn()}),new P().i(Ty,`scala.collection.Iterator$$anon$19`,{fL:1,n:1,p:1,b:1,c:1});function Dy(e){this.fy=!1,this.nE=null,this.nE=e,this.fy=!1}j=Dy.prototype=new A_,j.constructor=Dy;function Oy(){}Oy.prototype=j,j.n=(function(){return!this.fy}),j.j=(function(){return this.fy?Y().N.j():(this.fy=!0,this.nE)}),j.gg=(function(e,t){return this.fy||e>0||t===0?Y().N:this}),new P().i(Dy,`scala.collection.Iterator$$anon$20`,{fM:1,n:1,p:1,b:1,c:1});function ky(e,t){this.nH=null,this.gB=!1,this.nG=null,this.ic=null,this.nF=null,this.ic=e,this.nF=t,this.nH=wD(new TD),this.gB=!1}j=ky.prototype=new A_,j.constructor=ky;function Ay(){}Ay.prototype=j,j.n=(function(){for(;;)if(this.gB)return!0;else if(this.ic.n()){var e=this.ic.j();if(this.nH.gS(this.nF.e(e)))return this.nG=e,this.gB=!0,!0}else return!1}),j.j=(function(){return this.n()?(this.gB=!1,this.nG):Y().N.j()}),new P().i(ky,`scala.collection.Iterator$$anon$8`,{fO:1,n:1,p:1,b:1,c:1});function jy(e,t){this.gC=null,this.nI=null,this.gC=e,this.nI=t}j=jy.prototype=new A_,j.constructor=jy;function My(){}My.prototype=j,j.E=(function(){return this.gC.E()}),j.n=(function(){return this.gC.n()}),j.j=(function(){return this.nI.e(this.gC.j())}),new P().i(jy,`scala.collection.Iterator$$anon$9`,{fP:1,n:1,p:1,b:1,c:1});function Ny(e){for(;;){if(e.bA instanceof Fy){var t=e.bA;e.bA=t.bA,e.dA=t.dA,t.c4!==null&&(e.c3===null&&(e.c3=t.c3),t.c3.fz=e.c4,e.c4=t.c4);continue}return}}function Py(e){for(;;)if(e.c4===null)return e.bA=null,e.c3=null,!1;else{if(e.bA=e.c4.s3(),e.c3===e.c4&&(e.c3=e.c3.fz),e.c4=e.c4.fz,Ny(e),e.dA)return!0;if(e.bA!==null&&e.bA.n())return e.dA=!0,!0}}function Fy(e){this.bA=null,this.c4=null,this.c3=null,this.dA=!1,this.bA=e,this.c4=null,this.c3=null,this.dA=!1}j=Fy.prototype=new A_,j.constructor=Fy;function Iy(){}Iy.prototype=j,j.n=(function(){return this.dA?!0:this.bA===null?!1:this.bA.n()?(this.dA=!0,!0):Py(this)}),j.j=(function(){return this.n()?(this.dA=!1,this.bA.j()):Y().N.j()}),j.iQ=(function(e){var t=new Ou(e,null);return this.c4===null?(this.c4=t,this.c3=t):(this.c3.fz=t,this.c3=t),this.bA===null&&(this.bA=Y().N),this}),new P().i(Fy,`scala.collection.Iterator$ConcatIterator`,{bH:1,n:1,p:1,b:1,c:1});function Ly(e){for(;e.d0>0;)e.dB.n()?(e.dB.j(),e.d0=-1+e.d0|0):e.d0=0}function Ry(e,t){if(e.bS<0)return-1;var n=e.bS-t|0;return n<0?0:n}function zy(e,t,n){this.dB=null,this.bS=0,this.d0=0,this.dB=e,this.bS=n,this.d0=t}j=zy.prototype=new A_,j.constructor=zy;function By(){}By.prototype=j,j.E=(function(){var e=this.dB.E();if(e<0)return-1;var t=e-this.d0|0,n=t<0?0:t;if(this.bS<0)return n;var r=this.bS;return r<n?r:n}),j.n=(function(){return Ly(this),this.bS!==0&&this.dB.n()}),j.j=(function(){return Ly(this),this.bS>0?(this.bS=-1+this.bS|0,this.dB.j()):this.bS<0?this.dB.j():Y().N.j()}),j.gg=(function(e,t){var n=e>0?e:0;if(t<0)var r=Ry(this,n);else if(t<=n)var r=0;else if(this.bS<0)var r=t-n|0;else var i=Ry(this,n),a=t-n|0,r=i<a?i:a;var o=this.d0+n|0;return r===0?Y().N:o<0?(this.d0=2147483647,this.bS=0,Wh(this,new Eg((()=>new zy(this.dB,-2147483647+o|0,r))))):(this.d0=o,this.bS=r,this)}),new P().i(zy,`scala.collection.Iterator$SliceIterator`,{fR:1,n:1,p:1,b:1,c:1});function Vy(e){for(var t=e,n=0;!t.f();)n=1+n|0,t=t.w();return n}function Hy(e,t){return t<0?1:Ky(e,0,e,t)}function Uy(e,t){return t>=0&&e.bo(t)>0}function Wy(e,t){if(t<0)throw Qv(new $v,``+t);var n=e.oW(t);if(n.f())throw Qv(new $v,``+t);return n.A()}function Gy(e,t){return wE(t)?qy(e,e,t):H_(e,t)}function Ky(e,t,n,r){for(;;)if(t===r)return n.f()?0:1;else if(n.f())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function qy(e,t,n){for(;;)if(t===n)return!0;else if(!t.f()&&!n.f()&&H().t(t.A(),n.A())){var r=t.w(),i=n.w();t=r,n=i}else return t.f()&&n.f()}function Jy(e){this.fA=null,this.fA=e}j=Jy.prototype=new A_,j.constructor=Jy;function Yy(){}Yy.prototype=j,j.n=(function(){return!this.fA.f()}),j.j=(function(){var e=this.fA.A();return this.fA=this.fA.w(),e}),new P().i(Jy,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{fV:1,n:1,p:1,b:1,c:1});function Xy(e){for(var t=e.aY;;){if(e.aY<e.er)var n=e.fB,r=e.aY,i=n.charCodeAt(r),a=!(i===13||i===10);else var a=!1;if(a)e.aY=1+e.aY|0;else break}var o=e.aY;if(e.aY<e.er){var s=e.fB,c=e.aY,l=s.charCodeAt(c);if(e.aY=1+e.aY|0,e.aY<e.er)var u=e.fB,d=e.aY,f=u.charCodeAt(d),p=l===13&&f===10;else var p=!1;p&&(e.aY=1+e.aY|0),e.nN||(o=e.aY)}var m=e.fB,h=o;return m.substring(t,h)}function Zy(e,t){this.er=0,this.aY=0,this.fB=null,this.nN=!1,this.fB=e,this.nN=t,this.er=e.length,this.aY=0}j=Zy.prototype=new A_,j.constructor=Zy;function Qy(){}Qy.prototype=j,j.n=(function(){return this.aY<this.er}),j.po=(function(){return this.aY>=this.er?Y().N.j():Xy(this)}),j.j=(function(){return this.po()}),new P().i(Zy,`scala.collection.StringOps$$anon$1`,{fY:1,n:1,p:1,b:1,c:1});function $y(e){e.d2===null&&(e.d2=new Ma(nd().fI<<1),e.fD=new(Qu.r()).C(nd().fI))}function eb(e,t){e.et=t,e.bT=0,e.fC=t.js()}function tb(e,t){$y(e),e.bC=1+e.bC|0;var n=e.bC<<1,r=1+(e.bC<<1)|0;e.fD.a[e.bC]=t,e.d2.a[n]=0,e.d2.a[r]=t.jo()}function nb(e){e.bC=-1+e.bC|0}function rb(e){for(;e.bC>=0;){var t=e.bC<<1,n=1+(e.bC<<1)|0,r=e.d2.a[t];if(r<e.d2.a[n]){var i=e.d2;i.a[t]=1+i.a[t]|0;var a=e.fD.a[e.bC].j3(r);if(a.j7()&&tb(e,a),a.h0())return eb(e,a),!0}else nb(e)}return!1}function ib(e){return e.bT=0,e.fC=0,e.bC=-1,e}function ab(e,t){return ib(e),t.j7()&&tb(e,t),t.h0()&&eb(e,t),e}function ob(){this.bT=0,this.fC=0,this.et=null,this.bC=0,this.d2=null,this.fD=null}j=ob.prototype=new A_,j.constructor=ob;function sb(){}sb.prototype=j,j.n=(function(){return this.bT<this.fC||rb(this)});function cb(e,t){e.gE=t,e.dJ=-1+t.js()|0}function lb(e,t){e.bU=1+e.bU|0,e.fF.a[e.bU]=t,e.fE.a[e.bU]=-1+t.jo()|0}function ub(e){e.bU=-1+e.bU|0}function db(e){for(;e.bU>=0;){var t=e.fE.a[e.bU];if(e.fE.a[e.bU]=-1+t|0,t>=0)lb(e,e.fF.a[e.bU].j3(t));else{var n=e.fF.a[e.bU];if(ub(e),n.h0())return cb(e,n),!0}}return!1}function fb(e){return e.dJ=-1,e.bU=-1,e.fE=new Ma(1+nd().fI|0),e.fF=new(Qu.r()).C(1+nd().fI|0),e}function pb(e,t){return fb(e),lb(e,t),db(e),e}function mb(){this.dJ=0,this.gE=null,this.bU=0,this.fE=null,this.fF=null}j=mb.prototype=new A_,j.constructor=mb;function hb(){}hb.prototype=j,j.n=(function(){return this.dJ>=0||db(this)});function gb(e){return e.eV!==null}function _b(e,t,n,r){if(n<0||n>t.a.length)throw sS(new cS);var i=new Ma(1+t.a.length|0);t.x(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.x(n,i,a,o),i}function vb(e,t,n,r,i,a,o){var s=t.g1(n),c=s<<1,l=t.as,u=new N(2+l.a.length|0);l.x(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.x(c,u,d,f);var p=_b(e,t.bB,s,i);t.a4|=n,t.as=u,t.bB=p,t.aZ=1+t.aZ|0,t.bq=t.bq+a|0}function yb(e){gb(e)&&bb(e),e.eV=null}function bb(e){e.cK=e.cK.oS()}function xb(){this.eV=null,this.cK=null,this.cK=new rg(0,0,au().nv,au().i0,0,0)}j=xb.prototype=new M,j.constructor=xb;function Sb(){}Sb.prototype=j,j.be=(function(e){}),j.fg=(function(e,t,n,r,i,a){if(e instanceof rg){var o=nd().eF(i,a),s=nd().ea(o);if((e.a4&s)!==0){var c=nd().cQ(e.a4,o,s),l=e.ee(c),u=e.g6(c);if(u===r&&H().t(l,t))e.as.a[1+(c<<1)|0]=n;else{var d=e.dl(c),f=bu().cA(u),p=e.jl(l,d,u,f,t,n,r,i,5+a|0);e.sq(s,f,p)}}else if((e.ao&s)!==0){var m=nd().cQ(e.ao,o,s),h=e.dj(m),g=h.aX(),_=h.eb();this.fg(h,t,n,r,i,5+a|0),e.aZ=e.aZ+(h.aX()-g|0)|0,e.bq=e.bq+(h.eb()-_|0)|0}else vb(this,e,s,t,r,i,n)}else if(e instanceof ag){var v=e.fa(t);v<0?e.ap=e.ap.e8(new yy(t,n)):e.ap=e.ap.ei(v,new yy(t,n))}else throw new my(e)}),j.jv=(function(){return this.cK.aZ===0?ug().ik:(this.eV===null&&(this.eV=new hD(this.cK)),this.eV)}),j.os=(function(e){yb(this);var t=W().V(e.bn()),n=bu().cA(t);return this.fg(this.cK,e.bn(),e.bi(),t,n,0),this}),j.eB=(function(e,t){yb(this);var n=W().V(e);return this.fg(this.cK,e,t,n,bu().cA(n),0),this}),j.iJ=(function(e){if(yb(this),e instanceof hD)new QS(this,e);else if(ME(e))e.eD(new kg(((e,t)=>this.eB(e,t))));else for(var t=e.m();t.n();)this.os(t.j());return this}),j.bc=(function(e){return this.iJ(e)}),j.b7=(function(e){return this.os(e)}),j.bd=(function(){return this.jv()}),new P().i(xb,`scala.collection.immutable.HashMapBuilder`,{g7:1,ab:1,M:1,I:1,G:1});function Cb(){this.eW=null,this.nR=null,this.r1()}j=Cb.prototype=new M,j.constructor=Cb;function wb(){}wb.prototype=j,j.be=(function(e){}),j.r1=(function(){var e=new Uu;this.nR=(Z_(),new dD(new Eg((()=>e.iV())))),this.eW=e}),j.sZ=(function(){return this.eW.j9(new Eg((()=>gg()))),this.nR}),j.qB=(function(e){var t=new Uu;return this.eW.j9(new Eg((()=>(Z_(),new dg(e,(Z_(),new dD(new Eg((()=>t.iV()))))))))),this.eW=t,this}),j.qs=(function(e){if(e.E()!==0){var t=new Uu;this.eW.j9(new Eg((()=>Z_().pI(e.m(),new Eg((()=>t.iV())))))),this.eW=t}return this}),j.bc=(function(e){return this.qs(e)}),j.b7=(function(e){return this.qB(e)}),j.bd=(function(){return this.sZ()}),new P().i(Cb,`scala.collection.immutable.LazyList$LazyBuilder`,{gd:1,ab:1,M:1,I:1,G:1});function Tb(e){this.eX=null,this.eX=e}j=Tb.prototype=new A_,j.constructor=Tb;function Eb(){}Eb.prototype=j,j.n=(function(){return!this.eX.f()}),j.j=(function(){if(this.eX.f())return Y().N.j();var e=this.eX.I().A();return this.eX=this.eX.I().aR(),e}),new P().i(Tb,`scala.collection.immutable.LazyList$LazyIterator`,{gf:1,n:1,p:1,b:1,c:1});function Db(){}j=Db.prototype=new M,j.constructor=Db;function Ob(){}Ob.prototype=j,j.dg=(function(e){return $().jt(e)}),j.b9=(function(){return new nk}),j.aI=(function(e){return $().jt(e)}),new P().i(Db,`scala.collection.immutable.List$`,{gi:1,an:1,a2:1,K:1,a:1});var kb;function Ab(){return kb||=new Db,kb}function jb(e,t){return e.eY=t,e.dN=0,e}function Mb(){this.dN=0,this.eY=null}j=Mb.prototype=new A_,j.constructor=Mb;function Nb(){}Nb.prototype=j,j.n=(function(){return this.dN<2}),j.j=(function(){switch(this.dN){case 0:var e=new yy(this.eY.cq,this.eY.dL);break;case 1:var e=new yy(this.eY.cr,this.eY.dM);break;default:var e=Y().N.j()}return this.dN=1+this.dN|0,e}),j.ec=(function(e){return this.dN=this.dN+e|0,this});function Pb(e,t){return e.dO=t,e.dP=0,e}function Fb(){this.dP=0,this.dO=null}j=Fb.prototype=new A_,j.constructor=Fb;function Ib(){}Ib.prototype=j,j.n=(function(){return this.dP<3}),j.j=(function(){switch(this.dP){case 0:var e=new yy(this.dO.c5,this.dO.d3);break;case 1:var e=new yy(this.dO.c6,this.dO.d4);break;case 2:var e=new yy(this.dO.c7,this.dO.d5);break;default:var e=Y().N.j()}return this.dP=1+this.dP|0,e}),j.ec=(function(e){return this.dP=this.dP+e|0,this});function Lb(e,t){return e.cM=t,e.dQ=0,e}function Rb(){this.dQ=0,this.cM=null}j=Rb.prototype=new A_,j.constructor=Rb;function zb(){}zb.prototype=j,j.n=(function(){return this.dQ<4}),j.j=(function(){switch(this.dQ){case 0:var e=new yy(this.cM.bD,this.cM.cs);break;case 1:var e=new yy(this.cM.bE,this.cM.ct);break;case 2:var e=new yy(this.cM.bF,this.cM.cu);break;case 3:var e=new yy(this.cM.bG,this.cM.cv);break;default:var e=Y().N.j()}return this.dQ=1+this.dQ|0,e}),j.ec=(function(e){return this.dQ=this.dQ+e|0,this});function Bb(){this.d6=null,this.fG=!1,this.ev=null,this.d6=ZE(),this.fG=!1}j=Bb.prototype=new M,j.constructor=Bb;function Vb(){}Vb.prototype=j,j.be=(function(e){}),j.pF=(function(){return this.fG?this.ev.jv():this.d6}),j.qz=(function(e,t){return this.fG?this.ev.eB(e,t):this.d6.aX()<4||this.d6.ce(e)?this.d6=this.d6.ej(e,t):(this.fG=!0,this.ev===null&&(this.ev=new xb),this.d6.r0(this.ev),this.ev.eB(e,t)),this}),j.on=(function(e){return this.fG?(this.ev.iJ(e),this):zp(this,e)}),j.bc=(function(e){return this.on(e)}),j.b7=(function(e){return this.qz(e.bn(),e.bi())}),j.bd=(function(){return this.pF()}),new P().i(Bb,`scala.collection.immutable.MapBuilderImpl`,{gs:1,ab:1,M:1,I:1,G:1});function Hb(){try{return op().pC(Al().j5(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function Ub(){this.nX=0,this.nY=null,Gb=this,this.nX=Hb(),this.nY=new hC(zO(),0,0)}j=Ub.prototype=new M,j.constructor=Ub;function Wb(){}Wb.prototype=j,j.dg=(function(e){return this.j1(e)}),j.j1=(function(e){if(e instanceof AD)return e;var t=e.E();if(t===0)return zO();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof JD){var r=e.an().aW();if(r!==null&&r===F.l()){var n=e.cJ;break matchEnd5}}if(eC(e)){var i=new N(t);e.bZ(i,0,2147483647);var n=i;break matchEnd5}var a=new N(t);e.m().bZ(a,0,2147483647);var n=a}return new kO(n)}else return new ex().oo(e).pG()}),j.b9=(function(){return new ex}),j.aI=(function(e){return this.j1(e)}),new P().i(Ub,`scala.collection.immutable.Vector$`,{gF:1,an:1,a2:1,K:1,a:1});var Gb;function Kb(){return Gb||=new Ub,Gb}function qb(e){var t=null,n=null;if(e.R>=6){t=e.aN;var r=e.O>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.x(r,a,0,o)}var s=e.O%33554432|0;e.G=e.G-(e.O-s|0)|0,e.O=s,e.G>>>25|0||(e.R=5),n=t,t=t.a[0]}if(e.R>=5){t===null&&(t=e.a0);var c=31&(e.O>>>20|0);if(e.R===5){if(c>0){var l=t,u=t,d=32-c|0;l.x(c,u,0,d)}e.a0=t;var f=e.O%1048576|0;e.G=e.G-(e.O-f|0)|0,e.O=f,e.G>>>20|0||(e.R=4)}else c>0&&(t=R().ad(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=4){t===null&&(t=e.T);var p=31&(e.O>>>15|0);if(e.R===4){if(p>0){var m=t,h=t,g=32-p|0;m.x(p,h,0,g)}e.T=t;var _=e.O%32768|0;e.G=e.G-(e.O-_|0)|0,e.O=_,e.G>>>15|0||(e.R=3)}else p>0&&(t=R().ad(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=3){t===null&&(t=e.P);var v=31&(e.O>>>10|0);if(e.R===3){if(v>0){var y=t,b=t,ee=32-v|0;y.x(v,b,0,ee)}e.P=t;var te=e.O%1024|0;e.G=e.G-(e.O-te|0)|0,e.O=te,e.G>>>10|0||(e.R=2)}else v>0&&(t=R().ad(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=2){t===null&&(t=e.L);var x=31&(e.O>>>5|0);if(e.R===2){if(x>0){var ne=t,re=t,ie=32-x|0;ne.x(x,re,0,ie)}e.L=t;var ae=e.O%32|0;e.G=e.G-(e.O-ae|0)|0,e.O=ae,e.G>>>5|0||(e.R=1)}else x>0&&(t=R().ad(t,x,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=1){t===null&&(t=e.X);var oe=31&e.O;if(e.R===1){if(oe>0){var se=t,S=t,ce=32-oe|0;se.x(oe,S,0,ce)}e.X=t,e.Q=e.Q-e.O|0,e.O=0}else oe>0&&(t=R().ad(t,oe,32)),n.a[0]=t}e.gH=!1}function Jb(e,t){var n=t.a.length;if(n>0){e.Q===32&&Zb(e);var r=32-e.Q|0,i=r<n?r:n,a=n-i|0,o=e.X,s=e.Q;if(t.x(0,o,s,i),e.Q=e.Q+i|0,a>0){Zb(e);var c=e.X;t.x(i,c,0,a),e.Q=e.Q+a|0}}}function Yb(e,t,n){if(t.a.length!==0){e.Q===32&&Zb(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.G|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.G>>>5|0),c=e.L;if(t.x(0,c,s,a),Qb(e,a<<5),o>0){var l=e.L;t.x(a,l,0,o),Qb(e,o<<5)}break;case 3:if(e.G%1024|0){var u=(t=>{Yb(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof Ma)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof Fa)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof Na)for(;f<d;){var g=t.a[f],_=g.p,v=g.s;u(new z(_,v)),f=1+f|0}else if(t instanceof Pa)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof ka)for(;f<d;){var b=t.a[f];u(Sa(b)),f=1+f|0}else if(t instanceof Aa)for(;f<d;){var ee=t.a[f];u(ee),f=1+f|0}else if(t instanceof ja)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof Oa)for(;f<d;){var x=t.a[f];u(x),f=1+f|0}else throw new my(t);return}var ne=31&((32768-e.G|0)>>>10|0),re=ne<r?ne:r,ie=r-re|0,ae=31&(e.G>>>10|0),oe=e.P;if(t.x(0,oe,ae,re),Qb(e,re<<10),ie>0){var se=e.P;t.x(re,se,0,ie),Qb(e,ie<<10)}break;case 4:if(e.G%32768|0){var S=(t=>{Yb(e,t,3)}),ce=t.a.length,C=0;if(t!==null)for(;C<ce;){var le=t.a[C];S(le),C=1+C|0}else if(t instanceof Ma)for(;C<ce;){var ue=t.a[C];S(ue),C=1+C|0}else if(t instanceof Fa)for(;C<ce;){var de=t.a[C];S(de),C=1+C|0}else if(t instanceof Na)for(;C<ce;){var fe=t.a[C],pe=fe.p,me=fe.s;S(new z(pe,me)),C=1+C|0}else if(t instanceof Pa)for(;C<ce;){var he=t.a[C];S(he),C=1+C|0}else if(t instanceof ka)for(;C<ce;){var ge=t.a[C];S(Sa(ge)),C=1+C|0}else if(t instanceof Aa)for(;C<ce;){var _e=t.a[C];S(_e),C=1+C|0}else if(t instanceof ja)for(;C<ce;){var ve=t.a[C];S(ve),C=1+C|0}else if(t instanceof Oa)for(;C<ce;){var ye=t.a[C];S(ye),C=1+C|0}else throw new my(t);return}var be=31&((1048576-e.G|0)>>>15|0),xe=be<r?be:r,Se=r-xe|0,Ce=31&(e.G>>>15|0),we=e.T;if(t.x(0,we,Ce,xe),Qb(e,xe<<15),Se>0){var Te=e.T;t.x(xe,Te,0,Se),Qb(e,Se<<15)}break;case 5:if(e.G%1048576|0){var Ee=(t=>{Yb(e,t,4)}),De=t.a.length,w=0;if(t!==null)for(;w<De;){var Oe=t.a[w];Ee(Oe),w=1+w|0}else if(t instanceof Ma)for(;w<De;){var ke=t.a[w];Ee(ke),w=1+w|0}else if(t instanceof Fa)for(;w<De;){var Ae=t.a[w];Ee(Ae),w=1+w|0}else if(t instanceof Na)for(;w<De;){var je=t.a[w],Me=je.p,T=je.s;Ee(new z(Me,T)),w=1+w|0}else if(t instanceof Pa)for(;w<De;){var Ne=t.a[w];Ee(Ne),w=1+w|0}else if(t instanceof ka)for(;w<De;){var Pe=t.a[w];Ee(Sa(Pe)),w=1+w|0}else if(t instanceof Aa)for(;w<De;){var Fe=t.a[w];Ee(Fe),w=1+w|0}else if(t instanceof ja)for(;w<De;){var Ie=t.a[w];Ee(Ie),w=1+w|0}else if(t instanceof Oa)for(;w<De;){var Le=t.a[w];Ee(Le),w=1+w|0}else throw new my(t);return}var Re=31&((33554432-e.G|0)>>>20|0),ze=Re<r?Re:r,Be=r-ze|0,Ve=31&(e.G>>>20|0),He=e.a0;if(t.x(0,He,Ve,ze),Qb(e,ze<<20),Be>0){var Ue=e.a0;t.x(ze,Ue,0,Be),Qb(e,Be<<20)}break;case 6:if(e.G%33554432|0){var We=(t=>{Yb(e,t,5)}),Ge=t.a.length,E=0;if(t!==null)for(;E<Ge;){var Ke=t.a[E];We(Ke),E=1+E|0}else if(t instanceof Ma)for(;E<Ge;){var qe=t.a[E];We(qe),E=1+E|0}else if(t instanceof Fa)for(;E<Ge;){var Je=t.a[E];We(Je),E=1+E|0}else if(t instanceof Na)for(;E<Ge;){var Ye=t.a[E],Xe=Ye.p,Ze=Ye.s;We(new z(Xe,Ze)),E=1+E|0}else if(t instanceof Pa)for(;E<Ge;){var Qe=t.a[E];We(Qe),E=1+E|0}else if(t instanceof ka)for(;E<Ge;){var $e=t.a[E];We(Sa($e)),E=1+E|0}else if(t instanceof Aa)for(;E<Ge;){var et=t.a[E];We(et),E=1+E|0}else if(t instanceof ja)for(;E<Ge;){var tt=t.a[E];We(tt),E=1+E|0}else if(t instanceof Oa)for(;E<Ge;){var D=t.a[E];We(D),E=1+E|0}else throw new my(t);return}var nt=e.G>>>25|0;if((nt+r|0)>64)throw Jv(new Xv,`exceeding 2^31 elements`);var rt=e.aN;t.x(0,rt,nt,r),Qb(e,r<<25);break;default:throw new my(n)}}}function Xb(e,t){for(var n=t.cU(),r=0;r<n;){var i=t.cT(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?Jb(e,i):e.Q===32||e.Q===0?Yb(e,i,c):V().iX(-2+c|0,i,new X((t=>{Jb(e,t)}))),r=1+r|0}return e}function Zb(e){var t=32+e.G|0,n=t^e.G;e.G=t,e.Q=0,$b(e,t,n)}function Qb(e,t){if(t>0){var n=e.G+t|0,r=n^e.G;e.G=n,e.Q=0,$b(e,n,r)}}function $b(e,t,n){if(n<=0)throw Jv(new Xv,`advance1(`+t+`, `+n+`): a1=`+e.X+`, a2=`+e.L+`, a3=`+e.P+`, a4=`+e.T+`, a5=`+e.a0+`, a6=`+e.aN+`, depth=`+e.R);n<1024?(e.R<=1&&(e.L=new(F.r().r()).C(32),e.L.a[0]=e.X,e.R=2),e.X=new N(32),e.L.a[31&(t>>>5|0)]=e.X):n<32768?(e.R<=2&&(e.P=new(F.r().r().r()).C(32),e.P.a[0]=e.L,e.R=3),e.X=new N(32),e.L=new(F.r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L):n<1048576?(e.R<=3&&(e.T=new(F.r().r().r().r()).C(32),e.T.a[0]=e.P,e.R=4),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P):n<33554432?(e.R<=4&&(e.a0=new(F.r().r().r().r().r()).C(32),e.a0.a[0]=e.T,e.R=5),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.T=new(F.r().r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P,e.a0.a[31&(t>>>20|0)]=e.T):(e.R<=5&&(e.aN=new(F.r().r().r().r().r().r()).C(64),e.aN.a[0]=e.a0,e.R=6),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.T=new(F.r().r().r().r()).C(32),e.a0=new(F.r().r().r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P,e.a0.a[31&(t>>>20|0)]=e.T,e.aN.a[t>>>25|0]=e.a0)}function ex(){this.aN=null,this.a0=null,this.T=null,this.P=null,this.L=null,this.X=null,this.Q=0,this.G=0,this.O=0,this.gH=!1,this.R=0,this.X=new N(32),this.Q=0,this.G=0,this.O=0,this.gH=!1,this.R=1}j=ex.prototype=new M,j.constructor=ex;function tx(){}tx.prototype=j,j.be=(function(e){}),j.s9=(function(e){var t=e.cU();switch(t){case 0:break;case 1:this.R=1;var n=e.g.a.length;this.Q=31&n,this.G=n-this.Q|0;var r=e.g;this.X=r.a.length===32?r:R().ad(r,0,32);break;case 3:var i=e.bm,a=e.k;this.X=a.a.length===32?a:R().ad(a,0,32),this.R=2,this.O=32-e.bI|0;var o=e.l+this.O|0;this.Q=31&o,this.G=o-this.Q|0,this.L=new(F.r().r()).C(32),this.L.a[0]=e.g;var s=this.L,c=i.a.length;i.x(0,s,1,c),this.L.a[1+i.a.length|0]=this.X;break;case 5:var l=e.b2,u=e.b3,d=e.k;this.X=d.a.length===32?d:R().ad(d,0,32),this.R=3,this.O=1024-e.bh|0;var f=e.l+this.O|0;this.Q=31&f,this.G=f-this.Q|0,this.P=new(F.r().r().r()).C(32),this.P.a[0]=V().cO(e.g,e.bt);var p=this.P,m=l.a.length;l.x(0,p,1,m),this.L=R().a2(u,32),this.P.a[1+l.a.length|0]=this.L,this.L.a[u.a.length]=this.X;break;case 7:var h=e.aE,g=e.aG,_=e.aF,v=e.k;this.X=v.a.length===32?v:R().ad(v,0,32),this.R=4,this.O=32768-e.aV|0;var y=e.l+this.O|0;this.Q=31&y,this.G=y-this.Q|0,this.T=new(F.r().r().r().r()).C(32),this.T.a[0]=V().cO(V().cO(e.g,e.ba),e.bb);var b=this.T,ee=h.a.length;h.x(0,b,1,ee),this.P=R().a2(g,32),this.L=R().a2(_,32),this.T.a[1+h.a.length|0]=this.P,this.P.a[g.a.length]=this.L,this.L.a[_.a.length]=this.X;break;case 9:var te=e.af,x=e.ai,ne=e.ah,re=e.ag,ie=e.k;this.X=ie.a.length===32?ie:R().ad(ie,0,32),this.R=5,this.O=1048576-e.aw|0;var ae=e.l+this.O|0;this.Q=31&ae,this.G=ae-this.Q|0,this.a0=new(F.r().r().r().r().r()).C(32),this.a0.a[0]=V().cO(V().cO(V().cO(e.g,e.aK),e.aL),e.aM);var oe=this.a0,se=te.a.length;te.x(0,oe,1,se),this.T=R().a2(x,32),this.P=R().a2(ne,32),this.L=R().a2(re,32),this.a0.a[1+te.a.length|0]=this.T,this.T.a[x.a.length]=this.P,this.P.a[ne.a.length]=this.L,this.L.a[re.a.length]=this.X;break;case 11:var S=e.a5,ce=e.a9,C=e.a8,le=e.a7,ue=e.a6,de=e.k;this.X=de.a.length===32?de:R().ad(de,0,32),this.R=6,this.O=33554432-e.aq|0;var fe=e.l+this.O|0;this.Q=31&fe,this.G=fe-this.Q|0,this.aN=new(F.r().r().r().r().r().r()).C(64),this.aN.a[0]=V().cO(V().cO(V().cO(V().cO(e.g,e.ax),e.ay),e.az),e.aA);var pe=this.aN,me=S.a.length;S.x(0,pe,1,me),this.a0=R().a2(ce,32),this.T=R().a2(C,32),this.P=R().a2(le,32),this.L=R().a2(ue,32),this.aN.a[1+S.a.length|0]=this.a0,this.a0.a[ce.a.length]=this.T,this.T.a[C.a.length]=this.P,this.P.a[le.a.length]=this.L,this.L.a[ue.a.length]=this.X;break;default:throw new my(t)}return this.Q===0&&this.G>0&&(this.Q=32,this.G=-32+this.G|0),this}),j.qC=(function(e){return this.Q===32&&Zb(this),this.X.a[this.Q]=e,this.Q=1+this.Q|0,this}),j.oo=(function(e){return e instanceof AD?this.Q===0&&this.G===0&&!this.gH?this.s9(e):Xb(this,e):zp(this,e)}),j.pG=(function(){this.gH&&qb(this);var e=this.Q+this.G|0,t=e-this.O|0;if(t===0)return Kb(),zO();if(e<0)throw Qv(new $v,`Vector cannot have negative size `+e);if(e<=32){var n=this.X;return new kO(n.a.length===t?n:R().a2(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=R().ad(this.L,1,i),o=this.L.a[0],s=this.L.a[i],c=1+r|0,l=s.a.length===c?s:R().a2(s,c);return new BO(o,32-this.O|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=R().ad(this.P,1,f),m=this.P.a[0],h=R().ad(m,1,m.a.length),g=this.P.a[0].a[0],_=R().a2(this.P.a[f],d),v=this.P.a[f].a[d],y=1+u|0,b=v.a.length===y?v:R().a2(v,y),ee=g.a.length;return new HO(g,ee,h,ee+(h.a.length<<5)|0,p,_,b,t)}else if(e<=1048576){var te=31&(-1+e|0),x=31&((-1+e|0)>>>5|0),ne=31&((-1+e|0)>>>10|0),re=(-1+e|0)>>>15|0,ie=R().ad(this.T,1,re),ae=this.T.a[0],oe=R().ad(ae,1,ae.a.length),se=this.T.a[0].a[0],S=R().ad(se,1,se.a.length),ce=this.T.a[0].a[0].a[0],C=R().a2(this.T.a[re],ne),le=R().a2(this.T.a[re].a[ne],x),ue=this.T.a[re].a[ne].a[x],de=1+te|0,fe=ue.a.length===de?ue:R().a2(ue,de),pe=ce.a.length,me=pe+(S.a.length<<5)|0;return new WO(ce,pe,S,me,oe,me+(oe.a.length<<10)|0,ie,C,le,fe,t)}else if(e<=33554432){var he=31&(-1+e|0),ge=31&((-1+e|0)>>>5|0),_e=31&((-1+e|0)>>>10|0),ve=31&((-1+e|0)>>>15|0),ye=(-1+e|0)>>>20|0,be=R().ad(this.a0,1,ye),xe=this.a0.a[0],Se=R().ad(xe,1,xe.a.length),Ce=this.a0.a[0].a[0],we=R().ad(Ce,1,Ce.a.length),Te=this.a0.a[0].a[0].a[0],Ee=R().ad(Te,1,Te.a.length),De=this.a0.a[0].a[0].a[0].a[0],w=R().a2(this.a0.a[ye],ve),Oe=R().a2(this.a0.a[ye].a[ve],_e),ke=R().a2(this.a0.a[ye].a[ve].a[_e],ge),Ae=this.a0.a[ye].a[ve].a[_e].a[ge],je=1+he|0,Me=Ae.a.length===je?Ae:R().a2(Ae,je),T=De.a.length,Ne=T+(Ee.a.length<<5)|0,Pe=Ne+(we.a.length<<10)|0;return new KO(De,T,Ee,Ne,we,Pe,Se,Pe+(Se.a.length<<15)|0,be,w,Oe,ke,Me,t)}else{var Fe=31&(-1+e|0),Ie=31&((-1+e|0)>>>5|0),Le=31&((-1+e|0)>>>10|0),Re=31&((-1+e|0)>>>15|0),ze=31&((-1+e|0)>>>20|0),Be=(-1+e|0)>>>25|0,Ve=R().ad(this.aN,1,Be),He=this.aN.a[0],Ue=R().ad(He,1,He.a.length),We=this.aN.a[0].a[0],Ge=R().ad(We,1,We.a.length),E=this.aN.a[0].a[0].a[0],Ke=R().ad(E,1,E.a.length),qe=this.aN.a[0].a[0].a[0].a[0],Je=R().ad(qe,1,qe.a.length),Ye=this.aN.a[0].a[0].a[0].a[0].a[0],Xe=R().a2(this.aN.a[Be],ze),Ze=R().a2(this.aN.a[Be].a[ze],Re),Qe=R().a2(this.aN.a[Be].a[ze].a[Re],Le),$e=R().a2(this.aN.a[Be].a[ze].a[Re].a[Le],Ie),et=this.aN.a[Be].a[ze].a[Re].a[Le].a[Ie],tt=1+Fe|0,D=et.a.length===tt?et:R().a2(et,tt),nt=Ye.a.length,rt=nt+(Je.a.length<<5)|0,it=rt+(Ke.a.length<<10)|0,at=it+(Ge.a.length<<15)|0;return new JO(Ye,nt,Je,rt,Ke,it,Ge,at,Ue,at+(Ue.a.length<<20)|0,Ve,Xe,Ze,Qe,$e,D,t)}}),j.F=(function(){return`VectorBuilder(len1=`+this.Q+`, lenRest=`+this.G+`, offset=`+this.O+`, depth=`+this.R+`)`}),j.bd=(function(){return this.pG()}),j.bc=(function(e){return this.oo(e)}),j.b7=(function(e){return this.qC(e)}),new P().i(ex,`scala.collection.immutable.VectorBuilder`,{gN:1,ab:1,M:1,I:1,G:1});function nx(){this.o0=null,ix=this,this.o0=new N(0)}j=nx.prototype=new M,j.constructor=nx;function rx(){}rx.prototype=j,j.dg=(function(e){return this.pb(e)}),j.pb=(function(e){var t=e.E();if(t>=0){var n=this.pJ(this.o0,0,t),r=wy(e)?e.bZ(n,0,2147483647):e.m().bZ(n,0,2147483647);if(r!==t)throw new Zv(`Copied `+r+` of `+t);return ik(new ok,n,t)}else return ak(new ok).op(e)}),j.b9=(function(){return new ox}),j.sY=(function(e,t){if(t<0)throw v_(new y_,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw v_(new y_,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),j.pJ=(function(e,t,n){var r=this.sY(e.a.length,n);if(r<0)return e;var i=new N(r);return e.x(0,i,0,t),i}),j.aI=(function(e){return this.pb(e)}),new P().i(nx,`scala.collection.mutable.ArrayBuffer$`,{gS:1,an:1,a2:1,K:1,a:1});var ix;function ax(){return ix||=new nx,ix}function ox(){this.e2=null,ev(this,(ax(),ak(new ok)))}j=ox.prototype=new nv,j.constructor=ox;function sx(){}sx.prototype=j,j.be=(function(e){this.e2.be(e)}),new P().i(ox,`scala.collection.mutable.ArrayBuffer$$anon$1`,{gT:1,aV:1,M:1,I:1,G:1});function cx(){this.eU=null,F_(this,Rx())}j=cx.prototype=new L_,j.constructor=cx;function lx(){}lx.prototype=j,new P().i(cx,`scala.collection.mutable.Buffer$`,{gY:1,bI:1,a2:1,K:1,a:1});var ux;function dx(){return ux||=new cx,ux}function fx(e,t){this.e2=null,ev(this,CD(new TD,e,t))}j=fx.prototype=new nv,j.constructor=fx;function px(){}px.prototype=j,j.be=(function(e){this.e2.be(e)}),new P().i(fx,`scala.collection.mutable.HashSet$$anon$4`,{h6:1,aV:1,M:1,I:1,G:1});function mx(e,t){return e.fK=t,e.e4=0,e.da=null,e.fL=t.b4.a.length,e}function hx(){this.e4=0,this.da=null,this.fL=0,this.fK=null}j=hx.prototype=new A_,j.constructor=hx;function gx(){}gx.prototype=j,j.n=(function(){if(this.da!==null)return!0;for(;this.e4<this.fL;){var e=this.fK.b4.a[this.e4];if(this.e4=1+this.e4|0,e!==null)return this.da=e,!0}return!1}),j.j=(function(){if(this.n()){var e=this.iW(this.da);return this.da=this.da.b5,e}else return Y().N.j()});function _x(e,t){return e.fM=t,e}function vx(){this.fM=null}j=vx.prototype=new M,j.constructor=vx;function yx(){}yx.prototype=j,j.be=(function(e){}),j.bc=(function(e){return zp(this,e)}),j.bd=(function(){return this.fM});function bx(){this.eU=null,F_(this,ax())}j=bx.prototype=new L_,j.constructor=bx;function xx(){}xx.prototype=j,new P().i(bx,`scala.collection.mutable.IndexedSeq$`,{h9:1,bI:1,a2:1,K:1,a:1});var Sx;function Cx(){return Sx||=new bx,Sx}function wx(){}j=wx.prototype=new M,j.constructor=wx;function Tx(){}Tx.prototype=j,j.dg=(function(e){return new nk().hb(e)}),j.b9=(function(){return ev(new tv,new nk)}),j.aI=(function(e){return new nk().hb(e)}),new P().i(wx,`scala.collection.mutable.ListBuffer$`,{hc:1,an:1,a2:1,K:1,a:1});var Ex;function Dx(){return Ex||=new wx,Ex}function Ox(e,t){this.iC=null,this.oa=null,this.o9=0,this.iC=e,this.oa=t,this.o9=t.ac()|0}j=Ox.prototype=new A_,j.constructor=Ox;function kx(){}kx.prototype=j,j.n=(function(){return fd().oM(this.o9,this.oa.ac()|0,`mutation occurred during iteration`),this.iC.n()}),j.j=(function(){return this.iC.j()}),new P().i(Ox,`scala.collection.mutable.MutationTracker$CheckedIterator`,{he:1,n:1,p:1,b:1,c:1});function Ax(e,t){return Mx(t)?e.aW()===t.aW():!1}function jx(e){return e.W.Z?`Array[`+jx(e.W.Q())+`]`:e.W.N}function Mx(e){return!!(e&&e.$classData&&e.$classData.n.F)}function Nx(e){this.fO=0,this.oe=0,this.of=null,this.of=e,this.fO=0,this.oe=e.bK()}j=Nx.prototype=new A_,j.constructor=Nx;function Px(){}Px.prototype=j,j.n=(function(){return this.fO<this.oe}),j.j=(function(){var e=this.of.bL(this.fO);return this.fO=1+this.fO|0,e}),new P().i(Nx,`scala.runtime.ScalaRunTime$$anon$1`,{hU:1,n:1,p:1,b:1,c:1});function Fx(){}j=Fx.prototype=new M,j.constructor=Fx;function Ix(){}Ix.prototype=j,j.dg=(function(e){return this.pc(e)}),j.b9=(function(){return lk(new uk)}),j.pc=(function(e){return zp(lk(new uk),e).bd()}),j.aI=(function(e){return this.pc(e)}),new P().i(Fx,`scala.scalajs.js.WrappedArray$`,{i0:1,an:1,a2:1,K:1,a:1});var Lx;function Rx(){return Lx||=new Fx,Lx}function zx(){}j=zx.prototype=new M,j.constructor=zx;function Bx(){}Bx.prototype=j,j.dg=(function(e){return this.j2(e)}),j.j2=(function(e){return this.b9().bc(e).bd()}),j.b9=(function(){return new Q_(ck(new uk,[]),new X((e=>new pD(e.e5))))}),j.aI=(function(e){return this.j2(e)}),new P().i(zx,`scala.scalajs.runtime.WrappedVarArgs$`,{ic:1,an:1,a2:1,K:1,a:1});var Vx;function Hx(){return Vx||=new zx,Vx}function Ux(e){this.fP=null,this.fP=e}j=Ux.prototype=new dv,j.constructor=Ux;function Wx(){}Wx.prototype=j,j.pi=(function(){return!0}),j.pj=(function(){return!1}),j.jh=(function(e){return this}),j.di=(function(e,t){return e.e(this.fP)}),j.bM=(function(){return`Failure`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.fP:W().eE(e)}),j.cl=(function(){return new Nx(this)}),j.z=(function(){return G().eh(this,-889275714,!1)}),j.F=(function(){return U().iH(this)}),j.r=(function(e){if(this===e)return!0;if(e instanceof Ux){var t=this.fP,n=e.fP;return t===null?n===null:t.r(n)}else return!1}),new P().i(Ux,`scala.util.Failure`,{cr:1,ct:1,U:1,d:1,a:1});function Gx(e){this.f3=null,this.f3=e}j=Gx.prototype=new dv,j.constructor=Gx;function Kx(){}Kx.prototype=j,j.pi=(function(){return!1}),j.pj=(function(){return!0}),j.jh=(function(e){try{return new Gx(e.e(this.f3))}catch(e){var t=e instanceof vp?e:new mw(e);if(Hd().gU(t))return new Ux(t);throw t instanceof mw?t.bv:t}}),j.di=(function(e,t){try{return t.e(this.f3)}catch(t){var n=t instanceof vp?t:new mw(t);if(Hd().gU(n))return e.e(n);throw n instanceof mw?n.bv:n}}),j.bM=(function(){return`Success`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.f3:W().eE(e)}),j.cl=(function(){return new Nx(this)}),j.z=(function(){return G().eh(this,-889275714,!1)}),j.F=(function(){return U().iH(this)}),j.r=(function(e){return this===e||e instanceof Gx&&H().t(this.f3,e.f3)}),new P().i(Gx,`scala.util.Success`,{cs:1,ct:1,U:1,d:1,a:1});var qx=class e extends lm{constructor(e,t){super(),this.fj=null,this.fi=null,this.fj=e,this.fi=t,_p(this,`ErrorHandlingError: `+pm().f9(e)+`; cause: `+pm().f9(t),null,!0,!0),this.ph(t)}cl(){return new _y(this)}z(){return G().eh(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fj,r=t.fj;if(n===null?r===null:n.r(r)){var i=this.fi,a=t.fi;return i===null?a===null:i.r(a)}else return!1}else return!1}bK(){return 2}bM(){return`ErrorHandlingError`}bL(e){if(e===0)return this.fj;if(e===1)return this.fi;throw Qv(new $v,``+e)}F(){return`ErrorHandlingError: `+this.fj+`; cause: `+this.fi}};new P().i(qx,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{aY:1,au:1,u:1,a:1,d:1,U:1});var Jx=class e extends lm{constructor(e){super(),this.fk=null,this.fk=e,_p(this,`ObserverError: `+pm().f9(e),null,!0,!0)}cl(){return new _y(this)}z(){return G().eh(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fk,r=t.fk;return n===null?r===null:n.r(r)}else return!1}bK(){return 1}bM(){return`ObserverError`}bL(e){if(e===0)return this.fk;throw Qv(new $v,``+e)}F(){return`ObserverError: `+this.fk}};new P().i(Jx,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aZ:1,au:1,u:1,a:1,d:1,U:1});var Yx=class e extends lm{constructor(e,t){super(),this.fm=null,this.fl=null,this.fm=e,this.fl=t,_p(this,`ObserverErrorHandlingError: `+pm().f9(e)+`; cause: `+pm().f9(t),null,!0,!0),this.ph(t)}cl(){return new _y(this)}z(){return G().eh(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fm,r=t.fm;if(n===null?r===null:n.r(r)){var i=this.fl,a=t.fl;return i===null?a===null:i.r(a)}else return!1}else return!1}bK(){return 2}bM(){return`ObserverErrorHandlingError`}bL(e){if(e===0)return this.fm;if(e===1)return this.fl;throw Qv(new $v,``+e)}F(){return`ObserverErrorHandlingError: `+this.fm+`; cause: `+this.fl}};new P().i(Yx,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{b0:1,au:1,u:1,a:1,d:1,U:1});var Xx=class e extends lm{constructor(e,t){super(),this.eJ=null,this.eI=0,this.eJ=e,this.eI=t,_p(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}cl(){return new _y(this)}z(){var e=-889275714;return e=W().h(e,vS(`TransactionDepthExceeded`)),e=W().h(e,W().V(this.eJ)),e=W().h(e,this.eI),W().H(e,2)}r(t){return this===t?!0:t instanceof e&&this.eI===t.eI?this.eJ===t.eJ:!1}bK(){return 2}bM(){return`TransactionDepthExceeded`}bL(e){if(e===0)return this.eJ;if(e===1)return this.eI;throw Qv(new $v,``+e)}F(){return`TransactionDepthExceeded: `+this.eJ+`; maxDepth: `+this.eI}};new P().i(Xx,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{b1:1,au:1,u:1,a:1,d:1,U:1});function Zx(e){e.hf()}function Qx(e){this.k2=null,this.aS=null,this.hv=null,this.hu=null,this.cV=null,this.k2=void 0,Sv(this),this.hv=e,this.hu=new $T(this.hv,new rv((()=>qa(this)))),this.cV=this.hu}j=Qx.prototype=new M,j.constructor=Qx;function $x(){}$x.prototype=j,j.gb=(function(){return this.k2}),j.g2=(function(){return Ka(this)}),j.F=(function(){return qa(this)}),j.he=(function(){return this.cV}),j.t1=(function(e,t){this.hv=e,yw(this.hu,e,t)}),new P().i(Qx,`com.raquo.airstream.state.SourceVar`,{cO:1,aA:1,aB:1,av:1,ah:1,cQ:1});function eS(e){this.cX=null,this.cY=null,this.lm=null,this.ln=!1,t_(this,e,$())}j=eS.prototype=new r_,j.constructor=eS;function tS(){}tS.prototype=j,j.h8=(function(){return this.ln||=(this.lm=this.c(`relative`),!0),this.lm}),new P().i(eS,`com.raquo.laminar.defs.styles.StyleProps$$anon$43`,{dn:1,a7:1,A:1,a5:1,a6:1,dv:1});function nS(e,t){var n=e.hL;n===void 0?e.hL=Ed().qP(ns().bj(U().d(new(SS.r()).C([t])))):n.push(t)|0}function rS(e,t){var n=e.lI;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].u4()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function iS(e,t){this.gu=null,this.cI=null,this.hK=null,this.ep=null,this.fr=null,this.hM=null,this.bp=null,this.lI=null,this.hL=null,this.hM=e,this.bp=t,this.gu=DS(),kf(this),Nv(this),this.lI=void 0,this.hL=void 0}j=iS.prototype=new M,j.constructor=iS;function aS(){}aS.prototype=j,j.ca=(function(e){yc().gT(e,this,void 0)}),j.gZ=(function(){return this.cI}),j.oR=(function(e){this.cI=e}),j.pW=(function(e){Rv(this,e)}),j.pO=(function(e){zv(this,e)}),j.r5=(function(){if(us().ja(this.bp)){var e=this.hM;return e instanceof Nm?e.qI():void 0}else return Ms().ls}),j.sc=(function(e){var t=this.r5();return t!==void 0&&os().s6(t,e,0)}),j.sF=(function(e){if(e instanceof pf&&this.sc(e.cH)){if(rS(this,e.cH))throw Oh(new kh,"Can not add uncontrolled `"+e.cH+" <-- ???` to element `"+us().oU(this.bp)+"` that already has an input controller for `"+e.cH+"` property.");nS(this,e.cH)}}),j.F=(function(){return`ReactiveHtmlElement(`+(this.bp===null?`tag=`+this.hM.jm():this.bp.outerHTML)+`)`}),j.eG=(function(){return this.bp}),new P().i(iS,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{eb:1,aE:1,Y:1,bg:1,bh:1,e9:1});function oS(e,t){return _p(e,t,null,!0,!0),e}function sS(e){return _p(e,null,null,!0,!0),e}var cS=class extends $v{};new P().i(cS,`java.lang.ArrayIndexOutOfBoundsException`,{eC:1,aH:1,E:1,D:1,u:1,a:1});function lS(e,t){return Object.is(e,t)}function uS(e){return Kc().jq(e)}var dS=new P().i(0,`java.lang.Double`,{bs:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>typeof e==`number`)),fS=new P().i(0,`java.lang.Float`,{eH:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>xa(e))),pS=new P().i(0,`java.lang.Integer`,{eK:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>ba(e)));function mS(e,t){return t instanceof z&&e.p===t.p&&e.s===t.s}function hS(e){return e.p^e.s}var gS=new P().i(0,`java.lang.Long`,{bu:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>e instanceof z)),_S=class extends Xv{constructor(e){super(),_p(this,e,null,!0,!0)}};new P().i(_S,`java.lang.NumberFormatException`,{eS:1,bt:1,E:1,D:1,u:1,a:1});function vS(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function yS(e,t){return e===t}function bS(e,t){var n=Gf().tk(t);return e.indexOf(n)|0}function xS(e){for(var t=e.length,n=0;n!==t&&e.charCodeAt(n)<=32;)n=1+n|0;if(n===t)return``;for(var r=t;e.charCodeAt(-1+r|0)<=32;)r=-1+r|0;if(n===0&&r===t)return e;var i=n,a=r;return e.substring(i,a)}var SS=new P().i(0,`java.lang.String`,{bw:1,a:1,a3:1,aG:1,Z:1,ar:1},(e=>typeof e==`string`)),CS=class extends $v{constructor(){super(),_p(this,null,null,!0,!0)}};new P().i(CS,`java.lang.StringIndexOutOfBoundsException`,{eZ:1,aH:1,E:1,D:1,u:1,a:1});function wS(){}j=wS.prototype=new gy,j.constructor=wS;function TS(){}TS.prototype=j,j.rT=(function(){throw new sy(`None.get`)}),j.bM=(function(){return`None`}),j.bK=(function(){return 0}),j.bL=(function(e){return W().eE(e)}),j.cl=(function(){return new Nx(this)}),j.z=(function(){return 2433880}),j.F=(function(){return`None`}),j.Z=(function(){this.rT()}),new P().i(wS,`scala.None$`,{fn:1,bz:1,b:1,U:1,d:1,a:1});var ES;function DS(){return ES||=new wS,ES}function OS(e){this.fw=null,this.fw=e}j=OS.prototype=new gy,j.constructor=OS;function kS(){}kS.prototype=j,j.Z=(function(){return this.fw}),j.bM=(function(){return`Some`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.fw:W().eE(e)}),j.cl=(function(){return new Nx(this)}),j.z=(function(){return G().eh(this,-889275714,!1)}),j.F=(function(){return U().iH(this)}),j.r=(function(e){return this===e||e instanceof OS&&H().t(this.fw,e.fw)}),new P().i(OS,`scala.Some`,{bA:1,bz:1,b:1,U:1,d:1,a:1});function AS(){}j=AS.prototype=new M,j.constructor=AS;function jS(){}jS.prototype=j,j.cd=(function(){return this.by()}),j.g5=(function(e){return this.bw().aI(e)}),j.gc=(function(){return this.bw().b9()}),j.bJ=(function(e){xu(this,e)}),j.f8=(function(e){return Su(this,e)}),j.f=(function(){return Cu(this)}),j.bZ=(function(e,t,n){return wu(this,e,t,n)}),j.e7=(function(e,t,n,r){return Eu(this,e,t,n,r)}),j.E=(function(){return-1}),j.g4=(function(e){return this.g5(e)});function MS(e,t){return e.bQ=t,e.B=0,e.bz=Ul().cg(e.bQ),e}function NS(){this.bQ=null,this.B=0,this.bz=0}j=NS.prototype=new A_,j.constructor=NS;function PS(){}PS.prototype=j,j.E=(function(){return this.bz-this.B|0}),j.n=(function(){return this.B<this.bz}),j.j=(function(){this.B>=Ul().cg(this.bQ)&&Y().N.j();var e=U().eC(this.bQ,this.B);return this.B=1+this.B|0,e}),j.ec=(function(e){if(e>0){var t=this.B+e|0;if(t<0)var n=this.bz;else var r=this.bz,n=r<t?r:t;this.B=n}return this}),new P().i(NS,`scala.collection.ArrayOps$ArrayIterator`,{a0:1,n:1,p:1,b:1,c:1,a:1});function FS(e,t){return t<0?0:t>e.bR?e.bR:t}function IS(e,t){return e.ib=t,e.cZ=0,e.bR=t.u(),e}function LS(){this.ib=null,this.cZ=0,this.bR=0}j=LS.prototype=new A_,j.constructor=LS;function RS(){}RS.prototype=j,j.E=(function(){return this.bR}),j.n=(function(){return this.bR>0}),j.j=(function(){if(this.bR>0){var e=this.ib.y(this.cZ);return this.cZ=1+this.cZ|0,this.bR=-1+this.bR|0,e}else return Y().N.j()}),j.ec=(function(e){if(e>0){this.cZ=this.cZ+e|0;var t=this.bR-e|0;this.bR=t<0?0:t}return this}),j.gg=(function(e,t){var n=FS(this,e),r=FS(this,t)-n|0;return this.bR=r<0?0:r,this.cZ=this.cZ+n|0,this}),new P().i(LS,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bG:1,n:1,p:1,b:1,c:1,a:1});function zS(){this.fM=null,_x(this,Y().N)}j=zS.prototype=new yx,j.constructor=zS;function BS(){}BS.prototype=j,j.qA=(function(e){return this.fM=this.fM.iQ(new Eg((()=>new Dy(e)))),this}),j.b7=(function(e){return this.qA(e)}),new P().i(zS,`scala.collection.Iterator$$anon$21`,{fN:1,h8:1,ab:1,M:1,I:1,G:1});function VS(e,t,n){return e.dk(t,new Eg((()=>n.e(t))))}function HS(e,t){for(var n=e.m();n.n();){var r=n.j();t.df(r.bn(),r.bi())}}function US(e,t,n,r,i){return Eu(new jy(e.m(),new X((e=>{if(e!==null){var t=e.bn(),n=e.bi();return t+` -> `+n}else throw new my(e)}))),t,n,r,i)}function WS(e,t){for(var n=e.gc(),r=wD(new TD),i=e.m();i.n();){var a=i.j();r.gS(t.e(a))&&n.b7(a)}return n.bd()}function GS(e,t){var n=e.ef().b9();return n.bc(e),n.bc(t),n.bd()}function KS(e){return e.ig||=(e.ih=new JD(new N(0)),!0),e.ih}function qS(e){return e.ig?e.ih:KS(e)}function JS(){this.ih=null,this.ii=null,this.ig=!1,XS=this,this.ii=new xy(this)}j=JS.prototype=new M,j.constructor=JS;function YS(){}YS.prototype=j,j.iZ=(function(e,t){return e instanceof DD?e:this.jD(Dp().p8(e,t))}),j.h5=(function(e){return new Q_((ax(),new ox),new X((t=>ZS().jD(Du(t,e)))))}),j.jD=(function(e){if(e===null)return null;if(e instanceof N)return new JD(e);if(e instanceof Ma)return new WD(e);if(e instanceof Fa)return new BD(e);if(e instanceof Na)return new KD(e);if(e instanceof Pa)return new HD(e);if(e instanceof ka)return new RD(e);if(e instanceof Aa)return new ID(e);if(e instanceof ja)return new XD(e);if(e instanceof Oa)return new PD(e);if(Ll(e,1))return new QD(e);throw new my(e)}),j.iY=(function(e,t){return this.iZ(e,t)}),new P().i(JS,`scala.collection.immutable.ArraySeq$`,{g4:1,bK:1,bD:1,bC:1,bE:1,a:1});var XS;function ZS(){return XS||=new JS,XS}function QS(e,t){for(this.bT=0,this.fC=0,this.et=null,this.bC=0,this.d2=null,this.fD=null,ab(this,t.br);this.n();){var n=this.et.g6(this.bT);e.fg(e.cK,this.et.ee(this.bT),this.et.dl(this.bT),n,bu().cA(n),0),this.bT=1+this.bT|0}}j=QS.prototype=new sb,j.constructor=QS;function $S(){}$S.prototype=j,j.jn=(function(){throw Y().N.j(),new qv}),j.j=(function(){this.jn()}),new P().i(QS,`scala.collection.immutable.HashMapBuilder$$anon$1`,{g8:1,bX:1,n:1,p:1,b:1,c:1});function eC(e){return!!(e&&e.$classData&&e.$classData.n.t)}function tC(e){this.dN=0,this.eY=null,jb(this,e)}j=tC.prototype=new Nb,j.constructor=tC;function nC(){}nC.prototype=j,new P().i(tC,`scala.collection.immutable.Map$Map2$$anon$1`,{gm:1,gn:1,n:1,p:1,b:1,c:1});function rC(e){this.dP=0,this.dO=null,Pb(this,e)}j=rC.prototype=new Ib,j.constructor=rC;function iC(){}iC.prototype=j,new P().i(rC,`scala.collection.immutable.Map$Map3$$anon$4`,{go:1,gp:1,n:1,p:1,b:1,c:1});function aC(e){this.dQ=0,this.cM=null,Lb(this,e)}j=aC.prototype=new zb,j.constructor=aC;function oC(){}oC.prototype=j,new P().i(aC,`scala.collection.immutable.Map$Map4$$anon$7`,{gq:1,gr:1,n:1,p:1,b:1,c:1});function sC(e){this.dJ=0,this.gE=null,this.bU=0,this.fE=null,this.fF=null,this.iq=0,this.nU=null,pb(this,e),this.iq=0}j=sC.prototype=new hb,j.constructor=sC;function cC(){}cC.prototype=j,j.z=(function(){return G().pS(this.iq,W().V(this.nU),-889275714)}),j.sv=(function(){return this.n()||Y().N.j(),this.iq=this.gE.g6(this.dJ),this.nU=this.gE.dl(this.dJ),this.dJ=-1+this.dJ|0,this}),j.j=(function(){return this.sv()}),new P().i(sC,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{gt:1,g5:1,n:1,p:1,b:1,c:1});function lC(e){this.bT=0,this.fC=0,this.et=null,this.bC=0,this.d2=null,this.fD=null,ab(this,e)}j=lC.prototype=new sb,j.constructor=lC;function uC(){}uC.prototype=j,j.su=(function(){this.n()||Y().N.j();var e=this.et.pe(this.bT);return this.bT=1+this.bT|0,e}),j.j=(function(){return this.su()}),new P().i(lC,`scala.collection.immutable.MapKeyValueTupleIterator`,{gu:1,bX:1,n:1,p:1,b:1,c:1});function dC(e){e.bH<=e.aD&&Y().N.j(),e.dS=1+e.dS|0;for(var t=e.is.cT(e.dS);t.a.length===0;)e.dS=1+e.dS|0,t=e.is.cT(e.dS);e.fH=e.ex;var n=e.nW,r=e.dS,i=n/2|0,a=r-i|0;e.dR=(1+i|0)-(a<0?-a|0:a)|0;var o=e.dR;switch(o){case 1:e.b0=t;break;case 2:e.b1=t;break;case 3:e.bs=t;break;case 4:e.cw=t;break;case 5:e.ew=t;break;case 6:e.ir=t;break;default:throw new my(o)}e.ex=e.fH+Math.imul(t.a.length,1<<Math.imul(5,-1+e.dR|0))|0,e.ex>e.d8&&(e.ex=e.d8),e.dR>1&&(e.eZ=-1+(1<<Math.imul(5,e.dR))|0)}function fC(e){var t=(e.aD-e.bH|0)+e.d8|0;if(t===e.ex&&dC(e),e.dR>1){var n=t-e.fH|0;pC(e,n,e.eZ^n),e.eZ=n}e.bH=e.bH-e.aD|0;var r=e.b0.a.length,i=e.bH;e.d7=r<i?r:i,e.aD=0}function pC(e,t,n){n<1024?e.b0=e.b1.a[31&(t>>>5|0)]:n<32768?(e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[0]):n<1048576?(e.bs=e.cw.a[31&(t>>>15|0)],e.b1=e.bs.a[0],e.b0=e.b1.a[0]):n<33554432?(e.cw=e.ew.a[31&(t>>>20|0)],e.bs=e.cw.a[0],e.b1=e.bs.a[0],e.b0=e.b1.a[0]):(e.ew=e.ir.a[t>>>25|0],e.cw=e.ew.a[0],e.bs=e.cw.a[0],e.b1=e.bs.a[0],e.b0=e.b1.a[0])}function mC(e,t,n){n<1024?e.b0=e.b1.a[31&(t>>>5|0)]:n<32768?(e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):n<1048576?(e.bs=e.cw.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):n<33554432?(e.cw=e.ew.a[31&(t>>>20|0)],e.bs=e.cw.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):(e.ew=e.ir.a[t>>>25|0],e.cw=e.ew.a[31&(t>>>20|0)],e.bs=e.cw.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)])}function hC(e,t,n){this.is=null,this.d8=0,this.nW=0,this.b0=null,this.b1=null,this.bs=null,this.cw=null,this.ew=null,this.ir=null,this.d7=0,this.aD=0,this.eZ=0,this.bH=0,this.dS=0,this.dR=0,this.fH=0,this.ex=0,this.is=e,this.d8=t,this.nW=n,this.b0=e.g,this.d7=this.b0.a.length,this.aD=0,this.eZ=0,this.bH=this.d8,this.dS=0,this.dR=1,this.fH=0,this.ex=this.d7}j=hC.prototype=new A_,j.constructor=hC;function gC(){}gC.prototype=j,j.E=(function(){return this.bH-this.aD|0}),j.n=(function(){return this.bH>this.aD}),j.j=(function(){this.aD===this.d7&&fC(this);var e=this.b0.a[this.aD];return this.aD=1+this.aD|0,e}),j.ec=(function(e){if(e>0){var t=((this.aD-this.bH|0)+this.d8|0)+e|0,n=this.d8,r=t<n?t:n;if(r===this.d8)this.aD=0,this.bH=0,this.d7=0;else{for(;r>=this.ex;)dC(this);var i=r-this.fH|0;this.dR>1&&(mC(this,i,this.eZ^i),this.eZ=i),this.d7=this.b0.a.length,this.aD=31&i,this.bH=this.aD+(this.d8-r|0)|0,this.d7>this.bH&&(this.d7=this.bH)}}return this}),j.bZ=(function(e,t,n){for(var r=Ul().cg(e),i=this.bH-this.aD|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof N;l<c;){this.aD===this.d7&&fC(this);var d=c-l|0,f=this.b0.a.length-this.aD|0,p=d<f?d:f;if(u){var m=this.b0,h=this.aD,g=t+l|0;m.x(h,e,g,p)}else Dp().g0(this.b0,this.aD,e,t+l|0,p);this.aD=this.aD+p|0,l=l+p|0}return c}),new P().i(hC,`scala.collection.immutable.NewVectorIterator`,{gw:1,n:1,p:1,b:1,c:1,B:1});function _C(e){return e.iw=0,e.o2=0,e}function vC(){this.iw=0,this.o2=0}j=vC.prototype=new M,j.constructor=vC;function yC(){}yC.prototype=j,j.be=(function(e){this.iw<e&&this.sX(e)});function bC(){this.iy=null,this.o4=null,SC=this,this.iy=new xy(this),this.o4=new bO(new N(0))}j=bC.prototype=new M,j.constructor=bC;function xC(){}xC.prototype=j,j.rL=(function(e,t){return this.jg(Dp().p8(e,t))}),j.h5=(function(e){return new Q_(new ow(e.aW()),new X((e=>CC().jg(e))))}),j.jg=(function(e){if(e===null)return null;if(e instanceof N)return new bO(e);if(e instanceof Ma)return new gO(e);if(e instanceof Fa)return new fO(e);if(e instanceof Na)return new vO(e);if(e instanceof Pa)return new mO(e);if(e instanceof ka)return new uO(e);if(e instanceof Aa)return new cO(e);if(e instanceof ja)return new SO(e);if(e instanceof Oa)return new oO(e);if(Ll(e,1))return new wO(e);throw new my(e)}),j.iY=(function(e,t){return this.rL(e,t)}),new P().i(bC,`scala.collection.mutable.ArraySeq$`,{gX:1,bK:1,bD:1,bC:1,bE:1,a:1});var SC;function CC(){return SC||=new bC,SC}function wC(e){this.e4=0,this.da=null,this.fL=0,this.fK=null,mx(this,e)}j=wC.prototype=new gx,j.constructor=wC;function TC(){}TC.prototype=j,j.iW=(function(e){return e.f2}),new P().i(wC,`scala.collection.mutable.HashSet$$anon$1`,{h3:1,aW:1,n:1,p:1,b:1,c:1});function EC(e){this.e4=0,this.da=null,this.fL=0,this.fK=null,mx(this,e)}j=EC.prototype=new gx,j.constructor=EC;function DC(){}DC.prototype=j,j.iW=(function(e){return e}),new P().i(EC,`scala.collection.mutable.HashSet$$anon$2`,{h4:1,aW:1,n:1,p:1,b:1,c:1});function OC(e){this.e4=0,this.da=null,this.fL=0,this.fK=null,this.iB=0,this.o8=null,this.o8=e,mx(this,e),this.iB=0}j=OC.prototype=new gx,j.constructor=OC;function kC(){}kC.prototype=j,j.z=(function(){return this.iB}),j.iW=(function(e){return this.iB=this.o8.ha(e.db),this}),new P().i(OC,`scala.collection.mutable.HashSet$$anon$3`,{h5:1,aW:1,n:1,p:1,b:1,c:1});function AC(e){this.fN=null,this.fN=e}j=AC.prototype=new M,j.constructor=AC;function jC(){}jC.prototype=j,j.r=(function(e){return Ax(this,e)}),j.z=(function(){return W().V(this.fN)}),j.F=(function(){return jx(this.fN)}),j.aW=(function(){return this.fN}),j.bx=(function(e){return this.fN.W.U(e)}),new P().i(AC,`scala.reflect.ClassTag$GenericClassTag`,{hm:1,F:1,P:1,Q:1,a:1,d:1});function MC(e){this.cX=null,this.cY=null,this.le=null,this.lf=!1,t_(this,e,$())}j=MC.prototype=new r_,j.constructor=MC;function NC(){}NC.prototype=j,j.f5=(function(){return this.lf||=(this.le=this.c(`auto`),!0),this.le}),new P().i(MC,`com.raquo.laminar.defs.styles.StyleProps$$anon$11`,{dj:1,a7:1,A:1,a5:1,a6:1,ba:1,du:1});function PC(e){this.cX=null,this.cY=null,this.lg=null,this.lh=!1,t_(this,e,$())}j=PC.prototype=new r_,j.constructor=PC;function FC(){}FC.prototype=j,j.ch=(function(){return this.lh||=(this.lg=this.c(`inline-block`),!0),this.lg}),new P().i(PC,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{dl:1,a7:1,A:1,a5:1,a6:1,bb:1,ds:1});function IC(e){this.cX=null,this.cY=null,this.lo=null,this.lp=!1,t_(this,e,$())}j=IC.prototype=new r_,j.constructor=IC;function LC(){}LC.prototype=j,j.v=(function(){return this.lp||=(this.lo=$d(this),!0),this.lo}),new P().i(IC,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{dp:1,a7:1,A:1,a5:1,a6:1,aC:1,aD:1});function RC(){}j=RC.prototype=new Wv,j.constructor=RC;function zC(){}zC.prototype=j;function BC(e){this.bQ=null,this.B=0,this.bz=0,this.i3=null,this.i3=e,MS(this,e)}j=BC.prototype=new PS,j.constructor=BC;function VC(){}VC.prototype=j,j.sw=(function(){this.B>=this.i3.a.length&&Y().N.j();var e=this.i3.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sw()}),new P().i(BC,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{fw:1,a0:1,n:1,p:1,b:1,c:1,a:1});function HC(e){this.bQ=null,this.B=0,this.bz=0,this.i4=null,this.i4=e,MS(this,e)}j=HC.prototype=new PS,j.constructor=HC;function UC(){}UC.prototype=j,j.sx=(function(){this.B>=this.i4.a.length&&Y().N.j();var e=this.i4.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return Sa(this.sx())}),new P().i(HC,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{fx:1,a0:1,n:1,p:1,b:1,c:1,a:1});function WC(e){this.bQ=null,this.B=0,this.bz=0,this.i5=null,this.i5=e,MS(this,e)}j=WC.prototype=new PS,j.constructor=WC;function GC(){}GC.prototype=j,j.sy=(function(){this.B>=this.i5.a.length&&Y().N.j();var e=this.i5.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sy()}),new P().i(WC,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{fy:1,a0:1,n:1,p:1,b:1,c:1,a:1});function KC(e){this.bQ=null,this.B=0,this.bz=0,this.i6=null,this.i6=e,MS(this,e)}j=KC.prototype=new PS,j.constructor=KC;function qC(){}qC.prototype=j,j.sz=(function(){this.B>=this.i6.a.length&&Y().N.j();var e=this.i6.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sz()}),new P().i(KC,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{fz:1,a0:1,n:1,p:1,b:1,c:1,a:1});function JC(e){this.bQ=null,this.B=0,this.bz=0,this.i7=null,this.i7=e,MS(this,e)}j=JC.prototype=new PS,j.constructor=JC;function YC(){}YC.prototype=j,j.sA=(function(){this.B>=this.i7.a.length&&Y().N.j();var e=this.i7.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sA()}),new P().i(JC,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{fA:1,a0:1,n:1,p:1,b:1,c:1,a:1});function XC(e){this.bQ=null,this.B=0,this.bz=0,this.i8=null,this.i8=e,MS(this,e)}j=XC.prototype=new PS,j.constructor=XC;function ZC(){}ZC.prototype=j,j.sB=(function(){this.B>=this.i8.a.length&&Y().N.j();var e=this.i8.a[this.B],t=e.p,n=e.s;return this.B=1+this.B|0,new z(t,n)}),j.j=(function(){return this.sB()}),new P().i(XC,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{fB:1,a0:1,n:1,p:1,b:1,c:1,a:1});function QC(e){this.bQ=null,this.B=0,this.bz=0,this.i9=null,this.i9=e,MS(this,e)}j=QC.prototype=new PS,j.constructor=QC;function $C(){}$C.prototype=j,j.sC=(function(){this.B>=this.i9.a.length&&Y().N.j();var e=this.i9.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sC()}),new P().i(QC,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{fC:1,a0:1,n:1,p:1,b:1,c:1,a:1});function ew(e){this.bQ=null,this.B=0,this.bz=0,this.nD=null,this.nD=e,MS(this,e)}j=ew.prototype=new PS,j.constructor=ew;function tw(){}tw.prototype=j,j.sD=(function(){this.B>=this.nD.a.length&&Y().N.j(),this.B=1+this.B|0}),j.j=(function(){this.sD()}),new P().i(ew,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{fD:1,a0:1,n:1,p:1,b:1,c:1,a:1});function nw(e){this.bQ=null,this.B=0,this.bz=0,this.ia=null,this.ia=e,MS(this,e)}j=nw.prototype=new PS,j.constructor=nw;function rw(){}rw.prototype=j,j.sE=(function(){this.B>=this.ia.a.length&&Y().N.j();var e=this.ia.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sE()}),new P().i(nw,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{fE:1,a0:1,n:1,p:1,b:1,c:1,a:1});function iw(e){return e.cd()+`(<not computed>)`}function aw(e){return!!(e&&e.$classData&&e.$classData.n.ae)}function ow(e){this.iw=0,this.o2=0,this.f1=null,this.o3=!1,this.ix=null,this.f1=e,_C(this),this.o3=e===Ra.l(),this.ix=[]}j=ow.prototype=new yC,j.constructor=ow;function sw(){}sw.prototype=j,j.or=(function(e){var t=this.o3?Ca(e):e===null?this.f1.W.z:e;return this.ix.push(t),this}),j.qt=(function(e){for(var t=e.m();t.n();)this.or(t.j());return this}),j.sX=(function(e){}),j.bd=(function(){return(this.f1===Ia.l()?Rl.l():this.f1===gd.l()||this.f1===Ng.l()?F.l():this.f1).W.r().w(this.ix)}),j.F=(function(){return`ArrayBuilder.generic`}),j.bc=(function(e){return this.qt(e)}),j.b7=(function(e){return this.or(e)}),new P().i(ow,`scala.collection.mutable.ArrayBuilder$generic`,{gW:1,gV:1,ab:1,M:1,I:1,G:1,a:1});function cw(e,t){this.ib=null,this.cZ=0,this.bR=0,this.o7=null,this.o6=0,this.o7=t,IS(this,e),this.o6=t.ac()|0}j=cw.prototype=new RS,j.constructor=cw;function lw(){}lw.prototype=j,j.n=(function(){return fd().oM(this.o6,this.o7.ac()|0,`mutation occurred during iteration`),this.bR>0}),new P().i(cw,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{h0:1,bG:1,n:1,p:1,b:1,c:1,a:1});function uw(){this.a1=null}j=uw.prototype=new M,j.constructor=uw;function dw(){}dw.prototype=j,j.F=(function(){return this.a1}),j.r=(function(e){return this===e}),j.z=(function(){return _a(this)});function fw(){}j=fw.prototype=new M,j.constructor=fw;function pw(){}pw.prototype=j;var mw=class e extends y_{constructor(e){super(),this.bv=null,this.bv=e,_p(this,null,null,!0,!0)}g7(){return la(this.bv)}bM(){return`JavaScriptException`}bK(){return 1}bL(e){return e===0?this.bv:W().eE(e)}cl(){return new Nx(this)}z(){return G().eh(this,-889275714,!1)}r(t){return this===t||t instanceof e&&H().t(this.bv,t.bv)}};new P().i(mw,`scala.scalajs.js.JavaScriptException`,{cp:1,E:1,D:1,u:1,a:1,U:1,d:1});function hw(e,t){e.ji()!==void 0&&e.iG(ao().pp()),e.pn(t)}function gw(e){var t=e.ji();if(t===void 0){e.iG(ao().pp());var n=e.iS();hw(e,n);var r=n}else var r=t;return r}function _w(e,t,n){yw(e,new Gx(t),n)}function vw(e,t,n){yw(e,new Ux(t),n)}function yw(e,t,n){hw(e,t);var r=t.pi(),i=!1;i=!1,e.h1(!1);for(var a=e.g3(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.fd(t),r&&!i&&(i=!0)}for(var c=e.g9(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.sI(t,n),r&&!i&&(i=!0)}e.h1(!0);var d=e.jj();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].ac(),f=1+f|0;d.length=0}r&&!i&&t.di(new Q((e=>{pm().cm(e)})),new Q((e=>void 0)))}function bw(e){this.cX=null,this.cY=null,t_(this,e,$())}j=bw.prototype=new r_,j.constructor=bw;function xw(){}xw.prototype=j,new P().i(bw,`com.raquo.laminar.defs.styles.StyleProps$$anon$25`,{dk:1,a7:1,A:1,a5:1,a6:1,dr:1,dw:1,dx:1});function Sw(e){this.cX=null,this.cY=null,this.li=null,this.lj=!1,this.lk=null,this.ll=!1,t_(this,e,$())}j=Sw.prototype=new r_,j.constructor=Sw;function Cw(){}Cw.prototype=j,j.f5=(function(){return this.lj||=(this.li=this.c(`auto`),!0),this.li}),j.v=(function(){return this.ll||=(this.lk=$d(this),!0),this.lk}),new P().i(Sw,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{dm:1,a7:1,A:1,a5:1,a6:1,ba:1,aC:1,aD:1});function ww(e,t){typeof console<`u`&&(e.np&&console.error?console.error(t):console.log(t))}function Tw(e){this.np=!1,this.ft=null,this.np=e,new ey,this.ft=``}j=Tw.prototype=new zC,j.constructor=Tw;function Ew(){}Ew.prototype=j,j.sg=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.ft=``+this.ft+t,t=``;else{var r=this.ft,i=t;ww(this,``+r+i.substring(0,n)),this.ft=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new P().i(Tw,`java.lang.JSConsoleBasedPrintStream`,{eN:1,eA:1,ez:1,bm:1,bk:1,bo:1,bl:1,bn:1});function Dw(e,t,n){for(;;)if(t<=0||n.f())return n;else{var r=-1+t|0,i=n.w();t=r,n=i}}function Ow(e,t){if(e.bo(1)<=0)return e;for(var n=e.gc(),r=wD(new TD),i=e.m(),a=!1;i.n();){var o=i.j();r.gS(t.e(o))?n.b7(o):a=!0}return a?n.bd():e}function kw(){this.a1=null}j=kw.prototype=new dw,j.constructor=kw;function Aw(){}Aw.prototype=j,j.aW=(function(){return La.l()}),j.bx=(function(e){return new Oa(e)});function jw(){this.a1=null}j=jw.prototype=new dw,j.constructor=jw;function Mw(){}Mw.prototype=j,j.aW=(function(){return za.l()}),j.bx=(function(e){return new Aa(e)});function Nw(){this.a1=null}j=Nw.prototype=new dw,j.constructor=Nw;function Pw(){}Pw.prototype=j,j.aW=(function(){return Ra.l()}),j.bx=(function(e){return new ka(e)});function Fw(){this.a1=null}j=Fw.prototype=new dw,j.constructor=Fw;function Iw(){}Iw.prototype=j,j.aW=(function(){return Wa.l()}),j.bx=(function(e){return new Fa(e)});function Lw(){this.a1=null}j=Lw.prototype=new dw,j.constructor=Lw;function Rw(){}Rw.prototype=j,j.aW=(function(){return Ua.l()}),j.bx=(function(e){return new Pa(e)});function zw(){this.a1=null}j=zw.prototype=new dw,j.constructor=zw;function Bw(){}Bw.prototype=j,j.aW=(function(){return Va.l()}),j.bx=(function(e){return new Ma(e)});function Vw(){this.a1=null}j=Vw.prototype=new dw,j.constructor=Vw;function Hw(){}Hw.prototype=j,j.aW=(function(){return Ha.l()}),j.bx=(function(e){return new Na(e)});function Uw(){this.dd=null}j=Uw.prototype=new pw,j.constructor=Uw;function Ww(){}Ww.prototype=j,j.F=(function(){return this.dd}),j.r=(function(e){return this===e}),j.z=(function(){return _a(this)});function Gw(){this.a1=null}j=Gw.prototype=new dw,j.constructor=Gw;function Kw(){}Kw.prototype=j,j.aW=(function(){return Ba.l()}),j.bx=(function(e){return new ja(e)});function qw(){this.a1=null}j=qw.prototype=new dw,j.constructor=qw;function Jw(){}Jw.prototype=j,j.aW=(function(){return Ia.l()}),j.bx=(function(e){return new(Rl.r()).C(e)});function Yw(e){this.cX=null,this.cY=null,this.lq=null,this.lr=!1,t_(this,e,$())}j=Yw.prototype=new r_,j.constructor=Yw;function Xw(){}Xw.prototype=j,j.v=(function(){return this.lr||=(this.lq=$d(this),!0),this.lq}),new P().i(Yw,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{dq:1,a7:1,A:1,a5:1,a6:1,aC:1,aD:1,dt:1,bb:1});function Zw(){}j=Zw.prototype=new jS,j.constructor=Zw;function Qw(){}Qw.prototype=j,j.bw=(function(){return ng()}),j.F=(function(){return iw(this)}),j.by=(function(){return`View`});function $w(e,t){if(e===t)return!0;if(eT(t))if(e.aX()===t.aX())try{return e.td(t)}catch(e){if(e instanceof qv)return!1;throw e}else return!1;else return!1}function eT(e){return!!(e&&e.$classData&&e.$classData.n.aO)}function tT(){this.dd=null,this.dd=`Any`}j=tT.prototype=new Ww,j.constructor=tT;function nT(){}nT.prototype=j,j.aW=(function(){return F.l()}),j.bx=(function(e){return new N(e)}),new P().i(tT,`scala.reflect.ManifestFactory$AnyManifest$`,{hn:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var rT;function iT(){return rT||=new tT,rT}function aT(){this.a1=null,this.a1=`Boolean`}j=aT.prototype=new Aw,j.constructor=aT;function oT(){}oT.prototype=j,new P().i(aT,`scala.reflect.ManifestFactory$BooleanManifest$`,{hp:1,ho:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var sT;function cT(){return sT||=new aT,sT}function lT(){this.a1=null,this.a1=`Byte`}j=lT.prototype=new Mw,j.constructor=lT;function uT(){}uT.prototype=j,new P().i(lT,`scala.reflect.ManifestFactory$ByteManifest$`,{hr:1,hq:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var dT;function fT(){return dT||=new lT,dT}function pT(){this.a1=null,this.a1=`Char`}j=pT.prototype=new Pw,j.constructor=pT;function mT(){}mT.prototype=j,new P().i(pT,`scala.reflect.ManifestFactory$CharManifest$`,{ht:1,hs:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var hT;function gT(){return hT||=new pT,hT}function _T(){this.a1=null,this.a1=`Double`}j=_T.prototype=new Iw,j.constructor=_T;function vT(){}vT.prototype=j,new P().i(_T,`scala.reflect.ManifestFactory$DoubleManifest$`,{hv:1,hu:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var yT;function bT(){return yT||=new _T,yT}function xT(){this.a1=null,this.a1=`Float`}j=xT.prototype=new Rw,j.constructor=xT;function ST(){}ST.prototype=j,new P().i(xT,`scala.reflect.ManifestFactory$FloatManifest$`,{hx:1,hw:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var CT;function wT(){return CT||=new xT,CT}function TT(){this.a1=null,this.a1=`Int`}j=TT.prototype=new Bw,j.constructor=TT;function ET(){}ET.prototype=j,new P().i(TT,`scala.reflect.ManifestFactory$IntManifest$`,{hz:1,hy:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var DT;function OT(){return DT||=new TT,DT}function kT(){this.a1=null,this.a1=`Long`}j=kT.prototype=new Hw,j.constructor=kT;function AT(){}AT.prototype=j,new P().i(kT,`scala.reflect.ManifestFactory$LongManifest$`,{hB:1,hA:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var jT;function MT(){return jT||=new kT,jT}function NT(){this.dd=null,this.dd=`Nothing`}j=NT.prototype=new Ww,j.constructor=NT;function PT(){}PT.prototype=j,j.aW=(function(){return Ng.l()}),j.bx=(function(e){return new N(e)}),new P().i(NT,`scala.reflect.ManifestFactory$NothingManifest$`,{hC:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var FT;function IT(){return FT||=new NT,FT}function LT(){this.dd=null,this.dd=`Null`}j=LT.prototype=new Ww,j.constructor=LT;function RT(){}RT.prototype=j,j.aW=(function(){return gd.l()}),j.bx=(function(e){return new N(e)}),new P().i(LT,`scala.reflect.ManifestFactory$NullManifest$`,{hD:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var zT;function BT(){return zT||=new LT,zT}function VT(){this.dd=null,this.dd=`Object`}j=VT.prototype=new Ww,j.constructor=VT;function HT(){}HT.prototype=j,j.aW=(function(){return F.l()}),j.bx=(function(e){return new N(e)}),new P().i(VT,`scala.reflect.ManifestFactory$ObjectManifest$`,{hE:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var UT;function WT(){return UT||=new VT,UT}function GT(){this.a1=null,this.a1=`Short`}j=GT.prototype=new Kw,j.constructor=GT;function KT(){}KT.prototype=j,new P().i(GT,`scala.reflect.ManifestFactory$ShortManifest$`,{hG:1,hF:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var qT;function JT(){return qT||=new GT,qT}function YT(){this.a1=null,this.a1=`Unit`}j=YT.prototype=new Jw,j.constructor=YT;function XT(){}XT.prototype=j,new P().i(YT,`scala.reflect.ManifestFactory$UnitManifest$`,{hI:1,hH:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var ZT;function QT(){return ZT||=new YT,ZT}function $T(e,t){this.k7=null,this.k6=!1,this.k8=null,this.hw=0,this.k4=null,this.k5=null,this.kb=!1,this.hx=null,this.k9=null,this.ka=0,this.k9=t,this.k7=void 0,mm(this),this.hw=0,fv(this),this.hx=void 0,this.ka=1,hw(this,e)}j=$T.prototype=new M,j.constructor=$T;function eE(){}eE.prototype=j,j.gb=(function(){return this.k7}),j.F=(function(){return qa(this)}),j.jc=(function(){return this.k6}),j.jj=(function(){return this.k8}),j.h1=(function(e){this.k6=e}),j.jk=(function(e){this.k8=e}),j.pv=(function(){}),j.r=(function(e){return this===e}),j.z=(function(){return _a(this)}),j.iF=(function(){return this.hw}),j.iG=(function(e){this.hw=e}),j.he=(function(){return this}),j.pu=(function(){Zx(this)}),j.g3=(function(){return this.k4}),j.g9=(function(){return this.k5}),j.pX=(function(){return this.kb}),j.hh=(function(e){this.kb=e}),j.oP=(function(e){this.k4=e}),j.oQ=(function(e){this.k5=e}),j.ji=(function(){return this.hx}),j.pn=(function(e){this.hx=e}),j.hf=(function(){return gw(this)}),j.pR=(function(){return this.ka}),j.iS=(function(){return gw(this)}),j.px=(function(){}),j.g2=(function(){return this.k9.ac()+`.signal`}),new P().i($T,`com.raquo.airstream.state.VarSignal`,{cT:1,aA:1,ah:1,b2:1,b4:1,aB:1,b5:1,b6:1,b7:1,cP:1});function tE(e,t){return e===t?!0:nE(t)&&t.gX(e)?e.fe(t):!1}function nE(e){return!!(e&&e.$classData&&e.$classData.n.m)}function rE(e){this.nO=null,this.nO=e}j=rE.prototype=new Qw,j.constructor=rE;function iE(){}iE.prototype=j,j.m=(function(){return this.nO.ac()}),new P().i(rE,`scala.collection.View$$anon$1`,{g0:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1});function aE(e,t){this.gD=null,this.nP=null,this.gD=e,this.nP=t}j=aE.prototype=new Qw,j.constructor=aE;function oE(){}oE.prototype=j,j.m=(function(){return new ky(this.gD.m(),this.nP)}),j.E=(function(){return this.gD.E()===0?0:-1}),j.f=(function(){return this.gD.f()}),new P().i(aE,`scala.collection.View$DistinctBy`,{g1:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1});function sE(e){e.hp=e.dp!==null,e.gl=-1}function cE(e){if(vv(e.dp),e.hp){var t=e.dp.iF();t!==e.gl&&lE(e,e.iS(),t)}}function lE(e,t,n){hw(e,t),e.gl=n}function uE(e,t,n){e.hp&&(e.gl=e.dp.iF())}function dE(e){hv(e.dp,e,!1),Zx(e)}function fE(e){_m(e.dp,e)}function pE(){}j=pE.prototype=new jS,j.constructor=pE;function mE(){}mE.prototype=j,j.r=(function(e){return $w(this,e)}),j.by=(function(){return`Set`}),j.F=(function(){return Cy(this)}),j.td=(function(e){return this.f8(e)}),j.e=(function(e){return this.ce(e)});function hE(e,t){if(e===t)return!0;if(gE(t))if(e.aX()===t.aX())try{return e.f8(new X((e=>(t=>H().t(e.dk(t.bn(),P_().nL),t.bi())))(t)))}catch(e){if(e instanceof qv)return!1;throw e}else return!1;else return!1}function gE(e){return!!(e&&e.$classData&&e.$classData.n.a8)}function _E(e,t,n){this.jR=null,this.jQ=!1,this.jS=null,this.hn=0,this.jO=null,this.jP=null,this.jU=!1,this.ho=null,this.hp=!1,this.gl=0,this.dp=null,this.hq=null,this.hr=null,this.jT=0,this.dp=e,this.hq=t,this.hr=n,this.jR=void 0,mm(this),this.hn=0,fv(this),this.ho=void 0,sE(this),this.jT=1+e.pR()|0}j=_E.prototype=new M,j.constructor=_E;function vE(){}vE.prototype=j,j.gb=(function(){return this.jR}),j.g2=(function(){return Ka(this)}),j.F=(function(){return qa(this)}),j.jc=(function(){return this.jQ}),j.jj=(function(){return this.jS}),j.h1=(function(e){this.jQ=e}),j.jk=(function(e){this.jS=e}),j.r=(function(e){return this===e}),j.z=(function(){return _a(this)}),j.iF=(function(){return this.hn}),j.iG=(function(e){this.hn=e}),j.he=(function(){return this}),j.g3=(function(){return this.jO}),j.g9=(function(){return this.jP}),j.pX=(function(){return this.jU}),j.hh=(function(e){this.jU=e}),j.oP=(function(e){this.jO=e}),j.oQ=(function(e){this.jP=e}),j.ji=(function(){return this.ho}),j.pn=(function(e){this.ho=e}),j.hf=(function(){return gw(this)}),j.px=(function(){cE(this)}),j.pu=(function(){dE(this)}),j.pv=(function(){fE(this)}),j.pR=(function(){return this.jT}),j.sI=(function(e,t){uE(this,e,t),e.di(new Q((e=>{var n=this.hr;if(n.f())vw(this,e,t);else{var r=n.Z();try{var i=new Gx(r.dh(e,new Q((e=>null))))}catch(e){var a=e instanceof vp?e:new mw(e);matchEnd8:{var i;if(Hd().gU(a)){var i=new Ux(a);break matchEnd8}throw a instanceof mw?a.bv:a}}i.di(new Q((e=>(n=>{vw(this,new qx(n,e),t)}))(e)),new Q((e=>(n=>{n===null?vw(this,e,t):n.f()||_w(this,n.Z(),t)}))(e)))}})),new Q((n=>{yw(this,e.jh(this.hq),t)})))}),j.iS=(function(){var e=this.dp.hf().jh(this.hq);return e.di(new Q((t=>{var n=this.hr;if(n.f())return e;var r=n.Z();try{var i=new Gx(r.dh(t,new Q((e=>null))))}catch(e){var a=e instanceof vp?e:new mw(e);matchEnd8:{var i;if(Hd().gU(a)){var i=new Ux(a);break matchEnd8}throw a instanceof mw?a.bv:a}}return i.di(new Q((e=>(t=>new Ux(new qx(t,e))))(t)),new Q((t=>{if(t===null)return e;var n=t.f()?DS():new OS(new Gx(t.Z()));return n.f()?e:n.Z()})))})),new Q((t=>e)))}),new P().i(_E,`com.raquo.airstream.misc.MapSignal`,{cG:1,aA:1,ah:1,b2:1,b4:1,aB:1,b5:1,b6:1,b7:1,b3:1,cu:1,cv:1});function yE(){}j=yE.prototype=new jS,j.constructor=yE;function bE(){}bE.prototype=j,j.gX=(function(e){return!0}),j.r=(function(e){return tE(this,e)}),j.z=(function(){return G().pK(this)}),j.F=(function(){return Cy(this)}),j.cP=(function(e){return z_(this,e)}),j.jb=(function(e){return B_(this,e)}),j.bo=(function(e){return Uh(this,e)}),j.f=(function(){return V_(this)}),j.fe=(function(e){return H_(this,e)}),j.dh=(function(e,t){return Ip(this,e,t)}),j.cB=(function(e){return this.jb(e|0)});function xE(){}j=xE.prototype=new Qw,j.constructor=xE;function SE(){}SE.prototype=j,j.by=(function(){return`SeqView`}),j.cP=(function(e){return z_(this,e)}),j.bo=(function(e){return Uh(this,e)}),j.f=(function(){return V_(this)});function CE(e){return!!(e&&e.$classData&&e.$classData.n.q)}function wE(e){return!!(e&&e.$classData&&e.$classData.n.at)}function TE(){}j=TE.prototype=new jS,j.constructor=TE;function EE(){}EE.prototype=j,j.r=(function(e){return hE(this,e)}),j.z=(function(){return G().so(this)}),j.by=(function(){return`Map`}),j.F=(function(){return Cy(this)}),j.g5=(function(e){return this.pl().aI(e)}),j.dh=(function(e,t){return VS(this,e,t)}),j.eD=(function(e){HS(this,e)}),j.cB=(function(e){return this.ce(e)}),j.e7=(function(e,t,n,r){return US(this,e,t,n,r)});function DE(e,t){return e.eq=t,e}function OE(){this.eq=null}j=OE.prototype=new SE,j.constructor=OE;function kE(){}kE.prototype=j,j.y=(function(e){return this.eq.y(e)}),j.u=(function(){return this.eq.u()}),j.m=(function(){return this.eq.m()}),j.E=(function(){return this.eq.E()}),j.f=(function(){return this.eq.f()}),new P().i(OE,`scala.collection.SeqView$Id`,{bJ:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1});function AE(){this.l0=null,this.l1=!1,this.kr=null,this.ks=!1,this.kA=null,this.kB=!1,this.kt=null,this.ku=!1,this.l8=null,this.l9=!1,this.kw=null,this.kx=!1,this.kE=null,this.kF=!1,this.kQ=null,this.kR=!1,this.kO=null,this.kP=!1,this.kS=null,this.kT=!1,this.kj=null,this.kk=!1,this.kl=null,this.km=!1,this.kn=null,this.kq=!1,this.ko=null,this.kp=!1,this.ky=null,this.kz=!1,this.kC=null,this.kD=!1,this.kG=null,this.kJ=!1,this.kH=null,this.kI=!1,this.kK=null,this.kL=!1,this.kM=null,this.kN=!1,this.kU=null,this.kV=!1,this.kW=null,this.kX=!1,this.kY=null,this.kZ=!1,this.l6=null,this.l7=!1,this.la=null,this.lb=!1,this.kv=null,this.fn=null,this.l2=null,this.l3=!1,this.kg=null,this.aB=null,this.q0=null,this.kh=null,this.ki=!1,this.l4=null,this.l5=!1,Ts(this),ys(this),_s(this),vs(this)}j=AE.prototype=new M,j.constructor=AE;function jE(){}jE.prototype=j,j.cn=(function(){return this.l1||=(this.l0=Af(new jf,`span`,!1),!0),this.l0}),j.fZ=(function(){return this.ks||=(this.kr=Af(new jf,`br`,!0),!0),this.kr}),j.S=(function(){return this.kB||=(this.kA=Af(new jf,`div`,!1),!0),this.kA}),j.oN=(function(){return this.ku||=(this.kt=new pf(`checked`,ws().hA),!0),this.kt}),j.ek=(function(){return this.l9||=(this.l8=new pf(`value`,ws().bl),!0),this.l8}),j.rh=(function(){return this.kx||=(this.kw=new pf(`defaultChecked`,ws().hA),!0),this.kw}),j.s5=(function(){return this.kF||=(this.kE=new pf(`id`,ws().bl),!0),this.kE}),j.sH=(function(){return this.kR||=(this.kQ=new sf(`click`),!0),this.kQ}),j.sG=(function(){return this.kP||=(this.kO=new sf(`change`),!0),this.kO}),j.ae=(function(){return this.kT||=(this.kS=new sf(`input`),!0),this.kS}),j.qK=(function(){return this.kk||=(this.kj=t_(new n_,`animation`,$()),!0),this.kj}),j.cc=(function(){return this.km||=(this.kl=new bw(`background`),!0),this.kl}),j.bk=(function(){return this.kq||=(this.kn=t_(new n_,`border`,$()),!0),this.kn}),j.bY=(function(){return this.kp||=(this.ko=new IC(`border-radius`),!0),this.ko}),j.cf=(function(){return this.kz||=(this.ky=new PC(`display`),!0),this.ky}),j.a3=(function(){return this.kD||=(this.kC=new Sw(`height`),!0),this.kC}),j.ck=(function(){return this.kJ||=(this.kG=new Sw(`margin`),!0),this.kG}),j.pm=(function(){return this.kI||=(this.kH=new Sw(`margin-top`),!0),this.kH}),j.sp=(function(){return this.kL||=(this.kK=new Yw(`max-height`),!0),this.kK}),j.ga=(function(){return this.kN||=(this.kM=new Yw(`max-width`),!0),this.kM}),j.ge=(function(){return this.kV||=(this.kU=new MC(`overflow`),!0),this.kU}),j.sM=(function(){return this.kX||=(this.kW=new IC(`padding`),!0),this.kW}),j.h7=(function(){return this.kZ||=(this.kY=new eS(`position`),!0),this.kY}),j.tl=(function(){return this.l7||=(this.l6=t_(new n_,`transform`,$()),!0),this.l6}),j.ab=(function(){return this.lb||=(this.la=new Sw(`width`),!0),this.la}),j.tb=(function(){return this.l3||=(this.l2=uf(new df,`style`,ws().bl),!0),this.l2}),j.qr=(function(){return this.ki||=(this.kh=new af(this),!0),this.kh}),j.te=(function(){return this.l5||=(this.l4=new Xg(this),!0),this.l4}),new P().i(AE,`com.raquo.laminar.api.package$$anon$1`,{d7:1,dy:1,dc:1,dh:1,dg:1,di:1,de:1,d5:1,d1:1,d4:1,b9:1,bc:1,b8:1,d2:1});function ME(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function NE(){}j=NE.prototype=new SE,j.constructor=NE;function PE(){}PE.prototype=j,j.by=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()});function FE(e){this.eq=null,DE(this,e)}j=FE.prototype=new kE,j.constructor=FE;function IE(){}IE.prototype=j,j.m=(function(){return IS(new LS,this)}),j.by=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),new P().i(FE,`scala.collection.IndexedSeqView$Id`,{fI:1,bJ:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1,bF:1,r:1});function LE(){}j=LE.prototype=new bE,j.constructor=LE;function RE(){}RE.prototype=j;function zE(e,t){this.iv=null,this.o1=null,this.iv=e,this.o1=t}j=zE.prototype=new PE,j.constructor=zE;function BE(){}BE.prototype=j,j.y=(function(e){return this.iv.y(e)}),j.u=(function(){return this.iv.aH}),j.cd=(function(){return`ArrayBufferView`}),j.m=(function(){return new cw(this,this.o1)}),new P().i(zE,`scala.collection.mutable.ArrayBufferView`,{gU:1,ft:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1,bF:1,r:1});function VE(){}j=VE.prototype=new EE,j.constructor=VE;function HE(){}HE.prototype=j,j.pl=(function(){return bg()}),j.bw=(function(){return q_()});function UE(e,t){return!GE(t)||e.u()===t.u()}function WE(e,t){if(GE(t)){if(e===t)return!0;var n=e.u(),r=n===t.u();if(r){var i=0,a=e.gV(),o=t.gV(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().t(e.y(i),t.y(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().ec(i),m=t.m().ec(i);r&&p.n();)r=H().t(p.j(),m.j())}return r}else return H_(e,t)}function GE(e){return!!(e&&e.$classData&&e.$classData.n.y)}function KE(){}j=KE.prototype=new bE,j.constructor=KE;function qE(){}qE.prototype=j;function JE(){}j=JE.prototype=new HE,j.constructor=JE;function YE(){}YE.prototype=j,j.aX=(function(){return 0}),j.E=(function(){return 0}),j.f=(function(){return!0}),j.iL=(function(e){throw new sy(`key not found: `+e)}),j.ce=(function(e){return!1}),j.dk=(function(e,t){return t.ac()}),j.m=(function(){return Y().N}),j.ej=(function(e,t){return new QE(e,t)}),j.e=(function(e){this.iL(e)}),new P().i(JE,`scala.collection.immutable.Map$EmptyMap$`,{gl:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,a:1});var XE;function ZE(){return XE||=new JE,XE}function QE(e,t){this.cL=null,this.eu=null,this.cL=e,this.eu=t}j=QE.prototype=new HE,j.constructor=QE;function $E(){}$E.prototype=j,j.aX=(function(){return 1}),j.E=(function(){return 1}),j.f=(function(){return!1}),j.e=(function(e){if(H().t(e,this.cL))return this.eu;throw new sy(`key not found: `+e)}),j.ce=(function(e){return H().t(e,this.cL)}),j.dk=(function(e,t){return H().t(e,this.cL)?this.eu:t.ac()}),j.m=(function(){return new Dy(new yy(this.cL,this.eu))}),j.eH=(function(e,t){return H().t(e,this.cL)?new QE(this.cL,t):new eD(this.cL,this.eu,e,t)}),j.f8=(function(e){return!!e.e(new yy(this.cL,this.eu))}),j.z=(function(){var e=0,t=0,n=1,r=G().cG(this.cL,this.eu);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e6,r=G().h(r,e),r=G().h(r,t),r=G().dn(r,n),G().H(r,1)}),j.ej=(function(e,t){return this.eH(e,t)}),new P().i(QE,`scala.collection.immutable.Map$Map1`,{c2:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function eD(e,t,n,r){this.cq=null,this.dL=null,this.cr=null,this.dM=null,this.cq=e,this.dL=t,this.cr=n,this.dM=r}j=eD.prototype=new HE,j.constructor=eD;function tD(){}tD.prototype=j,j.aX=(function(){return 2}),j.E=(function(){return 2}),j.f=(function(){return!1}),j.e=(function(e){if(H().t(e,this.cq))return this.dL;if(H().t(e,this.cr))return this.dM;throw new sy(`key not found: `+e)}),j.ce=(function(e){return H().t(e,this.cq)||H().t(e,this.cr)}),j.dk=(function(e,t){return H().t(e,this.cq)?this.dL:H().t(e,this.cr)?this.dM:t.ac()}),j.m=(function(){return new tC(this)}),j.eH=(function(e,t){return H().t(e,this.cq)?new eD(this.cq,t,this.cr,this.dM):H().t(e,this.cr)?new eD(this.cq,this.dL,this.cr,t):new nD(this.cq,this.dL,this.cr,this.dM,e,t)}),j.f8=(function(e){return!!e.e(new yy(this.cq,this.dL))&&!!e.e(new yy(this.cr,this.dM))}),j.z=(function(){var e=0,t=0,n=1,r=G().cG(this.cq,this.dL);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.cr,this.dM),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e6,r=G().h(r,e),r=G().h(r,t),r=G().dn(r,n),G().H(r,2)}),j.ej=(function(e,t){return this.eH(e,t)}),new P().i(eD,`scala.collection.immutable.Map$Map2`,{c3:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function nD(e,t,n,r,i,a){this.c5=null,this.d3=null,this.c6=null,this.d4=null,this.c7=null,this.d5=null,this.c5=e,this.d3=t,this.c6=n,this.d4=r,this.c7=i,this.d5=a}j=nD.prototype=new HE,j.constructor=nD;function rD(){}rD.prototype=j,j.aX=(function(){return 3}),j.E=(function(){return 3}),j.f=(function(){return!1}),j.e=(function(e){if(H().t(e,this.c5))return this.d3;if(H().t(e,this.c6))return this.d4;if(H().t(e,this.c7))return this.d5;throw new sy(`key not found: `+e)}),j.ce=(function(e){return H().t(e,this.c5)||H().t(e,this.c6)||H().t(e,this.c7)}),j.dk=(function(e,t){return H().t(e,this.c5)?this.d3:H().t(e,this.c6)?this.d4:H().t(e,this.c7)?this.d5:t.ac()}),j.m=(function(){return new rC(this)}),j.eH=(function(e,t){return H().t(e,this.c5)?new nD(this.c5,t,this.c6,this.d4,this.c7,this.d5):H().t(e,this.c6)?new nD(this.c5,this.d3,this.c6,t,this.c7,this.d5):H().t(e,this.c7)?new nD(this.c5,this.d3,this.c6,this.d4,this.c7,t):new iD(this.c5,this.d3,this.c6,this.d4,this.c7,this.d5,e,t)}),j.f8=(function(e){return!!e.e(new yy(this.c5,this.d3))&&!!e.e(new yy(this.c6,this.d4))&&!!e.e(new yy(this.c7,this.d5))}),j.z=(function(){var e=0,t=0,n=1,r=G().cG(this.c5,this.d3);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.c6,this.d4),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.c7,this.d5),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e6,r=G().h(r,e),r=G().h(r,t),r=G().dn(r,n),G().H(r,3)}),j.ej=(function(e,t){return this.eH(e,t)}),new P().i(nD,`scala.collection.immutable.Map$Map3`,{c4:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function iD(e,t,n,r,i,a,o,s){this.bD=null,this.cs=null,this.bE=null,this.ct=null,this.bF=null,this.cu=null,this.bG=null,this.cv=null,this.bD=e,this.cs=t,this.bE=n,this.ct=r,this.bF=i,this.cu=a,this.bG=o,this.cv=s}j=iD.prototype=new HE,j.constructor=iD;function aD(){}aD.prototype=j,j.aX=(function(){return 4}),j.E=(function(){return 4}),j.f=(function(){return!1}),j.e=(function(e){if(H().t(e,this.bD))return this.cs;if(H().t(e,this.bE))return this.ct;if(H().t(e,this.bF))return this.cu;if(H().t(e,this.bG))return this.cv;throw new sy(`key not found: `+e)}),j.ce=(function(e){return H().t(e,this.bD)||H().t(e,this.bE)||H().t(e,this.bF)||H().t(e,this.bG)}),j.dk=(function(e,t){return H().t(e,this.bD)?this.cs:H().t(e,this.bE)?this.ct:H().t(e,this.bF)?this.cu:H().t(e,this.bG)?this.cv:t.ac()}),j.m=(function(){return new aC(this)}),j.eH=(function(e,t){return H().t(e,this.bD)?new iD(this.bD,t,this.bE,this.ct,this.bF,this.cu,this.bG,this.cv):H().t(e,this.bE)?new iD(this.bD,this.cs,this.bE,t,this.bF,this.cu,this.bG,this.cv):H().t(e,this.bF)?new iD(this.bD,this.cs,this.bE,this.ct,this.bF,t,this.bG,this.cv):H().t(e,this.bG)?new iD(this.bD,this.cs,this.bE,this.ct,this.bF,this.cu,this.bG,t):ug().ik.fh(this.bD,this.cs).fh(this.bE,this.ct).fh(this.bF,this.cu).fh(this.bG,this.cv).fh(e,t)}),j.f8=(function(e){return!!e.e(new yy(this.bD,this.cs))&&!!e.e(new yy(this.bE,this.ct))&&!!e.e(new yy(this.bF,this.cu))&&!!e.e(new yy(this.bG,this.cv))}),j.r0=(function(e){return e.eB(this.bD,this.cs).eB(this.bE,this.ct).eB(this.bF,this.cu).eB(this.bG,this.cv)}),j.z=(function(){var e=0,t=0,n=1,r=G().cG(this.bD,this.cs);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.bE,this.ct),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.bF,this.cu),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cG(this.bG,this.cv),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e6,r=G().h(r,e),r=G().h(r,t),r=G().dn(r,n),G().H(r,4)}),j.ej=(function(e,t){return this.eH(e,t)}),new P().i(iD,`scala.collection.immutable.Map$Map4`,{c5:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function oD(){}j=oD.prototype=new mE,j.constructor=oD;function sD(){}sD.prototype=j,j.bd=(function(){return this});function cD(e){if(!e.il){if(e.gF)throw v_(new y_,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.gF=!0;try{var t=e.im.ac()}finally{e.gF=!1}e.bV=!0,e.im=null,e.io=t,e.il=!0}return e.io}function lD(e,t){return Z_(),new dD(new Eg((()=>e.f()?gg():(Z_(),new dg(t.e(e.I().A()),lD(e.I().aR(),t))))))}function uD(e,t,n,r,i){if(t.o=``+t.o+n,!e.bV)t.o+=`<not computed>`;else if(!e.f()){var a=e.I().A();t.o=``+t.o+a;var o=null;o=e;var s=e.I().aR(),c=null;if(c=s,o!==c&&(!c.bV||o.I()!==c.I())&&(o=c,c.bV&&!c.f()))for(c=c.I().aR();o!==c&&c.bV&&!c.f()&&o.I()!==c.I();){t.o=``+t.o+r;var l=o.I().A();t.o=``+t.o+l,o=o.I().aR(),c=c.I().aR(),c.bV&&!c.f()&&(c=c.I().aR())}if(c.bV&&!c.f()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.I()===p.I()))u=u.I().aR(),c=c.I().aR(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.I()===h.I())&&d>0){t.o=``+t.o+r;var g=o.I().A();t.o=``+t.o+g,o=o.I().aR()}for(;;){var _=o,v=c;if(_===v||_.I()===v.I())break;t.o=``+t.o+r;var y=o.I().A();t.o=``+t.o+y,o=o.I().aR()}t.o=``+t.o+r,t.o+=`<cycle>`}else{for(;o!==c;){t.o=``+t.o+r;var b=o.I().A();t.o=``+t.o+b,o=o.I().aR()}o.bV||(t.o=``+t.o+r,t.o+=`<not computed>`)}}return t.o=``+t.o+i,t}function dD(e){this.io=null,this.im=null,this.bV=!1,this.gF=!1,this.il=!1,this.im=e,this.bV=!1,this.gF=!1}j=dD.prototype=new RE,j.constructor=dD;function fD(){}fD.prototype=j,j.by=(function(){return`LinearSeq`}),j.u=(function(){return Vy(this)}),j.bo=(function(e){return Hy(this,e)}),j.jb=(function(e){return Uy(this,e)}),j.y=(function(e){return Wy(this,e)}),j.fe=(function(e){return Gy(this,e)}),j.I=(function(){return this.il?this.io:cD(this)}),j.f=(function(){return this.I()===gg()}),j.E=(function(){return this.bV&&this.I()===gg()?0:-1}),j.A=(function(){return this.I().A()}),j.p7=(function(){var e=this,t=this;for(e.f()||(e=e.I().aR());t!==e;){if(e.f()||(e=e.I().aR(),e.f())||(e=e.I().aR(),e===t))return this;t=t.I().aR()}return this}),j.m=(function(){return this.bV&&this.I()===gg()?Y().N:new Tb(this)}),j.bJ=(function(e){for(var t=this;;){if(!t.f()){e.e(t.I().A()),t=t.I().aR();continue}break}}),j.cd=(function(){return`LazyList`}),j.sk=(function(e){return this.bV&&this.I()===gg()?Z_().gG:(Z_(),new dD(new Eg((()=>this.f()?gg():(Z_(),new dg(e.e(this.I().A()),lD(this.I().aR(),e)))))))}),j.rl=(function(e){return e<=0?this:this.bV&&this.I()===gg()?Z_().gG:Z_().t0(this,e)}),j.e7=(function(e,t,n,r){return this.p7(),uD(this,e.b6,t,n,r),e}),j.F=(function(){return uD(this,x_(new C_,`LazyList`),`(`,`, `,`)`).o}),j.e=(function(e){return Wy(this,e|0)}),j.cB=(function(e){return Uy(this,e|0)}),j.oW=(function(e){return this.rl(e)}),j.cC=(function(e){return this.sk(e)}),j.w=(function(){return this.I().aR()}),j.bw=(function(){return Z_()}),new P().i(dD,`scala.collection.immutable.LazyList`,{c0:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,a:1});function pD(e){this.gM=null,this.gM=e}j=pD.prototype=new M,j.constructor=pD;function mD(){}mD.prototype=j,j.cP=(function(e){return Ow(this,e)}),j.cC=(function(e){return U_(this,e)}),j.gX=(function(e){return UE(this,e)}),j.fe=(function(e){return WE(this,e)}),j.gV=(function(){return Hu().nQ}),j.m=(function(){return IS(new LS,new FE(this))}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.r=(function(e){return tE(this,e)}),j.z=(function(){return G().pK(this)}),j.F=(function(){return Cy(this)}),j.f=(function(){return V_(this)}),j.dh=(function(e,t){return Ip(this,e,t)}),j.gc=(function(){return Hx().b9()}),j.bJ=(function(e){xu(this,e)}),j.bZ=(function(e,t,n){return wu(this,e,t,n)}),j.e7=(function(e,t,n,r){return Eu(this,e,t,n,r)}),j.ef=(function(){return Hx()}),j.u=(function(){return this.gM.length|0}),j.y=(function(e){return this.gM[e]}),j.cd=(function(){return`WrappedVarArgs`}),j.g4=(function(e){return Hx().j2(e)}),j.cB=(function(e){return B_(this,e|0)}),j.e=(function(e){return this.y(e|0)}),j.bw=(function(){return Hx()}),new P().i(pD,`scala.scalajs.runtime.WrappedVarArgs`,{cq:1,y:1,v:1,t:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,w:1,q:1,r:1,C:1,z:1,s:1,k:1,a:1});function hD(e){this.br=null,this.br=e}j=hD.prototype=new HE,j.constructor=hD;function gD(){}gD.prototype=j,j.pl=(function(){return ug()}),j.E=(function(){return this.br.aZ}),j.aX=(function(){return this.br.aZ}),j.f=(function(){return this.br.aZ===0}),j.m=(function(){return this.f()?Y().N:new lC(this.br)}),j.ce=(function(e){var t=W().V(e),n=bu().cA(t);return this.br.iR(e,t,n,0)}),j.e=(function(e){var t=W().V(e),n=bu().cA(t);return this.br.iK(e,t,n,0)}),j.dk=(function(e,t){var n=W().V(e),r=bu().cA(n);return this.br.j4(e,n,r,0,t)}),j.fh=(function(e,t){var n=W().V(e),r=this.br.pU(e,t,n,bu().cA(n),0,!0);return r===this.br?this:new hD(r)}),j.eD=(function(e){this.br.eD(e)}),j.r=(function(e){if(e instanceof hD){if(this===e)return!0;var t=this.br,n=e.br;return t===null?n===null:t.r(n)}else return hE(this,e)}),j.z=(function(){if(this.f())return G().iE;var e=new sC(this.br);return G().jC(e,G().e6)}),j.cd=(function(){return`HashMap`}),j.ej=(function(e,t){return this.fh(e,t)}),new P().i(hD,`scala.collection.immutable.HashMap`,{bZ:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,gD:1,fW:1,k:1,V:1,a:1});function _D(){}j=_D.prototype=new qE,j.constructor=_D;function vD(){}vD.prototype=j,j.bc=(function(e){return zp(this,e)});function yD(e,t,n){var r=n&(-1+e.b4.a.length|0),i=e.b4.a[r];if(i===null)e.b4.a[r]=new od(t,n,null);else{for(var a=null,o=i;o!==null&&o.db<=n;){if(o.db===n&&H().t(t,o.f2))return!1;a=o,o=o.b5}a===null?e.b4.a[r]=new od(t,n,i):a.b5=new od(t,n,a.b5)}return e.e3=1+e.e3|0,!0}function bD(e,t){var n=e.b4.a.length;if(e.iA=SD(e,t),e.e3===0)e.b4=new(cd.r()).C(t);else{e.b4=R().a2(e.b4,t);for(var r=new od(null,0,null),i=new od(null,0,null);n<t;){for(var a=0;a<n;){var o=e.b4.a[a];if(o!==null){r.b5=null,i.b5=null;for(var s=r,c=i,l=o;l!==null;){var u=l.b5;(l.db&n)===0?(s.b5=l,s=l):(c.b5=l,c=l),l=u}s.b5=null,o!==r.b5&&(e.b4.a[a]=r.b5),i.b5!==null&&(e.b4.a[a+n|0]=i.b5,c.b5=null)}a=1+a|0}n<<=1}}}function xD(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function SD(e,t){return fa(t*e.iz)}function CD(e,t,n){return e.iz=n,e.b4=new(cd.r()).C(xD(e,t)),e.iA=SD(e,e.b4.a.length),e.e3=0,e}function wD(e){return CD(e,16,.75),e}function TD(){this.iz=0,this.b4=null,this.iA=0,this.e3=0}j=TD.prototype=new sD,j.constructor=TD;function ED(){}ED.prototype=j,j.aX=(function(){return this.e3}),j.ha=(function(e){return e^(e>>>16|0)}),j.ce=(function(e){var t=this.ha(W().V(e)),n=this.b4.a[t&(-1+this.b4.a.length|0)];return(n===null?null:n.rG(e,t))!==null}),j.be=(function(e){var t=xD(this,fa((1+e|0)/this.iz));t>this.b4.a.length&&bD(this,t)}),j.gS=(function(e){return(1+this.e3|0)>=this.iA&&bD(this,this.b4.a.length<<1),yD(this,e,this.ha(W().V(e)))}),j.oq=(function(e){if(xg(this,e,0),e instanceof TD){for(var t=new EC(e);t.n();){var n=t.j();yD(this,n.f2,n.db)}return this}else return zp(this,e)}),j.m=(function(){return new wC(this)}),j.bw=(function(){return Tg()}),j.E=(function(){return this.e3}),j.f=(function(){return this.e3===0}),j.cd=(function(){return`HashSet`}),j.z=(function(){var e=new wC(this),t=e.n()?new OC(this):e;return G().jC(t,G().ok)}),j.b7=(function(e){return this.gS(e),this}),j.bc=(function(e){return this.oq(e)}),new P().i(TD,`scala.collection.mutable.HashSet`,{ci:1,gR:1,fu:1,i:1,f:1,b:1,h:1,c:1,g:1,aO:1,fU:1,e:1,d:1,hf:1,J:1,hg:1,H:1,B:1,M:1,I:1,G:1,aw:1,k:1,a:1});function DD(){}j=DD.prototype=new RE,j.constructor=DD;function OD(){}OD.prototype=j,j.g5=(function(e){return ZS().iZ(e,this.an())}),j.gc=(function(){return ZS().h5(this.an())}),j.cP=(function(e){return Ow(this,e)}),j.gX=(function(e){return UE(this,e)}),j.fe=(function(e){return WE(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.ef=(function(){return ZS().ii}),j.sj=(function(e){for(var t=new N(this.u()),n=0;n<t.a.length;)t.a[n]=e.e(this.y(n)),n=1+n|0;return ZS().jD(t)}),j.cd=(function(){return`ArraySeq`}),j.bZ=(function(e,t,n){var r=this.u(),i=Ul().cg(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Dp().g0(this.cS(),0,e,t,c),c}),j.gV=(function(){return 2147483647}),j.g4=(function(e){return ZS().iZ(e,this.an())}),j.cC=(function(e){return this.sj(e)}),j.bw=(function(){return ZS().ii});function kD(e,t){return e.g=t,e}function AD(){this.g=null}j=AD.prototype=new RE,j.constructor=AD;function jD(){}jD.prototype=j,j.cP=(function(e){return Ow(this,e)}),j.gX=(function(e){return UE(this,e)}),j.fe=(function(e){return WE(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.ef=(function(){return Kb()}),j.u=(function(){return this instanceof DO?this.l:this.g.a.length}),j.m=(function(){return zO()===this?Kb().nY:new hC(this,this.u(),this.cU())}),j.cd=(function(){return`Vector`}),j.bZ=(function(e,t,n){return this.m().bZ(e,t,n)}),j.gV=(function(){return Kb().nX}),j.aP=(function(e){return Lu().g8(e,-1+this.u()|0)}),j.bJ=(function(e){for(var t=this.cU(),n=0;n<t;){var r=V(),i=n,a=t/2|0,o=i-a|0;r.iX(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cT(n),e),n=1+n|0}}),j.bw=(function(){return Kb()});function MD(){}j=MD.prototype=new qE,j.constructor=MD;function ND(){}ND.prototype=j,j.cP=(function(e){return WS(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.ef=(function(){return CC().iy}),j.pd=(function(e){var t=this.an(),n=null,r=t.aW(),i=r===Ra.l();n=[],e.E();for(var a=e.m();a.n();){var o=a.j(),s=i?Ca(o):o===null?r.W.z:o;n.push(s)}var c=CC(),l=r===Ia.l()?Rl.l():r===gd.l()||r===Ng.l()?F.l():r;return c.jg(l.W.r().w(n))}),j.gc=(function(){return CC().h5(this.an())}),j.cd=(function(){return`ArraySeq`}),j.bZ=(function(e,t,n){var r=this.u(),i=Ul().cg(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Dp().g0(this.cb(),0,e,t,c),c}),j.r=(function(e){return e instanceof MD&&Ul().cg(this.cb())!==Ul().cg(e.cb())?!1:tE(this,e)}),j.g4=(function(e){return this.pd(e)}),j.g5=(function(e){return this.pd(e)}),j.bw=(function(){return CC().iy});function PD(e){this.dC=null,this.dC=e}j=PD.prototype=new OD,j.constructor=PD;function FD(){}FD.prototype=j,j.u=(function(){return this.dC.a.length}),j.z=(function(){var e=G();return e.oJ(this.dC,e.ar)}),j.r=(function(e){return e instanceof PD?R().p4(this.dC,e.dC):tE(this,e)}),j.m=(function(){return new nw(this.dC)}),j.fY=(function(e){return this.dC.a[e]}),j.e=(function(e){return this.fY(e|0)}),j.y=(function(e){return this.fY(e)}),j.an=(function(){return cT()}),j.cS=(function(){return this.dC}),new P().i(PD,`scala.collection.immutable.ArraySeq$ofBoolean`,{bM:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function ID(e){this.dD=null,this.dD=e}j=ID.prototype=new OD,j.constructor=ID;function LD(){}LD.prototype=j,j.u=(function(){return this.dD.a.length}),j.fQ=(function(e){return this.dD.a[e]}),j.z=(function(){var e=G();return e.oB(this.dD,e.ar)}),j.r=(function(e){return e instanceof ID?R().oY(this.dD,e.dD):tE(this,e)}),j.m=(function(){return new BC(this.dD)}),j.e=(function(e){return this.fQ(e|0)}),j.y=(function(e){return this.fQ(e)}),j.an=(function(){return fT()}),j.cS=(function(){return this.dD}),new P().i(ID,`scala.collection.immutable.ArraySeq$ofByte`,{bN:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function RD(e){this.d1=null,this.d1=e}j=RD.prototype=new OD,j.constructor=RD;function zD(){}zD.prototype=j,j.u=(function(){return this.d1.a.length}),j.fR=(function(e){return this.d1.a[e]}),j.z=(function(){var e=G();return e.oC(this.d1,e.ar)}),j.r=(function(e){return e instanceof RD?R().oZ(this.d1,e.d1):tE(this,e)}),j.m=(function(){return new HC(this.d1)}),j.e7=(function(e,t,n,r){return new uO(this.d1).e7(e,t,n,r)}),j.e=(function(e){return Sa(this.fR(e|0))}),j.y=(function(e){return Sa(this.fR(e))}),j.an=(function(){return gT()}),j.cS=(function(){return this.d1}),new P().i(RD,`scala.collection.immutable.ArraySeq$ofChar`,{bO:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function BD(e){this.dE=null,this.dE=e}j=BD.prototype=new OD,j.constructor=BD;function VD(){}VD.prototype=j,j.u=(function(){return this.dE.a.length}),j.z=(function(){var e=G();return e.oD(this.dE,e.ar)}),j.r=(function(e){return e instanceof BD?R().p0(this.dE,e.dE):tE(this,e)}),j.m=(function(){return new WC(this.dE)}),j.fT=(function(e){return this.dE.a[e]}),j.e=(function(e){return this.fT(e|0)}),j.y=(function(e){return this.fT(e)}),j.an=(function(){return bT()}),j.cS=(function(){return this.dE}),new P().i(BD,`scala.collection.immutable.ArraySeq$ofDouble`,{bP:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function HD(e){this.dF=null,this.dF=e}j=HD.prototype=new OD,j.constructor=HD;function UD(){}UD.prototype=j,j.u=(function(){return this.dF.a.length}),j.z=(function(){var e=G();return e.oE(this.dF,e.ar)}),j.r=(function(e){return e instanceof HD?R().p1(this.dF,e.dF):tE(this,e)}),j.m=(function(){return new KC(this.dF)}),j.fU=(function(e){return this.dF.a[e]}),j.e=(function(e){return this.fU(e|0)}),j.y=(function(e){return this.fU(e)}),j.an=(function(){return wT()}),j.cS=(function(){return this.dF}),new P().i(HD,`scala.collection.immutable.ArraySeq$ofFloat`,{bQ:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function WD(e){this.dG=null,this.dG=e}j=WD.prototype=new OD,j.constructor=WD;function GD(){}GD.prototype=j,j.u=(function(){return this.dG.a.length}),j.z=(function(){var e=G();return e.oF(this.dG,e.ar)}),j.r=(function(e){return e instanceof WD?R().iU(this.dG,e.dG):tE(this,e)}),j.m=(function(){return new JC(this.dG)}),j.fV=(function(e){return this.dG.a[e]}),j.e=(function(e){return this.fV(e|0)}),j.y=(function(e){return this.fV(e)}),j.an=(function(){return OT()}),j.cS=(function(){return this.dG}),new P().i(WD,`scala.collection.immutable.ArraySeq$ofInt`,{bR:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function KD(e){this.dH=null,this.dH=e}j=KD.prototype=new OD,j.constructor=KD;function qD(){}qD.prototype=j,j.u=(function(){return this.dH.a.length}),j.z=(function(){var e=G();return e.oG(this.dH,e.ar)}),j.r=(function(e){return e instanceof KD?R().p2(this.dH,e.dH):tE(this,e)}),j.m=(function(){return new XC(this.dH)}),j.fW=(function(e){return this.dH.a[e]}),j.e=(function(e){return this.fW(e|0)}),j.y=(function(e){return this.fW(e)}),j.an=(function(){return MT()}),j.cS=(function(){return this.dH}),new P().i(KD,`scala.collection.immutable.ArraySeq$ofLong`,{bS:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function JD(e){this.cJ=null,this.cJ=e}j=JD.prototype=new OD,j.constructor=JD;function YD(){}YD.prototype=j,j.an=(function(){return Up().ox(aa(this.cJ).W.Q())}),j.u=(function(){return this.cJ.a.length}),j.y=(function(e){return this.cJ.a[e]}),j.z=(function(){var e=G();return e.oA(this.cJ,e.ar)}),j.r=(function(e){return e instanceof JD?Dp().p5(this.cJ,e.cJ):tE(this,e)}),j.m=(function(){return MS(new NS,this.cJ)}),j.e=(function(e){return this.y(e|0)}),j.cS=(function(){return this.cJ}),new P().i(JD,`scala.collection.immutable.ArraySeq$ofRef`,{bT:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function XD(e){this.dI=null,this.dI=e}j=XD.prototype=new OD,j.constructor=XD;function ZD(){}ZD.prototype=j,j.u=(function(){return this.dI.a.length}),j.fS=(function(e){return this.dI.a[e]}),j.z=(function(){var e=G();return e.oH(this.dI,e.ar)}),j.r=(function(e){return e instanceof XD?R().p3(this.dI,e.dI):tE(this,e)}),j.m=(function(){return new QC(this.dI)}),j.e=(function(e){return this.fS(e|0)}),j.y=(function(e){return this.fS(e)}),j.an=(function(){return JT()}),j.cS=(function(){return this.dI}),new P().i(XD,`scala.collection.immutable.ArraySeq$ofShort`,{bU:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function QD(e){this.es=null,this.es=e}j=QD.prototype=new OD,j.constructor=QD;function $D(){}$D.prototype=j,j.u=(function(){return this.es.a.length}),j.z=(function(){var e=G();return e.oI(this.es,e.ar)}),j.r=(function(e){return e instanceof QD?this.es.a.length===e.es.a.length:tE(this,e)}),j.m=(function(){return new ew(this.es)}),j.fX=(function(e){}),j.e=(function(e){this.fX(e|0)}),j.y=(function(e){this.fX(e)}),j.an=(function(){return QT()}),j.cS=(function(){return this.es}),new P().i(QD,`scala.collection.immutable.ArraySeq$ofUnit`,{bV:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function eO(e,t,n,r){for(;;)if(t===r)return n.f()?0:1;else if(n.f())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function tO(e,t,n){for(;;)if(t===n)return!0;else{var r=t.f(),i=n.f();if(!(r||i)&&H().t(t.A(),n.A())){var a=t.w(),o=n.w();t=a,n=o}else return r&&i}}function nO(){}j=nO.prototype=new RE,j.constructor=nO;function rO(){}rO.prototype=j,j.cP=(function(e){return Ow(this,e)}),j.m=(function(){return new Jy(this)}),j.by=(function(){return`LinearSeq`}),j.jb=(function(e){return Uy(this,e)}),j.y=(function(e){return Wy(this,e)}),j.fe=(function(e){return Gy(this,e)}),j.ef=(function(){return Ab()}),j.ol=(function(e){if(this.f())return e;if(e.f())return this;for(var t=new jO(e.A(),this),n=t,r=e.w();!r.f();){var i=new jO(r.A(),this);n.aC=i,n=i,r=r.w()}return t}),j.f=(function(){return this===$()}),j.jt=(function(e){if(e instanceof nO)return this.ol(e);if(e.E()===0)return this;if(e instanceof nk&&this.f())return e.pQ();var t=e.m();if(t.n()){for(var n=new jO(t.j(),this),r=n;t.n();){var i=new jO(t.j(),this);r.aC=i,r=i}return n}else return this}),j.ov=(function(e){return e instanceof nO?e.ol(this):GS(this,e)}),j.sl=(function(e){if(this===$())return $();for(var t=new jO(e.e(this.A()),$()),n=t,r=this.w();r!==$();){var i=new jO(e.e(r.A()),$());n.aC=i,n=i,r=r.w()}return t}),j.bJ=(function(e){for(var t=this;!t.f();)e.e(t.A()),t=t.w()}),j.u=(function(){for(var e=this,t=0;!e.f();)t=1+t|0,e=e.w();return t}),j.bo=(function(e){return e<0?1:eO(this,0,this,e)}),j.ce=(function(e){for(var t=this;!t.f();){if(H().t(t.A(),e))return!0;t=t.w()}return!1}),j.cd=(function(){return`List`}),j.r=(function(e){return e instanceof nO?tO(this,this,e):tE(this,e)}),j.e=(function(e){return Wy(this,e|0)}),j.cB=(function(e){return Uy(this,e|0)}),j.oW=(function(e){return Dw(this,e,this)}),j.cC=(function(e){return this.sl(e)}),j.bw=(function(){return Ab()});function iO(){this.g=null}j=iO.prototype=new jD,j.constructor=iO;function aO(){}aO.prototype=j;function oO(e){this.dV=null,this.dV=e}j=oO.prototype=new ND,j.constructor=oO;function sO(){}sO.prototype=j,j.u=(function(){return this.dV.a.length}),j.z=(function(){var e=G();return e.oJ(this.dV,e.ar)}),j.r=(function(e){return e instanceof oO?R().p4(this.dV,e.dV):MD.prototype.r.call(this,e)}),j.m=(function(){return new nw(this.dV)}),j.fY=(function(e){return this.dV.a[e]}),j.e=(function(e){return this.fY(e|0)}),j.y=(function(e){return this.fY(e)}),j.an=(function(){return cT()}),j.cb=(function(){return this.dV}),new P().i(oO,`scala.collection.mutable.ArraySeq$ofBoolean`,{c8:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function cO(e){this.dW=null,this.dW=e}j=cO.prototype=new ND,j.constructor=cO;function lO(){}lO.prototype=j,j.u=(function(){return this.dW.a.length}),j.fQ=(function(e){return this.dW.a[e]}),j.z=(function(){var e=G();return e.oB(this.dW,e.ar)}),j.r=(function(e){return e instanceof cO?R().oY(this.dW,e.dW):MD.prototype.r.call(this,e)}),j.m=(function(){return new BC(this.dW)}),j.e=(function(e){return this.fQ(e|0)}),j.y=(function(e){return this.fQ(e)}),j.an=(function(){return fT()}),j.cb=(function(){return this.dW}),new P().i(cO,`scala.collection.mutable.ArraySeq$ofByte`,{c9:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function uO(e){this.bW=null,this.bW=e}j=uO.prototype=new ND,j.constructor=uO;function dO(){}dO.prototype=j,j.u=(function(){return this.bW.a.length}),j.fR=(function(e){return this.bW.a[e]}),j.z=(function(){var e=G();return e.oC(this.bW,e.ar)}),j.r=(function(e){return e instanceof uO?R().oZ(this.bW,e.bW):MD.prototype.r.call(this,e)}),j.m=(function(){return new HC(this.bW)}),j.e7=(function(e,t,n,r){var i=e.b6;t.length!==0&&(i.o=``+i.o+t);var a=this.bW.a.length;if(a!==0)if(n===``)i.ot(this.bW);else{i.u();var o=this.bW.a[0],s=``+pa(o);i.o+=s;for(var c=1;c<a;){i.o=``+i.o+n;var l=this.bW.a[c],u=``+pa(l);i.o+=u,c=1+c|0}}return r.length!==0&&(i.o=``+i.o+r),e}),j.e=(function(e){return Sa(this.fR(e|0))}),j.y=(function(e){return Sa(this.fR(e))}),j.an=(function(){return gT()}),j.cb=(function(){return this.bW}),new P().i(uO,`scala.collection.mutable.ArraySeq$ofChar`,{ca:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function fO(e){this.dX=null,this.dX=e}j=fO.prototype=new ND,j.constructor=fO;function pO(){}pO.prototype=j,j.u=(function(){return this.dX.a.length}),j.z=(function(){var e=G();return e.oD(this.dX,e.ar)}),j.r=(function(e){return e instanceof fO?R().p0(this.dX,e.dX):MD.prototype.r.call(this,e)}),j.m=(function(){return new WC(this.dX)}),j.fT=(function(e){return this.dX.a[e]}),j.e=(function(e){return this.fT(e|0)}),j.y=(function(e){return this.fT(e)}),j.an=(function(){return bT()}),j.cb=(function(){return this.dX}),new P().i(fO,`scala.collection.mutable.ArraySeq$ofDouble`,{cb:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function mO(e){this.dY=null,this.dY=e}j=mO.prototype=new ND,j.constructor=mO;function hO(){}hO.prototype=j,j.u=(function(){return this.dY.a.length}),j.z=(function(){var e=G();return e.oE(this.dY,e.ar)}),j.r=(function(e){return e instanceof mO?R().p1(this.dY,e.dY):MD.prototype.r.call(this,e)}),j.m=(function(){return new KC(this.dY)}),j.fU=(function(e){return this.dY.a[e]}),j.e=(function(e){return this.fU(e|0)}),j.y=(function(e){return this.fU(e)}),j.an=(function(){return wT()}),j.cb=(function(){return this.dY}),new P().i(mO,`scala.collection.mutable.ArraySeq$ofFloat`,{cc:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function gO(e){this.dZ=null,this.dZ=e}j=gO.prototype=new ND,j.constructor=gO;function _O(){}_O.prototype=j,j.u=(function(){return this.dZ.a.length}),j.z=(function(){var e=G();return e.oF(this.dZ,e.ar)}),j.r=(function(e){return e instanceof gO?R().iU(this.dZ,e.dZ):MD.prototype.r.call(this,e)}),j.m=(function(){return new JC(this.dZ)}),j.fV=(function(e){return this.dZ.a[e]}),j.e=(function(e){return this.fV(e|0)}),j.y=(function(e){return this.fV(e)}),j.an=(function(){return OT()}),j.cb=(function(){return this.dZ}),new P().i(gO,`scala.collection.mutable.ArraySeq$ofInt`,{cd:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function vO(e){this.e0=null,this.e0=e}j=vO.prototype=new ND,j.constructor=vO;function yO(){}yO.prototype=j,j.u=(function(){return this.e0.a.length}),j.z=(function(){var e=G();return e.oG(this.e0,e.ar)}),j.r=(function(e){return e instanceof vO?R().p2(this.e0,e.e0):MD.prototype.r.call(this,e)}),j.m=(function(){return new XC(this.e0)}),j.fW=(function(e){return this.e0.a[e]}),j.e=(function(e){return this.fW(e|0)}),j.y=(function(e){return this.fW(e)}),j.an=(function(){return MT()}),j.cb=(function(){return this.e0}),new P().i(vO,`scala.collection.mutable.ArraySeq$ofLong`,{ce:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function bO(e){this.d9=null,this.d9=e}j=bO.prototype=new ND,j.constructor=bO;function xO(){}xO.prototype=j,j.an=(function(){return Up().ox(aa(this.d9).W.Q())}),j.u=(function(){return this.d9.a.length}),j.y=(function(e){return this.d9.a[e]}),j.z=(function(){var e=G();return e.oA(this.d9,e.ar)}),j.r=(function(e){return e instanceof bO?Dp().p5(this.d9,e.d9):MD.prototype.r.call(this,e)}),j.m=(function(){return MS(new NS,this.d9)}),j.e=(function(e){return this.y(e|0)}),j.cb=(function(){return this.d9}),new P().i(bO,`scala.collection.mutable.ArraySeq$ofRef`,{cf:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function SO(e){this.e1=null,this.e1=e}j=SO.prototype=new ND,j.constructor=SO;function CO(){}CO.prototype=j,j.u=(function(){return this.e1.a.length}),j.fS=(function(e){return this.e1.a[e]}),j.z=(function(){var e=G();return e.oH(this.e1,e.ar)}),j.r=(function(e){return e instanceof SO?R().p3(this.e1,e.e1):MD.prototype.r.call(this,e)}),j.m=(function(){return new QC(this.e1)}),j.e=(function(e){return this.fS(e|0)}),j.y=(function(e){return this.fS(e)}),j.an=(function(){return JT()}),j.cb=(function(){return this.e1}),new P().i(SO,`scala.collection.mutable.ArraySeq$ofShort`,{cg:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function wO(e){this.ey=null,this.ey=e}j=wO.prototype=new ND,j.constructor=wO;function TO(){}TO.prototype=j,j.u=(function(){return this.ey.a.length}),j.z=(function(){var e=G();return e.oI(this.ey,e.ar)}),j.r=(function(e){return e instanceof wO?this.ey.a.length===e.ey.a.length:MD.prototype.r.call(this,e)}),j.m=(function(){return new ew(this.ey)}),j.fX=(function(e){}),j.e=(function(e){this.fX(e|0)}),j.y=(function(e){this.fX(e)}),j.an=(function(){return QT()}),j.cb=(function(){return this.ey}),new P().i(wO,`scala.collection.mutable.ArraySeq$ofUnit`,{ch:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function EO(e,t,n,r){return e.k=n,e.l=r,kD(e,t),e}function DO(){this.g=null,this.k=null,this.l=0}j=DO.prototype=new aO,j.constructor=DO;function OO(){}OO.prototype=j;function kO(e){this.g=null,kD(this,e)}j=kO.prototype=new aO,j.constructor=kO;function AO(){}AO.prototype=j,j.y=(function(e){if(e>=0&&e<this.g.a.length)return this.g.a[e];throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.g.a.length){var n=this.g.i();return n.a[e]=t,new kO(n)}else throw this.aP(e)}),j.e8=(function(e){if(this.g.a.length<32)return new kO(V().f6(this.g,e));var t=this.g,n=V().bu,r=new N(1);return r.a[0]=e,new BO(t,32,n,r,33)}),j.cD=(function(e){return new kO(V().cj(this.g,e))}),j.cU=(function(){return 1}),j.cT=(function(e){return this.g}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.g.a.length)return this.g.a[t];throw this.aP(t)}),new P().i(kO,`scala.collection.immutable.Vector1`,{gH:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function jO(e,t){this.ie=null,this.aC=null,this.ie=e,this.aC=t}j=jO.prototype=new rO,j.constructor=jO;function MO(){}MO.prototype=j,j.A=(function(){return this.ie}),j.bM=(function(){return`::`}),j.bK=(function(){return 2}),j.bL=(function(e){switch(e){case 0:return this.ie;case 1:return this.aC;default:return W().eE(e)}}),j.cl=(function(){return new Nx(this)}),j.w=(function(){return this.aC}),new P().i(jO,`scala.collection.immutable.$colon$colon`,{g3:1,aR:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,bL:1,s:1,k:1,z:1,V:1,a:1,U:1});function NO(){}j=NO.prototype=new rO,j.constructor=NO;function PO(){}PO.prototype=j,j.j8=(function(){throw new sy(`head of empty list`)}),j.th=(function(){throw new ay(`tail of empty list`)}),j.E=(function(){return 0}),j.m=(function(){return Y().N}),j.bM=(function(){return`Nil`}),j.bK=(function(){return 0}),j.bL=(function(e){return W().eE(e)}),j.cl=(function(){return new Nx(this)}),j.w=(function(){this.th()}),j.A=(function(){this.j8()}),new P().i(NO,`scala.collection.immutable.Nil$`,{gx:1,aR:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,bL:1,s:1,k:1,z:1,V:1,a:1,U:1});var FO;function $(){return FO||=new NO,FO}function IO(){this.g=null,this.k=null,this.l=0,EO(this,V().it,V().it,0)}j=IO.prototype=new OO,j.constructor=IO;function LO(){}LO.prototype=j,j.ow=(function(e){throw this.aP(e)}),j.ei=(function(e,t){throw this.aP(e)}),j.e8=(function(e){var t=new N(1);return t.a[0]=e,new kO(t)}),j.cU=(function(){return 0}),j.cT=(function(e){return null}),j.r=(function(e){return this===e||!(e instanceof AD)&&tE(this,e)}),j.aP=(function(e){return Qv(new $v,e+` is out of bounds (empty vector)`)}),j.cC=(function(e){return this}),j.e=(function(e){this.ow(e|0)}),j.y=(function(e){this.ow(e)}),new P().i(IO,`scala.collection.immutable.Vector0$`,{gG:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});var RO;function zO(){return RO||=new IO,RO}function BO(e,t,n,r,i){this.g=null,this.k=null,this.l=0,this.bI=0,this.bm=null,this.bI=t,this.bm=n,EO(this,e,r,i)}j=BO.prototype=new OO,j.constructor=BO;function VO(){}VO.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.bI|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.bm.a.length?this.bm.a[n].a[r]:this.k.a[31&t]}else return this.g.a[e]}else throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.l)if(e>=this.bI){var n=e-this.bI|0,r=n>>>5|0,i=31&n;if(r<this.bm.a.length){var a=this.bm.i(),o=a.a[r].i();return o.a[i]=t,a.a[r]=o,new BO(this.g,this.bI,a,this.k,this.l)}else{var s=this.k.i();return s.a[i]=t,new BO(this.g,this.bI,this.bm,s,this.l)}}else{var c=this.g.i();return c.a[e]=t,new BO(c,this.bI,this.bm,this.k,this.l)}else throw this.aP(e)}),j.e8=(function(e){if(this.k.a.length<32){var t=V().f6(this.k,e),n=1+this.l|0;return new BO(this.g,this.bI,this.bm,t,n)}else if(this.bm.a.length<30){var r=V().K(this.bm,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new BO(this.g,this.bI,r,i,a)}else{var o=this.g,s=this.bI,c=this.bm,l=this.bI,u=V().cN,d=this.k,f=new(F.r().r()).C(1);f.a[0]=d;var p=new N(1);return p.a[0]=e,new HO(o,s,c,960+l|0,u,f,p,1+this.l|0)}}),j.cD=(function(e){var t=V().cj(this.g,e),n=V().aa(2,this.bm,e),r=V().cj(this.k,e);return new BO(t,this.bI,n,r,this.l)}),j.cU=(function(){return 3}),j.cT=(function(e){switch(e){case 0:return this.g;case 1:return this.bm;case 2:return this.k;default:throw new my(e)}}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.bI|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.bm.a.length?this.bm.a[r].a[i]:this.k.a[31&n]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(BO,`scala.collection.immutable.Vector2`,{gI:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function HO(e,t,n,r,i,a,o,s){this.g=null,this.k=null,this.l=0,this.bg=0,this.bt=null,this.bh=0,this.b2=null,this.b3=null,this.bg=t,this.bt=n,this.bh=r,this.b2=i,this.b3=a,EO(this,e,o,s)}j=HO.prototype=new OO,j.constructor=HO;function UO(){}UO.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.bh|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.b2.a.length?this.b2.a[n].a[r].a[i]:r<this.b3.a.length?this.b3.a[r].a[i]:this.k.a[i]}else if(e>=this.bg){var a=e-this.bg|0;return this.bt.a[a>>>5|0].a[31&a]}else return this.g.a[e]}else throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.l)if(e>=this.bh){var n=e-this.bh|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.b2.a.length){var o=this.b2.i(),s=o.a[r].i(),c=s.a[i].i();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new HO(this.g,this.bg,this.bt,this.bh,o,this.b3,this.k,this.l)}else if(i<this.b3.a.length){var l=this.b3.i(),u=l.a[i].i();return u.a[a]=t,l.a[i]=u,new HO(this.g,this.bg,this.bt,this.bh,this.b2,l,this.k,this.l)}else{var d=this.k.i();return d.a[a]=t,new HO(this.g,this.bg,this.bt,this.bh,this.b2,this.b3,d,this.l)}}else if(e>=this.bg){var f=e-this.bg|0,p=this.bt,m=f>>>5|0,h=31&f,g=p.i(),_=g.a[m].i();return _.a[h]=t,g.a[m]=_,new HO(this.g,this.bg,g,this.bh,this.b2,this.b3,this.k,this.l)}else{var v=this.g.i();return v.a[e]=t,new HO(v,this.bg,this.bt,this.bh,this.b2,this.b3,this.k,this.l)}else throw this.aP(e)}),j.e8=(function(e){if(this.k.a.length<32){var t=V().f6(this.k,e),n=1+this.l|0;return new HO(this.g,this.bg,this.bt,this.bh,this.b2,this.b3,t,n)}else if(this.b3.a.length<31){var r=V().K(this.b3,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new HO(this.g,this.bg,this.bt,this.bh,this.b2,r,i,a)}else if(this.b2.a.length<30){var o=V().K(this.b2,V().K(this.b3,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new HO(this.g,this.bg,this.bt,this.bh,o,s,c,l)}else{var u=this.g,d=this.bg,f=this.bt,p=this.bh,m=this.b2,h=this.bh,g=V().f0,_=V().K(this.b3,this.k),v=new(F.r().r().r()).C(1);v.a[0]=_;var y=V().bu,b=new N(1);return b.a[0]=e,new WO(u,d,f,p,m,30720+h|0,g,v,y,b,1+this.l|0)}}),j.cD=(function(e){var t=V().cj(this.g,e),n=V().aa(2,this.bt,e),r=V().aa(3,this.b2,e),i=V().aa(2,this.b3,e),a=V().cj(this.k,e);return new HO(t,this.bg,n,this.bh,r,i,a,this.l)}),j.cU=(function(){return 5}),j.cT=(function(e){switch(e){case 0:return this.g;case 1:return this.bt;case 2:return this.b2;case 3:return this.b3;case 4:return this.k;default:throw new my(e)}}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.bh|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.b2.a.length?this.b2.a[r].a[i].a[a]:i<this.b3.a.length?this.b3.a[i].a[a]:this.k.a[a]}else if(t>=this.bg){var o=t-this.bg|0;return this.bt.a[o>>>5|0].a[31&o]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(HO,`scala.collection.immutable.Vector3`,{gJ:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function WO(e,t,n,r,i,a,o,s,c,l,u){this.g=null,this.k=null,this.l=0,this.aT=0,this.ba=null,this.aU=0,this.bb=null,this.aV=0,this.aE=null,this.aG=null,this.aF=null,this.aT=t,this.ba=n,this.aU=r,this.bb=i,this.aV=a,this.aE=o,this.aG=s,this.aF=c,EO(this,e,l,u)}j=WO.prototype=new OO,j.constructor=WO;function GO(){}GO.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aV|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.aE.a.length?this.aE.a[n].a[r].a[i].a[a]:r<this.aG.a.length?this.aG.a[r].a[i].a[a]:i<this.aF.a.length?this.aF.a[i].a[a]:this.k.a[a]}else if(e>=this.aU){var o=e-this.aU|0;return this.bb.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aT){var s=e-this.aT|0;return this.ba.a[s>>>5|0].a[31&s]}else return this.g.a[e]}else throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aV){var n=e-this.aV|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.aE.a.length){var s=this.aE.i(),c=s.a[r].i(),l=c.a[i].i(),u=l.a[a].i();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,s,this.aG,this.aF,this.k,this.l)}else if(i<this.aG.a.length){var d=this.aG.i(),f=d.a[i].i(),p=f.a[a].i();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,d,this.aF,this.k,this.l)}else if(a<this.aF.a.length){var m=this.aF.i(),h=m.a[a].i();return h.a[o]=t,m.a[a]=h,new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,m,this.k,this.l)}else{var g=this.k.i();return g.a[o]=t,new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,g,this.l)}}else if(e>=this.aU){var _=e-this.aU|0,v=this.bb,y=_>>>10|0,b=31&(_>>>5|0),ee=31&_,te=v.i(),x=te.a[y].i(),ne=x.a[b].i();return ne.a[ee]=t,x.a[b]=ne,te.a[y]=x,new WO(this.g,this.aT,this.ba,this.aU,te,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else if(e>=this.aT){var re=e-this.aT|0,ie=this.ba,ae=re>>>5|0,oe=31&re,se=ie.i(),S=se.a[ae].i();return S.a[oe]=t,se.a[ae]=S,new WO(this.g,this.aT,se,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else{var ce=this.g.i();return ce.a[e]=t,new WO(ce,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else throw this.aP(e)}),j.e8=(function(e){if(this.k.a.length<32){var t=V().f6(this.k,e),n=1+this.l|0;return new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,t,n)}else if(this.aF.a.length<31){var r=V().K(this.aF,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,r,i,a)}else if(this.aG.a.length<31){var o=V().K(this.aG,V().K(this.aF,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,o,s,c,l)}else if(this.aE.a.length<30){var u=V().K(this.aE,V().K(this.aG,V().K(this.aF,this.k))),d=V().cN,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new WO(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,u,d,f,p,m)}else{var h=this.g,g=this.aT,_=this.ba,v=this.aU,y=this.bb,b=this.aV,ee=this.aE,te=this.aV,x=V().iu,ne=V().K(this.aG,V().K(this.aF,this.k)),re=new(F.r().r().r().r()).C(1);re.a[0]=ne;var ie=V().cN,ae=V().bu,oe=new N(1);return oe.a[0]=e,new KO(h,g,_,v,y,b,ee,983040+te|0,x,re,ie,ae,oe,1+this.l|0)}}),j.cD=(function(e){var t=V().cj(this.g,e),n=V().aa(2,this.ba,e),r=V().aa(3,this.bb,e),i=V().aa(4,this.aE,e),a=V().aa(3,this.aG,e),o=V().aa(2,this.aF,e),s=V().cj(this.k,e);return new WO(t,this.aT,n,this.aU,r,this.aV,i,a,o,s,this.l)}),j.cU=(function(){return 7}),j.cT=(function(e){switch(e){case 0:return this.g;case 1:return this.ba;case 2:return this.bb;case 3:return this.aE;case 4:return this.aG;case 5:return this.aF;case 6:return this.k;default:throw new my(e)}}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aV|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.aE.a.length?this.aE.a[r].a[i].a[a].a[o]:i<this.aG.a.length?this.aG.a[i].a[a].a[o]:a<this.aF.a.length?this.aF.a[a].a[o]:this.k.a[o]}else if(t>=this.aU){var s=t-this.aU|0;return this.bb.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aT){var c=t-this.aT|0;return this.ba.a[c>>>5|0].a[31&c]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(WO,`scala.collection.immutable.Vector4`,{gK:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function KO(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.g=null,this.k=null,this.l=0,this.at=0,this.aK=null,this.au=0,this.aL=null,this.av=0,this.aM=null,this.aw=0,this.af=null,this.ai=null,this.ah=null,this.ag=null,this.at=t,this.aK=n,this.au=r,this.aL=i,this.av=a,this.aM=o,this.aw=s,this.af=c,this.ai=l,this.ah=u,this.ag=d,EO(this,e,f,p)}j=KO.prototype=new OO,j.constructor=KO;function qO(){}qO.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aw|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.af.a.length?this.af.a[n].a[r].a[i].a[a].a[o]:r<this.ai.a.length?this.ai.a[r].a[i].a[a].a[o]:i<this.ah.a.length?this.ah.a[i].a[a].a[o]:a<this.ag.a.length?this.ag.a[a].a[o]:this.k.a[o]}else if(e>=this.av){var s=e-this.av|0;return this.aM.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.au){var c=e-this.au|0;return this.aL.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.at){var l=e-this.at|0;return this.aK.a[l>>>5|0].a[31&l]}else return this.g.a[e]}else throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aw){var n=e-this.aw|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.af.a.length){var c=this.af.i(),l=c.a[r].i(),u=l.a[i].i(),d=u.a[a].i(),f=d.a[o].i();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,c,this.ai,this.ah,this.ag,this.k,this.l)}else if(i<this.ai.a.length){var p=this.ai.i(),m=p.a[i].i(),h=m.a[a].i(),g=h.a[o].i();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,p,this.ah,this.ag,this.k,this.l)}else if(a<this.ah.a.length){var _=this.ah.i(),v=_.a[a].i(),y=v.a[o].i();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,_,this.ag,this.k,this.l)}else if(o<this.ag.a.length){var b=this.ag.i(),ee=b.a[o].i();return ee.a[s]=t,b.a[o]=ee,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,b,this.k,this.l)}else{var te=this.k.i();return te.a[s]=t,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,te,this.l)}}else if(e>=this.av){var x=e-this.av|0,ne=this.aM,re=x>>>15|0,ie=31&(x>>>10|0),ae=31&(x>>>5|0),oe=31&x,se=ne.i(),S=se.a[re].i(),ce=S.a[ie].i(),C=ce.a[ae].i();return C.a[oe]=t,ce.a[ae]=C,S.a[ie]=ce,se.a[re]=S,new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,se,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else if(e>=this.au){var le=e-this.au|0,ue=this.aL,de=le>>>10|0,fe=31&(le>>>5|0),pe=31&le,me=ue.i(),he=me.a[de].i(),ge=he.a[fe].i();return ge.a[pe]=t,he.a[fe]=ge,me.a[de]=he,new KO(this.g,this.at,this.aK,this.au,me,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else if(e>=this.at){var _e=e-this.at|0,ve=this.aK,ye=_e>>>5|0,be=31&_e,xe=ve.i(),Se=xe.a[ye].i();return Se.a[be]=t,xe.a[ye]=Se,new KO(this.g,this.at,xe,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else{var Ce=this.g.i();return Ce.a[e]=t,new KO(Ce,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else throw this.aP(e)}),j.e8=(function(e){if(this.k.a.length<32){var t=V().f6(this.k,e),n=1+this.l|0;return new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,t,n)}else if(this.ag.a.length<31){var r=V().K(this.ag,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,r,i,a)}else if(this.ah.a.length<31){var o=V().K(this.ah,V().K(this.ag,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,o,s,c,l)}else if(this.ai.a.length<31){var u=V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k))),d=V().cN,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,u,d,f,p,m)}else if(this.af.a.length<30){var h=V().K(this.af,V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k)))),g=V().f0,_=V().cN,v=V().bu,y=new N(1);y.a[0]=e;var b=1+this.l|0;return new KO(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,h,g,_,v,y,b)}else{var ee=this.g,te=this.at,x=this.aK,ne=this.au,re=this.aL,ie=this.av,ae=this.aM,oe=this.aw,se=this.af,S=this.aw,ce=V().nZ,C=V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k))),le=new(F.r().r().r().r().r()).C(1);le.a[0]=C;var ue=V().f0,de=V().cN,fe=V().bu,pe=new N(1);return pe.a[0]=e,new JO(ee,te,x,ne,re,ie,ae,oe,se,31457280+S|0,ce,le,ue,de,fe,pe,1+this.l|0)}}),j.cD=(function(e){var t=V().cj(this.g,e),n=V().aa(2,this.aK,e),r=V().aa(3,this.aL,e),i=V().aa(4,this.aM,e),a=V().aa(5,this.af,e),o=V().aa(4,this.ai,e),s=V().aa(3,this.ah,e),c=V().aa(2,this.ag,e),l=V().cj(this.k,e);return new KO(t,this.at,n,this.au,r,this.av,i,this.aw,a,o,s,c,l,this.l)}),j.cU=(function(){return 9}),j.cT=(function(e){switch(e){case 0:return this.g;case 1:return this.aK;case 2:return this.aL;case 3:return this.aM;case 4:return this.af;case 5:return this.ai;case 6:return this.ah;case 7:return this.ag;case 8:return this.k;default:throw new my(e)}}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aw|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.af.a.length?this.af.a[r].a[i].a[a].a[o].a[s]:i<this.ai.a.length?this.ai.a[i].a[a].a[o].a[s]:a<this.ah.a.length?this.ah.a[a].a[o].a[s]:o<this.ag.a.length?this.ag.a[o].a[s]:this.k.a[s]}else if(t>=this.av){var c=t-this.av|0;return this.aM.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.au){var l=t-this.au|0;return this.aL.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.at){var u=t-this.at|0;return this.aK.a[u>>>5|0].a[31&u]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(KO,`scala.collection.immutable.Vector5`,{gL:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function JO(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.g=null,this.k=null,this.l=0,this.aj=0,this.ax=null,this.ak=0,this.ay=null,this.al=0,this.az=null,this.am=0,this.aA=null,this.aq=0,this.a5=null,this.a9=null,this.a8=null,this.a7=null,this.a6=null,this.aj=t,this.ax=n,this.ak=r,this.ay=i,this.al=a,this.az=o,this.am=s,this.aA=c,this.aq=l,this.a5=u,this.a9=d,this.a8=f,this.a7=p,this.a6=m,EO(this,e,h,g)}j=JO.prototype=new OO,j.constructor=JO;function YO(){}YO.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aq|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.a5.a.length?this.a5.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a9.a.length?this.a9.a[r].a[i].a[a].a[o].a[s]:i<this.a8.a.length?this.a8.a[i].a[a].a[o].a[s]:a<this.a7.a.length?this.a7.a[a].a[o].a[s]:o<this.a6.a.length?this.a6.a[o].a[s]:this.k.a[s]}else if(e>=this.am){var c=e-this.am|0;return this.aA.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.al){var l=e-this.al|0;return this.az.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.ak){var u=e-this.ak|0;return this.ay.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.aj){var d=e-this.aj|0;return this.ax.a[d>>>5|0].a[31&d]}else return this.g.a[e]}else throw this.aP(e)}),j.ei=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aq){var n=e-this.aq|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.a5.a.length){var l=this.a5.i(),u=l.a[r].i(),d=u.a[i].i(),f=d.a[a].i(),p=f.a[o].i(),m=p.a[s].i();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,l,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(i<this.a9.a.length){var h=this.a9.i(),g=h.a[i].i(),_=g.a[a].i(),v=_.a[o].i(),y=v.a[s].i();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,h,this.a8,this.a7,this.a6,this.k,this.l)}else if(a<this.a8.a.length){var b=this.a8.i(),ee=b.a[a].i(),te=ee.a[o].i(),x=te.a[s].i();return x.a[c]=t,te.a[s]=x,ee.a[o]=te,b.a[a]=ee,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,b,this.a7,this.a6,this.k,this.l)}else if(o<this.a7.a.length){var ne=this.a7.i(),re=ne.a[o].i(),ie=re.a[s].i();return ie.a[c]=t,re.a[s]=ie,ne.a[o]=re,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,ne,this.a6,this.k,this.l)}else if(s<this.a6.a.length){var ae=this.a6.i(),oe=ae.a[s].i();return oe.a[c]=t,ae.a[s]=oe,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,ae,this.k,this.l)}else{var se=this.k.i();return se.a[c]=t,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,se,this.l)}}else if(e>=this.am){var S=e-this.am|0,ce=this.aA,C=S>>>20|0,le=31&(S>>>15|0),ue=31&(S>>>10|0),de=31&(S>>>5|0),fe=31&S,pe=ce.i(),me=pe.a[C].i(),he=me.a[le].i(),ge=he.a[ue].i(),_e=ge.a[de].i();return _e.a[fe]=t,ge.a[de]=_e,he.a[ue]=ge,me.a[le]=he,pe.a[C]=me,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,pe,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.al){var ve=e-this.al|0,ye=this.az,be=ve>>>15|0,xe=31&(ve>>>10|0),Se=31&(ve>>>5|0),Ce=31&ve,we=ye.i(),Te=we.a[be].i(),Ee=Te.a[xe].i(),De=Ee.a[Se].i();return De.a[Ce]=t,Ee.a[Se]=De,Te.a[xe]=Ee,we.a[be]=Te,new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,we,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.ak){var w=e-this.ak|0,Oe=this.ay,ke=w>>>10|0,Ae=31&(w>>>5|0),je=31&w,Me=Oe.i(),T=Me.a[ke].i(),Ne=T.a[Ae].i();return Ne.a[je]=t,T.a[Ae]=Ne,Me.a[ke]=T,new JO(this.g,this.aj,this.ax,this.ak,Me,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.aj){var Pe=e-this.aj|0,Fe=this.ax,Ie=Pe>>>5|0,Le=31&Pe,Re=Fe.i(),ze=Re.a[Ie].i();return ze.a[Le]=t,Re.a[Ie]=ze,new JO(this.g,this.aj,Re,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else{var Be=this.g.i();return Be.a[e]=t,new JO(Be,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else throw this.aP(e)}),j.e8=(function(e){if(this.k.a.length<32){var t=V().f6(this.k,e),n=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,t,n)}else if(this.a6.a.length<31){var r=V().K(this.a6,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,r,i,a)}else if(this.a7.a.length<31){var o=V().K(this.a7,V().K(this.a6,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,o,s,c,l)}else if(this.a8.a.length<31){var u=V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k))),d=V().cN,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,u,d,f,p,m)}else if(this.a9.a.length<31){var h=V().K(this.a9,V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k)))),g=V().f0,_=V().cN,v=V().bu,y=new N(1);y.a[0]=e;var b=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,h,g,_,v,y,b)}else if(this.a5.a.length<62){var ee=V().K(this.a5,V().K(this.a9,V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k))))),te=V().iu,x=V().f0,ne=V().cN,re=V().bu,ie=new N(1);ie.a[0]=e;var ae=1+this.l|0;return new JO(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,ee,te,x,ne,re,ie,ae)}else throw Yv(new Xv)}),j.cD=(function(e){var t=V().cj(this.g,e),n=V().aa(2,this.ax,e),r=V().aa(3,this.ay,e),i=V().aa(4,this.az,e),a=V().aa(5,this.aA,e),o=V().aa(6,this.a5,e),s=V().aa(5,this.a9,e),c=V().aa(4,this.a8,e),l=V().aa(3,this.a7,e),u=V().aa(2,this.a6,e),d=V().cj(this.k,e);return new JO(t,this.aj,n,this.ak,r,this.al,i,this.am,a,this.aq,o,s,c,l,u,d,this.l)}),j.cU=(function(){return 11}),j.cT=(function(e){switch(e){case 0:return this.g;case 1:return this.ax;case 2:return this.ay;case 3:return this.az;case 4:return this.aA;case 5:return this.a5;case 6:return this.a9;case 7:return this.a8;case 8:return this.a7;case 9:return this.a6;case 10:return this.k;default:throw new my(e)}}),j.cC=(function(e){return this.cD(e)}),j.e=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aq|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.a5.a.length?this.a5.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a9.a.length?this.a9.a[i].a[a].a[o].a[s].a[c]:a<this.a8.a.length?this.a8.a[a].a[o].a[s].a[c]:o<this.a7.a.length?this.a7.a[o].a[s].a[c]:s<this.a6.a.length?this.a6.a[s].a[c]:this.k.a[c]}else if(t>=this.am){var l=t-this.am|0;return this.aA.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.al){var u=t-this.al|0;return this.az.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.ak){var d=t-this.ak|0;return this.ay.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.aj){var f=t-this.aj|0;return this.ax.a[f>>>5|0].a[31&f]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(JO,`scala.collection.immutable.Vector6`,{gM:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function XO(e,t){return e.b6=t,e}function ZO(e){return XO(e,b_(new C_)),e}function QO(){this.b6=null}j=QO.prototype=new qE,j.constructor=QO;function $O(){}$O.prototype=j,j.by=(function(){return`IndexedSeq`}),j.m=(function(){return IS(new LS,new FE(this))}),j.bo=(function(e){var t=this.b6.u();return t===e?0:t<e?-1:1}),j.be=(function(e){}),j.bc=(function(e){return zp(this,e)}),j.u=(function(){return this.b6.u()}),j.E=(function(){return this.b6.u()}),j.qy=(function(e){var t=this.b6,n=``+pa(e);return t.o+=n,this}),j.F=(function(){return this.b6.o}),j.ou=(function(e){if(e instanceof uO)this.b6.ot(e.bW);else if(e instanceof QO){var t=this.b6,n=e.b6;t.o=``+t.o+n}else{var r=e.E();if(r!==0){var i=this.b6;r>0&&i.u();for(var a=e.m();a.n();){var o=``+pa(Ca(a.j()));i.o+=o}}}return this}),j.f=(function(){return this.b6.u()===0}),j.bw=(function(){return Cx()}),j.bd=(function(){return this.b6.o}),j.b7=(function(e){return this.qy(Ca(e))}),j.g4=(function(e){return ZO(new QO).ou(e)}),j.g5=(function(e){return ZO(new QO).ou(e)}),j.e=(function(e){var t=e|0;return Sa(this.b6.oL(t))}),j.y=(function(e){return Sa(this.b6.oL(e))}),new P().i(QO,`scala.collection.mutable.StringBuilder`,{cl:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,ab:1,M:1,I:1,G:1,R:1,q:1,r:1,S:1,aG:1,a:1});function ek(e){var t=new nk().hb(e);e.c8=t.c8,e.dc=t.dc,e.gI=!1}function tk(e){e.gJ=1+e.gJ|0,e.gI&&ek(e)}function nk(){this.gJ=0,this.c8=null,this.dc=null,this.gI=!1,this.c9=0,this.gJ=0,this.c8=$(),this.dc=null,this.gI=!1,this.c9=0}j=nk.prototype=new vD,j.constructor=nk;function rk(){}rk.prototype=j,j.be=(function(e){}),j.cP=(function(e){return WS(this,e)}),j.m=(function(){return new Ox(this.c8.m(),new Eg((()=>this.gJ)))}),j.ef=(function(){return Dx()}),j.y=(function(e){return Wy(this.c8,e)}),j.u=(function(){return this.c9}),j.E=(function(){return this.c9}),j.f=(function(){return this.c9===0}),j.pQ=(function(){return this.gI=!this.f(),this.c8}),j.qG=(function(e){tk(this);var t=new jO(e,$());return this.c9===0?this.c8=t:this.dc.aC=t,this.dc=t,this.c9=1+this.c9|0,this}),j.hb=(function(e){var t=e.m();if(t.n()){var n=1,r=new jO(t.j(),$());for(this.c8=r;t.n();){var i=new jO(t.j(),$());r.aC=i,r=i,n=1+n|0}this.c9=n,this.dc=r}return this}),j.qw=(function(e){var t=e.m();if(t.n()){var n=new nk().hb(t);tk(this),this.c9===0?this.c8=n.c8:this.dc.aC=n.c8,this.dc=n.dc,this.c9=this.c9+n.c9|0}return this}),j.by=(function(){return`ListBuffer`}),j.bc=(function(e){return this.qw(e)}),j.b7=(function(e){return this.qG(e)}),j.bd=(function(){return this.pQ()}),j.e=(function(e){var t=e|0;return Wy(this.c8,t)}),j.bw=(function(){return Dx()}),new P().i(nk,`scala.collection.mutable.ListBuffer`,{ck:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,s:1,k:1,ab:1,M:1,V:1,a:1});function ik(e,t,n){return e.dU=0,e.dT=t,e.aH=n,e}function ak(e){return ik(e,new N(16),0),e}function ok(){this.dU=0,this.dT=null,this.aH=0}j=ok.prototype=new vD,j.constructor=ok;function sk(){}sk.prototype=j,j.cP=(function(e){return WS(this,e)}),j.m=(function(){return this.tq().m()}),j.bo=(function(e){var t=this.aH;return t===e?0:t<e?-1:1}),j.E=(function(){return this.aH}),j.iT=(function(e){this.dT=ax().pJ(this.dT,this.aH,e)}),j.be=(function(e){e>this.aH&&e>=1&&this.iT(e)}),j.y=(function(e){var t=1+e|0;if(e<0)throw Lu().g8(e,-1+this.aH|0);if(t>this.aH)throw Lu().g8(-1+t|0,-1+this.aH|0);return this.dT.a[e]}),j.to=(function(e,t){var n=1+e|0;if(e<0)throw Lu().g8(e,-1+this.aH|0);if(n>this.aH)throw Lu().g8(-1+n|0,-1+this.aH|0);this.dU=1+this.dU|0,this.dT.a[e]=t}),j.u=(function(){return this.aH}),j.tq=(function(){return new zE(this,new Eg((()=>this.dU)))}),j.ef=(function(){return ax()}),j.qD=(function(e){this.dU=1+this.dU|0;var t=1+this.aH|0;return this.iT(t),this.aH=t,this.to(-1+this.aH|0,e),this}),j.op=(function(e){if(e instanceof ok){var t=e.aH;t>0&&(this.dU=1+this.dU|0,this.iT(this.aH+t|0),Dp().g0(e.dT,0,this.dT,this.aH,t),this.aH=this.aH+t|0)}else zp(this,e);return this}),j.by=(function(){return`ArrayBuffer`}),j.bZ=(function(e,t,n){var r=this.aH,i=Ul().cg(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Dp().g0(this.dT,0,e,t,c),c}),j.bc=(function(e){return this.op(e)}),j.b7=(function(e){return this.qD(e)}),j.bw=(function(){return ax()}),j.e=(function(e){return this.y(e|0)}),new P().i(ok,`scala.collection.mutable.ArrayBuffer`,{c7:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,cj:1,R:1,q:1,r:1,S:1,s:1,k:1,V:1,a:1});function ck(e,t){return e.e5=t,e}function lk(e){return ck(e,[]),e}function uk(){this.e5=null}j=uk.prototype=new vD,j.constructor=uk;function dk(){}dk.prototype=j,j.be=(function(e){}),j.by=(function(){return`IndexedSeq`}),j.m=(function(){return IS(new LS,new FE(this))}),j.bo=(function(e){var t=this.e5.length|0;return t===e?0:t<e?-1:1}),j.cP=(function(e){return WS(this,e)}),j.ef=(function(){return Rx()}),j.y=(function(e){return this.e5[e]}),j.u=(function(){return this.e5.length|0}),j.E=(function(){return this.e5.length|0}),j.cd=(function(){return`WrappedArray`}),j.bd=(function(){return this}),j.b7=(function(e){return this.e5.push(e),this}),j.e=(function(e){var t=e|0;return this.e5[t]}),j.bw=(function(){return Rx()}),new P().i(uk,`scala.scalajs.js.WrappedArray`,{hZ:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,s:1,k:1,R:1,q:1,r:1,S:1,cj:1,M:1,a:1}),ra=new z(0,0),Ha.z=ra,Pc(new(SS.r()).C([]));