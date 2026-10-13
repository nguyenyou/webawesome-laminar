var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ee=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:te,defineProperty:ne,getOwnPropertyDescriptor:b,getOwnPropertyNames:re,getOwnPropertySymbols:ie,getPrototypeOf:ae}=Object,oe=globalThis,se=oe.trustedTypes,ce=se?se.emptyScript:``,le=oe.reactiveElementPolyfillSupport,ue=(e,t)=>e,de={toAttribute(e,t){switch(t){case Boolean:e=e?ce:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},fe=(e,t)=>!te(e,t),pe={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:fe};Symbol.metadata??=Symbol(`metadata`),oe.litPropertyMetadata??=new WeakMap;var me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ne(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=b(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(ue(`elementProperties`)))return;let e=ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ue(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ue(`properties`))){let e=this.properties,t=[...re(e),...ie(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ee(e))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?de:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?de:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??fe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};me.elementStyles=[],me.shadowRootOptions={mode:`open`},me[ue(`elementProperties`)]=new Map,me[ue(`finalized`)]=new Map,le?.({ReactiveElement:me}),(oe.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const he=globalThis,ge=he.trustedTypes,_e=ge?ge.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ve=`$lit$`,ye=`lit$${Math.random().toFixed(9).slice(2)}$`,be=`?`+ye,xe=`<${be}>`,Se=document,Ce=()=>Se.createComment(``),we=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Te=Array.isArray,Ee=e=>Te(e)||typeof e?.[Symbol.iterator]==`function`,De=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Ae=/>/g,je=RegExp(`>|${De}(?:([^\\s"'>=/]+)(${De}*=${De}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Me=/'/g,Ne=/"/g,Pe=/^(?:script|style|textarea|title)$/i,x=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Fe=Symbol.for(`lit-noChange`),S=Symbol.for(`lit-nothing`),Ie=new WeakMap,Le=Se.createTreeWalker(Se,129);function Re(e,t){if(!Te(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return _e===void 0?t:_e.createHTML(t)}const ze=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Oe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Oe?c[1]===`!--`?o=ke:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=je):(Pe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=je):o=Ae:o===je?c[0]===`>`?(o=i??Oe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?je:c[3]===`"`?Ne:Me):o===Ne||o===Me?o=je:o===ke||o===Ae?o=Oe:(o=je,i=void 0);let d=o===je&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Oe?n+xe:l>=0?(r.push(s),n.slice(0,l)+ve+n.slice(l)+ye+d):n+ye+(l===-2?t:d)}return[Re(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Be=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ze(t,n);if(this.el=e.createElement(l,r),Le.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Le.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ve)){let t=u[o++],n=i.getAttribute(e).split(ye),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ge:r[1]===`?`?Ke:r[1]===`@`?qe:We}),i.removeAttribute(e)}else e.startsWith(ye)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Pe.test(i.tagName)){let e=i.textContent.split(ye),t=e.length-1;if(t>0){i.textContent=ge?ge.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ce()),Le.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ce())}}}else if(i.nodeType===8)if(i.data===be)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(ye,e+1))!==-1;)c.push({type:7,index:a}),e+=ye.length-1}a++}}static createElement(e,t){let n=Se.createElement(`template`);return n.innerHTML=e,n}};function Ve(e,t,n=e,r){if(t===Fe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=we(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ve(e,i._$AS(e,t.values),i,r)),t}var He=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Se).importNode(t,!0);Le.currentNode=r;let i=Le.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ue(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Je(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Le.nextNode(),a++)}return Le.currentNode=Se,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ue=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ve(this,e,t),we(e)?e===S||e==null||e===``?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Fe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ee(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&we(this._$AH)?this._$AA.nextSibling.data=e:this.T(Se.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Be.createElement(Re(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new He(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ie.get(e.strings);return t===void 0&&Ie.set(e.strings,t=new Be(e)),t}k(t){Te(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ce()),this.O(Ce()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},We=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=S}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ve(this,e,t,0),a=!we(e)||e!==this._$AH&&e!==Fe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ve(this,r[n+o],t,o),s===Fe&&(s=this._$AH[o]),a||=!we(s)||s!==this._$AH[o],s===S?e=S:e!==S&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ge=class extends We{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Ke=class extends We{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},qe=class extends We{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ve(this,e,t,0)??S)===Fe)return;let n=this._$AH,r=e===S&&n!==S||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==S&&(n===S||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Je=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ve(this,e)}};const Ye={M:ve,P:ye,A:be,C:1,L:ze,R:He,D:Ee,V:Ve,I:Ue,H:We,N:Ke,U:qe,B:Ge,F:Je},Xe=he.litHtmlPolyfillSupport;Xe?.(Be,Ue),(he.litHtmlVersions??=[]).push(`3.3.1`);const Ze=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ue(t.insertBefore(Ce(),e),e,void 0,n??{})}return i._$AI(e),i},Qe=globalThis;var $e=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Fe}};$e._$litElement$=!0,$e.finalized=!0,Qe.litElementHydrateSupport?.({LitElement:$e});const et=Qe.litElementPolyfillSupport;et?.({LitElement:$e}),(Qe.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const tt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},nt={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe},rt=(e=nt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function C(e){return(t,n)=>typeof n==`object`?rt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function it(e){return C({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const at=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ot(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return at(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return at(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st=v`
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
`,ct=/;\s+$/;function lt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ut(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ct)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var dt,ft=class extends $e{constructor(){super(),u(this,dt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[st,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,dt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,dt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ut({property:lt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ut({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};dt=new WeakMap,s([C()],ft.prototype,`dir`,2),s([C()],ft.prototype,`lang`,2),s([C({type:Boolean,reflect:!0,attribute:`did-ssr`})],ft.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),mt=class extends ft{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[pt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};mt.formAssociated=!0,s([C({reflect:!0})],mt.prototype,`name`,2),s([C({type:Boolean})],mt.prototype,`disabled`,2),s([C({state:!0,attribute:!1})],mt.prototype,`valueHasChanged`,2),s([C({state:!0,attribute:!1})],mt.prototype,`hasInteracted`,2),s([C({attribute:`custom-error`,reflect:!0})],mt.prototype,`customError`,2),s([C({attribute:!1,state:!0,type:Object})],mt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht={small:`s`,medium:`m`,large:`l`},gt=new Set;function _t(e,t){t in ht&&!gt.has(`${e}:${t}`)&&(gt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${ht[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},yt=v`
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
`,bt=v`
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
`,xt=v`
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
function St(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ct=new Set,wt=new Map;let Tt,Et=`ltr`,Dt=`en`;const Ot=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ot){let e=new MutationObserver(At);Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function kt(...e){e.map(e=>{let t=e.$code.toLowerCase();wt.has(t)?wt.set(t,Object.assign(Object.assign({},wt.get(t)),e)):wt.set(t,e),Tt||=e}),At()}function At(){Ot&&(Et=document.documentElement.dir||`ltr`,Dt=document.documentElement.lang||navigator.language),[...Ct.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var jt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ct.add(this.host)}hostDisconnected(){Ct.delete(this.host)}dir(){return`${this.host.dir||Et}`.toLowerCase()}lang(){let e=`${this.host.lang||Dt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Tt?Tt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=wt.get(`${n}-${r}`),a=wt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Tt&&Tt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Tt&&Tt[e])i=Tt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Mt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};kt(Mt);var Nt=Mt,Pt=class extends jt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};kt(Nt);
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
*/const Rt=It(class extends Lt{constructor(e){if(super(e),e.type!==Ft.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Fe}}),w=e=>e??S,zt=Symbol.for(``),Bt=e=>{if(e?.r===zt)return e?._$litStatic$},Vt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:zt}),Ht=new Map,Ut=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Bt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ht.get(e))===void 0&&(o.raw=o,Ht.set(e,t=o)),n=s}return e(t,...n)})(x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var T=class extends mt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new vt(this,`[default]`,`start`,`end`),this.localize=new Pt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){_t(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Vt`a`:Vt`button`;return Ut`
      <${t}
        part="base button"
        class=${Rt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${w(e?void 0:this.disabled)}
        type=${w(e?void 0:this.type)}
        title=${this.title}
        name=${w(e?void 0:this.name)}
        value=${w(e?void 0:this.value)}
        href=${w(e?this.href:void 0)}
        target=${w(e?this.target:void 0)}
        download=${w(e?this.download:void 0)}
        rel=${w(e&&this.rel?this.rel:void 0)}
        role=${w(e?void 0:`button`)}
        aria-disabled=${w(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Ut`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Ut`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};T.shadowRootOptions={...mt.shadowRootOptions,delegatesFocus:!0},T.css=[bt,xt,yt],s([ot(`.button`)],T.prototype,`button`,2),s([ot(`slot:not([name])`)],T.prototype,`labelSlot`,2),s([it()],T.prototype,`invalid`,2),s([it()],T.prototype,`isIconButton`,2),s([C()],T.prototype,`title`,2),s([C({reflect:!0})],T.prototype,`variant`,2),s([C({reflect:!0})],T.prototype,`appearance`,2),s([C({reflect:!0})],T.prototype,`size`,2),s([St(`size`)],T.prototype,`handleSizeChange`,1),s([C({attribute:`with-caret`,type:Boolean,reflect:!0})],T.prototype,`withCaret`,2),s([C({attribute:`with-start`,type:Boolean})],T.prototype,`withStart`,2),s([C({attribute:`with-end`,type:Boolean})],T.prototype,`withEnd`,2),s([C({type:Boolean})],T.prototype,`disabled`,2),s([C({type:Boolean,reflect:!0})],T.prototype,`loading`,2),s([C({type:Boolean,reflect:!0})],T.prototype,`pill`,2),s([C()],T.prototype,`type`,2),s([C({reflect:!0})],T.prototype,`name`,2),s([C({reflect:!0})],T.prototype,`value`,2),s([C({reflect:!0})],T.prototype,`href`,2),s([C()],T.prototype,`target`,2),s([C()],T.prototype,`rel`,2),s([C()],T.prototype,`download`,2),s([C({attribute:`formaction`})],T.prototype,`formAction`,2),s([C({attribute:`formenctype`})],T.prototype,`formEnctype`,2),s([C({attribute:`formmethod`})],T.prototype,`formMethod`,2),s([C({attribute:`formnovalidate`,type:Boolean})],T.prototype,`formNoValidate`,2),s([C({attribute:`formtarget`})],T.prototype,`formTarget`,2),s([St(`disabled`,{waitUntilFirstUpdate:!0})],T.prototype,`handleDisabledChange`,1),s([St(`href`)],T.prototype,`handleHrefChange`,1),s([St(`loading`,{waitUntilFirstUpdate:!0})],T.prototype,`handleLoadingChange`,1),T=s([tt(`wa-button`)],T),T.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wt=v`
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
`,Gt=class extends ft{constructor(){super(...arguments),this.localize=new Pt(this)}render(){return x`
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
    `}};Gt.css=Wt,Gt=s([tt(`wa-spinner`)],Gt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Kt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},qt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Jt=v`
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
`,Yt=``,Xt=``;function Zt(){return Yt.replace(/\/$/,``)}function Qt(e){Xt=e}function $t(){if(!Xt){let e=document.querySelector(`[data-fa-kit-code]`);e&&Qt(e.getAttribute(`data-fa-kit-code`)||``)}return Xt}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var en=`7.3.0`;function tn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function nn(e,t,n){let r=tn(e,t,n),i=Zt();if(i)return`${i}/${r}/${e}.svg`;let a=$t();return a.length>0?`https://ka-p.fontawesome.com/releases/v${en}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${en}/svgs/${r}/${e}.svg`}var rn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>nn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function an(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var on={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},sn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=on[n][e]??on.regular[e]??on.regular[`circle-question`];return r?an(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},cn=`classic`,ln=[rn,sn],un=new Set;function dn(e){un.add(e)}function fn(e){un.delete(e)}function pn(e){return ln.find(t=>t.name===e)}function mn(){return cn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:hn}=Ye,gn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _n=Symbol(),vn=Symbol(),yn,bn=new Map,E=class extends ft{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=x`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?_n:vn}catch{return vn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return _n;yn||=new DOMParser;let r=yn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):_n}catch{return _n}}}connectedCallback(){super.connectedCallback(),dn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fn(this)}async getIconSource(){let e=pn(this.library),t=this.family||mn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?pn(this.library):void 0;if(!e){this.svg=null;return}let r=bn.get(e);r||(r=this.resolveIcon(e,n),bn.set(e,r));let i=await r;if(i===vn&&bn.delete(e),e===(await this.getIconSource()).url){if(gn(i)){this.svg=i;return}switch(i){case vn:case _n:this.svg=null,this.dispatchEvent(new Kt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new qt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=pn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:x`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};E.css=Jt,s([it()],E.prototype,`svg`,2),s([C({reflect:!0})],E.prototype,`name`,2),s([C({reflect:!0})],E.prototype,`family`,2),s([C({reflect:!0})],E.prototype,`variant`,2),s([C({reflect:!0})],E.prototype,`canvas`,2),s([C({attribute:`auto-width`,type:Boolean,reflect:!0})],E.prototype,`autoWidth`,2),s([C({attribute:`swap-opacity`,type:Boolean,reflect:!0})],E.prototype,`swapOpacity`,2),s([C()],E.prototype,`src`,2),s([C()],E.prototype,`label`,2),s([C({reflect:!0})],E.prototype,`library`,2),s([C({type:Number,reflect:!0})],E.prototype,`rotate`,2),s([C({type:String,reflect:!0})],E.prototype,`flip`,2),s([C({type:String,reflect:!0})],E.prototype,`animation`,2),s([St(`label`)],E.prototype,`handleLabelChange`,1),s([St([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],E.prototype,`setIcon`,1),E=s([tt(`wa-icon`)],E);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xn=t({default:()=>T}),Sn=v`
  :host {
    --color: var(--wa-color-surface-border);
    --width: var(--wa-border-width-s);
    --spacing: var(--wa-space-m);
    --label-spacing: var(--wa-space-s);
    --label-offset: 0;
  }

  :host(:not([orientation='vertical'])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([orientation='vertical']) {
    display: inline-block;
    height: 100%;
    border-inline-start: solid var(--width) var(--color);
    margin: 0 var(--spacing);
    min-block-size: 1lh;
  }

  /* With a label, the host's border gives way to two lines that flank the label */
  :host([with-label]) {
    align-items: center;
    gap: var(--label-spacing);
    border: none;
  }

  :host([with-label]:not([orientation='vertical'])) {
    display: flex;
  }

  :host([with-label][orientation='vertical']) {
    display: inline-flex;
    flex-direction: column;
  }

  :host([with-label])::before,
  :host([with-label])::after {
    content: '';
    flex: 1 1 0;
  }

  :host([with-label]:not([orientation='vertical']))::before,
  :host([with-label]:not([orientation='vertical']))::after {
    min-inline-size: 1em;
    border-top: solid var(--width) var(--color);
  }

  :host([with-label][orientation='vertical'])::before,
  :host([with-label][orientation='vertical'])::after {
    min-block-size: 1lh;
    border-inline-start: solid var(--width) var(--color);
  }

  :host([with-label][label-placement='start'])::before,
  :host([with-label][label-placement='end'])::after {
    flex: 0 0 var(--label-offset);
    min-inline-size: 0;
    min-block-size: 0;
  }

  :host(:not([with-label])) .label {
    display: none;
  }

  :host([with-label]) .label {
    display: inline-flex;
    align-items: center;
    gap: var(--wa-space-2xs);
    flex: 0 1 auto;
    color: var(--wa-color-text-quiet);
    font-size: var(--wa-font-size-s);
    line-height: var(--wa-line-height-condensed);
    text-align: center;
  }
`,Cn=class extends ft{constructor(){super(...arguments),this.hasSlotController=new vt(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return x`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Cn.css=Sn,s([C({reflect:!0})],Cn.prototype,`orientation`,2),s([C({attribute:`with-label`,type:Boolean,reflect:!0})],Cn.prototype,`withLabel`,2),s([C({attribute:`label-placement`,reflect:!0})],Cn.prototype,`labelPlacement`,2),s([St(`orientation`)],Cn.prototype,`handleVerticalChange`,1),Cn=s([tt(`wa-divider`)],Cn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=t({default:()=>Cn}),Tn=v`
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
`;function En(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var D=class extends ft{constructor(){super(...arguments),this.hasSlotController=new vt(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){_t(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await En(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await En(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;!this.isLink()||this.disabled||!t||t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return x`
      ${this.href?x`
            <a
              id="link"
              href=${this.href}
              target=${w(this.target)}
              rel=${w(this.rel)}
              download=${w(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?x`
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

      ${this.hasSubmenu?x`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?x`
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
    `}};D.css=Tn,s([ot(`#submenu`)],D.prototype,`submenuElement`,2),s([ot(`#link`)],D.prototype,`linkElement`,2),s([C({type:Boolean})],D.prototype,`active`,2),s([C({reflect:!0})],D.prototype,`variant`,2),s([C({reflect:!0})],D.prototype,`size`,2),s([St(`size`)],D.prototype,`handleSizeChange`,1),s([C({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],D.prototype,`checkboxAdjacent`,2),s([C({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],D.prototype,`submenuAdjacent`,2),s([C()],D.prototype,`value`,2),s([C({reflect:!0})],D.prototype,`type`,2),s([C({type:Boolean})],D.prototype,`checked`,2),s([C({type:Boolean,reflect:!0})],D.prototype,`disabled`,2),s([C({type:Boolean,reflect:!0})],D.prototype,`submenuOpen`,2),s([C({reflect:!0})],D.prototype,`href`,2),s([C()],D.prototype,`target`,2),s([C()],D.prototype,`rel`,2),s([C()],D.prototype,`download`,2),s([it()],D.prototype,`hasSubmenu`,2),D=s([tt(`wa-dropdown-item`)],D);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>D}),On=class extends Event{constructor(e){super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*kn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*kn(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=v`
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
`,jn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Mn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Nn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Pn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Fn=[];function In(e){Ln(e),Fn.push(e)}function Ln(e){for(let t=Fn.length-1;t>=0;t--)if(Fn[t]===e){Fn.splice(t,1);break}}function Rn(e){return Fn.length>0&&Fn[Fn.length-1]===e}let zn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Bn(e=``){return`${e}${zn()}`}const Vn=Math.min,O=Math.max,Hn=Math.round,Un=Math.floor,Wn=e=>({x:e,y:e}),Gn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Kn={start:`end`,end:`start`};function qn(e,t,n){return O(e,Vn(t,n))}function Jn(e,t){return typeof e==`function`?e(t):e}function Yn(e){return e.split(`-`)[0]}function Xn(e){return e.split(`-`)[1]}function Zn(e){return e===`x`?`y`:`x`}function Qn(e){return e===`y`?`height`:`width`}const $n=new Set([`top`,`bottom`]);function er(e){return $n.has(Yn(e))?`y`:`x`}function tr(e){return Zn(er(e))}function nr(e,t,n){n===void 0&&(n=!1);let r=Xn(e),i=tr(e),a=Qn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=dr(o)),[o,dr(o)]}function rr(e){let t=dr(e);return[ir(e),t,ir(t)]}function ir(e){return e.replace(/start|end/g,e=>Kn[e])}const ar=[`left`,`right`],or=[`right`,`left`],sr=[`top`,`bottom`],cr=[`bottom`,`top`];function lr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?or:ar:t?ar:or;case`left`:case`right`:return t?sr:cr;default:return[]}}function ur(e,t,n,r){let i=Xn(e),a=lr(Yn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ir)))),a}function dr(e){return e.replace(/left|right|bottom|top/g,e=>Gn[e])}function fr(e){return{top:0,right:0,bottom:0,left:0,...e}}function pr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:fr(e)}function mr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function hr(e,t,n){let{reference:r,floating:i}=e,a=er(t),o=tr(t),s=Qn(o),c=Yn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Xn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const gr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=hr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=hr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function _r(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Jn(t,e),p=pr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=mr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=mr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const vr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Jn(e,t)||{};if(l==null)return{};let d=pr(u),f={x:n,y:r},p=tr(i),m=Qn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),b=ne?ne[y]:0;(!b||!await(o.isElement==null?void 0:o.isElement(ne)))&&(b=s.floating[y]||a.floating[m]);let re=ee/2-te/2,ie=b/2-h[m]/2-1,ae=Vn(d[_],ie),oe=Vn(d[v],ie),se=ae,ce=b-h[m]-oe,le=b/2-h[m]/2+re,ue=qn(se,le,ce),de=!c.arrow&&Xn(i)!=null&&le!==ue&&a.reference[m]/2-(le<se?ae:oe)-h[m]/2<0,fe=de?le<se?le-se:le-ce:0;return{[p]:f[p]+fe,data:{[p]:ue,centerOffset:le-ue-fe,...de&&{alignmentOffset:fe}},reset:de}}}),yr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Jn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Yn(r),_=er(o),v=Yn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[dr(o)]:rr(o)),te=p!==`none`;!d&&te&&ee.push(...ur(o,m,p,y));let ne=[o,...ee],b=await _r(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(b[g]),u){let e=nr(r,a,y);re.push(b[e[0]],b[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==er(t))||ie.every(e=>er(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(te){let t=er(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},br=new Set([`left`,`top`]);async function xr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Yn(n),s=Xn(n),c=er(n)===`y`,l=br.has(o)?-1:1,u=a&&c?-1:1,d=Jn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Sr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await xr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Cr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Jn(e,t),l={x:n,y:r},u=await _r(t,c),d=er(Yn(i)),f=Zn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=qn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=qn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},wr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Jn(e,t),u=await _r(t,l),d=Yn(i),f=Xn(i),p=er(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=Vn(h-u[g],v),te=Vn(m-u[_],y),ne=!t.middlewareData.shift,b=ee,re=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(re=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(b=v),ne&&!f){let e=O(u.left,0),t=O(u.right,0),n=O(u.top,0),r=O(u.bottom,0);p?re=m-2*(e!==0||t!==0?e+t:O(u.left,u.right)):b=h-2*(n!==0||r!==0?n+r:O(u.top,u.bottom))}await c({...t,availableWidth:re,availableHeight:b});let ie=await o.getDimensions(s.floating);return m!==ie.width||h!==ie.height?{reset:{rects:!0}}:{}}}};function Tr(){return typeof window<`u`}function Er(e){return kr(e)?(e.nodeName||``).toLowerCase():`#document`}function Dr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Or(e){return((kr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kr(e){return Tr()?e instanceof Node||e instanceof Dr(e).Node:!1}function Ar(e){return Tr()?e instanceof Element||e instanceof Dr(e).Element:!1}function jr(e){return Tr()?e instanceof HTMLElement||e instanceof Dr(e).HTMLElement:!1}function Mr(e){return!Tr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Dr(e).ShadowRoot}const Nr=new Set([`inline`,`contents`]);function Pr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=qr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Nr.has(i)}const Fr=new Set([`table`,`td`,`th`]);function Ir(e){return Fr.has(Er(e))}const Lr=[`:popover-open`,`:modal`];function Rr(e){return Lr.some(t=>{try{return e.matches(t)}catch{return!1}})}const zr=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Br=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Vr=[`paint`,`layout`,`strict`,`content`];function Hr(e){let t=Wr(),n=Ar(e)?qr(e):e;return zr.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Br.some(e=>(n.willChange||``).includes(e))||Vr.some(e=>(n.contain||``).includes(e))}function Ur(e){let t=Yr(e);for(;jr(t)&&!Kr(t);){if(Hr(t))return t;if(Rr(t))return null;t=Yr(t)}return null}function Wr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Gr=new Set([`html`,`body`,`#document`]);function Kr(e){return Gr.has(Er(e))}function qr(e){return Dr(e).getComputedStyle(e)}function Jr(e){return Ar(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yr(e){if(Er(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Mr(e)&&e.host||Or(e);return Mr(t)?t.host:t}function Xr(e){let t=Yr(e);return Kr(t)?e.ownerDocument?e.ownerDocument.body:e.body:jr(t)&&Pr(t)?t:Xr(t)}function Zr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Xr(e),i=r===e.ownerDocument?.body,a=Dr(r);if(i){let e=Qr(a);return t.concat(a,a.visualViewport||[],Pr(r)?r:[],e&&n?Zr(e):[])}return t.concat(r,Zr(r,[],n))}function Qr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $r(e){let t=qr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=jr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Hn(n)!==a||Hn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ei(e){return Ar(e)?e:e.contextElement}function ti(e){let t=ei(e);if(!jr(t))return Wn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=$r(t),o=(a?Hn(n.width):n.width)/r,s=(a?Hn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ni=Wn(0);function ri(e){let t=Dr(e);return!Wr()||!t.visualViewport?ni:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ii(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Dr(e)?!1:t}function ai(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ei(e),o=Wn(1);t&&(r?Ar(r)&&(o=ti(r)):o=ti(e));let s=ii(a,n,r)?ri(a):Wn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Dr(a),t=r&&Ar(r)?Dr(r):r,n=e,i=Qr(n);for(;i&&r&&t!==n;){let e=ti(i),t=i.getBoundingClientRect(),r=qr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Dr(i),i=Qr(n)}}return mr({width:u,height:d,x:c,y:l})}function oi(e,t){let n=Jr(e).scrollLeft;return t?t.left+n:ai(Or(e)).left+n}function si(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-oi(e,n),y:n.top+t.scrollTop}}function ci(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Or(r),s=t?Rr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Wn(1),u=Wn(0),d=jr(r);if((d||!d&&!a)&&((Er(r)!==`body`||Pr(o))&&(c=Jr(r)),jr(r))){let e=ai(r);l=ti(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?si(o,c):Wn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function li(e){return Array.from(e.getClientRects())}function ui(e){let t=Or(e),n=Jr(e),r=e.ownerDocument.body,i=O(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=O(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+oi(e),s=-n.scrollTop;return qr(r).direction===`rtl`&&(o+=O(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function di(e,t){let n=Dr(e),r=Or(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Wr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=oi(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const fi=new Set([`absolute`,`fixed`]);function pi(e,t){let n=ai(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=jr(e)?ti(e):Wn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function mi(e,t,n){let r;if(t===`viewport`)r=di(e,n);else if(t===`document`)r=ui(Or(e));else if(Ar(t))r=pi(t,n);else{let n=ri(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return mr(r)}function hi(e,t){let n=Yr(e);return n===t||!Ar(n)||Kr(n)?!1:qr(n).position===`fixed`||hi(n,t)}function gi(e,t){let n=t.get(e);if(n)return n;let r=Zr(e,[],!1).filter(e=>Ar(e)&&Er(e)!==`body`),i=null,a=qr(e).position===`fixed`,o=a?Yr(e):e;for(;Ar(o)&&!Kr(o);){let t=qr(o),n=Hr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&fi.has(i.position)||Pr(o)&&!n&&hi(e,o))?r=r.filter(e=>e!==o):i=t,o=Yr(o)}return t.set(e,r),r}function _i(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Rr(t)?[]:gi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=mi(t,n,i);return e.top=O(r.top,e.top),e.right=Vn(r.right,e.right),e.bottom=Vn(r.bottom,e.bottom),e.left=O(r.left,e.left),e},mi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function vi(e){let{width:t,height:n}=$r(e);return{width:t,height:n}}function yi(e,t,n){let r=jr(t),i=Or(t),a=n===`fixed`,o=ai(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Wn(0);function l(){c.x=oi(i)}if(r||!r&&!a)if((Er(t)!==`body`||Pr(i))&&(s=Jr(t)),r){let e=ai(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?si(i,s):Wn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function bi(e){return qr(e).position===`static`}function xi(e,t){if(!jr(e)||qr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Or(e)===n&&(n=n.ownerDocument.body),n}function Si(e,t){let n=Dr(e);if(Rr(e))return n;if(!jr(e)){let t=Yr(e);for(;t&&!Kr(t);){if(Ar(t)&&!bi(t))return t;t=Yr(t)}return n}let r=xi(e,t);for(;r&&Ir(r)&&bi(r);)r=xi(r,t);return r&&Kr(r)&&bi(r)&&!Hr(r)?n:r||Ur(e)||n}const Ci=async function(e){let t=this.getOffsetParent||Si,n=this.getDimensions,r=await n(e.floating);return{reference:yi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function wi(e){return qr(e).direction===`rtl`}const Ti={convertOffsetParentRelativeRectToViewportRelativeRect:ci,getDocumentElement:Or,getClippingRect:_i,getOffsetParent:Si,getElementRects:Ci,getClientRects:li,getDimensions:vi,getScale:ti,isElement:Ar,isRTL:wi};function Ei(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Di(e,t){let n=null,r,i=Or(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Un(d),h=Un(i.clientWidth-(u+f)),g=Un(i.clientHeight-(d+p)),_=Un(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:O(0,Vn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ei(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function Oi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ei(e),u=i||a?[...l?Zr(l):[],...Zr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Di(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?ai(e):null;c&&g();function g(){let t=ai(e);h&&!Ei(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const ki=Sr,Ai=Cr,ji=yr,Mi=wr,Ni=vr,Pi=(e,t,n)=>{let r=new Map,i={platform:Ti,...n},a={...i.platform,_c:r};return gr(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fi=new Set,k=class extends ft{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new Pt(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&Rn(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...kn()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu){e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l){e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`});return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){_t(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Ln(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new jn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;Fi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,Fi.add(this),In(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await En(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Pn)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new Mn({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,Fi.delete(this),Ln(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await En(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new Nn)}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation();return}this.makeSelection(t,e)}}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Oi(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,k.handleSubmenuSlotChange),n.addEventListener(`slotchange`,k.handleSubmenuSlotChange),k.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Pi(e,e.submenuElement,{placement:t,middleware:[ki({mainAxis:0,crossAxis:-5}),ji({fallbackStrategy:`bestFit`}),Ai({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new On({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Bn(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return x`
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
    `}};k.css=[yt,An],s([ot(`slot:not([name])`)],k.prototype,`defaultSlot`,2),s([ot(`#menu`)],k.prototype,`menu`,2),s([ot(`wa-popup`)],k.prototype,`popup`,2),s([C({type:Boolean,reflect:!0})],k.prototype,`open`,2),s([C({reflect:!0})],k.prototype,`size`,2),s([St(`size`)],k.prototype,`handleSizeChange`,1),s([C({reflect:!0})],k.prototype,`placement`,2),s([C({type:Number})],k.prototype,`distance`,2),s([C({type:Number})],k.prototype,`skidding`,2),k=s([tt(`wa-dropdown`)],k);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ii=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Li=v`
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
`;function Ri(e){return Bi(e)}function zi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Bi(e){for(let t=e;t;t=zi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=zi(e);t;t=zi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Hr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Hi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),A=class extends ft{constructor(){super(...arguments),this.localize=new Pt(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Hi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Vi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Oi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[ki({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Mi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Vi(this.anchor)&&this.boundary===`scroll`&&(t=Zr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(ji({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Ai({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Mi({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Ni({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Ti.getOffsetParent(e,Ri):Ti.getOffsetParent;Pi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Ti,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Ii)}render(){return x`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Rt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Rt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?x`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};A.css=Li,s([ot(`.popup`)],A.prototype,`popup`,2),s([ot(`.arrow`)],A.prototype,`arrowEl`,2),s([C({attribute:!1,type:Boolean})],A.prototype,`SUPPORTS_POPOVER`,2),s([C()],A.prototype,`anchor`,2),s([C({type:Boolean,reflect:!0})],A.prototype,`active`,2),s([C({reflect:!0})],A.prototype,`placement`,2),s([C()],A.prototype,`boundary`,2),s([C({type:Number})],A.prototype,`distance`,2),s([C({type:Number})],A.prototype,`skidding`,2),s([C({type:Boolean})],A.prototype,`arrow`,2),s([C({attribute:`arrow-placement`})],A.prototype,`arrowPlacement`,2),s([C({attribute:`arrow-padding`,type:Number})],A.prototype,`arrowPadding`,2),s([C({type:Boolean})],A.prototype,`flip`,2),s([C({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],A.prototype,`flipFallbackPlacements`,2),s([C({attribute:`flip-fallback-strategy`})],A.prototype,`flipFallbackStrategy`,2),s([C({type:Object})],A.prototype,`flipBoundary`,2),s([C({attribute:`flip-padding`,type:Number})],A.prototype,`flipPadding`,2),s([C({type:Boolean})],A.prototype,`shift`,2),s([C({type:Object})],A.prototype,`shiftBoundary`,2),s([C({attribute:`shift-padding`,type:Number})],A.prototype,`shiftPadding`,2),s([C({attribute:`auto-size`})],A.prototype,`autoSize`,2),s([C()],A.prototype,`sync`,2),s([C({type:Object})],A.prototype,`autoSizeBoundary`,2),s([C({attribute:`auto-size-padding`,type:Number})],A.prototype,`autoSizePadding`,2),s([C({attribute:`hover-bridge`,type:Boolean})],A.prototype,`hoverBridge`,2),A=s([tt(`wa-popup`)],A);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ui=t({default:()=>k}),j;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Wi;function Gi(e){this.c=e}j=Gi.prototype,j.toString=(function(){return String.fromCharCode(this.c)});function Ki(e){switch(typeof e){case`string`:return Rm.l();case`number`:return sa(e)?e<<24>>24===e?Ep.l():e<<16>>16===e?Np.l():Mm.l():ca(e)?jm.l():Am.l();case`boolean`:return Uf.l();case`undefined`:return Ac.l();default:return e instanceof z?Fm.l():e instanceof Gi?Kf.l():e&&e.$classData?e.$classData.l():null}}function qi(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return sa(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ca(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof z?`java.lang.Long`:e instanceof Gi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hF()}}function Ji(e,t){switch(typeof e){case`string`:return Lm(e,t);case`number`:return Om(e,t);case`boolean`:return Vf(e,t);case`undefined`:return Dc(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof z?Nm(e,t):e instanceof Gi?Gf(ua(e),t):fa.prototype.j.call(e,t)}}function Yi(e){switch(typeof e){case`string`:return Im(e);case`number`:return km(e);case`boolean`:return Hf(e);case`undefined`:return Oc(e);default:return e&&e.$classData||e===null?e.o():e instanceof z?Pm(e):e instanceof Gi?Wf(ua(e)):fa.prototype.o.call(e)}}function Xi(e){return e===void 0?`undefined`:e.toString()}function Zi(e,t){if(t===0)throw new Tp(`/ by zero`);return e/t|0}function Qi(e,t){if(t===0)throw new Tp(`/ by zero`);return e%t|0}function $i(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ea(e){return String.fromCharCode(e)}function ta(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var na=0,ra=new WeakMap;function ia(e){switch(typeof e){case`string`:return Im(e);case`number`:return km(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Im(n);default:if(e===null)return 0;var r=ra.get(e);return r===void 0&&(r=na+1|0,na=r,ra.set(e,r)),r}}function aa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function oa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function sa(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ca(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function la(e){return new Gi(e)}la(0);function ua(e){return e===null?0:e.c}function da(e){return e===null?Wi:e}function fa(){}j=fa.prototype,j.constructor=fa;function M(){}M.prototype=j,j.o=(function(){return ia(this)}),j.j=(function(e){return this===e}),j.s=(function(){var e=this.o();return qi(this)+`@`+(+(e>>>0)).toString(16)}),j.toString=(function(){return this.s()});function N(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}j=N.prototype=new M,j.constructor=N,j.a2=(function(e,t,n,r){ta(this.a,e,t.a,n,r)}),j.X=(function(){return new N(this.a.slice())});function pa(){}pa.prototype=j;function ma(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}j=ma.prototype=new M,j.constructor=ma,j.a2=(function(e,t,n,r){ta(this.a,e,t.a,n,r)}),j.X=(function(){return new ma(this.a.slice())});function ha(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}j=ha.prototype=new M,j.constructor=ha,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ha(this.a.slice())});function ga(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}j=ga.prototype=new M,j.constructor=ga,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ga(this.a.slice())});function _a(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}j=_a.prototype=new M,j.constructor=_a,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new _a(this.a.slice())});function va(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}j=va.prototype=new M,j.constructor=va,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new va(this.a.slice())});function ya(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Wi}else this.a=e}j=ya.prototype=new M,j.constructor=ya,j.a2=(function(e,t,n,r){ta(this.a,e,t.a,n,r)}),j.X=(function(){return new ya(this.a.slice())});function ba(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}j=ba.prototype=new M,j.constructor=ba,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new ba(this.a.slice())});function xa(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}j=xa.prototype=new M,j.constructor=xa,j.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),j.X=(function(){return new xa(this.a.slice())});function P(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}j=P.prototype,j.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new P().y(this,r,i)),this}),j.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),j.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),j.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new pa;n.constructor=t,n.a2=(function(e,t,n,r){ta(this.a,e,t.a,n,r)}),n.X=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Sa});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),j.r=(function(){return this.A||=new P().a(this),this.A}),j.l=(function(){return this.L||=new Ud(this),this.L}),j.R=(function(e){return this===e||this.F(e)}),j.S=(function(){return this.P?this.P.l():null}),j.Q=(function(){return this.O?this.O.l():null});var Sa=new P;Sa.n={},Sa.E=`Ljava.lang.Object;`,Sa.F=(e=>!e.X),Sa.N=`java.lang.Object`,Sa.I=(e=>e!==null),Sa.A=new P().y(Sa,N,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),fa.prototype.$classData=Sa;var Ca=new P().p(void 0,`V`,`void`,void 0,void 0);new P().p(!1,`Z`,`boolean`,ma,void 0);var wa=new P().p(0,`C`,`char`,ha,Uint16Array);new P().p(0,`B`,`byte`,ga,Int8Array),new P().p(0,`S`,`short`,_a,Int16Array),new P().p(0,`I`,`int`,va,Int32Array);var Ta=new P().p(null,`J`,`long`,ya,void 0);new P().p(0,`F`,`float`,ba,Float32Array),new P().p(0,`D`,`double`,xa,Float64Array);function Ea(e){return Ki(e).cE()+`@`+ia(e)}function Da(e){var t=e.cL;return t===void 0?Ea(e):t}function Oa(){Aa=this,ja().hd(new Q((e=>void 0)),Qc().dW,!0)}j=Oa.prototype=new M,j.constructor=Oa;function ka(){}ka.prototype=j,j.hd=(function(e,t,n){return new Df(e,n,t,this)}),new P().i(Oa,`com.raquo.airstream.core.Observer$`,{ba:1});var Aa;function ja(){return Aa||=new Oa,Aa}function Ma(e){this.bZ=null,this.cM=null,this.c0=0,this.bZ=e,this.cM=void 0;var t=Qa().bt();this.c0=t===void 0?1:1+t.c0|0,Ra().bw===-1||this.c0>Ra().bw?ud().bu(new Cm(this,Ra().bw)):Ua().Q?Ua().am.push(this)|0:Qa().cw(this)}j=Ma.prototype=new M,j.constructor=Ma;function Na(){}Na.prototype=j;var Pa=new P().i(Ma,`com.raquo.airstream.core.Transaction`,{bd:1});function Fa(){this.bw=0,this.cN=null,La=this,this.bw=1e3,this.cN=new Q((e=>{throw q(new J,`Attempted to run Transaction `+e+` after it was already executed.`)}))}j=Fa.prototype=new M,j.constructor=Fa;function Ia(){}Ia.prototype=j,j.ev=(function(e){try{e.bZ.f(e);var t=e.cM;if(t!==void 0)for(;t.hJ();)t.hz().hM(e)}catch(e){var n=e instanceof Tu?e:new Ih(e);ud().bu(n)}}),new P().i(Fa,`com.raquo.airstream.core.Transaction$`,{be:1});var La;function Ra(){return La||=new Fa,La}function za(e){e.bx.length|0?new Ma(new Q((t=>{for(;(e.bx.length|0)>0;){var n=e.bx.shift();try{n.f(t)}catch(e){var r=e instanceof Tu?e:new Ih(e);ud().bu(r)}}for(;(e.am.length|0)>0;){var i=e.am.shift();Qa().cw(i)}}))):(e.am.length|0)>0&&new Ma(new Q((t=>{for(;(e.am.length|0)>0;)Qa().cw(e.am.shift())})))}function Ba(){this.Q=!1,this.bx=null,this.am=null,Ha=this,this.Q=!1,this.bx=wo().ah(U().i(new(V.r()).C([]))),this.am=wo().ah(U().i(new(Pa.r()).C([])))}j=Ba.prototype=new M,j.constructor=Ba;function Va(){}Va.prototype=j,new P().i(Ba,`com.raquo.airstream.core.Transaction$onStart$`,{bf:1});var Ha;function Ua(){return Ha||=new Ba,Ha}function Wa(e,t){return e.an.get(t)}function Ga(e,t){e.by.unshift(t)}function Ka(e){return e.by.shift()}function qa(e,t,n){var r=Wa(e,t),i=r===void 0,a=r===void 0?wo().ah(U().i(new(Pa.r()).C([]))):r;a.push(n),i&&e.an.set(t,a)}function Ja(e,t){var n=Wa(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.an.delete(t),i}}function Ya(){this.by=null,this.an=null,Za=this,this.by=wo().ah(U().i(new(Pa.r()).C([]))),this.an=new Map}j=Ya.prototype=new M,j.constructor=Ya;function Xa(){}Xa.prototype=j,j.cw=(function(e){var t=this.bt();t===void 0?(Ga(this,e),Ra().ev(e),this.fL(e)):qa(this,t,e)}),j.fL=(function(e){for(var t=e;;){var n=this.bt(),r=t;if(!(n!==void 0&&H().K(r,n)))throw q(new J,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.gI(t),t.bZ=Ra().cN;var i=this.bt();if(H().K(i,void 0))if((this.an.size|0)>0){var a=new td(0);throw this.an.forEach((e=>((t,n)=>{e.be=e.be+(t.length|0)|0}))(a)),q(new J,`Transaction queue error: Stack cleared, but a total of `+a.be+` children for `+(this.an.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Ra().ev(i),t=i}}),j.gI=(function(e){for(var t=e;;){var n=Ja(this,t);if(H().K(n,void 0)){Ka(this);var r=this.bt();if(!H().K(r,void 0))t=r;else return}else{Ga(this,n);return}}}),j.bt=(function(){return this.by[0]}),new P().i(Ya,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bg:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(e,t){var n=e.a3.indexOf(t)|0;if(n!==-1)e.a3.splice(n,1),e.G.g()||t.eN();else throw q(new J,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function eo(e){for(;(e.bz.length|0)>0;)$a(e,e.bz.shift())}function to(e){this.cO=null,this.a3=null,this.aF=!1,this.bz=null,this.G=null,this.aG=0,this.cO=e,this.a3=wo().ah(U().i(new(ao.r()).C([]))),this.aF=!0,this.bz=wo().ah(U().i(new(ao.r()).C([]))),this.G=$(),this.aG=0}j=to.prototype=new M,j.constructor=to;function no(){}no.prototype=j,j.ef=(function(){if(this.G.g()){var e=Ua(),t=(()=>{var e=new Ml(this.cO);this.G=new Um(e),this.aF=!1,this.aG=0;for(var t=0,n=this.a3.length|0;t<n;){var r=t+this.aG|0;this.a3[r].eM(e),t=1+t|0}eo(this),this.aF=!0,this.aG=0});if(Ua(),e.Q)t();else{e.Q=!0;try{t()}finally{e.Q=!1,za(e)}}}else throw q(new J,`Can not activate `+this+`: it is already active`)}),j.fF=(function(){if(this.G.g())throw q(new J,`Can not deactivate DynamicOwner: it is not active`);this.aF=!1;for(var e=this.a3,t=0,n=e.length|0;t<n;)e[t].eN(),t=1+t|0;eo(this);var r=this.G;r.g()||r.x().gl(),eo(this),this.aF=!0,this.G=$()}),j.fm=(function(e,t){t?(this.aG=1+this.aG|0,this.a3.unshift(e)):this.a3.push(e);var n=this.G;if(!n.g()){var r=n.x();e.eM(r)}}),j.gN=(function(e){this.aF?$a(this,e):this.bz.push(e)}),new P().i(to,`com.raquo.airstream.ownership.DynamicOwner`,{bh:1});function ro(e,t,n){this.bA=null,this.cP=null,this.bB=null,this.bA=e,this.cP=t,this.bB=$(),e.fm(this,n)}j=ro.prototype=new M,j.constructor=ro;function io(){}io.prototype=j,j.bV=(function(){this.bA.gN(this)}),j.eM=(function(e){var t=Ua(),n=(()=>{this.bB=this.cP.f(e)});if(Ua(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,za(t)}}}),j.eN=(function(){var e=this.bB;e.g()||(e.x().bV(),this.bB=$())});var ao=new P().i(ro,`com.raquo.airstream.ownership.DynamicSubscription`,{bi:1});function oo(){}j=oo.prototype=new M,j.constructor=oo;function so(){}so.prototype=j,j.ha=(function(e,t,n){return new ro(e,new Q((e=>new Um(t.f(e)))),n)}),j.h0=(function(e,t,n){return new ro(e,new Q((e=>(t.f(e),$()))),n)}),new P().i(oo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bj:1});var co;function lo(){return co||=new oo,co}function uo(e){e.aH=wo().ah(U().i(new(vo.r()).C([])))}function fo(e){for(var t=e.aH,n=0,r=t.length|0;n<r;)ho(t[n]),n=1+n|0;e.aH.length=0}function po(e,t){var n=e.aH.indexOf(t)|0;if(n!==-1)e.aH.splice(n,1);else throw q(new J,`Can not remove Subscription from Owner: subscription not found.`)}function mo(e,t){e.aH.push(t)}function ho(e){if(!e.c2)e.cR.aB(),e.c2=!0;else throw q(new J,`Can not kill Subscription: it was already killed.`)}function go(e,t){this.cS=null,this.cR=null,this.c2=!1,this.cS=e,this.cR=t,this.c2=!1,e.gH(this)}j=go.prototype=new M,j.constructor=go;function _o(){}_o.prototype=j,j.bV=(function(){ho(this),po(this.cS,this)});var vo=new P().i(go,`com.raquo.airstream.ownership.Subscription`,{bm:1});function yo(e,t){this.cT=null,this.cU=null,this.a4=null,this.ao=!1,this.cT=e,this.cU=t,this.a4=$(),this.ao=!1}j=yo.prototype=new M,j.constructor=yo;function bo(){}bo.prototype=j,j.gi=(function(){var e=this.a4;return!e.g()&&!e.x().bA.G.g()}),j.gT=(function(e){if(this.ao)throw q(new J,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a4;if(t.g())var n=!1;else var n=e===t.x().bA;if(!n){this.gi()&&!e.G.g()&&(this.ao=!0);var r=this.a4;r.g()||(r.x().bV(),this.a4=$()),this.a4=new Um(lo().ha(e,new Q((e=>(this.ao||this.cT.aB(),new go(e,new sp((()=>{this.ao||this.cU.aB()})))))),!1)),this.ao=!1}}),j.fz=(function(){if(this.ao)throw q(new J,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a4;e.g()||e.x().bV(),this.a4=$()}),new P().i(yo,`com.raquo.airstream.ownership.TransferableSubscription`,{bn:1});function xo(){}j=xo.prototype=new M,j.constructor=xo;function So(){}So.prototype=j,j.ah=(function(e){return[...Tl().h7(e)]}),new P().i(xo,`com.raquo.ew.JsArray$`,{bo:1});var Co;function wo(){return Co||=new xo,Co}function To(){}j=To.prototype=new M,j.constructor=To;function Eo(){}Eo.prototype=j,j.g2=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new P().i(To,`com.raquo.ew.JsArray$RichJsArray$`,{bp:1});var Do;function Oo(){return Do||=new To,Do}function ko(){this.cV=null,jo=this,document.createElement(`template`),this.fD(Z().t.h1().h2()),this.cV=RegExp(` `,`g`)}j=ko.prototype=new M,j.constructor=ko;function Ao(){}Ao.prototype=j,j.fq=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Tu?e:new Ih(e);if(n instanceof Ih&&n.S instanceof DOMException)return!1;throw n instanceof Ih?n.S:n}}),j.gj=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(H().K(t,r))return!0;n=r}}),j.fC=(function(e){return document.createElement(e.cF())}),j.g9=(function(e,t){var n=this.ga(e,t);return n===void 0?void 0:t.b2.bR(n)}),j.ga=(function(e,t){var n=e.Z.getAttributeNS(null,t.ap);return n===null?void 0:n}),j.eW=(function(e,t,n){this.gR(e,t,t.b2.bU(n))}),j.gR=(function(e,t,n){n===null?this.gM(e,t):e.Z.setAttribute(t.ap,n)}),j.gM=(function(e,t){e.Z.removeAttribute(t.ap)}),j.gS=(function(e,t,n){var r=e.Z,i=t.b3,a=t.b4,o=n===null?null:n;o===null?(a.Y(new Q((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.Y(new Q((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),j.fD=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dw)}),j.gd=(function(e,t){var n=this.ge(e,t);return n===void 0?void 0:t.c6.bR(n)}),j.ge=(function(e,t){var n=e.cH(),r=t.bF,i=n.getAttributeNS(r.g()?null:r.x(),t.c7);return i===null?void 0:i}),j.gU=(function(e,t,n){this.gV(e,t,t.c6.bU(n))}),j.gV=(function(e,t,n){if(n===null)this.gO(e,t);else{var r=t.bF;if(r.g())e.cH().setAttribute(t.bE,n);else{var i=r.x();e.cH().setAttributeNS(i,t.bE,n)}}}),j.gO=(function(e,t){var n=e.cH(),r=t.bF;n.removeAttributeNS(r.g()?null:r.x(),t.c7)}),j.fE=(function(e){return document.createTextNode(e)}),j.fH=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new p_(this.fG(r),n);r=i,n=a}}),j.fG=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cV,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new P().i(ko,`com.raquo.laminar.DomApi$`,{bq:1});var jo;function Mo(){return jo||=new ko,jo}function No(e,t,n){this.c4=null,this.cW=null,this.c3=null,this.c4=e,this.cW=t,this.c3=n}j=No.prototype=new M,j.constructor=No;function Po(){}Po.prototype=j,j.Y=(function(e){this.c4===null?this.c3===null?nl().g3(this.cW,e):Oo().g2(this.c3,vf().g6(e)):this.c4.Y(e)}),new P().i(No,`com.raquo.laminar.Seq`,{br:1});function Fo(){}j=Fo.prototype=new M,j.constructor=Fo;function Io(){}Io.prototype=j,new P().i(Fo,`com.raquo.laminar.Seq$`,{bs:1});var Lo;function Ro(){return Lo||=new Fo,Lo}function zo(e){ja(),ud()}function Bo(e){e.f2=ms()}function Vo(e){Ho(e,new Q((e=>{e.di.Z.focus()})))}function Ho(e,t){return new ql(new Q((e=>{var n=new $u(!e.aI.G.g()),r=new Q((e=>{n.bN?n.bN=!1:t.f(e)}));lo().h0(e.aI,new Q((e=>(t=>{r.f(new ls(e,t))}))(e)),!1)})),ms())}function Uo(){this.b1=null,this.db=null,Go=this,this.b1=new Il(Ko()),new Il(Ko()),new Il(Ko()),this.db=new Pl}j=Uo.prototype=new M,j.constructor=Uo;function Wo(){}Wo.prototype=j,new P().i(Uo,`com.raquo.laminar.codecs.package$`,{bA:1});var Go;function Ko(){return Go||=new Uo,Go}function qo(e){e.f3=Jo(e,`class`,` `)}function Jo(e,t,n){var r=Bl(new Vl,t,Ko().b1);return new Rl(r.ap,new Q((e=>{var t=Mo().g9(e,r);return t===void 0?``:t})),new up(((e,t)=>{Mo().eW(e,r,t)})),n)}function Yo(e){e.f1=Xo(e,`class`,` `)}function Xo(e,t,n){var r=new Ul(t,Ko().b1,$());return new Rl(r.bE,new Q((e=>{var t=Mo().gd(e,r);return t===void 0?``:t})),new up(((e,t)=>{Mo().gU(e,r,t)})),n)}function Zo(e){this.bC=null,this.bC=e}j=Zo.prototype=new M,j.constructor=Zo;function Qo(){}Qo.prototype=j,j.eO=(function(e,t){try{this.bC.cy(e,t)}catch(e){var n=e instanceof Tu?e:new Ih(e);ud().bu(n)}}),j.fA=(function(e){return new Zo(new up(((t,n)=>{this.bC.cy(t,n),e.bC.cy(t,n)})))}),j.fr=(function(e){return e===void 0?this:e.fA(this)}),new P().i(Zo,`com.raquo.laminar.inserters.InserterHooks`,{bW:1});function $o(){}j=$o.prototype=new M,j.constructor=$o;function es(){}es.prototype=j,j.gE=(function(e,t){return new mp(e,void 0)}),new P().i($o,`com.raquo.laminar.inserters.StaticChildInserter$`,{bY:1});var ts;function ns(){return ts||=new $o,ts}function rs(){}j=rs.prototype=new M,j.constructor=rs;function is(){}is.prototype=j;function as(){this.f4=null,this.f5=null,this.f6=null,this.f7=null,this.f4=`http://www.w3.org/2000/svg`,this.f5=`http://www.w3.org/1999/xlink`,this.f6=`http://www.w3.org/XML/1998/namespace`,this.f7=`http://www.w3.org/2000/xmlns/`}j=as.prototype=new M,j.constructor=as;function os(){}os.prototype=j,j.gr=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Hp(e)}}),new P().i(as,`com.raquo.laminar.keys.SvgAttr$`,{c2:1});var ss;function cs(){return ss||=new as,ss}function ls(e,t){this.di=null,this.di=e}j=ls.prototype=new M,j.constructor=ls;function us(){}us.prototype=j,new P().i(ls,`com.raquo.laminar.lifecycle.MountContext`,{c3:1});var F=new P().i(1,`com.raquo.laminar.modifiers.Modifier`,{S:1});function ds(){this.f8=null,ps=this,this.f8=new Gl}j=ds.prototype=new M,j.constructor=ds;function fs(){}fs.prototype=j,new P().i(ds,`com.raquo.laminar.modifiers.Modifier$`,{c5:1});var ps;function ms(){return ps||=new ds,ps}function hs(){this.dn=null,_s=this,this.dn=new Yl}j=hs.prototype=new M,j.constructor=hs;function gs(){}gs.prototype=j,new P().i(hs,`com.raquo.laminar.modifiers.RenderableNode$`,{c9:1});var _s;function vs(){return _s||=new hs,_s}function ys(){this.B=null,xs=this,this.B=new tu(new Q((e=>e)),I()),new tu(new Q((e=>``+(e|0))),I()),new tu(new Q((e=>``+ +e)),I()),new tu(new Q((e=>``+!!e)),I()),new tu(new Q((e=>e.h5())),I())}j=ys.prototype=new M,j.constructor=ys;function bs(){}bs.prototype=j,new P().i(ys,`com.raquo.laminar.modifiers.RenderableText$`,{ce:1});var xs;function I(){return xs||=new ys,xs}function Ss(){}j=Ss.prototype=new M,j.constructor=Ss;function Cs(){}Cs.prototype=j,j.bP=(function(e,t,n){var r=new Um(e);t.f0(r),n!==void 0&&n.eO(e,t);var i=Mo().fq(e.aC(),t.aC());return i&&t.eX(r),i}),new P().i(Ss,`com.raquo.laminar.nodes.ParentNode$`,{ch:1});var ws;function Ts(){return ws||=new Ss,ws}function Es(e){this.dt=null,this.dt=new Zo(new up(((t,n)=>{matchResult1:{var r=n.aC();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=ud(),a=r.textContent,o=t.aC().tagName;i.bu(q(new J,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}j=Es.prototype=new M,j.constructor=Es;function Ds(){}Ds.prototype=j,j.fu=(function(e){return e.eL(new Q((e=>e.hc(this.dt))))}),new P().i(Es,`com.raquo.laminar.nodes.Slot`,{cl:1});function Os(){As=this,wo().ah(U().he(new va(new Int32Array([0]))))}j=Os.prototype=new M,j.constructor=Os;function ks(){}ks.prototype=j,j.fj=(function(){return new Q((e=>void 0))}),new P().i(Os,`com.raquo.laminar.tags.CustomHtmlTag$`,{co:1});var As;function js(){return As||=new Os,As}function Ms(){}j=Ms.prototype=new M,j.constructor=Ms;function Ns(){}Ns.prototype=j,j.fo=(function(){Fs().fS(),Fs().fT(),Fs().fU(),Fs().fV(),Fs().fW(),Fs().fX(),Fs().fY()}),j.fS=(function(){var e=document.querySelector(`#example1`);Uu().aA(e).g()||(Z(),new md(e,Nd().z(U().i(new(V.r()).C([])),U().i(new(F.r()).C([])))))}),j.fT=(function(){var e=document.querySelector(`#example2`);Uu().aA(e).g()||(Z(),new md(e,Z().t.cB().bQ(U().i(new(F.r()).C([Nd().z(U().i(new(V.r()).C([new X((e=>e.eK().gY()))])),U().i(new(F.r()).C([K(Z().t,`Start`,I().B)]))),Nd().z(U().i(new(V.r()).C([])),U().i(new(F.r()).C([K(Z().t,`Or continue with`,I().B)]))),Nd().z(U().i(new(V.r()).C([new X((e=>e.eK().fO()))])),U().i(new(F.r()).C([K(Z().t,`End`,I().B)])))])))))}),j.fU=(function(){var e=document.querySelector(`#example3`);Uu().aA(e).g()||(Z(),new md(e,Nd().z(U().i(new(V.r()).C([new X((e=>e.bX().y(`--width: 4px;`)))])),U().i(new(F.r()).C([])))))}),j.fV=(function(){var e=document.querySelector(`#example4`);Uu().aA(e).g()||(Z(),new md(e,Nd().z(U().i(new(V.r()).C([new X((e=>e.bX().y(`--color: tomato;`)))])),U().i(new(F.r()).C([])))))}),j.fW=(function(){var e=document.querySelector(`#example5`);Uu().aA(e).g()||(Z(),new md(e,Z().t.cB().bQ(U().i(new(F.r()).C([Z().t.h6().cA(),K(Z().t,`Above`,I().B),Nd().z(U().i(new(V.r()).C([new X((e=>e.bX().y(`--spacing: 2rem;`)))])),U().i(new(F.r()).C([]))),K(Z().t,`Below`,I().B)])))))}),j.fX=(function(){var e=document.querySelector(`#example6`);Uu().aA(e).g()||(Z(),new md(e,Z().t.cB().bQ(U().i(new(F.r()).C([Z().t.fJ().g1(),Z().t.fn().cA(),K(Z().t,`First`,I().B),Nd().z(U().i(new(V.r()).C([new X((e=>e.eT().eZ()))])),U().i(new(F.r()).C([]))),K(Z().t,`Middle`,I().B),Nd().z(U().i(new(V.r()).C([new X((e=>e.eT().eZ()))])),U().i(new(F.r()).C([]))),K(Z().t,`Last`,I().B)])))))}),j.fY=(function(){var e=document.querySelector(`#example7`);Uu().aA(e).g()||(Z(),new md(e,Ld().z(U().i(new(V.r()).C([new X((e=>dd(Z().t,Bs().h8().fu(U().i(new(gp.r()).C([(Z(),ns().gE(xd().z(U().i(new(V.r()).C([new X((e=>e.hb().y(!0)))])),U().i(new(F.r()).C([K(Z().t,`Menu`,I().B)]))),vs().dn))]))),ku().dU,eu()))),new X((e=>e.bX().y(`max-width: 200px;`)))])),U().i(new(F.r()).C([Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`1`)))])),U().i(new(F.r()).C([K(Z().t,`Option 1`,I().B)]))),Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`2`)))])),U().i(new(F.r()).C([K(Z().t,`Option 2`,I().B)]))),Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`3`)))])),U().i(new(F.r()).C([K(Z().t,`Option 3`,I().B)]))),Nd().z(U().i(new(V.r()).C([])),U().i(new(F.r()).C([]))),Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`4`)))])),U().i(new(F.r()).C([K(Z().t,`Option 4`,I().B)]))),Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`5`)))])),U().i(new(F.r()).C([K(Z().t,`Option 5`,I().B)]))),Vd().z(U().i(new(V.r()).C([new X((e=>e.b0().y(`6`)))])),U().i(new(F.r()).C([K(Z().t,`Option 6`,I().B)])))])))))}),new P().i(Ms,`examples.divider.Main$package$`,{cq:1});var Ps;function Fs(){return Ps||=new Ms,Ps}function Is(e){try{Fs().fo()}catch(e){throw e}}function Ls(){this.dJ=null,this.dK=!1}j=Ls.prototype=new M,j.constructor=Ls;function Rs(){}Rs.prototype=j,j.h8=(function(){return this.dK||=(this.dJ=new Es(`trigger`),!0),this.dJ}),new P().i(Ls,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{cw:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(){this.fa=!1,this.b5=null,this.bH=null,this.dN=null,this.cd=!1,this.f9=0,this.fc=0,this.fb=null,Us=this,this.fa=!0,this.b5=new ArrayBuffer(8),this.bH=new Int32Array(this.b5,0,2),new Float32Array(this.b5,0,2),this.dN=new Float64Array(this.b5,0,1),this.bH[0]=16909060,this.cd=(new Int8Array(this.b5,0,8)[0]|0)==1,this.f9=this.cd?0:1,this.fc=this.cd?1:0,this.fb=null}j=Vs.prototype=new M,j.constructor=Vs;function Hs(){}Hs.prototype=j,j.cG=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dN[0]=e,(this.bH[0]|0)^(this.bH[1]|0))}),new P().i(Vs,`java.lang.FloatingPointBits$`,{cG:1});var Us;function Ws(){return Us||=new Vs,Us}function Gs(e,t){for(var n=L().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ks(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new _u(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new _u(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(yu.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function Ks(e,t){var n=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=L().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=L().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[qs(e,c[1]),ec(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[qs(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[qs(e,d[1]),`<clinit>`]}function qs(e,t){var n=Ys(e);if(Ec().dT.call(n,t))var r=Ys(e)[t];else var r=dc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Js(e){if(!((1&e.M)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cf=t,e.M=(1|e.M)<<24>>24}return e.cf}function Ys(e){return(1&e.M)<<24>>24?e.cf:Js(e)}function Xs(e){if(!((2&e.M)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cg=t,e.M=(2|e.M)<<24>>24}return e.cg}function Zs(e){return(2&e.M)<<24>>24?e.cg:Xs(e)}function Qs(e){return(4&e.M)<<24>>24||(e.ce=Object.keys(Zs(e)),e.M=(4|e.M)<<24>>24),e.ce}function $s(e){return(4&e.M)<<24>>24?e.ce:Qs(e)}function ec(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function tc(e,t){return t?t.arguments&&t.stack?nc(e,t):t.stack&&t.sourceURL?ac(e,t):t.stack&&t.number?ic(e,t):t.stack&&t.fileName?rc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?oc(e,t):sc(e,t):oc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?cc(e,t):lc(e,t):t.stack&&!t.fileName?nc(e,t):uc(e,t):[]}function nc(e,t){return(t.stack+`
`).replace(L().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(L().E(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(L().E(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(L().E(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(L().E(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function rc(e,t){return t.stack.replace(L().E(`(?:\\n@:0)?\\s+$`,`m`),``).replace(L().E(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ic(e,t){return t.stack.replace(L().E(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(L().E(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(L().E(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ac(e,t){return t.stack.replace(L().E(`\\[native code\\]\\n`,`m`),``).replace(L().E(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(L().E(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function oc(e,t){for(var n=L().E(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function sc(e,t){for(var n=L().E(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function cc(e,t){for(var n=L().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function lc(e,t){for(var n=L().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(L().W(`<anonymous function: (\\S+)>`),`$1`).replace(L().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function uc(e,t){return[]}function dc(e,t,n){for(;;)if(t<($s(e).length|0)){var r=$s(e)[t];if(n.startsWith(r))return``+Zs(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function fc(){this.cf=null,this.cg=null,this.ce=null,this.M=0}j=fc.prototype=new M,j.constructor=fc;function pc(){}pc.prototype=j,j.fZ=(function(e){return Gs(this,tc(this,e))}),new P().i(fc,`java.lang.StackTrace$`,{cN:1});var mc;function hc(){return mc||=new fc,mc}function gc(){}j=gc.prototype=new M,j.constructor=gc;function _c(){}_c.prototype=j,j.W=(function(e){return new RegExp(e)}),j.E=(function(e,t){return new RegExp(e,t)}),new P().i(gc,`java.lang.StackTrace$StringRE$`,{cO:1});var vc;function L(){return vc||=new gc,vc}function yc(){this.dP=null,this.fd=null,xc=this,this.dP=new Rh(!1),this.fd=new Rh(!0)}j=yc.prototype=new M,j.constructor=yc;function bc(){}bc.prototype=j,new P().i(yc,`java.lang.System$Streams$`,{cT:1});var xc;function Sc(){return xc||=new yc,xc}function Cc(){this.dT=null,Tc=this,this.dT=Object.prototype.hasOwnProperty}j=Cc.prototype=new M,j.constructor=Cc;function wc(){}wc.prototype=j,new P().i(Cc,`java.lang.Utils$Cache$`,{cV:1});var Tc;function Ec(){return Tc||=new Cc,Tc}function Dc(e,t){return e===t}function Oc(e){return 0}function kc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ar)}var Ac=new P().i(0,`java.lang.Void`,{ar:1},(e=>e===void 0));function jc(e,t){throw new Dp(`argument type mismatch`)}function Mc(){}j=Mc.prototype=new M,j.constructor=Mc;function Nc(){}Nc.prototype=j,j.aV=(function(e){return e instanceof N||e instanceof ma||e instanceof ha||e instanceof ga||e instanceof _a||e instanceof va||e instanceof ya||e instanceof ba||e instanceof xa?e.a.length:jc(this,e)}),new P().i(Mc,`java.lang.reflect.Array$`,{cW:1});var Pc;function Fc(){return Pc||=new Mc,Pc}function Ic(){}j=Ic.prototype=new M,j.constructor=Ic;function Lc(){}Lc.prototype=j,j.eC=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),j.eB=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.eD=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.ey=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.ex=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.eE=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),j.ez=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),j.eA=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new P().i(Ic,`java.util.Arrays$`,{cX:1});var Rc;function R(){return Rc||=new Ic,Rc}function z(e,t){this.c=0,this.d=0,this.c=e,this.d=t}j=z.prototype=new M,j.constructor=z;function zc(){}zc.prototype=j,j.j=(function(e){return e instanceof z&&this.c===e.c&&this.d===e.d}),j.o=(function(){return this.c^this.d}),j.s=(function(){return B().eS(this.c,this.d)}),j.hP=(function(){return this.c}),j.hO=(function(){return B().eR(this.c,this.d)}),j.hN=(function(){return B().bs(this.c,this.d)}),j.hw=(function(){return this.c<<24>>24}),j.hL=(function(){return this.c<<16>>16}),j.hG=(function(){return this.c}),j.hH=(function(){return this}),j.hC=(function(){return B().eR(this.c,this.d)}),j.hA=(function(){return B().bs(this.c,this.d)}),j.hy=(function(e){return B().eP(this.c,this.d,e.c,e.d)}),j.hx=(function(e){return B().eP(this.c,this.d,e.c,e.d)}),j.hB=(function(e){return this.c===e.c&&this.d===e.d}),j.hK=(function(e){return!(this.c===e.c&&this.d===e.d)}),j.ho=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),j.hp=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),j.hk=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),j.hl=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),j.hR=(function(){return new z(~this.c,~this.d)}),j.hi=(function(e){return new z(this.c|e.c,this.d|e.d)}),j.hh=(function(e){return new z(this.c&e.c,this.d&e.d)}),j.hv=(function(e){return new z(this.c^e.c,this.d^e.d)}),j.hq=(function(e){var t=this.c;return new z(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),j.hn=(function(e){var t=this.d;return new z(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),j.hm=(function(e){var t=this.d;return new z(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),j.hQ=(function(){var e=this.c,t=this.d;return new z(-e|0,e===0?-t|0:~t)}),j.ht=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new z(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),j.hr=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new z(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),j.hu=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new z(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),j.hj=(function(e){var t=B();return new z(t.fK(this.c,this.d,e.c,e.d),t.q)}),j.hs=(function(e){var t=B();return new z(t.gL(this.c,this.d,e.c,e.d),t.q)}),new P().i(z,`org.scalajs.linker.runtime.RuntimeLong`,{as:1});function Bc(e,t,n){return-2097152&n?Uc(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Vc(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.q=0,n>>>o|0}else return Uc(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.q=s/4294967296|0,s|0}}function Hc(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.q=n&(-1+i|0),t):Uc(e,t,n,r,i,1)|0;if(-2097152&i)return e.q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.q=a/4294967296|0,a|0}function Uc(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,b=d,re=ee-ne|0,ie=(-2147483648^re)>(-2147483648^ee)?-1+(te-b|0)|0:te-b|0;f=re,p=ie,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ae=u,oe=d,se=ae>>>1|0|oe<<31,ce=oe>>>1|0;u=se,d=ce}var le=f,ue=p;if(ue===i?(-2147483648^le)>=(-2147483648^r):(-2147483648^ue)>=(-2147483648^i)){var de=f,fe=4294967296*p+ +(de>>>0),pe=4294967296*i+ +(r>>>0);if(a!==1){var me=fe/pe,he=me|0,ge=me/4294967296|0,_e=m,ve=h,ye=_e+he|0,be=(-2147483648^ye)<(-2147483648^_e)?1+(ve+ge|0)|0:ve+ge|0;m=ye,h=be}if(a!==0){var xe=fe%pe;f=xe|0,p=xe/4294967296|0}}if(a===0)return e.q=h,m;if(a===1)return e.q=p,f;var Se=m,Ce=4294967296*h+ +(Se>>>0),we=``+f,Te=we.length;return``+Ce+`000000000`.substring(Te)+we}function Wc(){this.q=0}j=Wc.prototype=new M,j.constructor=Wc;function Gc(){}Gc.prototype=j,j.eS=(function(e,t){return t===e>>31?``+e:t<0?`-`+Bc(this,-e|0,e===0?-t|0:~t):Bc(this,e,t)}),j.bs=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),j.eR=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),j.hE=(function(e){return new z(e,e>>31)}),j.hD=(function(e){return new z(this.eQ(e),this.q)}),j.eQ=(function(e){if(e<-0x8000000000000000)return this.q=-2147483648,0;if(e>=0x8000000000000000)return this.q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.q=e<0&&t!==0?-1+n|0:n,t}),j.eP=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),j.fK=(function(e,t,n,r){if((n|r)===0)throw new Tp(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.q=0,-2147483648;var i=Zi(e,n);return this.q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=-1,-1;else return this.q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Vc(this,a,o,s,c);if((t^r)>=0)return l;var u=this.q;return this.q=l===0?-u|0:~u,-l|0}}),j.gL=(function(e,t,n,r){if((n|r)===0)throw new Tp(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Qi(e,n);return this.q=i>>31,i}else return this.q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.q=0,0;else return this.q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Hc(this,a,o,s,c);if(t<0){var u=this.q;return this.q=l===0?-u|0:~u,-l|0}else return l}}),new P().i(Wc,`org.scalajs.linker.runtime.RuntimeLong$`,{cZ:1});var Kc;function B(){return Kc||=new Wc,Kc}var V=new P().i(1,`scala.Function1`,{e:1});function qc(){}j=qc.prototype=new M,j.constructor=qc;function Jc(){}Jc.prototype=j;function Yc(){this.dX=null,this.dW=null,Zc=this,this.dX=new X((e=>Qc().dX)),this.dW=new Qf}j=Yc.prototype=new M,j.constructor=Yc;function Xc(){}Xc.prototype=j,new P().i(Yc,`scala.PartialFunction$`,{dd:1});var Zc;function Qc(){return Zc||=new Yc,Zc}function $c(){this.e0=null,tl=this,this.e0=new X((e=>nl().e0))}j=$c.prototype=new M,j.constructor=$c;function el(){}el.prototype=j,j.g3=(function(e,t){var n=Fc().aV(e),r=0;if(e instanceof N)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof va)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ya)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ba)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ha)for(;r<n;)t.f(la(e.a[r])),r=1+r|0;else if(e instanceof ga)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof _a)for(;r<n;)t.f(e.a[r]),r=1+r|0;else if(e instanceof ma)for(;r<n;)t.f(e.a[r]),r=1+r|0;else throw new Hp(e)}),new P().i($c,`scala.collection.ArrayOps$`,{dj:1});var tl;function nl(){return tl||=new $c,tl}function rl(e,t){for(var n=e.m();n.r();)t.f(n.h())}function il(e,t,n,r){return e.A()===0?``+t+r:e.bg(b_(new x_),t,n,r).J.p}function al(e,t,n,r,i){var a=t.J;n.length!==0&&(a.p=``+a.p+n);var o=e.m();if(o.r()){var s=o.h();for(a.p=``+a.p+s;o.r();){a.p=``+a.p+r;var c=o.h();a.p=``+a.p+c}}return i.length!==0&&(a.p=``+a.p+i),t}function ol(e,t){this.e4=null,this.bb=null,this.e4=e,this.bb=t}j=ol.prototype=new M,j.constructor=ol;function sl(){}sl.prototype=j,j.gg=(function(){return this.e4.aB().m()}),new P().i(ol,`scala.collection.Iterator$ConcatIteratorCell`,{dC:1});function cl(){}j=cl.prototype=new M,j.constructor=cl;function ll(){}ll.prototype=j,j.K=(function(e,t){return e===t||(gu(e)?this.fR(e,t):e instanceof Gi?this.fP(e,t):e===null?t===null:Ji(e,t))}),j.fR=(function(e,t){if(gu(t))return this.fQ(e,t);if(t instanceof Gi){if(typeof e==`number`)return+e===t.c;if(e instanceof z){var n=da(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Ji(e,t)}else return e===null?t===null:Ji(e,t)}),j.fQ=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof z){var r=da(t);return n===B().bs(r.c,r.d)}else return!1}else if(e instanceof z){var i=da(e),a=i.c,o=i.d;if(t instanceof z){var s=da(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return B().bs(a,o)===u}else return!1}else return e===null?t===null:Ji(e,t)}),j.fP=(function(e,t){if(t instanceof Gi)return e.c===t.c;if(gu(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof z){var n=da(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Ji(t,e)}else return e===null&&t===null}),new P().i(cl,`scala.runtime.BoxesRunTime$`,{ed:1});var ul;function H(){return ul||=new cl,ul}var dl=new P().i(0,`scala.runtime.Null$`,{eg:1});function fl(){}j=fl.prototype=new M,j.constructor=fl;function pl(){}pl.prototype=j,j.aT=(function(e,t){if(e instanceof N||e instanceof va||e instanceof xa||e instanceof ya||e instanceof ba)return e.a[t];if(e instanceof ha)return la(e.a[t]);if(e instanceof ga||e instanceof _a||e instanceof ma)return e.a[t];throw e===null?new Mp:new Hp(e)}),j.fv=(function(e,t,n){if(e instanceof N)e.a[t]=n;else if(e instanceof va)e.a[t]=n|0;else if(e instanceof xa)e.a[t]=+n;else if(e instanceof ya)e.a[t]=da(n);else if(e instanceof ba)e.a[t]=Math.fround(n);else if(e instanceof ha)e.a[t]=ua(n);else if(e instanceof ga)e.a[t]=n|0;else if(e instanceof _a)e.a[t]=n|0;else if(e instanceof ma)e.a[t]=!!n;else if(e===null)throw new Mp;else throw new Hp(e)}),j.fk=(function(e){return il(e.aY(),e.ak()+`(`,`,`,`)`)}),j.i=(function(e){return e===null?null:e.a.length===0?eh(ih()):new Lg(e)}),j.he=(function(e){return e===null?null:new Ng(e)}),new P().i(fl,`scala.runtime.ScalaRunTime$`,{eh:1});var ml;function U(){return ml||=new fl,ml}function hl(){}j=hl.prototype=new M,j.constructor=hl;function gl(){}gl.prototype=j,j.b=(function(e,t){var n=this.bW(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.bW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.l=(function(e,t){return this.fx(e^t)}),j.fx=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.aX=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),j.U=(function(e){var t=$i(e);if(t===e)return t;var n=B(),r=n.eQ(e),i=n.q;return B().bs(r,i)===e?r^i:Ws().cG(e)}),j.w=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof z){var t=da(e);return this.aX(new z(t.c,t.d))}else return Yi(e)}),j.br=(function(e){throw Op(new kp,``+e)}),new P().i(hl,`scala.runtime.Statics$`,{ej:1});var _l;function W(){return _l||=new hl,_l}function vl(){}j=vl.prototype=new M,j.constructor=vl;function yl(){}yl.prototype=j,j.gW=(function(e,t){return setTimeout((()=>{t.aB()}),e)}),new P().i(vl,`scala.scalajs.js.timers.package$`,{ep:1});var bl;function xl(){return bl||=new vl,bl}function Sl(){}j=Sl.prototype=new M,j.constructor=Sl;function Cl(){}Cl.prototype=j,j.h7=(function(e){var t=[];return e.Y(new X((e=>t.push(e)|0))),t}),new P().i(Sl,`scala.scalajs.runtime.Compat$`,{ey:1});var wl;function Tl(){return wl||=new Sl,wl}function El(){}j=El.prototype=new M,j.constructor=El;function Dl(){}Dl.prototype=j,j.gX=(function(e){var t=`Illegal command line`+(e.eJ()===0?``:e.eJ()===1?` after first argument`:` after `+e.eJ()+` arguments`)+`: `+e.hI();Lu().gG().gk(t+`
`)}),new P().i(El,`scala.util.CommandLineParser$`,{eA:1});function Ol(e){this.cv=null,this.cv=e}j=Ol.prototype=new M,j.constructor=Ol;function kl(){}kl.prototype=j,j.s=(function(){return`DynamicVariable(`+this.cv+`)`}),new P().i(Ol,`scala.util.DynamicVariable`,{eC:1});function Al(){}j=Al.prototype=new M,j.constructor=Al;function jl(){}jl.prototype=j,j.b=(function(e,t){var n=this.bW(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),j.bW=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),j.l=(function(e,t){return this.F(e^t)}),j.F=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),j.eU=(function(e,t,n){var r=e.ai();if(r===0)return Im(e.ak());var i=t;n||(i=this.b(i,Im(e.ak())));for(var a=0;a<r;)i=this.b(i,W().w(e.aj(a))),a=1+a|0;return this.l(i,r)}),j.h9=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.r();){var s=o.h(),c=W().w(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bW(l,a),this.l(l,i)}),j.gF=(function(e,t){var n=e.m(),r=t;if(!n.r())return this.l(r,0);var i=n.h();if(!n.r())return this.l(this.b(r,W().w(i)),1);var a=n.h(),o=W().w(i);r=this.b(r,o);for(var s=r,c=W().w(a),l=c-o|0,u=2;n.r();){r=this.b(r,c);var d=W().w(n.h());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.r();)r=this.b(r,W().w(n.h())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.F(this.b(this.b(s,l),c))}),j.ej=(function(e,t){var n=t,r=Fc().aV(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().w(U().aT(e,0))),1);default:var i=W().w(U().aT(e,0));n=this.b(n,i);for(var a=n,o=W().w(U().aT(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().w(U().aT(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().w(U().aT(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.gJ=(function(e,t,n,r){return this.F(this.b(this.b(this.b(r,e),t),n))}),j.gh=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().w(e.n(0))),1);default:var i=W().w(e.n(0));n=this.b(n,i);for(var a=n,o=W().w(e.n(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().w(e.n(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().w(e.n(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.gm=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.g();){var l=c.V(),u=c.L(),d=W().w(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gJ(s,a,o,t):this.l(r,n)}),j.es=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.ek=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.el=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.em=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().U(e.a[0])),1);default:var i=W().U(e.a[0]);n=this.b(n,i);for(var a=n,o=W().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().U(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.en=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,W().U(e.a[0])),1);default:var i=W().U(e.a[0]);n=this.b(n,i);for(var a=n,o=W().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=W().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,W().U(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.eo=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.ep=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,W().aX(new z(a.c,a.d))),1);default:var o=e.a[0],s=W().aX(new z(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=W().aX(new z(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=W().aX(new z(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.b(h,W().aX(new z(g.c,g.d))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.F(this.b(this.b(c,d),u))}}),j.eq=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.F(this.b(this.b(a,s),o))}}),j.er=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.F(this.b(this.b(i,o),a))}});function Ml(e){this.aH=null,this.cQ=null,this.c1=!1,this.cQ=e,uo(this),this.c1=!1}j=Ml.prototype=new M,j.constructor=Ml;function Nl(){}Nl.prototype=j,j.gH=(function(e){this.c1?(ho(e),this.cQ.aB()):mo(this,e)}),j.gl=(function(){fo(this),this.c1=!0}),new P().i(Ml,`com.raquo.airstream.ownership.OneTimeOwner`,{bk:1,bl:1});function Pl(){}j=Pl.prototype=new M,j.constructor=Pl;function Fl(){}Fl.prototype=j,j.fI=(function(e){return e!==null}),j.fN=(function(e){return e?``:null}),j.bR=(function(e){return this.fI(e)}),j.bU=(function(e){return this.fN(!!e)}),new P().i(Pl,`com.raquo.laminar.codecs.package$$anon$1`,{bB:1,a0:1});function Il(e){if(e===null)throw new Mp}j=Il.prototype=new M,j.constructor=Il;function Ll(){}Ll.prototype=j,j.bU=(function(e){return e}),j.bR=(function(e){return e}),new P().i(Il,`com.raquo.laminar.codecs.package$$anon$2`,{bC:1,a0:1});function Rl(e,t,n,r){}j=Rl.prototype=new is,j.constructor=Rl;function zl(){}zl.prototype=j,new P().i(Rl,`com.raquo.laminar.keys.CompositeKey`,{c0:1,R:1});function Bl(e,t,n){return e.ap=t,e.b2=n,e}function Vl(){this.ap=null,this.b2=null}j=Vl.prototype=new is,j.constructor=Vl;function Hl(){}Hl.prototype=j,j.y=(function(e){return new fd(this,e,new fp(((e,t,n)=>{Mo().eW(e,t,n)})))}),new P().i(Vl,`com.raquo.laminar.keys.HtmlAttr`,{a3:1,R:1});function Ul(e,t,n){this.c7=null,this.c6=null,this.bE=null,this.bF=null,this.c7=e,this.c6=t;var r=n.g()?$():new Um(n.x()+`:`+e);this.bE=r.g()?e:r.x(),this.bF=n.g()?$():new Um(cs().gr(n.x()))}j=Ul.prototype=new is,j.constructor=Ul;function Wl(){}Wl.prototype=j,new P().i(Ul,`com.raquo.laminar.keys.SvgAttr`,{c1:1,R:1});function Gl(){}j=Gl.prototype=new M,j.constructor=Gl;function Kl(){}Kl.prototype=j,j.a1=(function(e){}),new P().i(Gl,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c6:1,S:1});function ql(e,t){if(this.dm=null,this.dm=e,t===null)throw new Mp}j=ql.prototype=new M,j.constructor=ql;function Jl(){}Jl.prototype=j,j.a1=(function(e){var t=Ua(),n=(()=>{this.dm.f(e)});if(Ua(),t.Q)n();else{t.Q=!0;try{n()}finally{t.Q=!1,za(t)}}}),new P().i(ql,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c7:1,S:1});function Yl(){}j=Yl.prototype=new M,j.constructor=Yl;function Xl(){}Xl.prototype=j,new P().i(Yl,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{ca:1,c8:1});function Zl(){}j=Zl.prototype=new M,j.constructor=Zl;function Ql(){}Ql.prototype=j,new P().i(Zl,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cc:1,cb:1});var $l;function eu(){return $l||=new Zl,$l}function tu(e,t){if(this.dp=null,this.dp=e,t===null)throw new Mp}j=tu.prototype=new M,j.constructor=tu;function nu(){}nu.prototype=j,j.fw=(function(e){return this.dp.f(e)}),new P().i(tu,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cf:1,cd:1});function ru(e){e.ew(new to(new sp((()=>{throw q(new J,`Attempting to use owner of unmounted element: `+il(Mo().fH(e.aC(),(Mo(),v_())),``,` > `,``))}))))}function iu(e,t,n){return e.cb=t,e}function au(){this.cb=null}j=au.prototype=new M,j.constructor=au;function ou(){}ou.prototype=j,j.cF=(function(){return this.cb}),j.bQ=(function(e){var t=this.fy();return e.Y(new Q((e=>{e.a1(t)}))),t}),j.fy=(function(){return new Em(this,Mo().fC(this))}),new P().i(au,`com.raquo.laminar.tags.HtmlTag`,{ag:1,a6:1});function su(e,t){this.dw=null,this.dw=e}j=su.prototype=new M,j.constructor=su;function cu(){}cu.prototype=j,new P().i(su,`com.raquo.laminar.tags.SvgTag`,{cp:1,a6:1});function lu(){}j=lu.prototype=new M,j.constructor=lu;function uu(){}uu.prototype=j,j.bU=(function(e){return e}),j.bR=(function(e){return e}),new P().i(lu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cy:1,a0:1});function du(e,t){return e.aM=t,e.bO(),e}function fu(){this.aM=null,this.aJ=null,this.aK=!1,this.aL=null,this.aN=!1}j=fu.prototype=new M,j.constructor=fu;function pu(){}pu.prototype=j,j.bX=(function(){return this.aK||=(this.aJ=Z().t.gZ(),!0),this.aJ}),j.h3=(function(){return this.aN||=(this.aL=new gd(this.aM,js().fj(),(js(),void 0)),!0),this.aL}),j.z=(function(e,t){var n=this.h3().bQ(U().i(new(F.r()).C([])));return e.Y(new Q((e=>{e.f(this).a1(n)}))),t.Y(new Q((e=>{e.a1(n)}))),n});function mu(){}j=mu.prototype=new M,j.constructor=mu;function hu(){}hu.prototype=j;function gu(e){return e instanceof mu||typeof e==`number`||e instanceof z}function _u(e,t,n,r,i){this.aP=null,this.b7=null,this.aQ=null,this.aR=0,this.aO=0,this.aP=e,this.b7=t,this.aQ=n,this.aR=r,this.aO=i}j=_u.prototype=new M,j.constructor=_u;function vu(){}vu.prototype=j,j.j=(function(e){return e instanceof _u&&this.aQ===e.aQ&&this.aR===e.aR&&this.aO===e.aO&&this.aP===e.aP&&this.b7===e.b7}),j.s=(function(){var e=``;return this.aP!==`<jscode>`&&(e=``+e+this.aP+`.`),e=``+e+this.b7,this.aQ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aQ,this.aR>=0&&(e=e+`:`+this.aR,this.aO>=0&&(e=e+`:`+this.aO)),e+=`)`),e}),j.o=(function(){return Im(this.aP)^Im(this.b7)^Im(this.aQ)^this.aR^this.aO});var yu=new P().i(_u,`java.lang.StackTraceElement`,{aq:1,a:1});function bu(){}j=bu.prototype=new M,j.constructor=bu;function xu(){}xu.prototype=j,j.gs=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new zm;for(var i=``,a=t;a!==r;)i+=``+ea(e.a[a]),a=1+a|0;return i}),new P().i(bu,`java.lang.String$`,{cQ:1,a:1});var Su;function Cu(){return Su||=new bu,Su}function wu(e,t,n,r,i){return e.dR=t,e.dS=i,i&&e.g0(),e}var Tu=class extends Error{constructor(){super(),this.dR=null,this.dS=!1,this.dQ=null,this.bI=null}bq(){return this.dR}g0(){var e=this instanceof Ih?this.S:this;return this.dQ=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gc(){return this.bI===null&&(this.dS?this.bI=hc().fZ(this.dQ):this.bI=new(yu.r()).C(0)),this.bI}s(){var e=qi(this),t=this.bq();return t===null?e:e+`: `+t}o(){return fa.prototype.o.call(this)}j(e){return fa.prototype.j.call(this,e)}get message(){var e=this.bq();return e===null?``:e}get name(){return qi(this)}toString(){return this.s()}};function Eu(){this.dU=null,Ou=this,this.dU=new Ip}j=Eu.prototype=new M,j.constructor=Eu;function Du(){}Du.prototype=j,new P().i(Eu,`scala.$less$colon$less$`,{d2:1,a:1});var Ou;function ku(){return Ou||=new Eu,Ou}function Au(){}j=Au.prototype=new M,j.constructor=Au;function ju(){}ju.prototype=j,j.eG=(function(e,t){var n=e.A();if(n>-1){for(var r=t.gt(n),i=e.m(),a=0;a<n;)U().fv(r,a,i.h()),a=1+a|0;return r}else{var o=null,s=t.gP(),c=s===wa.l();o=[];for(var l=e.m();l.r();){var u=l.h(),d=c?ua(u):u===null?s.al.z:u;o.push(d)}return(s===Ca.l()?Ac.l():s===dl.l()||s===mf.l()?Sa.l():s).al.r().w(o)}}),j.eF=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!H().K(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new P().i(Au,`scala.Array$`,{d4:1,a:1});var Mu;function Nu(){return Mu||=new Au,Mu}function Pu(){this.dV=null,Iu=this,this.dV=new Ol(Sc().dP)}j=Pu.prototype=new M,j.constructor=Pu;function Fu(){}Fu.prototype=j,j.gG=(function(){return this.dV.cv}),new P().i(Pu,`scala.Console$`,{d5:1,dZ:1});var Iu;function Lu(){return Iu||=new Pu,Iu}function Ru(){}j=Ru.prototype=new Jc,j.constructor=Ru;function zu(){}zu.prototype=j,j.hf=(function(e){return e===null?null:e.a.length===0?ch().e5:new s_(e)});function Bu(){}j=Bu.prototype=new M,j.constructor=Bu;function Vu(){}Vu.prototype=j,j.aA=(function(e){return e===null?$():new Um(e)}),new P().i(Bu,`scala.Option$`,{dc:1,a:1});var Hu;function Uu(){return Hu||=new Bu,Hu}function Wu(e,t){if(t===e)e.eg(gm().eH(t));else for(var n=t.m();n.r();)e.cx(n.h());return e}function Gu(){}j=Gu.prototype=new M,j.constructor=Gu;function Ku(){}Ku.prototype=j,j.s=(function(){return`<function0>`});function qu(){}j=qu.prototype=new M,j.constructor=qu;function Ju(){}Ju.prototype=j,j.s=(function(){return`<function1>`});function Yu(){}j=Yu.prototype=new M,j.constructor=Yu;function Xu(){}Xu.prototype=j,j.s=(function(){return`<function2>`});function Zu(){}j=Zu.prototype=new M,j.constructor=Zu;function Qu(){}Qu.prototype=j,j.s=(function(){return`<function3>`});function $u(e){this.bN=!1,this.bN=e}j=$u.prototype=new M,j.constructor=$u;function ed(){}ed.prototype=j,j.s=(function(){return``+this.bN}),new P().i($u,`scala.runtime.BooleanRef`,{ec:1,a:1});function td(e){this.be=0,this.be=e}j=td.prototype=new M,j.constructor=td;function nd(){}nd.prototype=j,j.s=(function(){return``+this.be}),new P().i(td,`scala.runtime.IntRef`,{ee:1,a:1});function rd(){this.u=0,this.ee=0,this.fi=0,this.fh=0,ad=this,this.u=Im(`Seq`),this.ee=Im(`Map`),this.fi=Im(`Set`),this.fh=this.h9(v_(),this.ee)}j=rd.prototype=new jl,j.constructor=rd;function id(){}id.prototype=j,j.gQ=(function(e){return tg(e)?this.gh(e,this.u):e instanceof Gg?this.gm(e,this.u):this.gF(e,this.u)}),new P().i(rd,`scala.util.hashing.MurmurHash3$`,{eE:1,eD:1});var ad;function G(){return ad||=new rd,ad}var od=class extends Tu{};function sd(){this.bY=null,this.cJ=null,this.cK=null,ld=this,this.bY=gm().eh(U().i(new(V.r()).C([]))),this.cJ=new Q((e=>{try{console.error(this.g8(e)+`
`+this.gb(e,`
`))}catch(e){var t=e instanceof Tu?e:new Ih(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cK=new Q((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Ih?t.S:t})),this.gK(this.cJ)}j=sd.prototype=new M,j.constructor=sd;function cd(){}cd.prototype=j,j.g8=(function(e){try{var t=e.bq()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Ki(e).cE()+`: `+t}),j.gb=(function(e,t){try{return il(Xd().hf(e.gc()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),j.gK=(function(e){this.bY.cx(e)}),j.bu=(function(e){for(var t=this.bY.m();t.r();){var n=t.h();try{n.f(e)}catch(e){var r=e instanceof Tu?e:new Ih(e),i=this.cK;if(n===null?i===null:n.j(i))throw r instanceof Ih?r.S:r;console.warn(`Error processing an unhandled error callback:`),xl().gW(0,new sp((e=>(()=>{throw e instanceof Ih?e.S:e}))(r)))}}}),new P().i(sd,`com.raquo.airstream.core.AirstreamError$`,{b7:1,dX:1,dY:1});var ld;function ud(){return ld||=new sd,ld}function K(e,t,n){return new Lf(n.fw(t))}function dd(e,t,n,r){return new ql(new Q((e=>{(Ro(),new No(t,null,null)).Y(new Q((e=>(t=>{n.f(t).a1(e)}))(e)))})),ms())}function fd(e,t,n){this.dk=null,this.dl=null,this.dj=null,this.dk=e,this.dl=t,this.dj=n}j=fd.prototype=new M,j.constructor=fd;function pd(){}pd.prototype=j,j.a1=(function(e){this.dj.fs(e,this.dk,this.dl)}),new P().i(fd,`com.raquo.laminar.modifiers.KeySetter`,{c4:1,S:1,cg:1});function md(e,t){if(this.c9=null,this.dr=null,this.ds=null,this.dr=t,ru(this),e===null)throw q(new J,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!Mo().gj(e,document))throw q(new J,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.ds=e,this.gq()}j=md.prototype=new M,j.constructor=md;function hd(){}hd.prototype=j,j.bT=(function(){return this.c9}),j.ew=(function(e){this.c9=e}),j.gq=(function(){return this.c9.ef(),Ts().bP(this,this.dr,void 0)}),j.aC=(function(){return this.ds}),new P().i(md,`com.raquo.laminar.nodes.RootNode`,{ck:1,a5:1,af:1});function gd(e,t,n){this.cb=null,this.dv=null,this.dv=e,iu(this,e,!1)}j=gd.prototype=new ou,j.constructor=gd;function _d(){}_d.prototype=j,j.cF=(function(){return this.dv}),new P().i(gd,`com.raquo.laminar.tags.CustomHtmlTag`,{cn:1,ag:1,a6:1});function vd(){this.aM=null,this.aJ=null,this.aK=!1,this.aL=null,this.aN=!1,this.dx=null,this.dy=!1,du(this,`wa-button`)}j=vd.prototype=new pu,j.constructor=vd;function yd(){}yd.prototype=j,j.hb=(function(){return this.dy||=(this.dx=(Z(),Bl(new Vl,`with-caret`,Ko().db)),!0),this.dx}),j.bO=(function(){return xn}),new P().i(vd,`io.github.nguyenyou.webawesome.laminar.Button$`,{cr:1,X:1,W:1});var bd;function xd(){return bd||=new vd,bd}function Sd(){this.ap=null,this.b2=null,this.dz=null,this.dA=!1,this.dB=null,this.dC=!1,Bl(this,`label-placement`,new lu)}j=Sd.prototype=new Hl,j.constructor=Sd;function Cd(){}Cd.prototype=j,j.fO=(function(){return this.dA||=(this.dz=Td().y(`end`),!0),this.dz}),j.gY=(function(){return this.dC||=(this.dB=Td().y(`start`),!0),this.dB}),new P().i(Sd,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DividerLabelPlacement$`,{cs:1,a3:1,R:1});var wd;function Td(){return wd||=new Sd,wd}function Ed(){this.ap=null,this.b2=null,this.dD=null,this.dE=!1,Bl(this,`orientation`,new lu)}j=Ed.prototype=new Hl,j.constructor=Ed;function Dd(){}Dd.prototype=j,j.eZ=(function(){return this.dE||=(this.dD=kd().y(`vertical`),!0),this.dD}),new P().i(Ed,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{ct:1,a3:1,R:1});var Od;function kd(){return Od||=new Ed,Od}function Ad(){this.aM=null,this.aJ=null,this.aK=!1,this.aL=null,this.aN=!1,this.dH=null,this.dI=!1,this.dF=null,this.dG=!1,du(this,`wa-divider`)}j=Ad.prototype=new pu,j.constructor=Ad;function jd(){}jd.prototype=j,j.eT=(function(){return this.dI||=(this.dH=kd(),!0),this.dH}),j.eK=(function(){return this.dG||=(this.dF=Td(),!0),this.dF}),j.bO=(function(){return wn}),new P().i(Ad,`io.github.nguyenyou.webawesome.laminar.Divider$`,{cu:1,X:1,W:1});var Md;function Nd(){return Md||=new Ad,Md}function Pd(){this.aM=null,this.aJ=null,this.aK=!1,this.aL=null,this.aN=!1,du(this,`wa-dropdown`)}j=Pd.prototype=new pu,j.constructor=Pd;function Fd(){}Fd.prototype=j,j.bO=(function(){return Ui}),new P().i(Pd,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{cv:1,X:1,W:1});var Id;function Ld(){return Id||=new Pd,Id}function Rd(){this.aM=null,this.aJ=null,this.aK=!1,this.aL=null,this.aN=!1,this.dL=null,this.dM=!1,du(this,`wa-dropdown-item`)}j=Rd.prototype=new pu,j.constructor=Rd;function zd(){}zd.prototype=j,j.b0=(function(){return this.dM||=(this.dL=(Z(),Bl(new Vl,`value`,Ko().b1)),!0),this.dL}),j.bO=(function(){return Dn}),new P().i(Rd,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{cx:1,X:1,W:1});var Bd;function Vd(){return Bd||=new Rd,Bd}function Hd(e){if(e.al.Z)return e.al.Q().cE()+`[]`;for(var t=e.al.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Ud(e){this.cc=null,this.al=e}j=Ud.prototype=new M,j.constructor=Ud;function Wd(){}Wd.prototype=j,j.s=(function(){return(this.al.Y?`interface `:this.al.X?``:`class `)+this.al.N}),j.cE=(function(){return this.cc===null&&(this.cc=Hd(this)),this.cc}),new P().i(Ud,`java.lang.Class`,{cE:1,a:1,L:1});function q(e,t){return wu(e,t,null,!0,!0),e}var J=class extends Tu{};new P().i(J,`java.lang.Exception`,{K:1,u:1,a:1});function Gd(){}j=Gd.prototype=new M,j.constructor=Gd;function Kd(){}Kd.prototype=j;function qd(){this.fe=null,Yd=this,this.fe=uf()}j=qd.prototype=new zu,j.constructor=qd;function Jd(){}Jd.prototype=j,new P().i(qd,`scala.Predef$`,{df:1,d8:1,d9:1});var Yd;function Xd(){return Yd||=new qd,Yd}function Zd(e,t){return e.bK=t,e}function Qd(){this.bK=null}j=Qd.prototype=new M,j.constructor=Qd;function $d(){}$d.prototype=j,j.cD=(function(e){return this.bK.cC(e,Jh())}),j.cz=(function(e){return this.bK.cC(e,Jh())});function ef(e,t){return new nm(e).fB(t)}function tf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?Y().v:new om(e,r,i)}function nf(e,t){for(var n=t.m();e.r()&&n.r();)if(!H().K(e.h(),n.h()))return!1;return e.r()===n.r()}function rf(){this.v=null,of=this,this.v=new Xp}j=rf.prototype=new M,j.constructor=rf;function af(){}af.prototype=j,new P().i(rf,`scala.collection.Iterator$`,{dz:1,Y:1,a:1});var of;function Y(){return of||=new rf,of}function sf(){}j=sf.prototype=new M,j.constructor=sf;function cf(){}cf.prototype=j,new P().i(sf,`scala.collection.immutable.Map$`,{dN:1,dE:1,a:1});var lf;function uf(){return lf||=new sf,lf}function df(e){this.e6=null,this.e6=e}j=df.prototype=new Ku,j.constructor=df;function ff(){}ff.prototype=j,j.aB=(function(){return(0,this.e6)()}),new P().i(df,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{e8:1,b3:1,at:1});function X(e){this.e7=null,this.e7=e}j=X.prototype=new Ju,j.constructor=X;function pf(){}pf.prototype=j,j.f=(function(e){return(0,this.e7)(e)}),new P().i(X,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{e9:1,b4:1,e:1});var mf=new P().i(0,`scala.runtime.Nothing$`,{ef:1,u:1,a:1});function hf(){}j=hf.prototype=new M,j.constructor=hf;function gf(){}gf.prototype=j,j.g6=(function(e){return(t=>e.f(t))}),new P().i(hf,`scala.scalajs.js.Any$`,{ek:1,el:1,em:1});var _f;function vf(){return _f||=new hf,_f}function yf(){}j=yf.prototype=new Ku,j.constructor=yf;function bf(){}bf.prototype=j;function xf(){}j=xf.prototype=new Ju,j.constructor=xf;function Sf(){}Sf.prototype=j;function Cf(){}j=Cf.prototype=new Xu,j.constructor=Cf;function wf(){}wf.prototype=j;function Tf(){}j=Tf.prototype=new Qu,j.constructor=Tf;function Ef(){}Ef.prototype=j;function Df(e,t,n,r){if(this.cL=null,r===null)throw new Mp;this.cL=void 0}j=Df.prototype=new M,j.constructor=Df;function Of(){}Of.prototype=j,j.s=(function(){return Da(this)}),new P().i(Df,`com.raquo.airstream.core.Observer$$anon$8`,{bb:1,bc:1,b8:1,b9:1});function kf(e){if(this.cX=null,this.cY=!1,this.f1=null,e===null)throw new Mp;Yo(this)}j=kf.prototype=new M,j.constructor=kf;function Af(){}Af.prototype=j,j.h2=(function(){return this.cY||=(this.cX=new su(`svg`,!1),!0),this.cX}),new P().i(kf,`com.raquo.laminar.api.Laminar$svg$`,{bv:1,bT:1,bE:1,bG:1});function jf(){this.t=null,Nf=this,this.t=new og}j=jf.prototype=new M,j.constructor=jf;function Mf(){}Mf.prototype=j,new P().i(jf,`com.raquo.laminar.api.package$`,{by:1,ac:1,ad:1,ab:1});var Nf;function Z(){return Nf||=new jf,Nf}function Pf(e,t,n){return e.b3=t,e.b4=n,e}function Ff(){this.b3=null,this.b4=null}j=Ff.prototype=new is,j.constructor=Ff;function If(){}If.prototype=j,j.y=(function(e){return new fd(this,Xi(e),new fp(((e,t,n)=>{Mo().gS(e,t,n)})))});function Lf(e){this.du=null,this.ca=null,this.du=$(),this.ca=Mo().fE(e)}j=Lf.prototype=new M,j.constructor=Lf;function Rf(){}Rf.prototype=j,j.eX=(function(e){this.du=e}),j.f0=(function(e){}),j.a1=(function(e){Ts().bP(e,this,void 0)}),j.h5=(function(){return this.ca.data}),j.aC=(function(){return this.ca}),new P().i(Lf,`com.raquo.laminar.nodes.TextNode`,{cm:1,a5:1,S:1,ae:1});function zf(){}j=zf.prototype=new M,j.constructor=zf;function Bf(){}Bf.prototype=j;function Vf(e,t){return e===t}function Hf(e){return e?1231:1237}var Uf=new P().i(0,`java.lang.Boolean`,{cC:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function Wf(e){return e}function Gf(e,t){return t instanceof Gi&&e===t.c}var Kf=new P().i(0,`java.lang.Character`,{am:1,a:1,P:1,L:1},(e=>e instanceof Gi)),qf=class extends J{};function Jf(){this.p=null,this.p=``}j=Jf.prototype=new M,j.constructor=Jf;function Yf(){}Yf.prototype=j,j.fp=(function(e){var t=Cu().gs(e,0,e.a.length);return this.p=``+this.p+t,this}),j.s=(function(){return this.p}),j.k=(function(){return this.p.length}),j.eu=(function(e){return this.p.charCodeAt(e)}),new P().i(Jf,`java.lang.StringBuilder`,{cR:1,a7:1,ak:1,a:1});function Xf(){}j=Xf.prototype=new Kd,j.constructor=Xf;function Zf(){}Zf.prototype=j;function Qf(){}j=Qf.prototype=new M,j.constructor=Qf;function $f(){}$f.prototype=j,j.s=(function(){return`<function1>`}),j.ft=(function(e){throw new Hp(e)}),j.f=(function(e){this.ft(e)}),new P().i(Qf,`scala.PartialFunction$$anon$1`,{de:1,g:1,e:1,a:1});function ep(){}j=ep.prototype=new M,j.constructor=ep;function tp(){}tp.prototype=j,j.m=(function(){return this}),j.bS=(function(e){return this.bv(e,-1)}),j.bv=(function(e,t){return tf(this,e,t)}),j.s=(function(){return`<iterator>`}),j.bg=(function(e,t,n,r){return al(this,e,t,n,r)}),j.A=(function(){return-1});function np(e,t){return e.bL=t,e}function rp(){this.bL=null}j=rp.prototype=new M,j.constructor=rp;function ip(){}ip.prototype=j,j.eh=(function(e){return this.bL.cz(e)}),j.eH=(function(e){return this.bL.cD(e)}),j.cD=(function(e){return this.eH(e)}),j.cz=(function(e){return this.eh(e)});function ap(e){return e.aW(0)===0}function op(e,t){var n=e.A();if(n!==-1)var r=t.A(),i=r!==-1&&n!==r;else var i=!1;return i?!1:nf(e.m(),t)}function sp(e){this.ea=null,this.ea=e}j=sp.prototype=new bf,j.constructor=sp;function cp(){}cp.prototype=j,j.aB=(function(){return(0,this.ea)()}),new P().i(sp,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{er:1,eq:1,b3:1,at:1});function Q(e){this.eb=null,this.eb=e}j=Q.prototype=new Sf,j.constructor=Q;function lp(){}lp.prototype=j,j.f=(function(e){return(0,this.eb)(e)}),new P().i(Q,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{et:1,es:1,b4:1,e:1});function up(e){this.ec=null,this.ec=e}j=up.prototype=new wf,j.constructor=up;function dp(){}dp.prototype=j,j.cy=(function(e,t){return(0,this.ec)(e,t)}),new P().i(up,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ev:1,eu:1,ea:1,d6:1});function fp(e){this.ed=null,this.ed=e}j=fp.prototype=new Ef,j.constructor=fp;function pp(){}pp.prototype=j,j.fs=(function(e,t,n){return(0,this.ed)(e,t,n)}),new P().i(fp,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{ex:1,ew:1,eb:1,d7:1});function mp(e,t){this.bD=null,this.c5=null,this.bD=e,this.c5=t}j=mp.prototype=new M,j.constructor=mp;function hp(){}hp.prototype=j,j.a1=(function(e){var t=this.c5;t!==void 0&&t.eO(e,this.bD),Ts().bP(e,this.bD,void 0)}),j.hc=(function(e){return new mp(this.bD,e.fr(this.c5))});var gp=new P().i(mp,`com.raquo.laminar.inserters.StaticChildInserter`,{bX:1,S:1,bV:1,bZ:1,bU:1});function _p(e){e.c8=new yo(new sp((()=>{e.aI.ef()})),new sp((()=>{e.aI.fF()})))}function vp(e,t){bp(e,e.bG,t)&&xp(e,t)}function yp(e,t){var n=e.bG;e.bG=t,bp(e,n,t)||xp(e,t)}function bp(e,t,n){var r=!t.g()&&!t.x().bT().G.g(),i=!n.g()&&!n.x().bT().G.g();return r&&!i}function xp(e,t){Sp(e,t.g()?$():new Um(t.x().bT()))}function Sp(e,t){if(t.g())e.c8.fz();else{var n=t.x();e.c8.gT(n)}}function Cp(){}j=Cp.prototype=new Bf,j.constructor=Cp;function wp(){}wp.prototype=j;var Tp=class extends qf{constructor(e){super(),wu(this,e,null,!0,!0)}};new P().i(Tp,`java.lang.ArithmeticException`,{cB:1,Q:1,K:1,u:1,a:1});var Ep=new P().i(0,`java.lang.Byte`,{cD:1,T:1,a:1,P:1,L:1},(e=>aa(e))),Dp=class extends qf{constructor(e){super(),wu(this,e,null,!0,!0)}};new P().i(Dp,`java.lang.IllegalArgumentException`,{cH:1,Q:1,K:1,u:1,a:1});function Op(e,t){return wu(e,t,null,!0,!0),e}var kp=class extends qf{};new P().i(kp,`java.lang.IndexOutOfBoundsException`,{ao:1,Q:1,K:1,u:1,a:1});function Ap(){}j=Ap.prototype=new Bf,j.constructor=Ap;function jp(){}jp.prototype=j,new P().i(Ap,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cK:1,aj:1,ah:1,al:1,ai:1});var Mp=class extends qf{constructor(){super(),wu(this,null,null,!0,!0)}};new P().i(Mp,`java.lang.NullPointerException`,{cL:1,Q:1,K:1,u:1,a:1});var Np=new P().i(0,`java.lang.Short`,{cM:1,T:1,a:1,P:1,L:1},(e=>oa(e))),Pp=class extends qf{constructor(e){super(),wu(this,e,null,!0,!0)}};new P().i(Pp,`java.lang.UnsupportedOperationException`,{cU:1,Q:1,K:1,u:1,a:1});var Fp=class extends qf{constructor(e){super(),wu(this,e,null,!0,!0)}};new P().i(Fp,`java.util.NoSuchElementException`,{cY:1,Q:1,K:1,u:1,a:1});function Ip(){}j=Ip.prototype=new Zf,j.constructor=Ip;function Lp(){}Lp.prototype=j,j.f=(function(e){return e}),j.s=(function(){return`generalized constraint`}),new P().i(Ip,`scala.$less$colon$less$$anon$1`,{d3:1,d0:1,d1:1,e:1,a:1});function Rp(e){return e.ch||=(e.ci=e.bJ===null?`null`:Vp(e),!0),e.ci}function zp(e){return e.ch?e.ci:Rp(e)}function Bp(e){var t=e.bJ;return`of class `+qi(t)}function Vp(e){try{return e.bJ+` (`+Bp(e)+`)`}catch{return`an instance `+Bp(e)}}var Hp=class extends qf{constructor(e){super(),this.ci=null,this.bJ=null,this.ch=!1,this.bJ=e,wu(this,null,null,!0,!0)}bq(){return zp(this)}};new P().i(Hp,`scala.MatchError`,{da:1,Q:1,K:1,u:1,a:1});function Up(){}j=Up.prototype=new M,j.constructor=Up;function Wp(){}Wp.prototype=j,j.g=(function(){return this===$()}),j.A=(function(){return this.g()?0:1}),j.m=(function(){return this.g()?Y().v:new Qp(this.x())});function Gp(e){this.b8=0,this.dZ=0,this.dY=null,this.dY=e,this.b8=0,this.dZ=e.ai()}j=Gp.prototype=new tp,j.constructor=Gp;function Kp(){}Kp.prototype=j,j.r=(function(){return this.b8<this.dZ}),j.h=(function(){var e=this.dY.aj(this.b8);return this.b8=1+this.b8|0,e}),new P().i(Gp,`scala.Product$$anon$1`,{dg:1,r:1,s:1,b:1,c:1});function qp(e){this.bK=null,Zd(this,e)}j=qp.prototype=new $d,j.constructor=qp;function Jp(){}Jp.prototype=j,new P().i(qp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dv:1,du:1,Y:1,a:1,a8:1});function Yp(e){return il(e,e.aU()+`(`,`, `,`)`)}function Xp(){}j=Xp.prototype=new tp,j.constructor=Xp;function Zp(){}Zp.prototype=j,j.r=(function(){return!1}),j.gu=(function(){throw new Fp(`next on empty iterator`)}),j.A=(function(){return 0}),j.bv=(function(e,t){return this}),j.h=(function(){this.gu()}),new P().i(Xp,`scala.collection.Iterator$$anon$19`,{dA:1,r:1,s:1,b:1,c:1});function Qp(e){this.ba=!1,this.e3=null,this.e3=e,this.ba=!1}j=Qp.prototype=new tp,j.constructor=Qp;function $p(){}$p.prototype=j,j.r=(function(){return!this.ba}),j.h=(function(){return this.ba?Y().v.h():(this.ba=!0,this.e3)}),j.bv=(function(e,t){return this.ba||e>0||t===0?Y().v:this}),new P().i(Qp,`scala.collection.Iterator$$anon$20`,{dB:1,r:1,s:1,b:1,c:1});function em(e){for(;;){if(e.D instanceof nm){var t=e.D;e.D=t.D,e.a6=t.a6,t.O!==null&&(e.N===null&&(e.N=t.N),t.N.bb=e.O,e.O=t.O);continue}return}}function tm(e){for(;;)if(e.O===null)return e.D=null,e.N=null,!1;else{if(e.D=e.O.gg(),e.N===e.O&&(e.N=e.N.bb),e.O=e.O.bb,em(e),e.a6)return!0;if(e.D!==null&&e.D.r())return e.a6=!0,!0}}function nm(e){this.D=null,this.O=null,this.N=null,this.a6=!1,this.D=e,this.O=null,this.N=null,this.a6=!1}j=nm.prototype=new tp,j.constructor=nm;function rm(){}rm.prototype=j,j.r=(function(){return this.a6?!0:this.D===null?!1:this.D.r()?(this.a6=!0,!0):tm(this)}),j.h=(function(){return this.r()?(this.a6=!1,this.D.h()):Y().v.h()}),j.fB=(function(e){var t=new ol(e,null);return this.O===null?(this.O=t,this.N=t):(this.N.bb=t,this.N=t),this.D===null&&(this.D=Y().v),this}),new P().i(nm,`scala.collection.Iterator$ConcatIterator`,{az:1,r:1,s:1,b:1,c:1});function im(e){for(;e.a0>0;)e.a7.r()?(e.a7.h(),e.a0=-1+e.a0|0):e.a0=0}function am(e,t){if(e.I<0)return-1;var n=e.I-t|0;return n<0?0:n}function om(e,t,n){this.a7=null,this.I=0,this.a0=0,this.a7=e,this.I=n,this.a0=t}j=om.prototype=new tp,j.constructor=om;function sm(){}sm.prototype=j,j.A=(function(){var e=this.a7.A();if(e<0)return-1;var t=e-this.a0|0,n=t<0?0:t;if(this.I<0)return n;var r=this.I;return r<n?r:n}),j.r=(function(){return im(this),this.I!==0&&this.a7.r()}),j.h=(function(){return im(this),this.I>0?(this.I=-1+this.I|0,this.a7.h()):this.I<0?this.a7.h():Y().v.h()}),j.bv=(function(e,t){var n=e>0?e:0;if(t<0)var r=am(this,n);else if(t<=n)var r=0;else if(this.I<0)var r=t-n|0;else var i=am(this,n),a=t-n|0,r=i<a?i:a;var o=this.a0+n|0;return r===0?Y().v:o<0?(this.a0=2147483647,this.I=0,ef(this,new df((()=>new om(this.a7,-2147483647+o|0,r))))):(this.a0=o,this.I=r,this)}),new P().i(om,`scala.collection.Iterator$SliceIterator`,{dD:1,r:1,s:1,b:1,c:1});function cm(e,t){if(t<0)throw Op(new kp,``+t);var n=e.fM(t);if(n.g())throw Op(new kp,``+t);return n.V()}function lm(e,t){return ng(t)?um(e,e,t):op(e,t)}function um(e,t,n){for(;;)if(t===n)return!0;else if(!t.g()&&!n.g()&&H().K(t.V(),n.V())){var r=t.L(),i=n.L();t=r,n=i}else return t.g()&&n.g()}function dm(e){this.bd=null,this.bd=e}j=dm.prototype=new tp,j.constructor=dm;function fm(){}fm.prototype=j,j.r=(function(){return!this.bd.g()}),j.h=(function(){var e=this.bd.V();return this.bd=this.bd.L(),e}),new P().i(dm,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dI:1,r:1,s:1,b:1,c:1});function pm(){this.bL=null,np(this,Sm())}j=pm.prototype=new ip,j.constructor=pm;function mm(){}mm.prototype=j,new P().i(pm,`scala.collection.mutable.Buffer$`,{dS:1,dF:1,a8:1,Y:1,a:1});var hm;function gm(){return hm||=new pm,hm}function _m(e){this.bf=0,this.e8=0,this.e9=null,this.e9=e,this.bf=0,this.e8=e.ai()}j=_m.prototype=new tp,j.constructor=_m;function vm(){}vm.prototype=j,j.r=(function(){return this.bf<this.e8}),j.h=(function(){var e=this.e9.aj(this.bf);return this.bf=1+this.bf|0,e}),new P().i(_m,`scala.runtime.ScalaRunTime$$anon$1`,{ei:1,r:1,s:1,b:1,c:1});function ym(){}j=ym.prototype=new M,j.constructor=ym;function bm(){}bm.prototype=j,j.cz=(function(e){return this.eI(e)}),j.eI=(function(e){return Wu(w_(new T_),e).eV()}),j.cD=(function(e){return this.eI(e)}),new P().i(ym,`scala.scalajs.js.WrappedArray$`,{eo:1,dJ:1,a8:1,Y:1,a:1});var xm;function Sm(){return xm||=new ym,xm}var Cm=class e extends od{constructor(e,t){super(),this.aE=null,this.aD=0,this.aE=e,this.aD=t,wu(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aY(){return new Gp(this)}o(){var e=-889275714;return e=W().b(e,Im(`TransactionDepthExceeded`)),e=W().b(e,W().w(this.aE)),e=W().b(e,this.aD),W().l(e,2)}j(t){return this===t?!0:t instanceof e&&this.aD===t.aD?this.aE===t.aE:!1}ai(){return 2}ak(){return`TransactionDepthExceeded`}aj(e){if(e===0)return this.aE;if(e===1)return this.aD;throw Op(new kp,``+e)}s(){return`TransactionDepthExceeded: `+this.aE+`; maxDepth: `+this.aD}};new P().i(Cm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aa:1,b6:1,u:1,a:1,d:1,U:1});function wm(e){this.b3=null,this.b4=null,this.dc=null,this.dd=!1,Pf(this,e,v_())}j=wm.prototype=new If,j.constructor=wm;function Tm(){}Tm.prototype=j,j.cA=(function(){return this.dd||=(this.dc=this.y(`center`),!0),this.dc}),new P().i(wm,`com.raquo.laminar.defs.styles.StyleProps$$anon$14`,{bK:1,a4:1,R:1,a1:1,a2:1,bR:1});function Em(e,t){this.bG=null,this.aI=null,this.c8=null,this.dq=null,this.Z=null,this.dq=e,this.Z=t,this.bG=$(),ru(this),_p(this)}j=Em.prototype=new M,j.constructor=Em;function Dm(){}Dm.prototype=j,j.a1=(function(e){Ts().bP(e,this,void 0)}),j.bT=(function(){return this.aI}),j.ew=(function(e){this.aI=e}),j.f0=(function(e){vp(this,e)}),j.eX=(function(e){yp(this,e)}),j.s=(function(){return`ReactiveHtmlElement(`+(this.Z===null?`tag=`+this.dq.cF():this.Z.outerHTML)+`)`}),j.aC=(function(){return this.Z}),new P().i(Em,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cj:1,a5:1,S:1,ae:1,af:1,ci:1});function Om(e,t){return Object.is(e,t)}function km(e){return Ws().cG(e)}var Am=new P().i(0,`java.lang.Double`,{an:1,T:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),jm=new P().i(0,`java.lang.Float`,{cF:1,T:1,a:1,P:1,L:1,V:1},(e=>ca(e))),Mm=new P().i(0,`java.lang.Integer`,{cI:1,T:1,a:1,P:1,L:1,V:1},(e=>sa(e)));function Nm(e,t){return t instanceof z&&e.c===t.c&&e.d===t.d}function Pm(e){return e.c^e.d}var Fm=new P().i(0,`java.lang.Long`,{ap:1,T:1,a:1,P:1,L:1,V:1},(e=>e instanceof z));function Im(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Lm(e,t){return e===t}var Rm=new P().i(0,`java.lang.String`,{cP:1,a:1,P:1,a7:1,L:1,V:1},(e=>typeof e==`string`)),zm=class extends kp{constructor(){super(),wu(this,null,null,!0,!0)}};new P().i(zm,`java.lang.StringIndexOutOfBoundsException`,{cS:1,ao:1,Q:1,K:1,u:1,a:1});function Bm(){}j=Bm.prototype=new Wp,j.constructor=Bm;function Vm(){}Vm.prototype=j,j.g7=(function(){throw new Fp(`None.get`)}),j.ak=(function(){return`None`}),j.ai=(function(){return 0}),j.aj=(function(e){return W().br(e)}),j.aY=(function(){return new _m(this)}),j.o=(function(){return 2433880}),j.s=(function(){return`None`}),j.x=(function(){this.g7()}),new P().i(Bm,`scala.None$`,{db:1,au:1,b:1,U:1,d:1,a:1});var Hm;function $(){return Hm||=new Bm,Hm}function Um(e){this.b9=null,this.b9=e}j=Um.prototype=new Wp,j.constructor=Um;function Wm(){}Wm.prototype=j,j.x=(function(){return this.b9}),j.ak=(function(){return`Some`}),j.ai=(function(){return 1}),j.aj=(function(e){return e===0?this.b9:W().br(e)}),j.aY=(function(){return new _m(this)}),j.o=(function(){return G().eU(this,-889275714,!1)}),j.s=(function(){return U().fk(this)}),j.j=(function(e){return this===e||e instanceof Um&&H().K(this.b9,e.b9)}),new P().i(Um,`scala.Some`,{av:1,au:1,b:1,U:1,d:1,a:1});function Gm(){}j=Gm.prototype=new M,j.constructor=Gm;function Km(){}Km.prototype=j,j.aU=(function(){return this.aZ()}),j.Y=(function(e){rl(this,e)}),j.bg=(function(e,t,n,r){return al(this,e,t,n,r)}),j.A=(function(){return-1});function qm(e,t){return e.H=t,e.e=0,e.C=Fc().aV(e.H),e}function Jm(){this.H=null,this.e=0,this.C=0}j=Jm.prototype=new tp,j.constructor=Jm;function Ym(){}Ym.prototype=j,j.A=(function(){return this.C-this.e|0}),j.r=(function(){return this.e<this.C}),j.h=(function(){this.e>=Fc().aV(this.H)&&Y().v.h();var e=U().aT(this.H,this.e);return this.e=1+this.e|0,e}),j.bS=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.C;else var r=this.C,n=r<t?r:t;this.e=n}return this}),new P().i(Jm,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function Xm(e,t){return t<0?0:t>e.R?e.R:t}function Zm(e){this.e2=null,this.a5=0,this.R=0,this.e2=e,this.a5=0,this.R=e.k()}j=Zm.prototype=new tp,j.constructor=Zm;function Qm(){}Qm.prototype=j,j.A=(function(){return this.R}),j.r=(function(){return this.R>0}),j.h=(function(){if(this.R>0){var e=this.e2.n(this.a5);return this.a5=1+this.a5|0,this.R=-1+this.R|0,e}else return Y().v.h()}),j.bS=(function(e){if(e>0){this.a5=this.a5+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),j.bv=(function(e,t){var n=Xm(this,e),r=Xm(this,t)-n|0;return this.R=r<0?0:r,this.a5=this.a5+n|0,this}),new P().i(Zm,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dy:1,r:1,s:1,b:1,c:1,a:1});function $m(e){return e.cs||=(e.ct=new Lg(new N(0)),!0),e.ct}function eh(e){return e.cs?e.ct:$m(e)}function th(){this.ct=null,this.ff=null,this.cs=!1,rh=this,this.ff=new qp(this)}j=th.prototype=new M,j.constructor=th;function nh(){}nh.prototype=j,j.g4=(function(e,t){return e instanceof yg?e:this.eY(Nu().eG(e,t))}),j.eY=(function(e){if(e===null)return null;if(e instanceof N)return new Lg(e);if(e instanceof va)return new Ng(e);if(e instanceof xa)return new kg(e);if(e instanceof ya)return new Fg(e);if(e instanceof ba)return new jg(e);if(e instanceof ha)return new Dg(e);if(e instanceof ga)return new Tg(e);if(e instanceof _a)return new zg(e);if(e instanceof ma)return new Cg(e);if(kc(e,1))return new Vg(e);throw new Hp(e)}),j.cC=(function(e,t){return this.g4(e,t)}),new P().i(th,`scala.collection.immutable.ArraySeq$`,{dM:1,aB:1,ax:1,aw:1,ay:1,a:1});var rh;function ih(){return rh||=new th,rh}function ah(){this.fg=null,this.e5=null,sh=this,this.fg=new qp(this),this.e5=new s_(new N(0))}j=ah.prototype=new M,j.constructor=ah;function oh(){}oh.prototype=j,j.g5=(function(e,t){return this.gn(Nu().eG(e,t))}),j.gn=(function(e){if(e===null)return null;if(e instanceof N)return new s_(e);if(e instanceof va)return new r_(e);if(e instanceof xa)return new $g(e);if(e instanceof ya)return new a_(e);if(e instanceof ba)return new t_(e);if(e instanceof ha)return new Zg(e);if(e instanceof ga)return new Yg(e);if(e instanceof _a)return new l_(e);if(e instanceof ma)return new qg(e);if(kc(e,1))return new d_(e);throw new Hp(e)}),j.cC=(function(e,t){return this.g5(e,t)}),new P().i(ah,`scala.collection.mutable.ArraySeq$`,{dQ:1,aB:1,ax:1,aw:1,ay:1,a:1});var sh;function ch(){return sh||=new ah,sh}function lh(e){this.b3=null,this.b4=null,this.de=null,this.df=!1,Pf(this,e,v_())}j=lh.prototype=new If,j.constructor=lh;function uh(){}uh.prototype=j,j.g1=(function(){return this.df||=(this.de=this.y(`flex`),!0),this.de}),new P().i(lh,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bL:1,a4:1,R:1,a1:1,a2:1,bP:1,bN:1});function dh(e){this.b3=null,this.b4=null,this.dg=null,this.dh=!1,Pf(this,e,v_())}j=dh.prototype=new If,j.constructor=dh;function fh(){}fh.prototype=j,j.cA=(function(){return this.dh||=(this.dg=this.y(`center`),!0),this.dg}),new P().i(dh,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bM:1,a4:1,R:1,a1:1,a2:1,bQ:1,bO:1});function ph(){}j=ph.prototype=new wp,j.constructor=ph;function mh(){}mh.prototype=j;function hh(e){this.H=null,this.e=0,this.C=0,this.cj=null,this.cj=e,qm(this,e)}j=hh.prototype=new Ym,j.constructor=hh;function gh(){}gh.prototype=j,j.gv=(function(){this.e>=this.cj.a.length&&Y().v.h();var e=this.cj.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gv()}),new P().i(hh,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dk:1,M:1,r:1,s:1,b:1,c:1,a:1});function _h(e){this.H=null,this.e=0,this.C=0,this.ck=null,this.ck=e,qm(this,e)}j=_h.prototype=new Ym,j.constructor=_h;function vh(){}vh.prototype=j,j.gw=(function(){this.e>=this.ck.a.length&&Y().v.h();var e=this.ck.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return la(this.gw())}),new P().i(_h,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dl:1,M:1,r:1,s:1,b:1,c:1,a:1});function yh(e){this.H=null,this.e=0,this.C=0,this.cl=null,this.cl=e,qm(this,e)}j=yh.prototype=new Ym,j.constructor=yh;function bh(){}bh.prototype=j,j.gx=(function(){this.e>=this.cl.a.length&&Y().v.h();var e=this.cl.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gx()}),new P().i(yh,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dm:1,M:1,r:1,s:1,b:1,c:1,a:1});function xh(e){this.H=null,this.e=0,this.C=0,this.cm=null,this.cm=e,qm(this,e)}j=xh.prototype=new Ym,j.constructor=xh;function Sh(){}Sh.prototype=j,j.gy=(function(){this.e>=this.cm.a.length&&Y().v.h();var e=this.cm.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gy()}),new P().i(xh,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dn:1,M:1,r:1,s:1,b:1,c:1,a:1});function Ch(e){this.H=null,this.e=0,this.C=0,this.cn=null,this.cn=e,qm(this,e)}j=Ch.prototype=new Ym,j.constructor=Ch;function wh(){}wh.prototype=j,j.gz=(function(){this.e>=this.cn.a.length&&Y().v.h();var e=this.cn.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gz()}),new P().i(Ch,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dp:1,M:1,r:1,s:1,b:1,c:1,a:1});function Th(e){this.H=null,this.e=0,this.C=0,this.co=null,this.co=e,qm(this,e)}j=Th.prototype=new Ym,j.constructor=Th;function Eh(){}Eh.prototype=j,j.gA=(function(){this.e>=this.co.a.length&&Y().v.h();var e=this.co.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new z(t,n)}),j.h=(function(){return this.gA()}),new P().i(Th,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dq:1,M:1,r:1,s:1,b:1,c:1,a:1});function Dh(e){this.H=null,this.e=0,this.C=0,this.cp=null,this.cp=e,qm(this,e)}j=Dh.prototype=new Ym,j.constructor=Dh;function Oh(){}Oh.prototype=j,j.gB=(function(){this.e>=this.cp.a.length&&Y().v.h();var e=this.cp.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gB()}),new P().i(Dh,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dr:1,M:1,r:1,s:1,b:1,c:1,a:1});function kh(e){this.H=null,this.e=0,this.C=0,this.e1=null,this.e1=e,qm(this,e)}j=kh.prototype=new Ym,j.constructor=kh;function Ah(){}Ah.prototype=j,j.gC=(function(){this.e>=this.e1.a.length&&Y().v.h(),this.e=1+this.e|0}),j.h=(function(){this.gC()}),new P().i(kh,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{ds:1,M:1,r:1,s:1,b:1,c:1,a:1});function jh(e){this.H=null,this.e=0,this.C=0,this.cq=null,this.cq=e,qm(this,e)}j=jh.prototype=new Ym,j.constructor=jh;function Mh(){}Mh.prototype=j,j.gD=(function(){this.e>=this.cq.a.length&&Y().v.h();var e=this.cq.a[this.e];return this.e=1+this.e|0,e}),j.h=(function(){return this.gD()}),new P().i(jh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dt:1,M:1,r:1,s:1,b:1,c:1,a:1});function Nh(e){return e.aU()+`(<not computed>)`}function Ph(){}j=Ph.prototype=new M,j.constructor=Ph;function Fh(){}Fh.prototype=j;var Ih=class e extends qf{constructor(e){super(),this.S=null,this.S=e,wu(this,null,null,!0,!0)}bq(){return Xi(this.S)}ak(){return`JavaScriptException`}ai(){return 1}aj(e){return e===0?this.S:W().br(e)}aY(){return new _m(this)}o(){return G().eU(this,-889275714,!1)}j(t){return this===t||t instanceof e&&H().K(this.S,t.S)}};new P().i(Ih,`scala.scalajs.js.JavaScriptException`,{b5:1,Q:1,K:1,u:1,a:1,U:1,d:1});function Lh(e,t){typeof console<`u`&&(e.dO&&console.error?console.error(t):console.log(t))}function Rh(e){this.dO=!1,this.b6=null,this.dO=e,new Ap,this.b6=``}j=Rh.prototype=new mh,j.constructor=Rh;function zh(){}zh.prototype=j,j.gk=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.b6=``+this.b6+t,t=``;else{var r=this.b6,i=t;Lh(this,``+r+i.substring(0,n)),this.b6=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new P().i(Rh,`java.lang.JSConsoleBasedPrintStream`,{cJ:1,cA:1,cz:1,aj:1,ah:1,al:1,ai:1,ak:1});function Bh(e,t,n){for(;;)if(t<=0||n.g())return n;else{var r=-1+t|0,i=n.L();t=r,n=i}}function Vh(){this.cu=null}j=Vh.prototype=new Fh,j.constructor=Vh;function Hh(){}Hh.prototype=j,j.s=(function(){return this.cu}),j.j=(function(e){return this===e}),j.o=(function(){return ia(this)});function Uh(){}j=Uh.prototype=new Km,j.constructor=Uh;function Wh(){}Wh.prototype=j,j.s=(function(){return Nh(this)});function Gh(){this.cu=null,this.cu=`Any`}j=Gh.prototype=new Hh,j.constructor=Gh;function Kh(){}Kh.prototype=j,j.gP=(function(){return Sa.l()}),j.gt=(function(e){return new N(e)}),new P().i(Gh,`scala.reflect.ManifestFactory$AnyManifest$`,{e4:1,e6:1,e5:1,e3:1,e2:1,e1:1,e7:1,a:1,d:1});var qh;function Jh(){return qh||=new Gh,qh}function Yh(e,t){return e===t?!0:Xh(t)&&t.et(e)?e.cI(t):!1}function Xh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Zh(){}j=Zh.prototype=new Km,j.constructor=Zh;function Qh(){}Qh.prototype=j,j.et=(function(e){return!0}),j.j=(function(e){return Yh(this,e)}),j.o=(function(){return G().gQ(this)}),j.s=(function(){return Yp(this)}),j.g=(function(){return ap(this)}),j.cI=(function(e){return op(this,e)});function $h(){}j=$h.prototype=new Wh,j.constructor=$h;function eg(){}eg.prototype=j;function tg(e){return!!(e&&e.$classData&&e.$classData.n.n)}function ng(e){return!!(e&&e.$classData&&e.$classData.n.Z)}function rg(e,t){return e.bc=t,e}function ig(){this.bc=null}j=ig.prototype=new eg,j.constructor=ig;function ag(){}ag.prototype=j,j.n=(function(e){return this.bc.n(e)}),j.k=(function(){return this.bc.k()}),j.g=(function(){return this.bc.g()});function og(){this.d3=null,this.d4=!1,this.cZ=null,this.d0=!1,this.d1=null,this.d2=!1,this.d9=null,this.da=!1,this.f3=null,this.d5=null,this.d6=!1,this.f2=null,this.d7=null,this.d8=!1,qo(this),Vo(this),zo(this),Bo(this)}j=og.prototype=new M,j.constructor=og;function sg(){}sg.prototype=j,j.cB=(function(){return this.d4||=(this.d3=iu(new au,`div`,!1),!0),this.d3}),j.fn=(function(){return this.d0||=(this.cZ=new dh(`align-items`),!0),this.cZ}),j.fJ=(function(){return this.d2||=(this.d1=new lh(`display`),!0),this.d1}),j.h6=(function(){return this.da||=(this.d9=new wm(`text-align`),!0),this.d9}),j.gZ=(function(){return this.d6||=(this.d5=Bl(new Vl,`style`,Ko().b1),!0),this.d5}),j.h1=(function(){return this.d8||=(this.d7=new kf(this),!0),this.d7}),new P().i(og,`com.raquo.laminar.api.package$$anon$1`,{bz:1,bS:1,bD:1,bI:1,bH:1,bJ:1,bF:1,bx:1,bt:1,bw:1,ac:1,ad:1,ab:1,bu:1});function cg(e){this.bc=null,rg(this,e)}j=cg.prototype=new ag,j.constructor=cg;function lg(){}lg.prototype=j,j.m=(function(){return new Zm(this)}),j.aZ=(function(){return`IndexedSeqView`}),j.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),j.A=(function(){return this.k()}),new P().i(cg,`scala.collection.IndexedSeqView$Id`,{dx:1,dH:1,dh:1,di:1,h:1,i:1,b:1,k:1,c:1,j:1,dK:1,a:1,dG:1,l:1,dw:1,o:1});function ug(){}j=ug.prototype=new Qh,j.constructor=ug;function dg(){}dg.prototype=j;function fg(e,t){return!mg(t)||e.k()===t.k()}function pg(e,t){if(mg(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.ei(),o=t.ei(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=H().K(e.n(i),t.n(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().bS(i),m=t.m().bS(i);r&&p.r();)r=H().K(p.h(),m.h())}return r}else return op(e,t)}function mg(e){return!!(e&&e.$classData&&e.$classData.n.w)}function hg(){}j=hg.prototype=new Qh,j.constructor=hg;function gg(){}gg.prototype=j;function _g(){}j=_g.prototype=new gg,j.constructor=_g;function vg(){}vg.prototype=j,j.eg=(function(e){return Wu(this,e)});function yg(){}j=yg.prototype=new dg,j.constructor=yg;function bg(){}bg.prototype=j,j.et=(function(e){return fg(this,e)}),j.cI=(function(e){return pg(this,e)}),j.aZ=(function(){return`IndexedSeq`}),j.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),j.A=(function(){return this.k()}),j.go=(function(e){for(var t=new N(this.k()),n=0;n<t.a.length;)t.a[n]=e.f(this.n(n)),n=1+n|0;return ih().eY(t)}),j.aU=(function(){return`ArraySeq`}),j.ei=(function(){return 2147483647}),j.eL=(function(e){return this.go(e)});function xg(){}j=xg.prototype=new gg,j.constructor=xg;function Sg(){}Sg.prototype=j,j.aZ=(function(){return`IndexedSeq`}),j.aW=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),j.A=(function(){return this.k()}),j.aU=(function(){return`ArraySeq`}),j.j=(function(e){return e instanceof xg&&Fc().aV(this.T())!==Fc().aV(e.T())?!1:Yh(this,e)});function Cg(e){this.aq=null,this.aq=e}j=Cg.prototype=new bg,j.constructor=Cg;function wg(){}wg.prototype=j,j.k=(function(){return this.aq.a.length}),j.o=(function(){var e=G();return e.es(this.aq,e.u)}),j.j=(function(e){return e instanceof Cg?R().eE(this.aq,e.aq):Yh(this,e)}),j.m=(function(){return new jh(this.aq)}),j.bp=(function(e){return this.aq.a[e]}),j.f=(function(e){return this.bp(e|0)}),j.n=(function(e){return this.bp(e)}),new P().i(Cg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Tg(e){this.ar=null,this.ar=e}j=Tg.prototype=new bg,j.constructor=Tg;function Eg(){}Eg.prototype=j,j.k=(function(){return this.ar.a.length}),j.bh=(function(e){return this.ar.a[e]}),j.o=(function(){var e=G();return e.ek(this.ar,e.u)}),j.j=(function(e){return e instanceof Tg?R().ex(this.ar,e.ar):Yh(this,e)}),j.m=(function(){return new hh(this.ar)}),j.f=(function(e){return this.bh(e|0)}),j.n=(function(e){return this.bh(e)}),new P().i(Tg,`scala.collection.immutable.ArraySeq$ofByte`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Dg(e){this.a8=null,this.a8=e}j=Dg.prototype=new bg,j.constructor=Dg;function Og(){}Og.prototype=j,j.k=(function(){return this.a8.a.length}),j.bi=(function(e){return this.a8.a[e]}),j.o=(function(){var e=G();return e.el(this.a8,e.u)}),j.j=(function(e){return e instanceof Dg?R().ey(this.a8,e.a8):Yh(this,e)}),j.m=(function(){return new _h(this.a8)}),j.bg=(function(e,t,n,r){return new Zg(this.a8).bg(e,t,n,r)}),j.f=(function(e){return la(this.bi(e|0))}),j.n=(function(e){return la(this.bi(e))}),new P().i(Dg,`scala.collection.immutable.ArraySeq$ofChar`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function kg(e){this.as=null,this.as=e}j=kg.prototype=new bg,j.constructor=kg;function Ag(){}Ag.prototype=j,j.k=(function(){return this.as.a.length}),j.o=(function(){var e=G();return e.em(this.as,e.u)}),j.j=(function(e){return e instanceof kg?R().ez(this.as,e.as):Yh(this,e)}),j.m=(function(){return new yh(this.as)}),j.bk=(function(e){return this.as.a[e]}),j.f=(function(e){return this.bk(e|0)}),j.n=(function(e){return this.bk(e)}),new P().i(kg,`scala.collection.immutable.ArraySeq$ofDouble`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function jg(e){this.at=null,this.at=e}j=jg.prototype=new bg,j.constructor=jg;function Mg(){}Mg.prototype=j,j.k=(function(){return this.at.a.length}),j.o=(function(){var e=G();return e.en(this.at,e.u)}),j.j=(function(e){return e instanceof jg?R().eA(this.at,e.at):Yh(this,e)}),j.m=(function(){return new xh(this.at)}),j.bl=(function(e){return this.at.a[e]}),j.f=(function(e){return this.bl(e|0)}),j.n=(function(e){return this.bl(e)}),new P().i(jg,`scala.collection.immutable.ArraySeq$ofFloat`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Ng(e){this.au=null,this.au=e}j=Ng.prototype=new bg,j.constructor=Ng;function Pg(){}Pg.prototype=j,j.k=(function(){return this.au.a.length}),j.o=(function(){var e=G();return e.eo(this.au,e.u)}),j.j=(function(e){return e instanceof Ng?R().eB(this.au,e.au):Yh(this,e)}),j.m=(function(){return new Ch(this.au)}),j.bm=(function(e){return this.au.a[e]}),j.f=(function(e){return this.bm(e|0)}),j.n=(function(e){return this.bm(e)}),new P().i(Ng,`scala.collection.immutable.ArraySeq$ofInt`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Fg(e){this.av=null,this.av=e}j=Fg.prototype=new bg,j.constructor=Fg;function Ig(){}Ig.prototype=j,j.k=(function(){return this.av.a.length}),j.o=(function(){var e=G();return e.ep(this.av,e.u)}),j.j=(function(e){return e instanceof Fg?R().eC(this.av,e.av):Yh(this,e)}),j.m=(function(){return new Th(this.av)}),j.bn=(function(e){return this.av.a[e]}),j.f=(function(e){return this.bn(e|0)}),j.n=(function(e){return this.bn(e)}),new P().i(Fg,`scala.collection.immutable.ArraySeq$ofLong`,{aK:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Lg(e){this.aw=null,this.aw=e}j=Lg.prototype=new bg,j.constructor=Lg;function Rg(){}Rg.prototype=j,j.k=(function(){return this.aw.a.length}),j.n=(function(e){return this.aw.a[e]}),j.o=(function(){var e=G();return e.ej(this.aw,e.u)}),j.j=(function(e){return e instanceof Lg?Nu().eF(this.aw,e.aw):Yh(this,e)}),j.m=(function(){return qm(new Jm,this.aw)}),j.f=(function(e){return this.n(e|0)}),new P().i(Lg,`scala.collection.immutable.ArraySeq$ofRef`,{aL:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function zg(e){this.ax=null,this.ax=e}j=zg.prototype=new bg,j.constructor=zg;function Bg(){}Bg.prototype=j,j.k=(function(){return this.ax.a.length}),j.bj=(function(e){return this.ax.a[e]}),j.o=(function(){var e=G();return e.eq(this.ax,e.u)}),j.j=(function(e){return e instanceof zg?R().eD(this.ax,e.ax):Yh(this,e)}),j.m=(function(){return new Dh(this.ax)}),j.f=(function(e){return this.bj(e|0)}),j.n=(function(e){return this.bj(e)}),new P().i(zg,`scala.collection.immutable.ArraySeq$ofShort`,{aM:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Vg(e){this.aS=null,this.aS=e}j=Vg.prototype=new bg,j.constructor=Vg;function Hg(){}Hg.prototype=j,j.k=(function(){return this.aS.a.length}),j.o=(function(){var e=G();return e.er(this.aS,e.u)}),j.j=(function(e){return e instanceof Vg?this.aS.a.length===e.aS.a.length:Yh(this,e)}),j.m=(function(){return new kh(this.aS)}),j.bo=(function(e){}),j.f=(function(e){this.bo(e|0)}),j.n=(function(e){this.bo(e)}),new P().i(Vg,`scala.collection.immutable.ArraySeq$ofUnit`,{aN:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Ug(e,t,n,r){for(;;)if(t===r)return n.g()?0:1;else if(n.g())return-1;else{var i=1+t|0,a=n.L();t=i,n=a}}function Wg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.g(),i=n.g();if(!(r||i)&&H().K(t.V(),n.V())){var a=t.L(),o=n.L();t=a,n=o}else return r&&i}}function Gg(){}j=Gg.prototype=new dg,j.constructor=Gg;function Kg(){}Kg.prototype=j,j.m=(function(){return new dm(this)}),j.aZ=(function(){return`LinearSeq`}),j.n=(function(e){return cm(this,e)}),j.cI=(function(e){return lm(this,e)}),j.g=(function(){return this===v_()}),j.gp=(function(e){if(this===v_())return v_();for(var t=new p_(e.f(this.V()),v_()),n=t,r=this.L();r!==v_();){var i=new p_(e.f(r.V()),v_());n.bM=i,n=i,r=r.L()}return t}),j.Y=(function(e){for(var t=this;!t.g();)e.f(t.V()),t=t.L()}),j.k=(function(){for(var e=this,t=0;!e.g();)t=1+t|0,e=e.L();return t}),j.aW=(function(e){return e<0?1:Ug(this,0,this,e)}),j.aU=(function(){return`List`}),j.j=(function(e){return e instanceof Gg?Wg(this,this,e):Yh(this,e)}),j.f=(function(e){return cm(this,e|0)}),j.fM=(function(e){return Bh(this,e,this)}),j.eL=(function(e){return this.gp(e)});function qg(e){this.a9=null,this.a9=e}j=qg.prototype=new Sg,j.constructor=qg;function Jg(){}Jg.prototype=j,j.k=(function(){return this.a9.a.length}),j.o=(function(){var e=G();return e.es(this.a9,e.u)}),j.j=(function(e){return e instanceof qg?R().eE(this.a9,e.a9):xg.prototype.j.call(this,e)}),j.m=(function(){return new jh(this.a9)}),j.bp=(function(e){return this.a9.a[e]}),j.f=(function(e){return this.bp(e|0)}),j.n=(function(e){return this.bp(e)}),j.T=(function(){return this.a9}),new P().i(qg,`scala.collection.mutable.ArraySeq$ofBoolean`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Yg(e){this.aa=null,this.aa=e}j=Yg.prototype=new Sg,j.constructor=Yg;function Xg(){}Xg.prototype=j,j.k=(function(){return this.aa.a.length}),j.bh=(function(e){return this.aa.a[e]}),j.o=(function(){var e=G();return e.ek(this.aa,e.u)}),j.j=(function(e){return e instanceof Yg?R().ex(this.aa,e.aa):xg.prototype.j.call(this,e)}),j.m=(function(){return new hh(this.aa)}),j.f=(function(e){return this.bh(e|0)}),j.n=(function(e){return this.bh(e)}),j.T=(function(){return this.aa}),new P().i(Yg,`scala.collection.mutable.ArraySeq$ofByte`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Zg(e){this.P=null,this.P=e}j=Zg.prototype=new Sg,j.constructor=Zg;function Qg(){}Qg.prototype=j,j.k=(function(){return this.P.a.length}),j.bi=(function(e){return this.P.a[e]}),j.o=(function(){var e=G();return e.el(this.P,e.u)}),j.j=(function(e){return e instanceof Zg?R().ey(this.P,e.P):xg.prototype.j.call(this,e)}),j.m=(function(){return new _h(this.P)}),j.bg=(function(e,t,n,r){var i=e.J;t.length!==0&&(i.p=``+i.p+t);var a=this.P.a.length;if(a!==0)if(n===``)i.fp(this.P);else{i.k();var o=this.P.a[0],s=``+ea(o);i.p+=s;for(var c=1;c<a;){i.p=``+i.p+n;var l=this.P.a[c],u=``+ea(l);i.p+=u,c=1+c|0}}return r.length!==0&&(i.p=``+i.p+r),e}),j.f=(function(e){return la(this.bi(e|0))}),j.n=(function(e){return la(this.bi(e))}),j.T=(function(){return this.P}),new P().i(Zg,`scala.collection.mutable.ArraySeq$ofChar`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $g(e){this.ab=null,this.ab=e}j=$g.prototype=new Sg,j.constructor=$g;function e_(){}e_.prototype=j,j.k=(function(){return this.ab.a.length}),j.o=(function(){var e=G();return e.em(this.ab,e.u)}),j.j=(function(e){return e instanceof $g?R().ez(this.ab,e.ab):xg.prototype.j.call(this,e)}),j.m=(function(){return new yh(this.ab)}),j.bk=(function(e){return this.ab.a[e]}),j.f=(function(e){return this.bk(e|0)}),j.n=(function(e){return this.bk(e)}),j.T=(function(){return this.ab}),new P().i($g,`scala.collection.mutable.ArraySeq$ofDouble`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function t_(e){this.ac=null,this.ac=e}j=t_.prototype=new Sg,j.constructor=t_;function n_(){}n_.prototype=j,j.k=(function(){return this.ac.a.length}),j.o=(function(){var e=G();return e.en(this.ac,e.u)}),j.j=(function(e){return e instanceof t_?R().eA(this.ac,e.ac):xg.prototype.j.call(this,e)}),j.m=(function(){return new xh(this.ac)}),j.bl=(function(e){return this.ac.a[e]}),j.f=(function(e){return this.bl(e|0)}),j.n=(function(e){return this.bl(e)}),j.T=(function(){return this.ac}),new P().i(t_,`scala.collection.mutable.ArraySeq$ofFloat`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function r_(e){this.ad=null,this.ad=e}j=r_.prototype=new Sg,j.constructor=r_;function i_(){}i_.prototype=j,j.k=(function(){return this.ad.a.length}),j.o=(function(){var e=G();return e.eo(this.ad,e.u)}),j.j=(function(e){return e instanceof r_?R().eB(this.ad,e.ad):xg.prototype.j.call(this,e)}),j.m=(function(){return new Ch(this.ad)}),j.bm=(function(e){return this.ad.a[e]}),j.f=(function(e){return this.bm(e|0)}),j.n=(function(e){return this.bm(e)}),j.T=(function(){return this.ad}),new P().i(r_,`scala.collection.mutable.ArraySeq$ofInt`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function a_(e){this.ae=null,this.ae=e}j=a_.prototype=new Sg,j.constructor=a_;function o_(){}o_.prototype=j,j.k=(function(){return this.ae.a.length}),j.o=(function(){var e=G();return e.ep(this.ae,e.u)}),j.j=(function(e){return e instanceof a_?R().eC(this.ae,e.ae):xg.prototype.j.call(this,e)}),j.m=(function(){return new Th(this.ae)}),j.bn=(function(e){return this.ae.a[e]}),j.f=(function(e){return this.bn(e|0)}),j.n=(function(e){return this.bn(e)}),j.T=(function(){return this.ae}),new P().i(a_,`scala.collection.mutable.ArraySeq$ofLong`,{aW:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function s_(e){this.af=null,this.af=e}j=s_.prototype=new Sg,j.constructor=s_;function c_(){}c_.prototype=j,j.k=(function(){return this.af.a.length}),j.n=(function(e){return this.af.a[e]}),j.o=(function(){var e=G();return e.ej(this.af,e.u)}),j.j=(function(e){return e instanceof s_?Nu().eF(this.af,e.af):xg.prototype.j.call(this,e)}),j.m=(function(){return qm(new Jm,this.af)}),j.f=(function(e){return this.n(e|0)}),j.T=(function(){return this.af}),new P().i(s_,`scala.collection.mutable.ArraySeq$ofRef`,{aX:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function l_(e){this.ag=null,this.ag=e}j=l_.prototype=new Sg,j.constructor=l_;function u_(){}u_.prototype=j,j.k=(function(){return this.ag.a.length}),j.bj=(function(e){return this.ag.a[e]}),j.o=(function(){var e=G();return e.eq(this.ag,e.u)}),j.j=(function(e){return e instanceof l_?R().eD(this.ag,e.ag):xg.prototype.j.call(this,e)}),j.m=(function(){return new Dh(this.ag)}),j.f=(function(e){return this.bj(e|0)}),j.n=(function(e){return this.bj(e)}),j.T=(function(){return this.ag}),new P().i(l_,`scala.collection.mutable.ArraySeq$ofShort`,{aY:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function d_(e){this.ay=null,this.ay=e}j=d_.prototype=new Sg,j.constructor=d_;function f_(){}f_.prototype=j,j.k=(function(){return this.ay.a.length}),j.o=(function(){var e=G();return e.er(this.ay,e.u)}),j.j=(function(e){return e instanceof d_?this.ay.a.length===e.ay.a.length:xg.prototype.j.call(this,e)}),j.m=(function(){return new kh(this.ay)}),j.bo=(function(e){}),j.f=(function(e){this.bo(e|0)}),j.n=(function(e){this.bo(e)}),j.T=(function(){return this.ay}),new P().i(d_,`scala.collection.mutable.ArraySeq$ofUnit`,{aZ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function p_(e,t){this.cr=null,this.bM=null,this.cr=e,this.bM=t}j=p_.prototype=new Kg,j.constructor=p_;function m_(){}m_.prototype=j,j.V=(function(){return this.cr}),j.ak=(function(){return`::`}),j.ai=(function(){return 2}),j.aj=(function(e){switch(e){case 0:return this.cr;case 1:return this.bM;default:return W().br(e)}}),j.aY=(function(){return new _m(this)}),j.L=(function(){return this.bM}),new P().i(p_,`scala.collection.immutable.$colon$colon`,{dL:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,Z:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});function h_(){}j=h_.prototype=new Kg,j.constructor=h_;function g_(){}g_.prototype=j,j.gf=(function(){throw new Fp(`head of empty list`)}),j.h4=(function(){throw new Pp(`tail of empty list`)}),j.A=(function(){return 0}),j.m=(function(){return Y().v}),j.ak=(function(){return`Nil`}),j.ai=(function(){return 0}),j.aj=(function(e){return W().br(e)}),j.aY=(function(){return new _m(this)}),j.L=(function(){this.h4()}),j.V=(function(){this.gf()}),new P().i(h_,`scala.collection.immutable.Nil$`,{dO:1,a9:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aO:1,Z:1,aA:1,aP:1,aC:1,q:1,p:1,A:1,aD:1,a:1,U:1});var __;function v_(){return __||=new h_,__}function y_(e,t){return e.J=t,e}function b_(e){return y_(e,new Jf),e}function x_(){this.J=null}j=x_.prototype=new gg,j.constructor=x_;function S_(){}S_.prototype=j,j.aZ=(function(){return`IndexedSeq`}),j.m=(function(){return new Zm(new cg(this))}),j.aW=(function(e){var t=this.J.k();return t===e?0:t<e?-1:1}),j.eg=(function(e){return Wu(this,e)}),j.k=(function(){return this.J.k()}),j.A=(function(){return this.J.k()}),j.fl=(function(e){var t=this.J,n=``+ea(e);return t.p+=n,this}),j.s=(function(){return this.J.p}),j.g=(function(){return this.J.k()===0}),j.eV=(function(){return this.J.p}),j.cx=(function(e){return this.fl(ua(e))}),j.f=(function(e){var t=e|0;return la(this.J.eu(t))}),j.n=(function(e){return la(this.J.eu(e))}),new P().i(x_,`scala.collection.mutable.StringBuilder`,{dW:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dU:1,b0:1,b2:1,b1:1,D:1,n:1,o:1,E:1,a7:1,a:1});function C_(e,t){return e.az=t,e}function w_(e){return C_(e,[]),e}function T_(){this.az=null}j=T_.prototype=new vg,j.constructor=T_;function E_(){}E_.prototype=j,j.aZ=(function(){return`IndexedSeq`}),j.m=(function(){return new Zm(new cg(this))}),j.aW=(function(e){var t=this.az.length|0;return t===e?0:t<e?-1:1}),j.n=(function(e){return this.az[e]}),j.k=(function(){return this.az.length|0}),j.A=(function(){return this.az.length|0}),j.aU=(function(){return`WrappedArray`}),j.eV=(function(){return this}),j.cx=(function(e){return this.az.push(e),this}),j.f=(function(e){var t=e|0;return this.az[t]}),new P().i(T_,`scala.scalajs.js.WrappedArray`,{en:1,dP:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dR:1,b2:1,b1:1,dV:1,q:1,p:1,D:1,n:1,o:1,E:1,dT:1,b0:1,a:1}),Wi=new z(0,0),Ta.z=Wi,Is(new(Rm.r()).C([]));