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
var bt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),_=class extends yt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[bt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};_.formAssociated=!0,s([g({reflect:!0})],_.prototype,`name`,2),s([g({type:Boolean})],_.prototype,`disabled`,2),s([g({state:!0,attribute:!1})],_.prototype,`valueHasChanged`,2),s([g({state:!0,attribute:!1})],_.prototype,`hasInteracted`,2),s([g({attribute:`custom-error`,reflect:!0})],_.prototype,`customError`,2),s([g({attribute:!1,state:!0,type:Object})],_.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt={small:`s`,medium:`m`,large:`l`},St=new Set;function Ct(e,t){t in xt&&!St.has(`${e}:${t}`)&&(St.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${xt[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Tt=re`
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
`,Et=re`
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
`,Dt=re`
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
function Ot(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const kt=new Set,At=new Map;let jt,Mt=`ltr`,Nt=`en`;const Pt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Pt){let e=new MutationObserver(It);Mt=document.documentElement.dir||`ltr`,Nt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Ft(...e){e.map(e=>{let t=e.$code.toLowerCase();At.has(t)?At.set(t,Object.assign(Object.assign({},At.get(t)),e)):At.set(t,e),jt||=e}),It()}function It(){Pt&&(Mt=document.documentElement.dir||`ltr`,Nt=document.documentElement.lang||navigator.language),[...kt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var Lt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){kt.add(this.host)}hostDisconnected(){kt.delete(this.host)}dir(){return`${this.host.dir||Mt}`.toLowerCase()}lang(){let e=`${this.host.lang||Nt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return jt?jt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=At.get(`${n}-${r}`),a=At.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&jt&&jt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(jt&&jt[e])i=jt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Rt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Ft(Rt);var zt=Rt,Bt=class extends Lt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Ft(zt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Vt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ht=e=>(...t)=>({_$litDirective$:e,values:t});var Ut=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Wt=Ht(class extends Ut{constructor(e){if(super(e),e.type!==Vt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return He}}),Gt=e=>e??h,Kt=Symbol.for(``),qt=e=>{if(e?.r===Kt)return e?._$litStatic$},Jt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Kt}),Yt=new Map,Xt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=qt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Yt.get(e))===void 0&&(o.raw=o,Yt.set(e,t=o)),n=s}return e(t,...n)})(Ve);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var v=class extends _{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new wt(this,`[default]`,`start`,`end`),this.localize=new Bt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){Ct(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Jt`a`:Jt`button`;return Xt`
      <${t}
        part="base button"
        class=${Wt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${Gt(e?void 0:this.disabled)}
        type=${Gt(e?void 0:this.type)}
        title=${this.title}
        name=${Gt(e?void 0:this.name)}
        value=${Gt(e?void 0:this.value)}
        href=${Gt(e?this.href:void 0)}
        target=${Gt(e?this.target:void 0)}
        download=${Gt(e?this.download:void 0)}
        rel=${Gt(e&&this.rel?this.rel:void 0)}
        role=${Gt(e?void 0:`button`)}
        aria-disabled=${Gt(e&&this.disabled?`true`:void 0)}
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
    `}};v.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0},v.css=[Et,Dt,Tt],s([pt(`.button`)],v.prototype,`button`,2),s([pt(`slot:not([name])`)],v.prototype,`labelSlot`,2),s([dt()],v.prototype,`invalid`,2),s([dt()],v.prototype,`isIconButton`,2),s([g()],v.prototype,`title`,2),s([g({reflect:!0})],v.prototype,`variant`,2),s([g({reflect:!0})],v.prototype,`appearance`,2),s([g({reflect:!0})],v.prototype,`size`,2),s([Ot(`size`)],v.prototype,`handleSizeChange`,1),s([g({attribute:`with-caret`,type:Boolean,reflect:!0})],v.prototype,`withCaret`,2),s([g({attribute:`with-start`,type:Boolean})],v.prototype,`withStart`,2),s([g({attribute:`with-end`,type:Boolean})],v.prototype,`withEnd`,2),s([g({type:Boolean})],v.prototype,`disabled`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`loading`,2),s([g({type:Boolean,reflect:!0})],v.prototype,`pill`,2),s([g()],v.prototype,`type`,2),s([g({reflect:!0})],v.prototype,`name`,2),s([g({reflect:!0})],v.prototype,`value`,2),s([g({reflect:!0})],v.prototype,`href`,2),s([g()],v.prototype,`target`,2),s([g()],v.prototype,`rel`,2),s([g()],v.prototype,`download`,2),s([g({attribute:`formaction`})],v.prototype,`formAction`,2),s([g({attribute:`formenctype`})],v.prototype,`formEnctype`,2),s([g({attribute:`formmethod`})],v.prototype,`formMethod`,2),s([g({attribute:`formnovalidate`,type:Boolean})],v.prototype,`formNoValidate`,2),s([g({attribute:`formtarget`})],v.prototype,`formTarget`,2),s([Ot(`disabled`,{waitUntilFirstUpdate:!0})],v.prototype,`handleDisabledChange`,1),s([Ot(`href`)],v.prototype,`handleHrefChange`,1),s([Ot(`loading`,{waitUntilFirstUpdate:!0})],v.prototype,`handleLoadingChange`,1),v=s([ct(`wa-button`)],v),v.disableWarning?.(`change-in-update`);
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
`,Qt=class extends yt{constructor(){super(...arguments),this.localize=new Bt(this)}render(){return Ve`
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
*/const{I:Sn}=nt,Cn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var wn=Symbol(),Tn=Symbol(),En,Dn=new Map,y=class extends yt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ve`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?wn:Tn}catch{return Tn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return wn;En||=new DOMParser;let r=En.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):wn}catch{return wn}}}connectedCallback(){super.connectedCallback(),vn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yn(this)}async getIconSource(){let e=bn(this.library),t=this.family||xn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?bn(this.library):void 0;if(!e){this.svg=null;return}let r=Dn.get(e);r||(r=this.resolveIcon(e,n),Dn.set(e,r));let i=await r;if(i===Tn&&Dn.delete(e),e===(await this.getIconSource()).url){if(Cn(i)){this.svg=i;return}switch(i){case Tn:case wn:this.svg=null,this.dispatchEvent(new $t);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new en)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=bn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ve`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};y.css=tn,s([dt()],y.prototype,`svg`,2),s([g({reflect:!0})],y.prototype,`name`,2),s([g({reflect:!0})],y.prototype,`family`,2),s([g({reflect:!0})],y.prototype,`variant`,2),s([g({reflect:!0})],y.prototype,`canvas`,2),s([g({attribute:`auto-width`,type:Boolean,reflect:!0})],y.prototype,`autoWidth`,2),s([g({attribute:`swap-opacity`,type:Boolean,reflect:!0})],y.prototype,`swapOpacity`,2),s([g()],y.prototype,`src`,2),s([g()],y.prototype,`label`,2),s([g({reflect:!0})],y.prototype,`library`,2),s([g({type:Number,reflect:!0})],y.prototype,`rotate`,2),s([g({type:String,reflect:!0})],y.prototype,`flip`,2),s([g({type:String,reflect:!0})],y.prototype,`animation`,2),s([Ot(`label`)],y.prototype,`handleLabelChange`,1),s([Ot([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],y.prototype,`setIcon`,1),y=s([ct(`wa-icon`)],y);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=t({default:()=>v}),kn=re`
  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .label {
    padding: 0;
  }

  .radio-group-required .label::after {
    content: var(--wa-form-control-required-content);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  [part~='form-control-input'] {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 0; /* Radios handle their own spacing */
  }

  /* Horizontal */
  :host([orientation='horizontal']) [part~='form-control-input'] {
    flex-direction: row;
  }

  /* Help text */
  [part~='hint'] {
    margin-block-start: 0.5em;
  }
`,An=(e={})=>{let{validationElement:t,validationProperty:n}=e;t||typeof document<`u`&&`createElement`in document&&(t=Object.assign(document.createElement(`input`),{required:!0})),n||=`value`;let r={observedAttributes:[`required`],message:t?.validationMessage,checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute(`required`))&&(e[n]||(t.message=typeof r.message==`function`?r.message(e):r.message||``,t.isValid=!1,t.invalidKeys.push(`valueMissing`))),t}};return r},jn=re`
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
`;let Mn=(e=21)=>{let t=``,n=crypto.getRandomValues(new Uint8Array(e|=0));for(;e--;)t+=`useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict`[n[e]&63];return t};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Nn(e=``){return`${e}${Mn()}`}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var b=class extends _{constructor(){super(),this.hasSlotController=new wt(this,`hint`,`label`),this.label=``,this.hint=``,this.name=null,this.disabled=!1,this.orientation=`vertical`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.required=!1,this.withLabel=!1,this.withHint=!1,this.handleRadioClick=e=>{let t=e.target.closest(`wa-radio`);if(!t||t.disabled||t.forceDisabled||this.disabled)return;let n=this.value;this.value=t.value,t.checked=!0;let r=this.getAllRadios();for(let e of r)t!==e&&(e.checked=!1,e.setAttribute(`tabindex`,`-1`));this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})},this.addEventListener(`keydown`,this.handleKeyDown),this.addEventListener(`click`,this.handleRadioClick)}static get validators(){let e=[An({validationElement:Object.assign(document.createElement(`input`),{required:!0,type:`radio`,name:Nn(`__wa-radio`)})})];return[...super.validators,...e]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){typeof e==`number`&&(e=String(e)),this.valueHasChanged=!0,this._value=e}handleSizeChange(){Ct(this.localName,this.size)}get validationTarget(){let e=this.querySelector(`:is(wa-radio):not([disabled])`);if(e)return e}updated(e){(e.has(`disabled`)||e.has(`size`)||e.has(`value`)||e.has(`defaultValue`))&&this.syncRadioElements()}formResetCallback(...e){this._value=null,super.formResetCallback(...e),this.syncRadioElements()}getAllRadios(){return[...this.querySelectorAll(`wa-radio`)]}handleLabelClick(){this.focus()}async syncRadioElements(){let e=this.getAllRadios();if(e.forEach((t,n)=>{this.size&&t.setAttribute(`size`,this.size),t.toggleAttribute(`data-wa-radio-horizontal`,this.orientation!==`vertical`),t.toggleAttribute(`data-wa-radio-vertical`,this.orientation===`vertical`),t.toggleAttribute(`data-wa-radio-first`,n===0),t.toggleAttribute(`data-wa-radio-inner`,n!==0&&n!==e.length-1),t.toggleAttribute(`data-wa-radio-last`,n===e.length-1),t.forceDisabled=this.disabled}),await Promise.all(e.map(async e=>{await e.updateComplete,!e.disabled&&e.value===this.value?e.checked=!0:e.checked=!1})),this.disabled)e.forEach(e=>{e.tabIndex=-1});else{let t=e.filter(e=>!e.disabled),n=t.find(e=>e.checked);t.length>0&&(n?t.forEach(e=>{e.tabIndex=e.checked?0:-1}):t.forEach((e,t)=>{e.tabIndex=t===0?0:-1})),e.filter(e=>e.disabled).forEach(e=>{e.tabIndex=-1})}}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key)||this.disabled)return;let t=this.getAllRadios().filter(e=>!e.disabled);if(t.length<=0)return;e.preventDefault();let n=this.value,r=t.find(e=>e.checked)??t[0],i=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,a=t.indexOf(r)+i;a||=0,a<0&&(a=t.length-1),a>t.length-1&&(a=0);let o=t.some(e=>e.tagName.toLowerCase()===`wa-radio-button`);this.getAllRadios().forEach(e=>{e.checked=!1,o||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,o?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==n&&this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))}),e.preventDefault()}focus(e){if(this.disabled)return;let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t;return Ve`
      <fieldset
        part="form-control"
        class=${Wt({"form-control":!0,"form-control-radio-group":!0,"form-control-has-label":n})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="hint"
        aria-errormessage="error-message"
        aria-orientation=${this.orientation}
      >
        <label
          part="form-control-label"
          id="label"
          class=${Wt({label:!0,"has-label":n})}
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <slot part="form-control-input" @slotchange=${this.syncRadioElements}></slot>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Wt({"has-slotted":r})}
          aria-hidden=${r?`false`:`true`}
          >${this.hint}</slot
        >
      </fieldset>
    `}};b.css=[Tt,jn,kn],b.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0},s([pt(`slot:not([name])`)],b.prototype,`defaultSlot`,2),s([g()],b.prototype,`label`,2),s([g({attribute:`hint`})],b.prototype,`hint`,2),s([g({reflect:!0})],b.prototype,`name`,2),s([g({type:Boolean,reflect:!0})],b.prototype,`disabled`,2),s([g({reflect:!0})],b.prototype,`orientation`,2),s([dt()],b.prototype,`value`,1),s([g({attribute:`value`,reflect:!0})],b.prototype,`defaultValue`,2),s([g({reflect:!0})],b.prototype,`size`,2),s([Ot(`size`)],b.prototype,`handleSizeChange`,1),s([g({type:Boolean,reflect:!0})],b.prototype,`required`,2),s([g({type:Boolean,attribute:`with-label`})],b.prototype,`withLabel`,2),s([g({type:Boolean,attribute:`with-hint`})],b.prototype,`withHint`,2),b=s([ct(`wa-radio-group`)],b),b.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Pn=re`
  :host {
    --checked-icon-color: var(--wa-form-control-activated-color);
    --checked-icon-scale: 0.7;

    color: var(--wa-form-control-value-color);
    display: inline-flex;
    flex-direction: row;
    align-items: top;
    font-family: inherit;
    font-weight: var(--wa-form-control-value-font-weight);
    line-height: var(--wa-form-control-value-line-height);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  :host(:not(:state(checked))) svg circle {
    opacity: 0;
  }

  [part~='label'] {
    display: inline;
  }

  [part~='hint'] {
    margin-block-start: 0.5em;
  }

  /* Default spacing for default appearance radios */
  :host([appearance='default']) {
    margin-block: 0.375em; /* Half of the original 0.75em gap on each side */
  }

  :host([appearance='default'][data-wa-radio-horizontal]) {
    margin-block: 0;
    margin-inline: 0.5em; /* Half of the original 1em gap on each side */
  }

  /* Remove margin from first/last items to prevent extra space */
  :host([appearance='default'][data-wa-radio-first]) {
    margin-block-start: 0;
    margin-inline-start: 0;
  }

  :host([appearance='default'][data-wa-radio-last]) {
    margin-block-end: 0;
    margin-inline-end: 0;
  }

  /* Button appearance have no spacing, they get handled by the overlap margins below */
  :host([appearance='button']) {
    margin: 0;
    align-items: center;
    min-height: var(--wa-form-control-height);
    background-color: var(--wa-color-surface-default);
    border: var(--wa-form-control-border-width) var(--wa-form-control-border-style) var(--wa-form-control-border-color);
    border-radius: var(--wa-border-radius-m);
    padding: 0 var(--wa-form-control-padding-inline);
    transition:
      background-color var(--wa-transition-fast),
      border-color var(--wa-transition-fast);
  }

  /* Default appearance */
  :host([appearance='default']) {
    .control {
      flex: 0 0 auto;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      border-color: var(--wa-form-control-border-color);
      border-radius: 50%;
      border-style: var(--wa-form-control-border-style);
      border-width: var(--wa-form-control-border-width);
      background-color: var(--wa-form-control-background-color);
      color: transparent;
      transition:
        background var(--wa-transition-normal),
        border-color var(--wa-transition-fast),
        box-shadow var(--wa-transition-fast),
        color var(--wa-transition-fast);
      transition-timing-function: var(--wa-transition-easing);

      margin-inline-end: 0.5em;
    }

    .checked-icon {
      display: flex;
      fill: currentColor;
      width: var(--wa-form-control-toggle-size);
      height: var(--wa-form-control-toggle-size);
      scale: var(--checked-icon-scale);
    }
  }

  /* Button appearance */
  :host([appearance='button']) {
    .control {
      display: none;
    }
  }

  /* Checked */
  :host(:state(checked)) .control {
    color: var(--checked-icon-color);
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-form-control-background-color);
  }

  /* Focus */
  :host(:focus-visible) .control {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Disabled */
  :host(:state(disabled)) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Horizontal grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-first]) {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-horizontal][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* Vertical grouping - remove inner border radius */
  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-inner]) {
    border-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-first]) {
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  :host([appearance='button'][data-wa-radio-vertical][data-wa-radio-last]) {
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }

  @media (hover: hover) {
    :host([appearance='button']:hover:not(:state(disabled), :state(checked))) {
      background-color: color-mix(in srgb, var(--wa-color-surface-default) 95%, var(--wa-color-mix-hover));
    }
  }

  :host([appearance='button']:focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  :host([appearance='button']:state(checked)) {
    border-color: var(--wa-form-control-activated-color);
    background-color: var(--wa-color-brand-fill-quiet);
  }

  :host([appearance='button']:state(checked):focus-visible) {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Button overlap margins */
  :host([appearance='button'][data-wa-radio-horizontal]:not([data-wa-radio-first])) {
    margin-inline-start: calc(-1 * var(--wa-form-control-border-width));
  }

  :host([appearance='button'][data-wa-radio-vertical]:not([data-wa-radio-first])) {
    margin-block-start: calc(-1 * var(--wa-form-control-border-width));
  }

  /* Ensure interactive states are visible above adjacent buttons */
  :host([appearance='button']:hover),
  :host([appearance='button']:state(checked)) {
    position: relative;
    z-index: 1;
  }

  :host([appearance='button']:focus-visible) {
    z-index: 2;
  }
`,Fn=class extends _{constructor(){super(),this.checked=!1,this.forceDisabled=!1,this.appearance=`default`,this.disabled=!1,this.handleClick=()=>{!this.disabled&&!this.forceDisabled&&(this.checked=!0)},this.addEventListener(`click`,this.handleClick)}handleSizeChange(){Ct(this.localName,this.size)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.tabIndex=0,this.setAttribute(`aria-disabled`,this.disabled||this.forceDisabled?`true`:`false`)}updated(e){if(super.updated(e),e.has(`checked`)&&(this.customStates.set(`checked`,this.checked),this.setAttribute(`aria-checked`,this.checked?`true`:`false`),!this.disabled&&!this.forceDisabled&&(this.tabIndex=this.checked?0:-1)),e.has(`disabled`)||e.has(`forceDisabled`)){let e=this.disabled||this.forceDisabled;this.customStates.set(`disabled`,e),this.setAttribute(`aria-disabled`,e?`true`:`false`),e?this.tabIndex=-1:this.tabIndex=this.checked?0:-1}}setValue(){}render(){return Ve`
      <span part="control" class="control">
        ${this.checked?Ve`
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" part="checked-icon" class="checked-icon">
                <circle cx="8" cy="8" r="8" />
              </svg>
            `:``}
      </span>

      <slot part="label" class="label"></slot>
    `}};Fn.css=[jn,Tt,Pn],s([dt()],Fn.prototype,`checked`,2),s([dt()],Fn.prototype,`forceDisabled`,2),s([g({reflect:!0})],Fn.prototype,`value`,2),s([g({reflect:!0})],Fn.prototype,`appearance`,2),s([g({reflect:!0})],Fn.prototype,`size`,2),s([Ot(`size`)],Fn.prototype,`handleSizeChange`,1),s([g({type:Boolean})],Fn.prototype,`disabled`,2),Fn=s([ct(`wa-radio`)],Fn),Fn.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var In=t({default:()=>b}),Ln=t({default:()=>Fn}),x;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Rn;function zn(e){this.c=e}x=zn.prototype,x.toString=(function(){return String.fromCharCode(this.c)});function Bn(e){switch(typeof e){case`string`:return Yf.l();case`number`:return tr(e)?e<<24>>24===e?Md.l():e<<16>>16===e?zd.l():Uf.l():nr(e)?Hf.l():Vf.l();case`boolean`:return Xu.l();case`undefined`:return Ao.l();default:return e instanceof j?Kf.l():e instanceof zn?$u.l():e&&e.$classData?e.$classData.l():null}}function Vn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return tr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:nr(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof j?`java.lang.Long`:e instanceof zn?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.j6()}}function Hn(e,t){switch(typeof e){case`string`:return Jf(e,t);case`number`:return zf(e,t);case`boolean`:return Ju(e,t);case`undefined`:return Do(e,t);default:return e&&e.$classData||e===null?e.k(t):e instanceof j?Wf(e,t):e instanceof zn?Qu(ir(e),t):or.prototype.k.call(e,t)}}function Un(e){switch(typeof e){case`string`:return qf(e);case`number`:return Bf(e);case`boolean`:return Yu(e);case`undefined`:return Oo(e);default:return e&&e.$classData||e===null?e.r():e instanceof j?Gf(e):e instanceof zn?Zu(ir(e)):or.prototype.r.call(e)}}function Wn(e){return e===void 0?`undefined`:e.toString()}function Gn(e,t){if(t===0)throw new jd(`/ by zero`);return e/t|0}function Kn(e,t){if(t===0)throw new jd(`/ by zero`);return e%t|0}function qn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Jn(e){return String.fromCharCode(e)}function Yn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Xn=0,Zn=new WeakMap;function Qn(e){switch(typeof e){case`string`:return qf(e);case`number`:return Bf(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:qf(n);default:if(e===null)return 0;var r=Zn.get(e);return r===void 0&&(r=Xn+1|0,Xn=r,Zn.set(e,r)),r}}function $n(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function er(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function tr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function nr(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function rr(e){return new zn(e)}rr(0);function ir(e){return e===null?0:e.c}function ar(e){return e===null?Rn:e}function or(){}x=or.prototype,x.constructor=or;function S(){}S.prototype=x,x.r=(function(){return Qn(this)}),x.k=(function(e){return this===e}),x.x=(function(){var e=this.r();return Vn(this)+`@`+(+(e>>>0)).toString(16)}),x.toString=(function(){return this.x()});function C(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}x=C.prototype=new S,x.constructor=C,x.a8=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),x.Z=(function(){return new C(this.a.slice())});function sr(){}sr.prototype=x;function cr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}x=cr.prototype=new S,x.constructor=cr,x.a8=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),x.Z=(function(){return new cr(this.a.slice())});function lr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}x=lr.prototype=new S,x.constructor=lr,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new lr(this.a.slice())});function ur(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}x=ur.prototype=new S,x.constructor=ur,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new ur(this.a.slice())});function dr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}x=dr.prototype=new S,x.constructor=dr,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new dr(this.a.slice())});function fr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}x=fr.prototype=new S,x.constructor=fr,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new fr(this.a.slice())});function pr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Rn}else this.a=e}x=pr.prototype=new S,x.constructor=pr,x.a8=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),x.Z=(function(){return new pr(this.a.slice())});function mr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}x=mr.prototype=new S,x.constructor=mr,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new mr(this.a.slice())});function hr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}x=hr.prototype=new S,x.constructor=hr,x.a8=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),x.Z=(function(){return new hr(this.a.slice())});function w(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}x=w.prototype,x.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new w().y(this,r,i)),this}),x.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),x.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={v:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),x.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new sr;n.constructor=t,n.a8=(function(e,t,n,r){Yn(this.a,e,t.a,n,r)}),n.Z=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={v:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===gr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),x.r=(function(){return this.A||=new w().a(this),this.A}),x.l=(function(){return this.L||=new $l(this),this.L}),x.R=(function(e){return this===e||this.F(e)}),x.S=(function(){return this.P?this.P.l():null}),x.Q=(function(){return this.O?this.O.l():null});var gr=new w;gr.n={},gr.E=`Ljava.lang.Object;`,gr.F=(e=>!e.X),gr.N=`java.lang.Object`,gr.I=(e=>e!==null),gr.A=new w().y(gr,C,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),or.prototype.$classData=gr;var _r=new w().p(void 0,`V`,`void`,void 0,void 0);new w().p(!1,`Z`,`boolean`,cr,void 0);var vr=new w().p(0,`C`,`char`,lr,Uint16Array);new w().p(0,`B`,`byte`,ur,Int8Array),new w().p(0,`S`,`short`,dr,Int16Array),new w().p(0,`I`,`int`,fr,Int32Array);var yr=new w().p(null,`J`,`long`,pr,void 0);new w().p(0,`F`,`float`,mr,Float32Array),new w().p(0,`D`,`double`,hr,Float64Array);function br(e){return Bn(e).d1()+`@`+Qn(e)}function xr(e){var t=e.dd;return t===void 0?br(e):t}function Sr(){wr=this,Tr().gd(new J((e=>void 0)),Qo().cC,!0)}x=Sr.prototype=new S,x.constructor=Sr;function Cr(){}Cr.prototype=x,x.gd=(function(e,t,n){return new Pu(e,n,t,this)}),new w().i(Sr,`com.raquo.airstream.core.Observer$`,{bf:1});var wr;function Tr(){return wr||=new Sr,wr}function Er(e){this.ce=null,this.df=null,this.cf=0,this.ce=e,this.df=void 0;var t=Kr().bF();this.cf=t===void 0?1:1+t.cf|0,Mr().bL===-1||this.cf>Mr().bL?ll().b5(new jf(this,Mr().bL)):Lr().R?Lr().ax.push(this)|0:Kr().cS(this)}x=Er.prototype=new S,x.constructor=Er;function Dr(){}Dr.prototype=x;var Or=new w().i(Er,`com.raquo.airstream.core.Transaction`,{bi:1});function kr(){this.bL=0,this.dg=null,jr=this,this.bL=1e3,this.dg=new J((e=>{throw U(new W,`Attempted to run Transaction `+e+` after it was already executed.`)}))}x=kr.prototype=new S,x.constructor=kr;function Ar(){}Ar.prototype=x,x.fI=(function(e){try{e.ce.h(e);var t=e.df;if(t!==void 0)for(;t.ja();)t.j0().je(e)}catch(e){var n=e instanceof Ec?e:new Z(e);ll().b5(n)}}),new w().i(kr,`com.raquo.airstream.core.Transaction$`,{bj:1});var jr;function Mr(){return jr||=new kr,jr}function Nr(e){e.bM.length|0?new Er(new J((t=>{for(;(e.bM.length|0)>0;){var n=e.bM.shift();try{n.h(t)}catch(e){var r=e instanceof Ec?e:new Z(e);ll().b5(r)}}for(;(e.ax.length|0)>0;){var i=e.ax.shift();Kr().cS(i)}}))):(e.ax.length|0)>0&&new Er(new J((t=>{for(;(e.ax.length|0)>0;)Kr().cS(e.ax.shift())})))}function Pr(){this.R=!1,this.bM=null,this.ax=null,Ir=this,this.R=!1,this.bM=_i().a6(F().b(new(N.r()).C([]))),this.ax=_i().a6(F().b(new(Or.r()).C([])))}x=Pr.prototype=new S,x.constructor=Pr;function Fr(){}Fr.prototype=x,new w().i(Pr,`com.raquo.airstream.core.Transaction$onStart$`,{bk:1});var Ir;function Lr(){return Ir||=new Pr,Ir}function Rr(e,t){return e.ay.get(t)}function zr(e,t){e.bN.unshift(t)}function Br(e){return e.bN.shift()}function Vr(e,t,n){var r=Rr(e,t),i=r===void 0,a=r===void 0?_i().a6(F().b(new(Or.r()).C([]))):r;a.push(n),i&&e.ay.set(t,a)}function Hr(e,t){var n=Rr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.ay.delete(t),i}}function Ur(){this.bN=null,this.ay=null,Gr=this,this.bN=_i().a6(F().b(new(Or.r()).C([]))),this.ay=new Map}x=Ur.prototype=new S,x.constructor=Ur;function Wr(){}Wr.prototype=x,x.cS=(function(e){var t=this.bF();t===void 0?(zr(this,e),Mr().fI(e),this.h3(e)):Vr(this,t,e)}),x.h3=(function(e){for(var t=e;;){var n=this.bF(),r=t;if(!(n!==void 0&&P().L(r,n)))throw U(new W,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.i5(t),t.ce=Mr().dg;var i=this.bF();if(P().L(i,void 0))if((this.ay.size|0)>0){var a=new el(0);throw this.ay.forEach((e=>((t,n)=>{e.bp=e.bp+(t.length|0)|0}))(a)),U(new W,`Transaction queue error: Stack cleared, but a total of `+a.bp+` children for `+(this.ay.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Mr().fI(i),t=i}}),x.i5=(function(e){for(var t=e;;){var n=Hr(this,t);if(P().L(n,void 0)){Br(this);var r=this.bF();if(!P().L(r,void 0))t=r;else return}else{zr(this,n);return}}}),x.bF=(function(){return this.bN[0]}),new w().i(Ur,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bl:1});var Gr;function Kr(){return Gr||=new Ur,Gr}function qr(e,t){var n=e.a9.indexOf(t)|0;if(n!==-1)e.a9.splice(n,1),e.H.i()||t.g2();else throw U(new W,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Jr(e){for(;(e.bO.length|0)>0;)qr(e,e.bO.shift())}function Yr(e){this.dh=null,this.a9=null,this.aO=!1,this.bO=null,this.H=null,this.aP=0,this.dh=e,this.a9=_i().a6(F().b(new($r.r()).C([]))),this.aO=!0,this.bO=_i().a6(F().b(new($r.r()).C([]))),this.H=Y(),this.aP=0}x=Yr.prototype=new S,x.constructor=Yr;function Xr(){}Xr.prototype=x,x.fr=(function(){if(this.H.i()){var e=Lr(),t=(()=>{var e=new Ms(this.dh);this.H=new X(e),this.aO=!1,this.aP=0;for(var t=0,n=this.a9.length|0;t<n;){var r=t+this.aP|0;this.a9[r].g1(e),t=1+t|0}Jr(this),this.aO=!0,this.aP=0});if(Lr(),e.R)t();else{e.R=!0;try{t()}finally{e.R=!1,Nr(e)}}}else throw U(new W,`Can not activate `+this+`: it is already active`)}),x.gY=(function(){if(this.H.i())throw U(new W,`Can not deactivate DynamicOwner: it is not active`);this.aO=!1;for(var e=this.a9,t=0,n=e.length|0;t<n;)e[t].g2(),t=1+t|0;Jr(this);var r=this.H;r.i()||r.A().hE(),Jr(this),this.aO=!0,this.H=Y()}),x.gE=(function(e,t){t?(this.aP=1+this.aP|0,this.a9.unshift(e)):this.a9.push(e);var n=this.H;if(!n.i()){var r=n.A();e.g1(r)}}),x.ib=(function(e){this.aO?qr(this,e):this.bO.push(e)}),new w().i(Yr,`com.raquo.airstream.ownership.DynamicOwner`,{bm:1});function Zr(e,t,n){this.bP=null,this.di=null,this.bQ=null,this.bP=e,this.di=t,this.bQ=Y(),e.gE(this,n)}x=Zr.prototype=new S,x.constructor=Zr;function Qr(){}Qr.prototype=x,x.c9=(function(){this.bP.ib(this)}),x.g1=(function(e){var t=Lr(),n=(()=>{this.bQ=this.di.h(e)});if(Lr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Nr(t)}}}),x.g2=(function(){var e=this.bQ;e.i()||(e.A().c9(),this.bQ=Y())});var $r=new w().i(Zr,`com.raquo.airstream.ownership.DynamicSubscription`,{bn:1});function ei(){}x=ei.prototype=new S,x.constructor=ei;function ti(){}ti.prototype=x,x.d9=(function(e,t,n){return new Zr(e,new J((e=>new X(t.h(e)))),n)}),x.gb=(function(e,t,n){return new Zr(e,new J((e=>(t.h(e),Y()))),n)}),new w().i(ei,`com.raquo.airstream.ownership.DynamicSubscription$`,{bo:1});var ni;function ri(){return ni||=new ei,ni}function ii(e){e.aQ=_i().a6(F().b(new(di.r()).C([])))}function ai(e){for(var t=e.aQ,n=0,r=t.length|0;n<r;)ci(t[n]),n=1+n|0;e.aQ.length=0}function oi(e,t){var n=e.aQ.indexOf(t)|0;if(n!==-1)e.aQ.splice(n,1);else throw U(new W,`Can not remove Subscription from Owner: subscription not found.`)}function si(e,t){e.aQ.push(t)}function ci(e){if(!e.ch)e.dk.aL(),e.ch=!0;else throw U(new W,`Can not kill Subscription: it was already killed.`)}function li(e,t){this.dl=null,this.dk=null,this.ch=!1,this.dl=e,this.dk=t,this.ch=!1,e.i3(this)}x=li.prototype=new S,x.constructor=li;function ui(){}ui.prototype=x,x.c9=(function(){ci(this),oi(this.dl,this)});var di=new w().i(li,`com.raquo.airstream.ownership.Subscription`,{br:1});function fi(e,t){this.dm=null,this.dn=null,this.aa=null,this.az=!1,this.dm=e,this.dn=t,this.aa=Y(),this.az=!1}x=fi.prototype=new S,x.constructor=fi;function pi(){}pi.prototype=x,x.hB=(function(){var e=this.aa;return!e.i()&&!e.A().bP.H.i()}),x.ik=(function(e){if(this.az)throw U(new W,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.aa;if(t.i())var n=!1;else var n=e===t.A().bP;if(!n){this.hB()&&!e.H.i()&&(this.az=!0);var r=this.aa;r.i()||(r.A().c9(),this.aa=Y()),this.aa=new X(ri().d9(e,new J((e=>(this.az||this.dm.aL(),new li(e,new pd((()=>{this.az||this.dn.aL()})))))),!1)),this.az=!1}}),x.gT=(function(){if(this.az)throw U(new W,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.aa;e.i()||e.A().c9(),this.aa=Y()}),new w().i(fi,`com.raquo.airstream.ownership.TransferableSubscription`,{bs:1});function mi(){}x=mi.prototype=new S,x.constructor=mi;function hi(){}hi.prototype=x,x.a6=(function(e){return[...Ts().ix(e)]}),new w().i(mi,`com.raquo.ew.JsArray$`,{bt:1});var gi;function _i(){return gi||=new mi,gi}function vi(){}x=vi.prototype=new S,x.constructor=vi;function yi(){}yi.prototype=x,x.hk=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new w().i(vi,`com.raquo.ew.JsArray$RichJsArray$`,{bu:1});var bi;function xi(){return bi||=new vi,bi}function Si(){this.dp=null,wi=this,document.createElement(`template`),this.gW(q().g.is().it()),this.dp=RegExp(` `,`g`)}x=Si.prototype=new S,x.constructor=Si;function Ci(){}Ci.prototype=x,x.gI=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Ec?e:new Z(e);if(n instanceof Z&&n.T instanceof DOMException)return!1;throw n instanceof Z?n.T:n}}),x.hC=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(P().L(t,r))return!0;n=r}}),x.gC=(function(e,t){e.addEventListener(t.aR.ba.bS,t.cp,t.cq)}),x.i9=(function(e,t){e.removeEventListener(t.aR.ba.bS,t.cp,t.cq)}),x.gV=(function(e){return document.createElement(e.d3())}),x.hr=(function(e,t){var n=this.hs(e,t);return n===void 0?void 0:t.ac.c3(n)}),x.hs=(function(e,t){var n=e.M.getAttributeNS(null,t.Y);return n===null?void 0:n}),x.g8=(function(e,t,n){this.ih(e,t,t.ac.bB(n))}),x.ih=(function(e,t,n){n===null?this.ia(e,t):e.M.setAttribute(t.Y,n)}),x.ia=(function(e,t){e.M.removeAttribute(t.Y)}),x.ii=(function(e,t,n){this.ij(e,t,t.e6.bB(n))}),x.ij=(function(e,t,n){e.M[t.e7]=n}),x.g9=(function(e,t,n){var r=e.M,i=t.ad,a=t.ae,o=n===null?null:n;o===null?(a.a0(new J((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a0(new J((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),x.gW=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.ek)}),x.hv=(function(e,t){var n=this.hw(e,t);return n===void 0?void 0:t.cn.c3(n)}),x.hw=(function(e,t){var n=e.d6(),r=t.bU,i=n.getAttributeNS(r.i()?null:r.A(),t.co);return i===null?void 0:i}),x.il=(function(e,t,n){this.im(e,t,t.cn.bB(n))}),x.im=(function(e,t,n){if(n===null)this.ic(e,t);else{var r=t.bU;if(r.i())e.d6().setAttribute(t.bT,n);else{var i=r.A();e.d6().setAttributeNS(i,t.bT,n)}}}),x.ic=(function(e,t){var n=e.d6(),r=t.bU;n.removeAttributeNS(r.i()?null:r.A(),t.co)}),x.gX=(function(e){return document.createTextNode(e)}),x.h0=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new wh(this.gZ(r),n);r=i,n=a}}),x.gZ=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dp,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new w().i(Si,`com.raquo.laminar.DomApi$`,{bv:1});var wi;function T(){return wi||=new Si,wi}function Ti(e,t,n){this.cj=null,this.dq=null,this.ci=null,this.cj=e,this.dq=t,this.ci=n}x=Ti.prototype=new S,x.constructor=Ti;function Ei(){}Ei.prototype=x,x.a0=(function(e){this.cj===null?this.ci===null?ns().hl(this.dq,e):xi().hk(this.ci,Tu().hp(e)):this.cj.a0(e)}),new w().i(Ti,`com.raquo.laminar.Seq`,{bw:1});function Di(){}x=Di.prototype=new S,x.constructor=Di;function Oi(){}Oi.prototype=x,new w().i(Di,`com.raquo.laminar.Seq$`,{bx:1});var ki;function Ai(){return ki||=new Di,ki}function ji(e){e.dt=Tr(),ll()}function Mi(e){e.gg=sa()}function Ni(e){Pi(e,new J((e=>{e.e9.M.focus()})))}function Pi(e,t){return new Zs(new J((e=>{var n=new Qc(!e.a4.H.i()),r=new J((e=>{n.c1?n.c1=!1:t.h(e)}));ri().gb(e.a4,new J((e=>(t=>{r.h(new na(e,t))}))(e)),!1)})),sa())}function Fi(){this.ab=null,this.bR=null,Li=this,this.ab=new Is(E()),new Is(E()),new Is(E()),this.bR=new Ps}x=Fi.prototype=new S,x.constructor=Fi;function Ii(){}Ii.prototype=x,new w().i(Fi,`com.raquo.laminar.codecs.package$`,{bF:1});var Li;function E(){return Li||=new Fi,Li}function Ri(e){e.gh=zi(e,`class`,` `)}function zi(e,t,n){var r=L(new Us,t,E().ab);return new zs(r.Y,new J((e=>{var t=T().hr(e,r);return t===void 0?``:t})),new gd(((e,t)=>{T().g8(e,r,t)})),n)}function Bi(e){e.gf=Vi(e,`class`,` `)}function Vi(e,t,n){var r=new qs(t,E().ab,Y());return new zs(r.bT,new J((e=>{var t=T().hv(e,r);return t===void 0?``:t})),new gd(((e,t)=>{T().il(e,r,t)})),n)}function Hi(e,t){this.e5=null,this.e4=null,this.e5=e,this.e4=t}x=Hi.prototype=new S,x.constructor=Hi;function Ui(){}Ui.prototype=x,x.d=(function(e){return new ml(this.e5,this.e4.h(e),new vd(((e,t,n)=>{T().g9(e,t,n)})))}),new w().i(Hi,`com.raquo.laminar.keys.DerivedStyleProp`,{c4:1});function Wi(e,t,n,r){this.ba=null,this.cm=!1,this.cl=!1,this.ck=null,this.ba=e,this.cm=t,this.cl=n,this.ck=r}x=Wi.prototype=new S,x.constructor=Wi;function Gi(){}Gi.prototype=x,x.i4=(function(){var e=new J((e=>{var t=this.ck.h(e);if(t.i())return Y();var n=t.A();return e.preventDefault(),new X(n)}));return new Wi(this.ba,this.cm,this.cl,e)}),new w().i(Wi,`com.raquo.laminar.keys.EventProcessor`,{c5:1});function Ki(){}x=Ki.prototype=new S,x.constructor=Ki;function qi(){}qi.prototype=x,x.h5=(function(e,t,n){return new Wi(e,t,n,new J((e=>new X(e))))}),new w().i(Ki,`com.raquo.laminar.keys.EventProcessor$`,{c6:1});var Ji;function Yi(){return Ji||=new Ki,Ji}function Xi(){}x=Xi.prototype=new S,x.constructor=Xi;function Zi(){}Zi.prototype=x;function Qi(){this.gi=null,this.gj=null,this.gk=null,this.gl=null,this.gi=`http://www.w3.org/2000/svg`,this.gj=`http://www.w3.org/1999/xlink`,this.gk=`http://www.w3.org/XML/1998/namespace`,this.gl=`http://www.w3.org/2000/xmlns/`}x=Qi.prototype=new S,x.constructor=Qi;function $i(){}$i.prototype=x,x.hL=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Kd(e)}}),new w().i(Qi,`com.raquo.laminar.keys.SvgAttr$`,{ca:1});var ea;function ta(){return ea||=new Qi,ea}function na(e,t){this.e9=null,this.e8=null,this.e9=e,this.e8=t}x=na.prototype=new S,x.constructor=na;function ra(){}ra.prototype=x,new w().i(na,`com.raquo.laminar.lifecycle.MountContext`,{cb:1});var D=new w().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function ia(){this.gm=null,oa=this,this.gm=new Ys}x=ia.prototype=new S,x.constructor=ia;function aa(){}aa.prototype=x,new w().i(ia,`com.raquo.laminar.modifiers.Modifier$`,{cf:1});var oa;function sa(){return oa||=new ia,oa}function ca(){this.q=null,ua=this,this.q=new rc(new J((e=>e)),O()),new rc(new J((e=>``+(e|0))),O()),new rc(new J((e=>``+ +e)),O()),new rc(new J((e=>``+!!e)),O()),new rc(new J((e=>e.iw())),O())}x=ca.prototype=new S,x.constructor=ca;function la(){}la.prototype=x,new w().i(ca,`com.raquo.laminar.modifiers.RenderableText$`,{cl:1});var ua;function O(){return ua||=new ca,ua}function da(){}x=da.prototype=new S,x.constructor=da;function fa(){}fa.prototype=x,x.c2=(function(e,t,n){var r=new X(e);t.gc(r),n!==void 0&&n.jc(e,t);var i=T().gI(e.bH(),t.bH());return i&&t.ga(r),i}),new w().i(da,`com.raquo.laminar.nodes.ParentNode$`,{co:1});var pa;function ma(){return pa||=new da,pa}function ha(){}x=ha.prototype=new S,x.constructor=ha;function ga(){}ga.prototype=x,x.iB=(function(e,t){return ri().d9(e.a4,new J((n=>t.h(new na(e,n)))),!0)}),new w().i(ha,`com.raquo.laminar.nodes.ReactiveElement$`,{cq:1});var _a;function va(){return _a||=new ha,_a}function ya(){xa=this,_i().a6(F().iF(new fr(new Int32Array([0]))))}x=ya.prototype=new S,x.constructor=ya;function ba(){}ba.prototype=x,x.gy=(function(){return new J((e=>void 0))}),new w().i(ya,`com.raquo.laminar.tags.CustomHtmlTag$`,{cv:1});var xa;function Sa(){return xa||=new ya,xa}function Ca(){}x=Ca.prototype=new S,x.constructor=Ca;function wa(){}wa.prototype=x,x.fq=(function(e){return q().g.cW().aY(F().b(new(D.r()).C([q().g.cV().cX(),q().g.fT().fH(),q().g.d0().bG().d(8),ul(q().g,e,nc())])))}),new w().i(Ca,`doc.ExampleGroups$package$`,{cx:1});var Ta;function Ea(){return Ta||=new Ca,Ta}function Da(){}x=Da.prototype=new S,x.constructor=Da;function Oa(){}Oa.prototype=x,x.gz=(function(e){return q().g.cW().aY(F().b(new(D.r()).C([q().g.cV().cX(),q().g.fU().ge(),q().g.gF().gS(),q().g.d0().bG().d(16),ul(q().g,e,nc())])))}),new w().i(Da,`doc.Examples$package$`,{cy:1});var ka;function Aa(){return ka||=new Da,ka}function ja(){}x=ja.prototype=new S,x.constructor=ja;function Ma(){}Ma.prototype=x,x.gA=(function(e){return q().g.cW().aY(F().b(new(D.r()).C([q().g.cV().cX(),q().g.fU().ge(),q().g.fT().fH(),q().g.d0().bG().d(16),ul(q().g,e,nc())])))}),new w().i(ja,`doc.VerticalExamples$package$`,{cz:1});var Na;function Pa(){return Na||=new ja,Na}function Fa(){}x=Fa.prototype=new S,x.constructor=Fa;function Ia(){}Ia.prototype=x,x.gG=(function(){Ra().ha(),Ra().hb(),Ra().hc(),Ra().hd(),Ra().he(),Ra().hf(),Ra().hg(),Ra().hh()}),x.ha=(function(){var e=document.querySelector(`#example1`);Hc().as(e).i()||(q(),new gl(e,H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`))),new K((e=>e.b4().d(`a`))),new K((e=>(H().bJ(),q().g).bK().d(`1`)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))))}),x.hb=(function(){var e=document.querySelector(`#example2`);Hc().as(e).i()||(q(),new gl(e,H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`))),new K((e=>e.c8().d(`Choose the most appropriate option.`))),new K((e=>e.b4().d(`a`))),new K((e=>(H().bJ(),q().g).bK().d(`1`)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))))}),x.hc=(function(){var e=document.querySelector(`#example3`);Hc().as(e).i()||(q(),new gl(e,Ea().fq(F().b(new(Rf.r()).C([Pa().gA(F().b(new(Rf.r()).C([H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Horizontal options`))),new K((e=>e.c8().d(`Select an option that makes you proud.`))),new K((e=>e.d5().fY())),new K((e=>e.b4().d(`a`))),new K((e=>(H().bJ(),q().g).bK().d(`1`)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))]))),H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Vertical options`))),new K((e=>e.c8().d(`Select an option that makes you proud.`))),new K((e=>e.d5().iE())),new K((e=>e.b4().d(`a`))),new K((e=>(H().bJ(),q().g).bK().d(`1`)))])),F().b(new(D.r()).C([q().g.hI().bG().d(300),V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.aX().b0())),new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))])))])))))}),x.hd=(function(){var e=document.querySelector(`#example4`);Hc().as(e).i()||(q(),new gl(e,H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`))),new K((e=>e.c4().d(!0)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`))),new K((e=>e.c4().d(!0)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))))}),x.he=(function(){var e=document.querySelector(`#example5`);Hc().as(e).i()||(q(),new gl(e,H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`))),new K((e=>e.c4().d(!0)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))))}),x.hf=(function(){var e=document.querySelector(`#example6`);Hc().as(e).i()||(q(),new gl(e,H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`))),new K((e=>e.c8().d(`Choose the most appropriate option.`))),new K((e=>e.d5().fY())),new K((e=>e.b4().d(`a`))),new K((e=>(H().bJ(),q().g).bK().d(`1`)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))])))))}),x.hg=(function(){var e=document.querySelector(`#example7`);Hc().as(e).i()||(q(),new gl(e,Ea().fq(F().b(new(Rf.r()).C([Aa().gz(F().b(new(Rf.r()).C([H().m(F().b(new(N.r()).C([new K((e=>e.d8().iq()))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`small`)))])),F().b(new(D.r()).C([B(q().g,`Small`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`medium`)))])),F().b(new(D.r()).C([B(q().g,`Medium`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`large`)))])),F().b(new(D.r()).C([B(q().g,`Large`,O().q)])))]))),H().m(F().b(new(N.r()).C([new K((e=>e.d8().hJ()))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`small`)))])),F().b(new(D.r()).C([B(q().g,`Small`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`medium`)))])),F().b(new(D.r()).C([B(q().g,`Medium`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`large`)))])),F().b(new(D.r()).C([B(q().g,`Large`,O().q)])))]))),H().m(F().b(new(N.r()).C([new K((e=>e.d8().hF()))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`small`)))])),F().b(new(D.r()).C([B(q().g,`Small`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`medium`)))])),F().b(new(D.r()).C([B(q().g,`Medium`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`large`)))])),F().b(new(D.r()).C([B(q().g,`Large`,O().q)])))])))])))])))))}),x.hh=(function(){var e=document.querySelector(`#example8`);Hc().as(e).i()||(q(),new gl(e,q().g.hm().aY(F().b(new(D.r()).C([new dl((q(),Yi().h5(q().g.i0(),!1,!1)).i4(),new J((e=>(t=>{e.hZ(t)}))(q().g.dt.gd(new K((e=>{window.alert(`All fields are valid!`)})),Qo().cC,!0)))),H().m(F().b(new(N.r()).C([new K((e=>e.at().d(`Select an option`))),new K((e=>e.b4().d(`a`))),new K((e=>e.id().d(!0)))])),F().b(new(D.r()).C([V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`1`)))])),F().b(new(D.r()).C([B(q().g,`Option 1`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`2`)))])),F().b(new(D.r()).C([B(q().g,`Option 2`,O().q)]))),V().m(F().b(new(N.r()).C([new K((e=>e.t().d(`3`)))])),F().b(new(D.r()).C([B(q().g,`Option 3`,O().q)])))]))),q().g.gP().aY(F().b(new(D.r()).C([]))),Cl().m(F().b(new(N.r()).C([new K((e=>e.iy().ir())),new K((e=>e.iD().gQ()))])),F().b(new(D.r()).C([B(q().g,`Submit`,O().q)])))])))))}),new w().i(Fa,`examples.radioGroup.Main$package$`,{cA:1});var La;function Ra(){return La||=new Fa,La}function za(e){try{Ra().gG()}catch(e){throw e}}function Ba(){this.go=!1,this.bg=null,this.bW=null,this.f1=null,this.cw=!1,this.gn=0,this.gq=0,this.gp=null,Ha=this,this.go=!0,this.bg=new ArrayBuffer(8),this.bW=new Int32Array(this.bg,0,2),new Float32Array(this.bg,0,2),this.f1=new Float64Array(this.bg,0,1),this.bW[0]=16909060,this.cw=(new Int8Array(this.bg,0,8)[0]|0)==1,this.gn=this.cw?0:1,this.gq=this.cw?1:0,this.gp=null}x=Ba.prototype=new S,x.constructor=Ba;function Va(){}Va.prototype=x,x.d4=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.f1[0]=e,(this.bW[0]|0)^(this.bW[1]|0))}),new w().i(Ba,`java.lang.FloatingPointBits$`,{cS:1});var Ha;function Ua(){return Ha||=new Ba,Ha}function Wa(e,t){for(var n=k().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ga(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new yc(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new yc(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(xc.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Ga(e,t){var n=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=k().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=k().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Ka(e,c[1]),$a(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Ka(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Ka(e,d[1]),`<clinit>`]}function Ka(e,t){var n=Ja(e);if(Eo().f7.call(n,t))var r=Ja(e)[t];else var r=uo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function qa(e){if(!((1&e.N)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.cy=t,e.N=(1|e.N)<<24>>24}return e.cy}function Ja(e){return(1&e.N)<<24>>24?e.cy:qa(e)}function Ya(e){if(!((2&e.N)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.cz=t,e.N=(2|e.N)<<24>>24}return e.cz}function Xa(e){return(2&e.N)<<24>>24?e.cz:Ya(e)}function Za(e){return(4&e.N)<<24>>24||(e.cx=Object.keys(Xa(e)),e.N=(4|e.N)<<24>>24),e.cx}function Qa(e){return(4&e.N)<<24>>24?e.cx:Za(e)}function $a(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function eo(e,t){return t?t.arguments&&t.stack?to(e,t):t.stack&&t.sourceURL?io(e,t):t.stack&&t.number?ro(e,t):t.stack&&t.fileName?no(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ao(e,t):oo(e,t):ao(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?so(e,t):co(e,t):t.stack&&!t.fileName?to(e,t):lo(e,t):[]}function to(e,t){return(t.stack+`
`).replace(k().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(k().F(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(k().F(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(k().F(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(k().F(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function no(e,t){return t.stack.replace(k().F(`(?:\\n@:0)?\\s+$`,`m`),``).replace(k().F(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ro(e,t){return t.stack.replace(k().F(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(k().F(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(k().F(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function io(e,t){return t.stack.replace(k().F(`\\[native code\\]\\n`,`m`),``).replace(k().F(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(k().F(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ao(e,t){for(var n=k().F(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function oo(e,t){for(var n=k().F(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function so(e,t){for(var n=k().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function co(e,t){for(var n=k().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(k().W(`<anonymous function: (\\S+)>`),`$1`).replace(k().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function lo(e,t){return[]}function uo(e,t,n){for(;;)if(t<(Qa(e).length|0)){var r=Qa(e)[t];if(n.startsWith(r))return``+Xa(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function fo(){this.cy=null,this.cz=null,this.cx=null,this.N=0}x=fo.prototype=new S,x.constructor=fo;function po(){}po.prototype=x,x.hi=(function(e){return Wa(this,eo(this,e))}),new w().i(fo,`java.lang.StackTrace$`,{cZ:1});var mo;function ho(){return mo||=new fo,mo}function go(){}x=go.prototype=new S,x.constructor=go;function _o(){}_o.prototype=x,x.W=(function(e){return new RegExp(e)}),x.F=(function(e,t){return new RegExp(e,t)}),new w().i(go,`java.lang.StackTrace$StringRE$`,{d0:1});var vo;function k(){return vo||=new go,vo}function yo(){this.f3=null,this.gr=null,xo=this,this.f3=new Yp(!1),this.gr=new Yp(!0)}x=yo.prototype=new S,x.constructor=yo;function bo(){}bo.prototype=x,new w().i(yo,`java.lang.System$Streams$`,{d5:1});var xo;function So(){return xo||=new yo,xo}function Co(){this.f7=null,To=this,this.f7=Object.prototype.hasOwnProperty}x=Co.prototype=new S,x.constructor=Co;function wo(){}wo.prototype=x,new w().i(Co,`java.lang.Utils$Cache$`,{d7:1});var To;function Eo(){return To||=new Co,To}function Do(e,t){return e===t}function Oo(e){return 0}function ko(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.ax)}var Ao=new w().i(0,`java.lang.Void`,{ax:1},(e=>e===void 0));function jo(e,t){throw new Nd(`argument type mismatch`)}function Mo(){}x=Mo.prototype=new S,x.constructor=Mo;function No(){}No.prototype=x,x.b2=(function(e){return e instanceof C||e instanceof cr||e instanceof lr||e instanceof ur||e instanceof dr||e instanceof fr||e instanceof pr||e instanceof mr||e instanceof hr?e.a.length:jo(this,e)}),new w().i(Mo,`java.lang.reflect.Array$`,{d8:1});var Po;function Fo(){return Po||=new Mo,Po}function Io(){}x=Io.prototype=new S,x.constructor=Io;function Lo(){}Lo.prototype=x,x.fP=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.e,s=a.f,c=r,l=t.a[c],u=l.e,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),x.fO=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fQ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fL=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fK=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fR=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),x.fM=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),x.fN=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new w().i(Io,`java.util.Arrays$`,{d9:1});var Ro;function A(){return Ro||=new Io,Ro}function j(e,t){this.e=0,this.f=0,this.e=e,this.f=t}x=j.prototype=new S,x.constructor=j;function zo(){}zo.prototype=x,x.k=(function(e){return e instanceof j&&this.e===e.e&&this.f===e.f}),x.r=(function(){return this.e^this.f}),x.x=(function(){return M().g6(this.e,this.f)}),x.jh=(function(){return this.e}),x.jg=(function(){return M().g5(this.e,this.f)}),x.jf=(function(){return M().bE(this.e,this.f)}),x.iX=(function(){return this.e<<24>>24}),x.jd=(function(){return this.e<<16>>16}),x.j7=(function(){return this.e}),x.j8=(function(){return this}),x.j3=(function(){return M().g5(this.e,this.f)}),x.j1=(function(){return M().bE(this.e,this.f)}),x.iZ=(function(e){return M().g3(this.e,this.f,e.e,e.f)}),x.iY=(function(e){return M().g3(this.e,this.f,e.e,e.f)}),x.j2=(function(e){return this.e===e.e&&this.f===e.f}),x.jb=(function(e){return!(this.e===e.e&&this.f===e.f)}),x.iP=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<(-2147483648^e.e):t<n}),x.iQ=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<=(-2147483648^e.e):t<n}),x.iL=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>(-2147483648^e.e):t>n}),x.iM=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>=(-2147483648^e.e):t>n}),x.jj=(function(){return new j(~this.e,~this.f)}),x.iJ=(function(e){return new j(this.e|e.e,this.f|e.f)}),x.iI=(function(e){return new j(this.e&e.e,this.f&e.f)}),x.iW=(function(e){return new j(this.e^e.e,this.f^e.f)}),x.iR=(function(e){var t=this.e;return new j(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),x.iO=(function(e){var t=this.f;return new j(32&e?t>>>e|0:this.e>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),x.iN=(function(e){var t=this.f;return new j(32&e?t>>e:this.e>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),x.ji=(function(){var e=this.e,t=this.f;return new j(-e|0,e===0?-t|0:~t)}),x.iU=(function(e){var t=this.e,n=this.f,r=e.f,i=t+e.e|0;return new j(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),x.iS=(function(e){var t=this.e,n=this.f,r=e.f,i=t-e.e|0;return new j(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),x.iV=(function(e){var t=this.e,n=e.e,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new j(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),x.iK=(function(e){var t=M();return new j(t.h2(this.e,this.f,e.e,e.f),t.v)}),x.iT=(function(e){var t=M();return new j(t.i8(this.e,this.f,e.e,e.f),t.v)}),new w().i(j,`org.scalajs.linker.runtime.RuntimeLong`,{ay:1});function Bo(e,t,n){return-2097152&n?Uo(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Vo(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.v=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.v=0,n>>>o|0}else return Uo(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.v=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.v=s/4294967296|0,s|0}}function Ho(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.v=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.v=n&(-1+i|0),t):Uo(e,t,n,r,i,1)|0;if(-2097152&i)return e.v=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.v=a/4294967296|0,a|0}function Uo(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.v=ee,m;if(a===1)return e.v=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function Wo(){this.v=0}x=Wo.prototype=new S,x.constructor=Wo;function Go(){}Go.prototype=x,x.g6=(function(e,t){return t===e>>31?``+e:t<0?`-`+Bo(this,-e|0,e===0?-t|0:~t):Bo(this,e,t)}),x.bE=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),x.g5=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),x.j5=(function(e){return new j(e,e>>31)}),x.j4=(function(e){return new j(this.g4(e),this.v)}),x.g4=(function(e){if(e<-0x8000000000000000)return this.v=-2147483648,0;if(e>=0x8000000000000000)return this.v=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.v=e<0&&t!==0?-1+n|0:n,t}),x.g3=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),x.h2=(function(e,t,n,r){if((n|r)===0)throw new jd(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.v=0,-2147483648;var i=Gn(e,n);return this.v=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=-1,-1;else return this.v=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Vo(this,a,o,s,c);if((t^r)>=0)return l;var u=this.v;return this.v=l===0?-u|0:~u,-l|0}}),x.i8=(function(e,t,n,r){if((n|r)===0)throw new jd(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Kn(e,n);return this.v=i>>31,i}else return this.v=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=0,0;else return this.v=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Ho(this,a,o,s,c);if(t<0){var u=this.v;return this.v=l===0?-u|0:~u,-l|0}else return l}}),new w().i(Wo,`org.scalajs.linker.runtime.RuntimeLong$`,{db:1});var Ko;function M(){return Ko||=new Wo,Ko}var N=new w().i(1,`scala.Function1`,{e:1});function qo(){}x=qo.prototype=new S,x.constructor=qo;function Jo(){}Jo.prototype=x;function Yo(){this.f9=null,this.cC=null,Zo=this,this.f9=new K((e=>Qo().f9)),this.cC=new rd}x=Yo.prototype=new S,x.constructor=Yo;function Xo(){}Xo.prototype=x,new w().i(Yo,`scala.PartialFunction$`,{dm:1});var Zo;function Qo(){return Zo||=new Yo,Zo}function $o(){this.fc=null,ts=this,this.fc=new K((e=>ns().fc))}x=$o.prototype=new S,x.constructor=$o;function es(){}es.prototype=x,x.hl=(function(e,t){var n=Fo().b2(e),r=0;if(e instanceof C)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof fr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof hr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof pr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof mr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof lr)for(;r<n;)t.h(rr(e.a[r])),r=1+r|0;else if(e instanceof ur)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof dr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else if(e instanceof cr)for(;r<n;)t.h(e.a[r]),r=1+r|0;else throw new Kd(e)}),new w().i($o,`scala.collection.ArrayOps$`,{dt:1});var ts;function ns(){return ts||=new $o,ts}function rs(e,t){for(var n=e.p();n.w();)t.h(n.l())}function is(e,t,n,r){return e.C()===0?``+t+r:e.br(jh(new Mh),t,n,r).K.u}function as(e,t,n,r,i){var a=t.K;n.length!==0&&(a.u=``+a.u+n);var o=e.p();if(o.w()){var s=o.l();for(a.u=``+a.u+s;o.w();){a.u=``+a.u+r;var c=o.l();a.u=``+a.u+c}}return i.length!==0&&(a.u=``+a.u+i),t}function os(e,t){this.fg=null,this.bm=null,this.fg=e,this.bm=t}x=os.prototype=new S,x.constructor=os;function ss(){}ss.prototype=x,x.hy=(function(){return this.fg.aL().p()}),new w().i(os,`scala.collection.Iterator$ConcatIteratorCell`,{dL:1});function cs(){}x=cs.prototype=new S,x.constructor=cs;function ls(){}ls.prototype=x,x.L=(function(e,t){return e===t||(vc(e)?this.h9(e,t):e instanceof zn?this.h7(e,t):e===null?t===null:Hn(e,t))}),x.h9=(function(e,t){if(vc(t))return this.h8(e,t);if(t instanceof zn){if(typeof e==`number`)return+e===t.c;if(e instanceof j){var n=ar(e),r=n.e,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Hn(e,t)}else return e===null?t===null:Hn(e,t)}),x.h8=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof j){var r=ar(t);return n===M().bE(r.e,r.f)}else return!1}else if(e instanceof j){var i=ar(e),a=i.e,o=i.f;if(t instanceof j){var s=ar(t),c=s.e,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return M().bE(a,o)===u}else return!1}else return e===null?t===null:Hn(e,t)}),x.h7=(function(e,t){if(t instanceof zn)return e.c===t.c;if(vc(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof j){var n=ar(t),r=n.e,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Hn(t,e)}else return e===null&&t===null}),new w().i(cs,`scala.runtime.BoxesRunTime$`,{em:1});var us;function P(){return us||=new cs,us}var ds=new w().i(0,`scala.runtime.Null$`,{ep:1});function fs(){}x=fs.prototype=new S,x.constructor=fs;function ps(){}ps.prototype=x,x.aZ=(function(e,t){if(e instanceof C||e instanceof fr||e instanceof hr||e instanceof pr||e instanceof mr)return e.a[t];if(e instanceof lr)return rr(e.a[t]);if(e instanceof ur||e instanceof dr||e instanceof cr)return e.a[t];throw e===null?new Rd:new Kd(e)}),x.gL=(function(e,t,n){if(e instanceof C)e.a[t]=n;else if(e instanceof fr)e.a[t]=n|0;else if(e instanceof hr)e.a[t]=+n;else if(e instanceof pr)e.a[t]=ar(n);else if(e instanceof mr)e.a[t]=Math.fround(n);else if(e instanceof lr)e.a[t]=ir(n);else if(e instanceof ur)e.a[t]=n|0;else if(e instanceof dr)e.a[t]=n|0;else if(e instanceof cr)e.a[t]=!!n;else if(e===null)throw new Rd;else throw new Kd(e)}),x.gB=(function(e){return is(e.av(),e.a3()+`(`,`,`,`)`)}),x.b=(function(e){return e===null?null:e.a.length===0?up(mp()):new Jm(e)}),x.iF=(function(e){return e===null?null:new Wm(e)}),new w().i(fs,`scala.runtime.ScalaRunTime$`,{eq:1});var ms;function F(){return ms||=new fs,ms}function hs(){}x=hs.prototype=new S,x.constructor=hs;function gs(){}gs.prototype=x,x.c=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.o=(function(e,t){return this.gN(e^t)}),x.gN=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.b3=(function(e){var t=e.e,n=e.f;return n===t>>31?t:t^n}),x.V=(function(e){var t=qn(e);if(t===e)return t;var n=M(),r=n.g4(e),i=n.v;return M().bE(r,i)===e?r^i:Ua().d4(e)}),x.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof j){var t=ar(e);return this.b3(new j(t.e,t.f))}else return Un(e)}),x.bD=(function(e){throw Pd(new Fd,``+e)}),new w().i(hs,`scala.runtime.Statics$`,{es:1});var _s;function I(){return _s||=new hs,_s}function vs(){}x=vs.prototype=new S,x.constructor=vs;function ys(){}ys.prototype=x,x.io=(function(e,t){return setTimeout((()=>{t.aL()}),e)}),new w().i(vs,`scala.scalajs.js.timers.package$`,{ey:1});var bs;function xs(){return bs||=new vs,bs}function Ss(){}x=Ss.prototype=new S,x.constructor=Ss;function Cs(){}Cs.prototype=x,x.ix=(function(e){var t=[];return e.a0(new K((e=>t.push(e)|0))),t}),new w().i(Ss,`scala.scalajs.runtime.Compat$`,{eH:1});var ws;function Ts(){return ws||=new Ss,ws}function Es(){}x=Es.prototype=new S,x.constructor=Es;function Ds(){}Ds.prototype=x,x.ip=(function(e){var t=`Illegal command line`+(e.fZ()===0?``:e.fZ()===1?` after first argument`:` after `+e.fZ()+` arguments`)+`: `+e.j9();Pc().i2().hD(t+`
`)}),new w().i(Es,`scala.util.CommandLineParser$`,{eJ:1});function Os(e){this.cQ=null,this.cQ=e}x=Os.prototype=new S,x.constructor=Os;function ks(){}ks.prototype=x,x.x=(function(){return`DynamicVariable(`+this.cQ+`)`}),new w().i(Os,`scala.util.DynamicVariable`,{eL:1});function As(){}x=As.prototype=new S,x.constructor=As;function js(){}js.prototype=x,x.c=(function(e,t){var n=this.ca(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),x.ca=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),x.o=(function(e,t){return this.G(e^t)}),x.G=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),x.cb=(function(e,t,n){var r=e.a1();if(r===0)return qf(e.a3());var i=t;n||(i=this.c(i,qf(e.a3())));for(var a=0;a<r;)i=this.c(i,I().B(e.a2(a))),a=1+a|0;return this.o(i,r)}),x.iA=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.p();o.w();){var s=o.l(),c=I().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.c(l,n),l=this.c(l,r),l=this.ca(l,a),this.o(l,i)}),x.i1=(function(e,t){var n=e.p(),r=t;if(!n.w())return this.o(r,0);var i=n.l();if(!n.w())return this.o(this.c(r,I().B(i)),1);var a=n.l(),o=I().B(i);r=this.c(r,o);for(var s=r,c=I().B(a),l=c-o|0,u=2;n.w();){r=this.c(r,c);var d=I().B(n.l());if(l!==(d-c|0)||l===0){for(r=this.c(r,d),u=1+u|0;n.w();)r=this.c(r,I().B(n.l())),u=1+u|0;return this.o(r,u)}c=d,u=1+u|0}return this.G(this.c(this.c(s,l),c))}),x.fv=(function(e,t){var n=t,r=Fo().b2(e);switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,I().B(F().aZ(e,0))),1);default:var i=I().B(F().aZ(e,0));n=this.c(n,i);for(var a=n,o=I().B(F().aZ(e,1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().B(F().aZ(e,c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().B(F().aZ(e,c))),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.i6=(function(e,t,n,r){return this.G(this.c(this.c(this.c(r,e),t),n))}),x.hz=(function(e,t){var n=t,r=e.n();switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,I().B(e.s(0))),1);default:var i=I().B(e.s(0));n=this.c(n,i);for(var a=n,o=I().B(e.s(1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().B(e.s(c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().B(e.s(c))),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.hG=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.i();){var l=c.a7(),u=c.X(),d=I().B(l);switch(r=this.c(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.i6(s,a,o,t):this.o(r,n)}),x.fE=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.c(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]?1231:1237),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fw=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fx=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fy=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,I().V(e.a[0])),1);default:var i=I().V(e.a[0]);n=this.c(n,i);for(var a=n,o=I().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().V(e.a[c])),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fz=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,I().V(e.a[0])),1);default:var i=I().V(e.a[0]);n=this.c(n,i);for(var a=n,o=I().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=I().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,I().V(e.a[c])),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fA=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fB=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:var i=n,a=e.a[0];return this.o(this.c(i,I().b3(new j(a.e,a.f))),1);default:var o=e.a[0],s=I().b3(new j(o.e,o.f));n=this.c(n,s);for(var c=n,l=e.a[1],u=I().b3(new j(l.e,l.f)),d=u-s|0,f=2;f<r;){n=this.c(n,u);var p=e.a[f],m=I().b3(new j(p.e,p.f));if(d!==(m-u|0)||d===0){for(n=this.c(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.c(ee,I().b3(new j(te.e,te.f))),f=1+f|0}return this.o(n,r)}u=m,f=1+f|0}return this.G(this.c(this.c(c,d),u))}}),x.fC=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.o(n,r)}o=l,c=1+c|0}return this.G(this.c(this.c(a,s),o))}}),x.fD=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.o(n,0);case 1:return this.o(this.c(n,0),1);default:n=this.c(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.c(n,a),o!==(-a|0)||o===0){for(n=this.c(n,0),s=1+s|0;s<r;)n=this.c(n,0),s=1+s|0;return this.o(n,r)}a=0,s=1+s|0}return this.G(this.c(this.c(i,o),a))}});function Ms(e){this.aQ=null,this.dj=null,this.cg=!1,this.dj=e,ii(this),this.cg=!1}x=Ms.prototype=new S,x.constructor=Ms;function Ns(){}Ns.prototype=x,x.i3=(function(e){this.cg?(ci(e),this.dj.aL()):si(this,e)}),x.hE=(function(){ai(this),this.cg=!0}),new w().i(Ms,`com.raquo.airstream.ownership.OneTimeOwner`,{bp:1,bq:1});function Ps(){}x=Ps.prototype=new S,x.constructor=Ps;function Fs(){}Fs.prototype=x,x.h1=(function(e){return e!==null}),x.h6=(function(e){return e?``:null}),x.c3=(function(e){return this.h1(e)}),x.bB=(function(e){return this.h6(!!e)}),new w().i(Ps,`com.raquo.laminar.codecs.package$$anon$1`,{bG:1,a3:1});function Is(e){if(e===null)throw new Rd}x=Is.prototype=new S,x.constructor=Is;function Ls(){}Ls.prototype=x,x.bB=(function(e){return e}),x.c3=(function(e){return e}),new w().i(Is,`com.raquo.laminar.codecs.package$$anon$2`,{bH:1,a3:1});function Rs(e){return new Hi(e,new J((e=>e+`px`)))}function zs(e,t,n,r){}x=zs.prototype=new Zi,x.constructor=zs;function Bs(){}Bs.prototype=x,new w().i(zs,`com.raquo.laminar.keys.CompositeKey`,{c3:1,t:1});function Vs(e){this.bS=null,this.bS=e}x=Vs.prototype=new Zi,x.constructor=Vs;function Hs(){}Hs.prototype=x,new w().i(Vs,`com.raquo.laminar.keys.EventProp`,{c7:1,t:1});function L(e,t,n){return e.Y=t,e.ac=n,e}function Us(){this.Y=null,this.ac=null}x=Us.prototype=new Zi,x.constructor=Us;function Ws(){}Ws.prototype=x,x.d=(function(e){return new ml(this,e,new vd(((e,t,n)=>{T().g8(e,t,n)})))}),new w().i(Us,`com.raquo.laminar.keys.HtmlAttr`,{X:1,t:1});function Gs(e,t){this.e7=null,this.e6=null,this.e7=e,this.e6=t}x=Gs.prototype=new Zi,x.constructor=Gs;function Ks(){}Ks.prototype=x,x.d=(function(e){return new ml(this,e,new vd(((e,t,n)=>{T().ii(e,t,n)})))}),new w().i(Gs,`com.raquo.laminar.keys.HtmlProp`,{c8:1,t:1});function qs(e,t,n){this.co=null,this.cn=null,this.bT=null,this.bU=null,this.co=e,this.cn=t;var r=n.i()?Y():new X(n.A()+`:`+e);this.bT=r.i()?e:r.A(),this.bU=n.i()?Y():new X(ta().hL(n.A()))}x=qs.prototype=new Zi,x.constructor=qs;function Js(){}Js.prototype=x,new w().i(qs,`com.raquo.laminar.keys.SvgAttr`,{c9:1,t:1});function Ys(){}x=Ys.prototype=new S,x.constructor=Ys;function Xs(){}Xs.prototype=x,x.ar=(function(e){}),new w().i(Ys,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cg:1,T:1});function Zs(e,t){if(this.ed=null,this.ed=e,t===null)throw new Rd}x=Zs.prototype=new S,x.constructor=Zs;function Qs(){}Qs.prototype=x,x.ar=(function(e){var t=Lr(),n=(()=>{this.ed.h(e)});if(Lr(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,Nr(t)}}}),new w().i(Zs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{ch:1,T:1});function $s(){}x=$s.prototype=new S,x.constructor=$s;function ec(){}ec.prototype=x,new w().i($s,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cj:1,ci:1});var tc;function nc(){return tc||=new $s,tc}function rc(e,t){if(this.ee=null,this.ee=e,t===null)throw new Rd}x=rc.prototype=new S,x.constructor=rc;function ic(){}ic.prototype=x,x.gM=(function(e){return this.ee.h(e)}),new w().i(rc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cm:1,ck:1});function ac(e){e.fJ(new Yr(new pd((()=>{throw U(new W,`Attempting to use owner of unmounted element: `+is(T().h0(e.bH(),(T(),kh())),``,` > `,``))}))))}function oc(e,t,n){return e.cu=t,e}function sc(){this.cu=null}x=sc.prototype=new S,x.constructor=sc;function cc(){}cc.prototype=x,x.d3=(function(){return this.cu}),x.aY=(function(e){var t=this.gR();return e.a0(new J((e=>{e.ar(t)}))),t}),x.gR=(function(){return new If(this,T().gV(this))}),new w().i(sc,`com.raquo.laminar.tags.HtmlTag`,{am:1,a5:1});function lc(e,t){this.ek=null,this.ek=e}x=lc.prototype=new S,x.constructor=lc;function uc(){}uc.prototype=x,new w().i(lc,`com.raquo.laminar.tags.SvgTag`,{cw:1,a5:1});function dc(){}x=dc.prototype=new S,x.constructor=dc;function fc(){}fc.prototype=x,x.bB=(function(e){return e}),x.c3=(function(e){return e}),new w().i(dc,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cJ:1,a3:1});function pc(e,t){return e.bc=t,e.cR(),e}function mc(){this.bc=null,this.bb=null,this.bd=!1,this.be=null,this.bf=!1}x=mc.prototype=new S,x.constructor=mc;function hc(){}hc.prototype=x,x.iu=(function(){return this.bd||=(this.bb=new vl(this.bc,Sa().gy(),(Sa(),void 0)),!0),this.bb}),x.m=(function(e,t){var n=this.iu().aY(F().b(new(D.r()).C([])));return e.a0(new J((e=>{e.h(this).ar(n)}))),t.a0(new J((e=>{e.ar(n)}))),n}),x.bJ=(function(){return this.bf||=(this.be=new Xl,!0),this.be});function gc(){}x=gc.prototype=new S,x.constructor=gc;function _c(){}_c.prototype=x;function vc(e){return e instanceof gc||typeof e==`number`||e instanceof j}function yc(e,t,n,r,i){this.aT=null,this.bi=null,this.aU=null,this.aV=0,this.aS=0,this.aT=e,this.bi=t,this.aU=n,this.aV=r,this.aS=i}x=yc.prototype=new S,x.constructor=yc;function bc(){}bc.prototype=x,x.k=(function(e){return e instanceof yc&&this.aU===e.aU&&this.aV===e.aV&&this.aS===e.aS&&this.aT===e.aT&&this.bi===e.bi}),x.x=(function(){var e=``;return this.aT!==`<jscode>`&&(e=``+e+this.aT+`.`),e=``+e+this.bi,this.aU===null?e+=`(Unknown Source)`:(e=e+`(`+this.aU,this.aV>=0&&(e=e+`:`+this.aV,this.aS>=0&&(e=e+`:`+this.aS)),e+=`)`),e}),x.r=(function(){return qf(this.aT)^qf(this.bi)^qf(this.aU)^this.aV^this.aS});var xc=new w().i(yc,`java.lang.StackTraceElement`,{aw:1,a:1});function Sc(){}x=Sc.prototype=new S,x.constructor=Sc;function Cc(){}Cc.prototype=x,x.hM=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Xf;for(var i=``,a=t;a!==r;)i+=``+Jn(e.a[a]),a=1+a|0;return i}),new w().i(Sc,`java.lang.String$`,{d2:1,a:1});var wc;function Tc(){return wc||=new Sc,wc}function R(e,t,n,r,i){return e.f5=t,e.f6=i,i&&e.hj(),e}var Ec=class extends Error{constructor(){super(),this.f5=null,this.f6=!1,this.f4=null,this.bX=null}hA(e){return this}bC(){return this.f5}hj(){var e=this instanceof Z?this.T:this;return this.f4=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}hu(){return this.bX===null&&(this.f6?this.bX=ho().hi(this.f4):this.bX=new(xc.r()).C(0)),this.bX}x(){var e=Vn(this),t=this.bC();return t===null?e:e+`: `+t}r(){return or.prototype.r.call(this)}k(e){return or.prototype.k.call(this,e)}get message(){var e=this.bC();return e===null?``:e}get name(){return Vn(this)}toString(){return this.x()}};function Dc(){}x=Dc.prototype=new S,x.constructor=Dc;function Oc(){}Oc.prototype=x,x.fV=(function(e,t){var n=e.C();if(n>-1){for(var r=t.hN(n),i=e.p(),a=0;a<n;)F().gL(r,a,i.l()),a=1+a|0;return r}else{var o=null,s=t.ie(),c=s===vr.l();o=[];for(var l=e.p();l.w();){var u=l.l(),d=c?ir(u):u===null?s.aw.z:u;o.push(d)}return(s===_r.l()?Ao.l():s===ds.l()||s===xu.l()?gr.l():s).aw.r().w(o)}}),x.fS=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!P().L(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new w().i(Dc,`scala.Array$`,{dc:1,a:1});var kc;function Ac(){return kc||=new Dc,kc}function jc(){this.f8=null,Nc=this,this.f8=new Os(So().f3)}x=jc.prototype=new S,x.constructor=jc;function Mc(){}Mc.prototype=x,x.i2=(function(){return this.f8.cQ}),new w().i(jc,`scala.Console$`,{dd:1,e8:1});var Nc;function Pc(){return Nc||=new jc,Nc}function Fc(){}x=Fc.prototype=new S,x.constructor=Fc;function Ic(){}Ic.prototype=x,x.x=(function(){return`<function1>`});function Lc(){}x=Lc.prototype=new Jo,x.constructor=Lc;function Rc(){}Rc.prototype=x,x.iG=(function(e){return e===null?null:e.a.length===0?vp().fh:new vh(e)});function zc(){}x=zc.prototype=new S,x.constructor=zc;function Bc(){}Bc.prototype=x,x.as=(function(e){return e===null?Y():new X(e)}),new w().i(zc,`scala.Option$`,{dl:1,a:1});var Vc;function Hc(){return Vc||=new zc,Vc}function Uc(e,t){if(t===e)e.fs(Sf().fW(t));else for(var n=t.p();n.w();)e.cT(n.l());return e}function Wc(){}x=Wc.prototype=new S,x.constructor=Wc;function Gc(){}Gc.prototype=x,x.x=(function(){return`<function0>`});function Kc(){}x=Kc.prototype=new S,x.constructor=Kc;function qc(){}qc.prototype=x,x.x=(function(){return`<function1>`});function Jc(){}x=Jc.prototype=new S,x.constructor=Jc;function Yc(){}Yc.prototype=x,x.x=(function(){return`<function2>`});function Xc(){}x=Xc.prototype=new S,x.constructor=Xc;function Zc(){}Zc.prototype=x,x.x=(function(){return`<function3>`});function Qc(e){this.c1=!1,this.c1=e}x=Qc.prototype=new S,x.constructor=Qc;function $c(){}$c.prototype=x,x.x=(function(){return``+this.c1}),new w().i(Qc,`scala.runtime.BooleanRef`,{el:1,a:1});function el(e){this.bp=0,this.bp=e}x=el.prototype=new S,x.constructor=el;function tl(){}tl.prototype=x,x.x=(function(){return``+this.bp}),new w().i(el,`scala.runtime.IntRef`,{en:1,a:1});function nl(){this.y=0,this.fp=0,this.gx=0,this.gw=0,il=this,this.y=qf(`Seq`),this.fp=qf(`Map`),this.gx=qf(`Set`),this.gw=this.iA(kh(),this.fp)}x=nl.prototype=new js,x.constructor=nl;function rl(){}rl.prototype=x,x.ig=(function(e){return pm(e)?this.hz(e,this.y):e instanceof nh?this.hG(e,this.y):this.i1(e,this.y)}),new w().i(nl,`scala.util.hashing.MurmurHash3$`,{eN:1,eM:1});var il;function z(){return il||=new nl,il}var al=class extends Ec{};function ol(){this.cc=null,this.da=null,this.db=null,cl=this,this.cc=Sf().ft(F().b(new(N.r()).C([]))),this.da=new J((e=>{try{console.error(this.c7(e)+`
`+this.ht(e,`
`))}catch(e){var t=e instanceof Ec?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.db=new J((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.T:t})),this.i7(this.da)}x=ol.prototype=new S,x.constructor=ol;function sl(){}sl.prototype=x,x.c7=(function(e){try{var t=e.bC()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Bn(e).d1()+`: `+t}),x.ht=(function(e,t){try{return is(iu().iG(e.hu()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),x.i7=(function(e){this.cc.cT(e)}),x.b5=(function(e){for(var t=this.cc.p();t.w();){var n=t.l();try{n.h(e)}catch(e){var r=e instanceof Ec?e:new Z(e),i=this.db;if(n===null?i===null:n.k(i))throw r instanceof Z?r.T:r;console.warn(`Error processing an unhandled error callback:`),xs().io(0,new pd((e=>(()=>{throw e instanceof Z?e.T:e}))(r)))}}}),new w().i(ol,`com.raquo.airstream.core.AirstreamError$`,{bc:1,e6:1,e7:1});var cl;function ll(){return cl||=new ol,cl}function B(e,t,n){return new Wu(n.gM(t))}function ul(e,t,n){return new Zs(new J((e=>{(Ai(),new Ti(t,null,null)).a0(new J((e=>(t=>{ma().c2(e,t,void 0)}))(e)))})),sa())}function dl(e,t){this.aR=null,this.cp=null,this.cq=null,this.aR=e,this.cp=(n=>{var r=e.ck.h(n);r.i()||t.h(r.A())}),this.cq=(()=>{var e=null;e=this;var t={};if(e===null)throw new Rd;return t.capture=e.aR.cm,t.passive=e.aR.cl,t})()}x=dl.prototype=new S,x.constructor=dl;function fl(){}fl.prototype=x,x.ar=(function(e){this.gO(e,!1)}),x.gO=(function(e,t){if(Cd(e,this)===-1){var n=new J((t=>(T().gC(e.M,this),new li(t.e8,new pd((()=>{var t=Cd(e,this);t!==-1&&(Sd(e,t),T().i9(e.M,this))})))))),r=t?va().iB(e,n):ri().d9(e.a4,new J((t=>n.h(new na(e,t)))),!1);return xd(e,this,t),r}else{var i=new J((e=>void 0));return ri().gb(e.a4,new J((t=>{i.h(new na(e,t))})),!1)}}),x.x=(function(){return`EventListener(`+this.aR.ba.bS+`)`});var pl=new w().i(dl,`com.raquo.laminar.modifiers.EventListener`,{cd:1,T:1,cc:1});function ml(e,t,n){this.eb=null,this.ec=null,this.ea=null,this.eb=e,this.ec=t,this.ea=n}x=ml.prototype=new S,x.constructor=ml;function hl(){}hl.prototype=x,x.ar=(function(e){this.ea.gJ(e,this.eb,this.ec)}),new w().i(ml,`com.raquo.laminar.modifiers.KeySetter`,{ce:1,T:1,cn:1});function gl(e,t){if(this.cs=null,this.eg=null,this.eh=null,this.eg=t,ac(this),e===null)throw U(new W,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!T().hC(e,document))throw U(new W,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eh=e,this.hK()}x=gl.prototype=new S,x.constructor=gl;function _l(){}_l.prototype=x,x.c6=(function(){return this.cs}),x.fJ=(function(e){this.cs=e}),x.hK=(function(){return this.cs.fr(),ma().c2(this,this.eg,void 0)}),x.bH=(function(){return this.eh}),new w().i(gl,`com.raquo.laminar.nodes.RootNode`,{cs:1,a4:1,al:1});function vl(e,t,n){this.cu=null,this.ej=null,this.ej=e,oc(this,e,!1)}x=vl.prototype=new cc,x.constructor=vl;function yl(){}yl.prototype=x,x.d3=(function(){return this.ej}),new w().i(vl,`com.raquo.laminar.tags.CustomHtmlTag`,{cu:1,am:1,a5:1});function bl(){this.bc=null,this.bb=null,this.bd=!1,this.be=null,this.bf=!1,this.ep=null,this.eq=!1,this.en=null,this.eo=!1,this.el=null,this.em=!1,pc(this,`wa-button`)}x=bl.prototype=new hc,x.constructor=bl;function xl(){}xl.prototype=x,x.iD=(function(){return this.eq||=(this.ep=Ul(),!0),this.ep}),x.iz=(function(){return this.eo||=(this.en=Dl(),!0),this.en}),x.iy=(function(){return this.em||=(this.el=this.iz(),!0),this.el}),x.cR=(function(){return On}),new w().i(bl,`io.github.nguyenyou.webawesome.laminar.Button$`,{cB:1,a7:1,a6:1});var Sl;function Cl(){return Sl||=new bl,Sl}function wl(){this.Y=null,this.ac=null,this.er=null,this.es=!1,L(this,`type`,new dc)}x=wl.prototype=new Ws,x.constructor=wl;function Tl(){}Tl.prototype=x,x.ir=(function(){return this.es||=(this.er=Dl().d(`submit`),!0),this.er}),new w().i(wl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ButtonButtonType$`,{cC:1,X:1,t:1});var El;function Dl(){return El||=new wl,El}function Ol(){this.Y=null,this.ac=null,this.et=null,this.eu=!1,this.ev=null,this.ew=!1,this.ex=null,this.ey=!1,L(this,`size`,new dc)}x=Ol.prototype=new Ws,x.constructor=Ol;function kl(){}kl.prototype=x,x.hF=(function(){return this.eu||=(this.et=jl().d(`large`),!0),this.et}),x.hJ=(function(){return this.ew||=(this.ev=jl().d(`medium`),!0),this.ev}),x.iq=(function(){return this.ey||=(this.ex=jl().d(`small`),!0),this.ex}),new w().i(Ol,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$`,{cD:1,X:1,t:1});var Al;function jl(){return Al||=new Ol,Al}function Ml(){this.Y=null,this.ac=null,this.ez=null,this.eA=!1,this.eB=null,this.eC=!1,L(this,`orientation`,new dc)}x=Ml.prototype=new Ws,x.constructor=Ml;function Nl(){}Nl.prototype=x,x.fY=(function(){return this.eA||=(this.ez=Fl().d(`horizontal`),!0),this.ez}),x.iE=(function(){return this.eC||=(this.eB=Fl().d(`vertical`),!0),this.eB}),new w().i(Ml,`io.github.nguyenyou.webawesome.laminar.CommonKeys$Orientation$`,{cE:1,X:1,t:1});var Pl;function Fl(){return Pl||=new Ml,Pl}function Il(){this.Y=null,this.ac=null,this.eD=null,this.eE=!1,L(this,`appearance`,new dc)}x=Il.prototype=new Ws,x.constructor=Il;function Ll(){}Ll.prototype=x,x.b0=(function(){return this.eE||=(this.eD=zl().d(`button`),!0),this.eD}),new w().i(Il,`io.github.nguyenyou.webawesome.laminar.CommonKeys$RadioAppearance$`,{cF:1,X:1,t:1});var Rl;function zl(){return Rl||=new Il,Rl}function Bl(){this.Y=null,this.ac=null,this.eF=null,this.eG=!1,L(this,`variant`,new dc)}x=Bl.prototype=new Ws,x.constructor=Bl;function Vl(){}Vl.prototype=x,x.gQ=(function(){return this.eG||=(this.eF=Ul().d(`brand`),!0),this.eF}),new w().i(Bl,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cG:1,X:1,t:1});var Hl;function Ul(){return Hl||=new Bl,Hl}function Wl(){this.bc=null,this.bb=null,this.bd=!1,this.be=null,this.bf=!1,this.eL=null,this.eM=!1,this.eH=null,this.eI=!1,this.eJ=null,this.eK=!1,pc(this,`wa-radio`)}x=Wl.prototype=new hc,x.constructor=Wl;function Gl(){}Gl.prototype=x,x.t=(function(){return this.eM||=(this.eL=(q(),L(new Us,`value`,E().ab)),!0),this.eL}),x.aX=(function(){return this.eI||=(this.eH=zl(),!0),this.eH}),x.c4=(function(){return this.eK||=(this.eJ=(q(),L(new Us,`disabled`,E().bR)),!0),this.eJ}),x.cR=(function(){return Ln}),new w().i(Wl,`io.github.nguyenyou.webawesome.laminar.Radio$`,{cH:1,a7:1,a6:1});var Kl;function V(){return Kl||=new Wl,Kl}function ql(){this.bc=null,this.bb=null,this.bd=!1,this.be=null,this.bf=!1,this.eR=null,this.eS=!1,this.eP=null,this.eQ=!1,this.eT=null,this.eU=!1,this.eN=null,this.eO=!1,this.eV=null,this.eW=!1,this.eZ=null,this.f0=!1,this.eX=null,this.eY=!1,pc(this,`wa-radio-group`)}x=ql.prototype=new hc,x.constructor=ql;function Jl(){}Jl.prototype=x,x.at=(function(){return this.eS||=(this.eR=(q(),L(new Us,`label`,E().ab)),!0),this.eR}),x.c8=(function(){return this.eQ||=(this.eP=(q(),L(new Us,`hint`,E().ab)),!0),this.eP}),x.b4=(function(){return this.eU||=(this.eT=(q(),L(new Us,`name`,E().ab)),!0),this.eT}),x.c4=(function(){return this.eO||=(this.eN=(q(),L(new Us,`disabled`,E().bR)),!0),this.eN}),x.d5=(function(){return this.eW||=(this.eV=Fl(),!0),this.eV}),x.d8=(function(){return this.f0||=(this.eZ=jl(),!0),this.eZ}),x.id=(function(){return this.eY||=(this.eX=(q(),L(new Us,`required`,E().bR)),!0),this.eX}),x.cR=(function(){return In}),new w().i(ql,`io.github.nguyenyou.webawesome.laminar.RadioGroup$`,{cI:1,a7:1,a6:1});var Yl;function H(){return Yl||=new ql,Yl}function Xl(){}x=Xl.prototype=new Ic,x.constructor=Xl;function Zl(){}Zl.prototype=x,x.h=(function(e){return q().g}),new w().i(Xl,`io.github.nguyenyou.webawesome.laminar.WebComponent$toL$`,{cK:1,de:1,e:1});function Ql(e){if(e.aw.Z)return e.aw.Q().d1()+`[]`;for(var t=e.aw.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function $l(e){this.cv=null,this.aw=e}x=$l.prototype=new S,x.constructor=$l;function eu(){}eu.prototype=x,x.x=(function(){return(this.aw.Y?`interface `:this.aw.X?``:`class `)+this.aw.N}),x.d1=(function(){return this.cv===null&&(this.cv=Ql(this)),this.cv}),new w().i($l,`java.lang.Class`,{cQ:1,a:1,M:1});function U(e,t){return R(e,t,null,!0,!0),e}var W=class extends Ec{};new w().i(W,`java.lang.Exception`,{L:1,u:1,a:1});function tu(){this.gs=null,ru=this,this.gs=_u()}x=tu.prototype=new Rc,x.constructor=tu;function nu(){}nu.prototype=x,new w().i(tu,`scala.Predef$`,{dp:1,dh:1,di:1});var ru;function iu(){return ru||=new tu,ru}function au(e,t){return e.bZ=t,e}function ou(){this.bZ=null}x=ou.prototype=new S,x.constructor=ou;function su(){}su.prototype=x,x.cZ=(function(e){return this.bZ.cY(e,sm())}),x.cU=(function(e){return this.bZ.cY(e,sm())});function cu(e,t){return new sf(e).gU(t)}function lu(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?G().z:new df(e,r,i)}function uu(e,t){for(var n=t.p();e.w()&&n.w();)if(!P().L(e.l(),n.l()))return!1;return e.w()===n.w()}function du(){this.z=null,pu=this,this.z=new ef}x=du.prototype=new S,x.constructor=du;function fu(){}fu.prototype=x,new w().i(du,`scala.collection.Iterator$`,{dI:1,a0:1,a:1});var pu;function G(){return pu||=new du,pu}function mu(){}x=mu.prototype=new S,x.constructor=mu;function hu(){}hu.prototype=x,new w().i(mu,`scala.collection.immutable.Map$`,{dW:1,dN:1,a:1});var gu;function _u(){return gu||=new mu,gu}function vu(e){this.fi=null,this.fi=e}x=vu.prototype=new Gc,x.constructor=vu;function yu(){}yu.prototype=x,x.aL=(function(){return(0,this.fi)()}),new w().i(vu,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eh:1,b9:1,az:1});function K(e){this.fj=null,this.fj=e}x=K.prototype=new qc,x.constructor=K;function bu(){}bu.prototype=x,x.h=(function(e){return(0,this.fj)(e)}),new w().i(K,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{ei:1,ba:1,e:1});var xu=new w().i(0,`scala.runtime.Nothing$`,{eo:1,u:1,a:1});function Su(){}x=Su.prototype=new S,x.constructor=Su;function Cu(){}Cu.prototype=x,x.hp=(function(e){return(t=>e.h(t))}),new w().i(Su,`scala.scalajs.js.Any$`,{et:1,eu:1,ev:1});var wu;function Tu(){return wu||=new Su,wu}function Eu(){}x=Eu.prototype=new Gc,x.constructor=Eu;function Du(){}Du.prototype=x;function Ou(){}x=Ou.prototype=new qc,x.constructor=Ou;function ku(){}ku.prototype=x;function Au(){}x=Au.prototype=new Yc,x.constructor=Au;function ju(){}ju.prototype=x;function Mu(){}x=Mu.prototype=new Zc,x.constructor=Mu;function Nu(){}Nu.prototype=x;function Pu(e,t,n,r){if(this.de=null,this.dc=!1,this.cd=null,this.dd=null,this.de=e,this.dc=t,this.cd=n,r===null)throw new Rd;this.dd=void 0}x=Pu.prototype=new S,x.constructor=Pu;function Fu(){}Fu.prototype=x,x.x=(function(){return xr(this)}),x.hZ=(function(e){try{this.de.h(e)}catch(e){var t=e instanceof Ec?e:new Z(e);this.dc?this.hY(new kf(t)):ll().b5(new kf(t))}}),x.hY=(function(e){try{this.cd.d2(e)?this.cd.h(e):ll().b5(e)}catch(n){var t=n instanceof Ec?n:new Z(n);ll().b5(new Af(t,e))}}),new w().i(Pu,`com.raquo.airstream.core.Observer$$anon$8`,{bg:1,bh:1,bd:1,be:1});function Iu(e){if(this.dr=null,this.ds=!1,this.gf=null,e===null)throw new Rd;Bi(this)}x=Iu.prototype=new S,x.constructor=Iu;function Lu(){}Lu.prototype=x,x.it=(function(){return this.ds||=(this.dr=new lc(`svg`,!1),!0),this.dr}),new w().i(Iu,`com.raquo.laminar.api.Laminar$svg$`,{bA:1,c2:1,bJ:1,bL:1});function Ru(){this.g=null,Bu=this,this.g=new vm}x=Ru.prototype=new S,x.constructor=Ru;function zu(){}zu.prototype=x,new w().i(Ru,`com.raquo.laminar.api.package$`,{bD:1,af:1,aj:1,ae:1});var Bu;function q(){return Bu||=new Ru,Bu}function Vu(e,t,n){return e.ad=t,e.ae=n,e}function Hu(){this.ad=null,this.ae=null}x=Hu.prototype=new Zi,x.constructor=Hu;function Uu(){}Uu.prototype=x,x.d=(function(e){return new ml(this,Wn(e),new vd(((e,t,n)=>{T().g9(e,t,n)})))});function Wu(e){this.ei=null,this.ct=null,this.ei=Y(),this.ct=T().gX(e)}x=Wu.prototype=new S,x.constructor=Wu;function Gu(){}Gu.prototype=x,x.ga=(function(e){this.ei=e}),x.gc=(function(e){}),x.ar=(function(e){ma().c2(e,this,void 0)}),x.iw=(function(){return this.ct.data}),x.bH=(function(){return this.ct}),new w().i(Wu,`com.raquo.laminar.nodes.TextNode`,{ct:1,a4:1,T:1,ak:1});function Ku(){}x=Ku.prototype=new S,x.constructor=Ku;function qu(){}qu.prototype=x;function Ju(e,t){return e===t}function Yu(e){return e?1231:1237}var Xu=new w().i(0,`java.lang.Boolean`,{cO:1,a:1,Q:1,M:1},(e=>typeof e==`boolean`));function Zu(e){return e}function Qu(e,t){return t instanceof zn&&e===t.c}var $u=new w().i(0,`java.lang.Character`,{as:1,a:1,Q:1,M:1},(e=>e instanceof zn)),ed=class extends W{};function td(){this.u=null,this.u=``}x=td.prototype=new S,x.constructor=td;function nd(){}nd.prototype=x,x.gH=(function(e){var t=Tc().hM(e,0,e.a.length);return this.u=``+this.u+t,this}),x.x=(function(){return this.u}),x.n=(function(){return this.u.length}),x.fG=(function(e){return this.u.charCodeAt(e)}),new w().i(td,`java.lang.StringBuilder`,{d3:1,a8:1,aq:1,a:1});function rd(){}x=rd.prototype=new S,x.constructor=rd;function id(){}id.prototype=x,x.x=(function(){return`<function1>`}),x.d2=(function(e){return!1}),x.gK=(function(e){throw new Kd(e)}),x.h=(function(e){this.gK(e)}),new w().i(rd,`scala.PartialFunction$$anon$1`,{dn:1,g:1,e:1,a:1});function ad(){}x=ad.prototype=new S,x.constructor=ad;function od(){}od.prototype=x,x.p=(function(){return this}),x.c5=(function(e){return this.bI(e,-1)}),x.bI=(function(e,t){return lu(this,e,t)}),x.x=(function(){return`<iterator>`}),x.br=(function(e,t,n,r){return as(this,e,t,n,r)}),x.C=(function(){return-1});function sd(e,t){return e.c0=t,e}function cd(){this.c0=null}x=cd.prototype=new S,x.constructor=cd;function ld(){}ld.prototype=x,x.ft=(function(e){return this.c0.cU(e)}),x.fW=(function(e){return this.c0.cZ(e)}),x.cZ=(function(e){return this.fW(e)}),x.cU=(function(e){return this.ft(e)});function ud(e,t){return t>=0&&e.au(t)>0}function dd(e){return e.au(0)===0}function fd(e,t){var n=e.C();if(n!==-1)var r=t.C(),i=r!==-1&&n!==r;else var i=!1;return i?!1:uu(e.p(),t)}function pd(e){this.fm=null,this.fm=e}x=pd.prototype=new Du,x.constructor=pd;function md(){}md.prototype=x,x.aL=(function(){return(0,this.fm)()}),new w().i(pd,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eA:1,ez:1,b9:1,az:1});function J(e){this.fn=null,this.fn=e}x=J.prototype=new ku,x.constructor=J;function hd(){}hd.prototype=x,x.h=(function(e){return(0,this.fn)(e)}),new w().i(J,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eC:1,eB:1,ba:1,e:1});function gd(e){this.gv=null,this.gv=e}x=gd.prototype=new ju,x.constructor=gd;function _d(){}_d.prototype=x,new w().i(gd,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eE:1,eD:1,ej:1,df:1});function vd(e){this.fo=null,this.fo=e}x=vd.prototype=new Nu,x.constructor=vd;function yd(){}yd.prototype=x,x.gJ=(function(e,t,n){return(0,this.fo)(e,t,n)}),new w().i(vd,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{eG:1,eF:1,ek:1,dg:1});function bd(e){e.cr=new fi(new pd((()=>{e.a4.fr()})),new pd((()=>{e.a4.gY()}))),e.aA=void 0}function xd(e,t,n){if(e.aA===void 0)e.aA=_i().a6(F().b(new(pl.r()).C([t])));else if(n){var r=e.aA;if(r===void 0){var i;throw new Vd(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aA;if(a===void 0){var o;throw new Vd(`undefined.get`)}else var o=a;o.push(t)}}function Sd(e,t){var n=e.aA;n!==void 0&&n.splice(t,1)}function Cd(e,t){var n=e.aA;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Hn(a,t))?r=!0:i=1+i|0}return r?i:-1}function wd(e,t){Ed(e,e.bV,t)&&Dd(e,t)}function Td(e,t){var n=e.bV;e.bV=t,Ed(e,n,t)||Dd(e,t)}function Ed(e,t,n){var r=!t.i()&&!t.A().c6().H.i(),i=!n.i()&&!n.A().c6().H.i();return r&&!i}function Dd(e,t){Od(e,t.i()?Y():new X(t.A().c6()))}function Od(e,t){if(t.i())e.cr.gT();else{var n=t.A();e.cr.ik(n)}}function kd(){}x=kd.prototype=new qu,x.constructor=kd;function Ad(){}Ad.prototype=x;var jd=class extends ed{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(jd,`java.lang.ArithmeticException`,{cN:1,R:1,L:1,u:1,a:1});var Md=new w().i(0,`java.lang.Byte`,{cP:1,U:1,a:1,Q:1,M:1},(e=>$n(e))),Nd=class extends ed{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(Nd,`java.lang.IllegalArgumentException`,{cT:1,R:1,L:1,u:1,a:1});function Pd(e,t){return R(e,t,null,!0,!0),e}var Fd=class extends ed{};new w().i(Fd,`java.lang.IndexOutOfBoundsException`,{au:1,R:1,L:1,u:1,a:1});function Id(){}x=Id.prototype=new qu,x.constructor=Id;function Ld(){}Ld.prototype=x,new w().i(Id,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cW:1,ap:1,an:1,ar:1,ao:1});var Rd=class extends ed{constructor(){super(),R(this,null,null,!0,!0)}};new w().i(Rd,`java.lang.NullPointerException`,{cX:1,R:1,L:1,u:1,a:1});var zd=new w().i(0,`java.lang.Short`,{cY:1,U:1,a:1,Q:1,M:1},(e=>er(e))),Bd=class extends ed{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(Bd,`java.lang.UnsupportedOperationException`,{d6:1,R:1,L:1,u:1,a:1});var Vd=class extends ed{constructor(e){super(),R(this,e,null,!0,!0)}};new w().i(Vd,`java.util.NoSuchElementException`,{da:1,R:1,L:1,u:1,a:1});function Hd(e){return e.cA||=(e.cB=e.bY===null?`null`:Gd(e),!0),e.cB}function Ud(e){return e.cA?e.cB:Hd(e)}function Wd(e){var t=e.bY;return`of class `+Vn(t)}function Gd(e){try{return e.bY+` (`+Wd(e)+`)`}catch{return`an instance `+Wd(e)}}var Kd=class extends ed{constructor(e){super(),this.cB=null,this.bY=null,this.cA=!1,this.bY=e,R(this,null,null,!0,!0)}bC(){return Ud(this)}};new w().i(Kd,`scala.MatchError`,{dj:1,R:1,L:1,u:1,a:1});function qd(){}x=qd.prototype=new S,x.constructor=qd;function Jd(){}Jd.prototype=x,x.i=(function(){return this===Y()}),x.C=(function(){return this.i()?0:1}),x.p=(function(){return this.i()?G().z:new nf(this.A())});function Yd(e){this.bj=0,this.fb=0,this.fa=null,this.fa=e,this.bj=0,this.fb=e.a1()}x=Yd.prototype=new od,x.constructor=Yd;function Xd(){}Xd.prototype=x,x.w=(function(){return this.bj<this.fb}),x.l=(function(){var e=this.fa.a2(this.bj);return this.bj=1+this.bj|0,e}),new w().i(Yd,`scala.Product$$anon$1`,{dq:1,r:1,s:1,b:1,c:1});function Zd(e){this.bZ=null,au(this,e)}x=Zd.prototype=new su,x.constructor=Zd;function Qd(){}Qd.prototype=x,new w().i(Zd,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dE:1,dD:1,a0:1,a:1,a9:1});function $d(e){return is(e,e.b1()+`(`,`, `,`)`)}function ef(){}x=ef.prototype=new od,x.constructor=ef;function tf(){}tf.prototype=x,x.w=(function(){return!1}),x.hO=(function(){throw new Vd(`next on empty iterator`)}),x.C=(function(){return 0}),x.bI=(function(e,t){return this}),x.l=(function(){this.hO()}),new w().i(ef,`scala.collection.Iterator$$anon$19`,{dJ:1,r:1,s:1,b:1,c:1});function nf(e){this.bl=!1,this.ff=null,this.ff=e,this.bl=!1}x=nf.prototype=new od,x.constructor=nf;function rf(){}rf.prototype=x,x.w=(function(){return!this.bl}),x.l=(function(){return this.bl?G().z.l():(this.bl=!0,this.ff)}),x.bI=(function(e,t){return this.bl||e>0||t===0?G().z:this}),new w().i(nf,`scala.collection.Iterator$$anon$20`,{dK:1,r:1,s:1,b:1,c:1});function af(e){for(;;){if(e.E instanceof sf){var t=e.E;e.E=t.E,e.ag=t.ag,t.P!==null&&(e.O===null&&(e.O=t.O),t.O.bm=e.P,e.P=t.P);continue}return}}function of(e){for(;;)if(e.P===null)return e.E=null,e.O=null,!1;else{if(e.E=e.P.hy(),e.O===e.P&&(e.O=e.O.bm),e.P=e.P.bm,af(e),e.ag)return!0;if(e.E!==null&&e.E.w())return e.ag=!0,!0}}function sf(e){this.E=null,this.P=null,this.O=null,this.ag=!1,this.E=e,this.P=null,this.O=null,this.ag=!1}x=sf.prototype=new od,x.constructor=sf;function cf(){}cf.prototype=x,x.w=(function(){return this.ag?!0:this.E===null?!1:this.E.w()?(this.ag=!0,!0):of(this)}),x.l=(function(){return this.w()?(this.ag=!1,this.E.l()):G().z.l()}),x.gU=(function(e){var t=new os(e,null);return this.P===null?(this.P=t,this.O=t):(this.O.bm=t,this.O=t),this.E===null&&(this.E=G().z),this}),new w().i(sf,`scala.collection.Iterator$ConcatIterator`,{aF:1,r:1,s:1,b:1,c:1});function lf(e){for(;e.a5>0;)e.ah.w()?(e.ah.l(),e.a5=-1+e.a5|0):e.a5=0}function uf(e,t){if(e.J<0)return-1;var n=e.J-t|0;return n<0?0:n}function df(e,t,n){this.ah=null,this.J=0,this.a5=0,this.ah=e,this.J=n,this.a5=t}x=df.prototype=new od,x.constructor=df;function ff(){}ff.prototype=x,x.C=(function(){var e=this.ah.C();if(e<0)return-1;var t=e-this.a5|0,n=t<0?0:t;if(this.J<0)return n;var r=this.J;return r<n?r:n}),x.w=(function(){return lf(this),this.J!==0&&this.ah.w()}),x.l=(function(){return lf(this),this.J>0?(this.J=-1+this.J|0,this.ah.l()):this.J<0?this.ah.l():G().z.l()}),x.bI=(function(e,t){var n=e>0?e:0;if(t<0)var r=uf(this,n);else if(t<=n)var r=0;else if(this.J<0)var r=t-n|0;else var i=uf(this,n),a=t-n|0,r=i<a?i:a;var o=this.a5+n|0;return r===0?G().z:o<0?(this.a5=2147483647,this.J=0,cu(this,new vu((()=>new df(this.ah,-2147483647+o|0,r))))):(this.a5=o,this.J=r,this)}),new w().i(df,`scala.collection.Iterator$SliceIterator`,{dM:1,r:1,s:1,b:1,c:1});function pf(e,t){return t>=0&&e.au(t)>0}function mf(e,t){if(t<0)throw Pd(new Fd,``+t);var n=e.h4(t);if(n.i())throw Pd(new Fd,``+t);return n.a7()}function hf(e,t){return mm(t)?gf(e,e,t):fd(e,t)}function gf(e,t,n){for(;;)if(t===n)return!0;else if(!t.i()&&!n.i()&&P().L(t.a7(),n.a7())){var r=t.X(),i=n.X();t=r,n=i}else return t.i()&&n.i()}function _f(e){this.bo=null,this.bo=e}x=_f.prototype=new od,x.constructor=_f;function vf(){}vf.prototype=x,x.w=(function(){return!this.bo.i()}),x.l=(function(){var e=this.bo.a7();return this.bo=this.bo.X(),e}),new w().i(_f,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{dR:1,r:1,s:1,b:1,c:1});function yf(){this.c0=null,sd(this,Of())}x=yf.prototype=new ld,x.constructor=yf;function bf(){}bf.prototype=x,new w().i(yf,`scala.collection.mutable.Buffer$`,{e1:1,dO:1,a9:1,a0:1,a:1});var xf;function Sf(){return xf||=new yf,xf}function Cf(e){this.bq=0,this.fk=0,this.fl=null,this.fl=e,this.bq=0,this.fk=e.a1()}x=Cf.prototype=new od,x.constructor=Cf;function wf(){}wf.prototype=x,x.w=(function(){return this.bq<this.fk}),x.l=(function(){var e=this.fl.a2(this.bq);return this.bq=1+this.bq|0,e}),new w().i(Cf,`scala.runtime.ScalaRunTime$$anon$1`,{er:1,r:1,s:1,b:1,c:1});function Tf(){}x=Tf.prototype=new S,x.constructor=Tf;function Ef(){}Ef.prototype=x,x.cU=(function(e){return this.fX(e)}),x.fX=(function(e){return Uc(Fh(new Ih),e).g7()}),x.cZ=(function(e){return this.fX(e)}),new w().i(Tf,`scala.scalajs.js.WrappedArray$`,{ex:1,dS:1,a9:1,a0:1,a:1});var Df;function Of(){return Df||=new Tf,Df}var kf=class e extends al{constructor(e){super(),this.b7=null,this.b7=e,R(this,`ObserverError: `+ll().c7(e),null,!0,!0)}av(){return new Yd(this)}r(){return z().cb(this,-889275714,!1)}k(t){if(this===t)return!0;if(t instanceof e){var n=this.b7,r=t.b7;return n===null?r===null:n.k(r)}else return!1}a1(){return 1}a3(){return`ObserverError`}a2(e){if(e===0)return this.b7;throw Pd(new Fd,``+e)}x(){return`ObserverError: `+this.b7}};new w().i(kf,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ab:1,a2:1,u:1,a:1,d:1,S:1});var Af=class e extends al{constructor(e,t){super(),this.b9=null,this.b8=null,this.b9=e,this.b8=t,R(this,`ObserverErrorHandlingError: `+ll().c7(e)+`; cause: `+ll().c7(t),null,!0,!0),this.hA(t)}av(){return new Yd(this)}r(){return z().cb(this,-889275714,!1)}k(t){if(this===t)return!0;if(t instanceof e){var n=this.b9,r=t.b9;if(n===null?r===null:n.k(r)){var i=this.b8,a=t.b8;return i===null?a===null:i.k(a)}else return!1}else return!1}a1(){return 2}a3(){return`ObserverErrorHandlingError`}a2(e){if(e===0)return this.b9;if(e===1)return this.b8;throw Pd(new Fd,``+e)}x(){return`ObserverErrorHandlingError: `+this.b9+`; cause: `+this.b8}};new w().i(Af,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ac:1,a2:1,u:1,a:1,d:1,S:1});var jf=class e extends al{constructor(e,t){super(),this.aN=null,this.aM=0,this.aN=e,this.aM=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}av(){return new Yd(this)}r(){var e=-889275714;return e=I().c(e,qf(`TransactionDepthExceeded`)),e=I().c(e,I().B(this.aN)),e=I().c(e,this.aM),I().o(e,2)}k(t){return this===t?!0:t instanceof e&&this.aM===t.aM?this.aN===t.aN:!1}a1(){return 2}a3(){return`TransactionDepthExceeded`}a2(e){if(e===0)return this.aN;if(e===1)return this.aM;throw Pd(new Fd,``+e)}x(){return`TransactionDepthExceeded: `+this.aN+`; maxDepth: `+this.aM}};new w().i(jf,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ad:1,a2:1,u:1,a:1,d:1,S:1});function Mf(e){this.ad=null,this.ae=null,this.dW=null,this.dX=!1,Vu(this,e,kh())}x=Mf.prototype=new Uu,x.constructor=Mf;function Nf(){}Nf.prototype=x,x.fH=(function(){return this.dX||=(this.dW=this.d(`column`),!0),this.dW}),new w().i(Mf,`com.raquo.laminar.defs.styles.StyleProps$$anon$30`,{bR:1,Y:1,t:1,V:1,W:1,bW:1});function Pf(e){this.ad=null,this.ae=null,this.dY=null,this.dZ=!1,Vu(this,e,kh())}x=Pf.prototype=new Uu,x.constructor=Pf;function Ff(){}Ff.prototype=x,x.ge=(function(){return this.dZ||=(this.dY=this.d(`wrap`),!0),this.dY}),new w().i(Pf,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{bS:1,Y:1,t:1,V:1,W:1,bY:1});function If(e,t){this.bV=null,this.a4=null,this.cr=null,this.aA=null,this.ef=null,this.M=null,this.ef=e,this.M=t,this.bV=Y(),ac(this),bd(this)}x=If.prototype=new S,x.constructor=If;function Lf(){}Lf.prototype=x,x.ar=(function(e){ma().c2(e,this,void 0)}),x.c6=(function(){return this.a4}),x.fJ=(function(e){this.a4=e}),x.gc=(function(e){wd(this,e)}),x.ga=(function(e){Td(this,e)}),x.x=(function(){return`ReactiveHtmlElement(`+(this.M===null?`tag=`+this.ef.d3():this.M.outerHTML)+`)`}),x.bH=(function(){return this.M});var Rf=new w().i(If,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cr:1,a4:1,T:1,ak:1,al:1,cp:1});function zf(e,t){return Object.is(e,t)}function Bf(e){return Ua().d4(e)}var Vf=new w().i(0,`java.lang.Double`,{at:1,U:1,a:1,Q:1,M:1,Z:1},(e=>typeof e==`number`)),Hf=new w().i(0,`java.lang.Float`,{cR:1,U:1,a:1,Q:1,M:1,Z:1},(e=>nr(e))),Uf=new w().i(0,`java.lang.Integer`,{cU:1,U:1,a:1,Q:1,M:1,Z:1},(e=>tr(e)));function Wf(e,t){return t instanceof j&&e.e===t.e&&e.f===t.f}function Gf(e){return e.e^e.f}var Kf=new w().i(0,`java.lang.Long`,{av:1,U:1,a:1,Q:1,M:1,Z:1},(e=>e instanceof j));function qf(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Jf(e,t){return e===t}var Yf=new w().i(0,`java.lang.String`,{d1:1,a:1,Q:1,a8:1,M:1,Z:1},(e=>typeof e==`string`)),Xf=class extends Fd{constructor(){super(),R(this,null,null,!0,!0)}};new w().i(Xf,`java.lang.StringIndexOutOfBoundsException`,{d4:1,au:1,R:1,L:1,u:1,a:1});function Zf(){}x=Zf.prototype=new Jd,x.constructor=Zf;function Qf(){}Qf.prototype=x,x.hq=(function(){throw new Vd(`None.get`)}),x.a3=(function(){return`None`}),x.a1=(function(){return 0}),x.a2=(function(e){return I().bD(e)}),x.av=(function(){return new Cf(this)}),x.r=(function(){return 2433880}),x.x=(function(){return`None`}),x.A=(function(){this.hq()}),new w().i(Zf,`scala.None$`,{dk:1,aA:1,b:1,S:1,d:1,a:1});var $f;function Y(){return $f||=new Zf,$f}function X(e){this.bk=null,this.bk=e}x=X.prototype=new Jd,x.constructor=X;function ep(){}ep.prototype=x,x.A=(function(){return this.bk}),x.a3=(function(){return`Some`}),x.a1=(function(){return 1}),x.a2=(function(e){return e===0?this.bk:I().bD(e)}),x.av=(function(){return new Cf(this)}),x.r=(function(){return z().cb(this,-889275714,!1)}),x.x=(function(){return F().gB(this)}),x.k=(function(e){return this===e||e instanceof X&&P().L(this.bk,e.bk)}),new w().i(X,`scala.Some`,{aB:1,aA:1,b:1,S:1,d:1,a:1});function tp(){}x=tp.prototype=new S,x.constructor=tp;function np(){}np.prototype=x,x.b1=(function(){return this.b6()}),x.a0=(function(e){rs(this,e)}),x.br=(function(e,t,n,r){return as(this,e,t,n,r)}),x.C=(function(){return-1});function rp(e,t){return e.I=t,e.j=0,e.D=Fo().b2(e.I),e}function ip(){this.I=null,this.j=0,this.D=0}x=ip.prototype=new od,x.constructor=ip;function ap(){}ap.prototype=x,x.C=(function(){return this.D-this.j|0}),x.w=(function(){return this.j<this.D}),x.l=(function(){this.j>=Fo().b2(this.I)&&G().z.l();var e=F().aZ(this.I,this.j);return this.j=1+this.j|0,e}),x.c5=(function(e){if(e>0){var t=this.j+e|0;if(t<0)var n=this.D;else var r=this.D,n=r<t?r:t;this.j=n}return this}),new w().i(ip,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function op(e,t){return t<0?0:t>e.S?e.S:t}function sp(e){this.fe=null,this.af=0,this.S=0,this.fe=e,this.af=0,this.S=e.n()}x=sp.prototype=new od,x.constructor=sp;function cp(){}cp.prototype=x,x.C=(function(){return this.S}),x.w=(function(){return this.S>0}),x.l=(function(){if(this.S>0){var e=this.fe.s(this.af);return this.af=1+this.af|0,this.S=-1+this.S|0,e}else return G().z.l()}),x.c5=(function(e){if(e>0){this.af=this.af+e|0;var t=this.S-e|0;this.S=t<0?0:t}return this}),x.bI=(function(e,t){var n=op(this,e),r=op(this,t)-n|0;return this.S=r<0?0:r,this.af=this.af+n|0,this}),new w().i(sp,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dH:1,r:1,s:1,b:1,c:1,a:1});function lp(e){return e.cN||=(e.cO=new Jm(new C(0)),!0),e.cO}function up(e){return e.cN?e.cO:lp(e)}function dp(){this.cO=null,this.gt=null,this.cN=!1,pp=this,this.gt=new Zd(this)}x=dp.prototype=new S,x.constructor=dp;function fp(){}fp.prototype=x,x.hn=(function(e,t){return e instanceof jm?e:this.iC(Ac().fV(e,t))}),x.iC=(function(e){if(e===null)return null;if(e instanceof C)return new Jm(e);if(e instanceof fr)return new Wm(e);if(e instanceof hr)return new Bm(e);if(e instanceof pr)return new Km(e);if(e instanceof mr)return new Hm(e);if(e instanceof lr)return new Rm(e);if(e instanceof ur)return new Im(e);if(e instanceof dr)return new Xm(e);if(e instanceof cr)return new Pm(e);if(ko(e,1))return new Qm(e);throw new Kd(e)}),x.cY=(function(e,t){return this.hn(e,t)}),new w().i(dp,`scala.collection.immutable.ArraySeq$`,{dV:1,aH:1,aD:1,aC:1,aE:1,a:1});var pp;function mp(){return pp||=new dp,pp}function hp(){this.gu=null,this.fh=null,_p=this,this.gu=new Zd(this),this.fh=new vh(new C(0))}x=hp.prototype=new S,x.constructor=hp;function gp(){}gp.prototype=x,x.ho=(function(e,t){return this.hH(Ac().fV(e,t))}),x.hH=(function(e){if(e===null)return null;if(e instanceof C)return new vh(e);if(e instanceof fr)return new mh(e);if(e instanceof hr)return new uh(e);if(e instanceof pr)return new gh(e);if(e instanceof mr)return new fh(e);if(e instanceof lr)return new ch(e);if(e instanceof ur)return new oh(e);if(e instanceof dr)return new bh(e);if(e instanceof cr)return new ih(e);if(ko(e,1))return new Sh(e);throw new Kd(e)}),x.cY=(function(e,t){return this.ho(e,t)}),new w().i(hp,`scala.collection.mutable.ArraySeq$`,{dZ:1,aH:1,aD:1,aC:1,aE:1,a:1});var _p;function vp(){return _p||=new hp,_p}function yp(e){this.ad=null,this.ae=null,this.dS=null,this.dT=!1,Vu(this,e,kh())}x=yp.prototype=new Uu,x.constructor=yp;function bp(){}bp.prototype=x,x.cX=(function(){return this.dT||=(this.dS=this.d(`flex`),!0),this.dS}),new w().i(yp,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{bP:1,Y:1,t:1,V:1,W:1,ag:1,bV:1});function xp(e){this.ad=null,this.ae=null,this.dU=null,this.dV=!1,Vu(this,e,kh())}x=xp.prototype=new Uu,x.constructor=xp;function Sp(){}Sp.prototype=x,x.gS=(function(){return this.dV||=(this.dU=this.d(`center`),!0),this.dU}),new w().i(xp,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{bQ:1,Y:1,t:1,V:1,W:1,c0:1,bX:1});function Cp(e){this.ad=null,this.ae=null,this.e0=null,this.e1=!1,Vu(this,e,kh())}x=Cp.prototype=new Uu,x.constructor=Cp;function wp(){}wp.prototype=x,x.bG=(function(){return this.e1||=(this.e0=Rs(this),!0),this.e0}),new w().i(Cp,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{bT:1,Y:1,t:1,V:1,W:1,ah:1,ai:1});function Tp(){}x=Tp.prototype=new Ad,x.constructor=Tp;function Ep(){}Ep.prototype=x;function Dp(e){this.I=null,this.j=0,this.D=0,this.cD=null,this.cD=e,rp(this,e)}x=Dp.prototype=new ap,x.constructor=Dp;function Op(){}Op.prototype=x,x.hP=(function(){this.j>=this.cD.a.length&&G().z.l();var e=this.cD.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hP()}),new w().i(Dp,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{du:1,N:1,r:1,s:1,b:1,c:1,a:1});function kp(e){this.I=null,this.j=0,this.D=0,this.cE=null,this.cE=e,rp(this,e)}x=kp.prototype=new ap,x.constructor=kp;function Ap(){}Ap.prototype=x,x.hQ=(function(){this.j>=this.cE.a.length&&G().z.l();var e=this.cE.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return rr(this.hQ())}),new w().i(kp,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dv:1,N:1,r:1,s:1,b:1,c:1,a:1});function jp(e){this.I=null,this.j=0,this.D=0,this.cF=null,this.cF=e,rp(this,e)}x=jp.prototype=new ap,x.constructor=jp;function Mp(){}Mp.prototype=x,x.hR=(function(){this.j>=this.cF.a.length&&G().z.l();var e=this.cF.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hR()}),new w().i(jp,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dw:1,N:1,r:1,s:1,b:1,c:1,a:1});function Np(e){this.I=null,this.j=0,this.D=0,this.cG=null,this.cG=e,rp(this,e)}x=Np.prototype=new ap,x.constructor=Np;function Pp(){}Pp.prototype=x,x.hS=(function(){this.j>=this.cG.a.length&&G().z.l();var e=this.cG.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hS()}),new w().i(Np,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dx:1,N:1,r:1,s:1,b:1,c:1,a:1});function Fp(e){this.I=null,this.j=0,this.D=0,this.cH=null,this.cH=e,rp(this,e)}x=Fp.prototype=new ap,x.constructor=Fp;function Ip(){}Ip.prototype=x,x.hT=(function(){this.j>=this.cH.a.length&&G().z.l();var e=this.cH.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hT()}),new w().i(Fp,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dy:1,N:1,r:1,s:1,b:1,c:1,a:1});function Lp(e){this.I=null,this.j=0,this.D=0,this.cI=null,this.cI=e,rp(this,e)}x=Lp.prototype=new ap,x.constructor=Lp;function Rp(){}Rp.prototype=x,x.hU=(function(){this.j>=this.cI.a.length&&G().z.l();var e=this.cI.a[this.j],t=e.e,n=e.f;return this.j=1+this.j|0,new j(t,n)}),x.l=(function(){return this.hU()}),new w().i(Lp,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dz:1,N:1,r:1,s:1,b:1,c:1,a:1});function zp(e){this.I=null,this.j=0,this.D=0,this.cJ=null,this.cJ=e,rp(this,e)}x=zp.prototype=new ap,x.constructor=zp;function Bp(){}Bp.prototype=x,x.hV=(function(){this.j>=this.cJ.a.length&&G().z.l();var e=this.cJ.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hV()}),new w().i(zp,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dA:1,N:1,r:1,s:1,b:1,c:1,a:1});function Vp(e){this.I=null,this.j=0,this.D=0,this.fd=null,this.fd=e,rp(this,e)}x=Vp.prototype=new ap,x.constructor=Vp;function Hp(){}Hp.prototype=x,x.hW=(function(){this.j>=this.fd.a.length&&G().z.l(),this.j=1+this.j|0}),x.l=(function(){this.hW()}),new w().i(Vp,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dB:1,N:1,r:1,s:1,b:1,c:1,a:1});function Up(e){this.I=null,this.j=0,this.D=0,this.cK=null,this.cK=e,rp(this,e)}x=Up.prototype=new ap,x.constructor=Up;function Wp(){}Wp.prototype=x,x.hX=(function(){this.j>=this.cK.a.length&&G().z.l();var e=this.cK.a[this.j];return this.j=1+this.j|0,e}),x.l=(function(){return this.hX()}),new w().i(Up,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dC:1,N:1,r:1,s:1,b:1,c:1,a:1});function Gp(e){return e.b1()+`(<not computed>)`}function Kp(){}x=Kp.prototype=new S,x.constructor=Kp;function qp(){}qp.prototype=x;var Z=class e extends ed{constructor(e){super(),this.T=null,this.T=e,R(this,null,null,!0,!0)}bC(){return Wn(this.T)}a3(){return`JavaScriptException`}a1(){return 1}a2(e){return e===0?this.T:I().bD(e)}av(){return new Cf(this)}r(){return z().cb(this,-889275714,!1)}k(t){return this===t||t instanceof e&&P().L(this.T,t.T)}};new w().i(Z,`scala.scalajs.js.JavaScriptException`,{bb:1,R:1,L:1,u:1,a:1,S:1,d:1});function Jp(e,t){typeof console<`u`&&(e.f2&&console.error?console.error(t):console.log(t))}function Yp(e){this.f2=!1,this.bh=null,this.f2=e,new Id,this.bh=``}x=Yp.prototype=new Ep,x.constructor=Yp;function Xp(){}Xp.prototype=x,x.hD=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bh=``+this.bh+t,t=``;else{var r=this.bh,i=t;Jp(this,``+r+i.substring(0,n)),this.bh=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new w().i(Yp,`java.lang.JSConsoleBasedPrintStream`,{cV:1,cM:1,cL:1,ap:1,an:1,ar:1,ao:1,aq:1});function Zp(e,t,n){for(;;)if(t<=0||n.i())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function Qp(){this.cP=null}x=Qp.prototype=new qp,x.constructor=Qp;function $p(){}$p.prototype=x,x.x=(function(){return this.cP}),x.k=(function(e){return this===e}),x.r=(function(){return Qn(this)});function em(e){this.ad=null,this.ae=null,this.e2=null,this.e3=!1,Vu(this,e,kh())}x=em.prototype=new Uu,x.constructor=em;function tm(){}tm.prototype=x,x.bG=(function(){return this.e3||=(this.e2=Rs(this),!0),this.e2}),new w().i(em,`com.raquo.laminar.defs.styles.StyleProps$$anon$7`,{bU:1,Y:1,t:1,V:1,W:1,ah:1,ai:1,bZ:1,ag:1});function nm(){}x=nm.prototype=new np,x.constructor=nm;function rm(){}rm.prototype=x,x.x=(function(){return Gp(this)});function im(){this.cP=null,this.cP=`Any`}x=im.prototype=new $p,x.constructor=im;function am(){}am.prototype=x,x.ie=(function(){return gr.l()}),x.hN=(function(e){return new C(e)}),new w().i(im,`scala.reflect.ManifestFactory$AnyManifest$`,{ed:1,ef:1,ee:1,ec:1,eb:1,ea:1,eg:1,a:1,d:1});var om;function sm(){return om||=new im,om}function Q(e,t){return e===t?!0:cm(t)&&t.fF(e)?e.d7(t):!1}function cm(e){return!!(e&&e.$classData&&e.$classData.n.f)}function lm(){}x=lm.prototype=new np,x.constructor=lm;function um(){}um.prototype=x,x.fF=(function(e){return!0}),x.k=(function(e){return Q(this,e)}),x.r=(function(){return z().ig(this)}),x.x=(function(){return $d(this)}),x.g0=(function(e){return ud(this,e)}),x.i=(function(){return dd(this)}),x.d7=(function(e){return fd(this,e)}),x.d2=(function(e){return this.g0(e|0)});function dm(){}x=dm.prototype=new rm,x.constructor=dm;function fm(){}fm.prototype=x;function pm(e){return!!(e&&e.$classData&&e.$classData.n.n)}function mm(e){return!!(e&&e.$classData&&e.$classData.n.a1)}function hm(e,t){return e.bn=t,e}function gm(){this.bn=null}x=gm.prototype=new fm,x.constructor=gm;function _m(){}_m.prototype=x,x.s=(function(e){return this.bn.s(e)}),x.n=(function(){return this.bn.n()}),x.i=(function(){return this.bn.i()});function vm(){this.dw=null,this.dx=!1,this.dG=null,this.dH=!1,this.dA=null,this.dB=!1,this.dQ=null,this.dR=!1,this.dM=null,this.dN=!1,this.du=null,this.dv=!1,this.dy=null,this.dz=!1,this.dC=null,this.dD=!1,this.dE=null,this.dF=!1,this.dI=null,this.dJ=!1,this.dK=null,this.dL=!1,this.gh=null,this.dt=null,this.gg=null,this.dO=null,this.dP=!1,Ri(this),Ni(this),ji(this),Mi(this)}x=vm.prototype=new S,x.constructor=vm;function ym(){}ym.prototype=x,x.gP=(function(){return this.dx||=(this.dw=oc(new sc,`br`,!0),!0),this.dw}),x.hm=(function(){return this.dH||=(this.dG=oc(new sc,`form`,!1),!0),this.dG}),x.cW=(function(){return this.dB||=(this.dA=oc(new sc,`div`,!1),!0),this.dA}),x.bK=(function(){return this.dR||=(this.dQ=new Gs(`value`,E().ab),!0),this.dQ}),x.i0=(function(){return this.dN||=(this.dM=new Vs(`submit`),!0),this.dM}),x.gF=(function(){return this.dv||=(this.du=new xp(`align-items`),!0),this.du}),x.cV=(function(){return this.dz||=(this.dy=new yp(`display`),!0),this.dy}),x.fT=(function(){return this.dD||=(this.dC=new Mf(`flex-direction`),!0),this.dC}),x.fU=(function(){return this.dF||=(this.dE=new Pf(`flex-wrap`),!0),this.dE}),x.d0=(function(){return this.dJ||=(this.dI=new Cp(`gap`),!0),this.dI}),x.hI=(function(){return this.dL||=(this.dK=new em(`max-width`),!0),this.dK}),x.is=(function(){return this.dP||=(this.dO=new Iu(this),!0),this.dO}),new w().i(vm,`com.raquo.laminar.api.package$$anon$1`,{bE:1,c1:1,bI:1,bN:1,bM:1,bO:1,bK:1,bC:1,by:1,bB:1,af:1,aj:1,ae:1,bz:1});function bm(e){this.bn=null,hm(this,e)}x=bm.prototype=new _m,x.constructor=bm;function xm(){}xm.prototype=x,x.p=(function(){return new sp(this)}),x.b6=(function(){return`IndexedSeqView`}),x.au=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),x.C=(function(){return this.n()}),new w().i(bm,`scala.collection.IndexedSeqView$Id`,{dG:1,dQ:1,dr:1,ds:1,h:1,i:1,b:1,k:1,c:1,j:1,dT:1,a:1,dP:1,l:1,dF:1,o:1});function Sm(){}x=Sm.prototype=new um,x.constructor=Sm;function Cm(){}Cm.prototype=x;function wm(e,t){return!Em(t)||e.n()===t.n()}function Tm(e,t){if(Em(t)){if(e===t)return!0;var n=e.n(),r=n===t.n();if(r){var i=0,a=e.fu(),o=t.fu(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=P().L(e.s(i),t.s(i)),i=1+i|0;if(i<n&&r)for(var p=e.p().c5(i),m=t.p().c5(i);r&&p.w();)r=P().L(p.l(),m.l())}return r}else return fd(e,t)}function Em(e){return!!(e&&e.$classData&&e.$classData.n.x)}function Dm(){}x=Dm.prototype=new um,x.constructor=Dm;function Om(){}Om.prototype=x;function km(){}x=km.prototype=new Om,x.constructor=km;function Am(){}Am.prototype=x,x.fs=(function(e){return Uc(this,e)});function jm(){}x=jm.prototype=new Cm,x.constructor=jm;function Mm(){}Mm.prototype=x,x.fF=(function(e){return wm(this,e)}),x.d7=(function(e){return Tm(this,e)}),x.b6=(function(){return`IndexedSeq`}),x.au=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),x.C=(function(){return this.n()}),x.b1=(function(){return`ArraySeq`}),x.fu=(function(){return 2147483647});function $(){}x=$.prototype=new Om,x.constructor=$;function Nm(){}Nm.prototype=x,x.b6=(function(){return`IndexedSeq`}),x.au=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),x.C=(function(){return this.n()}),x.b1=(function(){return`ArraySeq`}),x.k=(function(e){return e instanceof $&&Fo().b2(this.U())!==Fo().b2(e.U())?!1:Q(this,e)});function Pm(e){this.aB=null,this.aB=e}x=Pm.prototype=new Mm,x.constructor=Pm;function Fm(){}Fm.prototype=x,x.n=(function(){return this.aB.a.length}),x.r=(function(){var e=z();return e.fE(this.aB,e.y)}),x.k=(function(e){return e instanceof Pm?A().fR(this.aB,e.aB):Q(this,e)}),x.p=(function(){return new Up(this.aB)}),x.bA=(function(e){return this.aB.a[e]}),x.h=(function(e){return this.bA(e|0)}),x.s=(function(e){return this.bA(e)}),new w().i(Pm,`scala.collection.immutable.ArraySeq$ofBoolean`,{aK:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Im(e){this.aC=null,this.aC=e}x=Im.prototype=new Mm,x.constructor=Im;function Lm(){}Lm.prototype=x,x.n=(function(){return this.aC.a.length}),x.bs=(function(e){return this.aC.a[e]}),x.r=(function(){var e=z();return e.fw(this.aC,e.y)}),x.k=(function(e){return e instanceof Im?A().fK(this.aC,e.aC):Q(this,e)}),x.p=(function(){return new Dp(this.aC)}),x.h=(function(e){return this.bs(e|0)}),x.s=(function(e){return this.bs(e)}),new w().i(Im,`scala.collection.immutable.ArraySeq$ofByte`,{aL:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Rm(e){this.ai=null,this.ai=e}x=Rm.prototype=new Mm,x.constructor=Rm;function zm(){}zm.prototype=x,x.n=(function(){return this.ai.a.length}),x.bt=(function(e){return this.ai.a[e]}),x.r=(function(){var e=z();return e.fx(this.ai,e.y)}),x.k=(function(e){return e instanceof Rm?A().fL(this.ai,e.ai):Q(this,e)}),x.p=(function(){return new kp(this.ai)}),x.br=(function(e,t,n,r){return new ch(this.ai).br(e,t,n,r)}),x.h=(function(e){return rr(this.bt(e|0))}),x.s=(function(e){return rr(this.bt(e))}),new w().i(Rm,`scala.collection.immutable.ArraySeq$ofChar`,{aM:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Bm(e){this.aD=null,this.aD=e}x=Bm.prototype=new Mm,x.constructor=Bm;function Vm(){}Vm.prototype=x,x.n=(function(){return this.aD.a.length}),x.r=(function(){var e=z();return e.fy(this.aD,e.y)}),x.k=(function(e){return e instanceof Bm?A().fM(this.aD,e.aD):Q(this,e)}),x.p=(function(){return new jp(this.aD)}),x.bv=(function(e){return this.aD.a[e]}),x.h=(function(e){return this.bv(e|0)}),x.s=(function(e){return this.bv(e)}),new w().i(Bm,`scala.collection.immutable.ArraySeq$ofDouble`,{aN:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Hm(e){this.aE=null,this.aE=e}x=Hm.prototype=new Mm,x.constructor=Hm;function Um(){}Um.prototype=x,x.n=(function(){return this.aE.a.length}),x.r=(function(){var e=z();return e.fz(this.aE,e.y)}),x.k=(function(e){return e instanceof Hm?A().fN(this.aE,e.aE):Q(this,e)}),x.p=(function(){return new Np(this.aE)}),x.bw=(function(e){return this.aE.a[e]}),x.h=(function(e){return this.bw(e|0)}),x.s=(function(e){return this.bw(e)}),new w().i(Hm,`scala.collection.immutable.ArraySeq$ofFloat`,{aO:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Wm(e){this.aF=null,this.aF=e}x=Wm.prototype=new Mm,x.constructor=Wm;function Gm(){}Gm.prototype=x,x.n=(function(){return this.aF.a.length}),x.r=(function(){var e=z();return e.fA(this.aF,e.y)}),x.k=(function(e){return e instanceof Wm?A().fO(this.aF,e.aF):Q(this,e)}),x.p=(function(){return new Fp(this.aF)}),x.bx=(function(e){return this.aF.a[e]}),x.h=(function(e){return this.bx(e|0)}),x.s=(function(e){return this.bx(e)}),new w().i(Wm,`scala.collection.immutable.ArraySeq$ofInt`,{aP:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Km(e){this.aG=null,this.aG=e}x=Km.prototype=new Mm,x.constructor=Km;function qm(){}qm.prototype=x,x.n=(function(){return this.aG.a.length}),x.r=(function(){var e=z();return e.fB(this.aG,e.y)}),x.k=(function(e){return e instanceof Km?A().fP(this.aG,e.aG):Q(this,e)}),x.p=(function(){return new Lp(this.aG)}),x.by=(function(e){return this.aG.a[e]}),x.h=(function(e){return this.by(e|0)}),x.s=(function(e){return this.by(e)}),new w().i(Km,`scala.collection.immutable.ArraySeq$ofLong`,{aQ:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Jm(e){this.aH=null,this.aH=e}x=Jm.prototype=new Mm,x.constructor=Jm;function Ym(){}Ym.prototype=x,x.n=(function(){return this.aH.a.length}),x.s=(function(e){return this.aH.a[e]}),x.r=(function(){var e=z();return e.fv(this.aH,e.y)}),x.k=(function(e){return e instanceof Jm?Ac().fS(this.aH,e.aH):Q(this,e)}),x.p=(function(){return rp(new ip,this.aH)}),x.h=(function(e){return this.s(e|0)}),new w().i(Jm,`scala.collection.immutable.ArraySeq$ofRef`,{aR:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Xm(e){this.aI=null,this.aI=e}x=Xm.prototype=new Mm,x.constructor=Xm;function Zm(){}Zm.prototype=x,x.n=(function(){return this.aI.a.length}),x.bu=(function(e){return this.aI.a[e]}),x.r=(function(){var e=z();return e.fC(this.aI,e.y)}),x.k=(function(e){return e instanceof Xm?A().fQ(this.aI,e.aI):Q(this,e)}),x.p=(function(){return new zp(this.aI)}),x.h=(function(e){return this.bu(e|0)}),x.s=(function(e){return this.bu(e)}),new w().i(Xm,`scala.collection.immutable.ArraySeq$ofShort`,{aS:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function Qm(e){this.aW=null,this.aW=e}x=Qm.prototype=new Mm,x.constructor=Qm;function $m(){}$m.prototype=x,x.n=(function(){return this.aW.a.length}),x.r=(function(){var e=z();return e.fD(this.aW,e.y)}),x.k=(function(e){return e instanceof Qm?this.aW.a.length===e.aW.a.length:Q(this,e)}),x.p=(function(){return new Vp(this.aW)}),x.bz=(function(e){}),x.h=(function(e){this.bz(e|0)}),x.s=(function(e){this.bz(e)}),new w().i(Qm,`scala.collection.immutable.ArraySeq$ofUnit`,{aT:1,J:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,x:1,n:1,o:1,P:1,B:1,q:1,p:1,O:1,a:1});function eh(e,t,n,r){for(;;)if(t===r)return n.i()?0:1;else if(n.i())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function th(e,t,n){for(;;)if(t===n)return!0;else{var r=t.i(),i=n.i();if(!(r||i)&&P().L(t.a7(),n.a7())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function nh(){}x=nh.prototype=new Cm,x.constructor=nh;function rh(){}rh.prototype=x,x.p=(function(){return new _f(this)}),x.b6=(function(){return`LinearSeq`}),x.g0=(function(e){return pf(this,e)}),x.s=(function(e){return mf(this,e)}),x.d7=(function(e){return hf(this,e)}),x.i=(function(){return this===kh()}),x.a0=(function(e){for(var t=this;!t.i();)e.h(t.a7()),t=t.X()}),x.n=(function(){for(var e=this,t=0;!e.i();)t=1+t|0,e=e.X();return t}),x.au=(function(e){return e<0?1:eh(this,0,this,e)}),x.b1=(function(){return`List`}),x.k=(function(e){return e instanceof nh?th(this,this,e):Q(this,e)}),x.h=(function(e){return mf(this,e|0)}),x.d2=(function(e){return pf(this,e|0)}),x.h4=(function(e){return Zp(this,e,this)});function ih(e){this.aj=null,this.aj=e}x=ih.prototype=new Nm,x.constructor=ih;function ah(){}ah.prototype=x,x.n=(function(){return this.aj.a.length}),x.r=(function(){var e=z();return e.fE(this.aj,e.y)}),x.k=(function(e){return e instanceof ih?A().fR(this.aj,e.aj):$.prototype.k.call(this,e)}),x.p=(function(){return new Up(this.aj)}),x.bA=(function(e){return this.aj.a[e]}),x.h=(function(e){return this.bA(e|0)}),x.s=(function(e){return this.bA(e)}),x.U=(function(){return this.aj}),new w().i(ih,`scala.collection.mutable.ArraySeq$ofBoolean`,{aW:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function oh(e){this.ak=null,this.ak=e}x=oh.prototype=new Nm,x.constructor=oh;function sh(){}sh.prototype=x,x.n=(function(){return this.ak.a.length}),x.bs=(function(e){return this.ak.a[e]}),x.r=(function(){var e=z();return e.fw(this.ak,e.y)}),x.k=(function(e){return e instanceof oh?A().fK(this.ak,e.ak):$.prototype.k.call(this,e)}),x.p=(function(){return new Dp(this.ak)}),x.h=(function(e){return this.bs(e|0)}),x.s=(function(e){return this.bs(e)}),x.U=(function(){return this.ak}),new w().i(oh,`scala.collection.mutable.ArraySeq$ofByte`,{aX:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function ch(e){this.Q=null,this.Q=e}x=ch.prototype=new Nm,x.constructor=ch;function lh(){}lh.prototype=x,x.n=(function(){return this.Q.a.length}),x.bt=(function(e){return this.Q.a[e]}),x.r=(function(){var e=z();return e.fx(this.Q,e.y)}),x.k=(function(e){return e instanceof ch?A().fL(this.Q,e.Q):$.prototype.k.call(this,e)}),x.p=(function(){return new kp(this.Q)}),x.br=(function(e,t,n,r){var i=e.K;t.length!==0&&(i.u=``+i.u+t);var a=this.Q.a.length;if(a!==0)if(n===``)i.gH(this.Q);else{i.n();var o=this.Q.a[0],s=``+Jn(o);i.u+=s;for(var c=1;c<a;){i.u=``+i.u+n;var l=this.Q.a[c],u=``+Jn(l);i.u+=u,c=1+c|0}}return r.length!==0&&(i.u=``+i.u+r),e}),x.h=(function(e){return rr(this.bt(e|0))}),x.s=(function(e){return rr(this.bt(e))}),x.U=(function(){return this.Q}),new w().i(ch,`scala.collection.mutable.ArraySeq$ofChar`,{aY:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function uh(e){this.al=null,this.al=e}x=uh.prototype=new Nm,x.constructor=uh;function dh(){}dh.prototype=x,x.n=(function(){return this.al.a.length}),x.r=(function(){var e=z();return e.fy(this.al,e.y)}),x.k=(function(e){return e instanceof uh?A().fM(this.al,e.al):$.prototype.k.call(this,e)}),x.p=(function(){return new jp(this.al)}),x.bv=(function(e){return this.al.a[e]}),x.h=(function(e){return this.bv(e|0)}),x.s=(function(e){return this.bv(e)}),x.U=(function(){return this.al}),new w().i(uh,`scala.collection.mutable.ArraySeq$ofDouble`,{aZ:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function fh(e){this.am=null,this.am=e}x=fh.prototype=new Nm,x.constructor=fh;function ph(){}ph.prototype=x,x.n=(function(){return this.am.a.length}),x.r=(function(){var e=z();return e.fz(this.am,e.y)}),x.k=(function(e){return e instanceof fh?A().fN(this.am,e.am):$.prototype.k.call(this,e)}),x.p=(function(){return new Np(this.am)}),x.bw=(function(e){return this.am.a[e]}),x.h=(function(e){return this.bw(e|0)}),x.s=(function(e){return this.bw(e)}),x.U=(function(){return this.am}),new w().i(fh,`scala.collection.mutable.ArraySeq$ofFloat`,{b0:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function mh(e){this.an=null,this.an=e}x=mh.prototype=new Nm,x.constructor=mh;function hh(){}hh.prototype=x,x.n=(function(){return this.an.a.length}),x.r=(function(){var e=z();return e.fA(this.an,e.y)}),x.k=(function(e){return e instanceof mh?A().fO(this.an,e.an):$.prototype.k.call(this,e)}),x.p=(function(){return new Fp(this.an)}),x.bx=(function(e){return this.an.a[e]}),x.h=(function(e){return this.bx(e|0)}),x.s=(function(e){return this.bx(e)}),x.U=(function(){return this.an}),new w().i(mh,`scala.collection.mutable.ArraySeq$ofInt`,{b1:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function gh(e){this.ao=null,this.ao=e}x=gh.prototype=new Nm,x.constructor=gh;function _h(){}_h.prototype=x,x.n=(function(){return this.ao.a.length}),x.r=(function(){var e=z();return e.fB(this.ao,e.y)}),x.k=(function(e){return e instanceof gh?A().fP(this.ao,e.ao):$.prototype.k.call(this,e)}),x.p=(function(){return new Lp(this.ao)}),x.by=(function(e){return this.ao.a[e]}),x.h=(function(e){return this.by(e|0)}),x.s=(function(e){return this.by(e)}),x.U=(function(){return this.ao}),new w().i(gh,`scala.collection.mutable.ArraySeq$ofLong`,{b2:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function vh(e){this.ap=null,this.ap=e}x=vh.prototype=new Nm,x.constructor=vh;function yh(){}yh.prototype=x,x.n=(function(){return this.ap.a.length}),x.s=(function(e){return this.ap.a[e]}),x.r=(function(){var e=z();return e.fv(this.ap,e.y)}),x.k=(function(e){return e instanceof vh?Ac().fS(this.ap,e.ap):$.prototype.k.call(this,e)}),x.p=(function(){return rp(new ip,this.ap)}),x.h=(function(e){return this.s(e|0)}),x.U=(function(){return this.ap}),new w().i(vh,`scala.collection.mutable.ArraySeq$ofRef`,{b3:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function bh(e){this.aq=null,this.aq=e}x=bh.prototype=new Nm,x.constructor=bh;function xh(){}xh.prototype=x,x.n=(function(){return this.aq.a.length}),x.bu=(function(e){return this.aq.a[e]}),x.r=(function(){var e=z();return e.fC(this.aq,e.y)}),x.k=(function(e){return e instanceof bh?A().fQ(this.aq,e.aq):$.prototype.k.call(this,e)}),x.p=(function(){return new zp(this.aq)}),x.h=(function(e){return this.bu(e|0)}),x.s=(function(e){return this.bu(e)}),x.U=(function(){return this.aq}),new w().i(bh,`scala.collection.mutable.ArraySeq$ofShort`,{b4:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function Sh(e){this.aJ=null,this.aJ=e}x=Sh.prototype=new Nm,x.constructor=Sh;function Ch(){}Ch.prototype=x,x.n=(function(){return this.aJ.a.length}),x.r=(function(){var e=z();return e.fD(this.aJ,e.y)}),x.k=(function(e){return e instanceof Sh?this.aJ.a.length===e.aJ.a.length:$.prototype.k.call(this,e)}),x.p=(function(){return new Vp(this.aJ)}),x.bz=(function(e){}),x.h=(function(e){this.bz(e|0)}),x.s=(function(e){this.bz(e)}),x.U=(function(){return this.aJ}),new w().i(Sh,`scala.collection.mutable.ArraySeq$ofUnit`,{b5:1,K:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,E:1,n:1,o:1,F:1,q:1,p:1,a:1});function wh(e,t){this.cL=null,this.cM=null,this.cL=e,this.cM=t}x=wh.prototype=new rh,x.constructor=wh;function Th(){}Th.prototype=x,x.a7=(function(){return this.cL}),x.a3=(function(){return`::`}),x.a1=(function(){return 2}),x.a2=(function(e){switch(e){case 0:return this.cL;case 1:return this.cM;default:return I().bD(e)}}),x.av=(function(){return new Cf(this)}),x.X=(function(){return this.cM}),new w().i(wh,`scala.collection.immutable.$colon$colon`,{dU:1,aa:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aU:1,a1:1,aG:1,aV:1,aI:1,q:1,p:1,B:1,aJ:1,a:1,S:1});function Eh(){}x=Eh.prototype=new rh,x.constructor=Eh;function Dh(){}Dh.prototype=x,x.hx=(function(){throw new Vd(`head of empty list`)}),x.iv=(function(){throw new Bd(`tail of empty list`)}),x.C=(function(){return 0}),x.p=(function(){return G().z}),x.a3=(function(){return`Nil`}),x.a1=(function(){return 0}),x.a2=(function(e){return I().bD(e)}),x.av=(function(){return new Cf(this)}),x.X=(function(){this.iv()}),x.a7=(function(){this.hx()}),new w().i(Eh,`scala.collection.immutable.Nil$`,{dX:1,aa:1,w:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,z:1,y:1,A:1,aU:1,a1:1,aG:1,aV:1,aI:1,q:1,p:1,B:1,aJ:1,a:1,S:1});var Oh;function kh(){return Oh||=new Eh,Oh}function Ah(e,t){return e.K=t,e}function jh(e){return Ah(e,new td),e}function Mh(){this.K=null}x=Mh.prototype=new Om,x.constructor=Mh;function Nh(){}Nh.prototype=x,x.b6=(function(){return`IndexedSeq`}),x.p=(function(){return new sp(new bm(this))}),x.au=(function(e){var t=this.K.n();return t===e?0:t<e?-1:1}),x.fs=(function(e){return Uc(this,e)}),x.n=(function(){return this.K.n()}),x.C=(function(){return this.K.n()}),x.gD=(function(e){var t=this.K,n=``+Jn(e);return t.u+=n,this}),x.x=(function(){return this.K.u}),x.i=(function(){return this.K.n()===0}),x.g7=(function(){return this.K.u}),x.cT=(function(e){return this.gD(ir(e))}),x.h=(function(e){var t=e|0;return rr(this.K.fG(t))}),x.s=(function(e){return rr(this.K.fG(e))}),new w().i(Mh,`scala.collection.mutable.StringBuilder`,{e5:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,e3:1,b6:1,b8:1,b7:1,E:1,n:1,o:1,F:1,a8:1,a:1});function Ph(e,t){return e.aK=t,e}function Fh(e){return Ph(e,[]),e}function Ih(){this.aK=null}x=Ih.prototype=new Am,x.constructor=Ih;function Lh(){}Lh.prototype=x,x.b6=(function(){return`IndexedSeq`}),x.p=(function(){return new sp(new bm(this))}),x.au=(function(e){var t=this.aK.length|0;return t===e?0:t<e?-1:1}),x.s=(function(e){return this.aK[e]}),x.n=(function(){return this.aK.length|0}),x.C=(function(){return this.aK.length|0}),x.b1=(function(){return`WrappedArray`}),x.g7=(function(){return this}),x.cT=(function(e){return this.aK.push(e),this}),x.h=(function(e){var t=e|0;return this.aK[t]}),new w().i(Ih,`scala.scalajs.js.WrappedArray`,{ew:1,dY:1,C:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,H:1,G:1,I:1,D:1,v:1,e0:1,b8:1,b7:1,e4:1,q:1,p:1,E:1,n:1,o:1,F:1,e2:1,b6:1,a:1}),Rn=new j(0,0),yr.z=Rn,za(new(Yf.r()).C([]));