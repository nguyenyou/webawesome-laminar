var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function r(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&s(t)})}var i=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),a=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),o=e=>{let t=e?.localName;if(!t||!i.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!a.get(n)};function s(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)o(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const c=globalThis,l=c.ShadowRoot&&(c.ShadyCSS===void 0||c.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,u=Symbol(),d=new WeakMap;var f=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==u)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(l&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=d.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&d.set(t,e))}return e}toString(){return this.cssText}};const p=e=>new f(typeof e==`string`?e:e+``,void 0,u),m=(e,...t)=>new f(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,u),h=(e,t)=>{if(l)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=c.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},g=l?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return p(t)})(e):e,{is:_,defineProperty:v,getOwnPropertyDescriptor:y,getOwnPropertyNames:ee,getOwnPropertySymbols:te,getPrototypeOf:ne}=Object,b=globalThis,re=b.trustedTypes,ie=re?re.emptyScript:``,ae=b.reactiveElementPolyfillSupport,oe=(e,t)=>e,se={toAttribute(e,t){switch(t){case Boolean:e=e?ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ce=(e,t)=>!_(e,t),x={attribute:!0,type:String,converter:se,reflect:!1,useDefault:!1,hasChanged:ce};Symbol.metadata??=Symbol(`metadata`),b.litPropertyMetadata??=new WeakMap;var le=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&v(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=y(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(oe(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(oe(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(oe(`properties`))){let e=this.properties,t=[...ee(e),...te(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(g(e))}else e!==void 0&&t.push(g(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return h(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?se:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?se:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ce)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};le.elementStyles=[],le.shadowRootOptions={mode:`open`},le[oe(`elementProperties`)]=new Map,le[oe(`finalized`)]=new Map,ae?.({ReactiveElement:le}),(b.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const S=globalThis,ue=S.trustedTypes,de=ue?ue.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,fe=`$lit$`,pe=`lit$${Math.random().toFixed(9).slice(2)}$`,me=`?`+pe,he=`<${me}>`,ge=document,_e=()=>ge.createComment(``),ve=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ye=Array.isArray,be=e=>ye(e)||typeof e?.[Symbol.iterator]==`function`,xe=`[ 	
\f\r]`,Se=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ce=/-->/g,we=/>/g,Te=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ee=/'/g,De=/"/g,Oe=/^(?:script|style|textarea|title)$/i,C=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ke=Symbol.for(`lit-noChange`),Ae=Symbol.for(`lit-nothing`),je=new WeakMap,Me=ge.createTreeWalker(ge,129);function Ne(e,t){if(!ye(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return de===void 0?t:de.createHTML(t)}const Pe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Se;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Se?c[1]===`!--`?o=Ce:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Te):(Oe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Te):o=we:o===Te?c[0]===`>`?(o=i??Se,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Te:c[3]===`"`?De:Ee):o===De||o===Ee?o=Te:o===Ce||o===we?o=Se:(o=Te,i=void 0);let d=o===Te&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Se?n+he:l>=0?(r.push(s),n.slice(0,l)+fe+n.slice(l)+pe+d):n+pe+(l===-2?t:d)}return[Ne(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Fe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Pe(t,n);if(this.el=e.createElement(l,r),Me.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Me.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(fe)){let t=u[o++],n=i.getAttribute(e).split(pe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Be:r[1]===`?`?Ve:r[1]===`@`?He:ze}),i.removeAttribute(e)}else e.startsWith(pe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Oe.test(i.tagName)){let e=i.textContent.split(pe),t=e.length-1;if(t>0){i.textContent=ue?ue.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],_e()),Me.nextNode(),c.push({type:2,index:++a});i.append(e[t],_e())}}}else if(i.nodeType===8)if(i.data===me)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(pe,e+1))!==-1;)c.push({type:7,index:a}),e+=pe.length-1}a++}}static createElement(e,t){let n=ge.createElement(`template`);return n.innerHTML=e,n}};function Ie(e,t,n=e,r){if(t===ke)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=ve(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ie(e,i._$AS(e,t.values),i,r)),t}var Le=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ge).importNode(t,!0);Me.currentNode=r;let i=Me.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Re(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ue(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Me.nextNode(),a++)}return Me.currentNode=ge,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Re=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=Ae,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ie(this,e,t),ve(e)?e===Ae||e==null||e===``?(this._$AH!==Ae&&this._$AR(),this._$AH=Ae):e!==this._$AH&&e!==ke&&this._(e):e._$litType$===void 0?e.nodeType===void 0?be(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Ae&&ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(ge.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Fe.createElement(Ne(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Le(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=je.get(e.strings);return t===void 0&&je.set(e.strings,t=new Fe(e)),t}k(t){ye(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(_e()),this.O(_e()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=Ae,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ae}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ie(this,e,t,0),a=!ve(e)||e!==this._$AH&&e!==ke,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ie(this,r[n+o],t,o),s===ke&&(s=this._$AH[o]),a||=!ve(s)||s!==this._$AH[o],s===Ae?e=Ae:e!==Ae&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===Ae?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Be=class extends ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ae?void 0:e}},Ve=class extends ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Ae)}},He=class extends ze{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ie(this,e,t,0)??Ae)===ke)return;let n=this._$AH,r=e===Ae&&n!==Ae||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==Ae&&(n===Ae||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ue=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ie(this,e)}};const We={M:fe,P:pe,A:me,C:1,L:Pe,R:Le,D:be,V:Ie,I:Re,H:ze,N:Ve,U:He,B:Be,F:Ue},Ge=S.litHtmlPolyfillSupport;Ge?.(Fe,Re),(S.litHtmlVersions??=[]).push(`3.3.1`);const Ke=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Re(t.insertBefore(_e(),e),e,void 0,n??{})}return i._$AI(e),i},qe=globalThis;var w=class extends le{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ke(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};w._$litElement$=!0,w.finalized=!0,qe.litElementHydrateSupport?.({LitElement:w});const Je=qe.litElementPolyfillSupport;Je?.({LitElement:w}),(qe.litElementVersions??=[]).push(`4.2.1`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ye=m`
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
`,Xe=m`
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
`,Ze=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Qe=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},$e=Object.defineProperty,et=Object.getOwnPropertyDescriptor,tt=e=>{throw TypeError(e)},T=(e,t,n,r)=>{for(var i=r>1?void 0:r?et(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&$e(t,n,i),i},nt=(e,t,n)=>t.has(e)||tt(`Cannot `+n),rt=(e,t,n)=>(nt(e,t,`read from private field`),n?n.call(e):t.get(e)),it=(e,t,n)=>t.has(e)?tt(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),at=(e,t,n,r)=>(nt(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},st={attribute:!0,type:String,converter:se,reflect:!1,hasChanged:ce},ct=(e=st,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function E(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return E({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ut=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function dt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ut(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ut(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ft=m`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends w{constructor(){super(),it(this,gt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){rt(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),at(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=new WeakMap,T([E()],_t.prototype,`dir`,2),T([E()],_t.prototype,`lang`,2),T([E({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),yt=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Qe))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[vt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};yt.formAssociated=!0,T([E({reflect:!0})],yt.prototype,`name`,2),T([E({type:Boolean})],yt.prototype,`disabled`,2),T([E({state:!0,attribute:!1})],yt.prototype,`valueHasChanged`,2),T([E({state:!0,attribute:!1})],yt.prototype,`hasInteracted`,2),T([E({attribute:`custom-error`,reflect:!0})],yt.prototype,`customError`,2),T([E({attribute:!1,state:!0,type:Object})],yt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt={small:`s`,medium:`m`,large:`l`},xt=new Set;function St(e,t){t in bt&&!xt.has(`${e}:${t}`)&&(xt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${bt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},wt=m`
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
function Tt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Et=new Set,Dt=new Map;let Ot,kt=`ltr`,At=`en`;const jt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(jt){let e=new MutationObserver(Nt);kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Mt(...e){e.map(e=>{let t=e.$code.toLowerCase();Dt.has(t)?Dt.set(t,Object.assign(Object.assign({},Dt.get(t)),e)):Dt.set(t,e),Ot||=e}),Nt()}function Nt(){jt&&(kt=document.documentElement.dir||`ltr`,At=document.documentElement.lang||navigator.language),[...Et.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Pt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Et.add(this.host)}hostDisconnected(){Et.delete(this.host)}dir(){return`${this.host.dir||kt}`.toLowerCase()}lang(){let e=`${this.host.lang||At}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Ot?Ot.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Dt.get(`${n}-${r}`),a=Dt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Ot&&Ot[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Ot&&Ot[e])i=Ot[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Ft={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Mt(Ft);var It=Ft,Lt=class extends Pt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Mt(It);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Rt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zt=e=>(...t)=>({_$litDirective$:e,values:t});var Bt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Vt=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ke}}),Ht=e=>e??Ae,{I:Ut}=We,Wt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Gt=e=>e.strings===void 0,Kt={},qt=(e,t=Kt)=>e._$AH=t,Jt=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Gt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ke||t===Ae)return t;let n=e.element,r=e.name;if(e.type===Rt.PROPERTY){if(t===n[r])return ke}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return ke}else if(e.type===Rt.ATTRIBUTE&&n.getAttribute(r)===t+``)return ke;return qt(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var D=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Ct(this,`hint`,`label`),this.localize=new Lt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Ze()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){St(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){r(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return C`
      <label
        part="form-control-label label"
        class=${Vt({label:!0,"has-label":n})}
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
          name=${Ht(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${Ht(this.placeholder)}
          minlength=${Ht(this.minlength)}
          maxlength=${Ht(this.maxlength)}
          min=${Ht(this.min)}
          max=${Ht(this.max)}
          step=${Ht(this.step)}
          .value=${Jt(this.value??``)}
          autocapitalize=${Ht(this.autocapitalize)}
          autocomplete=${Ht(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${Ht(this.pattern)}
          enterkeyhint=${Ht(this.enterkeyhint)}
          inputmode=${Ht(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?C`
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
        ${this.passwordToggle&&!this.disabled?C`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?C`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:C`
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
        class=${Vt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};D.css=[wt,Xe,Ye],D.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},T([dt(`input`)],D.prototype,`input`,2),T([E()],D.prototype,`title`,2),T([E({reflect:!0})],D.prototype,`type`,2),T([lt()],D.prototype,`value`,1),T([E({attribute:`value`,reflect:!0})],D.prototype,`defaultValue`,2),T([E({reflect:!0})],D.prototype,`size`,2),T([Tt(`size`)],D.prototype,`handleSizeChange`,1),T([E({reflect:!0})],D.prototype,`appearance`,2),T([E({type:Boolean,reflect:!0})],D.prototype,`pill`,2),T([E()],D.prototype,`label`,2),T([E({attribute:`hint`})],D.prototype,`hint`,2),T([E({attribute:`with-clear`,type:Boolean})],D.prototype,`withClear`,2),T([E()],D.prototype,`placeholder`,2),T([E({type:Boolean,reflect:!0})],D.prototype,`readonly`,2),T([E({attribute:`password-toggle`,type:Boolean})],D.prototype,`passwordToggle`,2),T([E({attribute:`password-visible`,type:Boolean})],D.prototype,`passwordVisible`,2),T([E({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],D.prototype,`withoutSpinButtons`,2),T([E({type:Boolean,reflect:!0})],D.prototype,`required`,2),T([E()],D.prototype,`pattern`,2),T([E({type:Number})],D.prototype,`minlength`,2),T([E({type:Number})],D.prototype,`maxlength`,2),T([E()],D.prototype,`min`,2),T([E()],D.prototype,`max`,2),T([E()],D.prototype,`step`,2),T([E()],D.prototype,`autocapitalize`,2),T([E({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],D.prototype,`autocorrect`,2),T([E()],D.prototype,`autocomplete`,2),T([E({type:Boolean})],D.prototype,`autofocus`,2),T([E()],D.prototype,`enterkeyhint`,2),T([E({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],D.prototype,`spellcheck`,2),T([E()],D.prototype,`inputmode`,2),T([E({attribute:`with-label`,type:Boolean})],D.prototype,`withLabel`,2),T([E({attribute:`with-hint`,type:Boolean})],D.prototype,`withHint`,2),T([Tt(`step`,{waitUntilFirstUpdate:!0})],D.prototype,`handleStepChange`,1),D=T([ot(`wa-input`)],D),D.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Xt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Zt=m`
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
`,Qt=``,$t=``;function en(){return Qt.replace(/\/$/,``)}function tn(e){$t=e}function nn(){if(!$t){let e=document.querySelector(`[data-fa-kit-code]`);e&&tn(e.getAttribute(`data-fa-kit-code`)||``)}return $t}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var rn=`7.3.0`;function an(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function on(e,t,n){let r=an(e,t,n),i=en();if(i)return`${i}/${r}/${e}.svg`;let a=nn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${rn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${rn}/svgs/${r}/${e}.svg`}var sn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>on(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function cn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var ln={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},un={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=ln[n][e]??ln.regular[e]??ln.regular[`circle-question`];return r?cn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},dn=`classic`,fn=[sn,un],pn=new Set;function mn(e){pn.add(e)}function hn(e){pn.delete(e)}function gn(e){return fn.find(t=>t.name===e)}function _n(){return dn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vn=Symbol(),yn=Symbol(),bn,xn=new Map,Sn=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?vn:yn}catch{return yn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return vn;bn||=new DOMParser;let r=bn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):vn}catch{return vn}}}connectedCallback(){super.connectedCallback(),mn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),hn(this)}async getIconSource(){let e=gn(this.library),t=this.family||_n();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?gn(this.library):void 0;if(!e){this.svg=null;return}let r=xn.get(e);r||(r=this.resolveIcon(e,n),xn.set(e,r));let i=await r;if(i===yn&&xn.delete(e),e===(await this.getIconSource()).url){if(Wt(i)){this.svg=i;return}switch(i){case yn:case vn:this.svg=null,this.dispatchEvent(new Yt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Xt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=gn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:C`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};Sn.css=Zt,T([lt()],Sn.prototype,`svg`,2),T([E({reflect:!0})],Sn.prototype,`name`,2),T([E({reflect:!0})],Sn.prototype,`family`,2),T([E({reflect:!0})],Sn.prototype,`variant`,2),T([E({reflect:!0})],Sn.prototype,`canvas`,2),T([E({attribute:`auto-width`,type:Boolean,reflect:!0})],Sn.prototype,`autoWidth`,2),T([E({attribute:`swap-opacity`,type:Boolean,reflect:!0})],Sn.prototype,`swapOpacity`,2),T([E()],Sn.prototype,`src`,2),T([E()],Sn.prototype,`label`,2),T([E({reflect:!0})],Sn.prototype,`library`,2),T([E({type:Number,reflect:!0})],Sn.prototype,`rotate`,2),T([E({type:String,reflect:!0})],Sn.prototype,`flip`,2),T([E({type:String,reflect:!0})],Sn.prototype,`animation`,2),T([Tt(`label`)],Sn.prototype,`handleLabelChange`,1),T([Tt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],Sn.prototype,`setIcon`,1),Sn=T([ot(`wa-icon`)],Sn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=t({default:()=>D}),wn=m`
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Tn(e,t=0){if(!e||!globalThis.Node)return``;if(typeof e[Symbol.iterator]==`function`)return(Array.isArray(e)?e:[...e]).map(e=>Tn(e,--t)).join(``);let n=e;if(n.nodeType===Node.TEXT_NODE)return n.textContent??``;if(n.nodeType===Node.ELEMENT_NODE){let e=n;if(e.hasAttribute(`slot`)||e.matches(`style, script`))return``;if(e instanceof HTMLSlotElement){let n=e.assignedNodes({flatten:!0});if(n.length>0)return Tn(n,--t)}return t>-1?Tn(e,--t):e.textContent??``}return n.hasChildNodes()?Tn(n.childNodes,--t):``}var En=class extends _t{constructor(){super(...arguments),this.localize=new Lt(this),this.cachedDefaultLabel=``,this.isInitialized=!1,this.isDefaultLabelDirty=!0,this.current=!1,this.value=``,this.disabled=!1,this.selected=!1,this.defaultSelected=!1,this._label=``,this.handleHover=e=>{e.type===`mouseenter`?this.customStates.set(`hover`,!0):e.type===`mouseleave`&&this.customStates.set(`hover`,!1)}}set label(e){let t=this._label;this._label=e||``,this._label!==t&&this.requestUpdate(`label`,t)}get label(){return this._label?this._label:this.defaultLabel}get defaultLabel(){return(this.isDefaultLabelDirty||!this.cachedDefaultLabel)&&this.updateDefaultLabel(),this.cachedDefaultLabel}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`),this.addEventListener(`mouseenter`,this.handleHover),this.addEventListener(`mouseleave`,this.handleHover)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`mouseenter`,this.handleHover),this.removeEventListener(`mouseleave`,this.handleHover)}handleDefaultSlotChange(){if(this.isDefaultLabelDirty=!0,!this.isInitialized){this.isInitialized=!0;return}let e=this.closest(`wa-select, wa-combobox`);e&&customElements.whenDefined(e.localName).then(()=>e.handleDefaultSlotChange?.())}willUpdate(e){e.has(`defaultSelected`)&&(this.didSSR&&this.hasUpdated||!this.didSSR)&&this.syncDefaultSelected(),super.willUpdate(e)}syncDefaultSelected(){if(`closest`in this&&!this.closest(`wa-combobox, wa-select`)?.hasInteracted&&this.defaultSelected){let e=this.selected;this.selected=this.defaultSelected,this.requestUpdate(`selected`,e)}}updated(e){e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`selected`)&&(this.setAttribute(`aria-selected`,this.selected?`true`:`false`),this.customStates.set(`selected`,this.selected)),e.has(`value`)&&(typeof this.value!=`string`&&(this.value=String(this.value)),this.handleDefaultSlotChange()),e.has(`current`)&&this.customStates.set(`current`,this.current),super.updated(e)}async firstUpdated(e){if(super.firstUpdated(e),this.didSSR&&!this.hasUpdated&&await this.updateComplete,this.syncDefaultSelected(),this.selected&&!this.defaultSelected){let e=this.closest(`wa-select, wa-combobox`);e&&!e.hasInteracted&&(await customElements.whenDefined(e?.localName),await e.updateComplete,e.selectionChanged?.())}}updateDefaultLabel(){let e=this.cachedDefaultLabel;this.cachedDefaultLabel=Tn(this).trim(),this.isDefaultLabelDirty=!1;let t=this.cachedDefaultLabel!==e;return!this._label&&t&&this.requestUpdate(`label`,e),t}render(){let e=this.selected;return this.didSSR&&!this.hasUpdated?(this.updateComplete.then(()=>{this.requestUpdate()}),Ae):C`
      ${e?C`<wa-icon
            part="checked-icon"
            class="check"
            name="check"
            library="system"
            variant="solid"
            aria-hidden="true"
          ></wa-icon>`:C`<span part="checked-icon" class="check" aria-hidden="true"></span>`}
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `}};En.css=wn,T([dt(`.label`)],En.prototype,`defaultSlot`,2),T([lt()],En.prototype,`current`,2),T([E({reflect:!0})],En.prototype,`value`,2),T([E({type:Boolean})],En.prototype,`disabled`,2),T([E({type:Boolean,attribute:!1})],En.prototype,`selected`,2),T([E({type:Boolean,attribute:`selected`})],En.prototype,`defaultSelected`,2),T([E()],En.prototype,`label`,1),En=T([ot(`wa-option`)],En);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>En}),On=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},kn=m`
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
`;const An=Math.min,jn=Math.max,Mn=Math.round,Nn=Math.floor,Pn=e=>({x:e,y:e}),Fn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},In={start:`end`,end:`start`};function Ln(e,t,n){return jn(e,An(t,n))}function Rn(e,t){return typeof e==`function`?e(t):e}function zn(e){return e.split(`-`)[0]}function Bn(e){return e.split(`-`)[1]}function Vn(e){return e===`x`?`y`:`x`}function Hn(e){return e===`y`?`height`:`width`}const Un=new Set([`top`,`bottom`]);function Wn(e){return Un.has(zn(e))?`y`:`x`}function Gn(e){return Vn(Wn(e))}function Kn(e,t,n){n===void 0&&(n=!1);let r=Bn(e),i=Gn(e),a=Hn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=tr(o)),[o,tr(o)]}function qn(e){let t=tr(e);return[Jn(e),t,Jn(t)]}function Jn(e){return e.replace(/start|end/g,e=>In[e])}const Yn=[`left`,`right`],Xn=[`right`,`left`],Zn=[`top`,`bottom`],Qn=[`bottom`,`top`];function $n(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Xn:Yn:t?Yn:Xn;case`left`:case`right`:return t?Zn:Qn;default:return[]}}function er(e,t,n,r){let i=Bn(e),a=$n(zn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Jn)))),a}function tr(e){return e.replace(/left|right|bottom|top/g,e=>Fn[e])}function nr(e){return{top:0,right:0,bottom:0,left:0,...e}}function rr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:nr(e)}function ir(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function ar(e,t,n){let{reference:r,floating:i}=e,a=Wn(t),o=Gn(t),s=Hn(o),c=zn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Bn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const or=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ar(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=ar(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function sr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Rn(t,e),p=rr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ir(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ir(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const cr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Rn(e,t)||{};if(l==null)return{};let d=rr(u),f={x:n,y:r},p=Gn(i),m=Hn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),b=ne?ne[y]:0;(!b||!await(o.isElement==null?void 0:o.isElement(ne)))&&(b=s.floating[y]||a.floating[m]);let re=ee/2-te/2,ie=b/2-h[m]/2-1,ae=An(d[_],ie),oe=An(d[v],ie),se=ae,ce=b-h[m]-oe,x=b/2-h[m]/2+re,le=Ln(se,x,ce),S=!c.arrow&&Bn(i)!=null&&x!==le&&a.reference[m]/2-(x<se?ae:oe)-h[m]/2<0,ue=S?x<se?x-se:x-ce:0;return{[p]:f[p]+ue,data:{[p]:le,centerOffset:x-le-ue,...S&&{alignmentOffset:ue}},reset:S}}}),lr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Rn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=zn(r),_=Wn(o),v=zn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[tr(o)]:qn(o)),te=p!==`none`;!d&&te&&ee.push(...er(o,m,p,y));let ne=[o,...ee],b=await sr(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(b[g]),u){let e=Kn(r,a,y);re.push(b[e[0]],b[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==Wn(t))||ie.every(e=>Wn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(te){let t=Wn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},ur=new Set([`left`,`top`]);async function dr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=zn(n),s=Bn(n),c=Wn(n)===`y`,l=ur.has(o)?-1:1,u=a&&c?-1:1,d=Rn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const fr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await dr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},pr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Rn(e,t),l={x:n,y:r},u=await sr(t,c),d=Wn(zn(i)),f=Vn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Ln(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Ln(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},mr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Rn(e,t),u=await sr(t,l),d=zn(i),f=Bn(i),p=Wn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=An(h-u[g],v),te=An(m-u[_],y),ne=!t.middlewareData.shift,b=ee,re=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(re=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(b=v),ne&&!f){let e=jn(u.left,0),t=jn(u.right,0),n=jn(u.top,0),r=jn(u.bottom,0);p?re=m-2*(e!==0||t!==0?e+t:jn(u.left,u.right)):b=h-2*(n!==0||r!==0?n+r:jn(u.top,u.bottom))}await c({...t,availableWidth:re,availableHeight:b});let ie=await o.getDimensions(s.floating);return m!==ie.width||h!==ie.height?{reset:{rects:!0}}:{}}}};function hr(){return typeof window<`u`}function gr(e){return yr(e)?(e.nodeName||``).toLowerCase():`#document`}function _r(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function vr(e){return((yr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function yr(e){return hr()?e instanceof Node||e instanceof _r(e).Node:!1}function br(e){return hr()?e instanceof Element||e instanceof _r(e).Element:!1}function xr(e){return hr()?e instanceof HTMLElement||e instanceof _r(e).HTMLElement:!1}function Sr(e){return!hr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof _r(e).ShadowRoot}const Cr=new Set([`inline`,`contents`]);function wr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Lr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Cr.has(i)}const Tr=new Set([`table`,`td`,`th`]);function Er(e){return Tr.has(gr(e))}const Dr=[`:popover-open`,`:modal`];function Or(e){return Dr.some(t=>{try{return e.matches(t)}catch{return!1}})}const kr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Ar=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],jr=[`paint`,`layout`,`strict`,`content`];function Mr(e){let t=Pr(),n=br(e)?Lr(e):e;return kr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Ar.some(e=>(n.willChange||``).includes(e))||jr.some(e=>(n.contain||``).includes(e))}function Nr(e){let t=zr(e);for(;xr(t)&&!Ir(t);){if(Mr(t))return t;if(Or(t))return null;t=zr(t)}return null}function Pr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Fr=new Set([`html`,`body`,`#document`]);function Ir(e){return Fr.has(gr(e))}function Lr(e){return _r(e).getComputedStyle(e)}function Rr(e){return br(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function zr(e){if(gr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Sr(e)&&e.host||vr(e);return Sr(t)?t.host:t}function Br(e){let t=zr(e);return Ir(t)?e.ownerDocument?e.ownerDocument.body:e.body:xr(t)&&wr(t)?t:Br(t)}function Vr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Br(e),i=r===e.ownerDocument?.body,a=_r(r);if(i){let e=Hr(a);return t.concat(a,a.visualViewport||[],wr(r)?r:[],e&&n?Vr(e):[])}return t.concat(r,Vr(r,[],n))}function Hr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Ur(e){let t=Lr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=xr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Mn(n)!==a||Mn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Wr(e){return br(e)?e:e.contextElement}function Gr(e){let t=Wr(e);if(!xr(t))return Pn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Ur(t),o=(a?Mn(n.width):n.width)/r,s=(a?Mn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const Kr=Pn(0);function qr(e){let t=_r(e);return!Pr()||!t.visualViewport?Kr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Jr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==_r(e)?!1:t}function Yr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Wr(e),o=Pn(1);t&&(r?br(r)&&(o=Gr(r)):o=Gr(e));let s=Jr(a,n,r)?qr(a):Pn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=_r(a),t=r&&br(r)?_r(r):r,n=e,i=Hr(n);for(;i&&r&&t!==n;){let e=Gr(i),t=i.getBoundingClientRect(),r=Lr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=_r(i),i=Hr(n)}}return ir({width:u,height:d,x:c,y:l})}function Xr(e,t){let n=Rr(e).scrollLeft;return t?t.left+n:Yr(vr(e)).left+n}function Zr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Xr(e,n),y:n.top+t.scrollTop}}function Qr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=vr(r),s=t?Or(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Pn(1),u=Pn(0),d=xr(r);if((d||!d&&!a)&&((gr(r)!==`body`||wr(o))&&(c=Rr(r)),xr(r))){let e=Yr(r);l=Gr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Zr(o,c):Pn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function $r(e){return Array.from(e.getClientRects())}function ei(e){let t=vr(e),n=Rr(e),r=e.ownerDocument.body,i=jn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=jn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Xr(e),s=-n.scrollTop;return Lr(r).direction===`rtl`&&(o+=jn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function ti(e,t){let n=_r(e),r=vr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Pr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Xr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const ni=new Set([`absolute`,`fixed`]);function ri(e,t){let n=Yr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=xr(e)?Gr(e):Pn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ii(e,t,n){let r;if(t===`viewport`)r=ti(e,n);else if(t===`document`)r=ei(vr(e));else if(br(t))r=ri(t,n);else{let n=qr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ir(r)}function ai(e,t){let n=zr(e);return n===t||!br(n)||Ir(n)?!1:Lr(n).position===`fixed`||ai(n,t)}function oi(e,t){let n=t.get(e);if(n)return n;let r=Vr(e,[],!1).filter(e=>br(e)&&gr(e)!==`body`),i=null,a=Lr(e).position===`fixed`,o=a?zr(e):e;for(;br(o)&&!Ir(o);){let t=Lr(o),n=Mr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&ni.has(i.position)||wr(o)&&!n&&ai(e,o))?r=r.filter(e=>e!==o):i=t,o=zr(o)}return t.set(e,r),r}function si(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Or(t)?[]:oi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=ii(t,n,i);return e.top=jn(r.top,e.top),e.right=An(r.right,e.right),e.bottom=An(r.bottom,e.bottom),e.left=jn(r.left,e.left),e},ii(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function ci(e){let{width:t,height:n}=Ur(e);return{width:t,height:n}}function li(e,t,n){let r=xr(t),i=vr(t),a=n===`fixed`,o=Yr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Pn(0);function l(){c.x=Xr(i)}if(r||!r&&!a)if((gr(t)!==`body`||wr(i))&&(s=Rr(t)),r){let e=Yr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Zr(i,s):Pn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function ui(e){return Lr(e).position===`static`}function di(e,t){if(!xr(e)||Lr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return vr(e)===n&&(n=n.ownerDocument.body),n}function fi(e,t){let n=_r(e);if(Or(e))return n;if(!xr(e)){let t=zr(e);for(;t&&!Ir(t);){if(br(t)&&!ui(t))return t;t=zr(t)}return n}let r=di(e,t);for(;r&&Er(r)&&ui(r);)r=di(r,t);return r&&Ir(r)&&ui(r)&&!Mr(r)?n:r||Nr(e)||n}const pi=async function(e){let t=this.getOffsetParent||fi,n=this.getDimensions,r=await n(e.floating);return{reference:li(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function mi(e){return Lr(e).direction===`rtl`}const hi={convertOffsetParentRelativeRectToViewportRelativeRect:Qr,getDocumentElement:vr,getClippingRect:si,getOffsetParent:fi,getElementRects:pi,getClientRects:$r,getDimensions:ci,getScale:Gr,isElement:br,isRTL:mi};function gi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function _i(e,t){let n=null,r,i=vr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Nn(d),h=Nn(i.clientWidth-(u+f)),g=Nn(i.clientHeight-(d+p)),_=Nn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:jn(0,An(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!gi(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function vi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Wr(e),u=i||a?[...l?Vr(l):[],...Vr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?_i(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Yr(e):null;c&&g();function g(){let t=Yr(e);h&&!gi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const yi=fr,bi=pr,xi=lr,Si=mr,Ci=cr,wi=(e,t,n)=>{let r=new Map,i={platform:hi,...n},a={...i.platform,_c:r};return or(e,t,{...i,platform:a})};function Ti(e){return Di(e)}function Ei(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Di(e){for(let t=e;t;t=Ei(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ei(e);t;t=Ei(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Mr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Oi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var ki=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),Ai=class extends _t{constructor(){super(...arguments),this.localize=new Lt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=ki,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Oi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=vi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[yi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Si({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Oi(this.anchor)&&this.boundary===`scroll`&&(t=Vr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(xi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(bi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Si({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ci({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>hi.getOffsetParent(e,Ti):hi.getOffsetParent;wi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...hi,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new On)}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Vt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Vt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};Ai.css=kn,T([dt(`.popup`)],Ai.prototype,`popup`,2),T([dt(`.arrow`)],Ai.prototype,`arrowEl`,2),T([E({attribute:!1,type:Boolean})],Ai.prototype,`SUPPORTS_POPOVER`,2),T([E()],Ai.prototype,`anchor`,2),T([E({type:Boolean,reflect:!0})],Ai.prototype,`active`,2),T([E({reflect:!0})],Ai.prototype,`placement`,2),T([E()],Ai.prototype,`boundary`,2),T([E({type:Number})],Ai.prototype,`distance`,2),T([E({type:Number})],Ai.prototype,`skidding`,2),T([E({type:Boolean})],Ai.prototype,`arrow`,2),T([E({attribute:`arrow-placement`})],Ai.prototype,`arrowPlacement`,2),T([E({attribute:`arrow-padding`,type:Number})],Ai.prototype,`arrowPadding`,2),T([E({type:Boolean})],Ai.prototype,`flip`,2),T([E({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],Ai.prototype,`flipFallbackPlacements`,2),T([E({attribute:`flip-fallback-strategy`})],Ai.prototype,`flipFallbackStrategy`,2),T([E({type:Object})],Ai.prototype,`flipBoundary`,2),T([E({attribute:`flip-padding`,type:Number})],Ai.prototype,`flipPadding`,2),T([E({type:Boolean})],Ai.prototype,`shift`,2),T([E({type:Object})],Ai.prototype,`shiftBoundary`,2),T([E({attribute:`shift-padding`,type:Number})],Ai.prototype,`shiftPadding`,2),T([E({attribute:`auto-size`})],Ai.prototype,`autoSize`,2),T([E()],Ai.prototype,`sync`,2),T([E({type:Object})],Ai.prototype,`autoSizeBoundary`,2),T([E({attribute:`auto-size-padding`,type:Number})],Ai.prototype,`autoSizePadding`,2),T([E({attribute:`hover-bridge`,type:Boolean})],Ai.prototype,`hoverBridge`,2),Ai=T([ot(`wa-popup`)],Ai);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ji=t({default:()=>Ai}),Mi=m`
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ni(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function Pi(e,t,n=`vertical`,r=`smooth`){let i=Ni(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fi=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Ii=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Li=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Ri=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},zi=[];function Bi(e){Vi(e),zi.push(e)}function Vi(e){for(let t=zi.length-1;t>=0;t--)if(zi[t]===e){zi.splice(t,1);break}}function Hi(e){return zi.length>0&&zi[zi.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ui=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Wi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}function Gi(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/var Ki=class extends Bt{constructor(e){if(super(e),this.it=Ae,e.type!==Rt.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===Ae||e==null)return this._t=void 0,this.it=e;if(e===ke)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ki.directiveName=`unsafeHTML`,Ki.resultType=1;const qi=zt(Ki);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var O=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.cachedOptions=null,this.hasSlotController=new Ct(this,`hint`,`label`),this.localize=new Lt(this),this.selectionOrder=new Map,this.typeToSelectString=``,this.slotChangePending=!1,this.displayLabel=``,this.selectedOptions=[],this.name=``,this._defaultValue=null,this.size=`m`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.withClear=!1,this.open=!1,this.appearance=`outlined`,this.pill=!1,this.label=``,this.placement=`bottom`,this.hint=``,this.withLabel=!1,this.withHint=!1,this.required=!1,this.getTag=e=>C`
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
      `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`[part~="clear-button"]`)!==null,r=t.closest(`wa-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&Hi(this)&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.hasInteracted=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key?.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.label.toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}static get validators(){let e=[Ui({validationElement:Object.assign(document.createElement(`select`),{required:!0})})];return[...super.validators,...e]}get validationTarget(){return this.valueInput}set defaultValue(e){this._defaultValue=this.convertDefaultValue(e)}get defaultValue(){return this.convertDefaultValue(this._defaultValue)}rawValuesEqual(e,t){return e==null&&t==null?!0:e==null||t==null||e.length!==t.length?!1:e.every((e,n)=>e===t[n])}convertDefaultValue(e){return!(this.multiple||this.hasAttribute(`multiple`))&&Array.isArray(e)&&(e=e[0]),e}set value(e){let t=this.value;e instanceof FormData&&(e=e.getAll(this.name)),e!=null&&!Array.isArray(e)&&(e=[e]);let n=this._value;this._value=e??null,this.rawValuesEqual(n,this._value)||(this.valueHasChanged=!0,this.requestUpdate(`value`,t))}get value(){let e=this._value??this.defaultValue??null;e!=null&&(e=Array.isArray(e)?e:[e]),this.optionValues=new Set(this.getAllOptions().filter(e=>!e.disabled).map(e=>e.value));let t=e;return e!=null&&(t=e.filter(e=>this.optionValues.has(e)),t=this.multiple?t:t[0],t??=null),t}handleSizeChange(){St(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.processSlotChange(),this.open=!1}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.cachedOptions=null}updateDefaultValue(){let e=this.getAllOptions().filter(e=>e.hasAttribute(`selected`)||e.defaultSelected);if(e.length>0){let t=e.map(e=>e.value);this._defaultValue=this.multiple?t:t[0]}this.hasAttribute(`value`)&&(this._defaultValue=this.getAttribute(`value`)||null)}addOpenListeners(){document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),Bi(this),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn)}removeOpenListeners(){document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),Vi(this),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn)}handleFocus(){this.displayInput.setSelectionRange(0,0)}handleLabelClick(){this.displayInput.focus()}handleComboboxClick(e){e.preventDefault()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`wa-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.stopPropagation(),this.handleDocumentKeyDown(e)}handleClearClick(e){e.stopPropagation(),this.hasInteracted=!0,this.valueHasChanged=!0,this.value!==null&&(this.displayLabel=``,this.selectionOrder.clear(),this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.dispatchEvent(new n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`wa-option`);t&&!t.disabled&&(this.hasInteracted=!0,this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.requestUpdate(`value`),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){this.slotChangePending||(this.slotChangePending=!0,queueMicrotask(()=>{this.slotChangePending=!1,this.processSlotChange()}))}processSlotChange(){if(customElements.get(`wa-option`)||customElements.whenDefined(`wa-option`).then(()=>this.handleDefaultSlotChange()),this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleDefaultSlotChange()});return}this.cachedOptions=null;let e=this.getAllOptions();this.updateDefaultValue();let t=this.value;if(t==null||!this.valueHasChanged&&!this.hasInteracted){this.selectionChanged();return}Array.isArray(t)||(t=[t]);let n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n)}handleTagRemove(e,t){if(e.stopPropagation(),this.disabled)return;this.hasInteracted=!0,this.valueHasChanged=!0;let n=t;if(!n){let t=e.target.closest(`wa-tag[data-value]`);if(t){let e=t.dataset.value;n=this.selectedOptions.find(t=>t.value===e)}}n&&(this.toggleOptionSelection(n,!1),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}))}getAllOptions(){return this.cachedOptions?this.cachedOptions:this?.querySelectorAll?(this.cachedOptions=[...this.querySelectorAll(`wa-option`)],this.cachedOptions):[]}getFirstOption(){return this.querySelector(`wa-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus({preventScroll:!0}),this.open&&!this.listbox.hidden&&Pi(e,this.listbox,`vertical`,`auto`))}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>{n.includes(e)||(e.selected=!1)}),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){let e=this.getAllOptions().filter(e=>{if(!this.hasInteracted&&!this.valueHasChanged){let t=this.defaultValue,n=Array.isArray(t)?t:[t];return e.hasAttribute(`selected`)||e.defaultSelected||e.selected||n?.includes(e.value)}return e.selected}),t=new Set(e.map(e=>e.value));for(let e of this.selectionOrder.keys())t.has(e)||this.selectionOrder.delete(e);let n=(this.selectionOrder.size>0?Math.max(...this.selectionOrder.values()):-1)+1;for(let t of e)this.selectionOrder.has(t.value)||this.selectionOrder.set(t.value,n++);this.selectedOptions=e.sort((e,t)=>(this.selectionOrder.get(e.value)??0)-(this.selectionOrder.get(t.value)??0));let r=new Set(this.selectedOptions.map(e=>e.value));if(r.size>0||this._value){let e=this._value;if(this._value==null){let e=this.defaultValue??[];this._value=Array.isArray(e)?e:[e]}this._value=this._value?.filter(e=>!this.optionValues?.has(e))??null,this._value?.unshift(...r),this.requestUpdate(`value`,e)}this.multiple?this.placeholder&&!this.value?.length?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length):this.displayLabel=this.selectedOptions[0]?.label??``,this.updateComplete.then(()=>{this.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return n?typeof n==`string`?qi(n):n:null}else if(t===this.maxOptionsVisible)return C`
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
        `;return null})}updated(e){super.updated(e),(e.has(`value`)||e.has(`displayLabel`))&&this.customStates.set(`blank`,!this.value&&!this.displayLabel)}handleDisabledChange(){this.disabled&&this.open&&(this.open=!1)}handleValueChange(){let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value],n=e.filter(e=>t.includes(e.value));this.setSelectedOptions(n),this.updateValidity()}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption());let e=new Fi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)}),await Gi(this.popup.popup,`show`),this.currentOption&&Pi(this.currentOption,this.listbox,`vertical`,`auto`),this.dispatchEvent(new Ri)}else{let e=new Ii;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.removeOpenListeners(),await Gi(this.popup.popup,`hide`),this.listbox.hidden=!0,this.popup.active=!1,this.dispatchEvent(new Li)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Wi(this,`wa-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Wi(this,`wa-after-hide`)}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}formResetCallback(){this.selectionOrder.clear(),this.value=this.defaultValue,super.formResetCallback(),this.handleValueChange(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=(this.hasUpdated||!1)&&this.withClear&&!this.disabled&&(this.displayLabel||this.value&&this.value.length>0);return C`
      <div
        part="form-control"
        class=${Vt({"form-control":!0,"form-control-has-label":n})}
      >
        <label
          id="label"
          part="form-control-label label"
          class=${Vt({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <wa-popup
            class=${Vt({select:!0,open:this.open,disabled:this.disabled,enabled:!this.disabled,multiple:this.multiple})}
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
              ${this.multiple&&this.hasUpdated?C`<div part="tags" class="tags" @wa-remove=${this.handleTagRemove}>${this.tags}</div>`:``}

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

              ${i?C`
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
          class=${Vt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </div>
    `}};O.css=[Mi,Xe,wt],T([dt(`.select`)],O.prototype,`popup`,2),T([dt(`.combobox`)],O.prototype,`combobox`,2),T([dt(`.display-input`)],O.prototype,`displayInput`,2),T([dt(`.value-input`)],O.prototype,`valueInput`,2),T([dt(`.listbox`)],O.prototype,`listbox`,2),T([lt()],O.prototype,`displayLabel`,2),T([lt()],O.prototype,`currentOption`,2),T([lt()],O.prototype,`selectedOptions`,2),T([E({reflect:!0})],O.prototype,`name`,2),T([E({attribute:!1})],O.prototype,`defaultValue`,1),T([E({attribute:`value`,reflect:!1})],O.prototype,`value`,1),T([E({reflect:!0})],O.prototype,`size`,2),T([Tt(`size`)],O.prototype,`handleSizeChange`,1),T([E()],O.prototype,`placeholder`,2),T([E({type:Boolean,reflect:!0})],O.prototype,`multiple`,2),T([E({attribute:`max-options-visible`,type:Number})],O.prototype,`maxOptionsVisible`,2),T([E({type:Boolean})],O.prototype,`disabled`,2),T([E({attribute:`with-clear`,type:Boolean})],O.prototype,`withClear`,2),T([E({type:Boolean,reflect:!0})],O.prototype,`open`,2),T([E({reflect:!0})],O.prototype,`appearance`,2),T([E({type:Boolean,reflect:!0})],O.prototype,`pill`,2),T([E()],O.prototype,`label`,2),T([E({reflect:!0})],O.prototype,`placement`,2),T([E({attribute:`hint`})],O.prototype,`hint`,2),T([E({attribute:`with-label`,type:Boolean})],O.prototype,`withLabel`,2),T([E({attribute:`with-hint`,type:Boolean})],O.prototype,`withHint`,2),T([E({type:Boolean,reflect:!0})],O.prototype,`required`,2),T([E({attribute:!1})],O.prototype,`getTag`,2),T([Tt(`disabled`,{waitUntilFirstUpdate:!0})],O.prototype,`handleDisabledChange`,1),T([Tt(`value`,{waitUntilFirstUpdate:!0})],O.prototype,`handleValueChange`,1),T([Tt(`open`,{waitUntilFirstUpdate:!0})],O.prototype,`handleOpenChange`,1),O=T([ot(`wa-select`)],O),O.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ji=class extends Event{constructor(){super(`wa-remove`,{bubbles:!0,cancelable:!1,composed:!0})}},Yi=m`
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
`,Xi=m`
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
`,Zi=class extends _t{constructor(){super(...arguments),this.localize=new Lt(this),this.variant=`neutral`,this.appearance=`filled-outlined`,this.size=`m`,this.pill=!1,this.withRemove=!1}handleSizeChange(){St(this.localName,this.size)}handleRemoveClick(){this.dispatchEvent(new Ji)}render(){return C`
      <slot part="content" class="content"></slot>

      ${this.withRemove?C`
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
    `}};Zi.css=[Yi,Xi,wt],T([E({reflect:!0})],Zi.prototype,`variant`,2),T([E({reflect:!0})],Zi.prototype,`appearance`,2),T([E({reflect:!0})],Zi.prototype,`size`,2),T([Tt(`size`)],Zi.prototype,`handleSizeChange`,1),T([E({type:Boolean,reflect:!0})],Zi.prototype,`pill`,2),T([E({attribute:`with-remove`,type:Boolean})],Zi.prototype,`withRemove`,2),Zi=T([ot(`wa-tag`)],Zi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qi=m`
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
const $i=Symbol.for(``),ea=e=>{if(e?.r===$i)return e?._$litStatic$},ta=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:$i}),na=new Map,ra=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=ea(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=na.get(e))===void 0&&(o.raw=o,na.set(e,t=o)),n=s}return e(t,...n)})(C);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var k=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ct(this,`[default]`,`start`,`end`),this.localize=new Lt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,Ze()]}handleSizeChange(){St(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new Qe)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?ta`a`:ta`button`;return ra`
      <${t}
        part="base button"
        class=${Vt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ht(e?void 0:this.disabled)}
        type=${Ht(e?void 0:this.type)}
        title=${this.title}
        name=${Ht(e?void 0:this.name)}
        value=${Ht(e?void 0:this.value)}
        href=${Ht(e?this.href:void 0)}
        target=${Ht(e?this.target:void 0)}
        download=${Ht(e?this.download:void 0)}
        rel=${Ht(e&&this.rel?this.rel:void 0)}
        role=${Ht(e?void 0:`button`)}
        aria-disabled=${Ht(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?ra`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?ra`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};k.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},k.css=[Qi,Xi,wt],T([dt(`.button`)],k.prototype,`button`,2),T([dt(`slot:not([name])`)],k.prototype,`labelSlot`,2),T([lt()],k.prototype,`invalid`,2),T([lt()],k.prototype,`isIconButton`,2),T([E()],k.prototype,`title`,2),T([E({reflect:!0})],k.prototype,`variant`,2),T([E({reflect:!0})],k.prototype,`appearance`,2),T([E({reflect:!0})],k.prototype,`size`,2),T([Tt(`size`)],k.prototype,`handleSizeChange`,1),T([E({attribute:`with-caret`,type:Boolean,reflect:!0})],k.prototype,`withCaret`,2),T([E({attribute:`with-start`,type:Boolean})],k.prototype,`withStart`,2),T([E({attribute:`with-end`,type:Boolean})],k.prototype,`withEnd`,2),T([E({type:Boolean})],k.prototype,`disabled`,2),T([E({type:Boolean,reflect:!0})],k.prototype,`loading`,2),T([E({type:Boolean,reflect:!0})],k.prototype,`pill`,2),T([E()],k.prototype,`type`,2),T([E({reflect:!0})],k.prototype,`name`,2),T([E({reflect:!0})],k.prototype,`value`,2),T([E({reflect:!0})],k.prototype,`href`,2),T([E()],k.prototype,`target`,2),T([E()],k.prototype,`rel`,2),T([E()],k.prototype,`download`,2),T([E({attribute:`formaction`})],k.prototype,`formAction`,2),T([E({attribute:`formenctype`})],k.prototype,`formEnctype`,2),T([E({attribute:`formmethod`})],k.prototype,`formMethod`,2),T([E({attribute:`formnovalidate`,type:Boolean})],k.prototype,`formNoValidate`,2),T([E({attribute:`formtarget`})],k.prototype,`formTarget`,2),T([Tt(`disabled`,{waitUntilFirstUpdate:!0})],k.prototype,`handleDisabledChange`,1),T([Tt(`href`)],k.prototype,`handleHrefChange`,1),T([Tt(`loading`,{waitUntilFirstUpdate:!0})],k.prototype,`handleLoadingChange`,1),k=T([ot(`wa-button`)],k),k.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ia=m`
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
`,aa=class extends _t{constructor(){super(...arguments),this.localize=new Lt(this)}render(){return C`
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
    `}};aa.css=ia,aa=T([ot(`wa-spinner`)],aa);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var oa=t({default:()=>O}),sa=m`
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
`;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*ca(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*ca(e.shadowRoot.activeElement)))}var la=typeof window<`u`&&`ontouchstart`in window,ua=class{constructor(e,t){this.isActive=!1,this.isDragging=!1,this.handleDragStart=e=>{let t=`touches`in e?e.touches[0].clientX:e.clientX,n=`touches`in e?e.touches[0].clientY:e.clientY;this.isDragging||!la&&e.buttons>1||(this.isDragging=!0,document.addEventListener(`pointerup`,this.handleDragStop),document.addEventListener(`pointermove`,this.handleDragMove),document.addEventListener(`pointercancel`,this.handleDragStop),document.addEventListener(`touchend`,this.handleDragStop),document.addEventListener(`touchmove`,this.handleDragMove),document.addEventListener(`touchcancel`,this.handleDragStop),this.options.start(t,n))},this.handleDragStop=e=>{let t=`changedTouches`in e?e.changedTouches[0].clientX:e.clientX,n=`changedTouches`in e?e.changedTouches[0].clientY:e.clientY;this.isDragging=!1,document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`pointercancel`,this.handleDragStop),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),document.removeEventListener(`touchcancel`,this.handleDragStop),this.options.stop(t,n)},this.handleDragMove=e=>{let t=`touches`in e?e.touches[0].clientX:e.clientX,n=`touches`in e?e.touches[0].clientY:e.clientY;window.getSelection()?.removeAllRanges(),this.options.move(t,n)},this.element=e,this.options={start:()=>void 0,stop:()=>void 0,move:()=>void 0,...t},this.start()}start(){this.isActive||=(this.element.addEventListener(`pointerdown`,this.handleDragStart),la&&this.element.addEventListener(`touchstart`,this.handleDragStart),!0)}stop(){document.removeEventListener(`pointerup`,this.handleDragStop),document.removeEventListener(`pointermove`,this.handleDragMove),document.removeEventListener(`pointercancel`,this.handleDragStop),document.removeEventListener(`touchend`,this.handleDragStop),document.removeEventListener(`touchmove`,this.handleDragMove),document.removeEventListener(`touchcancel`,this.handleDragStop),this.element.removeEventListener(`pointerdown`,this.handleDragStart),la&&this.element.removeEventListener(`touchstart`,this.handleDragStart),this.isActive=!1,this.isDragging=!1}toggle(e){(e===void 0?!this.isActive:e)?this.start():this.stop()}};let da=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function fa(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function pa(e=``){return`${e}${da()}`}
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ma=`important`;``+ma;const ha=zt(class extends Bt{constructor(e){if(super(e),e.type!==Rt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?ma:``):n[e]=r}}return ke}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function ga(e,t,n){let r=(e-t)/n;return Math.abs(r-Math.round(r))>1e-9}var _a=()=>({observedAttributes:[`min`,`max`,`step`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]},n=(e,t,n,r)=>{if(typeof document>`u`)return``;let i=document.createElement(`input`);return i.type=`range`,i.min=String(t),i.max=String(n),i.step=String(r),i.value=String(e),i.checkValidity(),i.validationMessage};if(e.isRange){let r=e.minValue,i=e.maxValue;if(r<e.min)return t.isValid=!1,t.invalidKeys.push(`rangeUnderflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(i>e.max)return t.isValid=!1,t.invalidKeys.push(`rangeOverflow`),t.message=n(i,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;if(e.step&&e.step!==1){let a=ga(r,e.min,e.step),o=ga(i,e.min,e.step);if(a||o)return t.isValid=!1,t.invalidKeys.push(`stepMismatch`),t.message=n(a?r:i,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,t}}else{let r=e.value;if(r<e.min)return t.isValid=!1,t.invalidKeys.push(`rangeUnderflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be greater than or equal to ${e.min}.`,t;if(r>e.max)return t.isValid=!1,t.invalidKeys.push(`rangeOverflow`),t.message=n(r,e.min,e.max,e.step)||`Value must be less than or equal to ${e.max}.`,t;if(e.step&&e.step!==1&&ga(r,e.min,e.step))return t.isValid=!1,t.invalidKeys.push(`stepMismatch`),t.message=n(r,e.min,e.max,e.step)||`Value must be a multiple of ${e.step}.`,t}return t}}),A=class extends yt{constructor(){super(...arguments),this.draggableThumbMin=null,this.draggableThumbMax=null,this.hasSlotController=new Ct(this,`hint`,`label`),this.localize=new Lt(this),this.activeThumb=null,this.lastTrackPosition=null,this.label=``,this.hint=``,this.minValue=0,this.maxValue=50,this.defaultValue=this.getAttribute(`value`)==null?this.minValue:Number(this.getAttribute(`value`)),this._value=null,this.range=!1,this.disabled=!1,this.readonly=!1,this.orientation=`horizontal`,this.size=`m`,this.min=0,this.max=100,this.step=1,this.tooltipDistance=8,this.tooltipPlacement=`top`,this.withMarkers=!1,this.withTooltip=!1,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,_a()]}get focusableAnchor(){return this.isRange&&this.thumbMin||this.slider}get validationTarget(){return this.focusableAnchor}get value(){return this.valueHasChanged?fa(this._value??this.minValue??0,this.min,this.max):fa(this._value??this.defaultValue,this.min,this.max)}set value(e){e=Number(e)??this.minValue,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get isRange(){return this.range}handleSizeChange(){St(this.localName,this.size)}firstUpdated(e){super.firstUpdated(e),this.isRange?(this.draggableThumbMin=new ua(this.thumbMin,{start:()=>{this.activeThumb=`min`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.minValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`min`)},stop:()=>{this.minValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableThumbMax=new ua(this.thumbMax,{start:()=>{this.activeThumb=`max`,this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.maxValue,this.customStates.set(`dragging`,!0),this.showRangeTooltips()},move:(e,t)=>{this.setThumbValueFromCoordinates(e,t,`max`)},stop:()=>{this.maxValue!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}}),this.draggableTrack=new ua(this.track,{start:(e,t)=>{if(this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.activeThumb)this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue;else{let n=this.getValueFromCoordinates(e,t),r=Math.abs(n-this.minValue),i=Math.abs(n-this.maxValue);if(r===i)if(n>this.maxValue)this.activeThumb=`max`;else if(n<this.minValue)this.activeThumb=`min`;else{let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,i=r?t:e,a=this.lastTrackPosition||i;this.lastTrackPosition=i,this.activeThumb=i>a!==n&&!r||i<a&&r?`max`:`min`}else this.activeThumb=r<=i?`min`:`max`;this.valueWhenDraggingStarted=this.activeThumb===`min`?this.minValue:this.maxValue}this.customStates.set(`dragging`,!0),this.setThumbValueFromCoordinates(e,t,this.activeThumb),this.showRangeTooltips()},move:(e,t)=>{this.activeThumb&&this.setThumbValueFromCoordinates(e,t,this.activeThumb)},stop:()=>{this.activeThumb&&(this.activeThumb===`min`?this.minValue:this.maxValue)!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideRangeTooltips(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0,this.activeThumb=null}})):this.draggableTrack=new ua(this.slider,{start:(e,t)=>{this.trackBoundingClientRect=this.track.getBoundingClientRect(),this.valueWhenDraggingStarted=this.value,this.customStates.set(`dragging`,!0),this.setValueFromCoordinates(e,t),this.showTooltip()},move:(e,t)=>{this.setValueFromCoordinates(e,t)},stop:()=>{this.value!==this.valueWhenDraggingStarted&&(this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0),this.hideTooltip(),this.customStates.set(`dragging`,!1),this.valueWhenDraggingStarted=void 0}})}willUpdate(e){this.isRange&&(e.has(`minValue`)||e.has(`maxValue`)||e.has(`min`)||e.has(`max`))&&(this.minValue=fa(this.minValue,this.min,this.maxValue),this.maxValue=fa(this.maxValue,this.minValue,this.max)),super.willUpdate(e)}updated(e){if(this.isRange&&(e.has(`minValue`)||e.has(`maxValue`))&&this.updateFormValue(),e.has(`disabled`)||e.has(`readonly`)){let e=!(this.disabled||this.readonly);this.isRange&&(this.draggableThumbMin&&this.draggableThumbMin.toggle(e),this.draggableThumbMax&&this.draggableThumbMax.toggle(e)),this.draggableTrack&&this.draggableTrack.toggle(e)}super.updated(e)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.isRange?(this.minValue=parseFloat(this.getAttribute(`min-value`)??String(this.min)),this.maxValue=parseFloat(this.getAttribute(`max-value`)??String(this.max))):(this._value=null,this.defaultValue=this.defaultValue??parseFloat(this.getAttribute(`value`)??String(this.min))),this.valueHasChanged=!1,this.hasInteracted=!1,super.formResetCallback()}clampAndRoundToStep(e){let t=(String(this.step).split(`.`)[1]||``).replace(/0+$/g,``).length,n=Number(this.step),r=Number(this.min),i=Number(this.max);return e=Math.round(e/n)*n,e=fa(e,r,i),parseFloat(e.toFixed(t))}getPercentageFromValue(e){return(e-this.min)/(this.max-this.min)*100}getValueFromCoordinates(e,t){let n=this.localize.dir()===`rtl`,r=this.orientation===`vertical`,{top:i,right:a,bottom:o,left:s,height:c,width:l}=this.trackBoundingClientRect,u=r?t:e,d=r?{start:i,end:o,size:c}:{start:s,end:a,size:l},f=(r||n?d.end-u:u-d.start)/d.size;return this.clampAndRoundToStep(this.min+(this.max-this.min)*f)}handleBlur(){this.isRange?requestAnimationFrame(()=>{let e=this.shadowRoot?.activeElement;e===this.thumbMin||e===this.thumbMax||this.hideRangeTooltips()}):this.hideTooltip(),this.customStates.set(`focused`,!1),this.dispatchEvent(new FocusEvent(`blur`,{bubbles:!0,composed:!0}))}handleFocus(e){let t=e.target;this.isRange?(t===this.thumbMin?this.activeThumb=`min`:t===this.thumbMax&&(this.activeThumb=`max`),this.showRangeTooltips()):this.showTooltip(),this.customStates.set(`focused`,!0),this.dispatchEvent(new FocusEvent(`focus`,{bubbles:!0,composed:!0}))}handleKeyDown(e){let t=this.localize.dir()===`rtl`,n=e.target;if(this.disabled||this.readonly||this.isRange&&(n===this.thumbMin?this.activeThumb=`min`:n===this.thumbMax&&(this.activeThumb=`max`),!this.activeThumb))return;let i=this.isRange?this.activeThumb===`min`?this.minValue:this.maxValue:this.value,a=i;switch(e.key){case`ArrowUp`:case t?`ArrowLeft`:`ArrowRight`:e.preventDefault(),a=this.clampAndRoundToStep(i+this.step);break;case`ArrowDown`:case t?`ArrowRight`:`ArrowLeft`:e.preventDefault(),a=this.clampAndRoundToStep(i-this.step);break;case`Home`:e.preventDefault(),a=this.isRange&&this.activeThumb===`min`?this.min:this.isRange?this.minValue:this.min;break;case`End`:e.preventDefault(),a=this.isRange&&this.activeThumb===`max`?this.max:this.isRange?this.maxValue:this.max;break;case`PageUp`:e.preventDefault();let n=Math.max(i+(this.max-this.min)/10,i+this.step);a=this.clampAndRoundToStep(n);break;case`PageDown`:e.preventDefault();let o=Math.min(i-(this.max-this.min)/10,i-this.step);a=this.clampAndRoundToStep(o);break;case`Enter`:r(e,this);return}a!==i&&(this.isRange?(this.activeThumb===`min`?a>this.maxValue?(this.maxValue=a,this.minValue=a):this.minValue=Math.max(this.min,a):a<this.minValue?(this.minValue=a,this.maxValue=a):this.maxValue=Math.min(this.max,a),this.updateFormValue()):this.value=fa(a,this.min,this.max),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),this.hasInteracted=!0)}handleLabelPointerDown(e){e.preventDefault(),this.disabled||(this.isRange?this.thumbMin?.focus():this.slider.focus())}setValueFromCoordinates(e,t){let n=this.value;this.value=this.getValueFromCoordinates(e,t),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})}setThumbValueFromCoordinates(e,t,n){let r=this.getValueFromCoordinates(e,t),i=n===`min`?this.minValue:this.maxValue;n===`min`?r>this.maxValue?(this.maxValue=r,this.minValue=r):this.minValue=Math.max(this.min,r):r<this.minValue?(this.minValue=r,this.maxValue=r):this.maxValue=Math.min(this.max,r),i!==(n===`min`?this.minValue:this.maxValue)&&(this.updateFormValue(),this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}showTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!0)}hideTooltip(){this.withTooltip&&this.tooltip&&(this.tooltip.open=!1)}showRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);this.activeThumb===`min`?(e&&(e.open=!0),t&&(t.open=!1)):this.activeThumb===`max`&&(t&&(t.open=!0),e&&(e.open=!1))}hideRangeTooltips(){if(!this.withTooltip)return;let e=this.shadowRoot?.getElementById(`tooltip-thumb-min`),t=this.shadowRoot?.getElementById(`tooltip-thumb-max`);e&&(e.open=!1),t&&(t.open=!1)}updateFormValue(e){if(this.isRange){let e=new FormData;e.append(this.name||``,String(this.minValue)),e.append(this.name||``,String(this.maxValue)),this.setValue(e,e);return}super.updateFormValue(e)}focus(){this.isRange?this.thumbMin?.focus():this.slider.focus()}blur(){if(this.isRange){for(let e of ca())if(e===this.thumbMin){this.thumbMin.blur();break}else if(e===this.thumbMax){this.thumbMax.blur();break}}else this.slider.blur()}stepDown(){this.isRange?(this.minValue=fa(this.clampAndRoundToStep(this.minValue-this.step),this.min,this.maxValue),this.updateFormValue()):this.value=this.clampAndRoundToStep(this.value-this.step)}stepUp(){this.isRange?(this.maxValue=fa(this.clampAndRoundToStep(this.maxValue+this.step),this.minValue,this.max),this.updateFormValue()):this.value=this.clampAndRoundToStep(this.value+this.step)}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.hasSlotController.test(`reference`),a=Vt({xs:this.size===`xs`,s:this.size===`s`||this.size===`small`,m:this.size===`m`||this.size===`medium`,l:this.size===`l`||this.size===`large`,xl:this.size===`xl`,small:this.size===`small`||this.size===`s`,medium:this.size===`medium`||this.size===`m`,large:this.size===`large`||this.size===`l`,horizontal:this.orientation===`horizontal`,vertical:this.orientation===`vertical`,disabled:this.disabled}),o=[];if(this.withMarkers)for(let e=this.min;e<=this.max;e+=this.step)o.push(this.getPercentageFromValue(e));let s=C`
      <label
        id="label"
        part="label"
        for=${this.isRange?`thumb-min`:`text-box`}
        class=${Vt({vh:!n,"has-label":n})}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>
    `,c=C`
      <div
        id="hint"
        part="hint"
        class=${Vt({"has-slotted":r})}
      >
        <slot name="hint">${this.hint}</slot>
      </div>
    `,l=this.withMarkers?C`
          <div id="markers" part="markers">
            ${o.map(e=>C`<span part="marker" class="marker" style=${ha({"--position":`${e}%`})}></span>`)}
          </div>
        `:``,u=i?C`
          <div id="references" part="references" aria-hidden="true">
            <slot name="reference"></slot>
          </div>
        `:``,d=(e,t)=>this.withTooltip?C`
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
          `:``;if(this.isRange){let e=fa(this.getPercentageFromValue(this.minValue),0,100),t=fa(this.getPercentageFromValue(this.maxValue),0,100);return C`
        ${s}

        <div id="slider" part="slider" class=${a}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style=${ha({"--start":`${Math.min(e,t)}%`,"--end":`${Math.max(e,t)}%`})}
            ></div>

            ${l}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style=${ha({"--position":`${e}%`})}
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
              style=${ha({"--position":`${t}%`})}
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
      `}else{let e=fa(this.getPercentageFromValue(this.value),0,100),t=fa(this.getPercentageFromValue(typeof this.indicatorOffset==`number`?this.indicatorOffset:this.min),0,100);return C`
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
              style=${ha({"--start":`${t}%`,"--end":`${e}%`})}
            ></div>

            ${l}
            <span id="thumb" part="thumb" style=${ha({"--position":`${e}%`})}></span>
          </div>

          ${u} ${c}
        </div>

        ${d(`thumb`,this.value)}
      `}}};A.formAssociated=!0,A.observeSlots=!0,A.css=[wt,Xe,sa],T([dt(`#slider`)],A.prototype,`slider`,2),T([dt(`#thumb`)],A.prototype,`thumb`,2),T([dt(`#thumb-min`)],A.prototype,`thumbMin`,2),T([dt(`#thumb-max`)],A.prototype,`thumbMax`,2),T([dt(`#track`)],A.prototype,`track`,2),T([dt(`#tooltip`)],A.prototype,`tooltip`,2),T([E()],A.prototype,`label`,2),T([E({attribute:`hint`})],A.prototype,`hint`,2),T([E({reflect:!0})],A.prototype,`name`,2),T([E({type:Number,attribute:`min-value`})],A.prototype,`minValue`,2),T([E({type:Number,attribute:`max-value`})],A.prototype,`maxValue`,2),T([E({attribute:`value`,reflect:!0,type:Number})],A.prototype,`defaultValue`,2),T([lt()],A.prototype,`value`,1),T([E({type:Boolean,reflect:!0})],A.prototype,`range`,2),T([E({type:Boolean})],A.prototype,`disabled`,2),T([E({type:Boolean,reflect:!0})],A.prototype,`readonly`,2),T([E({reflect:!0})],A.prototype,`orientation`,2),T([E({reflect:!0})],A.prototype,`size`,2),T([Tt(`size`)],A.prototype,`handleSizeChange`,1),T([E({attribute:`indicator-offset`,type:Number})],A.prototype,`indicatorOffset`,2),T([E({type:Number})],A.prototype,`min`,2),T([E({type:Number})],A.prototype,`max`,2),T([E({type:Number})],A.prototype,`step`,2),T([E({type:Boolean})],A.prototype,`autofocus`,2),T([E({attribute:`tooltip-distance`,type:Number})],A.prototype,`tooltipDistance`,2),T([E({attribute:`tooltip-placement`,reflect:!0})],A.prototype,`tooltipPlacement`,2),T([E({attribute:`with-markers`,type:Boolean})],A.prototype,`withMarkers`,2),T([E({attribute:`with-tooltip`,type:Boolean})],A.prototype,`withTooltip`,2),T([E({attribute:`with-label`,type:Boolean})],A.prototype,`withLabel`,2),T([E({attribute:`with-hint`,type:Boolean})],A.prototype,`withHint`,2),T([E({attribute:!1})],A.prototype,`valueFormatter`,2),A=T([ot(`wa-slider`)],A);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var va=m`
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
function ya(e,t){for(;t;){if(t===e)return!0;t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}return!1}var ba=class extends _t{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{if(this.hasTrigger(`click`)){this.open?this.hide():this.show();return}this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&Hi(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor&&ya(this.anchor,t)),r=!!(t&&ya(this,t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=pa(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Vi(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new Fi;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),Bi(this)),this.body.hidden=!1,this.popup.active=!0,await Gi(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Ri)}else{let e=new Ii;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Vi(this),await Gi(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Li)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Wi(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Wi(this,`wa-after-hide`)}render(){return C`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Vt({tooltip:!0,"tooltip-open":this.open})}
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
    `}};ba.css=va,ba.dependencies={"wa-popup":Ai},T([dt(`slot:not([name])`)],ba.prototype,`defaultSlot`,2),T([dt(`.body`)],ba.prototype,`body`,2),T([dt(`wa-popup`)],ba.prototype,`popup`,2),T([E()],ba.prototype,`placement`,2),T([E({type:Boolean,reflect:!0})],ba.prototype,`disabled`,2),T([E({type:Number})],ba.prototype,`distance`,2),T([E({type:Boolean,reflect:!0})],ba.prototype,`open`,2),T([E({type:Number})],ba.prototype,`skidding`,2),T([E({attribute:`show-delay`,type:Number})],ba.prototype,`showDelay`,2),T([E({attribute:`hide-delay`,type:Number})],ba.prototype,`hideDelay`,2),T([E()],ba.prototype,`trigger`,2),T([E({attribute:`without-arrow`,type:Boolean,reflect:!0})],ba.prototype,`withoutArrow`,2),T([E()],ba.prototype,`for`,2),T([lt()],ba.prototype,`anchor`,2),T([Tt(`open`,{waitUntilFirstUpdate:!0})],ba.prototype,`handleOpenChange`,1),T([Tt(`for`)],ba.prototype,`handleForChange`,1),T([Tt([`distance`,`placement`,`skidding`])],ba.prototype,`handleOptionsChange`,1),T([Tt(`disabled`)],ba.prototype,`handleDisabledChange`,1),ba=T([ot(`wa-tooltip`)],ba);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xa=t({default:()=>A}),Sa=m`
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
`,Ca=class extends yt{constructor(){super(...arguments),this.hasSlotController=new Ct(this,`hint`),this.localize=new Lt(this),this.title=``,this.name=null,this._value=this.getAttribute(`value`)??null,this.size=`m`,this.disabled=!1,this._checked=null,this.defaultChecked=this.hasAttribute(`checked`),this.required=!1,this.hint=``,this.withHint=!1}static get validators(){return[...super.validators,Ze()]}get value(){return this._value??`on`}set value(e){this._value=e}handleSizeChange(){St(this.localName,this.size)}get checked(){return this.valueHasChanged?!!this._checked:this._checked??this.defaultChecked}set checked(e){this._checked=!!e,this.valueHasChanged=!0}handleClick(){this.hasInteracted=!0,this.checked=!this.checked,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})}handleKeyDown(e){let t=this.localize.dir()===`rtl`;e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))})),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!t,this.updateComplete.then(()=>{this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0}))}))}willUpdate(e){super.willUpdate(e),(e.has(`value`)||e.has(`checked`)||e.has(`defaultChecked`)||e.has(`disabled`))&&this.handleValueOrCheckedChange()}handleValueOrCheckedChange(){if(this.didSSR&&!this.hasUpdated){this.updateComplete.then(()=>{this.handleValueOrCheckedChange()});return}this.setValue(this.checked?this.value:null,this._value),this.updateValidity()}handleStateChange(){this.hasUpdated&&(this.input.checked=this.checked),this.customStates.set(`checked`,this.checked),this.updateValidity()}handleDisabledChange(){this.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}setValue(e,t){if(!this.checked){this.internals.setFormValue(null,null);return}this.internals.setFormValue(e??`on`,t)}formResetCallback(){this._checked=null,super.formResetCallback(),this.handleValueOrCheckedChange()}render(){let e=this.hasSlotController.test(`hint`,`withHint`),t=this.hint?!0:!!e,n=this.didSSR&&!this.hasUpdated?this.checked:this.defaultChecked,r=this.didSSR&&!this.hasUpdated?null:Jt(this.checked);return C`
      <label
        part="base switch"
        class=${Vt({checked:this.checked,disabled:this.disabled})}
      >
        <input
          class="input"
          type="checkbox"
          title=${this.title}
          name=${Ht(this.name)}
          value=${Ht(this.value)}
          .checked=${Ht(r)}
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
        class=${Vt({"has-slotted":t})}
        aria-hidden=${t?`false`:`true`}
        >${this.hint}</slot
      >
    `}};Ca.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},Ca.css=[Xe,wt,Sa],T([dt(`input[type="checkbox"]`)],Ca.prototype,`input`,2),T([E()],Ca.prototype,`title`,2),T([E({reflect:!0})],Ca.prototype,`name`,2),T([E({reflect:!0})],Ca.prototype,`value`,1),T([E({reflect:!0})],Ca.prototype,`size`,2),T([Tt(`size`)],Ca.prototype,`handleSizeChange`,1),T([E({type:Boolean})],Ca.prototype,`disabled`,2),T([E({type:Boolean,attribute:!1})],Ca.prototype,`checked`,1),T([E({type:Boolean,attribute:`checked`,reflect:!0})],Ca.prototype,`defaultChecked`,2),T([E({type:Boolean,reflect:!0})],Ca.prototype,`required`,2),T([E({attribute:`hint`})],Ca.prototype,`hint`,2),T([E({attribute:`with-hint`,type:Boolean})],Ca.prototype,`withHint`,2),T([Tt([`checked`,`defaultChecked`])],Ca.prototype,`handleStateChange`,1),T([Tt(`disabled`,{waitUntilFirstUpdate:!0})],Ca.prototype,`handleDisabledChange`,1),Ca=T([ot(`wa-switch`)],Ca),Ca.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wa=t({default:()=>Ca}),j;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Ta;function Ea(e){this.c=e}j=Ea.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function Da(e){switch(typeof e){case`string`:return JS.l();case`number`:return Ha(e)?e<<24>>24===e?vy.l():e<<16>>16===e?Ay.l():zS.l():Ua(e)?RS.l():LS.l();case`boolean`:return B_.l();case`undefined`:return ou.l();default:return e instanceof z?HS.l():e instanceof Ea?U_.l():e&&e.$classData?e.$classData.l():null}}function Oa(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Ha(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Ua(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof z?`java.lang.Long`:e instanceof Ea?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.tU()}}function ka(e,t){switch(typeof e){case`string`:return GS(e,t);case`number`:return FS(e,t);case`boolean`:return R_(e,t);case`undefined`:return ru(e,t);default:return e&&e.$classData||e===null?e.r(t):e instanceof z?BS(e,t):e instanceof Ea?H_(Ga(e),t):Ja.prototype.r.call(e,t)}}function Aa(e){switch(typeof e){case`string`:return WS(e);case`number`:return IS(e);case`boolean`:return z_(e);case`undefined`:return iu(e);default:return e&&e.$classData||e===null?e.z():e instanceof z?VS(e):e instanceof Ea?V_(Ga(e)):Ja.prototype.z.call(e)}}function ja(e){return e===void 0?`undefined`:e.toString()}function Ma(e,t){if(t===0)throw new _y(`/ by zero`);return e/t|0}function Na(e,t){if(t===0)throw new _y(`/ by zero`);return e%t|0}function Pa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Fa(e){return String.fromCharCode(e)}function Ia(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var La=0,Ra=new WeakMap;function za(e){switch(typeof e){case`string`:return WS(e);case`number`:return IS(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:WS(n);default:if(e===null)return 0;var r=Ra.get(e);return r===void 0&&(r=La+1|0,La=r,Ra.set(e,r)),r}}function Ba(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Va(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Ha(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Ua(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Wa(e){return new Ea(e)}Wa(0);function Ga(e){return e===null?0:e.c}function Ka(e){return e===null?Ta:e}function qa(e){return e}function Ja(){}j=Ja.prototype,j.constructor=Ja;function M(){}M.prototype=j,j.z=(function(){return za(this)}),j.r=(function(e){return this===e}),j.F=(function(){var e=this.z();return Oa(this)+`@`+(+(e>>>0)).toString(16)}),j.toString=(function(){return this.F()});function N(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=N.prototype=new M,j.constructor=N,j.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),j.i=(function(){return new N(this.a.slice())});function Ya(){}Ya.prototype=j;function Xa(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=Xa.prototype=new M,j.constructor=Xa,j.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),j.i=(function(){return new Xa(this.a.slice())});function Za(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}j=Za.prototype=new M,j.constructor=Za,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Za(this.a.slice())});function Qa(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}j=Qa.prototype=new M,j.constructor=Qa,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new Qa(this.a.slice())});function $a(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}j=$a.prototype=new M,j.constructor=$a,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new $a(this.a.slice())});function eo(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}j=eo.prototype=new M,j.constructor=eo,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new eo(this.a.slice())});function to(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Ta}else this.a=e}j=to.prototype=new M,j.constructor=to,j.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),j.i=(function(){return new to(this.a.slice())});function no(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}j=no.prototype=new M,j.constructor=no,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new no(this.a.slice())});function ro(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}j=ro.prototype=new M,j.constructor=ro,j.x=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.i=(function(){return new ro(this.a.slice())});function P(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=P.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new P().y(this,r,i)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Ya;n.constructor=t,n.x=(function(e,t,n,r){Ia(this.a,e,t.a,n,r)}),n.i=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={B:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===F});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new P().a(this),this.A}),j.l=(function(){return this.L||=new Qh(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null}),j.U=(function(e){if(this===io)throw xy(new Sy);return new(this.r()).C(e)});var F=new P;F.n={},F.E=`Ljava.lang.Object;`,F.F=(e=>!e.X),F.N=`java.lang.Object`,F.I=(e=>e!==null),F.A=new P().y(F,N,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Ja.prototype.$classData=F;var io=new P().p(void 0,`V`,`void`,void 0,void 0),ao=new P().p(!1,`Z`,`boolean`,Xa,void 0),oo=new P().p(0,`C`,`char`,Za,Uint16Array),so=new P().p(0,`B`,`byte`,Qa,Int8Array),co=new P().p(0,`S`,`short`,$a,Int16Array),lo=new P().p(0,`I`,`int`,eo,Int32Array),uo=new P().p(null,`J`,`long`,to,void 0),fo=new P().p(0,`F`,`float`,no,Float32Array),po=new P().p(0,`D`,`double`,ro,Float64Array),mo=new P().i(1,`com.raquo.airstream.core.InternalObserver`,{b3:1});function ho(e){return Da(e).j7()+`@`+e.z()}function go(e){var t=e.gc();return t===void 0?e.g3():t}function _o(){this.jH=null,yo=this,this.jH=bo().pX(new Q((e=>void 0)),Pu().gA,!0)}j=_o.prototype=new M,j.constructor=_o;function vo(){}vo.prototype=j,j.pX=(function(e,t,n){return new v_(e,n,t,this)}),j.rQ=(function(e,t){return new b_(e,t,this)}),new P().i(_o,`com.raquo.airstream.core.Observer$`,{cx:1});var yo;function bo(){return yo||=new _o,yo}function xo(){}j=xo.prototype=new M,j.constructor=xo;function So(){}So.prototype=j,j.pD=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new P().i(xo,`com.raquo.airstream.core.ObserverList$`,{cA:1});var Co;function wo(){return Co||=new xo,Co}function To(){this.eL=0,this.eL=0}j=To.prototype=new M,j.constructor=To;function Eo(){}Eo.prototype=j,j.po=(function(){return this.eL===2147483647?this.eL=1:this.eL=1+this.eL|0,this.eL}),new P().i(To,`com.raquo.airstream.core.Signal$`,{cB:1});var Do;function Oo(){return Do||=new To,Do}function ko(e){this.hm=null,this.jN=null,this.hn=0,this.hm=e,this.jN=void 0;var t=Yo().gg();this.hn=t===void 0?1:1+t.hn|0,Fo().gj===-1||this.hn>Fo().gj?zm().cn(new SS(this,Fo().gj)):Bo().bf?Bo().em.push(this)|0:Yo().iJ(this)}j=ko.prototype=new M,j.constructor=ko;function Ao(){}Ao.prototype=j;var jo=new P().i(ko,`com.raquo.airstream.core.Transaction`,{cC:1});function Mo(){this.gj=0,this.jO=null,Po=this,this.gj=1e3,this.jO=new Q((e=>{throw eg(new tg,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=Mo.prototype=new M,j.constructor=Mo;function No(){}No.prototype=j,j.oN=(function(e){try{e.hm.f(e);var t=e.jN;if(t!==void 0)for(;t.u0();)t.tN().u4(e)}catch(e){var n=e instanceof Bp?e:new Bw(e);zm().cn(n)}}),new P().i(Mo,`com.raquo.airstream.core.Transaction$`,{cD:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(e){e.gk.length|0?new ko(new Q((t=>{for(;(e.gk.length|0)>0;){var n=e.gk.shift();try{n.f(t)}catch(e){var r=e instanceof Bp?e:new Bw(e);zm().cn(r)}}for(;(e.em.length|0)>0;){var i=e.em.shift();Yo().iJ(i)}}))):(e.em.length|0)>0&&new ko(new Q((t=>{for(;(e.em.length|0)>0;)Yo().iJ(e.em.shift())})))}function Lo(){this.bf=!1,this.gk=null,this.em=null,zo=this,this.bf=!1,this.gk=ws().bj(U().d(new(B.r()).C([]))),this.em=ws().bj(U().d(new(jo.r()).C([])))}j=Lo.prototype=new M,j.constructor=Lo;function Ro(){}Ro.prototype=j,new P().i(Lo,`com.raquo.airstream.core.Transaction$onStart$`,{cE:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(e,t){return e.en.get(t)}function Ho(e,t){e.gl.unshift(t)}function Uo(e){return e.gl.shift()}function Wo(e,t,n){var r=Vo(e,t),i=r===void 0,a=r===void 0?ws().bj(U().d(new(jo.r()).C([]))):r;a.push(n),i&&e.en.set(t,a)}function Go(e,t){var n=Vo(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.en.delete(t),i}}function Ko(){this.gl=null,this.en=null,Jo=this,this.gl=ws().bj(U().d(new(jo.r()).C([]))),this.en=new Map}j=Ko.prototype=new M,j.constructor=Ko;function qo(){}qo.prototype=j,j.iJ=(function(e){var t=this.gg();t===void 0?(Ho(this,e),Fo().oN(e),this.rj(e)):Wo(this,t,e)}),j.rj=(function(e){for(var t=e;;){var n=this.gg(),r=t;if(!(n!==void 0&&H().t(r,n)))throw eg(new tg,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.sM(t),t.hm=Fo().jO;var i=this.gg();if(H().t(i,void 0))if((this.en.size|0)>0){var a=new Em(0);throw this.en.forEach((e=>((t,n)=>{e.eA=e.eA+(t.length|0)|0}))(a)),eg(new tg,`Transaction queue error: Stack cleared, but a total of `+a.eA+` children for `+(this.en.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Fo().oN(i),t=i}}),j.sM=(function(e){for(var t=e;;){var n=Go(this,t);if(H().t(n,void 0)){Uo(this);var r=this.gg();if(!H().t(r,void 0))t=r;else return}else{Ho(this,n);return}}}),j.gg=(function(){return this.gl[0]}),new P().i(Ko,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{cF:1});var Jo;function Yo(){return Jo||=new Ko,Jo}function Xo(e,t){var n=e.dr.indexOf(t)|0;if(n!==-1)e.dr.splice(n,1),e.bP.e()||t.ps();else throw eg(new tg,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Zo(e){for(;(e.gn.length|0)>0;)Xo(e,e.gn.shift())}function Qo(e){this.jW=null,this.dr=null,this.eM=!1,this.gn=null,this.bP=null,this.eN=0,this.jW=e,this.dr=ws().bj(U().d(new(ns.r()).C([]))),this.eM=!0,this.gn=ws().bj(U().d(new(ns.r()).C([]))),this.bP=$S(),this.eN=0}j=Qo.prototype=new M,j.constructor=Qo;function $o(){}$o.prototype=j,j.ol=(function(){if(this.bP.e()){var e=Bo(),t=(()=>{var e=new mf(this.jW);this.bP=new eC(e),this.eM=!1,this.eN=0;for(var t=0,n=this.dr.length|0;t<n;){var r=t+this.eN|0;this.dr[r].pr(e),t=1+t|0}Zo(this),this.eM=!0,this.eN=0});if(Bo(),e.bf)t();else{e.bf=!0;try{t()}finally{e.bf=!1,Io(e)}}}else throw eg(new tg,`Can not activate `+this+`: it is already active`)}),j.rc=(function(){if(this.bP.e())throw eg(new tg,`Can not deactivate DynamicOwner: it is not active`);this.eM=!1;for(var e=this.dr,t=0,n=e.length|0;t<n;)e[t].ps(),t=1+t|0;Zo(this);var r=this.bP;r.e()||r.Z().sg(),Zo(this),this.eM=!0,this.bP=$S()}),j.qG=(function(e,t){t?(this.eN=1+this.eN|0,this.dr.unshift(e)):this.dr.push(e);var n=this.bP;if(!n.e()){var r=n.Z();e.pr(r)}}),j.sS=(function(e){this.eM?Xo(this,e):this.gn.push(e)}),new P().i(Qo,`com.raquo.airstream.ownership.DynamicOwner`,{cH:1});function es(e,t,n){this.go=null,this.jX=null,this.gp=null,this.go=e,this.jX=t,this.gp=$S(),e.qG(this,n)}j=es.prototype=new M,j.constructor=es;function ts(){}ts.prototype=j,j.h3=(function(){this.go.sS(this)}),j.pr=(function(e){var t=Bo(),n=(()=>{this.gp=this.jX.f(e)});if(Bo(),t.bf)n();else{t.bf=!0;try{n()}finally{t.bf=!1,Io(t)}}}),j.ps=(function(){var e=this.gp;e.e()||(e.Z().h3(),this.gp=$S())});var ns=new P().i(es,`com.raquo.airstream.ownership.DynamicSubscription`,{cI:1});function rs(){}j=rs.prototype=new M,j.constructor=rs;function is(){}is.prototype=j,j.hh=(function(e,t,n){return new es(e,new Q((e=>new eC(t.f(e)))),n)}),j.pO=(function(e,t,n){return new es(e,new Q((e=>(t.f(e),$S()))),n)}),j.ta=(function(e,t,n){return os().hh(e,new Q((e=>Vm(t,n,e))),!1)}),new P().i(rs,`com.raquo.airstream.ownership.DynamicSubscription$`,{cJ:1});var as;function os(){return as||=new rs,as}function ss(e){e.eO=ws().bj(U().d(new(ms.r()).C([])))}function cs(e){for(var t=e.eO,n=0,r=t.length|0;n<r;)ds(t[n]),n=1+n|0;e.eO.length=0}function ls(e,t){var n=e.eO.indexOf(t)|0;if(n!==-1)e.eO.splice(n,1);else throw eg(new tg,`Can not remove Subscription from Owner: subscription not found.`)}function us(e,t){e.eO.push(t)}function ds(e){if(!e.hu)e.jZ.ac(),e.hu=!0;else throw eg(new tg,`Can not kill Subscription: it was already killed.`)}function fs(e,t){this.k0=null,this.jZ=null,this.hu=!1,this.k0=e,this.jZ=t,this.hu=!1,e.sK(this)}j=fs.prototype=new M,j.constructor=fs;function ps(){}ps.prototype=j,j.h3=(function(){ds(this),ls(this.k0,this)});var ms=new P().i(fs,`com.raquo.airstream.ownership.Subscription`,{cM:1});function hs(e,t){this.k1=null,this.k2=null,this.ds=null,this.eo=!1,this.k1=e,this.k2=t,this.ds=$S(),this.eo=!1}j=hs.prototype=new M,j.constructor=hs;function gs(){}gs.prototype=j,j.sc=(function(){var e=this.ds;return!e.e()&&!e.Z().go.bP.e()}),j.t1=(function(e){if(this.eo)throw eg(new tg,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ds;if(t.e())var n=!1;else var n=e===t.Z().go;if(!n){this.sc()&&!e.bP.e()&&(this.eo=!0);var r=this.ds;r.e()||(r.Z().h3(),this.ds=$S()),this.ds=new eC(os().hh(e,new Q((e=>(this.eo||this.k1.ac(),new fs(e,new kv((()=>{this.eo||this.k2.ac()})))))),!1)),this.eo=!1}}),j.r1=(function(){if(this.eo)throw eg(new tg,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ds;e.e()||e.Z().h3(),this.ds=$S()}),new P().i(hs,`com.raquo.airstream.ownership.TransferableSubscription`,{cN:1});function _s(){}j=_s.prototype=new M,j.constructor=_s;function vs(){}vs.prototype=j,j.aO=(function(e){return new wS(new _S(e))}),new P().i(_s,`com.raquo.airstream.state.Var$`,{cR:1});var ys;function bs(){return ys||=new _s,ys}function xs(){}j=xs.prototype=new M,j.constructor=xs;function Ss(){}Ss.prototype=j,j.bj=(function(e){return[...nf().th(e)]}),new P().i(xs,`com.raquo.ew.JsArray$`,{cU:1});var Cs;function ws(){return Cs||=new xs,Cs}function Ts(){}j=Ts.prototype=new M,j.constructor=Ts;function Es(){}Es.prototype=j,j.s5=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),j.rI=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new P().i(Ts,`com.raquo.ew.JsArray$RichJsArray$`,{cV:1});var Ds;function Os(){return Ds||=new Ts,Ds}function ks(){this.kd=null,js=this,document.createElement(`template`),this.ra(Z().b.tc().td()),this.kd=RegExp(` `,`g`)}j=ks.prototype=new M,j.constructor=ks;function As(){}As.prototype=j,j.qL=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Bp?e:new Bw(e);if(n instanceof Bw&&n.bv instanceof DOMException)return!1;throw n instanceof Bw?n.bv:n}}),j.se=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().t(t,r))return!0;n=r}}),j.qw=(function(e,t){e.addEventListener(t.eQ.ep.gs,t.hJ,t.hK)}),j.sQ=(function(e,t){e.removeEventListener(t.eQ.ep.gs,t.hJ,t.hK)}),j.r9=(function(e){return document.createElement(e.jn())}),j.rU=(function(e,t){var n=this.rV(e,t);return n===void 0?void 0:t.cX.f8(n)}),j.rV=(function(e,t){var n=e.bp.getAttributeNS(null,t.cq);return n===null?void 0:n}),j.jz=(function(e,t,n){this.t0(e,t,t.cX.ee(n))}),j.t0=(function(e,t,n){n===null?this.sR(e,t):e.bp.setAttribute(t.cq,n)}),j.sR=(function(e,t){e.bp.removeAttribute(t.cq)}),j.rW=(function(e,t){return e.bp[t.cI]}),j.pK=(function(e,t,n){this.pL(e,t,t.hF.ee(n))}),j.pL=(function(e,t,n){e.bp[t.cI]=n}),j.pM=(function(e,t,n){var r=e.bp,i=t.cY,a=t.cZ,o=n===null?null:n;o===null?(a.bJ(new Q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.bJ(new Q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.ra=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.lO)}),j.rZ=(function(e,t){var n=this.s0(e,t);return n===void 0?void 0:t.hG.f8(n)}),j.s0=(function(e,t){var n=e.jv(),r=t.gu,i=n.getAttributeNS(r.e()?null:r.Z(),t.hH);return i===null?void 0:i}),j.t2=(function(e,t,n){this.t3(e,t,t.hG.ee(n))}),j.t3=(function(e,t,n){if(n===null)this.sT(e,t);else{var r=t.gu;if(r.e())e.jv().setAttribute(t.gt,n);else{var i=r.Z();e.jv().setAttributeNS(i,t.gt,n)}}}),j.sT=(function(e,t){var n=e.jv(),r=t.gu;n.removeAttributeNS(r.e()?null:r.Z(),t.hH)}),j.rb=(function(e){return document.createTextNode(e)}),j.jb=(function(e){return td().r3(e.tagName,45)}),j.rT=(function(e){if(e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`))return!!e.checked;if(this.jb(e)){var t=e.checked;return new Qv(this),t===void 0?void 0:typeof t==`boolean`?!!t:void 0}}),j.s1=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.jb(e)){var t=e.value;return new ey(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),j.rd=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new rk(this.oT(r),n);r=i,n=a}}),j.oT=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.kd,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new P().i(ks,`com.raquo.laminar.DomApi$`,{cW:1});var js;function Ms(){return js||=new ks,js}function Ns(e,t,n){this.hA=null,this.ke=null,this.hz=null,this.hA=e,this.ke=t,this.hz=n}j=Ns.prototype=new M,j.constructor=Ns;function Ps(){}Ps.prototype=j,j.bJ=(function(e){this.hA===null?this.hz===null?Ru().rJ(this.ke,e):Os().rI(this.hz,l_().rP(e)):this.hA.bJ(e)}),new P().i(Ns,`com.raquo.laminar.Seq`,{cZ:1});function Fs(){}j=Fs.prototype=new M,j.constructor=Fs;function Is(){}Is.prototype=j,new P().i(Fs,`com.raquo.laminar.Seq$`,{d0:1});var Ls;function Rs(){return Ls||=new Fs,Ls}function zs(e){e.kh=bo(),zm(),e.aB=bs()}function Bs(e){e.pZ=Ac()}function Vs(e){Hs(e,new Q((e=>{e.ly.bp.focus()})))}function Hs(e,t){return new Vf(new Q((e=>{var n=new wm(!e.cJ.bP.e()),r=new Q((e=>{n.gL?n.gL=!1:t.f(e)}));os().pO(e.cJ,new Q((e=>(t=>{r.f(new Tc(e,t))}))(e)),!1)})),Ac())}function Us(){this.bl=null,this.lb=null,this.lc=!1,this.hB=null,this.eP=null,Gs=this,this.bl=new vf(Ks()),new vf(Ks()),this.hB=new vf(Ks()),this.eP=new gf}j=Us.prototype=new M,j.constructor=Us;function Ws(){}Ws.prototype=j,j.eB=(function(){return this.lc||=(this.lb=new bf(this),!0),this.lb}),new P().i(Us,`com.raquo.laminar.codecs.package$`,{d8:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(e){e.kw=Js(e,`class`,` `),e.fo=e.kw}function Js(e,t,n){var r=Mf(new Nf,t,Ks().bl);return new Cf(r.cq,new Q((e=>{var t=Ms().rU(e,r);return t===void 0?``:t})),new Mv(((e,t)=>{Ms().jz(e,r,t)})),n)}function Ys(e){e.pY=Xs(e,`class`,` `)}function Xs(e,t,n){var r=new Lf(t,Ks().bl,$S());return new Cf(r.gt,new Q((e=>{var t=Ms().rZ(e,r);return t===void 0?``:t})),new Mv(((e,t)=>{Ms().t2(e,r,t)})),n)}function Zs(){this.lr=null,$s=this,Z().b.el(),ws().bj(U().d(new(jf.r()).C([Z().b.ae()]))),Z().b.el(),ws().bj(U().d(new(jf.r()).C([Z().b.ae(),Z().b.sF()]))),Z().b.oM(),ws().bj(U().d(new(jf.r()).C([Z().b.ae(),Z().b.sG()]))),this.lr=ws().bj(U().d(new(JS.r()).C([`value`,`checked`])))}j=Zs.prototype=new M,j.constructor=Zs;function Qs(){}Qs.prototype=j,new P().i(Zs,`com.raquo.laminar.inputs.InputController$`,{dA:1});var $s;function ec(){return $s||=new Zs,$s}function tc(e){this.gq=null,this.gq=e}j=tc.prototype=new M,j.constructor=tc;function nc(){}nc.prototype=j,j.pv=(function(e,t){try{this.gq.dg(e,t)}catch(e){var n=e instanceof Bp?e:new Bw(e);zm().cn(n)}}),j.r2=(function(e){return new tc(new Mv(((t,n)=>{this.gq.dg(t,n),e.gq.dg(t,n)})))}),j.qM=(function(e){return e===void 0?this:e.r2(this)}),new P().i(tc,`com.raquo.laminar.inserters.InserterHooks`,{dD:1});function rc(){}j=rc.prototype=new M,j.constructor=rc;function ic(){}ic.prototype=j,j.cF=(function(e,t){return new ny(e,void 0)}),new P().i(rc,`com.raquo.laminar.inserters.StaticChildInserter$`,{dF:1});var ac;function oc(){return ac||=new rc,ac}function sc(){}j=sc.prototype=new M,j.constructor=sc;function cc(){}cc.prototype=j,j.pp=(function(e,t){return e===``?$():$().ju(Pk(new Ik,e.split(t).filter((e=>e!==``))))}),new P().i(sc,`com.raquo.laminar.keys.CompositeKey$`,{dI:1});var lc;function uc(){return lc||=new sc,lc}function dc(e,t){this.lw=null,this.lv=null,this.lw=e,this.lv=t}j=dc.prototype=new M,j.constructor=dc;function fc(){}fc.prototype=j,j.c=(function(e){return new $m(this.lw,this.lv.f(e),new Pv(((e,t,n)=>{Ms().pM(e,t,n)})))}),new P().i(dc,`com.raquo.laminar.keys.DerivedStyleProp`,{dM:1});function pc(e,t,n,r){this.ep=null,this.fr=!1,this.fq=!1,this.fp=null,this.ep=e,this.fr=t,this.fq=n,this.fp=r}j=pc.prototype=new M,j.constructor=pc;function mc(){}mc.prototype=j,j.eh=(function(e){var t=new Q((t=>{var n=this.fp.f(t);return n.e()?$S():new eC(e.f(n.Z()))}));return new pc(this.ep,this.fr,this.fq,t)}),j.fd=(function(){var e=new Q((e=>{var t=this.fp.f(e);if(t.e())return $S();t.Z();var n=Ms().s1(e.target);return new eC(n===void 0?``:n)}));return new pc(this.ep,this.fr,this.fq,e)}),j.dn=(function(){var e=new Q((e=>{var t=this.fp.f(e);if(t.e())return $S();t.Z();var n=Ms().rT(e.target);return new eC(!!(n!==void 0&&n))}));return new pc(this.ep,this.fr,this.fq,e)}),new P().i(pc,`com.raquo.laminar.keys.EventProcessor`,{dN:1});function hc(){}j=hc.prototype=new M,j.constructor=hc;function gc(){}gc.prototype=j,j.b8=(function(e,t,n){return new pc(e,t,n,new Q((e=>new eC(e))))}),new P().i(hc,`com.raquo.laminar.keys.EventProcessor$`,{dO:1});var _c;function vc(){return _c||=new hc,_c}function yc(){}j=yc.prototype=new M,j.constructor=yc;function bc(){}bc.prototype=j;function xc(){this.q0=null,this.q1=null,this.q2=null,this.q3=null,this.q0=`http://www.w3.org/2000/svg`,this.q1=`http://www.w3.org/1999/xlink`,this.q2=`http://www.w3.org/XML/1998/namespace`,this.q3=`http://www.w3.org/2000/xmlns/`}j=xc.prototype=new M,j.constructor=xc;function Sc(){}Sc.prototype=j,j.sr=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new By(e)}}),new P().i(xc,`com.raquo.laminar.keys.SvgAttr$`,{dR:1});var Cc;function wc(){return Cc||=new xc,Cc}function Tc(e,t){this.ly=null,this.lx=null,this.ly=e,this.lx=t}j=Tc.prototype=new M,j.constructor=Tc;function Ec(){}Ec.prototype=j,new P().i(Tc,`com.raquo.laminar.lifecycle.MountContext`,{dS:1});var I=new P().i(1,`com.raquo.laminar.modifiers.Modifier`,{Y:1});function Dc(){this.q4=null,kc=this,this.q4=new zf}j=Dc.prototype=new M,j.constructor=Dc;function Oc(){}Oc.prototype=j,new P().i(Dc,`com.raquo.laminar.modifiers.Modifier$`,{dX:1});var kc;function Ac(){return kc||=new Dc,kc}function jc(){this.c2=null,Nc=this,this.c2=new Uf}j=jc.prototype=new M,j.constructor=jc;function Mc(){}Mc.prototype=j,new P().i(jc,`com.raquo.laminar.modifiers.RenderableNode$`,{e1:1});var Nc;function Pc(){return Nc||=new jc,Nc}function Fc(){this.D=null,Lc=this,this.D=new Yf(new Q((e=>e)),L()),new Yf(new Q((e=>``+(e|0))),L()),new Yf(new Q((e=>``+ +e)),L()),new Yf(new Q((e=>``+!!e)),L()),new Yf(new Q((e=>e.tg())),L())}j=Fc.prototype=new M,j.constructor=Fc;function Ic(){}Ic.prototype=j,new P().i(Fc,`com.raquo.laminar.modifiers.RenderableText$`,{e6:1});var Lc;function L(){return Lc||=new Fc,Lc}function Rc(){}j=Rc.prototype=new M,j.constructor=Rc;function zc(){}zc.prototype=j,j.gU=(function(e,t,n){var r=new eC(e);t.pV(r),n!==void 0&&n.pv(e,t);var i=Ms().qL(e.eH(),t.eH());return i&&t.pN(r),i}),new P().i(Rc,`com.raquo.laminar.nodes.ParentNode$`,{e8:1});var Bc;function Vc(){return Bc||=new Rc,Bc}function Hc(){}j=Hc.prototype=new M,j.constructor=Hc;function Uc(){}Uc.prototype=j,j.tl=(function(e,t){return os().hh(e.cJ,new Q((n=>t.f(new Tc(e,n)))),!0)}),new P().i(Hc,`com.raquo.laminar.nodes.ReactiveElement$`,{ea:1});var Wc;function Gc(){return Wc||=new Hc,Wc}function Kc(e){this.lK=null,this.lK=new tc(new Mv(((t,n)=>{matchResult1:{var r=n.eH();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=zm(),a=r.textContent,o=t.eH().tagName;i.cn(eg(new tg,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=Kc.prototype=new M,j.constructor=Kc;function qc(){}qc.prototype=j,j.cz=(function(e){return e.cD(new Q((e=>e.tp(this.lK))))}),new P().i(Kc,`com.raquo.laminar.nodes.Slot`,{ed:1});function Jc(){Xc=this,ws().bj(U().tq(new eo(new Int32Array([0]))))}j=Jc.prototype=new M,j.constructor=Jc;function Yc(){}Yc.prototype=j,j.qp=(function(){return new Q((e=>void 0))}),new P().i(Jc,`com.raquo.laminar.tags.CustomHtmlTag$`,{ef:1});var Xc;function Zc(){return Xc||=new Jc,Xc}function Qc(){}j=Qc.prototype=new M,j.constructor=Qc;function $c(){}$c.prototype=j,j.qK=(function(){tl().rq(),tl().rv(),tl().rw(),tl().rx(),tl().ry(),tl().rz(),tl().rA(),tl().rB(),tl().rC(),tl().rr(),tl().rs(),tl().rt(),tl().ru()}),j.rq=(function(){var e=document.querySelector(`#example1`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(`top`),n=Z().b.aB.aO(`0`),r=Z().b.aB.aO(`0`),i=Z().b.aB.aO(!0),a=Z().b.aB.aO(!1);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().U(t))),new X((e=>e.gZ().U(new UE(n.cW,new X((e=>Cp().js(e))),$S())))),new X((e=>e.jA().U(new UE(r.cW,new X((e=>Cp().js(e))),$S())))),new X((e=>e.bX().U(i))),new X((e=>e.oJ().U(a))),new X((e=>e.gi().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`1px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fo.gS(`flex gap-2`),F_().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Placement`))),new X((e=>e.cS().c(`placement`))),new X((e=>e.J().U(t))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd().eh(new X((e=>e))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().cp().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jC().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iQ().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().ha().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jy().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jg().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))]))),Nh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Distance`))),new X((e=>e.pS().pq())),new X((e=>e.cS().c(`distance`))),new X((e=>(Nh().fg(),Z().b).el().U(n))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd(),new Q((e=>{n.aS.aQ(e)})))))])),U().d(new(I.r()).C([]))),Nh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Skidding`))),new X((e=>e.pS().pq())),new X((e=>e.cS().c(`skidding`))),new X((e=>(Nh().fg(),Z().b).el().U(r))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd(),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fo.gS(`flex gap-2 mt-2`),Gh().q(U().d(new(B.r()).C([new X((e=>e.cS().c(`active`))),new X((e=>qm(Z().b,ul().df(i),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{i.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Active`,L().D)]))),Gh().q(U().d(new(B.r()).C([new X((e=>e.cS().c(`arrow`))),new X((e=>qm(Z().b,ul().df(a),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{a.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Arrow`,L().D)])))])))]))))}}),j.rv=(function(){var e=document.querySelector(`#example2`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.bX().U(t))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Z().b.g0().C(U().d(new(I.r()).C([]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Active`,L().D)])))]))))}}),j.rw=(function(){var e=document.querySelector(`#example3`);sm().bY(e).e()||(Z(),new rh(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.co().C(U().d(new(I.r()).C([Z().b.s4().c(`external-anchor`),Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().c(`50px 0 0 50px`)]))),Lh().q(U().d(new(B.r()).C([new X((e=>e.qI().c(`external-anchor`))),new X((e=>e.c1().cp())),new X((e=>e.bX().c(!0)))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))])))])))))}),j.rx=(function(){var e=document.querySelector(`#example4`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(`top`);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().U(t))),new X((e=>e.bX().c(!0))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),F_().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Placement`))),new X((e=>e.J().U(t))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd().eh(new X((e=>e))),new Q((e=>{t.aS.aQ(e)}))))),new X((e=>e.gi().c(`max-width: 280px;`)))])),U().d(new(I.r()).C([J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().cp().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jC().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iQ().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().ha().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jy().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jg().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))])))]))))}}),j.ry=(function(){var e=document.querySelector(`#example5`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.gZ().U(t))),new X((e=>e.bX().c(!0))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Vh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Distance`))),new X((e=>e.h5().c(-50))),new X((e=>e.h4().c(50))),new X((e=>e.he().c(1))),new X((e=>(Vh().fg(),Z().b).el().U(new UE(t.cW,new X((e=>``+ +e)),$S())))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).eh(new X((e=>+e.target.value))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.gb().c(`260px`)])))]))))}}),j.rz=(function(){var e=document.querySelector(`#example6`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.jA().U(t))),new X((e=>e.bX().c(!0))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Vh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Skidding`))),new X((e=>e.h5().c(-50))),new X((e=>e.h4().c(50))),new X((e=>e.he().c(1))),new X((e=>(Vh().fg(),Z().b).el().U(new UE(t.cW,new X((e=>``+ +e)),$S())))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).eh(new X((e=>+e.target.value))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.gb().c(`260px`)])))]))))}}),j.rA=(function(){var e=document.querySelector(`#example7`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(`top`),n=Z().b.aB.aO(`anchor`),r=Z().b.aB.aO(!0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().U(t))),new X((e=>e.oJ().U(r))),new X((e=>e.qQ().U(n))),new X((e=>e.gZ().c(8))),new X((e=>e.bX().c(!0))),new X((e=>e.gi().c(`--arrow-color: var(--wa-color-brand-fill-loud)`))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fo.gS(`flex flex-wrap gap-4 items-end`),F_().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Placement`))),new X((e=>e.cS().c(`placement`))),new X((e=>e.J().U(t))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd().eh(new X((e=>e))),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.ab().c(`160px`),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().cp().M)))])),U().d(new(I.r()).C([K(Z().b,`top`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jC().M)))])),U().d(new(I.r()).C([K(Z().b,`top-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jB().M)))])),U().d(new(I.r()).C([K(Z().b,`top-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iO().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iQ().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().iP().M)))])),U().d(new(I.r()).C([K(Z().b,`bottom-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jx().M)))])),U().d(new(I.r()).C([K(Z().b,`right`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().ha().M)))])),U().d(new(I.r()).C([K(Z().b,`right-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jy().M)))])),U().d(new(I.r()).C([K(Z().b,`right-end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().je().M)))])),U().d(new(I.r()).C([K(Z().b,`left`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jg().M)))])),U().d(new(I.r()).C([K(Z().b,`left-start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(q().jf().M)))])),U().d(new(I.r()).C([K(Z().b,`left-end`,L().D)])))]))),F_().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Arrow Placement`))),new X((e=>e.cS().c(`arrow-placement`))),new X((e=>e.J().U(n))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).fd().eh(new X((e=>{(e===`anchor`||e===`center`||e===`end`||e===`start`)&&Yv(n,e)}))),new Q((e=>(t=>{e.aQ(t)}))(Z().b.kh.jH)))))])),U().d(new(I.r()).C([Z().b.ab().c(`160px`),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`anchor`)))])),U().d(new(I.r()).C([K(Z().b,`anchor`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`start`)))])),U().d(new(I.r()).C([K(Z().b,`start`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`end`)))])),U().d(new(I.r()).C([K(Z().b,`end`,L().D)]))),J().q(U().d(new(B.r()).C([new X((e=>e.J().c(`center`)))])),U().d(new(I.r()).C([K(Z().b,`center`,L().D)])))])))]))),Z().b.S().C(U().d(new(I.r()).C([Z().b.fo.gS(`flex gap-4 mt-4`),Gh().q(U().d(new(B.r()).C([new X((e=>e.cS().c(`arrow`))),new X((e=>qm(Z().b,ul().df(r),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Arrow`,L().D)])))])))]))))}}),j.rB=(function(){var e=document.querySelector(`#example8`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h8().h9(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.gf().f6(),Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.p5().U(t))),new X((e=>e.bX().c(!0))),new X((e=>e.gX().hd())),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().c(`150px 50px`)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))])))]))),Z().b.g0().C(U().d(new(I.r()).C([]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Flip`,L().D)])))]))))}}),j.rC=(function(){var e=document.querySelector(`#example9`);sm().bY(e).e()||(Z(),new rh(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.h8().h9(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.gf().f6(),Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.p5().c(!0))),new X((e=>e.rG().c(`right bottom`))),new X((e=>e.rH().s9())),new X((e=>e.bX().c(!0))),new X((e=>e.gX().hd())),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().c(`250px 50px`)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))])))])))))}),j.rr=(function(){var e=document.querySelector(`#example10`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h8().h9(),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.gf().f6(),Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.t5().U(t))),new X((e=>e.t6().c(10))),new X((e=>e.bX().c(!0))),new X((e=>e.gX().hd())),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().c(`60px 0 0 10px`)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(300),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))])))]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Shift`,L().D)])))]))))}}),j.rs=(function(){var e=document.querySelector(`#example11`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.h8().h9(),Z().b.a3().v().c(300),Z().b.bk().c(`2px solid var(--wa-color-surface-border)`),Z().b.gf().f6(),Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.qS().U(new UE(t.cW,new X((e=>e?`both`:`vertical`)),$S())))),new X((e=>e.qT().c(10))),new X((e=>e.bX().c(!0))),new X((e=>e.gX().hd())),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().c(`250px 50px 100px 50px`)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`),Z().b.ab().v().c(100),Z().b.a3().v().c(200),Z().b.gb().c(`var(--auto-size-available-width)`),Z().b.so().c(`var(--auto-size-available-height)`),Z().b.gf().f6()])))])))]))),Z().b.g0().C(U().d(new(I.r()).C([]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Auto-size`,L().D)])))]))))}}),j.rt=(function(){var e=document.querySelector(`#example12`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!0),n=Z().b.aB.aO(10),r=Z().b.aB.aO(0);new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().cp())),new X((e=>e.s3().U(t))),new X((e=>e.gZ().U(n))),new X((e=>e.jA().U(r))),new X((e=>e.bX().c(!0))),new X((e=>e.gi().c(qS(td().t8(`
            --arrow-color: var(--wa-color-brand-fill-loud);
          `,124))))),new X((e=>qm(Z().b,ol().cy().cz(U().d(new(iy.r()).C([(Z(),oc().cF(Z().b.co().C(U().d(new(I.r()).C([Z().b.cg().ci(),Z().b.ab().v().c(150),Z().b.a3().v().c(150),Z().b.bk().c(`2px dashed var(--wa-color-neutral-fill-loud)`),Z().b.cl().v().c(50)]))),Pc().c2))]))),Wp().aJ,Jf())))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(50),Z().b.cd().c(`var(--wa-color-brand-fill-loud)`),Z().b.bZ().c(`var(--wa-border-radius-m)`)])))]))),Z().b.g0().C(U().d(new(I.r()).C([]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Hover Bridge`,L().D)]))),Z().b.g0().C(U().d(new(I.r()).C([]))),Vh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Distance`))),new X((e=>e.h5().c(0))),new X((e=>e.h4().c(50))),new X((e=>e.he().c(1))),new X((e=>(Vh().fg(),Z().b).el().U(new UE(n.cW,new X((e=>``+ +e)),$S())))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).eh(new X((e=>+e.target.value))),new Q((e=>{n.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.gb().c(`260px`),Z().b.pl().c(`0.5rem`)]))),Vh().q(U().d(new(B.r()).C([new X((e=>e.cj().c(`Skidding`))),new X((e=>e.h5().c(-50))),new X((e=>e.h4().c(50))),new X((e=>e.he().c(1))),new X((e=>(Vh().fg(),Z().b).el().U(new UE(r.cW,new X((e=>``+ +e)),$S())))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).eh(new X((e=>+e.target.value))),new Q((e=>{r.aS.aQ(e)})))))])),U().d(new(I.r()).C([Z().b.gb().c(`260px`),Z().b.pl().c(`0.5rem`)])))]))))}}),j.ru=(function(){var e=document.querySelector(`#example13`);if(!sm().bY(e).e()){Z();var t=Z().b.aB.aO(!1);Z().b.aB.aO(0),Z().b.aB.aO(0),new rh(e,Z().b.S().C(U().d(new(I.r()).C([Lh().q(U().d(new(B.r()).C([new X((e=>e.c1().ha())),new X((e=>e.bX().U(t))),new X((e=>e.gi().c(`z-index: 1000; pointer-events: none;`)))])),U().d(new(I.r()).C([Z().b.S().C(U().d(new(I.r()).C([Z().b.ab().v().c(100),Z().b.a3().v().c(100),Z().b.bk().c(`4px solid var(--wa-color-neutral-fill-loud)`),Z().b.bZ().c(`50%`),Z().b.tj().c(`translate(-50px, -50px)`),Z().b.qJ().c(`1s virtual-cursor infinite`)])))]))),Gh().q(U().d(new(B.r()).C([new X((e=>qm(Z().b,ul().df(t),Wp().aJ,Jf()))),new X((e=>new Xm((Z(),vc().b8(e.ae(),!1,!1)).dn(),new Q((e=>{t.aS.aQ(e)})))))])),U().d(new(I.r()).C([K(Z().b,`Highlight mouse cursor`,L().D)])))]))))}}),new P().i(Qc,`examples.popup.Main$package$`,{eh:1});var el;function tl(){return el||=new Qc,el}function nl(e){try{tl().qK()}catch(e){throw e}}function rl(){this.mX=null,this.mY=!1}j=rl.prototype=new M,j.constructor=rl;function il(){}il.prototype=j,j.cy=(function(){return this.mY||=(this.mX=new Kc(`anchor`),!0),this.mX}),new P().i(rl,`io.github.nguyenyou.webawesome.laminar.Popup$slots$`,{eq:1});var al;function ol(){return al||=new rl,al}function sl(){}j=sl.prototype=new M,j.constructor=sl;function cl(){}cl.prototype=j,j.df=(function(e){return new rk(Z().b.rg().U(e),new rk(Z().b.oM().U(e),$()))}),new P().i(sl,`io.github.nguyenyou.webawesome.laminar.Switch$checked$`,{eu:1});var ll;function ul(){return ll||=new sl,ll}function dl(){this.q6=!1,this.ft=null,this.gx=null,this.nn=null,this.hV=!1,this.q5=0,this.q8=0,this.q7=null,pl=this,this.q6=!0,this.ft=new ArrayBuffer(8),this.gx=new Int32Array(this.ft,0,2),new Float32Array(this.ft,0,2),this.nn=new Float64Array(this.ft,0,1),this.gx[0]=16909060,this.hV=(new Int8Array(this.ft,0,8)[0]|0)==1,this.q5=this.hV?0:1,this.q8=this.hV?1:0,this.q7=null}j=dl.prototype=new M,j.constructor=dl;function fl(){}fl.prototype=j,j.jr=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.nn[0]=e,(this.gx[0]|0)^(this.gx[1]|0))}),new P().i(dl,`java.lang.FloatingPointBits$`,{eI:1});var pl;function ml(){return pl||=new dl,pl}function hl(e,t){for(var n=Ul().cG(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=gl(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Mp(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Mp(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Pp.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function gl(e,t){var n=Ul().cG(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=Ul().cG(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=Ul().cG(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=Ul().cG(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=Ul().cG(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[_l(e,c[1]),wl(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[_l(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[_l(e,d[1]),`<clinit>`]}function _l(e,t){var n=yl(e);if(nu().i0.call(n,t))var r=yl(e)[t];else var r=Fl(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function vl(e){if(!((1&e.c3)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.hX=t,e.c3=(1|e.c3)<<24>>24}return e.hX}function yl(e){return(1&e.c3)<<24>>24?e.hX:vl(e)}function bl(e){if(!((2&e.c3)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.hY=t,e.c3=(2|e.c3)<<24>>24}return e.hY}function xl(e){return(2&e.c3)<<24>>24?e.hY:bl(e)}function Sl(e){return(4&e.c3)<<24>>24||(e.hW=Object.keys(xl(e)),e.c3=(4|e.c3)<<24>>24),e.hW}function Cl(e){return(4&e.c3)<<24>>24?e.hW:Sl(e)}function wl(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Tl(e,t){return t?t.arguments&&t.stack?El(e,t):t.stack&&t.sourceURL?kl(e,t):t.stack&&t.number?Ol(e,t):t.stack&&t.fileName?Dl(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Al(e,t):jl(e,t):Al(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ml(e,t):Nl(e,t):t.stack&&!t.fileName?El(e,t):Pl(e,t):[]}function El(e,t){return(t.stack+`
`).replace(Ul().cG(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(Ul().bN(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(Ul().bN(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(Ul().bN(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(Ul().bN(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Dl(e,t){return t.stack.replace(Ul().bN(`(?:\\n@:0)?\\s+$`,`m`),``).replace(Ul().bN(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ol(e,t){return t.stack.replace(Ul().bN(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(Ul().bN(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(Ul().bN(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function kl(e,t){return t.stack.replace(Ul().bN(`\\[native code\\]\\n`,`m`),``).replace(Ul().bN(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(Ul().bN(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Al(e,t){for(var n=Ul().bN(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function jl(e,t){for(var n=Ul().bN(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ml(e,t){for(var n=Ul().cG(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Nl(e,t){for(var n=Ul().cG(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(Ul().cG(`<anonymous function: (\\S+)>`),`$1`).replace(Ul().cG(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Pl(e,t){return[]}function Fl(e,t,n){for(;;)if(t<(Cl(e).length|0)){var r=Cl(e)[t];if(n.startsWith(r))return``+xl(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Il(){this.hX=null,this.hY=null,this.hW=null,this.c3=0}j=Il.prototype=new M,j.constructor=Il;function Ll(){}Ll.prototype=j,j.rD=(function(e){return hl(this,Tl(this,e))}),new P().i(Il,`java.lang.StackTrace$`,{eV:1});var Rl;function zl(){return Rl||=new Il,Rl}function Bl(){}j=Bl.prototype=new M,j.constructor=Bl;function Vl(){}Vl.prototype=j,j.cG=(function(e){return new RegExp(e)}),j.bN=(function(e,t){return new RegExp(e,t)}),new P().i(Bl,`java.lang.StackTrace$StringRE$`,{eW:1});var Hl;function Ul(){return Hl||=new Bl,Hl}function Wl(){this.np=null,this.q9=null,Kl=this,this.np=new Zw(!1),this.q9=new Zw(!0)}j=Wl.prototype=new M,j.constructor=Wl;function Gl(){}Gl.prototype=j,new P().i(Wl,`java.lang.System$Streams$`,{f0:1});var Kl;function ql(){return Kl||=new Wl,Kl}function Jl(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function Yl(){this.hZ=null,this.nq=null,Zl=this,this.hZ=Jl(this),this.nq=null}j=Yl.prototype=new M,j.constructor=Yl;function Xl(){}Xl.prototype=j,j.j6=(function(e,t){if(this.hZ!==null){var n=this.hZ;return nu().i0.call(n,e)?n[e]:t}else return this.nq.j6(e,t)}),new P().i(Yl,`java.lang.System$SystemProperties$`,{f1:1});var Zl;function Ql(){return Zl||=new Yl,Zl}function $l(){this.i0=null,tu=this,this.i0=Object.prototype.hasOwnProperty}j=$l.prototype=new M,j.constructor=$l;function eu(){}eu.prototype=j,new P().i($l,`java.lang.Utils$Cache$`,{f4:1});var tu;function nu(){return tu||=new $l,tu}function ru(e,t){return e===t}function iu(e){return 0}function au(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.bx)}var ou=new P().i(0,`java.lang.Void`,{bx:1},(e=>e===void 0));function su(e,t){throw by(new Sy,`argument type mismatch`)}function cu(){}j=cu.prototype=new M,j.constructor=cu;function lu(){}lu.prototype=j,j.ch=(function(e){return e instanceof N||e instanceof Xa||e instanceof Za||e instanceof Qa||e instanceof $a||e instanceof eo||e instanceof to||e instanceof no||e instanceof ro?e.a.length:su(this,e)}),new P().i(cu,`java.lang.reflect.Array$`,{f6:1});var uu;function du(){return uu||=new cu,uu}function fu(){}j=fu.prototype=new M,j.constructor=fu;function pu(){}pu.prototype=j,j.qV=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),j.p1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.p,s=a.s,c=r,l=t.a[c],u=l.p,d=l.s;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),j.iV=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.p2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.oY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.oX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.p3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.oZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.p0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.a2=(function(e,t){if(t<0)throw new Oy;var n=e.a.length,r=t<n?t:n,i=Da(e).W.Q().W.U(t);return e.x(0,i,0,r),i}),j.ad=(function(e,t,n){if(t>n)throw by(new Sy,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=Da(e).W.Q().W.U(i);return e.x(t,s,0,o),s}),new P().i(fu,`java.util.Arrays$`,{f7:1});var mu;function R(){return mu||=new fu,mu}function z(e,t){this.p=0,this.s=0,this.p=e,this.s=t}j=z.prototype=new M,j.constructor=z;function hu(){}hu.prototype=j,j.r=(function(e){return e instanceof z&&this.p===e.p&&this.s===e.s}),j.z=(function(){return this.p^this.s}),j.F=(function(){return Cu().pA(this.p,this.s)}),j.u7=(function(){return this.p}),j.u6=(function(){return Cu().pz(this.p,this.s)}),j.u5=(function(){return Cu().ge(this.p,this.s)}),j.tK=(function(){return this.p<<24>>24}),j.u3=(function(){return this.p<<16>>16}),j.tW=(function(){return this.p}),j.tX=(function(){return this}),j.tQ=(function(){return Cu().pz(this.p,this.s)}),j.tO=(function(){return Cu().ge(this.p,this.s)}),j.tM=(function(e){return Cu().px(this.p,this.s,e.p,e.s)}),j.tL=(function(e){return Cu().px(this.p,this.s,e.p,e.s)}),j.tP=(function(e){return this.p===e.p&&this.s===e.s}),j.u1=(function(e){return!(this.p===e.p&&this.s===e.s)}),j.tC=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)<(-2147483648^e.p):t<n}),j.tD=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)<=(-2147483648^e.p):t<n}),j.ty=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)>(-2147483648^e.p):t>n}),j.tz=(function(e){var t=this.s,n=e.s;return t===n?(-2147483648^this.p)>=(-2147483648^e.p):t>n}),j.ua=(function(){return new z(~this.p,~this.s)}),j.tw=(function(e){return new z(this.p|e.p,this.s|e.s)}),j.tv=(function(e){return new z(this.p&e.p,this.s&e.s)}),j.tJ=(function(e){return new z(this.p^e.p,this.s^e.s)}),j.tE=(function(e){var t=this.p;return new z(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.s<<e)}),j.tB=(function(e){var t=this.s;return new z(32&e?t>>>e|0:this.p>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),j.tA=(function(e){var t=this.s;return new z(32&e?t>>e:this.p>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),j.u9=(function(){var e=this.p,t=this.s;return new z(-e|0,e===0?-t|0:~t)}),j.tH=(function(e){var t=this.p,n=this.s,r=e.s,i=t+e.p|0;return new z(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),j.tF=(function(e){var t=this.p,n=this.s,r=e.s,i=t-e.p|0;return new z(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),j.tI=(function(e){var t=this.p,n=e.p,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new z(u,(((Math.imul(t,e.s)+Math.imul(this.s,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),j.tx=(function(e){var t=Cu();return new z(t.ri(this.p,this.s,e.p,e.s),t.Y)}),j.tG=(function(e){var t=Cu();return new z(t.sP(this.p,this.s,e.p,e.s),t.Y)}),new P().i(z,`org.scalajs.linker.runtime.RuntimeLong`,{by:1});function gu(e,t,n){return-2097152&n?yu(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function _u(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.Y=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.Y=0,n>>>o|0}else return yu(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.Y=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.Y=s/4294967296|0,s|0}}function vu(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.Y=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.Y=n&(-1+i|0),t):yu(e,t,n,r,i,1)|0;if(-2097152&i)return e.Y=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.Y=a/4294967296|0,a|0}function yu(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,b=d,re=ee-ne|0,ie=(-2147483648^re)>(-2147483648^ee)?-1+(te-b|0)|0:te-b|0;f=re,p=ie,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ae=u,oe=d,se=ae>>>1|0|oe<<31,ce=oe>>>1|0;u=se,d=ce}var x=f,le=p;if(le===i?(-2147483648^x)>=(-2147483648^r):(-2147483648^le)>=(-2147483648^i)){var S=f,ue=4294967296*p+ +(S>>>0),de=4294967296*i+ +(r>>>0);if(a!==1){var fe=ue/de,pe=fe|0,me=fe/4294967296|0,he=m,ge=h,_e=he+pe|0,ve=(-2147483648^_e)<(-2147483648^he)?1+(ge+me|0)|0:ge+me|0;m=_e,h=ve}if(a!==0){var ye=ue%de;f=ye|0,p=ye/4294967296|0}}if(a===0)return e.Y=h,m;if(a===1)return e.Y=p,f;var be=m,xe=4294967296*h+ +(be>>>0),Se=``+f,Ce=Se.length;return``+xe+`000000000`.substring(Ce)+Se}function bu(){this.Y=0}j=bu.prototype=new M,j.constructor=bu;function xu(){}xu.prototype=j,j.pA=(function(e,t){return t===e>>31?``+e:t<0?`-`+gu(this,-e|0,e===0?-t|0:~t):gu(this,e,t)}),j.ge=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),j.pz=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),j.tT=(function(e){return new z(e,e>>31)}),j.tS=(function(e){return new z(this.py(e),this.Y)}),j.py=(function(e){if(e<-0x8000000000000000)return this.Y=-2147483648,0;if(e>=0x8000000000000000)return this.Y=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.Y=e<0&&t!==0?-1+n|0:n,t}),j.px=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),j.ri=(function(e,t,n,r){if((n|r)===0)throw new _y(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.Y=0,-2147483648;var i=Ma(e,n);return this.Y=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.Y=-1,-1;else return this.Y=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=_u(this,a,o,s,c);if((t^r)>=0)return l;var u=this.Y;return this.Y=l===0?-u|0:~u,-l|0}}),j.sP=(function(e,t,n,r){if((n|r)===0)throw new _y(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Na(e,n);return this.Y=i>>31,i}else return this.Y=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.Y=0,0;else return this.Y=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=vu(this,a,o,s,c);if(t<0){var u=this.Y;return this.Y=l===0?-u|0:~u,-l|0}else return l}}),new P().i(bu,`org.scalajs.linker.runtime.RuntimeLong$`,{fa:1});var Su;function Cu(){return Su||=new bu,Su}function wu(){this.i1=null,this.nu=null,Eu=this,this.i1=new eo(0),this.nu=new N(0)}j=wu.prototype=new M,j.constructor=wu;function Tu(){}Tu.prototype=j,new P().i(wu,`scala.Array$EmptyArrays$`,{fg:1});var Eu;function Du(){return Eu||=new wu,Eu}var Ou=new P().i(1,`scala.Function0`,{aI:1}),B=new P().i(1,`scala.Function1`,{e:1});function ku(){}j=ku.prototype=new M,j.constructor=ku;function Au(){}Au.prototype=j;function ju(){this.nw=null,this.gA=null,Nu=this,this.nw=new X((e=>Pu().nw)),this.gA=new $_}j=ju.prototype=new M,j.constructor=ju;function Mu(){}Mu.prototype=j,new P().i(ju,`scala.PartialFunction$`,{fp:1});var Nu;function Pu(){return Nu||=new ju,Nu}function Fu(){this.nB=null,Lu=this,this.nB=new X((e=>Ru().nB))}j=Fu.prototype=new M,j.constructor=Fu;function Iu(){}Iu.prototype=j,j.rJ=(function(e,t){var n=du().ch(e),r=0;if(e instanceof N)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof eo)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ro)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof to)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof no)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Za)for(;r<n;)t.f(Wa(e.a[r])),r=1+r|0;else if(e instanceof Qa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof $a)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof Xa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new By(e)}),new P().i(Fu,`scala.collection.ArrayOps$`,{fw:1});var Lu;function Ru(){return Lu||=new Fu,Lu}function zu(){}j=zu.prototype=new M,j.constructor=zu;function Bu(){}Bu.prototype=j,j.cB=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new P().i(zu,`scala.collection.Hashing$`,{fI:1});var Vu;function Hu(){return Vu||=new zu,Vu}function Uu(e,t){for(var n=e.m();n.n();)t.f(n.j())}function Wu(e,t){for(var n=!0,r=e.m();n&&r.n();)n=!!t.f(r.j());return n}function Gu(e){switch(e.E()){case-1:return!e.m().n();case 0:return!0;default:return!1}}function Ku(e,t,n,r){for(var i=e.m(),a=n,o=du().ch(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.n();)U().iN(t,a,i.j()),a=1+a|0;return a-n|0}function qu(e,t,n,r){return e.E()===0?``+t+r:e.e8(Ck(new wk),t,n,r).b6.o}function Ju(e,t,n,r,i){var a=t.b6;n.length!==0&&(a.o=``+a.o+n);var o=e.m();if(o.n()){var s=o.j();for(a.o=``+a.o+s;o.n();){a.o=``+a.o+r;var c=o.j();a.o=``+a.o+c}}return i.length!==0&&(a.o=``+a.o+i),t}function Yu(e,t){if(e.E()>=0){var n=t.bx(e.E());return e.c0(n,0,2147483647),n}else{var r=null,i=t.aW(),a=i===oo.l();r=[];for(var o=e.m();o.n();){var s=o.j(),c=a?Ga(s):s===null?i.W.z:s;r.push(c)}return(i===io.l()?ou.l():i===Rd.l()||i===a_.l()?F.l():i).W.r().w(r)}}function Xu(e,t){this.nI=null,this.fA=null,this.nI=e,this.fA=t}j=Xu.prototype=new M,j.constructor=Xu;function Zu(){}Zu.prototype=j,j.s2=(function(){return this.nI.ac().m()}),new P().i(Xu,`scala.collection.Iterator$ConcatIteratorCell`,{fR:1});function Qu(){this.nL=null,ed=this,this.nL=new X((e=>td().nL))}j=Qu.prototype=new M,j.constructor=Qu;function $u(){}$u.prototype=j,j.r3=(function(e,t){return KS(e,t)>=0}),j.t8=(function(e,t){for(var n=J_(new Y_,e.length),r=new Cb(e,!1);r.aY<r.es;){for(var i=r.pn(),a=i.length,o=0;o<a&&i.charCodeAt(o)<=32;)o=1+o|0;if(o<a&&i.charCodeAt(o)===t)var s=1+o|0,c=i.substring(s);else var c=i;n.o=``+n.o+c}return n.o}),new P().i(Qu,`scala.collection.StringOps$`,{fY:1});var ed;function td(){return ed||=new Qu,ed}function nd(){}j=nd.prototype=new M,j.constructor=nd;function rd(){}rd.prototype=j,j.g9=(function(e,t){return wy(new Ty,e+` is out of bounds (min 0, max `+t+`)`)}),new P().i(nd,`scala.collection.generic.CommonErrors$`,{g3:1});var id;function ad(){return id||=new nd,id}function od(){try{return Op().pB(Ql().j6(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function sd(){this.nP=0,ld=this,this.nP=od()}j=sd.prototype=new M,j.constructor=sd;function cd(){}cd.prototype=j,new P().i(sd,`scala.collection.immutable.IndexedSeqDefaults$`,{gb:1});var ld;function ud(){return ld||=new sd,ld}function dd(){this.iq=null}j=dd.prototype=new M,j.constructor=dd;function fd(){}fd.prototype=j,j.iW=(function(){var e=this.iq;if(e===null)throw new Cy(`uninitialized`);return e.ac()}),j.ja=(function(e){if(this.iq!==null)throw new Cy(`already initialized`);this.iq=e}),new P().i(dd,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{gf:1});function pd(){this.nU=null,hd=this,this.nU=new kg(0,0,new N(0),new eo(0),0,0)}j=pd.prototype=new M,j.constructor=pd;function md(){}md.prototype=j,new P().i(pd,`scala.collection.immutable.MapNode$`,{gw:1});var hd;function gd(){return hd||=new pd,hd}function _d(e,t,n){return MS(new PS,n+` is out of bounds (min 0, max `+(-1+du().ch(t)|0))}function vd(){}j=vd.prototype=new M,j.constructor=vd;function yd(){}yd.prototype=j,j.pC=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw _d(this,e,t);var n=new eo(-1+e.a.length|0);e.x(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.x(r,n,t,i),n}),j.sa=(function(e,t,n){if(t<0||t>e.a.length)throw _d(this,e,t);var r=new eo(1+e.a.length|0);e.x(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.x(t,r,i,a),r});var bd=new P().i(0,`scala.collection.immutable.Node`,{aS:1});function xd(){this.fJ=0,Cd=this,this.fJ=Pa(7)}j=xd.prototype=new M,j.constructor=xd;function Sd(){}Sd.prototype=j,j.eG=(function(e,t){return 31&(e>>>t|0)}),j.eb=(function(e){return 1<<e}),j.s6=(function(e,t){return Op().ea(e&(-1+t|0))}),j.cR=(function(e,t,n){return e===-1?t:this.s6(e,n)}),new P().i(xd,`scala.collection.immutable.Node$`,{gz:1});var Cd;function wd(){return Cd||=new xd,Cd}function Td(){this.iu=null,this.bu=null,this.cO=null,this.f1=null,this.iv=null,this.nY=null,Dd=this,this.iu=new N(0),this.bu=new(F.r().r()).C(0),this.cO=new(F.r().r().r()).C(0),this.f1=new(F.r().r().r().r()).C(0),this.iv=new(F.r().r().r().r().r()).C(0),this.nY=new(F.r().r().r().r().r().r()).C(0)}j=Td.prototype=new M,j.constructor=Td;function Ed(){}Ed.prototype=j,j.f7=(function(e,t){var n=e.a.length,r=new N(1+n|0);return e.x(0,r,0,n),r.a[n]=t,r}),j.K=(function(e,t){var n=R().a2(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),j.cP=(function(e,t){var n=Da(t).W.Q().W.U(1+t.a.length|0),r=t.a.length;return t.x(0,n,1,r),n.a[0]=e,n}),j.iY=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.f(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.iY(a,t.a[r],n),r=1+r|0}),j.ck=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.f(r);if(!Object.is(r,i))return this.sl(e,t,n,i);n=1+n|0}return e}),j.sl=(function(e,t,n,r){var i=new N(e.a.length);n>0&&e.x(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.f(e.a[a]),a=1+a|0;return i}),j.aa=(function(e,t,n){if(e===1)return this.ck(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.aa(-1+e|0,i,n);if(i!==a)return this.sm(e,t,n,r,a);r=1+r|0}return t}),j.sm=(function(e,t,n,r,i){var a=Da(t).W.Q().W.U(t.a.length);r>0&&t.x(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.aa(-1+e|0,t.a[o],n),o=1+o|0;return a}),new P().i(Td,`scala.collection.immutable.VectorStatics$`,{gQ:1});var Dd;function V(){return Dd||=new Td,Dd}function Od(e,t,n){this.f3=null,this.dc=0,this.b5=null,this.f3=e,this.dc=t,this.b5=n}j=Od.prototype=new M,j.constructor=Od;function kd(){}kd.prototype=j,j.rF=(function(e,t){for(var n=this;;)if(t===n.dc&&H().t(e,n.f3))return n;else if(n.b5===null||n.dc>t)return null;else n=n.b5}),j.F=(function(){return`Node(`+this.f3+`, `+this.dc+`) -> `+this.b5});var Ad=new P().i(Od,`scala.collection.mutable.HashSet$Node`,{h8:1});function jd(){}j=jd.prototype=new M,j.constructor=jd;function Md(){}Md.prototype=j,j.oL=(function(e,t,n){if(t!==e)throw new My(n)}),new P().i(jd,`scala.collection.mutable.MutationTracker$`,{he:1});var Nd;function Pd(){return Nd||=new jd,Nd}function Fd(){}j=Fd.prototype=new M,j.constructor=Fd;function Id(){}Id.prototype=j,j.t=(function(e,t){return e===t||(jp(e)?this.rp(e,t):e instanceof Ea?this.rn(e,t):e===null?t===null:ka(e,t))}),j.rp=(function(e,t){if(jp(t))return this.ro(e,t);if(t instanceof Ea){if(typeof e==`number`)return+e===t.c;if(e instanceof z){var n=Ka(e),r=n.p,i=n.s,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ka(e,t)}else return e===null?t===null:ka(e,t)}),j.ro=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof z){var r=Ka(t);return n===Cu().ge(r.p,r.s)}else return!1}else if(e instanceof z){var i=Ka(e),a=i.p,o=i.s;if(t instanceof z){var s=Ka(t),c=s.p,l=s.s;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Cu().ge(a,o)===u}else return!1}else return e===null?t===null:ka(e,t)}),j.rn=(function(e,t){if(t instanceof Ea)return e.c===t.c;if(jp(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof z){var n=Ka(t),r=n.p,i=n.s,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ka(t,e)}else return e===null&&t===null}),new P().i(Fd,`scala.runtime.BoxesRunTime$`,{hP:1});var Ld;function H(){return Ld||=new Fd,Ld}var Rd=new P().i(0,`scala.runtime.Null$`,{hS:1});function zd(){}j=zd.prototype=new M,j.constructor=zd;function Bd(){}Bd.prototype=j,j.eD=(function(e,t){if(e instanceof N||e instanceof eo||e instanceof ro||e instanceof to||e instanceof no)return e.a[t];if(e instanceof Za)return Wa(e.a[t]);if(e instanceof Qa||e instanceof $a||e instanceof Xa)return e.a[t];throw e===null?new ky:new By(e)}),j.iN=(function(e,t,n){if(e instanceof N)e.a[t]=n;else if(e instanceof eo)e.a[t]=n|0;else if(e instanceof ro)e.a[t]=+n;else if(e instanceof to)e.a[t]=Ka(n);else if(e instanceof no)e.a[t]=Math.fround(n);else if(e instanceof Za)e.a[t]=Ga(n);else if(e instanceof Qa)e.a[t]=n|0;else if(e instanceof $a)e.a[t]=n|0;else if(e instanceof Xa)e.a[t]=!!n;else if(e===null)throw new ky;else throw new By(e)}),j.iI=(function(e){return qu(e.cm(),e.bM()+`(`,`,`,`)`)}),j.d=(function(e){return e===null?null:e.a.length===0?yC(CC()):new bO(e)}),j.tq=(function(e){return e===null?null:new gO(e)}),new P().i(zd,`scala.runtime.ScalaRunTime$`,{hU:1});var Vd;function U(){return Vd||=new zd,Vd}function Hd(){}j=Hd.prototype=new M,j.constructor=Hd;function Ud(){}Ud.prototype=j,j.h=(function(e,t){var n=this.dp(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.dp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.H=(function(e,t){return this.qU(e^t)}),j.qU=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.fc=(function(e){var t=e.p,n=e.s;return n===t>>31?t:t^n}),j.cA=(function(e){var t=Pa(e);if(t===e)return t;var n=Cu(),r=n.py(e),i=n.Y;return Cu().ge(r,i)===e?r^i:ml().jr(e)}),j.V=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.cA(+e);if(e instanceof z){var t=Ka(e);return this.fc(new z(t.p,t.s))}else return Aa(e)}),j.eF=(function(e){throw wy(new Ty,``+e)}),new P().i(Hd,`scala.runtime.Statics$`,{hW:1});var Wd;function W(){return Wd||=new Hd,Wd}function Gd(){}j=Gd.prototype=new M,j.constructor=Gd;function Kd(){}Kd.prototype=j,j.qO=(function(e){return e}),new P().i(Gd,`scala.scalajs.js.defined$`,{i2:1});var qd;function Jd(){return qd||=new Gd,qd}function Yd(){}j=Yd.prototype=new M,j.constructor=Yd;function Xd(){}Xd.prototype=j,j.t4=(function(e,t){return setTimeout((()=>{t.ac()}),e)}),new P().i(Yd,`scala.scalajs.js.timers.package$`,{i3:1});var Zd;function Qd(){return Zd||=new Yd,Zd}function $d(){}j=$d.prototype=new M,j.constructor=$d;function ef(){}ef.prototype=j,j.th=(function(e){if(e instanceof zD)return e.gN;var t=[];return e.bJ(new X((e=>t.push(e)|0))),t}),new P().i($d,`scala.scalajs.runtime.Compat$`,{ic:1});var tf;function nf(){return tf||=new $d,tf}function rf(){}j=rf.prototype=new M,j.constructor=rf;function af(){}af.prototype=j,j.t7=(function(e){var t=`Illegal command line`+(e.pf()===0?``:e.pf()===1?` after first argument`:` after `+e.pf()+` arguments`)+`: `+e.tY();$p().sJ().sf(t+`
`)}),new P().i(rf,`scala.util.CommandLineParser$`,{ie:1});function of(e){this.iE=null,this.iE=e}j=of.prototype=new M,j.constructor=of;function sf(){}sf.prototype=j,j.F=(function(){return`DynamicVariable(`+this.iE+`)`}),new P().i(of,`scala.util.DynamicVariable`,{ih:1});function cf(){}j=cf.prototype=new M,j.constructor=cf;function lf(){}lf.prototype=j,j.gV=(function(e){return!0}),new P().i(cf,`scala.util.control.NonFatal$`,{ij:1});var uf;function df(){return uf||=new cf,uf}function ff(){}j=ff.prototype=new M,j.constructor=ff;function pf(){}pf.prototype=j,j.h=(function(e,t){var n=this.dp(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.dp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.H=(function(e,t){return this.bO(e^t)}),j.bO=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.pR=(function(e,t,n){var r=n;return r=this.h(r,WS(`Tuple2`)),r=this.h(r,e),r=this.h(r,t),this.H(r,2)}),j.ei=(function(e,t,n){var r=e.bK();if(r===0)return WS(e.bM());var i=t;n||(i=this.h(i,WS(e.bM())));for(var a=0;a<r;)i=this.h(i,W().V(e.bL(a))),a=1+a|0;return this.H(i,r)}),j.jD=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.n();){var s=o.j(),c=W().V(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.h(l,n),l=this.h(l,r),l=this.dp(l,a),this.H(l,i)}),j.sI=(function(e,t){var n=e.m(),r=t;if(!n.n())return this.H(r,0);var i=n.j();if(!n.n())return this.H(this.h(r,W().V(i)),1);var a=n.j(),o=W().V(i);r=this.h(r,o);for(var s=r,c=W().V(a),l=c-o|0,u=2;n.n();){r=this.h(r,c);var d=W().V(n.j());if(l!==(d-c|0)||l===0){for(r=this.h(r,d),u=1+u|0;n.n();)r=this.h(r,W().V(n.j())),u=1+u|0;return this.H(r,u)}c=d,u=1+u|0}return this.bO(this.h(this.h(s,l),c))}),j.oz=(function(e,t){var n=t,r=du().ch(e);switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().V(U().eD(e,0))),1);default:var i=W().V(U().eD(e,0));n=this.h(n,i);for(var a=n,o=W().V(U().eD(e,1)),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().V(U().eD(e,c));if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().V(U().eD(e,c))),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.sN=(function(e,t,n,r){return this.bO(this.h(this.h(this.h(r,e),t),n))}),j.s7=(function(e,t){var n=t,r=e.u();switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().V(e.y(0))),1);default:var i=W().V(e.y(0));n=this.h(n,i);for(var a=n,o=W().V(e.y(1)),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().V(e.y(c));if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().V(e.y(c))),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.sh=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.e();){var l=c.A(),u=c.w(),d=W().V(l);switch(r=this.h(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.sN(s,a,o,t):this.H(r,n)}),j.oI=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.h(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]?1231:1237),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oA=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oB=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oC=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().cA(e.a[0])),1);default:var i=W().cA(e.a[0]);n=this.h(n,i);for(var a=n,o=W().cA(e.a[1]),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().cA(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().cA(e.a[c])),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oD=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,W().cA(e.a[0])),1);default:var i=W().cA(e.a[0]);n=this.h(n,i);for(var a=n,o=W().cA(e.a[1]),s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=W().cA(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,W().cA(e.a[c])),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oE=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oF=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:var i=n,a=e.a[0];return this.H(this.h(i,W().fc(new z(a.p,a.s))),1);default:var o=e.a[0],s=W().fc(new z(o.p,o.s));n=this.h(n,s);for(var c=n,l=e.a[1],u=W().fc(new z(l.p,l.s)),d=u-s|0,f=2;f<r;){n=this.h(n,u);var p=e.a[f],m=W().fc(new z(p.p,p.s));if(d!==(m-u|0)||d===0){for(n=this.h(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.h(h,W().fc(new z(g.p,g.s))),f=1+f|0}return this.H(n,r)}u=m,f=1+f|0}return this.bO(this.h(this.h(c,d),u))}}),j.oG=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,e.a[0]),1);default:var i=e.a[0];n=this.h(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.h(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.h(n,l),c=1+c|0;c<r;)n=this.h(n,e.a[c]),c=1+c|0;return this.H(n,r)}o=l,c=1+c|0}return this.bO(this.h(this.h(a,s),o))}}),j.oH=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.H(n,0);case 1:return this.H(this.h(n,0),1);default:n=this.h(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.h(n,a),o!==(-a|0)||o===0){for(n=this.h(n,0),s=1+s|0;s<r;)n=this.h(n,0),s=1+s|0;return this.H(n,r)}a=0,s=1+s|0}return this.bO(this.h(this.h(i,o),a))}});function mf(e){this.eO=null,this.jY=null,this.ht=!1,this.jY=e,ss(this),this.ht=!1}j=mf.prototype=new M,j.constructor=mf;function hf(){}hf.prototype=j,j.sK=(function(e){this.ht?(ds(e),this.jY.ac()):us(this,e)}),j.sg=(function(){cs(this),this.ht=!0}),new P().i(mf,`com.raquo.airstream.ownership.OneTimeOwner`,{cK:1,cL:1});function gf(){}j=gf.prototype=new M,j.constructor=gf;function _f(){}_f.prototype=j,j.rf=(function(e){return e!==null}),j.rl=(function(e){return e?``:null}),j.f8=(function(e){return this.rf(e)}),j.ee=(function(e){return this.rl(!!e)}),new P().i(gf,`com.raquo.laminar.codecs.package$$anon$1`,{d9:1,aq:1});function vf(e){if(e===null)throw new ky}j=vf.prototype=new M,j.constructor=vf;function yf(){}yf.prototype=j,j.ee=(function(e){return e}),j.f8=(function(e){return e}),new P().i(vf,`com.raquo.laminar.codecs.package$$anon$2`,{da:1,aq:1});function bf(e){if(e===null)throw new ky}j=bf.prototype=new M,j.constructor=bf;function xf(){}xf.prototype=j,j.re=(function(e){return Cp().js(e)}),j.f8=(function(e){return this.re(e)}),j.ee=(function(e){return``+ +e}),new P().i(bf,`com.raquo.laminar.codecs.package$$anon$4`,{db:1,aq:1});function Sf(e){return new dc(e,new Q((e=>e+`px`)))}function Cf(e,t,n,r){this.ls=null,this.lu=null,this.lt=null,this.hD=null,this.ls=t,this.lu=n,this.lt=r,this.hD=new Tf(r)}j=Cf.prototype=new bc,j.constructor=Cf;function wf(){}wf.prototype=j,j.gS=(function(e){return new Jm(this,(Z().b.qq(),uc().pp(e,this.lt)))}),new P().i(Cf,`com.raquo.laminar.keys.CompositeKey`,{dH:1,A:1});function Tf(e){this.hE=null,this.hE=e}j=Tf.prototype=new M,j.constructor=Tf;function Ef(){}Ef.prototype=j,j.oU=(function(e){return uc().pp(e,this.hE)}),j.oW=(function(e){return qu(e,``,this.hE,``)}),j.f8=(function(e){return this.oU(e)}),j.ee=(function(e){return this.oW(e)}),new P().i(Tf,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{dJ:1,aq:1});function Df(e){if(e===null)throw new ky}j=Df.prototype=new M,j.constructor=Df;function Of(){}Of.prototype=j,new P().i(Df,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{dL:1,dK:1});function kf(e){this.gs=null,this.gs=e}j=kf.prototype=new bc,j.constructor=kf;function Af(){}Af.prototype=j;var jf=new P().i(kf,`com.raquo.laminar.keys.EventProp`,{dP:1,A:1});function Mf(e,t,n){return e.cq=t,e.cX=n,e}function Nf(){this.cq=null,this.cX=null}j=Nf.prototype=new bc,j.constructor=Nf;function Pf(){}Pf.prototype=j,j.c=(function(e){return new $m(this,e,new Pv(((e,t,n)=>{Ms().jz(e,t,n)})))}),j.U=(function(e){return new th(this,e.hf(),new Pv(((e,t,n)=>{Ms().jz(e,this,t)})))}),new P().i(Nf,`com.raquo.laminar.keys.HtmlAttr`,{ac:1,A:1});function Ff(e,t){this.cI=null,this.hF=null,this.cI=e,this.hF=t}j=Ff.prototype=new bc,j.constructor=Ff;function If(){}If.prototype=j,j.c=(function(e){return new $m(this,e,new Pv(((e,t,n)=>{Ms().pK(e,t,n)})))}),j.U=(function(e){var t=this.cI===`value`?new Pv(((e,t,n)=>{var r=this.hF.ee(t),i=Ms().rW(e,this);i!==void 0&&H().t(r,i)||Ms().pL(e,this,r)})):new Pv(((e,t,n)=>{Ms().pK(e,this,t)}));return new th(this,e.hf(),t)}),new P().i(Ff,`com.raquo.laminar.keys.HtmlProp`,{bd:1,A:1});function Lf(e,t,n){this.hH=null,this.hG=null,this.gt=null,this.gu=null,this.hH=e,this.hG=t;var r=n.e()?$S():new eC(n.Z()+`:`+e);this.gt=r.e()?e:r.Z(),this.gu=n.e()?$S():new eC(wc().sr(n.Z()))}j=Lf.prototype=new bc,j.constructor=Lf;function Rf(){}Rf.prototype=j,new P().i(Lf,`com.raquo.laminar.keys.SvgAttr`,{dQ:1,A:1});function zf(){}j=zf.prototype=new M,j.constructor=zf;function Bf(){}Bf.prototype=j,j.cb=(function(e){}),new P().i(zf,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{dY:1,Y:1});function Vf(e,t){if(this.lF=null,this.lF=e,t===null)throw new ky}j=Vf.prototype=new M,j.constructor=Vf;function Hf(){}Hf.prototype=j,j.cb=(function(e){var t=Bo(),n=(()=>{this.lF.f(e)});if(Bo(),t.bf)n();else{t.bf=!0;try{n()}finally{t.bf=!1,Io(t)}}}),new P().i(Vf,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{dZ:1,Y:1});function Uf(){}j=Uf.prototype=new M,j.constructor=Uf;function Wf(){}Wf.prototype=j,new P().i(Uf,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{e2:1,e0:1});function Gf(){}j=Gf.prototype=new M,j.constructor=Gf;function Kf(){}Kf.prototype=j,new P().i(Gf,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{e4:1,e3:1});var qf;function Jf(){return qf||=new Gf,qf}function Yf(e,t){if(this.lG=null,this.lG=e,t===null)throw new ky}j=Yf.prototype=new M,j.constructor=Yf;function Xf(){}Xf.prototype=j,j.qR=(function(e){return this.lG.f(e)}),new P().i(Yf,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{e7:1,e5:1});function Zf(e){e.oQ(new Qo(new kv((()=>{throw eg(new tg,`Attempting to use owner of unmounted element: `+qu(Ms().rd(e.eH(),(Ms(),$())),``,` > `,``))}))))}function Qf(e,t,n){return e.hQ=t,e}function $f(){this.hQ=null}j=$f.prototype=new M,j.constructor=$f;function ep(){}ep.prototype=j,j.jn=(function(){return this.hQ}),j.C=(function(e){var t=this.qY();return e.bJ(new Q((e=>{e.cb(t)}))),t}),j.qY=(function(){return new AS(this,Ms().r9(this))}),new P().i($f,`com.raquo.laminar.tags.HtmlTag`,{bj:1,aF:1});function tp(e,t){this.lO=null,this.lO=e}j=tp.prototype=new M,j.constructor=tp;function np(){}np.prototype=j,new P().i(tp,`com.raquo.laminar.tags.SvgTag`,{eg:1,aF:1});function rp(){}j=rp.prototype=new M,j.constructor=rp;function ip(){}ip.prototype=j,j.ee=(function(e){return e}),j.f8=(function(e){return e}),new P().i(rp,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{ew:1,aq:1});function ap(e,t){return e.dw=t,e.f5(),e}function op(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1}j=op.prototype=new M,j.constructor=op;function sp(){}sp.prototype=j,j.gi=(function(){return this.du||=(this.dt=Z().b.t9(),!0),this.dt}),j.te=(function(){return this.dx||=(this.dv=new ah(this.dw,Zc().qp(),(Zc(),void 0)),!0),this.dv}),j.q=(function(e,t){var n=this.te().C(U().d(new(I.r()).C([])));return e.bJ(new Q((e=>{e.f(this).cb(n)}))),t.bJ(new Q((e=>{e.cb(n)}))),n}),j.fg=(function(){return this.dz||=(this.dy=new Yh,!0),this.dy});function cp(e){return(32&e.gw)<<24>>24||(e.hR=new eo(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.gw=(32|e.gw)<<24>>24),e.hR}function lp(e){return(32&e.gw)<<24>>24?e.hR:cp(e)}function up(){this.hR=null,this.gw=0}j=up.prototype=new M,j.constructor=up;function dp(){}dp.prototype=j,j.ti=(function(e){if(!(e>=0&&e<=1114111))throw xy(new Sy);return String.fromCodePoint(e)}),j.rh=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=R().qV(lp(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-lp(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new P().i(up,`java.lang.Character$`,{eE:1,a:1});var fp;function pp(){return fp||=new up,fp}function mp(e){return(1&e.dA)<<24>>24||(e.hU=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.dA=(1|e.dA)<<24>>24),e.hU}function hp(e){return(1&e.dA)<<24>>24?e.hU:mp(e)}function gp(e){return(2&e.dA)<<24>>24||(e.hT=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.dA=(2|e.dA)<<24>>24),e.hT}function _p(e){return(2&e.dA)<<24>>24?e.hT:gp(e)}function vp(e,t){var n=_p(e).exec(t);n===null&&yp(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&yp(t);var s=e.sL(i,a,o,15);return r===`-`?-s:s}function yp(e){throw new US(`For input string: "`+e+`"`)}function bp(){this.hU=null,this.hT=null,this.dA=0}j=bp.prototype=new M,j.constructor=bp;function xp(){}xp.prototype=j,j.js=(function(e){var t=hp(this).exec(e);return t===null?vp(this,e):+parseFloat(t[1])}),j.sL=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,g=+parseInt(m,16),_=Pa(+parseInt(n,10))+h|0,v=_/3|0,y=+(2**v),ee=_-(v<<1)|0;return g*y*y*+(2**ee)}),new P().i(bp,`java.lang.Double$`,{eG:1,a:1});var Sp;function Cp(){return Sp||=new bp,Sp}function wp(e){throw new US(`For input string: "`+e+`"`)}function Tp(){}j=Tp.prototype=new M,j.constructor=Tp;function Ep(){}Ep.prototype=j,j.pB=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&wp(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&wp(e);for(var s=0;o!==n;){var c=pp().rh(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&wp(e),o=1+o|0}return i?-s|0:s|0}),j.ea=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new P().i(Tp,`java.lang.Integer$`,{eL:1,a:1});var Dp;function Op(){return Dp||=new Tp,Dp}function kp(){}j=kp.prototype=new M,j.constructor=kp;function Ap(){}Ap.prototype=j;function jp(e){return e instanceof kp||typeof e==`number`||e instanceof z}function Mp(e,t,n,r,i){this.eS=null,this.fv=null,this.eT=null,this.eU=0,this.eR=0,this.eS=e,this.fv=t,this.eT=n,this.eU=r,this.eR=i}j=Mp.prototype=new M,j.constructor=Mp;function Np(){}Np.prototype=j,j.r=(function(e){return e instanceof Mp&&this.eT===e.eT&&this.eU===e.eU&&this.eR===e.eR&&this.eS===e.eS&&this.fv===e.fv}),j.F=(function(){var e=``;return this.eS!==`<jscode>`&&(e=``+e+this.eS+`.`),e=``+e+this.fv,this.eT===null?e+=`(Unknown Source)`:(e=e+`(`+this.eT,this.eU>=0&&(e=e+`:`+this.eU,this.eR>=0&&(e=e+`:`+this.eR)),e+=`)`),e}),j.z=(function(){return WS(this.eS)^WS(this.fv)^WS(this.eT)^this.eU^this.eR});var Pp=new P().i(Mp,`java.lang.StackTraceElement`,{bv:1,a:1});function Fp(){}j=Fp.prototype=new M,j.constructor=Fp;function Ip(){}Ip.prototype=j,j.ss=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new YS;for(var i=``,a=t;a!==r;)i+=``+Fa(e.a[a]),a=1+a|0;return i}),new P().i(Fp,`java.lang.String$`,{eX:1,a:1});var Lp;function Rp(){return Lp||=new Fp,Lp}function zp(e,t,n,r,i){return e.ns=t,e.nt=i,i&&e.rE(),e}var Bp=class extends Error{constructor(){super(),this.ns=null,this.nt=!1,this.nr=null,this.gy=null}pg(e){return this}g8(){return this.ns}rE(){var e=this instanceof Bw?this.bv:this;return this.nr=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}rY(){return this.gy===null&&(this.nt?this.gy=zl().rD(this.nr):this.gy=new(Pp.r()).C(0)),this.gy}F(){var e=Oa(this),t=this.g8();return t===null?e:e+`: `+t}z(){return Ja.prototype.z.call(this)}r(e){return Ja.prototype.r.call(this,e)}get message(){var e=this.g8();return e===null?``:e}get name(){return Oa(this)}toString(){return this.F()}};function Vp(){this.aJ=null,Up=this,this.aJ=new Py}j=Vp.prototype=new M,j.constructor=Vp;function Hp(){}Hp.prototype=j,new P().i(Vp,`scala.$less$colon$less$`,{fd:1,a:1});var Up;function Wp(){return Up||=new Vp,Up}function Gp(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)U().iN(r,s,U().eD(t,o)),o=1+o|0,s=1+s|0}function Kp(){}j=Kp.prototype=new M,j.constructor=Kp;function qp(){}qp.prototype=j,j.p7=(function(e,t){var n=e.E();if(n>-1){for(var r=t.bx(n),i=e.m(),a=0;a<n;)U().iN(r,a,i.j()),a=1+a|0;return r}else{var o=null,s=t.aW(),c=s===oo.l();o=[];for(var l=e.m();l.n();){var u=l.j(),d=c?Ga(u):u===null?s.W.z:u;o.push(d)}return(s===io.l()?ou.l():s===Rd.l()||s===a_.l()?F.l():s).W.r().w(o)}}),j.g1=(function(e,t,n,r,i){var a=Da(e);a.W.Z&&Da(n).W.R(a.W)?e.x(t,n,r,i):Gp(this,e,t,n,r,i)}),j.p4=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().t(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new P().i(Kp,`scala.Array$`,{ff:1,a:1});var Jp;function Yp(){return Jp||=new Kp,Jp}function Xp(){this.nv=null,Qp=this,this.nv=new of(ql().np)}j=Xp.prototype=new M,j.constructor=Xp;function Zp(){}Zp.prototype=j,j.sJ=(function(){return this.nv.iE}),new P().i(Xp,`scala.Console$`,{fh:1,hk:1});var Qp;function $p(){return Qp||=new Xp,Qp}function em(){}j=em.prototype=new M,j.constructor=em;function tm(){}tm.prototype=j,j.F=(function(){return`<function1>`});function nm(){}j=nm.prototype=new Au,j.constructor=nm;function rm(){}rm.prototype=j,j.tr=(function(e){return e===null?null:e.a.length===0?YC().o3:new KO(e)});function im(){}j=im.prototype=new M,j.constructor=im;function am(){}am.prototype=j,j.bY=(function(e){return e===null?$S():new eC(e)}),new P().i(im,`scala.Option$`,{fo:1,a:1});var om;function sm(){return om||=new im,om}function cm(e,t,n){return e.cC(t)?e.f(t):n.f(t)}function lm(){}j=lm.prototype=new yd,j.constructor=lm;function um(){}um.prototype=j;function dm(e,t){if(t===e)e.bc(Lx().p8(t));else for(var n=t.m();n.n();)e.b7(n.j());return e}function fm(){this.qe=null,this.qn=null,this.qf=null,this.qi=null,this.qj=null,this.qh=null,this.qg=null,this.qd=null,this.qo=null,this.qb=null,this.qm=null,this.qc=null,this.qk=null,this.ql=null,mm=this,this.qe=RT(),this.qn=bE(),this.qf=HT(),this.qi=eE(),this.qj=iE(),this.qh=XT(),this.qg=KT(),this.qd=PT(),this.qo=wE(),this.qb=AT(),this.qm=gE(),this.qc=gE(),this.qk=cE(),this.ql=fE()}j=fm.prototype=new M,j.constructor=fm;function pm(){}pm.prototype=j,j.ow=(function(e){return e===so.l()?RT():e===co.l()?bE():e===oo.l()?HT():e===lo.l()?eE():e===uo.l()?iE():e===fo.l()?XT():e===po.l()?KT():e===ao.l()?PT():e===io.l()?wE():e===F.l()?gE():e===a_.l()?cE():e===Rd.l()?fE():new nw(e)}),new P().i(fm,`scala.reflect.ClassTag$`,{hm:1,a:1});var mm;function hm(){return mm||=new fm,mm}function gm(){}j=gm.prototype=new M,j.constructor=gm;function _m(){}_m.prototype=j,j.F=(function(){return`<function0>`});function vm(){}j=vm.prototype=new M,j.constructor=vm;function ym(){}ym.prototype=j,j.F=(function(){return`<function1>`});function bm(){}j=bm.prototype=new M,j.constructor=bm;function xm(){}xm.prototype=j,j.F=(function(){return`<function2>`});function Sm(){}j=Sm.prototype=new M,j.constructor=Sm;function Cm(){}Cm.prototype=j,j.F=(function(){return`<function3>`});function wm(e){this.gL=!1,this.gL=e}j=wm.prototype=new M,j.constructor=wm;function Tm(){}Tm.prototype=j,j.F=(function(){return``+this.gL}),new P().i(wm,`scala.runtime.BooleanRef`,{hO:1,a:1});function Em(e){this.eA=0,this.eA=e}j=Em.prototype=new M,j.constructor=Em;function Dm(){}Dm.prototype=j,j.F=(function(){return``+this.eA}),new P().i(Em,`scala.runtime.IntRef`,{hQ:1,a:1});function Om(e){this.gM=null,this.gM=e}j=Om.prototype=new M,j.constructor=Om;function km(){}km.prototype=j,j.F=(function(){return``+this.gM}),new P().i(Om,`scala.runtime.ObjectRef`,{hT:1,a:1});function Am(){this.ar=0,this.e7=0,this.oj=0,this.iF=0,Mm=this,this.ar=WS(`Seq`),this.e7=WS(`Map`),this.oj=WS(`Set`),this.iF=this.jD($(),this.e7)}j=Am.prototype=new pf,j.constructor=Am;function jm(){}jm.prototype=j,j.cH=(function(e,t){return this.pR(W().V(e),W().V(t),-889275714)}),j.pJ=(function(e){return YE(e)?this.s7(e,this.ar):e instanceof OO?this.sh(e,this.ar):this.sI(e,this.ar)}),j.sn=(function(e){if(e.e())return this.iF;var t=new Nm,n=this.e7;return e.eE(t),n=this.h(n,t.gO),n=this.h(n,t.gP),n=this.dp(n,t.gQ),this.H(n,t.gR)}),new P().i(Am,`scala.util.hashing.MurmurHash3$`,{il:1,ik:1});var Mm;function G(){return Mm||=new Am,Mm}function Nm(){this.gO=0,this.gP=0,this.gR=0,this.gQ=0,this.gO=0,this.gP=0,this.gR=0,this.gQ=1}j=Nm.prototype=new M,j.constructor=Nm;function Pm(){}Pm.prototype=j,j.F=(function(){return`<function2>`}),j.qN=(function(e,t){var n=G().cH(e,t);this.gO=this.gO+n|0,this.gP^=n,this.gQ=Math.imul(this.gQ,1|n),this.gR=1+this.gR|0}),j.dg=(function(e,t){this.qN(e,t)}),new P().i(Nm,`scala.util.hashing.MurmurHash3$accum$1`,{im:1,aJ:1});var Fm=class extends Bp{};function Im(){this.hj=null,this.jF=null,this.jG=null,Rm=this,this.hj=Lx().oy(U().d(new(B.r()).C([]))),this.jF=new Q((e=>{try{console.error(this.fa(e)+`
`+this.rX(e,`
`))}catch(e){var t=e instanceof Bp?e:new Bw(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.jG=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Bw?t.bv:t})),this.sO(this.jF)}j=Im.prototype=new M,j.constructor=Im;function Lm(){}Lm.prototype=j,j.fa=(function(e){try{var t=e.g8()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Da(e).j7()+`: `+t}),j.rX=(function(e,t){try{return qu(sg().tr(e.rY()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.sO=(function(e){this.hj.b7(e)}),j.cn=(function(e){for(var t=this.hj.m();t.n();){var n=t.j();try{n.f(e)}catch(e){var r=e instanceof Bp?e:new Bw(e),i=this.jG;if(n===null?i===null:n.r(i))throw r instanceof Bw?r.bv:r;console.warn(`Error processing an unhandled error callback:`),Qd().t4(0,new kv((e=>(()=>{throw e instanceof Bw?e.bv:e}))(r)))}}}),new P().i(Im,`com.raquo.airstream.core.AirstreamError$`,{cw:1,hi:1,hj:1});var Rm;function zm(){return Rm||=new Im,Rm}function Bm(e){e.h2(!0),e.jl(void 0)}function Vm(e,t,n){return zv(e,bo().pX(t,Pu().gA,!0),n)}function Hm(e,t){e.jd()?Uv(e,t):Gm(e).push(new kv((()=>{Uv(e,t)})))}function Um(e,t){e.jd()?Hv(e,t):Gm(e).push(new kv((()=>{Hv(e,t)})))}function Wm(e){return qv(e)>0}function Gm(e){var t=e.jk();if(t===void 0){var n=ws().bj(U().d(new(Ou.r()).C([])));return e.jl(n),n}else return t}var Km=new P().i(1,`com.raquo.airstream.core.Observer`,{az:1,av:1,ah:1});function K(e,t,n){return new A_(n.qR(t))}function qm(e,t,n,r){return new Vf(new Q((e=>{(Rs(),new Ns(t,null,null)).bJ(new Q((e=>(t=>{n.f(t).cb(e)}))(e)))})),Ac())}function Jm(e,t){this.lz=null,this.hI=null,this.lz=e,this.hI=t}j=Jm.prototype=new M,j.constructor=Jm;function Ym(){}Ym.prototype=j,j.cb=(function(e){this.hI.e()||ly(e,this.lz,null,this.hI,$())}),new P().i(Jm,`com.raquo.laminar.modifiers.CompositeKeySetter`,{dT:1,Y:1,bf:1});function Xm(e,t){this.eQ=null,this.hJ=null,this.hK=null,this.eQ=e,this.hJ=(n=>{var r=e.fp.f(n);r.e()||t.f(r.Z())}),this.hK=(()=>{var e=null;e=this;var t={};if(e===null)throw new ky;return t.capture=e.eQ.fr,t.passive=e.eQ.fq,t})()}j=Xm.prototype=new M,j.constructor=Xm;function Zm(){}Zm.prototype=j,j.cb=(function(e){this.qW(e,!1)}),j.qW=(function(e,t){if(cy(e,this)===-1){var n=new Q((t=>(Ms().qw(e.bp,this),new fs(t.lx,new kv((()=>{var t=cy(e,this);t!==-1&&(sy(e,t),Ms().sQ(e.bp,this))})))))),r=t?Gc().tl(e,n):os().hh(e.cJ,new Q((t=>n.f(new Tc(e,t)))),!1);return oy(e,this,t),r}else{var i=new Q((e=>void 0));return os().pO(e.cJ,new Q((t=>{i.f(new Tc(e,t))})),!1)}}),j.F=(function(){return`EventListener(`+this.eQ.ep.gs+`)`});var Qm=new P().i(Xm,`com.raquo.laminar.modifiers.EventListener`,{dU:1,Y:1,be:1});function $m(e,t,n){this.lB=null,this.M=null,this.lA=null,this.lB=e,this.M=t,this.lA=n}j=$m.prototype=new M,j.constructor=$m;function eh(){}eh.prototype=j,j.cb=(function(e){this.lA.ox(e,this.lB,this.M)}),new P().i($m,`com.raquo.laminar.modifiers.KeySetter`,{dV:1,Y:1,bf:1});function th(e,t,n){this.lC=null,this.lE=null,this.lD=null,this.lC=e,this.lE=t,this.lD=n}j=th.prototype=new M,j.constructor=th;function nh(){}nh.prototype=j,j.cb=(function(e){this.qX(e)}),j.qX=(function(e){e.sE(this.lC);var t=this.lE,n=new Q((t=>{this.lD.ox(e,t,this)}));return os().ta(e.cJ,t,n)}),new P().i(th,`com.raquo.laminar.modifiers.KeyUpdater`,{dW:1,Y:1,be:1});function rh(e,t){if(this.hO=null,this.lI=null,this.lJ=null,this.lI=t,Zf(this),e===null)throw eg(new tg,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Ms().se(e,document))throw eg(new tg,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.lJ=e,this.sq()}j=rh.prototype=new M,j.constructor=rh;function ih(){}ih.prototype=j,j.h0=(function(){return this.hO}),j.oQ=(function(e){this.hO=e}),j.sq=(function(){return this.hO.ol(),Vc().gU(this,this.lI,void 0)}),j.eH=(function(){return this.lJ}),new P().i(rh,`com.raquo.laminar.nodes.RootNode`,{ec:1,aE:1,bh:1});function ah(e,t,n){this.hQ=null,this.lN=null,this.lM=null,this.lN=e,this.lM=n,Qf(this,e,!1)}j=ah.prototype=new ep,j.constructor=ah;function oh(){}oh.prototype=j,j.jn=(function(){return this.lN}),j.qH=(function(){var e=this.lM;return e===void 0?void 0:e.map((e=>e.ts.cI))}),new P().i(ah,`com.raquo.laminar.tags.CustomHtmlTag`,{bi:1,bj:1,aF:1});function sh(){this.cq=null,this.cX=null,this.lP=null,this.lQ=!1,Mf(this,`type`,new rp)}j=sh.prototype=new Pf,j.constructor=sh;function ch(){}ch.prototype=j,j.pq=(function(){return this.lQ||=(this.lP=uh().c(`number`),!0),this.lP}),new P().i(sh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{ei:1,ac:1,A:1});var lh;function uh(){return lh||=new sh,lh}function dh(){this.cq=null,this.cX=null,this.lR=null,this.lW=!1,this.lS=null,this.lT=!1,this.lU=null,this.lV=!1,this.lX=null,this.m2=!1,this.lY=null,this.lZ=!1,this.m0=null,this.m1=!1,this.m3=null,this.m8=!1,this.m4=null,this.m5=!1,this.m6=null,this.m7=!1,this.m9=null,this.me=!1,this.ma=null,this.mb=!1,this.mc=null,this.md=!1,Mf(this,`placement`,new rp)}j=dh.prototype=new Pf,j.constructor=dh;function fh(){}fh.prototype=j,j.iO=(function(){return this.lW||=(this.lR=q().c(`bottom`),!0),this.lR}),j.iP=(function(){return this.lT||=(this.lS=q().c(`bottom-end`),!0),this.lS}),j.iQ=(function(){return this.lV||=(this.lU=q().c(`bottom-start`),!0),this.lU}),j.je=(function(){return this.m2||=(this.lX=q().c(`left`),!0),this.lX}),j.jf=(function(){return this.lZ||=(this.lY=q().c(`left-end`),!0),this.lY}),j.jg=(function(){return this.m1||=(this.m0=q().c(`left-start`),!0),this.m0}),j.jx=(function(){return this.m8||=(this.m3=q().c(`right`),!0),this.m3}),j.jy=(function(){return this.m5||=(this.m4=q().c(`right-end`),!0),this.m4}),j.ha=(function(){return this.m7||=(this.m6=q().c(`right-start`),!0),this.m6}),j.cp=(function(){return this.me||=(this.m9=q().c(`top`),!0),this.m9}),j.jB=(function(){return this.mb||=(this.ma=q().c(`top-end`),!0),this.ma}),j.jC=(function(){return this.md||=(this.mc=q().c(`top-start`),!0),this.mc}),new P().i(dh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Placement$`,{ej:1,ac:1,A:1});var ph;function q(){return ph||=new dh,ph}function mh(){this.cq=null,this.cX=null,Mf(this,`arrow-placement`,new rp)}j=mh.prototype=new Pf,j.constructor=mh;function hh(){}hh.prototype=j,new P().i(mh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupArrowPlacement$`,{ek:1,ac:1,A:1});var gh;function _h(){return gh||=new mh,gh}function vh(){this.cq=null,this.cX=null,Mf(this,`auto-size`,new rp)}j=vh.prototype=new Pf,j.constructor=vh;function yh(){}yh.prototype=j,new P().i(vh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupAutoSize$`,{el:1,ac:1,A:1});var bh;function xh(){return bh||=new vh,bh}function Sh(){this.cq=null,this.cX=null,this.mf=null,this.mg=!1,Mf(this,`boundary`,new rp)}j=Sh.prototype=new Pf,j.constructor=Sh;function Ch(){}Ch.prototype=j,j.hd=(function(){return this.mg||=(this.mf=Th().c(`scroll`),!0),this.mf}),new P().i(Sh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupBoundary$`,{em:1,ac:1,A:1});var wh;function Th(){return wh||=new Sh,wh}function Eh(){this.cq=null,this.cX=null,this.mh=null,this.mi=!1,Mf(this,`flip-fallback-strategy`,new rp)}j=Eh.prototype=new Pf,j.constructor=Eh;function Dh(){}Dh.prototype=j,j.s9=(function(){return this.mi||=(this.mh=kh().c(`initial`),!0),this.mh}),new P().i(Eh,`io.github.nguyenyou.webawesome.laminar.CommonKeys$PopupFlipFallbackStrategy$`,{en:1,ac:1,A:1});var Oh;function kh(){return Oh||=new Eh,Oh}function Ah(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mn=null,this.mo=!1,this.mp=null,this.mq=!1,this.mj=null,this.mk=!1,this.ml=null,this.mm=!1,ap(this,`wa-input`)}j=Ah.prototype=new sp,j.constructor=Ah;function jh(){}jh.prototype=j,j.ae=(function(){return this.mo||=(this.mn=(Z(),new kf(`input`)),!0),this.mn}),j.pS=(function(){return this.mq||=(this.mp=uh(),!0),this.mp}),j.cj=(function(){return this.mk||=(this.mj=(Z(),Mf(new Nf,`label`,Ks().bl)),!0),this.mj}),j.cS=(function(){return this.mm||=(this.ml=(Z(),Mf(new Nf,`name`,Ks().bl)),!0),this.ml}),j.f5=(function(){return Cn}),new P().i(Ah,`io.github.nguyenyou.webawesome.laminar.Input$`,{eo:1,aj:1,ai:1});var Mh;function Nh(){return Mh||=new Ah,Mh}function Ph(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.mt=null,this.mu=!1,this.mr=null,this.ms=!1,this.mP=null,this.mQ=!1,this.mD=null,this.mE=!1,this.mF=null,this.mG=!1,this.mV=null,this.mW=!1,this.mv=null,this.my=!1,this.mw=null,this.mx=!1,this.mH=null,this.mM=!1,this.mI=null,this.mJ=!1,this.mK=null,this.mL=!1,this.mR=null,this.mU=!1,this.mS=null,this.mT=!1,this.mz=null,this.mC=!1,this.mA=null,this.mB=!1,this.mN=null,this.mO=!1,ap(this,`wa-popup`)}j=Ph.prototype=new sp,j.constructor=Ph;function Fh(){}Fh.prototype=j,j.qI=(function(){return this.mu||=(this.mt=(Z(),Mf(new Nf,`anchor`,Ks().bl)),!0),this.mt}),j.bX=(function(){return this.ms||=(this.mr=(Z(),Mf(new Nf,`active`,Ks().eP)),!0),this.mr}),j.c1=(function(){return this.mQ||=(this.mP=q(),!0),this.mP}),j.gX=(function(){return this.mE||=(this.mD=Th(),!0),this.mD}),j.gZ=(function(){return this.mG||=(this.mF=(Z(),Mf(new Nf,`distance`,Ks().eB())),!0),this.mF}),j.jA=(function(){return this.mW||=(this.mV=(Z(),Mf(new Nf,`skidding`,Ks().eB())),!0),this.mV}),j.oJ=(function(){return this.my||=(this.mv=(Z(),Mf(new Nf,`arrow`,Ks().eP)),!0),this.mv}),j.qQ=(function(){return this.mx||=(this.mw=_h(),!0),this.mw}),j.p5=(function(){return this.mM||=(this.mH=(Z(),Mf(new Nf,`flip`,Ks().eP)),!0),this.mH}),j.rG=(function(){return this.mJ||=(this.mI=(Z(),Mf(new Nf,`flip-fallback-placements`,Ks().bl)),!0),this.mI}),j.rH=(function(){return this.mL||=(this.mK=kh(),!0),this.mK}),j.t5=(function(){return this.mU||=(this.mR=(Z(),Mf(new Nf,`shift`,Ks().eP)),!0),this.mR}),j.t6=(function(){return this.mT||=(this.mS=(Z(),Mf(new Nf,`shift-padding`,Ks().eB())),!0),this.mS}),j.qS=(function(){return this.mC||=(this.mz=xh(),!0),this.mz}),j.qT=(function(){return this.mB||=(this.mA=(Z(),Mf(new Nf,`auto-size-padding`,Ks().eB())),!0),this.mA}),j.s3=(function(){return this.mO||=(this.mN=(Z(),Mf(new Nf,`hover-bridge`,Ks().eP)),!0),this.mN}),j.f5=(function(){return ji}),new P().i(Ph,`io.github.nguyenyou.webawesome.laminar.Popup$`,{ep:1,aj:1,ai:1});var Ih;function Lh(){return Ih||=new Ph,Ih}function Rh(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.nd=null,this.ne=!1,this.n7=null,this.n8=!1,this.nb=null,this.nc=!1,this.n9=null,this.na=!1,this.nf=null,this.ng=!1,ap(this,`wa-slider`)}j=Rh.prototype=new sp,j.constructor=Rh;function zh(){}zh.prototype=j,j.ae=(function(){return this.ne||=(this.nd=(Z(),new kf(`input`)),!0),this.nd}),j.cj=(function(){return this.n8||=(this.n7=(Z(),Mf(new Nf,`label`,Ks().bl)),!0),this.n7}),j.h5=(function(){return this.nc||=(this.nb=(Z(),Mf(new Nf,`min`,Ks().eB())),!0),this.nb}),j.h4=(function(){return this.na||=(this.n9=(Z(),Mf(new Nf,`max`,Ks().eB())),!0),this.n9}),j.he=(function(){return this.ng||=(this.nf=(Z(),Mf(new Nf,`step`,Ks().eB())),!0),this.nf}),j.f5=(function(){return xa}),new P().i(Rh,`io.github.nguyenyou.webawesome.laminar.Slider$`,{es:1,aj:1,ai:1});var Bh;function Vh(){return Bh||=new Rh,Bh}function Hh(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.nj=null,this.nk=!1,this.nh=null,this.ni=!1,ap(this,`wa-switch`)}j=Hh.prototype=new sp,j.constructor=Hh;function Uh(){}Uh.prototype=j,j.ae=(function(){return this.nk||=(this.nj=(Z(),new kf(`input`)),!0),this.nj}),j.cS=(function(){return this.ni||=(this.nh=(Z(),Mf(new Nf,`name`,Ks().bl)),!0),this.nh}),j.f5=(function(){return wa}),new P().i(Hh,`io.github.nguyenyou.webawesome.laminar.Switch$`,{et:1,aj:1,ai:1});var Wh;function Gh(){return Wh||=new Hh,Wh}function Kh(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.nl=null,this.nm=!1,ap(this,`wa-option`)}j=Kh.prototype=new sp,j.constructor=Kh;function qh(){}qh.prototype=j,j.J=(function(){return this.nm||=(this.nl=(Z(),Mf(new Nf,`value`,Ks().bl)),!0),this.nl}),j.f5=(function(){return Dn}),new P().i(Kh,`io.github.nguyenyou.webawesome.laminar.UOption$`,{ev:1,aj:1,ai:1});var Jh;function J(){return Jh||=new Kh,Jh}function Yh(){}j=Yh.prototype=new tm,j.constructor=Yh;function Xh(){}Xh.prototype=j,j.f=(function(e){return Z().b}),new P().i(Yh,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{ex:1,fi:1,e:1});function Zh(e){if(e.W.Z)return e.W.Q().j7()+`[]`;for(var t=e.W.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Qh(e){this.hS=null,this.W=e}j=Qh.prototype=new M,j.constructor=Qh;function $h(){}$h.prototype=j,j.F=(function(){return(this.W.Y?`interface `:this.W.X?``:`class `)+this.W.N}),j.j7=(function(){return this.hS===null&&(this.hS=Zh(this)),this.hS}),new P().i(Qh,`java.lang.Class`,{eF:1,a:1,Z:1});function eg(e,t){return zp(e,t,null,!0,!0),e}var tg=class extends Bp{};new P().i(tg,`java.lang.Exception`,{D:1,u:1,a:1});function ng(){}j=ng.prototype=new M,j.constructor=ng;function rg(){}rg.prototype=j;function ig(){this.qa=null,og=this,this.qa=Kg()}j=ig.prototype=new rm,j.constructor=ig;function ag(){}ag.prototype=j,j.sU=(function(e){if(!e)throw by(new Sy,`requirement failed`)}),new P().i(ig,`scala.Predef$`,{fr:1,fk:1,fl:1});var og;function sg(){return og||=new ig,og}function cg(e,t){switch(t){case 0:return e.bn();case 1:return e.bi();default:throw wy(new Ty,t+` is out of bounds (min 0, max 1)`)}}function lg(e,t){return e.fy=t,e}function ug(){this.fy=null}j=ug.prototype=new M,j.constructor=ug;function dg(){}dg.prototype=j,j.aI=(function(e){return this.fy.iZ(e,AT())}),j.b9=(function(){return this.fy.h6(AT())}),j.dh=(function(e){return this.fy.iZ(e,AT())});function fg(e,t){return e.gB=t,e}function pg(){this.gB=null}j=pg.prototype=new M,j.constructor=pg;function mg(){}mg.prototype=j,j.aI=(function(e){return this.gB.aI(e)}),j.b9=(function(){return this.gB.b9()});function hg(e,t){if(t<0)return 1;var n=e.E();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.m();i.n();){if(r===t)return 1;i.j(),r=1+r|0}return r-t|0}function gg(e,t){return new sb(e).iR(t)}function _g(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Y().N:new db(e,r,i)}function vg(e,t){for(var n=t.m();e.n()&&n.n();)if(!H().t(e.j(),n.j()))return!1;return e.n()===n.n()}function yg(){this.N=null,xg=this,this.N=new Zy}j=yg.prototype=new M,j.constructor=yg;function bg(){}bg.prototype=j,j.b9=(function(){return new dC}),j.aI=(function(e){return e.m()}),new P().i(yg,`scala.collection.Iterator$`,{fL:1,K:1,a:1});var xg;function Y(){return xg||=new yg,xg}function Sg(e,t){return e.ie=t,e}function Cg(){this.ie=null}j=Cg.prototype=new M,j.constructor=Cg;function wg(){}wg.prototype=j,j.aI=(function(e){return this.ie.aI(e)});function Tg(){}j=Tg.prototype=new M,j.constructor=Tg;function Eg(){}Eg.prototype=j,j.p9=(function(e){return jw(e)?e:Xy(e)?new kE(new Qg((e=>(()=>e.m()))(e))):$E(new eD,Cv().j1(e))}),j.b9=(function(){return new wv((jx(),new Mx),new X((e=>Og().p9(e))))}),j.aI=(function(e){return this.p9(e)}),new P().i(Tg,`scala.collection.View$`,{g0:1,K:1,a:1});var Dg;function Og(){return Dg||=new Tg,Dg}function kg(e,t,n,r,i,a){this.a4=0,this.ao=0,this.as=null,this.bB=null,this.aZ=0,this.bq=0,this.a4=e,this.ao=t,this.as=n,this.bB=r,this.aZ=i,this.bq=a}j=kg.prototype=new um,j.constructor=kg;function Ag(){}Ag.prototype=j,j.aX=(function(){return this.aZ}),j.ec=(function(){return this.bq}),j.ef=(function(e){return this.as.a[e<<1]}),j.dm=(function(e){return this.as.a[1+(e<<1)|0]}),j.pd=(function(e){return new Gy(this.as.a[e<<1],this.as.a[1+(e<<1)|0])}),j.g7=(function(e){return this.bB.a[e]}),j.dk=(function(e){return this.as.a[(-1+this.as.a.length|0)-e|0]}),j.iL=(function(e,t,n,r){var i=wd().eG(n,r),a=wd().eb(i);if((this.a4&a)!==0){var o=wd().cR(this.a4,i,a);if(H().t(e,this.ef(o)))return this.dm(o);throw new Ny(`key not found: `+e)}else if((this.ao&a)!==0)return this.dk(wd().cR(this.ao,i,a)).iL(e,t,n,5+r|0);else throw new Ny(`key not found: `+e)}),j.j5=(function(e,t,n,r,i){var a=wd().eG(n,r),o=wd().eb(a);if((this.a4&o)!==0){var s=wd().cR(this.a4,a,o);return H().t(e,this.ef(s))?this.dm(s):i.ac()}else return(this.ao&o)===0?i.ac():this.dk(wd().cR(this.ao,a,o)).j5(e,t,n,5+r|0,i)}),j.iS=(function(e,t,n,r){var i=wd().eG(n,r),a=wd().eb(i);if((this.a4&a)!==0){var o=wd().cR(this.a4,i,a);return this.bB.a[o]===t&&H().t(e,this.ef(o))}else return(this.ao&a)!==0&&this.dk(wd().cR(this.ao,i,a)).iS(e,t,n,5+r|0)}),j.pT=(function(e,t,n,r,i,a){var o=wd().eG(r,i),s=wd().eb(o);if((this.a4&s)!==0){var c=wd().cR(this.a4,o,s),l=this.ef(c),u=this.g7(c);if(u===n&&H().t(l,e))if(a){var d=this.dm(c);return Object.is(l,e)&&Object.is(d,t)?this:this.r8(s,e,t)}else return this;else{var f=this.dm(c),p=Hu().cB(u);return this.r6(s,p,this.jm(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.ao&s)!==0){var m=wd().cR(this.ao,o,s),h=this.dk(m),g=h.pU(e,t,n,r,5+i|0,a);return g===h?this:this.r7(s,h,g)}else return this.r5(s,e,n,r,t)}),j.jm=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new jg(n,r,vx().j2(new zD([new Gy(e,t),new Gy(i,a)])));var l=wd().eG(r,c),u=wd().eG(s,c),d=r+s|0;if(l!==u){var f=wd().eb(l)|wd().eb(u);return l<u?new kg(f,0,new N([e,t,i,a]),new eo(new Int32Array([n,o])),2,d):new kg(f,0,new N([i,a,e,t]),new eo(new Int32Array([o,n])),2,d)}else{var p=wd().eb(l),m=this.jm(e,t,n,r,i,a,o,s,5+c|0);return new kg(0,p,new N([m]),Du().i1,m.aX(),m.ec())}}),j.j8=(function(){return this.ao!==0}),j.jp=(function(){return Op().ea(this.ao)}),j.h1=(function(){return this.a4!==0}),j.jt=(function(){return Op().ea(this.a4)}),j.g2=(function(e){return Op().ea(this.a4&(-1+e|0))}),j.jq=(function(e){return Op().ea(this.ao&(-1+e|0))}),j.r8=(function(e,t,n){var r=this.g2(e)<<1,i=this.as,a=new N(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[1+r|0]=n,new kg(this.a4,this.ao,a,this.bB,this.aZ,this.bq)}),j.r7=(function(e,t,n){var r=(-1+this.as.a.length|0)-this.jq(e)|0,i=this.as,a=new N(i.a.length),o=i.a.length;return i.x(0,a,0,o),a.a[r]=n,new kg(this.a4,this.ao,a,this.bB,(this.aZ-t.aX()|0)+n.aX()|0,(this.bq-t.ec()|0)+n.ec()|0)}),j.r5=(function(e,t,n,r,i){var a=this.g2(e),o=a<<1,s=this.as,c=new N(2+s.a.length|0);s.x(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.x(o,c,l,u);var d=this.sa(this.bB,a,n);return new kg(this.a4|e,this.ao,c,d,1+this.aZ|0,this.bq+r|0)}),j.sp=(function(e,t,n){var r=this.g2(e),i=r<<1,a=(-2+this.as.a.length|0)-this.jq(e)|0,o=this.as,s=new N(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.pC(this.bB,r);return this.a4^=e,this.ao|=e,this.as=s,this.bB=p,this.aZ=(-1+this.aZ|0)+n.aX()|0,this.bq=(this.bq-t|0)+n.ec()|0,this}),j.r6=(function(e,t,n){var r=this.g2(e),i=r<<1,a=(-2+this.as.a.length|0)-this.jq(e)|0,o=this.as,s=new N(-1+o.a.length|0);o.x(0,s,0,i);var c=2+i|0,l=a-i|0;o.x(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.x(u,s,d,f);var p=this.pC(this.bB,r);return new kg(this.a4^e,this.ao|e,s,p,(-1+this.aZ|0)+n.aX()|0,(this.bq-t|0)+n.ec()|0)}),j.eE=(function(e){for(var t=Op().ea(this.a4),n=0;n<t;)e.dg(this.ef(n),this.dm(n)),n=1+n|0;for(var r=Op().ea(this.ao),i=0;i<r;)this.dk(i).eE(e),i=1+i|0}),j.r=(function(e){if(e instanceof kg){if(this===e)return!0;if(this.bq===e.bq&&this.ao===e.ao&&this.a4===e.a4&&this.aZ===e.aZ&&R().iV(this.bB,e.bB)){var t=this.as,n=e.as,r=this.as.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=H().t(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),j.z=(function(){throw new jy(`Trie nodes do not support hashing.`)}),j.oR=(function(){for(var e=this.as.i(),t=e.a.length,n=Op().ea(this.a4)<<1;n<t;)e.a[n]=e.a[n].oS(),n=1+n|0;return new kg(this.a4,this.ao,e,this.bB.i(),this.aZ,this.bq)}),j.oS=(function(){return this.oR()}),j.pU=(function(e,t,n,r,i,a){return this.pT(e,t,n,r,i,a)}),j.j4=(function(e){return this.dk(e)}),new P().i(kg,`scala.collection.immutable.BitmapIndexedMapNode`,{bW:1,c6:1,aS:1});function jg(e,t,n){this.ik=0,this.dL=0,this.ap=null,this.ik=e,this.dL=t,this.ap=n,sg().sU(this.ap.u()>=2)}j=jg.prototype=new um,j.constructor=jg;function Mg(){}Mg.prototype=j,j.fb=(function(e){for(var t=this.ap.m(),n=0;t.n();){if(H().t(t.j().bn(),e))return n;n=1+n|0}return-1}),j.aX=(function(){return this.ap.u()}),j.iL=(function(e,t,n,r){var i=this.rR(e,t,n,r);if(i.e())throw Y().N.j(),new yy;return i.Z()}),j.rR=(function(e,t,n,r){if(this.dL===n){var i=this.fb(e);return i>=0?new eC(this.ap.y(i).bi()):$S()}else return $S()}),j.j5=(function(e,t,n,r,i){if(this.dL===n){var a=this.fb(e);return a===-1?i.ac():this.ap.y(a).bi()}else return i.ac()}),j.iS=(function(e,t,n,r){return this.dL===n&&this.fb(e)>=0}),j.pU=(function(e,t,n,r,i,a){var o=this.fb(e);return o>=0?a?Object.is(this.ap.y(o).bi(),t)?this:new jg(n,r,this.ap.ej(o,new Gy(e,t))):this:new jg(n,r,this.ap.e9(new Gy(e,t)))}),j.j8=(function(){return!1}),j.jp=(function(){return 0}),j.dk=(function(e){throw wy(new Ty,`No sub-nodes present in hash-collision leaf node.`)}),j.h1=(function(){return!0}),j.jt=(function(){return this.ap.u()}),j.ef=(function(e){return this.ap.y(e).bn()}),j.dm=(function(e){return this.ap.y(e).bi()}),j.pd=(function(e){return this.ap.y(e)}),j.g7=(function(e){return this.ik}),j.eE=(function(e){this.ap.bJ(new X((t=>{if(t!==null){var n=t.bn(),r=t.bi();return e.dg(n,r)}else throw new By(t)})))}),j.r=(function(e){if(e instanceof jg){if(this===e)return!0;if(this.dL===e.dL&&this.ap.u()===e.ap.u()){for(var t=this.ap.m();t.n();){var n=t.j();if(n===null)throw new By(n);var r=n.bn(),i=n.bi(),a=e.fb(r);if(a<0||!H().t(i,e.ap.y(a).bi()))return!1}return!0}else return!1}else return!1}),j.z=(function(){throw new jy(`Trie nodes do not support hashing.`)}),j.ec=(function(){return Math.imul(this.ap.u(),this.dL)}),j.oS=(function(){return new jg(this.ik,this.dL,this.ap)}),j.j4=(function(e){return this.dk(e)}),new P().i(jg,`scala.collection.immutable.HashCollisionMapNode`,{bY:1,c6:1,aS:1});function Ng(){this.il=null,Fg=this,this.il=new VD(gd().nU)}j=Ng.prototype=new M,j.constructor=Ng;function Pg(){}Pg.prototype=j,j.rL=(function(e){return e instanceof VD?e:new qb().iK(e).jw()}),j.aI=(function(e){return this.rL(e)}),new P().i(Ng,`scala.collection.immutable.HashMap$`,{g7:1,aM:1,a:1});var Fg;function Ig(){return Fg||=new Ng,Fg}function Lg(e,t){this.nR=null,this.nS=null,this.nR=e,this.nS=t}j=Lg.prototype=new M,j.constructor=Lg;function Rg(){}Rg.prototype=j,j.A=(function(){return this.nR}),j.aR=(function(){return this.nS}),new P().i(Lg,`scala.collection.immutable.LazyList$State$Cons`,{gh:1,c1:1,a:1});function zg(){}j=zg.prototype=new M,j.constructor=zg;function Bg(){}Bg.prototype=j,j.j9=(function(){throw new Ny(`head of empty lazy list`)}),j.aR=(function(){throw new jy(`tail of empty lazy list`)}),j.A=(function(){this.j9()}),new P().i(zg,`scala.collection.immutable.LazyList$State$Empty$`,{gi:1,c1:1,a:1});var Vg;function Hg(){return Vg||=new zg,Vg}function Ug(){}j=Ug.prototype=new M,j.constructor=Ug;function Wg(){}Wg.prototype=j,j.rN=(function(e){return EC(e)&&e.e()?CD():e instanceof VD||e instanceof wD||e instanceof ED||e instanceof OD||e instanceof AD?e:new fx().om(e).pE()}),j.aI=(function(e){return this.rN(e)}),new P().i(Ug,`scala.collection.immutable.Map$`,{gl:1,aM:1,a:1});var Gg;function Kg(){return Gg||=new Ug,Gg}function qg(e,t,n){var r=t.E();if(r!==-1){var i=r+n|0;e.be(i<0?0:i)}}function Jg(){}j=Jg.prototype=new M,j.constructor=Jg;function Yg(){}Yg.prototype=j,j.rO=(function(e){var t=e.E();return YD(new ZD,t>0?Pa((1+t|0)/.75):16,.75).op(e)}),j.b9=(function(){return new Rx(16,.75)}),j.aI=(function(e){return this.rO(e)}),new P().i(Jg,`scala.collection.mutable.HashSet$`,{h3:1,K:1,a:1});var Xg;function Zg(){return Xg||=new Jg,Xg}function Qg(e){this.oa=null,this.oa=e}j=Qg.prototype=new _m,j.constructor=Qg;function $g(){}$g.prototype=j,j.ac=(function(){return(0,this.oa)()}),new P().i(Qg,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{hK:1,cm:1,aI:1});function X(e){this.ob=null,this.ob=e}j=X.prototype=new ym,j.constructor=X;function e_(){}e_.prototype=j,j.f=(function(e){return(0,this.ob)(e)}),new P().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{hL:1,cn:1,e:1});function t_(e){this.oc=null,this.oc=e}j=t_.prototype=new xm,j.constructor=t_;function n_(){}n_.prototype=j,j.dg=(function(e,t){return(0,this.oc)(e,t)}),new P().i(t_,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{hM:1,co:1,aJ:1});function r_(){}j=r_.prototype=new M,j.constructor=r_;function i_(){}i_.prototype=j,j.F=(function(){return`<function1>`}),j.f=(function(e){return this.di(e,Pu().gA)});var a_=new P().i(0,`scala.runtime.Nothing$`,{hR:1,u:1,a:1});function o_(){}j=o_.prototype=new M,j.constructor=o_;function s_(){}s_.prototype=j,j.rP=(function(e){return(t=>e.f(t))}),new P().i(o_,`scala.scalajs.js.Any$`,{hX:1,hY:1,hZ:1});var c_;function l_(){return c_||=new o_,c_}function u_(){}j=u_.prototype=new _m,j.constructor=u_;function d_(){}d_.prototype=j;function f_(){}j=f_.prototype=new ym,j.constructor=f_;function p_(){}p_.prototype=j;function m_(){}j=m_.prototype=new xm,j.constructor=m_;function h_(){}h_.prototype=j;function g_(){}j=g_.prototype=new Cm,j.constructor=g_;function __(){}__.prototype=j;function v_(e,t,n,r){if(this.jK=null,this.jI=!1,this.hk=null,this.jJ=null,this.jK=e,this.jI=t,this.hk=n,r===null)throw new ky;this.jJ=void 0}j=v_.prototype=new M,j.constructor=v_;function y_(){}y_.prototype=j,j.gc=(function(){return this.jJ}),j.g3=(function(){return ho(this)}),j.F=(function(){return go(this)}),j.aQ=(function(e){try{this.jK.f(e)}catch(e){var t=e instanceof Bp?e:new Bw(e);this.jI?this.h7(new bS(t)):zm().cn(new bS(t))}}),j.h7=(function(e){try{this.hk.cC(e)?this.hk.f(e):zm().cn(e)}catch(n){var t=n instanceof Bp?n:new Bw(n);zm().cn(new xS(t,e))}}),j.fe=(function(e){e.dj(new Q((e=>{this.h7(e)})),new Q((e=>{this.aQ(e)})))}),new P().i(v_,`com.raquo.airstream.core.Observer$$anon$8`,{cy:1,av:1,ah:1,az:1});function b_(e,t,n){if(this.hl=null,this.jL=!1,this.jM=null,this.hl=e,this.jL=t,n===null)throw new ky;this.jM=void 0}j=b_.prototype=new M,j.constructor=b_;function x_(){}x_.prototype=j,j.gc=(function(){return this.jM}),j.g3=(function(){return ho(this)}),j.F=(function(){return go(this)}),j.aQ=(function(e){this.fe(new _S(e))}),j.h7=(function(e){this.fe(new hS(e))}),j.fe=(function(e){try{this.hl.cC(e)?this.hl.f(e):e.dj(new Q((e=>{zm().cn(e)})),new Q((e=>void 0)))}catch(n){var t=n instanceof Bp?n:new Bw(n);this.jL&&e.pi()?this.h7(new bS(t)):e.dj(new Q((e=>{zm().cn(new xS(t,e))})),new Q((e=>{zm().cn(new bS(t))})))}}),new P().i(b_,`com.raquo.airstream.core.Observer$$anon$9`,{cz:1,av:1,ah:1,az:1});function S_(e){if(this.kf=null,this.kg=!1,this.pY=null,e===null)throw new ky;Ys(this)}j=S_.prototype=new M,j.constructor=S_;function C_(){}C_.prototype=j,j.td=(function(){return this.kg||=(this.kf=new tp(`svg`,!1),!0),this.kf}),new P().i(S_,`com.raquo.laminar.api.Laminar$svg$`,{d3:1,dz:1,dd:1,df:1});function w_(){this.b=null,E_=this,this.b=new nD}j=w_.prototype=new M,j.constructor=w_;function T_(){}T_.prototype=j,new P().i(w_,`com.raquo.laminar.api.package$`,{d6:1,b9:1,bc:1,b8:1});var E_;function Z(){return E_||=new w_,E_}function D_(e,t,n){return e.cY=t,e.cZ=n,e}function O_(){this.cY=null,this.cZ=null}j=O_.prototype=new bc,j.constructor=O_;function k_(){}k_.prototype=j,j.c=(function(e){return new $m(this,ja(e),new Pv(((e,t,n)=>{Ms().pM(e,t,n)})))}),new P().i(O_,`com.raquo.laminar.keys.StyleProp`,{a7:1,A:1,a5:1,a6:1});function A_(e){this.lL=null,this.hP=null,this.lL=$S(),this.hP=Ms().rb(e)}j=A_.prototype=new M,j.constructor=A_;function j_(){}j_.prototype=j,j.pN=(function(e){this.lL=e}),j.pV=(function(e){}),j.cb=(function(e){Vc().gU(e,this,void 0)}),j.tg=(function(){return this.hP.data}),j.eH=(function(){return this.hP}),new P().i(A_,`com.raquo.laminar.nodes.TextNode`,{ee:1,aE:1,Y:1,bg:1});function M_(){this.dw=null,this.dt=null,this.du=!1,this.dv=null,this.dx=!1,this.dy=null,this.dz=!1,this.n3=null,this.n4=!1,this.n1=null,this.n2=!1,this.n5=null,this.n6=!1,this.mZ=null,this.n0=!1,ap(this,`wa-select`)}j=M_.prototype=new sp,j.constructor=M_;function N_(){}N_.prototype=j,j.ae=(function(){return this.n4||=(this.n3=(Z(),new kf(`input`)),!0),this.n3}),j.cS=(function(){return this.n2||=(this.n1=(Z(),Mf(new Nf,`name`,Ks().bl)),!0),this.n1}),j.J=(function(){return this.n6||=(this.n5=(Z(),Mf(new Nf,`value`,Ks().bl)),!0),this.n5}),j.cj=(function(){return this.n0||=(this.mZ=(Z(),Mf(new Nf,`label`,Ks().bl)),!0),this.mZ}),j.f5=(function(){return oa}),new P().i(M_,`io.github.nguyenyou.webawesome.laminar.Select$`,{er:1,aj:1,ai:1,ey:1});var P_;function F_(){return P_||=new M_,P_}function I_(){}j=I_.prototype=new M,j.constructor=I_;function L_(){}L_.prototype=j;function R_(e,t){return e===t}function z_(e){return e?1231:1237}var B_=new P().i(0,`java.lang.Boolean`,{bp:1,a:1,a3:1,Z:1},(e=>typeof e==`boolean`));function V_(e){return e}function H_(e,t){return t instanceof Ea&&e===t.c}var U_=new P().i(0,`java.lang.Character`,{bq:1,a:1,a3:1,Z:1},(e=>e instanceof Ea));function W_(e,t){return zp(e,t,null,!0,!0),e}var G_=class extends tg{};new P().i(G_,`java.lang.RuntimeException`,{E:1,D:1,u:1,a:1});function K_(e){return e.o=``,e}function q_(e,t){if(K_(e),t===null)throw new ky;return e.o=t,e}function J_(e,t){if(K_(e),t<0)throw new Oy;return e}function Y_(){this.o=null}j=Y_.prototype=new M,j.constructor=Y_;function X_(){}X_.prototype=j,j.os=(function(e){var t=Rp().ss(e,0,e.a.length);return this.o=``+this.o+t,this}),j.F=(function(){return this.o}),j.u=(function(){return this.o.length}),j.oK=(function(e){return this.o.charCodeAt(e)}),new P().i(Y_,`java.lang.StringBuilder`,{eY:1,aG:1,bn:1,a:1});function Z_(){}j=Z_.prototype=new rg,j.constructor=Z_;function Q_(){}Q_.prototype=j;function $_(){}j=$_.prototype=new M,j.constructor=$_;function ev(){}ev.prototype=j,j.di=(function(e,t){return cm(this,e,t)}),j.F=(function(){return`<function1>`}),j.cC=(function(e){return!1}),j.iM=(function(e){throw new By(e)}),j.f=(function(e){this.iM(e)}),new P().i($_,`scala.PartialFunction$$anon$1`,{fq:1,j:1,e:1,a:1});function tv(){}j=tv.prototype=new M,j.constructor=tv;function nv(){}nv.prototype=j,j.m=(function(){return this}),j.iR=(function(e){return gg(this,e)}),j.ed=(function(e){return this.gh(e,-1)}),j.gh=(function(e,t){return _g(this,e,t)}),j.F=(function(){return`<iterator>`}),j.c0=(function(e,t,n){return Ku(this,e,t,n)}),j.e8=(function(e,t,n,r){return Ju(this,e,t,n,r)}),j.E=(function(){return-1});function rv(){this.ie=null,this.nJ=null,this.nK=null,Sg(this,Kg()),av=this,this.nJ=qa(new Ja),this.nK=new Qg((()=>ov().nJ))}j=rv.prototype=new wg,j.constructor=rv;function iv(){}iv.prototype=j,new P().i(rv,`scala.collection.Map$`,{fT:1,fU:1,aM:1,a:1});var av;function ov(){return av||=new rv,av}function sv(e,t){return e.eV=t,e}function cv(){this.eV=null}j=cv.prototype=new M,j.constructor=cv;function lv(){}lv.prototype=j,j.oy=(function(e){return this.eV.dh(e)}),j.p8=(function(e){return this.eV.aI(e)}),j.b9=(function(){return this.eV.b9()}),j.aI=(function(e){return this.p8(e)}),j.dh=(function(e){return this.oy(e)});function uv(e){return e.cQ(new X((e=>e)))}function dv(e,t){return e.g5(new jE(e,t))}function fv(e,t){return t>=0&&e.bo(t)>0}function pv(e){return e.bo(0)===0}function mv(e,t){var n=e.E();if(n!==-1)var r=t.E(),i=r!==-1&&n!==r;else var i=!1;return i?!1:vg(e.m(),t)}function hv(e,t){for(var n=e.bw().b9(),r=e.m();r.n();)n.b7(t.f(r.j()));return n.bd()}function gv(){this.gB=null,fg(this,nx())}j=gv.prototype=new mg,j.constructor=gv;function _v(){}_v.prototype=j,j.rM=(function(e){return EC(e)?e:pg.prototype.aI.call(this,e)}),j.aI=(function(e){return this.rM(e)}),new P().i(gv,`scala.collection.immutable.Iterable$`,{gc:1,fK:1,K:1,a:1});var vv;function yv(){return vv||=new gv,vv}function bv(){this.gH=null,Sv=this,this.gH=new LD(new Qg((()=>Hg()))).p6()}j=bv.prototype=new M,j.constructor=bv;function xv(){}xv.prototype=j,j.dh=(function(e){return this.j1(e)}),j.sY=(function(e,t){return new LD(new Qg(((e,t)=>(()=>{for(var n=e.gM,r=t.eA;r>0&&!n.e();)n=n.I().aR(),e.gM=n,r=-1+r|0,t.eA=r;return n.I()}))(new Om(e),new Em(t))))}),j.j1=(function(e){return e instanceof LD?e:e.E()===0?this.gH:new LD(new Qg((()=>Cv().pG(e.m()))))}),j.pH=(function(e,t){return e.n()?new Lg(e.j(),new LD(new Qg((()=>Cv().pH(e,t))))):t.ac()}),j.pG=(function(e){return e.n()?new Lg(e.j(),new LD(new Qg((()=>Cv().pG(e))))):Hg()}),j.b9=(function(){return new Yb}),j.aI=(function(e){return this.j1(e)}),new P().i(bv,`scala.collection.immutable.LazyList$`,{gd:1,a2:1,K:1,a:1});var Sv;function Cv(){return Sv||=new bv,Sv}function wv(e,t){this.fK=null,this.o4=null,this.fK=e,this.o4=t}j=wv.prototype=new M,j.constructor=wv;function Tv(){}Tv.prototype=j,j.qD=(function(e){return this.fK.b7(e),this}),j.qt=(function(e){return this.fK.bc(e),this}),j.be=(function(e){this.fK.be(e)}),j.bd=(function(){return this.o4.f(this.fK.bd())}),j.bc=(function(e){return this.qt(e)}),j.b7=(function(e){return this.qD(e)}),new P().i(wv,`scala.collection.mutable.Builder$$anon$1`,{h0:1,M:1,I:1,G:1});function Ev(e,t){return e.e3=t,e}function Dv(){this.e3=null}j=Dv.prototype=new M,j.constructor=Dv;function Ov(){}Ov.prototype=j,j.be=(function(e){}),j.qE=(function(e){return this.e3.b7(e),this}),j.qu=(function(e){return this.e3.bc(e),this}),j.bc=(function(e){return this.qu(e)}),j.b7=(function(e){return this.qE(e)}),j.bd=(function(){return this.e3}),new P().i(Dv,`scala.collection.mutable.GrowableBuilder`,{aV:1,M:1,I:1,G:1});function kv(e){this.of=null,this.of=e}j=kv.prototype=new d_,j.constructor=kv;function Av(){}Av.prototype=j,j.ac=(function(){return(0,this.of)()}),new P().i(kv,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{i5:1,i4:1,cm:1,aI:1});function Q(e){this.og=null,this.og=e}j=Q.prototype=new p_,j.constructor=Q;function jv(){}jv.prototype=j,j.f=(function(e){return(0,this.og)(e)}),new P().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{i7:1,i6:1,cn:1,e:1});function Mv(e){this.oh=null,this.oh=e}j=Mv.prototype=new h_,j.constructor=Mv;function Nv(){}Nv.prototype=j,j.dg=(function(e,t){return(0,this.oh)(e,t)}),new P().i(Mv,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{i9:1,i8:1,co:1,aJ:1});function Pv(e){this.oi=null,this.oi=e}j=Pv.prototype=new __,j.constructor=Pv;function Fv(){}Fv.prototype=j,j.ox=(function(e,t,n){return(0,this.oi)(e,t,n)}),new P().i(Pv,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{ib:1,ia:1,hN:1,fj:1});function Iv(){}j=Iv.prototype=new M,j.constructor=Iv;function Lv(){}Lv.prototype=j;function Rv(e){e.oO(ws().bj(U().d(new(Km.r()).C([])))),e.oP(ws().bj(U().d(new(mo.r()).C([])))),e.hi(!1)}function zv(e,t,n){var r=Bo(),i=(()=>{Wv(e);var r=Bv(e,t,n);return t.fe(e.hg()),Gv(e),r}),a=!Wm(e);if(r.bf||!a)var o=i();else{r.bf=!0;try{var o=i()}finally{r.bf=!1,Io(r)}}return o}function Bv(e,t,n){var r=new fs(n,new kv((()=>{Hm(e,t)})));return e.g4().push(t),r}function Vv(e,t,n){var r=Bo(),i=(()=>{!Wm(e)&&n&&Wv(e),e.ga().push(t),Gv(e)}),a=!Wm(e);if(r.bf||!a)i();else{r.bf=!0;try{i()}finally{r.bf=!1,Io(r)}}}function Hv(e,t){wo().pD(e.ga(),t)&&Kv(e)}function Uv(e,t){wo().pD(e.g4(),t)&&Kv(e)}function Wv(e){e.pW()||(e.pw(),e.hi(!0))}function Gv(e){qv(e)===1&&e.pt()}function Kv(e){Wm(e)||(e.pu(),e.hi(!1))}function qv(e){var t=e.g4().length,n=e.ga();return(t|0)+(n.length|0)|0}function Jv(e){e.aS=bo().rQ(new Xv(e),(bo(),!0))}function Yv(e,t){var n=new _S(t);e.aS.fe(n)}function Xv(e){if(this.k4=null,e===null)throw new ky;this.k4=e}j=Xv.prototype=new i_,j.constructor=Xv;function Zv(){}Zv.prototype=j,j.sd=(function(e){return!0}),j.qP=(function(e,t){new ko(new Q((t=>{this.k4.sZ(e,t)})))}),j.cC=(function(e){return this.sd(e)}),j.di=(function(e,t){return this.qP(e,t)}),new P().i(Xv,`com.raquo.airstream.state.Var$$anon$1`,{cS:1,aX:1,e:1,j:1,a:1});function Qv(e){if(e===null)throw new ky}j=Qv.prototype=new i_,j.constructor=Qv;function $v(){}$v.prototype=j,j.cC=(function(e){return typeof e==`boolean`&&!0}),j.di=(function(e,t){return typeof e==`boolean`?!!e:t.f(e)}),new P().i(Qv,`com.raquo.laminar.DomApi$$anon$1`,{cX:1,aX:1,e:1,j:1,a:1});function ey(e){if(e===null)throw new ky}j=ey.prototype=new i_,j.constructor=ey;function ty(){}ty.prototype=j,j.cC=(function(e){return typeof e==`string`}),j.di=(function(e,t){return typeof e==`string`?e:t.f(e)}),new P().i(ey,`com.raquo.laminar.DomApi$$anon$2`,{cY:1,aX:1,e:1,j:1,a:1});function ny(e,t){this.gr=null,this.hC=null,this.gr=e,this.hC=t}j=ny.prototype=new M,j.constructor=ny;function ry(){}ry.prototype=j,j.cb=(function(e){var t=this.hC;t!==void 0&&t.pv(e,this.gr),Vc().gU(e,this.gr,void 0)}),j.tp=(function(e){return new ny(this.gr,e.qM(this.hC))});var iy=new P().i(ny,`com.raquo.laminar.inserters.StaticChildInserter`,{dE:1,Y:1,dC:1,dG:1,dB:1});function ay(e){e.hL=new hs(new kv((()=>{e.cJ.ol()})),new kv((()=>{e.cJ.rc()}))),e.eq=void 0,e.fs=CD()}function oy(e,t,n){if(e.eq===void 0)e.eq=ws().bj(U().d(new(Qm.r()).C([t])));else if(n){var r=e.eq;if(r===void 0){var i;throw new Ny(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.eq;if(a===void 0){var o;throw new Ny(`undefined.get`)}else var o=a;o.push(t)}}function sy(e,t){var n=e.eq;n!==void 0&&n.splice(t,1)}function cy(e,t){var n=e.eq;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:ka(a,t))?r=!0:i=1+i|0}return r?i:-1}function ly(e,t,n,r,i){var a=e.fs.dl(t,new kv((()=>$()))),o=(e=>{for(var t=a;!t.e();){var r=t.A(),i=r.bn();if(i===null?e===null:ka(i,e)){var o=r.bi();if(o===null?n===null:ka(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.w()}return!1}),s=uv(r),c=i;block:for(var l;;)if(c.e()){var l=$();break}else{var u=c.A(),d=c.w();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.e()){var l=f;break block}else{if(!o(p.A())){p=p.w();continue}for(var m=p,h=new rk(f.A(),$()),g=f.w(),_=h;g!==m;){var v=new rk(g.A(),$());_.aC=v,_=v,g=g.w()}for(var y=m.w(),ee=y;!y.e();)if(!o(y.A()))y=y.w();else{for(;ee!==y;){var te=new rk(ee.A(),$());_.aC=te,_=te,ee=ee.w()}ee=y.w(),y=y.w()}ee.e()||(_.aC=ee);var l=h;break block}}var ne=e.fs.dl(t,new kv((()=>$()))),b=(e=>l.cf(e.bn())),re=ne;block$2:for(var ie;;)if(re.e()){var ie=$();break}else{var ae=re.A(),oe=re.w();if(b(ae)){re=oe;continue}for(var se=re,ce=oe;;)if(ce.e()){var ie=se;break block$2}else{if(!b(ce.A())){ce=ce.w();continue}for(var x=ce,le=new rk(se.A(),$()),S=se.w(),ue=le;S!==x;){var de=new rk(S.A(),$());ue.aC=de,ue=de,S=S.w()}for(var fe=x.w(),pe=fe;!fe.e();)if(!b(fe.A()))fe=fe.w();else{for(;pe!==fe;){var me=new rk(pe.A(),$());ue.aC=me,ue=me,pe=pe.w()}pe=fe.w(),fe=fe.w()}pe.e()||(ue.aC=pe);var ie=le;break block$2}}var he=(e=>new Gy(e,n));if(s===$())var ge=$();else{for(var _e=new rk(he(s.A()),$()),ve=_e,ye=s.w();ye!==$();){var be=new rk(he(ye.A()),$());ve.aC=be,ve=be,ye=ye.w()}var ge=_e}var xe=ie.ou(ge),Se=t.hD.oU(t.ls.f(e)),Ce=(e=>l.cf(e)),we=Se;block$4:for(var Te;;)if(we.e()){var Te=$();break}else{var Ee=we.A(),De=we.w();if(Ce(Ee)){we=De;continue}for(var Oe=we,C=De;;)if(C.e()){var Te=Oe;break block$4}else{if(!Ce(C.A())){C=C.w();continue}for(var ke=C,Ae=new rk(Oe.A(),$()),je=Oe.w(),Me=Ae;je!==ke;){var Ne=new rk(je.A(),$());Me.aC=Ne,Me=Ne,je=je.w()}for(var Pe=ke.w(),Fe=Pe;!Pe.e();)if(!Ce(Pe.A()))Pe=Pe.w();else{for(;Fe!==Pe;){var Ie=new rk(Fe.A(),$());Me.aC=Ie,Me=Ie,Fe=Fe.w()}Fe=Pe.w(),Pe=Pe.w()}Fe.e()||(Me.aC=Fe);var Te=Ae;break block$4}}var Le=s;block$6:for(var Re;;)if(Le.e()){var Re=$();break}else{var ze=Le.A(),Be=Le.w();if(o(ze)){Le=Be;continue}for(var Ve=Le,He=Be;;)if(He.e()){var Re=Ve;break block$6}else{if(!o(He.A())){He=He.w();continue}for(var Ue=He,We=new rk(Ve.A(),$()),Ge=Ve.w(),Ke=We;Ge!==Ue;){var qe=new rk(Ge.A(),$());Ke.aC=qe,Ke=qe,Ge=Ge.w()}for(var w=Ue.w(),Je=w;!w.e();)if(!o(w.A()))w=w.w();else{for(;Je!==w;){var Ye=new rk(Je.A(),$());Ke.aC=Ye,Ke=Ye,Je=Je.w()}Je=w.w(),w=w.w()}Je.e()||(Ke.aC=Je);var Re=We;break block$6}}var Xe=Te.ou(Re);e.fs=e.fs.ek(t,xe),t.lu.dg(e,t.hD.oW(Xe))}function uy(e,t){fy(e,e.gv,t)&&py(e,t)}function dy(e,t){var n=e.gv;e.gv=t,fy(e,n,t)||py(e,t)}function fy(e,t,n){var r=!t.e()&&!t.Z().h0().bP.e(),i=!n.e()&&!n.Z().h0().bP.e();return r&&!i}function py(e,t){my(e,t.e()?$S():new eC(t.Z().h0()))}function my(e,t){if(t.e())e.hL.r1();else{var n=t.Z();e.hL.t1(n)}}function hy(){}j=hy.prototype=new L_,j.constructor=hy;function gy(){}gy.prototype=j;var _y=class extends G_{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(_y,`java.lang.ArithmeticException`,{eB:1,E:1,D:1,u:1,a:1});var vy=new P().i(0,`java.lang.Byte`,{eD:1,ad:1,a:1,a3:1,Z:1},(e=>Ba(e))),yy=class extends G_{constructor(){super(),zp(this,null,null,!0,!0)}};new P().i(yy,`java.lang.ClassCastException`,{br:1,E:1,D:1,u:1,a:1});function by(e,t){return zp(e,t,null,!0,!0),e}function xy(e){return zp(e,null,null,!0,!0),e}var Sy=class extends G_{};new P().i(Sy,`java.lang.IllegalArgumentException`,{bt:1,E:1,D:1,u:1,a:1});var Cy=class extends G_{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(Cy,`java.lang.IllegalStateException`,{eJ:1,E:1,D:1,u:1,a:1});function wy(e,t){return zp(e,t,null,!0,!0),e}var Ty=class extends G_{};new P().i(Ty,`java.lang.IndexOutOfBoundsException`,{aH:1,E:1,D:1,u:1,a:1});function Ey(){}j=Ey.prototype=new L_,j.constructor=Ey;function Dy(){}Dy.prototype=j,new P().i(Ey,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{eO:1,bm:1,bk:1,bo:1,bl:1});var Oy=class extends G_{constructor(){super(),zp(this,null,null,!0,!0)}};new P().i(Oy,`java.lang.NegativeArraySizeException`,{eQ:1,E:1,D:1,u:1,a:1});var ky=class extends G_{constructor(){super(),zp(this,null,null,!0,!0)}};new P().i(ky,`java.lang.NullPointerException`,{eR:1,E:1,D:1,u:1,a:1});var Ay=new P().i(0,`java.lang.Short`,{eU:1,ad:1,a:1,a3:1,Z:1},(e=>Va(e))),jy=class extends G_{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(jy,`java.lang.UnsupportedOperationException`,{f3:1,E:1,D:1,u:1,a:1});var My=class extends G_{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(My,`java.util.ConcurrentModificationException`,{f8:1,E:1,D:1,u:1,a:1});var Ny=class extends G_{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(Ny,`java.util.NoSuchElementException`,{f9:1,E:1,D:1,u:1,a:1});function Py(){}j=Py.prototype=new Q_,j.constructor=Py;function Fy(){}Fy.prototype=j,j.f=(function(e){return e}),j.F=(function(){return`generalized constraint`}),new P().i(Py,`scala.$less$colon$less$$anon$1`,{fe:1,fb:1,fc:1,e:1,a:1});function Iy(e){return e.i2||=(e.i3=e.gz===null?`null`:zy(e),!0),e.i3}function Ly(e){return e.i2?e.i3:Iy(e)}function Ry(e){var t=e.gz;return`of class `+Oa(t)}function zy(e){try{return e.gz+` (`+Ry(e)+`)`}catch{return`an instance `+Ry(e)}}var By=class extends G_{constructor(e){super(),this.i3=null,this.gz=null,this.i2=!1,this.gz=e,zp(this,null,null,!0,!0)}g8(){return Ly(this)}};new P().i(By,`scala.MatchError`,{fm:1,E:1,D:1,u:1,a:1});function Vy(){}j=Vy.prototype=new M,j.constructor=Vy;function Hy(){}Hy.prototype=j,j.e=(function(){return this===$S()}),j.E=(function(){return this.e()?0:1}),j.m=(function(){return this.e()?Y().N:new $y(this.Z())});function Uy(e){this.fw=0,this.ny=0,this.nx=null,this.nx=e,this.fw=0,this.ny=e.bK()}j=Uy.prototype=new nv,j.constructor=Uy;function Wy(){}Wy.prototype=j,j.n=(function(){return this.fw<this.ny}),j.j=(function(){var e=this.nx.bL(this.fw);return this.fw=1+this.fw|0,e}),new P().i(Uy,`scala.Product$$anon$1`,{fs:1,n:1,p:1,b:1,c:1});function Gy(e,t){this.nz=null,this.nA=null,this.nz=e,this.nA=t}j=Gy.prototype=new M,j.constructor=Gy;function Ky(){}Ky.prototype=j,j.bK=(function(){return 2}),j.bL=(function(e){return cg(this,e)}),j.bn=(function(){return this.nz}),j.bi=(function(){return this.nA}),j.F=(function(){return`(`+this.bn()+`,`+this.bi()+`)`}),j.bM=(function(){return`Tuple2`}),j.cm=(function(){return new aS(this)}),j.z=(function(){return G().ei(this,-889275714,!1)}),j.r=(function(e){return this===e||e instanceof Gy&&H().t(this.bn(),e.bn())&&H().t(this.bi(),e.bi())}),new P().i(Gy,`scala.Tuple2`,{bB:1,ft:1,U:1,d:1,a:1});function qy(e){this.fy=null,lg(this,e)}j=qy.prototype=new dg,j.constructor=qy;function Jy(){}Jy.prototype=j,new P().i(qy,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{fH:1,fG:1,K:1,a:1,a2:1});function Yy(e){return qu(e,e.ce()+`(`,`, `,`)`)}function Xy(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Zy(){}j=Zy.prototype=new nv,j.constructor=Zy;function Qy(){}Qy.prototype=j,j.n=(function(){return!1}),j.jo=(function(){throw new Ny(`next on empty iterator`)}),j.E=(function(){return 0}),j.gh=(function(e,t){return this}),j.j=(function(){this.jo()}),new P().i(Zy,`scala.collection.Iterator$$anon$19`,{fM:1,n:1,p:1,b:1,c:1});function $y(e){this.fz=!1,this.nD=null,this.nD=e,this.fz=!1}j=$y.prototype=new nv,j.constructor=$y;function eb(){}eb.prototype=j,j.n=(function(){return!this.fz}),j.j=(function(){return this.fz?Y().N.j():(this.fz=!0,this.nD)}),j.gh=(function(e,t){return this.fz||e>0||t===0?Y().N:this}),new P().i($y,`scala.collection.Iterator$$anon$20`,{fN:1,n:1,p:1,b:1,c:1});function tb(e,t){this.nG=null,this.gC=!1,this.nF=null,this.id=null,this.nE=null,this.id=e,this.nE=t,this.nG=XD(new ZD),this.gC=!1}j=tb.prototype=new nv,j.constructor=tb;function nb(){}nb.prototype=j,j.n=(function(){for(;;)if(this.gC)return!0;else if(this.id.n()){var e=this.id.j();if(this.nG.gT(this.nE.f(e)))return this.nF=e,this.gC=!0,!0}else return!1}),j.j=(function(){return this.n()?(this.gC=!1,this.nF):Y().N.j()}),new P().i(tb,`scala.collection.Iterator$$anon$8`,{fP:1,n:1,p:1,b:1,c:1});function rb(e,t){this.gD=null,this.nH=null,this.gD=e,this.nH=t}j=rb.prototype=new nv,j.constructor=rb;function ib(){}ib.prototype=j,j.E=(function(){return this.gD.E()}),j.n=(function(){return this.gD.n()}),j.j=(function(){return this.nH.f(this.gD.j())}),new P().i(rb,`scala.collection.Iterator$$anon$9`,{fQ:1,n:1,p:1,b:1,c:1});function ab(e){for(;;){if(e.bA instanceof sb){var t=e.bA;e.bA=t.bA,e.dB=t.dB,t.c5!==null&&(e.c4===null&&(e.c4=t.c4),t.c4.fA=e.c5,e.c5=t.c5);continue}return}}function ob(e){for(;;)if(e.c5===null)return e.bA=null,e.c4=null,!1;else{if(e.bA=e.c5.s2(),e.c4===e.c5&&(e.c4=e.c4.fA),e.c5=e.c5.fA,ab(e),e.dB)return!0;if(e.bA!==null&&e.bA.n())return e.dB=!0,!0}}function sb(e){this.bA=null,this.c5=null,this.c4=null,this.dB=!1,this.bA=e,this.c5=null,this.c4=null,this.dB=!1}j=sb.prototype=new nv,j.constructor=sb;function cb(){}cb.prototype=j,j.n=(function(){return this.dB?!0:this.bA===null?!1:this.bA.n()?(this.dB=!0,!0):ob(this)}),j.j=(function(){return this.n()?(this.dB=!1,this.bA.j()):Y().N.j()}),j.iR=(function(e){var t=new Xu(e,null);return this.c5===null?(this.c5=t,this.c4=t):(this.c4.fA=t,this.c4=t),this.bA===null&&(this.bA=Y().N),this}),new P().i(sb,`scala.collection.Iterator$ConcatIterator`,{bH:1,n:1,p:1,b:1,c:1});function lb(e){for(;e.d1>0;)e.dC.n()?(e.dC.j(),e.d1=-1+e.d1|0):e.d1=0}function ub(e,t){if(e.bS<0)return-1;var n=e.bS-t|0;return n<0?0:n}function db(e,t,n){this.dC=null,this.bS=0,this.d1=0,this.dC=e,this.bS=n,this.d1=t}j=db.prototype=new nv,j.constructor=db;function fb(){}fb.prototype=j,j.E=(function(){var e=this.dC.E();if(e<0)return-1;var t=e-this.d1|0,n=t<0?0:t;if(this.bS<0)return n;var r=this.bS;return r<n?r:n}),j.n=(function(){return lb(this),this.bS!==0&&this.dC.n()}),j.j=(function(){return lb(this),this.bS>0?(this.bS=-1+this.bS|0,this.dC.j()):this.bS<0?this.dC.j():Y().N.j()}),j.gh=(function(e,t){var n=e>0?e:0;if(t<0)var r=ub(this,n);else if(t<=n)var r=0;else if(this.bS<0)var r=t-n|0;else var i=ub(this,n),a=t-n|0,r=i<a?i:a;var o=this.d1+n|0;return r===0?Y().N:o<0?(this.d1=2147483647,this.bS=0,gg(this,new Qg((()=>new db(this.dC,-2147483647+o|0,r))))):(this.d1=o,this.bS=r,this)}),new P().i(db,`scala.collection.Iterator$SliceIterator`,{fS:1,n:1,p:1,b:1,c:1});function pb(e){for(var t=e,n=0;!t.e();)n=1+n|0,t=t.w();return n}function mb(e,t){return t<0?1:vb(e,0,e,t)}function hb(e,t){return t>=0&&e.bo(t)>0}function gb(e,t){if(t<0)throw wy(new Ty,``+t);var n=e.oV(t);if(n.e())throw wy(new Ty,``+t);return n.A()}function _b(e,t){return XE(t)?yb(e,e,t):mv(e,t)}function vb(e,t,n,r){for(;;)if(t===r)return n.e()?0:1;else if(n.e())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function yb(e,t,n){for(;;)if(t===n)return!0;else if(!t.e()&&!n.e()&&H().t(t.A(),n.A())){var r=t.w(),i=n.w();t=r,n=i}else return t.e()&&n.e()}function bb(e){this.fB=null,this.fB=e}j=bb.prototype=new nv,j.constructor=bb;function xb(){}xb.prototype=j,j.n=(function(){return!this.fB.e()}),j.j=(function(){var e=this.fB.A();return this.fB=this.fB.w(),e}),new P().i(bb,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{fW:1,n:1,p:1,b:1,c:1});function Sb(e){for(var t=e.aY;;){if(e.aY<e.es)var n=e.fC,r=e.aY,i=n.charCodeAt(r),a=!(i===13||i===10);else var a=!1;if(a)e.aY=1+e.aY|0;else break}var o=e.aY;if(e.aY<e.es){var s=e.fC,c=e.aY,l=s.charCodeAt(c);if(e.aY=1+e.aY|0,e.aY<e.es)var u=e.fC,d=e.aY,f=u.charCodeAt(d),p=l===13&&f===10;else var p=!1;p&&(e.aY=1+e.aY|0),e.nM||(o=e.aY)}var m=e.fC,h=o;return m.substring(t,h)}function Cb(e,t){this.es=0,this.aY=0,this.fC=null,this.nM=!1,this.fC=e,this.nM=t,this.es=e.length,this.aY=0}j=Cb.prototype=new nv,j.constructor=Cb;function wb(){}wb.prototype=j,j.n=(function(){return this.aY<this.es}),j.pn=(function(){return this.aY>=this.es?Y().N.j():Sb(this)}),j.j=(function(){return this.pn()}),new P().i(Cb,`scala.collection.StringOps$$anon$1`,{fZ:1,n:1,p:1,b:1,c:1});function Tb(e){e.d3===null&&(e.d3=new eo(wd().fJ<<1),e.fE=new(bd.r()).C(wd().fJ))}function Eb(e,t){e.eu=t,e.bT=0,e.fD=t.jt()}function Db(e,t){Tb(e),e.bC=1+e.bC|0;var n=e.bC<<1,r=1+(e.bC<<1)|0;e.fE.a[e.bC]=t,e.d3.a[n]=0,e.d3.a[r]=t.jp()}function Ob(e){e.bC=-1+e.bC|0}function kb(e){for(;e.bC>=0;){var t=e.bC<<1,n=1+(e.bC<<1)|0,r=e.d3.a[t];if(r<e.d3.a[n]){var i=e.d3;i.a[t]=1+i.a[t]|0;var a=e.fE.a[e.bC].j4(r);if(a.j8()&&Db(e,a),a.h1())return Eb(e,a),!0}else Ob(e)}return!1}function Ab(e){return e.bT=0,e.fD=0,e.bC=-1,e}function jb(e,t){return Ab(e),t.j8()&&Db(e,t),t.h1()&&Eb(e,t),e}function Mb(){this.bT=0,this.fD=0,this.eu=null,this.bC=0,this.d3=null,this.fE=null}j=Mb.prototype=new nv,j.constructor=Mb;function Nb(){}Nb.prototype=j,j.n=(function(){return this.bT<this.fD||kb(this)});function Pb(e,t){e.gF=t,e.dK=-1+t.jt()|0}function Fb(e,t){e.bU=1+e.bU|0,e.fG.a[e.bU]=t,e.fF.a[e.bU]=-1+t.jp()|0}function Ib(e){e.bU=-1+e.bU|0}function Lb(e){for(;e.bU>=0;){var t=e.fF.a[e.bU];if(e.fF.a[e.bU]=-1+t|0,t>=0)Fb(e,e.fG.a[e.bU].j4(t));else{var n=e.fG.a[e.bU];if(Ib(e),n.h1())return Pb(e,n),!0}}return!1}function Rb(e){return e.dK=-1,e.bU=-1,e.fF=new eo(1+wd().fJ|0),e.fG=new(bd.r()).C(1+wd().fJ|0),e}function zb(e,t){return Rb(e),Fb(e,t),Lb(e),e}function Bb(){this.dK=0,this.gF=null,this.bU=0,this.fF=null,this.fG=null}j=Bb.prototype=new nv,j.constructor=Bb;function Vb(){}Vb.prototype=j,j.n=(function(){return this.dK>=0||Lb(this)});function Hb(e){return e.eW!==null}function Ub(e,t,n,r){if(n<0||n>t.a.length)throw NS(new PS);var i=new eo(1+t.a.length|0);t.x(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.x(n,i,a,o),i}function Wb(e,t,n,r,i,a,o){var s=t.g2(n),c=s<<1,l=t.as,u=new N(2+l.a.length|0);l.x(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.x(c,u,d,f);var p=Ub(e,t.bB,s,i);t.a4|=n,t.as=u,t.bB=p,t.aZ=1+t.aZ|0,t.bq=t.bq+a|0}function Gb(e){Hb(e)&&Kb(e),e.eW=null}function Kb(e){e.cL=e.cL.oR()}function qb(){this.eW=null,this.cL=null,this.cL=new kg(0,0,Du().nu,Du().i1,0,0)}j=qb.prototype=new M,j.constructor=qb;function Jb(){}Jb.prototype=j,j.be=(function(e){}),j.fh=(function(e,t,n,r,i,a){if(e instanceof kg){var o=wd().eG(i,a),s=wd().eb(o);if((e.a4&s)!==0){var c=wd().cR(e.a4,o,s),l=e.ef(c),u=e.g7(c);if(u===r&&H().t(l,t))e.as.a[1+(c<<1)|0]=n;else{var d=e.dm(c),f=Hu().cB(u),p=e.jm(l,d,u,f,t,n,r,i,5+a|0);e.sp(s,f,p)}}else if((e.ao&s)!==0){var m=wd().cR(e.ao,o,s),h=e.dk(m),g=h.aX(),_=h.ec();this.fh(h,t,n,r,i,5+a|0),e.aZ=e.aZ+(h.aX()-g|0)|0,e.bq=e.bq+(h.ec()-_|0)|0}else Wb(this,e,s,t,r,i,n)}else if(e instanceof jg){var v=e.fb(t);v<0?e.ap=e.ap.e9(new Gy(t,n)):e.ap=e.ap.ej(v,new Gy(t,n))}else throw new By(e)}),j.jw=(function(){return this.cL.aZ===0?Ig().il:(this.eW===null&&(this.eW=new VD(this.cL)),this.eW)}),j.or=(function(e){Gb(this);var t=W().V(e.bn()),n=Hu().cB(t);return this.fh(this.cL,e.bn(),e.bi(),t,n,0),this}),j.eC=(function(e,t){Gb(this);var n=W().V(e);return this.fh(this.cL,e,t,n,Hu().cB(n),0),this}),j.iK=(function(e){if(Gb(this),e instanceof VD)new wC(this,e);else if(iD(e))e.eE(new t_(((e,t)=>this.eC(e,t))));else for(var t=e.m();t.n();)this.or(t.j());return this}),j.bc=(function(e){return this.iK(e)}),j.b7=(function(e){return this.or(e)}),j.bd=(function(){return this.jw()}),new P().i(qb,`scala.collection.immutable.HashMapBuilder`,{g8:1,ab:1,M:1,I:1,G:1});function Yb(){this.eX=null,this.nQ=null,this.r0()}j=Yb.prototype=new M,j.constructor=Yb;function Xb(){}Xb.prototype=j,j.be=(function(e){}),j.r0=(function(){var e=new dd;this.nQ=(Cv(),new LD(new Qg((()=>e.iW())))),this.eX=e}),j.sX=(function(){return this.eX.ja(new Qg((()=>Hg()))),this.nQ}),j.qA=(function(e){var t=new dd;return this.eX.ja(new Qg((()=>(Cv(),new Lg(e,(Cv(),new LD(new Qg((()=>t.iW()))))))))),this.eX=t,this}),j.qr=(function(e){if(e.E()!==0){var t=new dd;this.eX.ja(new Qg((()=>Cv().pH(e.m(),new Qg((()=>t.iW())))))),this.eX=t}return this}),j.bc=(function(e){return this.qr(e)}),j.b7=(function(e){return this.qA(e)}),j.bd=(function(){return this.sX()}),new P().i(Yb,`scala.collection.immutable.LazyList$LazyBuilder`,{ge:1,ab:1,M:1,I:1,G:1});function Zb(e){this.eY=null,this.eY=e}j=Zb.prototype=new nv,j.constructor=Zb;function Qb(){}Qb.prototype=j,j.n=(function(){return!this.eY.e()}),j.j=(function(){if(this.eY.e())return Y().N.j();var e=this.eY.I().A();return this.eY=this.eY.I().aR(),e}),new P().i(Zb,`scala.collection.immutable.LazyList$LazyIterator`,{gg:1,n:1,p:1,b:1,c:1});function $b(){}j=$b.prototype=new M,j.constructor=$b;function ex(){}ex.prototype=j,j.dh=(function(e){return $().ju(e)}),j.b9=(function(){return new Ok}),j.aI=(function(e){return $().ju(e)}),new P().i($b,`scala.collection.immutable.List$`,{gj:1,an:1,a2:1,K:1,a:1});var tx;function nx(){return tx||=new $b,tx}function rx(e,t){return e.eZ=t,e.dO=0,e}function ix(){this.dO=0,this.eZ=null}j=ix.prototype=new nv,j.constructor=ix;function ax(){}ax.prototype=j,j.n=(function(){return this.dO<2}),j.j=(function(){switch(this.dO){case 0:var e=new Gy(this.eZ.cr,this.eZ.dM);break;case 1:var e=new Gy(this.eZ.cs,this.eZ.dN);break;default:var e=Y().N.j()}return this.dO=1+this.dO|0,e}),j.ed=(function(e){return this.dO=this.dO+e|0,this});function ox(e,t){return e.dP=t,e.dQ=0,e}function sx(){this.dQ=0,this.dP=null}j=sx.prototype=new nv,j.constructor=sx;function cx(){}cx.prototype=j,j.n=(function(){return this.dQ<3}),j.j=(function(){switch(this.dQ){case 0:var e=new Gy(this.dP.c6,this.dP.d4);break;case 1:var e=new Gy(this.dP.c7,this.dP.d5);break;case 2:var e=new Gy(this.dP.c8,this.dP.d6);break;default:var e=Y().N.j()}return this.dQ=1+this.dQ|0,e}),j.ed=(function(e){return this.dQ=this.dQ+e|0,this});function lx(e,t){return e.cN=t,e.dR=0,e}function ux(){this.dR=0,this.cN=null}j=ux.prototype=new nv,j.constructor=ux;function dx(){}dx.prototype=j,j.n=(function(){return this.dR<4}),j.j=(function(){switch(this.dR){case 0:var e=new Gy(this.cN.bD,this.cN.ct);break;case 1:var e=new Gy(this.cN.bE,this.cN.cu);break;case 2:var e=new Gy(this.cN.bF,this.cN.cv);break;case 3:var e=new Gy(this.cN.bG,this.cN.cw);break;default:var e=Y().N.j()}return this.dR=1+this.dR|0,e}),j.ed=(function(e){return this.dR=this.dR+e|0,this});function fx(){this.d7=null,this.fH=!1,this.ew=null,this.d7=CD(),this.fH=!1}j=fx.prototype=new M,j.constructor=fx;function px(){}px.prototype=j,j.be=(function(e){}),j.pE=(function(){return this.fH?this.ew.jw():this.d7}),j.qy=(function(e,t){return this.fH?this.ew.eC(e,t):this.d7.aX()<4||this.d7.cf(e)?this.d7=this.d7.ek(e,t):(this.fH=!0,this.ew===null&&(this.ew=new qb),this.d7.qZ(this.ew),this.ew.eC(e,t)),this}),j.om=(function(e){return this.fH?(this.ew.iK(e),this):dm(this,e)}),j.bc=(function(e){return this.om(e)}),j.b7=(function(e){return this.qy(e.bn(),e.bi())}),j.bd=(function(){return this.pE()}),new P().i(fx,`scala.collection.immutable.MapBuilderImpl`,{gt:1,ab:1,M:1,I:1,G:1});function mx(){try{return Op().pB(Ql().j6(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function hx(){this.nW=0,this.nX=null,_x=this,this.nW=mx(),this.nX=new VC(dk(),0,0)}j=hx.prototype=new M,j.constructor=hx;function gx(){}gx.prototype=j,j.dh=(function(e){return this.j2(e)}),j.j2=(function(e){if(e instanceof nO)return e;var t=e.E();if(t===0)return dk();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof bO){var r=e.an().aW();if(r!==null&&r===F.l()){var n=e.cK;break matchEnd5}}if(EC(e)){var i=new N(t);e.c0(i,0,2147483647);var n=i;break matchEnd5}var a=new N(t);e.m().c0(a,0,2147483647);var n=a}return new tk(n)}else return new Ex().on(e).pF()}),j.b9=(function(){return new Ex}),j.aI=(function(e){return this.j2(e)}),new P().i(hx,`scala.collection.immutable.Vector$`,{gG:1,an:1,a2:1,K:1,a:1});var _x;function vx(){return _x||=new hx,_x}function yx(e){var t=null,n=null;if(e.R>=6){t=e.aN;var r=e.O>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.x(r,a,0,o)}var s=e.O%33554432|0;e.G=e.G-(e.O-s|0)|0,e.O=s,e.G>>>25|0||(e.R=5),n=t,t=t.a[0]}if(e.R>=5){t===null&&(t=e.a0);var c=31&(e.O>>>20|0);if(e.R===5){if(c>0){var l=t,u=t,d=32-c|0;l.x(c,u,0,d)}e.a0=t;var f=e.O%1048576|0;e.G=e.G-(e.O-f|0)|0,e.O=f,e.G>>>20|0||(e.R=4)}else c>0&&(t=R().ad(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=4){t===null&&(t=e.T);var p=31&(e.O>>>15|0);if(e.R===4){if(p>0){var m=t,h=t,g=32-p|0;m.x(p,h,0,g)}e.T=t;var _=e.O%32768|0;e.G=e.G-(e.O-_|0)|0,e.O=_,e.G>>>15|0||(e.R=3)}else p>0&&(t=R().ad(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=3){t===null&&(t=e.P);var v=31&(e.O>>>10|0);if(e.R===3){if(v>0){var y=t,ee=t,te=32-v|0;y.x(v,ee,0,te)}e.P=t;var ne=e.O%1024|0;e.G=e.G-(e.O-ne|0)|0,e.O=ne,e.G>>>10|0||(e.R=2)}else v>0&&(t=R().ad(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=2){t===null&&(t=e.L);var b=31&(e.O>>>5|0);if(e.R===2){if(b>0){var re=t,ie=t,ae=32-b|0;re.x(b,ie,0,ae)}e.L=t;var oe=e.O%32|0;e.G=e.G-(e.O-oe|0)|0,e.O=oe,e.G>>>5|0||(e.R=1)}else b>0&&(t=R().ad(t,b,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.R>=1){t===null&&(t=e.X);var se=31&e.O;if(e.R===1){if(se>0){var ce=t,x=t,le=32-se|0;ce.x(se,x,0,le)}e.X=t,e.Q=e.Q-e.O|0,e.O=0}else se>0&&(t=R().ad(t,se,32)),n.a[0]=t}e.gI=!1}function bx(e,t){var n=t.a.length;if(n>0){e.Q===32&&Cx(e);var r=32-e.Q|0,i=r<n?r:n,a=n-i|0,o=e.X,s=e.Q;if(t.x(0,o,s,i),e.Q=e.Q+i|0,a>0){Cx(e);var c=e.X;t.x(i,c,0,a),e.Q=e.Q+a|0}}}function xx(e,t,n){if(t.a.length!==0){e.Q===32&&Cx(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.G|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.G>>>5|0),c=e.L;if(t.x(0,c,s,a),wx(e,a<<5),o>0){var l=e.L;t.x(a,l,0,o),wx(e,o<<5)}break;case 3:if(e.G%1024|0){var u=(t=>{xx(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof eo)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof ro)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof to)for(;f<d;){var g=t.a[f],_=g.p,v=g.s;u(new z(_,v)),f=1+f|0}else if(t instanceof no)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof Za)for(;f<d;){var ee=t.a[f];u(Wa(ee)),f=1+f|0}else if(t instanceof Qa)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof $a)for(;f<d;){var ne=t.a[f];u(ne),f=1+f|0}else if(t instanceof Xa)for(;f<d;){var b=t.a[f];u(b),f=1+f|0}else throw new By(t);return}var re=31&((32768-e.G|0)>>>10|0),ie=re<r?re:r,ae=r-ie|0,oe=31&(e.G>>>10|0),se=e.P;if(t.x(0,se,oe,ie),wx(e,ie<<10),ae>0){var ce=e.P;t.x(ie,ce,0,ae),wx(e,ae<<10)}break;case 4:if(e.G%32768|0){var x=(t=>{xx(e,t,3)}),le=t.a.length,S=0;if(t!==null)for(;S<le;){var ue=t.a[S];x(ue),S=1+S|0}else if(t instanceof eo)for(;S<le;){var de=t.a[S];x(de),S=1+S|0}else if(t instanceof ro)for(;S<le;){var fe=t.a[S];x(fe),S=1+S|0}else if(t instanceof to)for(;S<le;){var pe=t.a[S],me=pe.p,he=pe.s;x(new z(me,he)),S=1+S|0}else if(t instanceof no)for(;S<le;){var ge=t.a[S];x(ge),S=1+S|0}else if(t instanceof Za)for(;S<le;){var _e=t.a[S];x(Wa(_e)),S=1+S|0}else if(t instanceof Qa)for(;S<le;){var ve=t.a[S];x(ve),S=1+S|0}else if(t instanceof $a)for(;S<le;){var ye=t.a[S];x(ye),S=1+S|0}else if(t instanceof Xa)for(;S<le;){var be=t.a[S];x(be),S=1+S|0}else throw new By(t);return}var xe=31&((1048576-e.G|0)>>>15|0),Se=xe<r?xe:r,Ce=r-Se|0,we=31&(e.G>>>15|0),Te=e.T;if(t.x(0,Te,we,Se),wx(e,Se<<15),Ce>0){var Ee=e.T;t.x(Se,Ee,0,Ce),wx(e,Ce<<15)}break;case 5:if(e.G%1048576|0){var De=(t=>{xx(e,t,4)}),Oe=t.a.length,C=0;if(t!==null)for(;C<Oe;){var ke=t.a[C];De(ke),C=1+C|0}else if(t instanceof eo)for(;C<Oe;){var Ae=t.a[C];De(Ae),C=1+C|0}else if(t instanceof ro)for(;C<Oe;){var je=t.a[C];De(je),C=1+C|0}else if(t instanceof to)for(;C<Oe;){var Me=t.a[C],Ne=Me.p,Pe=Me.s;De(new z(Ne,Pe)),C=1+C|0}else if(t instanceof no)for(;C<Oe;){var Fe=t.a[C];De(Fe),C=1+C|0}else if(t instanceof Za)for(;C<Oe;){var Ie=t.a[C];De(Wa(Ie)),C=1+C|0}else if(t instanceof Qa)for(;C<Oe;){var Le=t.a[C];De(Le),C=1+C|0}else if(t instanceof $a)for(;C<Oe;){var Re=t.a[C];De(Re),C=1+C|0}else if(t instanceof Xa)for(;C<Oe;){var ze=t.a[C];De(ze),C=1+C|0}else throw new By(t);return}var Be=31&((33554432-e.G|0)>>>20|0),Ve=Be<r?Be:r,He=r-Ve|0,Ue=31&(e.G>>>20|0),We=e.a0;if(t.x(0,We,Ue,Ve),wx(e,Ve<<20),He>0){var Ge=e.a0;t.x(Ve,Ge,0,He),wx(e,He<<20)}break;case 6:if(e.G%33554432|0){var Ke=(t=>{xx(e,t,5)}),qe=t.a.length,w=0;if(t!==null)for(;w<qe;){var Je=t.a[w];Ke(Je),w=1+w|0}else if(t instanceof eo)for(;w<qe;){var Ye=t.a[w];Ke(Ye),w=1+w|0}else if(t instanceof ro)for(;w<qe;){var Xe=t.a[w];Ke(Xe),w=1+w|0}else if(t instanceof to)for(;w<qe;){var Ze=t.a[w],Qe=Ze.p,$e=Ze.s;Ke(new z(Qe,$e)),w=1+w|0}else if(t instanceof no)for(;w<qe;){var et=t.a[w];Ke(et),w=1+w|0}else if(t instanceof Za)for(;w<qe;){var tt=t.a[w];Ke(Wa(tt)),w=1+w|0}else if(t instanceof Qa)for(;w<qe;){var T=t.a[w];Ke(T),w=1+w|0}else if(t instanceof $a)for(;w<qe;){var nt=t.a[w];Ke(nt),w=1+w|0}else if(t instanceof Xa)for(;w<qe;){var rt=t.a[w];Ke(rt),w=1+w|0}else throw new By(t);return}var it=e.G>>>25|0;if((it+r|0)>64)throw by(new Sy,`exceeding 2^31 elements`);var at=e.aN;t.x(0,at,it,r),wx(e,r<<25);break;default:throw new By(n)}}}function Sx(e,t){for(var n=t.cV(),r=0;r<n;){var i=t.cU(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?bx(e,i):e.Q===32||e.Q===0?xx(e,i,c):V().iY(-2+c|0,i,new X((t=>{bx(e,t)}))),r=1+r|0}return e}function Cx(e){var t=32+e.G|0,n=t^e.G;e.G=t,e.Q=0,Tx(e,t,n)}function wx(e,t){if(t>0){var n=e.G+t|0,r=n^e.G;e.G=n,e.Q=0,Tx(e,n,r)}}function Tx(e,t,n){if(n<=0)throw by(new Sy,`advance1(`+t+`, `+n+`): a1=`+e.X+`, a2=`+e.L+`, a3=`+e.P+`, a4=`+e.T+`, a5=`+e.a0+`, a6=`+e.aN+`, depth=`+e.R);n<1024?(e.R<=1&&(e.L=new(F.r().r()).C(32),e.L.a[0]=e.X,e.R=2),e.X=new N(32),e.L.a[31&(t>>>5|0)]=e.X):n<32768?(e.R<=2&&(e.P=new(F.r().r().r()).C(32),e.P.a[0]=e.L,e.R=3),e.X=new N(32),e.L=new(F.r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L):n<1048576?(e.R<=3&&(e.T=new(F.r().r().r().r()).C(32),e.T.a[0]=e.P,e.R=4),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P):n<33554432?(e.R<=4&&(e.a0=new(F.r().r().r().r().r()).C(32),e.a0.a[0]=e.T,e.R=5),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.T=new(F.r().r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P,e.a0.a[31&(t>>>20|0)]=e.T):(e.R<=5&&(e.aN=new(F.r().r().r().r().r().r()).C(64),e.aN.a[0]=e.a0,e.R=6),e.X=new N(32),e.L=new(F.r().r()).C(32),e.P=new(F.r().r().r()).C(32),e.T=new(F.r().r().r().r()).C(32),e.a0=new(F.r().r().r().r().r()).C(32),e.L.a[31&(t>>>5|0)]=e.X,e.P.a[31&(t>>>10|0)]=e.L,e.T.a[31&(t>>>15|0)]=e.P,e.a0.a[31&(t>>>20|0)]=e.T,e.aN.a[t>>>25|0]=e.a0)}function Ex(){this.aN=null,this.a0=null,this.T=null,this.P=null,this.L=null,this.X=null,this.Q=0,this.G=0,this.O=0,this.gI=!1,this.R=0,this.X=new N(32),this.Q=0,this.G=0,this.O=0,this.gI=!1,this.R=1}j=Ex.prototype=new M,j.constructor=Ex;function Dx(){}Dx.prototype=j,j.be=(function(e){}),j.s8=(function(e){var t=e.cV();switch(t){case 0:break;case 1:this.R=1;var n=e.g.a.length;this.Q=31&n,this.G=n-this.Q|0;var r=e.g;this.X=r.a.length===32?r:R().ad(r,0,32);break;case 3:var i=e.bm,a=e.k;this.X=a.a.length===32?a:R().ad(a,0,32),this.R=2,this.O=32-e.bI|0;var o=e.l+this.O|0;this.Q=31&o,this.G=o-this.Q|0,this.L=new(F.r().r()).C(32),this.L.a[0]=e.g;var s=this.L,c=i.a.length;i.x(0,s,1,c),this.L.a[1+i.a.length|0]=this.X;break;case 5:var l=e.b2,u=e.b3,d=e.k;this.X=d.a.length===32?d:R().ad(d,0,32),this.R=3,this.O=1024-e.bh|0;var f=e.l+this.O|0;this.Q=31&f,this.G=f-this.Q|0,this.P=new(F.r().r().r()).C(32),this.P.a[0]=V().cP(e.g,e.bt);var p=this.P,m=l.a.length;l.x(0,p,1,m),this.L=R().a2(u,32),this.P.a[1+l.a.length|0]=this.L,this.L.a[u.a.length]=this.X;break;case 7:var h=e.aE,g=e.aG,_=e.aF,v=e.k;this.X=v.a.length===32?v:R().ad(v,0,32),this.R=4,this.O=32768-e.aV|0;var y=e.l+this.O|0;this.Q=31&y,this.G=y-this.Q|0,this.T=new(F.r().r().r().r()).C(32),this.T.a[0]=V().cP(V().cP(e.g,e.ba),e.bb);var ee=this.T,te=h.a.length;h.x(0,ee,1,te),this.P=R().a2(g,32),this.L=R().a2(_,32),this.T.a[1+h.a.length|0]=this.P,this.P.a[g.a.length]=this.L,this.L.a[_.a.length]=this.X;break;case 9:var ne=e.af,b=e.ai,re=e.ah,ie=e.ag,ae=e.k;this.X=ae.a.length===32?ae:R().ad(ae,0,32),this.R=5,this.O=1048576-e.aw|0;var oe=e.l+this.O|0;this.Q=31&oe,this.G=oe-this.Q|0,this.a0=new(F.r().r().r().r().r()).C(32),this.a0.a[0]=V().cP(V().cP(V().cP(e.g,e.aK),e.aL),e.aM);var se=this.a0,ce=ne.a.length;ne.x(0,se,1,ce),this.T=R().a2(b,32),this.P=R().a2(re,32),this.L=R().a2(ie,32),this.a0.a[1+ne.a.length|0]=this.T,this.T.a[b.a.length]=this.P,this.P.a[re.a.length]=this.L,this.L.a[ie.a.length]=this.X;break;case 11:var x=e.a5,le=e.a9,S=e.a8,ue=e.a7,de=e.a6,fe=e.k;this.X=fe.a.length===32?fe:R().ad(fe,0,32),this.R=6,this.O=33554432-e.aq|0;var pe=e.l+this.O|0;this.Q=31&pe,this.G=pe-this.Q|0,this.aN=new(F.r().r().r().r().r().r()).C(64),this.aN.a[0]=V().cP(V().cP(V().cP(V().cP(e.g,e.ax),e.ay),e.az),e.aA);var me=this.aN,he=x.a.length;x.x(0,me,1,he),this.a0=R().a2(le,32),this.T=R().a2(S,32),this.P=R().a2(ue,32),this.L=R().a2(de,32),this.aN.a[1+x.a.length|0]=this.a0,this.a0.a[le.a.length]=this.T,this.T.a[S.a.length]=this.P,this.P.a[ue.a.length]=this.L,this.L.a[de.a.length]=this.X;break;default:throw new By(t)}return this.Q===0&&this.G>0&&(this.Q=32,this.G=-32+this.G|0),this}),j.qB=(function(e){return this.Q===32&&Cx(this),this.X.a[this.Q]=e,this.Q=1+this.Q|0,this}),j.on=(function(e){return e instanceof nO?this.Q===0&&this.G===0&&!this.gI?this.s8(e):Sx(this,e):dm(this,e)}),j.pF=(function(){this.gI&&yx(this);var e=this.Q+this.G|0,t=e-this.O|0;if(t===0)return vx(),dk();if(e<0)throw wy(new Ty,`Vector cannot have negative size `+e);if(e<=32){var n=this.X;return new tk(n.a.length===t?n:R().a2(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=R().ad(this.L,1,i),o=this.L.a[0],s=this.L.a[i],c=1+r|0,l=s.a.length===c?s:R().a2(s,c);return new fk(o,32-this.O|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=R().ad(this.P,1,f),m=this.P.a[0],h=R().ad(m,1,m.a.length),g=this.P.a[0].a[0],_=R().a2(this.P.a[f],d),v=this.P.a[f].a[d],y=1+u|0,ee=v.a.length===y?v:R().a2(v,y),te=g.a.length;return new mk(g,te,h,te+(h.a.length<<5)|0,p,_,ee,t)}else if(e<=1048576){var ne=31&(-1+e|0),b=31&((-1+e|0)>>>5|0),re=31&((-1+e|0)>>>10|0),ie=(-1+e|0)>>>15|0,ae=R().ad(this.T,1,ie),oe=this.T.a[0],se=R().ad(oe,1,oe.a.length),ce=this.T.a[0].a[0],x=R().ad(ce,1,ce.a.length),le=this.T.a[0].a[0].a[0],S=R().a2(this.T.a[ie],re),ue=R().a2(this.T.a[ie].a[re],b),de=this.T.a[ie].a[re].a[b],fe=1+ne|0,pe=de.a.length===fe?de:R().a2(de,fe),me=le.a.length,he=me+(x.a.length<<5)|0;return new gk(le,me,x,he,se,he+(se.a.length<<10)|0,ae,S,ue,pe,t)}else if(e<=33554432){var ge=31&(-1+e|0),_e=31&((-1+e|0)>>>5|0),ve=31&((-1+e|0)>>>10|0),ye=31&((-1+e|0)>>>15|0),be=(-1+e|0)>>>20|0,xe=R().ad(this.a0,1,be),Se=this.a0.a[0],Ce=R().ad(Se,1,Se.a.length),we=this.a0.a[0].a[0],Te=R().ad(we,1,we.a.length),Ee=this.a0.a[0].a[0].a[0],De=R().ad(Ee,1,Ee.a.length),Oe=this.a0.a[0].a[0].a[0].a[0],C=R().a2(this.a0.a[be],ye),ke=R().a2(this.a0.a[be].a[ye],ve),Ae=R().a2(this.a0.a[be].a[ye].a[ve],_e),je=this.a0.a[be].a[ye].a[ve].a[_e],Me=1+ge|0,Ne=je.a.length===Me?je:R().a2(je,Me),Pe=Oe.a.length,Fe=Pe+(De.a.length<<5)|0,Ie=Fe+(Te.a.length<<10)|0;return new vk(Oe,Pe,De,Fe,Te,Ie,Ce,Ie+(Ce.a.length<<15)|0,xe,C,ke,Ae,Ne,t)}else{var Le=31&(-1+e|0),Re=31&((-1+e|0)>>>5|0),ze=31&((-1+e|0)>>>10|0),Be=31&((-1+e|0)>>>15|0),Ve=31&((-1+e|0)>>>20|0),He=(-1+e|0)>>>25|0,Ue=R().ad(this.aN,1,He),We=this.aN.a[0],Ge=R().ad(We,1,We.a.length),Ke=this.aN.a[0].a[0],qe=R().ad(Ke,1,Ke.a.length),w=this.aN.a[0].a[0].a[0],Je=R().ad(w,1,w.a.length),Ye=this.aN.a[0].a[0].a[0].a[0],Xe=R().ad(Ye,1,Ye.a.length),Ze=this.aN.a[0].a[0].a[0].a[0].a[0],Qe=R().a2(this.aN.a[He],Ve),$e=R().a2(this.aN.a[He].a[Ve],Be),et=R().a2(this.aN.a[He].a[Ve].a[Be],ze),tt=R().a2(this.aN.a[He].a[Ve].a[Be].a[ze],Re),T=this.aN.a[He].a[Ve].a[Be].a[ze].a[Re],nt=1+Le|0,rt=T.a.length===nt?T:R().a2(T,nt),it=Ze.a.length,at=it+(Xe.a.length<<5)|0,ot=at+(Je.a.length<<10)|0,st=ot+(qe.a.length<<15)|0;return new bk(Ze,it,Xe,at,Je,ot,qe,st,Ge,st+(Ge.a.length<<20)|0,Ue,Qe,$e,et,tt,rt,t)}}),j.F=(function(){return`VectorBuilder(len1=`+this.Q+`, lenRest=`+this.G+`, offset=`+this.O+`, depth=`+this.R+`)`}),j.bd=(function(){return this.pF()}),j.bc=(function(e){return this.on(e)}),j.b7=(function(e){return this.qB(e)}),new P().i(Ex,`scala.collection.immutable.VectorBuilder`,{gO:1,ab:1,M:1,I:1,G:1});function Ox(){this.nZ=null,Ax=this,this.nZ=new N(0)}j=Ox.prototype=new M,j.constructor=Ox;function kx(){}kx.prototype=j,j.dh=(function(e){return this.pa(e)}),j.pa=(function(e){var t=e.E();if(t>=0){var n=this.pI(this.nZ,0,t),r=Xy(e)?e.c0(n,0,2147483647):e.m().c0(n,0,2147483647);if(r!==t)throw new Cy(`Copied `+r+` of `+t);return Ak(new Mk,n,t)}else return jk(new Mk).oo(e)}),j.b9=(function(){return new Mx}),j.sW=(function(e,t){if(t<0)throw W_(new G_,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw W_(new G_,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),j.pI=(function(e,t,n){var r=this.sW(e.a.length,n);if(r<0)return e;var i=new N(r);return e.x(0,i,0,t),i}),j.aI=(function(e){return this.pa(e)}),new P().i(Ox,`scala.collection.mutable.ArrayBuffer$`,{gT:1,an:1,a2:1,K:1,a:1});var Ax;function jx(){return Ax||=new Ox,Ax}function Mx(){this.e3=null,Ev(this,(jx(),jk(new Mk)))}j=Mx.prototype=new Ov,j.constructor=Mx;function Nx(){}Nx.prototype=j,j.be=(function(e){this.e3.be(e)}),new P().i(Mx,`scala.collection.mutable.ArrayBuffer$$anon$1`,{gU:1,aV:1,M:1,I:1,G:1});function Px(){this.eV=null,sv(this,uS())}j=Px.prototype=new lv,j.constructor=Px;function Fx(){}Fx.prototype=j,new P().i(Px,`scala.collection.mutable.Buffer$`,{gZ:1,bI:1,a2:1,K:1,a:1});var Ix;function Lx(){return Ix||=new Px,Ix}function Rx(e,t){this.e3=null,Ev(this,YD(new ZD,e,t))}j=Rx.prototype=new Ov,j.constructor=Rx;function zx(){}zx.prototype=j,j.be=(function(e){this.e3.be(e)}),new P().i(Rx,`scala.collection.mutable.HashSet$$anon$4`,{h7:1,aV:1,M:1,I:1,G:1});function Bx(e,t){return e.fL=t,e.e5=0,e.db=null,e.fM=t.b4.a.length,e}function Vx(){this.e5=0,this.db=null,this.fM=0,this.fL=null}j=Vx.prototype=new nv,j.constructor=Vx;function Hx(){}Hx.prototype=j,j.n=(function(){if(this.db!==null)return!0;for(;this.e5<this.fM;){var e=this.fL.b4.a[this.e5];if(this.e5=1+this.e5|0,e!==null)return this.db=e,!0}return!1}),j.j=(function(){if(this.n()){var e=this.iX(this.db);return this.db=this.db.b5,e}else return Y().N.j()});function Ux(e,t){return e.fN=t,e}function Wx(){this.fN=null}j=Wx.prototype=new M,j.constructor=Wx;function Gx(){}Gx.prototype=j,j.be=(function(e){}),j.bc=(function(e){return dm(this,e)}),j.bd=(function(){return this.fN});function Kx(){this.eV=null,sv(this,jx())}j=Kx.prototype=new lv,j.constructor=Kx;function qx(){}qx.prototype=j,new P().i(Kx,`scala.collection.mutable.IndexedSeq$`,{ha:1,bI:1,a2:1,K:1,a:1});var Jx;function Yx(){return Jx||=new Kx,Jx}function Xx(){}j=Xx.prototype=new M,j.constructor=Xx;function Zx(){}Zx.prototype=j,j.dh=(function(e){return new Ok().hc(e)}),j.b9=(function(){return Ev(new Dv,new Ok)}),j.aI=(function(e){return new Ok().hc(e)}),new P().i(Xx,`scala.collection.mutable.ListBuffer$`,{hd:1,an:1,a2:1,K:1,a:1});var Qx;function $x(){return Qx||=new Xx,Qx}function eS(e,t){this.iD=null,this.o9=null,this.o8=0,this.iD=e,this.o9=t,this.o8=t.ac()|0}j=eS.prototype=new nv,j.constructor=eS;function tS(){}tS.prototype=j,j.n=(function(){return Pd().oL(this.o8,this.o9.ac()|0,`mutation occurred during iteration`),this.iD.n()}),j.j=(function(){return this.iD.j()}),new P().i(eS,`scala.collection.mutable.MutationTracker$CheckedIterator`,{hf:1,n:1,p:1,b:1,c:1});function nS(e,t){return iS(t)?e.aW()===t.aW():!1}function rS(e){return e.W.Z?`Array[`+rS(e.W.Q())+`]`:e.W.N}function iS(e){return!!(e&&e.$classData&&e.$classData.n.F)}function aS(e){this.fP=0,this.od=0,this.oe=null,this.oe=e,this.fP=0,this.od=e.bK()}j=aS.prototype=new nv,j.constructor=aS;function oS(){}oS.prototype=j,j.n=(function(){return this.fP<this.od}),j.j=(function(){var e=this.oe.bL(this.fP);return this.fP=1+this.fP|0,e}),new P().i(aS,`scala.runtime.ScalaRunTime$$anon$1`,{hV:1,n:1,p:1,b:1,c:1});function sS(){}j=sS.prototype=new M,j.constructor=sS;function cS(){}cS.prototype=j,j.dh=(function(e){return this.pb(e)}),j.b9=(function(){return Fk(new Ik)}),j.pb=(function(e){return dm(Fk(new Ik),e).bd()}),j.aI=(function(e){return this.pb(e)}),new P().i(sS,`scala.scalajs.js.WrappedArray$`,{i1:1,an:1,a2:1,K:1,a:1});var lS;function uS(){return lS||=new sS,lS}function dS(){}j=dS.prototype=new M,j.constructor=dS;function fS(){}fS.prototype=j,j.dh=(function(e){return this.j3(e)}),j.j3=(function(e){return this.b9().bc(e).bd()}),j.b9=(function(){return new wv(Pk(new Ik,[]),new X((e=>new zD(e.e6))))}),j.aI=(function(e){return this.j3(e)}),new P().i(dS,`scala.scalajs.runtime.WrappedVarArgs$`,{id:1,an:1,a2:1,K:1,a:1});var pS;function mS(){return pS||=new dS,pS}function hS(e){this.fQ=null,this.fQ=e}j=hS.prototype=new Lv,j.constructor=hS;function gS(){}gS.prototype=j,j.ph=(function(){return!0}),j.pi=(function(){return!1}),j.ji=(function(e){return this}),j.dj=(function(e,t){return e.f(this.fQ)}),j.bM=(function(){return`Failure`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.fQ:W().eF(e)}),j.cm=(function(){return new aS(this)}),j.z=(function(){return G().ei(this,-889275714,!1)}),j.F=(function(){return U().iI(this)}),j.r=(function(e){if(this===e)return!0;if(e instanceof hS){var t=this.fQ,n=e.fQ;return t===null?n===null:t.r(n)}else return!1}),new P().i(hS,`scala.util.Failure`,{cr:1,ct:1,U:1,d:1,a:1});function _S(e){this.f4=null,this.f4=e}j=_S.prototype=new Lv,j.constructor=_S;function vS(){}vS.prototype=j,j.ph=(function(){return!1}),j.pi=(function(){return!0}),j.ji=(function(e){try{return new _S(e.f(this.f4))}catch(e){var t=e instanceof Bp?e:new Bw(e);if(df().gV(t))return new hS(t);throw t instanceof Bw?t.bv:t}}),j.dj=(function(e,t){try{return t.f(this.f4)}catch(t){var n=t instanceof Bp?t:new Bw(t);if(df().gV(n))return e.f(n);throw n instanceof Bw?n.bv:n}}),j.bM=(function(){return`Success`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.f4:W().eF(e)}),j.cm=(function(){return new aS(this)}),j.z=(function(){return G().ei(this,-889275714,!1)}),j.F=(function(){return U().iI(this)}),j.r=(function(e){return this===e||e instanceof _S&&H().t(this.f4,e.f4)}),new P().i(_S,`scala.util.Success`,{cs:1,ct:1,U:1,d:1,a:1});var yS=class e extends Fm{constructor(e,t){super(),this.fk=null,this.fj=null,this.fk=e,this.fj=t,zp(this,`ErrorHandlingError: `+zm().fa(e)+`; cause: `+zm().fa(t),null,!0,!0),this.pg(t)}cm(){return new Uy(this)}z(){return G().ei(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fk,r=t.fk;if(n===null?r===null:n.r(r)){var i=this.fj,a=t.fj;return i===null?a===null:i.r(a)}else return!1}else return!1}bK(){return 2}bM(){return`ErrorHandlingError`}bL(e){if(e===0)return this.fk;if(e===1)return this.fj;throw wy(new Ty,``+e)}F(){return`ErrorHandlingError: `+this.fk+`; cause: `+this.fj}};new P().i(yS,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{aY:1,au:1,u:1,a:1,d:1,U:1});var bS=class e extends Fm{constructor(e){super(),this.fl=null,this.fl=e,zp(this,`ObserverError: `+zm().fa(e),null,!0,!0)}cm(){return new Uy(this)}z(){return G().ei(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fl,r=t.fl;return n===null?r===null:n.r(r)}else return!1}bK(){return 1}bM(){return`ObserverError`}bL(e){if(e===0)return this.fl;throw wy(new Ty,``+e)}F(){return`ObserverError: `+this.fl}};new P().i(bS,`com.raquo.airstream.core.AirstreamError$ObserverError`,{aZ:1,au:1,u:1,a:1,d:1,U:1});var xS=class e extends Fm{constructor(e,t){super(),this.fn=null,this.fm=null,this.fn=e,this.fm=t,zp(this,`ObserverErrorHandlingError: `+zm().fa(e)+`; cause: `+zm().fa(t),null,!0,!0),this.pg(t)}cm(){return new Uy(this)}z(){return G().ei(this,-889275714,!1)}r(t){if(this===t)return!0;if(t instanceof e){var n=this.fn,r=t.fn;if(n===null?r===null:n.r(r)){var i=this.fm,a=t.fm;return i===null?a===null:i.r(a)}else return!1}else return!1}bK(){return 2}bM(){return`ObserverErrorHandlingError`}bL(e){if(e===0)return this.fn;if(e===1)return this.fm;throw wy(new Ty,``+e)}F(){return`ObserverErrorHandlingError: `+this.fn+`; cause: `+this.fm}};new P().i(xS,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{b0:1,au:1,u:1,a:1,d:1,U:1});var SS=class e extends Fm{constructor(e,t){super(),this.eK=null,this.eJ=0,this.eK=e,this.eJ=t,zp(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}cm(){return new Uy(this)}z(){var e=-889275714;return e=W().h(e,WS(`TransactionDepthExceeded`)),e=W().h(e,W().V(this.eK)),e=W().h(e,this.eJ),W().H(e,2)}r(t){return this===t?!0:t instanceof e&&this.eJ===t.eJ?this.eK===t.eK:!1}bK(){return 2}bM(){return`TransactionDepthExceeded`}bL(e){if(e===0)return this.eK;if(e===1)return this.eJ;throw wy(new Ty,``+e)}F(){return`TransactionDepthExceeded: `+this.eK+`; maxDepth: `+this.eJ}};new P().i(SS,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{b1:1,au:1,u:1,a:1,d:1,U:1});function CS(e){e.hg()}function wS(e){this.k3=null,this.aS=null,this.hw=null,this.hv=null,this.cW=null,this.k3=void 0,Jv(this),this.hw=e,this.hv=new TE(this.hw,new kv((()=>go(this)))),this.cW=this.hv}j=wS.prototype=new M,j.constructor=wS;function TS(){}TS.prototype=j,j.gc=(function(){return this.k3}),j.g3=(function(){return ho(this)}),j.F=(function(){return go(this)}),j.hf=(function(){return this.cW}),j.sZ=(function(e,t){this.hw=e,Gw(this.hv,e,t)}),new P().i(wS,`com.raquo.airstream.state.SourceVar`,{cO:1,aA:1,aB:1,av:1,ah:1,cQ:1});function ES(e){this.cY=null,this.cZ=null,this.ll=null,this.lm=!1,D_(this,e,$())}j=ES.prototype=new k_,j.constructor=ES;function DS(){}DS.prototype=j,j.h9=(function(){return this.lm||=(this.ll=this.c(`relative`),!0),this.ll}),new P().i(ES,`com.raquo.laminar.defs.styles.StyleProps$$anon$43`,{dn:1,a7:1,A:1,a5:1,a6:1,dv:1});function OS(e,t){var n=e.hM;n===void 0?e.hM=Jd().qO(ws().bj(U().d(new(JS.r()).C([t])))):n.push(t)|0}function kS(e,t){var n=e.lH;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].u2()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function AS(e,t){this.gv=null,this.cJ=null,this.hL=null,this.eq=null,this.fs=null,this.hN=null,this.bp=null,this.lH=null,this.hM=null,this.hN=e,this.bp=t,this.gv=$S(),Zf(this),ay(this),this.lH=void 0,this.hM=void 0}j=AS.prototype=new M,j.constructor=AS;function jS(){}jS.prototype=j,j.cb=(function(e){Vc().gU(e,this,void 0)}),j.h0=(function(){return this.cJ}),j.oQ=(function(e){this.cJ=e}),j.pV=(function(e){uy(this,e)}),j.pN=(function(e){dy(this,e)}),j.r4=(function(){if(Ms().jb(this.bp)){var e=this.hN;return e instanceof ah?e.qH():void 0}else return ec().lr}),j.sb=(function(e){var t=this.r4();return t!==void 0&&Os().s5(t,e,0)}),j.sE=(function(e){if(e instanceof Ff&&this.sb(e.cI)){if(kS(this,e.cI))throw eg(new tg,"Can not add uncontrolled `"+e.cI+" <-- ???` to element `"+Ms().oT(this.bp)+"` that already has an input controller for `"+e.cI+"` property.");OS(this,e.cI)}}),j.F=(function(){return`ReactiveHtmlElement(`+(this.bp===null?`tag=`+this.hN.jn():this.bp.outerHTML)+`)`}),j.eH=(function(){return this.bp}),new P().i(AS,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{eb:1,aE:1,Y:1,bg:1,bh:1,e9:1});function MS(e,t){return zp(e,t,null,!0,!0),e}function NS(e){return zp(e,null,null,!0,!0),e}var PS=class extends Ty{};new P().i(PS,`java.lang.ArrayIndexOutOfBoundsException`,{eC:1,aH:1,E:1,D:1,u:1,a:1});function FS(e,t){return Object.is(e,t)}function IS(e){return ml().jr(e)}var LS=new P().i(0,`java.lang.Double`,{bs:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>typeof e==`number`)),RS=new P().i(0,`java.lang.Float`,{eH:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>Ua(e))),zS=new P().i(0,`java.lang.Integer`,{eK:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>Ha(e)));function BS(e,t){return t instanceof z&&e.p===t.p&&e.s===t.s}function VS(e){return e.p^e.s}var HS=new P().i(0,`java.lang.Long`,{bu:1,ad:1,a:1,a3:1,Z:1,ar:1},(e=>e instanceof z)),US=class extends Sy{constructor(e){super(),zp(this,e,null,!0,!0)}};new P().i(US,`java.lang.NumberFormatException`,{eS:1,bt:1,E:1,D:1,u:1,a:1});function WS(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function GS(e,t){return e===t}function KS(e,t){var n=pp().ti(t);return e.indexOf(n)|0}function qS(e){for(var t=e.length,n=0;n!==t&&e.charCodeAt(n)<=32;)n=1+n|0;if(n===t)return``;for(var r=t;e.charCodeAt(-1+r|0)<=32;)r=-1+r|0;if(n===0&&r===t)return e;var i=n,a=r;return e.substring(i,a)}var JS=new P().i(0,`java.lang.String`,{bw:1,a:1,a3:1,aG:1,Z:1,ar:1},(e=>typeof e==`string`)),YS=class extends Ty{constructor(){super(),zp(this,null,null,!0,!0)}};new P().i(YS,`java.lang.StringIndexOutOfBoundsException`,{eZ:1,aH:1,E:1,D:1,u:1,a:1});function XS(){}j=XS.prototype=new Hy,j.constructor=XS;function ZS(){}ZS.prototype=j,j.rS=(function(){throw new Ny(`None.get`)}),j.bM=(function(){return`None`}),j.bK=(function(){return 0}),j.bL=(function(e){return W().eF(e)}),j.cm=(function(){return new aS(this)}),j.z=(function(){return 2433880}),j.F=(function(){return`None`}),j.Z=(function(){this.rS()}),new P().i(XS,`scala.None$`,{fn:1,bz:1,b:1,U:1,d:1,a:1});var QS;function $S(){return QS||=new XS,QS}function eC(e){this.fx=null,this.fx=e}j=eC.prototype=new Hy,j.constructor=eC;function tC(){}tC.prototype=j,j.Z=(function(){return this.fx}),j.bM=(function(){return`Some`}),j.bK=(function(){return 1}),j.bL=(function(e){return e===0?this.fx:W().eF(e)}),j.cm=(function(){return new aS(this)}),j.z=(function(){return G().ei(this,-889275714,!1)}),j.F=(function(){return U().iI(this)}),j.r=(function(e){return this===e||e instanceof eC&&H().t(this.fx,e.fx)}),new P().i(eC,`scala.Some`,{bA:1,bz:1,b:1,U:1,d:1,a:1});function nC(){}j=nC.prototype=new M,j.constructor=nC;function rC(){}rC.prototype=j,j.ce=(function(){return this.by()}),j.g6=(function(e){return this.bw().aI(e)}),j.gd=(function(){return this.bw().b9()}),j.bJ=(function(e){Uu(this,e)}),j.f9=(function(e){return Wu(this,e)}),j.e=(function(){return Gu(this)}),j.c0=(function(e,t,n){return Ku(this,e,t,n)}),j.e8=(function(e,t,n,r){return Ju(this,e,t,n,r)}),j.E=(function(){return-1}),j.g5=(function(e){return this.g6(e)});function iC(e,t){return e.bQ=t,e.B=0,e.bz=du().ch(e.bQ),e}function aC(){this.bQ=null,this.B=0,this.bz=0}j=aC.prototype=new nv,j.constructor=aC;function oC(){}oC.prototype=j,j.E=(function(){return this.bz-this.B|0}),j.n=(function(){return this.B<this.bz}),j.j=(function(){this.B>=du().ch(this.bQ)&&Y().N.j();var e=U().eD(this.bQ,this.B);return this.B=1+this.B|0,e}),j.ed=(function(e){if(e>0){var t=this.B+e|0;if(t<0)var n=this.bz;else var r=this.bz,n=r<t?r:t;this.B=n}return this}),new P().i(aC,`scala.collection.ArrayOps$ArrayIterator`,{a0:1,n:1,p:1,b:1,c:1,a:1});function sC(e,t){return t<0?0:t>e.bR?e.bR:t}function cC(e,t){return e.ic=t,e.d0=0,e.bR=t.u(),e}function lC(){this.ic=null,this.d0=0,this.bR=0}j=lC.prototype=new nv,j.constructor=lC;function uC(){}uC.prototype=j,j.E=(function(){return this.bR}),j.n=(function(){return this.bR>0}),j.j=(function(){if(this.bR>0){var e=this.ic.y(this.d0);return this.d0=1+this.d0|0,this.bR=-1+this.bR|0,e}else return Y().N.j()}),j.ed=(function(e){if(e>0){this.d0=this.d0+e|0;var t=this.bR-e|0;this.bR=t<0?0:t}return this}),j.gh=(function(e,t){var n=sC(this,e),r=sC(this,t)-n|0;return this.bR=r<0?0:r,this.d0=this.d0+n|0,this}),new P().i(lC,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{bG:1,n:1,p:1,b:1,c:1,a:1});function dC(){this.fN=null,Ux(this,Y().N)}j=dC.prototype=new Gx,j.constructor=dC;function fC(){}fC.prototype=j,j.qz=(function(e){return this.fN=this.fN.iR(new Qg((()=>new $y(e)))),this}),j.b7=(function(e){return this.qz(e)}),new P().i(dC,`scala.collection.Iterator$$anon$21`,{fO:1,h9:1,ab:1,M:1,I:1,G:1});function pC(e,t,n){return e.dl(t,new Qg((()=>n.f(t))))}function mC(e,t){for(var n=e.m();n.n();){var r=n.j();t.dg(r.bn(),r.bi())}}function hC(e,t,n,r,i){return Ju(new rb(e.m(),new X((e=>{if(e!==null){var t=e.bn(),n=e.bi();return t+` -> `+n}else throw new By(e)}))),t,n,r,i)}function gC(e,t){for(var n=e.gd(),r=XD(new ZD),i=e.m();i.n();){var a=i.j();r.gT(t.f(a))&&n.b7(a)}return n.bd()}function _C(e,t){var n=e.eg().b9();return n.bc(e),n.bc(t),n.bd()}function vC(e){return e.ih||=(e.ii=new bO(new N(0)),!0),e.ii}function yC(e){return e.ih?e.ii:vC(e)}function bC(){this.ii=null,this.ij=null,this.ih=!1,SC=this,this.ij=new qy(this)}j=bC.prototype=new M,j.constructor=bC;function xC(){}xC.prototype=j,j.j0=(function(e,t){return e instanceof $D?e:this.jE(Yp().p7(e,t))}),j.h6=(function(e){return new wv((jx(),new Mx),new X((t=>CC().jE(Yu(t,e)))))}),j.jE=(function(e){if(e===null)return null;if(e instanceof N)return new bO(e);if(e instanceof eo)return new gO(e);if(e instanceof ro)return new fO(e);if(e instanceof to)return new vO(e);if(e instanceof no)return new mO(e);if(e instanceof Za)return new uO(e);if(e instanceof Qa)return new cO(e);if(e instanceof $a)return new SO(e);if(e instanceof Xa)return new oO(e);if(au(e,1))return new wO(e);throw new By(e)}),j.iZ=(function(e,t){return this.j0(e,t)}),new P().i(bC,`scala.collection.immutable.ArraySeq$`,{g5:1,bK:1,bD:1,bC:1,bE:1,a:1});var SC;function CC(){return SC||=new bC,SC}function wC(e,t){for(this.bT=0,this.fD=0,this.eu=null,this.bC=0,this.d3=null,this.fE=null,jb(this,t.br);this.n();){var n=this.eu.g7(this.bT);e.fh(e.cL,this.eu.ef(this.bT),this.eu.dm(this.bT),n,Hu().cB(n),0),this.bT=1+this.bT|0}}j=wC.prototype=new Nb,j.constructor=wC;function TC(){}TC.prototype=j,j.jo=(function(){throw Y().N.j(),new yy}),j.j=(function(){this.jo()}),new P().i(wC,`scala.collection.immutable.HashMapBuilder$$anon$1`,{g9:1,bX:1,n:1,p:1,b:1,c:1});function EC(e){return!!(e&&e.$classData&&e.$classData.n.t)}function DC(e){this.dO=0,this.eZ=null,rx(this,e)}j=DC.prototype=new ax,j.constructor=DC;function OC(){}OC.prototype=j,new P().i(DC,`scala.collection.immutable.Map$Map2$$anon$1`,{gn:1,go:1,n:1,p:1,b:1,c:1});function kC(e){this.dQ=0,this.dP=null,ox(this,e)}j=kC.prototype=new cx,j.constructor=kC;function AC(){}AC.prototype=j,new P().i(kC,`scala.collection.immutable.Map$Map3$$anon$4`,{gp:1,gq:1,n:1,p:1,b:1,c:1});function jC(e){this.dR=0,this.cN=null,lx(this,e)}j=jC.prototype=new dx,j.constructor=jC;function MC(){}MC.prototype=j,new P().i(jC,`scala.collection.immutable.Map$Map4$$anon$7`,{gr:1,gs:1,n:1,p:1,b:1,c:1});function NC(e){this.dK=0,this.gF=null,this.bU=0,this.fF=null,this.fG=null,this.ir=0,this.nT=null,zb(this,e),this.ir=0}j=NC.prototype=new Vb,j.constructor=NC;function PC(){}PC.prototype=j,j.z=(function(){return G().pR(this.ir,W().V(this.nT),-889275714)}),j.su=(function(){return this.n()||Y().N.j(),this.ir=this.gF.g7(this.dK),this.nT=this.gF.dm(this.dK),this.dK=-1+this.dK|0,this}),j.j=(function(){return this.su()}),new P().i(NC,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{gu:1,g6:1,n:1,p:1,b:1,c:1});function FC(e){this.bT=0,this.fD=0,this.eu=null,this.bC=0,this.d3=null,this.fE=null,jb(this,e)}j=FC.prototype=new Nb,j.constructor=FC;function IC(){}IC.prototype=j,j.st=(function(){this.n()||Y().N.j();var e=this.eu.pd(this.bT);return this.bT=1+this.bT|0,e}),j.j=(function(){return this.st()}),new P().i(FC,`scala.collection.immutable.MapKeyValueTupleIterator`,{gv:1,bX:1,n:1,p:1,b:1,c:1});function LC(e){e.bH<=e.aD&&Y().N.j(),e.dT=1+e.dT|0;for(var t=e.it.cU(e.dT);t.a.length===0;)e.dT=1+e.dT|0,t=e.it.cU(e.dT);e.fI=e.ey;var n=e.nV,r=e.dT,i=n/2|0,a=r-i|0;e.dS=(1+i|0)-(a<0?-a|0:a)|0;var o=e.dS;switch(o){case 1:e.b0=t;break;case 2:e.b1=t;break;case 3:e.bs=t;break;case 4:e.cx=t;break;case 5:e.ex=t;break;case 6:e.is=t;break;default:throw new By(o)}e.ey=e.fI+Math.imul(t.a.length,1<<Math.imul(5,-1+e.dS|0))|0,e.ey>e.d9&&(e.ey=e.d9),e.dS>1&&(e.f0=-1+(1<<Math.imul(5,e.dS))|0)}function RC(e){var t=(e.aD-e.bH|0)+e.d9|0;if(t===e.ey&&LC(e),e.dS>1){var n=t-e.fI|0;zC(e,n,e.f0^n),e.f0=n}e.bH=e.bH-e.aD|0;var r=e.b0.a.length,i=e.bH;e.d8=r<i?r:i,e.aD=0}function zC(e,t,n){n<1024?e.b0=e.b1.a[31&(t>>>5|0)]:n<32768?(e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[0]):n<1048576?(e.bs=e.cx.a[31&(t>>>15|0)],e.b1=e.bs.a[0],e.b0=e.b1.a[0]):n<33554432?(e.cx=e.ex.a[31&(t>>>20|0)],e.bs=e.cx.a[0],e.b1=e.bs.a[0],e.b0=e.b1.a[0]):(e.ex=e.is.a[t>>>25|0],e.cx=e.ex.a[0],e.bs=e.cx.a[0],e.b1=e.bs.a[0],e.b0=e.b1.a[0])}function BC(e,t,n){n<1024?e.b0=e.b1.a[31&(t>>>5|0)]:n<32768?(e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):n<1048576?(e.bs=e.cx.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):n<33554432?(e.cx=e.ex.a[31&(t>>>20|0)],e.bs=e.cx.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)]):(e.ex=e.is.a[t>>>25|0],e.cx=e.ex.a[31&(t>>>20|0)],e.bs=e.cx.a[31&(t>>>15|0)],e.b1=e.bs.a[31&(t>>>10|0)],e.b0=e.b1.a[31&(t>>>5|0)])}function VC(e,t,n){this.it=null,this.d9=0,this.nV=0,this.b0=null,this.b1=null,this.bs=null,this.cx=null,this.ex=null,this.is=null,this.d8=0,this.aD=0,this.f0=0,this.bH=0,this.dT=0,this.dS=0,this.fI=0,this.ey=0,this.it=e,this.d9=t,this.nV=n,this.b0=e.g,this.d8=this.b0.a.length,this.aD=0,this.f0=0,this.bH=this.d9,this.dT=0,this.dS=1,this.fI=0,this.ey=this.d8}j=VC.prototype=new nv,j.constructor=VC;function HC(){}HC.prototype=j,j.E=(function(){return this.bH-this.aD|0}),j.n=(function(){return this.bH>this.aD}),j.j=(function(){this.aD===this.d8&&RC(this);var e=this.b0.a[this.aD];return this.aD=1+this.aD|0,e}),j.ed=(function(e){if(e>0){var t=((this.aD-this.bH|0)+this.d9|0)+e|0,n=this.d9,r=t<n?t:n;if(r===this.d9)this.aD=0,this.bH=0,this.d8=0;else{for(;r>=this.ey;)LC(this);var i=r-this.fI|0;this.dS>1&&(BC(this,i,this.f0^i),this.f0=i),this.d8=this.b0.a.length,this.aD=31&i,this.bH=this.aD+(this.d9-r|0)|0,this.d8>this.bH&&(this.d8=this.bH)}}return this}),j.c0=(function(e,t,n){for(var r=du().ch(e),i=this.bH-this.aD|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof N;l<c;){this.aD===this.d8&&RC(this);var d=c-l|0,f=this.b0.a.length-this.aD|0,p=d<f?d:f;if(u){var m=this.b0,h=this.aD,g=t+l|0;m.x(h,e,g,p)}else Yp().g1(this.b0,this.aD,e,t+l|0,p);this.aD=this.aD+p|0,l=l+p|0}return c}),new P().i(VC,`scala.collection.immutable.NewVectorIterator`,{gx:1,n:1,p:1,b:1,c:1,B:1});function UC(e){return e.ix=0,e.o1=0,e}function WC(){this.ix=0,this.o1=0}j=WC.prototype=new M,j.constructor=WC;function GC(){}GC.prototype=j,j.be=(function(e){this.ix<e&&this.sV(e)});function KC(){this.iz=null,this.o3=null,JC=this,this.iz=new qy(this),this.o3=new KO(new N(0))}j=KC.prototype=new M,j.constructor=KC;function qC(){}qC.prototype=j,j.rK=(function(e,t){return this.jh(Yp().p7(e,t))}),j.h6=(function(e){return new wv(new Mw(e.aW()),new X((e=>YC().jh(e))))}),j.jh=(function(e){if(e===null)return null;if(e instanceof N)return new KO(e);if(e instanceof eo)return new HO(e);if(e instanceof ro)return new RO(e);if(e instanceof to)return new WO(e);if(e instanceof no)return new BO(e);if(e instanceof Za)return new IO(e);if(e instanceof Qa)return new PO(e);if(e instanceof $a)return new JO(e);if(e instanceof Xa)return new MO(e);if(au(e,1))return new XO(e);throw new By(e)}),j.iZ=(function(e,t){return this.rK(e,t)}),new P().i(KC,`scala.collection.mutable.ArraySeq$`,{gY:1,bK:1,bD:1,bC:1,bE:1,a:1});var JC;function YC(){return JC||=new KC,JC}function XC(e){this.e5=0,this.db=null,this.fM=0,this.fL=null,Bx(this,e)}j=XC.prototype=new Hx,j.constructor=XC;function ZC(){}ZC.prototype=j,j.iX=(function(e){return e.f3}),new P().i(XC,`scala.collection.mutable.HashSet$$anon$1`,{h4:1,aW:1,n:1,p:1,b:1,c:1});function QC(e){this.e5=0,this.db=null,this.fM=0,this.fL=null,Bx(this,e)}j=QC.prototype=new Hx,j.constructor=QC;function $C(){}$C.prototype=j,j.iX=(function(e){return e}),new P().i(QC,`scala.collection.mutable.HashSet$$anon$2`,{h5:1,aW:1,n:1,p:1,b:1,c:1});function ew(e){this.e5=0,this.db=null,this.fM=0,this.fL=null,this.iC=0,this.o7=null,this.o7=e,Bx(this,e),this.iC=0}j=ew.prototype=new Hx,j.constructor=ew;function tw(){}tw.prototype=j,j.z=(function(){return this.iC}),j.iX=(function(e){return this.iC=this.o7.hb(e.dc),this}),new P().i(ew,`scala.collection.mutable.HashSet$$anon$3`,{h6:1,aW:1,n:1,p:1,b:1,c:1});function nw(e){this.fO=null,this.fO=e}j=nw.prototype=new M,j.constructor=nw;function rw(){}rw.prototype=j,j.r=(function(e){return nS(this,e)}),j.z=(function(){return W().V(this.fO)}),j.F=(function(){return rS(this.fO)}),j.aW=(function(){return this.fO}),j.bx=(function(e){return this.fO.W.U(e)}),new P().i(nw,`scala.reflect.ClassTag$GenericClassTag`,{hn:1,F:1,P:1,Q:1,a:1,d:1});function iw(e){this.cY=null,this.cZ=null,this.ld=null,this.le=!1,D_(this,e,$())}j=iw.prototype=new k_,j.constructor=iw;function aw(){}aw.prototype=j,j.f6=(function(){return this.le||=(this.ld=this.c(`auto`),!0),this.ld}),new P().i(iw,`com.raquo.laminar.defs.styles.StyleProps$$anon$11`,{dj:1,a7:1,A:1,a5:1,a6:1,ba:1,du:1});function ow(e){this.cY=null,this.cZ=null,this.lf=null,this.lg=!1,D_(this,e,$())}j=ow.prototype=new k_,j.constructor=ow;function sw(){}sw.prototype=j,j.ci=(function(){return this.lg||=(this.lf=this.c(`inline-block`),!0),this.lf}),new P().i(ow,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{dl:1,a7:1,A:1,a5:1,a6:1,bb:1,ds:1});function cw(e){this.cY=null,this.cZ=null,this.ln=null,this.lo=!1,D_(this,e,$())}j=cw.prototype=new k_,j.constructor=cw;function lw(){}lw.prototype=j,j.v=(function(){return this.lo||=(this.ln=Sf(this),!0),this.ln}),new P().i(cw,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{dp:1,a7:1,A:1,a5:1,a6:1,aC:1,aD:1});function uw(){}j=uw.prototype=new gy,j.constructor=uw;function dw(){}dw.prototype=j;function fw(e){this.bQ=null,this.B=0,this.bz=0,this.i4=null,this.i4=e,iC(this,e)}j=fw.prototype=new oC,j.constructor=fw;function pw(){}pw.prototype=j,j.sv=(function(){this.B>=this.i4.a.length&&Y().N.j();var e=this.i4.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sv()}),new P().i(fw,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{fx:1,a0:1,n:1,p:1,b:1,c:1,a:1});function mw(e){this.bQ=null,this.B=0,this.bz=0,this.i5=null,this.i5=e,iC(this,e)}j=mw.prototype=new oC,j.constructor=mw;function hw(){}hw.prototype=j,j.sw=(function(){this.B>=this.i5.a.length&&Y().N.j();var e=this.i5.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return Wa(this.sw())}),new P().i(mw,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{fy:1,a0:1,n:1,p:1,b:1,c:1,a:1});function gw(e){this.bQ=null,this.B=0,this.bz=0,this.i6=null,this.i6=e,iC(this,e)}j=gw.prototype=new oC,j.constructor=gw;function _w(){}_w.prototype=j,j.sx=(function(){this.B>=this.i6.a.length&&Y().N.j();var e=this.i6.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sx()}),new P().i(gw,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{fz:1,a0:1,n:1,p:1,b:1,c:1,a:1});function vw(e){this.bQ=null,this.B=0,this.bz=0,this.i7=null,this.i7=e,iC(this,e)}j=vw.prototype=new oC,j.constructor=vw;function yw(){}yw.prototype=j,j.sy=(function(){this.B>=this.i7.a.length&&Y().N.j();var e=this.i7.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sy()}),new P().i(vw,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{fA:1,a0:1,n:1,p:1,b:1,c:1,a:1});function bw(e){this.bQ=null,this.B=0,this.bz=0,this.i8=null,this.i8=e,iC(this,e)}j=bw.prototype=new oC,j.constructor=bw;function xw(){}xw.prototype=j,j.sz=(function(){this.B>=this.i8.a.length&&Y().N.j();var e=this.i8.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sz()}),new P().i(bw,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{fB:1,a0:1,n:1,p:1,b:1,c:1,a:1});function Sw(e){this.bQ=null,this.B=0,this.bz=0,this.i9=null,this.i9=e,iC(this,e)}j=Sw.prototype=new oC,j.constructor=Sw;function Cw(){}Cw.prototype=j,j.sA=(function(){this.B>=this.i9.a.length&&Y().N.j();var e=this.i9.a[this.B],t=e.p,n=e.s;return this.B=1+this.B|0,new z(t,n)}),j.j=(function(){return this.sA()}),new P().i(Sw,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{fC:1,a0:1,n:1,p:1,b:1,c:1,a:1});function ww(e){this.bQ=null,this.B=0,this.bz=0,this.ia=null,this.ia=e,iC(this,e)}j=ww.prototype=new oC,j.constructor=ww;function Tw(){}Tw.prototype=j,j.sB=(function(){this.B>=this.ia.a.length&&Y().N.j();var e=this.ia.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sB()}),new P().i(ww,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{fD:1,a0:1,n:1,p:1,b:1,c:1,a:1});function Ew(e){this.bQ=null,this.B=0,this.bz=0,this.nC=null,this.nC=e,iC(this,e)}j=Ew.prototype=new oC,j.constructor=Ew;function Dw(){}Dw.prototype=j,j.sC=(function(){this.B>=this.nC.a.length&&Y().N.j(),this.B=1+this.B|0}),j.j=(function(){this.sC()}),new P().i(Ew,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{fE:1,a0:1,n:1,p:1,b:1,c:1,a:1});function Ow(e){this.bQ=null,this.B=0,this.bz=0,this.ib=null,this.ib=e,iC(this,e)}j=Ow.prototype=new oC,j.constructor=Ow;function kw(){}kw.prototype=j,j.sD=(function(){this.B>=this.ib.a.length&&Y().N.j();var e=this.ib.a[this.B];return this.B=1+this.B|0,e}),j.j=(function(){return this.sD()}),new P().i(Ow,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{fF:1,a0:1,n:1,p:1,b:1,c:1,a:1});function Aw(e){return e.ce()+`(<not computed>)`}function jw(e){return!!(e&&e.$classData&&e.$classData.n.ae)}function Mw(e){this.ix=0,this.o1=0,this.f2=null,this.o2=!1,this.iy=null,this.f2=e,UC(this),this.o2=e===oo.l(),this.iy=[]}j=Mw.prototype=new GC,j.constructor=Mw;function Nw(){}Nw.prototype=j,j.oq=(function(e){var t=this.o2?Ga(e):e===null?this.f2.W.z:e;return this.iy.push(t),this}),j.qs=(function(e){for(var t=e.m();t.n();)this.oq(t.j());return this}),j.sV=(function(e){}),j.bd=(function(){return(this.f2===io.l()?ou.l():this.f2===Rd.l()||this.f2===a_.l()?F.l():this.f2).W.r().w(this.iy)}),j.F=(function(){return`ArrayBuilder.generic`}),j.bc=(function(e){return this.qs(e)}),j.b7=(function(e){return this.oq(e)}),new P().i(Mw,`scala.collection.mutable.ArrayBuilder$generic`,{gX:1,gW:1,ab:1,M:1,I:1,G:1,a:1});function Pw(e,t){this.ic=null,this.d0=0,this.bR=0,this.o6=null,this.o5=0,this.o6=t,cC(this,e),this.o5=t.ac()|0}j=Pw.prototype=new uC,j.constructor=Pw;function Fw(){}Fw.prototype=j,j.n=(function(){return Pd().oL(this.o5,this.o6.ac()|0,`mutation occurred during iteration`),this.bR>0}),new P().i(Pw,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{h1:1,bG:1,n:1,p:1,b:1,c:1,a:1});function Iw(){this.a1=null}j=Iw.prototype=new M,j.constructor=Iw;function Lw(){}Lw.prototype=j,j.F=(function(){return this.a1}),j.r=(function(e){return this===e}),j.z=(function(){return za(this)});function Rw(){}j=Rw.prototype=new M,j.constructor=Rw;function zw(){}zw.prototype=j;var Bw=class e extends G_{constructor(e){super(),this.bv=null,this.bv=e,zp(this,null,null,!0,!0)}g8(){return ja(this.bv)}bM(){return`JavaScriptException`}bK(){return 1}bL(e){return e===0?this.bv:W().eF(e)}cm(){return new aS(this)}z(){return G().ei(this,-889275714,!1)}r(t){return this===t||t instanceof e&&H().t(this.bv,t.bv)}};new P().i(Bw,`scala.scalajs.js.JavaScriptException`,{cp:1,E:1,D:1,u:1,a:1,U:1,d:1});function Vw(e,t){e.jj()!==void 0&&e.iH(Oo().po()),e.pm(t)}function Hw(e){var t=e.jj();if(t===void 0){e.iH(Oo().po());var n=e.iT();Vw(e,n);var r=n}else var r=t;return r}function Uw(e,t,n){Gw(e,new _S(t),n)}function Ww(e,t,n){Gw(e,new hS(t),n)}function Gw(e,t,n){Vw(e,t);var r=t.ph(),i=!1;i=!1,e.h2(!1);for(var a=e.g4(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.fe(t),r&&!i&&(i=!0)}for(var c=e.ga(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.sH(t,n),r&&!i&&(i=!0)}e.h2(!0);var d=e.jk();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].ac(),f=1+f|0;d.length=0}r&&!i&&t.dj(new Q((e=>{zm().cn(e)})),new Q((e=>void 0)))}function Kw(e){this.cY=null,this.cZ=null,D_(this,e,$())}j=Kw.prototype=new k_,j.constructor=Kw;function qw(){}qw.prototype=j,new P().i(Kw,`com.raquo.laminar.defs.styles.StyleProps$$anon$25`,{dk:1,a7:1,A:1,a5:1,a6:1,dr:1,dw:1,dx:1});function Jw(e){this.cY=null,this.cZ=null,this.lh=null,this.li=!1,this.lj=null,this.lk=!1,D_(this,e,$())}j=Jw.prototype=new k_,j.constructor=Jw;function Yw(){}Yw.prototype=j,j.f6=(function(){return this.li||=(this.lh=this.c(`auto`),!0),this.lh}),j.v=(function(){return this.lk||=(this.lj=Sf(this),!0),this.lj}),new P().i(Jw,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{dm:1,a7:1,A:1,a5:1,a6:1,ba:1,aC:1,aD:1});function Xw(e,t){typeof console<`u`&&(e.no&&console.error?console.error(t):console.log(t))}function Zw(e){this.no=!1,this.fu=null,this.no=e,new Ey,this.fu=``}j=Zw.prototype=new dw,j.constructor=Zw;function Qw(){}Qw.prototype=j,j.sf=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.fu=``+this.fu+t,t=``;else{var r=this.fu,i=t;Xw(this,``+r+i.substring(0,n)),this.fu=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new P().i(Zw,`java.lang.JSConsoleBasedPrintStream`,{eN:1,eA:1,ez:1,bm:1,bk:1,bo:1,bl:1,bn:1});function $w(e,t,n){for(;;)if(t<=0||n.e())return n;else{var r=-1+t|0,i=n.w();t=r,n=i}}function eT(e,t){if(e.bo(1)<=0)return e;for(var n=e.gd(),r=XD(new ZD),i=e.m(),a=!1;i.n();){var o=i.j();r.gT(t.f(o))?n.b7(o):a=!0}return a?n.bd():e}function tT(){this.a1=null}j=tT.prototype=new Lw,j.constructor=tT;function nT(){}nT.prototype=j,j.aW=(function(){return ao.l()}),j.bx=(function(e){return new Xa(e)});function rT(){this.a1=null}j=rT.prototype=new Lw,j.constructor=rT;function iT(){}iT.prototype=j,j.aW=(function(){return so.l()}),j.bx=(function(e){return new Qa(e)});function aT(){this.a1=null}j=aT.prototype=new Lw,j.constructor=aT;function oT(){}oT.prototype=j,j.aW=(function(){return oo.l()}),j.bx=(function(e){return new Za(e)});function sT(){this.a1=null}j=sT.prototype=new Lw,j.constructor=sT;function cT(){}cT.prototype=j,j.aW=(function(){return po.l()}),j.bx=(function(e){return new ro(e)});function lT(){this.a1=null}j=lT.prototype=new Lw,j.constructor=lT;function uT(){}uT.prototype=j,j.aW=(function(){return fo.l()}),j.bx=(function(e){return new no(e)});function dT(){this.a1=null}j=dT.prototype=new Lw,j.constructor=dT;function fT(){}fT.prototype=j,j.aW=(function(){return lo.l()}),j.bx=(function(e){return new eo(e)});function pT(){this.a1=null}j=pT.prototype=new Lw,j.constructor=pT;function mT(){}mT.prototype=j,j.aW=(function(){return uo.l()}),j.bx=(function(e){return new to(e)});function hT(){this.de=null}j=hT.prototype=new zw,j.constructor=hT;function gT(){}gT.prototype=j,j.F=(function(){return this.de}),j.r=(function(e){return this===e}),j.z=(function(){return za(this)});function _T(){this.a1=null}j=_T.prototype=new Lw,j.constructor=_T;function vT(){}vT.prototype=j,j.aW=(function(){return co.l()}),j.bx=(function(e){return new $a(e)});function yT(){this.a1=null}j=yT.prototype=new Lw,j.constructor=yT;function bT(){}bT.prototype=j,j.aW=(function(){return io.l()}),j.bx=(function(e){return new(ou.r()).C(e)});function xT(e){this.cY=null,this.cZ=null,this.lp=null,this.lq=!1,D_(this,e,$())}j=xT.prototype=new k_,j.constructor=xT;function ST(){}ST.prototype=j,j.v=(function(){return this.lq||=(this.lp=Sf(this),!0),this.lp}),new P().i(xT,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{dq:1,a7:1,A:1,a5:1,a6:1,aC:1,aD:1,dt:1,bb:1});function CT(){}j=CT.prototype=new rC,j.constructor=CT;function wT(){}wT.prototype=j,j.bw=(function(){return Og()}),j.F=(function(){return Aw(this)}),j.by=(function(){return`View`});function TT(e,t){if(e===t)return!0;if(ET(t))if(e.aX()===t.aX())try{return e.tb(t)}catch(e){if(e instanceof yy)return!1;throw e}else return!1;else return!1}function ET(e){return!!(e&&e.$classData&&e.$classData.n.aO)}function DT(){this.de=null,this.de=`Any`}j=DT.prototype=new gT,j.constructor=DT;function OT(){}OT.prototype=j,j.aW=(function(){return F.l()}),j.bx=(function(e){return new N(e)}),new P().i(DT,`scala.reflect.ManifestFactory$AnyManifest$`,{ho:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var kT;function AT(){return kT||=new DT,kT}function jT(){this.a1=null,this.a1=`Boolean`}j=jT.prototype=new nT,j.constructor=jT;function MT(){}MT.prototype=j,new P().i(jT,`scala.reflect.ManifestFactory$BooleanManifest$`,{hq:1,hp:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var NT;function PT(){return NT||=new jT,NT}function FT(){this.a1=null,this.a1=`Byte`}j=FT.prototype=new iT,j.constructor=FT;function IT(){}IT.prototype=j,new P().i(FT,`scala.reflect.ManifestFactory$ByteManifest$`,{hs:1,hr:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var LT;function RT(){return LT||=new FT,LT}function zT(){this.a1=null,this.a1=`Char`}j=zT.prototype=new oT,j.constructor=zT;function BT(){}BT.prototype=j,new P().i(zT,`scala.reflect.ManifestFactory$CharManifest$`,{hu:1,ht:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var VT;function HT(){return VT||=new zT,VT}function UT(){this.a1=null,this.a1=`Double`}j=UT.prototype=new cT,j.constructor=UT;function WT(){}WT.prototype=j,new P().i(UT,`scala.reflect.ManifestFactory$DoubleManifest$`,{hw:1,hv:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var GT;function KT(){return GT||=new UT,GT}function qT(){this.a1=null,this.a1=`Float`}j=qT.prototype=new uT,j.constructor=qT;function JT(){}JT.prototype=j,new P().i(qT,`scala.reflect.ManifestFactory$FloatManifest$`,{hy:1,hx:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var YT;function XT(){return YT||=new qT,YT}function ZT(){this.a1=null,this.a1=`Int`}j=ZT.prototype=new fT,j.constructor=ZT;function QT(){}QT.prototype=j,new P().i(ZT,`scala.reflect.ManifestFactory$IntManifest$`,{hA:1,hz:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var $T;function eE(){return $T||=new ZT,$T}function tE(){this.a1=null,this.a1=`Long`}j=tE.prototype=new mT,j.constructor=tE;function nE(){}nE.prototype=j,new P().i(tE,`scala.reflect.ManifestFactory$LongManifest$`,{hC:1,hB:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var rE;function iE(){return rE||=new tE,rE}function aE(){this.de=null,this.de=`Nothing`}j=aE.prototype=new gT,j.constructor=aE;function oE(){}oE.prototype=j,j.aW=(function(){return a_.l()}),j.bx=(function(e){return new N(e)}),new P().i(aE,`scala.reflect.ManifestFactory$NothingManifest$`,{hD:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var sE;function cE(){return sE||=new aE,sE}function lE(){this.de=null,this.de=`Null`}j=lE.prototype=new gT,j.constructor=lE;function uE(){}uE.prototype=j,j.aW=(function(){return Rd.l()}),j.bx=(function(e){return new N(e)}),new P().i(lE,`scala.reflect.ManifestFactory$NullManifest$`,{hE:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var dE;function fE(){return dE||=new lE,dE}function pE(){this.de=null,this.de=`Object`}j=pE.prototype=new gT,j.constructor=pE;function mE(){}mE.prototype=j,j.aW=(function(){return F.l()}),j.bx=(function(e){return new N(e)}),new P().i(pE,`scala.reflect.ManifestFactory$ObjectManifest$`,{hF:1,ay:1,ax:1,T:1,F:1,P:1,Q:1,a:1,d:1});var hE;function gE(){return hE||=new pE,hE}function _E(){this.a1=null,this.a1=`Short`}j=_E.prototype=new vT,j.constructor=_E;function vE(){}vE.prototype=j,new P().i(_E,`scala.reflect.ManifestFactory$ShortManifest$`,{hH:1,hG:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var yE;function bE(){return yE||=new _E,yE}function xE(){this.a1=null,this.a1=`Unit`}j=xE.prototype=new bT,j.constructor=xE;function SE(){}SE.prototype=j,new P().i(xE,`scala.reflect.ManifestFactory$UnitManifest$`,{hJ:1,hI:1,a4:1,T:1,F:1,P:1,Q:1,a:1,d:1});var CE;function wE(){return CE||=new xE,CE}function TE(e,t){this.k8=null,this.k7=!1,this.k9=null,this.hx=0,this.k5=null,this.k6=null,this.kc=!1,this.hy=null,this.ka=null,this.kb=0,this.ka=t,this.k8=void 0,Bm(this),this.hx=0,Rv(this),this.hy=void 0,this.kb=1,Vw(this,e)}j=TE.prototype=new M,j.constructor=TE;function EE(){}EE.prototype=j,j.gc=(function(){return this.k8}),j.F=(function(){return go(this)}),j.jd=(function(){return this.k7}),j.jk=(function(){return this.k9}),j.h2=(function(e){this.k7=e}),j.jl=(function(e){this.k9=e}),j.pu=(function(){}),j.r=(function(e){return this===e}),j.z=(function(){return za(this)}),j.iG=(function(){return this.hx}),j.iH=(function(e){this.hx=e}),j.hf=(function(){return this}),j.pt=(function(){CS(this)}),j.g4=(function(){return this.k5}),j.ga=(function(){return this.k6}),j.pW=(function(){return this.kc}),j.hi=(function(e){this.kc=e}),j.oO=(function(e){this.k5=e}),j.oP=(function(e){this.k6=e}),j.jj=(function(){return this.hy}),j.pm=(function(e){this.hy=e}),j.hg=(function(){return Hw(this)}),j.pQ=(function(){return this.kb}),j.iT=(function(){return Hw(this)}),j.pw=(function(){}),j.g3=(function(){return this.ka.ac()+`.signal`}),new P().i(TE,`com.raquo.airstream.state.VarSignal`,{cT:1,aA:1,ah:1,b2:1,b4:1,aB:1,b5:1,b6:1,b7:1,cP:1});function DE(e,t){return e===t?!0:OE(t)&&t.gY(e)?e.ff(t):!1}function OE(e){return!!(e&&e.$classData&&e.$classData.n.m)}function kE(e){this.nN=null,this.nN=e}j=kE.prototype=new wT,j.constructor=kE;function AE(){}AE.prototype=j,j.m=(function(){return this.nN.ac()}),new P().i(kE,`scala.collection.View$$anon$1`,{g1:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1});function jE(e,t){this.gE=null,this.nO=null,this.gE=e,this.nO=t}j=jE.prototype=new wT,j.constructor=jE;function ME(){}ME.prototype=j,j.m=(function(){return new tb(this.gE.m(),this.nO)}),j.E=(function(){return this.gE.E()===0?0:-1}),j.e=(function(){return this.gE.e()}),new P().i(jE,`scala.collection.View$DistinctBy`,{g2:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1});function NE(e){e.hq=e.dq!==null,e.gm=-1}function PE(e){if(Wv(e.dq),e.hq){var t=e.dq.iG();t!==e.gm&&FE(e,e.iT(),t)}}function FE(e,t,n){Vw(e,t),e.gm=n}function IE(e,t,n){e.hq&&(e.gm=e.dq.iG())}function LE(e){Vv(e.dq,e,!1),CS(e)}function RE(e){Um(e.dq,e)}function zE(){}j=zE.prototype=new rC,j.constructor=zE;function BE(){}BE.prototype=j,j.r=(function(e){return TT(this,e)}),j.by=(function(){return`Set`}),j.F=(function(){return Yy(this)}),j.tb=(function(e){return this.f9(e)}),j.f=(function(e){return this.cf(e)});function VE(e,t){if(e===t)return!0;if(HE(t))if(e.aX()===t.aX())try{return e.f9(new X((e=>(t=>H().t(e.dl(t.bn(),ov().nK),t.bi())))(t)))}catch(e){if(e instanceof yy)return!1;throw e}else return!1;else return!1}function HE(e){return!!(e&&e.$classData&&e.$classData.n.a8)}function UE(e,t,n){this.jS=null,this.jR=!1,this.jT=null,this.ho=0,this.jP=null,this.jQ=null,this.jV=!1,this.hp=null,this.hq=!1,this.gm=0,this.dq=null,this.hr=null,this.hs=null,this.jU=0,this.dq=e,this.hr=t,this.hs=n,this.jS=void 0,Bm(this),this.ho=0,Rv(this),this.hp=void 0,NE(this),this.jU=1+e.pQ()|0}j=UE.prototype=new M,j.constructor=UE;function WE(){}WE.prototype=j,j.gc=(function(){return this.jS}),j.g3=(function(){return ho(this)}),j.F=(function(){return go(this)}),j.jd=(function(){return this.jR}),j.jk=(function(){return this.jT}),j.h2=(function(e){this.jR=e}),j.jl=(function(e){this.jT=e}),j.r=(function(e){return this===e}),j.z=(function(){return za(this)}),j.iG=(function(){return this.ho}),j.iH=(function(e){this.ho=e}),j.hf=(function(){return this}),j.g4=(function(){return this.jP}),j.ga=(function(){return this.jQ}),j.pW=(function(){return this.jV}),j.hi=(function(e){this.jV=e}),j.oO=(function(e){this.jP=e}),j.oP=(function(e){this.jQ=e}),j.jj=(function(){return this.hp}),j.pm=(function(e){this.hp=e}),j.hg=(function(){return Hw(this)}),j.pw=(function(){PE(this)}),j.pt=(function(){LE(this)}),j.pu=(function(){RE(this)}),j.pQ=(function(){return this.jU}),j.sH=(function(e,t){IE(this,e,t),e.dj(new Q((e=>{var n=this.hs;if(n.e())Ww(this,e,t);else{var r=n.Z();try{var i=new _S(r.di(e,new Q((e=>null))))}catch(e){var a=e instanceof Bp?e:new Bw(e);matchEnd8:{var i;if(df().gV(a)){var i=new hS(a);break matchEnd8}throw a instanceof Bw?a.bv:a}}i.dj(new Q((e=>(n=>{Ww(this,new yS(n,e),t)}))(e)),new Q((e=>(n=>{n===null?Ww(this,e,t):n.e()||Uw(this,n.Z(),t)}))(e)))}})),new Q((n=>{Gw(this,e.ji(this.hr),t)})))}),j.iT=(function(){var e=this.dq.hg().ji(this.hr);return e.dj(new Q((t=>{var n=this.hs;if(n.e())return e;var r=n.Z();try{var i=new _S(r.di(t,new Q((e=>null))))}catch(e){var a=e instanceof Bp?e:new Bw(e);matchEnd8:{var i;if(df().gV(a)){var i=new hS(a);break matchEnd8}throw a instanceof Bw?a.bv:a}}return i.dj(new Q((e=>(t=>new hS(new yS(t,e))))(t)),new Q((t=>{if(t===null)return e;var n=t.e()?$S():new eC(new _S(t.Z()));return n.e()?e:n.Z()})))})),new Q((t=>e)))}),new P().i(UE,`com.raquo.airstream.misc.MapSignal`,{cG:1,aA:1,ah:1,b2:1,b4:1,aB:1,b5:1,b6:1,b7:1,b3:1,cu:1,cv:1});function GE(){}j=GE.prototype=new rC,j.constructor=GE;function KE(){}KE.prototype=j,j.gY=(function(e){return!0}),j.r=(function(e){return DE(this,e)}),j.z=(function(){return G().pJ(this)}),j.F=(function(){return Yy(this)}),j.cQ=(function(e){return dv(this,e)}),j.jc=(function(e){return fv(this,e)}),j.bo=(function(e){return hg(this,e)}),j.e=(function(){return pv(this)}),j.ff=(function(e){return mv(this,e)}),j.di=(function(e,t){return cm(this,e,t)}),j.cC=(function(e){return this.jc(e|0)});function qE(){}j=qE.prototype=new wT,j.constructor=qE;function JE(){}JE.prototype=j,j.by=(function(){return`SeqView`}),j.cQ=(function(e){return dv(this,e)}),j.bo=(function(e){return hg(this,e)}),j.e=(function(){return pv(this)});function YE(e){return!!(e&&e.$classData&&e.$classData.n.q)}function XE(e){return!!(e&&e.$classData&&e.$classData.n.at)}function ZE(){}j=ZE.prototype=new rC,j.constructor=ZE;function QE(){}QE.prototype=j,j.r=(function(e){return VE(this,e)}),j.z=(function(){return G().sn(this)}),j.by=(function(){return`Map`}),j.F=(function(){return Yy(this)}),j.g6=(function(e){return this.pk().aI(e)}),j.di=(function(e,t){return pC(this,e,t)}),j.eE=(function(e){mC(this,e)}),j.cC=(function(e){return this.cf(e)}),j.e8=(function(e,t,n,r){return hC(this,e,t,n,r)});function $E(e,t){return e.er=t,e}function eD(){this.er=null}j=eD.prototype=new JE,j.constructor=eD;function tD(){}tD.prototype=j,j.y=(function(e){return this.er.y(e)}),j.u=(function(){return this.er.u()}),j.m=(function(){return this.er.m()}),j.E=(function(){return this.er.E()}),j.e=(function(){return this.er.e()}),new P().i(eD,`scala.collection.SeqView$Id`,{bJ:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1});function nD(){this.kZ=null,this.l0=!1,this.ks=null,this.kt=!1,this.kB=null,this.kC=!1,this.ku=null,this.kv=!1,this.l7=null,this.l8=!1,this.kx=null,this.ky=!1,this.kF=null,this.kG=!1,this.kR=null,this.kS=!1,this.kP=null,this.kQ=!1,this.kT=null,this.kU=!1,this.kk=null,this.kl=!1,this.km=null,this.kn=!1,this.ko=null,this.kr=!1,this.kp=null,this.kq=!1,this.kz=null,this.kA=!1,this.kD=null,this.kE=!1,this.kH=null,this.kK=!1,this.kI=null,this.kJ=!1,this.kL=null,this.kM=!1,this.kN=null,this.kO=!1,this.kV=null,this.kW=!1,this.kX=null,this.kY=!1,this.l5=null,this.l6=!1,this.l9=null,this.la=!1,this.kw=null,this.fo=null,this.l1=null,this.l2=!1,this.kh=null,this.aB=null,this.pZ=null,this.ki=null,this.kj=!1,this.l3=null,this.l4=!1,qs(this),Vs(this),zs(this),Bs(this)}j=nD.prototype=new M,j.constructor=nD;function rD(){}rD.prototype=j,j.co=(function(){return this.l0||=(this.kZ=Qf(new $f,`span`,!1),!0),this.kZ}),j.g0=(function(){return this.kt||=(this.ks=Qf(new $f,`br`,!0),!0),this.ks}),j.S=(function(){return this.kC||=(this.kB=Qf(new $f,`div`,!1),!0),this.kB}),j.oM=(function(){return this.kv||=(this.ku=new Ff(`checked`,Ks().hB),!0),this.ku}),j.el=(function(){return this.l8||=(this.l7=new Ff(`value`,Ks().bl),!0),this.l7}),j.rg=(function(){return this.ky||=(this.kx=new Ff(`defaultChecked`,Ks().hB),!0),this.kx}),j.s4=(function(){return this.kG||=(this.kF=new Ff(`id`,Ks().bl),!0),this.kF}),j.sG=(function(){return this.kS||=(this.kR=new kf(`click`),!0),this.kR}),j.sF=(function(){return this.kQ||=(this.kP=new kf(`change`),!0),this.kP}),j.ae=(function(){return this.kU||=(this.kT=new kf(`input`),!0),this.kT}),j.qJ=(function(){return this.kl||=(this.kk=D_(new O_,`animation`,$()),!0),this.kk}),j.cd=(function(){return this.kn||=(this.km=new Kw(`background`),!0),this.km}),j.bk=(function(){return this.kr||=(this.ko=D_(new O_,`border`,$()),!0),this.ko}),j.bZ=(function(){return this.kq||=(this.kp=new cw(`border-radius`),!0),this.kp}),j.cg=(function(){return this.kA||=(this.kz=new ow(`display`),!0),this.kz}),j.a3=(function(){return this.kE||=(this.kD=new Jw(`height`),!0),this.kD}),j.cl=(function(){return this.kK||=(this.kH=new Jw(`margin`),!0),this.kH}),j.pl=(function(){return this.kJ||=(this.kI=new Jw(`margin-top`),!0),this.kI}),j.so=(function(){return this.kM||=(this.kL=new xT(`max-height`),!0),this.kL}),j.gb=(function(){return this.kO||=(this.kN=new xT(`max-width`),!0),this.kN}),j.gf=(function(){return this.kW||=(this.kV=new iw(`overflow`),!0),this.kV}),j.h8=(function(){return this.kY||=(this.kX=new ES(`position`),!0),this.kX}),j.tj=(function(){return this.l6||=(this.l5=D_(new O_,`transform`,$()),!0),this.l5}),j.ab=(function(){return this.la||=(this.l9=new Jw(`width`),!0),this.l9}),j.t9=(function(){return this.l2||=(this.l1=Mf(new Nf,`style`,Ks().bl),!0),this.l1}),j.qq=(function(){return this.kj||=(this.ki=new Df(this),!0),this.ki}),j.tc=(function(){return this.l4||=(this.l3=new S_(this),!0),this.l3}),new P().i(nD,`com.raquo.laminar.api.package$$anon$1`,{d7:1,dy:1,dc:1,dh:1,dg:1,di:1,de:1,d5:1,d1:1,d4:1,b9:1,bc:1,b8:1,d2:1});function iD(e){return!!(e&&e.$classData&&e.$classData.n.a9)}function aD(){}j=aD.prototype=new JE,j.constructor=aD;function oD(){}oD.prototype=j,j.by=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()});function sD(e){this.er=null,$E(this,e)}j=sD.prototype=new tD,j.constructor=sD;function cD(){}cD.prototype=j,j.m=(function(){return cC(new lC,this)}),j.by=(function(){return`IndexedSeqView`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),new P().i(sD,`scala.collection.IndexedSeqView$Id`,{fJ:1,bJ:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1,bF:1,r:1});function lD(){}j=lD.prototype=new KE,j.constructor=lD;function uD(){}uD.prototype=j;function dD(e,t){this.iw=null,this.o0=null,this.iw=e,this.o0=t}j=dD.prototype=new oD,j.constructor=dD;function fD(){}fD.prototype=j,j.y=(function(e){return this.iw.y(e)}),j.u=(function(){return this.iw.aH}),j.ce=(function(){return`ArrayBufferView`}),j.m=(function(){return new Pw(this,this.o0)}),new P().i(dD,`scala.collection.mutable.ArrayBufferView`,{gV:1,fu:1,aK:1,as:1,i:1,f:1,b:1,h:1,c:1,g:1,ae:1,a:1,aN:1,l:1,bF:1,r:1});function pD(){}j=pD.prototype=new QE,j.constructor=pD;function mD(){}mD.prototype=j,j.pk=(function(){return Kg()}),j.bw=(function(){return yv()});function hD(e,t){return!_D(t)||e.u()===t.u()}function gD(e,t){if(_D(t)){if(e===t)return!0;var n=e.u(),r=n===t.u();if(r){var i=0,a=e.gW(),o=t.gW(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().t(e.y(i),t.y(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().ed(i),m=t.m().ed(i);r&&p.n();)r=H().t(p.j(),m.j())}return r}else return mv(e,t)}function _D(e){return!!(e&&e.$classData&&e.$classData.n.y)}function vD(){}j=vD.prototype=new KE,j.constructor=vD;function yD(){}yD.prototype=j;function bD(){}j=bD.prototype=new mD,j.constructor=bD;function xD(){}xD.prototype=j,j.aX=(function(){return 0}),j.E=(function(){return 0}),j.e=(function(){return!0}),j.iM=(function(e){throw new Ny(`key not found: `+e)}),j.cf=(function(e){return!1}),j.dl=(function(e,t){return t.ac()}),j.m=(function(){return Y().N}),j.ek=(function(e,t){return new wD(e,t)}),j.f=(function(e){this.iM(e)}),new P().i(bD,`scala.collection.immutable.Map$EmptyMap$`,{gm:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,a:1});var SD;function CD(){return SD||=new bD,SD}function wD(e,t){this.cM=null,this.ev=null,this.cM=e,this.ev=t}j=wD.prototype=new mD,j.constructor=wD;function TD(){}TD.prototype=j,j.aX=(function(){return 1}),j.E=(function(){return 1}),j.e=(function(){return!1}),j.f=(function(e){if(H().t(e,this.cM))return this.ev;throw new Ny(`key not found: `+e)}),j.cf=(function(e){return H().t(e,this.cM)}),j.dl=(function(e,t){return H().t(e,this.cM)?this.ev:t.ac()}),j.m=(function(){return new $y(new Gy(this.cM,this.ev))}),j.eI=(function(e,t){return H().t(e,this.cM)?new wD(this.cM,t):new ED(this.cM,this.ev,e,t)}),j.f9=(function(e){return!!e.f(new Gy(this.cM,this.ev))}),j.z=(function(){var e=0,t=0,n=1,r=G().cH(this.cM,this.ev);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e7,r=G().h(r,e),r=G().h(r,t),r=G().dp(r,n),G().H(r,1)}),j.ek=(function(e,t){return this.eI(e,t)}),new P().i(wD,`scala.collection.immutable.Map$Map1`,{c2:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function ED(e,t,n,r){this.cr=null,this.dM=null,this.cs=null,this.dN=null,this.cr=e,this.dM=t,this.cs=n,this.dN=r}j=ED.prototype=new mD,j.constructor=ED;function DD(){}DD.prototype=j,j.aX=(function(){return 2}),j.E=(function(){return 2}),j.e=(function(){return!1}),j.f=(function(e){if(H().t(e,this.cr))return this.dM;if(H().t(e,this.cs))return this.dN;throw new Ny(`key not found: `+e)}),j.cf=(function(e){return H().t(e,this.cr)||H().t(e,this.cs)}),j.dl=(function(e,t){return H().t(e,this.cr)?this.dM:H().t(e,this.cs)?this.dN:t.ac()}),j.m=(function(){return new DC(this)}),j.eI=(function(e,t){return H().t(e,this.cr)?new ED(this.cr,t,this.cs,this.dN):H().t(e,this.cs)?new ED(this.cr,this.dM,this.cs,t):new OD(this.cr,this.dM,this.cs,this.dN,e,t)}),j.f9=(function(e){return!!e.f(new Gy(this.cr,this.dM))&&!!e.f(new Gy(this.cs,this.dN))}),j.z=(function(){var e=0,t=0,n=1,r=G().cH(this.cr,this.dM);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.cs,this.dN),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e7,r=G().h(r,e),r=G().h(r,t),r=G().dp(r,n),G().H(r,2)}),j.ek=(function(e,t){return this.eI(e,t)}),new P().i(ED,`scala.collection.immutable.Map$Map2`,{c3:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function OD(e,t,n,r,i,a){this.c6=null,this.d4=null,this.c7=null,this.d5=null,this.c8=null,this.d6=null,this.c6=e,this.d4=t,this.c7=n,this.d5=r,this.c8=i,this.d6=a}j=OD.prototype=new mD,j.constructor=OD;function kD(){}kD.prototype=j,j.aX=(function(){return 3}),j.E=(function(){return 3}),j.e=(function(){return!1}),j.f=(function(e){if(H().t(e,this.c6))return this.d4;if(H().t(e,this.c7))return this.d5;if(H().t(e,this.c8))return this.d6;throw new Ny(`key not found: `+e)}),j.cf=(function(e){return H().t(e,this.c6)||H().t(e,this.c7)||H().t(e,this.c8)}),j.dl=(function(e,t){return H().t(e,this.c6)?this.d4:H().t(e,this.c7)?this.d5:H().t(e,this.c8)?this.d6:t.ac()}),j.m=(function(){return new kC(this)}),j.eI=(function(e,t){return H().t(e,this.c6)?new OD(this.c6,t,this.c7,this.d5,this.c8,this.d6):H().t(e,this.c7)?new OD(this.c6,this.d4,this.c7,t,this.c8,this.d6):H().t(e,this.c8)?new OD(this.c6,this.d4,this.c7,this.d5,this.c8,t):new AD(this.c6,this.d4,this.c7,this.d5,this.c8,this.d6,e,t)}),j.f9=(function(e){return!!e.f(new Gy(this.c6,this.d4))&&!!e.f(new Gy(this.c7,this.d5))&&!!e.f(new Gy(this.c8,this.d6))}),j.z=(function(){var e=0,t=0,n=1,r=G().cH(this.c6,this.d4);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.c7,this.d5),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.c8,this.d6),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e7,r=G().h(r,e),r=G().h(r,t),r=G().dp(r,n),G().H(r,3)}),j.ek=(function(e,t){return this.eI(e,t)}),new P().i(OD,`scala.collection.immutable.Map$Map3`,{c4:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function AD(e,t,n,r,i,a,o,s){this.bD=null,this.ct=null,this.bE=null,this.cu=null,this.bF=null,this.cv=null,this.bG=null,this.cw=null,this.bD=e,this.ct=t,this.bE=n,this.cu=r,this.bF=i,this.cv=a,this.bG=o,this.cw=s}j=AD.prototype=new mD,j.constructor=AD;function jD(){}jD.prototype=j,j.aX=(function(){return 4}),j.E=(function(){return 4}),j.e=(function(){return!1}),j.f=(function(e){if(H().t(e,this.bD))return this.ct;if(H().t(e,this.bE))return this.cu;if(H().t(e,this.bF))return this.cv;if(H().t(e,this.bG))return this.cw;throw new Ny(`key not found: `+e)}),j.cf=(function(e){return H().t(e,this.bD)||H().t(e,this.bE)||H().t(e,this.bF)||H().t(e,this.bG)}),j.dl=(function(e,t){return H().t(e,this.bD)?this.ct:H().t(e,this.bE)?this.cu:H().t(e,this.bF)?this.cv:H().t(e,this.bG)?this.cw:t.ac()}),j.m=(function(){return new jC(this)}),j.eI=(function(e,t){return H().t(e,this.bD)?new AD(this.bD,t,this.bE,this.cu,this.bF,this.cv,this.bG,this.cw):H().t(e,this.bE)?new AD(this.bD,this.ct,this.bE,t,this.bF,this.cv,this.bG,this.cw):H().t(e,this.bF)?new AD(this.bD,this.ct,this.bE,this.cu,this.bF,t,this.bG,this.cw):H().t(e,this.bG)?new AD(this.bD,this.ct,this.bE,this.cu,this.bF,this.cv,this.bG,t):Ig().il.fi(this.bD,this.ct).fi(this.bE,this.cu).fi(this.bF,this.cv).fi(this.bG,this.cw).fi(e,t)}),j.f9=(function(e){return!!e.f(new Gy(this.bD,this.ct))&&!!e.f(new Gy(this.bE,this.cu))&&!!e.f(new Gy(this.bF,this.cv))&&!!e.f(new Gy(this.bG,this.cw))}),j.qZ=(function(e){return e.eC(this.bD,this.ct).eC(this.bE,this.cu).eC(this.bF,this.cv).eC(this.bG,this.cw)}),j.z=(function(){var e=0,t=0,n=1,r=G().cH(this.bD,this.ct);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.bE,this.cu),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.bF,this.cv),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().cH(this.bG,this.cw),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=G().e7,r=G().h(r,e),r=G().h(r,t),r=G().dp(r,n),G().H(r,4)}),j.ek=(function(e,t){return this.eI(e,t)}),new P().i(AD,`scala.collection.immutable.Map$Map4`,{c5:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,k:1,a:1});function MD(){}j=MD.prototype=new BE,j.constructor=MD;function ND(){}ND.prototype=j,j.bd=(function(){return this});function PD(e){if(!e.im){if(e.gG)throw W_(new G_,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.gG=!0;try{var t=e.io.ac()}finally{e.gG=!1}e.bV=!0,e.io=null,e.ip=t,e.im=!0}return e.ip}function FD(e,t){return Cv(),new LD(new Qg((()=>e.e()?Hg():(Cv(),new Lg(t.f(e.I().A()),FD(e.I().aR(),t))))))}function ID(e,t,n,r,i){if(t.o=``+t.o+n,!e.bV)t.o+=`<not computed>`;else if(!e.e()){var a=e.I().A();t.o=``+t.o+a;var o=null;o=e;var s=e.I().aR(),c=null;if(c=s,o!==c&&(!c.bV||o.I()!==c.I())&&(o=c,c.bV&&!c.e()))for(c=c.I().aR();o!==c&&c.bV&&!c.e()&&o.I()!==c.I();){t.o=``+t.o+r;var l=o.I().A();t.o=``+t.o+l,o=o.I().aR(),c=c.I().aR(),c.bV&&!c.e()&&(c=c.I().aR())}if(c.bV&&!c.e()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.I()===p.I()))u=u.I().aR(),c=c.I().aR(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.I()===h.I())&&d>0){t.o=``+t.o+r;var g=o.I().A();t.o=``+t.o+g,o=o.I().aR()}for(;;){var _=o,v=c;if(_===v||_.I()===v.I())break;t.o=``+t.o+r;var y=o.I().A();t.o=``+t.o+y,o=o.I().aR()}t.o=``+t.o+r,t.o+=`<cycle>`}else{for(;o!==c;){t.o=``+t.o+r;var ee=o.I().A();t.o=``+t.o+ee,o=o.I().aR()}o.bV||(t.o=``+t.o+r,t.o+=`<not computed>`)}}return t.o=``+t.o+i,t}function LD(e){this.ip=null,this.io=null,this.bV=!1,this.gG=!1,this.im=!1,this.io=e,this.bV=!1,this.gG=!1}j=LD.prototype=new uD,j.constructor=LD;function RD(){}RD.prototype=j,j.by=(function(){return`LinearSeq`}),j.u=(function(){return pb(this)}),j.bo=(function(e){return mb(this,e)}),j.jc=(function(e){return hb(this,e)}),j.y=(function(e){return gb(this,e)}),j.ff=(function(e){return _b(this,e)}),j.I=(function(){return this.im?this.ip:PD(this)}),j.e=(function(){return this.I()===Hg()}),j.E=(function(){return this.bV&&this.I()===Hg()?0:-1}),j.A=(function(){return this.I().A()}),j.p6=(function(){var e=this,t=this;for(e.e()||(e=e.I().aR());t!==e;){if(e.e()||(e=e.I().aR(),e.e())||(e=e.I().aR(),e===t))return this;t=t.I().aR()}return this}),j.m=(function(){return this.bV&&this.I()===Hg()?Y().N:new Zb(this)}),j.bJ=(function(e){for(var t=this;;){if(!t.e()){e.f(t.I().A()),t=t.I().aR();continue}break}}),j.ce=(function(){return`LazyList`}),j.sj=(function(e){return this.bV&&this.I()===Hg()?Cv().gH:(Cv(),new LD(new Qg((()=>this.e()?Hg():(Cv(),new Lg(e.f(this.I().A()),FD(this.I().aR(),e)))))))}),j.rk=(function(e){return e<=0?this:this.bV&&this.I()===Hg()?Cv().gH:Cv().sY(this,e)}),j.e8=(function(e,t,n,r){return this.p6(),ID(this,e.b6,t,n,r),e}),j.F=(function(){return ID(this,q_(new Y_,`LazyList`),`(`,`, `,`)`).o}),j.f=(function(e){return gb(this,e|0)}),j.cC=(function(e){return hb(this,e|0)}),j.oV=(function(e){return this.rk(e)}),j.cD=(function(e){return this.sj(e)}),j.w=(function(){return this.I().aR()}),j.bw=(function(){return Cv()}),new P().i(LD,`scala.collection.immutable.LazyList`,{c0:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,a:1});function zD(e){this.gN=null,this.gN=e}j=zD.prototype=new M,j.constructor=zD;function BD(){}BD.prototype=j,j.cQ=(function(e){return eT(this,e)}),j.cD=(function(e){return hv(this,e)}),j.gY=(function(e){return hD(this,e)}),j.ff=(function(e){return gD(this,e)}),j.gW=(function(){return ud().nP}),j.m=(function(){return cC(new lC,new sD(this))}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.r=(function(e){return DE(this,e)}),j.z=(function(){return G().pJ(this)}),j.F=(function(){return Yy(this)}),j.e=(function(){return pv(this)}),j.di=(function(e,t){return cm(this,e,t)}),j.gd=(function(){return mS().b9()}),j.bJ=(function(e){Uu(this,e)}),j.c0=(function(e,t,n){return Ku(this,e,t,n)}),j.e8=(function(e,t,n,r){return Ju(this,e,t,n,r)}),j.eg=(function(){return mS()}),j.u=(function(){return this.gN.length|0}),j.y=(function(e){return this.gN[e]}),j.ce=(function(){return`WrappedVarArgs`}),j.g5=(function(e){return mS().j3(e)}),j.cC=(function(e){return fv(this,e|0)}),j.f=(function(e){return this.y(e|0)}),j.bw=(function(){return mS()}),new P().i(zD,`scala.scalajs.runtime.WrappedVarArgs`,{cq:1,y:1,v:1,t:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,w:1,q:1,r:1,C:1,z:1,s:1,k:1,a:1});function VD(e){this.br=null,this.br=e}j=VD.prototype=new mD,j.constructor=VD;function HD(){}HD.prototype=j,j.pk=(function(){return Ig()}),j.E=(function(){return this.br.aZ}),j.aX=(function(){return this.br.aZ}),j.e=(function(){return this.br.aZ===0}),j.m=(function(){return this.e()?Y().N:new FC(this.br)}),j.cf=(function(e){var t=W().V(e),n=Hu().cB(t);return this.br.iS(e,t,n,0)}),j.f=(function(e){var t=W().V(e),n=Hu().cB(t);return this.br.iL(e,t,n,0)}),j.dl=(function(e,t){var n=W().V(e),r=Hu().cB(n);return this.br.j5(e,n,r,0,t)}),j.fi=(function(e,t){var n=W().V(e),r=this.br.pT(e,t,n,Hu().cB(n),0,!0);return r===this.br?this:new VD(r)}),j.eE=(function(e){this.br.eE(e)}),j.r=(function(e){if(e instanceof VD){if(this===e)return!0;var t=this.br,n=e.br;return t===null?n===null:t.r(n)}else return VE(this,e)}),j.z=(function(){if(this.e())return G().iF;var e=new NC(this.br);return G().jD(e,G().e7)}),j.ce=(function(){return`HashMap`}),j.ek=(function(e,t){return this.fi(e,t)}),new P().i(VD,`scala.collection.immutable.HashMap`,{bZ:1,ao:1,ak:1,i:1,f:1,b:1,h:1,c:1,g:1,a8:1,am:1,j:1,e:1,al:1,d:1,a9:1,t:1,ap:1,gE:1,fX:1,k:1,V:1,a:1});function UD(){}j=UD.prototype=new yD,j.constructor=UD;function WD(){}WD.prototype=j,j.bc=(function(e){return dm(this,e)});function GD(e,t,n){var r=n&(-1+e.b4.a.length|0),i=e.b4.a[r];if(i===null)e.b4.a[r]=new Od(t,n,null);else{for(var a=null,o=i;o!==null&&o.dc<=n;){if(o.dc===n&&H().t(t,o.f3))return!1;a=o,o=o.b5}a===null?e.b4.a[r]=new Od(t,n,i):a.b5=new Od(t,n,a.b5)}return e.e4=1+e.e4|0,!0}function KD(e,t){var n=e.b4.a.length;if(e.iB=JD(e,t),e.e4===0)e.b4=new(Ad.r()).C(t);else{e.b4=R().a2(e.b4,t);for(var r=new Od(null,0,null),i=new Od(null,0,null);n<t;){for(var a=0;a<n;){var o=e.b4.a[a];if(o!==null){r.b5=null,i.b5=null;for(var s=r,c=i,l=o;l!==null;){var u=l.b5;(l.dc&n)===0?(s.b5=l,s=l):(c.b5=l,c=l),l=u}s.b5=null,o!==r.b5&&(e.b4.a[a]=r.b5),i.b5!==null&&(e.b4.a[a+n|0]=i.b5,c.b5=null)}a=1+a|0}n<<=1}}}function qD(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function JD(e,t){return Pa(t*e.iA)}function YD(e,t,n){return e.iA=n,e.b4=new(Ad.r()).C(qD(e,t)),e.iB=JD(e,e.b4.a.length),e.e4=0,e}function XD(e){return YD(e,16,.75),e}function ZD(){this.iA=0,this.b4=null,this.iB=0,this.e4=0}j=ZD.prototype=new ND,j.constructor=ZD;function QD(){}QD.prototype=j,j.aX=(function(){return this.e4}),j.hb=(function(e){return e^(e>>>16|0)}),j.cf=(function(e){var t=this.hb(W().V(e)),n=this.b4.a[t&(-1+this.b4.a.length|0)];return(n===null?null:n.rF(e,t))!==null}),j.be=(function(e){var t=qD(this,Pa((1+e|0)/this.iA));t>this.b4.a.length&&KD(this,t)}),j.gT=(function(e){return(1+this.e4|0)>=this.iB&&KD(this,this.b4.a.length<<1),GD(this,e,this.hb(W().V(e)))}),j.op=(function(e){if(qg(this,e,0),e instanceof ZD){for(var t=new QC(e);t.n();){var n=t.j();GD(this,n.f3,n.dc)}return this}else return dm(this,e)}),j.m=(function(){return new XC(this)}),j.bw=(function(){return Zg()}),j.E=(function(){return this.e4}),j.e=(function(){return this.e4===0}),j.ce=(function(){return`HashSet`}),j.z=(function(){var e=new XC(this),t=e.n()?new ew(this):e;return G().jD(t,G().oj)}),j.b7=(function(e){return this.gT(e),this}),j.bc=(function(e){return this.op(e)}),new P().i(ZD,`scala.collection.mutable.HashSet`,{ci:1,gS:1,fv:1,i:1,f:1,b:1,h:1,c:1,g:1,aO:1,fV:1,e:1,d:1,hg:1,J:1,hh:1,H:1,B:1,M:1,I:1,G:1,aw:1,k:1,a:1});function $D(){}j=$D.prototype=new uD,j.constructor=$D;function eO(){}eO.prototype=j,j.g6=(function(e){return CC().j0(e,this.an())}),j.gd=(function(){return CC().h6(this.an())}),j.cQ=(function(e){return eT(this,e)}),j.gY=(function(e){return hD(this,e)}),j.ff=(function(e){return gD(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.eg=(function(){return CC().ij}),j.si=(function(e){for(var t=new N(this.u()),n=0;n<t.a.length;)t.a[n]=e.f(this.y(n)),n=1+n|0;return CC().jE(t)}),j.ce=(function(){return`ArraySeq`}),j.c0=(function(e,t,n){var r=this.u(),i=du().ch(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Yp().g1(this.cT(),0,e,t,c),c}),j.gW=(function(){return 2147483647}),j.g5=(function(e){return CC().j0(e,this.an())}),j.cD=(function(e){return this.si(e)}),j.bw=(function(){return CC().ij});function tO(e,t){return e.g=t,e}function nO(){this.g=null}j=nO.prototype=new uD,j.constructor=nO;function rO(){}rO.prototype=j,j.cQ=(function(e){return eT(this,e)}),j.gY=(function(e){return hD(this,e)}),j.ff=(function(e){return gD(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.eg=(function(){return vx()}),j.u=(function(){return this instanceof $O?this.l:this.g.a.length}),j.m=(function(){return dk()===this?vx().nX:new VC(this,this.u(),this.cV())}),j.ce=(function(){return`Vector`}),j.c0=(function(e,t,n){return this.m().c0(e,t,n)}),j.gW=(function(){return vx().nW}),j.aP=(function(e){return ad().g9(e,-1+this.u()|0)}),j.bJ=(function(e){for(var t=this.cV(),n=0;n<t;){var r=V(),i=n,a=t/2|0,o=i-a|0;r.iY(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cU(n),e),n=1+n|0}}),j.bw=(function(){return vx()});function iO(){}j=iO.prototype=new yD,j.constructor=iO;function aO(){}aO.prototype=j,j.cQ=(function(e){return gC(this,e)}),j.by=(function(){return`IndexedSeq`}),j.bo=(function(e){var t=this.u();return t===e?0:t<e?-1:1}),j.E=(function(){return this.u()}),j.eg=(function(){return YC().iz}),j.pc=(function(e){var t=this.an(),n=null,r=t.aW(),i=r===oo.l();n=[],e.E();for(var a=e.m();a.n();){var o=a.j(),s=i?Ga(o):o===null?r.W.z:o;n.push(s)}var c=YC(),l=r===io.l()?ou.l():r===Rd.l()||r===a_.l()?F.l():r;return c.jh(l.W.r().w(n))}),j.gd=(function(){return YC().h6(this.an())}),j.ce=(function(){return`ArraySeq`}),j.c0=(function(e,t,n){var r=this.u(),i=du().ch(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Yp().g1(this.cc(),0,e,t,c),c}),j.r=(function(e){return e instanceof iO&&du().ch(this.cc())!==du().ch(e.cc())?!1:DE(this,e)}),j.g5=(function(e){return this.pc(e)}),j.g6=(function(e){return this.pc(e)}),j.bw=(function(){return YC().iz});function oO(e){this.dD=null,this.dD=e}j=oO.prototype=new eO,j.constructor=oO;function sO(){}sO.prototype=j,j.u=(function(){return this.dD.a.length}),j.z=(function(){var e=G();return e.oI(this.dD,e.ar)}),j.r=(function(e){return e instanceof oO?R().p3(this.dD,e.dD):DE(this,e)}),j.m=(function(){return new Ow(this.dD)}),j.fZ=(function(e){return this.dD.a[e]}),j.f=(function(e){return this.fZ(e|0)}),j.y=(function(e){return this.fZ(e)}),j.an=(function(){return PT()}),j.cT=(function(){return this.dD}),new P().i(oO,`scala.collection.immutable.ArraySeq$ofBoolean`,{bM:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function cO(e){this.dE=null,this.dE=e}j=cO.prototype=new eO,j.constructor=cO;function lO(){}lO.prototype=j,j.u=(function(){return this.dE.a.length}),j.fR=(function(e){return this.dE.a[e]}),j.z=(function(){var e=G();return e.oA(this.dE,e.ar)}),j.r=(function(e){return e instanceof cO?R().oX(this.dE,e.dE):DE(this,e)}),j.m=(function(){return new fw(this.dE)}),j.f=(function(e){return this.fR(e|0)}),j.y=(function(e){return this.fR(e)}),j.an=(function(){return RT()}),j.cT=(function(){return this.dE}),new P().i(cO,`scala.collection.immutable.ArraySeq$ofByte`,{bN:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function uO(e){this.d2=null,this.d2=e}j=uO.prototype=new eO,j.constructor=uO;function dO(){}dO.prototype=j,j.u=(function(){return this.d2.a.length}),j.fS=(function(e){return this.d2.a[e]}),j.z=(function(){var e=G();return e.oB(this.d2,e.ar)}),j.r=(function(e){return e instanceof uO?R().oY(this.d2,e.d2):DE(this,e)}),j.m=(function(){return new mw(this.d2)}),j.e8=(function(e,t,n,r){return new IO(this.d2).e8(e,t,n,r)}),j.f=(function(e){return Wa(this.fS(e|0))}),j.y=(function(e){return Wa(this.fS(e))}),j.an=(function(){return HT()}),j.cT=(function(){return this.d2}),new P().i(uO,`scala.collection.immutable.ArraySeq$ofChar`,{bO:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function fO(e){this.dF=null,this.dF=e}j=fO.prototype=new eO,j.constructor=fO;function pO(){}pO.prototype=j,j.u=(function(){return this.dF.a.length}),j.z=(function(){var e=G();return e.oC(this.dF,e.ar)}),j.r=(function(e){return e instanceof fO?R().oZ(this.dF,e.dF):DE(this,e)}),j.m=(function(){return new gw(this.dF)}),j.fU=(function(e){return this.dF.a[e]}),j.f=(function(e){return this.fU(e|0)}),j.y=(function(e){return this.fU(e)}),j.an=(function(){return KT()}),j.cT=(function(){return this.dF}),new P().i(fO,`scala.collection.immutable.ArraySeq$ofDouble`,{bP:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function mO(e){this.dG=null,this.dG=e}j=mO.prototype=new eO,j.constructor=mO;function hO(){}hO.prototype=j,j.u=(function(){return this.dG.a.length}),j.z=(function(){var e=G();return e.oD(this.dG,e.ar)}),j.r=(function(e){return e instanceof mO?R().p0(this.dG,e.dG):DE(this,e)}),j.m=(function(){return new vw(this.dG)}),j.fV=(function(e){return this.dG.a[e]}),j.f=(function(e){return this.fV(e|0)}),j.y=(function(e){return this.fV(e)}),j.an=(function(){return XT()}),j.cT=(function(){return this.dG}),new P().i(mO,`scala.collection.immutable.ArraySeq$ofFloat`,{bQ:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function gO(e){this.dH=null,this.dH=e}j=gO.prototype=new eO,j.constructor=gO;function _O(){}_O.prototype=j,j.u=(function(){return this.dH.a.length}),j.z=(function(){var e=G();return e.oE(this.dH,e.ar)}),j.r=(function(e){return e instanceof gO?R().iV(this.dH,e.dH):DE(this,e)}),j.m=(function(){return new bw(this.dH)}),j.fW=(function(e){return this.dH.a[e]}),j.f=(function(e){return this.fW(e|0)}),j.y=(function(e){return this.fW(e)}),j.an=(function(){return eE()}),j.cT=(function(){return this.dH}),new P().i(gO,`scala.collection.immutable.ArraySeq$ofInt`,{bR:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function vO(e){this.dI=null,this.dI=e}j=vO.prototype=new eO,j.constructor=vO;function yO(){}yO.prototype=j,j.u=(function(){return this.dI.a.length}),j.z=(function(){var e=G();return e.oF(this.dI,e.ar)}),j.r=(function(e){return e instanceof vO?R().p1(this.dI,e.dI):DE(this,e)}),j.m=(function(){return new Sw(this.dI)}),j.fX=(function(e){return this.dI.a[e]}),j.f=(function(e){return this.fX(e|0)}),j.y=(function(e){return this.fX(e)}),j.an=(function(){return iE()}),j.cT=(function(){return this.dI}),new P().i(vO,`scala.collection.immutable.ArraySeq$ofLong`,{bS:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function bO(e){this.cK=null,this.cK=e}j=bO.prototype=new eO,j.constructor=bO;function xO(){}xO.prototype=j,j.an=(function(){return hm().ow(Da(this.cK).W.Q())}),j.u=(function(){return this.cK.a.length}),j.y=(function(e){return this.cK.a[e]}),j.z=(function(){var e=G();return e.oz(this.cK,e.ar)}),j.r=(function(e){return e instanceof bO?Yp().p4(this.cK,e.cK):DE(this,e)}),j.m=(function(){return iC(new aC,this.cK)}),j.f=(function(e){return this.y(e|0)}),j.cT=(function(){return this.cK}),new P().i(bO,`scala.collection.immutable.ArraySeq$ofRef`,{bT:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function SO(e){this.dJ=null,this.dJ=e}j=SO.prototype=new eO,j.constructor=SO;function CO(){}CO.prototype=j,j.u=(function(){return this.dJ.a.length}),j.fT=(function(e){return this.dJ.a[e]}),j.z=(function(){var e=G();return e.oG(this.dJ,e.ar)}),j.r=(function(e){return e instanceof SO?R().p2(this.dJ,e.dJ):DE(this,e)}),j.m=(function(){return new ww(this.dJ)}),j.f=(function(e){return this.fT(e|0)}),j.y=(function(e){return this.fT(e)}),j.an=(function(){return bE()}),j.cT=(function(){return this.dJ}),new P().i(SO,`scala.collection.immutable.ArraySeq$ofShort`,{bU:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function wO(e){this.et=null,this.et=e}j=wO.prototype=new eO,j.constructor=wO;function TO(){}TO.prototype=j,j.u=(function(){return this.et.a.length}),j.z=(function(){var e=G();return e.oH(this.et,e.ar)}),j.r=(function(e){return e instanceof wO?this.et.a.length===e.et.a.length:DE(this,e)}),j.m=(function(){return new Ew(this.et)}),j.fY=(function(e){}),j.f=(function(e){this.fY(e|0)}),j.y=(function(e){this.fY(e)}),j.an=(function(){return wE()}),j.cT=(function(){return this.et}),new P().i(wO,`scala.collection.immutable.ArraySeq$ofUnit`,{bV:1,W:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,a1:1,a:1});function EO(e,t,n,r){for(;;)if(t===r)return n.e()?0:1;else if(n.e())return-1;else{var i=1+t|0,a=n.w();t=i,n=a}}function DO(e,t,n){for(;;)if(t===n)return!0;else{var r=t.e(),i=n.e();if(!(r||i)&&H().t(t.A(),n.A())){var a=t.w(),o=n.w();t=a,n=o}else return r&&i}}function OO(){}j=OO.prototype=new uD,j.constructor=OO;function kO(){}kO.prototype=j,j.cQ=(function(e){return eT(this,e)}),j.m=(function(){return new bb(this)}),j.by=(function(){return`LinearSeq`}),j.jc=(function(e){return hb(this,e)}),j.y=(function(e){return gb(this,e)}),j.ff=(function(e){return _b(this,e)}),j.eg=(function(){return nx()}),j.ok=(function(e){if(this.e())return e;if(e.e())return this;for(var t=new rk(e.A(),this),n=t,r=e.w();!r.e();){var i=new rk(r.A(),this);n.aC=i,n=i,r=r.w()}return t}),j.e=(function(){return this===$()}),j.ju=(function(e){if(e instanceof OO)return this.ok(e);if(e.E()===0)return this;if(e instanceof Ok&&this.e())return e.pP();var t=e.m();if(t.n()){for(var n=new rk(t.j(),this),r=n;t.n();){var i=new rk(t.j(),this);r.aC=i,r=i}return n}else return this}),j.ou=(function(e){return e instanceof OO?e.ok(this):_C(this,e)}),j.sk=(function(e){if(this===$())return $();for(var t=new rk(e.f(this.A()),$()),n=t,r=this.w();r!==$();){var i=new rk(e.f(r.A()),$());n.aC=i,n=i,r=r.w()}return t}),j.bJ=(function(e){for(var t=this;!t.e();)e.f(t.A()),t=t.w()}),j.u=(function(){for(var e=this,t=0;!e.e();)t=1+t|0,e=e.w();return t}),j.bo=(function(e){return e<0?1:EO(this,0,this,e)}),j.cf=(function(e){for(var t=this;!t.e();){if(H().t(t.A(),e))return!0;t=t.w()}return!1}),j.ce=(function(){return`List`}),j.r=(function(e){return e instanceof OO?DO(this,this,e):DE(this,e)}),j.f=(function(e){return gb(this,e|0)}),j.cC=(function(e){return hb(this,e|0)}),j.oV=(function(e){return $w(this,e,this)}),j.cD=(function(e){return this.sk(e)}),j.bw=(function(){return nx()});function AO(){this.g=null}j=AO.prototype=new rO,j.constructor=AO;function jO(){}jO.prototype=j;function MO(e){this.dW=null,this.dW=e}j=MO.prototype=new aO,j.constructor=MO;function NO(){}NO.prototype=j,j.u=(function(){return this.dW.a.length}),j.z=(function(){var e=G();return e.oI(this.dW,e.ar)}),j.r=(function(e){return e instanceof MO?R().p3(this.dW,e.dW):iO.prototype.r.call(this,e)}),j.m=(function(){return new Ow(this.dW)}),j.fZ=(function(e){return this.dW.a[e]}),j.f=(function(e){return this.fZ(e|0)}),j.y=(function(e){return this.fZ(e)}),j.an=(function(){return PT()}),j.cc=(function(){return this.dW}),new P().i(MO,`scala.collection.mutable.ArraySeq$ofBoolean`,{c8:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function PO(e){this.dX=null,this.dX=e}j=PO.prototype=new aO,j.constructor=PO;function FO(){}FO.prototype=j,j.u=(function(){return this.dX.a.length}),j.fR=(function(e){return this.dX.a[e]}),j.z=(function(){var e=G();return e.oA(this.dX,e.ar)}),j.r=(function(e){return e instanceof PO?R().oX(this.dX,e.dX):iO.prototype.r.call(this,e)}),j.m=(function(){return new fw(this.dX)}),j.f=(function(e){return this.fR(e|0)}),j.y=(function(e){return this.fR(e)}),j.an=(function(){return RT()}),j.cc=(function(){return this.dX}),new P().i(PO,`scala.collection.mutable.ArraySeq$ofByte`,{c9:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function IO(e){this.bW=null,this.bW=e}j=IO.prototype=new aO,j.constructor=IO;function LO(){}LO.prototype=j,j.u=(function(){return this.bW.a.length}),j.fS=(function(e){return this.bW.a[e]}),j.z=(function(){var e=G();return e.oB(this.bW,e.ar)}),j.r=(function(e){return e instanceof IO?R().oY(this.bW,e.bW):iO.prototype.r.call(this,e)}),j.m=(function(){return new mw(this.bW)}),j.e8=(function(e,t,n,r){var i=e.b6;t.length!==0&&(i.o=``+i.o+t);var a=this.bW.a.length;if(a!==0)if(n===``)i.os(this.bW);else{i.u();var o=this.bW.a[0],s=``+Fa(o);i.o+=s;for(var c=1;c<a;){i.o=``+i.o+n;var l=this.bW.a[c],u=``+Fa(l);i.o+=u,c=1+c|0}}return r.length!==0&&(i.o=``+i.o+r),e}),j.f=(function(e){return Wa(this.fS(e|0))}),j.y=(function(e){return Wa(this.fS(e))}),j.an=(function(){return HT()}),j.cc=(function(){return this.bW}),new P().i(IO,`scala.collection.mutable.ArraySeq$ofChar`,{ca:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function RO(e){this.dY=null,this.dY=e}j=RO.prototype=new aO,j.constructor=RO;function zO(){}zO.prototype=j,j.u=(function(){return this.dY.a.length}),j.z=(function(){var e=G();return e.oC(this.dY,e.ar)}),j.r=(function(e){return e instanceof RO?R().oZ(this.dY,e.dY):iO.prototype.r.call(this,e)}),j.m=(function(){return new gw(this.dY)}),j.fU=(function(e){return this.dY.a[e]}),j.f=(function(e){return this.fU(e|0)}),j.y=(function(e){return this.fU(e)}),j.an=(function(){return KT()}),j.cc=(function(){return this.dY}),new P().i(RO,`scala.collection.mutable.ArraySeq$ofDouble`,{cb:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function BO(e){this.dZ=null,this.dZ=e}j=BO.prototype=new aO,j.constructor=BO;function VO(){}VO.prototype=j,j.u=(function(){return this.dZ.a.length}),j.z=(function(){var e=G();return e.oD(this.dZ,e.ar)}),j.r=(function(e){return e instanceof BO?R().p0(this.dZ,e.dZ):iO.prototype.r.call(this,e)}),j.m=(function(){return new vw(this.dZ)}),j.fV=(function(e){return this.dZ.a[e]}),j.f=(function(e){return this.fV(e|0)}),j.y=(function(e){return this.fV(e)}),j.an=(function(){return XT()}),j.cc=(function(){return this.dZ}),new P().i(BO,`scala.collection.mutable.ArraySeq$ofFloat`,{cc:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function HO(e){this.e0=null,this.e0=e}j=HO.prototype=new aO,j.constructor=HO;function UO(){}UO.prototype=j,j.u=(function(){return this.e0.a.length}),j.z=(function(){var e=G();return e.oE(this.e0,e.ar)}),j.r=(function(e){return e instanceof HO?R().iV(this.e0,e.e0):iO.prototype.r.call(this,e)}),j.m=(function(){return new bw(this.e0)}),j.fW=(function(e){return this.e0.a[e]}),j.f=(function(e){return this.fW(e|0)}),j.y=(function(e){return this.fW(e)}),j.an=(function(){return eE()}),j.cc=(function(){return this.e0}),new P().i(HO,`scala.collection.mutable.ArraySeq$ofInt`,{cd:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function WO(e){this.e1=null,this.e1=e}j=WO.prototype=new aO,j.constructor=WO;function GO(){}GO.prototype=j,j.u=(function(){return this.e1.a.length}),j.z=(function(){var e=G();return e.oF(this.e1,e.ar)}),j.r=(function(e){return e instanceof WO?R().p1(this.e1,e.e1):iO.prototype.r.call(this,e)}),j.m=(function(){return new Sw(this.e1)}),j.fX=(function(e){return this.e1.a[e]}),j.f=(function(e){return this.fX(e|0)}),j.y=(function(e){return this.fX(e)}),j.an=(function(){return iE()}),j.cc=(function(){return this.e1}),new P().i(WO,`scala.collection.mutable.ArraySeq$ofLong`,{ce:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function KO(e){this.da=null,this.da=e}j=KO.prototype=new aO,j.constructor=KO;function qO(){}qO.prototype=j,j.an=(function(){return hm().ow(Da(this.da).W.Q())}),j.u=(function(){return this.da.a.length}),j.y=(function(e){return this.da.a[e]}),j.z=(function(){var e=G();return e.oz(this.da,e.ar)}),j.r=(function(e){return e instanceof KO?Yp().p4(this.da,e.da):iO.prototype.r.call(this,e)}),j.m=(function(){return iC(new aC,this.da)}),j.f=(function(e){return this.y(e|0)}),j.cc=(function(){return this.da}),new P().i(KO,`scala.collection.mutable.ArraySeq$ofRef`,{cf:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function JO(e){this.e2=null,this.e2=e}j=JO.prototype=new aO,j.constructor=JO;function YO(){}YO.prototype=j,j.u=(function(){return this.e2.a.length}),j.fT=(function(e){return this.e2.a[e]}),j.z=(function(){var e=G();return e.oG(this.e2,e.ar)}),j.r=(function(e){return e instanceof JO?R().p2(this.e2,e.e2):iO.prototype.r.call(this,e)}),j.m=(function(){return new ww(this.e2)}),j.f=(function(e){return this.fT(e|0)}),j.y=(function(e){return this.fT(e)}),j.an=(function(){return bE()}),j.cc=(function(){return this.e2}),new P().i(JO,`scala.collection.mutable.ArraySeq$ofShort`,{cg:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function XO(e){this.ez=null,this.ez=e}j=XO.prototype=new aO,j.constructor=XO;function ZO(){}ZO.prototype=j,j.u=(function(){return this.ez.a.length}),j.z=(function(){var e=G();return e.oH(this.ez,e.ar)}),j.r=(function(e){return e instanceof XO?this.ez.a.length===e.ez.a.length:iO.prototype.r.call(this,e)}),j.m=(function(){return new Ew(this.ez)}),j.fY=(function(e){}),j.f=(function(e){this.fY(e|0)}),j.y=(function(e){this.fY(e)}),j.an=(function(){return wE()}),j.cc=(function(){return this.ez}),new P().i(XO,`scala.collection.mutable.ArraySeq$ofUnit`,{ch:1,X:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,R:1,q:1,r:1,S:1,s:1,k:1,a:1});function QO(e,t,n,r){return e.k=n,e.l=r,tO(e,t),e}function $O(){this.g=null,this.k=null,this.l=0}j=$O.prototype=new jO,j.constructor=$O;function ek(){}ek.prototype=j;function tk(e){this.g=null,tO(this,e)}j=tk.prototype=new jO,j.constructor=tk;function nk(){}nk.prototype=j,j.y=(function(e){if(e>=0&&e<this.g.a.length)return this.g.a[e];throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.g.a.length){var n=this.g.i();return n.a[e]=t,new tk(n)}else throw this.aP(e)}),j.e9=(function(e){if(this.g.a.length<32)return new tk(V().f7(this.g,e));var t=this.g,n=V().bu,r=new N(1);return r.a[0]=e,new fk(t,32,n,r,33)}),j.cE=(function(e){return new tk(V().ck(this.g,e))}),j.cV=(function(){return 1}),j.cU=(function(e){return this.g}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.g.a.length)return this.g.a[t];throw this.aP(t)}),new P().i(tk,`scala.collection.immutable.Vector1`,{gI:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function rk(e,t){this.ig=null,this.aC=null,this.ig=e,this.aC=t}j=rk.prototype=new kO,j.constructor=rk;function ik(){}ik.prototype=j,j.A=(function(){return this.ig}),j.bM=(function(){return`::`}),j.bK=(function(){return 2}),j.bL=(function(e){switch(e){case 0:return this.ig;case 1:return this.aC;default:return W().eF(e)}}),j.cm=(function(){return new aS(this)}),j.w=(function(){return this.aC}),new P().i(rk,`scala.collection.immutable.$colon$colon`,{g4:1,aR:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,bL:1,s:1,k:1,z:1,V:1,a:1,U:1});function ak(){}j=ak.prototype=new kO,j.constructor=ak;function ok(){}ok.prototype=j,j.j9=(function(){throw new Ny(`head of empty list`)}),j.tf=(function(){throw new jy(`tail of empty list`)}),j.E=(function(){return 0}),j.m=(function(){return Y().N}),j.bM=(function(){return`Nil`}),j.bK=(function(){return 0}),j.bL=(function(e){return W().eF(e)}),j.cm=(function(){return new aS(this)}),j.w=(function(){this.tf()}),j.A=(function(){this.j9()}),new P().i(ak,`scala.collection.immutable.Nil$`,{gy:1,aR:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,aP:1,at:1,aL:1,aQ:1,bL:1,s:1,k:1,z:1,V:1,a:1,U:1});var sk;function $(){return sk||=new ak,sk}function ck(){this.g=null,this.k=null,this.l=0,QO(this,V().iu,V().iu,0)}j=ck.prototype=new ek,j.constructor=ck;function lk(){}lk.prototype=j,j.ov=(function(e){throw this.aP(e)}),j.ej=(function(e,t){throw this.aP(e)}),j.e9=(function(e){var t=new N(1);return t.a[0]=e,new tk(t)}),j.cV=(function(){return 0}),j.cU=(function(e){return null}),j.r=(function(e){return this===e||!(e instanceof nO)&&DE(this,e)}),j.aP=(function(e){return wy(new Ty,e+` is out of bounds (empty vector)`)}),j.cD=(function(e){return this}),j.f=(function(e){this.ov(e|0)}),j.y=(function(e){this.ov(e)}),new P().i(ck,`scala.collection.immutable.Vector0$`,{gH:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});var uk;function dk(){return uk||=new ck,uk}function fk(e,t,n,r,i){this.g=null,this.k=null,this.l=0,this.bI=0,this.bm=null,this.bI=t,this.bm=n,QO(this,e,r,i)}j=fk.prototype=new ek,j.constructor=fk;function pk(){}pk.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.bI|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.bm.a.length?this.bm.a[n].a[r]:this.k.a[31&t]}else return this.g.a[e]}else throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.l)if(e>=this.bI){var n=e-this.bI|0,r=n>>>5|0,i=31&n;if(r<this.bm.a.length){var a=this.bm.i(),o=a.a[r].i();return o.a[i]=t,a.a[r]=o,new fk(this.g,this.bI,a,this.k,this.l)}else{var s=this.k.i();return s.a[i]=t,new fk(this.g,this.bI,this.bm,s,this.l)}}else{var c=this.g.i();return c.a[e]=t,new fk(c,this.bI,this.bm,this.k,this.l)}else throw this.aP(e)}),j.e9=(function(e){if(this.k.a.length<32){var t=V().f7(this.k,e),n=1+this.l|0;return new fk(this.g,this.bI,this.bm,t,n)}else if(this.bm.a.length<30){var r=V().K(this.bm,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new fk(this.g,this.bI,r,i,a)}else{var o=this.g,s=this.bI,c=this.bm,l=this.bI,u=V().cO,d=this.k,f=new(F.r().r()).C(1);f.a[0]=d;var p=new N(1);return p.a[0]=e,new mk(o,s,c,960+l|0,u,f,p,1+this.l|0)}}),j.cE=(function(e){var t=V().ck(this.g,e),n=V().aa(2,this.bm,e),r=V().ck(this.k,e);return new fk(t,this.bI,n,r,this.l)}),j.cV=(function(){return 3}),j.cU=(function(e){switch(e){case 0:return this.g;case 1:return this.bm;case 2:return this.k;default:throw new By(e)}}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.bI|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.bm.a.length?this.bm.a[r].a[i]:this.k.a[31&n]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(fk,`scala.collection.immutable.Vector2`,{gJ:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function mk(e,t,n,r,i,a,o,s){this.g=null,this.k=null,this.l=0,this.bg=0,this.bt=null,this.bh=0,this.b2=null,this.b3=null,this.bg=t,this.bt=n,this.bh=r,this.b2=i,this.b3=a,QO(this,e,o,s)}j=mk.prototype=new ek,j.constructor=mk;function hk(){}hk.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.bh|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.b2.a.length?this.b2.a[n].a[r].a[i]:r<this.b3.a.length?this.b3.a[r].a[i]:this.k.a[i]}else if(e>=this.bg){var a=e-this.bg|0;return this.bt.a[a>>>5|0].a[31&a]}else return this.g.a[e]}else throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.l)if(e>=this.bh){var n=e-this.bh|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.b2.a.length){var o=this.b2.i(),s=o.a[r].i(),c=s.a[i].i();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new mk(this.g,this.bg,this.bt,this.bh,o,this.b3,this.k,this.l)}else if(i<this.b3.a.length){var l=this.b3.i(),u=l.a[i].i();return u.a[a]=t,l.a[i]=u,new mk(this.g,this.bg,this.bt,this.bh,this.b2,l,this.k,this.l)}else{var d=this.k.i();return d.a[a]=t,new mk(this.g,this.bg,this.bt,this.bh,this.b2,this.b3,d,this.l)}}else if(e>=this.bg){var f=e-this.bg|0,p=this.bt,m=f>>>5|0,h=31&f,g=p.i(),_=g.a[m].i();return _.a[h]=t,g.a[m]=_,new mk(this.g,this.bg,g,this.bh,this.b2,this.b3,this.k,this.l)}else{var v=this.g.i();return v.a[e]=t,new mk(v,this.bg,this.bt,this.bh,this.b2,this.b3,this.k,this.l)}else throw this.aP(e)}),j.e9=(function(e){if(this.k.a.length<32){var t=V().f7(this.k,e),n=1+this.l|0;return new mk(this.g,this.bg,this.bt,this.bh,this.b2,this.b3,t,n)}else if(this.b3.a.length<31){var r=V().K(this.b3,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new mk(this.g,this.bg,this.bt,this.bh,this.b2,r,i,a)}else if(this.b2.a.length<30){var o=V().K(this.b2,V().K(this.b3,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new mk(this.g,this.bg,this.bt,this.bh,o,s,c,l)}else{var u=this.g,d=this.bg,f=this.bt,p=this.bh,m=this.b2,h=this.bh,g=V().f1,_=V().K(this.b3,this.k),v=new(F.r().r().r()).C(1);v.a[0]=_;var y=V().bu,ee=new N(1);return ee.a[0]=e,new gk(u,d,f,p,m,30720+h|0,g,v,y,ee,1+this.l|0)}}),j.cE=(function(e){var t=V().ck(this.g,e),n=V().aa(2,this.bt,e),r=V().aa(3,this.b2,e),i=V().aa(2,this.b3,e),a=V().ck(this.k,e);return new mk(t,this.bg,n,this.bh,r,i,a,this.l)}),j.cV=(function(){return 5}),j.cU=(function(e){switch(e){case 0:return this.g;case 1:return this.bt;case 2:return this.b2;case 3:return this.b3;case 4:return this.k;default:throw new By(e)}}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.bh|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.b2.a.length?this.b2.a[r].a[i].a[a]:i<this.b3.a.length?this.b3.a[i].a[a]:this.k.a[a]}else if(t>=this.bg){var o=t-this.bg|0;return this.bt.a[o>>>5|0].a[31&o]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(mk,`scala.collection.immutable.Vector3`,{gK:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function gk(e,t,n,r,i,a,o,s,c,l,u){this.g=null,this.k=null,this.l=0,this.aT=0,this.ba=null,this.aU=0,this.bb=null,this.aV=0,this.aE=null,this.aG=null,this.aF=null,this.aT=t,this.ba=n,this.aU=r,this.bb=i,this.aV=a,this.aE=o,this.aG=s,this.aF=c,QO(this,e,l,u)}j=gk.prototype=new ek,j.constructor=gk;function _k(){}_k.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aV|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.aE.a.length?this.aE.a[n].a[r].a[i].a[a]:r<this.aG.a.length?this.aG.a[r].a[i].a[a]:i<this.aF.a.length?this.aF.a[i].a[a]:this.k.a[a]}else if(e>=this.aU){var o=e-this.aU|0;return this.bb.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aT){var s=e-this.aT|0;return this.ba.a[s>>>5|0].a[31&s]}else return this.g.a[e]}else throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aV){var n=e-this.aV|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.aE.a.length){var s=this.aE.i(),c=s.a[r].i(),l=c.a[i].i(),u=l.a[a].i();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,s,this.aG,this.aF,this.k,this.l)}else if(i<this.aG.a.length){var d=this.aG.i(),f=d.a[i].i(),p=f.a[a].i();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,d,this.aF,this.k,this.l)}else if(a<this.aF.a.length){var m=this.aF.i(),h=m.a[a].i();return h.a[o]=t,m.a[a]=h,new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,m,this.k,this.l)}else{var g=this.k.i();return g.a[o]=t,new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,g,this.l)}}else if(e>=this.aU){var _=e-this.aU|0,v=this.bb,y=_>>>10|0,ee=31&(_>>>5|0),te=31&_,ne=v.i(),b=ne.a[y].i(),re=b.a[ee].i();return re.a[te]=t,b.a[ee]=re,ne.a[y]=b,new gk(this.g,this.aT,this.ba,this.aU,ne,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else if(e>=this.aT){var ie=e-this.aT|0,ae=this.ba,oe=ie>>>5|0,se=31&ie,ce=ae.i(),x=ce.a[oe].i();return x.a[se]=t,ce.a[oe]=x,new gk(this.g,this.aT,ce,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else{var le=this.g.i();return le.a[e]=t,new gk(le,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,this.k,this.l)}else throw this.aP(e)}),j.e9=(function(e){if(this.k.a.length<32){var t=V().f7(this.k,e),n=1+this.l|0;return new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,this.aF,t,n)}else if(this.aF.a.length<31){var r=V().K(this.aF,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,this.aG,r,i,a)}else if(this.aG.a.length<31){var o=V().K(this.aG,V().K(this.aF,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,this.aE,o,s,c,l)}else if(this.aE.a.length<30){var u=V().K(this.aE,V().K(this.aG,V().K(this.aF,this.k))),d=V().cO,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new gk(this.g,this.aT,this.ba,this.aU,this.bb,this.aV,u,d,f,p,m)}else{var h=this.g,g=this.aT,_=this.ba,v=this.aU,y=this.bb,ee=this.aV,te=this.aE,ne=this.aV,b=V().iv,re=V().K(this.aG,V().K(this.aF,this.k)),ie=new(F.r().r().r().r()).C(1);ie.a[0]=re;var ae=V().cO,oe=V().bu,se=new N(1);return se.a[0]=e,new vk(h,g,_,v,y,ee,te,983040+ne|0,b,ie,ae,oe,se,1+this.l|0)}}),j.cE=(function(e){var t=V().ck(this.g,e),n=V().aa(2,this.ba,e),r=V().aa(3,this.bb,e),i=V().aa(4,this.aE,e),a=V().aa(3,this.aG,e),o=V().aa(2,this.aF,e),s=V().ck(this.k,e);return new gk(t,this.aT,n,this.aU,r,this.aV,i,a,o,s,this.l)}),j.cV=(function(){return 7}),j.cU=(function(e){switch(e){case 0:return this.g;case 1:return this.ba;case 2:return this.bb;case 3:return this.aE;case 4:return this.aG;case 5:return this.aF;case 6:return this.k;default:throw new By(e)}}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aV|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.aE.a.length?this.aE.a[r].a[i].a[a].a[o]:i<this.aG.a.length?this.aG.a[i].a[a].a[o]:a<this.aF.a.length?this.aF.a[a].a[o]:this.k.a[o]}else if(t>=this.aU){var s=t-this.aU|0;return this.bb.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aT){var c=t-this.aT|0;return this.ba.a[c>>>5|0].a[31&c]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(gk,`scala.collection.immutable.Vector4`,{gL:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function vk(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.g=null,this.k=null,this.l=0,this.at=0,this.aK=null,this.au=0,this.aL=null,this.av=0,this.aM=null,this.aw=0,this.af=null,this.ai=null,this.ah=null,this.ag=null,this.at=t,this.aK=n,this.au=r,this.aL=i,this.av=a,this.aM=o,this.aw=s,this.af=c,this.ai=l,this.ah=u,this.ag=d,QO(this,e,f,p)}j=vk.prototype=new ek,j.constructor=vk;function yk(){}yk.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aw|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.af.a.length?this.af.a[n].a[r].a[i].a[a].a[o]:r<this.ai.a.length?this.ai.a[r].a[i].a[a].a[o]:i<this.ah.a.length?this.ah.a[i].a[a].a[o]:a<this.ag.a.length?this.ag.a[a].a[o]:this.k.a[o]}else if(e>=this.av){var s=e-this.av|0;return this.aM.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.au){var c=e-this.au|0;return this.aL.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.at){var l=e-this.at|0;return this.aK.a[l>>>5|0].a[31&l]}else return this.g.a[e]}else throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aw){var n=e-this.aw|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.af.a.length){var c=this.af.i(),l=c.a[r].i(),u=l.a[i].i(),d=u.a[a].i(),f=d.a[o].i();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,c,this.ai,this.ah,this.ag,this.k,this.l)}else if(i<this.ai.a.length){var p=this.ai.i(),m=p.a[i].i(),h=m.a[a].i(),g=h.a[o].i();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,p,this.ah,this.ag,this.k,this.l)}else if(a<this.ah.a.length){var _=this.ah.i(),v=_.a[a].i(),y=v.a[o].i();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,_,this.ag,this.k,this.l)}else if(o<this.ag.a.length){var ee=this.ag.i(),te=ee.a[o].i();return te.a[s]=t,ee.a[o]=te,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,ee,this.k,this.l)}else{var ne=this.k.i();return ne.a[s]=t,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,ne,this.l)}}else if(e>=this.av){var b=e-this.av|0,re=this.aM,ie=b>>>15|0,ae=31&(b>>>10|0),oe=31&(b>>>5|0),se=31&b,ce=re.i(),x=ce.a[ie].i(),le=x.a[ae].i(),S=le.a[oe].i();return S.a[se]=t,le.a[oe]=S,x.a[ae]=le,ce.a[ie]=x,new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,ce,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else if(e>=this.au){var ue=e-this.au|0,de=this.aL,fe=ue>>>10|0,pe=31&(ue>>>5|0),me=31&ue,he=de.i(),ge=he.a[fe].i(),_e=ge.a[pe].i();return _e.a[me]=t,ge.a[pe]=_e,he.a[fe]=ge,new vk(this.g,this.at,this.aK,this.au,he,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else if(e>=this.at){var ve=e-this.at|0,ye=this.aK,be=ve>>>5|0,xe=31&ve,Se=ye.i(),Ce=Se.a[be].i();return Ce.a[xe]=t,Se.a[be]=Ce,new vk(this.g,this.at,Se,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else{var we=this.g.i();return we.a[e]=t,new vk(we,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,this.k,this.l)}else throw this.aP(e)}),j.e9=(function(e){if(this.k.a.length<32){var t=V().f7(this.k,e),n=1+this.l|0;return new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,this.ag,t,n)}else if(this.ag.a.length<31){var r=V().K(this.ag,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,this.ah,r,i,a)}else if(this.ah.a.length<31){var o=V().K(this.ah,V().K(this.ag,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,this.ai,o,s,c,l)}else if(this.ai.a.length<31){var u=V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k))),d=V().cO,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,this.af,u,d,f,p,m)}else if(this.af.a.length<30){var h=V().K(this.af,V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k)))),g=V().f1,_=V().cO,v=V().bu,y=new N(1);y.a[0]=e;var ee=1+this.l|0;return new vk(this.g,this.at,this.aK,this.au,this.aL,this.av,this.aM,this.aw,h,g,_,v,y,ee)}else{var te=this.g,ne=this.at,b=this.aK,re=this.au,ie=this.aL,ae=this.av,oe=this.aM,se=this.aw,ce=this.af,x=this.aw,le=V().nY,S=V().K(this.ai,V().K(this.ah,V().K(this.ag,this.k))),ue=new(F.r().r().r().r().r()).C(1);ue.a[0]=S;var de=V().f1,fe=V().cO,pe=V().bu,me=new N(1);return me.a[0]=e,new bk(te,ne,b,re,ie,ae,oe,se,ce,31457280+x|0,le,ue,de,fe,pe,me,1+this.l|0)}}),j.cE=(function(e){var t=V().ck(this.g,e),n=V().aa(2,this.aK,e),r=V().aa(3,this.aL,e),i=V().aa(4,this.aM,e),a=V().aa(5,this.af,e),o=V().aa(4,this.ai,e),s=V().aa(3,this.ah,e),c=V().aa(2,this.ag,e),l=V().ck(this.k,e);return new vk(t,this.at,n,this.au,r,this.av,i,this.aw,a,o,s,c,l,this.l)}),j.cV=(function(){return 9}),j.cU=(function(e){switch(e){case 0:return this.g;case 1:return this.aK;case 2:return this.aL;case 3:return this.aM;case 4:return this.af;case 5:return this.ai;case 6:return this.ah;case 7:return this.ag;case 8:return this.k;default:throw new By(e)}}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aw|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.af.a.length?this.af.a[r].a[i].a[a].a[o].a[s]:i<this.ai.a.length?this.ai.a[i].a[a].a[o].a[s]:a<this.ah.a.length?this.ah.a[a].a[o].a[s]:o<this.ag.a.length?this.ag.a[o].a[s]:this.k.a[s]}else if(t>=this.av){var c=t-this.av|0;return this.aM.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.au){var l=t-this.au|0;return this.aL.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.at){var u=t-this.at|0;return this.aK.a[u>>>5|0].a[31&u]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(vk,`scala.collection.immutable.Vector5`,{gM:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function bk(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.g=null,this.k=null,this.l=0,this.aj=0,this.ax=null,this.ak=0,this.ay=null,this.al=0,this.az=null,this.am=0,this.aA=null,this.aq=0,this.a5=null,this.a9=null,this.a8=null,this.a7=null,this.a6=null,this.aj=t,this.ax=n,this.ak=r,this.ay=i,this.al=a,this.az=o,this.am=s,this.aA=c,this.aq=l,this.a5=u,this.a9=d,this.a8=f,this.a7=p,this.a6=m,QO(this,e,h,g)}j=bk.prototype=new ek,j.constructor=bk;function xk(){}xk.prototype=j,j.y=(function(e){if(e>=0&&e<this.l){var t=e-this.aq|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.a5.a.length?this.a5.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.a9.a.length?this.a9.a[r].a[i].a[a].a[o].a[s]:i<this.a8.a.length?this.a8.a[i].a[a].a[o].a[s]:a<this.a7.a.length?this.a7.a[a].a[o].a[s]:o<this.a6.a.length?this.a6.a[o].a[s]:this.k.a[s]}else if(e>=this.am){var c=e-this.am|0;return this.aA.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.al){var l=e-this.al|0;return this.az.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.ak){var u=e-this.ak|0;return this.ay.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.aj){var d=e-this.aj|0;return this.ax.a[d>>>5|0].a[31&d]}else return this.g.a[e]}else throw this.aP(e)}),j.ej=(function(e,t){if(e>=0&&e<this.l)if(e>=this.aq){var n=e-this.aq|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.a5.a.length){var l=this.a5.i(),u=l.a[r].i(),d=u.a[i].i(),f=d.a[a].i(),p=f.a[o].i(),m=p.a[s].i();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,l,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(i<this.a9.a.length){var h=this.a9.i(),g=h.a[i].i(),_=g.a[a].i(),v=_.a[o].i(),y=v.a[s].i();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,h,this.a8,this.a7,this.a6,this.k,this.l)}else if(a<this.a8.a.length){var ee=this.a8.i(),te=ee.a[a].i(),ne=te.a[o].i(),b=ne.a[s].i();return b.a[c]=t,ne.a[s]=b,te.a[o]=ne,ee.a[a]=te,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,ee,this.a7,this.a6,this.k,this.l)}else if(o<this.a7.a.length){var re=this.a7.i(),ie=re.a[o].i(),ae=ie.a[s].i();return ae.a[c]=t,ie.a[s]=ae,re.a[o]=ie,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,re,this.a6,this.k,this.l)}else if(s<this.a6.a.length){var oe=this.a6.i(),se=oe.a[s].i();return se.a[c]=t,oe.a[s]=se,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,oe,this.k,this.l)}else{var ce=this.k.i();return ce.a[c]=t,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,ce,this.l)}}else if(e>=this.am){var x=e-this.am|0,le=this.aA,S=x>>>20|0,ue=31&(x>>>15|0),de=31&(x>>>10|0),fe=31&(x>>>5|0),pe=31&x,me=le.i(),he=me.a[S].i(),ge=he.a[ue].i(),_e=ge.a[de].i(),ve=_e.a[fe].i();return ve.a[pe]=t,_e.a[fe]=ve,ge.a[de]=_e,he.a[ue]=ge,me.a[S]=he,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,me,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.al){var ye=e-this.al|0,be=this.az,xe=ye>>>15|0,Se=31&(ye>>>10|0),Ce=31&(ye>>>5|0),we=31&ye,Te=be.i(),Ee=Te.a[xe].i(),De=Ee.a[Se].i(),Oe=De.a[Ce].i();return Oe.a[we]=t,De.a[Ce]=Oe,Ee.a[Se]=De,Te.a[xe]=Ee,new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,Te,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.ak){var C=e-this.ak|0,ke=this.ay,Ae=C>>>10|0,je=31&(C>>>5|0),Me=31&C,Ne=ke.i(),Pe=Ne.a[Ae].i(),Fe=Pe.a[je].i();return Fe.a[Me]=t,Pe.a[je]=Fe,Ne.a[Ae]=Pe,new bk(this.g,this.aj,this.ax,this.ak,Ne,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else if(e>=this.aj){var Ie=e-this.aj|0,Le=this.ax,Re=Ie>>>5|0,ze=31&Ie,Be=Le.i(),Ve=Be.a[Re].i();return Ve.a[ze]=t,Be.a[Re]=Ve,new bk(this.g,this.aj,Be,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else{var He=this.g.i();return He.a[e]=t,new bk(He,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,this.k,this.l)}else throw this.aP(e)}),j.e9=(function(e){if(this.k.a.length<32){var t=V().f7(this.k,e),n=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,this.a6,t,n)}else if(this.a6.a.length<31){var r=V().K(this.a6,this.k),i=new N(1);i.a[0]=e;var a=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,this.a7,r,i,a)}else if(this.a7.a.length<31){var o=V().K(this.a7,V().K(this.a6,this.k)),s=V().bu,c=new N(1);c.a[0]=e;var l=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,this.a8,o,s,c,l)}else if(this.a8.a.length<31){var u=V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k))),d=V().cO,f=V().bu,p=new N(1);p.a[0]=e;var m=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,this.a9,u,d,f,p,m)}else if(this.a9.a.length<31){var h=V().K(this.a9,V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k)))),g=V().f1,_=V().cO,v=V().bu,y=new N(1);y.a[0]=e;var ee=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,this.a5,h,g,_,v,y,ee)}else if(this.a5.a.length<62){var te=V().K(this.a5,V().K(this.a9,V().K(this.a8,V().K(this.a7,V().K(this.a6,this.k))))),ne=V().iv,b=V().f1,re=V().cO,ie=V().bu,ae=new N(1);ae.a[0]=e;var oe=1+this.l|0;return new bk(this.g,this.aj,this.ax,this.ak,this.ay,this.al,this.az,this.am,this.aA,this.aq,te,ne,b,re,ie,ae,oe)}else throw xy(new Sy)}),j.cE=(function(e){var t=V().ck(this.g,e),n=V().aa(2,this.ax,e),r=V().aa(3,this.ay,e),i=V().aa(4,this.az,e),a=V().aa(5,this.aA,e),o=V().aa(6,this.a5,e),s=V().aa(5,this.a9,e),c=V().aa(4,this.a8,e),l=V().aa(3,this.a7,e),u=V().aa(2,this.a6,e),d=V().ck(this.k,e);return new bk(t,this.aj,n,this.ak,r,this.al,i,this.am,a,this.aq,o,s,c,l,u,d,this.l)}),j.cV=(function(){return 11}),j.cU=(function(e){switch(e){case 0:return this.g;case 1:return this.ax;case 2:return this.ay;case 3:return this.az;case 4:return this.aA;case 5:return this.a5;case 6:return this.a9;case 7:return this.a8;case 8:return this.a7;case 9:return this.a6;case 10:return this.k;default:throw new By(e)}}),j.cD=(function(e){return this.cE(e)}),j.f=(function(e){var t=e|0;if(t>=0&&t<this.l){var n=t-this.aq|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.a5.a.length?this.a5.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.a9.a.length?this.a9.a[i].a[a].a[o].a[s].a[c]:a<this.a8.a.length?this.a8.a[a].a[o].a[s].a[c]:o<this.a7.a.length?this.a7.a[o].a[s].a[c]:s<this.a6.a.length?this.a6.a[s].a[c]:this.k.a[c]}else if(t>=this.am){var l=t-this.am|0;return this.aA.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.al){var u=t-this.al|0;return this.az.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.ak){var d=t-this.ak|0;return this.ay.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.aj){var f=t-this.aj|0;return this.ax.a[f>>>5|0].a[31&f]}else return this.g.a[t]}else throw this.aP(t)}),new P().i(bk,`scala.collection.immutable.Vector6`,{gN:1,af:1,ag:1,aa:1,x:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,v:1,t:1,w:1,y:1,q:1,r:1,C:1,z:1,s:1,k:1,V:1,a:1});function Sk(e,t){return e.b6=t,e}function Ck(e){return Sk(e,K_(new Y_)),e}function wk(){this.b6=null}j=wk.prototype=new yD,j.constructor=wk;function Tk(){}Tk.prototype=j,j.by=(function(){return`IndexedSeq`}),j.m=(function(){return cC(new lC,new sD(this))}),j.bo=(function(e){var t=this.b6.u();return t===e?0:t<e?-1:1}),j.be=(function(e){}),j.bc=(function(e){return dm(this,e)}),j.u=(function(){return this.b6.u()}),j.E=(function(){return this.b6.u()}),j.qx=(function(e){var t=this.b6,n=``+Fa(e);return t.o+=n,this}),j.F=(function(){return this.b6.o}),j.ot=(function(e){if(e instanceof IO)this.b6.os(e.bW);else if(e instanceof wk){var t=this.b6,n=e.b6;t.o=``+t.o+n}else{var r=e.E();if(r!==0){var i=this.b6;r>0&&i.u();for(var a=e.m();a.n();){var o=``+Fa(Ga(a.j()));i.o+=o}}}return this}),j.e=(function(){return this.b6.u()===0}),j.bw=(function(){return Yx()}),j.bd=(function(){return this.b6.o}),j.b7=(function(e){return this.qx(Ga(e))}),j.g5=(function(e){return Ck(new wk).ot(e)}),j.g6=(function(e){return Ck(new wk).ot(e)}),j.f=(function(e){var t=e|0;return Wa(this.b6.oK(t))}),j.y=(function(e){return Wa(this.b6.oK(e))}),new P().i(wk,`scala.collection.mutable.StringBuilder`,{cl:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,ab:1,M:1,I:1,G:1,R:1,q:1,r:1,S:1,aG:1,a:1});function Ek(e){var t=new Ok().hc(e);e.c9=t.c9,e.dd=t.dd,e.gJ=!1}function Dk(e){e.gK=1+e.gK|0,e.gJ&&Ek(e)}function Ok(){this.gK=0,this.c9=null,this.dd=null,this.gJ=!1,this.ca=0,this.gK=0,this.c9=$(),this.dd=null,this.gJ=!1,this.ca=0}j=Ok.prototype=new WD,j.constructor=Ok;function kk(){}kk.prototype=j,j.be=(function(e){}),j.cQ=(function(e){return gC(this,e)}),j.m=(function(){return new eS(this.c9.m(),new Qg((()=>this.gK)))}),j.eg=(function(){return $x()}),j.y=(function(e){return gb(this.c9,e)}),j.u=(function(){return this.ca}),j.E=(function(){return this.ca}),j.e=(function(){return this.ca===0}),j.pP=(function(){return this.gJ=!this.e(),this.c9}),j.qF=(function(e){Dk(this);var t=new rk(e,$());return this.ca===0?this.c9=t:this.dd.aC=t,this.dd=t,this.ca=1+this.ca|0,this}),j.hc=(function(e){var t=e.m();if(t.n()){var n=1,r=new rk(t.j(),$());for(this.c9=r;t.n();){var i=new rk(t.j(),$());r.aC=i,r=i,n=1+n|0}this.ca=n,this.dd=r}return this}),j.qv=(function(e){var t=e.m();if(t.n()){var n=new Ok().hc(t);Dk(this),this.ca===0?this.c9=n.c9:this.dd.aC=n.c9,this.dd=n.dd,this.ca=this.ca+n.ca|0}return this}),j.by=(function(){return`ListBuffer`}),j.bc=(function(e){return this.qv(e)}),j.b7=(function(e){return this.qF(e)}),j.bd=(function(){return this.pP()}),j.f=(function(e){var t=e|0;return gb(this.c9,t)}),j.bw=(function(){return $x()}),new P().i(Ok,`scala.collection.mutable.ListBuffer`,{ck:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,s:1,k:1,ab:1,M:1,V:1,a:1});function Ak(e,t,n){return e.dV=0,e.dU=t,e.aH=n,e}function jk(e){return Ak(e,new N(16),0),e}function Mk(){this.dV=0,this.dU=null,this.aH=0}j=Mk.prototype=new WD,j.constructor=Mk;function Nk(){}Nk.prototype=j,j.cQ=(function(e){return gC(this,e)}),j.m=(function(){return this.to().m()}),j.bo=(function(e){var t=this.aH;return t===e?0:t<e?-1:1}),j.E=(function(){return this.aH}),j.iU=(function(e){this.dU=jx().pI(this.dU,this.aH,e)}),j.be=(function(e){e>this.aH&&e>=1&&this.iU(e)}),j.y=(function(e){var t=1+e|0;if(e<0)throw ad().g9(e,-1+this.aH|0);if(t>this.aH)throw ad().g9(-1+t|0,-1+this.aH|0);return this.dU.a[e]}),j.tm=(function(e,t){var n=1+e|0;if(e<0)throw ad().g9(e,-1+this.aH|0);if(n>this.aH)throw ad().g9(-1+n|0,-1+this.aH|0);this.dV=1+this.dV|0,this.dU.a[e]=t}),j.u=(function(){return this.aH}),j.to=(function(){return new dD(this,new Qg((()=>this.dV)))}),j.eg=(function(){return jx()}),j.qC=(function(e){this.dV=1+this.dV|0;var t=1+this.aH|0;return this.iU(t),this.aH=t,this.tm(-1+this.aH|0,e),this}),j.oo=(function(e){if(e instanceof Mk){var t=e.aH;t>0&&(this.dV=1+this.dV|0,this.iU(this.aH+t|0),Yp().g1(e.dU,0,this.dU,this.aH,t),this.aH=this.aH+t|0)}else dm(this,e);return this}),j.by=(function(){return`ArrayBuffer`}),j.c0=(function(e,t,n){var r=this.aH,i=du().ch(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&Yp().g1(this.dU,0,e,t,c),c}),j.bc=(function(e){return this.oo(e)}),j.b7=(function(e){return this.qC(e)}),j.bw=(function(){return jx()}),j.f=(function(e){return this.y(e|0)}),new P().i(Mk,`scala.collection.mutable.ArrayBuffer`,{c7:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,cj:1,R:1,q:1,r:1,S:1,s:1,k:1,V:1,a:1});function Pk(e,t){return e.e6=t,e}function Fk(e){return Pk(e,[]),e}function Ik(){this.e6=null}j=Ik.prototype=new WD,j.constructor=Ik;function Lk(){}Lk.prototype=j,j.be=(function(e){}),j.by=(function(){return`IndexedSeq`}),j.m=(function(){return cC(new lC,new sD(this))}),j.bo=(function(e){var t=this.e6.length|0;return t===e?0:t<e?-1:1}),j.cQ=(function(e){return gC(this,e)}),j.eg=(function(){return uS()}),j.y=(function(e){return this.e6[e]}),j.u=(function(){return this.e6.length|0}),j.E=(function(){return this.e6.length|0}),j.ce=(function(){return`WrappedArray`}),j.bd=(function(){return this}),j.b7=(function(e){return this.e6.push(e),this}),j.f=(function(e){var t=e|0;return this.e6[t]}),j.bw=(function(){return uS()}),new P().i(Ik,`scala.scalajs.js.WrappedArray`,{i0:1,aT:1,L:1,o:1,i:1,f:1,b:1,h:1,c:1,g:1,m:1,j:1,e:1,l:1,d:1,N:1,J:1,O:1,H:1,B:1,aU:1,I:1,G:1,aw:1,s:1,k:1,R:1,q:1,r:1,S:1,cj:1,M:1,a:1}),Ta=new z(0,0),uo.z=Ta,nl(new(JS.r()).C([]));