var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=e=>{throw TypeError(e)},a=(e,t,i,a)=>{for(var o=a>1?void 0:a?r(t,i):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(a?c(t,i,o):c(o))||o);return a&&o&&n(t,i,o),o},o=(e,t,n)=>t.has(e)||i(`Cannot `+n),s=(e,t,n)=>(o(e,t,`read from private field`),n?n.call(e):t.get(e)),c=(e,t,n)=>t.has(e)?i(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),l=(e,t,n,r)=>(o(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const u=globalThis,d=u.ShadowRoot&&(u.ShadyCSS===void 0||u.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,f=Symbol(),p=new WeakMap;var m=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==f)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(d&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=p.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&p.set(t,e))}return e}toString(){return this.cssText}};const ee=e=>new m(typeof e==`string`?e:e+``,void 0,f),te=(e,...t)=>new m(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,f),ne=(e,t)=>{if(d)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=u.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},re=d?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ee(t)})(e):e,{is:ie,defineProperty:ae,getOwnPropertyDescriptor:oe,getOwnPropertyNames:se,getOwnPropertySymbols:ce,getPrototypeOf:le}=Object,ue=globalThis,de=ue.trustedTypes,fe=de?de.emptyScript:``,pe=ue.reactiveElementPolyfillSupport,me=(e,t)=>e,he={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ge=(e,t)=>!ie(e,t),_e={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol(`metadata`),ue.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(me(`elementProperties`)))return;let e=le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me(`properties`))){let e=this.properties,t=[...se(e),...ce(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(re(e))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?he:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?he:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ge)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:`open`},ve[me(`elementProperties`)]=new Map,ve[me(`finalized`)]=new Map,pe?.({ReactiveElement:ve}),(ue.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ye=globalThis,be=ye.trustedTypes,xe=be?be.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Se=`$lit$`,Ce=`lit$${Math.random().toFixed(9).slice(2)}$`,we=`?`+Ce,Te=`<${we}>`,Ee=document,De=()=>Ee.createComment(``),Oe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ke=Array.isArray,Ae=e=>ke(e)||typeof e?.[Symbol.iterator]==`function`,je=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,Fe=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ie=/'/g,Le=/"/g,Re=/^(?:script|style|textarea|title)$/i,ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Be=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ve=new WeakMap,He=Ee.createTreeWalker(Ee,129);function Ue(e,t){if(!ke(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return xe===void 0?t:xe.createHTML(t)}const We=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Me?c[1]===`!--`?o=Ne:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Fe):(Re.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Fe):o=Pe:o===Fe?c[0]===`>`?(o=i??Me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Fe:c[3]===`"`?Le:Ie):o===Le||o===Ie?o=Fe:o===Ne||o===Pe?o=Me:(o=Fe,i=void 0);let d=o===Fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Me?n+Te:l>=0?(r.push(s),n.slice(0,l)+Se+n.slice(l)+Ce+d):n+Ce+(l===-2?t:d)}return[Ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=We(t,n);if(this.el=e.createElement(l,r),He.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=He.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Se)){let t=u[o++],n=i.getAttribute(e).split(Ce),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Xe:r[1]===`?`?Ze:r[1]===`@`?Qe:Ye}),i.removeAttribute(e)}else e.startsWith(Ce)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Re.test(i.tagName)){let e=i.textContent.split(Ce),t=e.length-1;if(t>0){i.textContent=be?be.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],De()),He.nextNode(),c.push({type:2,index:++a});i.append(e[t],De())}}}else if(i.nodeType===8)if(i.data===we)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ce,e+1))!==-1;)c.push({type:7,index:a}),e+=Ce.length-1}a++}}static createElement(e,t){let n=Ee.createElement(`template`);return n.innerHTML=e,n}};function Ke(e,t,n=e,r){if(t===Be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Oe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ke(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ee).importNode(t,!0);He.currentNode=r;let i=He.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new $e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=He.nextNode(),a++)}return He.currentNode=Ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Oe(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==Be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Ge(e)),t}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(De()),this.O(De()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ke(this,e,t,0),a=!Oe(e)||e!==this._$AH&&e!==Be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ke(this,r[n+o],t,o),s===Be&&(s=this._$AH[o]),a||=!Oe(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Xe=class extends Ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},Ze=class extends Ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},Qe=class extends Ye{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ke(this,e,t,0)??h)===Be)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const et={M:Se,P:Ce,A:we,C:1,L:We,R:qe,D:Ae,V:Ke,I:Je,H:Ye,N:Ze,U:Qe,B:Xe,F:$e},tt=ye.litHtmlPolyfillSupport;tt?.(Ge,Je),(ye.litHtmlVersions??=[]).push(`3.3.1`);const nt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Je(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i},rt=globalThis;var it=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};it._$litElement$=!0,it.finalized=!0,rt.litElementHydrateSupport?.({LitElement:it});const at=rt.litElementPolyfillSupport;at?.({LitElement:it}),(rt.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},st={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:ge},ct=(e=st,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return g({...e,state:!0,attribute:!1})}
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
var ft=te`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends it{constructor(){super(),c(this,gt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){s(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),l(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=new WeakMap,a([g()],_t.prototype,`dir`,2),a([g()],_t.prototype,`lang`,2),a([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);const vt=new Set,yt=new Map;let bt,xt=`ltr`,St=`en`;const Ct=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ct){let e=new MutationObserver(Tt);xt=document.documentElement.dir||`ltr`,St=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function wt(...e){e.map(e=>{let t=e.$code.toLowerCase();yt.has(t)?yt.set(t,Object.assign(Object.assign({},yt.get(t)),e)):yt.set(t,e),bt||=e}),Tt()}function Tt(){Ct&&(xt=document.documentElement.dir||`ltr`,St=document.documentElement.lang||navigator.language),[...vt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Et=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vt.add(this.host)}hostDisconnected(){vt.delete(this.host)}dir(){return`${this.host.dir||xt}`.toLowerCase()}lang(){let e=`${this.host.lang||St}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return bt?bt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=yt.get(`${n}-${r}`),a=yt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&bt&&bt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(bt&&bt[e])i=bt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Dt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};wt(Dt);var Ot=Dt,kt=class extends Et{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};wt(Ot);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var At=class extends _t{constructor(){super(...arguments),this.localize=new kt(this),this.value=0,this.unit=`byte`,this.display=`short`}static get styles(){return[]}render(){if(isNaN(this.value))return``;let e=this.unit===`bit`?[``,`kilo`,`mega`,`giga`,`tera`]:[``,`kilo`,`mega`,`giga`,`tera`,`peta`],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),n=e[t]+this.unit,r=parseFloat((this.value/1e3**t).toPrecision(3));return this.localize.number(r,{style:`unit`,unit:n,unitDisplay:this.display})}};a([g({type:Number})],At.prototype,`value`,2),a([g()],At.prototype,`unit`,2),a([g()],At.prototype,`display`,2),At=a([ot(`wa-format-bytes`)],At);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jt=t({default:()=>At}),Mt=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Nt(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&Lt(t)})}var Pt=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),Ft=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),It=e=>{let t=e?.localName;if(!t||!Pt.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!Ft.get(n)};function Lt(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)It(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Rt=te`
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
`,zt=te`
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
`,Bt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Vt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Ht=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ut=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Vt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Ht()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ut.formAssociated=!0,a([g({reflect:!0})],Ut.prototype,`name`,2),a([g({type:Boolean})],Ut.prototype,`disabled`,2),a([g({state:!0,attribute:!1})],Ut.prototype,`valueHasChanged`,2),a([g({state:!0,attribute:!1})],Ut.prototype,`hasInteracted`,2),a([g({attribute:`custom-error`,reflect:!0})],Ut.prototype,`customError`,2),a([g({attribute:!1,state:!0,type:Object})],Ut.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wt={small:`s`,medium:`m`,large:`l`},Gt=new Set;function Kt(e,t){t in Wt&&!Gt.has(`${e}:${t}`)&&(Gt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Wt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Jt=te`
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
function Yt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Zt=e=>(...t)=>({_$litDirective$:e,values:t});var Qt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const $t=Zt(class extends Qt{constructor(e){if(super(e),e.type!==Xt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Be}}),_=e=>e??h,{I:en}=et,tn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,nn=e=>e.strings===void 0,rn={},an=(e,t=rn)=>e._$AH=t,on=Zt(class extends Qt{constructor(e){if(super(e),e.type!==Xt.PROPERTY&&e.type!==Xt.ATTRIBUTE&&e.type!==Xt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!nn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Be||t===h)return t;let n=e.element,r=e.name;if(e.type===Xt.PROPERTY){if(t===n[r])return Be}else if(e.type===Xt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Be}else if(e.type===Xt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Be;return an(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends Ut{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new qt(this,`hint`,`label`),this.localize=new kt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,Bt()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){Kt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Mt),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Nt(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return ze`
      <label
        part="form-control-label label"
        class=${$t({label:!0,"has-label":n})}
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
          name=${_(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${_(this.placeholder)}
          minlength=${_(this.minlength)}
          maxlength=${_(this.maxlength)}
          min=${_(this.min)}
          max=${_(this.max)}
          step=${_(this.step)}
          .value=${on(this.value??``)}
          autocapitalize=${_(this.autocapitalize)}
          autocomplete=${_(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${_(this.pattern)}
          enterkeyhint=${_(this.enterkeyhint)}
          inputmode=${_(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?ze`
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
        ${this.passwordToggle&&!this.disabled?ze`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?ze`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:ze`
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
        class=${$t({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};v.css=[Jt,zt,Rt],v.shadowRootOptions={...Ut.shadowRootOptions,delegatesFocus:!0},a([dt(`input`)],v.prototype,`input`,2),a([g()],v.prototype,`title`,2),a([g({reflect:!0})],v.prototype,`type`,2),a([lt()],v.prototype,`value`,1),a([g({attribute:`value`,reflect:!0})],v.prototype,`defaultValue`,2),a([g({reflect:!0})],v.prototype,`size`,2),a([Yt(`size`)],v.prototype,`handleSizeChange`,1),a([g({reflect:!0})],v.prototype,`appearance`,2),a([g({type:Boolean,reflect:!0})],v.prototype,`pill`,2),a([g()],v.prototype,`label`,2),a([g({attribute:`hint`})],v.prototype,`hint`,2),a([g({attribute:`with-clear`,type:Boolean})],v.prototype,`withClear`,2),a([g()],v.prototype,`placeholder`,2),a([g({type:Boolean,reflect:!0})],v.prototype,`readonly`,2),a([g({attribute:`password-toggle`,type:Boolean})],v.prototype,`passwordToggle`,2),a([g({attribute:`password-visible`,type:Boolean})],v.prototype,`passwordVisible`,2),a([g({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],v.prototype,`withoutSpinButtons`,2),a([g({type:Boolean,reflect:!0})],v.prototype,`required`,2),a([g()],v.prototype,`pattern`,2),a([g({type:Number})],v.prototype,`minlength`,2),a([g({type:Number})],v.prototype,`maxlength`,2),a([g()],v.prototype,`min`,2),a([g()],v.prototype,`max`,2),a([g()],v.prototype,`step`,2),a([g()],v.prototype,`autocapitalize`,2),a([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],v.prototype,`autocorrect`,2),a([g()],v.prototype,`autocomplete`,2),a([g({type:Boolean})],v.prototype,`autofocus`,2),a([g()],v.prototype,`enterkeyhint`,2),a([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],v.prototype,`spellcheck`,2),a([g()],v.prototype,`inputmode`,2),a([g({attribute:`with-label`,type:Boolean})],v.prototype,`withLabel`,2),a([g({attribute:`with-hint`,type:Boolean})],v.prototype,`withHint`,2),a([Yt(`step`,{waitUntilFirstUpdate:!0})],v.prototype,`handleStepChange`,1),v=a([ot(`wa-input`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var sn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},cn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},ln=te`
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
`,un=``,dn=``;function fn(){return un.replace(/\/$/,``)}function pn(e){dn=e}function mn(){if(!dn){let e=document.querySelector(`[data-fa-kit-code]`);e&&pn(e.getAttribute(`data-fa-kit-code`)||``)}return dn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var hn=`7.3.0`;function gn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function _n(e,t,n){let r=gn(e,t,n),i=fn();if(i)return`${i}/${r}/${e}.svg`;let a=mn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${hn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${hn}/svgs/${r}/${e}.svg`}var vn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>_n(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function yn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var bn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},xn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=bn[n][e]??bn.regular[e]??bn.regular[`circle-question`];return r?yn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},Sn=`classic`,Cn=[vn,xn],wn=new Set;function Tn(e){wn.add(e)}function En(e){wn.delete(e)}function Dn(e){return Cn.find(t=>t.name===e)}function On(){return Sn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var kn=Symbol(),An=Symbol(),jn,Mn=new Map,y=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?kn:An}catch{return An}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return kn;jn||=new DOMParser;let r=jn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):kn}catch{return kn}}}connectedCallback(){super.connectedCallback(),Tn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),En(this)}async getIconSource(){let e=Dn(this.library),t=this.family||On();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?Dn(this.library):void 0;if(!e){this.svg=null;return}let r=Mn.get(e);r||(r=this.resolveIcon(e,n),Mn.set(e,r));let i=await r;if(i===An&&Mn.delete(e),e===(await this.getIconSource()).url){if(tn(i)){this.svg=i;return}switch(i){case An:case kn:this.svg=null,this.dispatchEvent(new sn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new cn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=Dn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ze`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=ln,a([lt()],y.prototype,`svg`,2),a([g({reflect:!0})],y.prototype,`name`,2),a([g({reflect:!0})],y.prototype,`family`,2),a([g({reflect:!0})],y.prototype,`variant`,2),a([g({reflect:!0})],y.prototype,`canvas`,2),a([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),a([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),a([g()],y.prototype,`src`,2),a([g()],y.prototype,`label`,2),a([g({reflect:!0})],y.prototype,`library`,2),a([g({type:Number,reflect:!0})],y.prototype,`rotate`,2),a([g({type:String,reflect:!0})],y.prototype,`flip`,2),a([g({type:String,reflect:!0})],y.prototype,`animation`,2),a([Yt(`label`)],y.prototype,`handleLabelChange`,1),a([Yt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=a([ot(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=t({default:()=>v}),b;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Pn;function Fn(e){this.c=e}b=Fn.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function In(e){switch(typeof e){case`string`:return um.l();case`number`:return Zn(e)?e<<24>>24===e?If.l():e<<16>>16===e?Wf.l():rm.l():Qn(e)?nm.l():tm.l();case`boolean`:return Ld.l();case`undefined`:return Bo.l();default:return e instanceof k?om.l():e instanceof Fn?Bd.l():e&&e.$classData?e.$classData.l():null}}function Ln(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Zn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Qn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof k?`java.lang.Long`:e instanceof Fn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.kd()}}function Rn(e,t){switch(typeof e){case`string`:return cm(e,t);case`number`:return $p(e,t);case`boolean`:return Fd(e,t);case`undefined`:return Lo(e,t);default:return e&&e.$classData||e===null?e.f(t):e instanceof k?im(e,t):e instanceof Fn?zd(er(e),t):nr.prototype.f.call(e,t)}}function zn(e){switch(typeof e){case`string`:return J(e);case`number`:return em(e);case`boolean`:return Id(e);case`undefined`:return Ro(e);default:return e&&e.$classData||e===null?e.m():e instanceof k?am(e):e instanceof Fn?Rd(er(e)):nr.prototype.m.call(e)}}function Bn(e){return e===void 0?`undefined`:e.toString()}function Vn(e,t){if(t===0)throw new Ff(`/ by zero`);return e/t|0}function Hn(e,t){if(t===0)throw new Ff(`/ by zero`);return e%t|0}function Un(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Wn(e){return String.fromCharCode(e)}function Gn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Kn=0,qn=new WeakMap;function Jn(e){switch(typeof e){case`string`:return J(e);case`number`:return em(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=qn.get(e);return r===void 0&&(r=Kn+1|0,Kn=r,qn.set(e,r)),r}}function Yn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Zn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Qn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function $n(e){return new Fn(e)}$n(0);function er(e){return e===null?0:e.c}function tr(e){return e===null?Pn:e}function nr(){}b=nr.prototype,b.constructor=nr;function x(){}x.prototype=b,b.m=(function(){return Jn(this)}),b.f=(function(e){return this===e}),b.o=(function(){var e=this.m();return Ln(this)+`@`+(+(e>>>0)).toString(16)}),b.toString=(function(){return this.o()});function S(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=S.prototype=new x,b.constructor=S,b.ac=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),b.a4=(function(){return new S(this.a.slice())});function rr(){}rr.prototype=b;function ir(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=ir.prototype=new x,b.constructor=ir,b.ac=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),b.a4=(function(){return new ir(this.a.slice())});function ar(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}b=ar.prototype=new x,b.constructor=ar,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new ar(this.a.slice())});function or(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}b=or.prototype=new x,b.constructor=or,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new or(this.a.slice())});function sr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}b=sr.prototype=new x,b.constructor=sr,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new sr(this.a.slice())});function cr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}b=cr.prototype=new x,b.constructor=cr,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new cr(this.a.slice())});function lr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Pn}else this.a=e}b=lr.prototype=new x,b.constructor=lr,b.ac=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),b.a4=(function(){return new lr(this.a.slice())});function ur(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}b=ur.prototype=new x,b.constructor=ur,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new ur(this.a.slice())});function dr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}b=dr.prototype=new x,b.constructor=dr,b.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.a4=(function(){return new dr(this.a.slice())});function C(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=C.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new C().y(this,r,i)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new rr;n.constructor=t,n.ac=(function(e,t,n,r){Gn(this.a,e,t.a,n,r)}),n.a4=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===fr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new C().a(this),this.A}),b.l=(function(){return this.L||=new Iu(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null}),b.U=(function(e){if(this===pr)throw Rf(new zf);return new(this.r()).C(e)});var fr=new C;fr.n={},fr.E=`Ljava.lang.Object;`,fr.F=(e=>!e.X),fr.N=`java.lang.Object`,fr.I=(e=>e!==null),fr.A=new C().y(fr,S,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),nr.prototype.$classData=fr;var pr=new C().p(void 0,`V`,`void`,void 0,void 0);new C().p(!1,`Z`,`boolean`,ir,void 0);var mr=new C().p(0,`C`,`char`,ar,Uint16Array);new C().p(0,`B`,`byte`,or,Int8Array),new C().p(0,`S`,`short`,sr,Int16Array),new C().p(0,`I`,`int`,cr,Int32Array);var hr=new C().p(null,`J`,`long`,lr,void 0);new C().p(0,`F`,`float`,ur,Float32Array),new C().p(0,`D`,`double`,dr,Float64Array);var gr=new C().i(1,`com.raquo.airstream.core.InternalObserver`,{ak:1});function _r(e){return In(e).dE()+`@`+e.m()}function vr(e){var t=e.bJ();return t===void 0?e.bF():t}function yr(){xr=this,Sr().hg(new K((e=>void 0)),ls().c8,!0)}b=yr.prototype=new x,b.constructor=yr;function br(){}br.prototype=b,b.hg=(function(e,t,n){return new yd(e,n,t,this)}),b.ip=(function(e,t){return new xd(e,t,this)}),new C().i(yr,`com.raquo.airstream.core.Observer$`,{bA:1});var xr;function Sr(){return xr||=new yr,xr}function Cr(){}b=Cr.prototype=new x,b.constructor=Cr;function wr(){}wr.prototype=b,b.h7=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new C().i(Cr,`com.raquo.airstream.core.ObserverList$`,{bD:1});var Tr;function Er(){return Tr||=new Cr,Tr}function Dr(){this.aR=0,this.aR=0}b=Dr.prototype=new x,b.constructor=Dr;function Or(){}Or.prototype=b,b.gW=(function(){return this.aR===2147483647?this.aR=1:this.aR=1+this.aR|0,this.aR}),new C().i(Dr,`com.raquo.airstream.core.Signal$`,{bE:1});var kr;function Ar(){return kr||=new Dr,kr}function jr(e){this.cx=null,this.dY=null,this.cy=0,this.cx=e,this.dY=void 0;var t=Zr().bM();this.cy=t===void 0?1:1+t.cy|0,Lr().bP===-1||this.cy>Lr().bP?R().a6(new Bp(this,Lr().bP)):Hr().z?Hr().aw.push(this)|0:Zr().dw(this)}b=jr.prototype=new x,b.constructor=jr;function Mr(){}Mr.prototype=b;var Nr=new C().i(jr,`com.raquo.airstream.core.Transaction`,{bF:1});function Pr(){this.bP=0,this.dZ=null,Ir=this,this.bP=1e3,this.dZ=new K((e=>{throw B(new V,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=Pr.prototype=new x,b.constructor=Pr;function Fr(){}Fr.prototype=b,b.gu=(function(e){try{e.cx.d(e);var t=e.dY;if(t!==void 0)for(;t.ki();)t.k7().kn(e)}catch(e){var n=e instanceof I?e:new Z(e);R().a6(n)}}),new C().i(Pr,`com.raquo.airstream.core.Transaction$`,{bG:1});var Ir;function Lr(){return Ir||=new Pr,Ir}function Rr(e){e.bQ.length|0?new jr(new K((t=>{for(;(e.bQ.length|0)>0;){var n=e.bQ.shift();try{n.d(t)}catch(e){var r=e instanceof I?e:new Z(e);R().a6(r)}}for(;(e.aw.length|0)>0;){var i=e.aw.shift();Zr().dw(i)}}))):(e.aw.length|0)>0&&new jr(new K((t=>{for(;(e.aw.length|0)>0;)Zr().dw(e.aw.shift())})))}function zr(){this.z=!1,this.bQ=null,this.aw=null,Vr=this,this.z=!1,this.bQ=w().A(N().h(new(j.r()).C([]))),this.aw=w().A(N().h(new(Nr.r()).C([])))}b=zr.prototype=new x,b.constructor=zr;function Br(){}Br.prototype=b,new C().i(zr,`com.raquo.airstream.core.Transaction$onStart$`,{bH:1});var Vr;function Hr(){return Vr||=new zr,Vr}function Ur(e,t){return e.ax.get(t)}function Wr(e,t){e.bR.unshift(t)}function Gr(e){return e.bR.shift()}function Kr(e,t,n){var r=Ur(e,t),i=r===void 0,a=r===void 0?w().A(N().h(new(Nr.r()).C([]))):r;a.push(n),i&&e.ax.set(t,a)}function qr(e,t){var n=Ur(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ax.delete(t),i}}function Jr(){this.bR=null,this.ax=null,Xr=this,this.bR=w().A(N().h(new(Nr.r()).C([]))),this.ax=new Map}b=Jr.prototype=new x,b.constructor=Jr;function Yr(){}Yr.prototype=b,b.dw=(function(e){var t=this.bM();t===void 0?(Wr(this,e),Lr().gu(e),this.i5(e)):Kr(this,t,e)}),b.i5=(function(e){for(var t=e;;){var n=this.bM(),r=t;if(!(n!==void 0&&M().E(r,n)))throw B(new V,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.je(t),t.cx=Lr().dZ;var i=this.bM();if(M().E(i,void 0))if((this.ax.size|0)>0){var a=new zl(0);throw this.ax.forEach((e=>((t,n)=>{e.br=e.br+(t.length|0)|0}))(a)),B(new V,`Transaction queue error: Stack cleared, but a total of `+a.br+` children for `+(this.ax.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Lr().gu(i),t=i}}),b.je=(function(e){for(var t=e;;){var n=qr(this,t);if(M().E(n,void 0)){Gr(this);var r=this.bM();if(!M().E(r,void 0))t=r;else return}else{Wr(this,n);return}}}),b.bM=(function(){return this.bR[0]}),new C().i(Jr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bI:1});var Xr;function Zr(){return Xr||=new Jr,Xr}function Qr(e,t){var n=e.ae.indexOf(t)|0;if(n!==-1)e.ae.splice(n,1),e.J.g()||t.gY();else throw B(new V,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function $r(e){for(;(e.bT.length|0)>0;)Qr(e,e.bT.shift())}function ei(e){this.e7=null,this.ae=null,this.aS=!1,this.bT=null,this.J=null,this.aT=0,this.e7=e,this.ae=w().A(N().h(new(ii.r()).C([]))),this.aS=!0,this.bT=w().A(N().h(new(ii.r()).C([]))),this.J=Y(),this.aT=0}b=ei.prototype=new x,b.constructor=ei;function ti(){}ti.prototype=b,b.gc=(function(){if(this.J.g()){var e=Hr(),t=(()=>{var e=new tc(this.e7);this.J=new X(e),this.aS=!1,this.aT=0;for(var t=0,n=this.ae.length|0;t<n;){var r=t+this.aT|0;this.ae[r].gX(e),t=1+t|0}$r(this),this.aS=!0,this.aT=0});if(Hr(),e.z)t();else{e.z=!0;try{t()}finally{e.z=!1,Rr(e)}}}else throw B(new V,`Can not activate `+this+`: it is already active`)}),b.i1=(function(){if(this.J.g())throw B(new V,`Can not deactivate DynamicOwner: it is not active`);this.aS=!1;for(var e=this.ae,t=0,n=e.length|0;t<n;)e[t].gY(),t=1+t|0;$r(this);var r=this.J;r.g()||r.u().iI(),$r(this),this.aS=!0,this.J=Y()}),b.hE=(function(e,t){t?(this.aT=1+this.aT|0,this.ae.unshift(e)):this.ae.push(e);var n=this.J;if(!n.g()){var r=n.u();e.gX(r)}}),b.jk=(function(e){this.aS?Qr(this,e):this.bT.push(e)}),new C().i(ei,`com.raquo.airstream.ownership.DynamicOwner`,{bK:1});function ni(e,t,n){this.bU=null,this.e8=null,this.bV=null,this.bU=e,this.e8=t,this.bV=Y(),e.hE(this,n)}b=ni.prototype=new x,b.constructor=ni;function ri(){}ri.prototype=b,b.ck=(function(){this.bU.jk(this)}),b.gX=(function(e){var t=Hr(),n=(()=>{this.bV=this.e8.d(e)});if(Hr(),t.z)n();else{t.z=!0;try{n()}finally{t.z=!1,Rr(t)}}}),b.gY=(function(){var e=this.bV;e.g()||(e.u().ck(),this.bV=Y())});var ii=new C().i(ni,`com.raquo.airstream.ownership.DynamicSubscription`,{bL:1});function ai(){}b=ai.prototype=new x,b.constructor=ai;function oi(){}oi.prototype=b,b.cs=(function(e,t,n){return new ni(e,new K((e=>new X(t.d(e)))),n)}),b.hc=(function(e,t,n){return new ni(e,new K((e=>(t.d(e),Y()))),n)}),b.jx=(function(e,t,n){return ci().cs(e,new K((e=>Yl(t,n,e))),!1)}),new C().i(ai,`com.raquo.airstream.ownership.DynamicSubscription$`,{bM:1});var si;function ci(){return si||=new ai,si}function li(e){e.aU=w().A(N().h(new(gi.r()).C([])))}function ui(e){for(var t=e.aU,n=0,r=t.length|0;n<r;)pi(t[n]),n=1+n|0;e.aU.length=0}function di(e,t){var n=e.aU.indexOf(t)|0;if(n!==-1)e.aU.splice(n,1);else throw B(new V,`Can not remove Subscription from Owner: subscription not found.`)}function fi(e,t){e.aU.push(t)}function pi(e){if(!e.cF)e.ea.a9(),e.cF=!0;else throw B(new V,`Can not kill Subscription: it was already killed.`)}function mi(e,t){this.eb=null,this.ea=null,this.cF=!1,this.eb=e,this.ea=t,this.cF=!1,e.jb(this)}b=mi.prototype=new x,b.constructor=mi;function hi(){}hi.prototype=b,b.ck=(function(){pi(this),di(this.eb,this)});var gi=new C().i(mi,`com.raquo.airstream.ownership.Subscription`,{bP:1});function _i(e,t){this.ec=null,this.ed=null,this.af=null,this.ay=!1,this.ec=e,this.ed=t,this.af=Y(),this.ay=!1}b=_i.prototype=new x,b.constructor=_i;function vi(){}vi.prototype=b,b.iE=(function(){var e=this.af;return!e.g()&&!e.u().bU.J.g()}),b.jr=(function(e){if(this.ay)throw B(new V,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.af;if(t.g())var n=!1;else var n=e===t.u().bU;if(!n){this.iE()&&!e.J.g()&&(this.ay=!0);var r=this.af;r.g()||(r.u().ck(),this.af=Y()),this.af=new X(ci().cs(e,new K((e=>(this.ay||this.ec.a9(),new mi(e,new G((()=>{this.ay||this.ed.a9()})))))),!1)),this.ay=!1}}),b.hU=(function(){if(this.ay)throw B(new V,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.af;e.g()||e.u().ck(),this.af=Y()}),new C().i(_i,`com.raquo.airstream.ownership.TransferableSubscription`,{bQ:1});function yi(){}b=yi.prototype=new x,b.constructor=yi;function bi(){}bi.prototype=b,b.hK=(function(e){return new Hp(new Fp(e))}),new C().i(yi,`com.raquo.airstream.state.Var$`,{bU:1});var xi;function Si(){return xi||=new yi,xi}function Ci(){}b=Ci.prototype=new x,b.constructor=Ci;function wi(){}wi.prototype=b,b.A=(function(e){return[...Ws().jD(e)]}),new C().i(Ci,`com.raquo.ew.JsArray$`,{bX:1});var Ti;function w(){return Ti||=new Ci,Ti}function Ei(){}b=Ei.prototype=new x,b.constructor=Ei;function Di(){}Di.prototype=b,b.iB=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),b.ij=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new C().i(Ei,`com.raquo.ew.JsArray$RichJsArray$`,{bY:1});var Oi;function ki(){return Oi||=new Ei,Oi}function Ai(){this.ep=null,Mi=this,document.createElement(`template`),this.hZ(W().r.jy().jz()),this.ep=RegExp(` `,`g`)}b=Ai.prototype=new x,b.constructor=Ai;function ji(){}ji.prototype=b,b.hI=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof I?e:new Z(e);if(n instanceof Z&&n.D instanceof DOMException)return!1;throw n instanceof Z?n.D:n}}),b.iG=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(M().E(t,r))return!0;n=r}}),b.hC=(function(e,t){e.addEventListener(t.aW.bh.bW,t.cT,t.cU)}),b.ji=(function(e,t){e.removeEventListener(t.aW.bh.bW,t.cT,t.cU)}),b.hY=(function(e){return document.createElement(e.dK())}),b.ir=(function(e,t){var n=this.is(e,t);return n===void 0?void 0:t.aV.cg(n)}),b.is=(function(e,t){var n=e.C.getAttributeNS(null,t.ag);return n===null?void 0:n}),b.dP=(function(e,t,n){this.jp(e,t,t.aV.b6(n))}),b.jp=(function(e,t,n){n===null?this.jj(e,t):e.C.setAttribute(t.ag,n)}),b.jj=(function(e,t){e.C.removeAttribute(t.ag)}),b.it=(function(e,t){return e.C[t.a2]}),b.jq=(function(e,t,n){this.h9(e,t,t.cQ.b6(n))}),b.h9=(function(e,t,n){e.C[t.a2]=n}),b.ha=(function(e,t,n){var r=e.C,i=t.az,a=t.aA,o=n===null?null:n;o===null?(a.a5(new K((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a5(new K((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.hZ=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.fq)}),b.iw=(function(e,t){var n=this.ix(e,t);return n===void 0?void 0:t.cR.cg(n)}),b.ix=(function(e,t){var n=e.dN(),r=t.bY,i=n.getAttributeNS(r.g()?null:r.u(),t.cS);return i===null?void 0:i}),b.js=(function(e,t,n){this.jt(e,t,t.cR.b6(n))}),b.jt=(function(e,t,n){if(n===null)this.jl(e,t);else{var r=t.bY;if(r.g())e.dN().setAttribute(t.bX,n);else{var i=r.u();e.dN().setAttributeNS(i,t.bX,n)}}}),b.jl=(function(e,t){var n=e.dN(),r=t.bY;n.removeAttributeNS(r.g()?null:r.u(),t.cS)}),b.i0=(function(e){return document.createTextNode(e)}),b.gR=(function(e){return Ss().hW(e.tagName,45)}),b.iy=(function(e){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLButtonElement||e instanceof HTMLOptionElement)return e.value;if(this.gR(e)){var t=e.value;return new Sf(this),t===void 0?void 0:typeof t==`string`?t:void 0}else return}),b.i2=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Qg(this.gy(r),n);r=i,n=a}}),b.gy=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.ep,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new C().i(Ai,`com.raquo.laminar.DomApi$`,{bZ:1});var Mi;function T(){return Mi||=new Ai,Mi}function Ni(e,t,n){this.cM=null,this.eq=null,this.cL=null,this.cM=e,this.eq=t,this.cL=n}b=Ni.prototype=new x,b.constructor=Ni;function Pi(){}Pi.prototype=b,b.a5=(function(e){this.cM===null?this.cL===null?ps().ik(this.eq,e):ki().ij(this.cL,ud().io(e)):this.cM.a5(e)}),new C().i(Ni,`com.raquo.laminar.Seq`,{c1:1});function Fi(){}b=Fi.prototype=new x,b.constructor=Fi;function Ii(){}Ii.prototype=b,new C().i(Fi,`com.raquo.laminar.Seq$`,{c2:1});var Li;function Ri(){return Li||=new Fi,Li}function zi(e){Sr(),R(),e.et=Si()}function Bi(e){e.hi=ba()}function Vi(e){Hi(e,new K((e=>{e.fb.C.focus()})))}function Hi(e,t){return new Sc(new K((e=>{var n=new Ll(!e.a3.J.g()),r=new K((e=>{n.cb?n.cb=!1:t.d(e)}));ci().hc(e.a3,new K((e=>(t=>{r.d(new ha(e,t))}))(e)),!1)})),ba())}function Ui(){this.bg=null,this.eV=null,this.eW=!1,this.eU=null,Gi=this,this.bg=new rc(Ki()),new rc(Ki()),this.eU=new rc(Ki())}b=Ui.prototype=new x,b.constructor=Ui;function Wi(){}Wi.prototype=b,b.hB=(function(){return this.eW||=(this.eV=new ac(this),!0),this.eV}),new C().i(Ui,`com.raquo.laminar.codecs.package$`,{ca:1});var Gi;function Ki(){return Gi||=new Ui,Gi}function qi(e){e.hj=Ji(e,`class`,` `)}function Ji(e,t,n){var r=pc(new mc,t,Ki().bg);return new cc(r.ag,new K((e=>{var t=T().ir(e,r);return t===void 0?``:t})),new nf(((e,t)=>{T().dP(e,r,t)})),n)}function Yi(e){e.hh=Xi(e,`class`,` `)}function Xi(e,t,n){var r=new vc(t,Ki().bg,Y());return new cc(r.bX,new K((e=>{var t=T().iw(e,r);return t===void 0?``:t})),new nf(((e,t)=>{T().js(e,r,t)})),n)}function Zi(){this.f7=null,$i=this,W().r.dQ(),w().A(N().h(new(fc.r()).C([W().r.cn()]))),W().r.dQ(),w().A(N().h(new(fc.r()).C([W().r.cn(),W().r.j6()]))),W().r.hT(),w().A(N().h(new(fc.r()).C([W().r.cn(),W().r.j7()]))),this.f7=w().A(N().h(new(um.r()).C([`value`,`checked`])))}b=Zi.prototype=new x,b.constructor=Zi;function Qi(){}Qi.prototype=b,new C().i(Zi,`com.raquo.laminar.inputs.InputController$`,{cv:1});var $i;function ea(){return $i||=new Zi,$i}function ta(e,t){this.f9=null,this.f8=null,this.f9=e,this.f8=t}b=ta.prototype=new x,b.constructor=ta;function na(){}na.prototype=b,b.v=(function(e){return new ou(this.f9,this.f8.d(e),new af(((e,t,n)=>{T().ha(e,t,n)})))}),new C().i(ta,`com.raquo.laminar.keys.DerivedStyleProp`,{cx:1});function ra(e,t,n,r){this.bh=null,this.cP=!1,this.cO=!1,this.cN=null,this.bh=e,this.cP=t,this.cO=n,this.cN=r}b=ra.prototype=new x,b.constructor=ra;function ia(){}ia.prototype=b,b.iN=(function(){var e=new K((e=>{var t=this.cN.d(e);if(t.g())return Y();t.u();var n=T().iy(e.target);return new X(n===void 0?``:n)}));return new ra(this.bh,this.cP,this.cO,e)}),new C().i(ra,`com.raquo.laminar.keys.EventProcessor`,{cy:1});function aa(){}b=aa.prototype=new x,b.constructor=aa;function oa(){}oa.prototype=b,b.i7=(function(e,t,n){return new ra(e,t,n,new K((e=>new X(e))))}),new C().i(aa,`com.raquo.laminar.keys.EventProcessor$`,{cz:1});var sa;function ca(){return sa||=new aa,sa}function la(){}b=la.prototype=new x,b.constructor=la;function ua(){}ua.prototype=b;function da(){this.hk=null,this.hl=null,this.hm=null,this.hn=null,this.hk=`http://www.w3.org/2000/svg`,this.hl=`http://www.w3.org/1999/xlink`,this.hm=`http://www.w3.org/XML/1998/namespace`,this.hn=`http://www.w3.org/2000/xmlns/`}b=da.prototype=new x,b.constructor=da;function fa(){}fa.prototype=b,b.iQ=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Zf(e)}}),new C().i(da,`com.raquo.laminar.keys.SvgAttr$`,{cC:1});var pa;function ma(){return pa||=new da,pa}function ha(e,t){this.fb=null,this.fa=null,this.fb=e,this.fa=t}b=ha.prototype=new x,b.constructor=ha;function ga(){}ga.prototype=b,new C().i(ha,`com.raquo.laminar.lifecycle.MountContext`,{cD:1});var E=new C().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function _a(){this.ho=null,ya=this,this.ho=new bc}b=_a.prototype=new x,b.constructor=_a;function va(){}va.prototype=b,new C().i(_a,`com.raquo.laminar.modifiers.Modifier$`,{cH:1});var ya;function ba(){return ya||=new _a,ya}function xa(){this.cV=null,Ca=this,this.cV=new Oc(new K((e=>e)),wa()),new Oc(new K((e=>``+(e|0))),wa()),new Oc(new K((e=>``+ +e)),wa()),new Oc(new K((e=>``+!!e)),wa()),new Oc(new K((e=>e.jC())),wa())}b=xa.prototype=new x,b.constructor=xa;function Sa(){}Sa.prototype=b,new C().i(xa,`com.raquo.laminar.modifiers.RenderableText$`,{cN:1});var Ca;function wa(){return Ca||=new xa,Ca}function Ta(){}b=Ta.prototype=new x,b.constructor=Ta;function Ea(){}Ea.prototype=b,b.cc=(function(e,t,n){var r=new X(e);t.he(r),n!==void 0&&n.kk(e,t);var i=T().hI(e.bN(),t.bN());return i&&t.hb(r),i}),new C().i(Ta,`com.raquo.laminar.nodes.ParentNode$`,{cQ:1});var Da;function Oa(){return Da||=new Ta,Da}function ka(){}b=ka.prototype=new x,b.constructor=ka;function Aa(){}Aa.prototype=b,b.jI=(function(e,t){return ci().cs(e.a3,new K((n=>t.d(new ha(e,n)))),!0)}),new C().i(ka,`com.raquo.laminar.nodes.ReactiveElement$`,{cS:1});var ja;function Ma(){return ja||=new ka,ja}function Na(){Fa=this,w().A(N().jL(new cr(new Int32Array([0]))))}b=Na.prototype=new x,b.constructor=Na;function Pa(){}Pa.prototype=b,b.hA=(function(){return new K((e=>void 0))}),new C().i(Na,`com.raquo.laminar.tags.CustomHtmlTag$`,{cW:1});var Fa;function Ia(){return Fa||=new Na,Fa}function La(){}b=La.prototype=new x,b.constructor=La;function Ra(){}Ra.prototype=b,b.dr=(function(e){return W().r.dB().by(N().h(new(E.r()).C([W().r.gz().gJ(),W().r.gK().gt(),W().r.gO().co().v(8),nu(W().r,e,Dc())])))}),new C().i(La,`doc.ExampleGroups$package$`,{cY:1});var za;function Ba(){return za||=new La,za}function Va(){}b=Va.prototype=new x,b.constructor=Va;function Ha(){}Ha.prototype=b,b.ds=(function(e){return W().r.dB().by(N().h(new(E.r()).C([W().r.gz().gJ(),W().r.ii().jK(),W().r.gK().gt(),W().r.gO().co().v(16),nu(W().r,e,Dc())])))}),new C().i(Va,`doc.VerticalExamples$package$`,{cZ:1});var Ua;function Wa(){return Ua||=new Va,Ua}function Ga(){}b=Ga.prototype=new x,b.constructor=Ga;function Ka(){}Ka.prototype=b,b.hG=(function(){Ja().ib(),Ja().ic(),Ja().id(),Ja().ie()}),b.ib=(function(){var e=document.querySelector(`#example1`);if(!El().cd(e).g()){W();var t=W().r.et.hK(`1000`);new uu(e,W().r.dB().by(N().h(new(E.r()).C([W().r.jc().by(N().h(new(E.r()).C([tu(W().r,`The file is `,wa().cV),z().N(N().h(new(j.r()).C([new U((e=>e.V().dq(new Fh(t.cI,new U((e=>el().h6(e))),Y()))))])),N().h(new(E.r()).C([]))),tu(W().r,` in size.`,wa().cV)]))),Mu().N(N().h(new(j.r()).C([new U((e=>e.jG().j4())),new U((e=>(Mu().jE(),W().r).dQ().dq(t))),new U((e=>e.iJ().v(`Number to Format`)))])),N().h(new(E.r()).C([new ru((W(),ca().i7(W().r.cn(),!1,!1)).iN(),new K((e=>{t.ef.dM(e)}))),W().r.iO().co().v(180)])))]))))}}),b.ic=(function(){var e=document.querySelector(`#example2`);El().cd(e).g()||(W(),new uu(e,Ba().dr(N().h(new(Qp.r()).C([Wa().ds(N().h(new(Qp.r()).C([z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12)))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(1200)))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e5)))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e8)))])),N().h(new(E.r()).C([])))])))])))))}),b.id=(function(){var e=document.querySelector(`#example3`);El().cd(e).g()||(W(),new uu(e,Ba().dr(N().h(new(Qp.r()).C([Wa().ds(N().h(new(Qp.r()).C([z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12))),new U((e=>e.cr().cf()))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(1200))),new U((e=>e.cr().cf()))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e5))),new U((e=>e.cr().cf()))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e8))),new U((e=>e.cr().cf()))])),N().h(new(E.r()).C([])))])))])))))}),b.ie=(function(){var e=document.querySelector(`#example4`);El().cd(e).g()||(W(),new uu(e,Ba().dr(N().h(new(Qp.r()).C([Wa().ds(N().h(new(Qp.r()).C([z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e5))),new U((e=>e.dA().iL()))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e5))),new U((e=>e.dA().jv()))])),N().h(new(E.r()).C([]))),z().N(N().h(new(j.r()).C([new U((e=>e.V().v(12e5))),new U((e=>e.dA().iR()))])),N().h(new(E.r()).C([])))])))])))))}),new C().i(Ga,`examples.formatBytes.Main$package$`,{d0:1});var qa;function Ja(){return qa||=new Ga,qa}function Ya(e){try{Ja().hG()}catch(e){throw e}}function Xa(){this.hq=!1,this.bi=null,this.c5=null,this.fL=null,this.d5=!1,this.hp=0,this.hs=0,this.hr=null,Qa=this,this.hq=!0,this.bi=new ArrayBuffer(8),this.c5=new Int32Array(this.bi,0,2),new Float32Array(this.bi,0,2),this.fL=new Float64Array(this.bi,0,1),this.c5[0]=16909060,this.d5=(new Int8Array(this.bi,0,8)[0]|0)==1,this.hp=this.d5?0:1,this.hs=this.d5?1:0,this.hr=null}b=Xa.prototype=new x,b.constructor=Xa;function Za(){}Za.prototype=b,b.dL=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fL[0]=e,(this.c5[0]|0)^(this.c5[1]|0))}),new C().i(Xa,`java.lang.FloatingPointBits$`,{dh:1});var Qa;function $a(){return Qa||=new Xa,Qa}function eo(e,t){for(var n=D().a0(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=to(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new il(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new il(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(ol.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function to(e,t){var n=D().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=D().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=D().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=D().a0(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=D().a0(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[no(e,c[1]),lo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[no(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[no(e,d[1]),`<clinit>`]}function no(e,t){var n=io(e);if(Io().fR.call(n,t))var r=io(e)[t];else var r=xo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function ro(e){if(!((1&e.R)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d7=t,e.R=(1|e.R)<<24>>24}return e.d7}function io(e){return(1&e.R)<<24>>24?e.d7:ro(e)}function ao(e){if(!((2&e.R)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d8=t,e.R=(2|e.R)<<24>>24}return e.d8}function oo(e){return(2&e.R)<<24>>24?e.d8:ao(e)}function so(e){return(4&e.R)<<24>>24||(e.d6=Object.keys(oo(e)),e.R=(4|e.R)<<24>>24),e.d6}function co(e){return(4&e.R)<<24>>24?e.d6:so(e)}function lo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function uo(e,t){return t?t.arguments&&t.stack?fo(e,t):t.stack&&t.sourceURL?ho(e,t):t.stack&&t.number?mo(e,t):t.stack&&t.fileName?po(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?go(e,t):_o(e,t):go(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?vo(e,t):yo(e,t):t.stack&&!t.fileName?fo(e,t):bo(e,t):[]}function fo(e,t){return(t.stack+`
`).replace(D().a0(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(D().H(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(D().H(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(D().H(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(D().H(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function po(e,t){return t.stack.replace(D().H(`(?:\\n@:0)?\\s+$`,`m`),``).replace(D().H(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function mo(e,t){return t.stack.replace(D().H(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(D().H(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(D().H(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ho(e,t){return t.stack.replace(D().H(`\\[native code\\]\\n`,`m`),``).replace(D().H(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(D().H(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function go(e,t){for(var n=D().H(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function _o(e,t){for(var n=D().H(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function vo(e,t){for(var n=D().a0(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function yo(e,t){for(var n=D().a0(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(D().a0(`<anonymous function: (\\S+)>`),`$1`).replace(D().a0(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function bo(e,t){return[]}function xo(e,t,n){for(;;)if(t<(co(e).length|0)){var r=co(e)[t];if(n.startsWith(r))return``+oo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function So(){this.d7=null,this.d8=null,this.d6=null,this.R=0}b=So.prototype=new x,b.constructor=So;function Co(){}Co.prototype=b,b.ig=(function(e){return eo(this,uo(this,e))}),new C().i(So,`java.lang.StackTrace$`,{dr:1});var wo;function To(){return wo||=new So,wo}function Eo(){}b=Eo.prototype=new x,b.constructor=Eo;function Do(){}Do.prototype=b,b.a0=(function(e){return new RegExp(e)}),b.H=(function(e,t){return new RegExp(e,t)}),new C().i(Eo,`java.lang.StackTrace$StringRE$`,{ds:1});var Oo;function D(){return Oo||=new Eo,Oo}function ko(){this.fN=null,this.ht=null,jo=this,this.fN=new ph(!1),this.ht=new ph(!0)}b=ko.prototype=new x,b.constructor=ko;function Ao(){}Ao.prototype=b,new C().i(ko,`java.lang.System$Streams$`,{dw:1});var jo;function Mo(){return jo||=new ko,jo}function No(){this.fR=null,Fo=this,this.fR=Object.prototype.hasOwnProperty}b=No.prototype=new x,b.constructor=No;function Po(){}Po.prototype=b,new C().i(No,`java.lang.Utils$Cache$`,{dz:1});var Fo;function Io(){return Fo||=new No,Fo}function Lo(e,t){return e===t}function Ro(e){return 0}function zo(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aP)}var Bo=new C().i(0,`java.lang.Void`,{aP:1},(e=>e===void 0));function Vo(e,t){throw Lf(new zf,`argument type mismatch`)}function Ho(){}b=Ho.prototype=new x,b.constructor=Ho;function Uo(){}Uo.prototype=b,b.b8=(function(e){return e instanceof S||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr||e instanceof cr||e instanceof lr||e instanceof ur||e instanceof dr?e.a.length:Vo(this,e)}),new C().i(Ho,`java.lang.reflect.Array$`,{dB:1});var Wo;function Go(){return Wo||=new Ho,Wo}function Ko(){}b=Ko.prototype=new x,b.constructor=Ko;function qo(){}qo.prototype=b,b.gF=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.e,c=r,l=t.a[c],u=l.c,d=l.e;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),b.gE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gG=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gH=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),b.gD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new C().i(Ko,`java.util.Arrays$`,{dC:1});var Jo;function O(){return Jo||=new Ko,Jo}function k(e,t){this.c=0,this.e=0,this.c=e,this.e=t}b=k.prototype=new x,b.constructor=k;function Yo(){}Yo.prototype=b,b.f=(function(e){return e instanceof k&&this.c===e.c&&this.e===e.e}),b.m=(function(){return this.c^this.e}),b.o=(function(){return A().h5(this.c,this.e)}),b.kq=(function(){return this.c}),b.kp=(function(){return A().h4(this.c,this.e)}),b.ko=(function(){return A().bL(this.c,this.e)}),b.k4=(function(){return this.c<<24>>24}),b.km=(function(){return this.c<<16>>16}),b.kf=(function(){return this.c}),b.kg=(function(){return this}),b.ka=(function(){return A().h4(this.c,this.e)}),b.k8=(function(){return A().bL(this.c,this.e)}),b.k6=(function(e){return A().h2(this.c,this.e,e.c,e.e)}),b.k5=(function(e){return A().h2(this.c,this.e,e.c,e.e)}),b.k9=(function(e){return this.c===e.c&&this.e===e.e}),b.kj=(function(e){return!(this.c===e.c&&this.e===e.e)}),b.jW=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),b.jX=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),b.jS=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),b.jT=(function(e){var t=this.e,n=e.e;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),b.ks=(function(){return new k(~this.c,~this.e)}),b.jQ=(function(e){return new k(this.c|e.c,this.e|e.e)}),b.jP=(function(e){return new k(this.c&e.c,this.e&e.e)}),b.k3=(function(e){return new k(this.c^e.c,this.e^e.e)}),b.jY=(function(e){var t=this.c;return new k(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.e<<e)}),b.jV=(function(e){var t=this.e;return new k(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),b.jU=(function(e){var t=this.e;return new k(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),b.kr=(function(){var e=this.c,t=this.e;return new k(-e|0,e===0?-t|0:~t)}),b.k1=(function(e){var t=this.c,n=this.e,r=e.e,i=t+e.c|0;return new k(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),b.jZ=(function(e){var t=this.c,n=this.e,r=e.e,i=t-e.c|0;return new k(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),b.k2=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new k(u,(((Math.imul(t,e.e)+Math.imul(this.e,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),b.jR=(function(e){var t=A();return new k(t.i4(this.c,this.e,e.c,e.e),t.s)}),b.k0=(function(e){var t=A();return new k(t.jh(this.c,this.e,e.c,e.e),t.s)}),new C().i(k,`org.scalajs.linker.runtime.RuntimeLong`,{aQ:1});function Xo(e,t,n){return-2097152&n?$o(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Zo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.s=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.s=0,n>>>o|0}else return $o(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.s=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.s=s/4294967296|0,s|0}}function Qo(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.s=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.s=n&(-1+i|0),t):$o(e,t,n,r,i,1)|0;if(-2097152&i)return e.s=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.s=a/4294967296|0,a|0}function $o(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.s=ee,m;if(a===1)return e.s=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function es(){this.s=0}b=es.prototype=new x,b.constructor=es;function ts(){}ts.prototype=b,b.h5=(function(e,t){return t===e>>31?``+e:t<0?`-`+Xo(this,-e|0,e===0?-t|0:~t):Xo(this,e,t)}),b.bL=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),b.h4=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),b.kc=(function(e){return new k(e,e>>31)}),b.kb=(function(e){return new k(this.h3(e),this.s)}),b.h3=(function(e){if(e<-0x8000000000000000)return this.s=-2147483648,0;if(e>=0x8000000000000000)return this.s=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.s=e<0&&t!==0?-1+n|0:n,t}),b.h2=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),b.i4=(function(e,t,n,r){if((n|r)===0)throw new Ff(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.s=0,-2147483648;var i=Vn(e,n);return this.s=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.s=-1,-1;else return this.s=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Zo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.s;return this.s=l===0?-u|0:~u,-l|0}}),b.jh=(function(e,t,n,r){if((n|r)===0)throw new Ff(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Hn(e,n);return this.s=i>>31,i}else return this.s=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.s=0,0;else return this.s=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Qo(this,a,o,s,c);if(t<0){var u=this.s;return this.s=l===0?-u|0:~u,-l|0}else return l}}),new C().i(es,`org.scalajs.linker.runtime.RuntimeLong$`,{dE:1});var ns;function A(){return ns||=new es,ns}var rs=new C().i(1,`scala.Function0`,{ac:1}),j=new C().i(1,`scala.Function1`,{e:1});function is(){}b=is.prototype=new x,b.constructor=is;function as(){}as.prototype=b;function os(){this.fT=null,this.c8=null,cs=this,this.fT=new U((e=>ls().fT)),this.c8=new Wd}b=os.prototype=new x,b.constructor=os;function ss(){}ss.prototype=b,new C().i(os,`scala.PartialFunction$`,{dP:1});var cs;function ls(){return cs||=new os,cs}function us(){this.fW=null,fs=this,this.fW=new U((e=>ps().fW))}b=us.prototype=new x,b.constructor=us;function ds(){}ds.prototype=b,b.ik=(function(e,t){var n=Go().b8(e),r=0;if(e instanceof S)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof dr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof lr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof ar)for(;r<n;)t.d($n(e.a[r])),r=1+r|0;else if(e instanceof or)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof sr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof ir)for(;r<n;)t.d(e.a[r]),r=1+r|0;else throw new Zf(e)}),new C().i(us,`scala.collection.ArrayOps$`,{dV:1});var fs;function ps(){return fs||=new us,fs}function ms(e,t){for(var n=e.n();n.t();)t.d(n.j())}function hs(e,t,n,r){return e.B()===0?``+t+r:e.bu(a_(new o_),t,n,r).M.q}function gs(e,t,n,r,i){var a=t.M;n.length!==0&&(a.q=``+a.q+n);var o=e.n();if(o.t()){var s=o.j();for(a.q=``+a.q+s;o.t();){a.q=``+a.q+r;var c=o.j();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function _s(e,t){this.g0=null,this.bo=null,this.g0=e,this.bo=t}b=_s.prototype=new x,b.constructor=_s;function vs(){}vs.prototype=b,b.iA=(function(){return this.g0.a9().n()}),new C().i(_s,`scala.collection.Iterator$ConcatIteratorCell`,{ed:1});function ys(){this.g1=null,xs=this,this.g1=new U((e=>Ss().g1))}b=ys.prototype=new x,b.constructor=ys;function bs(){}bs.prototype=b,b.hW=(function(e,t){return lm(e,t)>=0}),new C().i(ys,`scala.collection.StringOps$`,{el:1});var xs;function Ss(){return xs||=new ys,xs}function Cs(){}b=Cs.prototype=new x,b.constructor=Cs;function ws(){}ws.prototype=b,b.E=(function(e,t){return e===t||(rl(e)?this.ia(e,t):e instanceof Fn?this.i8(e,t):e===null?t===null:Rn(e,t))}),b.ia=(function(e,t){if(rl(t))return this.i9(e,t);if(t instanceof Fn){if(typeof e==`number`)return+e===t.c;if(e instanceof k){var n=tr(e),r=n.c,i=n.e,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Rn(e,t)}else return e===null?t===null:Rn(e,t)}),b.i9=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof k){var r=tr(t);return n===A().bL(r.c,r.e)}else return!1}else if(e instanceof k){var i=tr(e),a=i.c,o=i.e;if(t instanceof k){var s=tr(t),c=s.c,l=s.e;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return A().bL(a,o)===u}else return!1}else return e===null?t===null:Rn(e,t)}),b.i8=(function(e,t){if(t instanceof Fn)return e.c===t.c;if(rl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof k){var n=tr(t),r=n.c,i=n.e,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Rn(t,e)}else return e===null&&t===null}),new C().i(Cs,`scala.runtime.BoxesRunTime$`,{eP:1});var Ts;function M(){return Ts||=new Cs,Ts}var Es=new C().i(0,`scala.runtime.Null$`,{eS:1});function Ds(){}b=Ds.prototype=new x,b.constructor=Ds;function Os(){}Os.prototype=b,b.b4=(function(e,t){if(e instanceof S||e instanceof cr||e instanceof dr||e instanceof lr||e instanceof ur)return e.a[t];if(e instanceof ar)return $n(e.a[t]);if(e instanceof or||e instanceof sr||e instanceof ir)return e.a[t];throw e===null?new q:new Zf(e)}),b.hN=(function(e,t,n){if(e instanceof S)e.a[t]=n;else if(e instanceof cr)e.a[t]=n|0;else if(e instanceof dr)e.a[t]=+n;else if(e instanceof lr)e.a[t]=tr(n);else if(e instanceof ur)e.a[t]=Math.fround(n);else if(e instanceof ar)e.a[t]=er(n);else if(e instanceof or)e.a[t]=n|0;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ir)e.a[t]=!!n;else if(e===null)throw new q;else throw new Zf(e)}),b.dv=(function(e){return hs(e.Z(),e.Q()+`(`,`,`,`)`)}),b.h=(function(e){return e===null?null:e.a.length===0?Tm(km()):new Sg(e)}),b.jL=(function(e){return e===null?null:new vg(e)}),new C().i(Ds,`scala.runtime.ScalaRunTime$`,{eT:1});var ks;function N(){return ks||=new Ds,ks}function As(){}b=As.prototype=new x,b.constructor=As;function js(){}js.prototype=b,b.b=(function(e,t){var n=this.cl(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.cl=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.l=(function(e,t){return this.hP(e^t)}),b.hP=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.b9=(function(e){var t=e.c,n=e.e;return n===t>>31?t:t^n}),b.Y=(function(e){var t=Un(e);if(t===e)return t;var n=A(),r=n.h3(e),i=n.s;return A().bL(r,i)===e?r^i:$a().dL(e)}),b.y=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.Y(+e);if(e instanceof k){var t=tr(e);return this.b9(new k(t.c,t.e))}else return zn(e)}),b.aM=(function(e){throw Bf(new Vf,``+e)}),new C().i(As,`scala.runtime.Statics$`,{eV:1});var Ms;function P(){return Ms||=new As,Ms}function Ns(){}b=Ns.prototype=new x,b.constructor=Ns;function Ps(){}Ps.prototype=b,b.hL=(function(e){return e}),new C().i(Ns,`scala.scalajs.js.defined$`,{f1:1});var Fs;function Is(){return Fs||=new Ns,Fs}function Ls(){}b=Ls.prototype=new x,b.constructor=Ls;function Rs(){}Rs.prototype=b,b.ju=(function(e,t){return setTimeout((()=>{t.a9()}),e)}),new C().i(Ls,`scala.scalajs.js.timers.package$`,{f2:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(){}b=Vs.prototype=new x,b.constructor=Vs;function Hs(){}Hs.prototype=b,b.jD=(function(e){var t=[];return e.a5(new U((e=>t.push(e)|0))),t}),new C().i(Vs,`scala.scalajs.runtime.Compat$`,{fb:1});var Us;function Ws(){return Us||=new Vs,Us}function Gs(){}b=Gs.prototype=new x,b.constructor=Gs;function Ks(){}Ks.prototype=b,b.jw=(function(e){var t=`Illegal command line`+(e.gP()===0?``:e.gP()===1?` after first argument`:` after `+e.gP()+` arguments`)+`: `+e.kh();vl().ja().iH(t+`
`)}),new C().i(Gs,`scala.util.CommandLineParser$`,{fd:1});function qs(e){this.dp=null,this.dp=e}b=qs.prototype=new x,b.constructor=qs;function Js(){}Js.prototype=b,b.o=(function(){return`DynamicVariable(`+this.dp+`)`}),new C().i(qs,`scala.util.DynamicVariable`,{ff:1});function Ys(){}b=Ys.prototype=new x,b.constructor=Ys;function Xs(){}Xs.prototype=b,b.ce=(function(e){return!0}),new C().i(Ys,`scala.util.control.NonFatal$`,{fh:1});var Zs;function Qs(){return Zs||=new Ys,Zs}function $s(){}b=$s.prototype=new x,b.constructor=$s;function ec(){}ec.prototype=b,b.b=(function(e,t){var n=this.cl(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.cl=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.l=(function(e,t){return this.I(e^t)}),b.I=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.aO=(function(e,t,n){var r=e.O();if(r===0)return J(e.Q());var i=t;n||(i=this.b(i,J(e.Q())));for(var a=0;a<r;)i=this.b(i,P().y(e.P(a))),a=1+a|0;return this.l(i,r)}),b.jH=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.t();){var s=o.j(),c=P().y(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.cl(l,a),this.l(l,i)}),b.j9=(function(e,t){var n=e.n(),r=t;if(!n.t())return this.l(r,0);var i=n.j();if(!n.t())return this.l(this.b(r,P().y(i)),1);var a=n.j(),o=P().y(i);r=this.b(r,o);for(var s=r,c=P().y(a),l=c-o|0,u=2;n.t();){r=this.b(r,c);var d=P().y(n.j());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.t();)r=this.b(r,P().y(n.j())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.I(this.b(this.b(s,l),c))}),b.gh=(function(e,t){var n=t,r=Go().b8(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,P().y(N().b4(e,0))),1);default:var i=P().y(N().b4(e,0));n=this.b(n,i);for(var a=n,o=P().y(N().b4(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=P().y(N().b4(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,P().y(N().b4(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.jf=(function(e,t,n,r){return this.I(this.b(this.b(this.b(r,e),t),n))}),b.iC=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,P().y(e.p(0))),1);default:var i=P().y(e.p(0));n=this.b(n,i);for(var a=n,o=P().y(e.p(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=P().y(e.p(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,P().y(e.p(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.iK=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.ab(),u=c.a1(),d=P().y(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.jf(s,a,o,t):this.l(r,n)}),b.gq=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gi=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gj=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gk=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,P().Y(e.a[0])),1);default:var i=P().Y(e.a[0]);n=this.b(n,i);for(var a=n,o=P().Y(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=P().Y(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,P().Y(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gl=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,P().Y(e.a[0])),1);default:var i=P().Y(e.a[0]);n=this.b(n,i);for(var a=n,o=P().Y(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=P().Y(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,P().Y(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gm=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gn=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,P().b9(new k(a.c,a.e))),1);default:var o=e.a[0],s=P().b9(new k(o.c,o.e));n=this.b(n,s);for(var c=n,l=e.a[1],u=P().b9(new k(l.c,l.e)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=P().b9(new k(p.c,p.e));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,P().b9(new k(te.c,te.e))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.I(this.b(this.b(c,d),u))}}),b.go=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.I(this.b(this.b(a,s),o))}}),b.gp=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.I(this.b(this.b(i,o),a))}});function tc(e){this.aU=null,this.e9=null,this.cE=!1,this.e9=e,li(this),this.cE=!1}b=tc.prototype=new x,b.constructor=tc;function nc(){}nc.prototype=b,b.jb=(function(e){this.cE?(pi(e),this.e9.a9()):fi(this,e)}),b.iI=(function(){ui(this),this.cE=!0}),new C().i(tc,`com.raquo.airstream.ownership.OneTimeOwner`,{bN:1,bO:1});function rc(e){if(e===null)throw new q}b=rc.prototype=new x,b.constructor=rc;function ic(){}ic.prototype=b,b.b6=(function(e){return e}),b.cg=(function(e){return e}),new C().i(rc,`com.raquo.laminar.codecs.package$$anon$2`,{cb:1,a8:1});function ac(e){if(e===null)throw new q}b=ac.prototype=new x,b.constructor=ac;function oc(){}oc.prototype=b,b.i3=(function(e){return el().h6(e)}),b.cg=(function(e){return this.i3(e)}),b.b6=(function(e){return``+ +e}),new C().i(ac,`com.raquo.laminar.codecs.package$$anon$4`,{cc:1,a8:1});function sc(e){return new ta(e,new K((e=>e+`px`)))}function cc(e,t,n,r){}b=cc.prototype=new ua,b.constructor=cc;function lc(){}lc.prototype=b,new C().i(cc,`com.raquo.laminar.keys.CompositeKey`,{cw:1,v:1});function uc(e){this.bW=null,this.bW=e}b=uc.prototype=new ua,b.constructor=uc;function dc(){}dc.prototype=b;var fc=new C().i(uc,`com.raquo.laminar.keys.EventProp`,{cA:1,v:1});function pc(e,t,n){return e.ag=t,e.aV=n,e}function mc(){this.ag=null,this.aV=null}b=mc.prototype=new ua,b.constructor=mc;function hc(){}hc.prototype=b,b.v=(function(e){return new ou(this,e,new af(((e,t,n)=>{T().dP(e,t,n)})))}),b.dq=(function(e){return new cu(this,e.cp(),new af(((e,t,n)=>{T().dP(e,this,t)})))}),new C().i(mc,`com.raquo.laminar.keys.HtmlAttr`,{a2:1,v:1});function gc(e,t){this.a2=null,this.cQ=null,this.a2=e,this.cQ=t}b=gc.prototype=new ua,b.constructor=gc;function _c(){}_c.prototype=b,b.dq=(function(e){var t=this.a2===`value`?new af(((e,t,n)=>{var r=this.cQ.b6(t),i=T().it(e,this);i!==void 0&&M().E(r,i)||T().h9(e,this,r)})):new af(((e,t,n)=>{T().jq(e,this,t)}));return new cu(this,e.cp(),t)}),new C().i(gc,`com.raquo.laminar.keys.HtmlProp`,{av:1,v:1});function vc(e,t,n){this.cS=null,this.cR=null,this.bX=null,this.bY=null,this.cS=e,this.cR=t;var r=n.g()?Y():new X(n.u()+`:`+e);this.bX=r.g()?e:r.u(),this.bY=n.g()?Y():new X(ma().iQ(n.u()))}b=vc.prototype=new ua,b.constructor=vc;function yc(){}yc.prototype=b,new C().i(vc,`com.raquo.laminar.keys.SvgAttr`,{cB:1,v:1});function bc(){}b=bc.prototype=new x,b.constructor=bc;function xc(){}xc.prototype=b,b.a8=(function(e){}),new C().i(bc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cI:1,T:1});function Sc(e,t){if(this.fi=null,this.fi=e,t===null)throw new q}b=Sc.prototype=new x,b.constructor=Sc;function Cc(){}Cc.prototype=b,b.a8=(function(e){var t=Hr(),n=(()=>{this.fi.d(e)});if(Hr(),t.z)n();else{t.z=!0;try{n()}finally{t.z=!1,Rr(t)}}}),new C().i(Sc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cJ:1,T:1});function wc(){}b=wc.prototype=new x,b.constructor=wc;function Tc(){}Tc.prototype=b,new C().i(wc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cL:1,cK:1});var Ec;function Dc(){return Ec||=new wc,Ec}function Oc(e,t){if(this.fj=null,this.fj=e,t===null)throw new q}b=Oc.prototype=new x,b.constructor=Oc;function kc(){}kc.prototype=b,b.hO=(function(e){return this.fj.d(e)}),new C().i(Oc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cO:1,cM:1});function Ac(e){e.gx(new ei(new G((()=>{throw B(new V,`Attempting to use owner of unmounted element: `+hs(T().i2(e.bN(),(T(),r_())),``,` > `,``))}))))}function jc(e,t,n){return e.d1=t,e}function Mc(){this.d1=null}b=Mc.prototype=new x,b.constructor=Mc;function Nc(){}Nc.prototype=b,b.dK=(function(){return this.d1}),b.by=(function(e){var t=this.hS();return e.a5(new K((e=>{e.a8(t)}))),t}),b.hS=(function(){return new Xp(this,T().hY(this))}),new C().i(Mc,`com.raquo.laminar.tags.HtmlTag`,{aA:1,aa:1});function Pc(e,t){this.fq=null,this.fq=e}b=Pc.prototype=new x,b.constructor=Pc;function Fc(){}Fc.prototype=b,new C().i(Pc,`com.raquo.laminar.tags.SvgTag`,{cX:1,aa:1});function Ic(){}b=Ic.prototype=new x,b.constructor=Ic;function Lc(){}Lc.prototype=b,b.b6=(function(e){return e}),b.cg=(function(e){return e}),new C().i(Ic,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{d6:1,a8:1});function Rc(e,t){return e.c1=t,e.gb(),e}function zc(){this.c1=null,this.c0=null,this.c2=!1,this.c3=null,this.c4=!1}b=zc.prototype=new x,b.constructor=zc;function Bc(){}Bc.prototype=b,b.jA=(function(){return this.c2||=(this.c0=new fu(this.c1,Ia().hA(),(Ia(),void 0)),!0),this.c0}),b.N=(function(e,t){var n=this.jA().by(N().h(new(E.r()).C([])));return e.a5(new K((e=>{e.d(this).a8(n)}))),t.a5(new K((e=>{e.a8(n)}))),n}),b.jE=(function(){return this.c4||=(this.c3=new Nu,!0),this.c3});function Vc(){}b=Vc.prototype=new x,b.constructor=Vc;function Hc(){}Hc.prototype=b,b.jF=(function(e){if(!(e>=0&&e<=1114111))throw Rf(new zf);return String.fromCodePoint(e)}),new C().i(Vc,`java.lang.Character$`,{dd:1,a:1});var Uc;function Wc(){return Uc||=new Vc,Uc}function Gc(e){return(1&e.ah)<<24>>24||(e.d4=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.ah=(1|e.ah)<<24>>24),e.d4}function Kc(e){return(1&e.ah)<<24>>24?e.d4:Gc(e)}function qc(e){return(2&e.ah)<<24>>24||(e.d3=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.ah=(2|e.ah)<<24>>24),e.d3}function Jc(e){return(2&e.ah)<<24>>24?e.d3:qc(e)}function Yc(e,t){var n=Jc(e).exec(t);n===null&&Xc(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Xc(t);var s=e.jd(i,a,o,15);return r===`-`?-s:s}function Xc(e){throw new sm(`For input string: "`+e+`"`)}function Zc(){this.d4=null,this.d3=null,this.ah=0}b=Zc.prototype=new x,b.constructor=Zc;function Qc(){}Qc.prototype=b,b.h6=(function(e){var t=Kc(this).exec(e);return t===null?Yc(this,e):+parseFloat(t[1])}),b.jd=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var ee=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,te=+parseInt(m,16),ne=Un(+parseInt(n,10))+ee|0,re=ne/3|0,ie=+(2**re),ae=ne-(re<<1)|0;return te*ie*ie*+(2**ae)}),new C().i(Zc,`java.lang.Double$`,{df:1,a:1});var $c;function el(){return $c||=new Zc,$c}function tl(){}b=tl.prototype=new x,b.constructor=tl;function nl(){}nl.prototype=b;function rl(e){return e instanceof tl||typeof e==`number`||e instanceof k}function il(e,t,n,r,i){this.aY=null,this.bk=null,this.aZ=null,this.b0=0,this.aX=0,this.aY=e,this.bk=t,this.aZ=n,this.b0=r,this.aX=i}b=il.prototype=new x,b.constructor=il;function al(){}al.prototype=b,b.f=(function(e){return e instanceof il&&this.aZ===e.aZ&&this.b0===e.b0&&this.aX===e.aX&&this.aY===e.aY&&this.bk===e.bk}),b.o=(function(){var e=``;return this.aY!==`<jscode>`&&(e=``+e+this.aY+`.`),e=``+e+this.bk,this.aZ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aZ,this.b0>=0&&(e=e+`:`+this.b0,this.aX>=0&&(e=e+`:`+this.aX)),e+=`)`),e}),b.m=(function(){return J(this.aY)^J(this.bk)^J(this.aZ)^this.b0^this.aX});var ol=new C().i(il,`java.lang.StackTraceElement`,{aN:1,a:1});function sl(){}b=sl.prototype=new x,b.constructor=sl;function cl(){}cl.prototype=b,b.iS=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new dm;for(var i=``,a=t;a!==r;)i+=``+Wn(e.a[a]),a=1+a|0;return i}),new C().i(sl,`java.lang.String$`,{dt:1,a:1});var ll;function ul(){return ll||=new sl,ll}function F(e,t,n,r,i){return e.fP=t,e.fQ=i,i&&e.ih(),e}var I=class extends Error{constructor(){super(),this.fP=null,this.fQ=!1,this.fO=null,this.c6=null}gQ(e){return this}bH(){return this.fP}ih(){var e=this instanceof Z?this.D:this;return this.fO=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}iv(){return this.c6===null&&(this.fQ?this.c6=To().ig(this.fO):this.c6=new(ol.r()).C(0)),this.c6}o(){var e=Ln(this),t=this.bH();return t===null?e:e+`: `+t}m(){return nr.prototype.m.call(this)}f(e){return nr.prototype.f.call(this,e)}get message(){var e=this.bH();return e===null?``:e}get name(){return Ln(this)}toString(){return this.o()}};function dl(){}b=dl.prototype=new x,b.constructor=dl;function fl(){}fl.prototype=b,b.gL=(function(e,t){var n=e.B();if(n>-1){for(var r=t.iT(n),i=e.n(),a=0;a<n;)N().hN(r,a,i.j()),a=1+a|0;return r}else{var o=null,s=t.jm(),c=s===mr.l();o=[];for(var l=e.n();l.t();){var u=l.j(),d=c?er(u):u===null?s.av.z:u;o.push(d)}return(s===pr.l()?Bo.l():s===Es.l()||s===od.l()?fr.l():s).av.r().w(o)}}),b.gI=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!M().E(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new C().i(dl,`scala.Array$`,{dF:1,a:1});var pl;function ml(){return pl||=new dl,pl}function hl(){this.fS=null,_l=this,this.fS=new qs(Mo().fN)}b=hl.prototype=new x,b.constructor=hl;function gl(){}gl.prototype=b,b.ja=(function(){return this.fS.dp}),new C().i(hl,`scala.Console$`,{dG:1,eB:1});var _l;function vl(){return _l||=new hl,_l}function yl(){}b=yl.prototype=new x,b.constructor=yl;function bl(){}bl.prototype=b,b.o=(function(){return`<function1>`});function xl(){}b=xl.prototype=new as,b.constructor=xl;function Sl(){}Sl.prototype=b,b.jM=(function(e){return e===null?null:e.a.length===0?Nm().g2:new Kg(e)});function Cl(){}b=Cl.prototype=new x,b.constructor=Cl;function wl(){}wl.prototype=b,b.cd=(function(e){return e===null?Y():new X(e)}),new C().i(Cl,`scala.Option$`,{dO:1,a:1});var Tl;function El(){return Tl||=new Cl,Tl}function Dl(e,t,n){return e.aN(t)?e.d(t):n.d(t)}function Ol(e,t){if(t===e)e.gd(Ep().gM(t));else for(var n=t.n();n.t();)e.dx(n.j());return e}function kl(){}b=kl.prototype=new x,b.constructor=kl;function Al(){}Al.prototype=b,b.o=(function(){return`<function0>`});function jl(){}b=jl.prototype=new x,b.constructor=jl;function Ml(){}Ml.prototype=b,b.o=(function(){return`<function1>`});function Nl(){}b=Nl.prototype=new x,b.constructor=Nl;function Pl(){}Pl.prototype=b,b.o=(function(){return`<function2>`});function Fl(){}b=Fl.prototype=new x,b.constructor=Fl;function Il(){}Il.prototype=b,b.o=(function(){return`<function3>`});function Ll(e){this.cb=!1,this.cb=e}b=Ll.prototype=new x,b.constructor=Ll;function Rl(){}Rl.prototype=b,b.o=(function(){return``+this.cb}),new C().i(Ll,`scala.runtime.BooleanRef`,{eO:1,a:1});function zl(e){this.br=0,this.br=e}b=zl.prototype=new x,b.constructor=zl;function Bl(){}Bl.prototype=b,b.o=(function(){return``+this.br}),new C().i(zl,`scala.runtime.IntRef`,{eQ:1,a:1});function Vl(){this.w=0,this.ga=0,this.hz=0,this.hy=0,Ul=this,this.w=J(`Seq`),this.ga=J(`Map`),this.hz=J(`Set`),this.hy=this.jH(r_(),this.ga)}b=Vl.prototype=new ec,b.constructor=Vl;function Hl(){}Hl.prototype=b,b.jn=(function(e){return Vh(e)?this.iC(e,this.w):e instanceof Ag?this.iK(e,this.w):this.j9(e,this.w)}),new C().i(Vl,`scala.util.hashing.MurmurHash3$`,{fj:1,fi:1});var Ul;function L(){return Ul||=new Vl,Ul}var Wl=class extends I{};function Gl(){this.cu=null,this.dR=null,this.dS=null,ql=this,this.cu=Ep().gf(N().h(new(j.r()).C([]))),this.dR=new K((e=>{try{console.error(this.b7(e)+`
`+this.iu(e,`
`))}catch(e){var t=e instanceof I?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dS=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.D:t})),this.jg(this.dR)}b=Gl.prototype=new x,b.constructor=Gl;function Kl(){}Kl.prototype=b,b.b7=(function(e){try{var t=e.bH()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return In(e).dE()+`: `+t}),b.iu=(function(e,t){try{return hs(Vu().jM(e.iv()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.jg=(function(e){this.cu.dx(e)}),b.a6=(function(e){for(var t=this.cu.n();t.t();){var n=t.j();try{n.d(e)}catch(e){var r=e instanceof I?e:new Z(e),i=this.dS;if(n===null?i===null:n.f(i))throw r instanceof Z?r.D:r;console.warn(`Error processing an unhandled error callback:`),Bs().ju(0,new G((e=>(()=>{throw e instanceof Z?e.D:e}))(r)))}}}),new C().i(Gl,`com.raquo.airstream.core.AirstreamError$`,{bz:1,ez:1,eA:1});var ql;function R(){return ql||=new Gl,ql}function Jl(e){e.cj(!0),e.dJ(void 0)}function Yl(e,t,n){return uf(e,Sr().hg(t,ls().c8,!0),n)}function Xl(e,t){e.dF()?mf(e,t):$l(e).push(new G((()=>{mf(e,t)})))}function Zl(e,t){e.dF()?pf(e,t):$l(e).push(new G((()=>{pf(e,t)})))}function Ql(e){return vf(e)>0}function $l(e){var t=e.dI();if(t===void 0){var n=w().A(N().h(new(rs.r()).C([])));return e.dJ(n),n}else return t}var eu=new C().i(1,`com.raquo.airstream.core.Observer`,{a5:1,a1:1,V:1});function tu(e,t,n){return new jd(n.hO(t))}function nu(e,t,n){return new Sc(new K((e=>{(Ri(),new Ni(t,null,null)).a5(new K((e=>(t=>{Oa().cc(e,t,void 0)}))(e)))})),ba())}function ru(e,t){this.aW=null,this.cT=null,this.cU=null,this.aW=e,this.cT=(n=>{var r=e.cN.d(n);r.g()||t.d(r.u())}),this.cU=(()=>{var e=null;e=this;var t={};if(e===null)throw new q;return t.capture=e.aW.cP,t.passive=e.aW.cO,t})()}b=ru.prototype=new x,b.constructor=ru;function iu(){}iu.prototype=b,b.a8=(function(e){this.hQ(e,!1)}),b.hQ=(function(e,t){if(Df(e,this)===-1){var n=new K((t=>(T().hC(e.C,this),new mi(t.fa,new G((()=>{var t=Df(e,this);t!==-1&&(Ef(e,t),T().ji(e.C,this))})))))),r=t?Ma().jI(e,n):ci().cs(e.a3,new K((t=>n.d(new ha(e,t)))),!1);return Tf(e,this,t),r}else{var i=new K((e=>void 0));return ci().hc(e.a3,new K((t=>{i.d(new ha(e,t))})),!1)}}),b.o=(function(){return`EventListener(`+this.aW.bh.bW+`)`});var au=new C().i(ru,`com.raquo.laminar.modifiers.EventListener`,{cE:1,T:1,aw:1});function ou(e,t,n){this.fd=null,this.fe=null,this.fc=null,this.fd=e,this.fe=t,this.fc=n}b=ou.prototype=new x,b.constructor=ou;function su(){}su.prototype=b,b.a8=(function(e){this.fc.ge(e,this.fd,this.fe)}),new C().i(ou,`com.raquo.laminar.modifiers.KeySetter`,{cF:1,T:1,cP:1});function cu(e,t,n){this.ff=null,this.fh=null,this.fg=null,this.ff=e,this.fh=t,this.fg=n}b=cu.prototype=new x,b.constructor=cu;function lu(){}lu.prototype=b,b.a8=(function(e){this.hR(e)}),b.hR=(function(e){e.j5(this.ff);var t=this.fh,n=new K((t=>{this.fg.ge(e,t,this)}));return ci().jx(e.a3,t,n)}),new C().i(cu,`com.raquo.laminar.modifiers.KeyUpdater`,{cG:1,T:1,aw:1});function uu(e,t){if(this.cZ=null,this.fl=null,this.fm=null,this.fl=t,Ac(this),e===null)throw B(new V,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!T().iG(e,document))throw B(new V,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.fm=e,this.iP()}b=uu.prototype=new x,b.constructor=uu;function du(){}du.prototype=b,b.ci=(function(){return this.cZ}),b.gx=(function(e){this.cZ=e}),b.iP=(function(){return this.cZ.gc(),Oa().cc(this,this.fl,void 0)}),b.bN=(function(){return this.fm}),new C().i(uu,`com.raquo.laminar.nodes.RootNode`,{cU:1,a9:1,ay:1});function fu(e,t,n){this.d1=null,this.fp=null,this.fo=null,this.fp=e,this.fo=n,jc(this,e,!1)}b=fu.prototype=new Nc,b.constructor=fu;function pu(){}pu.prototype=b,b.dK=(function(){return this.fp}),b.hF=(function(){var e=this.fo;return e===void 0?void 0:e.map((e=>e.jN.a2))}),new C().i(fu,`com.raquo.laminar.tags.CustomHtmlTag`,{az:1,aA:1,aa:1});function mu(){this.ag=null,this.aV=null,this.fr=null,this.fs=!1,this.ft=null,this.fu=!1,this.fv=null,this.fw=!1,pc(this,`display`,new Ic)}b=mu.prototype=new hc,b.constructor=mu;function hu(){}hu.prototype=b,b.iL=(function(){return this.fs||=(this.fr=_u().v(`long`),!0),this.fr}),b.iR=(function(){return this.fu||=(this.ft=_u().v(`narrow`),!0),this.ft}),b.jv=(function(){return this.fw||=(this.fv=_u().v(`short`),!0),this.fv}),new C().i(mu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DisplayFormat$`,{d1:1,a2:1,v:1});var gu;function _u(){return gu||=new mu,gu}function vu(){this.ag=null,this.aV=null,this.fx=null,this.fy=!1,pc(this,`unit`,new Ic)}b=vu.prototype=new hc,b.constructor=vu;function yu(){}yu.prototype=b,b.cf=(function(){return this.fy||=(this.fx=xu().v(`bit`),!0),this.fx}),new C().i(vu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$FormatBytesUnit$`,{d2:1,a2:1,v:1});var bu;function xu(){return bu||=new vu,bu}function Su(){this.ag=null,this.aV=null,this.fz=null,this.fA=!1,pc(this,`type`,new Ic)}b=Su.prototype=new hc,b.constructor=Su;function Cu(){}Cu.prototype=b,b.j4=(function(){return this.fA||=(this.fz=Tu().v(`number`),!0),this.fz}),new C().i(Su,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{d3:1,a2:1,v:1});var wu;function Tu(){return wu||=new Su,wu}function Eu(){this.c1=null,this.c0=null,this.c2=!1,this.c3=null,this.c4=!1,this.fF=null,this.fG=!1,this.fD=null,this.fE=!1,this.fB=null,this.fC=!1,Rc(this,`wa-format-bytes`)}b=Eu.prototype=new Bc,b.constructor=Eu;function Du(){}Du.prototype=b,b.V=(function(){return this.fG||=(this.fF=(W(),pc(new mc,`value`,Ki().hB())),!0),this.fF}),b.cr=(function(){return this.fE||=(this.fD=xu(),!0),this.fD}),b.dA=(function(){return this.fC||=(this.fB=_u(),!0),this.fB}),b.gb=(function(){return jt}),new C().i(Eu,`io.github.nguyenyou.webawesome.laminar.FormatBytes$`,{d4:1,aC:1,aB:1});var Ou;function z(){return Ou||=new Eu,Ou}function ku(){this.c1=null,this.c0=null,this.c2=!1,this.c3=null,this.c4=!1,this.fJ=null,this.fK=!1,this.fH=null,this.fI=!1,Rc(this,`wa-input`)}b=ku.prototype=new Bc,b.constructor=ku;function Au(){}Au.prototype=b,b.jG=(function(){return this.fK||=(this.fJ=Tu(),!0),this.fJ}),b.iJ=(function(){return this.fI||=(this.fH=(W(),pc(new mc,`label`,Ki().bg)),!0),this.fH}),b.gb=(function(){return Nn}),new C().i(ku,`io.github.nguyenyou.webawesome.laminar.Input$`,{d5:1,aC:1,aB:1});var ju;function Mu(){return ju||=new ku,ju}function Nu(){}b=Nu.prototype=new bl,b.constructor=Nu;function Pu(){}Pu.prototype=b,b.d=(function(e){return W().r}),new C().i(Nu,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{d7:1,dH:1,e:1});function Fu(e){if(e.av.Z)return e.av.Q().dE()+`[]`;for(var t=e.av.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Iu(e){this.d2=null,this.av=e}b=Iu.prototype=new x,b.constructor=Iu;function Lu(){}Lu.prototype=b,b.o=(function(){return(this.av.Y?`interface `:this.av.X?``:`class `)+this.av.N}),b.dE=(function(){return this.d2===null&&(this.d2=Fu(this)),this.d2}),new C().i(Iu,`java.lang.Class`,{de:1,a:1,O:1});function B(e,t){return F(e,t,null,!0,!0),e}var V=class extends I{};new C().i(V,`java.lang.Exception`,{J:1,t:1,a:1});function Ru(){this.hu=null,Bu=this,this.hu=ed()}b=Ru.prototype=new Sl,b.constructor=Ru;function zu(){}zu.prototype=b,new C().i(Ru,`scala.Predef$`,{dR:1,dK:1,dL:1});var Bu;function Vu(){return Bu||=new Ru,Bu}function Hu(e,t){return e.c9=t,e}function Uu(){this.c9=null}b=Uu.prototype=new x,b.constructor=Uu;function Wu(){}Wu.prototype=b,b.dD=(function(e){return this.c9.dC(e,Th())}),b.dy=(function(e){return this.c9.dC(e,Th())});function Gu(e,t){return new dp(e).hV(t)}function Ku(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?H().x:new hp(e,r,i)}function qu(e,t){for(var n=t.n();e.t()&&n.t();)if(!M().E(e.j(),n.j()))return!1;return e.t()===n.t()}function Ju(){this.x=null,Xu=this,this.x=new ap}b=Ju.prototype=new x,b.constructor=Ju;function Yu(){}Yu.prototype=b,new C().i(Ju,`scala.collection.Iterator$`,{ea:1,a3:1,a:1});var Xu;function H(){return Xu||=new Ju,Xu}function Zu(){}b=Zu.prototype=new x,b.constructor=Zu;function Qu(){}Qu.prototype=b,new C().i(Zu,`scala.collection.immutable.Map$`,{ep:1,ef:1,a:1});var $u;function ed(){return $u||=new Zu,$u}function td(e){this.g3=null,this.g3=e}b=td.prototype=new Al,b.constructor=td;function nd(){}nd.prototype=b,b.a9=(function(){return(0,this.g3)()}),new C().i(td,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eK:1,bq:1,ac:1});function U(e){this.g4=null,this.g4=e}b=U.prototype=new Ml,b.constructor=U;function rd(){}rd.prototype=b,b.d=(function(e){return(0,this.g4)(e)}),new C().i(U,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eL:1,br:1,e:1});function id(){}b=id.prototype=new x,b.constructor=id;function ad(){}ad.prototype=b,b.o=(function(){return`<function1>`}),b.d=(function(e){return this.b3(e,ls().c8)});var od=new C().i(0,`scala.runtime.Nothing$`,{eR:1,t:1,a:1});function sd(){}b=sd.prototype=new x,b.constructor=sd;function cd(){}cd.prototype=b,b.io=(function(e){return(t=>e.d(t))}),new C().i(sd,`scala.scalajs.js.Any$`,{eW:1,eX:1,eY:1});var ld;function ud(){return ld||=new sd,ld}function dd(){}b=dd.prototype=new Al,b.constructor=dd;function fd(){}fd.prototype=b;function pd(){}b=pd.prototype=new Ml,b.constructor=pd;function md(){}md.prototype=b;function hd(){}b=hd.prototype=new Pl,b.constructor=hd;function gd(){}gd.prototype=b;function _d(){}b=_d.prototype=new Il,b.constructor=_d;function vd(){}vd.prototype=b;function yd(e,t,n,r){if(this.dV=null,this.dT=!1,this.cv=null,this.dU=null,this.dV=e,this.dT=t,this.cv=n,r===null)throw new q;this.dU=void 0}b=yd.prototype=new x,b.constructor=yd;function bd(){}bd.prototype=b,b.bJ=(function(){return this.dU}),b.bF=(function(){return _r(this)}),b.o=(function(){return vr(this)}),b.dM=(function(e){try{this.dV.d(e)}catch(e){var t=e instanceof I?e:new Z(e);this.dT?this.cm(new Rp(t)):R().a6(new Rp(t))}}),b.cm=(function(e){try{this.cv.aN(e)?this.cv.d(e):R().a6(e)}catch(n){var t=n instanceof I?n:new Z(n);R().a6(new zp(t,e))}}),b.bK=(function(e){e.aa(new K((e=>{this.cm(e)})),new K((e=>{this.dM(e)})))}),new C().i(yd,`com.raquo.airstream.core.Observer$$anon$8`,{bB:1,a1:1,V:1,a5:1});function xd(e,t,n){if(this.cw=null,this.dW=!1,this.dX=null,this.cw=e,this.dW=t,n===null)throw new q;this.dX=void 0}b=xd.prototype=new x,b.constructor=xd;function Sd(){}Sd.prototype=b,b.bJ=(function(){return this.dX}),b.bF=(function(){return _r(this)}),b.o=(function(){return vr(this)}),b.dM=(function(e){this.bK(new Fp(e))}),b.cm=(function(e){this.bK(new Np(e))}),b.bK=(function(e){try{this.cw.aN(e)?this.cw.d(e):e.aa(new K((e=>{R().a6(e)})),new K((e=>void 0)))}catch(n){var t=n instanceof I?n:new Z(n);this.dW&&e.gU()?this.cm(new Rp(t)):e.aa(new K((e=>{R().a6(new zp(t,e))})),new K((e=>{R().a6(new Rp(t))})))}}),new C().i(xd,`com.raquo.airstream.core.Observer$$anon$9`,{bC:1,a1:1,V:1,a5:1});function Cd(e){if(this.er=null,this.es=!1,this.hh=null,e===null)throw new q;Yi(this)}b=Cd.prototype=new x,b.constructor=Cd;function wd(){}wd.prototype=b,b.jz=(function(){return this.es||=(this.er=new Pc(`svg`,!1),!0),this.er}),new C().i(Cd,`com.raquo.laminar.api.Laminar$svg$`,{c5:1,cu:1,ce:1,cg:1});function Td(){this.r=null,Dd=this,this.r=new Kh}b=Td.prototype=new x,b.constructor=Td;function Ed(){}Ed.prototype=b,new C().i(Td,`com.raquo.laminar.api.package$`,{c8:1,aq:1,au:1,ap:1});var Dd;function W(){return Dd||=new Td,Dd}function Od(e,t,n){return e.az=t,e.aA=n,e}function kd(){this.az=null,this.aA=null}b=kd.prototype=new ua,b.constructor=kd;function Ad(){}Ad.prototype=b,b.v=(function(e){return new ou(this,Bn(e),new af(((e,t,n)=>{T().ha(e,t,n)})))});function jd(e){this.fn=null,this.d0=null,this.fn=Y(),this.d0=T().i0(e)}b=jd.prototype=new x,b.constructor=jd;function Md(){}Md.prototype=b,b.hb=(function(e){this.fn=e}),b.he=(function(e){}),b.a8=(function(e){Oa().cc(e,this,void 0)}),b.jC=(function(){return this.d0.data}),b.bN=(function(){return this.d0}),new C().i(jd,`com.raquo.laminar.nodes.TextNode`,{cV:1,a9:1,T:1,ax:1});function Nd(){}b=Nd.prototype=new x,b.constructor=Nd;function Pd(){}Pd.prototype=b;function Fd(e,t){return e===t}function Id(e){return e?1231:1237}var Ld=new C().i(0,`java.lang.Boolean`,{db:1,a:1,S:1,O:1},(e=>typeof e==`boolean`));function Rd(e){return e}function zd(e,t){return t instanceof Fn&&e===t.c}var Bd=new C().i(0,`java.lang.Character`,{aI:1,a:1,S:1,O:1},(e=>e instanceof Fn)),Vd=class extends V{};function Hd(){this.q=null,this.q=``}b=Hd.prototype=new x,b.constructor=Hd;function Ud(){}Ud.prototype=b,b.hH=(function(e){var t=ul().iS(e,0,e.a.length);return this.q=``+this.q+t,this}),b.o=(function(){return this.q}),b.k=(function(){return this.q.length}),b.gs=(function(e){return this.q.charCodeAt(e)}),new C().i(Hd,`java.lang.StringBuilder`,{du:1,ab:1,aG:1,a:1});function Wd(){}b=Wd.prototype=new x,b.constructor=Wd;function Gd(){}Gd.prototype=b,b.b3=(function(e,t){return Dl(this,e,t)}),b.o=(function(){return`<function1>`}),b.aN=(function(e){return!1}),b.hJ=(function(e){throw new Zf(e)}),b.d=(function(e){this.hJ(e)}),new C().i(Wd,`scala.PartialFunction$$anon$1`,{dQ:1,f:1,e:1,a:1});function Kd(){}b=Kd.prototype=new x,b.constructor=Kd;function qd(){}qd.prototype=b,b.n=(function(){return this}),b.ch=(function(e){return this.bO(e,-1)}),b.bO=(function(e,t){return Ku(this,e,t)}),b.o=(function(){return`<iterator>`}),b.bu=(function(e,t,n,r){return gs(this,e,t,n,r)}),b.B=(function(){return-1});function Jd(e,t){return e.ca=t,e}function Yd(){this.ca=null}b=Yd.prototype=new x,b.constructor=Yd;function Xd(){}Xd.prototype=b,b.gf=(function(e){return this.ca.dy(e)}),b.gM=(function(e){return this.ca.dD(e)}),b.dD=(function(e){return this.gM(e)}),b.dy=(function(e){return this.gf(e)});function Zd(e,t){return t>=0&&e.au(t)>0}function Qd(e){return e.au(0)===0}function $d(e,t){var n=e.B();if(n!==-1)var r=t.B(),i=r!==-1&&n!==r;else var i=!1;return i?!1:qu(e.n(),t)}function G(e){this.g7=null,this.g7=e}b=G.prototype=new fd,b.constructor=G;function ef(){}ef.prototype=b,b.a9=(function(){return(0,this.g7)()}),new C().i(G,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{f4:1,f3:1,bq:1,ac:1});function K(e){this.g8=null,this.g8=e}b=K.prototype=new md,b.constructor=K;function tf(){}tf.prototype=b,b.d=(function(e){return(0,this.g8)(e)}),new C().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{f6:1,f5:1,br:1,e:1});function nf(e){this.hx=null,this.hx=e}b=nf.prototype=new gd,b.constructor=nf;function rf(){}rf.prototype=b,new C().i(nf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{f8:1,f7:1,eM:1,dI:1});function af(e){this.g9=null,this.g9=e}b=af.prototype=new vd,b.constructor=af;function of(){}of.prototype=b,b.ge=(function(e,t,n){return(0,this.g9)(e,t,n)}),new C().i(af,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{fa:1,f9:1,eN:1,dJ:1});function sf(){}b=sf.prototype=new x,b.constructor=sf;function cf(){}cf.prototype=b;function lf(e){e.gv(w().A(N().h(new(eu.r()).C([])))),e.gw(w().A(N().h(new(gr.r()).C([])))),e.ct(!1)}function uf(e,t,n){var r=Hr(),i=(()=>{hf(e);var r=df(e,t,n);return t.bK(e.cq()),gf(e),r}),a=!Ql(e);if(r.z||!a)var o=i();else{r.z=!0;try{var o=i()}finally{r.z=!1,Rr(r)}}return o}function df(e,t,n){var r=new mi(n,new G((()=>{Xl(e,t)})));return e.bG().push(t),r}function ff(e,t,n){var r=Hr(),i=(()=>{!Ql(e)&&n&&hf(e),e.bI().push(t),gf(e)}),a=!Ql(e);if(r.z||!a)i();else{r.z=!0;try{i()}finally{r.z=!1,Rr(r)}}}function pf(e,t){Er().h7(e.bI(),t)&&_f(e)}function mf(e,t){Er().h7(e.bG(),t)&&_f(e)}function hf(e){e.hf()||(e.h1(),e.ct(!0))}function gf(e){vf(e)===1&&e.gZ()}function _f(e){Ql(e)||(e.h0(),e.ct(!1))}function vf(e){var t=e.bG().length,n=e.bI();return(t|0)+(n.length|0)|0}function yf(e){e.ef=Sr().ip(new bf(e),(Sr(),!0))}function bf(e){if(this.eg=null,e===null)throw new q;this.eg=e}b=bf.prototype=new ad,b.constructor=bf;function xf(){}xf.prototype=b,b.iF=(function(e){return!0}),b.hM=(function(e,t){new jr(new K((t=>{this.eg.jo(e,t)})))}),b.aN=(function(e){return this.iF(e)}),b.b3=(function(e,t){return this.hM(e,t)}),new C().i(bf,`com.raquo.airstream.state.Var$$anon$1`,{bV:1,bs:1,e:1,f:1,a:1});function Sf(e){if(e===null)throw new q}b=Sf.prototype=new ad,b.constructor=Sf;function Cf(){}Cf.prototype=b,b.aN=(function(e){return typeof e==`string`}),b.b3=(function(e,t){return typeof e==`string`?e:t.d(e)}),new C().i(Sf,`com.raquo.laminar.DomApi$$anon$2`,{c0:1,bs:1,e:1,f:1,a:1});function wf(e){e.cW=new _i(new G((()=>{e.a3.gc()})),new G((()=>{e.a3.i1()}))),e.aB=void 0}function Tf(e,t,n){if(e.aB===void 0)e.aB=w().A(N().h(new(au.r()).C([t])));else if(n){var r=e.aB;if(r===void 0){var i;throw new Kf(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aB;if(a===void 0){var o;throw new Kf(`undefined.get`)}else var o=a;o.push(t)}}function Ef(e,t){var n=e.aB;n!==void 0&&n.splice(t,1)}function Df(e,t){var n=e.aB;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Rn(a,t))?r=!0:i=1+i|0}return r?i:-1}function Of(e,t){Af(e,e.bZ,t)&&jf(e,t)}function kf(e,t){var n=e.bZ;e.bZ=t,Af(e,n,t)||jf(e,t)}function Af(e,t,n){var r=!t.g()&&!t.u().ci().J.g(),i=!n.g()&&!n.u().ci().J.g();return r&&!i}function jf(e,t){Mf(e,t.g()?Y():new X(t.u().ci()))}function Mf(e,t){if(t.g())e.cW.hU();else{var n=t.u();e.cW.jr(n)}}function Nf(){}b=Nf.prototype=new Pd,b.constructor=Nf;function Pf(){}Pf.prototype=b;var Ff=class extends Vd{constructor(e){super(),F(this,e,null,!0,!0)}};new C().i(Ff,`java.lang.ArithmeticException`,{da:1,N:1,J:1,t:1,a:1});var If=new C().i(0,`java.lang.Byte`,{dc:1,U:1,a:1,S:1,O:1},(e=>Yn(e)));function Lf(e,t){return F(e,t,null,!0,!0),e}function Rf(e){return F(e,null,null,!0,!0),e}var zf=class extends Vd{};new C().i(zf,`java.lang.IllegalArgumentException`,{aK:1,N:1,J:1,t:1,a:1});function Bf(e,t){return F(e,t,null,!0,!0),e}var Vf=class extends Vd{};new C().i(Vf,`java.lang.IndexOutOfBoundsException`,{aL:1,N:1,J:1,t:1,a:1});function Hf(){}b=Hf.prototype=new Pd,b.constructor=Hf;function Uf(){}Uf.prototype=b,new C().i(Hf,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dl:1,aF:1,aD:1,aH:1,aE:1});var q=class extends Vd{constructor(){super(),F(this,null,null,!0,!0)}};new C().i(q,`java.lang.NullPointerException`,{dn:1,N:1,J:1,t:1,a:1});var Wf=new C().i(0,`java.lang.Short`,{dq:1,U:1,a:1,S:1,O:1},(e=>Xn(e))),Gf=class extends Vd{constructor(e){super(),F(this,e,null,!0,!0)}};new C().i(Gf,`java.lang.UnsupportedOperationException`,{dy:1,N:1,J:1,t:1,a:1});var Kf=class extends Vd{constructor(e){super(),F(this,e,null,!0,!0)}};new C().i(Kf,`java.util.NoSuchElementException`,{dD:1,N:1,J:1,t:1,a:1});function qf(e){return e.d9||=(e.da=e.c7===null?`null`:Xf(e),!0),e.da}function Jf(e){return e.d9?e.da:qf(e)}function Yf(e){var t=e.c7;return`of class `+Ln(t)}function Xf(e){try{return e.c7+` (`+Yf(e)+`)`}catch{return`an instance `+Yf(e)}}var Zf=class extends Vd{constructor(e){super(),this.da=null,this.c7=null,this.d9=!1,this.c7=e,F(this,null,null,!0,!0)}bH(){return Jf(this)}};new C().i(Zf,`scala.MatchError`,{dM:1,N:1,J:1,t:1,a:1});function Qf(){}b=Qf.prototype=new x,b.constructor=Qf;function $f(){}$f.prototype=b,b.g=(function(){return this===Y()}),b.B=(function(){return this.g()?0:1}),b.n=(function(){return this.g()?H().x:new sp(this.u())});function ep(e){this.bl=0,this.fV=0,this.fU=null,this.fU=e,this.bl=0,this.fV=e.O()}b=ep.prototype=new qd,b.constructor=ep;function tp(){}tp.prototype=b,b.t=(function(){return this.bl<this.fV}),b.j=(function(){var e=this.fU.P(this.bl);return this.bl=1+this.bl|0,e}),new C().i(ep,`scala.Product$$anon$1`,{dS:1,r:1,s:1,b:1,c:1});function np(e){this.c9=null,Hu(this,e)}b=np.prototype=new Wu,b.constructor=np;function rp(){}rp.prototype=b,new C().i(np,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{e6:1,e5:1,a3:1,a:1,ad:1});function ip(e){return hs(e,e.b5()+`(`,`, `,`)`)}function ap(){}b=ap.prototype=new qd,b.constructor=ap;function op(){}op.prototype=b,b.t=(function(){return!1}),b.iU=(function(){throw new Kf(`next on empty iterator`)}),b.B=(function(){return 0}),b.bO=(function(e,t){return this}),b.j=(function(){this.iU()}),new C().i(ap,`scala.collection.Iterator$$anon$19`,{eb:1,r:1,s:1,b:1,c:1});function sp(e){this.bn=!1,this.fZ=null,this.fZ=e,this.bn=!1}b=sp.prototype=new qd,b.constructor=sp;function cp(){}cp.prototype=b,b.t=(function(){return!this.bn}),b.j=(function(){return this.bn?H().x.j():(this.bn=!0,this.fZ)}),b.bO=(function(e,t){return this.bn||e>0||t===0?H().x:this}),new C().i(sp,`scala.collection.Iterator$$anon$20`,{ec:1,r:1,s:1,b:1,c:1});function lp(e){for(;;){if(e.G instanceof dp){var t=e.G;e.G=t.G,e.aj=t.aj,t.T!==null&&(e.S===null&&(e.S=t.S),t.S.bo=e.T,e.T=t.T);continue}return}}function up(e){for(;;)if(e.T===null)return e.G=null,e.S=null,!1;else{if(e.G=e.T.iA(),e.S===e.T&&(e.S=e.S.bo),e.T=e.T.bo,lp(e),e.aj)return!0;if(e.G!==null&&e.G.t())return e.aj=!0,!0}}function dp(e){this.G=null,this.T=null,this.S=null,this.aj=!1,this.G=e,this.T=null,this.S=null,this.aj=!1}b=dp.prototype=new qd,b.constructor=dp;function fp(){}fp.prototype=b,b.t=(function(){return this.aj?!0:this.G===null?!1:this.G.t()?(this.aj=!0,!0):up(this)}),b.j=(function(){return this.t()?(this.aj=!1,this.G.j()):H().x.j()}),b.hV=(function(e){var t=new _s(e,null);return this.T===null?(this.T=t,this.S=t):(this.S.bo=t,this.S=t),this.G===null&&(this.G=H().x),this}),new C().i(dp,`scala.collection.Iterator$ConcatIterator`,{aW:1,r:1,s:1,b:1,c:1});function pp(e){for(;e.a7>0;)e.ak.t()?(e.ak.j(),e.a7=-1+e.a7|0):e.a7=0}function mp(e,t){if(e.L<0)return-1;var n=e.L-t|0;return n<0?0:n}function hp(e,t,n){this.ak=null,this.L=0,this.a7=0,this.ak=e,this.L=n,this.a7=t}b=hp.prototype=new qd,b.constructor=hp;function gp(){}gp.prototype=b,b.B=(function(){var e=this.ak.B();if(e<0)return-1;var t=e-this.a7|0,n=t<0?0:t;if(this.L<0)return n;var r=this.L;return r<n?r:n}),b.t=(function(){return pp(this),this.L!==0&&this.ak.t()}),b.j=(function(){return pp(this),this.L>0?(this.L=-1+this.L|0,this.ak.j()):this.L<0?this.ak.j():H().x.j()}),b.bO=(function(e,t){var n=e>0?e:0;if(t<0)var r=mp(this,n);else if(t<=n)var r=0;else if(this.L<0)var r=t-n|0;else var i=mp(this,n),a=t-n|0,r=i<a?i:a;var o=this.a7+n|0;return r===0?H().x:o<0?(this.a7=2147483647,this.L=0,Gu(this,new td((()=>new hp(this.ak,-2147483647+o|0,r))))):(this.a7=o,this.L=r,this)}),new C().i(hp,`scala.collection.Iterator$SliceIterator`,{ee:1,r:1,s:1,b:1,c:1});function _p(e,t){return t>=0&&e.au(t)>0}function vp(e,t){if(t<0)throw Bf(new Vf,``+t);var n=e.i6(t);if(n.g())throw Bf(new Vf,``+t);return n.ab()}function yp(e,t){return Hh(t)?bp(e,e,t):$d(e,t)}function bp(e,t,n){for(;;)if(t===n)return!0;else if(!t.g()&&!n.g()&&M().E(t.ab(),n.ab())){var r=t.a1(),i=n.a1();t=r,n=i}else return t.g()&&n.g()}function xp(e){this.bq=null,this.bq=e}b=xp.prototype=new qd,b.constructor=xp;function Sp(){}Sp.prototype=b,b.t=(function(){return!this.bq.g()}),b.j=(function(){var e=this.bq.ab();return this.bq=this.bq.a1(),e}),new C().i(xp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{ej:1,r:1,s:1,b:1,c:1});function Cp(){this.ca=null,Jd(this,Mp())}b=Cp.prototype=new Xd,b.constructor=Cp;function wp(){}wp.prototype=b,new C().i(Cp,`scala.collection.mutable.Buffer$`,{eu:1,eg:1,ad:1,a3:1,a:1});var Tp;function Ep(){return Tp||=new Cp,Tp}function Dp(e){this.bs=0,this.g5=0,this.g6=null,this.g6=e,this.bs=0,this.g5=e.O()}b=Dp.prototype=new qd,b.constructor=Dp;function Op(){}Op.prototype=b,b.t=(function(){return this.bs<this.g5}),b.j=(function(){var e=this.g6.P(this.bs);return this.bs=1+this.bs|0,e}),new C().i(Dp,`scala.runtime.ScalaRunTime$$anon$1`,{eU:1,r:1,s:1,b:1,c:1});function kp(){}b=kp.prototype=new x,b.constructor=kp;function Ap(){}Ap.prototype=b,b.dy=(function(e){return this.gN(e)}),b.gN=(function(e){return Ol(l_(new u_),e).h8()}),b.dD=(function(e){return this.gN(e)}),new C().i(kp,`scala.scalajs.js.WrappedArray$`,{f0:1,ek:1,ad:1,a3:1,a:1});var jp;function Mp(){return jp||=new kp,jp}function Np(e){this.bt=null,this.bt=e}b=Np.prototype=new cf,b.constructor=Np;function Pp(){}Pp.prototype=b,b.gT=(function(){return!0}),b.gU=(function(){return!1}),b.dG=(function(e){return this}),b.aa=(function(e,t){return e.d(this.bt)}),b.Q=(function(){return`Failure`}),b.O=(function(){return 1}),b.P=(function(e){return e===0?this.bt:P().aM(e)}),b.Z=(function(){return new Dp(this)}),b.m=(function(){return L().aO(this,-889275714,!1)}),b.o=(function(){return N().dv(this)}),b.f=(function(e){if(this===e)return!0;if(e instanceof Np){var t=this.bt,n=e.bt;return t===null?n===null:t.f(n)}else return!1}),new C().i(Np,`scala.util.Failure`,{bu:1,bw:1,K:1,d:1,a:1});function Fp(e){this.b2=null,this.b2=e}b=Fp.prototype=new cf,b.constructor=Fp;function Ip(){}Ip.prototype=b,b.gT=(function(){return!1}),b.gU=(function(){return!0}),b.dG=(function(e){try{return new Fp(e.d(this.b2))}catch(e){var t=e instanceof I?e:new Z(e);if(Qs().ce(t))return new Np(t);throw t instanceof Z?t.D:t}}),b.aa=(function(e,t){try{return t.d(this.b2)}catch(t){var n=t instanceof I?t:new Z(t);if(Qs().ce(n))return e.d(n);throw n instanceof Z?n.D:n}}),b.Q=(function(){return`Success`}),b.O=(function(){return 1}),b.P=(function(e){return e===0?this.b2:P().aM(e)}),b.Z=(function(){return new Dp(this)}),b.m=(function(){return L().aO(this,-889275714,!1)}),b.o=(function(){return N().dv(this)}),b.f=(function(e){return this===e||e instanceof Fp&&M().E(this.b2,e.b2)}),new C().i(Fp,`scala.util.Success`,{bv:1,bw:1,K:1,d:1,a:1});var Lp=class e extends Wl{constructor(e,t){super(),this.bc=null,this.bb=null,this.bc=e,this.bb=t,F(this,`ErrorHandlingError: `+R().b7(e)+`; cause: `+R().b7(t),null,!0,!0),this.gQ(t)}Z(){return new ep(this)}m(){return L().aO(this,-889275714,!1)}f(t){if(this===t)return!0;if(t instanceof e){var n=this.bc,r=t.bc;if(n===null?r===null:n.f(r)){var i=this.bb,a=t.bb;return i===null?a===null:i.f(a)}else return!1}else return!1}O(){return 2}Q(){return`ErrorHandlingError`}P(e){if(e===0)return this.bc;if(e===1)return this.bb;throw Bf(new Vf,``+e)}o(){return`ErrorHandlingError: `+this.bc+`; cause: `+this.bb}};new C().i(Lp,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{af:1,a0:1,t:1,a:1,d:1,K:1});var Rp=class e extends Wl{constructor(e){super(),this.bd=null,this.bd=e,F(this,`ObserverError: `+R().b7(e),null,!0,!0)}Z(){return new ep(this)}m(){return L().aO(this,-889275714,!1)}f(t){if(this===t)return!0;if(t instanceof e){var n=this.bd,r=t.bd;return n===null?r===null:n.f(r)}else return!1}O(){return 1}Q(){return`ObserverError`}P(e){if(e===0)return this.bd;throw Bf(new Vf,``+e)}o(){return`ObserverError: `+this.bd}};new C().i(Rp,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ag:1,a0:1,t:1,a:1,d:1,K:1});var zp=class e extends Wl{constructor(e,t){super(),this.bf=null,this.be=null,this.bf=e,this.be=t,F(this,`ObserverErrorHandlingError: `+R().b7(e)+`; cause: `+R().b7(t),null,!0,!0),this.gQ(t)}Z(){return new ep(this)}m(){return L().aO(this,-889275714,!1)}f(t){if(this===t)return!0;if(t instanceof e){var n=this.bf,r=t.bf;if(n===null?r===null:n.f(r)){var i=this.be,a=t.be;return i===null?a===null:i.f(a)}else return!1}else return!1}O(){return 2}Q(){return`ObserverErrorHandlingError`}P(e){if(e===0)return this.bf;if(e===1)return this.be;throw Bf(new Vf,``+e)}o(){return`ObserverErrorHandlingError: `+this.bf+`; cause: `+this.be}};new C().i(zp,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ah:1,a0:1,t:1,a:1,d:1,K:1});var Bp=class e extends Wl{constructor(e,t){super(),this.aQ=null,this.aP=0,this.aQ=e,this.aP=t,F(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}Z(){return new ep(this)}m(){var e=-889275714;return e=P().b(e,J(`TransactionDepthExceeded`)),e=P().b(e,P().y(this.aQ)),e=P().b(e,this.aP),P().l(e,2)}f(t){return this===t?!0:t instanceof e&&this.aP===t.aP?this.aQ===t.aQ:!1}O(){return 2}Q(){return`TransactionDepthExceeded`}P(e){if(e===0)return this.aQ;if(e===1)return this.aP;throw Bf(new Vf,``+e)}o(){return`TransactionDepthExceeded: `+this.aQ+`; maxDepth: `+this.aP}};new C().i(Bp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ai:1,a0:1,t:1,a:1,d:1,K:1});function Vp(e){e.cq()}function Hp(e){this.ee=null,this.ef=null,this.cH=null,this.cG=null,this.cI=null,this.ee=void 0,yf(this),this.cH=e,this.cG=new Eh(this.cH,new G((()=>vr(this)))),this.cI=this.cG}b=Hp.prototype=new x,b.constructor=Hp;function Up(){}Up.prototype=b,b.bJ=(function(){return this.ee}),b.bF=(function(){return _r(this)}),b.o=(function(){return vr(this)}),b.cp=(function(){return this.cI}),b.jo=(function(e,t){this.cH=e,dh(this.cG,e,t)}),new C().i(Hp,`com.raquo.airstream.state.SourceVar`,{bR:1,a6:1,a7:1,a1:1,V:1,bT:1});function Wp(e){this.az=null,this.aA=null,this.eZ=null,this.f0=!1,Od(this,e,r_())}b=Wp.prototype=new Ad,b.constructor=Wp;function Gp(){}Gp.prototype=b,b.gt=(function(){return this.f0||=(this.eZ=this.v(`column`),!0),this.eZ}),new C().i(Wp,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{cl:1,Y:1,v:1,W:1,X:1,cq:1});function Kp(e){this.az=null,this.aA=null,this.f1=null,this.f2=!1,Od(this,e,r_())}b=Kp.prototype=new Ad,b.constructor=Kp;function qp(){}qp.prototype=b,b.jK=(function(){return this.f2||=(this.f1=this.v(`wrap`),!0),this.f1}),new C().i(Kp,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{cm:1,Y:1,v:1,W:1,X:1,cr:1});function Jp(e,t){var n=e.cX;n===void 0?e.cX=Is().hL(w().A(N().h(new(um.r()).C([t])))):n.push(t)|0}function Yp(e,t){var n=e.fk;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].kl()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function Xp(e,t){this.bZ=null,this.a3=null,this.cW=null,this.aB=null,this.cY=null,this.C=null,this.fk=null,this.cX=null,this.cY=e,this.C=t,this.bZ=Y(),Ac(this),wf(this),this.fk=void 0,this.cX=void 0}b=Xp.prototype=new x,b.constructor=Xp;function Zp(){}Zp.prototype=b,b.a8=(function(e){Oa().cc(e,this,void 0)}),b.ci=(function(){return this.a3}),b.gx=(function(e){this.a3=e}),b.he=(function(e){Of(this,e)}),b.hb=(function(e){kf(this,e)}),b.hX=(function(){if(T().gR(this.C)){var e=this.cY;return e instanceof fu?e.hF():void 0}else return ea().f7}),b.iD=(function(e){var t=this.hX();return t!==void 0&&ki().iB(t,e,0)}),b.j5=(function(e){if(e instanceof gc&&this.iD(e.a2)){if(Yp(this,e.a2))throw B(new V,"Can not add uncontrolled `"+e.a2+" <-- ???` to element `"+T().gy(this.C)+"` that already has an input controller for `"+e.a2+"` property.");Jp(this,e.a2)}}),b.o=(function(){return`ReactiveHtmlElement(`+(this.C===null?`tag=`+this.cY.dK():this.C.outerHTML)+`)`}),b.bN=(function(){return this.C});var Qp=new C().i(Xp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cT:1,a9:1,T:1,ax:1,ay:1,cR:1});function $p(e,t){return Object.is(e,t)}function em(e){return $a().dL(e)}var tm=new C().i(0,`java.lang.Double`,{aJ:1,U:1,a:1,S:1,O:1,Z:1},(e=>typeof e==`number`)),nm=new C().i(0,`java.lang.Float`,{dg:1,U:1,a:1,S:1,O:1,Z:1},(e=>Qn(e))),rm=new C().i(0,`java.lang.Integer`,{di:1,U:1,a:1,S:1,O:1,Z:1},(e=>Zn(e)));function im(e,t){return t instanceof k&&e.c===t.c&&e.e===t.e}function am(e){return e.c^e.e}var om=new C().i(0,`java.lang.Long`,{aM:1,U:1,a:1,S:1,O:1,Z:1},(e=>e instanceof k)),sm=class extends zf{constructor(e){super(),F(this,e,null,!0,!0)}};new C().i(sm,`java.lang.NumberFormatException`,{dp:1,aK:1,N:1,J:1,t:1,a:1});function J(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function cm(e,t){return e===t}function lm(e,t){var n=Wc().jF(t);return e.indexOf(n)|0}var um=new C().i(0,`java.lang.String`,{aO:1,a:1,S:1,ab:1,O:1,Z:1},(e=>typeof e==`string`)),dm=class extends Vf{constructor(){super(),F(this,null,null,!0,!0)}};new C().i(dm,`java.lang.StringIndexOutOfBoundsException`,{dv:1,aL:1,N:1,J:1,t:1,a:1});function fm(){}b=fm.prototype=new $f,b.constructor=fm;function pm(){}pm.prototype=b,b.iq=(function(){throw new Kf(`None.get`)}),b.Q=(function(){return`None`}),b.O=(function(){return 0}),b.P=(function(e){return P().aM(e)}),b.Z=(function(){return new Dp(this)}),b.m=(function(){return 2433880}),b.o=(function(){return`None`}),b.u=(function(){this.iq()}),new C().i(fm,`scala.None$`,{dN:1,aR:1,b:1,K:1,d:1,a:1});var mm;function Y(){return mm||=new fm,mm}function X(e){this.bm=null,this.bm=e}b=X.prototype=new $f,b.constructor=X;function hm(){}hm.prototype=b,b.u=(function(){return this.bm}),b.Q=(function(){return`Some`}),b.O=(function(){return 1}),b.P=(function(e){return e===0?this.bm:P().aM(e)}),b.Z=(function(){return new Dp(this)}),b.m=(function(){return L().aO(this,-889275714,!1)}),b.o=(function(){return N().dv(this)}),b.f=(function(e){return this===e||e instanceof X&&M().E(this.bm,e.bm)}),new C().i(X,`scala.Some`,{aS:1,aR:1,b:1,K:1,d:1,a:1});function gm(){}b=gm.prototype=new x,b.constructor=gm;function _m(){}_m.prototype=b,b.b5=(function(){return this.ba()}),b.a5=(function(e){ms(this,e)}),b.bu=(function(e,t,n,r){return gs(this,e,t,n,r)}),b.B=(function(){return-1});function vm(e,t){return e.K=t,e.i=0,e.F=Go().b8(e.K),e}function ym(){this.K=null,this.i=0,this.F=0}b=ym.prototype=new qd,b.constructor=ym;function bm(){}bm.prototype=b,b.B=(function(){return this.F-this.i|0}),b.t=(function(){return this.i<this.F}),b.j=(function(){this.i>=Go().b8(this.K)&&H().x.j();var e=N().b4(this.K,this.i);return this.i=1+this.i|0,e}),b.ch=(function(e){if(e>0){var t=this.i+e|0;if(t<0)var n=this.F;else var r=this.F,n=r<t?r:t;this.i=n}return this}),new C().i(ym,`scala.collection.ArrayOps$ArrayIterator`,{P:1,r:1,s:1,b:1,c:1,a:1});function xm(e,t){return t<0?0:t>e.W?e.W:t}function Sm(e){this.fY=null,this.ai=0,this.W=0,this.fY=e,this.ai=0,this.W=e.k()}b=Sm.prototype=new qd,b.constructor=Sm;function Cm(){}Cm.prototype=b,b.B=(function(){return this.W}),b.t=(function(){return this.W>0}),b.j=(function(){if(this.W>0){var e=this.fY.p(this.ai);return this.ai=1+this.ai|0,this.W=-1+this.W|0,e}else return H().x.j()}),b.ch=(function(e){if(e>0){this.ai=this.ai+e|0;var t=this.W-e|0;this.W=t<0?0:t}return this}),b.bO=(function(e,t){var n=xm(this,e),r=xm(this,t)-n|0;return this.W=r<0?0:r,this.ai=this.ai+n|0,this}),new C().i(Sm,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{e9:1,r:1,s:1,b:1,c:1,a:1});function wm(e){return e.dl||=(e.dm=new Sg(new S(0)),!0),e.dm}function Tm(e){return e.dl?e.dm:wm(e)}function Em(){this.dm=null,this.hv=null,this.dl=!1,Om=this,this.hv=new np(this)}b=Em.prototype=new x,b.constructor=Em;function Dm(){}Dm.prototype=b,b.il=(function(e,t){return e instanceof ag?e:this.jJ(ml().gL(e,t))}),b.jJ=(function(e){if(e===null)return null;if(e instanceof S)return new Sg(e);if(e instanceof cr)return new vg(e);if(e instanceof dr)return new mg(e);if(e instanceof lr)return new bg(e);if(e instanceof ur)return new gg(e);if(e instanceof ar)return new fg(e);if(e instanceof or)return new ug(e);if(e instanceof sr)return new wg(e);if(e instanceof ir)return new cg(e);if(zo(e,1))return new Eg(e);throw new Zf(e)}),b.dC=(function(e,t){return this.il(e,t)}),new C().i(Em,`scala.collection.immutable.ArraySeq$`,{eo:1,aY:1,aU:1,aT:1,aV:1,a:1});var Om;function km(){return Om||=new Em,Om}function Am(){this.hw=null,this.g2=null,Mm=this,this.hw=new np(this),this.g2=new Kg(new S(0))}b=Am.prototype=new x,b.constructor=Am;function jm(){}jm.prototype=b,b.im=(function(e,t){return this.iM(ml().gL(e,t))}),b.iM=(function(e){if(e===null)return null;if(e instanceof S)return new Kg(e);if(e instanceof cr)return new Hg(e);if(e instanceof dr)return new Rg(e);if(e instanceof lr)return new Wg(e);if(e instanceof ur)return new Bg(e);if(e instanceof ar)return new Ig(e);if(e instanceof or)return new Pg(e);if(e instanceof sr)return new Jg(e);if(e instanceof ir)return new Mg(e);if(zo(e,1))return new Xg(e);throw new Zf(e)}),b.dC=(function(e,t){return this.im(e,t)}),new C().i(Am,`scala.collection.mutable.ArraySeq$`,{es:1,aY:1,aU:1,aT:1,aV:1,a:1});var Mm;function Nm(){return Mm||=new Am,Mm}function Pm(e){this.az=null,this.aA=null,this.eX=null,this.eY=!1,Od(this,e,r_())}b=Pm.prototype=new Ad,b.constructor=Pm;function Fm(){}Fm.prototype=b,b.gJ=(function(){return this.eY||=(this.eX=this.v(`flex`),!0),this.eX}),new C().i(Pm,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{ck:1,Y:1,v:1,W:1,X:1,ar:1,cp:1});function Im(e){this.az=null,this.aA=null,this.f3=null,this.f4=!1,Od(this,e,r_())}b=Im.prototype=new Ad,b.constructor=Im;function Lm(){}Lm.prototype=b,b.co=(function(){return this.f4||=(this.f3=sc(this),!0),this.f3}),new C().i(Im,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cn:1,Y:1,v:1,W:1,X:1,as:1,at:1});function Rm(){}b=Rm.prototype=new Pf,b.constructor=Rm;function zm(){}zm.prototype=b;function Bm(e){this.K=null,this.i=0,this.F=0,this.db=null,this.db=e,vm(this,e)}b=Bm.prototype=new bm,b.constructor=Bm;function Vm(){}Vm.prototype=b,b.iV=(function(){this.i>=this.db.a.length&&H().x.j();var e=this.db.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.iV()}),new C().i(Bm,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dW:1,P:1,r:1,s:1,b:1,c:1,a:1});function Hm(e){this.K=null,this.i=0,this.F=0,this.dc=null,this.dc=e,vm(this,e)}b=Hm.prototype=new bm,b.constructor=Hm;function Um(){}Um.prototype=b,b.iW=(function(){this.i>=this.dc.a.length&&H().x.j();var e=this.dc.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return $n(this.iW())}),new C().i(Hm,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dX:1,P:1,r:1,s:1,b:1,c:1,a:1});function Wm(e){this.K=null,this.i=0,this.F=0,this.dd=null,this.dd=e,vm(this,e)}b=Wm.prototype=new bm,b.constructor=Wm;function Gm(){}Gm.prototype=b,b.iX=(function(){this.i>=this.dd.a.length&&H().x.j();var e=this.dd.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.iX()}),new C().i(Wm,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dY:1,P:1,r:1,s:1,b:1,c:1,a:1});function Km(e){this.K=null,this.i=0,this.F=0,this.de=null,this.de=e,vm(this,e)}b=Km.prototype=new bm,b.constructor=Km;function qm(){}qm.prototype=b,b.iY=(function(){this.i>=this.de.a.length&&H().x.j();var e=this.de.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.iY()}),new C().i(Km,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dZ:1,P:1,r:1,s:1,b:1,c:1,a:1});function Jm(e){this.K=null,this.i=0,this.F=0,this.df=null,this.df=e,vm(this,e)}b=Jm.prototype=new bm,b.constructor=Jm;function Ym(){}Ym.prototype=b,b.iZ=(function(){this.i>=this.df.a.length&&H().x.j();var e=this.df.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.iZ()}),new C().i(Jm,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{e0:1,P:1,r:1,s:1,b:1,c:1,a:1});function Xm(e){this.K=null,this.i=0,this.F=0,this.dg=null,this.dg=e,vm(this,e)}b=Xm.prototype=new bm,b.constructor=Xm;function Zm(){}Zm.prototype=b,b.j0=(function(){this.i>=this.dg.a.length&&H().x.j();var e=this.dg.a[this.i],t=e.c,n=e.e;return this.i=1+this.i|0,new k(t,n)}),b.j=(function(){return this.j0()}),new C().i(Xm,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{e1:1,P:1,r:1,s:1,b:1,c:1,a:1});function Qm(e){this.K=null,this.i=0,this.F=0,this.dh=null,this.dh=e,vm(this,e)}b=Qm.prototype=new bm,b.constructor=Qm;function $m(){}$m.prototype=b,b.j1=(function(){this.i>=this.dh.a.length&&H().x.j();var e=this.dh.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.j1()}),new C().i(Qm,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{e2:1,P:1,r:1,s:1,b:1,c:1,a:1});function eh(e){this.K=null,this.i=0,this.F=0,this.fX=null,this.fX=e,vm(this,e)}b=eh.prototype=new bm,b.constructor=eh;function th(){}th.prototype=b,b.j2=(function(){this.i>=this.fX.a.length&&H().x.j(),this.i=1+this.i|0}),b.j=(function(){this.j2()}),new C().i(eh,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{e3:1,P:1,r:1,s:1,b:1,c:1,a:1});function nh(e){this.K=null,this.i=0,this.F=0,this.di=null,this.di=e,vm(this,e)}b=nh.prototype=new bm,b.constructor=nh;function rh(){}rh.prototype=b,b.j3=(function(){this.i>=this.di.a.length&&H().x.j();var e=this.di.a[this.i];return this.i=1+this.i|0,e}),b.j=(function(){return this.j3()}),new C().i(nh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{e4:1,P:1,r:1,s:1,b:1,c:1,a:1});function ih(e){return e.b5()+`(<not computed>)`}function ah(){}b=ah.prototype=new x,b.constructor=ah;function oh(){}oh.prototype=b;var Z=class e extends Vd{constructor(e){super(),this.D=null,this.D=e,F(this,null,null,!0,!0)}bH(){return Bn(this.D)}Q(){return`JavaScriptException`}O(){return 1}P(e){return e===0?this.D:P().aM(e)}Z(){return new Dp(this)}m(){return L().aO(this,-889275714,!1)}f(t){return this===t||t instanceof e&&M().E(this.D,t.D)}};new C().i(Z,`scala.scalajs.js.JavaScriptException`,{bt:1,N:1,J:1,t:1,a:1,K:1,d:1});function sh(e,t){e.dH()!==void 0&&e.du(Ar().gW()),e.gV(t)}function ch(e){var t=e.dH();if(t===void 0){e.du(Ar().gW());var n=e.dz();sh(e,n);var r=n}else var r=t;return r}function lh(e,t,n){dh(e,new Fp(t),n)}function uh(e,t,n){dh(e,new Np(t),n)}function dh(e,t,n){sh(e,t);var r=t.gT(),i=!1;i=!1,e.cj(!1);for(var a=e.bG(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bK(t),r&&!i&&(i=!0)}for(var c=e.bI(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.j8(t,n),r&&!i&&(i=!0)}e.cj(!0);var d=e.dI();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].a9(),f=1+f|0;d.length=0}r&&!i&&t.aa(new K((e=>{R().a6(e)})),new K((e=>void 0)))}function fh(e,t){typeof console<`u`&&(e.fM&&console.error?console.error(t):console.log(t))}function ph(e){this.fM=!1,this.bj=null,this.fM=e,new Hf,this.bj=``}b=ph.prototype=new zm,b.constructor=ph;function mh(){}mh.prototype=b,b.iH=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bj=``+this.bj+t,t=``;else{var r=this.bj,i=t;fh(this,``+r+i.substring(0,n)),this.bj=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new C().i(ph,`java.lang.JSConsoleBasedPrintStream`,{dk:1,d9:1,d8:1,aF:1,aD:1,aH:1,aE:1,aG:1});function hh(e,t,n){for(;;)if(t<=0||n.g())return n;else{var r=-1+t|0,i=n.a1();t=r,n=i}}function gh(){this.dn=null}b=gh.prototype=new oh,b.constructor=gh;function _h(){}_h.prototype=b,b.o=(function(){return this.dn}),b.f=(function(e){return this===e}),b.m=(function(){return Jn(this)});function vh(e){this.az=null,this.aA=null,this.f5=null,this.f6=!1,Od(this,e,r_())}b=vh.prototype=new Ad,b.constructor=vh;function yh(){}yh.prototype=b,b.co=(function(){return this.f6||=(this.f5=sc(this),!0),this.f5}),new C().i(vh,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{co:1,Y:1,v:1,W:1,X:1,as:1,at:1,cs:1,ar:1});function bh(){}b=bh.prototype=new _m,b.constructor=bh;function xh(){}xh.prototype=b,b.o=(function(){return ih(this)});function Sh(){this.dn=null,this.dn=`Any`}b=Sh.prototype=new _h,b.constructor=Sh;function Ch(){}Ch.prototype=b,b.jm=(function(){return fr.l()}),b.iT=(function(e){return new S(e)}),new C().i(Sh,`scala.reflect.ManifestFactory$AnyManifest$`,{eG:1,eI:1,eH:1,eF:1,eE:1,eD:1,eJ:1,a:1,d:1});var wh;function Th(){return wh||=new Sh,wh}function Eh(e,t){this.ek=null,this.ej=!1,this.el=null,this.cJ=0,this.eh=null,this.ei=null,this.eo=!1,this.cK=null,this.em=null,this.en=0,this.em=t,this.ek=void 0,Jl(this),this.cJ=0,lf(this),this.cK=void 0,this.en=1,sh(this,e)}b=Eh.prototype=new x,b.constructor=Eh;function Dh(){}Dh.prototype=b,b.bJ=(function(){return this.ek}),b.o=(function(){return vr(this)}),b.dF=(function(){return this.ej}),b.dI=(function(){return this.el}),b.cj=(function(e){this.ej=e}),b.dJ=(function(e){this.el=e}),b.h0=(function(){}),b.f=(function(e){return this===e}),b.m=(function(){return Jn(this)}),b.dt=(function(){return this.cJ}),b.du=(function(e){this.cJ=e}),b.cp=(function(){return this}),b.gZ=(function(){Vp(this)}),b.bG=(function(){return this.eh}),b.bI=(function(){return this.ei}),b.hf=(function(){return this.eo}),b.ct=(function(e){this.eo=e}),b.gv=(function(e){this.eh=e}),b.gw=(function(e){this.ei=e}),b.dH=(function(){return this.cK}),b.gV=(function(e){this.cK=e}),b.cq=(function(){return ch(this)}),b.hd=(function(){return this.en}),b.dz=(function(){return ch(this)}),b.h1=(function(){}),b.bF=(function(){return this.em.a9()+`.signal`}),new C().i(Eh,`com.raquo.airstream.state.VarSignal`,{bW:1,a6:1,V:1,aj:1,al:1,a7:1,am:1,an:1,ao:1,bS:1});function Q(e,t){return e===t?!0:Oh(t)&&t.gr(e)?e.dO(t):!1}function Oh(e){return!!(e&&e.$classData&&e.$classData.n.g)}function kh(e){e.cB=e.ad!==null,e.bS=-1}function Ah(e){if(hf(e.ad),e.cB){var t=e.ad.dt();t!==e.bS&&jh(e,e.dz(),t)}}function jh(e,t,n){sh(e,t),e.bS=n}function Mh(e,t,n){e.cB&&(e.bS=e.ad.dt())}function Nh(e){ff(e.ad,e,!1),Vp(e)}function Ph(e){Zl(e.ad,e)}function Fh(e,t,n){this.e3=null,this.e2=!1,this.e4=null,this.cz=0,this.e0=null,this.e1=null,this.e6=!1,this.cA=null,this.cB=!1,this.bS=0,this.ad=null,this.cC=null,this.cD=null,this.e5=0,this.ad=e,this.cC=t,this.cD=n,this.e3=void 0,Jl(this),this.cz=0,lf(this),this.cA=void 0,kh(this),this.e5=1+e.hd()|0}b=Fh.prototype=new x,b.constructor=Fh;function Ih(){}Ih.prototype=b,b.bJ=(function(){return this.e3}),b.bF=(function(){return _r(this)}),b.o=(function(){return vr(this)}),b.dF=(function(){return this.e2}),b.dI=(function(){return this.e4}),b.cj=(function(e){this.e2=e}),b.dJ=(function(e){this.e4=e}),b.f=(function(e){return this===e}),b.m=(function(){return Jn(this)}),b.dt=(function(){return this.cz}),b.du=(function(e){this.cz=e}),b.cp=(function(){return this}),b.bG=(function(){return this.e0}),b.bI=(function(){return this.e1}),b.hf=(function(){return this.e6}),b.ct=(function(e){this.e6=e}),b.gv=(function(e){this.e0=e}),b.gw=(function(e){this.e1=e}),b.dH=(function(){return this.cA}),b.gV=(function(e){this.cA=e}),b.cq=(function(){return ch(this)}),b.h1=(function(){Ah(this)}),b.gZ=(function(){Nh(this)}),b.h0=(function(){Ph(this)}),b.hd=(function(){return this.e5}),b.j8=(function(e,t){Mh(this,e,t),e.aa(new K((e=>{var n=this.cD;if(n.g())uh(this,e,t);else{var r=n.u();try{var i=new Fp(r.b3(e,new K((e=>null))))}catch(e){var a=e instanceof I?e:new Z(e);matchEnd8:{var i;if(Qs().ce(a)){var i=new Np(a);break matchEnd8}throw a instanceof Z?a.D:a}}i.aa(new K((e=>(n=>{uh(this,new Lp(n,e),t)}))(e)),new K((e=>(n=>{n===null?uh(this,e,t):n.g()||lh(this,n.u(),t)}))(e)))}})),new K((n=>{dh(this,e.dG(this.cC),t)})))}),b.dz=(function(){var e=this.ad.cq().dG(this.cC);return e.aa(new K((t=>{var n=this.cD;if(n.g())return e;var r=n.u();try{var i=new Fp(r.b3(t,new K((e=>null))))}catch(e){var a=e instanceof I?e:new Z(e);matchEnd8:{var i;if(Qs().ce(a)){var i=new Np(a);break matchEnd8}throw a instanceof Z?a.D:a}}return i.aa(new K((e=>(t=>new Np(new Lp(t,e))))(t)),new K((t=>{if(t===null)return e;var n=t.g()?Y():new X(new Fp(t.u()));return n.g()?e:n.u()})))})),new K((t=>e)))}),new C().i(Fh,`com.raquo.airstream.misc.MapSignal`,{bJ:1,a6:1,V:1,aj:1,al:1,a7:1,am:1,an:1,ao:1,ak:1,bx:1,by:1});function Lh(){}b=Lh.prototype=new _m,b.constructor=Lh;function Rh(){}Rh.prototype=b,b.gr=(function(e){return!0}),b.f=(function(e){return Q(this,e)}),b.m=(function(){return L().jn(this)}),b.o=(function(){return ip(this)}),b.gS=(function(e){return Zd(this,e)}),b.g=(function(){return Qd(this)}),b.dO=(function(e){return $d(this,e)}),b.b3=(function(e,t){return Dl(this,e,t)}),b.aN=(function(e){return this.gS(e|0)});function zh(){}b=zh.prototype=new xh,b.constructor=zh;function Bh(){}Bh.prototype=b;function Vh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Hh(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function Uh(e,t){return e.bp=t,e}function Wh(){this.bp=null}b=Wh.prototype=new Bh,b.constructor=Wh;function Gh(){}Gh.prototype=b,b.p=(function(e){return this.bp.p(e)}),b.k=(function(){return this.bp.k()}),b.g=(function(){return this.bp.g()});function Kh(){this.eO=null,this.eP=!1,this.ey=null,this.ez=!1,this.eu=null,this.ev=!1,this.eS=null,this.eT=!1,this.eK=null,this.eL=!1,this.eI=null,this.eJ=!1,this.eM=null,this.eN=!1,this.ew=null,this.ex=!1,this.eA=null,this.eB=!1,this.eC=null,this.eD=!1,this.eE=null,this.eF=!1,this.eG=null,this.eH=!1,this.hj=null,this.et=null,this.hi=null,this.eQ=null,this.eR=!1,qi(this),Vi(this),zi(this),Bi(this)}b=Kh.prototype=new x,b.constructor=Kh;function qh(){}qh.prototype=b,b.jc=(function(){return this.eP||=(this.eO=jc(new Mc,`p`,!1),!0),this.eO}),b.dB=(function(){return this.ez||=(this.ey=jc(new Mc,`div`,!1),!0),this.ey}),b.hT=(function(){return this.ev||=(this.eu=new gc(`checked`,Ki().eU),!0),this.eu}),b.dQ=(function(){return this.eT||=(this.eS=new gc(`value`,Ki().bg),!0),this.eS}),b.j7=(function(){return this.eL||=(this.eK=new uc(`click`),!0),this.eK}),b.j6=(function(){return this.eJ||=(this.eI=new uc(`change`),!0),this.eI}),b.cn=(function(){return this.eN||=(this.eM=new uc(`input`),!0),this.eM}),b.gz=(function(){return this.ex||=(this.ew=new Pm(`display`),!0),this.ew}),b.gK=(function(){return this.eB||=(this.eA=new Wp(`flex-direction`),!0),this.eA}),b.ii=(function(){return this.eD||=(this.eC=new Kp(`flex-wrap`),!0),this.eC}),b.gO=(function(){return this.eF||=(this.eE=new Im(`gap`),!0),this.eE}),b.iO=(function(){return this.eH||=(this.eG=new vh(`max-width`),!0),this.eG}),b.jy=(function(){return this.eR||=(this.eQ=new Cd(this),!0),this.eQ}),new C().i(Kh,`com.raquo.laminar.api.package$$anon$1`,{c9:1,ct:1,cd:1,ci:1,ch:1,cj:1,cf:1,c7:1,c3:1,c6:1,aq:1,au:1,ap:1,c4:1});function Jh(e){this.bp=null,Uh(this,e)}b=Jh.prototype=new Gh,b.constructor=Jh;function Yh(){}Yh.prototype=b,b.n=(function(){return new Sm(this)}),b.ba=(function(){return`IndexedSeqView`}),b.au=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),b.B=(function(){return this.k()}),new C().i(Jh,`scala.collection.IndexedSeqView$Id`,{e8:1,ei:1,dT:1,dU:1,h:1,i:1,b:1,k:1,c:1,j:1,em:1,a:1,eh:1,l:1,e7:1,o:1});function Xh(){}b=Xh.prototype=new Rh,b.constructor=Xh;function Zh(){}Zh.prototype=b;function Qh(e,t){return!eg(t)||e.k()===t.k()}function $h(e,t){if(eg(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.gg(),o=t.gg(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=M().E(e.p(i),t.p(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().ch(i),m=t.n().ch(i);r&&p.t();)r=M().E(p.j(),m.j())}return r}else return $d(e,t)}function eg(e){return!!(e&&e.$classData&&e.$classData.n.x)}function tg(){}b=tg.prototype=new Rh,b.constructor=tg;function ng(){}ng.prototype=b;function rg(){}b=rg.prototype=new ng,b.constructor=rg;function ig(){}ig.prototype=b,b.gd=(function(e){return Ol(this,e)});function ag(){}b=ag.prototype=new Zh,b.constructor=ag;function og(){}og.prototype=b,b.gr=(function(e){return Qh(this,e)}),b.dO=(function(e){return $h(this,e)}),b.ba=(function(){return`IndexedSeq`}),b.au=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),b.B=(function(){return this.k()}),b.b5=(function(){return`ArraySeq`}),b.gg=(function(){return 2147483647});function $(){}b=$.prototype=new ng,b.constructor=$;function sg(){}sg.prototype=b,b.ba=(function(){return`IndexedSeq`}),b.au=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),b.B=(function(){return this.k()}),b.b5=(function(){return`ArraySeq`}),b.f=(function(e){return e instanceof $&&Go().b8(this.X())!==Go().b8(e.X())?!1:Q(this,e)});function cg(e){this.aC=null,this.aC=e}b=cg.prototype=new og,b.constructor=cg;function lg(){}lg.prototype=b,b.k=(function(){return this.aC.a.length}),b.m=(function(){var e=L();return e.gq(this.aC,e.w)}),b.f=(function(e){return e instanceof cg?O().gH(this.aC,e.aC):Q(this,e)}),b.n=(function(){return new nh(this.aC)}),b.bE=(function(e){return this.aC.a[e]}),b.d=(function(e){return this.bE(e|0)}),b.p=(function(e){return this.bE(e)}),new C().i(cg,`scala.collection.immutable.ArraySeq$ofBoolean`,{b1:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function ug(e){this.aD=null,this.aD=e}b=ug.prototype=new og,b.constructor=ug;function dg(){}dg.prototype=b,b.k=(function(){return this.aD.a.length}),b.bv=(function(e){return this.aD.a[e]}),b.m=(function(){var e=L();return e.gi(this.aD,e.w)}),b.f=(function(e){return e instanceof ug?O().gA(this.aD,e.aD):Q(this,e)}),b.n=(function(){return new Bm(this.aD)}),b.d=(function(e){return this.bv(e|0)}),b.p=(function(e){return this.bv(e)}),new C().i(ug,`scala.collection.immutable.ArraySeq$ofByte`,{b2:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function fg(e){this.al=null,this.al=e}b=fg.prototype=new og,b.constructor=fg;function pg(){}pg.prototype=b,b.k=(function(){return this.al.a.length}),b.bw=(function(e){return this.al.a[e]}),b.m=(function(){var e=L();return e.gj(this.al,e.w)}),b.f=(function(e){return e instanceof fg?O().gB(this.al,e.al):Q(this,e)}),b.n=(function(){return new Hm(this.al)}),b.bu=(function(e,t,n,r){return new Ig(this.al).bu(e,t,n,r)}),b.d=(function(e){return $n(this.bw(e|0))}),b.p=(function(e){return $n(this.bw(e))}),new C().i(fg,`scala.collection.immutable.ArraySeq$ofChar`,{b3:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function mg(e){this.aE=null,this.aE=e}b=mg.prototype=new og,b.constructor=mg;function hg(){}hg.prototype=b,b.k=(function(){return this.aE.a.length}),b.m=(function(){var e=L();return e.gk(this.aE,e.w)}),b.f=(function(e){return e instanceof mg?O().gC(this.aE,e.aE):Q(this,e)}),b.n=(function(){return new Wm(this.aE)}),b.bz=(function(e){return this.aE.a[e]}),b.d=(function(e){return this.bz(e|0)}),b.p=(function(e){return this.bz(e)}),new C().i(mg,`scala.collection.immutable.ArraySeq$ofDouble`,{b4:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function gg(e){this.aF=null,this.aF=e}b=gg.prototype=new og,b.constructor=gg;function _g(){}_g.prototype=b,b.k=(function(){return this.aF.a.length}),b.m=(function(){var e=L();return e.gl(this.aF,e.w)}),b.f=(function(e){return e instanceof gg?O().gD(this.aF,e.aF):Q(this,e)}),b.n=(function(){return new Km(this.aF)}),b.bA=(function(e){return this.aF.a[e]}),b.d=(function(e){return this.bA(e|0)}),b.p=(function(e){return this.bA(e)}),new C().i(gg,`scala.collection.immutable.ArraySeq$ofFloat`,{b5:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function vg(e){this.aG=null,this.aG=e}b=vg.prototype=new og,b.constructor=vg;function yg(){}yg.prototype=b,b.k=(function(){return this.aG.a.length}),b.m=(function(){var e=L();return e.gm(this.aG,e.w)}),b.f=(function(e){return e instanceof vg?O().gE(this.aG,e.aG):Q(this,e)}),b.n=(function(){return new Jm(this.aG)}),b.bB=(function(e){return this.aG.a[e]}),b.d=(function(e){return this.bB(e|0)}),b.p=(function(e){return this.bB(e)}),new C().i(vg,`scala.collection.immutable.ArraySeq$ofInt`,{b6:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function bg(e){this.aH=null,this.aH=e}b=bg.prototype=new og,b.constructor=bg;function xg(){}xg.prototype=b,b.k=(function(){return this.aH.a.length}),b.m=(function(){var e=L();return e.gn(this.aH,e.w)}),b.f=(function(e){return e instanceof bg?O().gF(this.aH,e.aH):Q(this,e)}),b.n=(function(){return new Xm(this.aH)}),b.bC=(function(e){return this.aH.a[e]}),b.d=(function(e){return this.bC(e|0)}),b.p=(function(e){return this.bC(e)}),new C().i(bg,`scala.collection.immutable.ArraySeq$ofLong`,{b7:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function Sg(e){this.aI=null,this.aI=e}b=Sg.prototype=new og,b.constructor=Sg;function Cg(){}Cg.prototype=b,b.k=(function(){return this.aI.a.length}),b.p=(function(e){return this.aI.a[e]}),b.m=(function(){var e=L();return e.gh(this.aI,e.w)}),b.f=(function(e){return e instanceof Sg?ml().gI(this.aI,e.aI):Q(this,e)}),b.n=(function(){return vm(new ym,this.aI)}),b.d=(function(e){return this.p(e|0)}),new C().i(Sg,`scala.collection.immutable.ArraySeq$ofRef`,{b8:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function wg(e){this.aJ=null,this.aJ=e}b=wg.prototype=new og,b.constructor=wg;function Tg(){}Tg.prototype=b,b.k=(function(){return this.aJ.a.length}),b.bx=(function(e){return this.aJ.a[e]}),b.m=(function(){var e=L();return e.go(this.aJ,e.w)}),b.f=(function(e){return e instanceof wg?O().gG(this.aJ,e.aJ):Q(this,e)}),b.n=(function(){return new Qm(this.aJ)}),b.d=(function(e){return this.bx(e|0)}),b.p=(function(e){return this.bx(e)}),new C().i(wg,`scala.collection.immutable.ArraySeq$ofShort`,{b9:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function Eg(e){this.b1=null,this.b1=e}b=Eg.prototype=new og,b.constructor=Eg;function Dg(){}Dg.prototype=b,b.k=(function(){return this.b1.a.length}),b.m=(function(){var e=L();return e.gp(this.b1,e.w)}),b.f=(function(e){return e instanceof Eg?this.b1.a.length===e.b1.a.length:Q(this,e)}),b.n=(function(){return new eh(this.b1)}),b.bD=(function(e){}),b.d=(function(e){this.bD(e|0)}),b.p=(function(e){this.bD(e)}),new C().i(Eg,`scala.collection.immutable.ArraySeq$ofUnit`,{ba:1,L:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,R:1,B:1,q:1,p:1,Q:1,a:1});function Og(e,t,n,r){for(;;)if(t===r)return n.g()?0:1;else if(n.g())return-1;else{var i=1+t|0,a=n.a1();t=i,n=a}}function kg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.g(),i=n.g();if(!(r||i)&&M().E(t.ab(),n.ab())){var a=t.a1(),o=n.a1();t=a,n=o}else return r&&i}}function Ag(){}b=Ag.prototype=new Zh,b.constructor=Ag;function jg(){}jg.prototype=b,b.n=(function(){return new xp(this)}),b.ba=(function(){return`LinearSeq`}),b.gS=(function(e){return _p(this,e)}),b.p=(function(e){return vp(this,e)}),b.dO=(function(e){return yp(this,e)}),b.g=(function(){return this===r_()}),b.a5=(function(e){for(var t=this;!t.g();)e.d(t.ab()),t=t.a1()}),b.k=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.a1();return t}),b.au=(function(e){return e<0?1:Og(this,0,this,e)}),b.b5=(function(){return`List`}),b.f=(function(e){return e instanceof Ag?kg(this,this,e):Q(this,e)}),b.d=(function(e){return vp(this,e|0)}),b.aN=(function(e){return _p(this,e|0)}),b.i6=(function(e){return hh(this,e,this)});function Mg(e){this.am=null,this.am=e}b=Mg.prototype=new sg,b.constructor=Mg;function Ng(){}Ng.prototype=b,b.k=(function(){return this.am.a.length}),b.m=(function(){var e=L();return e.gq(this.am,e.w)}),b.f=(function(e){return e instanceof Mg?O().gH(this.am,e.am):$.prototype.f.call(this,e)}),b.n=(function(){return new nh(this.am)}),b.bE=(function(e){return this.am.a[e]}),b.d=(function(e){return this.bE(e|0)}),b.p=(function(e){return this.bE(e)}),b.X=(function(){return this.am}),new C().i(Mg,`scala.collection.mutable.ArraySeq$ofBoolean`,{bd:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Pg(e){this.an=null,this.an=e}b=Pg.prototype=new sg,b.constructor=Pg;function Fg(){}Fg.prototype=b,b.k=(function(){return this.an.a.length}),b.bv=(function(e){return this.an.a[e]}),b.m=(function(){var e=L();return e.gi(this.an,e.w)}),b.f=(function(e){return e instanceof Pg?O().gA(this.an,e.an):$.prototype.f.call(this,e)}),b.n=(function(){return new Bm(this.an)}),b.d=(function(e){return this.bv(e|0)}),b.p=(function(e){return this.bv(e)}),b.X=(function(){return this.an}),new C().i(Pg,`scala.collection.mutable.ArraySeq$ofByte`,{be:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Ig(e){this.U=null,this.U=e}b=Ig.prototype=new sg,b.constructor=Ig;function Lg(){}Lg.prototype=b,b.k=(function(){return this.U.a.length}),b.bw=(function(e){return this.U.a[e]}),b.m=(function(){var e=L();return e.gj(this.U,e.w)}),b.f=(function(e){return e instanceof Ig?O().gB(this.U,e.U):$.prototype.f.call(this,e)}),b.n=(function(){return new Hm(this.U)}),b.bu=(function(e,t,n,r){var i=e.M;t.length!==0&&(i.q=``+i.q+t);var a=this.U.a.length;if(a!==0)if(n===``)i.hH(this.U);else{i.k();var o=this.U.a[0],s=``+Wn(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.U.a[c],u=``+Wn(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),b.d=(function(e){return $n(this.bw(e|0))}),b.p=(function(e){return $n(this.bw(e))}),b.X=(function(){return this.U}),new C().i(Ig,`scala.collection.mutable.ArraySeq$ofChar`,{bf:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Rg(e){this.ao=null,this.ao=e}b=Rg.prototype=new sg,b.constructor=Rg;function zg(){}zg.prototype=b,b.k=(function(){return this.ao.a.length}),b.m=(function(){var e=L();return e.gk(this.ao,e.w)}),b.f=(function(e){return e instanceof Rg?O().gC(this.ao,e.ao):$.prototype.f.call(this,e)}),b.n=(function(){return new Wm(this.ao)}),b.bz=(function(e){return this.ao.a[e]}),b.d=(function(e){return this.bz(e|0)}),b.p=(function(e){return this.bz(e)}),b.X=(function(){return this.ao}),new C().i(Rg,`scala.collection.mutable.ArraySeq$ofDouble`,{bg:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Bg(e){this.ap=null,this.ap=e}b=Bg.prototype=new sg,b.constructor=Bg;function Vg(){}Vg.prototype=b,b.k=(function(){return this.ap.a.length}),b.m=(function(){var e=L();return e.gl(this.ap,e.w)}),b.f=(function(e){return e instanceof Bg?O().gD(this.ap,e.ap):$.prototype.f.call(this,e)}),b.n=(function(){return new Km(this.ap)}),b.bA=(function(e){return this.ap.a[e]}),b.d=(function(e){return this.bA(e|0)}),b.p=(function(e){return this.bA(e)}),b.X=(function(){return this.ap}),new C().i(Bg,`scala.collection.mutable.ArraySeq$ofFloat`,{bh:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Hg(e){this.aq=null,this.aq=e}b=Hg.prototype=new sg,b.constructor=Hg;function Ug(){}Ug.prototype=b,b.k=(function(){return this.aq.a.length}),b.m=(function(){var e=L();return e.gm(this.aq,e.w)}),b.f=(function(e){return e instanceof Hg?O().gE(this.aq,e.aq):$.prototype.f.call(this,e)}),b.n=(function(){return new Jm(this.aq)}),b.bB=(function(e){return this.aq.a[e]}),b.d=(function(e){return this.bB(e|0)}),b.p=(function(e){return this.bB(e)}),b.X=(function(){return this.aq}),new C().i(Hg,`scala.collection.mutable.ArraySeq$ofInt`,{bi:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Wg(e){this.ar=null,this.ar=e}b=Wg.prototype=new sg,b.constructor=Wg;function Gg(){}Gg.prototype=b,b.k=(function(){return this.ar.a.length}),b.m=(function(){var e=L();return e.gn(this.ar,e.w)}),b.f=(function(e){return e instanceof Wg?O().gF(this.ar,e.ar):$.prototype.f.call(this,e)}),b.n=(function(){return new Xm(this.ar)}),b.bC=(function(e){return this.ar.a[e]}),b.d=(function(e){return this.bC(e|0)}),b.p=(function(e){return this.bC(e)}),b.X=(function(){return this.ar}),new C().i(Wg,`scala.collection.mutable.ArraySeq$ofLong`,{bj:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Kg(e){this.as=null,this.as=e}b=Kg.prototype=new sg,b.constructor=Kg;function qg(){}qg.prototype=b,b.k=(function(){return this.as.a.length}),b.p=(function(e){return this.as.a[e]}),b.m=(function(){var e=L();return e.gh(this.as,e.w)}),b.f=(function(e){return e instanceof Kg?ml().gI(this.as,e.as):$.prototype.f.call(this,e)}),b.n=(function(){return vm(new ym,this.as)}),b.d=(function(e){return this.p(e|0)}),b.X=(function(){return this.as}),new C().i(Kg,`scala.collection.mutable.ArraySeq$ofRef`,{bk:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Jg(e){this.at=null,this.at=e}b=Jg.prototype=new sg,b.constructor=Jg;function Yg(){}Yg.prototype=b,b.k=(function(){return this.at.a.length}),b.bx=(function(e){return this.at.a[e]}),b.m=(function(){var e=L();return e.go(this.at,e.w)}),b.f=(function(e){return e instanceof Jg?O().gG(this.at,e.at):$.prototype.f.call(this,e)}),b.n=(function(){return new Qm(this.at)}),b.d=(function(e){return this.bx(e|0)}),b.p=(function(e){return this.bx(e)}),b.X=(function(){return this.at}),new C().i(Jg,`scala.collection.mutable.ArraySeq$ofShort`,{bl:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Xg(e){this.aK=null,this.aK=e}b=Xg.prototype=new sg,b.constructor=Xg;function Zg(){}Zg.prototype=b,b.k=(function(){return this.aK.a.length}),b.m=(function(){var e=L();return e.gp(this.aK,e.w)}),b.f=(function(e){return e instanceof Xg?this.aK.a.length===e.aK.a.length:$.prototype.f.call(this,e)}),b.n=(function(){return new eh(this.aK)}),b.bD=(function(e){}),b.d=(function(e){this.bD(e|0)}),b.p=(function(e){this.bD(e)}),b.X=(function(){return this.aK}),new C().i(Xg,`scala.collection.mutable.ArraySeq$ofUnit`,{bm:1,M:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Qg(e,t){this.dj=null,this.dk=null,this.dj=e,this.dk=t}b=Qg.prototype=new jg,b.constructor=Qg;function $g(){}$g.prototype=b,b.ab=(function(){return this.dj}),b.Q=(function(){return`::`}),b.O=(function(){return 2}),b.P=(function(e){switch(e){case 0:return this.dj;case 1:return this.dk;default:return P().aM(e)}}),b.Z=(function(){return new Dp(this)}),b.a1=(function(){return this.dk}),new C().i(Qg,`scala.collection.immutable.$colon$colon`,{en:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,bb:1,a4:1,aX:1,bc:1,aZ:1,q:1,p:1,B:1,b0:1,a:1,K:1});function e_(){}b=e_.prototype=new jg,b.constructor=e_;function t_(){}t_.prototype=b,b.iz=(function(){throw new Kf(`head of empty list`)}),b.jB=(function(){throw new Gf(`tail of empty list`)}),b.B=(function(){return 0}),b.n=(function(){return H().x}),b.Q=(function(){return`Nil`}),b.O=(function(){return 0}),b.P=(function(e){return P().aM(e)}),b.Z=(function(){return new Dp(this)}),b.a1=(function(){this.jB()}),b.ab=(function(){this.iz()}),new C().i(e_,`scala.collection.immutable.Nil$`,{eq:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,bb:1,a4:1,aX:1,bc:1,aZ:1,q:1,p:1,B:1,b0:1,a:1,K:1});var n_;function r_(){return n_||=new e_,n_}function i_(e,t){return e.M=t,e}function a_(e){return i_(e,new Hd),e}function o_(){this.M=null}b=o_.prototype=new ng,b.constructor=o_;function s_(){}s_.prototype=b,b.ba=(function(){return`IndexedSeq`}),b.n=(function(){return new Sm(new Jh(this))}),b.au=(function(e){var t=this.M.k();return t===e?0:t<e?-1:1}),b.gd=(function(e){return Ol(this,e)}),b.k=(function(){return this.M.k()}),b.B=(function(){return this.M.k()}),b.hD=(function(e){var t=this.M,n=``+Wn(e);return t.q+=n,this}),b.o=(function(){return this.M.q}),b.g=(function(){return this.M.k()===0}),b.h8=(function(){return this.M.q}),b.dx=(function(e){return this.hD(er(e))}),b.d=(function(e){var t=e|0;return $n(this.M.gs(t))}),b.p=(function(e){return $n(this.M.gs(e))}),new C().i(o_,`scala.collection.mutable.StringBuilder`,{ey:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,ew:1,bn:1,bp:1,bo:1,E:1,n:1,o:1,F:1,ab:1,a:1});function c_(e,t){return e.aL=t,e}function l_(e){return c_(e,[]),e}function u_(){this.aL=null}b=u_.prototype=new ig,b.constructor=u_;function d_(){}d_.prototype=b,b.ba=(function(){return`IndexedSeq`}),b.n=(function(){return new Sm(new Jh(this))}),b.au=(function(e){var t=this.aL.length|0;return t===e?0:t<e?-1:1}),b.p=(function(e){return this.aL[e]}),b.k=(function(){return this.aL.length|0}),b.B=(function(){return this.aL.length|0}),b.b5=(function(){return`WrappedArray`}),b.h8=(function(){return this}),b.dx=(function(e){return this.aL.push(e),this}),b.d=(function(e){var t=e|0;return this.aL[t]}),new C().i(u_,`scala.scalajs.js.WrappedArray`,{eZ:1,er:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,et:1,bp:1,bo:1,ex:1,q:1,p:1,E:1,n:1,o:1,F:1,ev:1,bn:1,a:1}),Pn=new k(0,0),hr.z=Pn,Ya(new(um.r()).C([]));