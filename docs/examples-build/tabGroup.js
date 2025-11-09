var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function n(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function r(e,t,r=`vertical`,i=`smooth`){let a=n(e,t),o=a.top+t.scrollTop,s=a.left+t.scrollLeft,c=t.scrollLeft,l=t.scrollLeft+t.offsetWidth,u=t.scrollTop,d=t.scrollTop+t.offsetHeight;(r===`horizontal`||r===`both`)&&(s<c?t.scrollTo({left:s,behavior:i}):s+e.clientWidth>l&&t.scrollTo({left:s-t.offsetWidth+e.clientWidth,behavior:i})),(r===`vertical`||r===`both`)&&(o<u?t.scrollTo({top:o,behavior:i}):o+e.clientHeight>d&&t.scrollTo({top:o-t.offsetHeight+e.clientHeight,behavior:i}))}const i=new Set,a=new Map;let o,s=`ltr`,c=`en`;const l=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(l){let e=new MutationObserver(d);s=document.documentElement.dir||`ltr`,c=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function u(...e){e.map(e=>{let t=e.$code.toLowerCase();a.has(t)?a.set(t,Object.assign(Object.assign({},a.get(t)),e)):a.set(t,e),o||=e}),d()}function d(){l&&(s=document.documentElement.dir||`ltr`,c=document.documentElement.lang||navigator.language),[...i.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var f=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){i.add(this.host)}hostDisconnected(){i.delete(this.host)}dir(){return`${this.host.dir||s}`.toLowerCase()}lang(){return`${this.host.lang||c}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:a.get(`${n}-${r}`),secondary:a.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&o&&o[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(o&&o[e])i=o[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},p={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,pauseAnimation:`Pause animation`,playAnimation:`Play animation`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};u(p);var m=p,ee=class extends f{};u(m);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function h(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var te=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,re=e=>{throw TypeError(e)},g=(e,t,n,r)=>{for(var i=r>1?void 0:r?ne(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&te(t,n,i),i},ie=(e,t,n)=>t.has(e)||re(`Cannot `+n),ae=(e,t,n)=>(ie(e,t,`read from private field`),n?n.call(e):t.get(e)),oe=(e,t,n)=>t.has(e)?re(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),se=(e,t,n,r)=>(ie(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const ce=globalThis,le=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ue=Symbol(),de=new WeakMap;var fe=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ue)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(le&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=de.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&de.set(t,e))}return e}toString(){return this.cssText}};const pe=e=>new fe(typeof e==`string`?e:e+``,void 0,ue),me=(e,t)=>{if(le)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=ce.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},he=le?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return pe(t)})(e):e,{is:ge,defineProperty:_e,getOwnPropertyDescriptor:ve,getOwnPropertyNames:ye,getOwnPropertySymbols:be,getPrototypeOf:xe}=Object,Se=globalThis,Ce=Se.trustedTypes,we=Ce?Ce.emptyScript:``,Te=Se.reactiveElementPolyfillSupport,Ee=(e,t)=>e,De={toAttribute(e,t){switch(t){case Boolean:e=e?we:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Oe=(e,t)=>!ge(e,t),ke={attribute:!0,type:String,converter:De,reflect:!1,useDefault:!1,hasChanged:Oe};Symbol.metadata??=Symbol(`metadata`),Se.litPropertyMetadata??=new WeakMap;var Ae=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ke){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&_e(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ve(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ke}static _$Ei(){if(this.hasOwnProperty(Ee(`elementProperties`)))return;let e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ee(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ee(`properties`))){let e=this.properties,t=[...ye(e),...be(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(he(e))}else e!==void 0&&t.push(he(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?De:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?De:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??Oe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};Ae.elementStyles=[],Ae.shadowRootOptions={mode:`open`},Ae[Ee(`elementProperties`)]=new Map,Ae[Ee(`finalized`)]=new Map,Te?.({ReactiveElement:Ae}),(Se.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const je=globalThis,Me=je.trustedTypes,Ne=Me?Me.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Pe=`$lit$`,Fe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ie=`?`+Fe,Le=`<${Ie}>`,Re=document,ze=()=>Re.createComment(``),Be=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Ve=Array.isArray,He=e=>Ve(e)||typeof e?.[Symbol.iterator]==`function`,Ue=`[ 	
\f\r]`,We=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ge=/-->/g,Ke=/>/g,qe=RegExp(`>|${Ue}(?:([^\\s"'>=/]+)(${Ue}*=${Ue}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),Je=/'/g,Ye=/"/g,Xe=/^(?:script|style|textarea|title)$/i,Ze=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Qe=Symbol.for(`lit-noChange`),_=Symbol.for(`lit-nothing`),$e=new WeakMap,et=Re.createTreeWalker(Re,129);function tt(e,t){if(!Ve(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Ne===void 0?t:Ne.createHTML(t)}const nt=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=We;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===We?c[1]===`!--`?o=Ge:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=qe):(Xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=qe):o=Ke:o===qe?c[0]===`>`?(o=i??We,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?qe:c[3]===`"`?Ye:Je):o===Ye||o===Je?o=qe:o===Ge||o===Ke?o=We:(o=qe,i=void 0);let d=o===qe&&e[t+1].startsWith(`/>`)?` `:``;a+=o===We?n+Le:l>=0?(r.push(s),n.slice(0,l)+Pe+n.slice(l)+Fe+d):n+Fe+(l===-2?t:d)}return[tt(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var rt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=nt(t,n);if(this.el=e.createElement(l,r),et.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=et.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Pe)){let t=u[o++],n=i.getAttribute(e).split(Fe),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ct:r[1]===`?`?lt:r[1]===`@`?ut:st}),i.removeAttribute(e)}else e.startsWith(Fe)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Xe.test(i.tagName)){let e=i.textContent.split(Fe),t=e.length-1;if(t>0){i.textContent=Me?Me.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],ze()),et.nextNode(),c.push({type:2,index:++a});i.append(e[t],ze())}}}else if(i.nodeType===8)if(i.data===Ie)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Fe,e+1))!==-1;)c.push({type:7,index:a}),e+=Fe.length-1}a++}}static createElement(e,t){let n=Re.createElement(`template`);return n.innerHTML=e,n}};function it(e,t,n=e,r){if(t===Qe)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=Be(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=it(e,i._$AS(e,t.values),i,r)),t}var at=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Re).importNode(t,!0);et.currentNode=r;let i=et.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ot(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new dt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=et.nextNode(),a++)}return et.currentNode=Re,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ot=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=it(this,e,t),Be(e)?e===_||e==null||e===``?(this._$AH!==_&&this._$AR(),this._$AH=_):e!==this._$AH&&e!==Qe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?He(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_&&Be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Re.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=rt.createElement(tt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new at(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=$e.get(e.strings);return t===void 0&&$e.set(e.strings,t=new rt(e)),t}k(t){Ve(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(ze()),this.O(ze()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},st=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=_,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=it(this,e,t,0),a=!Be(e)||e!==this._$AH&&e!==Qe,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=it(this,r[n+o],t,o),s===Qe&&(s=this._$AH[o]),a||=!Be(s)||s!==this._$AH[o],s===_?e=_:e!==_&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ct=class extends st{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_?void 0:e}},lt=class extends st{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_)}},ut=class extends st{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=it(this,e,t,0)??_)===Qe)return;let n=this._$AH,r=e===_&&n!==_||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},dt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){it(this,e)}};const ft={M:Pe,P:Fe,A:Ie,C:1,L:nt,R:at,D:He,V:it,I:ot,H:st,N:lt,U:ut,B:ct,F:dt},pt=je.litHtmlPolyfillSupport;pt?.(rt,ot),(je.litHtmlVersions??=[]).push(`3.3.1`);const mt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ot(t.insertBefore(ze(),e),e,void 0,n??{})}return i._$AI(e),i},ht=globalThis;var gt=class extends Ae{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=mt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Qe}};gt._$litElement$=!0,gt.finalized=!0,ht.litElementHydrateSupport?.({LitElement:gt});const _t=ht.litElementPolyfillSupport;_t?.({LitElement:gt}),(ht.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const vt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},yt={attribute:!0,type:String,converter:De,reflect:!1,hasChanged:Oe},bt=(e=yt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function v(e){return(t,n)=>typeof n==`object`?bt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function xt(e){return v({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const St=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Ct(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return St(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return St(n,r,{get(){return a(this)}})}}
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var wt=`:host {
  box-sizing: border-box !important;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: inherit !important;
}

[hidden] {
  display: none !important;
}
`,Tt,Et=class extends gt{constructor(){super(),oe(this,Tt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[wt,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]].map(e=>typeof e==`string`?pe(e):e)}attributeChangedCallback(e,t,n){ae(this,Tt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),se(this,Tt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};Tt=new WeakMap,g([v()],Et.prototype,`dir`,2),g([v()],Et.prototype,`lang`,2),g([v({type:Boolean,reflect:!0,attribute:`did-ssr`})],Et.prototype,`didSSR`,2);
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
*/const At=Ot(class extends kt{constructor(e){if(super(e),e.type!==Dt.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Qe}});
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var jt=class extends Event{constructor(e){super(`wa-tab-hide`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Mt=class extends Event{constructor(e){super(`wa-tab-show`,{bubbles:!0,cancelable:!1,composed:!0}),this.detail=e}},Nt=`:host {
  --indicator-color: var(--wa-color-brand-fill-loud);
  --track-color: var(--wa-color-neutral-fill-normal);
  --track-width: 0.125rem;

  display: block;
}

.tab-group {
  display: flex;
  border-radius: 0;
}

.tabs {
  display: flex;
  position: relative;
}

.indicator {
  position: absolute;
}

.tab-group-has-scroll-controls .nav-container {
  position: relative;
  padding: 0 1.5em;
}

.body {
  display: block;
}

.scroll-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1.5em;
}

.scroll-button-start {
  inset-inline-start: 0;
}

.scroll-button-end {
  inset-inline-end: 0;
}

/*
   * Top
   */

.tab-group-top {
  flex-direction: column;
}

.tab-group-top .nav-container {
  order: 1;
}

.tab-group-top .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-top .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-top .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-bottom: solid var(--track-width) var(--track-color);
}

.tab-group-top .indicator {
  bottom: calc(-1 * var(--track-width));
  border-bottom: solid var(--track-width) var(--indicator-color);
}

.tab-group-top .body {
  order: 2;
}

.tab-group-top ::slotted(wa-tab[active]) {
  border-block-end: solid var(--track-width) var(--indicator-color);
  margin-block-end: calc(-1 * var(--track-width));
}

.tab-group-top ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Bottom
   */

.tab-group-bottom {
  flex-direction: column;
}

.tab-group-bottom .nav-container {
  order: 2;
}

.tab-group-bottom .nav {
  display: flex;
  overflow-x: auto;

  /* Hide scrollbar in Firefox */
  scrollbar-width: none;
}

/* Hide scrollbar in Chrome/Safari */
.tab-group-bottom .nav::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.tab-group-bottom .tabs {
  flex: 1 1 auto;
  position: relative;
  flex-direction: row;
  border-top: solid var(--track-width) var(--track-color);
}

.tab-group-bottom .indicator {
  top: calc(-1 * var(--track-width));
  border-top: solid var(--track-width) var(--indicator-color);
}

.tab-group-bottom .body {
  order: 1;
}

.tab-group-bottom ::slotted(wa-tab[active]) {
  border-block-start: solid var(--track-width) var(--indicator-color);
  margin-block-start: calc(-1 * var(--track-width));
}

.tab-group-bottom ::slotted(wa-tab-panel) {
  --padding: var(--wa-space-xl) 0;
}

/*
   * Start
   */

.tab-group-start {
  flex-direction: row;
}

.tab-group-start .nav-container {
  order: 1;
}

.tab-group-start .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-inline-end: solid var(--track-width) var(--track-color);
}

.tab-group-start .indicator {
  inset-inline-end: calc(-1 * var(--track-width));
  border-right: solid var(--track-width) var(--indicator-color);
}

.tab-group-start .body {
  flex: 1 1 auto;
  order: 2;
}

.tab-group-start ::slotted(wa-tab[active]) {
  border-inline-end: solid var(--track-width) var(--indicator-color);
  margin-inline-end: calc(-1 * var(--track-width));
}

.tab-group-start ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}

/*
   * End
   */

.tab-group-end {
  flex-direction: row;
}

.tab-group-end .nav-container {
  order: 2;
}

.tab-group-end .tabs {
  flex: 0 0 auto;
  flex-direction: column;
  border-left: solid var(--track-width) var(--track-color);
}

.tab-group-end .indicator {
  inset-inline-start: calc(-1 * var(--track-width));
  border-inline-start: solid var(--track-width) var(--indicator-color);
}

.tab-group-end .body {
  flex: 1 1 auto;
  order: 1;
}

.tab-group-end ::slotted(wa-tab[active]) {
  border-inline-start: solid var(--track-width) var(--indicator-color);
  margin-inline-start: calc(-1 * var(--track-width));
}

.tab-group-end ::slotted(wa-tab-panel) {
  --padding: 0 var(--wa-space-xl);
}
`,y=class extends Et{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ee(this),this.hasScrollControls=!1,this.active=``,this.placement=`top`,this.activation=`auto`,this.withoutScrollControls=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels());let t=e.filter(e=>e.target.closest(`wa-tab-group`)===this);if(t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`wa-tab`).map(e=>e.target).find(e=>e.active);e&&e.closest(`wa-tab-group`)===this&&this.setActiveTab(e)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),new IntersectionObserver((e,t)=>{if(e[0].intersectionRatio>0){if(this.setAriaLabels(),this.active){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e)}else this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1});t.unobserve(e[0].target)}}).observe(this.tabGroup)})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.nav&&this.resizeObserver?.unobserve(this.nav)}getAllTabs(){return[...this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab`)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()===`wa-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`wa-tab`);t?.closest(`wa-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`wa-tab`);if(t?.closest(`wa-tab-group`)===this){if([`Enter`,` `].includes(e.key)){t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault());return}if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,i=null;if(t?.tagName.toLowerCase()===`wa-tab`){if(e.key===`Home`)i=this.focusableTabs[0];else if(e.key===`End`)i=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);i=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);i=this.findNextFocusableTab(e,`forward`)}if(!i)return;i.tabIndex=0,i.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(i,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===i?0:-1}),[`top`,`bottom`].includes(this.placement)&&r(i,this.nav,`horizontal`),e.preventDefault()}}}}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t={emitEvents:!0,scrollBehavior:`auto`,...t},e.closest(`wa-tab-group`)===this&&e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.active=e.panel,this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),[`top`,`bottom`].includes(this.placement)&&r(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.dispatchEvent(new jt({name:n.panel})),this.dispatchEvent(new Mt({name:this.activeTab.panel})))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.updateComplete.then(()=>this.updateScrollControls())}updateActiveTab(){let e=this.tabs.find(e=>e.panel===this.active);e&&this.setActiveTab(e,{scrollBehavior:`smooth`})}updateScrollControls(){this.withoutScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}render(){let e=this.hasUpdated?this.localize.dir()===`rtl`:this.dir===`rtl`;return Ze`
      <div
        part="base"
        class=${At({"tab-group":!0,"tab-group-top":this.placement===`top`,"tab-group-bottom":this.placement===`bottom`,"tab-group-start":this.placement===`start`,"tab-group-end":this.placement===`end`,"tab-group-has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="nav-container" part="nav">
          ${this.hasScrollControls?Ze`
                <wa-button
                  part="scroll-button scroll-button-start"
                  exportparts="base:scroll-button__base"
                  class="scroll-button scroll-button-start"
                  appearance="plain"
                  @click=${this.handleScrollToStart}
                >
                  <wa-icon
                    name=${e?`chevron-right`:`chevron-left`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToStart`)}
                  ></wa-icon>
                </wa-button>
              `:``}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="nav" @focus=${()=>this.activeTab?.focus({preventScroll:!0})}>
            <div part="tabs" class="tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?Ze`
                <wa-button
                  part="scroll-button scroll-button-end"
                  class="scroll-button scroll-button-end"
                  exportparts="base:scroll-button__base"
                  appearance="plain"
                  @click=${this.handleScrollToEnd}
                >
                  <wa-icon
                    name=${e?`chevron-left`:`chevron-right`}
                    library="system"
                    variant="solid"
                    label=${this.localize.term(`scrollToEnd`)}
                  ></wa-icon>
                </wa-button>
              `:``}
        </div>

        <slot part="body" class="body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};y.css=Nt,g([Ct(`.tab-group`)],y.prototype,`tabGroup`,2),g([Ct(`.body`)],y.prototype,`body`,2),g([Ct(`.nav`)],y.prototype,`nav`,2),g([xt()],y.prototype,`hasScrollControls`,2),g([v({reflect:!0})],y.prototype,`active`,2),g([v()],y.prototype,`placement`,2),g([v()],y.prototype,`activation`,2),g([v({attribute:`without-scroll-controls`,type:Boolean})],y.prototype,`withoutScrollControls`,2),g([h(`active`)],y.prototype,`updateActiveTab`,1),g([h(`withoutScrollControls`,{waitUntilFirstUpdate:!0})],y.prototype,`updateScrollControls`,1),y=g([vt(`wa-tab-group`)],y);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Pt=`:host {
  display: inline-block;
  color: var(--wa-color-neutral-on-quiet);
  font-weight: var(--wa-font-weight-action);
}

.tab {
  display: inline-flex;
  align-items: center;
  font: inherit;
  padding: 1em 1.5em;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  transition: color var(--wa-transition-fast) var(--wa-transition-easing);

  ::slotted(wa-icon:first-child) {
    margin-inline-end: 0.5em;
  }

  ::slotted(wa-icon:last-child) {
    margin-inline-start: 0.5em;
  }
}

@media (hover: hover) {
  :host(:hover:not([disabled])) .tab {
    color: currentColor;
  }
}

:host(:focus) {
  outline: transparent;
}

:host(:focus-visible) .tab {
  outline: var(--wa-focus-ring);
  outline-offset: calc(-1 * var(--wa-border-width-l) - var(--wa-focus-ring-offset));
}

:host([active]:not([disabled])) {
  color: var(--wa-color-brand-on-quiet);
}

:host([disabled]) .tab {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (forced-colors: active) {
  :host([active]:not([disabled])) {
    outline: solid 1px transparent;
    outline-offset: -3px;
  }
}
`,Ft=0,b=class extends Et{constructor(){super(...arguments),this.attrId=++Ft,this.componentId=`wa-tab-${this.attrId}`,this.panel=``,this.active=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){this.slot||=`nav`,super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id?.length>0?this.id:this.componentId,Ze`
      <div
        part="base"
        class=${At({tab:!0,"tab-active":this.active})}
      >
        <slot></slot>
      </div>
    `}};b.css=Pt,g([Ct(`.tab`)],b.prototype,`tab`,2),g([v({reflect:!0})],b.prototype,`panel`,2),g([v({type:Boolean,reflect:!0})],b.prototype,`active`,2),g([v({type:Boolean,reflect:!0})],b.prototype,`disabled`,2),g([v({type:Number,reflect:!0})],b.prototype,`tabIndex`,2),g([h(`active`)],b.prototype,`handleActiveChange`,1),g([h(`disabled`)],b.prototype,`handleDisabledChange`,1),b=g([vt(`wa-tab`)],b);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var It=`:host {
  --padding: 0;

  display: none;
}

:host([active]) {
  display: block;
}

.tab-panel {
  display: block;
  padding: var(--padding);
}
`,Lt=0,Rt=class extends Et{constructor(){super(...arguments),this.attrId=++Lt,this.componentId=`wa-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return Ze`
      <slot
        part="base"
        class=${At({"tab-panel":!0,"tab-panel-active":this.active})}
      ></slot>
    `}};Rt.css=It,g([v({reflect:!0})],Rt.prototype,`name`,2),g([v({type:Boolean,reflect:!0})],Rt.prototype,`active`,2),g([h(`active`)],Rt.prototype,`handleActiveChange`,1),Rt=g([vt(`wa-tab-panel`)],Rt);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var zt=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),Bt=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},Vt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),Ht=class extends Et{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new Bt))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[Vt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)){let e=this.value;if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),this.updateValidity(),super.willUpdate(e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};Ht.formAssociated=!0,g([v({reflect:!0})],Ht.prototype,`name`,2),g([v({type:Boolean})],Ht.prototype,`disabled`,2),g([v({state:!0,attribute:!1})],Ht.prototype,`valueHasChanged`,2),g([v({state:!0,attribute:!1})],Ht.prototype,`hasInteracted`,2),g([v({attribute:`custom-error`,reflect:!0})],Ht.prototype,`customError`,2),g([v({attribute:!1,state:!0,type:Object})],Ht.prototype,`validity`,1);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Ut=`@layer wa-utilities {
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
}
`,Wt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}},Gt=`@layer wa-utilities {
  :host([size='small']),
  .wa-size-s {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']),
  .wa-size-m {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']),
  .wa-size-l {
    font-size: var(--wa-font-size-l);
  }
}
`;
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Kt=e=>e??_,qt=Symbol.for(``),Jt=e=>{if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:qt}),Xt=new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Jt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(Ze);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Qt=`@layer wa-component {
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
  transition-property: background, border, box-shadow, color;
  transition-duration: var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  cursor: pointer;
  padding: 0 var(--wa-form-control-padding-inline);
  font-family: inherit;
  font-size: inherit;
  font-weight: var(--wa-font-weight-action);
  line-height: calc(var(--wa-form-control-height) - var(--border-width) * 2);
  height: var(--wa-form-control-height);
  width: 100%;

  background-color: var(--wa-color-fill-loud, var(--wa-color-neutral-fill-loud));
  border-color: transparent;
  color: var(--wa-color-on-loud, var(--wa-color-neutral-on-loud));
  border-radius: var(--wa-form-control-border-radius);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
}

/* Appearance modifiers */
:host([appearance='plain']) {
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
.button.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* When disabled, prevent mouse events from bubbling up from children */
.button.disabled * {
  pointer-events: none;
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

.button.is-icon-button:has(wa-icon) {
  width: auto;
}

/* Pill modifier */
:host([pill]) .button {
  border-radius: var(--wa-border-radius-pill);
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
    visibility: hidden;
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

/*
 * Button group border radius modifications
 */

/* Remove border radius from all grouped buttons by default */
:host(.wa-button-group__button) .button {
  border-radius: 0;
}

/* Horizontal orientation */
:host(.wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-end-start-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Vertical orientation */
:host(.wa-button-group__vertical) {
  flex: 1 1 auto;
}

:host(.wa-button-group__vertical) .button {
  width: 100%;
  justify-content: start;
}

:host(.wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-form-control-border-radius);
  border-start-end-radius: var(--wa-form-control-border-radius);
}

:host(.wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-form-control-border-radius);
  border-end-end-radius: var(--wa-form-control-border-radius);
}

/* Handle pill modifier for button groups */
:host([pill].wa-button-group__horizontal.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-end-start-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__horizontal.wa-button-group__button-last) .button {
  border-start-end-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-first) .button {
  border-start-start-radius: var(--wa-border-radius-pill);
  border-start-end-radius: var(--wa-border-radius-pill);
}

:host([pill].wa-button-group__vertical.wa-button-group__button-last) .button {
  border-end-start-radius: var(--wa-border-radius-pill);
  border-end-end-radius: var(--wa-border-radius-pill);
}
`,x=class extends Ht{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Wt(this,`[default]`,`start`,`end`),this.localize=new ee(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`medium`,this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`,this.form=null}static get validators(){return[...super.validators,zt()]}constructLightDOMButton(){let e=document.createElement(`button`);return e.type=this.type,e.style.position=`absolute`,e.style.width=`0`,e.style.height=`0`,e.style.clipPath=`inset(50%)`,e.style.overflow=`hidden`,e.style.whiteSpace=`nowrap`,this.name&&(e.name=this.name),e.value=this.value||``,[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(t=>{this.hasAttribute(t)&&e.setAttribute(t,this.getAttribute(t))}),e}handleClick(){if(!this.getForm())return;let e=this.constructLightDOMButton();this.parentElement?.append(e),e.click(),e.remove()}handleInvalid(){this.dispatchEvent(new Bt)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.updateValidity()}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Yt`a`:Yt`button`;return Zt`
      <${t}
        part="base"
        class=${At({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`),"has-end":this.hasSlotController.test(`end`),"is-icon-button":this.isIconButton})}
        ?disabled=${Kt(e?void 0:this.disabled)}
        type=${Kt(e?void 0:this.type)}
        title=${this.title}
        name=${Kt(e?void 0:this.name)}
        value=${Kt(e?void 0:this.value)}
        href=${Kt(e?this.href:void 0)}
        target=${Kt(e?this.target:void 0)}
        download=${Kt(e?this.download:void 0)}
        rel=${Kt(e&&this.rel?this.rel:void 0)}
        role=${Kt(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?Zt`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:``}
        ${this.loading?Zt`<wa-spinner part="spinner"></wa-spinner>`:``}
      </${t}>
    `}};x.shadowRootOptions={...Ht.shadowRootOptions,delegatesFocus:!0},x.css=[Qt,Ut,Gt],g([Ct(`.button`)],x.prototype,`button`,2),g([Ct(`slot:not([name])`)],x.prototype,`labelSlot`,2),g([xt()],x.prototype,`invalid`,2),g([xt()],x.prototype,`isIconButton`,2),g([v()],x.prototype,`title`,2),g([v({reflect:!0})],x.prototype,`variant`,2),g([v({reflect:!0})],x.prototype,`appearance`,2),g([v({reflect:!0})],x.prototype,`size`,2),g([v({attribute:`with-caret`,type:Boolean,reflect:!0})],x.prototype,`withCaret`,2),g([v({type:Boolean})],x.prototype,`disabled`,2),g([v({type:Boolean,reflect:!0})],x.prototype,`loading`,2),g([v({type:Boolean,reflect:!0})],x.prototype,`pill`,2),g([v()],x.prototype,`type`,2),g([v({reflect:!0})],x.prototype,`name`,2),g([v({reflect:!0})],x.prototype,`value`,2),g([v({reflect:!0})],x.prototype,`href`,2),g([v()],x.prototype,`target`,2),g([v()],x.prototype,`rel`,2),g([v()],x.prototype,`download`,2),g([v({reflect:!0})],x.prototype,`form`,2),g([v({attribute:`formaction`})],x.prototype,`formAction`,2),g([v({attribute:`formenctype`})],x.prototype,`formEnctype`,2),g([v({attribute:`formmethod`})],x.prototype,`formMethod`,2),g([v({attribute:`formnovalidate`,type:Boolean})],x.prototype,`formNoValidate`,2),g([v({attribute:`formtarget`})],x.prototype,`formTarget`,2),g([h(`disabled`,{waitUntilFirstUpdate:!0})],x.prototype,`handleDisabledChange`,1),x=g([vt(`wa-button`)],x);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var $t=`:host {
  --track-width: 2px;
  --track-color: var(--wa-color-neutral-fill-normal);
  --indicator-color: var(--wa-color-brand-fill-loud);
  --speed: 2s;

  /* Resizing a spinner element using anything but font-size will break the animation because the animation uses em units.
   Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can grow/shrink and
   break the animation. The use of \`flex: none\` on the host element prevents this by always having the spinner sized
   according to its actual dimensions.
  */
  flex: none;
  display: inline-flex;
  width: 1em;
  height: 1em;
}

svg {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  animation: spin var(--speed) linear infinite;
}

.track {
  stroke: var(--track-color);
}

.indicator {
  stroke: var(--indicator-color);
  stroke-dasharray: 75, 100;
  stroke-dashoffset: -5;
  animation: dash 1.5s ease-in-out infinite;
  stroke-linecap: round;
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
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`,en=class extends Et{constructor(){super(...arguments),this.localize=new ee(this)}render(){return Ze`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term(`loading`)}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};en.css=$t,en=g([vt(`wa-spinner`)],en);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var tn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},nn=``;function rn(e){nn=e}function an(){if(!nn){let e=document.querySelector(`[data-fa-kit-code]`);e&&rn(e.getAttribute(`data-fa-kit-code`)||``)}return nn}var on=`7.0.1`;function sn(e,t,n){let r=an(),i=r.length>0,a=`solid`;return t===`notdog`?(n===`solid`&&(a=`solid`),n===`duo-solid`&&(a=`duo-solid`),`https://ka-p.fontawesome.com/releases/v${on}/svgs/notdog-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`chisel`?`https://ka-p.fontawesome.com/releases/v${on}/svgs/chisel-regular/${e}.svg?token=${encodeURIComponent(r)}`:t===`etch`?`https://ka-p.fontawesome.com/releases/v${on}/svgs/etch-solid/${e}.svg?token=${encodeURIComponent(r)}`:t===`jelly`?(n===`regular`&&(a=`regular`),n===`duo-regular`&&(a=`duo-regular`),n===`fill-regular`&&(a=`fill-regular`),`https://ka-p.fontawesome.com/releases/v${on}/svgs/jelly-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`slab`?((n===`solid`||n===`regular`)&&(a=`regular`),n===`press-regular`&&(a=`press-regular`),`https://ka-p.fontawesome.com/releases/v${on}/svgs/slab-${a}/${e}.svg?token=${encodeURIComponent(r)}`):t===`thumbprint`?`https://ka-p.fontawesome.com/releases/v${on}/svgs/thumbprint-light/${e}.svg?token=${encodeURIComponent(r)}`:t===`whiteboard`?`https://ka-p.fontawesome.com/releases/v${on}/svgs/whiteboard-semibold/${e}.svg?token=${encodeURIComponent(r)}`:(t===`classic`&&(n===`thin`&&(a=`thin`),n===`light`&&(a=`light`),n===`regular`&&(a=`regular`),n===`solid`&&(a=`solid`)),t===`sharp`&&(n===`thin`&&(a=`sharp-thin`),n===`light`&&(a=`sharp-light`),n===`regular`&&(a=`sharp-regular`),n===`solid`&&(a=`sharp-solid`)),t===`duotone`&&(n===`thin`&&(a=`duotone-thin`),n===`light`&&(a=`duotone-light`),n===`regular`&&(a=`duotone-regular`),n===`solid`&&(a=`duotone`)),t===`sharp-duotone`&&(n===`thin`&&(a=`sharp-duotone-thin`),n===`light`&&(a=`sharp-duotone-light`),n===`regular`&&(a=`sharp-duotone-regular`),n===`solid`&&(a=`sharp-duotone-solid`)),t===`brands`&&(a=`brands`),i?`https://ka-p.fontawesome.com/releases/v${on}/svgs/${a}/${e}.svg?token=${encodeURIComponent(r)}`:`https://ka-f.fontawesome.com/releases/v${on}/svgs/${a}/${e}.svg`)}var cn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>sn(e,t,n),mutator:(e,t)=>{if(t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog`&&r===`duo-solid`||n===`jelly`&&r===`duo-regular`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
function ln(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var un={solid:{check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},dn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=un[n][e]??un.regular[e]??un.regular[`circle-question`];return r?ln(r):``}},fn=`classic`,pn=[cn,dn],mn=[];function hn(e){mn.push(e)}function gn(e){mn=mn.filter(t=>t!==e)}function _n(e){return pn.find(t=>t.name===e)}function vn(){return fn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:yn}=ft,bn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t;
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var xn=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},Sn=`:host {
  --primary-color: currentColor;
  --primary-opacity: 1;
  --secondary-color: currentColor;
  --secondary-opacity: 0.4;

  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: -0.125em;
}

/* Standard */
:host(:not([auto-width])) {
  width: 1.25em;
  height: 1em;
}

/* Auto-width */
:host([auto-width]) {
  width: auto;
  height: 1em;
}

svg {
  height: 1em;
  fill: currentColor;
  overflow: visible;

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
`,Cn=Symbol(),wn=Symbol(),Tn,En=new Map,S=class extends Et{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=Ze`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Cn:wn}catch{return wn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return Cn;Tn||=new DOMParser;let r=Tn.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Cn}catch{return Cn}}}connectedCallback(){super.connectedCallback(),hn(this)}firstUpdated(e){super.firstUpdated(e),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),gn(this)}getIconSource(){let e=_n(this.library),t=this.family||vn();return this.name&&e?{url:e.resolver(this.name,t,this.variant,this.autoWidth),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=this.getIconSource(),n=t?_n(this.library):void 0;if(!e){this.svg=null;return}let r=En.get(e);r||(r=this.resolveIcon(e,n),En.set(e,r));let i=await r;if(i===wn&&En.delete(e),e===this.getIconSource().url){if(bn(i)){this.svg=i;return}switch(i){case wn:case Cn:this.svg=null,this.dispatchEvent(new xn);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new tn)}}}updated(e){super.updated(e);let t=_n(this.library),n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:Ze`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};S.css=Sn,g([xt()],S.prototype,`svg`,2),g([v({reflect:!0})],S.prototype,`name`,2),g([v({reflect:!0})],S.prototype,`family`,2),g([v({reflect:!0})],S.prototype,`variant`,2),g([v({attribute:`auto-width`,type:Boolean,reflect:!0})],S.prototype,`autoWidth`,2),g([v({attribute:`swap-opacity`,type:Boolean,reflect:!0})],S.prototype,`swapOpacity`,2),g([v()],S.prototype,`src`,2),g([v()],S.prototype,`label`,2),g([v({reflect:!0})],S.prototype,`library`,2),g([h(`label`)],S.prototype,`handleLabelChange`,1),g([h([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`swapOpacity`])],S.prototype,`setIcon`,1),S=g([vt(`wa-icon`)],S);
/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */
var Dn=t({default:()=>y}),On=t({default:()=>Rt}),kn=t({default:()=>b}),C;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var An;function w(e){this.c=e}C=w.prototype,C.toString=(function(){return String.fromCharCode(this.c)});function jn(e){switch(typeof e){case`string`:return od.l();case`number`:return Kn(e)?e<<24>>24===e?$l.l():e<<16>>16===e?ou.l():td.l():qn(e)?ed.l():$u.l();case`boolean`:return xl.l();case`undefined`:return Va.l();default:return e instanceof N?id.l():e instanceof w?wl.l():e&&e.$classData?e.$classData.l():null}}function Mn(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Kn(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:qn(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof N?`java.lang.Long`:e instanceof w?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.h0()}}function Nn(e,t){switch(typeof e){case`string`:return ad(e,t);case`number`:return Zu(e,t);case`boolean`:return yl(e,t);case`undefined`:return Ra(e,t);default:return e&&e.$classData||e===null?e.l(t):e instanceof N?nd(e,t):e instanceof w?Cl(Yn(e),t):Zn.prototype.l.call(e,t)}}function Pn(e){switch(typeof e){case`string`:return Y(e);case`number`:return Qu(e);case`boolean`:return bl(e);case`undefined`:return za(e);default:return e&&e.$classData||e===null?e.u():e instanceof N?rd(e):e instanceof w?Sl(Yn(e)):Zn.prototype.u.call(e)}}function Fn(e){return e===void 0?`undefined`:e.toString()}function In(e,t){if(t===0)throw new Ql(`/ by zero`);return e/t|0}function Ln(e,t){if(t===0)throw new Ql(`/ by zero`);return e%t|0}function Rn(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function zn(e){return String.fromCharCode(e)}function Bn(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Vn=0,Hn=new WeakMap;function Un(e){switch(typeof e){case`string`:return Y(e);case`number`:return Qu(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Y(n);default:if(e===null)return 0;var r=Hn.get(e);return r===void 0&&(r=Vn+1|0,Vn=r,Hn.set(e,r)),r}}function Wn(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Gn(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Kn(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function qn(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function Jn(e){return new w(e)}Jn(0);function Yn(e){return e===null?0:e.c}function Xn(e){return e===null?An:e}function Zn(){}C=Zn.prototype,C.constructor=Zn;function T(){}T.prototype=C,C.u=(function(){return Un(this)}),C.l=(function(e){return this===e}),C.y=(function(){var e=this.u();return Mn(this)+`@`+(+(e>>>0)).toString(16)}),C.toString=(function(){return this.y()});function E(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}C=E.prototype=new T,C.constructor=E,C.a2=(function(e,t,n,r){Bn(this.a,e,t.a,n,r)}),C.Y=(function(){return new E(this.a.slice())});function Qn(){}Qn.prototype=C;function $n(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}C=$n.prototype=new T,C.constructor=$n,C.a2=(function(e,t,n,r){Bn(this.a,e,t.a,n,r)}),C.Y=(function(){return new $n(this.a.slice())});function er(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}C=er.prototype=new T,C.constructor=er,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new er(this.a.slice())});function tr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}C=tr.prototype=new T,C.constructor=tr,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new tr(this.a.slice())});function nr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}C=nr.prototype=new T,C.constructor=nr,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new nr(this.a.slice())});function rr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}C=rr.prototype=new T,C.constructor=rr,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new rr(this.a.slice())});function ir(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=An}else this.a=e}C=ir.prototype=new T,C.constructor=ir,C.a2=(function(e,t,n,r){Bn(this.a,e,t.a,n,r)}),C.Y=(function(){return new ir(this.a.slice())});function ar(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}C=ar.prototype=new T,C.constructor=ar,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new ar(this.a.slice())});function or(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}C=or.prototype=new T,C.constructor=or,C.a2=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),C.Y=(function(){return new or(this.a.slice())});function D(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}C=D.prototype,C.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new D().y(this,r,i)),this}),C.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),C.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),C.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Qn;n.constructor=t,n.a2=(function(e,t,n,r){Bn(this.a,e,t.a,n,r)}),n.Y=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={t:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===sr});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),C.r=(function(){return this.A||=new D().a(this),this.A}),C.l=(function(){return this.L||=new jc(this),this.L}),C.R=(function(e){return this===e||this.F(e)}),C.S=(function(){return this.P?this.P.l():null}),C.Q=(function(){return this.O?this.O.l():null});var sr=new D;sr.n={},sr.E=`Ljava.lang.Object;`,sr.F=(e=>!e.X),sr.N=`java.lang.Object`,sr.I=(e=>e!==null),sr.A=new D().y(sr,E,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Zn.prototype.$classData=sr;var cr=new D().p(void 0,`V`,`void`,void 0,void 0);new D().p(!1,`Z`,`boolean`,$n,void 0);var lr=new D().p(0,`C`,`char`,er,Uint16Array);new D().p(0,`B`,`byte`,tr,Int8Array),new D().p(0,`S`,`short`,nr,Int16Array),new D().p(0,`I`,`int`,rr,Int32Array);var ur=new D().p(null,`J`,`long`,ir,void 0);new D().p(0,`F`,`float`,ar,Float32Array),new D().p(0,`D`,`double`,or,Float64Array);function dr(e){return jn(e).cq()+`@`+Un(e)}function fr(e){var t=e.cy;return t===void 0?dr(e):t}function pr(){hr=this,gr().gy(new J((e=>void 0)),lo().dx,!0)}C=pr.prototype=new T,C.constructor=pr;function mr(){}mr.prototype=C,C.gy=(function(e,t,n){return new cl(e,n,t,this)}),new D().i(pr,`com.raquo.airstream.core.Observer$`,{b6:1});var hr;function gr(){return hr||=new pr,hr}function _r(e){this.bO=null,this.cz=null,this.bP=0,this.bO=e,this.cz=void 0;var t=Lr().bq();this.bP=t===void 0?1:1+t.bP|0,Cr().bt===-1||this.bP>Cr().bt?ac().cv(new Ju(this,Cr().bt)):Or().R?Or().am.push(this)|0:Lr().ck(this)}C=_r.prototype=new T,C.constructor=_r;function vr(){}vr.prototype=C;var yr=new D().i(_r,`com.raquo.airstream.core.Transaction`,{b9:1});function br(){this.bt=0,this.cA=null,Sr=this,this.bt=1e3,this.cA=new J((e=>{throw U(new W,`Attempted to run Transaction `+e+` after it was already executed.`)}))}C=br.prototype=new T,C.constructor=br;function xr(){}xr.prototype=C,C.e4=(function(e){try{e.bO.s(e);var t=e.cz;if(t!==void 0)for(;t.h4();)t.gU().h8(e)}catch(e){var n=e instanceof Os?e:new Z(e);ac().cv(n)}}),new D().i(br,`com.raquo.airstream.core.Transaction$`,{ba:1});var Sr;function Cr(){return Sr||=new br,Sr}function wr(e){e.bu.length|0?new _r(new J((t=>{for(;(e.bu.length|0)>0;){var n=e.bu.shift();try{n.s(t)}catch(e){var r=e instanceof Os?e:new Z(e);ac().cv(r)}}for(;(e.am.length|0)>0;){var i=e.am.shift();Lr().ck(i)}}))):(e.am.length|0)>0&&new _r(new J((t=>{for(;(e.am.length|0)>0;)Lr().ck(e.am.shift())})))}function Tr(){this.R=!1,this.bu=null,this.am=null,Dr=this,this.R=!1,this.bu=ci().ah(L().b(new(F.r()).C([]))),this.am=ci().ah(L().b(new(yr.r()).C([])))}C=Tr.prototype=new T,C.constructor=Tr;function Er(){}Er.prototype=C,new D().i(Tr,`com.raquo.airstream.core.Transaction$onStart$`,{bb:1});var Dr;function Or(){return Dr||=new Tr,Dr}function kr(e,t){return e.an.get(t)}function Ar(e,t){e.bv.unshift(t)}function jr(e){return e.bv.shift()}function Mr(e,t,n){var r=kr(e,t),i=r===void 0,a=r===void 0?ci().ah(L().b(new(yr.r()).C([]))):r;a.push(n),i&&e.an.set(t,a)}function Nr(e,t){var n=kr(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.an.delete(t),i}}function Pr(){this.bv=null,this.an=null,Ir=this,this.bv=ci().ah(L().b(new(yr.r()).C([]))),this.an=new Map}C=Pr.prototype=new T,C.constructor=Pr;function Fr(){}Fr.prototype=C,C.ck=(function(e){var t=this.bq();t===void 0?(Ar(this,e),Cr().e4(e),this.ff(e)):Mr(this,t,e)}),C.ff=(function(e){for(var t=e;;){var n=this.bq(),r=t;if(!(n!==void 0&&I().M(r,n)))throw U(new W,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.g6(t),t.bO=Cr().cA;var i=this.bq();if(I().M(i,void 0))if((this.an.size|0)>0){var a=new Xs(0);throw this.an.forEach((e=>((t,n)=>{e.b7=e.b7+(t.length|0)|0}))(a)),U(new W,`Transaction queue error: Stack cleared, but a total of `+a.b7+` children for `+(this.an.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else Cr().e4(i),t=i}}),C.g6=(function(e){for(var t=e;;){var n=Nr(this,t);if(I().M(n,void 0)){jr(this);var r=this.bq();if(!I().M(r,void 0))t=r;else return}else{Ar(this,n);return}}}),C.bq=(function(){return this.bv[0]}),new D().i(Pr,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bc:1});var Ir;function Lr(){return Ir||=new Pr,Ir}function Rr(e,t){var n=e.a3.indexOf(t)|0;if(n!==-1)e.a3.splice(n,1),e.I.m()||t.ek();else throw U(new W,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function zr(e){for(;(e.bw.length|0)>0;)Rr(e,e.bw.shift())}function Br(e){this.cB=null,this.a3=null,this.aE=!1,this.bw=null,this.I=null,this.aF=0,this.cB=e,this.a3=ci().ah(L().b(new(Wr.r()).C([]))),this.aE=!0,this.bw=ci().ah(L().b(new(Wr.r()).C([]))),this.I=X(),this.aF=0}C=Br.prototype=new T,C.constructor=Br;function Vr(){}Vr.prototype=C,C.dO=(function(){if(this.I.m()){var e=Or(),t=(()=>{var e=new Bo(this.cB);this.I=new dd(e),this.aE=!1,this.aF=0;for(var t=0,n=this.a3.length|0;t<n;){var r=t+this.aF|0;this.a3[r].ej(e),t=1+t|0}zr(this),this.aE=!0,this.aF=0});if(Or(),e.R)t();else{e.R=!0;try{t()}finally{e.R=!1,wr(e)}}}else throw U(new W,`Can not activate `+this+`: it is already active`)}),C.f9=(function(){if(this.I.m())throw U(new W,`Can not deactivate DynamicOwner: it is not active`);this.aE=!1;for(var e=this.a3,t=0,n=e.length|0;t<n;)e[t].ek(),t=1+t|0;zr(this);var r=this.I;r.m()||r.C().fL(),zr(this),this.aE=!0,this.I=X()}),C.eS=(function(e,t){t?(this.aF=1+this.aF|0,this.a3.unshift(e)):this.a3.push(e);var n=this.I;if(!n.m()){var r=n.C();e.ej(r)}}),C.gb=(function(e){this.aE?Rr(this,e):this.bw.push(e)}),new D().i(Br,`com.raquo.airstream.ownership.DynamicOwner`,{bd:1});function Hr(e,t,n){this.bx=null,this.cC=null,this.by=null,this.bx=e,this.cC=t,this.by=X(),e.eS(this,n)}C=Hr.prototype=new T,C.constructor=Hr;function Ur(){}Ur.prototype=C,C.bL=(function(){this.bx.gb(this)}),C.ej=(function(e){var t=Or(),n=(()=>{this.by=this.cC.s(e)});if(Or(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,wr(t)}}}),C.ek=(function(){var e=this.by;e.m()||(e.C().bL(),this.by=X())});var Wr=new D().i(Hr,`com.raquo.airstream.ownership.DynamicSubscription`,{be:1});function Gr(){}C=Gr.prototype=new T,C.constructor=Gr;function Kr(){}Kr.prototype=C,C.gw=(function(e,t,n){return new Hr(e,new J((e=>new dd(t.s(e)))),n)}),C.go=(function(e,t,n){return new Hr(e,new J((e=>(t.s(e),X()))),n)}),new D().i(Gr,`com.raquo.airstream.ownership.DynamicSubscription$`,{bf:1});var qr;function Jr(){return qr||=new Gr,qr}function Yr(e){e.aG=ci().ah(L().b(new(ni.r()).C([])))}function Xr(e){for(var t=e.aG,n=0,r=t.length|0;n<r;)$r(t[n]),n=1+n|0;e.aG.length=0}function Zr(e,t){var n=e.aG.indexOf(t)|0;if(n!==-1)e.aG.splice(n,1);else throw U(new W,`Can not remove Subscription from Owner: subscription not found.`)}function Qr(e,t){e.aG.push(t)}function $r(e){if(!e.bR)e.cE.aB(),e.bR=!0;else throw U(new W,`Can not kill Subscription: it was already killed.`)}function ei(e,t){this.cF=null,this.cE=null,this.bR=!1,this.cF=e,this.cE=t,this.bR=!1,e.g5(this)}C=ei.prototype=new T,C.constructor=ei;function ti(){}ti.prototype=C,C.bL=(function(){$r(this),Zr(this.cF,this)});var ni=new D().i(ei,`com.raquo.airstream.ownership.Subscription`,{bi:1});function ri(e,t){this.cG=null,this.cH=null,this.a4=null,this.ao=!1,this.cG=e,this.cH=t,this.a4=X(),this.ao=!1}C=ri.prototype=new T,C.constructor=ri;function ii(){}ii.prototype=C,C.fI=(function(){var e=this.a4;return!e.m()&&!e.C().bx.I.m()}),C.gi=(function(e){if(this.ao)throw U(new W,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.a4;if(t.m())var n=!1;else var n=e===t.C().bx;if(!n){this.fI()&&!e.I.m()&&(this.ao=!0);var r=this.a4;r.m()||(r.C().bL(),this.a4=X()),this.a4=new dd(Jr().gw(e,new J((e=>(this.ao||this.cG.aB(),new ei(e,new Ll((()=>{this.ao||this.cH.aB()})))))),!1)),this.ao=!1}}),C.f4=(function(){if(this.ao)throw U(new W,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.a4;e.m()||e.C().bL(),this.a4=X()}),new D().i(ri,`com.raquo.airstream.ownership.TransferableSubscription`,{bj:1});function ai(){}C=ai.prototype=new T,C.constructor=ai;function oi(){}oi.prototype=C,C.ah=(function(e){return[...No().gu(e)]}),new D().i(ai,`com.raquo.ew.JsArray$`,{bk:1});var si;function ci(){return si||=new ai,si}function li(){this.cI=null,di=this,document.createElement(`template`),this.f7(q().f.gp().gq()),this.cI=RegExp(` `,`g`)}C=li.prototype=new T,C.constructor=li;function ui(){}ui.prototype=C,C.eV=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Os?e:new Z(e);if(n instanceof Z&&n.T instanceof DOMException)return!1;throw n instanceof Z?n.T:n}}),C.fJ=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(I().M(t,r))return!0;n=r}}),C.f6=(function(e){return document.createElement(e.bX)}),C.fz=(function(e,t){var n=this.fA(e,t);return n===void 0?void 0:t.aU.bI(n)}),C.fA=(function(e,t){var n=e.Z.getAttributeNS(null,t.ap);return n===null?void 0:n}),C.er=(function(e,t,n){this.gf(e,t,t.aU.bk(n))}),C.gf=(function(e,t,n){n===null?this.ga(e,t):e.Z.setAttribute(t.ap,n)}),C.ga=(function(e,t){e.Z.removeAttribute(t.ap)}),C.gg=(function(e,t,n){this.gh(e,t,t.cR.bk(n))}),C.gh=(function(e,t,n){e.Z[t.cS]=n}),C.f7=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.d3)}),C.fD=(function(e,t){var n=this.fE(e,t);return n===void 0?void 0:t.bS.bI(n)}),C.fE=(function(e,t){var n=e.ct(),r=t.bA,i=n.getAttributeNS(r.m()?null:r.C(),t.bT);return i===null?void 0:i}),C.gj=(function(e,t,n){this.gk(e,t,t.bS.bk(n))}),C.gk=(function(e,t,n){if(n===null)this.gc(e,t);else{var r=t.bA;if(r.m())e.ct().setAttribute(t.bz,n);else{var i=r.C();e.ct().setAttributeNS(i,t.bz,n)}}}),C.gc=(function(e,t){var n=e.ct(),r=t.bA;n.removeAttributeNS(r.m()?null:r.C(),t.bT)}),C.f8=(function(e){return document.createTextNode(e)}),C.fb=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new kp(this.fa(r),n);r=i,n=a}}),C.fa=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.cI,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new D().i(li,`com.raquo.laminar.DomApi$`,{bl:1});var di;function O(){return di||=new li,di}function fi(e){gr(),ac()}function pi(e){e.ev=Fi()}function mi(e){hi(e,new J((e=>{e.cT.Z.focus()})))}function hi(e,t){return new rs(new J((e=>{var n=new Js(!e.aI.I.m()),r=new J((e=>{n.bH?n.bH=!1:t.s(e)}));Jr().go(e.aI,new J((e=>(t=>{r.s(new Ai(e,t))}))(e)),!1)})),Fi())}function gi(){this.aH=null,this.cQ=null,this.cP=null,vi=this,this.aH=new Wo(yi()),new Wo(yi()),this.cQ=new Wo(yi()),this.cP=new Ho}C=gi.prototype=new T,C.constructor=gi;function _i(){}_i.prototype=C,new D().i(gi,`com.raquo.laminar.codecs.package$`,{bt:1});var vi;function yi(){return vi||=new gi,vi}function bi(e){e.ew=xi(e,`class`,` `)}function xi(e,t,n){var r=Jo(new Yo,t,yi().aH);return new Ko(r.ap,new J((e=>{var t=O().fz(e,r);return t===void 0?``:t})),new Bl(((e,t)=>{O().er(e,r,t)})),n)}function Si(e){e.eu=Ci(e,`class`,` `)}function Ci(e,t,n){var r=new $o(t,yi().aH,X());return new Ko(r.bz,new J((e=>{var t=O().fD(e,r);return t===void 0?``:t})),new Bl(((e,t)=>{O().gj(e,r,t)})),n)}function wi(){}C=wi.prototype=new T,C.constructor=wi;function Ti(){}Ti.prototype=C;function Ei(){this.ex=null,this.ey=null,this.ez=null,this.eA=null,this.ex=`http://www.w3.org/2000/svg`,this.ey=`http://www.w3.org/1999/xlink`,this.ez=`http://www.w3.org/XML/1998/namespace`,this.eA=`http://www.w3.org/2000/xmlns/`}C=Ei.prototype=new T,C.constructor=Ei;function Di(){}Di.prototype=C,C.fQ=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new pu(e)}}),new D().i(Ei,`com.raquo.laminar.keys.SvgAttr$`,{bI:1});var Oi;function ki(){return Oi||=new Ei,Oi}function Ai(e,t){this.cT=null,this.cT=e}C=Ai.prototype=new T,C.constructor=Ai;function ji(){}ji.prototype=C,new D().i(Ai,`com.raquo.laminar.lifecycle.MountContext`,{bJ:1});var k=new D().i(1,`com.raquo.laminar.modifiers.Modifier`,{T:1});function Mi(){this.eB=null,Pi=this,this.eB=new ts}C=Mi.prototype=new T,C.constructor=Mi;function Ni(){}Ni.prototype=C,new D().i(Mi,`com.raquo.laminar.modifiers.Modifier$`,{bL:1});var Pi;function Fi(){return Pi||=new Mi,Pi}function Ii(){this.g=null,Ri=this,this.g=new as(new J((e=>e)),A()),new as(new J((e=>``+(e|0))),A()),new as(new J((e=>``+ +e)),A()),new as(new J((e=>``+!!e)),A()),new as(new J((e=>e.gt())),A())}C=Ii.prototype=new T,C.constructor=Ii;function Li(){}Li.prototype=C,new D().i(Ii,`com.raquo.laminar.modifiers.RenderableText$`,{bP:1});var Ri;function A(){return Ri||=new Ii,Ri}function zi(){}C=zi.prototype=new T,C.constructor=zi;function Bi(){}Bi.prototype=C,C.cm=(function(e,t,n){var r=new dd(e);t.et(r),n!==void 0&&n.h6(e,t);var i=O().eV(e.br(),t.br());return i&&t.es(r),i}),new D().i(zi,`com.raquo.laminar.nodes.ParentNode$`,{bS:1});var Vi;function Hi(){return Vi||=new zi,Vi}function Ui(){Gi=this,ci().ah(L().gz(new rr(new Int32Array([0]))))}C=Ui.prototype=new T,C.constructor=Ui;function Wi(){}Wi.prototype=C,C.eN=(function(){return new J((e=>void 0))}),new D().i(Ui,`com.raquo.laminar.tags.CustomHtmlTag$`,{bY:1});var Gi;function Ki(){return Gi||=new Ui,Gi}function qi(){}C=qi.prototype=new T,C.constructor=qi;function Ji(){}Ji.prototype=C,C.eT=(function(){Xi().fm(),Xi().fn(),Xi().fo(),Xi().fp(),Xi().fq(),Xi().fr(),Xi().fs()}),C.fm=(function(){var e=document.querySelector(`#example1`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`disabled`))),new K((e=>e.bj().c(!0)))])),L().b(new(k.r()).C([B(q().f,`Disabled`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`disabled`)))])),L().b(new(k.r()).C([q().f.fd().c(!0),B(q().f,`This is the disabled tab panel.`,A().g)])))])))))}),C.fn=(function(){var e=document.querySelector(`#example2`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([new K((e=>e.eQ().c(`advanced`)))])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)])))])))))}),C.fo=(function(){var e=document.querySelector(`#example3`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([new K((e=>e.cs().f2()))])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`disabled`))),new K((e=>e.bj().c(!0)))])),L().b(new(k.r()).C([B(q().f,`Disabled`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`disabled`)))])),L().b(new(k.r()).C([B(q().f,`This is a disabled tab panel.`,A().g)])))])))))}),C.fp=(function(){var e=document.querySelector(`#example4`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([new K((e=>e.cs().gn()))])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`disabled`))),new K((e=>e.bj().c(!0)))])),L().b(new(k.r()).C([B(q().f,`Disabled`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`disabled`)))])),L().b(new(k.r()).C([B(q().f,`This is a disabled tab panel.`,A().g)])))])))))}),C.fq=(function(){var e=document.querySelector(`#example5`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([new K((e=>e.cs().fi()))])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`disabled`))),new K((e=>e.bj().c(!0)))])),L().b(new(k.r()).C([B(q().f,`Disabled`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`disabled`)))])),L().b(new(k.r()).C([B(q().f,`This is a disabled tab panel.`,A().g)])))])))))}),C.fr=(function(){var e=document.querySelector(`#example6`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-1`)))])),L().b(new(k.r()).C([B(q().f,`Tab 1`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-2`)))])),L().b(new(k.r()).C([B(q().f,`Tab 2`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-3`)))])),L().b(new(k.r()).C([B(q().f,`Tab 3`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-4`)))])),L().b(new(k.r()).C([B(q().f,`Tab 4`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-5`)))])),L().b(new(k.r()).C([B(q().f,`Tab 5`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-6`)))])),L().b(new(k.r()).C([B(q().f,`Tab 6`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-7`)))])),L().b(new(k.r()).C([B(q().f,`Tab 7`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-8`)))])),L().b(new(k.r()).C([B(q().f,`Tab 8`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-9`)))])),L().b(new(k.r()).C([B(q().f,`Tab 9`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-10`)))])),L().b(new(k.r()).C([B(q().f,`Tab 10`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-11`)))])),L().b(new(k.r()).C([B(q().f,`Tab 11`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-12`)))])),L().b(new(k.r()).C([B(q().f,`Tab 12`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-13`)))])),L().b(new(k.r()).C([B(q().f,`Tab 13`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-14`)))])),L().b(new(k.r()).C([B(q().f,`Tab 14`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-15`)))])),L().b(new(k.r()).C([B(q().f,`Tab 15`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-16`)))])),L().b(new(k.r()).C([B(q().f,`Tab 16`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-17`)))])),L().b(new(k.r()).C([B(q().f,`Tab 17`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-18`)))])),L().b(new(k.r()).C([B(q().f,`Tab 18`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-19`)))])),L().b(new(k.r()).C([B(q().f,`Tab 19`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`tab-20`)))])),L().b(new(k.r()).C([B(q().f,`Tab 20`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-1`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 1`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-2`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 2`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-3`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 3`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-4`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 4`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-5`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 5`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-6`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 6`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-7`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 7`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-8`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 8`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-9`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 9`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-10`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 10`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-11`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 11`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-12`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 12`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-13`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 13`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-14`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 14`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-15`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 15`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-16`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 16`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-17`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 17`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-18`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 18`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-19`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 19`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`tab-20`)))])),L().b(new(k.r()).C([B(q().f,`Tab panel 20`,A().g)])))])))))}),C.fs=(function(){var e=document.querySelector(`#example7`);e!==null&&(q(),new cc(e,Ec().e(L().b(new(F.r()).C([new K((e=>e.eP().fO()))])),L().b(new(k.r()).C([V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`General`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`Custom`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`Advanced`,A().g)]))),V().e(L().b(new(F.r()).C([new K((e=>e.o().c(`disabled`))),new K((e=>e.bj().c(!0)))])),L().b(new(k.r()).C([B(q().f,`Disabled`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`general`)))])),L().b(new(k.r()).C([B(q().f,`This is the general tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`custom`)))])),L().b(new(k.r()).C([B(q().f,`This is the custom tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`advanced`)))])),L().b(new(k.r()).C([B(q().f,`This is the advanced tab panel.`,A().g)]))),H().e(L().b(new(F.r()).C([new K((e=>e.n().c(`disabled`)))])),L().b(new(k.r()).C([B(q().f,`This is a disabled tab panel.`,A().g)])))])))))}),new D().i(qi,`examples.tabGroup.Main$package$`,{c1:1});var Yi;function Xi(){return Yi||=new qi,Yi}function Zi(e){try{Xi().eT()}catch(e){throw e}}function Qi(){this.eD=!1,this.aY=null,this.bC=null,this.dp=null,this.bZ=!1,this.eC=0,this.eF=0,this.eE=null,ea=this,this.eD=!0,this.aY=new ArrayBuffer(8),this.bC=new Int32Array(this.aY,0,2),new Float32Array(this.aY,0,2),this.dp=new Float64Array(this.aY,0,1),this.bC[0]=16909060,this.bZ=(new Int8Array(this.aY,0,8)[0]|0)==1,this.eC=this.bZ?0:1,this.eF=this.bZ?1:0,this.eE=null}C=Qi.prototype=new T,C.constructor=Qi;function $i(){}$i.prototype=C,C.cr=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.dp[0]=e,(this.bC[0]|0)^(this.bC[1]|0))}),new D().i(Qi,`java.lang.FloatingPointBits$`,{cf:1});var ea;function ta(){return ea||=new Qi,ea}function na(e,t){for(var n=j().W(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=ra(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new bs(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new bs(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var m=r.length|0,ee=new(Ss.r()).C(m);for(i=0;i<m;)ee.a[i]=r[i],i=1+i|0;return ee}function ra(e,t){var n=j().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=j().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=j().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=j().W(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=j().W(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[ia(e,c[1]),da(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[ia(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[ia(e,d[1]),`<clinit>`]}function ia(e,t){var n=oa(e);if(La().dv.call(n,t))var r=oa(e)[t];else var r=Sa(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function aa(e){if(!((1&e.N)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.c1=t,e.N=(1|e.N)<<24>>24}return e.c1}function oa(e){return(1&e.N)<<24>>24?e.c1:aa(e)}function sa(e){if(!((2&e.N)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.c2=t,e.N=(2|e.N)<<24>>24}return e.c2}function ca(e){return(2&e.N)<<24>>24?e.c2:sa(e)}function la(e){return(4&e.N)<<24>>24||(e.c0=Object.keys(ca(e)),e.N=(4|e.N)<<24>>24),e.c0}function ua(e){return(4&e.N)<<24>>24?e.c0:la(e)}function da(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function fa(e,t){return t?t.arguments&&t.stack?pa(e,t):t.stack&&t.sourceURL?ga(e,t):t.stack&&t.number?ha(e,t):t.stack&&t.fileName?ma(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?_a(e,t):va(e,t):_a(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?ya(e,t):ba(e,t):t.stack&&!t.fileName?pa(e,t):xa(e,t):[]}function pa(e,t){return(t.stack+`
`).replace(j().W(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(j().G(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(j().G(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(j().G(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(j().G(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function ma(e,t){return t.stack.replace(j().G(`(?:\\n@:0)?\\s+$`,`m`),``).replace(j().G(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function ha(e,t){return t.stack.replace(j().G(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(j().G(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(j().G(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ga(e,t){return t.stack.replace(j().G(`\\[native code\\]\\n`,`m`),``).replace(j().G(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(j().G(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function _a(e,t){for(var n=j().G(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function va(e,t){for(var n=j().G(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function ya(e,t){for(var n=j().W(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function ba(e,t){for(var n=j().W(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(j().W(`<anonymous function: (\\S+)>`),`$1`).replace(j().W(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function xa(e,t){return[]}function Sa(e,t,n){for(;;)if(t<(ua(e).length|0)){var r=ua(e)[t];if(n.startsWith(r))return``+ca(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function Ca(){this.c1=null,this.c2=null,this.c0=null,this.N=0}C=Ca.prototype=new T,C.constructor=Ca;function wa(){}wa.prototype=C,C.ft=(function(e){return na(this,fa(this,e))}),new D().i(Ca,`java.lang.StackTrace$`,{cm:1});var Ta;function Ea(){return Ta||=new Ca,Ta}function Da(){}C=Da.prototype=new T,C.constructor=Da;function Oa(){}Oa.prototype=C,C.W=(function(e){return new RegExp(e)}),C.G=(function(e,t){return new RegExp(e,t)}),new D().i(Da,`java.lang.StackTrace$StringRE$`,{cn:1});var ka;function j(){return ka||=new Da,ka}function Aa(){this.dr=null,this.eG=null,Ma=this,this.dr=new tf(!1),this.eG=new tf(!0)}C=Aa.prototype=new T,C.constructor=Aa;function ja(){}ja.prototype=C,new D().i(Aa,`java.lang.System$Streams$`,{cs:1});var Ma;function Na(){return Ma||=new Aa,Ma}function Pa(){this.dv=null,Ia=this,this.dv=Object.prototype.hasOwnProperty}C=Pa.prototype=new T,C.constructor=Pa;function Fa(){}Fa.prototype=C,new D().i(Pa,`java.lang.Utils$Cache$`,{cu:1});var Ia;function La(){return Ia||=new Pa,Ia}function Ra(e,t){return e===t}function za(e){return 0}function Ba(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.an)}var Va=new D().i(0,`java.lang.Void`,{an:1},(e=>e===void 0));function Ha(e,t){throw new eu(`argument type mismatch`)}function Ua(){}C=Ua.prototype=new T,C.constructor=Ua;function Wa(){}Wa.prototype=C,C.bm=(function(e){return e instanceof E||e instanceof $n||e instanceof er||e instanceof tr||e instanceof nr||e instanceof rr||e instanceof ir||e instanceof ar||e instanceof or?e.a.length:Ha(this,e)}),new D().i(Ua,`java.lang.reflect.Array$`,{cv:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(){}C=qa.prototype=new T,C.constructor=qa;function Ja(){}Ja.prototype=C,C.eb=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.h,s=a.i,c=r,l=t.a[c],u=l.h,d=l.i;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),C.ea=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.ec=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.e7=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.e6=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.ed=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),C.e8=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),C.e9=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new D().i(qa,`java.util.Arrays$`,{cw:1});var Ya;function M(){return Ya||=new qa,Ya}function N(e,t){this.h=0,this.i=0,this.h=e,this.i=t}C=N.prototype=new T,C.constructor=N;function Xa(){}Xa.prototype=C,C.l=(function(e){return e instanceof N&&this.h===e.h&&this.i===e.i}),C.u=(function(){return this.h^this.i}),C.y=(function(){return P().eo(this.h,this.i)}),C.hb=(function(){return this.h}),C.ha=(function(){return P().en(this.h,this.i)}),C.h9=(function(){return P().bp(this.h,this.i)}),C.gR=(function(){return this.h<<24>>24}),C.h7=(function(){return this.h<<16>>16}),C.h1=(function(){return this.h}),C.h2=(function(){return this}),C.gX=(function(){return P().en(this.h,this.i)}),C.gV=(function(){return P().bp(this.h,this.i)}),C.gT=(function(e){return P().el(this.h,this.i,e.h,e.i)}),C.gS=(function(e){return P().el(this.h,this.i,e.h,e.i)}),C.gW=(function(e){return this.h===e.h&&this.i===e.i}),C.h5=(function(e){return!(this.h===e.h&&this.i===e.i)}),C.gJ=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<(-2147483648^e.h):t<n}),C.gK=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)<=(-2147483648^e.h):t<n}),C.gF=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>(-2147483648^e.h):t>n}),C.gG=(function(e){var t=this.i,n=e.i;return t===n?(-2147483648^this.h)>=(-2147483648^e.h):t>n}),C.hd=(function(){return new N(~this.h,~this.i)}),C.gD=(function(e){return new N(this.h|e.h,this.i|e.i)}),C.gC=(function(e){return new N(this.h&e.h,this.i&e.i)}),C.gQ=(function(e){return new N(this.h^e.h,this.i^e.i)}),C.gL=(function(e){var t=this.h;return new N(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.i<<e)}),C.gI=(function(e){var t=this.i;return new N(32&e?t>>>e|0:this.h>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),C.gH=(function(e){var t=this.i;return new N(32&e?t>>e:this.h>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),C.hc=(function(){var e=this.h,t=this.i;return new N(-e|0,e===0?-t|0:~t)}),C.gO=(function(e){var t=this.h,n=this.i,r=e.i,i=t+e.h|0;return new N(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),C.gM=(function(e){var t=this.h,n=this.i,r=e.i,i=t-e.h|0;return new N(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),C.gP=(function(e){var t=this.h,n=e.h,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new N(u,(((Math.imul(t,e.i)+Math.imul(this.i,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),C.gE=(function(e){var t=P();return new N(t.fe(this.h,this.i,e.h,e.i),t.w)}),C.gN=(function(e){var t=P();return new N(t.g9(this.h,this.i,e.h,e.i),t.w)}),new D().i(N,`org.scalajs.linker.runtime.RuntimeLong`,{ao:1});function Za(e,t,n){return-2097152&n?eo(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Qa(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.w=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.w=0,n>>>o|0}else return eo(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.w=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.w=s/4294967296|0,s|0}}function $a(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.w=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.w=n&(-1+i|0),t):eo(e,t,n,r,i,1)|0;if(-2097152&i)return e.w=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.w=a/4294967296|0,a|0}function eo(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,m=0,ee=0;o>=0&&-2097152&p;){var h=f,te=p,ne=u,re=d;if(te===re?(-2147483648^h)>=(-2147483648^ne):(-2147483648^te)>=(-2147483648^re)){var g=f,ie=p,ae=u,oe=d,se=g-ae|0,ce=(-2147483648^se)>(-2147483648^g)?-1+(ie-oe|0)|0:ie-oe|0;f=se,p=ce,o<32?m|=1<<o:ee|=1<<o}o=-1+o|0;var le=u,ue=d,de=le>>>1|0|ue<<31,fe=ue>>>1|0;u=de,d=fe}var pe=f,me=p;if(me===i?(-2147483648^pe)>=(-2147483648^r):(-2147483648^me)>=(-2147483648^i)){var he=f,ge=4294967296*p+ +(he>>>0),_e=4294967296*i+ +(r>>>0);if(a!==1){var ve=ge/_e,ye=ve|0,be=ve/4294967296|0,xe=m,Se=ee,Ce=xe+ye|0,we=(-2147483648^Ce)<(-2147483648^xe)?1+(Se+be|0)|0:Se+be|0;m=Ce,ee=we}if(a!==0){var Te=ge%_e;f=Te|0,p=Te/4294967296|0}}if(a===0)return e.w=ee,m;if(a===1)return e.w=p,f;var Ee=m,De=4294967296*ee+ +(Ee>>>0),Oe=``+f,ke=Oe.length;return``+De+`000000000`.substring(ke)+Oe}function to(){this.w=0}C=to.prototype=new T,C.constructor=to;function no(){}no.prototype=C,C.eo=(function(e,t){return t===e>>31?``+e:t<0?`-`+Za(this,-e|0,e===0?-t|0:~t):Za(this,e,t)}),C.bp=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),C.en=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),C.gZ=(function(e){return new N(e,e>>31)}),C.gY=(function(e){return new N(this.em(e),this.w)}),C.em=(function(e){if(e<-0x8000000000000000)return this.w=-2147483648,0;if(e>=0x8000000000000000)return this.w=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.w=e<0&&t!==0?-1+n|0:n,t}),C.el=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),C.fe=(function(e,t,n,r){if((n|r)===0)throw new Ql(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.w=0,-2147483648;var i=In(e,n);return this.w=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=-1,-1;else return this.w=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Qa(this,a,o,s,c);if((t^r)>=0)return l;var u=this.w;return this.w=l===0?-u|0:~u,-l|0}}),C.g9=(function(e,t,n,r){if((n|r)===0)throw new Ql(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=Ln(e,n);return this.w=i>>31,i}else return this.w=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.w=0,0;else return this.w=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=$a(this,a,o,s,c);if(t<0){var u=this.w;return this.w=l===0?-u|0:~u,-l|0}else return l}}),new D().i(to,`org.scalajs.linker.runtime.RuntimeLong$`,{cy:1});var ro;function P(){return ro||=new to,ro}var F=new D().i(1,`scala.Function1`,{e:1});function io(){}C=io.prototype=new T,C.constructor=io;function ao(){}ao.prototype=C;function oo(){this.dy=null,this.dx=null,co=this,this.dy=new K((e=>lo().dy)),this.dx=new Ol}C=oo.prototype=new T,C.constructor=oo;function so(){}so.prototype=C,new D().i(oo,`scala.PartialFunction$`,{cH:1});var co;function lo(){return co||=new oo,co}function uo(e,t){for(var n=e.r();n.x();)t.s(n.k())}function fo(e,t,n,r){return e.D()===0?``+t+r:e.b9(Ip(new Lp),t,n,r).L.v}function po(e,t,n,r,i){var a=t.L;n.length!==0&&(a.v=``+a.v+n);var o=e.r();if(o.x()){var s=o.k();for(a.v=``+a.v+s;o.x();){a.v=``+a.v+r;var c=o.k();a.v=``+a.v+c}}return i.length!==0&&(a.v=``+a.v+i),t}function mo(e,t){this.dE=null,this.b4=null,this.dE=e,this.b4=t}C=mo.prototype=new T,C.constructor=mo;function ho(){}ho.prototype=C,C.fG=(function(){return this.dE.aB().r()}),new D().i(mo,`scala.collection.Iterator$ConcatIteratorCell`,{d4:1});function go(){}C=go.prototype=new T,C.constructor=go;function _o(){}_o.prototype=C,C.M=(function(e,t){return e===t||(ys(e)?this.fl(e,t):e instanceof w?this.fj(e,t):e===null?t===null:Nn(e,t))}),C.fl=(function(e,t){if(ys(t))return this.fk(e,t);if(t instanceof w){if(typeof e==`number`)return+e===t.c;if(e instanceof N){var n=Xn(e),r=n.h,i=n.i,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:Nn(e,t)}else return e===null?t===null:Nn(e,t)}),C.fk=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof N){var r=Xn(t);return n===P().bp(r.h,r.i)}else return!1}else if(e instanceof N){var i=Xn(e),a=i.h,o=i.i;if(t instanceof N){var s=Xn(t),c=s.h,l=s.i;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return P().bp(a,o)===u}else return!1}else return e===null?t===null:Nn(e,t)}),C.fj=(function(e,t){if(t instanceof w)return e.c===t.c;if(ys(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof N){var n=Xn(t),r=n.h,i=n.i,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:Nn(t,e)}else return e===null&&t===null}),new D().i(go,`scala.runtime.BoxesRunTime$`,{dG:1});var vo;function I(){return vo||=new go,vo}var yo=new D().i(0,`scala.runtime.Null$`,{dJ:1});function bo(){}C=bo.prototype=new T,C.constructor=bo;function xo(){}xo.prototype=C,C.aO=(function(e,t){if(e instanceof E||e instanceof rr||e instanceof or||e instanceof ir||e instanceof ar)return e.a[t];if(e instanceof er)return Jn(e.a[t]);if(e instanceof tr||e instanceof nr||e instanceof $n)return e.a[t];throw e===null?new au:new pu(e)}),C.eZ=(function(e,t,n){if(e instanceof E)e.a[t]=n;else if(e instanceof rr)e.a[t]=n|0;else if(e instanceof or)e.a[t]=+n;else if(e instanceof ir)e.a[t]=Xn(n);else if(e instanceof ar)e.a[t]=Math.fround(n);else if(e instanceof er)e.a[t]=Yn(n);else if(e instanceof tr)e.a[t]=n|0;else if(e instanceof nr)e.a[t]=n|0;else if(e instanceof $n)e.a[t]=!!n;else if(e===null)throw new au;else throw new pu(e)}),C.eO=(function(e){return fo(e.aS(),e.ak()+`(`,`,`,`)`)}),C.b=(function(e){return e===null?null:e.a.length===0?Sd(Ed()):new $f(e)}),C.gz=(function(e){return e===null?null:new Yf(e)}),new D().i(bo,`scala.runtime.ScalaRunTime$`,{dK:1});var So;function L(){return So||=new bo,So}function Co(){}C=Co.prototype=new T,C.constructor=Co;function wo(){}wo.prototype=C,C.d=(function(e,t){var n=this.bM(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.bM=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.q=(function(e,t){return this.f1(e^t)}),C.f1=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.aR=(function(e){var t=e.h,n=e.i;return n===t>>31?t:t^n}),C.V=(function(e){var t=Rn(e);if(t===e)return t;var n=P(),r=n.em(e),i=n.w;return P().bp(r,i)===e?r^i:ta().cr(e)}),C.B=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.V(+e);if(e instanceof N){var t=Xn(e);return this.aR(new N(t.h,t.i))}else return Pn(e)}),C.bo=(function(e){throw tu(new nu,``+e)}),new D().i(Co,`scala.runtime.Statics$`,{dM:1});var To;function R(){return To||=new Co,To}function Eo(){}C=Eo.prototype=new T,C.constructor=Eo;function Do(){}Do.prototype=C,C.gl=(function(e,t){return setTimeout((()=>{t.aB()}),e)}),new D().i(Eo,`scala.scalajs.js.timers.package$`,{dP:1});var Oo;function ko(){return Oo||=new Eo,Oo}function Ao(){}C=Ao.prototype=new T,C.constructor=Ao;function jo(){}jo.prototype=C,C.gu=(function(e){var t=[];return e.bl(new K((e=>t.push(e)|0))),t}),new D().i(Ao,`scala.scalajs.runtime.Compat$`,{dY:1});var Mo;function No(){return Mo||=new Ao,Mo}function Po(){}C=Po.prototype=new T,C.constructor=Po;function Fo(){}Fo.prototype=C,C.gm=(function(e){var t=`Illegal command line`+(e.ei()===0?``:e.ei()===1?` after first argument`:` after `+e.ei()+` arguments`)+`: `+e.h3();Is().g4().fK(t+`
`)}),new D().i(Po,`scala.util.CommandLineParser$`,{e0:1});function Io(e){this.ci=null,this.ci=e}C=Io.prototype=new T,C.constructor=Io;function Lo(){}Lo.prototype=C,C.y=(function(){return`DynamicVariable(`+this.ci+`)`}),new D().i(Io,`scala.util.DynamicVariable`,{e2:1});function Ro(){}C=Ro.prototype=new T,C.constructor=Ro;function zo(){}zo.prototype=C,C.d=(function(e,t){var n=this.bM(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),C.bM=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),C.q=(function(e,t){return this.H(e^t)}),C.H=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),C.ep=(function(e,t,n){var r=e.ai();if(r===0)return Y(e.ak());var i=t;n||(i=this.d(i,Y(e.ak())));for(var a=0;a<r;)i=this.d(i,R().B(e.aj(a))),a=1+a|0;return this.q(i,r)}),C.gv=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.r();o.x();){var s=o.k(),c=R().B(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.d(l,n),l=this.d(l,r),l=this.bM(l,a),this.q(l,i)}),C.g3=(function(e,t){var n=e.r(),r=t;if(!n.x())return this.q(r,0);var i=n.k();if(!n.x())return this.q(this.d(r,R().B(i)),1);var a=n.k(),o=R().B(i);r=this.d(r,o);for(var s=r,c=R().B(a),l=c-o|0,u=2;n.x();){r=this.d(r,c);var d=R().B(n.k());if(l!==(d-c|0)||l===0){for(r=this.d(r,d),u=1+u|0;n.x();)r=this.d(r,R().B(n.k())),u=1+u|0;return this.q(r,u)}c=d,u=1+u|0}return this.H(this.d(this.d(s,l),c))}),C.dS=(function(e,t){var n=t,r=Ka().bm(e);switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,R().B(L().aO(e,0))),1);default:var i=R().B(L().aO(e,0));n=this.d(n,i);for(var a=n,o=R().B(L().aO(e,1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=R().B(L().aO(e,c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,R().B(L().aO(e,c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.g7=(function(e,t,n,r){return this.H(this.d(this.d(this.d(r,e),t),n))}),C.fH=(function(e,t){var n=t,r=e.p();switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,R().B(e.t(0))),1);default:var i=R().B(e.t(0));n=this.d(n,i);for(var a=n,o=R().B(e.t(1)),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=R().B(e.t(c));if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,R().B(e.t(c))),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.fM=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.m();){var l=c.a1(),u=c.X(),d=R().B(l);switch(r=this.d(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.g7(s,a,o,t):this.q(r,n)}),C.e1=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.d(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]?1231:1237),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dT=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dU=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dV=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,R().V(e.a[0])),1);default:var i=R().V(e.a[0]);n=this.d(n,i);for(var a=n,o=R().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=R().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,R().V(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dW=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,R().V(e.a[0])),1);default:var i=R().V(e.a[0]);n=this.d(n,i);for(var a=n,o=R().V(e.a[1]),s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=R().V(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,R().V(e.a[c])),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dX=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.dY=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:var i=n,a=e.a[0];return this.q(this.d(i,R().aR(new N(a.h,a.i))),1);default:var o=e.a[0],s=R().aR(new N(o.h,o.i));n=this.d(n,s);for(var c=n,l=e.a[1],u=R().aR(new N(l.h,l.i)),d=u-s|0,f=2;f<r;){n=this.d(n,u);var p=e.a[f],m=R().aR(new N(p.h,p.i));if(d!==(m-u|0)||d===0){for(n=this.d(n,m),f=1+f|0;f<r;){var ee=n,h=e.a[f];n=this.d(ee,R().aR(new N(h.h,h.i))),f=1+f|0}return this.q(n,r)}u=m,f=1+f|0}return this.H(this.d(this.d(c,d),u))}}),C.dZ=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,e.a[0]),1);default:var i=e.a[0];n=this.d(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.d(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.d(n,l),c=1+c|0;c<r;)n=this.d(n,e.a[c]),c=1+c|0;return this.q(n,r)}o=l,c=1+c|0}return this.H(this.d(this.d(a,s),o))}}),C.e0=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.q(n,0);case 1:return this.q(this.d(n,0),1);default:n=this.d(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.d(n,a),o!==(-a|0)||o===0){for(n=this.d(n,0),s=1+s|0;s<r;)n=this.d(n,0),s=1+s|0;return this.q(n,r)}a=0,s=1+s|0}return this.H(this.d(this.d(i,o),a))}});function Bo(e){this.aG=null,this.cD=null,this.bQ=!1,this.cD=e,Yr(this),this.bQ=!1}C=Bo.prototype=new T,C.constructor=Bo;function Vo(){}Vo.prototype=C,C.g5=(function(e){this.bQ?($r(e),this.cD.aB()):Qr(this,e)}),C.fL=(function(){Xr(this),this.bQ=!0}),new D().i(Bo,`com.raquo.airstream.ownership.OneTimeOwner`,{bg:1,bh:1});function Ho(){}C=Ho.prototype=new T,C.constructor=Ho;function Uo(){}Uo.prototype=C,C.fc=(function(e){return e!==null}),C.fh=(function(e){return e?``:null}),C.bI=(function(e){return this.fc(e)}),C.bk=(function(e){return this.fh(!!e)}),new D().i(Ho,`com.raquo.laminar.codecs.package$$anon$1`,{bu:1,Y:1});function Wo(e){if(e===null)throw new au}C=Wo.prototype=new T,C.constructor=Wo;function Go(){}Go.prototype=C,C.bk=(function(e){return e}),C.bI=(function(e){return e}),new D().i(Wo,`com.raquo.laminar.codecs.package$$anon$2`,{bv:1,Y:1});function Ko(e,t,n,r){}C=Ko.prototype=new Ti,C.constructor=Ko;function qo(){}qo.prototype=C,new D().i(Ko,`com.raquo.laminar.keys.CompositeKey`,{bF:1,S:1});function Jo(e,t,n){return e.ap=t,e.aU=n,e}function Yo(){this.ap=null,this.aU=null}C=Yo.prototype=new Ti,C.constructor=Yo;function Xo(){}Xo.prototype=C,C.c=(function(e){return new oc(this,e,new Hl(((e,t,n)=>{O().er(e,t,n)})))}),new D().i(Yo,`com.raquo.laminar.keys.HtmlAttr`,{Z:1,S:1});function Zo(e,t){this.cS=null,this.cR=null,this.cS=e,this.cR=t}C=Zo.prototype=new Ti,C.constructor=Zo;function Qo(){}Qo.prototype=C,C.c=(function(e){return new oc(this,e,new Hl(((e,t,n)=>{O().gg(e,t,n)})))}),new D().i(Zo,`com.raquo.laminar.keys.HtmlProp`,{bG:1,S:1});function $o(e,t,n){this.bT=null,this.bS=null,this.bz=null,this.bA=null,this.bT=e,this.bS=t;var r=n.m()?X():new dd(n.C()+`:`+e);this.bz=r.m()?e:r.C(),this.bA=n.m()?X():new dd(ki().fQ(n.C()))}C=$o.prototype=new Ti,C.constructor=$o;function es(){}es.prototype=C,new D().i($o,`com.raquo.laminar.keys.SvgAttr`,{bH:1,S:1});function ts(){}C=ts.prototype=new T,C.constructor=ts;function ns(){}ns.prototype=C,C.aA=(function(e){}),new D().i(ts,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{bM:1,T:1});function rs(e,t){if(this.cX=null,this.cX=e,t===null)throw new au}C=rs.prototype=new T,C.constructor=rs;function is(){}is.prototype=C,C.aA=(function(e){var t=Or(),n=(()=>{this.cX.s(e)});if(Or(),t.R)n();else{t.R=!0;try{n()}finally{t.R=!1,wr(t)}}}),new D().i(rs,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{bN:1,T:1});function as(e,t){if(this.cY=null,this.cY=e,t===null)throw new au}C=as.prototype=new T,C.constructor=as;function os(){}os.prototype=C,C.f0=(function(e){return this.cY.s(e)}),new D().i(as,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{bQ:1,bO:1});function ss(e){e.e5(new Br(new Ll((()=>{throw U(new W,`Attempting to use owner of unmounted element: `+fo(O().fb(e.br(),(O(),Pp())),``,` > `,``))}))))}function cs(){}C=cs.prototype=new T,C.constructor=cs;function ls(){}ls.prototype=C,C.eY=(function(e){var t=this.f3();return e.bl(new J((e=>{e.aA(t)}))),t}),C.f3=(function(){return new Yu(this,O().f6(this))});function us(e,t){this.d3=null,this.d3=e}C=us.prototype=new T,C.constructor=us;function ds(){}ds.prototype=C,new D().i(us,`com.raquo.laminar.tags.SvgTag`,{c0:1,ac:1});function fs(){}C=fs.prototype=new T,C.constructor=fs;function ps(){}ps.prototype=C,C.bk=(function(e){return e}),C.bI=(function(e){return e}),new D().i(fs,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{c7:1,Y:1});function ms(e,t){return e.aW=t,e.cj(),e}function hs(){this.aW=null,this.aV=null,this.aX=!1}C=hs.prototype=new T,C.constructor=hs;function gs(){}gs.prototype=C,C.gr=(function(){return this.aX||=(this.aV=new uc(this.aW,Ki().eN(),(Ki(),void 0)),!0),this.aV}),C.e=(function(e,t){var n=this.gr().eY(L().b(new(k.r()).C([])));return e.bl(new J((e=>{e.s(this).aA(n)}))),t.bl(new J((e=>{e.aA(n)}))),n});function _s(){}C=_s.prototype=new T,C.constructor=_s;function vs(){}vs.prototype=C;function ys(e){return e instanceof _s||typeof e==`number`||e instanceof N}function bs(e,t,n,r,i){this.aK=null,this.b0=null,this.aL=null,this.aM=0,this.aJ=0,this.aK=e,this.b0=t,this.aL=n,this.aM=r,this.aJ=i}C=bs.prototype=new T,C.constructor=bs;function xs(){}xs.prototype=C,C.l=(function(e){return e instanceof bs&&this.aL===e.aL&&this.aM===e.aM&&this.aJ===e.aJ&&this.aK===e.aK&&this.b0===e.b0}),C.y=(function(){var e=``;return this.aK!==`<jscode>`&&(e=``+e+this.aK+`.`),e=``+e+this.b0,this.aL===null?e+=`(Unknown Source)`:(e=e+`(`+this.aL,this.aM>=0&&(e=e+`:`+this.aM,this.aJ>=0&&(e=e+`:`+this.aJ)),e+=`)`),e}),C.u=(function(){return Y(this.aK)^Y(this.b0)^Y(this.aL)^this.aM^this.aJ});var Ss=new D().i(bs,`java.lang.StackTraceElement`,{am:1,a:1});function Cs(){}C=Cs.prototype=new T,C.constructor=Cs;function ws(){}ws.prototype=C,C.fR=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new sd;for(var i=``,a=t;a!==r;)i+=``+zn(e.a[a]),a=1+a|0;return i}),new D().i(Cs,`java.lang.String$`,{cp:1,a:1});var Ts;function Es(){return Ts||=new Cs,Ts}function Ds(e,t,n,r,i){return e.dt=t,e.du=i,i&&e.fu(),e}var Os=class extends Error{constructor(){super(),this.dt=null,this.du=!1,this.ds=null,this.bD=null}bn(){return this.dt}fu(){var e=this instanceof Z?this.T:this;return this.ds=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}fC(){return this.bD===null&&(this.du?this.bD=Ea().ft(this.ds):this.bD=new(Ss.r()).C(0)),this.bD}y(){var e=Mn(this),t=this.bn();return t===null?e:e+`: `+t}u(){return Zn.prototype.u.call(this)}l(e){return Zn.prototype.l.call(this,e)}get message(){var e=this.bn();return e===null?``:e}get name(){return Mn(this)}toString(){return this.y()}};function ks(){}C=ks.prototype=new T,C.constructor=ks;function As(){}As.prototype=C,C.ef=(function(e,t){var n=e.D();if(n>-1){for(var r=t.fS(n),i=e.r(),a=0;a<n;)L().eZ(r,a,i.k()),a=1+a|0;return r}else{var o=null,s=t.gd(),c=s===lr.l();o=[];for(var l=e.r();l.x();){var u=l.k(),d=c?Yn(u):u===null?s.al.z:u;o.push(d)}return(s===cr.l()?Va.l():s===yo.l()||s===$c.l()?sr.l():s).al.r().w(o)}}),C.ee=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!I().M(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new D().i(ks,`scala.Array$`,{cz:1,a:1});var js;function Ms(){return js||=new ks,js}function Ns(){this.dw=null,Fs=this,this.dw=new Io(Na().dr)}C=Ns.prototype=new T,C.constructor=Ns;function Ps(){}Ps.prototype=C,C.g4=(function(){return this.dw.ci}),new D().i(Ns,`scala.Console$`,{cA:1,ds:1});var Fs;function Is(){return Fs||=new Ns,Fs}function Ls(){}C=Ls.prototype=new ao,C.constructor=Ls;function Rs(){}Rs.prototype=C,C.gA=(function(e){return e===null?null:e.a.length===0?Ad().dF:new Cp(e)});function zs(e,t){if(t===e)e.dP(Vu().eg(t));else for(var n=t.r();n.x();)e.cl(n.k());return e}function Bs(){}C=Bs.prototype=new T,C.constructor=Bs;function Vs(){}Vs.prototype=C,C.y=(function(){return`<function0>`});function Hs(){}C=Hs.prototype=new T,C.constructor=Hs;function Us(){}Us.prototype=C,C.y=(function(){return`<function1>`});function Ws(){}C=Ws.prototype=new T,C.constructor=Ws;function Gs(){}Gs.prototype=C,C.y=(function(){return`<function2>`});function Ks(){}C=Ks.prototype=new T,C.constructor=Ks;function qs(){}qs.prototype=C,C.y=(function(){return`<function3>`});function Js(e){this.bH=!1,this.bH=e}C=Js.prototype=new T,C.constructor=Js;function Ys(){}Ys.prototype=C,C.y=(function(){return``+this.bH}),new D().i(Js,`scala.runtime.BooleanRef`,{dF:1,a:1});function Xs(e){this.b7=0,this.b7=e}C=Xs.prototype=new T,C.constructor=Xs;function Zs(){}Zs.prototype=C,C.y=(function(){return``+this.b7}),new D().i(Xs,`scala.runtime.IntRef`,{dH:1,a:1});function Qs(){this.z=0,this.dN=0,this.eM=0,this.eL=0,ec=this,this.z=Y(`Seq`),this.dN=Y(`Map`),this.eM=Y(`Set`),this.eL=this.gv(Pp(),this.dN)}C=Qs.prototype=new zo,C.constructor=Qs;function $s(){}$s.prototype=C,C.ge=(function(e){return vf(e)?this.fH(e,this.z):e instanceof sp?this.fM(e,this.z):this.g3(e,this.z)}),new D().i(Qs,`scala.util.hashing.MurmurHash3$`,{e4:1,e3:1});var ec;function z(){return ec||=new Qs,ec}var tc=class extends Os{};function nc(){this.bN=null,this.cw=null,this.cx=null,ic=this,this.bN=Vu().dQ(L().b(new(F.r()).C([]))),this.cw=new J((e=>{try{console.error(this.fy(e)+`
`+this.fB(e,`
`))}catch(e){var t=e instanceof Os?e:new Z(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.cx=new J((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof Z?t.T:t})),this.g8(this.cw)}C=nc.prototype=new T,C.constructor=nc;function rc(){}rc.prototype=C,C.fy=(function(e){try{var t=e.bn()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return jn(e).cq()+`: `+t}),C.fB=(function(e,t){try{return fo(Ic().gA(e.fC()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),C.g8=(function(e){this.bN.cl(e)}),C.cv=(function(e){for(var t=this.bN.r();t.x();){var n=t.k();try{n.s(e)}catch(e){var r=e instanceof Os?e:new Z(e),i=this.cx;if(n===null?i===null:n.l(i))throw r instanceof Z?r.T:r;console.warn(`Error processing an unhandled error callback:`),ko().gl(0,new Ll((e=>(()=>{throw e instanceof Z?e.T:e}))(r)))}}}),new D().i(nc,`com.raquo.airstream.core.AirstreamError$`,{b3:1,dq:1,dr:1});var ic;function ac(){return ic||=new nc,ic}function B(e,t,n){return new hl(n.f0(t))}function oc(e,t,n){this.cV=null,this.cW=null,this.cU=null,this.cV=e,this.cW=t,this.cU=n}C=oc.prototype=new T,C.constructor=oc;function sc(){}sc.prototype=C,C.aA=(function(e){this.cU.eW(e,this.cV,this.cW)}),new D().i(oc,`com.raquo.laminar.modifiers.KeySetter`,{bK:1,T:1,bR:1});function cc(e,t){if(this.bV=null,this.d0=null,this.d1=null,this.d0=t,ss(this),e===null)throw U(new W,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!O().fJ(e,document))throw U(new W,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.d1=e,this.fP()}C=cc.prototype=new T,C.constructor=cc;function lc(){}lc.prototype=C,C.bK=(function(){return this.bV}),C.e5=(function(e){this.bV=e}),C.fP=(function(){return this.bV.dO(),Hi().cm(this,this.d0,void 0)}),C.br=(function(){return this.d1}),new D().i(cc,`com.raquo.laminar.nodes.RootNode`,{bV:1,a0:1,ab:1});function uc(e,t,n){this.bX=null,this.bX=e}C=uc.prototype=new ls,C.constructor=uc;function dc(){}dc.prototype=C,new D().i(uc,`com.raquo.laminar.tags.CustomHtmlTag`,{bX:1,bZ:1,ac:1});function fc(){this.ap=null,this.aU=null,this.d4=null,this.d5=!1,this.d6=null,this.d7=!1,this.d8=null,this.d9=!1,Jo(this,`placement`,new fs)}C=fc.prototype=new Xo,C.constructor=fc;function pc(){}pc.prototype=C,C.f2=(function(){return this.d5||=(this.d4=hc().c(`bottom`),!0),this.d4}),C.fi=(function(){return this.d7||=(this.d6=hc().c(`end`),!0),this.d6}),C.gn=(function(){return this.d9||=(this.d8=hc().c(`start`),!0),this.d8}),new D().i(fc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentPlacement$`,{c2:1,Z:1,S:1});var mc;function hc(){return mc||=new fc,mc}function gc(){this.ap=null,this.aU=null,this.da=null,this.db=!1,Jo(this,`activation`,new fs)}C=gc.prototype=new Xo,C.constructor=gc;function _c(){}_c.prototype=C,C.fO=(function(){return this.db||=(this.da=yc().c(`manual`),!0),this.da}),new D().i(gc,`io.github.nguyenyou.webawesome.laminar.CommonKeys$TabGroupActivation$`,{c3:1,Z:1,S:1});var vc;function yc(){return vc||=new gc,vc}function bc(){this.aW=null,this.aV=null,this.aX=!1,this.de=null,this.df=!1,this.dc=null,this.dd=!1,ms(this,`wa-tab`)}C=bc.prototype=new gs,C.constructor=bc;function xc(){}xc.prototype=C,C.o=(function(){return this.df||=(this.de=(q(),Jo(new Yo,`panel`,yi().aH)),!0),this.de}),C.bj=(function(){return this.dd||=(this.dc=(q(),Jo(new Yo,`disabled`,yi().cP)),!0),this.dc}),C.cj=(function(){return kn}),new D().i(bc,`io.github.nguyenyou.webawesome.laminar.Tab$`,{c4:1,a2:1,a1:1});var Sc;function V(){return Sc||=new bc,Sc}function Cc(){this.aW=null,this.aV=null,this.aX=!1,this.di=null,this.dj=!1,this.dk=null,this.dl=!1,this.dg=null,this.dh=!1,ms(this,`wa-tab-group`)}C=Cc.prototype=new gs,C.constructor=Cc;function wc(){}wc.prototype=C,C.eQ=(function(){return this.dj||=(this.di=(q(),Jo(new Yo,`active`,yi().aH)),!0),this.di}),C.cs=(function(){return this.dl||=(this.dk=hc(),!0),this.dk}),C.eP=(function(){return this.dh||=(this.dg=yc(),!0),this.dg}),C.cj=(function(){return Dn}),new D().i(Cc,`io.github.nguyenyou.webawesome.laminar.TabGroup$`,{c5:1,a2:1,a1:1});var Tc;function Ec(){return Tc||=new Cc,Tc}function Dc(){this.aW=null,this.aV=null,this.aX=!1,this.dm=null,this.dn=!1,ms(this,`wa-tab-panel`)}C=Dc.prototype=new gs,C.constructor=Dc;function Oc(){}Oc.prototype=C,C.n=(function(){return this.dn||=(this.dm=(q(),Jo(new Yo,`name`,yi().aH)),!0),this.dm}),C.cj=(function(){return On}),new D().i(Dc,`io.github.nguyenyou.webawesome.laminar.TabPanel$`,{c6:1,a2:1,a1:1});var kc;function H(){return kc||=new Dc,kc}function Ac(e){if(e.al.Z)return e.al.Q().cq()+`[]`;for(var t=e.al.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function jc(e){this.bY=null,this.al=e}C=jc.prototype=new T,C.constructor=jc;function Mc(){}Mc.prototype=C,C.y=(function(){return(this.al.Y?`interface `:this.al.X?``:`class `)+this.al.N}),C.cq=(function(){return this.bY===null&&(this.bY=Ac(this)),this.bY}),new D().i(jc,`java.lang.Class`,{cd:1,a:1,L:1});function U(e,t){return Ds(e,t,null,!0,!0),e}var W=class extends Os{};new D().i(W,`java.lang.Exception`,{K:1,u:1,a:1});function Nc(){this.eH=null,Fc=this,this.eH=Yc()}C=Nc.prototype=new Rs,C.constructor=Nc;function Pc(){}Pc.prototype=C,new D().i(Nc,`scala.Predef$`,{cJ:1,cD:1,cE:1});var Fc;function Ic(){return Fc||=new Nc,Fc}function Lc(e,t){return e.bF=t,e}function Rc(){this.bF=null}C=Rc.prototype=new T,C.constructor=Rc;function zc(){}zc.prototype=C,C.cp=(function(e){return this.bF.co(e,ff())}),C.cn=(function(e){return this.bF.co(e,ff())});function Bc(e,t){return new Du(e).f5(t)}function Vc(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?G().A:new ju(e,r,i)}function Hc(e,t){for(var n=t.r();e.x()&&n.x();)if(!I().M(e.k(),n.k()))return!1;return e.x()===n.x()}function Uc(){this.A=null,Gc=this,this.A=new xu}C=Uc.prototype=new T,C.constructor=Uc;function Wc(){}Wc.prototype=C,new D().i(Uc,`scala.collection.Iterator$`,{d1:1,W:1,a:1});var Gc;function G(){return Gc||=new Uc,Gc}function Kc(){}C=Kc.prototype=new T,C.constructor=Kc;function qc(){}qc.prototype=C,new D().i(Kc,`scala.collection.immutable.Map$`,{df:1,d6:1,a:1});var Jc;function Yc(){return Jc||=new Kc,Jc}function Xc(e){this.dG=null,this.dG=e}C=Xc.prototype=new Vs,C.constructor=Xc;function Zc(){}Zc.prototype=C,C.aB=(function(){return(0,this.dG)()}),new D().i(Xc,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{dB:1,aZ:1,ap:1});function K(e){this.dH=null,this.dH=e}C=K.prototype=new Us,C.constructor=K;function Qc(){}Qc.prototype=C,C.s=(function(e){return(0,this.dH)(e)}),new D().i(K,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{dC:1,b0:1,e:1});var $c=new D().i(0,`scala.runtime.Nothing$`,{dI:1,u:1,a:1});function el(){}C=el.prototype=new Vs,C.constructor=el;function tl(){}tl.prototype=C;function nl(){}C=nl.prototype=new Us,C.constructor=nl;function rl(){}rl.prototype=C;function il(){}C=il.prototype=new Gs,C.constructor=il;function al(){}al.prototype=C;function ol(){}C=ol.prototype=new qs,C.constructor=ol;function sl(){}sl.prototype=C;function cl(e,t,n,r){if(this.cy=null,r===null)throw new au;this.cy=void 0}C=cl.prototype=new T,C.constructor=cl;function ll(){}ll.prototype=C,C.y=(function(){return fr(this)}),new D().i(cl,`com.raquo.airstream.core.Observer$$anon$8`,{b7:1,b8:1,b4:1,b5:1});function ul(e){if(this.cJ=null,this.cK=!1,this.eu=null,e===null)throw new au;Si(this)}C=ul.prototype=new T,C.constructor=ul;function dl(){}dl.prototype=C,C.gq=(function(){return this.cK||=(this.cJ=new us(`svg`,!1),!0),this.cJ}),new D().i(ul,`com.raquo.laminar.api.Laminar$svg$`,{bo:1,bE:1,bx:1,bz:1});function fl(){this.f=null,ml=this,this.f=new Cf}C=fl.prototype=new T,C.constructor=fl;function pl(){}pl.prototype=C,new D().i(fl,`com.raquo.laminar.api.package$`,{br:1,a8:1,a9:1,a7:1});var ml;function q(){return ml||=new fl,ml}function hl(e){this.d2=null,this.bW=null,this.d2=X(),this.bW=O().f8(e)}C=hl.prototype=new T,C.constructor=hl;function gl(){}gl.prototype=C,C.es=(function(e){this.d2=e}),C.et=(function(e){}),C.aA=(function(e){Hi().cm(e,this,void 0)}),C.gt=(function(){return this.bW.data}),C.br=(function(){return this.bW}),new D().i(hl,`com.raquo.laminar.nodes.TextNode`,{bW:1,a0:1,T:1,aa:1});function _l(){}C=_l.prototype=new T,C.constructor=_l;function vl(){}vl.prototype=C;function yl(e,t){return e===t}function bl(e){return e?1231:1237}var xl=new D().i(0,`java.lang.Boolean`,{cb:1,a:1,P:1,L:1},(e=>typeof e==`boolean`));function Sl(e){return e}function Cl(e,t){return t instanceof w&&e===t.c}var wl=new D().i(0,`java.lang.Character`,{ai:1,a:1,P:1,L:1},(e=>e instanceof w)),Tl=class extends W{};function El(){this.v=null,this.v=``}C=El.prototype=new T,C.constructor=El;function Dl(){}Dl.prototype=C,C.eU=(function(e){var t=Es().fR(e,0,e.a.length);return this.v=``+this.v+t,this}),C.y=(function(){return this.v}),C.p=(function(){return this.v.length}),C.e3=(function(e){return this.v.charCodeAt(e)}),new D().i(El,`java.lang.StringBuilder`,{cq:1,a3:1,ag:1,a:1});function Ol(){}C=Ol.prototype=new T,C.constructor=Ol;function kl(){}kl.prototype=C,C.y=(function(){return`<function1>`}),C.eX=(function(e){throw new pu(e)}),C.s=(function(e){this.eX(e)}),new D().i(Ol,`scala.PartialFunction$$anon$1`,{cI:1,g:1,e:1,a:1});function Al(){}C=Al.prototype=new T,C.constructor=Al;function jl(){}jl.prototype=C,C.r=(function(){return this}),C.bJ=(function(e){return this.bs(e,-1)}),C.bs=(function(e,t){return Vc(this,e,t)}),C.y=(function(){return`<iterator>`}),C.b9=(function(e,t,n,r){return po(this,e,t,n,r)}),C.D=(function(){return-1});function Ml(e,t){return e.bG=t,e}function Nl(){this.bG=null}C=Nl.prototype=new T,C.constructor=Nl;function Pl(){}Pl.prototype=C,C.dQ=(function(e){return this.bG.cn(e)}),C.eg=(function(e){return this.bG.cp(e)}),C.cp=(function(e){return this.eg(e)}),C.cn=(function(e){return this.dQ(e)});function Fl(e){return e.aQ(0)===0}function Il(e,t){var n=e.D();if(n!==-1)var r=t.D(),i=r!==-1&&n!==r;else var i=!1;return i?!1:Hc(e.r(),t)}function Ll(e){this.dK=null,this.dK=e}C=Ll.prototype=new tl,C.constructor=Ll;function Rl(){}Rl.prototype=C,C.aB=(function(){return(0,this.dK)()}),new D().i(Ll,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{dR:1,dQ:1,aZ:1,ap:1});function J(e){this.dL=null,this.dL=e}C=J.prototype=new rl,C.constructor=J;function zl(){}zl.prototype=C,C.s=(function(e){return(0,this.dL)(e)}),new D().i(J,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{dT:1,dS:1,b0:1,e:1});function Bl(e){this.eK=null,this.eK=e}C=Bl.prototype=new al,C.constructor=Bl;function Vl(){}Vl.prototype=C,new D().i(Bl,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{dV:1,dU:1,dD:1,cB:1});function Hl(e){this.dM=null,this.dM=e}C=Hl.prototype=new sl,C.constructor=Hl;function Ul(){}Ul.prototype=C,C.eW=(function(e,t,n){return(0,this.dM)(e,t,n)}),new D().i(Hl,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{dX:1,dW:1,dE:1,cC:1});function Wl(e){e.bU=new ri(new Ll((()=>{e.aI.dO()})),new Ll((()=>{e.aI.f9()})))}function Gl(e,t){ql(e,e.bB,t)&&Jl(e,t)}function Kl(e,t){var n=e.bB;e.bB=t,ql(e,n,t)||Jl(e,t)}function ql(e,t,n){var r=!t.m()&&!t.C().bK().I.m(),i=!n.m()&&!n.C().bK().I.m();return r&&!i}function Jl(e,t){Yl(e,t.m()?X():new dd(t.C().bK()))}function Yl(e,t){if(t.m())e.bU.f4();else{var n=t.C();e.bU.gi(n)}}function Xl(){}C=Xl.prototype=new vl,C.constructor=Xl;function Zl(){}Zl.prototype=C;var Ql=class extends Tl{constructor(e){super(),Ds(this,e,null,!0,!0)}};new D().i(Ql,`java.lang.ArithmeticException`,{ca:1,Q:1,K:1,u:1,a:1});var $l=new D().i(0,`java.lang.Byte`,{cc:1,R:1,a:1,P:1,L:1},(e=>Wn(e))),eu=class extends Tl{constructor(e){super(),Ds(this,e,null,!0,!0)}};new D().i(eu,`java.lang.IllegalArgumentException`,{cg:1,Q:1,K:1,u:1,a:1});function tu(e,t){return Ds(e,t,null,!0,!0),e}var nu=class extends Tl{};new D().i(nu,`java.lang.IndexOutOfBoundsException`,{ak:1,Q:1,K:1,u:1,a:1});function ru(){}C=ru.prototype=new vl,C.constructor=ru;function iu(){}iu.prototype=C,new D().i(ru,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{cj:1,af:1,ad:1,ah:1,ae:1});var au=class extends Tl{constructor(){super(),Ds(this,null,null,!0,!0)}};new D().i(au,`java.lang.NullPointerException`,{ck:1,Q:1,K:1,u:1,a:1});var ou=new D().i(0,`java.lang.Short`,{cl:1,R:1,a:1,P:1,L:1},(e=>Gn(e))),su=class extends Tl{constructor(e){super(),Ds(this,e,null,!0,!0)}};new D().i(su,`java.lang.UnsupportedOperationException`,{ct:1,Q:1,K:1,u:1,a:1});var cu=class extends Tl{constructor(e){super(),Ds(this,e,null,!0,!0)}};new D().i(cu,`java.util.NoSuchElementException`,{cx:1,Q:1,K:1,u:1,a:1});function lu(e){return e.c3||=(e.c4=e.bE===null?`null`:fu(e),!0),e.c4}function uu(e){return e.c3?e.c4:lu(e)}function du(e){var t=e.bE;return`of class `+Mn(t)}function fu(e){try{return e.bE+` (`+du(e)+`)`}catch{return`an instance `+du(e)}}var pu=class extends Tl{constructor(e){super(),this.c4=null,this.bE=null,this.c3=!1,this.bE=e,Ds(this,null,null,!0,!0)}bn(){return uu(this)}};new D().i(pu,`scala.MatchError`,{cF:1,Q:1,K:1,u:1,a:1});function mu(){}C=mu.prototype=new T,C.constructor=mu;function hu(){}hu.prototype=C,C.m=(function(){return this===X()}),C.D=(function(){return this.m()?0:1}),C.r=(function(){return this.m()?G().A:new Cu(this.C())});function gu(e){this.b1=0,this.dA=0,this.dz=null,this.dz=e,this.b1=0,this.dA=e.ai()}C=gu.prototype=new jl,C.constructor=gu;function _u(){}_u.prototype=C,C.x=(function(){return this.b1<this.dA}),C.k=(function(){var e=this.dz.aj(this.b1);return this.b1=1+this.b1|0,e}),new D().i(gu,`scala.Product$$anon$1`,{cK:1,r:1,s:1,b:1,c:1});function vu(e){this.bF=null,Lc(this,e)}C=vu.prototype=new zc,C.constructor=vu;function yu(){}yu.prototype=C,new D().i(vu,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{cX:1,cW:1,W:1,a:1,a4:1});function bu(e){return fo(e,e.aP()+`(`,`, `,`)`)}function xu(){}C=xu.prototype=new jl,C.constructor=xu;function Su(){}Su.prototype=C,C.x=(function(){return!1}),C.fT=(function(){throw new cu(`next on empty iterator`)}),C.D=(function(){return 0}),C.bs=(function(e,t){return this}),C.k=(function(){this.fT()}),new D().i(xu,`scala.collection.Iterator$$anon$19`,{d2:1,r:1,s:1,b:1,c:1});function Cu(e){this.b3=!1,this.dD=null,this.dD=e,this.b3=!1}C=Cu.prototype=new jl,C.constructor=Cu;function wu(){}wu.prototype=C,C.x=(function(){return!this.b3}),C.k=(function(){return this.b3?G().A.k():(this.b3=!0,this.dD)}),C.bs=(function(e,t){return this.b3||e>0||t===0?G().A:this}),new D().i(Cu,`scala.collection.Iterator$$anon$20`,{d3:1,r:1,s:1,b:1,c:1});function Tu(e){for(;;){if(e.F instanceof Du){var t=e.F;e.F=t.F,e.a6=t.a6,t.P!==null&&(e.O===null&&(e.O=t.O),t.O.b4=e.P,e.P=t.P);continue}return}}function Eu(e){for(;;)if(e.P===null)return e.F=null,e.O=null,!1;else{if(e.F=e.P.fG(),e.O===e.P&&(e.O=e.O.b4),e.P=e.P.b4,Tu(e),e.a6)return!0;if(e.F!==null&&e.F.x())return e.a6=!0,!0}}function Du(e){this.F=null,this.P=null,this.O=null,this.a6=!1,this.F=e,this.P=null,this.O=null,this.a6=!1}C=Du.prototype=new jl,C.constructor=Du;function Ou(){}Ou.prototype=C,C.x=(function(){return this.a6?!0:this.F===null?!1:this.F.x()?(this.a6=!0,!0):Eu(this)}),C.k=(function(){return this.x()?(this.a6=!1,this.F.k()):G().A.k()}),C.f5=(function(e){var t=new mo(e,null);return this.P===null?(this.P=t,this.O=t):(this.O.b4=t,this.O=t),this.F===null&&(this.F=G().A),this}),new D().i(Du,`scala.collection.Iterator$ConcatIterator`,{av:1,r:1,s:1,b:1,c:1});function ku(e){for(;e.a0>0;)e.a7.x()?(e.a7.k(),e.a0=-1+e.a0|0):e.a0=0}function Au(e,t){if(e.K<0)return-1;var n=e.K-t|0;return n<0?0:n}function ju(e,t,n){this.a7=null,this.K=0,this.a0=0,this.a7=e,this.K=n,this.a0=t}C=ju.prototype=new jl,C.constructor=ju;function Mu(){}Mu.prototype=C,C.D=(function(){var e=this.a7.D();if(e<0)return-1;var t=e-this.a0|0,n=t<0?0:t;if(this.K<0)return n;var r=this.K;return r<n?r:n}),C.x=(function(){return ku(this),this.K!==0&&this.a7.x()}),C.k=(function(){return ku(this),this.K>0?(this.K=-1+this.K|0,this.a7.k()):this.K<0?this.a7.k():G().A.k()}),C.bs=(function(e,t){var n=e>0?e:0;if(t<0)var r=Au(this,n);else if(t<=n)var r=0;else if(this.K<0)var r=t-n|0;else var i=Au(this,n),a=t-n|0,r=i<a?i:a;var o=this.a0+n|0;return r===0?G().A:o<0?(this.a0=2147483647,this.K=0,Bc(this,new Xc((()=>new ju(this.a7,-2147483647+o|0,r))))):(this.a0=o,this.K=r,this)}),new D().i(ju,`scala.collection.Iterator$SliceIterator`,{d5:1,r:1,s:1,b:1,c:1});function Nu(e,t){if(t<0)throw tu(new nu,``+t);var n=e.fg(t);if(n.m())throw tu(new nu,``+t);return n.a1()}function Pu(e,t){return yf(t)?Fu(e,e,t):Il(e,t)}function Fu(e,t,n){for(;;)if(t===n)return!0;else if(!t.m()&&!n.m()&&I().M(t.a1(),n.a1())){var r=t.X(),i=n.X();t=r,n=i}else return t.m()&&n.m()}function Iu(e){this.b6=null,this.b6=e}C=Iu.prototype=new jl,C.constructor=Iu;function Lu(){}Lu.prototype=C,C.x=(function(){return!this.b6.m()}),C.k=(function(){var e=this.b6.a1();return this.b6=this.b6.X(),e}),new D().i(Iu,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{da:1,r:1,s:1,b:1,c:1});function Ru(){this.bG=null,Ml(this,qu())}C=Ru.prototype=new Pl,C.constructor=Ru;function zu(){}zu.prototype=C,new D().i(Ru,`scala.collection.mutable.Buffer$`,{dk:1,d7:1,a4:1,W:1,a:1});var Bu;function Vu(){return Bu||=new Ru,Bu}function Hu(e){this.b8=0,this.dI=0,this.dJ=null,this.dJ=e,this.b8=0,this.dI=e.ai()}C=Hu.prototype=new jl,C.constructor=Hu;function Uu(){}Uu.prototype=C,C.x=(function(){return this.b8<this.dI}),C.k=(function(){var e=this.dJ.aj(this.b8);return this.b8=1+this.b8|0,e}),new D().i(Hu,`scala.runtime.ScalaRunTime$$anon$1`,{dL:1,r:1,s:1,b:1,c:1});function Wu(){}C=Wu.prototype=new T,C.constructor=Wu;function Gu(){}Gu.prototype=C,C.cn=(function(e){return this.eh(e)}),C.eh=(function(e){return zs(Bp(new Vp),e).eq()}),C.cp=(function(e){return this.eh(e)}),new D().i(Wu,`scala.scalajs.js.WrappedArray$`,{dO:1,db:1,a4:1,W:1,a:1});var Ku;function qu(){return Ku||=new Wu,Ku}var Ju=class e extends tc{constructor(e,t){super(),this.aD=null,this.aC=0,this.aD=e,this.aC=t,Ds(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aS(){return new gu(this)}u(){var e=-889275714;return e=R().d(e,Y(`TransactionDepthExceeded`)),e=R().d(e,R().B(this.aD)),e=R().d(e,this.aC),R().q(e,2)}l(t){return this===t?!0:t instanceof e&&this.aC===t.aC?this.aD===t.aD:!1}ai(){return 2}ak(){return`TransactionDepthExceeded`}aj(e){if(e===0)return this.aD;if(e===1)return this.aC;throw tu(new nu,``+e)}y(){return`TransactionDepthExceeded: `+this.aD+`; maxDepth: `+this.aC}};new D().i(Ju,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{a6:1,b2:1,u:1,a:1,d:1,U:1});function Yu(e,t){this.bB=null,this.aI=null,this.bU=null,this.cZ=null,this.Z=null,this.cZ=e,this.Z=t,this.bB=X(),ss(this),Wl(this)}C=Yu.prototype=new T,C.constructor=Yu;function Xu(){}Xu.prototype=C,C.aA=(function(e){Hi().cm(e,this,void 0)}),C.bK=(function(){return this.aI}),C.e5=(function(e){this.aI=e}),C.et=(function(e){Gl(this,e)}),C.es=(function(e){Kl(this,e)}),C.y=(function(){return`ReactiveHtmlElement(`+(this.Z===null?`tag=`+this.cZ.bX:this.Z.outerHTML)+`)`}),C.br=(function(){return this.Z}),new D().i(Yu,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{bU:1,a0:1,T:1,aa:1,ab:1,bT:1});function Zu(e,t){return Object.is(e,t)}function Qu(e){return ta().cr(e)}var $u=new D().i(0,`java.lang.Double`,{aj:1,R:1,a:1,P:1,L:1,V:1},(e=>typeof e==`number`)),ed=new D().i(0,`java.lang.Float`,{ce:1,R:1,a:1,P:1,L:1,V:1},(e=>qn(e))),td=new D().i(0,`java.lang.Integer`,{ch:1,R:1,a:1,P:1,L:1,V:1},(e=>Kn(e)));function nd(e,t){return t instanceof N&&e.h===t.h&&e.i===t.i}function rd(e){return e.h^e.i}var id=new D().i(0,`java.lang.Long`,{al:1,R:1,a:1,P:1,L:1,V:1},(e=>e instanceof N));function Y(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function ad(e,t){return e===t}var od=new D().i(0,`java.lang.String`,{co:1,a:1,P:1,a3:1,L:1,V:1},(e=>typeof e==`string`)),sd=class extends nu{constructor(){super(),Ds(this,null,null,!0,!0)}};new D().i(sd,`java.lang.StringIndexOutOfBoundsException`,{cr:1,ak:1,Q:1,K:1,u:1,a:1});function cd(){}C=cd.prototype=new hu,C.constructor=cd;function ld(){}ld.prototype=C,C.fx=(function(){throw new cu(`None.get`)}),C.ak=(function(){return`None`}),C.ai=(function(){return 0}),C.aj=(function(e){return R().bo(e)}),C.aS=(function(){return new Hu(this)}),C.u=(function(){return 2433880}),C.y=(function(){return`None`}),C.C=(function(){this.fx()}),new D().i(cd,`scala.None$`,{cG:1,aq:1,b:1,U:1,d:1,a:1});var ud;function X(){return ud||=new cd,ud}function dd(e){this.b2=null,this.b2=e}C=dd.prototype=new hu,C.constructor=dd;function fd(){}fd.prototype=C,C.C=(function(){return this.b2}),C.ak=(function(){return`Some`}),C.ai=(function(){return 1}),C.aj=(function(e){return e===0?this.b2:R().bo(e)}),C.aS=(function(){return new Hu(this)}),C.u=(function(){return z().ep(this,-889275714,!1)}),C.y=(function(){return L().eO(this)}),C.l=(function(e){return this===e||e instanceof dd&&I().M(this.b2,e.b2)}),new D().i(dd,`scala.Some`,{ar:1,aq:1,b:1,U:1,d:1,a:1});function pd(){}C=pd.prototype=new T,C.constructor=pd;function md(){}md.prototype=C,C.aP=(function(){return this.aT()}),C.bl=(function(e){uo(this,e)}),C.b9=(function(e,t,n,r){return po(this,e,t,n,r)}),C.D=(function(){return-1});function hd(e,t){return e.J=t,e.j=0,e.E=Ka().bm(e.J),e}function gd(){this.J=null,this.j=0,this.E=0}C=gd.prototype=new jl,C.constructor=gd;function _d(){}_d.prototype=C,C.D=(function(){return this.E-this.j|0}),C.x=(function(){return this.j<this.E}),C.k=(function(){this.j>=Ka().bm(this.J)&&G().A.k();var e=L().aO(this.J,this.j);return this.j=1+this.j|0,e}),C.bJ=(function(e){if(e>0){var t=this.j+e|0;if(t<0)var n=this.E;else var r=this.E,n=r<t?r:t;this.j=n}return this}),new D().i(gd,`scala.collection.ArrayOps$ArrayIterator`,{M:1,r:1,s:1,b:1,c:1,a:1});function vd(e,t){return t<0?0:t>e.S?e.S:t}function yd(e){this.dC=null,this.a5=0,this.S=0,this.dC=e,this.a5=0,this.S=e.p()}C=yd.prototype=new jl,C.constructor=yd;function bd(){}bd.prototype=C,C.D=(function(){return this.S}),C.x=(function(){return this.S>0}),C.k=(function(){if(this.S>0){var e=this.dC.t(this.a5);return this.a5=1+this.a5|0,this.S=-1+this.S|0,e}else return G().A.k()}),C.bJ=(function(e){if(e>0){this.a5=this.a5+e|0;var t=this.S-e|0;this.S=t<0?0:t}return this}),C.bs=(function(e,t){var n=vd(this,e),r=vd(this,t)-n|0;return this.S=r<0?0:r,this.a5=this.a5+n|0,this}),new D().i(yd,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{d0:1,r:1,s:1,b:1,c:1,a:1});function xd(e){return e.cf||=(e.cg=new $f(new E(0)),!0),e.cg}function Sd(e){return e.cf?e.cg:xd(e)}function Cd(){this.cg=null,this.eI=null,this.cf=!1,Td=this,this.eI=new vu(this)}C=Cd.prototype=new T,C.constructor=Cd;function wd(){}wd.prototype=C,C.fv=(function(e,t){return e instanceof If?e:this.gx(Ms().ef(e,t))}),C.gx=(function(e){if(e===null)return null;if(e instanceof E)return new $f(e);if(e instanceof rr)return new Yf(e);if(e instanceof or)return new Gf(e);if(e instanceof ir)return new Zf(e);if(e instanceof ar)return new qf(e);if(e instanceof er)return new Uf(e);if(e instanceof tr)return new Vf(e);if(e instanceof nr)return new tp(e);if(e instanceof $n)return new zf(e);if(Ba(e,1))return new rp(e);throw new pu(e)}),C.co=(function(e,t){return this.fv(e,t)}),new D().i(Cd,`scala.collection.immutable.ArraySeq$`,{de:1,ax:1,at:1,as:1,au:1,a:1});var Td;function Ed(){return Td||=new Cd,Td}function Dd(){this.eJ=null,this.dF=null,kd=this,this.eJ=new vu(this),this.dF=new Cp(new E(0))}C=Dd.prototype=new T,C.constructor=Dd;function Od(){}Od.prototype=C,C.fw=(function(e,t){return this.fN(Ms().ef(e,t))}),C.fN=(function(e){if(e===null)return null;if(e instanceof E)return new Cp(e);if(e instanceof rr)return new yp(e);if(e instanceof or)return new hp(e);if(e instanceof ir)return new xp(e);if(e instanceof ar)return new _p(e);if(e instanceof er)return new pp(e);if(e instanceof tr)return new dp(e);if(e instanceof nr)return new Tp(e);if(e instanceof $n)return new lp(e);if(Ba(e,1))return new Dp(e);throw new pu(e)}),C.co=(function(e,t){return this.fw(e,t)}),new D().i(Dd,`scala.collection.mutable.ArraySeq$`,{di:1,ax:1,at:1,as:1,au:1,a:1});var kd;function Ad(){return kd||=new Dd,kd}function jd(){}C=jd.prototype=new Zl,C.constructor=jd;function Md(){}Md.prototype=C;function Nd(e){this.J=null,this.j=0,this.E=0,this.c5=null,this.c5=e,hd(this,e)}C=Nd.prototype=new _d,C.constructor=Nd;function Pd(){}Pd.prototype=C,C.fU=(function(){this.j>=this.c5.a.length&&G().A.k();var e=this.c5.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.fU()}),new D().i(Nd,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{cN:1,M:1,r:1,s:1,b:1,c:1,a:1});function Fd(e){this.J=null,this.j=0,this.E=0,this.c6=null,this.c6=e,hd(this,e)}C=Fd.prototype=new _d,C.constructor=Fd;function Id(){}Id.prototype=C,C.fV=(function(){this.j>=this.c6.a.length&&G().A.k();var e=this.c6.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return Jn(this.fV())}),new D().i(Fd,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{cO:1,M:1,r:1,s:1,b:1,c:1,a:1});function Ld(e){this.J=null,this.j=0,this.E=0,this.c7=null,this.c7=e,hd(this,e)}C=Ld.prototype=new _d,C.constructor=Ld;function Rd(){}Rd.prototype=C,C.fW=(function(){this.j>=this.c7.a.length&&G().A.k();var e=this.c7.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.fW()}),new D().i(Ld,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{cP:1,M:1,r:1,s:1,b:1,c:1,a:1});function zd(e){this.J=null,this.j=0,this.E=0,this.c8=null,this.c8=e,hd(this,e)}C=zd.prototype=new _d,C.constructor=zd;function Bd(){}Bd.prototype=C,C.fX=(function(){this.j>=this.c8.a.length&&G().A.k();var e=this.c8.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.fX()}),new D().i(zd,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{cQ:1,M:1,r:1,s:1,b:1,c:1,a:1});function Vd(e){this.J=null,this.j=0,this.E=0,this.c9=null,this.c9=e,hd(this,e)}C=Vd.prototype=new _d,C.constructor=Vd;function Hd(){}Hd.prototype=C,C.fY=(function(){this.j>=this.c9.a.length&&G().A.k();var e=this.c9.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.fY()}),new D().i(Vd,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{cR:1,M:1,r:1,s:1,b:1,c:1,a:1});function Ud(e){this.J=null,this.j=0,this.E=0,this.ca=null,this.ca=e,hd(this,e)}C=Ud.prototype=new _d,C.constructor=Ud;function Wd(){}Wd.prototype=C,C.fZ=(function(){this.j>=this.ca.a.length&&G().A.k();var e=this.ca.a[this.j],t=e.h,n=e.i;return this.j=1+this.j|0,new N(t,n)}),C.k=(function(){return this.fZ()}),new D().i(Ud,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{cS:1,M:1,r:1,s:1,b:1,c:1,a:1});function Gd(e){this.J=null,this.j=0,this.E=0,this.cb=null,this.cb=e,hd(this,e)}C=Gd.prototype=new _d,C.constructor=Gd;function Kd(){}Kd.prototype=C,C.g0=(function(){this.j>=this.cb.a.length&&G().A.k();var e=this.cb.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.g0()}),new D().i(Gd,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{cT:1,M:1,r:1,s:1,b:1,c:1,a:1});function qd(e){this.J=null,this.j=0,this.E=0,this.dB=null,this.dB=e,hd(this,e)}C=qd.prototype=new _d,C.constructor=qd;function Jd(){}Jd.prototype=C,C.g1=(function(){this.j>=this.dB.a.length&&G().A.k(),this.j=1+this.j|0}),C.k=(function(){this.g1()}),new D().i(qd,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{cU:1,M:1,r:1,s:1,b:1,c:1,a:1});function Yd(e){this.J=null,this.j=0,this.E=0,this.cc=null,this.cc=e,hd(this,e)}C=Yd.prototype=new _d,C.constructor=Yd;function Xd(){}Xd.prototype=C,C.g2=(function(){this.j>=this.cc.a.length&&G().A.k();var e=this.cc.a[this.j];return this.j=1+this.j|0,e}),C.k=(function(){return this.g2()}),new D().i(Yd,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{cV:1,M:1,r:1,s:1,b:1,c:1,a:1});function Zd(e){return e.aP()+`(<not computed>)`}function Qd(){}C=Qd.prototype=new T,C.constructor=Qd;function $d(){}$d.prototype=C;var Z=class e extends Tl{constructor(e){super(),this.T=null,this.T=e,Ds(this,null,null,!0,!0)}bn(){return Fn(this.T)}ak(){return`JavaScriptException`}ai(){return 1}aj(e){return e===0?this.T:R().bo(e)}aS(){return new Hu(this)}u(){return z().ep(this,-889275714,!1)}l(t){return this===t||t instanceof e&&I().M(this.T,t.T)}};new D().i(Z,`scala.scalajs.js.JavaScriptException`,{b1:1,Q:1,K:1,u:1,a:1,U:1,d:1});function ef(e,t){typeof console<`u`&&(e.dq&&console.error?console.error(t):console.log(t))}function tf(e){this.dq=!1,this.aZ=null,this.dq=e,new ru,this.aZ=``}C=tf.prototype=new Md,C.constructor=tf;function nf(){}nf.prototype=C,C.fK=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.aZ=``+this.aZ+t,t=``;else{var r=this.aZ,i=t;ef(this,``+r+i.substring(0,n)),this.aZ=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new D().i(tf,`java.lang.JSConsoleBasedPrintStream`,{ci:1,c9:1,c8:1,af:1,ad:1,ah:1,ae:1,ag:1});function rf(e,t,n){for(;;)if(t<=0||n.m())return n;else{var r=-1+t|0,i=n.X();t=r,n=i}}function af(){this.ch=null}C=af.prototype=new $d,C.constructor=af;function of(){}of.prototype=C,C.y=(function(){return this.ch}),C.l=(function(e){return this===e}),C.u=(function(){return Un(this)});function sf(){}C=sf.prototype=new md,C.constructor=sf;function cf(){}cf.prototype=C,C.y=(function(){return Zd(this)});function lf(){this.ch=null,this.ch=`Any`}C=lf.prototype=new of,C.constructor=lf;function uf(){}uf.prototype=C,C.gd=(function(){return sr.l()}),C.fS=(function(e){return new E(e)}),new D().i(lf,`scala.reflect.ManifestFactory$AnyManifest$`,{dx:1,dz:1,dy:1,dw:1,dv:1,du:1,dA:1,a:1,d:1});var df;function ff(){return df||=new lf,df}function Q(e,t){return e===t?!0:pf(t)&&t.e2(e)?e.cu(t):!1}function pf(e){return!!(e&&e.$classData&&e.$classData.n.f)}function mf(){}C=mf.prototype=new md,C.constructor=mf;function hf(){}hf.prototype=C,C.e2=(function(e){return!0}),C.l=(function(e){return Q(this,e)}),C.u=(function(){return z().ge(this)}),C.y=(function(){return bu(this)}),C.m=(function(){return Fl(this)}),C.cu=(function(e){return Il(this,e)});function gf(){}C=gf.prototype=new cf,C.constructor=gf;function _f(){}_f.prototype=C;function vf(e){return!!(e&&e.$classData&&e.$classData.n.n)}function yf(e){return!!(e&&e.$classData&&e.$classData.n.X)}function bf(e,t){return e.b5=t,e}function xf(){this.b5=null}C=xf.prototype=new _f,C.constructor=xf;function Sf(){}Sf.prototype=C,C.t=(function(e){return this.b5.t(e)}),C.p=(function(){return this.b5.p()}),C.m=(function(){return this.b5.m()});function Cf(){this.cL=null,this.cM=!1,this.ew=null,this.ev=null,this.cN=null,this.cO=!1,bi(this),mi(this),fi(this),pi(this)}C=Cf.prototype=new T,C.constructor=Cf;function wf(){}wf.prototype=C,C.fd=(function(){return this.cM||=(this.cL=new Zo(`disabled`,yi().cQ),!0),this.cL}),C.gp=(function(){return this.cO||=(this.cN=new ul(this),!0),this.cN}),new D().i(Cf,`com.raquo.laminar.api.package$$anon$1`,{bs:1,bD:1,bw:1,bB:1,bA:1,bC:1,by:1,bq:1,bm:1,bp:1,a8:1,a9:1,a7:1,bn:1});function Tf(e){this.b5=null,bf(this,e)}C=Tf.prototype=new Sf,C.constructor=Tf;function Ef(){}Ef.prototype=C,C.r=(function(){return new yd(this)}),C.aT=(function(){return`IndexedSeqView`}),C.aQ=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),C.D=(function(){return this.p()}),new D().i(Tf,`scala.collection.IndexedSeqView$Id`,{cZ:1,d9:1,cL:1,cM:1,h:1,i:1,b:1,k:1,c:1,j:1,dc:1,a:1,d8:1,l:1,cY:1,o:1});function Df(){}C=Df.prototype=new hf,C.constructor=Df;function Of(){}Of.prototype=C;function kf(e,t){return!jf(t)||e.p()===t.p()}function Af(e,t){if(jf(t)){if(e===t)return!0;var n=e.p(),r=n===t.p();if(r){var i=0,a=e.dR(),o=t.dR(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=I().M(e.t(i),t.t(i)),i=1+i|0;if(i<n&&r)for(var p=e.r().bJ(i),m=t.r().bJ(i);r&&p.x();)r=I().M(p.k(),m.k())}return r}else return Il(e,t)}function jf(e){return!!(e&&e.$classData&&e.$classData.n.w)}function Mf(){}C=Mf.prototype=new hf,C.constructor=Mf;function Nf(){}Nf.prototype=C;function Pf(){}C=Pf.prototype=new Nf,C.constructor=Pf;function Ff(){}Ff.prototype=C,C.dP=(function(e){return zs(this,e)});function If(){}C=If.prototype=new Of,C.constructor=If;function Lf(){}Lf.prototype=C,C.e2=(function(e){return kf(this,e)}),C.cu=(function(e){return Af(this,e)}),C.aT=(function(){return`IndexedSeq`}),C.aQ=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),C.D=(function(){return this.p()}),C.aP=(function(){return`ArraySeq`}),C.dR=(function(){return 2147483647});function $(){}C=$.prototype=new Nf,C.constructor=$;function Rf(){}Rf.prototype=C,C.aT=(function(){return`IndexedSeq`}),C.aQ=(function(e){var t=this.p();return t===e?0:t<e?-1:1}),C.D=(function(){return this.p()}),C.aP=(function(){return`ArraySeq`}),C.l=(function(e){return e instanceof $&&Ka().bm(this.U())!==Ka().bm(e.U())?!1:Q(this,e)});function zf(e){this.aq=null,this.aq=e}C=zf.prototype=new Lf,C.constructor=zf;function Bf(){}Bf.prototype=C,C.p=(function(){return this.aq.a.length}),C.u=(function(){var e=z();return e.e1(this.aq,e.z)}),C.l=(function(e){return e instanceof zf?M().ed(this.aq,e.aq):Q(this,e)}),C.r=(function(){return new Yd(this.aq)}),C.bi=(function(e){return this.aq.a[e]}),C.s=(function(e){return this.bi(e|0)}),C.t=(function(e){return this.bi(e)}),new D().i(zf,`scala.collection.immutable.ArraySeq$ofBoolean`,{aA:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Vf(e){this.ar=null,this.ar=e}C=Vf.prototype=new Lf,C.constructor=Vf;function Hf(){}Hf.prototype=C,C.p=(function(){return this.ar.a.length}),C.ba=(function(e){return this.ar.a[e]}),C.u=(function(){var e=z();return e.dT(this.ar,e.z)}),C.l=(function(e){return e instanceof Vf?M().e6(this.ar,e.ar):Q(this,e)}),C.r=(function(){return new Nd(this.ar)}),C.s=(function(e){return this.ba(e|0)}),C.t=(function(e){return this.ba(e)}),new D().i(Vf,`scala.collection.immutable.ArraySeq$ofByte`,{aB:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Uf(e){this.a8=null,this.a8=e}C=Uf.prototype=new Lf,C.constructor=Uf;function Wf(){}Wf.prototype=C,C.p=(function(){return this.a8.a.length}),C.bb=(function(e){return this.a8.a[e]}),C.u=(function(){var e=z();return e.dU(this.a8,e.z)}),C.l=(function(e){return e instanceof Uf?M().e7(this.a8,e.a8):Q(this,e)}),C.r=(function(){return new Fd(this.a8)}),C.b9=(function(e,t,n,r){return new pp(this.a8).b9(e,t,n,r)}),C.s=(function(e){return Jn(this.bb(e|0))}),C.t=(function(e){return Jn(this.bb(e))}),new D().i(Uf,`scala.collection.immutable.ArraySeq$ofChar`,{aC:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Gf(e){this.as=null,this.as=e}C=Gf.prototype=new Lf,C.constructor=Gf;function Kf(){}Kf.prototype=C,C.p=(function(){return this.as.a.length}),C.u=(function(){var e=z();return e.dV(this.as,e.z)}),C.l=(function(e){return e instanceof Gf?M().e8(this.as,e.as):Q(this,e)}),C.r=(function(){return new Ld(this.as)}),C.bd=(function(e){return this.as.a[e]}),C.s=(function(e){return this.bd(e|0)}),C.t=(function(e){return this.bd(e)}),new D().i(Gf,`scala.collection.immutable.ArraySeq$ofDouble`,{aD:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function qf(e){this.at=null,this.at=e}C=qf.prototype=new Lf,C.constructor=qf;function Jf(){}Jf.prototype=C,C.p=(function(){return this.at.a.length}),C.u=(function(){var e=z();return e.dW(this.at,e.z)}),C.l=(function(e){return e instanceof qf?M().e9(this.at,e.at):Q(this,e)}),C.r=(function(){return new zd(this.at)}),C.be=(function(e){return this.at.a[e]}),C.s=(function(e){return this.be(e|0)}),C.t=(function(e){return this.be(e)}),new D().i(qf,`scala.collection.immutable.ArraySeq$ofFloat`,{aE:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Yf(e){this.au=null,this.au=e}C=Yf.prototype=new Lf,C.constructor=Yf;function Xf(){}Xf.prototype=C,C.p=(function(){return this.au.a.length}),C.u=(function(){var e=z();return e.dX(this.au,e.z)}),C.l=(function(e){return e instanceof Yf?M().ea(this.au,e.au):Q(this,e)}),C.r=(function(){return new Vd(this.au)}),C.bf=(function(e){return this.au.a[e]}),C.s=(function(e){return this.bf(e|0)}),C.t=(function(e){return this.bf(e)}),new D().i(Yf,`scala.collection.immutable.ArraySeq$ofInt`,{aF:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function Zf(e){this.av=null,this.av=e}C=Zf.prototype=new Lf,C.constructor=Zf;function Qf(){}Qf.prototype=C,C.p=(function(){return this.av.a.length}),C.u=(function(){var e=z();return e.dY(this.av,e.z)}),C.l=(function(e){return e instanceof Zf?M().eb(this.av,e.av):Q(this,e)}),C.r=(function(){return new Ud(this.av)}),C.bg=(function(e){return this.av.a[e]}),C.s=(function(e){return this.bg(e|0)}),C.t=(function(e){return this.bg(e)}),new D().i(Zf,`scala.collection.immutable.ArraySeq$ofLong`,{aG:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function $f(e){this.aw=null,this.aw=e}C=$f.prototype=new Lf,C.constructor=$f;function ep(){}ep.prototype=C,C.p=(function(){return this.aw.a.length}),C.t=(function(e){return this.aw.a[e]}),C.u=(function(){var e=z();return e.dS(this.aw,e.z)}),C.l=(function(e){return e instanceof $f?Ms().ee(this.aw,e.aw):Q(this,e)}),C.r=(function(){return hd(new gd,this.aw)}),C.s=(function(e){return this.t(e|0)}),new D().i($f,`scala.collection.immutable.ArraySeq$ofRef`,{aH:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function tp(e){this.ax=null,this.ax=e}C=tp.prototype=new Lf,C.constructor=tp;function np(){}np.prototype=C,C.p=(function(){return this.ax.a.length}),C.bc=(function(e){return this.ax.a[e]}),C.u=(function(){var e=z();return e.dZ(this.ax,e.z)}),C.l=(function(e){return e instanceof tp?M().ec(this.ax,e.ax):Q(this,e)}),C.r=(function(){return new Gd(this.ax)}),C.s=(function(e){return this.bc(e|0)}),C.t=(function(e){return this.bc(e)}),new D().i(tp,`scala.collection.immutable.ArraySeq$ofShort`,{aI:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function rp(e){this.aN=null,this.aN=e}C=rp.prototype=new Lf,C.constructor=rp;function ip(){}ip.prototype=C,C.p=(function(){return this.aN.a.length}),C.u=(function(){var e=z();return e.e0(this.aN,e.z)}),C.l=(function(e){return e instanceof rp?this.aN.a.length===e.aN.a.length:Q(this,e)}),C.r=(function(){return new qd(this.aN)}),C.bh=(function(e){}),C.s=(function(e){this.bh(e|0)}),C.t=(function(e){this.bh(e)}),new D().i(rp,`scala.collection.immutable.ArraySeq$ofUnit`,{aJ:1,I:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,O:1,A:1,q:1,p:1,N:1,a:1});function ap(e,t,n,r){for(;;)if(t===r)return n.m()?0:1;else if(n.m())return-1;else{var i=1+t|0,a=n.X();t=i,n=a}}function op(e,t,n){for(;;)if(t===n)return!0;else{var r=t.m(),i=n.m();if(!(r||i)&&I().M(t.a1(),n.a1())){var a=t.X(),o=n.X();t=a,n=o}else return r&&i}}function sp(){}C=sp.prototype=new Of,C.constructor=sp;function cp(){}cp.prototype=C,C.r=(function(){return new Iu(this)}),C.aT=(function(){return`LinearSeq`}),C.t=(function(e){return Nu(this,e)}),C.cu=(function(e){return Pu(this,e)}),C.m=(function(){return this===Pp()}),C.bl=(function(e){for(var t=this;!t.m();)e.s(t.a1()),t=t.X()}),C.p=(function(){for(var e=this,t=0;!e.m();)t=1+t|0,e=e.X();return t}),C.aQ=(function(e){return e<0?1:ap(this,0,this,e)}),C.aP=(function(){return`List`}),C.l=(function(e){return e instanceof sp?op(this,this,e):Q(this,e)}),C.s=(function(e){return Nu(this,e|0)}),C.fg=(function(e){return rf(this,e,this)});function lp(e){this.a9=null,this.a9=e}C=lp.prototype=new Rf,C.constructor=lp;function up(){}up.prototype=C,C.p=(function(){return this.a9.a.length}),C.u=(function(){var e=z();return e.e1(this.a9,e.z)}),C.l=(function(e){return e instanceof lp?M().ed(this.a9,e.a9):$.prototype.l.call(this,e)}),C.r=(function(){return new Yd(this.a9)}),C.bi=(function(e){return this.a9.a[e]}),C.s=(function(e){return this.bi(e|0)}),C.t=(function(e){return this.bi(e)}),C.U=(function(){return this.a9}),new D().i(lp,`scala.collection.mutable.ArraySeq$ofBoolean`,{aM:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function dp(e){this.aa=null,this.aa=e}C=dp.prototype=new Rf,C.constructor=dp;function fp(){}fp.prototype=C,C.p=(function(){return this.aa.a.length}),C.ba=(function(e){return this.aa.a[e]}),C.u=(function(){var e=z();return e.dT(this.aa,e.z)}),C.l=(function(e){return e instanceof dp?M().e6(this.aa,e.aa):$.prototype.l.call(this,e)}),C.r=(function(){return new Nd(this.aa)}),C.s=(function(e){return this.ba(e|0)}),C.t=(function(e){return this.ba(e)}),C.U=(function(){return this.aa}),new D().i(dp,`scala.collection.mutable.ArraySeq$ofByte`,{aN:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function pp(e){this.Q=null,this.Q=e}C=pp.prototype=new Rf,C.constructor=pp;function mp(){}mp.prototype=C,C.p=(function(){return this.Q.a.length}),C.bb=(function(e){return this.Q.a[e]}),C.u=(function(){var e=z();return e.dU(this.Q,e.z)}),C.l=(function(e){return e instanceof pp?M().e7(this.Q,e.Q):$.prototype.l.call(this,e)}),C.r=(function(){return new Fd(this.Q)}),C.b9=(function(e,t,n,r){var i=e.L;t.length!==0&&(i.v=``+i.v+t);var a=this.Q.a.length;if(a!==0)if(n===``)i.eU(this.Q);else{i.p();var o=this.Q.a[0],s=``+zn(o);i.v+=s;for(var c=1;c<a;){i.v=``+i.v+n;var l=this.Q.a[c],u=``+zn(l);i.v+=u,c=1+c|0}}return r.length!==0&&(i.v=``+i.v+r),e}),C.s=(function(e){return Jn(this.bb(e|0))}),C.t=(function(e){return Jn(this.bb(e))}),C.U=(function(){return this.Q}),new D().i(pp,`scala.collection.mutable.ArraySeq$ofChar`,{aO:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function hp(e){this.ab=null,this.ab=e}C=hp.prototype=new Rf,C.constructor=hp;function gp(){}gp.prototype=C,C.p=(function(){return this.ab.a.length}),C.u=(function(){var e=z();return e.dV(this.ab,e.z)}),C.l=(function(e){return e instanceof hp?M().e8(this.ab,e.ab):$.prototype.l.call(this,e)}),C.r=(function(){return new Ld(this.ab)}),C.bd=(function(e){return this.ab.a[e]}),C.s=(function(e){return this.bd(e|0)}),C.t=(function(e){return this.bd(e)}),C.U=(function(){return this.ab}),new D().i(hp,`scala.collection.mutable.ArraySeq$ofDouble`,{aP:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function _p(e){this.ac=null,this.ac=e}C=_p.prototype=new Rf,C.constructor=_p;function vp(){}vp.prototype=C,C.p=(function(){return this.ac.a.length}),C.u=(function(){var e=z();return e.dW(this.ac,e.z)}),C.l=(function(e){return e instanceof _p?M().e9(this.ac,e.ac):$.prototype.l.call(this,e)}),C.r=(function(){return new zd(this.ac)}),C.be=(function(e){return this.ac.a[e]}),C.s=(function(e){return this.be(e|0)}),C.t=(function(e){return this.be(e)}),C.U=(function(){return this.ac}),new D().i(_p,`scala.collection.mutable.ArraySeq$ofFloat`,{aQ:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function yp(e){this.ad=null,this.ad=e}C=yp.prototype=new Rf,C.constructor=yp;function bp(){}bp.prototype=C,C.p=(function(){return this.ad.a.length}),C.u=(function(){var e=z();return e.dX(this.ad,e.z)}),C.l=(function(e){return e instanceof yp?M().ea(this.ad,e.ad):$.prototype.l.call(this,e)}),C.r=(function(){return new Vd(this.ad)}),C.bf=(function(e){return this.ad.a[e]}),C.s=(function(e){return this.bf(e|0)}),C.t=(function(e){return this.bf(e)}),C.U=(function(){return this.ad}),new D().i(yp,`scala.collection.mutable.ArraySeq$ofInt`,{aR:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function xp(e){this.ae=null,this.ae=e}C=xp.prototype=new Rf,C.constructor=xp;function Sp(){}Sp.prototype=C,C.p=(function(){return this.ae.a.length}),C.u=(function(){var e=z();return e.dY(this.ae,e.z)}),C.l=(function(e){return e instanceof xp?M().eb(this.ae,e.ae):$.prototype.l.call(this,e)}),C.r=(function(){return new Ud(this.ae)}),C.bg=(function(e){return this.ae.a[e]}),C.s=(function(e){return this.bg(e|0)}),C.t=(function(e){return this.bg(e)}),C.U=(function(){return this.ae}),new D().i(xp,`scala.collection.mutable.ArraySeq$ofLong`,{aS:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Cp(e){this.af=null,this.af=e}C=Cp.prototype=new Rf,C.constructor=Cp;function wp(){}wp.prototype=C,C.p=(function(){return this.af.a.length}),C.t=(function(e){return this.af.a[e]}),C.u=(function(){var e=z();return e.dS(this.af,e.z)}),C.l=(function(e){return e instanceof Cp?Ms().ee(this.af,e.af):$.prototype.l.call(this,e)}),C.r=(function(){return hd(new gd,this.af)}),C.s=(function(e){return this.t(e|0)}),C.U=(function(){return this.af}),new D().i(Cp,`scala.collection.mutable.ArraySeq$ofRef`,{aT:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Tp(e){this.ag=null,this.ag=e}C=Tp.prototype=new Rf,C.constructor=Tp;function Ep(){}Ep.prototype=C,C.p=(function(){return this.ag.a.length}),C.bc=(function(e){return this.ag.a[e]}),C.u=(function(){var e=z();return e.dZ(this.ag,e.z)}),C.l=(function(e){return e instanceof Tp?M().ec(this.ag,e.ag):$.prototype.l.call(this,e)}),C.r=(function(){return new Gd(this.ag)}),C.s=(function(e){return this.bc(e|0)}),C.t=(function(e){return this.bc(e)}),C.U=(function(){return this.ag}),new D().i(Tp,`scala.collection.mutable.ArraySeq$ofShort`,{aU:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Dp(e){this.ay=null,this.ay=e}C=Dp.prototype=new Rf,C.constructor=Dp;function Op(){}Op.prototype=C,C.p=(function(){return this.ay.a.length}),C.u=(function(){var e=z();return e.e0(this.ay,e.z)}),C.l=(function(e){return e instanceof Dp?this.ay.a.length===e.ay.a.length:$.prototype.l.call(this,e)}),C.r=(function(){return new qd(this.ay)}),C.bh=(function(e){}),C.s=(function(e){this.bh(e|0)}),C.t=(function(e){this.bh(e)}),C.U=(function(){return this.ay}),new D().i(Dp,`scala.collection.mutable.ArraySeq$ofUnit`,{aV:1,J:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function kp(e,t){this.cd=null,this.ce=null,this.cd=e,this.ce=t}C=kp.prototype=new cp,C.constructor=kp;function Ap(){}Ap.prototype=C,C.a1=(function(){return this.cd}),C.ak=(function(){return`::`}),C.ai=(function(){return 2}),C.aj=(function(e){switch(e){case 0:return this.cd;case 1:return this.ce;default:return R().bo(e)}}),C.aS=(function(){return new Hu(this)}),C.X=(function(){return this.ce}),new D().i(kp,`scala.collection.immutable.$colon$colon`,{dd:1,a5:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aK:1,X:1,aw:1,aL:1,ay:1,q:1,p:1,A:1,az:1,a:1,U:1});function jp(){}C=jp.prototype=new cp,C.constructor=jp;function Mp(){}Mp.prototype=C,C.fF=(function(){throw new cu(`head of empty list`)}),C.gs=(function(){throw new su(`tail of empty list`)}),C.D=(function(){return 0}),C.r=(function(){return G().A}),C.ak=(function(){return`Nil`}),C.ai=(function(){return 0}),C.aj=(function(e){return R().bo(e)}),C.aS=(function(){return new Hu(this)}),C.X=(function(){this.gs()}),C.a1=(function(){this.fF()}),new D().i(jp,`scala.collection.immutable.Nil$`,{dg:1,a5:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aK:1,X:1,aw:1,aL:1,ay:1,q:1,p:1,A:1,az:1,a:1,U:1});var Np;function Pp(){return Np||=new jp,Np}function Fp(e,t){return e.L=t,e}function Ip(e){return Fp(e,new El),e}function Lp(){this.L=null}C=Lp.prototype=new Nf,C.constructor=Lp;function Rp(){}Rp.prototype=C,C.aT=(function(){return`IndexedSeq`}),C.r=(function(){return new yd(new Tf(this))}),C.aQ=(function(e){var t=this.L.p();return t===e?0:t<e?-1:1}),C.dP=(function(e){return zs(this,e)}),C.p=(function(){return this.L.p()}),C.D=(function(){return this.L.p()}),C.eR=(function(e){var t=this.L,n=``+zn(e);return t.v+=n,this}),C.y=(function(){return this.L.v}),C.m=(function(){return this.L.p()===0}),C.eq=(function(){return this.L.v}),C.cl=(function(e){return this.eR(Yn(e))}),C.s=(function(e){var t=e|0;return Jn(this.L.e3(t))}),C.t=(function(e){return Jn(this.L.e3(e))}),new D().i(Lp,`scala.collection.mutable.StringBuilder`,{dp:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dm:1,aW:1,aY:1,aX:1,D:1,n:1,o:1,E:1,a3:1,a:1});function zp(e,t){return e.az=t,e}function Bp(e){return zp(e,[]),e}function Vp(){this.az=null}C=Vp.prototype=new Ff,C.constructor=Vp;function Hp(){}Hp.prototype=C,C.aT=(function(){return`IndexedSeq`}),C.r=(function(){return new yd(new Tf(this))}),C.aQ=(function(e){var t=this.az.length|0;return t===e?0:t<e?-1:1}),C.t=(function(e){return this.az[e]}),C.p=(function(){return this.az.length|0}),C.D=(function(){return this.az.length|0}),C.aP=(function(){return`WrappedArray`}),C.eq=(function(){return this}),C.cl=(function(e){return this.az.push(e),this}),C.s=(function(e){var t=e|0;return this.az[t]}),new D().i(Vp,`scala.scalajs.js.WrappedArray`,{dN:1,dh:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dj:1,aY:1,aX:1,dn:1,q:1,p:1,D:1,n:1,o:1,E:1,dl:1,aW:1,a:1}),An=new N(0,0),ur.z=An,Zi(new(od.r()).C([]));