var e=Object.defineProperty,t=t=>{let n={};for(var r in t)e(n,r,{get:t[r],enumerable:!0});return n},n=()=>({checkValidity(e){let t=e.input,n={message:``,isValid:!0,invalidKeys:[]};if(!t)return n;let r=!0;if(`checkValidity`in t&&(r=t.checkValidity()),r)return n;if(n.isValid=!1,`validationMessage`in t&&(n.message=t.validationMessage),!(`validity`in t))return n.invalidKeys.push(`customError`),n;for(let e in t.validity){if(e===`valid`)continue;let r=e;t.validity[r]&&n.invalidKeys.push(r)}return n}}),r=class extends Event{constructor(){super(`wa-invalid`,{bubbles:!0,cancelable:!1,composed:!0})}},i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=e=>{throw TypeError(e)},s=(e,t,n,r)=>{for(var o=r>1?void 0:r?a(t,n):t,s=e.length-1,c;s>=0;s--)(c=e[s])&&(o=(r?c(t,n,o):c(o))||o);return r&&o&&i(t,n,o),o},c=(e,t,n)=>t.has(e)||o(`Cannot `+n),l=(e,t,n)=>(c(e,t,`read from private field`),n?n.call(e):t.get(e)),u=(e,t,n)=>t.has(e)?o(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),d=(e,t,n,r)=>(c(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n);
/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const f=globalThis,p=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ee=Symbol(),te=new WeakMap;var ne=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(p&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&te.set(t,e))}return e}toString(){return this.cssText}};const re=e=>new ne(typeof e==`string`?e:e+``,void 0,ee),ie=(e,...t)=>new ne(e.length===1?e[0]:t.reduce(((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1]),e[0]),e,ee),ae=(e,t)=>{if(p)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(let n of t){let t=document.createElement(`style`),r=f.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},oe=p?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return re(t)})(e):e,{is:se,defineProperty:ce,getOwnPropertyDescriptor:le,getOwnPropertyNames:ue,getOwnPropertySymbols:de,getPrototypeOf:fe}=Object,pe=globalThis,me=pe.trustedTypes,he=me?me.emptyScript:``,ge=pe.reactiveElementPolyfillSupport,_e=(e,t)=>e,ve={toAttribute(e,t){switch(t){case Boolean:e=e?he:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ye=(e,t)=>!se(e,t),be={attribute:!0,type:String,converter:ve,reflect:!1,useDefault:!1,hasChanged:ye};Symbol.metadata??=Symbol(`metadata`),pe.litPropertyMetadata??=new WeakMap;var xe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&ce(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=le(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(_e(`elementProperties`)))return;let e=fe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(_e(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_e(`properties`))){let e=this.properties,t=[...ue(e),...de(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(oe(e))}else e!==void 0&&t.push(oe(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ae(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ve:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ve:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let r=this.constructor,i=this[e];if(n??=r.getPropertyOptions(e),!((n.hasChanged??ye)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};xe.elementStyles=[],xe.shadowRootOptions={mode:`open`},xe[_e(`elementProperties`)]=new Map,xe[_e(`finalized`)]=new Map,ge?.({ReactiveElement:xe}),(pe.reactiveElementVersions??=[]).push(`2.1.1`);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Se=globalThis,Ce=Se.trustedTypes,we=Ce?Ce.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Te=`$lit$`,Ee=`lit$${Math.random().toFixed(9).slice(2)}$`,De=`?`+Ee,Oe=`<${De}>`,ke=document,Ae=()=>ke.createComment(``),je=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Me=Array.isArray,Ne=e=>Me(e)||typeof e?.[Symbol.iterator]==`function`,Pe=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ie=/-->/g,Le=/>/g,Re=RegExp(`>|${Pe}(?:([^\\s"'>=/]+)(${Pe}*=${Pe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ze=/'/g,Be=/"/g,Ve=/^(?:script|style|textarea|title)$/i,He=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),Ue=Symbol.for(`lit-noChange`),m=Symbol.for(`lit-nothing`),We=new WeakMap,Ge=ke.createTreeWalker(ke,129);function Ke(e,t){if(!Me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return we===void 0?t:we.createHTML(t)}const qe=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Fe;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Fe?c[1]===`!--`?o=Ie:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=Re):(Ve.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=Re):o=Le:o===Re?c[0]===`>`?(o=i??Fe,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?Re:c[3]===`"`?Be:ze):o===Be||o===ze?o=Re:o===Ie||o===Le?o=Fe:(o=Re,i=void 0);let d=o===Re&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Fe?n+Oe:l>=0?(r.push(s),n.slice(0,l)+Te+n.slice(l)+Ee+d):n+Ee+(l===-2?t:d)}return[Ke(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]};var Je=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=qe(t,n);if(this.el=e.createElement(l,r),Ge.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=Ge.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Te)){let t=u[o++],n=i.getAttribute(e).split(Ee),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?$e:r[1]===`?`?et:r[1]===`@`?tt:Qe}),i.removeAttribute(e)}else e.startsWith(Ee)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Ve.test(i.tagName)){let e=i.textContent.split(Ee),t=e.length-1;if(t>0){i.textContent=Ce?Ce.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ae()),Ge.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ae())}}}else if(i.nodeType===8)if(i.data===De)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(Ee,e+1))!==-1;)c.push({type:7,index:a}),e+=Ee.length-1}a++}}static createElement(e,t){let n=ke.createElement(`template`);return n.innerHTML=e,n}};function Ye(e,t,n=e,r){if(t===Ue)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=je(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=Ye(e,i._$AS(e,t.values),i,r)),t}var Xe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??ke).importNode(t,!0);Ge.currentNode=r;let i=Ge.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Ze(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new nt(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=Ge.nextNode(),a++)}return Ge.currentNode=ke,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Ze=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),je(e)?e===m||e==null||e===``?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ne(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==m&&je(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Je.createElement(Ke(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Xe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=We.get(e.strings);return t===void 0&&We.set(e.strings,t=new Je(e)),t}k(t){Me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ae()),this.O(Ae()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Qe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=m}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Ye(this,e,t,0),a=!je(e)||e!==this._$AH&&e!==Ue,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=Ye(this,r[n+o],t,o),s===Ue&&(s=this._$AH[o]),a||=!je(s)||s!==this._$AH[o],s===m?e=m:e!==m&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},$e=class extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}},et=class extends Qe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==m)}},tt=class extends Qe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Ye(this,e,t,0)??m)===Ue)return;let n=this._$AH,r=e===m&&n!==m||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==m&&(n===m||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},nt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}};const rt={M:Te,P:Ee,A:De,C:1,L:qe,R:Xe,D:Ne,V:Ye,I:Ze,H:Qe,N:et,U:tt,B:$e,F:nt},it=Se.litHtmlPolyfillSupport;it?.(Je,Ze),(Se.litHtmlVersions??=[]).push(`3.3.1`);const at=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Ze(t.insertBefore(Ae(),e),e,void 0,n??{})}return i._$AI(e),i},ot=globalThis;var st=class extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=at(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ue}};st._$litElement$=!0,st.finalized=!0,ot.litElementHydrateSupport?.({LitElement:st});const ct=ot.litElementPolyfillSupport;ct?.({LitElement:st}),(ot.litElementVersions??=[]).push(`4.2.1`);
/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const lt=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer((()=>{customElements.define(e,t)}))},ut={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:ye},dt=(e=ut,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function h(e){return(t,n)=>typeof n==`object`?dt(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function ft(e){return h({...e,state:!0,attribute:!1})}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const pt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function mt(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return pt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return pt(n,r,{get(){return a(this)}})}}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ht=ie`
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
`,gt=/;\s+$/;function _t(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function vt(e){let{property:t,value:n,element:r}=e;if(n){let e=r.getAttribute(`style`)||``;e&&(e.match(gt)||(e+=`;`),e+=` `);let i=`${t}: ${n}`;return e.includes(i)?void 0:`${e}${i};`}return null}var yt,bt=class extends st{constructor(){super(),u(this,yt,!1),this.initialReflectedProperties=new Map,this.didSSR=!!this.shadowRoot,this.customStates={set:(e,t)=>{if(this.internals?.states)try{t?this.internals.states.add(e):this.internals.states.delete(e)}catch(e){if(String(e).includes(`must start with '--'`))console.error(`Your browser implements an outdated version of CustomStateSet. Consider using a polyfill`);else throw e}},has:e=>{if(!this.internals?.states)return!1;try{return this.internals.states.has(e)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error(`Element internals are not supported in your browser. Consider using a polyfill`)}this.customStates.set(`wa-defined`,!0);let e=this.constructor;for(let[t,n]of e.elementProperties)n.default===`inherit`&&n.initial!==void 0&&typeof t==`string`&&this.customStates.set(`initial-${t}-${n.initial}`,!0)}static get styles(){return[ht,...Array.isArray(this.css)?this.css:this.css?[this.css]:[]]}connectedCallback(){super.connectedCallback(),this.didSSR||this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `)),this.didSSR&&this.updateComplete.then(()=>{this.shadowRoot?.prepend(document.createComment(` Web Awesome: https://webawesome.com/docs/components/${this.localName.replace(`wa-`,``)} `))})}attributeChangedCallback(e,t,n){l(this,yt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),d(this,yt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}firstUpdated(e){super.firstUpdated(e),this.didSSR&&this.shadowRoot?.querySelectorAll(`slot`).forEach(e=>{e.dispatchEvent(new Event(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))})}update(e){try{super.update(e)}catch(e){if(this.didSSR&&!this.hasUpdated){let t=new Event(`lit-hydration-error`,{bubbles:!0,composed:!0,cancelable:!1});t.error=e,this.dispatchEvent(t)}throw e}}setStyle(e,t){if(!this.style){let n=vt({property:_t(e),value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style[e]=t}setStyleProperty(e,t){if(!this.style){let n=vt({property:e,value:t,element:this});n&&this.setAttribute(`style`,n);return}this.style.setProperty(e,t)}relayNativeEvent(e,t){e.stopImmediatePropagation(),this.dispatchEvent(new e.constructor(e.type,{...e,...t}))}};yt=new WeakMap,s([h()],bt.prototype,`dir`,2),s([h()],bt.prototype,`lang`,2),s([h({type:Boolean,reflect:!0,attribute:`did-ssr`})],bt.prototype,`didSSR`,2);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var xt=()=>({observedAttributes:[`custom-error`],checkValidity(e){let t={message:``,isValid:!0,invalidKeys:[]};return e.customError&&(t.message=e.customError,t.isValid=!1,t.invalidKeys=[`customError`]),t}}),St=class extends bt{constructor(){super(),this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=[`input`],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=e=>{e.target===this&&(this.hasInteracted=!0,this.dispatchEvent(new r))},this.handleInteraction=e=>{let t=this.emittedEvents;t.includes(e.type)||t.push(e.type),t.length===this.assumeInteractionOn?.length&&(this.hasInteracted=!0)},`addEventListener`in this&&this.addEventListener(`invalid`,this.emitInvalid)}static get validators(){return[xt()]}static get observedAttributes(){let e=new Set(super.observedAttributes||[]);for(let t of this.validators)if(t.observedAttributes)for(let n of t.observedAttributes)e.add(n);return[...e]}connectedCallback(){super.connectedCallback(),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.updateValidity()}):this.updateValidity(),this.assumeInteractionOn.forEach(e=>{this.addEventListener?.(e,this.handleInteraction)})}firstUpdated(...e){super.firstUpdated(...e),this.updateValidity()}willUpdate(e){if(e.has(`customError`)&&(this.customError||=null,this.setCustomValidity(this.customError||``)),e.has(`value`)||e.has(`disabled`)||e.has(`defaultValue`)){let e=this.value;this.updateFormValue(e)}e.has(`disabled`)&&(this.customStates.set(`disabled`,this.disabled),(this.hasAttribute(`disabled`)||!this.matches(`:disabled`))&&this.toggleAttribute(`disabled`,this.disabled)),super.willUpdate(e),this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>this.updateValidity()):this.updateValidity()}updateFormValue(e){if(Array.isArray(e)){if(this.name){let t=new FormData;for(let n of e)t.append(this.name,n);this.setValue(t,t)}}else this.setValue(e,e)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(e){e?this.setAttribute(`form`,e):this.removeAttribute(`form`)}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...e){let t=e[0],n=e[1],r=e[2];r||=this.validationTarget,this.internals.setValidity(t,n,r||void 0),this.requestUpdate(`validity`),this.setCustomStates()}setCustomStates(){let e=!!this.required,t=this.internals.validity.valid,n=this.hasInteracted;this.customStates.set(`required`,e),this.customStates.set(`optional`,!e),this.customStates.set(`invalid`,!t),this.customStates.set(`valid`,t),this.customStates.set(`user-invalid`,!t&&n),this.customStates.set(`user-valid`,t&&n)}setCustomValidity(e){if(!e){this.customError=null,this.setValidity({});return}this.customError=e,this.setValidity({customError:!0},e,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(e){this.disabled=e,this.updateValidity()}formStateRestoreCallback(e,t){this.didSSR&&!this.hasUpdated?this.updateComplete.then(()=>{this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity()}):(this.value=e,t===`restore`&&this.resetValidity(),this.updateValidity())}setValue(...e){let[t,n]=e;this.internals.setFormValue(t,n)}get allValidators(){let e=this.constructor.validators||[],t=this.validators||[];return[...e,...t]}resetValidity(){this.setCustomValidity(``),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute(`disabled`)||!this.willValidate){this.resetValidity();return}let e=this.allValidators;if(!e?.length)return;let t={customError:!!this.customError},n=this.validationTarget||this.input||void 0,r=``;for(let n of e){let{isValid:e,message:i,invalidKeys:a}=n.checkValidity(this);e||(r||=i,a?.length>=0&&a.forEach(e=>t[e]=!0))}r||=this.validationMessage,this.setValidity(t,r,n)}};St.formAssociated=!0,s([h({reflect:!0})],St.prototype,`name`,2),s([h({type:Boolean})],St.prototype,`disabled`,2),s([h({state:!0,attribute:!1})],St.prototype,`valueHasChanged`,2),s([h({state:!0,attribute:!1})],St.prototype,`hasInteracted`,2),s([h({attribute:`custom-error`,reflect:!0})],St.prototype,`customError`,2),s([h({attribute:!1,state:!0,type:Object})],St.prototype,`validity`,1);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Ct={small:`s`,medium:`m`,large:`l`},wt=new Set;function Tt(e,t){t in Ct&&!wt.has(`${e}:${t}`)&&(wt.add(`${e}:${t}`),console.warn(`[${e}] size="${t}" is deprecated. Use size="${Ct[t]}" instead. The long-form value will be removed in the next major version.`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Et=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return this.host.childNodes?[...this.host.childNodes].some(e=>{if(e.nodeType===Node.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===Node.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`wa-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1}):!1}hasNamedSlot(e){return this.host.querySelector?.(`:scope > [slot="${e}"]`)!==null}test(e,t){return t&&this.host.didSSR&&!this.host.hasUpdated?!!this.host[t]:e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){let e=this.host.shadowRoot;e&&`addEventListener`in e&&e.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){let e=this.host.shadowRoot;e&&`removeEventListener`in e&&e.removeEventListener(`slotchange`,this.handleSlotChange)}},Dt=ie`
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
`,Ot=ie`
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
`,kt=ie`
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
function At(e,t){let n={waitUntilFirstUpdate:!1,...t};return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}const jt=new Set,Mt=new Map;let Nt,Pt=`ltr`,Ft=`en`;const It=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(It){let e=new MutationObserver(Rt);Pt=document.documentElement.dir||`ltr`,Ft=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function Lt(...e){e.map(e=>{let t=e.$code.toLowerCase();Mt.has(t)?Mt.set(t,Object.assign(Object.assign({},Mt.get(t)),e)):Mt.set(t,e),Nt||=e}),Rt()}function Rt(){It&&(Pt=document.documentElement.dir||`ltr`,Ft=document.documentElement.lang||navigator.language),[...jt.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var zt=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){jt.add(this.host)}hostDisconnected(){jt.delete(this.host)}dir(){return`${this.host.dir||Pt}`.toLowerCase()}lang(){let e=`${this.host.lang||Ft}`.toLowerCase().replace(/_/g,`-`);try{return new Intl.Locale(e),e}catch{return Nt?Nt.$code.toLowerCase():`en`}}getTranslationData(e){let t;try{t=new Intl.Locale(e.replace(/_/g,`-`))}catch{return{locale:void 0,language:``,region:``,primary:void 0,secondary:void 0}}let n=t.language.toLowerCase(),r=t.region?.toLowerCase()??``,i=Mt.get(`${n}-${r}`),a=Mt.get(n);return{locale:t,language:n,region:r,primary:i,secondary:a}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&Nt&&Nt[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(Nt&&Nt[e])i=Nt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},Bt={$code:`en`,$name:`English`,$dir:`ltr`,allTagsRemoved:`All tags removed`,am:`AM`,autosizeColumn:`Autosize column`,captions:`Captions`,carousel:`Carousel`,chooseDate:`Choose date`,chooseDecade:`Choose decade`,chooseMonth:`Choose month`,chooseTime:`Choose time`,chooseYear:`Choose year`,clearEntry:`Clear entry`,clearFilter:`Clear filter`,clearSort:`Clear sort`,close:`Close`,closeCalendar:`Close calendar`,closeTimeInput:`Close time picker`,collapseRow:`Collapse row`,columnMenu:`Column options`,columnMovedToPosition:(e,t,n)=>`${e} moved to position ${t} of ${n}`,columns:`Columns`,compactPageXOfY:(e,t)=>`${e} of ${t}`,completed:`Completed`,copied:`Copied`,copy:`Copy`,createOption:e=>`Create "${e}"`,currentlyPlaying:`currently playing`,currentValue:`Current value`,date:`Date`,datePickerKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the calendar.`,day:`Day`,dayPeriod:`AM/PM`,decrement:`Decrement`,deselectAllRows:`Deselect all rows`,disabled:`Disabled`,dropFileHere:`Drop file here or click to browse`,dropFilesHere:`Drop files here or click to browse`,empty:`Empty`,endDate:`End date`,enterFullscreen:`Enter fullscreen`,error:`Error`,exitFullscreen:`Exit fullscreen`,expandRow:`Expand row`,filterByColumn:e=>`Filter by ${e}`,filterFrom:`From`,filterMax:`Max`,filterMin:`Min`,filterTo:`To`,firstPage:`First page`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hideColumn:`Hide column`,hidePassword:`Hide password`,hour:`Hour`,incompleteDate:`Enter a valid date.`,increment:`Increment`,jumpBackwardX:e=>`Jump back ${e} pages`,jumpForwardX:e=>`Jump forward ${e} pages`,lastPage:`Last page`,loading:`Loading`,locked:`Locked`,minute:`Minute`,month:`Month`,moreOptions:`More Options`,mute:`Mute`,nextDecade:`Next decade`,nextMonth:`Next month`,nextPage:`Next page`,nextSlide:`Next slide`,nextVideo:`Next Video`,nextYear:`Next year`,noData:`No data`,noOptions:`No options`,noResults:`No matching results`,notCompleted:`Not completed`,now:`Now`,numCharacters:e=>e===1?`1 character`:`${e} characters`,numCharactersRemaining:e=>e===1?`1 character remaining`:`${e} characters remaining`,numOptionsAvailable:e=>e===0?`No options available`:e===1?`1 option available`:`${e} options available`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,numRowsCopied:e=>e===1?`1 row copied`:`${e} rows copied`,numRowsSelected:e=>e===1?`1 row selected`:`${e} rows selected`,optionPosition:(e,t,n)=>`${e}, ${t} of ${n}`,optionsLoadError:`Options could not be loaded`,pageXOfY:(e,t)=>`Page ${e} of ${t}`,pagination:`Pagination`,pause:`Pause`,pauseAnimation:`Pause animation`,pictureInPicture:`Picture in picture`,pinLeft:`Pin left`,pinRight:`Pin right`,play:`Play`,playAnimation:`Play animation`,playbackSpeed:`Playback speed`,playlist:`Playlist`,pm:`PM`,previousDecade:`Previous decade`,previousMonth:`Previous month`,previousPage:`Previous page`,previousSlide:`Previous slide`,previousVideo:`Previous video`,previousYear:`Previous year`,progress:`Progress`,rangeTooLong:e=>e===1?`Select a range no longer than 1 day`:`Select a range no longer than ${e} days`,rangeTooShort:e=>e===1?`Select a range at least 1 day long`:`Select a range at least ${e} days long`,readonly:`Read-only`,remove:`Remove`,resetColumns:`Reset columns`,resize:`Resize`,resizeColumn:`Resize column`,rowsPerPage:`Rows per page`,scrollableRegion:`Scrollable region`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,search:`Search`,second:`Second`,seek:`Seek`,seekProgress:(e,t)=>`${e} of ${t}`,selectAColorFromTheScreen:`Select a color from the screen`,selectAllRows:`Select all rows`,selected:`Selected`,selectedDateLabel:e=>`Selected: ${e}`,selectedRangeLabel:e=>`Selected range: ${e}`,selectGroup:`Select group`,selectionCleared:`Selection cleared`,selectRow:`Select row`,showingNofMRows:(e,t)=>`Showing ${e} of ${t} rows`,showingXtoYofZ:(e,t,n)=>`${e}\u2013${t} of ${n}`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,sortAscending:`Sort ascending`,sortColumn:`Sort column`,sortDescending:`Sort descending`,startDate:`Start date`,steps:`Steps`,stepXOfY:(e,t)=>`Step ${e} of ${t}`,tagAdded:e=>`${e} added`,tagAlreadyAdded:e=>`${e} is already added`,tagInputKeyboardHelp:`Press Backspace or Delete to remove this tag.`,tagRemoved:e=>`${e} removed`,time:`Time`,timeInputKeyboardHelp:`Use arrow keys to change values; press Alt+Down Arrow to open the time picker.`,today:`Today`,toggleColorFormat:`Toggle color format`,tooFewTags:e=>e===1?`Add at least 1 tag`:`Add at least ${e} tags`,tooManyTags:e=>e===1?`Add no more than 1 tag`:`Add no more than ${e} tags`,unmute:`Unmute`,unpin:`Unpin`,unpinColumn:`Unpin column`,videoPlayer:`Video player`,volume:`Volume`,year:`Year`,zoomIn:`Zoom in`,zoomOut:`Zoom out`};Lt(Bt);var Vt=Bt,Ht=class extends zt{lang(){return this.host.didSSR&&!this.host.hasUpdated?this.host.lang||`en`:super.lang()}};Lt(Vt);
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const Ut={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Wt=e=>(...t)=>({_$litDirective$:e,values:t});var Gt=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
* @license
* Copyright 2018 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Kt=Wt(class extends Gt{constructor(e){if(super(e),e.type!==Ut.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter((t=>e[t])).join(` `)+` `}update(e,[t]){if(this.st===void 0){for(let n in this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter((e=>e!==``)))),t)t[n]&&!this.nt?.has(n)&&this.st.add(n);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return Ue}}),g=e=>e??m,qt=Symbol.for(``),Jt=e=>{if(e?.r===qt)return e?._$litStatic$},Yt=(e,...t)=>({_$litStatic$:t.reduce(((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1]),e[0]),r:qt}),Xt=new Map,Zt=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Jt(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Xt.get(e))===void 0&&(o.raw=o,Xt.set(e,t=o)),n=s}return e(t,...n)})(He);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var _=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=[`click`],this.hasSlotController=new Et(this,`[default]`,`start`,`end`),this.localize=new Ht(this),this.invalid=!1,this.isIconButton=!1,this.title=``,this.variant=`neutral`,this.appearance=`accent`,this.size=`m`,this.withCaret=!1,this.withStart=!1,this.withEnd=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type=`button`}static get validators(){return[...super.validators,n()]}handleSizeChange(){Tt(this.localName,this.size)}constructLightDOMButton(){let e=document.createElement(`button`);for(let t of this.attributes)t.name!==`style`&&e.setAttribute(t.name,t.value);return e.type=this.type,e.style.position=`absolute !important`,e.style.width=`0 !important`,e.style.height=`0 !important`,e.style.clipPath=`inset(50%) !important`,e.style.overflow=`hidden !important`,e.style.whiteSpace=`nowrap !important`,this.name&&(e.name=this.name),e.value=this.value||``,e}handleClick(e){if(this.disabled||this.loading){e.preventDefault(),e.stopImmediatePropagation();return}if(this.type!==`submit`&&this.type!==`reset`||!this.getForm())return;let t=this.constructLightDOMButton();this.parentElement?.append(t),t.click(),t.remove()}handleInvalid(){this.dispatchEvent(new r)}handleLabelSlotChange(){let e=this.labelSlot.assignedNodes({flatten:!0}),t=!1,n=!1,r=!1,i=!1;[...e].forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){let r=e;r.localName===`wa-icon`?(n=!0,t||=r.label!==void 0):i=!0}else e.nodeType===Node.TEXT_NODE&&(e.textContent?.trim()||``).length>0&&(r=!0)}),this.isIconButton=n&&!r&&!i,this.customStates.set(`icon-button`,this.isIconButton),this.isIconButton&&!t&&console.warn(`Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.`,this)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.customStates.set(`disabled`,this.disabled),this.updateValidity()}handleHrefChange(){this.customStates.set(`link`,this.isLink())}handleLoadingChange(){this.customStates.set(`loading`,this.loading)}setValue(...e){}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=this.isLink(),t=e?Yt`a`:Yt`button`;return Zt`
      <${t}
        part="base button"
        class=${Kt({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()===`rtl`,"has-label":this.hasSlotController.test(`[default]`),"has-start":this.hasSlotController.test(`start`,`withStart`),"has-end":this.hasSlotController.test(`end`,`withEnd`),"is-icon-button":this.isIconButton})}
        ?disabled=${g(e?void 0:this.disabled)}
        type=${g(e?void 0:this.type)}
        title=${this.title}
        name=${g(e?void 0:this.name)}
        value=${g(e?void 0:this.value)}
        href=${g(e?this.href:void 0)}
        target=${g(e?this.target:void 0)}
        download=${g(e?this.download:void 0)}
        rel=${g(e&&this.rel?this.rel:void 0)}
        role=${g(e?void 0:`button`)}
        aria-disabled=${g(e&&this.disabled?`true`:void 0)}
        aria-busy=${this.loading?`true`:`false`}
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
    `}};_.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0},_.css=[Ot,kt,Dt],s([mt(`.button`)],_.prototype,`button`,2),s([mt(`slot:not([name])`)],_.prototype,`labelSlot`,2),s([ft()],_.prototype,`invalid`,2),s([ft()],_.prototype,`isIconButton`,2),s([h()],_.prototype,`title`,2),s([h({reflect:!0})],_.prototype,`variant`,2),s([h({reflect:!0})],_.prototype,`appearance`,2),s([h({reflect:!0})],_.prototype,`size`,2),s([At(`size`)],_.prototype,`handleSizeChange`,1),s([h({attribute:`with-caret`,type:Boolean,reflect:!0})],_.prototype,`withCaret`,2),s([h({attribute:`with-start`,type:Boolean})],_.prototype,`withStart`,2),s([h({attribute:`with-end`,type:Boolean})],_.prototype,`withEnd`,2),s([h({type:Boolean})],_.prototype,`disabled`,2),s([h({type:Boolean,reflect:!0})],_.prototype,`loading`,2),s([h({type:Boolean,reflect:!0})],_.prototype,`pill`,2),s([h()],_.prototype,`type`,2),s([h({reflect:!0})],_.prototype,`name`,2),s([h({reflect:!0})],_.prototype,`value`,2),s([h({reflect:!0})],_.prototype,`href`,2),s([h()],_.prototype,`target`,2),s([h()],_.prototype,`rel`,2),s([h()],_.prototype,`download`,2),s([h({attribute:`formaction`})],_.prototype,`formAction`,2),s([h({attribute:`formenctype`})],_.prototype,`formEnctype`,2),s([h({attribute:`formmethod`})],_.prototype,`formMethod`,2),s([h({attribute:`formnovalidate`,type:Boolean})],_.prototype,`formNoValidate`,2),s([h({attribute:`formtarget`})],_.prototype,`formTarget`,2),s([At(`disabled`,{waitUntilFirstUpdate:!0})],_.prototype,`handleDisabledChange`,1),s([At(`href`)],_.prototype,`handleHrefChange`,1),s([At(`loading`,{waitUntilFirstUpdate:!0})],_.prototype,`handleLoadingChange`,1),_=s([lt(`wa-button`)],_),_.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qt=ie`
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
`,$t=class extends bt{constructor(){super(...arguments),this.localize=new Ht(this)}render(){return He`
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
    `}};$t.css=Qt,$t=s([lt(`wa-spinner`)],$t);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var en=class extends Event{constructor(){super(`wa-error`,{bubbles:!0,cancelable:!1,composed:!0})}},tn=class extends Event{constructor(){super(`wa-load`,{bubbles:!0,cancelable:!1,composed:!0})}},nn=ie`
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
`,rn=``,an=``;function on(){return rn.replace(/\/$/,``)}function sn(e){an=e}function cn(){if(!an){let e=document.querySelector(`[data-fa-kit-code]`);e&&sn(e.getAttribute(`data-fa-kit-code`)||``)}return an}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var ln=`7.3.0`;function un(e,t,n){let r=`solid`;return t===`chisel`&&(r=`chisel-regular`),t===`etch`&&(r=`etch-solid`),t===`graphite`&&(r=`graphite-thin`),t===`jelly`&&(r=`jelly-regular`,n===`duo-regular`&&(r=`jelly-duo-regular`),n===`fill-regular`&&(r=`jelly-fill-regular`)),t===`jelly-duo`&&(r=`jelly-duo-regular`),t===`jelly-fill`&&(r=`jelly-fill-regular`),t===`notdog`&&(n===`solid`&&(r=`notdog-solid`),n===`duo-solid`&&(r=`notdog-duo-solid`)),t===`notdog-duo`&&(r=`notdog-duo-solid`),t===`slab`&&((n===`solid`||n===`regular`)&&(r=`slab-regular`),n===`press-regular`&&(r=`slab-press-regular`)),t===`slab-press`&&(r=`slab-press-regular`),t===`slab-duo`&&(r=`slab-duo-regular`),t===`slab-press-duo`&&(r=`slab-press-duo-regular`),t===`thumbprint`&&(r=`thumbprint-light`),t===`utility`&&(r=`utility-semibold`),t===`utility-duo`&&(r=`utility-duo-semibold`),t===`utility-fill`&&(r=`utility-fill-semibold`),t===`whiteboard`&&(r=`whiteboard-semibold`),t===`mosaic`&&(r=`mosaic-solid`),t===`pixel`&&(r=`pixel-regular`),t===`vellum`&&(r=`vellum-solid`),t===`classic`&&(n===`thin`&&(r=`thin`),n===`light`&&(r=`light`),n===`regular`&&(r=`regular`),n===`solid`&&(r=`solid`)),t===`duotone`&&(n===`thin`&&(r=`duotone-thin`),n===`light`&&(r=`duotone-light`),n===`regular`&&(r=`duotone-regular`),n===`solid`&&(r=`duotone`)),t===`sharp`&&(n===`thin`&&(r=`sharp-thin`),n===`light`&&(r=`sharp-light`),n===`regular`&&(r=`sharp-regular`),n===`solid`&&(r=`sharp-solid`)),t===`sharp-duotone`&&(n===`thin`&&(r=`sharp-duotone-thin`),n===`light`&&(r=`sharp-duotone-light`),n===`regular`&&(r=`sharp-duotone-regular`),n===`solid`&&(r=`sharp-duotone-solid`)),t===`brands`&&(r=`brands`),r}function dn(e,t,n){let r=un(e,t,n),i=on();if(i)return`${i}/${r}/${e}.svg`;let a=cn();return a.length>0?`https://ka-p.fontawesome.com/releases/v${ln}/svgs/${r}/${e}.svg?token=${encodeURIComponent(a)}`:`https://ka-f.fontawesome.com/releases/v${ln}/svgs/${r}/${e}.svg`}var fn={name:`default`,resolver:(e,t=`classic`,n=`solid`)=>dn(e,t,n),mutator:(e,t)=>{if(e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`),t?.family&&!e.hasAttribute(`data-duotone-initialized`)){let{family:n,variant:r}=t;if(n===`duotone`||n===`sharp-duotone`||n===`notdog-duo`||n===`notdog`&&r===`duo-solid`||n===`jelly-duo`||n===`jelly`&&r===`duo-regular`||n===`utility-duo`||n===`slab-duo`||n===`slab-press-duo`||n===`thumbprint`){let n=[...e.querySelectorAll(`path`)],r=n.find(e=>!e.hasAttribute(`opacity`)),i=n.find(e=>e.hasAttribute(`opacity`));if(!r||!i)return;if(r.setAttribute(`data-duotone-primary`,``),i.setAttribute(`data-duotone-secondary`,``),t.swapOpacity&&r&&i){let e=i.getAttribute(`opacity`)||`0.4`;r.style.setProperty(`--path-opacity`,e),i.style.setProperty(`--path-opacity`,`1`)}e.setAttribute(`data-duotone-initialized`,``)}}}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function pn(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}var mn={solid:{"arrow-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7-105.4-105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>`,"arrow-up":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`,backward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M236.3 107.1C247.9 96 265 92.9 279.7 99.2C294.4 105.5 304 120 304 136L304 272.3L476.3 107.2C487.9 96 505 92.9 519.7 99.2C534.4 105.5 544 120 544 136L544 504C544 520 534.4 534.5 519.7 540.8C505 547.1 487.9 544 476.3 532.9L304 367.7L304 504C304 520 294.4 534.5 279.7 540.8C265 547.1 247.9 544 236.3 532.9L44.3 348.9C36.5 341.3 32 330.9 32 320C32 309.1 36.5 298.7 44.3 291.1L236.3 107.1z"/></svg>`,"backward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M491 100.8C478.1 93.8 462.3 94.5 450 102.6L192 272.1L192 128C192 110.3 177.7 96 160 96C142.3 96 128 110.3 128 128L128 512C128 529.7 142.3 544 160 544C177.7 544 192 529.7 192 512L192 367.9L450 537.5C462.3 545.6 478 546.3 491 539.3C504 532.3 512 518.8 512 504.1L512 136.1C512 121.4 503.9 107.9 491 100.9z"/></svg>`,bars:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2026 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>`,"angles-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M77.3 256 214.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256zm192 0L406.7 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L269.3 256z"/></svg>`,"angles-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.7 256 297.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L434.7 256zm-192 0L105.3 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256z"/></svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>`,"chevron-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>`,"chevron-left":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>`,"chevron-right":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>`,circle:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>`,"closed-captioning":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M64 192C64 156.7 92.7 128 128 128L512 128C547.3 128 576 156.7 576 192L576 448C576 483.3 547.3 512 512 512L128 512C92.7 512 64 483.3 64 448L64 192zM216 272L248 272C252.4 272 256 275.6 256 280C256 293.3 266.7 304 280 304C293.3 304 304 293.3 304 280C304 249.1 278.9 224 248 224L216 224C185.1 224 160 249.1 160 280L160 360C160 390.9 185.1 416 216 416L248 416C278.9 416 304 390.9 304 360C304 346.7 293.3 336 280 336C266.7 336 256 346.7 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 280C208 275.6 211.6 272 216 272zM384 280C384 275.6 387.6 272 392 272L424 272C428.4 272 432 275.6 432 280C432 293.3 442.7 304 456 304C469.3 304 480 293.3 480 280C480 249.1 454.9 224 424 224L392 224C361.1 224 336 249.1 336 280L336 360C336 390.9 361.1 416 392 416L424 416C454.9 416 480 390.9 480 360C480 346.7 469.3 336 456 336C442.7 336 432 346.7 432 360C432 364.4 428.4 368 424 368L392 368C387.6 368 384 364.4 384 360L384 280z"/></svg>`,"closed-captioning-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M39 39.1C48.4 29.7 63.6 29.7 72.9 39.1L161.8 128L512 128C547.3 128 576 156.7 576 192L576 448C576 473.5 561.1 495.4 539.6 505.8L601 567.1C610.4 576.5 610.4 591.7 601 601C591.6 610.3 576.4 610.4 567.1 601L39 73.1C29.7 63.7 29.7 48.5 39 39.1zM384 350.1L384 279.9C384 275.5 387.6 271.9 392 271.9L424 271.9C428.4 271.9 432 275.5 432 279.9C432 293.2 442.7 303.9 456 303.9C469.3 303.9 480 293.2 480 279.9C480 249 454.9 223.9 424 223.9L392 223.9C361.1 223.9 336 249 336 279.9L336 302.1L384 350.1zM445.5 411.6C465.7 403.2 480 383.2 480 359.9C480 346.6 469.3 335.9 456 335.9C442.7 335.9 432 346.6 432 359.9C432 364.3 428.4 367.9 424 367.9L401.8 367.9L445.5 411.6zM162.3 264.1C160.8 269.1 160 274.5 160 280L160 360C160 390.9 185.1 416 216 416L248 416C266.1 416 282.1 407.5 292.4 394.2L410.2 512L128 512C92.7 512 64 483.3 64 448L64 192C64 184.2 65.4 176.7 68 169.8L162.3 264.1zM256.1 357.9C256 358.6 256 359.3 256 360C256 364.4 252.4 368 248 368L216 368C211.6 368 208 364.4 208 360L208 309.8L256.1 357.9z"/></svg>`,compress:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M160 64c0-17.7-14.3-32-32-32S96 46.3 96 64l0 64-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-96zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0 0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-17.7-14.3-32-32-32l-96 0zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0 0-64zM320 320c-17.7 0-32 14.3-32 32l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0z"/></svg>`,ellipsis:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M96 320C96 289.1 121.1 264 152 264C182.9 264 208 289.1 208 320C208 350.9 182.9 376 152 376C121.1 376 96 350.9 96 320zM264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320zM488 264C518.9 264 544 289.1 544 320C544 350.9 518.9 376 488 376C457.1 376 432 350.9 432 320C432 289.1 457.1 264 488 264z"/></svg>`,"ellipsis-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>`,expand:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 96C110.3 96 96 110.3 96 128L96 224C96 241.7 110.3 256 128 256C145.7 256 160 241.7 160 224L160 160L224 160C241.7 160 256 145.7 256 128C256 110.3 241.7 96 224 96L128 96zM160 416C160 398.3 145.7 384 128 384C110.3 384 96 398.3 96 416L96 512C96 529.7 110.3 544 128 544L224 544C241.7 544 256 529.7 256 512C256 494.3 241.7 480 224 480L160 480L160 416zM416 96C398.3 96 384 110.3 384 128C384 145.7 398.3 160 416 160L480 160L480 224C480 241.7 494.3 256 512 256C529.7 256 544 241.7 544 224L544 128C544 110.3 529.7 96 512 96L416 96zM544 416C544 398.3 529.7 384 512 384C494.3 384 480 398.3 480 416L480 480L416 480C398.3 480 384 494.3 384 512C384 529.7 398.3 544 416 544L512 544C529.7 544 544 529.7 544 512L544 416z"/></svg>`,eyedropper:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 64C19.1 64 7.4 71.8 2.4 83.8S.2 109.5 9.4 118.6L192 301.3 192 416c0 8.5 3.4 16.6 9.4 22.6l64 64c9.2 9.2 22.9 11.9 34.9 6.9S320 492.9 320 480l0-178.7 182.6-182.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 64 480 64L32 64z"/></svg>`,forward:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M403.7 107.1C392.1 96 375 92.9 360.3 99.2C345.6 105.5 336 120 336 136L336 272.3L163.7 107.2C152.1 96 135 92.9 120.3 99.2C105.6 105.5 96 120 96 136L96 504C96 520 105.6 534.5 120.3 540.8C135 547.1 152.1 544 163.7 532.9L336 367.7L336 504C336 520 345.6 534.5 360.3 540.8C375 547.1 392.1 544 403.7 532.9L595.7 348.9C603.6 341.4 608 330.9 608 320C608 309.1 603.5 298.7 595.7 291.1L403.7 107.1z"/></svg>`,file:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"/></svg>`,"file-audio":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM389.8 307.7C380.7 301.4 368.3 303.6 362 312.7C355.7 321.8 357.9 334.2 367 340.5C390.9 357.2 406.4 384.8 406.4 416C406.4 447.2 390.8 474.9 367 491.5C357.9 497.8 355.7 510.3 362 519.3C368.3 528.3 380.8 530.6 389.8 524.3C423.9 500.5 446.4 460.8 446.4 416C446.4 371.2 424 331.5 389.8 307.7zM208 376C199.2 376 192 383.2 192 392L192 440C192 448.8 199.2 456 208 456L232 456L259.2 490C262.2 493.8 266.8 496 271.7 496L272 496C280.8 496 288 488.8 288 480L288 352C288 343.2 280.8 336 272 336L271.7 336C266.8 336 262.2 338.2 259.2 342L232 376L208 376zM336 448.2C336 458.9 346.5 466.4 354.9 459.8C367.8 449.5 376 433.7 376 416C376 398.3 367.8 382.5 354.9 372.2C346.5 365.5 336 373.1 336 383.8L336 448.3z"/></svg>`,"file-code":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM282.2 359.6C290.8 349.5 289.7 334.4 279.6 325.8C269.5 317.2 254.4 318.3 245.8 328.4L197.8 384.4C190.1 393.4 190.1 406.6 197.8 415.6L245.8 471.6C254.4 481.7 269.6 482.8 279.6 474.2C289.6 465.6 290.8 450.4 282.2 440.4L247.6 400L282.2 359.6zM394.2 328.4C385.6 318.3 370.4 317.2 360.4 325.8C350.4 334.4 349.2 349.6 357.8 359.6L392.4 400L357.8 440.4C349.2 450.5 350.3 465.6 360.4 474.2C370.5 482.8 385.6 481.7 394.2 471.6L442.2 415.6C449.9 406.6 449.9 393.4 442.2 384.4L394.2 328.4z"/></svg>`,"file-excel":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM292 330.7C284.6 319.7 269.7 316.7 258.7 324C247.7 331.3 244.7 346.3 252 357.3L291.2 416L252 474.7C244.6 485.7 247.6 500.6 258.7 508C269.8 515.4 284.6 512.4 292 501.3L320 459.3L348 501.3C355.4 512.3 370.3 515.3 381.3 508C392.3 500.7 395.3 485.7 388 474.7L348.8 416L388 357.3C395.4 346.3 392.4 331.4 381.3 324C370.2 316.6 355.4 319.6 348 330.7L320 372.7L292 330.7z"/></svg>`,"file-image":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM256 320C256 302.3 241.7 288 224 288C206.3 288 192 302.3 192 320C192 337.7 206.3 352 224 352C241.7 352 256 337.7 256 320zM220.6 512L419.4 512C435.2 512 448 499.2 448 483.4C448 476.1 445.2 469 440.1 463.7L343.3 361.9C337.3 355.6 328.9 352 320.1 352L319.8 352C311 352 302.7 355.6 296.6 361.9L199.9 463.7C194.8 469 192 476.1 192 483.4C192 499.2 204.8 512 220.6 512z"/></svg>`,"file-pdf":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 64C92.7 64 64 92.7 64 128L64 512C64 547.3 92.7 576 128 576L208 576L208 464C208 428.7 236.7 400 272 400L448 400L448 234.5C448 217.5 441.3 201.2 429.3 189.2L322.7 82.7C310.7 70.7 294.5 64 277.5 64L128 64zM389.5 240L296 240C282.7 240 272 229.3 272 216L272 122.5L389.5 240zM272 444C261 444 252 453 252 464L252 592C252 603 261 612 272 612C283 612 292 603 292 592L292 564L304 564C337.1 564 364 537.1 364 504C364 470.9 337.1 444 304 444L272 444zM304 524L292 524L292 484L304 484C315 484 324 493 324 504C324 515 315 524 304 524zM400 444C389 444 380 453 380 464L380 592C380 603 389 612 400 612L432 612C460.7 612 484 588.7 484 560L484 496C484 467.3 460.7 444 432 444L400 444zM420 572L420 484L432 484C438.6 484 444 489.4 444 496L444 560C444 566.6 438.6 572 432 572L420 572zM508 464L508 592C508 603 517 612 528 612C539 612 548 603 548 592L548 548L576 548C587 548 596 539 596 528C596 517 587 508 576 508L548 508L548 484L576 484C587 484 596 475 596 464C596 453 587 444 576 444L528 444C517 444 508 453 508 464z"/></svg>`,"file-powerpoint":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM280 320C266.7 320 256 330.7 256 344L256 488C256 501.3 266.7 512 280 512C293.3 512 304 501.3 304 488L304 464L328 464C367.8 464 400 431.8 400 392C400 352.2 367.8 320 328 320L280 320zM328 416L304 416L304 368L328 368C341.3 368 352 378.7 352 392C352 405.3 341.3 416 328 416z"/></svg>`,"file-video":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM208 368L208 464C208 481.7 222.3 496 240 496L336 496C353.7 496 368 481.7 368 464L368 440L403 475C406.2 478.2 410.5 480 415 480C424.4 480 432 472.4 432 463L432 368.9C432 359.5 424.4 351.9 415 351.9C410.5 351.9 406.2 353.7 403 356.9L368 391.9L368 367.9C368 350.2 353.7 335.9 336 335.9L240 335.9C222.3 335.9 208 350.2 208 367.9z"/></svg>`,"file-word":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM263.4 338.8C260.5 325.9 247.7 317.7 234.8 320.6C221.9 323.5 213.7 336.3 216.6 349.2L248.6 493.2C250.9 503.7 260 511.4 270.8 512C281.6 512.6 291.4 505.9 294.8 495.6L320 419.9L345.2 495.6C348.6 505.8 358.4 512.5 369.2 512C380 511.5 389.1 503.8 391.4 493.2L423.4 349.2C426.3 336.3 418.1 323.4 405.2 320.6C392.3 317.8 379.4 325.9 376.6 338.8L363.4 398.2L342.8 336.4C339.5 326.6 330.4 320 320 320C309.6 320 300.5 326.6 297.2 336.4L276.6 398.2L263.4 338.8z"/></svg>`,"file-zipper":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M128 128C128 92.7 156.7 64 192 64L341.5 64C358.5 64 374.8 70.7 386.8 82.7L493.3 189.3C505.3 201.3 512 217.6 512 234.6L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM336 122.5L336 216C336 229.3 346.7 240 360 240L453.5 240L336 122.5zM192 136C192 149.3 202.7 160 216 160L264 160C277.3 160 288 149.3 288 136C288 122.7 277.3 112 264 112L216 112C202.7 112 192 122.7 192 136zM192 232C192 245.3 202.7 256 216 256L264 256C277.3 256 288 245.3 288 232C288 218.7 277.3 208 264 208L216 208C202.7 208 192 218.7 192 232zM256 304L224 304C206.3 304 192 318.3 192 336L192 384C192 410.5 213.5 432 240 432C266.5 432 288 410.5 288 384L288 336C288 318.3 273.7 304 256 304zM240 368C248.8 368 256 375.2 256 384C256 392.8 248.8 400 240 400C231.2 400 224 392.8 224 384C224 375.2 231.2 368 240 368z"/></svg>`,"forward-step":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M21 36.8c12.9-7 28.7-6.3 41 1.8L320 208.1 320 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 384c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-144.1-258 169.6c-12.3 8.1-28 8.8-41 1.8S0 454.7 0 440L0 72C0 57.3 8.1 43.8 21 36.8z"/></svg>`,gauge:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm320 96c0-26.9-16.5-49.9-40-59.3L280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 172.7c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,gear:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M259.1 73.5C262.1 58.7 275.2 48 290.4 48L350.2 48C365.4 48 378.5 58.7 381.5 73.5L396 143.5C410.1 149.5 423.3 157.2 435.3 166.3L503.1 143.8C517.5 139 533.3 145 540.9 158.2L570.8 210C578.4 223.2 575.7 239.8 564.3 249.9L511 297.3C511.9 304.7 512.3 312.3 512.3 320C512.3 327.7 511.8 335.3 511 342.7L564.4 390.2C575.8 400.3 578.4 417 570.9 430.1L541 481.9C533.4 495 517.6 501.1 503.2 496.3L435.4 473.8C423.3 482.9 410.1 490.5 396.1 496.6L381.7 566.5C378.6 581.4 365.5 592 350.4 592L290.6 592C275.4 592 262.3 581.3 259.3 566.5L244.9 496.6C230.8 490.6 217.7 482.9 205.6 473.8L137.5 496.3C123.1 501.1 107.3 495.1 99.7 481.9L69.8 430.1C62.2 416.9 64.9 400.3 76.3 390.2L129.7 342.7C128.8 335.3 128.4 327.7 128.4 320C128.4 312.3 128.9 304.7 129.7 297.3L76.3 249.8C64.9 239.7 62.3 223 69.8 209.9L99.7 158.1C107.3 144.9 123.1 138.9 137.5 143.7L205.3 166.2C217.4 157.1 230.6 149.5 244.6 143.4L259.1 73.5zM320.3 400C364.5 399.8 400.2 363.9 400 319.7C399.8 275.5 363.9 239.8 319.7 240C275.5 240.2 239.8 276.1 240 320.3C240.2 364.5 276.1 400.2 320.3 400z"/></svg>`,"grip-vertical":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>`,indeterminate:`<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>`,"magnifying-glass":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>`,minus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>`,pause:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>`,"picture-in-picture":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M448 32c35.3 0 64 28.7 64 64l0 112-64 0 0-112-384 0 0 320 144 0 0 64-144 0-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 416 0 96C0 62.9 25.2 35.6 57.5 32.3L64 32 448 32zm16 224c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48l160 0z"/></svg>`,play:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>`,"play-circle":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,plus:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>`,"table-columns":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm64 64l0 256 128 0 0-256-128 0zm320 0l-128 0 0 256 128 0 0-256z"/></svg>`,thumbtack:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"/></svg>`,"up-down":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M406.6 502.6l96-96c9.2-9.2 11.9-22.9 6.9-34.9S492.9 352 480 352l-64 0 0-320c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 320-64 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l96 96c12.5 12.5 32.8 12.5 45.3 0zM150.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-9.2 9.2-11.9 22.9-6.9 34.9S19.1 160 32 160l64 0 0 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-320 64 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-96-96z"/></svg>`,upload:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free 7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M352 173.3L352 384C352 401.7 337.7 416 320 416C302.3 416 288 401.7 288 384L288 173.3L246.6 214.7C234.1 227.2 213.8 227.2 201.3 214.7C188.8 202.2 188.8 181.9 201.3 169.4L297.3 73.4C309.8 60.9 330.1 60.9 342.6 73.4L438.6 169.4C451.1 181.9 451.1 202.2 438.6 214.7C426.1 227.2 405.8 227.2 393.3 214.7L352 173.3zM320 464C364.2 464 400 428.2 400 384L480 384C515.3 384 544 412.7 544 448L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 448C96 412.7 124.7 384 160 384L240 384C240 428.2 275.8 464 320 464zM464 488C477.3 488 488 477.3 488 464C488 450.7 477.3 440 464 440C450.7 440 440 450.7 440 464C440 477.3 450.7 488 464 488z"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>`,volume:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 464 210.9 464 256s-20.7 85.3-53.2 111.8c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5c43.2-35.2 70.9-88.9 70.9-149s-27.7-113.8-70.9-149zm-60.5 74.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-low":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227.6 368 241 368 256s-6.9 28.4-17.7 37.3c-10.3 8.4-11.8 23.5-3.5 33.8s23.5 11.8 33.8 3.5C402.1 312.9 416 286.1 416 256s-13.9-56.9-35.5-74.5z"/></svg>`,"volume-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM367 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,xmark:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>`},regular:{calendar:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z"/></svg>`,"circle-question":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>`,"circle-xmark":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>`,clock:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z"/></svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>`,eye:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>`,"eye-slash":`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>`}},hn={name:`system`,resolver:(e,t=`classic`,n=`solid`)=>{let r=mn[n][e]??mn.regular[e]??mn.regular[`circle-question`];return r?pn(r):``},mutator:e=>{e.hasAttribute(`fill`)||e.setAttribute(`fill`,`currentColor`)}},gn=`classic`,_n=[fn,hn],vn=new Set;function yn(e){vn.add(e)}function bn(e){vn.delete(e)}function xn(e){return _n.find(t=>t.name===e)}function Sn(){return gn}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Cn}=rt,wn=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Tn=e=>e.strings===void 0,En={},Dn=(e,t=En)=>e._$AH=t;
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var On=Symbol(),kn=Symbol(),An,jn=new Map,v=class extends bt{constructor(){super(...arguments),this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label=``,this.library=`default`,this.rotate=0,this.resolveIcon=async(e,t)=>{let n;if(t?.spriteSheet){this.hasUpdated||await this.updateComplete,this.svg=He`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;let n=this.shadowRoot.querySelector(`[part='svg']`);return typeof t.mutator==`function`&&t.mutator(n,this),this.svg}try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?On:kn}catch{return kn}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if(t?.tagName?.toLowerCase()!==`svg`)return On;An||=new DOMParser;let r=An.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):On}catch{return On}}}connectedCallback(){super.connectedCallback(),yn(this)}firstUpdated(e){super.firstUpdated(e),this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),bn(this)}async getIconSource(){let e=xn(this.library),t=this.family||Sn();if(this.name&&e){let n=this.canvas===`auto`||this.autoWidth,r;try{r=await e.resolver(this.name,t,this.variant,n)}catch{r=void 0}return{url:r,fromLibrary:!0}}return{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){let{url:e,fromLibrary:t}=await this.getIconSource(),n=t?xn(this.library):void 0;if(!e){this.svg=null;return}let r=jn.get(e);r||(r=this.resolveIcon(e,n),jn.set(e,r));let i=await r;if(i===kn&&jn.delete(e),e===(await this.getIconSource()).url){if(wn(i)){this.svg=i;return}switch(i){case kn:case On:this.svg=null,this.dispatchEvent(new en);break;default:this.svg=i.cloneNode(!0),n?.mutator?.(this.svg,this),this.dispatchEvent(new tn)}}}willUpdate(e){return this.style||this.setStyleProperty(`--rotate-angle`,`${this.rotate}deg`),super.willUpdate(e)}updated(e){super.updated(e);let t=xn(this.library);this.hasAttribute(`rotate`)&&this.style.setProperty(`--rotate-angle`,`${this.rotate}deg`);let n=this.shadowRoot?.querySelector(`svg`);n&&t?.mutator?.(n,this)}render(){return this.hasUpdated?this.svg:He`<svg part="svg" width="16" height="16" viewBox="0 0 16 16"></svg>`}};v.css=nn,s([ft()],v.prototype,`svg`,2),s([h({reflect:!0})],v.prototype,`name`,2),s([h({reflect:!0})],v.prototype,`family`,2),s([h({reflect:!0})],v.prototype,`variant`,2),s([h({reflect:!0})],v.prototype,`canvas`,2),s([h({attribute:`auto-width`,type:Boolean,reflect:!0})],v.prototype,`autoWidth`,2),s([h({attribute:`swap-opacity`,type:Boolean,reflect:!0})],v.prototype,`swapOpacity`,2),s([h()],v.prototype,`src`,2),s([h()],v.prototype,`label`,2),s([h({reflect:!0})],v.prototype,`library`,2),s([h({type:Number,reflect:!0})],v.prototype,`rotate`,2),s([h({type:String,reflect:!0})],v.prototype,`flip`,2),s([h({type:String,reflect:!0})],v.prototype,`animation`,2),s([At(`label`)],v.prototype,`handleLabelChange`,1),s([At([`family`,`name`,`library`,`variant`,`src`,`autoWidth`,`canvas`,`swapOpacity`],{waitUntilFirstUpdate:!0})],v.prototype,`setIcon`,1),v=s([lt(`wa-icon`)],v);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Mn=t({default:()=>_}),Nn=ie`
  :host {
    --size: 25rem;
    --spacing: var(--wa-space-l);
    --backdrop-filter: none;
    --show-duration: var(--wa-transition-normal);
    --hide-duration: var(--wa-transition-normal);

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    color: inherit;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-l);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &:dir(rtl) {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .header {
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
    font: inherit;
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
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--spacing);
    padding-block-start: 0;
  }

  .footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
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
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
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
    .drawer {
      border: solid 1px white;
    }
  }
`,Pn=class{constructor(e,t){this.element=e,this.callback=t}start(...e){this.observer??=new ResizeObserver(()=>this.check()),this.observer.observe(this.element);for(let t of e)this.observer.observe(t);this.initialCheckHandle??=requestAnimationFrame(()=>{this.initialCheckHandle=void 0,this.check()})}stop(){this.initialCheckHandle!==void 0&&(cancelAnimationFrame(this.initialCheckHandle),this.initialCheckHandle=void 0),this.observer?.disconnect()}check(){this.callback(this.element.getClientRects().length>0)}};function Fn(e,t){let n=t.getBoundingClientRect();return e.clientX>=n.left&&e.clientX<=n.right&&e.clientY>=n.top&&e.clientY<=n.bottom}var In=new Set;function Ln(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function Rn(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function zn(e){if(In.add(e),!document.documentElement.classList.contains(`wa-scroll-lock`)){let e=Ln()+Rn(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--wa-scroll-lock-gutter`,t),document.documentElement.classList.add(`wa-scroll-lock`),document.documentElement.style.setProperty(`--wa-scroll-lock-size`,`${e}px`)}}function Bn(e){In.delete(e),In.size===0&&(document.documentElement.classList.remove(`wa-scroll-lock`),document.documentElement.style.removeProperty(`--wa-scroll-lock-size`))}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function Vn(e){return e.split(` `).map(e=>e.trim()).filter(e=>e!==``)}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Hn=class extends Event{constructor(){super(`wa-show`,{bubbles:!0,cancelable:!0,composed:!0})}},Un=class extends Event{constructor(e){super(`wa-hide`,{bubbles:!0,cancelable:!0,composed:!0}),this.detail=e}},Wn=class extends Event{constructor(){super(`wa-after-hide`,{bubbles:!0,cancelable:!1,composed:!0})}},Gn=class extends Event{constructor(){super(`wa-after-show`,{bubbles:!0,cancelable:!1,composed:!0})}},Kn=[];function qn(e){Jn(e),Kn.push(e)}function Jn(e){for(let t=Kn.length-1;t>=0;t--)if(Kn[t]===e){Kn.splice(t,1);break}}function Yn(e){return Kn.length>0&&Kn[Kn.length-1]===e}function Xn(e,t){return new Promise(n=>{let r=new AbortController,{signal:i}=r;if(e.classList.contains(t))return;e.classList.add(t);let a=!1,o=()=>{a||(a=!0,e.classList.remove(t),n(),r.abort())};e.addEventListener(`animationend`,o,{once:!0,signal:i}),e.addEventListener(`animationcancel`,o,{once:!0,signal:i}),requestAnimationFrame(()=>{!a&&e.getAnimations().length===0&&o()})})}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Zn=class extends bt{constructor(){super(...arguments),this.localize=new Ht(this),this.hasSlotController=new Et(this,`footer`,`header-actions`,`label`),this.renderedWatcher=new Pn(this,e=>this.handleRenderedChange(e)),this.open=!1,this.label=``,this.placement=`end`,this.withoutHeader=!1,this.lightDismiss=!1,this.withFooter=!1,this.withLabel=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.open&&Yn(this)&&(e.preventDefault(),e.stopPropagation(),this.requestClose(this.drawer))}}firstUpdated(e){super.firstUpdated(e),this.open&&(this.addOpenListeners(),this.drawer.showModal(),zn(this),this.renderedWatcher.start(this.drawer))}disconnectedCallback(){super.disconnectedCallback(),this.renderedWatcher.stop(),Bn(this),this.removeOpenListeners()}async requestClose(e){let t=new Un({source:e});if(this.dispatchEvent(t),t.defaultPrevented){this.open=!0,Xn(this.drawer,`pulse`);return}this.removeOpenListeners(),await Xn(this.drawer,`hide`),this.open=!1,this.drawer.close(),Bn(this),this.renderedWatcher.stop();let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.dispatchEvent(new Wn)}addOpenListeners(){document.addEventListener(`keydown`,this.handleDocumentKeyDown),qn(this)}removeOpenListeners(){document.removeEventListener(`keydown`,this.handleDocumentKeyDown),Jn(this)}handleDialogCancel(e){e.preventDefault(),!this.drawer.classList.contains(`hide`)&&e.target===this.drawer&&Yn(this)&&this.requestClose(this.drawer)}handleDialogClick(e){let t=e.target.closest(`[data-drawer="close"]`);t&&(e.stopPropagation(),this.requestClose(t))}async handleDialogPointerDown(e){e.target===this.drawer&&!Fn(e,this.drawer)&&(this.lightDismiss?this.requestClose(this.drawer):await Xn(this.drawer,`pulse`))}handleRenderedChange(e){if(!this.open){this.renderedWatcher.stop();return}!e&&this.drawer.open?(this.removeOpenListeners(),this.drawer.close(),Bn(this)):e&&!this.drawer.open&&(this.addOpenListeners(),this.drawer.showModal(),zn(this))}handleOpenChange(){this.open&&!this.drawer.open?this.show():this.drawer.open?(this.open=!0,this.requestClose(this.drawer)):this.open||this.renderedWatcher.stop()}async show(){let e=new Hn;if(this.dispatchEvent(e),e.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),zn(this),this.renderedWatcher.start(this.drawer),requestAnimationFrame(()=>{let e=this.querySelector(`[autofocus]`);e&&typeof e.focus==`function`?e.focus():this.drawer.focus()}),await Xn(this.drawer,`show`),this.dispatchEvent(new Gn)}render(){let e=!this.withoutHeader,t=this.hasSlotController.test(`footer`,`withFooter`),n=this.label.length>0||this.hasSlotController.test(`label`,`withLabel`);return He`
      <dialog
        part="dialog"
        aria-labelledby=${g(e&&n?`title`:void 0)}
        aria-label=${g(!e&&this.label?this.label:void 0)}
        class=${Kt({drawer:!0,open:this.open,top:this.placement===`top`,end:this.placement===`end`,bottom:this.placement===`bottom`,start:this.placement===`start`})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${e?He`
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

        <div part="footer" class="footer" ?hidden=${!t}>
          <slot name="footer"></slot>
        </div>
      </dialog>
    `}};Zn.css=Nn,s([mt(`.drawer`)],Zn.prototype,`drawer`,2),s([h({type:Boolean,reflect:!0})],Zn.prototype,`open`,2),s([h({reflect:!0})],Zn.prototype,`label`,2),s([h({reflect:!0})],Zn.prototype,`placement`,2),s([h({attribute:`without-header`,type:Boolean,reflect:!0})],Zn.prototype,`withoutHeader`,2),s([h({attribute:`light-dismiss`,type:Boolean})],Zn.prototype,`lightDismiss`,2),s([h({attribute:`with-footer`,type:Boolean})],Zn.prototype,`withFooter`,2),s([h({attribute:`with-label`,type:Boolean})],Zn.prototype,`withLabel`,2),s([At(`open`,{waitUntilFirstUpdate:!0})],Zn.prototype,`handleOpenChange`,1),Zn=s([lt(`wa-drawer`)],Zn),document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-drawer]`);if(t instanceof Element){let[e,n]=Vn(t.getAttribute(`data-drawer`)||``);if(e===`open`&&n?.length){let e=t.getRootNode().getElementById(n);e?.localName===`wa-drawer`?e.open=!0:console.warn(`A drawer with an ID of "${n}" could not be found in this document.`)}}}),document.addEventListener(`pointerdown`,()=>{});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var Qn=t({default:()=>Zn}),$n=t({default:()=>v}),er=class extends Event{constructor(){super(`wa-clear`,{bubbles:!0,cancelable:!1,composed:!0})}};
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
function tr(e,t){let n=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!n&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&ar(t)})}var nr=new Map([[`input`,!0],[`wa-input`,!0],[`wa-tag-input`,!0],[`wa-number-input`,!0],[`wa-otp-input`,!0],[`wa-slider`,!0]]),rr=new Map([[`button`,!1],[`checkbox`,!1],[`color`,!1],[`date`,!1],[`datetime-local`,!1],[`email`,!0],[`file`,!1],[`hidden`,!1],[`image`,!1],[`month`,!1],[`number`,!0],[`password`,!0],[`radio`,!1],[`range`,!1],[`reset`,!0],[`search`,!0],[`submit`,!1],[`tel`,!0],[`text`,!0],[`time`,!1],[`url`,!0],[`week`,!1]]),ir=e=>{let t=e?.localName;if(!t||!nr.get(t))return!1;if(t!==`input`&&t!==`wa-input`)return!0;let n=e.type;return!!rr.get(n)};function ar(e){let t=null;if(`form`in e&&(t=e.form),!t&&`getForm`in e&&(t=e.getForm()),!t)return;let n=Array.from(t.elements),r=0;for(let e of n)ir(e)&&(r+=1);if(r===1){t.requestSubmit(null);return}let i=n.find(e=>e.type===`submit`&&!e.matches(`:disabled`));i&&([`input`,`button`].includes(i.localName)?t.requestSubmit(i):i.click())}
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var or=ie`
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
`,sr=ie`
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
*/const cr=Wt(class extends Gt{constructor(e){if(super(e),e.type!==Ut.PROPERTY&&e.type!==Ut.ATTRIBUTE&&e.type!==Ut.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Tn(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Ue||t===m)return t;let n=e.element,r=e.name;if(e.type===Ut.PROPERTY){if(t===n[r])return Ue}else if(e.type===Ut.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return Ue}else if(e.type===Ut.ATTRIBUTE&&n.getAttribute(r)===t+``)return Ue;return Dn(e),t}});
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var y=class extends St{constructor(){super(...arguments),this.assumeInteractionOn=[`blur`,`input`],this.hasSlotController=new Et(this,`hint`,`label`),this.localize=new Ht(this),this.title=``,this.type=`text`,this._value=null,this.defaultValue=this.getAttribute(`value`)||null,this.size=`m`,this.appearance=`outlined`,this.pill=!1,this.label=``,this.hint=``,this.withClear=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,n()]}get value(){return this.valueHasChanged?this._value:this._value??this.defaultValue}set value(e){this._value!==e&&(this.valueHasChanged=!0,this._value=e)}updateFormValue(e){if(e==null){this.setValue(``,null);return}super.updateFormValue(e)}handleSizeChange(){Tt(this.localName,this.size)}handleChange(e){this.value=this.input.value,this.relayNativeEvent(e,{bubbles:!0,composed:!0})}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.updateComplete.then(()=>{this.dispatchEvent(new er),this.dispatchEvent(new InputEvent(`input`,{bubbles:!0,composed:!0})),this.dispatchEvent(new Event(`change`,{bubbles:!0,composed:!0}))})),this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(e){tr(e,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(e){super.updated(e),(e.has(`value`)||e.has(`defaultValue`)||e.has(`type`))&&(this.input&&[`number`,`date`,`time`,`datetime-local`].includes(this.type)&&this.value&&this.input.value!==this.value&&(this._value=this.input.value),this.customStates.set(`blank`,!this.value),this.updateValidity())}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}formResetCallback(){this.value=null,this.input&&(this.input.value=this.value),super.formResetCallback()}render(){let e=this.hasSlotController.test(`label`,`withLabel`),t=this.hasSlotController.test(`hint`,`withHint`),n=this.label?!0:!!e,r=this.hint?!0:!!t,i=this.withClear&&!this.disabled&&!this.readonly,a=(!this.didSSR||this.hasUpdated)&&i&&(typeof this.value==`number`||this.value&&this.value.length>0);return He`
      <label
        part="form-control-label label"
        class=${Kt({label:!0,"has-label":n})}
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
          name=${g(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${g(this.placeholder)}
          minlength=${g(this.minlength)}
          maxlength=${g(this.maxlength)}
          min=${g(this.min)}
          max=${g(this.max)}
          step=${g(this.step)}
          .value=${cr(this.value??``)}
          autocapitalize=${g(this.autocapitalize)}
          autocomplete=${g(this.autocomplete)}
          autocorrect=${this.autocorrect?`on`:`off`}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${g(this.pattern)}
          enterkeyhint=${g(this.enterkeyhint)}
          inputmode=${g(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${a?He`
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
        ${this.passwordToggle&&!this.disabled?He`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                @click=${this.handlePasswordToggle}
              >
                ${this.passwordVisible?He`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:He`
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
        class=${Kt({"has-slotted":r})}
        aria-hidden=${r?`false`:`true`}
        >${this.hint}</slot
      >
    `}};y.css=[Dt,sr,or],y.shadowRootOptions={...St.shadowRootOptions,delegatesFocus:!0},s([mt(`input`)],y.prototype,`input`,2),s([h()],y.prototype,`title`,2),s([h({reflect:!0})],y.prototype,`type`,2),s([ft()],y.prototype,`value`,1),s([h({attribute:`value`,reflect:!0})],y.prototype,`defaultValue`,2),s([h({reflect:!0})],y.prototype,`size`,2),s([At(`size`)],y.prototype,`handleSizeChange`,1),s([h({reflect:!0})],y.prototype,`appearance`,2),s([h({type:Boolean,reflect:!0})],y.prototype,`pill`,2),s([h()],y.prototype,`label`,2),s([h({attribute:`hint`})],y.prototype,`hint`,2),s([h({attribute:`with-clear`,type:Boolean})],y.prototype,`withClear`,2),s([h()],y.prototype,`placeholder`,2),s([h({type:Boolean,reflect:!0})],y.prototype,`readonly`,2),s([h({attribute:`password-toggle`,type:Boolean})],y.prototype,`passwordToggle`,2),s([h({attribute:`password-visible`,type:Boolean})],y.prototype,`passwordVisible`,2),s([h({attribute:`without-spin-buttons`,type:Boolean,reflect:!0})],y.prototype,`withoutSpinButtons`,2),s([h({type:Boolean,reflect:!0})],y.prototype,`required`,2),s([h()],y.prototype,`pattern`,2),s([h({type:Number})],y.prototype,`minlength`,2),s([h({type:Number})],y.prototype,`maxlength`,2),s([h()],y.prototype,`min`,2),s([h()],y.prototype,`max`,2),s([h()],y.prototype,`step`,2),s([h()],y.prototype,`autocapitalize`,2),s([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`off`),toAttribute:e=>e?`on`:`off`}})],y.prototype,`autocorrect`,2),s([h()],y.prototype,`autocomplete`,2),s([h({type:Boolean})],y.prototype,`autofocus`,2),s([h()],y.prototype,`enterkeyhint`,2),s([h({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],y.prototype,`spellcheck`,2),s([h()],y.prototype,`inputmode`,2),s([h({attribute:`with-label`,type:Boolean})],y.prototype,`withLabel`,2),s([h({attribute:`with-hint`,type:Boolean})],y.prototype,`withHint`,2),s([At(`step`,{waitUntilFirstUpdate:!0})],y.prototype,`handleStepChange`,1),y=s([lt(`wa-input`)],y),y.disableWarning?.(`change-in-update`);
/*! Copyright 2026 Fonticons, Inc. - https://webawesome.com/license */
var lr=t({default:()=>y}),b;Object.getOwnPropertyDescriptors||(()=>{var e;if(typeof Reflect<`u`&&Reflect.ownKeys)e=Reflect.ownKeys;else{var t=Object.getOwnPropertySymbols||(e=>[]);e=(e=>Object.getOwnPropertyNames(e).concat(t(e)))}return(t=>{for(var n=e(t),r={},i=n.length|0,a=0;a!==i;){var o=n[a];Object.defineProperty(r,o,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(t,o)}),a=a+1|0}return r})})();var ur;function dr(e){this.c=e}b=dr.prototype,b.toString=(function(){return String.fromCharCode(this.c)});function fr(e){switch(typeof e){case`string`:return Lm.l();case`number`:return Dr(e)?e<<24>>24===e?vp.l():e<<16>>16===e?Dp.l():Am.l():Or(e)?km.l():Om.l();case`boolean`:return bf.l();case`undefined`:return Es.l();default:return e instanceof P?Nm.l():e instanceof dr?Cf.l():e&&e.$classData?e.$classData.l():null}}function pr(e){switch(typeof e){case`string`:return`java.lang.String`;case`number`:return Dr(e)?e<<24>>24===e?`java.lang.Byte`:e<<16>>16===e?`java.lang.Short`:`java.lang.Integer`:Or(e)?`java.lang.Float`:`java.lang.Double`;case`boolean`:return`java.lang.Boolean`;case`undefined`:return`java.lang.Void`;default:return e instanceof P?`java.lang.Long`:e instanceof dr?`java.lang.Character`:e&&e.$classData?e.$classData.N:null.k8()}}function mr(e,t){switch(typeof e){case`string`:return Fm(e,t);case`number`:return Em(e,t);case`boolean`:return vf(e,t);case`undefined`:return Cs(e,t);default:return e&&e.$classData||e===null?e.j(t):e instanceof P?jm(e,t):e instanceof dr?Sf(Ar(e),t):Mr.prototype.j.call(e,t)}}function hr(e){switch(typeof e){case`string`:return Pm(e);case`number`:return Dm(e);case`boolean`:return yf(e);case`undefined`:return ws(e);default:return e&&e.$classData||e===null?e.r():e instanceof P?Mm(e):e instanceof dr?xf(Ar(e)):Mr.prototype.r.call(e)}}function gr(e){return e===void 0?`undefined`:e.toString()}function _r(e,t){if(t===0)throw new _p(`/ by zero`);return e/t|0}function vr(e,t){if(t===0)throw new _p(`/ by zero`);return e%t|0}function yr(e){return e>2147483647?2147483647:e<-2147483648?-2147483648:e|0}function br(e){return String.fromCharCode(e)}function xr(e,t,n,r,i){if(e!==n||r<t||(t+i|0)<r)for(var a=0;a<i;a=a+1|0)n[r+a|0]=e[t+a|0];else for(var a=i-1|0;a>=0;a=a-1|0)n[r+a|0]=e[t+a|0]}var Sr=0,Cr=new WeakMap;function wr(e){switch(typeof e){case`string`:return Pm(e);case`number`:return Dm(e);case`bigint`:var t=0;for(e<BigInt(0)&&(e=~e);e!==BigInt(0);)t^=Number(BigInt.asIntN(32,e)),e>>=BigInt(32);return t;case`boolean`:return e?1231:1237;case`undefined`:return 0;case`symbol`:var n=e.description;return n===void 0?0:Pm(n);default:if(e===null)return 0;var r=Cr.get(e);return r===void 0&&(r=Sr+1|0,Sr=r,Cr.set(e,r)),r}}function Tr(e){return typeof e==`number`&&e<<24>>24===e&&1/e!=-1/0}function Er(e){return typeof e==`number`&&e<<16>>16===e&&1/e!=-1/0}function Dr(e){return typeof e==`number`&&(e|0)===e&&1/e!=-1/0}function Or(e){return typeof e==`number`&&(e!==e||Math.fround(e)===e)}function kr(e){return new dr(e)}kr(0);function Ar(e){return e===null?0:e.c}function jr(e){return e===null?ur:e}function Mr(){}b=Mr.prototype,b.constructor=Mr;function x(){}x.prototype=b,b.r=(function(){return wr(this)}),b.j=(function(e){return this===e}),b.t=(function(){var e=this.r();return pr(this)+`@`+(+(e>>>0)).toString(16)}),b.toString=(function(){return this.t()});function Nr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}b=Nr.prototype=new x,b.constructor=Nr,b.ap=(function(e,t,n,r){xr(this.a,e,t.a,n,r)}),b.ai=(function(){return new Nr(this.a.slice())});function Pr(){}Pr.prototype=b;function Fr(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=!1}else this.a=e}b=Fr.prototype=new x,b.constructor=Fr,b.ap=(function(e,t,n,r){xr(this.a,e,t.a,n,r)}),b.ai=(function(){return new Fr(this.a.slice())});function Ir(e){typeof e==`number`?this.a=new Uint16Array(e):this.a=e}b=Ir.prototype=new x,b.constructor=Ir,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new Ir(this.a.slice())});function Lr(e){typeof e==`number`?this.a=new Int8Array(e):this.a=e}b=Lr.prototype=new x,b.constructor=Lr,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new Lr(this.a.slice())});function Rr(e){typeof e==`number`?this.a=new Int16Array(e):this.a=e}b=Rr.prototype=new x,b.constructor=Rr,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new Rr(this.a.slice())});function zr(e){typeof e==`number`?this.a=new Int32Array(e):this.a=e}b=zr.prototype=new x,b.constructor=zr,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new zr(this.a.slice())});function Br(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=ur}else this.a=e}b=Br.prototype=new x,b.constructor=Br,b.ap=(function(e,t,n,r){xr(this.a,e,t.a,n,r)}),b.ai=(function(){return new Br(this.a.slice())});function Vr(e){typeof e==`number`?this.a=new Float32Array(e):this.a=e}b=Vr.prototype=new x,b.constructor=Vr,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new Vr(this.a.slice())});function Hr(e){typeof e==`number`?this.a=new Float64Array(e):this.a=e}b=Hr.prototype=new x,b.constructor=Hr,b.ap=(function(e,t,n,r){t.a.set(this.a.subarray(e,e+r|0),n)}),b.ai=(function(){return new Hr(this.a.slice())});function S(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E=``,this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N=``,this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}b=S.prototype,b.p=(function(e,t,n,r,i){this.n={},this.z=e,this.E=t;var a=this;return this.F=(e=>e===a),this.N=n,this.X=!0,this.I=(e=>!1),r!==void 0&&(this.A=new S().y(this,r,i)),this}),b.i=(function(e,t,n,r){var i=Object.getOwnPropertyNames(n)[0];return this.n=n,this.E=`L`+t+`;`,this.F=(e=>!!e.n[i]),this.J=e===2,this.N=t,this.Y=e===1,this.I=r||(e=>!!(e&&e.$classData&&e.$classData.n[i])),typeof e!=`number`&&(e.prototype.$classData=this),this}),b.y=(function(e,t,n,r){t.prototype.$classData=this;var i=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=e,this.D=1,this.E=i,this.N=i,this.Z=!0;var a=this;return this.F=r||(e=>a===e),this.w=n?(e=>new t(new n(e))):(e=>new t(e)),this.I=(e=>e instanceof t),this}),b.a=(function(e){function t(e){if(typeof e==`number`){this.a=Array(e);for(var t=0;t<e;t++)this.a[t]=null}else this.a=e}var n=t.prototype=new Pr;n.constructor=t,n.ap=(function(e,t,n,r){xr(this.a,e,t.a,n,r)}),n.ai=(function(){return new t(this.a.slice())}),n.$classData=this;var r=e.B||e,i=e.D+1,a=`[`+e.E;this.C=t,this.n={u:1,a:1},this.O=e,this.B=r,this.D=i,this.E=a,this.N=a,this.Z=!0;var o=(e=>{var t=e.D;return t===i?r.F(e.B):t>i&&r===Ur});this.F=o,this.w=(e=>new t(e));var s=this;return this.I=(e=>{var t=e&&e.$classData;return!!t&&(t===s||o(t))}),this}),b.r=(function(){return this.A||=new S().a(this),this.A}),b.l=(function(){return this.L||=new vd(this),this.L}),b.R=(function(e){return this===e||this.F(e)}),b.S=(function(){return this.P?this.P.l():null}),b.Q=(function(){return this.O?this.O.l():null}),b.U=(function(e){if(this===Wr)throw bp(new xp);return new(this.r()).C(e)});var Ur=new S;Ur.n={},Ur.E=`Ljava.lang.Object;`,Ur.F=(e=>!e.X),Ur.N=`java.lang.Object`,Ur.I=(e=>e!==null),Ur.A=new S().y(Ur,Nr,void 0,(e=>{var t=e.D;return t===1?!e.B.X:t>1})),Mr.prototype.$classData=Ur;var Wr=new S().p(void 0,`V`,`void`,void 0,void 0);new S().p(!1,`Z`,`boolean`,Fr,void 0);var Gr=new S().p(0,`C`,`char`,Ir,Uint16Array);new S().p(0,`B`,`byte`,Lr,Int8Array),new S().p(0,`S`,`short`,Rr,Int16Array),new S().p(0,`I`,`int`,zr,Int32Array);var Kr=new S().p(null,`J`,`long`,Br,void 0);new S().p(0,`F`,`float`,Vr,Float32Array),new S().p(0,`D`,`double`,Hr,Float64Array);var qr=new S().i(1,`com.raquo.airstream.core.InternalObserver`,{am:1});function Jr(e){return fr(e).dq()+`@`+e.r()}function Yr(e){var t=e.cA();return t===void 0?e.cv():t}function Xr(){this.dE=null,Qr=this,this.dE=$r().dB(new Y((e=>void 0)),Xs().cn,!0)}b=Xr.prototype=new x,b.constructor=Xr;function Zr(){}Zr.prototype=b,b.dB=(function(e,t,n){return new tf(e,n,t,this)}),new S().i(Xr,`com.raquo.airstream.core.Observer$`,{bp:1});var Qr;function $r(){return Qr||=new Xr,Qr}function ei(){}b=ei.prototype=new x,b.constructor=ei;function ti(){}ti.prototype=b,b.gJ=(function(e,t){var n=e.indexOf(t)|0,r=n!==-1;return r&&e.splice(n,1),r}),new S().i(ei,`com.raquo.airstream.core.ObserverList$`,{br:1});var ni;function ri(){return ni||=new ei,ni}function ii(e){this.cG=null,this.dI=null,this.cH=0,this.cG=e,this.dI=void 0;var t=wi().bX();this.cH=t===void 0?1:1+t.cH|0,ui().bZ===-1||this.cH>ui().bZ?Eu().ao(new bm(this,ui().bZ)):hi().C?hi().aJ.push(this)|0:wi().dj(this)}b=ii.prototype=new x,b.constructor=ii;function ai(){}ai.prototype=b;var oi=new S().i(ii,`com.raquo.airstream.core.Transaction`,{bs:1});function si(){this.bZ=0,this.dJ=null,li=this,this.bZ=1e3,this.dJ=new Y((e=>{throw W(new G,`Attempted to run Transaction `+e+` after it was already executed.`)}))}b=si.prototype=new x,b.constructor=si;function ci(){}ci.prototype=b,b.gj=(function(e){try{e.cG.g(e);var t=e.dI;if(t!==void 0)for(;t.kd();)t.k2().kh(e)}catch(e){var n=e instanceof Vl?e:new $(e);Eu().ao(n)}}),new S().i(si,`com.raquo.airstream.core.Transaction$`,{bt:1});var li;function ui(){return li||=new si,li}function di(e){e.c0.length|0?new ii(new Y((t=>{for(;(e.c0.length|0)>0;){var n=e.c0.shift();try{n.g(t)}catch(e){var r=e instanceof Vl?e:new $(e);Eu().ao(r)}}for(;(e.aJ.length|0)>0;){var i=e.aJ.shift();wi().dj(i)}}))):(e.aJ.length|0)>0&&new ii(new Y((t=>{for(;(e.aJ.length|0)>0;)wi().dj(e.aJ.shift())})))}function fi(){this.C=!1,this.c0=null,this.aJ=null,mi=this,this.C=!1,this.c0=C().B(I().b(new(F.r()).C([]))),this.aJ=C().B(I().b(new(oi.r()).C([])))}b=fi.prototype=new x,b.constructor=fi;function pi(){}pi.prototype=b,new S().i(fi,`com.raquo.airstream.core.Transaction$onStart$`,{bu:1});var mi;function hi(){return mi||=new fi,mi}function gi(e,t){return e.aK.get(t)}function _i(e,t){e.c1.unshift(t)}function vi(e){return e.c1.shift()}function yi(e,t,n){var r=gi(e,t),i=r===void 0,a=r===void 0?C().B(I().b(new(oi.r()).C([]))):r;a.push(n),i&&e.aK.set(t,a)}function bi(e,t){var n=gi(e,t),r=n===void 0||(n.length|0)>0?n:void 0;if(r!==void 0){var i=r.shift();return r.length|0||e.aK.delete(t),i}}function xi(){this.c1=null,this.aK=null,Ci=this,this.c1=C().B(I().b(new(oi.r()).C([]))),this.aK=new Map}b=xi.prototype=new x,b.constructor=xi;function Si(){}Si.prototype=b,b.dj=(function(e){var t=this.bX();t===void 0?(_i(this,e),ui().gj(e),this.hL(e)):yi(this,t,e)}),b.hL=(function(e){for(var t=e;;){var n=this.bX(),r=t;if(!(n!==void 0&&pc().S(r,n)))throw W(new G,`Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.`);this.j8(t),t.cG=ui().dJ;var i=this.bX();if(pc().S(i,void 0))if((this.aK.size|0)>0){var a=new _u(0);throw this.aK.forEach((e=>((t,n)=>{e.bF=e.bF+(t.length|0)|0}))(a)),W(new G,`Transaction queue error: Stack cleared, but a total of `+a.bF+` children for `+(this.aK.size|0)+` transactions remain. This is a bug in Airstream.`)}else return;else ui().gj(i),t=i}}),b.j8=(function(e){for(var t=e;;){var n=bi(this,t);if(pc().S(n,void 0)){vi(this);var r=this.bX();if(!pc().S(r,void 0))t=r;else return}else{_i(this,n);return}}}),b.bX=(function(){return this.c1[0]}),new S().i(xi,`com.raquo.airstream.core.Transaction$pendingTransactions$`,{bv:1});var Ci;function wi(){return Ci||=new xi,Ci}function Ti(){}b=Ti.prototype=new x,b.constructor=Ti;function Ei(){}Ei.prototype=b,new S().i(Ti,`com.raquo.airstream.eventbus.EventBus$`,{bz:1});var Di;function Oi(){return Di||=new Ti,Di}function ki(e,t){var n=e.aq.indexOf(t)|0;if(n!==-1)e.aq.splice(n,1),e.X.h()||t.gC();else throw W(new G,`Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?`)}function Ai(e){for(;(e.c6.length|0)>0;)ki(e,e.c6.shift())}function ji(e){this.dR=null,this.aq=null,this.b1=!1,this.c6=null,this.X=null,this.b2=0,this.dR=e,this.aq=C().B(I().b(new(Fi.r()).C([]))),this.b1=!0,this.c6=C().B(I().b(new(Fi.r()).C([]))),this.X=Z(),this.b2=0}b=ji.prototype=new x,b.constructor=ji;function Mi(){}Mi.prototype=b,b.g2=(function(){if(this.X.h()){var e=hi(),t=(()=>{var e=new zc(this.dR);this.X=new Q(e),this.b1=!1,this.b2=0;for(var t=0,n=this.aq.length|0;t<n;){var r=t+this.b2|0;this.aq[r].gB(e),t=1+t|0}Ai(this),this.b1=!0,this.b2=0});if(hi(),e.C)t();else{e.C=!0;try{t()}finally{e.C=!1,di(e)}}}else throw W(new G,`Can not activate `+this+`: it is already active`)}),b.hH=(function(){if(this.X.h())throw W(new G,`Can not deactivate DynamicOwner: it is not active`);this.b1=!1;for(var e=this.aq,t=0,n=e.length|0;t<n;)e[t].gC(),t=1+t|0;Ai(this);var r=this.X;r.h()||r.y().iy(),Ai(this),this.b1=!0,this.X=Z()}),b.hg=(function(e,t){t?(this.b2=1+this.b2|0,this.aq.unshift(e)):this.aq.push(e);var n=this.X;if(!n.h()){var r=n.y();e.gB(r)}}),b.je=(function(e){this.b1?ki(this,e):this.c6.push(e)}),new S().i(ji,`com.raquo.airstream.ownership.DynamicOwner`,{bC:1});function Ni(e,t,n){this.c7=null,this.dS=null,this.c8=null,this.c7=e,this.dS=t,this.c8=Z(),e.hg(this,n)}b=Ni.prototype=new x,b.constructor=Ni;function Pi(){}Pi.prototype=b,b.cz=(function(){this.c7.je(this)}),b.gB=(function(e){var t=hi(),n=(()=>{this.c8=this.dS.g(e)});if(hi(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,di(t)}}}),b.gC=(function(){var e=this.c8;e.h()||(e.y().cz(),this.c8=Z())});var Fi=new S().i(Ni,`com.raquo.airstream.ownership.DynamicSubscription`,{bD:1});function Ii(){}b=Ii.prototype=new x,b.constructor=Ii;function Li(){}Li.prototype=b,b.cD=(function(e,t,n){return new Ni(e,new Y((e=>new Q(t.g(e)))),n)}),b.gN=(function(e,t,n){return new Ni(e,new Y((e=>(t.g(e),Z()))),n)}),b.jt=(function(e,t,n){return zi().cD(e,new Y((e=>Ou(t,n,e))),!1)}),new S().i(Ii,`com.raquo.airstream.ownership.DynamicSubscription$`,{bE:1});var Ri;function zi(){return Ri||=new Ii,Ri}function Bi(e){e.b3=C().B(I().b(new(qi.r()).C([])))}function Vi(e){for(var t=e.b3,n=0,r=t.length|0;n<r;)Wi(t[n]),n=1+n|0;e.b3.length=0}function Hi(e,t){var n=e.b3.indexOf(t)|0;if(n!==-1)e.b3.splice(n,1);else throw W(new G,`Can not remove Subscription from Owner: subscription not found.`)}function Ui(e,t){e.b3.push(t)}function Wi(e){if(!e.cJ)e.dU.aa(),e.cJ=!0;else throw W(new G,`Can not kill Subscription: it was already killed.`)}function Gi(e,t){this.dV=null,this.dU=null,this.cJ=!1,this.dV=e,this.dU=t,this.cJ=!1,e.j3(this)}b=Gi.prototype=new x,b.constructor=Gi;function Ki(){}Ki.prototype=b,b.cz=(function(){Wi(this),Hi(this.dV,this)});var qi=new S().i(Gi,`com.raquo.airstream.ownership.Subscription`,{bH:1});function Ji(e,t){this.dW=null,this.dX=null,this.ar=null,this.aL=!1,this.dW=e,this.dX=t,this.ar=Z(),this.aL=!1}b=Ji.prototype=new x,b.constructor=Ji;function Yi(){}Yi.prototype=b,b.iu=(function(){var e=this.ar;return!e.h()&&!e.y().c7.X.h()}),b.jl=(function(e){if(this.aL)throw W(new G,`Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var t=this.ar;if(t.h())var n=!1;else var n=e===t.y().c7;if(!n){this.iu()&&!e.X.h()&&(this.aL=!0);var r=this.ar;r.h()||(r.y().cz(),this.ar=Z()),this.ar=new Q(zi().cD(e,new Y((e=>(this.aL||this.dW.aa(),new Gi(e,new zf((()=>{this.aL||this.dX.aa()})))))),!1)),this.aL=!1}}),b.hz=(function(){if(this.aL)throw W(new G,`Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.`);var e=this.ar;e.h()||e.y().cz(),this.ar=Z()}),new S().i(Ji,`com.raquo.airstream.ownership.TransferableSubscription`,{bI:1});function Xi(){}b=Xi.prototype=new x,b.constructor=Xi;function Zi(){}Zi.prototype=b,b.B=(function(e){return[...Mc().jz(e)]}),new S().i(Xi,`com.raquo.ew.JsArray$`,{bJ:1});var Qi;function C(){return Qi||=new Xi,Qi}function $i(){}b=$i.prototype=new x,b.constructor=$i;function ea(){}ea.prototype=b,b.iq=(function(e,t,n){return(e.indexOf(t,n)|0)!=-1}),b.i7=(function(e,t){for(var n=0,r=e.length|0;n<r;)t(e[n]),n=1+n|0}),new S().i($i,`com.raquo.ew.JsArray$RichJsArray$`,{bK:1});var ta;function na(){return ta||=new $i,ta}function ra(){this.dY=null,aa=this,document.createElement(`template`),this.hF(J().d.ju().jv()),this.dY=RegExp(` `,`g`)}b=ra.prototype=new x,b.constructor=ra;function ia(){}ia.prototype=b,b.hl=(function(e,t){try{return e.appendChild(t),!0}catch(e){var n=e instanceof Vl?e:new $(e);if(n instanceof $&&n.a8 instanceof DOMException)return!1;throw n instanceof $?n.a8:n}}),b.iw=(function(e,t){for(var n=e;;){if(n.parentNode!==null)var r=n.parentNode;else var i=n.host,r=i===void 0?null:i;if(r===null)return!1;if(pc().S(t,r))return!0;n=r}}),b.he=(function(e,t){e.addEventListener(t.b6.b4.ce,t.cQ,t.cR)}),b.jc=(function(e,t){e.removeEventListener(t.b6.b4.ce,t.cQ,t.cR)}),b.hE=(function(e){return document.createElement(e.dt())}),b.id=(function(e,t){var n=this.ie(e,t);return n===void 0?void 0:t.b5.cu(n)}),b.ie=(function(e,t){var n=e.I.getAttributeNS(null,t.as);return n===null?void 0:n}),b.dA=(function(e,t,n){this.ji(e,t,t.b5.bS(n))}),b.ji=(function(e,t,n){n===null?this.jd(e,t):e.I.setAttribute(t.as,n)}),b.jd=(function(e,t){e.I.removeAttribute(t.as)}),b.jj=(function(e,t,n){this.jk(e,t,t.eA.bS(n))}),b.jk=(function(e,t,n){e.I[t.at]=n}),b.gL=(function(e,t,n){var r=e.I,i=t.cf,a=t.cg,o=n===null?null:n;o===null?(a.aj(new Y((e=>r.style.removeProperty(``+e+i)))),r.style.removeProperty(i)):(a.aj(new Y((e=>{r.style.setProperty(``+e+i,o)}))),r.style.setProperty(i,o))}),b.hF=(function(e){return document.createElementNS(`http://www.w3.org/2000/svg`,e.eS)}),b.ii=(function(e,t){var n=this.ij(e,t);return n===void 0?void 0:t.cO.cu(n)}),b.ij=(function(e,t){var n=e.dy(),r=t.ci,i=n.getAttributeNS(r.h()?null:r.y(),t.cP);return i===null?void 0:i}),b.jm=(function(e,t,n){this.jn(e,t,t.cO.bS(n))}),b.jn=(function(e,t,n){if(n===null)this.jf(e,t);else{var r=t.ci;if(r.h())e.dy().setAttribute(t.ch,n);else{var i=r.y();e.dy().setAttributeNS(i,t.ch,n)}}}),b.jf=(function(e,t){var n=e.dy(),r=t.ci;n.removeAttributeNS(r.h()?null:r.y(),t.cP)}),b.hG=(function(e){return document.createTextNode(e)}),b.iv=(function(e){return lc().hC(e.tagName,45)}),b.hI=(function(e,t){for(var n=t,r=e;;){if(r===null)return n;var i=r.parentNode,a=new p_(this.gl(r),n);r=i,n=a}}),b.gl=(function(e){if(e instanceof HTMLElement){var t=e.id;if(t!==``)var n=`#`+t;else var r=e.className,n=r===``?``:`.`+r.replace(this.dY,`.`);return e.tagName.toLowerCase()+n}else return e.nodeName}),new S().i(ra,`com.raquo.laminar.DomApi$`,{bL:1});var aa;function w(){return aa||=new ra,aa}function oa(e,t,n){this.cL=null,this.dZ=null,this.cK=null,this.cL=e,this.dZ=t,this.cK=n}b=oa.prototype=new x,b.constructor=oa;function sa(){}sa.prototype=b,b.aj=(function(e){this.cL===null?this.cK===null?ec().i8(this.dZ,e):na().i7(this.cK,Kd().ib(e)):this.cL.aj(e)}),new S().i(oa,`com.raquo.laminar.Seq`,{bM:1});function ca(){}b=ca.prototype=new x,b.constructor=ca;function la(){}la.prototype=b,new S().i(ca,`com.raquo.laminar.Seq$`,{bN:1});var ua;function da(){return ua||=new ca,ua}function fa(e){e.cM=$r(),Eu(),e.gU=Oi()}function pa(e){e.gV=Qa()}function ma(e){ha(e,new Y((e=>{e.eC.I.focus()})))}function ha(e,t){return new ol(new Y((e=>{var n=new hu(!e.ah.X.h()),r=new Y((e=>{n.cr?n.cr=!1:t.g(e)}));zi().gN(e.ah,new Y((e=>(t=>{r.g(new qa(e,t))}))(e)),!1)})),Qa())}function ga(){this.a6=null,this.es=null,this.bv=null,va=this,this.a6=new Uc(T()),new Uc(T()),this.es=new Uc(T()),this.bv=new Vc}b=ga.prototype=new x,b.constructor=ga;function _a(){}_a.prototype=b,new S().i(ga,`com.raquo.laminar.codecs.package$`,{bV:1});var va;function T(){return va||=new ga,va}function ya(e){e.gW=xa(e,`class`,` `)}function ba(e,t){return Zc(new Qc,`data-`+t,T().a6)}function xa(e,t,n){var r=Zc(new Qc,t,T().a6);return new Kc(r.as,new Y((e=>{var t=w().id(e,r);return t===void 0?``:t})),new Hf(((e,t)=>{w().dA(e,r,t)})),n)}function Sa(e){e.gT=Ca(e,`class`,` `)}function Ca(e,t,n){var r=new nl(t,T().a6,Z());return new Kc(r.ch,new Y((e=>{var t=w().ii(e,r);return t===void 0?``:t})),new Hf(((e,t)=>{w().jm(e,r,t)})),n)}function wa(){this.ex=null,Ea=this,J().d.gQ(),C().B(I().b(new(Xc.r()).C([J().d.dv()]))),J().d.gQ(),C().B(I().b(new(Xc.r()).C([J().d.dv(),J().d.iV()]))),J().d.hy(),C().B(I().b(new(Xc.r()).C([J().d.dv(),J().d.bV()]))),this.ex=C().B(I().b(new(Lm.r()).C([`value`,`checked`])))}b=wa.prototype=new x,b.constructor=wa;function Ta(){}Ta.prototype=b,new S().i(wa,`com.raquo.laminar.inputs.InputController$`,{ca:1});var Ea;function Da(){return Ea||=new wa,Ea}function Oa(e){this.c9=null,this.c9=e}b=Oa.prototype=new x,b.constructor=Oa;function ka(){}ka.prototype=b,b.gE=(function(e,t){try{this.c9.dl(e,t)}catch(e){var n=e instanceof Vl?e:new $(e);Eu().ao(n)}}),b.hA=(function(e){return new Oa(new Hf(((t,n)=>{this.c9.dl(t,n),e.c9.dl(t,n)})))}),b.hm=(function(e){return e===void 0?this:e.hA(this)}),new S().i(Oa,`com.raquo.laminar.inserters.InserterHooks`,{cd:1});function Aa(){}b=Aa.prototype=new x,b.constructor=Aa;function ja(){}ja.prototype=b,b.L=(function(e,t){return new ip(e,void 0)}),new S().i(Aa,`com.raquo.laminar.inserters.StaticChildInserter$`,{cf:1});var Ma;function E(){return Ma||=new Aa,Ma}function Na(e,t){this.ez=null,this.ey=null,this.ez=e,this.ey=t}b=Na.prototype=new x,b.constructor=Na;function Pa(){}Pa.prototype=b,b.l=(function(e){return new Lu(this.ez,this.ey.g(e),new Wf(((e,t,n)=>{w().gL(e,t,n)})))}),new S().i(Na,`com.raquo.laminar.keys.DerivedStyleProp`,{ci:1});function Fa(e,t,n,r){this.b4=null,this.cd=!1,this.cc=!1,this.cb=null,this.b4=e,this.cd=t,this.cc=n,this.cb=r}b=Fa.prototype=new x,b.constructor=Fa;function Ia(){}Ia.prototype=b,b.iC=(function(e){var t=new Y((t=>{var n=this.cb.g(t);return n.h()?Z():new Q(e.g(n.y()))}));return new Fa(this.b4,this.cd,this.cc,t)}),b.ds=(function(e){var t=new Y((t=>{var n=this.cb.g(t);return n.h()?Z():new Q((n.y(),e.aa()))}));return new Fa(this.b4,this.cd,this.cc,t)}),new S().i(Fa,`com.raquo.laminar.keys.EventProcessor`,{cj:1});function La(){}b=La.prototype=new x,b.constructor=La;function Ra(){}Ra.prototype=b,b.bR=(function(e,t,n){return new Fa(e,t,n,new Y((e=>new Q(e))))}),new S().i(La,`com.raquo.laminar.keys.EventProcessor$`,{ck:1});var za;function Ba(){return za||=new La,za}function Va(){}b=Va.prototype=new x,b.constructor=Va;function Ha(){}Ha.prototype=b;function Ua(){this.gX=null,this.gY=null,this.gZ=null,this.h0=null,this.gX=`http://www.w3.org/2000/svg`,this.gY=`http://www.w3.org/1999/xlink`,this.gZ=`http://www.w3.org/XML/1998/namespace`,this.h0=`http://www.w3.org/2000/xmlns/`}b=Ua.prototype=new x,b.constructor=Ua;function Wa(){}Wa.prototype=b,b.iH=(function(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`xlink`:return`http://www.w3.org/1999/xlink`;case`xml`:return`http://www.w3.org/XML/1998/namespace`;case`xmlns`:return`http://www.w3.org/2000/xmlns/`;default:throw new Ip(e)}}),new S().i(Ua,`com.raquo.laminar.keys.SvgAttr$`,{cn:1});var Ga;function Ka(){return Ga||=new Ua,Ga}function qa(e,t){this.eC=null,this.eB=null,this.eC=e,this.eB=t}b=qa.prototype=new x,b.constructor=qa;function Ja(){}Ja.prototype=b,new S().i(qa,`com.raquo.laminar.lifecycle.MountContext`,{co:1});var D=new S().i(1,`com.raquo.laminar.modifiers.Modifier`,{Q:1});function Ya(){this.h1=null,Za=this,this.h1=new il}b=Ya.prototype=new x,b.constructor=Ya;function Xa(){}Xa.prototype=b,new S().i(Ya,`com.raquo.laminar.modifiers.Modifier$`,{cs:1});var Za;function Qa(){return Za||=new Ya,Za}function $a(){this.F=null,to=this,this.F=new cl}b=$a.prototype=new x,b.constructor=$a;function eo(){}eo.prototype=b,new S().i($a,`com.raquo.laminar.modifiers.RenderableNode$`,{cw:1});var to;function O(){return to||=new $a,to}function no(){this.o=null,io=this,this.o=new pl(new Y((e=>e)),k()),new pl(new Y((e=>``+(e|0))),k()),new pl(new Y((e=>``+ +e)),k()),new pl(new Y((e=>``+!!e)),k()),new pl(new Y((e=>e.jy())),k())}b=no.prototype=new x,b.constructor=no;function ro(){}ro.prototype=b,new S().i(no,`com.raquo.laminar.modifiers.RenderableText$`,{cB:1});var io;function k(){return io||=new no,io}function ao(){}b=ao.prototype=new x,b.constructor=ao;function oo(){}oo.prototype=b,b.ct=(function(e,t,n){var r=new Q(e);t.gS(r),n!==void 0&&n.gE(e,t);var i=w().hl(e.aY(),t.aY());return i&&t.gM(r),i}),new S().i(ao,`com.raquo.laminar.nodes.ParentNode$`,{cE:1});var so;function co(){return so||=new ao,so}function lo(){}b=lo.prototype=new x,b.constructor=lo;function uo(){}uo.prototype=b,b.jD=(function(e,t){return zi().cD(e.ah,new Y((n=>t.g(new qa(e,n)))),!0)}),new S().i(lo,`com.raquo.laminar.nodes.ReactiveElement$`,{cG:1});var fo;function po(){return fo||=new lo,fo}function mo(e){this.eO=null,this.eO=new Oa(new Hf(((t,n)=>{matchResult1:{var r=n.aY();if(r instanceof Element){r.setAttribute(`slot`,e);break matchResult1}if(r instanceof Text){var i=Eu(),a=r.textContent,o=t.aY().tagName;i.ao(W(new G,"Error: You tried to insert a raw text node `"+a+"` into the `"+e+"` slot of <"+o.toLowerCase()+`>.
 - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.
 - Suggestion: Wrap your text node into \`span()\``));break matchResult1}}})))}b=mo.prototype=new x,b.constructor=mo;function ho(){}ho.prototype=b,b.J=(function(e){return e.gA(new Y((e=>e.jE(this.eO))))}),new S().i(mo,`com.raquo.laminar.nodes.Slot`,{cJ:1});function go(){vo=this,C().B(I().jG(new zr(new Int32Array([0]))))}b=go.prototype=new x,b.constructor=go;function _o(){}_o.prototype=b,b.hc=(function(){return new Y((e=>void 0))}),new S().i(go,`com.raquo.laminar.tags.CustomHtmlTag$`,{cL:1});var vo;function yo(){return vo||=new go,vo}function bo(){}b=bo.prototype=new x,b.constructor=bo;function xo(){}xo.prototype=b,b.hi=(function(){A().hR(),A().hX(),A().hY(),A().hZ(),A().i0(),A().i1(),A().i2(),A().i3(),A().i4(),A().hS(),A().hT(),A().hU(),A().hV(),A().hW()}),b.hR=(function(){var e=document.querySelector(`#example1`);if(!au().O(e).h()){J(),J();var t=new np;new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([])),I().b(new(D.r()).C([new Pu((J(),Ba().bR(J().d.bV(),!1,!1)).ds(new zd((()=>!0))),new Y((e=>{t.br.aX(e)}))),B(J().d,`Open Drawer`,k().o)])))]))))}}),b.hX=(function(){var e=document.querySelector(`#example2`);if(!au().O(e).h()){J(),J();var t=new np;new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.H().l(`Drawer`))),new q((e=>e.jF().l(!0))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([])),I().b(new(D.r()).C([new Pu((J(),Ba().bR(J().d.bV(),!1,!1)).ds(new zd((()=>!0))),new Y((e=>{t.br.aX(e)}))),B(J().d,`Open Drawer`,k().o)])))]))))}}),b.hY=(function(){var e=document.querySelector(`#example3`);if(!au().O(e).h()){J(),J();var t=new np;new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.dw().di(t))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([])),I().b(new(D.r()).C([new Pu((J(),Ba().bR(J().d.bV(),!1,!1)).ds(new zd((()=>!0))),new Y((e=>{t.br.aX(e)}))),B(J().d,`Open Drawer`,k().o)])))]))))}}),b.hZ=(function(){var e=document.querySelector(`#example4`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-opening`))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-opening`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.i0=(function(){var e=document.querySelector(`#example5`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-dismiss`))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-dismiss`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.i1=(function(){var e=document.querySelector(`#example6`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-placement-start`))),new q((e=>e.dx().jq())),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer slides in from the start.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-placement-start`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.i2=(function(){var e=document.querySelector(`#example7`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-placement-top`))),new q((e=>e.dx().jB())),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer slides in from the top.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-placement-top`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.i3=(function(){var e=document.querySelector(`#example8`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-placement-bottom`))),new q((e=>e.dx().hw())),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer slides in from the bottom.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-placement-bottom`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.i4=(function(){var e=document.querySelector(`#example9`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-custom-size`))),new q((e=>e.H().l(`Drawer`))),new q((e=>e.jr().l(`--size: 50%`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer is always 50% of the viewport.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-custom-size`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.hS=(function(){var e=document.querySelector(`#example10`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-scrolling`))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([J().d.K().D(I().b(new(D.r()).C([J().d.io().gR().l(150),J().d.hv().l(`2px dashed var(--wa-color-surface-border)`),J().d.j5().l(`0 1rem`),J().d.j4().D(I().b(new(D.r()).C([B(J().d,`Scroll down and give it a try! 👇`,k().o)])))])))]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-scrolling`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.hT=(function(){var e=document.querySelector(`#example11`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-header-actions`))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().im().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.hj().j7()))])),I().b(new(D.r()).C([new Pu((J(),Ba().bR(J().d.bV(),!1,!1)),new Y((e=>(t=>{e.aX(t)}))(J().d.cM.dB(new q((e=>{window.open(window.location.href)})),Xs().cn,!0)))),fd().m(I().b(new(F.r()).C([new q((e=>e.iG().l(`arrow-up-right-from-square`))),new q((e=>e.H().l(`Open in new window`)))])),I().b(new(D.r()).C([])))]))),O().F))]))),Gl().G,R()))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-header-actions`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.hU=(function(){var e=document.querySelector(`#example12`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-light-dismiss`))),new q((e=>e.iz().l(!0))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer closes when the user clicks on the overlay.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-light-dismiss`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),b.hV=(function(){var e=document.querySelector(`#example13`);if(!au().O(e).h()){J();var t=U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Only this button will close it`,k().o)])));new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-deny-close`))),new q((e=>e.H().l(`Drawer`))),new q((e=>new Pu((J(),Ba().bR(e.iX(),!1,!1)).iC(new q((e=>{pc().S(e.detail.source,t.I)||e.preventDefault()}))),new Y((e=>(t=>{e.aX(t)}))(J().d.cM.dE))))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(t,O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([B(J().d,`This drawer will only close when you click the button below.`,k().o)]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-deny-close`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))]))))}}),b.hW=(function(){var e=document.querySelector(`#example14`);au().O(e).h()||(J(),new H(e,J().d.K().D(I().b(new(D.r()).C([cd().m(I().b(new(F.r()).C([new q((e=>e.ae().l(`drawer-autofocus`))),new q((e=>e.H().l(`Drawer`))),new q((e=>V(J().d,j().T().J(I().b(new(X.r()).C([(J(),E().L(U().m(I().b(new(F.r()).C([new q((e=>e.W().P())),new q((e=>e.Q().R()))])),I().b(new(D.r()).C([B(J().d,`Close`,k().o)]))),O().F))]))),Gl().G,R())))])),I().b(new(D.r()).C([gd().m(I().b(new(F.r()).C([new q((e=>e.hr().l(!0))),new q((e=>e.j6().l(`I will have focus when the drawer is opened`)))])),I().b(new(D.r()).C([])))]))),U().m(I().b(new(F.r()).C([new q((e=>ko(e.af(),`drawer`,`drawer-autofocus`)))])),I().b(new(D.r()).C([B(J().d,`Open Drawer`,k().o)])))])))))}),new S().i(bo,`examples.drawer.Main$package$`,{cN:1});var So;function A(){return So||=new bo,So}function Co(e){try{A().hi()}catch(e){throw e}}function wo(e,t){return ba(J().d,t).l(`close`)}function To(){this.fb=null,this.fc=!1}b=To.prototype=new x,b.constructor=To;function Eo(){}Eo.prototype=b,b.R=(function(){return this.fc||=(this.fb=wo(this,`drawer`),!0),this.fb}),new S().i(To,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$`,{cS:1});var Do;function Oo(){return Do||=new To,Do}function ko(e,t,n){return ba(J().d,t).l(`open `+n)}function Ao(){}b=Ao.prototype=new x,b.constructor=Ao;function jo(){}jo.prototype=b,new S().i(Ao,`io.github.nguyenyou.webawesome.laminar.CustomKeys$Open$`,{cT:1});var Mo;function No(){return Mo||=new Ao,Mo}function Po(){this.fr=null,this.fs=!1,this.fp=null,this.fq=!1}b=Po.prototype=new x,b.constructor=Po;function Fo(){}Fo.prototype=b,b.im=(function(){return this.fs||=(this.fr=new mo(`header-actions`),!0),this.fr}),b.T=(function(){return this.fq||=(this.fp=new mo(`footer`),!0),this.fp}),new S().i(Po,`io.github.nguyenyou.webawesome.laminar.Drawer$slots$`,{cV:1});var Io;function j(){return Io||=new Po,Io}function Lo(){this.h3=!1,this.bw=null,this.ck=null,this.fB=null,this.cZ=!1,this.h2=0,this.h5=0,this.h4=null,zo=this,this.h3=!0,this.bw=new ArrayBuffer(8),this.ck=new Int32Array(this.bw,0,2),new Float32Array(this.bw,0,2),this.fB=new Float64Array(this.bw,0,1),this.ck[0]=16909060,this.cZ=(new Int8Array(this.bw,0,8)[0]|0)==1,this.h2=this.cZ?0:1,this.h5=this.cZ?1:0,this.h4=null}b=Lo.prototype=new x,b.constructor=Lo;function Ro(){}Ro.prototype=b,b.du=(function(e){var t=e|0;return t===e&&1/e!=-1/0?t:(this.fB[0]=e,(this.ck[0]|0)^(this.ck[1]|0))}),new S().i(Lo,`java.lang.FloatingPointBits$`,{d7:1});var zo;function Bo(){return zo||=new Lo,zo}function Vo(e,t){for(var n=M().ag(`^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$`),r=[],i=0;i<(t.length|0);){var a=t[i];if(a!==``){var o=n.exec(a);if(o!==null){var s=Ho(e,o[1]),c=s[0],l=s[1],u=o[2],d=o[3],f=parseInt(d),p=o[4];r.push(new Nl(c,l,u,f|0,p===void 0?-1:parseInt(p)|0))}else r.push(new Nl(`<jscode>`,a,null,-1,-1))|0}i=1+i|0}var ee=r.length|0,te=new(Fl.r()).C(ee);for(i=0;i<ee;)te.a[i]=r[i],i=1+i|0;return te}function Ho(e,t){var n=M().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$`),r=M().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$`),i=M().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$`),a=M().ag(`^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$`),o=M().ag(`^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$`),s=n.exec(t),c=s===null?r.exec(t):s;if(c!==null)return[Uo(e,c[1]),Xo(e,c[2])];var l=i.exec(t),u=l===null?a.exec(t):l;if(u!==null)return[Uo(e,u[1]),`<init>`];var d=o.exec(t);return d===null?[`<jscode>`,t]:[Uo(e,d[1]),`<clinit>`]}function Uo(e,t){var n=Go(e);if(Ss().fH.call(n,t))var r=Go(e)[t];else var r=ss(e,0,t);return r.split(`_`).join(`.`).split(`＿`).join(`_`)}function Wo(e){if(!((1&e.a2)<<24>>24)){var t={};t.O=`java_lang_Object`,t.T=`java_lang_String`;for(var n=0;n<=22;){if(n>=2){var r=`T`+n;t[r]=`scala_Tuple`+n}var i=`F`+n;t[i]=`scala_Function`+n,n=1+n|0}e.d1=t,e.a2=(1|e.a2)<<24>>24}return e.d1}function Go(e){return(1&e.a2)<<24>>24?e.d1:Wo(e)}function Ko(e){if(!((2&e.a2)<<24>>24)){var t={};t.sjsr_=`scala_scalajs_runtime_`,t.sjs_=`scala_scalajs_`,t.sci_=`scala_collection_immutable_`,t.scm_=`scala_collection_mutable_`,t.scg_=`scala_collection_generic_`,t.sc_=`scala_collection_`,t.sr_=`scala_runtime_`,t.s_=`scala_`,t.jl_=`java_lang_`,t.ju_=`java_util_`,e.d2=t,e.a2=(2|e.a2)<<24>>24}return e.d2}function qo(e){return(2&e.a2)<<24>>24?e.d2:Ko(e)}function Jo(e){return(4&e.a2)<<24>>24||(e.d0=Object.keys(qo(e)),e.a2=(4|e.a2)<<24>>24),e.d0}function Yo(e){return(4&e.a2)<<24>>24?e.d0:Jo(e)}function Xo(e,t){if(t.startsWith(`init___`))return`<init>`;var n=t.indexOf(`__`)|0;return n<0?t:t.substring(0,n)}function Zo(e,t){return t?t.arguments&&t.stack?Qo(e,t):t.stack&&t.sourceURL?ts(e,t):t.stack&&t.number?es(e,t):t.stack&&t.fileName?$o(e,t):t.message&&t[`opera#sourceloc`]?t.stacktrace?t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?ns(e,t):rs(e,t):ns(e,t):t.message&&t.stack&&t.stacktrace?t.stacktrace.indexOf(`called from line`)<0?is(e,t):as(e,t):t.stack&&!t.fileName?Qo(e,t):os(e,t):[]}function Qo(e,t){return(t.stack+`
`).replace(M().ag(`^[\\s\\S]+?\\s+at\\s+`),` at `).replace(M().U(`^\\s+(at eval )?at\\s+`,`gm`),``).replace(M().U(`^([^\\(]+?)([\\n])`,`gm`),`{anonymous}() ($1)$2`).replace(M().U(`^Object.<anonymous>\\s*\\(([^\\)]+)\\)`,`gm`),`{anonymous}() ($1)`).replace(M().U(`^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(0,-1)}function $o(e,t){return t.stack.replace(M().U(`(?:\\n@:0)?\\s+$`,`m`),``).replace(M().U(`^(?:\\((\\S*)\\))?@`,`gm`),`{anonymous}($1)@`).split(`
`)}function es(e,t){return t.stack.replace(M().U(`^\\s*at\\s+(.*)$`,`gm`),`$1`).replace(M().U(`^Anonymous function\\s+`,`gm`),`{anonymous}() `).replace(M().U(`^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$`,`gm`),`$1@$2`).split(`
`).slice(1)}function ts(e,t){return t.stack.replace(M().U(`\\[native code\\]\\n`,`m`),``).replace(M().U(`^(?=\\w+Error\\:).*$\\n`,`m`),``).replace(M().U(`^@`,`gm`),`{anonymous}()@`).split(`
`)}function ns(e,t){for(var n=M().U(`Line (\\d+).*script (?:in )?(\\S+)`,`i`),r=t.message.split(`
`),i=[],a=2,o=r.length|0;a<o;){var s=n.exec(r[a]);s!==null&&i.push(`{anonymous}()@`+s[2]+`:`+s[1])|0,a=2+a|0}return i}function rs(e,t){for(var n=M().U(`Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$`,`i`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[3],l=c===void 0?`{anonymous}`:c;i.push(l+`()@`+s[2]+`:`+s[1])|0}a=2+a|0}return i}function is(e,t){for(var n=M().ag(`^(.*)@(.+):(\\d+)$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[1],l=c===void 0?`global code`:c+`()`;i.push(l+`@`+s[2]+`:`+s[3])|0}a=1+a|0}return i}function as(e,t){for(var n=M().ag(`^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$`),r=t.stacktrace.split(`
`),i=[],a=0,o=r.length|0;a<o;){var s=n.exec(r[a]);if(s!==null){var c=s[4]+`:`+s[1]+`:`+s[2],l=s[2],u=(l===void 0?`global code`:l).replace(M().ag(`<anonymous function: (\\S+)>`),`$1`).replace(M().ag(`<anonymous function>`),`{anonymous}`);i.push(u+`@`+c)|0}a=2+a|0}return i}function os(e,t){return[]}function ss(e,t,n){for(;;)if(t<(Yo(e).length|0)){var r=Yo(e)[t];if(n.startsWith(r))return``+qo(e)[r]+n.substring(r.length);t=1+t|0}else return n.startsWith(`L`)?n.substring(1):n}function cs(){this.d1=null,this.d2=null,this.d0=null,this.a2=0}b=cs.prototype=new x,b.constructor=cs;function ls(){}ls.prototype=b,b.i5=(function(e){return Vo(this,Zo(this,e))}),new S().i(cs,`java.lang.StackTrace$`,{de:1});var us;function ds(){return us||=new cs,us}function fs(){}b=fs.prototype=new x,b.constructor=fs;function ps(){}ps.prototype=b,b.ag=(function(e){return new RegExp(e)}),b.U=(function(e,t){return new RegExp(e,t)}),new S().i(fs,`java.lang.StackTrace$StringRE$`,{df:1});var ms;function M(){return ms||=new fs,ms}function hs(){this.fD=null,this.h6=null,_s=this,this.fD=new Ih(!1),this.h6=new Ih(!0)}b=hs.prototype=new x,b.constructor=hs;function gs(){}gs.prototype=b,new S().i(hs,`java.lang.System$Streams$`,{dk:1});var _s;function vs(){return _s||=new hs,_s}function ys(){this.fH=null,xs=this,this.fH=Object.prototype.hasOwnProperty}b=ys.prototype=new x,b.constructor=ys;function bs(){}bs.prototype=b,new S().i(ys,`java.lang.Utils$Cache$`,{dm:1});var xs;function Ss(){return xs||=new ys,xs}function Cs(e,t){return e===t}function ws(e){return 0}function Ts(e,t){return!!(e&&e.$classData&&e.$classData.D===t&&e.$classData.B.n.aJ)}var Es=new S().i(0,`java.lang.Void`,{aJ:1},(e=>e===void 0));function Ds(e,t){throw yp(new xp,`argument type mismatch`)}function Os(){}b=Os.prototype=new x,b.constructor=Os;function ks(){}ks.prototype=b,b.bl=(function(e){return e instanceof Nr||e instanceof Fr||e instanceof Ir||e instanceof Lr||e instanceof Rr||e instanceof zr||e instanceof Br||e instanceof Vr||e instanceof Hr?e.a.length:Ds(this,e)}),new S().i(Os,`java.lang.reflect.Array$`,{dn:1});var As;function js(){return As||=new Os,As}function Ms(){}b=Ms.prototype=new x,b.constructor=Ms;function Ns(){}Ns.prototype=b,b.gr=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=a.e,s=a.f,c=r,l=t.a[c],u=l.e,d=l.f;if(!(o===u&&s===d))return!1;r=1+r|0}return!0}),b.gq=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gs=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gn=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gm=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.gt=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(a!==t.a[o])return!1;r=1+r|0}return!0}),b.go=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),b.gp=(function(e,t){if(e===t)return!0;if(e===null||t===null)return!1;var n=e.a.length;if(t.a.length!==n)return!1;for(var r=0;r!==n;){var i=r,a=e.a[i],o=r;if(!Object.is(a,t.a[o]))return!1;r=1+r|0}return!0}),new S().i(Ms,`java.util.Arrays$`,{dp:1});var Ps;function N(){return Ps||=new Ms,Ps}function P(e,t){this.e=0,this.f=0,this.e=e,this.f=t}b=P.prototype=new x,b.constructor=P;function Fs(){}Fs.prototype=b,b.j=(function(e){return e instanceof P&&this.e===e.e&&this.f===e.f}),b.r=(function(){return this.e^this.f}),b.t=(function(){return Us().gI(this.e,this.f)}),b.kk=(function(){return this.e}),b.kj=(function(){return Us().gH(this.e,this.f)}),b.ki=(function(){return Us().bW(this.e,this.f)}),b.jZ=(function(){return this.e<<24>>24}),b.kg=(function(){return this.e<<16>>16}),b.ka=(function(){return this.e}),b.kb=(function(){return this}),b.k5=(function(){return Us().gH(this.e,this.f)}),b.k3=(function(){return Us().bW(this.e,this.f)}),b.k1=(function(e){return Us().gF(this.e,this.f,e.e,e.f)}),b.k0=(function(e){return Us().gF(this.e,this.f,e.e,e.f)}),b.k4=(function(e){return this.e===e.e&&this.f===e.f}),b.ke=(function(e){return!(this.e===e.e&&this.f===e.f)}),b.jR=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<(-2147483648^e.e):t<n}),b.jS=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)<=(-2147483648^e.e):t<n}),b.jN=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>(-2147483648^e.e):t>n}),b.jO=(function(e){var t=this.f,n=e.f;return t===n?(-2147483648^this.e)>=(-2147483648^e.e):t>n}),b.km=(function(){return new P(~this.e,~this.f)}),b.jL=(function(e){return new P(this.e|e.e,this.f|e.f)}),b.jK=(function(e){return new P(this.e&e.e,this.f&e.f)}),b.jY=(function(e){return new P(this.e^e.e,this.f^e.f)}),b.jT=(function(e){var t=this.e;return new P(32&e?0:t<<e,32&e?t<<e:(t>>>1|0)>>>(31-e|0)|0|this.f<<e)}),b.jQ=(function(e){var t=this.f;return new P(32&e?t>>>e|0:this.e>>>e|0|t<<1<<(31-e|0),32&e?0:t>>>e|0)}),b.jP=(function(e){var t=this.f;return new P(32&e?t>>e:this.e>>>e|0|t<<1<<(31-e|0),32&e?t>>31:t>>e)}),b.kl=(function(){var e=this.e,t=this.f;return new P(-e|0,e===0?-t|0:~t)}),b.jW=(function(e){var t=this.e,n=this.f,r=e.f,i=t+e.e|0;return new P(i,(-2147483648^i)<(-2147483648^t)?1+(n+r|0)|0:n+r|0)}),b.jU=(function(e){var t=this.e,n=this.f,r=e.f,i=t-e.e|0;return new P(i,(-2147483648^i)>(-2147483648^t)?-1+(n-r|0)|0:n-r|0)}),b.jX=(function(e){var t=this.e,n=e.e,r=65535&t,i=t>>>16|0,a=65535&n,o=n>>>16|0,s=Math.imul(r,a),c=Math.imul(i,a),l=Math.imul(r,o),u=s+((c+l|0)<<16)|0,d=(s>>>16|0)+l|0;return new P(u,(((Math.imul(t,e.f)+Math.imul(this.f,n)|0)+Math.imul(i,o)|0)+(d>>>16|0)|0)+(((65535&d)+c|0)>>>16|0)|0)}),b.jM=(function(e){var t=Us();return new P(t.hK(this.e,this.f,e.e,e.f),t.v)}),b.jV=(function(e){var t=Us();return new P(t.jb(this.e,this.f,e.e,e.f),t.v)}),new S().i(P,`org.scalajs.linker.runtime.RuntimeLong`,{aK:1});function Is(e,t,n){return-2097152&n?zs(e,t,n,1e9,0,2):``+(4294967296*n+ +(t>>>0))}function Ls(e,t,n,r,i){if(-2097152&n)if(i===0&&!(r&(-1+r|0))){var a=31-(Math.clz32(r)|0)|0;return e.v=n>>>a|0,t>>>a|0|n<<1<<(31-a|0)}else if(r===0&&!(i&(-1+i|0))){var o=31-(Math.clz32(i)|0)|0;return e.v=0,n>>>o|0}else return zs(e,t,n,r,i,0)|0;else{if(-2097152&i)return e.v=0,0;var s=(4294967296*n+ +(t>>>0))/(4294967296*i+ +(r>>>0));return e.v=s/4294967296|0,s|0}}function Rs(e,t,n,r,i){if(-2097152&n)return i===0&&!(r&(-1+r|0))?(e.v=0,t&(-1+r|0)):r===0&&!(i&(-1+i|0))?(e.v=n&(-1+i|0),t):zs(e,t,n,r,i,1)|0;if(-2097152&i)return e.v=n,t;var a=(4294967296*n+ +(t>>>0))%(4294967296*i+ +(r>>>0));return e.v=a/4294967296|0,a|0}function zs(e,t,n,r,i,a){for(var o=(i===0?32+(Math.clz32(r)|0)|0:Math.clz32(i)|0)-(n===0?32+(Math.clz32(t)|0)|0:Math.clz32(n)|0)|0,s=o,c=32&s?0:r<<s,l=32&s?r<<s:(r>>>1|0)>>>(31-s|0)|0|i<<s,u=c,d=l,f=t,p=n,ee=0,te=0;o>=0&&-2097152&p;){var ne=f,re=p,ie=u,ae=d;if(re===ae?(-2147483648^ne)>=(-2147483648^ie):(-2147483648^re)>=(-2147483648^ae)){var oe=f,se=p,ce=u,le=d,ue=oe-ce|0,de=(-2147483648^ue)>(-2147483648^oe)?-1+(se-le|0)|0:se-le|0;f=ue,p=de,o<32?ee|=1<<o:te|=1<<o}o=-1+o|0;var fe=u,pe=d,me=fe>>>1|0|pe<<31,he=pe>>>1|0;u=me,d=he}var ge=f,_e=p;if(_e===i?(-2147483648^ge)>=(-2147483648^r):(-2147483648^_e)>=(-2147483648^i)){var ve=f,ye=4294967296*p+ +(ve>>>0),be=4294967296*i+ +(r>>>0);if(a!==1){var xe=ye/be,Se=xe|0,Ce=xe/4294967296|0,we=ee,Te=te,Ee=we+Se|0,De=(-2147483648^Ee)<(-2147483648^we)?1+(Te+Ce|0)|0:Te+Ce|0;ee=Ee,te=De}if(a!==0){var Oe=ye%be;f=Oe|0,p=Oe/4294967296|0}}if(a===0)return e.v=te,ee;if(a===1)return e.v=p,f;var ke=ee,Ae=4294967296*te+ +(ke>>>0),je=``+f,Me=je.length;return``+Ae+`000000000`.substring(Me)+je}function Bs(){this.v=0}b=Bs.prototype=new x,b.constructor=Bs;function Vs(){}Vs.prototype=b,b.gI=(function(e,t){return t===e>>31?``+e:t<0?`-`+Is(this,-e|0,e===0?-t|0:~t):Is(this,e,t)}),b.bW=(function(e,t){return t<0?-(4294967296*((e===0?-t|0:~t)>>>0)+ +((-e|0)>>>0)):4294967296*t+ +(e>>>0)}),b.gH=(function(e,t){if(t<0)var n=-e|0,r=e===0?-t|0:~t;else var n=e,r=t;var i=!(-2097152&r)||!(65535&n)?n:32768|-65536&n,a=4294967296*(r>>>0)+ +(i>>>0);return Math.fround(t<0?-a:a)}),b.k7=(function(e){return new P(e,e>>31)}),b.k6=(function(e){return new P(this.gG(e),this.v)}),b.gG=(function(e){if(e<-0x8000000000000000)return this.v=-2147483648,0;if(e>=0x8000000000000000)return this.v=2147483647,-1;var t=e|0,n=e/4294967296|0;return this.v=e<0&&t!==0?-1+n|0:n,t}),b.gF=(function(e,t,n,r){return t===r?e===n?0:(-2147483648^e)<(-2147483648^n)?-1:1:t<r?-1:1}),b.hK=(function(e,t,n,r){if((n|r)===0)throw new _p(`/ by zero`);if(t===e>>31)if(r===n>>31){if(e===-2147483648&&n===-1)return this.v=0,-2147483648;var i=_r(e,n);return this.v=i>>31,i}else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=-1,-1;else return this.v=0,0;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Ls(this,a,o,s,c);if((t^r)>=0)return l;var u=this.v;return this.v=l===0?-u|0:~u,-l|0}}),b.jb=(function(e,t,n,r){if((n|r)===0)throw new _p(`/ by zero`);if(t===e>>31)if(r===n>>31)if(n!==-1){var i=vr(e,n);return this.v=i>>31,i}else return this.v=0,0;else if(e===-2147483648&&n===-2147483648&&r===0)return this.v=0,0;else return this.v=t,e;else{if(t<0)var a=-e|0,o=e===0?-t|0:~t;else var a=e,o=t;if(r<0)var s=-n|0,c=n===0?-r|0:~r;else var s=n,c=r;var l=Rs(this,a,o,s,c);if(t<0){var u=this.v;return this.v=l===0?-u|0:~u,-l|0}else return l}}),new S().i(Bs,`org.scalajs.linker.runtime.RuntimeLong$`,{dr:1});var Hs;function Us(){return Hs||=new Bs,Hs}var Ws=new S().i(1,`scala.Function0`,{ae:1}),F=new S().i(1,`scala.Function1`,{e:1});function Gs(){}b=Gs.prototype=new x,b.constructor=Gs;function Ks(){}Ks.prototype=b;function qs(){this.fJ=null,this.cn=null,Ys=this,this.fJ=new q((e=>Xs().fJ)),this.cn=new kf}b=qs.prototype=new x,b.constructor=qs;function Js(){}Js.prototype=b,new S().i(qs,`scala.PartialFunction$`,{dF:1});var Ys;function Xs(){return Ys||=new qs,Ys}function Zs(){this.fM=null,$s=this,this.fM=new q((e=>ec().fM))}b=Zs.prototype=new x,b.constructor=Zs;function Qs(){}Qs.prototype=b,b.i8=(function(e,t){var n=js().bl(e),r=0;if(e instanceof Nr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof zr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Hr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Br)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Vr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Ir)for(;r<n;)t.g(kr(e.a[r])),r=1+r|0;else if(e instanceof Lr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Rr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else if(e instanceof Fr)for(;r<n;)t.g(e.a[r]),r=1+r|0;else throw new Ip(e)}),new S().i(Zs,`scala.collection.ArrayOps$`,{dL:1});var $s;function ec(){return $s||=new Zs,$s}function tc(e,t){for(var n=e.q();n.w();)t.g(n.k())}function nc(e,t,n,r){return e.E()===0?``+t+r:e.bH(b_(new x_),t,n,r).a0.u}function rc(e,t,n,r,i){var a=t.a0;n.length!==0&&(a.u=``+a.u+n);var o=e.q();if(o.w()){var s=o.k();for(a.u=``+a.u+s;o.w();){a.u=``+a.u+r;var c=o.k();a.u=``+a.u+c}}return i.length!==0&&(a.u=``+a.u+i),t}function ic(e,t){this.fQ=null,this.bC=null,this.fQ=e,this.bC=t}b=ic.prototype=new x,b.constructor=ic;function ac(){}ac.prototype=b,b.il=(function(){return this.fQ.aa().q()}),new S().i(ic,`scala.collection.Iterator$ConcatIteratorCell`,{e3:1});function oc(){this.fR=null,cc=this,this.fR=new q((e=>lc().fR))}b=oc.prototype=new x,b.constructor=oc;function sc(){}sc.prototype=b,b.hC=(function(e,t){return Im(e,t)>=0}),new S().i(oc,`scala.collection.StringOps$`,{eb:1});var cc;function lc(){return cc||=new oc,cc}function uc(){}b=uc.prototype=new x,b.constructor=uc;function dc(){}dc.prototype=b,b.S=(function(e,t){return e===t||(Ml(e)?this.hQ(e,t):e instanceof dr?this.hO(e,t):e===null?t===null:mr(e,t))}),b.hQ=(function(e,t){if(Ml(t))return this.hP(e,t);if(t instanceof dr){if(typeof e==`number`)return+e===t.c;if(e instanceof P){var n=jr(e),r=n.e,i=n.f,a=t.c,o=a>>31;return r===a&&i===o}else return e===null?t===null:mr(e,t)}else return e===null?t===null:mr(e,t)}),b.hP=(function(e,t){if(typeof e==`number`){var n=+e;if(typeof t==`number`)return n===+t;if(t instanceof P){var r=jr(t);return n===Us().bW(r.e,r.f)}else return!1}else if(e instanceof P){var i=jr(e),a=i.e,o=i.f;if(t instanceof P){var s=jr(t),c=s.e,l=s.f;return a===c&&o===l}else if(typeof t==`number`){var u=+t;return Us().bW(a,o)===u}else return!1}else return e===null?t===null:mr(e,t)}),b.hO=(function(e,t){if(t instanceof dr)return e.c===t.c;if(Ml(t)){if(typeof t==`number`)return+t===e.c;if(t instanceof P){var n=jr(t),r=n.e,i=n.f,a=e.c,o=a>>31;return r===a&&i===o}else return t===null?e===null:mr(t,e)}else return e===null&&t===null}),new S().i(uc,`scala.runtime.BoxesRunTime$`,{eF:1});var fc;function pc(){return fc||=new uc,fc}var mc=new S().i(0,`scala.runtime.Null$`,{eI:1});function hc(){}b=hc.prototype=new x,b.constructor=hc;function gc(){}gc.prototype=b,b.bj=(function(e,t){if(e instanceof Nr||e instanceof zr||e instanceof Hr||e instanceof Br||e instanceof Vr)return e.a[t];if(e instanceof Ir)return kr(e.a[t]);if(e instanceof Lr||e instanceof Rr||e instanceof Fr)return e.a[t];throw e===null?new Ep:new Ip(e)}),b.hp=(function(e,t,n){if(e instanceof Nr)e.a[t]=n;else if(e instanceof zr)e.a[t]=n|0;else if(e instanceof Hr)e.a[t]=+n;else if(e instanceof Br)e.a[t]=jr(n);else if(e instanceof Vr)e.a[t]=Math.fround(n);else if(e instanceof Ir)e.a[t]=Ar(n);else if(e instanceof Lr)e.a[t]=n|0;else if(e instanceof Rr)e.a[t]=n|0;else if(e instanceof Fr)e.a[t]=!!n;else if(e===null)throw new Ep;else throw new Ip(e)}),b.hd=(function(e){return nc(e.aH(),e.am()+`(`,`,`,`)`)}),b.b=(function(e){return e===null?null:e.a.length===0?Qm(nh()):new Lg(e)}),b.jG=(function(e){return e===null?null:new Ng(e)}),new S().i(hc,`scala.runtime.ScalaRunTime$`,{eJ:1});var _c;function I(){return _c||=new hc,_c}function vc(){}b=vc.prototype=new x,b.constructor=vc;function yc(){}yc.prototype=b,b.c=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.p=(function(e,t){return this.hs(e^t)}),b.hs=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.bm=(function(e){var t=e.e,n=e.f;return n===t>>31?t:t^n}),b.ac=(function(e){var t=yr(e);if(t===e)return t;var n=Us(),r=n.gG(e),i=n.v;return Us().bW(r,i)===e?r^i:Bo().du(e)}),b.A=(function(e){if(e===null)return 0;if(typeof e==`number`)return this.ac(+e);if(e instanceof P){var t=jr(e);return this.bm(new P(t.e,t.f))}else return hr(e)}),b.bU=(function(e){throw Sp(new Cp,``+e)}),new S().i(vc,`scala.runtime.Statics$`,{eL:1});var bc;function L(){return bc||=new vc,bc}function xc(){}b=xc.prototype=new x,b.constructor=xc;function Sc(){}Sc.prototype=b,b.ho=(function(e){return e}),new S().i(xc,`scala.scalajs.js.defined$`,{eR:1});var Cc;function wc(){return Cc||=new xc,Cc}function Tc(){}b=Tc.prototype=new x,b.constructor=Tc;function Ec(){}Ec.prototype=b,b.jo=(function(e,t){return setTimeout((()=>{t.aa()}),e)}),new S().i(Tc,`scala.scalajs.js.timers.package$`,{eS:1});var Dc;function Oc(){return Dc||=new Tc,Dc}function kc(){}b=kc.prototype=new x,b.constructor=kc;function Ac(){}Ac.prototype=b,b.jz=(function(e){var t=[];return e.aj(new q((e=>t.push(e)|0))),t}),new S().i(kc,`scala.scalajs.runtime.Compat$`,{f1:1});var jc;function Mc(){return jc||=new kc,jc}function Nc(){}b=Nc.prototype=new x,b.constructor=Nc;function Pc(){}Pc.prototype=b,b.jp=(function(e){var t=`Illegal command line`+(e.gy()===0?``:e.gy()===1?` after first argument`:` after `+e.gy()+` arguments`)+`: `+e.kc();$l().j2().ix(t+`
`)}),new S().i(Nc,`scala.util.CommandLineParser$`,{f3:1});function Fc(e){this.dh=null,this.dh=e}b=Fc.prototype=new x,b.constructor=Fc;function Ic(){}Ic.prototype=b,b.t=(function(){return`DynamicVariable(`+this.dh+`)`}),new S().i(Fc,`scala.util.DynamicVariable`,{f5:1});function Lc(){}b=Lc.prototype=new x,b.constructor=Lc;function Rc(){}Rc.prototype=b,b.c=(function(e,t){var n=this.cB(e,t),r=n;return n=r<<13|(r>>>19|0),-430675100+Math.imul(5,n)|0}),b.cB=(function(e,t){var n=t;n=Math.imul(-862048943,n);var r=n;return n=r<<15|(r>>>17|0),n=Math.imul(461845907,n),e^n}),b.p=(function(e,t){return this.V(e^t)}),b.V=(function(e){var t=e;return t^=t>>>16|0,t=Math.imul(-2048144789,t),t^=t>>>13|0,t=Math.imul(-1028477387,t),t^=t>>>16|0,t}),b.cC=(function(e,t,n){var r=e.ak();if(r===0)return Pm(e.am());var i=t;n||(i=this.c(i,Pm(e.am())));for(var a=0;a<r;)i=this.c(i,L().A(e.al(a))),a=1+a|0;return this.p(i,r)}),b.jC=(function(e,t){for(var n=0,r=0,i=0,a=1,o=e.q();o.w();){var s=o.k(),c=L().A(s);n=n+c|0,r^=c,a=Math.imul(a,1|c),i=1+i|0}var l=t;return l=this.c(l,n),l=this.c(l,r),l=this.cB(l,a),this.p(l,i)}),b.j1=(function(e,t){var n=e.q(),r=t;if(!n.w())return this.p(r,0);var i=n.k();if(!n.w())return this.p(this.c(r,L().A(i)),1);var a=n.k(),o=L().A(i);r=this.c(r,o);for(var s=r,c=L().A(a),l=c-o|0,u=2;n.w();){r=this.c(r,c);var d=L().A(n.k());if(l!==(d-c|0)||l===0){for(r=this.c(r,d),u=1+u|0;n.w();)r=this.c(r,L().A(n.k())),u=1+u|0;return this.p(r,u)}c=d,u=1+u|0}return this.V(this.c(this.c(s,l),c))}),b.g7=(function(e,t){var n=t,r=js().bl(e);switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,L().A(I().bj(e,0))),1);default:var i=L().A(I().bj(e,0));n=this.c(n,i);for(var a=n,o=L().A(I().bj(e,1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().A(I().bj(e,c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().A(I().bj(e,c))),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.j9=(function(e,t,n,r){return this.V(this.c(this.c(this.c(r,e),t),n))}),b.ir=(function(e,t){var n=t,r=e.n();switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,L().A(e.s(0))),1);default:var i=L().A(e.s(0));n=this.c(n,i);for(var a=n,o=L().A(e.s(1)),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().A(e.s(c));if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().A(e.s(c))),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.iA=(function(e,t){for(var n=0,r=t,i=0,a=0,o=0,s=0,c=e;!c.h();){var l=c.ad(),u=c.a1(),d=L().A(l);switch(r=this.c(r,d),i){case 0:s=d,i=1;break;case 1:a=d-o|0,i=2;break;case 2:(a!==(d-o|0)||a===0)&&(i=3);break}o=d,n=1+n|0,c=u}return i===2?this.j9(s,a,o,t):this.p(r,n)}),b.gg=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,e.a[0]?1231:1237),1);default:var i=e.a[0]?1231:1237;n=this.c(n,i);for(var a=n,o=e.a[1]?1231:1237,s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c]?1231:1237;if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]?1231:1237),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.g8=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.g9=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.ga=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,L().ac(e.a[0])),1);default:var i=L().ac(e.a[0]);n=this.c(n,i);for(var a=n,o=L().ac(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().ac(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().ac(e.a[c])),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.gb=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,L().ac(e.a[0])),1);default:var i=L().ac(e.a[0]);n=this.c(n,i);for(var a=n,o=L().ac(e.a[1]),s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=L().ac(e.a[c]);if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,L().ac(e.a[c])),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.gc=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.gd=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:var i=n,a=e.a[0];return this.p(this.c(i,L().bm(new P(a.e,a.f))),1);default:var o=e.a[0],s=L().bm(new P(o.e,o.f));n=this.c(n,s);for(var c=n,l=e.a[1],u=L().bm(new P(l.e,l.f)),d=u-s|0,f=2;f<r;){n=this.c(n,u);var p=e.a[f],ee=L().bm(new P(p.e,p.f));if(d!==(ee-u|0)||d===0){for(n=this.c(n,ee),f=1+f|0;f<r;){var te=n,ne=e.a[f];n=this.c(te,L().bm(new P(ne.e,ne.f))),f=1+f|0}return this.p(n,r)}u=ee,f=1+f|0}return this.V(this.c(this.c(c,d),u))}}),b.ge=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,e.a[0]),1);default:var i=e.a[0];n=this.c(n,i);for(var a=n,o=e.a[1],s=o-i|0,c=2;c<r;){n=this.c(n,o);var l=e.a[c];if(s!==(l-o|0)||s===0){for(n=this.c(n,l),c=1+c|0;c<r;)n=this.c(n,e.a[c]),c=1+c|0;return this.p(n,r)}o=l,c=1+c|0}return this.V(this.c(this.c(a,s),o))}}),b.gf=(function(e,t){var n=t,r=e.a.length;switch(r){case 0:return this.p(n,0);case 1:return this.p(this.c(n,0),1);default:n=this.c(n,0);for(var i=n,a=0,o=a,s=2;s<r;){if(n=this.c(n,a),o!==(-a|0)||o===0){for(n=this.c(n,0),s=1+s|0;s<r;)n=this.c(n,0),s=1+s|0;return this.p(n,r)}a=0,s=1+s|0}return this.V(this.c(this.c(i,o),a))}});function zc(e){this.b3=null,this.dT=null,this.cI=!1,this.dT=e,Bi(this),this.cI=!1}b=zc.prototype=new x,b.constructor=zc;function Bc(){}Bc.prototype=b,b.j3=(function(e){this.cI?(Wi(e),this.dT.aa()):Ui(this,e)}),b.iy=(function(){Vi(this),this.cI=!0}),new S().i(zc,`com.raquo.airstream.ownership.OneTimeOwner`,{bF:1,bG:1});function Vc(){}b=Vc.prototype=new x,b.constructor=Vc;function Hc(){}Hc.prototype=b,b.hJ=(function(e){return e!==null}),b.hN=(function(e){return e?``:null}),b.cu=(function(e){return this.hJ(e)}),b.bS=(function(e){return this.hN(!!e)}),new S().i(Vc,`com.raquo.laminar.codecs.package$$anon$1`,{bW:1,a7:1});function Uc(e){if(e===null)throw new Ep}b=Uc.prototype=new x,b.constructor=Uc;function Wc(){}Wc.prototype=b,b.bS=(function(e){return e}),b.cu=(function(e){return e}),new S().i(Uc,`com.raquo.laminar.codecs.package$$anon$2`,{bX:1,a7:1});function Gc(e){return new Na(e,new Y((e=>e+`vh`)))}function Kc(e,t,n,r){}b=Kc.prototype=new Ha,b.constructor=Kc;function qc(){}qc.prototype=b,new S().i(Kc,`com.raquo.laminar.keys.CompositeKey`,{ch:1,I:1});function Jc(e){this.ce=null,this.ce=e}b=Jc.prototype=new Ha,b.constructor=Jc;function Yc(){}Yc.prototype=b;var Xc=new S().i(Jc,`com.raquo.laminar.keys.EventProp`,{cl:1,I:1});function Zc(e,t,n){return e.as=t,e.b5=n,e}function Qc(){this.as=null,this.b5=null}b=Qc.prototype=new Ha,b.constructor=Qc;function $c(){}$c.prototype=b,b.l=(function(e){return new Lu(this,e,new Wf(((e,t,n)=>{w().dA(e,t,n)})))}),b.di=(function(e){return new zu(this,e.gO(),new Wf(((e,t,n)=>{w().dA(e,this,t)})))}),new S().i(Qc,`com.raquo.laminar.keys.HtmlAttr`,{Y:1,I:1});function el(e,t){this.at=null,this.eA=null,this.at=e,this.eA=t}b=el.prototype=new Ha,b.constructor=el;function tl(){}tl.prototype=b,b.l=(function(e){return new Lu(this,e,new Wf(((e,t,n)=>{w().jj(e,t,n)})))}),new S().i(el,`com.raquo.laminar.keys.HtmlProp`,{at:1,I:1});function nl(e,t,n){this.cP=null,this.cO=null,this.ch=null,this.ci=null,this.cP=e,this.cO=t;var r=n.h()?Z():new Q(n.y()+`:`+e);this.ch=r.h()?e:r.y(),this.ci=n.h()?Z():new Q(Ka().iH(n.y()))}b=nl.prototype=new Ha,b.constructor=nl;function rl(){}rl.prototype=b,new S().i(nl,`com.raquo.laminar.keys.SvgAttr`,{cm:1,I:1});function il(){}b=il.prototype=new x,b.constructor=il;function al(){}al.prototype=b,b.a9=(function(e){}),new S().i(il,`com.raquo.laminar.modifiers.Modifier$$anon$1`,{ct:1,Q:1});function ol(e,t){if(this.eJ=null,this.eJ=e,t===null)throw new Ep}b=ol.prototype=new x,b.constructor=ol;function sl(){}sl.prototype=b,b.a9=(function(e){var t=hi(),n=(()=>{this.eJ.g(e)});if(hi(),t.C)n();else{t.C=!0;try{n()}finally{t.C=!1,di(t)}}}),new S().i(ol,`com.raquo.laminar.modifiers.Modifier$$anon$2`,{cu:1,Q:1});function cl(){}b=cl.prototype=new x,b.constructor=cl;function ll(){}ll.prototype=b,new S().i(cl,`com.raquo.laminar.modifiers.RenderableNode$$anon$1`,{cx:1,cv:1});function ul(){}b=ul.prototype=new x,b.constructor=ul;function dl(){}dl.prototype=b,new S().i(ul,`com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$`,{cz:1,cy:1});var fl;function R(){return fl||=new ul,fl}function pl(e,t){if(this.eK=null,this.eK=e,t===null)throw new Ep}b=pl.prototype=new x,b.constructor=pl;function ml(){}ml.prototype=b,b.hq=(function(e){return this.eK.g(e)}),new S().i(pl,`com.raquo.laminar.modifiers.RenderableText$$anon$1`,{cC:1,cA:1});function hl(e){e.gk(new ji(new zf((()=>{throw W(new G,`Attempting to use owner of unmounted element: `+nc(w().hI(e.aY(),(w(),v_())),``,` > `,``))}))))}function gl(e,t,n){return e.cX=t,e}function _l(){this.cX=null}b=_l.prototype=new x,b.constructor=_l;function vl(){}vl.prototype=b,b.dt=(function(){return this.cX}),b.D=(function(e){var t=this.hx();return e.aj(new Y((e=>{e.a9(t)}))),t}),b.hx=(function(){return new wm(this,w().hE(this))}),new S().i(_l,`com.raquo.laminar.tags.HtmlTag`,{ay:1,ac:1});function yl(e,t){this.eS=null,this.eS=e}b=yl.prototype=new x,b.constructor=yl;function bl(){}bl.prototype=b,new S().i(yl,`com.raquo.laminar.tags.SvgTag`,{cM:1,ac:1});function xl(){}b=xl.prototype=new x,b.constructor=xl;function Sl(){}Sl.prototype=b,b.bS=(function(e){return e}),b.cu=(function(e){return e}),new S().i(xl,`io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1`,{cY:1,a7:1});function Cl(e,t){return e.bc=t,e.cs(),e}function wl(){this.bc=null,this.b7=null,this.b8=!1,this.b9=null,this.ba=!1,this.bb=null,this.bd=!1}b=wl.prototype=new x,b.constructor=wl;function Tl(){}Tl.prototype=b,b.ae=(function(){return this.b8||=(this.b7=J().d.ip(),!0),this.b7}),b.jr=(function(){return this.ba||=(this.b9=J().d.js(),!0),this.b9}),b.jw=(function(){return this.bd||=(this.bb=new Hu(this.bc,yo().hc(),(yo(),void 0)),!0),this.bb}),b.m=(function(e,t){var n=this.jw().D(I().b(new(D.r()).C([])));return e.aj(new Y((e=>{e.g(this).a9(n)}))),t.aj(new Y((e=>{e.a9(n)}))),n});function El(){}b=El.prototype=new x,b.constructor=El;function Dl(){}Dl.prototype=b,b.jA=(function(e){if(!(e>=0&&e<=1114111))throw bp(new xp);return String.fromCodePoint(e)}),new S().i(El,`java.lang.Character$`,{d4:1,a:1});var Ol;function kl(){return Ol||=new El,Ol}function Al(){}b=Al.prototype=new x,b.constructor=Al;function jl(){}jl.prototype=b;function Ml(e){return e instanceof Al||typeof e==`number`||e instanceof P}function Nl(e,t,n,r,i){this.bf=null,this.by=null,this.bg=null,this.bh=0,this.be=0,this.bf=e,this.by=t,this.bg=n,this.bh=r,this.be=i}b=Nl.prototype=new x,b.constructor=Nl;function Pl(){}Pl.prototype=b,b.j=(function(e){return e instanceof Nl&&this.bg===e.bg&&this.bh===e.bh&&this.be===e.be&&this.bf===e.bf&&this.by===e.by}),b.t=(function(){var e=``;return this.bf!==`<jscode>`&&(e=``+e+this.bf+`.`),e=``+e+this.by,this.bg===null?e+=`(Unknown Source)`:(e=e+`(`+this.bg,this.bh>=0&&(e=e+`:`+this.bh,this.be>=0&&(e=e+`:`+this.be)),e+=`)`),e}),b.r=(function(){return Pm(this.bf)^Pm(this.by)^Pm(this.bg)^this.bh^this.be});var Fl=new S().i(Nl,`java.lang.StackTraceElement`,{aI:1,a:1});function Il(){}b=Il.prototype=new x,b.constructor=Il;function Ll(){}Ll.prototype=b,b.iI=(function(e,t,n){var r=t+n|0;if(t<0||r<t||r>e.a.length)throw new Rm;for(var i=``,a=t;a!==r;)i+=``+br(e.a[a]),a=1+a|0;return i}),new S().i(Il,`java.lang.String$`,{dh:1,a:1});var Rl;function zl(){return Rl||=new Il,Rl}function Bl(e,t,n,r,i){return e.fF=t,e.fG=i,i&&e.i6(),e}var Vl=class extends Error{constructor(){super(),this.fF=null,this.fG=!1,this.fE=null,this.cl=null}is(e){return this}bT(){return this.fF}i6(){var e=this instanceof $?this.a8:this;return this.fE=Object.prototype.toString.call(e)===`[object Error]`?e:Error.captureStackTrace===void 0||Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}ih(){return this.cl===null&&(this.fG?this.cl=ds().i5(this.fE):this.cl=new(Fl.r()).C(0)),this.cl}t(){var e=pr(this),t=this.bT();return t===null?e:e+`: `+t}r(){return Mr.prototype.r.call(this)}j(e){return Mr.prototype.j.call(this,e)}get message(){var e=this.bT();return e===null?``:e}get name(){return pr(this)}toString(){return this.t()}};function Hl(){this.G=null,Wl=this,this.G=new Ap}b=Hl.prototype=new x,b.constructor=Hl;function Ul(){}Ul.prototype=b,new S().i(Hl,`scala.$less$colon$less$`,{du:1,a:1});var Wl;function Gl(){return Wl||=new Hl,Wl}function Kl(){}b=Kl.prototype=new x,b.constructor=Kl;function ql(){}ql.prototype=b,b.gv=(function(e,t){var n=e.E();if(n>-1){for(var r=t.iJ(n),i=e.q(),a=0;a<n;)I().hp(r,a,i.k()),a=1+a|0;return r}else{var o=null,s=t.jg(),c=s===Gr.l();o=[];for(var l=e.q();l.w();){var u=l.k(),d=c?Ar(u):u===null?s.aI.z:u;o.push(d)}return(s===Wr.l()?Es.l():s===mc.l()||s===Hd.l()?Ur.l():s).aI.r().w(o)}}),b.gu=(function(e,t){if(e===t)return!0;if(e.a.length!==t.a.length)return!1;for(var n=e.a.length,r=0;r<n;){if(!pc().S(e.a[r],t.a[r]))return!1;r=1+r|0}return!0}),new S().i(Kl,`scala.Array$`,{dw:1,a:1});var Jl;function Yl(){return Jl||=new Kl,Jl}function Xl(){this.fI=null,Ql=this,this.fI=new Fc(vs().fD)}b=Xl.prototype=new x,b.constructor=Xl;function Zl(){}Zl.prototype=b,b.j2=(function(){return this.fI.dh}),new S().i(Xl,`scala.Console$`,{dx:1,er:1});var Ql;function $l(){return Ql||=new Xl,Ql}function eu(){}b=eu.prototype=new Ks,b.constructor=eu;function tu(){}tu.prototype=b,b.jH=(function(e){return e===null?null:e.a.length===0?oh().fS:new s_(e)});function nu(){}b=nu.prototype=new x,b.constructor=nu;function ru(){}ru.prototype=b,b.O=(function(e){return e===null?Z():new Q(e)}),new S().i(nu,`scala.Option$`,{dE:1,a:1});var iu;function au(){return iu||=new nu,iu}function ou(e,t){if(t===e)e.g3(dm().gw(t));else for(var n=t.q();n.w();)e.dk(n.k());return e}function su(){}b=su.prototype=new x,b.constructor=su;function cu(){}cu.prototype=b,b.t=(function(){return`<function0>`});function lu(){}b=lu.prototype=new x,b.constructor=lu;function uu(){}uu.prototype=b,b.t=(function(){return`<function1>`});function du(){}b=du.prototype=new x,b.constructor=du;function fu(){}fu.prototype=b,b.t=(function(){return`<function2>`});function pu(){}b=pu.prototype=new x,b.constructor=pu;function mu(){}mu.prototype=b,b.t=(function(){return`<function3>`});function hu(e){this.cr=!1,this.cr=e}b=hu.prototype=new x,b.constructor=hu;function gu(){}gu.prototype=b,b.t=(function(){return``+this.cr}),new S().i(hu,`scala.runtime.BooleanRef`,{eE:1,a:1});function _u(e){this.bF=0,this.bF=e}b=_u.prototype=new x,b.constructor=_u;function vu(){}vu.prototype=b,b.t=(function(){return``+this.bF}),new S().i(_u,`scala.runtime.IntRef`,{eG:1,a:1});function yu(){this.x=0,this.g1=0,this.hb=0,this.ha=0,xu=this,this.x=Pm(`Seq`),this.g1=Pm(`Map`),this.hb=Pm(`Set`),this.ha=this.jC(v_(),this.g1)}b=yu.prototype=new Rc,b.constructor=yu;function bu(){}bu.prototype=b,b.jh=(function(e){return tg(e)?this.ir(e,this.x):e instanceof Gg?this.iA(e,this.x):this.j1(e,this.x)}),new S().i(yu,`scala.util.hashing.MurmurHash3$`,{f7:1,f6:1});var xu;function z(){return xu||=new yu,xu}var Su=class extends Vl{};function Cu(){this.cE=null,this.dC=null,this.dD=null,Tu=this,this.cE=dm().g5(I().b(new(F.r()).C([]))),this.dC=new Y((e=>{try{console.error(this.cy(e)+`
`+this.ig(e,`
`))}catch(e){var t=e instanceof Vl?e:new $(e);console.error(`Error in AirstreamError.consoleErrorCallback:`),console.error(t)}})),this.dD=new Y((e=>{console.warn(`Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.`);var t=e;throw t instanceof $?t.a8:t})),this.ja(this.dC)}b=Cu.prototype=new x,b.constructor=Cu;function wu(){}wu.prototype=b,b.cy=(function(e){try{var t=e.bT()}catch{var t=`(Unable to get the message for this error - exception occurred in its getMessage)`}return fr(e).dq()+`: `+t}),b.ig=(function(e,t){try{return nc(Td().jH(e.ih()),``,t,``)}catch{return`(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)`}}),b.ja=(function(e){this.cE.dk(e)}),b.ao=(function(e){for(var t=this.cE.q();t.w();){var n=t.k();try{n.g(e)}catch(e){var r=e instanceof Vl?e:new $(e),i=this.dD;if(n===null?i===null:n.j(i))throw r instanceof $?r.a8:r;console.warn(`Error processing an unhandled error callback:`),Oc().jo(0,new zf((e=>(()=>{throw e instanceof $?e.a8:e}))(r)))}}}),new S().i(Cu,`com.raquo.airstream.core.AirstreamError$`,{bo:1,ep:1,eq:1});var Tu;function Eu(){return Tu||=new Cu,Tu}function Du(e){e.bu=!0,e.c2=void 0}function Ou(e,t,n){return qf(e,$r().dB(t,Xs().cn,!0),n)}function ku(e,t){e.bu?Zf(e,t):Mu(e).push(new zf((()=>{Zf(e,t)})))}function Au(e,t){e.bu?Xf(e,t):Mu(e).push(new zf((()=>{Xf(e,t)})))}function ju(e){return tp(e)>0}function Mu(e){var t=e.c2;if(t===void 0){var n=C().B(I().b(new(Ws.r()).C([])));return e.c2=n,n}else return t}var Nu=new S().i(1,`com.raquo.airstream.core.Observer`,{a4:1,X:1,V:1});function B(e,t,n){return new mf(n.hq(t))}function V(e,t,n,r){return new ol(new Y((e=>{(da(),new oa(t,null,null)).aj(new Y((e=>(t=>{n.g(t).a9(e)}))(e)))})),Qa())}function Pu(e,t){this.b6=null,this.cQ=null,this.cR=null,this.b6=e,this.cQ=(n=>{var r=e.cb.g(n);r.h()||t.g(r.y())}),this.cR=(()=>{var e=null;e=this;var t={};if(e===null)throw new Ep;return t.capture=e.b6.cd,t.passive=e.b6.cc,t})()}b=Pu.prototype=new x,b.constructor=Pu;function Fu(){}Fu.prototype=b,b.a9=(function(e){this.ht(e,!1)}),b.ht=(function(e,t){if(lp(e,this)===-1){var n=new Y((t=>(w().he(e.I,this),new Gi(t.eB,new zf((()=>{var t=lp(e,this);t!==-1&&(cp(e,t),w().jc(e.I,this))})))))),r=t?po().jD(e,n):zi().cD(e.ah,new Y((t=>n.g(new qa(e,t)))),!1);return sp(e,this,t),r}else{var i=new Y((e=>void 0));return zi().gN(e.ah,new Y((t=>{i.g(new qa(e,t))})),!1)}}),b.t=(function(){return`EventListener(`+this.b6.b4.ce+`)`});var Iu=new S().i(Pu,`com.raquo.laminar.modifiers.EventListener`,{cp:1,Q:1,au:1});function Lu(e,t,n){this.eE=null,this.eF=null,this.eD=null,this.eE=e,this.eF=t,this.eD=n}b=Lu.prototype=new x,b.constructor=Lu;function Ru(){}Ru.prototype=b,b.a9=(function(e){this.eD.g4(e,this.eE,this.eF)}),new S().i(Lu,`com.raquo.laminar.modifiers.KeySetter`,{cq:1,Q:1,cD:1});function zu(e,t,n){this.eG=null,this.eI=null,this.eH=null,this.eG=e,this.eI=t,this.eH=n}b=zu.prototype=new x,b.constructor=zu;function Bu(){}Bu.prototype=b,b.a9=(function(e){this.hu(e)}),b.hu=(function(e){e.iU(this.eG);var t=this.eI,n=new Y((t=>{this.eH.g4(e,t,this)}));return zi().jt(e.ah,t,n)}),new S().i(zu,`com.raquo.laminar.modifiers.KeyUpdater`,{cr:1,Q:1,au:1});function H(e,t){if(this.cV=null,this.eM=null,this.eN=null,this.eM=t,hl(this),e===null)throw W(new G,`Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load`);if(!w().iw(e,document))throw W(new G,`Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering`);this.eN=e,this.iF()}b=H.prototype=new x,b.constructor=H;function Vu(){}Vu.prototype=b,b.cx=(function(){return this.cV}),b.gk=(function(e){this.cV=e}),b.iF=(function(){return this.cV.g2(),co().ct(this,this.eM,void 0)}),b.aY=(function(){return this.eN}),new S().i(H,`com.raquo.laminar.nodes.RootNode`,{cI:1,ab:1,aw:1});function Hu(e,t,n){this.cX=null,this.eR=null,this.eQ=null,this.eR=e,this.eQ=n,gl(this,e,!1)}b=Hu.prototype=new vl,b.constructor=Hu;function Uu(){}Uu.prototype=b,b.dt=(function(){return this.eR}),b.hh=(function(){var e=this.eQ;return e===void 0?void 0:e.map((e=>e.jI.at))}),new S().i(Hu,`com.raquo.laminar.tags.CustomHtmlTag`,{ax:1,ay:1,ac:1});function Wu(){this.bc=null,this.b7=null,this.b8=!1,this.b9=null,this.ba=!1,this.bb=null,this.bd=!1,this.eZ=null,this.f0=!1,this.eT=null,this.eU=!1,this.eV=null,this.eW=!1,this.eX=null,this.eY=!1,Cl(this,`wa-button`)}b=Wu.prototype=new Tl,b.constructor=Wu;function Gu(){}Gu.prototype=b,b.W=(function(){return this.f0||=(this.eZ=id(),!0),this.eZ}),b.hj=(function(){return this.eU||=(this.eT=ed(),!0),this.eT}),b.Q=(function(){return this.eW||=(this.eV=Oo(),!0),this.eV}),b.af=(function(){return this.eY||=(this.eX=No(),!0),this.eX}),b.cs=(function(){return Mn}),new S().i(Wu,`io.github.nguyenyou.webawesome.laminar.Button$`,{cO:1,a0:1,Z:1});var Ku;function U(){return Ku||=new Wu,Ku}function qu(){this.as=null,this.b5=null,this.f1=null,this.f2=!1,this.f3=null,this.f4=!1,this.f5=null,this.f6=!1,Zc(this,`placement`,new xl)}b=qu.prototype=new $c,b.constructor=qu;function Ju(){}Ju.prototype=b,b.hw=(function(){return this.f2||=(this.f1=Xu().l(`bottom`),!0),this.f1}),b.jq=(function(){return this.f4||=(this.f3=Xu().l(`start`),!0),this.f3}),b.jB=(function(){return this.f6||=(this.f5=Xu().l(`top`),!0),this.f5}),new S().i(qu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentPlacement$`,{cP:1,Y:1,I:1});var Yu;function Xu(){return Yu||=new qu,Yu}function Zu(){this.as=null,this.b5=null,this.f7=null,this.f8=!1,Zc(this,`appearance`,new xl)}b=Zu.prototype=new $c,b.constructor=Zu;function Qu(){}Qu.prototype=b,b.j7=(function(){return this.f8||=(this.f7=ed().l(`plain`),!0),this.f7}),new S().i(Zu,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance$`,{cQ:1,Y:1,I:1});var $u;function ed(){return $u||=new Zu,$u}function td(){this.as=null,this.b5=null,this.f9=null,this.fa=!1,Zc(this,`variant`,new xl)}b=td.prototype=new $c,b.constructor=td;function nd(){}nd.prototype=b,b.P=(function(){return this.fa||=(this.f9=id().l(`brand`),!0),this.f9}),new S().i(td,`io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$`,{cR:1,Y:1,I:1});var rd;function id(){return rd||=new td,rd}function ad(){this.bc=null,this.b7=null,this.b8=!1,this.b9=null,this.ba=!1,this.bb=null,this.bd=!1,this.fh=null,this.fi=!1,this.fj=null,this.fk=!1,this.fd=null,this.fe=!1,this.fl=null,this.fm=!1,this.fn=null,this.fo=!1,this.ff=null,this.fg=!1,Cl(this,`wa-drawer`)}b=ad.prototype=new Tl,b.constructor=ad;function od(){}od.prototype=b,b.iX=(function(){return this.fi||=(this.fh=(J(),new Jc(`wa-hide`)),!0),this.fh}),b.dw=(function(){return this.fk||=(this.fj=(J(),Zc(new Qc,`open`,T().bv)),!0),this.fj}),b.H=(function(){return this.fe||=(this.fd=(J(),Zc(new Qc,`label`,T().a6)),!0),this.fd}),b.dx=(function(){return this.fm||=(this.fl=Xu(),!0),this.fl}),b.jF=(function(){return this.fo||=(this.fn=(J(),Zc(new Qc,`without-header`,T().bv)),!0),this.fn}),b.iz=(function(){return this.fg||=(this.ff=(J(),Zc(new Qc,`light-dismiss`,T().bv)),!0),this.ff}),b.cs=(function(){return Qn}),new S().i(ad,`io.github.nguyenyou.webawesome.laminar.Drawer$`,{cU:1,a0:1,Z:1});var sd;function cd(){return sd||=new ad,sd}function ld(){this.bc=null,this.b7=null,this.b8=!1,this.b9=null,this.ba=!1,this.bb=null,this.bd=!1,this.fv=null,this.fw=!1,this.ft=null,this.fu=!1,Cl(this,`wa-icon`)}b=ld.prototype=new Tl,b.constructor=ld;function ud(){}ud.prototype=b,b.iG=(function(){return this.fw||=(this.fv=(J(),Zc(new Qc,`name`,T().a6)),!0),this.fv}),b.H=(function(){return this.fu||=(this.ft=(J(),Zc(new Qc,`label`,T().a6)),!0),this.ft}),b.cs=(function(){return $n}),new S().i(ld,`io.github.nguyenyou.webawesome.laminar.Icon$`,{cW:1,a0:1,Z:1});var dd;function fd(){return dd||=new ld,dd}function pd(){this.bc=null,this.b7=null,this.b8=!1,this.b9=null,this.ba=!1,this.bb=null,this.bd=!1,this.fz=null,this.fA=!1,this.fx=null,this.fy=!1,Cl(this,`wa-input`)}b=pd.prototype=new Tl,b.constructor=pd;function md(){}md.prototype=b,b.j6=(function(){return this.fA||=(this.fz=(J(),Zc(new Qc,`placeholder`,T().a6)),!0),this.fz}),b.hr=(function(){return this.fy||=(this.fx=(J(),Zc(new Qc,`autofocus`,T().bv)),!0),this.fx}),b.cs=(function(){return lr}),new S().i(pd,`io.github.nguyenyou.webawesome.laminar.Input$`,{cX:1,a0:1,Z:1});var hd;function gd(){return hd||=new pd,hd}function _d(e){if(e.aI.Z)return e.aI.Q().dq()+`[]`;for(var t=e.aI.N,n=-1+t.length|0;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0;if(n>=0)var r=n,i=t.charCodeAt(r),a=i>=48&&i<=57;else var a=!1;if(a){for(n=-1+n|0;;){if(n>=0)var o=n,s=t.charCodeAt(o),c=s>=48&&s<=57;else var c=!1;if(c)n=-1+n|0;else break}for(;n>=0&&t.charCodeAt(n)===36;)n=-1+n|0}for(;;){if(n>=0)var l=n,u=t.charCodeAt(l),d=u!==46&&u!==36;else var d=!1;if(d)n=-1+n|0;else break}var f=1+n|0;return t.substring(f)}function vd(e){this.cY=null,this.aI=e}b=vd.prototype=new x,b.constructor=vd;function yd(){}yd.prototype=b,b.t=(function(){return(this.aI.Y?`interface `:this.aI.X?``:`class `)+this.aI.N}),b.dq=(function(){return this.cY===null&&(this.cY=_d(this)),this.cY}),new S().i(vd,`java.lang.Class`,{d5:1,a:1,M:1});function W(e,t){return Bl(e,t,null,!0,!0),e}var G=class extends Vl{};new S().i(G,`java.lang.Exception`,{L:1,t:1,a:1});function bd(){}b=bd.prototype=new x,b.constructor=bd;function xd(){}xd.prototype=b;function Sd(){this.h7=null,wd=this,this.h7=Rd()}b=Sd.prototype=new tu,b.constructor=Sd;function Cd(){}Cd.prototype=b,new S().i(Sd,`scala.Predef$`,{dH:1,dA:1,dB:1});var wd;function Td(){return wd||=new Sd,wd}function Ed(e,t){return e.co=t,e}function Dd(){this.co=null}b=Dd.prototype=new x,b.constructor=Dd;function Od(){}Od.prototype=b,b.dp=(function(e){return this.co.dn(e,Kh())}),b.dm=(function(e){return this.co.dn(e,Kh())});function kd(e,t){return new Xp(e).hB(t)}function Ad(e,t,n){var r=t>0?t:0,i=n<0?-1:n<=r?0:n-r|0;return i===0?K().z:new em(e,r,i)}function jd(e,t){for(var n=t.q();e.w()&&n.w();)if(!pc().S(e.k(),n.k()))return!1;return e.w()===n.w()}function Md(){this.z=null,Pd=this,this.z=new Wp}b=Md.prototype=new x,b.constructor=Md;function Nd(){}Nd.prototype=b,new S().i(Md,`scala.collection.Iterator$`,{e0:1,a1:1,a:1});var Pd;function K(){return Pd||=new Md,Pd}function Fd(){}b=Fd.prototype=new x,b.constructor=Fd;function Id(){}Id.prototype=b,new S().i(Fd,`scala.collection.immutable.Map$`,{ef:1,e5:1,a:1});var Ld;function Rd(){return Ld||=new Fd,Ld}function zd(e){this.fT=null,this.fT=e}b=zd.prototype=new cu,b.constructor=zd;function Bd(){}Bd.prototype=b,b.aa=(function(){return(0,this.fT)()}),new S().i(zd,`scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855`,{eA:1,bk:1,ae:1});function q(e){this.fU=null,this.fU=e}b=q.prototype=new uu,b.constructor=q;function Vd(){}Vd.prototype=b,b.g=(function(e){return(0,this.fU)(e)}),new S().i(q,`scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28`,{eB:1,bl:1,e:1});var Hd=new S().i(0,`scala.runtime.Nothing$`,{eH:1,t:1,a:1});function Ud(){}b=Ud.prototype=new x,b.constructor=Ud;function Wd(){}Wd.prototype=b,b.ib=(function(e){return(t=>e.g(t))}),new S().i(Ud,`scala.scalajs.js.Any$`,{eM:1,eN:1,eO:1});var Gd;function Kd(){return Gd||=new Ud,Gd}function qd(){}b=qd.prototype=new cu,b.constructor=qd;function Jd(){}Jd.prototype=b;function Yd(){}b=Yd.prototype=new uu,b.constructor=Yd;function Xd(){}Xd.prototype=b;function Zd(){}b=Zd.prototype=new fu,b.constructor=Zd;function Qd(){}Qd.prototype=b;function $d(){}b=$d.prototype=new mu,b.constructor=$d;function ef(){}ef.prototype=b;function tf(e,t,n,r){if(this.dH=null,this.dF=!1,this.cF=null,this.dG=null,this.dH=e,this.dF=t,this.cF=n,r===null)throw new Ep;this.dG=void 0}b=tf.prototype=new x,b.constructor=tf;function nf(){}nf.prototype=b,b.cA=(function(){return this.dG}),b.cv=(function(){return Jr(this)}),b.t=(function(){return Yr(this)}),b.aX=(function(e){try{this.dH.g(e)}catch(e){var t=e instanceof Vl?e:new $(e);this.dF?this.iW(new vm(t)):Eu().ao(new vm(t))}}),b.iW=(function(e){try{this.cF.dr(e)?this.cF.g(e):Eu().ao(e)}catch(n){var t=n instanceof Vl?n:new $(n);Eu().ao(new ym(t,e))}}),new S().i(tf,`com.raquo.airstream.core.Observer$$anon$8`,{bq:1,X:1,V:1,a4:1});function rf(e,t){this.dP=null,this.dQ=null,this.dO=null,this.c5=null,this.dQ=e,this.dO=t,this.dP=void 0,this.c5=new Yh(new zf((()=>Yr(this))))}b=rf.prototype=new x,b.constructor=rf;function af(){}af.prototype=b,b.cA=(function(){return this.dP}),b.t=(function(){return Yr(this)}),b.aX=(function(e){ju(this.c5)&&this.c5.gD(e,null)}),b.cv=(function(){return``+this.dQ.aa()+this.dO}),new S().i(rf,`com.raquo.airstream.eventbus.WriteBus`,{bB:1,X:1,V:1,a4:1});function of(e){if(this.e0=null,this.e1=!1,this.gT=null,e===null)throw new Ep;Sa(this)}b=of.prototype=new x,b.constructor=of;function sf(){}sf.prototype=b,b.jv=(function(){return this.e1||=(this.e0=new yl(`svg`,!1),!0),this.e0}),new S().i(of,`com.raquo.laminar.api.Laminar$svg$`,{bQ:1,c9:1,bZ:1,c1:1});function cf(){this.d=null,uf=this,this.d=new og}b=cf.prototype=new x,b.constructor=cf;function lf(){}lf.prototype=b,new S().i(cf,`com.raquo.laminar.api.package$`,{bT:1,ap:1,as:1,ao:1});var uf;function J(){return uf||=new cf,uf}function df(e,t,n){return e.cf=t,e.cg=n,e}function ff(){this.cf=null,this.cg=null}b=ff.prototype=new Ha,b.constructor=ff;function pf(){}pf.prototype=b,b.l=(function(e){return new Lu(this,gr(e),new Wf(((e,t,n)=>{w().gL(e,t,n)})))}),new S().i(ff,`com.raquo.laminar.keys.StyleProp`,{aa:1,I:1,a8:1,a9:1});function mf(e){this.eP=null,this.cW=null,this.eP=Z(),this.cW=w().hG(e)}b=mf.prototype=new x,b.constructor=mf;function hf(){}hf.prototype=b,b.gM=(function(e){this.eP=e}),b.gS=(function(e){}),b.a9=(function(e){co().ct(e,this,void 0)}),b.jy=(function(){return this.cW.data}),b.aY=(function(){return this.cW}),new S().i(mf,`com.raquo.laminar.nodes.TextNode`,{cK:1,ab:1,Q:1,av:1});function gf(){}b=gf.prototype=new x,b.constructor=gf;function _f(){}_f.prototype=b;function vf(e,t){return e===t}function yf(e){return e?1231:1237}var bf=new S().i(0,`java.lang.Boolean`,{d2:1,a:1,R:1,M:1},(e=>typeof e==`boolean`));function xf(e){return e}function Sf(e,t){return t instanceof dr&&e===t.c}var Cf=new S().i(0,`java.lang.Character`,{aE:1,a:1,R:1,M:1},(e=>e instanceof dr)),wf=class extends G{};function Tf(){this.u=null,this.u=``}b=Tf.prototype=new x,b.constructor=Tf;function Ef(){}Ef.prototype=b,b.hk=(function(e){var t=zl().iI(e,0,e.a.length);return this.u=``+this.u+t,this}),b.t=(function(){return this.u}),b.n=(function(){return this.u.length}),b.gi=(function(e){return this.u.charCodeAt(e)}),new S().i(Tf,`java.lang.StringBuilder`,{di:1,ad:1,aC:1,a:1});function Df(){}b=Df.prototype=new xd,b.constructor=Df;function Of(){}Of.prototype=b;function kf(){}b=kf.prototype=new x,b.constructor=kf;function Af(){}Af.prototype=b,b.t=(function(){return`<function1>`}),b.dr=(function(e){return!1}),b.hn=(function(e){throw new Ip(e)}),b.g=(function(e){this.hn(e)}),new S().i(kf,`scala.PartialFunction$$anon$1`,{dG:1,g:1,e:1,a:1});function jf(){}b=jf.prototype=new x,b.constructor=jf;function Mf(){}Mf.prototype=b,b.q=(function(){return this}),b.cw=(function(e){return this.bY(e,-1)}),b.bY=(function(e,t){return Ad(this,e,t)}),b.t=(function(){return`<iterator>`}),b.bH=(function(e,t,n,r){return rc(this,e,t,n,r)}),b.E=(function(){return-1});function Nf(e,t){return e.cp=t,e}function Pf(){this.cp=null}b=Pf.prototype=new x,b.constructor=Pf;function Ff(){}Ff.prototype=b,b.g5=(function(e){return this.cp.dm(e)}),b.gw=(function(e){return this.cp.dp(e)}),b.dp=(function(e){return this.gw(e)}),b.dm=(function(e){return this.g5(e)});function If(e,t){return t>=0&&e.aG(t)>0}function Lf(e){return e.aG(0)===0}function Rf(e,t){var n=e.E();if(n!==-1)var r=t.E(),i=r!==-1&&n!==r;else var i=!1;return i?!1:jd(e.q(),t)}function zf(e){this.fX=null,this.fX=e}b=zf.prototype=new Jd,b.constructor=zf;function Bf(){}Bf.prototype=b,b.aa=(function(){return(0,this.fX)()}),new S().i(zf,`scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1`,{eU:1,eT:1,bk:1,ae:1});function Y(e){this.fY=null,this.fY=e}b=Y.prototype=new Xd,b.constructor=Y;function Vf(){}Vf.prototype=b,b.g=(function(e){return(0,this.fY)(e)}),new S().i(Y,`scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab`,{eW:1,eV:1,bl:1,e:1});function Hf(e){this.fZ=null,this.fZ=e}b=Hf.prototype=new Qd,b.constructor=Hf;function Uf(){}Uf.prototype=b,b.dl=(function(e,t){return(0,this.fZ)(e,t)}),new S().i(Hf,`scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2`,{eY:1,eX:1,eC:1,dy:1});function Wf(e){this.g0=null,this.g0=e}b=Wf.prototype=new ef,b.constructor=Wf;function Gf(){}Gf.prototype=b,b.g4=(function(e,t,n){return(0,this.g0)(e,t,n)}),new S().i(Wf,`scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491`,{f0:1,eZ:1,eD:1,dz:1});function Kf(e){e.bs=C().B(I().b(new(Nu.r()).C([]))),e.bt=C().B(I().b(new(qr.r()).C([]))),e.c4=!1}function qf(e,t,n){var r=hi(),i=(()=>{Qf(e);var r=Jf(e,t,n);return $f(e),r}),a=!ju(e);if(r.C||!a)var o=i();else{r.C=!0;try{var o=i()}finally{r.C=!1,di(r)}}return o}function Jf(e,t,n){var r=new Gi(n,new zf((()=>{ku(e,t)})));return e.bs.push(t),r}function Yf(e,t,n){var r=hi(),i=(()=>{!ju(e)&&n&&Qf(e),e.bt.push(t),$f(e)}),a=!ju(e);if(r.C||!a)i();else{r.C=!0;try{i()}finally{r.C=!1,di(r)}}}function Xf(e,t){ri().gJ(e.bt,t)&&ep(e)}function Zf(e,t){ri().gJ(e.bs,t)&&ep(e)}function Qf(e){e.c4||=(e.j0(),!0)}function $f(e){tp(e)===1&&e.iY()}function ep(e){ju(e)||(e.iZ(),e.c4=!1)}function tp(e){var t=e.bs.length,n=e.bt;return(t|0)+(n.length|0)|0}function np(){this.dL=null,this.br=null,this.dK=null,this.dL=void 0,this.br=new rf(new zf((()=>Yr(this))),`.writer`),this.dK=this.br.c5}b=np.prototype=new x,b.constructor=np;function rp(){}rp.prototype=b,b.cA=(function(){return this.dL}),b.cv=(function(){return Jr(this)}),b.t=(function(){return Yr(this)}),b.gO=(function(){return this.dK}),new S().i(np,`com.raquo.airstream.eventbus.EventBus`,{by:1,a5:1,a6:1,X:1,V:1});function ip(e,t){this.ca=null,this.cN=null,this.ca=e,this.cN=t}b=ip.prototype=new x,b.constructor=ip;function ap(){}ap.prototype=b,b.a9=(function(e){var t=this.cN;t!==void 0&&t.gE(e,this.ca),co().ct(e,this.ca,void 0)}),b.jE=(function(e){return new ip(this.ca,e.hm(this.cN))});var X=new S().i(ip,`com.raquo.laminar.inserters.StaticChildInserter`,{ce:1,Q:1,cc:1,cg:1,cb:1});function op(e){e.cS=new Ji(new zf((()=>{e.ah.g2()})),new zf((()=>{e.ah.hH()}))),e.aM=void 0}function sp(e,t,n){if(e.aM===void 0)e.aM=C().B(I().b(new(Iu.r()).C([t])));else if(n){var r=e.aM;if(r===void 0){var i;throw new kp(`undefined.get`)}else var i=r;i.unshift(t)}else{var a=e.aM;if(a===void 0){var o;throw new kp(`undefined.get`)}else var o=a;o.push(t)}}function cp(e,t){var n=e.aM;n!==void 0&&n.splice(t,1)}function lp(e,t){var n=e.aM;if(n===void 0)return-1;for(var r=!1,i=0;!r&&i<(n.length|0);){var a=n[i];(a===null?t===null:mr(a,t))?r=!0:i=1+i|0}return r?i:-1}function up(e,t){fp(e,e.cj,t)&&pp(e,t)}function dp(e,t){var n=e.cj;e.cj=t,fp(e,n,t)||pp(e,t)}function fp(e,t,n){var r=!t.h()&&!t.y().cx().X.h(),i=!n.h()&&!n.y().cx().X.h();return r&&!i}function pp(e,t){mp(e,t.h()?Z():new Q(t.y().cx()))}function mp(e,t){if(t.h())e.cS.hz();else{var n=t.y();e.cS.jl(n)}}function hp(){}b=hp.prototype=new _f,b.constructor=hp;function gp(){}gp.prototype=b;var _p=class extends wf{constructor(e){super(),Bl(this,e,null,!0,!0)}};new S().i(_p,`java.lang.ArithmeticException`,{d1:1,S:1,L:1,t:1,a:1});var vp=new S().i(0,`java.lang.Byte`,{d3:1,U:1,a:1,R:1,M:1},(e=>Tr(e)));function yp(e,t){return Bl(e,t,null,!0,!0),e}function bp(e){return Bl(e,null,null,!0,!0),e}var xp=class extends wf{};new S().i(xp,`java.lang.IllegalArgumentException`,{d8:1,S:1,L:1,t:1,a:1});function Sp(e,t){return Bl(e,t,null,!0,!0),e}var Cp=class extends wf{};new S().i(Cp,`java.lang.IndexOutOfBoundsException`,{aG:1,S:1,L:1,t:1,a:1});function wp(){}b=wp.prototype=new _f,b.constructor=wp;function Tp(){}Tp.prototype=b,new S().i(wp,`java.lang.JSConsoleBasedPrintStream$DummyOutputStream`,{db:1,aB:1,az:1,aD:1,aA:1});var Ep=class extends wf{constructor(){super(),Bl(this,null,null,!0,!0)}};new S().i(Ep,`java.lang.NullPointerException`,{dc:1,S:1,L:1,t:1,a:1});var Dp=new S().i(0,`java.lang.Short`,{dd:1,U:1,a:1,R:1,M:1},(e=>Er(e))),Op=class extends wf{constructor(e){super(),Bl(this,e,null,!0,!0)}};new S().i(Op,`java.lang.UnsupportedOperationException`,{dl:1,S:1,L:1,t:1,a:1});var kp=class extends wf{constructor(e){super(),Bl(this,e,null,!0,!0)}};new S().i(kp,`java.util.NoSuchElementException`,{dq:1,S:1,L:1,t:1,a:1});function Ap(){}b=Ap.prototype=new Of,b.constructor=Ap;function jp(){}jp.prototype=b,b.g=(function(e){return e}),b.t=(function(){return`generalized constraint`}),new S().i(Ap,`scala.$less$colon$less$$anon$1`,{dv:1,ds:1,dt:1,e:1,a:1});function Mp(e){return e.d3||=(e.d4=e.cm===null?`null`:Fp(e),!0),e.d4}function Np(e){return e.d3?e.d4:Mp(e)}function Pp(e){var t=e.cm;return`of class `+pr(t)}function Fp(e){try{return e.cm+` (`+Pp(e)+`)`}catch{return`an instance `+Pp(e)}}var Ip=class extends wf{constructor(e){super(),this.d4=null,this.cm=null,this.d3=!1,this.cm=e,Bl(this,null,null,!0,!0)}bT(){return Np(this)}};new S().i(Ip,`scala.MatchError`,{dC:1,S:1,L:1,t:1,a:1});function Lp(){}b=Lp.prototype=new x,b.constructor=Lp;function Rp(){}Rp.prototype=b,b.h=(function(){return this===Z()}),b.E=(function(){return this.h()?0:1}),b.q=(function(){return this.h()?K().z:new Kp(this.y())});function zp(e){this.bz=0,this.fL=0,this.fK=null,this.fK=e,this.bz=0,this.fL=e.ak()}b=zp.prototype=new Mf,b.constructor=zp;function Bp(){}Bp.prototype=b,b.w=(function(){return this.bz<this.fL}),b.k=(function(){var e=this.fK.al(this.bz);return this.bz=1+this.bz|0,e}),new S().i(zp,`scala.Product$$anon$1`,{dI:1,r:1,s:1,b:1,c:1});function Vp(e){this.co=null,Ed(this,e)}b=Vp.prototype=new Od,b.constructor=Vp;function Hp(){}Hp.prototype=b,new S().i(Vp,`scala.collection.ClassTagSeqFactory$AnySeqDelegate`,{dW:1,dV:1,a1:1,a:1,af:1});function Up(e){return nc(e,e.bk()+`(`,`, `,`)`)}function Wp(){}b=Wp.prototype=new Mf,b.constructor=Wp;function Gp(){}Gp.prototype=b,b.w=(function(){return!1}),b.iK=(function(){throw new kp(`next on empty iterator`)}),b.E=(function(){return 0}),b.bY=(function(e,t){return this}),b.k=(function(){this.iK()}),new S().i(Wp,`scala.collection.Iterator$$anon$19`,{e1:1,r:1,s:1,b:1,c:1});function Kp(e){this.bB=!1,this.fP=null,this.fP=e,this.bB=!1}b=Kp.prototype=new Mf,b.constructor=Kp;function qp(){}qp.prototype=b,b.w=(function(){return!this.bB}),b.k=(function(){return this.bB?K().z.k():(this.bB=!0,this.fP)}),b.bY=(function(e,t){return this.bB||e>0||t===0?K().z:this}),new S().i(Kp,`scala.collection.Iterator$$anon$20`,{e2:1,r:1,s:1,b:1,c:1});function Jp(e){for(;;){if(e.N instanceof Xp){var t=e.N;e.N=t.N,e.av=t.av,t.a4!==null&&(e.a3===null&&(e.a3=t.a3),t.a3.bC=e.a4,e.a4=t.a4);continue}return}}function Yp(e){for(;;)if(e.a4===null)return e.N=null,e.a3=null,!1;else{if(e.N=e.a4.il(),e.a3===e.a4&&(e.a3=e.a3.bC),e.a4=e.a4.bC,Jp(e),e.av)return!0;if(e.N!==null&&e.N.w())return e.av=!0,!0}}function Xp(e){this.N=null,this.a4=null,this.a3=null,this.av=!1,this.N=e,this.a4=null,this.a3=null,this.av=!1}b=Xp.prototype=new Mf,b.constructor=Xp;function Zp(){}Zp.prototype=b,b.w=(function(){return this.av?!0:this.N===null?!1:this.N.w()?(this.av=!0,!0):Yp(this)}),b.k=(function(){return this.w()?(this.av=!1,this.N.k()):K().z.k()}),b.hB=(function(e){var t=new ic(e,null);return this.a4===null?(this.a4=t,this.a3=t):(this.a3.bC=t,this.a3=t),this.N===null&&(this.N=K().z),this}),new S().i(Xp,`scala.collection.Iterator$ConcatIterator`,{aQ:1,r:1,s:1,b:1,c:1});function Qp(e){for(;e.an>0;)e.aw.w()?(e.aw.k(),e.an=-1+e.an|0):e.an=0}function $p(e,t){if(e.Z<0)return-1;var n=e.Z-t|0;return n<0?0:n}function em(e,t,n){this.aw=null,this.Z=0,this.an=0,this.aw=e,this.Z=n,this.an=t}b=em.prototype=new Mf,b.constructor=em;function tm(){}tm.prototype=b,b.E=(function(){var e=this.aw.E();if(e<0)return-1;var t=e-this.an|0,n=t<0?0:t;if(this.Z<0)return n;var r=this.Z;return r<n?r:n}),b.w=(function(){return Qp(this),this.Z!==0&&this.aw.w()}),b.k=(function(){return Qp(this),this.Z>0?(this.Z=-1+this.Z|0,this.aw.k()):this.Z<0?this.aw.k():K().z.k()}),b.bY=(function(e,t){var n=e>0?e:0;if(t<0)var r=$p(this,n);else if(t<=n)var r=0;else if(this.Z<0)var r=t-n|0;else var i=$p(this,n),a=t-n|0,r=i<a?i:a;var o=this.an+n|0;return r===0?K().z:o<0?(this.an=2147483647,this.Z=0,kd(this,new zd((()=>new em(this.aw,-2147483647+o|0,r))))):(this.an=o,this.Z=r,this)}),new S().i(em,`scala.collection.Iterator$SliceIterator`,{e4:1,r:1,s:1,b:1,c:1});function nm(e,t){return t>=0&&e.aG(t)>0}function rm(e,t){if(t<0)throw Sp(new Cp,``+t);var n=e.hM(t);if(n.h())throw Sp(new Cp,``+t);return n.ad()}function im(e,t){return ng(t)?am(e,e,t):Rf(e,t)}function am(e,t,n){for(;;)if(t===n)return!0;else if(!t.h()&&!n.h()&&pc().S(t.ad(),n.ad())){var r=t.a1(),i=n.a1();t=r,n=i}else return t.h()&&n.h()}function om(e){this.bE=null,this.bE=e}b=om.prototype=new Mf,b.constructor=om;function sm(){}sm.prototype=b,b.w=(function(){return!this.bE.h()}),b.k=(function(){var e=this.bE.ad();return this.bE=this.bE.a1(),e}),new S().i(om,`scala.collection.StrictOptimizedLinearSeqOps$$anon$1`,{e9:1,r:1,s:1,b:1,c:1});function cm(){this.cp=null,Nf(this,_m())}b=cm.prototype=new Ff,b.constructor=cm;function lm(){}lm.prototype=b,new S().i(cm,`scala.collection.mutable.Buffer$`,{ek:1,e6:1,af:1,a1:1,a:1});var um;function dm(){return um||=new cm,um}function fm(e){this.bG=0,this.fV=0,this.fW=null,this.fW=e,this.bG=0,this.fV=e.ak()}b=fm.prototype=new Mf,b.constructor=fm;function pm(){}pm.prototype=b,b.w=(function(){return this.bG<this.fV}),b.k=(function(){var e=this.fW.al(this.bG);return this.bG=1+this.bG|0,e}),new S().i(fm,`scala.runtime.ScalaRunTime$$anon$1`,{eK:1,r:1,s:1,b:1,c:1});function mm(){}b=mm.prototype=new x,b.constructor=mm;function hm(){}hm.prototype=b,b.dm=(function(e){return this.gx(e)}),b.gx=(function(e){return ou(w_(new T_),e).gK()}),b.dp=(function(e){return this.gx(e)}),new S().i(mm,`scala.scalajs.js.WrappedArray$`,{eQ:1,ea:1,af:1,a1:1,a:1});var gm;function _m(){return gm||=new mm,gm}var vm=class e extends Su{constructor(e){super(),this.bo=null,this.bo=e,Bl(this,`ObserverError: `+Eu().cy(e),null,!0,!0)}aH(){return new zp(this)}r(){return z().cC(this,-889275714,!1)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.bo,r=t.bo;return n===null?r===null:n.j(r)}else return!1}ak(){return 1}am(){return`ObserverError`}al(e){if(e===0)return this.bo;throw Sp(new Cp,``+e)}t(){return`ObserverError: `+this.bo}};new S().i(vm,`com.raquo.airstream.core.AirstreamError$ObserverError`,{ah:1,a3:1,t:1,a:1,d:1,T:1});var ym=class e extends Su{constructor(e,t){super(),this.bq=null,this.bp=null,this.bq=e,this.bp=t,Bl(this,`ObserverErrorHandlingError: `+Eu().cy(e)+`; cause: `+Eu().cy(t),null,!0,!0),this.is(t)}aH(){return new zp(this)}r(){return z().cC(this,-889275714,!1)}j(t){if(this===t)return!0;if(t instanceof e){var n=this.bq,r=t.bq;if(n===null?r===null:n.j(r)){var i=this.bp,a=t.bp;return i===null?a===null:i.j(a)}else return!1}else return!1}ak(){return 2}am(){return`ObserverErrorHandlingError`}al(e){if(e===0)return this.bq;if(e===1)return this.bp;throw Sp(new Cp,``+e)}t(){return`ObserverErrorHandlingError: `+this.bq+`; cause: `+this.bp}};new S().i(ym,`com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError`,{ai:1,a3:1,t:1,a:1,d:1,T:1});var bm=class e extends Su{constructor(e,t){super(),this.b0=null,this.aZ=0,this.b0=e,this.aZ=t,Bl(this,`Transaction depth exceeded maxDepth = `+t+`: Execution of `+e+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aH(){return new zp(this)}r(){var e=-889275714;return e=L().c(e,Pm(`TransactionDepthExceeded`)),e=L().c(e,L().A(this.b0)),e=L().c(e,this.aZ),L().p(e,2)}j(t){return this===t?!0:t instanceof e&&this.aZ===t.aZ?this.b0===t.b0:!1}ak(){return 2}am(){return`TransactionDepthExceeded`}al(e){if(e===0)return this.b0;if(e===1)return this.aZ;throw Sp(new Cp,``+e)}t(){return`TransactionDepthExceeded: `+this.b0+`; maxDepth: `+this.aZ}};new S().i(bm,`com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded`,{aj:1,a3:1,t:1,a:1,d:1,T:1});var xm=new S().i(1,`com.raquo.airstream.core.EventStream`,{al:1,a5:1,V:1,ak:1,an:1,a6:1});function Sm(e,t){var n=e.cT;n===void 0?e.cT=wc().ho(C().B(I().b(new(Lm.r()).C([t])))):n.push(t)|0}function Cm(e,t){var n=e.eL;if(n!==void 0){_return:{for(var r=n.length|0,i=0;i<r;){if(n[i].kf()===t){var a=i;break _return}i=1+i|0}var a=-1}return a>=0}else return!1}function wm(e,t){this.cj=null,this.ah=null,this.cS=null,this.aM=null,this.cU=null,this.I=null,this.eL=null,this.cT=null,this.cU=e,this.I=t,this.cj=Z(),hl(this),op(this),this.eL=void 0,this.cT=void 0}b=wm.prototype=new x,b.constructor=wm;function Tm(){}Tm.prototype=b,b.a9=(function(e){co().ct(e,this,void 0)}),b.cx=(function(){return this.ah}),b.gk=(function(e){this.ah=e}),b.gS=(function(e){up(this,e)}),b.gM=(function(e){dp(this,e)}),b.hD=(function(){if(w().iv(this.I)){var e=this.cU;return e instanceof Hu?e.hh():void 0}else return Da().ex}),b.it=(function(e){var t=this.hD();return t!==void 0&&na().iq(t,e,0)}),b.iU=(function(e){if(e instanceof el&&this.it(e.at)){if(Cm(this,e.at))throw W(new G,"Can not add uncontrolled `"+e.at+" <-- ???` to element `"+w().gl(this.I)+"` that already has an input controller for `"+e.at+"` property.");Sm(this,e.at)}}),b.t=(function(){return`ReactiveHtmlElement(`+(this.I===null?`tag=`+this.cU.dt():this.I.outerHTML)+`)`}),b.aY=(function(){return this.I}),new S().i(wm,`com.raquo.laminar.nodes.ReactiveHtmlElement`,{cH:1,ab:1,Q:1,av:1,aw:1,cF:1});function Em(e,t){return Object.is(e,t)}function Dm(e){return Bo().du(e)}var Om=new S().i(0,`java.lang.Double`,{aF:1,U:1,a:1,R:1,M:1,W:1},(e=>typeof e==`number`)),km=new S().i(0,`java.lang.Float`,{d6:1,U:1,a:1,R:1,M:1,W:1},(e=>Or(e))),Am=new S().i(0,`java.lang.Integer`,{d9:1,U:1,a:1,R:1,M:1,W:1},(e=>Dr(e)));function jm(e,t){return t instanceof P&&e.e===t.e&&e.f===t.f}function Mm(e){return e.e^e.f}var Nm=new S().i(0,`java.lang.Long`,{aH:1,U:1,a:1,R:1,M:1,W:1},(e=>e instanceof P));function Pm(e){for(var t=0,n=1,r=-1+e.length|0;r>=0;)t=t+Math.imul(e.charCodeAt(r),n)|0,n=Math.imul(31,n),r=-1+r|0;return t}function Fm(e,t){return e===t}function Im(e,t){var n=kl().jA(t);return e.indexOf(n)|0}var Lm=new S().i(0,`java.lang.String`,{dg:1,a:1,R:1,ad:1,M:1,W:1},(e=>typeof e==`string`)),Rm=class extends Cp{constructor(){super(),Bl(this,null,null,!0,!0)}};new S().i(Rm,`java.lang.StringIndexOutOfBoundsException`,{dj:1,aG:1,S:1,L:1,t:1,a:1});function zm(){}b=zm.prototype=new Rp,b.constructor=zm;function Bm(){}Bm.prototype=b,b.ic=(function(){throw new kp(`None.get`)}),b.am=(function(){return`None`}),b.ak=(function(){return 0}),b.al=(function(e){return L().bU(e)}),b.aH=(function(){return new fm(this)}),b.r=(function(){return 2433880}),b.t=(function(){return`None`}),b.y=(function(){this.ic()}),new S().i(zm,`scala.None$`,{dD:1,aL:1,b:1,T:1,d:1,a:1});var Vm;function Z(){return Vm||=new zm,Vm}function Q(e){this.bA=null,this.bA=e}b=Q.prototype=new Rp,b.constructor=Q;function Hm(){}Hm.prototype=b,b.y=(function(){return this.bA}),b.am=(function(){return`Some`}),b.ak=(function(){return 1}),b.al=(function(e){return e===0?this.bA:L().bU(e)}),b.aH=(function(){return new fm(this)}),b.r=(function(){return z().cC(this,-889275714,!1)}),b.t=(function(){return I().hd(this)}),b.j=(function(e){return this===e||e instanceof Q&&pc().S(this.bA,e.bA)}),new S().i(Q,`scala.Some`,{aM:1,aL:1,b:1,T:1,d:1,a:1});function Um(){}b=Um.prototype=new x,b.constructor=Um;function Wm(){}Wm.prototype=b,b.bk=(function(){return this.bn()}),b.aj=(function(e){tc(this,e)}),b.bH=(function(e,t,n,r){return rc(this,e,t,n,r)}),b.E=(function(){return-1});function Gm(e,t){return e.Y=t,e.i=0,e.M=js().bl(e.Y),e}function Km(){this.Y=null,this.i=0,this.M=0}b=Km.prototype=new Mf,b.constructor=Km;function qm(){}qm.prototype=b,b.E=(function(){return this.M-this.i|0}),b.w=(function(){return this.i<this.M}),b.k=(function(){this.i>=js().bl(this.Y)&&K().z.k();var e=I().bj(this.Y,this.i);return this.i=1+this.i|0,e}),b.cw=(function(e){if(e>0){var t=this.i+e|0;if(t<0)var n=this.M;else var r=this.M,n=r<t?r:t;this.i=n}return this}),new S().i(Km,`scala.collection.ArrayOps$ArrayIterator`,{N:1,r:1,s:1,b:1,c:1,a:1});function Jm(e,t){return t<0?0:t>e.a7?e.a7:t}function Ym(e){this.fO=null,this.au=0,this.a7=0,this.fO=e,this.au=0,this.a7=e.n()}b=Ym.prototype=new Mf,b.constructor=Ym;function Xm(){}Xm.prototype=b,b.E=(function(){return this.a7}),b.w=(function(){return this.a7>0}),b.k=(function(){if(this.a7>0){var e=this.fO.s(this.au);return this.au=1+this.au|0,this.a7=-1+this.a7|0,e}else return K().z.k()}),b.cw=(function(e){if(e>0){this.au=this.au+e|0;var t=this.a7-e|0;this.a7=t<0?0:t}return this}),b.bY=(function(e,t){var n=Jm(this,e),r=Jm(this,t)-n|0;return this.a7=r<0?0:r,this.au=this.au+n|0,this}),new S().i(Ym,`scala.collection.IndexedSeqView$IndexedSeqViewIterator`,{dZ:1,r:1,s:1,b:1,c:1,a:1});function Zm(e){return e.de||=(e.df=new Lg(new Nr(0)),!0),e.df}function Qm(e){return e.de?e.df:Zm(e)}function $m(){this.df=null,this.h8=null,this.de=!1,th=this,this.h8=new Vp(this)}b=$m.prototype=new x,b.constructor=$m;function eh(){}eh.prototype=b,b.i9=(function(e,t){return e instanceof yg?e:this.gP(Yl().gv(e,t))}),b.gP=(function(e){if(e===null)return null;if(e instanceof Nr)return new Lg(e);if(e instanceof zr)return new Ng(e);if(e instanceof Hr)return new kg(e);if(e instanceof Br)return new Fg(e);if(e instanceof Vr)return new jg(e);if(e instanceof Ir)return new Dg(e);if(e instanceof Lr)return new Tg(e);if(e instanceof Rr)return new zg(e);if(e instanceof Fr)return new Cg(e);if(Ts(e,1))return new Vg(e);throw new Ip(e)}),b.dn=(function(e,t){return this.i9(e,t)}),new S().i($m,`scala.collection.immutable.ArraySeq$`,{ee:1,aS:1,aO:1,aN:1,aP:1,a:1});var th;function nh(){return th||=new $m,th}function rh(){this.h9=null,this.fS=null,ah=this,this.h9=new Vp(this),this.fS=new s_(new Nr(0))}b=rh.prototype=new x,b.constructor=rh;function ih(){}ih.prototype=b,b.ia=(function(e,t){return this.iB(Yl().gv(e,t))}),b.iB=(function(e){if(e===null)return null;if(e instanceof Nr)return new s_(e);if(e instanceof zr)return new r_(e);if(e instanceof Hr)return new $g(e);if(e instanceof Br)return new a_(e);if(e instanceof Vr)return new t_(e);if(e instanceof Ir)return new Zg(e);if(e instanceof Lr)return new Yg(e);if(e instanceof Rr)return new l_(e);if(e instanceof Fr)return new qg(e);if(Ts(e,1))return new d_(e);throw new Ip(e)}),b.dn=(function(e,t){return this.ia(e,t)}),new S().i(rh,`scala.collection.mutable.ArraySeq$`,{ei:1,aS:1,aO:1,aN:1,aP:1,a:1});var ah;function oh(){return ah||=new rh,ah}function sh(e){this.cf=null,this.cg=null,this.ev=null,this.ew=!1,df(this,e,v_())}b=sh.prototype=new pf,b.constructor=sh;function ch(){}ch.prototype=b,b.gR=(function(){return this.ew||=(this.ev=Gc(this),!0),this.ev}),new S().i(sh,`com.raquo.laminar.defs.styles.StyleProps$$anon$5`,{c6:1,aa:1,I:1,a8:1,a9:1,aq:1,ar:1});function lh(){}b=lh.prototype=new gp,b.constructor=lh;function uh(){}uh.prototype=b;function dh(e){this.Y=null,this.i=0,this.M=0,this.d5=null,this.d5=e,Gm(this,e)}b=dh.prototype=new qm,b.constructor=dh;function fh(){}fh.prototype=b,b.iL=(function(){this.i>=this.d5.a.length&&K().z.k();var e=this.d5.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iL()}),new S().i(dh,`scala.collection.ArrayOps$ArrayIterator$mcB$sp`,{dM:1,N:1,r:1,s:1,b:1,c:1,a:1});function ph(e){this.Y=null,this.i=0,this.M=0,this.d6=null,this.d6=e,Gm(this,e)}b=ph.prototype=new qm,b.constructor=ph;function mh(){}mh.prototype=b,b.iM=(function(){this.i>=this.d6.a.length&&K().z.k();var e=this.d6.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return kr(this.iM())}),new S().i(ph,`scala.collection.ArrayOps$ArrayIterator$mcC$sp`,{dN:1,N:1,r:1,s:1,b:1,c:1,a:1});function hh(e){this.Y=null,this.i=0,this.M=0,this.d7=null,this.d7=e,Gm(this,e)}b=hh.prototype=new qm,b.constructor=hh;function gh(){}gh.prototype=b,b.iN=(function(){this.i>=this.d7.a.length&&K().z.k();var e=this.d7.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iN()}),new S().i(hh,`scala.collection.ArrayOps$ArrayIterator$mcD$sp`,{dO:1,N:1,r:1,s:1,b:1,c:1,a:1});function _h(e){this.Y=null,this.i=0,this.M=0,this.d8=null,this.d8=e,Gm(this,e)}b=_h.prototype=new qm,b.constructor=_h;function vh(){}vh.prototype=b,b.iO=(function(){this.i>=this.d8.a.length&&K().z.k();var e=this.d8.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iO()}),new S().i(_h,`scala.collection.ArrayOps$ArrayIterator$mcF$sp`,{dP:1,N:1,r:1,s:1,b:1,c:1,a:1});function yh(e){this.Y=null,this.i=0,this.M=0,this.d9=null,this.d9=e,Gm(this,e)}b=yh.prototype=new qm,b.constructor=yh;function bh(){}bh.prototype=b,b.iP=(function(){this.i>=this.d9.a.length&&K().z.k();var e=this.d9.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iP()}),new S().i(yh,`scala.collection.ArrayOps$ArrayIterator$mcI$sp`,{dQ:1,N:1,r:1,s:1,b:1,c:1,a:1});function xh(e){this.Y=null,this.i=0,this.M=0,this.da=null,this.da=e,Gm(this,e)}b=xh.prototype=new qm,b.constructor=xh;function Sh(){}Sh.prototype=b,b.iQ=(function(){this.i>=this.da.a.length&&K().z.k();var e=this.da.a[this.i],t=e.e,n=e.f;return this.i=1+this.i|0,new P(t,n)}),b.k=(function(){return this.iQ()}),new S().i(xh,`scala.collection.ArrayOps$ArrayIterator$mcJ$sp`,{dR:1,N:1,r:1,s:1,b:1,c:1,a:1});function Ch(e){this.Y=null,this.i=0,this.M=0,this.db=null,this.db=e,Gm(this,e)}b=Ch.prototype=new qm,b.constructor=Ch;function wh(){}wh.prototype=b,b.iR=(function(){this.i>=this.db.a.length&&K().z.k();var e=this.db.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iR()}),new S().i(Ch,`scala.collection.ArrayOps$ArrayIterator$mcS$sp`,{dS:1,N:1,r:1,s:1,b:1,c:1,a:1});function Th(e){this.Y=null,this.i=0,this.M=0,this.fN=null,this.fN=e,Gm(this,e)}b=Th.prototype=new qm,b.constructor=Th;function Eh(){}Eh.prototype=b,b.iS=(function(){this.i>=this.fN.a.length&&K().z.k(),this.i=1+this.i|0}),b.k=(function(){this.iS()}),new S().i(Th,`scala.collection.ArrayOps$ArrayIterator$mcV$sp`,{dT:1,N:1,r:1,s:1,b:1,c:1,a:1});function Dh(e){this.Y=null,this.i=0,this.M=0,this.dc=null,this.dc=e,Gm(this,e)}b=Dh.prototype=new qm,b.constructor=Dh;function Oh(){}Oh.prototype=b,b.iT=(function(){this.i>=this.dc.a.length&&K().z.k();var e=this.dc.a[this.i];return this.i=1+this.i|0,e}),b.k=(function(){return this.iT()}),new S().i(Dh,`scala.collection.ArrayOps$ArrayIterator$mcZ$sp`,{dU:1,N:1,r:1,s:1,b:1,c:1,a:1});function kh(e){return e.bk()+`(<not computed>)`}function Ah(){}b=Ah.prototype=new x,b.constructor=Ah;function jh(){}jh.prototype=b;var $=class e extends wf{constructor(e){super(),this.a8=null,this.a8=e,Bl(this,null,null,!0,!0)}bT(){return gr(this.a8)}am(){return`JavaScriptException`}ak(){return 1}al(e){return e===0?this.a8:L().bU(e)}aH(){return new fm(this)}r(){return z().cC(this,-889275714,!1)}j(t){return this===t||t instanceof e&&pc().S(this.a8,t.a8)}};new S().i($,`scala.scalajs.js.JavaScriptException`,{bm:1,S:1,L:1,t:1,a:1,T:1,d:1});function Mh(e,t,n){e.bu=!1;for(var r=e.bs,i=0;i<(r.length|0);){var a=r[i];i=1+i|0;try{a.aX(t)}catch(e){var o=e instanceof Vl?e:new $(e);Eu().ao(new vm(o))}}for(var s=e.bt,c=0;c<(s.length|0);){var l=s[c];c=1+c|0,l.gD(t,n)}e.bu=!0;var u=e.c2;if(u!==void 0){for(var d=0,f=u.length|0;d<f;)u[d].aa(),d=1+d|0;u.length=0}}function Nh(e){this.cf=null,this.cg=null,this.et=null,this.eu=!1,df(this,e,v_())}b=Nh.prototype=new pf,b.constructor=Nh;function Ph(){}Ph.prototype=b,b.gR=(function(){return this.eu||=(this.et=Gc(this),!0),this.et}),new S().i(Nh,`com.raquo.laminar.defs.styles.StyleProps$$anon$4`,{c5:1,aa:1,I:1,a8:1,a9:1,c7:1,aq:1,ar:1});function Fh(e,t){typeof console<`u`&&(e.fC&&console.error?console.error(t):console.log(t))}function Ih(e){this.fC=!1,this.bx=null,this.fC=e,new wp,this.bx=``}b=Ih.prototype=new uh,b.constructor=Ih;function Lh(){}Lh.prototype=b,b.ix=(function(e){for(var t=e;t!==``;){var n=t.indexOf(`
`)|0;if(n<0)this.bx=``+this.bx+t,t=``;else{var r=this.bx,i=t;Fh(this,``+r+i.substring(0,n)),this.bx=``;var a=t,o=1+n|0;t=a.substring(o)}}}),new S().i(Ih,`java.lang.JSConsoleBasedPrintStream`,{da:1,d0:1,cZ:1,aB:1,az:1,aD:1,aA:1,aC:1});function Rh(e,t,n){for(;;)if(t<=0||n.h())return n;else{var r=-1+t|0,i=n.a1();t=r,n=i}}function zh(){this.dg=null}b=zh.prototype=new jh,b.constructor=zh;function Bh(){}Bh.prototype=b,b.t=(function(){return this.dg}),b.j=(function(e){return this===e}),b.r=(function(){return wr(this)});function Vh(){}b=Vh.prototype=new Wm,b.constructor=Vh;function Hh(){}Hh.prototype=b,b.t=(function(){return kh(this)});function Uh(){this.dg=null,this.dg=`Any`}b=Uh.prototype=new Bh,b.constructor=Uh;function Wh(){}Wh.prototype=b,b.jg=(function(){return Ur.l()}),b.iJ=(function(e){return new Nr(e)}),new S().i(Uh,`scala.reflect.ManifestFactory$AnyManifest$`,{ew:1,ey:1,ex:1,ev:1,eu:1,et:1,ez:1,a:1,d:1});var Gh;function Kh(){return Gh||=new Uh,Gh}function qh(e,t){return e===t?!0:Jh(t)&&t.gh(e)?e.dz(t):!1}function Jh(e){return!!(e&&e.$classData&&e.$classData.n.f)}function Yh(e){this.dM=null,this.bu=!1,this.c2=null,this.bs=null,this.bt=null,this.c4=!1,this.dN=null,this.c3=null,this.dN=e,this.dM=void 0,Du(this),Kf(this),this.c3=C().B(I().b(new(xm.r()).C([])))}b=Yh.prototype=new x,b.constructor=Yh;function Xh(){}Xh.prototype=b,b.cA=(function(){return this.dM}),b.t=(function(){return Yr(this)}),b.j=(function(e){return this===e}),b.r=(function(){return wr(this)}),b.gO=(function(){return this}),b.gD=(function(e,t){new ii(new Y((t=>{Mh(this,e,t)})))}),b.j0=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)Qf(e[t]),t=1+t|0}),b.iY=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)Yf(e[t],this,!1),t=1+t|0}),b.iZ=(function(){for(var e=this.c3,t=0,n=e.length|0;t<n;)Au(e[t],this),t=1+t|0}),b.cv=(function(){return this.dN.aa()+`.events`}),new S().i(Yh,`com.raquo.airstream.eventbus.EventBusStream`,{bA:1,a5:1,V:1,ak:1,an:1,a6:1,al:1,bw:1,bx:1,am:1,bn:1});function Zh(){}b=Zh.prototype=new Wm,b.constructor=Zh;function Qh(){}Qh.prototype=b,b.gh=(function(e){return!0}),b.j=(function(e){return qh(this,e)}),b.r=(function(){return z().jh(this)}),b.t=(function(){return Up(this)}),b.gz=(function(e){return If(this,e)}),b.h=(function(){return Lf(this)}),b.dz=(function(e){return Rf(this,e)}),b.dr=(function(e){return this.gz(e|0)});function $h(){}b=$h.prototype=new Hh,b.constructor=$h;function eg(){}eg.prototype=b;function tg(e){return!!(e&&e.$classData&&e.$classData.n.n)}function ng(e){return!!(e&&e.$classData&&e.$classData.n.a2)}function rg(e,t){return e.bD=t,e}function ig(){this.bD=null}b=ig.prototype=new eg,b.constructor=ig;function ag(){}ag.prototype=b,b.s=(function(e){return this.bD.s(e)}),b.n=(function(){return this.bD.n()}),b.h=(function(){return this.bD.h()});function og(){this.ei=null,this.el=!1,this.e6=null,this.e7=!1,this.e4=null,this.e5=!1,this.eq=null,this.er=!1,this.ea=null,this.eb=!1,this.ee=null,this.ef=!1,this.ec=null,this.ed=!1,this.eg=null,this.eh=!1,this.e2=null,this.e3=!1,this.e8=null,this.e9=!1,this.ej=null,this.ek=!1,this.gW=null,this.em=null,this.en=!1,this.cM=null,this.gU=null,this.gV=null,this.eo=null,this.ep=!1,ya(this),ma(this),fa(this),pa(this)}b=og.prototype=new x,b.constructor=og;function sg(){}sg.prototype=b,b.j4=(function(){return this.el||=(this.ei=gl(new _l,`p`,!1),!0),this.ei}),b.K=(function(){return this.e7||=(this.e6=gl(new _l,`div`,!1),!0),this.e6}),b.hy=(function(){return this.e5||=(this.e4=new el(`checked`,T().es),!0),this.e4}),b.gQ=(function(){return this.er||=(this.eq=new el(`value`,T().a6),!0),this.eq}),b.ip=(function(){return this.eb||=(this.ea=new el(`id`,T().a6),!0),this.ea}),b.bV=(function(){return this.ef||=(this.ee=new Jc(`click`),!0),this.ee}),b.iV=(function(){return this.ed||=(this.ec=new Jc(`change`),!0),this.ec}),b.dv=(function(){return this.eh||=(this.eg=new Jc(`input`),!0),this.eg}),b.hv=(function(){return this.e3||=(this.e2=df(new ff,`border`,v_()),!0),this.e2}),b.io=(function(){return this.e9||=(this.e8=new Nh(`height`),!0),this.e8}),b.j5=(function(){return this.ek||=(this.ej=new sh(`padding`),!0),this.ej}),b.js=(function(){return this.en||=(this.em=Zc(new Qc,`style`,T().a6),!0),this.em}),b.ju=(function(){return this.ep||=(this.eo=new of(this),!0),this.eo}),new S().i(og,`com.raquo.laminar.api.package$$anon$1`,{bU:1,c8:1,bY:1,c3:1,c2:1,c4:1,c0:1,bS:1,bO:1,bR:1,ap:1,as:1,ao:1,bP:1});function cg(e){this.bD=null,rg(this,e)}b=cg.prototype=new ag,b.constructor=cg;function lg(){}lg.prototype=b,b.q=(function(){return new Ym(this)}),b.bn=(function(){return`IndexedSeqView`}),b.aG=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),b.E=(function(){return this.n()}),new S().i(cg,`scala.collection.IndexedSeqView$Id`,{dY:1,e8:1,dJ:1,dK:1,h:1,i:1,b:1,k:1,c:1,j:1,ec:1,a:1,e7:1,l:1,dX:1,o:1});function ug(){}b=ug.prototype=new Qh,b.constructor=ug;function dg(){}dg.prototype=b;function fg(e,t){return!mg(t)||e.n()===t.n()}function pg(e,t){if(mg(t)){if(e===t)return!0;var n=e.n(),r=n===t.n();if(r){var i=0,a=e.g6(),o=t.g6(),s=a<o?a:o,c=n>>31,l=s>>31,u=s<<1,d=s>>>31|0|l<<1;if(c===d?(-2147483648^n)>(-2147483648^u):c>d)var f=s;else var f=n;for(;i<f&&r;)r=pc().S(e.s(i),t.s(i)),i=1+i|0;if(i<n&&r)for(var p=e.q().cw(i),ee=t.q().cw(i);r&&p.w();)r=pc().S(p.k(),ee.k())}return r}else return Rf(e,t)}function mg(e){return!!(e&&e.$classData&&e.$classData.n.w)}function hg(){}b=hg.prototype=new Qh,b.constructor=hg;function gg(){}gg.prototype=b;function _g(){}b=_g.prototype=new gg,b.constructor=_g;function vg(){}vg.prototype=b,b.g3=(function(e){return ou(this,e)});function yg(){}b=yg.prototype=new dg,b.constructor=yg;function bg(){}bg.prototype=b,b.gh=(function(e){return fg(this,e)}),b.dz=(function(e){return pg(this,e)}),b.bn=(function(){return`IndexedSeq`}),b.aG=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),b.E=(function(){return this.n()}),b.iD=(function(e){for(var t=new Nr(this.n()),n=0;n<t.a.length;)t.a[n]=e.g(this.s(n)),n=1+n|0;return nh().gP(t)}),b.bk=(function(){return`ArraySeq`}),b.g6=(function(){return 2147483647}),b.gA=(function(e){return this.iD(e)});function xg(){}b=xg.prototype=new gg,b.constructor=xg;function Sg(){}Sg.prototype=b,b.bn=(function(){return`IndexedSeq`}),b.aG=(function(e){var t=this.n();return t===e?0:t<e?-1:1}),b.E=(function(){return this.n()}),b.bk=(function(){return`ArraySeq`}),b.j=(function(e){return e instanceof xg&&js().bl(this.ab())!==js().bl(e.ab())?!1:qh(this,e)});function Cg(e){this.aN=null,this.aN=e}b=Cg.prototype=new bg,b.constructor=Cg;function wg(){}wg.prototype=b,b.n=(function(){return this.aN.a.length}),b.r=(function(){var e=z();return e.gg(this.aN,e.x)}),b.j=(function(e){return e instanceof Cg?N().gt(this.aN,e.aN):qh(this,e)}),b.q=(function(){return new Dh(this.aN)}),b.bQ=(function(e){return this.aN.a[e]}),b.g=(function(e){return this.bQ(e|0)}),b.s=(function(e){return this.bQ(e)}),new S().i(Cg,`scala.collection.immutable.ArraySeq$ofBoolean`,{aV:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Tg(e){this.aO=null,this.aO=e}b=Tg.prototype=new bg,b.constructor=Tg;function Eg(){}Eg.prototype=b,b.n=(function(){return this.aO.a.length}),b.bI=(function(e){return this.aO.a[e]}),b.r=(function(){var e=z();return e.g8(this.aO,e.x)}),b.j=(function(e){return e instanceof Tg?N().gm(this.aO,e.aO):qh(this,e)}),b.q=(function(){return new dh(this.aO)}),b.g=(function(e){return this.bI(e|0)}),b.s=(function(e){return this.bI(e)}),new S().i(Tg,`scala.collection.immutable.ArraySeq$ofByte`,{aW:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Dg(e){this.ax=null,this.ax=e}b=Dg.prototype=new bg,b.constructor=Dg;function Og(){}Og.prototype=b,b.n=(function(){return this.ax.a.length}),b.bJ=(function(e){return this.ax.a[e]}),b.r=(function(){var e=z();return e.g9(this.ax,e.x)}),b.j=(function(e){return e instanceof Dg?N().gn(this.ax,e.ax):qh(this,e)}),b.q=(function(){return new ph(this.ax)}),b.bH=(function(e,t,n,r){return new Zg(this.ax).bH(e,t,n,r)}),b.g=(function(e){return kr(this.bJ(e|0))}),b.s=(function(e){return kr(this.bJ(e))}),new S().i(Dg,`scala.collection.immutable.ArraySeq$ofChar`,{aX:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function kg(e){this.aP=null,this.aP=e}b=kg.prototype=new bg,b.constructor=kg;function Ag(){}Ag.prototype=b,b.n=(function(){return this.aP.a.length}),b.r=(function(){var e=z();return e.ga(this.aP,e.x)}),b.j=(function(e){return e instanceof kg?N().go(this.aP,e.aP):qh(this,e)}),b.q=(function(){return new hh(this.aP)}),b.bL=(function(e){return this.aP.a[e]}),b.g=(function(e){return this.bL(e|0)}),b.s=(function(e){return this.bL(e)}),new S().i(kg,`scala.collection.immutable.ArraySeq$ofDouble`,{aY:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function jg(e){this.aQ=null,this.aQ=e}b=jg.prototype=new bg,b.constructor=jg;function Mg(){}Mg.prototype=b,b.n=(function(){return this.aQ.a.length}),b.r=(function(){var e=z();return e.gb(this.aQ,e.x)}),b.j=(function(e){return e instanceof jg?N().gp(this.aQ,e.aQ):qh(this,e)}),b.q=(function(){return new _h(this.aQ)}),b.bM=(function(e){return this.aQ.a[e]}),b.g=(function(e){return this.bM(e|0)}),b.s=(function(e){return this.bM(e)}),new S().i(jg,`scala.collection.immutable.ArraySeq$ofFloat`,{aZ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Ng(e){this.aR=null,this.aR=e}b=Ng.prototype=new bg,b.constructor=Ng;function Pg(){}Pg.prototype=b,b.n=(function(){return this.aR.a.length}),b.r=(function(){var e=z();return e.gc(this.aR,e.x)}),b.j=(function(e){return e instanceof Ng?N().gq(this.aR,e.aR):qh(this,e)}),b.q=(function(){return new yh(this.aR)}),b.bN=(function(e){return this.aR.a[e]}),b.g=(function(e){return this.bN(e|0)}),b.s=(function(e){return this.bN(e)}),new S().i(Ng,`scala.collection.immutable.ArraySeq$ofInt`,{b0:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Fg(e){this.aS=null,this.aS=e}b=Fg.prototype=new bg,b.constructor=Fg;function Ig(){}Ig.prototype=b,b.n=(function(){return this.aS.a.length}),b.r=(function(){var e=z();return e.gd(this.aS,e.x)}),b.j=(function(e){return e instanceof Fg?N().gr(this.aS,e.aS):qh(this,e)}),b.q=(function(){return new xh(this.aS)}),b.bO=(function(e){return this.aS.a[e]}),b.g=(function(e){return this.bO(e|0)}),b.s=(function(e){return this.bO(e)}),new S().i(Fg,`scala.collection.immutable.ArraySeq$ofLong`,{b1:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Lg(e){this.aT=null,this.aT=e}b=Lg.prototype=new bg,b.constructor=Lg;function Rg(){}Rg.prototype=b,b.n=(function(){return this.aT.a.length}),b.s=(function(e){return this.aT.a[e]}),b.r=(function(){var e=z();return e.g7(this.aT,e.x)}),b.j=(function(e){return e instanceof Lg?Yl().gu(this.aT,e.aT):qh(this,e)}),b.q=(function(){return Gm(new Km,this.aT)}),b.g=(function(e){return this.s(e|0)}),new S().i(Lg,`scala.collection.immutable.ArraySeq$ofRef`,{b2:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function zg(e){this.aU=null,this.aU=e}b=zg.prototype=new bg,b.constructor=zg;function Bg(){}Bg.prototype=b,b.n=(function(){return this.aU.a.length}),b.bK=(function(e){return this.aU.a[e]}),b.r=(function(){var e=z();return e.ge(this.aU,e.x)}),b.j=(function(e){return e instanceof zg?N().gs(this.aU,e.aU):qh(this,e)}),b.q=(function(){return new Ch(this.aU)}),b.g=(function(e){return this.bK(e|0)}),b.s=(function(e){return this.bK(e)}),new S().i(zg,`scala.collection.immutable.ArraySeq$ofShort`,{b3:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Vg(e){this.bi=null,this.bi=e}b=Vg.prototype=new bg,b.constructor=Vg;function Hg(){}Hg.prototype=b,b.n=(function(){return this.bi.a.length}),b.r=(function(){var e=z();return e.gf(this.bi,e.x)}),b.j=(function(e){return e instanceof Vg?this.bi.a.length===e.bi.a.length:qh(this,e)}),b.q=(function(){return new Th(this.bi)}),b.bP=(function(e){}),b.g=(function(e){this.bP(e|0)}),b.s=(function(e){this.bP(e)}),new S().i(Vg,`scala.collection.immutable.ArraySeq$ofUnit`,{b4:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Ug(e,t,n,r){for(;;)if(t===r)return n.h()?0:1;else if(n.h())return-1;else{var i=1+t|0,a=n.a1();t=i,n=a}}function Wg(e,t,n){for(;;)if(t===n)return!0;else{var r=t.h(),i=n.h();if(!(r||i)&&pc().S(t.ad(),n.ad())){var a=t.a1(),o=n.a1();t=a,n=o}else return r&&i}}function Gg(){}b=Gg.prototype=new dg,b.constructor=Gg;function Kg(){}Kg.prototype=b,b.q=(function(){return new om(this)}),b.bn=(function(){return`LinearSeq`}),b.gz=(function(e){return nm(this,e)}),b.s=(function(e){return rm(this,e)}),b.dz=(function(e){return im(this,e)}),b.h=(function(){return this===v_()}),b.iE=(function(e){if(this===v_())return v_();for(var t=new p_(e.g(this.ad()),v_()),n=t,r=this.a1();r!==v_();){var i=new p_(e.g(r.ad()),v_());n.cq=i,n=i,r=r.a1()}return t}),b.aj=(function(e){for(var t=this;!t.h();)e.g(t.ad()),t=t.a1()}),b.n=(function(){for(var e=this,t=0;!e.h();)t=1+t|0,e=e.a1();return t}),b.aG=(function(e){return e<0?1:Ug(this,0,this,e)}),b.bk=(function(){return`List`}),b.j=(function(e){return e instanceof Gg?Wg(this,this,e):qh(this,e)}),b.g=(function(e){return rm(this,e|0)}),b.dr=(function(e){return nm(this,e|0)}),b.hM=(function(e){return Rh(this,e,this)}),b.gA=(function(e){return this.iE(e)});function qg(e){this.ay=null,this.ay=e}b=qg.prototype=new Sg,b.constructor=qg;function Jg(){}Jg.prototype=b,b.n=(function(){return this.ay.a.length}),b.r=(function(){var e=z();return e.gg(this.ay,e.x)}),b.j=(function(e){return e instanceof qg?N().gt(this.ay,e.ay):xg.prototype.j.call(this,e)}),b.q=(function(){return new Dh(this.ay)}),b.bQ=(function(e){return this.ay.a[e]}),b.g=(function(e){return this.bQ(e|0)}),b.s=(function(e){return this.bQ(e)}),b.ab=(function(){return this.ay}),new S().i(qg,`scala.collection.mutable.ArraySeq$ofBoolean`,{b7:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Yg(e){this.az=null,this.az=e}b=Yg.prototype=new Sg,b.constructor=Yg;function Xg(){}Xg.prototype=b,b.n=(function(){return this.az.a.length}),b.bI=(function(e){return this.az.a[e]}),b.r=(function(){var e=z();return e.g8(this.az,e.x)}),b.j=(function(e){return e instanceof Yg?N().gm(this.az,e.az):xg.prototype.j.call(this,e)}),b.q=(function(){return new dh(this.az)}),b.g=(function(e){return this.bI(e|0)}),b.s=(function(e){return this.bI(e)}),b.ab=(function(){return this.az}),new S().i(Yg,`scala.collection.mutable.ArraySeq$ofByte`,{b8:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Zg(e){this.a5=null,this.a5=e}b=Zg.prototype=new Sg,b.constructor=Zg;function Qg(){}Qg.prototype=b,b.n=(function(){return this.a5.a.length}),b.bJ=(function(e){return this.a5.a[e]}),b.r=(function(){var e=z();return e.g9(this.a5,e.x)}),b.j=(function(e){return e instanceof Zg?N().gn(this.a5,e.a5):xg.prototype.j.call(this,e)}),b.q=(function(){return new ph(this.a5)}),b.bH=(function(e,t,n,r){var i=e.a0;t.length!==0&&(i.u=``+i.u+t);var a=this.a5.a.length;if(a!==0)if(n===``)i.hk(this.a5);else{i.n();var o=this.a5.a[0],s=``+br(o);i.u+=s;for(var c=1;c<a;){i.u=``+i.u+n;var l=this.a5.a[c],u=``+br(l);i.u+=u,c=1+c|0}}return r.length!==0&&(i.u=``+i.u+r),e}),b.g=(function(e){return kr(this.bJ(e|0))}),b.s=(function(e){return kr(this.bJ(e))}),b.ab=(function(){return this.a5}),new S().i(Zg,`scala.collection.mutable.ArraySeq$ofChar`,{b9:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $g(e){this.aA=null,this.aA=e}b=$g.prototype=new Sg,b.constructor=$g;function e_(){}e_.prototype=b,b.n=(function(){return this.aA.a.length}),b.r=(function(){var e=z();return e.ga(this.aA,e.x)}),b.j=(function(e){return e instanceof $g?N().go(this.aA,e.aA):xg.prototype.j.call(this,e)}),b.q=(function(){return new hh(this.aA)}),b.bL=(function(e){return this.aA.a[e]}),b.g=(function(e){return this.bL(e|0)}),b.s=(function(e){return this.bL(e)}),b.ab=(function(){return this.aA}),new S().i($g,`scala.collection.mutable.ArraySeq$ofDouble`,{ba:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function t_(e){this.aB=null,this.aB=e}b=t_.prototype=new Sg,b.constructor=t_;function n_(){}n_.prototype=b,b.n=(function(){return this.aB.a.length}),b.r=(function(){var e=z();return e.gb(this.aB,e.x)}),b.j=(function(e){return e instanceof t_?N().gp(this.aB,e.aB):xg.prototype.j.call(this,e)}),b.q=(function(){return new _h(this.aB)}),b.bM=(function(e){return this.aB.a[e]}),b.g=(function(e){return this.bM(e|0)}),b.s=(function(e){return this.bM(e)}),b.ab=(function(){return this.aB}),new S().i(t_,`scala.collection.mutable.ArraySeq$ofFloat`,{bb:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function r_(e){this.aC=null,this.aC=e}b=r_.prototype=new Sg,b.constructor=r_;function i_(){}i_.prototype=b,b.n=(function(){return this.aC.a.length}),b.r=(function(){var e=z();return e.gc(this.aC,e.x)}),b.j=(function(e){return e instanceof r_?N().gq(this.aC,e.aC):xg.prototype.j.call(this,e)}),b.q=(function(){return new yh(this.aC)}),b.bN=(function(e){return this.aC.a[e]}),b.g=(function(e){return this.bN(e|0)}),b.s=(function(e){return this.bN(e)}),b.ab=(function(){return this.aC}),new S().i(r_,`scala.collection.mutable.ArraySeq$ofInt`,{bc:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function a_(e){this.aD=null,this.aD=e}b=a_.prototype=new Sg,b.constructor=a_;function o_(){}o_.prototype=b,b.n=(function(){return this.aD.a.length}),b.r=(function(){var e=z();return e.gd(this.aD,e.x)}),b.j=(function(e){return e instanceof a_?N().gr(this.aD,e.aD):xg.prototype.j.call(this,e)}),b.q=(function(){return new xh(this.aD)}),b.bO=(function(e){return this.aD.a[e]}),b.g=(function(e){return this.bO(e|0)}),b.s=(function(e){return this.bO(e)}),b.ab=(function(){return this.aD}),new S().i(a_,`scala.collection.mutable.ArraySeq$ofLong`,{bd:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function s_(e){this.aE=null,this.aE=e}b=s_.prototype=new Sg,b.constructor=s_;function c_(){}c_.prototype=b,b.n=(function(){return this.aE.a.length}),b.s=(function(e){return this.aE.a[e]}),b.r=(function(){var e=z();return e.g7(this.aE,e.x)}),b.j=(function(e){return e instanceof s_?Yl().gu(this.aE,e.aE):xg.prototype.j.call(this,e)}),b.q=(function(){return Gm(new Km,this.aE)}),b.g=(function(e){return this.s(e|0)}),b.ab=(function(){return this.aE}),new S().i(s_,`scala.collection.mutable.ArraySeq$ofRef`,{be:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function l_(e){this.aF=null,this.aF=e}b=l_.prototype=new Sg,b.constructor=l_;function u_(){}u_.prototype=b,b.n=(function(){return this.aF.a.length}),b.bK=(function(e){return this.aF.a[e]}),b.r=(function(){var e=z();return e.ge(this.aF,e.x)}),b.j=(function(e){return e instanceof l_?N().gs(this.aF,e.aF):xg.prototype.j.call(this,e)}),b.q=(function(){return new Ch(this.aF)}),b.g=(function(e){return this.bK(e|0)}),b.s=(function(e){return this.bK(e)}),b.ab=(function(){return this.aF}),new S().i(l_,`scala.collection.mutable.ArraySeq$ofShort`,{bf:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function d_(e){this.aV=null,this.aV=e}b=d_.prototype=new Sg,b.constructor=d_;function f_(){}f_.prototype=b,b.n=(function(){return this.aV.a.length}),b.r=(function(){var e=z();return e.gf(this.aV,e.x)}),b.j=(function(e){return e instanceof d_?this.aV.a.length===e.aV.a.length:xg.prototype.j.call(this,e)}),b.q=(function(){return new Th(this.aV)}),b.bP=(function(e){}),b.g=(function(e){this.bP(e|0)}),b.s=(function(e){this.bP(e)}),b.ab=(function(){return this.aV}),new S().i(d_,`scala.collection.mutable.ArraySeq$ofUnit`,{bg:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function p_(e,t){this.dd=null,this.cq=null,this.dd=e,this.cq=t}b=p_.prototype=new Kg,b.constructor=p_;function m_(){}m_.prototype=b,b.ad=(function(){return this.dd}),b.am=(function(){return`::`}),b.ak=(function(){return 2}),b.al=(function(e){switch(e){case 0:return this.dd;case 1:return this.cq;default:return L().bU(e)}}),b.aH=(function(){return new fm(this)}),b.a1=(function(){return this.cq}),new S().i(p_,`scala.collection.immutable.$colon$colon`,{ed:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a2:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});function h_(){}b=h_.prototype=new Kg,b.constructor=h_;function g_(){}g_.prototype=b,b.ik=(function(){throw new kp(`head of empty list`)}),b.jx=(function(){throw new Op(`tail of empty list`)}),b.E=(function(){return 0}),b.q=(function(){return K().z}),b.am=(function(){return`Nil`}),b.ak=(function(){return 0}),b.al=(function(e){return L().bU(e)}),b.aH=(function(){return new fm(this)}),b.a1=(function(){this.jx()}),b.ad=(function(){this.ik()}),new S().i(h_,`scala.collection.immutable.Nil$`,{eg:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a2:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});var __;function v_(){return __||=new h_,__}function y_(e,t){return e.a0=t,e}function b_(e){return y_(e,new Tf),e}function x_(){this.a0=null}b=x_.prototype=new gg,b.constructor=x_;function S_(){}S_.prototype=b,b.bn=(function(){return`IndexedSeq`}),b.q=(function(){return new Ym(new cg(this))}),b.aG=(function(e){var t=this.a0.n();return t===e?0:t<e?-1:1}),b.g3=(function(e){return ou(this,e)}),b.n=(function(){return this.a0.n()}),b.E=(function(){return this.a0.n()}),b.hf=(function(e){var t=this.a0,n=``+br(e);return t.u+=n,this}),b.t=(function(){return this.a0.u}),b.h=(function(){return this.a0.n()===0}),b.gK=(function(){return this.a0.u}),b.dk=(function(e){return this.hf(Ar(e))}),b.g=(function(e){var t=e|0;return kr(this.a0.gi(t))}),b.s=(function(e){return kr(this.a0.gi(e))}),new S().i(x_,`scala.collection.mutable.StringBuilder`,{eo:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,em:1,bh:1,bj:1,bi:1,D:1,n:1,o:1,E:1,ad:1,a:1});function C_(e,t){return e.aW=t,e}function w_(e){return C_(e,[]),e}function T_(){this.aW=null}b=T_.prototype=new vg,b.constructor=T_;function E_(){}E_.prototype=b,b.bn=(function(){return`IndexedSeq`}),b.q=(function(){return new Ym(new cg(this))}),b.aG=(function(e){var t=this.aW.length|0;return t===e?0:t<e?-1:1}),b.s=(function(e){return this.aW[e]}),b.n=(function(){return this.aW.length|0}),b.E=(function(){return this.aW.length|0}),b.bk=(function(){return`WrappedArray`}),b.gK=(function(){return this}),b.dk=(function(e){return this.aW.push(e),this}),b.g=(function(e){var t=e|0;return this.aW[t]}),new S().i(T_,`scala.scalajs.js.WrappedArray`,{eP:1,eh:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ej:1,bj:1,bi:1,en:1,q:1,p:1,D:1,n:1,o:1,E:1,el:1,bh:1,a:1}),ur=new P(0,0),Kr.z=ur,Co(new(Lm.r()).C([]));