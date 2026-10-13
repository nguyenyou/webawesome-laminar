var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,m=Symbol(),ee=new WeakMap;var te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ee.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ee.set(t,e))}return e}toString(){return this.cssText}};const ne=e=>new te(typeof e==`string`?e:e+``,void 0,m),re=(e,...t)=>new te(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,m),ie=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},ae=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ne(t)})(e):e,{is:oe,defineProperty:se,getOwnPropertyDescriptor:ce,getOwnPropertyNames:le,getOwnPropertySymbols:ue,getPrototypeOf:de}=Object,fe=globalThis,pe=fe.trustedTypes,me=pe?pe.emptyScript:``,he=fe.reactiveElementPolyfillSupport,ge=(e,t)=>e,_e={toAttribute(e,t){switch(t){case Boolean:e=e?me:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ve=(e,t)=>!oe(e,t),ye={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??=Symbol(`metadata`),fe.litPropertyMetadata??=new WeakMap;var be=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&se(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ce(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ye}static _$Ei(){if(this.hasOwnProperty(ge(`elementProperties`)))return;let e=de(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ge(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ge(`properties`))){let e=this.properties,t=[...le(e),...ue(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(ae(e))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ie(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?_e:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?_e:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ve)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};be.elementStyles=[],be.shadowRootOptions={mode:`open`},be[ge(`elementProperties`)]=new Map,be[ge(`finalized`)]=new Map,he?.({ReactiveElement:be}),(fe.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const xe=globalThis,Se=xe.trustedTypes,Ce=Se?Se.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,we=`$lit$`,Te=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee=`?`+Te,De=`<${Ee}>`,Oe=document,ke=()=>Oe.createComment(``),Ae=e=>e===null||typeof e!=`object`&&typeof e!=`function`,je=Array.isArray,Me=e=>je(e)||typeof e?.[Symbol.iterator]==`function`,Ne=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,Ie=/>/g,Le=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Re=/'/g,ze=/"/g,Be=/^(?:script|style|textarea|title)$/i,Ve=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),He=Symbol.for(`lit-noChange`),h=Symbol.for(`lit-nothing`),Ue=new WeakMap,We=Oe.createTreeWalker(Oe,129);function Ge(e,t){if(!je(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ce===void 0?t:Ce.createHTML(t)}const Ke=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Pe?c[1]===`!--`?o=Fe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Le):(Be.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Le):o=Ie:o===Le?c[0]===`>`?(o=i??Pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Le:c[3]===`"`?ze:Re):o===ze||o===Re?o=Le:o===Fe||o===Ie?o=Pe:(o=Le,i=void 0);let d=o===Le&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Pe?n+De:l>=0?(r.push(s),n.slice(0,l)+we+n.slice(l)+Te+d):n+Te+(l===-2?t:d)}return[Ge(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var qe=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ke(t,n);if(this.el=e.createElement(l,r),We.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=We.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(we)){let t=u[o++],n=i.getAttribute(e).split(Te),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Qe:r[1]===`?`?$e:r[1]===`@`?et:Ze}),i.removeAttribute(e)}else e.startsWith(Te)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Be.test(i.tagName)){let e=i.textContent.split(Te),t=e.length-1;if(t>0){i.textContent=Se?Se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ke()),We.nextNode(),c.push({type:2,index:++a});i.append(e[t],ke())}}}else if(i.nodeType===8)if(i.data===Ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Te,e+1))!==-1;)c.push({type:7,index:a}),e+=Te.length-1}a++}}static createElement(e,t){let n=Oe.createElement(`template`);return n.innerHTML=e,n}};function Je(e,t,n=e,r){if(t===He)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ae(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Je(e,i._$AS(e,t.values),i,r)),t}var Ye=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Oe).importNode(t,!0);We.currentNode=r;let i=We.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Xe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new tt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=We.nextNode(),a++)}return We.currentNode=Oe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Xe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),Ae(e)?e===h||e==null||e===``?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==He&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=qe.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ye(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ue.get(e.strings);return t===void 0&&Ue.set(e.strings,t=new qe(e)),t}k(t){je(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ke()),this.O(ke()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ze=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=h}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Je(this,e,t,0),a=!Ae(e)||e!==this._$AH&&e!==He,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Je(this,r[n+o],t,o),s===He&&(s=this._$AH[o]),a||=!Ae(s)||s!==this._$AH[o],s===h?e=h:e!==h&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Qe=class extends Ze{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}},$e=class extends Ze{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}},et=class extends Ze{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??h)===He)return;let n=this._$AH,r=e===h&&n!==h||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==h&&(n===h||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},tt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};const nt={M:we,P:Te,A:Ee,C:1,L:Ke,R:Ye,D:Me,V:Je,I:Xe,H:Ze,N:$e,U:et,B:Qe,F:tt},rt=xe.litHtmlPolyfillSupport;rt?.(qe,Xe),(xe.litHtmlVersions??=[]).push(`3.3.1`);const it=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Xe(t.insertBefore(ke(),e),e,void 0,n??{})}return i._$AI(e),i},at=globalThis;var ot=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=it(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};ot._$litElement$=!0,ot.finalized=!0,at.litElementHydrateSupport?.({LitElement:ot});const st=at.litElementPolyfillSupport;st?.({LitElement:ot}),(at.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ct=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},lt={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:ve},ut=(e=lt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function g(e){return(t,n)=>typeof n==`object`?ut(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function dt(e){return g({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ft=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function pt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return ft(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return ft(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var mt=re`
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
`,ht=/;\s+$/;function gt(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function _t(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(ht)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var vt,yt=class extends ot{constructor(){super(),u(this,vt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[mt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,vt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,vt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=_t({property:gt(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=_t({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};vt=new WeakMap,s([g()],yt.prototype,`dir`,2),s([g()],yt.prototype,`lang`,2),s([g({type:Boolean,reflect:!0,attribute:`did-ssr`})],yt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),xt=class extends yt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};xt.formAssociated=!0,s([g({reflect:!0})],xt.prototype,`name`,2),s([g({type:Boolean})],xt.prototype,`disabled`,2),s([g({state:!0,attribute:!1})],xt.prototype,`valueHasChanged`,2),s([g({state:!0,attribute:!1})],xt.prototype,`hasInteracted`,2),s([g({attribute:`custom-error`,reflect:!0})],xt.prototype,`customError`,2),s([g({attribute:!1,state:!0,type:Object})],xt.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var St={small:`s`,medium:`m`,large:`l`},Ct=new Set;function wt(e,t){t in St&&!Ct.has(`${e}:${t}`)&&(Ct.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${St[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Tt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Et=re`
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
`,Dt=re`
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
`,Ot=re`
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
function kt(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const At=new Set,jt=new Map;let Mt,Nt=`ltr`,Pt=`en`;const Ft=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Ft){let e=new MutationObserver(Lt);Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function It(...e){e.map(e=>{let t=e.$code.toLowerCase();jt.has(t)?jt.set(t,Object.assign(Object.assign({},jt.get(t)),e)):jt.set(t,e),Mt||=e}),Lt()}function Lt(){Ft&&(Nt=document.documentElement.dir||`ltr`,Pt=document.documentElement.lang||navigator.language),[...At.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Rt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){At.add(this.host)}hostDisconnected(){At.delete(this.host)}dir(){return`${this.host.dir||Nt}`.toLowerCase()}lang(){let e=`${this.host.lang||Pt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Mt?Mt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=jt.get(`${n}-${r}`),a=jt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Mt&&Mt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Mt&&Mt[e])i=Mt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},zt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};It(zt);var Bt=zt,Vt=class extends Rt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};It(Bt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ht={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ut=e=>(...t)=>({_$litDirective$:e,values:t});var Wt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Gt=Ut(class extends Wt{constructor(e){if(super(e),e.type!==Ht.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return He}}),_=e=>e??h,Kt=Symbol.for(``),qt=e=>{if(e?.r===Kt)return e?._$litStatic$},Jt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Kt}),Yt=new Map,Xt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=qt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Yt.get(e))===void 0&&(o.raw=o,Yt.set(e,t=o)),n=s}return e(t,...n)})(Ve);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Tt(this,`[default]`,`start`,`end`),this.localize=new Vt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){wt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Jt`a`:Jt`button`;return Xt`
      <${t}
        part="base button"
        class=${Gt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        title=${this.title}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e&&this.rel?this.rel:void 0)}
        role=${_(e?void 0:`button`)}
        aria-disabled=${_(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Xt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Xt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};v.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},v.css=[Dt,Ot,Et],s([pt(`.button`)],v.prototype,`button`,2),s([pt(`slot:not([name])`)],v.prototype,`labelSlot`,2),s([dt()],v.prototype,`invalid`,2),s([dt()],v.prototype,`isIconButton`,2),s([g()],v.prototype,`title`,2),s([g({reflect:!0})],v.prototype,`variant`,2),s([g({reflect:!0})],v.prototype,`appearance`,2),s([g({reflect:!0})],v.prototype,`size`,2),s([kt(`size`)],v.prototype,`handleSizeChange`,1),s([g({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),s([g({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),s([g({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),s([g({type:Boolean})],v.prototype,`disabled`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`loading`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`pill`,2),s([g()],v.prototype,`type`,2),s([g({reflect:!0})],v.prototype,`name`,2),s([g({reflect:!0})],v.prototype,`value`,2),s([g({reflect:!0})],v.prototype,`href`,2),s([g()],v.prototype,`target`,2),s([g()],v.prototype,`rel`,2),s([g()],v.prototype,`download`,2),s([g({attribute:`formaction`})],v.prototype,`formAction`,2),s([g({attribute:`formenctype`})],v.prototype,`formEnctype`,2),s([g({attribute:`formmethod`})],v.prototype,`formMethod`,2),s([g({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),s([g({attribute:`formtarget`})],v.prototype,`formTarget`,2),s([kt(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),s([kt(`href`)],v.prototype,`handleHrefChange`,1),s([kt(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=s([ct(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zt=re`
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
`,Qt=class extends yt{constructor(){super(...arguments),this.localize=new Vt(this)}render(){return Ve`
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
    `}};Qt.css=Zt,Qt=s([ct(`wa-spinner`)],Qt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var $t=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},en=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},tn=re`
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
`,nn=``,rn=``;function an(){return nn.replace(/\/$/,``)}function on(e){rn=e}function sn(){if(!rn){let e=document.querySelector(`[data-fa-kit-code]`);e&&on(e.getAttribute(`data-fa-kit-code`)||``)}return rn}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cn=`7.3.0`;function ln(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function un(e,t,n){let r=ln(e,t,n),i=an();if(i)return`${i}/${r}/${e}.svg`;let a=sn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${cn}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${cn}/svgs/${r}/${e}.svg`}var dn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>un(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function fn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var pn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},mn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=pn[n][e]??pn.regular[e]??pn.regular[`circle-question`];return r?fn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},hn=`classic`,gn=[dn,mn],_n=new Set;function vn(e){_n.add(e)}function yn(e){_n.delete(e)}function bn(e){return gn.find(t=>t.name===e)}function xn(){return hn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Sn}=nt,Cn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,wn=e=>e.strings===void 0,Tn={},En=(e,t=Tn)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=Symbol(),On=Symbol(),kn,An=new Map,y=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ve`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Dn:On}catch{return On}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Dn;kn||=new DOMParser;let r=kn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Dn}catch{return Dn}}}connectedCallback(){super.connectedCallback(),vn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yn(this)}async getIconSource(){let e=bn(this.library),t=this.family||xn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?bn(this.library):void 0;if(!e){this.svg=null;return}let r=An.get(e);r||(r=this.resolveIcon(e,n),An.set(e,r));let i=await r;if(i===On&&An.delete(e),e===(await this.getIconSource()).url){if(Cn(i)){this.svg=i;return}switch(i){case On:case Dn:this.svg=null,this.dispatchEvent(new $t);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new en)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=bn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ve`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=tn,s([dt()],y.prototype,`svg`,2),s([g({reflect:!0})],y.prototype,`name`,2),s([g({reflect:!0})],y.prototype,`family`,2),s([g({reflect:!0})],y.prototype,`variant`,2),s([g({reflect:!0})],y.prototype,`canvas`,2),s([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),s([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),s([g()],y.prototype,`src`,2),s([g()],y.prototype,`label`,2),s([g({reflect:!0})],y.prototype,`library`,2),s([g({type:Number,reflect:!0})],y.prototype,`rotate`,2),s([g({type:String,reflect:!0})],y.prototype,`flip`,2),s([g({type:String,reflect:!0})],y.prototype,`animation`,2),s([kt(`label`)],y.prototype,`handleLabelChange`,1),s([kt([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=s([ct(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var jn=t({default:()=>v}),Mn=class{constructor(e,t){this.element=e,this.callback=t}start(...e){this.observer??=new ResizeObserver(()=>this.check()),this.observer.observe(this.element);for(let t of e)this.observer.observe(t);this.initialCheckHandle??=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()})}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}};function Nn(e,t){let n=t.getBoundingClientRect();return e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom}var Pn=new Set;function Fn(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function In(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function Ln(e){if(Pn.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=Fn()+In(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function Rn(e){Pn.delete(e),Pn.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function zn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Bn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Vn=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Hn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Un=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Wn=re`
  :host {
    --width: 31rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .dialog {
    display: flex;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: var(--width);
    max-width: calc(100% - var(--wa-space-2xl));
    max-height: calc(100% - var(--wa-space-2xl));
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border-radius: var(--wa-panel-border-radius);
    border: none;
    box-shadow: var(--wa-shadow-l);
    padding: 0;
    margin: auto;

    &.show {
      animation: show-dialog var(--show-duration) ease;

      &::backdrop {
        animation: show-backdrop var(--show-duration, 200ms) ease;
      }
    }

    &.hide {
      animation: show-dialog var(--hide-duration) ease reverse;

      &::backdrop {
        animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .dialog:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog {
      max-height: 80vh;
    }
  }

  .open {
    display: flex;
    opacity: 1;
  }

  .header {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: nowrap;

    padding-inline-start: var(--spacing);
    padding-block-end: 0;

    /* Subtract the close button's padding so that the X is visually aligned with the edges of the dialog content */
    padding-inline-end: calc(var(--spacing) - var(--wa-form-control-padding-block));
    padding-block-start: calc(var(--spacing) - var(--wa-form-control-padding-block));
  }

  .title {
    align-self: center;
    flex: 1 1 auto;
    font-family: inherit;
    font-size: var(--wa-font-size-l);
    font-weight: var(--wa-font-weight-heading);
    line-height: var(--wa-line-height-condensed);
    margin: 0;
  }

  .header-actions {
    align-self: start;
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding-inline-start: var(--spacing);
  }

  .header-actions wa-button,
  .header-actions ::slotted(wa-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .body {
    flex: 1 1 auto;
    display: block;
    padding: var(--spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }
  }

  .footer {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:first-of-type)) {
    margin-inline-start: var(--wa-spacing-xs);
  }

  .dialog::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
    backdrop-filter: var(--backdrop-filter);
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.02;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-dialog {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .dialog {
      border: solid 1px white;
    }
  }
`,Gn=[];function Kn(e){qn(e),Gn.push(e)}function qn(e){for(let t=Gn.length-1;t>=0;t--)if(Gn[t]===e){Gn.splice(t,1);break}}function Jn(e){return Gn.length>0&&Gn[Gn.length-1]===e}function Yn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xn=class extends yt{constructor(){super(...arguments),this.localize=new Vt(this),this.hasSlotController=new Tt(this,`footer`,`header-actions`,`label`),this.renderedWatcher=new Mn(this,e=>this.handleRenderedChange(e)),this.open=!1,this.label=``,this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.withLabel=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&Jn(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.dialog))}}firstUpdated(e){super.firstUpdated(e),this.open&&(this.addOpenListeners(),this.dialog.showModal(),Ln(this),this.renderedWatcher.start(this.dialog))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),Rn(this),this.removeOpenListeners()}async requestClose(e){let t=new Vn({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,Yn(this.dialog,`pulse`);return}this.removeOpenListeners(),await Yn(this.dialog,`hide`),this.open=!1,this.dialog.close(),Rn(this),this.renderedWatcher.stop();let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new Hn)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),Kn(this)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),qn(this)}handleDialogCancel(e){e.preventDefault(),!this.dialog.classList.contains(`hide`)&&e.target===this.dialog&&Jn(this)&&this.requestClose(this.dialog)}handleDialogClick(e){let t=e.target.closest(`[data-dialog="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.dialog&&!Nn(e,this.dialog)&&(this.lightDismiss?this.requestClose(this.dialog):await Yn(this.dialog,`pulse`))}handleRenderedChange(e){if(!this.open){this.renderedWatcher.stop();return}!e&&this.dialog.open?(this.removeOpenListeners(),this.dialog.close(),Rn(this)):e&&!this.dialog.open&&(this.addOpenListeners(),this.dialog.showModal(),Ln(this))}handleOpenChange(){this.open&&!this.dialog.open?this.show():!this.open&&this.dialog.open?(this.open=!0,this.requestClose(this.dialog)):this.open||this.renderedWatcher.stop()}async show(){let e=new Bn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.dialog.showModal(),Ln(this),this.renderedWatcher.start(this.dialog),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.dialog.focus()}),await Yn(this.dialog,`show`),this.dispatchEvent(new Un)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`,`withFooter`),n=this.label.length>0||this.hasSlotController.test(`label`,`withLabel`);return Ve`
      <dialog
        part="dialog"
        aria-labelledby=${_(e&&n?`title`:void 0)}
        aria-label=${_(!e&&this.label?this.label:void 0)}
        class=${Gt({dialog:!0,open:this.open})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?Ve`
              <div part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:`​`} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${e=>this.requestClose(e.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term(`close`)}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </div>
            `:``}

        <div part="body" class="body"><slot></slot></div>

        <!-- Use a hidden element so we still get "slotchange" events. -->
        <div part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};Xn.css=Wn,s([pt(`.dialog`)],Xn.prototype,`dialog`,2),s([g({type:Boolean,reflect:!0})],Xn.prototype,`open`,2),s([g({reflect:!0})],Xn.prototype,`label`,2),s([g({attribute:`without-header`,type:Boolean,reflect:!0})],Xn.prototype,`withoutHeader`,2),s([g({attribute:`light-dismiss`,type:Boolean})],Xn.prototype,`lightDismiss`,2),s([g({attribute:`with-footer`,type:Boolean})],Xn.prototype,`withFooter`,2),s([g({attribute:`with-label`,type:Boolean})],Xn.prototype,`withLabel`,2),s([kt(`open`,{waitUntilFirstUpdate:!0})],Xn.prototype,`handleOpenChange`,1),Xn=s([ct(`wa-dialog`)],Xn),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-dialog]`);if(t instanceof Element){let[e,n]=zn(t.getAttribute(`data-dialog`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-dialog`?e.open=!0:console.warn(`A dialog with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zn=t({default:()=>Xn}),Qn=t({default:()=>y}),$n=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function er(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&ir(t)})}var tr=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),nr=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),rr=e=>{let t=e?.localName;if(!t||!tr.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!nr.get(n)};function ir(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)rr(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ar=re`
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
`,or=re`
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
*/const sr=Ut(class extends Wt{constructor(e){if(super(e),e.type!==Ht.PROPERTY&&e.type!==Ht.ATTRIBUTE&&e.type!==Ht.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!wn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===He||t===h)return t;let n=e.element,r=e.name;if(e.type===Ht.PROPERTY){if(t===n[r])return He}else if(e.type===Ht.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return He}else if(e.type===Ht.ATTRIBUTE&&n.getAttribute(r)===t+``)return He;return En(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends xt{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Tt(this,`hint`,`label`),this.localize=new Vt(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){wt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new $n),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){er(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return Ve`
      <label
        part="form-control-label label"
        class=${Gt({label:!0,"has-label":n})}
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
          .value=${sr(this.value??``)}
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

        ${a?Ve`
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
        ${this.passwordToggle&&!this.disabled?Ve`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?Ve`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:Ve`
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
        class=${Gt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};b.css=[Et,or,ar],b.shadowRootOptions={...xt.shadowRootOptions,delegatesFocus:!0},s([pt(`input`)],b.prototype,`input`,2),s([g()],b.prototype,`title`,2),s([g({reflect:!0})],b.prototype,`type`,2),s([dt()],b.prototype,`value`,1),s([g({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),s([g({reflect:!0})],b.prototype,`size`,2),s([kt(`size`)],b.prototype,`handleSizeChange`,1),s([g({reflect:!0})],b.prototype,`appearance`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`pill`,2),s([g()],b.prototype,`label`,2),s([g({attribute:`hint`})],b.prototype,`hint`,2),s([g({attribute:`with-clear`,type:Boolean})],b.prototype,`withClear`,2),s([g()],b.prototype,`placeholder`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`readonly`,2),s([g({attribute:`password-toggle`,type:Boolean})],b.prototype,`passwordToggle`,2),s([g({attribute:`password-visible`,type:Boolean})],b.prototype,`passwordVisible`,2),s([g({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],b.prototype,`withoutSpinButtons`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`required`,2),s([g()],b.prototype,`pattern`,2),s([g({type:Number})],b.prototype,`minlength`,2),s([g({type:Number})],b.prototype,`maxlength`,2),s([g()],b.prototype,`min`,2),s([g()],b.prototype,`max`,2),s([g()],b.prototype,`step`,2),s([g()],b.prototype,`autocapitalize`,2),s([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],b.prototype,`autocorrect`,2),s([g()],b.prototype,`autocomplete`,2),s([g({type:Boolean})],b.prototype,`autofocus`,2),s([g()],b.prototype,`enterkeyhint`,2),s([g({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],b.prototype,`spellcheck`,2),s([g()],b.prototype,`inputmode`,2),s([g({attribute:`with-label`,type:Boolean})],b.prototype,`withLabel`,2),s([g({attribute:`with-hint`,type:Boolean})],b.prototype,`withHint`,2),s([kt(`step`,{waitUntilFirstUpdate:!0})],b.prototype,`handleStepChange`,1),b=s([ct(`wa-input`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var cr=t({default:()=>b}),x;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var lr;function ur(e){this.c=e}x=ur.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function dr(e){switch(typeof e){case`string`:return Nm.l();case`number`:return Er(e)?e<<24>>24===e?mp.l():e<<16>>16===e?Cp.l():Em.l():Dr(e)?Tm.l():wm.l();case`boolean`:return gf.l();case`undefined`:return Os.l();default:return e instanceof M?km.l():e instanceof ur?yf.l():e&&e.$classData?e.$classData.l():null}}function fr(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Er(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Dr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof ur?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jT()}}function pr(e,t){switch(typeof e){case`string`:return jm(e,t);case`number`:return Sm(e,t);case`boolean`:return mf(e,t);case`undefined`:return Ts(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof M?Dm(e,t):e instanceof ur?vf(kr(e),t):jr.prototype.j.call(e,t)}}function mr(e){switch(typeof e){case`string`:return Am(e);case`number`:return Cm(e);case`boolean`:return hf(e);case`undefined`:return Es(e);default:return e&&e.$classData||e===null?e.o():e instanceof M?Om(e):e instanceof ur?_f(kr(e)):jr.prototype.o.call(e)}}function hr(e){return e===void 0?`undefined`:e.toString()}function gr(e,t){if(t===0)throw new pp(`/ by zero`);return e/t|0}function _r(e,t){if(t===0)throw new pp(`/ by zero`);return e%t|0}function vr(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function yr(e){return String.fromCharCode(e)}function br(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var xr=0,Sr=new WeakMap;function Cr(e){switch(typeof e){case`string`:return Am(e);case`number`:return Cm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Am(n);default:if(e===null)return 0;var r=Sr.get(e);return r===void 0&&(r=xr+1|0,xr=r,Sr.set(e,r)),r}}function wr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Tr(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Er(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Dr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Or(e){return new ur(e)}Or(0);function kr(e){return e===null?0:e.c}function Ar(e){return e===null?lr:e}function jr(){}x=jr.prototype,x.constructor=jr;function S(){}S.prototype=x,x.o=(function(){return Cr(this)}),x.j=(function(e){return this===e}),x.t=(function(){var e=this.o();return fr(this)+`@`+(+(e>>>0)).toString(16)}),x.toString=(function(){return this.t()});function C(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=C.prototype=new S,x.constructor=C,x.an=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),x.ac=(function(){return new C(this.a.slice())});function Mr(){}Mr.prototype=x;function Nr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=Nr.prototype=new S,x.constructor=Nr,x.an=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),x.ac=(function(){return new Nr(this.a.slice())});function Pr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}x=Pr.prototype=new S,x.constructor=Pr,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new Pr(this.a.slice())});function Fr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}x=Fr.prototype=new S,x.constructor=Fr,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new Fr(this.a.slice())});function Ir(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}x=Ir.prototype=new S,x.constructor=Ir,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new Ir(this.a.slice())});function Lr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}x=Lr.prototype=new S,x.constructor=Lr,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new Lr(this.a.slice())});function Rr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=lr}else this.a=e}x=Rr.prototype=new S,x.constructor=Rr,x.an=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),x.ac=(function(){return new Rr(this.a.slice())});function zr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}x=zr.prototype=new S,x.constructor=zr,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new zr(this.a.slice())});function Br(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}x=Br.prototype=new S,x.constructor=Br,x.an=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.ac=(function(){return new Br(this.a.slice())});function w(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=w.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new w().y(this,r,i)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Mr;n.constructor=t,n.an=(function(e,t,n,r){br(this.a,e,t.a,n,r)}),n.ac=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Vr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new w().a(this),this.A}),x.l=(function(){return this.L||=new md(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null}),x.U=(function(e){if(this===Hr)throw gp(new _p);return new(this.r()).C(e)});var Vr=new w;Vr.n={},Vr.E=`Ljava.lang.Object;`,Vr.F=(e=>!e.X),Vr.N=`java.lang.Object`,Vr.I=(e=>e!==null),Vr.A=new w().y(Vr,C,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),jr.prototype.$classData=Vr;var Hr=new w().p(void 0,`V`,`void`,void 0,void 0);new w().p(!1,`Z`,`boolean`,Nr,void 0);var Ur=new w().p(0,`C`,`char`,Pr,Uint16Array);new w().p(0,`B`,`byte`,Fr,Int8Array),new w().p(0,`S`,`short`,Ir,Int16Array),new w().p(0,`I`,`int`,Lr,Int32Array);var Wr=new w().p(null,`J`,`long`,Rr,void 0);new w().p(0,`F`,`float`,zr,Float32Array),new w().p(0,`D`,`double`,Br,Float64Array);var Gr=new w().i(1,`com.raquo.airstream.core.InternalObserver`,{am:1});function Kr(e){return dr(e).dq()+`@`+e.o()}function qr(e){var t=e.cA();return t===void 0?e.cv():t}function Jr(){this.dD=null,Xr=this,this.dD=Zr().dA(new X((e=>void 0)),Qs().cn,!0)}x=Jr.prototype=new S,x.constructor=Jr;function Yr(){}Yr.prototype=x,x.dA=(function(e,t,n){return new Zd(e,n,t,this)}),new w().i(Jr,`com.raquo.airstream.core.Observer$`,{bp:1});var Xr;function Zr(){return Xr||=new Jr,Xr}function Qr(){}x=Qr.prototype=new S,x.constructor=Qr;function $r(){}$r.prototype=x,x.gA=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new w().i(Qr,`com.raquo.airstream.core.ObserverList$`,{br:1});var ei;function ti(){return ei||=new Qr,ei}function ni(e){this.cG=null,this.dH=null,this.cH=0,this.cG=e,this.dH=void 0;var t=Si().bX();this.cH=t===void 0?1:1+t.cH|0,ci().bZ===-1||this.cH>ci().bZ?B().am(new gm(this,ci().bZ)):pi().C?pi().aI.push(this)|0:Si().dj(this)}x=ni.prototype=new S,x.constructor=ni;function ri(){}ri.prototype=x;var ii=new w().i(ni,`com.raquo.airstream.core.Transaction`,{bs:1});function ai(){this.bZ=0,this.dI=null,si=this,this.bZ=1e3,this.dI=new X((e=>{throw W(new G,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=ai.prototype=new S,x.constructor=ai;function oi(){}oi.prototype=x,x.ga=(function(e){try{e.cG.g(e);var t=e.dH;if(t!==void 0)for(;t.jY();)t.jN().k2(e)}catch(e){var n=e instanceof Vl?e:new $(e);B().am(n)}}),new w().i(ai,`com.raquo.airstream.core.Transaction$`,{bt:1});var si;function ci(){return si||=new ai,si}function li(e){e.c0.length|0?new ni(new X((t=>{for(;(e.c0.length|0)>0;){var n=e.c0.shift();try{n.g(t)}catch(e){var r=e instanceof Vl?e:new $(e);B().am(r)}}for(;(e.aI.length|0)>0;){var i=e.aI.shift();Si().dj(i)}}))):(e.aI.length|0)>0&&new ni(new X((t=>{for(;(e.aI.length|0)>0;)Si().dj(e.aI.shift())})))}function ui(){this.C=!1,this.c0=null,this.aI=null,fi=this,this.C=!1,this.c0=T().B(F().b(new(N.r()).C([]))),this.aI=T().B(F().b(new(ii.r()).C([])))}x=ui.prototype=new S,x.constructor=ui;function di(){}di.prototype=x,new w().i(ui,`com.raquo.airstream.core.Transaction$onStart$`,{bu:1});var fi;function pi(){return fi||=new ui,fi}function mi(e,t){return e.aJ.get(t)}function hi(e,t){e.c1.unshift(t)}function gi(e){return e.c1.shift()}function _i(e,t,n){var r=mi(e,t),i=r===void 0,a=r===void 0?T().B(F().b(new(ii.r()).C([]))):r;a.push(n),i&&e.aJ.set(t,a)}function vi(e,t){var n=mi(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aJ.delete(t),i}}function yi(){this.c1=null,this.aJ=null,xi=this,this.c1=T().B(F().b(new(ii.r()).C([]))),this.aJ=new Map}x=yi.prototype=new S,x.constructor=yi;function bi(){}bi.prototype=x,x.dj=(function(e){var t=this.bX();t===void 0?(hi(this,e),ci().ga(e),this.hB(e)):_i(this,t,e)}),x.hB=(function(e){for(var t=e;;){var n=this.bX(),r=t;if(!(n!==void 0&&P().I(r,n)))throw W(new G,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.iV(t),t.cG=ci().dI;var i=this.bX();if(P().I(i,void 0))if((this.aJ.size|0)>0){var a=new _u(0);throw this.aJ.forEach((e=>((t,n)=>{e.bF=e.bF+(t.length|0)|0}))(a)),W(new G,`Transaction queue error: Stack cleared, but a total of `+a.bF+` children for `+(this.aJ.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ci().ga(i),t=i}}),x.iV=(function(e){for(var t=e;;){var n=vi(this,t);if(P().I(n,void 0)){gi(this);var r=this.bX();if(!P().I(r,void 0))t=r;else return}else{hi(this,n);return}}}),x.bX=(function(){return this.c1[0]}),new w().i(yi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bv:1});var xi;function Si(){return xi||=new yi,xi}function Ci(){}x=Ci.prototype=new S,x.constructor=Ci;function wi(){}wi.prototype=x,new w().i(Ci,`com.raquo.airstream.eventbus.EventBus$`,{bz:1});var Ti;function Ei(){return Ti||=new Ci,Ti}function Di(e,t){var n=e.ao.indexOf(t)|0;if(n!==-1)e.ao.splice(n,1),e.L.h()||t.gt();else throw W(new G,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Oi(e){for(;(e.c6.length|0)>0;)Di(e,e.c6.shift())}function ki(e){this.dQ=null,this.ao=null,this.b1=!1,this.c6=null,this.L=null,this.b2=0,this.dQ=e,this.ao=T().B(F().b(new(Ni.r()).C([]))),this.b1=!0,this.c6=T().B(F().b(new(Ni.r()).C([]))),this.L=Z(),this.b2=0}x=ki.prototype=new S,x.constructor=ki;function Ai(){}Ai.prototype=x,x.fT=(function(){if(this.L.h()){var e=pi(),t=(()=>{var e=new Bc(this.dQ);this.L=new Q(e),this.b1=!1,this.b2=0;for(var t=0,n=this.ao.length|0;t<n;){var r=t+this.b2|0;this.ao[r].gs(e),t=1+t|0}Oi(this),this.b1=!0,this.b2=0});if(pi(),e.C)t();else{e.C=!0;try{t()}finally{e.C=!1,li(e)}}}else throw W(new G,`Can not activate `+this+`: it is already active`)}),x.hx=(function(){if(this.L.h())throw W(new G,`Can not deactivate DynamicOwner: it is not active`);this.b1=!1;for(var e=this.ao,t=0,n=e.length|0;t<n;)e[t].gt(),t=1+t|0;Oi(this);var r=this.L;r.h()||r.y().ik(),Oi(this),this.b1=!0,this.L=Z()}),x.h7=(function(e,t){t?(this.b2=1+this.b2|0,this.ao.unshift(e)):this.ao.push(e);var n=this.L;if(!n.h()){var r=n.y();e.gs(r)}}),x.j1=(function(e){this.b1?Di(this,e):this.c6.push(e)}),new w().i(ki,`com.raquo.airstream.ownership.DynamicOwner`,{bC:1});function ji(e,t,n){this.c7=null,this.dR=null,this.c8=null,this.c7=e,this.dR=t,this.c8=Z(),e.h7(this,n)}x=ji.prototype=new S,x.constructor=ji;function Mi(){}Mi.prototype=x,x.cz=(function(){this.c7.j1(this)}),x.gs=(function(e){var t=pi(),n=(()=>{this.c8=this.dR.g(e)});if(pi(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,li(t)}}}),x.gt=(function(){var e=this.c8;e.h()||(e.y().cz(),this.c8=Z())});var Ni=new w().i(ji,`com.raquo.airstream.ownership.DynamicSubscription`,{bD:1});function Pi(){}x=Pi.prototype=new S,x.constructor=Pi;function Fi(){}Fi.prototype=x,x.cD=(function(e,t,n){return new ji(e,new X((e=>new Q(t.g(e)))),n)}),x.gE=(function(e,t,n){return new ji(e,new X((e=>(t.g(e),Z()))),n)}),x.jf=(function(e,t,n){return Li().cD(e,new X((e=>Du(t,n,e))),!1)}),new w().i(Pi,`com.raquo.airstream.ownership.DynamicSubscription$`,{bE:1});var Ii;function Li(){return Ii||=new Pi,Ii}function Ri(e){e.b3=T().B(F().b(new(Gi.r()).C([])))}function zi(e){for(var t=e.b3,n=0,r=t.length|0;n<r;)Hi(t[n]),n=1+n|0;e.b3.length=0}function Bi(e,t){var n=e.b3.indexOf(t)|0;if(n!==-1)e.b3.splice(n,1);else throw W(new G,`Can not remove Subscription from Owner: subscription not found.`)}function Vi(e,t){e.b3.push(t)}function Hi(e){if(!e.cJ)e.dT.a4(),e.cJ=!0;else throw W(new G,`Can not kill Subscription: it was already killed.`)}function Ui(e,t){this.dU=null,this.dT=null,this.cJ=!1,this.dU=e,this.dT=t,this.cJ=!1,e.iQ(this)}x=Ui.prototype=new S,x.constructor=Ui;function Wi(){}Wi.prototype=x,x.cz=(function(){Hi(this),Bi(this.dU,this)});var Gi=new w().i(Ui,`com.raquo.airstream.ownership.Subscription`,{bH:1});function Ki(e,t){this.dV=null,this.dW=null,this.ap=null,this.aK=!1,this.dV=e,this.dW=t,this.ap=Z(),this.aK=!1}x=Ki.prototype=new S,x.constructor=Ki;function qi(){}qi.prototype=x,x.ig=(function(){var e=this.ap;return!e.h()&&!e.y().c7.L.h()}),x.j8=(function(e){if(this.aK)throw W(new G,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ap;if(t.h())var n=!1;else var n=e===t.y().c7;if(!n){this.ig()&&!e.L.h()&&(this.aK=!0);var r=this.ap;r.h()||(r.y().cz(),this.ap=Z()),this.ap=new Q(Li().cD(e,new X((e=>(this.aK||this.dV.a4(),new Ui(e,new Y((()=>{this.aK||this.dW.a4()})))))),!1)),this.aK=!1}}),x.hp=(function(){if(this.aK)throw W(new G,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ap;e.h()||e.y().cz(),this.ap=Z()}),new w().i(Ki,`com.raquo.airstream.ownership.TransferableSubscription`,{bI:1});function Ji(){}x=Ji.prototype=new S,x.constructor=Ji;function Yi(){}Yi.prototype=x,x.B=(function(e){return[...Nc().jl(e)]}),new w().i(Ji,`com.raquo.ew.JsArray$`,{bJ:1});var Xi;function T(){return Xi||=new Ji,Xi}function Zi(){}x=Zi.prototype=new S,x.constructor=Zi;function Qi(){}Qi.prototype=x,x.ib=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),x.hU=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new w().i(Zi,`com.raquo.ew.JsArray$RichJsArray$`,{bK:1});var $i;function ea(){return $i||=new Zi,$i}function ta(){this.dX=null,ra=this,document.createElement(`template`),this.hv(J().d.jg().jh()),this.dX=RegExp(` `,`g`)}x=ta.prototype=new S,x.constructor=ta;function na(){}na.prototype=x,x.hc=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Vl?e:new $(e);if(n instanceof $&&n.a0 instanceof DOMException)return!1;throw n instanceof $?n.a0:n}}),x.ii=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().I(t,r))return!0;n=r}}),x.h5=(function(e,t){e.addEventListener(t.b5.b4.ce,t.cQ,t.cR)}),x.iZ=(function(e,t){e.removeEventListener(t.b5.b4.ce,t.cQ,t.cR)}),x.hu=(function(e){return document.createElement(e.dt())}),x.i0=(function(e,t){var n=this.i1(e,t);return n===void 0?void 0:t.bv.cu(n)}),x.i1=(function(e,t){var n=e.E.getAttributeNS(null,t.aL);return n===null?void 0:n}),x.dz=(function(e,t,n){this.j5(e,t,t.bv.bS(n))}),x.j5=(function(e,t,n){n===null?this.j0(e,t):e.E.setAttribute(t.aL,n)}),x.j0=(function(e,t){e.E.removeAttribute(t.aL)}),x.j6=(function(e,t,n){this.j7(e,t,t.ez.bS(n))}),x.j7=(function(e,t,n){e.E[t.aq]=n}),x.gC=(function(e,t,n){var r=e.E,i=t.cf,a=t.cg,o=n===null?null:n;o===null?(a.ag(new X((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.ag(new X((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.hv=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eR)}),x.i4=(function(e,t){var n=this.i5(e,t);return n===void 0?void 0:t.cO.cu(n)}),x.i5=(function(e,t){var n=e.dx(),r=t.ci,i=n.getAttributeNS(r.h()?null:r.y(),t.cP);return i===null?void 0:i}),x.j9=(function(e,t,n){this.ja(e,t,t.cO.bS(n))}),x.ja=(function(e,t,n){if(n===null)this.j2(e,t);else{var r=t.ci;if(r.h())e.dx().setAttribute(t.ch,n);else{var i=r.y();e.dx().setAttributeNS(i,t.ch,n)}}}),x.j2=(function(e,t){var n=e.dx(),r=t.ci;n.removeAttributeNS(r.h()?null:r.y(),t.cP)}),x.hw=(function(e){return document.createTextNode(e)}),x.ih=(function(e){return dc().hs(e.tagName,45)}),x.hy=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new l_(this.gc(r),n);r=i,n=a}}),x.gc=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dX,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new w().i(ta,`com.raquo.laminar.DomApi$`,{bL:1});var ra;function E(){return ra||=new ta,ra}function ia(e,t,n){this.cL=null,this.dY=null,this.cK=null,this.cL=e,this.dY=t,this.cK=n}x=ia.prototype=new S,x.constructor=ia;function aa(){}aa.prototype=x,x.ag=(function(e){this.cL===null?this.cK===null?nc().hV(this.dY,e):ea().hU(this.cK,Hd().hY(e)):this.cL.ag(e)}),new w().i(ia,`com.raquo.laminar.Seq`,{bM:1});function oa(){}x=oa.prototype=new S,x.constructor=oa;function sa(){}sa.prototype=x,new w().i(oa,`com.raquo.laminar.Seq$`,{bN:1});var ca;function la(){return ca||=new oa,ca}function ua(e){e.cM=Zr(),B(),e.gL=Ei()}function da(e){e.gM=Za()}function fa(e){pa(e,new X((e=>{e.eB.E.focus()})))}function pa(e,t){return new ol(new X((e=>{var n=new hu(!e.aa.L.h()),r=new X((e=>{n.cr?n.cr=!1:t.g(e)}));Li().gE(e.aa,new X((e=>(t=>{r.g(new Ka(e,t))}))(e)),!1)})),Za())}function ma(){this.Y=null,this.er=null,this.bu=null,ga=this,this.Y=new Wc(D()),new Wc(D()),this.er=new Wc(D()),this.bu=new Hc}x=ma.prototype=new S,x.constructor=ma;function ha(){}ha.prototype=x,new w().i(ma,`com.raquo.laminar.codecs.package$`,{bV:1});var ga;function D(){return ga||=new ma,ga}function _a(e){e.gN=ya(e,`class`,` `)}function va(e,t){return Qc(new L,`data-`+t,D().Y)}function ya(e,t,n){var r=Qc(new L,t,D().Y);return new qc(r.aL,new X((e=>{var t=E().i0(e,r);return t===void 0?``:t})),new Lf(((e,t)=>{E().dz(e,r,t)})),n)}function ba(e){e.gK=xa(e,`class`,` `)}function xa(e,t,n){var r=new nl(t,D().Y,Z());return new qc(r.ch,new X((e=>{var t=E().i4(e,r);return t===void 0?``:t})),new Lf(((e,t)=>{E().j9(e,r,t)})),n)}function Sa(){this.ew=null,wa=this,J().d.gH(),T().B(F().b(new(Zc.r()).C([J().d.dv()]))),J().d.gH(),T().B(F().b(new(Zc.r()).C([J().d.dv(),J().d.iI()]))),J().d.ho(),T().B(F().b(new(Zc.r()).C([J().d.dv(),J().d.bV()]))),this.ew=T().B(F().b(new(Nm.r()).C([`value`,`checked`])))}x=Sa.prototype=new S,x.constructor=Sa;function Ca(){}Ca.prototype=x,new w().i(Sa,`com.raquo.laminar.inputs.InputController$`,{ca:1});var wa;function Ta(){return wa||=new Sa,wa}function Ea(e){this.c9=null,this.c9=e}x=Ea.prototype=new S,x.constructor=Ea;function Da(){}Da.prototype=x,x.gv=(function(e,t){try{this.c9.dl(e,t)}catch(e){var n=e instanceof Vl?e:new $(e);B().am(n)}}),x.hq=(function(e){return new Ea(new Lf(((t,n)=>{this.c9.dl(t,n),e.c9.dl(t,n)})))}),x.hd=(function(e){return e===void 0?this:e.hq(this)}),new w().i(Ea,`com.raquo.laminar.inserters.InserterHooks`,{cd:1});function Oa(){}x=Oa.prototype=new S,x.constructor=Oa;function ka(){}ka.prototype=x,x.a8=(function(e,t){return new $f(e,void 0)}),new w().i(Oa,`com.raquo.laminar.inserters.StaticChildInserter$`,{cf:1});var Aa;function ja(){return Aa||=new Oa,Aa}function Ma(e,t){this.ey=null,this.ex=null,this.ey=e,this.ex=t}x=Ma.prototype=new S,x.constructor=Ma;function Na(){}Na.prototype=x,x.p=(function(e){return new Lu(this.ey,this.ex.g(e),new zf(((e,t,n)=>{E().gC(e,t,n)})))}),new w().i(Ma,`com.raquo.laminar.keys.DerivedStyleProp`,{ci:1});function Pa(e,t,n,r){this.b4=null,this.cd=!1,this.cc=!1,this.cb=null,this.b4=e,this.cd=t,this.cc=n,this.cb=r}x=Pa.prototype=new S,x.constructor=Pa;function Fa(){}Fa.prototype=x,x.ip=(function(e){var t=new X((t=>{var n=this.cb.g(t);return n.h()?Z():new Q(e.g(n.y()))}));return new Pa(this.b4,this.cd,this.cc,t)}),x.ds=(function(e){var t=new X((t=>{var n=this.cb.g(t);return n.h()?Z():new Q((n.y(),e.a4()))}));return new Pa(this.b4,this.cd,this.cc,t)}),new w().i(Pa,`com.raquo.laminar.keys.EventProcessor`,{cj:1});function Ia(){}x=Ia.prototype=new S,x.constructor=Ia;function La(){}La.prototype=x,x.bR=(function(e,t,n){return new Pa(e,t,n,new X((e=>new Q(e))))}),new w().i(Ia,`com.raquo.laminar.keys.EventProcessor$`,{ck:1});var Ra;function za(){return Ra||=new Ia,Ra}function Ba(){}x=Ba.prototype=new S,x.constructor=Ba;function Va(){}Va.prototype=x;function Ha(){this.gO=null,this.gP=null,this.gQ=null,this.gR=null,this.gO=`http://www.w3.org/2000/svg`,this.gP=`http://www.w3.org/1999/xlink`,this.gQ=`http://www.w3.org/XML/1998/namespace`,this.gR=`http://www.w3.org/2000/xmlns/`}x=Ha.prototype=new S,x.constructor=Ha;function Ua(){}Ua.prototype=x,x.iu=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Mp(e)}}),new w().i(Ha,`com.raquo.laminar.keys.SvgAttr$`,{cn:1});var Wa;function Ga(){return Wa||=new Ha,Wa}function Ka(e,t){this.eB=null,this.eA=null,this.eB=e,this.eA=t}x=Ka.prototype=new S,x.constructor=Ka;function qa(){}qa.prototype=x,new w().i(Ka,`com.raquo.laminar.lifecycle.MountContext`,{co:1});var O=new w().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function Ja(){this.gS=null,Xa=this,this.gS=new il}x=Ja.prototype=new S,x.constructor=Ja;function Ya(){}Ya.prototype=x,new w().i(Ja,`com.raquo.laminar.modifiers.Modifier$`,{cs:1});var Xa;function Za(){return Xa||=new Ja,Xa}function Qa(){this.R=null,eo=this,this.R=new cl}x=Qa.prototype=new S,x.constructor=Qa;function $a(){}$a.prototype=x,new w().i(Qa,`com.raquo.laminar.modifiers.RenderableNode$`,{cw:1});var eo;function to(){return eo||=new Qa,eo}function no(){this.s=null,io=this,this.s=new ml(new X((e=>e)),k()),new ml(new X((e=>``+(e|0))),k()),new ml(new X((e=>``+ +e)),k()),new ml(new X((e=>``+!!e)),k()),new ml(new X((e=>e.jk())),k())}x=no.prototype=new S,x.constructor=no;function ro(){}ro.prototype=x,new w().i(no,`com.raquo.laminar.modifiers.RenderableText$`,{cB:1});var io;function k(){return io||=new no,io}function ao(){}x=ao.prototype=new S,x.constructor=ao;function oo(){}oo.prototype=x,x.ct=(function(e,t,n){var r=new Q(e);t.gJ(r),n!==void 0&&n.gv(e,t);var i=E().hc(e.aY(),t.aY());return i&&t.gD(r),i}),new w().i(ao,`com.raquo.laminar.nodes.ParentNode$`,{cE:1});var so;function co(){return so||=new ao,so}function lo(){}x=lo.prototype=new S,x.constructor=lo;function uo(){}uo.prototype=x,x.jo=(function(e,t){return Li().cD(e.aa,new X((n=>t.g(new Ka(e,n)))),!0)}),new w().i(lo,`com.raquo.laminar.nodes.ReactiveElement$`,{cG:1});var fo;function po(){return fo||=new lo,fo}function mo(e){this.eN=null,this.eN=new Ea(new Lf(((t,n)=>{matchResult1:{var r=n.aY();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=B(),a=r.textContent,o=t.aY().tagName;i.am(W(new G,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}x=mo.prototype=new S,x.constructor=mo;function ho(){}ho.prototype=x,x.a3=(function(e){return e.gr(new X((e=>e.jp(this.eN))))}),new w().i(mo,`com.raquo.laminar.nodes.Slot`,{cJ:1});function go(){vo=this,T().B(F().jr(new Lr(new Int32Array([0]))))}x=go.prototype=new S,x.constructor=go;function _o(){}_o.prototype=x,x.h3=(function(){return new X((e=>void 0))}),new w().i(go,`com.raquo.laminar.tags.CustomHtmlTag$`,{cL:1});var vo;function yo(){return vo||=new go,vo}function bo(){}x=bo.prototype=new S,x.constructor=bo;function xo(){}xo.prototype=x,x.h9=(function(){Co().hH(),Co().hK(),Co().hL(),Co().hM(),Co().hN(),Co().hO(),Co().hP(),Co().hQ(),Co().hR(),Co().hI(),Co().hJ()}),x.hH=(function(){var e=document.querySelector(`#example1`);if(!au().a2(e).h()){J(),J();var t=new Zf;new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new Pu((J(),za().bR(J().d.bV(),!1,!1)).ds(new Fd((()=>!0))),new X((e=>{t.bq.aX(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hK=(function(){var e=document.querySelector(`#example2`);if(!au().a2(e).h()){J(),J();var t=new Zf;new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.jq().p(!0))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new Pu((J(),za().bR(J().d.bV(),!1,!1)).ds(new Fd((()=>!0))),new X((e=>{t.bq.aX(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hL=(function(){var e=document.querySelector(`#example3`);if(!au().a2(e).h()){J(),J();var t=new Zf;new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([])),F().b(new(O.r()).C([new Pu((J(),za().bR(J().d.bV(),!1,!1)).ds(new Fd((()=>!0))),new X((e=>{t.bq.aX(e)}))),V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hM=(function(){var e=document.querySelector(`#example4`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-opening`))),new q((e=>e.P().p(`Dialog`)))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-opening`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hN=(function(){var e=document.querySelector(`#example5`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-dismiss`))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-dismiss`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hO=(function(){var e=document.querySelector(`#example6`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-custom-width`))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.jd().p(`--width: 50vw;`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-custom-width`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hP=(function(){var e=document.querySelector(`#example7`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-scrolling`))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([J().d.X().H(F().b(new(O.r()).C([J().d.i9().gI().p(150),J().d.hm().p(`1px dashed var(--wa-color-surface-border)`),J().d.iS().p(`0 1rem`),J().d.iR().H(F().b(new(O.r()).C([V(J().d,`Scroll down and give it a try! 👇`,k().s)])))])))]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-scrolling`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hQ=(function(){var e=document.querySelector(`#example8`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-header-actions`))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().i8().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ha().iU()))])),F().b(new(O.r()).C([new Pu((J(),za().bR(J().d.bV(),!1,!1)),new X((e=>(t=>{e.aX(t)}))(J().d.cM.dA(new q((e=>{window.open(window.location.href)})),Qs().cn,!0)))),cd().r(F().b(new(N.r()).C([new q((e=>e.it().p(`arrow-up-right-from-square`))),new q((e=>e.P().p(`Open in new window`)))])),F().b(new(O.r()).C([])))]))),to().R))]))),Gl().T,pl()))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-header-actions`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hR=(function(){var e=document.querySelector(`#example9`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-light-dismiss`))),new q((e=>e.P().p(`Dialog`))),new q((e=>e.il().p(!0))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-light-dismiss`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),x.hI=(function(){var e=document.querySelector(`#example10`);if(!au().a2(e).h()){J();var t=U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Only this button will close it`,k().s)])));new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-deny-close`))),new q((e=>e.P().p(`Dialog`))),new q((e=>new Pu((J(),za().bR(e.iK(),!1,!1)).ip(new q((e=>{P().I(e.detail.source,t.E)||e.preventDefault()}))),new X((e=>(t=>{e.aX(t)}))(J().d.cM.dD))))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(t,to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([V(J().d,`This dialog will only close when you click the button below.`,k().s)]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-deny-close`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))]))))}}),x.hJ=(function(){var e=document.querySelector(`#example11`);au().a2(e).h()||(J(),new H(e,J().d.X().H(F().b(new(O.r()).C([id().r(F().b(new(N.r()).C([new q((e=>e.aD().p(`dialog-focus`))),new q((e=>e.P().p(`Dialog`))),new q((e=>Nu(J().d,Ro().af().a3(F().b(new(tp.r()).C([(J(),ja().a8(U().r(F().b(new(N.r()).C([new q((e=>e.ak().ab())),new q((e=>e.ad().ae()))])),F().b(new(O.r()).C([V(J().d,`Close`,k().s)]))),to().R))]))),Gl().T,pl())))])),F().b(new(O.r()).C([fd().r(F().b(new(N.r()).C([new q((e=>e.hi().p(!0))),new q((e=>e.iT().p(`I will have focus when the dialog is opened`)))])),F().b(new(O.r()).C([])))]))),U().r(F().b(new(N.r()).C([new q((e=>Ao(e.aF(),`dialog`,`dialog-focus`)))])),F().b(new(O.r()).C([V(J().d,`Open Dialog`,k().s)])))])))))}),new w().i(bo,`examples.dialog.Main$package$`,{cN:1});var So;function Co(){return So||=new bo,So}function wo(e){try{Co().h9()}catch(e){throw e}}function To(e,t){return va(J().d,t).p(`close`)}function Eo(){this.f4=null,this.f5=!1}x=Eo.prototype=new S,x.constructor=Eo;function Do(){}Do.prototype=x,x.ae=(function(){return this.f5||=(this.f4=To(this,`dialog`),!0),this.f4}),new w().i(Eo,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$`,{cR:1});var Oo;function ko(){return Oo||=new Eo,Oo}function Ao(e,t,n){return va(J().d,t).p(`open `+n)}function jo(){}x=jo.prototype=new S,x.constructor=jo;function Mo(){}Mo.prototype=x,new w().i(jo,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Open$`,{cS:1});var No;function Po(){return No||=new jo,No}function Fo(){this.fi=null,this.fj=!1,this.fg=null,this.fh=!1}x=Fo.prototype=new S,x.constructor=Fo;function Io(){}Io.prototype=x,x.i8=(function(){return this.fj||=(this.fi=new mo(`header-actions`),!0),this.fi}),x.af=(function(){return this.fh||=(this.fg=new mo(`footer`),!0),this.fg}),new w().i(Fo,`io.github.nguyenyou.webawesome.laminar.Dialog$slots$`,{cU:1});var Lo;function Ro(){return Lo||=new Fo,Lo}function zo(){this.gU=!1,this.bw=null,this.ck=null,this.fs=null,this.cZ=!1,this.gT=0,this.gW=0,this.gV=null,Vo=this,this.gU=!0,this.bw=new ArrayBuffer(8),this.ck=new Int32Array(this.bw,0,2),new Float32Array(this.bw,0,2),this.fs=new Float64Array(this.bw,0,1),this.ck[0]=16909060,this.cZ=(new Int8Array(this.bw,0,8)[0]|0)==1,this.gT=this.cZ?0:1,this.gW=this.cZ?1:0,this.gV=null}x=zo.prototype=new S,x.constructor=zo;function Bo(){}Bo.prototype=x,x.du=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fs[0]=e,(this.ck[0]|0)^(this.ck[1]|0))}),new w().i(zo,`java.lang.FloatingPointBits$`,{d6:1});var Vo;function Ho(){return Vo||=new zo,Vo}function Uo(e,t){for(var n=A().a9(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Wo(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Pl(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Pl(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Il.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Wo(e,t){var n=A().a9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().a9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().a9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().a9(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().a9(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Go(e,c[1]),Qo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Go(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Go(e,d[1]),`<clinit>`]}function Go(e,t){var n=qo(e);if(ws().fy.call(n,t))var r=qo(e)[t];else var r=ls(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Ko(e){if(!((1&e.S)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d1=t,e.S=(1|e.S)<<24>>24}return e.d1}function qo(e){return(1&e.S)<<24>>24?e.d1:Ko(e)}function Jo(e){if(!((2&e.S)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d2=t,e.S=(2|e.S)<<24>>24}return e.d2}function Yo(e){return(2&e.S)<<24>>24?e.d2:Jo(e)}function Xo(e){return(4&e.S)<<24>>24||(e.d0=Object.keys(Yo(e)),e.S=(4|e.S)<<24>>24),e.d0}function Zo(e){return(4&e.S)<<24>>24?e.d0:Xo(e)}function Qo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function $o(e,t){return t?t.arguments&&t.stack?es(e,t):t.stack&&t.sourceURL?rs(e,t):t.stack&&t.number?ns(e,t):t.stack&&t.fileName?ts(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?is(e,t):as(e,t):is(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?os(e,t):ss(e,t):t.stack&&!t.fileName?es(e,t):cs(e,t):[]}function es(e,t){return(t.stack+`
`).replace(A().a9(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().J(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().J(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().J(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ts(e,t){return t.stack.replace(A().J(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().J(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ns(e,t){return t.stack.replace(A().J(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().J(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function rs(e,t){return t.stack.replace(A().J(`\\[native code\\]\\n`,`m`),``).replace(A().J(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().J(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function is(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function as(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function os(e,t){for(var n=A().a9(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ss(e,t){for(var n=A().a9(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().a9(`<anonymous function: (\\S+)>`),`$1`).replace(A().a9(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function cs(e,t){return[]}function ls(e,t,n){for(;;)if(t<(Zo(e).length|0)){var r=Zo(e)[t];if(n.startsWith(r))return``+Yo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function us(){this.d1=null,this.d2=null,this.d0=null,this.S=0}x=us.prototype=new S,x.constructor=us;function ds(){}ds.prototype=x,x.hS=(function(e){return Uo(this,$o(this,e))}),new w().i(us,`java.lang.StackTrace$`,{dd:1});var fs;function ps(){return fs||=new us,fs}function ms(){}x=ms.prototype=new S,x.constructor=ms;function hs(){}hs.prototype=x,x.a9=(function(e){return new RegExp(e)}),x.J=(function(e,t){return new RegExp(e,t)}),new w().i(ms,`java.lang.StackTrace$StringRE$`,{de:1});var gs;function A(){return gs||=new ms,gs}function _s(){this.fu=null,this.gX=null,ys=this,this.fu=new Mh(!1),this.gX=new Mh(!0)}x=_s.prototype=new S,x.constructor=_s;function vs(){}vs.prototype=x,new w().i(_s,`java.lang.System$Streams$`,{dj:1});var ys;function bs(){return ys||=new _s,ys}function xs(){this.fy=null,Cs=this,this.fy=Object.prototype.hasOwnProperty}x=xs.prototype=new S,x.constructor=xs;function Ss(){}Ss.prototype=x,new w().i(xs,`java.lang.Utils$Cache$`,{dl:1});var Cs;function ws(){return Cs||=new xs,Cs}function Ts(e,t){return e===t}function Es(e){return 0}function Ds(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aJ)}var Os=new w().i(0,`java.lang.Void`,{aJ:1},(e=>e===void 0));function ks(e,t){throw hp(new _p,`argument type mismatch`)}function As(){}x=As.prototype=new S,x.constructor=As;function js(){}js.prototype=x,x.bk=(function(e){return e instanceof C||e instanceof Nr||e instanceof Pr||e instanceof Fr||e instanceof Ir||e instanceof Lr||e instanceof Rr||e instanceof zr||e instanceof Br?e.a.length:ks(this,e)}),new w().i(As,`java.lang.reflect.Array$`,{dm:1});var Ms;function Ns(){return Ms||=new As,Ms}function Ps(){}x=Ps.prototype=new S,x.constructor=Ps;function Fs(){}Fs.prototype=x,x.gi=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.e,s=a.f,c=r,l=t.a[c],u=l.e,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),x.gh=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gj=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.ge=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gd=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gk=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.gf=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),x.gg=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new w().i(Ps,`java.util.Arrays$`,{dn:1});var Is;function j(){return Is||=new Ps,Is}function M(e,t){this.e=0,this.f=0,this.e=e,this.f=t}x=M.prototype=new S,x.constructor=M;function Ls(){}Ls.prototype=x,x.j=(function(e){return e instanceof M&&this.e===e.e&&this.f===e.f}),x.o=(function(){return this.e^this.f}),x.t=(function(){return Gs().gz(this.e,this.f)}),x.k5=(function(){return this.e}),x.k4=(function(){return Gs().gy(this.e,this.f)}),x.k3=(function(){return Gs().bW(this.e,this.f)}),x.jK=(function(){return this.e<<24>>24}),x.k1=(function(){return this.e<<16>>16}),x.jV=(function(){return this.e}),x.jW=(function(){return this}),x.jQ=(function(){return Gs().gy(this.e,this.f)}),x.jO=(function(){return Gs().bW(this.e,this.f)}),x.jM=(function(e){return Gs().gw(this.e,this.f,e.e,e.f)}),x.jL=(function(e){return Gs().gw(this.e,this.f,e.e,e.f)}),x.jP=(function(e){return this.e===e.e&&this.f===e.f}),x.jZ=(function(e){return!(this.e===e.e&&this.f===e.f)}),x.jC=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<(-2147483648^e.e):t<n}),x.jD=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<=(-2147483648^e.e):t<n}),x.jy=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>(-2147483648^e.e):t>n}),x.jz=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>=(-2147483648^e.e):t>n}),x.k7=(function(){return new M(~this.e,~this.f)}),x.jw=(function(e){return new M(this.e|e.e,this.f|e.f)}),x.jv=(function(e){return new M(this.e&e.e,this.f&e.f)}),x.jJ=(function(e){return new M(this.e^e.e,this.f^e.f)}),x.jE=(function(e){var t=this.e;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),x.jB=(function(e){var t=this.f;return new M(32&e?t>>>e|0:this.e>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),x.jA=(function(e){var t=this.f;return new M(32&e?t>>e:this.e>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),x.k6=(function(){var e=this.e,t=this.f;return new M(-e|0,e===0?-t|0:~t)}),x.jH=(function(e){var t=this.e,n=this.f,r=e.f,i=t+e.e|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),x.jF=(function(e){var t=this.e,n=this.f,r=e.f,i=t-e.e|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),x.jI=(function(e){var t=this.e,n=e.e,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),x.jx=(function(e){var t=Gs();return new M(t.hA(this.e,this.f,e.e,e.f),t.v)}),x.jG=(function(e){var t=Gs();return new M(t.iY(this.e,this.f,e.e,e.f),t.v)}),new w().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{aK:1});function Rs(e,t,n){return-2097152&n?Vs(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function zs(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.v=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.v=0,n>>>o|0}else return Vs(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.v=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.v=s/4294967296|0,s|0}}function Bs(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.v=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.v=n&(-1+i|0),t):Vs(e,t,n,r,i,1)|0;if(-2097152&i)return e.v=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.v=a/4294967296|0,a|0}function Vs(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.v=ee,m;if(a===1)return e.v=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function Hs(){this.v=0}x=Hs.prototype=new S,x.constructor=Hs;function Us(){}Us.prototype=x,x.gz=(function(e,t){return t===e>>31?``+e:t<0?`-`+Rs(this,-e|0,e===0?-t|0:~t):Rs(this,e,t)}),x.bW=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),x.gy=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),x.jS=(function(e){return new M(e,e>>31)}),x.jR=(function(e){return new M(this.gx(e),this.v)}),x.gx=(function(e){if(e<-0x8000000000000000)return this.v=-2147483648,0;if(e>=0x8000000000000000)return this.v=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.v=e<0&&t!==0?-1+n|0:n,t}),x.gw=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),x.hA=(function(e,t,n,r){if((n|r)===0)throw new pp(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.v=0,-2147483648;var i=gr(e,n);return this.v=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=-1,-1;else return this.v=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=zs(this,a,o,s,c);if((t^r)>=0)return l;var u=this.v;return this.v=l===0?-u|0:~u,-l|0}}),x.iY=(function(e,t,n,r){if((n|r)===0)throw new pp(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=_r(e,n);return this.v=i>>31,i}else return this.v=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=0,0;else return this.v=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Bs(this,a,o,s,c);if(t<0){var u=this.v;return this.v=l===0?-u|0:~u,-l|0}else return l}}),new w().i(Hs,`org.scalajs.linker.runtime.RuntimeLong$`,{dq:1});var Ws;function Gs(){return Ws||=new Hs,Ws}var Ks=new w().i(1,`scala.Function0`,{ae:1}),N=new w().i(1,`scala.Function1`,{e:1});function qs(){}x=qs.prototype=new S,x.constructor=qs;function Js(){}Js.prototype=x;function Ys(){this.fA=null,this.cn=null,Zs=this,this.fA=new q((e=>Qs().fA)),this.cn=new Tf}x=Ys.prototype=new S,x.constructor=Ys;function Xs(){}Xs.prototype=x,new w().i(Ys,`scala.PartialFunction$`,{dE:1});var Zs;function Qs(){return Zs||=new Ys,Zs}function $s(){this.fD=null,tc=this,this.fD=new q((e=>nc().fD))}x=$s.prototype=new S,x.constructor=$s;function ec(){}ec.prototype=x,x.hV=(function(e,t){var n=Ns().bk(e),r=0;if(e instanceof C)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Lr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Br)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Rr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof zr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Pr)for(;r<n;)t.g(Or(e.a[r])),r=1+r|0;else if(e instanceof Fr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Ir)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Nr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new Mp(e)}),new w().i($s,`scala.collection.ArrayOps$`,{dK:1});var tc;function nc(){return tc||=new $s,tc}function rc(e,t){for(var n=e.n();n.w();)t.g(n.k())}function ic(e,t,n,r){return e.D()===0?``+t+r:e.bH(g_(new __),t,n,r).O.u}function ac(e,t,n,r,i){var a=t.O;n.length!==0&&(a.u=``+a.u+n);var o=e.n();if(o.w()){var s=o.k();for(a.u=``+a.u+s;o.w();){a.u=``+a.u+r;var c=o.k();a.u=``+a.u+c}}return i.length!==0&&(a.u=``+a.u+i),t}function oc(e,t){this.fH=null,this.bC=null,this.fH=e,this.bC=t}x=oc.prototype=new S,x.constructor=oc;function sc(){}sc.prototype=x,x.i7=(function(){return this.fH.a4().n()}),new w().i(oc,`scala.collection.Iterator$ConcatIteratorCell`,{e2:1});function cc(){this.fI=null,uc=this,this.fI=new q((e=>dc().fI))}x=cc.prototype=new S,x.constructor=cc;function lc(){}lc.prototype=x,x.hs=(function(e,t){return Mm(e,t)>=0}),new w().i(cc,`scala.collection.StringOps$`,{ea:1});var uc;function dc(){return uc||=new cc,uc}function fc(){}x=fc.prototype=new S,x.constructor=fc;function pc(){}pc.prototype=x,x.I=(function(e,t){return e===t||(Nl(e)?this.hG(e,t):e instanceof ur?this.hE(e,t):e===null?t===null:pr(e,t))}),x.hG=(function(e,t){if(Nl(t))return this.hF(e,t);if(t instanceof ur){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=Ar(e),r=n.e,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:pr(e,t)}else return e===null?t===null:pr(e,t)}),x.hF=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=Ar(t);return n===Gs().bW(r.e,r.f)}else return!1}else if(e instanceof M){var i=Ar(e),a=i.e,o=i.f;if(t instanceof M){var s=Ar(t),c=s.e,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Gs().bW(a,o)===u}else return!1}else return e===null?t===null:pr(e,t)}),x.hE=(function(e,t){if(t instanceof ur)return e.c===t.c;if(Nl(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=Ar(t),r=n.e,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:pr(t,e)}else return e===null&&t===null}),new w().i(fc,`scala.runtime.BoxesRunTime$`,{eE:1});var mc;function P(){return mc||=new fc,mc}var hc=new w().i(0,`scala.runtime.Null$`,{eH:1});function gc(){}x=gc.prototype=new S,x.constructor=gc;function _c(){}_c.prototype=x,x.bi=(function(e,t){if(e instanceof C||e instanceof Lr||e instanceof Br||e instanceof Rr||e instanceof zr)return e.a[t];if(e instanceof Pr)return Or(e.a[t]);if(e instanceof Fr||e instanceof Ir||e instanceof Nr)return e.a[t];throw e===null?new Sp:new Mp(e)}),x.hg=(function(e,t,n){if(e instanceof C)e.a[t]=n;else if(e instanceof Lr)e.a[t]=n|0;else if(e instanceof Br)e.a[t]=+n;else if(e instanceof Rr)e.a[t]=Ar(n);else if(e instanceof zr)e.a[t]=Math.fround(n);else if(e instanceof Pr)e.a[t]=kr(n);else if(e instanceof Fr)e.a[t]=n|0;else if(e instanceof Ir)e.a[t]=n|0;else if(e instanceof Nr)e.a[t]=!!n;else if(e===null)throw new Sp;else throw new Mp(e)}),x.h4=(function(e){return ic(e.aG(),e.aj()+`(`,`,`,`)`)}),x.b=(function(e){return e===null?null:e.a.length===0?Jm(Qm()):new Ng(e)}),x.jr=(function(e){return e===null?null:new kg(e)}),new w().i(gc,`scala.runtime.ScalaRunTime$`,{eI:1});var vc;function F(){return vc||=new gc,vc}function yc(){}x=yc.prototype=new S,x.constructor=yc;function bc(){}bc.prototype=x,x.c=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.m=(function(e,t){return this.hj(e^t)}),x.hj=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.bl=(function(e){var t=e.e,n=e.f;return n===t>>31?t:t^n}),x.a6=(function(e){var t=vr(e);if(t===e)return t;var n=Gs(),r=n.gx(e),i=n.v;return Gs().bW(r,i)===e?r^i:Ho().du(e)}),x.A=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a6(+e);if(e instanceof M){var t=Ar(e);return this.bl(new M(t.e,t.f))}else return mr(e)}),x.bU=(function(e){throw vp(new yp,``+e)}),new w().i(yc,`scala.runtime.Statics$`,{eK:1});var xc;function I(){return xc||=new yc,xc}function Sc(){}x=Sc.prototype=new S,x.constructor=Sc;function Cc(){}Cc.prototype=x,x.hf=(function(e){return e}),new w().i(Sc,`scala.scalajs.js.defined$`,{eQ:1});var wc;function Tc(){return wc||=new Sc,wc}function Ec(){}x=Ec.prototype=new S,x.constructor=Ec;function Dc(){}Dc.prototype=x,x.jb=(function(e,t){return setTimeout((()=>{t.a4()}),e)}),new w().i(Ec,`scala.scalajs.js.timers.package$`,{eR:1});var Oc;function kc(){return Oc||=new Ec,Oc}function Ac(){}x=Ac.prototype=new S,x.constructor=Ac;function jc(){}jc.prototype=x,x.jl=(function(e){var t=[];return e.ag(new q((e=>t.push(e)|0))),t}),new w().i(Ac,`scala.scalajs.runtime.Compat$`,{f0:1});var Mc;function Nc(){return Mc||=new Ac,Mc}function Pc(){}x=Pc.prototype=new S,x.constructor=Pc;function Fc(){}Fc.prototype=x,x.jc=(function(e){var t=`Illegal command line`+(e.gp()===0?``:e.gp()===1?` after first argument`:` after `+e.gp()+` arguments`)+`: `+e.jX();$l().iP().ij(t+`
`)}),new w().i(Pc,`scala.util.CommandLineParser$`,{f2:1});function Ic(e){this.dh=null,this.dh=e}x=Ic.prototype=new S,x.constructor=Ic;function Lc(){}Lc.prototype=x,x.t=(function(){return`DynamicVariable(`+this.dh+`)`}),new w().i(Ic,`scala.util.DynamicVariable`,{f4:1});function Rc(){}x=Rc.prototype=new S,x.constructor=Rc;function zc(){}zc.prototype=x,x.c=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.m=(function(e,t){return this.K(e^t)}),x.K=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.cC=(function(e,t,n){var r=e.ah();if(r===0)return Am(e.aj());var i=t;n||(i=this.c(i,Am(e.aj())));for(var a=0;a<r;)i=this.c(i,I().A(e.ai(a))),a=1+a|0;return this.m(i,r)}),x.jn=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.n();o.w();){var s=o.k(),c=I().A(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.c(l,n),l=this.c(l,r),l=this.cB(l,a),this.m(l,i)}),x.iO=(function(e,t){var n=e.n(),r=t;if(!n.w())return this.m(r,0);var i=n.k();if(!n.w())return this.m(this.c(r,I().A(i)),1);var a=n.k(),o=I().A(i);r=this.c(r,o);for(var s=r,c=I().A(a),l=c-o|0,u=2;n.w();){r=this.c(r,c);var d=I().A(n.k());if(l!==(d-c|0)||l===0){for(r=this.c(r,d),u=1+u|0;n.w();)r=this.c(r,I().A(n.k())),u=1+u|0;return this.m(r,u)}c=d,u=1+u|0}return this.K(this.c(this.c(s,l),c))}),x.fY=(function(e,t){var n=t,r=Ns().bk(e);switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().A(F().bi(e,0))),1);default:var i=I().A(F().bi(e,0));n=this.c(n,i);for(var a=n,o=I().A(F().bi(e,1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().A(F().bi(e,c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().A(F().bi(e,c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.iW=(function(e,t,n,r){return this.K(this.c(this.c(this.c(r,e),t),n))}),x.ic=(function(e,t){var n=t,r=e.l();switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().A(e.q(0))),1);default:var i=I().A(e.q(0));n=this.c(n,i);for(var a=n,o=I().A(e.q(1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().A(e.q(c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().A(e.q(c))),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.im=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.h();){var l=c.a7(),u=c.Q(),d=I().A(l);switch(r=this.c(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.iW(s,a,o,t):this.m(r,n)}),x.g7=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.c(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]?1231:1237),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.fZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g0=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().a6(e.a[0])),1);default:var i=I().a6(e.a[0]);n=this.c(n,i);for(var a=n,o=I().a6(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().a6(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().a6(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g2=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,I().a6(e.a[0])),1);default:var i=I().a6(e.a[0]);n=this.c(n,i);for(var a=n,o=I().a6(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().a6(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().a6(e.a[c])),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g3=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g4=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:var i=n,a=e.a[0];return this.m(this.c(i,I().bl(new M(a.e,a.f))),1);default:var o=e.a[0],s=I().bl(new M(o.e,o.f));n=this.c(n,s);for(var c=n,l=e.a[1],u=I().bl(new M(l.e,l.f)),d=u-s|0,f=2;f<r;){n=this.c(n,u);var p=e.a[f],m=I().bl(new M(p.e,p.f));if(d!==(m-u|0)||d===0){for(n=this.c(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.c(ee,I().bl(new M(te.e,te.f))),f=1+f|0}return this.m(n,r)}u=m,f=1+f|0}return this.K(this.c(this.c(c,d),u))}}),x.g5=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.m(n,r)}o=l,c=1+c|0}return this.K(this.c(this.c(a,s),o))}}),x.g6=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.m(n,0);case 1:return this.m(this.c(n,0),1);default:n=this.c(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.c(n,a),o!==(-a|0)||o===0){for(n=this.c(n,0),s=1+s|0;s<r;)n=this.c(n,0),s=1+s|0;return this.m(n,r)}a=0,s=1+s|0}return this.K(this.c(this.c(i,o),a))}});function Bc(e){this.b3=null,this.dS=null,this.cI=!1,this.dS=e,Ri(this),this.cI=!1}x=Bc.prototype=new S,x.constructor=Bc;function Vc(){}Vc.prototype=x,x.iQ=(function(e){this.cI?(Hi(e),this.dS.a4()):Vi(this,e)}),x.ik=(function(){zi(this),this.cI=!0}),new w().i(Bc,`com.raquo.airstream.ownership.OneTimeOwner`,{bF:1,bG:1});function Hc(){}x=Hc.prototype=new S,x.constructor=Hc;function Uc(){}Uc.prototype=x,x.hz=(function(e){return e!==null}),x.hD=(function(e){return e?``:null}),x.cu=(function(e){return this.hz(e)}),x.bS=(function(e){return this.hD(!!e)}),new w().i(Hc,`com.raquo.laminar.codecs.package$$anon$1`,{bW:1,a6:1});function Wc(e){if(e===null)throw new Sp}x=Wc.prototype=new S,x.constructor=Wc;function Gc(){}Gc.prototype=x,x.bS=(function(e){return e}),x.cu=(function(e){return e}),new w().i(Wc,`com.raquo.laminar.codecs.package$$anon$2`,{bX:1,a6:1});function Kc(e){return new Ma(e,new X((e=>e+`vh`)))}function qc(e,t,n,r){}x=qc.prototype=new Va,x.constructor=qc;function Jc(){}Jc.prototype=x,new w().i(qc,`com.raquo.laminar.keys.CompositeKey`,{ch:1,K:1});function Yc(e){this.ce=null,this.ce=e}x=Yc.prototype=new Va,x.constructor=Yc;function Xc(){}Xc.prototype=x;var Zc=new w().i(Yc,`com.raquo.laminar.keys.EventProp`,{cl:1,K:1});function Qc(e,t,n){return e.aL=t,e.bv=n,e}function L(){this.aL=null,this.bv=null}x=L.prototype=new Va,x.constructor=L;function $c(){}$c.prototype=x,x.p=(function(e){return new Lu(this,e,new zf(((e,t,n)=>{E().dz(e,t,n)})))}),x.di=(function(e){return new zu(this,e.gF(),new zf(((e,t,n)=>{E().dz(e,this,t)})))}),new w().i(L,`com.raquo.laminar.keys.HtmlAttr`,{a9:1,K:1});function el(e,t){this.aq=null,this.ez=null,this.aq=e,this.ez=t}x=el.prototype=new Va,x.constructor=el;function tl(){}tl.prototype=x,x.p=(function(e){return new Lu(this,e,new zf(((e,t,n)=>{E().j6(e,t,n)})))}),new w().i(el,`com.raquo.laminar.keys.HtmlProp`,{at:1,K:1});function nl(e,t,n){this.cP=null,this.cO=null,this.ch=null,this.ci=null,this.cP=e,this.cO=t;var r=n.h()?Z():new Q(n.y()+`:`+e);this.ch=r.h()?e:r.y(),this.ci=n.h()?Z():new Q(Ga().iu(n.y()))}x=nl.prototype=new Va,x.constructor=nl;function rl(){}rl.prototype=x,new w().i(nl,`com.raquo.laminar.keys.SvgAttr`,{cm:1,K:1});function il(){}x=il.prototype=new S,x.constructor=il;function al(){}al.prototype=x,x.a1=(function(e){}),new w().i(il,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ct:1,Q:1});function ol(e,t){if(this.eI=null,this.eI=e,t===null)throw new Sp}x=ol.prototype=new S,x.constructor=ol;function sl(){}sl.prototype=x,x.a1=(function(e){var t=pi(),n=(()=>{this.eI.g(e)});if(pi(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,li(t)}}}),new w().i(ol,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cu:1,Q:1});function cl(){}x=cl.prototype=new S,x.constructor=cl;function ll(){}ll.prototype=x,new w().i(cl,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cx:1,cv:1});function ul(){}x=ul.prototype=new S,x.constructor=ul;function dl(){}dl.prototype=x,new w().i(ul,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cz:1,cy:1});var fl;function pl(){return fl||=new ul,fl}function ml(e,t){if(this.eJ=null,this.eJ=e,t===null)throw new Sp}x=ml.prototype=new S,x.constructor=ml;function hl(){}hl.prototype=x,x.hh=(function(e){return this.eJ.g(e)}),new w().i(ml,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cC:1,cA:1});function gl(e){e.gb(new ki(new Y((()=>{throw W(new G,`Attempting to use owner of unmounted element: `+ic(E().hy(e.aY(),(E(),m_())),``,` > `,``))}))))}function _l(e,t,n){return e.cX=t,e}function vl(){this.cX=null}x=vl.prototype=new S,x.constructor=vl;function yl(){}yl.prototype=x,x.dt=(function(){return this.cX}),x.H=(function(e){var t=this.hn();return e.ag(new X((e=>{e.a1(t)}))),t}),x.hn=(function(){return new bm(this,E().hu(this))}),new w().i(vl,`com.raquo.laminar.tags.HtmlTag`,{ay:1,ac:1});function bl(e,t){this.eR=null,this.eR=e}x=bl.prototype=new S,x.constructor=bl;function xl(){}xl.prototype=x,new w().i(bl,`com.raquo.laminar.tags.SvgTag`,{cM:1,ac:1});function Sl(){}x=Sl.prototype=new S,x.constructor=Sl;function Cl(){}Cl.prototype=x,x.bS=(function(e){return e}),x.cu=(function(e){return e}),new w().i(Sl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cX:1,a6:1});function wl(e,t){return e.bb=t,e.cs(),e}function Tl(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1}x=Tl.prototype=new S,x.constructor=Tl;function El(){}El.prototype=x,x.aD=(function(){return this.b7||=(this.b6=J().d.ia(),!0),this.b6}),x.jd=(function(){return this.b9||=(this.b8=J().d.je(),!0),this.b8}),x.ji=(function(){return this.bc||=(this.ba=new Hu(this.bb,yo().h3(),(yo(),void 0)),!0),this.ba}),x.r=(function(e,t){var n=this.ji().H(F().b(new(O.r()).C([])));return e.ag(new X((e=>{e.g(this).a1(n)}))),t.ag(new X((e=>{e.a1(n)}))),n});function Dl(){}x=Dl.prototype=new S,x.constructor=Dl;function Ol(){}Ol.prototype=x,x.jm=(function(e){if(!(e>=0&&e<=1114111))throw gp(new _p);return String.fromCodePoint(e)}),new w().i(Dl,`java.lang.Character$`,{d3:1,a:1});var kl;function Al(){return kl||=new Dl,kl}function jl(){}x=jl.prototype=new S,x.constructor=jl;function Ml(){}Ml.prototype=x;function Nl(e){return e instanceof jl||typeof e==`number`||e instanceof M}function Pl(e,t,n,r,i){this.be=null,this.by=null,this.bf=null,this.bg=0,this.bd=0,this.be=e,this.by=t,this.bf=n,this.bg=r,this.bd=i}x=Pl.prototype=new S,x.constructor=Pl;function Fl(){}Fl.prototype=x,x.j=(function(e){return e instanceof Pl&&this.bf===e.bf&&this.bg===e.bg&&this.bd===e.bd&&this.be===e.be&&this.by===e.by}),x.t=(function(){var e=``;return this.be!==`<jscode>`&&(e=``+e+this.be+`.`),e=``+e+this.by,this.bf===null?e+=`(Unknown Source)`:(e=e+`(`+this.bf,this.bg>=0&&(e=e+`:`+this.bg,this.bd>=0&&(e=e+`:`+this.bd)),e+=`)`),e}),x.o=(function(){return Am(this.be)^Am(this.by)^Am(this.bf)^this.bg^this.bd});var Il=new w().i(Pl,`java.lang.StackTraceElement`,{aI:1,a:1});function Ll(){}x=Ll.prototype=new S,x.constructor=Ll;function Rl(){}Rl.prototype=x,x.iv=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Pm;for(var i=``,a=t;a!==r;)i+=``+yr(e.a[a]),a=1+a|0;return i}),new w().i(Ll,`java.lang.String$`,{dg:1,a:1});var zl;function Bl(){return zl||=new Ll,zl}function R(e,t,n,r,i){return e.fw=t,e.fx=i,i&&e.hT(),e}var Vl=class extends Error{constructor(){super(),this.fw=null,this.fx=!1,this.fv=null,this.cl=null}id(e){return this}bT(){return this.fw}hT(){var e=this instanceof $?this.a0:this;return this.fv=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}i3(){return this.cl===null&&(this.fx?this.cl=ps().hS(this.fv):this.cl=new(Il.r()).C(0)),this.cl}t(){var e=fr(this),t=this.bT();return t===null?e:e+`: `+t}o(){return jr.prototype.o.call(this)}j(e){return jr.prototype.j.call(this,e)}get message(){var e=this.bT();return e===null?``:e}get name(){return fr(this)}toString(){return this.t()}};function Hl(){this.T=null,Wl=this,this.T=new Ep}x=Hl.prototype=new S,x.constructor=Hl;function Ul(){}Ul.prototype=x,new w().i(Hl,`scala.$less$colon$less$`,{dt:1,a:1});var Wl;function Gl(){return Wl||=new Hl,Wl}function Kl(){}x=Kl.prototype=new S,x.constructor=Kl;function ql(){}ql.prototype=x,x.gm=(function(e,t){var n=e.D();if(n>-1){for(var r=t.iw(n),i=e.n(),a=0;a<n;)F().hg(r,a,i.k()),a=1+a|0;return r}else{var o=null,s=t.j3(),c=s===Ur.l();o=[];for(var l=e.n();l.w();){var u=l.k(),d=c?kr(u):u===null?s.aH.z:u;o.push(d)}return(s===Hr.l()?Os.l():s===hc.l()||s===Rd.l()?Vr.l():s).aH.r().w(o)}}),x.gl=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().I(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new w().i(Kl,`scala.Array$`,{dv:1,a:1});var Jl;function Yl(){return Jl||=new Kl,Jl}function Xl(){this.fz=null,Ql=this,this.fz=new Ic(bs().fu)}x=Xl.prototype=new S,x.constructor=Xl;function Zl(){}Zl.prototype=x,x.iP=(function(){return this.fz.dh}),new w().i(Xl,`scala.Console$`,{dw:1,eq:1});var Ql;function $l(){return Ql||=new Xl,Ql}function eu(){}x=eu.prototype=new Js,x.constructor=eu;function tu(){}tu.prototype=x,x.js=(function(e){return e===null?null:e.a.length===0?nh().fJ:new r_(e)});function nu(){}x=nu.prototype=new S,x.constructor=nu;function ru(){}ru.prototype=x,x.a2=(function(e){return e===null?Z():new Q(e)}),new w().i(nu,`scala.Option$`,{dD:1,a:1});var iu;function au(){return iu||=new nu,iu}function ou(e,t){if(t===e)e.fU(sm().gn(t));else for(var n=t.n();n.w();)e.dk(n.k());return e}function su(){}x=su.prototype=new S,x.constructor=su;function cu(){}cu.prototype=x,x.t=(function(){return`<function0>`});function lu(){}x=lu.prototype=new S,x.constructor=lu;function uu(){}uu.prototype=x,x.t=(function(){return`<function1>`});function du(){}x=du.prototype=new S,x.constructor=du;function fu(){}fu.prototype=x,x.t=(function(){return`<function2>`});function pu(){}x=pu.prototype=new S,x.constructor=pu;function mu(){}mu.prototype=x,x.t=(function(){return`<function3>`});function hu(e){this.cr=!1,this.cr=e}x=hu.prototype=new S,x.constructor=hu;function gu(){}gu.prototype=x,x.t=(function(){return``+this.cr}),new w().i(hu,`scala.runtime.BooleanRef`,{eD:1,a:1});function _u(e){this.bF=0,this.bF=e}x=_u.prototype=new S,x.constructor=_u;function vu(){}vu.prototype=x,x.t=(function(){return``+this.bF}),new w().i(_u,`scala.runtime.IntRef`,{eF:1,a:1});function yu(){this.x=0,this.fS=0,this.h2=0,this.h1=0,xu=this,this.x=Am(`Seq`),this.fS=Am(`Map`),this.h2=Am(`Set`),this.h1=this.jn(m_(),this.fS)}x=yu.prototype=new zc,x.constructor=yu;function bu(){}bu.prototype=x,x.j4=(function(e){return Zh(e)?this.ic(e,this.x):e instanceof Vg?this.im(e,this.x):this.iO(e,this.x)}),new w().i(yu,`scala.util.hashing.MurmurHash3$`,{f6:1,f5:1});var xu;function z(){return xu||=new yu,xu}var Su=class extends Vl{};function Cu(){this.cE=null,this.dB=null,this.dC=null,Tu=this,this.cE=sm().fW(F().b(new(N.r()).C([]))),this.dB=new X((e=>{try{console.error(this.cy(e)+`
`+this.i2(e,`
`))}catch(e){var t=e instanceof Vl?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dC=new X((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.a0:t})),this.iX(this.dB)}x=Cu.prototype=new S,x.constructor=Cu;function wu(){}wu.prototype=x,x.cy=(function(e){try{var t=e.bT()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return dr(e).dq()+`: `+t}),x.i2=(function(e,t){try{return ic(xd().js(e.i3()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.iX=(function(e){this.cE.dk(e)}),x.am=(function(e){for(var t=this.cE.n();t.w();){var n=t.k();try{n.g(e)}catch(e){var r=e instanceof Vl?e:new $(e),i=this.dC;if(n===null?i===null:n.j(i))throw r instanceof $?r.a0:r;console.warn(`Error processing an unhandled error callback:`),kc().jb(0,new Y((e=>(()=>{throw e instanceof $?e.a0:e}))(r)))}}}),new w().i(Cu,`com.raquo.airstream.core.AirstreamError$`,{bo:1,eo:1,ep:1});var Tu;function B(){return Tu||=new Cu,Tu}function Eu(e){e.bt=!0,e.c2=void 0}function Du(e,t,n){return Hf(e,Zr().dA(t,Qs().cn,!0),n)}function Ou(e,t){e.bt?Kf(e,t):ju(e).push(new Y((()=>{Kf(e,t)})))}function ku(e,t){e.bt?Gf(e,t):ju(e).push(new Y((()=>{Gf(e,t)})))}function Au(e){return Xf(e)>0}function ju(e){var t=e.c2;if(t===void 0){var n=T().B(F().b(new(Ks.r()).C([])));return e.c2=n,n}else return t}var Mu=new w().i(1,`com.raquo.airstream.core.Observer`,{a3:1,X:1,V:1});function V(e,t,n){return new uf(n.hh(t))}function Nu(e,t,n,r){return new ol(new X((e=>{(la(),new ia(t,null,null)).ag(new X((e=>(t=>{n.g(t).a1(e)}))(e)))})),Za())}function Pu(e,t){this.b5=null,this.cQ=null,this.cR=null,this.b5=e,this.cQ=(n=>{var r=e.cb.g(n);r.h()||t.g(r.y())}),this.cR=(()=>{var e=null;e=this;var t={};if(e===null)throw new Sp;return t.capture=e.b5.cd,t.passive=e.b5.cc,t})()}x=Pu.prototype=new S,x.constructor=Pu;function Fu(){}Fu.prototype=x,x.a1=(function(e){this.hk(e,!1)}),x.hk=(function(e,t){if(ap(e,this)===-1){var n=new X((t=>(E().h5(e.E,this),new Ui(t.eA,new Y((()=>{var t=ap(e,this);t!==-1&&(ip(e,t),E().iZ(e.E,this))})))))),r=t?po().jo(e,n):Li().cD(e.aa,new X((t=>n.g(new Ka(e,t)))),!1);return rp(e,this,t),r}else{var i=new X((e=>void 0));return Li().gE(e.aa,new X((t=>{i.g(new Ka(e,t))})),!1)}}),x.t=(function(){return`EventListener(`+this.b5.b4.ce+`)`});var Iu=new w().i(Pu,`com.raquo.laminar.modifiers.EventListener`,{cp:1,Q:1,au:1});function Lu(e,t,n){this.eD=null,this.eE=null,this.eC=null,this.eD=e,this.eE=t,this.eC=n}x=Lu.prototype=new S,x.constructor=Lu;function Ru(){}Ru.prototype=x,x.a1=(function(e){this.eC.fV(e,this.eD,this.eE)}),new w().i(Lu,`com.raquo.laminar.modifiers.KeySetter`,{cq:1,Q:1,cD:1});function zu(e,t,n){this.eF=null,this.eH=null,this.eG=null,this.eF=e,this.eH=t,this.eG=n}x=zu.prototype=new S,x.constructor=zu;function Bu(){}Bu.prototype=x,x.a1=(function(e){this.hl(e)}),x.hl=(function(e){e.iH(this.eF);var t=this.eH,n=new X((t=>{this.eG.fV(e,t,this)}));return Li().jf(e.aa,t,n)}),new w().i(zu,`com.raquo.laminar.modifiers.KeyUpdater`,{cr:1,Q:1,au:1});function H(e,t){if(this.cV=null,this.eL=null,this.eM=null,this.eL=t,gl(this),e===null)throw W(new G,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!E().ii(e,document))throw W(new G,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eM=e,this.is()}x=H.prototype=new S,x.constructor=H;function Vu(){}Vu.prototype=x,x.cx=(function(){return this.cV}),x.gb=(function(e){this.cV=e}),x.is=(function(){return this.cV.fT(),co().ct(this,this.eL,void 0)}),x.aY=(function(){return this.eM}),new w().i(H,`com.raquo.laminar.nodes.RootNode`,{cI:1,ab:1,aw:1});function Hu(e,t,n){this.cX=null,this.eQ=null,this.eP=null,this.eQ=e,this.eP=n,_l(this,e,!1)}x=Hu.prototype=new yl,x.constructor=Hu;function Uu(){}Uu.prototype=x,x.dt=(function(){return this.eQ}),x.h8=(function(){var e=this.eP;return e===void 0?void 0:e.map((e=>e.jt.aq))}),new w().i(Hu,`com.raquo.laminar.tags.CustomHtmlTag`,{ax:1,ay:1,ac:1});function Wu(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.eY=null,this.eZ=!1,this.eS=null,this.eT=!1,this.eU=null,this.eV=!1,this.eW=null,this.eX=!1,wl(this,`wa-button`)}x=Wu.prototype=new El,x.constructor=Wu;function Gu(){}Gu.prototype=x,x.ak=(function(){return this.eZ||=(this.eY=ed(),!0),this.eY}),x.ha=(function(){return this.eT||=(this.eS=Xu(),!0),this.eS}),x.ad=(function(){return this.eV||=(this.eU=ko(),!0),this.eU}),x.aF=(function(){return this.eX||=(this.eW=Po(),!0),this.eW}),x.cs=(function(){return jn}),new w().i(Wu,`io.github.nguyenyou.webawesome.laminar.Button$`,{cO:1,Z:1,Y:1});var Ku;function U(){return Ku||=new Wu,Ku}function qu(){this.aL=null,this.bv=null,this.f0=null,this.f1=!1,Qc(this,`appearance`,new Sl)}x=qu.prototype=new $c,x.constructor=qu;function Ju(){}Ju.prototype=x,x.iU=(function(){return this.f1||=(this.f0=Xu().p(`plain`),!0),this.f0}),new w().i(qu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{cP:1,a9:1,K:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){this.aL=null,this.bv=null,this.f2=null,this.f3=!1,Qc(this,`variant`,new Sl)}x=Zu.prototype=new $c,x.constructor=Zu;function Qu(){}Qu.prototype=x,x.ab=(function(){return this.f3||=(this.f2=ed().p(`brand`),!0),this.f2}),new w().i(Zu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cQ:1,a9:1,K:1});var $u;function ed(){return $u||=new Zu,$u}function td(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fa=null,this.fb=!1,this.fc=null,this.fd=!1,this.f6=null,this.f7=!1,this.fe=null,this.ff=!1,this.f8=null,this.f9=!1,wl(this,`wa-dialog`)}x=td.prototype=new El,x.constructor=td;function nd(){}nd.prototype=x,x.iK=(function(){return this.fb||=(this.fa=(J(),new Yc(`wa-hide`)),!0),this.fa}),x.dw=(function(){return this.fd||=(this.fc=(J(),Qc(new L,`open`,D().bu)),!0),this.fc}),x.P=(function(){return this.f7||=(this.f6=(J(),Qc(new L,`label`,D().Y)),!0),this.f6}),x.jq=(function(){return this.ff||=(this.fe=(J(),Qc(new L,`without-header`,D().bu)),!0),this.fe}),x.il=(function(){return this.f9||=(this.f8=(J(),Qc(new L,`light-dismiss`,D().bu)),!0),this.f8}),x.cs=(function(){return Zn}),new w().i(td,`io.github.nguyenyou.webawesome.laminar.Dialog$`,{cT:1,Z:1,Y:1});var rd;function id(){return rd||=new td,rd}function ad(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fm=null,this.fn=!1,this.fk=null,this.fl=!1,wl(this,`wa-icon`)}x=ad.prototype=new El,x.constructor=ad;function od(){}od.prototype=x,x.it=(function(){return this.fn||=(this.fm=(J(),Qc(new L,`name`,D().Y)),!0),this.fm}),x.P=(function(){return this.fl||=(this.fk=(J(),Qc(new L,`label`,D().Y)),!0),this.fk}),x.cs=(function(){return Qn}),new w().i(ad,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cV:1,Z:1,Y:1});var sd;function cd(){return sd||=new ad,sd}function ld(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fq=null,this.fr=!1,this.fo=null,this.fp=!1,wl(this,`wa-input`)}x=ld.prototype=new El,x.constructor=ld;function ud(){}ud.prototype=x,x.iT=(function(){return this.fr||=(this.fq=(J(),Qc(new L,`placeholder`,D().Y)),!0),this.fq}),x.hi=(function(){return this.fp||=(this.fo=(J(),Qc(new L,`autofocus`,D().bu)),!0),this.fo}),x.cs=(function(){return cr}),new w().i(ld,`io.github.nguyenyou.webawesome.laminar.Input$`,{cW:1,Z:1,Y:1});var dd;function fd(){return dd||=new ld,dd}function pd(e){if(e.aH.Z)return e.aH.Q().dq()+`[]`;for(var t=e.aH.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function md(e){this.cY=null,this.aH=e}x=md.prototype=new S,x.constructor=md;function hd(){}hd.prototype=x,x.t=(function(){return(this.aH.Y?`interface `:this.aH.X?``:`class `)+this.aH.N}),x.dq=(function(){return this.cY===null&&(this.cY=pd(this)),this.cY}),new w().i(md,`java.lang.Class`,{d4:1,a:1,M:1});function W(e,t){return R(e,t,null,!0,!0),e}var G=class extends Vl{};new w().i(G,`java.lang.Exception`,{L:1,t:1,a:1});function gd(){}x=gd.prototype=new S,x.constructor=gd;function _d(){}_d.prototype=x;function vd(){this.gY=null,bd=this,this.gY=Pd()}x=vd.prototype=new tu,x.constructor=vd;function yd(){}yd.prototype=x,new w().i(vd,`scala.Predef$`,{dG:1,dz:1,dA:1});var bd;function xd(){return bd||=new vd,bd}function Sd(e,t){return e.co=t,e}function Cd(){this.co=null}x=Cd.prototype=new S,x.constructor=Cd;function wd(){}wd.prototype=x,x.dp=(function(e){return this.co.dn(e,Hh())}),x.dm=(function(e){return this.co.dn(e,Hh())});function Td(e,t){return new Kp(e).hr(t)}function Ed(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?K().z:new Xp(e,r,i)}function Dd(e,t){for(var n=t.n();e.w()&&n.w();)if(!P().I(e.k(),n.k()))return!1;return e.w()===n.w()}function Od(){this.z=null,Ad=this,this.z=new Bp}x=Od.prototype=new S,x.constructor=Od;function kd(){}kd.prototype=x,new w().i(Od,`scala.collection.Iterator$`,{dZ:1,a0:1,a:1});var Ad;function K(){return Ad||=new Od,Ad}function jd(){}x=jd.prototype=new S,x.constructor=jd;function Md(){}Md.prototype=x,new w().i(jd,`scala.collection.immutable.Map$`,{ee:1,e4:1,a:1});var Nd;function Pd(){return Nd||=new jd,Nd}function Fd(e){this.fK=null,this.fK=e}x=Fd.prototype=new cu,x.constructor=Fd;function Id(){}Id.prototype=x,x.a4=(function(){return(0,this.fK)()}),new w().i(Fd,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{ez:1,bk:1,ae:1});function q(e){this.fL=null,this.fL=e}x=q.prototype=new uu,x.constructor=q;function Ld(){}Ld.prototype=x,x.g=(function(e){return(0,this.fL)(e)}),new w().i(q,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eA:1,bl:1,e:1});var Rd=new w().i(0,`scala.runtime.Nothing$`,{eG:1,t:1,a:1});function zd(){}x=zd.prototype=new S,x.constructor=zd;function Bd(){}Bd.prototype=x,x.hY=(function(e){return(t=>e.g(t))}),new w().i(zd,`scala.scalajs.js.Any$`,{eL:1,eM:1,eN:1});var Vd;function Hd(){return Vd||=new zd,Vd}function Ud(){}x=Ud.prototype=new cu,x.constructor=Ud;function Wd(){}Wd.prototype=x;function Gd(){}x=Gd.prototype=new uu,x.constructor=Gd;function Kd(){}Kd.prototype=x;function qd(){}x=qd.prototype=new fu,x.constructor=qd;function Jd(){}Jd.prototype=x;function Yd(){}x=Yd.prototype=new mu,x.constructor=Yd;function Xd(){}Xd.prototype=x;function Zd(e,t,n,r){if(this.dG=null,this.dE=!1,this.cF=null,this.dF=null,this.dG=e,this.dE=t,this.cF=n,r===null)throw new Sp;this.dF=void 0}x=Zd.prototype=new S,x.constructor=Zd;function Qd(){}Qd.prototype=x,x.cA=(function(){return this.dF}),x.cv=(function(){return Kr(this)}),x.t=(function(){return qr(this)}),x.aX=(function(e){try{this.dG.g(e)}catch(e){var t=e instanceof Vl?e:new $(e);this.dE?this.iJ(new mm(t)):B().am(new mm(t))}}),x.iJ=(function(e){try{this.cF.dr(e)?this.cF.g(e):B().am(e)}catch(n){var t=n instanceof Vl?n:new $(n);B().am(new hm(t,e))}}),new w().i(Zd,`com.raquo.airstream.core.Observer$$anon$8`,{bq:1,X:1,V:1,a3:1});function $d(e,t){this.dO=null,this.dP=null,this.dN=null,this.c5=null,this.dP=e,this.dN=t,this.dO=void 0,this.c5=new Gh(new Y((()=>qr(this))))}x=$d.prototype=new S,x.constructor=$d;function ef(){}ef.prototype=x,x.cA=(function(){return this.dO}),x.t=(function(){return qr(this)}),x.aX=(function(e){Au(this.c5)&&this.c5.gu(e,null)}),x.cv=(function(){return``+this.dP.a4()+this.dN}),new w().i($d,`com.raquo.airstream.eventbus.WriteBus`,{bB:1,X:1,V:1,a3:1});function tf(e){if(this.dZ=null,this.e0=!1,this.gK=null,e===null)throw new Sp;ba(this)}x=tf.prototype=new S,x.constructor=tf;function nf(){}nf.prototype=x,x.jh=(function(){return this.e0||=(this.dZ=new bl(`svg`,!1),!0),this.dZ}),new w().i(tf,`com.raquo.laminar.api.Laminar$svg$`,{bQ:1,c9:1,bZ:1,c1:1});function rf(){this.d=null,of=this,this.d=new ng}x=rf.prototype=new S,x.constructor=rf;function af(){}af.prototype=x,new w().i(rf,`com.raquo.laminar.api.package$`,{bT:1,ap:1,as:1,ao:1});var of;function J(){return of||=new rf,of}function sf(e,t,n){return e.cf=t,e.cg=n,e}function cf(){this.cf=null,this.cg=null}x=cf.prototype=new Va,x.constructor=cf;function lf(){}lf.prototype=x,x.p=(function(e){return new Lu(this,hr(e),new zf(((e,t,n)=>{E().gC(e,t,n)})))}),new w().i(cf,`com.raquo.laminar.keys.StyleProp`,{aa:1,K:1,a7:1,a8:1});function uf(e){this.eO=null,this.cW=null,this.eO=Z(),this.cW=E().hw(e)}x=uf.prototype=new S,x.constructor=uf;function df(){}df.prototype=x,x.gD=(function(e){this.eO=e}),x.gJ=(function(e){}),x.a1=(function(e){co().ct(e,this,void 0)}),x.jk=(function(){return this.cW.data}),x.aY=(function(){return this.cW}),new w().i(uf,`com.raquo.laminar.nodes.TextNode`,{cK:1,ab:1,Q:1,av:1});function ff(){}x=ff.prototype=new S,x.constructor=ff;function pf(){}pf.prototype=x;function mf(e,t){return e===t}function hf(e){return e?1231:1237}var gf=new w().i(0,`java.lang.Boolean`,{d1:1,a:1,R:1,M:1},(e=>typeof e==`boolean`));function _f(e){return e}function vf(e,t){return t instanceof ur&&e===t.c}var yf=new w().i(0,`java.lang.Character`,{aE:1,a:1,R:1,M:1},(e=>e instanceof ur)),bf=class extends G{};function xf(){this.u=null,this.u=``}x=xf.prototype=new S,x.constructor=xf;function Sf(){}Sf.prototype=x,x.hb=(function(e){var t=Bl().iv(e,0,e.a.length);return this.u=``+this.u+t,this}),x.t=(function(){return this.u}),x.l=(function(){return this.u.length}),x.g9=(function(e){return this.u.charCodeAt(e)}),new w().i(xf,`java.lang.StringBuilder`,{dh:1,ad:1,aC:1,a:1});function Cf(){}x=Cf.prototype=new _d,x.constructor=Cf;function wf(){}wf.prototype=x;function Tf(){}x=Tf.prototype=new S,x.constructor=Tf;function Ef(){}Ef.prototype=x,x.t=(function(){return`<function1>`}),x.dr=(function(e){return!1}),x.he=(function(e){throw new Mp(e)}),x.g=(function(e){this.he(e)}),new w().i(Tf,`scala.PartialFunction$$anon$1`,{dF:1,g:1,e:1,a:1});function Df(){}x=Df.prototype=new S,x.constructor=Df;function Of(){}Of.prototype=x,x.n=(function(){return this}),x.cw=(function(e){return this.bY(e,-1)}),x.bY=(function(e,t){return Ed(this,e,t)}),x.t=(function(){return`<iterator>`}),x.bH=(function(e,t,n,r){return ac(this,e,t,n,r)}),x.D=(function(){return-1});function kf(e,t){return e.cp=t,e}function Af(){this.cp=null}x=Af.prototype=new S,x.constructor=Af;function jf(){}jf.prototype=x,x.fW=(function(e){return this.cp.dm(e)}),x.gn=(function(e){return this.cp.dp(e)}),x.dp=(function(e){return this.gn(e)}),x.dm=(function(e){return this.fW(e)});function Mf(e,t){return t>=0&&e.aE(t)>0}function Nf(e){return e.aE(0)===0}function Pf(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Dd(e.n(),t)}function Y(e){this.fO=null,this.fO=e}x=Y.prototype=new Wd,x.constructor=Y;function Ff(){}Ff.prototype=x,x.a4=(function(){return(0,this.fO)()}),new w().i(Y,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eT:1,eS:1,bk:1,ae:1});function X(e){this.fP=null,this.fP=e}x=X.prototype=new Kd,x.constructor=X;function If(){}If.prototype=x,x.g=(function(e){return(0,this.fP)(e)}),new w().i(X,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eV:1,eU:1,bl:1,e:1});function Lf(e){this.fQ=null,this.fQ=e}x=Lf.prototype=new Jd,x.constructor=Lf;function Rf(){}Rf.prototype=x,x.dl=(function(e,t){return(0,this.fQ)(e,t)}),new w().i(Lf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eX:1,eW:1,eB:1,dx:1});function zf(e){this.fR=null,this.fR=e}x=zf.prototype=new Xd,x.constructor=zf;function Bf(){}Bf.prototype=x,x.fV=(function(e,t,n){return(0,this.fR)(e,t,n)}),new w().i(zf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eZ:1,eY:1,eC:1,dy:1});function Vf(e){e.br=T().B(F().b(new(Mu.r()).C([]))),e.bs=T().B(F().b(new(Gr.r()).C([]))),e.c4=!1}function Hf(e,t,n){var r=pi(),i=(()=>{qf(e);var r=Uf(e,t,n);return Jf(e),r}),a=!Au(e);if(r.C||!a)var o=i();else{r.C=!0;try{var o=i()}finally{r.C=!1,li(r)}}return o}function Uf(e,t,n){var r=new Ui(n,new Y((()=>{Ou(e,t)})));return e.br.push(t),r}function Wf(e,t,n){var r=pi(),i=(()=>{!Au(e)&&n&&qf(e),e.bs.push(t),Jf(e)}),a=!Au(e);if(r.C||!a)i();else{r.C=!0;try{i()}finally{r.C=!1,li(r)}}}function Gf(e,t){ti().gA(e.bs,t)&&Yf(e)}function Kf(e,t){ti().gA(e.br,t)&&Yf(e)}function qf(e){e.c4||=(e.iN(),!0)}function Jf(e){Xf(e)===1&&e.iL()}function Yf(e){Au(e)||(e.iM(),e.c4=!1)}function Xf(e){var t=e.br.length,n=e.bs;return(t|0)+(n.length|0)|0}function Zf(){this.dK=null,this.bq=null,this.dJ=null,this.dK=void 0,this.bq=new $d(new Y((()=>qr(this))),`.writer`),this.dJ=this.bq.c5}x=Zf.prototype=new S,x.constructor=Zf;function Qf(){}Qf.prototype=x,x.cA=(function(){return this.dK}),x.cv=(function(){return Kr(this)}),x.t=(function(){return qr(this)}),x.gF=(function(){return this.dJ}),new w().i(Zf,`com.raquo.airstream.eventbus.EventBus`,{by:1,a4:1,a5:1,X:1,V:1});function $f(e,t){this.ca=null,this.cN=null,this.ca=e,this.cN=t}x=$f.prototype=new S,x.constructor=$f;function ep(){}ep.prototype=x,x.a1=(function(e){var t=this.cN;t!==void 0&&t.gv(e,this.ca),co().ct(e,this.ca,void 0)}),x.jp=(function(e){return new $f(this.ca,e.hd(this.cN))});var tp=new w().i($f,`com.raquo.laminar.inserters.StaticChildInserter`,{ce:1,Q:1,cc:1,cg:1,cb:1});function np(e){e.cS=new Ki(new Y((()=>{e.aa.fT()})),new Y((()=>{e.aa.hx()}))),e.aM=void 0}function rp(e,t,n){if(e.aM===void 0)e.aM=T().B(F().b(new(Iu.r()).C([t])));else if(n){var r=e.aM;if(r===void 0){var i;throw new Tp(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aM;if(a===void 0){var o;throw new Tp(`undefined.get`)}else var o=a;o.push(t)}}function ip(e,t){var n=e.aM;n!==void 0&&n.splice(t,1)}function ap(e,t){var n=e.aM;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:pr(a,t))?r=!0:i=1+i|0}return r?i:-1}function op(e,t){cp(e,e.cj,t)&&lp(e,t)}function sp(e,t){var n=e.cj;e.cj=t,cp(e,n,t)||lp(e,t)}function cp(e,t,n){var r=!t.h()&&!t.y().cx().L.h(),i=!n.h()&&!n.y().cx().L.h();return r&&!i}function lp(e,t){up(e,t.h()?Z():new Q(t.y().cx()))}function up(e,t){if(t.h())e.cS.hp();else{var n=t.y();e.cS.j8(n)}}function dp(){}x=dp.prototype=new pf,x.constructor=dp;function fp(){}fp.prototype=x;var pp=class extends bf{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(pp,`java.lang.ArithmeticException`,{d0:1,S:1,L:1,t:1,a:1});var mp=new w().i(0,`java.lang.Byte`,{d2:1,U:1,a:1,R:1,M:1},(e=>wr(e)));function hp(e,t){return R(e,t,null,!0,!0),e}function gp(e){return R(e,null,null,!0,!0),e}var _p=class extends bf{};new w().i(_p,`java.lang.IllegalArgumentException`,{d7:1,S:1,L:1,t:1,a:1});function vp(e,t){return R(e,t,null,!0,!0),e}var yp=class extends bf{};new w().i(yp,`java.lang.IndexOutOfBoundsException`,{aG:1,S:1,L:1,t:1,a:1});function bp(){}x=bp.prototype=new pf,x.constructor=bp;function xp(){}xp.prototype=x,new w().i(bp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{da:1,aB:1,az:1,aD:1,aA:1});var Sp=class extends bf{constructor(){super(),R(this,null,null,!0,!0)}};new w().i(Sp,`java.lang.NullPointerException`,{db:1,S:1,L:1,t:1,a:1});var Cp=new w().i(0,`java.lang.Short`,{dc:1,U:1,a:1,R:1,M:1},(e=>Tr(e))),wp=class extends bf{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(wp,`java.lang.UnsupportedOperationException`,{dk:1,S:1,L:1,t:1,a:1});var Tp=class extends bf{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(Tp,`java.util.NoSuchElementException`,{dp:1,S:1,L:1,t:1,a:1});function Ep(){}x=Ep.prototype=new wf,x.constructor=Ep;function Dp(){}Dp.prototype=x,x.g=(function(e){return e}),x.t=(function(){return`generalized constraint`}),new w().i(Ep,`scala.$less$colon$less$$anon$1`,{du:1,dr:1,ds:1,e:1,a:1});function Op(e){return e.d3||=(e.d4=e.cm===null?`null`:jp(e),!0),e.d4}function kp(e){return e.d3?e.d4:Op(e)}function Ap(e){var t=e.cm;return`of class `+fr(t)}function jp(e){try{return e.cm+` (`+Ap(e)+`)`}catch{return`an instance `+Ap(e)}}var Mp=class extends bf{constructor(e){super(),this.d4=null,this.cm=null,this.d3=!1,this.cm=e,R(this,null,null,!0,!0)}bT(){return kp(this)}};new w().i(Mp,`scala.MatchError`,{dB:1,S:1,L:1,t:1,a:1});function Np(){}x=Np.prototype=new S,x.constructor=Np;function Pp(){}Pp.prototype=x,x.h=(function(){return this===Z()}),x.D=(function(){return this.h()?0:1}),x.n=(function(){return this.h()?K().z:new Hp(this.y())});function Fp(e){this.bz=0,this.fC=0,this.fB=null,this.fB=e,this.bz=0,this.fC=e.ah()}x=Fp.prototype=new Of,x.constructor=Fp;function Ip(){}Ip.prototype=x,x.w=(function(){return this.bz<this.fC}),x.k=(function(){var e=this.fB.ai(this.bz);return this.bz=1+this.bz|0,e}),new w().i(Fp,`scala.Product$$anon$1`,{dH:1,r:1,s:1,b:1,c:1});function Lp(e){this.co=null,Sd(this,e)}x=Lp.prototype=new wd,x.constructor=Lp;function Rp(){}Rp.prototype=x,new w().i(Lp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dV:1,dU:1,a0:1,a:1,af:1});function zp(e){return ic(e,e.bj()+`(`,`, `,`)`)}function Bp(){}x=Bp.prototype=new Of,x.constructor=Bp;function Vp(){}Vp.prototype=x,x.w=(function(){return!1}),x.ix=(function(){throw new Tp(`next on empty iterator`)}),x.D=(function(){return 0}),x.bY=(function(e,t){return this}),x.k=(function(){this.ix()}),new w().i(Bp,`scala.collection.Iterator$$anon$19`,{e0:1,r:1,s:1,b:1,c:1});function Hp(e){this.bB=!1,this.fG=null,this.fG=e,this.bB=!1}x=Hp.prototype=new Of,x.constructor=Hp;function Up(){}Up.prototype=x,x.w=(function(){return!this.bB}),x.k=(function(){return this.bB?K().z.k():(this.bB=!0,this.fG)}),x.bY=(function(e,t){return this.bB||e>0||t===0?K().z:this}),new w().i(Hp,`scala.collection.Iterator$$anon$20`,{e1:1,r:1,s:1,b:1,c:1});function Wp(e){for(;;){if(e.G instanceof Kp){var t=e.G;e.G=t.G,e.as=t.as,t.V!==null&&(e.U===null&&(e.U=t.U),t.U.bC=e.V,e.V=t.V);continue}return}}function Gp(e){for(;;)if(e.V===null)return e.G=null,e.U=null,!1;else{if(e.G=e.V.i7(),e.U===e.V&&(e.U=e.U.bC),e.V=e.V.bC,Wp(e),e.as)return!0;if(e.G!==null&&e.G.w())return e.as=!0,!0}}function Kp(e){this.G=null,this.V=null,this.U=null,this.as=!1,this.G=e,this.V=null,this.U=null,this.as=!1}x=Kp.prototype=new Of,x.constructor=Kp;function qp(){}qp.prototype=x,x.w=(function(){return this.as?!0:this.G===null?!1:this.G.w()?(this.as=!0,!0):Gp(this)}),x.k=(function(){return this.w()?(this.as=!1,this.G.k()):K().z.k()}),x.hr=(function(e){var t=new oc(e,null);return this.V===null?(this.V=t,this.U=t):(this.U.bC=t,this.U=t),this.G===null&&(this.G=K().z),this}),new w().i(Kp,`scala.collection.Iterator$ConcatIterator`,{aQ:1,r:1,s:1,b:1,c:1});function Jp(e){for(;e.al>0;)e.at.w()?(e.at.k(),e.al=-1+e.al|0):e.al=0}function Yp(e,t){if(e.N<0)return-1;var n=e.N-t|0;return n<0?0:n}function Xp(e,t,n){this.at=null,this.N=0,this.al=0,this.at=e,this.N=n,this.al=t}x=Xp.prototype=new Of,x.constructor=Xp;function Zp(){}Zp.prototype=x,x.D=(function(){var e=this.at.D();if(e<0)return-1;var t=e-this.al|0,n=t<0?0:t;if(this.N<0)return n;var r=this.N;return r<n?r:n}),x.w=(function(){return Jp(this),this.N!==0&&this.at.w()}),x.k=(function(){return Jp(this),this.N>0?(this.N=-1+this.N|0,this.at.k()):this.N<0?this.at.k():K().z.k()}),x.bY=(function(e,t){var n=e>0?e:0;if(t<0)var r=Yp(this,n);else if(t<=n)var r=0;else if(this.N<0)var r=t-n|0;else var i=Yp(this,n),a=t-n|0,r=i<a?i:a;var o=this.al+n|0;return r===0?K().z:o<0?(this.al=2147483647,this.N=0,Td(this,new Fd((()=>new Xp(this.at,-2147483647+o|0,r))))):(this.al=o,this.N=r,this)}),new w().i(Xp,`scala.collection.Iterator$SliceIterator`,{e3:1,r:1,s:1,b:1,c:1});function Qp(e,t){return t>=0&&e.aE(t)>0}function $p(e,t){if(t<0)throw vp(new yp,``+t);var n=e.hC(t);if(n.h())throw vp(new yp,``+t);return n.a7()}function em(e,t){return Qh(t)?tm(e,e,t):Pf(e,t)}function tm(e,t,n){for(;;)if(t===n)return!0;else if(!t.h()&&!n.h()&&P().I(t.a7(),n.a7())){var r=t.Q(),i=n.Q();t=r,n=i}else return t.h()&&n.h()}function nm(e){this.bE=null,this.bE=e}x=nm.prototype=new Of,x.constructor=nm;function rm(){}rm.prototype=x,x.w=(function(){return!this.bE.h()}),x.k=(function(){var e=this.bE.a7();return this.bE=this.bE.Q(),e}),new w().i(nm,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{e8:1,r:1,s:1,b:1,c:1});function im(){this.cp=null,kf(this,pm())}x=im.prototype=new jf,x.constructor=im;function am(){}am.prototype=x,new w().i(im,`scala.collection.mutable.Buffer$`,{ej:1,e5:1,af:1,a0:1,a:1});var om;function sm(){return om||=new im,om}function cm(e){this.bG=0,this.fM=0,this.fN=null,this.fN=e,this.bG=0,this.fM=e.ah()}x=cm.prototype=new Of,x.constructor=cm;function lm(){}lm.prototype=x,x.w=(function(){return this.bG<this.fM}),x.k=(function(){var e=this.fN.ai(this.bG);return this.bG=1+this.bG|0,e}),new w().i(cm,`scala.runtime.ScalaRunTime$$anon$1`,{eJ:1,r:1,s:1,b:1,c:1});function um(){}x=um.prototype=new S,x.constructor=um;function dm(){}dm.prototype=x,x.dm=(function(e){return this.go(e)}),x.go=(function(e){return ou(b_(new x_),e).gB()}),x.dp=(function(e){return this.go(e)}),new w().i(um,`scala.scalajs.js.WrappedArray$`,{eP:1,e9:1,af:1,a0:1,a:1});var fm;function pm(){return fm||=new um,fm}var mm=class e extends Su{constructor(e){super(),this.bn=null,this.bn=e,R(this,`ObserverError: `+B().cy(e),null,!0,!0)}aG(){return new Fp(this)}o(){return z().cC(this,-889275714,!1)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.bn,r=t.bn;return n===null?r===null:n.j(r)}else return!1}ah(){return 1}aj(){return`ObserverError`}ai(e){if(e===0)return this.bn;throw vp(new yp,``+e)}t(){return`ObserverError: `+this.bn}};new w().i(mm,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ah:1,a2:1,t:1,a:1,d:1,T:1});var hm=class e extends Su{constructor(e,t){super(),this.bp=null,this.bo=null,this.bp=e,this.bo=t,R(this,`ObserverErrorHandlingError: `+B().cy(e)+`; cause: `+B().cy(t),null,!0,!0),this.id(t)}aG(){return new Fp(this)}o(){return z().cC(this,-889275714,!1)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.bp,r=t.bp;if(n===null?r===null:n.j(r)){var i=this.bo,a=t.bo;return i===null?a===null:i.j(a)}else return!1}else return!1}ah(){return 2}aj(){return`ObserverErrorHandlingError`}ai(e){if(e===0)return this.bp;if(e===1)return this.bo;throw vp(new yp,``+e)}t(){return`ObserverErrorHandlingError: `+this.bp+`; cause: `+this.bo}};new w().i(hm,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ai:1,a2:1,t:1,a:1,d:1,T:1});var gm=class e extends Su{constructor(e,t){super(),this.b0=null,this.aZ=0,this.b0=e,this.aZ=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aG(){return new Fp(this)}o(){var e=-889275714;return e=I().c(e,Am(`TransactionDepthExceeded`)),e=I().c(e,I().A(this.b0)),e=I().c(e,this.aZ),I().m(e,2)}j(t){return this===t?!0:t instanceof e&&this.aZ===t.aZ?this.b0===t.b0:!1}ah(){return 2}aj(){return`TransactionDepthExceeded`}ai(e){if(e===0)return this.b0;if(e===1)return this.aZ;throw vp(new yp,``+e)}t(){return`TransactionDepthExceeded: `+this.b0+`; maxDepth: `+this.aZ}};new w().i(gm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aj:1,a2:1,t:1,a:1,d:1,T:1});var _m=new w().i(1,`com.raquo.airstream.core.EventStream`,{al:1,a4:1,V:1,ak:1,an:1,a5:1});function vm(e,t){var n=e.cT;n===void 0?e.cT=Tc().hf(T().B(F().b(new(Nm.r()).C([t])))):n.push(t)|0}function ym(e,t){var n=e.eK;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].k0()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function bm(e,t){this.cj=null,this.aa=null,this.cS=null,this.aM=null,this.cU=null,this.E=null,this.eK=null,this.cT=null,this.cU=e,this.E=t,this.cj=Z(),gl(this),np(this),this.eK=void 0,this.cT=void 0}x=bm.prototype=new S,x.constructor=bm;function xm(){}xm.prototype=x,x.a1=(function(e){co().ct(e,this,void 0)}),x.cx=(function(){return this.aa}),x.gb=(function(e){this.aa=e}),x.gJ=(function(e){op(this,e)}),x.gD=(function(e){sp(this,e)}),x.ht=(function(){if(E().ih(this.E)){var e=this.cU;return e instanceof Hu?e.h8():void 0}else return Ta().ew}),x.ie=(function(e){var t=this.ht();return t!==void 0&&ea().ib(t,e,0)}),x.iH=(function(e){if(e instanceof el&&this.ie(e.aq)){if(ym(this,e.aq))throw W(new G,"Can not add uncontrolled `"+e.aq+" <-- ???` to element `"+E().gc(this.E)+"` that already has an input controller for `"+e.aq+"` property.");vm(this,e.aq)}}),x.t=(function(){return`ReactiveHtmlElement(`+(this.E===null?`tag=`+this.cU.dt():this.E.outerHTML)+`)`}),x.aY=(function(){return this.E}),new w().i(bm,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cH:1,ab:1,Q:1,av:1,aw:1,cF:1});function Sm(e,t){return Object.is(e,t)}function Cm(e){return Ho().du(e)}var wm=new w().i(0,`java.lang.Double`,{aF:1,U:1,a:1,R:1,M:1,W:1},(e=>typeof e==`number`)),Tm=new w().i(0,`java.lang.Float`,{d5:1,U:1,a:1,R:1,M:1,W:1},(e=>Dr(e))),Em=new w().i(0,`java.lang.Integer`,{d8:1,U:1,a:1,R:1,M:1,W:1},(e=>Er(e)));function Dm(e,t){return t instanceof M&&e.e===t.e&&e.f===t.f}function Om(e){return e.e^e.f}var km=new w().i(0,`java.lang.Long`,{aH:1,U:1,a:1,R:1,M:1,W:1},(e=>e instanceof M));function Am(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function jm(e,t){return e===t}function Mm(e,t){var n=Al().jm(t);return e.indexOf(n)|0}var Nm=new w().i(0,`java.lang.String`,{df:1,a:1,R:1,ad:1,M:1,W:1},(e=>typeof e==`string`)),Pm=class extends yp{constructor(){super(),R(this,null,null,!0,!0)}};new w().i(Pm,`java.lang.StringIndexOutOfBoundsException`,{di:1,aG:1,S:1,L:1,t:1,a:1});function Fm(){}x=Fm.prototype=new Pp,x.constructor=Fm;function Im(){}Im.prototype=x,x.hZ=(function(){throw new Tp(`None.get`)}),x.aj=(function(){return`None`}),x.ah=(function(){return 0}),x.ai=(function(e){return I().bU(e)}),x.aG=(function(){return new cm(this)}),x.o=(function(){return 2433880}),x.t=(function(){return`None`}),x.y=(function(){this.hZ()}),new w().i(Fm,`scala.None$`,{dC:1,aL:1,b:1,T:1,d:1,a:1});var Lm;function Z(){return Lm||=new Fm,Lm}function Q(e){this.bA=null,this.bA=e}x=Q.prototype=new Pp,x.constructor=Q;function Rm(){}Rm.prototype=x,x.y=(function(){return this.bA}),x.aj=(function(){return`Some`}),x.ah=(function(){return 1}),x.ai=(function(e){return e===0?this.bA:I().bU(e)}),x.aG=(function(){return new cm(this)}),x.o=(function(){return z().cC(this,-889275714,!1)}),x.t=(function(){return F().h4(this)}),x.j=(function(e){return this===e||e instanceof Q&&P().I(this.bA,e.bA)}),new w().i(Q,`scala.Some`,{aM:1,aL:1,b:1,T:1,d:1,a:1});function zm(){}x=zm.prototype=new S,x.constructor=zm;function Bm(){}Bm.prototype=x,x.bj=(function(){return this.bm()}),x.ag=(function(e){rc(this,e)}),x.bH=(function(e,t,n,r){return ac(this,e,t,n,r)}),x.D=(function(){return-1});function Vm(e,t){return e.M=t,e.i=0,e.F=Ns().bk(e.M),e}function Hm(){this.M=null,this.i=0,this.F=0}x=Hm.prototype=new Of,x.constructor=Hm;function Um(){}Um.prototype=x,x.D=(function(){return this.F-this.i|0}),x.w=(function(){return this.i<this.F}),x.k=(function(){this.i>=Ns().bk(this.M)&&K().z.k();var e=F().bi(this.M,this.i);return this.i=1+this.i|0,e}),x.cw=(function(e){if(e>0){var t=this.i+e|0;if(t<0)var n=this.F;else var r=this.F,n=r<t?r:t;this.i=n}return this}),new w().i(Hm,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Wm(e,t){return t<0?0:t>e.Z?e.Z:t}function Gm(e){this.fF=null,this.ar=0,this.Z=0,this.fF=e,this.ar=0,this.Z=e.l()}x=Gm.prototype=new Of,x.constructor=Gm;function Km(){}Km.prototype=x,x.D=(function(){return this.Z}),x.w=(function(){return this.Z>0}),x.k=(function(){if(this.Z>0){var e=this.fF.q(this.ar);return this.ar=1+this.ar|0,this.Z=-1+this.Z|0,e}else return K().z.k()}),x.cw=(function(e){if(e>0){this.ar=this.ar+e|0;var t=this.Z-e|0;this.Z=t<0?0:t}return this}),x.bY=(function(e,t){var n=Wm(this,e),r=Wm(this,t)-n|0;return this.Z=r<0?0:r,this.ar=this.ar+n|0,this}),new w().i(Gm,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dY:1,r:1,s:1,b:1,c:1,a:1});function qm(e){return e.de||=(e.df=new Ng(new C(0)),!0),e.df}function Jm(e){return e.de?e.df:qm(e)}function Ym(){this.df=null,this.gZ=null,this.de=!1,Zm=this,this.gZ=new Lp(this)}x=Ym.prototype=new S,x.constructor=Ym;function Xm(){}Xm.prototype=x,x.hW=(function(e,t){return e instanceof hg?e:this.gG(Yl().gm(e,t))}),x.gG=(function(e){if(e===null)return null;if(e instanceof C)return new Ng(e);if(e instanceof Lr)return new kg(e);if(e instanceof Br)return new Tg(e);if(e instanceof Rr)return new jg(e);if(e instanceof zr)return new Dg(e);if(e instanceof Pr)return new Cg(e);if(e instanceof Fr)return new xg(e);if(e instanceof Ir)return new Fg(e);if(e instanceof Nr)return new yg(e);if(Ds(e,1))return new Lg(e);throw new Mp(e)}),x.dn=(function(e,t){return this.hW(e,t)}),new w().i(Ym,`scala.collection.immutable.ArraySeq$`,{ed:1,aS:1,aO:1,aN:1,aP:1,a:1});var Zm;function Qm(){return Zm||=new Ym,Zm}function $m(){this.h0=null,this.fJ=null,th=this,this.h0=new Lp(this),this.fJ=new r_(new C(0))}x=$m.prototype=new S,x.constructor=$m;function eh(){}eh.prototype=x,x.hX=(function(e,t){return this.io(Yl().gm(e,t))}),x.io=(function(e){if(e===null)return null;if(e instanceof C)return new r_(e);if(e instanceof Lr)return new $g(e);if(e instanceof Br)return new Yg(e);if(e instanceof Rr)return new t_(e);if(e instanceof zr)return new Zg(e);if(e instanceof Pr)return new qg(e);if(e instanceof Fr)return new Gg(e);if(e instanceof Ir)return new a_(e);if(e instanceof Nr)return new Ug(e);if(Ds(e,1))return new s_(e);throw new Mp(e)}),x.dn=(function(e,t){return this.hX(e,t)}),new w().i($m,`scala.collection.mutable.ArraySeq$`,{eh:1,aS:1,aO:1,aN:1,aP:1,a:1});var th;function nh(){return th||=new $m,th}function rh(e){this.cf=null,this.cg=null,this.eu=null,this.ev=!1,sf(this,e,m_())}x=rh.prototype=new lf,x.constructor=rh;function ih(){}ih.prototype=x,x.gI=(function(){return this.ev||=(this.eu=Kc(this),!0),this.eu}),new w().i(rh,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{c6:1,aa:1,K:1,a7:1,a8:1,aq:1,ar:1});function ah(){}x=ah.prototype=new fp,x.constructor=ah;function oh(){}oh.prototype=x;function sh(e){this.M=null,this.i=0,this.F=0,this.d5=null,this.d5=e,Vm(this,e)}x=sh.prototype=new Um,x.constructor=sh;function ch(){}ch.prototype=x,x.iy=(function(){this.i>=this.d5.a.length&&K().z.k();var e=this.d5.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iy()}),new w().i(sh,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dL:1,N:1,r:1,s:1,b:1,c:1,a:1});function lh(e){this.M=null,this.i=0,this.F=0,this.d6=null,this.d6=e,Vm(this,e)}x=lh.prototype=new Um,x.constructor=lh;function uh(){}uh.prototype=x,x.iz=(function(){this.i>=this.d6.a.length&&K().z.k();var e=this.d6.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return Or(this.iz())}),new w().i(lh,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dM:1,N:1,r:1,s:1,b:1,c:1,a:1});function dh(e){this.M=null,this.i=0,this.F=0,this.d7=null,this.d7=e,Vm(this,e)}x=dh.prototype=new Um,x.constructor=dh;function fh(){}fh.prototype=x,x.iA=(function(){this.i>=this.d7.a.length&&K().z.k();var e=this.d7.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iA()}),new w().i(dh,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dN:1,N:1,r:1,s:1,b:1,c:1,a:1});function ph(e){this.M=null,this.i=0,this.F=0,this.d8=null,this.d8=e,Vm(this,e)}x=ph.prototype=new Um,x.constructor=ph;function mh(){}mh.prototype=x,x.iB=(function(){this.i>=this.d8.a.length&&K().z.k();var e=this.d8.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iB()}),new w().i(ph,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dO:1,N:1,r:1,s:1,b:1,c:1,a:1});function hh(e){this.M=null,this.i=0,this.F=0,this.d9=null,this.d9=e,Vm(this,e)}x=hh.prototype=new Um,x.constructor=hh;function gh(){}gh.prototype=x,x.iC=(function(){this.i>=this.d9.a.length&&K().z.k();var e=this.d9.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iC()}),new w().i(hh,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dP:1,N:1,r:1,s:1,b:1,c:1,a:1});function _h(e){this.M=null,this.i=0,this.F=0,this.da=null,this.da=e,Vm(this,e)}x=_h.prototype=new Um,x.constructor=_h;function vh(){}vh.prototype=x,x.iD=(function(){this.i>=this.da.a.length&&K().z.k();var e=this.da.a[this.i],t=e.e,n=e.f;return this.i=1+this.i|0,new M(t,n)}),x.k=(function(){return this.iD()}),new w().i(_h,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dQ:1,N:1,r:1,s:1,b:1,c:1,a:1});function yh(e){this.M=null,this.i=0,this.F=0,this.db=null,this.db=e,Vm(this,e)}x=yh.prototype=new Um,x.constructor=yh;function bh(){}bh.prototype=x,x.iE=(function(){this.i>=this.db.a.length&&K().z.k();var e=this.db.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iE()}),new w().i(yh,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dR:1,N:1,r:1,s:1,b:1,c:1,a:1});function xh(e){this.M=null,this.i=0,this.F=0,this.fE=null,this.fE=e,Vm(this,e)}x=xh.prototype=new Um,x.constructor=xh;function Sh(){}Sh.prototype=x,x.iF=(function(){this.i>=this.fE.a.length&&K().z.k(),this.i=1+this.i|0}),x.k=(function(){this.iF()}),new w().i(xh,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dS:1,N:1,r:1,s:1,b:1,c:1,a:1});function Ch(e){this.M=null,this.i=0,this.F=0,this.dc=null,this.dc=e,Vm(this,e)}x=Ch.prototype=new Um,x.constructor=Ch;function wh(){}wh.prototype=x,x.iG=(function(){this.i>=this.dc.a.length&&K().z.k();var e=this.dc.a[this.i];return this.i=1+this.i|0,e}),x.k=(function(){return this.iG()}),new w().i(Ch,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dT:1,N:1,r:1,s:1,b:1,c:1,a:1});function Th(e){return e.bj()+`(<not computed>)`}function Eh(){}x=Eh.prototype=new S,x.constructor=Eh;function Dh(){}Dh.prototype=x;var $=class e extends bf{constructor(e){super(),this.a0=null,this.a0=e,R(this,null,null,!0,!0)}bT(){return hr(this.a0)}aj(){return`JavaScriptException`}ah(){return 1}ai(e){return e===0?this.a0:I().bU(e)}aG(){return new cm(this)}o(){return z().cC(this,-889275714,!1)}j(t){return this===t||t instanceof e&&P().I(this.a0,t.a0)}};new w().i($,`scala.scalajs.js.JavaScriptException`,{bm:1,S:1,L:1,t:1,a:1,T:1,d:1});function Oh(e,t,n){e.bt=!1;for(var r=e.br,i=0;i<(r.length|0);){var a=r[i];i=1+i|0;try{a.aX(t)}catch(e){var o=e instanceof Vl?e:new $(e);B().am(new mm(o))}}for(var s=e.bs,c=0;c<(s.length|0);){var l=s[c];c=1+c|0,l.gu(t,n)}e.bt=!0;var u=e.c2;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].a4(),d=1+d|0;u.length=0}}function kh(e){this.cf=null,this.cg=null,this.es=null,this.et=!1,sf(this,e,m_())}x=kh.prototype=new lf,x.constructor=kh;function Ah(){}Ah.prototype=x,x.gI=(function(){return this.et||=(this.es=Kc(this),!0),this.es}),new w().i(kh,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{c5:1,aa:1,K:1,a7:1,a8:1,c7:1,aq:1,ar:1});function jh(e,t){typeof console<`u`&&(e.ft&&console.error?console.error(t):console.log(t))}function Mh(e){this.ft=!1,this.bx=null,this.ft=e,new bp,this.bx=``}x=Mh.prototype=new oh,x.constructor=Mh;function Nh(){}Nh.prototype=x,x.ij=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bx=``+this.bx+t,t=``;else{var r=this.bx,i=t;jh(this,``+r+i.substring(0,n)),this.bx=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new w().i(Mh,`java.lang.JSConsoleBasedPrintStream`,{d9:1,cZ:1,cY:1,aB:1,az:1,aD:1,aA:1,aC:1});function Ph(e,t,n){for(;;)if(t<=0||n.h())return n;else{var r=-1+t|0,i=n.Q();t=r,n=i}}function Fh(){this.dg=null}x=Fh.prototype=new Dh,x.constructor=Fh;function Ih(){}Ih.prototype=x,x.t=(function(){return this.dg}),x.j=(function(e){return this===e}),x.o=(function(){return Cr(this)});function Lh(){}x=Lh.prototype=new Bm,x.constructor=Lh;function Rh(){}Rh.prototype=x,x.t=(function(){return Th(this)});function zh(){this.dg=null,this.dg=`Any`}x=zh.prototype=new Ih,x.constructor=zh;function Bh(){}Bh.prototype=x,x.j3=(function(){return Vr.l()}),x.iw=(function(e){return new C(e)}),new w().i(zh,`scala.reflect.ManifestFactory$AnyManifest$`,{ev:1,ex:1,ew:1,eu:1,et:1,es:1,ey:1,a:1,d:1});var Vh;function Hh(){return Vh||=new zh,Vh}function Uh(e,t){return e===t?!0:Wh(t)&&t.g8(e)?e.dy(t):!1}function Wh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Gh(e){this.dL=null,this.bt=!1,this.c2=null,this.br=null,this.bs=null,this.c4=!1,this.dM=null,this.c3=null,this.dM=e,this.dL=void 0,Eu(this),Vf(this),this.c3=T().B(F().b(new(_m.r()).C([])))}x=Gh.prototype=new S,x.constructor=Gh;function Kh(){}Kh.prototype=x,x.cA=(function(){return this.dL}),x.t=(function(){return qr(this)}),x.j=(function(e){return this===e}),x.o=(function(){return Cr(this)}),x.gF=(function(){return this}),x.gu=(function(e,t){new ni(new X((t=>{Oh(this,e,t)})))}),x.iN=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)qf(e[t]),t=1+t|0}),x.iL=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)Wf(e[t],this,!1),t=1+t|0}),x.iM=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)ku(e[t],this),t=1+t|0}),x.cv=(function(){return this.dM.a4()+`.events`}),new w().i(Gh,`com.raquo.airstream.eventbus.EventBusStream`,{bA:1,a4:1,V:1,ak:1,an:1,a5:1,al:1,bw:1,bx:1,am:1,bn:1});function qh(){}x=qh.prototype=new Bm,x.constructor=qh;function Jh(){}Jh.prototype=x,x.g8=(function(e){return!0}),x.j=(function(e){return Uh(this,e)}),x.o=(function(){return z().j4(this)}),x.t=(function(){return zp(this)}),x.gq=(function(e){return Mf(this,e)}),x.h=(function(){return Nf(this)}),x.dy=(function(e){return Pf(this,e)}),x.dr=(function(e){return this.gq(e|0)});function Yh(){}x=Yh.prototype=new Rh,x.constructor=Yh;function Xh(){}Xh.prototype=x;function Zh(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Qh(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function $h(e,t){return e.bD=t,e}function eg(){this.bD=null}x=eg.prototype=new Xh,x.constructor=eg;function tg(){}tg.prototype=x,x.q=(function(e){return this.bD.q(e)}),x.l=(function(){return this.bD.l()}),x.h=(function(){return this.bD.h()});function ng(){this.eh=null,this.ek=!1,this.e5=null,this.e6=!1,this.e3=null,this.e4=!1,this.ep=null,this.eq=!1,this.e9=null,this.ea=!1,this.ed=null,this.ee=!1,this.eb=null,this.ec=!1,this.ef=null,this.eg=!1,this.e1=null,this.e2=!1,this.e7=null,this.e8=!1,this.ei=null,this.ej=!1,this.gN=null,this.el=null,this.em=!1,this.cM=null,this.gL=null,this.gM=null,this.en=null,this.eo=!1,_a(this),fa(this),ua(this),da(this)}x=ng.prototype=new S,x.constructor=ng;function rg(){}rg.prototype=x,x.iR=(function(){return this.ek||=(this.eh=_l(new vl,`p`,!1),!0),this.eh}),x.X=(function(){return this.e6||=(this.e5=_l(new vl,`div`,!1),!0),this.e5}),x.ho=(function(){return this.e4||=(this.e3=new el(`checked`,D().er),!0),this.e3}),x.gH=(function(){return this.eq||=(this.ep=new el(`value`,D().Y),!0),this.ep}),x.ia=(function(){return this.ea||=(this.e9=new el(`id`,D().Y),!0),this.e9}),x.bV=(function(){return this.ee||=(this.ed=new Yc(`click`),!0),this.ed}),x.iI=(function(){return this.ec||=(this.eb=new Yc(`change`),!0),this.eb}),x.dv=(function(){return this.eg||=(this.ef=new Yc(`input`),!0),this.ef}),x.hm=(function(){return this.e2||=(this.e1=sf(new cf,`border`,m_()),!0),this.e1}),x.i9=(function(){return this.e8||=(this.e7=new kh(`height`),!0),this.e7}),x.iS=(function(){return this.ej||=(this.ei=new rh(`padding`),!0),this.ei}),x.je=(function(){return this.em||=(this.el=Qc(new L,`style`,D().Y),!0),this.el}),x.jg=(function(){return this.eo||=(this.en=new tf(this),!0),this.en}),new w().i(ng,`com.raquo.laminar.api.package$$anon$1`,{bU:1,c8:1,bY:1,c3:1,c2:1,c4:1,c0:1,bS:1,bO:1,bR:1,ap:1,as:1,ao:1,bP:1});function ig(e){this.bD=null,$h(this,e)}x=ig.prototype=new tg,x.constructor=ig;function ag(){}ag.prototype=x,x.n=(function(){return new Gm(this)}),x.bm=(function(){return`IndexedSeqView`}),x.aE=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),new w().i(ig,`scala.collection.IndexedSeqView$Id`,{dX:1,e7:1,dI:1,dJ:1,h:1,i:1,b:1,k:1,c:1,j:1,eb:1,a:1,e6:1,l:1,dW:1,o:1});function og(){}x=og.prototype=new Jh,x.constructor=og;function sg(){}sg.prototype=x;function cg(e,t){return!ug(t)||e.l()===t.l()}function lg(e,t){if(ug(t)){if(e===t)return!0;var n=e.l(),r=n===t.l();if(r){var i=0,a=e.fX(),o=t.fX(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().I(e.q(i),t.q(i)),i=1+i|0;if(i<n&&r)for(var p=e.n().cw(i),m=t.n().cw(i);r&&p.w();)r=P().I(p.k(),m.k())}return r}else return Pf(e,t)}function ug(e){return!!(e&&e.$classData&&e.$classData.n.w)}function dg(){}x=dg.prototype=new Jh,x.constructor=dg;function fg(){}fg.prototype=x;function pg(){}x=pg.prototype=new fg,x.constructor=pg;function mg(){}mg.prototype=x,x.fU=(function(e){return ou(this,e)});function hg(){}x=hg.prototype=new sg,x.constructor=hg;function gg(){}gg.prototype=x,x.g8=(function(e){return cg(this,e)}),x.dy=(function(e){return lg(this,e)}),x.bm=(function(){return`IndexedSeq`}),x.aE=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),x.iq=(function(e){for(var t=new C(this.l()),n=0;n<t.a.length;)t.a[n]=e.g(this.q(n)),n=1+n|0;return Qm().gG(t)}),x.bj=(function(){return`ArraySeq`}),x.fX=(function(){return 2147483647}),x.gr=(function(e){return this.iq(e)});function _g(){}x=_g.prototype=new fg,x.constructor=_g;function vg(){}vg.prototype=x,x.bm=(function(){return`IndexedSeq`}),x.aE=(function(e){var t=this.l();return t===e?0:t<e?-1:1}),x.D=(function(){return this.l()}),x.bj=(function(){return`ArraySeq`}),x.j=(function(e){return e instanceof _g&&Ns().bk(this.a5())!==Ns().bk(e.a5())?!1:Uh(this,e)});function yg(e){this.aN=null,this.aN=e}x=yg.prototype=new gg,x.constructor=yg;function bg(){}bg.prototype=x,x.l=(function(){return this.aN.a.length}),x.o=(function(){var e=z();return e.g7(this.aN,e.x)}),x.j=(function(e){return e instanceof yg?j().gk(this.aN,e.aN):Uh(this,e)}),x.n=(function(){return new Ch(this.aN)}),x.bQ=(function(e){return this.aN.a[e]}),x.g=(function(e){return this.bQ(e|0)}),x.q=(function(e){return this.bQ(e)}),new w().i(yg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aV:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function xg(e){this.aO=null,this.aO=e}x=xg.prototype=new gg,x.constructor=xg;function Sg(){}Sg.prototype=x,x.l=(function(){return this.aO.a.length}),x.bI=(function(e){return this.aO.a[e]}),x.o=(function(){var e=z();return e.fZ(this.aO,e.x)}),x.j=(function(e){return e instanceof xg?j().gd(this.aO,e.aO):Uh(this,e)}),x.n=(function(){return new sh(this.aO)}),x.g=(function(e){return this.bI(e|0)}),x.q=(function(e){return this.bI(e)}),new w().i(xg,`scala.collection.immutable.ArraySeq$ofByte`,{aW:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Cg(e){this.au=null,this.au=e}x=Cg.prototype=new gg,x.constructor=Cg;function wg(){}wg.prototype=x,x.l=(function(){return this.au.a.length}),x.bJ=(function(e){return this.au.a[e]}),x.o=(function(){var e=z();return e.g0(this.au,e.x)}),x.j=(function(e){return e instanceof Cg?j().ge(this.au,e.au):Uh(this,e)}),x.n=(function(){return new lh(this.au)}),x.bH=(function(e,t,n,r){return new qg(this.au).bH(e,t,n,r)}),x.g=(function(e){return Or(this.bJ(e|0))}),x.q=(function(e){return Or(this.bJ(e))}),new w().i(Cg,`scala.collection.immutable.ArraySeq$ofChar`,{aX:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Tg(e){this.aP=null,this.aP=e}x=Tg.prototype=new gg,x.constructor=Tg;function Eg(){}Eg.prototype=x,x.l=(function(){return this.aP.a.length}),x.o=(function(){var e=z();return e.g1(this.aP,e.x)}),x.j=(function(e){return e instanceof Tg?j().gf(this.aP,e.aP):Uh(this,e)}),x.n=(function(){return new dh(this.aP)}),x.bL=(function(e){return this.aP.a[e]}),x.g=(function(e){return this.bL(e|0)}),x.q=(function(e){return this.bL(e)}),new w().i(Tg,`scala.collection.immutable.ArraySeq$ofDouble`,{aY:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Dg(e){this.aQ=null,this.aQ=e}x=Dg.prototype=new gg,x.constructor=Dg;function Og(){}Og.prototype=x,x.l=(function(){return this.aQ.a.length}),x.o=(function(){var e=z();return e.g2(this.aQ,e.x)}),x.j=(function(e){return e instanceof Dg?j().gg(this.aQ,e.aQ):Uh(this,e)}),x.n=(function(){return new ph(this.aQ)}),x.bM=(function(e){return this.aQ.a[e]}),x.g=(function(e){return this.bM(e|0)}),x.q=(function(e){return this.bM(e)}),new w().i(Dg,`scala.collection.immutable.ArraySeq$ofFloat`,{aZ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function kg(e){this.aR=null,this.aR=e}x=kg.prototype=new gg,x.constructor=kg;function Ag(){}Ag.prototype=x,x.l=(function(){return this.aR.a.length}),x.o=(function(){var e=z();return e.g3(this.aR,e.x)}),x.j=(function(e){return e instanceof kg?j().gh(this.aR,e.aR):Uh(this,e)}),x.n=(function(){return new hh(this.aR)}),x.bN=(function(e){return this.aR.a[e]}),x.g=(function(e){return this.bN(e|0)}),x.q=(function(e){return this.bN(e)}),new w().i(kg,`scala.collection.immutable.ArraySeq$ofInt`,{b0:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function jg(e){this.aS=null,this.aS=e}x=jg.prototype=new gg,x.constructor=jg;function Mg(){}Mg.prototype=x,x.l=(function(){return this.aS.a.length}),x.o=(function(){var e=z();return e.g4(this.aS,e.x)}),x.j=(function(e){return e instanceof jg?j().gi(this.aS,e.aS):Uh(this,e)}),x.n=(function(){return new _h(this.aS)}),x.bO=(function(e){return this.aS.a[e]}),x.g=(function(e){return this.bO(e|0)}),x.q=(function(e){return this.bO(e)}),new w().i(jg,`scala.collection.immutable.ArraySeq$ofLong`,{b1:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Ng(e){this.aT=null,this.aT=e}x=Ng.prototype=new gg,x.constructor=Ng;function Pg(){}Pg.prototype=x,x.l=(function(){return this.aT.a.length}),x.q=(function(e){return this.aT.a[e]}),x.o=(function(){var e=z();return e.fY(this.aT,e.x)}),x.j=(function(e){return e instanceof Ng?Yl().gl(this.aT,e.aT):Uh(this,e)}),x.n=(function(){return Vm(new Hm,this.aT)}),x.g=(function(e){return this.q(e|0)}),new w().i(Ng,`scala.collection.immutable.ArraySeq$ofRef`,{b2:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Fg(e){this.aU=null,this.aU=e}x=Fg.prototype=new gg,x.constructor=Fg;function Ig(){}Ig.prototype=x,x.l=(function(){return this.aU.a.length}),x.bK=(function(e){return this.aU.a[e]}),x.o=(function(){var e=z();return e.g5(this.aU,e.x)}),x.j=(function(e){return e instanceof Fg?j().gj(this.aU,e.aU):Uh(this,e)}),x.n=(function(){return new yh(this.aU)}),x.g=(function(e){return this.bK(e|0)}),x.q=(function(e){return this.bK(e)}),new w().i(Fg,`scala.collection.immutable.ArraySeq$ofShort`,{b3:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Lg(e){this.bh=null,this.bh=e}x=Lg.prototype=new gg,x.constructor=Lg;function Rg(){}Rg.prototype=x,x.l=(function(){return this.bh.a.length}),x.o=(function(){var e=z();return e.g6(this.bh,e.x)}),x.j=(function(e){return e instanceof Lg?this.bh.a.length===e.bh.a.length:Uh(this,e)}),x.n=(function(){return new xh(this.bh)}),x.bP=(function(e){}),x.g=(function(e){this.bP(e|0)}),x.q=(function(e){this.bP(e)}),new w().i(Lg,`scala.collection.immutable.ArraySeq$ofUnit`,{b4:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function zg(e,t,n,r){for(;;)if(t===r)return n.h()?0:1;else if(n.h())return-1;else{var i=1+t|0,a=n.Q();t=i,n=a}}function Bg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.h(),i=n.h();if(!(r||i)&&P().I(t.a7(),n.a7())){var a=t.Q(),o=n.Q();t=a,n=o}else return r&&i}}function Vg(){}x=Vg.prototype=new sg,x.constructor=Vg;function Hg(){}Hg.prototype=x,x.n=(function(){return new nm(this)}),x.bm=(function(){return`LinearSeq`}),x.gq=(function(e){return Qp(this,e)}),x.q=(function(e){return $p(this,e)}),x.dy=(function(e){return em(this,e)}),x.h=(function(){return this===m_()}),x.ir=(function(e){if(this===m_())return m_();for(var t=new l_(e.g(this.a7()),m_()),n=t,r=this.Q();r!==m_();){var i=new l_(e.g(r.a7()),m_());n.cq=i,n=i,r=r.Q()}return t}),x.ag=(function(e){for(var t=this;!t.h();)e.g(t.a7()),t=t.Q()}),x.l=(function(){for(var e=this,t=0;!e.h();)t=1+t|0,e=e.Q();return t}),x.aE=(function(e){return e<0?1:zg(this,0,this,e)}),x.bj=(function(){return`List`}),x.j=(function(e){return e instanceof Vg?Bg(this,this,e):Uh(this,e)}),x.g=(function(e){return $p(this,e|0)}),x.dr=(function(e){return Qp(this,e|0)}),x.hC=(function(e){return Ph(this,e,this)}),x.gr=(function(e){return this.ir(e)});function Ug(e){this.av=null,this.av=e}x=Ug.prototype=new vg,x.constructor=Ug;function Wg(){}Wg.prototype=x,x.l=(function(){return this.av.a.length}),x.o=(function(){var e=z();return e.g7(this.av,e.x)}),x.j=(function(e){return e instanceof Ug?j().gk(this.av,e.av):_g.prototype.j.call(this,e)}),x.n=(function(){return new Ch(this.av)}),x.bQ=(function(e){return this.av.a[e]}),x.g=(function(e){return this.bQ(e|0)}),x.q=(function(e){return this.bQ(e)}),x.a5=(function(){return this.av}),new w().i(Ug,`scala.collection.mutable.ArraySeq$ofBoolean`,{b7:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Gg(e){this.aw=null,this.aw=e}x=Gg.prototype=new vg,x.constructor=Gg;function Kg(){}Kg.prototype=x,x.l=(function(){return this.aw.a.length}),x.bI=(function(e){return this.aw.a[e]}),x.o=(function(){var e=z();return e.fZ(this.aw,e.x)}),x.j=(function(e){return e instanceof Gg?j().gd(this.aw,e.aw):_g.prototype.j.call(this,e)}),x.n=(function(){return new sh(this.aw)}),x.g=(function(e){return this.bI(e|0)}),x.q=(function(e){return this.bI(e)}),x.a5=(function(){return this.aw}),new w().i(Gg,`scala.collection.mutable.ArraySeq$ofByte`,{b8:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function qg(e){this.W=null,this.W=e}x=qg.prototype=new vg,x.constructor=qg;function Jg(){}Jg.prototype=x,x.l=(function(){return this.W.a.length}),x.bJ=(function(e){return this.W.a[e]}),x.o=(function(){var e=z();return e.g0(this.W,e.x)}),x.j=(function(e){return e instanceof qg?j().ge(this.W,e.W):_g.prototype.j.call(this,e)}),x.n=(function(){return new lh(this.W)}),x.bH=(function(e,t,n,r){var i=e.O;t.length!==0&&(i.u=``+i.u+t);var a=this.W.a.length;if(a!==0)if(n===``)i.hb(this.W);else{i.l();var o=this.W.a[0],s=``+yr(o);i.u+=s;for(var c=1;c<a;){i.u=``+i.u+n;var l=this.W.a[c],u=``+yr(l);i.u+=u,c=1+c|0}}return r.length!==0&&(i.u=``+i.u+r),e}),x.g=(function(e){return Or(this.bJ(e|0))}),x.q=(function(e){return Or(this.bJ(e))}),x.a5=(function(){return this.W}),new w().i(qg,`scala.collection.mutable.ArraySeq$ofChar`,{b9:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Yg(e){this.ax=null,this.ax=e}x=Yg.prototype=new vg,x.constructor=Yg;function Xg(){}Xg.prototype=x,x.l=(function(){return this.ax.a.length}),x.o=(function(){var e=z();return e.g1(this.ax,e.x)}),x.j=(function(e){return e instanceof Yg?j().gf(this.ax,e.ax):_g.prototype.j.call(this,e)}),x.n=(function(){return new dh(this.ax)}),x.bL=(function(e){return this.ax.a[e]}),x.g=(function(e){return this.bL(e|0)}),x.q=(function(e){return this.bL(e)}),x.a5=(function(){return this.ax}),new w().i(Yg,`scala.collection.mutable.ArraySeq$ofDouble`,{ba:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Zg(e){this.ay=null,this.ay=e}x=Zg.prototype=new vg,x.constructor=Zg;function Qg(){}Qg.prototype=x,x.l=(function(){return this.ay.a.length}),x.o=(function(){var e=z();return e.g2(this.ay,e.x)}),x.j=(function(e){return e instanceof Zg?j().gg(this.ay,e.ay):_g.prototype.j.call(this,e)}),x.n=(function(){return new ph(this.ay)}),x.bM=(function(e){return this.ay.a[e]}),x.g=(function(e){return this.bM(e|0)}),x.q=(function(e){return this.bM(e)}),x.a5=(function(){return this.ay}),new w().i(Zg,`scala.collection.mutable.ArraySeq$ofFloat`,{bb:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $g(e){this.az=null,this.az=e}x=$g.prototype=new vg,x.constructor=$g;function e_(){}e_.prototype=x,x.l=(function(){return this.az.a.length}),x.o=(function(){var e=z();return e.g3(this.az,e.x)}),x.j=(function(e){return e instanceof $g?j().gh(this.az,e.az):_g.prototype.j.call(this,e)}),x.n=(function(){return new hh(this.az)}),x.bN=(function(e){return this.az.a[e]}),x.g=(function(e){return this.bN(e|0)}),x.q=(function(e){return this.bN(e)}),x.a5=(function(){return this.az}),new w().i($g,`scala.collection.mutable.ArraySeq$ofInt`,{bc:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function t_(e){this.aA=null,this.aA=e}x=t_.prototype=new vg,x.constructor=t_;function n_(){}n_.prototype=x,x.l=(function(){return this.aA.a.length}),x.o=(function(){var e=z();return e.g4(this.aA,e.x)}),x.j=(function(e){return e instanceof t_?j().gi(this.aA,e.aA):_g.prototype.j.call(this,e)}),x.n=(function(){return new _h(this.aA)}),x.bO=(function(e){return this.aA.a[e]}),x.g=(function(e){return this.bO(e|0)}),x.q=(function(e){return this.bO(e)}),x.a5=(function(){return this.aA}),new w().i(t_,`scala.collection.mutable.ArraySeq$ofLong`,{bd:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function r_(e){this.aB=null,this.aB=e}x=r_.prototype=new vg,x.constructor=r_;function i_(){}i_.prototype=x,x.l=(function(){return this.aB.a.length}),x.q=(function(e){return this.aB.a[e]}),x.o=(function(){var e=z();return e.fY(this.aB,e.x)}),x.j=(function(e){return e instanceof r_?Yl().gl(this.aB,e.aB):_g.prototype.j.call(this,e)}),x.n=(function(){return Vm(new Hm,this.aB)}),x.g=(function(e){return this.q(e|0)}),x.a5=(function(){return this.aB}),new w().i(r_,`scala.collection.mutable.ArraySeq$ofRef`,{be:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function a_(e){this.aC=null,this.aC=e}x=a_.prototype=new vg,x.constructor=a_;function o_(){}o_.prototype=x,x.l=(function(){return this.aC.a.length}),x.bK=(function(e){return this.aC.a[e]}),x.o=(function(){var e=z();return e.g5(this.aC,e.x)}),x.j=(function(e){return e instanceof a_?j().gj(this.aC,e.aC):_g.prototype.j.call(this,e)}),x.n=(function(){return new yh(this.aC)}),x.g=(function(e){return this.bK(e|0)}),x.q=(function(e){return this.bK(e)}),x.a5=(function(){return this.aC}),new w().i(a_,`scala.collection.mutable.ArraySeq$ofShort`,{bf:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function s_(e){this.aV=null,this.aV=e}x=s_.prototype=new vg,x.constructor=s_;function c_(){}c_.prototype=x,x.l=(function(){return this.aV.a.length}),x.o=(function(){var e=z();return e.g6(this.aV,e.x)}),x.j=(function(e){return e instanceof s_?this.aV.a.length===e.aV.a.length:_g.prototype.j.call(this,e)}),x.n=(function(){return new xh(this.aV)}),x.bP=(function(e){}),x.g=(function(e){this.bP(e|0)}),x.q=(function(e){this.bP(e)}),x.a5=(function(){return this.aV}),new w().i(s_,`scala.collection.mutable.ArraySeq$ofUnit`,{bg:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function l_(e,t){this.dd=null,this.cq=null,this.dd=e,this.cq=t}x=l_.prototype=new Hg,x.constructor=l_;function u_(){}u_.prototype=x,x.a7=(function(){return this.dd}),x.aj=(function(){return`::`}),x.ah=(function(){return 2}),x.ai=(function(e){switch(e){case 0:return this.dd;case 1:return this.cq;default:return I().bU(e)}}),x.aG=(function(){return new cm(this)}),x.Q=(function(){return this.cq}),new w().i(l_,`scala.collection.immutable.$colon$colon`,{ec:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a1:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});function d_(){}x=d_.prototype=new Hg,x.constructor=d_;function f_(){}f_.prototype=x,x.i6=(function(){throw new Tp(`head of empty list`)}),x.jj=(function(){throw new wp(`tail of empty list`)}),x.D=(function(){return 0}),x.n=(function(){return K().z}),x.aj=(function(){return`Nil`}),x.ah=(function(){return 0}),x.ai=(function(e){return I().bU(e)}),x.aG=(function(){return new cm(this)}),x.Q=(function(){this.jj()}),x.a7=(function(){this.i6()}),new w().i(d_,`scala.collection.immutable.Nil$`,{ef:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a1:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});var p_;function m_(){return p_||=new d_,p_}function h_(e,t){return e.O=t,e}function g_(e){return h_(e,new xf),e}function __(){this.O=null}x=__.prototype=new fg,x.constructor=__;function v_(){}v_.prototype=x,x.bm=(function(){return`IndexedSeq`}),x.n=(function(){return new Gm(new ig(this))}),x.aE=(function(e){var t=this.O.l();return t===e?0:t<e?-1:1}),x.fU=(function(e){return ou(this,e)}),x.l=(function(){return this.O.l()}),x.D=(function(){return this.O.l()}),x.h6=(function(e){var t=this.O,n=``+yr(e);return t.u+=n,this}),x.t=(function(){return this.O.u}),x.h=(function(){return this.O.l()===0}),x.gB=(function(){return this.O.u}),x.dk=(function(e){return this.h6(kr(e))}),x.g=(function(e){var t=e|0;return Or(this.O.g9(t))}),x.q=(function(e){return Or(this.O.g9(e))}),new w().i(__,`scala.collection.mutable.StringBuilder`,{en:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,el:1,bh:1,bj:1,bi:1,D:1,n:1,o:1,E:1,ad:1,a:1});function y_(e,t){return e.aW=t,e}function b_(e){return y_(e,[]),e}function x_(){this.aW=null}x=x_.prototype=new mg,x.constructor=x_;function S_(){}S_.prototype=x,x.bm=(function(){return`IndexedSeq`}),x.n=(function(){return new Gm(new ig(this))}),x.aE=(function(e){var t=this.aW.length|0;return t===e?0:t<e?-1:1}),x.q=(function(e){return this.aW[e]}),x.l=(function(){return this.aW.length|0}),x.D=(function(){return this.aW.length|0}),x.bj=(function(){return`WrappedArray`}),x.gB=(function(){return this}),x.dk=(function(e){return this.aW.push(e),this}),x.g=(function(e){var t=e|0;return this.aW[t]}),new w().i(x_,`scala.scalajs.js.WrappedArray`,{eO:1,eg:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ei:1,bj:1,bi:1,em:1,q:1,p:1,D:1,n:1,o:1,E:1,ek:1,bh:1,a:1}),lr=new M(0,0),Wr.z=lr,wo(new(Nm.r()).C([]));