var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),h=new WeakMap;var g=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=h.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&h.set(t,e))}return e}toString(){return this.cssText}};const _=e=>new g(typeof e==`string`?e:e+``,void 0,m),v=(e,...t)=>new g(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),y=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},b=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return _(t)})(e):e,{is:ee,defineProperty:te,getOwnPropertyDescriptor:x,getOwnPropertyNames:S,getOwnPropertySymbols:C,getPrototypeOf:ne}=Object,re=globalThis,ie=re.trustedTypes,ae=ie?ie.emptyScript:``,w=re.reactiveElementPolyfillSupport,T=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},oe=(e,t)=>!ee(e,t),se={attribute:!0,type:String,converter:E,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??=Symbol(`metadata`),re.litPropertyMetadata??=new WeakMap;var D=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&te(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=x(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??se}static _$Ei(){if(this.hasOwnProperty(T(`elementProperties`)))return;let e=ne(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(T(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T(`properties`))){let e=this.properties,t=[...S(e),...C(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(b(e))}else e!==void 0&&t.push(b(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return y(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?E:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?E:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};D.elementStyles=[],D.shadowRootOptions={mode:`open`},D[T(`elementProperties`)]=new Map,D[T(`finalized`)]=new Map,w?.({ReactiveElement:D}),(re.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ce=globalThis,le=ce.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,fe=`lit$${Math.random().toFixed(9).slice(2)}$`,pe=`?`+fe,me=`<${pe}>`,he=document,ge=()=>he.createComment(``),_e=e=>e===null||typeof e!=`object`&&typeof e!=`function`,ve=Array.isArray,ye=e=>ve(e)||typeof e?.[Symbol.iterator]==`function`,be=`[ 	
\f\r]`,xe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,Ce=/>/g,O=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),we=/'/g,Te=/"/g,Ee=/^(?:script|style|textarea|title)$/i,De=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Oe=Symbol.for(`lit-noChange`),k=Symbol.for(`lit-nothing`),ke=new WeakMap,Ae=he.createTreeWalker(he,129);function je(e,t){if(!ve(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}const Me=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=xe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===xe?c[1]===`!--`?o=Se:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=O):(Ee.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=O):o=Ce:o===O?c[0]===`>`?(o=i??xe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?O:c[3]===`"`?Te:we):o===Te||o===we?o=O:o===Se||o===Ce?o=xe:(o=O,i=void 0);let d=o===O&&e[t+1].startsWith(`/>`)?` `:``;a+=o===xe?n+me:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+fe+d):n+fe+(l===-2?t:d)}return[je(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ne=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Me(t,n);if(this.el=e.createElement(l,r),Ae.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ae.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(fe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Re:r[1]===`?`?ze:r[1]===`@`?Be:Le}),i.removeAttribute(e)}else e.startsWith(fe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ee.test(i.tagName)){let e=i.textContent.split(fe),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ge()),Ae.nextNode(),c.push({type:2,index:++a});i.append(e[t],ge())}}}else if(i.nodeType===8)if(i.data===pe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(fe,e+1))!==-1;)c.push({type:7,index:a}),e+=fe.length-1}a++}}static createElement(e,t){let n=he.createElement(`template`);return n.innerHTML=e,n}};function Pe(e,t,n=e,r){if(t===Oe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=_e(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Pe(e,i._$AS(e,t.values),i,r)),t}var Fe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??he).importNode(t,!0);Ae.currentNode=r;let i=Ae.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ie(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ve(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ae.nextNode(),a++)}return Ae.currentNode=he,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ie=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pe(this,e,t),_e(e)?e===k||e==null||e===``?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Oe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&_e(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ne.createElement(je(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Fe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new Ne(e)),t}k(t){ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ge()),this.O(ge()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Pe(this,e,t,0),a=!_e(e)||e!==this._$AH&&e!==Oe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Pe(this,r[n+o],t,o),s===Oe&&(s=this._$AH[o]),a||=!_e(s)||s!==this._$AH[o],s===k?e=k:e!==k&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Re=class extends Le{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},ze=class extends Le{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Be=class extends Le{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Pe(this,e,t,0)??k)===Oe)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ve=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Pe(this,e)}};const A={M:de,P:fe,A:pe,C:1,L:Me,R:Fe,D:ye,V:Pe,I:Ie,H:Le,N:ze,U:Be,B:Re,F:Ve},He=ce.litHtmlPolyfillSupport;He?.(Ne,Ie),(ce.litHtmlVersions??=[]).push(`3.3.1`);const Ue=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ie(t.insertBefore(ge(),e),e,void 0,n??{})}return i._$AI(e),i},We=globalThis;var Ge=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Oe}};Ge._$litElement$=!0,Ge.finalized=!0,We.litElementHydrateSupport?.({LitElement:Ge});const Ke=We.litElementPolyfillSupport;Ke?.({LitElement:Ge}),(We.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const qe=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},Je={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:oe},Ye=(e=Je,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function j(e){return(t,n)=>typeof n==`object`?Ye(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Xe(e){return j({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ze=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Qe(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Ze(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Ze(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $e=v`
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
`,et=/;\s+$/;function tt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function nt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(et)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var rt,it=class extends Ge{constructor(){super(),u(this,rt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[$e,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,rt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,rt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=nt({property:tt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=nt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};rt=new WeakMap,s([j()],it.prototype,`dir`,2),s([j()],it.prototype,`lang`,2),s([j({type:Boolean,reflect:!0,attribute:`did-ssr`})],it.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var at=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),ot=class extends it{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[at()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};ot.formAssociated=!0,s([j({reflect:!0})],ot.prototype,`name`,2),s([j({type:Boolean})],ot.prototype,`disabled`,2),s([j({state:!0,attribute:!1})],ot.prototype,`valueHasChanged`,2),s([j({state:!0,attribute:!1})],ot.prototype,`hasInteracted`,2),s([j({attribute:`custom-error`,reflect:!0})],ot.prototype,`customError`,2),s([j({attribute:!1,state:!0,type:Object})],ot.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var st={small:`s`,medium:`m`,large:`l`},ct=new Set;function lt(e,t){t in st&&!ct.has(`${e}:${t}`)&&(ct.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${st[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ut=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},dt=v`
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
`,ft=v`
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
`,pt=v`
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
function mt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const ht=new Set,gt=new Map;let _t,vt=`ltr`,yt=`en`;const bt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(bt){let e=new MutationObserver(St);vt=document.documentElement.dir||`ltr`,yt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function xt(...e){e.map(e=>{let t=e.$code.toLowerCase();gt.has(t)?gt.set(t,Object.assign(Object.assign({},gt.get(t)),e)):gt.set(t,e),_t||=e}),St()}function St(){bt&&(vt=document.documentElement.dir||`ltr`,yt=document.documentElement.lang||navigator.language),[...ht.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Ct=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ht.add(this.host)}hostDisconnected(){ht.delete(this.host)}dir(){return`${this.host.dir||vt}`.toLowerCase()}lang(){let e=`${this.host.lang||yt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return _t?_t.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=gt.get(`${n}-${r}`),a=gt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&_t&&_t[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(_t&&_t[e])i=_t[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},wt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};xt(wt);var Tt=wt,Et=class extends Ct{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};xt(Tt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Dt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ot=e=>(...t)=>({_$litDirective$:e,values:t});var kt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const At=Ot(class extends kt{constructor(e){if(super(e),e.type!==Dt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Oe}}),jt=e=>e??k,Mt=Symbol.for(``),Nt=e=>{if(e?.r===Mt)return e?._$litStatic$},Pt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Mt}),Ft=new Map,It=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Nt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Ft.get(e))===void 0&&(o.raw=o,Ft.set(e,t=o)),n=s}return e(t,...n)})(De);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var M=class extends ot{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new ut(this,`[default]`,`start`,`end`),this.localize=new Et(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){lt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Pt`a`:Pt`button`;return It`
      <${t}
        part="base button"
        class=${At({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${jt(e?void 0:this.disabled)}
        type=${jt(e?void 0:this.type)}
        title=${this.title}
        name=${jt(e?void 0:this.name)}
        value=${jt(e?void 0:this.value)}
        href=${jt(e?this.href:void 0)}
        target=${jt(e?this.target:void 0)}
        download=${jt(e?this.download:void 0)}
        rel=${jt(e&&this.rel?this.rel:void 0)}
        role=${jt(e?void 0:`button`)}
        aria-disabled=${jt(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?It`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?It`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};M.shadowRootOptions={...ot.shadowRootOptions,delegatesFocus:!0},M.css=[ft,pt,dt],s([Qe(`.button`)],M.prototype,`button`,2),s([Qe(`slot:not([name])`)],M.prototype,`labelSlot`,2),s([Xe()],M.prototype,`invalid`,2),s([Xe()],M.prototype,`isIconButton`,2),s([j()],M.prototype,`title`,2),s([j({reflect:!0})],M.prototype,`variant`,2),s([j({reflect:!0})],M.prototype,`appearance`,2),s([j({reflect:!0})],M.prototype,`size`,2),s([mt(`size`)],M.prototype,`handleSizeChange`,1),s([j({attribute:`with-caret`,type:Boolean,reflect:!0})],M.prototype,`withCaret`,2),s([j({attribute:`with-start`,type:Boolean})],M.prototype,`withStart`,2),s([j({attribute:`with-end`,type:Boolean})],M.prototype,`withEnd`,2),s([j({type:Boolean})],M.prototype,`disabled`,2),s([j({type:Boolean,reflect:!0})],M.prototype,`loading`,2),s([j({type:Boolean,reflect:!0})],M.prototype,`pill`,2),s([j()],M.prototype,`type`,2),s([j({reflect:!0})],M.prototype,`name`,2),s([j({reflect:!0})],M.prototype,`value`,2),s([j({reflect:!0})],M.prototype,`href`,2),s([j()],M.prototype,`target`,2),s([j()],M.prototype,`rel`,2),s([j()],M.prototype,`download`,2),s([j({attribute:`formaction`})],M.prototype,`formAction`,2),s([j({attribute:`formenctype`})],M.prototype,`formEnctype`,2),s([j({attribute:`formmethod`})],M.prototype,`formMethod`,2),s([j({attribute:`formnovalidate`,type:Boolean})],M.prototype,`formNoValidate`,2),s([j({attribute:`formtarget`})],M.prototype,`formTarget`,2),s([mt(`disabled`,{waitUntilFirstUpdate:!0})],M.prototype,`handleDisabledChange`,1),s([mt(`href`)],M.prototype,`handleHrefChange`,1),s([mt(`loading`,{waitUntilFirstUpdate:!0})],M.prototype,`handleLoadingChange`,1),M=s([qe(`wa-button`)],M),M.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Lt=v`
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
`,Rt=class extends it{constructor(){super(...arguments),this.localize=new Et(this)}render(){return De`
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
    `}};Rt.css=Lt,Rt=s([qe(`wa-spinner`)],Rt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var zt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Bt=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},Vt=v`
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
`,Ht=``,Ut=``;function Wt(){return Ht.replace(/\/$/,``)}function Gt(e){Ut=e}function Kt(){if(!Ut){let e=document.querySelector(`[data-fa-kit-code]`);e&&Gt(e.getAttribute(`data-fa-kit-code`)||``)}return Ut}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var qt=`7.3.0`;function Jt(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function Yt(e,t,n){let r=Jt(e,t,n),i=Wt();if(i)return`${i}/${r}/${e}.svg`;let a=Kt();return a.length>0?`https://ka-p.fontawesome.com/releases/v${qt}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${qt}/svgs/${r}/${e}.svg`}var Xt={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>Yt(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Zt(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var Qt={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},$t={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=Qt[n][e]??Qt.regular[e]??Qt.regular[`circle-question`];return r?Zt(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},en=`classic`,tn=[Xt,$t],nn=new Set;function rn(e){nn.add(e)}function an(e){nn.delete(e)}function on(e){return tn.find(t=>t.name===e)}function sn(){return en}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:cn}=A,ln=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,un=e=>e.strings===void 0,dn={},fn=(e,t=dn)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pn=Symbol(),mn=Symbol(),hn,gn=new Map,_n=class extends it{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=De`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?pn:mn}catch{return mn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return pn;hn||=new DOMParser;let r=hn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):pn}catch{return pn}}}connectedCallback(){super.connectedCallback(),rn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),an(this)}async getIconSource(){let e=on(this.library),t=this.family||sn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?on(this.library):void 0;if(!e){this.svg=null;return}let r=gn.get(e);r||(r=this.resolveIcon(e,n),gn.set(e,r));let i=await r;if(i===mn&&gn.delete(e),e===(await this.getIconSource()).url){if(ln(i)){this.svg=i;return}switch(i){case mn:case pn:this.svg=null,this.dispatchEvent(new zt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new Bt)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=on(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:De`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};_n.css=Vt,s([Xe()],_n.prototype,`svg`,2),s([j({reflect:!0})],_n.prototype,`name`,2),s([j({reflect:!0})],_n.prototype,`family`,2),s([j({reflect:!0})],_n.prototype,`variant`,2),s([j({reflect:!0})],_n.prototype,`canvas`,2),s([j({attribute:`auto-width`,type:Boolean,reflect:!0})],_n.prototype,`autoWidth`,2),s([j({attribute:`swap-opacity`,type:Boolean,reflect:!0})],_n.prototype,`swapOpacity`,2),s([j()],_n.prototype,`src`,2),s([j()],_n.prototype,`label`,2),s([j({reflect:!0})],_n.prototype,`library`,2),s([j({type:Number,reflect:!0})],_n.prototype,`rotate`,2),s([j({type:String,reflect:!0})],_n.prototype,`flip`,2),s([j({type:String,reflect:!0})],_n.prototype,`animation`,2),s([mt(`label`)],_n.prototype,`handleLabelChange`,1),s([mt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],_n.prototype,`setIcon`,1),_n=s([qe(`wa-icon`)],_n);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var vn=t({default:()=>M}),yn=class extends Event{constructor(e){super(`wa-copy`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},bn=null,xn=null,Sn=7e3;function Cn(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function wn(e){return e===`assertive`?(xn??=document.body.appendChild(Cn(`assertive`)),xn):(bn??=document.body.appendChild(Cn(`polite`)),bn)}function Tn(e,t=`polite`){if(!e)return;let n=wn(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),Sn)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var En=v`
  :host {
    display: inline-block;
    color: var(--wa-color-neutral-on-quiet);
  }

  .copy-button__trigger {
    position: relative;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-radius: var(--wa-form-control-border-radius);
    color: inherit;
    font-size: inherit;
    height: calc(var(--wa-form-control-height) * 0.8);
    aspect-ratio: 1;
    cursor: pointer;
    transition-property: background-color, color;
    transition-duration: var(--wa-transition-fast);
    transition-timing-function: var(--wa-transition-easing);
  }

  @media (hover: hover) {
    .button:hover:not([disabled]) {
      background-color: var(--wa-color-neutral-fill-quiet);
      color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
    }
  }

  .button:focus-visible:not([disabled]) {
    background-color: var(--wa-color-neutral-fill-quiet);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  /* Icon swap animation */
  .show {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .hide {
    animation: copy-button-icon-show var(--wa-transition-fast) var(--wa-transition-easing) reverse;
  }

  @keyframes copy-button-icon-show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .show,
    .hide {
      animation-duration: 1ms;
    }
  }
`,Dn=v`
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
`;let On=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function kn(e=``){return`${e}${On()}`}function An(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=`wa-internal-tooltip`,Mn=`__waCopyButtonAssignedId`,Nn=class extends it{constructor(){super(...arguments),this.localize=new Et(this),this.isCopying=!1,this.status=`rest`,this.hasCustomTrigger=!1,this.customTriggerEl=null,this.lightTooltip=null,this.feedbackTimeout=null,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.tooltip=`full`,this.handleDefaultSlotChange=()=>{let e=(this.defaultSlot?.assignedElements({flatten:!0})??[]).find(e=>e instanceof HTMLElement)??null;e!==this.customTriggerEl&&(this.releaseAssignedId(this.customTriggerEl),this.customTriggerEl=e),this.hasCustomTrigger=e!==null,e&&this.tooltip!==`none`?(e.id||(e.id=kn(`wa-copy-button-trigger-`),e[Mn]=!0),this.ensureLightTooltip()):this.removeLightTooltip()}}get activeTooltip(){return this.lightTooltip??this.shadowTooltip??null}get currentLabel(){return this.status===`success`?this.successLabel||this.localize.term(`copied`):this.status===`error`?this.errorLabel||this.localize.term(`error`):this.copyLabel||this.localize.term(`copy`)}firstUpdated(e){super.firstUpdated(e),this.didSSR?this.updateComplete.then(()=>{this.handleDefaultSlotChange()}):this.handleDefaultSlotChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeLightTooltip()}handleStatusChange(){this.customStates.set(`success`,this.status===`success`),this.customStates.set(`error`,this.status===`error`),this.syncTooltipText(),(this.status===`success`||this.status===`error`)&&Tn(this.currentLabel,`polite`)}handleLabelChange(){this.syncTooltipText()}handleTooltipOptionsChange(){this.lightTooltip&&(this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled)}handleTooltipModeChange(e){this.tooltip===`none`?this.removeLightTooltip():e===`none`?this.handleDefaultSlotChange():this.lightTooltip&&this.lightTooltip.setAttribute(`trigger`,this.tooltip===`copy`?`manual`:`hover focus`)}releaseAssignedId(e){e&&e[Mn]&&(e.removeAttribute(`id`),delete e[Mn])}ensureLightTooltip(){if(!this.customTriggerEl)return;let e=this.tooltip===`copy`?`manual`:`hover focus`;if(this.lightTooltip)this.lightTooltip.setAttribute(`for`,this.customTriggerEl.id),this.lightTooltip.setAttribute(`trigger`,e),this.lightTooltip.placement=this.tooltipPlacement,this.lightTooltip.disabled=this.disabled,this.lightTooltip.textContent=this.currentLabel;else{let t=document.createElement(`wa-tooltip`);t.setAttribute(`slot`,jn),t.setAttribute(`part`,`feedback`),t.setAttribute(`trigger`,e),t.dataset.copyButtonTooltip=``,t.setAttribute(`for`,this.customTriggerEl.id),t.placement=this.tooltipPlacement,t.disabled=this.disabled,t.textContent=this.currentLabel,this.appendChild(t),this.lightTooltip=t}}removeLightTooltip(){this.lightTooltip&&=(this.releaseAssignedId(this.customTriggerEl),this.lightTooltip.remove(),null)}syncTooltipText(){this.lightTooltip&&(this.lightTooltip.textContent=this.currentLabel)}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.dispatchEvent(new zt))}if(!e)this.showStatus(`error`),this.dispatchEvent(new zt);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.dispatchEvent(new yn({value:e}))}catch{this.showStatus(`error`),this.dispatchEvent(new zt)}}async showStatus(e){if(this.status=e,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await An(this.copyIcon,`hide`),this.copyIcon.hidden=!0,t.hidden=!1,await An(t,`show`)}await this.updateComplete;let t=this.tooltip===`none`?null:this.activeTooltip,n=null;t&&(t.show(),n=new Promise(e=>{t.addEventListener(`wa-after-hide`,()=>{this.feedbackTimeout!==null&&(clearTimeout(this.feedbackTimeout),this.feedbackTimeout=null),e()},{once:!0})}),this.feedbackTimeout=window.setTimeout(async()=>{this.feedbackTimeout=null,await t.hide()},this.feedbackDuration)),setTimeout(async()=>{if(n&&await n,this.copyIcon){let t=e===`success`?this.successIcon:this.errorIcon;await An(t,`hide`),t.hidden=!0,this.copyIcon.hidden=!1,await An(this.copyIcon,`show`)}this.status=`rest`,this.isCopying=!1},this.feedbackDuration)}render(){let e=!this.hasCustomTrigger&&this.tooltip!==`none`,t=this.tooltip===`copy`?`manual`:`hover focus`;return this.didSSR&&!this.hasUpdated&&(e=!1),De`
      <div class="copy-button__trigger" @click=${this.handleCopy}>
        <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        <button
          class="button"
          part="button"
          type="button"
          id="copy-button"
          aria-label=${this.currentLabel}
          ?disabled=${this.disabled}
          ?hidden=${this.hasCustomTrigger}
        >
          <slot part="copy-icon" name="copy-icon">
            <wa-icon library="system" name="copy" variant="regular"></wa-icon>
          </slot>
          <slot part="success-icon" name="success-icon" variant="solid" hidden>
            <wa-icon library="system" name="check"></wa-icon>
          </slot>
          <slot part="error-icon" name="error-icon" variant="solid" hidden>
            <wa-icon library="system" name="xmark"></wa-icon>
          </slot>
        </button>

        ${e?De`
              <wa-tooltip
                part="feedback"
                for="copy-button"
                placement=${this.tooltipPlacement}
                trigger=${t}
                class=${At({"copy-button-tooltip":!0,"copy-button-tooltip-success":this.status===`success`,"copy-button-tooltip-error":this.status===`error`})}
                ?disabled=${this.disabled}
                >${this.currentLabel}</wa-tooltip
              >
            `:``}
        <slot name="${jn}"></slot>
      </div>
    `}};Nn.css=[$e,Dn,En],s([Qe(`slot[name="copy-icon"]`)],Nn.prototype,`copyIcon`,2),s([Qe(`slot[name="success-icon"]`)],Nn.prototype,`successIcon`,2),s([Qe(`slot[name="error-icon"]`)],Nn.prototype,`errorIcon`,2),s([Qe(`slot:not([name])`)],Nn.prototype,`defaultSlot`,2),s([Qe(`wa-tooltip[part="feedback"]`)],Nn.prototype,`shadowTooltip`,2),s([Xe()],Nn.prototype,`isCopying`,2),s([Xe()],Nn.prototype,`status`,2),s([Xe()],Nn.prototype,`hasCustomTrigger`,2),s([j()],Nn.prototype,`value`,2),s([j()],Nn.prototype,`from`,2),s([j({type:Boolean,reflect:!0})],Nn.prototype,`disabled`,2),s([j({attribute:`copy-label`})],Nn.prototype,`copyLabel`,2),s([j({attribute:`success-label`})],Nn.prototype,`successLabel`,2),s([j({attribute:`error-label`})],Nn.prototype,`errorLabel`,2),s([j({attribute:`feedback-duration`,type:Number})],Nn.prototype,`feedbackDuration`,2),s([j({attribute:`tooltip-placement`,reflect:!0})],Nn.prototype,`tooltipPlacement`,2),s([j({reflect:!0})],Nn.prototype,`tooltip`,2),s([mt(`status`)],Nn.prototype,`handleStatusChange`,1),s([mt([`copyLabel`,`successLabel`,`errorLabel`])],Nn.prototype,`handleLabelChange`,1),s([mt([`tooltipPlacement`,`disabled`],{waitUntilFirstUpdate:!0})],Nn.prototype,`handleTooltipOptionsChange`,1),s([mt(`tooltip`,{waitUntilFirstUpdate:!0})],Nn.prototype,`handleTooltipModeChange`,1),Nn=s([qe(`wa-copy-button`)],Nn);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pn=v`
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
`,Fn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},In=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Ln=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Rn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},zn=class extends Event{constructor(){super(`wa-reposition`,{bubbles:!0,cancelable:!1,composed:!0})}},Bn=v`
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
`;const Vn=Math.min,Hn=Math.max,Un=Math.round,Wn=Math.floor,Gn=e=>({x:e,y:e}),Kn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},qn={start:`end`,end:`start`};function Jn(e,t,n){return Hn(e,Vn(t,n))}function Yn(e,t){return typeof e==`function`?e(t):e}function Xn(e){return e.split(`-`)[0]}function Zn(e){return e.split(`-`)[1]}function Qn(e){return e===`x`?`y`:`x`}function $n(e){return e===`y`?`height`:`width`}const er=new Set([`top`,`bottom`]);function tr(e){return er.has(Xn(e))?`y`:`x`}function nr(e){return Qn(tr(e))}function rr(e,t,n){n===void 0&&(n=!1);let r=Zn(e),i=nr(e),a=$n(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=fr(o)),[o,fr(o)]}function ir(e){let t=fr(e);return[ar(e),t,ar(t)]}function ar(e){return e.replace(/start|end/g,e=>qn[e])}const or=[`left`,`right`],sr=[`right`,`left`],cr=[`top`,`bottom`],lr=[`bottom`,`top`];function ur(e,t,n){switch(e){case`top`:case`bottom`:return n?t?sr:or:t?or:sr;case`left`:case`right`:return t?cr:lr;default:return[]}}function dr(e,t,n,r){let i=Zn(e),a=ur(Xn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(ar)))),a}function fr(e){return e.replace(/left|right|bottom|top/g,e=>Kn[e])}function pr(e){return{top:0,right:0,bottom:0,left:0,...e}}function mr(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:pr(e)}function hr(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function gr(e,t,n){let{reference:r,floating:i}=e,a=tr(t),o=nr(t),s=$n(o),c=Xn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Zn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}const _r=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=gr(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=gr(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}};async function vr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Yn(t,e),p=mr(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=hr(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=hr(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}const yr=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Yn(e,t)||{};if(l==null)return{};let d=mr(u),f={x:n,y:r},p=nr(i),m=$n(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,b=a.reference[m]+a.reference[p]-f[p]-a.floating[m],ee=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),x=te?te[y]:0;(!x||!await(o.isElement==null?void 0:o.isElement(te)))&&(x=s.floating[y]||a.floating[m]);let S=b/2-ee/2,C=x/2-h[m]/2-1,ne=Vn(d[_],C),re=Vn(d[v],C),ie=ne,ae=x-h[m]-re,w=x/2-h[m]/2+S,T=Jn(ie,w,ae),E=!c.arrow&&Zn(i)!=null&&w!==T&&a.reference[m]/2-(w<ie?ne:re)-h[m]/2<0,oe=E?w<ie?w-ie:w-ae:0;return{[p]:f[p]+oe,data:{[p]:T,centerOffset:w-T-oe,...E&&{alignmentOffset:oe}},reset:E}}}),br=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Yn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Xn(r),_=tr(o),v=Xn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[fr(o)]:ir(o)),ee=p!==`none`;!d&&ee&&b.push(...dr(o,m,p,y));let te=[o,...b],x=await vr(t,h),S=[],C=i.flip?.overflows||[];if(l&&S.push(x[g]),u){let e=rr(r,a,y);S.push(x[e[0]],x[e[1]])}if(C=[...C,{placement:r,overflows:S}],!S.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==tr(t))||C.every(e=>tr(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(ee){let t=tr(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},xr=new Set([`left`,`top`]);async function Sr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Xn(n),s=Zn(n),c=tr(n)===`y`,l=xr.has(o)?-1:1,u=a&&c?-1:1,d=Yn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}const Cr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await Sr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},wr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=Yn(e,t),l={x:n,y:r},u=await vr(t,c),d=tr(Xn(i)),f=Qn(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=Jn(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=Jn(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}},Tr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Yn(e,t),u=await vr(t,l),d=Xn(i),f=Zn(i),p=tr(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,b=Vn(h-u[g],v),ee=Vn(m-u[_],y),te=!t.middlewareData.shift,x=b,S=ee;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(x=v),te&&!f){let e=Hn(u.left,0),t=Hn(u.right,0),n=Hn(u.top,0),r=Hn(u.bottom,0);p?S=m-2*(e!==0||t!==0?e+t:Hn(u.left,u.right)):x=h-2*(n!==0||r!==0?n+r:Hn(u.top,u.bottom))}await c({...t,availableWidth:S,availableHeight:x});let C=await o.getDimensions(s.floating);return m!==C.width||h!==C.height?{reset:{rects:!0}}:{}}}};function Er(){return typeof window<`u`}function Dr(e){return Ar(e)?(e.nodeName||``).toLowerCase():`#document`}function Or(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kr(e){return((Ar(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Ar(e){return Er()?e instanceof Node||e instanceof Or(e).Node:!1}function jr(e){return Er()?e instanceof Element||e instanceof Or(e).Element:!1}function Mr(e){return Er()?e instanceof HTMLElement||e instanceof Or(e).HTMLElement:!1}function Nr(e){return!Er()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Or(e).ShadowRoot}const Pr=new Set([`inline`,`contents`]);function Fr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Jr(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Pr.has(i)}const Ir=new Set([`table`,`td`,`th`]);function Lr(e){return Ir.has(Dr(e))}const Rr=[`:popover-open`,`:modal`];function zr(e){return Rr.some(t=>{try{return e.matches(t)}catch{return!1}})}const Br=[`transform`,`translate`,`scale`,`rotate`,`perspective`],Vr=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],Hr=[`paint`,`layout`,`strict`,`content`];function Ur(e){let t=Gr(),n=jr(e)?Jr(e):e;return Br.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||Vr.some(e=>(n.willChange||``).includes(e))||Hr.some(e=>(n.contain||``).includes(e))}function Wr(e){let t=Xr(e);for(;Mr(t)&&!qr(t);){if(Ur(t))return t;if(zr(t))return null;t=Xr(t)}return null}function Gr(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}const Kr=new Set([`html`,`body`,`#document`]);function qr(e){return Kr.has(Dr(e))}function Jr(e){return Or(e).getComputedStyle(e)}function Yr(e){return jr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Xr(e){if(Dr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Nr(e)&&e.host||kr(e);return Nr(t)?t.host:t}function Zr(e){let t=Xr(e);return qr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Mr(t)&&Fr(t)?t:Zr(t)}function Qr(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Zr(e),i=r===e.ownerDocument?.body,a=Or(r);if(i){let e=$r(a);return t.concat(a,a.visualViewport||[],Fr(r)?r:[],e&&n?Qr(e):[])}return t.concat(r,Qr(r,[],n))}function $r(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function ei(e){let t=Jr(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Mr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Un(n)!==a||Un(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ti(e){return jr(e)?e:e.contextElement}function ni(e){let t=ti(e);if(!Mr(t))return Gn(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=ei(t),o=(a?Un(n.width):n.width)/r,s=(a?Un(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}const ri=Gn(0);function ii(e){let t=Or(e);return!Gr()||!t.visualViewport?ri:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ai(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Or(e)?!1:t}function oi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=ti(e),o=Gn(1);t&&(r?jr(r)&&(o=ni(r)):o=ni(e));let s=ai(a,n,r)?ii(a):Gn(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Or(a),t=r&&jr(r)?Or(r):r,n=e,i=$r(n);for(;i&&r&&t!==n;){let e=ni(i),t=i.getBoundingClientRect(),r=Jr(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Or(i),i=$r(n)}}return hr({width:u,height:d,x:c,y:l})}function si(e,t){let n=Yr(e).scrollLeft;return t?t.left+n:oi(kr(e)).left+n}function ci(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-si(e,n),y:n.top+t.scrollTop}}function li(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=kr(r),s=t?zr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Gn(1),u=Gn(0),d=Mr(r);if((d||!d&&!a)&&((Dr(r)!==`body`||Fr(o))&&(c=Yr(r)),Mr(r))){let e=oi(r);l=ni(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?ci(o,c):Gn(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function ui(e){return Array.from(e.getClientRects())}function di(e){let t=kr(e),n=Yr(e),r=e.ownerDocument.body,i=Hn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Hn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+si(e),s=-n.scrollTop;return Jr(r).direction===`rtl`&&(o+=Hn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function fi(e,t){let n=Or(e),r=kr(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Gr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=si(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=25&&(a-=o)}else l<=25&&(a+=l);return{width:a,height:o,x:s,y:c}}const pi=new Set([`absolute`,`fixed`]);function mi(e,t){let n=oi(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Mr(e)?ni(e):Gn(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function hi(e,t,n){let r;if(t===`viewport`)r=fi(e,n);else if(t===`document`)r=di(kr(e));else if(jr(t))r=mi(t,n);else{let n=ii(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return hr(r)}function gi(e,t){let n=Xr(e);return n===t||!jr(n)||qr(n)?!1:Jr(n).position===`fixed`||gi(n,t)}function _i(e,t){let n=t.get(e);if(n)return n;let r=Qr(e,[],!1).filter(e=>jr(e)&&Dr(e)!==`body`),i=null,a=Jr(e).position===`fixed`,o=a?Xr(e):e;for(;jr(o)&&!qr(o);){let t=Jr(o),n=Ur(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&pi.has(i.position)||Fr(o)&&!n&&gi(e,o))?r=r.filter(e=>e!==o):i=t,o=Xr(o)}return t.set(e,r),r}function vi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?zr(t)?[]:_i(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=hi(t,n,i);return e.top=Hn(r.top,e.top),e.right=Vn(r.right,e.right),e.bottom=Vn(r.bottom,e.bottom),e.left=Hn(r.left,e.left),e},hi(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function yi(e){let{width:t,height:n}=ei(e);return{width:t,height:n}}function bi(e,t,n){let r=Mr(t),i=kr(t),a=n===`fixed`,o=oi(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Gn(0);function l(){c.x=si(i)}if(r||!r&&!a)if((Dr(t)!==`body`||Fr(i))&&(s=Yr(t)),r){let e=oi(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?ci(i,s):Gn(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function xi(e){return Jr(e).position===`static`}function Si(e,t){if(!Mr(e)||Jr(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return kr(e)===n&&(n=n.ownerDocument.body),n}function Ci(e,t){let n=Or(e);if(zr(e))return n;if(!Mr(e)){let t=Xr(e);for(;t&&!qr(t);){if(jr(t)&&!xi(t))return t;t=Xr(t)}return n}let r=Si(e,t);for(;r&&Lr(r)&&xi(r);)r=Si(r,t);return r&&qr(r)&&xi(r)&&!Ur(r)?n:r||Wr(e)||n}const wi=async function(e){let t=this.getOffsetParent||Ci,n=this.getDimensions,r=await n(e.floating);return{reference:bi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Ti(e){return Jr(e).direction===`rtl`}const Ei={convertOffsetParentRelativeRectToViewportRelativeRect:li,getDocumentElement:kr,getClippingRect:vi,getOffsetParent:Ci,getElementRects:wi,getClientRects:ui,getDimensions:yi,getScale:ni,isElement:jr,isRTL:Ti};function Di(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Oi(e,t){let n=null,r,i=kr(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Wn(d),h=Wn(i.clientWidth-(u+f)),g=Wn(i.clientHeight-(d+p)),_=Wn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Hn(0,Vn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Di(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function ki(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=ti(e),u=i||a?[...l?Qr(l):[],...Qr(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Oi(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?oi(e):null;c&&g();function g(){let t=oi(e);h&&!Di(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}const Ai=Cr,ji=wr,Mi=br,Ni=Tr,Pi=yr,Fi=(e,t,n)=>{let r=new Map,i={platform:Ei,...n},a={...i.platform,_c:r};return _r(e,t,{...i,platform:a})};function Ii(e){return Ri(e)}function Li(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ri(e){for(let t=e;t;t=Li(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Li(e);t;t=Li(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Ur(e)||t.tagName===`BODY`))return t}return null}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function zi(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e instanceof Element:!0)}var Bi=!!globalThis?.HTMLElement?.prototype.hasOwnProperty(`popover`),N=class extends it{constructor(){super(...arguments),this.localize=new Et(this),this.SUPPORTS_POPOVER=!1,this.active=!1,this.placement=`top`,this.boundary=`viewport`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl&&this.popup){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.SUPPORTS_POPOVER=Bi,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||zi(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){!this.anchorEl||!this.active||!this.isConnected||(this.popup?.showPopover?.(),this.cleanup=ki(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.popup?.hidePopover?.(),this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl||!this.popup)return;let e=[Ai({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(Ni({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``);let t;this.SUPPORTS_POPOVER&&!zi(this.anchor)&&this.boundary===`scroll`&&(t=Qr(this.anchorEl).filter(e=>e instanceof Element)),this.flip&&e.push(Mi({boundary:this.flipBoundary||t,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(ji({boundary:this.shiftBoundary||t,padding:this.shiftPadding})),this.autoSize?e.push(Ni({boundary:this.autoSizeBoundary||t,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Pi({element:this.arrowEl,padding:this.arrowPadding}));let n=this.SUPPORTS_POPOVER?e=>Ei.getOffsetParent(e,Ii):Ei.getOffsetParent;Fi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.SUPPORTS_POPOVER?`absolute`:`fixed`,platform:{...Ei,getOffsetParent:n}}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-base-offset) - var(--arrow-size-diagonal))`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new zn)}render(){return De`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${At({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${At({popup:!0,"popup-active":this.active,"popup-fixed":!this.SUPPORTS_POPOVER,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?De`<div part="arrow" class="arrow" role="presentation"></div>`:``}
      </div>
    `}};N.css=Bn,s([Qe(`.popup`)],N.prototype,`popup`,2),s([Qe(`.arrow`)],N.prototype,`arrowEl`,2),s([j({attribute:!1,type:Boolean})],N.prototype,`SUPPORTS_POPOVER`,2),s([j()],N.prototype,`anchor`,2),s([j({type:Boolean,reflect:!0})],N.prototype,`active`,2),s([j({reflect:!0})],N.prototype,`placement`,2),s([j()],N.prototype,`boundary`,2),s([j({type:Number})],N.prototype,`distance`,2),s([j({type:Number})],N.prototype,`skidding`,2),s([j({type:Boolean})],N.prototype,`arrow`,2),s([j({attribute:`arrow-placement`})],N.prototype,`arrowPlacement`,2),s([j({attribute:`arrow-padding`,type:Number})],N.prototype,`arrowPadding`,2),s([j({type:Boolean})],N.prototype,`flip`,2),s([j({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],N.prototype,`flipFallbackPlacements`,2),s([j({attribute:`flip-fallback-strategy`})],N.prototype,`flipFallbackStrategy`,2),s([j({type:Object})],N.prototype,`flipBoundary`,2),s([j({attribute:`flip-padding`,type:Number})],N.prototype,`flipPadding`,2),s([j({type:Boolean})],N.prototype,`shift`,2),s([j({type:Object})],N.prototype,`shiftBoundary`,2),s([j({attribute:`shift-padding`,type:Number})],N.prototype,`shiftPadding`,2),s([j({attribute:`auto-size`})],N.prototype,`autoSize`,2),s([j()],N.prototype,`sync`,2),s([j({type:Object})],N.prototype,`autoSizeBoundary`,2),s([j({attribute:`auto-size-padding`,type:Number})],N.prototype,`autoSizePadding`,2),s([j({attribute:`hover-bridge`,type:Boolean})],N.prototype,`hoverBridge`,2),N=s([qe(`wa-popup`)],N);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Vi=[];function Hi(e){Ui(e),Vi.push(e)}function Ui(e){for(let t=Vi.length-1;t>=0;t--)if(Vi[t]===e){Vi.splice(t,1);break}}function Wi(e){return Vi.length>0&&Vi[Vi.length-1]===e}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Gi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Ki(e,t){for(;t;){if(t===e)return!0;t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}return!1}var qi=class extends it{constructor(){super(...arguments),this.dismissedByPress=!1,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.showDelay=150,this.hideDelay=0,this.trigger=`hover focus`,this.withoutArrow=!1,this.for=null,this.anchor=null,this.eventController=new AbortController,this.handleBlur=()=>{this.dismissedByPress=!1,this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{if(this.hasTrigger(`click`)){this.open?this.hide():this.show();return}this.hasTrigger(`manual`)||this.lightDismiss()},this.handleFocus=()=>{this.dismissedByPress||this.hasTrigger(`focus`)&&this.show()},this.handleMouseDown=()=>{this.hasTrigger(`click`)||this.hasTrigger(`manual`)||this.lightDismiss()},this.handleDocumentKeyDown=e=>{this.hasTrigger(`manual`)||e.key===`Escape`&&this.open&&Wi(this)&&(e.preventDefault(),e.stopPropagation(),this.hide())},this.handleDocumentClick=e=>{this.hasTrigger(`manual`)||this.anchor&&e.composedPath().includes(this.anchor)||this.hide()},this.handleMouseOver=()=>{this.dismissedByPress||this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),this.showDelay))},this.handleMouseOut=e=>{let t=e.relatedTarget,n=!!(t&&this.anchor&&Ki(this.anchor,t)),r=!!(t&&Ki(this,t));n||r||(this.dismissedByPress=!1,this.hasTrigger(`hover`)&&(clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>{this.hide()},this.hideDelay)))}}connectedCallback(){super.connectedCallback(),typeof document<`u`&&(this.eventController.signal.aborted&&(this.eventController=new AbortController),this.addEventListener(`mouseout`,this.handleMouseOut),this.dismissedByPress=!1,this.open&&(this.open=!1,this.updateComplete.then(()=>{this.open=!0})),this.id||=kn(`wa-tooltip-`),this.for&&this.anchor?(this.anchor=null,this.handleForChange()):this.for&&this.handleForChange())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Ui(this),this.eventController.abort(),this.anchor&&this.removeFromAriaLabelledBy(this.anchor,this.id)}firstUpdated(e){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition()),super.firstUpdated(e)}lightDismiss(){clearTimeout(this.hoverTimeout),this.dismissedByPress=!0,this.hide()}hasTrigger(e){return this.trigger.split(` `).includes(e)}addToAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean);n.includes(t)||(n.push(t),e.setAttribute(`aria-labelledby`,n.join(` `)))}removeFromAriaLabelledBy(e,t){let n=(e.getAttribute(`aria-labelledby`)||``).split(/\s+/).filter(Boolean).filter(e=>e!==t);n.length>0?e.setAttribute(`aria-labelledby`,n.join(` `)):e.removeAttribute(`aria-labelledby`)}async handleOpenChange(){if(this.open){if(this.disabled)return;let e=new Fn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.hasTrigger(`manual`)||(document.addEventListener(`keydown`,this.handleDocumentKeyDown,{signal:this.eventController.signal}),document.addEventListener(`click`,this.handleDocumentClick,{signal:this.eventController.signal}),Hi(this)),this.body.hidden=!1,this.popup.active=!0,await An(this.popup.popup,`show-with-scale`),this.popup.reposition(),this.dispatchEvent(new Rn)}else{let e=new In;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!0;return}document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`click`,this.handleDocumentClick),Ui(this),await An(this.popup.popup,`hide-with-scale`),this.popup.active=!1,this.body.hidden=!0,this.dispatchEvent(new Ln)}}handleForChange(){let e=this.getRootNode?.();if(!e)return;let t=this.for?e.getElementById?.(this.for):null,n=this.anchor;if(t===n)return;this.dismissedByPress=!1;let{signal:r}=this.eventController;t&&(this.addToAriaLabelledBy(t,this.id),t.addEventListener(`blur`,this.handleBlur,{capture:!0,signal:r}),t.addEventListener(`focus`,this.handleFocus,{capture:!0,signal:r}),t.addEventListener(`click`,this.handleClick,{signal:r}),t.addEventListener(`mousedown`,this.handleMouseDown,{signal:r}),t.addEventListener(`mouseover`,this.handleMouseOver,{signal:r}),t.addEventListener(`mouseout`,this.handleMouseOut,{signal:r})),n&&(this.removeFromAriaLabelledBy(n,this.id),n.removeEventListener(`blur`,this.handleBlur,{capture:!0}),n.removeEventListener(`focus`,this.handleFocus,{capture:!0}),n.removeEventListener(`click`,this.handleClick),n.removeEventListener(`mousedown`,this.handleMouseDown),n.removeEventListener(`mouseover`,this.handleMouseOver),n.removeEventListener(`mouseout`,this.handleMouseOut)),this.anchor=t}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Gi(this,`wa-after-show`)}async hide(){if(this.open)return this.open=!1,Gi(this,`wa-after-hide`)}render(){return De`
      <wa-popup
        part="base tooltip"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${At({tooltip:!0,"tooltip-open":this.open})}
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
    `}};qi.css=Pn,qi.dependencies={"wa-popup":N},s([Qe(`slot:not([name])`)],qi.prototype,`defaultSlot`,2),s([Qe(`.body`)],qi.prototype,`body`,2),s([Qe(`wa-popup`)],qi.prototype,`popup`,2),s([j()],qi.prototype,`placement`,2),s([j({type:Boolean,reflect:!0})],qi.prototype,`disabled`,2),s([j({type:Number})],qi.prototype,`distance`,2),s([j({type:Boolean,reflect:!0})],qi.prototype,`open`,2),s([j({type:Number})],qi.prototype,`skidding`,2),s([j({attribute:`show-delay`,type:Number})],qi.prototype,`showDelay`,2),s([j({attribute:`hide-delay`,type:Number})],qi.prototype,`hideDelay`,2),s([j()],qi.prototype,`trigger`,2),s([j({attribute:`without-arrow`,type:Boolean,reflect:!0})],qi.prototype,`withoutArrow`,2),s([j()],qi.prototype,`for`,2),s([Xe()],qi.prototype,`anchor`,2),s([mt(`open`,{waitUntilFirstUpdate:!0})],qi.prototype,`handleOpenChange`,1),s([mt(`for`)],qi.prototype,`handleForChange`,1),s([mt([`distance`,`placement`,`skidding`])],qi.prototype,`handleOptionsChange`,1),s([mt(`disabled`)],qi.prototype,`handleDisabledChange`,1),qi=s([qe(`wa-tooltip`)],qi);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ji=t({default:()=>Nn}),Yi=t({default:()=>_n}),Xi=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Zi(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&ta(t)})}var Qi=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),$i=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),ea=e=>{let t=e?.localName;if(!t||!Qi.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!$i.get(n)};function ta(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)ea(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var na=v`
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
`,ra=v`
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
`;
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const ia=Ot(class extends kt{constructor(e){if(super(e),e.type!==Dt.PROPERTY&&e.type!==Dt.ATTRIBUTE&&e.type!==Dt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!un(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Oe||t===k)return t;let n=e.element,r=e.name;if(e.type===Dt.PROPERTY){if(t===n[r])return Oe}else if(e.type===Dt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Oe}else if(e.type===Dt.ATTRIBUTE&&n.getAttribute(r)===t+``)return Oe;return fn(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var P=class extends ot{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new ut(this,`hint`,`label`),this.localize=new Et(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){lt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new Xi),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){Zi(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return De`
      <label
        part="form-control-label label"
        class=${At({label:!0,"has-label":n})}
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
          name=${jt(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${jt(this.placeholder)}
          minlength=${jt(this.minlength)}
          maxlength=${jt(this.maxlength)}
          min=${jt(this.min)}
          max=${jt(this.max)}
          step=${jt(this.step)}
          .value=${ia(this.value??``)}
          autocapitalize=${jt(this.autocapitalize)}
          autocomplete=${jt(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${jt(this.pattern)}
          enterkeyhint=${jt(this.enterkeyhint)}
          inputmode=${jt(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?De`
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
        ${this.passwordToggle&&!this.disabled?De`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?De`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:De`
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
        class=${At({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};P.css=[dt,ra,na],P.shadowRootOptions={...ot.shadowRootOptions,delegatesFocus:!0},s([Qe(`input`)],P.prototype,`input`,2),s([j()],P.prototype,`title`,2),s([j({reflect:!0})],P.prototype,`type`,2),s([Xe()],P.prototype,`value`,1),s([j({attribute:`value`,reflect:!0})],P.prototype,`defaultValue`,2),s([j({reflect:!0})],P.prototype,`size`,2),s([mt(`size`)],P.prototype,`handleSizeChange`,1),s([j({reflect:!0})],P.prototype,`appearance`,2),s([j({type:Boolean,reflect:!0})],P.prototype,`pill`,2),s([j()],P.prototype,`label`,2),s([j({attribute:`hint`})],P.prototype,`hint`,2),s([j({attribute:`with-clear`,type:Boolean})],P.prototype,`withClear`,2),s([j()],P.prototype,`placeholder`,2),s([j({type:Boolean,reflect:!0})],P.prototype,`readonly`,2),s([j({attribute:`password-toggle`,type:Boolean})],P.prototype,`passwordToggle`,2),s([j({attribute:`password-visible`,type:Boolean})],P.prototype,`passwordVisible`,2),s([j({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],P.prototype,`withoutSpinButtons`,2),s([j({type:Boolean,reflect:!0})],P.prototype,`required`,2),s([j()],P.prototype,`pattern`,2),s([j({type:Number})],P.prototype,`minlength`,2),s([j({type:Number})],P.prototype,`maxlength`,2),s([j()],P.prototype,`min`,2),s([j()],P.prototype,`max`,2),s([j()],P.prototype,`step`,2),s([j()],P.prototype,`autocapitalize`,2),s([j({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],P.prototype,`autocorrect`,2),s([j()],P.prototype,`autocomplete`,2),s([j({type:Boolean})],P.prototype,`autofocus`,2),s([j()],P.prototype,`enterkeyhint`,2),s([j({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],P.prototype,`spellcheck`,2),s([j()],P.prototype,`inputmode`,2),s([j({attribute:`with-label`,type:Boolean})],P.prototype,`withLabel`,2),s([j({attribute:`with-hint`,type:Boolean})],P.prototype,`withHint`,2),s([mt(`step`,{waitUntilFirstUpdate:!0})],P.prototype,`handleStepChange`,1),P=s([qe(`wa-input`)],P),P.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var aa=t({default:()=>P}),F;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var oa;function sa(e){this.c=e}F=sa.prototype,F.toString=(function(){return String.fromCharCode(this.c)});function ca(e){switch(typeof e){case`string`:return ob.l();case`number`:return Ca(e)?e<<24>>24===e?Zg.l():e<<16>>16===e?l_.l():$y.l():wa(e)?Qy.l():Zy.l();case`boolean`:return Wh.l();case`undefined`:return ul.l();default:return e instanceof V?nb.l():e instanceof sa?qh.l():e&&e.$classData?e.$classData.l():null}}function la(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Ca(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:wa(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof V?`java.lang.Long`:e instanceof sa?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.p5()}}function ua(e,t){switch(typeof e){case`string`:return ab(e,t);case`number`:return Yy(e,t);case`boolean`:return Hh(e,t);case`undefined`:return sl(e,t);default:return e&&e.$classData||e===null?e.u(t):e instanceof V?eb(e,t):e instanceof sa?Kh(Ea(e),t):ka.prototype.u.call(e,t)}}function da(e){switch(typeof e){case`string`:return ib(e);case`number`:return Xy(e);case`boolean`:return Uh(e);case`undefined`:return cl(e);default:return e&&e.$classData||e===null?e.y():e instanceof V?tb(e):e instanceof sa?Gh(Ea(e)):ka.prototype.y.call(e)}}function fa(e){return e===void 0?`undefined`:e.toString()}function pa(e,t){if(t===0)throw new Xg(`/ by zero`);return e/t|0}function ma(e,t){if(t===0)throw new Xg(`/ by zero`);return e%t|0}function ha(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function ga(e){return String.fromCharCode(e)}function _a(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var va=0,ya=new WeakMap;function ba(e){switch(typeof e){case`string`:return ib(e);case`number`:return Xy(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:ib(n);default:if(e===null)return 0;var r=ya.get(e);return r===void 0&&(r=va+1|0,va=r,ya.set(e,r)),r}}function xa(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Sa(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Ca(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function wa(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Ta(e){return new sa(e)}Ta(0);function Ea(e){return e===null?0:e.c}function Da(e){return e===null?oa:e}function Oa(e){return e}function ka(){}F=ka.prototype,F.constructor=ka;function I(){}I.prototype=F,F.y=(function(){return ba(this)}),F.u=(function(e){return this===e}),F.E=(function(){var e=this.y();return la(this)+`@`+(+(e>>>0)).toString(16)}),F.toString=(function(){return this.E()});function L(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}F=L.prototype=new I,F.constructor=L,F.s=(function(e,t,n,r){_a(this.a,e,t.a,n,r)}),F.e=(function(){return new L(this.a.slice())});function Aa(){}Aa.prototype=F;function ja(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}F=ja.prototype=new I,F.constructor=ja,F.s=(function(e,t,n,r){_a(this.a,e,t.a,n,r)}),F.e=(function(){return new ja(this.a.slice())});function Ma(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}F=Ma.prototype=new I,F.constructor=Ma,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new Ma(this.a.slice())});function Na(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}F=Na.prototype=new I,F.constructor=Na,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new Na(this.a.slice())});function Pa(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}F=Pa.prototype=new I,F.constructor=Pa,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new Pa(this.a.slice())});function Fa(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}F=Fa.prototype=new I,F.constructor=Fa,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new Fa(this.a.slice())});function Ia(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=oa}else this.a=e}F=Ia.prototype=new I,F.constructor=Ia,F.s=(function(e,t,n,r){_a(this.a,e,t.a,n,r)}),F.e=(function(){return new Ia(this.a.slice())});function La(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}F=La.prototype=new I,F.constructor=La,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new La(this.a.slice())});function Ra(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}F=Ra.prototype=new I,F.constructor=Ra,F.s=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),F.e=(function(){return new Ra(this.a.slice())});function R(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}F=R.prototype,F.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new R().y(this,r,i)),this}),F.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),F.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),F.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Aa;n.constructor=t,n.s=(function(e,t,n,r){_a(this.a,e,t.a,n,r)}),n.e=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={A:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===z});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),F.r=(function(){return this.A||=new R().a(this),this.A}),F.l=(function(){return this.L||=new pm(this),this.L}),F.R=(function(e){return this===e||this.F(e)}),F.S=(function(){return this.P?this.P.l():null}),F.Q=(function(){return this.O?this.O.l():null}),F.U=(function(e){if(this===za)throw e_(new t_);return new(this.r()).C(e)});var z=new R;z.n={},z.E=`Ljava.lang.Object;`,z.F=(e=>!e.X),z.N=`java.lang.Object`,z.I=(e=>e!==null),z.A=new R().y(z,L,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ka.prototype.$classData=z;var za=new R().p(void 0,`V`,`void`,void 0,void 0),Ba=new R().p(!1,`Z`,`boolean`,ja,void 0),Va=new R().p(0,`C`,`char`,Ma,Uint16Array),Ha=new R().p(0,`B`,`byte`,Na,Int8Array),Ua=new R().p(0,`S`,`short`,Pa,Int16Array),Wa=new R().p(0,`I`,`int`,Fa,Int32Array),Ga=new R().p(null,`J`,`long`,Ia,void 0),Ka=new R().p(0,`F`,`float`,La,Float32Array),qa=new R().p(0,`D`,`double`,Ra,Float64Array);function Ja(e){return ca(e).hi()+`@`+ba(e)}function Ya(e){var t=e.hE;return t===void 0?Ja(e):t}function Xa(){Qa=this,$a().oB(new Z((e=>void 0)),Rl().jk,!0)}F=Xa.prototype=new I,F.constructor=Xa;function Za(){}Za.prototype=F,F.oB=(function(e,t,n){return new jh(e,n,t,this)}),new R().i(Xa,`com.raquo.airstream.core.Observer$`,{c3:1});var Qa;function $a(){return Qa||=new Xa,Qa}function eo(e){this.fT=null,this.hF=null,this.fU=0,this.fT=e,this.hF=void 0;var t=xo().f7();this.fU=t===void 0?1:1+t.fU|0,oo().fa===-1||this.fU>oo().fa?Tp().f8(new Uy(this,oo().fa)):fo().bL?fo().dr.push(this)|0:xo().gX(this)}F=eo.prototype=new I,F.constructor=eo;function to(){}to.prototype=F;var no=new R().i(eo,`com.raquo.airstream.core.Transaction`,{c6:1});function ro(){this.fa=0,this.hG=null,ao=this,this.fa=1e3,this.hG=new Z((e=>{throw hm(new gm,`Attempted to run Transaction `+e+` after it was already executed.`)}))}F=ro.prototype=new I,F.constructor=ro;function io(){}io.prototype=F,F.ky=(function(e){try{e.fT.h(e);var t=e.hF;if(t!==void 0)for(;t.pa();)t.oY().pd(e)}catch(e){var n=e instanceof Df?e:new Gx(e);Tp().f8(n)}}),new R().i(ro,`com.raquo.airstream.core.Transaction$`,{c7:1});var ao;function oo(){return ao||=new ro,ao}function so(e){e.fb.length|0?new eo(new Z((t=>{for(;(e.fb.length|0)>0;){var n=e.fb.shift();try{n.h(t)}catch(e){var r=e instanceof Df?e:new Gx(e);Tp().f8(r)}}for(;(e.dr.length|0)>0;){var i=e.dr.shift();xo().gX(i)}}))):(e.dr.length|0)>0&&new eo(new Z((t=>{for(;(e.dr.length|0)>0;)xo().gX(e.dr.shift())})))}function co(){this.bL=!1,this.fb=null,this.dr=null,uo=this,this.bL=!1,this.fb=Ko().df(G().q(new(Ml.r()).C([]))),this.dr=Ko().df(G().q(new(no.r()).C([])))}F=co.prototype=new I,F.constructor=co;function lo(){}lo.prototype=F,new R().i(co,`com.raquo.airstream.core.Transaction$onStart$`,{c8:1});var uo;function fo(){return uo||=new co,uo}function po(e,t){return e.ds.get(t)}function mo(e,t){e.fc.unshift(t)}function ho(e){return e.fc.shift()}function go(e,t,n){var r=po(e,t),i=r===void 0,a=r===void 0?Ko().df(G().q(new(no.r()).C([]))):r;a.push(n),i&&e.ds.set(t,a)}function _o(e,t){var n=po(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ds.delete(t),i}}function vo(){this.fc=null,this.ds=null,bo=this,this.fc=Ko().df(G().q(new(no.r()).C([]))),this.ds=new Map}F=vo.prototype=new I,F.constructor=vo;function yo(){}yo.prototype=F,F.gX=(function(e){var t=this.f7();t===void 0?(mo(this,e),oo().ky(e),this.mG(e)):go(this,t,e)}),F.mG=(function(e){for(var t=e;;){var n=this.f7(),r=t;if(!(n!==void 0&&W().o(r,n)))throw hm(new gm,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.nW(t),t.fT=oo().hG;var i=this.f7();if(W().o(i,void 0))if((this.ds.size|0)>0){var a=new fp(0);throw this.ds.forEach((e=>((t,n)=>{e.dE=e.dE+(t.length|0)|0}))(a)),hm(new gm,`Transaction queue error: Stack cleared, but a total of `+a.dE+` children for `+(this.ds.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else oo().ky(i),t=i}}),F.nW=(function(e){for(var t=e;;){var n=_o(this,t);if(W().o(n,void 0)){ho(this);var r=this.f7();if(!W().o(r,void 0))t=r;else return}else{mo(this,n);return}}}),F.f7=(function(){return this.fc[0]}),new R().i(vo,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{c9:1});var bo;function xo(){return bo||=new vo,bo}function So(e,t){var n=e.cC.indexOf(t)|0;if(n!==-1)e.cC.splice(n,1),e.bp.b()||t.l3();else throw hm(new gm,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Co(e){for(;(e.fd.length|0)>0;)So(e,e.fd.shift())}function wo(e){this.hH=null,this.cC=null,this.dQ=!1,this.fd=null,this.bp=null,this.dR=0,this.hH=e,this.cC=Ko().df(G().q(new(Oo.r()).C([]))),this.dQ=!0,this.fd=Ko().df(G().q(new(Oo.r()).C([]))),this.bp=db(),this.dR=0}F=wo.prototype=new I,F.constructor=wo;function To(){}To.prototype=F,F.k9=(function(){if(this.bp.b()){var e=fo(),t=(()=>{var e=new id(this.hH);this.bp=new fb(e),this.dQ=!1,this.dR=0;for(var t=0,n=this.cC.length|0;t<n;){var r=t+this.dR|0;this.cC[r].l2(e),t=1+t|0}Co(this),this.dQ=!0,this.dR=0});if(fo(),e.bL)t();else{e.bL=!0;try{t()}finally{e.bL=!1,so(e)}}}else throw hm(new gm,`Can not activate `+this+`: it is already active`)}),F.mx=(function(){if(this.bp.b())throw hm(new gm,`Can not deactivate DynamicOwner: it is not active`);this.dQ=!1;for(var e=this.cC,t=0,n=e.length|0;t<n;)e[t].l3(),t=1+t|0;Co(this);var r=this.bp;r.b()||r.aF().nt(),Co(this),this.dQ=!0,this.bp=db()}),F.ma=(function(e,t){t?(this.dR=1+this.dR|0,this.cC.unshift(e)):this.cC.push(e);var n=this.bp;if(!n.b()){var r=n.aF();e.l2(r)}}),F.o1=(function(e){this.dQ?So(this,e):this.fd.push(e)}),new R().i(wo,`com.raquo.airstream.ownership.DynamicOwner`,{ca:1});function Eo(e,t,n){this.fe=null,this.hI=null,this.ff=null,this.fe=e,this.hI=t,this.ff=db(),e.ma(this,n)}F=Eo.prototype=new I,F.constructor=Eo;function Do(){}Do.prototype=F,F.fO=(function(){this.fe.o1(this)}),F.l2=(function(e){var t=fo(),n=(()=>{this.ff=this.hI.h(e)});if(fo(),t.bL)n();else{t.bL=!0;try{n()}finally{t.bL=!1,so(t)}}}),F.l3=(function(){var e=this.ff;e.b()||(e.aF().fO(),this.ff=db())});var Oo=new R().i(Eo,`com.raquo.airstream.ownership.DynamicSubscription`,{cb:1});function ko(){}F=ko.prototype=new I,F.constructor=ko;function Ao(){}Ao.prototype=F,F.ov=(function(e,t,n){return new Eo(e,new Z((e=>new fb(t.h(e)))),n)}),F.oh=(function(e,t,n){return new Eo(e,new Z((e=>(t.h(e),db()))),n)}),new R().i(ko,`com.raquo.airstream.ownership.DynamicSubscription$`,{cc:1});var jo;function Mo(){return jo||=new ko,jo}function No(e){e.dS=Ko().df(G().q(new(Bo.r()).C([])))}function Po(e){for(var t=e.dS,n=0,r=t.length|0;n<r;)Lo(t[n]),n=1+n|0;e.dS.length=0}function Fo(e,t){var n=e.dS.indexOf(t)|0;if(n!==-1)e.dS.splice(n,1);else throw hm(new gm,`Can not remove Subscription from Owner: subscription not found.`)}function Io(e,t){e.dS.push(t)}function Lo(e){if(!e.fW)e.hK.af(),e.fW=!0;else throw hm(new gm,`Can not kill Subscription: it was already killed.`)}function Ro(e,t){this.hL=null,this.hK=null,this.fW=!1,this.hL=e,this.hK=t,this.fW=!1,e.nT(this)}F=Ro.prototype=new I,F.constructor=Ro;function zo(){}zo.prototype=F,F.fO=(function(){Lo(this),Fo(this.hL,this)});var Bo=new R().i(Ro,`com.raquo.airstream.ownership.Subscription`,{cf:1});function Vo(e,t){this.hM=null,this.hN=null,this.cD=null,this.dt=!1,this.hM=e,this.hN=t,this.cD=db(),this.dt=!1}F=Vo.prototype=new I,F.constructor=Vo;function Ho(){}Ho.prototype=F,F.nq=(function(){var e=this.cD;return!e.b()&&!e.aF().fe.bp.b()}),F.ob=(function(e){if(this.dt)throw hm(new gm,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.cD;if(t.b())var n=!1;else var n=e===t.aF().fe;if(!n){this.nq()&&!e.bp.b()&&(this.dt=!0);var r=this.cD;r.b()||(r.aF().fO(),this.cD=db()),this.cD=new fb(Mo().ov(e,new Z((e=>(this.dt||this.hM.af(),new Ro(e,new jg((()=>{this.dt||this.hN.af()})))))),!1)),this.dt=!1}}),F.mn=(function(){if(this.dt)throw hm(new gm,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.cD;e.b()||e.aF().fO(),this.cD=db()}),new R().i(Vo,`com.raquo.airstream.ownership.TransferableSubscription`,{cg:1});function Uo(){}F=Uo.prototype=new I,F.constructor=Uo;function Wo(){}Wo.prototype=F,F.df=(function(e){return[...Zu().oq(e)]}),new R().i(Uo,`com.raquo.ew.JsArray$`,{ch:1});var Go;function Ko(){return Go||=new Uo,Go}function qo(){}F=qo.prototype=new I,F.constructor=qo;function Jo(){}Jo.prototype=F,F.n2=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new R().i(qo,`com.raquo.ew.JsArray$RichJsArray$`,{ci:1});var Yo;function Xo(){return Yo||=new qo,Yo}function Zo(){this.hO=null,$o=this,document.createElement(`template`),this.mv(X().O.ok().ol()),this.hO=RegExp(` `,`g`)}F=Zo.prototype=new I,F.constructor=Zo;function Qo(){}Qo.prototype=F,F.md=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Df?e:new Gx(e);if(n instanceof Gx&&n.bT instanceof DOMException)return!1;throw n instanceof Gx?n.bT:n}}),F.nr=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(W().o(t,r))return!0;n=r}}),F.mu=(function(e){return document.createElement(e.hp())}),F.nd=(function(e,t){var n=this.ne(e,t);return n===void 0?void 0:t.dT.ei(n)}),F.ne=(function(e,t){var n=e.cd.getAttributeNS(null,t.cE);return n===null?void 0:n}),F.lh=(function(e,t,n){this.o8(e,t,t.dT.dH(n))}),F.o8=(function(e,t,n){n===null?this.o0(e,t):e.cd.setAttribute(t.cE,n)}),F.o0=(function(e,t){e.cd.removeAttribute(t.cE)}),F.o9=(function(e,t,n){this.oa(e,t,t.ik.dH(n))}),F.oa=(function(e,t,n){e.cd[t.il]=n}),F.mv=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.iA)}),F.nh=(function(e,t){var n=this.ni(e,t);return n===void 0?void 0:t.g3.ei(n)}),F.ni=(function(e,t){var n=e.hx(),r=t.fj,i=n.getAttributeNS(r.b()?null:r.aF(),t.g4);return i===null?void 0:i}),F.oc=(function(e,t,n){this.od(e,t,t.g3.dH(n))}),F.od=(function(e,t,n){if(n===null)this.o2(e,t);else{var r=t.fj;if(r.b())e.hx().setAttribute(t.fi,n);else{var i=r.aF();e.hx().setAttributeNS(i,t.fi,n)}}}),F.o2=(function(e,t){var n=e.hx(),r=t.fj;n.removeAttributeNS(r.b()?null:r.aF(),t.g4)}),F.mw=(function(e){return document.createTextNode(e)}),F.mz=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new VT(this.my(r),n);r=i,n=a}}),F.my=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.hO,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new R().i(Zo,`com.raquo.laminar.DomApi$`,{cj:1});var $o;function es(){return $o||=new Zo,$o}function ts(e,t,n){this.fY=null,this.hP=null,this.fX=null,this.fY=e,this.hP=t,this.fX=n}F=ts.prototype=new I,F.constructor=ts;function ns(){}ns.prototype=F,F.bI=(function(e){this.fY===null?this.fX===null?Hl().n3(this.hP,e):Xo().n2(this.fX,Sh().n9(e)):this.fY.bI(e)}),new R().i(ts,`com.raquo.laminar.Seq`,{ck:1});function rs(){}F=rs.prototype=new I,F.constructor=rs;function is(){}is.prototype=F,new R().i(rs,`com.raquo.laminar.Seq$`,{cl:1});var as;function os(){return as||=new rs,as}function ss(e){$a(),Tp()}function cs(e){e.lr=Vs()}function ls(e){us(e,new Z((e=>{e.im.cd.focus()})))}function us(e,t){return new Dd(new Z((e=>{var n=new up(!e.dV.bp.b()),r=new Z((e=>{n.fz?n.fz=!1:t.h(e)}));Mo().oh(e.dV,new Z((e=>(t=>{r.h(new Fs(e,t))}))(e)),!1)})),Vs())}function ds(){this.bb=null,this.ie=null,this.ig=!1,this.id=null,ps=this,this.bb=new cd(ms()),new cd(ms()),new cd(ms()),this.id=new od}F=ds.prototype=new I,F.constructor=ds;function fs(){}fs.prototype=F,F.lS=(function(){return this.ig||=(this.ie=new ud(this),!0),this.ie}),new R().i(ds,`com.raquo.laminar.codecs.package$`,{ct:1});var ps;function ms(){return ps||=new ds,ps}function hs(e){e.fZ=gs(e,`class`,` `),e.hY=e.fZ}function gs(e,t,n){var r=vd(new yd,t,ms().bb);return new fd(r.cE,new Z((e=>{var t=es().nd(e,r);return t===void 0?``:t})),new Pg(((e,t)=>{es().lh(e,r,t)})),n)}function _s(e){e.lq=vs(e,`class`,` `)}function vs(e,t,n){var r=new Cd(t,ms().bb,db());return new fd(r.fi,new Z((e=>{var t=es().nh(e,r);return t===void 0?``:t})),new Pg(((e,t)=>{es().oc(e,r,t)})),n)}function ys(e){this.fg=null,this.fg=e}F=ys.prototype=new I,F.constructor=ys;function bs(){}bs.prototype=F,F.l4=(function(e,t){try{this.fg.ct(e,t)}catch(e){var n=e instanceof Df?e:new Gx(e);Tp().f8(n)}}),F.mo=(function(e){return new ys(new Pg(((t,n)=>{this.fg.ct(t,n),e.fg.ct(t,n)})))}),F.me=(function(e){return e===void 0?this:e.mo(this)}),new R().i(ys,`com.raquo.laminar.inserters.InserterHooks`,{cI:1});function xs(){}F=xs.prototype=new I,F.constructor=xs;function Ss(){}Ss.prototype=F,F.en=(function(e,t){return new Rg(e,void 0)}),new R().i(xs,`com.raquo.laminar.inserters.StaticChildInserter$`,{cK:1});var Cs;function ws(){return Cs||=new xs,Cs}function Ts(){}F=Ts.prototype=new I,F.constructor=Ts;function Es(){}Es.prototype=F,F.l1=(function(e,t){return e===``?$():$().hv(vE(new bE,e.split(t).filter((e=>e!==``))))}),new R().i(Ts,`com.raquo.laminar.keys.CompositeKey$`,{cN:1});var Ds;function Os(){return Ds||=new Ts,Ds}function ks(){}F=ks.prototype=new I,F.constructor=ks;function As(){}As.prototype=F;function js(){this.ls=null,this.lt=null,this.lu=null,this.lv=null,this.ls=`http://www.w3.org/2000/svg`,this.lt=`http://www.w3.org/1999/xlink`,this.lu=`http://www.w3.org/XML/1998/namespace`,this.lv=`http://www.w3.org/2000/xmlns/`}F=js.prototype=new I,F.constructor=js;function Ms(){}Ms.prototype=F,F.nD=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new y_(e)}}),new R().i(js,`com.raquo.laminar.keys.SvgAttr$`,{cT:1});var Ns;function Ps(){return Ns||=new js,Ns}function Fs(e,t){this.im=null,this.im=e}F=Fs.prototype=new I,F.constructor=Fs;function Is(){}Is.prototype=F,new R().i(Fs,`com.raquo.laminar.lifecycle.MountContext`,{cU:1});var Ls=new R().i(1,`com.raquo.laminar.modifiers.Modifier`,{a2:1});function Rs(){this.lw=null,Bs=this,this.lw=new Td}F=Rs.prototype=new I,F.constructor=Rs;function zs(){}zs.prototype=F,new R().i(Rs,`com.raquo.laminar.modifiers.Modifier$`,{cX:1});var Bs;function Vs(){return Bs||=new Rs,Bs}function Hs(){this.du=null,Ws=this,this.du=new kd}F=Hs.prototype=new I,F.constructor=Hs;function Us(){}Us.prototype=F,new R().i(Hs,`com.raquo.laminar.modifiers.RenderableNode$`,{d1:1});var Ws;function Gs(){return Ws||=new Hs,Ws}function Ks(){this.dU=null,Js=this,this.dU=new Fd(new Z((e=>e)),Ys()),new Fd(new Z((e=>``+(e|0))),Ys()),new Fd(new Z((e=>``+ +e)),Ys()),new Fd(new Z((e=>``+!!e)),Ys()),new Fd(new Z((e=>e.op())),Ys())}F=Ks.prototype=new I,F.constructor=Ks;function qs(){}qs.prototype=F,new R().i(Ks,`com.raquo.laminar.modifiers.RenderableText$`,{d6:1});var Js;function Ys(){return Js||=new Ks,Js}function Xs(){}F=Xs.prototype=new I,F.constructor=Xs;function Zs(){}Zs.prototype=F,F.fI=(function(e,t,n){var r=new fb(e);t.lp(r),n!==void 0&&n.l4(e,t);var i=es().md(e.dL(),t.dL());return i&&t.li(r),i}),new R().i(Xs,`com.raquo.laminar.nodes.ParentNode$`,{d8:1});var Qs;function $s(){return Qs||=new Xs,Qs}function ec(e){this.ix=null,this.ix=new ys(new Pg(((t,n)=>{matchResult1:{var r=n.dL();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Tp(),a=r.textContent,o=t.dL().tagName;i.f8(hm(new gm,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}F=ec.prototype=new I,F.constructor=ec;function tc(){}tc.prototype=F,F.eg=(function(e){return e.bX(new Z((e=>e.oA(this.ix))))}),new R().i(ec,`com.raquo.laminar.nodes.Slot`,{dc:1});function nc(){ic=this,Ko().df(G().oC(new Fa(new Int32Array([0]))))}F=nc.prototype=new I,F.constructor=nc;function rc(){}rc.prototype=F,F.lR=(function(){return new Z((e=>void 0))}),new R().i(nc,`com.raquo.laminar.tags.CustomHtmlTag$`,{df:1});var ic;function ac(){return ic||=new nc,ic}function oc(){}F=oc.prototype=new I,F.constructor=oc;function sc(){}sc.prototype=F,F.mb=(function(){lc().mO(),lc().mP(),lc().mQ(),lc().mR(),lc().mS(),lc().mT(),lc().mU(),lc().mV(),lc().mW()}),F.mO=(function(){var e=document.querySelector(`#example1`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`Web Awesome rocks!`)))])),G().q(new(Ls.r()).C([])))))}),F.mP=(function(){var e=document.querySelector(`#example2`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`Copied from a custom trigger`))),new Y((e=>e.os().nQ()))])),G().q(new(Ls.r()).C([zp().aR(G().q(new(Ml.r()).C([new Y((e=>e.mc().n0()))])),G().q(new(Ls.r()).C([Ep(X().O,`Copy text`,Ys().dU)])))])))))}),F.mQ=(function(){var e=document.querySelector(`#example3`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`Custom labels are easy`))),new Y((e=>e.mt().K(`Click to copy`))),new Y((e=>e.oj().K(`You did it!`))),new Y((e=>e.mN().K(`Whoops, your browser doesn't support this!`)))])),G().q(new(Ls.r()).C([])))))}),F.mR=(function(){var e=document.querySelector(`#example4`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`Copied from a custom button`))),new Y((e=>Dp(X().O,mc().kC().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`clipboard`))),new Y((e=>e.hB().K(`regular`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd()))),new Y((e=>Dp(X().O,mc().lk().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`thumbs-up`))),new Y((e=>e.hB().K(`solid`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd()))),new Y((e=>Dp(X().O,mc().kO().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`xmark`))),new Y((e=>e.hB().K(`solid`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd())))])),G().q(new(Ls.r()).C([])))))}),F.mS=(function(){var e=document.querySelector(`#example5`);Jf().cu(e).b()||(X(),new Mp(e,X().O.mE().dg(G().q(new(Ls.r()).C([X().O.lj().dg(G().q(new(Ls.r()).C([X().O.hl().K(`my-phone`),Ep(X().O,`+1 (234) 456-7890`,Ys().dU)]))),Ep(X().O,` `,Ys().dU),tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.fM().K(`my-phone`)))])),G().q(new(Ls.r()).C([]))),X().O.h2().dg(G().q(new(Ls.r()).C([]))),X().O.h2().dg(G().q(new(Ls.r()).C([]))),X().O.lj().dg(G().q(new(Ls.r()).C([X().O.hY.k8(`flex items-center gap-1`),lm().aR(G().q(new(Ml.r()).C([new Y((e=>e.nl().K(`my-input`))),new Y((e=>e.ot().oo())),new Y((e=>(lm().or(),X().O).ox().K(`User input`)))])),G().q(new(Ls.r()).C([X().O.og().K(`display: inline-block; max-width: 300px;`)]))),tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.fM().K(`my-input.value`)))])),G().q(new(Ls.r()).C([])))]))),X().O.h2().dg(G().q(new(Ls.r()).C([]))),X().O.lV().dg(G().q(new(Ls.r()).C([X().O.hl().K(`my-link`),X().O.nk().K(`https://webawesome.com/`),Ep(X().O,`Web Awesome Website`,Ys().dU)]))),Ep(X().O,` `,Ys().dU),tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.fM().K(`my-link[href]`)))])),G().q(new(Ls.r()).C([])))])))))}),F.mT=(function(){var e=document.querySelector(`#example6`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.fM().K(`i-do-not-exist`)))])),G().q(new(Ls.r()).C([])))))}),F.mU=(function(){var e=document.querySelector(`#example7`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`You can't copy me`))),new Y((e=>e.mD().K(!0)))])),G().q(new(Ls.r()).C([])))))}),F.mV=(function(){var e=document.querySelector(`#example8`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`Web Awesome rocks!`))),new Y((e=>e.mY().K(250)))])),G().q(new(Ls.r()).C([])))))}),F.mW=(function(){var e=document.querySelector(`#example9`);Jf().cu(e).b()||(X(),new Mp(e,tm().aR(G().q(new(Ml.r()).C([new Y((e=>e.dN().K(`I'm so stylish`))),new Y((e=>Dp(X().O,mc().kC().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`clipboard`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd()))),new Y((e=>Dp(X().O,mc().lk().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`thumbs-up`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd()))),new Y((e=>Dp(X().O,mc().kO().eg(G().q(new(Bg.r()).C([(X(),ws().en(am().aR(G().q(new(Ml.r()).C([new Y((e=>e.em().K(`thumbs-down`)))])),G().q(new(Ls.r()).C([]))),Gs().du))]))),jf().dv,Pd())))])),G().q(new(Ls.r()).C([X().O.fZ.k8(`custom-styles`)])))))}),new R().i(oc,`examples.copyButton.Main$package$`,{dh:1});var cc;function lc(){return cc||=new oc,cc}function uc(e){try{lc().mb()}catch(e){throw e}}function dc(){this.iZ=null,this.j0=!1,this.j3=null,this.j4=!1,this.j1=null,this.j2=!1}F=dc.prototype=new I,F.constructor=dc;function fc(){}fc.prototype=F,F.kC=(function(){return this.j0||=(this.iZ=new ec(`copy-icon`),!0),this.iZ}),F.lk=(function(){return this.j4||=(this.j3=new ec(`success-icon`),!0),this.j3}),F.kO=(function(){return this.j2||=(this.j1=new ec(`error-icon`),!0),this.j1}),new R().i(dc,`io.github.nguyenyou.webawesome.laminar.CopyButton$slots$`,{dn:1});var pc;function mc(){return pc||=new dc,pc}function hc(){this.ly=!1,this.es=null,this.fm=null,this.jb=null,this.ge=!1,this.lx=0,this.lA=0,this.lz=null,_c=this,this.ly=!0,this.es=new ArrayBuffer(8),this.fm=new Int32Array(this.es,0,2),new Float32Array(this.es,0,2),this.jb=new Float64Array(this.es,0,1),this.fm[0]=16909060,this.ge=(new Int8Array(this.es,0,8)[0]|0)==1,this.lx=this.ge?0:1,this.lA=this.ge?1:0,this.lz=null}F=hc.prototype=new I,F.constructor=hc;function gc(){}gc.prototype=F,F.ht=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.jb[0]=e,(this.fm[0]|0)^(this.fm[1]|0))}),new R().i(hc,`java.lang.FloatingPointBits$`,{dD:1});var _c;function vc(){return _c||=new hc,_c}function yc(e,t){for(var n=qc().bZ(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=bc(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new yf(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new yf(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,h=new(xf.r()).C(m);for(i=0;i<m;)h.a[i]=r[i],i=1+i|0;return h}function bc(e,t){var n=qc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=qc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=qc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=qc().bZ(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=qc().bZ(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[xc(e,c[1]),Oc(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[xc(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[xc(e,d[1]),`<clinit>`]}function xc(e,t){var n=Cc(e);if(ol().gj.call(n,t))var r=Cc(e)[t];else var r=zc(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Sc(e){if(!((1&e.by)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.gg=t,e.by=(1|e.by)<<24>>24}return e.gg}function Cc(e){return(1&e.by)<<24>>24?e.gg:Sc(e)}function wc(e){if(!((2&e.by)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.gh=t,e.by=(2|e.by)<<24>>24}return e.gh}function Tc(e){return(2&e.by)<<24>>24?e.gh:wc(e)}function Ec(e){return(4&e.by)<<24>>24||(e.gf=Object.keys(Tc(e)),e.by=(4|e.by)<<24>>24),e.gf}function Dc(e){return(4&e.by)<<24>>24?e.gf:Ec(e)}function Oc(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function kc(e,t){return t?t.arguments&&t.stack?Ac(e,t):t.stack&&t.sourceURL?Nc(e,t):t.stack&&t.number?Mc(e,t):t.stack&&t.fileName?jc(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Pc(e,t):Fc(e,t):Pc(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Ic(e,t):Lc(e,t):t.stack&&!t.fileName?Ac(e,t):Rc(e,t):[]}function Ac(e,t){return(t.stack+`
`).replace(qc().bZ(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(qc().bn(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(qc().bn(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(qc().bn(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(qc().bn(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function jc(e,t){return t.stack.replace(qc().bn(`(?:\\n@:0)?\\s+$`,`m`),``).replace(qc().bn(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Mc(e,t){return t.stack.replace(qc().bn(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(qc().bn(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(qc().bn(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Nc(e,t){return t.stack.replace(qc().bn(`\\[native code\\]\\n`,`m`),``).replace(qc().bn(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(qc().bn(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Pc(e,t){for(var n=qc().bn(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function Fc(e,t){for(var n=qc().bn(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Ic(e,t){for(var n=qc().bZ(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Lc(e,t){for(var n=qc().bZ(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(qc().bZ(`<anonymous function: (\\S+)>`),`$1`).replace(qc().bZ(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Rc(e,t){return[]}function zc(e,t,n){for(;;)if(t<(Dc(e).length|0)){var r=Dc(e)[t];if(n.startsWith(r))return``+Tc(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Bc(){this.gg=null,this.gh=null,this.gf=null,this.by=0}F=Bc.prototype=new I,F.constructor=Bc;function Vc(){}Vc.prototype=F,F.mX=(function(e){return yc(this,kc(this,e))}),new R().i(Bc,`java.lang.StackTrace$`,{dO:1});var Hc;function Uc(){return Hc||=new Bc,Hc}function Wc(){}F=Wc.prototype=new I,F.constructor=Wc;function Gc(){}Gc.prototype=F,F.bZ=(function(e){return new RegExp(e)}),F.bn=(function(e,t){return new RegExp(e,t)}),new R().i(Wc,`java.lang.StackTrace$StringRE$`,{dP:1});var Kc;function qc(){return Kc||=new Wc,Kc}function Jc(){this.jd=null,this.lB=null,Xc=this,this.jd=new qx(!1),this.lB=new qx(!0)}F=Jc.prototype=new I,F.constructor=Jc;function Yc(){}Yc.prototype=F,new R().i(Jc,`java.lang.System$Streams$`,{dU:1});var Xc;function Zc(){return Xc||=new Jc,Xc}function Qc(e){var t={};return t[`java.version`]=`1.8`,t[`java.vm.specification.version`]=`1.8`,t[`java.vm.specification.vendor`]=`Oracle Corporation`,t[`java.vm.specification.name`]=`Java Virtual Machine Specification`,t[`java.vm.name`]=`Scala.js`,t[`java.vm.version`]=`1.19.0`,t[`java.specification.version`]=`1.8`,t[`java.specification.vendor`]=`Oracle Corporation`,t[`java.specification.name`]=`Java Platform API Specification`,t[`file.separator`]=`/`,t[`path.separator`]=`:`,t[`line.separator`]=`
`,t}function $c(){this.gi=null,this.je=null,tl=this,this.gi=Qc(this),this.je=null}F=$c.prototype=new I,F.constructor=$c;function el(){}el.prototype=F,F.hh=(function(e,t){if(this.gi!==null){var n=this.gi;return ol().gj.call(n,e)?n[e]:t}else return this.je.hh(e,t)}),new R().i($c,`java.lang.System$SystemProperties$`,{dV:1});var tl;function nl(){return tl||=new $c,tl}function rl(){this.gj=null,al=this,this.gj=Object.prototype.hasOwnProperty}F=rl.prototype=new I,F.constructor=rl;function il(){}il.prototype=F,new R().i(rl,`java.lang.Utils$Cache$`,{dX:1});var al;function ol(){return al||=new rl,al}function sl(e,t){return e===t}function cl(e){return 0}function ll(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.b4)}var ul=new R().i(0,`java.lang.Void`,{b4:1},(e=>e===void 0));function dl(e,t){throw $g(new t_,`argument type mismatch`)}function fl(){}F=fl.prototype=new I,F.constructor=fl;function pl(){}pl.prototype=F,F.bJ=(function(e){return e instanceof L||e instanceof ja||e instanceof Ma||e instanceof Na||e instanceof Pa||e instanceof Fa||e instanceof Ia||e instanceof La||e instanceof Ra?e.a.length:dl(this,e)}),new R().i(fl,`java.lang.reflect.Array$`,{dY:1});var ml;function hl(){return ml||=new fl,ml}function gl(){}F=gl.prototype=new I,F.constructor=gl;function _l(){}_l.prototype=F,F.mj=(function(e,t){for(var n=0,r=e.a.length;;)if(n===r)return-1-n|0;else{var i=(n+r|0)>>>1|0,a=e.a[i],o=t===a?0:t<a?-1:1;if(o<0)r=i;else if(o===0)return i;else n=1+i|0}}),F.kK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.l,s=a.n,c=r,l=t.a[c],u=l.l,d=l.n;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),F.h6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.kL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.kH=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.kG=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.kM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),F.kI=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),F.kJ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),F.T=(function(e,t){if(t<0)throw new s_;var n=e.a.length,r=t<n?t:n,i=ca(e).N.Q().N.U(t);return e.s(0,i,0,r),i}),F.a1=(function(e,t,n){if(t>n)throw $g(new t_,t+` > `+n);var r=e.a.length,i=n-t|0,a=r-t|0,o=i<a?i:a,s=ca(e).N.Q().N.U(i);return e.s(t,s,0,o),s}),new R().i(gl,`java.util.Arrays$`,{dZ:1});var vl;function B(){return vl||=new gl,vl}function V(e,t){this.l=0,this.n=0,this.l=e,this.n=t}F=V.prototype=new I,F.constructor=V;function yl(){}yl.prototype=F,F.u=(function(e){return e instanceof V&&this.l===e.l&&this.n===e.n}),F.y=(function(){return this.l^this.n}),F.E=(function(){return Dl().l8(this.l,this.n)}),F.pg=(function(){return this.l}),F.pf=(function(){return Dl().l7(this.l,this.n)}),F.pe=(function(){return Dl().f6(this.l,this.n)}),F.oV=(function(){return this.l<<24>>24}),F.pc=(function(){return this.l<<16>>16}),F.p6=(function(){return this.l}),F.p7=(function(){return this}),F.p1=(function(){return Dl().l7(this.l,this.n)}),F.oZ=(function(){return Dl().f6(this.l,this.n)}),F.oX=(function(e){return Dl().l5(this.l,this.n,e.l,e.n)}),F.oW=(function(e){return Dl().l5(this.l,this.n,e.l,e.n)}),F.p0=(function(e){return this.l===e.l&&this.n===e.n}),F.pb=(function(e){return!(this.l===e.l&&this.n===e.n)}),F.oN=(function(e){var t=this.n,n=e.n;return t===n?(-2147483648^this.l)<(-2147483648^e.l):t<n}),F.oO=(function(e){var t=this.n,n=e.n;return t===n?(-2147483648^this.l)<=(-2147483648^e.l):t<n}),F.oJ=(function(e){var t=this.n,n=e.n;return t===n?(-2147483648^this.l)>(-2147483648^e.l):t>n}),F.oK=(function(e){var t=this.n,n=e.n;return t===n?(-2147483648^this.l)>=(-2147483648^e.l):t>n}),F.pi=(function(){return new V(~this.l,~this.n)}),F.oH=(function(e){return new V(this.l|e.l,this.n|e.n)}),F.oG=(function(e){return new V(this.l&e.l,this.n&e.n)}),F.oU=(function(e){return new V(this.l^e.l,this.n^e.n)}),F.oP=(function(e){var t=this.l;return new V(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.n<<e)}),F.oM=(function(e){var t=this.n;return new V(32&e?t>>>e|0:this.l>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),F.oL=(function(e){var t=this.n;return new V(32&e?t>>e:this.l>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),F.ph=(function(){var e=this.l,t=this.n;return new V(-e|0,e===0?-t|0:~t)}),F.oS=(function(e){var t=this.l,n=this.n,r=e.n,i=t+e.l|0;return new V(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),F.oQ=(function(e){var t=this.l,n=this.n,r=e.n,i=t-e.l|0;return new V(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),F.oT=(function(e){var t=this.l,n=e.l,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new V(u,(((Math.imul(t,e.n)+Math.imul(this.n,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),F.oI=(function(e){var t=Dl();return new V(t.mF(this.l,this.n,e.l,e.n),t.Q)}),F.oR=(function(e){var t=Dl();return new V(t.nZ(this.l,this.n,e.l,e.n),t.Q)}),new R().i(V,`org.scalajs.linker.runtime.RuntimeLong`,{b5:1});function bl(e,t,n){return-2097152&n?Cl(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function xl(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.Q=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.Q=0,n>>>o|0}else return Cl(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.Q=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.Q=s/4294967296|0,s|0}}function Sl(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.Q=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.Q=n&(-1+i|0),t):Cl(e,t,n,r,i,1)|0;if(-2097152&i)return e.Q=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.Q=a/4294967296|0,a|0}function Cl(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,h=0;o>=0&&-2097152&p;){var g=f,_=p,v=u,y=d;if(_===y?(-2147483648^g)>=(-2147483648^v):(-2147483648^_)>=(-2147483648^y)){var b=f,ee=p,te=u,x=d,S=b-te|0,C=(-2147483648^S)>(-2147483648^b)?-1+(ee-x|0)|0:ee-x|0;f=S,p=C,o<32?m|=1<<o:h|=1<<o}o=-1+o|0;var ne=u,re=d,ie=ne>>>1|0|re<<31,ae=re>>>1|0;u=ie,d=ae}var w=f,T=p;if(T===i?(-2147483648^w)>=(-2147483648^r):(-2147483648^T)>=(-2147483648^i)){var E=f,oe=4294967296*p+ +(E>>>0),se=4294967296*i+ +(r>>>0);if(a!==1){var D=oe/se,ce=D|0,le=D/4294967296|0,ue=m,de=h,fe=ue+ce|0,pe=(-2147483648^fe)<(-2147483648^ue)?1+(de+le|0)|0:de+le|0;m=fe,h=pe}if(a!==0){var me=oe%se;f=me|0,p=me/4294967296|0}}if(a===0)return e.Q=h,m;if(a===1)return e.Q=p,f;var he=m,ge=4294967296*h+ +(he>>>0),_e=``+f,ve=_e.length;return``+ge+`000000000`.substring(ve)+_e}function wl(){this.Q=0}F=wl.prototype=new I,F.constructor=wl;function Tl(){}Tl.prototype=F,F.l8=(function(e,t){return t===e>>31?``+e:t<0?`-`+bl(this,-e|0,e===0?-t|0:~t):bl(this,e,t)}),F.f6=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),F.l7=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),F.p4=(function(e){return new V(e,e>>31)}),F.p3=(function(e){return new V(this.l6(e),this.Q)}),F.l6=(function(e){if(e<-0x8000000000000000)return this.Q=-2147483648,0;if(e>=0x8000000000000000)return this.Q=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.Q=e<0&&t!==0?-1+n|0:n,t}),F.l5=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),F.mF=(function(e,t,n,r){if((n|r)===0)throw new Xg(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.Q=0,-2147483648;var i=pa(e,n);return this.Q=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.Q=-1,-1;else return this.Q=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=xl(this,a,o,s,c);if((t^r)>=0)return l;var u=this.Q;return this.Q=l===0?-u|0:~u,-l|0}}),F.nZ=(function(e,t,n,r){if((n|r)===0)throw new Xg(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=ma(e,n);return this.Q=i>>31,i}else return this.Q=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.Q=0,0;else return this.Q=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Sl(this,a,o,s,c);if(t<0){var u=this.Q;return this.Q=l===0?-u|0:~u,-l|0}else return l}}),new R().i(wl,`org.scalajs.linker.runtime.RuntimeLong$`,{e2:1});var El;function Dl(){return El||=new wl,El}function Ol(){this.gk=null,this.ji=null,Al=this,this.gk=new Fa(0),this.ji=new L(0)}F=Ol.prototype=new I,F.constructor=Ol;function kl(){}kl.prototype=F,new R().i(Ol,`scala.Array$EmptyArrays$`,{e8:1});var Al;function jl(){return Al||=new Ol,Al}var Ml=new R().i(1,`scala.Function1`,{f:1});function Nl(){}F=Nl.prototype=new I,F.constructor=Nl;function Pl(){}Pl.prototype=F;function Fl(){this.jl=null,this.jk=null,Ll=this,this.jl=new Y((e=>Rl().jl)),this.jk=new ng}F=Fl.prototype=new I,F.constructor=Fl;function Il(){}Il.prototype=F,new R().i(Fl,`scala.PartialFunction$`,{eh:1});var Ll;function Rl(){return Ll||=new Fl,Ll}function zl(){this.jq=null,Vl=this,this.jq=new Y((e=>Hl().jq))}F=zl.prototype=new I,F.constructor=zl;function Bl(){}Bl.prototype=F,F.n3=(function(e,t){var n=hl().bJ(e),r=0;if(e instanceof L)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Fa)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Ra)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Ia)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof La)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Ma)for(;r<n;)t.h(Ta(e.a[r])),r=1+r|0;else if(e instanceof Na)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof Pa)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof ja)for(;r<n;)t.h(e.a[r]),r=1+r|0;else throw new y_(e)}),new R().i(zl,`scala.collection.ArrayOps$`,{eo:1});var Vl;function Hl(){return Vl||=new zl,Vl}function Ul(){}F=Ul.prototype=new I,F.constructor=Ul;function Wl(){}Wl.prototype=F,F.bW=(function(e){var t=e+~(e<<9)|0;return t^=t>>>14|0,t=t+(t<<4)|0,t^(t>>>10|0)}),new R().i(Ul,`scala.collection.Hashing$`,{eA:1});var Gl;function Kl(){return Gl||=new Ul,Gl}function ql(e,t){for(var n=e.j();n.k();)t.h(n.f())}function Jl(e,t){for(var n=!0,r=e.j();n&&r.k();)n=!!t.h(r.f());return n}function Yl(e){switch(e.x()){case-1:return!e.j().k();case 0:return!0;default:return!1}}function Xl(e,t,n,r){for(var i=e.j(),a=n,o=hl().bJ(t)-n|0,s=n+(r<o?r:o)|0;a<s&&i.k();)G().h1(t,a,i.f()),a=1+a|0;return a-n|0}function Zl(e,t,n,r){return e.x()===0?``+t+r:e.dd(sE(new cE),t,n,r).aP.m}function Ql(e,t,n,r,i){var a=t.aP;n.length!==0&&(a.m=``+a.m+n);var o=e.j();if(o.k()){var s=o.f();for(a.m=``+a.m+s;o.k();){a.m=``+a.m+r;var c=o.f();a.m=``+a.m+c}}return i.length!==0&&(a.m=``+a.m+i),t}function $l(e,t){if(e.x()>=0){var n=t.b9(e.x());return e.bx(n,0,2147483647),n}else{var r=null,i=t.aG(),a=i===Va.l();r=[];for(var o=e.j();o.k();){var s=o.f(),c=a?Ea(s):s===null?i.N.z:s;r.push(c)}return(i===za.l()?ul.l():i===Lu.l()||i===vh.l()?z.l():i).N.r().w(r)}}function eu(e,t){this.jx=null,this.ez=null,this.jx=e,this.ez=t}F=eu.prototype=new I,F.constructor=eu;function tu(){}tu.prototype=F,F.nj=(function(){return this.jx.af().j()}),new R().i(eu,`scala.collection.Iterator$ConcatIteratorCell`,{eJ:1});function nu(){}F=nu.prototype=new I,F.constructor=nu;function ru(){}ru.prototype=F,F.f3=(function(e,t){return r_(new i_,e+` is out of bounds (min 0, max `+t+`)`)}),new R().i(nu,`scala.collection.generic.CommonErrors$`,{eT:1});var iu;function au(){return iu||=new nu,iu}function ou(){try{return hf().l9(nl().hh(`scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength`,`64`),10)}catch(e){throw e}}function su(){this.jC=0,lu=this,this.jC=ou()}F=su.prototype=new I,F.constructor=su;function cu(){}cu.prototype=F,new R().i(su,`scala.collection.immutable.IndexedSeqDefaults$`,{f1:1});var lu;function uu(){return lu||=new su,lu}function du(){this.gH=null}F=du.prototype=new I,F.constructor=du;function fu(){}fu.prototype=F,F.h7=(function(){var e=this.gH;if(e===null)throw new n_(`uninitialized`);return e.af()}),F.hm=(function(e){if(this.gH!==null)throw new n_(`already initialized`);this.gH=e}),new R().i(du,`scala.collection.immutable.LazyList$LazyBuilder$DeferredState`,{f5:1});function pu(){this.jH=null,hu=this,this.jH=new Wm(0,0,new L(0),new Fa(0),0,0)}F=pu.prototype=new I,F.constructor=pu;function mu(){}mu.prototype=F,new R().i(pu,`scala.collection.immutable.MapNode$`,{fm:1});var hu;function gu(){return hu||=new pu,hu}function _u(e,t,n){return Ky(new Jy,n+` is out of bounds (min 0, max `+(-1+hl().bJ(t)|0))}function vu(){}F=vu.prototype=new I,F.constructor=vu;function yu(){}yu.prototype=F,F.la=(function(e,t){if(t<0||t>(-1+e.a.length|0))throw _u(this,e,t);var n=new Fa(-1+e.a.length|0);e.s(0,n,0,t);var r=1+t|0,i=-1+(e.a.length-t|0)|0;return e.s(r,n,t,i),n}),F.np=(function(e,t,n){if(t<0||t>e.a.length)throw _u(this,e,t);var r=new Fa(1+e.a.length|0);e.s(0,r,0,t),r.a[t]=n;var i=1+t|0,a=e.a.length-t|0;return e.s(t,r,i,a),r});var bu=new R().i(0,`scala.collection.immutable.Node`,{aG:1});function xu(){this.eH=0,Cu=this,this.eH=ha(7)}F=xu.prototype=new I,F.constructor=xu;function Su(){}Su.prototype=F,F.dJ=(function(e,t){return 31&(e>>>t|0)}),F.di=(function(e){return 1<<e}),F.nm=(function(e,t){return hf().dh(e&(-1+t|0))}),F.c9=(function(e,t,n){return e===-1?t:this.nm(e,n)}),new R().i(xu,`scala.collection.immutable.Node$`,{fp:1});var Cu;function H(){return Cu||=new xu,Cu}function wu(){this.gL=null,this.b7=null,this.c5=null,this.ed=null,this.gM=null,this.jL=null,Eu=this,this.gL=new L(0),this.b7=new(z.r().r()).C(0),this.c5=new(z.r().r().r()).C(0),this.ed=new(z.r().r().r().r()).C(0),this.gM=new(z.r().r().r().r().r()).C(0),this.jL=new(z.r().r().r().r().r().r()).C(0)}F=wu.prototype=new I,F.constructor=wu;function Tu(){}Tu.prototype=F,F.eh=(function(e,t){var n=e.a.length,r=new L(1+n|0);return e.s(0,r,0,n),r.a[n]=t,r}),F.C=(function(e,t){var n=B().T(e,1+e.a.length|0);return n.a[-1+n.a.length|0]=t,n}),F.c7=(function(e,t){var n=ca(t).N.Q().N.U(1+t.a.length|0),r=t.a.length;return t.s(0,n,1,r),n.a[0]=e,n}),F.h9=(function(e,t,n){var r=0,i=t.a.length;if(e===0)for(;r<i;)n.h(t.a[r]),r=1+r|0;else for(var a=-1+e|0;r<i;)this.h9(a,t.a[r],n),r=1+r|0}),F.bK=(function(e,t){for(var n=0;n<e.a.length;){var r=e.a[n],i=t.h(r);if(!Object.is(r,i))return this.ny(e,t,n,i);n=1+n|0}return e}),F.ny=(function(e,t,n,r){var i=new L(e.a.length);n>0&&e.s(0,i,0,n),i.a[n]=r;for(var a=1+n|0;a<e.a.length;)i.a[a]=t.h(e.a[a]),a=1+a|0;return i}),F.a0=(function(e,t,n){if(e===1)return this.bK(t,n);for(var r=0;r<t.a.length;){var i=t.a[r],a=this.a0(-1+e|0,i,n);if(i!==a)return this.nz(e,t,n,r,a);r=1+r|0}return t}),F.nz=(function(e,t,n,r,i){var a=ca(t).N.Q().N.U(t.a.length);r>0&&t.s(0,a,0,r),a.a[r]=i;for(var o=1+r|0;o<t.a.length;)a.a[o]=this.a0(-1+e|0,t.a[o],n),o=1+o|0;return a}),new R().i(wu,`scala.collection.immutable.VectorStatics$`,{fG:1});var Eu;function U(){return Eu||=new wu,Eu}function Du(e,t,n){this.ef=null,this.cq=0,this.aO=null,this.ef=e,this.cq=t,this.aO=n}F=Du.prototype=new I,F.constructor=Du;function Ou(){}Ou.prototype=F,F.n1=(function(e,t){for(var n=this;;)if(t===n.cq&&W().o(e,n.ef))return n;else if(n.aO===null||n.cq>t)return null;else n=n.aO}),F.E=(function(){return`Node(`+this.ef+`, `+this.cq+`) -> `+this.aO});var ku=new R().i(Du,`scala.collection.mutable.HashSet$Node`,{fY:1});function Au(){}F=Au.prototype=new I,F.constructor=Au;function ju(){}ju.prototype=F,F.kx=(function(e,t,n){if(t!==e)throw new d_(n)}),new R().i(Au,`scala.collection.mutable.MutationTracker$`,{g4:1});var Mu;function Nu(){return Mu||=new Au,Mu}function Pu(){}F=Pu.prototype=new I,F.constructor=Pu;function Fu(){}Fu.prototype=F,F.o=(function(e,t){return e===t||(vf(e)?this.mM(e,t):e instanceof sa?this.mK(e,t):e===null?t===null:ua(e,t))}),F.mM=(function(e,t){if(vf(t))return this.mL(e,t);if(t instanceof sa){if(typeof e==`number`)return+e===t.c;if(e instanceof V){var n=Da(e),r=n.l,i=n.n,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:ua(e,t)}else return e===null?t===null:ua(e,t)}),F.mL=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof V){var r=Da(t);return n===Dl().f6(r.l,r.n)}else return!1}else if(e instanceof V){var i=Da(e),a=i.l,o=i.n;if(t instanceof V){var s=Da(t),c=s.l,l=s.n;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Dl().f6(a,o)===u}else return!1}else return e===null?t===null:ua(e,t)}),F.mK=(function(e,t){if(t instanceof sa)return e.c===t.c;if(vf(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof V){var n=Da(t),r=n.l,i=n.n,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:ua(t,e)}else return e===null&&t===null}),new R().i(Pu,`scala.runtime.BoxesRunTime$`,{gF:1});var Iu;function W(){return Iu||=new Pu,Iu}var Lu=new R().i(0,`scala.runtime.Null$`,{gI:1});function Ru(){}F=Ru.prototype=new I,F.constructor=Ru;function zu(){}zu.prototype=F,F.dG=(function(e,t){if(e instanceof L||e instanceof Fa||e instanceof Ra||e instanceof Ia||e instanceof La)return e.a[t];if(e instanceof Ma)return Ta(e.a[t]);if(e instanceof Na||e instanceof Pa||e instanceof ja)return e.a[t];throw e===null?new c_:new y_(e)}),F.h1=(function(e,t,n){if(e instanceof L)e.a[t]=n;else if(e instanceof Fa)e.a[t]=n|0;else if(e instanceof Ra)e.a[t]=+n;else if(e instanceof Ia)e.a[t]=Da(n);else if(e instanceof La)e.a[t]=Math.fround(n);else if(e instanceof Ma)e.a[t]=Ea(n);else if(e instanceof Na)e.a[t]=n|0;else if(e instanceof Pa)e.a[t]=n|0;else if(e instanceof ja)e.a[t]=!!n;else if(e===null)throw new c_;else throw new y_(e)}),F.lU=(function(e){return Zl(e.dK(),e.cB()+`(`,`,`,`)`)}),F.q=(function(e){return e===null?null:e.a.length===0?Ab(Pb()):new iT(e)}),F.oC=(function(e){return e===null?null:new eT(e)}),new R().i(Ru,`scala.runtime.ScalaRunTime$`,{gK:1});var Bu;function G(){return Bu||=new Ru,Bu}function Vu(){}F=Vu.prototype=new I,F.constructor=Vu;function Hu(){}Hu.prototype=F,F.d=(function(e,t){var n=this.cy(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),F.cy=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),F.A=(function(e,t){return this.mi(e^t)}),F.mi=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),F.el=(function(e){var t=e.l,n=e.n;return n===t>>31?t:t^n}),F.bV=(function(e){var t=ha(e);if(t===e)return t;var n=Dl(),r=n.l6(e),i=n.Q;return Dl().f6(r,i)===e?r^i:vc().ht(e)}),F.M=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.bV(+e);if(e instanceof V){var t=Da(e);return this.el(new V(t.l,t.n))}else return da(e)}),F.f4=(function(e){throw r_(new i_,``+e)}),new R().i(Vu,`scala.runtime.Statics$`,{gM:1});var Uu;function K(){return Uu||=new Vu,Uu}function Wu(){}F=Wu.prototype=new I,F.constructor=Wu;function Gu(){}Gu.prototype=F,F.oe=(function(e,t){return setTimeout((()=>{t.af()}),e)}),new R().i(Wu,`scala.scalajs.js.timers.package$`,{gS:1});var Ku;function qu(){return Ku||=new Wu,Ku}function Ju(){}F=Ju.prototype=new I,F.constructor=Ju;function Yu(){}Yu.prototype=F,F.oq=(function(e){if(e instanceof Cw)return e.fB;var t=[];return e.bI(new Y((e=>t.push(e)|0))),t}),new R().i(Ju,`scala.scalajs.runtime.Compat$`,{h1:1});var Xu;function Zu(){return Xu||=new Ju,Xu}function Qu(){}F=Qu.prototype=new I,F.constructor=Qu;function $u(){}$u.prototype=F,F.of=(function(e){var t=`Illegal command line`+(e.kY()===0?``:e.kY()===1?` after first argument`:` after `+e.kY()+` arguments`)+`: `+e.p8();Bf().nS().ns(t+`
`)}),new R().i(Qu,`scala.util.CommandLineParser$`,{h3:1});function ed(e){this.gV=null,this.gV=e}F=ed.prototype=new I,F.constructor=ed;function td(){}td.prototype=F,F.E=(function(){return`DynamicVariable(`+this.gV+`)`}),new R().i(ed,`scala.util.DynamicVariable`,{h5:1});function nd(){}F=nd.prototype=new I,F.constructor=nd;function rd(){}rd.prototype=F,F.d=(function(e,t){var n=this.cy(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),F.cy=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),F.A=(function(e,t){return this.bo(e^t)}),F.bo=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),F.lm=(function(e,t,n){var r=n;return r=this.d(r,ib(`Tuple2`)),r=this.d(r,e),r=this.d(r,t),this.A(r,2)}),F.hw=(function(e,t,n){var r=e.cz();if(r===0)return ib(e.cB());var i=t;n||(i=this.d(i,ib(e.cB())));for(var a=0;a<r;)i=this.d(i,K().M(e.cA(a))),a=1+a|0;return this.A(i,r)}),F.hz=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.j();o.k();){var s=o.f(),c=K().M(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.d(l,n),l=this.d(l,r),l=this.cy(l,a),this.A(l,i)}),F.nR=(function(e,t){var n=e.j(),r=t;if(!n.k())return this.A(r,0);var i=n.f();if(!n.k())return this.A(this.d(r,K().M(i)),1);var a=n.f(),o=K().M(i);r=this.d(r,o);for(var s=r,c=K().M(a),l=c-o|0,u=2;n.k();){r=this.d(r,c);var d=K().M(n.f());if(l!==(d-c|0)||l===0){for(r=this.d(r,d),u=1+u|0;n.k();)r=this.d(r,K().M(n.f())),u=1+u|0;return this.A(r,u)}c=d,u=1+u|0}return this.bo(this.d(this.d(s,l),c))}),F.km=(function(e,t){var n=t,r=hl().bJ(e);switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,K().M(G().dG(e,0))),1);default:var i=K().M(G().dG(e,0));n=this.d(n,i);for(var a=n,o=K().M(G().dG(e,1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=K().M(G().dG(e,c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,K().M(G().dG(e,c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.nX=(function(e,t,n,r){return this.bo(this.d(this.d(this.d(r,e),t),n))}),F.nn=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,K().M(e.t(0))),1);default:var i=K().M(e.t(0));n=this.d(n,i);for(var a=n,o=K().M(e.t(1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=K().M(e.t(c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,K().M(e.t(c))),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.nu=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.b();){var l=c.v(),u=c.r(),d=K().M(l);switch(r=this.d(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.nX(s,a,o,t):this.A(r,n)}),F.kv=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.d(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]?1231:1237),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.kn=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.ko=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.kp=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,K().bV(e.a[0])),1);default:var i=K().bV(e.a[0]);n=this.d(n,i);for(var a=n,o=K().bV(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=K().bV(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,K().bV(e.a[c])),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.kq=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,K().bV(e.a[0])),1);default:var i=K().bV(e.a[0]);n=this.d(n,i);for(var a=n,o=K().bV(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=K().bV(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,K().bV(e.a[c])),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.kr=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.ks=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:var i=n,a=e.a[0];return this.A(this.d(i,K().el(new V(a.l,a.n))),1);default:var o=e.a[0],s=K().el(new V(o.l,o.n));n=this.d(n,s);for(var c=n,l=e.a[1],u=K().el(new V(l.l,l.n)),d=u-s|0,f=2;f<r;){n=this.d(n,u);var p=e.a[f],m=K().el(new V(p.l,p.n));if(d!==(m-u|0)||d===0){for(n=this.d(n,m),f=1+f|0;f<r;){var h=n,g=e.a[f];n=this.d(h,K().el(new V(g.l,g.n))),f=1+f|0}return this.A(n,r)}u=m,f=1+f|0}return this.bo(this.d(this.d(c,d),u))}}),F.kt=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.A(n,r)}o=l,c=1+c|0}return this.bo(this.d(this.d(a,s),o))}}),F.ku=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.A(n,0);case 1:return this.A(this.d(n,0),1);default:n=this.d(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.d(n,a),o!==(-a|0)||o===0){for(n=this.d(n,0),s=1+s|0;s<r;)n=this.d(n,0),s=1+s|0;return this.A(n,r)}a=0,s=1+s|0}return this.bo(this.d(this.d(i,o),a))}});function id(e){this.dS=null,this.hJ=null,this.fV=!1,this.hJ=e,No(this),this.fV=!1}F=id.prototype=new I,F.constructor=id;function ad(){}ad.prototype=F,F.nT=(function(e){this.fV?(Lo(e),this.hJ.af()):Io(this,e)}),F.nt=(function(){Po(this),this.fV=!0}),new R().i(id,`com.raquo.airstream.ownership.OneTimeOwner`,{cd:1,ce:1});function od(){}F=od.prototype=new I,F.constructor=od;function sd(){}sd.prototype=F,F.mB=(function(e){return e!==null}),F.mI=(function(e){return e?``:null}),F.ei=(function(e){return this.mB(e)}),F.dH=(function(e){return this.mI(!!e)}),new R().i(od,`com.raquo.laminar.codecs.package$$anon$1`,{cu:1,aj:1});function cd(e){if(e===null)throw new c_}F=cd.prototype=new I,F.constructor=cd;function ld(){}ld.prototype=F,F.dH=(function(e){return e}),F.ei=(function(e){return e}),new R().i(cd,`com.raquo.laminar.codecs.package$$anon$2`,{cv:1,aj:1});function ud(e){if(e===null)throw new c_}F=ud.prototype=new I,F.constructor=ud;function dd(){}dd.prototype=F,F.mA=(function(e){return uf().nU(e)}),F.ei=(function(e){return this.mA(e)}),F.dH=(function(e){return``+ +e}),new R().i(ud,`com.raquo.laminar.codecs.package$$anon$4`,{cw:1,aj:1});function fd(e,t,n,r){this.ih=null,this.ij=null,this.ii=null,this.g1=null,this.ih=t,this.ij=n,this.ii=r,this.g1=new md(r)}F=fd.prototype=new As,F.constructor=fd;function pd(){}pd.prototype=F,F.k8=(function(e){return new Op(this,(X().O.lT(),Os().l1(e,this.ii)))}),new R().i(fd,`com.raquo.laminar.keys.CompositeKey`,{cM:1,a7:1});function md(e){this.g2=null,this.g2=e}F=md.prototype=new I,F.constructor=md;function hd(){}hd.prototype=F,F.kD=(function(e){return Os().l1(e,this.g2)}),F.kF=(function(e){return Zl(e,``,this.g2,``)}),F.ei=(function(e){return this.kD(e)}),F.dH=(function(e){return this.kF(e)}),new R().i(md,`com.raquo.laminar.keys.CompositeKey$CompositeCodec`,{cO:1,aj:1});function gd(e){if(e===null)throw new c_}F=gd.prototype=new I,F.constructor=gd;function _d(){}_d.prototype=F,new R().i(gd,`com.raquo.laminar.keys.CompositeKey$CompositeValueMappers$StringValueMapper$`,{cQ:1,cP:1});function vd(e,t,n){return e.cE=t,e.dT=n,e}function yd(){this.cE=null,this.dT=null}F=yd.prototype=new As,F.constructor=yd;function bd(){}bd.prototype=F,F.K=(function(e){return new Ap(this,e,new Ig(((e,t,n)=>{es().lh(e,t,n)})))}),new R().i(yd,`com.raquo.laminar.keys.HtmlAttr`,{an:1,a7:1});function xd(e,t){this.il=null,this.ik=null,this.il=e,this.ik=t}F=xd.prototype=new As,F.constructor=xd;function Sd(){}Sd.prototype=F,F.K=(function(e){return new Ap(this,e,new Ig(((e,t,n)=>{es().o9(e,t,n)})))}),new R().i(xd,`com.raquo.laminar.keys.HtmlProp`,{cR:1,a7:1});function Cd(e,t,n){this.g4=null,this.g3=null,this.fi=null,this.fj=null,this.g4=e,this.g3=t;var r=n.b()?db():new fb(n.aF()+`:`+e);this.fi=r.b()?e:r.aF(),this.fj=n.b()?db():new fb(Ps().nD(n.aF()))}F=Cd.prototype=new As,F.constructor=Cd;function wd(){}wd.prototype=F,new R().i(Cd,`com.raquo.laminar.keys.SvgAttr`,{cS:1,a7:1});function Td(){}F=Td.prototype=new I,F.constructor=Td;function Ed(){}Ed.prototype=F,F.c6=(function(e){}),new R().i(Td,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cY:1,a2:1});function Dd(e,t){if(this.is=null,this.is=e,t===null)throw new c_}F=Dd.prototype=new I,F.constructor=Dd;function Od(){}Od.prototype=F,F.c6=(function(e){var t=fo(),n=(()=>{this.is.h(e)});if(fo(),t.bL)n();else{t.bL=!0;try{n()}finally{t.bL=!1,so(t)}}}),new R().i(Dd,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cZ:1,a2:1});function kd(){}F=kd.prototype=new I,F.constructor=kd;function Ad(){}Ad.prototype=F,new R().i(kd,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{d2:1,d0:1});function jd(){}F=jd.prototype=new I,F.constructor=jd;function Md(){}Md.prototype=F,new R().i(jd,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{d4:1,d3:1});var Nd;function Pd(){return Nd||=new jd,Nd}function Fd(e,t){if(this.it=null,this.it=e,t===null)throw new c_}F=Fd.prototype=new I,F.constructor=Fd;function Id(){}Id.prototype=F,F.mh=(function(e){return this.it.h(e)}),new R().i(Fd,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{d7:1,d5:1});function Ld(e){e.kz(new wo(new jg((()=>{throw hm(new gm,`Attempting to use owner of unmounted element: `+Zl(es().mz(e.dL(),(es(),$())),``,` > `,``))}))))}function Rd(e,t,n){return e.g9=t,e}function zd(){this.g9=null}F=zd.prototype=new I,F.constructor=zd;function Bd(){}Bd.prototype=F,F.hp=(function(){return this.g9}),F.dg=(function(e){var t=this.mk();return e.bI(new Z((e=>{e.c6(t)}))),t}),F.mk=(function(){return new Wy(this,es().mu(this))}),new R().i(zd,`com.raquo.laminar.tags.HtmlTag`,{aS:1,au:1});function Vd(e,t){this.iA=null,this.iA=e}F=Vd.prototype=new I,F.constructor=Vd;function Hd(){}Hd.prototype=F,new R().i(Vd,`com.raquo.laminar.tags.SvgTag`,{dg:1,au:1});function Ud(){}F=Ud.prototype=new I,F.constructor=Ud;function Wd(){}Wd.prototype=F,F.dH=(function(e){return e}),F.ei=(function(e){return e}),new R().i(Ud,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{dr:1,aj:1});function Gd(e,t){return e.dZ=t,e.fG(),e}function Kd(){this.dZ=null,this.dW=null,this.dX=!1,this.dY=null,this.e0=!1,this.e1=null,this.e2=!1}F=Kd.prototype=new I,F.constructor=Kd;function qd(){}qd.prototype=F,F.nl=(function(){return this.dX||=(this.dW=X().O.hl(),!0),this.dW}),F.om=(function(){return this.e0||=(this.dY=new Pp(this.dZ,ac().lR(),(ac(),void 0)),!0),this.dY}),F.aR=(function(e,t){var n=this.om().dg(G().q(new(Ls.r()).C([])));return e.bI(new Z((e=>{e.h(this).c6(n)}))),t.bI(new Z((e=>{e.c6(n)}))),n}),F.or=(function(){return this.e2||=(this.e1=new um,!0),this.e1});function Jd(e){return(32&e.fl)<<24>>24||(e.ga=new Fa(new Int32Array([1632,1776,1984,2406,2534,2662,2790,2918,3046,3174,3302,3430,3558,3664,3792,3872,4160,4240,6112,6160,6470,6608,6784,6800,6992,7088,7232,7248,42528,43216,43264,43472,43504,43600,44016,65296,66720,68912,69734,69872,69942,70096,70384,70736,70864,71248,71360,71472,71904,72016,72784,73040,73120,73552,92768,92864,93008,120782,120792,120802,120812,120822,123200,123632,124144,125264,130032])),e.fl=(32|e.fl)<<24>>24),e.ga}function Yd(e){return(32&e.fl)<<24>>24?e.ga:Jd(e)}function Xd(){this.ga=null,this.fl=0}F=Xd.prototype=new I,F.constructor=Xd;function Zd(){}Zd.prototype=F,F.mC=(function(e,t){if(e<256)var n=e>=48&&e<=57?-48+e|0:e>=65&&e<=90?-55+e|0:e>=97&&e<=122?-87+e|0:-1;else if(e>=65313&&e<=65338)var n=-65303+e|0;else if(e>=65345&&e<=65370)var n=-65335+e|0;else{var r=B().mj(Yd(this),e),i=r<0?-2-r|0:r;if(i<0)var n=-1;else var a=e-Yd(this).a[i]|0,n=a>9?-1:a}return n<t?n:-1}),new R().i(Xd,`java.lang.Character$`,{dz:1,a:1});var Qd;function $d(){return Qd||=new Xd,Qd}function ef(e){return(1&e.cF)<<24>>24||(e.gd=RegExp(`^[\\x00-\\x20]*([+-]?(?:NaN|Infinity|(?:\\d+\\.?\\d*|\\.\\d+)(?:[eE][+-]?\\d+)?)[fFdD]?)[\\x00-\\x20]*$`),e.cF=(1|e.cF)<<24>>24),e.gd}function tf(e){return(1&e.cF)<<24>>24?e.gd:ef(e)}function nf(e){return(2&e.cF)<<24>>24||(e.gc=RegExp(`^[\\x00-\\x20]*([+-]?)0[xX]([0-9A-Fa-f]*)\\.?([0-9A-Fa-f]*)[pP]([+-]?\\d+)[fFdD]?[\\x00-\\x20]*$`),e.cF=(2|e.cF)<<24>>24),e.gc}function rf(e){return(2&e.cF)<<24>>24?e.gc:nf(e)}function af(e,t){var n=rf(e).exec(t);n===null&&of(t);var r=n[1],i=n[2],a=n[3],o=n[4];i===``&&a===``&&of(t);var s=e.nV(i,a,o,15);return r===`-`?-s:s}function of(e){throw new rb(`For input string: "`+e+`"`)}function sf(){this.gd=null,this.gc=null,this.cF=0}F=sf.prototype=new I,F.constructor=sf;function cf(){}cf.prototype=F,F.nU=(function(e){var t=tf(this).exec(e);return t===null?af(this,e):+parseFloat(t[1])}),F.nV=(function(e,t,n,r){for(var i=``+e+t,a=-(t.length<<2)|0,o=0;o!==i.length&&i.charCodeAt(o)===48;)o=1+o|0;var s=o,c=i.substring(s);if(c===``)return 0;var l=c.length,u=l>r;if(u){for(var d=!1,f=r;!d&&f!==l;)c.charCodeAt(f)!==48&&(d=!0),f=1+f|0;var p=d?`1`:`0`,m=c.substring(0,r)+p}else var m=c;var h=a+(u?(c.length-(1+r|0)|0)<<2:0)|0,g=+parseInt(m,16),_=ha(+parseInt(n,10))+h|0,v=_/3|0,y=+(2**v),b=_-(v<<1)|0;return g*y*y*+(2**b)}),new R().i(sf,`java.lang.Double$`,{dB:1,a:1});var lf;function uf(){return lf||=new sf,lf}function df(e){throw new rb(`For input string: "`+e+`"`)}function ff(){}F=ff.prototype=new I,F.constructor=ff;function pf(){}pf.prototype=F,F.l9=(function(e,t){var n=e===null?0:e.length;(n===0||t<2||t>36)&&df(e);var r=e.charCodeAt(0),i=r===45,a=i?2147483648:2147483647,o=i||r===43?1:0;o>=e.length&&df(e);for(var s=0;o!==n;){var c=$d().mC(e.charCodeAt(o),t);s=s*t+c,(c===-1||s>a)&&df(e),o=1+o|0}return i?-s|0:s|0}),F.dh=(function(e){var t=e-(1431655765&e>>1)|0,n=(858993459&t)+(858993459&t>>2)|0;return Math.imul(16843009,252645135&(n+(n>>4)|0))>>24}),new R().i(ff,`java.lang.Integer$`,{dG:1,a:1});var mf;function hf(){return mf||=new ff,mf}function gf(){}F=gf.prototype=new I,F.constructor=gf;function _f(){}_f.prototype=F;function vf(e){return e instanceof gf||typeof e==`number`||e instanceof V}function yf(e,t,n,r,i){this.e4=null,this.eu=null,this.e5=null,this.e6=0,this.e3=0,this.e4=e,this.eu=t,this.e5=n,this.e6=r,this.e3=i}F=yf.prototype=new I,F.constructor=yf;function bf(){}bf.prototype=F,F.u=(function(e){return e instanceof yf&&this.e5===e.e5&&this.e6===e.e6&&this.e3===e.e3&&this.e4===e.e4&&this.eu===e.eu}),F.E=(function(){var e=``;return this.e4!==`<jscode>`&&(e=``+e+this.e4+`.`),e=``+e+this.eu,this.e5===null?e+=`(Unknown Source)`:(e=e+`(`+this.e5,this.e6>=0&&(e=e+`:`+this.e6,this.e3>=0&&(e=e+`:`+this.e3)),e+=`)`),e}),F.y=(function(){return ib(this.e4)^ib(this.eu)^ib(this.e5)^this.e6^this.e3});var xf=new R().i(yf,`java.lang.StackTraceElement`,{b3:1,a:1});function Sf(){}F=Sf.prototype=new I,F.constructor=Sf;function Cf(){}Cf.prototype=F,F.nE=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new sb;for(var i=``,a=t;a!==r;)i+=``+ga(e.a[a]),a=1+a|0;return i}),new R().i(Sf,`java.lang.String$`,{dR:1,a:1});var wf;function Tf(){return wf||=new Sf,wf}function Ef(e,t,n,r,i){return e.jg=t,e.jh=i,i&&e.mZ(),e}var Df=class extends Error{constructor(){super(),this.jg=null,this.jh=!1,this.jf=null,this.fn=null}f2(){return this.jg}mZ(){var e=this instanceof Gx?this.bT:this;return this.jf=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}ng(){return this.fn===null&&(this.jh?this.fn=Uc().mX(this.jf):this.fn=new(xf.r()).C(0)),this.fn}E(){var e=la(this),t=this.f2();return t===null?e:e+`: `+t}y(){return ka.prototype.y.call(this)}u(e){return ka.prototype.u.call(this,e)}get message(){var e=this.f2();return e===null?``:e}get name(){return la(this)}toString(){return this.E()}};function Of(){this.dv=null,Af=this,this.dv=new p_}F=Of.prototype=new I,F.constructor=Of;function kf(){}kf.prototype=F,new R().i(Of,`scala.$less$colon$less$`,{e5:1,a:1});var Af;function jf(){return Af||=new Of,Af}function Mf(e,t,n,r,i,a){for(var o=n,s=i,c=n+a|0;o<c;)G().h1(r,s,G().dG(t,o)),o=1+o|0,s=1+s|0}function Nf(){}F=Nf.prototype=new I,F.constructor=Nf;function Pf(){}Pf.prototype=F,F.kQ=(function(e,t){var n=e.x();if(n>-1){for(var r=t.b9(n),i=e.j(),a=0;a<n;)G().h1(r,a,i.f()),a=1+a|0;return r}else{var o=null,s=t.aG(),c=s===Va.l();o=[];for(var l=e.j();l.k();){var u=l.f(),d=c?Ea(u):u===null?s.N.z:u;o.push(d)}return(s===za.l()?ul.l():s===Lu.l()||s===vh.l()?z.l():s).N.r().w(o)}}),F.eX=(function(e,t,n,r,i){var a=ca(e);a.N.Z&&ca(n).N.R(a.N)?e.s(t,n,r,i):Mf(this,e,t,n,r,i)}),F.kN=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!W().o(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new R().i(Nf,`scala.Array$`,{e7:1,a:1});var Ff;function If(){return Ff||=new Nf,Ff}function Lf(){this.jj=null,zf=this,this.jj=new ed(Zc().jd)}F=Lf.prototype=new I,F.constructor=Lf;function Rf(){}Rf.prototype=F,F.nS=(function(){return this.jj.gV}),new R().i(Lf,`scala.Console$`,{e9:1,ga:1});var zf;function Bf(){return zf||=new Lf,zf}function Vf(){}F=Vf.prototype=new I,F.constructor=Vf;function Hf(){}Hf.prototype=F,F.E=(function(){return`<function1>`});function Uf(){}F=Uf.prototype=new Pl,F.constructor=Uf;function Wf(){}Wf.prototype=F,F.oD=(function(e){return e===null?null:e.a.length===0?ox().jQ:new AT(e)});function Gf(){}F=Gf.prototype=new I,F.constructor=Gf;function Kf(){}Kf.prototype=F,F.cu=(function(e){return e===null?db():new fb(e)}),new R().i(Gf,`scala.Option$`,{eg:1,a:1});var qf;function Jf(){return qf||=new Gf,qf}function Yf(){}F=Yf.prototype=new yu,F.constructor=Yf;function Xf(){}Xf.prototype=F;function Zf(e,t){if(t===e)e.aV(dy().kR(t));else for(var n=t.j();n.k();)e.aQ(n.f());return e}function Qf(){this.lG=null,this.lP=null,this.lH=null,this.lK=null,this.lL=null,this.lJ=null,this.lI=null,this.lF=null,this.lQ=null,this.lD=null,this.lO=null,this.lE=null,this.lM=null,this.lN=null,ep=this,this.lG=MS(),this.lP=mC(),this.lH=IS(),this.lK=JS(),this.lL=QS(),this.lJ=WS(),this.lI=BS(),this.lF=OS(),this.lQ=vC(),this.lD=wS(),this.lO=uC(),this.lE=uC(),this.lM=nC(),this.lN=oC()}F=Qf.prototype=new I,F.constructor=Qf;function $f(){}$f.prototype=F,F.kk=(function(e){return e===Ha.l()?MS():e===Ua.l()?mC():e===Va.l()?IS():e===Wa.l()?JS():e===Ga.l()?QS():e===Ka.l()?WS():e===qa.l()?BS():e===Ba.l()?OS():e===za.l()?vC():e===z.l()?uC():e===vh.l()?nC():e===Lu.l()?oC():new px(e)}),new R().i(Qf,`scala.reflect.ClassTag$`,{gc:1,a:1});var ep;function tp(){return ep||=new Qf,ep}function np(){}F=np.prototype=new I,F.constructor=np;function rp(){}rp.prototype=F,F.E=(function(){return`<function0>`});function ip(){}F=ip.prototype=new I,F.constructor=ip;function ap(){}ap.prototype=F,F.E=(function(){return`<function1>`});function op(){}F=op.prototype=new I,F.constructor=op;function sp(){}sp.prototype=F,F.E=(function(){return`<function2>`});function cp(){}F=cp.prototype=new I,F.constructor=cp;function lp(){}lp.prototype=F,F.E=(function(){return`<function3>`});function up(e){this.fz=!1,this.fz=e}F=up.prototype=new I,F.constructor=up;function dp(){}dp.prototype=F,F.E=(function(){return``+this.fz}),new R().i(up,`scala.runtime.BooleanRef`,{gE:1,a:1});function fp(e){this.dE=0,this.dE=e}F=fp.prototype=new I,F.constructor=fp;function pp(){}pp.prototype=F,F.E=(function(){return``+this.dE}),new R().i(fp,`scala.runtime.IntRef`,{gG:1,a:1});function mp(e){this.fA=null,this.fA=e}F=mp.prototype=new I,F.constructor=mp;function hp(){}hp.prototype=F,F.E=(function(){return``+this.fA}),new R().i(mp,`scala.runtime.ObjectRef`,{gJ:1,a:1});function gp(){this.ae=0,this.dc=0,this.k6=0,this.gW=0,vp=this,this.ae=ib(`Seq`),this.dc=ib(`Map`),this.k6=ib(`Set`),this.gW=this.hz($(),this.dc)}F=gp.prototype=new rd,F.constructor=gp;function _p(){}_p.prototype=F,F.c0=(function(e,t){return this.lm(K().M(e),K().M(t),-889275714)}),F.lg=(function(e){return NC(e)?this.nn(e,this.ae):e instanceof fT?this.nu(e,this.ae):this.nR(e,this.ae)}),F.nA=(function(e){if(e.b())return this.gW;var t=new yp,n=this.dc;return e.dI(t),n=this.d(n,t.fC),n=this.d(n,t.fD),n=this.cy(n,t.fE),this.A(n,t.fF)}),new R().i(gp,`scala.util.hashing.MurmurHash3$`,{h7:1,h6:1});var vp;function q(){return vp||=new gp,vp}function yp(){this.fC=0,this.fD=0,this.fF=0,this.fE=0,this.fC=0,this.fD=0,this.fF=0,this.fE=1}F=yp.prototype=new I,F.constructor=yp;function bp(){}bp.prototype=F,F.E=(function(){return`<function2>`}),F.mg=(function(e,t){var n=q().c0(e,t);this.fC=this.fC+n|0,this.fD^=n,this.fE=Math.imul(this.fE,1|n),this.fF=1+this.fF|0}),F.ct=(function(e,t){this.mg(e,t)}),new R().i(yp,`scala.util.hashing.MurmurHash3$accum$1`,{h8:1,ax:1});var xp=class extends Df{};function Sp(){this.fS=null,this.hC=null,this.hD=null,wp=this,this.fS=dy().kl(G().q(new(Ml.r()).C([]))),this.hC=new Z((e=>{try{console.error(this.nc(e)+`
`+this.nf(e,`
`))}catch(e){var t=e instanceof Df?e:new Gx(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.hD=new Z((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Gx?t.bT:t})),this.nY(this.hC)}F=Sp.prototype=new I,F.constructor=Sp;function Cp(){}Cp.prototype=F,F.nc=(function(e){try{var t=e.f2()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return ca(e).hi()+`: `+t}),F.nf=(function(e,t){try{return Zl(Sm().oD(e.ng()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),F.nY=(function(e){this.fS.aQ(e)}),F.f8=(function(e){for(var t=this.fS.j();t.k();){var n=t.f();try{n.h(e)}catch(e){var r=e instanceof Df?e:new Gx(e),i=this.hD;if(n===null?i===null:n.u(i))throw r instanceof Gx?r.bT:r;console.warn(`Error processing an unhandled error callback:`),qu().oe(0,new jg((e=>(()=>{throw e instanceof Gx?e.bT:e}))(r)))}}}),new R().i(Sp,`com.raquo.airstream.core.AirstreamError$`,{c0:1,g8:1,g9:1});var wp;function Tp(){return wp||=new Sp,wp}function Ep(e,t,n){return new Rh(n.mh(t))}function Dp(e,t,n,r){return new Dd(new Z((e=>{(os(),new ts(t,null,null)).bI(new Z((e=>(t=>{n.h(t).c6(e)}))(e)))})),Vs())}function Op(e,t){this.io=null,this.g5=null,this.io=e,this.g5=t}F=Op.prototype=new I,F.constructor=Op;function kp(){}kp.prototype=F,F.c6=(function(e){this.g5.b()||Hg(e,this.io,null,this.g5,$())}),new R().i(Op,`com.raquo.laminar.modifiers.CompositeKeySetter`,{cV:1,a2:1,aP:1});function Ap(e,t,n){this.iq=null,this.ir=null,this.ip=null,this.iq=e,this.ir=t,this.ip=n}F=Ap.prototype=new I,F.constructor=Ap;function jp(){}jp.prototype=F,F.c6=(function(e){this.ip.mf(e,this.iq,this.ir)}),new R().i(Ap,`com.raquo.laminar.modifiers.KeySetter`,{cW:1,a2:1,aP:1});function Mp(e,t){if(this.g7=null,this.iv=null,this.iw=null,this.iv=t,Ld(this),e===null)throw hm(new gm,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!es().nr(e,document))throw hm(new gm,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.iw=e,this.nC()}F=Mp.prototype=new I,F.constructor=Mp;function Np(){}Np.prototype=F,F.fL=(function(){return this.g7}),F.kz=(function(e){this.g7=e}),F.nC=(function(){return this.g7.k9(),$s().fI(this,this.iv,void 0)}),F.dL=(function(){return this.iw}),new R().i(Mp,`com.raquo.laminar.nodes.RootNode`,{db:1,at:1,aR:1});function Pp(e,t,n){this.g9=null,this.iz=null,this.iz=e,Rd(this,e,!1)}F=Pp.prototype=new Bd,F.constructor=Pp;function Fp(){}Fp.prototype=F,F.hp=(function(){return this.iz}),new R().i(Pp,`com.raquo.laminar.tags.CustomHtmlTag`,{de:1,aS:1,au:1});function Ip(){this.dZ=null,this.dW=null,this.dX=!1,this.dY=null,this.e0=!1,this.e1=null,this.e2=!1,this.iB=null,this.iC=!1,Gd(this,`wa-button`)}F=Ip.prototype=new qd,F.constructor=Ip;function Lp(){}Lp.prototype=F,F.mc=(function(){return this.iC||=(this.iB=qp(),!0),this.iB}),F.fG=(function(){return vn}),new R().i(Ip,`io.github.nguyenyou.webawesome.laminar.Button$`,{di:1,ap:1,ao:1});var Rp;function zp(){return Rp||=new Ip,Rp}function Bp(){this.cE=null,this.dT=null,this.iD=null,this.iE=!1,vd(this,`tooltip`,new Ud)}F=Bp.prototype=new bd,F.constructor=Bp;function Vp(){}Vp.prototype=F,F.nQ=(function(){return this.iE||=(this.iD=Up().K(`none`),!0),this.iD}),new R().i(Bp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$CopyButtonTooltip$`,{dj:1,an:1,a7:1});var Hp;function Up(){return Hp||=new Bp,Hp}function Wp(){this.cE=null,this.dT=null,this.iF=null,this.iG=!1,vd(this,`appearance`,new Ud)}F=Wp.prototype=new bd,F.constructor=Wp;function Gp(){}Gp.prototype=F,F.n0=(function(){return this.iG||=(this.iF=qp().K(`filled`),!0),this.iF}),new R().i(Wp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{dk:1,an:1,a7:1});var Kp;function qp(){return Kp||=new Wp,Kp}function Jp(){this.cE=null,this.dT=null,this.iH=null,this.iI=!1,vd(this,`type`,new Ud)}F=Jp.prototype=new bd,F.constructor=Jp;function Yp(){}Yp.prototype=F,F.oo=(function(){return this.iI||=(this.iH=Zp().K(`text`),!0),this.iH}),new R().i(Jp,`io.github.nguyenyou.webawesome.laminar.CommonKeys$InputInputType$`,{dl:1,an:1,a7:1});var Xp;function Zp(){return Xp||=new Jp,Xp}function Qp(){this.dZ=null,this.dW=null,this.dX=!1,this.dY=null,this.e0=!1,this.e1=null,this.e2=!1,this.iX=null,this.iY=!1,this.iR=null,this.iS=!1,this.iL=null,this.iM=!1,this.iJ=null,this.iK=!1,this.iT=null,this.iU=!1,this.iN=null,this.iO=!1,this.iP=null,this.iQ=!1,this.iV=null,this.iW=!1,Gd(this,`wa-copy-button`)}F=Qp.prototype=new qd,F.constructor=Qp;function $p(){}$p.prototype=F,F.dN=(function(){return this.iY||=(this.iX=(X(),vd(new yd,`value`,ms().bb)),!0),this.iX}),F.fM=(function(){return this.iS||=(this.iR=(X(),vd(new yd,`from`,ms().bb)),!0),this.iR}),F.mD=(function(){return this.iM||=(this.iL=(X(),vd(new yd,`disabled`,ms().id)),!0),this.iL}),F.mt=(function(){return this.iK||=(this.iJ=(X(),vd(new yd,`copy-label`,ms().bb)),!0),this.iJ}),F.oj=(function(){return this.iU||=(this.iT=(X(),vd(new yd,`success-label`,ms().bb)),!0),this.iT}),F.mN=(function(){return this.iO||=(this.iN=(X(),vd(new yd,`error-label`,ms().bb)),!0),this.iN}),F.mY=(function(){return this.iQ||=(this.iP=(X(),vd(new yd,`feedback-duration`,ms().lS())),!0),this.iP}),F.os=(function(){return this.iW||=(this.iV=Up(),!0),this.iV}),F.fG=(function(){return Ji}),new R().i(Qp,`io.github.nguyenyou.webawesome.laminar.CopyButton$`,{dm:1,ap:1,ao:1});var em;function tm(){return em||=new Qp,em}function nm(){this.dZ=null,this.dW=null,this.dX=!1,this.dY=null,this.e0=!1,this.e1=null,this.e2=!1,this.j5=null,this.j6=!1,this.j7=null,this.j8=!1,Gd(this,`wa-icon`)}F=nm.prototype=new qd,F.constructor=nm;function rm(){}rm.prototype=F,F.em=(function(){return this.j6||=(this.j5=(X(),vd(new yd,`name`,ms().bb)),!0),this.j5}),F.hB=(function(){return this.j8||=(this.j7=(X(),vd(new yd,`variant`,ms().bb)),!0),this.j7}),F.fG=(function(){return Yi}),new R().i(nm,`io.github.nguyenyou.webawesome.laminar.Icon$`,{dp:1,ap:1,ao:1});var im;function am(){return im||=new nm,im}function om(){this.dZ=null,this.dW=null,this.dX=!1,this.dY=null,this.e0=!1,this.e1=null,this.e2=!1,this.j9=null,this.ja=!1,Gd(this,`wa-input`)}F=om.prototype=new qd,F.constructor=om;function sm(){}sm.prototype=F,F.ot=(function(){return this.ja||=(this.j9=Zp(),!0),this.j9}),F.fG=(function(){return aa}),new R().i(om,`io.github.nguyenyou.webawesome.laminar.Input$`,{dq:1,ap:1,ao:1});var cm;function lm(){return cm||=new om,cm}function um(){}F=um.prototype=new Hf,F.constructor=um;function dm(){}dm.prototype=F,F.h=(function(e){return X().O}),new R().i(um,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{ds:1,ea:1,f:1});function fm(e){if(e.N.Z)return e.N.Q().hi()+`[]`;for(var t=e.N.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function pm(e){this.gb=null,this.N=e}F=pm.prototype=new I,F.constructor=pm;function mm(){}mm.prototype=F,F.E=(function(){return(this.N.Y?`interface `:this.N.X?``:`class `)+this.N.N}),F.hi=(function(){return this.gb===null&&(this.gb=fm(this)),this.gb}),new R().i(pm,`java.lang.Class`,{dA:1,a:1,W:1});function hm(e,t){return Ef(e,t,null,!0,!0),e}var gm=class extends Df{};new R().i(gm,`java.lang.Exception`,{C:1,w:1,a:1});function _m(){}F=_m.prototype=new I,F.constructor=_m;function vm(){}vm.prototype=F;function ym(){this.lC=null,xm=this,this.lC=sh()}F=ym.prototype=new Wf,F.constructor=ym;function bm(){}bm.prototype=F,F.o3=(function(e){if(!e)throw $g(new t_,`requirement failed`)}),new R().i(ym,`scala.Predef$`,{ej:1,ec:1,ed:1});var xm;function Sm(){return xm||=new ym,xm}function Cm(e,t){switch(t){case 0:return e.b2();case 1:return e.b0();default:throw r_(new i_,t+` is out of bounds (min 0, max 1)`)}}function wm(e,t){return e.ex=t,e}function Tm(){this.ex=null}F=Tm.prototype=new I,F.constructor=Tm;function Em(){}Em.prototype=F,F.av=(function(e){return this.ex.ha(e,wS())}),F.aS=(function(){return this.ex.fP(wS())}),F.cv=(function(e){return this.ex.ha(e,wS())});function Dm(e,t){return e.fp=t,e}function Om(){this.fp=null}F=Om.prototype=new I,F.constructor=Om;function km(){}km.prototype=F,F.av=(function(e){return this.fp.av(e)}),F.aS=(function(){return this.fp.aS()});function Am(e,t){if(t<0)return 1;var n=e.x();if(n>=0)return n===t?0:n<t?-1:1;for(var r=0,i=e.j();i.k();){if(r===t)return 1;i.f(),r=1+r|0}return r-t|0}function jm(e,t){return new z_(e).h3(t)}function Mm(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?J().G:new U_(e,r,i)}function Nm(e,t){for(var n=t.j();e.k()&&n.k();)if(!W().o(e.f(),n.f()))return!1;return e.k()===n.k()}function Pm(){this.G=null,Im=this,this.G=new k_}F=Pm.prototype=new I,F.constructor=Pm;function Fm(){}Fm.prototype=F,F.aS=(function(){return new Cb}),F.av=(function(e){return e.j()}),new R().i(Pm,`scala.collection.Iterator$`,{eD:1,J:1,a:1});var Im;function J(){return Im||=new Pm,Im}function Lm(e,t){return e.gx=t,e}function Rm(){this.gx=null}F=Rm.prototype=new I,F.constructor=Rm;function zm(){}zm.prototype=F,F.av=(function(e){return this.gx.av(e)});function Bm(){}F=Bm.prototype=new I,F.constructor=Bm;function Vm(){}Vm.prototype=F,F.kS=(function(e){return Ix(e)?e:O_(e)?new xC(new ph((e=>(()=>e.j()))(e))):LC(new RC,Tg().hc(e))}),F.aS=(function(){return new Eg((ay(),new oy),new Y((e=>Um().kS(e))))}),F.av=(function(e){return this.kS(e)}),new R().i(Bm,`scala.collection.View$`,{eQ:1,J:1,a:1});var Hm;function Um(){return Hm||=new Bm,Hm}function Wm(e,t,n,r,i,a){this.U=0,this.ab=0,this.ag=null,this.be=null,this.aI=0,this.b3=0,this.U=e,this.ab=t,this.ag=n,this.be=r,this.aI=i,this.b3=a}F=Wm.prototype=new Xf,F.constructor=Wm;function Gm(){}Gm.prototype=F,F.aH=(function(){return this.aI}),F.dj=(function(){return this.b3}),F.dl=(function(e){return this.ag.a[e<<1]}),F.cx=(function(e){return this.ag.a[1+(e<<1)|0]}),F.kW=(function(e){return new Q(this.ag.a[e<<1],this.ag.a[1+(e<<1)|0])}),F.f1=(function(e){return this.be.a[e]}),F.cw=(function(e){return this.ag.a[(-1+this.ag.a.length|0)-e|0]}),F.gZ=(function(e,t,n,r){var i=H().dJ(n,r),a=H().di(i);if((this.U&a)!==0){var o=H().c9(this.U,i,a);if(W().o(e,this.dl(o)))return this.cx(o);throw new f_(`key not found: `+e)}else if((this.ab&a)!==0)return this.cw(H().c9(this.ab,i,a)).gZ(e,t,n,5+r|0);else throw new f_(`key not found: `+e)}),F.hg=(function(e,t,n,r,i){var a=H().dJ(n,r),o=H().di(a);if((this.U&o)!==0){var s=H().c9(this.U,a,o);return W().o(e,this.dl(s))?this.cx(s):i.af()}else return(this.ab&o)===0?i.af():this.cw(H().c9(this.ab,a,o)).hg(e,t,n,5+r|0,i)}),F.h4=(function(e,t,n,r){var i=H().dJ(n,r),a=H().di(i);if((this.U&a)!==0){var o=H().c9(this.U,i,a);return this.be.a[o]===t&&W().o(e,this.dl(o))}else return(this.ab&a)!==0&&this.cw(H().c9(this.ab,i,a)).h4(e,t,n,5+r|0)}),F.ln=(function(e,t,n,r,i,a){var o=H().dJ(r,i),s=H().di(o);if((this.U&s)!==0){var c=H().c9(this.U,o,s),l=this.dl(c),u=this.f1(c);if(u===n&&W().o(l,e))if(a){var d=this.cx(c);return Object.is(l,e)&&Object.is(d,t)?this:this.ms(s,e,t)}else return this;else{var f=this.cx(c),p=Kl().bW(u);return this.mq(s,p,this.ho(l,f,u,p,e,t,n,r,5+i|0))}}else if((this.ab&s)!==0){var m=H().c9(this.ab,o,s),h=this.cw(m),g=h.lo(e,t,n,r,5+i|0,a);return g===h?this:this.mr(s,h,g)}else return this.mp(s,e,n,r,t)}),F.ho=(function(e,t,n,r,i,a,o,s,c){if(c>=32)return new Km(n,r,Kv().hd(new Cw([new Q(e,t),new Q(i,a)])));var l=H().dJ(r,c),u=H().dJ(s,c),d=r+s|0;if(l!==u){var f=H().di(l)|H().di(u);return l<u?new Wm(f,0,new L([e,t,i,a]),new Fa(new Int32Array([n,o])),2,d):new Wm(f,0,new L([i,a,e,t]),new Fa(new Int32Array([o,n])),2,d)}else{var p=H().di(l),m=this.ho(e,t,n,r,i,a,o,s,5+c|0);return new Wm(0,p,new L([m]),jl().gk,m.aH(),m.dj())}}),F.hj=(function(){return this.ab!==0}),F.hr=(function(){return hf().dh(this.ab)}),F.fN=(function(){return this.U!==0}),F.hu=(function(){return hf().dh(this.U)}),F.eY=(function(e){return hf().dh(this.U&(-1+e|0))}),F.hs=(function(e){return hf().dh(this.ab&(-1+e|0))}),F.ms=(function(e,t,n){var r=this.eY(e)<<1,i=this.ag,a=new L(i.a.length),o=i.a.length;return i.s(0,a,0,o),a.a[1+r|0]=n,new Wm(this.U,this.ab,a,this.be,this.aI,this.b3)}),F.mr=(function(e,t,n){var r=(-1+this.ag.a.length|0)-this.hs(e)|0,i=this.ag,a=new L(i.a.length),o=i.a.length;return i.s(0,a,0,o),a.a[r]=n,new Wm(this.U,this.ab,a,this.be,(this.aI-t.aH()|0)+n.aH()|0,(this.b3-t.dj()|0)+n.dj()|0)}),F.mp=(function(e,t,n,r,i){var a=this.eY(e),o=a<<1,s=this.ag,c=new L(2+s.a.length|0);s.s(0,c,0,o),c.a[o]=t,c.a[1+o|0]=i;var l=2+o|0,u=s.a.length-o|0;s.s(o,c,l,u);var d=this.np(this.be,a,n);return new Wm(this.U|e,this.ab,c,d,1+this.aI|0,this.b3+r|0)}),F.nB=(function(e,t,n){var r=this.eY(e),i=r<<1,a=(-2+this.ag.a.length|0)-this.hs(e)|0,o=this.ag,s=new L(-1+o.a.length|0);o.s(0,s,0,i);var c=2+i|0,l=a-i|0;o.s(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.s(u,s,d,f);var p=this.la(this.be,r);return this.U^=e,this.ab|=e,this.ag=s,this.be=p,this.aI=(-1+this.aI|0)+n.aH()|0,this.b3=(this.b3-t|0)+n.dj()|0,this}),F.mq=(function(e,t,n){var r=this.eY(e),i=r<<1,a=(-2+this.ag.a.length|0)-this.hs(e)|0,o=this.ag,s=new L(-1+o.a.length|0);o.s(0,s,0,i);var c=2+i|0,l=a-i|0;o.s(c,s,i,l),s.a[a]=n;var u=2+a|0,d=1+a|0,f=-2+(o.a.length-a|0)|0;o.s(u,s,d,f);var p=this.la(this.be,r);return new Wm(this.U^e,this.ab|e,s,p,(-1+this.aI|0)+n.aH()|0,(this.b3-t|0)+n.dj()|0)}),F.dI=(function(e){for(var t=hf().dh(this.U),n=0;n<t;)e.ct(this.dl(n),this.cx(n)),n=1+n|0;for(var r=hf().dh(this.ab),i=0;i<r;)this.cw(i).dI(e),i=1+i|0}),F.u=(function(e){if(e instanceof Wm){if(this===e)return!0;if(this.b3===e.b3&&this.ab===e.ab&&this.U===e.U&&this.aI===e.aI&&B().h6(this.be,e.be)){var t=this.ag,n=e.ag,r=this.ag.a.length;if(t===n)return!0;for(var i=!0,a=0;i&&a<r;)i=W().o(t.a[a],n.a[a]),a=1+a|0;return i}else return!1}else return!1}),F.y=(function(){throw new u_(`Trie nodes do not support hashing.`)}),F.kA=(function(){for(var e=this.ag.e(),t=e.a.length,n=hf().dh(this.U)<<1;n<t;)e.a[n]=e.a[n].kB(),n=1+n|0;return new Wm(this.U,this.ab,e,this.be.e(),this.aI,this.b3)}),F.kB=(function(){return this.kA()}),F.lo=(function(e,t,n,r,i,a){return this.ln(e,t,n,r,i,a)}),F.hf=(function(e){return this.cw(e)}),new R().i(Wm,`scala.collection.immutable.BitmapIndexedMapNode`,{bu:1,bE:1,aG:1});function Km(e,t,n){this.gC=0,this.cQ=0,this.ac=null,this.gC=e,this.cQ=t,this.ac=n,Sm().o3(this.ac.p()>=2)}F=Km.prototype=new Xf,F.constructor=Km;function qm(){}qm.prototype=F,F.ek=(function(e){for(var t=this.ac.j(),n=0;t.k();){if(W().o(t.f().b2(),e))return n;n=1+n|0}return-1}),F.aH=(function(){return this.ac.p()}),F.gZ=(function(e,t,n,r){var i=this.na(e,t,n,r);if(i.b())throw J().G.f(),new Qg;return i.aF()}),F.na=(function(e,t,n,r){if(this.cQ===n){var i=this.ek(e);return i>=0?new fb(this.ac.t(i).b0()):db()}else return db()}),F.hg=(function(e,t,n,r,i){if(this.cQ===n){var a=this.ek(e);return a===-1?i.af():this.ac.t(a).b0()}else return i.af()}),F.h4=(function(e,t,n,r){return this.cQ===n&&this.ek(e)>=0}),F.lo=(function(e,t,n,r,i,a){var o=this.ek(e);return o>=0?a?Object.is(this.ac.t(o).b0(),t)?this:new Km(n,r,this.ac.dp(o,new Q(e,t))):this:new Km(n,r,this.ac.de(new Q(e,t)))}),F.hj=(function(){return!1}),F.hr=(function(){return 0}),F.cw=(function(e){throw r_(new i_,`No sub-nodes present in hash-collision leaf node.`)}),F.fN=(function(){return!0}),F.hu=(function(){return this.ac.p()}),F.dl=(function(e){return this.ac.t(e).b2()}),F.cx=(function(e){return this.ac.t(e).b0()}),F.kW=(function(e){return this.ac.t(e)}),F.f1=(function(e){return this.gC}),F.dI=(function(e){this.ac.bI(new Y((t=>{if(t!==null){var n=t.b2(),r=t.b0();return e.ct(n,r)}else throw new y_(t)})))}),F.u=(function(e){if(e instanceof Km){if(this===e)return!0;if(this.cQ===e.cQ&&this.ac.p()===e.ac.p()){for(var t=this.ac.j();t.k();){var n=t.f();if(n===null)throw new y_(n);var r=n.b2(),i=n.b0(),a=e.ek(r);if(a<0||!W().o(i,e.ac.t(a).b0()))return!1}return!0}else return!1}else return!1}),F.y=(function(){throw new u_(`Trie nodes do not support hashing.`)}),F.dj=(function(){return Math.imul(this.ac.p(),this.cQ)}),F.kB=(function(){return new Km(this.gC,this.cQ,this.ac)}),F.hf=(function(e){return this.cw(e)}),new R().i(Km,`scala.collection.immutable.HashCollisionMapNode`,{bw:1,bE:1,aG:1});function Jm(){this.gD=null,Xm=this,this.gD=new Tw(gu().jH)}F=Jm.prototype=new I,F.constructor=Jm;function Ym(){}Ym.prototype=F,F.n5=(function(e){return e instanceof Tw?e:new xv().gY(e).hy()}),F.av=(function(e){return this.n5(e)}),new R().i(Jm,`scala.collection.immutable.HashMap$`,{eX:1,aA:1,a:1});var Xm;function Zm(){return Xm||=new Jm,Xm}function Qm(e,t){this.jE=null,this.jF=null,this.jE=e,this.jF=t}F=Qm.prototype=new I,F.constructor=Qm;function $m(){}$m.prototype=F,F.v=(function(){return this.jE}),F.aB=(function(){return this.jF}),new R().i(Qm,`scala.collection.immutable.LazyList$State$Cons`,{f7:1,bz:1,a:1});function eh(){}F=eh.prototype=new I,F.constructor=eh;function th(){}th.prototype=F,F.hk=(function(){throw new f_(`head of empty lazy list`)}),F.aB=(function(){throw new u_(`tail of empty lazy list`)}),F.v=(function(){this.hk()}),new R().i(eh,`scala.collection.immutable.LazyList$State$Empty$`,{f8:1,bz:1,a:1});var nh;function rh(){return nh||=new eh,nh}function ih(){}F=ih.prototype=new I,F.constructor=ih;function ah(){}ah.prototype=F,F.n7=(function(e){return Lb(e)&&e.b()?sw():e instanceof Tw||e instanceof cw||e instanceof uw||e instanceof fw||e instanceof mw?e:new Bv().ka(e).lb()}),F.av=(function(e){return this.n7(e)}),new R().i(ih,`scala.collection.immutable.Map$`,{fb:1,aA:1,a:1});var oh;function sh(){return oh||=new ih,oh}function ch(e,t,n){var r=t.x();if(r!==-1){var i=r+n|0;e.aX(i<0?0:i)}}function lh(){}F=lh.prototype=new I,F.constructor=lh;function uh(){}uh.prototype=F,F.n8=(function(e){var t=e.x();return Nw(new Fw,t>0?ha((1+t|0)/.75):16,.75).kd(e)}),F.aS=(function(){return new fy(16,.75)}),F.av=(function(e){return this.n8(e)}),new R().i(lh,`scala.collection.mutable.HashSet$`,{fT:1,J:1,a:1});var dh;function fh(){return dh||=new lh,dh}function ph(e){this.jX=null,this.jX=e}F=ph.prototype=new rp,F.constructor=ph;function mh(){}mh.prototype=F,F.af=(function(){return(0,this.jX)()}),new R().i(ph,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{gA:1,bU:1,b6:1});function Y(e){this.jY=null,this.jY=e}F=Y.prototype=new ap,F.constructor=Y;function hh(){}hh.prototype=F,F.h=(function(e){return(0,this.jY)(e)}),new R().i(Y,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{gB:1,bV:1,f:1});function gh(e){this.jZ=null,this.jZ=e}F=gh.prototype=new sp,F.constructor=gh;function _h(){}_h.prototype=F,F.ct=(function(e,t){return(0,this.jZ)(e,t)}),new R().i(gh,`scala.runtime.AbstractFunction2.$$Lambda$286cbfc6187197affcadc8465aaec93d6b7d20dc`,{gC:1,bW:1,ax:1});var vh=new R().i(0,`scala.runtime.Nothing$`,{gH:1,w:1,a:1});function yh(){}F=yh.prototype=new I,F.constructor=yh;function bh(){}bh.prototype=F,F.n9=(function(e){return(t=>e.h(t))}),new R().i(yh,`scala.scalajs.js.Any$`,{gN:1,gO:1,gP:1});var xh;function Sh(){return xh||=new yh,xh}function Ch(){}F=Ch.prototype=new rp,F.constructor=Ch;function wh(){}wh.prototype=F;function Th(){}F=Th.prototype=new ap,F.constructor=Th;function Eh(){}Eh.prototype=F;function Dh(){}F=Dh.prototype=new sp,F.constructor=Dh;function Oh(){}Oh.prototype=F;function kh(){}F=kh.prototype=new lp,F.constructor=kh;function Ah(){}Ah.prototype=F;function jh(e,t,n,r){if(this.hE=null,r===null)throw new c_;this.hE=void 0}F=jh.prototype=new I,F.constructor=jh;function Mh(){}Mh.prototype=F,F.E=(function(){return Ya(this)}),new R().i(jh,`com.raquo.airstream.core.Observer$$anon$8`,{c4:1,c5:1,c1:1,c2:1});function Nh(e){if(this.hQ=null,this.hR=!1,this.lq=null,e===null)throw new c_;_s(this)}F=Nh.prototype=new I,F.constructor=Nh;function Ph(){}Ph.prototype=F,F.ol=(function(){return this.hR||=(this.hQ=new Vd(`svg`,!1),!0),this.hQ}),new R().i(Nh,`com.raquo.laminar.api.Laminar$svg$`,{co:1,cF:1,cy:1,cA:1});function Fh(){this.O=null,Lh=this,this.O=new BC}F=Fh.prototype=new I,F.constructor=Fh;function Ih(){}Ih.prototype=F,new R().i(Fh,`com.raquo.laminar.api.package$`,{cr:1,aN:1,aO:1,aM:1});var Lh;function X(){return Lh||=new Fh,Lh}function Rh(e){this.iy=null,this.g8=null,this.iy=db(),this.g8=es().mw(e)}F=Rh.prototype=new I,F.constructor=Rh;function zh(){}zh.prototype=F,F.li=(function(e){this.iy=e}),F.lp=(function(e){}),F.c6=(function(e){$s().fI(e,this,void 0)}),F.op=(function(){return this.g8.data}),F.dL=(function(){return this.g8}),new R().i(Rh,`com.raquo.laminar.nodes.TextNode`,{dd:1,at:1,a2:1,aQ:1});function Bh(){}F=Bh.prototype=new I,F.constructor=Bh;function Vh(){}Vh.prototype=F;function Hh(e,t){return e===t}function Uh(e){return e?1231:1237}var Wh=new R().i(0,`java.lang.Boolean`,{dx:1,a:1,a0:1,W:1},(e=>typeof e==`boolean`));function Gh(e){return e}function Kh(e,t){return t instanceof sa&&e===t.c}var qh=new R().i(0,`java.lang.Character`,{aY:1,a:1,a0:1,W:1},(e=>e instanceof sa));function Jh(e,t){return Ef(e,t,null,!0,!0),e}var Yh=class extends gm{};new R().i(Yh,`java.lang.RuntimeException`,{D:1,C:1,w:1,a:1});function Xh(e){return e.m=``,e}function Zh(e,t){if(Xh(e),t===null)throw new c_;return e.m=t,e}function Qh(){this.m=null}F=Qh.prototype=new I,F.constructor=Qh;function $h(){}$h.prototype=F,F.kg=(function(e){var t=Tf().nE(e,0,e.a.length);return this.m=``+this.m+t,this}),F.E=(function(){return this.m}),F.p=(function(){return this.m.length}),F.kw=(function(e){return this.m.charCodeAt(e)}),new R().i(Qh,`java.lang.StringBuilder`,{dS:1,av:1,aW:1,a:1});function eg(){}F=eg.prototype=new vm,F.constructor=eg;function tg(){}tg.prototype=F;function ng(){}F=ng.prototype=new I,F.constructor=ng;function rg(){}rg.prototype=F,F.E=(function(){return`<function1>`}),F.h0=(function(e){throw new y_(e)}),F.h=(function(e){this.h0(e)}),new R().i(ng,`scala.PartialFunction$$anon$1`,{ei:1,j:1,f:1,a:1});function ig(){}F=ig.prototype=new I,F.constructor=ig;function ag(){}ag.prototype=F,F.j=(function(){return this}),F.h3=(function(e){return jm(this,e)}),F.dk=(function(e){return this.f9(e,-1)}),F.f9=(function(e,t){return Mm(this,e,t)}),F.E=(function(){return`<iterator>`}),F.bx=(function(e,t,n){return Xl(this,e,t,n)}),F.dd=(function(e,t,n,r){return Ql(this,e,t,n,r)}),F.x=(function(){return-1});function og(){this.gx=null,this.jy=null,this.jz=null,Lm(this,sh()),cg=this,this.jy=Oa(new ka),this.jz=new ph((()=>lg().jy))}F=og.prototype=new zm,F.constructor=og;function sg(){}sg.prototype=F,new R().i(og,`scala.collection.Map$`,{eL:1,eM:1,aA:1,a:1});var cg;function lg(){return cg||=new og,cg}function ug(e,t){return e.e7=t,e}function dg(){this.e7=null}F=dg.prototype=new I,F.constructor=dg;function fg(){}fg.prototype=F,F.kl=(function(e){return this.e7.cv(e)}),F.kR=(function(e){return this.e7.av(e)}),F.aS=(function(){return this.e7.aS()}),F.av=(function(e){return this.kR(e)}),F.cv=(function(e){return this.kl(e)});function pg(e){return e.c8(new Y((e=>e)))}function mg(e,t){return e.eZ(new CC(e,t))}function hg(e){return e.bm(0)===0}function gg(e,t){var n=e.x();if(n!==-1)var r=t.x(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Nm(e.j(),t)}function _g(e,t){for(var n=e.b8().aS(),r=e.j();r.k();)n.aQ(t.h(r.f()));return n.aW()}function vg(){this.fp=null,Dm(this,Av())}F=vg.prototype=new km,F.constructor=vg;function yg(){}yg.prototype=F,F.n6=(function(e){return Lb(e)?e:Om.prototype.av.call(this,e)}),F.av=(function(e){return this.n6(e)}),new R().i(vg,`scala.collection.immutable.Iterable$`,{f2:1,eC:1,J:1,a:1});var bg;function xg(){return bg||=new vg,bg}function Sg(){this.fv=null,wg=this,this.fv=new xw(new ph((()=>rh()))).kP()}F=Sg.prototype=new I,F.constructor=Sg;function Cg(){}Cg.prototype=F,F.cv=(function(e){return this.hc(e)}),F.o7=(function(e,t){return new xw(new ph(((e,t)=>(()=>{for(var n=e.fA,r=t.dE;r>0&&!n.b();)n=n.B().aB(),e.fA=n,r=-1+r|0,t.dE=r;return n.B()}))(new mp(e),new fp(t))))}),F.hc=(function(e){return e instanceof xw?e:e.x()===0?this.fv:new xw(new ph((()=>Tg().ld(e.j()))))}),F.le=(function(e,t){return e.k()?new Qm(e.f(),new xw(new ph((()=>Tg().le(e,t))))):t.af()}),F.ld=(function(e){return e.k()?new Qm(e.f(),new xw(new ph((()=>Tg().ld(e))))):rh()}),F.aS=(function(){return new Cv}),F.av=(function(e){return this.hc(e)}),new R().i(Sg,`scala.collection.immutable.LazyList$`,{f3:1,Z:1,J:1,a:1});var wg;function Tg(){return wg||=new Sg,wg}function Eg(e,t){this.eI=null,this.jR=null,this.eI=e,this.jR=t}F=Eg.prototype=new I,F.constructor=Eg;function Dg(){}Dg.prototype=F,F.m7=(function(e){return this.eI.aQ(e),this}),F.lY=(function(e){return this.eI.aV(e),this}),F.aX=(function(e){this.eI.aX(e)}),F.aW=(function(){return this.jR.h(this.eI.aW())}),F.aV=(function(e){return this.lY(e)}),F.aQ=(function(e){return this.m7(e)}),new R().i(Eg,`scala.collection.mutable.Builder$$anon$1`,{fQ:1,L:1,H:1,F:1});function Og(e,t){return e.d8=t,e}function kg(){this.d8=null}F=kg.prototype=new I,F.constructor=kg;function Ag(){}Ag.prototype=F,F.aX=(function(e){}),F.m8=(function(e){return this.d8.aQ(e),this}),F.lZ=(function(e){return this.d8.aV(e),this}),F.aV=(function(e){return this.lZ(e)}),F.aQ=(function(e){return this.m8(e)}),F.aW=(function(){return this.d8}),new R().i(kg,`scala.collection.mutable.GrowableBuilder`,{aJ:1,L:1,H:1,F:1});function jg(e){this.k2=null,this.k2=e}F=jg.prototype=new wh,F.constructor=jg;function Mg(){}Mg.prototype=F,F.af=(function(){return(0,this.k2)()}),new R().i(jg,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{gU:1,gT:1,bU:1,b6:1});function Z(e){this.k3=null,this.k3=e}F=Z.prototype=new Eh,F.constructor=Z;function Ng(){}Ng.prototype=F,F.h=(function(e){return(0,this.k3)(e)}),new R().i(Z,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{gW:1,gV:1,bV:1,f:1});function Pg(e){this.k4=null,this.k4=e}F=Pg.prototype=new Oh,F.constructor=Pg;function Fg(){}Fg.prototype=F,F.ct=(function(e,t){return(0,this.k4)(e,t)}),new R().i(Pg,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{gY:1,gX:1,bW:1,ax:1});function Ig(e){this.k5=null,this.k5=e}F=Ig.prototype=new Ah,F.constructor=Ig;function Lg(){}Lg.prototype=F,F.mf=(function(e,t,n){return(0,this.k5)(e,t,n)}),new R().i(Ig,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{h0:1,gZ:1,gD:1,eb:1});function Rg(e,t){this.fh=null,this.g0=null,this.fh=e,this.g0=t}F=Rg.prototype=new I,F.constructor=Rg;function zg(){}zg.prototype=F,F.c6=(function(e){var t=this.g0;t!==void 0&&t.l4(e,this.fh),$s().fI(e,this.fh,void 0)}),F.oA=(function(e){return new Rg(this.fh,e.me(this.g0))});var Bg=new R().i(Rg,`com.raquo.laminar.inserters.StaticChildInserter`,{cJ:1,a2:1,cH:1,cL:1,cG:1});function Vg(e){e.g6=new Vo(new jg((()=>{e.dV.k9()})),new jg((()=>{e.dV.mx()}))),e.er=sw()}function Hg(e,t,n,r,i){var a=e.er.dm(t,new jg((()=>$()))),o=(e=>{for(var t=a;!t.b();){var r=t.v(),i=r.b2();if(i===null?e===null:ua(i,e)){var o=r.b0();if(o===null?n===null:ua(o,n))var s=n===null;else var s=!0}else var s=!1;if(s)return!0;t=t.r()}return!1}),s=pg(r),c=i;block:for(var l;;)if(c.b()){var l=$();break}else{var u=c.v(),d=c.r();if(o(u)){c=d;continue}for(var f=c,p=d;;)if(p.b()){var l=f;break block}else{if(!o(p.v())){p=p.r();continue}for(var m=p,h=new VT(f.v(),$()),g=f.r(),_=h;g!==m;){var v=new VT(g.v(),$());_.ap=v,_=v,g=g.r()}for(var y=m.r(),b=y;!y.b();)if(!o(y.v()))y=y.r();else{for(;b!==y;){var ee=new VT(b.v(),$());_.ap=ee,_=ee,b=b.r()}b=y.r(),y=y.r()}b.b()||(_.ap=b);var l=h;break block}}var te=e.er.dm(t,new jg((()=>$()))),x=(e=>l.bU(e.b2())),S=te;block$2:for(var C;;)if(S.b()){var C=$();break}else{var ne=S.v(),re=S.r();if(x(ne)){S=re;continue}for(var ie=S,ae=re;;)if(ae.b()){var C=ie;break block$2}else{if(!x(ae.v())){ae=ae.r();continue}for(var w=ae,T=new VT(ie.v(),$()),E=ie.r(),oe=T;E!==w;){var se=new VT(E.v(),$());oe.ap=se,oe=se,E=E.r()}for(var D=w.r(),ce=D;!D.b();)if(!x(D.v()))D=D.r();else{for(;ce!==D;){var le=new VT(ce.v(),$());oe.ap=le,oe=le,ce=ce.r()}ce=D.r(),D=D.r()}ce.b()||(oe.ap=ce);var C=T;break block$2}}var ue=(e=>new Q(e,n));if(s===$())var de=$();else{for(var fe=new VT(ue(s.v()),$()),pe=fe,me=s.r();me!==$();){var he=new VT(ue(me.v()),$());pe.ap=he,pe=he,me=me.r()}var de=fe}var ge=C.ki(de),_e=t.g1.kD(t.ih.h(e)),ve=(e=>l.bU(e)),ye=_e;block$4:for(var be;;)if(ye.b()){var be=$();break}else{var xe=ye.v(),Se=ye.r();if(ve(xe)){ye=Se;continue}for(var Ce=ye,O=Se;;)if(O.b()){var be=Ce;break block$4}else{if(!ve(O.v())){O=O.r();continue}for(var we=O,Te=new VT(Ce.v(),$()),Ee=Ce.r(),De=Te;Ee!==we;){var Oe=new VT(Ee.v(),$());De.ap=Oe,De=Oe,Ee=Ee.r()}for(var k=we.r(),ke=k;!k.b();)if(!ve(k.v()))k=k.r();else{for(;ke!==k;){var Ae=new VT(ke.v(),$());De.ap=Ae,De=Ae,ke=ke.r()}ke=k.r(),k=k.r()}ke.b()||(De.ap=ke);var be=Te;break block$4}}var je=s;block$6:for(var Me;;)if(je.b()){var Me=$();break}else{var Ne=je.v(),Pe=je.r();if(o(Ne)){je=Pe;continue}for(var Fe=je,Ie=Pe;;)if(Ie.b()){var Me=Fe;break block$6}else{if(!o(Ie.v())){Ie=Ie.r();continue}for(var Le=Ie,Re=new VT(Fe.v(),$()),ze=Fe.r(),Be=Re;ze!==Le;){var Ve=new VT(ze.v(),$());Be.ap=Ve,Be=Ve,ze=ze.r()}for(var A=Le.r(),He=A;!A.b();)if(!o(A.v()))A=A.r();else{for(;He!==A;){var Ue=new VT(He.v(),$());Be.ap=Ue,Be=Ue,He=He.r()}He=A.r(),A=A.r()}He.b()||(Be.ap=He);var Me=Re;break block$6}}var We=be.ki(Me);e.er=e.er.dq(t,ge),t.ij.ct(e,t.g1.kF(We))}function Ug(e,t){Gg(e,e.fk,t)&&Kg(e,t)}function Wg(e,t){var n=e.fk;e.fk=t,Gg(e,n,t)||Kg(e,t)}function Gg(e,t,n){var r=!t.b()&&!t.aF().fL().bp.b(),i=!n.b()&&!n.aF().fL().bp.b();return r&&!i}function Kg(e,t){qg(e,t.b()?db():new fb(t.aF().fL()))}function qg(e,t){if(t.b())e.g6.mn();else{var n=t.aF();e.g6.ob(n)}}function Jg(){}F=Jg.prototype=new Vh,F.constructor=Jg;function Yg(){}Yg.prototype=F;var Xg=class extends Yh{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(Xg,`java.lang.ArithmeticException`,{dv:1,D:1,C:1,w:1,a:1});var Zg=new R().i(0,`java.lang.Byte`,{dy:1,a8:1,a:1,a0:1,W:1},(e=>xa(e))),Qg=class extends Yh{constructor(){super(),Ef(this,null,null,!0,!0)}};new R().i(Qg,`java.lang.ClassCastException`,{aZ:1,D:1,C:1,w:1,a:1});function $g(e,t){return Ef(e,t,null,!0,!0),e}function e_(e){return Ef(e,null,null,!0,!0),e}var t_=class extends Yh{};new R().i(t_,`java.lang.IllegalArgumentException`,{b1:1,D:1,C:1,w:1,a:1});var n_=class extends Yh{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(n_,`java.lang.IllegalStateException`,{dE:1,D:1,C:1,w:1,a:1});function r_(e,t){return Ef(e,t,null,!0,!0),e}var i_=class extends Yh{};new R().i(i_,`java.lang.IndexOutOfBoundsException`,{aw:1,D:1,C:1,w:1,a:1});function a_(){}F=a_.prototype=new Vh,F.constructor=a_;function o_(){}o_.prototype=F,new R().i(a_,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dI:1,aV:1,aT:1,aX:1,aU:1});var s_=class extends Yh{constructor(){super(),Ef(this,null,null,!0,!0)}};new R().i(s_,`java.lang.NegativeArraySizeException`,{dJ:1,D:1,C:1,w:1,a:1});var c_=class extends Yh{constructor(){super(),Ef(this,null,null,!0,!0)}};new R().i(c_,`java.lang.NullPointerException`,{dK:1,D:1,C:1,w:1,a:1});var l_=new R().i(0,`java.lang.Short`,{dN:1,a8:1,a:1,a0:1,W:1},(e=>Sa(e))),u_=class extends Yh{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(u_,`java.lang.UnsupportedOperationException`,{dW:1,D:1,C:1,w:1,a:1});var d_=class extends Yh{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(d_,`java.util.ConcurrentModificationException`,{e0:1,D:1,C:1,w:1,a:1});var f_=class extends Yh{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(f_,`java.util.NoSuchElementException`,{e1:1,D:1,C:1,w:1,a:1});function p_(){}F=p_.prototype=new tg,F.constructor=p_;function m_(){}m_.prototype=F,F.h=(function(e){return e}),F.E=(function(){return`generalized constraint`}),new R().i(p_,`scala.$less$colon$less$$anon$1`,{e6:1,e3:1,e4:1,f:1,a:1});function h_(e){return e.gl||=(e.gm=e.fo===null?`null`:v_(e),!0),e.gm}function g_(e){return e.gl?e.gm:h_(e)}function __(e){var t=e.fo;return`of class `+la(t)}function v_(e){try{return e.fo+` (`+__(e)+`)`}catch{return`an instance `+__(e)}}var y_=class extends Yh{constructor(e){super(),this.gm=null,this.fo=null,this.gl=!1,this.fo=e,Ef(this,null,null,!0,!0)}f2(){return g_(this)}};new R().i(y_,`scala.MatchError`,{ee:1,D:1,C:1,w:1,a:1});function b_(){}F=b_.prototype=new I,F.constructor=b_;function x_(){}x_.prototype=F,F.b=(function(){return this===db()}),F.x=(function(){return this.b()?0:1}),F.j=(function(){return this.b()?J().G:new j_(this.aF())});function S_(e){this.ev=0,this.jn=0,this.jm=null,this.jm=e,this.ev=0,this.jn=e.cz()}F=S_.prototype=new ag,F.constructor=S_;function C_(){}C_.prototype=F,F.k=(function(){return this.ev<this.jn}),F.f=(function(){var e=this.jm.cA(this.ev);return this.ev=1+this.ev|0,e}),new R().i(S_,`scala.Product$$anon$1`,{ek:1,o:1,r:1,b:1,c:1});function Q(e,t){this.jo=null,this.jp=null,this.jo=e,this.jp=t}F=Q.prototype=new I,F.constructor=Q;function w_(){}w_.prototype=F,F.cz=(function(){return 2}),F.cA=(function(e){return Cm(this,e)}),F.b2=(function(){return this.jo}),F.b0=(function(){return this.jp}),F.E=(function(){return`(`+this.b2()+`,`+this.b0()+`)`}),F.cB=(function(){return`Tuple2`}),F.dK=(function(){return new Ny(this)}),F.y=(function(){return q().hw(this,-889275714,!1)}),F.u=(function(e){return this===e||e instanceof Q&&W().o(this.b2(),e.b2())&&W().o(this.b0(),e.b0())}),new R().i(Q,`scala.Tuple2`,{b9:1,el:1,a9:1,d:1,a:1});function T_(e){this.ex=null,wm(this,e)}F=T_.prototype=new Em,F.constructor=T_;function E_(){}E_.prototype=F,new R().i(T_,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{ez:1,ey:1,J:1,a:1,Z:1});function D_(e){return Zl(e,e.bH()+`(`,`, `,`)`)}function O_(e){return!!(e&&e.$classData&&e.$classData.n.e)}function k_(){}F=k_.prototype=new ag,F.constructor=k_;function A_(){}A_.prototype=F,F.k=(function(){return!1}),F.hq=(function(){throw new f_(`next on empty iterator`)}),F.x=(function(){return 0}),F.f9=(function(e,t){return this}),F.f=(function(){this.hq()}),new R().i(k_,`scala.collection.Iterator$$anon$19`,{eE:1,o:1,r:1,b:1,c:1});function j_(e){this.ey=!1,this.js=null,this.js=e,this.ey=!1}F=j_.prototype=new ag,F.constructor=j_;function M_(){}M_.prototype=F,F.k=(function(){return!this.ey}),F.f=(function(){return this.ey?J().G.f():(this.ey=!0,this.js)}),F.f9=(function(e,t){return this.ey||e>0||t===0?J().G:this}),new R().i(j_,`scala.collection.Iterator$$anon$20`,{eF:1,o:1,r:1,b:1,c:1});function N_(e,t){this.jv=null,this.fq=!1,this.ju=null,this.gw=null,this.jt=null,this.gw=e,this.jt=t,this.jv=Pw(new Fw),this.fq=!1}F=N_.prototype=new ag,F.constructor=N_;function P_(){}P_.prototype=F,F.k=(function(){for(;;)if(this.fq)return!0;else if(this.gw.k()){var e=this.gw.f();if(this.jv.fH(this.jt.h(e)))return this.ju=e,this.fq=!0,!0}else return!1}),F.f=(function(){return this.k()?(this.fq=!1,this.ju):J().G.f()}),new R().i(N_,`scala.collection.Iterator$$anon$8`,{eH:1,o:1,r:1,b:1,c:1});function F_(e,t){this.fr=null,this.jw=null,this.fr=e,this.jw=t}F=F_.prototype=new ag,F.constructor=F_;function I_(){}I_.prototype=F,F.x=(function(){return this.fr.x()}),F.k=(function(){return this.fr.k()}),F.f=(function(){return this.jw.h(this.fr.f())}),new R().i(F_,`scala.collection.Iterator$$anon$9`,{eI:1,o:1,r:1,b:1,c:1});function L_(e){for(;;){if(e.bd instanceof z_){var t=e.bd;e.bd=t.bd,e.cG=t.cG,t.bA!==null&&(e.bz===null&&(e.bz=t.bz),t.bz.ez=e.bA,e.bA=t.bA);continue}return}}function R_(e){for(;;)if(e.bA===null)return e.bd=null,e.bz=null,!1;else{if(e.bd=e.bA.nj(),e.bz===e.bA&&(e.bz=e.bz.ez),e.bA=e.bA.ez,L_(e),e.cG)return!0;if(e.bd!==null&&e.bd.k())return e.cG=!0,!0}}function z_(e){this.bd=null,this.bA=null,this.bz=null,this.cG=!1,this.bd=e,this.bA=null,this.bz=null,this.cG=!1}F=z_.prototype=new ag,F.constructor=z_;function B_(){}B_.prototype=F,F.k=(function(){return this.cG?!0:this.bd===null?!1:this.bd.k()?(this.cG=!0,!0):R_(this)}),F.f=(function(){return this.k()?(this.cG=!1,this.bd.f()):J().G.f()}),F.h3=(function(e){var t=new eu(e,null);return this.bA===null?(this.bA=t,this.bz=t):(this.bz.ez=t,this.bz=t),this.bd===null&&(this.bd=J().G),this}),new R().i(z_,`scala.collection.Iterator$ConcatIterator`,{bf:1,o:1,r:1,b:1,c:1});function V_(e){for(;e.cf>0;)e.cH.k()?(e.cH.f(),e.cf=-1+e.cf|0):e.cf=0}function H_(e,t){if(e.bs<0)return-1;var n=e.bs-t|0;return n<0?0:n}function U_(e,t,n){this.cH=null,this.bs=0,this.cf=0,this.cH=e,this.bs=n,this.cf=t}F=U_.prototype=new ag,F.constructor=U_;function W_(){}W_.prototype=F,F.x=(function(){var e=this.cH.x();if(e<0)return-1;var t=e-this.cf|0,n=t<0?0:t;if(this.bs<0)return n;var r=this.bs;return r<n?r:n}),F.k=(function(){return V_(this),this.bs!==0&&this.cH.k()}),F.f=(function(){return V_(this),this.bs>0?(this.bs=-1+this.bs|0,this.cH.f()):this.bs<0?this.cH.f():J().G.f()}),F.f9=(function(e,t){var n=e>0?e:0;if(t<0)var r=H_(this,n);else if(t<=n)var r=0;else if(this.bs<0)var r=t-n|0;else var i=H_(this,n),a=t-n|0,r=i<a?i:a;var o=this.cf+n|0;return r===0?J().G:o<0?(this.cf=2147483647,this.bs=0,jm(this,new ph((()=>new U_(this.cH,-2147483647+o|0,r))))):(this.cf=o,this.bs=r,this)}),new R().i(U_,`scala.collection.Iterator$SliceIterator`,{eK:1,o:1,r:1,b:1,c:1});function G_(e){for(var t=e,n=0;!t.b();)n=1+n|0,t=t.r();return n}function K_(e,t){return t<0?1:Y_(e,0,e,t)}function q_(e,t){if(t<0)throw r_(new i_,``+t);var n=e.kE(t);if(n.b())throw r_(new i_,``+t);return n.v()}function J_(e,t){return PC(t)?X_(e,e,t):gg(e,t)}function Y_(e,t,n,r){for(;;)if(t===r)return n.b()?0:1;else if(n.b())return-1;else{var i=1+t|0,a=n.r();t=i,n=a}}function X_(e,t,n){for(;;)if(t===n)return!0;else if(!t.b()&&!n.b()&&W().o(t.v(),n.v())){var r=t.r(),i=n.r();t=r,n=i}else return t.b()&&n.b()}function Z_(e){this.eA=null,this.eA=e}F=Z_.prototype=new ag,F.constructor=Z_;function Q_(){}Q_.prototype=F,F.k=(function(){return!this.eA.b()}),F.f=(function(){var e=this.eA.v();return this.eA=this.eA.r(),e}),new R().i(Z_,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{eO:1,o:1,r:1,b:1,c:1});function $_(e){e.ch===null&&(e.ch=new Fa(H().eH<<1),e.eC=new(bu.r()).C(H().eH))}function ev(e,t){e.dy=t,e.bt=0,e.eB=t.hu()}function tv(e,t){$_(e),e.bf=1+e.bf|0;var n=e.bf<<1,r=1+(e.bf<<1)|0;e.eC.a[e.bf]=t,e.ch.a[n]=0,e.ch.a[r]=t.hr()}function nv(e){e.bf=-1+e.bf|0}function rv(e){for(;e.bf>=0;){var t=e.bf<<1,n=1+(e.bf<<1)|0,r=e.ch.a[t];if(r<e.ch.a[n]){var i=e.ch;i.a[t]=1+i.a[t]|0;var a=e.eC.a[e.bf].hf(r);if(a.hj()&&tv(e,a),a.fN())return ev(e,a),!0}else nv(e)}return!1}function iv(e){return e.bt=0,e.eB=0,e.bf=-1,e}function av(e,t){return iv(e),t.hj()&&tv(e,t),t.fN()&&ev(e,t),e}function ov(){this.bt=0,this.eB=0,this.dy=null,this.bf=0,this.ch=null,this.eC=null}F=ov.prototype=new ag,F.constructor=ov;function sv(){}sv.prototype=F,F.k=(function(){return this.bt<this.eB||rv(this)});function cv(e,t){e.ft=t,e.cP=-1+t.hu()|0}function lv(e,t){e.bu=1+e.bu|0,e.eE.a[e.bu]=t,e.eD.a[e.bu]=-1+t.hr()|0}function uv(e){e.bu=-1+e.bu|0}function dv(e){for(;e.bu>=0;){var t=e.eD.a[e.bu];if(e.eD.a[e.bu]=-1+t|0,t>=0)lv(e,e.eE.a[e.bu].hf(t));else{var n=e.eE.a[e.bu];if(uv(e),n.fN())return cv(e,n),!0}}return!1}function fv(e){return e.cP=-1,e.bu=-1,e.eD=new Fa(1+H().eH|0),e.eE=new(bu.r()).C(1+H().eH|0),e}function pv(e,t){return fv(e),lv(e,t),dv(e),e}function mv(){this.cP=0,this.ft=null,this.bu=0,this.eD=null,this.eE=null}F=mv.prototype=new ag,F.constructor=mv;function hv(){}hv.prototype=F,F.k=(function(){return this.cP>=0||dv(this)});function gv(e){return e.e8!==null}function _v(e,t,n,r){if(n<0||n>t.a.length)throw qy(new Jy);var i=new Fa(1+t.a.length|0);t.s(0,i,0,n),i.a[n]=r;var a=1+n|0,o=t.a.length-n|0;return t.s(n,i,a,o),i}function vv(e,t,n,r,i,a,o){var s=t.eY(n),c=s<<1,l=t.ag,u=new L(2+l.a.length|0);l.s(0,u,0,c),u.a[c]=r,u.a[1+c|0]=o;var d=2+c|0,f=l.a.length-c|0;l.s(c,u,d,f);var p=_v(e,t.be,s,i);t.U|=n,t.ag=u,t.be=p,t.aI=1+t.aI|0,t.b3=t.b3+a|0}function yv(e){gv(e)&&bv(e),e.e8=null}function bv(e){e.c2=e.c2.kA()}function xv(){this.e8=null,this.c2=null,this.c2=new Wm(0,0,jl().ji,jl().gk,0,0)}F=xv.prototype=new I,F.constructor=xv;function Sv(){}Sv.prototype=F,F.aX=(function(e){}),F.ep=(function(e,t,n,r,i,a){if(e instanceof Wm){var o=H().dJ(i,a),s=H().di(o);if((e.U&s)!==0){var c=H().c9(e.U,o,s),l=e.dl(c),u=e.f1(c);if(u===r&&W().o(l,t))e.ag.a[1+(c<<1)|0]=n;else{var d=e.cx(c),f=Kl().bW(u),p=e.ho(l,d,u,f,t,n,r,i,5+a|0);e.nB(s,f,p)}}else if((e.ab&s)!==0){var m=H().c9(e.ab,o,s),h=e.cw(m),g=h.aH(),_=h.dj();this.ep(h,t,n,r,i,5+a|0),e.aI=e.aI+(h.aH()-g|0)|0,e.b3=e.b3+(h.dj()-_|0)|0}else vv(this,e,s,t,r,i,n)}else if(e instanceof Km){var v=e.ek(t);v<0?e.ac=e.ac.de(new Q(t,n)):e.ac=e.ac.dp(v,new Q(t,n))}else throw new y_(e)}),F.hy=(function(){return this.c2.aI===0?Zm().gD:(this.e8===null&&(this.e8=new Tw(this.c2)),this.e8)}),F.kf=(function(e){yv(this);var t=K().M(e.b2()),n=Kl().bW(t);return this.ep(this.c2,e.b2(),e.b0(),t,n,0),this}),F.dF=(function(e,t){yv(this);var n=K().M(e);return this.ep(this.c2,e,t,n,Kl().bW(n),0),this}),F.gY=(function(e){if(yv(this),e instanceof Tw)new Fb(this,e);else if(HC(e))e.dI(new gh(((e,t)=>this.dF(e,t))));else for(var t=e.j();t.k();)this.kf(t.f());return this}),F.aV=(function(e){return this.gY(e)}),F.aQ=(function(e){return this.kf(e)}),F.aW=(function(){return this.hy()}),new R().i(xv,`scala.collection.immutable.HashMapBuilder`,{eY:1,a6:1,L:1,H:1,F:1});function Cv(){this.e9=null,this.jD=null,this.mm()}F=Cv.prototype=new I,F.constructor=Cv;function wv(){}wv.prototype=F,F.aX=(function(e){}),F.mm=(function(){var e=new du;this.jD=(Tg(),new xw(new ph((()=>e.h7())))),this.e9=e}),F.o6=(function(){return this.e9.hm(new ph((()=>rh()))),this.jD}),F.m4=(function(e){var t=new du;return this.e9.hm(new ph((()=>(Tg(),new Qm(e,(Tg(),new xw(new ph((()=>t.h7()))))))))),this.e9=t,this}),F.lW=(function(e){if(e.x()!==0){var t=new du;this.e9.hm(new ph((()=>Tg().le(e.j(),new ph((()=>t.h7())))))),this.e9=t}return this}),F.aV=(function(e){return this.lW(e)}),F.aQ=(function(e){return this.m4(e)}),F.aW=(function(){return this.o6()}),new R().i(Cv,`scala.collection.immutable.LazyList$LazyBuilder`,{f4:1,a6:1,L:1,H:1,F:1});function Tv(e){this.ea=null,this.ea=e}F=Tv.prototype=new ag,F.constructor=Tv;function Ev(){}Ev.prototype=F,F.k=(function(){return!this.ea.b()}),F.f=(function(){if(this.ea.b())return J().G.f();var e=this.ea.B().v();return this.ea=this.ea.B().aB(),e}),new R().i(Tv,`scala.collection.immutable.LazyList$LazyIterator`,{f6:1,o:1,r:1,b:1,c:1});function Dv(){}F=Dv.prototype=new I,F.constructor=Dv;function Ov(){}Ov.prototype=F,F.cv=(function(e){return $().hv(e)}),F.aS=(function(){return new fE}),F.av=(function(e){return $().hv(e)}),new R().i(Dv,`scala.collection.immutable.List$`,{f9:1,ag:1,Z:1,J:1,a:1});var kv;function Av(){return kv||=new Dv,kv}function jv(e,t){return e.eb=t,e.cT=0,e}function Mv(){this.cT=0,this.eb=null}F=Mv.prototype=new ag,F.constructor=Mv;function Nv(){}Nv.prototype=F,F.k=(function(){return this.cT<2}),F.f=(function(){switch(this.cT){case 0:var e=new Q(this.eb.bM,this.eb.cR);break;case 1:var e=new Q(this.eb.bN,this.eb.cS);break;default:var e=J().G.f()}return this.cT=1+this.cT|0,e}),F.dk=(function(e){return this.cT=this.cT+e|0,this});function Pv(e,t){return e.cU=t,e.cV=0,e}function Fv(){this.cV=0,this.cU=null}F=Fv.prototype=new ag,F.constructor=Fv;function Iv(){}Iv.prototype=F,F.k=(function(){return this.cV<3}),F.f=(function(){switch(this.cV){case 0:var e=new Q(this.cU.bB,this.cU.ci);break;case 1:var e=new Q(this.cU.bC,this.cU.cj);break;case 2:var e=new Q(this.cU.bD,this.cU.ck);break;default:var e=J().G.f()}return this.cV=1+this.cV|0,e}),F.dk=(function(e){return this.cV=this.cV+e|0,this});function Lv(e,t){return e.c4=t,e.cW=0,e}function Rv(){this.cW=0,this.c4=null}F=Rv.prototype=new ag,F.constructor=Rv;function zv(){}zv.prototype=F,F.k=(function(){return this.cW<4}),F.f=(function(){switch(this.cW){case 0:var e=new Q(this.c4.bg,this.c4.bO);break;case 1:var e=new Q(this.c4.bh,this.c4.bP);break;case 2:var e=new Q(this.c4.bi,this.c4.bQ);break;case 3:var e=new Q(this.c4.bj,this.c4.bR);break;default:var e=J().G.f()}return this.cW=1+this.cW|0,e}),F.dk=(function(e){return this.cW=this.cW+e|0,this});function Bv(){this.cl=null,this.eF=!1,this.dA=null,this.cl=sw(),this.eF=!1}F=Bv.prototype=new I,F.constructor=Bv;function Vv(){}Vv.prototype=F,F.aX=(function(e){}),F.lb=(function(){return this.eF?this.dA.hy():this.cl}),F.m2=(function(e,t){return this.eF?this.dA.dF(e,t):this.cl.aH()<4||this.cl.bU(e)?this.cl=this.cl.dq(e,t):(this.eF=!0,this.dA===null&&(this.dA=new xv),this.cl.ml(this.dA),this.dA.dF(e,t)),this}),F.ka=(function(e){return this.eF?(this.dA.gY(e),this):Zf(this,e)}),F.aV=(function(e){return this.ka(e)}),F.aQ=(function(e){return this.m2(e.b2(),e.b0())}),F.aW=(function(){return this.lb()}),new R().i(Bv,`scala.collection.immutable.MapBuilderImpl`,{fj:1,a6:1,L:1,H:1,F:1});function Hv(){try{return hf().l9(nl().hh(`scala.collection.immutable.Vector.defaultApplyPreferredMaxLength`,`250`),10)}catch(e){throw e}}function Uv(){this.jJ=0,this.jK=null,Gv=this,this.jJ=Hv(),this.jK=new Qb(YT(),0,0)}F=Uv.prototype=new I,F.constructor=Uv;function Wv(){}Wv.prototype=F,F.cv=(function(e){return this.hd(e)}),F.hd=(function(e){if(e instanceof Bw)return e;var t=e.x();if(t===0)return YT();if(t>0&&t<=32){matchEnd5:{var n;if(e instanceof iT){var r=e.aa().aG();if(r!==null&&r===z.l()){var n=e.c1;break matchEnd5}}if(Lb(e)){var i=new L(t);e.bx(i,0,2147483647);var n=i;break matchEnd5}var a=new L(t);e.j().bx(a,0,2147483647);var n=a}return new zT(n)}else return new ey().kb(e).lc()}),F.aS=(function(){return new ey}),F.av=(function(e){return this.hd(e)}),new R().i(Uv,`scala.collection.immutable.Vector$`,{fw:1,ag:1,Z:1,J:1,a:1});var Gv;function Kv(){return Gv||=new Uv,Gv}function qv(e){var t=null,n=null;if(e.J>=6){t=e.az;var r=e.F>>>25|0;if(r>0){var i=t,a=t,o=64-r|0;i.s(r,a,0,o)}var s=e.F%33554432|0;e.z=e.z-(e.F-s|0)|0,e.F=s,e.z>>>25|0||(e.J=5),n=t,t=t.a[0]}if(e.J>=5){t===null&&(t=e.R);var c=31&(e.F>>>20|0);if(e.J===5){if(c>0){var l=t,u=t,d=32-c|0;l.s(c,u,0,d)}e.R=t;var f=e.F%1048576|0;e.z=e.z-(e.F-f|0)|0,e.F=f,e.z>>>20|0||(e.J=4)}else c>0&&(t=B().a1(t,c,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.J>=4){t===null&&(t=e.L);var p=31&(e.F>>>15|0);if(e.J===4){if(p>0){var m=t,h=t,g=32-p|0;m.s(p,h,0,g)}e.L=t;var _=e.F%32768|0;e.z=e.z-(e.F-_|0)|0,e.F=_,e.z>>>15|0||(e.J=3)}else p>0&&(t=B().a1(t,p,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.J>=3){t===null&&(t=e.H);var v=31&(e.F>>>10|0);if(e.J===3){if(v>0){var y=t,b=t,ee=32-v|0;y.s(v,b,0,ee)}e.H=t;var te=e.F%1024|0;e.z=e.z-(e.F-te|0)|0,e.F=te,e.z>>>10|0||(e.J=2)}else v>0&&(t=B().a1(t,v,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.J>=2){t===null&&(t=e.D);var x=31&(e.F>>>5|0);if(e.J===2){if(x>0){var S=t,C=t,ne=32-x|0;S.s(x,C,0,ne)}e.D=t;var re=e.F%32|0;e.z=e.z-(e.F-re|0)|0,e.F=re,e.z>>>5|0||(e.J=1)}else x>0&&(t=B().a1(t,x,32)),n.a[0]=t;n=t,t=t.a[0]}if(e.J>=1){t===null&&(t=e.P);var ie=31&e.F;if(e.J===1){if(ie>0){var ae=t,w=t,T=32-ie|0;ae.s(ie,w,0,T)}e.P=t,e.I=e.I-e.F|0,e.F=0}else ie>0&&(t=B().a1(t,ie,32)),n.a[0]=t}e.fw=!1}function Jv(e,t){var n=t.a.length;if(n>0){e.I===32&&Zv(e);var r=32-e.I|0,i=r<n?r:n,a=n-i|0,o=e.P,s=e.I;if(t.s(0,o,s,i),e.I=e.I+i|0,a>0){Zv(e);var c=e.P;t.s(i,c,0,a),e.I=e.I+a|0}}}function Yv(e,t,n){if(t.a.length!==0){e.I===32&&Zv(e);var r=t.a.length;switch(n){case 2:var i=31&((1024-e.z|0)>>>5|0),a=i<r?i:r,o=r-a|0,s=31&(e.z>>>5|0),c=e.D;if(t.s(0,c,s,a),Qv(e,a<<5),o>0){var l=e.D;t.s(a,l,0,o),Qv(e,o<<5)}break;case 3:if(e.z%1024|0){var u=(t=>{Yv(e,t,2)}),d=t.a.length,f=0;if(t!==null)for(;f<d;){var p=t.a[f];u(p),f=1+f|0}else if(t instanceof Fa)for(;f<d;){var m=t.a[f];u(m),f=1+f|0}else if(t instanceof Ra)for(;f<d;){var h=t.a[f];u(h),f=1+f|0}else if(t instanceof Ia)for(;f<d;){var g=t.a[f],_=g.l,v=g.n;u(new V(_,v)),f=1+f|0}else if(t instanceof La)for(;f<d;){var y=t.a[f];u(y),f=1+f|0}else if(t instanceof Ma)for(;f<d;){var b=t.a[f];u(Ta(b)),f=1+f|0}else if(t instanceof Na)for(;f<d;){var ee=t.a[f];u(ee),f=1+f|0}else if(t instanceof Pa)for(;f<d;){var te=t.a[f];u(te),f=1+f|0}else if(t instanceof ja)for(;f<d;){var x=t.a[f];u(x),f=1+f|0}else throw new y_(t);return}var S=31&((32768-e.z|0)>>>10|0),C=S<r?S:r,ne=r-C|0,re=31&(e.z>>>10|0),ie=e.H;if(t.s(0,ie,re,C),Qv(e,C<<10),ne>0){var ae=e.H;t.s(C,ae,0,ne),Qv(e,ne<<10)}break;case 4:if(e.z%32768|0){var w=(t=>{Yv(e,t,3)}),T=t.a.length,E=0;if(t!==null)for(;E<T;){var oe=t.a[E];w(oe),E=1+E|0}else if(t instanceof Fa)for(;E<T;){var se=t.a[E];w(se),E=1+E|0}else if(t instanceof Ra)for(;E<T;){var D=t.a[E];w(D),E=1+E|0}else if(t instanceof Ia)for(;E<T;){var ce=t.a[E],le=ce.l,ue=ce.n;w(new V(le,ue)),E=1+E|0}else if(t instanceof La)for(;E<T;){var de=t.a[E];w(de),E=1+E|0}else if(t instanceof Ma)for(;E<T;){var fe=t.a[E];w(Ta(fe)),E=1+E|0}else if(t instanceof Na)for(;E<T;){var pe=t.a[E];w(pe),E=1+E|0}else if(t instanceof Pa)for(;E<T;){var me=t.a[E];w(me),E=1+E|0}else if(t instanceof ja)for(;E<T;){var he=t.a[E];w(he),E=1+E|0}else throw new y_(t);return}var ge=31&((1048576-e.z|0)>>>15|0),_e=ge<r?ge:r,ve=r-_e|0,ye=31&(e.z>>>15|0),be=e.L;if(t.s(0,be,ye,_e),Qv(e,_e<<15),ve>0){var xe=e.L;t.s(_e,xe,0,ve),Qv(e,ve<<15)}break;case 5:if(e.z%1048576|0){var Se=(t=>{Yv(e,t,4)}),Ce=t.a.length,O=0;if(t!==null)for(;O<Ce;){var we=t.a[O];Se(we),O=1+O|0}else if(t instanceof Fa)for(;O<Ce;){var Te=t.a[O];Se(Te),O=1+O|0}else if(t instanceof Ra)for(;O<Ce;){var Ee=t.a[O];Se(Ee),O=1+O|0}else if(t instanceof Ia)for(;O<Ce;){var De=t.a[O],Oe=De.l,k=De.n;Se(new V(Oe,k)),O=1+O|0}else if(t instanceof La)for(;O<Ce;){var ke=t.a[O];Se(ke),O=1+O|0}else if(t instanceof Ma)for(;O<Ce;){var Ae=t.a[O];Se(Ta(Ae)),O=1+O|0}else if(t instanceof Na)for(;O<Ce;){var je=t.a[O];Se(je),O=1+O|0}else if(t instanceof Pa)for(;O<Ce;){var Me=t.a[O];Se(Me),O=1+O|0}else if(t instanceof ja)for(;O<Ce;){var Ne=t.a[O];Se(Ne),O=1+O|0}else throw new y_(t);return}var Pe=31&((33554432-e.z|0)>>>20|0),Fe=Pe<r?Pe:r,Ie=r-Fe|0,Le=31&(e.z>>>20|0),Re=e.R;if(t.s(0,Re,Le,Fe),Qv(e,Fe<<20),Ie>0){var ze=e.R;t.s(Fe,ze,0,Ie),Qv(e,Ie<<20)}break;case 6:if(e.z%33554432|0){var Be=(t=>{Yv(e,t,5)}),Ve=t.a.length,A=0;if(t!==null)for(;A<Ve;){var He=t.a[A];Be(He),A=1+A|0}else if(t instanceof Fa)for(;A<Ve;){var Ue=t.a[A];Be(Ue),A=1+A|0}else if(t instanceof Ra)for(;A<Ve;){var We=t.a[A];Be(We),A=1+A|0}else if(t instanceof Ia)for(;A<Ve;){var Ge=t.a[A],Ke=Ge.l,qe=Ge.n;Be(new V(Ke,qe)),A=1+A|0}else if(t instanceof La)for(;A<Ve;){var Je=t.a[A];Be(Je),A=1+A|0}else if(t instanceof Ma)for(;A<Ve;){var Ye=t.a[A];Be(Ta(Ye)),A=1+A|0}else if(t instanceof Na)for(;A<Ve;){var j=t.a[A];Be(j),A=1+A|0}else if(t instanceof Pa)for(;A<Ve;){var Xe=t.a[A];Be(Xe),A=1+A|0}else if(t instanceof ja)for(;A<Ve;){var Ze=t.a[A];Be(Ze),A=1+A|0}else throw new y_(t);return}var Qe=e.z>>>25|0;if((Qe+r|0)>64)throw $g(new t_,`exceeding 2^31 elements`);var $e=e.az;t.s(0,$e,Qe,r),Qv(e,r<<25);break;default:throw new y_(n)}}}function Xv(e,t){for(var n=t.cc(),r=0;r<n;){var i=t.cb(r),a=r,o=n/2|0,s=a-o|0,c=(1+o|0)-(s<0?-s|0:s)|0;c===1?Jv(e,i):e.I===32||e.I===0?Yv(e,i,c):U().h9(-2+c|0,i,new Y((t=>{Jv(e,t)}))),r=1+r|0}return e}function Zv(e){var t=32+e.z|0,n=t^e.z;e.z=t,e.I=0,$v(e,t,n)}function Qv(e,t){if(t>0){var n=e.z+t|0,r=n^e.z;e.z=n,e.I=0,$v(e,n,r)}}function $v(e,t,n){if(n<=0)throw $g(new t_,`advance1(`+t+`, `+n+`): a1=`+e.P+`, a2=`+e.D+`, a3=`+e.H+`, a4=`+e.L+`, a5=`+e.R+`, a6=`+e.az+`, depth=`+e.J);n<1024?(e.J<=1&&(e.D=new(z.r().r()).C(32),e.D.a[0]=e.P,e.J=2),e.P=new L(32),e.D.a[31&(t>>>5|0)]=e.P):n<32768?(e.J<=2&&(e.H=new(z.r().r().r()).C(32),e.H.a[0]=e.D,e.J=3),e.P=new L(32),e.D=new(z.r().r()).C(32),e.D.a[31&(t>>>5|0)]=e.P,e.H.a[31&(t>>>10|0)]=e.D):n<1048576?(e.J<=3&&(e.L=new(z.r().r().r().r()).C(32),e.L.a[0]=e.H,e.J=4),e.P=new L(32),e.D=new(z.r().r()).C(32),e.H=new(z.r().r().r()).C(32),e.D.a[31&(t>>>5|0)]=e.P,e.H.a[31&(t>>>10|0)]=e.D,e.L.a[31&(t>>>15|0)]=e.H):n<33554432?(e.J<=4&&(e.R=new(z.r().r().r().r().r()).C(32),e.R.a[0]=e.L,e.J=5),e.P=new L(32),e.D=new(z.r().r()).C(32),e.H=new(z.r().r().r()).C(32),e.L=new(z.r().r().r().r()).C(32),e.D.a[31&(t>>>5|0)]=e.P,e.H.a[31&(t>>>10|0)]=e.D,e.L.a[31&(t>>>15|0)]=e.H,e.R.a[31&(t>>>20|0)]=e.L):(e.J<=5&&(e.az=new(z.r().r().r().r().r().r()).C(64),e.az.a[0]=e.R,e.J=6),e.P=new L(32),e.D=new(z.r().r()).C(32),e.H=new(z.r().r().r()).C(32),e.L=new(z.r().r().r().r()).C(32),e.R=new(z.r().r().r().r().r()).C(32),e.D.a[31&(t>>>5|0)]=e.P,e.H.a[31&(t>>>10|0)]=e.D,e.L.a[31&(t>>>15|0)]=e.H,e.R.a[31&(t>>>20|0)]=e.L,e.az.a[t>>>25|0]=e.R)}function ey(){this.az=null,this.R=null,this.L=null,this.H=null,this.D=null,this.P=null,this.I=0,this.z=0,this.F=0,this.fw=!1,this.J=0,this.P=new L(32),this.I=0,this.z=0,this.F=0,this.fw=!1,this.J=1}F=ey.prototype=new I,F.constructor=ey;function ty(){}ty.prototype=F,F.aX=(function(e){}),F.no=(function(e){var t=e.cc();switch(t){case 0:break;case 1:this.J=1;var n=e.c.a.length;this.I=31&n,this.z=n-this.I|0;var r=e.c;this.P=r.a.length===32?r:B().a1(r,0,32);break;case 3:var i=e.b1,a=e.g;this.P=a.a.length===32?a:B().a1(a,0,32),this.J=2,this.F=32-e.bl|0;var o=e.i+this.F|0;this.I=31&o,this.z=o-this.I|0,this.D=new(z.r().r()).C(32),this.D.a[0]=e.c;var s=this.D,c=i.a.length;i.s(0,s,1,c),this.D.a[1+i.a.length|0]=this.P;break;case 5:var l=e.aL,u=e.aM,d=e.g;this.P=d.a.length===32?d:B().a1(d,0,32),this.J=3,this.F=1024-e.aZ|0;var f=e.i+this.F|0;this.I=31&f,this.z=f-this.I|0,this.H=new(z.r().r().r()).C(32),this.H.a[0]=U().c7(e.c,e.b6);var p=this.H,m=l.a.length;l.s(0,p,1,m),this.D=B().T(u,32),this.H.a[1+l.a.length|0]=this.D,this.D.a[u.a.length]=this.P;break;case 7:var h=e.ar,g=e.at,_=e.as,v=e.g;this.P=v.a.length===32?v:B().a1(v,0,32),this.J=4,this.F=32768-e.aE|0;var y=e.i+this.F|0;this.I=31&y,this.z=y-this.I|0,this.L=new(z.r().r().r().r()).C(32),this.L.a[0]=U().c7(U().c7(e.c,e.aT),e.aU);var b=this.L,ee=h.a.length;h.s(0,b,1,ee),this.H=B().T(g,32),this.D=B().T(_,32),this.L.a[1+h.a.length|0]=this.H,this.H.a[g.a.length]=this.D,this.D.a[_.a.length]=this.P;break;case 9:var te=e.a2,x=e.a5,S=e.a4,C=e.a3,ne=e.g;this.P=ne.a.length===32?ne:B().a1(ne,0,32),this.J=5,this.F=1048576-e.ak|0;var re=e.i+this.F|0;this.I=31&re,this.z=re-this.I|0,this.R=new(z.r().r().r().r().r()).C(32),this.R.a[0]=U().c7(U().c7(U().c7(e.c,e.aw),e.ax),e.ay);var ie=this.R,ae=te.a.length;te.s(0,ie,1,ae),this.L=B().T(x,32),this.H=B().T(S,32),this.D=B().T(C,32),this.R.a[1+te.a.length|0]=this.L,this.L.a[x.a.length]=this.H,this.H.a[S.a.length]=this.D,this.D.a[C.a.length]=this.P;break;case 11:var w=e.V,T=e.Z,E=e.Y,oe=e.X,se=e.W,D=e.g;this.P=D.a.length===32?D:B().a1(D,0,32),this.J=6,this.F=33554432-e.ad|0;var ce=e.i+this.F|0;this.I=31&ce,this.z=ce-this.I|0,this.az=new(z.r().r().r().r().r().r()).C(64),this.az.a[0]=U().c7(U().c7(U().c7(U().c7(e.c,e.al),e.am),e.an),e.ao);var le=this.az,ue=w.a.length;w.s(0,le,1,ue),this.R=B().T(T,32),this.L=B().T(E,32),this.H=B().T(oe,32),this.D=B().T(se,32),this.az.a[1+w.a.length|0]=this.R,this.R.a[T.a.length]=this.L,this.L.a[E.a.length]=this.H,this.H.a[oe.a.length]=this.D,this.D.a[se.a.length]=this.P;break;default:throw new y_(t)}return this.I===0&&this.z>0&&(this.I=32,this.z=-32+this.z|0),this}),F.m5=(function(e){return this.I===32&&Zv(this),this.P.a[this.I]=e,this.I=1+this.I|0,this}),F.kb=(function(e){return e instanceof Bw?this.I===0&&this.z===0&&!this.fw?this.no(e):Xv(this,e):Zf(this,e)}),F.lc=(function(){this.fw&&qv(this);var e=this.I+this.z|0,t=e-this.F|0;if(t===0)return Kv(),YT();if(e<0)throw r_(new i_,`Vector cannot have negative size `+e);if(e<=32){var n=this.P;return new zT(n.a.length===t?n:B().T(n,t))}else if(e<=1024){var r=31&(-1+e|0),i=(-1+e|0)>>>5|0,a=B().a1(this.D,1,i),o=this.D.a[0],s=this.D.a[i],c=1+r|0,l=s.a.length===c?s:B().T(s,c);return new XT(o,32-this.F|0,a,l,t)}else if(e<=32768){var u=31&(-1+e|0),d=31&((-1+e|0)>>>5|0),f=(-1+e|0)>>>10|0,p=B().a1(this.H,1,f),m=this.H.a[0],h=B().a1(m,1,m.a.length),g=this.H.a[0].a[0],_=B().T(this.H.a[f],d),v=this.H.a[f].a[d],y=1+u|0,b=v.a.length===y?v:B().T(v,y),ee=g.a.length;return new QT(g,ee,h,ee+(h.a.length<<5)|0,p,_,b,t)}else if(e<=1048576){var te=31&(-1+e|0),x=31&((-1+e|0)>>>5|0),S=31&((-1+e|0)>>>10|0),C=(-1+e|0)>>>15|0,ne=B().a1(this.L,1,C),re=this.L.a[0],ie=B().a1(re,1,re.a.length),ae=this.L.a[0].a[0],w=B().a1(ae,1,ae.a.length),T=this.L.a[0].a[0].a[0],E=B().T(this.L.a[C],S),oe=B().T(this.L.a[C].a[S],x),se=this.L.a[C].a[S].a[x],D=1+te|0,ce=se.a.length===D?se:B().T(se,D),le=T.a.length,ue=le+(w.a.length<<5)|0;return new eE(T,le,w,ue,ie,ue+(ie.a.length<<10)|0,ne,E,oe,ce,t)}else if(e<=33554432){var de=31&(-1+e|0),fe=31&((-1+e|0)>>>5|0),pe=31&((-1+e|0)>>>10|0),me=31&((-1+e|0)>>>15|0),he=(-1+e|0)>>>20|0,ge=B().a1(this.R,1,he),_e=this.R.a[0],ve=B().a1(_e,1,_e.a.length),ye=this.R.a[0].a[0],be=B().a1(ye,1,ye.a.length),xe=this.R.a[0].a[0].a[0],Se=B().a1(xe,1,xe.a.length),Ce=this.R.a[0].a[0].a[0].a[0],O=B().T(this.R.a[he],me),we=B().T(this.R.a[he].a[me],pe),Te=B().T(this.R.a[he].a[me].a[pe],fe),Ee=this.R.a[he].a[me].a[pe].a[fe],De=1+de|0,Oe=Ee.a.length===De?Ee:B().T(Ee,De),k=Ce.a.length,ke=k+(Se.a.length<<5)|0,Ae=ke+(be.a.length<<10)|0;return new nE(Ce,k,Se,ke,be,Ae,ve,Ae+(ve.a.length<<15)|0,ge,O,we,Te,Oe,t)}else{var je=31&(-1+e|0),Me=31&((-1+e|0)>>>5|0),Ne=31&((-1+e|0)>>>10|0),Pe=31&((-1+e|0)>>>15|0),Fe=31&((-1+e|0)>>>20|0),Ie=(-1+e|0)>>>25|0,Le=B().a1(this.az,1,Ie),Re=this.az.a[0],ze=B().a1(Re,1,Re.a.length),Be=this.az.a[0].a[0],Ve=B().a1(Be,1,Be.a.length),A=this.az.a[0].a[0].a[0],He=B().a1(A,1,A.a.length),Ue=this.az.a[0].a[0].a[0].a[0],We=B().a1(Ue,1,Ue.a.length),Ge=this.az.a[0].a[0].a[0].a[0].a[0],Ke=B().T(this.az.a[Ie],Fe),qe=B().T(this.az.a[Ie].a[Fe],Pe),Je=B().T(this.az.a[Ie].a[Fe].a[Pe],Ne),Ye=B().T(this.az.a[Ie].a[Fe].a[Pe].a[Ne],Me),j=this.az.a[Ie].a[Fe].a[Pe].a[Ne].a[Me],Xe=1+je|0,Ze=j.a.length===Xe?j:B().T(j,Xe),Qe=Ge.a.length,$e=Qe+(We.a.length<<5)|0,et=$e+(He.a.length<<10)|0,tt=et+(Ve.a.length<<15)|0;return new iE(Ge,Qe,We,$e,He,et,Ve,tt,ze,tt+(ze.a.length<<20)|0,Le,Ke,qe,Je,Ye,Ze,t)}}),F.E=(function(){return`VectorBuilder(len1=`+this.I+`, lenRest=`+this.z+`, offset=`+this.F+`, depth=`+this.J+`)`}),F.aW=(function(){return this.lc()}),F.aV=(function(e){return this.kb(e)}),F.aQ=(function(e){return this.m5(e)}),new R().i(ey,`scala.collection.immutable.VectorBuilder`,{fE:1,a6:1,L:1,H:1,F:1});function ny(){this.jM=null,iy=this,this.jM=new L(0)}F=ny.prototype=new I,F.constructor=ny;function ry(){}ry.prototype=F,F.cv=(function(e){return this.kT(e)}),F.kT=(function(e){var t=e.x();if(t>=0){var n=this.lf(this.jM,0,t),r=O_(e)?e.bx(n,0,2147483647):e.j().bx(n,0,2147483647);if(r!==t)throw new n_(`Copied `+r+` of `+t);return mE(new gE,n,t)}else return hE(new gE).kc(e)}),F.aS=(function(){return new oy}),F.o5=(function(e,t){if(t<0)throw Jh(new Yh,`Overflow while resizing array of array-backed collection. Requested length: `+t+`; current length: `+e+`; increase: `+(t-e|0));if(t<=e)return-1;if(t>2147483639)throw Jh(new Yh,`Array of array-backed collection exceeds VM length limit of 2147483639. Requested length: `+t+`; current length: `+e);if(e>1073741819)return 2147483639;var n=e<<1,r=n>16?n:16;return t>r?t:r}),F.lf=(function(e,t,n){var r=this.o5(e.a.length,n);if(r<0)return e;var i=new L(r);return e.s(0,i,0,t),i}),F.av=(function(e){return this.kT(e)}),new R().i(ny,`scala.collection.mutable.ArrayBuffer$`,{fJ:1,ag:1,Z:1,J:1,a:1});var iy;function ay(){return iy||=new ny,iy}function oy(){this.d8=null,Og(this,(ay(),hE(new gE)))}F=oy.prototype=new Ag,F.constructor=oy;function sy(){}sy.prototype=F,F.aX=(function(e){this.d8.aX(e)}),new R().i(oy,`scala.collection.mutable.ArrayBuffer$$anon$1`,{fK:1,aJ:1,L:1,H:1,F:1});function cy(){this.e7=null,ug(this,Ry())}F=cy.prototype=new fg,F.constructor=cy;function ly(){}ly.prototype=F,new R().i(cy,`scala.collection.mutable.Buffer$`,{fP:1,bg:1,Z:1,J:1,a:1});var uy;function dy(){return uy||=new cy,uy}function fy(e,t){this.d8=null,Og(this,Nw(new Fw,e,t))}F=fy.prototype=new Ag,F.constructor=fy;function py(){}py.prototype=F,F.aX=(function(e){this.d8.aX(e)}),new R().i(fy,`scala.collection.mutable.HashSet$$anon$4`,{fX:1,aJ:1,L:1,H:1,F:1});function my(e,t){return e.eJ=t,e.da=0,e.cp=null,e.eK=t.aN.a.length,e}function hy(){this.da=0,this.cp=null,this.eK=0,this.eJ=null}F=hy.prototype=new ag,F.constructor=hy;function gy(){}gy.prototype=F,F.k=(function(){if(this.cp!==null)return!0;for(;this.da<this.eK;){var e=this.eJ.aN.a[this.da];if(this.da=1+this.da|0,e!==null)return this.cp=e,!0}return!1}),F.f=(function(){if(this.k()){var e=this.h8(this.cp);return this.cp=this.cp.aO,e}else return J().G.f()});function _y(e,t){return e.eL=t,e}function vy(){this.eL=null}F=vy.prototype=new I,F.constructor=vy;function yy(){}yy.prototype=F,F.aX=(function(e){}),F.aV=(function(e){return Zf(this,e)}),F.aW=(function(){return this.eL});function by(){this.e7=null,ug(this,ay())}F=by.prototype=new fg,F.constructor=by;function xy(){}xy.prototype=F,new R().i(by,`scala.collection.mutable.IndexedSeq$`,{g0:1,bg:1,Z:1,J:1,a:1});var Sy;function Cy(){return Sy||=new by,Sy}function wy(){}F=wy.prototype=new I,F.constructor=wy;function Ty(){}Ty.prototype=F,F.cv=(function(e){return new fE().fR(e)}),F.aS=(function(){return Og(new kg,new fE)}),F.av=(function(e){return new fE().fR(e)}),new R().i(wy,`scala.collection.mutable.ListBuffer$`,{g3:1,ag:1,Z:1,J:1,a:1});var Ey;function Dy(){return Ey||=new wy,Ey}function Oy(e,t){this.gU=null,this.jW=null,this.jV=0,this.gU=e,this.jW=t,this.jV=t.af()|0}F=Oy.prototype=new ag,F.constructor=Oy;function ky(){}ky.prototype=F,F.k=(function(){return Nu().kx(this.jV,this.jW.af()|0,`mutation occurred during iteration`),this.gU.k()}),F.f=(function(){return this.gU.f()}),new R().i(Oy,`scala.collection.mutable.MutationTracker$CheckedIterator`,{g5:1,o:1,r:1,b:1,c:1});function Ay(e,t){return My(t)?e.aG()===t.aG():!1}function jy(e){return e.N.Z?`Array[`+jy(e.N.Q())+`]`:e.N.N}function My(e){return!!(e&&e.$classData&&e.$classData.n.E)}function Ny(e){this.eN=0,this.k0=0,this.k1=null,this.k1=e,this.eN=0,this.k0=e.cz()}F=Ny.prototype=new ag,F.constructor=Ny;function Py(){}Py.prototype=F,F.k=(function(){return this.eN<this.k0}),F.f=(function(){var e=this.k1.cA(this.eN);return this.eN=1+this.eN|0,e}),new R().i(Ny,`scala.runtime.ScalaRunTime$$anon$1`,{gL:1,o:1,r:1,b:1,c:1});function Fy(){}F=Fy.prototype=new I,F.constructor=Fy;function Iy(){}Iy.prototype=F,F.cv=(function(e){return this.kU(e)}),F.aS=(function(){return yE(new bE)}),F.kU=(function(e){return Zf(yE(new bE),e).aW()}),F.av=(function(e){return this.kU(e)}),new R().i(Fy,`scala.scalajs.js.WrappedArray$`,{gR:1,ag:1,Z:1,J:1,a:1});var Ly;function Ry(){return Ly||=new Fy,Ly}function zy(){}F=zy.prototype=new I,F.constructor=zy;function By(){}By.prototype=F,F.cv=(function(e){return this.he(e)}),F.he=(function(e){return this.aS().aV(e).aW()}),F.aS=(function(){return new Eg(vE(new bE,[]),new Y((e=>new Cw(e.db))))}),F.av=(function(e){return this.he(e)}),new R().i(zy,`scala.scalajs.runtime.WrappedVarArgs$`,{h2:1,ag:1,Z:1,J:1,a:1});var Vy;function Hy(){return Vy||=new zy,Vy}var Uy=class e extends xp{constructor(e,t){super(),this.dP=null,this.dO=0,this.dP=e,this.dO=t,Ef(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}dK(){return new S_(this)}y(){var e=-889275714;return e=K().d(e,ib(`TransactionDepthExceeded`)),e=K().d(e,K().M(this.dP)),e=K().d(e,this.dO),K().A(e,2)}u(t){return this===t?!0:t instanceof e&&this.dO===t.dO?this.dP===t.dP:!1}cz(){return 2}cB(){return`TransactionDepthExceeded`}cA(e){if(e===0)return this.dP;if(e===1)return this.dO;throw r_(new i_,``+e)}E(){return`TransactionDepthExceeded: `+this.dP+`; maxDepth: `+this.dO}};new R().i(Uy,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aL:1,bZ:1,w:1,a:1,d:1,a9:1});function Wy(e,t){this.fk=null,this.dV=null,this.g6=null,this.er=null,this.iu=null,this.cd=null,this.iu=e,this.cd=t,this.fk=db(),Ld(this),Vg(this)}F=Wy.prototype=new I,F.constructor=Wy;function Gy(){}Gy.prototype=F,F.c6=(function(e){$s().fI(e,this,void 0)}),F.fL=(function(){return this.dV}),F.kz=(function(e){this.dV=e}),F.lp=(function(e){Ug(this,e)}),F.li=(function(e){Wg(this,e)}),F.E=(function(){return`ReactiveHtmlElement(`+(this.cd===null?`tag=`+this.iu.hp():this.cd.outerHTML)+`)`}),F.dL=(function(){return this.cd}),new R().i(Wy,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{da:1,at:1,a2:1,aQ:1,aR:1,d9:1});function Ky(e,t){return Ef(e,t,null,!0,!0),e}function qy(e){return Ef(e,null,null,!0,!0),e}var Jy=class extends i_{};new R().i(Jy,`java.lang.ArrayIndexOutOfBoundsException`,{dw:1,aw:1,D:1,C:1,w:1,a:1});function Yy(e,t){return Object.is(e,t)}function Xy(e){return vc().ht(e)}var Zy=new R().i(0,`java.lang.Double`,{b0:1,a8:1,a:1,a0:1,W:1,ak:1},(e=>typeof e==`number`)),Qy=new R().i(0,`java.lang.Float`,{dC:1,a8:1,a:1,a0:1,W:1,ak:1},(e=>wa(e))),$y=new R().i(0,`java.lang.Integer`,{dF:1,a8:1,a:1,a0:1,W:1,ak:1},(e=>Ca(e)));function eb(e,t){return t instanceof V&&e.l===t.l&&e.n===t.n}function tb(e){return e.l^e.n}var nb=new R().i(0,`java.lang.Long`,{b2:1,a8:1,a:1,a0:1,W:1,ak:1},(e=>e instanceof V)),rb=class extends t_{constructor(e){super(),Ef(this,e,null,!0,!0)}};new R().i(rb,`java.lang.NumberFormatException`,{dL:1,b1:1,D:1,C:1,w:1,a:1});function ib(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ab(e,t){return e===t}var ob=new R().i(0,`java.lang.String`,{dQ:1,a:1,a0:1,av:1,W:1,ak:1},(e=>typeof e==`string`)),sb=class extends i_{constructor(){super(),Ef(this,null,null,!0,!0)}};new R().i(sb,`java.lang.StringIndexOutOfBoundsException`,{dT:1,aw:1,D:1,C:1,w:1,a:1});function cb(){}F=cb.prototype=new x_,F.constructor=cb;function lb(){}lb.prototype=F,F.nb=(function(){throw new f_(`None.get`)}),F.cB=(function(){return`None`}),F.cz=(function(){return 0}),F.cA=(function(e){return K().f4(e)}),F.dK=(function(){return new Ny(this)}),F.y=(function(){return 2433880}),F.E=(function(){return`None`}),F.aF=(function(){this.nb()}),new R().i(cb,`scala.None$`,{ef:1,b7:1,b:1,a9:1,d:1,a:1});var ub;function db(){return ub||=new cb,ub}function fb(e){this.ew=null,this.ew=e}F=fb.prototype=new x_,F.constructor=fb;function pb(){}pb.prototype=F,F.aF=(function(){return this.ew}),F.cB=(function(){return`Some`}),F.cz=(function(){return 1}),F.cA=(function(e){return e===0?this.ew:K().f4(e)}),F.dK=(function(){return new Ny(this)}),F.y=(function(){return q().hw(this,-889275714,!1)}),F.E=(function(){return G().lU(this)}),F.u=(function(e){return this===e||e instanceof fb&&W().o(this.ew,e.ew)}),new R().i(fb,`scala.Some`,{b8:1,b7:1,b:1,a9:1,d:1,a:1});function mb(){}F=mb.prototype=new I,F.constructor=mb;function hb(){}hb.prototype=F,F.bH=(function(){return this.ba()}),F.f0=(function(e){return this.b8().av(e)}),F.f5=(function(){return this.b8().aS()}),F.bI=(function(e){ql(this,e)}),F.ej=(function(e){return Jl(this,e)}),F.b=(function(){return Yl(this)}),F.bx=(function(e,t,n){return Xl(this,e,t,n)}),F.dd=(function(e,t,n,r){return Ql(this,e,t,n,r)}),F.x=(function(){return-1}),F.eZ=(function(e){return this.f0(e)});function gb(e,t){return e.bq=t,e.w=0,e.bc=hl().bJ(e.bq),e}function _b(){this.bq=null,this.w=0,this.bc=0}F=_b.prototype=new ag,F.constructor=_b;function vb(){}vb.prototype=F,F.x=(function(){return this.bc-this.w|0}),F.k=(function(){return this.w<this.bc}),F.f=(function(){this.w>=hl().bJ(this.bq)&&J().G.f();var e=G().dG(this.bq,this.w);return this.w=1+this.w|0,e}),F.dk=(function(e){if(e>0){var t=this.w+e|0;if(t<0)var n=this.bc;else var r=this.bc,n=r<t?r:t;this.w=n}return this}),new R().i(_b,`scala.collection.ArrayOps$ArrayIterator`,{X:1,o:1,r:1,b:1,c:1,a:1});function yb(e,t){return t<0?0:t>e.br?e.br:t}function bb(e,t){return e.gv=t,e.ce=0,e.br=t.p(),e}function xb(){this.gv=null,this.ce=0,this.br=0}F=xb.prototype=new ag,F.constructor=xb;function Sb(){}Sb.prototype=F,F.x=(function(){return this.br}),F.k=(function(){return this.br>0}),F.f=(function(){if(this.br>0){var e=this.gv.t(this.ce);return this.ce=1+this.ce|0,this.br=-1+this.br|0,e}else return J().G.f()}),F.dk=(function(e){if(e>0){this.ce=this.ce+e|0;var t=this.br-e|0;this.br=t<0?0:t}return this}),F.f9=(function(e,t){var n=yb(this,e),r=yb(this,t)-n|0;return this.br=r<0?0:r,this.ce=this.ce+n|0,this}),new R().i(xb,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{be:1,o:1,r:1,b:1,c:1,a:1});function Cb(){this.eL=null,_y(this,J().G)}F=Cb.prototype=new yy,F.constructor=Cb;function wb(){}wb.prototype=F,F.m3=(function(e){return this.eL=this.eL.h3(new ph((()=>new j_(e)))),this}),F.aQ=(function(e){return this.m3(e)}),new R().i(Cb,`scala.collection.Iterator$$anon$21`,{eG:1,fZ:1,a6:1,L:1,H:1,F:1});function Tb(e,t){for(var n=e.j();n.k();){var r=n.f();t.ct(r.b2(),r.b0())}}function Eb(e,t,n,r,i){return Ql(new F_(e.j(),new Y((e=>{if(e!==null){var t=e.b2(),n=e.b0();return t+` -> `+n}else throw new y_(e)}))),t,n,r,i)}function Db(e,t){for(var n=e.f5(),r=Pw(new Fw),i=e.j();i.k();){var a=i.f();r.fH(t.h(a))&&n.aQ(a)}return n.aW()}function Ob(e,t){var n=e.dn().aS();return n.aV(e),n.aV(t),n.aW()}function kb(e){return e.gz||=(e.gA=new iT(new L(0)),!0),e.gA}function Ab(e){return e.gz?e.gA:kb(e)}function jb(){this.gA=null,this.gB=null,this.gz=!1,Nb=this,this.gB=new T_(this)}F=jb.prototype=new I,F.constructor=jb;function Mb(){}Mb.prototype=F,F.hb=(function(e,t){return e instanceof Lw?e:this.hA(If().kQ(e,t))}),F.fP=(function(e){return new Eg((ay(),new oy),new Y((t=>Pb().hA($l(t,e)))))}),F.hA=(function(e){if(e===null)return null;if(e instanceof L)return new iT(e);if(e instanceof Fa)return new eT(e);if(e instanceof Ra)return new Xw(e);if(e instanceof Ia)return new nT(e);if(e instanceof La)return new Qw(e);if(e instanceof Ma)return new Jw(e);if(e instanceof Na)return new Kw(e);if(e instanceof Pa)return new oT(e);if(e instanceof ja)return new Ww(e);if(ll(e,1))return new cT(e);throw new y_(e)}),F.ha=(function(e,t){return this.hb(e,t)}),new R().i(jb,`scala.collection.immutable.ArraySeq$`,{eV:1,bi:1,bb:1,ba:1,bc:1,a:1});var Nb;function Pb(){return Nb||=new jb,Nb}function Fb(e,t){for(this.bt=0,this.eB=0,this.dy=null,this.bf=0,this.ch=null,this.eC=null,av(this,t.b4);this.k();){var n=this.dy.f1(this.bt);e.ep(e.c2,this.dy.dl(this.bt),this.dy.cx(this.bt),n,Kl().bW(n),0),this.bt=1+this.bt|0}}F=Fb.prototype=new sv,F.constructor=Fb;function Ib(){}Ib.prototype=F,F.hq=(function(){throw J().G.f(),new Qg}),F.f=(function(){this.hq()}),new R().i(Fb,`scala.collection.immutable.HashMapBuilder$$anon$1`,{eZ:1,bv:1,o:1,r:1,b:1,c:1});function Lb(e){return!!(e&&e.$classData&&e.$classData.n.t)}function Rb(e){this.cT=0,this.eb=null,jv(this,e)}F=Rb.prototype=new Nv,F.constructor=Rb;function zb(){}zb.prototype=F,new R().i(Rb,`scala.collection.immutable.Map$Map2$$anon$1`,{fd:1,fe:1,o:1,r:1,b:1,c:1});function Bb(e){this.cV=0,this.cU=null,Pv(this,e)}F=Bb.prototype=new Iv,F.constructor=Bb;function Vb(){}Vb.prototype=F,new R().i(Bb,`scala.collection.immutable.Map$Map3$$anon$4`,{ff:1,fg:1,o:1,r:1,b:1,c:1});function Hb(e){this.cW=0,this.c4=null,Lv(this,e)}F=Hb.prototype=new zv,F.constructor=Hb;function Ub(){}Ub.prototype=F,new R().i(Hb,`scala.collection.immutable.Map$Map4$$anon$7`,{fh:1,fi:1,o:1,r:1,b:1,c:1});function Wb(e){this.cP=0,this.ft=null,this.bu=0,this.eD=null,this.eE=null,this.gI=0,this.jG=null,pv(this,e),this.gI=0}F=Wb.prototype=new hv,F.constructor=Wb;function Gb(){}Gb.prototype=F,F.y=(function(){return q().lm(this.gI,K().M(this.jG),-889275714)}),F.nG=(function(){return this.k()||J().G.f(),this.gI=this.ft.f1(this.cP),this.jG=this.ft.cx(this.cP),this.cP=-1+this.cP|0,this}),F.f=(function(){return this.nG()}),new R().i(Wb,`scala.collection.immutable.MapKeyValueTupleHashIterator`,{fk:1,eW:1,o:1,r:1,b:1,c:1});function Kb(e){this.bt=0,this.eB=0,this.dy=null,this.bf=0,this.ch=null,this.eC=null,av(this,e)}F=Kb.prototype=new sv,F.constructor=Kb;function qb(){}qb.prototype=F,F.nF=(function(){this.k()||J().G.f();var e=this.dy.kW(this.bt);return this.bt=1+this.bt|0,e}),F.f=(function(){return this.nF()}),new R().i(Kb,`scala.collection.immutable.MapKeyValueTupleIterator`,{fl:1,bv:1,o:1,r:1,b:1,c:1});function Jb(e){e.bk<=e.aq&&J().G.f(),e.cY=1+e.cY|0;for(var t=e.gK.cb(e.cY);t.a.length===0;)e.cY=1+e.cY|0,t=e.gK.cb(e.cY);e.eG=e.dC;var n=e.jI,r=e.cY,i=n/2|0,a=r-i|0;e.cX=(1+i|0)-(a<0?-a|0:a)|0;var o=e.cX;switch(o){case 1:e.aJ=t;break;case 2:e.aK=t;break;case 3:e.b5=t;break;case 4:e.bS=t;break;case 5:e.dB=t;break;case 6:e.gJ=t;break;default:throw new y_(o)}e.dC=e.eG+Math.imul(t.a.length,1<<Math.imul(5,-1+e.cX|0))|0,e.dC>e.cn&&(e.dC=e.cn),e.cX>1&&(e.ec=-1+(1<<Math.imul(5,e.cX))|0)}function Yb(e){var t=(e.aq-e.bk|0)+e.cn|0;if(t===e.dC&&Jb(e),e.cX>1){var n=t-e.eG|0;Xb(e,n,e.ec^n),e.ec=n}e.bk=e.bk-e.aq|0;var r=e.aJ.a.length,i=e.bk;e.cm=r<i?r:i,e.aq=0}function Xb(e,t,n){n<1024?e.aJ=e.aK.a[31&(t>>>5|0)]:n<32768?(e.aK=e.b5.a[31&(t>>>10|0)],e.aJ=e.aK.a[0]):n<1048576?(e.b5=e.bS.a[31&(t>>>15|0)],e.aK=e.b5.a[0],e.aJ=e.aK.a[0]):n<33554432?(e.bS=e.dB.a[31&(t>>>20|0)],e.b5=e.bS.a[0],e.aK=e.b5.a[0],e.aJ=e.aK.a[0]):(e.dB=e.gJ.a[t>>>25|0],e.bS=e.dB.a[0],e.b5=e.bS.a[0],e.aK=e.b5.a[0],e.aJ=e.aK.a[0])}function Zb(e,t,n){n<1024?e.aJ=e.aK.a[31&(t>>>5|0)]:n<32768?(e.aK=e.b5.a[31&(t>>>10|0)],e.aJ=e.aK.a[31&(t>>>5|0)]):n<1048576?(e.b5=e.bS.a[31&(t>>>15|0)],e.aK=e.b5.a[31&(t>>>10|0)],e.aJ=e.aK.a[31&(t>>>5|0)]):n<33554432?(e.bS=e.dB.a[31&(t>>>20|0)],e.b5=e.bS.a[31&(t>>>15|0)],e.aK=e.b5.a[31&(t>>>10|0)],e.aJ=e.aK.a[31&(t>>>5|0)]):(e.dB=e.gJ.a[t>>>25|0],e.bS=e.dB.a[31&(t>>>20|0)],e.b5=e.bS.a[31&(t>>>15|0)],e.aK=e.b5.a[31&(t>>>10|0)],e.aJ=e.aK.a[31&(t>>>5|0)])}function Qb(e,t,n){this.gK=null,this.cn=0,this.jI=0,this.aJ=null,this.aK=null,this.b5=null,this.bS=null,this.dB=null,this.gJ=null,this.cm=0,this.aq=0,this.ec=0,this.bk=0,this.cY=0,this.cX=0,this.eG=0,this.dC=0,this.gK=e,this.cn=t,this.jI=n,this.aJ=e.c,this.cm=this.aJ.a.length,this.aq=0,this.ec=0,this.bk=this.cn,this.cY=0,this.cX=1,this.eG=0,this.dC=this.cm}F=Qb.prototype=new ag,F.constructor=Qb;function $b(){}$b.prototype=F,F.x=(function(){return this.bk-this.aq|0}),F.k=(function(){return this.bk>this.aq}),F.f=(function(){this.aq===this.cm&&Yb(this);var e=this.aJ.a[this.aq];return this.aq=1+this.aq|0,e}),F.dk=(function(e){if(e>0){var t=((this.aq-this.bk|0)+this.cn|0)+e|0,n=this.cn,r=t<n?t:n;if(r===this.cn)this.aq=0,this.bk=0,this.cm=0;else{for(;r>=this.dC;)Jb(this);var i=r-this.eG|0;this.cX>1&&(Zb(this,i,this.ec^i),this.ec=i),this.cm=this.aJ.a.length,this.aq=31&i,this.bk=this.aq+(this.cn-r|0)|0,this.cm>this.bk&&(this.cm=this.bk)}}return this}),F.bx=(function(e,t,n){for(var r=hl().bJ(e),i=this.bk-this.aq|0,a=n<i?n:i,o=r-t|0,s=a<o?a:o,c=s>0?s:0,l=0,u=e instanceof L;l<c;){this.aq===this.cm&&Yb(this);var d=c-l|0,f=this.aJ.a.length-this.aq|0,p=d<f?d:f;if(u){var m=this.aJ,h=this.aq,g=t+l|0;m.s(h,e,g,p)}else If().eX(this.aJ,this.aq,e,t+l|0,p);this.aq=this.aq+p|0,l=l+p|0}return c}),new R().i(Qb,`scala.collection.immutable.NewVectorIterator`,{fn:1,o:1,r:1,b:1,c:1,A:1});function ex(e){return e.gO=0,e.jO=0,e}function tx(){this.gO=0,this.jO=0}F=tx.prototype=new I,F.constructor=tx;function nx(){}nx.prototype=F,F.aX=(function(e){this.gO<e&&this.o4(e)});function rx(){this.gQ=null,this.jQ=null,ax=this,this.gQ=new T_(this),this.jQ=new AT(new L(0))}F=rx.prototype=new I,F.constructor=rx;function ix(){}ix.prototype=F,F.n4=(function(e,t){return this.hn(If().kQ(e,t))}),F.fP=(function(e){return new Eg(new Lx(e.aG()),new Y((e=>ox().hn(e))))}),F.hn=(function(e){if(e===null)return null;if(e instanceof L)return new AT(e);if(e instanceof Fa)return new ET(e);if(e instanceof Ra)return new ST(e);if(e instanceof Ia)return new OT(e);if(e instanceof La)return new wT(e);if(e instanceof Ma)return new bT(e);if(e instanceof Na)return new vT(e);if(e instanceof Pa)return new MT(e);if(e instanceof ja)return new gT(e);if(ll(e,1))return new PT(e);throw new y_(e)}),F.ha=(function(e,t){return this.n4(e,t)}),new R().i(rx,`scala.collection.mutable.ArraySeq$`,{fO:1,bi:1,bb:1,ba:1,bc:1,a:1});var ax;function ox(){return ax||=new rx,ax}function sx(e){this.da=0,this.cp=null,this.eK=0,this.eJ=null,my(this,e)}F=sx.prototype=new gy,F.constructor=sx;function cx(){}cx.prototype=F,F.h8=(function(e){return e.ef}),new R().i(sx,`scala.collection.mutable.HashSet$$anon$1`,{fU:1,aK:1,o:1,r:1,b:1,c:1});function lx(e){this.da=0,this.cp=null,this.eK=0,this.eJ=null,my(this,e)}F=lx.prototype=new gy,F.constructor=lx;function ux(){}ux.prototype=F,F.h8=(function(e){return e}),new R().i(lx,`scala.collection.mutable.HashSet$$anon$2`,{fV:1,aK:1,o:1,r:1,b:1,c:1});function dx(e){this.da=0,this.cp=null,this.eK=0,this.eJ=null,this.gT=0,this.jU=null,this.jU=e,my(this,e),this.gT=0}F=dx.prototype=new gy,F.constructor=dx;function fx(){}fx.prototype=F,F.y=(function(){return this.gT}),F.h8=(function(e){return this.gT=this.jU.fQ(e.cq),this}),new R().i(dx,`scala.collection.mutable.HashSet$$anon$3`,{fW:1,aK:1,o:1,r:1,b:1,c:1});function px(e){this.eM=null,this.eM=e}F=px.prototype=new I,F.constructor=px;function mx(){}mx.prototype=F,F.u=(function(e){return Ay(this,e)}),F.y=(function(){return K().M(this.eM)}),F.E=(function(){return jy(this.eM)}),F.aG=(function(){return this.eM}),F.b9=(function(e){return this.eM.N.U(e)}),new R().i(px,`scala.reflect.ClassTag$GenericClassTag`,{gd:1,E:1,O:1,P:1,a:1,d:1});function hx(){}F=hx.prototype=new Yg,F.constructor=hx;function gx(){}gx.prototype=F;function _x(e){this.bq=null,this.w=0,this.bc=0,this.gn=null,this.gn=e,gb(this,e)}F=_x.prototype=new vb,F.constructor=_x;function vx(){}vx.prototype=F,F.nH=(function(){this.w>=this.gn.a.length&&J().G.f();var e=this.gn.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nH()}),new R().i(_x,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{ep:1,X:1,o:1,r:1,b:1,c:1,a:1});function yx(e){this.bq=null,this.w=0,this.bc=0,this.go=null,this.go=e,gb(this,e)}F=yx.prototype=new vb,F.constructor=yx;function bx(){}bx.prototype=F,F.nI=(function(){this.w>=this.go.a.length&&J().G.f();var e=this.go.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return Ta(this.nI())}),new R().i(yx,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{eq:1,X:1,o:1,r:1,b:1,c:1,a:1});function xx(e){this.bq=null,this.w=0,this.bc=0,this.gp=null,this.gp=e,gb(this,e)}F=xx.prototype=new vb,F.constructor=xx;function Sx(){}Sx.prototype=F,F.nJ=(function(){this.w>=this.gp.a.length&&J().G.f();var e=this.gp.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nJ()}),new R().i(xx,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{er:1,X:1,o:1,r:1,b:1,c:1,a:1});function Cx(e){this.bq=null,this.w=0,this.bc=0,this.gq=null,this.gq=e,gb(this,e)}F=Cx.prototype=new vb,F.constructor=Cx;function wx(){}wx.prototype=F,F.nK=(function(){this.w>=this.gq.a.length&&J().G.f();var e=this.gq.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nK()}),new R().i(Cx,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{es:1,X:1,o:1,r:1,b:1,c:1,a:1});function Tx(e){this.bq=null,this.w=0,this.bc=0,this.gr=null,this.gr=e,gb(this,e)}F=Tx.prototype=new vb,F.constructor=Tx;function Ex(){}Ex.prototype=F,F.nL=(function(){this.w>=this.gr.a.length&&J().G.f();var e=this.gr.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nL()}),new R().i(Tx,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{et:1,X:1,o:1,r:1,b:1,c:1,a:1});function Dx(e){this.bq=null,this.w=0,this.bc=0,this.gs=null,this.gs=e,gb(this,e)}F=Dx.prototype=new vb,F.constructor=Dx;function Ox(){}Ox.prototype=F,F.nM=(function(){this.w>=this.gs.a.length&&J().G.f();var e=this.gs.a[this.w],t=e.l,n=e.n;return this.w=1+this.w|0,new V(t,n)}),F.f=(function(){return this.nM()}),new R().i(Dx,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{eu:1,X:1,o:1,r:1,b:1,c:1,a:1});function kx(e){this.bq=null,this.w=0,this.bc=0,this.gt=null,this.gt=e,gb(this,e)}F=kx.prototype=new vb,F.constructor=kx;function Ax(){}Ax.prototype=F,F.nN=(function(){this.w>=this.gt.a.length&&J().G.f();var e=this.gt.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nN()}),new R().i(kx,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{ev:1,X:1,o:1,r:1,b:1,c:1,a:1});function jx(e){this.bq=null,this.w=0,this.bc=0,this.jr=null,this.jr=e,gb(this,e)}F=jx.prototype=new vb,F.constructor=jx;function Mx(){}Mx.prototype=F,F.nO=(function(){this.w>=this.jr.a.length&&J().G.f(),this.w=1+this.w|0}),F.f=(function(){this.nO()}),new R().i(jx,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{ew:1,X:1,o:1,r:1,b:1,c:1,a:1});function Nx(e){this.bq=null,this.w=0,this.bc=0,this.gu=null,this.gu=e,gb(this,e)}F=Nx.prototype=new vb,F.constructor=Nx;function Px(){}Px.prototype=F,F.nP=(function(){this.w>=this.gu.a.length&&J().G.f();var e=this.gu.a[this.w];return this.w=1+this.w|0,e}),F.f=(function(){return this.nP()}),new R().i(Nx,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{ex:1,X:1,o:1,r:1,b:1,c:1,a:1});function Fx(e){return e.bH()+`(<not computed>)`}function Ix(e){return!!(e&&e.$classData&&e.$classData.n.aa)}function Lx(e){this.gO=0,this.jO=0,this.ee=null,this.jP=!1,this.gP=null,this.ee=e,ex(this),this.jP=e===Va.l(),this.gP=[]}F=Lx.prototype=new nx,F.constructor=Lx;function Rx(){}Rx.prototype=F,F.ke=(function(e){var t=this.jP?Ea(e):e===null?this.ee.N.z:e;return this.gP.push(t),this}),F.lX=(function(e){for(var t=e.j();t.k();)this.ke(t.f());return this}),F.o4=(function(e){}),F.aW=(function(){return(this.ee===za.l()?ul.l():this.ee===Lu.l()||this.ee===vh.l()?z.l():this.ee).N.r().w(this.gP)}),F.E=(function(){return`ArrayBuilder.generic`}),F.aV=(function(e){return this.lX(e)}),F.aQ=(function(e){return this.ke(e)}),new R().i(Lx,`scala.collection.mutable.ArrayBuilder$generic`,{fN:1,fM:1,a6:1,L:1,H:1,F:1,a:1});function zx(e,t){this.gv=null,this.ce=0,this.br=0,this.jT=null,this.jS=0,this.jT=t,bb(this,e),this.jS=t.af()|0}F=zx.prototype=new Sb,F.constructor=zx;function Bx(){}Bx.prototype=F,F.k=(function(){return Nu().kx(this.jS,this.jT.af()|0,`mutation occurred during iteration`),this.br>0}),new R().i(zx,`scala.collection.mutable.CheckedIndexedSeqView$CheckedIterator`,{fR:1,be:1,o:1,r:1,b:1,c:1,a:1});function Vx(){this.S=null}F=Vx.prototype=new I,F.constructor=Vx;function Hx(){}Hx.prototype=F,F.E=(function(){return this.S}),F.u=(function(e){return this===e}),F.y=(function(){return ba(this)});function Ux(){}F=Ux.prototype=new I,F.constructor=Ux;function Wx(){}Wx.prototype=F;var Gx=class e extends Yh{constructor(e){super(),this.bT=null,this.bT=e,Ef(this,null,null,!0,!0)}f2(){return fa(this.bT)}cB(){return`JavaScriptException`}cz(){return 1}cA(e){return e===0?this.bT:K().f4(e)}dK(){return new Ny(this)}y(){return q().hw(this,-889275714,!1)}u(t){return this===t||t instanceof e&&W().o(this.bT,t.bT)}};new R().i(Gx,`scala.scalajs.js.JavaScriptException`,{bX:1,D:1,C:1,w:1,a:1,a9:1,d:1});function Kx(e,t){typeof console<`u`&&(e.jc&&console.error?console.error(t):console.log(t))}function qx(e){this.jc=!1,this.et=null,this.jc=e,new a_,this.et=``}F=qx.prototype=new gx,F.constructor=qx;function Jx(){}Jx.prototype=F,F.ns=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.et=``+this.et+t,t=``;else{var r=this.et,i=t;Kx(this,``+r+i.substring(0,n)),this.et=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new R().i(qx,`java.lang.JSConsoleBasedPrintStream`,{dH:1,du:1,dt:1,aV:1,aT:1,aX:1,aU:1,aW:1});function Yx(e,t,n){for(;;)if(t<=0||n.b())return n;else{var r=-1+t|0,i=n.r();t=r,n=i}}function Xx(e,t){if(e.bm(1)<=0)return e;for(var n=e.f5(),r=Pw(new Fw),i=e.j(),a=!1;i.k();){var o=i.f();r.fH(t.h(o))?n.aQ(o):a=!0}return a?n.aW():e}function Zx(){this.S=null}F=Zx.prototype=new Hx,F.constructor=Zx;function Qx(){}Qx.prototype=F,F.aG=(function(){return Ba.l()}),F.b9=(function(e){return new ja(e)});function $x(){this.S=null}F=$x.prototype=new Hx,F.constructor=$x;function eS(){}eS.prototype=F,F.aG=(function(){return Ha.l()}),F.b9=(function(e){return new Na(e)});function tS(){this.S=null}F=tS.prototype=new Hx,F.constructor=tS;function nS(){}nS.prototype=F,F.aG=(function(){return Va.l()}),F.b9=(function(e){return new Ma(e)});function rS(){this.S=null}F=rS.prototype=new Hx,F.constructor=rS;function iS(){}iS.prototype=F,F.aG=(function(){return qa.l()}),F.b9=(function(e){return new Ra(e)});function aS(){this.S=null}F=aS.prototype=new Hx,F.constructor=aS;function oS(){}oS.prototype=F,F.aG=(function(){return Ka.l()}),F.b9=(function(e){return new La(e)});function sS(){this.S=null}F=sS.prototype=new Hx,F.constructor=sS;function cS(){}cS.prototype=F,F.aG=(function(){return Wa.l()}),F.b9=(function(e){return new Fa(e)});function lS(){this.S=null}F=lS.prototype=new Hx,F.constructor=lS;function uS(){}uS.prototype=F,F.aG=(function(){return Ga.l()}),F.b9=(function(e){return new Ia(e)});function dS(){this.cs=null}F=dS.prototype=new Wx,F.constructor=dS;function fS(){}fS.prototype=F,F.E=(function(){return this.cs}),F.u=(function(e){return this===e}),F.y=(function(){return ba(this)});function pS(){this.S=null}F=pS.prototype=new Hx,F.constructor=pS;function mS(){}mS.prototype=F,F.aG=(function(){return Ua.l()}),F.b9=(function(e){return new Pa(e)});function hS(){this.S=null}F=hS.prototype=new Hx,F.constructor=hS;function gS(){}gS.prototype=F,F.aG=(function(){return za.l()}),F.b9=(function(e){return new(ul.r()).C(e)});function _S(){}F=_S.prototype=new hb,F.constructor=_S;function vS(){}vS.prototype=F,F.b8=(function(){return Um()}),F.E=(function(){return Fx(this)}),F.ba=(function(){return`View`});function yS(e,t){if(e===t)return!0;if(bS(t))if(e.aH()===t.aH())try{return e.oi(t)}catch(e){if(e instanceof Qg)return!1;throw e}else return!1;else return!1}function bS(e){return!!(e&&e.$classData&&e.$classData.n.aC)}function xS(){this.cs=null,this.cs=`Any`}F=xS.prototype=new fS,F.constructor=xS;function SS(){}SS.prototype=F,F.aG=(function(){return z.l()}),F.b9=(function(e){return new L(e)}),new R().i(xS,`scala.reflect.ManifestFactory$AnyManifest$`,{ge:1,as:1,ar:1,S:1,E:1,O:1,P:1,a:1,d:1});var CS;function wS(){return CS||=new xS,CS}function TS(){this.S=null,this.S=`Boolean`}F=TS.prototype=new Qx,F.constructor=TS;function ES(){}ES.prototype=F,new R().i(TS,`scala.reflect.ManifestFactory$BooleanManifest$`,{gg:1,gf:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var DS;function OS(){return DS||=new TS,DS}function kS(){this.S=null,this.S=`Byte`}F=kS.prototype=new eS,F.constructor=kS;function AS(){}AS.prototype=F,new R().i(kS,`scala.reflect.ManifestFactory$ByteManifest$`,{gi:1,gh:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var jS;function MS(){return jS||=new kS,jS}function NS(){this.S=null,this.S=`Char`}F=NS.prototype=new nS,F.constructor=NS;function PS(){}PS.prototype=F,new R().i(NS,`scala.reflect.ManifestFactory$CharManifest$`,{gk:1,gj:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var FS;function IS(){return FS||=new NS,FS}function LS(){this.S=null,this.S=`Double`}F=LS.prototype=new iS,F.constructor=LS;function RS(){}RS.prototype=F,new R().i(LS,`scala.reflect.ManifestFactory$DoubleManifest$`,{gm:1,gl:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var zS;function BS(){return zS||=new LS,zS}function VS(){this.S=null,this.S=`Float`}F=VS.prototype=new oS,F.constructor=VS;function HS(){}HS.prototype=F,new R().i(VS,`scala.reflect.ManifestFactory$FloatManifest$`,{go:1,gn:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var US;function WS(){return US||=new VS,US}function GS(){this.S=null,this.S=`Int`}F=GS.prototype=new cS,F.constructor=GS;function KS(){}KS.prototype=F,new R().i(GS,`scala.reflect.ManifestFactory$IntManifest$`,{gq:1,gp:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var qS;function JS(){return qS||=new GS,qS}function YS(){this.S=null,this.S=`Long`}F=YS.prototype=new uS,F.constructor=YS;function XS(){}XS.prototype=F,new R().i(YS,`scala.reflect.ManifestFactory$LongManifest$`,{gs:1,gr:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var ZS;function QS(){return ZS||=new YS,ZS}function $S(){this.cs=null,this.cs=`Nothing`}F=$S.prototype=new fS,F.constructor=$S;function eC(){}eC.prototype=F,F.aG=(function(){return vh.l()}),F.b9=(function(e){return new L(e)}),new R().i($S,`scala.reflect.ManifestFactory$NothingManifest$`,{gt:1,as:1,ar:1,S:1,E:1,O:1,P:1,a:1,d:1});var tC;function nC(){return tC||=new $S,tC}function rC(){this.cs=null,this.cs=`Null`}F=rC.prototype=new fS,F.constructor=rC;function iC(){}iC.prototype=F,F.aG=(function(){return Lu.l()}),F.b9=(function(e){return new L(e)}),new R().i(rC,`scala.reflect.ManifestFactory$NullManifest$`,{gu:1,as:1,ar:1,S:1,E:1,O:1,P:1,a:1,d:1});var aC;function oC(){return aC||=new rC,aC}function sC(){this.cs=null,this.cs=`Object`}F=sC.prototype=new fS,F.constructor=sC;function cC(){}cC.prototype=F,F.aG=(function(){return z.l()}),F.b9=(function(e){return new L(e)}),new R().i(sC,`scala.reflect.ManifestFactory$ObjectManifest$`,{gv:1,as:1,ar:1,S:1,E:1,O:1,P:1,a:1,d:1});var lC;function uC(){return lC||=new sC,lC}function dC(){this.S=null,this.S=`Short`}F=dC.prototype=new mS,F.constructor=dC;function fC(){}fC.prototype=F,new R().i(dC,`scala.reflect.ManifestFactory$ShortManifest$`,{gx:1,gw:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var pC;function mC(){return pC||=new dC,pC}function hC(){this.S=null,this.S=`Unit`}F=hC.prototype=new gS,F.constructor=hC;function gC(){}gC.prototype=F,new R().i(hC,`scala.reflect.ManifestFactory$UnitManifest$`,{gz:1,gy:1,a1:1,S:1,E:1,O:1,P:1,a:1,d:1});var _C;function vC(){return _C||=new hC,_C}function yC(e,t){return e===t?!0:bC(t)&&t.fK(e)?e.eo(t):!1}function bC(e){return!!(e&&e.$classData&&e.$classData.n.m)}function xC(e){this.jA=null,this.jA=e}F=xC.prototype=new vS,F.constructor=xC;function SC(){}SC.prototype=F,F.j=(function(){return this.jA.af()}),new R().i(xC,`scala.collection.View$$anon$1`,{eR:1,al:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function CC(e,t){this.fs=null,this.jB=null,this.fs=e,this.jB=t}F=CC.prototype=new vS,F.constructor=CC;function wC(){}wC.prototype=F,F.j=(function(){return new N_(this.fs.j(),this.jB)}),F.x=(function(){return this.fs.x()===0?0:-1}),F.b=(function(){return this.fs.b()}),new R().i(CC,`scala.collection.View$DistinctBy`,{eS:1,al:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1});function TC(){}F=TC.prototype=new hb,F.constructor=TC;function EC(){}EC.prototype=F,F.u=(function(e){return yS(this,e)}),F.ba=(function(){return`Set`}),F.E=(function(){return D_(this)}),F.oi=(function(e){return this.ej(e)}),F.h=(function(e){return this.bU(e)});function DC(e,t){if(e===t)return!0;if(OC(t))if(e.aH()===t.aH())try{return e.ej(new Y((e=>(t=>W().o(e.dm(t.b2(),lg().jz),t.b0())))(t)))}catch(e){if(e instanceof Qg)return!1;throw e}else return!1;else return!1}function OC(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function kC(){}F=kC.prototype=new hb,F.constructor=kC;function AC(){}AC.prototype=F,F.fK=(function(e){return!0}),F.u=(function(e){return yC(this,e)}),F.y=(function(){return q().lg(this)}),F.E=(function(){return D_(this)}),F.c8=(function(e){return mg(this,e)}),F.bm=(function(e){return Am(this,e)}),F.b=(function(){return hg(this)}),F.eo=(function(e){return gg(this,e)});function jC(){}F=jC.prototype=new vS,F.constructor=jC;function MC(){}MC.prototype=F,F.ba=(function(){return`SeqView`}),F.c8=(function(e){return mg(this,e)}),F.bm=(function(e){return Am(this,e)}),F.b=(function(){return hg(this)});function NC(e){return!!(e&&e.$classData&&e.$classData.n.p)}function PC(e){return!!(e&&e.$classData&&e.$classData.n.am)}function FC(){}F=FC.prototype=new hb,F.constructor=FC;function IC(){}IC.prototype=F,F.u=(function(e){return DC(this,e)}),F.y=(function(){return q().nA(this)}),F.ba=(function(){return`Map`}),F.E=(function(){return D_(this)}),F.f0=(function(e){return this.l0().av(e)}),F.dI=(function(e){Tb(this,e)}),F.dd=(function(e,t,n,r){return Eb(this,e,t,n,r)});function LC(e,t){return e.dw=t,e}function RC(){this.dw=null}F=RC.prototype=new MC,F.constructor=RC;function zC(){}zC.prototype=F,F.t=(function(e){return this.dw.t(e)}),F.p=(function(){return this.dw.p()}),F.j=(function(){return this.dw.j()}),F.x=(function(){return this.dw.x()}),F.b=(function(){return this.dw.b()}),new R().i(RC,`scala.collection.SeqView$Id`,{bh:1,ay:1,al:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aB:1,l:1});function BC(){this.hU=null,this.hV=!1,this.i5=null,this.i6=!1,this.hW=null,this.hX=!1,this.hZ=null,this.i0=!1,this.i1=null,this.i2=!1,this.ib=null,this.ic=!1,this.i3=null,this.i4=!1,this.fZ=null,this.hY=null,this.i7=null,this.i8=!1,this.lr=null,this.hS=null,this.hT=!1,this.i9=null,this.ia=!1,hs(this),ls(this),ss(this),cs(this)}F=BC.prototype=new I,F.constructor=BC;function VC(){}VC.prototype=F,F.lV=(function(){return this.hV||=(this.hU=Rd(new zd,`a`,!1),!0),this.hU}),F.lj=(function(){return this.i6||=(this.i5=Rd(new zd,`span`,!1),!0),this.i5}),F.h2=(function(){return this.hX||=(this.hW=Rd(new zd,`br`,!0),!0),this.hW}),F.mE=(function(){return this.i0||=(this.hZ=Rd(new zd,`div`,!1),!0),this.hZ}),F.nk=(function(){return this.i2||=(this.i1=vd(new yd,`href`,ms().bb),!0),this.i1}),F.ox=(function(){return this.ic||=(this.ib=new xd(`value`,ms().bb),!0),this.ib}),F.hl=(function(){return this.i4||=(this.i3=new xd(`id`,ms().bb),!0),this.i3}),F.og=(function(){return this.i8||=(this.i7=vd(new yd,`style`,ms().bb),!0),this.i7}),F.lT=(function(){return this.hT||=(this.hS=new gd(this),!0),this.hS}),F.ok=(function(){return this.ia||=(this.i9=new Nh(this),!0),this.i9}),new R().i(BC,`com.raquo.laminar.api.package$$anon$1`,{cs:1,cE:1,cx:1,cC:1,cB:1,cD:1,cz:1,cq:1,cm:1,cp:1,aN:1,aO:1,aM:1,cn:1});function HC(e){return!!(e&&e.$classData&&e.$classData.n.a4)}function UC(){}F=UC.prototype=new MC,F.constructor=UC;function WC(){}WC.prototype=F,F.ba=(function(){return`IndexedSeqView`}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()});function GC(e){this.dw=null,LC(this,e)}F=GC.prototype=new zC,F.constructor=GC;function KC(){}KC.prototype=F,F.j=(function(){return bb(new xb,this)}),F.ba=(function(){return`IndexedSeqView`}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()}),new R().i(GC,`scala.collection.IndexedSeqView$Id`,{eB:1,bh:1,ay:1,al:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aB:1,l:1,bd:1,q:1});function qC(){}F=qC.prototype=new AC,F.constructor=qC;function JC(){}JC.prototype=F;function YC(e,t){this.gN=null,this.jN=null,this.gN=e,this.jN=t}F=YC.prototype=new WC,F.constructor=YC;function XC(){}XC.prototype=F,F.t=(function(e){return this.gN.t(e)}),F.p=(function(){return this.gN.au}),F.bH=(function(){return`ArrayBufferView`}),F.j=(function(){return new zx(this,this.jN)}),new R().i(YC,`scala.collection.mutable.ArrayBufferView`,{fL:1,em:1,ay:1,al:1,i:1,e:1,b:1,h:1,c:1,g:1,aa:1,a:1,aB:1,l:1,bd:1,q:1});function ZC(){}F=ZC.prototype=new IC,F.constructor=ZC;function QC(){}QC.prototype=F,F.l0=(function(){return sh()}),F.b8=(function(){return xg()});function $C(e,t){return!tw(t)||e.p()===t.p()}function ew(e,t){if(tw(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.fJ(),o=t.fJ(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=W().o(e.t(i),t.t(i)),i=1+i|0;if(i<n&&r)for(var p=e.j().dk(i),m=t.j().dk(i);r&&p.k();)r=W().o(p.f(),m.f())}return r}else return gg(e,t)}function tw(e){return!!(e&&e.$classData&&e.$classData.n.y)}function nw(){}F=nw.prototype=new AC,F.constructor=nw;function rw(){}rw.prototype=F;function iw(){}F=iw.prototype=new QC,F.constructor=iw;function aw(){}aw.prototype=F,F.aH=(function(){return 0}),F.x=(function(){return 0}),F.b=(function(){return!0}),F.h0=(function(e){throw new f_(`key not found: `+e)}),F.bU=(function(e){return!1}),F.dm=(function(e,t){return t.af()}),F.j=(function(){return J().G}),F.dq=(function(e,t){return new cw(e,t)}),F.h=(function(e){this.h0(e)}),new R().i(iw,`scala.collection.immutable.Map$EmptyMap$`,{fc:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,a:1});var ow;function sw(){return ow||=new iw,ow}function cw(e,t){this.c3=null,this.dz=null,this.c3=e,this.dz=t}F=cw.prototype=new QC,F.constructor=cw;function lw(){}lw.prototype=F,F.aH=(function(){return 1}),F.x=(function(){return 1}),F.b=(function(){return!1}),F.h=(function(e){if(W().o(e,this.c3))return this.dz;throw new f_(`key not found: `+e)}),F.bU=(function(e){return W().o(e,this.c3)}),F.dm=(function(e,t){return W().o(e,this.c3)?this.dz:t.af()}),F.j=(function(){return new j_(new Q(this.c3,this.dz))}),F.dM=(function(e,t){return W().o(e,this.c3)?new cw(this.c3,t):new uw(this.c3,this.dz,e,t)}),F.ej=(function(e){return!!e.h(new Q(this.c3,this.dz))}),F.y=(function(){var e=0,t=0,n=1,r=q().c0(this.c3,this.dz);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().d(r,e),r=q().d(r,t),r=q().cy(r,n),q().A(r,1)}),F.dq=(function(e,t){return this.dM(e,t)}),new R().i(cw,`scala.collection.immutable.Map$Map1`,{bA:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,k:1,a:1});function uw(e,t,n,r){this.bM=null,this.cR=null,this.bN=null,this.cS=null,this.bM=e,this.cR=t,this.bN=n,this.cS=r}F=uw.prototype=new QC,F.constructor=uw;function dw(){}dw.prototype=F,F.aH=(function(){return 2}),F.x=(function(){return 2}),F.b=(function(){return!1}),F.h=(function(e){if(W().o(e,this.bM))return this.cR;if(W().o(e,this.bN))return this.cS;throw new f_(`key not found: `+e)}),F.bU=(function(e){return W().o(e,this.bM)||W().o(e,this.bN)}),F.dm=(function(e,t){return W().o(e,this.bM)?this.cR:W().o(e,this.bN)?this.cS:t.af()}),F.j=(function(){return new Rb(this)}),F.dM=(function(e,t){return W().o(e,this.bM)?new uw(this.bM,t,this.bN,this.cS):W().o(e,this.bN)?new uw(this.bM,this.cR,this.bN,t):new fw(this.bM,this.cR,this.bN,this.cS,e,t)}),F.ej=(function(e){return!!e.h(new Q(this.bM,this.cR))&&!!e.h(new Q(this.bN,this.cS))}),F.y=(function(){var e=0,t=0,n=1,r=q().c0(this.bM,this.cR);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bN,this.cS),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().d(r,e),r=q().d(r,t),r=q().cy(r,n),q().A(r,2)}),F.dq=(function(e,t){return this.dM(e,t)}),new R().i(uw,`scala.collection.immutable.Map$Map2`,{bB:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,k:1,a:1});function fw(e,t,n,r,i,a){this.bB=null,this.ci=null,this.bC=null,this.cj=null,this.bD=null,this.ck=null,this.bB=e,this.ci=t,this.bC=n,this.cj=r,this.bD=i,this.ck=a}F=fw.prototype=new QC,F.constructor=fw;function pw(){}pw.prototype=F,F.aH=(function(){return 3}),F.x=(function(){return 3}),F.b=(function(){return!1}),F.h=(function(e){if(W().o(e,this.bB))return this.ci;if(W().o(e,this.bC))return this.cj;if(W().o(e,this.bD))return this.ck;throw new f_(`key not found: `+e)}),F.bU=(function(e){return W().o(e,this.bB)||W().o(e,this.bC)||W().o(e,this.bD)}),F.dm=(function(e,t){return W().o(e,this.bB)?this.ci:W().o(e,this.bC)?this.cj:W().o(e,this.bD)?this.ck:t.af()}),F.j=(function(){return new Bb(this)}),F.dM=(function(e,t){return W().o(e,this.bB)?new fw(this.bB,t,this.bC,this.cj,this.bD,this.ck):W().o(e,this.bC)?new fw(this.bB,this.ci,this.bC,t,this.bD,this.ck):W().o(e,this.bD)?new fw(this.bB,this.ci,this.bC,this.cj,this.bD,t):new mw(this.bB,this.ci,this.bC,this.cj,this.bD,this.ck,e,t)}),F.ej=(function(e){return!!e.h(new Q(this.bB,this.ci))&&!!e.h(new Q(this.bC,this.cj))&&!!e.h(new Q(this.bD,this.ck))}),F.y=(function(){var e=0,t=0,n=1,r=q().c0(this.bB,this.ci);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bC,this.cj),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bD,this.ck),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().d(r,e),r=q().d(r,t),r=q().cy(r,n),q().A(r,3)}),F.dq=(function(e,t){return this.dM(e,t)}),new R().i(fw,`scala.collection.immutable.Map$Map3`,{bC:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,k:1,a:1});function mw(e,t,n,r,i,a,o,s){this.bg=null,this.bO=null,this.bh=null,this.bP=null,this.bi=null,this.bQ=null,this.bj=null,this.bR=null,this.bg=e,this.bO=t,this.bh=n,this.bP=r,this.bi=i,this.bQ=a,this.bj=o,this.bR=s}F=mw.prototype=new QC,F.constructor=mw;function hw(){}hw.prototype=F,F.aH=(function(){return 4}),F.x=(function(){return 4}),F.b=(function(){return!1}),F.h=(function(e){if(W().o(e,this.bg))return this.bO;if(W().o(e,this.bh))return this.bP;if(W().o(e,this.bi))return this.bQ;if(W().o(e,this.bj))return this.bR;throw new f_(`key not found: `+e)}),F.bU=(function(e){return W().o(e,this.bg)||W().o(e,this.bh)||W().o(e,this.bi)||W().o(e,this.bj)}),F.dm=(function(e,t){return W().o(e,this.bg)?this.bO:W().o(e,this.bh)?this.bP:W().o(e,this.bi)?this.bQ:W().o(e,this.bj)?this.bR:t.af()}),F.j=(function(){return new Hb(this)}),F.dM=(function(e,t){return W().o(e,this.bg)?new mw(this.bg,t,this.bh,this.bP,this.bi,this.bQ,this.bj,this.bR):W().o(e,this.bh)?new mw(this.bg,this.bO,this.bh,t,this.bi,this.bQ,this.bj,this.bR):W().o(e,this.bi)?new mw(this.bg,this.bO,this.bh,this.bP,this.bi,t,this.bj,this.bR):W().o(e,this.bj)?new mw(this.bg,this.bO,this.bh,this.bP,this.bi,this.bQ,this.bj,t):Zm().gD.eq(this.bg,this.bO).eq(this.bh,this.bP).eq(this.bi,this.bQ).eq(this.bj,this.bR).eq(e,t)}),F.ej=(function(e){return!!e.h(new Q(this.bg,this.bO))&&!!e.h(new Q(this.bh,this.bP))&&!!e.h(new Q(this.bi,this.bQ))&&!!e.h(new Q(this.bj,this.bR))}),F.ml=(function(e){return e.dF(this.bg,this.bO).dF(this.bh,this.bP).dF(this.bi,this.bQ).dF(this.bj,this.bR)}),F.y=(function(){var e=0,t=0,n=1,r=q().c0(this.bg,this.bO);return e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bh,this.bP),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bi,this.bQ),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().c0(this.bj,this.bR),e=e+r|0,t^=r,n=Math.imul(n,1|r),r=q().dc,r=q().d(r,e),r=q().d(r,t),r=q().cy(r,n),q().A(r,4)}),F.dq=(function(e,t){return this.dM(e,t)}),new R().i(mw,`scala.collection.immutable.Map$Map4`,{bD:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,k:1,a:1});function gw(){}F=gw.prototype=new EC,F.constructor=gw;function _w(){}_w.prototype=F,F.aW=(function(){return this});function vw(e){if(!e.gE){if(e.fu)throw Jh(new Yh,`LazyList evaluation depends on its own result (self-reference); see docs for more info`);e.fu=!0;try{var t=e.gF.af()}finally{e.fu=!1}e.bv=!0,e.gF=null,e.gG=t,e.gE=!0}return e.gG}function yw(e,t){return Tg(),new xw(new ph((()=>e.b()?rh():(Tg(),new Qm(t.h(e.B().v()),yw(e.B().aB(),t))))))}function bw(e,t,n,r,i){if(t.m=``+t.m+n,!e.bv)t.m+=`<not computed>`;else if(!e.b()){var a=e.B().v();t.m=``+t.m+a;var o=null;o=e;var s=e.B().aB(),c=null;if(c=s,o!==c&&(!c.bv||o.B()!==c.B())&&(o=c,c.bv&&!c.b()))for(c=c.B().aB();o!==c&&c.bv&&!c.b()&&o.B()!==c.B();){t.m=``+t.m+r;var l=o.B().v();t.m=``+t.m+l,o=o.B().aB(),c=c.B().aB(),c.bv&&!c.b()&&(c=c.B().aB())}if(c.bv&&!c.b()){for(var u=e,d=0;;){var f=u,p=c;if(!(f===p||f.B()===p.B()))u=u.B().aB(),c=c.B().aB(),d=1+d|0;else break}var m=o,h=c;if((m===h||m.B()===h.B())&&d>0){t.m=``+t.m+r;var g=o.B().v();t.m=``+t.m+g,o=o.B().aB()}for(;;){var _=o,v=c;if(_===v||_.B()===v.B())break;t.m=``+t.m+r;var y=o.B().v();t.m=``+t.m+y,o=o.B().aB()}t.m=``+t.m+r,t.m+=`<cycle>`}else{for(;o!==c;){t.m=``+t.m+r;var b=o.B().v();t.m=``+t.m+b,o=o.B().aB()}o.bv||(t.m=``+t.m+r,t.m+=`<not computed>`)}}return t.m=``+t.m+i,t}function xw(e){this.gG=null,this.gF=null,this.bv=!1,this.fu=!1,this.gE=!1,this.gF=e,this.bv=!1,this.fu=!1}F=xw.prototype=new JC,F.constructor=xw;function Sw(){}Sw.prototype=F,F.ba=(function(){return`LinearSeq`}),F.p=(function(){return G_(this)}),F.bm=(function(e){return K_(this,e)}),F.t=(function(e){return q_(this,e)}),F.eo=(function(e){return J_(this,e)}),F.B=(function(){return this.gE?this.gG:vw(this)}),F.b=(function(){return this.B()===rh()}),F.x=(function(){return this.bv&&this.B()===rh()?0:-1}),F.v=(function(){return this.B().v()}),F.kP=(function(){var e=this,t=this;for(e.b()||(e=e.B().aB());t!==e;){if(e.b()||(e=e.B().aB(),e.b())||(e=e.B().aB(),e===t))return this;t=t.B().aB()}return this}),F.j=(function(){return this.bv&&this.B()===rh()?J().G:new Tv(this)}),F.bI=(function(e){for(var t=this;;){if(!t.b()){e.h(t.B().v()),t=t.B().aB();continue}break}}),F.bH=(function(){return`LazyList`}),F.nw=(function(e){return this.bv&&this.B()===rh()?Tg().fv:(Tg(),new xw(new ph((()=>this.b()?rh():(Tg(),new Qm(e.h(this.B().v()),yw(this.B().aB(),e)))))))}),F.mH=(function(e){return e<=0?this:this.bv&&this.B()===rh()?Tg().fv:Tg().o7(this,e)}),F.dd=(function(e,t,n,r){return this.kP(),bw(this,e.aP,t,n,r),e}),F.E=(function(){return bw(this,Zh(new Qh,`LazyList`),`(`,`, `,`)`).m}),F.h=(function(e){return q_(this,e|0)}),F.kE=(function(e){return this.mH(e)}),F.bX=(function(e){return this.nw(e)}),F.r=(function(){return this.B().aB()}),F.b8=(function(){return Tg()}),new R().i(xw,`scala.collection.immutable.LazyList`,{by:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aD:1,am:1,az:1,aE:1,a:1});function Cw(e){this.fB=null,this.fB=e}F=Cw.prototype=new I,F.constructor=Cw;function ww(){}ww.prototype=F,F.c8=(function(e){return Xx(this,e)}),F.bX=(function(e){return _g(this,e)}),F.fK=(function(e){return $C(this,e)}),F.eo=(function(e){return ew(this,e)}),F.fJ=(function(){return uu().jC}),F.j=(function(){return bb(new xb,new GC(this))}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()}),F.u=(function(e){return yC(this,e)}),F.y=(function(){return q().lg(this)}),F.E=(function(){return D_(this)}),F.b=(function(){return hg(this)}),F.f5=(function(){return Hy().aS()}),F.bI=(function(e){ql(this,e)}),F.bx=(function(e,t,n){return Xl(this,e,t,n)}),F.dd=(function(e,t,n,r){return Ql(this,e,t,n,r)}),F.dn=(function(){return Hy()}),F.p=(function(){return this.fB.length|0}),F.t=(function(e){return this.fB[e]}),F.bH=(function(){return`WrappedVarArgs`}),F.eZ=(function(e){return Hy().he(e)}),F.h=(function(e){return this.t(e|0)}),F.b8=(function(){return Hy()}),new R().i(Cw,`scala.scalajs.runtime.WrappedVarArgs`,{bY:1,y:1,u:1,t:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,v:1,p:1,q:1,B:1,z:1,s:1,k:1,a:1});function Tw(e){this.b4=null,this.b4=e}F=Tw.prototype=new QC,F.constructor=Tw;function Ew(){}Ew.prototype=F,F.l0=(function(){return Zm()}),F.x=(function(){return this.b4.aI}),F.aH=(function(){return this.b4.aI}),F.b=(function(){return this.b4.aI===0}),F.j=(function(){return this.b()?J().G:new Kb(this.b4)}),F.bU=(function(e){var t=K().M(e),n=Kl().bW(t);return this.b4.h4(e,t,n,0)}),F.h=(function(e){var t=K().M(e),n=Kl().bW(t);return this.b4.gZ(e,t,n,0)}),F.dm=(function(e,t){var n=K().M(e),r=Kl().bW(n);return this.b4.hg(e,n,r,0,t)}),F.eq=(function(e,t){var n=K().M(e),r=this.b4.ln(e,t,n,Kl().bW(n),0,!0);return r===this.b4?this:new Tw(r)}),F.dI=(function(e){this.b4.dI(e)}),F.u=(function(e){if(e instanceof Tw){if(this===e)return!0;var t=this.b4,n=e.b4;return t===null?n===null:t.u(n)}else return DC(this,e)}),F.y=(function(){if(this.b())return q().gW;var e=new Wb(this.b4);return q().hz(e,q().dc)}),F.bH=(function(){return`HashMap`}),F.dq=(function(e,t){return this.eq(e,t)}),new R().i(Tw,`scala.collection.immutable.HashMap`,{bx:1,ah:1,ad:1,i:1,e:1,b:1,h:1,c:1,g:1,a3:1,af:1,j:1,f:1,ae:1,d:1,a4:1,t:1,ai:1,fu:1,eP:1,k:1,T:1,a:1});function Dw(){}F=Dw.prototype=new rw,F.constructor=Dw;function Ow(){}Ow.prototype=F,F.aV=(function(e){return Zf(this,e)});function kw(e,t,n){var r=n&(-1+e.aN.a.length|0),i=e.aN.a[r];if(i===null)e.aN.a[r]=new Du(t,n,null);else{for(var a=null,o=i;o!==null&&o.cq<=n;){if(o.cq===n&&W().o(t,o.ef))return!1;a=o,o=o.aO}a===null?e.aN.a[r]=new Du(t,n,i):a.aO=new Du(t,n,a.aO)}return e.d9=1+e.d9|0,!0}function Aw(e,t){var n=e.aN.a.length;if(e.gS=Mw(e,t),e.d9===0)e.aN=new(ku.r()).C(t);else{e.aN=B().T(e.aN,t);for(var r=new Du(null,0,null),i=new Du(null,0,null);n<t;){for(var a=0;a<n;){var o=e.aN.a[a];if(o!==null){r.aO=null,i.aO=null;for(var s=r,c=i,l=o;l!==null;){var u=l.aO;(l.cq&n)===0?(s.aO=l,s=l):(c.aO=l,c=l),l=u}s.aO=null,o!==r.aO&&(e.aN.a[a]=r.aO),i.aO!==null&&(e.aN.a[a+n|0]=i.aO,c.aO=null)}a=1+a|0}n<<=1}}}function jw(e,t){var n=-1+t|0,r=n>4?n:4,i=(-2147483648>>(Math.clz32(r)|0)&r)<<1;return i<1073741824?i:1073741824}function Mw(e,t){return ha(t*e.gR)}function Nw(e,t,n){return e.gR=n,e.aN=new(ku.r()).C(jw(e,t)),e.gS=Mw(e,e.aN.a.length),e.d9=0,e}function Pw(e){return Nw(e,16,.75),e}function Fw(){this.gR=0,this.aN=null,this.gS=0,this.d9=0}F=Fw.prototype=new _w,F.constructor=Fw;function Iw(){}Iw.prototype=F,F.aH=(function(){return this.d9}),F.fQ=(function(e){return e^(e>>>16|0)}),F.bU=(function(e){var t=this.fQ(K().M(e)),n=this.aN.a[t&(-1+this.aN.a.length|0)];return(n===null?null:n.n1(e,t))!==null}),F.aX=(function(e){var t=jw(this,ha((1+e|0)/this.gR));t>this.aN.a.length&&Aw(this,t)}),F.fH=(function(e){return(1+this.d9|0)>=this.gS&&Aw(this,this.aN.a.length<<1),kw(this,e,this.fQ(K().M(e)))}),F.kd=(function(e){if(ch(this,e,0),e instanceof Fw){for(var t=new lx(e);t.k();){var n=t.f();kw(this,n.ef,n.cq)}return this}else return Zf(this,e)}),F.j=(function(){return new sx(this)}),F.b8=(function(){return fh()}),F.x=(function(){return this.d9}),F.b=(function(){return this.d9===0}),F.bH=(function(){return`HashSet`}),F.y=(function(){var e=new sx(this),t=e.k()?new dx(this):e;return q().hz(t,q().k6)}),F.aQ=(function(e){return this.fH(e),this}),F.aV=(function(e){return this.kd(e)}),new R().i(Fw,`scala.collection.mutable.HashSet`,{bQ:1,fI:1,en:1,i:1,e:1,b:1,h:1,c:1,g:1,aC:1,eN:1,f:1,d:1,g6:1,I:1,g7:1,G:1,A:1,L:1,H:1,F:1,aq:1,k:1,a:1});function Lw(){}F=Lw.prototype=new JC,F.constructor=Lw;function Rw(){}Rw.prototype=F,F.f0=(function(e){return Pb().hb(e,this.aa())}),F.f5=(function(){return Pb().fP(this.aa())}),F.c8=(function(e){return Xx(this,e)}),F.fK=(function(e){return $C(this,e)}),F.eo=(function(e){return ew(this,e)}),F.ba=(function(){return`IndexedSeq`}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()}),F.dn=(function(){return Pb().gB}),F.nv=(function(e){for(var t=new L(this.p()),n=0;n<t.a.length;)t.a[n]=e.h(this.t(n)),n=1+n|0;return Pb().hA(t)}),F.bH=(function(){return`ArraySeq`}),F.bx=(function(e,t,n){var r=this.p(),i=hl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&If().eX(this.ca(),0,e,t,c),c}),F.fJ=(function(){return 2147483647}),F.eZ=(function(e){return Pb().hb(e,this.aa())}),F.bX=(function(e){return this.nv(e)}),F.b8=(function(){return Pb().gB});function zw(e,t){return e.c=t,e}function Bw(){this.c=null}F=Bw.prototype=new JC,F.constructor=Bw;function Vw(){}Vw.prototype=F,F.c8=(function(e){return Xx(this,e)}),F.fK=(function(e){return $C(this,e)}),F.eo=(function(e){return ew(this,e)}),F.ba=(function(){return`IndexedSeq`}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()}),F.dn=(function(){return Kv()}),F.p=(function(){return this instanceof LT?this.i:this.c.a.length}),F.j=(function(){return YT()===this?Kv().jK:new Qb(this,this.p(),this.cc())}),F.bH=(function(){return`Vector`}),F.bx=(function(e,t,n){return this.j().bx(e,t,n)}),F.fJ=(function(){return Kv().jJ}),F.aA=(function(e){return au().f3(e,-1+this.p()|0)}),F.bI=(function(e){for(var t=this.cc(),n=0;n<t;){var r=U(),i=n,a=t/2|0,o=i-a|0;r.h9(-1+((1+a|0)-(o<0?-o|0:o)|0)|0,this.cb(n),e),n=1+n|0}}),F.b8=(function(){return Kv()});function Hw(){}F=Hw.prototype=new rw,F.constructor=Hw;function Uw(){}Uw.prototype=F,F.c8=(function(e){return Db(this,e)}),F.ba=(function(){return`IndexedSeq`}),F.bm=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),F.x=(function(){return this.p()}),F.dn=(function(){return ox().gQ}),F.kV=(function(e){var t=this.aa(),n=null,r=t.aG(),i=r===Va.l();n=[],e.x();for(var a=e.j();a.k();){var o=a.f(),s=i?Ea(o):o===null?r.N.z:o;n.push(s)}var c=ox(),l=r===za.l()?ul.l():r===Lu.l()||r===vh.l()?z.l():r;return c.hn(l.N.r().w(n))}),F.f5=(function(){return ox().fP(this.aa())}),F.bH=(function(){return`ArraySeq`}),F.bx=(function(e,t,n){var r=this.p(),i=hl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&If().eX(this.bG(),0,e,t,c),c}),F.u=(function(e){return e instanceof Hw&&hl().bJ(this.bG())!==hl().bJ(e.bG())?!1:yC(this,e)}),F.eZ=(function(e){return this.kV(e)}),F.f0=(function(e){return this.kV(e)}),F.b8=(function(){return ox().gQ});function Ww(e){this.cI=null,this.cI=e}F=Ww.prototype=new Rw,F.constructor=Ww;function Gw(){}Gw.prototype=F,F.p=(function(){return this.cI.a.length}),F.y=(function(){var e=q();return e.kv(this.cI,e.ae)}),F.u=(function(e){return e instanceof Ww?B().kM(this.cI,e.cI):yC(this,e)}),F.j=(function(){return new Nx(this.cI)}),F.eW=(function(e){return this.cI.a[e]}),F.h=(function(e){return this.eW(e|0)}),F.t=(function(e){return this.eW(e)}),F.aa=(function(){return OS()}),F.ca=(function(){return this.cI}),new R().i(Ww,`scala.collection.immutable.ArraySeq$ofBoolean`,{bk:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function Kw(e){this.cJ=null,this.cJ=e}F=Kw.prototype=new Rw,F.constructor=Kw;function qw(){}qw.prototype=F,F.p=(function(){return this.cJ.a.length}),F.eO=(function(e){return this.cJ.a[e]}),F.y=(function(){var e=q();return e.kn(this.cJ,e.ae)}),F.u=(function(e){return e instanceof Kw?B().kG(this.cJ,e.cJ):yC(this,e)}),F.j=(function(){return new _x(this.cJ)}),F.h=(function(e){return this.eO(e|0)}),F.t=(function(e){return this.eO(e)}),F.aa=(function(){return MS()}),F.ca=(function(){return this.cJ}),new R().i(Kw,`scala.collection.immutable.ArraySeq$ofByte`,{bl:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function Jw(e){this.cg=null,this.cg=e}F=Jw.prototype=new Rw,F.constructor=Jw;function Yw(){}Yw.prototype=F,F.p=(function(){return this.cg.a.length}),F.eP=(function(e){return this.cg.a[e]}),F.y=(function(){var e=q();return e.ko(this.cg,e.ae)}),F.u=(function(e){return e instanceof Jw?B().kH(this.cg,e.cg):yC(this,e)}),F.j=(function(){return new yx(this.cg)}),F.dd=(function(e,t,n,r){return new bT(this.cg).dd(e,t,n,r)}),F.h=(function(e){return Ta(this.eP(e|0))}),F.t=(function(e){return Ta(this.eP(e))}),F.aa=(function(){return IS()}),F.ca=(function(){return this.cg}),new R().i(Jw,`scala.collection.immutable.ArraySeq$ofChar`,{bm:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function Xw(e){this.cK=null,this.cK=e}F=Xw.prototype=new Rw,F.constructor=Xw;function Zw(){}Zw.prototype=F,F.p=(function(){return this.cK.a.length}),F.y=(function(){var e=q();return e.kp(this.cK,e.ae)}),F.u=(function(e){return e instanceof Xw?B().kI(this.cK,e.cK):yC(this,e)}),F.j=(function(){return new xx(this.cK)}),F.eR=(function(e){return this.cK.a[e]}),F.h=(function(e){return this.eR(e|0)}),F.t=(function(e){return this.eR(e)}),F.aa=(function(){return BS()}),F.ca=(function(){return this.cK}),new R().i(Xw,`scala.collection.immutable.ArraySeq$ofDouble`,{bn:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function Qw(e){this.cL=null,this.cL=e}F=Qw.prototype=new Rw,F.constructor=Qw;function $w(){}$w.prototype=F,F.p=(function(){return this.cL.a.length}),F.y=(function(){var e=q();return e.kq(this.cL,e.ae)}),F.u=(function(e){return e instanceof Qw?B().kJ(this.cL,e.cL):yC(this,e)}),F.j=(function(){return new Cx(this.cL)}),F.eS=(function(e){return this.cL.a[e]}),F.h=(function(e){return this.eS(e|0)}),F.t=(function(e){return this.eS(e)}),F.aa=(function(){return WS()}),F.ca=(function(){return this.cL}),new R().i(Qw,`scala.collection.immutable.ArraySeq$ofFloat`,{bo:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function eT(e){this.cM=null,this.cM=e}F=eT.prototype=new Rw,F.constructor=eT;function tT(){}tT.prototype=F,F.p=(function(){return this.cM.a.length}),F.y=(function(){var e=q();return e.kr(this.cM,e.ae)}),F.u=(function(e){return e instanceof eT?B().h6(this.cM,e.cM):yC(this,e)}),F.j=(function(){return new Tx(this.cM)}),F.eT=(function(e){return this.cM.a[e]}),F.h=(function(e){return this.eT(e|0)}),F.t=(function(e){return this.eT(e)}),F.aa=(function(){return JS()}),F.ca=(function(){return this.cM}),new R().i(eT,`scala.collection.immutable.ArraySeq$ofInt`,{bp:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function nT(e){this.cN=null,this.cN=e}F=nT.prototype=new Rw,F.constructor=nT;function rT(){}rT.prototype=F,F.p=(function(){return this.cN.a.length}),F.y=(function(){var e=q();return e.ks(this.cN,e.ae)}),F.u=(function(e){return e instanceof nT?B().kK(this.cN,e.cN):yC(this,e)}),F.j=(function(){return new Dx(this.cN)}),F.eU=(function(e){return this.cN.a[e]}),F.h=(function(e){return this.eU(e|0)}),F.t=(function(e){return this.eU(e)}),F.aa=(function(){return QS()}),F.ca=(function(){return this.cN}),new R().i(nT,`scala.collection.immutable.ArraySeq$ofLong`,{bq:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function iT(e){this.c1=null,this.c1=e}F=iT.prototype=new Rw,F.constructor=iT;function aT(){}aT.prototype=F,F.aa=(function(){return tp().kk(ca(this.c1).N.Q())}),F.p=(function(){return this.c1.a.length}),F.t=(function(e){return this.c1.a[e]}),F.y=(function(){var e=q();return e.km(this.c1,e.ae)}),F.u=(function(e){return e instanceof iT?If().kN(this.c1,e.c1):yC(this,e)}),F.j=(function(){return gb(new _b,this.c1)}),F.h=(function(e){return this.t(e|0)}),F.ca=(function(){return this.c1}),new R().i(iT,`scala.collection.immutable.ArraySeq$ofRef`,{br:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function oT(e){this.cO=null,this.cO=e}F=oT.prototype=new Rw,F.constructor=oT;function sT(){}sT.prototype=F,F.p=(function(){return this.cO.a.length}),F.eQ=(function(e){return this.cO.a[e]}),F.y=(function(){var e=q();return e.kt(this.cO,e.ae)}),F.u=(function(e){return e instanceof oT?B().kL(this.cO,e.cO):yC(this,e)}),F.j=(function(){return new kx(this.cO)}),F.h=(function(e){return this.eQ(e|0)}),F.t=(function(e){return this.eQ(e)}),F.aa=(function(){return mC()}),F.ca=(function(){return this.cO}),new R().i(oT,`scala.collection.immutable.ArraySeq$ofShort`,{bs:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function cT(e){this.dx=null,this.dx=e}F=cT.prototype=new Rw,F.constructor=cT;function lT(){}lT.prototype=F,F.p=(function(){return this.dx.a.length}),F.y=(function(){var e=q();return e.ku(this.dx,e.ae)}),F.u=(function(e){return e instanceof cT?this.dx.a.length===e.dx.a.length:yC(this,e)}),F.j=(function(){return new jx(this.dx)}),F.eV=(function(e){}),F.h=(function(e){this.eV(e|0)}),F.t=(function(e){this.eV(e)}),F.aa=(function(){return vC()}),F.ca=(function(){return this.dx}),new R().i(cT,`scala.collection.immutable.ArraySeq$ofUnit`,{bt:1,U:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,Y:1,a:1});function uT(e,t,n,r){for(;;)if(t===r)return n.b()?0:1;else if(n.b())return-1;else{var i=1+t|0,a=n.r();t=i,n=a}}function dT(e,t,n){for(;;)if(t===n)return!0;else{var r=t.b(),i=n.b();if(!(r||i)&&W().o(t.v(),n.v())){var a=t.r(),o=n.r();t=a,n=o}else return r&&i}}function fT(){}F=fT.prototype=new JC,F.constructor=fT;function pT(){}pT.prototype=F,F.c8=(function(e){return Xx(this,e)}),F.j=(function(){return new Z_(this)}),F.ba=(function(){return`LinearSeq`}),F.t=(function(e){return q_(this,e)}),F.eo=(function(e){return J_(this,e)}),F.dn=(function(){return Av()}),F.k7=(function(e){if(this.b())return e;if(e.b())return this;for(var t=new VT(e.v(),this),n=t,r=e.r();!r.b();){var i=new VT(r.v(),this);n.ap=i,n=i,r=r.r()}return t}),F.b=(function(){return this===$()}),F.hv=(function(e){if(e instanceof fT)return this.k7(e);if(e.x()===0)return this;if(e instanceof fE&&this.b())return e.ll();var t=e.j();if(t.k()){for(var n=new VT(t.f(),this),r=n;t.k();){var i=new VT(t.f(),this);r.ap=i,r=i}return n}else return this}),F.ki=(function(e){return e instanceof fT?e.k7(this):Ob(this,e)}),F.nx=(function(e){if(this===$())return $();for(var t=new VT(e.h(this.v()),$()),n=t,r=this.r();r!==$();){var i=new VT(e.h(r.v()),$());n.ap=i,n=i,r=r.r()}return t}),F.bI=(function(e){for(var t=this;!t.b();)e.h(t.v()),t=t.r()}),F.p=(function(){for(var e=this,t=0;!e.b();)t=1+t|0,e=e.r();return t}),F.bm=(function(e){return e<0?1:uT(this,0,this,e)}),F.bU=(function(e){for(var t=this;!t.b();){if(W().o(t.v(),e))return!0;t=t.r()}return!1}),F.bH=(function(){return`List`}),F.u=(function(e){return e instanceof fT?dT(this,this,e):yC(this,e)}),F.h=(function(e){return q_(this,e|0)}),F.kE=(function(e){return Yx(this,e,this)}),F.bX=(function(e){return this.nx(e)}),F.b8=(function(){return Av()});function mT(){this.c=null}F=mT.prototype=new Vw,F.constructor=mT;function hT(){}hT.prototype=F;function gT(e){this.d1=null,this.d1=e}F=gT.prototype=new Uw,F.constructor=gT;function _T(){}_T.prototype=F,F.p=(function(){return this.d1.a.length}),F.y=(function(){var e=q();return e.kv(this.d1,e.ae)}),F.u=(function(e){return e instanceof gT?B().kM(this.d1,e.d1):Hw.prototype.u.call(this,e)}),F.j=(function(){return new Nx(this.d1)}),F.eW=(function(e){return this.d1.a[e]}),F.h=(function(e){return this.eW(e|0)}),F.t=(function(e){return this.eW(e)}),F.aa=(function(){return OS()}),F.bG=(function(){return this.d1}),new R().i(gT,`scala.collection.mutable.ArraySeq$ofBoolean`,{bG:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function vT(e){this.d2=null,this.d2=e}F=vT.prototype=new Uw,F.constructor=vT;function yT(){}yT.prototype=F,F.p=(function(){return this.d2.a.length}),F.eO=(function(e){return this.d2.a[e]}),F.y=(function(){var e=q();return e.kn(this.d2,e.ae)}),F.u=(function(e){return e instanceof vT?B().kG(this.d2,e.d2):Hw.prototype.u.call(this,e)}),F.j=(function(){return new _x(this.d2)}),F.h=(function(e){return this.eO(e|0)}),F.t=(function(e){return this.eO(e)}),F.aa=(function(){return MS()}),F.bG=(function(){return this.d2}),new R().i(vT,`scala.collection.mutable.ArraySeq$ofByte`,{bH:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function bT(e){this.bw=null,this.bw=e}F=bT.prototype=new Uw,F.constructor=bT;function xT(){}xT.prototype=F,F.p=(function(){return this.bw.a.length}),F.eP=(function(e){return this.bw.a[e]}),F.y=(function(){var e=q();return e.ko(this.bw,e.ae)}),F.u=(function(e){return e instanceof bT?B().kH(this.bw,e.bw):Hw.prototype.u.call(this,e)}),F.j=(function(){return new yx(this.bw)}),F.dd=(function(e,t,n,r){var i=e.aP;t.length!==0&&(i.m=``+i.m+t);var a=this.bw.a.length;if(a!==0)if(n===``)i.kg(this.bw);else{i.p();var o=this.bw.a[0],s=``+ga(o);i.m+=s;for(var c=1;c<a;){i.m=``+i.m+n;var l=this.bw.a[c],u=``+ga(l);i.m+=u,c=1+c|0}}return r.length!==0&&(i.m=``+i.m+r),e}),F.h=(function(e){return Ta(this.eP(e|0))}),F.t=(function(e){return Ta(this.eP(e))}),F.aa=(function(){return IS()}),F.bG=(function(){return this.bw}),new R().i(bT,`scala.collection.mutable.ArraySeq$ofChar`,{bI:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function ST(e){this.d3=null,this.d3=e}F=ST.prototype=new Uw,F.constructor=ST;function CT(){}CT.prototype=F,F.p=(function(){return this.d3.a.length}),F.y=(function(){var e=q();return e.kp(this.d3,e.ae)}),F.u=(function(e){return e instanceof ST?B().kI(this.d3,e.d3):Hw.prototype.u.call(this,e)}),F.j=(function(){return new xx(this.d3)}),F.eR=(function(e){return this.d3.a[e]}),F.h=(function(e){return this.eR(e|0)}),F.t=(function(e){return this.eR(e)}),F.aa=(function(){return BS()}),F.bG=(function(){return this.d3}),new R().i(ST,`scala.collection.mutable.ArraySeq$ofDouble`,{bJ:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function wT(e){this.d4=null,this.d4=e}F=wT.prototype=new Uw,F.constructor=wT;function TT(){}TT.prototype=F,F.p=(function(){return this.d4.a.length}),F.y=(function(){var e=q();return e.kq(this.d4,e.ae)}),F.u=(function(e){return e instanceof wT?B().kJ(this.d4,e.d4):Hw.prototype.u.call(this,e)}),F.j=(function(){return new Cx(this.d4)}),F.eS=(function(e){return this.d4.a[e]}),F.h=(function(e){return this.eS(e|0)}),F.t=(function(e){return this.eS(e)}),F.aa=(function(){return WS()}),F.bG=(function(){return this.d4}),new R().i(wT,`scala.collection.mutable.ArraySeq$ofFloat`,{bK:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function ET(e){this.d5=null,this.d5=e}F=ET.prototype=new Uw,F.constructor=ET;function DT(){}DT.prototype=F,F.p=(function(){return this.d5.a.length}),F.y=(function(){var e=q();return e.kr(this.d5,e.ae)}),F.u=(function(e){return e instanceof ET?B().h6(this.d5,e.d5):Hw.prototype.u.call(this,e)}),F.j=(function(){return new Tx(this.d5)}),F.eT=(function(e){return this.d5.a[e]}),F.h=(function(e){return this.eT(e|0)}),F.t=(function(e){return this.eT(e)}),F.aa=(function(){return JS()}),F.bG=(function(){return this.d5}),new R().i(ET,`scala.collection.mutable.ArraySeq$ofInt`,{bL:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function OT(e){this.d6=null,this.d6=e}F=OT.prototype=new Uw,F.constructor=OT;function kT(){}kT.prototype=F,F.p=(function(){return this.d6.a.length}),F.y=(function(){var e=q();return e.ks(this.d6,e.ae)}),F.u=(function(e){return e instanceof OT?B().kK(this.d6,e.d6):Hw.prototype.u.call(this,e)}),F.j=(function(){return new Dx(this.d6)}),F.eU=(function(e){return this.d6.a[e]}),F.h=(function(e){return this.eU(e|0)}),F.t=(function(e){return this.eU(e)}),F.aa=(function(){return QS()}),F.bG=(function(){return this.d6}),new R().i(OT,`scala.collection.mutable.ArraySeq$ofLong`,{bM:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function AT(e){this.co=null,this.co=e}F=AT.prototype=new Uw,F.constructor=AT;function jT(){}jT.prototype=F,F.aa=(function(){return tp().kk(ca(this.co).N.Q())}),F.p=(function(){return this.co.a.length}),F.t=(function(e){return this.co.a[e]}),F.y=(function(){var e=q();return e.km(this.co,e.ae)}),F.u=(function(e){return e instanceof AT?If().kN(this.co,e.co):Hw.prototype.u.call(this,e)}),F.j=(function(){return gb(new _b,this.co)}),F.h=(function(e){return this.t(e|0)}),F.bG=(function(){return this.co}),new R().i(AT,`scala.collection.mutable.ArraySeq$ofRef`,{bN:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function MT(e){this.d7=null,this.d7=e}F=MT.prototype=new Uw,F.constructor=MT;function NT(){}NT.prototype=F,F.p=(function(){return this.d7.a.length}),F.eQ=(function(e){return this.d7.a[e]}),F.y=(function(){var e=q();return e.kt(this.d7,e.ae)}),F.u=(function(e){return e instanceof MT?B().kL(this.d7,e.d7):Hw.prototype.u.call(this,e)}),F.j=(function(){return new kx(this.d7)}),F.h=(function(e){return this.eQ(e|0)}),F.t=(function(e){return this.eQ(e)}),F.aa=(function(){return mC()}),F.bG=(function(){return this.d7}),new R().i(MT,`scala.collection.mutable.ArraySeq$ofShort`,{bO:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function PT(e){this.dD=null,this.dD=e}F=PT.prototype=new Uw,F.constructor=PT;function FT(){}FT.prototype=F,F.p=(function(){return this.dD.a.length}),F.y=(function(){var e=q();return e.ku(this.dD,e.ae)}),F.u=(function(e){return e instanceof PT?this.dD.a.length===e.dD.a.length:Hw.prototype.u.call(this,e)}),F.j=(function(){return new jx(this.dD)}),F.eV=(function(e){}),F.h=(function(e){this.eV(e|0)}),F.t=(function(e){this.eV(e)}),F.aa=(function(){return vC()}),F.bG=(function(){return this.dD}),new R().i(PT,`scala.collection.mutable.ArraySeq$ofUnit`,{bP:1,V:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,Q:1,p:1,q:1,R:1,s:1,k:1,a:1});function IT(e,t,n,r){return e.g=n,e.i=r,zw(e,t),e}function LT(){this.c=null,this.g=null,this.i=0}F=LT.prototype=new hT,F.constructor=LT;function RT(){}RT.prototype=F;function zT(e){this.c=null,zw(this,e)}F=zT.prototype=new hT,F.constructor=zT;function BT(){}BT.prototype=F,F.t=(function(e){if(e>=0&&e<this.c.a.length)return this.c.a[e];throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.c.a.length){var n=this.c.e();return n.a[e]=t,new zT(n)}else throw this.aA(e)}),F.de=(function(e){if(this.c.a.length<32)return new zT(U().eh(this.c,e));var t=this.c,n=U().b7,r=new L(1);return r.a[0]=e,new XT(t,32,n,r,33)}),F.bY=(function(e){return new zT(U().bK(this.c,e))}),F.cc=(function(){return 1}),F.cb=(function(e){return this.c}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.c.a.length)return this.c.a[t];throw this.aA(t)}),new R().i(zT,`scala.collection.immutable.Vector1`,{fy:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function VT(e,t){this.gy=null,this.ap=null,this.gy=e,this.ap=t}F=VT.prototype=new pT,F.constructor=VT;function HT(){}HT.prototype=F,F.v=(function(){return this.gy}),F.cB=(function(){return`::`}),F.cz=(function(){return 2}),F.cA=(function(e){switch(e){case 0:return this.gy;case 1:return this.ap;default:return K().f4(e)}}),F.dK=(function(){return new Ny(this)}),F.r=(function(){return this.ap}),new R().i(VT,`scala.collection.immutable.$colon$colon`,{eU:1,aF:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aD:1,am:1,az:1,aE:1,bj:1,s:1,k:1,z:1,T:1,a:1,a9:1});function UT(){}F=UT.prototype=new pT,F.constructor=UT;function WT(){}WT.prototype=F,F.hk=(function(){throw new f_(`head of empty list`)}),F.on=(function(){throw new u_(`tail of empty list`)}),F.x=(function(){return 0}),F.j=(function(){return J().G}),F.cB=(function(){return`Nil`}),F.cz=(function(){return 0}),F.cA=(function(e){return K().f4(e)}),F.dK=(function(){return new Ny(this)}),F.r=(function(){this.on()}),F.v=(function(){this.hk()}),new R().i(UT,`scala.collection.immutable.Nil$`,{fo:1,aF:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,aD:1,am:1,az:1,aE:1,bj:1,s:1,k:1,z:1,T:1,a:1,a9:1});var GT;function $(){return GT||=new UT,GT}function KT(){this.c=null,this.g=null,this.i=0,IT(this,U().gL,U().gL,0)}F=KT.prototype=new RT,F.constructor=KT;function qT(){}qT.prototype=F,F.kj=(function(e){throw this.aA(e)}),F.dp=(function(e,t){throw this.aA(e)}),F.de=(function(e){var t=new L(1);return t.a[0]=e,new zT(t)}),F.cc=(function(){return 0}),F.cb=(function(e){return null}),F.u=(function(e){return this===e||!(e instanceof Bw)&&yC(this,e)}),F.aA=(function(e){return r_(new i_,e+` is out of bounds (empty vector)`)}),F.bX=(function(e){return this}),F.h=(function(e){this.kj(e|0)}),F.t=(function(e){this.kj(e)}),new R().i(KT,`scala.collection.immutable.Vector0$`,{fx:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});var JT;function YT(){return JT||=new KT,JT}function XT(e,t,n,r,i){this.c=null,this.g=null,this.i=0,this.bl=0,this.b1=null,this.bl=t,this.b1=n,IT(this,e,r,i)}F=XT.prototype=new RT,F.constructor=XT;function ZT(){}ZT.prototype=F,F.t=(function(e){if(e>=0&&e<this.i){var t=e-this.bl|0;if(t>=0){var n=t>>>5|0,r=31&t;return n<this.b1.a.length?this.b1.a[n].a[r]:this.g.a[31&t]}else return this.c.a[e]}else throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.i)if(e>=this.bl){var n=e-this.bl|0,r=n>>>5|0,i=31&n;if(r<this.b1.a.length){var a=this.b1.e(),o=a.a[r].e();return o.a[i]=t,a.a[r]=o,new XT(this.c,this.bl,a,this.g,this.i)}else{var s=this.g.e();return s.a[i]=t,new XT(this.c,this.bl,this.b1,s,this.i)}}else{var c=this.c.e();return c.a[e]=t,new XT(c,this.bl,this.b1,this.g,this.i)}else throw this.aA(e)}),F.de=(function(e){if(this.g.a.length<32){var t=U().eh(this.g,e),n=1+this.i|0;return new XT(this.c,this.bl,this.b1,t,n)}else if(this.b1.a.length<30){var r=U().C(this.b1,this.g),i=new L(1);i.a[0]=e;var a=1+this.i|0;return new XT(this.c,this.bl,r,i,a)}else{var o=this.c,s=this.bl,c=this.b1,l=this.bl,u=U().c5,d=this.g,f=new(z.r().r()).C(1);f.a[0]=d;var p=new L(1);return p.a[0]=e,new QT(o,s,c,960+l|0,u,f,p,1+this.i|0)}}),F.bY=(function(e){var t=U().bK(this.c,e),n=U().a0(2,this.b1,e),r=U().bK(this.g,e);return new XT(t,this.bl,n,r,this.i)}),F.cc=(function(){return 3}),F.cb=(function(e){switch(e){case 0:return this.c;case 1:return this.b1;case 2:return this.g;default:throw new y_(e)}}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.i){var n=t-this.bl|0;if(n>=0){var r=n>>>5|0,i=31&n;return r<this.b1.a.length?this.b1.a[r].a[i]:this.g.a[31&n]}else return this.c.a[t]}else throw this.aA(t)}),new R().i(XT,`scala.collection.immutable.Vector2`,{fz:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function QT(e,t,n,r,i,a,o,s){this.c=null,this.g=null,this.i=0,this.aY=0,this.b6=null,this.aZ=0,this.aL=null,this.aM=null,this.aY=t,this.b6=n,this.aZ=r,this.aL=i,this.aM=a,IT(this,e,o,s)}F=QT.prototype=new RT,F.constructor=QT;function $T(){}$T.prototype=F,F.t=(function(e){if(e>=0&&e<this.i){var t=e-this.aZ|0;if(t>=0){var n=t>>>10|0,r=31&(t>>>5|0),i=31&t;return n<this.aL.a.length?this.aL.a[n].a[r].a[i]:r<this.aM.a.length?this.aM.a[r].a[i]:this.g.a[i]}else if(e>=this.aY){var a=e-this.aY|0;return this.b6.a[a>>>5|0].a[31&a]}else return this.c.a[e]}else throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.i)if(e>=this.aZ){var n=e-this.aZ|0,r=n>>>10|0,i=31&(n>>>5|0),a=31&n;if(r<this.aL.a.length){var o=this.aL.e(),s=o.a[r].e(),c=s.a[i].e();return c.a[a]=t,s.a[i]=c,o.a[r]=s,new QT(this.c,this.aY,this.b6,this.aZ,o,this.aM,this.g,this.i)}else if(i<this.aM.a.length){var l=this.aM.e(),u=l.a[i].e();return u.a[a]=t,l.a[i]=u,new QT(this.c,this.aY,this.b6,this.aZ,this.aL,l,this.g,this.i)}else{var d=this.g.e();return d.a[a]=t,new QT(this.c,this.aY,this.b6,this.aZ,this.aL,this.aM,d,this.i)}}else if(e>=this.aY){var f=e-this.aY|0,p=this.b6,m=f>>>5|0,h=31&f,g=p.e(),_=g.a[m].e();return _.a[h]=t,g.a[m]=_,new QT(this.c,this.aY,g,this.aZ,this.aL,this.aM,this.g,this.i)}else{var v=this.c.e();return v.a[e]=t,new QT(v,this.aY,this.b6,this.aZ,this.aL,this.aM,this.g,this.i)}else throw this.aA(e)}),F.de=(function(e){if(this.g.a.length<32){var t=U().eh(this.g,e),n=1+this.i|0;return new QT(this.c,this.aY,this.b6,this.aZ,this.aL,this.aM,t,n)}else if(this.aM.a.length<31){var r=U().C(this.aM,this.g),i=new L(1);i.a[0]=e;var a=1+this.i|0;return new QT(this.c,this.aY,this.b6,this.aZ,this.aL,r,i,a)}else if(this.aL.a.length<30){var o=U().C(this.aL,U().C(this.aM,this.g)),s=U().b7,c=new L(1);c.a[0]=e;var l=1+this.i|0;return new QT(this.c,this.aY,this.b6,this.aZ,o,s,c,l)}else{var u=this.c,d=this.aY,f=this.b6,p=this.aZ,m=this.aL,h=this.aZ,g=U().ed,_=U().C(this.aM,this.g),v=new(z.r().r().r()).C(1);v.a[0]=_;var y=U().b7,b=new L(1);return b.a[0]=e,new eE(u,d,f,p,m,30720+h|0,g,v,y,b,1+this.i|0)}}),F.bY=(function(e){var t=U().bK(this.c,e),n=U().a0(2,this.b6,e),r=U().a0(3,this.aL,e),i=U().a0(2,this.aM,e),a=U().bK(this.g,e);return new QT(t,this.aY,n,this.aZ,r,i,a,this.i)}),F.cc=(function(){return 5}),F.cb=(function(e){switch(e){case 0:return this.c;case 1:return this.b6;case 2:return this.aL;case 3:return this.aM;case 4:return this.g;default:throw new y_(e)}}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.i){var n=t-this.aZ|0;if(n>=0){var r=n>>>10|0,i=31&(n>>>5|0),a=31&n;return r<this.aL.a.length?this.aL.a[r].a[i].a[a]:i<this.aM.a.length?this.aM.a[i].a[a]:this.g.a[a]}else if(t>=this.aY){var o=t-this.aY|0;return this.b6.a[o>>>5|0].a[31&o]}else return this.c.a[t]}else throw this.aA(t)}),new R().i(QT,`scala.collection.immutable.Vector3`,{fA:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function eE(e,t,n,r,i,a,o,s,c,l,u){this.c=null,this.g=null,this.i=0,this.aC=0,this.aT=null,this.aD=0,this.aU=null,this.aE=0,this.ar=null,this.at=null,this.as=null,this.aC=t,this.aT=n,this.aD=r,this.aU=i,this.aE=a,this.ar=o,this.at=s,this.as=c,IT(this,e,l,u)}F=eE.prototype=new RT,F.constructor=eE;function tE(){}tE.prototype=F,F.t=(function(e){if(e>=0&&e<this.i){var t=e-this.aE|0;if(t>=0){var n=t>>>15|0,r=31&(t>>>10|0),i=31&(t>>>5|0),a=31&t;return n<this.ar.a.length?this.ar.a[n].a[r].a[i].a[a]:r<this.at.a.length?this.at.a[r].a[i].a[a]:i<this.as.a.length?this.as.a[i].a[a]:this.g.a[a]}else if(e>=this.aD){var o=e-this.aD|0;return this.aU.a[o>>>10|0].a[31&(o>>>5|0)].a[31&o]}else if(e>=this.aC){var s=e-this.aC|0;return this.aT.a[s>>>5|0].a[31&s]}else return this.c.a[e]}else throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.i)if(e>=this.aE){var n=e-this.aE|0,r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;if(r<this.ar.a.length){var s=this.ar.e(),c=s.a[r].e(),l=c.a[i].e(),u=l.a[a].e();return u.a[o]=t,l.a[a]=u,c.a[i]=l,s.a[r]=c,new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,s,this.at,this.as,this.g,this.i)}else if(i<this.at.a.length){var d=this.at.e(),f=d.a[i].e(),p=f.a[a].e();return p.a[o]=t,f.a[a]=p,d.a[i]=f,new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,d,this.as,this.g,this.i)}else if(a<this.as.a.length){var m=this.as.e(),h=m.a[a].e();return h.a[o]=t,m.a[a]=h,new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,this.at,m,this.g,this.i)}else{var g=this.g.e();return g.a[o]=t,new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,this.at,this.as,g,this.i)}}else if(e>=this.aD){var _=e-this.aD|0,v=this.aU,y=_>>>10|0,b=31&(_>>>5|0),ee=31&_,te=v.e(),x=te.a[y].e(),S=x.a[b].e();return S.a[ee]=t,x.a[b]=S,te.a[y]=x,new eE(this.c,this.aC,this.aT,this.aD,te,this.aE,this.ar,this.at,this.as,this.g,this.i)}else if(e>=this.aC){var C=e-this.aC|0,ne=this.aT,re=C>>>5|0,ie=31&C,ae=ne.e(),w=ae.a[re].e();return w.a[ie]=t,ae.a[re]=w,new eE(this.c,this.aC,ae,this.aD,this.aU,this.aE,this.ar,this.at,this.as,this.g,this.i)}else{var T=this.c.e();return T.a[e]=t,new eE(T,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,this.at,this.as,this.g,this.i)}else throw this.aA(e)}),F.de=(function(e){if(this.g.a.length<32){var t=U().eh(this.g,e),n=1+this.i|0;return new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,this.at,this.as,t,n)}else if(this.as.a.length<31){var r=U().C(this.as,this.g),i=new L(1);i.a[0]=e;var a=1+this.i|0;return new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,this.at,r,i,a)}else if(this.at.a.length<31){var o=U().C(this.at,U().C(this.as,this.g)),s=U().b7,c=new L(1);c.a[0]=e;var l=1+this.i|0;return new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,this.ar,o,s,c,l)}else if(this.ar.a.length<30){var u=U().C(this.ar,U().C(this.at,U().C(this.as,this.g))),d=U().c5,f=U().b7,p=new L(1);p.a[0]=e;var m=1+this.i|0;return new eE(this.c,this.aC,this.aT,this.aD,this.aU,this.aE,u,d,f,p,m)}else{var h=this.c,g=this.aC,_=this.aT,v=this.aD,y=this.aU,b=this.aE,ee=this.ar,te=this.aE,x=U().gM,S=U().C(this.at,U().C(this.as,this.g)),C=new(z.r().r().r().r()).C(1);C.a[0]=S;var ne=U().c5,re=U().b7,ie=new L(1);return ie.a[0]=e,new nE(h,g,_,v,y,b,ee,983040+te|0,x,C,ne,re,ie,1+this.i|0)}}),F.bY=(function(e){var t=U().bK(this.c,e),n=U().a0(2,this.aT,e),r=U().a0(3,this.aU,e),i=U().a0(4,this.ar,e),a=U().a0(3,this.at,e),o=U().a0(2,this.as,e),s=U().bK(this.g,e);return new eE(t,this.aC,n,this.aD,r,this.aE,i,a,o,s,this.i)}),F.cc=(function(){return 7}),F.cb=(function(e){switch(e){case 0:return this.c;case 1:return this.aT;case 2:return this.aU;case 3:return this.ar;case 4:return this.at;case 5:return this.as;case 6:return this.g;default:throw new y_(e)}}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.i){var n=t-this.aE|0;if(n>=0){var r=n>>>15|0,i=31&(n>>>10|0),a=31&(n>>>5|0),o=31&n;return r<this.ar.a.length?this.ar.a[r].a[i].a[a].a[o]:i<this.at.a.length?this.at.a[i].a[a].a[o]:a<this.as.a.length?this.as.a[a].a[o]:this.g.a[o]}else if(t>=this.aD){var s=t-this.aD|0;return this.aU.a[s>>>10|0].a[31&(s>>>5|0)].a[31&s]}else if(t>=this.aC){var c=t-this.aC|0;return this.aT.a[c>>>5|0].a[31&c]}else return this.c.a[t]}else throw this.aA(t)}),new R().i(eE,`scala.collection.immutable.Vector4`,{fB:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function nE(e,t,n,r,i,a,o,s,c,l,u,d,f,p){this.c=null,this.g=null,this.i=0,this.ah=0,this.aw=null,this.ai=0,this.ax=null,this.aj=0,this.ay=null,this.ak=0,this.a2=null,this.a5=null,this.a4=null,this.a3=null,this.ah=t,this.aw=n,this.ai=r,this.ax=i,this.aj=a,this.ay=o,this.ak=s,this.a2=c,this.a5=l,this.a4=u,this.a3=d,IT(this,e,f,p)}F=nE.prototype=new RT,F.constructor=nE;function rE(){}rE.prototype=F,F.t=(function(e){if(e>=0&&e<this.i){var t=e-this.ak|0;if(t>=0){var n=t>>>20|0,r=31&(t>>>15|0),i=31&(t>>>10|0),a=31&(t>>>5|0),o=31&t;return n<this.a2.a.length?this.a2.a[n].a[r].a[i].a[a].a[o]:r<this.a5.a.length?this.a5.a[r].a[i].a[a].a[o]:i<this.a4.a.length?this.a4.a[i].a[a].a[o]:a<this.a3.a.length?this.a3.a[a].a[o]:this.g.a[o]}else if(e>=this.aj){var s=e-this.aj|0;return this.ay.a[s>>>15|0].a[31&(s>>>10|0)].a[31&(s>>>5|0)].a[31&s]}else if(e>=this.ai){var c=e-this.ai|0;return this.ax.a[c>>>10|0].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.ah){var l=e-this.ah|0;return this.aw.a[l>>>5|0].a[31&l]}else return this.c.a[e]}else throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.i)if(e>=this.ak){var n=e-this.ak|0,r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;if(r<this.a2.a.length){var c=this.a2.e(),l=c.a[r].e(),u=l.a[i].e(),d=u.a[a].e(),f=d.a[o].e();return f.a[s]=t,d.a[o]=f,u.a[a]=d,l.a[i]=u,c.a[r]=l,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,c,this.a5,this.a4,this.a3,this.g,this.i)}else if(i<this.a5.a.length){var p=this.a5.e(),m=p.a[i].e(),h=m.a[a].e(),g=h.a[o].e();return g.a[s]=t,h.a[o]=g,m.a[a]=h,p.a[i]=m,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,p,this.a4,this.a3,this.g,this.i)}else if(a<this.a4.a.length){var _=this.a4.e(),v=_.a[a].e(),y=v.a[o].e();return y.a[s]=t,v.a[o]=y,_.a[a]=v,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,_,this.a3,this.g,this.i)}else if(o<this.a3.a.length){var b=this.a3.e(),ee=b.a[o].e();return ee.a[s]=t,b.a[o]=ee,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,b,this.g,this.i)}else{var te=this.g.e();return te.a[s]=t,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,this.a3,te,this.i)}}else if(e>=this.aj){var x=e-this.aj|0,S=this.ay,C=x>>>15|0,ne=31&(x>>>10|0),re=31&(x>>>5|0),ie=31&x,ae=S.e(),w=ae.a[C].e(),T=w.a[ne].e(),E=T.a[re].e();return E.a[ie]=t,T.a[re]=E,w.a[ne]=T,ae.a[C]=w,new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,ae,this.ak,this.a2,this.a5,this.a4,this.a3,this.g,this.i)}else if(e>=this.ai){var oe=e-this.ai|0,se=this.ax,D=oe>>>10|0,ce=31&(oe>>>5|0),le=31&oe,ue=se.e(),de=ue.a[D].e(),fe=de.a[ce].e();return fe.a[le]=t,de.a[ce]=fe,ue.a[D]=de,new nE(this.c,this.ah,this.aw,this.ai,ue,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,this.a3,this.g,this.i)}else if(e>=this.ah){var pe=e-this.ah|0,me=this.aw,he=pe>>>5|0,ge=31&pe,_e=me.e(),ve=_e.a[he].e();return ve.a[ge]=t,_e.a[he]=ve,new nE(this.c,this.ah,_e,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,this.a3,this.g,this.i)}else{var ye=this.c.e();return ye.a[e]=t,new nE(ye,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,this.a3,this.g,this.i)}else throw this.aA(e)}),F.de=(function(e){if(this.g.a.length<32){var t=U().eh(this.g,e),n=1+this.i|0;return new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,this.a3,t,n)}else if(this.a3.a.length<31){var r=U().C(this.a3,this.g),i=new L(1);i.a[0]=e;var a=1+this.i|0;return new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,this.a4,r,i,a)}else if(this.a4.a.length<31){var o=U().C(this.a4,U().C(this.a3,this.g)),s=U().b7,c=new L(1);c.a[0]=e;var l=1+this.i|0;return new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,this.a5,o,s,c,l)}else if(this.a5.a.length<31){var u=U().C(this.a5,U().C(this.a4,U().C(this.a3,this.g))),d=U().c5,f=U().b7,p=new L(1);p.a[0]=e;var m=1+this.i|0;return new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,this.a2,u,d,f,p,m)}else if(this.a2.a.length<30){var h=U().C(this.a2,U().C(this.a5,U().C(this.a4,U().C(this.a3,this.g)))),g=U().ed,_=U().c5,v=U().b7,y=new L(1);y.a[0]=e;var b=1+this.i|0;return new nE(this.c,this.ah,this.aw,this.ai,this.ax,this.aj,this.ay,this.ak,h,g,_,v,y,b)}else{var ee=this.c,te=this.ah,x=this.aw,S=this.ai,C=this.ax,ne=this.aj,re=this.ay,ie=this.ak,ae=this.a2,w=this.ak,T=U().jL,E=U().C(this.a5,U().C(this.a4,U().C(this.a3,this.g))),oe=new(z.r().r().r().r().r()).C(1);oe.a[0]=E;var se=U().ed,D=U().c5,ce=U().b7,le=new L(1);return le.a[0]=e,new iE(ee,te,x,S,C,ne,re,ie,ae,31457280+w|0,T,oe,se,D,ce,le,1+this.i|0)}}),F.bY=(function(e){var t=U().bK(this.c,e),n=U().a0(2,this.aw,e),r=U().a0(3,this.ax,e),i=U().a0(4,this.ay,e),a=U().a0(5,this.a2,e),o=U().a0(4,this.a5,e),s=U().a0(3,this.a4,e),c=U().a0(2,this.a3,e),l=U().bK(this.g,e);return new nE(t,this.ah,n,this.ai,r,this.aj,i,this.ak,a,o,s,c,l,this.i)}),F.cc=(function(){return 9}),F.cb=(function(e){switch(e){case 0:return this.c;case 1:return this.aw;case 2:return this.ax;case 3:return this.ay;case 4:return this.a2;case 5:return this.a5;case 6:return this.a4;case 7:return this.a3;case 8:return this.g;default:throw new y_(e)}}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.i){var n=t-this.ak|0;if(n>=0){var r=n>>>20|0,i=31&(n>>>15|0),a=31&(n>>>10|0),o=31&(n>>>5|0),s=31&n;return r<this.a2.a.length?this.a2.a[r].a[i].a[a].a[o].a[s]:i<this.a5.a.length?this.a5.a[i].a[a].a[o].a[s]:a<this.a4.a.length?this.a4.a[a].a[o].a[s]:o<this.a3.a.length?this.a3.a[o].a[s]:this.g.a[s]}else if(t>=this.aj){var c=t-this.aj|0;return this.ay.a[c>>>15|0].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(t>=this.ai){var l=t-this.ai|0;return this.ax.a[l>>>10|0].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.ah){var u=t-this.ah|0;return this.aw.a[u>>>5|0].a[31&u]}else return this.c.a[t]}else throw this.aA(t)}),new R().i(nE,`scala.collection.immutable.Vector5`,{fC:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function iE(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){this.c=null,this.g=null,this.i=0,this.a6=0,this.al=null,this.a7=0,this.am=null,this.a8=0,this.an=null,this.a9=0,this.ao=null,this.ad=0,this.V=null,this.Z=null,this.Y=null,this.X=null,this.W=null,this.a6=t,this.al=n,this.a7=r,this.am=i,this.a8=a,this.an=o,this.a9=s,this.ao=c,this.ad=l,this.V=u,this.Z=d,this.Y=f,this.X=p,this.W=m,IT(this,e,h,g)}F=iE.prototype=new RT,F.constructor=iE;function aE(){}aE.prototype=F,F.t=(function(e){if(e>=0&&e<this.i){var t=e-this.ad|0;if(t>=0){var n=t>>>25|0,r=31&(t>>>20|0),i=31&(t>>>15|0),a=31&(t>>>10|0),o=31&(t>>>5|0),s=31&t;return n<this.V.a.length?this.V.a[n].a[r].a[i].a[a].a[o].a[s]:r<this.Z.a.length?this.Z.a[r].a[i].a[a].a[o].a[s]:i<this.Y.a.length?this.Y.a[i].a[a].a[o].a[s]:a<this.X.a.length?this.X.a[a].a[o].a[s]:o<this.W.a.length?this.W.a[o].a[s]:this.g.a[s]}else if(e>=this.a9){var c=e-this.a9|0;return this.ao.a[c>>>20|0].a[31&(c>>>15|0)].a[31&(c>>>10|0)].a[31&(c>>>5|0)].a[31&c]}else if(e>=this.a8){var l=e-this.a8|0;return this.an.a[l>>>15|0].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(e>=this.a7){var u=e-this.a7|0;return this.am.a[u>>>10|0].a[31&(u>>>5|0)].a[31&u]}else if(e>=this.a6){var d=e-this.a6|0;return this.al.a[d>>>5|0].a[31&d]}else return this.c.a[e]}else throw this.aA(e)}),F.dp=(function(e,t){if(e>=0&&e<this.i)if(e>=this.ad){var n=e-this.ad|0,r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;if(r<this.V.a.length){var l=this.V.e(),u=l.a[r].e(),d=u.a[i].e(),f=d.a[a].e(),p=f.a[o].e(),m=p.a[s].e();return m.a[c]=t,p.a[s]=m,f.a[o]=p,d.a[a]=f,u.a[i]=d,l.a[r]=u,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,l,this.Z,this.Y,this.X,this.W,this.g,this.i)}else if(i<this.Z.a.length){var h=this.Z.e(),g=h.a[i].e(),_=g.a[a].e(),v=_.a[o].e(),y=v.a[s].e();return y.a[c]=t,v.a[s]=y,_.a[o]=v,g.a[a]=_,h.a[i]=g,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,h,this.Y,this.X,this.W,this.g,this.i)}else if(a<this.Y.a.length){var b=this.Y.e(),ee=b.a[a].e(),te=ee.a[o].e(),x=te.a[s].e();return x.a[c]=t,te.a[s]=x,ee.a[o]=te,b.a[a]=ee,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,b,this.X,this.W,this.g,this.i)}else if(o<this.X.a.length){var S=this.X.e(),C=S.a[o].e(),ne=C.a[s].e();return ne.a[c]=t,C.a[s]=ne,S.a[o]=C,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,S,this.W,this.g,this.i)}else if(s<this.W.a.length){var re=this.W.e(),ie=re.a[s].e();return ie.a[c]=t,re.a[s]=ie,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,re,this.g,this.i)}else{var ae=this.g.e();return ae.a[c]=t,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,ae,this.i)}}else if(e>=this.a9){var w=e-this.a9|0,T=this.ao,E=w>>>20|0,oe=31&(w>>>15|0),se=31&(w>>>10|0),D=31&(w>>>5|0),ce=31&w,le=T.e(),ue=le.a[E].e(),de=ue.a[oe].e(),fe=de.a[se].e(),pe=fe.a[D].e();return pe.a[ce]=t,fe.a[D]=pe,de.a[se]=fe,ue.a[oe]=de,le.a[E]=ue,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,le,this.ad,this.V,this.Z,this.Y,this.X,this.W,this.g,this.i)}else if(e>=this.a8){var me=e-this.a8|0,he=this.an,ge=me>>>15|0,_e=31&(me>>>10|0),ve=31&(me>>>5|0),ye=31&me,be=he.e(),xe=be.a[ge].e(),Se=xe.a[_e].e(),Ce=Se.a[ve].e();return Ce.a[ye]=t,Se.a[ve]=Ce,xe.a[_e]=Se,be.a[ge]=xe,new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,be,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,this.g,this.i)}else if(e>=this.a7){var O=e-this.a7|0,we=this.am,Te=O>>>10|0,Ee=31&(O>>>5|0),De=31&O,Oe=we.e(),k=Oe.a[Te].e(),ke=k.a[Ee].e();return ke.a[De]=t,k.a[Ee]=ke,Oe.a[Te]=k,new iE(this.c,this.a6,this.al,this.a7,Oe,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,this.g,this.i)}else if(e>=this.a6){var Ae=e-this.a6|0,je=this.al,Me=Ae>>>5|0,Ne=31&Ae,Pe=je.e(),Fe=Pe.a[Me].e();return Fe.a[Ne]=t,Pe.a[Me]=Fe,new iE(this.c,this.a6,Pe,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,this.g,this.i)}else{var Ie=this.c.e();return Ie.a[e]=t,new iE(Ie,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,this.g,this.i)}else throw this.aA(e)}),F.de=(function(e){if(this.g.a.length<32){var t=U().eh(this.g,e),n=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,this.W,t,n)}else if(this.W.a.length<31){var r=U().C(this.W,this.g),i=new L(1);i.a[0]=e;var a=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,this.X,r,i,a)}else if(this.X.a.length<31){var o=U().C(this.X,U().C(this.W,this.g)),s=U().b7,c=new L(1);c.a[0]=e;var l=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,this.Y,o,s,c,l)}else if(this.Y.a.length<31){var u=U().C(this.Y,U().C(this.X,U().C(this.W,this.g))),d=U().c5,f=U().b7,p=new L(1);p.a[0]=e;var m=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,this.Z,u,d,f,p,m)}else if(this.Z.a.length<31){var h=U().C(this.Z,U().C(this.Y,U().C(this.X,U().C(this.W,this.g)))),g=U().ed,_=U().c5,v=U().b7,y=new L(1);y.a[0]=e;var b=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,this.V,h,g,_,v,y,b)}else if(this.V.a.length<62){var ee=U().C(this.V,U().C(this.Z,U().C(this.Y,U().C(this.X,U().C(this.W,this.g))))),te=U().gM,x=U().ed,S=U().c5,C=U().b7,ne=new L(1);ne.a[0]=e;var re=1+this.i|0;return new iE(this.c,this.a6,this.al,this.a7,this.am,this.a8,this.an,this.a9,this.ao,this.ad,ee,te,x,S,C,ne,re)}else throw e_(new t_)}),F.bY=(function(e){var t=U().bK(this.c,e),n=U().a0(2,this.al,e),r=U().a0(3,this.am,e),i=U().a0(4,this.an,e),a=U().a0(5,this.ao,e),o=U().a0(6,this.V,e),s=U().a0(5,this.Z,e),c=U().a0(4,this.Y,e),l=U().a0(3,this.X,e),u=U().a0(2,this.W,e),d=U().bK(this.g,e);return new iE(t,this.a6,n,this.a7,r,this.a8,i,this.a9,a,this.ad,o,s,c,l,u,d,this.i)}),F.cc=(function(){return 11}),F.cb=(function(e){switch(e){case 0:return this.c;case 1:return this.al;case 2:return this.am;case 3:return this.an;case 4:return this.ao;case 5:return this.V;case 6:return this.Z;case 7:return this.Y;case 8:return this.X;case 9:return this.W;case 10:return this.g;default:throw new y_(e)}}),F.bX=(function(e){return this.bY(e)}),F.h=(function(e){var t=e|0;if(t>=0&&t<this.i){var n=t-this.ad|0;if(n>=0){var r=n>>>25|0,i=31&(n>>>20|0),a=31&(n>>>15|0),o=31&(n>>>10|0),s=31&(n>>>5|0),c=31&n;return r<this.V.a.length?this.V.a[r].a[i].a[a].a[o].a[s].a[c]:i<this.Z.a.length?this.Z.a[i].a[a].a[o].a[s].a[c]:a<this.Y.a.length?this.Y.a[a].a[o].a[s].a[c]:o<this.X.a.length?this.X.a[o].a[s].a[c]:s<this.W.a.length?this.W.a[s].a[c]:this.g.a[c]}else if(t>=this.a9){var l=t-this.a9|0;return this.ao.a[l>>>20|0].a[31&(l>>>15|0)].a[31&(l>>>10|0)].a[31&(l>>>5|0)].a[31&l]}else if(t>=this.a8){var u=t-this.a8|0;return this.an.a[u>>>15|0].a[31&(u>>>10|0)].a[31&(u>>>5|0)].a[31&u]}else if(t>=this.a7){var d=t-this.a7|0;return this.am.a[d>>>10|0].a[31&(d>>>5|0)].a[31&d]}else if(t>=this.a6){var f=t-this.a6|0;return this.al.a[f>>>5|0].a[31&f]}else return this.c.a[t]}else throw this.aA(t)}),new R().i(iE,`scala.collection.immutable.Vector6`,{fD:1,ab:1,ac:1,a5:1,x:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,u:1,t:1,v:1,y:1,p:1,q:1,B:1,z:1,s:1,k:1,T:1,a:1});function oE(e,t){return e.aP=t,e}function sE(e){return oE(e,Xh(new Qh)),e}function cE(){this.aP=null}F=cE.prototype=new rw,F.constructor=cE;function lE(){}lE.prototype=F,F.ba=(function(){return`IndexedSeq`}),F.j=(function(){return bb(new xb,new GC(this))}),F.bm=(function(e){var t=this.aP.p();return t===e?0:t<e?-1:1}),F.aX=(function(e){}),F.aV=(function(e){return Zf(this,e)}),F.p=(function(){return this.aP.p()}),F.x=(function(){return this.aP.p()}),F.m1=(function(e){var t=this.aP,n=``+ga(e);return t.m+=n,this}),F.E=(function(){return this.aP.m}),F.kh=(function(e){if(e instanceof bT)this.aP.kg(e.bw);else if(e instanceof cE){var t=this.aP,n=e.aP;t.m=``+t.m+n}else{var r=e.x();if(r!==0){var i=this.aP;r>0&&i.p();for(var a=e.j();a.k();){var o=``+ga(Ea(a.f()));i.m+=o}}}return this}),F.b=(function(){return this.aP.p()===0}),F.b8=(function(){return Cy()}),F.aW=(function(){return this.aP.m}),F.aQ=(function(e){return this.m1(Ea(e))}),F.eZ=(function(e){return sE(new cE).kh(e)}),F.f0=(function(e){return sE(new cE).kh(e)}),F.h=(function(e){var t=e|0;return Ta(this.aP.kw(t))}),F.t=(function(e){return Ta(this.aP.kw(e))}),new R().i(cE,`scala.collection.mutable.StringBuilder`,{bT:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,a6:1,L:1,H:1,F:1,Q:1,p:1,q:1,R:1,av:1,a:1});function uE(e){var t=new fE().fR(e);e.bE=t.bE,e.cr=t.cr,e.fx=!1}function dE(e){e.fy=1+e.fy|0,e.fx&&uE(e)}function fE(){this.fy=0,this.bE=null,this.cr=null,this.fx=!1,this.bF=0,this.fy=0,this.bE=$(),this.cr=null,this.fx=!1,this.bF=0}F=fE.prototype=new Ow,F.constructor=fE;function pE(){}pE.prototype=F,F.aX=(function(e){}),F.c8=(function(e){return Db(this,e)}),F.j=(function(){return new Oy(this.bE.j(),new ph((()=>this.fy)))}),F.dn=(function(){return Dy()}),F.t=(function(e){return q_(this.bE,e)}),F.p=(function(){return this.bF}),F.x=(function(){return this.bF}),F.b=(function(){return this.bF===0}),F.ll=(function(){return this.fx=!this.b(),this.bE}),F.m9=(function(e){dE(this);var t=new VT(e,$());return this.bF===0?this.bE=t:this.cr.ap=t,this.cr=t,this.bF=1+this.bF|0,this}),F.fR=(function(e){var t=e.j();if(t.k()){var n=1,r=new VT(t.f(),$());for(this.bE=r;t.k();){var i=new VT(t.f(),$());r.ap=i,r=i,n=1+n|0}this.bF=n,this.cr=r}return this}),F.m0=(function(e){var t=e.j();if(t.k()){var n=new fE().fR(t);dE(this),this.bF===0?this.bE=n.bE:this.cr.ap=n.bE,this.cr=n.cr,this.bF=this.bF+n.bF|0}return this}),F.ba=(function(){return`ListBuffer`}),F.aV=(function(e){return this.m0(e)}),F.aQ=(function(e){return this.m9(e)}),F.aW=(function(){return this.ll()}),F.h=(function(e){var t=e|0;return q_(this.bE,t)}),F.b8=(function(){return Dy()}),new R().i(fE,`scala.collection.mutable.ListBuffer`,{bS:1,aH:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aI:1,H:1,F:1,aq:1,s:1,k:1,a6:1,L:1,T:1,a:1});function mE(e,t,n){return e.d0=0,e.cZ=t,e.au=n,e}function hE(e){return mE(e,new L(16),0),e}function gE(){this.d0=0,this.cZ=null,this.au=0}F=gE.prototype=new Ow,F.constructor=gE;function _E(){}_E.prototype=F,F.c8=(function(e){return Db(this,e)}),F.j=(function(){return this.oz().j()}),F.bm=(function(e){var t=this.au;return t===e?0:t<e?-1:1}),F.x=(function(){return this.au}),F.h5=(function(e){this.cZ=ay().lf(this.cZ,this.au,e)}),F.aX=(function(e){e>this.au&&e>=1&&this.h5(e)}),F.t=(function(e){var t=1+e|0;if(e<0)throw au().f3(e,-1+this.au|0);if(t>this.au)throw au().f3(-1+t|0,-1+this.au|0);return this.cZ.a[e]}),F.ow=(function(e,t){var n=1+e|0;if(e<0)throw au().f3(e,-1+this.au|0);if(n>this.au)throw au().f3(-1+n|0,-1+this.au|0);this.d0=1+this.d0|0,this.cZ.a[e]=t}),F.p=(function(){return this.au}),F.oz=(function(){return new YC(this,new ph((()=>this.d0)))}),F.dn=(function(){return ay()}),F.m6=(function(e){this.d0=1+this.d0|0;var t=1+this.au|0;return this.h5(t),this.au=t,this.ow(-1+this.au|0,e),this}),F.kc=(function(e){if(e instanceof gE){var t=e.au;t>0&&(this.d0=1+this.d0|0,this.h5(this.au+t|0),If().eX(e.cZ,0,this.cZ,this.au,t),this.au=this.au+t|0)}else Zf(this,e);return this}),F.ba=(function(){return`ArrayBuffer`}),F.bx=(function(e,t,n){var r=this.au,i=hl().bJ(e),a=n<r?n:r,o=i-t|0,s=a<o?a:o,c=s>0?s:0;return c>0&&If().eX(this.cZ,0,e,t,c),c}),F.aV=(function(e){return this.kc(e)}),F.aQ=(function(e){return this.m6(e)}),F.b8=(function(){return ay()}),F.h=(function(e){return this.t(e|0)}),new R().i(gE,`scala.collection.mutable.ArrayBuffer`,{bF:1,aH:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aI:1,H:1,F:1,aq:1,bR:1,Q:1,p:1,q:1,R:1,s:1,k:1,T:1,a:1});function vE(e,t){return e.db=t,e}function yE(e){return vE(e,[]),e}function bE(){this.db=null}F=bE.prototype=new Ow,F.constructor=bE;function xE(){}xE.prototype=F,F.aX=(function(e){}),F.ba=(function(){return`IndexedSeq`}),F.j=(function(){return bb(new xb,new GC(this))}),F.bm=(function(e){var t=this.db.length|0;return t===e?0:t<e?-1:1}),F.c8=(function(e){return Db(this,e)}),F.dn=(function(){return Ry()}),F.t=(function(e){return this.db[e]}),F.p=(function(){return this.db.length|0}),F.x=(function(){return this.db.length|0}),F.bH=(function(){return`WrappedArray`}),F.aW=(function(){return this}),F.aQ=(function(e){return this.db.push(e),this}),F.h=(function(e){var t=e|0;return this.db[t]}),F.b8=(function(){return Ry()}),new R().i(bE,`scala.scalajs.js.WrappedArray`,{gQ:1,aH:1,K:1,n:1,i:1,e:1,b:1,h:1,c:1,g:1,m:1,j:1,f:1,l:1,d:1,M:1,I:1,N:1,G:1,A:1,aI:1,H:1,F:1,aq:1,s:1,k:1,Q:1,p:1,q:1,R:1,bR:1,L:1,a:1}),oa=new V(0,0),Ga.z=oa,uc(new(ob.r()).C([]));