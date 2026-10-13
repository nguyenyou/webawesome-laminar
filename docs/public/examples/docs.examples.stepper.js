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
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fe=/-->/g,Ie=/>/g,Le=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Re=/'/g,ze=/"/g,Be=/^(?:script|style|textarea|title)$/i,h=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ve=Symbol.for(`lit-noChange`),g=Symbol.for(`lit-nothing`),He=new WeakMap,Ue=Oe.createTreeWalker(Oe,129);function We(e,t){if(!je(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ce===void 0?t:Ce.createHTML(t)}const Ge=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Pe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Pe?c[1]===`!--`?o=Fe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Le):(Be.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Le):o=Ie:o===Le?c[0]===`>`?(o=i??Pe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Le:c[3]===`"`?ze:Re):o===ze||o===Re?o=Le:o===Fe||o===Ie?o=Pe:(o=Le,i=void 0);let d=o===Le&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Pe?n+De:l>=0?(r.push(s),n.slice(0,l)+we+n.slice(l)+Te+d):n+Te+(l===-2?t:d)}return[We(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Ke=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ge(t,n);if(this.el=e.createElement(l,r),Ue.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ue.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(we)){let t=u[o++],n=i.getAttribute(e).split(Te),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ze:r[1]===`?`?Qe:r[1]===`@`?$e:Xe}),i.removeAttribute(e)}else e.startsWith(Te)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Be.test(i.tagName)){let e=i.textContent.split(Te),t=e.length-1;if(t>0){i.textContent=Se?Se.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ke()),Ue.nextNode(),c.push({type:2,index:++a});i.append(e[t],ke())}}}else if(i.nodeType===8)if(i.data===Ee)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Te,e+1))!==-1;)c.push({type:7,index:a}),e+=Te.length-1}a++}}static createElement(e,t){let n=Oe.createElement(`template`);return n.innerHTML=e,n}};function qe(e,t,n=e,r){if(t===Ve)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Ae(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=qe(e,i._$AS(e,t.values),i,r)),t}var Je=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Oe).importNode(t,!0);Ue.currentNode=r;let i=Ue.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ye(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new et(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ue.nextNode(),a++)}return Ue.currentNode=Oe,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ye=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=qe(this,e,t),Ae(e)?e===g||e==null||e===``?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==Ve&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Me(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&Ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(Oe.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ke.createElement(We(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Je(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new Ke(e)),t}k(t){je(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ke()),this.O(ke()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=qe(this,e,t,0),a=!Ae(e)||e!==this._$AH&&e!==Ve,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=qe(this,r[n+o],t,o),s===Ve&&(s=this._$AH[o]),a||=!Ae(s)||s!==this._$AH[o],s===g?e=g:e!==g&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ze=class extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}},Qe=class extends Xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}},$e=class extends Xe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=qe(this,e,t,0)??g)===Ve)return;let n=this._$AH,r=e===g&&n!==g||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==g&&(n===g||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},et=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){qe(this,e)}};const tt={M:we,P:Te,A:Ee,C:1,L:Ge,R:Je,D:Me,V:qe,I:Ye,H:Xe,N:Qe,U:$e,B:Ze,F:et},nt=xe.litHtmlPolyfillSupport;nt?.(Ke,Ye),(xe.litHtmlVersions??=[]).push(`3.3.1`);const rt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ye(t.insertBefore(ke(),e),e,void 0,n??{})}return i._$AI(e),i},it=globalThis;var at=class extends be{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ve}};at._$litElement$=!0,at.finalized=!0,it.litElementHydrateSupport?.({LitElement:at});const ot=it.litElementPolyfillSupport;ot?.({LitElement:at}),(it.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const st=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ct={attribute:!0,type:String,converter:_e,reflect:!1,hasChanged:ve},lt=(e=ct,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function _(e){return(t,n)=>typeof n==`object`?lt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ut(e){return _({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const dt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ft(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return dt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return dt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var pt=re`
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
`,mt=/;\s+$/;function ht(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function gt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(mt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var _t,vt=class extends at{constructor(){super(),u(this,_t,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[pt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,_t)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,_t,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=gt({property:ht(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=gt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};_t=new WeakMap,s([_()],vt.prototype,`dir`,2),s([_()],vt.prototype,`lang`,2),s([_({type:Boolean,reflect:!0,attribute:`did-ssr`})],vt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var yt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),bt=class extends vt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[yt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};bt.formAssociated=!0,s([_({reflect:!0})],bt.prototype,`name`,2),s([_({type:Boolean})],bt.prototype,`disabled`,2),s([_({state:!0,attribute:!1})],bt.prototype,`valueHasChanged`,2),s([_({state:!0,attribute:!1})],bt.prototype,`hasInteracted`,2),s([_({attribute:`custom-error`,reflect:!0})],bt.prototype,`customError`,2),s([_({attribute:!1,state:!0,type:Object})],bt.prototype,`validity`,1);
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
function v(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const Ot=new Set,kt=new Map;let At,jt=`ltr`,Mt=`en`;const Nt=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(Nt){let e=new MutationObserver(Ft);jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Pt(...e){e.map(e=>{let t=e.$code.toLowerCase();kt.has(t)?kt.set(t,Object.assign(Object.assign({},kt.get(t)),e)):kt.set(t,e),At||=e}),Ft()}function Ft(){Nt&&(jt=document.documentElement.dir||`ltr`,Mt=document.documentElement.lang||navigator.language),[...Ot.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var It=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ot.add(this.host)}hostDisconnected(){Ot.delete(this.host)}dir(){return`${this.host.dir||jt}`.toLowerCase()}lang(){let e=`${this.host.lang||Mt}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return At?At.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=kt.get(`${n}-${r}`),a=kt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&At&&At[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(At&&At[e])i=At[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Lt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Pt(Lt);var Rt=Lt,zt=class extends It{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Pt(Rt);
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
*/const Ut=Vt(class extends Ht{constructor(e){if(super(e),e.type!==Bt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ve}}),Wt=e=>e??g,Gt=Symbol.for(``),Kt=e=>{if(e?.r===Gt)return e?._$litStatic$},qt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:Gt}),Jt=new Map,Yt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Kt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Jt.get(e))===void 0&&(o.raw=o,Jt.set(e,t=o)),n=s}return e(t,...n)})(h);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends bt{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new wt(this,`[default]`,`start`,`end`),this.localize=new zt(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){Ct(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?qt`a`:qt`button`;return Yt`
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
    `}};y.shadowRootOptions={...bt.shadowRootOptions,delegatesFocus:!0},y.css=[Et,Dt,Tt],s([ft(`.button`)],y.prototype,`button`,2),s([ft(`slot:not([name])`)],y.prototype,`labelSlot`,2),s([ut()],y.prototype,`invalid`,2),s([ut()],y.prototype,`isIconButton`,2),s([_()],y.prototype,`title`,2),s([_({reflect:!0})],y.prototype,`variant`,2),s([_({reflect:!0})],y.prototype,`appearance`,2),s([_({reflect:!0})],y.prototype,`size`,2),s([v(`size`)],y.prototype,`handleSizeChange`,1),s([_({attribute:`with-caret`,type:Boolean,reflect:!0})],y.prototype,`withCaret`,2),s([_({attribute:`with-start`,type:Boolean})],y.prototype,`withStart`,2),s([_({attribute:`with-end`,type:Boolean})],y.prototype,`withEnd`,2),s([_({type:Boolean})],y.prototype,`disabled`,2),s([_({type:Boolean,reflect:!0})],y.prototype,`loading`,2),s([_({type:Boolean,reflect:!0})],y.prototype,`pill`,2),s([_()],y.prototype,`type`,2),s([_({reflect:!0})],y.prototype,`name`,2),s([_({reflect:!0})],y.prototype,`value`,2),s([_({reflect:!0})],y.prototype,`href`,2),s([_()],y.prototype,`target`,2),s([_()],y.prototype,`rel`,2),s([_()],y.prototype,`download`,2),s([_({attribute:`formaction`})],y.prototype,`formAction`,2),s([_({attribute:`formenctype`})],y.prototype,`formEnctype`,2),s([_({attribute:`formmethod`})],y.prototype,`formMethod`,2),s([_({attribute:`formnovalidate`,type:Boolean})],y.prototype,`formNoValidate`,2),s([_({attribute:`formtarget`})],y.prototype,`formTarget`,2),s([v(`disabled`,{waitUntilFirstUpdate:!0})],y.prototype,`handleDisabledChange`,1),s([v(`href`)],y.prototype,`handleHrefChange`,1),s([v(`loading`,{waitUntilFirstUpdate:!0})],y.prototype,`handleLoadingChange`,1),y=s([st(`wa-button`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Xt=re`
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
`,Zt=class extends vt{constructor(){super(...arguments),this.localize=new zt(this)}render(){return h`
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
    `}};Zt.css=Xt,Zt=s([st(`wa-spinner`)],Zt);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},$t=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},en=re`
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
*/const{I:xn}=tt,Sn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Cn=Symbol(),wn=Symbol(),Tn,En=new Map,b=class extends vt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=h`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Cn:wn}catch{return wn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Cn;Tn||=new DOMParser;let r=Tn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Cn}catch{return Cn}}}connectedCallback(){super.connectedCallback(),_n(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),vn(this)}async getIconSource(){let e=yn(this.library),t=this.family||bn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?yn(this.library):void 0;if(!e){this.svg=null;return}let r=En.get(e);r||(r=this.resolveIcon(e,n),En.set(e,r));let i=await r;if(i===wn&&En.delete(e),e===(await this.getIconSource()).url){if(Sn(i)){this.svg=i;return}switch(i){case wn:case Cn:this.svg=null,this.dispatchEvent(new Qt);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new $t)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=yn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:h`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};b.css=en,s([ut()],b.prototype,`svg`,2),s([_({reflect:!0})],b.prototype,`name`,2),s([_({reflect:!0})],b.prototype,`family`,2),s([_({reflect:!0})],b.prototype,`variant`,2),s([_({reflect:!0})],b.prototype,`canvas`,2),s([_({attribute:`auto-width`,type:Boolean,reflect:!0})],b.prototype,`autoWidth`,2),s([_({attribute:`swap-opacity`,type:Boolean,reflect:!0})],b.prototype,`swapOpacity`,2),s([_()],b.prototype,`src`,2),s([_()],b.prototype,`label`,2),s([_({reflect:!0})],b.prototype,`library`,2),s([_({type:Number,reflect:!0})],b.prototype,`rotate`,2),s([_({type:String,reflect:!0})],b.prototype,`flip`,2),s([_({type:String,reflect:!0})],b.prototype,`animation`,2),s([v(`label`)],b.prototype,`handleLabelChange`,1),s([v([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],b.prototype,`setIcon`,1),b=s([st(`wa-icon`)],b);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>y}),On=re`
  @layer wa-component {
    :host {
      --_accent: var(--wa-color-fill-loud);
      --_accent-on: var(--wa-color-on-loud);
      --_filled: var(--wa-color-fill-normal);
      --_filled-on: var(--wa-color-on-normal);
      --_marker-background: transparent;
      --_marker-border-color: var(--wa-color-border-normal);
      --_marker-border-style: solid;
      --_marker-border-width: var(--wa-form-control-border-width);
      --_marker-color: var(--wa-color-on-quiet);
      --pulse-color: var(--_accent);

      display: flex;
      flex: 2 1 0%;
    }

    /* Horizontal steps span the full width. */
    :host(:not([data-wa-step-vertical]):first-child),
    :host(:not([data-wa-step-vertical]):last-child) {
      flex-grow: 1;
    }

    /* Upcoming brand steps keep a neutral outline so a default stepper reads quietly. */
    :host([variant='brand']) {
      --_marker-border-color: var(--wa-color-neutral-border-normal);
      --_marker-color: var(--wa-color-text-quiet);
    }

    :host([completed]) {
      --_marker-background: var(--_filled);
      --_marker-border-color: transparent;
      --_marker-color: var(--_filled-on);
    }

    :host([active]) {
      --_marker-background: var(--_accent);
      --_marker-border-color: transparent;
      --_marker-color: var(--_accent-on);
    }

    :host(:state(locked)) {
      --_marker-background: transparent;
      --_marker-border-color: var(--wa-color-neutral-border-normal);
      --_marker-border-style: dashed;
      --_marker-color: var(--wa-color-text-quiet);
    }

    :host([data-wa-step-vertical]) {
      flex: 0 0 auto;
    }

    .step {
      position: relative;
      display: flex;
      flex: 1 1 auto;
      min-width: 0;
    }

    .body {
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      align-items: center;
      gap: 0.5em;
      min-width: 0;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      font: inherit;
      color: var(--wa-color-text-normal);
      text-align: center;
      cursor: default;
    }

    :host(:not([data-wa-step-vertical]):first-child) .body {
      align-items: flex-start;
      text-align: start;
    }

    :host(:not([data-wa-step-vertical]):last-child) .body {
      align-items: flex-end;
      text-align: end;
    }

    button.body {
      cursor: pointer;
    }

    button.body:disabled {
      cursor: not-allowed;
    }

    button.body:focus-visible {
      outline: none;
    }

    button.body:focus-visible .marker {
      outline: var(--wa-focus-ring);
      outline-offset: var(--wa-focus-ring-offset);
    }

    :host([disabled]) .body {
      opacity: 0.5;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5em;
    }

    :host([data-wa-step-vertical]) .body {
      flex-direction: row;
      align-items: flex-start;
      text-align: start;
      gap: 1em;
    }

    :host([data-wa-step-vertical]) .content {
      justify-content: center;
      min-height: var(--marker-size);
    }

    /* Connector. Each step draws two halves that meet in the middle of the gap. */
    .connector-start,
    .connector-end {
      position: absolute;
      z-index: 0;
      background-color: var(--connector-color);
    }

    :host(:first-child) .connector-start,
    :host([data-wa-step-vertical]) .connector-start,
    :host(:last-child) .connector-end {
      display: none;
    }

    :host(:not([data-wa-step-vertical])) .connector-start,
    :host(:not([data-wa-step-vertical])) .connector-end {
      top: calc(var(--marker-size) / 2);
      height: var(--connector-width);
      translate: 0 -50%;
    }

    :host(:not([data-wa-step-vertical])) .connector-start {
      inset-inline-start: calc(-1 * var(--gap) / 2);
      inset-inline-end: calc(50% + var(--marker-size) / 2 + var(--connector-gap));
    }

    :host(:not([data-wa-step-vertical])) .connector-end {
      inset-inline-start: calc(50% + var(--marker-size) / 2 + var(--connector-gap));
      inset-inline-end: calc(-1 * var(--gap) / 2);
    }

    :host(:not([data-wa-step-vertical]):first-child) .connector-end {
      inset-inline-start: calc(var(--marker-size) + var(--connector-gap));
    }

    :host(:not([data-wa-step-vertical]):last-child) .connector-start {
      inset-inline-end: calc(var(--marker-size) + var(--connector-gap));
    }

    /* Vertical steps only draw the end half, stretched to reach the next step's marker. */
    :host([data-wa-step-vertical]) .connector-end {
      inset-inline-start: calc(var(--marker-size) / 2);
      inset-block-start: calc(var(--marker-size) + var(--connector-gap));
      inset-block-end: calc(-1 * var(--gap) + var(--connector-gap));
      width: var(--connector-width);
      translate: -50% 0;
    }

    :host([completed]) .connector-end {
      background-color: var(--connector-color-active, var(--_filled));
    }

    /* The leading half takes the completed previous step's fill via the .wa-{variant} class the stepper hands down. */
    .connector-start[data-completed] {
      background-color: var(--connector-color-active, var(--wa-color-fill-normal));
    }

    /* Marker */
    .marker {
      position: relative;
      z-index: 1;
      display: inline-flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: center;
      width: var(--marker-size);
      height: var(--marker-size);
      font-weight: var(--wa-font-weight-action);
      line-height: 1;
      color: var(--_marker-color);
      background-color: var(--_marker-background);
      border: var(--_marker-border-style) var(--_marker-border-width) var(--_marker-border-color);
      border-radius: var(--wa-border-radius-circle);
      transition:
        background-color var(--wa-transition-fast) var(--wa-transition-easing),
        border-color var(--wa-transition-fast) var(--wa-transition-easing),
        color var(--wa-transition-fast) var(--wa-transition-easing);
    }

    @media (hover: hover) {
      button.body:enabled:hover .marker {
        background-color: color-mix(in oklab, var(--_marker-background), var(--wa-color-mix-hover));
      }
    }

    /* Attention, mirroring <wa-badge> */
    :host([attention='pulse']) .marker {
      animation: pulse 1.5s infinite;
    }

    @keyframes pulse {
      0% {
        box-shadow: 0 0 0 0 var(--pulse-color);
      }
      70% {
        box-shadow: 0 0 0 0.5rem transparent;
      }
      100% {
        box-shadow: 0 0 0 0 transparent;
      }
    }

    :host([attention='bounce']) .marker {
      animation: bounce 1s cubic-bezier(0.28, 0.84, 0.42, 1) infinite;
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-5px);
      }
      60% {
        transform: translateY(-2px);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marker {
        transition: none;
        animation: none;
      }
    }

    /* Same content-to-circle ratio as <wa-avatar>, for digits, icons, and the spinner alike. */
    .marker slot {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: calc(var(--marker-size) * 0.4);
    }

    .marker wa-spinner {
      color: var(--_accent);
    }

    /* Label & description */
    .label {
      font-weight: var(--wa-font-weight-action);
      line-height: var(--wa-line-height-condensed);
    }

    :host(:not([active], [completed])) .label {
      color: var(--wa-color-text-quiet);
    }

    .description {
      font-size: var(--wa-font-size-smaller);
      line-height: var(--wa-line-height-condensed);
      color: var(--wa-color-text-quiet);
    }

    .description[hidden] {
      display: none;
    }

    /* Forced colors flatten backgrounds to Canvas, so anything that's fill-only needs a system-color edge. */
    @media (forced-colors: active) {
      .connector-start,
      .connector-end {
        background-color: CanvasText;
      }

      :host([completed]) .marker,
      :host([active]) .marker {
        border-color: CanvasText;
      }

      :host([active]) .marker {
        outline: dashed 1px SelectedItem;
      }
    }
  }
`,kn=re`
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
`,x=class extends vt{constructor(){super(...arguments),this.localize=new zt(this),this.hasSlotController=new wt(this,`description`),this.name=``,this.completed=!1,this.loading=!1,this.disabled=!1,this.variant=`brand`,this.attention=`none`,this.withDescription=!1,this.position=0,this.active=!1,this.clickable=!1,this.locked=!1,this.role=`listitem`}handleCompletedChange(){this.customStates.set(`completed`,this.completed)}handleLoadingChange(){this.customStates.set(`loading`,this.loading),this.setAttribute(`aria-busy`,this.loading?`true`:`false`)}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled)}handleActiveChange(){this.customStates.set(`active`,this.active),this.syncAriaCurrent()}handleLockedChange(){this.customStates.set(`locked`,this.locked)}syncAriaCurrent(){this.active&&!this.clickable?this.setAttribute(`aria-current`,`step`):this.removeAttribute(`aria-current`)}getStatusText(){return this.completed?this.localize.term(`completed`):this.disabled?this.localize.term(`disabled`):this.locked?this.localize.term(`locked`):this.active?``:this.localize.term(`notCompleted`)}handleClickableChange(){this.customStates.set(`clickable`,this.clickable),this.syncAriaCurrent()}renderIcon(){return this.loading?h`<wa-spinner part="spinner"></wa-spinner>`:this.completed?h`<wa-icon name="check" library="system" variant="solid"></wa-icon>`:this.position>0?this.localize.number(this.position):g}render(){let e=this.hasSlotController.test(`description`,`withDescription`),t=h`
      <span part="marker" class="marker">
        <slot name="icon">${this.renderIcon()}</slot>
      </span>
      <span part="content" class="content">
        <span part="label" class="label">
          <slot></slot>
        </span>
        <span part="status" class="wa-visually-hidden">${this.getStatusText()}</span>
        <span part="description" class="description" ?hidden=${!e}>
          <slot name="description"></slot>
        </span>
      </span>
    `;return h`
      <div part="step" class="step">
        <span
          part="connector"
          class=${Ut({"connector-start":!0,[`wa-${this.connectorStartVariant}`]:!!this.connectorStartVariant})}
          ?data-completed=${!!this.connectorStartVariant}
        ></span>
        <span part="connector" class="connector-end"></span>
        ${this.clickable?h`
              <button
                part="button"
                class="body"
                type="button"
                ?disabled=${this.disabled||this.locked}
                aria-current=${this.active?`step`:g}
              >
                ${t}
              </button>
            `:h`<div class="body">${t}</div>`}
      </div>
    `}};x.css=[Dt,kn,On],s([_({reflect:!0})],x.prototype,`name`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`completed`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`loading`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`disabled`,2),s([_({reflect:!0})],x.prototype,`variant`,2),s([_({reflect:!0})],x.prototype,`attention`,2),s([_({type:Boolean,attribute:`with-description`})],x.prototype,`withDescription`,2),s([ut()],x.prototype,`position`,2),s([_({type:Boolean,reflect:!0})],x.prototype,`active`,2),s([ut()],x.prototype,`clickable`,2),s([ut()],x.prototype,`locked`,2),s([ut()],x.prototype,`connectorStartVariant`,2),s([_({reflect:!0})],x.prototype,`role`,2),s([v(`completed`)],x.prototype,`handleCompletedChange`,1),s([v(`loading`)],x.prototype,`handleLoadingChange`,1),s([v(`disabled`)],x.prototype,`handleDisabledChange`,1),s([v(`active`)],x.prototype,`handleActiveChange`,1),s([v(`locked`)],x.prototype,`handleLockedChange`,1),s([v(`clickable`)],x.prototype,`handleClickableChange`,1),x=s([st(`wa-step`)],x),x.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var An=t({default:()=>x}),jn=class extends Event{constructor(e){super(`wa-step-change`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Mn=class extends Event{constructor(e){super(`wa-before-step-change`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Nn=re`
  @layer wa-component {
    :host {
      --gap: var(--wa-space-l);
      --marker-size: 2em;
      --connector-color: var(--wa-color-neutral-fill-normal);
      --connector-width: var(--wa-border-width-m);
      --connector-gap: 0.35em;
      display: block;
    }

    .stepper {
      display: block;
    }

    .steps {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: var(--gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation='vertical']) .steps,
    :host(:state(stacked)) .steps {
      flex-direction: column;
      align-items: stretch;
    }
  }
`,Pn=null,Fn=null,In=7e3;function Ln(e){let t=document.createElement(`div`);return t.setAttribute(`role`,`log`),t.setAttribute(`aria-live`,e),t.setAttribute(`aria-relevant`,`additions`),Object.assign(t.style,{position:`absolute`,width:`1px`,height:`1px`,margin:`-1px`,padding:`0`,border:`0`,overflow:`hidden`,clip:`rect(0 0 0 0)`,clipPath:`inset(50%)`,whiteSpace:`nowrap`}),t}function Rn(e){return e===`assertive`?(Fn??=document.body.appendChild(Ln(`assertive`)),Fn):(Pn??=document.body.appendChild(Ln(`polite`)),Pn)}function zn(e,t=`polite`){if(!e)return;let n=Rn(t),r=document.createElement(`div`);r.textContent=e,n.appendChild(r),setTimeout(()=>r.remove(),In)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Bn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var S=class extends vt{constructor(){super(),this.localize=new zt(this),this.isStacked=!1,this.activeIndex=0,this.stepCount=0,this.active=``,this.orientation=`horizontal`,this.linear=!1,this.clickable=!1,this.label=``,this.addEventListener(`click`,this.handleClick)}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this.handleSlotChange(),this.mutationObserver=new MutationObserver(e=>{e.some(e=>e.target.closest?.(`wa-stepper`)===this)&&this.syncSteps()}),this.mutationObserver.observe(this,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`name`,`completed`,`loading`,`disabled`,`variant`]})}),this.resizeObserver=new ResizeObserver(e=>{requestAnimationFrame(()=>{for(let t of e)this.updateStacking(t.borderBoxSize[0].inlineSize)})}),this.resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect()}handleSlotChange(){if(this.didSSR){let e=this.getAllSteps().filter(e=>e.didSSR&&!e.hasUpdated).map(e=>e.updateComplete);if(e.length>0){Promise.allSettled(e).then(()=>this.handleSlotChange());return}}this.syncSteps()}getAllSteps(){return this.defaultSlot?this.defaultSlot.assignedElements().filter(e=>e.localName===`wa-step`):[]}getLinearBoundaryIndex(e){let t=e.findIndex(e=>!e.completed);return t===-1?e.length-1:t}isReachable(e,t=this.getAllSteps()){return e.disabled?!1:this.linear?t.indexOf(e)<=this.getLinearBoundaryIndex(t):!0}syncSteps(){let e=this.getAllSteps();if(e.length===0)return;let t=e.find(e=>e.name===this.active);t||=(this.active&&console.warn(`A step named "${this.active}" could not be found. Falling back to the first step.`,this),e[0]);let n=this.getLinearBoundaryIndex(e);this.activeIndex=e.indexOf(t),this.stepCount=e.length,this.updateStacking(this.getBoundingClientRect().width);let r=this.orientation===`vertical`||this.isStacked;e.forEach((i,a)=>{i.position=a+1,i.active=i===t,i.locked=this.linear&&a>n,i.clickable=this.clickable;let o=e[a-1];i.connectorStartVariant=o?.completed?o.variant:void 0,i.toggleAttribute(`data-wa-step-vertical`,r)}),this.customStates.set(`completed`,e.every(e=>e.completed)),this.customStates.set(`loading`,e.some(e=>e.loading)),this.customStates.set(`stacked`,r)}handleStateChange(){this.syncSteps()}updateStacking(e){if(this.orientation!==`auto`||!this.stepsEl){this.isStacked=!1;return}let t=this.getAllSteps().length,n=parseFloat(getComputedStyle(this).fontSize),r=parseFloat(getComputedStyle(this.stepsEl).columnGap)||0;this.isStacked=e<t*n*6+Math.max(0,t-1)*r}goTo(e){let t=this.getAllSteps(),n=t.find(t=>t.name===e);if(!n||!this.isReachable(n,t))return;let r=t.find(e=>e.active)??null;if(n===r)return;let i={name:n.name,previousName:r?.name??null,step:n,previousStep:r},a=new Mn(i);this.dispatchEvent(a),!a.defaultPrevented&&(this.active=n.name,this.updateComplete.then(()=>{this.dispatchEvent(new jn(i)),this.announceActiveStep()}))}announceActiveStep(){zn(this.localize.term(`stepXOfY`,this.activeIndex+1,this.stepCount),`polite`)}next(){let e=this.getAllSteps(),t=e[e.findIndex(e=>e.active)+1];t&&this.goTo(t.name)}previous(){let e=this.getAllSteps(),t=e.findIndex(e=>e.active),n=t>0?e[t-1]:void 0;n&&this.goTo(n.name)}handleClick(e){if(!this.clickable)return;let t=e.target.closest(`wa-step`);!t||t.closest(`wa-stepper`)!==this||t.disabled||this.goTo(t.name)}render(){let e=this.label||this.localize.term(`steps`),t=h`
      ${this.stepCount>0?h`
            <span part="summary" class="wa-visually-hidden">
              ${this.localize.term(`stepXOfY`,this.activeIndex+1,this.stepCount)}
            </span>
          `:``}
      <ol part="steps" class="steps" role="list">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ol>
    `;return this.clickable?h`<nav part="stepper" class="stepper" aria-label=${e}>${t}</nav>`:h`<div part="stepper" class="stepper" role="group" aria-label=${e}>${t}</div>`}};S.css=[kn,Nn],s([ft(`.steps`)],S.prototype,`stepsEl`,2),s([ft(`slot`)],S.prototype,`defaultSlot`,2),s([ut()],S.prototype,`isStacked`,2),s([ut()],S.prototype,`activeIndex`,2),s([ut()],S.prototype,`stepCount`,2),s([_({reflect:!0})],S.prototype,`active`,2),s([_({reflect:!0})],S.prototype,`orientation`,2),s([_({type:Boolean,reflect:!0})],S.prototype,`linear`,2),s([_({type:Boolean,reflect:!0})],S.prototype,`clickable`,2),s([_()],S.prototype,`label`,2),s([v([`active`,`linear`,`clickable`,`orientation`,`isStacked`],{waitUntilFirstUpdate:!0})],S.prototype,`handleStateChange`,1),S=s([st(`wa-stepper`)],S),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-stepper]`);if(!(t instanceof Element))return;let[n,r,...i]=Bn(t.getAttribute(`data-stepper`)||``);if(!r)return;let a=t.getRootNode().getElementById(r);if(a?.localName!==`wa-stepper`){console.warn(`A stepper with an ID of "${r}" could not be found in this document.`);return}n===`next`?a.next():n===`previous`?a.previous():n===`goto`&&i.length>0&&a.goTo(i.join(` `))});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Vn=t({default:()=>S}),C;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var Hn;function Un(e){this.c=e}C=Un.prototype,C.toString=(function(){return String.fromCharCode(this.c)});function Wn(e){switch(typeof e){case`string`:return mm.l();case`number`:return ar(e)?e<<24>>24===e?Gf.l():e<<16>>16===e?Qf.l():cm.l():or(e)?sm.l():om.l();case`boolean`:return Wd.l();case`undefined`:return gs.l();default:return e instanceof M?dm.l():e instanceof Un?qd.l():e&&e.$classData?e.$classData.l():null}}function Gn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return ar(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:or(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof M?`java.lang.Long`:e instanceof Un?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.jt()}}function Kn(e,t){switch(typeof e){case`string`:return pm(e,t);case`number`:return im(e,t);case`boolean`:return Hd(e,t);case`undefined`:return ps(e,t);default:return e&&e.$classData||e===null?e.g(t):e instanceof M?lm(e,t):e instanceof Un?Kd(cr(e),t):ur.prototype.g.call(e,t)}}function qn(e){switch(typeof e){case`string`:return fm(e);case`number`:return am(e);case`boolean`:return Ud(e);case`undefined`:return ms(e);default:return e&&e.$classData||e===null?e.n():e instanceof M?um(e):e instanceof Un?Gd(cr(e)):ur.prototype.n.call(e)}}function Jn(e){return e===void 0?`undefined`:e.toString()}function Yn(e,t){if(t===0)throw new Wf(`/ by zero`);return e/t|0}function Xn(e,t){if(t===0)throw new Wf(`/ by zero`);return e%t|0}function Zn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function Qn(e){return String.fromCharCode(e)}function $n(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var er=0,tr=new WeakMap;function nr(e){switch(typeof e){case`string`:return fm(e);case`number`:return am(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:fm(n);default:if(e===null)return 0;var r=tr.get(e);return r===void 0&&(r=er+1|0,er=r,tr.set(e,r)),r}}function rr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function ir(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function ar(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function or(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function sr(e){return new Un(e)}sr(0);function cr(e){return e===null?0:e.c}function lr(e){return e===null?Hn:e}function ur(){}C=ur.prototype,C.constructor=ur;function w(){}w.prototype=C,C.n=(function(){return nr(this)}),C.g=(function(e){return this===e}),C.p=(function(){var e=this.n();return Gn(this)+`@`+(+(e>>>0)).toString(16)}),C.toString=(function(){return this.p()});function T(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}C=T.prototype=new w,C.constructor=T,C.ac=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),C.a8=(function(){return new T(this.a.slice())});function dr(){}dr.prototype=C;function fr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}C=fr.prototype=new w,C.constructor=fr,C.ac=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),C.a8=(function(){return new fr(this.a.slice())});function pr(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}C=pr.prototype=new w,C.constructor=pr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new pr(this.a.slice())});function mr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}C=mr.prototype=new w,C.constructor=mr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new mr(this.a.slice())});function hr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}C=hr.prototype=new w,C.constructor=hr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new hr(this.a.slice())});function gr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}C=gr.prototype=new w,C.constructor=gr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new gr(this.a.slice())});function _r(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=Hn}else this.a=e}C=_r.prototype=new w,C.constructor=_r,C.ac=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),C.a8=(function(){return new _r(this.a.slice())});function vr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}C=vr.prototype=new w,C.constructor=vr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new vr(this.a.slice())});function yr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}C=yr.prototype=new w,C.constructor=yr,C.ac=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.a8=(function(){return new yr(this.a.slice())});function E(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}C=E.prototype,C.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new E().y(this,r,i)),this}),C.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),C.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),C.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new dr;n.constructor=t,n.ac=(function(e,t,n,r){$n(this.a,e,t.a,n,r)}),n.a8=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===br});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),C.r=(function(){return this.A||=new E().a(this),this.A}),C.l=(function(){return this.L||=new Lu(this),this.L}),C.R=(function(e){return this===e||this.F(e)}),C.S=(function(){return this.P?this.P.l():null}),C.Q=(function(){return this.O?this.O.l():null});var br=new E;br.n={},br.E=`Ljava.lang.Object;`,br.F=(e=>!e.X),br.N=`java.lang.Object`,br.I=(e=>e!==null),br.A=new E().y(br,T,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),ur.prototype.$classData=br;var xr=new E().p(void 0,`V`,`void`,void 0,void 0);new E().p(!1,`Z`,`boolean`,fr,void 0);var Sr=new E().p(0,`C`,`char`,pr,Uint16Array);new E().p(0,`B`,`byte`,mr,Int8Array),new E().p(0,`S`,`short`,hr,Int16Array),new E().p(0,`I`,`int`,gr,Int32Array);var Cr=new E().p(null,`J`,`long`,_r,void 0);new E().p(0,`F`,`float`,vr,Float32Array),new E().p(0,`D`,`double`,yr,Float64Array);var wr=new E().i(1,`com.raquo.airstream.core.InternalObserver`,{bl:1});function Tr(e){return Wn(e).dz()+`@`+e.n()}function Er(e){var t=e.co();return t===void 0?e.ci():t}function Dr(){kr=this,Ar().gr(new Y((e=>void 0)),zs().cb,!0)}C=Dr.prototype=new w,C.constructor=Dr;function Or(){}Or.prototype=C,C.gr=(function(e,t,n){return new Sd(e,n,t,this)}),C.hE=(function(e,t){return new wd(e,t,this)}),new E().i(Dr,`com.raquo.airstream.core.Observer$`,{bn:1});var kr;function Ar(){return kr||=new Dr,kr}function jr(){}C=jr.prototype=new w,C.constructor=jr;function Mr(){}Mr.prototype=C,C.iy=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new E().i(jr,`com.raquo.airstream.core.ObserverList$`,{bq:1});var Nr;function Pr(){return Nr||=new jr,Nr}function Fr(){this.aM=0,this.aM=0}C=Fr.prototype=new w,C.constructor=Fr;function Ir(){}Ir.prototype=C,C.gd=(function(){return this.aM===2147483647?this.aM=1:this.aM=1+this.aM|0,this.aM}),new E().i(Fr,`com.raquo.airstream.core.Signal$`,{bs:1});var Lr;function Rr(){return Lr||=new Fr,Lr}function zr(e){this.cv=null,this.dP=null,this.cw=0,this.cv=e,this.dP=void 0;var t=ai().bM();this.cw=t===void 0?1:1+t.cw|0,Gr().bO===-1||this.cw>Gr().bO?V().a0(new Yp(this,Gr().bO)):Xr().G?Xr().at.push(this)|0:ai().dm(this)}C=zr.prototype=new w,C.constructor=zr;function Br(){}Br.prototype=C;var Vr=new E().i(zr,`com.raquo.airstream.core.Transaction`,{bt:1});function Hr(){this.bO=0,this.dQ=null,Wr=this,this.bO=1e3,this.dQ=new Y((e=>{throw W(new G,`Attempted to run Transaction `+e+` after it was already executed.`)}))}C=Hr.prototype=new w,C.constructor=Hr;function Ur(){}Ur.prototype=C,C.fT=(function(e){try{e.cv.d(e);var t=e.dP;if(t!==void 0)for(;t.jx();)t.jn().jA(e)}catch(e){var n=e instanceof z?e:new Q(e);V().a0(n)}}),new E().i(Hr,`com.raquo.airstream.core.Transaction$`,{bu:1});var Wr;function Gr(){return Wr||=new Hr,Wr}function Kr(e){e.bP.length|0?new zr(new Y((t=>{for(;(e.bP.length|0)>0;){var n=e.bP.shift();try{n.d(t)}catch(e){var r=e instanceof z?e:new Q(e);V().a0(r)}}for(;(e.at.length|0)>0;){var i=e.at.shift();ai().dm(i)}}))):(e.at.length|0)>0&&new zr(new Y((t=>{for(;(e.at.length|0)>0;)ai().dm(e.at.shift())})))}function qr(){this.G=!1,this.bP=null,this.at=null,Yr=this,this.G=!1,this.bP=Pi().W(I().e(new(P.r()).C([]))),this.at=Pi().W(I().e(new(Vr.r()).C([])))}C=qr.prototype=new w,C.constructor=qr;function Jr(){}Jr.prototype=C,new E().i(qr,`com.raquo.airstream.core.Transaction$onStart$`,{bv:1});var Yr;function Xr(){return Yr||=new qr,Yr}function Zr(e,t){return e.au.get(t)}function Qr(e,t){e.bQ.unshift(t)}function $r(e){return e.bQ.shift()}function ei(e,t,n){var r=Zr(e,t),i=r===void 0,a=r===void 0?Pi().W(I().e(new(Vr.r()).C([]))):r;a.push(n),i&&e.au.set(t,a)}function ti(e,t){var n=Zr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.au.delete(t),i}}function ni(){this.bQ=null,this.au=null,ii=this,this.bQ=Pi().W(I().e(new(Vr.r()).C([]))),this.au=new Map}C=ni.prototype=new w,C.constructor=ni;function ri(){}ri.prototype=C,C.dm=(function(e){var t=this.bM();t===void 0?(Qr(this,e),Gr().fT(e),this.hk(e)):ei(this,t,e)}),C.hk=(function(e){for(var t=e;;){var n=this.bM(),r=t;if(!(n!==void 0&&F().D(r,n)))throw W(new G,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.ip(t),t.cv=Gr().dQ;var i=this.bM();if(F().D(i,void 0))if((this.au.size|0)>0){var a=new ql(0);throw this.au.forEach((e=>((t,n)=>{e.br=e.br+(t.length|0)|0}))(a)),W(new G,`Transaction queue error: Stack cleared, but a total of `+a.br+` children for `+(this.au.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Gr().fT(i),t=i}}),C.ip=(function(e){for(var t=e;;){var n=ti(this,t);if(F().D(n,void 0)){$r(this);var r=this.bM();if(!F().D(r,void 0))t=r;else return}else{Qr(this,n);return}}}),C.bM=(function(){return this.bQ[0]}),new E().i(ni,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bw:1});var ii;function ai(){return ii||=new ni,ii}function oi(e,t){var n=e.ad.indexOf(t)|0;if(n!==-1)e.ad.splice(n,1),e.L.h()||t.gg();else throw W(new G,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function si(e){for(;(e.bR.length|0)>0;)oi(e,e.bR.shift())}function ci(e){this.dR=null,this.ad=null,this.aN=!1,this.bR=null,this.L=null,this.aO=0,this.dR=e,this.ad=Pi().W(I().e(new(fi.r()).C([]))),this.aN=!0,this.bR=Pi().W(I().e(new(fi.r()).C([]))),this.L=X(),this.aO=0}C=ci.prototype=new w,C.constructor=ci;function li(){}li.prototype=C,C.fA=(function(){if(this.L.h()){var e=Xr(),t=(()=>{var e=new Cc(this.dR);this.L=new Z(e),this.aN=!1,this.aO=0;for(var t=0,n=this.ad.length|0;t<n;){var r=t+this.aO|0;this.ad[r].ge(e),t=1+t|0}si(this),this.aN=!0,this.aO=0});if(Xr(),e.G)t();else{e.G=!0;try{t()}finally{e.G=!1,Kr(e)}}}else throw W(new G,`Can not activate `+this+`: it is already active`)}),C.hd=(function(){if(this.L.h())throw W(new G,`Can not deactivate DynamicOwner: it is not active`);this.aN=!1;for(var e=this.ad,t=0,n=e.length|0;t<n;)e[t].gg(),t=1+t|0;si(this);var r=this.L;r.h()||r.x().hV(),si(this),this.aN=!0,this.L=X()}),C.gP=(function(e,t){t?(this.aO=1+this.aO|0,this.ad.unshift(e)):this.ad.push(e);var n=this.L;if(!n.h()){var r=n.x();e.ge(r)}}),C.iA=(function(e){this.aN?oi(this,e):this.bR.push(e)}),new E().i(ci,`com.raquo.airstream.ownership.DynamicOwner`,{bz:1});function ui(e,t,n){this.bS=null,this.dS=null,this.bT=null,this.bS=e,this.dS=t,this.bT=X(),e.gP(this,n)}C=ui.prototype=new w,C.constructor=ui;function di(){}di.prototype=C,C.cn=(function(){this.bS.iA(this)}),C.ge=(function(e){var t=Xr(),n=(()=>{this.bT=this.dS.d(e)});if(Xr(),t.G)n();else{t.G=!0;try{n()}finally{t.G=!1,Kr(t)}}}),C.gg=(function(){var e=this.bT;e.h()||(e.x().cn(),this.bT=X())});var fi=new E().i(ui,`com.raquo.airstream.ownership.DynamicSubscription`,{bA:1});function pi(){}C=pi.prototype=new w,C.constructor=pi;function mi(){}mi.prototype=C,C.cr=(function(e,t,n){return new ui(e,new Y((e=>new Z(t.d(e)))),n)}),C.go=(function(e,t,n){return new ui(e,new Y((e=>(t.d(e),X()))),n)}),new E().i(pi,`com.raquo.airstream.ownership.DynamicSubscription$`,{bB:1});var hi;function gi(){return hi||=new pi,hi}function _i(e){e.aP=Pi().W(I().e(new(wi.r()).C([])))}function vi(e){for(var t=e.aP,n=0,r=t.length|0;n<r;)xi(t[n]),n=1+n|0;e.aP.length=0}function yi(e,t){var n=e.aP.indexOf(t)|0;if(n!==-1)e.aP.splice(n,1);else throw W(new G,`Can not remove Subscription from Owner: subscription not found.`)}function bi(e,t){e.aP.push(t)}function xi(e){if(!e.cy)e.dU.ab(),e.cy=!0;else throw W(new G,`Can not kill Subscription: it was already killed.`)}function Si(e,t){this.dV=null,this.dU=null,this.cy=!1,this.dV=e,this.dU=t,this.cy=!1,e.im(this)}C=Si.prototype=new w,C.constructor=Si;function Ci(){}Ci.prototype=C,C.cn=(function(){xi(this),yi(this.dV,this)});var wi=new E().i(Si,`com.raquo.airstream.ownership.Subscription`,{bE:1});function Ti(e,t){this.dW=null,this.dX=null,this.ae=null,this.av=!1,this.dW=e,this.dX=t,this.ae=X(),this.av=!1}C=Ti.prototype=new w,C.constructor=Ti;function Ei(){}Ei.prototype=C,C.hR=(function(){var e=this.ae;return!e.h()&&!e.x().bS.L.h()}),C.iJ=(function(e){if(this.av)throw W(new G,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ae;if(t.h())var n=!1;else var n=e===t.x().bS;if(!n){this.hR()&&!e.L.h()&&(this.av=!0);var r=this.ae;r.h()||(r.x().cn(),this.ae=X()),this.ae=new Z(gi().cr(e,new Y((e=>(this.av||this.dW.ab(),new Si(e,new uf((()=>{this.av||this.dX.ab()})))))),!1)),this.av=!1}}),C.h5=(function(){if(this.av)throw W(new G,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ae;e.h()||e.x().cn(),this.ae=X()}),new E().i(Ti,`com.raquo.airstream.ownership.TransferableSubscription`,{bF:1});function Di(){}C=Di.prototype=new w,C.constructor=Di;function Oi(){}Oi.prototype=C,C.gW=(function(e){return new Zp(new Gp(e))}),new E().i(Di,`com.raquo.airstream.state.Var$`,{bJ:1});var ki;function Ai(){return ki||=new Di,ki}function ji(){}C=ji.prototype=new w,C.constructor=ji;function Mi(){}Mi.prototype=C,C.W=(function(e){return[...fc().iU(e)]}),new E().i(ji,`com.raquo.ew.JsArray$`,{bM:1});var Ni;function Pi(){return Ni||=new ji,Ni}function Fi(){}C=Fi.prototype=new w,C.constructor=Fi;function Ii(){}Ii.prototype=C,C.hz=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new E().i(Fi,`com.raquo.ew.JsArray$RichJsArray$`,{bN:1});var Li;function Ri(){return Li||=new Fi,Li}function zi(){this.e4=null,Vi=this,document.createElement(`template`),this.hb(J().m.iO().iP()),this.e4=RegExp(` `,`g`)}C=zi.prototype=new w,C.constructor=zi;function Bi(){}Bi.prototype=C,C.gT=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof z?e:new Q(e);if(n instanceof Q&&n.C instanceof DOMException)return!1;throw n instanceof Q?n.C:n}}),C.iv=(function(e,t){try{return e.removeChild(t),!0}catch(e){var n=e instanceof z?e:new Q(e);if(n instanceof Q&&n.C instanceof DOMException)return!1;throw n instanceof Q?n.C:n}}),C.iD=(function(e,t,n){try{return e.replaceChild(t,n),!0}catch(e){var r=e instanceof z?e:new Q(e);if(r instanceof Q&&r.C instanceof DOMException)return!1;throw r instanceof Q?r.C:r}}),C.hT=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(F().D(t,r))return!0;n=r}}),C.gN=(function(e,t){e.addEventListener(t.aU.bd.c1,t.cT,t.cU)}),C.iw=(function(e,t){e.removeEventListener(t.aU.bd.c1,t.cT,t.cU)}),C.ha=(function(e){return document.createElement(e.dA())}),C.hH=(function(e,t){var n=this.hI(e,t);return n===void 0?void 0:t.c2.ch(n)}),C.hI=(function(e,t){var n=e.M.getAttributeNS(null,t.aR);return n===null?void 0:n}),C.gm=(function(e,t,n){this.iI(e,t,t.c2.cl(n))}),C.iI=(function(e,t,n){n===null?this.ix(e,t):e.M.setAttribute(t.aR,n)}),C.ix=(function(e,t){e.M.removeAttribute(t.aR)}),C.gn=(function(e,t,n){var r=e.M,i=t.aS,a=t.aT,o=n===null?null:n;o===null?(a.a4(new Y((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.a4(new Y((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),C.hb=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eN)}),C.hL=(function(e,t){var n=this.hM(e,t);return n===void 0?void 0:t.cQ.ch(n)}),C.hM=(function(e,t){var n=e.dF(),r=t.c4,i=n.getAttributeNS(r.h()?null:r.x(),t.cR);return i===null?void 0:i}),C.iK=(function(e,t,n){this.iL(e,t,t.cQ.cl(n))}),C.iL=(function(e,t,n){if(n===null)this.iB(e,t);else{var r=t.c4;if(r.h())e.dF().setAttribute(t.c3,n);else{var i=r.x();e.dF().setAttributeNS(i,t.c3,n)}}}),C.iB=(function(e,t){var n=e.dF(),r=t.c4;n.removeAttributeNS(r.h()?null:r.x(),t.cR)}),C.h9=(function(e){return document.createComment(e)}),C.hc=(function(e){return document.createTextNode(e)}),C.hf=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new Jg(this.he(r),n);r=i,n=a}}),C.he=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.e4,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new E().i(zi,`com.raquo.laminar.DomApi$`,{bO:1});var Vi;function D(){return Vi||=new zi,Vi}function Hi(e,t,n){this.cD=null,this.e5=null,this.cC=null,this.cD=e,this.e5=t,this.cC=n}C=Hi.prototype=new w,C.constructor=Hi;function Ui(){}Ui.prototype=C,C.a4=(function(e){this.cD===null?this.cC===null?Us().hA(this.e5,e):Ri().hz(this.cC,pd().hD(e)):this.cD.a4(e)}),new E().i(Hi,`com.raquo.laminar.Seq`,{bP:1});function Wi(){}C=Wi.prototype=new w,C.constructor=Wi;function Gi(){}Gi.prototype=C,new E().i(Wi,`com.raquo.laminar.Seq$`,{bQ:1});var Ki;function qi(){return Ki||=new Wi,Ki}function Ji(e){Ar(),V(),e.e8=Ai()}function Yi(e){e.gt=Va()}function Xi(e){Zi(e,new Y((e=>{e.eB.M.focus()})))}function Zi(e,t){return new Vc(new Y((e=>{var n=new Gl(!e.a7.L.h()),r=new Y((e=>{n.cf?n.cf=!1:t.d(e)}));gi().go(e.a7,new Y((e=>(t=>{r.d(new Ia(e,t))}))(e)),!1)})),Va())}function Qi(){this.aQ=null,this.bc=null,ea=this,this.aQ=new Dc(ta()),new Dc(ta()),new Dc(ta()),this.bc=new Tc}C=Qi.prototype=new w,C.constructor=Qi;function $i(){}$i.prototype=C,new E().i(Qi,`com.raquo.laminar.codecs.package$`,{bY:1});var ea;function ta(){return ea||=new Qi,ea}function na(e){e.gu=ra(e,`class`,` `)}function ra(e,t,n){var r=Pc(new Fc,t,ta().aQ);return new Ac(r.aR,new Y((e=>{var t=D().hH(e,r);return t===void 0?``:t})),new pf(((e,t)=>{D().gm(e,r,t)})),n)}function ia(e){e.gs=aa(e,`class`,` `)}function aa(e,t,n){var r=new Lc(t,ta().aQ,X());return new Ac(r.c3,new Y((e=>{var t=D().hL(e,r);return t===void 0?``:t})),new pf(((e,t)=>{D().iK(e,r,t)})),n)}function oa(){}C=oa.prototype=new w,C.constructor=oa;function sa(){}sa.prototype=C,C.gU=(function(e,t){return new jd(X(),!1,new hf(((n,r,i)=>au(e,new Y(((e,n)=>(r=>{var i=n.cg;if(i===void 0){var a=new Rd(t.ds(r));this.iQ(a,e);var o=a;n.cg=o,o=null}else i.c6.textContent=t.ds(r)}))(n,new Yl(void 0))),r))),void 0)}),C.iQ=(function(e,t){Qa().iC(t.cJ,t.cK,e,void 0),t.cK=e,t.cL&&(t.cL=!1,t.iz(e),t.cI.clear(),t.cH=0)}),new E().i(oa,`com.raquo.laminar.inserters.ChildTextInserter$`,{cl:1});var ca;function la(){return ca||=new oa,ca}function ua(e,t,n,r,i){this.cJ=null,this.cK=null,this.cL=!1,this.cH=0,this.cI=null,this.cJ=e,this.cK=t,this.cL=n,this.cH=r,this.cI=i}C=ua.prototype=new w,C.constructor=ua;function da(){}da.prototype=C,C.iz=(function(e){var t=this.cH,n=0;for(n=t;n>0;){var r=e.E().nextSibling;if(r===null)n=0;else{var i=this.cI.get(r);i===void 0?n=0:i!==void 0&&(Qa().iu(this.cJ,i),n=-1+n|0)}}}),new E().i(ua,`com.raquo.laminar.inserters.InsertContext`,{cn:1});function fa(){}C=fa.prototype=new w,C.constructor=fa;function pa(){}pa.prototype=C,C.iE=(function(e,t,n){var r=new Id(``);return Qa().aH(e,r,n),this.iX(e,r,t)}),C.iX=(function(e,t,n){return new ua(e,t,n,0,n?new Map:null)}),new E().i(fa,`com.raquo.laminar.inserters.InsertContext$`,{co:1});var ma;function ha(){return ma||=new fa,ma}function ga(e){this.bZ=null,this.bZ=e}C=ga.prototype=new w,C.constructor=ga;function _a(){}_a.prototype=C,C.dE=(function(e,t){try{this.bZ.dp(e,t)}catch(e){var n=e instanceof z?e:new Q(e);V().a0(n)}}),C.h6=(function(e){return new ga(new pf(((t,n)=>{this.bZ.dp(t,n),e.bZ.dp(t,n)})))}),C.fC=(function(e){return e===void 0?this:e.h6(this)}),new E().i(ga,`com.raquo.laminar.inserters.InserterHooks`,{cp:1});function va(){}C=va.prototype=new w,C.constructor=va;function ya(){}ya.prototype=C,C.dB=(function(e,t){return new Af(e,void 0)}),new E().i(va,`com.raquo.laminar.inserters.StaticChildInserter$`,{cr:1});var ba;function xa(){return ba||=new va,ba}function Sa(e,t){this.eA=null,this.ez=null,this.eA=e,this.ez=t}C=Sa.prototype=new w,C.constructor=Sa;function Ca(){}Ca.prototype=C,C.q=(function(e){return new hu(this.eA,this.ez.d(e),new hf(((e,t,n)=>{D().gn(e,t,n)})))}),new E().i(Sa,`com.raquo.laminar.keys.DerivedStyleProp`,{cu:1});function wa(e,t,n,r){this.bd=null,this.cP=!1,this.cO=!1,this.cN=null,this.bd=e,this.cP=t,this.cO=n,this.cN=r}C=wa.prototype=new w,C.constructor=wa;function Ta(){}Ta.prototype=C,C.i0=(function(e){var t=new Y((t=>{var n=this.cN.d(t);return n.h()?X():new Z(e.d(n.x()))}));return new wa(this.bd,this.cP,this.cO,t)}),new E().i(wa,`com.raquo.laminar.keys.EventProcessor`,{cv:1});function Ea(){}C=Ea.prototype=new w,C.constructor=Ea;function Da(){}Da.prototype=C,C.dw=(function(e,t,n){return new wa(e,t,n,new Y((e=>new Z(e))))}),new E().i(Ea,`com.raquo.laminar.keys.EventProcessor$`,{cw:1});var Oa;function ka(){return Oa||=new Ea,Oa}function Aa(){}C=Aa.prototype=new w,C.constructor=Aa;function ja(){}ja.prototype=C;function Ma(){this.gw=null,this.gx=null,this.gy=null,this.gz=null,this.gw=`http://www.w3.org/2000/svg`,this.gx=`http://www.w3.org/1999/xlink`,this.gy=`http://www.w3.org/XML/1998/namespace`,this.gz=`http://www.w3.org/2000/xmlns/`}C=Ma.prototype=new w,C.constructor=Ma;function Na(){}Na.prototype=C,C.i4=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new sp(e)}}),new E().i(Ma,`com.raquo.laminar.keys.SvgAttr$`,{cz:1});var Pa;function Fa(){return Pa||=new Ma,Pa}function Ia(e,t){this.eB=null,this.cS=null,this.eB=e,this.cS=t}C=Ia.prototype=new w,C.constructor=Ia;function La(){}La.prototype=C,new E().i(Ia,`com.raquo.laminar.lifecycle.MountContext`,{cA:1});var O=new E().i(1,`com.raquo.laminar.modifiers.Modifier`,{K:1});function Ra(){this.gA=null,Ba=this,this.gA=new zc}C=Ra.prototype=new w,C.constructor=Ra;function za(){}za.prototype=C,new E().i(Ra,`com.raquo.laminar.modifiers.Modifier$`,{cE:1});var Ba;function Va(){return Ba||=new Ra,Ba}function Ha(){this.c5=null,Wa=this,this.c5=new Uc}C=Ha.prototype=new w,C.constructor=Ha;function Ua(){}Ua.prototype=C,new E().i(Ha,`com.raquo.laminar.modifiers.RenderableNode$`,{cI:1});var Wa;function Ga(){return Wa||=new Ha,Wa}function Ka(){this.w=null,Ja=this,this.w=new Yc(new Y((e=>e)),k()),new Yc(new Y((e=>``+(e|0))),k()),new Yc(new Y((e=>``+ +e)),k()),new Yc(new Y((e=>``+!!e)),k()),new Yc(new Y((e=>e.iT())),k())}C=Ka.prototype=new w,C.constructor=Ka;function qa(){}qa.prototype=C,new E().i(Ka,`com.raquo.laminar.modifiers.RenderableText$`,{cN:1});var Ja;function k(){return Ja||=new Ka,Ja}function Ya(){}C=Ya.prototype=new w,C.constructor=Ya;function Xa(){}Xa.prototype=C,C.aH=(function(e,t,n){var r=new Z(e);t.b7(r),n!==void 0&&n.dE(e,t);var i=D().gT(e.E(),t.E());return i&&t.b5(r),i}),C.iu=(function(e,t){var n=!1;return F().D(t.E().parentNode,e.E())&&(t.b7(X()),n=D().iv(e.E(),t.E()),t.b5(X())),n}),C.iC=(function(e,t,n,r){var i=!1;if(t!==n&&t.dt().h8(e)){var a=new Z(e);t.b7(X()),n.b7(a),r!==void 0&&r.dE(e,n),i=D().iD(e.E(),n.E(),t.E()),i&&(t.b5(X()),n.b5(a))}return i}),new E().i(Ya,`com.raquo.laminar.nodes.ParentNode$`,{cR:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(){}C=$a.prototype=new w,C.constructor=$a;function eo(){}eo.prototype=C,C.iW=(function(e,t){return gi().cr(e.a7,new Y((n=>t.d(new Ia(e,n)))),!0)}),new E().i($a,`com.raquo.laminar.nodes.ReactiveElement$`,{cT:1});var to;function no(){return to||=new $a,to}function ro(e){this.eL=null,this.eL=new ga(new pf(((t,n)=>{matchResult1:{var r=n.E();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=V(),a=r.textContent,o=t.E().tagName;i.a0(W(new G,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}C=ro.prototype=new w,C.constructor=ro;function io(){}io.prototype=C,C.dr=(function(e){return e.gc(new Y((e=>e.gq(this.eL))))}),new E().i(ro,`com.raquo.laminar.nodes.Slot`,{cW:1});function ao(){}C=ao.prototype=new w,C.constructor=ao;function oo(){}oo.prototype=C,new E().i(ao,`com.raquo.laminar.receivers.ChildTextReceiver$`,{cY:1});var so;function co(){return so||=new ao,so}function lo(){fo=this,Pi().W(I().j2(new gr(new Int32Array([0]))))}C=lo.prototype=new w,C.constructor=lo;function uo(){}uo.prototype=C,C.gL=(function(){return new Y((e=>void 0))}),new E().i(lo,`com.raquo.laminar.tags.CustomHtmlTag$`,{d0:1});var fo;function po(){return fo||=new lo,fo}function mo(){}C=mo.prototype=new w,C.constructor=mo;function ho(){}ho.prototype=C,C.gM=(function(e){return J().m.fV().aI(I().e(new(O.r()).C([J().m.hi().hx(),J().m.hy().j1(),J().m.gQ().h4(),J().m.hF().iq().q(16),du(J().m,e,Jc())])))}),new E().i(mo,`doc.Examples$package$`,{d2:1});var go;function _o(){return go||=new mo,go}function vo(){}C=vo.prototype=new w,C.constructor=vo;function yo(){}yo.prototype=C,C.gR=(function(){xo().hq(),xo().hr(),xo().hs(),xo().ht(),xo().hu()}),C.hq=(function(){var e=document.querySelector(`#example1`);Fl().bA(e).h()||(J(),new _u(e,Fu().y(I().e(new(P.r()).C([new q((e=>e.bv().q(`shipping`))),new q((e=>e.hW().q(`Checkout progress`)))])),I().e(new(O.r()).C([U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`cart`))),new q((e=>e.du().q(!0)))])),I().e(new(O.r()).C([H(J().m,`Cart`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`shipping`)))])),I().e(new(O.r()).C([H(J().m,`Shipping`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`payment`)))])),I().e(new(O.r()).C([H(J().m,`Payment`,k().w)])))])))))}),C.hr=(function(){var e=document.querySelector(`#example2`);Fl().bA(e).h()||(J(),new _u(e,Fu().y(I().e(new(P.r()).C([new q((e=>e.bv().q(`profile`))),new q((e=>e.fS().q(!0)))])),I().e(new(O.r()).C([U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`profile`)))])),I().e(new(O.r()).C([H(J().m,`Profile`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`preferences`)))])),I().e(new(O.r()).C([H(J().m,`Preferences`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`review`))),new q((e=>e.hh().q(!0)))])),I().e(new(O.r()).C([H(J().m,`Review`,k().w)])))])))))}),C.hs=(function(){var e=document.querySelector(`#example3`);Fl().bA(e).h()||(J(),new _u(e,Fu().y(I().e(new(P.r()).C([new q((e=>e.bv().q(`details`))),new q((e=>e.hX().q(!0))),new q((e=>e.fS().q(!0)))])),I().e(new(O.r()).C([U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`account`))),new q((e=>e.du().q(!0)))])),I().e(new(O.r()).C([H(J().m,`Account`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`details`)))])),I().e(new(O.r()).C([H(J().m,`Details`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`confirm`)))])),I().e(new(O.r()).C([H(J().m,`Confirm`,k().w)])))])))))}),C.ht=(function(){var e=document.querySelector(`#example4`);Fl().bA(e).h()||(J(),new _u(e,Fu().y(I().e(new(P.r()).C([new q((e=>e.bv().q(`review`))),new q((e=>e.ik().iY()))])),I().e(new(O.r()).C([U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`draft`))),new q((e=>e.du().q(!0))),new q((e=>uu(J().m,Eo().dv().dr(I().e(new(Mf.r()).C([(J(),xa().dB(J().m.dH().aI(I().e(new(O.r()).C([H(J().m,`Write your first draft.`,k().w)]))),Ga().c5))]))),xl().c9,Jc())))])),I().e(new(O.r()).C([H(J().m,`Draft`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`review`))),new q((e=>uu(J().m,Eo().dv().dr(I().e(new(Mf.r()).C([(J(),xa().dB(J().m.dH().aI(I().e(new(O.r()).C([H(J().m,`Check the details.`,k().w)]))),Ga().c5))]))),xl().c9,Jc())))])),I().e(new(O.r()).C([H(J().m,`Review`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`publish`))),new q((e=>uu(J().m,Eo().dv().dr(I().e(new(Mf.r()).C([(J(),xa().dB(J().m.dH().aI(I().e(new(O.r()).C([H(J().m,`Share the finished work.`,k().w)]))),Ga().c5))]))),xl().c9,Jc())))])),I().e(new(O.r()).C([H(J().m,`Publish`,k().w)])))])))))}),C.hu=(function(){var e=document.querySelector(`#example5`);if(!Fl().bA(e).h()){J();var t=J().m.e8.gW(`cart`),n=Fu().y(I().e(new(P.r()).C([new q((e=>e.bv().q(`cart`))),new q((e=>new fu((J(),ka().dw(e.ii(),!1,!1)).i0(new q((e=>e.detail.name))),new Y((e=>{t.e0.dD(e)})))))])),I().e(new(O.r()).C([U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`cart`)))])),I().e(new(O.r()).C([H(J().m,`Cart`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`shipping`)))])),I().e(new(O.r()).C([H(J().m,`Shipping`,k().w)]))),U().y(I().e(new(P.r()).C([new q((e=>e.F().q(`payment`)))])),I().e(new(O.r()).C([H(J().m,`Payment`,k().w)])))])));new _u(e,J().m.fV().aI(I().e(new(O.r()).C([n,J().m.io().aI(I().e(new(O.r()).C([H(J().m,`Current step: `,k().w),(J(),la().gU(t.dZ,k().w))]))),_o().gM(I().e(new(rm.r()).C([wu().y(I().e(new(P.r()).C([])),I().e(new(O.r()).C([H(J().m,`Back`,k().w),new fu((J(),ka().dw(J().m.gf(),!1,!1)),new q((e=>{n.M.previous()})))]))),wu().y(I().e(new(P.r()).C([])),I().e(new(O.r()).C([H(J().m,`Next`,k().w),new fu((J(),ka().dw(J().m.gf(),!1,!1)),new q((e=>{n.M.next()})))])))])))]))))}}),new E().i(vo,`examples.stepper.Main$package$`,{d3:1});var bo;function xo(){return bo||=new vo,bo}function So(e){try{xo().gR()}catch(e){throw e}}function Co(){this.eW=null,this.eX=!1}C=Co.prototype=new w,C.constructor=Co;function wo(){}wo.prototype=C,C.dv=(function(){return this.eX||=(this.eW=new ro(`description`),!0),this.eW}),new E().i(Co,`io.github.nguyenyou.webawesome.laminar.Step$slots$`,{d7:1});var To;function Eo(){return To||=new Co,To}function Do(){this.gC=!1,this.bi=null,this.c7=null,this.fa=null,this.d1=!1,this.gB=0,this.gE=0,this.gD=null,ko=this,this.gC=!0,this.bi=new ArrayBuffer(8),this.c7=new Int32Array(this.bi,0,2),new Float32Array(this.bi,0,2),this.fa=new Float64Array(this.bi,0,1),this.c7[0]=16909060,this.d1=(new Int8Array(this.bi,0,8)[0]|0)==1,this.gB=this.d1?0:1,this.gE=this.d1?1:0,this.gD=null}C=Do.prototype=new w,C.constructor=Do;function Oo(){}Oo.prototype=C,C.dC=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fa[0]=e,(this.c7[0]|0)^(this.c7[1]|0))}),new E().i(Do,`java.lang.FloatingPointBits$`,{dh:1});var ko;function Ao(){return ko||=new Do,ko}function jo(e,t){for(var n=A().a6(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Mo(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new dl(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new dl(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(pl.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function Mo(e,t){var n=A().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=A().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=A().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=A().a6(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=A().a6(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[No(e,c[1]),Bo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[No(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[No(e,d[1]),`<clinit>`]}function No(e,t){var n=Fo(e);if(fs().fg.call(n,t))var r=Fo(e)[t];else var r=Zo(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Po(e){if(!((1&e.R)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d3=t,e.R=(1|e.R)<<24>>24}return e.d3}function Fo(e){return(1&e.R)<<24>>24?e.d3:Po(e)}function Io(e){if(!((2&e.R)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d4=t,e.R=(2|e.R)<<24>>24}return e.d4}function Lo(e){return(2&e.R)<<24>>24?e.d4:Io(e)}function Ro(e){return(4&e.R)<<24>>24||(e.d2=Object.keys(Lo(e)),e.R=(4|e.R)<<24>>24),e.d2}function zo(e){return(4&e.R)<<24>>24?e.d2:Ro(e)}function Bo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Vo(e,t){return t?t.arguments&&t.stack?Ho(e,t):t.stack&&t.sourceURL?Go(e,t):t.stack&&t.number?Wo(e,t):t.stack&&t.fileName?Uo(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?Ko(e,t):qo(e,t):Ko(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?Jo(e,t):Yo(e,t):t.stack&&!t.fileName?Ho(e,t):Xo(e,t):[]}function Ho(e,t){return(t.stack+`
`).replace(A().a6(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(A().J(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(A().J(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(A().J(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function Uo(e,t){return t.stack.replace(A().J(`(?:\\n@:0)?\\s+$`,`m`),``).replace(A().J(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function Wo(e,t){return t.stack.replace(A().J(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(A().J(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(A().J(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function Go(e,t){return t.stack.replace(A().J(`\\[native code\\]\\n`,`m`),``).replace(A().J(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(A().J(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function Ko(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function qo(e,t){for(var n=A().J(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function Jo(e,t){for(var n=A().a6(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function Yo(e,t){for(var n=A().a6(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(A().a6(`<anonymous function: (\\S+)>`),`$1`).replace(A().a6(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function Xo(e,t){return[]}function Zo(e,t,n){for(;;)if(t<(zo(e).length|0)){var r=zo(e)[t];if(n.startsWith(r))return``+Lo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Qo(){this.d3=null,this.d4=null,this.d2=null,this.R=0}C=Qo.prototype=new w,C.constructor=Qo;function $o(){}$o.prototype=C,C.hv=(function(e){return jo(this,Vo(this,e))}),new E().i(Qo,`java.lang.StackTrace$`,{dr:1});var es;function ts(){return es||=new Qo,es}function ns(){}C=ns.prototype=new w,C.constructor=ns;function rs(){}rs.prototype=C,C.a6=(function(e){return new RegExp(e)}),C.J=(function(e,t){return new RegExp(e,t)}),new E().i(ns,`java.lang.StackTrace$StringRE$`,{ds:1});var is;function A(){return is||=new ns,is}function as(){this.fc=null,this.gF=null,ss=this,this.fc=new _h(!1),this.gF=new _h(!0)}C=as.prototype=new w,C.constructor=as;function os(){}os.prototype=C,new E().i(as,`java.lang.System$Streams$`,{dx:1});var ss;function cs(){return ss||=new as,ss}function ls(){this.fg=null,ds=this,this.fg=Object.prototype.hasOwnProperty}C=ls.prototype=new w,C.constructor=ls;function us(){}us.prototype=C,new E().i(ls,`java.lang.Utils$Cache$`,{dA:1});var ds;function fs(){return ds||=new ls,ds}function ps(e,t){return e===t}function ms(e){return 0}function hs(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aC)}var gs=new E().i(0,`java.lang.Void`,{aC:1},(e=>e===void 0));function _s(e,t){throw new Kf(`argument type mismatch`)}function vs(){}C=vs.prototype=new w,C.constructor=vs;function ys(){}ys.prototype=C,C.b2=(function(e){return e instanceof T||e instanceof fr||e instanceof pr||e instanceof mr||e instanceof hr||e instanceof gr||e instanceof _r||e instanceof vr||e instanceof yr?e.a.length:_s(this,e)}),new E().i(vs,`java.lang.reflect.Array$`,{dC:1});var bs;function xs(){return bs||=new vs,bs}function Ss(){}C=Ss.prototype=new w,C.constructor=Ss;function Cs(){}Cs.prototype=C,C.g1=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.c,s=a.f,c=r,l=t.a[c],u=l.c,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),C.g0=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.g2=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.fX=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.fW=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.g3=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.fY=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),C.fZ=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new E().i(Ss,`java.util.Arrays$`,{dD:1});var ws;function j(){return ws||=new Ss,ws}function M(e,t){this.c=0,this.f=0,this.c=e,this.f=t}C=M.prototype=new w,C.constructor=M;function Ts(){}Ts.prototype=C,C.g=(function(e){return e instanceof M&&this.c===e.c&&this.f===e.f}),C.n=(function(){return this.c^this.f}),C.p=(function(){return N().gk(this.c,this.f)}),C.jD=(function(){return this.c}),C.jC=(function(){return N().gj(this.c,this.f)}),C.jB=(function(){return N().bL(this.c,this.f)}),C.jk=(function(){return this.c<<24>>24}),C.jz=(function(){return this.c<<16>>16}),C.ju=(function(){return this.c}),C.jv=(function(){return this}),C.jq=(function(){return N().gj(this.c,this.f)}),C.jo=(function(){return N().bL(this.c,this.f)}),C.jm=(function(e){return N().gh(this.c,this.f,e.c,e.f)}),C.jl=(function(e){return N().gh(this.c,this.f,e.c,e.f)}),C.jp=(function(e){return this.c===e.c&&this.f===e.f}),C.jy=(function(e){return!(this.c===e.c&&this.f===e.f)}),C.jc=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.c)<(-2147483648^e.c):t<n}),C.jd=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.c)<=(-2147483648^e.c):t<n}),C.j8=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.c)>(-2147483648^e.c):t>n}),C.j9=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.c)>=(-2147483648^e.c):t>n}),C.jF=(function(){return new M(~this.c,~this.f)}),C.j6=(function(e){return new M(this.c|e.c,this.f|e.f)}),C.j5=(function(e){return new M(this.c&e.c,this.f&e.f)}),C.jj=(function(e){return new M(this.c^e.c,this.f^e.f)}),C.je=(function(e){var t=this.c;return new M(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),C.jb=(function(e){var t=this.f;return new M(32&e?t>>>e|0:this.c>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),C.ja=(function(e){var t=this.f;return new M(32&e?t>>e:this.c>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),C.jE=(function(){var e=this.c,t=this.f;return new M(-e|0,e===0?-t|0:~t)}),C.jh=(function(e){var t=this.c,n=this.f,r=e.f,i=t+e.c|0;return new M(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),C.jf=(function(e){var t=this.c,n=this.f,r=e.f,i=t-e.c|0;return new M(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),C.ji=(function(e){var t=this.c,n=e.c,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new M(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),C.j7=(function(e){var t=N();return new M(t.hj(this.c,this.f,e.c,e.f),t.t)}),C.jg=(function(e){var t=N();return new M(t.it(this.c,this.f,e.c,e.f),t.t)}),new E().i(M,`org.scalajs.linker.runtime.RuntimeLong`,{aD:1});function Es(e,t,n){return-2097152&n?ks(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Ds(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.t=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.t=0,n>>>o|0}else return ks(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.t=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.t=s/4294967296|0,s|0}}function Os(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.t=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.t=n&(-1+i|0),t):ks(e,t,n,r,i,1)|0;if(-2097152&i)return e.t=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.t=a/4294967296|0,a|0}function ks(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var te=f,ne=p,re=u,ie=d;if(ne===ie?(-2147483648^te)>=(-2147483648^re):(-2147483648^ne)>=(-2147483648^ie)){var ae=f,oe=p,se=u,ce=d,le=ae-se|0,ue=(-2147483648^le)>(-2147483648^ae)?-1+(oe-ce|0)|0:oe-ce|0;f=le,p=ue,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var de=u,fe=d,pe=de>>>1|0|fe<<31,me=fe>>>1|0;u=pe,d=me}var he=f,ge=p;if(ge===i?(-2147483648^he)>=(-2147483648^r):(-2147483648^ge)>=(-2147483648^i)){var _e=f,ve=4294967296*p+ +(_e>>>0),ye=4294967296*i+ +(r>>>0);if(a!==1){var be=ve/ye,xe=be|0,Se=be/4294967296|0,Ce=m,we=ee,Te=Ce+xe|0,Ee=(-2147483648^Te)<(-2147483648^Ce)?1+(we+Se|0)|0:we+Se|0;m=Te,ee=Ee}if(a!==0){var De=ve%ye;f=De|0,p=De/4294967296|0}}if(a===0)return e.t=ee,m;if(a===1)return e.t=p,f;var Oe=m,ke=4294967296*ee+ +(Oe>>>0),Ae=``+f,je=Ae.length;return``+ke+`000000000`.substring(je)+Ae}function As(){this.t=0}C=As.prototype=new w,C.constructor=As;function js(){}js.prototype=C,C.gk=(function(e,t){return t===e>>31?``+e:t<0?`-`+Es(this,-e|0,e===0?-t|0:~t):Es(this,e,t)}),C.bL=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),C.gj=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),C.js=(function(e){return new M(e,e>>31)}),C.jr=(function(e){return new M(this.gi(e),this.t)}),C.gi=(function(e){if(e<-0x8000000000000000)return this.t=-2147483648,0;if(e>=0x8000000000000000)return this.t=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.t=e<0&&t!==0?-1+n|0:n,t}),C.gh=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),C.hj=(function(e,t,n,r){if((n|r)===0)throw new Wf(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.t=0,-2147483648;var i=Yn(e,n);return this.t=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.t=-1,-1;else return this.t=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Ds(this,a,o,s,c);if((t^r)>=0)return l;var u=this.t;return this.t=l===0?-u|0:~u,-l|0}}),C.it=(function(e,t,n,r){if((n|r)===0)throw new Wf(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Xn(e,n);return this.t=i>>31,i}else return this.t=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.t=0,0;else return this.t=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Os(this,a,o,s,c);if(t<0){var u=this.t;return this.t=l===0?-u|0:~u,-l|0}else return l}}),new E().i(As,`org.scalajs.linker.runtime.RuntimeLong$`,{dF:1});var Ms;function N(){return Ms||=new As,Ms}var Ns=new E().i(1,`scala.Function0`,{ac:1}),P=new E().i(1,`scala.Function1`,{e:1});function Ps(){}C=Ps.prototype=new w,C.constructor=Ps;function Fs(){}Fs.prototype=C;function Is(){this.fi=null,this.cb=null,Rs=this,this.fi=new q((e=>zs().fi)),this.cb=new $d}C=Is.prototype=new w,C.constructor=Is;function Ls(){}Ls.prototype=C,new E().i(Is,`scala.PartialFunction$`,{dT:1});var Rs;function zs(){return Rs||=new Is,Rs}function Bs(){this.fl=null,Hs=this,this.fl=new q((e=>Us().fl))}C=Bs.prototype=new w,C.constructor=Bs;function Vs(){}Vs.prototype=C,C.hA=(function(e,t){var n=xs().b2(e),r=0;if(e instanceof T)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof gr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof yr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof _r)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof vr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof pr)for(;r<n;)t.d(sr(e.a[r])),r=1+r|0;else if(e instanceof mr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof hr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else if(e instanceof fr)for(;r<n;)t.d(e.a[r]),r=1+r|0;else throw new sp(e)}),new E().i(Bs,`scala.collection.ArrayOps$`,{dZ:1});var Hs;function Us(){return Hs||=new Bs,Hs}function Ws(e,t){for(var n=e.o();n.u();)t.d(n.j())}function Gs(e,t,n,r){return e.B()===0?``+t+r:e.bw(t_(new n_),t,n,r).P.s}function Ks(e,t,n,r,i){var a=t.P;n.length!==0&&(a.s=``+a.s+n);var o=e.o();if(o.u()){var s=o.j();for(a.s=``+a.s+s;o.u();){a.s=``+a.s+r;var c=o.j();a.s=``+a.s+c}}return i.length!==0&&(a.s=``+a.s+i),t}function qs(e,t){this.fp=null,this.bo=null,this.fp=e,this.bo=t}C=qs.prototype=new w,C.constructor=qs;function Js(){}Js.prototype=C,C.hO=(function(){return this.fp.ab().o()}),new E().i(qs,`scala.collection.Iterator$ConcatIteratorCell`,{eh:1});function Ys(){}C=Ys.prototype=new w,C.constructor=Ys;function Xs(){}Xs.prototype=C,C.D=(function(e,t){return e===t||(ul(e)?this.hp(e,t):e instanceof Un?this.hn(e,t):e===null?t===null:Kn(e,t))}),C.hp=(function(e,t){if(ul(t))return this.ho(e,t);if(t instanceof Un){if(typeof e==`number`)return+e===t.c;if(e instanceof M){var n=lr(e),r=n.c,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Kn(e,t)}else return e===null?t===null:Kn(e,t)}),C.ho=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof M){var r=lr(t);return n===N().bL(r.c,r.f)}else return!1}else if(e instanceof M){var i=lr(e),a=i.c,o=i.f;if(t instanceof M){var s=lr(t),c=s.c,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return N().bL(a,o)===u}else return!1}else return e===null?t===null:Kn(e,t)}),C.hn=(function(e,t){if(t instanceof Un)return e.c===t.c;if(ul(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof M){var n=lr(t),r=n.c,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Kn(t,e)}else return e===null&&t===null}),new E().i(Ys,`scala.runtime.BoxesRunTime$`,{eT:1});var Zs;function F(){return Zs||=new Ys,Zs}var Qs=new E().i(0,`scala.runtime.Null$`,{eW:1});function $s(){}C=$s.prototype=new w,C.constructor=$s;function ec(){}ec.prototype=C,C.b0=(function(e,t){if(e instanceof T||e instanceof gr||e instanceof yr||e instanceof _r||e instanceof vr)return e.a[t];if(e instanceof pr)return sr(e.a[t]);if(e instanceof mr||e instanceof hr||e instanceof fr)return e.a[t];throw e===null?new Zf:new sp(e)}),C.gZ=(function(e,t,n){if(e instanceof T)e.a[t]=n;else if(e instanceof gr)e.a[t]=n|0;else if(e instanceof yr)e.a[t]=+n;else if(e instanceof _r)e.a[t]=lr(n);else if(e instanceof vr)e.a[t]=Math.fround(n);else if(e instanceof pr)e.a[t]=cr(n);else if(e instanceof mr)e.a[t]=n|0;else if(e instanceof hr)e.a[t]=n|0;else if(e instanceof fr)e.a[t]=!!n;else if(e===null)throw new Zf;else throw new sp(e)}),C.dl=(function(e){return Gs(e.a9(),e.Z()+`(`,`,`,`)`)}),C.e=(function(e){return e===null?null:e.a.length===0?km(Nm()):new vg(e)}),C.j2=(function(e){return e===null?null:new mg(e)}),new E().i($s,`scala.runtime.ScalaRunTime$`,{eY:1});var tc;function I(){return tc||=new $s,tc}function nc(){}C=nc.prototype=new w,C.constructor=nc;function rc(){}rc.prototype=C,C.b=(function(e,t){var n=this.cp(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.cp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.l=(function(e,t){return this.h0(e^t)}),C.h0=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.b3=(function(e){var t=e.c,n=e.f;return n===t>>31?t:t^n}),C.a3=(function(e){var t=Zn(e);if(t===e)return t;var n=N(),r=n.gi(e),i=n.t;return N().bL(r,i)===e?r^i:Ao().dC(e)}),C.A=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.a3(+e);if(e instanceof M){var t=lr(e);return this.b3(new M(t.c,t.f))}else return qn(e)}),C.aJ=(function(e){throw qf(new Jf,``+e)}),new E().i(nc,`scala.runtime.Statics$`,{f0:1});var ic;function L(){return ic||=new nc,ic}function ac(){}C=ac.prototype=new w,C.constructor=ac;function oc(){}oc.prototype=C,C.iM=(function(e,t){return setTimeout((()=>{t.ab()}),e)}),new E().i(ac,`scala.scalajs.js.timers.package$`,{f6:1});var sc;function cc(){return sc||=new ac,sc}function lc(){}C=lc.prototype=new w,C.constructor=lc;function uc(){}uc.prototype=C,C.iU=(function(e){var t=[];return e.a4(new q((e=>t.push(e)|0))),t}),new E().i(lc,`scala.scalajs.runtime.Compat$`,{ff:1});var dc;function fc(){return dc||=new lc,dc}function pc(){}C=pc.prototype=new w,C.constructor=pc;function mc(){}mc.prototype=C,C.iN=(function(e){var t=`Illegal command line`+(e.g8()===0?``:e.g8()===1?` after first argument`:` after `+e.g8()+` arguments`)+`: `+e.jw();kl().il().hU(t+`
`)}),new E().i(pc,`scala.util.CommandLineParser$`,{fh:1});function hc(e){this.dj=null,this.dj=e}C=hc.prototype=new w,C.constructor=hc;function gc(){}gc.prototype=C,C.p=(function(){return`DynamicVariable(`+this.dj+`)`}),new E().i(hc,`scala.util.DynamicVariable`,{fj:1});function _c(){}C=_c.prototype=new w,C.constructor=_c;function vc(){}vc.prototype=C,C.gX=(function(e){return!0}),new E().i(_c,`scala.util.control.NonFatal$`,{fl:1});var yc;function bc(){return yc||=new _c,yc}function xc(){}C=xc.prototype=new w,C.constructor=xc;function Sc(){}Sc.prototype=C,C.b=(function(e,t){var n=this.cp(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.cp=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.l=(function(e,t){return this.K(e^t)}),C.K=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.b4=(function(e,t,n){var r=e.X();if(r===0)return fm(e.Z());var i=t;n||(i=this.b(i,fm(e.Z())));for(var a=0;a<r;)i=this.b(i,L().A(e.Y(a))),a=1+a|0;return this.l(i,r)}),C.iV=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.o();o.u();){var s=o.j(),c=L().A(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.b(l,n),l=this.b(l,r),l=this.cp(l,a),this.l(l,i)}),C.ij=(function(e,t){var n=e.o(),r=t;if(!n.u())return this.l(r,0);var i=n.j();if(!n.u())return this.l(this.b(r,L().A(i)),1);var a=n.j(),o=L().A(i);r=this.b(r,o);for(var s=r,c=L().A(a),l=c-o|0,u=2;n.u();){r=this.b(r,c);var d=L().A(n.j());if(l!==(d-c|0)||l===0){for(r=this.b(r,d),u=1+u|0;n.u();)r=this.b(r,L().A(n.j())),u=1+u|0;return this.l(r,u)}c=d,u=1+u|0}return this.K(this.b(this.b(s,l),c))}),C.fG=(function(e,t){var n=t,r=xs().b2(e);switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().A(I().b0(e,0))),1);default:var i=L().A(I().b0(e,0));n=this.b(n,i);for(var a=n,o=L().A(I().b0(e,1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().A(I().b0(e,c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().A(I().b0(e,c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.ir=(function(e,t,n,r){return this.K(this.b(this.b(this.b(r,e),t),n))}),C.hP=(function(e,t){var n=t,r=e.k();switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().A(e.r(0))),1);default:var i=L().A(e.r(0));n=this.b(n,i);for(var a=n,o=L().A(e.r(1)),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().A(e.r(c));if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().A(e.r(c))),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.hY=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.h();){var l=c.a5(),u=c.Q(),d=L().A(l);switch(r=this.b(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.ir(s,a,o,t):this.l(r,n)}),C.fP=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.b(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]?1231:1237),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fH=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fI=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fJ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().a3(e.a[0])),1);default:var i=L().a3(e.a[0]);n=this.b(n,i);for(var a=n,o=L().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().a3(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fK=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,L().a3(e.a[0])),1);default:var i=L().a3(e.a[0]);n=this.b(n,i);for(var a=n,o=L().a3(e.a[1]),s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=L().a3(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,L().a3(e.a[c])),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fL=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fM=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:var i=n,a=e.a[0];return this.l(this.b(i,L().b3(new M(a.c,a.f))),1);default:var o=e.a[0],s=L().b3(new M(o.c,o.f));n=this.b(n,s);for(var c=n,l=e.a[1],u=L().b3(new M(l.c,l.f)),d=u-s|0,f=2;f<r;){n=this.b(n,u);var p=e.a[f],m=L().b3(new M(p.c,p.f));if(d!==(m-u|0)||d===0){for(n=this.b(n,m),f=1+f|0;f<r;){var ee=n,te=e.a[f];n=this.b(ee,L().b3(new M(te.c,te.f))),f=1+f|0}return this.l(n,r)}u=m,f=1+f|0}return this.K(this.b(this.b(c,d),u))}}),C.fN=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,e.a[0]),1);default:var i=e.a[0];n=this.b(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.b(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.b(n,l),c=1+c|0;c<r;)n=this.b(n,e.a[c]),c=1+c|0;return this.l(n,r)}o=l,c=1+c|0}return this.K(this.b(this.b(a,s),o))}}),C.fO=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.l(n,0);case 1:return this.l(this.b(n,0),1);default:n=this.b(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.b(n,a),o!==(-a|0)||o===0){for(n=this.b(n,0),s=1+s|0;s<r;)n=this.b(n,0),s=1+s|0;return this.l(n,r)}a=0,s=1+s|0}return this.K(this.b(this.b(i,o),a))}});function Cc(e){this.aP=null,this.dT=null,this.cx=!1,this.dT=e,_i(this),this.cx=!1}C=Cc.prototype=new w,C.constructor=Cc;function wc(){}wc.prototype=C,C.im=(function(e){this.cx?(xi(e),this.dT.ab()):bi(this,e)}),C.hV=(function(){vi(this),this.cx=!0}),new E().i(Cc,`com.raquo.airstream.ownership.OneTimeOwner`,{bC:1,bD:1});function Tc(){}C=Tc.prototype=new w,C.constructor=Tc;function Ec(){}Ec.prototype=C,C.hg=(function(e){return e!==null}),C.hm=(function(e){return e?``:null}),C.ch=(function(e){return this.hg(e)}),C.cl=(function(e){return this.hm(!!e)}),new E().i(Tc,`com.raquo.laminar.codecs.package$$anon$1`,{bZ:1,a6:1});function Dc(e){if(e===null)throw new Zf}C=Dc.prototype=new w,C.constructor=Dc;function Oc(){}Oc.prototype=C,C.cl=(function(e){return e}),C.ch=(function(e){return e}),new E().i(Dc,`com.raquo.laminar.codecs.package$$anon$2`,{c0:1,a6:1});function kc(e){return new Sa(e,new Y((e=>e+`px`)))}function Ac(e,t,n,r){}C=Ac.prototype=new ja,C.constructor=Ac;function jc(){}jc.prototype=C,new E().i(Ac,`com.raquo.laminar.keys.CompositeKey`,{ct:1,R:1});function Mc(e){this.c1=null,this.c1=e}C=Mc.prototype=new ja,C.constructor=Mc;function Nc(){}Nc.prototype=C,new E().i(Mc,`com.raquo.laminar.keys.EventProp`,{cx:1,R:1});function Pc(e,t,n){return e.aR=t,e.c2=n,e}function Fc(){this.aR=null,this.c2=null}C=Fc.prototype=new ja,C.constructor=Fc;function Ic(){}Ic.prototype=C,C.q=(function(e){return new hu(this,e,new hf(((e,t,n)=>{D().gm(e,t,n)})))}),new E().i(Fc,`com.raquo.laminar.keys.HtmlAttr`,{ap:1,R:1});function Lc(e,t,n){this.cR=null,this.cQ=null,this.c3=null,this.c4=null,this.cR=e,this.cQ=t;var r=n.h()?X():new Z(n.x()+`:`+e);this.c3=r.h()?e:r.x(),this.c4=n.h()?X():new Z(Fa().i4(n.x()))}C=Lc.prototype=new ja,C.constructor=Lc;function Rc(){}Rc.prototype=C,new E().i(Lc,`com.raquo.laminar.keys.SvgAttr`,{cy:1,R:1});function zc(){}C=zc.prototype=new w,C.constructor=zc;function Bc(){}Bc.prototype=C,C.V=(function(e){}),new E().i(zc,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{cF:1,K:1});function Vc(e,t){if(this.eF=null,this.eF=e,t===null)throw new Zf}C=Vc.prototype=new w,C.constructor=Vc;function Hc(){}Hc.prototype=C,C.V=(function(e){var t=Xr(),n=(()=>{this.eF.d(e)});if(Xr(),t.G)n();else{t.G=!0;try{n()}finally{t.G=!1,Kr(t)}}}),new E().i(Vc,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cG:1,K:1});function Uc(){}C=Uc.prototype=new w,C.constructor=Uc;function Wc(){}Wc.prototype=C,new E().i(Uc,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cJ:1,cH:1});function Gc(){}C=Gc.prototype=new w,C.constructor=Gc;function Kc(){}Kc.prototype=C,new E().i(Gc,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cL:1,cK:1});var qc;function Jc(){return qc||=new Gc,qc}function Yc(e,t){if(this.eG=null,this.eG=e,t===null)throw new Zf}C=Yc.prototype=new w,C.constructor=Yc;function Xc(){}Xc.prototype=C,C.ds=(function(e){return this.eG.d(e)}),new E().i(Yc,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cO:1,cM:1});function Zc(e){e.fU(new ci(new uf((()=>{throw W(new G,`Attempting to use owner of unmounted element: `+Gs(D().hf(e.E(),(D(),$g())),``,` > `,``))}))))}function Qc(e,t,n){return e.cZ=t,e}function $c(){this.cZ=null}C=$c.prototype=new w,C.constructor=$c;function el(){}el.prototype=C,C.dA=(function(){return this.cZ}),C.aI=(function(e){var t=this.h3();return e.a4(new Y((e=>{e.V(t)}))),t}),C.h3=(function(){return new tm(this,D().ha(this))}),new E().i($c,`com.raquo.laminar.tags.HtmlTag`,{ar:1,a8:1});function tl(e,t){this.eN=null,this.eN=e}C=tl.prototype=new w,C.constructor=tl;function nl(){}nl.prototype=C,new E().i(tl,`com.raquo.laminar.tags.SvgTag`,{d1:1,a8:1});function rl(){}C=rl.prototype=new w,C.constructor=rl;function il(){}il.prototype=C,C.cl=(function(e){return e}),C.ch=(function(e){return e}),new E().i(rl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{d9:1,a6:1});function al(e,t){return e.bg=t,e.dk(),e}function ol(){this.bg=null,this.bf=null,this.bh=!1}C=ol.prototype=new w,C.constructor=ol;function sl(){}sl.prototype=C,C.iR=(function(){return this.bh||=(this.bf=new yu(this.bg,po().gL(),(po(),void 0)),!0),this.bf}),C.y=(function(e,t){var n=this.iR().aI(I().e(new(O.r()).C([])));return e.a4(new Y((e=>{e.d(this).V(n)}))),t.a4(new Y((e=>{e.V(n)}))),n});function cl(){}C=cl.prototype=new w,C.constructor=cl;function ll(){}ll.prototype=C;function ul(e){return e instanceof cl||typeof e==`number`||e instanceof M}function dl(e,t,n,r,i){this.aW=null,this.bk=null,this.aX=null,this.aY=0,this.aV=0,this.aW=e,this.bk=t,this.aX=n,this.aY=r,this.aV=i}C=dl.prototype=new w,C.constructor=dl;function fl(){}fl.prototype=C,C.g=(function(e){return e instanceof dl&&this.aX===e.aX&&this.aY===e.aY&&this.aV===e.aV&&this.aW===e.aW&&this.bk===e.bk}),C.p=(function(){var e=``;return this.aW!==`<jscode>`&&(e=``+e+this.aW+`.`),e=``+e+this.bk,this.aX===null?e+=`(Unknown Source)`:(e=e+`(`+this.aX,this.aY>=0&&(e=e+`:`+this.aY,this.aV>=0&&(e=e+`:`+this.aV)),e+=`)`),e}),C.n=(function(){return fm(this.aW)^fm(this.bk)^fm(this.aX)^this.aY^this.aV});var pl=new E().i(dl,`java.lang.StackTraceElement`,{aB:1,a:1});function ml(){}C=ml.prototype=new w,C.constructor=ml;function hl(){}hl.prototype=C,C.i5=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new hm;for(var i=``,a=t;a!==r;)i+=``+Qn(e.a[a]),a=1+a|0;return i}),new E().i(ml,`java.lang.String$`,{du:1,a:1});var gl;function _l(){return gl||=new ml,gl}function R(e,t,n,r,i){return e.fe=t,e.ff=i,i&&e.hw(),e}var z=class extends Error{constructor(){super(),this.fe=null,this.ff=!1,this.fd=null,this.c8=null}hQ(e){return this}bI(){return this.fe}hw(){var e=this instanceof Q?this.C:this;return this.fd=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}hK(){return this.c8===null&&(this.ff?this.c8=ts().hv(this.fd):this.c8=new(pl.r()).C(0)),this.c8}p(){var e=Gn(this),t=this.bI();return t===null?e:e+`: `+t}n(){return ur.prototype.n.call(this)}g(e){return ur.prototype.g.call(this,e)}get message(){var e=this.bI();return e===null?``:e}get name(){return Gn(this)}toString(){return this.p()}};function vl(){this.c9=null,bl=this,this.c9=new tp}C=vl.prototype=new w,C.constructor=vl;function yl(){}yl.prototype=C,new E().i(vl,`scala.$less$colon$less$`,{dI:1,a:1});var bl;function xl(){return bl||=new vl,bl}function Sl(){}C=Sl.prototype=new w,C.constructor=Sl;function Cl(){}Cl.prototype=C,C.g5=(function(e,t){var n=e.B();if(n>-1){for(var r=t.i6(n),i=e.o(),a=0;a<n;)I().gZ(r,a,i.j()),a=1+a|0;return r}else{var o=null,s=t.iF(),c=s===Sr.l();o=[];for(var l=e.o();l.u();){var u=l.j(),d=c?cr(u):u===null?s.as.z:u;o.push(d)}return(s===xr.l()?gs.l():s===Qs.l()||s===ld.l()?br.l():s).as.r().w(o)}}),C.g4=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!F().D(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new E().i(Sl,`scala.Array$`,{dK:1,a:1});var wl;function Tl(){return wl||=new Sl,wl}function El(){this.fh=null,Ol=this,this.fh=new hc(cs().fc)}C=El.prototype=new w,C.constructor=El;function Dl(){}Dl.prototype=C,C.il=(function(){return this.fh.dj}),new E().i(El,`scala.Console$`,{dL:1,eE:1});var Ol;function kl(){return Ol||=new El,Ol}function Al(){}C=Al.prototype=new Fs,C.constructor=Al;function jl(){}jl.prototype=C,C.j3=(function(e){return e===null?null:e.a.length===0?Lm().fq:new Hg(e)});function Ml(){}C=Ml.prototype=new w,C.constructor=Ml;function Nl(){}Nl.prototype=C,C.bA=(function(e){return e===null?X():new Z(e)}),new E().i(Ml,`scala.Option$`,{dS:1,a:1});var Pl;function Fl(){return Pl||=new Ml,Pl}function Il(e,t){if(t===e)e.fB(Ip().g6(t));else for(var n=t.o();n.u();)e.dn(n.j());return e}function Ll(){}C=Ll.prototype=new w,C.constructor=Ll;function Rl(){}Rl.prototype=C,C.p=(function(){return`<function0>`});function zl(){}C=zl.prototype=new w,C.constructor=zl;function Bl(){}Bl.prototype=C,C.p=(function(){return`<function1>`});function Vl(){}C=Vl.prototype=new w,C.constructor=Vl;function Hl(){}Hl.prototype=C,C.p=(function(){return`<function2>`});function Ul(){}C=Ul.prototype=new w,C.constructor=Ul;function Wl(){}Wl.prototype=C,C.p=(function(){return`<function3>`});function Gl(e){this.cf=!1,this.cf=e}C=Gl.prototype=new w,C.constructor=Gl;function Kl(){}Kl.prototype=C,C.p=(function(){return``+this.cf}),new E().i(Gl,`scala.runtime.BooleanRef`,{eS:1,a:1});function ql(e){this.br=0,this.br=e}C=ql.prototype=new w,C.constructor=ql;function Jl(){}Jl.prototype=C,C.p=(function(){return``+this.br}),new E().i(ql,`scala.runtime.IntRef`,{eU:1,a:1});function Yl(e){this.cg=null,this.cg=e}C=Yl.prototype=new w,C.constructor=Yl;function Xl(){}Xl.prototype=C,C.p=(function(){return``+this.cg}),new E().i(Yl,`scala.runtime.ObjectRef`,{eX:1,a:1});function Zl(){this.v=0,this.fz=0,this.gK=0,this.gJ=0,$l=this,this.v=fm(`Seq`),this.fz=fm(`Map`),this.gK=fm(`Set`),this.gJ=this.iV($g(),this.fz)}C=Zl.prototype=new Sc,C.constructor=Zl;function Ql(){}Ql.prototype=C,C.iG=(function(e){return Ih(e)?this.hP(e,this.v):e instanceof Eg?this.hY(e,this.v):this.ij(e,this.v)}),new E().i(Zl,`scala.util.hashing.MurmurHash3$`,{fn:1,fm:1});var $l;function B(){return $l||=new Zl,$l}var eu=class extends z{};function tu(){this.cs=null,this.dI=null,this.dJ=null,ru=this,this.cs=Ip().fE(I().e(new(P.r()).C([]))),this.dI=new Y((e=>{try{console.error(this.cm(e)+`
`+this.hJ(e,`
`))}catch(e){var t=e instanceof z?e:new Q(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dJ=new Y((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Q?t.C:t})),this.is(this.dI)}C=tu.prototype=new w,C.constructor=tu;function nu(){}nu.prototype=C,C.cm=(function(e){try{var t=e.bI()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return Wn(e).dz()+`: `+t}),C.hJ=(function(e,t){try{return Gs(Wu().j3(e.hK()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),C.is=(function(e){this.cs.dn(e)}),C.a0=(function(e){for(var t=this.cs.o();t.u();){var n=t.j();try{n.d(e)}catch(e){var r=e instanceof z?e:new Q(e),i=this.dJ;if(n===null?i===null:n.g(i))throw r instanceof Q?r.C:r;console.warn(`Error processing an unhandled error callback:`),cc().iM(0,new uf((e=>(()=>{throw e instanceof Q?e.C:e}))(r)))}}}),new E().i(tu,`com.raquo.airstream.core.AirstreamError$`,{bj:1,eC:1,eD:1});var ru;function V(){return ru||=new tu,ru}function iu(e){e.bU=!0,e.bW=void 0}function au(e,t,n){return bf(e,Ar().gr(t,zs().cb,!0),n)}function ou(e,t){e.bU?Sf(e,t):cu(e).push(new uf((()=>{Sf(e,t)})))}function su(e){return Ef(e)>0}function cu(e){var t=e.bW;if(t===void 0){var n=Pi().W(I().e(new(Ns.r()).C([])));return e.bW=n,n}else return t}var lu=new E().i(1,`com.raquo.airstream.core.Observer`,{a5:1,X:1,V:1});function H(e,t,n){return new Rd(n.ds(t))}function uu(e,t,n,r){return new Vc(new Y((e=>{(qi(),new Hi(t,null,null)).a4(new Y((e=>(t=>{n.d(t).V(e)}))(e)))})),Va())}function du(e,t,n){return new Vc(new Y((e=>{(qi(),new Hi(t,null,null)).a4(new Y((e=>(t=>{Qa().aH(e,t,void 0)}))(e)))})),Va())}function fu(e,t){this.aU=null,this.cT=null,this.cU=null,this.aU=e,this.cT=(n=>{var r=e.cN.d(n);r.h()||t.d(r.x())}),this.cU=(()=>{var e=null;e=this;var t={};if(e===null)throw new Zf;return t.capture=e.aU.cP,t.passive=e.aU.cO,t})()}C=fu.prototype=new w,C.constructor=fu;function pu(){}pu.prototype=C,C.V=(function(e){this.h1(e,!1)}),C.h1=(function(e,t){if(If(e,this)===-1){var n=new Y((t=>(D().gN(e.M,this),new Si(t.cS,new uf((()=>{var t=If(e,this);t!==-1&&(Ff(e,t),D().iw(e.M,this))})))))),r=t?no().iW(e,n):gi().cr(e.a7,new Y((t=>n.d(new Ia(e,t)))),!1);return Pf(e,this,t),r}else{var i=new Y((e=>void 0));return gi().go(e.a7,new Y((t=>{i.d(new Ia(e,t))})),!1)}}),C.p=(function(){return`EventListener(`+this.aU.bd.c1+`)`});var mu=new E().i(fu,`com.raquo.laminar.modifiers.EventListener`,{cC:1,K:1,cB:1});function hu(e,t,n){this.eD=null,this.eE=null,this.eC=null,this.eD=e,this.eE=t,this.eC=n}C=hu.prototype=new w,C.constructor=hu;function gu(){}gu.prototype=C,C.V=(function(e){this.eC.fD(e,this.eD,this.eE)}),new E().i(hu,`com.raquo.laminar.modifiers.KeySetter`,{cD:1,K:1,cP:1});function _u(e,t){if(this.cX=null,this.eJ=null,this.eK=null,this.eJ=t,Zc(this),e===null)throw W(new G,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!D().hT(e,document))throw W(new G,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eK=e,this.i3()}C=_u.prototype=new w,C.constructor=_u;function vu(){}vu.prototype=C,C.ck=(function(){return this.cX}),C.fU=(function(e){this.cX=e}),C.i3=(function(){return this.cX.fA(),Qa().aH(this,this.eJ,void 0)}),C.E=(function(){return this.eK}),new E().i(_u,`com.raquo.laminar.nodes.RootNode`,{cV:1,a1:1,aq:1});function yu(e,t,n){this.cZ=null,this.eM=null,this.eM=e,Qc(this,e,!1)}C=yu.prototype=new el,C.constructor=yu;function bu(){}bu.prototype=C,C.dA=(function(){return this.eM}),new E().i(yu,`com.raquo.laminar.tags.CustomHtmlTag`,{cZ:1,ar:1,a8:1});function xu(){this.bg=null,this.bf=null,this.bh=!1,al(this,`wa-button`)}C=xu.prototype=new sl,C.constructor=xu;function Su(){}Su.prototype=C,C.dk=(function(){return Dn}),new E().i(xu,`io.github.nguyenyou.webawesome.laminar.Button$`,{d4:1,aa:1,a9:1});var Cu;function wu(){return Cu||=new xu,Cu}function Tu(){this.aR=null,this.c2=null,this.eO=null,this.eP=!1,Pc(this,`orientation`,new rl)}C=Tu.prototype=new Ic,C.constructor=Tu;function Eu(){}Eu.prototype=C,C.iY=(function(){return this.eP||=(this.eO=Ou().q(`vertical`),!0),this.eO}),new E().i(Tu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$StepperOrientation$`,{d5:1,ap:1,R:1});var Du;function Ou(){return Du||=new Tu,Du}function ku(){this.bg=null,this.bf=null,this.bh=!1,this.eU=null,this.eV=!1,this.eQ=null,this.eR=!1,this.eS=null,this.eT=!1,al(this,`wa-step`)}C=ku.prototype=new sl,C.constructor=ku;function Au(){}Au.prototype=C,C.F=(function(){return this.eV||=(this.eU=(J(),Pc(new Fc,`name`,ta().aQ)),!0),this.eU}),C.du=(function(){return this.eR||=(this.eQ=(J(),Pc(new Fc,`completed`,ta().bc)),!0),this.eQ}),C.hh=(function(){return this.eT||=(this.eS=(J(),Pc(new Fc,`disabled`,ta().bc)),!0),this.eS}),C.dk=(function(){return An}),new E().i(ku,`io.github.nguyenyou.webawesome.laminar.Step$`,{d6:1,aa:1,a9:1});var ju;function U(){return ju||=new ku,ju}function Mu(){this.bg=null,this.bf=null,this.bh=!1,this.f6=null,this.f7=!1,this.eY=null,this.eZ=!1,this.f8=null,this.f9=!1,this.f4=null,this.f5=!1,this.f0=null,this.f1=!1,this.f2=null,this.f3=!1,al(this,`wa-stepper`)}C=Mu.prototype=new sl,C.constructor=Mu;function Nu(){}Nu.prototype=C,C.ii=(function(){return this.f7||=(this.f6=(J(),new Mc(`wa-step-change`)),!0),this.f6}),C.bv=(function(){return this.eZ||=(this.eY=(J(),Pc(new Fc,`active`,ta().aQ)),!0),this.eY}),C.ik=(function(){return this.f9||=(this.f8=Ou(),!0),this.f8}),C.hX=(function(){return this.f5||=(this.f4=(J(),Pc(new Fc,`linear`,ta().bc)),!0),this.f4}),C.fS=(function(){return this.f1||=(this.f0=(J(),Pc(new Fc,`clickable`,ta().bc)),!0),this.f0}),C.hW=(function(){return this.f3||=(this.f2=(J(),Pc(new Fc,`label`,ta().aQ)),!0),this.f2}),C.dk=(function(){return Vn}),new E().i(Mu,`io.github.nguyenyou.webawesome.laminar.Stepper$`,{d8:1,aa:1,a9:1});var Pu;function Fu(){return Pu||=new Mu,Pu}function Iu(e){if(e.as.Z)return e.as.Q().dz()+`[]`;for(var t=e.as.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function Lu(e){this.d0=null,this.as=e}C=Lu.prototype=new w,C.constructor=Lu;function Ru(){}Ru.prototype=C,C.p=(function(){return(this.as.Y?`interface `:this.as.X?``:`class `)+this.as.N}),C.dz=(function(){return this.d0===null&&(this.d0=Iu(this)),this.d0}),new E().i(Lu,`java.lang.Class`,{df:1,a:1,M:1});function W(e,t){return R(e,t,null,!0,!0),e}var G=class extends z{};new E().i(G,`java.lang.Exception`,{L:1,t:1,a:1});function zu(){}C=zu.prototype=new w,C.constructor=zu;function Bu(){}Bu.prototype=C;function Vu(){this.gG=null,Uu=this,this.gG=rd()}C=Vu.prototype=new jl,C.constructor=Vu;function Hu(){}Hu.prototype=C,new E().i(Vu,`scala.Predef$`,{dV:1,dO:1,dP:1});var Uu;function Wu(){return Uu||=new Vu,Uu}function Gu(e,t){return e.cc=t,e}function Ku(){this.cc=null}C=Ku.prototype=new w,C.constructor=Ku;function qu(){}qu.prototype=C,C.dy=(function(e){return this.cc.dx(e,Dh())}),C.dq=(function(e){return this.cc.dx(e,Dh())});function Ju(e,t){return new xp(e).h7(t)}function Yu(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?K().z:new Tp(e,r,i)}function Xu(e,t){for(var n=t.o();e.u()&&n.u();)if(!F().D(e.j(),n.j()))return!1;return e.u()===n.u()}function Zu(){this.z=null,$u=this,this.z=new hp}C=Zu.prototype=new w,C.constructor=Zu;function Qu(){}Qu.prototype=C,new E().i(Zu,`scala.collection.Iterator$`,{ee:1,a2:1,a:1});var $u;function K(){return $u||=new Zu,$u}function ed(){}C=ed.prototype=new w,C.constructor=ed;function td(){}td.prototype=C,new E().i(ed,`scala.collection.immutable.Map$`,{es:1,ej:1,a:1});var nd;function rd(){return nd||=new ed,nd}function id(e){this.fr=null,this.fr=e}C=id.prototype=new Rl,C.constructor=id;function ad(){}ad.prototype=C,C.ab=(function(){return(0,this.fr)()}),new E().i(id,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eN:1,bd:1,ac:1});function q(e){this.fs=null,this.fs=e}C=q.prototype=new Bl,C.constructor=q;function od(){}od.prototype=C,C.d=(function(e){return(0,this.fs)(e)}),new E().i(q,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eO:1,be:1,e:1});function sd(){}C=sd.prototype=new w,C.constructor=sd;function cd(){}cd.prototype=C,C.p=(function(){return`<function1>`}),C.d=(function(e){return this.gY(e,zs().cb)});var ld=new E().i(0,`scala.runtime.Nothing$`,{eV:1,t:1,a:1});function ud(){}C=ud.prototype=new w,C.constructor=ud;function dd(){}dd.prototype=C,C.hD=(function(e){return(t=>e.d(t))}),new E().i(ud,`scala.scalajs.js.Any$`,{f1:1,f2:1,f3:1});var fd;function pd(){return fd||=new ud,fd}function md(){}C=md.prototype=new Rl,C.constructor=md;function hd(){}hd.prototype=C;function gd(){}C=gd.prototype=new Bl,C.constructor=gd;function _d(){}_d.prototype=C;function vd(){}C=vd.prototype=new Hl,C.constructor=vd;function yd(){}yd.prototype=C;function bd(){}C=bd.prototype=new Wl,C.constructor=bd;function xd(){}xd.prototype=C;function Sd(e,t,n,r){if(this.dM=null,this.dK=!1,this.ct=null,this.dL=null,this.dM=e,this.dK=t,this.ct=n,r===null)throw new Zf;this.dL=void 0}C=Sd.prototype=new w,C.constructor=Sd;function Cd(){}Cd.prototype=C,C.co=(function(){return this.dL}),C.ci=(function(){return Tr(this)}),C.p=(function(){return Er(this)}),C.dD=(function(e){try{this.dM.d(e)}catch(e){var t=e instanceof z?e:new Q(e);this.dK?this.cq(new qp(t)):V().a0(new qp(t))}}),C.cq=(function(e){try{this.ct.bJ(e)?this.ct.d(e):V().a0(e)}catch(n){var t=n instanceof z?n:new Q(n);V().a0(new Jp(t,e))}}),C.bK=(function(e){e.bH(new Y((e=>{this.cq(e)})),new Y((e=>{this.dD(e)})))}),new E().i(Sd,`com.raquo.airstream.core.Observer$$anon$8`,{bo:1,X:1,V:1,a5:1});function wd(e,t,n){if(this.cu=null,this.dN=!1,this.dO=null,this.cu=e,this.dN=t,n===null)throw new Zf;this.dO=void 0}C=wd.prototype=new w,C.constructor=wd;function Td(){}Td.prototype=C,C.co=(function(){return this.dO}),C.ci=(function(){return Tr(this)}),C.p=(function(){return Er(this)}),C.dD=(function(e){this.bK(new Gp(e))}),C.cq=(function(e){this.bK(new Up(e))}),C.bK=(function(e){try{this.cu.bJ(e)?this.cu.d(e):e.bH(new Y((e=>{V().a0(e)})),new Y((e=>void 0)))}catch(n){var t=n instanceof z?n:new Q(n);this.dN&&e.gb()?this.cq(new qp(t)):e.bH(new Y((e=>{V().a0(new Jp(t,e))})),new Y((e=>{V().a0(new qp(t))})))}}),new E().i(wd,`com.raquo.airstream.core.Observer$$anon$9`,{bp:1,X:1,V:1,a5:1});function Ed(e){if(this.e6=null,this.e7=!1,this.gs=null,e===null)throw new Zf;ia(this)}C=Ed.prototype=new w,C.constructor=Ed;function Dd(){}Dd.prototype=C,C.iP=(function(){return this.e7||=(this.e6=new tl(`svg`,!1),!0),this.e6}),new E().i(Ed,`com.raquo.laminar.api.Laminar$svg$`,{bT:1,ck:1,c2:1,c4:1});function Od(){this.m=null,Ad=this,this.m=new Hh}C=Od.prototype=new w,C.constructor=Od;function kd(){}kd.prototype=C,new E().i(Od,`com.raquo.laminar.api.package$`,{bW:1,al:1,ao:1,ak:1});var Ad;function J(){return Ad||=new Od,Ad}function jd(e,t,n,r){this.cE=null,this.cG=!1,this.cF=null,this.bY=null,this.cE=e,this.cG=t,this.cF=n,this.bY=r}C=jd.prototype=new w,C.constructor=jd;function Md(){}Md.prototype=C,C.h2=(function(e){var t=this.cE,n=t.h()?ha().iE(e,this.cG,this.bY):t.x(),r=new Y((e=>this.cF.fD(n,e.cS,this.bY)));return gi().cr(e.a7,new Y((t=>r.d(new Ia(e,t)))),!1)}),C.V=(function(e){this.h2(e)}),C.iZ=(function(e){var t=e.fC(this.bY);return new jd(this.cE,this.cG,this.cF,t)}),C.gq=(function(e){return this.iZ(e)}),new E().i(jd,`com.raquo.laminar.inserters.DynamicInserter`,{cm:1,K:1,an:1,am:1});function Nd(e,t,n){return e.aS=t,e.aT=n,e}function Pd(){this.aS=null,this.aT=null}C=Pd.prototype=new ja,C.constructor=Pd;function Fd(){}Fd.prototype=C,C.q=(function(e){return new hu(this,Jn(e),new hf(((e,t,n)=>{D().gn(e,t,n)})))});function Id(e){this.cV=null,this.eH=null,this.cV=X(),this.eH=D().h9(e)}C=Id.prototype=new w,C.constructor=Id;function Ld(){}Ld.prototype=C,C.dt=(function(){return this.cV}),C.b5=(function(e){this.cV=e}),C.b7=(function(e){}),C.V=(function(e){Qa().aH(e,this,void 0)}),C.E=(function(){return this.eH}),new E().i(Id,`com.raquo.laminar.nodes.CommentNode`,{cQ:1,a1:1,K:1,a7:1});function Rd(e){this.cY=null,this.c6=null,this.cY=X(),this.c6=D().hc(e)}C=Rd.prototype=new w,C.constructor=Rd;function zd(){}zd.prototype=C,C.dt=(function(){return this.cY}),C.b5=(function(e){this.cY=e}),C.b7=(function(e){}),C.V=(function(e){Qa().aH(e,this,void 0)}),C.iT=(function(){return this.c6.data}),C.E=(function(){return this.c6}),new E().i(Rd,`com.raquo.laminar.nodes.TextNode`,{cX:1,a1:1,K:1,a7:1});function Bd(){}C=Bd.prototype=new w,C.constructor=Bd;function Vd(){}Vd.prototype=C;function Hd(e,t){return e===t}function Ud(e){return e?1231:1237}var Wd=new E().i(0,`java.lang.Boolean`,{dd:1,a:1,S:1,M:1},(e=>typeof e==`boolean`));function Gd(e){return e}function Kd(e,t){return t instanceof Un&&e===t.c}var qd=new E().i(0,`java.lang.Character`,{ax:1,a:1,S:1,M:1},(e=>e instanceof Un)),Jd=class extends G{};function Yd(){this.s=null,this.s=``}C=Yd.prototype=new w,C.constructor=Yd;function Xd(){}Xd.prototype=C,C.gS=(function(e){var t=_l().i5(e,0,e.a.length);return this.s=``+this.s+t,this}),C.p=(function(){return this.s}),C.k=(function(){return this.s.length}),C.fR=(function(e){return this.s.charCodeAt(e)}),new E().i(Yd,`java.lang.StringBuilder`,{dv:1,ab:1,av:1,a:1});function Zd(){}C=Zd.prototype=new Bu,C.constructor=Zd;function Qd(){}Qd.prototype=C;function $d(){}C=$d.prototype=new w,C.constructor=$d;function ef(){}ef.prototype=C,C.p=(function(){return`<function1>`}),C.bJ=(function(e){return!1}),C.gV=(function(e){throw new sp(e)}),C.d=(function(e){this.gV(e)}),new E().i($d,`scala.PartialFunction$$anon$1`,{dU:1,f:1,e:1,a:1});function tf(){}C=tf.prototype=new w,C.constructor=tf;function nf(){}nf.prototype=C,C.o=(function(){return this}),C.cj=(function(e){return this.bN(e,-1)}),C.bN=(function(e,t){return Yu(this,e,t)}),C.p=(function(){return`<iterator>`}),C.bw=(function(e,t,n,r){return Ks(this,e,t,n,r)}),C.B=(function(){return-1});function rf(e,t){return e.cd=t,e}function af(){this.cd=null}C=af.prototype=new w,C.constructor=af;function of(){}of.prototype=C,C.fE=(function(e){return this.cd.dq(e)}),C.g6=(function(e){return this.cd.dy(e)}),C.dy=(function(e){return this.g6(e)}),C.dq=(function(e){return this.fE(e)});function sf(e,t){return t>=0&&e.ar(t)>0}function cf(e){return e.ar(0)===0}function lf(e,t){var n=e.B();if(n!==-1)var r=t.B(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Xu(e.o(),t)}function uf(e){this.fv=null,this.fv=e}C=uf.prototype=new hd,C.constructor=uf;function df(){}df.prototype=C,C.ab=(function(){return(0,this.fv)()}),new E().i(uf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{f8:1,f7:1,bd:1,ac:1});function Y(e){this.fw=null,this.fw=e}C=Y.prototype=new _d,C.constructor=Y;function ff(){}ff.prototype=C,C.d=(function(e){return(0,this.fw)(e)}),new E().i(Y,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{fa:1,f9:1,be:1,e:1});function pf(e){this.fx=null,this.fx=e}C=pf.prototype=new yd,C.constructor=pf;function mf(){}mf.prototype=C,C.dp=(function(e,t){return(0,this.fx)(e,t)}),new E().i(pf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{fc:1,fb:1,eP:1,dM:1});function hf(e){this.fy=null,this.fy=e}C=hf.prototype=new xd,C.constructor=hf;function gf(){}gf.prototype=C,C.fD=(function(e,t,n){return(0,this.fy)(e,t,n)}),new E().i(hf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{fe:1,fd:1,eQ:1,dN:1});function _f(){}C=_f.prototype=new w,C.constructor=_f;function vf(){}vf.prototype=C;function yf(e){e.bb=Pi().W(I().e(new(lu.r()).C([]))),e.cB=Pi().W(I().e(new(wr.r()).C([]))),e.bX=!1}function bf(e,t,n){var r=Xr(),i=(()=>{Cf(e);var r=xf(e,t,n);return t.bK(mh(e)),wf(e),r}),a=!su(e);if(r.G||!a)var o=i();else{r.G=!0;try{var o=i()}finally{r.G=!1,Kr(r)}}return o}function xf(e,t,n){var r=new Si(n,new uf((()=>{ou(e,t)})));return e.bb.push(t),r}function Sf(e,t){Pr().iy(e.bb,t)&&Tf(e)}function Cf(e){e.bX||=!0}function wf(e){Ef(e)===1&&Xp(e)}function Tf(e){su(e)||(e.bX=!1)}function Ef(e){var t=e.bb.length,n=e.cB;return(t|0)+(n.length|0)|0}function Df(e){e.e0=Ar().hE(new Of(e),(Ar(),!0))}function Of(e){if(this.e1=null,e===null)throw new Zf;this.e1=e}C=Of.prototype=new cd,C.constructor=Of;function kf(){}kf.prototype=C,C.hS=(function(e){return!0}),C.gY=(function(e,t){new zr(new Y((t=>{this.e1.iH(e,t)})))}),C.bJ=(function(e){return this.hS(e)}),new E().i(Of,`com.raquo.airstream.state.Var$$anon$1`,{bK:1,eR:1,e:1,f:1,a:1});function Af(e,t){this.c0=null,this.cM=null,this.c0=e,this.cM=t}C=Af.prototype=new w,C.constructor=Af;function jf(){}jf.prototype=C,C.V=(function(e){var t=this.cM;t!==void 0&&t.dE(e,this.c0),Qa().aH(e,this.c0,void 0)}),C.j0=(function(e){return new Af(this.c0,e.fC(this.cM))}),C.gq=(function(e){return this.j0(e)});var Mf=new E().i(Af,`com.raquo.laminar.inserters.StaticChildInserter`,{cq:1,K:1,an:1,cs:1,am:1});function Nf(e){e.cW=new Ti(new uf((()=>{e.a7.fA()})),new uf((()=>{e.a7.hd()}))),e.aw=void 0}function Pf(e,t,n){if(e.aw===void 0)e.aw=Pi().W(I().e(new(mu.r()).C([t])));else if(n){var r=e.aw;if(r===void 0){var i;throw new ep(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aw;if(a===void 0){var o;throw new ep(`undefined.get`)}else var o=a;o.push(t)}}function Ff(e,t){var n=e.aw;n!==void 0&&n.splice(t,1)}function If(e,t){var n=e.aw;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:Kn(a,t))?r=!0:i=1+i|0}return r?i:-1}function Lf(e,t){zf(e,e.be,t)&&Bf(e,t)}function Rf(e,t){var n=e.be;e.be=t,zf(e,n,t)||Bf(e,t)}function zf(e,t,n){var r=!t.h()&&!t.x().ck().L.h(),i=!n.h()&&!n.x().ck().L.h();return r&&!i}function Bf(e,t){Vf(e,t.h()?X():new Z(t.x().ck()))}function Vf(e,t){if(t.h())e.cW.h5();else{var n=t.x();e.cW.iJ(n)}}function Hf(){}C=Hf.prototype=new Vd,C.constructor=Hf;function Uf(){}Uf.prototype=C;var Wf=class extends Jd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Wf,`java.lang.ArithmeticException`,{dc:1,T:1,L:1,t:1,a:1});var Gf=new E().i(0,`java.lang.Byte`,{de:1,U:1,a:1,S:1,M:1},(e=>rr(e))),Kf=class extends Jd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(Kf,`java.lang.IllegalArgumentException`,{di:1,T:1,L:1,t:1,a:1});function qf(e,t){return R(e,t,null,!0,!0),e}var Jf=class extends Jd{};new E().i(Jf,`java.lang.IndexOutOfBoundsException`,{az:1,T:1,L:1,t:1,a:1});function Yf(){}C=Yf.prototype=new Vd,C.constructor=Yf;function Xf(){}Xf.prototype=C,new E().i(Yf,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{dm:1,au:1,as:1,aw:1,at:1});var Zf=class extends Jd{constructor(){super(),R(this,null,null,!0,!0)}};new E().i(Zf,`java.lang.NullPointerException`,{dp:1,T:1,L:1,t:1,a:1});var Qf=new E().i(0,`java.lang.Short`,{dq:1,U:1,a:1,S:1,M:1},(e=>ir(e))),$f=class extends Jd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i($f,`java.lang.UnsupportedOperationException`,{dz:1,T:1,L:1,t:1,a:1});var ep=class extends Jd{constructor(e){super(),R(this,e,null,!0,!0)}};new E().i(ep,`java.util.NoSuchElementException`,{dE:1,T:1,L:1,t:1,a:1});function tp(){}C=tp.prototype=new Qd,C.constructor=tp;function np(){}np.prototype=C,C.d=(function(e){return e}),C.p=(function(){return`generalized constraint`}),new E().i(tp,`scala.$less$colon$less$$anon$1`,{dJ:1,dG:1,dH:1,e:1,a:1});function rp(e){return e.d5||=(e.d6=e.ca===null?`null`:op(e),!0),e.d6}function ip(e){return e.d5?e.d6:rp(e)}function ap(e){var t=e.ca;return`of class `+Gn(t)}function op(e){try{return e.ca+` (`+ap(e)+`)`}catch{return`an instance `+ap(e)}}var sp=class extends Jd{constructor(e){super(),this.d6=null,this.ca=null,this.d5=!1,this.ca=e,R(this,null,null,!0,!0)}bI(){return ip(this)}};new E().i(sp,`scala.MatchError`,{dQ:1,T:1,L:1,t:1,a:1});function cp(){}C=cp.prototype=new w,C.constructor=cp;function lp(){}lp.prototype=C,C.h=(function(){return this===X()}),C.B=(function(){return this.h()?0:1}),C.h8=(function(e){return!this.h()&&F().D(this.x(),e)}),C.o=(function(){return this.h()?K().z:new _p(this.x())});function up(e){this.bl=0,this.fk=0,this.fj=null,this.fj=e,this.bl=0,this.fk=e.X()}C=up.prototype=new nf,C.constructor=up;function dp(){}dp.prototype=C,C.u=(function(){return this.bl<this.fk}),C.j=(function(){var e=this.fj.Y(this.bl);return this.bl=1+this.bl|0,e}),new E().i(up,`scala.Product$$anon$1`,{dW:1,r:1,s:1,b:1,c:1});function fp(e){this.cc=null,Gu(this,e)}C=fp.prototype=new qu,C.constructor=fp;function pp(){}pp.prototype=C,new E().i(fp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{ea:1,e9:1,a2:1,a:1,ad:1});function mp(e){return Gs(e,e.b1()+`(`,`, `,`)`)}function hp(){}C=hp.prototype=new nf,C.constructor=hp;function gp(){}gp.prototype=C,C.u=(function(){return!1}),C.i7=(function(){throw new ep(`next on empty iterator`)}),C.B=(function(){return 0}),C.bN=(function(e,t){return this}),C.j=(function(){this.i7()}),new E().i(hp,`scala.collection.Iterator$$anon$19`,{ef:1,r:1,s:1,b:1,c:1});function _p(e){this.bn=!1,this.fo=null,this.fo=e,this.bn=!1}C=_p.prototype=new nf,C.constructor=_p;function vp(){}vp.prototype=C,C.u=(function(){return!this.bn}),C.j=(function(){return this.bn?K().z.j():(this.bn=!0,this.fo)}),C.bN=(function(e,t){return this.bn||e>0||t===0?K().z:this}),new E().i(_p,`scala.collection.Iterator$$anon$20`,{eg:1,r:1,s:1,b:1,c:1});function yp(e){for(;;){if(e.I instanceof xp){var t=e.I;e.I=t.I,e.ag=t.ag,t.T!==null&&(e.S===null&&(e.S=t.S),t.S.bo=e.T,e.T=t.T);continue}return}}function bp(e){for(;;)if(e.T===null)return e.I=null,e.S=null,!1;else{if(e.I=e.T.hO(),e.S===e.T&&(e.S=e.S.bo),e.T=e.T.bo,yp(e),e.ag)return!0;if(e.I!==null&&e.I.u())return e.ag=!0,!0}}function xp(e){this.I=null,this.T=null,this.S=null,this.ag=!1,this.I=e,this.T=null,this.S=null,this.ag=!1}C=xp.prototype=new nf,C.constructor=xp;function Sp(){}Sp.prototype=C,C.u=(function(){return this.ag?!0:this.I===null?!1:this.I.u()?(this.ag=!0,!0):bp(this)}),C.j=(function(){return this.u()?(this.ag=!1,this.I.j()):K().z.j()}),C.h7=(function(e){var t=new qs(e,null);return this.T===null?(this.T=t,this.S=t):(this.S.bo=t,this.S=t),this.I===null&&(this.I=K().z),this}),new E().i(xp,`scala.collection.Iterator$ConcatIterator`,{aJ:1,r:1,s:1,b:1,c:1});function Cp(e){for(;e.aa>0;)e.ah.u()?(e.ah.j(),e.aa=-1+e.aa|0):e.aa=0}function wp(e,t){if(e.O<0)return-1;var n=e.O-t|0;return n<0?0:n}function Tp(e,t,n){this.ah=null,this.O=0,this.aa=0,this.ah=e,this.O=n,this.aa=t}C=Tp.prototype=new nf,C.constructor=Tp;function Ep(){}Ep.prototype=C,C.B=(function(){var e=this.ah.B();if(e<0)return-1;var t=e-this.aa|0,n=t<0?0:t;if(this.O<0)return n;var r=this.O;return r<n?r:n}),C.u=(function(){return Cp(this),this.O!==0&&this.ah.u()}),C.j=(function(){return Cp(this),this.O>0?(this.O=-1+this.O|0,this.ah.j()):this.O<0?this.ah.j():K().z.j()}),C.bN=(function(e,t){var n=e>0?e:0;if(t<0)var r=wp(this,n);else if(t<=n)var r=0;else if(this.O<0)var r=t-n|0;else var i=wp(this,n),a=t-n|0,r=i<a?i:a;var o=this.aa+n|0;return r===0?K().z:o<0?(this.aa=2147483647,this.O=0,Ju(this,new id((()=>new Tp(this.ah,-2147483647+o|0,r))))):(this.aa=o,this.O=r,this)}),new E().i(Tp,`scala.collection.Iterator$SliceIterator`,{ei:1,r:1,s:1,b:1,c:1});function Dp(e,t){return t>=0&&e.ar(t)>0}function Op(e,t){if(t<0)throw qf(new Jf,``+t);var n=e.hl(t);if(n.h())throw qf(new Jf,``+t);return n.a5()}function kp(e,t){return Lh(t)?Ap(e,e,t):lf(e,t)}function Ap(e,t,n){for(;;)if(t===n)return!0;else if(!t.h()&&!n.h()&&F().D(t.a5(),n.a5())){var r=t.Q(),i=n.Q();t=r,n=i}else return t.h()&&n.h()}function jp(e){this.bq=null,this.bq=e}C=jp.prototype=new nf,C.constructor=jp;function Mp(){}Mp.prototype=C,C.u=(function(){return!this.bq.h()}),C.j=(function(){var e=this.bq.a5();return this.bq=this.bq.Q(),e}),new E().i(jp,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{en:1,r:1,s:1,b:1,c:1});function Np(){this.cd=null,rf(this,Hp())}C=Np.prototype=new of,C.constructor=Np;function Pp(){}Pp.prototype=C,new E().i(Np,`scala.collection.mutable.Buffer$`,{ex:1,ek:1,ad:1,a2:1,a:1});var Fp;function Ip(){return Fp||=new Np,Fp}function Lp(e){this.bs=0,this.ft=0,this.fu=null,this.fu=e,this.bs=0,this.ft=e.X()}C=Lp.prototype=new nf,C.constructor=Lp;function Rp(){}Rp.prototype=C,C.u=(function(){return this.bs<this.ft}),C.j=(function(){var e=this.fu.Y(this.bs);return this.bs=1+this.bs|0,e}),new E().i(Lp,`scala.runtime.ScalaRunTime$$anon$1`,{eZ:1,r:1,s:1,b:1,c:1});function zp(){}C=zp.prototype=new w,C.constructor=zp;function Bp(){}Bp.prototype=C,C.dq=(function(e){return this.g7(e)}),C.g7=(function(e){return Il(a_(new o_),e).gl()}),C.dy=(function(e){return this.g7(e)}),new E().i(zp,`scala.scalajs.js.WrappedArray$`,{f5:1,eo:1,ad:1,a2:1,a:1});var Vp;function Hp(){return Vp||=new zp,Vp}function Up(e){this.bt=null,this.bt=e}C=Up.prototype=new vf,C.constructor=Up;function Wp(){}Wp.prototype=C,C.ga=(function(){return!0}),C.gb=(function(){return!1}),C.bH=(function(e,t){return e.d(this.bt)}),C.Z=(function(){return`Failure`}),C.X=(function(){return 1}),C.Y=(function(e){return e===0?this.bt:L().aJ(e)}),C.a9=(function(){return new Lp(this)}),C.n=(function(){return B().b4(this,-889275714,!1)}),C.p=(function(){return I().dl(this)}),C.g=(function(e){if(this===e)return!0;if(e instanceof Up){var t=this.bt,n=e.bt;return t===null?n===null:t.g(n)}else return!1}),new E().i(Up,`scala.util.Failure`,{bg:1,bi:1,N:1,d:1,a:1});function Gp(e){this.bu=null,this.bu=e}C=Gp.prototype=new vf,C.constructor=Gp;function Kp(){}Kp.prototype=C,C.ga=(function(){return!1}),C.gb=(function(){return!0}),C.bH=(function(e,t){try{return t.d(this.bu)}catch(t){var n=t instanceof z?t:new Q(t);if(bc().gX(n))return e.d(n);throw n instanceof Q?n.C:n}}),C.Z=(function(){return`Success`}),C.X=(function(){return 1}),C.Y=(function(e){return e===0?this.bu:L().aJ(e)}),C.a9=(function(){return new Lp(this)}),C.n=(function(){return B().b4(this,-889275714,!1)}),C.p=(function(){return I().dl(this)}),C.g=(function(e){return this===e||e instanceof Gp&&F().D(this.bu,e.bu)}),new E().i(Gp,`scala.util.Success`,{bh:1,bi:1,N:1,d:1,a:1});var qp=class e extends eu{constructor(e){super(),this.b8=null,this.b8=e,R(this,`ObserverError: `+V().cm(e),null,!0,!0)}a9(){return new up(this)}n(){return B().b4(this,-889275714,!1)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.b8,r=t.b8;return n===null?r===null:n.g(r)}else return!1}X(){return 1}Z(){return`ObserverError`}Y(e){if(e===0)return this.b8;throw qf(new Jf,``+e)}p(){return`ObserverError: `+this.b8}};new E().i(qp,`com.raquo.airstream.core.AirstreamError$ObserverError`,{af:1,a4:1,t:1,a:1,d:1,N:1});var Jp=class e extends eu{constructor(e,t){super(),this.ba=null,this.b9=null,this.ba=e,this.b9=t,R(this,`ObserverErrorHandlingError: `+V().cm(e)+`; cause: `+V().cm(t),null,!0,!0),this.hQ(t)}a9(){return new up(this)}n(){return B().b4(this,-889275714,!1)}g(t){if(this===t)return!0;if(t instanceof e){var n=this.ba,r=t.ba;if(n===null?r===null:n.g(r)){var i=this.b9,a=t.b9;return i===null?a===null:i.g(a)}else return!1}else return!1}X(){return 2}Z(){return`ObserverErrorHandlingError`}Y(e){if(e===0)return this.ba;if(e===1)return this.b9;throw qf(new Jf,``+e)}p(){return`ObserverErrorHandlingError: `+this.ba+`; cause: `+this.b9}};new E().i(Jp,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ag:1,a4:1,t:1,a:1,d:1,N:1});var Yp=class e extends eu{constructor(e,t){super(),this.aL=null,this.aK=0,this.aL=e,this.aK=t,R(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}a9(){return new up(this)}n(){var e=-889275714;return e=L().b(e,fm(`TransactionDepthExceeded`)),e=L().b(e,L().A(this.aL)),e=L().b(e,this.aK),L().l(e,2)}g(t){return this===t?!0:t instanceof e&&this.aK===t.aK?this.aL===t.aL:!1}X(){return 2}Z(){return`TransactionDepthExceeded`}Y(e){if(e===0)return this.aL;if(e===1)return this.aK;throw qf(new Jf,``+e)}p(){return`TransactionDepthExceeded: `+this.aL+`; maxDepth: `+this.aK}};new E().i(Yp,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{ah:1,a4:1,t:1,a:1,d:1,N:1});function Xp(e){mh(e)}function Zp(e){this.dY=null,this.e0=null,this.cA=null,this.cz=null,this.dZ=null,this.dY=void 0,Df(this),this.cA=e,this.cz=new Oh(this.cA,new uf((()=>Er(this)))),this.dZ=this.cz}C=Zp.prototype=new w,C.constructor=Zp;function Qp(){}Qp.prototype=C,C.co=(function(){return this.dY}),C.ci=(function(){return Tr(this)}),C.p=(function(){return Er(this)}),C.iH=(function(e,t){this.cA=e,hh(this.cz,e,t)}),new E().i(Zp,`com.raquo.airstream.state.SourceVar`,{bG:1,ai:1,aj:1,X:1,V:1,bI:1});function $p(e){this.aS=null,this.aT=null,this.ev=null,this.ew=!1,Nd(this,e,$g())}C=$p.prototype=new Fd,C.constructor=$p;function em(){}em.prototype=C,C.j1=(function(){return this.ew||=(this.ev=this.q(`wrap`),!0),this.ev}),new E().i($p,`com.raquo.laminar.defs.styles.StyleProps$$anon$31`,{ca:1,a0:1,R:1,Y:1,Z:1,ce:1});function tm(e,t){this.be=null,this.a7=null,this.cW=null,this.aw=null,this.eI=null,this.M=null,this.eI=e,this.M=t,this.be=X(),Zc(this),Nf(this)}C=tm.prototype=new w,C.constructor=tm;function nm(){}nm.prototype=C,C.dt=(function(){return this.be}),C.V=(function(e){Qa().aH(e,this,void 0)}),C.ck=(function(){return this.a7}),C.fU=(function(e){this.a7=e}),C.b7=(function(e){Lf(this,e)}),C.b5=(function(e){Rf(this,e)}),C.p=(function(){return`ReactiveHtmlElement(`+(this.M===null?`tag=`+this.eI.dA():this.M.outerHTML)+`)`}),C.E=(function(){return this.M});var rm=new E().i(tm,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cU:1,a1:1,K:1,a7:1,aq:1,cS:1});function im(e,t){return Object.is(e,t)}function am(e){return Ao().dC(e)}var om=new E().i(0,`java.lang.Double`,{ay:1,U:1,a:1,S:1,M:1,W:1},(e=>typeof e==`number`)),sm=new E().i(0,`java.lang.Float`,{dg:1,U:1,a:1,S:1,M:1,W:1},(e=>or(e))),cm=new E().i(0,`java.lang.Integer`,{dj:1,U:1,a:1,S:1,M:1,W:1},(e=>ar(e)));function lm(e,t){return t instanceof M&&e.c===t.c&&e.f===t.f}function um(e){return e.c^e.f}var dm=new E().i(0,`java.lang.Long`,{aA:1,U:1,a:1,S:1,M:1,W:1},(e=>e instanceof M));function fm(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function pm(e,t){return e===t}var mm=new E().i(0,`java.lang.String`,{dt:1,a:1,S:1,ab:1,M:1,W:1},(e=>typeof e==`string`)),hm=class extends Jf{constructor(){super(),R(this,null,null,!0,!0)}};new E().i(hm,`java.lang.StringIndexOutOfBoundsException`,{dw:1,az:1,T:1,L:1,t:1,a:1});function gm(){}C=gm.prototype=new lp,C.constructor=gm;function _m(){}_m.prototype=C,C.hG=(function(){throw new ep(`None.get`)}),C.Z=(function(){return`None`}),C.X=(function(){return 0}),C.Y=(function(e){return L().aJ(e)}),C.a9=(function(){return new Lp(this)}),C.n=(function(){return 2433880}),C.p=(function(){return`None`}),C.x=(function(){this.hG()}),new E().i(gm,`scala.None$`,{dR:1,aE:1,b:1,N:1,d:1,a:1});var vm;function X(){return vm||=new gm,vm}function Z(e){this.bm=null,this.bm=e}C=Z.prototype=new lp,C.constructor=Z;function ym(){}ym.prototype=C,C.x=(function(){return this.bm}),C.Z=(function(){return`Some`}),C.X=(function(){return 1}),C.Y=(function(e){return e===0?this.bm:L().aJ(e)}),C.a9=(function(){return new Lp(this)}),C.n=(function(){return B().b4(this,-889275714,!1)}),C.p=(function(){return I().dl(this)}),C.g=(function(e){return this===e||e instanceof Z&&F().D(this.bm,e.bm)}),new E().i(Z,`scala.Some`,{aF:1,aE:1,b:1,N:1,d:1,a:1});function bm(){}C=bm.prototype=new w,C.constructor=bm;function xm(){}xm.prototype=C,C.b1=(function(){return this.b6()}),C.a4=(function(e){Ws(this,e)}),C.bw=(function(e,t,n,r){return Ks(this,e,t,n,r)}),C.B=(function(){return-1});function Sm(e,t){return e.N=t,e.i=0,e.H=xs().b2(e.N),e}function Cm(){this.N=null,this.i=0,this.H=0}C=Cm.prototype=new nf,C.constructor=Cm;function wm(){}wm.prototype=C,C.B=(function(){return this.H-this.i|0}),C.u=(function(){return this.i<this.H}),C.j=(function(){this.i>=xs().b2(this.N)&&K().z.j();var e=I().b0(this.N,this.i);return this.i=1+this.i|0,e}),C.cj=(function(e){if(e>0){var t=this.i+e|0;if(t<0)var n=this.H;else var r=this.H,n=r<t?r:t;this.i=n}return this}),new E().i(Cm,`scala.collection.ArrayOps$ArrayIterator`,{O:1,r:1,s:1,b:1,c:1,a:1});function Tm(e,t){return t<0?0:t>e.a1?e.a1:t}function Em(e){this.fn=null,this.af=0,this.a1=0,this.fn=e,this.af=0,this.a1=e.k()}C=Em.prototype=new nf,C.constructor=Em;function Dm(){}Dm.prototype=C,C.B=(function(){return this.a1}),C.u=(function(){return this.a1>0}),C.j=(function(){if(this.a1>0){var e=this.fn.r(this.af);return this.af=1+this.af|0,this.a1=-1+this.a1|0,e}else return K().z.j()}),C.cj=(function(e){if(e>0){this.af=this.af+e|0;var t=this.a1-e|0;this.a1=t<0?0:t}return this}),C.bN=(function(e,t){var n=Tm(this,e),r=Tm(this,t)-n|0;return this.a1=r<0?0:r,this.af=this.af+n|0,this}),new E().i(Em,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{ed:1,r:1,s:1,b:1,c:1,a:1});function Om(e){return e.dg||=(e.dh=new vg(new T(0)),!0),e.dh}function km(e){return e.dg?e.dh:Om(e)}function Am(){this.dh=null,this.gH=null,this.dg=!1,Mm=this,this.gH=new fp(this)}C=Am.prototype=new w,C.constructor=Am;function jm(){}jm.prototype=C,C.hB=(function(e,t){return e instanceof tg?e:this.gp(Tl().g5(e,t))}),C.gp=(function(e){if(e===null)return null;if(e instanceof T)return new vg(e);if(e instanceof gr)return new mg(e);if(e instanceof yr)return new ug(e);if(e instanceof _r)return new gg(e);if(e instanceof vr)return new fg(e);if(e instanceof pr)return new cg(e);if(e instanceof mr)return new og(e);if(e instanceof hr)return new bg(e);if(e instanceof fr)return new ig(e);if(hs(e,1))return new Sg(e);throw new sp(e)}),C.dx=(function(e,t){return this.hB(e,t)}),new E().i(Am,`scala.collection.immutable.ArraySeq$`,{er:1,aL:1,aH:1,aG:1,aI:1,a:1});var Mm;function Nm(){return Mm||=new Am,Mm}function Pm(){this.gI=null,this.fq=null,Im=this,this.gI=new fp(this),this.fq=new Hg(new T(0))}C=Pm.prototype=new w,C.constructor=Pm;function Fm(){}Fm.prototype=C,C.hC=(function(e,t){return this.hZ(Tl().g5(e,t))}),C.hZ=(function(e){if(e===null)return null;if(e instanceof T)return new Hg(e);if(e instanceof gr)return new Rg(e);if(e instanceof yr)return new Pg(e);if(e instanceof _r)return new Bg(e);if(e instanceof vr)return new Ig(e);if(e instanceof pr)return new Mg(e);if(e instanceof mr)return new Ag(e);if(e instanceof hr)return new Wg(e);if(e instanceof fr)return new Og(e);if(hs(e,1))return new Kg(e);throw new sp(e)}),C.dx=(function(e,t){return this.hC(e,t)}),new E().i(Pm,`scala.collection.mutable.ArraySeq$`,{ev:1,aL:1,aH:1,aG:1,aI:1,a:1});var Im;function Lm(){return Im||=new Pm,Im}function Rm(e){this.aS=null,this.aT=null,this.er=null,this.es=!1,Nd(this,e,$g())}C=Rm.prototype=new Fd,C.constructor=Rm;function zm(){}zm.prototype=C,C.hx=(function(){return this.es||=(this.er=this.q(`flex`),!0),this.er}),new E().i(Rm,`com.raquo.laminar.defs.styles.StyleProps$$anon$28`,{c8:1,a0:1,R:1,Y:1,Z:1,cf:1,cc:1});function Bm(e){this.aS=null,this.aT=null,this.et=null,this.eu=!1,Nd(this,e,$g())}C=Bm.prototype=new Fd,C.constructor=Bm;function Vm(){}Vm.prototype=C,C.h4=(function(){return this.eu||=(this.et=this.q(`center`),!0),this.et}),new E().i(Bm,`com.raquo.laminar.defs.styles.StyleProps$$anon$3`,{c9:1,a0:1,R:1,Y:1,Z:1,cg:1,cd:1});function Hm(e){this.aS=null,this.aT=null,this.ex=null,this.ey=!1,Nd(this,e,$g())}C=Hm.prototype=new Fd,C.constructor=Hm;function Um(){}Um.prototype=C,C.iq=(function(){return this.ey||=(this.ex=kc(this),!0),this.ex}),new E().i(Hm,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{cb:1,a0:1,R:1,Y:1,Z:1,ch:1,ci:1});function Wm(){}C=Wm.prototype=new Uf,C.constructor=Wm;function Gm(){}Gm.prototype=C;function Km(e){this.N=null,this.i=0,this.H=0,this.d7=null,this.d7=e,Sm(this,e)}C=Km.prototype=new wm,C.constructor=Km;function qm(){}qm.prototype=C,C.i8=(function(){this.i>=this.d7.a.length&&K().z.j();var e=this.d7.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.i8()}),new E().i(Km,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{e0:1,O:1,r:1,s:1,b:1,c:1,a:1});function Jm(e){this.N=null,this.i=0,this.H=0,this.d8=null,this.d8=e,Sm(this,e)}C=Jm.prototype=new wm,C.constructor=Jm;function Ym(){}Ym.prototype=C,C.i9=(function(){this.i>=this.d8.a.length&&K().z.j();var e=this.d8.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return sr(this.i9())}),new E().i(Jm,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{e1:1,O:1,r:1,s:1,b:1,c:1,a:1});function Xm(e){this.N=null,this.i=0,this.H=0,this.d9=null,this.d9=e,Sm(this,e)}C=Xm.prototype=new wm,C.constructor=Xm;function Zm(){}Zm.prototype=C,C.ia=(function(){this.i>=this.d9.a.length&&K().z.j();var e=this.d9.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.ia()}),new E().i(Xm,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{e2:1,O:1,r:1,s:1,b:1,c:1,a:1});function Qm(e){this.N=null,this.i=0,this.H=0,this.da=null,this.da=e,Sm(this,e)}C=Qm.prototype=new wm,C.constructor=Qm;function $m(){}$m.prototype=C,C.ib=(function(){this.i>=this.da.a.length&&K().z.j();var e=this.da.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.ib()}),new E().i(Qm,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{e3:1,O:1,r:1,s:1,b:1,c:1,a:1});function eh(e){this.N=null,this.i=0,this.H=0,this.db=null,this.db=e,Sm(this,e)}C=eh.prototype=new wm,C.constructor=eh;function th(){}th.prototype=C,C.ic=(function(){this.i>=this.db.a.length&&K().z.j();var e=this.db.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.ic()}),new E().i(eh,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{e4:1,O:1,r:1,s:1,b:1,c:1,a:1});function nh(e){this.N=null,this.i=0,this.H=0,this.dc=null,this.dc=e,Sm(this,e)}C=nh.prototype=new wm,C.constructor=nh;function rh(){}rh.prototype=C,C.id=(function(){this.i>=this.dc.a.length&&K().z.j();var e=this.dc.a[this.i],t=e.c,n=e.f;return this.i=1+this.i|0,new M(t,n)}),C.j=(function(){return this.id()}),new E().i(nh,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{e5:1,O:1,r:1,s:1,b:1,c:1,a:1});function ih(e){this.N=null,this.i=0,this.H=0,this.dd=null,this.dd=e,Sm(this,e)}C=ih.prototype=new wm,C.constructor=ih;function ah(){}ah.prototype=C,C.ie=(function(){this.i>=this.dd.a.length&&K().z.j();var e=this.dd.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.ie()}),new E().i(ih,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{e6:1,O:1,r:1,s:1,b:1,c:1,a:1});function oh(e){this.N=null,this.i=0,this.H=0,this.fm=null,this.fm=e,Sm(this,e)}C=oh.prototype=new wm,C.constructor=oh;function sh(){}sh.prototype=C,C.ig=(function(){this.i>=this.fm.a.length&&K().z.j(),this.i=1+this.i|0}),C.j=(function(){this.ig()}),new E().i(oh,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{e7:1,O:1,r:1,s:1,b:1,c:1,a:1});function ch(e){this.N=null,this.i=0,this.H=0,this.de=null,this.de=e,Sm(this,e)}C=ch.prototype=new wm,C.constructor=ch;function lh(){}lh.prototype=C,C.ih=(function(){this.i>=this.de.a.length&&K().z.j();var e=this.de.a[this.i];return this.i=1+this.i|0,e}),C.j=(function(){return this.ih()}),new E().i(ch,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{e8:1,O:1,r:1,s:1,b:1,c:1,a:1});function uh(e){return e.b1()+`(<not computed>)`}function dh(){}C=dh.prototype=new w,C.constructor=dh;function fh(){}fh.prototype=C;var Q=class e extends Jd{constructor(e){super(),this.C=null,this.C=e,R(this,null,null,!0,!0)}bI(){return Jn(this.C)}Z(){return`JavaScriptException`}X(){return 1}Y(e){return e===0?this.C:L().aJ(e)}a9(){return new Lp(this)}n(){return B().b4(this,-889275714,!1)}g(t){return this===t||t instanceof e&&F().D(this.C,t.C)}};new E().i(Q,`scala.scalajs.js.JavaScriptException`,{bf:1,T:1,L:1,t:1,a:1,N:1,d:1});function ph(e,t){e.bV!==void 0&&Rr().gd(),e.bV=t}function mh(e){var t=e.bV;if(t===void 0){Rr().gd();var n=mh(e);ph(e,n);var r=n}else var r=t;return r}function hh(e,t,n){ph(e,t);var r=t.ga(),i=!1;i=!1,e.bU=!1;for(var a=e.bb,o=0;o<(a.length|0);){var s=a[o];o=1+o|0,s.bK(t),r&&!i&&(i=!0)}for(var c=e.cB,l=0;l<(c.length|0);)c[l],l=1+l|0,r&&!i&&(i=!0);e.bU=!0;var u=e.bW;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].ab(),d=1+d|0;u.length=0}r&&!i&&t.bH(new Y((e=>{V().a0(e)})),new Y((e=>void 0)))}function gh(e,t){typeof console<`u`&&(e.fb&&console.error?console.error(t):console.log(t))}function _h(e){this.fb=!1,this.bj=null,this.fb=e,new Yf,this.bj=``}C=_h.prototype=new Gm,C.constructor=_h;function vh(){}vh.prototype=C,C.hU=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bj=``+this.bj+t,t=``;else{var r=this.bj,i=t;gh(this,``+r+i.substring(0,n)),this.bj=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new E().i(_h,`java.lang.JSConsoleBasedPrintStream`,{dl:1,db:1,da:1,au:1,as:1,aw:1,at:1,av:1});function yh(e,t,n){for(;;)if(t<=0||n.h())return n;else{var r=-1+t|0,i=n.Q();t=r,n=i}}function bh(){this.di=null}C=bh.prototype=new fh,C.constructor=bh;function xh(){}xh.prototype=C,C.p=(function(){return this.di}),C.g=(function(e){return this===e}),C.n=(function(){return nr(this)});function Sh(){}C=Sh.prototype=new xm,C.constructor=Sh;function Ch(){}Ch.prototype=C,C.p=(function(){return uh(this)});function wh(){this.di=null,this.di=`Any`}C=wh.prototype=new xh,C.constructor=wh;function Th(){}Th.prototype=C,C.iF=(function(){return br.l()}),C.i6=(function(e){return new T(e)}),new E().i(wh,`scala.reflect.ManifestFactory$AnyManifest$`,{eJ:1,eL:1,eK:1,eI:1,eH:1,eG:1,eM:1,a:1,d:1});var Eh;function Dh(){return Eh||=new wh,Eh}function Oh(e,t){this.e2=null,this.bU=!1,this.bW=null,this.bb=null,this.cB=null,this.bX=!1,this.bV=null,this.e3=null,this.e3=t,this.e2=void 0,iu(this),yf(this),this.bV=void 0,ph(this,e)}C=Oh.prototype=new w,C.constructor=Oh;function kh(){}kh.prototype=C,C.co=(function(){return this.e2}),C.p=(function(){return Er(this)}),C.g=(function(e){return this===e}),C.n=(function(){return nr(this)}),C.ci=(function(){return this.e3.ab()+`.signal`}),new E().i(Oh,`com.raquo.airstream.state.VarSignal`,{bL:1,ai:1,V:1,bk:1,bm:1,aj:1,br:1,bx:1,by:1,bH:1});function Ah(e,t){return e===t?!0:jh(t)&&t.fQ(e)?e.dG(t):!1}function jh(e){return!!(e&&e.$classData&&e.$classData.n.g)}function Mh(){}C=Mh.prototype=new xm,C.constructor=Mh;function Nh(){}Nh.prototype=C,C.fQ=(function(e){return!0}),C.g=(function(e){return Ah(this,e)}),C.n=(function(){return B().iG(this)}),C.p=(function(){return mp(this)}),C.g9=(function(e){return sf(this,e)}),C.h=(function(){return cf(this)}),C.dG=(function(e){return lf(this,e)}),C.bJ=(function(e){return this.g9(e|0)});function Ph(){}C=Ph.prototype=new Ch,C.constructor=Ph;function Fh(){}Fh.prototype=C;function Ih(e){return!!(e&&e.$classData&&e.$classData.n.n)}function Lh(e){return!!(e&&e.$classData&&e.$classData.n.a3)}function Rh(e){e.gv=co()}function zh(e,t){return e.bp=t,e}function Bh(){this.bp=null}C=Bh.prototype=new Fh,C.constructor=Bh;function Vh(){}Vh.prototype=C,C.r=(function(e){return this.bp.r(e)}),C.k=(function(){return this.bp.k()}),C.h=(function(){return this.bp.h()});function Hh(){this.en=null,this.eo=!1,this.el=null,this.em=!1,this.ed=null,this.ee=!1,this.ej=null,this.ek=!1,this.e9=null,this.ea=!1,this.eb=null,this.ec=!1,this.ef=null,this.eg=!1,this.eh=null,this.ei=!1,this.gu=null,this.e8=null,this.gt=null,this.ep=null,this.eq=!1,this.gv=null,na(this),Xi(this),Ji(this),Yi(this),Rh(this)}C=Hh.prototype=new w,C.constructor=Hh;function Uh(){}Uh.prototype=C,C.dH=(function(){return this.eo||=(this.en=Qc(new $c,`span`,!1),!0),this.en}),C.io=(function(){return this.em||=(this.el=Qc(new $c,`p`,!1),!0),this.el}),C.fV=(function(){return this.ee||=(this.ed=Qc(new $c,`div`,!1),!0),this.ed}),C.gf=(function(){return this.ek||=(this.ej=new Mc(`click`),!0),this.ej}),C.gQ=(function(){return this.ea||=(this.e9=new Bm(`align-items`),!0),this.e9}),C.hi=(function(){return this.ec||=(this.eb=new Rm(`display`),!0),this.eb}),C.hy=(function(){return this.eg||=(this.ef=new $p(`flex-wrap`),!0),this.ef}),C.hF=(function(){return this.ei||=(this.eh=new Hm(`gap`),!0),this.eh}),C.iO=(function(){return this.eq||=(this.ep=new Ed(this),!0),this.ep}),new E().i(Hh,`com.raquo.laminar.api.package$$anon$1`,{bX:1,cj:1,c1:1,c6:1,c5:1,c7:1,c3:1,bV:1,bR:1,bU:1,al:1,ao:1,ak:1,bS:1});function Wh(e){this.bp=null,zh(this,e)}C=Wh.prototype=new Vh,C.constructor=Wh;function Gh(){}Gh.prototype=C,C.o=(function(){return new Em(this)}),C.b6=(function(){return`IndexedSeqView`}),C.ar=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),C.B=(function(){return this.k()}),new E().i(Wh,`scala.collection.IndexedSeqView$Id`,{ec:1,em:1,dX:1,dY:1,h:1,i:1,b:1,k:1,c:1,j:1,ep:1,a:1,el:1,l:1,eb:1,o:1});function Kh(){}C=Kh.prototype=new Nh,C.constructor=Kh;function qh(){}qh.prototype=C;function Jh(e,t){return!Xh(t)||e.k()===t.k()}function Yh(e,t){if(Xh(t)){if(e===t)return!0;var n=e.k(),r=n===t.k();if(r){var i=0,a=e.fF(),o=t.fF(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=F().D(e.r(i),t.r(i)),i=1+i|0;if(i<n&&r)for(var p=e.o().cj(i),m=t.o().cj(i);r&&p.u();)r=F().D(p.j(),m.j())}return r}else return lf(e,t)}function Xh(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Zh(){}C=Zh.prototype=new Nh,C.constructor=Zh;function Qh(){}Qh.prototype=C;function $h(){}C=$h.prototype=new Qh,C.constructor=$h;function eg(){}eg.prototype=C,C.fB=(function(e){return Il(this,e)});function tg(){}C=tg.prototype=new qh,C.constructor=tg;function ng(){}ng.prototype=C,C.fQ=(function(e){return Jh(this,e)}),C.dG=(function(e){return Yh(this,e)}),C.b6=(function(){return`IndexedSeq`}),C.ar=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),C.B=(function(){return this.k()}),C.i1=(function(e){for(var t=new T(this.k()),n=0;n<t.a.length;)t.a[n]=e.d(this.r(n)),n=1+n|0;return Nm().gp(t)}),C.b1=(function(){return`ArraySeq`}),C.fF=(function(){return 2147483647}),C.gc=(function(e){return this.i1(e)});function $(){}C=$.prototype=new Qh,C.constructor=$;function rg(){}rg.prototype=C,C.b6=(function(){return`IndexedSeq`}),C.ar=(function(e){var t=this.k();return t===e?0:t<e?-1:1}),C.B=(function(){return this.k()}),C.b1=(function(){return`ArraySeq`}),C.g=(function(e){return e instanceof $&&xs().b2(this.a2())!==xs().b2(e.a2())?!1:Ah(this,e)});function ig(e){this.ax=null,this.ax=e}C=ig.prototype=new ng,C.constructor=ig;function ag(){}ag.prototype=C,C.k=(function(){return this.ax.a.length}),C.n=(function(){var e=B();return e.fP(this.ax,e.v)}),C.g=(function(e){return e instanceof ig?j().g3(this.ax,e.ax):Ah(this,e)}),C.o=(function(){return new ch(this.ax)}),C.bG=(function(e){return this.ax.a[e]}),C.d=(function(e){return this.bG(e|0)}),C.r=(function(e){return this.bG(e)}),new E().i(ig,`scala.collection.immutable.ArraySeq$ofBoolean`,{aO:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function og(e){this.ay=null,this.ay=e}C=og.prototype=new ng,C.constructor=og;function sg(){}sg.prototype=C,C.k=(function(){return this.ay.a.length}),C.bx=(function(e){return this.ay.a[e]}),C.n=(function(){var e=B();return e.fH(this.ay,e.v)}),C.g=(function(e){return e instanceof og?j().fW(this.ay,e.ay):Ah(this,e)}),C.o=(function(){return new Km(this.ay)}),C.d=(function(e){return this.bx(e|0)}),C.r=(function(e){return this.bx(e)}),new E().i(og,`scala.collection.immutable.ArraySeq$ofByte`,{aP:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function cg(e){this.ai=null,this.ai=e}C=cg.prototype=new ng,C.constructor=cg;function lg(){}lg.prototype=C,C.k=(function(){return this.ai.a.length}),C.by=(function(e){return this.ai.a[e]}),C.n=(function(){var e=B();return e.fI(this.ai,e.v)}),C.g=(function(e){return e instanceof cg?j().fX(this.ai,e.ai):Ah(this,e)}),C.o=(function(){return new Jm(this.ai)}),C.bw=(function(e,t,n,r){return new Mg(this.ai).bw(e,t,n,r)}),C.d=(function(e){return sr(this.by(e|0))}),C.r=(function(e){return sr(this.by(e))}),new E().i(cg,`scala.collection.immutable.ArraySeq$ofChar`,{aQ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function ug(e){this.az=null,this.az=e}C=ug.prototype=new ng,C.constructor=ug;function dg(){}dg.prototype=C,C.k=(function(){return this.az.a.length}),C.n=(function(){var e=B();return e.fJ(this.az,e.v)}),C.g=(function(e){return e instanceof ug?j().fY(this.az,e.az):Ah(this,e)}),C.o=(function(){return new Xm(this.az)}),C.bB=(function(e){return this.az.a[e]}),C.d=(function(e){return this.bB(e|0)}),C.r=(function(e){return this.bB(e)}),new E().i(ug,`scala.collection.immutable.ArraySeq$ofDouble`,{aR:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function fg(e){this.aA=null,this.aA=e}C=fg.prototype=new ng,C.constructor=fg;function pg(){}pg.prototype=C,C.k=(function(){return this.aA.a.length}),C.n=(function(){var e=B();return e.fK(this.aA,e.v)}),C.g=(function(e){return e instanceof fg?j().fZ(this.aA,e.aA):Ah(this,e)}),C.o=(function(){return new Qm(this.aA)}),C.bC=(function(e){return this.aA.a[e]}),C.d=(function(e){return this.bC(e|0)}),C.r=(function(e){return this.bC(e)}),new E().i(fg,`scala.collection.immutable.ArraySeq$ofFloat`,{aS:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function mg(e){this.aB=null,this.aB=e}C=mg.prototype=new ng,C.constructor=mg;function hg(){}hg.prototype=C,C.k=(function(){return this.aB.a.length}),C.n=(function(){var e=B();return e.fL(this.aB,e.v)}),C.g=(function(e){return e instanceof mg?j().g0(this.aB,e.aB):Ah(this,e)}),C.o=(function(){return new eh(this.aB)}),C.bD=(function(e){return this.aB.a[e]}),C.d=(function(e){return this.bD(e|0)}),C.r=(function(e){return this.bD(e)}),new E().i(mg,`scala.collection.immutable.ArraySeq$ofInt`,{aT:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function gg(e){this.aC=null,this.aC=e}C=gg.prototype=new ng,C.constructor=gg;function _g(){}_g.prototype=C,C.k=(function(){return this.aC.a.length}),C.n=(function(){var e=B();return e.fM(this.aC,e.v)}),C.g=(function(e){return e instanceof gg?j().g1(this.aC,e.aC):Ah(this,e)}),C.o=(function(){return new nh(this.aC)}),C.bE=(function(e){return this.aC.a[e]}),C.d=(function(e){return this.bE(e|0)}),C.r=(function(e){return this.bE(e)}),new E().i(gg,`scala.collection.immutable.ArraySeq$ofLong`,{aU:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function vg(e){this.aD=null,this.aD=e}C=vg.prototype=new ng,C.constructor=vg;function yg(){}yg.prototype=C,C.k=(function(){return this.aD.a.length}),C.r=(function(e){return this.aD.a[e]}),C.n=(function(){var e=B();return e.fG(this.aD,e.v)}),C.g=(function(e){return e instanceof vg?Tl().g4(this.aD,e.aD):Ah(this,e)}),C.o=(function(){return Sm(new Cm,this.aD)}),C.d=(function(e){return this.r(e|0)}),new E().i(vg,`scala.collection.immutable.ArraySeq$ofRef`,{aV:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function bg(e){this.aE=null,this.aE=e}C=bg.prototype=new ng,C.constructor=bg;function xg(){}xg.prototype=C,C.k=(function(){return this.aE.a.length}),C.bz=(function(e){return this.aE.a[e]}),C.n=(function(){var e=B();return e.fN(this.aE,e.v)}),C.g=(function(e){return e instanceof bg?j().g2(this.aE,e.aE):Ah(this,e)}),C.o=(function(){return new ih(this.aE)}),C.d=(function(e){return this.bz(e|0)}),C.r=(function(e){return this.bz(e)}),new E().i(bg,`scala.collection.immutable.ArraySeq$ofShort`,{aW:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function Sg(e){this.aZ=null,this.aZ=e}C=Sg.prototype=new ng,C.constructor=Sg;function Cg(){}Cg.prototype=C,C.k=(function(){return this.aZ.a.length}),C.n=(function(){var e=B();return e.fO(this.aZ,e.v)}),C.g=(function(e){return e instanceof Sg?this.aZ.a.length===e.aZ.a.length:Ah(this,e)}),C.o=(function(){return new oh(this.aZ)}),C.bF=(function(e){}),C.d=(function(e){this.bF(e|0)}),C.r=(function(e){this.bF(e)}),new E().i(Sg,`scala.collection.immutable.ArraySeq$ofUnit`,{aX:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,Q:1,A:1,q:1,p:1,P:1,a:1});function wg(e,t,n,r){for(;;)if(t===r)return n.h()?0:1;else if(n.h())return-1;else{var i=1+t|0,a=n.Q();t=i,n=a}}function Tg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.h(),i=n.h();if(!(r||i)&&F().D(t.a5(),n.a5())){var a=t.Q(),o=n.Q();t=a,n=o}else return r&&i}}function Eg(){}C=Eg.prototype=new qh,C.constructor=Eg;function Dg(){}Dg.prototype=C,C.o=(function(){return new jp(this)}),C.b6=(function(){return`LinearSeq`}),C.g9=(function(e){return Dp(this,e)}),C.r=(function(e){return Op(this,e)}),C.dG=(function(e){return kp(this,e)}),C.h=(function(){return this===$g()}),C.i2=(function(e){if(this===$g())return $g();for(var t=new Jg(e.d(this.a5()),$g()),n=t,r=this.Q();r!==$g();){var i=new Jg(e.d(r.a5()),$g());n.ce=i,n=i,r=r.Q()}return t}),C.a4=(function(e){for(var t=this;!t.h();)e.d(t.a5()),t=t.Q()}),C.k=(function(){for(var e=this,t=0;!e.h();)t=1+t|0,e=e.Q();return t}),C.ar=(function(e){return e<0?1:wg(this,0,this,e)}),C.b1=(function(){return`List`}),C.g=(function(e){return e instanceof Eg?Tg(this,this,e):Ah(this,e)}),C.d=(function(e){return Op(this,e|0)}),C.bJ=(function(e){return Dp(this,e|0)}),C.hl=(function(e){return yh(this,e,this)}),C.gc=(function(e){return this.i2(e)});function Og(e){this.aj=null,this.aj=e}C=Og.prototype=new rg,C.constructor=Og;function kg(){}kg.prototype=C,C.k=(function(){return this.aj.a.length}),C.n=(function(){var e=B();return e.fP(this.aj,e.v)}),C.g=(function(e){return e instanceof Og?j().g3(this.aj,e.aj):$.prototype.g.call(this,e)}),C.o=(function(){return new ch(this.aj)}),C.bG=(function(e){return this.aj.a[e]}),C.d=(function(e){return this.bG(e|0)}),C.r=(function(e){return this.bG(e)}),C.a2=(function(){return this.aj}),new E().i(Og,`scala.collection.mutable.ArraySeq$ofBoolean`,{b0:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ag(e){this.ak=null,this.ak=e}C=Ag.prototype=new rg,C.constructor=Ag;function jg(){}jg.prototype=C,C.k=(function(){return this.ak.a.length}),C.bx=(function(e){return this.ak.a[e]}),C.n=(function(){var e=B();return e.fH(this.ak,e.v)}),C.g=(function(e){return e instanceof Ag?j().fW(this.ak,e.ak):$.prototype.g.call(this,e)}),C.o=(function(){return new Km(this.ak)}),C.d=(function(e){return this.bx(e|0)}),C.r=(function(e){return this.bx(e)}),C.a2=(function(){return this.ak}),new E().i(Ag,`scala.collection.mutable.ArraySeq$ofByte`,{b1:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Mg(e){this.U=null,this.U=e}C=Mg.prototype=new rg,C.constructor=Mg;function Ng(){}Ng.prototype=C,C.k=(function(){return this.U.a.length}),C.by=(function(e){return this.U.a[e]}),C.n=(function(){var e=B();return e.fI(this.U,e.v)}),C.g=(function(e){return e instanceof Mg?j().fX(this.U,e.U):$.prototype.g.call(this,e)}),C.o=(function(){return new Jm(this.U)}),C.bw=(function(e,t,n,r){var i=e.P;t.length!==0&&(i.s=``+i.s+t);var a=this.U.a.length;if(a!==0)if(n===``)i.gS(this.U);else{i.k();var o=this.U.a[0],s=``+Qn(o);i.s+=s;for(var c=1;c<a;){i.s=``+i.s+n;var l=this.U.a[c],u=``+Qn(l);i.s+=u,c=1+c|0}}return r.length!==0&&(i.s=``+i.s+r),e}),C.d=(function(e){return sr(this.by(e|0))}),C.r=(function(e){return sr(this.by(e))}),C.a2=(function(){return this.U}),new E().i(Mg,`scala.collection.mutable.ArraySeq$ofChar`,{b2:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Pg(e){this.al=null,this.al=e}C=Pg.prototype=new rg,C.constructor=Pg;function Fg(){}Fg.prototype=C,C.k=(function(){return this.al.a.length}),C.n=(function(){var e=B();return e.fJ(this.al,e.v)}),C.g=(function(e){return e instanceof Pg?j().fY(this.al,e.al):$.prototype.g.call(this,e)}),C.o=(function(){return new Xm(this.al)}),C.bB=(function(e){return this.al.a[e]}),C.d=(function(e){return this.bB(e|0)}),C.r=(function(e){return this.bB(e)}),C.a2=(function(){return this.al}),new E().i(Pg,`scala.collection.mutable.ArraySeq$ofDouble`,{b3:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Ig(e){this.am=null,this.am=e}C=Ig.prototype=new rg,C.constructor=Ig;function Lg(){}Lg.prototype=C,C.k=(function(){return this.am.a.length}),C.n=(function(){var e=B();return e.fK(this.am,e.v)}),C.g=(function(e){return e instanceof Ig?j().fZ(this.am,e.am):$.prototype.g.call(this,e)}),C.o=(function(){return new Qm(this.am)}),C.bC=(function(e){return this.am.a[e]}),C.d=(function(e){return this.bC(e|0)}),C.r=(function(e){return this.bC(e)}),C.a2=(function(){return this.am}),new E().i(Ig,`scala.collection.mutable.ArraySeq$ofFloat`,{b4:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Rg(e){this.an=null,this.an=e}C=Rg.prototype=new rg,C.constructor=Rg;function zg(){}zg.prototype=C,C.k=(function(){return this.an.a.length}),C.n=(function(){var e=B();return e.fL(this.an,e.v)}),C.g=(function(e){return e instanceof Rg?j().g0(this.an,e.an):$.prototype.g.call(this,e)}),C.o=(function(){return new eh(this.an)}),C.bD=(function(e){return this.an.a[e]}),C.d=(function(e){return this.bD(e|0)}),C.r=(function(e){return this.bD(e)}),C.a2=(function(){return this.an}),new E().i(Rg,`scala.collection.mutable.ArraySeq$ofInt`,{b5:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Bg(e){this.ao=null,this.ao=e}C=Bg.prototype=new rg,C.constructor=Bg;function Vg(){}Vg.prototype=C,C.k=(function(){return this.ao.a.length}),C.n=(function(){var e=B();return e.fM(this.ao,e.v)}),C.g=(function(e){return e instanceof Bg?j().g1(this.ao,e.ao):$.prototype.g.call(this,e)}),C.o=(function(){return new nh(this.ao)}),C.bE=(function(e){return this.ao.a[e]}),C.d=(function(e){return this.bE(e|0)}),C.r=(function(e){return this.bE(e)}),C.a2=(function(){return this.ao}),new E().i(Bg,`scala.collection.mutable.ArraySeq$ofLong`,{b6:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Hg(e){this.ap=null,this.ap=e}C=Hg.prototype=new rg,C.constructor=Hg;function Ug(){}Ug.prototype=C,C.k=(function(){return this.ap.a.length}),C.r=(function(e){return this.ap.a[e]}),C.n=(function(){var e=B();return e.fG(this.ap,e.v)}),C.g=(function(e){return e instanceof Hg?Tl().g4(this.ap,e.ap):$.prototype.g.call(this,e)}),C.o=(function(){return Sm(new Cm,this.ap)}),C.d=(function(e){return this.r(e|0)}),C.a2=(function(){return this.ap}),new E().i(Hg,`scala.collection.mutable.ArraySeq$ofRef`,{b7:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Wg(e){this.aq=null,this.aq=e}C=Wg.prototype=new rg,C.constructor=Wg;function Gg(){}Gg.prototype=C,C.k=(function(){return this.aq.a.length}),C.bz=(function(e){return this.aq.a[e]}),C.n=(function(){var e=B();return e.fN(this.aq,e.v)}),C.g=(function(e){return e instanceof Wg?j().g2(this.aq,e.aq):$.prototype.g.call(this,e)}),C.o=(function(){return new ih(this.aq)}),C.d=(function(e){return this.bz(e|0)}),C.r=(function(e){return this.bz(e)}),C.a2=(function(){return this.aq}),new E().i(Wg,`scala.collection.mutable.ArraySeq$ofShort`,{b8:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Kg(e){this.aF=null,this.aF=e}C=Kg.prototype=new rg,C.constructor=Kg;function qg(){}qg.prototype=C,C.k=(function(){return this.aF.a.length}),C.n=(function(){var e=B();return e.fO(this.aF,e.v)}),C.g=(function(e){return e instanceof Kg?this.aF.a.length===e.aF.a.length:$.prototype.g.call(this,e)}),C.o=(function(){return new oh(this.aF)}),C.bF=(function(e){}),C.d=(function(e){this.bF(e|0)}),C.r=(function(e){this.bF(e)}),C.a2=(function(){return this.aF}),new E().i(Kg,`scala.collection.mutable.ArraySeq$ofUnit`,{b9:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Jg(e,t){this.df=null,this.ce=null,this.df=e,this.ce=t}C=Jg.prototype=new Dg,C.constructor=Jg;function Yg(){}Yg.prototype=C,C.a5=(function(){return this.df}),C.Z=(function(){return`::`}),C.X=(function(){return 2}),C.Y=(function(e){switch(e){case 0:return this.df;case 1:return this.ce;default:return L().aJ(e)}}),C.a9=(function(){return new Lp(this)}),C.Q=(function(){return this.ce}),new E().i(Jg,`scala.collection.immutable.$colon$colon`,{eq:1,ae:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aY:1,a3:1,aK:1,aZ:1,aM:1,q:1,p:1,A:1,aN:1,a:1,N:1});function Xg(){}C=Xg.prototype=new Dg,C.constructor=Xg;function Zg(){}Zg.prototype=C,C.hN=(function(){throw new ep(`head of empty list`)}),C.iS=(function(){throw new $f(`tail of empty list`)}),C.B=(function(){return 0}),C.o=(function(){return K().z}),C.Z=(function(){return`Nil`}),C.X=(function(){return 0}),C.Y=(function(e){return L().aJ(e)}),C.a9=(function(){return new Lp(this)}),C.Q=(function(){this.iS()}),C.a5=(function(){this.hN()}),new E().i(Xg,`scala.collection.immutable.Nil$`,{et:1,ae:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,y:1,x:1,z:1,aY:1,a3:1,aK:1,aZ:1,aM:1,q:1,p:1,A:1,aN:1,a:1,N:1});var Qg;function $g(){return Qg||=new Xg,Qg}function e_(e,t){return e.P=t,e}function t_(e){return e_(e,new Yd),e}function n_(){this.P=null}C=n_.prototype=new Qh,C.constructor=n_;function r_(){}r_.prototype=C,C.b6=(function(){return`IndexedSeq`}),C.o=(function(){return new Em(new Wh(this))}),C.ar=(function(e){var t=this.P.k();return t===e?0:t<e?-1:1}),C.fB=(function(e){return Il(this,e)}),C.k=(function(){return this.P.k()}),C.B=(function(){return this.P.k()}),C.gO=(function(e){var t=this.P,n=``+Qn(e);return t.s+=n,this}),C.p=(function(){return this.P.s}),C.h=(function(){return this.P.k()===0}),C.gl=(function(){return this.P.s}),C.dn=(function(e){return this.gO(cr(e))}),C.d=(function(e){var t=e|0;return sr(this.P.fR(t))}),C.r=(function(e){return sr(this.P.fR(e))}),new E().i(n_,`scala.collection.mutable.StringBuilder`,{eB:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ez:1,ba:1,bc:1,bb:1,D:1,n:1,o:1,E:1,ab:1,a:1});function i_(e,t){return e.aG=t,e}function a_(e){return i_(e,[]),e}function o_(){this.aG=null}C=o_.prototype=new eg,C.constructor=o_;function s_(){}s_.prototype=C,C.b6=(function(){return`IndexedSeq`}),C.o=(function(){return new Em(new Wh(this))}),C.ar=(function(e){var t=this.aG.length|0;return t===e?0:t<e?-1:1}),C.r=(function(e){return this.aG[e]}),C.k=(function(){return this.aG.length|0}),C.B=(function(){return this.aG.length|0}),C.b1=(function(){return`WrappedArray`}),C.gl=(function(){return this}),C.dn=(function(e){return this.aG.push(e),this}),C.d=(function(e){var t=e|0;return this.aG[t]}),new E().i(o_,`scala.scalajs.js.WrappedArray`,{f4:1,eu:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,g:1,f:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ew:1,bc:1,bb:1,eA:1,q:1,p:1,D:1,n:1,o:1,E:1,ey:1,ba:1,a:1}),Hn=new M(0,0),Cr.z=Hn,So(new(mm.r()).C([]));