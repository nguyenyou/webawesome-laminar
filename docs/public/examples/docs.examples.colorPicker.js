var EQ=Object.defineProperty;var $Q=(q,Z)=>{for(var Q in Z)EQ(q,Q,{get:Z[Q],enumerable:!0,configurable:!0,set:(F)=>Z[Q]=()=>F})};var k6={};$Q(k6,{default:()=>W});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var b7=(q={})=>{let{validationElement:Z,validationProperty:Q}=q;if(!Z)Z=Object.assign(document.createElement("input"),{required:!0});if(!Q)Q="value";let F={observedAttributes:["required"],message:Z.validationMessage,checkValidity(w){let J={message:"",isValid:!0,invalidKeys:[]};if(!(w.required??w.hasAttribute("required")))return J;if(!w[Q])J.message=typeof F.message==="function"?F.message(w):F.message||"",J.isValid=!1,J.invalidKeys.push("valueMissing");return J}};return F};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var g4=`:host {
  display: flex;
  flex-direction: column;
}

/* Label */
:is([part~='form-control-label'], [part~='label']):has(*:not(:empty)) {
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
  line-height: var(--wa-form-control-label-line-height);

  &:not(.has-slotted) {
    display: none;
  }
}
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function h4(q,Z){function Q(w){let J=q.getBoundingClientRect(),G=q.ownerDocument.defaultView,X=J.left+G.pageXOffset,z=J.top+G.pageYOffset,Y=w.pageX-X,U=w.pageY-z;if(Z?.onMove)Z.onMove(Y,U)}function F(){if(document.removeEventListener("pointermove",Q),document.removeEventListener("pointerup",F),Z?.onStop)Z.onStop()}if(document.addEventListener("pointermove",Q,{passive:!0}),document.addEventListener("pointerup",F),Z?.initialEvent instanceof PointerEvent)Q(Z.initialEvent)}var DX=typeof window<"u"&&"ontouchstart"in window;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var x7=`@layer wa-utilities {
  .wa-visually-hidden:not(:focus-within),
  .wa-visually-hidden-force,
  .wa-visually-hidden-hint::part(hint),
  .wa-visually-hidden-label::part(label) {
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
}
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var{defineProperty:RQ,getOwnPropertyDescriptor:SQ}=Object,g7=(q)=>{throw TypeError(q)},B=(q,Z,Q,F)=>{var w=F>1?void 0:F?SQ(Z,Q):Z;for(var J=q.length-1,G;J>=0;J--)if(G=q[J])w=(F?G(Z,Q,w):G(w))||w;if(F&&w)RQ(Z,Q,w);return w},h7=(q,Z,Q)=>Z.has(q)||g7("Cannot "+Q),u7=(q,Z,Q)=>(h7(q,Z,"read from private field"),Q?Q.call(q):Z.get(q)),v7=(q,Z,Q)=>Z.has(q)?g7("Cannot add the same private member more than once"):Z instanceof WeakSet?Z.add(q):Z.set(q,Q),d7=(q,Z,Q,F)=>(h7(q,Z,"write to private field"),F?F.call(q,Q):Z.set(q,Q),Q);var u4=globalThis,j8=u4.ShadowRoot&&(u4.ShadyCSS===void 0||u4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,c7=Symbol(),m7=new WeakMap;class p7{constructor(q,Z,Q){if(this._$cssResult$=!0,Q!==c7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=q,this._strings=Z}get styleSheet(){let q=this._styleSheet,Z=this._strings;if(j8&&q===void 0){let Q=Z!==void 0&&Z.length===1;if(Q)q=m7.get(Z);if(q===void 0){if((this._styleSheet=q=new CSSStyleSheet).replaceSync(this.cssText),Q)m7.set(Z,q)}}return q}toString(){return this.cssText}}var C8=(q)=>new p7(typeof q==="string"?q:String(q),void 0,c7);var i7=(q,Z)=>{if(j8)q.adoptedStyleSheets=Z.map((Q)=>Q instanceof CSSStyleSheet?Q:Q.styleSheet);else for(let Q of Z){let F=document.createElement("style"),w=u4.litNonce;if(w!==void 0)F.setAttribute("nonce",w);F.textContent=Q.cssText,q.appendChild(F)}},yQ=(q)=>{let Z="";for(let Q of q.cssRules)Z+=Q.cssText;return C8(Z)},f8=j8?(q)=>q:(q)=>q instanceof CSSStyleSheet?yQ(q):q;var{is:PQ,defineProperty:jQ,getOwnPropertyDescriptor:l7,getOwnPropertyNames:CQ,getOwnPropertySymbols:fQ,getPrototypeOf:s7}=Object,_Q=!1,G0=globalThis;if(_Q)G0.customElements??=customElements;var L0=!0,v0,n7=G0.trustedTypes,bQ=n7?n7.emptyScript:"",r7=L0?G0.reactiveElementPolyfillSupportDevMode:G0.reactiveElementPolyfillSupport;if(L0)G0.litIssuedWarnings??=new Set,v0=(q,Z)=>{if(Z+=` See https://lit.dev/msg/${q} for more information.`,!G0.litIssuedWarnings.has(Z)&&!G0.litIssuedWarnings.has(q))console.warn(Z),G0.litIssuedWarnings.add(Z)},queueMicrotask(()=>{if(v0("dev-mode","Lit is in dev mode. Not recommended for production!"),G0.ShadyDOM?.inUse&&r7===void 0)v0("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var xQ=L0?(q)=>{if(!G0.emitLitDebugLogEvents)return;G0.dispatchEvent(new CustomEvent("lit-debug",{detail:q}))}:void 0,G2=(q,Z)=>q,$2={toAttribute(q,Z){switch(Z){case Boolean:q=q?bQ:null;break;case Object:case Array:q=q==null?q:JSON.stringify(q);break}return q},fromAttribute(q,Z){let Q=q;switch(Z){case Boolean:Q=q!==null;break;case Number:Q=q===null?null:Number(q);break;case Object:case Array:try{Q=JSON.parse(q)}catch(F){Q=null}break}return Q}},v4=(q,Z)=>!PQ(q,Z),o7={attribute:!0,type:String,converter:$2,reflect:!1,useDefault:!1,hasChanged:v4};Symbol.metadata??=Symbol("metadata");G0.litPropertyMetadata??=new WeakMap;class V0 extends HTMLElement{static addInitializer(q){this.__prepare(),(this._initializers??=[]).push(q)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(q,Z=o7){if(Z.state)Z.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(q))Z=Object.create(Z),Z.wrapped=!0;if(this.elementProperties.set(q,Z),!Z.noAccessor){let Q=L0?Symbol.for(`${String(q)} (@property() cache)`):Symbol(),F=this.getPropertyDescriptor(q,Q,Z);if(F!==void 0)jQ(this.prototype,q,F)}}static getPropertyDescriptor(q,Z,Q){let{get:F,set:w}=l7(this.prototype,q)??{get(){return this[Z]},set(J){this[Z]=J}};if(L0&&F==null){if("value"in(l7(this.prototype,q)??{}))throw Error(`Field ${JSON.stringify(String(q))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);v0("reactive-property-without-getter",`Field ${JSON.stringify(String(q))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:F,set(J){let G=F?.call(this);w?.call(this,J),this.requestUpdate(q,G,Q)},configurable:!0,enumerable:!0}}static getPropertyOptions(q){return this.elementProperties.get(q)??o7}static __prepare(){if(this.hasOwnProperty(G2("elementProperties",this)))return;let q=s7(this);if(q.finalize(),q._initializers!==void 0)this._initializers=[...q._initializers];this.elementProperties=new Map(q.elementProperties)}static finalize(){if(this.hasOwnProperty(G2("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(G2("properties",this))){let Z=this.properties,Q=[...CQ(Z),...fQ(Z)];for(let F of Q)this.createProperty(F,Z[F])}let q=this[Symbol.metadata];if(q!==null){let Z=litPropertyMetadata.get(q);if(Z!==void 0)for(let[Q,F]of Z)this.elementProperties.set(Q,F)}this.__attributeToPropertyMap=new Map;for(let[Z,Q]of this.elementProperties){let F=this.__attributeNameForProperty(Z,Q);if(F!==void 0)this.__attributeToPropertyMap.set(F,Z)}if(this.elementStyles=this.finalizeStyles(this.styles),L0){if(this.hasOwnProperty("createProperty"))v0("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))v0("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(q){let Z=[];if(Array.isArray(q)){let Q=new Set(q.flat(1/0).reverse());for(let F of Q)Z.unshift(f8(F))}else if(q!==void 0)Z.push(f8(q));return Z}static __attributeNameForProperty(q,Z){let Q=Z.attribute;return Q===!1?void 0:typeof Q==="string"?Q:typeof q==="string"?q.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((q)=>this.enableUpdating=q),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((q)=>q(this))}addController(q){if((this.__controllers??=new Set).add(q),this.renderRoot!==void 0&&this.isConnected)q.hostConnected?.()}removeController(q){this.__controllers?.delete(q)}__saveInstanceProperties(){let q=new Map,Z=this.constructor.elementProperties;for(let Q of Z.keys())if(this.hasOwnProperty(Q))q.set(Q,this[Q]),delete this[Q];if(q.size>0)this.__instanceProperties=q}createRenderRoot(){let q=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return i7(q,this.constructor.elementStyles),q}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((q)=>q.hostConnected?.())}enableUpdating(q){}disconnectedCallback(){this.__controllers?.forEach((q)=>q.hostDisconnected?.())}attributeChangedCallback(q,Z,Q){this._$attributeToProperty(q,Q)}__propertyToAttribute(q,Z){let F=this.constructor.elementProperties.get(q),w=this.constructor.__attributeNameForProperty(q,F);if(w!==void 0&&F.reflect===!0){let G=(F.converter?.toAttribute!==void 0?F.converter:$2).toAttribute(Z,F.type);if(L0&&this.constructor.enabledWarnings.includes("migration")&&G===void 0)v0("undefined-attribute-value",`The attribute value for the ${q} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=q,G==null)this.removeAttribute(w);else this.setAttribute(w,G);this.__reflectingProperty=null}}_$attributeToProperty(q,Z){let Q=this.constructor,F=Q.__attributeToPropertyMap.get(q);if(F!==void 0&&this.__reflectingProperty!==F){let w=Q.getPropertyOptions(F),J=typeof w.converter==="function"?{fromAttribute:w.converter}:w.converter?.fromAttribute!==void 0?w.converter:$2;this.__reflectingProperty=F;let G=J.fromAttribute(Z,w.type);this[F]=G??this.__defaultValues?.get(F)??G,this.__reflectingProperty=null}}requestUpdate(q,Z,Q){if(q!==void 0){if(L0&&q instanceof Event)v0("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let F=this.constructor,w=this[q];if(Q??=F.getPropertyOptions(q),(Q.hasChanged??v4)(w,Z)||Q.useDefault&&Q.reflect&&w===this.__defaultValues?.get(q)&&!this.hasAttribute(F.__attributeNameForProperty(q,Q)))this._$changeProperty(q,Z,Q);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(q,Z,{useDefault:Q,reflect:F,wrapped:w},J){if(Q&&!(this.__defaultValues??=new Map).has(q)){if(this.__defaultValues.set(q,J??Z??this[q]),w!==!0||J!==void 0)return}if(!this._$changedProperties.has(q)){if(!this.hasUpdated&&!Q)Z=void 0;this._$changedProperties.set(q,Z)}if(F===!0&&this.__reflectingProperty!==q)(this.__reflectingProperties??=new Set).add(q)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(Z){Promise.reject(Z)}let q=this.scheduleUpdate();if(q!=null)await q;return!this.isUpdatePending}scheduleUpdate(){let q=this.performUpdate();if(L0&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof q?.then==="function")v0("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return q}performUpdate(){if(!this.isUpdatePending)return;if(xQ?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),L0){let w=[...this.constructor.elementProperties.keys()].filter((J)=>this.hasOwnProperty(J)&&(J in s7(this)));if(w.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${w.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[F,w]of this.__instanceProperties)this[F]=w;this.__instanceProperties=void 0}let Q=this.constructor.elementProperties;if(Q.size>0)for(let[F,w]of Q){let{wrapped:J}=w,G=this[F];if(J===!0&&!this._$changedProperties.has(F)&&G!==void 0)this._$changeProperty(F,void 0,w,G)}}let q=!1,Z=this._$changedProperties;try{if(q=this.shouldUpdate(Z),q)this.willUpdate(Z),this.__controllers?.forEach((Q)=>Q.hostUpdate?.()),this.update(Z);else this.__markUpdated()}catch(Q){throw q=!1,this.__markUpdated(),Q}if(q)this._$didUpdate(Z)}willUpdate(q){}_$didUpdate(q){if(this.__controllers?.forEach((Z)=>Z.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(q);if(this.updated(q),L0&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))v0("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(q){return!0}update(q){this.__reflectingProperties&&=this.__reflectingProperties.forEach((Z)=>this.__propertyToAttribute(Z,this[Z])),this.__markUpdated()}updated(q){}firstUpdated(q){}}V0.elementStyles=[];V0.shadowRootOptions={mode:"open"};V0[G2("elementProperties",V0)]=new Map;V0[G2("finalized",V0)]=new Map;r7?.({ReactiveElement:V0});if(L0){V0.enabledWarnings=["change-in-update","async-perform-update"];let q=function(Z){if(!Z.hasOwnProperty(G2("enabledWarnings",Z)))Z.enabledWarnings=Z.enabledWarnings.slice()};V0.enableWarning=function(Z){if(q(this),!this.enabledWarnings.includes(Z))this.enabledWarnings.push(Z)},V0.disableWarning=function(Z){q(this);let Q=this.enabledWarnings.indexOf(Z);if(Q>=0)this.enabledWarnings.splice(Q,1)}}(G0.reactiveElementVersions??=[]).push("2.1.1");if(L0&&G0.reactiveElementVersions.length>1)queueMicrotask(()=>{v0("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var k0=globalThis,j=(q)=>{if(!k0.emitLitDebugLogEvents)return;k0.dispatchEvent(new CustomEvent("lit-debug",{detail:q}))},gQ=0,y2;k0.litIssuedWarnings??=new Set,y2=(q,Z)=>{if(Z+=q?` See https://lit.dev/msg/${q} for more information.`:"",!k0.litIssuedWarnings.has(Z)&&!k0.litIssuedWarnings.has(q))console.warn(Z),k0.litIssuedWarnings.add(Z)},queueMicrotask(()=>{y2("dev-mode","Lit is in dev mode. Not recommended for production!")});var d0=k0.ShadyDOM?.inUse&&k0.ShadyDOM?.noPatch===!0?k0.ShadyDOM.wrap:(q)=>q,d4=k0.trustedTypes,a7=d4?d4.createPolicy("lit-html",{createHTML:(q)=>q}):void 0,hQ=(q)=>q,i4=(q,Z,Q)=>hQ,uQ=(q)=>{if(p1!==i4)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");p1=q},vQ=()=>{p1=i4},h8=(q,Z,Q)=>{return p1(q,Z,Q)},F9="$lit$",k1=`lit$${Math.random().toFixed(9).slice(2)}$`,w9="?"+k1,dQ=`<${w9}>`,c1=document,P2=()=>c1.createComment(""),j2=(q)=>q===null||typeof q!="object"&&typeof q!="function",u8=Array.isArray,mQ=(q)=>u8(q)||typeof q?.[Symbol.iterator]==="function",_8=`[ 	
\f\r]`,cQ=`[^ 	
\f\r"'\`<>=]`,pQ=`[^\\s"'>=/]`,R2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,t7=1,b8=2,iQ=3,e7=/-->/g,q9=/>/g,P1=new RegExp(`>|${_8}(?:(${pQ}+)(${_8}*=${_8}*(?:${cQ}|("|')|))|$)`,"g"),lQ=0,Z9=1,sQ=2,Q9=3,x8=/'/g,g8=/"/g,J9=/^(?:script|style|textarea|title)$/i,nQ=1,m4=2,c4=3,v8=1,p4=2,oQ=3,rQ=4,aQ=5,d8=6,tQ=7,m8=(q)=>(Z,...Q)=>{if(Z.some((F)=>F===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(Q.some((F)=>F?._$litStatic$))y2("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:q,strings:Z,values:Q}},g=m8(nQ),G9=m8(m4),z9=m8(c4),t=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),K9=new WeakMap,m1=c1.createTreeWalker(c1,129),p1=i4;function X9(q,Z){if(!u8(q)||!q.hasOwnProperty("raw")){let Q="invalid template strings array";throw Q=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(Q)}return a7!==void 0?a7.createHTML(Z):Z}var eQ=(q,Z)=>{let Q=q.length-1,F=[],w=Z===m4?"<svg>":Z===c4?"<math>":"",J,G=R2;for(let z=0;z<Q;z++){let Y=q[z],U=-1,M,k=0,V;while(k<Y.length){if(G.lastIndex=k,V=G.exec(Y),V===null)break;if(k=G.lastIndex,G===R2){if(V[t7]==="!--")G=e7;else if(V[t7]!==void 0)G=q9;else if(V[b8]!==void 0){if(J9.test(V[b8]))J=new RegExp(`</${V[b8]}`,"g");G=P1}else if(V[iQ]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(G===P1)if(V[lQ]===">")G=J??R2,U=-1;else if(V[Z9]===void 0)U=-2;else U=G.lastIndex-V[sQ].length,M=V[Z9],G=V[Q9]===void 0?P1:V[Q9]==='"'?g8:x8;else if(G===g8||G===x8)G=P1;else if(G===e7||G===q9)G=R2;else G=P1,J=void 0}console.assert(U===-1||G===P1||G===x8||G===g8,"unexpected parse state B");let T=G===P1&&q[z+1].startsWith("/>")?" ":"";w+=G===R2?Y+dQ:U>=0?(F.push(M),Y.slice(0,U)+F9+Y.slice(U))+k1+T:Y+k1+(U===-2?z:T)}let X=w+(q[Q]||"<?>")+(Z===m4?"</svg>":Z===c4?"</math>":"");return[X9(q,X),F]};class C2{constructor({strings:q,["_$litType$"]:Z},Q){this.parts=[];let F,w=0,J=0,G=q.length-1,X=this.parts,[z,Y]=eQ(q,Z);if(this.el=C2.createElement(z,Q),m1.currentNode=this.el.content,Z===m4||Z===c4){let U=this.el.content.firstChild;U.replaceWith(...U.childNodes)}while((F=m1.nextNode())!==null&&X.length<G){if(F.nodeType===1){{let U=F.localName;if(/^(?:textarea|template)$/i.test(U)&&F.innerHTML.includes(k1)){let M=`Expressions are not supported inside \`${U}\` elements. See https://lit.dev/msg/expression-in-${U} for more information.`;if(U==="template")throw Error(M);else y2("",M)}}if(F.hasAttributes()){for(let U of F.getAttributeNames())if(U.endsWith(F9)){let M=Y[J++],V=F.getAttribute(U).split(k1),T=/([.?@])?(.*)/.exec(M);X.push({type:v8,index:w,name:T[2],strings:V,ctor:T[1]==="."?H9:T[1]==="?"?U9:T[1]==="@"?B9:_2}),F.removeAttribute(U)}else if(U.startsWith(k1))X.push({type:d8,index:w}),F.removeAttribute(U)}if(J9.test(F.tagName)){let U=F.textContent.split(k1),M=U.length-1;if(M>0){F.textContent=d4?d4.emptyScript:"";for(let k=0;k<M;k++)F.append(U[k],P2()),m1.nextNode(),X.push({type:p4,index:++w});F.append(U[M],P2())}}}else if(F.nodeType===8)if(F.data===w9)X.push({type:p4,index:w});else{let M=-1;while((M=F.data.indexOf(k1,M+1))!==-1)X.push({type:tQ,index:w}),M+=k1.length-1}w++}if(Y.length!==J)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+q.join("${...}")+"`");j&&j({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:q})}static createElement(q,Z){let Q=c1.createElement("template");return Q.innerHTML=q,Q}}function z2(q,Z,Q=q,F){if(Z===t)return Z;let w=F!==void 0?Q.__directives?.[F]:Q.__directive,J=j2(Z)?void 0:Z._$litDirective$;if(w?.constructor!==J){if(w?._$notifyDirectiveConnectionChanged?.(!1),J===void 0)w=void 0;else w=new J(q),w._$initialize(q,Q,F);if(F!==void 0)(Q.__directives??=[])[F]=w;else Q.__directive=w}if(w!==void 0)Z=z2(q,w._$resolve(q,Z.values),w,F);return Z}class Y9{constructor(q,Z){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=q,this._$parent=Z}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(q){let{el:{content:Z},parts:Q}=this._$template,F=(q?.creationScope??c1).importNode(Z,!0);m1.currentNode=F;let w=m1.nextNode(),J=0,G=0,X=Q[0];while(X!==void 0){if(J===X.index){let z;if(X.type===p4)z=new f2(w,w.nextSibling,this,q);else if(X.type===v8)z=new X.ctor(w,X.name,X.strings,this,q);else if(X.type===d8)z=new M9(w,this,q);this._$parts.push(z),X=Q[++G]}if(J!==X?.index)w=m1.nextNode(),J++}return m1.currentNode=c1,F}_update(q){let Z=0;for(let Q of this._$parts){if(Q!==void 0)if(j&&j({kind:"set part",part:Q,value:q[Z],valueIndex:Z,values:q,templateInstance:this}),Q.strings!==void 0)Q._$setValue(q,Q,Z),Z+=Q.strings.length-2;else Q._$setValue(q[Z]);Z++}}}class f2{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(q,Z,Q,F){this.type=p4,this._$committedValue=v,this._$disconnectableChildren=void 0,this._$startNode=q,this._$endNode=Z,this._$parent=Q,this.options=F,this.__isConnected=F?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let q=d0(this._$startNode).parentNode,Z=this._$parent;if(Z!==void 0&&q?.nodeType===11)q=Z.parentNode;return q}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(q,Z=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(q=z2(this,q,Z),j2(q)){if(q===v||q==null||q===""){if(this._$committedValue!==v)j&&j({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=v}else if(q!==this._$committedValue&&q!==t)this._commitText(q)}else if(q._$litType$!==void 0)this._commitTemplateResult(q);else if(q.nodeType!==void 0){if(this.options?.host===q){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",q,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(q)}else if(mQ(q))this._commitIterable(q);else this._commitText(q)}_insert(q){return d0(d0(this._$startNode).parentNode).insertBefore(q,this._$endNode)}_commitNode(q){if(this._$committedValue!==q){if(this._$clear(),p1!==i4){let Z=this._$startNode.parentNode?.nodeName;if(Z==="STYLE"||Z==="SCRIPT"){let Q="Forbidden";if(Z==="STYLE")Q="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else Q="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(Q)}}j&&j({kind:"commit node",start:this._$startNode,parent:this._$parent,value:q,options:this.options}),this._$committedValue=this._insert(q)}}_commitText(q){if(this._$committedValue!==v&&j2(this._$committedValue)){let Z=d0(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=h8(Z,"data","property");q=this._textSanitizer(q),j&&j({kind:"commit text",node:Z,value:q,options:this.options}),Z.data=q}else{let Z=c1.createTextNode("");if(this._commitNode(Z),this._textSanitizer===void 0)this._textSanitizer=h8(Z,"data","property");q=this._textSanitizer(q),j&&j({kind:"commit text",node:Z,value:q,options:this.options}),Z.data=q}this._$committedValue=q}_commitTemplateResult(q){let{values:Z,["_$litType$"]:Q}=q,F=typeof Q==="number"?this._$getTemplate(q):(Q.el===void 0&&(Q.el=C2.createElement(X9(Q.h,Q.h[0]),this.options)),Q);if(this._$committedValue?._$template===F)j&&j({kind:"template updating",template:F,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:Z}),this._$committedValue._update(Z);else{let w=new Y9(F,this),J=w._clone(this.options);j&&j({kind:"template instantiated",template:F,instance:w,parts:w._$parts,options:this.options,fragment:J,values:Z}),w._update(Z),j&&j({kind:"template instantiated and updated",template:F,instance:w,parts:w._$parts,options:this.options,fragment:J,values:Z}),this._commitNode(J),this._$committedValue=w}}_$getTemplate(q){let Z=K9.get(q.strings);if(Z===void 0)K9.set(q.strings,Z=new C2(q));return Z}_commitIterable(q){if(!u8(this._$committedValue))this._$committedValue=[],this._$clear();let Z=this._$committedValue,Q=0,F;for(let w of q){if(Q===Z.length)Z.push(F=new f2(this._insert(P2()),this._insert(P2()),this,this.options));else F=Z[Q];F._$setValue(w),Q++}if(Q<Z.length)this._$clear(F&&d0(F._$endNode).nextSibling,Q),Z.length=Q}_$clear(q=d0(this._$startNode).nextSibling,Z){this._$notifyConnectionChanged?.(!1,!0,Z);while(q!==this._$endNode){let Q=d0(q).nextSibling;d0(q).remove(),q=Q}}setConnected(q){if(this._$parent===void 0)this.__isConnected=q,this._$notifyConnectionChanged?.(q);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class _2{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(q,Z,Q,F,w){if(this.type=v8,this._$committedValue=v,this._$disconnectableChildren=void 0,this.element=q,this.name=Z,this._$parent=F,this.options=w,Q.length>2||Q[0]!==""||Q[1]!=="")this._$committedValue=Array(Q.length-1).fill(new String),this.strings=Q;else this._$committedValue=v;this._sanitizer=void 0}_$setValue(q,Z=this,Q,F){let w=this.strings,J=!1;if(w===void 0){if(q=z2(this,q,Z,0),J=!j2(q)||q!==this._$committedValue&&q!==t,J)this._$committedValue=q}else{let G=q;q=w[0];let X,z;for(X=0;X<w.length-1;X++){if(z=z2(this,G[Q+X],Z,X),z===t)z=this._$committedValue[X];if(J||=!j2(z)||z!==this._$committedValue[X],z===v)q=v;else if(q!==v)q+=(z??"")+w[X+1];this._$committedValue[X]=z}}if(J&&!F)this._commitValue(q)}_commitValue(q){if(q===v)d0(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=p1(this.element,this.name,"attribute");q=this._sanitizer(q??""),j&&j({kind:"commit attribute",element:this.element,name:this.name,value:q,options:this.options}),d0(this.element).setAttribute(this.name,q??"")}}}class H9 extends _2{constructor(){super(...arguments);this.type=oQ}_commitValue(q){if(this._sanitizer===void 0)this._sanitizer=p1(this.element,this.name,"property");q=this._sanitizer(q),j&&j({kind:"commit property",element:this.element,name:this.name,value:q,options:this.options}),this.element[this.name]=q===v?void 0:q}}class U9 extends _2{constructor(){super(...arguments);this.type=rQ}_commitValue(q){j&&j({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(q&&q!==v),options:this.options}),d0(this.element).toggleAttribute(this.name,!!q&&q!==v)}}class B9 extends _2{constructor(q,Z,Q,F,w){super(q,Z,Q,F,w);if(this.type=aQ,this.strings!==void 0)throw Error(`A \`<${q.localName}>\` has a \`@${Z}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(q,Z=this){if(q=z2(this,q,Z,0)??v,q===t)return;let Q=this._$committedValue,F=q===v&&Q!==v||q.capture!==Q.capture||q.once!==Q.once||q.passive!==Q.passive,w=q!==v&&(Q===v||F);if(j&&j({kind:"commit event listener",element:this.element,name:this.name,value:q,options:this.options,removeListener:F,addListener:w,oldListener:Q}),F)this.element.removeEventListener(this.name,this,Q);if(w)this.element.addEventListener(this.name,this,q);this._$committedValue=q}handleEvent(q){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,q);else this._$committedValue.handleEvent(q)}}class M9{constructor(q,Z,Q){this.element=q,this.type=d8,this._$disconnectableChildren=void 0,this._$parent=Z,this.options=Q}get _$isConnected(){return this._$parent._$isConnected}_$setValue(q){j&&j({kind:"commit to element binding",element:this.element,value:q,options:this.options}),z2(this,q)}}var qK=k0.litHtmlPolyfillSupportDevMode;qK?.(C2,f2);(k0.litHtmlVersions??=[]).push("3.3.1");if(k0.litHtmlVersions.length>1)queueMicrotask(()=>{y2("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var S2=(q,Z,Q)=>{if(Z==null)throw TypeError(`The container to render into may not be ${Z}`);let F=gQ++,w=Q?.renderBefore??Z,J=w._$litPart$;if(j&&j({kind:"begin render",id:F,value:q,container:Z,options:Q,part:J}),J===void 0){let G=Q?.renderBefore??null;w._$litPart$=J=new f2(Z.insertBefore(P2(),G),G,void 0,Q??{})}return J._$setValue(q),j&&j({kind:"end render",id:F,value:q,container:Z,options:Q,part:J}),J};S2.setSanitizer=uQ,S2.createSanitizer=h8,S2._testOnlyClearSanitizerFactoryDoNotCallOrElse=vQ;var ZK=(q,Z)=>q,c8=!0,T1=globalThis,N9;if(c8)T1.litIssuedWarnings??=new Set,N9=(q,Z)=>{if(Z+=` See https://lit.dev/msg/${q} for more information.`,!T1.litIssuedWarnings.has(Z)&&!T1.litIssuedWarnings.has(q))console.warn(Z),T1.litIssuedWarnings.add(Z)};class j1 extends V0{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let q=super.createRenderRoot();return this.renderOptions.renderBefore??=q.firstChild,q}update(q){let Z=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(q),this.__childPart=S2(Z,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return t}}j1._$litElement$=!0;j1[ZK("finalized",j1)]=!0;T1.litElementHydrateSupport?.({LitElement:j1});var QK=c8?T1.litElementPolyfillSupportDevMode:T1.litElementPolyfillSupport;QK?.({LitElement:j1});(T1.litElementVersions??=[]).push("4.2.1");if(c8&&T1.litElementVersions.length>1)queueMicrotask(()=>{N9("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var m0=!1;var z0=(q)=>(Z,Q)=>{if(Q!==void 0)Q.addInitializer(()=>{customElements.define(q,Z)});else customElements.define(q,Z)};var L9=!0,V9;if(L9)globalThis.litIssuedWarnings??=new Set,V9=(q,Z)=>{if(Z+=` See https://lit.dev/msg/${q} for more information.`,!globalThis.litIssuedWarnings.has(Z)&&!globalThis.litIssuedWarnings.has(q))console.warn(Z),globalThis.litIssuedWarnings.add(Z)};var KK=(q,Z,Q)=>{let F=Z.hasOwnProperty(Q);return Z.constructor.createProperty(Q,q),F?Object.getOwnPropertyDescriptor(Z,Q):void 0},FK={attribute:!0,type:String,converter:$2,reflect:!1,hasChanged:v4},wK=(q=FK,Z,Q)=>{let{kind:F,metadata:w}=Q;if(L9&&w==null)V9("missing-class-metadata",`The class ${Z} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let J=globalThis.litPropertyMetadata.get(w);if(J===void 0)globalThis.litPropertyMetadata.set(w,J=new Map);if(F==="setter")q=Object.create(q),q.wrapped=!0;if(J.set(Q.name,q),F==="accessor"){let{name:G}=Q;return{set(X){let z=Z.get.call(this);Z.set.call(this,X),this.requestUpdate(G,z,q)},init(X){if(X!==void 0)this._$changeProperty(G,void 0,q,X);return X}}}else if(F==="setter"){let{name:G}=Q;return function(X){let z=this[G];Z.call(this,X),this.requestUpdate(G,z,q)}}throw Error(`Unsupported decorator location: ${F}`)};function N(q){return(Z,Q)=>{return typeof Q==="object"?wK(q,Z,Q):KK(q,Z,Q)}}function p(q){return N({...q,state:!0,attribute:!1})}function k9(q){return(Z,Q)=>{let F=typeof Z==="function"?Z:Z[Q];Object.assign(F,q)}}var i1=(q,Z,Q)=>{if(Q.configurable=!0,Q.enumerable=!0,Reflect.decorate&&typeof Z!=="object")Object.defineProperty(q,Z,Q);return Q};var p8=!0,T9;if(p8)globalThis.litIssuedWarnings??=new Set,T9=(q,Z)=>{if(Z+=q?` See https://lit.dev/msg/${q} for more information.`:"",!globalThis.litIssuedWarnings.has(Z)&&!globalThis.litIssuedWarnings.has(q))console.warn(Z),globalThis.litIssuedWarnings.add(Z)};function o(q,Z){return(Q,F,w)=>{let J=(G)=>{let X=G.renderRoot?.querySelector(q)??null;if(p8&&X===null&&Z&&!G.hasUpdated){let z=typeof F==="object"?F.name:F;T9("",`@query'd field ${JSON.stringify(String(z))} with the 'cache' flag set for selector '${q}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return X};if(Z){let{get:G,set:X}=typeof F==="object"?Q:w??(()=>{let z=p8?Symbol(`${String(F)} (@query() cache)`):Symbol();return{get(){return this[z]},set(Y){this[z]=Y}}})();return i1(Q,F,{get(){let z=G.call(this);if(z===void 0){if(z=J(this),z!==null||this.hasUpdated)X.call(this,z)}return z}})}else return i1(Q,F,{get(){return J(this)}})}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var JK=`:host {
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
`,l4,T0=class extends j1{constructor(){super();v7(this,l4,!1),this.initialReflectedProperties=new Map,this.didSSR=m0||Boolean(this.shadowRoot),this.customStates={set:(Z,Q)=>{if(!Boolean(this.internals?.states))return;try{if(Q)this.internals.states.add(Z);else this.internals.states.delete(Z)}catch(F){if(String(F).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw F}},has:(Z)=>{if(!Boolean(this.internals?.states))return!1;try{return this.internals.states.has(Z)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let q=this.constructor;for(let[Z,Q]of q.elementProperties)if(Q.default==="inherit"&&Q.initial!==void 0&&typeof Z==="string")this.customStates.set(`initial-${Z}-${Q.initial}`,!0)}static get styles(){let q=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[JK,...q].map((Z)=>typeof Z==="string"?C8(Z):Z)}attributeChangedCallback(q,Z,Q){if(!u7(this,l4))this.constructor.elementProperties.forEach((F,w)=>{if(F.reflect&&this[w]!=null)this.initialReflectedProperties.set(w,this[w])}),d7(this,l4,!0);super.attributeChangedCallback(q,Z,Q)}willUpdate(q){super.willUpdate(q),this.initialReflectedProperties.forEach((Z,Q)=>{if(q.has(Q)&&this[Q]==null)this[Q]=Z})}firstUpdated(q){if(super.firstUpdated(q),this.didSSR)this.shadowRoot?.querySelectorAll("slot").forEach((Z)=>{Z.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(q){try{super.update(q)}catch(Z){if(this.didSSR&&!this.hasUpdated){let Q=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});Q.error=Z,this.dispatchEvent(Q)}throw Z}}relayNativeEvent(q,Z){q.stopImmediatePropagation(),this.dispatchEvent(new q.constructor(q.type,{...q,...Z}))}};l4=new WeakMap;B([N()],T0.prototype,"dir",2);B([N()],T0.prototype,"lang",2);B([N({type:Boolean,reflect:!0,attribute:"did-ssr"})],T0.prototype,"didSSR",2);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var b2=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},GK=()=>{return{observedAttributes:["custom-error"],checkValidity(q){let Z={message:"",isValid:!0,invalidKeys:[]};if(q.customError)Z.message=q.customError,Z.isValid=!1,Z.invalidKeys=["customError"];return Z}}},e=class extends T0{constructor(){super();if(this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=(q)=>{if(q.target!==this)return;this.hasInteracted=!0,this.dispatchEvent(new b2)},this.handleInteraction=(q)=>{let Z=this.emittedEvents;if(!Z.includes(q.type))Z.push(q.type);if(Z.length===this.assumeInteractionOn?.length)this.hasInteracted=!0},!m0)this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[GK()]}static get observedAttributes(){let q=new Set(super.observedAttributes||[]);for(let Z of this.validators){if(!Z.observedAttributes)continue;for(let Q of Z.observedAttributes)q.add(Q)}return[...q]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach((q)=>{this.addEventListener(q,this.handleInteraction)})}firstUpdated(...q){super.firstUpdated(...q),this.updateValidity()}willUpdate(q){if(!m0&&q.has("customError")){if(!this.customError)this.customError=null;this.setCustomValidity(this.customError||"")}if(q.has("value")||q.has("disabled")){let Z=this.value;if(Array.isArray(Z)){if(this.name){let Q=new FormData;for(let F of Z)Q.append(this.name,F);this.setValue(Q,Q)}}else this.setValue(Z,Z)}if(q.has("disabled")){if(this.customStates.set("disabled",this.disabled),this.hasAttribute("disabled")||!m0&&!this.matches(":disabled"))this.toggleAttribute("disabled",this.disabled)}this.updateValidity(),super.willUpdate(q)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...q){let Z=q[0],Q=q[1],F=q[2];if(!F)F=this.validationTarget;this.internals.setValidity(Z,Q,F||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let q=Boolean(this.required),Z=this.internals.validity.valid,Q=this.hasInteracted;this.customStates.set("required",q),this.customStates.set("optional",!q),this.customStates.set("invalid",!Z),this.customStates.set("valid",Z),this.customStates.set("user-invalid",!Z&&Q),this.customStates.set("user-valid",Z&&Q)}setCustomValidity(q){if(!q){this.customError=null,this.setValidity({});return}this.customError=q,this.setValidity({customError:!0},q,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(q){this.disabled=q,this.updateValidity()}formStateRestoreCallback(q,Z){if(this.value=q,Z==="restore")this.resetValidity();this.updateValidity()}setValue(...q){let[Z,Q]=q;this.internals.setFormValue(Z,Q)}get allValidators(){let q=this.constructor.validators||[],Z=this.validators||[];return[...q,...Z]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let q=this.allValidators;if(!q?.length)return;let Z={customError:Boolean(this.customError)},Q=this.validationTarget||this.input||void 0,F="";for(let w of q){let{isValid:J,message:G,invalidKeys:X}=w.checkValidity(this);if(J)continue;if(!F)F=G;if(X?.length>=0)X.forEach((z)=>Z[z]=!0)}if(!F)F=this.validationMessage;this.setValidity(Z,F,Q)}};e.formAssociated=!0;B([N({reflect:!0})],e.prototype,"name",2);B([N({type:Boolean})],e.prototype,"disabled",2);B([N({state:!0,attribute:!1})],e.prototype,"valueHasChanged",2);B([N({state:!0,attribute:!1})],e.prototype,"hasInteracted",2);B([N({attribute:"custom-error",reflect:!0})],e.prototype,"customError",2);B([N({attribute:!1,state:!0,type:Object})],e.prototype,"validity",1);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var X2=class{constructor(q,...Z){this.slotNames=[],this.handleSlotChange=(Q)=>{let F=Q.target;if(this.slotNames.includes("[default]")&&!F.name||F.name&&this.slotNames.includes(F.name))this.host.requestUpdate()},(this.host=q).addController(this),this.slotNames=Z}hasDefaultSlot(){return[...this.host.childNodes].some((q)=>{if(q.nodeType===Node.TEXT_NODE&&q.textContent.trim()!=="")return!0;if(q.nodeType===Node.ELEMENT_NODE){let Z=q;if(Z.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!Z.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(q){return this.host.querySelector(`:scope > [slot="${q}"]`)!==null}test(q){return q==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(q)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Y2=`@layer wa-utilities {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function D0(q,Z,Q){let F=(w)=>Object.is(w,-0)?0:w;if(q<Z)return F(Z);if(q>Q)return F(Q);return F(q)}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function i8(q,Z){return new Promise((Q)=>{function F(w){if(w.target===q)q.removeEventListener(Z,F),Q()}q.addEventListener(Z,F)})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function l8(q,Z){return new Promise((Q)=>{let F=new AbortController,{signal:w}=F;if(q.classList.contains(Z))return;q.classList.remove(Z),q.classList.add(Z);let J=()=>{q.classList.remove(Z),Q(),F.abort()};q.addEventListener("animationend",J,{once:!0,signal:w}),q.addEventListener("animationcancel",J,{once:!0,signal:w})})}var s8=new Set,H2=new Map,l1,n8="ltr",o8="en",D9=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(D9){let q=new MutationObserver(O9);n8=document.documentElement.dir||"ltr",o8=document.documentElement.lang||navigator.language,q.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function x2(...q){q.map((Z)=>{let Q=Z.$code.toLowerCase();if(H2.has(Q))H2.set(Q,Object.assign(Object.assign({},H2.get(Q)),Z));else H2.set(Q,Z);if(!l1)l1=Z}),O9()}function O9(){if(D9)n8=document.documentElement.dir||"ltr",o8=document.documentElement.lang||navigator.language;[...s8.keys()].map((q)=>{if(typeof q.requestUpdate==="function")q.requestUpdate()})}class r8{constructor(q){this.host=q,this.host.addController(this)}hostConnected(){s8.add(this.host)}hostDisconnected(){s8.delete(this.host)}dir(){return`${this.host.dir||n8}`.toLowerCase()}lang(){return`${this.host.lang||o8}`.toLowerCase()}getTranslationData(q){var Z,Q;let F=new Intl.Locale(q.replace(/_/g,"-")),w=F===null||F===void 0?void 0:F.language.toLowerCase(),J=(Q=(Z=F===null||F===void 0?void 0:F.region)===null||Z===void 0?void 0:Z.toLowerCase())!==null&&Q!==void 0?Q:"",G=H2.get(`${w}-${J}`),X=H2.get(w);return{locale:F,language:w,region:J,primary:G,secondary:X}}exists(q,Z){var Q;let{primary:F,secondary:w}=this.getTranslationData((Q=Z.lang)!==null&&Q!==void 0?Q:this.lang());if(Z=Object.assign({includeFallback:!1},Z),F&&F[q]||w&&w[q]||Z.includeFallback&&l1&&l1[q])return!0;return!1}term(q,...Z){let{primary:Q,secondary:F}=this.getTranslationData(this.lang()),w;if(Q&&Q[q])w=Q[q];else if(F&&F[q])w=F[q];else if(l1&&l1[q])w=l1[q];else return console.error(`No translation found for: ${String(q)}`),String(q);if(typeof w==="function")return w(...Z);return w}date(q,Z){return q=new Date(q),new Intl.DateTimeFormat(this.lang(),Z).format(q)}number(q,Z){return q=Number(q),isNaN(q)?"":new Intl.NumberFormat(this.lang(),Z).format(q)}relativeTime(q,Z,Q){return new Intl.RelativeTimeFormat(this.lang(),Q).format(q,Z)}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var W9={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(q,Z)=>`Go to slide ${q} of ${Z}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:(q)=>{if(q===0)return"No options selected";if(q===1)return"1 option selected";return`${q} options selected`},pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:(q)=>`Slide ${q}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};x2(W9);var A9=W9;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var w1=class extends r8{};x2(A9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function C0(q,Z){let Q={waitUntilFirstUpdate:!1,...Z};return(F,w)=>{let{update:J}=F,G=Array.isArray(q)?q:[q];F.update=function(X){G.forEach((z)=>{let Y=z;if(X.has(Y)){let U=X.get(Y),M=this[Y];if(U!==M){if(!Q.waitUntilFirstUpdate||this.hasUpdated)this[w](U,M)}}}),J.call(this,X)}}}function s(q,Z){if(zK(q))q="100%";let Q=XK(q);if(q=Z===360?q:Math.min(Z,Math.max(0,parseFloat(q))),Q)q=parseInt(String(q*Z),10)/100;if(Math.abs(q-Z)<0.000001)return 1;if(Z===360)q=(q<0?q%Z+Z:q%Z)/parseFloat(String(Z));else q=q%Z/parseFloat(String(Z));return q}function g2(q){return Math.min(1,Math.max(0,q))}function zK(q){return typeof q==="string"&&q.indexOf(".")!==-1&&parseFloat(q)===1}function XK(q){return typeof q==="string"&&q.indexOf("%")!==-1}function s4(q){if(q=parseFloat(q),isNaN(q)||q<0||q>1)q=1;return q}function h2(q){if(Number(q)<=1)return`${Number(q)*100}%`;return q}function C1(q){return q.length===1?"0"+q:String(q)}function I9(q,Z,Q){return{r:s(q,255)*255,g:s(Z,255)*255,b:s(Q,255)*255}}function t8(q,Z,Q){q=s(q,255),Z=s(Z,255),Q=s(Q,255);let F=Math.max(q,Z,Q),w=Math.min(q,Z,Q),J=0,G=0,X=(F+w)/2;if(F===w)G=0,J=0;else{let z=F-w;switch(G=X>0.5?z/(2-F-w):z/(F+w),F){case q:J=(Z-Q)/z+(Z<Q?6:0);break;case Z:J=(Q-q)/z+2;break;case Q:J=(q-Z)/z+4;break;default:break}J/=6}return{h:J,s:G,l:X}}function a8(q,Z,Q){if(Q<0)Q+=1;if(Q>1)Q-=1;if(Q<0.16666666666666666)return q+(Z-q)*(6*Q);if(Q<0.5)return Z;if(Q<0.6666666666666666)return q+(Z-q)*(0.6666666666666666-Q)*6;return q}function E9(q,Z,Q){let F,w,J;if(q=s(q,360),Z=s(Z,100),Q=s(Q,100),Z===0)w=Q,J=Q,F=Q;else{let G=Q<0.5?Q*(1+Z):Q+Z-Q*Z,X=2*Q-G;F=a8(X,G,q+0.3333333333333333),w=a8(X,G,q),J=a8(X,G,q-0.3333333333333333)}return{r:F*255,g:w*255,b:J*255}}function e8(q,Z,Q){q=s(q,255),Z=s(Z,255),Q=s(Q,255);let F=Math.max(q,Z,Q),w=Math.min(q,Z,Q),J=0,G=F,X=F-w,z=F===0?0:X/F;if(F===w)J=0;else{switch(F){case q:J=(Z-Q)/X+(Z<Q?6:0);break;case Z:J=(Q-q)/X+2;break;case Q:J=(q-Z)/X+4;break;default:break}J/=6}return{h:J,s:z,v:G}}function $9(q,Z,Q){q=s(q,360)*6,Z=s(Z,100),Q=s(Q,100);let F=Math.floor(q),w=q-F,J=Q*(1-Z),G=Q*(1-w*Z),X=Q*(1-(1-w)*Z),z=F%6,Y=[Q,G,J,J,X,Q][z],U=[X,Q,Q,G,J,J][z],M=[J,J,X,Q,Q,G][z];return{r:Y*255,g:U*255,b:M*255}}function q6(q,Z,Q,F){let w=[C1(Math.round(q).toString(16)),C1(Math.round(Z).toString(16)),C1(Math.round(Q).toString(16))];if(F&&w[0].startsWith(w[0].charAt(1))&&w[1].startsWith(w[1].charAt(1))&&w[2].startsWith(w[2].charAt(1)))return w[0].charAt(0)+w[1].charAt(0)+w[2].charAt(0);return w.join("")}function R9(q,Z,Q,F,w){let J=[C1(Math.round(q).toString(16)),C1(Math.round(Z).toString(16)),C1(Math.round(Q).toString(16)),C1(YK(F))];if(w&&J[0].startsWith(J[0].charAt(1))&&J[1].startsWith(J[1].charAt(1))&&J[2].startsWith(J[2].charAt(1))&&J[3].startsWith(J[3].charAt(1)))return J[0].charAt(0)+J[1].charAt(0)+J[2].charAt(0)+J[3].charAt(0);return J.join("")}function S9(q,Z,Q,F){let w=q/100,J=Z/100,G=Q/100,X=F/100,z=255*(1-w)*(1-X),Y=255*(1-J)*(1-X),U=255*(1-G)*(1-X);return{r:z,g:Y,b:U}}function Z6(q,Z,Q){let F=1-q/255,w=1-Z/255,J=1-Q/255,G=Math.min(F,w,J);if(G===1)F=0,w=0,J=0;else F=(F-G)/(1-G)*100,w=(w-G)/(1-G)*100,J=(J-G)/(1-G)*100;return G*=100,{c:Math.round(F),m:Math.round(w),y:Math.round(J),k:Math.round(G)}}function YK(q){return Math.round(parseFloat(q)*255).toString(16)}function Q6(q){return X0(q)/255}function X0(q){return parseInt(q,16)}function y9(q){return{r:q>>16,g:(q&65280)>>8,b:q&255}}var u2={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function P9(q){let Z={r:0,g:0,b:0},Q=1,F=null,w=null,J=null,G=!1,X=!1;if(typeof q==="string")q=BK(q);if(typeof q==="object"){if(O0(q.r)&&O0(q.g)&&O0(q.b))Z=I9(q.r,q.g,q.b),G=!0,X=String(q.r).substr(-1)==="%"?"prgb":"rgb";else if(O0(q.h)&&O0(q.s)&&O0(q.v))F=h2(q.s),w=h2(q.v),Z=$9(q.h,F,w),G=!0,X="hsv";else if(O0(q.h)&&O0(q.s)&&O0(q.l))F=h2(q.s),J=h2(q.l),Z=E9(q.h,F,J),G=!0,X="hsl";else if(O0(q.c)&&O0(q.m)&&O0(q.y)&&O0(q.k))Z=S9(q.c,q.m,q.y,q.k),G=!0,X="cmyk";if(Object.prototype.hasOwnProperty.call(q,"a"))Q=q.a}return Q=s4(Q),{ok:G,format:q.format||X,r:Math.min(255,Math.max(Z.r,0)),g:Math.min(255,Math.max(Z.g,0)),b:Math.min(255,Math.max(Z.b,0)),a:Q}}var HK="[-\\+]?\\d+%?",UK="[-\\+]?\\d*\\.\\d+%?",f1="(?:"+UK+")|(?:"+HK+")",K6="[\\s|\\(]+("+f1+")[,|\\s]+("+f1+")[,|\\s]+("+f1+")\\s*\\)?",n4="[\\s|\\(]+("+f1+")[,|\\s]+("+f1+")[,|\\s]+("+f1+")[,|\\s]+("+f1+")\\s*\\)?",f0={CSS_UNIT:new RegExp(f1),rgb:new RegExp("rgb"+K6),rgba:new RegExp("rgba"+n4),hsl:new RegExp("hsl"+K6),hsla:new RegExp("hsla"+n4),hsv:new RegExp("hsv"+K6),hsva:new RegExp("hsva"+n4),cmyk:new RegExp("cmyk"+n4),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function BK(q){if(q=q.trim().toLowerCase(),q.length===0)return!1;let Z=!1;if(u2[q])q=u2[q],Z=!0;else if(q==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let Q=f0.rgb.exec(q);if(Q)return{r:Q[1],g:Q[2],b:Q[3]};if(Q=f0.rgba.exec(q),Q)return{r:Q[1],g:Q[2],b:Q[3],a:Q[4]};if(Q=f0.hsl.exec(q),Q)return{h:Q[1],s:Q[2],l:Q[3]};if(Q=f0.hsla.exec(q),Q)return{h:Q[1],s:Q[2],l:Q[3],a:Q[4]};if(Q=f0.hsv.exec(q),Q)return{h:Q[1],s:Q[2],v:Q[3]};if(Q=f0.hsva.exec(q),Q)return{h:Q[1],s:Q[2],v:Q[3],a:Q[4]};if(Q=f0.cmyk.exec(q),Q)return{c:Q[1],m:Q[2],y:Q[3],k:Q[4]};if(Q=f0.hex8.exec(q),Q)return{r:X0(Q[1]),g:X0(Q[2]),b:X0(Q[3]),a:Q6(Q[4]),format:Z?"name":"hex8"};if(Q=f0.hex6.exec(q),Q)return{r:X0(Q[1]),g:X0(Q[2]),b:X0(Q[3]),format:Z?"name":"hex"};if(Q=f0.hex4.exec(q),Q)return{r:X0(Q[1]+Q[1]),g:X0(Q[2]+Q[2]),b:X0(Q[3]+Q[3]),a:Q6(Q[4]+Q[4]),format:Z?"name":"hex8"};if(Q=f0.hex3.exec(q),Q)return{r:X0(Q[1]+Q[1]),g:X0(Q[2]+Q[2]),b:X0(Q[3]+Q[3]),format:Z?"name":"hex"};return!1}function O0(q){if(typeof q==="number")return!Number.isNaN(q);return f0.CSS_UNIT.test(q)}class d{constructor(q="",Z={}){if(q instanceof d)return q;if(typeof q==="number")q=y9(q);this.originalInput=q;let Q=P9(q);if(this.originalInput=q,this.r=Q.r,this.g=Q.g,this.b=Q.b,this.a=Q.a,this.roundA=Math.round(100*this.a)/100,this.format=Z.format??Q.format,this.gradientType=Z.gradientType,this.r<1)this.r=Math.round(this.r);if(this.g<1)this.g=Math.round(this.g);if(this.b<1)this.b=Math.round(this.b);this.isValid=Q.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let q=this.toRgb();return(q.r*299+q.g*587+q.b*114)/1000}getLuminance(){let q=this.toRgb(),Z,Q,F,w=q.r/255,J=q.g/255,G=q.b/255;if(w<=0.03928)Z=w/12.92;else Z=Math.pow((w+0.055)/1.055,2.4);if(J<=0.03928)Q=J/12.92;else Q=Math.pow((J+0.055)/1.055,2.4);if(G<=0.03928)F=G/12.92;else F=Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Q+0.0722*F}getAlpha(){return this.a}setAlpha(q){return this.a=s4(q),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:q}=this.toHsl();return q===0}toHsv(){let q=e8(this.r,this.g,this.b);return{h:q.h*360,s:q.s,v:q.v,a:this.a}}toHsvString(){let q=e8(this.r,this.g,this.b),Z=Math.round(q.h*360),Q=Math.round(q.s*100),F=Math.round(q.v*100);return this.a===1?`hsv(${Z}, ${Q}%, ${F}%)`:`hsva(${Z}, ${Q}%, ${F}%, ${this.roundA})`}toHsl(){let q=t8(this.r,this.g,this.b);return{h:q.h*360,s:q.s,l:q.l,a:this.a}}toHslString(){let q=t8(this.r,this.g,this.b),Z=Math.round(q.h*360),Q=Math.round(q.s*100),F=Math.round(q.l*100);return this.a===1?`hsl(${Z}, ${Q}%, ${F}%)`:`hsla(${Z}, ${Q}%, ${F}%, ${this.roundA})`}toHex(q=!1){return q6(this.r,this.g,this.b,q)}toHexString(q=!1){return"#"+this.toHex(q)}toHex8(q=!1){return R9(this.r,this.g,this.b,this.a,q)}toHex8String(q=!1){return"#"+this.toHex8(q)}toHexShortString(q=!1){return this.a===1?this.toHexString(q):this.toHex8String(q)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let q=Math.round(this.r),Z=Math.round(this.g),Q=Math.round(this.b);return this.a===1?`rgb(${q}, ${Z}, ${Q})`:`rgba(${q}, ${Z}, ${Q}, ${this.roundA})`}toPercentageRgb(){let q=(Z)=>`${Math.round(s(Z,255)*100)}%`;return{r:q(this.r),g:q(this.g),b:q(this.b),a:this.a}}toPercentageRgbString(){let q=(Z)=>Math.round(s(Z,255)*100);return this.a===1?`rgb(${q(this.r)}%, ${q(this.g)}%, ${q(this.b)}%)`:`rgba(${q(this.r)}%, ${q(this.g)}%, ${q(this.b)}%, ${this.roundA})`}toCmyk(){return{...Z6(this.r,this.g,this.b)}}toCmykString(){let{c:q,m:Z,y:Q,k:F}=Z6(this.r,this.g,this.b);return`cmyk(${q}, ${Z}, ${Q}, ${F})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let q="#"+q6(this.r,this.g,this.b,!1);for(let[Z,Q]of Object.entries(u2))if(q===Q)return Z;return!1}toString(q){let Z=Boolean(q);q=q??this.format;let Q=!1,F=this.a<1&&this.a>=0;if(!Z&&F&&(q.startsWith("hex")||q==="name")){if(q==="name"&&this.a===0)return this.toName();return this.toRgbString()}if(q==="rgb")Q=this.toRgbString();if(q==="prgb")Q=this.toPercentageRgbString();if(q==="hex"||q==="hex6")Q=this.toHexString();if(q==="hex3")Q=this.toHexString(!0);if(q==="hex4")Q=this.toHex8String(!0);if(q==="hex8")Q=this.toHex8String();if(q==="name")Q=this.toName();if(q==="hsl")Q=this.toHslString();if(q==="hsv")Q=this.toHsvString();if(q==="cmyk")Q=this.toCmykString();return Q||this.toHexString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new d(this.toString())}lighten(q=10){let Z=this.toHsl();return Z.l+=q/100,Z.l=g2(Z.l),new d(Z)}brighten(q=10){let Z=this.toRgb();return Z.r=Math.max(0,Math.min(255,Z.r-Math.round(255*-(q/100)))),Z.g=Math.max(0,Math.min(255,Z.g-Math.round(255*-(q/100)))),Z.b=Math.max(0,Math.min(255,Z.b-Math.round(255*-(q/100)))),new d(Z)}darken(q=10){let Z=this.toHsl();return Z.l-=q/100,Z.l=g2(Z.l),new d(Z)}tint(q=10){return this.mix("white",q)}shade(q=10){return this.mix("black",q)}desaturate(q=10){let Z=this.toHsl();return Z.s-=q/100,Z.s=g2(Z.s),new d(Z)}saturate(q=10){let Z=this.toHsl();return Z.s+=q/100,Z.s=g2(Z.s),new d(Z)}greyscale(){return this.desaturate(100)}spin(q){let Z=this.toHsl(),Q=(Z.h+q)%360;return Z.h=Q<0?360+Q:Q,new d(Z)}mix(q,Z=50){let Q=this.toRgb(),F=new d(q).toRgb(),w=Z/100,J={r:(F.r-Q.r)*w+Q.r,g:(F.g-Q.g)*w+Q.g,b:(F.b-Q.b)*w+Q.b,a:(F.a-Q.a)*w+Q.a};return new d(J)}analogous(q=6,Z=30){let Q=this.toHsl(),F=360/Z,w=[this];for(Q.h=(Q.h-(F*q>>1)+720)%360;--q;)Q.h=(Q.h+F)%360,w.push(new d(Q));return w}complement(){let q=this.toHsl();return q.h=(q.h+180)%360,new d(q)}monochromatic(q=6){let Z=this.toHsv(),{h:Q}=Z,{s:F}=Z,{v:w}=Z,J=[],G=1/q;while(q--)J.push(new d({h:Q,s:F,v:w})),w=(w+G)%1;return J}splitcomplement(){let q=this.toHsl(),{h:Z}=q;return[this,new d({h:(Z+72)%360,s:q.s,l:q.l}),new d({h:(Z+216)%360,s:q.s,l:q.l})]}onBackground(q){let Z=this.toRgb(),Q=new d(q).toRgb(),F=Z.a+Q.a*(1-Z.a);return new d({r:(Z.r*Z.a+Q.r*Q.a*(1-Z.a))/F,g:(Z.g*Z.a+Q.g*Q.a*(1-Z.a))/F,b:(Z.b*Z.a+Q.b*Q.a*(1-Z.a))/F,a:F})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(q){let Z=this.toHsl(),{h:Q}=Z,F=[this],w=360/q;for(let J=1;J<q;J++)F.push(new d({h:(Q+J*w)%360,s:Z.s,l:Z.l}));return F}equals(q){let Z=new d(q);if(this.format==="cmyk"||Z.format==="cmyk")return this.toCmykString()===Z.toCmykString();return this.toRgbString()===Z.toRgbString()}}var c0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U2=(q)=>(...Z)=>({["_$litDirective$"]:q,values:Z});class s1{constructor(q){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(q,Z,Q){this.__part=q,this._$parent=Z,this.__attributeIndex=Q}_$resolve(q,Z){return this.update(q,Z)}update(q,Z){return this.render(...Z)}}class j9 extends s1{constructor(q){super(q);if(q.type!==c0.ATTRIBUTE||q.name!=="class"||q.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(q){return" "+Object.keys(q).filter((Z)=>q[Z]).join(" ")+" "}update(q,[Z]){if(this._previousClasses===void 0){if(this._previousClasses=new Set,q.strings!==void 0)this._staticClasses=new Set(q.strings.join(" ").split(/\s/).filter((F)=>F!==""));for(let F in Z)if(Z[F]&&!this._staticClasses?.has(F))this._previousClasses.add(F);return this.render(Z)}let Q=q.element.classList;for(let F of this._previousClasses)if(!(F in Z))Q.remove(F),this._previousClasses.delete(F);for(let F in Z){let w=!!Z[F];if(w!==this._previousClasses.has(F)&&!this._staticClasses?.has(F))if(w)Q.add(F),this._previousClasses.add(F);else Q.remove(F),this._previousClasses.delete(F)}return t}}var Q0=U2(j9);var _=(q)=>q??v;var C9="important",f9=" !"+C9,MK=0-f9.length;class _9 extends s1{constructor(q){super(q);if(q.type!==c0.ATTRIBUTE||q.name!=="style"||q.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(q){return Object.keys(q).reduce((Z,Q)=>{let F=q[Q];if(F==null)return Z;return Q=Q.includes("-")?Q:Q.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),Z+`${Q}:${F};`},"")}update(q,[Z]){let{style:Q}=q.element;if(this._previousStyleProperties===void 0)return this._previousStyleProperties=new Set(Object.keys(Z)),this.render(Z);for(let F of this._previousStyleProperties)if(Z[F]==null)if(this._previousStyleProperties.delete(F),F.includes("-"))Q.removeProperty(F);else Q[F]=null;for(let F in Z){let w=Z[F];if(w!=null){this._previousStyleProperties.add(F);let J=typeof w==="string"&&w.endsWith(f9);if(F.includes("-")||J)Q.setProperty(F,J?w.slice(0,MK):w,J?C9:"");else Q[F]=w}}return t}}var D1=U2(_9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var NK=`:host {
  --grid-width: 17em;
  --grid-height: 12em;
  --grid-handle-size: 1.25em;
  --slider-height: 1em;
  --slider-handle-size: calc(var(--slider-height) + 0.25em);
}

.color-picker {
  background-color: var(--wa-color-surface-raised);
  border-radius: var(--wa-border-radius-m);
  border-style: var(--wa-border-style);
  border-width: var(--wa-border-width-s);
  border-color: var(--wa-color-surface-border);
  box-shadow: var(--wa-shadow-m);
  color: var(--color);
  font: inherit;
  font-size: inherit;
  user-select: none;
  width: var(--grid-width);
  -webkit-user-select: none;
}

.grid {
  position: relative;
  height: var(--grid-height);
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
    linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
  border-top-left-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  border-top-right-radius: calc(var(--wa-border-radius-m) - var(--wa-border-width-s));
  cursor: crosshair;
  forced-color-adjust: none;
}

.grid-handle {
  position: absolute;
  width: var(--grid-handle-size);
  height: var(--grid-handle-size);
  border-radius: var(--wa-border-radius-circle);
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  border: solid 0.125rem white;
  margin-top: calc(var(--grid-handle-size) / -2);
  margin-left: calc(var(--grid-handle-size) / -2);
  transition: scale var(--wa-transition-normal) var(--wa-transition-easing);
}

.grid-handle-dragging {
  cursor: none;
  scale: 1.5;
}

.grid-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.controls {
  padding: 0.75em;
  display: flex;
  align-items: center;
}

.sliders {
  flex: 1 1 auto;
}

.slider {
  position: relative;
  height: var(--slider-height);
  border-radius: var(--wa-border-radius-s);
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  forced-color-adjust: none;
}

.slider:not(:last-of-type) {
  margin-bottom: 0.75em;
}

.slider-handle {
  position: absolute;
  top: calc(50% - var(--slider-handle-size) / 2);
  width: var(--slider-handle-size);
  height: var(--slider-handle-size);
  border-radius: var(--wa-border-radius-circle);
  border: solid 0.125rem white;
  box-shadow: 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);
  margin-left: calc(var(--slider-handle-size) / -2);
}

.slider-handle:focus-visible {
  outline: var(--wa-focus-ring);
}

.hue {
  background-image: linear-gradient(
    to right,
    rgb(255, 0, 0) 0%,
    rgb(255, 255, 0) 17%,
    rgb(0, 255, 0) 33%,
    rgb(0, 255, 255) 50%,
    rgb(0, 0, 255) 67%,
    rgb(255, 0, 255) 83%,
    rgb(255, 0, 0) 100%
  );
}

.alpha .alpha-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.preview {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 3em;
  height: 3em;
  border: none;
  border-radius: var(--wa-border-radius-circle);
  background: none;
  font-size: inherit;
  margin-inline-start: 0.75em;
  cursor: copy;
  forced-color-adjust: none;
}

.preview:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  box-shadow: inset 0 0 0 0.0625rem rgba(0, 0, 0, 0.2);

  /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
  background-color: var(--preview-color);
}

.preview:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.preview-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
}

.preview-color-copied {
  animation: pulse 850ms;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 var(--wa-color-brand-fill-loud);
  }
  70% {
    box-shadow: 0 0 0 0.5rem transparent;
  }
  100% {
    box-shadow: 0 0 0 0 transparent;
  }
}

.user-input {
  display: flex;
  align-items: center;
  padding: 0 0.75em 0.75em 0.75em;
}

.user-input wa-input {
  min-width: 0; /* fix input width in Safari */
  flex: 1 1 auto;

  &::part(form-control-label) {
    /* Visually hidden */
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
}

.user-input wa-button-group {
  margin-inline-start: 0.75em;

  &::part(base) {
    flex-wrap: nowrap;
  }
}

.user-input wa-button:first-of-type {
  min-width: 3em;
  max-width: 3em;
}

.swatches {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(1.5em, 100%), 1fr));
  grid-gap: 0.5em;
  justify-items: center;
  border-block-start: var(--wa-form-control-border-style) var(--wa-form-control-border-width)
    var(--wa-color-surface-border);
  padding: 0.5em;
  forced-color-adjust: none;
}

.swatch {
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;
  border-radius: var(--wa-border-radius-s);
}

.swatch .swatch-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 0.0625rem rgba(0, 0, 0, 0.125);
  border-radius: inherit;
  cursor: pointer;
}

.swatch:focus-visible {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

.transparent-bg {
  background-image:
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, transparent 75%, var(--wa-color-neutral-fill-normal) 75%),
    linear-gradient(45deg, var(--wa-color-neutral-fill-normal) 25%, transparent 25%);
  background-size: 0.5rem 0.5rem;
  background-position:
    0 0,
    0 0,
    -0.25rem -0.25rem,
    0.25rem 0.25rem;
}

:host([disabled]) {
  opacity: 0.5;
  cursor: not-allowed;

  .grid,
  .grid-handle,
  .slider,
  .slider-handle,
  .preview,
  .swatch,
  .swatch-color {
    pointer-events: none;
  }
}

/*
 * Color dropdown
 */

.color-dropdown {
  display: contents;
}

.color-dropdown::part(panel) {
  max-height: none;
  background-color: var(--wa-color-surface-raised);
  border: var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);
  border-radius: var(--wa-border-radius-m);
  overflow: visible;
}

.trigger {
  display: block;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  forced-color-adjust: none;
  width: var(--wa-form-control-height);
  height: var(--wa-form-control-height);
  border-radius: var(--wa-form-control-border-radius);
}

.trigger:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: currentColor;
  box-shadow:
    inset 0 0 0 var(--wa-form-control-border-width) var(--wa-form-control-border-color),
    inset 0 0 0 calc(var(--wa-form-control-border-width) * 3) var(--wa-color-surface-default);
}

.trigger-empty:before {
  background-color: transparent;
}

.trigger:focus-visible {
  outline: none;
}

.trigger:focus-visible:not(.trigger:disabled) {
  outline: var(--wa-focus-ring);
  outline-offset: var(--wa-focus-ring-offset);
}

:host([disabled]) :is(.label, .trigger) {
  opacity: 0.5;
  cursor: not-allowed;
}

.form-control.form-control-has-label .label {
  cursor: pointer;
  display: inline-block;
}
`,W=class extends e{constructor(){super();if(this.hasSlotController=new X2(this,"hint","label"),this.isSafeValue=!1,this.localize=new w1(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form=null,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=(q)=>{if(this.open&&q.key==="Escape")q.stopPropagation(),this.hide(),this.focus()},this.handleDocumentKeyDown=(q)=>{if(q.key==="Escape"&&this.open){q.stopPropagation(),this.focus(),this.hide();return}if(q.key==="Tab")setTimeout(()=>{let Z=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;if(!this||Z?.closest(this.tagName.toLowerCase())!==this)this.hide()})},this.handleDocumentMouseDown=(q)=>{let Q=q.composedPath().some((F)=>F instanceof Element&&(F.closest(".color-picker")||F===this.trigger));if(this&&!Q)this.hide()},!m0)this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){let q=m0?[]:[b7()];return[...super.validators,...q]}get validationTarget(){if(this.popup?.active)return this.input;return this.trigger}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(q){if(this._value===q)return;this.valueHasChanged=!0,this._value=q}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let q=["hex","rgb","hsl","hsv"],Z=(q.indexOf(this.format)+1)%q.length;this.format=q[Z],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(q){let Z=this.shadowRoot.querySelector(".slider.alpha"),Q=Z.querySelector(".slider-handle"),{width:F}=Z.getBoundingClientRect(),w=this.value,J=this.value;Q.focus(),q.preventDefault(),h4(Z,{onMove:(G)=>{if(this.alpha=D0(G/F*100,0,100),this.syncValues(),this.value!==J)J=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.value!==w)w=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:q})}handleHueDrag(q){let Z=this.shadowRoot.querySelector(".slider.hue"),Q=Z.querySelector(".slider-handle"),{width:F}=Z.getBoundingClientRect(),w=this.value,J=this.value;Q.focus(),q.preventDefault(),h4(Z,{onMove:(G)=>{if(this.hue=D0(G/F*360,0,360),this.syncValues(),this.value!==J)J=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))})},onStop:()=>{if(this.value!==w)w=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:q})}handleGridDrag(q){let Z=this.shadowRoot.querySelector(".grid"),Q=Z.querySelector(".grid-handle"),{width:F,height:w}=Z.getBoundingClientRect(),J=this.value,G=this.value;Q.focus(),q.preventDefault(),this.isDraggingGridHandle=!0,h4(Z,{onMove:(X,z)=>{if(this.saturation=D0(X/F*100,0,100),this.brightness=D0(100-z/w*100,0,100),this.syncValues(),this.value!==G)G=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.isDraggingGridHandle=!1,this.value!==J)J=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:q})}handleAlphaKeyDown(q){let Z=q.shiftKey?10:1,Q=this.value;if(q.key==="ArrowLeft")q.preventDefault(),this.alpha=D0(this.alpha-Z,0,100),this.syncValues();if(q.key==="ArrowRight")q.preventDefault(),this.alpha=D0(this.alpha+Z,0,100),this.syncValues();if(q.key==="Home")q.preventDefault(),this.alpha=0,this.syncValues();if(q.key==="End")q.preventDefault(),this.alpha=100,this.syncValues();if(this.value!==Q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(q){let Z=q.shiftKey?10:1,Q=this.value;if(q.key==="ArrowLeft")q.preventDefault(),this.hue=D0(this.hue-Z,0,360),this.syncValues();if(q.key==="ArrowRight")q.preventDefault(),this.hue=D0(this.hue+Z,0,360),this.syncValues();if(q.key==="Home")q.preventDefault(),this.hue=0,this.syncValues();if(q.key==="End")q.preventDefault(),this.hue=360,this.syncValues();if(this.value!==Q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(q){let Z=q.shiftKey?10:1,Q=this.value;if(q.key==="ArrowLeft")q.preventDefault(),this.saturation=D0(this.saturation-Z,0,100),this.syncValues();if(q.key==="ArrowRight")q.preventDefault(),this.saturation=D0(this.saturation+Z,0,100),this.syncValues();if(q.key==="ArrowUp")q.preventDefault(),this.brightness=D0(this.brightness+Z,0,100),this.syncValues();if(q.key==="ArrowDown")q.preventDefault(),this.brightness=D0(this.brightness-Z,0,100),this.syncValues();if(this.value!==Q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(q){let Z=q.target,Q=this.value;if(q.stopPropagation(),this.input.value)this.setColor(Z.value),Z.value=this.value||"";else this.value="";if(this.value!==Q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(q){this.updateValidity(),q.stopPropagation()}handleInputKeyDown(q){if(q.key==="Enter"){let Z=this.value;if(this.input.value){if(this.setColor(this.input.value),this.input.value=this.value,this.value!==Z)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});setTimeout(()=>this.input.select())}else this.hue=0}}handleTouchMove(q){q.preventDefault()}parseColor(q){if(!q||q.trim()==="")return null;let Z=new d(q);if(!Z.isValid)return null;let Q=Z.toHsl(),F=Z.toRgb(),w=Z.toHsv();if(!F||F.r==null||F.g==null||F.b==null)return null;let J={h:Q.h||0,s:(Q.s||0)*100,l:(Q.l||0)*100,a:Q.a||0},G=Z.toHexString(),X=Z.toHex8String(),z={h:w.h||0,s:(w.s||0)*100,v:(w.v||0)*100,a:w.a||0};return{hsl:{h:J.h,s:J.s,l:J.l,string:this.setLetterCase(`hsl(${Math.round(J.h)}, ${Math.round(J.s)}%, ${Math.round(J.l)}%)`)},hsla:{h:J.h,s:J.s,l:J.l,a:J.a,string:this.setLetterCase(`hsla(${Math.round(J.h)}, ${Math.round(J.s)}%, ${Math.round(J.l)}%, ${J.a.toFixed(2).toString()})`)},hsv:{h:z.h,s:z.s,v:z.v,string:this.setLetterCase(`hsv(${Math.round(z.h)}, ${Math.round(z.s)}%, ${Math.round(z.v)}%)`)},hsva:{h:z.h,s:z.s,v:z.v,a:z.a,string:this.setLetterCase(`hsva(${Math.round(z.h)}, ${Math.round(z.s)}%, ${Math.round(z.v)}%, ${z.a.toFixed(2).toString()})`)},rgb:{r:F.r,g:F.g,b:F.b,string:this.setLetterCase(`rgb(${Math.round(F.r)}, ${Math.round(F.g)}, ${Math.round(F.b)})`)},rgba:{r:F.r,g:F.g,b:F.b,a:F.a||0,string:this.setLetterCase(`rgba(${Math.round(F.r)}, ${Math.round(F.g)}, ${Math.round(F.b)}, ${(F.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(G),hexa:this.setLetterCase(X)}}setColor(q){let Z=this.parseColor(q);if(Z===null)return!1;return this.hue=Z.hsva.h,this.saturation=Z.hsva.s,this.brightness=Z.hsva.v,this.alpha=this.opacity?Z.hsva.a*100:100,this.syncValues(),!0}setLetterCase(q){if(typeof q!=="string")return"";return this.uppercase?q.toUpperCase():q.toLowerCase()}async syncValues(){let q=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(q===null)return;if(this.format==="hsl")this.inputValue=this.opacity?q.hsla.string:q.hsl.string;else if(this.format==="rgb")this.inputValue=this.opacity?q.rgba.string:q.rgb.string;else if(this.format==="hsv")this.inputValue=this.opacity?q.hsva.string:q.hsv.string;else this.inputValue=this.opacity?q.hexa:q.hex;this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then((Z)=>{let Q=this.value;if(this.setColor(Z.sRGBHex),this.value!==Q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(q){let Z=this.value;if(!this.disabled){if(this.setColor(q),this.value!==Z)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}getHexString(q,Z,Q,F=100){let w=new d(`hsva(${q}, ${Z}%, ${Q}%, ${F/100})`);if(!w.isValid)return"";return w.toHex8String()}stopNestedEventPropagation(q){q.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(q){if(super.willUpdate(q),q.has("value"))this.handleValueChange(q.get("value")||"",this.value||"")}handleValueChange(q,Z){if(this.isEmpty=!Z,!Z)this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100;if(!this.isSafeValue){let Q=this.parseColor(Z);if(Q!==null)this.inputValue=this.value||"",this.hue=Q.hsva.h,this.saturation=Q.hsva.s,this.brightness=Q.hsva.v,this.alpha=Q.hsva.a*100,this.syncValues();else this.inputValue=q??""}this.requestUpdate()}focus(q){this.trigger.focus(q)}blur(){let q=this.trigger;if(this.hasFocus)q.focus({preventScroll:!0}),q.blur();if(this.popup?.active)this.hide()}getFormattedValue(q="hex"){let Z=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(Z===null)return"";switch(q){case"hex":return Z.hex;case"hexa":return Z.hexa;case"rgb":return Z.rgb.string;case"rgba":return Z.rgba.string;case"hsl":return Z.hsl.string;case"hsla":return Z.hsla.string;case"hsv":return Z.hsv.string;case"hsva":return Z.hsva.string;default:return""}}reportValidity(){if(!this.validity.valid&&!this.open){if(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),!this.disabled)this.dispatchEvent(new b2);return!1}return super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(q){super.firstUpdated(q),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){if(this.open)this.hide();else this.show(),this.focus()}async handleTriggerKeyDown(q){if([" ","Enter"].includes(q.key)){q.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(q){if(q.key===" ")q.preventDefault()}updateAccessibleTrigger(){let q=this.trigger;if(q)q.setAttribute("aria-haspopup","true"),q.setAttribute("aria-expanded",this.open?"true":"false")}async show(){if(this.open)return;return this.open=!0,i8(this,"wa-after-show")}async hide(){if(!this.open)return;return this.open=!1,i8(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){if(this.base)this.base.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open)this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await l8(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"));else this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await l8(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide"))}render(){let q=!this.hasUpdated?this.withLabel:this.withLabel||this.hasSlotController.test("label"),Z=!this.hasUpdated?this.withHint:this.withHint||this.hasSlotController.test("hint"),Q=this.label?!0:!!q,F=this.hint?!0:!!Z,w=this.saturation,J=100-this.brightness,G=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter((z)=>z.trim()!==""),X=g`
      <div
        part="base"
        class=${Q0({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${D1({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Q0({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${D1({top:`${J}%`,left:`${w}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${_(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="controls">
          <div class="sliders">
            <div
              part="slider hue-slider"
              class="hue slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="slider-handle"
                style=${D1({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${_(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?g`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${D1({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${D1({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${_(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="preview transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${D1({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="user-input" aria-live="polite">
          <wa-input
            part="input"
            type="text"
            name=${this.name}
            size="small"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @change=${this.handleInputChange}
            @input=${this.handleInputInput}
            @blur=${this.stopNestedEventPropagation}
            @focus=${this.stopNestedEventPropagation}
          ></wa-input>

          <wa-button-group>
            ${!this.withoutFormatToggle?g`
                  <wa-button
                    part="format-button"
                    size="small"
                    appearance="outlined"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      start:format-button__start,
                      label:format-button__label,
                      end:format-button__end,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </wa-button>
                `:""}
            ${this.hasEyeDropper?g`
                  <wa-button
                    part="eyedropper-button"
                    size="small"
                    appearance="outlined"
                    exportparts="
                      base:eyedropper-button__base,
                      start:eyedropper-button__start,
                      label:eyedropper-button__label,
                      end:eyedropper-button__end,
                      caret:eyedropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @blur=${this.stopNestedEventPropagation}
                    @focus=${this.stopNestedEventPropagation}
                  >
                    <wa-icon
                      library="system"
                      name="eyedropper"
                      variant="solid"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></wa-icon>
                  </wa-button>
                `:""}
          </wa-button-group>
        </div>

        ${G.length>0?g`
              <div part="swatches" class="swatches">
                ${G.map((z)=>{let Y=this.parseColor(z);if(!Y)return"";return g`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${_(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${z}
                      @click=${()=>this.selectSwatch(z)}
                      @keydown=${(U)=>!this.disabled&&U.key==="Enter"&&this.setColor(Y.hexa)}
                    >
                      <div class="swatch-color" style=${D1({backgroundColor:Y.hexa})}></div>
                    </div>
                  `})}
              </div>
            `:""}
      </div>
    `;return g`
      <div
        class=${Q0({container:!0,"form-control":!0,"form-control-has-label":Q})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${Q0({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${D1({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
          aria-labelledby="form-control-label"
          aria-describedby="hint"
          .disabled=${this.disabled}
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        ></button>

        <slot
          id="hint"
          name="hint"
          part="hint"
          class=${Q0({"has-slotted":F})}
          >${this.hint}</slot
        >
      </div>

      <wa-popup
        class="color-popup"
        anchor="trigger"
        placement="bottom-start"
        distance="0"
        skidding="0"
        sync="width"
        flip
        flip-fallback-strategy="best-fit"
        shift
        shift-padding="10"
        aria-disabled=${this.disabled?"true":"false"}
        @wa-after-show=${this.handleAfterShow}
        @wa-after-hide=${this.handleAfterHide}
      >
        ${X}
      </wa-popup>
    `}};W.css=[x7,Y2,g4,NK];W.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0};B([o('[part~="base"]')],W.prototype,"base",2);B([o('[part~="input"]')],W.prototype,"input",2);B([o('[part~="form-control-label"]')],W.prototype,"triggerLabel",2);B([o('[part~="form-control-input"]')],W.prototype,"triggerButton",2);B([o(".color-popup")],W.prototype,"popup",2);B([o('[part~="preview"]')],W.prototype,"previewButton",2);B([o('[part~="trigger"]')],W.prototype,"trigger",2);B([p()],W.prototype,"hasFocus",2);B([p()],W.prototype,"isDraggingGridHandle",2);B([p()],W.prototype,"isEmpty",2);B([p()],W.prototype,"inputValue",2);B([p()],W.prototype,"hue",2);B([p()],W.prototype,"saturation",2);B([p()],W.prototype,"brightness",2);B([p()],W.prototype,"alpha",2);B([p()],W.prototype,"value",1);B([N({attribute:"value",reflect:!0})],W.prototype,"defaultValue",2);B([N({attribute:"with-label",reflect:!0,type:Boolean})],W.prototype,"withLabel",2);B([N({attribute:"with-hint",reflect:!0,type:Boolean})],W.prototype,"withHint",2);B([p()],W.prototype,"hasEyeDropper",2);B([N()],W.prototype,"label",2);B([N({attribute:"hint"})],W.prototype,"hint",2);B([N()],W.prototype,"format",2);B([N({reflect:!0})],W.prototype,"size",2);B([N({attribute:"without-format-toggle",type:Boolean})],W.prototype,"withoutFormatToggle",2);B([N({reflect:!0})],W.prototype,"name",2);B([N({type:Boolean})],W.prototype,"disabled",2);B([N({type:Boolean,reflect:!0})],W.prototype,"open",2);B([N({type:Boolean})],W.prototype,"opacity",2);B([N({type:Boolean})],W.prototype,"uppercase",2);B([N()],W.prototype,"swatches",2);B([N({reflect:!0})],W.prototype,"form",2);B([N({type:Boolean,reflect:!0})],W.prototype,"required",2);B([k9({passive:!1})],W.prototype,"handleTouchMove",1);B([C0("format",{waitUntilFirstUpdate:!0})],W.prototype,"handleFormatChange",1);B([C0("opacity")],W.prototype,"handleOpacityChange",1);B([C0("value")],W.prototype,"handleValueChange",1);B([C0("open",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",1);W=B([z0("wa-color-picker")],W);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var b9=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function x9(q,Z){let Q=q.metaKey||q.ctrlKey||q.shiftKey||q.altKey;if(q.key==="Enter"&&!Q)setTimeout(()=>{if(!q.defaultPrevented&&!q.isComposing)LK(Z)})}function LK(q){let Z=null;if("form"in q)Z=q.form;if(!Z&&"getForm"in q)Z=q.getForm();if(!Z)return;let Q=[...Z.elements];if(Q.length===1){Z.requestSubmit(null);return}let F=Q.find((w)=>w.type==="submit"&&!w.matches(":disabled"));if(!F)return;if(["input","button"].includes(F.localName))Z.requestSubmit(F);else F.click()}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var o4=()=>{return{checkValidity(q){let Z=q.input,Q={message:"",isValid:!0,invalidKeys:[]};if(!Z)return Q;let F=!0;if("checkValidity"in Z)F=Z.checkValidity();if(F)return Q;if(Q.isValid=!1,"validationMessage"in Z)Q.message=Z.validationMessage;if(!("validity"in Z))return Q.invalidKeys.push("customError"),Q;for(let w in Z.validity){if(w==="valid")continue;let J=w;if(Z.validity[J])Q.invalidKeys.push(J)}return Q}}};var VK=!0,dH=VK&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(q)=>q;var g9=(q,Z)=>Z===void 0?q?._$litType$!==void 0:q?._$litType$===Z;var h9=(q)=>q.strings===void 0;var kK={},u9=(q,Z=kK)=>q._$committedValue=Z;class v9 extends s1{constructor(q){super(q);if(!(q.type===c0.PROPERTY||q.type===c0.ATTRIBUTE||q.type===c0.BOOLEAN_ATTRIBUTE))throw Error("The `live` directive is not allowed on child or event bindings");if(!h9(q))throw Error("`live` bindings can only contain a single expression")}render(q){return q}update(q,[Z]){if(Z===t||Z===v)return Z;let{element:Q,name:F}=q;if(q.type===c0.PROPERTY){if(Z===Q[F])return t}else if(q.type===c0.BOOLEAN_ATTRIBUTE){if(!!Z===Q.hasAttribute(F))return t}else if(q.type===c0.ATTRIBUTE){if(Q.getAttribute(F)===String(Z))return t}return u9(q),Z}}var d9=U2(v9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var TK=`:host {
  border-width: 0;
}

.text-field {
  flex: auto;
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
    border var(--wa-transition-normal),
    outline var(--wa-transition-fast);
  transition-timing-function: var(--wa-transition-easing);
  background-color: var(--wa-form-control-background-color);
  box-shadow: var(--box-shadow);
  padding: 0 var(--wa-form-control-padding-inline);

  &:focus-within {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: var(--wa-color-neutral-on-quiet);
  border: none;
  background: none;
  padding: 0;
  transition: var(--wa-transition-normal) color;
  cursor: pointer;
  margin-inline-start: var(--wa-form-control-padding-inline);

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
`,R=class extends e{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new X2(this,"hint","label"),this.localize=new w1(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,o4()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(q){if(this._value===q)return;this.valueHasChanged=!0,this._value=q}handleChange(q){this.value=this.input.value,this.relayNativeEvent(q,{bubbles:!0,composed:!0})}handleClearClick(q){if(q.preventDefault(),this.value!=="")this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new b9),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(q){x9(q,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(q){if(super.updated(q),q.has("value"))this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(q){this.input.focus(q)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(q,Z,Q="none"){this.input.setSelectionRange(q,Z,Q)}setRangeText(q,Z,Q,F="preserve"){let w=Z??this.input.selectionStart,J=Q??this.input.selectionEnd;if(this.input.setRangeText(q,w,J,F),this.value!==this.input.value)this.value=this.input.value}showPicker(){if("showPicker"in HTMLInputElement.prototype)this.input.showPicker()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let q=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,Z=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,Q=this.label?!0:!!q,F=this.hint?!0:!!Z,w=this.withClear&&!this.disabled&&!this.readonly,J=(m0||this.hasUpdated)&&w&&(typeof this.value==="number"||this.value&&this.value.length>0);return g`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${Q?"false":"true"}>
        <slot name="label">${this.label}</slot>
      </label>

      <div part="base" class="text-field">
        <slot name="start" part="start" class="start"></slot>

        <input
          part="input"
          id="input"
          class="control"
          type=${this.type==="password"&&this.passwordVisible?"text":this.type}
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
          .value=${d9(this.value??"")}
          autocapitalize=${_(this.autocapitalize)}
          autocomplete=${_(this.autocomplete)}
          autocorrect=${_(this.autocorrect)}
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

        ${J?g`
              <button
                part="clear-button"
                class="clear"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                @click=${this.handleClearClick}
                tabindex="-1"
              >
                <slot name="clear-icon">
                  <wa-icon name="circle-xmark" library="system" variant="regular"></wa-icon>
                </slot>
              </button>
            `:""}
        ${this.passwordToggle&&!this.disabled?g`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${!this.passwordVisible?g`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:g`
                      <slot name="hide-password-icon">
                        <wa-icon name="eye-slash" library="system" variant="regular"></wa-icon>
                      </slot>
                    `}
              </button>
            `:""}

        <slot name="end" part="end" class="end"></slot>
      </div>

      <slot
        id="hint"
        part="hint"
        name="hint"
        class=${Q0({"has-slotted":F})}
        aria-hidden=${F?"false":"true"}
        >${this.hint}</slot
      >
    `}};R.css=[Y2,g4,TK];R.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0};B([o("input")],R.prototype,"input",2);B([N()],R.prototype,"title",2);B([N({reflect:!0})],R.prototype,"type",2);B([p()],R.prototype,"value",1);B([N({attribute:"value",reflect:!0})],R.prototype,"defaultValue",2);B([N({reflect:!0})],R.prototype,"size",2);B([N({reflect:!0})],R.prototype,"appearance",2);B([N({type:Boolean,reflect:!0})],R.prototype,"pill",2);B([N()],R.prototype,"label",2);B([N({attribute:"hint"})],R.prototype,"hint",2);B([N({attribute:"with-clear",type:Boolean})],R.prototype,"withClear",2);B([N()],R.prototype,"placeholder",2);B([N({type:Boolean,reflect:!0})],R.prototype,"readonly",2);B([N({attribute:"password-toggle",type:Boolean})],R.prototype,"passwordToggle",2);B([N({attribute:"password-visible",type:Boolean})],R.prototype,"passwordVisible",2);B([N({attribute:"without-spin-buttons",type:Boolean})],R.prototype,"withoutSpinButtons",2);B([N({reflect:!0})],R.prototype,"form",2);B([N({type:Boolean,reflect:!0})],R.prototype,"required",2);B([N()],R.prototype,"pattern",2);B([N({type:Number})],R.prototype,"minlength",2);B([N({type:Number})],R.prototype,"maxlength",2);B([N()],R.prototype,"min",2);B([N()],R.prototype,"max",2);B([N()],R.prototype,"step",2);B([N()],R.prototype,"autocapitalize",2);B([N()],R.prototype,"autocorrect",2);B([N()],R.prototype,"autocomplete",2);B([N({type:Boolean})],R.prototype,"autofocus",2);B([N()],R.prototype,"enterkeyhint",2);B([N({type:Boolean,converter:{fromAttribute:(q)=>!q||q==="false"?!1:!0,toAttribute:(q)=>q?"true":"false"}})],R.prototype,"spellcheck",2);B([N()],R.prototype,"inputmode",2);B([N({attribute:"with-label",type:Boolean})],R.prototype,"withLabel",2);B([N({attribute:"with-hint",type:Boolean})],R.prototype,"withHint",2);B([C0("step",{waitUntilFirstUpdate:!0})],R.prototype,"handleStepChange",1);R=B([z0("wa-input")],R);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var m9=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};var{min:J1,max:K0,round:d2,floor:m2}=Math,p0=(q)=>({x:q,y:q}),DK={left:"right",right:"left",bottom:"top",top:"bottom"},OK={start:"end",end:"start"};function a4(q,Z,Q){return K0(q,J1(Z,Q))}function n1(q,Z){return typeof q==="function"?q(Z):q}function O1(q){return q.split("-")[0]}function o1(q){return q.split("-")[1]}function F6(q){return q==="x"?"y":"x"}function t4(q){return q==="y"?"height":"width"}var WK=new Set(["top","bottom"]);function G1(q){return WK.has(O1(q))?"y":"x"}function e4(q){return F6(G1(q))}function i9(q,Z,Q){if(Q===void 0)Q=!1;let F=o1(q),w=e4(q),J=t4(w),G=w==="x"?F===(Q?"end":"start")?"right":"left":F==="start"?"bottom":"top";if(Z.reference[J]>Z.floating[J])G=v2(G);return[G,v2(G)]}function l9(q){let Z=v2(q);return[r4(q),Z,r4(Z)]}function r4(q){return q.replace(/start|end/g,(Z)=>OK[Z])}var c9=["left","right"],p9=["right","left"],AK=["top","bottom"],IK=["bottom","top"];function EK(q,Z,Q){switch(q){case"top":case"bottom":if(Q)return Z?p9:c9;return Z?c9:p9;case"left":case"right":return Z?AK:IK;default:return[]}}function s9(q,Z,Q,F){let w=o1(q),J=EK(O1(q),Q==="start",F);if(w){if(J=J.map((G)=>G+"-"+w),Z)J=J.concat(J.map(r4))}return J}function v2(q){return q.replace(/left|right|bottom|top/g,(Z)=>DK[Z])}function $K(q){return{top:0,right:0,bottom:0,left:0,...q}}function w6(q){return typeof q!=="number"?$K(q):{top:q,right:q,bottom:q,left:q}}function r1(q){let{x:Z,y:Q,width:F,height:w}=q;return{width:F,height:w,top:Q,left:Z,right:Z+F,bottom:Q+w,x:Z,y:Q}}function n9(q,Z,Q){let{reference:F,floating:w}=q,J=G1(Z),G=e4(Z),X=t4(G),z=O1(Z),Y=J==="y",U=F.x+F.width/2-w.width/2,M=F.y+F.height/2-w.height/2,k=F[X]/2-w[X]/2,V;switch(z){case"top":V={x:U,y:F.y-w.height};break;case"bottom":V={x:U,y:F.y+F.height};break;case"right":V={x:F.x+F.width,y:M};break;case"left":V={x:F.x-w.width,y:M};break;default:V={x:F.x,y:F.y}}switch(o1(Z)){case"start":V[G]-=k*(Q&&Y?-1:1);break;case"end":V[G]+=k*(Q&&Y?-1:1);break}return V}var o9=async(q,Z,Q)=>{let{placement:F="bottom",strategy:w="absolute",middleware:J=[],platform:G}=Q,X=J.filter(Boolean),z=await(G.isRTL==null?void 0:G.isRTL(Z)),Y=await G.getElementRects({reference:q,floating:Z,strategy:w}),{x:U,y:M}=n9(Y,F,z),k=F,V={},T=0;for(let D=0;D<X.length;D++){let{name:I,fn:$}=X[D],{x:P,y:f,data:c,reset:h}=await $({x:U,y:M,initialPlacement:F,placement:k,strategy:w,middlewareData:V,rects:Y,platform:G,elements:{reference:q,floating:Z}});if(U=P!=null?P:U,M=f!=null?f:M,V={...V,[I]:{...V[I],...c}},h&&T<=50){if(T++,typeof h==="object"){if(h.placement)k=h.placement;if(h.rects)Y=h.rects===!0?await G.getElementRects({reference:q,floating:Z,strategy:w}):h.rects;({x:U,y:M}=n9(Y,k,z))}D=-1}}return{x:U,y:M,placement:k,strategy:w,middlewareData:V}};async function q5(q,Z){var Q;if(Z===void 0)Z={};let{x:F,y:w,platform:J,rects:G,elements:X,strategy:z}=q,{boundary:Y="clippingAncestors",rootBoundary:U="viewport",elementContext:M="floating",altBoundary:k=!1,padding:V=0}=n1(Z,q),T=w6(V),I=X[k?M==="floating"?"reference":"floating":M],$=r1(await J.getClippingRect({element:((Q=await(J.isElement==null?void 0:J.isElement(I)))!=null?Q:!0)?I:I.contextElement||await(J.getDocumentElement==null?void 0:J.getDocumentElement(X.floating)),boundary:Y,rootBoundary:U,strategy:z})),P=M==="floating"?{x:F,y:w,width:G.floating.width,height:G.floating.height}:G.reference,f=await(J.getOffsetParent==null?void 0:J.getOffsetParent(X.floating)),c=await(J.isElement==null?void 0:J.isElement(f))?await(J.getScale==null?void 0:J.getScale(f))||{x:1,y:1}:{x:1,y:1},h=r1(J.convertOffsetParentRelativeRectToViewportRelativeRect?await J.convertOffsetParentRelativeRectToViewportRelativeRect({elements:X,rect:P,offsetParent:f,strategy:z}):P);return{top:($.top-h.top+T.top)/c.y,bottom:(h.bottom-$.bottom+T.bottom)/c.y,left:($.left-h.left+T.left)/c.x,right:(h.right-$.right+T.right)/c.x}}var r9=(q)=>({name:"arrow",options:q,async fn(Z){let{x:Q,y:F,placement:w,rects:J,platform:G,elements:X,middlewareData:z}=Z,{element:Y,padding:U=0}=n1(q,Z)||{};if(Y==null)return{};let M=w6(U),k={x:Q,y:F},V=e4(w),T=t4(V),D=await G.getDimensions(Y),I=V==="y",$=I?"top":"left",P=I?"bottom":"right",f=I?"clientHeight":"clientWidth",c=J.reference[T]+J.reference[V]-k[V]-J.floating[T],h=k[V]-J.reference[V],M0=await(G.getOffsetParent==null?void 0:G.getOffsetParent(Y)),l=M0?M0[f]:0;if(!l||!await(G.isElement==null?void 0:G.isElement(M0)))l=X.floating[f]||J.floating[T];let y0=c/2-h/2,P0=l/2-D[T]/2-1,w0=J1(M[$],P0),g0=J1(M[P],P0),j0=w0,K1=l-D[T]-g0,r=l/2-D[T]/2+y0,F1=a4(j0,r,K1),h0=!z.arrow&&o1(w)!=null&&r!==F1&&J.reference[T]/2-(r<j0?w0:g0)-D[T]/2<0,N0=h0?r<j0?r-j0:r-K1:0;return{[V]:k[V]+N0,data:{[V]:F1,centerOffset:r-F1-N0,...h0&&{alignmentOffset:N0}},reset:h0}}});var a9=function(q){if(q===void 0)q={};return{name:"flip",options:q,async fn(Z){var Q,F;let{placement:w,middlewareData:J,rects:G,initialPlacement:X,platform:z,elements:Y}=Z,{mainAxis:U=!0,crossAxis:M=!0,fallbackPlacements:k,fallbackStrategy:V="bestFit",fallbackAxisSideDirection:T="none",flipAlignment:D=!0,...I}=n1(q,Z);if((Q=J.arrow)!=null&&Q.alignmentOffset)return{};let $=O1(w),P=G1(X),f=O1(X)===X,c=await(z.isRTL==null?void 0:z.isRTL(Y.floating)),h=k||(f||!D?[v2(X)]:l9(X)),M0=T!=="none";if(!k&&M0)h.push(...s9(X,D,T,c));let l=[X,...h],y0=await q5(Z,I),P0=[],w0=((F=J.flip)==null?void 0:F.overflows)||[];if(U)P0.push(y0[$]);if(M){let r=i9(w,G,c);P0.push(y0[r[0]],y0[r[1]])}if(w0=[...w0,{placement:w,overflows:P0}],!P0.every((r)=>r<=0)){var g0,j0;let r=(((g0=J.flip)==null?void 0:g0.index)||0)+1,F1=l[r];if(F1){if(!(M==="alignment"?P!==G1(F1):!1)||w0.every((J0)=>G1(J0.placement)===P?J0.overflows[0]>0:!0))return{data:{index:r,overflows:w0},reset:{placement:F1}}}let h0=(j0=w0.filter((N0)=>N0.overflows[0]<=0).sort((N0,J0)=>N0.overflows[1]-J0.overflows[1])[0])==null?void 0:j0.placement;if(!h0)switch(V){case"bestFit":{var K1;let N0=(K1=w0.filter((J0)=>{if(M0){let u0=G1(J0.placement);return u0===P||u0==="y"}return!0}).map((J0)=>[J0.placement,J0.overflows.filter((u0)=>u0>0).reduce((u0,x4)=>u0+x4,0)]).sort((J0,u0)=>J0[1]-u0[1])[0])==null?void 0:K1[0];if(N0)h0=N0;break}case"initialPlacement":h0=X;break}if(w!==h0)return{reset:{placement:h0}}}return{}}}};var RK=new Set(["left","top"]);async function SK(q,Z){let{placement:Q,platform:F,elements:w}=q,J=await(F.isRTL==null?void 0:F.isRTL(w.floating)),G=O1(Q),X=o1(Q),z=G1(Q)==="y",Y=RK.has(G)?-1:1,U=J&&z?-1:1,M=n1(Z,q),{mainAxis:k,crossAxis:V,alignmentAxis:T}=typeof M==="number"?{mainAxis:M,crossAxis:0,alignmentAxis:null}:{mainAxis:M.mainAxis||0,crossAxis:M.crossAxis||0,alignmentAxis:M.alignmentAxis};if(X&&typeof T==="number")V=X==="end"?T*-1:T;return z?{x:V*U,y:k*Y}:{x:k*Y,y:V*U}}var t9=function(q){if(q===void 0)q=0;return{name:"offset",options:q,async fn(Z){var Q,F;let{x:w,y:J,placement:G,middlewareData:X}=Z,z=await SK(Z,q);if(G===((Q=X.offset)==null?void 0:Q.placement)&&(F=X.arrow)!=null&&F.alignmentOffset)return{};return{x:w+z.x,y:J+z.y,data:{...z,placement:G}}}}},e9=function(q){if(q===void 0)q={};return{name:"shift",options:q,async fn(Z){let{x:Q,y:F,placement:w}=Z,{mainAxis:J=!0,crossAxis:G=!1,limiter:X={fn:(I)=>{let{x:$,y:P}=I;return{x:$,y:P}}},...z}=n1(q,Z),Y={x:Q,y:F},U=await q5(Z,z),M=G1(O1(w)),k=F6(M),V=Y[k],T=Y[M];if(J){let I=k==="y"?"top":"left",$=k==="y"?"bottom":"right",P=V+U[I],f=V-U[$];V=a4(P,V,f)}if(G){let I=M==="y"?"top":"left",$=M==="y"?"bottom":"right",P=T+U[I],f=T-U[$];T=a4(P,T,f)}let D=X.fn({...Z,[k]:V,[M]:T});return{...D,data:{x:D.x-Q,y:D.y-F,enabled:{[k]:J,[M]:G}}}}}};var qq=function(q){if(q===void 0)q={};return{name:"size",options:q,async fn(Z){var Q,F;let{placement:w,rects:J,platform:G,elements:X}=Z,{apply:z=()=>{},...Y}=n1(q,Z),U=await q5(Z,Y),M=O1(w),k=o1(w),V=G1(w)==="y",{width:T,height:D}=J.floating,I,$;if(M==="top"||M==="bottom")I=M,$=k===(await(G.isRTL==null?void 0:G.isRTL(X.floating))?"start":"end")?"left":"right";else $=M,I=k==="end"?"top":"bottom";let P=D-U.top-U.bottom,f=T-U.left-U.right,c=J1(D-U[I],P),h=J1(T-U[$],f),M0=!Z.middlewareData.shift,l=c,y0=h;if((Q=Z.middlewareData.shift)!=null&&Q.enabled.x)y0=f;if((F=Z.middlewareData.shift)!=null&&F.enabled.y)l=P;if(M0&&!k){let w0=K0(U.left,0),g0=K0(U.right,0),j0=K0(U.top,0),K1=K0(U.bottom,0);if(V)y0=T-2*(w0!==0||g0!==0?w0+g0:K0(U.left,U.right));else l=D-2*(j0!==0||K1!==0?j0+K1:K0(U.top,U.bottom))}await z({...Z,availableWidth:y0,availableHeight:l});let P0=await G.getDimensions(X.floating);if(T!==P0.width||D!==P0.height)return{reset:{rects:!0}};return{}}}};function Z5(){return typeof window<"u"}function a1(q){if(Qq(q))return(q.nodeName||"").toLowerCase();return"#document"}function Y0(q){var Z;return(q==null||(Z=q.ownerDocument)==null?void 0:Z.defaultView)||window}function i0(q){var Z;return(Z=(Qq(q)?q.ownerDocument:q.document)||window.document)==null?void 0:Z.documentElement}function Qq(q){if(!Z5())return!1;return q instanceof Node||q instanceof Y0(q).Node}function _0(q){if(!Z5())return!1;return q instanceof Element||q instanceof Y0(q).Element}function l0(q){if(!Z5())return!1;return q instanceof HTMLElement||q instanceof Y0(q).HTMLElement}function Zq(q){if(!Z5()||typeof ShadowRoot>"u")return!1;return q instanceof ShadowRoot||q instanceof Y0(q).ShadowRoot}var yK=new Set(["inline","contents"]);function B2(q){let{overflow:Z,overflowX:Q,overflowY:F,display:w}=b0(q);return/auto|scroll|overlay|hidden|clip/.test(Z+F+Q)&&!yK.has(w)}var PK=new Set(["table","td","th"]);function Kq(q){return PK.has(a1(q))}var jK=[":popover-open",":modal"];function c2(q){return jK.some((Z)=>{try{return q.matches(Z)}catch(Q){return!1}})}var CK=["transform","translate","scale","rotate","perspective"],fK=["transform","translate","scale","rotate","perspective","filter"],_K=["paint","layout","strict","content"];function M2(q){let Z=Q5(),Q=_0(q)?b0(q):q;return CK.some((F)=>Q[F]?Q[F]!=="none":!1)||(Q.containerType?Q.containerType!=="normal":!1)||!Z&&(Q.backdropFilter?Q.backdropFilter!=="none":!1)||!Z&&(Q.filter?Q.filter!=="none":!1)||fK.some((F)=>(Q.willChange||"").includes(F))||_K.some((F)=>(Q.contain||"").includes(F))}function Fq(q){let Z=W1(q);while(l0(Z)&&!t1(Z)){if(M2(Z))return Z;else if(c2(Z))return null;Z=W1(Z)}return null}function Q5(){if(typeof CSS>"u"||!CSS.supports)return!1;return CSS.supports("-webkit-backdrop-filter","none")}var bK=new Set(["html","body","#document"]);function t1(q){return bK.has(a1(q))}function b0(q){return Y0(q).getComputedStyle(q)}function p2(q){if(_0(q))return{scrollLeft:q.scrollLeft,scrollTop:q.scrollTop};return{scrollLeft:q.scrollX,scrollTop:q.scrollY}}function W1(q){if(a1(q)==="html")return q;let Z=q.assignedSlot||q.parentNode||Zq(q)&&q.host||i0(q);return Zq(Z)?Z.host:Z}function wq(q){let Z=W1(q);if(t1(Z))return q.ownerDocument?q.ownerDocument.body:q.body;if(l0(Z)&&B2(Z))return Z;return wq(Z)}function A1(q,Z,Q){var F;if(Z===void 0)Z=[];if(Q===void 0)Q=!0;let w=wq(q),J=w===((F=q.ownerDocument)==null?void 0:F.body),G=Y0(w);if(J){let X=K5(G);return Z.concat(G,G.visualViewport||[],B2(w)?w:[],X&&Q?A1(X):[])}return Z.concat(w,A1(w,[],Q))}function K5(q){return q.parent&&Object.getPrototypeOf(q.parent)?q.frameElement:null}function Xq(q){let Z=b0(q),Q=parseFloat(Z.width)||0,F=parseFloat(Z.height)||0,w=l0(q),J=w?q.offsetWidth:Q,G=w?q.offsetHeight:F,X=d2(Q)!==J||d2(F)!==G;if(X)Q=J,F=G;return{width:Q,height:F,$:X}}function G6(q){return!_0(q)?q.contextElement:q}function N2(q){let Z=G6(q);if(!l0(Z))return p0(1);let Q=Z.getBoundingClientRect(),{width:F,height:w,$:J}=Xq(Z),G=(J?d2(Q.width):Q.width)/F,X=(J?d2(Q.height):Q.height)/w;if(!G||!Number.isFinite(G))G=1;if(!X||!Number.isFinite(X))X=1;return{x:G,y:X}}var xK=p0(0);function Yq(q){let Z=Y0(q);if(!Q5()||!Z.visualViewport)return xK;return{x:Z.visualViewport.offsetLeft,y:Z.visualViewport.offsetTop}}function gK(q,Z,Q){if(Z===void 0)Z=!1;if(!Q||Z&&Q!==Y0(q))return!1;return Z}function e1(q,Z,Q,F){if(Z===void 0)Z=!1;if(Q===void 0)Q=!1;let w=q.getBoundingClientRect(),J=G6(q),G=p0(1);if(Z)if(F){if(_0(F))G=N2(F)}else G=N2(q);let X=gK(J,Q,F)?Yq(J):p0(0),z=(w.left+X.x)/G.x,Y=(w.top+X.y)/G.y,U=w.width/G.x,M=w.height/G.y;if(J){let k=Y0(J),V=F&&_0(F)?Y0(F):F,T=k,D=K5(T);while(D&&F&&V!==T){let I=N2(D),$=D.getBoundingClientRect(),P=b0(D),f=$.left+(D.clientLeft+parseFloat(P.paddingLeft))*I.x,c=$.top+(D.clientTop+parseFloat(P.paddingTop))*I.y;z*=I.x,Y*=I.y,U*=I.x,M*=I.y,z+=f,Y+=c,T=Y0(D),D=K5(T)}}return r1({width:U,height:M,x:z,y:Y})}function F5(q,Z){let Q=p2(q).scrollLeft;if(!Z)return e1(i0(q)).left+Q;return Z.left+Q}function Hq(q,Z){let Q=q.getBoundingClientRect(),F=Q.left+Z.scrollLeft-F5(q,Q),w=Q.top+Z.scrollTop;return{x:F,y:w}}function hK(q){let{elements:Z,rect:Q,offsetParent:F,strategy:w}=q,J=w==="fixed",G=i0(F),X=Z?c2(Z.floating):!1;if(F===G||X&&J)return Q;let z={scrollLeft:0,scrollTop:0},Y=p0(1),U=p0(0),M=l0(F);if(M||!M&&!J){if(a1(F)!=="body"||B2(G))z=p2(F);if(l0(F)){let V=e1(F);Y=N2(F),U.x=V.x+F.clientLeft,U.y=V.y+F.clientTop}}let k=G&&!M&&!J?Hq(G,z):p0(0);return{width:Q.width*Y.x,height:Q.height*Y.y,x:Q.x*Y.x-z.scrollLeft*Y.x+U.x+k.x,y:Q.y*Y.y-z.scrollTop*Y.y+U.y+k.y}}function uK(q){return Array.from(q.getClientRects())}function vK(q){let Z=i0(q),Q=p2(q),F=q.ownerDocument.body,w=K0(Z.scrollWidth,Z.clientWidth,F.scrollWidth,F.clientWidth),J=K0(Z.scrollHeight,Z.clientHeight,F.scrollHeight,F.clientHeight),G=-Q.scrollLeft+F5(q),X=-Q.scrollTop;if(b0(F).direction==="rtl")G+=K0(Z.clientWidth,F.clientWidth)-w;return{width:w,height:J,x:G,y:X}}var Jq=25;function dK(q,Z){let Q=Y0(q),F=i0(q),w=Q.visualViewport,J=F.clientWidth,G=F.clientHeight,X=0,z=0;if(w){J=w.width,G=w.height;let U=Q5();if(!U||U&&Z==="fixed")X=w.offsetLeft,z=w.offsetTop}let Y=F5(F);if(Y<=0){let U=F.ownerDocument,M=U.body,k=getComputedStyle(M),V=U.compatMode==="CSS1Compat"?parseFloat(k.marginLeft)+parseFloat(k.marginRight)||0:0,T=Math.abs(F.clientWidth-M.clientWidth-V);if(T<=Jq)J-=T}else if(Y<=Jq)J+=Y;return{width:J,height:G,x:X,y:z}}var mK=new Set(["absolute","fixed"]);function cK(q,Z){let Q=e1(q,!0,Z==="fixed"),F=Q.top+q.clientTop,w=Q.left+q.clientLeft,J=l0(q)?N2(q):p0(1),G=q.clientWidth*J.x,X=q.clientHeight*J.y,z=w*J.x,Y=F*J.y;return{width:G,height:X,x:z,y:Y}}function Gq(q,Z,Q){let F;if(Z==="viewport")F=dK(q,Q);else if(Z==="document")F=vK(i0(q));else if(_0(Z))F=cK(Z,Q);else{let w=Yq(q);F={x:Z.x-w.x,y:Z.y-w.y,width:Z.width,height:Z.height}}return r1(F)}function Uq(q,Z){let Q=W1(q);if(Q===Z||!_0(Q)||t1(Q))return!1;return b0(Q).position==="fixed"||Uq(Q,Z)}function pK(q,Z){let Q=Z.get(q);if(Q)return Q;let F=A1(q,[],!1).filter((X)=>_0(X)&&a1(X)!=="body"),w=null,J=b0(q).position==="fixed",G=J?W1(q):q;while(_0(G)&&!t1(G)){let X=b0(G),z=M2(G);if(!z&&X.position==="fixed")w=null;if(J?!z&&!w:!z&&X.position==="static"&&!!w&&mK.has(w.position)||B2(G)&&!z&&Uq(q,G))F=F.filter((U)=>U!==G);else w=X;G=W1(G)}return Z.set(q,F),F}function iK(q){let{element:Z,boundary:Q,rootBoundary:F,strategy:w}=q,G=[...Q==="clippingAncestors"?c2(Z)?[]:pK(Z,this._c):[].concat(Q),F],X=G[0],z=G.reduce((Y,U)=>{let M=Gq(Z,U,w);return Y.top=K0(M.top,Y.top),Y.right=J1(M.right,Y.right),Y.bottom=J1(M.bottom,Y.bottom),Y.left=K0(M.left,Y.left),Y},Gq(Z,X,w));return{width:z.right-z.left,height:z.bottom-z.top,x:z.left,y:z.top}}function lK(q){let{width:Z,height:Q}=Xq(q);return{width:Z,height:Q}}function sK(q,Z,Q){let F=l0(Z),w=i0(Z),J=Q==="fixed",G=e1(q,!0,J,Z),X={scrollLeft:0,scrollTop:0},z=p0(0);function Y(){z.x=F5(w)}if(F||!F&&!J){if(a1(Z)!=="body"||B2(w))X=p2(Z);if(F){let V=e1(Z,!0,J,Z);z.x=V.x+Z.clientLeft,z.y=V.y+Z.clientTop}else if(w)Y()}if(J&&!F&&w)Y();let U=w&&!F&&!J?Hq(w,X):p0(0),M=G.left+X.scrollLeft-z.x-U.x,k=G.top+X.scrollTop-z.y-U.y;return{x:M,y:k,width:G.width,height:G.height}}function J6(q){return b0(q).position==="static"}function zq(q,Z){if(!l0(q)||b0(q).position==="fixed")return null;if(Z)return Z(q);let Q=q.offsetParent;if(i0(q)===Q)Q=Q.ownerDocument.body;return Q}function Bq(q,Z){let Q=Y0(q);if(c2(q))return Q;if(!l0(q)){let w=W1(q);while(w&&!t1(w)){if(_0(w)&&!J6(w))return w;w=W1(w)}return Q}let F=zq(q,Z);while(F&&Kq(F)&&J6(F))F=zq(F,Z);if(F&&t1(F)&&J6(F)&&!M2(F))return Q;return F||Fq(q)||Q}var nK=async function(q){let Z=this.getOffsetParent||Bq,Q=this.getDimensions,F=await Q(q.floating);return{reference:sK(q.reference,await Z(q.floating),q.strategy),floating:{x:0,y:0,width:F.width,height:F.height}}};function oK(q){return b0(q).direction==="rtl"}var i2={convertOffsetParentRelativeRectToViewportRelativeRect:hK,getDocumentElement:i0,getClippingRect:iK,getOffsetParent:Bq,getElementRects:nK,getClientRects:uK,getDimensions:lK,getScale:N2,isElement:_0,isRTL:oK};function Mq(q,Z){return q.x===Z.x&&q.y===Z.y&&q.width===Z.width&&q.height===Z.height}function rK(q,Z){let Q=null,F,w=i0(q);function J(){var X;clearTimeout(F),(X=Q)==null||X.disconnect(),Q=null}function G(X,z){if(X===void 0)X=!1;if(z===void 0)z=1;J();let Y=q.getBoundingClientRect(),{left:U,top:M,width:k,height:V}=Y;if(!X)Z();if(!k||!V)return;let T=m2(M),D=m2(w.clientWidth-(U+k)),I=m2(w.clientHeight-(M+V)),$=m2(U),f={rootMargin:-T+"px "+-D+"px "+-I+"px "+-$+"px",threshold:K0(0,J1(1,z))||1},c=!0;function h(M0){let l=M0[0].intersectionRatio;if(l!==z){if(!c)return G();if(!l)F=setTimeout(()=>{G(!1,0.0000001)},1000);else G(!1,l)}if(l===1&&!Mq(Y,q.getBoundingClientRect()))G();c=!1}try{Q=new IntersectionObserver(h,{...f,root:w.ownerDocument})}catch(M0){Q=new IntersectionObserver(h,f)}Q.observe(q)}return G(!0),J}function Nq(q,Z,Q,F){if(F===void 0)F={};let{ancestorScroll:w=!0,ancestorResize:J=!0,elementResize:G=typeof ResizeObserver==="function",layoutShift:X=typeof IntersectionObserver==="function",animationFrame:z=!1}=F,Y=G6(q),U=w||J?[...Y?A1(Y):[],...A1(Z)]:[];U.forEach(($)=>{w&&$.addEventListener("scroll",Q,{passive:!0}),J&&$.addEventListener("resize",Q)});let M=Y&&X?rK(Y,Q):null,k=-1,V=null;if(G){if(V=new ResizeObserver(($)=>{let[P]=$;if(P&&P.target===Y&&V)V.unobserve(Z),cancelAnimationFrame(k),k=requestAnimationFrame(()=>{var f;(f=V)==null||f.observe(Z)});Q()}),Y&&!z)V.observe(Y);V.observe(Z)}let T,D=z?e1(q):null;if(z)I();function I(){let $=e1(q);if(D&&!Mq(D,$))Q();D=$,T=requestAnimationFrame(I)}return Q(),()=>{var $;if(U.forEach((P)=>{w&&P.removeEventListener("scroll",Q),J&&P.removeEventListener("resize",Q)}),M==null||M(),($=V)==null||$.disconnect(),V=null,z)cancelAnimationFrame(T)}}var Lq=t9;var Vq=e9,kq=a9,z6=qq;var Tq=r9;var Dq=(q,Z,Q)=>{let F=new Map,w={platform:i2,...Q},J={...w.platform,_c:F};return o9(q,Z,{...w,platform:J})};function Oq(q){return aK(q)}function X6(q){if(q.assignedSlot)return q.assignedSlot;if(q.parentNode instanceof ShadowRoot)return q.parentNode.host;return q.parentNode}function aK(q){for(let Z=q;Z;Z=X6(Z)){if(!(Z instanceof Element))continue;if(getComputedStyle(Z).display==="none")return null}for(let Z=X6(q);Z;Z=X6(Z)){if(!(Z instanceof Element))continue;let Q=getComputedStyle(Z);if(Q.display==="contents")continue;if(Q.position!=="static"||M2(Q))return Z;if(Z.tagName==="BODY")return Z}return null}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var tK=`:host {
  --arrow-color: black;
  --arrow-size: var(--wa-tooltip-arrow-size);
  --show-duration: 100ms;
  --hide-duration: 100ms;

  /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
  --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
  --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

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
  width: calc(var(--arrow-size-diagonal) * 2);
  height: calc(var(--arrow-size-diagonal) * 2);
  rotate: 45deg;
  background: var(--arrow-color);
  z-index: 3;
}

:host([data-current-placement~='left']) .arrow {
  rotate: -45deg;
}

:host([data-current-placement~='right']) .arrow {
  rotate: 135deg;
}

:host([data-current-placement~='bottom']) .arrow {
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
`;function Wq(q){return q!==null&&typeof q==="object"&&"getBoundingClientRect"in q&&("contextElement"in q?q instanceof Element:!0)}var w5=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),b=class extends T0{constructor(){super(...arguments);this.localize=new w1(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let q=this.anchorEl.getBoundingClientRect(),Z=this.popup.getBoundingClientRect(),Q=this.placement.includes("top")||this.placement.includes("bottom"),F=0,w=0,J=0,G=0,X=0,z=0,Y=0,U=0;if(Q)if(q.top<Z.top)F=q.left,w=q.bottom,J=q.right,G=q.bottom,X=Z.left,z=Z.top,Y=Z.right,U=Z.top;else F=Z.left,w=Z.bottom,J=Z.right,G=Z.bottom,X=q.left,z=q.top,Y=q.right,U=q.top;else if(q.left<Z.left)F=q.right,w=q.top,J=Z.left,G=Z.top,X=q.right,z=q.bottom,Y=Z.left,U=Z.bottom;else F=Z.right,w=Z.top,J=q.left,G=q.top,X=Z.right,z=Z.bottom,Y=q.left,U=q.bottom;this.style.setProperty("--hover-bridge-top-left-x",`${F}px`),this.style.setProperty("--hover-bridge-top-left-y",`${w}px`),this.style.setProperty("--hover-bridge-top-right-x",`${J}px`),this.style.setProperty("--hover-bridge-top-right-y",`${G}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${X}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${z}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${Y}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${U}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(q){if(super.updated(q),q.has("active"))if(this.active)this.start();else this.stop();if(q.has("anchor"))this.handleAnchorChange();if(this.active)await this.updateComplete,this.reposition()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==="string"){let q=this.getRootNode();this.anchorEl=q.getElementById(this.anchor)}else if(this.anchor instanceof Element||Wq(this.anchor))this.anchorEl=this.anchor;else this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement)this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0];if(this.anchorEl)this.start()}start(){if(!this.anchorEl||!this.active)return;this.popup.showPopover?.(),this.cleanup=Nq(this.anchorEl,this.popup,()=>{this.reposition()})}async stop(){return new Promise((q)=>{if(this.popup.hidePopover?.(),this.cleanup)this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>q());else q()})}reposition(){if(!this.active||!this.anchorEl)return;let q=[Lq({mainAxis:this.distance,crossAxis:this.skidding})];if(this.sync)q.push(z6({apply:({rects:F})=>{let w=this.sync==="width"||this.sync==="both",J=this.sync==="height"||this.sync==="both";this.popup.style.width=w?`${F.reference.width}px`:"",this.popup.style.height=J?`${F.reference.height}px`:""}}));else this.popup.style.width="",this.popup.style.height="";let Z;if(w5&&!Wq(this.anchor)&&this.boundary==="scroll")Z=A1(this.anchorEl).filter((F)=>F instanceof Element);if(this.flip)q.push(kq({boundary:this.flipBoundary||Z,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding}));if(this.shift)q.push(Vq({boundary:this.shiftBoundary||Z,padding:this.shiftPadding}));if(this.autoSize)q.push(z6({boundary:this.autoSizeBoundary||Z,padding:this.autoSizePadding,apply:({availableWidth:F,availableHeight:w})=>{if(this.autoSize==="vertical"||this.autoSize==="both")this.style.setProperty("--auto-size-available-height",`${w}px`);else this.style.removeProperty("--auto-size-available-height");if(this.autoSize==="horizontal"||this.autoSize==="both")this.style.setProperty("--auto-size-available-width",`${F}px`);else this.style.removeProperty("--auto-size-available-width")}}));else this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height");if(this.arrow)q.push(Tq({element:this.arrowEl,padding:this.arrowPadding}));let Q=w5?(F)=>i2.getOffsetParent(F,Oq):i2.getOffsetParent;Dq(this.anchorEl,this.popup,{placement:this.placement,middleware:q,strategy:w5?"absolute":"fixed",platform:{...i2,getOffsetParent:Q}}).then(({x:F,y:w,middlewareData:J,placement:G})=>{let X=this.localize.dir()==="rtl",z={top:"bottom",right:"left",bottom:"top",left:"right"}[G.split("-")[0]];if(this.setAttribute("data-current-placement",G),Object.assign(this.popup.style,{left:`${F}px`,top:`${w}px`}),this.arrow){let Y=J.arrow.x,U=J.arrow.y,M="",k="",V="",T="";if(this.arrowPlacement==="start"){let D=typeof Y==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";M=typeof U==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",k=X?D:"",T=X?"":D}else if(this.arrowPlacement==="end"){let D=typeof Y==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";k=X?"":D,T=X?D:"",V=typeof U==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else if(this.arrowPlacement==="center")T=typeof Y==="number"?"calc(50% - var(--arrow-size-diagonal))":"",M=typeof U==="number"?"calc(50% - var(--arrow-size-diagonal))":"";else T=typeof Y==="number"?`${Y}px`:"",M=typeof U==="number"?`${U}px`:"";Object.assign(this.arrowEl.style,{top:M,right:k,bottom:V,left:T,[z]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new m9)}render(){return g`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Q0({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${Q0({popup:!0,"popup-active":this.active,"popup-fixed":!w5,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?g`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};b.css=tK;B([o(".popup")],b.prototype,"popup",2);B([o(".arrow")],b.prototype,"arrowEl",2);B([N()],b.prototype,"anchor",2);B([N({type:Boolean,reflect:!0})],b.prototype,"active",2);B([N({reflect:!0})],b.prototype,"placement",2);B([N()],b.prototype,"boundary",2);B([N({type:Number})],b.prototype,"distance",2);B([N({type:Number})],b.prototype,"skidding",2);B([N({type:Boolean})],b.prototype,"arrow",2);B([N({attribute:"arrow-placement"})],b.prototype,"arrowPlacement",2);B([N({attribute:"arrow-padding",type:Number})],b.prototype,"arrowPadding",2);B([N({type:Boolean})],b.prototype,"flip",2);B([N({attribute:"flip-fallback-placements",converter:{fromAttribute:(q)=>{return q.split(" ").map((Z)=>Z.trim()).filter((Z)=>Z!=="")},toAttribute:(q)=>{return q.join(" ")}}})],b.prototype,"flipFallbackPlacements",2);B([N({attribute:"flip-fallback-strategy"})],b.prototype,"flipFallbackStrategy",2);B([N({type:Object})],b.prototype,"flipBoundary",2);B([N({attribute:"flip-padding",type:Number})],b.prototype,"flipPadding",2);B([N({type:Boolean})],b.prototype,"shift",2);B([N({type:Object})],b.prototype,"shiftBoundary",2);B([N({attribute:"shift-padding",type:Number})],b.prototype,"shiftPadding",2);B([N({attribute:"auto-size"})],b.prototype,"autoSize",2);B([N()],b.prototype,"sync",2);B([N({type:Object})],b.prototype,"autoSizeBoundary",2);B([N({attribute:"auto-size-padding",type:Number})],b.prototype,"autoSizePadding",2);B([N({attribute:"hover-bridge",type:Boolean})],b.prototype,"hoverBridge",2);b=B([z0("wa-popup")],b);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var J5=`@layer wa-utilities {
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
`;var Iq=Symbol.for(""),eK=(q)=>{if(q?.r!==Iq)return;return q?._$litStatic$};var qF=(q)=>{if(q._$litStatic$!==void 0)return q._$litStatic$;else throw Error(`Value passed to 'literal' function must be a 'literal' result: ${q}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},Y6=(q,...Z)=>({["_$litStatic$"]:Z.reduce((Q,F,w)=>Q+qF(F)+q[w+1],q[0]),r:Iq}),Aq=new Map,H6=(q)=>(Z,...Q)=>{let F=Q.length,w,J,G=[],X=[],z=0,Y=!1,U;while(z<F){U=Z[z];while(z<F&&(J=Q[z],w=eK(J))!==void 0)U+=w+Z[++z],Y=!0;if(z!==F)X.push(J);G.push(U),z++}if(z===F)G.push(Z[F]);if(Y){let M=G.join("$$lit$$");if(Z=Aq.get(M),Z===void 0)G.raw=G,Aq.set(M,Z=G);Q=X}return q(Z,...Q)},G5=H6(g),iU=H6(G9),lU=H6(z9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var ZF=`@layer wa-component {
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
`,C=class extends e{constructor(){super(...arguments);this.assumeInteractionOn=["click"],this.hasSlotController=new X2(this,"[default]","start","end"),this.localize=new w1(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,o4()]}constructLightDOMButton(){let q=document.createElement("button");if(q.type=this.type,q.style.position="absolute",q.style.width="0",q.style.height="0",q.style.clipPath="inset(50%)",q.style.overflow="hidden",q.style.whiteSpace="nowrap",this.name)q.name=this.name;return q.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((Z)=>{if(this.hasAttribute(Z))q.setAttribute(Z,this.getAttribute(Z))}),q}handleClick(){if(!this.getForm())return;let Z=this.constructLightDOMButton();this.parentElement?.append(Z),Z.click(),Z.remove()}handleInvalid(){this.dispatchEvent(new b2)}handleLabelSlotChange(){let q=this.labelSlot.assignedNodes({flatten:!0}),Z=!1,Q=!1,F=!1,w=!1;if([...q].forEach((J)=>{if(J.nodeType===Node.ELEMENT_NODE){let G=J;if(G.localName==="wa-icon"){if(Q=!0,!Z)Z=G.label!==void 0}else w=!0}else if(J.nodeType===Node.TEXT_NODE){if((J.textContent?.trim()||"").length>0)F=!0}}),this.isIconButton=Q&&!F&&!w,this.isIconButton&&!Z)console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return this.href?!1:!0}isLink(){return this.href?!0:!1}handleDisabledChange(){this.updateValidity()}setValue(...q){}click(){this.button.click()}focus(q){this.button.focus(q)}blur(){this.button.blur()}render(){let q=this.isLink(),Z=q?Y6`a`:Y6`button`;return G5`
      <${Z}
        part="base"
        class=${Q0({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${_(q?void 0:this.disabled)}
        type=${_(q?void 0:this.type)}
        title=${this.title}
        name=${_(q?void 0:this.name)}
        value=${_(q?void 0:this.value)}
        href=${_(q?this.href:void 0)}
        target=${_(q?this.target:void 0)}
        download=${_(q?this.download:void 0)}
        rel=${_(q&&this.rel?this.rel:void 0)}
        role=${_(q?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?G5`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?G5`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${Z}>
    `}};C.shadowRootOptions={...e.shadowRootOptions,delegatesFocus:!0};C.css=[ZF,J5,Y2];B([o(".button")],C.prototype,"button",2);B([o("slot:not([name])")],C.prototype,"labelSlot",2);B([p()],C.prototype,"invalid",2);B([p()],C.prototype,"isIconButton",2);B([N()],C.prototype,"title",2);B([N({reflect:!0})],C.prototype,"variant",2);B([N({reflect:!0})],C.prototype,"appearance",2);B([N({reflect:!0})],C.prototype,"size",2);B([N({attribute:"with-caret",type:Boolean,reflect:!0})],C.prototype,"withCaret",2);B([N({type:Boolean})],C.prototype,"disabled",2);B([N({type:Boolean,reflect:!0})],C.prototype,"loading",2);B([N({type:Boolean,reflect:!0})],C.prototype,"pill",2);B([N()],C.prototype,"type",2);B([N({reflect:!0})],C.prototype,"name",2);B([N({reflect:!0})],C.prototype,"value",2);B([N({reflect:!0})],C.prototype,"href",2);B([N()],C.prototype,"target",2);B([N()],C.prototype,"rel",2);B([N()],C.prototype,"download",2);B([N({reflect:!0})],C.prototype,"form",2);B([N({attribute:"formaction"})],C.prototype,"formAction",2);B([N({attribute:"formenctype"})],C.prototype,"formEnctype",2);B([N({attribute:"formmethod"})],C.prototype,"formMethod",2);B([N({attribute:"formnovalidate",type:Boolean})],C.prototype,"formNoValidate",2);B([N({attribute:"formtarget"})],C.prototype,"formTarget",2);B([C0("disabled",{waitUntilFirstUpdate:!0})],C.prototype,"handleDisabledChange",1);C=B([z0("wa-button")],C);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var QF=`:host {
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
`,U6=class extends T0{constructor(){super(...arguments);this.localize=new w1(this)}render(){return g`
      <svg
        part="base"
        role="progressbar"
        aria-label=${this.localize.term("loading")}
        fill="none"
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle class="track" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        <circle class="indicator" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
      </svg>
    `}};U6.css=QF;U6=B([z0("wa-spinner")],U6);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var KF=`:host {
  display: inline-flex;
}

.button-group {
  display: flex;
  position: relative;
  isolation: isolate;
  flex-wrap: wrap;
  gap: 1px;

  @media (hover: hover) {
    > :hover,
    &::slotted(:hover) {
      z-index: 1;
    }
  }

  /* Focus and checked are always on top */
  > :focus,
  &::slotted(:focus),
  > [aria-checked='true'],
  &::slotted([aria-checked='true']),
  > [checked],
  &::slotted([checked]) {
    z-index: 2 !important;
  }
}
:host([orientation='vertical']) .button-group {
  flex-direction: column;
}

/* Button groups with at least one outlined button will not have a gap and instead have borders overlap */
.button-group.has-outlined {
  gap: 0;

  &:not([aria-orientation='vertical']):not(.button-group-vertical)::slotted(:not(:first-child)) {
    margin-inline-start: calc(-1 * var(--border-width));
  }

  &:is([aria-orientation='vertical'], .button-group-vertical)::slotted(:not(:first-child)) {
    margin-block-start: calc(-1 * var(--border-width));
  }
}
`,I1=class extends T0{constructor(){super(...arguments);this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal",this.variant="neutral"}updated(q){if(super.updated(q),q.has("orientation"))this.setAttribute("aria-orientation",this.orientation),this.updateClassNames()}handleFocus(q){l2(q.target)?.classList.add("button-focus")}handleBlur(q){l2(q.target)?.classList.remove("button-focus")}handleMouseOver(q){l2(q.target)?.classList.add("button-hover")}handleMouseOut(q){l2(q.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){let q=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,q.forEach((Z)=>{let Q=q.indexOf(Z),F=l2(Z);if(F){if(F.appearance==="outlined")this.hasOutlined=!0;F.classList.add("wa-button-group__button"),F.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),F.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),F.classList.toggle("wa-button-group__button-first",Q===0),F.classList.toggle("wa-button-group__button-inner",Q>0&&Q<q.length-1),F.classList.toggle("wa-button-group__button-last",Q===q.length-1),F.classList.toggle("wa-button-group__button-radio",F.tagName.toLowerCase()==="wa-radio-button")}})}render(){return g`
      <slot
        part="base"
        class=${Q0({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};I1.css=[J5,KF];B([o("slot")],I1.prototype,"defaultSlot",2);B([p()],I1.prototype,"disableRole",2);B([p()],I1.prototype,"hasOutlined",2);B([N()],I1.prototype,"label",2);B([N({reflect:!0})],I1.prototype,"orientation",2);B([N({reflect:!0})],I1.prototype,"variant",2);I1=B([z0("wa-button-group")],I1);function l2(q){return q.closest("wa-button, wa-radio-button")??q.querySelector("wa-button, wa-radio-button")}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Eq=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var B6="";function FF(q){B6=q}function wF(){if(!B6){let q=document.querySelector("[data-fa-kit-code]");if(q)FF(q.getAttribute("data-fa-kit-code")||"")}return B6}var E1="7.0.1";function JF(q,Z,Q){let F=wF(),w=F.length>0,J="solid";if(Z==="notdog"){if(Q==="solid")J="solid";if(Q==="duo-solid")J="duo-solid";return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/notdog-${J}/${q}.svg?token=${encodeURIComponent(F)}`}if(Z==="chisel")return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/chisel-regular/${q}.svg?token=${encodeURIComponent(F)}`;if(Z==="etch")return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/etch-solid/${q}.svg?token=${encodeURIComponent(F)}`;if(Z==="jelly"){if(Q==="regular")J="regular";if(Q==="duo-regular")J="duo-regular";if(Q==="fill-regular")J="fill-regular";return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/jelly-${J}/${q}.svg?token=${encodeURIComponent(F)}`}if(Z==="slab"){if(Q==="solid"||Q==="regular")J="regular";if(Q==="press-regular")J="press-regular";return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/slab-${J}/${q}.svg?token=${encodeURIComponent(F)}`}if(Z==="thumbprint")return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/thumbprint-light/${q}.svg?token=${encodeURIComponent(F)}`;if(Z==="whiteboard")return`https://ka-p.fontawesome.com/releases/v${E1}/svgs/whiteboard-semibold/${q}.svg?token=${encodeURIComponent(F)}`;if(Z==="classic"){if(Q==="thin")J="thin";if(Q==="light")J="light";if(Q==="regular")J="regular";if(Q==="solid")J="solid"}if(Z==="sharp"){if(Q==="thin")J="sharp-thin";if(Q==="light")J="sharp-light";if(Q==="regular")J="sharp-regular";if(Q==="solid")J="sharp-solid"}if(Z==="duotone"){if(Q==="thin")J="duotone-thin";if(Q==="light")J="duotone-light";if(Q==="regular")J="duotone-regular";if(Q==="solid")J="duotone"}if(Z==="sharp-duotone"){if(Q==="thin")J="sharp-duotone-thin";if(Q==="light")J="sharp-duotone-light";if(Q==="regular")J="sharp-duotone-regular";if(Q==="solid")J="sharp-duotone-solid"}if(Z==="brands")J="brands";return w?`https://ka-p.fontawesome.com/releases/v${E1}/svgs/${J}/${q}.svg?token=${encodeURIComponent(F)}`:`https://ka-f.fontawesome.com/releases/v${E1}/svgs/${J}/${q}.svg`}var GF={name:"default",resolver:(q,Z="classic",Q="solid")=>{return JF(q,Z,Q)},mutator:(q,Z)=>{if(Z?.family&&!q.hasAttribute("data-duotone-initialized")){let{family:Q,variant:F}=Z;if(Q==="duotone"||Q==="sharp-duotone"||Q==="notdog"&&F==="duo-solid"||Q==="jelly"&&F==="duo-regular"||Q==="thumbprint"){let w=[...q.querySelectorAll("path")],J=w.find((X)=>!X.hasAttribute("opacity")),G=w.find((X)=>X.hasAttribute("opacity"));if(!J||!G)return;if(J.setAttribute("data-duotone-primary",""),G.setAttribute("data-duotone-secondary",""),Z.swapOpacity&&J&&G){let X=G.getAttribute("opacity")||"0.4";J.style.setProperty("--path-opacity",X),G.style.setProperty("--path-opacity","1")}q.setAttribute("data-duotone-initialized","")}}}},$q=GF;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function zF(q){return`data:image/svg+xml,${encodeURIComponent(q)}`}var M6={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},XF={name:"system",resolver:(q,Z="classic",Q="solid")=>{let w=M6[Q][q]??M6.regular[q]??M6.regular["circle-question"];if(w)return zF(w);return""}},Rq=XF;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var YF="classic",HF=[$q,Rq],N6=[];function Sq(q){N6.push(q)}function yq(q){N6=N6.filter((Z)=>Z!==q)}function z5(q){return HF.find((Z)=>Z.name===q)}function Pq(){return YF}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var UF=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},BF=`:host {
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
`,s2=Symbol(),X5=Symbol(),L6,V6=new Map,H0=class extends T0{constructor(){super(...arguments);this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(q,Z)=>{let Q;if(Z?.spriteSheet){if(!this.hasUpdated)await this.updateComplete;this.svg=g`<svg part="svg">
        <use part="use" href="${q}"></use>
      </svg>`,await this.updateComplete;let F=this.shadowRoot.querySelector("[part='svg']");if(typeof Z.mutator==="function")Z.mutator(F,this);return this.svg}try{if(Q=await fetch(q,{mode:"cors"}),!Q.ok)return Q.status===410?s2:X5}catch{return X5}try{let F=document.createElement("div");F.innerHTML=await Q.text();let w=F.firstElementChild;if(w?.tagName?.toLowerCase()!=="svg")return s2;if(!L6)L6=new DOMParser;let G=L6.parseFromString(w.outerHTML,"text/html").body.querySelector("svg");if(!G)return s2;return G.part.add("svg"),document.adoptNode(G)}catch{return s2}}}connectedCallback(){super.connectedCallback(),Sq(this)}firstUpdated(q){super.firstUpdated(q),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),yq(this)}getIconSource(){let q=z5(this.library),Z=this.family||Pq();if(this.name&&q)return{url:q.resolver(this.name,Z,this.variant,this.autoWidth),fromLibrary:!0};return{url:this.src,fromLibrary:!1}}handleLabelChange(){if(typeof this.label==="string"&&this.label.length>0)this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden");else this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")}async setIcon(){let{url:q,fromLibrary:Z}=this.getIconSource(),Q=Z?z5(this.library):void 0;if(!q){this.svg=null;return}let F=V6.get(q);if(!F)F=this.resolveIcon(q,Q),V6.set(q,F);let w=await F;if(w===X5)V6.delete(q);if(q!==this.getIconSource().url)return;if(g9(w)){this.svg=w;return}switch(w){case X5:case s2:this.svg=null,this.dispatchEvent(new UF);break;default:this.svg=w.cloneNode(!0),Q?.mutator?.(this.svg,this),this.dispatchEvent(new Eq)}}updated(q){super.updated(q);let Z=z5(this.library),Q=this.shadowRoot?.querySelector("svg");if(Q)Z?.mutator?.(Q,this)}render(){if(this.hasUpdated)return this.svg;return g`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};H0.css=BF;B([p()],H0.prototype,"svg",2);B([N({reflect:!0})],H0.prototype,"name",2);B([N({reflect:!0})],H0.prototype,"family",2);B([N({reflect:!0})],H0.prototype,"variant",2);B([N({attribute:"auto-width",type:Boolean,reflect:!0})],H0.prototype,"autoWidth",2);B([N({attribute:"swap-opacity",type:Boolean,reflect:!0})],H0.prototype,"swapOpacity",2);B([N()],H0.prototype,"src",2);B([N()],H0.prototype,"label",2);B([N({reflect:!0})],H0.prototype,"library",2);B([C0("label")],H0.prototype,"handleLabelChange",1);B([C0(["family","name","library","variant","src","autoWidth","swapOpacity"])],H0.prototype,"setIcon",1);H0=B([z0("wa-icon")],H0);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var K;var WM=Object.getOwnPropertyDescriptors||(()=>{var q;if(typeof Reflect<"u"&&Reflect.ownKeys)q=Reflect.ownKeys;else{var Z=Object.getOwnPropertySymbols||((Q)=>[]);q=(Q)=>Object.getOwnPropertyNames(Q).concat(Z(Q))}return(Q)=>{var F=q(Q),w={},J=F.length|0,G=0;while(G!==J){var X=F[G];Object.defineProperty(w,X,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(Q,X)}),G=G+1|0}return w}})(),x5;function r0(q){this.c=q}K=r0.prototype;K.toString=function(){return String.fromCharCode(this.c)};function cq(q){switch(typeof q){case"string":return aZ.l();case"number":if(Z7(q))if(q<<24>>24===q)return $G.l();else if(q<<16>>16===q)return SG.l();else return qz.l();else if(Q7(q))return eG.l();else return tG.l();case"boolean":return XG.l();case"undefined":return QZ.l();default:if(q instanceof E)return Kz.l();else if(q instanceof r0)return UG.l();else if(q&&q.$classData)return q.$classData.l();else return null}}function j5(q){switch(typeof q){case"string":return"java.lang.String";case"number":if(Z7(q))if(q<<24>>24===q)return"java.lang.Byte";else if(q<<16>>16===q)return"java.lang.Short";else return"java.lang.Integer";else if(Q7(q))return"java.lang.Float";else return"java.lang.Double";case"boolean":return"java.lang.Boolean";case"undefined":return"java.lang.Void";default:if(q instanceof E)return"java.lang.Long";else if(q instanceof r0)return"java.lang.Character";else if(q&&q.$classData)return q.$classData.N;else return null.hU()}}function n2(q,Z){switch(typeof q){case"string":return Fz(q,Z);case"number":return aG(q,Z);case"boolean":return GG(q,Z);case"undefined":return mw(q,Z);default:if(!!(q&&q.$classData)||q===null)return q.h(Z);else if(q instanceof E)return Zz(q,Z);else if(q instanceof r0)return HG(a2(q),Z);else return Z2.prototype.h.call(q,Z)}}function MF(q){switch(typeof q){case"string":return x0(q);case"number":return rZ(q);case"boolean":return zG(q);case"undefined":return cw(q);default:if(!!(q&&q.$classData)||q===null)return q.p();else if(q instanceof E)return Qz(q);else if(q instanceof r0)return YG(a2(q));else return Z2.prototype.p.call(q)}}function pq(q){return q===void 0?"undefined":q.toString()}function NF(q,Z){if(Z===0)throw new W2("/ by zero");else return q/Z|0}function LF(q,Z){if(Z===0)throw new W2("/ by zero");else return q%Z|0}function VF(q){return q>2147483647?2147483647:q<-2147483648?-2147483648:q|0}function C5(q){return String.fromCharCode(q)}function g5(q,Z,Q,F,w){if(q!==Q||F<Z||(Z+w|0)<F)for(var J=0;J<w;J=J+1|0)Q[F+J|0]=q[Z+J|0];else for(var J=w-1|0;J>=0;J=J-1|0)Q[F+J|0]=q[Z+J|0]}var jq=0,Cq=new WeakMap;function q7(q){switch(typeof q){case"string":return x0(q);case"number":return rZ(q);case"bigint":{var Z=0;if(q<BigInt(0))q=~q;while(q!==BigInt(0))Z=Z^Number(BigInt.asIntN(32,q)),q=q>>BigInt(32);return Z}case"boolean":return q?1231:1237;case"undefined":return 0;case"symbol":{var Q=q.description;return Q===void 0?0:x0(Q)}default:if(q===null)return 0;else{var F=Cq.get(q);if(F===void 0)F=jq+1|0,jq=F,Cq.set(q,F);return F}}}function kF(q){return typeof q==="number"&&q<<24>>24===q&&1/q!==-1/0}function TF(q){return typeof q==="number"&&q<<16>>16===q&&1/q!==-1/0}function Z7(q){return typeof q==="number"&&(q|0)===q&&1/q!==-1/0}function Q7(q){return typeof q==="number"&&(q!==q||Math.fround(q)===q)}function z1(q){return new r0(q)}var AM=z1(0);function a2(q){return q===null?0:q.c}function q2(q){return q===null?x5:q}function Z2(){}K=Z2.prototype;K.constructor=Z2;function L(){}L.prototype=K;K.p=function(){return q7(this)};K.h=function(q){return this===q};K.u=function(){var q=this.p();return j5(this)+"@"+(+(q>>>0)).toString(16)};K.toString=function(){return this.u()};function $0(q){if(typeof q==="number"){this.a=Array(q);for(var Z=0;Z<q;Z++)this.a[Z]=null}else this.a=q}K=$0.prototype=new L;K.constructor=$0;K.a1=function(q,Z,Q,F){g5(this.a,q,Z.a,Q,F)};K.X=function(){return new $0(this.a.slice())};function iq(){}iq.prototype=K;function X1(q){if(typeof q==="number"){this.a=Array(q);for(var Z=0;Z<q;Z++)this.a[Z]=!1}else this.a=q}K=X1.prototype=new L;K.constructor=X1;K.a1=function(q,Z,Q,F){g5(this.a,q,Z.a,Q,F)};K.X=function(){return new X1(this.a.slice())};function Y1(q){if(typeof q==="number")this.a=new Uint16Array(q);else this.a=q}K=Y1.prototype=new L;K.constructor=Y1;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new Y1(this.a.slice())};function H1(q){if(typeof q==="number")this.a=new Int8Array(q);else this.a=q}K=H1.prototype=new L;K.constructor=H1;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new H1(this.a.slice())};function U1(q){if(typeof q==="number")this.a=new Int16Array(q);else this.a=q}K=U1.prototype=new L;K.constructor=U1;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new U1(this.a.slice())};function a0(q){if(typeof q==="number")this.a=new Int32Array(q);else this.a=q}K=a0.prototype=new L;K.constructor=a0;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new a0(this.a.slice())};function B1(q){if(typeof q==="number"){this.a=Array(q);for(var Z=0;Z<q;Z++)this.a[Z]=x5}else this.a=q}K=B1.prototype=new L;K.constructor=B1;K.a1=function(q,Z,Q,F){g5(this.a,q,Z.a,Q,F)};K.X=function(){return new B1(this.a.slice())};function M1(q){if(typeof q==="number")this.a=new Float32Array(q);else this.a=q}K=M1.prototype=new L;K.constructor=M1;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new M1(this.a.slice())};function N1(q){if(typeof q==="number")this.a=new Float64Array(q);else this.a=q}K=N1.prototype=new L;K.constructor=N1;K.a1=function(q,Z,Q,F){Z.a.set(this.a.subarray(q,q+F|0),Q)};K.X=function(){return new N1(this.a.slice())};function H(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E="",this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N="",this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}K=H.prototype;K.p=function(q,Z,Q,F,w){this.n={},this.z=q,this.E=Z;var J=this;if(this.F=(G)=>G===J,this.N=Q,this.X=!0,this.I=(G)=>!1,F!==void 0)this.A=new H().y(this,F,w);return this};K.i=function(q,Z,Q,F){var w=Object.getOwnPropertyNames(Q)[0];if(this.n=Q,this.E="L"+Z+";",this.F=(J)=>!!J.n[w],this.J=q===2,this.N=Z,this.Y=q===1,this.I=F||((J)=>!!(J&&J.$classData&&J.$classData.n[w])),typeof q!=="number")q.prototype.$classData=this;return this};K.y=function(q,Z,Q,F){Z.prototype.$classData=this;var w="["+q.E;this.C=Z,this.n={t:1,a:1},this.O=q,this.B=q,this.D=1,this.E=w,this.N=w,this.Z=!0;var J=this;return this.F=F||((G)=>J===G),this.w=Q?(G)=>new Z(new Q(G)):(G)=>new Z(G),this.I=(G)=>G instanceof Z,this};K.a=function(q){function Z(z){if(typeof z==="number"){this.a=Array(z);for(var Y=0;Y<z;Y++)this.a[Y]=null}else this.a=z}var Q=Z.prototype=new iq;Q.constructor=Z,Q.a1=function(z,Y,U,M){g5(this.a,z,Y.a,U,M)},Q.X=function(){return new Z(this.a.slice())},Q.$classData=this;var F=q.B||q,w=q.D+1,J="["+q.E;this.C=Z,this.n={t:1,a:1},this.O=q,this.B=F,this.D=w,this.E=J,this.N=J,this.Z=!0;var G=(z)=>{var Y=z.D;return Y===w?F.F(z.B):Y>w&&F===n0};this.F=G,this.w=(z)=>new Z(z);var X=this;return this.I=(z)=>{var Y=z&&z.$classData;return!!Y&&(Y===X||G(Y))},this};K.r=function(){if(!this.A)this.A=new H().a(this);return this.A};K.l=function(){if(!this.L)this.L=new o3(this);return this.L};K.R=function(q){return this===q||this.F(q)};K.S=function(){return this.P?this.P.l():null};K.Q=function(){return this.O?this.O.l():null};var n0=new H;n0.n={};n0.E="Ljava.lang.Object;";n0.F=(q)=>!q.X;n0.N="java.lang.Object";n0.I=(q)=>q!==null;n0.A=new H().y(n0,$0,void 0,(q)=>{var Z=q.D;return Z===1?!q.B.X:Z>1});Z2.prototype.$classData=n0;var DF=new H().p(void 0,"V","void",void 0,void 0),IM=new H().p(!1,"Z","boolean",X1,void 0),OF=new H().p(0,"C","char",Y1,Uint16Array),EM=new H().p(0,"B","byte",H1,Int8Array),$M=new H().p(0,"S","short",U1,Int16Array),RM=new H().p(0,"I","int",a0,Int32Array),WF=new H().p(null,"J","long",B1,void 0),SM=new H().p(0,"F","float",M1,Float32Array),yM=new H().p(0,"D","double",N1,Float64Array);function AF(q){return cq(q).cz()+"@"+q7(q)}function IF(q){var Z=q.cK;return Z===void 0?AF(q):Z}function h5(){Y5=this,lq().hs(new x((q)=>{return}),wZ().ed,!0)}K=h5.prototype=new L;K.constructor=h5;function EF(){}EF.prototype=K;K.hs=function(q,Z,Q){return new Z8(q,Q,Z,this)};var PM=new H().i(h5,"com.raquo.airstream.core.Observer$",{b7:1}),Y5;function lq(){if(!Y5)Y5=new h5;return Y5}function o2(q){this.bN=null,this.cL=null,this.bO=0,this.bN=q,this.cL=void 0;var Z=f5().bo();if(this.bO=Z===void 0?1:1+Z.bO|0,L2().bq===-1||this.bO>L2().bq)m3().cG(new B8(this,L2().bq));else if(_1().P)_1().al.push(this)|0;else f5().cp(this)}K=o2.prototype=new L;K.constructor=o2;function $F(){}$F.prototype=K;var K7=new H().i(o2,"com.raquo.airstream.core.Transaction",{ba:1});function u5(){this.bq=0,this.cM=null,H5=this,this.bq=1000,this.cM=new x((q)=>{throw E0(new q0,"Attempted to run Transaction "+q+" after it was already executed.")})}K=u5.prototype=new L;K.constructor=u5;function RF(){}RF.prototype=K;K.eN=function(q){try{q.bN.g(q);var Z=q.cL;if(Z!==void 0)while(Z.hY())Z.hO().i2(q)}catch(F){var Q=F instanceof h1?F:new U0(F);m3().cG(Q)}};var jM=new H().i(u5,"com.raquo.airstream.core.Transaction$",{bb:1}),H5;function L2(){if(!H5)H5=new u5;return H5}function F7(q){if((q.br.length|0)===0){if((q.al.length|0)>0)new o2(new x((Z)=>{while((q.al.length|0)>0)f5().cp(q.al.shift())}))}else new o2(new x((Z)=>{while((q.br.length|0)>0){var Q=q.br.shift();try{Q.g(Z)}catch(J){var F=J instanceof h1?J:new U0(J);m3().cG(F)}}while((q.al.length|0)>0){var w=q.al.shift();f5().cp(w)}}))}function v5(){this.P=!1,this.br=null,this.al=null,U5=this,this.P=!1,this.br=b1().ag(O().k(new(F0.r()).C([]))),this.al=b1().ag(O().k(new(K7.r()).C([])))}K=v5.prototype=new L;K.constructor=v5;function SF(){}SF.prototype=K;var CM=new H().i(v5,"com.raquo.airstream.core.Transaction$onStart$",{bc:1}),U5;function _1(){if(!U5)U5=new v5;return U5}function sq(q,Z){return q.am.get(Z)}function nq(q,Z){q.bs.unshift(Z)}function yF(q){return q.bs.shift()}function PF(q,Z,Q){var F=sq(q,Z),w=F===void 0,J=F===void 0?b1().ag(O().k(new(K7.r()).C([]))):F;if(J.push(Q),w)q.am.set(Z,J)}function jF(q,Z){var Q=sq(q,Z),F=Q===void 0||(Q.length|0)>0?Q:void 0;if(F===void 0)return;else{var w=F.shift();if((F.length|0)===0)q.am.delete(Z);return w}}function d5(){this.bs=null,this.am=null,B5=this,this.bs=b1().ag(O().k(new(K7.r()).C([]))),this.am=new Map}K=d5.prototype=new L;K.constructor=d5;function CF(){}CF.prototype=K;K.cp=function(q){var Z=this.bo();if(Z===void 0)nq(this,q),L2().eN(q),this.fZ(q);else PF(this,Z,q)};K.fZ=function(q){var Z=q;while(!0){var Q=this.bo(),F=Z;if(!(Q!==void 0&&I0().J(F,Q)))throw E0(new q0,"Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");this.gZ(Z),Z.bN=L2().cM;var w=this.bo();if(I0().J(w,void 0))if((this.am.size|0)>0){var J=new u3(0);throw this.am.forEach(((G)=>(X,z)=>{var Y=G.b8+(X.length|0)|0;G.b8=Y})(J)),E0(new q0,"Transaction queue error: Stack cleared, but a total of "+J.b8+" children for "+(this.am.size|0)+" transactions remain. This is a bug in Airstream.")}else return;else L2().eN(w),Z=w}};K.gZ=function(q){var Z=q;while(!0){var Q=jF(this,Z);if(I0().J(Q,void 0)){yF(this);var F=this.bo();if(!I0().J(F,void 0))Z=F;else return}else{nq(this,Q);return}}};K.bo=function(){return this.bs[0]};var fM=new H().i(d5,"com.raquo.airstream.core.Transaction$pendingTransactions$",{bd:1}),B5;function f5(){if(!B5)B5=new d5;return B5}function oq(q,Z){var Q=q.a2.indexOf(Z)|0;if(Q!==-1){if(q.a2.splice(Q,1),!q.E.i())Z.f5()}else throw E0(new q0,"Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?")}function e6(q){while((q.bt.length|0)>0)oq(q,q.bt.shift())}function m5(q){this.cN=null,this.a2=null,this.aF=!1,this.bt=null,this.E=null,this.aG=0,this.cN=q,this.a2=b1().ag(O().k(new(fq.r()).C([]))),this.aF=!0,this.bt=b1().ag(O().k(new(fq.r()).C([]))),this.E=B0(),this.aG=0}K=m5.prototype=new L;K.constructor=m5;function fF(){}fF.prototype=K;K.ew=function(){if(this.E.i()){var q=_1(),Z=()=>{var F=new $3(this.cN);this.E=new o0(F),this.aF=!1,this.aG=0;var w=0,J=this.a2.length|0;while(w<J){var G=w+this.aG|0;this.a2[G].f4(F),w=1+w|0}e6(this),this.aF=!0,this.aG=0};_1();var Q=!0;if(q.P||!Q)Z();else{q.P=!0;try{Z()}finally{q.P=!1,F7(q)}}}else throw E0(new q0,"Can not activate "+this+": it is already active")};K.fT=function(){if(!this.E.i()){this.aF=!1;var q=this.a2,Z=0,Q=q.length|0;while(Z<Q)q[Z].f5(),Z=1+Z|0;e6(this);var F=this.E;if(!F.i())F.y().gC();e6(this),this.aF=!0,this.E=B0()}else throw E0(new q0,"Can not deactivate DynamicOwner: it is not active")};K.fE=function(q,Z){if(Z)this.aG=1+this.aG|0,this.a2.unshift(q);else this.a2.push(q);var Q=this.E;if(!Q.i()){var F=Q.y();q.f4(F)}};K.h4=function(q){if(this.aF)oq(this,q);else this.bt.push(q)};var _M=new H().i(m5,"com.raquo.airstream.ownership.DynamicOwner",{be:1});function t2(q,Z,Q){this.bu=null,this.cO=null,this.bv=null,this.bu=q,this.cO=Z,this.bv=B0(),q.fE(this,Q)}K=t2.prototype=new L;K.constructor=t2;function _F(){}_F.prototype=K;K.bK=function(){this.bu.h4(this)};K.f4=function(q){var Z=_1(),Q=()=>{this.bv=this.cO.g(q)};_1();var F=!0;if(Z.P||!F)Q();else{Z.P=!0;try{Q()}finally{Z.P=!1,F7(Z)}}};K.f5=function(){var q=this.bv;if(!q.i())q.y().bK(),this.bv=B0()};var fq=new H().i(t2,"com.raquo.airstream.ownership.DynamicSubscription",{bf:1});function c5(){}K=c5.prototype=new L;K.constructor=c5;function bF(){}bF.prototype=K;K.hq=function(q,Z,Q){return new t2(q,new x((F)=>new o0(Z.g(F))),Q)};K.hi=function(q,Z,Q){return new t2(q,new x((F)=>{return Z.g(F),B0()}),Q)};var bM=new H().i(c5,"com.raquo.airstream.ownership.DynamicSubscription$",{bg:1}),T6;function rq(){if(!T6)T6=new c5;return T6}function xF(q){q.aH=b1().ag(O().k(new(dF.r()).C([])))}function gF(q){var Z=q.aH,Q=0,F=Z.length|0;while(Q<F)w7(Z[Q]),Q=1+Q|0;q.aH.length=0}function hF(q,Z){var Q=q.aH.indexOf(Z)|0;if(Q!==-1)q.aH.splice(Q,1);else throw E0(new q0,"Can not remove Subscription from Owner: subscription not found.")}function uF(q,Z){q.aH.push(Z)}function w7(q){if(!q.bQ)q.cQ.aC(),q.bQ=!0;else throw E0(new q0,"Can not kill Subscription: it was already killed.")}function p5(q,Z){this.cR=null,this.cQ=null,this.bQ=!1,this.cR=q,this.cQ=Z,this.bQ=!1,q.gY(this)}K=p5.prototype=new L;K.constructor=p5;function vF(){}vF.prototype=K;K.bK=function(){w7(this),hF(this.cR,this)};var dF=new H().i(p5,"com.raquo.airstream.ownership.Subscription",{bj:1});function i5(q,Z){this.cS=null,this.cT=null,this.a3=null,this.an=!1,this.cS=q,this.cT=Z,this.a3=B0(),this.an=!1}K=i5.prototype=new L;K.constructor=i5;function mF(){}mF.prototype=K;K.gz=function(){var q=this.a3;return!q.i()&&!q.y().bu.E.i()};K.hc=function(q){if(this.an)throw E0(new q0,"Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var Z=this.a3;if(!Z.i())var Q=Z.y(),F=Q.bu,w=q===F;else var w=!1;if(!w){if(this.gz()&&!q.E.i())this.an=!0;var J=this.a3;if(!J.i())J.y().bK(),this.a3=B0();var G=rq().hq(q,new x((X)=>{if(!this.an)this.cS.aC();return new p5(X,new x1(()=>{if(!this.an)this.cT.aC()}))}),!1);this.a3=new o0(G),this.an=!1}};K.fP=function(){if(this.an)throw E0(new q0,"Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var q=this.a3;if(!q.i())q.y().bK();this.a3=B0()};var xM=new H().i(i5,"com.raquo.airstream.ownership.TransferableSubscription",{bk:1});function l5(){}K=l5.prototype=new L;K.constructor=l5;function cF(){}cF.prototype=K;K.ag=function(q){return[...zJ().ho(q)]};var gM=new H().i(l5,"com.raquo.ew.JsArray$",{bl:1}),D6;function b1(){if(!D6)D6=new l5;return D6}function s5(){}K=s5.prototype=new L;K.constructor=s5;function pF(){}pF.prototype=K;K.gf=function(q,Z){var Q=0,F=q.length|0;while(Q<F)Z(q[Q]),Q=1+Q|0};var hM=new H().i(s5,"com.raquo.ew.JsArray$RichJsArray$",{bm:1}),O6;function iF(){if(!O6)O6=new s5;return O6}function n5(){this.cU=null,M5=this,document.createElement("template"),this.fS(S().t.hj().hk()),this.cU=new RegExp(" ","g")}K=n5.prototype=new L;K.constructor=n5;function lF(){}lF.prototype=K;K.fI=function(q,Z){try{return q.appendChild(Z),!0}catch(F){var Q=F instanceof h1?F:new U0(F);if(Q instanceof U0&&Q.S instanceof DOMException)return!1;throw Q instanceof U0?Q.S:Q}};K.gA=function(q,Z){var Q=q;while(!0){if(Q.parentNode!==null)var F=Q.parentNode;else var w=Q.host,F=w===void 0?null:w;if(F===null)return!1;if(I0().J(Z,F))return!0;Q=F}};K.fR=function(q){return document.createElement(q.cA())};K.gm=function(q,Z){var Q=this.gn(q,Z);return Q===void 0?void 0:Z.aY.bG(Q)};K.gn=function(q,Z){var Q=q.Q.getAttributeNS(null,Z.ap);return Q!==null?Q:void 0};K.fc=function(q,Z,Q){this.h9(q,Z,Z.aY.bk(Q))};K.h9=function(q,Z,Q){if(Q===null)this.h3(q,Z);else q.Q.setAttribute(Z.ap,Q)};K.h3=function(q,Z){q.Q.removeAttribute(Z.ap)};K.ha=function(q,Z,Q){this.hb(q,Z,Z.dr.bk(Q))};K.hb=function(q,Z,Q){q.Q[Z.ds]=Q};K.fd=function(q,Z,Q){var F=q.Q,w=Z.aq,J=Z.ar,G=Q===null?null:Q;if(G===null)J.Y(new x((z)=>F.style.removeProperty(""+z+w))),F.style.removeProperty(w);else{J.Y(new x((z)=>{var Y=F.style;Y.setProperty(""+z+w,G)}));var X=F.style;X.setProperty(w,G)}};K.fS=function(q){return document.createElementNS("http://www.w3.org/2000/svg",q.dC)};K.gq=function(q,Z){var Q=this.gr(q,Z);return Q===void 0?void 0:Z.bU.bG(Q)};K.gr=function(q,Z){var Q=q.cE(),F=Z.bx,w=Q.getAttributeNS(F.i()?null:F.y(),Z.bV),J=w;return J!==null?J:void 0};K.hd=function(q,Z,Q){this.he(q,Z,Z.bU.bk(Q))};K.he=function(q,Z,Q){if(Q===null)this.h5(q,Z);else{var F=Z.bx;if(F.i())q.cE().setAttribute(Z.bw,Q);else{var w=F.y();q.cE().setAttributeNS(w,Z.bw,Q)}}};K.h5=function(q,Z){var Q=q.cE(),F=Z.bx;Q.removeAttributeNS(F.i()?null:F.y(),Z.bV)};K.fV=function(q,Z){var Q=Z,F=q;while(!0){if(F===null)return Q;var w=F.parentNode,J=new R8(this.fU(F),Q);F=w,Q=J}};K.fU=function(q){if(q instanceof HTMLElement){var Z=q.id;if(Z!=="")var Q="#"+Z;else var F=q.className,Q=F!==""?"."+F.replace(this.cU,"."):"";return q.tagName.toLowerCase()+Q}else return q.nodeName};var uM=new H().i(n5,"com.raquo.laminar.DomApi$",{bn:1}),M5;function W0(){if(!M5)M5=new n5;return M5}function o5(q,Z,Q){this.bS=null,this.cV=null,this.bR=null,this.bS=q,this.cV=Z,this.bR=Q}K=o5.prototype=new L;K.constructor=o5;function sF(){}sF.prototype=K;K.Y=function(q){if(this.bS!==null)this.bS.Y(q);else if(this.bR!==null)iF().gf(this.bR,KG().gj(q));else JZ().gg(this.cV,q)};var vM=new H().i(o5,"com.raquo.laminar.Seq",{bo:1});function r5(){}K=r5.prototype=new L;K.constructor=r5;function nF(){}nF.prototype=K;var dM=new H().i(r5,"com.raquo.laminar.Seq$",{bp:1}),W6;function oF(){if(!W6)W6=new r5;return W6}function rF(q){lq(),m3()}function aF(q){q.fg=J7()}function tF(q){eF(q,new x((Z)=>{Z.dt.Q.focus()}))}function eF(q,Z){return new q4(new x((Q)=>{var F=new h3(!Q.aI.E.i()),w=new x((J)=>{if(F.bE){var G=!1;F.bE=G}else Z.g(J)});rq().hi(Q.aI,new x(((J)=>(G)=>{w.g(new q3(J,G))})(Q)),!1)}),J7())}function a5(){this.ao=null,this.bT=null,N5=this,this.ao=new V2(s0()),new V2(s0()),new V2(s0()),this.bT=new R3}K=a5.prototype=new L;K.constructor=a5;function qw(){}qw.prototype=K;var mM=new H().i(a5,"com.raquo.laminar.codecs.package$",{bx:1}),N5;function s0(){if(!N5)N5=new a5;return N5}function Zw(q){q.fh=Qw(q,"class"," ")}function Qw(q,Z,Q){var F=g1(new R1,Z,s0().ao);return new e2(F.ap,new x((w)=>{var J=W0().gm(w,F);return J===void 0?"":J}),new F4((w,J)=>{W0().fc(w,F,J)}),Q)}function Kw(q){q.ff=Fw(q,"class"," ")}function Fw(q,Z,Q){var F=new y3(Z,s0().ao,B0());return new e2(F.bw,new x((w)=>{var J=W0().gq(w,F);return J===void 0?"":J}),new F4((w,J)=>{W0().hd(w,F,J)}),Q)}function t5(q,Z){this.dq=null,this.dp=null,this.dq=q,this.dp=Z}K=t5.prototype=new L;K.constructor=t5;function ww(){}ww.prototype=K;K.m=function(q){return new K2(this.dq,this.dp.g(q),new F2((Z,Q,F)=>{W0().fd(Z,Q,F)}))};var cM=new H().i(t5,"com.raquo.laminar.keys.DerivedStyleProp",{bX:1});function aq(){}K=aq.prototype=new L;K.constructor=aq;function D2(){}D2.prototype=K;function e5(){this.fi=null,this.fj=null,this.fk=null,this.fl=null,this.fi="http://www.w3.org/2000/svg",this.fj="http://www.w3.org/1999/xlink",this.fk="http://www.w3.org/XML/1998/namespace",this.fl="http://www.w3.org/2000/xmlns/"}K=e5.prototype=new L;K.constructor=e5;function Jw(){}Jw.prototype=K;K.gI=function(q){switch(q){case"svg":return"http://www.w3.org/2000/svg";case"xlink":return"http://www.w3.org/1999/xlink";case"xml":return"http://www.w3.org/XML/1998/namespace";case"xmlns":return"http://www.w3.org/2000/xmlns/";default:throw new y1(q)}};var pM=new H().i(e5,"com.raquo.laminar.keys.SvgAttr$",{c0:1}),A6;function Gw(){if(!A6)A6=new e5;return A6}function q3(q,Z){this.dt=null,this.dt=q}K=q3.prototype=new L;K.constructor=q3;function zw(){}zw.prototype=K;var iM=new H().i(q3,"com.raquo.laminar.lifecycle.MountContext",{c1:1}),a=new H().i(1,"com.raquo.laminar.modifiers.Modifier",{X:1});function Z3(){this.fm=null,L5=this,this.fm=new P3}K=Z3.prototype=new L;K.constructor=Z3;function Xw(){}Xw.prototype=K;var lM=new H().i(Z3,"com.raquo.laminar.modifiers.Modifier$",{c3:1}),L5;function J7(){if(!L5)L5=new Z3;return L5}function Q3(){}K=Q3.prototype=new L;K.constructor=Q3;function Yw(){}Yw.prototype=K;K.cr=function(q,Z,Q){var F=new o0(q);if(WG(Z,F),Q!==void 0)Q.i0(q,Z);var w=W0().fI(q.cD(),Z.Q);if(w)AG(Z,F);return w};var sM=new H().i(Q3,"com.raquo.laminar.nodes.ParentNode$",{ca:1}),I6;function G7(){if(!I6)I6=new Q3;return I6}function K3(){V5=this,b1().ag(O().ht(new a0(new Int32Array([0]))))}K=K3.prototype=new L;K.constructor=K3;function Hw(){}Hw.prototype=K;K.fy=function(){return new x((q)=>{return})};var nM=new H().i(K3,"com.raquo.laminar.tags.CustomHtmlTag$",{cf:1}),V5;function _q(){if(!V5)V5=new K3;return V5}function F3(){}K=F3.prototype=new L;K.constructor=F3;function Uw(){}Uw.prototype=K;K.ev=function(q){return S().t.cu().bF(O().k(new(a.r()).C([S().t.ct().cv(),S().t.eY().eM(),S().t.cy().cC().m(8),V7(S().t,q,H7())])))};var oM=new H().i(F3,"doc.ExampleGroups$package$",{ch:1}),E6;function tq(){if(!E6)E6=new F3;return E6}function w3(){}K=w3.prototype=new L;K.constructor=w3;function Bw(){}Bw.prototype=K;K.fz=function(q){return S().t.cu().bF(O().k(new(a.r()).C([S().t.ct().cv(),S().t.eZ().fe(),S().t.fF().fO(),S().t.cy().cC().m(16),V7(S().t,q,H7())])))};var rM=new H().i(w3,"doc.Examples$package$",{ci:1}),$6;function Mw(){if(!$6)$6=new w3;return $6}function J3(){}K=J3.prototype=new L;K.constructor=J3;function Nw(){}Nw.prototype=K;K.fB=function(q){return S().t.cu().bF(O().k(new(a.r()).C([S().t.ct().cv(),S().t.eZ().fe(),S().t.eY().eM(),S().t.cy().cC().m(16),V7(S().t,q,H7())])))};var aM=new H().i(J3,"doc.VerticalExamples$package$",{cj:1}),R6;function Lw(){if(!R6)R6=new J3;return R6}function G3(){}K=G3.prototype=new L;K.constructor=G3;function Vw(){}Vw.prototype=K;K.fG=function(){$1().g5(),$1().g6(),$1().g7(),$1().g8(),$1().g9(),$1().ga(),$1().gb(),$1().gc()};K.g5=function(){var q=document.querySelector("#example1");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))))};K.g6=function(){var q=document.querySelector("#example2");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>(n().aW(),S().t).aX().m("#4a90e2")),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))))};K.g7=function(){var q=document.querySelector("#example3");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>(n().aW(),S().t).aX().m("#f5a623ff")),new y((Z)=>Z.gV().m(!0)),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))))};K.g8=function(){var q=document.querySelector("#example4");if(q!==null)S(),new e0(q,tq().ev(O().k(new(b5.r()).C([Lw().fB(O().k(new(b5.r()).C([n().I(O().k(new(F0.r()).C([new y((Z)=>Z.bJ().gu()),new y((Z)=>(n().aW(),S().t).aX().m("#4a90e2")),new y((Z)=>Z.K().m("Pick a hex color"))])),O().k(new(a.r()).C([]))),n().I(O().k(new(F0.r()).C([new y((Z)=>Z.bJ().h6()),new y((Z)=>(n().aW(),S().t).aX().m("rgb(80, 227, 194)")),new y((Z)=>Z.K().m("Pick an RGB color"))])),O().k(new(a.r()).C([]))),n().I(O().k(new(F0.r()).C([new y((Z)=>Z.bJ().gw()),new y((Z)=>(n().aW(),S().t).aX().m("hsl(290, 87%, 47%)")),new y((Z)=>Z.K().m("Pick an HSL color"))])),O().k(new(a.r()).C([]))),n().I(O().k(new(F0.r()).C([new y((Z)=>Z.bJ().gx()),new y((Z)=>(n().aW(),S().t).aX().m("hsv(55, 89%, 97%)")),new y((Z)=>Z.K().m("Pick an HSV color"))])),O().k(new(a.r()).C([])))])))]))))};K.g9=function(){var q=document.querySelector("#example5");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>Z.K().m("Select a color")),new y((Z)=>Z.hl().m("#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;"))])),O().k(new(a.r()).C([]))))};K.ga=function(){var q=document.querySelector("#example6");if(q!==null)S(),new e0(q,tq().ev(O().k(new(b5.r()).C([Mw().fz(O().k(new(b5.r()).C([n().I(O().k(new(F0.r()).C([new y((Z)=>Z.cH().hh()),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))),n().I(O().k(new(F0.r()).C([new y((Z)=>Z.cH().gG()),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))),n().I(O().k(new(F0.r()).C([new y((Z)=>Z.cH().gD()),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([])))])))]))))};K.gb=function(){var q=document.querySelector("#example7");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>Z.fX().m(!0)),new y((Z)=>Z.K().m("Select a color"))])),O().k(new(a.r()).C([]))))};K.gc=function(){var q=document.querySelector("#example8");if(q!==null)S(),new e0(q,n().I(O().k(new(F0.r()).C([new y((Z)=>Z.K().m("Select a color")),new y((Z)=>Z.gv().m("Choose a color with appropriate contrast!"))])),O().k(new(a.r()).C([]))))};var tM=new H().i(G3,"examples.colorPicker.Main$package$",{ck:1}),S6;function $1(){if(!S6)S6=new G3;return S6}function kw(q){try{$1().fG()}catch(Z){throw Z}}function z3(){this.fo=!1,this.aZ=null,this.bz=null,this.e5=null,this.c5=!1,this.fn=0,this.fq=0,this.fp=null,k5=this,this.fo=!0,this.aZ=new ArrayBuffer(8),this.bz=new Int32Array(this.aZ,0,2),new Float32Array(this.aZ,0,2),this.e5=new Float64Array(this.aZ,0,1),this.bz[0]=16909060,this.c5=(new Int8Array(this.aZ,0,8)[0]|0)===1,this.fn=this.c5?0:1,this.fq=this.c5?1:0,this.fp=null}K=z3.prototype=new L;K.constructor=z3;function Tw(){}Tw.prototype=K;K.cB=function(q){var Z=q|0|0;if(Z===q&&1/q!==-1/0)return Z;else return this.e5[0]=q,(this.bz[0]|0)^(this.bz[1]|0)};var eM=new H().i(z3,"java.lang.FloatingPointBits$",{cz:1}),k5;function eq(){if(!k5)k5=new z3;return k5}function Dw(q,Z){var Q=u().V("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$"),F=[],w=0;while(w<(Z.length|0)){var J=Z[w];if(J!==""){var G=Q.exec(J);if(G!==null)var X=Ow(q,G[1]),z=X[0],Y=X[1],U=G[2],M=G[3],k=parseInt(M),V=G[4],T=F.push(new T2(z,Y,U,k|0,V!==void 0?parseInt(V)|0:-1));else F.push(new T2("<jscode>",J,null,-1,-1))|0}w=1+w|0}var D=F.length|0,I=new(NZ.r()).C(D);w=0;while(w<D)I.a[w]=F[w],w=1+w|0;return I}function Ow(q,Z){var Q=u().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$"),F=u().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$"),w=u().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$"),J=u().V("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$"),G=u().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$"),X=Q.exec(Z),z=X!==null?X:F.exec(Z);if(z!==null)return[y6(q,z[1]),Ew(q,z[2])];else{var Y=w.exec(Z),U=Y!==null?Y:J.exec(Z);if(U!==null)return[y6(q,U[1]),"<init>"];else{var M=G.exec(Z);return M!==null?[y6(q,M[1]),"<clinit>"]:["<jscode>",Z]}}}function y6(q,Z){var Q=bq(q);if(dw().eb.call(Q,Z))var F=bq(q),w=F[Z];else var w=_w(q,0,Z);var J=w.split("_").join(".");return J.split("＿").join("_")}function Ww(q){if((1&q.L)<<24>>24===0){var Z={};Z.O="java_lang_Object",Z.T="java_lang_String";var Q=0;while(Q<=22){if(Q>=2){var F="T"+Q,w="scala_Tuple"+Q;Z[F]=w}var J="F"+Q,G="scala_Function"+Q;Z[J]=G,Q=1+Q|0}q.c7=Z,q.L=(1|q.L)<<24>>24}return q.c7}function bq(q){return(1&q.L)<<24>>24===0?Ww(q):q.c7}function Aw(q){if((2&q.L)<<24>>24===0){var Z={};Z.sjsr_="scala_scalajs_runtime_",Z.sjs_="scala_scalajs_",Z.sci_="scala_collection_immutable_",Z.scm_="scala_collection_mutable_",Z.scg_="scala_collection_generic_",Z.sc_="scala_collection_",Z.sr_="scala_runtime_",Z.s_="scala_",Z.jl_="java_lang_",Z.ju_="java_util_",q.c8=Z,q.L=(2|q.L)<<24>>24}return q.c8}function qZ(q){return(2&q.L)<<24>>24===0?Aw(q):q.c8}function Iw(q){if((4&q.L)<<24>>24===0)q.c6=Object.keys(qZ(q)),q.L=(4|q.L)<<24>>24;return q.c6}function xq(q){return(4&q.L)<<24>>24===0?Iw(q):q.c6}function Ew(q,Z){if(Z.startsWith("init___"))return"<init>";else{var Q=Z.indexOf("__")|0;return Q<0?Z:Z.substring(0,Q)}}function $w(q,Z){return!Z?[]:Z.arguments&&Z.stack?gq(q,Z):Z.stack&&Z.sourceURL?yw(q,Z):Z.stack&&Z.number?Sw(q,Z):Z.stack&&Z.fileName?Rw(q,Z):Z.message&&Z["opera#sourceloc"]?!Z.stacktrace?hq(q,Z):Z.message.indexOf(`
`)>-1&&Z.message.split(`
`).length>Z.stacktrace.split(`
`).length?hq(q,Z):Pw(q,Z):Z.message&&Z.stack&&Z.stacktrace?Z.stacktrace.indexOf("called from line")<0?jw(q,Z):Cw(q,Z):Z.stack&&!Z.fileName?gq(q,Z):fw(q,Z)}function gq(q,Z){return(Z.stack+`
`).replace(u().V("^[\\s\\S]+?\\s+at\\s+")," at ").replace(u().C("^\\s+(at eval )?at\\s+","gm"),"").replace(u().C("^([^\\(]+?)([\\n])","gm"),"{anonymous}() ($1)$2").replace(u().C("^Object.<anonymous>\\s*\\(([^\\)]+)\\)","gm"),"{anonymous}() ($1)").replace(u().C("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$","gm"),"$1@$2").split(`
`).slice(0,-1)}function Rw(q,Z){return Z.stack.replace(u().C("(?:\\n@:0)?\\s+$","m"),"").replace(u().C("^(?:\\((\\S*)\\))?@","gm"),"{anonymous}($1)@").split(`
`)}function Sw(q,Z){var Q=Z.stack.replace(u().C("^\\s*at\\s+(.*)$","gm"),"$1").replace(u().C("^Anonymous function\\s+","gm"),"{anonymous}() ").replace(u().C("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$","gm"),"$1@$2").split(`
`);return Q.slice(1)}function yw(q,Z){return Z.stack.replace(u().C("\\[native code\\]\\n","m"),"").replace(u().C("^(?=\\w+Error\\:).*$\\n","m"),"").replace(u().C("^@","gm"),"{anonymous}()@").split(`
`)}function hq(q,Z){var Q=u().C("Line (\\d+).*script (?:in )?(\\S+)","i"),F=Z.message.split(`
`),w=[],J=2,G=F.length|0;while(J<G){var X=Q.exec(F[J]);if(X!==null)w.push("{anonymous}()@"+X[2]+":"+X[1])|0;J=2+J|0}return w}function Pw(q,Z){var Q=u().C("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$","i"),F=Z.stacktrace.split(`
`),w=[],J=0,G=F.length|0;while(J<G){var X=Q.exec(F[J]);if(X!==null){var z=X[3],Y=z!==void 0?z:"{anonymous}";w.push(Y+"()@"+X[2]+":"+X[1])|0}J=2+J|0}return w}function jw(q,Z){var Q=u().V("^(.*)@(.+):(\\d+)$"),F=Z.stacktrace.split(`
`),w=[],J=0,G=F.length|0;while(J<G){var X=Q.exec(F[J]);if(X!==null){var z=X[1],Y=z!==void 0?z+"()":"global code";w.push(Y+"@"+X[2]+":"+X[3])|0}J=1+J|0}return w}function Cw(q,Z){var Q=u().V("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"),F=Z.stacktrace.split(`
`),w=[],J=0,G=F.length|0;while(J<G){var X=Q.exec(F[J]);if(X!==null){var z=X[4]+":"+X[1]+":"+X[2],Y=X[2],U=Y!==void 0?Y:"global code",M=U.replace(u().V("<anonymous function: (\\S+)>"),"$1").replace(u().V("<anonymous function>"),"{anonymous}");w.push(M+"@"+z)|0}J=2+J|0}return w}function fw(q,Z){return[]}function _w(q,Z,Q){while(!0)if(Z<(xq(q).length|0)){var F=xq(q)[Z];if(Q.startsWith(F)){var w=qZ(q);return""+w[F]+Q.substring(F.length)}else Z=1+Z|0}else return Q.startsWith("L")?Q.substring(1):Q}function X3(){this.c7=null,this.c8=null,this.c6=null,this.L=0}K=X3.prototype=new L;K.constructor=X3;function bw(){}bw.prototype=K;K.gd=function(q){return Dw(this,$w(this,q))};var qN=new H().i(X3,"java.lang.StackTrace$",{cG:1}),P6;function xw(){if(!P6)P6=new X3;return P6}function Y3(){}K=Y3.prototype=new L;K.constructor=Y3;function gw(){}gw.prototype=K;K.V=function(q){return new RegExp(q)};K.C=function(q,Z){return new RegExp(q,Z)};var ZN=new H().i(Y3,"java.lang.StackTrace$StringRE$",{cH:1}),j6;function u(){if(!j6)j6=new Y3;return j6}function H3(){this.e7=null,this.fr=null,T5=this,this.e7=new r2(!1),this.fr=new r2(!0)}K=H3.prototype=new L;K.constructor=H3;function hw(){}hw.prototype=K;var QN=new H().i(H3,"java.lang.System$Streams$",{cM:1}),T5;function uw(){if(!T5)T5=new H3;return T5}function U3(){this.eb=null,D5=this,this.eb=Object.prototype.hasOwnProperty}K=U3.prototype=new L;K.constructor=U3;function vw(){}vw.prototype=K;var KN=new H().i(U3,"java.lang.Utils$Cache$",{cO:1}),D5;function dw(){if(!D5)D5=new U3;return D5}function mw(q,Z){return q===Z}function cw(q){return 0}function ZZ(q,Z){return!!(q&&q.$classData&&q.$classData.D===Z&&q.$classData.B.n.ao)}var QZ=new H().i(0,"java.lang.Void",{ao:1},(q)=>q===void 0);function pw(q,Z){throw new D7("argument type mismatch")}function B3(){}K=B3.prototype=new L;K.constructor=B3;function iw(){}iw.prototype=K;K.aR=function(q){return q instanceof $0?q.a.length:q instanceof X1?q.a.length:q instanceof Y1?q.a.length:q instanceof H1?q.a.length:q instanceof U1?q.a.length:q instanceof a0?q.a.length:q instanceof B1?q.a.length:q instanceof M1?q.a.length:q instanceof N1?q.a.length:pw(this,q)};var FN=new H().i(B3,"java.lang.reflect.Array$",{cP:1}),C6;function k2(){if(!C6)C6=new B3;return C6}function M3(){}K=M3.prototype=new L;K.constructor=M3;function lw(){}lw.prototype=K;K.eU=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=J.c,X=J.d,z=F,Y=Z.a[z],U=Y.c,M=Y.d;if(!(G===U&&X===M))return!1;F=1+F|0}return!0};K.eT=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(J!==Z.a[G])return!1;F=1+F|0}return!0};K.eV=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(J!==Z.a[G])return!1;F=1+F|0}return!0};K.eQ=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(J!==Z.a[G])return!1;F=1+F|0}return!0};K.eP=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(J!==Z.a[G])return!1;F=1+F|0}return!0};K.eW=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(J!==Z.a[G])return!1;F=1+F|0}return!0};K.eR=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(!Object.is(J,Z.a[G]))return!1;F=1+F|0}return!0};K.eS=function(q,Z){if(q===Z)return!0;if(q===null||Z===null)return!1;var Q=q.a.length;if(Z.a.length!==Q)return!1;var F=0;while(F!==Q){var w=F,J=q.a[w],G=F;if(!Object.is(J,Z.a[G]))return!1;F=1+F|0}return!0};var wN=new H().i(M3,"java.util.Arrays$",{cQ:1}),f6;function Z0(){if(!f6)f6=new M3;return f6}function E(q,Z){this.c=0,this.d=0,this.c=q,this.d=Z}K=E.prototype=new L;K.constructor=E;function sw(){}sw.prototype=K;K.h=function(q){return q instanceof E&&(this.c===q.c&&this.d===q.d)};K.p=function(){return this.c^this.d};K.u=function(){return A0().f9(this.c,this.d)};K.i5=function(){return this.c};K.i4=function(){return A0().f8(this.c,this.d)};K.i3=function(){return A0().bn(this.c,this.d)};K.hL=function(){return this.c<<24>>24};K.i1=function(){return this.c<<16>>16};K.hV=function(){return this.c};K.hW=function(){return this};K.hR=function(){return A0().f8(this.c,this.d)};K.hP=function(){return A0().bn(this.c,this.d)};K.hN=function(q){return A0().f6(this.c,this.d,q.c,q.d)};K.hM=function(q){return A0().f6(this.c,this.d,q.c,q.d)};K.hQ=function(q){return this.c===q.c&&this.d===q.d};K.hZ=function(q){return!(this.c===q.c&&this.d===q.d)};K.hD=function(q){var Z=this.d,Q=q.d;return Z===Q?(-2147483648^this.c)<(-2147483648^q.c):Z<Q};K.hE=function(q){var Z=this.d,Q=q.d;return Z===Q?(-2147483648^this.c)<=(-2147483648^q.c):Z<Q};K.hz=function(q){var Z=this.d,Q=q.d;return Z===Q?(-2147483648^this.c)>(-2147483648^q.c):Z>Q};K.hA=function(q){var Z=this.d,Q=q.d;return Z===Q?(-2147483648^this.c)>=(-2147483648^q.c):Z>Q};K.i7=function(){return new E(~this.c,~this.d)};K.hx=function(q){return new E(this.c|q.c,this.d|q.d)};K.hw=function(q){return new E(this.c&q.c,this.d&q.d)};K.hK=function(q){return new E(this.c^q.c,this.d^q.d)};K.hF=function(q){var Z=this.c;return new E((32&q)===0?Z<<q:0,(32&q)===0?(Z>>>1|0)>>>(31-q|0)|0|this.d<<q:Z<<q)};K.hC=function(q){var Z=this.d;return new E((32&q)===0?this.c>>>q|0|Z<<1<<(31-q|0):Z>>>q|0,(32&q)===0?Z>>>q|0:0)};K.hB=function(q){var Z=this.d;return new E((32&q)===0?this.c>>>q|0|Z<<1<<(31-q|0):Z>>q,(32&q)===0?Z>>q:Z>>31)};K.i6=function(){var q=this.c,Z=this.d;return new E(-q|0,q!==0?~Z:-Z|0)};K.hI=function(q){var Z=this.c,Q=this.d,F=q.d,w=Z+q.c|0;return new E(w,(-2147483648^w)<(-2147483648^Z)?1+(Q+F|0)|0:Q+F|0)};K.hG=function(q){var Z=this.c,Q=this.d,F=q.d,w=Z-q.c|0;return new E(w,(-2147483648^w)>(-2147483648^Z)?-1+(Q-F|0)|0:Q-F|0)};K.hJ=function(q){var Z=this.c,Q=q.c,F=65535&Z,w=Z>>>16|0,J=65535&Q,G=Q>>>16|0,X=Math.imul(F,J),z=Math.imul(w,J),Y=Math.imul(F,G),U=X+((z+Y|0)<<16)|0,M=(X>>>16|0)+Y|0;return new E(U,(((Math.imul(Z,q.d)+Math.imul(this.d,Q)|0)+Math.imul(w,G)|0)+(M>>>16|0)|0)+(((65535&M)+z|0)>>>16|0)|0)};K.hy=function(q){var Z=A0();return new E(Z.fY(this.c,this.d,q.c,q.d),Z.r)};K.hH=function(q){var Z=A0();return new E(Z.h2(this.c,this.d,q.c,q.d),Z.r)};var JN=new H().i(E,"org.scalajs.linker.runtime.RuntimeLong",{ap:1});function uq(q,Z,Q){return(-2097152&Q)===0?""+(4294967296*Q+ +(Z>>>0)):z7(q,Z,Q,1e9,0,2)}function nw(q,Z,Q,F,w){if((-2097152&Q)===0)if((-2097152&w)===0){var J=4294967296*Q+ +(Z>>>0),G=4294967296*w+ +(F>>>0),X=J/G;return q.r=X/4294967296|0|0,X|0|0}else return q.r=0,0;else if(w===0&&(F&(-1+F|0))===0){var z=31-(Math.clz32(F)|0)|0;return q.r=Q>>>z|0,Z>>>z|0|Q<<1<<(31-z|0)}else if(F===0&&(w&(-1+w|0))===0){var Y=31-(Math.clz32(w)|0)|0;return q.r=0,Q>>>Y|0}else return z7(q,Z,Q,F,w,0)|0}function ow(q,Z,Q,F,w){if((-2097152&Q)===0)if((-2097152&w)===0){var J=4294967296*Q+ +(Z>>>0),G=4294967296*w+ +(F>>>0),X=J%G;return q.r=X/4294967296|0|0,X|0|0}else return q.r=Q,Z;else if(w===0&&(F&(-1+F|0))===0)return q.r=0,Z&(-1+F|0);else if(F===0&&(w&(-1+w|0))===0)return q.r=Q&(-1+w|0),Z;else return z7(q,Z,Q,F,w,1)|0}function z7(q,Z,Q,F,w,J){var G=(w!==0?Math.clz32(w)|0:32+(Math.clz32(F)|0)|0)-(Q!==0?Math.clz32(Q)|0:32+(Math.clz32(Z)|0)|0)|0,X=G,z=(32&X)===0?F<<X:0,Y=(32&X)===0?(F>>>1|0)>>>(31-X|0)|0|w<<X:F<<X,U=z,M=Y,k=Z,V=Q,T=0,D=0;while(G>=0&&(-2097152&V)!==0){var I=k,$=V,P=U,f=M;if($===f?(-2147483648^I)>=(-2147483648^P):(-2147483648^$)>=(-2147483648^f)){var c=k,h=V,M0=U,l=M,y0=c-M0|0,P0=(-2147483648^y0)>(-2147483648^c)?-1+(h-l|0)|0:h-l|0;if(k=y0,V=P0,G<32)T=T|1<<G;else D=D|1<<G}G=-1+G|0;var w0=U,g0=M,j0=w0>>>1|0|g0<<31,K1=g0>>>1|0;U=j0,M=K1}var r=k,F1=V;if(F1===w?(-2147483648^r)>=(-2147483648^F):(-2147483648^F1)>=(-2147483648^w)){var h0=k,N0=V,J0=4294967296*N0+ +(h0>>>0),u0=4294967296*w+ +(F>>>0);if(J!==1){var x4=J0/u0,kQ=x4|0|0,y7=x4/4294967296|0|0,P7=T,j7=D,C7=P7+kQ|0,TQ=(-2147483648^C7)<(-2147483648^P7)?1+(j7+y7|0)|0:j7+y7|0;T=C7,D=TQ}if(J!==0){var f7=J0%u0;k=f7|0|0,V=f7/4294967296|0|0}}if(J===0)return q.r=D,T;else if(J===1)return q.r=V,k;else{var DQ=T,OQ=D,WQ=4294967296*OQ+ +(DQ>>>0),AQ=k,_7=""+AQ,IQ=_7.length;return""+WQ+"000000000".substring(IQ)+_7}}function N3(){this.r=0}K=N3.prototype=new L;K.constructor=N3;function rw(){}rw.prototype=K;K.f9=function(q,Z){return Z===q>>31?""+q:Z<0?"-"+uq(this,-q|0,q!==0?~Z:-Z|0):uq(this,q,Z)};K.bn=function(q,Z){return Z<0?-(4294967296*+((q!==0?~Z:-Z|0)>>>0)+ +((-q|0)>>>0)):4294967296*Z+ +(q>>>0)};K.f8=function(q,Z){if(Z<0)var Q=-q|0,F=q!==0?~Z:-Z|0;else var Q=q,F=Z;var w=(-2097152&F)===0||(65535&Q)===0?Q:32768|-65536&Q,J=4294967296*+(F>>>0)+ +(w>>>0);return Math.fround(Z<0?-J:J)};K.hT=function(q){return new E(q,q>>31)};K.hS=function(q){return new E(this.f7(q),this.r)};K.f7=function(q){if(q<-9223372036854776000)return this.r=-2147483648,0;else if(q>=9223372036854776000)return this.r=2147483647,-1;else{var Z=q|0|0,Q=q/4294967296|0|0;return this.r=q<0&&Z!==0?-1+Q|0:Q,Z}};K.f6=function(q,Z,Q,F){return Z===F?q===Q?0:(-2147483648^q)<(-2147483648^Q)?-1:1:Z<F?-1:1};K.fY=function(q,Z,Q,F){if((Q|F)===0)throw new W2("/ by zero");if(Z===q>>31)if(F===Q>>31)if(q===-2147483648&&Q===-1)return this.r=0,-2147483648;else{var w=NF(q,Q);return this.r=w>>31,w}else if(q===-2147483648&&(Q===-2147483648&&F===0))return this.r=-1,-1;else return this.r=0,0;else{if(Z<0)var J=-q|0,G=q!==0?~Z:-Z|0;else var J=q,G=Z;if(F<0)var X=-Q|0,z=Q!==0?~F:-F|0;else var X=Q,z=F;var Y=nw(this,J,G,X,z);if((Z^F)>=0)return Y;else{var U=this.r;return this.r=Y!==0?~U:-U|0,-Y|0}}};K.h2=function(q,Z,Q,F){if((Q|F)===0)throw new W2("/ by zero");if(Z===q>>31)if(F===Q>>31)if(Q!==-1){var w=LF(q,Q);return this.r=w>>31,w}else return this.r=0,0;else if(q===-2147483648&&(Q===-2147483648&&F===0))return this.r=0,0;else return this.r=Z,q;else{if(Z<0)var J=-q|0,G=q!==0?~Z:-Z|0;else var J=q,G=Z;if(F<0)var X=-Q|0,z=Q!==0?~F:-F|0;else var X=Q,z=F;var Y=ow(this,J,G,X,z);if(Z<0){var U=this.r;return this.r=Y!==0?~U:-U|0,-Y|0}else return Y}};var GN=new H().i(N3,"org.scalajs.linker.runtime.RuntimeLong$",{cS:1}),_6;function A0(){if(!_6)_6=new N3;return _6}var F0=new H().i(1,"scala.Function1",{e:1});function KZ(){}K=KZ.prototype=new L;K.constructor=KZ;function FZ(){}FZ.prototype=K;function L3(){this.ee=null,this.ed=null,O5=this,this.ee=new y((q)=>wZ().ee),this.ed=new w8}K=L3.prototype=new L;K.constructor=L3;function aw(){}aw.prototype=K;var zN=new H().i(L3,"scala.PartialFunction$",{d2:1}),O5;function wZ(){if(!O5)O5=new L3;return O5}function V3(){this.eh=null,W5=this,this.eh=new y((q)=>JZ().eh)}K=V3.prototype=new L;K.constructor=V3;function tw(){}tw.prototype=K;K.gg=function(q,Z){var Q=k2().aR(q),F=0;if(q instanceof $0)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof a0)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof N1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof B1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof M1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof Y1)while(F<Q)Z.g(z1(q.a[F])),F=1+F|0;else if(q instanceof H1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof U1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else if(q instanceof X1)while(F<Q)Z.g(q.a[F]),F=1+F|0;else throw new y1(q)};var XN=new H().i(V3,"scala.collection.ArrayOps$",{d8:1}),W5;function JZ(){if(!W5)W5=new V3;return W5}function ew(q,Z){var Q=q.n();while(Q.s())Z.g(Q.f())}function k3(q,Z,Q,F){return q.z()===0?""+Z+F:q.ba(UX(new y8),Z,Q,F).H.q}function GZ(q,Z,Q,F,w){var J=Z.H;if(Q.length!==0)J.q=""+J.q+Q;var G=q.n();if(G.s()){var X=G.f();J.q=""+J.q+X;while(G.s()){J.q=""+J.q+F;var z=G.f();J.q=""+J.q+z}}if(w.length!==0)J.q=""+J.q+w;return Z}function T3(q,Z){this.el=null,this.b5=null,this.el=q,this.b5=Z}K=T3.prototype=new L;K.constructor=T3;function qJ(){}qJ.prototype=K;K.gt=function(){return this.el.aC().n()};var YN=new H().i(T3,"scala.collection.Iterator$ConcatIteratorCell",{dr:1});function D3(){}K=D3.prototype=new L;K.constructor=D3;function ZJ(){}ZJ.prototype=K;K.J=function(q,Z){return q===Z||(B7(q)?this.g4(q,Z):q instanceof r0?this.g2(q,Z):q===null?Z===null:n2(q,Z))};K.g4=function(q,Z){if(B7(Z))return this.g3(q,Z);else if(Z instanceof r0)if(typeof q==="number")return+q===Z.c;else if(q instanceof E){var Q=q2(q),F=Q.c,w=Q.d,J=Z.c,G=J>>31;return F===J&&w===G}else return q===null?Z===null:n2(q,Z);else return q===null?Z===null:n2(q,Z)};K.g3=function(q,Z){if(typeof q==="number"){var Q=+q;if(typeof Z==="number")return Q===+Z;else if(Z instanceof E){var F=q2(Z);return Q===A0().bn(F.c,F.d)}else return!1}else if(q instanceof E){var w=q2(q),J=w.c,G=w.d;if(Z instanceof E){var X=q2(Z),z=X.c,Y=X.d;return J===z&&G===Y}else if(typeof Z==="number"){var U=+Z;return A0().bn(J,G)===U}else return!1}else return q===null?Z===null:n2(q,Z)};K.g2=function(q,Z){if(Z instanceof r0)return q.c===Z.c;else if(B7(Z))if(typeof Z==="number")return+Z===q.c;else if(Z instanceof E){var Q=q2(Z),F=Q.c,w=Q.d,J=q.c,G=J>>31;return F===J&&w===G}else return Z===null?q===null:n2(Z,q);else return q===null&&Z===null};var HN=new H().i(D3,"scala.runtime.BoxesRunTime$",{e2:1}),b6;function I0(){if(!b6)b6=new D3;return b6}var QJ=new H().i(0,"scala.runtime.Null$",{e5:1});function O3(){}K=O3.prototype=new L;K.constructor=O3;function KJ(){}KJ.prototype=K;K.aP=function(q,Z){if(q instanceof $0)return q.a[Z];else if(q instanceof a0)return q.a[Z];else if(q instanceof N1)return q.a[Z];else if(q instanceof B1)return q.a[Z];else if(q instanceof M1)return q.a[Z];else if(q instanceof Y1)return z1(q.a[Z]);else if(q instanceof H1)return q.a[Z];else if(q instanceof U1)return q.a[Z];else if(q instanceof X1)return q.a[Z];else if(q===null)throw new u1;else throw new y1(q)};K.fL=function(q,Z,Q){if(q instanceof $0)q.a[Z]=Q;else if(q instanceof a0)q.a[Z]=Q|0;else if(q instanceof N1)q.a[Z]=+Q;else if(q instanceof B1)q.a[Z]=q2(Q);else if(q instanceof M1)q.a[Z]=Math.fround(Q);else if(q instanceof Y1)q.a[Z]=a2(Q);else if(q instanceof H1)q.a[Z]=Q|0;else if(q instanceof U1)q.a[Z]=Q|0;else if(q instanceof X1)q.a[Z]=!!Q;else if(q===null)throw new u1;else throw new y1(q)};K.fC=function(q){return k3(q.aU(),q.aj()+"(",",",")")};K.k=function(q){return q===null?null:q.a.length===0?Xz(Hz()):new w2(q)};K.ht=function(q){return q!==null?new I2(q):null};var UN=new H().i(O3,"scala.runtime.ScalaRunTime$",{e6:1}),x6;function O(){if(!x6)x6=new O3;return x6}function W3(){}K=W3.prototype=new L;K.constructor=W3;function FJ(){}FJ.prototype=K;K.b=function(q,Z){var Q=this.bL(q,Z),F=Q;return Q=F<<13|(F>>>19|0),-430675100+Math.imul(5,Q)|0};K.bL=function(q,Z){var Q=Z;Q=Math.imul(-862048943,Q);var F=Q;return Q=F<<15|(F>>>17|0),Q=Math.imul(461845907,Q),q^Q};K.l=function(q,Z){return this.fM(q^Z)};K.fM=function(q){var Z=q;return Z=Z^(Z>>>16|0),Z=Math.imul(-2048144789,Z),Z=Z^(Z>>>13|0),Z=Math.imul(-1028477387,Z),Z=Z^(Z>>>16|0),Z};K.aT=function(q){var{c:Z,d:Q}=q;return Q===Z>>31?Z:Z^Q};K.U=function(q){var Z=VF(q);if(Z===q)return Z;else{var Q=A0(),F=Q.f7(q),w=Q.r;return A0().bn(F,w)===q?F^w:eq().cB(q)}};K.x=function(q){if(q===null)return 0;else if(typeof q==="number")return this.U(+q);else if(q instanceof E){var Z=q2(q);return this.aT(new E(Z.c,Z.d))}else return MF(q)};K.bm=function(q){throw _5(new Q2,""+q)};var BN=new H().i(W3,"scala.runtime.Statics$",{e8:1}),g6;function A(){if(!g6)g6=new W3;return g6}function A3(){}K=A3.prototype=new L;K.constructor=A3;function wJ(){}wJ.prototype=K;K.hf=function(q,Z){return setTimeout(()=>{Z.aC()},q)};var MN=new H().i(A3,"scala.scalajs.js.timers.package$",{ee:1}),h6;function JJ(){if(!h6)h6=new A3;return h6}function I3(){}K=I3.prototype=new L;K.constructor=I3;function GJ(){}GJ.prototype=K;K.ho=function(q){var Z=[];return q.Y(new y((Q)=>Z.push(Q)|0)),Z};var NN=new H().i(I3,"scala.scalajs.runtime.Compat$",{en:1}),u6;function zJ(){if(!u6)u6=new I3;return u6}function X7(){}K=X7.prototype=new L;K.constructor=X7;function XJ(){}XJ.prototype=K;K.hg=function(q){var Z=q.f3()===0?"":q.f3()===1?" after first argument":" after "+q.f3()+" arguments",Q="Illegal command line"+Z+": "+q.hX();PJ().gX().gB(Q+`
`)};var LN=new H().i(X7,"scala.util.CommandLineParser$",{ep:1});function E3(q){this.co=null,this.co=q}K=E3.prototype=new L;K.constructor=E3;function YJ(){}YJ.prototype=K;K.u=function(){return"DynamicVariable("+this.co+")"};var VN=new H().i(E3,"scala.util.DynamicVariable",{er:1});function zZ(){}K=zZ.prototype=new L;K.constructor=zZ;function XZ(){}XZ.prototype=K;K.b=function(q,Z){var Q=this.bL(q,Z),F=Q;return Q=F<<13|(F>>>19|0),-430675100+Math.imul(5,Q)|0};K.bL=function(q,Z){var Q=Z;Q=Math.imul(-862048943,Q);var F=Q;return Q=F<<15|(F>>>17|0),Q=Math.imul(461845907,Q),q^Q};K.l=function(q,Z){return this.D(q^Z)};K.D=function(q){var Z=q;return Z=Z^(Z>>>16|0),Z=Math.imul(-2048144789,Z),Z=Z^(Z>>>13|0),Z=Math.imul(-1028477387,Z),Z=Z^(Z>>>16|0),Z};K.fa=function(q,Z,Q){var F=q.ah();if(F===0)return x0(q.aj());else{var w=Z;if(!Q)w=this.b(w,x0(q.aj()));var J=0;while(J<F)w=this.b(w,A().x(q.ai(J))),J=1+J|0;return this.l(w,F)}};K.hp=function(q,Z){var Q=0,F=0,w=0,J=1,G=q.n();while(G.s()){var X=G.f(),z=A().x(X);Q=Q+z|0,F=F^z,J=Math.imul(J,1|z),w=1+w|0}var Y=Z;return Y=this.b(Y,Q),Y=this.b(Y,F),Y=this.bL(Y,J),this.l(Y,w)};K.gW=function(q,Z){var Q=q.n(),F=Z;if(!Q.s())return this.l(F,0);var w=Q.f();if(!Q.s())return this.l(this.b(F,A().x(w)),1);var J=Q.f(),G=A().x(w);F=this.b(F,G);var X=F,z=A().x(J),Y=z-G|0,U=2;while(Q.s()){F=this.b(F,z);var M=A().x(Q.f());if(Y!==(M-z|0)||Y===0){F=this.b(F,M),U=1+U|0;while(Q.s())F=this.b(F,A().x(Q.f())),U=1+U|0;return this.l(F,U)}z=M,U=1+U|0}return this.D(this.b(this.b(X,Y),z))};K.eA=function(q,Z){var Q=Z,F=k2().aR(q);switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,A().x(O().aP(q,0))),1);default:{var w=A().x(O().aP(q,0));Q=this.b(Q,w);var J=Q,G=A().x(O().aP(q,1)),X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=A().x(O().aP(q,z));if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,A().x(O().aP(q,z))),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.h0=function(q,Z,Q,F){return this.D(this.b(this.b(this.b(F,q),Z),Q))};K.gy=function(q,Z){var Q=Z,F=q.j();switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,A().x(q.o(0))),1);default:{var w=A().x(q.o(0));Q=this.b(Q,w);var J=Q,G=A().x(q.o(1)),X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=A().x(q.o(z));if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,A().x(q.o(z))),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.gE=function(q,Z){var Q=0,F=Z,w=0,J=0,G=0,X=0,z=q;while(!z.i()){var Y=z.a0(),U=z.W(),M=A().x(Y);switch(F=this.b(F,M),w){case 0:{X=M,w=1;break}case 1:{J=M-G|0,w=2;break}case 2:{if(J!==(M-G|0)||J===0)w=3;break}}G=M,Q=1+Q|0,z=U}return w===2?this.h0(X,J,G,Z):this.l(F,Q)};K.eJ=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,q.a[0]?1231:1237),1);default:{var w=q.a[0]?1231:1237;Q=this.b(Q,w);var J=Q,G=q.a[1]?1231:1237,X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=q.a[z]?1231:1237;if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,q.a[z]?1231:1237),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eB=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,q.a[0]),1);default:{var w=q.a[0];Q=this.b(Q,w);var J=Q,G=q.a[1],X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=q.a[z];if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,q.a[z]),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eC=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,q.a[0]),1);default:{var w=q.a[0];Q=this.b(Q,w);var J=Q,G=q.a[1],X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=q.a[z];if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,q.a[z]),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eD=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,A().U(q.a[0])),1);default:{var w=A().U(q.a[0]);Q=this.b(Q,w);var J=Q,G=A().U(q.a[1]),X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=A().U(q.a[z]);if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,A().U(q.a[z])),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eE=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,A().U(q.a[0])),1);default:{var w=A().U(q.a[0]);Q=this.b(Q,w);var J=Q,G=A().U(q.a[1]),X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=A().U(q.a[z]);if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,A().U(q.a[z])),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eF=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,q.a[0]),1);default:{var w=q.a[0];Q=this.b(Q,w);var J=Q,G=q.a[1],X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=q.a[z];if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,q.a[z]),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eG=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:{var w=Q,J=q.a[0];return this.l(this.b(w,A().aT(new E(J.c,J.d))),1)}default:{var G=q.a[0],X=A().aT(new E(G.c,G.d));Q=this.b(Q,X);var z=Q,Y=q.a[1],U=A().aT(new E(Y.c,Y.d)),M=U-X|0,k=2;while(k<F){Q=this.b(Q,U);var V=q.a[k],T=A().aT(new E(V.c,V.d));if(M!==(T-U|0)||M===0){Q=this.b(Q,T),k=1+k|0;while(k<F){var D=Q,I=q.a[k];Q=this.b(D,A().aT(new E(I.c,I.d))),k=1+k|0}return this.l(Q,F)}U=T,k=1+k|0}return this.D(this.b(this.b(z,M),U))}}};K.eH=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,q.a[0]),1);default:{var w=q.a[0];Q=this.b(Q,w);var J=Q,G=q.a[1],X=G-w|0,z=2;while(z<F){Q=this.b(Q,G);var Y=q.a[z];if(X!==(Y-G|0)||X===0){Q=this.b(Q,Y),z=1+z|0;while(z<F)Q=this.b(Q,q.a[z]),z=1+z|0;return this.l(Q,F)}G=Y,z=1+z|0}return this.D(this.b(this.b(J,X),G))}}};K.eI=function(q,Z){var Q=Z,F=q.a.length;switch(F){case 0:return this.l(Q,0);case 1:return this.l(this.b(Q,0),1);default:{Q=this.b(Q,0);var w=Q,J=0,G=J,X=2;while(X<F){if(Q=this.b(Q,J),G!==(-J|0)||G===0){Q=this.b(Q,0),X=1+X|0;while(X<F)Q=this.b(Q,0),X=1+X|0;return this.l(Q,F)}J=0,X=1+X|0}return this.D(this.b(this.b(w,G),J))}}};function $3(q){this.aH=null,this.cP=null,this.bP=!1,this.cP=q,xF(this),this.bP=!1}K=$3.prototype=new L;K.constructor=$3;function HJ(){}HJ.prototype=K;K.gY=function(q){if(this.bP)w7(q),this.cP.aC();else uF(this,q)};K.gC=function(){gF(this),this.bP=!0};var kN=new H().i($3,"com.raquo.airstream.ownership.OneTimeOwner",{bh:1,bi:1});function R3(){}K=R3.prototype=new L;K.constructor=R3;function UJ(){}UJ.prototype=K;K.fW=function(q){return q!==null};K.g1=function(q){return q?"":null};K.bG=function(q){return this.fW(q)};K.bk=function(q){return this.g1(!!q)};var TN=new H().i(R3,"com.raquo.laminar.codecs.package$$anon$1",{by:1,a1:1});function V2(q){if(q===null)throw new u1}K=V2.prototype=new L;K.constructor=V2;function BJ(){}BJ.prototype=K;K.bk=function(q){return q};K.bG=function(q){return q};var DN=new H().i(V2,"com.raquo.laminar.codecs.package$$anon$2",{bz:1,a1:1});function MJ(q){return new t5(q,new x((Z)=>Z+"px"))}function e2(q,Z,Q,F){}K=e2.prototype=new D2;K.constructor=e2;function NJ(){}NJ.prototype=K;var ON=new H().i(e2,"com.raquo.laminar.keys.CompositeKey",{bW:1,I:1});function g1(q,Z,Q){return q.ap=Z,q.aY=Q,q}function R1(){this.ap=null,this.aY=null}K=R1.prototype=new D2;K.constructor=R1;function Y7(){}Y7.prototype=K;K.m=function(q){return new K2(this,q,new F2((Z,Q,F)=>{W0().fc(Z,Q,F)}))};var WN=new H().i(R1,"com.raquo.laminar.keys.HtmlAttr",{a2:1,I:1});function S3(q,Z){this.ds=null,this.dr=null,this.ds=q,this.dr=Z}K=S3.prototype=new D2;K.constructor=S3;function LJ(){}LJ.prototype=K;K.m=function(q){return new K2(this,q,new F2((Z,Q,F)=>{W0().ha(Z,Q,F)}))};var AN=new H().i(S3,"com.raquo.laminar.keys.HtmlProp",{bY:1,I:1});function y3(q,Z,Q){this.bV=null,this.bU=null,this.bw=null,this.bx=null,this.bV=q,this.bU=Z;var F=Q.i()?B0():new o0(Q.y()+":"+q);this.bw=F.i()?q:F.y(),this.bx=Q.i()?B0():new o0(Gw().gI(Q.y()))}K=y3.prototype=new D2;K.constructor=y3;function VJ(){}VJ.prototype=K;var IN=new H().i(y3,"com.raquo.laminar.keys.SvgAttr",{bZ:1,I:1});function P3(){}K=P3.prototype=new L;K.constructor=P3;function kJ(){}kJ.prototype=K;K.aO=function(q){};var EN=new H().i(P3,"com.raquo.laminar.modifiers.Modifier$$anon$1",{c4:1,X:1});function q4(q,Z){if(this.dx=null,this.dx=q,Z===null)throw new u1}K=q4.prototype=new L;K.constructor=q4;function TJ(){}TJ.prototype=K;K.aO=function(q){var Z=_1(),Q=()=>{this.dx.g(q)};_1();var F=!0;if(Z.P||!F)Q();else{Z.P=!0;try{Q()}finally{Z.P=!1,F7(Z)}}};var $N=new H().i(q4,"com.raquo.laminar.modifiers.Modifier$$anon$2",{c5:1,X:1});function j3(){}K=j3.prototype=new L;K.constructor=j3;function DJ(){}DJ.prototype=K;var RN=new H().i(j3,"com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$",{c7:1,c6:1}),v6;function H7(){if(!v6)v6=new j3;return v6}function YZ(q){q.eO(new m5(new x1(()=>{throw E0(new q0,"Attempting to use owner of unmounted element: "+k3(W0().fV(q.cD(),(W0(),d1())),""," > ",""))})))}function HZ(q,Z,Q){return q.bY=Z,q}function C3(){this.bY=null}K=C3.prototype=new L;K.constructor=C3;function UZ(){}UZ.prototype=K;K.cA=function(){return this.bY};K.bF=function(q){var Z=this.fN();return q.Y(new x((Q)=>{Q.aO(Z)})),Z};K.fN=function(){return new L8(this,W0().fR(this))};var SN=new H().i(C3,"com.raquo.laminar.tags.HtmlTag",{ad:1,a3:1});function f3(q,Z){this.dC=null,this.dC=q}K=f3.prototype=new L;K.constructor=f3;function OJ(){}OJ.prototype=K;var yN=new H().i(f3,"com.raquo.laminar.tags.SvgTag",{cg:1,a3:1});function Z4(){}K=Z4.prototype=new L;K.constructor=Z4;function WJ(){}WJ.prototype=K;K.bk=function(q){return q};K.bG=function(q){return q};var PN=new H().i(Z4,"io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1",{cp:1,a1:1});function AJ(q,Z){return q.c0=Z,q.fA(),q}function BZ(){this.c0=null,this.bZ=null,this.c1=!1,this.c2=null,this.c3=!1}K=BZ.prototype=new L;K.constructor=BZ;function MZ(){}MZ.prototype=K;K.hm=function(){if(!this.c1)this.bZ=new c3(this.c0,_q().fy(),(_q(),void 0)),this.c1=!0;return this.bZ};K.I=function(q,Z){var Q=this.hm().bF(O().k(new(a.r()).C([])));return q.Y(new x((F)=>{F.g(this).aO(Q)})),Z.Y(new x((F)=>{F.aO(Q)})),Q};K.aW=function(){if(!this.c3)this.c2=new n3,this.c3=!0;return this.c2};function U7(){}K=U7.prototype=new L;K.constructor=U7;function IJ(){}IJ.prototype=K;function B7(q){return q instanceof U7||typeof q==="number"||q instanceof E}function T2(q,Z,Q,F,w){this.aK=null,this.b1=null,this.aL=null,this.aM=0,this.aJ=0,this.aK=q,this.b1=Z,this.aL=Q,this.aM=F,this.aJ=w}K=T2.prototype=new L;K.constructor=T2;function EJ(){}EJ.prototype=K;K.h=function(q){return q instanceof T2&&(this.aL===q.aL&&this.aM===q.aM&&this.aJ===q.aJ&&this.aK===q.aK&&this.b1===q.b1)};K.u=function(){var q="";if(this.aK!=="<jscode>")q=""+q+this.aK+".";if(q=""+q+this.b1,this.aL===null)q=q+"(Unknown Source)";else{if(q=q+"("+this.aL,this.aM>=0){if(q=q+":"+this.aM,this.aJ>=0)q=q+":"+this.aJ}q=q+")"}return q};K.p=function(){return x0(this.aK)^x0(this.b1)^x0(this.aL)^this.aM^this.aJ};var NZ=new H().i(T2,"java.lang.StackTraceElement",{an:1,a:1});function _3(){}K=_3.prototype=new L;K.constructor=_3;function $J(){}$J.prototype=K;K.gJ=function(q,Z,Q){var F=Z+Q|0;if(Z<0||F<Z||F>q.a.length)throw new A7;var w="",J=Z;while(J!==F)w=w+(""+C5(q.a[J])),J=1+J|0;return w};var jN=new H().i(_3,"java.lang.String$",{cJ:1,a:1}),d6;function RJ(){if(!d6)d6=new _3;return d6}function t0(q,Z,Q,F,w){if(q.e9=Z,q.ea=w,w)q.ge();return q}class h1 extends Error{constructor(){super();this.e9=null,this.ea=!1,this.e8=null,this.bA=null}bl(){return this.e9}ge(){var q=this instanceof U0?this.S:this;return this.e8=Object.prototype.toString.call(q)==="[object Error]"?q:Error.captureStackTrace===void 0||!!Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gp(){if(this.bA===null)if(this.ea)this.bA=xw().gd(this.e8);else this.bA=new(NZ.r()).C(0);return this.bA}u(){var q=j5(this),Z=this.bl();return Z===null?q:q+": "+Z}p(){return Z2.prototype.p.call(this)}h(q){return Z2.prototype.h.call(this,q)}get message(){var q=this.bl();return q===null?"":q}get name(){return j5(this)}toString(){return this.u()}}function b3(){}K=b3.prototype=new L;K.constructor=b3;function SJ(){}SJ.prototype=K;K.f0=function(q,Z){var Q=q.z();if(Q>-1){var F=Z.gK(Q),w=q.n(),J=0;while(J<Q)O().fL(F,J,w.f()),J=1+J|0;return F}else{var G=0,X=0,z=null,Y=Z.h7();G=0,X=0;var U=Y===OF.l();z=[];var M=q.n();while(M.s()){var k=M.f(),V=U?a2(k):k===null?Y.ak.z:k;z.push(V)}var T=Y===DF.l()?QZ.l():Y===QJ.l()||Y===ZG.l()?n0.l():Y;return T.ak.r().w(z)}};K.eX=function(q,Z){if(q===Z)return!0;if(q.a.length!==Z.a.length)return!1;var Q=q.a.length,F=0;while(F<Q){if(!I0().J(q.a[F],Z.a[F]))return!1;F=1+F|0}return!0};var CN=new H().i(b3,"scala.Array$",{cT:1,a:1}),m6;function x3(){if(!m6)m6=new b3;return m6}function g3(){this.ec=null,A5=this,this.ec=new E3(uw().e7)}K=g3.prototype=new L;K.constructor=g3;function yJ(){}yJ.prototype=K;K.gX=function(){return this.ec.co};var fN=new H().i(g3,"scala.Console$",{cU:1,dO:1}),A5;function PJ(){if(!A5)A5=new g3;return A5}function LZ(){}K=LZ.prototype=new L;K.constructor=LZ;function VZ(){}VZ.prototype=K;K.u=function(){return"<function1>"};function kZ(){}K=kZ.prototype=new FZ;K.constructor=kZ;function TZ(){}TZ.prototype=K;K.hu=function(q){return q===null?null:q.a.length===0?Bz().em:new J2(q)};function M7(q,Z){if(Z===q)q.ex(oZ().f1(Z));else{var Q=Z.n();while(Q.s())q.cq(Q.f())}return q}function DZ(){}K=DZ.prototype=new L;K.constructor=DZ;function N7(){}N7.prototype=K;K.u=function(){return"<function0>"};function OZ(){}K=OZ.prototype=new L;K.constructor=OZ;function L7(){}L7.prototype=K;K.u=function(){return"<function1>"};function WZ(){}K=WZ.prototype=new L;K.constructor=WZ;function AZ(){}AZ.prototype=K;K.u=function(){return"<function2>"};function IZ(){}K=IZ.prototype=new L;K.constructor=IZ;function EZ(){}EZ.prototype=K;K.u=function(){return"<function3>"};function h3(q){this.bE=!1,this.bE=q}K=h3.prototype=new L;K.constructor=h3;function jJ(){}jJ.prototype=K;K.u=function(){return""+this.bE};var _N=new H().i(h3,"scala.runtime.BooleanRef",{e1:1,a:1});function u3(q){this.b8=0,this.b8=q}K=u3.prototype=new L;K.constructor=u3;function CJ(){}CJ.prototype=K;K.u=function(){return""+this.b8};var bN=new H().i(u3,"scala.runtime.IntRef",{e3:1,a:1});function v3(){this.v=0,this.eu=0,this.fx=0,this.fw=0,I5=this,this.v=x0("Seq"),this.eu=x0("Map"),this.fx=x0("Set"),this.fw=this.hp(d1(),this.eu)}K=v3.prototype=new XZ;K.constructor=v3;function fJ(){}fJ.prototype=K;K.h8=function(q){return fz(q)?this.gy(q,this.v):q instanceof $8?this.gE(q,this.v):this.gW(q,this.v)};var xN=new H().i(v3,"scala.util.hashing.MurmurHash3$",{et:1,es:1}),I5;function m(){if(!I5)I5=new v3;return I5}class $Z extends h1{}function d3(){this.bM=null,this.cI=null,this.cJ=null,E5=this,this.bM=oZ().ey(O().k(new(F0.r()).C([]))),this.cI=new x((q)=>{try{console.error(this.gl(q)+`
`+this.go(q,`
`))}catch(Q){var Z=Q instanceof h1?Q:new U0(Q);console.error("Error in AirstreamError.consoleErrorCallback:"),console.error(Z)}}),this.cJ=new x((q)=>{console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");var Z=q;throw Z instanceof U0?Z.S:Z}),this.h1(this.cI)}K=d3.prototype=new L;K.constructor=d3;function _J(){}_J.prototype=K;K.gl=function(q){try{var Z=q.bl()}catch(Q){var Z="(Unable to get the message for this error - exception occurred in its getMessage)"}return cq(q).cz()+": "+Z};K.go=function(q,Z){try{return k3(iJ().hu(q.gp()),"",Z,"")}catch(Q){return"(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)"}};K.h1=function(q){this.bM.cq(q)};K.cG=function(q){var Z=this.bM,Q=Z.n();while(Q.s()){var F=Q.f();try{F.g(q)}catch(G){var w=G instanceof h1?G:new U0(G),J=this.cJ;if(F===null?J===null:F.h(J))throw w instanceof U0?w.S:w;console.warn("Error processing an unhandled error callback:"),JJ().hf(0,new x1(((X)=>()=>{throw X instanceof U0?X.S:X})(w)))}}};var gN=new H().i(d3,"com.raquo.airstream.core.AirstreamError$",{b4:1,dM:1,dN:1}),E5;function m3(){if(!E5)E5=new d3;return E5}function V7(q,Z,Q){return new q4(new x((F)=>{(oF(),new o5(Z,null,null)).Y(new x(((w)=>(J)=>{G7().cr(w,J,void 0)})(F)))}),J7())}function K2(q,Z,Q){this.dv=null,this.dw=null,this.du=null,this.dv=q,this.dw=Z,this.du=Q}K=K2.prototype=new L;K.constructor=K2;function bJ(){}bJ.prototype=K;K.aO=function(q){this.du.fJ(q,this.dv,this.dw)};var hN=new H().i(K2,"com.raquo.laminar.modifiers.KeySetter",{c2:1,X:1,c8:1});function e0(q,Z){if(this.bX=null,this.dz=null,this.dA=null,this.dz=Z,YZ(this),q===null)throw E0(new q0,"Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");if(!W0().gA(q,document))throw E0(new q0,"Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");this.dA=q,this.gH()}K=e0.prototype=new L;K.constructor=e0;function xJ(){}xJ.prototype=K;K.bI=function(){return this.bX};K.eO=function(q){this.bX=q};K.gH=function(){return this.bX.ew(),G7().cr(this,this.dz,void 0)};K.cD=function(){return this.dA};var uN=new H().i(e0,"com.raquo.laminar.nodes.RootNode",{cd:1,ac:1,ab:1});function c3(q,Z,Q){this.bY=null,this.dB=null,this.dB=q,HZ(this,q,!1)}K=c3.prototype=new UZ;K.constructor=c3;function gJ(){}gJ.prototype=K;K.cA=function(){return this.dB};var vN=new H().i(c3,"com.raquo.laminar.tags.CustomHtmlTag",{ce:1,ad:1,a3:1});function p3(){this.c0=null,this.bZ=null,this.c1=!1,this.c2=null,this.c3=!1,this.dJ=null,this.dK=!1,this.dH=null,this.dI=!1,this.dF=null,this.dG=!1,this.dN=null,this.dO=!1,this.dD=null,this.dE=!1,this.dL=null,this.dM=!1,this.dP=null,this.dQ=!1,AJ(this,"wa-color-picker")}K=p3.prototype=new MZ;K.constructor=p3;function hJ(){}hJ.prototype=K;K.K=function(){if(!this.dK)this.dJ=(S(),g1(new R1,"label",s0().ao)),this.dK=!0;return this.dJ};K.gv=function(){if(!this.dI)this.dH=(S(),g1(new R1,"hint",s0().ao)),this.dI=!0;return this.dH};K.bJ=function(){if(!this.dG)this.dF=Q4(),this.dG=!0;return this.dF};K.cH=function(){if(!this.dO)this.dN=s3(),this.dO=!0;return this.dN};K.fX=function(){if(!this.dE)this.dD=(S(),g1(new R1,"disabled",s0().bT)),this.dE=!0;return this.dD};K.gV=function(){if(!this.dM)this.dL=(S(),g1(new R1,"opacity",s0().bT)),this.dM=!0;return this.dL};K.hl=function(){if(!this.dQ)this.dP=(S(),g1(new R1,"swatches",s0().ao)),this.dQ=!0;return this.dP};K.fA=function(){return k6};var dN=new H().i(p3,"io.github.nguyenyou.webawesome.laminar.ColorPicker$",{cl:1,cq:1,co:1}),c6;function n(){if(!c6)c6=new p3;return c6}function i3(){this.ap=null,this.aY=null,this.dR=null,this.dS=!1,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dY=!1,g1(this,"format",new Z4)}K=i3.prototype=new Y7;K.constructor=i3;function uJ(){}uJ.prototype=K;K.gu=function(){if(!this.dS)this.dR=Q4().m("hex"),this.dS=!0;return this.dR};K.gw=function(){if(!this.dU)this.dT=Q4().m("hsl"),this.dU=!0;return this.dT};K.gx=function(){if(!this.dW)this.dV=Q4().m("hsv"),this.dW=!0;return this.dV};K.h6=function(){if(!this.dY)this.dX=Q4().m("rgb"),this.dY=!0;return this.dX};var mN=new H().i(i3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$",{cm:1,a2:1,I:1}),p6;function Q4(){if(!p6)p6=new i3;return p6}function l3(){this.ap=null,this.aY=null,this.dZ=null,this.e0=!1,this.e1=null,this.e2=!1,this.e3=null,this.e4=!1,g1(this,"size",new Z4)}K=l3.prototype=new Y7;K.constructor=l3;function vJ(){}vJ.prototype=K;K.gD=function(){if(!this.e0)this.dZ=s3().m("large"),this.e0=!0;return this.dZ};K.gG=function(){if(!this.e2)this.e1=s3().m("medium"),this.e2=!0;return this.e1};K.hh=function(){if(!this.e4)this.e3=s3().m("small"),this.e4=!0;return this.e3};var cN=new H().i(l3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$",{cn:1,a2:1,I:1}),i6;function s3(){if(!i6)i6=new l3;return i6}function n3(){}K=n3.prototype=new VZ;K.constructor=n3;function dJ(){}dJ.prototype=K;K.g=function(q){return S().t};var pN=new H().i(n3,"io.github.nguyenyou.webawesome.laminar.WebComponent$toL$",{cr:1,cV:1,e:1});function mJ(q){if(q.ak.Z)return q.ak.Q().cz()+"[]";else{var Z=q.ak.N,Q=-1+Z.length|0;while(Q>=0&&Z.charCodeAt(Q)===36)Q=-1+Q|0;if(Q>=0)var F=Q,w=Z.charCodeAt(F),J=w>=48&&w<=57;else var J=!1;if(J){Q=-1+Q|0;while(!0){if(Q>=0)var G=Q,X=Z.charCodeAt(G),z=X>=48&&X<=57;else var z=!1;if(z)Q=-1+Q|0;else break}while(Q>=0&&Z.charCodeAt(Q)===36)Q=-1+Q|0}while(!0){if(Q>=0)var Y=Q,U=Z.charCodeAt(Y),M=U!==46&&U!==36;else var M=!1;if(M)Q=-1+Q|0;else break}var k=1+Q|0;return Z.substring(k)}}function o3(q){this.c4=null,this.ak=q}K=o3.prototype=new L;K.constructor=o3;function cJ(){}cJ.prototype=K;K.u=function(){return(this.ak.Y?"interface ":this.ak.X?"":"class ")+this.ak.N};K.cz=function(){if(this.c4===null)this.c4=mJ(this);return this.c4};var iN=new H().i(o3,"java.lang.Class",{cx:1,a:1,M:1});function E0(q,Z){return t0(q,Z,null,!0,!0),q}class q0 extends h1{}var lN=new H().i(q0,"java.lang.Exception",{L:1,u:1,a:1});function r3(){this.fs=null,$5=this,this.fs=tJ()}K=r3.prototype=new TZ;K.constructor=r3;function pJ(){}pJ.prototype=K;var sN=new H().i(r3,"scala.Predef$",{d4:1,cY:1,cZ:1}),$5;function iJ(){if(!$5)$5=new r3;return $5}function lJ(q,Z){return q.bC=Z,q}function RZ(){this.bC=null}K=RZ.prototype=new L;K.constructor=RZ;function SZ(){}SZ.prototype=K;K.cx=function(q){return this.bC.cw(q,GQ())};K.cs=function(q){return this.bC.cw(q,GQ())};function sJ(q,Z){return new G4(q).fQ(Z)}function nJ(q,Z,Q){var F=Z>0?Z:0,w=Q<0?-1:Q<=F?0:Q-F|0;return w===0?i().w:new z4(q,F,w)}function oJ(q,Z){var Q=Z.n();while(q.s()&&Q.s())if(!I0().J(q.f(),Q.f()))return!1;return q.s()===Q.s()}function a3(){this.w=null,R5=this,this.w=new z8}K=a3.prototype=new L;K.constructor=a3;function rJ(){}rJ.prototype=K;var nN=new H().i(a3,"scala.collection.Iterator$",{dn:1,Z:1,a:1}),R5;function i(){if(!R5)R5=new a3;return R5}function t3(){}K=t3.prototype=new L;K.constructor=t3;function aJ(){}aJ.prototype=K;var oN=new H().i(t3,"scala.collection.immutable.Map$",{dC:1,dt:1,a:1}),l6;function tJ(){if(!l6)l6=new t3;return l6}function e3(q){this.en=null,this.en=q}K=e3.prototype=new N7;K.constructor=e3;function eJ(){}eJ.prototype=K;K.aC=function(){return(0,this.en)()};var rN=new H().i(e3,"scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855",{dX:1,b0:1,aq:1});function y(q){this.eo=null,this.eo=q}K=y.prototype=new L7;K.constructor=y;function qG(){}qG.prototype=K;K.g=function(q){return(0,this.eo)(q)};var aN=new H().i(y,"scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28",{dY:1,b1:1,e:1}),ZG=new H().i(0,"scala.runtime.Nothing$",{e4:1,u:1,a:1});function q8(){}K=q8.prototype=new L;K.constructor=q8;function QG(){}QG.prototype=K;K.gj=function(q){return(Z)=>q.g(Z)};var tN=new H().i(q8,"scala.scalajs.js.Any$",{e9:1,ea:1,eb:1}),s6;function KG(){if(!s6)s6=new q8;return s6}function yZ(){}K=yZ.prototype=new N7;K.constructor=yZ;function PZ(){}PZ.prototype=K;function jZ(){}K=jZ.prototype=new L7;K.constructor=jZ;function CZ(){}CZ.prototype=K;function fZ(){}K=fZ.prototype=new AZ;K.constructor=fZ;function _Z(){}_Z.prototype=K;function bZ(){}K=bZ.prototype=new EZ;K.constructor=bZ;function xZ(){}xZ.prototype=K;function Z8(q,Z,Q,F){if(this.cK=null,F===null)throw new u1;this.cK=void 0}K=Z8.prototype=new L;K.constructor=Z8;function FG(){}FG.prototype=K;K.u=function(){return IF(this)};var eN=new H().i(Z8,"com.raquo.airstream.core.Observer$$anon$8",{b8:1,b9:1,b5:1,b6:1});function Q8(q){if(this.cW=null,this.cX=!1,this.ff=null,q===null)throw new u1;Kw(this)}K=Q8.prototype=new L;K.constructor=Q8;function wG(){}wG.prototype=K;K.hk=function(){if(!this.cX)this.cW=new f3("svg",!1),this.cX=!0;return this.cW};var qL=new H().i(Q8,"com.raquo.laminar.api.Laminar$svg$",{bs:1,bV:1,bB:1,bD:1});function K8(){this.t=null,S5=this,this.t=new I8}K=K8.prototype=new L;K.constructor=K8;function JG(){}JG.prototype=K;var ZL=new H().i(K8,"com.raquo.laminar.api.package$",{bv:1,a9:1,aa:1,a8:1}),S5;function S(){if(!S5)S5=new K8;return S5}function K4(q,Z,Q){return q.aq=Z,q.ar=Q,q}function gZ(){this.aq=null,this.ar=null}K=gZ.prototype=new D2;K.constructor=gZ;function O2(){}O2.prototype=K;K.m=function(q){return new K2(this,pq(q),new F2((Z,Q,F)=>{W0().fd(Z,Q,F)}))};function hZ(){}K=hZ.prototype=new L;K.constructor=hZ;function k7(){}k7.prototype=K;function GG(q,Z){return q===Z}function zG(q){return q?1231:1237}var XG=new H().i(0,"java.lang.Boolean",{cv:1,a:1,Q:1,M:1},(q)=>typeof q==="boolean");function YG(q){return q}function HG(q,Z){return Z instanceof r0&&q===Z.c}var UG=new H().i(0,"java.lang.Character",{aj:1,a:1,Q:1,M:1},(q)=>q instanceof r0);class S1 extends q0{}function F8(){this.q=null,this.q=""}K=F8.prototype=new L;K.constructor=F8;function BG(){}BG.prototype=K;K.fH=function(q){var Z=RJ().gJ(q,0,q.a.length);return this.q=""+this.q+Z,this};K.u=function(){return this.q};K.j=function(){return this.q.length};K.eL=function(q){return this.q.charCodeAt(q)};var QL=new H().i(F8,"java.lang.StringBuilder",{cK:1,a4:1,ah:1,a:1});function w8(){}K=w8.prototype=new L;K.constructor=w8;function MG(){}MG.prototype=K;K.u=function(){return"<function1>"};K.fK=function(q){throw new y1(q)};K.g=function(q){this.fK(q)};var KL=new H().i(w8,"scala.PartialFunction$$anon$1",{d3:1,g:1,e:1,a:1});function uZ(){}K=uZ.prototype=new L;K.constructor=uZ;function L1(){}L1.prototype=K;K.n=function(){return this};K.bH=function(q){return this.bp(q,-1)};K.bp=function(q,Z){return nJ(this,q,Z)};K.u=function(){return"<iterator>"};K.ba=function(q,Z,Q,F){return GZ(this,q,Z,Q,F)};K.z=function(){return-1};function NG(q,Z){return q.bD=Z,q}function vZ(){this.bD=null}K=vZ.prototype=new L;K.constructor=vZ;function dZ(){}dZ.prototype=K;K.ey=function(q){return this.bD.cs(q)};K.f1=function(q){return this.bD.cx(q)};K.cx=function(q){return this.f1(q)};K.cs=function(q){return this.ey(q)};function LG(q){return q.aS(0)===0}function T7(q,Z){var Q=q.z();if(Q!==-1)var F=Z.z(),w=F!==-1&&Q!==F;else var w=!1;if(!w)return oJ(q.n(),Z);else return!1}function x1(q){this.er=null,this.er=q}K=x1.prototype=new PZ;K.constructor=x1;function VG(){}VG.prototype=K;K.aC=function(){return(0,this.er)()};var FL=new H().i(x1,"scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1",{eg:1,ef:1,b0:1,aq:1});function x(q){this.es=null,this.es=q}K=x.prototype=new CZ;K.constructor=x;function kG(){}kG.prototype=K;K.g=function(q){return(0,this.es)(q)};var wL=new H().i(x,"scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab",{ei:1,eh:1,b1:1,e:1});function F4(q){this.fv=null,this.fv=q}K=F4.prototype=new _Z;K.constructor=F4;function TG(){}TG.prototype=K;var JL=new H().i(F4,"scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2",{ek:1,ej:1,dZ:1,cW:1});function F2(q){this.et=null,this.et=q}K=F2.prototype=new xZ;K.constructor=F2;function DG(){}DG.prototype=K;K.fJ=function(q,Z,Q){return(0,this.et)(q,Z,Q)};var GL=new H().i(F2,"scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491",{em:1,el:1,e0:1,cX:1});function OG(q){q.bW=new i5(new x1(()=>{q.aI.ew()}),new x1(()=>{q.aI.fT()}))}function WG(q,Z){if(mZ(q,q.by,Z))cZ(q,Z)}function AG(q,Z){var Q=q.by;if(q.by=Z,!mZ(q,Q,Z))cZ(q,Z)}function mZ(q,Z,Q){var F=!Z.i()&&!Z.y().bI().E.i(),w=!Q.i()&&!Q.y().bI().E.i();return F&&!w}function cZ(q,Z){IG(q,Z.i()?B0():new o0(Z.y().bI()))}function IG(q,Z){if(Z.i())q.bW.fP();else{var Q=Z.y();q.bW.hc(Q)}}function EG(q,Z){return q}function pZ(){}K=pZ.prototype=new k7;K.constructor=pZ;function iZ(){}iZ.prototype=K;class W2 extends S1{constructor(q){super();t0(this,q,null,!0,!0)}}var zL=new H().i(W2,"java.lang.ArithmeticException",{cu:1,R:1,L:1,u:1,a:1});var $G=new H().i(0,"java.lang.Byte",{cw:1,S:1,a:1,Q:1,M:1},(q)=>kF(q));class D7 extends S1{constructor(q){super();t0(this,q,null,!0,!0)}}var XL=new H().i(D7,"java.lang.IllegalArgumentException",{cA:1,R:1,L:1,u:1,a:1});function _5(q,Z){return t0(q,Z,null,!0,!0),q}class Q2 extends S1{}var YL=new H().i(Q2,"java.lang.IndexOutOfBoundsException",{al:1,R:1,L:1,u:1,a:1});function J8(){}K=J8.prototype=new k7;K.constructor=J8;function RG(){}RG.prototype=K;var HL=new H().i(J8,"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{cD:1,ag:1,ae:1,ai:1,af:1});class u1 extends S1{constructor(){super();t0(this,null,null,!0,!0)}}var UL=new H().i(u1,"java.lang.NullPointerException",{cE:1,R:1,L:1,u:1,a:1});var SG=new H().i(0,"java.lang.Short",{cF:1,S:1,a:1,Q:1,M:1},(q)=>TF(q));class O7 extends S1{constructor(q){super();t0(this,q,null,!0,!0)}}var BL=new H().i(O7,"java.lang.UnsupportedOperationException",{cN:1,R:1,L:1,u:1,a:1});class w4 extends S1{constructor(q){super();t0(this,q,null,!0,!0)}}var ML=new H().i(w4,"java.util.NoSuchElementException",{cR:1,R:1,L:1,u:1,a:1});function yG(q){if(!q.c9)q.ca=q.bB===null?"null":jG(q),q.c9=!0;return q.ca}function PG(q){return!q.c9?yG(q):q.ca}function vq(q){var Z=q.bB;return"of class "+j5(Z)}function jG(q){try{return q.bB+" ("+vq(q)+")"}catch(Z){return"an instance "+vq(q)}}class y1 extends S1{constructor(q){super();this.ca=null,this.bB=null,this.c9=!1,this.bB=q,t0(this,null,null,!0,!0)}bl(){return PG(this)}}var NL=new H().i(y1,"scala.MatchError",{d0:1,R:1,L:1,u:1,a:1});function lZ(){}K=lZ.prototype=new L;K.constructor=lZ;function W7(){}W7.prototype=K;K.i=function(){return this===B0()};K.z=function(){return this.i()?0:1};K.n=function(){return this.i()?i().w:new X8(this.y())};function G8(q){this.b2=0,this.eg=0,this.ef=null,this.ef=q,this.b2=0,this.eg=q.ah()}K=G8.prototype=new L1;K.constructor=G8;function CG(){}CG.prototype=K;K.s=function(){return this.b2<this.eg};K.f=function(){var q=this.ef.ai(this.b2);return this.b2=1+this.b2|0,q};var LL=new H().i(G8,"scala.Product$$anon$1",{d5:1,r:1,s:1,b:1,c:1});function J4(q){this.bC=null,lJ(this,q)}K=J4.prototype=new SZ;K.constructor=J4;function fG(){}fG.prototype=K;var VL=new H().i(J4,"scala.collection.ClassTagSeqFactory$AnySeqDelegate",{dj:1,di:1,Z:1,a:1,a5:1});function _G(q){return k3(q,q.aQ()+"(",", ",")")}function z8(){}K=z8.prototype=new L1;K.constructor=z8;function bG(){}bG.prototype=K;K.s=function(){return!1};K.gL=function(){throw new w4("next on empty iterator")};K.z=function(){return 0};K.bp=function(q,Z){return this};K.f=function(){this.gL()};var kL=new H().i(z8,"scala.collection.Iterator$$anon$19",{dp:1,r:1,s:1,b:1,c:1});function X8(q){this.b4=!1,this.ek=null,this.ek=q,this.b4=!1}K=X8.prototype=new L1;K.constructor=X8;function xG(){}xG.prototype=K;K.s=function(){return!this.b4};K.f=function(){if(this.b4)return i().w.f();else return this.b4=!0,this.ek};K.bp=function(q,Z){return this.b4||q>0||Z===0?i().w:this};var TL=new H().i(X8,"scala.collection.Iterator$$anon$20",{dq:1,r:1,s:1,b:1,c:1});function gG(q){while(!0){if(q.B instanceof G4){var Z=q.B;if(q.B=Z.B,q.a5=Z.a5,Z.N!==null){if(q.M===null)q.M=Z.M;Z.M.b5=q.N,q.N=Z.N}continue}return}}function hG(q){while(!0)if(q.N===null)return q.B=null,q.M=null,!1;else{if(q.B=q.N.gt(),q.M===q.N)q.M=q.M.b5;if(q.N=q.N.b5,gG(q),q.a5)return!0;else if(q.B!==null&&q.B.s())return q.a5=!0,!0}}function G4(q){this.B=null,this.N=null,this.M=null,this.a5=!1,this.B=q,this.N=null,this.M=null,this.a5=!1}K=G4.prototype=new L1;K.constructor=G4;function uG(){}uG.prototype=K;K.s=function(){if(this.a5)return!0;else if(this.B!==null)if(this.B.s())return this.a5=!0,!0;else return hG(this);else return!1};K.f=function(){if(this.s())return this.a5=!1,this.B.f();else return i().w.f()};K.fQ=function(q){var Z=new T3(q,null);if(this.N===null)this.N=Z,this.M=Z;else this.M.b5=Z,this.M=Z;if(this.B===null)this.B=i().w;return this};var DL=new H().i(G4,"scala.collection.Iterator$ConcatIterator",{aw:1,r:1,s:1,b:1,c:1});function sZ(q){while(q.Z>0)if(q.a6.s())q.a6.f(),q.Z=-1+q.Z|0;else q.Z=0}function dq(q,Z){if(q.G<0)return-1;else{var Q=q.G-Z|0;return Q<0?0:Q}}function z4(q,Z,Q){this.a6=null,this.G=0,this.Z=0,this.a6=q,this.G=Q,this.Z=Z}K=z4.prototype=new L1;K.constructor=z4;function vG(){}vG.prototype=K;K.z=function(){var q=this.a6.z();if(q<0)return-1;else{var Z=q-this.Z|0,Q=Z<0?0:Z;if(this.G<0)return Q;else{var F=this.G;return F<Q?F:Q}}};K.s=function(){return sZ(this),this.G!==0&&this.a6.s()};K.f=function(){if(sZ(this),this.G>0)return this.G=-1+this.G|0,this.a6.f();else return this.G<0?this.a6.f():i().w.f()};K.bp=function(q,Z){var Q=q>0?q:0;if(Z<0)var F=dq(this,Q);else if(Z<=Q)var F=0;else if(this.G<0)var F=Z-Q|0;else var w=dq(this,Q),J=Z-Q|0,F=w<J?w:J;var G=this.Z+Q|0;if(F===0)return i().w;else if(G<0)return this.Z=2147483647,this.G=0,sJ(this,new e3(()=>new z4(this.a6,-2147483647+G|0,F)));else return this.Z=G,this.G=F,this};var OL=new H().i(z4,"scala.collection.Iterator$SliceIterator",{ds:1,r:1,s:1,b:1,c:1});function nZ(q,Z){if(Z<0)throw _5(new Q2,""+Z);var Q=q.g0(Z);if(Q.i())throw _5(new Q2,""+Z);return Q.a0()}function dG(q,Z){return _z(Z)?mG(q,q,Z):T7(q,Z)}function mG(q,Z,Q){while(!0)if(Z===Q)return!0;else if(!Z.i()&&!Q.i()&&I0().J(Z.a0(),Q.a0())){var F=Z.W(),w=Q.W();Z=F,Q=w}else return Z.i()&&Q.i()}function Y8(q){this.b7=null,this.b7=q}K=Y8.prototype=new L1;K.constructor=Y8;function cG(){}cG.prototype=K;K.s=function(){return!this.b7.i()};K.f=function(){var q=this.b7.a0();return this.b7=this.b7.W(),q};var WL=new H().i(Y8,"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{dx:1,r:1,s:1,b:1,c:1});function H8(){this.bD=null,NG(this,sG())}K=H8.prototype=new dZ;K.constructor=H8;function pG(){}pG.prototype=K;var AL=new H().i(H8,"scala.collection.mutable.Buffer$",{dH:1,du:1,a5:1,Z:1,a:1}),n6;function oZ(){if(!n6)n6=new H8;return n6}function v1(q){this.b9=0,this.ep=0,this.eq=null,this.eq=q,this.b9=0,this.ep=q.ah()}K=v1.prototype=new L1;K.constructor=v1;function iG(){}iG.prototype=K;K.s=function(){return this.b9<this.ep};K.f=function(){var q=this.eq.ai(this.b9);return this.b9=1+this.b9|0,q};var IL=new H().i(v1,"scala.runtime.ScalaRunTime$$anon$1",{e7:1,r:1,s:1,b:1,c:1});function U8(){}K=U8.prototype=new L;K.constructor=U8;function lG(){}lG.prototype=K;K.cs=function(q){return this.f2(q)};K.f2=function(q){return M7(NX(new P8),q).fb()};K.cx=function(q){return this.f2(q)};var EL=new H().i(U8,"scala.scalajs.js.WrappedArray$",{ed:1,dy:1,a5:1,Z:1,a:1}),o6;function sG(){if(!o6)o6=new U8;return o6}class B8 extends $Z{constructor(q,Z){super();this.aE=null,this.aD=0,this.aE=q,this.aD=Z,t0(this,"Transaction depth exceeded maxDepth = "+Z+": Execution of "+q+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aU(){return new G8(this)}p(){var q=-889275714;return q=A().b(q,x0("TransactionDepthExceeded")),q=A().b(q,A().x(this.aE)),q=A().b(q,this.aD),A().l(q,2)}h(q){if(this===q)return!0;else if(q instanceof B8)if(this.aD===q.aD){var Z=this.aE,Q=q.aE;return Z===Q}else return!1;else return!1}ah(){return 2}aj(){return"TransactionDepthExceeded"}ai(q){if(q===0)return this.aE;if(q===1)return this.aD;throw _5(new Q2,""+q)}u(){return"TransactionDepthExceeded: "+this.aE+"; maxDepth: "+this.aD}}var $L=new H().i(B8,"com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded",{a7:1,b3:1,u:1,a:1,d:1,T:1});function M8(q){this.aq=null,this.ar=null,this.di=null,this.dj=!1,K4(this,q,d1())}K=M8.prototype=new O2;K.constructor=M8;function nG(){}nG.prototype=K;K.eM=function(){if(!this.dj)this.di=this.m("column"),this.dj=!0;return this.di};var RL=new H().i(M8,"com.raquo.laminar.defs.styles.StyleProps$$anon$30",{bJ:1,W:1,I:1,U:1,V:1,bN:1});function N8(q){this.aq=null,this.ar=null,this.dk=null,this.dl=!1,K4(this,q,d1())}K=N8.prototype=new O2;K.constructor=N8;function oG(){}oG.prototype=K;K.fe=function(){if(!this.dl)this.dk=this.m("wrap"),this.dl=!0;return this.dk};var SL=new H().i(N8,"com.raquo.laminar.defs.styles.StyleProps$$anon$31",{bK:1,W:1,I:1,U:1,V:1,bP:1});function L8(q,Z){this.by=null,this.aI=null,this.bW=null,this.dy=null,this.Q=null,this.dy=q,this.Q=Z,this.by=B0(),YZ(this),OG(this)}K=L8.prototype=new L;K.constructor=L8;function rG(){}rG.prototype=K;K.aO=function(q){G7().cr(q,this,void 0)};K.bI=function(){return this.aI};K.eO=function(q){this.aI=q};K.u=function(){return"ReactiveHtmlElement("+(this.Q!==null?this.Q.outerHTML:"tag="+this.dy.cA())+")"};K.cD=function(){return this.Q};var b5=new H().i(L8,"com.raquo.laminar.nodes.ReactiveHtmlElement",{cc:1,ac:1,X:1,c9:1,ab:1,cb:1});function aG(q,Z){return Object.is(q,Z)}function rZ(q){return eq().cB(q)}var tG=new H().i(0,"java.lang.Double",{ak:1,S:1,a:1,Q:1,M:1,Y:1},(q)=>typeof q==="number");var eG=new H().i(0,"java.lang.Float",{cy:1,S:1,a:1,Q:1,M:1,Y:1},(q)=>Q7(q));var qz=new H().i(0,"java.lang.Integer",{cB:1,S:1,a:1,Q:1,M:1,Y:1},(q)=>Z7(q));function Zz(q,Z){return Z instanceof E&&(q.c===Z.c&&q.d===Z.d)}function Qz(q){return q.c^q.d}var Kz=new H().i(0,"java.lang.Long",{am:1,S:1,a:1,Q:1,M:1,Y:1},(q)=>q instanceof E);function x0(q){var Z=0,Q=1,F=-1+q.length|0;while(F>=0)Z=Z+Math.imul(q.charCodeAt(F),Q)|0,Q=Math.imul(31,Q),F=-1+F|0;return Z}function Fz(q,Z){return q===Z}var aZ=new H().i(0,"java.lang.String",{cI:1,a:1,Q:1,a4:1,M:1,Y:1},(q)=>typeof q==="string");class A7 extends Q2{constructor(){super();t0(this,null,null,!0,!0)}}var yL=new H().i(A7,"java.lang.StringIndexOutOfBoundsException",{cL:1,al:1,R:1,L:1,u:1,a:1});function V8(){}K=V8.prototype=new W7;K.constructor=V8;function wz(){}wz.prototype=K;K.gk=function(){throw new w4("None.get")};K.aj=function(){return"None"};K.ah=function(){return 0};K.ai=function(q){return A().bm(q)};K.aU=function(){return new v1(this)};K.p=function(){return 2433880};K.u=function(){return"None"};K.y=function(){this.gk()};var PL=new H().i(V8,"scala.None$",{d1:1,ar:1,b:1,T:1,d:1,a:1}),r6;function B0(){if(!r6)r6=new V8;return r6}function o0(q){this.b3=null,this.b3=q}K=o0.prototype=new W7;K.constructor=o0;function Jz(){}Jz.prototype=K;K.y=function(){return this.b3};K.aj=function(){return"Some"};K.ah=function(){return 1};K.ai=function(q){return q===0?this.b3:A().bm(q)};K.aU=function(){return new v1(this)};K.p=function(){return m().fa(this,-889275714,!1)};K.u=function(){return O().fC(this)};K.h=function(q){return this===q||q instanceof o0&&I0().J(this.b3,q.b3)};var jL=new H().i(o0,"scala.Some",{as:1,ar:1,b:1,T:1,d:1,a:1});function tZ(){}K=tZ.prototype=new L;K.constructor=tZ;function I7(){}I7.prototype=K;K.aQ=function(){return this.aV()};K.Y=function(q){ew(this,q)};K.ba=function(q,Z,Q,F){return GZ(this,q,Z,Q,F)};K.z=function(){return-1};function q1(q,Z){return q.F=Z,q.e=0,q.A=k2().aR(q.F),q}function X4(){this.F=null,this.e=0,this.A=0}K=X4.prototype=new L1;K.constructor=X4;function V1(){}V1.prototype=K;K.z=function(){return this.A-this.e|0};K.s=function(){return this.e<this.A};K.f=function(){if(this.e>=k2().aR(this.F))i().w.f();var q=O().aP(this.F,this.e);return this.e=1+this.e|0,q};K.bH=function(q){if(q>0){var Z=this.e+q|0;if(Z<0)var Q=this.A;else var F=this.A,Q=F<Z?F:Z;this.e=Q}return this};var CL=new H().i(X4,"scala.collection.ArrayOps$ArrayIterator",{N:1,r:1,s:1,b:1,c:1,a:1});function mq(q,Z){return Z<0?0:Z>q.R?q.R:Z}function A2(q){this.ej=null,this.a4=0,this.R=0,this.ej=q,this.a4=0,this.R=q.j()}K=A2.prototype=new L1;K.constructor=A2;function Gz(){}Gz.prototype=K;K.z=function(){return this.R};K.s=function(){return this.R>0};K.f=function(){if(this.R>0){var q=this.ej.o(this.a4);return this.a4=1+this.a4|0,this.R=-1+this.R|0,q}else return i().w.f()};K.bH=function(q){if(q>0){this.a4=this.a4+q|0;var Z=this.R-q|0;this.R=Z<0?0:Z}return this};K.bp=function(q,Z){var Q=mq(this,q),F=mq(this,Z),w=F-Q|0;return this.R=w<0?0:w,this.a4=this.a4+Q|0,this};var fL=new H().i(A2,"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{dm:1,r:1,s:1,b:1,c:1,a:1});function zz(q){if(!q.cl)q.cm=new w2(new $0(0)),q.cl=!0;return q.cm}function Xz(q){return!q.cl?zz(q):q.cm}function k8(){this.cm=null,this.ft=null,this.cl=!1,y5=this,this.ft=new J4(this)}K=k8.prototype=new L;K.constructor=k8;function Yz(){}Yz.prototype=K;K.gh=function(q,Z){return q instanceof R7?q:this.hr(x3().f0(q,Z))};K.hr=function(q){if(q===null)return null;else if(q instanceof $0)return new w2(q);else if(q instanceof a0)return new I2(q);else if(q instanceof N1)return new A4(q);else if(q instanceof B1)return new E4(q);else if(q instanceof M1)return new I4(q);else if(q instanceof Y1)return new W4(q);else if(q instanceof H1)return new O4(q);else if(q instanceof U1)return new $4(q);else if(q instanceof X1)return new D4(q);else if(ZZ(q,1))return new R4(q);else throw new y1(q)};K.cw=function(q,Z){return this.gh(q,Z)};var _L=new H().i(k8,"scala.collection.immutable.ArraySeq$",{dB:1,ay:1,au:1,at:1,av:1,a:1}),y5;function Hz(){if(!y5)y5=new k8;return y5}function T8(){this.fu=null,this.em=null,P5=this,this.fu=new J4(this),this.em=new J2(new $0(0))}K=T8.prototype=new L;K.constructor=T8;function Uz(){}Uz.prototype=K;K.gi=function(q,Z){return this.gF(x3().f0(q,Z))};K.gF=function(q){if(q===null)return null;else if(q instanceof $0)return new J2(q);else if(q instanceof a0)return new C4(q);else if(q instanceof N1)return new P4(q);else if(q instanceof B1)return new f4(q);else if(q instanceof M1)return new j4(q);else if(q instanceof Y1)return new E2(q);else if(q instanceof H1)return new y4(q);else if(q instanceof U1)return new _4(q);else if(q instanceof X1)return new S4(q);else if(ZZ(q,1))return new b4(q);else throw new y1(q)};K.cw=function(q,Z){return this.gi(q,Z)};var bL=new H().i(T8,"scala.collection.mutable.ArraySeq$",{dF:1,ay:1,au:1,at:1,av:1,a:1}),P5;function Bz(){if(!P5)P5=new T8;return P5}function D8(q){this.aq=null,this.ar=null,this.de=null,this.df=!1,K4(this,q,d1())}K=D8.prototype=new O2;K.constructor=D8;function Mz(){}Mz.prototype=K;K.cv=function(){if(!this.df)this.de=this.m("flex"),this.df=!0;return this.de};var xL=new H().i(D8,"com.raquo.laminar.defs.styles.StyleProps$$anon$28",{bH:1,W:1,I:1,U:1,V:1,bQ:1,bM:1});function O8(q){this.aq=null,this.ar=null,this.dg=null,this.dh=!1,K4(this,q,d1())}K=O8.prototype=new O2;K.constructor=O8;function Nz(){}Nz.prototype=K;K.fO=function(){if(!this.dh)this.dg=this.m("center"),this.dh=!0;return this.dg};var gL=new H().i(O8,"com.raquo.laminar.defs.styles.StyleProps$$anon$3",{bI:1,W:1,I:1,U:1,V:1,bR:1,bO:1});function W8(q){this.aq=null,this.ar=null,this.dm=null,this.dn=!1,K4(this,q,d1())}K=W8.prototype=new O2;K.constructor=W8;function Lz(){}Lz.prototype=K;K.cC=function(){if(!this.dn)this.dm=MJ(this),this.dn=!0;return this.dm};var hL=new H().i(W8,"com.raquo.laminar.defs.styles.StyleProps$$anon$5",{bL:1,W:1,I:1,U:1,V:1,bS:1,bT:1});function Vz(q,Z,Q,F){return EG(q,Z),q}function eZ(){}K=eZ.prototype=new iZ;K.constructor=eZ;function qQ(){}qQ.prototype=K;function Y4(q){this.F=null,this.e=0,this.A=0,this.cb=null,this.cb=q,q1(this,q)}K=Y4.prototype=new V1;K.constructor=Y4;function kz(){}kz.prototype=K;K.gM=function(){if(this.e>=this.cb.a.length)i().w.f();var q=this.cb.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gM()};var uL=new H().i(Y4,"scala.collection.ArrayOps$ArrayIterator$mcB$sp",{d9:1,N:1,r:1,s:1,b:1,c:1,a:1});function H4(q){this.F=null,this.e=0,this.A=0,this.cc=null,this.cc=q,q1(this,q)}K=H4.prototype=new V1;K.constructor=H4;function Tz(){}Tz.prototype=K;K.gN=function(){if(this.e>=this.cc.a.length)i().w.f();var q=this.cc.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return z1(this.gN())};var vL=new H().i(H4,"scala.collection.ArrayOps$ArrayIterator$mcC$sp",{da:1,N:1,r:1,s:1,b:1,c:1,a:1});function U4(q){this.F=null,this.e=0,this.A=0,this.cd=null,this.cd=q,q1(this,q)}K=U4.prototype=new V1;K.constructor=U4;function Dz(){}Dz.prototype=K;K.gO=function(){if(this.e>=this.cd.a.length)i().w.f();var q=this.cd.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gO()};var dL=new H().i(U4,"scala.collection.ArrayOps$ArrayIterator$mcD$sp",{db:1,N:1,r:1,s:1,b:1,c:1,a:1});function B4(q){this.F=null,this.e=0,this.A=0,this.ce=null,this.ce=q,q1(this,q)}K=B4.prototype=new V1;K.constructor=B4;function Oz(){}Oz.prototype=K;K.gP=function(){if(this.e>=this.ce.a.length)i().w.f();var q=this.ce.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gP()};var mL=new H().i(B4,"scala.collection.ArrayOps$ArrayIterator$mcF$sp",{dc:1,N:1,r:1,s:1,b:1,c:1,a:1});function M4(q){this.F=null,this.e=0,this.A=0,this.cf=null,this.cf=q,q1(this,q)}K=M4.prototype=new V1;K.constructor=M4;function Wz(){}Wz.prototype=K;K.gQ=function(){if(this.e>=this.cf.a.length)i().w.f();var q=this.cf.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gQ()};var cL=new H().i(M4,"scala.collection.ArrayOps$ArrayIterator$mcI$sp",{dd:1,N:1,r:1,s:1,b:1,c:1,a:1});function N4(q){this.F=null,this.e=0,this.A=0,this.cg=null,this.cg=q,q1(this,q)}K=N4.prototype=new V1;K.constructor=N4;function Az(){}Az.prototype=K;K.gR=function(){if(this.e>=this.cg.a.length)i().w.f();var q=this.cg.a[this.e],Z=q.c,Q=q.d;return this.e=1+this.e|0,new E(Z,Q)};K.f=function(){return this.gR()};var pL=new H().i(N4,"scala.collection.ArrayOps$ArrayIterator$mcJ$sp",{de:1,N:1,r:1,s:1,b:1,c:1,a:1});function L4(q){this.F=null,this.e=0,this.A=0,this.ch=null,this.ch=q,q1(this,q)}K=L4.prototype=new V1;K.constructor=L4;function Iz(){}Iz.prototype=K;K.gS=function(){if(this.e>=this.ch.a.length)i().w.f();var q=this.ch.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gS()};var iL=new H().i(L4,"scala.collection.ArrayOps$ArrayIterator$mcS$sp",{df:1,N:1,r:1,s:1,b:1,c:1,a:1});function V4(q){this.F=null,this.e=0,this.A=0,this.ei=null,this.ei=q,q1(this,q)}K=V4.prototype=new V1;K.constructor=V4;function Ez(){}Ez.prototype=K;K.gT=function(){if(this.e>=this.ei.a.length)i().w.f();this.e=1+this.e|0};K.f=function(){this.gT()};var lL=new H().i(V4,"scala.collection.ArrayOps$ArrayIterator$mcV$sp",{dg:1,N:1,r:1,s:1,b:1,c:1,a:1});function k4(q){this.F=null,this.e=0,this.A=0,this.ci=null,this.ci=q,q1(this,q)}K=k4.prototype=new V1;K.constructor=k4;function $z(){}$z.prototype=K;K.gU=function(){if(this.e>=this.ci.a.length)i().w.f();var q=this.ci.a[this.e];return this.e=1+this.e|0,q};K.f=function(){return this.gU()};var sL=new H().i(k4,"scala.collection.ArrayOps$ArrayIterator$mcZ$sp",{dh:1,N:1,r:1,s:1,b:1,c:1,a:1});function Rz(q){return q.aQ()+"(<not computed>)"}function ZQ(){}K=ZQ.prototype=new L;K.constructor=ZQ;function QQ(){}QQ.prototype=K;class U0 extends S1{constructor(q){super();this.S=null,this.S=q,t0(this,null,null,!0,!0)}bl(){return pq(this.S)}aj(){return"JavaScriptException"}ah(){return 1}ai(q){return q===0?this.S:A().bm(q)}aU(){return new v1(this)}p(){return m().fa(this,-889275714,!1)}h(q){return this===q||q instanceof U0&&I0().J(this.S,q.S)}}var nL=new H().i(U0,"scala.scalajs.js.JavaScriptException",{b2:1,R:1,L:1,u:1,a:1,T:1,d:1});function Sz(q,Z){if(typeof console<"u")if(q.e6&&!!console.error)console.error(Z);else console.log(Z)}function r2(q){this.e6=!1,this.b0=null,this.e6=q,Vz(this,new J8,!1,null),this.b0=""}K=r2.prototype=new qQ;K.constructor=r2;function yz(){}yz.prototype=K;K.gB=function(q){var Z=q;while(Z!==""){var Q=Z,F=Q.indexOf(`
`)|0;if(F<0)this.b0=""+this.b0+Z,Z="";else{var w=this.b0,J=Z;Sz(this,""+w+J.substring(0,F)),this.b0="";var G=Z,X=1+F|0;Z=G.substring(X)}}};var oL=new H().i(r2,"java.lang.JSConsoleBasedPrintStream",{cC:1,ct:1,cs:1,ag:1,ae:1,ai:1,af:1,ah:1});function Pz(q,Z,Q){while(!0)if(Z<=0||Q.i())return Q;else{var F=-1+Z|0,w=Q.W();Z=F,Q=w}}function KQ(){this.cn=null}K=KQ.prototype=new QQ;K.constructor=KQ;function FQ(){}FQ.prototype=K;K.u=function(){return this.cn};K.h=function(q){return this===q};K.p=function(){return q7(this)};function wQ(){}K=wQ.prototype=new I7;K.constructor=wQ;function JQ(){}JQ.prototype=K;K.u=function(){return Rz(this)};function A8(){this.cn=null,this.cn="Any"}K=A8.prototype=new FQ;K.constructor=A8;function jz(){}jz.prototype=K;K.h7=function(){return n0.l()};K.gK=function(q){return new $0(q)};var rL=new H().i(A8,"scala.reflect.ManifestFactory$AnyManifest$",{dT:1,dV:1,dU:1,dS:1,dR:1,dQ:1,dW:1,a:1,d:1}),a6;function GQ(){if(!a6)a6=new A8;return a6}function R0(q,Z){if(q===Z)return!0;else{if(Cz(Z)){if(Z.eK(q))return q.cF(Z)}return!1}}function Cz(q){return!!(q&&q.$classData&&q.$classData.n.f)}function zQ(){}K=zQ.prototype=new I7;K.constructor=zQ;function E7(){}E7.prototype=K;K.eK=function(q){return!0};K.h=function(q){return R0(this,q)};K.p=function(){return m().h8(this)};K.u=function(){return _G(this)};K.i=function(){return LG(this)};K.cF=function(q){return T7(this,q)};function XQ(){}K=XQ.prototype=new JQ;K.constructor=XQ;function YQ(){}YQ.prototype=K;function fz(q){return!!(q&&q.$classData&&q.$classData.n.n)}function _z(q){return!!(q&&q.$classData&&q.$classData.n.a0)}function bz(q){}function xz(q,Z){return q.b6=Z,q}function HQ(){this.b6=null}K=HQ.prototype=new YQ;K.constructor=HQ;function UQ(){}UQ.prototype=K;K.o=function(q){return this.b6.o(q)};K.j=function(){return this.b6.j()};K.i=function(){return this.b6.i()};function I8(){this.d2=null,this.d3=!1,this.dc=null,this.dd=!1,this.cY=null,this.cZ=!1,this.d0=null,this.d1=!1,this.d4=null,this.d5=!1,this.d6=null,this.d7=!1,this.d8=null,this.d9=!1,this.fh=null,this.fg=null,this.da=null,this.db=!1,Zw(this),tF(this),rF(this),aF(this),bz(this)}K=I8.prototype=new L;K.constructor=I8;function gz(){}gz.prototype=K;K.cu=function(){if(!this.d3)this.d2=HZ(new C3,"div",!1),this.d3=!0;return this.d2};K.aX=function(){if(!this.dd)this.dc=new S3("value",s0().ao),this.dd=!0;return this.dc};K.fF=function(){if(!this.cZ)this.cY=new O8("align-items"),this.cZ=!0;return this.cY};K.ct=function(){if(!this.d1)this.d0=new D8("display"),this.d1=!0;return this.d0};K.eY=function(){if(!this.d5)this.d4=new M8("flex-direction"),this.d5=!0;return this.d4};K.eZ=function(){if(!this.d7)this.d6=new N8("flex-wrap"),this.d7=!0;return this.d6};K.cy=function(){if(!this.d9)this.d8=new W8("gap"),this.d9=!0;return this.d8};K.hj=function(){if(!this.db)this.da=new Q8(this),this.db=!0;return this.da};var aL=new H().i(I8,"com.raquo.laminar.api.package$$anon$1",{bw:1,bU:1,bA:1,bF:1,bE:1,bG:1,bC:1,bu:1,bq:1,bt:1,a9:1,aa:1,a8:1,br:1});function T4(q){this.b6=null,xz(this,q)}K=T4.prototype=new UQ;K.constructor=T4;function hz(){}hz.prototype=K;K.n=function(){return new A2(this)};K.aV=function(){return"IndexedSeqView"};K.aS=function(q){var Z=this.j();return Z===q?0:Z<q?-1:1};K.z=function(){return this.j()};var tL=new H().i(T4,"scala.collection.IndexedSeqView$Id",{dl:1,dw:1,d6:1,d7:1,h:1,i:1,b:1,k:1,c:1,j:1,dz:1,a:1,dv:1,l:1,dk:1,o:1});function BQ(){}K=BQ.prototype=new E7;K.constructor=BQ;function $7(){}$7.prototype=K;function uz(q,Z){return!MQ(Z)||q.j()===Z.j()}function vz(q,Z){if(MQ(Z))if(q===Z)return!0;else{var Q=q.j(),F=Q===Z.j();if(F){var w=0,J=q.ez(),G=Z.ez(),X=J<G?J:G,z=Q>>31,Y=X>>31,U=X<<1,M=X>>>31|0|Y<<1;if(z===M?(-2147483648^Q)>(-2147483648^U):z>M)var k=X;else var k=Q;while(w<k&&F)F=I0().J(q.o(w),Z.o(w)),w=1+w|0;if(w<Q&&F){var V=q.n().bH(w),T=Z.n().bH(w);while(F&&V.s())F=I0().J(V.f(),T.f())}}return F}else return T7(q,Z)}function MQ(q){return!!(q&&q.$classData&&q.$classData.n.w)}function NQ(){}K=NQ.prototype=new E7;K.constructor=NQ;function E8(){}E8.prototype=K;function LQ(){}K=LQ.prototype=new E8;K.constructor=LQ;function VQ(){}VQ.prototype=K;K.ex=function(q){return M7(this,q)};function R7(){}K=R7.prototype=new $7;K.constructor=R7;function Z1(){}Z1.prototype=K;K.eK=function(q){return uz(this,q)};K.cF=function(q){return vz(this,q)};K.aV=function(){return"IndexedSeq"};K.aS=function(q){var Z=this.j();return Z===q?0:Z<q?-1:1};K.z=function(){return this.j()};K.aQ=function(){return"ArraySeq"};K.ez=function(){return 2147483647};function S0(){}K=S0.prototype=new E8;K.constructor=S0;function Q1(){}Q1.prototype=K;K.aV=function(){return"IndexedSeq"};K.aS=function(q){var Z=this.j();return Z===q?0:Z<q?-1:1};K.z=function(){return this.j()};K.aQ=function(){return"ArraySeq"};K.h=function(q){if(q instanceof S0){if(k2().aR(this.T())!==k2().aR(q.T()))return!1}return R0(this,q)};function D4(q){this.as=null,this.as=q}K=D4.prototype=new Z1;K.constructor=D4;function dz(){}dz.prototype=K;K.j=function(){return this.as.a.length};K.p=function(){var q=m();return q.eJ(this.as,q.v)};K.h=function(q){return q instanceof D4?Z0().eW(this.as,q.as):R0(this,q)};K.n=function(){return new k4(this.as)};K.bj=function(q){return this.as.a[q]};K.g=function(q){return this.bj(q|0)};K.o=function(q){return this.bj(q)};var eL=new H().i(D4,"scala.collection.immutable.ArraySeq$ofBoolean",{aB:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function O4(q){this.at=null,this.at=q}K=O4.prototype=new Z1;K.constructor=O4;function mz(){}mz.prototype=K;K.j=function(){return this.at.a.length};K.bb=function(q){return this.at.a[q]};K.p=function(){var q=m();return q.eB(this.at,q.v)};K.h=function(q){return q instanceof O4?Z0().eP(this.at,q.at):R0(this,q)};K.n=function(){return new Y4(this.at)};K.g=function(q){return this.bb(q|0)};K.o=function(q){return this.bb(q)};var qV=new H().i(O4,"scala.collection.immutable.ArraySeq$ofByte",{aC:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function W4(q){this.a7=null,this.a7=q}K=W4.prototype=new Z1;K.constructor=W4;function cz(){}cz.prototype=K;K.j=function(){return this.a7.a.length};K.bc=function(q){return this.a7.a[q]};K.p=function(){var q=m();return q.eC(this.a7,q.v)};K.h=function(q){return q instanceof W4?Z0().eQ(this.a7,q.a7):R0(this,q)};K.n=function(){return new H4(this.a7)};K.ba=function(q,Z,Q,F){return new E2(this.a7).ba(q,Z,Q,F)};K.g=function(q){return z1(this.bc(q|0))};K.o=function(q){return z1(this.bc(q))};var ZV=new H().i(W4,"scala.collection.immutable.ArraySeq$ofChar",{aD:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function A4(q){this.au=null,this.au=q}K=A4.prototype=new Z1;K.constructor=A4;function pz(){}pz.prototype=K;K.j=function(){return this.au.a.length};K.p=function(){var q=m();return q.eD(this.au,q.v)};K.h=function(q){return q instanceof A4?Z0().eR(this.au,q.au):R0(this,q)};K.n=function(){return new U4(this.au)};K.be=function(q){return this.au.a[q]};K.g=function(q){return this.be(q|0)};K.o=function(q){return this.be(q)};var QV=new H().i(A4,"scala.collection.immutable.ArraySeq$ofDouble",{aE:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function I4(q){this.av=null,this.av=q}K=I4.prototype=new Z1;K.constructor=I4;function iz(){}iz.prototype=K;K.j=function(){return this.av.a.length};K.p=function(){var q=m();return q.eE(this.av,q.v)};K.h=function(q){return q instanceof I4?Z0().eS(this.av,q.av):R0(this,q)};K.n=function(){return new B4(this.av)};K.bf=function(q){return this.av.a[q]};K.g=function(q){return this.bf(q|0)};K.o=function(q){return this.bf(q)};var KV=new H().i(I4,"scala.collection.immutable.ArraySeq$ofFloat",{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function I2(q){this.aw=null,this.aw=q}K=I2.prototype=new Z1;K.constructor=I2;function lz(){}lz.prototype=K;K.j=function(){return this.aw.a.length};K.p=function(){var q=m();return q.eF(this.aw,q.v)};K.h=function(q){return q instanceof I2?Z0().eT(this.aw,q.aw):R0(this,q)};K.n=function(){return new M4(this.aw)};K.bg=function(q){return this.aw.a[q]};K.g=function(q){return this.bg(q|0)};K.o=function(q){return this.bg(q)};var FV=new H().i(I2,"scala.collection.immutable.ArraySeq$ofInt",{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function E4(q){this.ax=null,this.ax=q}K=E4.prototype=new Z1;K.constructor=E4;function sz(){}sz.prototype=K;K.j=function(){return this.ax.a.length};K.p=function(){var q=m();return q.eG(this.ax,q.v)};K.h=function(q){return q instanceof E4?Z0().eU(this.ax,q.ax):R0(this,q)};K.n=function(){return new N4(this.ax)};K.bh=function(q){return this.ax.a[q]};K.g=function(q){return this.bh(q|0)};K.o=function(q){return this.bh(q)};var wV=new H().i(E4,"scala.collection.immutable.ArraySeq$ofLong",{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function w2(q){this.ay=null,this.ay=q}K=w2.prototype=new Z1;K.constructor=w2;function nz(){}nz.prototype=K;K.j=function(){return this.ay.a.length};K.o=function(q){return this.ay.a[q]};K.p=function(){var q=m();return q.eA(this.ay,q.v)};K.h=function(q){return q instanceof w2?x3().eX(this.ay,q.ay):R0(this,q)};K.n=function(){return q1(new X4,this.ay)};K.g=function(q){return this.o(q|0)};var JV=new H().i(w2,"scala.collection.immutable.ArraySeq$ofRef",{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function $4(q){this.az=null,this.az=q}K=$4.prototype=new Z1;K.constructor=$4;function oz(){}oz.prototype=K;K.j=function(){return this.az.a.length};K.bd=function(q){return this.az.a[q]};K.p=function(){var q=m();return q.eH(this.az,q.v)};K.h=function(q){return q instanceof $4?Z0().eV(this.az,q.az):R0(this,q)};K.n=function(){return new L4(this.az)};K.g=function(q){return this.bd(q|0)};K.o=function(q){return this.bd(q)};var GV=new H().i($4,"scala.collection.immutable.ArraySeq$ofShort",{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function R4(q){this.aN=null,this.aN=q}K=R4.prototype=new Z1;K.constructor=R4;function rz(){}rz.prototype=K;K.j=function(){return this.aN.a.length};K.p=function(){var q=m();return q.eI(this.aN,q.v)};K.h=function(q){return q instanceof R4?this.aN.a.length===q.aN.a.length:R0(this,q)};K.n=function(){return new V4(this.aN)};K.bi=function(q){};K.g=function(q){this.bi(q|0)};K.o=function(q){this.bi(q)};var zV=new H().i(R4,"scala.collection.immutable.ArraySeq$ofUnit",{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function az(q,Z,Q,F){while(!0)if(Z===F)return Q.i()?0:1;else if(Q.i())return-1;else{var w=1+Z|0,J=Q.W();Z=w,Q=J}}function tz(q,Z,Q){while(!0)if(Z===Q)return!0;else{var F=Z.i(),w=Q.i();if(!(F||w)&&I0().J(Z.a0(),Q.a0())){var J=Z.W(),G=Q.W();Z=J,Q=G}else return F&&w}}function $8(){}K=$8.prototype=new $7;K.constructor=$8;function S7(){}S7.prototype=K;K.n=function(){return new Y8(this)};K.aV=function(){return"LinearSeq"};K.o=function(q){return nZ(this,q)};K.cF=function(q){return dG(this,q)};K.i=function(){return this===d1()};K.Y=function(q){var Z=this;while(!Z.i())q.g(Z.a0()),Z=Z.W()};K.j=function(){var q=this,Z=0;while(!q.i())Z=1+Z|0,q=q.W();return Z};K.aS=function(q){return q<0?1:az(this,0,this,q)};K.aQ=function(){return"List"};K.h=function(q){return q instanceof $8?tz(this,this,q):R0(this,q)};K.g=function(q){return nZ(this,q|0)};K.g0=function(q){return Pz(this,q,this)};function S4(q){this.a8=null,this.a8=q}K=S4.prototype=new Q1;K.constructor=S4;function ez(){}ez.prototype=K;K.j=function(){return this.a8.a.length};K.p=function(){var q=m();return q.eJ(this.a8,q.v)};K.h=function(q){return q instanceof S4?Z0().eW(this.a8,q.a8):S0.prototype.h.call(this,q)};K.n=function(){return new k4(this.a8)};K.bj=function(q){return this.a8.a[q]};K.g=function(q){return this.bj(q|0)};K.o=function(q){return this.bj(q)};K.T=function(){return this.a8};var XV=new H().i(S4,"scala.collection.mutable.ArraySeq$ofBoolean",{aN:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function y4(q){this.a9=null,this.a9=q}K=y4.prototype=new Q1;K.constructor=y4;function qX(){}qX.prototype=K;K.j=function(){return this.a9.a.length};K.bb=function(q){return this.a9.a[q]};K.p=function(){var q=m();return q.eB(this.a9,q.v)};K.h=function(q){return q instanceof y4?Z0().eP(this.a9,q.a9):S0.prototype.h.call(this,q)};K.n=function(){return new Y4(this.a9)};K.g=function(q){return this.bb(q|0)};K.o=function(q){return this.bb(q)};K.T=function(){return this.a9};var YV=new H().i(y4,"scala.collection.mutable.ArraySeq$ofByte",{aO:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function E2(q){this.O=null,this.O=q}K=E2.prototype=new Q1;K.constructor=E2;function ZX(){}ZX.prototype=K;K.j=function(){return this.O.a.length};K.bc=function(q){return this.O.a[q]};K.p=function(){var q=m();return q.eC(this.O,q.v)};K.h=function(q){return q instanceof E2?Z0().eQ(this.O,q.O):S0.prototype.h.call(this,q)};K.n=function(){return new H4(this.O)};K.ba=function(q,Z,Q,F){var w=q.H;if(Z.length!==0)w.q=""+w.q+Z;var J=this.O.a.length;if(J!==0)if(Q==="")w.fH(this.O);else{w.j();var G=this.O.a[0],X=""+C5(G);w.q=w.q+X;var z=1;while(z<J){w.q=""+w.q+Q;var Y=this.O.a[z],U=""+C5(Y);w.q=w.q+U,z=1+z|0}}if(F.length!==0)w.q=""+w.q+F;return q};K.g=function(q){return z1(this.bc(q|0))};K.o=function(q){return z1(this.bc(q))};K.T=function(){return this.O};var HV=new H().i(E2,"scala.collection.mutable.ArraySeq$ofChar",{aP:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function P4(q){this.aa=null,this.aa=q}K=P4.prototype=new Q1;K.constructor=P4;function QX(){}QX.prototype=K;K.j=function(){return this.aa.a.length};K.p=function(){var q=m();return q.eD(this.aa,q.v)};K.h=function(q){return q instanceof P4?Z0().eR(this.aa,q.aa):S0.prototype.h.call(this,q)};K.n=function(){return new U4(this.aa)};K.be=function(q){return this.aa.a[q]};K.g=function(q){return this.be(q|0)};K.o=function(q){return this.be(q)};K.T=function(){return this.aa};var UV=new H().i(P4,"scala.collection.mutable.ArraySeq$ofDouble",{aQ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function j4(q){this.ab=null,this.ab=q}K=j4.prototype=new Q1;K.constructor=j4;function KX(){}KX.prototype=K;K.j=function(){return this.ab.a.length};K.p=function(){var q=m();return q.eE(this.ab,q.v)};K.h=function(q){return q instanceof j4?Z0().eS(this.ab,q.ab):S0.prototype.h.call(this,q)};K.n=function(){return new B4(this.ab)};K.bf=function(q){return this.ab.a[q]};K.g=function(q){return this.bf(q|0)};K.o=function(q){return this.bf(q)};K.T=function(){return this.ab};var BV=new H().i(j4,"scala.collection.mutable.ArraySeq$ofFloat",{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function C4(q){this.ac=null,this.ac=q}K=C4.prototype=new Q1;K.constructor=C4;function FX(){}FX.prototype=K;K.j=function(){return this.ac.a.length};K.p=function(){var q=m();return q.eF(this.ac,q.v)};K.h=function(q){return q instanceof C4?Z0().eT(this.ac,q.ac):S0.prototype.h.call(this,q)};K.n=function(){return new M4(this.ac)};K.bg=function(q){return this.ac.a[q]};K.g=function(q){return this.bg(q|0)};K.o=function(q){return this.bg(q)};K.T=function(){return this.ac};var MV=new H().i(C4,"scala.collection.mutable.ArraySeq$ofInt",{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function f4(q){this.ad=null,this.ad=q}K=f4.prototype=new Q1;K.constructor=f4;function wX(){}wX.prototype=K;K.j=function(){return this.ad.a.length};K.p=function(){var q=m();return q.eG(this.ad,q.v)};K.h=function(q){return q instanceof f4?Z0().eU(this.ad,q.ad):S0.prototype.h.call(this,q)};K.n=function(){return new N4(this.ad)};K.bh=function(q){return this.ad.a[q]};K.g=function(q){return this.bh(q|0)};K.o=function(q){return this.bh(q)};K.T=function(){return this.ad};var NV=new H().i(f4,"scala.collection.mutable.ArraySeq$ofLong",{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function J2(q){this.ae=null,this.ae=q}K=J2.prototype=new Q1;K.constructor=J2;function JX(){}JX.prototype=K;K.j=function(){return this.ae.a.length};K.o=function(q){return this.ae.a[q]};K.p=function(){var q=m();return q.eA(this.ae,q.v)};K.h=function(q){return q instanceof J2?x3().eX(this.ae,q.ae):S0.prototype.h.call(this,q)};K.n=function(){return q1(new X4,this.ae)};K.g=function(q){return this.o(q|0)};K.T=function(){return this.ae};var LV=new H().i(J2,"scala.collection.mutable.ArraySeq$ofRef",{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function _4(q){this.af=null,this.af=q}K=_4.prototype=new Q1;K.constructor=_4;function GX(){}GX.prototype=K;K.j=function(){return this.af.a.length};K.bd=function(q){return this.af.a[q]};K.p=function(){var q=m();return q.eH(this.af,q.v)};K.h=function(q){return q instanceof _4?Z0().eV(this.af,q.af):S0.prototype.h.call(this,q)};K.n=function(){return new L4(this.af)};K.g=function(q){return this.bd(q|0)};K.o=function(q){return this.bd(q)};K.T=function(){return this.af};var VV=new H().i(_4,"scala.collection.mutable.ArraySeq$ofShort",{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function b4(q){this.aA=null,this.aA=q}K=b4.prototype=new Q1;K.constructor=b4;function zX(){}zX.prototype=K;K.j=function(){return this.aA.a.length};K.p=function(){var q=m();return q.eI(this.aA,q.v)};K.h=function(q){return q instanceof b4?this.aA.a.length===q.aA.a.length:S0.prototype.h.call(this,q)};K.n=function(){return new V4(this.aA)};K.bi=function(q){};K.g=function(q){this.bi(q|0)};K.o=function(q){this.bi(q)};K.T=function(){return this.aA};var kV=new H().i(b4,"scala.collection.mutable.ArraySeq$ofUnit",{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function R8(q,Z){this.cj=null,this.ck=null,this.cj=q,this.ck=Z}K=R8.prototype=new S7;K.constructor=R8;function XX(){}XX.prototype=K;K.a0=function(){return this.cj};K.aj=function(){return"::"};K.ah=function(){return 2};K.ai=function(q){switch(q){case 0:return this.cj;case 1:return this.ck;default:return A().bm(q)}};K.aU=function(){return new v1(this)};K.W=function(){return this.ck};var TV=new H().i(R8,"scala.collection.immutable.$colon$colon",{dA:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});function S8(){}K=S8.prototype=new S7;K.constructor=S8;function YX(){}YX.prototype=K;K.gs=function(){throw new w4("head of empty list")};K.hn=function(){throw new O7("tail of empty list")};K.z=function(){return 0};K.n=function(){return i().w};K.aj=function(){return"Nil"};K.ah=function(){return 0};K.ai=function(q){return A().bm(q)};K.aU=function(){return new v1(this)};K.W=function(){this.hn()};K.a0=function(){this.gs()};var DV=new H().i(S8,"scala.collection.immutable.Nil$",{dD:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1}),t6;function d1(){if(!t6)t6=new S8;return t6}function HX(q,Z){return q.H=Z,q}function UX(q){return HX(q,new F8),q}function y8(){this.H=null}K=y8.prototype=new E8;K.constructor=y8;function BX(){}BX.prototype=K;K.aV=function(){return"IndexedSeq"};K.n=function(){return new A2(new T4(this))};K.aS=function(q){var Z=this.H.j();return Z===q?0:Z<q?-1:1};K.ex=function(q){return M7(this,q)};K.j=function(){return this.H.j()};K.z=function(){return this.H.j()};K.fD=function(q){var Z=this.H,Q=""+C5(q);return Z.q=Z.q+Q,this};K.u=function(){return this.H.q};K.i=function(){return this.H.j()===0};K.fb=function(){return this.H.q};K.cq=function(q){return this.fD(a2(q))};K.g=function(q){var Z=q|0;return z1(this.H.eL(Z))};K.o=function(q){return z1(this.H.eL(q))};var OV=new H().i(y8,"scala.collection.mutable.StringBuilder",{dL:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dJ:1,aX:1,aZ:1,aY:1,D:1,n:1,o:1,E:1,a4:1,a:1});function MX(q,Z){return q.aB=Z,q}function NX(q){return MX(q,[]),q}function P8(){this.aB=null}K=P8.prototype=new VQ;K.constructor=P8;function LX(){}LX.prototype=K;K.aV=function(){return"IndexedSeq"};K.n=function(){return new A2(new T4(this))};K.aS=function(q){var Z=this.aB.length|0;return Z===q?0:Z<q?-1:1};K.o=function(q){return this.aB[q]};K.j=function(){return this.aB.length|0};K.z=function(){return this.aB.length|0};K.aQ=function(){return"WrappedArray"};K.fb=function(){return this};K.cq=function(q){return this.aB.push(q),this};K.g=function(q){var Z=q|0;return this.aB[Z]};var WV=new H().i(P8,"scala.scalajs.js.WrappedArray",{ec:1,dE:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dG:1,aZ:1,aY:1,dK:1,q:1,p:1,D:1,n:1,o:1,E:1,dI:1,aX:1,a:1});x5=new E(0,0);WF.z=x5;kw(new(aZ.r()).C([]));
