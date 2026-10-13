var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap;var ee=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const te=e=>new ee(typeof e==`string`?e:e+``,void 0,m),ne=(e,...t)=>new ee(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),re=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ie=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return te(t)})(e):e,{is:ae,defineProperty:oe,getOwnPropertyDescriptor:se,getOwnPropertyNames:ce,getOwnPropertySymbols:le,getPrototypeOf:ue}=Object,de=globalThis,fe=de.trustedTypes,pe=fe?fe.emptyScript:``,me=de.reactiveElementPolyfillSupport,he=(e,t)=>e,ge={toAttribute(e,t){switch(t){case Boolean:e=e?pe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},_e=(e,t)=>!ae(e,t),ve={attribute:!0,type:String,converter:ge,reflect:!1,useDefault:!1,hasChanged:_e};Symbol.metadata??=Symbol(`metadata`),de.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ve){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&oe(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=se(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ve}static _$Ei(){if(this.hasOwnProperty(he(`elementProperties`)))return;let e=ue(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(he(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(he(`properties`))){let e=this.properties,t=[...ce(e),...le(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ie(e))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ge:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ge:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??_e)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:`open`},ye[he(`elementProperties`)]=new Map,ye[he(`finalized`)]=new Map,me?.({ReactiveElement:ye}),(de.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const be=globalThis,xe=be.trustedTypes,Se=xe?xe.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ce=`$lit$`,g=`lit$${Math.random().toFixed(9).slice(2)}$`,we=`?`+g,Te=`<${we}>`,Ee=document,De=()=>Ee.createComment(``),Oe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ke=Array.isArray,Ae=e=>ke(e)||typeof e?.[Symbol.iterator]==`function`,je=`[ 	
\f\r]`,Me=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Pe=/>/g,Fe=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Ie=/'/g,Le=/"/g,Re=/^(?:script|style|textarea|title)$/i,ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Be=Symbol.for(`lit-noChange`),_=Symbol.for(`lit-nothing`),Ve=new WeakMap,He=Ee.createTreeWalker(Ee,129);function Ue(e,t){if(!ke(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Se===void 0?t:Se.createHTML(t)}const We=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Me;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Me?c[1]===`!--`?o=Ne:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Fe):(Re.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Fe):o=Pe:o===Fe?c[0]===`>`?(o=i??Me,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Fe:c[3]===`"`?Le:Ie):o===Le||o===Ie?o=Fe:o===Ne||o===Pe?o=Me:(o=Fe,i=void 0);let d=o===Fe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Me?n+Te:l>=0?(r.push(s),n.slice(0,l)+Ce+n.slice(l)+g+d):n+g+(l===-2?t:d)}return[Ue(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ge=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=We(t,n);if(this.el=e.createElement(l,r),He.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=He.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ce)){let t=u[o++],n=i.getAttribute(e).split(g),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Xe:r[1]===`?`?Ze:r[1]===`@`?Qe:Ye}),i.removeAttribute(e)}else e.startsWith(g)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Re.test(i.tagName)){let e=i.textContent.split(g),t=e.length-1;if(t>0){i.textContent=xe?xe.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],De()),He.nextNode(),c.push({type:2,index:++a});i.append(e[t],De())}}}else if(i.nodeType===8)if(i.data===we)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(g,e+1))!==-1;)c.push({type:7,index:a}),e+=g.length-1}a++}}static createElement(e,t){let n=Ee.createElement(`template`);return n.innerHTML=e,n}};function Ke(e,t,n=e,r){if(t===Be)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Oe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ke(e,i._$AS(e,t.values),i,r)),t}var qe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ee).importNode(t,!0);He.currentNode=r;let i=He.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Je(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new $e(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=He.nextNode(),a++)}return He.currentNode=Ee,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Je=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ke(this,e,t),Oe(e)?e===_||e==null||e===``?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Be&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ae(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&Oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ge.createElement(Ue(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new qe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ve.get(e.strings);return t===void 0&&Ve.set(e.strings,t=new Ge(e)),t}k(t){ke(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(De()),this.O(De()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ye=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ke(this,e,t,0),a=!Oe(e)||e!==this._$AH&&e!==Be,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ke(this,r[n+o],t,o),s===Be&&(s=this._$AH[o]),a||=!Oe(s)||s!==this._$AH[o],s===_?e=_:e!==_&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Xe=class extends Ye{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},Ze=class extends Ye{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},Qe=class extends Ye{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ke(this,e,t,0)??_)===Be)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ke(this,e)}};const et={M:Ce,P:g,A:we,C:1,L:We,R:qe,D:Ae,V:Ke,I:Je,H:Ye,N:Ze,U:Qe,B:Xe,F:$e},tt=be.litHtmlPolyfillSupport;tt?.(Ge,Je),(be.litHtmlVersions??=[]).push(`3.3.1`);const nt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Je(t.insertBefore(De(),e),e,void 0,n??{})}return i._$AI(e),i},rt=globalThis;var it=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=nt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Be}};it._$litElement$=!0,it.finalized=!0,rt.litElementHydrateSupport?.({LitElement:it});const at=rt.litElementPolyfillSupport;at?.({LitElement:it}),(rt.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ot=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},st={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:_e},ct=(e=st,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?ct(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function lt(e){return v({...e,state:!0,attribute:!1})}
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
var ft=ne`
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
`,pt=/;\s+$/;function mt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ht(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(pt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var gt,_t=class extends it{constructor(){super(),u(this,gt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ft,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,gt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,gt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=ht({property:mt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=ht({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};gt=new WeakMap,s([v()],_t.prototype,`dir`,2),s([v()],_t.prototype,`lang`,2),s([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],_t.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),yt=class extends _t{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[vt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};yt.formAssociated=!0,s([v({reflect:!0})],yt.prototype,`name`,2),s([v({type:Boolean})],yt.prototype,`disabled`,2),s([v({state:!0,attribute:!1})],yt.prototype,`valueHasChanged`,2),s([v({state:!0,attribute:!1})],yt.prototype,`hasInteracted`,2),s([v({attribute:`custom-error`,reflect:!0})],yt.prototype,`customError`,2),s([v({attribute:!1,state:!0,type:Object})],yt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt={small:`s`,medium:`m`,large:`l`},xt=new Set;function St(e,t){t in bt&&!xt.has(`${e}:${t}`)&&(xt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${bt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},wt=ne`
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
`,Tt=ne`
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
`,Et=ne`
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
function Dt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ot=new Set,kt=new Map;let At,jt=`ltr`,Mt=`en`;const Nt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Nt){let e=new MutationObserver(Ft);jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Pt(...e){e.map(e=>{let t=e.$code.toLowerCase();kt.has(t)?kt.set(t,Object.assign(Object.assign({},kt.get(t)),e)):kt.set(t,e),At||=e}),Ft()}function Ft(){Nt&&(jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language),[...Ot.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var It=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ot.add(this.host)}hostDisconnected(){Ot.delete(this.host)}dir(){return`${this.host.dir||jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Mt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return At?At.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=kt.get(`${n}-${r}`),a=kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&At&&At[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(At&&At[e])i=At[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Lt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Pt(Lt);var Rt=Lt,zt=class extends It{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Pt(Rt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Bt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Vt=e=>(...t)=>({_$litDirective$:e,values:t});var Ht=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ut=Vt(class extends Ht{constructor(e){if(super(e),e.type!==Bt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Be}}),Wt=e=>e??_,Gt=Symbol.for(``),Kt=e=>{if(e?.r===Gt)return e?._$litStatic$},qt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Gt}),Jt=new Map,Yt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Kt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Jt.get(e))===void 0&&(o.raw=o,Jt.set(e,t=o)),n=s}return e(t,...n)})(ze);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends yt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Ct(this,`[default]`,`start`,`end`),this.localize=new zt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){St(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?qt`a`:qt`button`;return Yt`
      <${t}
        part="base button"
        class=${Ut({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Wt(e?void 0:this.disabled)}
        type=${Wt(e?void 0:this.type)}
        title=${this.title}
        name=${Wt(e?void 0:this.name)}
        value=${Wt(e?void 0:this.value)}
        href=${Wt(e?this.href:void 0)}
        target=${Wt(e?this.target:void 0)}
        download=${Wt(e?this.download:void 0)}
        rel=${Wt(e&&this.rel?this.rel:void 0)}
        role=${Wt(e?void 0:`button`)}
        aria-disabled=${Wt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Yt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Yt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};y.shadowRootOptions={...yt.shadowRootOptions,delegatesFocus:!0},y.css=[Tt,Et,wt],s([dt(`.button`)],y.prototype,`button`,2),s([dt(`slot:not([name])`)],y.prototype,`labelSlot`,2),s([lt()],y.prototype,`invalid`,2),s([lt()],y.prototype,`isIconButton`,2),s([v()],y.prototype,`title`,2),s([v({reflect:!0})],y.prototype,`variant`,2),s([v({reflect:!0})],y.prototype,`appearance`,2),s([v({reflect:!0})],y.prototype,`size`,2),s([Dt(`size`)],y.prototype,`handleSizeChange`,1),s([v({attribute:`with-caret`,type:Boolean,reflect:!0})],y.prototype,`withCaret`,2),s([v({attribute:`with-start`,type:Boolean})],y.prototype,`withStart`,2),s([v({attribute:`with-end`,type:Boolean})],y.prototype,`withEnd`,2),s([v({type:Boolean})],y.prototype,`disabled`,2),s([v({type:Boolean,reflect:!0})],y.prototype,`loading`,2),s([v({type:Boolean,reflect:!0})],y.prototype,`pill`,2),s([v()],y.prototype,`type`,2),s([v({reflect:!0})],y.prototype,`name`,2),s([v({reflect:!0})],y.prototype,`value`,2),s([v({reflect:!0})],y.prototype,`href`,2),s([v()],y.prototype,`target`,2),s([v()],y.prototype,`rel`,2),s([v()],y.prototype,`download`,2),s([v({attribute:`formaction`})],y.prototype,`formAction`,2),s([v({attribute:`formenctype`})],y.prototype,`formEnctype`,2),s([v({attribute:`formmethod`})],y.prototype,`formMethod`,2),s([v({attribute:`formnovalidate`,type:Boolean})],y.prototype,`formNoValidate`,2),s([v({attribute:`formtarget`})],y.prototype,`formTarget`,2),s([Dt(`disabled`,{waitUntilFirstUpdate:!0})],y.prototype,`handleDisabledChange`,1),s([Dt(`href`)],y.prototype,`handleHrefChange`,1),s([Dt(`loading`,{waitUntilFirstUpdate:!0})],y.prototype,`handleLoadingChange`,1),y=s([ot(`wa-button`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xt=ne`
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
`,Zt=class extends _t{constructor(){super(...arguments),this.localize=new zt(this)}render(){return ze`
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
    `}};Zt.css=Xt,Zt=s([ot(`wa-spinner`)],Zt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},$t=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},en=ne`
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
`,tn=``,nn=``;function rn(){return tn.replace(/\/$/,``)}function an(e){nn=e}function on(){if(!nn){let e=document.querySelector(`[data-fa-kit-code]`);e&&an(e.getAttribute(`data-fa-kit-code`)||``)}return nn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var sn=`7.3.0`;function cn(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function ln(e,t,n){let r=cn(e,t,n),i=rn();if(i)return`${i}/${r}/${e}.svg`;let a=on();return a.length>0?`https://ka-p.fontawesome.com/releases/v${sn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${sn}/svgs/${r}/${e}.svg`}var un={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>ln(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function dn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var fn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},pn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=fn[n][e]??fn.regular[e]??fn.regular[`circle-question`];return r?dn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},mn=`classic`,hn=[un,pn],gn=new Set;function _n(e){gn.add(e)}function vn(e){gn.delete(e)}function yn(e){return hn.find(t=>t.name===e)}function bn(){return mn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:xn}=et,Sn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=Symbol(),wn=Symbol(),Tn,En=new Map,b=class extends _t{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Cn:wn}catch{return wn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Cn;Tn||=new DOMParser;let r=Tn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Cn}catch{return Cn}}}connectedCallback(){super.connectedCallback(),_n(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vn(this)}async getIconSource(){let e=yn(this.library),t=this.family||bn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?yn(this.library):void 0;if(!e){this.svg=null;return}let r=En.get(e);r||(r=this.resolveIcon(e,n),En.set(e,r));let i=await r;if(i===wn&&En.delete(e),e===(await this.getIconSource()).url){if(Sn(i)){this.svg=i;return}switch(i){case wn:case Cn:this.svg=null,this.dispatchEvent(new Qt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new $t)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=yn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:ze`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};b.css=en,s([lt()],b.prototype,`svg`,2),s([v({reflect:!0})],b.prototype,`name`,2),s([v({reflect:!0})],b.prototype,`family`,2),s([v({reflect:!0})],b.prototype,`variant`,2),s([v({reflect:!0})],b.prototype,`canvas`,2),s([v({attribute:`auto-width`,type:Boolean,reflect:!0})],b.prototype,`autoWidth`,2),s([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],b.prototype,`swapOpacity`,2),s([v()],b.prototype,`src`,2),s([v()],b.prototype,`label`,2),s([v({reflect:!0})],b.prototype,`library`,2),s([v({type:Number,reflect:!0})],b.prototype,`rotate`,2),s([v({type:String,reflect:!0})],b.prototype,`flip`,2),s([v({type:String,reflect:!0})],b.prototype,`animation`,2),s([Dt(`label`)],b.prototype,`handleLabelChange`,1),s([Dt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],b.prototype,`setIcon`,1),b=s([ot(`wa-icon`)],b);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>y}),On=class extends Event{constructor(e){super(`wa-content-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},kn=ne`
  :host {
    display: contents;
  }

  /*
   * Force-hide unselected children. A bare [hidden] (display: none from the UA sheet) loses to any
   * author display set on the child — a utility class like .wa-flank, or a component's own
   * :host display — so children with their own layout wouldn't actually hide without this.
   */
  ::slotted([hidden]) {
    display: none !important;
  }

  /*
   * @keyframes are defined in both document scope (random-content.ts) and here:
   * Chromium resolves animation-name from the document for slotted elements;
   * WebKit resolves it from the shadow root. Both copies are needed.
   */

  @keyframes wa-rc-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes wa-rc-fade-up {
    from {
      opacity: 0;
      transform: translateY(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-down {
    from {
      opacity: 0;
      transform: translateY(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes wa-rc-fade-left {
    from {
      opacity: 0;
      transform: translateX(var(--animation-translate, 0.5em));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes wa-rc-fade-right {
    from {
      opacity: 0;
      transform: translateX(calc(-1 * var(--animation-translate, 0.5em)));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* The JS already skips animations under reduced motion; this guards CSS-only consumers too. */
  @media (prefers-reduced-motion: no-preference) {
    ::slotted([data-wa-animation]) {
      animation-duration: var(--animation-duration, 300ms);
      animation-timing-function: var(--animation-easing, ease);
      animation-fill-mode: both;
    }

    ::slotted([data-wa-animation='fade']) {
      animation-name: wa-rc-fade;
    }

    ::slotted([data-wa-animation='fade-up']) {
      animation-name: wa-rc-fade-up;
    }

    ::slotted([data-wa-animation='fade-down']) {
      animation-name: wa-rc-fade-down;
    }

    ::slotted([data-wa-animation='fade-left']) {
      animation-name: wa-rc-fade-left;
    }

    ::slotted([data-wa-animation='fade-right']) {
      animation-name: wa-rc-fade-right;
    }
  }
`,An=ne`
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label),
  .wa-visually-hidden-label::part(form-control-label) {
    top: 0px !important;
    left: 0px !important;
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,jn=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener(`mouseenter`,this.pause),this.host.addEventListener(`mouseleave`,this.resume),this.host.addEventListener(`focusin`,this.pause),this.host.addEventListener(`focusout`,this.resume),this.host.addEventListener(`touchstart`,this.pause,{passive:!0}),this.host.addEventListener(`touchend`,this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener(`mouseenter`,this.pause),this.host.removeEventListener(`mouseleave`,this.resume),this.host.removeEventListener(`focusin`,this.pause),this.host.removeEventListener(`focusout`,this.resume),this.host.removeEventListener(`touchstart`,this.pause),this.host.removeEventListener(`touchend`,this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}};function Mn(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
if(typeof document<`u`){let e=new CSSStyleSheet;e.replaceSync(`
    @keyframes wa-rc-fade {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes wa-rc-fade-up {
      from { opacity: 0; transform: translateY(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-down {
      from { opacity: 0; transform: translateY(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes wa-rc-fade-left {
      from { opacity: 0; transform: translateX(var(--animation-translate, 0.5em)); }
      to { opacity: 1; transform: translateX(0); }
    }
    @keyframes wa-rc-fade-right {
      from { opacity: 0; transform: translateX(calc(-1 * var(--animation-translate, 0.5em))); }
      to { opacity: 1; transform: translateX(0); }
    }
  `),document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}var x=class extends _t{constructor(){super(...arguments),this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection=new Set,this.isInitialSelection=!0,this.autoplayController=new jn(this,()=>this.randomize()),this.animationCleanups=new WeakMap,this.liveAnnouncement=``,this.items=1,this.mode=`unique`,this.autoplay=!1,this.autoplayInterval=3e3,this.animation=`none`}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.syncAutoplay()}firstUpdated(e){super.firstUpdated(e),this.syncAutoplay()}handleAutoplayChange(){this.syncAutoplay()}handleModeChange(){this.sequenceCursor=0,this.uniqueQueue=[],this.currentSelection.clear(),this.randomize()}handleItemsChange(){this.uniqueQueue=[],this.randomize()}randomize(){let e=this.assignedChildren();if(!e.length)return[];let t=Math.min(Math.max(1,this.items),e.length),n;if(this.mode===`sequence`)n=[],Array.from({length:t}).forEach((t,r)=>{n.push(e[(this.sequenceCursor+r)%e.length])}),this.sequenceCursor=(this.sequenceCursor+t)%e.length;else if(this.mode===`unique`){if(this.uniqueQueue.length<t){let n=new Set(this.uniqueQueue),r=e.filter(e=>!this.currentSelection.has(e)&&!n.has(e)),i=e.filter(e=>this.currentSelection.has(e)&&!n.has(e));this.uniqueQueue.push(...this.sample(r,r.length),...this.sample(i,i.length)),this.uniqueQueue.length<t&&(this.uniqueQueue=this.sample([...e],e.length))}n=this.uniqueQueue.splice(0,t),this.currentSelection=new Set(n)}else{let r=e.filter(e=>!this.currentSelection.has(e));n=this.sample(r.length>=t?r:e,t),this.currentSelection=new Set(n)}let r=n[0],i=n[n.length-1];return e.forEach(e=>{let t=e,a=n.includes(e);delete t.dataset.waAnimation,t.style.display=``,t.hidden=!a,t.style.marginBlockStart=a&&e===r?`0`:``,t.style.marginBlockEnd=a&&e===i?`0`:``}),this.animation!==`none`&&!Mn()&&n.forEach(e=>{let t=e;this.animation!==`fade`&&getComputedStyle(e).display===`inline`&&(t.style.display=`inline-block`),e.getAnimations().forEach(e=>e.cancel()),t.dataset.waAnimation=this.animation,this.animationCleanups.get(e)?.abort();let n=new AbortController;this.animationCleanups.set(e,n),t.addEventListener(`animationend`,()=>delete t.dataset.waAnimation,{once:!0,signal:n.signal})}),this.isInitialSelection?this.isInitialSelection=!1:this.liveAnnouncement=n.map(e=>e.textContent?.trim()).filter(Boolean).join(`, `),this.dispatchEvent(new On({items:n})),n}syncAutoplay(){this.autoplayController.stop(),this.autoplay&&this.autoplayInterval>0&&this.autoplayController.start(this.autoplayInterval)}assignedChildren(){return(this.shadowRoot?.querySelector(`slot`))?.assignedElements()??[]}sample(e,t){let n=[...e];return Array.from({length:t}).forEach((e,t)=>{let r=t+Math.floor(Math.random()*(n.length-t));[n[t],n[r]]=[n[r],n[t]]}),n.slice(0,t)}handleSlotChange(){this.randomize()}render(){return ze`
      <slot @slotchange=${this.handleSlotChange}></slot>
      <div class="wa-visually-hidden" role="status" aria-live="polite" aria-atomic="true">${this.liveAnnouncement}</div>
    `}};x.css=[kn,An],s([lt()],x.prototype,`liveAnnouncement`,2),s([v({type:Number})],x.prototype,`items`,2),s([v({reflect:!0})],x.prototype,`mode`,2),s([v({type:Boolean,reflect:!0})],x.prototype,`autoplay`,2),s([v({type:Number,attribute:`autoplay-interval`})],x.prototype,`autoplayInterval`,2),s([v({reflect:!0})],x.prototype,`animation`,2),s([Dt([`autoplay`,`autoplayInterval`],{waitUntilFirstUpdate:!0})],x.prototype,`handleAutoplayChange`,1),s([Dt(`mode`,{waitUntilFirstUpdate:!0})],x.prototype,`handleModeChange`,1),s([Dt(`items`,{waitUntilFirstUpdate:!0})],x.prototype,`handleItemsChange`,1),x=s([ot(`wa-random-content`)],x);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Nn=t({default:()=>x}),S;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Pn;function C(e){this.c=e}S=C.prototype,S.toString=(function(){return String.fromCharCode(this.c)});function Fn(e){switch(typeof e){case`string`:return Hd.l();case`number`:return Xn(e)?e<<24>>24===e?Nu.l():e<<16>>16===e?Vu.l():Id.l():Zn(e)?Fd.l():Pd.l();case`boolean`:return Ql.l();case`undefined`:return eo.l();default:return e instanceof N?zd.l():e instanceof C?tu.l():e&&e.$classData?e.$classData.l():null}}function In(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Xn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Zn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof N?`java.lang.Long`:e instanceof C?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.hg()}}function Ln(e,t){switch(typeof e){case`string`:return Vd(e,t);case`number`:return Md(e,t);case`boolean`:return Xl(e,t);case`undefined`:return Za(e,t);default:return e&&e.$classData||e===null?e.h(t):e instanceof N?Ld(e,t):e instanceof C?eu($n(e),t):tr.prototype.h.call(e,t)}}function Rn(e){switch(typeof e){case`string`:return q(e);case`number`:return Nd(e);case`boolean`:return Zl(e);case`undefined`:return Qa(e);default:return e&&e.$classData||e===null?e.o():e instanceof N?Rd(e):e instanceof C?$l($n(e)):tr.prototype.o.call(e)}}function zn(e){return e===void 0?`undefined`:e.toString()}function Bn(e,t){if(t===0)throw new Mu(`/ by zero`);return e/t|0}function Vn(e,t){if(t===0)throw new Mu(`/ by zero`);return e%t|0}function Hn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Un(e){return String.fromCharCode(e)}function Wn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Gn=0,Kn=new WeakMap;function qn(e){switch(typeof e){case`string`:return q(e);case`number`:return Nd(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:q(n);default:if(e===null)return 0;var r=Kn.get(e);return r===void 0&&(r=Gn+1|0,Gn=r,Kn.set(e,r)),r}}function Jn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Yn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Xn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Zn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Qn(e){return new C(e)}Qn(0);function $n(e){return e===null?0:e.c}function er(e){return e===null?Pn:e}function tr(){}S=tr.prototype,S.constructor=tr;function w(){}w.prototype=S,S.o=(function(){return qn(this)}),S.h=(function(e){return this===e}),S.t=(function(){var e=this.o();return In(this)+`@`+(+(e>>>0)).toString(16)}),S.toString=(function(){return this.t()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}S=T.prototype=new w,S.constructor=T,S.a2=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),S.X=(function(){return new T(this.a.slice())});function nr(){}nr.prototype=S;function rr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}S=rr.prototype=new w,S.constructor=rr,S.a2=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),S.X=(function(){return new rr(this.a.slice())});function ir(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}S=ir.prototype=new w,S.constructor=ir,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new ir(this.a.slice())});function ar(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}S=ar.prototype=new w,S.constructor=ar,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new ar(this.a.slice())});function or(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}S=or.prototype=new w,S.constructor=or,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new or(this.a.slice())});function sr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}S=sr.prototype=new w,S.constructor=sr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new sr(this.a.slice())});function cr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Pn}else this.a=e}S=cr.prototype=new w,S.constructor=cr,S.a2=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),S.X=(function(){return new cr(this.a.slice())});function lr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}S=lr.prototype=new w,S.constructor=lr,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new lr(this.a.slice())});function ur(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}S=ur.prototype=new w,S.constructor=ur,S.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),S.X=(function(){return new ur(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}S=E.prototype,S.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i)),this}),S.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),S.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),S.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new nr;n.constructor=t,n.a2=(function(e,t,n,r){Wn(this.a,e,t.a,n,r)}),n.X=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===D});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),S.r=(function(){return this.A||=new E().a(this),this.A}),S.l=(function(){return this.L||=new cl(this),this.L}),S.R=(function(e){return this===e||this.F(e)}),S.S=(function(){return this.P?this.P.l():null}),S.Q=(function(){return this.O?this.O.l():null});var D=new E;D.n={},D.E=`Ljava.lang.Object;`,D.F=(e=>!e.X),D.N=`java.lang.Object`,D.I=(e=>e!==null),D.A=new E().y(D,T,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),tr.prototype.$classData=D;var dr=new E().p(void 0,`V`,`void`,void 0,void 0);new E().p(!1,`Z`,`boolean`,rr,void 0);var fr=new E().p(0,`C`,`char`,ir,Uint16Array);new E().p(0,`B`,`byte`,ar,Int8Array),new E().p(0,`S`,`short`,or,Int16Array),new E().p(0,`I`,`int`,sr,Int32Array);var pr=new E().p(null,`J`,`long`,cr,void 0);new E().p(0,`F`,`float`,lr,Float32Array),new E().p(0,`D`,`double`,ur,Float64Array);function mr(e){return Fn(e).cy()+`@`+qn(e)}function hr(e){var t=e.cH;return t===void 0?mr(e):t}function gr(){vr=this,yr().gO(new K((e=>void 0)),wo().dI,!0)}S=gr.prototype=new w,S.constructor=gr;function _r(){}_r.prototype=S,S.gO=(function(e,t,n){return new zl(e,n,t,this)}),new E().i(gr,`com.raquo.airstream.core.Observer$`,{b8:1});var vr;function yr(){return vr||=new gr,vr}function br(e){this.bS=null,this.cI=null,this.bT=0,this.bS=e,this.cI=void 0;var t=Br().bp();this.bT=t===void 0?1:1+t.bT|0,Er().bs===-1||this.bT>Er().bs?Fc().cD(new kd(this,Er().bs)):jr().P?jr().an.push(this)|0:Br().cs(this)}S=br.prototype=new w,S.constructor=br;function xr(){}xr.prototype=S;var Sr=new E().i(br,`com.raquo.airstream.core.Transaction`,{bb:1});function Cr(){this.bs=0,this.cJ=null,Tr=this,this.bs=1e3,this.cJ=new K((e=>{throw V(new H,`Attempted to run Transaction `+e+` after it was already executed.`)}))}S=Cr.prototype=new w,S.constructor=Cr;function wr(){}wr.prototype=S,S.eh=(function(e){try{e.bS.i(e);var t=e.cI;if(t!==void 0)for(;t.hk();)t.ha().ho(e)}catch(e){var n=e instanceof ec?e:new Z(e);Fc().cD(n)}}),new E().i(Cr,`com.raquo.airstream.core.Transaction$`,{bc:1});var Tr;function Er(){return Tr||=new Cr,Tr}function Dr(e){e.bt.length|0?new br(new K((t=>{for(;(e.bt.length|0)>0;){var n=e.bt.shift();try{n.i(t)}catch(e){var r=e instanceof ec?e:new Z(e);Fc().cD(r)}}for(;(e.an.length|0)>0;){var i=e.an.shift();Br().cs(i)}}))):(e.an.length|0)>0&&new br(new K((t=>{for(;(e.an.length|0)>0;)Br().cs(e.an.shift())})))}function Or(){this.P=!1,this.bt=null,this.an=null,Ar=this,this.P=!1,this.bt=di().a0(I().n(new(vo.r()).C([]))),this.an=di().a0(I().n(new(Sr.r()).C([])))}S=Or.prototype=new w,S.constructor=Or;function kr(){}kr.prototype=S,new E().i(Or,`com.raquo.airstream.core.Transaction$onStart$`,{bd:1});var Ar;function jr(){return Ar||=new Or,Ar}function Mr(e,t){return e.ao.get(t)}function Nr(e,t){e.bu.unshift(t)}function Pr(e){return e.bu.shift()}function Fr(e,t,n){var r=Mr(e,t),i=r===void 0,a=r===void 0?di().a0(I().n(new(Sr.r()).C([]))):r;a.push(n),i&&e.ao.set(t,a)}function Ir(e,t){var n=Mr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ao.delete(t),i}}function Lr(){this.bu=null,this.ao=null,zr=this,this.bu=di().a0(I().n(new(Sr.r()).C([]))),this.ao=new Map}S=Lr.prototype=new w,S.constructor=Lr;function Rr(){}Rr.prototype=S,S.cs=(function(e){var t=this.bp();t===void 0?(Nr(this,e),Er().eh(e),this.fv(e)):Fr(this,t,e)}),S.fv=(function(e){for(var t=e;;){var n=this.bp(),r=t;if(!(n!==void 0&&F().J(r,n)))throw V(new H,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.go(t),t.bS=Er().cJ;var i=this.bp();if(F().J(i,void 0))if((this.ao.size|0)>0){var a=new Ec(0);throw this.ao.forEach((e=>((t,n)=>{e.b4=e.b4+(t.length|0)|0}))(a)),V(new H,`Transaction queue error: Stack cleared, but a total of `+a.b4+` children for `+(this.ao.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Er().eh(i),t=i}}),S.go=(function(e){for(var t=e;;){var n=Ir(this,t);if(F().J(n,void 0)){Pr(this);var r=this.bp();if(!F().J(r,void 0))t=r;else return}else{Nr(this,n);return}}}),S.bp=(function(){return this.bu[0]}),new E().i(Lr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{be:1});var zr;function Br(){return zr||=new Lr,zr}function Vr(e,t){var n=e.a3.indexOf(t)|0;if(n!==-1)e.a3.splice(n,1),e.F.f()||t.ex();else throw V(new H,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Hr(e){for(;(e.bv.length|0)>0;)Vr(e,e.bv.shift())}function Ur(e){this.cK=null,this.a3=null,this.aF=!1,this.bv=null,this.F=null,this.aG=0,this.cK=e,this.a3=di().a0(I().n(new(qr.r()).C([]))),this.aF=!0,this.bv=di().a0(I().n(new(qr.r()).C([]))),this.F=J(),this.aG=0}S=Ur.prototype=new w,S.constructor=Ur;function Wr(){}Wr.prototype=S,S.e1=(function(){if(this.F.f()){var e=jr(),t=(()=>{var e=new es(this.cK);this.F=new Y(e),this.aF=!1,this.aG=0;for(var t=0,n=this.a3.length|0;t<n;){var r=t+this.aG|0;this.a3[r].ew(e),t=1+t|0}Hr(this),this.aF=!0,this.aG=0});if(jr(),e.P)t();else{e.P=!0;try{t()}finally{e.P=!1,Dr(e)}}}else throw V(new H,`Can not activate `+this+`: it is already active`)}),S.fo=(function(){if(this.F.f())throw V(new H,`Can not deactivate DynamicOwner: it is not active`);this.aF=!1;for(var e=this.a3,t=0,n=e.length|0;t<n;)e[t].ex(),t=1+t|0;Hr(this);var r=this.F;r.f()||r.w().g0(),Hr(this),this.aF=!0,this.F=J()}),S.f5=(function(e,t){t?(this.aG=1+this.aG|0,this.a3.unshift(e)):this.a3.push(e);var n=this.F;if(!n.f()){var r=n.w();e.ew(r)}}),S.gu=(function(e){this.aF?Vr(this,e):this.bv.push(e)}),new E().i(Ur,`com.raquo.airstream.ownership.DynamicOwner`,{bf:1});function Gr(e,t,n){this.bw=null,this.cL=null,this.bx=null,this.bw=e,this.cL=t,this.bx=J(),e.f5(this,n)}S=Gr.prototype=new w,S.constructor=Gr;function Kr(){}Kr.prototype=S,S.bP=(function(){this.bw.gu(this)}),S.ew=(function(e){var t=jr(),n=(()=>{this.bx=this.cL.i(e)});if(jr(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,Dr(t)}}}),S.ex=(function(){var e=this.bx;e.f()||(e.w().bP(),this.bx=J())});var qr=new E().i(Gr,`com.raquo.airstream.ownership.DynamicSubscription`,{bg:1});function Jr(){}S=Jr.prototype=new w,S.constructor=Jr;function Yr(){}Yr.prototype=S,S.cE=(function(e,t,n){return new Gr(e,new K((e=>new Y(t.i(e)))),n)}),S.eG=(function(e,t,n){return new Gr(e,new K((e=>(t.i(e),J()))),n)}),new E().i(Jr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bh:1});var Xr;function Zr(){return Xr||=new Jr,Xr}function Qr(e){e.aH=di().a0(I().n(new(ai.r()).C([])))}function $r(e){for(var t=e.aH,n=0,r=t.length|0;n<r;)ni(t[n]),n=1+n|0;e.aH.length=0}function ei(e,t){var n=e.aH.indexOf(t)|0;if(n!==-1)e.aH.splice(n,1);else throw V(new H,`Can not remove Subscription from Owner: subscription not found.`)}function ti(e,t){e.aH.push(t)}function ni(e){if(!e.bV)e.cN.aC(),e.bV=!0;else throw V(new H,`Can not kill Subscription: it was already killed.`)}function ri(e,t){this.cO=null,this.cN=null,this.bV=!1,this.cO=e,this.cN=t,this.bV=!1,e.gl(this)}S=ri.prototype=new w,S.constructor=ri;function ii(){}ii.prototype=S,S.bP=(function(){ni(this),ei(this.cO,this)});var ai=new E().i(ri,`com.raquo.airstream.ownership.Subscription`,{bk:1});function oi(e,t){this.cP=null,this.cQ=null,this.a4=null,this.ap=!1,this.cP=e,this.cQ=t,this.a4=J(),this.ap=!1}S=oi.prototype=new w,S.constructor=oi;function si(){}si.prototype=S,S.fW=(function(){var e=this.a4;return!e.f()&&!e.w().bw.F.f()}),S.gA=(function(e){if(this.ap)throw V(new H,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a4;if(t.f())var n=!1;else var n=e===t.w().bw;if(!n){this.fW()&&!e.F.f()&&(this.ap=!0);var r=this.a4;r.f()||(r.w().bP(),this.a4=J()),this.a4=new Y(Zr().cE(e,new K((e=>(this.ap||this.cP.aC(),new ri(e,new mu((()=>{this.ap||this.cQ.aC()})))))),!1)),this.ap=!1}}),S.fj=(function(){if(this.ap)throw V(new H,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a4;e.f()||e.w().bP(),this.a4=J()}),new E().i(oi,`com.raquo.airstream.ownership.TransferableSubscription`,{bl:1});function ci(){}S=ci.prototype=new w,S.constructor=ci;function li(){}li.prototype=S,S.a0=(function(e){return[...qo().gK(e)]}),new E().i(ci,`com.raquo.ew.JsArray$`,{bm:1});var ui;function di(){return ui||=new ci,ui}function fi(){this.cR=null,mi=this,document.createElement(`template`),this.fm(G().p.gF().gG()),this.cR=RegExp(` `,`g`)}S=fi.prototype=new w,S.constructor=fi;function pi(){}pi.prototype=S,S.f9=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof ec?e:new Z(e);if(n instanceof Z&&n.S instanceof DOMException)return!1;throw n instanceof Z?n.S:n}}),S.fX=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().J(t,r))return!0;n=r}}),S.f3=(function(e,t){e.addEventListener(t.aI.by.bz,t.bZ,t.c0)}),S.gs=(function(e,t){e.removeEventListener(t.aI.by.bz,t.bZ,t.c0)}),S.fl=(function(e){return document.createElement(e.cz())}),S.fN=(function(e,t){var n=this.fO(e,t);return n===void 0?void 0:t.aU.bi(n)}),S.fO=(function(e,t){var n=e.Q.getAttributeNS(null,t.aq);return n===null?void 0:n}),S.eE=(function(e,t,n){this.gz(e,t,t.aU.bj(n))}),S.gz=(function(e,t,n){n===null?this.gt(e,t):e.Q.setAttribute(t.aq,n)}),S.gt=(function(e,t){e.Q.removeAttribute(t.aq)}),S.fm=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.dk)}),S.fR=(function(e,t){var n=this.fS(e,t);return n===void 0?void 0:t.bX.bi(n)}),S.fS=(function(e,t){var n=e.cB(),r=t.bB,i=n.getAttributeNS(r.f()?null:r.w(),t.bY);return i===null?void 0:i}),S.gB=(function(e,t,n){this.gC(e,t,t.bX.bj(n))}),S.gC=(function(e,t,n){if(n===null)this.gv(e,t);else{var r=t.bB;if(r.f())e.cB().setAttribute(t.bA,n);else{var i=r.w();e.cB().setAttributeNS(i,t.bA,n)}}}),S.gv=(function(e,t){var n=e.cB(),r=t.bB;n.removeAttributeNS(r.f()?null:r.w(),t.bY)}),S.fn=(function(e){return document.createTextNode(e)}),S.fq=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new lm(this.fp(r),n);r=i,n=a}}),S.fp=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cR,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new E().i(fi,`com.raquo.laminar.DomApi$`,{bn:1});var mi;function O(){return mi||=new fi,mi}function hi(e){yr(),Fc()}function gi(e){e.eJ=Wi()}function _i(e){vi(e,new K((e=>{e.d9.Q.focus()})))}function vi(e,t){return new ys(new K((e=>{var n=new wc(!e.Y.F.f()),r=new K((e=>{n.bL?n.bL=!1:t.i(e)}));Zr().eG(e.Y,new K((e=>(t=>{r.i(new zi(e,t))}))(e)),!1)})),Wi())}function yi(){this.bW=null,this.d3=null,this.d4=!1,this.d2=null,xi=this,this.bW=new is(Si()),new is(Si()),new is(Si()),this.d2=new ns}S=yi.prototype=new w,S.constructor=yi;function bi(){}bi.prototype=S,S.dZ=(function(){return this.d4||=(this.d3=new os(this),!0),this.d3}),new E().i(yi,`com.raquo.laminar.codecs.package$`,{bv:1});var xi;function Si(){return xi||=new yi,xi}function Ci(e){e.eK=wi(e,`class`,` `)}function wi(e,t,n){var r=fs(new ps,t,Si().bW);return new cs(r.aq,new K((e=>{var t=O().fN(e,r);return t===void 0?``:t})),new _u(((e,t)=>{O().eE(e,r,t)})),n)}function Ti(e){e.eI=Ei(e,`class`,` `)}function Ei(e,t,n){var r=new hs(t,Si().bW,J());return new cs(r.bA,new K((e=>{var t=O().fR(e,r);return t===void 0?``:t})),new _u(((e,t)=>{O().gB(e,r,t)})),n)}function Di(e,t,n,r){this.by=null,this.d7=!1,this.d6=!1,this.d5=null,this.by=e,this.d7=t,this.d6=n,this.d5=r}S=Di.prototype=new w,S.constructor=Di;function Oi(){}Oi.prototype=S,new E().i(Di,`com.raquo.laminar.keys.EventProcessor`,{bJ:1});function ki(){}S=ki.prototype=new w,S.constructor=ki;function Ai(){}Ai.prototype=S,S.fx=(function(e,t,n){return new Di(e,t,n,new K((e=>new Y(e))))}),new E().i(ki,`com.raquo.laminar.keys.EventProcessor$`,{bK:1});var ji;function Mi(){return ji||=new ki,ji}function Ni(){}S=Ni.prototype=new w,S.constructor=Ni;function Pi(){}Pi.prototype=S;function Fi(){this.eL=null,this.eM=null,this.eN=null,this.eO=null,this.eL=`http://www.w3.org/2000/svg`,this.eM=`http://www.w3.org/1999/xlink`,this.eN=`http://www.w3.org/XML/1998/namespace`,this.eO=`http://www.w3.org/2000/xmlns/`}S=Fi.prototype=new w,S.constructor=Fi;function Ii(){}Ii.prototype=S,S.g5=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Ju(e)}}),new E().i(Fi,`com.raquo.laminar.keys.SvgAttr$`,{bN:1});var Li;function Ri(){return Li||=new Fi,Li}function zi(e,t){this.d9=null,this.d8=null,this.d9=e,this.d8=t}S=zi.prototype=new w,S.constructor=zi;function Bi(){}Bi.prototype=S,new E().i(zi,`com.raquo.laminar.lifecycle.MountContext`,{bO:1});var k=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{R:1});function Vi(){this.eP=null,Ui=this,this.eP=new _s}S=Vi.prototype=new w,S.constructor=Vi;function Hi(){}Hi.prototype=S,new E().i(Vi,`com.raquo.laminar.modifiers.Modifier$`,{bS:1});var Ui;function Wi(){return Ui||=new Vi,Ui}function Gi(){this.z=null,qi=this,this.z=new xs(new K((e=>e)),A()),new xs(new K((e=>``+(e|0))),A()),new xs(new K((e=>``+ +e)),A()),new xs(new K((e=>``+!!e)),A()),new xs(new K((e=>e.gJ())),A())}S=Gi.prototype=new w,S.constructor=Gi;function Ki(){}Ki.prototype=S,new E().i(Gi,`com.raquo.laminar.modifiers.RenderableText$`,{bW:1});var qi;function A(){return qi||=new Gi,qi}function Ji(){}S=Ji.prototype=new w,S.constructor=Ji;function Yi(){}Yi.prototype=S,S.cu=(function(e,t,n){var r=new Y(e);t.eH(r),n!==void 0&&n.hm(e,t);var i=O().f9(e.bq(),t.bq());return i&&t.eF(r),i}),new E().i(Ji,`com.raquo.laminar.nodes.ParentNode$`,{bZ:1});var Xi;function Zi(){return Xi||=new Ji,Xi}function Qi(){}S=Qi.prototype=new w,S.constructor=Qi;function $i(){}$i.prototype=S,S.gM=(function(e,t){return Zr().cE(e.Y,new K((n=>t.i(new zi(e,n)))),!0)}),new E().i(Qi,`com.raquo.laminar.nodes.ReactiveElement$`,{c1:1});var ea;function ta(){return ea||=new Qi,ea}function na(){ia=this,di().a0(I().gP(new sr(new Int32Array([0]))))}S=na.prototype=new w,S.constructor=na;function ra(){}ra.prototype=S,S.f1=(function(){return new K((e=>void 0))}),new E().i(na,`com.raquo.laminar.tags.CustomHtmlTag$`,{c6:1});var ia;function aa(){return ia||=new na,ia}function oa(){}S=oa.prototype=new w,S.constructor=oa;function sa(){}sa.prototype=S,S.f7=(function(){la().fC(),la().fD(),la().fE(),la().fF()}),S.fC=(function(){var e=document.querySelector(`#example1`);mc().bM(e).f()||(G(),new Vc(e,ol().bb(I().n(new(vo.r()).C([])),I().n(new(k.r()).C([G().p.K().A(I().n(new(k.r()).C([B(G().p,`Tip: use a clear label for every form control.`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Tip: keep related options together.`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Tip: give users useful feedback after an action.`,A().z)])))])))))}),S.fD=(function(){var e=document.querySelector(`#example2`);if(!mc().bM(e).f()){G();var t=ol().bb(I().n(new(vo.r()).C([new W((e=>e.g3().gy()))])),I().n(new(k.r()).C([G().p.K().A(I().n(new(k.r()).C([B(G().p,`First tip`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Second tip`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Third tip`,A().z)])))])));new Vc(e,G().p.ft().A(I().n(new(k.r()).C([t,Jc().bb(I().n(new(vo.r()).C([])),I().n(new(k.r()).C([B(G().p,`Next tip`,A().z),new Ic((G(),Mi().fx(G().p.gi(),!1,!1)),new W((e=>{t.Q.randomize()})))])))]))))}}),S.fE=(function(){var e=document.querySelector(`#example3`);mc().bM(e).f()||(G(),new Vc(e,ol().bb(I().n(new(vo.r()).C([new W((e=>e.fY().b6(2)))])),I().n(new(k.r()).C([G().p.K().A(I().n(new(k.r()).C([B(G().p,`Design`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Development`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Testing`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Documentation`,A().z)])))])))))}),S.fF=(function(){var e=document.querySelector(`#example4`);mc().bM(e).f()||(G(),new Vc(e,ol().bb(I().n(new(vo.r()).C([new W((e=>e.fe().b6(!0))),new W((e=>e.ff().b6(3e3))),new W((e=>e.f6().fH()))])),I().n(new(k.r()).C([G().p.K().A(I().n(new(k.r()).C([B(G().p,`A little progress every day.`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Simple code is easier to understand.`,A().z)]))),G().p.K().A(I().n(new(k.r()).C([B(G().p,`Make the next step clear.`,A().z)])))])))))}),new E().i(oa,`examples.randomContent.Main$package$`,{c8:1});var ca;function la(){return ca||=new oa,ca}function ua(e){try{la().f7()}catch(e){throw e}}function da(){this.eR=!1,this.aV=null,this.bG=null,this.dA=null,this.c8=!1,this.eQ=0,this.eT=0,this.eS=null,pa=this,this.eR=!0,this.aV=new ArrayBuffer(8),this.bG=new Int32Array(this.aV,0,2),new Float32Array(this.aV,0,2),this.dA=new Float64Array(this.aV,0,1),this.bG[0]=16909060,this.c8=(new Int8Array(this.aV,0,8)[0]|0)==1,this.eQ=this.c8?0:1,this.eT=this.c8?1:0,this.eS=null}S=da.prototype=new w,S.constructor=da;function fa(){}fa.prototype=S,S.cA=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dA[0]=e,(this.bG[0]|0)^(this.bG[1]|0))}),new E().i(da,`java.lang.FloatingPointBits$`,{cm:1});var pa;function ma(){return pa||=new da,pa}function ha(e,t){for(var n=j().V(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ga(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new qs(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new qs(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(Ys.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function ga(e,t){var n=j().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().V(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().V(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[_a(e,c[1]),wa(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[_a(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[_a(e,d[1]),`<clinit>`]}function _a(e,t){var n=ya(e);if(Xa().dG.call(n,t))var r=ya(e)[t];else var r=Fa(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function va(e){if(!((1&e.L)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.ca=t,e.L=(1|e.L)<<24>>24}return e.ca}function ya(e){return(1&e.L)<<24>>24?e.ca:va(e)}function ba(e){if(!((2&e.L)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cb=t,e.L=(2|e.L)<<24>>24}return e.cb}function xa(e){return(2&e.L)<<24>>24?e.cb:ba(e)}function Sa(e){return(4&e.L)<<24>>24||(e.c9=Object.keys(xa(e)),e.L=(4|e.L)<<24>>24),e.c9}function Ca(e){return(4&e.L)<<24>>24?e.c9:Sa(e)}function wa(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Ta(e,t){return t?t.arguments&&t.stack?Ea(e,t):t.stack&&t.sourceURL?ka(e,t):t.stack&&t.number?Oa(e,t):t.stack&&t.fileName?Da(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Aa(e,t):ja(e,t):Aa(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ma(e,t):Na(e,t):t.stack&&!t.fileName?Ea(e,t):Pa(e,t):[]}function Ea(e,t){return(t.stack+`
`).replace(j().V(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().D(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().D(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().D(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().D(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Da(e,t){return t.stack.replace(j().D(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().D(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Oa(e,t){return t.stack.replace(j().D(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().D(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().D(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ka(e,t){return t.stack.replace(j().D(`\\[native code\\]\\n`,`m`),``).replace(j().D(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().D(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Aa(e,t){for(var n=j().D(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function ja(e,t){for(var n=j().D(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ma(e,t){for(var n=j().V(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Na(e,t){for(var n=j().V(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().V(`<anonymous function: (\\S+)>`),`$1`).replace(j().V(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Pa(e,t){return[]}function Fa(e,t,n){for(;;)if(t<(Ca(e).length|0)){var r=Ca(e)[t];if(n.startsWith(r))return``+xa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ia(){this.ca=null,this.cb=null,this.c9=null,this.L=0}S=Ia.prototype=new w,S.constructor=Ia;function La(){}La.prototype=S,S.fG=(function(e){return ha(this,Ta(this,e))}),new E().i(Ia,`java.lang.StackTrace$`,{ct:1});var Ra;function za(){return Ra||=new Ia,Ra}function Ba(){}S=Ba.prototype=new w,S.constructor=Ba;function Va(){}Va.prototype=S,S.V=(function(e){return new RegExp(e)}),S.D=(function(e,t){return new RegExp(e,t)}),new E().i(Ba,`java.lang.StackTrace$StringRE$`,{cu:1});var Ha;function j(){return Ha||=new Ba,Ha}function Ua(){this.dC=null,this.eU=null,Ga=this,this.dC=new If(!1),this.eU=new If(!0)}S=Ua.prototype=new w,S.constructor=Ua;function Wa(){}Wa.prototype=S,new E().i(Ua,`java.lang.System$Streams$`,{cz:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(){this.dG=null,Ya=this,this.dG=Object.prototype.hasOwnProperty}S=qa.prototype=new w,S.constructor=qa;function Ja(){}Ja.prototype=S,new E().i(qa,`java.lang.Utils$Cache$`,{cB:1});var Ya;function Xa(){return Ya||=new qa,Ya}function Za(e,t){return e===t}function Qa(e){return 0}function $a(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ap)}var eo=new E().i(0,`java.lang.Void`,{ap:1},(e=>e===void 0));function to(e,t){throw Pu(new Fu,`argument type mismatch`)}function no(){}S=no.prototype=new w,S.constructor=no;function ro(){}ro.prototype=S,S.bl=(function(e){return e instanceof T||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or||e instanceof sr||e instanceof cr||e instanceof lr||e instanceof ur?e.a.length:to(this,e)}),new E().i(no,`java.lang.reflect.Array$`,{cC:1});var io;function ao(){return io||=new no,io}function oo(){}S=oo.prototype=new w,S.constructor=oo;function so(){}so.prototype=S,S.eo=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.d,c=r,l=t.a[c],u=l.c,d=l.d;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),S.en=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.ep=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.ek=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.ej=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.eq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),S.el=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),S.em=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new E().i(oo,`java.util.Arrays$`,{cD:1});var co;function M(){return co||=new oo,co}function N(e,t){this.c=0,this.d=0,this.c=e,this.d=t}S=N.prototype=new w,S.constructor=N;function lo(){}lo.prototype=S,S.h=(function(e){return e instanceof N&&this.c===e.c&&this.d===e.d}),S.o=(function(){return this.c^this.d}),S.t=(function(){return P().eB(this.c,this.d)}),S.hr=(function(){return this.c}),S.hq=(function(){return P().eA(this.c,this.d)}),S.hp=(function(){return P().bo(this.c,this.d)}),S.h7=(function(){return this.c<<24>>24}),S.hn=(function(){return this.c<<16>>16}),S.hh=(function(){return this.c}),S.hi=(function(){return this}),S.hd=(function(){return P().eA(this.c,this.d)}),S.hb=(function(){return P().bo(this.c,this.d)}),S.h9=(function(e){return P().ey(this.c,this.d,e.c,e.d)}),S.h8=(function(e){return P().ey(this.c,this.d,e.c,e.d)}),S.hc=(function(e){return this.c===e.c&&this.d===e.d}),S.hl=(function(e){return!(this.c===e.c&&this.d===e.d)}),S.gZ=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),S.h0=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),S.gV=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),S.gW=(function(e){var t=this.d,n=e.d;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),S.ht=(function(){return new N(~this.c,~this.d)}),S.gT=(function(e){return new N(this.c|e.c,this.d|e.d)}),S.gS=(function(e){return new N(this.c&e.c,this.d&e.d)}),S.h6=(function(e){return new N(this.c^e.c,this.d^e.d)}),S.h1=(function(e){var t=this.c;return new N(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.d<<e)}),S.gY=(function(e){var t=this.d;return new N(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),S.gX=(function(e){var t=this.d;return new N(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),S.hs=(function(){var e=this.c,t=this.d;return new N(-e|0,e===0?-t|0:~t)}),S.h4=(function(e){var t=this.c,n=this.d,r=e.d,i=t+e.c|0;return new N(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),S.h2=(function(e){var t=this.c,n=this.d,r=e.d,i=t-e.c|0;return new N(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),S.h5=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new N(u,(((Math.imul(t,e.d)+Math.imul(this.d,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),S.gU=(function(e){var t=P();return new N(t.fu(this.c,this.d,e.c,e.d),t.r)}),S.h3=(function(e){var t=P();return new N(t.gr(this.c,this.d,e.c,e.d),t.r)}),new E().i(N,`org.scalajs.linker.runtime.RuntimeLong`,{aq:1});function uo(e,t,n){return-2097152&n?mo(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function fo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.r=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.r=0,n>>>o|0}else return mo(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.r=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.r=s/4294967296|0,s|0}}function po(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.r=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.r=n&(-1+i|0),t):mo(e,t,n,r,i,1)|0;if(-2097152&i)return e.r=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.r=a/4294967296|0,a|0}function mo(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var ee=f,te=p,ne=u,re=d;if(te===re?(-2147483648^ee)>=(-2147483648^ne):(-2147483648^te)>=(-2147483648^re)){var ie=f,ae=p,oe=u,se=d,ce=ie-oe|0,le=(-2147483648^ce)>(-2147483648^ie)?-1+(ae-se|0)|0:ae-se|0;f=ce,p=le,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ue=u,de=d,fe=ue>>>1|0|de<<31,pe=de>>>1|0;u=fe,d=pe}var me=f,he=p;if(he===i?(-2147483648^me)>=(-2147483648^r):(-2147483648^he)>=(-2147483648^i)){var ge=f,_e=4294967296*p+ +(ge>>>0),ve=4294967296*i+ +(r>>>0);if(a!==1){var ye=_e/ve,be=ye|0,xe=ye/4294967296|0,Se=m,Ce=h,g=Se+be|0,we=(-2147483648^g)<(-2147483648^Se)?1+(Ce+xe|0)|0:Ce+xe|0;m=g,h=we}if(a!==0){var Te=_e%ve;f=Te|0,p=Te/4294967296|0}}if(a===0)return e.r=h,m;if(a===1)return e.r=p,f;var Ee=m,De=4294967296*h+ +(Ee>>>0),Oe=``+f,ke=Oe.length;return``+De+`000000000`.substring(ke)+Oe}function ho(){this.r=0}S=ho.prototype=new w,S.constructor=ho;function go(){}go.prototype=S,S.eB=(function(e,t){return t===e>>31?``+e:t<0?`-`+uo(this,-e|0,e===0?-t|0:~t):uo(this,e,t)}),S.bo=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),S.eA=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),S.hf=(function(e){return new N(e,e>>31)}),S.he=(function(e){return new N(this.ez(e),this.r)}),S.ez=(function(e){if(e<-0x8000000000000000)return this.r=-2147483648,0;if(e>=0x8000000000000000)return this.r=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.r=e<0&&t!==0?-1+n|0:n,t}),S.ey=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),S.fu=(function(e,t,n,r){if((n|r)===0)throw new Mu(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.r=0,-2147483648;var i=Bn(e,n);return this.r=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=-1,-1;else return this.r=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=fo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.r;return this.r=l===0?-u|0:~u,-l|0}}),S.gr=(function(e,t,n,r){if((n|r)===0)throw new Mu(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Vn(e,n);return this.r=i>>31,i}else return this.r=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.r=0,0;else return this.r=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=po(this,a,o,s,c);if(t<0){var u=this.r;return this.r=l===0?-u|0:~u,-l|0}else return l}}),new E().i(ho,`org.scalajs.linker.runtime.RuntimeLong$`,{cF:1});var _o;function P(){return _o||=new ho,_o}var vo=new E().i(1,`scala.Function1`,{e:1});function yo(){}S=yo.prototype=new w,S.constructor=yo;function bo(){}bo.prototype=S;function xo(){this.dJ=null,this.dI=null,Co=this,this.dJ=new W((e=>wo().dJ)),this.dI=new au}S=xo.prototype=new w,S.constructor=xo;function So(){}So.prototype=S,new E().i(xo,`scala.PartialFunction$`,{cP:1});var Co;function wo(){return Co||=new xo,Co}function To(e,t){for(var n=e.l();n.s();)t.i(n.g())}function Eo(e,t,n,r){return e.y()===0?``+t+r:e.b7(gm(new _m),t,n,r).I.q}function Do(e,t,n,r,i){var a=t.I;n.length!==0&&(a.q=``+a.q+n);var o=e.l();if(o.s()){var s=o.g();for(a.q=``+a.q+s;o.s();){a.q=``+a.q+r;var c=o.g();a.q=``+a.q+c}}return i.length!==0&&(a.q=``+a.q+i),t}function Oo(e,t){this.dP=null,this.b1=null,this.dP=e,this.b1=t}S=Oo.prototype=new w,S.constructor=Oo;function ko(){}ko.prototype=S,S.fU=(function(){return this.dP.aC().l()}),new E().i(Oo,`scala.collection.Iterator$ConcatIteratorCell`,{dc:1});function Ao(){}S=Ao.prototype=new w,S.constructor=Ao;function jo(){}jo.prototype=S,S.J=(function(e,t){return e===t||(Ks(e)?this.fB(e,t):e instanceof C?this.fz(e,t):e===null?t===null:Ln(e,t))}),S.fB=(function(e,t){if(Ks(t))return this.fA(e,t);if(t instanceof C){if(typeof e==`number`)return+e===t.c;if(e instanceof N){var n=er(e),r=n.c,i=n.d,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Ln(e,t)}else return e===null?t===null:Ln(e,t)}),S.fA=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof N){var r=er(t);return n===P().bo(r.c,r.d)}else return!1}else if(e instanceof N){var i=er(e),a=i.c,o=i.d;if(t instanceof N){var s=er(t),c=s.c,l=s.d;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return P().bo(a,o)===u}else return!1}else return e===null?t===null:Ln(e,t)}),S.fz=(function(e,t){if(t instanceof C)return e.c===t.c;if(Ks(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof N){var n=er(t),r=n.c,i=n.d,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Ln(t,e)}else return e===null&&t===null}),new E().i(Ao,`scala.runtime.BoxesRunTime$`,{dO:1});var Mo;function F(){return Mo||=new Ao,Mo}var No=new E().i(0,`scala.runtime.Null$`,{dR:1});function Po(){}S=Po.prototype=new w,S.constructor=Po;function Fo(){}Fo.prototype=S,S.aO=(function(e,t){if(e instanceof T||e instanceof sr||e instanceof ur||e instanceof cr||e instanceof lr)return e.a[t];if(e instanceof ir)return Qn(e.a[t]);if(e instanceof ar||e instanceof or||e instanceof rr)return e.a[t];throw e===null?new Bu:new Ju(e)}),S.fc=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof sr)e.a[t]=n|0;else if(e instanceof ur)e.a[t]=+n;else if(e instanceof cr)e.a[t]=er(n);else if(e instanceof lr)e.a[t]=Math.fround(n);else if(e instanceof ir)e.a[t]=$n(n);else if(e instanceof ar)e.a[t]=n|0;else if(e instanceof or)e.a[t]=n|0;else if(e instanceof rr)e.a[t]=!!n;else if(e===null)throw new Bu;else throw new Ju(e)}),S.f2=(function(e){return Eo(e.aS(),e.al()+`(`,`,`,`)`)}),S.n=(function(e){return e===null?null:e.a.length===0?nf(sf()):new Np(e)}),S.gP=(function(e){return e===null?null:new kp(e)}),new E().i(Po,`scala.runtime.ScalaRunTime$`,{dS:1});var Io;function I(){return Io||=new Po,Io}function Lo(){}S=Lo.prototype=new w,S.constructor=Lo;function Ro(){}Ro.prototype=S,S.b=(function(e,t){var n=this.bQ(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bQ=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.k=(function(e,t){return this.fg(e^t)}),S.fg=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.aR=(function(e){var t=e.c,n=e.d;return n===t>>31?t:t^n}),S.U=(function(e){var t=Hn(e);if(t===e)return t;var n=P(),r=n.ez(e),i=n.r;return P().bo(r,i)===e?r^i:ma().cA(e)}),S.x=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.U(+e);if(e instanceof N){var t=er(e);return this.aR(new N(t.c,t.d))}else return Rn(e)}),S.bn=(function(e){throw Iu(new Lu,``+e)}),new E().i(Lo,`scala.runtime.Statics$`,{dU:1});var zo;function L(){return zo||=new Lo,zo}function Bo(){}S=Bo.prototype=new w,S.constructor=Bo;function Vo(){}Vo.prototype=S,S.gD=(function(e,t){return setTimeout((()=>{t.aC()}),e)}),new E().i(Bo,`scala.scalajs.js.timers.package$`,{dX:1});var Ho;function Uo(){return Ho||=new Bo,Ho}function Wo(){}S=Wo.prototype=new w,S.constructor=Wo;function Go(){}Go.prototype=S,S.gK=(function(e){var t=[];return e.bk(new W((e=>t.push(e)|0))),t}),new E().i(Wo,`scala.scalajs.runtime.Compat$`,{e6:1});var Ko;function qo(){return Ko||=new Wo,Ko}function Jo(){}S=Jo.prototype=new w,S.constructor=Jo;function Yo(){}Yo.prototype=S,S.gE=(function(e){var t=`Illegal command line`+(e.ev()===0?``:e.ev()===1?` after first argument`:` after `+e.ev()+` arguments`)+`: `+e.hj();cc().gk().fZ(t+`
`)}),new E().i(Jo,`scala.util.CommandLineParser$`,{e8:1});function Xo(e){this.cr=null,this.cr=e}S=Xo.prototype=new w,S.constructor=Xo;function Zo(){}Zo.prototype=S,S.t=(function(){return`DynamicVariable(`+this.cr+`)`}),new E().i(Xo,`scala.util.DynamicVariable`,{ea:1});function Qo(){}S=Qo.prototype=new w,S.constructor=Qo;function $o(){}$o.prototype=S,S.b=(function(e,t){var n=this.bQ(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),S.bQ=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),S.k=(function(e,t){return this.E(e^t)}),S.E=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),S.eC=(function(e,t,n){var r=e.aj();if(r===0)return q(e.al());var i=t;n||(i=this.b(i,q(e.al())));for(var a=0;a<r;)i=this.b(i,L().x(e.ak(a))),a=1+a|0;return this.k(i,r)}),S.gL=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.l();o.s();){var s=o.g(),c=L().x(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.bQ(l,a),this.k(l,i)}),S.gj=(function(e,t){var n=e.l(),r=t;if(!n.s())return this.k(r,0);var i=n.g();if(!n.s())return this.k(this.b(r,L().x(i)),1);var a=n.g(),o=L().x(i);r=this.b(r,o);for(var s=r,c=L().x(a),l=c-o|0,u=2;n.s();){r=this.b(r,c);var d=L().x(n.g());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.s();)r=this.b(r,L().x(n.g())),u=1+u|0;return this.k(r,u)}c=d,u=1+u|0}return this.E(this.b(this.b(s,l),c))}),S.e5=(function(e,t){var n=t,r=ao().bl(e);switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,L().x(I().aO(e,0))),1);default:var i=L().x(I().aO(e,0));n=this.b(n,i);for(var a=n,o=L().x(I().aO(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().x(I().aO(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().x(I().aO(e,c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.gp=(function(e,t,n,r){return this.E(this.b(this.b(this.b(r,e),t),n))}),S.fV=(function(e,t){var n=t,r=e.j();switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,L().x(e.m(0))),1);default:var i=L().x(e.m(0));n=this.b(n,i);for(var a=n,o=L().x(e.m(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().x(e.m(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().x(e.m(c))),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.g1=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.f();){var l=c.a1(),u=c.W(),d=L().x(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.gp(s,a,o,t):this.k(r,n)}),S.ee=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.e6=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.e7=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.e8=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,L().U(e.a[0])),1);default:var i=L().U(e.a[0]);n=this.b(n,i);for(var a=n,o=L().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.e9=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,L().U(e.a[0])),1);default:var i=L().U(e.a[0]);n=this.b(n,i);for(var a=n,o=L().U(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().U(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().U(e.a[c])),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.ea=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.eb=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:var i=n,a=e.a[0];return this.k(this.b(i,L().aR(new N(a.c,a.d))),1);default:var o=e.a[0],s=L().aR(new N(o.c,o.d));n=this.b(n,s);for(var c=n,l=e.a[1],u=L().aR(new N(l.c,l.d)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=L().aR(new N(p.c,p.d));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var h=n,ee=e.a[f];n=this.b(h,L().aR(new N(ee.c,ee.d))),f=1+f|0}return this.k(n,r)}u=m,f=1+f|0}return this.E(this.b(this.b(c,d),u))}}),S.ec=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.k(n,r)}o=l,c=1+c|0}return this.E(this.b(this.b(a,s),o))}}),S.ed=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.k(n,0);case 1:return this.k(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.k(n,r)}a=0,s=1+s|0}return this.E(this.b(this.b(i,o),a))}});function es(e){this.aH=null,this.cM=null,this.bU=!1,this.cM=e,Qr(this),this.bU=!1}S=es.prototype=new w,S.constructor=es;function ts(){}ts.prototype=S,S.gl=(function(e){this.bU?(ni(e),this.cM.aC()):ti(this,e)}),S.g0=(function(){$r(this),this.bU=!0}),new E().i(es,`com.raquo.airstream.ownership.OneTimeOwner`,{bi:1,bj:1});function ns(){}S=ns.prototype=new w,S.constructor=ns;function rs(){}rs.prototype=S,S.fs=(function(e){return e!==null}),S.fy=(function(e){return e?``:null}),S.bi=(function(e){return this.fs(e)}),S.bj=(function(e){return this.fy(!!e)}),new E().i(ns,`com.raquo.laminar.codecs.package$$anon$1`,{bw:1,W:1});function is(e){if(e===null)throw new Bu}S=is.prototype=new w,S.constructor=is;function as(){}as.prototype=S,S.bj=(function(e){return e}),S.bi=(function(e){return e}),new E().i(is,`com.raquo.laminar.codecs.package$$anon$2`,{bx:1,W:1});function os(e){if(e===null)throw new Bu}S=os.prototype=new w,S.constructor=os;function ss(){}ss.prototype=S,S.fr=(function(e){return Us().gm(e)}),S.bi=(function(e){return this.fr(e)}),S.bj=(function(e){return``+ +e}),new E().i(os,`com.raquo.laminar.codecs.package$$anon$4`,{by:1,W:1});function cs(e,t,n,r){}S=cs.prototype=new Pi,S.constructor=cs;function ls(){}ls.prototype=S,new E().i(cs,`com.raquo.laminar.keys.CompositeKey`,{bI:1,T:1});function us(e){this.bz=null,this.bz=e}S=us.prototype=new Pi,S.constructor=us;function ds(){}ds.prototype=S,new E().i(us,`com.raquo.laminar.keys.EventProp`,{bL:1,T:1});function fs(e,t,n){return e.aq=t,e.aU=n,e}function ps(){this.aq=null,this.aU=null}S=ps.prototype=new Pi,S.constructor=ps;function ms(){}ms.prototype=S,S.b6=(function(e){return new zc(this,e,new yu(((e,t,n)=>{O().eE(e,t,n)})))}),new E().i(ps,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,T:1});function hs(e,t,n){this.bY=null,this.bX=null,this.bA=null,this.bB=null,this.bY=e,this.bX=t;var r=n.f()?J():new Y(n.w()+`:`+e);this.bA=r.f()?e:r.w(),this.bB=n.f()?J():new Y(Ri().g5(n.w()))}S=hs.prototype=new Pi,S.constructor=hs;function gs(){}gs.prototype=S,new E().i(hs,`com.raquo.laminar.keys.SvgAttr`,{bM:1,T:1});function _s(){}S=_s.prototype=new w,S.constructor=_s;function vs(){}vs.prototype=S,S.ai=(function(e){}),new E().i(_s,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bT:1,R:1});function ys(e,t){if(this.dd=null,this.dd=e,t===null)throw new Bu}S=ys.prototype=new w,S.constructor=ys;function bs(){}bs.prototype=S,S.ai=(function(e){var t=jr(),n=(()=>{this.dd.i(e)});if(jr(),t.P)n();else{t.P=!0;try{n()}finally{t.P=!1,Dr(t)}}}),new E().i(ys,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bU:1,R:1});function xs(e,t){if(this.de=null,this.de=e,t===null)throw new Bu}S=xs.prototype=new w,S.constructor=xs;function Ss(){}Ss.prototype=S,S.fd=(function(e){return this.de.i(e)}),new E().i(xs,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{bX:1,bV:1});function Cs(e){e.ei(new Ur(new mu((()=>{throw V(new H,`Attempting to use owner of unmounted element: `+Eo(O().fq(e.bq(),(O(),mm())),``,` > `,``))}))))}function ws(e,t,n){return e.c4=t,e}function Ts(){this.c4=null}S=Ts.prototype=new w,S.constructor=Ts;function Es(){}Es.prototype=S,S.cz=(function(){return this.c4}),S.A=(function(e){var t=this.fi();return e.bk(new K((e=>{e.ai(t)}))),t}),S.fi=(function(){return new Ad(this,O().fl(this))}),new E().i(Ts,`com.raquo.laminar.tags.HtmlTag`,{ab:1,a1:1});function Ds(e,t){this.dk=null,this.dk=e}S=Ds.prototype=new w,S.constructor=Ds;function Os(){}Os.prototype=S,new E().i(Ds,`com.raquo.laminar.tags.SvgTag`,{c7:1,a1:1});function ks(){}S=ks.prototype=new w,S.constructor=ks;function As(){}As.prototype=S,S.bj=(function(e){return e}),S.bi=(function(e){return e}),new E().i(ks,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cd:1,W:1});function js(e,t){return e.bE=t,e.e0(),e}function Ms(){this.bE=null,this.bD=null,this.bF=!1}S=Ms.prototype=new w,S.constructor=Ms;function Ns(){}Ns.prototype=S,S.gH=(function(){return this.bF||=(this.bD=new Uc(this.bE,aa().f1(),(aa(),void 0)),!0),this.bD}),S.bb=(function(e,t){var n=this.gH().A(I().n(new(k.r()).C([])));return e.bk(new K((e=>{e.i(this).ai(n)}))),t.bk(new K((e=>{e.ai(n)}))),n});function Ps(e){return(1&e.a5)<<24>>24||(e.c7=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.a5=(1|e.a5)<<24>>24),e.c7}function Fs(e){return(1&e.a5)<<24>>24?e.c7:Ps(e)}function Is(e){return(2&e.a5)<<24>>24||(e.c6=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.a5=(2|e.a5)<<24>>24),e.c6}function Ls(e){return(2&e.a5)<<24>>24?e.c6:Is(e)}function Rs(e,t){var n=Ls(e).exec(t);n===null&&zs(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&zs(t);var s=e.gn(i,a,o,15);return r===`-`?-s:s}function zs(e){throw new Bd(`For input string: "`+e+`"`)}function Bs(){this.c7=null,this.c6=null,this.a5=0}S=Bs.prototype=new w,S.constructor=Bs;function Vs(){}Vs.prototype=S,S.gm=(function(e){var t=Fs(this).exec(e);return t===null?Rs(this,e):+parseFloat(t[1])}),S.gn=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,ee=+parseInt(m,16),te=Hn(+parseInt(n,10))+h|0,ne=te/3|0,re=+(2**ne),ie=te-(ne<<1)|0;return ee*re*re*+(2**ie)}),new E().i(Bs,`java.lang.Double$`,{ck:1,a:1});var Hs;function Us(){return Hs||=new Bs,Hs}function Ws(){}S=Ws.prototype=new w,S.constructor=Ws;function Gs(){}Gs.prototype=S;function Ks(e){return e instanceof Ws||typeof e==`number`||e instanceof N}function qs(e,t,n,r,i){this.aK=null,this.aX=null,this.aL=null,this.aM=0,this.aJ=0,this.aK=e,this.aX=t,this.aL=n,this.aM=r,this.aJ=i}S=qs.prototype=new w,S.constructor=qs;function Js(){}Js.prototype=S,S.h=(function(e){return e instanceof qs&&this.aL===e.aL&&this.aM===e.aM&&this.aJ===e.aJ&&this.aK===e.aK&&this.aX===e.aX}),S.t=(function(){var e=``;return this.aK!==`<jscode>`&&(e=``+e+this.aK+`.`),e=``+e+this.aX,this.aL===null?e+=`(Unknown Source)`:(e=e+`(`+this.aL,this.aM>=0&&(e=e+`:`+this.aM,this.aJ>=0&&(e=e+`:`+this.aJ)),e+=`)`),e}),S.o=(function(){return q(this.aK)^q(this.aX)^q(this.aL)^this.aM^this.aJ});var Ys=new E().i(qs,`java.lang.StackTraceElement`,{ao:1,a:1});function Xs(){}S=Xs.prototype=new w,S.constructor=Xs;function Zs(){}Zs.prototype=S,S.g6=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Ud;for(var i=``,a=t;a!==r;)i+=``+Un(e.a[a]),a=1+a|0;return i}),new E().i(Xs,`java.lang.String$`,{cw:1,a:1});var Qs;function $s(){return Qs||=new Xs,Qs}function R(e,t,n,r,i){return e.dE=t,e.dF=i,i&&e.fI(),e}var ec=class extends Error{constructor(){super(),this.dE=null,this.dF=!1,this.dD=null,this.bH=null}bm(){return this.dE}fI(){var e=this instanceof Z?this.S:this;return this.dD=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}fQ(){return this.bH===null&&(this.dF?this.bH=za().fG(this.dD):this.bH=new(Ys.r()).C(0)),this.bH}t(){var e=In(this),t=this.bm();return t===null?e:e+`: `+t}o(){return tr.prototype.o.call(this)}h(e){return tr.prototype.h.call(this,e)}get message(){var e=this.bm();return e===null?``:e}get name(){return In(this)}toString(){return this.t()}};function tc(){}S=tc.prototype=new w,S.constructor=tc;function nc(){}nc.prototype=S,S.es=(function(e,t){var n=e.y();if(n>-1){for(var r=t.g7(n),i=e.l(),a=0;a<n;)I().fc(r,a,i.g()),a=1+a|0;return r}else{var o=null,s=t.gw(),c=s===fr.l();o=[];for(var l=e.l();l.s();){var u=l.g(),d=c?$n(u):u===null?s.am.z:u;o.push(d)}return(s===dr.l()?eo.l():s===No.l()||s===Al.l()?D.l():s).am.r().w(o)}}),S.er=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().J(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(tc,`scala.Array$`,{cG:1,a:1});var rc;function ic(){return rc||=new tc,rc}function ac(){this.dH=null,sc=this,this.dH=new Xo(Ka().dC)}S=ac.prototype=new w,S.constructor=ac;function oc(){}oc.prototype=S,S.gk=(function(){return this.dH.cr}),new E().i(ac,`scala.Console$`,{cH:1,dA:1});var sc;function cc(){return sc||=new ac,sc}function lc(){}S=lc.prototype=new bo,S.constructor=lc;function uc(){}uc.prototype=S,S.gQ=(function(e){return e===null?null:e.a.length===0?df().dQ:new rm(e)});function dc(){}S=dc.prototype=new w,S.constructor=dc;function fc(){}fc.prototype=S,S.bM=(function(e){return e===null?J():new Y(e)}),new E().i(dc,`scala.Option$`,{cO:1,a:1});var pc;function mc(){return pc||=new dc,pc}function hc(e,t){if(t===e)e.e2(Sd().et(t));else for(var n=t.l();n.s();)e.ct(n.g());return e}function gc(){}S=gc.prototype=new w,S.constructor=gc;function _c(){}_c.prototype=S,S.t=(function(){return`<function0>`});function vc(){}S=vc.prototype=new w,S.constructor=vc;function yc(){}yc.prototype=S,S.t=(function(){return`<function1>`});function bc(){}S=bc.prototype=new w,S.constructor=bc;function xc(){}xc.prototype=S,S.t=(function(){return`<function2>`});function Sc(){}S=Sc.prototype=new w,S.constructor=Sc;function Cc(){}Cc.prototype=S,S.t=(function(){return`<function3>`});function wc(e){this.bL=!1,this.bL=e}S=wc.prototype=new w,S.constructor=wc;function Tc(){}Tc.prototype=S,S.t=(function(){return``+this.bL}),new E().i(wc,`scala.runtime.BooleanRef`,{dN:1,a:1});function Ec(e){this.b4=0,this.b4=e}S=Ec.prototype=new w,S.constructor=Ec;function Dc(){}Dc.prototype=S,S.t=(function(){return``+this.b4}),new E().i(Ec,`scala.runtime.IntRef`,{dP:1,a:1});function Oc(){this.u=0,this.dY=0,this.f0=0,this.eZ=0,Ac=this,this.u=q(`Seq`),this.dY=q(`Map`),this.f0=q(`Set`),this.eZ=this.gL(mm(),this.dY)}S=Oc.prototype=new $o,S.constructor=Oc;function kc(){}kc.prototype=S,S.gx=(function(e){return Qf(e)?this.fV(e,this.u):e instanceof Vp?this.g1(e,this.u):this.gj(e,this.u)}),new E().i(Oc,`scala.util.hashing.MurmurHash3$`,{ec:1,eb:1});var Ac;function z(){return Ac||=new Oc,Ac}var jc=class extends ec{};function Mc(){this.bR=null,this.cF=null,this.cG=null,Pc=this,this.bR=Sd().e3(I().n(new(vo.r()).C([]))),this.cF=new K((e=>{try{console.error(this.fM(e)+`
`+this.fP(e,`
`))}catch(e){var t=e instanceof ec?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cG=new K((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.S:t})),this.gq(this.cF)}S=Mc.prototype=new w,S.constructor=Mc;function Nc(){}Nc.prototype=S,S.fM=(function(e){try{var t=e.bm()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Fn(e).cy()+`: `+t}),S.fP=(function(e,t){try{return Eo(pl().gQ(e.fQ()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),S.gq=(function(e){this.bR.ct(e)}),S.cD=(function(e){for(var t=this.bR.l();t.s();){var n=t.g();try{n.i(e)}catch(e){var r=e instanceof ec?e:new Z(e),i=this.cG;if(n===null?i===null:n.h(i))throw r instanceof Z?r.S:r;console.warn(`Error processing an unhandled error callback:`),Uo().gD(0,new mu((e=>(()=>{throw e instanceof Z?e.S:e}))(r)))}}}),new E().i(Mc,`com.raquo.airstream.core.AirstreamError$`,{b5:1,dy:1,dz:1});var Pc;function Fc(){return Pc||=new Mc,Pc}function B(e,t,n){return new Kl(n.fd(t))}function Ic(e,t){this.aI=null,this.bZ=null,this.c0=null,this.aI=e,this.bZ=(n=>{var r=e.d5.i(n);r.f()||t.i(r.w())}),this.c0=(()=>{var e=null;e=this;var t={};if(e===null)throw new Bu;return t.capture=e.aI.d7,t.passive=e.aI.d6,t})()}S=Ic.prototype=new w,S.constructor=Ic;function Lc(){}Lc.prototype=S,S.ai=(function(e){this.fh(e,!1)}),S.fh=(function(e,t){if(wu(e,this)===-1){var n=new K((t=>(O().f3(e.Q,this),new ri(t.d8,new mu((()=>{var t=wu(e,this);t!==-1&&(Cu(e,t),O().gs(e.Q,this))})))))),r=t?ta().gM(e,n):Zr().cE(e.Y,new K((t=>n.i(new zi(e,t)))),!1);return Su(e,this,t),r}else{var i=new K((e=>void 0));return Zr().eG(e.Y,new K((t=>{i.i(new zi(e,t))})),!1)}}),S.t=(function(){return`EventListener(`+this.aI.by.bz+`)`});var Rc=new E().i(Ic,`com.raquo.laminar.modifiers.EventListener`,{bQ:1,R:1,bP:1});function zc(e,t,n){this.db=null,this.dc=null,this.da=null,this.db=e,this.dc=t,this.da=n}S=zc.prototype=new w,S.constructor=zc;function Bc(){}Bc.prototype=S,S.ai=(function(e){this.da.fa(e,this.db,this.dc)}),new E().i(zc,`com.raquo.laminar.modifiers.KeySetter`,{bR:1,R:1,bY:1});function Vc(e,t){if(this.c2=null,this.dg=null,this.dh=null,this.dg=t,Cs(this),e===null)throw V(new H,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().fX(e,document))throw V(new H,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.dh=e,this.g4()}S=Vc.prototype=new w,S.constructor=Vc;function Hc(){}Hc.prototype=S,S.bO=(function(){return this.c2}),S.ei=(function(e){this.c2=e}),S.g4=(function(){return this.c2.e1(),Zi().cu(this,this.dg,void 0)}),S.bq=(function(){return this.dh}),new E().i(Vc,`com.raquo.laminar.nodes.RootNode`,{c3:1,a0:1,aa:1});function Uc(e,t,n){this.c4=null,this.dj=null,this.dj=e,ws(this,e,!1)}S=Uc.prototype=new Es,S.constructor=Uc;function Wc(){}Wc.prototype=S,S.cz=(function(){return this.dj}),new E().i(Uc,`com.raquo.laminar.tags.CustomHtmlTag`,{c5:1,ab:1,a1:1});function Gc(){this.bE=null,this.bD=null,this.bF=!1,js(this,`wa-button`)}S=Gc.prototype=new Ns,S.constructor=Gc;function Kc(){}Kc.prototype=S,S.e0=(function(){return Dn}),new E().i(Gc,`io.github.nguyenyou.webawesome.laminar.Button$`,{c9:1,ad:1,ac:1});var qc;function Jc(){return qc||=new Gc,qc}function Yc(){this.aq=null,this.aU=null,this.dl=null,this.dm=!1,fs(this,`animation`,new ks)}S=Yc.prototype=new ms,S.constructor=Yc;function Xc(){}Xc.prototype=S,S.fH=(function(){return this.dm||=(this.dl=Qc().b6(`fade`),!0),this.dl}),new E().i(Yc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RandomContentAnimation$`,{ca:1,Z:1,T:1});var Zc;function Qc(){return Zc||=new Yc,Zc}function $c(){this.aq=null,this.aU=null,this.dn=null,this.dp=!1,fs(this,`mode`,new ks)}S=$c.prototype=new ms,S.constructor=$c;function el(){}el.prototype=S,S.gy=(function(){return this.dp||=(this.dn=nl().b6(`sequence`),!0),this.dn}),new E().i($c,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RandomContentMode$`,{cb:1,Z:1,T:1});var tl;function nl(){return tl||=new $c,tl}function rl(){this.bE=null,this.bD=null,this.bF=!1,this.dw=null,this.dx=!1,this.dy=null,this.dz=!1,this.ds=null,this.dv=!1,this.dt=null,this.du=!1,this.dq=null,this.dr=!1,js(this,`wa-random-content`)}S=rl.prototype=new Ns,S.constructor=rl;function il(){}il.prototype=S,S.fY=(function(){return this.dx||=(this.dw=(G(),fs(new ps,`items`,Si().dZ())),!0),this.dw}),S.g3=(function(){return this.dz||=(this.dy=nl(),!0),this.dy}),S.fe=(function(){return this.dv||=(this.ds=(G(),fs(new ps,`autoplay`,Si().d2)),!0),this.ds}),S.ff=(function(){return this.du||=(this.dt=(G(),fs(new ps,`autoplay-interval`,Si().dZ())),!0),this.dt}),S.f6=(function(){return this.dr||=(this.dq=Qc(),!0),this.dq}),S.e0=(function(){return Nn}),new E().i(rl,`io.github.nguyenyou.webawesome.laminar.RandomContent$`,{cc:1,ad:1,ac:1});var al;function ol(){return al||=new rl,al}function sl(e){if(e.am.Z)return e.am.Q().cy()+`[]`;for(var t=e.am.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function cl(e){this.c5=null,this.am=e}S=cl.prototype=new w,S.constructor=cl;function ll(){}ll.prototype=S,S.t=(function(){return(this.am.Y?`interface `:this.am.X?``:`class `)+this.am.N}),S.cy=(function(){return this.c5===null&&(this.c5=sl(this)),this.c5}),new E().i(cl,`java.lang.Class`,{cj:1,a:1,M:1});function V(e,t){return R(e,t,null,!0,!0),e}var H=class extends ec{};new E().i(H,`java.lang.Exception`,{I:1,u:1,a:1});function ul(){this.eV=null,fl=this,this.eV=El()}S=ul.prototype=new uc,S.constructor=ul;function dl(){}dl.prototype=S,new E().i(ul,`scala.Predef$`,{cR:1,cK:1,cL:1});var fl;function pl(){return fl||=new ul,fl}function ml(e,t){return e.bJ=t,e}function hl(){this.bJ=null}S=hl.prototype=new w,S.constructor=hl;function gl(){}gl.prototype=S,S.cx=(function(e){return this.bJ.cw(e,Kf())}),S.cv=(function(e){return this.bJ.cw(e,Kf())});function _l(e,t){return new cd(e).fk(t)}function vl(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?U().v:new fd(e,r,i)}function yl(e,t){for(var n=t.l();e.s()&&n.s();)if(!F().J(e.g(),n.g()))return!1;return e.s()===n.s()}function bl(){this.v=null,Sl=this,this.v=new nd}S=bl.prototype=new w,S.constructor=bl;function xl(){}xl.prototype=S,new E().i(bl,`scala.collection.Iterator$`,{d9:1,X:1,a:1});var Sl;function U(){return Sl||=new bl,Sl}function Cl(){}S=Cl.prototype=new w,S.constructor=Cl;function wl(){}wl.prototype=S,new E().i(Cl,`scala.collection.immutable.Map$`,{dn:1,de:1,a:1});var Tl;function El(){return Tl||=new Cl,Tl}function Dl(e){this.dR=null,this.dR=e}S=Dl.prototype=new _c,S.constructor=Dl;function Ol(){}Ol.prototype=S,S.aC=(function(){return(0,this.dR)()}),new E().i(Dl,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dJ:1,b1:1,ar:1});function W(e){this.dS=null,this.dS=e}S=W.prototype=new yc,S.constructor=W;function kl(){}kl.prototype=S,S.i=(function(e){return(0,this.dS)(e)}),new E().i(W,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dK:1,b2:1,e:1});var Al=new E().i(0,`scala.runtime.Nothing$`,{dQ:1,u:1,a:1});function jl(){}S=jl.prototype=new _c,S.constructor=jl;function Ml(){}Ml.prototype=S;function Nl(){}S=Nl.prototype=new yc,S.constructor=Nl;function Pl(){}Pl.prototype=S;function Fl(){}S=Fl.prototype=new xc,S.constructor=Fl;function Il(){}Il.prototype=S;function Ll(){}S=Ll.prototype=new Cc,S.constructor=Ll;function Rl(){}Rl.prototype=S;function zl(e,t,n,r){if(this.cH=null,r===null)throw new Bu;this.cH=void 0}S=zl.prototype=new w,S.constructor=zl;function Bl(){}Bl.prototype=S,S.t=(function(){return hr(this)}),new E().i(zl,`com.raquo.airstream.core.Observer$$anon$8`,{b9:1,ba:1,b6:1,b7:1});function Vl(e){if(this.cS=null,this.cT=!1,this.eI=null,e===null)throw new Bu;Ti(this)}S=Vl.prototype=new w,S.constructor=Vl;function Hl(){}Hl.prototype=S,S.gG=(function(){return this.cT||=(this.cS=new Ds(`svg`,!1),!0),this.cS}),new E().i(Vl,`com.raquo.laminar.api.Laminar$svg$`,{bq:1,bH:1,bA:1,bC:1});function Ul(){this.p=null,Gl=this,this.p=new rp}S=Ul.prototype=new w,S.constructor=Ul;function Wl(){}Wl.prototype=S,new E().i(Ul,`com.raquo.laminar.api.package$`,{bt:1,a7:1,a8:1,a6:1});var Gl;function G(){return Gl||=new Ul,Gl}function Kl(e){this.di=null,this.c3=null,this.di=J(),this.c3=O().fn(e)}S=Kl.prototype=new w,S.constructor=Kl;function ql(){}ql.prototype=S,S.eF=(function(e){this.di=e}),S.eH=(function(e){}),S.ai=(function(e){Zi().cu(e,this,void 0)}),S.gJ=(function(){return this.c3.data}),S.bq=(function(){return this.c3}),new E().i(Kl,`com.raquo.laminar.nodes.TextNode`,{c4:1,a0:1,R:1,a9:1});function Jl(){}S=Jl.prototype=new w,S.constructor=Jl;function Yl(){}Yl.prototype=S;function Xl(e,t){return e===t}function Zl(e){return e?1231:1237}var Ql=new E().i(0,`java.lang.Boolean`,{ch:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function $l(e){return e}function eu(e,t){return t instanceof C&&e===t.c}var tu=new E().i(0,`java.lang.Character`,{aj:1,a:1,Q:1,M:1},(e=>e instanceof C)),nu=class extends H{};function ru(){this.q=null,this.q=``}S=ru.prototype=new w,S.constructor=ru;function iu(){}iu.prototype=S,S.f8=(function(e){var t=$s().g6(e,0,e.a.length);return this.q=``+this.q+t,this}),S.t=(function(){return this.q}),S.j=(function(){return this.q.length}),S.eg=(function(e){return this.q.charCodeAt(e)}),new E().i(ru,`java.lang.StringBuilder`,{cx:1,a2:1,ah:1,a:1});function au(){}S=au.prototype=new w,S.constructor=au;function ou(){}ou.prototype=S,S.t=(function(){return`<function1>`}),S.fb=(function(e){throw new Ju(e)}),S.i=(function(e){this.fb(e)}),new E().i(au,`scala.PartialFunction$$anon$1`,{cQ:1,g:1,e:1,a:1});function su(){}S=su.prototype=new w,S.constructor=su;function cu(){}cu.prototype=S,S.l=(function(){return this}),S.bN=(function(e){return this.br(e,-1)}),S.br=(function(e,t){return vl(this,e,t)}),S.t=(function(){return`<iterator>`}),S.b7=(function(e,t,n,r){return Do(this,e,t,n,r)}),S.y=(function(){return-1});function lu(e,t){return e.bK=t,e}function uu(){this.bK=null}S=uu.prototype=new w,S.constructor=uu;function du(){}du.prototype=S,S.e3=(function(e){return this.bK.cv(e)}),S.et=(function(e){return this.bK.cx(e)}),S.cx=(function(e){return this.et(e)}),S.cv=(function(e){return this.e3(e)});function fu(e){return e.aQ(0)===0}function pu(e,t){var n=e.y();if(n!==-1)var r=t.y(),i=r!==-1&&n!==r;else var i=!1;return i?!1:yl(e.l(),t)}function mu(e){this.dV=null,this.dV=e}S=mu.prototype=new Ml,S.constructor=mu;function hu(){}hu.prototype=S,S.aC=(function(){return(0,this.dV)()}),new E().i(mu,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{dZ:1,dY:1,b1:1,ar:1});function K(e){this.dW=null,this.dW=e}S=K.prototype=new Pl,S.constructor=K;function gu(){}gu.prototype=S,S.i=(function(e){return(0,this.dW)(e)}),new E().i(K,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{e1:1,e0:1,b2:1,e:1});function _u(e){this.eY=null,this.eY=e}S=_u.prototype=new Il,S.constructor=_u;function vu(){}vu.prototype=S,new E().i(_u,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{e3:1,e2:1,dL:1,cI:1});function yu(e){this.dX=null,this.dX=e}S=yu.prototype=new Rl,S.constructor=yu;function bu(){}bu.prototype=S,S.fa=(function(e,t,n){return(0,this.dX)(e,t,n)}),new E().i(yu,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{e5:1,e4:1,dM:1,cJ:1});function xu(e){e.c1=new oi(new mu((()=>{e.Y.e1()})),new mu((()=>{e.Y.fo()}))),e.ar=void 0}function Su(e,t,n){if(e.ar===void 0)e.ar=di().a0(I().n(new(Rc.r()).C([t])));else if(n){var r=e.ar;if(r===void 0){var i;throw new Uu(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.ar;if(a===void 0){var o;throw new Uu(`undefined.get`)}else var o=a;o.push(t)}}function Cu(e,t){var n=e.ar;n!==void 0&&n.splice(t,1)}function wu(e,t){var n=e.ar;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Ln(a,t))?r=!0:i=1+i|0}return r?i:-1}function Tu(e,t){Du(e,e.bC,t)&&Ou(e,t)}function Eu(e,t){var n=e.bC;e.bC=t,Du(e,n,t)||Ou(e,t)}function Du(e,t,n){var r=!t.f()&&!t.w().bO().F.f(),i=!n.f()&&!n.w().bO().F.f();return r&&!i}function Ou(e,t){ku(e,t.f()?J():new Y(t.w().bO()))}function ku(e,t){if(t.f())e.c1.fj();else{var n=t.w();e.c1.gA(n)}}function Au(){}S=Au.prototype=new Yl,S.constructor=Au;function ju(){}ju.prototype=S;var Mu=class extends nu{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Mu,`java.lang.ArithmeticException`,{cg:1,L:1,I:1,u:1,a:1});var Nu=new E().i(0,`java.lang.Byte`,{ci:1,S:1,a:1,Q:1,M:1},(e=>Jn(e)));function Pu(e,t){return R(e,t,null,!0,!0),e}var Fu=class extends nu{};new E().i(Fu,`java.lang.IllegalArgumentException`,{al:1,L:1,I:1,u:1,a:1});function Iu(e,t){return R(e,t,null,!0,!0),e}var Lu=class extends nu{};new E().i(Lu,`java.lang.IndexOutOfBoundsException`,{am:1,L:1,I:1,u:1,a:1});function Ru(){}S=Ru.prototype=new Yl,S.constructor=Ru;function zu(){}zu.prototype=S,new E().i(Ru,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cp:1,ag:1,ae:1,ai:1,af:1});var Bu=class extends nu{constructor(){super(),R(this,null,null,!0,!0)}};new E().i(Bu,`java.lang.NullPointerException`,{cq:1,L:1,I:1,u:1,a:1});var Vu=new E().i(0,`java.lang.Short`,{cs:1,S:1,a:1,Q:1,M:1},(e=>Yn(e))),Hu=class extends nu{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Hu,`java.lang.UnsupportedOperationException`,{cA:1,L:1,I:1,u:1,a:1});var Uu=class extends nu{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Uu,`java.util.NoSuchElementException`,{cE:1,L:1,I:1,u:1,a:1});function Wu(e){return e.cc||=(e.cd=e.bI===null?`null`:qu(e),!0),e.cd}function Gu(e){return e.cc?e.cd:Wu(e)}function Ku(e){var t=e.bI;return`of class `+In(t)}function qu(e){try{return e.bI+` (`+Ku(e)+`)`}catch{return`an instance `+Ku(e)}}var Ju=class extends nu{constructor(e){super(),this.cd=null,this.bI=null,this.cc=!1,this.bI=e,R(this,null,null,!0,!0)}bm(){return Gu(this)}};new E().i(Ju,`scala.MatchError`,{cM:1,L:1,I:1,u:1,a:1});function Yu(){}S=Yu.prototype=new w,S.constructor=Yu;function Xu(){}Xu.prototype=S,S.f=(function(){return this===J()}),S.y=(function(){return this.f()?0:1}),S.l=(function(){return this.f()?U().v:new id(this.w())});function Zu(e){this.aY=0,this.dL=0,this.dK=null,this.dK=e,this.aY=0,this.dL=e.aj()}S=Zu.prototype=new cu,S.constructor=Zu;function Qu(){}Qu.prototype=S,S.s=(function(){return this.aY<this.dL}),S.g=(function(){var e=this.dK.ak(this.aY);return this.aY=1+this.aY|0,e}),new E().i(Zu,`scala.Product$$anon$1`,{cS:1,r:1,s:1,b:1,c:1});function $u(e){this.bJ=null,ml(this,e)}S=$u.prototype=new gl,S.constructor=$u;function ed(){}ed.prototype=S,new E().i($u,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{d5:1,d4:1,X:1,a:1,a3:1});function td(e){return Eo(e,e.aP()+`(`,`, `,`)`)}function nd(){}S=nd.prototype=new cu,S.constructor=nd;function rd(){}rd.prototype=S,S.s=(function(){return!1}),S.g8=(function(){throw new Uu(`next on empty iterator`)}),S.y=(function(){return 0}),S.br=(function(e,t){return this}),S.g=(function(){this.g8()}),new E().i(nd,`scala.collection.Iterator$$anon$19`,{da:1,r:1,s:1,b:1,c:1});function id(e){this.b0=!1,this.dO=null,this.dO=e,this.b0=!1}S=id.prototype=new cu,S.constructor=id;function ad(){}ad.prototype=S,S.s=(function(){return!this.b0}),S.g=(function(){return this.b0?U().v.g():(this.b0=!0,this.dO)}),S.br=(function(e,t){return this.b0||e>0||t===0?U().v:this}),new E().i(id,`scala.collection.Iterator$$anon$20`,{db:1,r:1,s:1,b:1,c:1});function od(e){for(;;){if(e.C instanceof cd){var t=e.C;e.C=t.C,e.a7=t.a7,t.N!==null&&(e.M===null&&(e.M=t.M),t.M.b1=e.N,e.N=t.N);continue}return}}function sd(e){for(;;)if(e.N===null)return e.C=null,e.M=null,!1;else{if(e.C=e.N.fU(),e.M===e.N&&(e.M=e.M.b1),e.N=e.N.b1,od(e),e.a7)return!0;if(e.C!==null&&e.C.s())return e.a7=!0,!0}}function cd(e){this.C=null,this.N=null,this.M=null,this.a7=!1,this.C=e,this.N=null,this.M=null,this.a7=!1}S=cd.prototype=new cu,S.constructor=cd;function ld(){}ld.prototype=S,S.s=(function(){return this.a7?!0:this.C===null?!1:this.C.s()?(this.a7=!0,!0):sd(this)}),S.g=(function(){return this.s()?(this.a7=!1,this.C.g()):U().v.g()}),S.fk=(function(e){var t=new Oo(e,null);return this.N===null?(this.N=t,this.M=t):(this.M.b1=t,this.M=t),this.C===null&&(this.C=U().v),this}),new E().i(cd,`scala.collection.Iterator$ConcatIterator`,{ax:1,r:1,s:1,b:1,c:1});function ud(e){for(;e.Z>0;)e.a8.s()?(e.a8.g(),e.Z=-1+e.Z|0):e.Z=0}function dd(e,t){if(e.H<0)return-1;var n=e.H-t|0;return n<0?0:n}function fd(e,t,n){this.a8=null,this.H=0,this.Z=0,this.a8=e,this.H=n,this.Z=t}S=fd.prototype=new cu,S.constructor=fd;function pd(){}pd.prototype=S,S.y=(function(){var e=this.a8.y();if(e<0)return-1;var t=e-this.Z|0,n=t<0?0:t;if(this.H<0)return n;var r=this.H;return r<n?r:n}),S.s=(function(){return ud(this),this.H!==0&&this.a8.s()}),S.g=(function(){return ud(this),this.H>0?(this.H=-1+this.H|0,this.a8.g()):this.H<0?this.a8.g():U().v.g()}),S.br=(function(e,t){var n=e>0?e:0;if(t<0)var r=dd(this,n);else if(t<=n)var r=0;else if(this.H<0)var r=t-n|0;else var i=dd(this,n),a=t-n|0,r=i<a?i:a;var o=this.Z+n|0;return r===0?U().v:o<0?(this.Z=2147483647,this.H=0,_l(this,new Dl((()=>new fd(this.a8,-2147483647+o|0,r))))):(this.Z=o,this.H=r,this)}),new E().i(fd,`scala.collection.Iterator$SliceIterator`,{dd:1,r:1,s:1,b:1,c:1});function md(e,t){if(t<0)throw Iu(new Lu,``+t);var n=e.fw(t);if(n.f())throw Iu(new Lu,``+t);return n.a1()}function hd(e,t){return $f(t)?gd(e,e,t):pu(e,t)}function gd(e,t,n){for(;;)if(t===n)return!0;else if(!t.f()&&!n.f()&&F().J(t.a1(),n.a1())){var r=t.W(),i=n.W();t=r,n=i}else return t.f()&&n.f()}function _d(e){this.b3=null,this.b3=e}S=_d.prototype=new cu,S.constructor=_d;function vd(){}vd.prototype=S,S.s=(function(){return!this.b3.f()}),S.g=(function(){var e=this.b3.a1();return this.b3=this.b3.W(),e}),new E().i(_d,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{di:1,r:1,s:1,b:1,c:1});function yd(){this.bK=null,lu(this,Od())}S=yd.prototype=new du,S.constructor=yd;function bd(){}bd.prototype=S,new E().i(yd,`scala.collection.mutable.Buffer$`,{dt:1,df:1,a3:1,X:1,a:1});var xd;function Sd(){return xd||=new yd,xd}function Cd(e){this.b5=0,this.dT=0,this.dU=null,this.dU=e,this.b5=0,this.dT=e.aj()}S=Cd.prototype=new cu,S.constructor=Cd;function wd(){}wd.prototype=S,S.s=(function(){return this.b5<this.dT}),S.g=(function(){var e=this.dU.ak(this.b5);return this.b5=1+this.b5|0,e}),new E().i(Cd,`scala.runtime.ScalaRunTime$$anon$1`,{dT:1,r:1,s:1,b:1,c:1});function Td(){}S=Td.prototype=new w,S.constructor=Td;function Ed(){}Ed.prototype=S,S.cv=(function(e){return this.eu(e)}),S.eu=(function(e){return hc(bm(new xm),e).eD()}),S.cx=(function(e){return this.eu(e)}),new E().i(Td,`scala.scalajs.js.WrappedArray$`,{dW:1,dj:1,a3:1,X:1,a:1});var Dd;function Od(){return Dd||=new Td,Dd}var kd=class e extends jc{constructor(e,t){super(),this.aE=null,this.aD=0,this.aE=e,this.aD=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aS(){return new Zu(this)}o(){var e=-889275714;return e=L().b(e,q(`TransactionDepthExceeded`)),e=L().b(e,L().x(this.aE)),e=L().b(e,this.aD),L().k(e,2)}h(t){return this===t?!0:t instanceof e&&this.aD===t.aD?this.aE===t.aE:!1}aj(){return 2}al(){return`TransactionDepthExceeded`}ak(e){if(e===0)return this.aE;if(e===1)return this.aD;throw Iu(new Lu,``+e)}t(){return`TransactionDepthExceeded: `+this.aE+`; maxDepth: `+this.aD}};new E().i(kd,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a5:1,b4:1,u:1,a:1,d:1,U:1});function Ad(e,t){this.bC=null,this.Y=null,this.c1=null,this.ar=null,this.df=null,this.Q=null,this.df=e,this.Q=t,this.bC=J(),Cs(this),xu(this)}S=Ad.prototype=new w,S.constructor=Ad;function jd(){}jd.prototype=S,S.ai=(function(e){Zi().cu(e,this,void 0)}),S.bO=(function(){return this.Y}),S.ei=(function(e){this.Y=e}),S.eH=(function(e){Tu(this,e)}),S.eF=(function(e){Eu(this,e)}),S.t=(function(){return`ReactiveHtmlElement(`+(this.Q===null?`tag=`+this.df.cz():this.Q.outerHTML)+`)`}),S.bq=(function(){return this.Q}),new E().i(Ad,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{c2:1,a0:1,R:1,a9:1,aa:1,c0:1});function Md(e,t){return Object.is(e,t)}function Nd(e){return ma().cA(e)}var Pd=new E().i(0,`java.lang.Double`,{ak:1,S:1,a:1,Q:1,M:1,V:1},(e=>typeof e==`number`)),Fd=new E().i(0,`java.lang.Float`,{cl:1,S:1,a:1,Q:1,M:1,V:1},(e=>Zn(e))),Id=new E().i(0,`java.lang.Integer`,{cn:1,S:1,a:1,Q:1,M:1,V:1},(e=>Xn(e)));function Ld(e,t){return t instanceof N&&e.c===t.c&&e.d===t.d}function Rd(e){return e.c^e.d}var zd=new E().i(0,`java.lang.Long`,{an:1,S:1,a:1,Q:1,M:1,V:1},(e=>e instanceof N)),Bd=class extends Fu{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Bd,`java.lang.NumberFormatException`,{cr:1,al:1,L:1,I:1,u:1,a:1});function q(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Vd(e,t){return e===t}var Hd=new E().i(0,`java.lang.String`,{cv:1,a:1,Q:1,a2:1,M:1,V:1},(e=>typeof e==`string`)),Ud=class extends Lu{constructor(){super(),R(this,null,null,!0,!0)}};new E().i(Ud,`java.lang.StringIndexOutOfBoundsException`,{cy:1,am:1,L:1,I:1,u:1,a:1});function Wd(){}S=Wd.prototype=new Xu,S.constructor=Wd;function Gd(){}Gd.prototype=S,S.fL=(function(){throw new Uu(`None.get`)}),S.al=(function(){return`None`}),S.aj=(function(){return 0}),S.ak=(function(e){return L().bn(e)}),S.aS=(function(){return new Cd(this)}),S.o=(function(){return 2433880}),S.t=(function(){return`None`}),S.w=(function(){this.fL()}),new E().i(Wd,`scala.None$`,{cN:1,as:1,b:1,U:1,d:1,a:1});var Kd;function J(){return Kd||=new Wd,Kd}function Y(e){this.aZ=null,this.aZ=e}S=Y.prototype=new Xu,S.constructor=Y;function qd(){}qd.prototype=S,S.w=(function(){return this.aZ}),S.al=(function(){return`Some`}),S.aj=(function(){return 1}),S.ak=(function(e){return e===0?this.aZ:L().bn(e)}),S.aS=(function(){return new Cd(this)}),S.o=(function(){return z().eC(this,-889275714,!1)}),S.t=(function(){return I().f2(this)}),S.h=(function(e){return this===e||e instanceof Y&&F().J(this.aZ,e.aZ)}),new E().i(Y,`scala.Some`,{at:1,as:1,b:1,U:1,d:1,a:1});function Jd(){}S=Jd.prototype=new w,S.constructor=Jd;function Yd(){}Yd.prototype=S,S.aP=(function(){return this.aT()}),S.bk=(function(e){To(this,e)}),S.b7=(function(e,t,n,r){return Do(this,e,t,n,r)}),S.y=(function(){return-1});function X(e,t){return e.G=t,e.e=0,e.B=ao().bl(e.G),e}function Xd(){this.G=null,this.e=0,this.B=0}S=Xd.prototype=new cu,S.constructor=Xd;function Zd(){}Zd.prototype=S,S.y=(function(){return this.B-this.e|0}),S.s=(function(){return this.e<this.B}),S.g=(function(){this.e>=ao().bl(this.G)&&U().v.g();var e=I().aO(this.G,this.e);return this.e=1+this.e|0,e}),S.bN=(function(e){if(e>0){var t=this.e+e|0;if(t<0)var n=this.B;else var r=this.B,n=r<t?r:t;this.e=n}return this}),new E().i(Xd,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Qd(e,t){return t<0?0:t>e.R?e.R:t}function $d(e){this.dN=null,this.a6=0,this.R=0,this.dN=e,this.a6=0,this.R=e.j()}S=$d.prototype=new cu,S.constructor=$d;function ef(){}ef.prototype=S,S.y=(function(){return this.R}),S.s=(function(){return this.R>0}),S.g=(function(){if(this.R>0){var e=this.dN.m(this.a6);return this.a6=1+this.a6|0,this.R=-1+this.R|0,e}else return U().v.g()}),S.bN=(function(e){if(e>0){this.a6=this.a6+e|0;var t=this.R-e|0;this.R=t<0?0:t}return this}),S.br=(function(e,t){var n=Qd(this,e),r=Qd(this,t)-n|0;return this.R=r<0?0:r,this.a6=this.a6+n|0,this}),new E().i($d,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{d8:1,r:1,s:1,b:1,c:1,a:1});function tf(e){return e.co||=(e.cp=new Np(new T(0)),!0),e.cp}function nf(e){return e.co?e.cp:tf(e)}function rf(){this.cp=null,this.eW=null,this.co=!1,of=this,this.eW=new $u(this)}S=rf.prototype=new w,S.constructor=rf;function af(){}af.prototype=S,S.fJ=(function(e,t){return e instanceof gp?e:this.gN(ic().es(e,t))}),S.gN=(function(e){if(e===null)return null;if(e instanceof T)return new Np(e);if(e instanceof sr)return new kp(e);if(e instanceof ur)return new Tp(e);if(e instanceof cr)return new jp(e);if(e instanceof lr)return new Dp(e);if(e instanceof ir)return new Cp(e);if(e instanceof ar)return new xp(e);if(e instanceof or)return new Fp(e);if(e instanceof rr)return new yp(e);if($a(e,1))return new Lp(e);throw new Ju(e)}),S.cw=(function(e,t){return this.fJ(e,t)}),new E().i(rf,`scala.collection.immutable.ArraySeq$`,{dm:1,az:1,av:1,au:1,aw:1,a:1});var of;function sf(){return of||=new rf,of}function cf(){this.eX=null,this.dQ=null,uf=this,this.eX=new $u(this),this.dQ=new rm(new T(0))}S=cf.prototype=new w,S.constructor=cf;function lf(){}lf.prototype=S,S.fK=(function(e,t){return this.g2(ic().es(e,t))}),S.g2=(function(e){if(e===null)return null;if(e instanceof T)return new rm(e);if(e instanceof sr)return new $p(e);if(e instanceof ur)return new Yp(e);if(e instanceof cr)return new tm(e);if(e instanceof lr)return new Zp(e);if(e instanceof ir)return new qp(e);if(e instanceof ar)return new Gp(e);if(e instanceof or)return new am(e);if(e instanceof rr)return new Up(e);if($a(e,1))return new sm(e);throw new Ju(e)}),S.cw=(function(e,t){return this.fK(e,t)}),new E().i(cf,`scala.collection.mutable.ArraySeq$`,{dr:1,az:1,av:1,au:1,aw:1,a:1});var uf;function df(){return uf||=new cf,uf}function ff(){}S=ff.prototype=new ju,S.constructor=ff;function pf(){}pf.prototype=S;function mf(e){this.G=null,this.e=0,this.B=0,this.ce=null,this.ce=e,X(this,e)}S=mf.prototype=new Zd,S.constructor=mf;function hf(){}hf.prototype=S,S.g9=(function(){this.e>=this.ce.a.length&&U().v.g();var e=this.ce.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.g9()}),new E().i(mf,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{cV:1,N:1,r:1,s:1,b:1,c:1,a:1});function gf(e){this.G=null,this.e=0,this.B=0,this.cf=null,this.cf=e,X(this,e)}S=gf.prototype=new Zd,S.constructor=gf;function _f(){}_f.prototype=S,S.ga=(function(){this.e>=this.cf.a.length&&U().v.g();var e=this.cf.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return Qn(this.ga())}),new E().i(gf,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{cW:1,N:1,r:1,s:1,b:1,c:1,a:1});function vf(e){this.G=null,this.e=0,this.B=0,this.cg=null,this.cg=e,X(this,e)}S=vf.prototype=new Zd,S.constructor=vf;function yf(){}yf.prototype=S,S.gb=(function(){this.e>=this.cg.a.length&&U().v.g();var e=this.cg.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.gb()}),new E().i(vf,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{cX:1,N:1,r:1,s:1,b:1,c:1,a:1});function bf(e){this.G=null,this.e=0,this.B=0,this.ch=null,this.ch=e,X(this,e)}S=bf.prototype=new Zd,S.constructor=bf;function xf(){}xf.prototype=S,S.gc=(function(){this.e>=this.ch.a.length&&U().v.g();var e=this.ch.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.gc()}),new E().i(bf,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{cY:1,N:1,r:1,s:1,b:1,c:1,a:1});function Sf(e){this.G=null,this.e=0,this.B=0,this.ci=null,this.ci=e,X(this,e)}S=Sf.prototype=new Zd,S.constructor=Sf;function Cf(){}Cf.prototype=S,S.gd=(function(){this.e>=this.ci.a.length&&U().v.g();var e=this.ci.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.gd()}),new E().i(Sf,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{cZ:1,N:1,r:1,s:1,b:1,c:1,a:1});function wf(e){this.G=null,this.e=0,this.B=0,this.cj=null,this.cj=e,X(this,e)}S=wf.prototype=new Zd,S.constructor=wf;function Tf(){}Tf.prototype=S,S.ge=(function(){this.e>=this.cj.a.length&&U().v.g();var e=this.cj.a[this.e],t=e.c,n=e.d;return this.e=1+this.e|0,new N(t,n)}),S.g=(function(){return this.ge()}),new E().i(wf,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{d0:1,N:1,r:1,s:1,b:1,c:1,a:1});function Ef(e){this.G=null,this.e=0,this.B=0,this.ck=null,this.ck=e,X(this,e)}S=Ef.prototype=new Zd,S.constructor=Ef;function Df(){}Df.prototype=S,S.gf=(function(){this.e>=this.ck.a.length&&U().v.g();var e=this.ck.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.gf()}),new E().i(Ef,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{d1:1,N:1,r:1,s:1,b:1,c:1,a:1});function Of(e){this.G=null,this.e=0,this.B=0,this.dM=null,this.dM=e,X(this,e)}S=Of.prototype=new Zd,S.constructor=Of;function kf(){}kf.prototype=S,S.gg=(function(){this.e>=this.dM.a.length&&U().v.g(),this.e=1+this.e|0}),S.g=(function(){this.gg()}),new E().i(Of,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{d2:1,N:1,r:1,s:1,b:1,c:1,a:1});function Af(e){this.G=null,this.e=0,this.B=0,this.cl=null,this.cl=e,X(this,e)}S=Af.prototype=new Zd,S.constructor=Af;function jf(){}jf.prototype=S,S.gh=(function(){this.e>=this.cl.a.length&&U().v.g();var e=this.cl.a[this.e];return this.e=1+this.e|0,e}),S.g=(function(){return this.gh()}),new E().i(Af,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{d3:1,N:1,r:1,s:1,b:1,c:1,a:1});function Mf(e){return e.aP()+`(<not computed>)`}function Nf(){}S=Nf.prototype=new w,S.constructor=Nf;function Pf(){}Pf.prototype=S;var Z=class e extends nu{constructor(e){super(),this.S=null,this.S=e,R(this,null,null,!0,!0)}bm(){return zn(this.S)}al(){return`JavaScriptException`}aj(){return 1}ak(e){return e===0?this.S:L().bn(e)}aS(){return new Cd(this)}o(){return z().eC(this,-889275714,!1)}h(t){return this===t||t instanceof e&&F().J(this.S,t.S)}};new E().i(Z,`scala.scalajs.js.JavaScriptException`,{b3:1,L:1,I:1,u:1,a:1,U:1,d:1});function Ff(e,t){typeof console<`u`&&(e.dB&&console.error?console.error(t):console.log(t))}function If(e){this.dB=!1,this.aW=null,this.dB=e,new Ru,this.aW=``}S=If.prototype=new pf,S.constructor=If;function Lf(){}Lf.prototype=S,S.fZ=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aW=``+this.aW+t,t=``;else{var r=this.aW,i=t;Ff(this,``+r+i.substring(0,n)),this.aW=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(If,`java.lang.JSConsoleBasedPrintStream`,{co:1,cf:1,ce:1,ag:1,ae:1,ai:1,af:1,ah:1});function Rf(e,t,n){for(;;)if(t<=0||n.f())return n;else{var r=-1+t|0,i=n.W();t=r,n=i}}function zf(){this.cq=null}S=zf.prototype=new Pf,S.constructor=zf;function Bf(){}Bf.prototype=S,S.t=(function(){return this.cq}),S.h=(function(e){return this===e}),S.o=(function(){return qn(this)});function Vf(){}S=Vf.prototype=new Yd,S.constructor=Vf;function Hf(){}Hf.prototype=S,S.t=(function(){return Mf(this)});function Uf(){this.cq=null,this.cq=`Any`}S=Uf.prototype=new Bf,S.constructor=Uf;function Wf(){}Wf.prototype=S,S.gw=(function(){return D.l()}),S.g7=(function(e){return new T(e)}),new E().i(Uf,`scala.reflect.ManifestFactory$AnyManifest$`,{dF:1,dH:1,dG:1,dE:1,dD:1,dC:1,dI:1,a:1,d:1});var Gf;function Kf(){return Gf||=new Uf,Gf}function Q(e,t){return e===t?!0:qf(t)&&t.ef(e)?e.cC(t):!1}function qf(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Jf(){}S=Jf.prototype=new Yd,S.constructor=Jf;function Yf(){}Yf.prototype=S,S.ef=(function(e){return!0}),S.h=(function(e){return Q(this,e)}),S.o=(function(){return z().gx(this)}),S.t=(function(){return td(this)}),S.f=(function(){return fu(this)}),S.cC=(function(e){return pu(this,e)});function Xf(){}S=Xf.prototype=new Hf,S.constructor=Xf;function Zf(){}Zf.prototype=S;function Qf(e){return!!(e&&e.$classData&&e.$classData.n.n)}function $f(e){return!!(e&&e.$classData&&e.$classData.n.Y)}function ep(e,t){return e.b2=t,e}function tp(){this.b2=null}S=tp.prototype=new Zf,S.constructor=tp;function np(){}np.prototype=S,S.m=(function(e){return this.b2.m(e)}),S.j=(function(){return this.b2.j()}),S.f=(function(){return this.b2.f()});function rp(){this.cY=null,this.cZ=!1,this.cU=null,this.cV=!1,this.cW=null,this.cX=!1,this.eK=null,this.eJ=null,this.d0=null,this.d1=!1,Ci(this),_i(this),hi(this),gi(this)}S=rp.prototype=new w,S.constructor=rp;function ip(){}ip.prototype=S,S.K=(function(){return this.cZ||=(this.cY=ws(new Ts,`p`,!1),!0),this.cY}),S.ft=(function(){return this.cV||=(this.cU=ws(new Ts,`div`,!1),!0),this.cU}),S.gi=(function(){return this.cX||=(this.cW=new us(`click`),!0),this.cW}),S.gF=(function(){return this.d1||=(this.d0=new Vl(this),!0),this.d0}),new E().i(rp,`com.raquo.laminar.api.package$$anon$1`,{bu:1,bG:1,bz:1,bE:1,bD:1,bF:1,bB:1,bs:1,bo:1,br:1,a7:1,a8:1,a6:1,bp:1});function ap(e){this.b2=null,ep(this,e)}S=ap.prototype=new np,S.constructor=ap;function op(){}op.prototype=S,S.l=(function(){return new $d(this)}),S.aT=(function(){return`IndexedSeqView`}),S.aQ=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),new E().i(ap,`scala.collection.IndexedSeqView$Id`,{d7:1,dh:1,cT:1,cU:1,h:1,i:1,b:1,k:1,c:1,j:1,dk:1,a:1,dg:1,l:1,d6:1,o:1});function sp(){}S=sp.prototype=new Yf,S.constructor=sp;function cp(){}cp.prototype=S;function lp(e,t){return!dp(t)||e.j()===t.j()}function up(e,t){if(dp(t)){if(e===t)return!0;var n=e.j(),r=n===t.j();if(r){var i=0,a=e.e4(),o=t.e4(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().J(e.m(i),t.m(i)),i=1+i|0;if(i<n&&r)for(var p=e.l().bN(i),m=t.l().bN(i);r&&p.s();)r=F().J(p.g(),m.g())}return r}else return pu(e,t)}function dp(e){return!!(e&&e.$classData&&e.$classData.n.w)}function fp(){}S=fp.prototype=new Yf,S.constructor=fp;function pp(){}pp.prototype=S;function mp(){}S=mp.prototype=new pp,S.constructor=mp;function hp(){}hp.prototype=S,S.e2=(function(e){return hc(this,e)});function gp(){}S=gp.prototype=new cp,S.constructor=gp;function _p(){}_p.prototype=S,S.ef=(function(e){return lp(this,e)}),S.cC=(function(e){return up(this,e)}),S.aT=(function(){return`IndexedSeq`}),S.aQ=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),S.aP=(function(){return`ArraySeq`}),S.e4=(function(){return 2147483647});function $(){}S=$.prototype=new pp,S.constructor=$;function vp(){}vp.prototype=S,S.aT=(function(){return`IndexedSeq`}),S.aQ=(function(e){var t=this.j();return t===e?0:t<e?-1:1}),S.y=(function(){return this.j()}),S.aP=(function(){return`ArraySeq`}),S.h=(function(e){return e instanceof $&&ao().bl(this.T())!==ao().bl(e.T())?!1:Q(this,e)});function yp(e){this.as=null,this.as=e}S=yp.prototype=new _p,S.constructor=yp;function bp(){}bp.prototype=S,S.j=(function(){return this.as.a.length}),S.o=(function(){var e=z();return e.ee(this.as,e.u)}),S.h=(function(e){return e instanceof yp?M().eq(this.as,e.as):Q(this,e)}),S.l=(function(){return new Af(this.as)}),S.bh=(function(e){return this.as.a[e]}),S.i=(function(e){return this.bh(e|0)}),S.m=(function(e){return this.bh(e)}),new E().i(yp,`scala.collection.immutable.ArraySeq$ofBoolean`,{aC:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function xp(e){this.at=null,this.at=e}S=xp.prototype=new _p,S.constructor=xp;function Sp(){}Sp.prototype=S,S.j=(function(){return this.at.a.length}),S.b8=(function(e){return this.at.a[e]}),S.o=(function(){var e=z();return e.e6(this.at,e.u)}),S.h=(function(e){return e instanceof xp?M().ej(this.at,e.at):Q(this,e)}),S.l=(function(){return new mf(this.at)}),S.i=(function(e){return this.b8(e|0)}),S.m=(function(e){return this.b8(e)}),new E().i(xp,`scala.collection.immutable.ArraySeq$ofByte`,{aD:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Cp(e){this.a9=null,this.a9=e}S=Cp.prototype=new _p,S.constructor=Cp;function wp(){}wp.prototype=S,S.j=(function(){return this.a9.a.length}),S.b9=(function(e){return this.a9.a[e]}),S.o=(function(){var e=z();return e.e7(this.a9,e.u)}),S.h=(function(e){return e instanceof Cp?M().ek(this.a9,e.a9):Q(this,e)}),S.l=(function(){return new gf(this.a9)}),S.b7=(function(e,t,n,r){return new qp(this.a9).b7(e,t,n,r)}),S.i=(function(e){return Qn(this.b9(e|0))}),S.m=(function(e){return Qn(this.b9(e))}),new E().i(Cp,`scala.collection.immutable.ArraySeq$ofChar`,{aE:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Tp(e){this.au=null,this.au=e}S=Tp.prototype=new _p,S.constructor=Tp;function Ep(){}Ep.prototype=S,S.j=(function(){return this.au.a.length}),S.o=(function(){var e=z();return e.e8(this.au,e.u)}),S.h=(function(e){return e instanceof Tp?M().el(this.au,e.au):Q(this,e)}),S.l=(function(){return new vf(this.au)}),S.bc=(function(e){return this.au.a[e]}),S.i=(function(e){return this.bc(e|0)}),S.m=(function(e){return this.bc(e)}),new E().i(Tp,`scala.collection.immutable.ArraySeq$ofDouble`,{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Dp(e){this.av=null,this.av=e}S=Dp.prototype=new _p,S.constructor=Dp;function Op(){}Op.prototype=S,S.j=(function(){return this.av.a.length}),S.o=(function(){var e=z();return e.e9(this.av,e.u)}),S.h=(function(e){return e instanceof Dp?M().em(this.av,e.av):Q(this,e)}),S.l=(function(){return new bf(this.av)}),S.bd=(function(e){return this.av.a[e]}),S.i=(function(e){return this.bd(e|0)}),S.m=(function(e){return this.bd(e)}),new E().i(Dp,`scala.collection.immutable.ArraySeq$ofFloat`,{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function kp(e){this.aw=null,this.aw=e}S=kp.prototype=new _p,S.constructor=kp;function Ap(){}Ap.prototype=S,S.j=(function(){return this.aw.a.length}),S.o=(function(){var e=z();return e.ea(this.aw,e.u)}),S.h=(function(e){return e instanceof kp?M().en(this.aw,e.aw):Q(this,e)}),S.l=(function(){return new Sf(this.aw)}),S.be=(function(e){return this.aw.a[e]}),S.i=(function(e){return this.be(e|0)}),S.m=(function(e){return this.be(e)}),new E().i(kp,`scala.collection.immutable.ArraySeq$ofInt`,{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function jp(e){this.ax=null,this.ax=e}S=jp.prototype=new _p,S.constructor=jp;function Mp(){}Mp.prototype=S,S.j=(function(){return this.ax.a.length}),S.o=(function(){var e=z();return e.eb(this.ax,e.u)}),S.h=(function(e){return e instanceof jp?M().eo(this.ax,e.ax):Q(this,e)}),S.l=(function(){return new wf(this.ax)}),S.bf=(function(e){return this.ax.a[e]}),S.i=(function(e){return this.bf(e|0)}),S.m=(function(e){return this.bf(e)}),new E().i(jp,`scala.collection.immutable.ArraySeq$ofLong`,{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Np(e){this.ay=null,this.ay=e}S=Np.prototype=new _p,S.constructor=Np;function Pp(){}Pp.prototype=S,S.j=(function(){return this.ay.a.length}),S.m=(function(e){return this.ay.a[e]}),S.o=(function(){var e=z();return e.e5(this.ay,e.u)}),S.h=(function(e){return e instanceof Np?ic().er(this.ay,e.ay):Q(this,e)}),S.l=(function(){return X(new Xd,this.ay)}),S.i=(function(e){return this.m(e|0)}),new E().i(Np,`scala.collection.immutable.ArraySeq$ofRef`,{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Fp(e){this.az=null,this.az=e}S=Fp.prototype=new _p,S.constructor=Fp;function Ip(){}Ip.prototype=S,S.j=(function(){return this.az.a.length}),S.ba=(function(e){return this.az.a[e]}),S.o=(function(){var e=z();return e.ec(this.az,e.u)}),S.h=(function(e){return e instanceof Fp?M().ep(this.az,e.az):Q(this,e)}),S.l=(function(){return new Ef(this.az)}),S.i=(function(e){return this.ba(e|0)}),S.m=(function(e){return this.ba(e)}),new E().i(Fp,`scala.collection.immutable.ArraySeq$ofShort`,{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Lp(e){this.aN=null,this.aN=e}S=Lp.prototype=new _p,S.constructor=Lp;function Rp(){}Rp.prototype=S,S.j=(function(){return this.aN.a.length}),S.o=(function(){var e=z();return e.ed(this.aN,e.u)}),S.h=(function(e){return e instanceof Lp?this.aN.a.length===e.aN.a.length:Q(this,e)}),S.l=(function(){return new Of(this.aN)}),S.bg=(function(e){}),S.i=(function(e){this.bg(e|0)}),S.m=(function(e){this.bg(e)}),new E().i(Lp,`scala.collection.immutable.ArraySeq$ofUnit`,{aL:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function zp(e,t,n,r){for(;;)if(t===r)return n.f()?0:1;else if(n.f())return-1;else{var i=1+t|0,a=n.W();t=i,n=a}}function Bp(e,t,n){for(;;)if(t===n)return!0;else{var r=t.f(),i=n.f();if(!(r||i)&&F().J(t.a1(),n.a1())){var a=t.W(),o=n.W();t=a,n=o}else return r&&i}}function Vp(){}S=Vp.prototype=new cp,S.constructor=Vp;function Hp(){}Hp.prototype=S,S.l=(function(){return new _d(this)}),S.aT=(function(){return`LinearSeq`}),S.m=(function(e){return md(this,e)}),S.cC=(function(e){return hd(this,e)}),S.f=(function(){return this===mm()}),S.bk=(function(e){for(var t=this;!t.f();)e.i(t.a1()),t=t.W()}),S.j=(function(){for(var e=this,t=0;!e.f();)t=1+t|0,e=e.W();return t}),S.aQ=(function(e){return e<0?1:zp(this,0,this,e)}),S.aP=(function(){return`List`}),S.h=(function(e){return e instanceof Vp?Bp(this,this,e):Q(this,e)}),S.i=(function(e){return md(this,e|0)}),S.fw=(function(e){return Rf(this,e,this)});function Up(e){this.aa=null,this.aa=e}S=Up.prototype=new vp,S.constructor=Up;function Wp(){}Wp.prototype=S,S.j=(function(){return this.aa.a.length}),S.o=(function(){var e=z();return e.ee(this.aa,e.u)}),S.h=(function(e){return e instanceof Up?M().eq(this.aa,e.aa):$.prototype.h.call(this,e)}),S.l=(function(){return new Af(this.aa)}),S.bh=(function(e){return this.aa.a[e]}),S.i=(function(e){return this.bh(e|0)}),S.m=(function(e){return this.bh(e)}),S.T=(function(){return this.aa}),new E().i(Up,`scala.collection.mutable.ArraySeq$ofBoolean`,{aO:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Gp(e){this.ab=null,this.ab=e}S=Gp.prototype=new vp,S.constructor=Gp;function Kp(){}Kp.prototype=S,S.j=(function(){return this.ab.a.length}),S.b8=(function(e){return this.ab.a[e]}),S.o=(function(){var e=z();return e.e6(this.ab,e.u)}),S.h=(function(e){return e instanceof Gp?M().ej(this.ab,e.ab):$.prototype.h.call(this,e)}),S.l=(function(){return new mf(this.ab)}),S.i=(function(e){return this.b8(e|0)}),S.m=(function(e){return this.b8(e)}),S.T=(function(){return this.ab}),new E().i(Gp,`scala.collection.mutable.ArraySeq$ofByte`,{aP:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function qp(e){this.O=null,this.O=e}S=qp.prototype=new vp,S.constructor=qp;function Jp(){}Jp.prototype=S,S.j=(function(){return this.O.a.length}),S.b9=(function(e){return this.O.a[e]}),S.o=(function(){var e=z();return e.e7(this.O,e.u)}),S.h=(function(e){return e instanceof qp?M().ek(this.O,e.O):$.prototype.h.call(this,e)}),S.l=(function(){return new gf(this.O)}),S.b7=(function(e,t,n,r){var i=e.I;t.length!==0&&(i.q=``+i.q+t);var a=this.O.a.length;if(a!==0)if(n===``)i.f8(this.O);else{i.j();var o=this.O.a[0],s=``+Un(o);i.q+=s;for(var c=1;c<a;){i.q=``+i.q+n;var l=this.O.a[c],u=``+Un(l);i.q+=u,c=1+c|0}}return r.length!==0&&(i.q=``+i.q+r),e}),S.i=(function(e){return Qn(this.b9(e|0))}),S.m=(function(e){return Qn(this.b9(e))}),S.T=(function(){return this.O}),new E().i(qp,`scala.collection.mutable.ArraySeq$ofChar`,{aQ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Yp(e){this.ac=null,this.ac=e}S=Yp.prototype=new vp,S.constructor=Yp;function Xp(){}Xp.prototype=S,S.j=(function(){return this.ac.a.length}),S.o=(function(){var e=z();return e.e8(this.ac,e.u)}),S.h=(function(e){return e instanceof Yp?M().el(this.ac,e.ac):$.prototype.h.call(this,e)}),S.l=(function(){return new vf(this.ac)}),S.bc=(function(e){return this.ac.a[e]}),S.i=(function(e){return this.bc(e|0)}),S.m=(function(e){return this.bc(e)}),S.T=(function(){return this.ac}),new E().i(Yp,`scala.collection.mutable.ArraySeq$ofDouble`,{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Zp(e){this.ad=null,this.ad=e}S=Zp.prototype=new vp,S.constructor=Zp;function Qp(){}Qp.prototype=S,S.j=(function(){return this.ad.a.length}),S.o=(function(){var e=z();return e.e9(this.ad,e.u)}),S.h=(function(e){return e instanceof Zp?M().em(this.ad,e.ad):$.prototype.h.call(this,e)}),S.l=(function(){return new bf(this.ad)}),S.bd=(function(e){return this.ad.a[e]}),S.i=(function(e){return this.bd(e|0)}),S.m=(function(e){return this.bd(e)}),S.T=(function(){return this.ad}),new E().i(Zp,`scala.collection.mutable.ArraySeq$ofFloat`,{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $p(e){this.ae=null,this.ae=e}S=$p.prototype=new vp,S.constructor=$p;function em(){}em.prototype=S,S.j=(function(){return this.ae.a.length}),S.o=(function(){var e=z();return e.ea(this.ae,e.u)}),S.h=(function(e){return e instanceof $p?M().en(this.ae,e.ae):$.prototype.h.call(this,e)}),S.l=(function(){return new Sf(this.ae)}),S.be=(function(e){return this.ae.a[e]}),S.i=(function(e){return this.be(e|0)}),S.m=(function(e){return this.be(e)}),S.T=(function(){return this.ae}),new E().i($p,`scala.collection.mutable.ArraySeq$ofInt`,{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function tm(e){this.af=null,this.af=e}S=tm.prototype=new vp,S.constructor=tm;function nm(){}nm.prototype=S,S.j=(function(){return this.af.a.length}),S.o=(function(){var e=z();return e.eb(this.af,e.u)}),S.h=(function(e){return e instanceof tm?M().eo(this.af,e.af):$.prototype.h.call(this,e)}),S.l=(function(){return new wf(this.af)}),S.bf=(function(e){return this.af.a[e]}),S.i=(function(e){return this.bf(e|0)}),S.m=(function(e){return this.bf(e)}),S.T=(function(){return this.af}),new E().i(tm,`scala.collection.mutable.ArraySeq$ofLong`,{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function rm(e){this.ag=null,this.ag=e}S=rm.prototype=new vp,S.constructor=rm;function im(){}im.prototype=S,S.j=(function(){return this.ag.a.length}),S.m=(function(e){return this.ag.a[e]}),S.o=(function(){var e=z();return e.e5(this.ag,e.u)}),S.h=(function(e){return e instanceof rm?ic().er(this.ag,e.ag):$.prototype.h.call(this,e)}),S.l=(function(){return X(new Xd,this.ag)}),S.i=(function(e){return this.m(e|0)}),S.T=(function(){return this.ag}),new E().i(rm,`scala.collection.mutable.ArraySeq$ofRef`,{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function am(e){this.ah=null,this.ah=e}S=am.prototype=new vp,S.constructor=am;function om(){}om.prototype=S,S.j=(function(){return this.ah.a.length}),S.ba=(function(e){return this.ah.a[e]}),S.o=(function(){var e=z();return e.ec(this.ah,e.u)}),S.h=(function(e){return e instanceof am?M().ep(this.ah,e.ah):$.prototype.h.call(this,e)}),S.l=(function(){return new Ef(this.ah)}),S.i=(function(e){return this.ba(e|0)}),S.m=(function(e){return this.ba(e)}),S.T=(function(){return this.ah}),new E().i(am,`scala.collection.mutable.ArraySeq$ofShort`,{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function sm(e){this.aA=null,this.aA=e}S=sm.prototype=new vp,S.constructor=sm;function cm(){}cm.prototype=S,S.j=(function(){return this.aA.a.length}),S.o=(function(){var e=z();return e.ed(this.aA,e.u)}),S.h=(function(e){return e instanceof sm?this.aA.a.length===e.aA.a.length:$.prototype.h.call(this,e)}),S.l=(function(){return new Of(this.aA)}),S.bg=(function(e){}),S.i=(function(e){this.bg(e|0)}),S.m=(function(e){this.bg(e)}),S.T=(function(){return this.aA}),new E().i(sm,`scala.collection.mutable.ArraySeq$ofUnit`,{aX:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function lm(e,t){this.cm=null,this.cn=null,this.cm=e,this.cn=t}S=lm.prototype=new Hp,S.constructor=lm;function um(){}um.prototype=S,S.a1=(function(){return this.cm}),S.al=(function(){return`::`}),S.aj=(function(){return 2}),S.ak=(function(e){switch(e){case 0:return this.cm;case 1:return this.cn;default:return L().bn(e)}}),S.aS=(function(){return new Cd(this)}),S.W=(function(){return this.cn}),new E().i(lm,`scala.collection.immutable.$colon$colon`,{dl:1,a4:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aM:1,Y:1,ay:1,aN:1,aA:1,q:1,p:1,A:1,aB:1,a:1,U:1});function dm(){}S=dm.prototype=new Hp,S.constructor=dm;function fm(){}fm.prototype=S,S.fT=(function(){throw new Uu(`head of empty list`)}),S.gI=(function(){throw new Hu(`tail of empty list`)}),S.y=(function(){return 0}),S.l=(function(){return U().v}),S.al=(function(){return`Nil`}),S.aj=(function(){return 0}),S.ak=(function(e){return L().bn(e)}),S.aS=(function(){return new Cd(this)}),S.W=(function(){this.gI()}),S.a1=(function(){this.fT()}),new E().i(dm,`scala.collection.immutable.Nil$`,{dp:1,a4:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aM:1,Y:1,ay:1,aN:1,aA:1,q:1,p:1,A:1,aB:1,a:1,U:1});var pm;function mm(){return pm||=new dm,pm}function hm(e,t){return e.I=t,e}function gm(e){return hm(e,new ru),e}function _m(){this.I=null}S=_m.prototype=new pp,S.constructor=_m;function vm(){}vm.prototype=S,S.aT=(function(){return`IndexedSeq`}),S.l=(function(){return new $d(new ap(this))}),S.aQ=(function(e){var t=this.I.j();return t===e?0:t<e?-1:1}),S.e2=(function(e){return hc(this,e)}),S.j=(function(){return this.I.j()}),S.y=(function(){return this.I.j()}),S.f4=(function(e){var t=this.I,n=``+Un(e);return t.q+=n,this}),S.t=(function(){return this.I.q}),S.f=(function(){return this.I.j()===0}),S.eD=(function(){return this.I.q}),S.ct=(function(e){return this.f4($n(e))}),S.i=(function(e){var t=e|0;return Qn(this.I.eg(t))}),S.m=(function(e){return Qn(this.I.eg(e))}),new E().i(_m,`scala.collection.mutable.StringBuilder`,{dx:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dv:1,aY:1,b0:1,aZ:1,D:1,n:1,o:1,E:1,a2:1,a:1});function ym(e,t){return e.aB=t,e}function bm(e){return ym(e,[]),e}function xm(){this.aB=null}S=xm.prototype=new hp,S.constructor=xm;function Sm(){}Sm.prototype=S,S.aT=(function(){return`IndexedSeq`}),S.l=(function(){return new $d(new ap(this))}),S.aQ=(function(e){var t=this.aB.length|0;return t===e?0:t<e?-1:1}),S.m=(function(e){return this.aB[e]}),S.j=(function(){return this.aB.length|0}),S.y=(function(){return this.aB.length|0}),S.aP=(function(){return`WrappedArray`}),S.eD=(function(){return this}),S.ct=(function(e){return this.aB.push(e),this}),S.i=(function(e){var t=e|0;return this.aB[t]}),new E().i(xm,`scala.scalajs.js.WrappedArray`,{dV:1,dq:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,ds:1,b0:1,aZ:1,dw:1,q:1,p:1,D:1,n:1,o:1,E:1,du:1,aY:1,a:1}),Pn=new N(0,0),pr.z=Pn,ua(new(Hd.r()).C([]));