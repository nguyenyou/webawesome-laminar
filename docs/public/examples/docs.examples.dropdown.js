var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ee=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:te,defineProperty:ne,getOwnPropertyDescriptor:re,getOwnPropertyNames:ie,getOwnPropertySymbols:ae,getPrototypeOf:oe}=Object,se=globalThis,ce=se.trustedTypes,le=ce?ce.emptyScript:``,ue=se.reactiveElementPolyfillSupport,de=(e,t)=>e,fe={toAttribute(e,t){switch(t){case Boolean:e=e?le:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},pe=(e,t)=>!te(e,t),me={attribute:!0,type:String,converter:fe,reflect:!1,useDefault:!1,hasChanged:pe};Symbol.metadata??=Symbol(`metadata`),se.litPropertyMetadata??=new WeakMap;var he=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=me){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ne(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=re(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??me}static _$Ei(){if(this.hasOwnProperty(de(`elementProperties`)))return;let e=oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(de(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(de(`properties`))){let e=this.properties,t=[...ie(e),...ae(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ee(e))}else e!==void 0&&t.push(ee(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?fe:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?fe:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??pe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};he.elementStyles=[],he.shadowRootOptions={mode:`open`},he[de(`elementProperties`)]=new Map,he[de(`finalized`)]=new Map,ue?.({ReactiveElement:he}),(se.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ge=globalThis,_e=ge.trustedTypes,ve=_e?_e.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,ye=`$lit$`,be=`lit$${Math.random().toFixed(9).slice(2)}$`,xe=`?`+be,Se=`<${xe}>`,Ce=document,we=()=>Ce.createComment(``),Te=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ee=Array.isArray,De=e=>Ee(e)||typeof e?.[Symbol.iterator]==`function`,Oe=`[ 	
\f\r]`,ke=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ae=/-->/g,je=/>/g,Me=RegExp(`>|${Oe}(?:([^\\s"'>=/]+)(${Oe}*=${Oe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ne=/'/g,Pe=/"/g,Fe=/^(?:script|style|textarea|title)$/i,Ie=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Le=Symbol.for(`lit-noChange`),b=Symbol.for(`lit-nothing`),Re=new WeakMap,ze=Ce.createTreeWalker(Ce,129);function Be(e,t){if(!Ee(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ve===void 0?t:ve.createHTML(t)}const Ve=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=ke;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===ke?c[1]===`!--`?o=Ae:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Me):(Fe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Me):o=je:o===Me?c[0]===`>`?(o=i??ke,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Me:c[3]===`"`?Pe:Ne):o===Pe||o===Ne?o=Me:o===Ae||o===je?o=ke:(o=Me,i=void 0);let d=o===Me&&e[t+1].startsWith(`/>`)?` `:``;a+=o===ke?n+Se:l>=0?(r.push(s),n.slice(0,l)+ye+n.slice(l)+be+d):n+be+(l===-2?t:d)}return[Be(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var He=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ve(t,n);if(this.el=e.createElement(l,r),ze.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ze.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(ye)){let t=u[o++],n=i.getAttribute(e).split(be),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?qe:r[1]===`?`?Je:r[1]===`@`?Ye:Ke}),i.removeAttribute(e)}else e.startsWith(be)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Fe.test(i.tagName)){let e=i.textContent.split(be),t=e.length-1;if(t>0){i.textContent=_e?_e.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],we()),ze.nextNode(),c.push({type:2,index:++a});i.append(e[t],we())}}}else if(i.nodeType===8)if(i.data===xe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(be,e+1))!==-1;)c.push({type:7,index:a}),e+=be.length-1}a++}}static createElement(e,t){let n=Ce.createElement(`template`);return n.innerHTML=e,n}};function Ue(e,t,n=e,r){if(t===Le)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Te(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ue(e,i._$AS(e,t.values),i,r)),t}var We=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ce).importNode(t,!0);ze.currentNode=r;let i=ze.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ge(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Xe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ze.nextNode(),a++)}return ze.currentNode=Ce,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ge=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ue(this,e,t),Te(e)?e===b||e==null||e===``?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==Le&&this._(e):e._$litType$===void 0?e.nodeType===void 0?De(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&Te(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ce.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=He.createElement(Be(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new We(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new He(e)),t}k(t){Ee(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(we()),this.O(we()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ke=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ue(this,e,t,0),a=!Te(e)||e!==this._$AH&&e!==Le,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ue(this,r[n+o],t,o),s===Le&&(s=this._$AH[o]),a||=!Te(s)||s!==this._$AH[o],s===b?e=b:e!==b&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},qe=class extends Ke{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}},Je=class extends Ke{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}},Ye=class extends Ke{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ue(this,e,t,0)??b)===Le)return;let n=this._$AH,r=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==b&&(n===b||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Xe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}};const Ze={M:ye,P:be,A:xe,C:1,L:Ve,R:We,D:De,V:Ue,I:Ge,H:Ke,N:Je,U:Ye,B:qe,F:Xe},Qe=ge.litHtmlPolyfillSupport;Qe?.(He,Ge),(ge.litHtmlVersions??=[]).push(`3.3.1`);const $e=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ge(t.insertBefore(we(),e),e,void 0,n??{})}return i._$AI(e),i},et=globalThis;var tt=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Le}};tt._$litElement$=!0,tt.finalized=!0,et.litElementHydrateSupport?.({LitElement:tt});const nt=et.litElementPolyfillSupport;nt?.({LitElement:tt}),(et.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const rt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},it={attribute:!0,type:String,converter:fe,reflect:!1,hasChanged:pe},at=(e=it,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function x(e){return(t,n)=>typeof n==`object`?at(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ot(e){return x({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ct(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return st(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return st(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var lt=v`
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
`,ut=/;\s+$/;function dt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ft(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ut)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var pt,mt=class extends tt{constructor(){super(),u(this,pt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[lt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,pt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,pt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ft({property:dt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ft({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};pt=new WeakMap,s([x()],mt.prototype,`dir`,2),s([x()],mt.prototype,`lang`,2),s([x({type:Boolean,reflect:!0,attribute:`did-ssr`})],mt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),gt=class extends mt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[ht()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};gt.formAssociated=!0,s([x({reflect:!0})],gt.prototype,`name`,2),s([x({type:Boolean})],gt.prototype,`disabled`,2),s([x({state:!0,attribute:!1})],gt.prototype,`valueHasChanged`,2),s([x({state:!0,attribute:!1})],gt.prototype,`hasInteracted`,2),s([x({attribute:`custom-error`,reflect:!0})],gt.prototype,`customError`,2),s([x({attribute:!1,state:!0,type:Object})],gt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _t={small:`s`,medium:`m`,large:`l`},vt=new Set;function yt(e,t){t in _t&&!vt.has(`${e}:${t}`)&&(vt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${_t[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},xt=v`
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
`,St=v`
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
`,Ct=v`
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
function wt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Tt=new Set,Et=new Map;let Dt,Ot=`ltr`,kt=`en`;const At=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(At){let e=new MutationObserver(Mt);Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function jt(...e){e.map(e=>{let t=e.$code.toLowerCase();Et.has(t)?Et.set(t,Object.assign(Object.assign({},Et.get(t)),e)):Et.set(t,e),Dt||=e}),Mt()}function Mt(){At&&(Ot=document.documentElement.dir||`ltr`,kt=document.documentElement.lang||navigator.language),[...Tt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Nt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Tt.add(this.host)}hostDisconnected(){Tt.delete(this.host)}dir(){return`${this.host.dir||Ot}`.toLowerCase()}lang(){let e=`${this.host.lang||kt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Dt?Dt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Et.get(`${n}-${r}`),a=Et.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Dt&&Dt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Dt&&Dt[e])i=Dt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Pt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};jt(Pt);var Ft=Pt,It=class extends Nt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};jt(Ft);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Lt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=e=>(...t)=>({_$litDirective$:e,values:t});var zt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Bt=Rt(class extends zt{constructor(e){if(super(e),e.type!==Lt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Le}}),Vt=e=>e??b,Ht=Symbol.for(``),Ut=e=>{if(e?.r===Ht)return e?._$litStatic$},Wt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Ht}),Gt=new Map,Kt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Ut(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Gt.get(e))===void 0&&(o.raw=o,Gt.set(e,t=o)),n=s}return e(t,...n)})(Ie);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var S=class extends gt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new bt(this,`[default]`,`start`,`end`),this.localize=new It(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){yt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Wt`a`:Wt`button`;return Kt`
      <${t}
        part="base button"
        class=${Bt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Vt(e?void 0:this.disabled)}
        type=${Vt(e?void 0:this.type)}
        title=${this.title}
        name=${Vt(e?void 0:this.name)}
        value=${Vt(e?void 0:this.value)}
        href=${Vt(e?this.href:void 0)}
        target=${Vt(e?this.target:void 0)}
        download=${Vt(e?this.download:void 0)}
        rel=${Vt(e&&this.rel?this.rel:void 0)}
        role=${Vt(e?void 0:`button`)}
        aria-disabled=${Vt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Kt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Kt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};S.shadowRootOptions={...gt.shadowRootOptions,delegatesFocus:!0},S.css=[St,Ct,xt],s([ct(`.button`)],S.prototype,`button`,2),s([ct(`slot:not([name])`)],S.prototype,`labelSlot`,2),s([ot()],S.prototype,`invalid`,2),s([ot()],S.prototype,`isIconButton`,2),s([x()],S.prototype,`title`,2),s([x({reflect:!0})],S.prototype,`variant`,2),s([x({reflect:!0})],S.prototype,`appearance`,2),s([x({reflect:!0})],S.prototype,`size`,2),s([wt(`size`)],S.prototype,`handleSizeChange`,1),s([x({attribute:`with-caret`,type:Boolean,reflect:!0})],S.prototype,`withCaret`,2),s([x({attribute:`with-start`,type:Boolean})],S.prototype,`withStart`,2),s([x({attribute:`with-end`,type:Boolean})],S.prototype,`withEnd`,2),s([x({type:Boolean})],S.prototype,`disabled`,2),s([x({type:Boolean,reflect:!0})],S.prototype,`loading`,2),s([x({type:Boolean,reflect:!0})],S.prototype,`pill`,2),s([x()],S.prototype,`type`,2),s([x({reflect:!0})],S.prototype,`name`,2),s([x({reflect:!0})],S.prototype,`value`,2),s([x({reflect:!0})],S.prototype,`href`,2),s([x()],S.prototype,`target`,2),s([x()],S.prototype,`rel`,2),s([x()],S.prototype,`download`,2),s([x({attribute:`formaction`})],S.prototype,`formAction`,2),s([x({attribute:`formenctype`})],S.prototype,`formEnctype`,2),s([x({attribute:`formmethod`})],S.prototype,`formMethod`,2),s([x({attribute:`formnovalidate`,type:Boolean})],S.prototype,`formNoValidate`,2),s([x({attribute:`formtarget`})],S.prototype,`formTarget`,2),s([wt(`disabled`,{waitUntilFirstUpdate:!0})],S.prototype,`handleDisabledChange`,1),s([wt(`href`)],S.prototype,`handleHrefChange`,1),s([wt(`loading`,{waitUntilFirstUpdate:!0})],S.prototype,`handleLoadingChange`,1),S=s([rt(`wa-button`)],S),S.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=v`
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
`,Jt=class extends mt{constructor(){super(...arguments),this.localize=new It(this)}render(){return Ie`
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
    `}};Jt.css=qt,Jt=s([rt(`wa-spinner`)],Jt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Xt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Zt=v`
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
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:vn}=Ze,yn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bn=Symbol(),xn=Symbol(),Sn,Cn=new Map,C=class extends mt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ie`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?bn:xn}catch{return xn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return bn;Sn||=new DOMParser;let r=Sn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):bn}catch{return bn}}}connectedCallback(){super.connectedCallback(),mn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),hn(this)}async getIconSource(){let e=gn(this.library),t=this.family||_n();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?gn(this.library):void 0;if(!e){this.svg=null;return}let r=Cn.get(e);r||(r=this.resolveIcon(e,n),Cn.set(e,r));let i=await r;if(i===xn&&Cn.delete(e),e===(await this.getIconSource()).url){if(yn(i)){this.svg=i;return}switch(i){case xn:case bn:this.svg=null,this.dispatchEvent(new Yt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Xt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=gn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ie`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};C.css=Zt,s([ot()],C.prototype,`svg`,2),s([x({reflect:!0})],C.prototype,`name`,2),s([x({reflect:!0})],C.prototype,`family`,2),s([x({reflect:!0})],C.prototype,`variant`,2),s([x({reflect:!0})],C.prototype,`canvas`,2),s([x({attribute:`auto-width`,type:Boolean,reflect:!0})],C.prototype,`autoWidth`,2),s([x({attribute:`swap-opacity`,type:Boolean,reflect:!0})],C.prototype,`swapOpacity`,2),s([x()],C.prototype,`src`,2),s([x()],C.prototype,`label`,2),s([x({reflect:!0})],C.prototype,`library`,2),s([x({type:Number,reflect:!0})],C.prototype,`rotate`,2),s([x({type:String,reflect:!0})],C.prototype,`flip`,2),s([x({type:String,reflect:!0})],C.prototype,`animation`,2),s([wt(`label`)],C.prototype,`handleLabelChange`,1),s([wt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],C.prototype,`setIcon`,1),C=s([rt(`wa-icon`)],C);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=t({default:()=>S}),Tn=v`
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
`,En=class extends mt{constructor(){super(...arguments),this.hasSlotController=new bt(this,`[default]`),this.orientation=`horizontal`,this.withLabel=!1,this.labelPlacement=`center`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}willUpdate(e){this.withLabel=this.hasSlotController.test(`[default]`,`withLabel`),super.willUpdate(e)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.orientation)}handleSlotChange(){this.internals&&(this.internals.ariaLabel=this.textContent?.trim()||null)}render(){return Ie`
      <div part="label" class="label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};En.css=Tn,s([x({reflect:!0})],En.prototype,`orientation`,2),s([x({attribute:`with-label`,type:Boolean,reflect:!0})],En.prototype,`withLabel`,2),s([x({attribute:`label-placement`,reflect:!0})],En.prototype,`labelPlacement`,2),s([wt(`orientation`)],En.prototype,`handleVerticalChange`,1),En=s([rt(`wa-divider`)],En);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>En}),On=v`
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
`;function kn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var w=class extends mt{constructor(){super(...arguments),this.hasSlotController=new bt(this,`[default]`,`start`,`end`),this.active=!1,this.variant=`default`,this.size=`m`,this.checkboxAdjacent=!1,this.submenuAdjacent=!1,this.type=`normal`,this.checked=!1,this.disabled=!1,this.submenuOpen=!1,this.hasSubmenu=!1,this.handleSlotChange=()=>{this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState(),this.hasSubmenu?(this.setAttribute(`aria-haspopup`,`menu`),this.setAttribute(`aria-expanded`,this.submenuOpen?`true`:`false`)):(this.removeAttribute(`aria-haspopup`),this.removeAttribute(`aria-expanded`))},this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handlePointerEnter=e=>{e.pointerType===`mouse`&&this.hasSubmenu&&!this.disabled&&(this.notifyParentOfOpening(),this.submenuOpen=!0)}}handleSizeChange(){yt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener?.(`click`,this.handleHostClick),this.addEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.addEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.addEventListener?.(`slotchange`,this.handleSlotChange)}disconnectedCallback(){super.disconnectedCallback(),this.closeSubmenu(),this.removeEventListener?.(`click`,this.handleHostClick),this.removeEventListener?.(`pointerenter`,this.handlePointerEnter),this.shadowRoot?.removeEventListener?.(`click`,this.handleClick,{capture:!0}),this.shadowRoot?.removeEventListener?.(`slotchange`,this.handleSlotChange)}firstUpdated(e){super.firstUpdated(e),this.setAttribute(`tabindex`,`-1`),this.hasSubmenu=this.hasSlotController.test(`submenu`),this.updateHasSubmenuState()}updated(e){e.has(`active`)&&(this.setAttribute(`tabindex`,this.active?`0`:`-1`),this.customStates.set(`active`,this.active)),e.has(`checked`)&&(this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`),this.customStates.set(`checked`,this.checked)),e.has(`disabled`)&&(this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.customStates.set(`disabled`,this.disabled)),e.has(`type`)&&(this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))),(e.has(`href`)||e.has(`hasSubmenu`))&&this.customStates.set(`link`,this.isLink()),e.has(`submenuOpen`)&&(this.customStates.set(`submenu-open`,this.submenuOpen),this.submenuOpen?this.openSubmenu():this.closeSubmenu())}updateHasSubmenuState(){this.customStates.set(`has-submenu`,this.hasSubmenu)}async openSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||!this.isConnected||(this.notifyParentOfOpening(),e.showPopover?.(),e.hidden=!1,e.setAttribute(`data-visible`,``),this.submenuOpen=!0,this.setAttribute(`aria-expanded`,`true`),await kn(e,`show`),setTimeout(()=>{let e=this.getSubmenuItems();e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0))}notifyParentOfOpening(){let e=new CustomEvent(`submenu-opening`,{bubbles:!0,composed:!0,detail:{item:this}});this.dispatchEvent(e);let t=this.parentElement;t&&[...t.children].filter(e=>e!==this&&e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===this.getAttribute(`slot`)&&e.submenuOpen).forEach(e=>{e.submenuOpen=!1})}async closeSubmenu(){let e=this.submenuElement;!this.hasSubmenu||!e||(this.submenuOpen=!1,this.setAttribute(`aria-expanded`,`false`),e.hidden||(await kn(e,`hide`),e?.isConnected&&(e.hidden=!0,e.removeAttribute(`data-visible`),e.hidePopover?.())))}isLink(){return!!this.href&&!this.hasSubmenu}navigate(e){let t=this.linkElement;!this.isLink()||this.disabled||!t||t.dispatchEvent(new MouseEvent(`click`,{bubbles:!1,cancelable:!0,composed:!1,altKey:e?.altKey??!1,ctrlKey:e?.ctrlKey??!1,metaKey:e?.metaKey??!1,shiftKey:e?.shiftKey??!1}))}getSubmenuItems(){return[...this.children].filter(e=>e.localName===`wa-dropdown-item`&&e.getAttribute(`slot`)===`submenu`&&!e.hasAttribute(`disabled`))}render(){return Ie`
      ${this.href?Ie`
            <a
              id="link"
              href=${this.href}
              target=${Vt(this.target)}
              rel=${Vt(this.rel)}
              download=${Vt(this.download)}
              tabindex="-1"
              aria-hidden="true"
            ></a>
          `:``}
      ${this.type===`checkbox`?Ie`
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

      ${this.hasSubmenu?Ie`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `:``}
      ${this.hasSubmenu?Ie`
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
    `}};w.css=On,s([ct(`#submenu`)],w.prototype,`submenuElement`,2),s([ct(`#link`)],w.prototype,`linkElement`,2),s([x({type:Boolean})],w.prototype,`active`,2),s([x({reflect:!0})],w.prototype,`variant`,2),s([x({reflect:!0})],w.prototype,`size`,2),s([wt(`size`)],w.prototype,`handleSizeChange`,1),s([x({attribute:`checkbox-adjacent`,type:Boolean,reflect:!0})],w.prototype,`checkboxAdjacent`,2),s([x({attribute:`submenu-adjacent`,type:Boolean,reflect:!0})],w.prototype,`submenuAdjacent`,2),s([x()],w.prototype,`value`,2),s([x({reflect:!0})],w.prototype,`type`,2),s([x({type:Boolean})],w.prototype,`checked`,2),s([x({type:Boolean,reflect:!0})],w.prototype,`disabled`,2),s([x({type:Boolean,reflect:!0})],w.prototype,`submenuOpen`,2),s([x({reflect:!0})],w.prototype,`href`,2),s([x()],w.prototype,`target`,2),s([x()],w.prototype,`rel`,2),s([x()],w.prototype,`download`,2),s([ot()],w.prototype,`hasSubmenu`,2),w=s([rt(`wa-dropdown-item`)],w);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=t({default:()=>w}),jn=class extends Event{constructor(e){super(`wa-select`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function*Mn(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*Mn(e.shadowRoot.activeElement)))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=v`
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
`,Pn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Fn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},In=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Ln=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Rn=[];function zn(e){Bn(e),Rn.push(e)}function Bn(e){for(let t=Rn.length-1;t>=0;t--)if(Rn[t]===e){Rn.splice(t,1);break}}function Vn(e){return Rn.length>0&&Rn[Rn.length-1]===e}let Hn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Un(e=``){return`${e}${Hn()}`}const Wn=Math.min,Gn=Math.max,Kn=Math.round,qn=Math.floor,Jn=e=>({x:e,y:e}),Yn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Xn={start:`end`,end:`start`};function Zn(e,t,n){return Gn(e,Wn(t,n))}function Qn(e,t){return typeof e==`function`?e(t):e}function $n(e){return e.split(`-`)[0]}function er(e){return e.split(`-`)[1]}function tr(e){return e===`x`?`y`:`x`}function nr(e){return e===`y`?`height`:`width`}const rr=new Set([`top`,`bottom`]);function ir(e){return rr.has($n(e))?`y`:`x`}function ar(e){return tr(ir(e))}function or(e,t,n){n===void 0&&(n=!1);let r=er(e),i=ar(e),a=nr(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=hr(o)),[o,hr(o)]}function sr(e){let t=hr(e);return[cr(e),t,cr(t)]}function cr(e){return e.replace(/start|end/g,e=>Xn[e])}const lr=[`left`,`right`],ur=[`right`,`left`],dr=[`top`,`bottom`],fr=[`bottom`,`top`];function pr(e,t,n){switch(e){case`top`:case`bottom`:return n?t?ur:lr:t?lr:ur;case`left`:case`right`:return t?dr:fr;default:return[]}}function mr(e,t,n,r){let i=er(e),a=pr($n(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(cr)))),a}function hr(e){return e.replace(/left|right|bottom|top/g,e=>Yn[e])}function gr(e){return{top:0,right:0,bottom:0,left:0,...e}}function _r(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:gr(e)}function vr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function yr(e,t,n){let{reference:r,floating:i}=e,a=ir(t),o=ar(t),s=nr(o),c=$n(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(er(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const br=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=yr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=yr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function xr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Qn(t,e),p=_r(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=vr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=vr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const Sr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Qn(e,t)||{};if(l==null)return{};let d=_r(u),f={x:n,y:r},p=ar(i),m=nr(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],te=f[p]-a.reference[p],ne=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),re=ne?ne[y]:0;(!re||!await(o.isElement==null?void 0:o.isElement(ne)))&&(re=s.floating[y]||a.floating[m]);let ie=ee/2-te/2,ae=re/2-h[m]/2-1,oe=Wn(d[_],ae),se=Wn(d[v],ae),ce=oe,le=re-h[m]-se,ue=re/2-h[m]/2+ie,de=Zn(ce,ue,le),fe=!c.arrow&&er(i)!=null&&ue!==de&&a.reference[m]/2-(ue<ce?oe:se)-h[m]/2<0,pe=fe?ue<ce?ue-ce:ue-le:0;return{[p]:f[p]+pe,data:{[p]:de,centerOffset:ue-de-pe,...fe&&{alignmentOffset:pe}},reset:fe}}}),Cr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Qn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=$n(r),_=ir(o),v=$n(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[hr(o)]:sr(o)),te=p!==`none`;!d&&te&&ee.push(...mr(o,m,p,y));let ne=[o,...ee],re=await xr(t,h),ie=[],ae=i.flip?.overflows||[];if(l&&ie.push(re[g]),u){let e=or(r,a,y);ie.push(re[e[0]],re[e[1]])}if(ae=[...ae,{placement:r,overflows:ie}],!ie.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ne[e];if(t&&(!(u===`alignment`&&_!==ir(t))||ae.every(e=>ir(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ae},reset:{placement:t}};let n=ae.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ae.filter(e=>{if(te){let t=ir(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},wr=new Set([`left`,`top`]);async function Tr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=$n(n),s=er(n),c=ir(n)===`y`,l=wr.has(o)?-1:1,u=a&&c?-1:1,d=Qn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Er=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Tr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},Dr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Qn(e,t),l={x:n,y:r},u=await xr(t,c),d=ir($n(i)),f=tr(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Zn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Zn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Or=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Qn(e,t),u=await xr(t,l),d=$n(i),f=er(i),p=ir(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=Wn(h-u[g],v),te=Wn(m-u[_],y),ne=!t.middlewareData.shift,re=ee,ie=te;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(ie=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(re=v),ne&&!f){let e=Gn(u.left,0),t=Gn(u.right,0),n=Gn(u.top,0),r=Gn(u.bottom,0);p?ie=m-2*(e!==0||t!==0?e+t:Gn(u.left,u.right)):re=h-2*(n!==0||r!==0?n+r:Gn(u.top,u.bottom))}await c({...t,availableWidth:ie,availableHeight:re});let ae=await o.getDimensions(s.floating);return m!==ae.width||h!==ae.height?{reset:{rects:!0}}:{}}}};function kr(){return typeof window<`u`}function Ar(e){return Nr(e)?(e.nodeName||``).toLowerCase():`#document`}function jr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Mr(e){return((Nr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Nr(e){return kr()?e instanceof Node||e instanceof jr(e).Node:!1}function Pr(e){return kr()?e instanceof Element||e instanceof jr(e).Element:!1}function Fr(e){return kr()?e instanceof HTMLElement||e instanceof jr(e).HTMLElement:!1}function Ir(e){return!kr()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof jr(e).ShadowRoot}const Lr=new Set([`inline`,`contents`]);function Rr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Zr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Lr.has(i)}const zr=new Set([`table`,`td`,`th`]);function Br(e){return zr.has(Ar(e))}const Vr=[`:popover-open`,`:modal`];function Hr(e){return Vr.some(t=>{try{return e.matches(t)}catch{return!1}})}const Ur=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Wr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Gr=[`paint`,`layout`,`strict`,`content`];function Kr(e){let t=Jr(),n=Pr(e)?Zr(e):e;return Ur.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Wr.some(e=>(n.willChange||``).includes(e))||Gr.some(e=>(n.contain||``).includes(e))}function qr(e){let t=$r(e);for(;Fr(t)&&!Xr(t);){if(Kr(t))return t;if(Hr(t))return null;t=$r(t)}return null}function Jr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Yr=new Set([`html`,`body`,`#document`]);function Xr(e){return Yr.has(Ar(e))}function Zr(e){return jr(e).getComputedStyle(e)}function Qr(e){return Pr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $r(e){if(Ar(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Ir(e)&&e.host||Mr(e);return Ir(t)?t.host:t}function ei(e){let t=$r(e);return Xr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Fr(t)&&Rr(t)?t:ei(t)}function ti(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=ei(e),i=r===e.ownerDocument?.body,a=jr(r);if(i){let e=ni(a);return t.concat(a,a.visualViewport||[],Rr(r)?r:[],e&&n?ti(e):[])}return t.concat(r,ti(r,[],n))}function ni(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ri(e){let t=Zr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Fr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Kn(n)!==a||Kn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ii(e){return Pr(e)?e:e.contextElement}function ai(e){let t=ii(e);if(!Fr(t))return Jn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ri(t),o=(a?Kn(n.width):n.width)/r,s=(a?Kn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const oi=Jn(0);function si(e){let t=jr(e);return!Jr()||!t.visualViewport?oi:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ci(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==jr(e)?!1:t}function li(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ii(e),o=Jn(1);t&&(r?Pr(r)&&(o=ai(r)):o=ai(e));let s=ci(a,n,r)?si(a):Jn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=jr(a),t=r&&Pr(r)?jr(r):r,n=e,i=ni(n);for(;i&&r&&t!==n;){let e=ai(i),t=i.getBoundingClientRect(),r=Zr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=jr(i),i=ni(n)}}return vr({width:u,height:d,x:c,y:l})}function ui(e,t){let n=Qr(e).scrollLeft;return t?t.left+n:li(Mr(e)).left+n}function di(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-ui(e,n),y:n.top+t.scrollTop}}function fi(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Mr(r),s=t?Hr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Jn(1),u=Jn(0),d=Fr(r);if((d||!d&&!a)&&((Ar(r)!==`body`||Rr(o))&&(c=Qr(r)),Fr(r))){let e=li(r);l=ai(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?di(o,c):Jn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function pi(e){return Array.from(e.getClientRects())}function mi(e){let t=Mr(e),n=Qr(e),r=e.ownerDocument.body,i=Gn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Gn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+ui(e),s=-n.scrollTop;return Zr(r).direction===`rtl`&&(o+=Gn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function hi(e,t){let n=jr(e),r=Mr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Jr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=ui(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const gi=new Set([`absolute`,`fixed`]);function _i(e,t){let n=li(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Fr(e)?ai(e):Jn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function vi(e,t,n){let r;if(t===`viewport`)r=hi(e,n);else if(t===`document`)r=mi(Mr(e));else if(Pr(t))r=_i(t,n);else{let n=si(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return vr(r)}function yi(e,t){let n=$r(e);return n===t||!Pr(n)||Xr(n)?!1:Zr(n).position===`fixed`||yi(n,t)}function bi(e,t){let n=t.get(e);if(n)return n;let r=ti(e,[],!1).filter(e=>Pr(e)&&Ar(e)!==`body`),i=null,a=Zr(e).position===`fixed`,o=a?$r(e):e;for(;Pr(o)&&!Xr(o);){let t=Zr(o),n=Kr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&gi.has(i.position)||Rr(o)&&!n&&yi(e,o))?r=r.filter(e=>e!==o):i=t,o=$r(o)}return t.set(e,r),r}function xi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Hr(t)?[]:bi(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=vi(t,n,i);return e.top=Gn(r.top,e.top),e.right=Wn(r.right,e.right),e.bottom=Wn(r.bottom,e.bottom),e.left=Gn(r.left,e.left),e},vi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Si(e){let{width:t,height:n}=ri(e);return{width:t,height:n}}function Ci(e,t,n){let r=Fr(t),i=Mr(t),a=n===`fixed`,o=li(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Jn(0);function l(){c.x=ui(i)}if(r||!r&&!a)if((Ar(t)!==`body`||Rr(i))&&(s=Qr(t)),r){let e=li(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?di(i,s):Jn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function wi(e){return Zr(e).position===`static`}function Ti(e,t){if(!Fr(e)||Zr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Mr(e)===n&&(n=n.ownerDocument.body),n}function Ei(e,t){let n=jr(e);if(Hr(e))return n;if(!Fr(e)){let t=$r(e);for(;t&&!Xr(t);){if(Pr(t)&&!wi(t))return t;t=$r(t)}return n}let r=Ti(e,t);for(;r&&Br(r)&&wi(r);)r=Ti(r,t);return r&&Xr(r)&&wi(r)&&!Kr(r)?n:r||qr(e)||n}const Di=async function(e){let t=this.getOffsetParent||Ei,n=this.getDimensions,r=await n(e.floating);return{reference:Ci(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Oi(e){return Zr(e).direction===`rtl`}const ki={convertOffsetParentRelativeRectToViewportRelativeRect:fi,getDocumentElement:Mr,getClippingRect:xi,getOffsetParent:Ei,getElementRects:Di,getClientRects:pi,getDimensions:Si,getScale:ai,isElement:Pr,isRTL:Oi};function Ai(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ji(e,t){let n=null,r,i=Mr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=qn(d),h=qn(i.clientWidth-(u+f)),g=qn(i.clientHeight-(d+p)),_=qn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Gn(0,Wn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Ai(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function Mi(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ii(e),u=i||a?[...l?ti(l):[],...ti(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?ji(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?li(e):null;c&&g();function g(){let t=li(e);h&&!Ai(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Ni=Er,Pi=Dr,Fi=Cr,Ii=Or,Li=Sr,Ri=(e,t,n)=>{let r=new Map,i={platform:ki,...n},a={...i.platform,_c:r};return br(e,t,{...i,platform:a})};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zi=new Set,Bi=class extends mt{constructor(){super(...arguments),this.submenuCleanups=new Map,this.localize=new It(this),this.userTypedQuery=``,this.openSubmenuStack=[],this.open=!1,this.size=`m`,this.placement=`bottom-start`,this.distance=0,this.skidding=0,this.handleDocumentKeyDown=async e=>{let t=this.localize.dir()===`rtl`;if(e.key===`Escape`&&this.open&&Vn(this)){let t=this.getTrigger();e.preventDefault(),e.stopPropagation(),this.open=!1,t?.focus({preventScroll:!0});return}let n=[...Mn()].find(e=>e.localName===`wa-dropdown-item`),r=n?.localName===`wa-dropdown-item`,i=this.getCurrentSubmenuItem(),a=!!i,o,s,c;a?(o=this.getSubmenuItems(i),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1):(o=this.getItems(),s=o.find(e=>e.active||e===n),c=s?o.indexOf(s):-1);let l;if(e.key===`ArrowUp`&&(e.preventDefault(),e.stopPropagation(),l=c>0?o[c-1]:o[o.length-1]),e.key===`ArrowDown`&&(e.preventDefault(),e.stopPropagation(),l=c!==-1&&c<o.length-1?o[c+1]:o[0]),e.key===(t?`ArrowLeft`:`ArrowRight`)&&r&&s&&s.hasSubmenu){e.preventDefault(),e.stopPropagation(),s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0);return}if(e.key===(t?`ArrowRight`:`ArrowLeft`)&&a){e.preventDefault(),e.stopPropagation();let t=this.removeFromSubmenuStack();t&&(t.submenuOpen=!1,setTimeout(()=>{t.focus({preventScroll:!0}),t.active=!0,(t.slot===`submenu`?this.getSubmenuItems(t.parentElement):this.getItems()).forEach(e=>{e!==t&&(e.active=!1)})},0));return}if((e.key===`Home`||e.key===`End`)&&(e.preventDefault(),e.stopPropagation(),l=e.key===`Home`?o[0]:o[o.length-1]),e.key===`Tab`&&await this.hideMenu(),e.key.length===1&&!(e.metaKey||e.ctrlKey||e.altKey)&&!(e.key===` `&&this.userTypedQuery===``)&&(clearTimeout(this.userTypedTimeout),this.userTypedTimeout=setTimeout(()=>{this.userTypedQuery=``},1e3),this.userTypedQuery+=e.key,o.some(e=>{let t=(e.textContent||``).trim().toLowerCase(),n=this.userTypedQuery.trim().toLowerCase();return t.startsWith(n)?(l=e,!0):!1})),l){e.preventDefault(),e.stopPropagation(),o.forEach(e=>e.active=e===l),l.focus({preventScroll:!0}),l.scrollIntoView({block:`nearest`});return}(e.key===`Enter`||e.key===` `&&this.userTypedQuery===``)&&r&&s&&(e.preventDefault(),e.stopPropagation(),s.hasSubmenu?(s.submenuOpen=!0,this.addToSubmenuStack(s),setTimeout(()=>{let e=this.getSubmenuItems(s);e.length>0&&(e.forEach((e,t)=>e.active=t===0),e[0].focus({preventScroll:!0}))},0)):this.makeSelection(s,e))},this.handleDocumentPointerDown=e=>{e.composedPath().some(e=>e instanceof HTMLElement?e===this||e.closest(`wa-dropdown, [part="submenu"]`):!1)||(this.open=!1)},this.handleGlobalMouseMove=e=>{let t=this.getCurrentSubmenuItem();if(!t?.submenuOpen||!t.submenuElement)return;let n=t.submenuElement.getBoundingClientRect(),r=this.localize.dir()===`rtl`,i=r?n.right:n.left,a=r?Math.max(e.clientX,i):Math.min(e.clientX,i),o=Math.max(n.top,Math.min(e.clientY,n.bottom));t.submenuElement.style.setProperty(`--safe-triangle-cursor-x`,`${a}px`),t.submenuElement.style.setProperty(`--safe-triangle-cursor-y`,`${o}px`);let s=e.composedPath(),c=t.matches(`:hover`),l=!!t.submenuElement?.matches(`:hover`),u=c||!!s.find(e=>e===t),d=l||!!s.find(e=>e instanceof HTMLElement&&e.closest(`[part="submenu"]`)===t.submenuElement);!u&&!d&&setTimeout(()=>{!c&&!l&&(t.submenuOpen=!1)},100)}}handleSizeChange(){yt(this.localName,this.size)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.userTypedTimeout),this.closeAllSubmenus(),this.submenuCleanups.forEach(e=>e()),this.submenuCleanups.clear(),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),Bn(this)}firstUpdated(e){super.firstUpdated(e),this.syncAriaAttributes()}async updated(e){if(e.has(`open`)){let t=e.get(`open`);if(t===this.open||t===void 0&&this.open===!1)return;this.customStates.set(`open`,this.open),this.open?await this.showMenu():(this.closeAllSubmenus(),await this.hideMenu())}e.has(`size`)&&this.syncItemSizes()}getItems(e=!1){let t=(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`);return e?t:t.filter(e=>!e.disabled)}getSubmenuItems(e,t=!1){let n=e.shadowRoot?.querySelector(`slot[name="submenu"]`)||e.querySelector(`slot[name="submenu"]`);if(!n)return[];let r=n.assignedElements({flatten:!0}).filter(e=>e.localName===`wa-dropdown-item`);return t?r:r.filter(e=>!e.disabled)}syncItemSizes(){(this.defaultSlot?.assignedElements({flatten:!0})??[]).filter(e=>e.localName===`wa-dropdown-item`).forEach(e=>e.size=this.size)}addToSubmenuStack(e){let t=this.openSubmenuStack.indexOf(e);t===-1?this.openSubmenuStack.push(e):this.openSubmenuStack=this.openSubmenuStack.slice(0,t+1)}removeFromSubmenuStack(){return this.openSubmenuStack.pop()}getCurrentSubmenuItem(){return this.openSubmenuStack.length>0?this.openSubmenuStack[this.openSubmenuStack.length-1]:void 0}closeAllSubmenus(){this.getItems(!0).forEach(e=>{e.submenuOpen=!1}),this.openSubmenuStack=[]}closeSiblingSubmenus(e){let t=e.closest(`wa-dropdown-item:not([slot="submenu"])`),n;n=t?this.getSubmenuItems(t,!0):this.getItems(!0),n.forEach(t=>{t!==e&&t.submenuOpen&&(t.submenuOpen=!1)}),this.openSubmenuStack.includes(e)||this.openSubmenuStack.push(e)}getTrigger(){return this.querySelector(`[slot="trigger"]`)}async showMenu(){if(!this.getTrigger()||!this.popup||!this.menu)return;let e=new Pn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}if(this.popup.active)return;zi.forEach(e=>e.open=!1),this.popup.active=!0,this.open=!0,zi.add(this),zn(this),this.syncAriaAttributes(),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`pointerdown`,this.handleDocumentPointerDown),document.addEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`hide`),await kn(this.menu,`show`);let t=this.getItems();t.length>0&&(t.forEach((e,t)=>e.active=t===0),t[0].focus({preventScroll:!0})),this.dispatchEvent(new Ln)}async hideMenu(){if(!this.popup||!this.menu)return;let e=new Fn({source:this});if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}this.open=!1,zi.delete(this),Bn(this),this.syncAriaAttributes(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`pointerdown`,this.handleDocumentPointerDown),document.removeEventListener(`mousemove`,this.handleGlobalMouseMove),this.menu.classList.remove(`show`),await kn(this.menu,`hide`),this.popup.active=this.open,this.dispatchEvent(new In)}handleMenuClick(e){let t=e.target.closest(`wa-dropdown-item`);if(!(!t||t.disabled)){if(t.hasSubmenu){t.submenuOpen||=(this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),!0),e.stopPropagation();return}this.makeSelection(t,e)}}async handleMenuSlotChange(){let e=this.getItems(!0);await Promise.all(e.map(e=>e.updateComplete)),this.syncItemSizes();let t=e.some(e=>e.type===`checkbox`),n=e.some(e=>e.hasSubmenu);e.forEach((r,i)=>{r.setAttribute(`aria-posinset`,String(i+1)),r.setAttribute(`aria-setsize`,String(e.length)),r.active=i===0,r.checkboxAdjacent=t,r.submenuAdjacent=n})}handleTriggerClick(){this.open=!this.open}handleSubmenuOpening(e){let t=e.detail.item;this.closeSiblingSubmenus(t),this.addToSubmenuStack(t),this.setupSubmenuPosition(t),this.processSubmenuItems(t)}setupSubmenuPosition(e){if(!e.submenuElement)return;this.cleanupSubmenuPosition(e);let t=Mi(e,e.submenuElement,()=>{this.positionSubmenu(e),this.updateSafeTriangleCoordinates(e)});this.submenuCleanups.set(e,t);let n=e.submenuElement.querySelector(`slot[name="submenu"]`);n&&(n.removeEventListener(`slotchange`,Bi.handleSubmenuSlotChange),n.addEventListener(`slotchange`,Bi.handleSubmenuSlotChange),Bi.handleSubmenuSlotChange({target:n}))}static handleSubmenuSlotChange(e){let t=e.target;if(!t)return;let n=t.assignedElements().filter(e=>e.localName===`wa-dropdown-item`);if(n.length===0)return;let r=n.some(e=>e.hasSubmenu),i=n.some(e=>e.type===`checkbox`);n.forEach(e=>{e.submenuAdjacent=r,e.checkboxAdjacent=i})}processSubmenuItems(e){if(!e.submenuElement)return;let t=this.getSubmenuItems(e,!0),n=t.some(e=>e.hasSubmenu);t.forEach(e=>{e.submenuAdjacent=n})}cleanupSubmenuPosition(e){let t=this.submenuCleanups.get(e);t&&(t(),this.submenuCleanups.delete(e))}positionSubmenu(e){if(!e.submenuElement)return;let t=this.localize.dir()===`rtl`?`left-start`:`right-start`;Ri(e,e.submenuElement,{placement:t,middleware:[Ni({mainAxis:0,crossAxis:-5}),Fi({fallbackStrategy:`bestFit`}),Pi({padding:8,crossAxis:!0})]}).then(({x:t,y:n,placement:r})=>{e.submenuElement.setAttribute(`data-placement`,r),Object.assign(e.submenuElement.style,{left:`${t}px`,top:`${n}px`})})}updateSafeTriangleCoordinates(e){if(!e.submenuElement||!e.submenuOpen)return;if(document.activeElement?.matches(`:focus-visible`)){e.submenuElement.style.setProperty(`--safe-triangle-visible`,`none`);return}e.submenuElement.style.setProperty(`--safe-triangle-visible`,`block`);let t=e.submenuElement.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-start-y`,`${t.top}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-x`,`${n?t.right:t.left}px`),e.submenuElement.style.setProperty(`--safe-triangle-submenu-end-y`,`${t.bottom}px`)}makeSelection(e,t){let n=this.getTrigger();if(e.disabled)return;e.type===`checkbox`&&(e.checked=!e.checked);let r=new jn({item:e});this.dispatchEvent(r),r.defaultPrevented||(e.navigate(t),this.open=!1,n?.focus({preventScroll:!0}))}async syncAriaAttributes(){let e=this.getTrigger(),t;e&&(e.localName===`wa-button`?(await customElements.whenDefined(`wa-button`),await e.updateComplete,t=e.shadowRoot.querySelector(`[part~="base"]`)):t=e,t.hasAttribute(`id`)||t.setAttribute(`id`,Un(`wa-dropdown-trigger-`)),t.setAttribute(`aria-haspopup`,`menu`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`),this.menu?.setAttribute(`aria-expanded`,`false`))}render(){let e=this.didSSR&&!this.hasUpdated?this.open:this.popup?.active;return Ie`
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
    `}};Bi.css=[xt,Nn],s([ct(`slot:not([name])`)],Bi.prototype,`defaultSlot`,2),s([ct(`#menu`)],Bi.prototype,`menu`,2),s([ct(`wa-popup`)],Bi.prototype,`popup`,2),s([x({type:Boolean,reflect:!0})],Bi.prototype,`open`,2),s([x({reflect:!0})],Bi.prototype,`size`,2),s([wt(`size`)],Bi.prototype,`handleSizeChange`,1),s([x({reflect:!0})],Bi.prototype,`placement`,2),s([x({type:Number})],Bi.prototype,`distance`,2),s([x({type:Number})],Bi.prototype,`skidding`,2),Bi=s([rt(`wa-dropdown`)],Bi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Vi=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Hi=v`
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
`;function Ui(e){return Gi(e)}function Wi(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Gi(e){for(let t=e;t;t=Wi(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Wi(e);t;t=Wi(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Kr(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ki(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var qi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),T=class extends mt{constructor(){super(...arguments),this.localize=new It(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=qi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Ki(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=Mi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Ni({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ii({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!Ki(this.anchor)&&this.boundary===`scroll`&&(t=ti(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Fi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(Pi({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ii({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Li({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>ki.getOffsetParent(e,Ui):ki.getOffsetParent;Ri(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...ki,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new Vi)}render(){return Ie`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Bt({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Bt({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Ie`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};T.css=Hi,s([ct(`.popup`)],T.prototype,`popup`,2),s([ct(`.arrow`)],T.prototype,`arrowEl`,2),s([x({attribute:!1,type:Boolean})],T.prototype,`SUPPORTS_POPOVER`,2),s([x()],T.prototype,`anchor`,2),s([x({type:Boolean,reflect:!0})],T.prototype,`active`,2),s([x({reflect:!0})],T.prototype,`placement`,2),s([x()],T.prototype,`boundary`,2),s([x({type:Number})],T.prototype,`distance`,2),s([x({type:Number})],T.prototype,`skidding`,2),s([x({type:Boolean})],T.prototype,`arrow`,2),s([x({attribute:`arrow-placement`})],T.prototype,`arrowPlacement`,2),s([x({attribute:`arrow-padding`,type:Number})],T.prototype,`arrowPadding`,2),s([x({type:Boolean})],T.prototype,`flip`,2),s([x({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],T.prototype,`flipFallbackPlacements`,2),s([x({attribute:`flip-fallback-strategy`})],T.prototype,`flipFallbackStrategy`,2),s([x({type:Object})],T.prototype,`flipBoundary`,2),s([x({attribute:`flip-padding`,type:Number})],T.prototype,`flipPadding`,2),s([x({type:Boolean})],T.prototype,`shift`,2),s([x({type:Object})],T.prototype,`shiftBoundary`,2),s([x({attribute:`shift-padding`,type:Number})],T.prototype,`shiftPadding`,2),s([x({attribute:`auto-size`})],T.prototype,`autoSize`,2),s([x()],T.prototype,`sync`,2),s([x({type:Object})],T.prototype,`autoSizeBoundary`,2),s([x({attribute:`auto-size-padding`,type:Number})],T.prototype,`autoSizePadding`,2),s([x({attribute:`hover-bridge`,type:Boolean})],T.prototype,`hoverBridge`,2),T=s([rt(`wa-popup`)],T);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ji=t({default:()=>Bi}),Yi=t({default:()=>C}),E;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Xi;function Zi(e){this.c=e}E=Zi.prototype,E.toString=(function(){return String.fromCharCode(this.c)});function Qi(e){switch(typeof e){case`string`:return Nh.l();case`number`:return pa(e)?e<<24>>24===e?vm.l():e<<16>>16===e?Em.l():Eh.l():ma(e)?Th.l():wh.l();case`boolean`:return Mp.l();case`undefined`:return Qc.l();default:return e instanceof I?kh.l():e instanceof Zi?Fp.l():e&&e.$classData?e.$classData.l():null}}function $i(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return pa(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:ma(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof I?`java.lang.Long`:e instanceof Zi?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.iF()}}function ea(e,t){switch(typeof e){case`string`:return Mh(e,t);case`number`:return Sh(e,t);case`boolean`:return Ap(e,t);case`undefined`:return Yc(e,t);default:return e&&e.$classData||e===null?e.m(t):e instanceof I?Dh(e,t):e instanceof Zi?Pp(ga(e),t):va.prototype.m.call(e,t)}}function ta(e){switch(typeof e){case`string`:return jh(e);case`number`:return Ch(e);case`boolean`:return jp(e);case`undefined`:return Xc(e);default:return e&&e.$classData||e===null?e.x():e instanceof I?Oh(e):e instanceof Zi?Np(ga(e)):va.prototype.x.call(e)}}function na(e){return e===void 0?`undefined`:e.toString()}function ra(e,t){if(t===0)throw new _m(`/ by zero`);return e/t|0}function ia(e,t){if(t===0)throw new _m(`/ by zero`);return e%t|0}function aa(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function oa(e){return String.fromCharCode(e)}function sa(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var ca=0,la=new WeakMap;function ua(e){switch(typeof e){case`string`:return jh(e);case`number`:return Ch(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:jh(n);default:if(e===null)return 0;var r=la.get(e);return r===void 0&&(r=ca+1|0,ca=r,la.set(e,r)),r}}function da(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function fa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function pa(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function ma(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function ha(e){return new Zi(e)}ha(0);function ga(e){return e===null?0:e.c}function _a(e){return e===null?Xi:e}function va(){}E=va.prototype,E.constructor=va;function D(){}D.prototype=E,E.x=(function(){return ua(this)}),E.m=(function(e){return this===e}),E.B=(function(){var e=this.x();return $i(this)+`@`+(+(e>>>0)).toString(16)}),E.toString=(function(){return this.B()});function ya(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=null}else this.b=e}E=ya.prototype=new D,E.constructor=ya,E.ah=(function(e,t,n,r){sa(this.b,e,t.b,n,r)}),E.aa=(function(){return new ya(this.b.slice())});function ba(){}ba.prototype=E;function xa(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=!1}else this.b=e}E=xa.prototype=new D,E.constructor=xa,E.ah=(function(e,t,n,r){sa(this.b,e,t.b,n,r)}),E.aa=(function(){return new xa(this.b.slice())});function Sa(e){typeof e==`number`?this.b=new Uint16Array(e):this.b=e}E=Sa.prototype=new D,E.constructor=Sa,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new Sa(this.b.slice())});function Ca(e){typeof e==`number`?this.b=new Int8Array(e):this.b=e}E=Ca.prototype=new D,E.constructor=Ca,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new Ca(this.b.slice())});function wa(e){typeof e==`number`?this.b=new Int16Array(e):this.b=e}E=wa.prototype=new D,E.constructor=wa,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new wa(this.b.slice())});function Ta(e){typeof e==`number`?this.b=new Int32Array(e):this.b=e}E=Ta.prototype=new D,E.constructor=Ta,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new Ta(this.b.slice())});function Ea(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=Xi}else this.b=e}E=Ea.prototype=new D,E.constructor=Ea,E.ah=(function(e,t,n,r){sa(this.b,e,t.b,n,r)}),E.aa=(function(){return new Ea(this.b.slice())});function Da(e){typeof e==`number`?this.b=new Float32Array(e):this.b=e}E=Da.prototype=new D,E.constructor=Da,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new Da(this.b.slice())});function Oa(e){typeof e==`number`?this.b=new Float64Array(e):this.b=e}E=Oa.prototype=new D,E.constructor=Oa,E.ah=(function(e,t,n,r){t.b.set(this.b.subarray(e,e+r|0),n)}),E.aa=(function(){return new Oa(this.b.slice())});function O(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}E=O.prototype,E.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new O().y(this,r,i)),this}),E.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),E.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),E.a=(function(e){function t(e){if(typeof e==`number`){this.b=Array(e);for(var t=0;t<e;t++)this.b[t]=null}else this.b=e}var n=t.prototype=new ba;n.constructor=t,n.ah=(function(e,t,n,r){sa(this.b,e,t.b,n,r)}),n.aa=(function(){return new t(this.b.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===ka});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),E.r=(function(){return this.A||=new O().a(this),this.A}),E.l=(function(){return this.L||=new Pf(this),this.L}),E.R=(function(e){return this===e||this.F(e)}),E.S=(function(){return this.P?this.P.l():null}),E.Q=(function(){return this.O?this.O.l():null});var ka=new O;ka.n={},ka.E=`Ljava.lang.Object;`,ka.F=(e=>!e.X),ka.N=`java.lang.Object`,ka.I=(e=>e!==null),ka.A=new O().y(ka,ya,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),va.prototype.$classData=ka;var Aa=new O().p(void 0,`V`,`void`,void 0,void 0);new O().p(!1,`Z`,`boolean`,xa,void 0);var ja=new O().p(0,`C`,`char`,Sa,Uint16Array);new O().p(0,`B`,`byte`,Ca,Int8Array),new O().p(0,`S`,`short`,wa,Int16Array),new O().p(0,`I`,`int`,Ta,Int32Array);var Ma=new O().p(null,`J`,`long`,Ea,void 0);new O().p(0,`F`,`float`,Da,Float32Array),new O().p(0,`D`,`double`,Oa,Float64Array);function Na(e){return Qi(e).d8()+`@`+ua(e)}function Pa(e){var t=e.dj;return t===void 0?Na(e):t}function Fa(){this.dh=null,La=this,this.dh=Ra().fT(new X((e=>void 0)),xl().cO,!0)}E=Fa.prototype=new D,E.constructor=Fa;function Ia(){}Ia.prototype=E,E.fT=(function(e,t,n){return new yp(e,n,t,this)}),new O().i(Fa,`com.raquo.airstream.core.Observer$`,{ba:1});var La;function Ra(){return La||=new Fa,La}function za(e){this.cm=null,this.dl=null,this.cn=0,this.cm=e,this.dl=void 0;var t=ao().bQ();this.cn=t===void 0?1:1+t.cn|0,Ga().bT===-1||this.cn>Ga().bT?Kd().aD(new yh(this,Ga().bT)):Xa().a1?Xa().aG.push(this)|0:ao().d2(this)}E=za.prototype=new D,E.constructor=za;function Ba(){}Ba.prototype=E;var Va=new O().i(za,`com.raquo.airstream.core.Transaction`,{bd:1});function Ha(){this.bT=0,this.dm=null,Wa=this,this.bT=1e3,this.dm=new X((e=>{throw If(new Lf,`Attempted to run Transaction `+e+` after it was already executed.`)}))}E=Ha.prototype=new D,E.constructor=Ha;function Ua(){}Ua.prototype=E,E.fi=(function(e){try{e.cm.j(e);var t=e.dl;if(t!==void 0)for(;t.iJ();)t.iz().iM(e)}catch(e){var n=e instanceof cd?e:new Eg(e);Kd().aD(n)}}),new O().i(Ha,`com.raquo.airstream.core.Transaction$`,{be:1});var Wa;function Ga(){return Wa||=new Ha,Wa}function Ka(e){e.bU.length|0?new za(new X((t=>{for(;(e.bU.length|0)>0;){var n=e.bU.shift();try{n.j(t)}catch(e){var r=e instanceof cd?e:new Eg(e);Kd().aD(r)}}for(;(e.aG.length|0)>0;){var i=e.aG.shift();ao().d2(i)}}))):(e.aG.length|0)>0&&new za(new X((t=>{for(;(e.aG.length|0)>0;)ao().d2(e.aG.shift())})))}function qa(){this.a1=!1,this.bU=null,this.aG=null,Ya=this,this.a1=!1,this.bU=jo().ag(R().a(new(L.r()).C([]))),this.aG=jo().ag(R().a(new(Va.r()).C([])))}E=qa.prototype=new D,E.constructor=qa;function Ja(){}Ja.prototype=E,new O().i(qa,`com.raquo.airstream.core.Transaction$onStart$`,{bf:1});var Ya;function Xa(){return Ya||=new qa,Ya}function Za(e,t){return e.aH.get(t)}function Qa(e,t){e.bV.unshift(t)}function $a(e){return e.bV.shift()}function eo(e,t,n){var r=Za(e,t),i=r===void 0,a=r===void 0?jo().ag(R().a(new(Va.r()).C([]))):r;a.push(n),i&&e.aH.set(t,a)}function to(e,t){var n=Za(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aH.delete(t),i}}function no(){this.bV=null,this.aH=null,io=this,this.bV=jo().ag(R().a(new(Va.r()).C([]))),this.aH=new Map}E=no.prototype=new D,E.constructor=no;function ro(){}ro.prototype=E,E.d2=(function(e){var t=this.bQ();t===void 0?(Qa(this,e),Ga().fi(e),this.gI(e)):eo(this,t,e)}),E.gI=(function(e){for(var t=e;;){var n=this.bQ(),r=t;if(!(n!==void 0&&Pl().R(r,n)))throw If(new Lf,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.hK(t),t.cm=Ga().dm;var i=this.bQ();if(Pl().R(i,void 0))if((this.aH.size|0)>0){var a=new Ld(0);throw this.aH.forEach((e=>((t,n)=>{e.bu=e.bu+(t.length|0)|0}))(a)),If(new Lf,`Transaction queue error: Stack cleared, but a total of `+a.bu+` children for `+(this.aH.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Ga().fi(i),t=i}}),E.hK=(function(e){for(var t=e;;){var n=to(this,t);if(Pl().R(n,void 0)){$a(this);var r=this.bQ();if(!Pl().R(r,void 0))t=r;else return}else{Qa(this,n);return}}}),E.bQ=(function(){return this.bV[0]}),new O().i(no,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bg:1});var io;function ao(){return io||=new no,io}function oo(e,t){var n=e.ai.indexOf(t)|0;if(n!==-1)e.ai.splice(n,1),e.M.k()||t.fE();else throw If(new Lf,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function so(e){for(;(e.bW.length|0)>0;)oo(e,e.bW.shift())}function co(e){this.dn=null,this.ai=null,this.b2=!1,this.bW=null,this.M=null,this.b3=0,this.dn=e,this.ai=jo().ag(R().a(new(po.r()).C([]))),this.b2=!0,this.bW=jo().ag(R().a(new(po.r()).C([]))),this.M=Q(),this.b3=0}E=co.prototype=new D,E.constructor=co;function lo(){}lo.prototype=E,E.f2=(function(){if(this.M.k()){var e=Xa(),t=(()=>{var e=new nu(this.dn);this.M=new $(e),this.b2=!1,this.b3=0;for(var t=0,n=this.ai.length|0;t<n;){var r=t+this.b3|0;this.ai[r].fD(e),t=1+t|0}so(this),this.b2=!0,this.b3=0});if(Xa(),e.a1)t();else{e.a1=!0;try{t()}finally{e.a1=!1,Ka(e)}}}else throw If(new Lf,`Can not activate `+this+`: it is already active`)}),E.gA=(function(){if(this.M.k())throw If(new Lf,`Can not deactivate DynamicOwner: it is not active`);this.b2=!1;for(var e=this.ai,t=0,n=e.length|0;t<n;)e[t].fE(),t=1+t|0;so(this);var r=this.M;r.k()||r.E().hm(),so(this),this.b2=!0,this.M=Q()}),E.gg=(function(e,t){t?(this.b3=1+this.b3|0,this.ai.unshift(e)):this.ai.push(e);var n=this.M;if(!n.k()){var r=n.E();e.fD(r)}}),E.hR=(function(e){this.b2?oo(this,e):this.bW.push(e)}),new O().i(co,`com.raquo.airstream.ownership.DynamicOwner`,{bh:1});function uo(e,t,n){this.bX=null,this.dp=null,this.bY=null,this.bX=e,this.dp=t,this.bY=Q(),e.gg(this,n)}E=uo.prototype=new D,E.constructor=uo;function fo(){}fo.prototype=E,E.ch=(function(){this.bX.hR(this)}),E.fD=(function(e){var t=Xa(),n=(()=>{this.bY=this.dp.j(e)});if(Xa(),t.a1)n();else{t.a1=!0;try{n()}finally{t.a1=!1,Ka(t)}}}),E.fE=(function(){var e=this.bY;e.k()||(e.E().ch(),this.bY=Q())});var po=new O().i(uo,`com.raquo.airstream.ownership.DynamicSubscription`,{bi:1});function mo(){}E=mo.prototype=new D,E.constructor=mo;function ho(){}ho.prototype=E,E.de=(function(e,t,n){return new uo(e,new X((e=>new $(t.j(e)))),n)}),E.fP=(function(e,t,n){return new uo(e,new X((e=>(t.j(e),Q()))),n)}),new O().i(mo,`com.raquo.airstream.ownership.DynamicSubscription$`,{bj:1});var go;function _o(){return go||=new mo,go}function vo(e){e.b4=jo().ag(R().a(new(To.r()).C([])))}function yo(e){for(var t=e.b4,n=0,r=t.length|0;n<r;)So(t[n]),n=1+n|0;e.b4.length=0}function bo(e,t){var n=e.b4.indexOf(t)|0;if(n!==-1)e.b4.splice(n,1);else throw If(new Lf,`Can not remove Subscription from Owner: subscription not found.`)}function xo(e,t){e.b4.push(t)}function So(e){if(!e.cp)e.dr.aY(),e.cp=!0;else throw If(new Lf,`Can not kill Subscription: it was already killed.`)}function Co(e,t){this.ds=null,this.dr=null,this.cp=!1,this.ds=e,this.dr=t,this.cp=!1,e.hH(this)}E=Co.prototype=new D,E.constructor=Co;function wo(){}wo.prototype=E,E.ch=(function(){So(this),bo(this.ds,this)});var To=new O().i(Co,`com.raquo.airstream.ownership.Subscription`,{bm:1});function Eo(e,t){this.dt=null,this.du=null,this.aj=null,this.aI=!1,this.dt=e,this.du=t,this.aj=Q(),this.aI=!1}E=Eo.prototype=new D,E.constructor=Eo;function Do(){}Do.prototype=E,E.hk=(function(){var e=this.aj;return!e.k()&&!e.E().bX.M.k()}),E.hW=(function(e){if(this.aI)throw If(new Lf,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.aj;if(t.k())var n=!1;else var n=e===t.E().bX;if(!n){this.hk()&&!e.M.k()&&(this.aI=!0);var r=this.aj;r.k()||(r.E().ch(),this.aj=Q()),this.aj=new $(_o().de(e,new X((e=>(this.aI||this.dt.aY(),new Co(e,new Zp((()=>{this.aI||this.du.aY()})))))),!1)),this.aI=!1}}),E.gt=(function(){if(this.aI)throw If(new Lf,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.aj;e.k()||e.E().ch(),this.aj=Q()}),new O().i(Eo,`com.raquo.airstream.ownership.TransferableSubscription`,{bn:1});function Oo(){}E=Oo.prototype=new D,E.constructor=Oo;function ko(){}ko.prototype=E,E.ag=(function(e){return[...Yl().i8(e)]}),new O().i(Oo,`com.raquo.ew.JsArray$`,{bo:1});var Ao;function jo(){return Ao||=new Oo,Ao}function Mo(){}E=Mo.prototype=new D,E.constructor=Mo;function No(){}No.prototype=E,E.h4=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new O().i(Mo,`com.raquo.ew.JsArray$RichJsArray$`,{bp:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(){this.dv=null,Ro=this,document.createElement(`template`),this.gx(Y().c.i2().i3()),this.dv=RegExp(` `,`g`)}E=Io.prototype=new D,E.constructor=Io;function Lo(){}Lo.prototype=E,E.gj=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof cd?e:new Eg(e);if(n instanceof Eg&&n.a3 instanceof DOMException)return!1;throw n instanceof Eg?n.a3:n}}),E.hl=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(Pl().R(t,r))return!0;n=r}}),E.ge=(function(e,t){e.addEventListener(t.b6.bl.c2,t.cz,t.cA)}),E.hP=(function(e,t){e.removeEventListener(t.b6.bl.c2,t.cz,t.cA)}),E.gw=(function(e){return document.createElement(e.da())}),E.ha=(function(e,t){var n=this.hb(e,t);return n===void 0?void 0:t.b5.bI(n)}),E.hb=(function(e,t){var n=e.a8.getAttributeNS(null,t.ak);return n===null?void 0:n}),E.fN=(function(e,t,n){this.hV(e,t,t.b5.bK(n))}),E.hV=(function(e,t,n){n===null?this.hQ(e,t):e.a8.setAttribute(t.ak,n)}),E.hQ=(function(e,t){e.a8.removeAttribute(t.ak)}),E.gx=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dU)}),E.he=(function(e,t){var n=this.hf(e,t);return n===void 0?void 0:t.cx.bI(n)}),E.hf=(function(e,t){var n=e.dc(),r=t.c4,i=n.getAttributeNS(r.k()?null:r.E(),t.cy);return i===null?void 0:i}),E.hX=(function(e,t,n){this.hY(e,t,t.cx.bK(n))}),E.hY=(function(e,t,n){if(n===null)this.hS(e,t);else{var r=t.c4;if(r.k())e.dc().setAttribute(t.c3,n);else{var i=r.E();e.dc().setAttributeNS(i,t.c3,n)}}}),E.hS=(function(e,t){var n=e.dc(),r=t.c4;n.removeAttributeNS(r.k()?null:r.E(),t.cy)}),E.gy=(function(e){return document.createTextNode(e)}),E.gC=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new rv(this.gB(r),n);r=i,n=a}}),E.gB=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dv,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new O().i(Io,`com.raquo.laminar.DomApi$`,{bq:1});var Ro;function zo(){return Ro||=new Io,Ro}function Bo(e,t,n){this.cr=null,this.dw=null,this.cq=null,this.cr=e,this.dw=t,this.cq=n}E=Bo.prototype=new D,E.constructor=Bo;function Vo(){}Vo.prototype=E,E.aA=(function(e){this.cr===null?this.cq===null?Tl().h5(this.dw,e):Fo().h4(this.cq,up().h8(e)):this.cr.aA(e)}),new O().i(Bo,`com.raquo.laminar.Seq`,{br:1});function Ho(){}E=Ho.prototype=new D,E.constructor=Ho;function Uo(){}Uo.prototype=E,new O().i(Ho,`com.raquo.laminar.Seq$`,{bs:1});var Wo;function Go(){return Wo||=new Ho,Wo}function Ko(e){e.cs=Ra(),Kd()}function qo(e){e.fV=Es()}function Jo(e){Yo(e,new X((e=>{e.dI.a8.focus()})))}function Yo(e,t){return new xu(new X((e=>{var n=new Fd(!e.ae.M.k()),r=new X((e=>{n.cc?n.cc=!1:t.j(e)}));_o().fP(e.ae,new X((e=>(t=>{r.j(new xs(e,t))}))(e)),!1)})),Es())}function Xo(){this.aJ=null,this.dF=null,this.dG=!1,this.bZ=null,Qo=this,this.aJ=new ou($o()),new ou($o()),new ou($o()),this.bZ=new iu}E=Xo.prototype=new D,E.constructor=Xo;function Zo(){}Zo.prototype=E,E.f1=(function(){return this.dG||=(this.dF=new cu(this),!0),this.dF}),new O().i(Xo,`com.raquo.laminar.codecs.package$`,{bA:1});var Qo;function $o(){return Qo||=new Xo,Qo}function es(e){e.fW=ts(e,`class`,` `)}function ts(e,t,n){var r=mu(new hu,t,$o().aJ);return new uu(r.ak,new X((e=>{var t=zo().ha(e,r);return t===void 0?``:t})),new em(((e,t)=>{zo().fN(e,r,t)})),n)}function ns(e){e.fU=rs(e,`class`,` `)}function rs(e,t,n){var r=new _u(t,$o().aJ,Q());return new uu(r.c3,new X((e=>{var t=zo().he(e,r);return t===void 0?``:t})),new em(((e,t)=>{zo().hX(e,r,t)})),n)}function is(e){this.c0=null,this.c0=e}E=is.prototype=new D,E.constructor=is;function as(){}as.prototype=E,E.fH=(function(e,t){try{this.c0.d4(e,t)}catch(e){var n=e instanceof cd?e:new Eg(e);Kd().aD(n)}}),E.gu=(function(e){return new is(new em(((t,n)=>{this.c0.d4(t,n),e.c0.d4(t,n)})))}),E.gk=(function(e){return e===void 0?this:e.gu(this)}),new O().i(is,`com.raquo.laminar.inserters.InserterHooks`,{bP:1});function os(){}E=os.prototype=new D,E.constructor=os;function ss(){}ss.prototype=E,E.s=(function(e,t){return new im(e,void 0)}),new O().i(os,`com.raquo.laminar.inserters.StaticChildInserter$`,{bR:1});var cs;function k(){return cs||=new os,cs}function ls(e,t,n,r){this.bl=null,this.cw=!1,this.cv=!1,this.cu=null,this.bl=e,this.cw=t,this.cv=n,this.cu=r}E=ls.prototype=new D,E.constructor=ls;function us(){}us.prototype=E,E.fB=(function(e){var t=new X((t=>{var n=this.cu.j(t);return n.k()?Q():new $(e.j(n.E()))}));return new ls(this.bl,this.cw,this.cv,t)}),new O().i(ls,`com.raquo.laminar.keys.EventProcessor`,{bU:1});function ds(){}E=ds.prototype=new D,E.constructor=ds;function fs(){}fs.prototype=E,E.fk=(function(e,t,n){return new ls(e,t,n,new X((e=>new $(e))))}),new O().i(ds,`com.raquo.laminar.keys.EventProcessor$`,{bV:1});var ps;function ms(){return ps||=new ds,ps}function hs(){}E=hs.prototype=new D,E.constructor=hs;function gs(){}gs.prototype=E;function _s(){this.fX=null,this.fY=null,this.fZ=null,this.g0=null,this.fX=`http://www.w3.org/2000/svg`,this.fY=`http://www.w3.org/1999/xlink`,this.fZ=`http://www.w3.org/XML/1998/namespace`,this.g0=`http://www.w3.org/2000/xmlns/`}E=_s.prototype=new D,E.constructor=_s;function vs(){}vs.prototype=E,E.hs=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Fm(e)}}),new O().i(_s,`com.raquo.laminar.keys.SvgAttr$`,{bY:1});var ys;function bs(){return ys||=new _s,ys}function xs(e,t){this.dI=null,this.dH=null,this.dI=e,this.dH=t}E=xs.prototype=new D,E.constructor=xs;function Ss(){}Ss.prototype=E,new O().i(xs,`com.raquo.laminar.lifecycle.MountContext`,{bZ:1});var A=new O().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Cs(){this.g1=null,Ts=this,this.g1=new yu}E=Cs.prototype=new D,E.constructor=Cs;function ws(){}ws.prototype=E,new O().i(Cs,`com.raquo.laminar.modifiers.Modifier$`,{c3:1});var Ts;function Es(){return Ts||=new Cs,Ts}function Ds(){this.p=null,ks=this,this.p=new Cu}E=Ds.prototype=new D,E.constructor=Ds;function Os(){}Os.prototype=E,new O().i(Ds,`com.raquo.laminar.modifiers.RenderableNode$`,{c7:1});var ks;function j(){return ks||=new Ds,ks}function As(){this.f=null,Ms=this,this.f=new Ou(new X((e=>e)),M()),new Ou(new X((e=>``+(e|0))),M()),new Ou(new X((e=>``+ +e)),M()),new Ou(new X((e=>``+!!e)),M()),new Ou(new X((e=>e.i7())),M())}E=As.prototype=new D,E.constructor=As;function js(){}js.prototype=E,new O().i(As,`com.raquo.laminar.modifiers.RenderableText$`,{cc:1});var Ms;function M(){return Ms||=new As,Ms}function Ns(){}E=Ns.prototype=new D,E.constructor=Ns;function Ps(){}Ps.prototype=E,E.cd=(function(e,t,n){var r=new $(e);t.fS(r),n!==void 0&&n.fH(e,t);var i=zo().gj(e.aZ(),t.aZ());return i&&t.fO(r),i}),new O().i(Ns,`com.raquo.laminar.nodes.ParentNode$`,{cf:1});var Fs;function Is(){return Fs||=new Ns,Fs}function Ls(){}E=Ls.prototype=new D,E.constructor=Ls;function Rs(){}Rs.prototype=E,E.ia=(function(e,t){return _o().de(e.ae,new X((n=>t.j(new xs(e,n)))),!0)}),new O().i(Ls,`com.raquo.laminar.nodes.ReactiveElement$`,{ch:1});var zs;function Bs(){return zs||=new Ls,zs}function Vs(e){this.dR=null,this.dR=new is(new em(((t,n)=>{matchResult1:{var r=n.aZ();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Kd(),a=r.textContent,o=t.aZ().tagName;i.aD(If(new Lf,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}E=Vs.prototype=new D,E.constructor=Vs;function Hs(){}Hs.prototype=E,E.r=(function(e){return e.fC(new X((e=>e.ib(this.dR))))}),new O().i(Vs,`com.raquo.laminar.nodes.Slot`,{ck:1});function Us(){Gs=this,jo().ag(R().ic(new Ta(new Int32Array([0]))))}E=Us.prototype=new D,E.constructor=Us;function Ws(){}Ws.prototype=E,E.gc=(function(){return new X((e=>void 0))}),new O().i(Us,`com.raquo.laminar.tags.CustomHtmlTag$`,{cn:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){}E=qs.prototype=new D,E.constructor=qs;function Js(){}Js.prototype=E,E.gh=(function(){Xs().gP(),Xs().gU(),Xs().gV(),Xs().gW(),Xs().gX(),Xs().gY(),Xs().gZ(),Xs().h0(),Xs().h1(),Xs().gQ(),Xs().gR(),Xs().gS(),Xs().gT()}),E.gP=(function(){var e=document.querySelector(`#example1`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`View`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`scissors`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Cut`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`copy`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Copy`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`paste`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Paste`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`show-all-images`)))])),R().a(new(A.r()).C([U(Y().c,`Show All Images`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`show-thumbnails`)))])),R().a(new(A.r()).C([U(Y().c,`Show Thumbnails`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Show images`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.bH().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Emoji Shortcuts`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.bH().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Word Wrap`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>e.fR().gz())),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`trash`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Delete`,M().f)])))])))))}),E.gU=(function(){var e=document.querySelector(`#example2`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Resources`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.fy().g(`https://webawesome.com/docs`)))])),R().a(new(A.r()).C([U(Y().c,`Web Awesome docs`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.fy().g(`https://webawesome.com/`))),new J((e=>e.i6().gr())),new J((e=>e.hN().g(`noopener noreferrer`)))])),R().a(new(A.r()).C([U(Y().c,`Open Web Awesome in a new tab`,M().f)])))])))))}),E.gV=(function(){var e=document.querySelector(`#example3`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>new qd((Y(),ms().fk(e.fG(),!1,!1)).fB(new J((e=>{var t=e.detail.item.value;return t===void 0?Q():new $(t)}))),new X((e=>(t=>{e.fF(t)}))(Y().c.cs.fT(new J((e=>{yd().bP().bN(e+`
`)})),xl().cO,!0)))))),new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`View`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`full-screen`)))])),R().a(new(A.r()).C([U(Y().c,`Enter full screen`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`actual`)))])),R().a(new(A.r()).C([U(Y().c,`Actual size`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`zoom-in`)))])),R().a(new(A.r()).C([U(Y().c,`Zoom in`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`zoom-out`)))])),R().a(new(A.r()).C([U(Y().c,`Zoom out`,M().f)])))])))))}),E.gW=(function(){var e=document.querySelector(`#example4`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Edit`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`cut`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`scissors`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Cut`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`copy`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`copy`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Copy`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`paste`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`paste`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Paste`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`delete`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`trash`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Delete`,M().f)])))])))))}),E.gX=(function(){var e=document.querySelector(`#example5`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Device`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([Y().c.fx().ay(R().a(new(A.r()).C([U(Y().c,`Type`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`phone`)))])),R().a(new(A.r()).C([U(Y().c,`Phone`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`tablet`)))])),R().a(new(A.r()).C([U(Y().c,`Tablet`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`desktop`)))])),R().a(new(A.r()).C([U(Y().c,`Desktop`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`more`)))])),R().a(new(A.r()).C([U(Y().c,`More options...`,M().f)])))])))))}),E.gY=(function(){var e=document.querySelector(`#example6`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Message`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`reply`))),new J((e=>W(Y().c,N().bJ().r(R().a(new(Z.r()).C([(Y(),k().s(Y().c.bS().ay(R().a(new(A.r()).C([U(Y().c,`⌘R`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Reply`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`forward`))),new J((e=>W(Y().c,N().bJ().r(R().a(new(Z.r()).C([(Y(),k().s(Y().c.bS().ay(R().a(new(A.r()).C([U(Y().c,`⌘F`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Forward`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`move`))),new J((e=>W(Y().c,N().bJ().r(R().a(new(Z.r()).C([(Y(),k().s(Y().c.bS().ay(R().a(new(A.r()).C([U(Y().c,`⌘M`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Move`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`archive`))),new J((e=>W(Y().c,N().bJ().r(R().a(new(Z.r()).C([(Y(),k().s(Y().c.bS().ay(R().a(new(A.r()).C([U(Y().c,`⌘A`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Archive`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`delete`))),new J((e=>W(Y().c,N().bJ().r(R().a(new(Z.r()).C([(Y(),k().s(Y().c.bS().ay(R().a(new(A.r()).C([U(Y().c,`Del`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Delete`,M().f)])))])))))}),E.gZ=(function(){var e=document.querySelector(`#example7`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>new qd((Y(),ms().fk(e.fG(),!1,!1)).fB(new J((e=>{matchResult1:{var t=e.detail.item.type,n=t===void 0?Q():new $(t);if(n instanceof $&&n.bb===`checkbox`){var r=e.detail.item.value,i=r===void 0?Q():new $(r);yd().bP().bN(i+`
`);var a=e.detail.item.checked,o=a===void 0?Q():new $(a);yd().bP().bN(o+`
`);break matchResult1}var s=e.detail.item.value,c=s===void 0?Q():new $(s);yd().bP().bN(c+`
`)}}))),new X((e=>(t=>{e.fF(t)}))(Y().c.cs.dh))))),new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`View`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.o().g(`canvas`))),new J((e=>e.bH().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Show canvas`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.o().g(`grid`))),new J((e=>e.bH().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Show grid`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.o().g(`source`)))])),R().a(new(A.r()).C([U(Y().c,`Show source`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`preferences`)))])),R().a(new(A.r()).C([U(Y().c,`Preferences…`,M().f)])))])))))}),E.h0=(function(){var e=document.querySelector(`#example8`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Project`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`share`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`share`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Share`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`preferences`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`gear`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Preferences`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),Y().c.fx().ay(R().a(new(A.r()).C([U(Y().c,`Danger zone`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`archive`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`archive`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Archive`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`delete`))),new J((e=>e.fR().g(`danger`))),new J((e=>W(Y().c,N().a0().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`trash`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Delete`,M().f)])))])))))}),E.h1=(function(){var e=document.querySelector(`#example9`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0))),new J((e=>W(Y().c,tc().gL().r(R().a(new(Z.r()).C([(Y(),k().s(Mf().d(R().a(new(L.r()).C([new J((e=>e.S().g(`chevron-right`)))])),R().a(new(A.r()).C([]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`File formats`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`pdf`)))])),R().a(new(A.r()).C([U(Y().c,`PDF Document`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`docx`)))])),R().a(new(A.r()).C([U(Y().c,`Word Document`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`xlsx`)))])),R().a(new(A.r()).C([U(Y().c,`Excel Spreadsheet`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`pptx`)))])),R().a(new(A.r()).C([U(Y().c,`PowerPoint Presentation`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`txt`)))])),R().a(new(A.r()).C([U(Y().c,`Plain Text`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`json`)))])),R().a(new(A.r()).C([U(Y().c,`JSON File`,M().f)])))])))))}),E.gQ=(function(){var e=document.querySelector(`#example10`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>e.gG().g(30))),new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Edit`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Cut`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Copy`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Paste`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Find`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Replace`,M().f)])))])))))}),E.gR=(function(){var e=document.querySelector(`#example11`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>e.i1().g(30))),new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Edit`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Cut`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Copy`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Paste`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Find`,M().f)]))),K().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([U(Y().c,`Replace`,M().f)])))])))))}),E.gS=(function(){var e=document.querySelector(`#example12`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Export`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`pdf`)))])),R().a(new(A.r()).C([U(Y().c,`PDF`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`docx`)))])),R().a(new(A.r()).C([U(Y().c,`Word Document`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Documents`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`xlsx`)))])),R().a(new(A.r()).C([U(Y().c,`Excel (.xlsx)`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`xls`)))])),R().a(new(A.r()).C([U(Y().c,`Excel 97-2003 (.xls)`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`csv`)))])),R().a(new(A.r()).C([U(Y().c,`CSV (.csv)`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Excel Formats`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`ods`)))])),R().a(new(A.r()).C([U(Y().c,`OpenDocument (.ods)`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`tsv`)))])),R().a(new(A.r()).C([U(Y().c,`Tab-separated (.tsv)`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`json`)))])),R().a(new(A.r()).C([U(Y().c,`JSON (.json)`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Other Formats`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`numbers`)))])),R().a(new(A.r()).C([U(Y().c,`Apple Numbers`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Spreadsheets`,M().f)]))),xf().d(R().a(new(L.r()).C([])),R().a(new(A.r()).C([]))),K().d(R().a(new(L.r()).C([new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.o().g(`compress`)))])),R().a(new(A.r()).C([U(Y().c,`Compress files`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.bH().g(!0))),new J((e=>e.o().g(`metadata`)))])),R().a(new(A.r()).C([U(Y().c,`Include metadata`,M().f)]))),j().p))]))),V().q,B()))),new J((e=>W(Y().c,N().H().r(R().a(new(Z.r()).C([(Y(),k().s(K().d(R().a(new(L.r()).C([new J((e=>e.aE().az())),new J((e=>e.o().g(`password`)))])),R().a(new(A.r()).C([U(Y().c,`Password protect`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([U(Y().c,`Options`,M().f)])))])))))}),E.gT=(function(){var e=document.querySelector(`#example13`);Td().Q(e).k()||(Y(),new G(e,Tf().d(R().a(new(L.r()).C([new J((e=>W(Y().c,ac().U().r(R().a(new(Z.r()).C([(Y(),k().s(af().d(R().a(new(L.r()).C([new J((e=>e.V().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Payment method`,M().f)]))),j().p))]))),V().q,B())))])),R().a(new(A.r()).C([K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`cash`)))])),R().a(new(A.r()).C([U(Y().c,`Cash`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`check`))),new J((e=>e.gF().g(!0)))])),R().a(new(A.r()).C([U(Y().c,`Personal check`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`credit`)))])),R().a(new(A.r()).C([U(Y().c,`Credit card`,M().f)]))),K().d(R().a(new(L.r()).C([new J((e=>e.o().g(`gift-card`)))])),R().a(new(A.r()).C([U(Y().c,`Gift card`,M().f)])))])))))}),new O().i(qs,`examples.dropdown.Main$package$`,{cp:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(e){try{Xs().gh()}catch(e){throw e}}function Qs(){this.dX=null,this.dY=!1}E=Qs.prototype=new D,E.constructor=Qs;function $s(){}$s.prototype=E,E.gL=(function(){return this.dY||=(this.dX=new Vs(`end`),!0),this.dX}),new O().i(Qs,`io.github.nguyenyou.webawesome.laminar.Button$slots$`,{cr:1});var ec;function tc(){return ec||=new Qs,ec}function nc(){this.eb=null,this.ec=!1}E=nc.prototype=new D,E.constructor=nc;function rc(){}rc.prototype=E,E.U=(function(){return this.ec||=(this.eb=new Vs(`trigger`),!0),this.eb}),new O().i(nc,`io.github.nguyenyou.webawesome.laminar.Dropdown$slots$`,{cx:1});var ic;function ac(){return ic||=new nc,ic}function oc(){this.ev=null,this.ew=!1,this.et=null,this.eu=!1,this.ex=null,this.ey=!1}E=oc.prototype=new D,E.constructor=oc;function sc(){}sc.prototype=E,E.a0=(function(){return this.ew||=(this.ev=new Vs(`icon`),!0),this.ev}),E.bJ=(function(){return this.eu||=(this.et=new Vs(`details`),!0),this.et}),E.H=(function(){return this.ey||=(this.ex=new Vs(`submenu`),!0),this.ex}),new O().i(oc,`io.github.nguyenyou.webawesome.laminar.DropdownItem$slots$`,{cz:1});var cc;function N(){return cc||=new oc,cc}function lc(){this.g3=!1,this.bm=null,this.c6=null,this.eB=null,this.cI=!1,this.g2=0,this.g5=0,this.g4=null,dc=this,this.g3=!0,this.bm=new ArrayBuffer(8),this.c6=new Int32Array(this.bm,0,2),new Float32Array(this.bm,0,2),this.eB=new Float64Array(this.bm,0,1),this.c6[0]=16909060,this.cI=(new Int8Array(this.bm,0,8)[0]|0)==1,this.g2=this.cI?0:1,this.g5=this.cI?1:0,this.g4=null}E=lc.prototype=new D,E.constructor=lc;function uc(){}uc.prototype=E,E.db=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.eB[0]=e,(this.c6[0]|0)^(this.c6[1]|0))}),new O().i(lc,`java.lang.FloatingPointBits$`,{cK:1});var dc;function fc(){return dc||=new lc,dc}function pc(e,t){for(var n=P().a7(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=mc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new ed(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new ed(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(nd.r()).C(m);for(i=0;i<m;)h.b[i]=r[i],i=1+i|0;return h}function mc(e,t){var n=P().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=P().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=P().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=P().a7(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=P().a7(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[hc(e,c[1]),Sc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[hc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[hc(e,d[1]),`<clinit>`]}function hc(e,t){var n=_c(e);if(Jc().eH.call(n,t))var r=_c(e)[t];else var r=Nc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function gc(e){if(!((1&e.W)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cK=t,e.W=(1|e.W)<<24>>24}return e.cK}function _c(e){return(1&e.W)<<24>>24?e.cK:gc(e)}function vc(e){if(!((2&e.W)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cL=t,e.W=(2|e.W)<<24>>24}return e.cL}function yc(e){return(2&e.W)<<24>>24?e.cL:vc(e)}function bc(e){return(4&e.W)<<24>>24||(e.cJ=Object.keys(yc(e)),e.W=(4|e.W)<<24>>24),e.cJ}function xc(e){return(4&e.W)<<24>>24?e.cJ:bc(e)}function Sc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Cc(e,t){return t?t.arguments&&t.stack?wc(e,t):t.stack&&t.sourceURL?Dc(e,t):t.stack&&t.number?Ec(e,t):t.stack&&t.fileName?Tc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Oc(e,t):kc(e,t):Oc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ac(e,t):jc(e,t):t.stack&&!t.fileName?wc(e,t):Mc(e,t):[]}function wc(e,t){return(t.stack+`
`).replace(P().a7(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(P().K(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(P().K(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(P().K(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(P().K(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Tc(e,t){return t.stack.replace(P().K(`(?:\\n@:0)?\\s+$`,`m`),``).replace(P().K(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Ec(e,t){return t.stack.replace(P().K(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(P().K(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(P().K(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Dc(e,t){return t.stack.replace(P().K(`\\[native code\\]\\n`,`m`),``).replace(P().K(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(P().K(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Oc(e,t){for(var n=P().K(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function kc(e,t){for(var n=P().K(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ac(e,t){for(var n=P().a7(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function jc(e,t){for(var n=P().a7(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(P().a7(`<anonymous function: (\\S+)>`),`$1`).replace(P().a7(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Mc(e,t){return[]}function Nc(e,t,n){for(;;)if(t<(xc(e).length|0)){var r=xc(e)[t];if(n.startsWith(r))return``+yc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Pc(){this.cK=null,this.cL=null,this.cJ=null,this.W=0}E=Pc.prototype=new D,E.constructor=Pc;function Fc(){}Fc.prototype=E,E.h2=(function(e){return pc(this,Cc(this,e))}),new O().i(Pc,`java.lang.StackTrace$`,{cR:1});var Ic;function Lc(){return Ic||=new Pc,Ic}function Rc(){}E=Rc.prototype=new D,E.constructor=Rc;function zc(){}zc.prototype=E,E.a7=(function(e){return new RegExp(e)}),E.K=(function(e,t){return new RegExp(e,t)}),new O().i(Rc,`java.lang.StackTrace$StringRE$`,{cS:1});var Bc;function P(){return Bc||=new Rc,Bc}function Vc(){this.eD=null,this.g6=null,Uc=this,this.eD=new Og(!1),this.g6=new Og(!0)}E=Vc.prototype=new D,E.constructor=Vc;function Hc(){}Hc.prototype=E,new O().i(Vc,`java.lang.System$Streams$`,{cX:1});var Uc;function Wc(){return Uc||=new Vc,Uc}function Gc(){this.eH=null,qc=this,this.eH=Object.prototype.hasOwnProperty}E=Gc.prototype=new D,E.constructor=Gc;function Kc(){}Kc.prototype=E,new O().i(Gc,`java.lang.Utils$Cache$`,{cZ:1});var qc;function Jc(){return qc||=new Gc,qc}function Yc(e,t){return e===t}function Xc(e){return 0}function Zc(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.as)}var Qc=new O().i(0,`java.lang.Void`,{as:1},(e=>e===void 0));function $c(e,t){throw ym(new bm,`argument type mismatch`)}function el(){}E=el.prototype=new D,E.constructor=el;function tl(){}tl.prototype=E,E.bf=(function(e){return e instanceof ya||e instanceof xa||e instanceof Sa||e instanceof Ca||e instanceof wa||e instanceof Ta||e instanceof Ea||e instanceof Da||e instanceof Oa?e.b.length:$c(this,e)}),new O().i(el,`java.lang.reflect.Array$`,{d0:1});var nl;function rl(){return nl||=new el,nl}function il(){}E=il.prototype=new D,E.constructor=il;function al(){}al.prototype=E,E.fq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=a.h,s=a.i,c=r,l=t.b[c],u=l.h,d=l.i;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),E.fp=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),E.fr=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),E.fm=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),E.fl=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),E.fs=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(a!==t.b[o])return!1;r=1+r|0}return!0}),E.fn=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(!Object.is(a,t.b[o]))return!1;r=1+r|0}return!0}),E.fo=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.b.length;if(t.b.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.b[i],o=r;if(!Object.is(a,t.b[o]))return!1;r=1+r|0}return!0}),new O().i(il,`java.util.Arrays$`,{d1:1});var ol;function F(){return ol||=new il,ol}function I(e,t){this.h=0,this.i=0,this.h=e,this.i=t}E=I.prototype=new D,E.constructor=I;function sl(){}sl.prototype=E,E.m=(function(e){return e instanceof I&&this.h===e.h&&this.i===e.i}),E.x=(function(){return this.h^this.i}),E.B=(function(){return hl().fL(this.h,this.i)}),E.iP=(function(){return this.h}),E.iO=(function(){return hl().fK(this.h,this.i)}),E.iN=(function(){return hl().bO(this.h,this.i)}),E.iw=(function(){return this.h<<24>>24}),E.iL=(function(){return this.h<<16>>16}),E.iG=(function(){return this.h}),E.iH=(function(){return this}),E.iC=(function(){return hl().fK(this.h,this.i)}),E.iA=(function(){return hl().bO(this.h,this.i)}),E.iy=(function(e){return hl().fI(this.h,this.i,e.h,e.i)}),E.ix=(function(e){return hl().fI(this.h,this.i,e.h,e.i)}),E.iB=(function(e){return this.h===e.h&&this.i===e.i}),E.iK=(function(e){return!(this.h===e.h&&this.i===e.i)}),E.io=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<(-2147483648^e.h):t<n}),E.ip=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<=(-2147483648^e.h):t<n}),E.ij=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>(-2147483648^e.h):t>n}),E.ik=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>=(-2147483648^e.h):t>n}),E.iR=(function(){return new I(~this.h,~this.i)}),E.ih=(function(e){return new I(this.h|e.h,this.i|e.i)}),E.ig=(function(e){return new I(this.h&e.h,this.i&e.i)}),E.iv=(function(e){return new I(this.h^e.h,this.i^e.i)}),E.iq=(function(e){var t=this.h;return new I(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.i<<e)}),E.im=(function(e){var t=this.i;return new I(32&e?t>>>e|0:this.h>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),E.il=(function(e){var t=this.i;return new I(32&e?t>>e:this.h>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),E.iQ=(function(){var e=this.h,t=this.i;return new I(-e|0,e===0?-t|0:~t)}),E.it=(function(e){var t=this.h,n=this.i,r=e.i,i=t+e.h|0;return new I(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),E.ir=(function(e){var t=this.h,n=this.i,r=e.i,i=t-e.h|0;return new I(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),E.iu=(function(e){var t=this.h,n=e.h,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new I(u,(((Math.imul(t,e.i)+Math.imul(this.i,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),E.ii=(function(e){var t=hl();return new I(t.gH(this.h,this.i,e.h,e.i),t.z)}),E.is=(function(e){var t=hl();return new I(t.hO(this.h,this.i,e.h,e.i),t.z)}),new O().i(I,`org.scalajs.linker.runtime.RuntimeLong`,{at:1});function cl(e,t,n){return-2097152&n?dl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function ll(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.z=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.z=0,n>>>o|0}else return dl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.z=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.z=s/4294967296|0,s|0}}function ul(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.z=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.z=n&(-1+i|0),t):dl(e,t,n,r,i,1)|0;if(-2097152&i)return e.z=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.z=a/4294967296|0,a|0}function dl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var ee=f,te=p,ne=u,re=d,ie=ee-ne|0,ae=(-2147483648^ie)>(-2147483648^ee)?-1+(te-re|0)|0:te-re|0;f=ie,p=ae,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var oe=u,se=d,ce=oe>>>1|0|se<<31,le=se>>>1|0;u=ce,d=le}var ue=f,de=p;if(de===i?(-2147483648^ue)>=(-2147483648^r):(-2147483648^de)>=(-2147483648^i)){var fe=f,pe=4294967296*p+ +(fe>>>0),me=4294967296*i+ +(r>>>0);if(a!==1){var he=pe/me,ge=he|0,_e=he/4294967296|0,ve=m,ye=h,be=ve+ge|0,xe=(-2147483648^be)<(-2147483648^ve)?1+(ye+_e|0)|0:ye+_e|0;m=be,h=xe}if(a!==0){var Se=pe%me;f=Se|0,p=Se/4294967296|0}}if(a===0)return e.z=h,m;if(a===1)return e.z=p,f;var Ce=m,we=4294967296*h+ +(Ce>>>0),Te=``+f,Ee=Te.length;return``+we+`000000000`.substring(Ee)+Te}function fl(){this.z=0}E=fl.prototype=new D,E.constructor=fl;function pl(){}pl.prototype=E,E.fL=(function(e,t){return t===e>>31?``+e:t<0?`-`+cl(this,-e|0,e===0?-t|0:~t):cl(this,e,t)}),E.bO=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),E.fK=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),E.iE=(function(e){return new I(e,e>>31)}),E.iD=(function(e){return new I(this.fJ(e),this.z)}),E.fJ=(function(e){if(e<-0x8000000000000000)return this.z=-2147483648,0;if(e>=0x8000000000000000)return this.z=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.z=e<0&&t!==0?-1+n|0:n,t}),E.fI=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),E.gH=(function(e,t,n,r){if((n|r)===0)throw new _m(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.z=0,-2147483648;var i=ra(e,n);return this.z=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.z=-1,-1;else return this.z=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=ll(this,a,o,s,c);if((t^r)>=0)return l;var u=this.z;return this.z=l===0?-u|0:~u,-l|0}}),E.hO=(function(e,t,n,r){if((n|r)===0)throw new _m(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ia(e,n);return this.z=i>>31,i}else return this.z=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.z=0,0;else return this.z=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=ul(this,a,o,s,c);if(t<0){var u=this.z;return this.z=l===0?-u|0:~u,-l|0}else return l}}),new O().i(fl,`org.scalajs.linker.runtime.RuntimeLong$`,{d3:1});var ml;function hl(){return ml||=new fl,ml}var L=new O().i(1,`scala.Function1`,{e:1});function gl(){}E=gl.prototype=new D,E.constructor=gl;function _l(){}_l.prototype=E;function vl(){this.eJ=null,this.cO=null,bl=this,this.eJ=new J((e=>xl().eJ)),this.cO=new Vp}E=vl.prototype=new D,E.constructor=vl;function yl(){}yl.prototype=E,new O().i(vl,`scala.PartialFunction$`,{dh:1});var bl;function xl(){return bl||=new vl,bl}function Sl(){this.eM=null,wl=this,this.eM=new J((e=>Tl().eM))}E=Sl.prototype=new D,E.constructor=Sl;function Cl(){}Cl.prototype=E,E.h5=(function(e,t){var n=rl().bf(e),r=0;if(e instanceof ya)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof Ta)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof Oa)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof Ea)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof Da)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof Sa)for(;r<n;)t.j(ha(e.b[r])),r=1+r|0;else if(e instanceof Ca)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof wa)for(;r<n;)t.j(e.b[r]),r=1+r|0;else if(e instanceof xa)for(;r<n;)t.j(e.b[r]),r=1+r|0;else throw new Fm(e)}),new O().i(Sl,`scala.collection.ArrayOps$`,{dn:1});var wl;function Tl(){return wl||=new Sl,wl}function El(e,t){for(var n=e.v();n.A();)t.j(n.n())}function Dl(e,t,n,r){return e.G()===0?``+t+r:e.bx(uv(new dv),t,n,r).P.y}function Ol(e,t,n,r,i){var a=t.P;n.length!==0&&(a.y=``+a.y+n);var o=e.v();if(o.A()){var s=o.n();for(a.y=``+a.y+s;o.A();){a.y=``+a.y+r;var c=o.n();a.y=``+a.y+c}}return i.length!==0&&(a.y=``+a.y+i),t}function kl(e,t){this.eQ=null,this.br=null,this.eQ=e,this.br=t}E=kl.prototype=new D,E.constructor=kl;function Al(){}Al.prototype=E,E.hh=(function(){return this.eQ.aY().v()}),new O().i(kl,`scala.collection.Iterator$ConcatIteratorCell`,{dG:1});function jl(){}E=jl.prototype=new D,E.constructor=jl;function Ml(){}Ml.prototype=E,E.R=(function(e,t){return e===t||($u(e)?this.gO(e,t):e instanceof Zi?this.gM(e,t):e===null?t===null:ea(e,t))}),E.gO=(function(e,t){if($u(t))return this.gN(e,t);if(t instanceof Zi){if(typeof e==`number`)return+e===t.c;if(e instanceof I){var n=_a(e),r=n.h,i=n.i,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ea(e,t)}else return e===null?t===null:ea(e,t)}),E.gN=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof I){var r=_a(t);return n===hl().bO(r.h,r.i)}else return!1}else if(e instanceof I){var i=_a(e),a=i.h,o=i.i;if(t instanceof I){var s=_a(t),c=s.h,l=s.i;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return hl().bO(a,o)===u}else return!1}else return e===null?t===null:ea(e,t)}),E.gM=(function(e,t){if(t instanceof Zi)return e.c===t.c;if($u(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof I){var n=_a(t),r=n.h,i=n.i,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ea(t,e)}else return e===null&&t===null}),new O().i(jl,`scala.runtime.BoxesRunTime$`,{eh:1});var Nl;function Pl(){return Nl||=new jl,Nl}var Fl=new O().i(0,`scala.runtime.Null$`,{ek:1});function Il(){}E=Il.prototype=new D,E.constructor=Il;function Ll(){}Ll.prototype=E,E.bd=(function(e,t){if(e instanceof ya||e instanceof Ta||e instanceof Oa||e instanceof Ea||e instanceof Da)return e.b[t];if(e instanceof Sa)return ha(e.b[t]);if(e instanceof Ca||e instanceof wa||e instanceof xa)return e.b[t];throw e===null?new Tm:new Fm(e)}),E.gn=(function(e,t,n){if(e instanceof ya)e.b[t]=n;else if(e instanceof Ta)e.b[t]=n|0;else if(e instanceof Oa)e.b[t]=+n;else if(e instanceof Ea)e.b[t]=_a(n);else if(e instanceof Da)e.b[t]=Math.fround(n);else if(e instanceof Sa)e.b[t]=ga(n);else if(e instanceof Ca)e.b[t]=n|0;else if(e instanceof wa)e.b[t]=n|0;else if(e instanceof xa)e.b[t]=!!n;else if(e===null)throw new Tm;else throw new Fm(e)}),E.gd=(function(e){return Dl(e.aC(),e.ad()+`(`,`,`,`)`)}),E.a=(function(e){return e===null?null:e.b.length===0?Jh(Qh()):new D_(e)}),E.ic=(function(e){return e===null?null:new C_(e)}),new O().i(Il,`scala.runtime.ScalaRunTime$`,{el:1});var Rl;function R(){return Rl||=new Il,Rl}function zl(){}E=zl.prototype=new D,E.constructor=zl;function Bl(){}Bl.prototype=E,E.e=(function(e,t){var n=this.ci(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),E.ci=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),E.u=(function(e,t){return this.gp(e^t)}),E.gp=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),E.bg=(function(e){var t=e.h,n=e.i;return n===t>>31?t:t^n}),E.a5=(function(e){var t=aa(e);if(t===e)return t;var n=hl(),r=n.fJ(e),i=n.z;return hl().bO(r,i)===e?r^i:fc().db(e)}),E.F=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a5(+e);if(e instanceof I){var t=_a(e);return this.bg(new I(t.h,t.i))}else return ta(e)}),E.bM=(function(e){throw xm(new Sm,``+e)}),new O().i(zl,`scala.runtime.Statics$`,{en:1});var Vl;function z(){return Vl||=new zl,Vl}function Hl(){}E=Hl.prototype=new D,E.constructor=Hl;function Ul(){}Ul.prototype=E,E.hZ=(function(e,t){return setTimeout((()=>{t.aY()}),e)}),new O().i(Hl,`scala.scalajs.js.timers.package$`,{et:1});var Wl;function Gl(){return Wl||=new Hl,Wl}function Kl(){}E=Kl.prototype=new D,E.constructor=Kl;function ql(){}ql.prototype=E,E.i8=(function(e){var t=[];return e.aA(new J((e=>t.push(e)|0))),t}),new O().i(Kl,`scala.scalajs.runtime.Compat$`,{eC:1});var Jl;function Yl(){return Jl||=new Kl,Jl}function Xl(){}E=Xl.prototype=new D,E.constructor=Xl;function Zl(){}Zl.prototype=E,E.i0=(function(e){var t=`Illegal command line`+(e.fz()===0?``:e.fz()===1?` after first argument`:` after `+e.fz()+` arguments`)+`: `+e.iI();yd().bP().bN(t+`
`)}),new O().i(Xl,`scala.util.CommandLineParser$`,{eE:1});function Ql(e){this.d1=null,this.d1=e}E=Ql.prototype=new D,E.constructor=Ql;function $l(){}$l.prototype=E,E.B=(function(){return`DynamicVariable(`+this.d1+`)`}),new O().i(Ql,`scala.util.DynamicVariable`,{eG:1});function eu(){}E=eu.prototype=new D,E.constructor=eu;function tu(){}tu.prototype=E,E.e=(function(e,t){var n=this.ci(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),E.ci=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),E.u=(function(e,t){return this.L(e^t)}),E.L=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),E.cj=(function(e,t,n){var r=e.ab();if(r===0)return jh(e.ad());var i=t;n||(i=this.e(i,jh(e.ad())));for(var a=0;a<r;)i=this.e(i,z().F(e.ac(a))),a=1+a|0;return this.u(i,r)}),E.i9=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.v();o.A();){var s=o.n(),c=z().F(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.e(l,n),l=this.e(l,r),l=this.ci(l,a),this.u(l,i)}),E.hG=(function(e,t){var n=e.v(),r=t;if(!n.A())return this.u(r,0);var i=n.n();if(!n.A())return this.u(this.e(r,z().F(i)),1);var a=n.n(),o=z().F(i);r=this.e(r,o);for(var s=r,c=z().F(a),l=c-o|0,u=2;n.A();){r=this.e(r,c);var d=z().F(n.n());if(l!==(d-c|0)||l===0){for(r=this.e(r,d),u=1+u|0;n.A();)r=this.e(r,z().F(n.n())),u=1+u|0;return this.u(r,u)}c=d,u=1+u|0}return this.L(this.e(this.e(s,l),c))}),E.f6=(function(e,t){var n=t,r=rl().bf(e);switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,z().F(R().bd(e,0))),1);default:var i=z().F(R().bd(e,0));n=this.e(n,i);for(var a=n,o=z().F(R().bd(e,1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().F(R().bd(e,c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().F(R().bd(e,c))),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.hL=(function(e,t,n,r){return this.L(this.e(this.e(this.e(r,e),t),n))}),E.hi=(function(e,t){var n=t,r=e.t();switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,z().F(e.w(0))),1);default:var i=z().F(e.w(0));n=this.e(n,i);for(var a=n,o=z().F(e.w(1)),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().F(e.w(c));if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().F(e.w(c))),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.hn=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.k();){var l=c.a6(),u=c.T(),d=z().F(l);switch(r=this.e(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.hL(s,a,o,t):this.u(r,n)}),E.ff=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,e.b[0]?1231:1237),1);default:var i=e.b[0]?1231:1237;n=this.e(n,i);for(var a=n,o=e.b[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.b[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.b[c]?1231:1237),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.f7=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,e.b[0]),1);default:var i=e.b[0];n=this.e(n,i);for(var a=n,o=e.b[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.b[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.b[c]),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.f8=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,e.b[0]),1);default:var i=e.b[0];n=this.e(n,i);for(var a=n,o=e.b[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.b[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.b[c]),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.f9=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,z().a5(e.b[0])),1);default:var i=z().a5(e.b[0]);n=this.e(n,i);for(var a=n,o=z().a5(e.b[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().a5(e.b[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().a5(e.b[c])),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.fa=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,z().a5(e.b[0])),1);default:var i=z().a5(e.b[0]);n=this.e(n,i);for(var a=n,o=z().a5(e.b[1]),s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=z().a5(e.b[c]);if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,z().a5(e.b[c])),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.fb=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,e.b[0]),1);default:var i=e.b[0];n=this.e(n,i);for(var a=n,o=e.b[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.b[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.b[c]),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.fc=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:var i=n,a=e.b[0];return this.u(this.e(i,z().bg(new I(a.h,a.i))),1);default:var o=e.b[0],s=z().bg(new I(o.h,o.i));n=this.e(n,s);for(var c=n,l=e.b[1],u=z().bg(new I(l.h,l.i)),d=u-s|0,f=2;f<r;){n=this.e(n,u);var p=e.b[f],m=z().bg(new I(p.h,p.i));if(d!==(m-u|0)||d===0){for(n=this.e(n,m),f=1+f|0;f<r;){var h=n,g=e.b[f];n=this.e(h,z().bg(new I(g.h,g.i))),f=1+f|0}return this.u(n,r)}u=m,f=1+f|0}return this.L(this.e(this.e(c,d),u))}}),E.fd=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,e.b[0]),1);default:var i=e.b[0];n=this.e(n,i);for(var a=n,o=e.b[1],s=o-i|0,c=2;c<r;){n=this.e(n,o);var l=e.b[c];if(s!==(l-o|0)||s===0){for(n=this.e(n,l),c=1+c|0;c<r;)n=this.e(n,e.b[c]),c=1+c|0;return this.u(n,r)}o=l,c=1+c|0}return this.L(this.e(this.e(a,s),o))}}),E.fe=(function(e,t){var n=t,r=e.b.length;switch(r){case 0:return this.u(n,0);case 1:return this.u(this.e(n,0),1);default:n=this.e(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.e(n,a),o!==(-a|0)||o===0){for(n=this.e(n,0),s=1+s|0;s<r;)n=this.e(n,0),s=1+s|0;return this.u(n,r)}a=0,s=1+s|0}return this.L(this.e(this.e(i,o),a))}});function nu(e){this.b4=null,this.dq=null,this.co=!1,this.dq=e,vo(this),this.co=!1}E=nu.prototype=new D,E.constructor=nu;function ru(){}ru.prototype=E,E.hH=(function(e){this.co?(So(e),this.dq.aY()):xo(this,e)}),E.hm=(function(){yo(this),this.co=!0}),new O().i(nu,`com.raquo.airstream.ownership.OneTimeOwner`,{bk:1,bl:1});function iu(){}E=iu.prototype=new D,E.constructor=iu;function au(){}au.prototype=E,E.gE=(function(e){return e!==null}),E.gK=(function(e){return e?``:null}),E.bI=(function(e){return this.gE(e)}),E.bK=(function(e){return this.gK(!!e)}),new O().i(iu,`com.raquo.laminar.codecs.package$$anon$1`,{bB:1,Y:1});function ou(e){if(e===null)throw new Tm}E=ou.prototype=new D,E.constructor=ou;function su(){}su.prototype=E,E.bK=(function(e){return e}),E.bI=(function(e){return e}),new O().i(ou,`com.raquo.laminar.codecs.package$$anon$2`,{bC:1,Y:1});function cu(e){if(e===null)throw new Tm}E=cu.prototype=new D,E.constructor=cu;function lu(){}lu.prototype=E,E.gD=(function(e){return Xu().hI(e)}),E.bI=(function(e){return this.gD(e)}),E.bK=(function(e){return``+ +e}),new O().i(cu,`com.raquo.laminar.codecs.package$$anon$4`,{bD:1,Y:1});function uu(e,t,n,r){}E=uu.prototype=new gs,E.constructor=uu;function du(){}du.prototype=E,new O().i(uu,`com.raquo.laminar.keys.CompositeKey`,{bT:1,T:1});function fu(e){this.c2=null,this.c2=e}E=fu.prototype=new gs,E.constructor=fu;function pu(){}pu.prototype=E,new O().i(fu,`com.raquo.laminar.keys.EventProp`,{bW:1,T:1});function mu(e,t,n){return e.ak=t,e.b5=n,e}function hu(){this.ak=null,this.b5=null}E=hu.prototype=new gs,E.constructor=hu;function gu(){}gu.prototype=E,E.g=(function(e){return new Xd(this,e,new nm(((e,t,n)=>{zo().fN(e,t,n)})))}),new O().i(hu,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,T:1});function _u(e,t,n){this.cy=null,this.cx=null,this.c3=null,this.c4=null,this.cy=e,this.cx=t;var r=n.k()?Q():new $(n.E()+`:`+e);this.c3=r.k()?e:r.E(),this.c4=n.k()?Q():new $(bs().hs(n.E()))}E=_u.prototype=new gs,E.constructor=_u;function vu(){}vu.prototype=E,new O().i(_u,`com.raquo.laminar.keys.SvgAttr`,{bX:1,T:1});function yu(){}E=yu.prototype=new D,E.constructor=yu;function bu(){}bu.prototype=E,E.a9=(function(e){}),new O().i(yu,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{c4:1,R:1});function xu(e,t){if(this.dM=null,this.dM=e,t===null)throw new Tm}E=xu.prototype=new D,E.constructor=xu;function Su(){}Su.prototype=E,E.a9=(function(e){var t=Xa(),n=(()=>{this.dM.j(e)});if(Xa(),t.a1)n();else{t.a1=!0;try{n()}finally{t.a1=!1,Ka(t)}}}),new O().i(xu,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{c5:1,R:1});function Cu(){}E=Cu.prototype=new D,E.constructor=Cu;function wu(){}wu.prototype=E,new O().i(Cu,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{c8:1,c6:1});function Tu(){}E=Tu.prototype=new D,E.constructor=Tu;function Eu(){}Eu.prototype=E,new O().i(Tu,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{ca:1,c9:1});var Du;function B(){return Du||=new Tu,Du}function Ou(e,t){if(this.dN=null,this.dN=e,t===null)throw new Tm}E=Ou.prototype=new D,E.constructor=Ou;function ku(){}ku.prototype=E,E.go=(function(e){return this.dN.j(e)}),new O().i(Ou,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cd:1,cb:1});function Au(e){e.fj(new co(new Zp((()=>{throw If(new Lf,`Attempting to use owner of unmounted element: `+Dl(zo().gC(e.aZ(),(zo(),cv())),``,` > `,``))}))))}function ju(e,t,n){return e.cE=t,e}function Mu(){this.cE=null}E=Mu.prototype=new D,E.constructor=Mu;function Nu(){}Nu.prototype=E,E.da=(function(){return this.cE}),E.ay=(function(e){var t=this.gs();return e.aA(new X((e=>{e.a9(t)}))),t}),E.gs=(function(){return new bh(this,zo().gw(this))}),new O().i(Mu,`com.raquo.laminar.tags.HtmlTag`,{ag:1,a4:1});function Pu(e,t){this.dU=null,this.dU=e}E=Pu.prototype=new D,E.constructor=Pu;function Fu(){}Fu.prototype=E,new O().i(Pu,`com.raquo.laminar.tags.SvgTag`,{co:1,a4:1});function Iu(){}E=Iu.prototype=new D,E.constructor=Iu;function Lu(){}Lu.prototype=E,E.bK=(function(e){return e}),E.bI=(function(e){return e}),new O().i(Iu,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cB:1,Y:1});function Ru(e,t){return e.aM=t,e.bw(),e}function zu(){this.aM=null,this.aL=null,this.aN=!1}E=zu.prototype=new D,E.constructor=zu;function Bu(){}Bu.prototype=E,E.i4=(function(){return this.aN||=(this.aL=new $d(this.aM,Ks().gc(),(Ks(),void 0)),!0),this.aL}),E.d=(function(e,t){var n=this.i4().ay(R().a(new(A.r()).C([])));return e.aA(new X((e=>{e.j(this).a9(n)}))),t.aA(new X((e=>{e.a9(n)}))),n});function Vu(e){return(1&e.al)<<24>>24||(e.cH=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.al=(1|e.al)<<24>>24),e.cH}function Hu(e){return(1&e.al)<<24>>24?e.cH:Vu(e)}function Uu(e){return(2&e.al)<<24>>24||(e.cG=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.al=(2|e.al)<<24>>24),e.cG}function Wu(e){return(2&e.al)<<24>>24?e.cG:Uu(e)}function Gu(e,t){var n=Wu(e).exec(t);n===null&&Ku(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Ku(t);var s=e.hJ(i,a,o,15);return r===`-`?-s:s}function Ku(e){throw new Ah(`For input string: "`+e+`"`)}function qu(){this.cH=null,this.cG=null,this.al=0}E=qu.prototype=new D,E.constructor=qu;function Ju(){}Ju.prototype=E,E.hI=(function(e){var t=Hu(this).exec(e);return t===null?Gu(this,e):+parseFloat(t[1])}),E.hJ=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,g=+parseInt(m,16),_=aa(+parseInt(n,10))+h|0,v=_/3|0,y=+(2**v),ee=_-(v<<1)|0;return g*y*y*+(2**ee)}),new O().i(qu,`java.lang.Double$`,{cI:1,a:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){}E=Zu.prototype=new D,E.constructor=Zu;function Qu(){}Qu.prototype=E;function $u(e){return e instanceof Zu||typeof e==`number`||e instanceof I}function ed(e,t,n,r,i){this.b8=null,this.bo=null,this.b9=null,this.ba=0,this.b7=0,this.b8=e,this.bo=t,this.b9=n,this.ba=r,this.b7=i}E=ed.prototype=new D,E.constructor=ed;function td(){}td.prototype=E,E.m=(function(e){return e instanceof ed&&this.b9===e.b9&&this.ba===e.ba&&this.b7===e.b7&&this.b8===e.b8&&this.bo===e.bo}),E.B=(function(){var e=``;return this.b8!==`<jscode>`&&(e=``+e+this.b8+`.`),e=``+e+this.bo,this.b9===null?e+=`(Unknown Source)`:(e=e+`(`+this.b9,this.ba>=0&&(e=e+`:`+this.ba,this.b7>=0&&(e=e+`:`+this.b7)),e+=`)`),e}),E.x=(function(){return jh(this.b8)^jh(this.bo)^jh(this.b9)^this.ba^this.b7});var nd=new O().i(ed,`java.lang.StackTraceElement`,{ar:1,a:1});function rd(){}E=rd.prototype=new D,E.constructor=rd;function id(){}id.prototype=E,E.ht=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.b.length)throw new Ph;for(var i=``,a=t;a!==r;)i+=``+oa(e.b[a]),a=1+a|0;return i}),new O().i(rd,`java.lang.String$`,{cU:1,a:1});var ad;function od(){return ad||=new rd,ad}function sd(e,t,n,r,i){return e.eF=t,e.eG=i,i&&e.h3(),e}var cd=class extends Error{constructor(){super(),this.eF=null,this.eG=!1,this.eE=null,this.c7=null}hj(e){return this}bL(){return this.eF}h3(){var e=this instanceof Eg?this.a3:this;return this.eE=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}hd(){return this.c7===null&&(this.eG?this.c7=Lc().h2(this.eE):this.c7=new(nd.r()).C(0)),this.c7}B(){var e=$i(this),t=this.bL();return t===null?e:e+`: `+t}x(){return va.prototype.x.call(this)}m(e){return va.prototype.m.call(this,e)}get message(){var e=this.bL();return e===null?``:e}get name(){return $i(this)}toString(){return this.B()}};function ld(){this.q=null,dd=this,this.q=new km}E=ld.prototype=new D,E.constructor=ld;function ud(){}ud.prototype=E,new O().i(ld,`scala.$less$colon$less$`,{d6:1,a:1});var dd;function V(){return dd||=new ld,dd}function fd(){}E=fd.prototype=new D,E.constructor=fd;function pd(){}pd.prototype=E,E.fu=(function(e,t){var n=e.G();if(n>-1){for(var r=t.hu(n),i=e.v(),a=0;a<n;)R().gn(r,a,i.n()),a=1+a|0;return r}else{var o=null,s=t.hT(),c=s===ja.l();o=[];for(var l=e.v();l.A();){var u=l.n(),d=c?ga(u):u===null?s.aF.z:u;o.push(d)}return(s===Aa.l()?Qc.l():s===Fl.l()||s===op.l()?ka.l():s).aF.r().w(o)}}),E.ft=(function(e,t){if(e===t)return!0;if(e.b.length!==t.b.length)return!1;for(var n=e.b.length,r=0;r<n;){if(!Pl().R(e.b[r],t.b[r]))return!1;r=1+r|0}return!0}),new O().i(fd,`scala.Array$`,{d8:1,a:1});var md;function hd(){return md||=new fd,md}function gd(){this.eI=null,vd=this,this.eI=new Ql(Wc().eD)}E=gd.prototype=new D,E.constructor=gd;function _d(){}_d.prototype=E,E.bP=(function(){return this.eI.d1}),new O().i(gd,`scala.Console$`,{d9:1,e3:1});var vd;function yd(){return vd||=new gd,vd}function bd(){}E=bd.prototype=new _l,E.constructor=bd;function xd(){}xd.prototype=E,E.id=(function(e){return e===null?null:e.b.length===0?ng().eR:new Z_(e)});function Sd(){}E=Sd.prototype=new D,E.constructor=Sd;function Cd(){}Cd.prototype=E,E.Q=(function(e){return e===null?Q():new $(e)}),new O().i(Sd,`scala.Option$`,{dg:1,a:1});var wd;function Td(){return wd||=new Sd,wd}function Ed(e,t){if(t===e)e.f3(uh().fv(t));else for(var n=t.v();n.A();)e.d3(n.n());return e}function Dd(){}E=Dd.prototype=new D,E.constructor=Dd;function Od(){}Od.prototype=E,E.B=(function(){return`<function0>`});function kd(){}E=kd.prototype=new D,E.constructor=kd;function Ad(){}Ad.prototype=E,E.B=(function(){return`<function1>`});function jd(){}E=jd.prototype=new D,E.constructor=jd;function Md(){}Md.prototype=E,E.B=(function(){return`<function2>`});function Nd(){}E=Nd.prototype=new D,E.constructor=Nd;function Pd(){}Pd.prototype=E,E.B=(function(){return`<function3>`});function Fd(e){this.cc=!1,this.cc=e}E=Fd.prototype=new D,E.constructor=Fd;function Id(){}Id.prototype=E,E.B=(function(){return``+this.cc}),new O().i(Fd,`scala.runtime.BooleanRef`,{eg:1,a:1});function Ld(e){this.bu=0,this.bu=e}E=Ld.prototype=new D,E.constructor=Ld;function Rd(){}Rd.prototype=E,E.B=(function(){return``+this.bu}),new O().i(Ld,`scala.runtime.IntRef`,{ei:1,a:1});function zd(){this.C=0,this.f0=0,this.gb=0,this.ga=0,Vd=this,this.C=jh(`Seq`),this.f0=jh(`Map`),this.gb=jh(`Set`),this.ga=this.i9(cv(),this.f0)}E=zd.prototype=new tu,E.constructor=zd;function Bd(){}Bd.prototype=E,E.hU=(function(e){return Gg(e)?this.hi(e,this.C):e instanceof F_?this.hn(e,this.C):this.hG(e,this.C)}),new O().i(zd,`scala.util.hashing.MurmurHash3$`,{eI:1,eH:1});var Vd;function H(){return Vd||=new zd,Vd}var Hd=class extends cd{};function Ud(){this.ck=null,this.df=null,this.dg=null,Gd=this,this.ck=uh().f4(R().a(new(L.r()).C([]))),this.df=new X((e=>{try{console.error(this.cg(e)+`
`+this.hc(e,`
`))}catch(e){var t=e instanceof cd?e:new Eg(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dg=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Eg?t.a3:t})),this.hM(this.df)}E=Ud.prototype=new D,E.constructor=Ud;function Wd(){}Wd.prototype=E,E.cg=(function(e){try{var t=e.bL()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Qi(e).d8()+`: `+t}),E.hc=(function(e,t){try{return Dl(Uf().id(e.hd()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),E.hM=(function(e){this.ck.d3(e)}),E.aD=(function(e){for(var t=this.ck.v();t.A();){var n=t.n();try{n.j(e)}catch(e){var r=e instanceof cd?e:new Eg(e),i=this.dg;if(n===null?i===null:n.m(i))throw r instanceof Eg?r.a3:r;console.warn(`Error processing an unhandled error callback:`),Gl().hZ(0,new Zp((e=>(()=>{throw e instanceof Eg?e.a3:e}))(r)))}}}),new O().i(Ud,`com.raquo.airstream.core.AirstreamError$`,{b7:1,e1:1,e2:1});var Gd;function Kd(){return Gd||=new Ud,Gd}function U(e,t,n){return new Ep(n.go(t))}function W(e,t,n,r){return new xu(new X((e=>{(Go(),new Bo(t,null,null)).aA(new X((e=>(t=>{n.j(t).a9(e)}))(e)))})),Es())}function qd(e,t){this.b6=null,this.cz=null,this.cA=null,this.b6=e,this.cz=(n=>{var r=e.cu.j(n);r.k()||t.j(r.E())}),this.cA=(()=>{var e=null;e=this;var t={};if(e===null)throw new Tm;return t.capture=e.b6.cw,t.passive=e.b6.cv,t})()}E=qd.prototype=new D,E.constructor=qd;function Jd(){}Jd.prototype=E,E.a9=(function(e){this.gq(e,!1)}),E.gq=(function(e,t){if(lm(e,this)===-1){var n=new X((t=>(zo().ge(e.a8,this),new Co(t.dH,new Zp((()=>{var t=lm(e,this);t!==-1&&(cm(e,t),zo().hP(e.a8,this))})))))),r=t?Bs().ia(e,n):_o().de(e.ae,new X((t=>n.j(new xs(e,t)))),!1);return sm(e,this,t),r}else{var i=new X((e=>void 0));return _o().fP(e.ae,new X((t=>{i.j(new xs(e,t))})),!1)}}),E.B=(function(){return`EventListener(`+this.b6.bl.c2+`)`});var Yd=new O().i(qd,`com.raquo.laminar.modifiers.EventListener`,{c1:1,R:1,c0:1});function Xd(e,t,n){this.dK=null,this.dL=null,this.dJ=null,this.dK=e,this.dL=t,this.dJ=n}E=Xd.prototype=new D,E.constructor=Xd;function Zd(){}Zd.prototype=E,E.a9=(function(e){this.dJ.gl(e,this.dK,this.dL)}),new O().i(Xd,`com.raquo.laminar.modifiers.KeySetter`,{c2:1,R:1,ce:1});function G(e,t){if(this.cC=null,this.dP=null,this.dQ=null,this.dP=t,Au(this),e===null)throw If(new Lf,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!zo().hl(e,document))throw If(new Lf,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dQ=e,this.hr()}E=G.prototype=new D,E.constructor=G;function Qd(){}Qd.prototype=E,E.cf=(function(){return this.cC}),E.fj=(function(e){this.cC=e}),E.hr=(function(){return this.cC.f2(),Is().cd(this,this.dP,void 0)}),E.aZ=(function(){return this.dQ}),new O().i(G,`com.raquo.laminar.nodes.RootNode`,{cj:1,a3:1,af:1});function $d(e,t,n){this.cE=null,this.dT=null,this.dT=e,ju(this,e,!1)}E=$d.prototype=new Nu,E.constructor=$d;function ef(){}ef.prototype=E,E.da=(function(){return this.dT}),new O().i($d,`com.raquo.laminar.tags.CustomHtmlTag`,{cm:1,ag:1,a4:1});function tf(){this.aM=null,this.aL=null,this.aN=!1,this.dV=null,this.dW=!1,Ru(this,`wa-button`)}E=tf.prototype=new Bu,E.constructor=tf;function nf(){}nf.prototype=E,E.V=(function(){return this.dW||=(this.dV=(Y(),mu(new hu,`with-caret`,$o().bZ)),!0),this.dV}),E.bw=(function(){return wn}),new O().i(tf,`io.github.nguyenyou.webawesome.laminar.Button$`,{cq:1,W:1,V:1});var rf;function af(){return rf||=new tf,rf}function of(){this.ak=null,this.b5=null,this.dZ=null,this.e0=!1,mu(this,`type`,new Iu)}E=of.prototype=new gu,E.constructor=of;function sf(){}sf.prototype=E,E.az=(function(){return this.e0||=(this.dZ=lf().g(`checkbox`),!0),this.dZ}),new O().i(of,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemElementType$`,{cs:1,Z:1,T:1});var cf;function lf(){return cf||=new of,cf}function uf(){this.ak=null,this.b5=null,this.e1=null,this.e2=!1,mu(this,`variant`,new Iu)}E=uf.prototype=new gu,E.constructor=uf;function df(){}df.prototype=E,E.gz=(function(){return this.e2||=(this.e1=pf().g(`danger`),!0),this.e1}),new O().i(uf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$DropdownItemVariant$`,{ct:1,Z:1,T:1});var ff;function pf(){return ff||=new uf,ff}function mf(){this.ak=null,this.b5=null,this.e3=null,this.e4=!1,mu(this,`target`,new Iu)}E=mf.prototype=new gu,E.constructor=mf;function hf(){}hf.prototype=E,E.gr=(function(){return this.e4||=(this.e3=_f().g(`_blank`),!0),this.e3}),new O().i(mf,`io.github.nguyenyou.webawesome.laminar.CommonKeys$LinkTarget$`,{cu:1,Z:1,T:1});var gf;function _f(){return gf||=new mf,gf}function vf(){this.aM=null,this.aL=null,this.aN=!1,Ru(this,`wa-divider`)}E=vf.prototype=new Bu,E.constructor=vf;function yf(){}yf.prototype=E,E.bw=(function(){return Dn}),new O().i(vf,`io.github.nguyenyou.webawesome.laminar.Divider$`,{cv:1,W:1,V:1});var bf;function xf(){return bf||=new vf,bf}function Sf(){this.aM=null,this.aL=null,this.aN=!1,this.e7=null,this.e8=!1,this.e5=null,this.e6=!1,this.e9=null,this.ea=!1,Ru(this,`wa-dropdown`)}E=Sf.prototype=new Bu,E.constructor=Sf;function Cf(){}Cf.prototype=E,E.fG=(function(){return this.e8||=(this.e7=(Y(),new fu(`wa-select`)),!0),this.e7}),E.gG=(function(){return this.e6||=(this.e5=(Y(),mu(new hu,`distance`,$o().f1())),!0),this.e5}),E.i1=(function(){return this.ea||=(this.e9=(Y(),mu(new hu,`skidding`,$o().f1())),!0),this.e9}),E.bw=(function(){return Ji}),new O().i(Sf,`io.github.nguyenyou.webawesome.laminar.Dropdown$`,{cw:1,W:1,V:1});var wf;function Tf(){return wf||=new Sf,wf}function Ef(){this.aM=null,this.aL=null,this.aN=!1,this.er=null,this.es=!1,this.ep=null,this.eq=!1,this.en=null,this.eo=!1,this.ed=null,this.ee=!1,this.ef=null,this.eg=!1,this.eh=null,this.ei=!1,this.el=null,this.em=!1,this.ej=null,this.ek=!1,Ru(this,`wa-dropdown-item`)}E=Ef.prototype=new Bu,E.constructor=Ef;function Df(){}Df.prototype=E,E.fR=(function(){return this.es||=(this.er=pf(),!0),this.er}),E.o=(function(){return this.eq||=(this.ep=(Y(),mu(new hu,`value`,$o().aJ)),!0),this.ep}),E.aE=(function(){return this.eo||=(this.en=lf(),!0),this.en}),E.bH=(function(){return this.ee||=(this.ed=(Y(),mu(new hu,`checked`,$o().bZ)),!0),this.ed}),E.gF=(function(){return this.eg||=(this.ef=(Y(),mu(new hu,`disabled`,$o().bZ)),!0),this.ef}),E.fy=(function(){return this.ei||=(this.eh=(Y(),mu(new hu,`href`,$o().aJ)),!0),this.eh}),E.i6=(function(){return this.em||=(this.el=_f(),!0),this.el}),E.hN=(function(){return this.ek||=(this.ej=(Y(),mu(new hu,`rel`,$o().aJ)),!0),this.ej}),E.bw=(function(){return An}),new O().i(Ef,`io.github.nguyenyou.webawesome.laminar.DropdownItem$`,{cy:1,W:1,V:1});var Of;function K(){return Of||=new Ef,Of}function kf(){this.aM=null,this.aL=null,this.aN=!1,this.ez=null,this.eA=!1,Ru(this,`wa-icon`)}E=kf.prototype=new Bu,E.constructor=kf;function Af(){}Af.prototype=E,E.S=(function(){return this.eA||=(this.ez=(Y(),mu(new hu,`name`,$o().aJ)),!0),this.ez}),E.bw=(function(){return Yi}),new O().i(kf,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cA:1,W:1,V:1});var jf;function Mf(){return jf||=new kf,jf}function Nf(e){if(e.aF.Z)return e.aF.Q().d8()+`[]`;for(var t=e.aF.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Pf(e){this.cF=null,this.aF=e}E=Pf.prototype=new D,E.constructor=Pf;function Ff(){}Ff.prototype=E,E.B=(function(){return(this.aF.Y?`interface `:this.aF.X?``:`class `)+this.aF.N}),E.d8=(function(){return this.cF===null&&(this.cF=Nf(this)),this.cF}),new O().i(Pf,`java.lang.Class`,{cH:1,a:1,M:1});function If(e,t){return sd(e,t,null,!0,!0),e}var Lf=class extends cd{};new O().i(Lf,`java.lang.Exception`,{I:1,t:1,a:1});function Rf(){}E=Rf.prototype=new D,E.constructor=Rf;function zf(){}zf.prototype=E;function Bf(){this.g7=null,Hf=this,this.g7=np()}E=Bf.prototype=new xd,E.constructor=Bf;function Vf(){}Vf.prototype=E,new O().i(Bf,`scala.Predef$`,{dj:1,dc:1,dd:1});var Hf;function Uf(){return Hf||=new Bf,Hf}function Wf(e,t){return e.c9=t,e}function Gf(){this.c9=null}E=Gf.prototype=new D,E.constructor=Gf;function Kf(){}Kf.prototype=E,E.d7=(function(e){return this.c9.d6(e,Rg())}),E.d5=(function(e){return this.c9.d6(e,Rg())});function qf(e,t){return new Ym(e).gv(t)}function Jf(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?q().D:new $m(e,r,i)}function Yf(e,t){for(var n=t.v();e.A()&&n.A();)if(!Pl().R(e.n(),n.n()))return!1;return e.A()===n.A()}function Xf(){this.D=null,Qf=this,this.D=new Um}E=Xf.prototype=new D,E.constructor=Xf;function Zf(){}Zf.prototype=E,new O().i(Xf,`scala.collection.Iterator$`,{dD:1,a0:1,a:1});var Qf;function q(){return Qf||=new Xf,Qf}function $f(){}E=$f.prototype=new D,E.constructor=$f;function ep(){}ep.prototype=E,new O().i($f,`scala.collection.immutable.Map$`,{dR:1,dI:1,a:1});var tp;function np(){return tp||=new $f,tp}function rp(e){this.eS=null,this.eS=e}E=rp.prototype=new Od,E.constructor=rp;function ip(){}ip.prototype=E,E.aY=(function(){return(0,this.eS)()}),new O().i(rp,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ec:1,b4:1,au:1});function J(e){this.eT=null,this.eT=e}E=J.prototype=new Ad,E.constructor=J;function ap(){}ap.prototype=E,E.j=(function(e){return(0,this.eT)(e)}),new O().i(J,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{ed:1,b5:1,e:1});var op=new O().i(0,`scala.runtime.Nothing$`,{ej:1,t:1,a:1});function sp(){}E=sp.prototype=new D,E.constructor=sp;function cp(){}cp.prototype=E,E.h8=(function(e){return(t=>e.j(t))}),new O().i(sp,`scala.scalajs.js.Any$`,{eo:1,ep:1,eq:1});var lp;function up(){return lp||=new sp,lp}function dp(){}E=dp.prototype=new Od,E.constructor=dp;function fp(){}fp.prototype=E;function pp(){}E=pp.prototype=new Ad,E.constructor=pp;function mp(){}mp.prototype=E;function hp(){}E=hp.prototype=new Md,E.constructor=hp;function gp(){}gp.prototype=E;function _p(){}E=_p.prototype=new Pd,E.constructor=_p;function vp(){}vp.prototype=E;function yp(e,t,n,r){if(this.dk=null,this.di=!1,this.cl=null,this.dj=null,this.dk=e,this.di=t,this.cl=n,r===null)throw new Tm;this.dj=void 0}E=yp.prototype=new D,E.constructor=yp;function bp(){}bp.prototype=E,E.B=(function(){return Pa(this)}),E.fF=(function(e){try{this.dk.j(e)}catch(e){var t=e instanceof cd?e:new Eg(e);this.di?this.hF(new _h(t)):Kd().aD(new _h(t))}}),E.hF=(function(e){try{this.cl.d9(e)?this.cl.j(e):Kd().aD(e)}catch(n){var t=n instanceof cd?n:new Eg(n);Kd().aD(new vh(t,e))}}),new O().i(yp,`com.raquo.airstream.core.Observer$$anon$8`,{bb:1,bc:1,b8:1,b9:1});function xp(e){if(this.dx=null,this.dy=!1,this.fU=null,e===null)throw new Tm;ns(this)}E=xp.prototype=new D,E.constructor=xp;function Sp(){}Sp.prototype=E,E.i3=(function(){return this.dy||=(this.dx=new Pu(`svg`,!1),!0),this.dx}),new O().i(xp,`com.raquo.laminar.api.Laminar$svg$`,{bv:1,bM:1,bF:1,bH:1});function Cp(){this.c=null,Tp=this,this.c=new Xg}E=Cp.prototype=new D,E.constructor=Cp;function wp(){}wp.prototype=E,new O().i(Cp,`com.raquo.laminar.api.package$`,{by:1,ac:1,ad:1,ab:1});var Tp;function Y(){return Tp||=new Cp,Tp}function Ep(e){this.dS=null,this.cD=null,this.dS=Q(),this.cD=zo().gy(e)}E=Ep.prototype=new D,E.constructor=Ep;function Dp(){}Dp.prototype=E,E.fO=(function(e){this.dS=e}),E.fS=(function(e){}),E.a9=(function(e){Is().cd(e,this,void 0)}),E.i7=(function(){return this.cD.data}),E.aZ=(function(){return this.cD}),new O().i(Ep,`com.raquo.laminar.nodes.TextNode`,{cl:1,a3:1,R:1,ae:1});function Op(){}E=Op.prototype=new D,E.constructor=Op;function kp(){}kp.prototype=E;function Ap(e,t){return e===t}function jp(e){return e?1231:1237}var Mp=new O().i(0,`java.lang.Boolean`,{cF:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function Np(e){return e}function Pp(e,t){return t instanceof Zi&&e===t.c}var Fp=new O().i(0,`java.lang.Character`,{am:1,a:1,Q:1,M:1},(e=>e instanceof Zi)),Ip=class extends Lf{};function Lp(){this.y=null,this.y=``}E=Lp.prototype=new D,E.constructor=Lp;function Rp(){}Rp.prototype=E,E.gi=(function(e){var t=od().ht(e,0,e.b.length);return this.y=``+this.y+t,this}),E.B=(function(){return this.y}),E.t=(function(){return this.y.length}),E.fh=(function(e){return this.y.charCodeAt(e)}),new O().i(Lp,`java.lang.StringBuilder`,{cV:1,a5:1,ak:1,a:1});function zp(){}E=zp.prototype=new zf,E.constructor=zp;function Bp(){}Bp.prototype=E;function Vp(){}E=Vp.prototype=new D,E.constructor=Vp;function Hp(){}Hp.prototype=E,E.B=(function(){return`<function1>`}),E.d9=(function(e){return!1}),E.gm=(function(e){throw new Fm(e)}),E.j=(function(e){this.gm(e)}),new O().i(Vp,`scala.PartialFunction$$anon$1`,{di:1,g:1,e:1,a:1});function Up(){}E=Up.prototype=new D,E.constructor=Up;function Wp(){}Wp.prototype=E,E.v=(function(){return this}),E.ce=(function(e){return this.bR(e,-1)}),E.bR=(function(e,t){return Jf(this,e,t)}),E.B=(function(){return`<iterator>`}),E.bx=(function(e,t,n,r){return Ol(this,e,t,n,r)}),E.G=(function(){return-1});function Gp(e,t){return e.ca=t,e}function Kp(){this.ca=null}E=Kp.prototype=new D,E.constructor=Kp;function qp(){}qp.prototype=E,E.f4=(function(e){return this.ca.d5(e)}),E.fv=(function(e){return this.ca.d7(e)}),E.d7=(function(e){return this.fv(e)}),E.d5=(function(e){return this.f4(e)});function Jp(e,t){return t>=0&&e.aB(t)>0}function Yp(e){return e.aB(0)===0}function Xp(e,t){var n=e.G();if(n!==-1)var r=t.G(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Yf(e.v(),t)}function Zp(e){this.eW=null,this.eW=e}E=Zp.prototype=new fp,E.constructor=Zp;function Qp(){}Qp.prototype=E,E.aY=(function(){return(0,this.eW)()}),new O().i(Zp,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{ev:1,eu:1,b4:1,au:1});function X(e){this.eX=null,this.eX=e}E=X.prototype=new mp,E.constructor=X;function $p(){}$p.prototype=E,E.j=(function(e){return(0,this.eX)(e)}),new O().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{ex:1,ew:1,b5:1,e:1});function em(e){this.eY=null,this.eY=e}E=em.prototype=new gp,E.constructor=em;function tm(){}tm.prototype=E,E.d4=(function(e,t){return(0,this.eY)(e,t)}),new O().i(em,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{ez:1,ey:1,ee:1,da:1});function nm(e){this.eZ=null,this.eZ=e}E=nm.prototype=new vp,E.constructor=nm;function rm(){}rm.prototype=E,E.gl=(function(e,t,n){return(0,this.eZ)(e,t,n)}),new O().i(nm,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eB:1,eA:1,ef:1,db:1});function im(e,t){this.c1=null,this.ct=null,this.c1=e,this.ct=t}E=im.prototype=new D,E.constructor=im;function am(){}am.prototype=E,E.a9=(function(e){var t=this.ct;t!==void 0&&t.fH(e,this.c1),Is().cd(e,this.c1,void 0)}),E.ib=(function(e){return new im(this.c1,e.gk(this.ct))});var Z=new O().i(im,`com.raquo.laminar.inserters.StaticChildInserter`,{bQ:1,R:1,bO:1,bS:1,bN:1});function om(e){e.cB=new Eo(new Zp((()=>{e.ae.f2()})),new Zp((()=>{e.ae.gA()}))),e.aK=void 0}function sm(e,t,n){if(e.aK===void 0)e.aK=jo().ag(R().a(new(Yd.r()).C([t])));else if(n){var r=e.aK;if(r===void 0){var i;throw new Om(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aK;if(a===void 0){var o;throw new Om(`undefined.get`)}else var o=a;o.push(t)}}function cm(e,t){var n=e.aK;n!==void 0&&n.splice(t,1)}function lm(e,t){var n=e.aK;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:ea(a,t))?r=!0:i=1+i|0}return r?i:-1}function um(e,t){fm(e,e.c5,t)&&pm(e,t)}function dm(e,t){var n=e.c5;e.c5=t,fm(e,n,t)||pm(e,t)}function fm(e,t,n){var r=!t.k()&&!t.E().cf().M.k(),i=!n.k()&&!n.E().cf().M.k();return r&&!i}function pm(e,t){mm(e,t.k()?Q():new $(t.E().cf()))}function mm(e,t){if(t.k())e.cB.gt();else{var n=t.E();e.cB.hW(n)}}function hm(){}E=hm.prototype=new kp,E.constructor=hm;function gm(){}gm.prototype=E;var _m=class extends Ip{constructor(e){super(),sd(this,e,null,!0,!0)}};new O().i(_m,`java.lang.ArithmeticException`,{cE:1,L:1,I:1,t:1,a:1});var vm=new O().i(0,`java.lang.Byte`,{cG:1,U:1,a:1,Q:1,M:1},(e=>da(e)));function ym(e,t){return sd(e,t,null,!0,!0),e}var bm=class extends Ip{};new O().i(bm,`java.lang.IllegalArgumentException`,{ao:1,L:1,I:1,t:1,a:1});function xm(e,t){return sd(e,t,null,!0,!0),e}var Sm=class extends Ip{};new O().i(Sm,`java.lang.IndexOutOfBoundsException`,{ap:1,L:1,I:1,t:1,a:1});function Cm(){}E=Cm.prototype=new kp,E.constructor=Cm;function wm(){}wm.prototype=E,new O().i(Cm,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cN:1,aj:1,ah:1,al:1,ai:1});var Tm=class extends Ip{constructor(){super(),sd(this,null,null,!0,!0)}};new O().i(Tm,`java.lang.NullPointerException`,{cO:1,L:1,I:1,t:1,a:1});var Em=new O().i(0,`java.lang.Short`,{cQ:1,U:1,a:1,Q:1,M:1},(e=>fa(e))),Dm=class extends Ip{constructor(e){super(),sd(this,e,null,!0,!0)}};new O().i(Dm,`java.lang.UnsupportedOperationException`,{cY:1,L:1,I:1,t:1,a:1});var Om=class extends Ip{constructor(e){super(),sd(this,e,null,!0,!0)}};new O().i(Om,`java.util.NoSuchElementException`,{d2:1,L:1,I:1,t:1,a:1});function km(){}E=km.prototype=new Bp,E.constructor=km;function Am(){}Am.prototype=E,E.j=(function(e){return e}),E.B=(function(){return`generalized constraint`}),new O().i(km,`scala.$less$colon$less$$anon$1`,{d7:1,d4:1,d5:1,e:1,a:1});function jm(e){return e.cM||=(e.cN=e.c8===null?`null`:Pm(e),!0),e.cN}function Mm(e){return e.cM?e.cN:jm(e)}function Nm(e){var t=e.c8;return`of class `+$i(t)}function Pm(e){try{return e.c8+` (`+Nm(e)+`)`}catch{return`an instance `+Nm(e)}}var Fm=class extends Ip{constructor(e){super(),this.cN=null,this.c8=null,this.cM=!1,this.c8=e,sd(this,null,null,!0,!0)}bL(){return Mm(this)}};new O().i(Fm,`scala.MatchError`,{de:1,L:1,I:1,t:1,a:1});function Im(){}E=Im.prototype=new D,E.constructor=Im;function Lm(){}Lm.prototype=E,E.k=(function(){return this===Q()}),E.G=(function(){return this.k()?0:1}),E.v=(function(){return this.k()?q().D:new Gm(this.E())});function Rm(e){this.bp=0,this.eL=0,this.eK=null,this.eK=e,this.bp=0,this.eL=e.ab()}E=Rm.prototype=new Wp,E.constructor=Rm;function zm(){}zm.prototype=E,E.A=(function(){return this.bp<this.eL}),E.n=(function(){var e=this.eK.ac(this.bp);return this.bp=1+this.bp|0,e}),new O().i(Rm,`scala.Product$$anon$1`,{dk:1,r:1,s:1,b:1,c:1});function Bm(e){this.c9=null,Wf(this,e)}E=Bm.prototype=new Kf,E.constructor=Bm;function Vm(){}Vm.prototype=E,new O().i(Bm,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dz:1,dy:1,a0:1,a:1,a6:1});function Hm(e){return Dl(e,e.be()+`(`,`, `,`)`)}function Um(){}E=Um.prototype=new Wp,E.constructor=Um;function Wm(){}Wm.prototype=E,E.A=(function(){return!1}),E.hv=(function(){throw new Om(`next on empty iterator`)}),E.G=(function(){return 0}),E.bR=(function(e,t){return this}),E.n=(function(){this.hv()}),new O().i(Um,`scala.collection.Iterator$$anon$19`,{dE:1,r:1,s:1,b:1,c:1});function Gm(e){this.bq=!1,this.eP=null,this.eP=e,this.bq=!1}E=Gm.prototype=new Wp,E.constructor=Gm;function Km(){}Km.prototype=E,E.A=(function(){return!this.bq}),E.n=(function(){return this.bq?q().D.n():(this.bq=!0,this.eP)}),E.bR=(function(e,t){return this.bq||e>0||t===0?q().D:this}),new O().i(Gm,`scala.collection.Iterator$$anon$20`,{dF:1,r:1,s:1,b:1,c:1});function qm(e){for(;;){if(e.J instanceof Ym){var t=e.J;e.J=t.J,e.an=t.an,t.Y!==null&&(e.X===null&&(e.X=t.X),t.X.br=e.Y,e.Y=t.Y);continue}return}}function Jm(e){for(;;)if(e.Y===null)return e.J=null,e.X=null,!1;else{if(e.J=e.Y.hh(),e.X===e.Y&&(e.X=e.X.br),e.Y=e.Y.br,qm(e),e.an)return!0;if(e.J!==null&&e.J.A())return e.an=!0,!0}}function Ym(e){this.J=null,this.Y=null,this.X=null,this.an=!1,this.J=e,this.Y=null,this.X=null,this.an=!1}E=Ym.prototype=new Wp,E.constructor=Ym;function Xm(){}Xm.prototype=E,E.A=(function(){return this.an?!0:this.J===null?!1:this.J.A()?(this.an=!0,!0):Jm(this)}),E.n=(function(){return this.A()?(this.an=!1,this.J.n()):q().D.n()}),E.gv=(function(e){var t=new kl(e,null);return this.Y===null?(this.Y=t,this.X=t):(this.X.br=t,this.X=t),this.J===null&&(this.J=q().D),this}),new O().i(Ym,`scala.collection.Iterator$ConcatIterator`,{aA:1,r:1,s:1,b:1,c:1});function Zm(e){for(;e.af>0;)e.ao.A()?(e.ao.n(),e.af=-1+e.af|0):e.af=0}function Qm(e,t){if(e.O<0)return-1;var n=e.O-t|0;return n<0?0:n}function $m(e,t,n){this.ao=null,this.O=0,this.af=0,this.ao=e,this.O=n,this.af=t}E=$m.prototype=new Wp,E.constructor=$m;function eh(){}eh.prototype=E,E.G=(function(){var e=this.ao.G();if(e<0)return-1;var t=e-this.af|0,n=t<0?0:t;if(this.O<0)return n;var r=this.O;return r<n?r:n}),E.A=(function(){return Zm(this),this.O!==0&&this.ao.A()}),E.n=(function(){return Zm(this),this.O>0?(this.O=-1+this.O|0,this.ao.n()):this.O<0?this.ao.n():q().D.n()}),E.bR=(function(e,t){var n=e>0?e:0;if(t<0)var r=Qm(this,n);else if(t<=n)var r=0;else if(this.O<0)var r=t-n|0;else var i=Qm(this,n),a=t-n|0,r=i<a?i:a;var o=this.af+n|0;return r===0?q().D:o<0?(this.af=2147483647,this.O=0,qf(this,new rp((()=>new $m(this.ao,-2147483647+o|0,r))))):(this.af=o,this.O=r,this)}),new O().i($m,`scala.collection.Iterator$SliceIterator`,{dH:1,r:1,s:1,b:1,c:1});function th(e,t){return t>=0&&e.aB(t)>0}function nh(e,t){if(t<0)throw xm(new Sm,``+t);var n=e.gJ(t);if(n.k())throw xm(new Sm,``+t);return n.a6()}function rh(e,t){return Kg(t)?ih(e,e,t):Xp(e,t)}function ih(e,t,n){for(;;)if(t===n)return!0;else if(!t.k()&&!n.k()&&Pl().R(t.a6(),n.a6())){var r=t.T(),i=n.T();t=r,n=i}else return t.k()&&n.k()}function ah(e){this.bt=null,this.bt=e}E=ah.prototype=new Wp,E.constructor=ah;function oh(){}oh.prototype=E,E.A=(function(){return!this.bt.k()}),E.n=(function(){var e=this.bt.a6();return this.bt=this.bt.T(),e}),new O().i(ah,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dM:1,r:1,s:1,b:1,c:1});function sh(){this.ca=null,Gp(this,gh())}E=sh.prototype=new qp,E.constructor=sh;function ch(){}ch.prototype=E,new O().i(sh,`scala.collection.mutable.Buffer$`,{dW:1,dJ:1,a6:1,a0:1,a:1});var lh;function uh(){return lh||=new sh,lh}function dh(e){this.bv=0,this.eU=0,this.eV=null,this.eV=e,this.bv=0,this.eU=e.ab()}E=dh.prototype=new Wp,E.constructor=dh;function fh(){}fh.prototype=E,E.A=(function(){return this.bv<this.eU}),E.n=(function(){var e=this.eV.ac(this.bv);return this.bv=1+this.bv|0,e}),new O().i(dh,`scala.runtime.ScalaRunTime$$anon$1`,{em:1,r:1,s:1,b:1,c:1});function ph(){}E=ph.prototype=new D,E.constructor=ph;function mh(){}mh.prototype=E,E.d5=(function(e){return this.fw(e)}),E.fw=(function(e){return Ed(mv(new hv),e).fM()}),E.d7=(function(e){return this.fw(e)}),new O().i(ph,`scala.scalajs.js.WrappedArray$`,{es:1,dN:1,a6:1,a0:1,a:1});var hh;function gh(){return hh||=new ph,hh}var _h=class e extends Hd{constructor(e){super(),this.bi=null,this.bi=e,sd(this,`ObserverError: `+Kd().cg(e),null,!0,!0)}aC(){return new Rm(this)}x(){return H().cj(this,-889275714,!1)}m(t){if(this===t)return!0;if(t instanceof e){var n=this.bi,r=t.bi;return n===null?r===null:n.m(r)}else return!1}ab(){return 1}ad(){return`ObserverError`}ac(e){if(e===0)return this.bi;throw xm(new Sm,``+e)}B(){return`ObserverError: `+this.bi}};new O().i(_h,`com.raquo.airstream.core.AirstreamError$ObserverError`,{a8:1,a2:1,t:1,a:1,d:1,S:1});var vh=class e extends Hd{constructor(e,t){super(),this.bk=null,this.bj=null,this.bk=e,this.bj=t,sd(this,`ObserverErrorHandlingError: `+Kd().cg(e)+`; cause: `+Kd().cg(t),null,!0,!0),this.hj(t)}aC(){return new Rm(this)}x(){return H().cj(this,-889275714,!1)}m(t){if(this===t)return!0;if(t instanceof e){var n=this.bk,r=t.bk;if(n===null?r===null:n.m(r)){var i=this.bj,a=t.bj;return i===null?a===null:i.m(a)}else return!1}else return!1}ab(){return 2}ad(){return`ObserverErrorHandlingError`}ac(e){if(e===0)return this.bk;if(e===1)return this.bj;throw xm(new Sm,``+e)}B(){return`ObserverErrorHandlingError: `+this.bk+`; cause: `+this.bj}};new O().i(vh,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{a9:1,a2:1,t:1,a:1,d:1,S:1});var yh=class e extends Hd{constructor(e,t){super(),this.b1=null,this.b0=0,this.b1=e,this.b0=t,sd(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aC(){return new Rm(this)}x(){var e=-889275714;return e=z().e(e,jh(`TransactionDepthExceeded`)),e=z().e(e,z().F(this.b1)),e=z().e(e,this.b0),z().u(e,2)}m(t){return this===t?!0:t instanceof e&&this.b0===t.b0?this.b1===t.b1:!1}ab(){return 2}ad(){return`TransactionDepthExceeded`}ac(e){if(e===0)return this.b1;if(e===1)return this.b0;throw xm(new Sm,``+e)}B(){return`TransactionDepthExceeded: `+this.b1+`; maxDepth: `+this.b0}};new O().i(yh,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aa:1,a2:1,t:1,a:1,d:1,S:1});function bh(e,t){this.c5=null,this.ae=null,this.cB=null,this.aK=null,this.dO=null,this.a8=null,this.dO=e,this.a8=t,this.c5=Q(),Au(this),om(this)}E=bh.prototype=new D,E.constructor=bh;function xh(){}xh.prototype=E,E.a9=(function(e){Is().cd(e,this,void 0)}),E.cf=(function(){return this.ae}),E.fj=(function(e){this.ae=e}),E.fS=(function(e){um(this,e)}),E.fO=(function(e){dm(this,e)}),E.B=(function(){return`ReactiveHtmlElement(`+(this.a8===null?`tag=`+this.dO.da():this.a8.outerHTML)+`)`}),E.aZ=(function(){return this.a8}),new O().i(bh,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{ci:1,a3:1,R:1,ae:1,af:1,cg:1});function Sh(e,t){return Object.is(e,t)}function Ch(e){return fc().db(e)}var wh=new O().i(0,`java.lang.Double`,{an:1,U:1,a:1,Q:1,M:1,X:1},(e=>typeof e==`number`)),Th=new O().i(0,`java.lang.Float`,{cJ:1,U:1,a:1,Q:1,M:1,X:1},(e=>ma(e))),Eh=new O().i(0,`java.lang.Integer`,{cL:1,U:1,a:1,Q:1,M:1,X:1},(e=>pa(e)));function Dh(e,t){return t instanceof I&&e.h===t.h&&e.i===t.i}function Oh(e){return e.h^e.i}var kh=new O().i(0,`java.lang.Long`,{aq:1,U:1,a:1,Q:1,M:1,X:1},(e=>e instanceof I)),Ah=class extends bm{constructor(e){super(),sd(this,e,null,!0,!0)}};new O().i(Ah,`java.lang.NumberFormatException`,{cP:1,ao:1,L:1,I:1,t:1,a:1});function jh(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Mh(e,t){return e===t}var Nh=new O().i(0,`java.lang.String`,{cT:1,a:1,Q:1,a5:1,M:1,X:1},(e=>typeof e==`string`)),Ph=class extends Sm{constructor(){super(),sd(this,null,null,!0,!0)}};new O().i(Ph,`java.lang.StringIndexOutOfBoundsException`,{cW:1,ap:1,L:1,I:1,t:1,a:1});function Fh(){}E=Fh.prototype=new Lm,E.constructor=Fh;function Ih(){}Ih.prototype=E,E.h9=(function(){throw new Om(`None.get`)}),E.ad=(function(){return`None`}),E.ab=(function(){return 0}),E.ac=(function(e){return z().bM(e)}),E.aC=(function(){return new dh(this)}),E.x=(function(){return 2433880}),E.B=(function(){return`None`}),E.E=(function(){this.h9()}),new O().i(Fh,`scala.None$`,{df:1,av:1,b:1,S:1,d:1,a:1});var Lh;function Q(){return Lh||=new Fh,Lh}function $(e){this.bb=null,this.bb=e}E=$.prototype=new Lm,E.constructor=$;function Rh(){}Rh.prototype=E,E.E=(function(){return this.bb}),E.ad=(function(){return`Some`}),E.ab=(function(){return 1}),E.ac=(function(e){return e===0?this.bb:z().bM(e)}),E.aC=(function(){return new dh(this)}),E.x=(function(){return H().cj(this,-889275714,!1)}),E.B=(function(){return R().gd(this)}),E.m=(function(e){return this===e||e instanceof $&&Pl().R(this.bb,e.bb)}),new O().i($,`scala.Some`,{aw:1,av:1,b:1,S:1,d:1,a:1});function zh(){}E=zh.prototype=new D,E.constructor=zh;function Bh(){}Bh.prototype=E,E.be=(function(){return this.bh()}),E.aA=(function(e){El(this,e)}),E.bx=(function(e,t,n,r){return Ol(this,e,t,n,r)}),E.G=(function(){return-1});function Vh(e,t){return e.N=t,e.l=0,e.I=rl().bf(e.N),e}function Hh(){this.N=null,this.l=0,this.I=0}E=Hh.prototype=new Wp,E.constructor=Hh;function Uh(){}Uh.prototype=E,E.G=(function(){return this.I-this.l|0}),E.A=(function(){return this.l<this.I}),E.n=(function(){this.l>=rl().bf(this.N)&&q().D.n();var e=R().bd(this.N,this.l);return this.l=1+this.l|0,e}),E.ce=(function(e){if(e>0){var t=this.l+e|0;if(t<0)var n=this.I;else var r=this.I,n=r<t?r:t;this.l=n}return this}),new O().i(Hh,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Wh(e,t){return t<0?0:t>e.a2?e.a2:t}function Gh(e){this.eO=null,this.am=0,this.a2=0,this.eO=e,this.am=0,this.a2=e.t()}E=Gh.prototype=new Wp,E.constructor=Gh;function Kh(){}Kh.prototype=E,E.G=(function(){return this.a2}),E.A=(function(){return this.a2>0}),E.n=(function(){if(this.a2>0){var e=this.eO.w(this.am);return this.am=1+this.am|0,this.a2=-1+this.a2|0,e}else return q().D.n()}),E.ce=(function(e){if(e>0){this.am=this.am+e|0;var t=this.a2-e|0;this.a2=t<0?0:t}return this}),E.bR=(function(e,t){var n=Wh(this,e),r=Wh(this,t)-n|0;return this.a2=r<0?0:r,this.am=this.am+n|0,this}),new O().i(Gh,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dC:1,r:1,s:1,b:1,c:1,a:1});function qh(e){return e.cY||=(e.cZ=new D_(new ya(0)),!0),e.cZ}function Jh(e){return e.cY?e.cZ:qh(e)}function Yh(){this.cZ=null,this.g8=null,this.cY=!1,Zh=this,this.g8=new Bm(this)}E=Yh.prototype=new D,E.constructor=Yh;function Xh(){}Xh.prototype=E,E.h6=(function(e,t){return e instanceof l_?e:this.fQ(hd().fu(e,t))}),E.fQ=(function(e){if(e===null)return null;if(e instanceof ya)return new D_(e);if(e instanceof Ta)return new C_(e);if(e instanceof Oa)return new y_(e);if(e instanceof Ea)return new T_(e);if(e instanceof Da)return new x_(e);if(e instanceof Sa)return new __(e);if(e instanceof Ca)return new h_(e);if(e instanceof wa)return new k_(e);if(e instanceof xa)return new p_(e);if(Zc(e,1))return new j_(e);throw new Fm(e)}),E.d6=(function(e,t){return this.h6(e,t)}),new O().i(Yh,`scala.collection.immutable.ArraySeq$`,{dQ:1,aC:1,ay:1,ax:1,az:1,a:1});var Zh;function Qh(){return Zh||=new Yh,Zh}function $h(){this.g9=null,this.eR=null,tg=this,this.g9=new Bm(this),this.eR=new Z_(new ya(0))}E=$h.prototype=new D,E.constructor=$h;function eg(){}eg.prototype=E,E.h7=(function(e,t){return this.ho(hd().fu(e,t))}),E.ho=(function(e){if(e===null)return null;if(e instanceof ya)return new Z_(e);if(e instanceof Ta)return new q_(e);if(e instanceof Oa)return new U_(e);if(e instanceof Ea)return new Y_(e);if(e instanceof Da)return new G_(e);if(e instanceof Sa)return new V_(e);if(e instanceof Ca)return new z_(e);if(e instanceof wa)return new $_(e);if(e instanceof xa)return new L_(e);if(Zc(e,1))return new tv(e);throw new Fm(e)}),E.d6=(function(e,t){return this.h7(e,t)}),new O().i($h,`scala.collection.mutable.ArraySeq$`,{dU:1,aC:1,ay:1,ax:1,az:1,a:1});var tg;function ng(){return tg||=new $h,tg}function rg(){}E=rg.prototype=new gm,E.constructor=rg;function ig(){}ig.prototype=E;function ag(e){this.N=null,this.l=0,this.I=0,this.cP=null,this.cP=e,Vh(this,e)}E=ag.prototype=new Uh,E.constructor=ag;function og(){}og.prototype=E,E.hw=(function(){this.l>=this.cP.b.length&&q().D.n();var e=this.cP.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hw()}),new O().i(ag,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dp:1,N:1,r:1,s:1,b:1,c:1,a:1});function sg(e){this.N=null,this.l=0,this.I=0,this.cQ=null,this.cQ=e,Vh(this,e)}E=sg.prototype=new Uh,E.constructor=sg;function cg(){}cg.prototype=E,E.hx=(function(){this.l>=this.cQ.b.length&&q().D.n();var e=this.cQ.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return ha(this.hx())}),new O().i(sg,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dq:1,N:1,r:1,s:1,b:1,c:1,a:1});function lg(e){this.N=null,this.l=0,this.I=0,this.cR=null,this.cR=e,Vh(this,e)}E=lg.prototype=new Uh,E.constructor=lg;function ug(){}ug.prototype=E,E.hy=(function(){this.l>=this.cR.b.length&&q().D.n();var e=this.cR.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hy()}),new O().i(lg,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dr:1,N:1,r:1,s:1,b:1,c:1,a:1});function dg(e){this.N=null,this.l=0,this.I=0,this.cS=null,this.cS=e,Vh(this,e)}E=dg.prototype=new Uh,E.constructor=dg;function fg(){}fg.prototype=E,E.hz=(function(){this.l>=this.cS.b.length&&q().D.n();var e=this.cS.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hz()}),new O().i(dg,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{ds:1,N:1,r:1,s:1,b:1,c:1,a:1});function pg(e){this.N=null,this.l=0,this.I=0,this.cT=null,this.cT=e,Vh(this,e)}E=pg.prototype=new Uh,E.constructor=pg;function mg(){}mg.prototype=E,E.hA=(function(){this.l>=this.cT.b.length&&q().D.n();var e=this.cT.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hA()}),new O().i(pg,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dt:1,N:1,r:1,s:1,b:1,c:1,a:1});function hg(e){this.N=null,this.l=0,this.I=0,this.cU=null,this.cU=e,Vh(this,e)}E=hg.prototype=new Uh,E.constructor=hg;function gg(){}gg.prototype=E,E.hB=(function(){this.l>=this.cU.b.length&&q().D.n();var e=this.cU.b[this.l],t=e.h,n=e.i;return this.l=1+this.l|0,new I(t,n)}),E.n=(function(){return this.hB()}),new O().i(hg,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{du:1,N:1,r:1,s:1,b:1,c:1,a:1});function _g(e){this.N=null,this.l=0,this.I=0,this.cV=null,this.cV=e,Vh(this,e)}E=_g.prototype=new Uh,E.constructor=_g;function vg(){}vg.prototype=E,E.hC=(function(){this.l>=this.cV.b.length&&q().D.n();var e=this.cV.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hC()}),new O().i(_g,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dv:1,N:1,r:1,s:1,b:1,c:1,a:1});function yg(e){this.N=null,this.l=0,this.I=0,this.eN=null,this.eN=e,Vh(this,e)}E=yg.prototype=new Uh,E.constructor=yg;function bg(){}bg.prototype=E,E.hD=(function(){this.l>=this.eN.b.length&&q().D.n(),this.l=1+this.l|0}),E.n=(function(){this.hD()}),new O().i(yg,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dw:1,N:1,r:1,s:1,b:1,c:1,a:1});function xg(e){this.N=null,this.l=0,this.I=0,this.cW=null,this.cW=e,Vh(this,e)}E=xg.prototype=new Uh,E.constructor=xg;function Sg(){}Sg.prototype=E,E.hE=(function(){this.l>=this.cW.b.length&&q().D.n();var e=this.cW.b[this.l];return this.l=1+this.l|0,e}),E.n=(function(){return this.hE()}),new O().i(xg,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dx:1,N:1,r:1,s:1,b:1,c:1,a:1});function Cg(e){return e.be()+`(<not computed>)`}function wg(){}E=wg.prototype=new D,E.constructor=wg;function Tg(){}Tg.prototype=E;var Eg=class e extends Ip{constructor(e){super(),this.a3=null,this.a3=e,sd(this,null,null,!0,!0)}bL(){return na(this.a3)}ad(){return`JavaScriptException`}ab(){return 1}ac(e){return e===0?this.a3:z().bM(e)}aC(){return new dh(this)}x(){return H().cj(this,-889275714,!1)}m(t){return this===t||t instanceof e&&Pl().R(this.a3,t.a3)}};new O().i(Eg,`scala.scalajs.js.JavaScriptException`,{b6:1,L:1,I:1,t:1,a:1,S:1,d:1});function Dg(e,t){typeof console<`u`&&(e.eC&&console.error?console.error(t):console.log(t))}function Og(e){this.eC=!1,this.bn=null,this.eC=e,new Cm,this.bn=``}E=Og.prototype=new ig,E.constructor=Og;function kg(){}kg.prototype=E,E.bN=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bn=``+this.bn+t,t=``;else{var r=this.bn,i=t;Dg(this,``+r+i.substring(0,n)),this.bn=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new O().i(Og,`java.lang.JSConsoleBasedPrintStream`,{cM:1,cD:1,cC:1,aj:1,ah:1,al:1,ai:1,ak:1});function Ag(e,t,n){for(;;)if(t<=0||n.k())return n;else{var r=-1+t|0,i=n.T();t=r,n=i}}function jg(){this.d0=null}E=jg.prototype=new Tg,E.constructor=jg;function Mg(){}Mg.prototype=E,E.B=(function(){return this.d0}),E.m=(function(e){return this===e}),E.x=(function(){return ua(this)});function Ng(){}E=Ng.prototype=new Bh,E.constructor=Ng;function Pg(){}Pg.prototype=E,E.B=(function(){return Cg(this)});function Fg(){this.d0=null,this.d0=`Any`}E=Fg.prototype=new Mg,E.constructor=Fg;function Ig(){}Ig.prototype=E,E.hT=(function(){return ka.l()}),E.hu=(function(e){return new ya(e)}),new O().i(Fg,`scala.reflect.ManifestFactory$AnyManifest$`,{e8:1,ea:1,e9:1,e7:1,e6:1,e5:1,eb:1,a:1,d:1});var Lg;function Rg(){return Lg||=new Fg,Lg}function zg(e,t){return e===t?!0:Bg(t)&&t.fg(e)?e.dd(t):!1}function Bg(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Vg(){}E=Vg.prototype=new Bh,E.constructor=Vg;function Hg(){}Hg.prototype=E,E.fg=(function(e){return!0}),E.m=(function(e){return zg(this,e)}),E.x=(function(){return H().hU(this)}),E.B=(function(){return Hm(this)}),E.fA=(function(e){return Jp(this,e)}),E.k=(function(){return Yp(this)}),E.dd=(function(e){return Xp(this,e)}),E.d9=(function(e){return this.fA(e|0)});function Ug(){}E=Ug.prototype=new Pg,E.constructor=Ug;function Wg(){}Wg.prototype=E;function Gg(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Kg(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function qg(e,t){return e.bs=t,e}function Jg(){this.bs=null}E=Jg.prototype=new Wg,E.constructor=Jg;function Yg(){}Yg.prototype=E,E.w=(function(e){return this.bs.w(e)}),E.t=(function(){return this.bs.t()}),E.k=(function(){return this.bs.k()});function Xg(){this.dz=null,this.dA=!1,this.dB=null,this.dC=!1,this.fW=null,this.cs=null,this.fV=null,this.dD=null,this.dE=!1,es(this),Jo(this),Ko(this),qo(this)}E=Xg.prototype=new D,E.constructor=Xg;function Zg(){}Zg.prototype=E,E.fx=(function(){return this.dA||=(this.dz=ju(new Mu,`h3`,!1),!0),this.dz}),E.bS=(function(){return this.dC||=(this.dB=ju(new Mu,`span`,!1),!0),this.dB}),E.i2=(function(){return this.dE||=(this.dD=new xp(this),!0),this.dD}),new O().i(Xg,`com.raquo.laminar.api.package$$anon$1`,{bz:1,bL:1,bE:1,bJ:1,bI:1,bK:1,bG:1,bx:1,bt:1,bw:1,ac:1,ad:1,ab:1,bu:1});function Qg(e){this.bs=null,qg(this,e)}E=Qg.prototype=new Yg,E.constructor=Qg;function $g(){}$g.prototype=E,E.v=(function(){return new Gh(this)}),E.bh=(function(){return`IndexedSeqView`}),E.aB=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),E.G=(function(){return this.t()}),new O().i(Qg,`scala.collection.IndexedSeqView$Id`,{dB:1,dL:1,dl:1,dm:1,h:1,i:1,b:1,k:1,c:1,j:1,dO:1,a:1,dK:1,l:1,dA:1,o:1});function e_(){}E=e_.prototype=new Hg,E.constructor=e_;function t_(){}t_.prototype=E;function n_(e,t){return!i_(t)||e.t()===t.t()}function r_(e,t){if(i_(t)){if(e===t)return!0;var n=e.t(),r=n===t.t();if(r){var i=0,a=e.f5(),o=t.f5(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=Pl().R(e.w(i),t.w(i)),i=1+i|0;if(i<n&&r)for(var p=e.v().ce(i),m=t.v().ce(i);r&&p.A();)r=Pl().R(p.n(),m.n())}return r}else return Xp(e,t)}function i_(e){return!!(e&&e.$classData&&e.$classData.n.w)}function a_(){}E=a_.prototype=new Hg,E.constructor=a_;function o_(){}o_.prototype=E;function s_(){}E=s_.prototype=new o_,E.constructor=s_;function c_(){}c_.prototype=E,E.f3=(function(e){return Ed(this,e)});function l_(){}E=l_.prototype=new t_,E.constructor=l_;function u_(){}u_.prototype=E,E.fg=(function(e){return n_(this,e)}),E.dd=(function(e){return r_(this,e)}),E.bh=(function(){return`IndexedSeq`}),E.aB=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),E.G=(function(){return this.t()}),E.hp=(function(e){for(var t=new ya(this.t()),n=0;n<t.b.length;)t.b[n]=e.j(this.w(n)),n=1+n|0;return Qh().fQ(t)}),E.be=(function(){return`ArraySeq`}),E.f5=(function(){return 2147483647}),E.fC=(function(e){return this.hp(e)});function d_(){}E=d_.prototype=new o_,E.constructor=d_;function f_(){}f_.prototype=E,E.bh=(function(){return`IndexedSeq`}),E.aB=(function(e){var t=this.t();return t===e?0:t<e?-1:1}),E.G=(function(){return this.t()}),E.be=(function(){return`ArraySeq`}),E.m=(function(e){return e instanceof d_&&rl().bf(this.a4())!==rl().bf(e.a4())?!1:zg(this,e)});function p_(e){this.aO=null,this.aO=e}E=p_.prototype=new u_,E.constructor=p_;function m_(){}m_.prototype=E,E.t=(function(){return this.aO.b.length}),E.x=(function(){var e=H();return e.ff(this.aO,e.C)}),E.m=(function(e){return e instanceof p_?F().fs(this.aO,e.aO):zg(this,e)}),E.v=(function(){return new xg(this.aO)}),E.bG=(function(e){return this.aO.b[e]}),E.j=(function(e){return this.bG(e|0)}),E.w=(function(e){return this.bG(e)}),new O().i(p_,`scala.collection.immutable.ArraySeq$ofBoolean`,{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function h_(e){this.aP=null,this.aP=e}E=h_.prototype=new u_,E.constructor=h_;function g_(){}g_.prototype=E,E.t=(function(){return this.aP.b.length}),E.by=(function(e){return this.aP.b[e]}),E.x=(function(){var e=H();return e.f7(this.aP,e.C)}),E.m=(function(e){return e instanceof h_?F().fl(this.aP,e.aP):zg(this,e)}),E.v=(function(){return new ag(this.aP)}),E.j=(function(e){return this.by(e|0)}),E.w=(function(e){return this.by(e)}),new O().i(h_,`scala.collection.immutable.ArraySeq$ofByte`,{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function __(e){this.ap=null,this.ap=e}E=__.prototype=new u_,E.constructor=__;function v_(){}v_.prototype=E,E.t=(function(){return this.ap.b.length}),E.bz=(function(e){return this.ap.b[e]}),E.x=(function(){var e=H();return e.f8(this.ap,e.C)}),E.m=(function(e){return e instanceof __?F().fm(this.ap,e.ap):zg(this,e)}),E.v=(function(){return new sg(this.ap)}),E.bx=(function(e,t,n,r){return new V_(this.ap).bx(e,t,n,r)}),E.j=(function(e){return ha(this.bz(e|0))}),E.w=(function(e){return ha(this.bz(e))}),new O().i(__,`scala.collection.immutable.ArraySeq$ofChar`,{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function y_(e){this.aQ=null,this.aQ=e}E=y_.prototype=new u_,E.constructor=y_;function b_(){}b_.prototype=E,E.t=(function(){return this.aQ.b.length}),E.x=(function(){var e=H();return e.f9(this.aQ,e.C)}),E.m=(function(e){return e instanceof y_?F().fn(this.aQ,e.aQ):zg(this,e)}),E.v=(function(){return new lg(this.aQ)}),E.bB=(function(e){return this.aQ.b[e]}),E.j=(function(e){return this.bB(e|0)}),E.w=(function(e){return this.bB(e)}),new O().i(y_,`scala.collection.immutable.ArraySeq$ofDouble`,{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function x_(e){this.aR=null,this.aR=e}E=x_.prototype=new u_,E.constructor=x_;function S_(){}S_.prototype=E,E.t=(function(){return this.aR.b.length}),E.x=(function(){var e=H();return e.fa(this.aR,e.C)}),E.m=(function(e){return e instanceof x_?F().fo(this.aR,e.aR):zg(this,e)}),E.v=(function(){return new dg(this.aR)}),E.bC=(function(e){return this.aR.b[e]}),E.j=(function(e){return this.bC(e|0)}),E.w=(function(e){return this.bC(e)}),new O().i(x_,`scala.collection.immutable.ArraySeq$ofFloat`,{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function C_(e){this.aS=null,this.aS=e}E=C_.prototype=new u_,E.constructor=C_;function w_(){}w_.prototype=E,E.t=(function(){return this.aS.b.length}),E.x=(function(){var e=H();return e.fb(this.aS,e.C)}),E.m=(function(e){return e instanceof C_?F().fp(this.aS,e.aS):zg(this,e)}),E.v=(function(){return new pg(this.aS)}),E.bD=(function(e){return this.aS.b[e]}),E.j=(function(e){return this.bD(e|0)}),E.w=(function(e){return this.bD(e)}),new O().i(C_,`scala.collection.immutable.ArraySeq$ofInt`,{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function T_(e){this.aT=null,this.aT=e}E=T_.prototype=new u_,E.constructor=T_;function E_(){}E_.prototype=E,E.t=(function(){return this.aT.b.length}),E.x=(function(){var e=H();return e.fc(this.aT,e.C)}),E.m=(function(e){return e instanceof T_?F().fq(this.aT,e.aT):zg(this,e)}),E.v=(function(){return new hg(this.aT)}),E.bE=(function(e){return this.aT.b[e]}),E.j=(function(e){return this.bE(e|0)}),E.w=(function(e){return this.bE(e)}),new O().i(T_,`scala.collection.immutable.ArraySeq$ofLong`,{aL:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function D_(e){this.aU=null,this.aU=e}E=D_.prototype=new u_,E.constructor=D_;function O_(){}O_.prototype=E,E.t=(function(){return this.aU.b.length}),E.w=(function(e){return this.aU.b[e]}),E.x=(function(){var e=H();return e.f6(this.aU,e.C)}),E.m=(function(e){return e instanceof D_?hd().ft(this.aU,e.aU):zg(this,e)}),E.v=(function(){return Vh(new Hh,this.aU)}),E.j=(function(e){return this.w(e|0)}),new O().i(D_,`scala.collection.immutable.ArraySeq$ofRef`,{aM:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function k_(e){this.aV=null,this.aV=e}E=k_.prototype=new u_,E.constructor=k_;function A_(){}A_.prototype=E,E.t=(function(){return this.aV.b.length}),E.bA=(function(e){return this.aV.b[e]}),E.x=(function(){var e=H();return e.fd(this.aV,e.C)}),E.m=(function(e){return e instanceof k_?F().fr(this.aV,e.aV):zg(this,e)}),E.v=(function(){return new _g(this.aV)}),E.j=(function(e){return this.bA(e|0)}),E.w=(function(e){return this.bA(e)}),new O().i(k_,`scala.collection.immutable.ArraySeq$ofShort`,{aN:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function j_(e){this.bc=null,this.bc=e}E=j_.prototype=new u_,E.constructor=j_;function M_(){}M_.prototype=E,E.t=(function(){return this.bc.b.length}),E.x=(function(){var e=H();return e.fe(this.bc,e.C)}),E.m=(function(e){return e instanceof j_?this.bc.b.length===e.bc.b.length:zg(this,e)}),E.v=(function(){return new yg(this.bc)}),E.bF=(function(e){}),E.j=(function(e){this.bF(e|0)}),E.w=(function(e){this.bF(e)}),new O().i(j_,`scala.collection.immutable.ArraySeq$ofUnit`,{aO:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function N_(e,t,n,r){for(;;)if(t===r)return n.k()?0:1;else if(n.k())return-1;else{var i=1+t|0,a=n.T();t=i,n=a}}function P_(e,t,n){for(;;)if(t===n)return!0;else{var r=t.k(),i=n.k();if(!(r||i)&&Pl().R(t.a6(),n.a6())){var a=t.T(),o=n.T();t=a,n=o}else return r&&i}}function F_(){}E=F_.prototype=new t_,E.constructor=F_;function I_(){}I_.prototype=E,E.v=(function(){return new ah(this)}),E.bh=(function(){return`LinearSeq`}),E.fA=(function(e){return th(this,e)}),E.w=(function(e){return nh(this,e)}),E.dd=(function(e){return rh(this,e)}),E.k=(function(){return this===cv()}),E.hq=(function(e){if(this===cv())return cv();for(var t=new rv(e.j(this.a6()),cv()),n=t,r=this.T();r!==cv();){var i=new rv(e.j(r.a6()),cv());n.cb=i,n=i,r=r.T()}return t}),E.aA=(function(e){for(var t=this;!t.k();)e.j(t.a6()),t=t.T()}),E.t=(function(){for(var e=this,t=0;!e.k();)t=1+t|0,e=e.T();return t}),E.aB=(function(e){return e<0?1:N_(this,0,this,e)}),E.be=(function(){return`List`}),E.m=(function(e){return e instanceof F_?P_(this,this,e):zg(this,e)}),E.j=(function(e){return nh(this,e|0)}),E.d9=(function(e){return th(this,e|0)}),E.gJ=(function(e){return Ag(this,e,this)}),E.fC=(function(e){return this.hq(e)});function L_(e){this.aq=null,this.aq=e}E=L_.prototype=new f_,E.constructor=L_;function R_(){}R_.prototype=E,E.t=(function(){return this.aq.b.length}),E.x=(function(){var e=H();return e.ff(this.aq,e.C)}),E.m=(function(e){return e instanceof L_?F().fs(this.aq,e.aq):d_.prototype.m.call(this,e)}),E.v=(function(){return new xg(this.aq)}),E.bG=(function(e){return this.aq.b[e]}),E.j=(function(e){return this.bG(e|0)}),E.w=(function(e){return this.bG(e)}),E.a4=(function(){return this.aq}),new O().i(L_,`scala.collection.mutable.ArraySeq$ofBoolean`,{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function z_(e){this.ar=null,this.ar=e}E=z_.prototype=new f_,E.constructor=z_;function B_(){}B_.prototype=E,E.t=(function(){return this.ar.b.length}),E.by=(function(e){return this.ar.b[e]}),E.x=(function(){var e=H();return e.f7(this.ar,e.C)}),E.m=(function(e){return e instanceof z_?F().fl(this.ar,e.ar):d_.prototype.m.call(this,e)}),E.v=(function(){return new ag(this.ar)}),E.j=(function(e){return this.by(e|0)}),E.w=(function(e){return this.by(e)}),E.a4=(function(){return this.ar}),new O().i(z_,`scala.collection.mutable.ArraySeq$ofByte`,{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function V_(e){this.Z=null,this.Z=e}E=V_.prototype=new f_,E.constructor=V_;function H_(){}H_.prototype=E,E.t=(function(){return this.Z.b.length}),E.bz=(function(e){return this.Z.b[e]}),E.x=(function(){var e=H();return e.f8(this.Z,e.C)}),E.m=(function(e){return e instanceof V_?F().fm(this.Z,e.Z):d_.prototype.m.call(this,e)}),E.v=(function(){return new sg(this.Z)}),E.bx=(function(e,t,n,r){var i=e.P;t.length!==0&&(i.y=``+i.y+t);var a=this.Z.b.length;if(a!==0)if(n===``)i.gi(this.Z);else{i.t();var o=this.Z.b[0],s=``+oa(o);i.y+=s;for(var c=1;c<a;){i.y=``+i.y+n;var l=this.Z.b[c],u=``+oa(l);i.y+=u,c=1+c|0}}return r.length!==0&&(i.y=``+i.y+r),e}),E.j=(function(e){return ha(this.bz(e|0))}),E.w=(function(e){return ha(this.bz(e))}),E.a4=(function(){return this.Z}),new O().i(V_,`scala.collection.mutable.ArraySeq$ofChar`,{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function U_(e){this.as=null,this.as=e}E=U_.prototype=new f_,E.constructor=U_;function W_(){}W_.prototype=E,E.t=(function(){return this.as.b.length}),E.x=(function(){var e=H();return e.f9(this.as,e.C)}),E.m=(function(e){return e instanceof U_?F().fn(this.as,e.as):d_.prototype.m.call(this,e)}),E.v=(function(){return new lg(this.as)}),E.bB=(function(e){return this.as.b[e]}),E.j=(function(e){return this.bB(e|0)}),E.w=(function(e){return this.bB(e)}),E.a4=(function(){return this.as}),new O().i(U_,`scala.collection.mutable.ArraySeq$ofDouble`,{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function G_(e){this.at=null,this.at=e}E=G_.prototype=new f_,E.constructor=G_;function K_(){}K_.prototype=E,E.t=(function(){return this.at.b.length}),E.x=(function(){var e=H();return e.fa(this.at,e.C)}),E.m=(function(e){return e instanceof G_?F().fo(this.at,e.at):d_.prototype.m.call(this,e)}),E.v=(function(){return new dg(this.at)}),E.bC=(function(e){return this.at.b[e]}),E.j=(function(e){return this.bC(e|0)}),E.w=(function(e){return this.bC(e)}),E.a4=(function(){return this.at}),new O().i(G_,`scala.collection.mutable.ArraySeq$ofFloat`,{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function q_(e){this.au=null,this.au=e}E=q_.prototype=new f_,E.constructor=q_;function J_(){}J_.prototype=E,E.t=(function(){return this.au.b.length}),E.x=(function(){var e=H();return e.fb(this.au,e.C)}),E.m=(function(e){return e instanceof q_?F().fp(this.au,e.au):d_.prototype.m.call(this,e)}),E.v=(function(){return new pg(this.au)}),E.bD=(function(e){return this.au.b[e]}),E.j=(function(e){return this.bD(e|0)}),E.w=(function(e){return this.bD(e)}),E.a4=(function(){return this.au}),new O().i(q_,`scala.collection.mutable.ArraySeq$ofInt`,{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Y_(e){this.av=null,this.av=e}E=Y_.prototype=new f_,E.constructor=Y_;function X_(){}X_.prototype=E,E.t=(function(){return this.av.b.length}),E.x=(function(){var e=H();return e.fc(this.av,e.C)}),E.m=(function(e){return e instanceof Y_?F().fq(this.av,e.av):d_.prototype.m.call(this,e)}),E.v=(function(){return new hg(this.av)}),E.bE=(function(e){return this.av.b[e]}),E.j=(function(e){return this.bE(e|0)}),E.w=(function(e){return this.bE(e)}),E.a4=(function(){return this.av}),new O().i(Y_,`scala.collection.mutable.ArraySeq$ofLong`,{aX:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Z_(e){this.aw=null,this.aw=e}E=Z_.prototype=new f_,E.constructor=Z_;function Q_(){}Q_.prototype=E,E.t=(function(){return this.aw.b.length}),E.w=(function(e){return this.aw.b[e]}),E.x=(function(){var e=H();return e.f6(this.aw,e.C)}),E.m=(function(e){return e instanceof Z_?hd().ft(this.aw,e.aw):d_.prototype.m.call(this,e)}),E.v=(function(){return Vh(new Hh,this.aw)}),E.j=(function(e){return this.w(e|0)}),E.a4=(function(){return this.aw}),new O().i(Z_,`scala.collection.mutable.ArraySeq$ofRef`,{aY:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $_(e){this.ax=null,this.ax=e}E=$_.prototype=new f_,E.constructor=$_;function ev(){}ev.prototype=E,E.t=(function(){return this.ax.b.length}),E.bA=(function(e){return this.ax.b[e]}),E.x=(function(){var e=H();return e.fd(this.ax,e.C)}),E.m=(function(e){return e instanceof $_?F().fr(this.ax,e.ax):d_.prototype.m.call(this,e)}),E.v=(function(){return new _g(this.ax)}),E.j=(function(e){return this.bA(e|0)}),E.w=(function(e){return this.bA(e)}),E.a4=(function(){return this.ax}),new O().i($_,`scala.collection.mutable.ArraySeq$ofShort`,{aZ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function tv(e){this.aW=null,this.aW=e}E=tv.prototype=new f_,E.constructor=tv;function nv(){}nv.prototype=E,E.t=(function(){return this.aW.b.length}),E.x=(function(){var e=H();return e.fe(this.aW,e.C)}),E.m=(function(e){return e instanceof tv?this.aW.b.length===e.aW.b.length:d_.prototype.m.call(this,e)}),E.v=(function(){return new yg(this.aW)}),E.bF=(function(e){}),E.j=(function(e){this.bF(e|0)}),E.w=(function(e){this.bF(e)}),E.a4=(function(){return this.aW}),new O().i(tv,`scala.collection.mutable.ArraySeq$ofUnit`,{b0:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function rv(e,t){this.cX=null,this.cb=null,this.cX=e,this.cb=t}E=rv.prototype=new I_,E.constructor=rv;function iv(){}iv.prototype=E,E.a6=(function(){return this.cX}),E.ad=(function(){return`::`}),E.ab=(function(){return 2}),E.ac=(function(e){switch(e){case 0:return this.cX;case 1:return this.cb;default:return z().bM(e)}}),E.aC=(function(){return new dh(this)}),E.T=(function(){return this.cb}),new O().i(rv,`scala.collection.immutable.$colon$colon`,{dP:1,a7:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aP:1,a1:1,aB:1,aQ:1,aD:1,q:1,p:1,A:1,aE:1,a:1,S:1});function av(){}E=av.prototype=new I_,E.constructor=av;function ov(){}ov.prototype=E,E.hg=(function(){throw new Om(`head of empty list`)}),E.i5=(function(){throw new Dm(`tail of empty list`)}),E.G=(function(){return 0}),E.v=(function(){return q().D}),E.ad=(function(){return`Nil`}),E.ab=(function(){return 0}),E.ac=(function(e){return z().bM(e)}),E.aC=(function(){return new dh(this)}),E.T=(function(){this.i5()}),E.a6=(function(){this.hg()}),new O().i(av,`scala.collection.immutable.Nil$`,{dS:1,a7:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aP:1,a1:1,aB:1,aQ:1,aD:1,q:1,p:1,A:1,aE:1,a:1,S:1});var sv;function cv(){return sv||=new av,sv}function lv(e,t){return e.P=t,e}function uv(e){return lv(e,new Lp),e}function dv(){this.P=null}E=dv.prototype=new o_,E.constructor=dv;function fv(){}fv.prototype=E,E.bh=(function(){return`IndexedSeq`}),E.v=(function(){return new Gh(new Qg(this))}),E.aB=(function(e){var t=this.P.t();return t===e?0:t<e?-1:1}),E.f3=(function(e){return Ed(this,e)}),E.t=(function(){return this.P.t()}),E.G=(function(){return this.P.t()}),E.gf=(function(e){var t=this.P,n=``+oa(e);return t.y+=n,this}),E.B=(function(){return this.P.y}),E.k=(function(){return this.P.t()===0}),E.fM=(function(){return this.P.y}),E.d3=(function(e){return this.gf(ga(e))}),E.j=(function(e){var t=e|0;return ha(this.P.fh(t))}),E.w=(function(e){return ha(this.P.fh(e))}),new O().i(dv,`scala.collection.mutable.StringBuilder`,{e0:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,dY:1,b1:1,b3:1,b2:1,D:1,n:1,o:1,E:1,a5:1,a:1});function pv(e,t){return e.aX=t,e}function mv(e){return pv(e,[]),e}function hv(){this.aX=null}E=hv.prototype=new c_,E.constructor=hv;function gv(){}gv.prototype=E,E.bh=(function(){return`IndexedSeq`}),E.v=(function(){return new Gh(new Qg(this))}),E.aB=(function(e){var t=this.aX.length|0;return t===e?0:t<e?-1:1}),E.w=(function(e){return this.aX[e]}),E.t=(function(){return this.aX.length|0}),E.G=(function(){return this.aX.length|0}),E.be=(function(){return`WrappedArray`}),E.fM=(function(){return this}),E.d3=(function(e){return this.aX.push(e),this}),E.j=(function(e){var t=e|0;return this.aX[t]}),new O().i(hv,`scala.scalajs.js.WrappedArray`,{er:1,dT:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,dV:1,b3:1,b2:1,dZ:1,q:1,p:1,D:1,n:1,o:1,E:1,dX:1,b1:1,a:1}),Xi=new I(0,0),Ma.z=Xi,Zs(new(Nh.r()).C([]));