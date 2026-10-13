var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap;var ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const te=e=>new ee(typeof e==`string`?e:e+``,void 0,m),g=(e,...t)=>new ee(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),ne=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},re=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return te(t)})(e):e,{is:ie,defineProperty:ae,getOwnPropertyDescriptor:oe,getOwnPropertyNames:se,getOwnPropertySymbols:ce,getPrototypeOf:le}=Object,ue=globalThis,de=ue.trustedTypes,fe=de?de.emptyScript:``,pe=ue.reactiveElementPolyfillSupport,me=(e,t)=>e,he={toAttribute(e,t){switch(t){case Boolean:e=e?fe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ge=(e,t)=>!ie(e,t),_e={attribute:!0,type:String,converter:he,reflect:!1,useDefault:!1,hasChanged:ge};Symbol.metadata??=Symbol(`metadata`),ue.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_e){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ae(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=oe(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_e}static _$Ei(){if(this.hasOwnProperty(me(`elementProperties`)))return;let e=le(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(me(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(me(`properties`))){let e=this.properties,t=[...se(e),...ce(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(re(e))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ne(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?he:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?he:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ge)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:`open`},ve[me(`elementProperties`)]=new Map,ve[me(`finalized`)]=new Map,pe?.({ReactiveElement:ve}),(ue.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ye=globalThis,be=ye.trustedTypes,xe=be?be.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Se=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce=`?`+_,we=`<${Ce}>`,Te=document,Ee=()=>Te.createComment(``),De=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Oe=Array.isArray,ke=e=>Oe(e)||typeof e?.[Symbol.iterator]==`function`,Ae=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Me=/-->/g,Ne=/>/g,Pe=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Fe=/'/g,Ie=/"/g,Le=/^(?:script|style|textarea|title)$/i,Re=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),ze=Symbol.for(`lit-noChange`),v=Symbol.for(`lit-nothing`),Be=new WeakMap,Ve=Te.createTreeWalker(Te,129);function He(e,t){if(!Oe(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return xe===void 0?t:xe.createHTML(t)}const Ue=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=je;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===je?c[1]===`!--`?o=Me:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Pe):(Le.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Pe):o=Ne:o===Pe?c[0]===`>`?(o=i??je,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Pe:c[3]===`"`?Ie:Fe):o===Ie||o===Fe?o=Pe:o===Me||o===Ne?o=je:(o=Pe,i=void 0);let d=o===Pe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===je?n+we:l>=0?(r.push(s),n.slice(0,l)+Se+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[He(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var We=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ue(t,n);if(this.el=e.createElement(l,r),Ve.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ve.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Se)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ye:r[1]===`?`?Xe:r[1]===`@`?Ze:Je}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Le.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=be?be.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ee()),Ve.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ee())}}}else if(i.nodeType===8)if(i.data===Ce)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=Te.createElement(`template`);return n.innerHTML=e,n}};function Ge(e,t,n=e,r){if(t===ze)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=De(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ge(e,i._$AS(e,t.values),i,r)),t}var Ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Te).importNode(t,!0);Ve.currentNode=r;let i=Ve.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new qe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Qe(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ve.nextNode(),a++)}return Ve.currentNode=Te,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},qe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ge(this,e,t),De(e)?e===v||e==null||e===``?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==ze&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ke(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&De(this._$AH)?this._$AA.nextSibling.data=e:this.T(Te.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=We.createElement(He(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ke(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Be.get(e.strings);return t===void 0&&Be.set(e.strings,t=new We(e)),t}k(t){Oe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ee()),this.O(Ee()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Je=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ge(this,e,t,0),a=!De(e)||e!==this._$AH&&e!==ze,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ge(this,r[n+o],t,o),s===ze&&(s=this._$AH[o]),a||=!De(s)||s!==this._$AH[o],s===v?e=v:e!==v&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ye=class extends Je{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Xe=class extends Je{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Ze=class extends Je{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ge(this,e,t,0)??v)===ze)return;let n=this._$AH,r=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==v&&(n===v||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ge(this,e)}};const $e={M:Se,P:_,A:Ce,C:1,L:Ue,R:Ke,D:ke,V:Ge,I:qe,H:Je,N:Xe,U:Ze,B:Ye,F:Qe},et=ye.litHtmlPolyfillSupport;et?.(We,qe),(ye.litHtmlVersions??=[]).push(`3.3.1`);const tt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new qe(t.insertBefore(Ee(),e),e,void 0,n??{})}return i._$AI(e),i},nt=globalThis;var rt=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=tt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ze}};rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const it=nt.litElementPolyfillSupport;it?.({LitElement:rt}),(nt.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const at=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ot={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:ge},st=(e=ot,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function y(e){return(t,n)=>typeof n==`object`?st(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ct(e){return y({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const lt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ut(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return lt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return lt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var dt=g`
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
`,ft=/;\s+$/;function pt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function mt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ft)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var ht,gt=class extends rt{constructor(){super(),u(this,ht,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[dt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,ht)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,ht,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=mt({property:pt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=mt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};ht=new WeakMap,s([y()],gt.prototype,`dir`,2),s([y()],gt.prototype,`lang`,2),s([y({type:Boolean,reflect:!0,attribute:`did-ssr`})],gt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _t=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),vt=class extends gt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[_t()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};vt.formAssociated=!0,s([y({reflect:!0})],vt.prototype,`name`,2),s([y({type:Boolean})],vt.prototype,`disabled`,2),s([y({state:!0,attribute:!1})],vt.prototype,`valueHasChanged`,2),s([y({state:!0,attribute:!1})],vt.prototype,`hasInteracted`,2),s([y({attribute:`custom-error`,reflect:!0})],vt.prototype,`customError`,2),s([y({attribute:!1,state:!0,type:Object})],vt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt={small:`s`,medium:`m`,large:`l`},bt=new Set;function xt(e,t){t in yt&&!bt.has(`${e}:${t}`)&&(bt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${yt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Ct=g`
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
`,wt=g`
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
`,Tt=g`
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
function Et(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Dt=new Set,Ot=new Map;let kt,At=`ltr`,jt=`en`;const Mt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Mt){let e=new MutationObserver(Pt);At=document.documentElement.dir||`ltr`,jt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Nt(...e){e.map(e=>{let t=e.$code.toLowerCase();Ot.has(t)?Ot.set(t,Object.assign(Object.assign({},Ot.get(t)),e)):Ot.set(t,e),kt||=e}),Pt()}function Pt(){Mt&&(At=document.documentElement.dir||`ltr`,jt=document.documentElement.lang||navigator.language),[...Dt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Ft=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Dt.add(this.host)}hostDisconnected(){Dt.delete(this.host)}dir(){return`${this.host.dir||At}`.toLowerCase()}lang(){let e=`${this.host.lang||jt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return kt?kt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Ot.get(`${n}-${r}`),a=Ot.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&kt&&kt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(kt&&kt[e])i=kt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},It={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Nt(It);var Lt=It,Rt=class extends Ft{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Nt(Lt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const zt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Bt=e=>(...t)=>({_$litDirective$:e,values:t});var Vt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ht=Bt(class extends Vt{constructor(e){if(super(e),e.type!==zt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return ze}}),Ut=e=>e??v,Wt=Symbol.for(``),Gt=e=>{if(e?.r===Wt)return e?._$litStatic$},Kt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Wt}),qt=new Map,Jt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Gt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=qt.get(e))===void 0&&(o.raw=o,qt.set(e,t=o)),n=s}return e(t,...n)})(Re);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends vt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new St(this,`[default]`,`start`,`end`),this.localize=new Rt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){xt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Kt`a`:Kt`button`;return Jt`
      <${t}
        part="base button"
        class=${Ht({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Ut(e?void 0:this.disabled)}
        type=${Ut(e?void 0:this.type)}
        title=${this.title}
        name=${Ut(e?void 0:this.name)}
        value=${Ut(e?void 0:this.value)}
        href=${Ut(e?this.href:void 0)}
        target=${Ut(e?this.target:void 0)}
        download=${Ut(e?this.download:void 0)}
        rel=${Ut(e&&this.rel?this.rel:void 0)}
        role=${Ut(e?void 0:`button`)}
        aria-disabled=${Ut(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Jt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Jt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};b.shadowRootOptions={...vt.shadowRootOptions,delegatesFocus:!0},b.css=[wt,Tt,Ct],s([ut(`.button`)],b.prototype,`button`,2),s([ut(`slot:not([name])`)],b.prototype,`labelSlot`,2),s([ct()],b.prototype,`invalid`,2),s([ct()],b.prototype,`isIconButton`,2),s([y()],b.prototype,`title`,2),s([y({reflect:!0})],b.prototype,`variant`,2),s([y({reflect:!0})],b.prototype,`appearance`,2),s([y({reflect:!0})],b.prototype,`size`,2),s([Et(`size`)],b.prototype,`handleSizeChange`,1),s([y({attribute:`with-caret`,type:Boolean,reflect:!0})],b.prototype,`withCaret`,2),s([y({attribute:`with-start`,type:Boolean})],b.prototype,`withStart`,2),s([y({attribute:`with-end`,type:Boolean})],b.prototype,`withEnd`,2),s([y({type:Boolean})],b.prototype,`disabled`,2),s([y({type:Boolean,reflect:!0})],b.prototype,`loading`,2),s([y({type:Boolean,reflect:!0})],b.prototype,`pill`,2),s([y()],b.prototype,`type`,2),s([y({reflect:!0})],b.prototype,`name`,2),s([y({reflect:!0})],b.prototype,`value`,2),s([y({reflect:!0})],b.prototype,`href`,2),s([y()],b.prototype,`target`,2),s([y()],b.prototype,`rel`,2),s([y()],b.prototype,`download`,2),s([y({attribute:`formaction`})],b.prototype,`formAction`,2),s([y({attribute:`formenctype`})],b.prototype,`formEnctype`,2),s([y({attribute:`formmethod`})],b.prototype,`formMethod`,2),s([y({attribute:`formnovalidate`,type:Boolean})],b.prototype,`formNoValidate`,2),s([y({attribute:`formtarget`})],b.prototype,`formTarget`,2),s([Et(`disabled`,{waitUntilFirstUpdate:!0})],b.prototype,`handleDisabledChange`,1),s([Et(`href`)],b.prototype,`handleHrefChange`,1),s([Et(`loading`,{waitUntilFirstUpdate:!0})],b.prototype,`handleLoadingChange`,1),b=s([at(`wa-button`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Yt=g`
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
`,Xt=class extends gt{constructor(){super(...arguments),this.localize=new Rt(this)}render(){return Re`
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
    `}};Xt.css=Yt,Xt=s([at(`wa-spinner`)],Xt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Qt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},$t=g`
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
`,en=``,tn=``;function nn(){return en.replace(/\/$/,``)}function rn(e){tn=e}function an(){if(!tn){let e=document.querySelector(`[data-fa-kit-code]`);e&&rn(e.getAttribute(`data-fa-kit-code`)||``)}return tn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var on=`7.3.0`;function sn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function cn(e,t,n){let r=sn(e,t,n),i=nn();if(i)return`${i}/${r}/${e}.svg`;let a=an();return a.length>0?`https://ka-p.fontawesome.com/releases/v${on}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${on}/svgs/${r}/${e}.svg`}var ln={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>cn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function un(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var dn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},fn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=dn[n][e]??dn.regular[e]??dn.regular[`circle-question`];return r?un(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},pn=`classic`,mn=[ln,fn],hn=new Set;function gn(e){hn.add(e)}function _n(e){hn.delete(e)}function vn(e){return mn.find(t=>t.name===e)}function yn(){return pn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:bn}=$e,xn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Sn=Symbol(),Cn=Symbol(),wn,Tn=new Map,x=class extends gt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Re`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Sn:Cn}catch{return Cn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Sn;wn||=new DOMParser;let r=wn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Sn}catch{return Sn}}}connectedCallback(){super.connectedCallback(),gn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),_n(this)}async getIconSource(){let e=vn(this.library),t=this.family||yn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?vn(this.library):void 0;if(!e){this.svg=null;return}let r=Tn.get(e);r||(r=this.resolveIcon(e,n),Tn.set(e,r));let i=await r;if(i===Cn&&Tn.delete(e),e===(await this.getIconSource()).url){if(xn(i)){this.svg=i;return}switch(i){case Cn:case Sn:this.svg=null,this.dispatchEvent(new Zt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Qt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=vn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Re`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};x.css=$t,s([ct()],x.prototype,`svg`,2),s([y({reflect:!0})],x.prototype,`name`,2),s([y({reflect:!0})],x.prototype,`family`,2),s([y({reflect:!0})],x.prototype,`variant`,2),s([y({reflect:!0})],x.prototype,`canvas`,2),s([y({attribute:`auto-width`,type:Boolean,reflect:!0})],x.prototype,`autoWidth`,2),s([y({attribute:`swap-opacity`,type:Boolean,reflect:!0})],x.prototype,`swapOpacity`,2),s([y()],x.prototype,`src`,2),s([y()],x.prototype,`label`,2),s([y({reflect:!0})],x.prototype,`library`,2),s([y({type:Number,reflect:!0})],x.prototype,`rotate`,2),s([y({type:String,reflect:!0})],x.prototype,`flip`,2),s([y({type:String,reflect:!0})],x.prototype,`animation`,2),s([Et(`label`)],x.prototype,`handleLabelChange`,1),s([Et([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],x.prototype,`setIcon`,1),x=s([at(`wa-icon`)],x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var En=t({default:()=>b}),Dn=g`
  :host {
    --accent-width: 4px;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);
    --accent-color: var(--wa-color-fill-loud);

    display: block;
    pointer-events: auto;
  }

  /* Sizes */
  :host([size='xs']) {
    --padding: var(--wa-space-xs);
  }
  :host([size='s']),
  :host([size='small']) {
    --padding: var(--wa-space-s);
  }
  :host([size='m']),
  :host([size='medium']) {
    --padding: var(--wa-space-m);
  }
  :host([size='l']),
  :host([size='large']) {
    --padding: var(--wa-space-l);
  }
  :host([size='xl']) {
    --padding: var(--wa-space-xl);
  }

  .toast-item {
    display: flex;
    align-items: stretch;
    background: var(--wa-color-surface-raised);
    border: var(--wa-border-width-s) solid var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-m);
    box-shadow: var(--wa-shadow-l);
    overflow: hidden;
  }

  /* Animations */
  .toast-item.show {
    animation: toast-show var(--show-duration) var(--wa-transition-easing) forwards;
  }

  .toast-item.hide {
    animation: toast-hide var(--hide-duration) var(--wa-transition-easing) forwards;
  }

  @keyframes toast-show {
    from {
      opacity: 0;
      translate: 0 -0.5rem;
    }
    to {
      opacity: 1;
      translate: 0;
    }
  }

  @keyframes toast-hide {
    from {
      opacity: 1;
      translate: 0;
    }
    to {
      opacity: 0;
      translate: 0 -0.5rem;
    }
  }

  /* Accent line */
  .accent {
    flex: 0 0 auto;
    width: var(--accent-width);
    background: var(--accent-color);
  }

  /* Icon - only show if slot has content */
  .icon {
    display: flex;
    align-items: center;
    padding: var(--padding);
    padding-inline-end: 0;
    color: var(--accent-color);
    font-size: 1.25em;
  }

  .toast-item:not(.toast-item--has-icon) .icon {
    display: none;
  }

  /* Content */
  .content {
    flex: 1 1 auto;
    align-self: center;
    min-width: 0;
    padding: var(--padding);
    color: var(--wa-color-text-normal);
  }

  /* Close button */
  .close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
    padding-inline: var(--padding);
    background: transparent;
    border: none;
    border-start-end-radius: var(--border-radius);
    border-end-end-radius: var(--border-radius);
    color: var(--wa-color-neutral-on-quiet);
    font-size: inherit;
    cursor: pointer;
    transition: background-color var(--wa-transition-fast);

    @media (hover: hover) {
      &:hover {
        color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
      }
    }

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: calc(var(--wa-focus-ring-width) * -1);
    }
  }

  /* Progress ring styling */
  wa-progress-ring {
    --size: var(--wa-form-control-height);
    --track-width: 0.125rem;
    --indicator-width: 0.125rem;
    --track-color: var(--wa-color-neutral-fill-quiet);
    --indicator-color: var(--accent-color);
    --indicator-transition-duration: 50ms;
  }

  /* Hide progress ring indicator when no duration */
  .toast-item:not(.toast-item--has-duration) wa-progress-ring {
    --track-color: transparent;
    --indicator-color: transparent;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .toast-item.show,
    .toast-item.hide {
      animation: none;
    }
  }
`,On=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},kn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},An=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},jn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
async function Mn(e,t,n){return e.animate(t,n).finished.catch(()=>{})}function Nn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}function Pn(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Fn=class extends gt{constructor(){super(...arguments),this.hasSlotController=new St(this,`icon`),this.localize=new Rt(this),this.animationFrame=null,this.startTime=null,this.isHovering=!1,this.isFocused=!1,this.timeLeft=100,this.variant=`neutral`,this.size=`m`,this.duration=5e3,this.withIcon=!1,this.tick=()=>{if(!this.startTime)return;let e=performance.now()-this.startTime,t=Math.min(e/this.duration,1);this.timeLeft=100*(1-t),t<1?this.animationFrame=requestAnimationFrame(this.tick):this.hide()},this.handlePointerEnter=e=>{(e.pointerType===`mouse`||e.pointerType===`pen`)&&(this.isHovering=!0,this.pauseTimer())},this.handlePointerLeave=()=>{this.isHovering&&(this.isHovering=!1,this.resumeTimer())},this.handleFocusIn=()=>{this.isFocused=!0,this.pauseTimer()},this.handleFocusOut=()=>{this.isFocused=!1,this.resumeTimer()}}handleSizeChange(){xt(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.addEventListener(`pointerenter`,this.handlePointerEnter),this.addEventListener(`pointerleave`,this.handlePointerLeave)}disconnectedCallback(){super.disconnectedCallback(),this.stopTimer(),this.removeEventListener(`pointerenter`,this.handlePointerEnter),this.removeEventListener(`pointerleave`,this.handlePointerLeave)}async startTimer(){let e=new On;this.dispatchEvent(e),!e.defaultPrevented&&(await this.updateComplete,await Nn(this.toastItemElement,`show`),this.dispatchEvent(new jn),this.duration>0&&Number.isFinite(this.duration)&&(this.startTime=performance.now(),this.timeLeft=100,this.tick()))}stopTimer(){this.animationFrame!==null&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}async hide(){this.stopTimer();let e=new kn;this.dispatchEvent(e),!e.defaultPrevented&&(await Nn(this.toastItemElement,`hide`),this.dispatchEvent(new An),this.remove())}handleCloseClick(){this.hide()}pauseTimer(){this.stopTimer(),this.timeLeft=100}resumeTimer(){!this.isHovering&&!this.isFocused&&this.duration>0&&(this.startTime=performance.now(),this.tick())}render(){let e=this.hasUpdated?this.hasSlotController.test(`icon`):this.withIcon,t=this.duration>0;return Re`
      <div
        part="toast-item"
        class=${Ht({"toast-item":!0,"toast-item--has-icon":e,"toast-item--has-duration":t})}
      >
        <div part="accent" class="accent"></div>

        <div part="icon" class="icon">
          <slot name="icon"></slot>
        </div>

        <div part="content" class="content">
          <slot></slot>
        </div>

        <button
          part="close-button"
          class="close-button"
          type="button"
          aria-label=${this.localize.term(`close`)}
          @click=${this.handleCloseClick}
          @focusin=${this.handleFocusIn}
          @focusout=${this.handleFocusOut}
        >
          <wa-progress-ring
            part="progress-ring"
            exportparts="
              base:progress-ring__base,
              label:progress-ring__label,
              track:progress-ring__track,
              indicator:progress-ring__indicator
            "
            value=${this.timeLeft}
            aria-hidden="true"
          >
            <wa-icon
              part="close-icon"
              exportparts="svg:close-icon__svg"
              name="xmark"
              library="system"
              variant="solid"
            ></wa-icon>
          </wa-progress-ring>
        </button>
      </div>
    `}};Fn.css=[Dn,Tt,Ct],s([ut(`.toast-item`)],Fn.prototype,`toastItemElement`,2),s([ct()],Fn.prototype,`timeLeft`,2),s([y({reflect:!0})],Fn.prototype,`variant`,2),s([y({reflect:!0})],Fn.prototype,`size`,2),s([Et(`size`)],Fn.prototype,`handleSizeChange`,1),s([y({type:Number})],Fn.prototype,`duration`,2),s([y({attribute:`with-icon`,type:Boolean})],Fn.prototype,`withIcon`,2),Fn=s([at(`wa-toast-item`)],Fn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var In=g`
  :host {
    --size: 8rem;
    --track-width: 0.25em; /* avoid using rems here */
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-width: var(--track-width);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .track,
  .indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ln=`important`;``+Ln;const Rn=Bt(class extends Vt{constructor(e){if(super(e),e.type!==zt.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`}),``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(` !important`);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ln:``):n[e]=r}}return ze}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zn=class extends gt{constructor(){super(...arguments),this.localize=new Rt(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e;this.indicatorOffset=`${t-this.value/100*t}px`}}render(){return Re`
      <div
        part="base progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style=${Rn({"--percentage":this.value/100})}
      >
        <svg class="image">
          <circle part="track" class="track"></circle>
          <circle
            part="indicator"
            class="indicator"
            style=${Rn({"stroke-dashoffset":this.indicatorOffset})}
          ></circle>
        </svg>

        <slot id="label" part="label" class="label"></slot>
      </div>
    `}};zn.css=In,s([ut(`.indicator`)],zn.prototype,`indicator`,2),s([ct()],zn.prototype,`indicatorOffset`,2),s([y({type:Number,reflect:!0})],zn.prototype,`value`,2),s([y()],zn.prototype,`label`,2),zn=s([at(`wa-progress-ring`)],zn),zn.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=t({default:()=>Fn}),Vn=g`
  :host {
    --gap: var(--wa-space-s);
    --width: 28rem;
    --reorder-duration: var(--wa-transition-normal);

    display: flex;
    flex-direction: column;
    position: fixed;
    width: var(--width);
    height: 100dvh;
    max-height: 100dvh;
    margin: 0;
    padding: var(--wa-space-m);
    overflow-y: auto;
    gap: var(--gap);
    border: none;
    background: transparent;
    pointer-events: none;
    scrollbar-width: thin;

    /* Reset inset properties so placement changes work correctly */
    inset-block-start: auto;
    inset-block-end: auto;
    inset-inline-start: auto;
    inset-inline-end: auto;
    translate: none;
    align-content: normal;
    justify-content: normal;
  }

  :host(:not(:popover-open)) {
    display: none;
  }

  /* Placement positioning using logical properties for RTL support */
  :host([placement='top-start']) {
    inset-block-start: 0;
    inset-inline-start: 0;
  }

  :host([placement='top-center']) {
    inset-block-start: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
  }

  :host([placement='top-end']) {
    inset-block-start: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
  }

  :host([placement='bottom-start']) {
    inset-block-end: 0;
    inset-inline-start: 0;
    align-content: end;
  }

  :host([placement='bottom-center']) {
    inset-block-end: 0;
    inset-inline-start: 50%;
    translate: -50% 0;
    align-content: end;
  }

  :host([placement='bottom-end']) {
    inset-block-end: 0;
    inset-inline-start: auto;
    inset-inline-end: 0;
    align-content: end;
  }

  /* Bottom placements: justify content to end */
  :host([placement^='bottom']) {
    justify-content: end;
  }

  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    width: 100%;
    pointer-events: auto;
  }

  /* Bottom placements: reverse stack order so newest appears at bottom */
  :host([placement^='bottom']) .stack {
    flex-direction: column-reverse;
  }

  /* Mobile: full width */
  @media (max-width: 480px) {
    :host {
      width: 100%;
      padding: var(--wa-space-s);
    }
  }
`;let Hn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Un(e=``){return`${e}${Hn()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Wn=null,Gn=0;function Kn(){if(Gn+=1,Wn||typeof document>`u`)return;let e=document.createElement(`div`);e.id=Un(`wa-toast-live-region-`),e.setAttribute(`data-wa-toast-live-region`,``),e.style.cssText=`
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
    pointer-events: none;
    top: 0;
    left: 0;
  `,document.body.append(e),Wn=e}function qn(){Gn=Math.max(0,Gn-1),!(Gn>0)&&(Wn?.remove(),Wn=null)}function Jn(e,t){if(typeof document>`u`)return;let n=Wn;if(!n)return;let r=e.trim();if(!r)return;let i=document.createElement(`div`);i.setAttribute(`role`,t===`danger`?`alert`:`status`),i.setAttribute(`aria-live`,t===`danger`?`assertive`:`polite`),i.setAttribute(`aria-atomic`,`true`),n.append(i),requestAnimationFrame(()=>{requestAnimationFrame(()=>{i.textContent=r})}),setTimeout(()=>i.remove(),1e3)}var Yn=class extends gt{constructor(){super(...arguments),this.activatedToastItems=new WeakSet,this.positionCache=new Map,this.placement=`top-end`,this.handleDocumentKeyDown=async e=>{if(await new Promise(e=>setTimeout(e)),e.key===`Escape`&&!e.defaultPrevented){let t=this.getToastItems();t.length>0&&(e.preventDefault(),t[t.length-1]?.hide())}},this.handleAfterHide=async e=>{let t=e.target;t.parentElement===this&&(this.capturePositions(),t.remove(),await this.animatePositions()),this.getToastItems().length===0&&this.hideStack()}}connectedCallback(){super.connectedCallback(),this.popover=`manual`,Kn(),document.addEventListener(`keydown`,this.handleDocumentKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener?.(`keydown`,this.handleDocumentKeyDown),qn()}handleSlotChange(){let e=this.getToastItems(),t=[];e.forEach(e=>{this.activatedToastItems.has(e)||t.push(e)}),t.length>0&&(this.capturePositions(),t.forEach(e=>{this.activatedToastItems.add(e),this.showStack(),e.startTimer(),this.announceToastItem(e)}),requestAnimationFrame(()=>this.animatePositions()))}announceToastItem(e){Jn(e.textContent??``,e.variant)}getToastItems(){return[...this.querySelectorAll(`:scope > wa-toast-item`)]}capturePositions(){this.positionCache.clear();for(let e of this.getToastItems())this.positionCache.set(e,e.getBoundingClientRect())}async animatePositions(){if(Pn()){this.positionCache.clear();return}let e=[];for(let t of this.getToastItems()){let n=this.positionCache.get(t);if(!n)continue;let r=t.getBoundingClientRect(),i=n.top-r.top;if(Math.abs(i)>1){let n=Mn(t,[{transform:`translateY(${i}px)`},{transform:`translateY(0)`}],{duration:200,easing:`cubic-bezier(0.2, 0, 0, 1)`});e.push(n)}}this.positionCache.clear(),await Promise.all(e)}showStack(){this.matches(`:popover-open`)||(this.showPopover(),this.customStates.set(`visible`,!0))}hideStack(){this.matches(`:popover-open`)&&(this.hidePopover(),this.customStates.set(`visible`,!1))}async create(e,t){let n={allowHtml:!1,duration:5e3,variant:`neutral`,size:`m`,...t},r=document.createElement(`wa-toast-item`);if(r.variant=n.variant,r.size=n.size,r.duration=n.duration,n.allowHtml?r.innerHTML=e:r.textContent=e,n.icon){let e=document.createElement(`wa-icon`);e.setAttribute(`slot`,`icon`),typeof n.icon==`string`?e.setAttribute(`name`,n.icon):(e.setAttribute(`name`,n.icon.name),n.icon.library&&e.setAttribute(`library`,n.icon.library),n.icon.family&&e.setAttribute(`family`,n.icon.family),n.icon.variant&&e.setAttribute(`variant`,n.icon.variant)),r.prepend(e)}return this.activatedToastItems.add(r),this.capturePositions(),this.showStack(),this.prepend(r),await r.updateComplete,this.animatePositions(),r.startTimer(),this.announceToastItem(r),r}render(){return Re`
      <div part="stack" class="stack" @wa-after-hide=${this.handleAfterHide}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Yn.css=Vn,s([ut(`.stack`)],Yn.prototype,`stack`,2),s([y({reflect:!0})],Yn.prototype,`placement`,2),Yn=s([at(`wa-toast`)],Yn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xn=t({default:()=>Yn}),S;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Zn;function Qn(e){this.c=e}S=Qn.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function $n(e){switch(typeof e){case`string`:return Qp.l();case`number`:return mr(e)?e<<24>>24===e?Af.l():e<<16>>16===e?Lf.l():Kp.l():hr(e)?Gp.l():Wp.l();case`boolean`:return Nd.l();case`undefined`:return rs.l();default:return e instanceof j?Yp.l():e instanceof Qn?Id.l():e&&e.$classData?e.$classData.l():null}}function er(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return mr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:hr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof j?`java.lang.Long`:e instanceof Qn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jn()}}function tr(e,t){switch(typeof e){case`string`:return Zp(e,t);case`number`:return Hp(e,t);case`boolean`:return jd(e,t);case`undefined`:return es(e,t);default:return e&&e.$classData||e===null?e.e(t):e instanceof j?qp(e,t):e instanceof Qn?Fd(_r(e),t):yr.prototype.e.call(e,t)}}function nr(e){switch(typeof e){case`string`:return J(e);case`number`:return Up(e);case`boolean`:return Md(e);case`undefined`:return ts(e);default:return e&&e.$classData||e===null?e.j():e instanceof j?Jp(e):e instanceof Qn?Pd(_r(e)):yr.prototype.j.call(e)}}function rr(e){return e===void 0?`undefined`:e.toString()}function ir(e,t){if(t===0)throw new kf(`/ by zero`);return e/t|0}function ar(e,t){if(t===0)throw new kf(`/ by zero`);return e%t|0}function or(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function sr(e){return String.fromCharCode(e)}function cr(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var lr=0,ur=new WeakMap;function dr(e){switch(typeof e){case`string`:return J(e);case`number`:return Up(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:J(n);default:if(e===null)return 0;var r=ur.get(e);return r===void 0&&(r=lr+1|0,lr=r,ur.set(e,r)),r}}function fr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function pr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function mr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function hr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function gr(e){return new Qn(e)}gr(0);function _r(e){return e===null?0:e.c}function vr(e){return e===null?Zn:e}function yr(){}S=yr.prototype,S.constructor=yr;function C(){}C.prototype=S,S.j=(function(){return dr(this)}),S.e=(function(e){return this===e}),S.n=(function(){var e=this.j();return er(this)+`@`+(+(e>>>0)).toString(16)}),S.toString=(function(){return this.n()});function w(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=w.prototype=new C,S.constructor=w,S.a9=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),S.a3=(function(){return new w(this.a.slice())});function br(){}br.prototype=S;function xr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=xr.prototype=new C,S.constructor=xr,S.a9=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),S.a3=(function(){return new xr(this.a.slice())});function Sr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}S=Sr.prototype=new C,S.constructor=Sr,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new Sr(this.a.slice())});function Cr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}S=Cr.prototype=new C,S.constructor=Cr,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new Cr(this.a.slice())});function wr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}S=wr.prototype=new C,S.constructor=wr,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new wr(this.a.slice())});function Tr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}S=Tr.prototype=new C,S.constructor=Tr,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new Tr(this.a.slice())});function Er(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Zn}else this.a=e}S=Er.prototype=new C,S.constructor=Er,S.a9=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),S.a3=(function(){return new Er(this.a.slice())});function Dr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}S=Dr.prototype=new C,S.constructor=Dr,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new Dr(this.a.slice())});function Or(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}S=Or.prototype=new C,S.constructor=Or,S.a9=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.a3=(function(){return new Or(this.a.slice())});function T(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=T.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new T().y(this,r,i)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new br;n.constructor=t,n.a9=(function(e,t,n,r){cr(this.a,e,t.a,n,r)}),n.a3=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===kr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new T().a(this),this.A}),S.l=(function(){return this.L||=new Pu(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null});var kr=new T;kr.n={},kr.E=`Ljava.lang.Object;`,kr.F=(e=>!e.X),kr.N=`java.lang.Object`,kr.I=(e=>e!==null),kr.A=new T().y(kr,w,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),yr.prototype.$classData=kr;var Ar=new T().p(void 0,`V`,`void`,void 0,void 0);new T().p(!1,`Z`,`boolean`,xr,void 0);var jr=new T().p(0,`C`,`char`,Sr,Uint16Array);new T().p(0,`B`,`byte`,Cr,Int8Array),new T().p(0,`S`,`short`,wr,Int16Array),new T().p(0,`I`,`int`,Tr,Int32Array);var Mr=new T().p(null,`J`,`long`,Er,void 0);new T().p(0,`F`,`float`,Dr,Float32Array),new T().p(0,`D`,`double`,Or,Float64Array);var Nr=new T().i(1,`com.raquo.airstream.core.InternalObserver`,{ak:1});function Pr(e){return $n(e).dH()+`@`+e.j()}function Fr(e){var t=e.bS();return t===void 0?e.bM():t}function Ir(){Rr=this,zr().gv(new K((e=>void 0)),Ds().ca,!0)}S=Ir.prototype=new C,S.constructor=Ir;function Lr(){}Lr.prototype=S,S.gv=(function(e,t,n){return new md(e,n,t,this)}),S.hC=(function(e,t){return new gd(e,t,this)}),new T().i(Ir,`com.raquo.airstream.core.Observer$`,{bq:1});var Rr;function zr(){return Rr||=new Ir,Rr}function Br(){}S=Br.prototype=new C,S.constructor=Br;function Vr(){}Vr.prototype=S,S.gp=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new T().i(Br,`com.raquo.airstream.core.ObserverList$`,{bt:1});var Hr;function Ur(){return Hr||=new Br,Hr}function Wr(){this.aP=0,this.aP=0}S=Wr.prototype=new C,S.constructor=Wr;function Gr(){}Gr.prototype=S,S.gd=(function(){return this.aP===2147483647?this.aP=1:this.aP=1+this.aP|0,this.aP}),new T().i(Wr,`com.raquo.airstream.core.Signal$`,{bu:1});var Kr;function qr(){return Kr||=new Wr,Kr}function Jr(e){this.cC=null,this.e0=null,this.cD=0,this.cC=e,this.e0=void 0;var t=mi().bV();this.cD=t===void 0?1:1+t.cD|0,ei().bX===-1||this.cD>ei().bX?z().a4(new Ip(this,ei().bX)):ai().B?ai().at.push(this)|0:mi().dA(this)}S=Jr.prototype=new C,S.constructor=Jr;function Yr(){}Yr.prototype=S;var Xr=new T().i(Jr,`com.raquo.airstream.core.Transaction`,{bv:1});function Zr(){this.bX=0,this.e1=null,$r=this,this.bX=1e3,this.e1=new K((e=>{throw B(new V,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=Zr.prototype=new C,S.constructor=Zr;function Qr(){}Qr.prototype=S,S.fP=(function(e){try{e.cC.g(e);var t=e.e0;if(t!==void 0)for(;t.jr();)t.jh().ju(e)}catch(e){var n=e instanceof L?e:new Z(e);z().a4(n)}}),new T().i(Zr,`com.raquo.airstream.core.Transaction$`,{bw:1});var $r;function ei(){return $r||=new Zr,$r}function ti(e){e.bY.length|0?new Jr(new K((t=>{for(;(e.bY.length|0)>0;){var n=e.bY.shift();try{n.g(t)}catch(e){var r=e instanceof L?e:new Z(e);z().a4(r)}}for(;(e.at.length|0)>0;){var i=e.at.shift();mi().dA(i)}}))):(e.at.length|0)>0&&new Jr(new K((t=>{for(;(e.at.length|0)>0;)mi().dA(e.at.shift())})))}function ni(){this.B=!1,this.bY=null,this.at=null,ii=this,this.B=!1,this.bY=E().T(P().o(new(xs.r()).C([]))),this.at=E().T(P().o(new(Xr.r()).C([])))}S=ni.prototype=new C,S.constructor=ni;function ri(){}ri.prototype=S,new T().i(ni,`com.raquo.airstream.core.Transaction$onStart$`,{bx:1});var ii;function ai(){return ii||=new ni,ii}function oi(e,t){return e.au.get(t)}function si(e,t){e.bZ.unshift(t)}function ci(e){return e.bZ.shift()}function li(e,t,n){var r=oi(e,t),i=r===void 0,a=r===void 0?E().T(P().o(new(Xr.r()).C([]))):r;a.push(n),i&&e.au.set(t,a)}function ui(e,t){var n=oi(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.au.delete(t),i}}function di(){this.bZ=null,this.au=null,pi=this,this.bZ=E().T(P().o(new(Xr.r()).C([]))),this.au=new Map}S=di.prototype=new C,S.constructor=di;function fi(){}fi.prototype=S,S.dA=(function(e){var t=this.bV();t===void 0?(si(this,e),ei().fP(e),this.ho(e)):li(this,t,e)}),S.ho=(function(e){for(var t=e;;){var n=this.bV(),r=t;if(!(n!==void 0&&N().z(r,n)))throw B(new V,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.il(t),t.cC=ei().e1;var i=this.bV();if(N().z(i,void 0))if((this.au.size|0)>0){var a=new Ll(0);throw this.au.forEach((e=>((t,n)=>{e.by=e.by+(t.length|0)|0}))(a)),B(new V,`Transaction queue error: Stack cleared, but a total of `+a.by+` children for `+(this.au.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ei().fP(i),t=i}}),S.il=(function(e){for(var t=e;;){var n=ui(this,t);if(N().z(n,void 0)){ci(this);var r=this.bV();if(!N().z(r,void 0))t=r;else return}else{si(this,n);return}}}),S.bV=(function(){return this.bZ[0]}),new T().i(di,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{by:1});var pi;function mi(){return pi||=new di,pi}function hi(e,t){var n=e.ab.indexOf(t)|0;if(n!==-1)e.ab.splice(n,1),e.L.f()||t.gg();else throw B(new V,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function gi(e){for(;(e.c1.length|0)>0;)hi(e,e.c1.shift())}function _i(e){this.e9=null,this.ab=null,this.aQ=!1,this.c1=null,this.L=null,this.aR=0,this.e9=e,this.ab=E().T(P().o(new(xi.r()).C([]))),this.aQ=!0,this.c1=E().T(P().o(new(xi.r()).C([]))),this.L=Y(),this.aR=0}S=_i.prototype=new C,S.constructor=_i;function vi(){}vi.prototype=S,S.fx=(function(){if(this.L.f()){var e=ai(),t=(()=>{var e=new dc(this.e9);this.L=new X(e),this.aQ=!1,this.aR=0;for(var t=0,n=this.ab.length|0;t<n;){var r=t+this.aR|0;this.ab[r].gf(e),t=1+t|0}gi(this),this.aQ=!0,this.aR=0});if(ai(),e.B)t();else{e.B=!0;try{t()}finally{e.B=!1,ti(e)}}}else throw B(new V,`Can not activate `+this+`: it is already active`)}),S.hi=(function(){if(this.L.f())throw B(new V,`Can not deactivate DynamicOwner: it is not active`);this.aQ=!1;for(var e=this.ab,t=0,n=e.length|0;t<n;)e[t].gg(),t=1+t|0;gi(this);var r=this.L;r.f()||r.s().hV(),gi(this),this.aQ=!0,this.L=Y()}),S.gW=(function(e,t){t?(this.aR=1+this.aR|0,this.ab.unshift(e)):this.ab.push(e);var n=this.L;if(!n.f()){var r=n.s();e.gf(r)}}),S.iv=(function(e){this.aQ?hi(this,e):this.c1.push(e)}),new T().i(_i,`com.raquo.airstream.ownership.DynamicOwner`,{bA:1});function yi(e,t,n){this.c2=null,this.ea=null,this.c3=null,this.c2=e,this.ea=t,this.c3=Y(),e.gW(this,n)}S=yi.prototype=new C,S.constructor=yi;function bi(){}bi.prototype=S,S.cr=(function(){this.c2.iv(this)}),S.gf=(function(e){var t=ai(),n=(()=>{this.c3=this.ea.g(e)});if(ai(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,ti(t)}}}),S.gg=(function(){var e=this.c3;e.f()||(e.s().cr(),this.c3=Y())});var xi=new T().i(yi,`com.raquo.airstream.ownership.DynamicSubscription`,{bB:1});function Si(){}S=Si.prototype=new C,S.constructor=Si;function Ci(){}Ci.prototype=S,S.cx=(function(e,t,n){return new yi(e,new K((e=>new X(t.g(e)))),n)}),S.gs=(function(e,t,n){return new yi(e,new K((e=>(t.g(e),Y()))),n)}),new T().i(Si,`com.raquo.airstream.ownership.DynamicSubscription$`,{bC:1});var wi;function Ti(){return wi||=new Si,wi}function Ei(e){e.aS=E().T(P().o(new(Ni.r()).C([])))}function Di(e){for(var t=e.aS,n=0,r=t.length|0;n<r;)Ai(t[n]),n=1+n|0;e.aS.length=0}function Oi(e,t){var n=e.aS.indexOf(t)|0;if(n!==-1)e.aS.splice(n,1);else throw B(new V,`Can not remove Subscription from Owner: subscription not found.`)}function ki(e,t){e.aS.push(t)}function Ai(e){if(!e.cK)e.ec.a2(),e.cK=!0;else throw B(new V,`Can not kill Subscription: it was already killed.`)}function ji(e,t){this.ed=null,this.ec=null,this.cK=!1,this.ed=e,this.ec=t,this.cK=!1,e.ih(this)}S=ji.prototype=new C,S.constructor=ji;function Mi(){}Mi.prototype=S,S.cr=(function(){Ai(this),Oi(this.ed,this)});var Ni=new T().i(ji,`com.raquo.airstream.ownership.Subscription`,{bF:1});function Pi(e,t){this.ee=null,this.ef=null,this.ac=null,this.av=!1,this.ee=e,this.ef=t,this.ac=Y(),this.av=!1}S=Pi.prototype=new C,S.constructor=Pi;function Fi(){}Fi.prototype=S,S.hR=(function(){var e=this.ac;return!e.f()&&!e.s().c2.L.f()}),S.iE=(function(e){if(this.av)throw B(new V,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ac;if(t.f())var n=!1;else var n=e===t.s().c2;if(!n){this.hR()&&!e.L.f()&&(this.av=!0);var r=this.ac;r.f()||(r.s().cr(),this.ac=Y()),this.ac=new X(Ti().cx(e,new K((e=>(this.av||this.ee.a2(),new ji(e,new G((()=>{this.av||this.ef.a2()})))))),!1)),this.av=!1}}),S.hb=(function(){if(this.av)throw B(new V,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ac;e.f()||e.s().cr(),this.ac=Y()}),new T().i(Pi,`com.raquo.airstream.ownership.TransferableSubscription`,{bG:1});function Ii(){}S=Ii.prototype=new C,S.constructor=Ii;function Li(){}Li.prototype=S,S.h2=(function(e){return new Rp(new jp(e))}),new T().i(Ii,`com.raquo.airstream.state.Var$`,{bK:1});var Ri;function zi(){return Ri||=new Ii,Ri}function Bi(){}S=Bi.prototype=new C,S.constructor=Bi;function Vi(){}Vi.prototype=S,S.T=(function(e){return[...ec().iR(e)]}),new T().i(Bi,`com.raquo.ew.JsArray$`,{bN:1});var Hi;function E(){return Hi||=new Bi,Hi}function Ui(){this.eq=null,Gi=this,document.createElement(`template`),this.hg(W().A.iL().iM()),this.eq=RegExp(` `,`g`)}S=Ui.prototype=new C,S.constructor=Ui;function Wi(){}Wi.prototype=S,S.gZ=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof L?e:new Z(e);if(n instanceof Z&&n.v instanceof DOMException)return!1;throw n instanceof Z?n.v:n}}),S.ir=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof L?e:new Z(e);if(n instanceof Z&&n.v instanceof DOMException)return!1;throw n instanceof Z?n.v:n}}),S.hP=(function(e,t,n){try{return e.insertBefore(t,n),!0}catch(e){var r=e instanceof L?e:new Z(e);if(r instanceof Z&&r.v instanceof DOMException)return!1;throw r instanceof Z?r.v:r}}),S.hO=(function(e,t,n){try{return e.insertBefore(t,n.nextSibling),!0}catch(e){var r=e instanceof L?e:new Z(e);if(r instanceof Z&&r.v instanceof DOMException)return!1;throw r instanceof Z?r.v:r}}),S.iy=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof L?e:new Z(e);if(r instanceof Z&&r.v instanceof DOMException)return!1;throw r instanceof Z?r.v:r}}),S.hT=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(N().z(t,r))return!0;n=r}}),S.gU=(function(e,t){e.addEventListener(t.aW.bj.c4,t.cZ,t.d0)}),S.is=(function(e,t){e.removeEventListener(t.aW.bj.c4,t.cZ,t.d0)}),S.hf=(function(e){return document.createElement(e.dN())}),S.hE=(function(e,t){var n=this.hF(e,t);return n===void 0?void 0:t.bk.cl(n)}),S.hF=(function(e,t){var n=e.D.getAttributeNS(null,t.ax);return n===null?void 0:n}),S.gr=(function(e,t,n){this.iD(e,t,t.bk.cp(n))}),S.iD=(function(e,t,n){n===null?this.it(e,t):e.D.setAttribute(t.ax,n)}),S.it=(function(e,t){e.D.removeAttribute(t.ax)}),S.hg=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eS)}),S.hI=(function(e,t){var n=this.hJ(e,t);return n===void 0?void 0:t.cW.cl(n)}),S.hJ=(function(e,t){var n=e.dP(),r=t.c6,i=n.getAttributeNS(r.f()?null:r.s(),t.cX);return i===null?void 0:i}),S.iF=(function(e,t,n){this.iG(e,t,t.cW.cp(n))}),S.iG=(function(e,t,n){if(n===null)this.iw(e,t);else{var r=t.c6;if(r.f())e.dP().setAttribute(t.c5,n);else{var i=r.s();e.dP().setAttributeNS(i,t.c5,n)}}}),S.iw=(function(e,t){var n=e.dP(),r=t.c6;n.removeAttributeNS(r.f()?null:r.s(),t.cX)}),S.he=(function(e){return document.createComment(e)}),S.hh=(function(e){return document.createTextNode(e)}),S.hl=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Fg(this.hj(r),n);r=i,n=a}}),S.hj=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.eq,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),S.hk=(function(e){return e instanceof Element?e.outerHTML:e instanceof Text?`Text(`+e.textContent+`)`:e instanceof Comment?`Comment(`+e.textContent+`)`:e===null?`<null>`:`OtherNode(`+rr(e)+`)`}),new T().i(Ui,`com.raquo.laminar.DomApi$`,{bO:1});var Gi;function D(){return Gi||=new Ui,Gi}function Ki(e){zr(),z(),e.et=zi()}function qi(e){e.gx=ja()}function Ji(e){Yi(e,new K((e=>{e.eH.D.focus()})))}function Yi(e,t){return new Oc(new K((e=>{var n=new Fl(!e.a0.L.f()),r=new K((e=>{n.cd?n.cd=!1:t.g(e)}));Ti().gs(e.a0,new K((e=>(t=>{r.g(new Ea(e,t))}))(e)),!1)})),ja())}function Xi(){this.cR=null,this.eC=null,this.eD=!1,Qi=this,this.cR=new pc($i()),new pc($i()),new pc($i())}S=Xi.prototype=new C,S.constructor=Xi;function Zi(){}Zi.prototype=S,S.gT=(function(){return this.eD||=(this.eC=new hc(this),!0),this.eC}),new T().i(Xi,`com.raquo.laminar.codecs.package$`,{bW:1});var Qi;function $i(){return Qi||=new Xi,Qi}function ea(e){e.gz=ta(e,`class`,` `)}function ta(e,t,n){var r=xc(new Sc,t,$i().cR);return new _c(r.ax,new K((e=>{var t=D().hE(e,r);return t===void 0?``:t})),new Qd(((e,t)=>{D().gr(e,r,t)})),n)}function na(e){e.gw=ra(e,`class`,` `)}function ra(e,t,n){var r=new wc(t,$i().cR,Y());return new _c(r.c5,new K((e=>{var t=D().hI(e,r);return t===void 0?``:t})),new Qd(((e,t)=>{D().iF(e,r,t)})),n)}function ia(){}S=ia.prototype=new C,S.constructor=ia;function aa(){}aa.prototype=S,S.h0=(function(e,t,n){return new Cd(Y(),!0,new ef(((t,n,r)=>(t.bi||t.g2(),Zl(e,new K(((e,t)=>(n=>{this.iN(t.cg,n,e,r);var i=n;t.cg=i,i=null}))(t,new Vl(void 0))),n)))),n)}),S.iN=(function(e,t,n,r){n.bi||n.g2();var i=n.aT,a=0;a=i;var o=e===void 0||N().z(e.w(),n.aV.w().nextSibling)?e:void 0;o===void 0?Ua().hQ(n.aU,t,n.aV,r):(Ua().ix(n.aU,o,t,r)||o===t)&&(a=-1+a|0),n.iu(t),n.aw.clear(),n.aw.set(t.w(),t),n.aT=1}),new T().i(ia,`com.raquo.laminar.inserters.ChildInserter$`,{c8:1});var oa;function sa(){return oa||=new ia,oa}function ca(e,t,n,r,i){this.aU=null,this.aV=null,this.bi=!1,this.aT=0,this.aw=null,this.aU=e,this.aV=t,this.bi=n,this.aT=r,this.aw=i}S=ca.prototype=new C,S.constructor=ca;function la(){}la.prototype=S,S.g2=(function(){if(this.bi||this.aT!==0)throw B(new V,`forceSetStrictMode invoked when not allowed, inside parent = `+D().hk(this.aU.D));if(this.aw===null&&(this.aw=new Map),!(this.aV.w()instanceof Comment)){var e=this.aV,t=new Td(``);D().hP(this.aU.D,t.d2,e.w()),this.aV=t,this.aT=1,this.aw.set(e.w(),e)}this.bi=!0}),S.iu=(function(e){var t=this.aT,n=0;for(n=t;n>0;){var r=e.w().nextSibling;if(r===null)n=0;else{var i=this.aw.get(r);i===void 0?n=0:i!==void 0&&(Ua().iq(this.aU,i),n=-1+n|0)}}}),new T().i(ca,`com.raquo.laminar.inserters.InsertContext`,{cb:1});function ua(){}S=ua.prototype=new C,S.constructor=ua;function da(){}da.prototype=S,S.iz=(function(e,t,n){var r=new Td(``);return Ua().bC(e,r,n),this.iU(e,r,t)}),S.iU=(function(e,t,n){return new ca(e,t,n,0,n?new Map:null)}),new T().i(ua,`com.raquo.laminar.inserters.InsertContext$`,{cc:1});var fa;function pa(){return fa||=new ua,fa}function ma(e,t,n,r){this.bj=null,this.cV=!1,this.cU=!1,this.cT=null,this.bj=e,this.cV=t,this.cU=n,this.cT=r}S=ma.prototype=new C,S.constructor=ma;function ha(){}ha.prototype=S,S.gb=(function(e){var t=new K((t=>{var n=this.cT.g(t);return n.f()?Y():new X((n.s(),e.a2()))}));return new ma(this.bj,this.cV,this.cU,t)}),new T().i(ma,`com.raquo.laminar.keys.EventProcessor`,{cf:1});function ga(){}S=ga.prototype=new C,S.constructor=ga;function _a(){}_a.prototype=S,S.bN=(function(e,t,n){return new ma(e,t,n,new K((e=>new X(e))))}),new T().i(ga,`com.raquo.laminar.keys.EventProcessor$`,{cg:1});var va;function ya(){return va||=new ga,va}function ba(){}S=ba.prototype=new C,S.constructor=ba;function xa(){}xa.prototype=S;function Sa(){this.gA=null,this.gB=null,this.gC=null,this.gD=null,this.gA=`http://www.w3.org/2000/svg`,this.gB=`http://www.w3.org/1999/xlink`,this.gC=`http://www.w3.org/XML/1998/namespace`,this.gD=`http://www.w3.org/2000/xmlns/`}S=Sa.prototype=new C,S.constructor=Sa;function Ca(){}Ca.prototype=S,S.hZ=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Wf(e)}}),new T().i(Sa,`com.raquo.laminar.keys.SvgAttr$`,{cj:1});var wa;function Ta(){return wa||=new Sa,wa}function Ea(e,t){this.eH=null,this.cY=null,this.eH=e,this.cY=t}S=Ea.prototype=new C,S.constructor=Ea;function Da(){}Da.prototype=S,new T().i(Ea,`com.raquo.laminar.lifecycle.MountContext`,{ck:1});var O=new T().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Oa(){this.gE=null,Aa=this,this.gE=new Ec}S=Oa.prototype=new C,S.constructor=Oa;function ka(){}ka.prototype=S,new T().i(Oa,`com.raquo.laminar.modifiers.Modifier$`,{co:1});var Aa;function ja(){return Aa||=new Oa,Aa}function Ma(){this.eM=null,Pa=this,this.eM=new Ac}S=Ma.prototype=new C,S.constructor=Ma;function Na(){}Na.prototype=S,new T().i(Ma,`com.raquo.laminar.modifiers.RenderableNode$`,{cs:1});var Pa;function Fa(){return Pa||=new Ma,Pa}function Ia(){this.ay=null,Ra=this,this.ay=new Mc(new K((e=>e)),za()),new Mc(new K((e=>``+(e|0))),za()),new Mc(new K((e=>``+ +e)),za()),new Mc(new K((e=>``+!!e)),za()),new Mc(new K((e=>e.iQ())),za())}S=Ia.prototype=new C,S.constructor=Ia;function La(){}La.prototype=S,new T().i(Ia,`com.raquo.laminar.modifiers.RenderableText$`,{cv:1});var Ra;function za(){return Ra||=new Ia,Ra}function Ba(){}S=Ba.prototype=new C,S.constructor=Ba;function Va(){}Va.prototype=S,S.bC=(function(e,t,n){var r=new X(e);t.aM(r),n!==void 0&&n.gj(e,t);var i=D().gZ(e.w(),t.w());return i&&t.aL(r),i}),S.iq=(function(e,t){var n=!1;return N().z(t.w().parentNode,e.w())&&(t.aM(Y()),n=D().ir(e.w(),t.w()),t.aL(Y())),n}),S.hQ=(function(e,t,n,r){var i=new X(e);t.aM(i),r!==void 0&&r.gj(e,t);var a=D().hO(e.w(),t.w(),n.w());return t.aL(i),a}),S.ix=(function(e,t,n,r){var i=!1;if(t!==n&&t.dD().hd(e)){var a=new X(e);t.aM(Y()),n.aM(a),r!==void 0&&r.gj(e,n),i=D().iy(e.w(),n.w(),t.w()),i&&(t.aL(Y()),n.aL(a))}return i}),new T().i(Ba,`com.raquo.laminar.nodes.ParentNode$`,{cz:1});var Ha;function Ua(){return Ha||=new Ba,Ha}function Wa(){}S=Wa.prototype=new C,S.constructor=Wa;function Ga(){}Ga.prototype=S,S.iT=(function(e,t){return Ti().cx(e.a0,new K((n=>t.g(new Ea(e,n)))),!0)}),new T().i(Wa,`com.raquo.laminar.nodes.ReactiveElement$`,{cB:1});var Ka;function qa(){return Ka||=new Wa,Ka}function Ja(e,t){if(t===null)throw new q;return t.ce?t.cf:t.hN(new Td(``))}function Ya(e,t){return t.ce?t.cf:Ja(e,t)}function Xa(){}S=Xa.prototype=new C,S.constructor=Xa;function Za(){}Za.prototype=S,S.gR=(function(e){var t=new zl;return W(),sa().h0(new _h(e.dR(),new K((e=>(t=>t.f()?Ya(this,e):t.s()))(t)),Y()),Fa().eM,void 0)}),new T().i(Xa,`com.raquo.laminar.receivers.ChildOptionReceiver$`,{cF:1});var Qa;function $a(){return Qa||=new Xa,Qa}function eo(){this.gF=null,no=this,this.gF=$a()}S=eo.prototype=new C,S.constructor=eo;function to(){}to.prototype=S,new T().i(eo,`com.raquo.laminar.receivers.ChildReceiver$`,{cG:1});var no;function ro(){return no||=new eo,no}function io(){oo=this,E().T(P().iW(new Tr(new Int32Array([0]))))}S=io.prototype=new C,S.constructor=io;function ao(){}ao.prototype=S,S.gS=(function(){return new K((e=>void 0))}),new T().i(io,`com.raquo.laminar.tags.CustomHtmlTag$`,{cI:1});var oo;function so(){return oo||=new io,oo}function co(){}S=co.prototype=new C,S.constructor=co;function lo(){}lo.prototype=S,S.gX=(function(){fo().hu(),fo().hv(),fo().hw(),fo().hx()}),S.hu=(function(){var e=document.querySelector(`#example1`);if(!wl().ci(e).f()){W();var t=Ou().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([])));new lu(e,W().A.cm().b5(P().o(new(O.r()).C([gu().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([ru(W().A,`Show notification`,za().ay),new iu((W(),ya().bN(W().A.ct(),!1,!1)),new U((e=>{t.D.create(`Your changes have been saved.`)})))]))),t]))))}}),S.hv=(function(){var e=document.querySelector(`#example2`);if(!wl().ci(e).f()){W();var t=Ou().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([])));new lu(e,W().A.cm().b5(P().o(new(O.r()).C([gu().a6(P().o(new(xs.r()).C([new U((e=>e.dS().iK()))])),P().o(new(O.r()).C([ru(W().A,`Show success`,za().ay),new iu((W(),ya().bN(W().A.ct(),!1,!1)),new U((e=>{t.D.create(`Upload complete.`,Ks().ge(P().o(new(Zf.r()).C([new Yf(`variant`,`success`),new Yf(`icon`,`check`)]))))})))]))),t]))))}}),S.hw=(function(){var e=document.querySelector(`#example3`);if(!wl().ci(e).f()){W();var t=Ou().a6(P().o(new(xs.r()).C([new U((e=>e.ik().h8()))])),P().o(new(O.r()).C([])));new lu(e,W().A.cm().b5(P().o(new(O.r()).C([gu().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([ru(W().A,`Show persistent notification`,za().ay),new iu((W(),ya().bN(W().A.ct(),!1,!1)),new U((e=>{t.D.create(`Dismiss this message when you are ready.`,Ks().ge(P().o(new(Zf.r()).C([new Yf(`duration`,0)]))))})))]))),t]))))}}),S.hx=(function(){var e=document.querySelector(`#example4`);if(!wl().ci(e).f()){W();var t=W().A.et.h2(!1);new lu(e,W().A.cm().b5(P().o(new(O.r()).C([gu().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([ru(W().A,`Show custom notification`,za().ay),new iu((W(),ya().bN(W().A.ct(),!1,!1)).gb(new ed((()=>!0))),new K((e=>{t.cO.cv(e)})))]))),Ou().a6(P().o(new(xs.r()).C([])),P().o(new(O.r()).C([(W(),$a()).gR(new _h(t.cN,new U((e=>e?new X(Mu().a6(P().o(new(xs.r()).C([new U((e=>e.dS().h9())),new U((e=>e.hq().ch(0))),new U((e=>new iu((W(),ya().bN(e.ic(),!1,!1)).gb(new ed((()=>!1))),new K((e=>{t.cO.cv(e)})))))])),P().o(new(O.r()).C([W().A.iJ().b5(P().o(new(O.r()).C([ru(W().A,`Update ready`,za().ay)]))),ru(W().A,` — restart when convenient.`,za().ay)])))):Y())),Y()))])))]))))}}),new T().i(co,`examples.toast.Main$package$`,{cK:1});var uo;function fo(){return uo||=new co,uo}function po(e){try{fo().gX()}catch(e){throw e}}function mo(){this.gH=!1,this.bp=null,this.c7=null,this.f9=null,this.db=!1,this.gG=0,this.gJ=0,this.gI=null,go=this,this.gH=!0,this.bp=new ArrayBuffer(8),this.c7=new Int32Array(this.bp,0,2),new Float32Array(this.bp,0,2),this.f9=new Float64Array(this.bp,0,1),this.c7[0]=16909060,this.db=(new Int8Array(this.bp,0,8)[0]|0)==1,this.gG=this.db?0:1,this.gJ=this.db?1:0,this.gI=null}S=mo.prototype=new C,S.constructor=mo;function ho(){}ho.prototype=S,S.dO=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.f9[0]=e,(this.c7[0]|0)^(this.c7[1]|0))}),new T().i(mo,`java.lang.FloatingPointBits$`,{cZ:1});var go;function _o(){return go||=new mo,go}function vo(e,t){for(var n=k().Y(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=yo(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new il(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new il(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(ol.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function yo(e,t){var n=k().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=k().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=k().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=k().Y(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=k().Y(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[bo(e,c[1]),Do(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[bo(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[bo(e,d[1]),`<clinit>`]}function bo(e,t){var n=So(e);if($o().ff.call(n,t))var r=So(e)[t];else var r=Ro(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function xo(e){if(!((1&e.P)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.dd=t,e.P=(1|e.P)<<24>>24}return e.dd}function So(e){return(1&e.P)<<24>>24?e.dd:xo(e)}function Co(e){if(!((2&e.P)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.de=t,e.P=(2|e.P)<<24>>24}return e.de}function wo(e){return(2&e.P)<<24>>24?e.de:Co(e)}function To(e){return(4&e.P)<<24>>24||(e.dc=Object.keys(wo(e)),e.P=(4|e.P)<<24>>24),e.dc}function Eo(e){return(4&e.P)<<24>>24?e.dc:To(e)}function Do(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Oo(e,t){return t?t.arguments&&t.stack?ko(e,t):t.stack&&t.sourceURL?Mo(e,t):t.stack&&t.number?jo(e,t):t.stack&&t.fileName?Ao(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?No(e,t):Po(e,t):No(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Fo(e,t):Io(e,t):t.stack&&!t.fileName?ko(e,t):Lo(e,t):[]}function ko(e,t){return(t.stack+`
`).replace(k().Y(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(k().J(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(k().J(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(k().J(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(k().J(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Ao(e,t){return t.stack.replace(k().J(`(?:\\n@:0)?\\s+$`,`m`),``).replace(k().J(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function jo(e,t){return t.stack.replace(k().J(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(k().J(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(k().J(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Mo(e,t){return t.stack.replace(k().J(`\\[native code\\]\\n`,`m`),``).replace(k().J(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(k().J(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function No(e,t){for(var n=k().J(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Po(e,t){for(var n=k().J(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Fo(e,t){for(var n=k().Y(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Io(e,t){for(var n=k().Y(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(k().Y(`<anonymous function: (\\S+)>`),`$1`).replace(k().Y(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Lo(e,t){return[]}function Ro(e,t,n){for(;;)if(t<(Eo(e).length|0)){var r=Eo(e)[t];if(n.startsWith(r))return``+wo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function zo(){this.dd=null,this.de=null,this.dc=null,this.P=0}S=zo.prototype=new C,S.constructor=zo;function Bo(){}Bo.prototype=S,S.hy=(function(e){return vo(this,Oo(this,e))}),new T().i(zo,`java.lang.StackTrace$`,{d8:1});var Vo;function Ho(){return Vo||=new zo,Vo}function Uo(){}S=Uo.prototype=new C,S.constructor=Uo;function Wo(){}Wo.prototype=S,S.Y=(function(e){return new RegExp(e)}),S.J=(function(e,t){return new RegExp(e,t)}),new T().i(Uo,`java.lang.StackTrace$StringRE$`,{d9:1});var Go;function k(){return Go||=new Uo,Go}function Ko(){this.fb=null,this.gK=null,Jo=this,this.fb=new Zm(!1),this.gK=new Zm(!0)}S=Ko.prototype=new C,S.constructor=Ko;function qo(){}qo.prototype=S,new T().i(Ko,`java.lang.System$Streams$`,{de:1});var Jo;function Yo(){return Jo||=new Ko,Jo}function Xo(){this.ff=null,Qo=this,this.ff=Object.prototype.hasOwnProperty}S=Xo.prototype=new C,S.constructor=Xo;function Zo(){}Zo.prototype=S,new T().i(Xo,`java.lang.Utils$Cache$`,{dh:1});var Qo;function $o(){return Qo||=new Xo,Qo}function es(e,t){return e===t}function ts(e){return 0}function ns(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aF)}var rs=new T().i(0,`java.lang.Void`,{aF:1},(e=>e===void 0));function is(e,t){throw jf(new Mf,`argument type mismatch`)}function as(){}S=as.prototype=new C,S.constructor=as;function os(){}os.prototype=S,S.bP=(function(e){return e instanceof w||e instanceof xr||e instanceof Sr||e instanceof Cr||e instanceof wr||e instanceof Tr||e instanceof Er||e instanceof Dr||e instanceof Or?e.a.length:is(this,e)}),new T().i(as,`java.lang.reflect.Array$`,{dj:1});var ss;function cs(){return ss||=new as,ss}function ls(){}S=ls.prototype=new C,S.constructor=ls;function us(){}us.prototype=S,S.fY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),S.fX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fU=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fT=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.g0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.fV=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),S.fW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new T().i(ls,`java.util.Arrays$`,{dk:1});var ds;function A(){return ds||=new ls,ds}function j(e,t){this.c=0,this.d=0,this.c=e,this.d=t}S=j.prototype=new C,S.constructor=j;function fs(){}fs.prototype=S,S.e=(function(e){return e instanceof j&&this.c===e.c&&this.d===e.d}),S.j=(function(){return this.c^this.d}),S.n=(function(){return M().go(this.c,this.d)}),S.jx=(function(){return this.c}),S.jw=(function(){return M().gn(this.c,this.d)}),S.jv=(function(){return M().bU(this.c,this.d)}),S.je=(function(){return this.c<<24>>24}),S.jt=(function(){return this.c<<16>>16}),S.jo=(function(){return this.c}),S.jp=(function(){return this}),S.jk=(function(){return M().gn(this.c,this.d)}),S.ji=(function(){return M().bU(this.c,this.d)}),S.jg=(function(e){return M().gl(this.c,this.d,e.c,e.d)}),S.jf=(function(e){return M().gl(this.c,this.d,e.c,e.d)}),S.jj=(function(e){return this.c===e.c&&this.d===e.d}),S.js=(function(e){return!(this.c===e.c&&this.d===e.d)}),S.j6=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),S.j7=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),S.j2=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),S.j3=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),S.jz=(function(){return new j(~this.c,~this.d)}),S.j0=(function(e){return new j(this.c|e.c,this.d|e.d)}),S.iZ=(function(e){return new j(this.c&e.c,this.d&e.d)}),S.jd=(function(e){return new j(this.c^e.c,this.d^e.d)}),S.j8=(function(e){var t=this.c;return new j(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),S.j5=(function(e){var t=this.d;return new j(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),S.j4=(function(e){var t=this.d;return new j(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),S.jy=(function(){var e=this.c,t=this.d;return new j(-e|0,e===0?-t|0:~t)}),S.jb=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new j(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),S.j9=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new j(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),S.jc=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new j(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),S.j1=(function(e){var t=M();return new j(t.hn(this.c,this.d,e.c,e.d),t.r)}),S.ja=(function(e){var t=M();return new j(t.ip(this.c,this.d,e.c,e.d),t.r)}),new T().i(j,`org.scalajs.linker.runtime.RuntimeLong`,{aG:1});function ps(e,t,n){return-2097152&n?gs(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function ms(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.r=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.r=0,n>>>o|0}else return gs(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.r=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.r=s/4294967296|0,s|0}}function hs(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.r=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.r=n&(-1+i|0),t):gs(e,t,n,r,i,1)|0;if(-2097152&i)return e.r=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.r=a/4294967296|0,a|0}function gs(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var ee=f,te=p,g=u,ne=d;if(te===ne?(-2147483648^ee)>=(-2147483648^g):(-2147483648^te)>=(-2147483648^ne)){var re=f,ie=p,ae=u,oe=d,se=re-ae|0,ce=(-2147483648^se)>(-2147483648^re)?-1+(ie-oe|0)|0:ie-oe|0;f=se,p=ce,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var le=u,ue=d,de=le>>>1|0|ue<<31,fe=ue>>>1|0;u=de,d=fe}var pe=f,me=p;if(me===i?(-2147483648^pe)>=(-2147483648^r):(-2147483648^me)>=(-2147483648^i)){var he=f,ge=4294967296*p+ +(he>>>0),_e=4294967296*i+ +(r>>>0);if(a!==1){var ve=ge/_e,ye=ve|0,be=ve/4294967296|0,xe=m,Se=h,_=xe+ye|0,Ce=(-2147483648^_)<(-2147483648^xe)?1+(Se+be|0)|0:Se+be|0;m=_,h=Ce}if(a!==0){var we=ge%_e;f=we|0,p=we/4294967296|0}}if(a===0)return e.r=h,m;if(a===1)return e.r=p,f;var Te=m,Ee=4294967296*h+ +(Te>>>0),De=``+f,Oe=De.length;return``+Ee+`000000000`.substring(Oe)+De}function _s(){this.r=0}S=_s.prototype=new C,S.constructor=_s;function vs(){}vs.prototype=S,S.go=(function(e,t){return t===e>>31?``+e:t<0?`-`+ps(this,-e|0,e===0?-t|0:~t):ps(this,e,t)}),S.bU=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),S.gn=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),S.jm=(function(e){return new j(e,e>>31)}),S.jl=(function(e){return new j(this.gm(e),this.r)}),S.gm=(function(e){if(e<-0x8000000000000000)return this.r=-2147483648,0;if(e>=0x8000000000000000)return this.r=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.r=e<0&&t!==0?-1+n|0:n,t}),S.gl=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),S.hn=(function(e,t,n,r){if((n|r)===0)throw new kf(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.r=0,-2147483648;var i=ir(e,n);return this.r=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=-1,-1;else return this.r=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=ms(this,a,o,s,c);if((t^r)>=0)return l;var u=this.r;return this.r=l===0?-u|0:~u,-l|0}}),S.ip=(function(e,t,n,r){if((n|r)===0)throw new kf(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ar(e,n);return this.r=i>>31,i}else return this.r=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=0,0;else return this.r=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=hs(this,a,o,s,c);if(t<0){var u=this.r;return this.r=l===0?-u|0:~u,-l|0}else return l}}),new T().i(_s,`org.scalajs.linker.runtime.RuntimeLong$`,{dm:1});var ys;function M(){return ys||=new _s,ys}var bs=new T().i(1,`scala.Function0`,{ac:1}),xs=new T().i(1,`scala.Function1`,{e:1});function Ss(){}S=Ss.prototype=new C,S.constructor=Ss;function Cs(){}Cs.prototype=S;function ws(){this.fh=null,this.ca=null,Es=this,this.fh=new U((e=>Ds().fh)),this.ca=new Bd}S=ws.prototype=new C,S.constructor=ws;function Ts(){}Ts.prototype=S,new T().i(ws,`scala.PartialFunction$`,{dx:1});var Es;function Ds(){return Es||=new ws,Es}function Os(e,t){for(var n=e.m();n.t();)t.g(n.i())}function ks(e,t,n,r){return e.C()===0?``+t+r:e.bB(Hg(new Ug),t,n,r).O.q}function As(e,t,n,r,i){var a=t.O;n.length!==0&&(a.q=``+a.q+n);var o=e.m();if(o.t()){var s=o.i();for(a.q=``+a.q+s;o.t();){a.q=``+a.q+r;var c=o.i();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function js(e,t){this.fn=null,this.bv=null,this.fn=e,this.bv=t}S=js.prototype=new C,S.constructor=js;function Ms(){}Ms.prototype=S,S.hL=(function(){return this.fn.a2().m()}),new T().i(js,`scala.collection.Iterator$ConcatIteratorCell`,{dV:1});function Ns(){}S=Ns.prototype=new C,S.constructor=Ns;function Ps(){}Ps.prototype=S,S.z=(function(e,t){return e===t||(rl(e)?this.ht(e,t):e instanceof Qn?this.hr(e,t):e===null?t===null:tr(e,t))}),S.ht=(function(e,t){if(rl(t))return this.hs(e,t);if(t instanceof Qn){if(typeof e==`number`)return+e===t.c;if(e instanceof j){var n=vr(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:tr(e,t)}else return e===null?t===null:tr(e,t)}),S.hs=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof j){var r=vr(t);return n===M().bU(r.c,r.d)}else return!1}else if(e instanceof j){var i=vr(e),a=i.c,o=i.d;if(t instanceof j){var s=vr(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return M().bU(a,o)===u}else return!1}else return e===null?t===null:tr(e,t)}),S.hr=(function(e,t){if(t instanceof Qn)return e.c===t.c;if(rl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof j){var n=vr(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:tr(t,e)}else return e===null&&t===null}),new T().i(Ns,`scala.runtime.BoxesRunTime$`,{ex:1});var Fs;function N(){return Fs||=new Ns,Fs}var Is=new T().i(0,`scala.runtime.Null$`,{eB:1});function Ls(){}S=Ls.prototype=new C,S.constructor=Ls;function Rs(){}Rs.prototype=S,S.b6=(function(e,t){if(e instanceof w||e instanceof Tr||e instanceof Or||e instanceof Er||e instanceof Dr)return e.a[t];if(e instanceof Sr)return gr(e.a[t]);if(e instanceof Cr||e instanceof wr||e instanceof xr)return e.a[t];throw e===null?new q:new Wf(e)}),S.h3=(function(e,t,n){if(e instanceof w)e.a[t]=n;else if(e instanceof Tr)e.a[t]=n|0;else if(e instanceof Or)e.a[t]=+n;else if(e instanceof Er)e.a[t]=vr(n);else if(e instanceof Dr)e.a[t]=Math.fround(n);else if(e instanceof Sr)e.a[t]=_r(n);else if(e instanceof Cr)e.a[t]=n|0;else if(e instanceof wr)e.a[t]=n|0;else if(e instanceof xr)e.a[t]=!!n;else if(e===null)throw new q;else throw new Wf(e)}),S.dz=(function(e){return ks(e.U(),e.I()+`(`,`,`,`)`)}),S.o=(function(e){return e===null?null:e.a.length===0?pm(_m()):new ag(e)}),S.iW=(function(e){return e===null?null:new tg(e)}),new T().i(Ls,`scala.runtime.ScalaRunTime$`,{eD:1});var zs;function P(){return zs||=new Ls,zs}function Bs(){}S=Bs.prototype=new C,S.constructor=Bs;function Vs(){}Vs.prototype=S,S.b=(function(e,t){var n=this.cs(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.cs=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.l=(function(e,t){return this.h5(e^t)}),S.h5=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.bb=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),S.X=(function(e){var t=or(e);if(t===e)return t;var n=M(),r=n.gm(e),i=n.r;return M().bU(r,i)===e?r^i:_o().dO(e)}),S.y=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.X(+e);if(e instanceof j){var t=vr(e);return this.bb(new j(t.c,t.d))}else return nr(e)}),S.aK=(function(e){throw Nf(new Pf,``+e)}),new T().i(Bs,`scala.runtime.Statics$`,{eF:1});var Hs;function F(){return Hs||=new Bs,Hs}function Us(){}S=Us.prototype=new C,S.constructor=Us;function Ws(){}Ws.prototype=S,S.ge=(function(e){var t={};return e.b8(new U((e=>{t[e.b1]=e.b2}))),t}),new T().i(Us,`scala.scalajs.js.special.package$`,{eI:1});var Gs;function Ks(){return Gs||=new Us,Gs}function qs(){}S=qs.prototype=new C,S.constructor=qs;function Js(){}Js.prototype=S,S.iH=(function(e,t){return setTimeout((()=>{t.a2()}),e)}),new T().i(qs,`scala.scalajs.js.timers.package$`,{eJ:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){}S=Zs.prototype=new C,S.constructor=Zs;function Qs(){}Qs.prototype=S,S.iR=(function(e){var t=[];return e.b8(new U((e=>t.push(e)|0))),t}),new T().i(Zs,`scala.scalajs.runtime.Compat$`,{eS:1});var $s;function ec(){return $s||=new Zs,$s}function tc(){}S=tc.prototype=new C,S.constructor=tc;function nc(){}nc.prototype=S,S.iI=(function(e){var t=`Illegal command line`+(e.g6()===0?``:e.g6()===1?` after first argument`:` after `+e.g6()+` arguments`)+`: `+e.jq();vl().ig().hU(t+`
`)}),new T().i(tc,`scala.util.CommandLineParser$`,{eU:1});function rc(e){this.dv=null,this.dv=e}S=rc.prototype=new C,S.constructor=rc;function ic(){}ic.prototype=S,S.n=(function(){return`DynamicVariable(`+this.dv+`)`}),new T().i(rc,`scala.util.DynamicVariable`,{eW:1});function ac(){}S=ac.prototype=new C,S.constructor=ac;function oc(){}oc.prototype=S,S.cj=(function(e){return!0}),new T().i(ac,`scala.util.control.NonFatal$`,{eY:1});var sc;function cc(){return sc||=new ac,sc}function lc(){}S=lc.prototype=new C,S.constructor=lc;function uc(){}uc.prototype=S,S.b=(function(e,t){var n=this.cs(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.cs=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.l=(function(e,t){return this.K(e^t)}),S.K=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.ar=(function(e,t,n){var r=e.G();if(r===0)return J(e.I());var i=t;n||(i=this.b(i,J(e.I())));for(var a=0;a<r;)i=this.b(i,F().y(e.H(a))),a=1+a|0;return this.l(i,r)}),S.iS=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.m();o.t();){var s=o.i(),c=F().y(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.cs(l,a),this.l(l,i)}),S.ie=(function(e,t){var n=e.m(),r=t;if(!n.t())return this.l(r,0);var i=n.i();if(!n.t())return this.l(this.b(r,F().y(i)),1);var a=n.i(),o=F().y(i);r=this.b(r,o);for(var s=r,c=F().y(a),l=c-o|0,u=2;n.t();){r=this.b(r,c);var d=F().y(n.i());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.t();)r=this.b(r,F().y(n.i())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.K(this.b(this.b(s,l),c))}),S.fD=(function(e,t){var n=t,r=cs().bP(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,F().y(P().b6(e,0))),1);default:var i=F().y(P().b6(e,0));n=this.b(n,i);for(var a=n,o=F().y(P().b6(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().y(P().b6(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().y(P().b6(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.im=(function(e,t,n,r){return this.K(this.b(this.b(this.b(r,e),t),n))}),S.hM=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,F().y(e.p(0))),1);default:var i=F().y(e.p(0));n=this.b(n,i);for(var a=n,o=F().y(e.p(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().y(e.p(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().y(e.p(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.hW=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.f();){var l=c.a8(),u=c.Z(),d=F().y(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.im(s,a,o,t):this.l(r,n)}),S.fM=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fE=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fF=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fG=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,F().X(e.a[0])),1);default:var i=F().X(e.a[0]);n=this.b(n,i);for(var a=n,o=F().X(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().X(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().X(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fH=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,F().X(e.a[0])),1);default:var i=F().X(e.a[0]);n=this.b(n,i);for(var a=n,o=F().X(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=F().X(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,F().X(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fI=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fJ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,F().bb(new j(a.c,a.d))),1);default:var o=e.a[0],s=F().bb(new j(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=F().bb(new j(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=F().bb(new j(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,ee=e.a[f];n=this.b(h,F().bb(new j(ee.c,ee.d))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.K(this.b(this.b(c,d),u))}}),S.fK=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),S.fL=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.K(this.b(this.b(i,o),a))}});function dc(e){this.aS=null,this.eb=null,this.cJ=!1,this.eb=e,Ei(this),this.cJ=!1}S=dc.prototype=new C,S.constructor=dc;function fc(){}fc.prototype=S,S.ih=(function(e){this.cJ?(Ai(e),this.eb.a2()):ki(this,e)}),S.hV=(function(){Di(this),this.cJ=!0}),new T().i(dc,`com.raquo.airstream.ownership.OneTimeOwner`,{bD:1,bE:1});function pc(e){if(e===null)throw new q}S=pc.prototype=new C,S.constructor=pc;function mc(){}mc.prototype=S,S.cp=(function(e){return e}),S.cl=(function(e){return e}),new T().i(pc,`com.raquo.laminar.codecs.package$$anon$2`,{bX:1,a5:1});function hc(e){if(e===null)throw new q}S=hc.prototype=new C,S.constructor=hc;function gc(){}gc.prototype=S,S.hm=(function(e){return el().ii(e)}),S.cl=(function(e){return this.hm(e)}),S.cp=(function(e){return``+ +e}),new T().i(hc,`com.raquo.laminar.codecs.package$$anon$4`,{bY:1,a5:1});function _c(e,t,n,r){}S=_c.prototype=new xa,S.constructor=_c;function vc(){}vc.prototype=S,new T().i(_c,`com.raquo.laminar.keys.CompositeKey`,{ce:1,V:1});function yc(e){this.c4=null,this.c4=e}S=yc.prototype=new xa,S.constructor=yc;function bc(){}bc.prototype=S,new T().i(yc,`com.raquo.laminar.keys.EventProp`,{ch:1,V:1});function xc(e,t,n){return e.ax=t,e.bk=n,e}function Sc(){this.ax=null,this.bk=null}S=Sc.prototype=new xa,S.constructor=Sc;function Cc(){}Cc.prototype=S,S.ch=(function(e){return new su(this,e,new ef(((e,t,n)=>{D().gr(e,t,n)})))}),new T().i(Sc,`com.raquo.laminar.keys.HtmlAttr`,{a6:1,V:1});function wc(e,t,n){this.cX=null,this.cW=null,this.c5=null,this.c6=null,this.cX=e,this.cW=t;var r=n.f()?Y():new X(n.s()+`:`+e);this.c5=r.f()?e:r.s(),this.c6=n.f()?Y():new X(Ta().hZ(n.s()))}S=wc.prototype=new xa,S.constructor=wc;function Tc(){}Tc.prototype=S,new T().i(wc,`com.raquo.laminar.keys.SvgAttr`,{ci:1,V:1});function Ec(){}S=Ec.prototype=new C,S.constructor=Ec;function Dc(){}Dc.prototype=S,S.a1=(function(e){}),new T().i(Ec,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cp:1,R:1});function Oc(e,t){if(this.eL=null,this.eL=e,t===null)throw new q}S=Oc.prototype=new C,S.constructor=Oc;function kc(){}kc.prototype=S,S.a1=(function(e){var t=ai(),n=(()=>{this.eL.g(e)});if(ai(),t.B)n();else{t.B=!0;try{n()}finally{t.B=!1,ti(t)}}}),new T().i(Oc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cq:1,R:1});function Ac(){}S=Ac.prototype=new C,S.constructor=Ac;function jc(){}jc.prototype=S,new T().i(Ac,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{ct:1,cr:1});function Mc(e,t){if(this.eN=null,this.eN=e,t===null)throw new q}S=Mc.prototype=new C,S.constructor=Mc;function Nc(){}Nc.prototype=S,S.h4=(function(e){return this.eN.g(e)}),new T().i(Mc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cw:1,cu:1});function Pc(e){e.fS(new _i(new G((()=>{throw B(new V,`Attempting to use owner of unmounted element: `+ks(D().hl(e.w(),(D(),Bg())),``,` > `,``))}))))}function Fc(e,t,n){return e.d7=t,e}function Ic(){this.d7=null}S=Ic.prototype=new C,S.constructor=Ic;function Lc(){}Lc.prototype=S,S.dN=(function(){return this.d7}),S.b5=(function(e){var t=this.ha();return e.b8(new K((e=>{e.a1(t)}))),t}),S.ha=(function(){return new Bp(this,D().hf(this))}),new T().i(Ic,`com.raquo.laminar.tags.HtmlTag`,{at:1,a8:1});function Rc(e,t){this.eS=null,this.eS=e}S=Rc.prototype=new C,S.constructor=Rc;function zc(){}zc.prototype=S,new T().i(Rc,`com.raquo.laminar.tags.SvgTag`,{cJ:1,a8:1});function Bc(){}S=Bc.prototype=new C,S.constructor=Bc;function Vc(){}Vc.prototype=S,S.cp=(function(e){return e}),S.cl=(function(e){return e}),new T().i(Bc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cQ:1,a5:1});function Hc(e,t){return e.bn=t,e.dw(),e}function Uc(){this.bn=null,this.bm=null,this.bo=!1}S=Uc.prototype=new C,S.constructor=Uc;function Wc(){}Wc.prototype=S,S.iO=(function(){return this.bo||=(this.bm=new du(this.bn,so().gS(),(so(),void 0)),!0),this.bm}),S.a6=(function(e,t){var n=this.iO().b5(P().o(new(O.r()).C([])));return e.b8(new K((e=>{e.g(this).a1(n)}))),t.b8(new K((e=>{e.a1(n)}))),n});function Gc(e){return(1&e.ad)<<24>>24||(e.da=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.ad=(1|e.ad)<<24>>24),e.da}function Kc(e){return(1&e.ad)<<24>>24?e.da:Gc(e)}function qc(e){return(2&e.ad)<<24>>24||(e.d9=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.ad=(2|e.ad)<<24>>24),e.d9}function Jc(e){return(2&e.ad)<<24>>24?e.d9:qc(e)}function Yc(e,t){var n=Jc(e).exec(t);n===null&&Xc(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&Xc(t);var s=e.ij(i,a,o,15);return r===`-`?-s:s}function Xc(e){throw new Xp(`For input string: "`+e+`"`)}function Zc(){this.da=null,this.d9=null,this.ad=0}S=Zc.prototype=new C,S.constructor=Zc;function Qc(){}Qc.prototype=S,S.ii=(function(e){var t=Kc(this).exec(e);return t===null?Yc(this,e):+parseFloat(t[1])}),S.ij=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,ee=+parseInt(m,16),te=or(+parseInt(n,10))+h|0,g=te/3|0,ne=+(2**g),re=te-(g<<1)|0;return ee*ne*ne*+(2**re)}),new T().i(Zc,`java.lang.Double$`,{cX:1,a:1});var $c;function el(){return $c||=new Zc,$c}function tl(){}S=tl.prototype=new C,S.constructor=tl;function nl(){}nl.prototype=S;function rl(e){return e instanceof tl||typeof e==`number`||e instanceof j}function il(e,t,n,r,i){this.aY=null,this.br=null,this.aZ=null,this.b0=0,this.aX=0,this.aY=e,this.br=t,this.aZ=n,this.b0=r,this.aX=i}S=il.prototype=new C,S.constructor=il;function al(){}al.prototype=S,S.e=(function(e){return e instanceof il&&this.aZ===e.aZ&&this.b0===e.b0&&this.aX===e.aX&&this.aY===e.aY&&this.br===e.br}),S.n=(function(){var e=``;return this.aY!==`<jscode>`&&(e=``+e+this.aY+`.`),e=``+e+this.br,this.aZ===null?e+=`(Unknown Source)`:(e=e+`(`+this.aZ,this.b0>=0&&(e=e+`:`+this.b0,this.aX>=0&&(e=e+`:`+this.aX)),e+=`)`),e}),S.j=(function(){return J(this.aY)^J(this.br)^J(this.aZ)^this.b0^this.aX});var ol=new T().i(il,`java.lang.StackTraceElement`,{aE:1,a:1});function sl(){}S=sl.prototype=new C,S.constructor=sl;function cl(){}cl.prototype=S,S.i0=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new $p;for(var i=``,a=t;a!==r;)i+=``+sr(e.a[a]),a=1+a|0;return i}),new T().i(sl,`java.lang.String$`,{db:1,a:1});var ll;function ul(){return ll||=new sl,ll}function I(e,t,n,r,i){return e.fd=t,e.fe=i,i&&e.hz(),e}var L=class extends Error{constructor(){super(),this.fd=null,this.fe=!1,this.fc=null,this.c8=null}g7(e){return this}bQ(){return this.fd}hz(){var e=this instanceof Z?this.v:this;return this.fc=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}hH(){return this.c8===null&&(this.fe?this.c8=Ho().hy(this.fc):this.c8=new(ol.r()).C(0)),this.c8}n(){var e=er(this),t=this.bQ();return t===null?e:e+`: `+t}j(){return yr.prototype.j.call(this)}e(e){return yr.prototype.e.call(this,e)}get message(){var e=this.bQ();return e===null?``:e}get name(){return er(this)}toString(){return this.n()}};function dl(){}S=dl.prototype=new C,S.constructor=dl;function fl(){}fl.prototype=S,S.g3=(function(e,t){var n=e.C();if(n>-1){for(var r=t.i1(n),i=e.m(),a=0;a<n;)P().h3(r,a,i.i()),a=1+a|0;return r}else{var o=null,s=t.iA(),c=s===jr.l();o=[];for(var l=e.m();l.t();){var u=l.i(),d=c?_r(u):u===null?s.as.z:u;o.push(d)}return(s===Ar.l()?rs.l():s===Is.l()||s===ad.l()?kr.l():s).as.r().w(o)}}),S.g1=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!N().z(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new T().i(dl,`scala.Array$`,{dn:1,a:1});var pl;function ml(){return pl||=new dl,pl}function hl(){this.fg=null,_l=this,this.fg=new rc(Yo().fb)}S=hl.prototype=new C,S.constructor=hl;function gl(){}gl.prototype=S,S.ig=(function(){return this.fg.dv}),new T().i(hl,`scala.Console$`,{dp:1,ei:1});var _l;function vl(){return _l||=new hl,_l}function yl(){}S=yl.prototype=new Cs,S.constructor=yl;function bl(){}bl.prototype=S,S.iX=(function(e){return e===null?null:e.a.length===0?xm().fo:new kg(e)});function xl(){}S=xl.prototype=new C,S.constructor=xl;function Sl(){}Sl.prototype=S,S.ci=(function(e){return e===null?Y():new X(e)}),new T().i(xl,`scala.Option$`,{dw:1,a:1});var Cl;function wl(){return Cl||=new xl,Cl}function Tl(e,t,n){return e.ba(t)?e.g(t):n.g(t)}function El(e,t){if(t===e)e.fy(Sp().g4(t));else for(var n=t.m();n.t();)e.dB(n.i());return e}function Dl(){}S=Dl.prototype=new C,S.constructor=Dl;function Ol(){}Ol.prototype=S,S.n=(function(){return`<function0>`});function kl(){}S=kl.prototype=new C,S.constructor=kl;function Al(){}Al.prototype=S,S.n=(function(){return`<function1>`});function jl(){}S=jl.prototype=new C,S.constructor=jl;function Ml(){}Ml.prototype=S,S.n=(function(){return`<function2>`});function Nl(){}S=Nl.prototype=new C,S.constructor=Nl;function Pl(){}Pl.prototype=S,S.n=(function(){return`<function3>`});function Fl(e){this.cd=!1,this.cd=e}S=Fl.prototype=new C,S.constructor=Fl;function Il(){}Il.prototype=S,S.n=(function(){return``+this.cd}),new T().i(Fl,`scala.runtime.BooleanRef`,{ew:1,a:1});function Ll(e){this.by=0,this.by=e}S=Ll.prototype=new C,S.constructor=Ll;function Rl(){}Rl.prototype=S,S.n=(function(){return``+this.by}),new T().i(Ll,`scala.runtime.IntRef`,{ey:1,a:1});function zl(){this.ce=!1,this.cf=null}S=zl.prototype=new C,S.constructor=zl;function Bl(){}Bl.prototype=S,S.hN=(function(e){return this.cf=e,this.ce=!0,e}),S.n=(function(){return`LazyRef `+(this.ce?`of: `+this.cf:`thunk`)}),new T().i(zl,`scala.runtime.LazyRef`,{ez:1,a:1});function Vl(e){this.cg=null,this.cg=e}S=Vl.prototype=new C,S.constructor=Vl;function Hl(){}Hl.prototype=S,S.n=(function(){return``+this.cg}),new T().i(Vl,`scala.runtime.ObjectRef`,{eC:1,a:1});function Ul(){this.u=0,this.fw=0,this.gQ=0,this.gP=0,Gl=this,this.u=J(`Seq`),this.fw=J(`Map`),this.gQ=J(`Set`),this.gP=this.iS(Bg(),this.fw)}S=Ul.prototype=new uc,S.constructor=Ul;function Wl(){}Wl.prototype=S,S.iB=(function(e){return Ch(e)?this.hM(e,this.u):e instanceof pg?this.hW(e,this.u):this.ie(e,this.u)}),new T().i(Ul,`scala.util.hashing.MurmurHash3$`,{f0:1,eZ:1});var Gl;function R(){return Gl||=new Ul,Gl}var Kl=class extends L{};function ql(){this.cz=null,this.dT=null,this.dU=null,Yl=this,this.cz=Sp().fA(P().o(new(xs.r()).C([]))),this.dT=new K((e=>{try{console.error(this.b9(e)+`
`+this.hG(e,`
`))}catch(e){var t=e instanceof L?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dU=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.v:t})),this.io(this.dT)}S=ql.prototype=new C,S.constructor=ql;function Jl(){}Jl.prototype=S,S.b9=(function(e){try{var t=e.bQ()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return $n(e).dH()+`: `+t}),S.hG=(function(e,t){try{return ks(zu().iX(e.hH()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.io=(function(e){this.cz.dB(e)}),S.a4=(function(e){for(var t=this.cz.m();t.t();){var n=t.i();try{n.g(e)}catch(e){var r=e instanceof L?e:new Z(e),i=this.dU;if(n===null?i===null:n.e(i))throw r instanceof Z?r.v:r;console.warn(`Error processing an unhandled error callback:`),Xs().iH(0,new G((e=>(()=>{throw e instanceof Z?e.v:e}))(r)))}}}),new T().i(ql,`com.raquo.airstream.core.AirstreamError$`,{bp:1,eg:1,eh:1});var Yl;function z(){return Yl||=new ql,Yl}function Xl(e){e.cq(!0),e.dM(void 0)}function Zl(e,t,n){return of(e,zr().gv(t,Ds().ca,!0),n)}function Ql(e,t){e.dI()?uf(e,t):tu(e).push(new G((()=>{uf(e,t)})))}function $l(e,t){e.dI()?lf(e,t):tu(e).push(new G((()=>{lf(e,t)})))}function eu(e){return mf(e)>0}function tu(e){var t=e.dL();if(t===void 0){var n=E().T(P().o(new(bs.r()).C([])));return e.dM(n),n}else return t}var nu=new T().i(1,`com.raquo.airstream.core.Observer`,{a2:1,Y:1,U:1});function ru(e,t,n){return new Dd(n.h4(t))}function iu(e,t){this.aW=null,this.cZ=null,this.d0=null,this.aW=e,this.cZ=(n=>{var r=e.cT.g(n);r.f()||t.g(r.s())}),this.d0=(()=>{var e=null;e=this;var t={};if(e===null)throw new q;return t.capture=e.aW.cV,t.passive=e.aW.cU,t})()}S=iu.prototype=new C,S.constructor=iu;function au(){}au.prototype=S,S.a1=(function(e){this.h6(e,!1)}),S.h6=(function(e,t){if(xf(e,this)===-1){var n=new K((t=>(D().gU(e.D,this),new ji(t.cY,new G((()=>{var t=xf(e,this);t!==-1&&(bf(e,t),D().is(e.D,this))})))))),r=t?qa().iT(e,n):Ti().cx(e.a0,new K((t=>n.g(new Ea(e,t)))),!1);return yf(e,this,t),r}else{var i=new K((e=>void 0));return Ti().gs(e.a0,new K((t=>{i.g(new Ea(e,t))})),!1)}}),S.n=(function(){return`EventListener(`+this.aW.bj.c4+`)`});var ou=new T().i(iu,`com.raquo.laminar.modifiers.EventListener`,{cm:1,R:1,cl:1});function su(e,t,n){this.eJ=null,this.eK=null,this.eI=null,this.eJ=e,this.eK=t,this.eI=n}S=su.prototype=new C,S.constructor=su;function cu(){}cu.prototype=S,S.a1=(function(e){this.eI.fz(e,this.eJ,this.eK)}),new T().i(su,`com.raquo.laminar.modifiers.KeySetter`,{cn:1,R:1,cx:1});function lu(e,t){if(this.d4=null,this.eP=null,this.eQ=null,this.eP=t,Pc(this),e===null)throw B(new V,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().hT(e,document))throw B(new V,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eQ=e,this.hY()}S=lu.prototype=new C,S.constructor=lu;function uu(){}uu.prototype=S,S.co=(function(){return this.d4}),S.fS=(function(e){this.d4=e}),S.hY=(function(){return this.d4.fx(),Ua().bC(this,this.eP,void 0)}),S.w=(function(){return this.eQ}),new T().i(lu,`com.raquo.laminar.nodes.RootNode`,{cD:1,Z:1,as:1});function du(e,t,n){this.d7=null,this.eR=null,this.eR=e,Fc(this,e,!1)}S=du.prototype=new Lc,S.constructor=du;function fu(){}fu.prototype=S,S.dN=(function(){return this.eR}),new T().i(du,`com.raquo.laminar.tags.CustomHtmlTag`,{cH:1,at:1,a8:1});function pu(){this.bn=null,this.bm=null,this.bo=!1,this.eT=null,this.eU=!1,Hc(this,`wa-button`)}S=pu.prototype=new Wc,S.constructor=pu;function mu(){}mu.prototype=S,S.dS=(function(){return this.eU||=(this.eT=bu(),!0),this.eT}),S.dw=(function(){return En}),new T().i(pu,`io.github.nguyenyou.webawesome.laminar.Button$`,{cL:1,aa:1,a9:1});var hu;function gu(){return hu||=new pu,hu}function _u(){this.ax=null,this.bk=null,this.eV=null,this.eW=!1,this.eX=null,this.eY=!1,xc(this,`variant`,new Bc)}S=_u.prototype=new Cc,S.constructor=_u;function vu(){}vu.prototype=S,S.h9=(function(){return this.eW||=(this.eV=bu().ch(`brand`),!0),this.eV}),S.iK=(function(){return this.eY||=(this.eX=bu().ch(`success`),!0),this.eX}),new T().i(_u,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cM:1,a6:1,V:1});var yu;function bu(){return yu||=new _u,yu}function xu(){this.ax=null,this.bk=null,this.eZ=null,this.f0=!1,xc(this,`placement`,new Bc)}S=xu.prototype=new Cc,S.constructor=xu;function Su(){}Su.prototype=S,S.h8=(function(){return this.f0||=(this.eZ=wu().ch(`bottom-center`),!0),this.eZ}),new T().i(xu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ToastPlacement$`,{cN:1,a6:1,V:1});var Cu;function wu(){return Cu||=new xu,Cu}function Tu(){this.bn=null,this.bm=null,this.bo=!1,this.f1=null,this.f2=!1,Hc(this,`wa-toast`)}S=Tu.prototype=new Wc,S.constructor=Tu;function Eu(){}Eu.prototype=S,S.ik=(function(){return this.f2||=(this.f1=wu(),!0),this.f1}),S.dw=(function(){return Xn}),new T().i(Tu,`io.github.nguyenyou.webawesome.laminar.Toast$`,{cO:1,aa:1,a9:1});var Du;function Ou(){return Du||=new Tu,Du}function ku(){this.bn=null,this.bm=null,this.bo=!1,this.f5=null,this.f6=!1,this.f7=null,this.f8=!1,this.f3=null,this.f4=!1,Hc(this,`wa-toast-item`)}S=ku.prototype=new Wc,S.constructor=ku;function Au(){}Au.prototype=S,S.ic=(function(){return this.f6||=(this.f5=(W(),new yc(`wa-after-hide`)),!0),this.f5}),S.dS=(function(){return this.f8||=(this.f7=bu(),!0),this.f7}),S.hq=(function(){return this.f4||=(this.f3=(W(),xc(new Sc,`duration`,$i().gT())),!0),this.f3}),S.dw=(function(){return Bn}),new T().i(ku,`io.github.nguyenyou.webawesome.laminar.ToastItem$`,{cP:1,aa:1,a9:1});var ju;function Mu(){return ju||=new ku,ju}function Nu(e){if(e.as.Z)return e.as.Q().dH()+`[]`;for(var t=e.as.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Pu(e){this.d8=null,this.as=e}S=Pu.prototype=new C,S.constructor=Pu;function Fu(){}Fu.prototype=S,S.n=(function(){return(this.as.Y?`interface `:this.as.X?``:`class `)+this.as.N}),S.dH=(function(){return this.d8===null&&(this.d8=Nu(this)),this.d8}),new T().i(Pu,`java.lang.Class`,{cW:1,a:1,N:1});function B(e,t){return I(e,t,null,!0,!0),e}var V=class extends L{};new T().i(V,`java.lang.Exception`,{J:1,t:1,a:1});function Iu(){this.gL=null,Ru=this,this.gL=$u()}S=Iu.prototype=new bl,S.constructor=Iu;function Lu(){}Lu.prototype=S,new T().i(Iu,`scala.Predef$`,{dz:1,ds:1,dt:1});var Ru;function zu(){return Ru||=new Iu,Ru}function Bu(e,t){switch(t){case 0:return e.b1;case 1:return e.b2;default:throw Nf(new Pf,t+` is out of bounds (min 0, max 1)`)}}function Vu(e,t){return e.cb=t,e}function Hu(){this.cb=null}S=Hu.prototype=new C,S.constructor=Hu;function Uu(){}Uu.prototype=S,S.dG=(function(e){return this.cb.dF(e,sh())}),S.dC=(function(e){return this.cb.dF(e,sh())});function Wu(e,t){return new sp(e).hc(t)}function Gu(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?H().x:new dp(e,r,i)}function Ku(e,t){for(var n=t.m();e.t()&&n.t();)if(!N().z(e.i(),n.i()))return!1;return e.t()===n.t()}function qu(){this.x=null,Yu=this,this.x=new tp}S=qu.prototype=new C,S.constructor=qu;function Ju(){}Ju.prototype=S,new T().i(qu,`scala.collection.Iterator$`,{dS:1,a0:1,a:1});var Yu;function H(){return Yu||=new qu,Yu}function Xu(){}S=Xu.prototype=new C,S.constructor=Xu;function Zu(){}Zu.prototype=S,new T().i(Xu,`scala.collection.immutable.Map$`,{e6:1,dX:1,a:1});var Qu;function $u(){return Qu||=new Xu,Qu}function ed(e){this.fp=null,this.fp=e}S=ed.prototype=new Ol,S.constructor=ed;function td(){}td.prototype=S,S.a2=(function(){return(0,this.fp)()}),new T().i(ed,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{er:1,bh:1,ac:1});function U(e){this.fq=null,this.fq=e}S=U.prototype=new Al,S.constructor=U;function nd(){}nd.prototype=S,S.g=(function(e){return(0,this.fq)(e)}),new T().i(U,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{es:1,bi:1,e:1});function rd(){}S=rd.prototype=new C,S.constructor=rd;function id(){}id.prototype=S,S.n=(function(){return`<function1>`}),S.g=(function(e){return this.fB(e,Ds().ca)});var ad=new T().i(0,`scala.runtime.Nothing$`,{eA:1,t:1,a:1});function od(){}S=od.prototype=new Ol,S.constructor=od;function sd(){}sd.prototype=S;function cd(){}S=cd.prototype=new Al,S.constructor=cd;function ld(){}ld.prototype=S;function ud(){}S=ud.prototype=new Ml,S.constructor=ud;function dd(){}dd.prototype=S;function fd(){}S=fd.prototype=new Pl,S.constructor=fd;function pd(){}pd.prototype=S;function md(e,t,n,r){if(this.dX=null,this.dV=!1,this.cA=null,this.dW=null,this.dX=e,this.dV=t,this.cA=n,r===null)throw new q;this.dW=void 0}S=md.prototype=new C,S.constructor=md;function hd(){}hd.prototype=S,S.bS=(function(){return this.dW}),S.bM=(function(){return Pr(this)}),S.n=(function(){return Fr(this)}),S.cv=(function(e){try{this.dX.g(e)}catch(e){var t=e instanceof L?e:new Z(e);this.dV?this.cu(new Pp(t)):z().a4(new Pp(t))}}),S.cu=(function(e){try{this.cA.ba(e)?this.cA.g(e):z().a4(e)}catch(n){var t=n instanceof L?n:new Z(n);z().a4(new Fp(t,e))}}),S.bT=(function(e){e.a7(new K((e=>{this.cu(e)})),new K((e=>{this.cv(e)})))}),new T().i(md,`com.raquo.airstream.core.Observer$$anon$8`,{br:1,Y:1,U:1,a2:1});function gd(e,t,n){if(this.cB=null,this.dY=!1,this.dZ=null,this.cB=e,this.dY=t,n===null)throw new q;this.dZ=void 0}S=gd.prototype=new C,S.constructor=gd;function _d(){}_d.prototype=S,S.bS=(function(){return this.dZ}),S.bM=(function(){return Pr(this)}),S.n=(function(){return Fr(this)}),S.cv=(function(e){this.bT(new jp(e))}),S.cu=(function(e){this.bT(new kp(e))}),S.bT=(function(e){try{this.cB.ba(e)?this.cB.g(e):e.a7(new K((e=>{z().a4(e)})),new K((e=>void 0)))}catch(n){var t=n instanceof L?n:new Z(n);this.dY&&e.ga()?this.cu(new Pp(t)):e.a7(new K((e=>{z().a4(new Fp(t,e))})),new K((e=>{z().a4(new Pp(t))})))}}),new T().i(gd,`com.raquo.airstream.core.Observer$$anon$9`,{bs:1,Y:1,U:1,a2:1});function vd(e){if(this.er=null,this.es=!1,this.gw=null,e===null)throw new q;na(this)}S=vd.prototype=new C,S.constructor=vd;function yd(){}yd.prototype=S,S.iM=(function(){return this.es||=(this.er=new Rc(`svg`,!1),!0),this.er}),new T().i(vd,`com.raquo.laminar.api.Laminar$svg$`,{bR:1,c7:1,c0:1,c2:1});function bd(){this.A=null,Sd=this,this.A=new kh}S=bd.prototype=new C,S.constructor=bd;function xd(){}xd.prototype=S,new T().i(bd,`com.raquo.laminar.api.package$`,{bU:1,aq:1,ar:1,ap:1});var Sd;function W(){return Sd||=new bd,Sd}function Cd(e,t,n,r){this.eE=null,this.eG=!1,this.eF=null,this.cS=null,this.eE=e,this.eG=t,this.eF=n,this.cS=r}S=Cd.prototype=new C,S.constructor=Cd;function wd(){}wd.prototype=S,S.h7=(function(e){var t=this.eE,n=t.f()?pa().iz(e,this.eG,this.cS):t.s(),r=new K((e=>this.eF.fz(n,e.cY,this.cS)));return Ti().cx(e.a0,new K((t=>r.g(new Ea(e,t)))),!1)}),S.a1=(function(e){this.h7(e)}),new T().i(Cd,`com.raquo.laminar.inserters.DynamicInserter`,{c9:1,R:1,cd:1,ca:1});function Td(e){this.d1=null,this.d2=null,this.d1=Y(),this.d2=D().he(e)}S=Td.prototype=new C,S.constructor=Td;function Ed(){}Ed.prototype=S,S.dD=(function(){return this.d1}),S.aL=(function(e){this.d1=e}),S.aM=(function(e){}),S.a1=(function(e){Ua().bC(e,this,void 0)}),S.w=(function(){return this.d2}),new T().i(Td,`com.raquo.laminar.nodes.CommentNode`,{cy:1,Z:1,R:1,a7:1});function Dd(e){this.d5=null,this.d6=null,this.d5=Y(),this.d6=D().hh(e)}S=Dd.prototype=new C,S.constructor=Dd;function Od(){}Od.prototype=S,S.dD=(function(){return this.d5}),S.aL=(function(e){this.d5=e}),S.aM=(function(e){}),S.a1=(function(e){Ua().bC(e,this,void 0)}),S.iQ=(function(){return this.d6.data}),S.w=(function(){return this.d6}),new T().i(Dd,`com.raquo.laminar.nodes.TextNode`,{cE:1,Z:1,R:1,a7:1});function kd(){}S=kd.prototype=new C,S.constructor=kd;function Ad(){}Ad.prototype=S;function jd(e,t){return e===t}function Md(e){return e?1231:1237}var Nd=new T().i(0,`java.lang.Boolean`,{cU:1,a:1,S:1,N:1},(e=>typeof e==`boolean`));function Pd(e){return e}function Fd(e,t){return t instanceof Qn&&e===t.c}var Id=new T().i(0,`java.lang.Character`,{az:1,a:1,S:1,N:1},(e=>e instanceof Qn)),Ld=class extends V{};function Rd(){this.q=null,this.q=``}S=Rd.prototype=new C,S.constructor=Rd;function zd(){}zd.prototype=S,S.gY=(function(e){var t=ul().i0(e,0,e.a.length);return this.q=``+this.q+t,this}),S.n=(function(){return this.q}),S.k=(function(){return this.q.length}),S.fO=(function(e){return this.q.charCodeAt(e)}),new T().i(Rd,`java.lang.StringBuilder`,{dc:1,ab:1,ax:1,a:1});function Bd(){}S=Bd.prototype=new C,S.constructor=Bd;function Vd(){}Vd.prototype=S,S.ck=(function(e,t){return Tl(this,e,t)}),S.n=(function(){return`<function1>`}),S.ba=(function(e){return!1}),S.h1=(function(e){throw new Wf(e)}),S.g=(function(e){this.h1(e)}),new T().i(Bd,`scala.PartialFunction$$anon$1`,{dy:1,f:1,e:1,a:1});function Hd(){}S=Hd.prototype=new C,S.constructor=Hd;function Ud(){}Ud.prototype=S,S.m=(function(){return this}),S.cn=(function(e){return this.bW(e,-1)}),S.bW=(function(e,t){return Gu(this,e,t)}),S.n=(function(){return`<iterator>`}),S.bB=(function(e,t,n,r){return As(this,e,t,n,r)}),S.C=(function(){return-1});function Wd(e,t){return e.cc=t,e}function Gd(){this.cc=null}S=Gd.prototype=new C,S.constructor=Gd;function Kd(){}Kd.prototype=S,S.fA=(function(e){return this.cc.dC(e)}),S.g4=(function(e){return this.cc.dG(e)}),S.dG=(function(e){return this.g4(e)}),S.dC=(function(e){return this.fA(e)});function qd(e,t){return t>=0&&e.aq(t)>0}function Jd(e){return e.aq(0)===0}function Yd(e,t){var n=e.C();if(n!==-1)var r=t.C(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Ku(e.m(),t)}function G(e){this.ft=null,this.ft=e}S=G.prototype=new sd,S.constructor=G;function Xd(){}Xd.prototype=S,S.a2=(function(){return(0,this.ft)()}),new T().i(G,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eL:1,eK:1,bh:1,ac:1});function K(e){this.fu=null,this.fu=e}S=K.prototype=new ld,S.constructor=K;function Zd(){}Zd.prototype=S,S.g=(function(e){return(0,this.fu)(e)}),new T().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eN:1,eM:1,bi:1,e:1});function Qd(e){this.gO=null,this.gO=e}S=Qd.prototype=new dd,S.constructor=Qd;function $d(){}$d.prototype=S,new T().i(Qd,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eP:1,eO:1,et:1,dq:1});function ef(e){this.fv=null,this.fv=e}S=ef.prototype=new pd,S.constructor=ef;function tf(){}tf.prototype=S,S.fz=(function(e,t,n){return(0,this.fv)(e,t,n)}),new T().i(ef,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eR:1,eQ:1,eu:1,dr:1});function nf(){}S=nf.prototype=new C,S.constructor=nf;function rf(){}rf.prototype=S;function af(e){e.fQ(E().T(P().o(new(nu.r()).C([])))),e.fR(E().T(P().o(new(Nr.r()).C([])))),e.cy(!1)}function of(e,t,n){var r=ai(),i=(()=>{df(e);var r=sf(e,t,n);return t.bT(e.cw()),ff(e),r}),a=!eu(e);if(r.B||!a)var o=i();else{r.B=!0;try{var o=i()}finally{r.B=!1,ti(r)}}return o}function sf(e,t,n){var r=new ji(n,new G((()=>{Ql(e,t)})));return e.bO().push(t),r}function cf(e,t,n){var r=ai(),i=(()=>{!eu(e)&&n&&df(e),e.bR().push(t),ff(e)}),a=!eu(e);if(r.B||!a)i();else{r.B=!0;try{i()}finally{r.B=!1,ti(r)}}}function lf(e,t){Ur().gp(e.bR(),t)&&pf(e)}function uf(e,t){Ur().gp(e.bO(),t)&&pf(e)}function df(e){e.gu()||(e.gk(),e.cy(!0))}function ff(e){mf(e)===1&&e.gh()}function pf(e){eu(e)||(e.gi(),e.cy(!1))}function mf(e){var t=e.bO().length,n=e.bR();return(t|0)+(n.length|0)|0}function hf(e){e.cO=zr().hC(new gf(e),(zr(),!0))}function gf(e){if(this.eh=null,e===null)throw new q;this.eh=e}S=gf.prototype=new id,S.constructor=gf;function _f(){}_f.prototype=S,S.hS=(function(e){return!0}),S.fB=(function(e,t){new Jr(new K((t=>{this.eh.iC(e,t)})))}),S.ba=(function(e){return this.hS(e)}),S.ck=(function(e,t){return this.fB(e,t)}),new T().i(gf,`com.raquo.airstream.state.Var$$anon$1`,{bL:1,ev:1,e:1,f:1,a:1});function vf(e){e.d3=new Pi(new G((()=>{e.a0.fx()})),new G((()=>{e.a0.hi()}))),e.az=void 0}function yf(e,t,n){if(e.az===void 0)e.az=E().T(P().o(new(ou.r()).C([t])));else if(n){var r=e.az;if(r===void 0){var i;throw new zf(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.az;if(a===void 0){var o;throw new zf(`undefined.get`)}else var o=a;o.push(t)}}function bf(e,t){var n=e.az;n!==void 0&&n.splice(t,1)}function xf(e,t){var n=e.az;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:tr(a,t))?r=!0:i=1+i|0}return r?i:-1}function Sf(e,t){wf(e,e.bl,t)&&Tf(e,t)}function Cf(e,t){var n=e.bl;e.bl=t,wf(e,n,t)||Tf(e,t)}function wf(e,t,n){var r=!t.f()&&!t.s().co().L.f(),i=!n.f()&&!n.s().co().L.f();return r&&!i}function Tf(e,t){Ef(e,t.f()?Y():new X(t.s().co()))}function Ef(e,t){if(t.f())e.d3.hb();else{var n=t.s();e.d3.iE(n)}}function Df(){}S=Df.prototype=new Ad,S.constructor=Df;function Of(){}Of.prototype=S;var kf=class extends Ld{constructor(e){super(),I(this,e,null,!0,!0)}};new T().i(kf,`java.lang.ArithmeticException`,{cT:1,M:1,J:1,t:1,a:1});var Af=new T().i(0,`java.lang.Byte`,{cV:1,T:1,a:1,S:1,N:1},(e=>fr(e)));function jf(e,t){return I(e,t,null,!0,!0),e}var Mf=class extends Ld{};new T().i(Mf,`java.lang.IllegalArgumentException`,{aB:1,M:1,J:1,t:1,a:1});function Nf(e,t){return I(e,t,null,!0,!0),e}var Pf=class extends Ld{};new T().i(Pf,`java.lang.IndexOutOfBoundsException`,{aC:1,M:1,J:1,t:1,a:1});function Ff(){}S=Ff.prototype=new Ad,S.constructor=Ff;function If(){}If.prototype=S,new T().i(Ff,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{d3:1,aw:1,au:1,ay:1,av:1});var q=class extends Ld{constructor(){super(),I(this,null,null,!0,!0)}};new T().i(q,`java.lang.NullPointerException`,{d5:1,M:1,J:1,t:1,a:1});var Lf=new T().i(0,`java.lang.Short`,{d7:1,T:1,a:1,S:1,N:1},(e=>pr(e))),Rf=class extends Ld{constructor(e){super(),I(this,e,null,!0,!0)}};new T().i(Rf,`java.lang.UnsupportedOperationException`,{dg:1,M:1,J:1,t:1,a:1});var zf=class extends Ld{constructor(e){super(),I(this,e,null,!0,!0)}};new T().i(zf,`java.util.NoSuchElementException`,{dl:1,M:1,J:1,t:1,a:1});function Bf(e){return e.df||=(e.dg=e.c9===null?`null`:Uf(e),!0),e.dg}function Vf(e){return e.df?e.dg:Bf(e)}function Hf(e){var t=e.c9;return`of class `+er(t)}function Uf(e){try{return e.c9+` (`+Hf(e)+`)`}catch{return`an instance `+Hf(e)}}var Wf=class extends Ld{constructor(e){super(),this.dg=null,this.c9=null,this.df=!1,this.c9=e,I(this,null,null,!0,!0)}bQ(){return Vf(this)}};new T().i(Wf,`scala.MatchError`,{du:1,M:1,J:1,t:1,a:1});function Gf(){}S=Gf.prototype=new C,S.constructor=Gf;function Kf(){}Kf.prototype=S,S.f=(function(){return this===Y()}),S.C=(function(){return this.f()?0:1}),S.hd=(function(e){return!this.f()&&N().z(this.s(),e)}),S.m=(function(){return this.f()?H().x:new rp(this.s())});function qf(e){this.bs=0,this.fj=0,this.fi=null,this.fi=e,this.bs=0,this.fj=e.G()}S=qf.prototype=new Ud,S.constructor=qf;function Jf(){}Jf.prototype=S,S.t=(function(){return this.bs<this.fj}),S.i=(function(){var e=this.fi.H(this.bs);return this.bs=1+this.bs|0,e}),new T().i(qf,`scala.Product$$anon$1`,{dA:1,r:1,s:1,b:1,c:1});function Yf(e,t){this.b1=null,this.b2=null,this.b1=e,this.b2=t}S=Yf.prototype=new C,S.constructor=Yf;function Xf(){}Xf.prototype=S,S.G=(function(){return 2}),S.H=(function(e){return Bu(this,e)}),S.n=(function(){return`(`+this.b1+`,`+this.b2+`)`}),S.I=(function(){return`Tuple2`}),S.U=(function(){return new Cp(this)}),S.j=(function(){return R().ar(this,-889275714,!1)}),S.e=(function(e){return this===e||e instanceof Yf&&N().z(this.b1,e.b1)&&N().z(this.b2,e.b2)});var Zf=new T().i(Yf,`scala.Tuple2`,{aJ:1,dB:1,v:1,d:1,a:1});function Qf(e){this.cb=null,Vu(this,e)}S=Qf.prototype=new Uu,S.constructor=Qf;function $f(){}$f.prototype=S,new T().i(Qf,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dO:1,dN:1,a0:1,a:1,ad:1});function ep(e){return ks(e,e.b7()+`(`,`, `,`)`)}function tp(){}S=tp.prototype=new Ud,S.constructor=tp;function np(){}np.prototype=S,S.t=(function(){return!1}),S.i2=(function(){throw new zf(`next on empty iterator`)}),S.C=(function(){return 0}),S.bW=(function(e,t){return this}),S.i=(function(){this.i2()}),new T().i(tp,`scala.collection.Iterator$$anon$19`,{dT:1,r:1,s:1,b:1,c:1});function rp(e){this.bu=!1,this.fm=null,this.fm=e,this.bu=!1}S=rp.prototype=new Ud,S.constructor=rp;function ip(){}ip.prototype=S,S.t=(function(){return!this.bu}),S.i=(function(){return this.bu?H().x.i():(this.bu=!0,this.fm)}),S.bW=(function(e,t){return this.bu||e>0||t===0?H().x:this}),new T().i(rp,`scala.collection.Iterator$$anon$20`,{dU:1,r:1,s:1,b:1,c:1});function ap(e){for(;;){if(e.F instanceof sp){var t=e.F;e.F=t.F,e.af=t.af,t.R!==null&&(e.Q===null&&(e.Q=t.Q),t.Q.bv=e.R,e.R=t.R);continue}return}}function op(e){for(;;)if(e.R===null)return e.F=null,e.Q=null,!1;else{if(e.F=e.R.hL(),e.Q===e.R&&(e.Q=e.Q.bv),e.R=e.R.bv,ap(e),e.af)return!0;if(e.F!==null&&e.F.t())return e.af=!0,!0}}function sp(e){this.F=null,this.R=null,this.Q=null,this.af=!1,this.F=e,this.R=null,this.Q=null,this.af=!1}S=sp.prototype=new Ud,S.constructor=sp;function cp(){}cp.prototype=S,S.t=(function(){return this.af?!0:this.F===null?!1:this.F.t()?(this.af=!0,!0):op(this)}),S.i=(function(){return this.t()?(this.af=!1,this.F.i()):H().x.i()}),S.hc=(function(e){var t=new js(e,null);return this.R===null?(this.R=t,this.Q=t):(this.Q.bv=t,this.Q=t),this.F===null&&(this.F=H().x),this}),new T().i(sp,`scala.collection.Iterator$ConcatIterator`,{aN:1,r:1,s:1,b:1,c:1});function lp(e){for(;e.a5>0;)e.ag.t()?(e.ag.i(),e.a5=-1+e.a5|0):e.a5=0}function up(e,t){if(e.N<0)return-1;var n=e.N-t|0;return n<0?0:n}function dp(e,t,n){this.ag=null,this.N=0,this.a5=0,this.ag=e,this.N=n,this.a5=t}S=dp.prototype=new Ud,S.constructor=dp;function fp(){}fp.prototype=S,S.C=(function(){var e=this.ag.C();if(e<0)return-1;var t=e-this.a5|0,n=t<0?0:t;if(this.N<0)return n;var r=this.N;return r<n?r:n}),S.t=(function(){return lp(this),this.N!==0&&this.ag.t()}),S.i=(function(){return lp(this),this.N>0?(this.N=-1+this.N|0,this.ag.i()):this.N<0?this.ag.i():H().x.i()}),S.bW=(function(e,t){var n=e>0?e:0;if(t<0)var r=up(this,n);else if(t<=n)var r=0;else if(this.N<0)var r=t-n|0;else var i=up(this,n),a=t-n|0,r=i<a?i:a;var o=this.a5+n|0;return r===0?H().x:o<0?(this.a5=2147483647,this.N=0,Wu(this,new ed((()=>new dp(this.ag,-2147483647+o|0,r))))):(this.a5=o,this.N=r,this)}),new T().i(dp,`scala.collection.Iterator$SliceIterator`,{dW:1,r:1,s:1,b:1,c:1});function pp(e,t){return t>=0&&e.aq(t)>0}function mp(e,t){if(t<0)throw Nf(new Pf,``+t);var n=e.hp(t);if(n.f())throw Nf(new Pf,``+t);return n.a8()}function hp(e,t){return wh(t)?gp(e,e,t):Yd(e,t)}function gp(e,t,n){for(;;)if(t===n)return!0;else if(!t.f()&&!n.f()&&N().z(t.a8(),n.a8())){var r=t.Z(),i=n.Z();t=r,n=i}else return t.f()&&n.f()}function _p(e){this.bx=null,this.bx=e}S=_p.prototype=new Ud,S.constructor=_p;function vp(){}vp.prototype=S,S.t=(function(){return!this.bx.f()}),S.i=(function(){var e=this.bx.a8();return this.bx=this.bx.Z(),e}),new T().i(_p,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{e1:1,r:1,s:1,b:1,c:1});function yp(){this.cc=null,Wd(this,Op())}S=yp.prototype=new Kd,S.constructor=yp;function bp(){}bp.prototype=S,new T().i(yp,`scala.collection.mutable.Buffer$`,{eb:1,dY:1,ad:1,a0:1,a:1});var xp;function Sp(){return xp||=new yp,xp}function Cp(e){this.bz=0,this.fr=0,this.fs=null,this.fs=e,this.bz=0,this.fr=e.G()}S=Cp.prototype=new Ud,S.constructor=Cp;function wp(){}wp.prototype=S,S.t=(function(){return this.bz<this.fr}),S.i=(function(){var e=this.fs.H(this.bz);return this.bz=1+this.bz|0,e}),new T().i(Cp,`scala.runtime.ScalaRunTime$$anon$1`,{eE:1,r:1,s:1,b:1,c:1});function Tp(){}S=Tp.prototype=new C,S.constructor=Tp;function Ep(){}Ep.prototype=S,S.dC=(function(e){return this.g5(e)}),S.g5=(function(e){return El(Kg(new qg),e).gq()}),S.dG=(function(e){return this.g5(e)}),new T().i(Tp,`scala.scalajs.js.WrappedArray$`,{eH:1,e2:1,ad:1,a0:1,a:1});var Dp;function Op(){return Dp||=new Tp,Dp}function kp(e){this.bA=null,this.bA=e}S=kp.prototype=new rf,S.constructor=kp;function Ap(){}Ap.prototype=S,S.g9=(function(){return!0}),S.ga=(function(){return!1}),S.dJ=(function(e){return this}),S.a7=(function(e,t){return e.g(this.bA)}),S.I=(function(){return`Failure`}),S.G=(function(){return 1}),S.H=(function(e){return e===0?this.bA:F().aK(e)}),S.U=(function(){return new Cp(this)}),S.j=(function(){return R().ar(this,-889275714,!1)}),S.n=(function(){return P().dz(this)}),S.e=(function(e){if(this===e)return!0;if(e instanceof kp){var t=this.bA,n=e.bA;return t===null?n===null:t.e(n)}else return!1}),new T().i(kp,`scala.util.Failure`,{bk:1,bm:1,v:1,d:1,a:1});function jp(e){this.b4=null,this.b4=e}S=jp.prototype=new rf,S.constructor=jp;function Mp(){}Mp.prototype=S,S.g9=(function(){return!1}),S.ga=(function(){return!0}),S.dJ=(function(e){try{return new jp(e.g(this.b4))}catch(e){var t=e instanceof L?e:new Z(e);if(cc().cj(t))return new kp(t);throw t instanceof Z?t.v:t}}),S.a7=(function(e,t){try{return t.g(this.b4)}catch(t){var n=t instanceof L?t:new Z(t);if(cc().cj(n))return e.g(n);throw n instanceof Z?n.v:n}}),S.I=(function(){return`Success`}),S.G=(function(){return 1}),S.H=(function(e){return e===0?this.b4:F().aK(e)}),S.U=(function(){return new Cp(this)}),S.j=(function(){return R().ar(this,-889275714,!1)}),S.n=(function(){return P().dz(this)}),S.e=(function(e){return this===e||e instanceof jp&&N().z(this.b4,e.b4)}),new T().i(jp,`scala.util.Success`,{bl:1,bm:1,v:1,d:1,a:1});var Np=class e extends Kl{constructor(e,t){super(),this.be=null,this.bd=null,this.be=e,this.bd=t,I(this,`ErrorHandlingError: `+z().b9(e)+`; cause: `+z().b9(t),null,!0,!0),this.g7(t)}U(){return new qf(this)}j(){return R().ar(this,-889275714,!1)}e(t){if(this===t)return!0;if(t instanceof e){var n=this.be,r=t.be;if(n===null?r===null:n.e(r)){var i=this.bd,a=t.bd;return i===null?a===null:i.e(a)}else return!1}else return!1}G(){return 2}I(){return`ErrorHandlingError`}H(e){if(e===0)return this.be;if(e===1)return this.bd;throw Nf(new Pf,``+e)}n(){return`ErrorHandlingError: `+this.be+`; cause: `+this.bd}};new T().i(Np,`com.raquo.airstream.core.AirstreamError$ErrorHandlingError`,{af:1,X:1,t:1,a:1,d:1,v:1});var Pp=class e extends Kl{constructor(e){super(),this.bf=null,this.bf=e,I(this,`ObserverError: `+z().b9(e),null,!0,!0)}U(){return new qf(this)}j(){return R().ar(this,-889275714,!1)}e(t){if(this===t)return!0;if(t instanceof e){var n=this.bf,r=t.bf;return n===null?r===null:n.e(r)}else return!1}G(){return 1}I(){return`ObserverError`}H(e){if(e===0)return this.bf;throw Nf(new Pf,``+e)}n(){return`ObserverError: `+this.bf}};new T().i(Pp,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ag:1,X:1,t:1,a:1,d:1,v:1});var Fp=class e extends Kl{constructor(e,t){super(),this.bh=null,this.bg=null,this.bh=e,this.bg=t,I(this,`ObserverErrorHandlingError: `+z().b9(e)+`; cause: `+z().b9(t),null,!0,!0),this.g7(t)}U(){return new qf(this)}j(){return R().ar(this,-889275714,!1)}e(t){if(this===t)return!0;if(t instanceof e){var n=this.bh,r=t.bh;if(n===null?r===null:n.e(r)){var i=this.bg,a=t.bg;return i===null?a===null:i.e(a)}else return!1}else return!1}G(){return 2}I(){return`ObserverErrorHandlingError`}H(e){if(e===0)return this.bh;if(e===1)return this.bg;throw Nf(new Pf,``+e)}n(){return`ObserverErrorHandlingError: `+this.bh+`; cause: `+this.bg}};new T().i(Fp,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ah:1,X:1,t:1,a:1,d:1,v:1});var Ip=class e extends Kl{constructor(e,t){super(),this.aO=null,this.aN=0,this.aO=e,this.aN=t,I(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}U(){return new qf(this)}j(){var e=-889275714;return e=F().b(e,J(`TransactionDepthExceeded`)),e=F().b(e,F().y(this.aO)),e=F().b(e,this.aN),F().l(e,2)}e(t){return this===t?!0:t instanceof e&&this.aN===t.aN?this.aO===t.aO:!1}G(){return 2}I(){return`TransactionDepthExceeded`}H(e){if(e===0)return this.aO;if(e===1)return this.aN;throw Nf(new Pf,``+e)}n(){return`TransactionDepthExceeded: `+this.aO+`; maxDepth: `+this.aN}};new T().i(Ip,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ai:1,X:1,t:1,a:1,d:1,v:1});function Lp(e){e.cw()}function Rp(e){this.eg=null,this.cO=null,this.cM=null,this.cL=null,this.cN=null,this.eg=void 0,hf(this),this.cM=e,this.cL=new ch(this.cM,new G((()=>Fr(this)))),this.cN=this.cL}S=Rp.prototype=new C,S.constructor=Rp;function zp(){}zp.prototype=S,S.bS=(function(){return this.eg}),S.bM=(function(){return Pr(this)}),S.n=(function(){return Fr(this)}),S.dR=(function(){return this.cN}),S.iC=(function(e,t){this.cM=e,Ym(this.cL,e,t)}),new T().i(Rp,`com.raquo.airstream.state.SourceVar`,{bH:1,a3:1,a4:1,Y:1,U:1,bJ:1});function Bp(e,t){this.bl=null,this.a0=null,this.d3=null,this.az=null,this.eO=null,this.D=null,this.eO=e,this.D=t,this.bl=Y(),Pc(this),vf(this)}S=Bp.prototype=new C,S.constructor=Bp;function Vp(){}Vp.prototype=S,S.dD=(function(){return this.bl}),S.a1=(function(e){Ua().bC(e,this,void 0)}),S.co=(function(){return this.a0}),S.fS=(function(e){this.a0=e}),S.aM=(function(e){Sf(this,e)}),S.aL=(function(e){Cf(this,e)}),S.n=(function(){return`ReactiveHtmlElement(`+(this.D===null?`tag=`+this.eO.dN():this.D.outerHTML)+`)`}),S.w=(function(){return this.D}),new T().i(Bp,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cC:1,Z:1,R:1,a7:1,as:1,cA:1});function Hp(e,t){return Object.is(e,t)}function Up(e){return _o().dO(e)}var Wp=new T().i(0,`java.lang.Double`,{aA:1,T:1,a:1,S:1,N:1,W:1},(e=>typeof e==`number`)),Gp=new T().i(0,`java.lang.Float`,{cY:1,T:1,a:1,S:1,N:1,W:1},(e=>hr(e))),Kp=new T().i(0,`java.lang.Integer`,{d0:1,T:1,a:1,S:1,N:1,W:1},(e=>mr(e)));function qp(e,t){return t instanceof j&&e.c===t.c&&e.d===t.d}function Jp(e){return e.c^e.d}var Yp=new T().i(0,`java.lang.Long`,{aD:1,T:1,a:1,S:1,N:1,W:1},(e=>e instanceof j)),Xp=class extends Mf{constructor(e){super(),I(this,e,null,!0,!0)}};new T().i(Xp,`java.lang.NumberFormatException`,{d6:1,aB:1,M:1,J:1,t:1,a:1});function J(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Zp(e,t){return e===t}var Qp=new T().i(0,`java.lang.String`,{da:1,a:1,S:1,ab:1,N:1,W:1},(e=>typeof e==`string`)),$p=class extends Pf{constructor(){super(),I(this,null,null,!0,!0)}};new T().i($p,`java.lang.StringIndexOutOfBoundsException`,{dd:1,aC:1,M:1,J:1,t:1,a:1});function em(){}S=em.prototype=new Kf,S.constructor=em;function tm(){}tm.prototype=S,S.hD=(function(){throw new zf(`None.get`)}),S.I=(function(){return`None`}),S.G=(function(){return 0}),S.H=(function(e){return F().aK(e)}),S.U=(function(){return new Cp(this)}),S.j=(function(){return 2433880}),S.n=(function(){return`None`}),S.s=(function(){this.hD()}),new T().i(em,`scala.None$`,{dv:1,aH:1,b:1,v:1,d:1,a:1});var nm;function Y(){return nm||=new em,nm}function X(e){this.bt=null,this.bt=e}S=X.prototype=new Kf,S.constructor=X;function rm(){}rm.prototype=S,S.s=(function(){return this.bt}),S.I=(function(){return`Some`}),S.G=(function(){return 1}),S.H=(function(e){return e===0?this.bt:F().aK(e)}),S.U=(function(){return new Cp(this)}),S.j=(function(){return R().ar(this,-889275714,!1)}),S.n=(function(){return P().dz(this)}),S.e=(function(e){return this===e||e instanceof X&&N().z(this.bt,e.bt)}),new T().i(X,`scala.Some`,{aI:1,aH:1,b:1,v:1,d:1,a:1});function im(){}S=im.prototype=new C,S.constructor=im;function am(){}am.prototype=S,S.b7=(function(){return this.bc()}),S.b8=(function(e){Os(this,e)}),S.bB=(function(e,t,n,r){return As(this,e,t,n,r)}),S.C=(function(){return-1});function om(e,t){return e.M=t,e.h=0,e.E=cs().bP(e.M),e}function sm(){this.M=null,this.h=0,this.E=0}S=sm.prototype=new Ud,S.constructor=sm;function cm(){}cm.prototype=S,S.C=(function(){return this.E-this.h|0}),S.t=(function(){return this.h<this.E}),S.i=(function(){this.h>=cs().bP(this.M)&&H().x.i();var e=P().b6(this.M,this.h);return this.h=1+this.h|0,e}),S.cn=(function(e){if(e>0){var t=this.h+e|0;if(t<0)var n=this.E;else var r=this.E,n=r<t?r:t;this.h=n}return this}),new T().i(sm,`scala.collection.ArrayOps$ArrayIterator`,{O:1,r:1,s:1,b:1,c:1,a:1});function lm(e,t){return t<0?0:t>e.V?e.V:t}function um(e){this.fl=null,this.ae=0,this.V=0,this.fl=e,this.ae=0,this.V=e.k()}S=um.prototype=new Ud,S.constructor=um;function dm(){}dm.prototype=S,S.C=(function(){return this.V}),S.t=(function(){return this.V>0}),S.i=(function(){if(this.V>0){var e=this.fl.p(this.ae);return this.ae=1+this.ae|0,this.V=-1+this.V|0,e}else return H().x.i()}),S.cn=(function(e){if(e>0){this.ae=this.ae+e|0;var t=this.V-e|0;this.V=t<0?0:t}return this}),S.bW=(function(e,t){var n=lm(this,e),r=lm(this,t)-n|0;return this.V=r<0?0:r,this.ae=this.ae+n|0,this}),new T().i(um,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dR:1,r:1,s:1,b:1,c:1,a:1});function fm(e){return e.ds||=(e.dt=new ag(new w(0)),!0),e.dt}function pm(e){return e.ds?e.dt:fm(e)}function mm(){this.dt=null,this.gM=null,this.ds=!1,gm=this,this.gM=new Qf(this)}S=mm.prototype=new C,S.constructor=mm;function hm(){}hm.prototype=S,S.hA=(function(e,t){return e instanceof Hh?e:this.iV(ml().g3(e,t))}),S.iV=(function(e){if(e===null)return null;if(e instanceof w)return new ag(e);if(e instanceof Tr)return new tg(e);if(e instanceof Or)return new Zh(e);if(e instanceof Er)return new rg(e);if(e instanceof Dr)return new $h(e);if(e instanceof Sr)return new Yh(e);if(e instanceof Cr)return new qh(e);if(e instanceof wr)return new sg(e);if(e instanceof xr)return new Gh(e);if(ns(e,1))return new lg(e);throw new Wf(e)}),S.dF=(function(e,t){return this.hA(e,t)}),new T().i(mm,`scala.collection.immutable.ArraySeq$`,{e5:1,aP:1,aL:1,aK:1,aM:1,a:1});var gm;function _m(){return gm||=new mm,gm}function vm(){this.gN=null,this.fo=null,bm=this,this.gN=new Qf(this),this.fo=new kg(new w(0))}S=vm.prototype=new C,S.constructor=vm;function ym(){}ym.prototype=S,S.hB=(function(e,t){return this.hX(ml().g3(e,t))}),S.hX=(function(e){if(e===null)return null;if(e instanceof w)return new kg(e);if(e instanceof Tr)return new Tg(e);if(e instanceof Or)return new xg(e);if(e instanceof Er)return new Dg(e);if(e instanceof Dr)return new Cg(e);if(e instanceof Sr)return new yg(e);if(e instanceof Cr)return new _g(e);if(e instanceof wr)return new jg(e);if(e instanceof xr)return new hg(e);if(ns(e,1))return new Ng(e);throw new Wf(e)}),S.dF=(function(e,t){return this.hB(e,t)}),new T().i(vm,`scala.collection.mutable.ArraySeq$`,{e9:1,aP:1,aL:1,aK:1,aM:1,a:1});var bm;function xm(){return bm||=new vm,bm}function Sm(){}S=Sm.prototype=new Of,S.constructor=Sm;function Cm(){}Cm.prototype=S;function wm(e){this.M=null,this.h=0,this.E=0,this.dh=null,this.dh=e,om(this,e)}S=wm.prototype=new cm,S.constructor=wm;function Tm(){}Tm.prototype=S,S.i3=(function(){this.h>=this.dh.a.length&&H().x.i();var e=this.dh.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.i3()}),new T().i(wm,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dE:1,O:1,r:1,s:1,b:1,c:1,a:1});function Em(e){this.M=null,this.h=0,this.E=0,this.di=null,this.di=e,om(this,e)}S=Em.prototype=new cm,S.constructor=Em;function Dm(){}Dm.prototype=S,S.i4=(function(){this.h>=this.di.a.length&&H().x.i();var e=this.di.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return gr(this.i4())}),new T().i(Em,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dF:1,O:1,r:1,s:1,b:1,c:1,a:1});function Om(e){this.M=null,this.h=0,this.E=0,this.dj=null,this.dj=e,om(this,e)}S=Om.prototype=new cm,S.constructor=Om;function km(){}km.prototype=S,S.i5=(function(){this.h>=this.dj.a.length&&H().x.i();var e=this.dj.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.i5()}),new T().i(Om,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dG:1,O:1,r:1,s:1,b:1,c:1,a:1});function Am(e){this.M=null,this.h=0,this.E=0,this.dk=null,this.dk=e,om(this,e)}S=Am.prototype=new cm,S.constructor=Am;function jm(){}jm.prototype=S,S.i6=(function(){this.h>=this.dk.a.length&&H().x.i();var e=this.dk.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.i6()}),new T().i(Am,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dH:1,O:1,r:1,s:1,b:1,c:1,a:1});function Mm(e){this.M=null,this.h=0,this.E=0,this.dl=null,this.dl=e,om(this,e)}S=Mm.prototype=new cm,S.constructor=Mm;function Nm(){}Nm.prototype=S,S.i7=(function(){this.h>=this.dl.a.length&&H().x.i();var e=this.dl.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.i7()}),new T().i(Mm,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dI:1,O:1,r:1,s:1,b:1,c:1,a:1});function Pm(e){this.M=null,this.h=0,this.E=0,this.dm=null,this.dm=e,om(this,e)}S=Pm.prototype=new cm,S.constructor=Pm;function Fm(){}Fm.prototype=S,S.i8=(function(){this.h>=this.dm.a.length&&H().x.i();var e=this.dm.a[this.h],t=e.c,n=e.d;return this.h=1+this.h|0,new j(t,n)}),S.i=(function(){return this.i8()}),new T().i(Pm,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dJ:1,O:1,r:1,s:1,b:1,c:1,a:1});function Im(e){this.M=null,this.h=0,this.E=0,this.dn=null,this.dn=e,om(this,e)}S=Im.prototype=new cm,S.constructor=Im;function Lm(){}Lm.prototype=S,S.i9=(function(){this.h>=this.dn.a.length&&H().x.i();var e=this.dn.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.i9()}),new T().i(Im,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dK:1,O:1,r:1,s:1,b:1,c:1,a:1});function Rm(e){this.M=null,this.h=0,this.E=0,this.fk=null,this.fk=e,om(this,e)}S=Rm.prototype=new cm,S.constructor=Rm;function zm(){}zm.prototype=S,S.ia=(function(){this.h>=this.fk.a.length&&H().x.i(),this.h=1+this.h|0}),S.i=(function(){this.ia()}),new T().i(Rm,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dL:1,O:1,r:1,s:1,b:1,c:1,a:1});function Bm(e){this.M=null,this.h=0,this.E=0,this.dp=null,this.dp=e,om(this,e)}S=Bm.prototype=new cm,S.constructor=Bm;function Vm(){}Vm.prototype=S,S.ib=(function(){this.h>=this.dp.a.length&&H().x.i();var e=this.dp.a[this.h];return this.h=1+this.h|0,e}),S.i=(function(){return this.ib()}),new T().i(Bm,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dM:1,O:1,r:1,s:1,b:1,c:1,a:1});function Hm(e){return e.b7()+`(<not computed>)`}function Um(){}S=Um.prototype=new C,S.constructor=Um;function Wm(){}Wm.prototype=S;var Z=class e extends Ld{constructor(e){super(),this.v=null,this.v=e,I(this,null,null,!0,!0)}bQ(){return rr(this.v)}I(){return`JavaScriptException`}G(){return 1}H(e){return e===0?this.v:F().aK(e)}U(){return new Cp(this)}j(){return R().ar(this,-889275714,!1)}e(t){return this===t||t instanceof e&&N().z(this.v,t.v)}};new T().i(Z,`scala.scalajs.js.JavaScriptException`,{bj:1,M:1,J:1,t:1,a:1,v:1,d:1});function Gm(e,t){e.dK()!==void 0&&e.dy(qr().gd()),e.gc(t)}function Km(e){var t=e.dK();if(t===void 0){e.dy(qr().gd());var n=e.dE();Gm(e,n);var r=n}else var r=t;return r}function qm(e,t,n){Ym(e,new jp(t),n)}function Jm(e,t,n){Ym(e,new kp(t),n)}function Ym(e,t,n){Gm(e,t);var r=t.g9(),i=!1;i=!1,e.cq(!1);for(var a=e.bO(),o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bT(t),r&&!i&&(i=!0)}for(var c=e.bR(),l=0;l<(c.length|0);){var u=c[l];l=1+l|0,u.id(t,n),r&&!i&&(i=!0)}e.cq(!0);var d=e.dL();if(d!==void 0){for(var f=0,p=d.length|0;f<p;)d[f].a2(),f=1+f|0;d.length=0}r&&!i&&t.a7(new K((e=>{z().a4(e)})),new K((e=>void 0)))}function Xm(e,t){typeof console<`u`&&(e.fa&&console.error?console.error(t):console.log(t))}function Zm(e){this.fa=!1,this.bq=null,this.fa=e,new Ff,this.bq=``}S=Zm.prototype=new Cm,S.constructor=Zm;function Qm(){}Qm.prototype=S,S.hU=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bq=``+this.bq+t,t=``;else{var r=this.bq,i=t;Xm(this,``+r+i.substring(0,n)),this.bq=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new T().i(Zm,`java.lang.JSConsoleBasedPrintStream`,{d2:1,cS:1,cR:1,aw:1,au:1,ay:1,av:1,ax:1});function $m(e,t,n){for(;;)if(t<=0||n.f())return n;else{var r=-1+t|0,i=n.Z();t=r,n=i}}function eh(){this.du=null}S=eh.prototype=new Wm,S.constructor=eh;function th(){}th.prototype=S,S.n=(function(){return this.du}),S.e=(function(e){return this===e}),S.j=(function(){return dr(this)});function nh(){}S=nh.prototype=new am,S.constructor=nh;function rh(){}rh.prototype=S,S.n=(function(){return Hm(this)});function ih(){this.du=null,this.du=`Any`}S=ih.prototype=new th,S.constructor=ih;function ah(){}ah.prototype=S,S.iA=(function(){return kr.l()}),S.i1=(function(e){return new w(e)}),new T().i(ih,`scala.reflect.ManifestFactory$AnyManifest$`,{en:1,ep:1,eo:1,em:1,el:1,ek:1,eq:1,a:1,d:1});var oh;function sh(){return oh||=new ih,oh}function ch(e,t){this.el=null,this.ek=!1,this.em=null,this.cP=0,this.ei=null,this.ej=null,this.ep=!1,this.cQ=null,this.en=null,this.eo=0,this.en=t,this.el=void 0,Xl(this),this.cP=0,af(this),this.cQ=void 0,this.eo=1,Gm(this,e)}S=ch.prototype=new C,S.constructor=ch;function lh(){}lh.prototype=S,S.bS=(function(){return this.el}),S.n=(function(){return Fr(this)}),S.dI=(function(){return this.ek}),S.dL=(function(){return this.em}),S.cq=(function(e){this.ek=e}),S.dM=(function(e){this.em=e}),S.gi=(function(){}),S.e=(function(e){return this===e}),S.j=(function(){return dr(this)}),S.dx=(function(){return this.cP}),S.dy=(function(e){this.cP=e}),S.dR=(function(){return this}),S.gh=(function(){Lp(this)}),S.bO=(function(){return this.ei}),S.bR=(function(){return this.ej}),S.gu=(function(){return this.ep}),S.cy=(function(e){this.ep=e}),S.fQ=(function(e){this.ei=e}),S.fR=(function(e){this.ej=e}),S.dK=(function(){return this.cQ}),S.gc=(function(e){this.cQ=e}),S.cw=(function(){return Km(this)}),S.gt=(function(){return this.eo}),S.dE=(function(){return Km(this)}),S.gk=(function(){}),S.bM=(function(){return this.en.a2()+`.signal`}),new T().i(ch,`com.raquo.airstream.state.VarSignal`,{bM:1,a3:1,U:1,aj:1,al:1,a4:1,am:1,an:1,ao:1,bI:1});function Q(e,t){return e===t?!0:uh(t)&&t.fN(e)?e.dQ(t):!1}function uh(e){return!!(e&&e.$classData&&e.$classData.n.g)}function dh(e){e.cG=e.aa!==null,e.c0=-1}function fh(e){if(df(e.aa),e.cG){var t=e.aa.dx();t!==e.c0&&ph(e,e.dE(),t)}}function ph(e,t,n){Gm(e,t),e.c0=n}function mh(e,t,n){e.cG&&(e.c0=e.aa.dx())}function hh(e){cf(e.aa,e,!1),Lp(e)}function gh(e){$l(e.aa,e)}function _h(e,t,n){this.e5=null,this.e4=!1,this.e6=null,this.cE=0,this.e2=null,this.e3=null,this.e8=!1,this.cF=null,this.cG=!1,this.c0=0,this.aa=null,this.cH=null,this.cI=null,this.e7=0,this.aa=e,this.cH=t,this.cI=n,this.e5=void 0,Xl(this),this.cE=0,af(this),this.cF=void 0,dh(this),this.e7=1+e.gt()|0}S=_h.prototype=new C,S.constructor=_h;function vh(){}vh.prototype=S,S.bS=(function(){return this.e5}),S.bM=(function(){return Pr(this)}),S.n=(function(){return Fr(this)}),S.dI=(function(){return this.e4}),S.dL=(function(){return this.e6}),S.cq=(function(e){this.e4=e}),S.dM=(function(e){this.e6=e}),S.e=(function(e){return this===e}),S.j=(function(){return dr(this)}),S.dx=(function(){return this.cE}),S.dy=(function(e){this.cE=e}),S.dR=(function(){return this}),S.bO=(function(){return this.e2}),S.bR=(function(){return this.e3}),S.gu=(function(){return this.e8}),S.cy=(function(e){this.e8=e}),S.fQ=(function(e){this.e2=e}),S.fR=(function(e){this.e3=e}),S.dK=(function(){return this.cF}),S.gc=(function(e){this.cF=e}),S.cw=(function(){return Km(this)}),S.gk=(function(){fh(this)}),S.gh=(function(){hh(this)}),S.gi=(function(){gh(this)}),S.gt=(function(){return this.e7}),S.id=(function(e,t){mh(this,e,t),e.a7(new K((e=>{var n=this.cI;if(n.f())Jm(this,e,t);else{var r=n.s();try{var i=new jp(r.ck(e,new K((e=>null))))}catch(e){var a=e instanceof L?e:new Z(e);matchEnd8:{var i;if(cc().cj(a)){var i=new kp(a);break matchEnd8}throw a instanceof Z?a.v:a}}i.a7(new K((e=>(n=>{Jm(this,new Np(n,e),t)}))(e)),new K((e=>(n=>{n===null?Jm(this,e,t):n.f()||qm(this,n.s(),t)}))(e)))}})),new K((n=>{Ym(this,e.dJ(this.cH),t)})))}),S.dE=(function(){var e=this.aa.cw().dJ(this.cH);return e.a7(new K((t=>{var n=this.cI;if(n.f())return e;var r=n.s();try{var i=new jp(r.ck(t,new K((e=>null))))}catch(e){var a=e instanceof L?e:new Z(e);matchEnd8:{var i;if(cc().cj(a)){var i=new kp(a);break matchEnd8}throw a instanceof Z?a.v:a}}return i.a7(new K((e=>(t=>new kp(new Np(t,e))))(t)),new K((t=>{if(t===null)return e;var n=t.f()?Y():new X(new jp(t.s()));return n.f()?e:n.s()})))})),new K((t=>e)))}),new T().i(_h,`com.raquo.airstream.misc.MapSignal`,{bz:1,a3:1,U:1,aj:1,al:1,a4:1,am:1,an:1,ao:1,ak:1,bn:1,bo:1});function yh(){}S=yh.prototype=new am,S.constructor=yh;function bh(){}bh.prototype=S,S.fN=(function(e){return!0}),S.e=(function(e){return Q(this,e)}),S.j=(function(){return R().iB(this)}),S.n=(function(){return ep(this)}),S.g8=(function(e){return qd(this,e)}),S.f=(function(){return Jd(this)}),S.dQ=(function(e){return Yd(this,e)}),S.ck=(function(e,t){return Tl(this,e,t)}),S.ba=(function(e){return this.g8(e|0)});function xh(){}S=xh.prototype=new rh,S.constructor=xh;function Sh(){}Sh.prototype=S;function Ch(e){return!!(e&&e.$classData&&e.$classData.n.n)}function wh(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function Th(e){e.gy=ro()}function Eh(e,t){return e.bw=t,e}function Dh(){this.bw=null}S=Dh.prototype=new Sh,S.constructor=Dh;function Oh(){}Oh.prototype=S,S.p=(function(e){return this.bw.p(e)}),S.k=(function(){return this.bw.k()}),S.f=(function(){return this.bw.f()});function kh(){this.ey=null,this.ez=!1,this.eu=null,this.ev=!1,this.ew=null,this.ex=!1,this.gz=null,this.et=null,this.gx=null,this.eA=null,this.eB=!1,this.gy=null,ea(this),Ji(this),Ki(this),qi(this),Th(this)}S=kh.prototype=new C,S.constructor=kh;function Ah(){}Ah.prototype=S,S.iJ=(function(){return this.ez||=(this.ey=Fc(new Ic,`strong`,!1),!0),this.ey}),S.cm=(function(){return this.ev||=(this.eu=Fc(new Ic,`div`,!1),!0),this.eu}),S.ct=(function(){return this.ex||=(this.ew=new yc(`click`),!0),this.ew}),S.iL=(function(){return this.eB||=(this.eA=new vd(this),!0),this.eA}),new T().i(kh,`com.raquo.laminar.api.package$$anon$1`,{bV:1,c6:1,bZ:1,c4:1,c3:1,c5:1,c1:1,bT:1,bP:1,bS:1,aq:1,ar:1,ap:1,bQ:1});function jh(e){this.bw=null,Eh(this,e)}S=jh.prototype=new Oh,S.constructor=jh;function Mh(){}Mh.prototype=S,S.m=(function(){return new um(this)}),S.bc=(function(){return`IndexedSeqView`}),S.aq=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.C=(function(){return this.k()}),new T().i(jh,`scala.collection.IndexedSeqView$Id`,{dQ:1,e0:1,dC:1,dD:1,h:1,i:1,b:1,k:1,c:1,j:1,e3:1,a:1,dZ:1,l:1,dP:1,o:1});function Nh(){}S=Nh.prototype=new bh,S.constructor=Nh;function Ph(){}Ph.prototype=S;function Fh(e,t){return!Lh(t)||e.k()===t.k()}function Ih(e,t){if(Lh(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.fC(),o=t.fC(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=N().z(e.p(i),t.p(i)),i=1+i|0;if(i<n&&r)for(var p=e.m().cn(i),m=t.m().cn(i);r&&p.t();)r=N().z(p.i(),m.i())}return r}else return Yd(e,t)}function Lh(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Rh(){}S=Rh.prototype=new bh,S.constructor=Rh;function zh(){}zh.prototype=S;function Bh(){}S=Bh.prototype=new zh,S.constructor=Bh;function Vh(){}Vh.prototype=S,S.fy=(function(e){return El(this,e)});function Hh(){}S=Hh.prototype=new Ph,S.constructor=Hh;function Uh(){}Uh.prototype=S,S.fN=(function(e){return Fh(this,e)}),S.dQ=(function(e){return Ih(this,e)}),S.bc=(function(){return`IndexedSeq`}),S.aq=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.C=(function(){return this.k()}),S.b7=(function(){return`ArraySeq`}),S.fC=(function(){return 2147483647});function $(){}S=$.prototype=new zh,S.constructor=$;function Wh(){}Wh.prototype=S,S.bc=(function(){return`IndexedSeq`}),S.aq=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),S.C=(function(){return this.k()}),S.b7=(function(){return`ArraySeq`}),S.e=(function(e){return e instanceof $&&cs().bP(this.W())!==cs().bP(e.W())?!1:Q(this,e)});function Gh(e){this.aA=null,this.aA=e}S=Gh.prototype=new Uh,S.constructor=Gh;function Kh(){}Kh.prototype=S,S.k=(function(){return this.aA.a.length}),S.j=(function(){var e=R();return e.fM(this.aA,e.u)}),S.e=(function(e){return e instanceof Gh?A().g0(this.aA,e.aA):Q(this,e)}),S.m=(function(){return new Bm(this.aA)}),S.bL=(function(e){return this.aA.a[e]}),S.g=(function(e){return this.bL(e|0)}),S.p=(function(e){return this.bL(e)}),new T().i(Gh,`scala.collection.immutable.ArraySeq$ofBoolean`,{aS:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function qh(e){this.aB=null,this.aB=e}S=qh.prototype=new Uh,S.constructor=qh;function Jh(){}Jh.prototype=S,S.k=(function(){return this.aB.a.length}),S.bD=(function(e){return this.aB.a[e]}),S.j=(function(){var e=R();return e.fE(this.aB,e.u)}),S.e=(function(e){return e instanceof qh?A().fT(this.aB,e.aB):Q(this,e)}),S.m=(function(){return new wm(this.aB)}),S.g=(function(e){return this.bD(e|0)}),S.p=(function(e){return this.bD(e)}),new T().i(qh,`scala.collection.immutable.ArraySeq$ofByte`,{aT:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Yh(e){this.ah=null,this.ah=e}S=Yh.prototype=new Uh,S.constructor=Yh;function Xh(){}Xh.prototype=S,S.k=(function(){return this.ah.a.length}),S.bE=(function(e){return this.ah.a[e]}),S.j=(function(){var e=R();return e.fF(this.ah,e.u)}),S.e=(function(e){return e instanceof Yh?A().fU(this.ah,e.ah):Q(this,e)}),S.m=(function(){return new Em(this.ah)}),S.bB=(function(e,t,n,r){return new yg(this.ah).bB(e,t,n,r)}),S.g=(function(e){return gr(this.bE(e|0))}),S.p=(function(e){return gr(this.bE(e))}),new T().i(Yh,`scala.collection.immutable.ArraySeq$ofChar`,{aU:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function Zh(e){this.aC=null,this.aC=e}S=Zh.prototype=new Uh,S.constructor=Zh;function Qh(){}Qh.prototype=S,S.k=(function(){return this.aC.a.length}),S.j=(function(){var e=R();return e.fG(this.aC,e.u)}),S.e=(function(e){return e instanceof Zh?A().fV(this.aC,e.aC):Q(this,e)}),S.m=(function(){return new Om(this.aC)}),S.bG=(function(e){return this.aC.a[e]}),S.g=(function(e){return this.bG(e|0)}),S.p=(function(e){return this.bG(e)}),new T().i(Zh,`scala.collection.immutable.ArraySeq$ofDouble`,{aV:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function $h(e){this.aD=null,this.aD=e}S=$h.prototype=new Uh,S.constructor=$h;function eg(){}eg.prototype=S,S.k=(function(){return this.aD.a.length}),S.j=(function(){var e=R();return e.fH(this.aD,e.u)}),S.e=(function(e){return e instanceof $h?A().fW(this.aD,e.aD):Q(this,e)}),S.m=(function(){return new Am(this.aD)}),S.bH=(function(e){return this.aD.a[e]}),S.g=(function(e){return this.bH(e|0)}),S.p=(function(e){return this.bH(e)}),new T().i($h,`scala.collection.immutable.ArraySeq$ofFloat`,{aW:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function tg(e){this.aE=null,this.aE=e}S=tg.prototype=new Uh,S.constructor=tg;function ng(){}ng.prototype=S,S.k=(function(){return this.aE.a.length}),S.j=(function(){var e=R();return e.fI(this.aE,e.u)}),S.e=(function(e){return e instanceof tg?A().fX(this.aE,e.aE):Q(this,e)}),S.m=(function(){return new Mm(this.aE)}),S.bI=(function(e){return this.aE.a[e]}),S.g=(function(e){return this.bI(e|0)}),S.p=(function(e){return this.bI(e)}),new T().i(tg,`scala.collection.immutable.ArraySeq$ofInt`,{aX:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function rg(e){this.aF=null,this.aF=e}S=rg.prototype=new Uh,S.constructor=rg;function ig(){}ig.prototype=S,S.k=(function(){return this.aF.a.length}),S.j=(function(){var e=R();return e.fJ(this.aF,e.u)}),S.e=(function(e){return e instanceof rg?A().fY(this.aF,e.aF):Q(this,e)}),S.m=(function(){return new Pm(this.aF)}),S.bJ=(function(e){return this.aF.a[e]}),S.g=(function(e){return this.bJ(e|0)}),S.p=(function(e){return this.bJ(e)}),new T().i(rg,`scala.collection.immutable.ArraySeq$ofLong`,{aY:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function ag(e){this.aG=null,this.aG=e}S=ag.prototype=new Uh,S.constructor=ag;function og(){}og.prototype=S,S.k=(function(){return this.aG.a.length}),S.p=(function(e){return this.aG.a[e]}),S.j=(function(){var e=R();return e.fD(this.aG,e.u)}),S.e=(function(e){return e instanceof ag?ml().g1(this.aG,e.aG):Q(this,e)}),S.m=(function(){return om(new sm,this.aG)}),S.g=(function(e){return this.p(e|0)}),new T().i(ag,`scala.collection.immutable.ArraySeq$ofRef`,{aZ:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function sg(e){this.aH=null,this.aH=e}S=sg.prototype=new Uh,S.constructor=sg;function cg(){}cg.prototype=S,S.k=(function(){return this.aH.a.length}),S.bF=(function(e){return this.aH.a[e]}),S.j=(function(){var e=R();return e.fK(this.aH,e.u)}),S.e=(function(e){return e instanceof sg?A().fZ(this.aH,e.aH):Q(this,e)}),S.m=(function(){return new Im(this.aH)}),S.g=(function(e){return this.bF(e|0)}),S.p=(function(e){return this.bF(e)}),new T().i(sg,`scala.collection.immutable.ArraySeq$ofShort`,{b0:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function lg(e){this.b3=null,this.b3=e}S=lg.prototype=new Uh,S.constructor=lg;function ug(){}ug.prototype=S,S.k=(function(){return this.b3.a.length}),S.j=(function(){var e=R();return e.fL(this.b3,e.u)}),S.e=(function(e){return e instanceof lg?this.b3.a.length===e.b3.a.length:Q(this,e)}),S.m=(function(){return new Rm(this.b3)}),S.bK=(function(e){}),S.g=(function(e){this.bK(e|0)}),S.p=(function(e){this.bK(e)}),new T().i(lg,`scala.collection.immutable.ArraySeq$ofUnit`,{b1:1,K:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,Q:1,B:1,q:1,p:1,P:1,a:1});function dg(e,t,n,r){for(;;)if(t===r)return n.f()?0:1;else if(n.f())return-1;else{var i=1+t|0,a=n.Z();t=i,n=a}}function fg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.f(),i=n.f();if(!(r||i)&&N().z(t.a8(),n.a8())){var a=t.Z(),o=n.Z();t=a,n=o}else return r&&i}}function pg(){}S=pg.prototype=new Ph,S.constructor=pg;function mg(){}mg.prototype=S,S.m=(function(){return new _p(this)}),S.bc=(function(){return`LinearSeq`}),S.g8=(function(e){return pp(this,e)}),S.p=(function(e){return mp(this,e)}),S.dQ=(function(e){return hp(this,e)}),S.f=(function(){return this===Bg()}),S.b8=(function(e){for(var t=this;!t.f();)e.g(t.a8()),t=t.Z()}),S.k=(function(){for(var e=this,t=0;!e.f();)t=1+t|0,e=e.Z();return t}),S.aq=(function(e){return e<0?1:dg(this,0,this,e)}),S.b7=(function(){return`List`}),S.e=(function(e){return e instanceof pg?fg(this,this,e):Q(this,e)}),S.g=(function(e){return mp(this,e|0)}),S.ba=(function(e){return pp(this,e|0)}),S.hp=(function(e){return $m(this,e,this)});function hg(e){this.ai=null,this.ai=e}S=hg.prototype=new Wh,S.constructor=hg;function gg(){}gg.prototype=S,S.k=(function(){return this.ai.a.length}),S.j=(function(){var e=R();return e.fM(this.ai,e.u)}),S.e=(function(e){return e instanceof hg?A().g0(this.ai,e.ai):$.prototype.e.call(this,e)}),S.m=(function(){return new Bm(this.ai)}),S.bL=(function(e){return this.ai.a[e]}),S.g=(function(e){return this.bL(e|0)}),S.p=(function(e){return this.bL(e)}),S.W=(function(){return this.ai}),new T().i(hg,`scala.collection.mutable.ArraySeq$ofBoolean`,{b4:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function _g(e){this.aj=null,this.aj=e}S=_g.prototype=new Wh,S.constructor=_g;function vg(){}vg.prototype=S,S.k=(function(){return this.aj.a.length}),S.bD=(function(e){return this.aj.a[e]}),S.j=(function(){var e=R();return e.fE(this.aj,e.u)}),S.e=(function(e){return e instanceof _g?A().fT(this.aj,e.aj):$.prototype.e.call(this,e)}),S.m=(function(){return new wm(this.aj)}),S.g=(function(e){return this.bD(e|0)}),S.p=(function(e){return this.bD(e)}),S.W=(function(){return this.aj}),new T().i(_g,`scala.collection.mutable.ArraySeq$ofByte`,{b5:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function yg(e){this.S=null,this.S=e}S=yg.prototype=new Wh,S.constructor=yg;function bg(){}bg.prototype=S,S.k=(function(){return this.S.a.length}),S.bE=(function(e){return this.S.a[e]}),S.j=(function(){var e=R();return e.fF(this.S,e.u)}),S.e=(function(e){return e instanceof yg?A().fU(this.S,e.S):$.prototype.e.call(this,e)}),S.m=(function(){return new Em(this.S)}),S.bB=(function(e,t,n,r){var i=e.O;t.length!==0&&(i.q=``+i.q+t);var a=this.S.a.length;if(a!==0)if(n===``)i.gY(this.S);else{i.k();var o=this.S.a[0],s=``+sr(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.S.a[c],u=``+sr(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),S.g=(function(e){return gr(this.bE(e|0))}),S.p=(function(e){return gr(this.bE(e))}),S.W=(function(){return this.S}),new T().i(yg,`scala.collection.mutable.ArraySeq$ofChar`,{b6:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function xg(e){this.ak=null,this.ak=e}S=xg.prototype=new Wh,S.constructor=xg;function Sg(){}Sg.prototype=S,S.k=(function(){return this.ak.a.length}),S.j=(function(){var e=R();return e.fG(this.ak,e.u)}),S.e=(function(e){return e instanceof xg?A().fV(this.ak,e.ak):$.prototype.e.call(this,e)}),S.m=(function(){return new Om(this.ak)}),S.bG=(function(e){return this.ak.a[e]}),S.g=(function(e){return this.bG(e|0)}),S.p=(function(e){return this.bG(e)}),S.W=(function(){return this.ak}),new T().i(xg,`scala.collection.mutable.ArraySeq$ofDouble`,{b7:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Cg(e){this.al=null,this.al=e}S=Cg.prototype=new Wh,S.constructor=Cg;function wg(){}wg.prototype=S,S.k=(function(){return this.al.a.length}),S.j=(function(){var e=R();return e.fH(this.al,e.u)}),S.e=(function(e){return e instanceof Cg?A().fW(this.al,e.al):$.prototype.e.call(this,e)}),S.m=(function(){return new Am(this.al)}),S.bH=(function(e){return this.al.a[e]}),S.g=(function(e){return this.bH(e|0)}),S.p=(function(e){return this.bH(e)}),S.W=(function(){return this.al}),new T().i(Cg,`scala.collection.mutable.ArraySeq$ofFloat`,{b8:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Tg(e){this.am=null,this.am=e}S=Tg.prototype=new Wh,S.constructor=Tg;function Eg(){}Eg.prototype=S,S.k=(function(){return this.am.a.length}),S.j=(function(){var e=R();return e.fI(this.am,e.u)}),S.e=(function(e){return e instanceof Tg?A().fX(this.am,e.am):$.prototype.e.call(this,e)}),S.m=(function(){return new Mm(this.am)}),S.bI=(function(e){return this.am.a[e]}),S.g=(function(e){return this.bI(e|0)}),S.p=(function(e){return this.bI(e)}),S.W=(function(){return this.am}),new T().i(Tg,`scala.collection.mutable.ArraySeq$ofInt`,{b9:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Dg(e){this.an=null,this.an=e}S=Dg.prototype=new Wh,S.constructor=Dg;function Og(){}Og.prototype=S,S.k=(function(){return this.an.a.length}),S.j=(function(){var e=R();return e.fJ(this.an,e.u)}),S.e=(function(e){return e instanceof Dg?A().fY(this.an,e.an):$.prototype.e.call(this,e)}),S.m=(function(){return new Pm(this.an)}),S.bJ=(function(e){return this.an.a[e]}),S.g=(function(e){return this.bJ(e|0)}),S.p=(function(e){return this.bJ(e)}),S.W=(function(){return this.an}),new T().i(Dg,`scala.collection.mutable.ArraySeq$ofLong`,{ba:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function kg(e){this.ao=null,this.ao=e}S=kg.prototype=new Wh,S.constructor=kg;function Ag(){}Ag.prototype=S,S.k=(function(){return this.ao.a.length}),S.p=(function(e){return this.ao.a[e]}),S.j=(function(){var e=R();return e.fD(this.ao,e.u)}),S.e=(function(e){return e instanceof kg?ml().g1(this.ao,e.ao):$.prototype.e.call(this,e)}),S.m=(function(){return om(new sm,this.ao)}),S.g=(function(e){return this.p(e|0)}),S.W=(function(){return this.ao}),new T().i(kg,`scala.collection.mutable.ArraySeq$ofRef`,{bb:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function jg(e){this.ap=null,this.ap=e}S=jg.prototype=new Wh,S.constructor=jg;function Mg(){}Mg.prototype=S,S.k=(function(){return this.ap.a.length}),S.bF=(function(e){return this.ap.a[e]}),S.j=(function(){var e=R();return e.fK(this.ap,e.u)}),S.e=(function(e){return e instanceof jg?A().fZ(this.ap,e.ap):$.prototype.e.call(this,e)}),S.m=(function(){return new Im(this.ap)}),S.g=(function(e){return this.bF(e|0)}),S.p=(function(e){return this.bF(e)}),S.W=(function(){return this.ap}),new T().i(jg,`scala.collection.mutable.ArraySeq$ofShort`,{bc:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Ng(e){this.aI=null,this.aI=e}S=Ng.prototype=new Wh,S.constructor=Ng;function Pg(){}Pg.prototype=S,S.k=(function(){return this.aI.a.length}),S.j=(function(){var e=R();return e.fL(this.aI,e.u)}),S.e=(function(e){return e instanceof Ng?this.aI.a.length===e.aI.a.length:$.prototype.e.call(this,e)}),S.m=(function(){return new Rm(this.aI)}),S.bK=(function(e){}),S.g=(function(e){this.bK(e|0)}),S.p=(function(e){this.bK(e)}),S.W=(function(){return this.aI}),new T().i(Ng,`scala.collection.mutable.ArraySeq$ofUnit`,{bd:1,L:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Fg(e,t){this.dq=null,this.dr=null,this.dq=e,this.dr=t}S=Fg.prototype=new mg,S.constructor=Fg;function Ig(){}Ig.prototype=S,S.a8=(function(){return this.dq}),S.I=(function(){return`::`}),S.G=(function(){return 2}),S.H=(function(e){switch(e){case 0:return this.dq;case 1:return this.dr;default:return F().aK(e)}}),S.U=(function(){return new Cp(this)}),S.Z=(function(){return this.dr}),new T().i(Fg,`scala.collection.immutable.$colon$colon`,{e4:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b2:1,a1:1,aO:1,b3:1,aQ:1,q:1,p:1,B:1,aR:1,a:1,v:1});function Lg(){}S=Lg.prototype=new mg,S.constructor=Lg;function Rg(){}Rg.prototype=S,S.hK=(function(){throw new zf(`head of empty list`)}),S.iP=(function(){throw new Rf(`tail of empty list`)}),S.C=(function(){return 0}),S.m=(function(){return H().x}),S.I=(function(){return`Nil`}),S.G=(function(){return 0}),S.H=(function(e){return F().aK(e)}),S.U=(function(){return new Cp(this)}),S.Z=(function(){this.iP()}),S.a8=(function(){this.hK()}),new T().i(Lg,`scala.collection.immutable.Nil$`,{e7:1,ae:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,z:1,y:1,A:1,b2:1,a1:1,aO:1,b3:1,aQ:1,q:1,p:1,B:1,aR:1,a:1,v:1});var zg;function Bg(){return zg||=new Lg,zg}function Vg(e,t){return e.O=t,e}function Hg(e){return Vg(e,new Rd),e}function Ug(){this.O=null}S=Ug.prototype=new zh,S.constructor=Ug;function Wg(){}Wg.prototype=S,S.bc=(function(){return`IndexedSeq`}),S.m=(function(){return new um(new jh(this))}),S.aq=(function(e){var t=this.O.k();return t===e?0:t<e?-1:1}),S.fy=(function(e){return El(this,e)}),S.k=(function(){return this.O.k()}),S.C=(function(){return this.O.k()}),S.gV=(function(e){var t=this.O,n=``+sr(e);return t.q+=n,this}),S.n=(function(){return this.O.q}),S.f=(function(){return this.O.k()===0}),S.gq=(function(){return this.O.q}),S.dB=(function(e){return this.gV(_r(e))}),S.g=(function(e){var t=e|0;return gr(this.O.fO(t))}),S.p=(function(e){return gr(this.O.fO(e))}),new T().i(Ug,`scala.collection.mutable.StringBuilder`,{ef:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,ed:1,be:1,bg:1,bf:1,E:1,n:1,o:1,F:1,ab:1,a:1});function Gg(e,t){return e.aJ=t,e}function Kg(e){return Gg(e,[]),e}function qg(){this.aJ=null}S=qg.prototype=new Vh,S.constructor=qg;function Jg(){}Jg.prototype=S,S.bc=(function(){return`IndexedSeq`}),S.m=(function(){return new um(new jh(this))}),S.aq=(function(e){var t=this.aJ.length|0;return t===e?0:t<e?-1:1}),S.p=(function(e){return this.aJ[e]}),S.k=(function(){return this.aJ.length|0}),S.C=(function(){return this.aJ.length|0}),S.b7=(function(){return`WrappedArray`}),S.gq=(function(){return this}),S.dB=(function(e){return this.aJ.push(e),this}),S.g=(function(e){var t=e|0;return this.aJ[t]}),new T().i(qg,`scala.scalajs.js.WrappedArray`,{eG:1,e8:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,u:1,ea:1,bg:1,bf:1,ee:1,q:1,p:1,E:1,n:1,o:1,F:1,ec:1,be:1,a:1}),Zn=new j(0,0),Mr.z=Zn,po(new(Qp.r()).C([]));