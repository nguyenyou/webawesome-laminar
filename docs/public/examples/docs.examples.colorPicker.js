var RF=Object.defineProperty;var gF=(w,q)=>{for(var F in q)RF(w,F,{get:q[F],enumerable:!0,configurable:!0,set:(K)=>q[F]=()=>K})};var fw={};gF(fw,{default:()=>D});var j5=globalThis,S8=j5.ShadowRoot&&(j5.ShadyCSS===void 0||j5.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R8=Symbol(),C6=new WeakMap;class g8{constructor(w,q,F){if(this._$cssResult$=!0,F!==R8)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this._strings=q}get styleSheet(){let w=this._styleSheet,q=this._strings;if(S8&&w===void 0){let F=q!==void 0&&q.length===1;if(F)w=C6.get(q);if(w===void 0){if((this._styleSheet=w=new CSSStyleSheet).replaceSync(this.cssText),F)C6.set(q,w)}}return w}toString(){return this.cssText}}var dF=(w)=>{if(w._$cssResult$===!0)return w.cssText;else if(typeof w==="number")return w;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${w}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},hF=(w)=>new g8(typeof w==="string"?w:String(w),void 0,R8),x=(w,...q)=>{let F=w.length===1?w[0]:q.reduce((K,Z,Q)=>K+dF(Z)+w[Q+1],w[0]);return new g8(F,w,R8)},P6=(w,q)=>{if(S8)w.adoptedStyleSheets=q.map((F)=>F instanceof CSSStyleSheet?F:F.styleSheet);else for(let F of q){let K=document.createElement("style"),Z=j5.litNonce;if(Z!==void 0)K.setAttribute("nonce",Z);K.textContent=F.cssText,w.appendChild(K)}},CF=(w)=>{let q="";for(let F of w.cssRules)q+=F.cssText;return hF(q)},d8=S8?(w)=>w:(w)=>w instanceof CSSStyleSheet?CF(w):w;var{is:PF,defineProperty:jF,getOwnPropertyDescriptor:j6,getOwnPropertyNames:_F,getOwnPropertySymbols:xF,getPrototypeOf:_6}=Object,vF=!1,J0=globalThis;if(vF)J0.customElements??=customElements;var L0=!0,v0,x6=J0.trustedTypes,cF=x6?x6.emptyScript:"",c6=L0?J0.reactiveElementPolyfillSupportDevMode:J0.reactiveElementPolyfillSupport;if(L0)J0.litIssuedWarnings??=new Set,v0=(w,q)=>{if(q+=` See https://lit.dev/msg/${w} for more information.`,!J0.litIssuedWarnings.has(q)&&!J0.litIssuedWarnings.has(w))console.warn(q),J0.litIssuedWarnings.add(q)},queueMicrotask(()=>{if(v0("dev-mode","Lit is in dev mode. Not recommended for production!"),J0.ShadyDOM?.inUse&&c6===void 0)v0("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var oF=L0?(w)=>{if(!J0.emitLitDebugLogEvents)return;J0.dispatchEvent(new CustomEvent("lit-debug",{detail:w}))}:void 0,J2=(w,q)=>w,u2={toAttribute(w,q){switch(q){case Boolean:w=w?cF:null;break;case Object:case Array:w=w==null?w:JSON.stringify(w);break}return w},fromAttribute(w,q){let F=w;switch(q){case Boolean:F=w!==null;break;case Number:F=w===null?null:Number(w);break;case Object:case Array:try{F=JSON.parse(w)}catch(K){F=null}break}return F}},_5=(w,q)=>!PF(w,q),v6={attribute:!0,type:String,converter:u2,reflect:!1,useDefault:!1,hasChanged:_5};Symbol.metadata??=Symbol("metadata");J0.litPropertyMetadata??=new WeakMap;class N0 extends HTMLElement{static addInitializer(w){this.__prepare(),(this._initializers??=[]).push(w)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(w,q=v6){if(q.state)q.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(w))q=Object.create(q),q.wrapped=!0;if(this.elementProperties.set(w,q),!q.noAccessor){let F=L0?Symbol.for(`${String(w)} (@property() cache)`):Symbol(),K=this.getPropertyDescriptor(w,F,q);if(K!==void 0)jF(this.prototype,w,K)}}static getPropertyDescriptor(w,q,F){let{get:K,set:Z}=j6(this.prototype,w)??{get(){return this[q]},set(Q){this[q]=Q}};if(L0&&K==null){if("value"in(j6(this.prototype,w)??{}))throw Error(`Field ${JSON.stringify(String(w))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);v0("reactive-property-without-getter",`Field ${JSON.stringify(String(w))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:K,set(Q){let G=K?.call(this);Z?.call(this,Q),this.requestUpdate(w,G,F)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??v6}static __prepare(){if(this.hasOwnProperty(J2("elementProperties",this)))return;let w=_6(this);if(w.finalize(),w._initializers!==void 0)this._initializers=[...w._initializers];this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(J2("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(J2("properties",this))){let q=this.properties,F=[..._F(q),...xF(q)];for(let K of F)this.createProperty(K,q[K])}let w=this[Symbol.metadata];if(w!==null){let q=litPropertyMetadata.get(w);if(q!==void 0)for(let[F,K]of q)this.elementProperties.set(F,K)}this.__attributeToPropertyMap=new Map;for(let[q,F]of this.elementProperties){let K=this.__attributeNameForProperty(q,F);if(K!==void 0)this.__attributeToPropertyMap.set(K,q)}if(this.elementStyles=this.finalizeStyles(this.styles),L0){if(this.hasOwnProperty("createProperty"))v0("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))v0("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(w){let q=[];if(Array.isArray(w)){let F=new Set(w.flat(1/0).reverse());for(let K of F)q.unshift(d8(K))}else if(w!==void 0)q.push(d8(w));return q}static __attributeNameForProperty(w,q){let F=q.attribute;return F===!1?void 0:typeof F==="string"?F:typeof w==="string"?w.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((w)=>this.enableUpdating=w),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((w)=>w(this))}addController(w){if((this.__controllers??=new Set).add(w),this.renderRoot!==void 0&&this.isConnected)w.hostConnected?.()}removeController(w){this.__controllers?.delete(w)}__saveInstanceProperties(){let w=new Map,q=this.constructor.elementProperties;for(let F of q.keys())if(this.hasOwnProperty(F))w.set(F,this[F]),delete this[F];if(w.size>0)this.__instanceProperties=w}createRenderRoot(){let w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return P6(w,this.constructor.elementStyles),w}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((w)=>w.hostConnected?.())}enableUpdating(w){}disconnectedCallback(){this.__controllers?.forEach((w)=>w.hostDisconnected?.())}attributeChangedCallback(w,q,F){this._$attributeToProperty(w,F)}__propertyToAttribute(w,q){let K=this.constructor.elementProperties.get(w),Z=this.constructor.__attributeNameForProperty(w,K);if(Z!==void 0&&K.reflect===!0){let G=(K.converter?.toAttribute!==void 0?K.converter:u2).toAttribute(q,K.type);if(L0&&this.constructor.enabledWarnings.includes("migration")&&G===void 0)v0("undefined-attribute-value",`The attribute value for the ${w} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=w,G==null)this.removeAttribute(Z);else this.setAttribute(Z,G);this.__reflectingProperty=null}}_$attributeToProperty(w,q){let F=this.constructor,K=F.__attributeToPropertyMap.get(w);if(K!==void 0&&this.__reflectingProperty!==K){let Z=F.getPropertyOptions(K),Q=typeof Z.converter==="function"?{fromAttribute:Z.converter}:Z.converter?.fromAttribute!==void 0?Z.converter:u2;this.__reflectingProperty=K;let G=Q.fromAttribute(q,Z.type);this[K]=G??this.__defaultValues?.get(K)??G,this.__reflectingProperty=null}}requestUpdate(w,q,F){if(w!==void 0){if(L0&&w instanceof Event)v0("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let K=this.constructor,Z=this[w];if(F??=K.getPropertyOptions(w),(F.hasChanged??_5)(Z,q)||F.useDefault&&F.reflect&&Z===this.__defaultValues?.get(w)&&!this.hasAttribute(K.__attributeNameForProperty(w,F)))this._$changeProperty(w,q,F);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(w,q,{useDefault:F,reflect:K,wrapped:Z},Q){if(F&&!(this.__defaultValues??=new Map).has(w)){if(this.__defaultValues.set(w,Q??q??this[w]),Z!==!0||Q!==void 0)return}if(!this._$changedProperties.has(w)){if(!this.hasUpdated&&!F)q=void 0;this._$changedProperties.set(w,q)}if(K===!0&&this.__reflectingProperty!==w)(this.__reflectingProperties??=new Set).add(w)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(q){Promise.reject(q)}let w=this.scheduleUpdate();if(w!=null)await w;return!this.isUpdatePending}scheduleUpdate(){let w=this.performUpdate();if(L0&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof w?.then==="function")v0("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return w}performUpdate(){if(!this.isUpdatePending)return;if(oF?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),L0){let Z=[...this.constructor.elementProperties.keys()].filter((Q)=>this.hasOwnProperty(Q)&&(Q in _6(this)));if(Z.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${Z.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[K,Z]of this.__instanceProperties)this[K]=Z;this.__instanceProperties=void 0}let F=this.constructor.elementProperties;if(F.size>0)for(let[K,Z]of F){let{wrapped:Q}=Z,G=this[K];if(Q===!0&&!this._$changedProperties.has(K)&&G!==void 0)this._$changeProperty(K,void 0,Z,G)}}let w=!1,q=this._$changedProperties;try{if(w=this.shouldUpdate(q),w)this.willUpdate(q),this.__controllers?.forEach((F)=>F.hostUpdate?.()),this.update(q);else this.__markUpdated()}catch(F){throw w=!1,this.__markUpdated(),F}if(w)this._$didUpdate(q)}willUpdate(w){}_$didUpdate(w){if(this.__controllers?.forEach((q)=>q.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(w);if(this.updated(w),L0&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))v0("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(w){return!0}update(w){this.__reflectingProperties&&=this.__reflectingProperties.forEach((q)=>this.__propertyToAttribute(q,this[q])),this.__markUpdated()}updated(w){}firstUpdated(w){}}N0.elementStyles=[];N0.shadowRootOptions={mode:"open"};N0[J2("elementProperties",N0)]=new Map;N0[J2("finalized",N0)]=new Map;c6?.({ReactiveElement:N0});if(L0){N0.enabledWarnings=["change-in-update","async-perform-update"];let w=function(q){if(!q.hasOwnProperty(J2("enabledWarnings",q)))q.enabledWarnings=q.enabledWarnings.slice()};N0.enableWarning=function(q){if(w(this),!this.enabledWarnings.includes(q))this.enabledWarnings.push(q)},N0.disableWarning=function(q){w(this);let F=this.enabledWarnings.indexOf(q);if(F>=0)this.enabledWarnings.splice(F,1)}}(J0.reactiveElementVersions??=[]).push("2.1.1");if(L0&&J0.reactiveElementVersions.length>1)queueMicrotask(()=>{v0("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var f0=globalThis,S=(w)=>{if(!f0.emitLitDebugLogEvents)return;f0.dispatchEvent(new CustomEvent("lit-debug",{detail:w}))},mF=0,$2;f0.litIssuedWarnings??=new Set,$2=(w,q)=>{if(q+=w?` See https://lit.dev/msg/${w} for more information.`:"",!f0.litIssuedWarnings.has(q)&&!f0.litIssuedWarnings.has(w))console.warn(q),f0.litIssuedWarnings.add(q)},queueMicrotask(()=>{$2("dev-mode","Lit is in dev mode. Not recommended for production!")});var c0=f0.ShadyDOM?.inUse&&f0.ShadyDOM?.noPatch===!0?f0.ShadyDOM.wrap:(w)=>w,x5=f0.trustedTypes,o6=x5?x5.createPolicy("lit-html",{createHTML:(w)=>w}):void 0,iF=(w)=>w,m5=(w,q,F)=>iF,rF=(w)=>{if(i1!==m5)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");i1=w},lF=()=>{i1=m5},_8=(w,q,F)=>{return i1(w,q,F)},s6="$lit$",f1=`lit$${Math.random().toFixed(9).slice(2)}$`,a6="?"+f1,pF=`<${a6}>`,m1=document,S2=()=>m1.createComment(""),R2=(w)=>w===null||typeof w!="object"&&typeof w!="function",x8=Array.isArray,nF=(w)=>x8(w)||typeof w?.[Symbol.iterator]==="function",h8=`[ 	
\f\r]`,sF=`[^ 	
\f\r"'\`<>=]`,aF=`[^\\s"'>=/]`,E2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,m6=1,C8=2,tF=3,i6=/-->/g,r6=/>/g,$1=new RegExp(`>|${h8}(?:(${aF}+)(${h8}*=${h8}*(?:${sF}|("|')|))|$)`,"g"),eF=0,l6=1,wz=2,p6=3,P8=/'/g,j8=/"/g,t6=/^(?:script|style|textarea|title)$/i,qz=1,v5=2,c5=3,v8=1,o5=2,Fz=3,zz=4,Kz=5,c8=6,Zz=7,o8=(w)=>(q,...F)=>{if(q.some((K)=>K===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(F.some((K)=>K?._$litStatic$))$2("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:w,strings:q,values:F}},P=o8(qz),e6=o8(v5),w7=o8(c5),e=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),n6=new WeakMap,o1=m1.createTreeWalker(m1,129),i1=m5;function q7(w,q){if(!x8(w)||!w.hasOwnProperty("raw")){let F="invalid template strings array";throw F=`
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
`),Error(F)}return o6!==void 0?o6.createHTML(q):q}var Qz=(w,q)=>{let F=w.length-1,K=[],Z=q===v5?"<svg>":q===c5?"<math>":"",Q,G=E2;for(let J=0;J<F;J++){let k=w[J],H=-1,b,N=0,L;while(N<k.length){if(G.lastIndex=N,L=G.exec(k),L===null)break;if(N=G.lastIndex,G===E2){if(L[m6]==="!--")G=i6;else if(L[m6]!==void 0)G=r6;else if(L[C8]!==void 0){if(t6.test(L[C8]))Q=new RegExp(`</${L[C8]}`,"g");G=$1}else if(L[tF]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(G===$1)if(L[eF]===">")G=Q??E2,H=-1;else if(L[l6]===void 0)H=-2;else H=G.lastIndex-L[wz].length,b=L[l6],G=L[p6]===void 0?$1:L[p6]==='"'?j8:P8;else if(G===j8||G===P8)G=$1;else if(G===i6||G===r6)G=E2;else G=$1,Q=void 0}console.assert(H===-1||G===$1||G===P8||G===j8,"unexpected parse state B");let f=G===$1&&w[J+1].startsWith("/>")?" ":"";Z+=G===E2?k+pF:H>=0?(K.push(b),k.slice(0,H)+s6+k.slice(H))+f1+f:k+f1+(H===-2?J:f)}let X=Z+(w[F]||"<?>")+(q===v5?"</svg>":q===c5?"</math>":"");return[q7(w,X),K]};class g2{constructor({strings:w,["_$litType$"]:q},F){this.parts=[];let K,Z=0,Q=0,G=w.length-1,X=this.parts,[J,k]=Qz(w,q);if(this.el=g2.createElement(J,F),o1.currentNode=this.el.content,q===v5||q===c5){let H=this.el.content.firstChild;H.replaceWith(...H.childNodes)}while((K=o1.nextNode())!==null&&X.length<G){if(K.nodeType===1){{let H=K.localName;if(/^(?:textarea|template)$/i.test(H)&&K.innerHTML.includes(f1)){let b=`Expressions are not supported inside \`${H}\` elements. See https://lit.dev/msg/expression-in-${H} for more information.`;if(H==="template")throw Error(b);else $2("",b)}}if(K.hasAttributes()){for(let H of K.getAttributeNames())if(H.endsWith(s6)){let b=k[Q++],L=K.getAttribute(H).split(f1),f=/([.?@])?(.*)/.exec(b);X.push({type:v8,index:Z,name:f[2],strings:L,ctor:f[1]==="."?z7:f[1]==="?"?K7:f[1]==="@"?Z7:h2}),K.removeAttribute(H)}else if(H.startsWith(f1))X.push({type:c8,index:Z}),K.removeAttribute(H)}if(t6.test(K.tagName)){let H=K.textContent.split(f1),b=H.length-1;if(b>0){K.textContent=x5?x5.emptyScript:"";for(let N=0;N<b;N++)K.append(H[N],S2()),o1.nextNode(),X.push({type:o5,index:++Z});K.append(H[b],S2())}}}else if(K.nodeType===8)if(K.data===a6)X.push({type:o5,index:Z});else{let b=-1;while((b=K.data.indexOf(f1,b+1))!==-1)X.push({type:Zz,index:Z}),b+=f1.length-1}Z++}if(k.length!==Q)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+w.join("${...}")+"`");S&&S({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:w})}static createElement(w,q){let F=m1.createElement("template");return F.innerHTML=w,F}}function X2(w,q,F=w,K){if(q===e)return q;let Z=K!==void 0?F.__directives?.[K]:F.__directive,Q=R2(q)?void 0:q._$litDirective$;if(Z?.constructor!==Q){if(Z?._$notifyDirectiveConnectionChanged?.(!1),Q===void 0)Z=void 0;else Z=new Q(w),Z._$initialize(w,F,K);if(K!==void 0)(F.__directives??=[])[K]=Z;else F.__directive=Z}if(Z!==void 0)q=X2(w,Z._$resolve(w,q.values),Z,K);return q}class F7{constructor(w,q){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=w,this._$parent=q}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(w){let{el:{content:q},parts:F}=this._$template,K=(w?.creationScope??m1).importNode(q,!0);o1.currentNode=K;let Z=o1.nextNode(),Q=0,G=0,X=F[0];while(X!==void 0){if(Q===X.index){let J;if(X.type===o5)J=new d2(Z,Z.nextSibling,this,w);else if(X.type===v8)J=new X.ctor(Z,X.name,X.strings,this,w);else if(X.type===c8)J=new Q7(Z,this,w);this._$parts.push(J),X=F[++G]}if(Q!==X?.index)Z=o1.nextNode(),Q++}return o1.currentNode=m1,K}_update(w){let q=0;for(let F of this._$parts){if(F!==void 0)if(S&&S({kind:"set part",part:F,value:w[q],valueIndex:q,values:w,templateInstance:this}),F.strings!==void 0)F._$setValue(w,F,q),q+=F.strings.length-2;else F._$setValue(w[q]);q++}}}class d2{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(w,q,F,K){this.type=o5,this._$committedValue=v,this._$disconnectableChildren=void 0,this._$startNode=w,this._$endNode=q,this._$parent=F,this.options=K,this.__isConnected=K?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let w=c0(this._$startNode).parentNode,q=this._$parent;if(q!==void 0&&w?.nodeType===11)w=q.parentNode;return w}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(w,q=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(w=X2(this,w,q),R2(w)){if(w===v||w==null||w===""){if(this._$committedValue!==v)S&&S({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=v}else if(w!==this._$committedValue&&w!==e)this._commitText(w)}else if(w._$litType$!==void 0)this._commitTemplateResult(w);else if(w.nodeType!==void 0){if(this.options?.host===w){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",w,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(w)}else if(nF(w))this._commitIterable(w);else this._commitText(w)}_insert(w){return c0(c0(this._$startNode).parentNode).insertBefore(w,this._$endNode)}_commitNode(w){if(this._$committedValue!==w){if(this._$clear(),i1!==m5){let q=this._$startNode.parentNode?.nodeName;if(q==="STYLE"||q==="SCRIPT"){let F="Forbidden";if(q==="STYLE")F="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else F="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(F)}}S&&S({kind:"commit node",start:this._$startNode,parent:this._$parent,value:w,options:this.options}),this._$committedValue=this._insert(w)}}_commitText(w){if(this._$committedValue!==v&&R2(this._$committedValue)){let q=c0(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=_8(q,"data","property");w=this._textSanitizer(w),S&&S({kind:"commit text",node:q,value:w,options:this.options}),q.data=w}else{let q=m1.createTextNode("");if(this._commitNode(q),this._textSanitizer===void 0)this._textSanitizer=_8(q,"data","property");w=this._textSanitizer(w),S&&S({kind:"commit text",node:q,value:w,options:this.options}),q.data=w}this._$committedValue=w}_commitTemplateResult(w){let{values:q,["_$litType$"]:F}=w,K=typeof F==="number"?this._$getTemplate(w):(F.el===void 0&&(F.el=g2.createElement(q7(F.h,F.h[0]),this.options)),F);if(this._$committedValue?._$template===K)S&&S({kind:"template updating",template:K,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:q}),this._$committedValue._update(q);else{let Z=new F7(K,this),Q=Z._clone(this.options);S&&S({kind:"template instantiated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:Q,values:q}),Z._update(q),S&&S({kind:"template instantiated and updated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:Q,values:q}),this._commitNode(Q),this._$committedValue=Z}}_$getTemplate(w){let q=n6.get(w.strings);if(q===void 0)n6.set(w.strings,q=new g2(w));return q}_commitIterable(w){if(!x8(this._$committedValue))this._$committedValue=[],this._$clear();let q=this._$committedValue,F=0,K;for(let Z of w){if(F===q.length)q.push(K=new d2(this._insert(S2()),this._insert(S2()),this,this.options));else K=q[F];K._$setValue(Z),F++}if(F<q.length)this._$clear(K&&c0(K._$endNode).nextSibling,F),q.length=F}_$clear(w=c0(this._$startNode).nextSibling,q){this._$notifyConnectionChanged?.(!1,!0,q);while(w!==this._$endNode){let F=c0(w).nextSibling;c0(w).remove(),w=F}}setConnected(w){if(this._$parent===void 0)this.__isConnected=w,this._$notifyConnectionChanged?.(w);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class h2{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(w,q,F,K,Z){if(this.type=v8,this._$committedValue=v,this._$disconnectableChildren=void 0,this.element=w,this.name=q,this._$parent=K,this.options=Z,F.length>2||F[0]!==""||F[1]!=="")this._$committedValue=Array(F.length-1).fill(new String),this.strings=F;else this._$committedValue=v;this._sanitizer=void 0}_$setValue(w,q=this,F,K){let Z=this.strings,Q=!1;if(Z===void 0){if(w=X2(this,w,q,0),Q=!R2(w)||w!==this._$committedValue&&w!==e,Q)this._$committedValue=w}else{let G=w;w=Z[0];let X,J;for(X=0;X<Z.length-1;X++){if(J=X2(this,G[F+X],q,X),J===e)J=this._$committedValue[X];if(Q||=!R2(J)||J!==this._$committedValue[X],J===v)w=v;else if(w!==v)w+=(J??"")+Z[X+1];this._$committedValue[X]=J}}if(Q&&!K)this._commitValue(w)}_commitValue(w){if(w===v)c0(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=i1(this.element,this.name,"attribute");w=this._sanitizer(w??""),S&&S({kind:"commit attribute",element:this.element,name:this.name,value:w,options:this.options}),c0(this.element).setAttribute(this.name,w??"")}}}class z7 extends h2{constructor(){super(...arguments);this.type=Fz}_commitValue(w){if(this._sanitizer===void 0)this._sanitizer=i1(this.element,this.name,"property");w=this._sanitizer(w),S&&S({kind:"commit property",element:this.element,name:this.name,value:w,options:this.options}),this.element[this.name]=w===v?void 0:w}}class K7 extends h2{constructor(){super(...arguments);this.type=zz}_commitValue(w){S&&S({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(w&&w!==v),options:this.options}),c0(this.element).toggleAttribute(this.name,!!w&&w!==v)}}class Z7 extends h2{constructor(w,q,F,K,Z){super(w,q,F,K,Z);if(this.type=Kz,this.strings!==void 0)throw Error(`A \`<${w.localName}>\` has a \`@${q}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(w,q=this){if(w=X2(this,w,q,0)??v,w===e)return;let F=this._$committedValue,K=w===v&&F!==v||w.capture!==F.capture||w.once!==F.once||w.passive!==F.passive,Z=w!==v&&(F===v||K);if(S&&S({kind:"commit event listener",element:this.element,name:this.name,value:w,options:this.options,removeListener:K,addListener:Z,oldListener:F}),K)this.element.removeEventListener(this.name,this,F);if(Z)this.element.addEventListener(this.name,this,w);this._$committedValue=w}handleEvent(w){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,w);else this._$committedValue.handleEvent(w)}}class Q7{constructor(w,q,F){this.element=w,this.type=c8,this._$disconnectableChildren=void 0,this._$parent=q,this.options=F}get _$isConnected(){return this._$parent._$isConnected}_$setValue(w){S&&S({kind:"commit to element binding",element:this.element,value:w,options:this.options}),X2(this,w)}}var Gz=f0.litHtmlPolyfillSupportDevMode;Gz?.(g2,d2);(f0.litHtmlVersions??=[]).push("3.3.1");if(f0.litHtmlVersions.length>1)queueMicrotask(()=>{$2("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var y2=(w,q,F)=>{if(q==null)throw TypeError(`The container to render into may not be ${q}`);let K=mF++,Z=F?.renderBefore??q,Q=Z._$litPart$;if(S&&S({kind:"begin render",id:K,value:w,container:q,options:F,part:Q}),Q===void 0){let G=F?.renderBefore??null;Z._$litPart$=Q=new d2(q.insertBefore(S2(),G),G,void 0,F??{})}return Q._$setValue(w),S&&S({kind:"end render",id:K,value:w,container:q,options:F,part:Q}),Q};y2.setSanitizer=rF,y2.createSanitizer=_8,y2._testOnlyClearSanitizerFactoryDoNotCallOrElse=lF;var Jz=(w,q)=>w,m8=!0,V1=globalThis,G7;if(m8)V1.litIssuedWarnings??=new Set,G7=(w,q)=>{if(q+=` See https://lit.dev/msg/${w} for more information.`,!V1.litIssuedWarnings.has(q)&&!V1.litIssuedWarnings.has(w))console.warn(q),V1.litIssuedWarnings.add(q)};class S1 extends N0{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let w=super.createRenderRoot();return this.renderOptions.renderBefore??=w.firstChild,w}update(w){let q=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(w),this.__childPart=y2(q,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return e}}S1._$litElement$=!0;S1[Jz("finalized",S1)]=!0;V1.litElementHydrateSupport?.({LitElement:S1});var Xz=m8?V1.litElementPolyfillSupportDevMode:V1.litElementPolyfillSupport;Xz?.({LitElement:S1});(V1.litElementVersions??=[]).push("4.2.1");if(m8&&V1.litElementVersions.length>1)queueMicrotask(()=>{G7("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var o0=!1;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var J7=x`
  :host {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function i5(w,q){function F(Z){let Q=w.getBoundingClientRect(),G=w.ownerDocument.defaultView,X=Q.left+G.pageXOffset,J=Q.top+G.pageYOffset,k=Z.pageX-X,H=Z.pageY-J;if(q?.onMove)q.onMove(k,H)}function K(){if(document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",K),q?.onStop)q.onStop()}if(document.addEventListener("pointermove",F,{passive:!0}),document.addEventListener("pointerup",K),q?.initialEvent instanceof PointerEvent)F(q.initialEvent)}var jX=typeof window<"u"&&"ontouchstart"in window;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var X7=x`
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function V0(w,q,F){let K=(Z)=>Object.is(Z,-0)?0:Z;if(w<q)return K(q);if(w>F)return K(F);return K(w)}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function i8(w,q){return new Promise((F)=>{function K(Z){if(Z.target===w)w.removeEventListener(q,K),F()}w.addEventListener(q,K)})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function r8(w,q){return new Promise((F)=>{let K=new AbortController,{signal:Z}=K;if(w.classList.contains(q))return;w.classList.remove(q),w.classList.add(q);let Q=()=>{w.classList.remove(q),F(),K.abort()};w.addEventListener("animationend",Q,{once:!0,signal:Z}),w.addEventListener("animationcancel",Q,{once:!0,signal:Z})})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var k7=(w={})=>{let{validationElement:q,validationProperty:F}=w;if(!q)q=Object.assign(document.createElement("input"),{required:!0});if(!F)F="value";let K={observedAttributes:["required"],message:q.validationMessage,checkValidity(Z){let Q={message:"",isValid:!0,invalidKeys:[]};if(!(Z.required??Z.hasAttribute("required")))return Q;if(!Z[F])Q.message=typeof K.message==="function"?K.message(Z):K.message||"",Q.isValid=!1,Q.invalidKeys.push("valueMissing");return Q}};return K};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var r5=x`
  :host {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var{defineProperty:kz,getOwnPropertyDescriptor:Yz}=Object,Y7=(w)=>{throw TypeError(w)},U=(w,q,F,K)=>{var Z=K>1?void 0:K?Yz(q,F):q;for(var Q=w.length-1,G;Q>=0;Q--)if(G=w[Q])Z=(K?G(q,F,Z):G(Z))||Z;if(K&&Z)kz(q,F,Z);return Z},H7=(w,q,F)=>q.has(w)||Y7("Cannot "+F),U7=(w,q,F)=>(H7(w,q,"read from private field"),F?F.call(w):q.get(w)),b7=(w,q,F)=>q.has(w)?Y7("Cannot add the same private member more than once"):q instanceof WeakSet?q.add(w):q.set(w,F),B7=(w,q,F,K)=>(H7(w,q,"write to private field"),K?K.call(w,F):q.set(w,F),F);var X0=(w)=>(q,F)=>{if(F!==void 0)F.addInitializer(()=>{customElements.define(w,q)});else customElements.define(w,q)};var M7=!0,L7;if(M7)globalThis.litIssuedWarnings??=new Set,L7=(w,q)=>{if(q+=` See https://lit.dev/msg/${w} for more information.`,!globalThis.litIssuedWarnings.has(q)&&!globalThis.litIssuedWarnings.has(w))console.warn(q),globalThis.litIssuedWarnings.add(q)};var Hz=(w,q,F)=>{let K=q.hasOwnProperty(F);return q.constructor.createProperty(F,w),K?Object.getOwnPropertyDescriptor(q,F):void 0},Uz={attribute:!0,type:String,converter:u2,reflect:!1,hasChanged:_5},bz=(w=Uz,q,F)=>{let{kind:K,metadata:Z}=F;if(M7&&Z==null)L7("missing-class-metadata",`The class ${q} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let Q=globalThis.litPropertyMetadata.get(Z);if(Q===void 0)globalThis.litPropertyMetadata.set(Z,Q=new Map);if(K==="setter")w=Object.create(w),w.wrapped=!0;if(Q.set(F.name,w),K==="accessor"){let{name:G}=F;return{set(X){let J=q.get.call(this);q.set.call(this,X),this.requestUpdate(G,J,w)},init(X){if(X!==void 0)this._$changeProperty(G,void 0,w,X);return X}}}else if(K==="setter"){let{name:G}=F;return function(X){let J=this[G];q.call(this,X),this.requestUpdate(G,J,w)}}throw Error(`Unsupported decorator location: ${K}`)};function B(w){return(q,F)=>{return typeof F==="object"?bz(w,q,F):Hz(w,q,F)}}function i(w){return B({...w,state:!0,attribute:!1})}function N7(w){return(q,F)=>{let K=typeof q==="function"?q:q[F];Object.assign(K,w)}}var r1=(w,q,F)=>{if(F.configurable=!0,F.enumerable=!0,Reflect.decorate&&typeof q!=="object")Object.defineProperty(w,q,F);return F};var l8=!0,f7;if(l8)globalThis.litIssuedWarnings??=new Set,f7=(w,q)=>{if(q+=w?` See https://lit.dev/msg/${w} for more information.`:"",!globalThis.litIssuedWarnings.has(q)&&!globalThis.litIssuedWarnings.has(w))console.warn(q),globalThis.litIssuedWarnings.add(q)};function s(w,q){return(F,K,Z)=>{let Q=(G)=>{let X=G.renderRoot?.querySelector(w)??null;if(l8&&X===null&&q&&!G.hasUpdated){let J=typeof K==="object"?K.name:K;f7("",`@query'd field ${JSON.stringify(String(J))} with the 'cache' flag set for selector '${w}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return X};if(q){let{get:G,set:X}=typeof K==="object"?F:Z??(()=>{let J=l8?Symbol(`${String(K)} (@query() cache)`):Symbol();return{get(){return this[J]},set(k){this[J]=k}}})();return r1(F,K,{get(){let J=G.call(this);if(J===void 0){if(J=Q(this),J!==null||this.hasUpdated)X.call(this,J)}return J}})}else return r1(F,K,{get(){return Q(this)}})}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Bz=x`
  :host {
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
`,l5,T0=class extends S1{constructor(){super();b7(this,l5,!1),this.initialReflectedProperties=new Map,this.didSSR=o0||Boolean(this.shadowRoot),this.customStates={set:(q,F)=>{if(!Boolean(this.internals?.states))return;try{if(F)this.internals.states.add(q);else this.internals.states.delete(q)}catch(K){if(String(K).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw K}},has:(q)=>{if(!Boolean(this.internals?.states))return!1;try{return this.internals.states.has(q)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let w=this.constructor;for(let[q,F]of w.elementProperties)if(F.default==="inherit"&&F.initial!==void 0&&typeof q==="string")this.customStates.set(`initial-${q}-${F.initial}`,!0)}static get styles(){let w=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[Bz,...w]}attributeChangedCallback(w,q,F){if(!U7(this,l5))this.constructor.elementProperties.forEach((K,Z)=>{if(K.reflect&&this[Z]!=null)this.initialReflectedProperties.set(Z,this[Z])}),B7(this,l5,!0);super.attributeChangedCallback(w,q,F)}willUpdate(w){super.willUpdate(w),this.initialReflectedProperties.forEach((q,F)=>{if(w.has(F)&&this[F]==null)this[F]=q})}firstUpdated(w){if(super.firstUpdated(w),this.didSSR)this.shadowRoot?.querySelectorAll("slot").forEach((q)=>{q.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(w){try{super.update(w)}catch(q){if(this.didSSR&&!this.hasUpdated){let F=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});F.error=q,this.dispatchEvent(F)}throw q}}relayNativeEvent(w,q){w.stopImmediatePropagation(),this.dispatchEvent(new w.constructor(w.type,{...w,...q}))}};l5=new WeakMap;U([B()],T0.prototype,"dir",2);U([B()],T0.prototype,"lang",2);U([B({type:Boolean,reflect:!0,attribute:"did-ssr"})],T0.prototype,"didSSR",2);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var C2=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},Mz=()=>{return{observedAttributes:["custom-error"],checkValidity(w){let q={message:"",isValid:!0,invalidKeys:[]};if(w.customError)q.message=w.customError,q.isValid=!1,q.invalidKeys=["customError"];return q}}},w0=class extends T0{constructor(){super();if(this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=(w)=>{if(w.target!==this)return;this.hasInteracted=!0,this.dispatchEvent(new C2)},this.handleInteraction=(w)=>{let q=this.emittedEvents;if(!q.includes(w.type))q.push(w.type);if(q.length===this.assumeInteractionOn?.length)this.hasInteracted=!0},!o0)this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[Mz()]}static get observedAttributes(){let w=new Set(super.observedAttributes||[]);for(let q of this.validators){if(!q.observedAttributes)continue;for(let F of q.observedAttributes)w.add(F)}return[...w]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach((w)=>{this.addEventListener(w,this.handleInteraction)})}firstUpdated(...w){super.firstUpdated(...w),this.updateValidity()}willUpdate(w){if(!o0&&w.has("customError")){if(!this.customError)this.customError=null;this.setCustomValidity(this.customError||"")}if(w.has("value")||w.has("disabled")){let q=this.value;if(Array.isArray(q)){if(this.name){let F=new FormData;for(let K of q)F.append(this.name,K);this.setValue(F,F)}}else this.setValue(q,q)}if(w.has("disabled")){if(this.customStates.set("disabled",this.disabled),this.hasAttribute("disabled")||!o0&&!this.matches(":disabled"))this.toggleAttribute("disabled",this.disabled)}this.updateValidity(),super.willUpdate(w)}get labels(){return this.internals.labels}getForm(){return this.internals.form}set form(w){if(w)this.setAttribute("form",w);else this.removeAttribute("form")}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...w){let q=w[0],F=w[1],K=w[2];if(!K)K=this.validationTarget;this.internals.setValidity(q,F,K||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let w=Boolean(this.required),q=this.internals.validity.valid,F=this.hasInteracted;this.customStates.set("required",w),this.customStates.set("optional",!w),this.customStates.set("invalid",!q),this.customStates.set("valid",q),this.customStates.set("user-invalid",!q&&F),this.customStates.set("user-valid",q&&F)}setCustomValidity(w){if(!w){this.customError=null,this.setValidity({});return}this.customError=w,this.setValidity({customError:!0},w,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(w){this.disabled=w,this.updateValidity()}formStateRestoreCallback(w,q){if(this.value=w,q==="restore")this.resetValidity();this.updateValidity()}setValue(...w){let[q,F]=w;this.internals.setFormValue(q,F)}get allValidators(){let w=this.constructor.validators||[],q=this.validators||[];return[...w,...q]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let w=this.allValidators;if(!w?.length)return;let q={customError:Boolean(this.customError)},F=this.validationTarget||this.input||void 0,K="";for(let Z of w){let{isValid:Q,message:G,invalidKeys:X}=Z.checkValidity(this);if(Q)continue;if(!K)K=G;if(X?.length>=0)X.forEach((J)=>q[J]=!0)}if(!K)K=this.validationMessage;this.setValidity(q,K,F)}};w0.formAssociated=!0;U([B({reflect:!0})],w0.prototype,"name",2);U([B({type:Boolean})],w0.prototype,"disabled",2);U([B({state:!0,attribute:!1})],w0.prototype,"valueHasChanged",2);U([B({state:!0,attribute:!1})],w0.prototype,"hasInteracted",2);U([B({attribute:"custom-error",reflect:!0})],w0.prototype,"customError",2);U([B({attribute:!1,state:!0,type:Object})],w0.prototype,"validity",1);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var k2=class{constructor(w,...q){this.slotNames=[],this.handleSlotChange=(F)=>{let K=F.target;if(this.slotNames.includes("[default]")&&!K.name||K.name&&this.slotNames.includes(K.name))this.host.requestUpdate()},(this.host=w).addController(this),this.slotNames=q}hasDefaultSlot(){return[...this.host.childNodes].some((w)=>{if(w.nodeType===Node.TEXT_NODE&&w.textContent.trim()!=="")return!0;if(w.nodeType===Node.ELEMENT_NODE){let q=w;if(q.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!q.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(w){return this.host.querySelector(`:scope > [slot="${w}"]`)!==null}test(w){return w==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(w)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Y2=x`
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
`;var p8=new Set,H2=new Map,l1,n8="ltr",s8="en",V7=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(V7){let w=new MutationObserver(T7);n8=document.documentElement.dir||"ltr",s8=document.documentElement.lang||navigator.language,w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function P2(...w){w.map((q)=>{let F=q.$code.toLowerCase();if(H2.has(F))H2.set(F,Object.assign(Object.assign({},H2.get(F)),q));else H2.set(F,q);if(!l1)l1=q}),T7()}function T7(){if(V7)n8=document.documentElement.dir||"ltr",s8=document.documentElement.lang||navigator.language;[...p8.keys()].map((w)=>{if(typeof w.requestUpdate==="function")w.requestUpdate()})}class a8{constructor(w){this.host=w,this.host.addController(this)}hostConnected(){p8.add(this.host)}hostDisconnected(){p8.delete(this.host)}dir(){return`${this.host.dir||n8}`.toLowerCase()}lang(){return`${this.host.lang||s8}`.toLowerCase()}getTranslationData(w){var q,F;let K=new Intl.Locale(w.replace(/_/g,"-")),Z=K===null||K===void 0?void 0:K.language.toLowerCase(),Q=(F=(q=K===null||K===void 0?void 0:K.region)===null||q===void 0?void 0:q.toLowerCase())!==null&&F!==void 0?F:"",G=H2.get(`${Z}-${Q}`),X=H2.get(Z);return{locale:K,language:Z,region:Q,primary:G,secondary:X}}exists(w,q){var F;let{primary:K,secondary:Z}=this.getTranslationData((F=q.lang)!==null&&F!==void 0?F:this.lang());if(q=Object.assign({includeFallback:!1},q),K&&K[w]||Z&&Z[w]||q.includeFallback&&l1&&l1[w])return!0;return!1}term(w,...q){let{primary:F,secondary:K}=this.getTranslationData(this.lang()),Z;if(F&&F[w])Z=F[w];else if(K&&K[w])Z=K[w];else if(l1&&l1[w])Z=l1[w];else return console.error(`No translation found for: ${String(w)}`),String(w);if(typeof Z==="function")return Z(...q);return Z}date(w,q){return w=new Date(w),new Intl.DateTimeFormat(this.lang(),q).format(w)}number(w,q){return w=Number(w),isNaN(w)?"":new Intl.NumberFormat(this.lang(),q).format(w)}relativeTime(w,q,F){return new Intl.RelativeTimeFormat(this.lang(),F).format(w,q)}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var D7={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(w,q)=>`Go to slide ${w} of ${q}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:(w)=>{if(w===0)return"No options selected";if(w===1)return"1 option selected";return`${w} options selected`},pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:(w)=>`Slide ${w}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};P2(D7);var O7=D7;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Q1=class extends a8{};P2(O7);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function g0(w,q){let F={waitUntilFirstUpdate:!1,...q};return(K,Z)=>{let{update:Q}=K,G=Array.isArray(w)?w:[w];K.update=function(X){G.forEach((J)=>{let k=J;if(X.has(k)){let H=X.get(k),b=this[k];if(H!==b){if(!F.waitUntilFirstUpdate||this.hasUpdated)this[Z](H,b)}}}),Q.call(this,X)}}}function p(w,q){if(Lz(w))w="100%";let F=Nz(w);if(w=q===360?w:Math.min(q,Math.max(0,parseFloat(w))),F)w=parseInt(String(w*q),10)/100;if(Math.abs(w-q)<0.000001)return 1;if(q===360)w=(w<0?w%q+q:w%q)/parseFloat(String(q));else w=w%q/parseFloat(String(q));return w}function j2(w){return Math.min(1,Math.max(0,w))}function Lz(w){return typeof w==="string"&&w.indexOf(".")!==-1&&parseFloat(w)===1}function Nz(w){return typeof w==="string"&&w.indexOf("%")!==-1}function p5(w){if(w=parseFloat(w),isNaN(w)||w<0||w>1)w=1;return w}function _2(w){if(Number(w)<=1)return`${Number(w)*100}%`;return w}function R1(w){return w.length===1?"0"+w:String(w)}function W7(w,q,F){return{r:p(w,255)*255,g:p(q,255)*255,b:p(F,255)*255}}function e8(w,q,F){w=p(w,255),q=p(q,255),F=p(F,255);let K=Math.max(w,q,F),Z=Math.min(w,q,F),Q=0,G=0,X=(K+Z)/2;if(K===Z)G=0,Q=0;else{let J=K-Z;switch(G=X>0.5?J/(2-K-Z):J/(K+Z),K){case w:Q=(q-F)/J+(q<F?6:0);break;case q:Q=(F-w)/J+2;break;case F:Q=(w-q)/J+4;break;default:break}Q/=6}return{h:Q,s:G,l:X}}function t8(w,q,F){if(F<0)F+=1;if(F>1)F-=1;if(F<0.16666666666666666)return w+(q-w)*(6*F);if(F<0.5)return q;if(F<0.6666666666666666)return w+(q-w)*(0.6666666666666666-F)*6;return w}function A7(w,q,F){let K,Z,Q;if(w=p(w,360),q=p(q,100),F=p(F,100),q===0)Z=F,Q=F,K=F;else{let G=F<0.5?F*(1+q):F+q-F*q,X=2*F-G;K=t8(X,G,w+0.3333333333333333),Z=t8(X,G,w),Q=t8(X,G,w-0.3333333333333333)}return{r:K*255,g:Z*255,b:Q*255}}function ww(w,q,F){w=p(w,255),q=p(q,255),F=p(F,255);let K=Math.max(w,q,F),Z=Math.min(w,q,F),Q=0,G=K,X=K-Z,J=K===0?0:X/K;if(K===Z)Q=0;else{switch(K){case w:Q=(q-F)/X+(q<F?6:0);break;case q:Q=(F-w)/X+2;break;case F:Q=(w-q)/X+4;break;default:break}Q/=6}return{h:Q,s:J,v:G}}function I7(w,q,F){w=p(w,360)*6,q=p(q,100),F=p(F,100);let K=Math.floor(w),Z=w-K,Q=F*(1-q),G=F*(1-Z*q),X=F*(1-(1-Z)*q),J=K%6,k=[F,G,Q,Q,X,F][J],H=[X,F,F,G,Q,Q][J],b=[Q,Q,X,F,F,G][J];return{r:k*255,g:H*255,b:b*255}}function qw(w,q,F,K){let Z=[R1(Math.round(w).toString(16)),R1(Math.round(q).toString(16)),R1(Math.round(F).toString(16))];if(K&&Z[0].startsWith(Z[0].charAt(1))&&Z[1].startsWith(Z[1].charAt(1))&&Z[2].startsWith(Z[2].charAt(1)))return Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0);return Z.join("")}function u7(w,q,F,K,Z){let Q=[R1(Math.round(w).toString(16)),R1(Math.round(q).toString(16)),R1(Math.round(F).toString(16)),R1(fz(K))];if(Z&&Q[0].startsWith(Q[0].charAt(1))&&Q[1].startsWith(Q[1].charAt(1))&&Q[2].startsWith(Q[2].charAt(1))&&Q[3].startsWith(Q[3].charAt(1)))return Q[0].charAt(0)+Q[1].charAt(0)+Q[2].charAt(0)+Q[3].charAt(0);return Q.join("")}function E7(w,q,F,K){let Z=w/100,Q=q/100,G=F/100,X=K/100,J=255*(1-Z)*(1-X),k=255*(1-Q)*(1-X),H=255*(1-G)*(1-X);return{r:J,g:k,b:H}}function Fw(w,q,F){let K=1-w/255,Z=1-q/255,Q=1-F/255,G=Math.min(K,Z,Q);if(G===1)K=0,Z=0,Q=0;else K=(K-G)/(1-G)*100,Z=(Z-G)/(1-G)*100,Q=(Q-G)/(1-G)*100;return G*=100,{c:Math.round(K),m:Math.round(Z),y:Math.round(Q),k:Math.round(G)}}function fz(w){return Math.round(parseFloat(w)*255).toString(16)}function zw(w){return k0(w)/255}function k0(w){return parseInt(w,16)}function y7(w){return{r:w>>16,g:(w&65280)>>8,b:w&255}}var x2={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $7(w){let q={r:0,g:0,b:0},F=1,K=null,Z=null,Q=null,G=!1,X=!1;if(typeof w==="string")w=Dz(w);if(typeof w==="object"){if(D0(w.r)&&D0(w.g)&&D0(w.b))q=W7(w.r,w.g,w.b),G=!0,X=String(w.r).substr(-1)==="%"?"prgb":"rgb";else if(D0(w.h)&&D0(w.s)&&D0(w.v))K=_2(w.s),Z=_2(w.v),q=I7(w.h,K,Z),G=!0,X="hsv";else if(D0(w.h)&&D0(w.s)&&D0(w.l))K=_2(w.s),Q=_2(w.l),q=A7(w.h,K,Q),G=!0,X="hsl";else if(D0(w.c)&&D0(w.m)&&D0(w.y)&&D0(w.k))q=E7(w.c,w.m,w.y,w.k),G=!0,X="cmyk";if(Object.prototype.hasOwnProperty.call(w,"a"))F=w.a}return F=p5(F),{ok:G,format:w.format||X,r:Math.min(255,Math.max(q.r,0)),g:Math.min(255,Math.max(q.g,0)),b:Math.min(255,Math.max(q.b,0)),a:F}}var Vz="[-\\+]?\\d+%?",Tz="[-\\+]?\\d*\\.\\d+%?",g1="(?:"+Tz+")|(?:"+Vz+")",Kw="[\\s|\\(]+("+g1+")[,|\\s]+("+g1+")[,|\\s]+("+g1+")\\s*\\)?",n5="[\\s|\\(]+("+g1+")[,|\\s]+("+g1+")[,|\\s]+("+g1+")[,|\\s]+("+g1+")\\s*\\)?",d0={CSS_UNIT:new RegExp(g1),rgb:new RegExp("rgb"+Kw),rgba:new RegExp("rgba"+n5),hsl:new RegExp("hsl"+Kw),hsla:new RegExp("hsla"+n5),hsv:new RegExp("hsv"+Kw),hsva:new RegExp("hsva"+n5),cmyk:new RegExp("cmyk"+n5),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Dz(w){if(w=w.trim().toLowerCase(),w.length===0)return!1;let q=!1;if(x2[w])w=x2[w],q=!0;else if(w==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let F=d0.rgb.exec(w);if(F)return{r:F[1],g:F[2],b:F[3]};if(F=d0.rgba.exec(w),F)return{r:F[1],g:F[2],b:F[3],a:F[4]};if(F=d0.hsl.exec(w),F)return{h:F[1],s:F[2],l:F[3]};if(F=d0.hsla.exec(w),F)return{h:F[1],s:F[2],l:F[3],a:F[4]};if(F=d0.hsv.exec(w),F)return{h:F[1],s:F[2],v:F[3]};if(F=d0.hsva.exec(w),F)return{h:F[1],s:F[2],v:F[3],a:F[4]};if(F=d0.cmyk.exec(w),F)return{c:F[1],m:F[2],y:F[3],k:F[4]};if(F=d0.hex8.exec(w),F)return{r:k0(F[1]),g:k0(F[2]),b:k0(F[3]),a:zw(F[4]),format:q?"name":"hex8"};if(F=d0.hex6.exec(w),F)return{r:k0(F[1]),g:k0(F[2]),b:k0(F[3]),format:q?"name":"hex"};if(F=d0.hex4.exec(w),F)return{r:k0(F[1]+F[1]),g:k0(F[2]+F[2]),b:k0(F[3]+F[3]),a:zw(F[4]+F[4]),format:q?"name":"hex8"};if(F=d0.hex3.exec(w),F)return{r:k0(F[1]+F[1]),g:k0(F[2]+F[2]),b:k0(F[3]+F[3]),format:q?"name":"hex"};return!1}function D0(w){if(typeof w==="number")return!Number.isNaN(w);return d0.CSS_UNIT.test(w)}class c{constructor(w="",q={}){if(w instanceof c)return w;if(typeof w==="number")w=y7(w);this.originalInput=w;let F=$7(w);if(this.originalInput=w,this.r=F.r,this.g=F.g,this.b=F.b,this.a=F.a,this.roundA=Math.round(100*this.a)/100,this.format=q.format??F.format,this.gradientType=q.gradientType,this.r<1)this.r=Math.round(this.r);if(this.g<1)this.g=Math.round(this.g);if(this.b<1)this.b=Math.round(this.b);this.isValid=F.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let w=this.toRgb();return(w.r*299+w.g*587+w.b*114)/1000}getLuminance(){let w=this.toRgb(),q,F,K,Z=w.r/255,Q=w.g/255,G=w.b/255;if(Z<=0.03928)q=Z/12.92;else q=Math.pow((Z+0.055)/1.055,2.4);if(Q<=0.03928)F=Q/12.92;else F=Math.pow((Q+0.055)/1.055,2.4);if(G<=0.03928)K=G/12.92;else K=Math.pow((G+0.055)/1.055,2.4);return 0.2126*q+0.7152*F+0.0722*K}getAlpha(){return this.a}setAlpha(w){return this.a=p5(w),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:w}=this.toHsl();return w===0}toHsv(){let w=ww(this.r,this.g,this.b);return{h:w.h*360,s:w.s,v:w.v,a:this.a}}toHsvString(){let w=ww(this.r,this.g,this.b),q=Math.round(w.h*360),F=Math.round(w.s*100),K=Math.round(w.v*100);return this.a===1?`hsv(${q}, ${F}%, ${K}%)`:`hsva(${q}, ${F}%, ${K}%, ${this.roundA})`}toHsl(){let w=e8(this.r,this.g,this.b);return{h:w.h*360,s:w.s,l:w.l,a:this.a}}toHslString(){let w=e8(this.r,this.g,this.b),q=Math.round(w.h*360),F=Math.round(w.s*100),K=Math.round(w.l*100);return this.a===1?`hsl(${q}, ${F}%, ${K}%)`:`hsla(${q}, ${F}%, ${K}%, ${this.roundA})`}toHex(w=!1){return qw(this.r,this.g,this.b,w)}toHexString(w=!1){return"#"+this.toHex(w)}toHex8(w=!1){return u7(this.r,this.g,this.b,this.a,w)}toHex8String(w=!1){return"#"+this.toHex8(w)}toHexShortString(w=!1){return this.a===1?this.toHexString(w):this.toHex8String(w)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let w=Math.round(this.r),q=Math.round(this.g),F=Math.round(this.b);return this.a===1?`rgb(${w}, ${q}, ${F})`:`rgba(${w}, ${q}, ${F}, ${this.roundA})`}toPercentageRgb(){let w=(q)=>`${Math.round(p(q,255)*100)}%`;return{r:w(this.r),g:w(this.g),b:w(this.b),a:this.a}}toPercentageRgbString(){let w=(q)=>Math.round(p(q,255)*100);return this.a===1?`rgb(${w(this.r)}%, ${w(this.g)}%, ${w(this.b)}%)`:`rgba(${w(this.r)}%, ${w(this.g)}%, ${w(this.b)}%, ${this.roundA})`}toCmyk(){return{...Fw(this.r,this.g,this.b)}}toCmykString(){let{c:w,m:q,y:F,k:K}=Fw(this.r,this.g,this.b);return`cmyk(${w}, ${q}, ${F}, ${K})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let w="#"+qw(this.r,this.g,this.b,!1);for(let[q,F]of Object.entries(x2))if(w===F)return q;return!1}toString(w){let q=Boolean(w);w=w??this.format;let F=!1,K=this.a<1&&this.a>=0;if(!q&&K&&(w.startsWith("hex")||w==="name")){if(w==="name"&&this.a===0)return this.toName();return this.toRgbString()}if(w==="rgb")F=this.toRgbString();if(w==="prgb")F=this.toPercentageRgbString();if(w==="hex"||w==="hex6")F=this.toHexString();if(w==="hex3")F=this.toHexString(!0);if(w==="hex4")F=this.toHex8String(!0);if(w==="hex8")F=this.toHex8String();if(w==="name")F=this.toName();if(w==="hsl")F=this.toHslString();if(w==="hsv")F=this.toHsvString();if(w==="cmyk")F=this.toCmykString();return F||this.toHexString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new c(this.toString())}lighten(w=10){let q=this.toHsl();return q.l+=w/100,q.l=j2(q.l),new c(q)}brighten(w=10){let q=this.toRgb();return q.r=Math.max(0,Math.min(255,q.r-Math.round(255*-(w/100)))),q.g=Math.max(0,Math.min(255,q.g-Math.round(255*-(w/100)))),q.b=Math.max(0,Math.min(255,q.b-Math.round(255*-(w/100)))),new c(q)}darken(w=10){let q=this.toHsl();return q.l-=w/100,q.l=j2(q.l),new c(q)}tint(w=10){return this.mix("white",w)}shade(w=10){return this.mix("black",w)}desaturate(w=10){let q=this.toHsl();return q.s-=w/100,q.s=j2(q.s),new c(q)}saturate(w=10){let q=this.toHsl();return q.s+=w/100,q.s=j2(q.s),new c(q)}greyscale(){return this.desaturate(100)}spin(w){let q=this.toHsl(),F=(q.h+w)%360;return q.h=F<0?360+F:F,new c(q)}mix(w,q=50){let F=this.toRgb(),K=new c(w).toRgb(),Z=q/100,Q={r:(K.r-F.r)*Z+F.r,g:(K.g-F.g)*Z+F.g,b:(K.b-F.b)*Z+F.b,a:(K.a-F.a)*Z+F.a};return new c(Q)}analogous(w=6,q=30){let F=this.toHsl(),K=360/q,Z=[this];for(F.h=(F.h-(K*w>>1)+720)%360;--w;)F.h=(F.h+K)%360,Z.push(new c(F));return Z}complement(){let w=this.toHsl();return w.h=(w.h+180)%360,new c(w)}monochromatic(w=6){let q=this.toHsv(),{h:F}=q,{s:K}=q,{v:Z}=q,Q=[],G=1/w;while(w--)Q.push(new c({h:F,s:K,v:Z})),Z=(Z+G)%1;return Q}splitcomplement(){let w=this.toHsl(),{h:q}=w;return[this,new c({h:(q+72)%360,s:w.s,l:w.l}),new c({h:(q+216)%360,s:w.s,l:w.l})]}onBackground(w){let q=this.toRgb(),F=new c(w).toRgb(),K=q.a+F.a*(1-q.a);return new c({r:(q.r*q.a+F.r*F.a*(1-q.a))/K,g:(q.g*q.a+F.g*F.a*(1-q.a))/K,b:(q.b*q.a+F.b*F.a*(1-q.a))/K,a:K})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(w){let q=this.toHsl(),{h:F}=q,K=[this],Z=360/w;for(let Q=1;Q<w;Q++)K.push(new c({h:(F+Q*Z)%360,s:q.s,l:q.l}));return K}equals(w){let q=new c(w);if(this.format==="cmyk"||q.format==="cmyk")return this.toCmykString()===q.toCmykString();return this.toRgbString()===q.toRgbString()}}var m0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},U2=(w)=>(...q)=>({["_$litDirective$"]:w,values:q});class p1{constructor(w){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(w,q,F){this.__part=w,this._$parent=q,this.__attributeIndex=F}_$resolve(w,q){return this.update(w,q)}update(w,q){return this.render(...q)}}class S7 extends p1{constructor(w){super(w);if(w.type!==m0.ATTRIBUTE||w.name!=="class"||w.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(w){return" "+Object.keys(w).filter((q)=>w[q]).join(" ")+" "}update(w,[q]){if(this._previousClasses===void 0){if(this._previousClasses=new Set,w.strings!==void 0)this._staticClasses=new Set(w.strings.join(" ").split(/\s/).filter((K)=>K!==""));for(let K in q)if(q[K]&&!this._staticClasses?.has(K))this._previousClasses.add(K);return this.render(q)}let F=w.element.classList;for(let K of this._previousClasses)if(!(K in q))F.remove(K),this._previousClasses.delete(K);for(let K in q){let Z=!!q[K];if(Z!==this._previousClasses.has(K)&&!this._staticClasses?.has(K))if(Z)F.add(K),this._previousClasses.add(K);else F.remove(K),this._previousClasses.delete(K)}return e}}var z0=U2(S7);var g=(w)=>w??v;var R7="important",g7=" !"+R7,Oz=0-g7.length;class d7 extends p1{constructor(w){super(w);if(w.type!==m0.ATTRIBUTE||w.name!=="style"||w.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(w){return Object.keys(w).reduce((q,F)=>{let K=w[F];if(K==null)return q;return F=F.includes("-")?F:F.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase(),q+`${F}:${K};`},"")}update(w,[q]){let{style:F}=w.element;if(this._previousStyleProperties===void 0)return this._previousStyleProperties=new Set(Object.keys(q)),this.render(q);for(let K of this._previousStyleProperties)if(q[K]==null)if(this._previousStyleProperties.delete(K),K.includes("-"))F.removeProperty(K);else F[K]=null;for(let K in q){let Z=q[K];if(Z!=null){this._previousStyleProperties.add(K);let Q=typeof Z==="string"&&Z.endsWith(g7);if(K.includes("-")||Q)F.setProperty(K,Q?Z.slice(0,Oz):Z,Q?R7:"");else F[K]=Z}}return e}}var T1=U2(d7);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var D=class extends w0{constructor(){super();if(this.hasSlotController=new k2(this,"hint","label"),this.isSafeValue=!1,this.localize=new Q1(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!0,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this._value=null,this.defaultValue=this.getAttribute("value")||null,this.withLabel=!1,this.withHint=!1,this.hasEyeDropper=!1,this.label="",this.hint="",this.format="hex",this.size="medium",this.withoutFormatToggle=!1,this.name=null,this.disabled=!1,this.open=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0},this.handleFocusOut=()=>{this.hasFocus=!1},this.reportValidityAfterShow=()=>{this.removeEventListener("invalid",this.emitInvalid),this.reportValidity(),this.addEventListener("invalid",this.emitInvalid)},this.handleKeyDown=(w)=>{if(this.open&&w.key==="Escape")w.stopPropagation(),this.hide(),this.focus()},this.handleDocumentKeyDown=(w)=>{if(w.key==="Escape"&&this.open){w.stopPropagation(),this.focus(),this.hide();return}if(w.key==="Tab")setTimeout(()=>{let q=this.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;if(!this||q?.closest(this.tagName.toLowerCase())!==this)this.hide()})},this.handleDocumentMouseDown=(w)=>{let F=w.composedPath().some((K)=>K instanceof Element&&(K.closest(".color-picker")||K===this.trigger));if(this&&!F)this.hide()},!o0)this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}static get validators(){let w=o0?[]:[k7()];return[...super.validators,...w]}get validationTarget(){if(this.popup?.active)return this.input;return this.trigger}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(w){if(this._value===w)return;this.valueHasChanged=!0,this._value=w}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("preview-color-copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("preview-color-copied")})}handleFormatToggle(){let w=["hex","rgb","hsl","hsv"],q=(w.indexOf(this.format)+1)%w.length;this.format=w[q],this.setColor(this.value||""),this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})}handleAlphaDrag(w){let q=this.shadowRoot.querySelector(".slider.alpha"),F=q.querySelector(".slider-handle"),{width:K}=q.getBoundingClientRect(),Z=this.value,Q=this.value;F.focus(),w.preventDefault(),i5(q,{onMove:(G)=>{if(this.alpha=V0(G/K*100,0,100),this.syncValues(),this.value!==Q)Q=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.value!==Z)Z=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:w})}handleHueDrag(w){let q=this.shadowRoot.querySelector(".slider.hue"),F=q.querySelector(".slider-handle"),{width:K}=q.getBoundingClientRect(),Z=this.value,Q=this.value;F.focus(),w.preventDefault(),i5(q,{onMove:(G)=>{if(this.hue=V0(G/K*360,0,360),this.syncValues(),this.value!==Q)Q=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input"))})},onStop:()=>{if(this.value!==Z)Z=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:w})}handleGridDrag(w){let q=this.shadowRoot.querySelector(".grid"),F=q.querySelector(".grid-handle"),{width:K,height:Z}=q.getBoundingClientRect(),Q=this.value,G=this.value;F.focus(),w.preventDefault(),this.isDraggingGridHandle=!0,i5(q,{onMove:(X,J)=>{if(this.saturation=V0(X/K*100,0,100),this.brightness=V0(100-J/Z*100,0,100),this.syncValues(),this.value!==G)G=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0}))})},onStop:()=>{if(this.isDraggingGridHandle=!1,this.value!==Q)Q=this.value,this.updateComplete.then(()=>{this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})},initialEvent:w})}handleAlphaKeyDown(w){let q=w.shiftKey?10:1,F=this.value;if(w.key==="ArrowLeft")w.preventDefault(),this.alpha=V0(this.alpha-q,0,100),this.syncValues();if(w.key==="ArrowRight")w.preventDefault(),this.alpha=V0(this.alpha+q,0,100),this.syncValues();if(w.key==="Home")w.preventDefault(),this.alpha=0,this.syncValues();if(w.key==="End")w.preventDefault(),this.alpha=100,this.syncValues();if(this.value!==F)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleHueKeyDown(w){let q=w.shiftKey?10:1,F=this.value;if(w.key==="ArrowLeft")w.preventDefault(),this.hue=V0(this.hue-q,0,360),this.syncValues();if(w.key==="ArrowRight")w.preventDefault(),this.hue=V0(this.hue+q,0,360),this.syncValues();if(w.key==="Home")w.preventDefault(),this.hue=0,this.syncValues();if(w.key==="End")w.preventDefault(),this.hue=360,this.syncValues();if(this.value!==F)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleGridKeyDown(w){let q=w.shiftKey?10:1,F=this.value;if(w.key==="ArrowLeft")w.preventDefault(),this.saturation=V0(this.saturation-q,0,100),this.syncValues();if(w.key==="ArrowRight")w.preventDefault(),this.saturation=V0(this.saturation+q,0,100),this.syncValues();if(w.key==="ArrowUp")w.preventDefault(),this.brightness=V0(this.brightness+q,0,100),this.syncValues();if(w.key==="ArrowDown")w.preventDefault(),this.brightness=V0(this.brightness-q,0,100),this.syncValues();if(this.value!==F)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputChange(w){let q=w.target,F=this.value;if(w.stopPropagation(),this.input.value)this.setColor(q.value),q.value=this.value||"";else this.value="";if(this.value!==F)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}handleInputInput(w){this.updateValidity(),w.stopPropagation()}handleInputKeyDown(w){if(w.key==="Enter"){let q=this.value;if(this.input.value){if(this.setColor(this.input.value),this.input.value=this.value,this.value!==q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});setTimeout(()=>this.input.select())}else this.hue=0}}handleTouchMove(w){w.preventDefault()}parseColor(w){if(!w||w.trim()==="")return null;let q=new c(w);if(!q.isValid)return null;let F=q.toHsl(),K=q.toRgb(),Z=q.toHsv();if(!K||K.r==null||K.g==null||K.b==null)return null;let Q={h:F.h||0,s:(F.s||0)*100,l:(F.l||0)*100,a:F.a||0},G=q.toHexString(),X=q.toHex8String(),J={h:Z.h||0,s:(Z.s||0)*100,v:(Z.v||0)*100,a:Z.a||0};return{hsl:{h:Q.h,s:Q.s,l:Q.l,string:this.setLetterCase(`hsl(${Math.round(Q.h)}, ${Math.round(Q.s)}%, ${Math.round(Q.l)}%)`)},hsla:{h:Q.h,s:Q.s,l:Q.l,a:Q.a,string:this.setLetterCase(`hsla(${Math.round(Q.h)}, ${Math.round(Q.s)}%, ${Math.round(Q.l)}%, ${Q.a.toFixed(2).toString()})`)},hsv:{h:J.h,s:J.s,v:J.v,string:this.setLetterCase(`hsv(${Math.round(J.h)}, ${Math.round(J.s)}%, ${Math.round(J.v)}%)`)},hsva:{h:J.h,s:J.s,v:J.v,a:J.a,string:this.setLetterCase(`hsva(${Math.round(J.h)}, ${Math.round(J.s)}%, ${Math.round(J.v)}%, ${J.a.toFixed(2).toString()})`)},rgb:{r:K.r,g:K.g,b:K.b,string:this.setLetterCase(`rgb(${Math.round(K.r)}, ${Math.round(K.g)}, ${Math.round(K.b)})`)},rgba:{r:K.r,g:K.g,b:K.b,a:K.a||0,string:this.setLetterCase(`rgba(${Math.round(K.r)}, ${Math.round(K.g)}, ${Math.round(K.b)}, ${(K.a||0).toFixed(2).toString()})`)},hex:this.setLetterCase(G),hexa:this.setLetterCase(X)}}setColor(w){let q=this.parseColor(w);if(q===null)return!1;return this.hue=q.hsva.h,this.saturation=q.hsva.s,this.brightness=q.hsva.v,this.alpha=this.opacity?q.hsva.a*100:100,this.syncValues(),!0}setLetterCase(w){if(typeof w!=="string")return"";return this.uppercase?w.toUpperCase():w.toLowerCase()}async syncValues(){let w=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(w===null)return;if(this.format==="hsl")this.inputValue=this.opacity?w.hsla.string:w.hsl.string;else if(this.format==="rgb")this.inputValue=this.opacity?w.rgba.string:w.rgb.string;else if(this.format==="hsv")this.inputValue=this.opacity?w.hsva.string:w.hsv.string;else this.inputValue=this.opacity?w.hexa:w.hex;this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1}handleAfterHide(){this.previewButton.classList.remove("preview-color-copied"),this.updateValidity()}handleAfterShow(){this.updateValidity()}handleEyeDropper(){if(!this.hasEyeDropper)return;new EyeDropper().open().then((q)=>{let F=this.value;if(this.setColor(q.sRGBHex),this.value!==F)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}).catch(()=>{})}selectSwatch(w){let q=this.value;if(!this.disabled){if(this.setColor(w),this.value!==q)this.updateComplete.then(()=>{this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))})}}getHexString(w,q,F,K=100){let Z=new c(`hsva(${w}, ${q}%, ${F}%, ${K/100})`);if(!Z.isValid)return"";return Z.toHex8String()}stopNestedEventPropagation(w){w.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}willUpdate(w){if(super.willUpdate(w),w.has("value"))this.handleValueChange(w.get("value")||"",this.value||"")}handleValueChange(w,q){if(this.isEmpty=!q,!q)this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100;if(!this.isSafeValue){let F=this.parseColor(q);if(F!==null)this.inputValue=this.value||"",this.hue=F.hsva.h,this.saturation=F.hsva.s,this.brightness=F.hsva.v,this.alpha=F.hsva.a*100,this.syncValues();else this.inputValue=w??""}this.requestUpdate()}focus(w){this.trigger.focus(w)}blur(){let w=this.trigger;if(this.hasFocus)w.focus({preventScroll:!0}),w.blur();if(this.popup?.active)this.hide()}getFormattedValue(w="hex"){let q=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(q===null)return"";switch(w){case"hex":return q.hex;case"hexa":return q.hexa;case"rgb":return q.rgb.string;case"rgba":return q.rgba.string;case"hsl":return q.hsl.string;case"hsla":return q.hsla.string;case"hsv":return q.hsv.string;case"hsva":return q.hsva.string;default:return""}}reportValidity(){if(!this.validity.valid&&!this.open){if(this.addEventListener("wa-after-show",this.reportValidityAfterShow,{once:!0}),this.show(),!this.disabled)this.dispatchEvent(new C2);return!1}return super.reportValidity()}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}firstUpdated(w){super.firstUpdated(w),this.hasEyeDropper="EyeDropper"in window}handleTriggerClick(){if(this.open)this.hide();else this.show(),this.focus()}async handleTriggerKeyDown(w){if([" ","Enter"].includes(w.key)){w.preventDefault(),this.handleTriggerClick();return}}handleTriggerKeyUp(w){if(w.key===" ")w.preventDefault()}updateAccessibleTrigger(){let w=this.trigger;if(w)w.setAttribute("aria-haspopup","true"),w.setAttribute("aria-expanded",this.open?"true":"false")}async show(){if(this.open)return;return this.open=!0,i8(this,"wa-after-show")}async hide(){if(!this.open)return;return this.open=!1,i8(this,"wa-after-hide")}addOpenListeners(){this.base.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){if(this.base)this.base.removeEventListener("keydown",this.handleKeyDown);document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open)this.dispatchEvent(new CustomEvent("wa-show")),this.addOpenListeners(),await this.updateComplete,this.base.hidden=!1,this.popup.active=!0,await r8(this.popup.popup,"show-with-scale"),this.dispatchEvent(new CustomEvent("wa-after-show"));else this.dispatchEvent(new CustomEvent("wa-hide")),this.removeOpenListeners(),await r8(this.popup.popup,"hide-with-scale"),this.base.hidden=!0,this.popup.active=!1,this.dispatchEvent(new CustomEvent("wa-after-hide"))}render(){let w=!this.hasUpdated?this.withLabel:this.withLabel||this.hasSlotController.test("label"),q=!this.hasUpdated?this.withHint:this.withHint||this.hasSlotController.test("hint"),F=this.label?!0:!!w,K=this.hint?!0:!!q,Z=this.saturation,Q=100-this.brightness,G=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter((J)=>J.trim()!==""),X=P`
      <div
        part="base"
        class=${z0({"color-picker":!0})}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex="-1"
      >
        <div
          part="grid"
          class="grid"
          style=${T1({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${z0({"grid-handle":!0,"grid-handle-dragging":this.isDraggingGridHandle})}
            style=${T1({top:`${Q}%`,left:`${Z}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${g(this.disabled?void 0:"0")}
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
                style=${T1({left:`${this.hue===0?0:100/(360/this.hue)}%`,backgroundColor:this.getHexString(this.hue,100,100)})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${g(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?P`
                  <div
                    part="slider opacity-slider"
                    class="alpha slider transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="alpha-gradient"
                      style=${T1({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="slider-handle"
                      style=${T1({left:`${this.alpha}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${g(this.disabled?void 0:"0")}
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
            style=${T1({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${!this.withoutFormatToggle?P`
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
            ${this.hasEyeDropper?P`
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

        ${G.length>0?P`
              <div part="swatches" class="swatches">
                ${G.map((J)=>{let k=this.parseColor(J);if(!k)return"";return P`
                    <div
                      part="swatch"
                      class="swatch transparent-bg"
                      tabindex=${g(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${J}
                      @click=${()=>this.selectSwatch(J)}
                      @keydown=${(H)=>!this.disabled&&H.key==="Enter"&&this.setColor(k.hexa)}
                    >
                      <div class="swatch-color" style=${T1({backgroundColor:k.hexa})}></div>
                    </div>
                  `})}
              </div>
            `:""}
      </div>
    `;return P`
      <div
        class=${z0({container:!0,"form-control":!0,"form-control-has-label":F})}
        part="trigger-container form-control"
      >
        <div part="form-control-label" class="label" id="form-control-label">
          <slot name="label">${this.label}</slot>
        </div>

        <button
          id="trigger"
          part="trigger form-control-input"
          class=${z0({trigger:!0,"trigger-empty":this.isEmpty,"transparent-bg":!0,"form-control-input":!0})}
          style=${T1({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
          class=${z0({"has-slotted":K})}
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
    `}};D.css=[X7,Y2,r5,J7];D.shadowRootOptions={...w0.shadowRootOptions,delegatesFocus:!0};U([s('[part~="base"]')],D.prototype,"base",2);U([s('[part~="input"]')],D.prototype,"input",2);U([s('[part~="form-control-label"]')],D.prototype,"triggerLabel",2);U([s('[part~="form-control-input"]')],D.prototype,"triggerButton",2);U([s(".color-popup")],D.prototype,"popup",2);U([s('[part~="preview"]')],D.prototype,"previewButton",2);U([s('[part~="trigger"]')],D.prototype,"trigger",2);U([i()],D.prototype,"hasFocus",2);U([i()],D.prototype,"isDraggingGridHandle",2);U([i()],D.prototype,"isEmpty",2);U([i()],D.prototype,"inputValue",2);U([i()],D.prototype,"hue",2);U([i()],D.prototype,"saturation",2);U([i()],D.prototype,"brightness",2);U([i()],D.prototype,"alpha",2);U([i()],D.prototype,"value",1);U([B({attribute:"value",reflect:!0})],D.prototype,"defaultValue",2);U([B({attribute:"with-label",reflect:!0,type:Boolean})],D.prototype,"withLabel",2);U([B({attribute:"with-hint",reflect:!0,type:Boolean})],D.prototype,"withHint",2);U([i()],D.prototype,"hasEyeDropper",2);U([B()],D.prototype,"label",2);U([B({attribute:"hint"})],D.prototype,"hint",2);U([B()],D.prototype,"format",2);U([B({reflect:!0})],D.prototype,"size",2);U([B({attribute:"without-format-toggle",type:Boolean})],D.prototype,"withoutFormatToggle",2);U([B({reflect:!0})],D.prototype,"name",2);U([B({type:Boolean})],D.prototype,"disabled",2);U([B({type:Boolean,reflect:!0})],D.prototype,"open",2);U([B({type:Boolean})],D.prototype,"opacity",2);U([B({type:Boolean})],D.prototype,"uppercase",2);U([B()],D.prototype,"swatches",2);U([B({type:Boolean,reflect:!0})],D.prototype,"required",2);U([N7({passive:!1})],D.prototype,"handleTouchMove",1);U([g0("format",{waitUntilFirstUpdate:!0})],D.prototype,"handleFormatChange",1);U([g0("opacity")],D.prototype,"handleOpacityChange",1);U([g0("value")],D.prototype,"handleValueChange",1);U([g0("open",{waitUntilFirstUpdate:!0})],D.prototype,"handleOpenChange",1);D=U([X0("wa-color-picker")],D);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var h7=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function C7(w,q){let F=w.metaKey||w.ctrlKey||w.shiftKey||w.altKey;if(w.key==="Enter"&&!F)setTimeout(()=>{if(!w.defaultPrevented&&!w.isComposing)Wz(q)})}function Wz(w){let q=null;if("form"in w)q=w.form;if(!q&&"getForm"in w)q=w.getForm();if(!q)return;let F=[...q.elements];if(F.length===1){q.requestSubmit(null);return}let K=F.find((Z)=>Z.type==="submit"&&!Z.matches(":disabled"));if(!K)return;if(["input","button"].includes(K.localName))q.requestSubmit(K);else K.click()}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var P7=x`
  :host {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var s5=()=>{return{checkValidity(w){let q=w.input,F={message:"",isValid:!0,invalidKeys:[]};if(!q)return F;let K=!0;if("checkValidity"in q)K=q.checkValidity();if(K)return F;if(F.isValid=!1,"validationMessage"in q)F.message=q.validationMessage;if(!("validity"in q))return F.invalidKeys.push("customError"),F;for(let Z in q.validity){if(Z==="valid")continue;let Q=Z;if(q.validity[Q])F.invalidKeys.push(Q)}return F}}};var Az=!0,tY=Az&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(w)=>w;var j7=(w,q)=>q===void 0?w?._$litType$!==void 0:w?._$litType$===q;var _7=(w)=>w.strings===void 0;var Iz={},x7=(w,q=Iz)=>w._$committedValue=q;class v7 extends p1{constructor(w){super(w);if(!(w.type===m0.PROPERTY||w.type===m0.ATTRIBUTE||w.type===m0.BOOLEAN_ATTRIBUTE))throw Error("The `live` directive is not allowed on child or event bindings");if(!_7(w))throw Error("`live` bindings can only contain a single expression")}render(w){return w}update(w,[q]){if(q===e||q===v)return q;let{element:F,name:K}=w;if(w.type===m0.PROPERTY){if(q===F[K])return e}else if(w.type===m0.BOOLEAN_ATTRIBUTE){if(!!q===F.hasAttribute(K))return e}else if(w.type===m0.ATTRIBUTE){if(F.getAttribute(K)===String(q))return e}return x7(w),q}}var c7=U2(v7);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var E=class extends w0{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new k2(this,"hint","label"),this.localize=new Q1(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,s5()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(w){if(this._value===w)return;this.valueHasChanged=!0,this._value=w}handleChange(w){this.value=this.input.value,this.relayNativeEvent(w,{bubbles:!0,composed:!0})}handleClearClick(w){if(w.preventDefault(),this.value!=="")this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new h7),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(w){C7(w,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(w){if(super.updated(w),w.has("value"))this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(w){this.input.focus(w)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(w,q,F="none"){this.input.setSelectionRange(w,q,F)}setRangeText(w,q,F,K="preserve"){let Z=q??this.input.selectionStart,Q=F??this.input.selectionEnd;if(this.input.setRangeText(w,Z,Q,K),this.value!==this.input.value)this.value=this.input.value}showPicker(){if("showPicker"in HTMLInputElement.prototype)this.input.showPicker()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let w=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,q=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,F=this.label?!0:!!w,K=this.hint?!0:!!q,Z=this.withClear&&!this.disabled&&!this.readonly,Q=(o0||this.hasUpdated)&&Z&&(typeof this.value==="number"||this.value&&this.value.length>0);return P`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${F?"false":"true"}>
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
          .value=${c7(this.value??"")}
          autocapitalize=${g(this.autocapitalize)}
          autocomplete=${g(this.autocomplete)}
          autocorrect=${g(this.autocorrect)}
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

        ${Q?P`
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
        ${this.passwordToggle&&!this.disabled?P`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${!this.passwordVisible?P`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:P`
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
        class=${z0({"has-slotted":K})}
        aria-hidden=${K?"false":"true"}
        >${this.hint}</slot
      >
    `}};E.css=[Y2,r5,P7];E.shadowRootOptions={...w0.shadowRootOptions,delegatesFocus:!0};U([s("input")],E.prototype,"input",2);U([B()],E.prototype,"title",2);U([B({reflect:!0})],E.prototype,"type",2);U([i()],E.prototype,"value",1);U([B({attribute:"value",reflect:!0})],E.prototype,"defaultValue",2);U([B({reflect:!0})],E.prototype,"size",2);U([B({reflect:!0})],E.prototype,"appearance",2);U([B({type:Boolean,reflect:!0})],E.prototype,"pill",2);U([B()],E.prototype,"label",2);U([B({attribute:"hint"})],E.prototype,"hint",2);U([B({attribute:"with-clear",type:Boolean})],E.prototype,"withClear",2);U([B()],E.prototype,"placeholder",2);U([B({type:Boolean,reflect:!0})],E.prototype,"readonly",2);U([B({attribute:"password-toggle",type:Boolean})],E.prototype,"passwordToggle",2);U([B({attribute:"password-visible",type:Boolean})],E.prototype,"passwordVisible",2);U([B({attribute:"without-spin-buttons",type:Boolean})],E.prototype,"withoutSpinButtons",2);U([B({type:Boolean,reflect:!0})],E.prototype,"required",2);U([B()],E.prototype,"pattern",2);U([B({type:Number})],E.prototype,"minlength",2);U([B({type:Number})],E.prototype,"maxlength",2);U([B()],E.prototype,"min",2);U([B()],E.prototype,"max",2);U([B()],E.prototype,"step",2);U([B()],E.prototype,"autocapitalize",2);U([B()],E.prototype,"autocorrect",2);U([B()],E.prototype,"autocomplete",2);U([B({type:Boolean})],E.prototype,"autofocus",2);U([B()],E.prototype,"enterkeyhint",2);U([B({type:Boolean,converter:{fromAttribute:(w)=>!w||w==="false"?!1:!0,toAttribute:(w)=>w?"true":"false"}})],E.prototype,"spellcheck",2);U([B()],E.prototype,"inputmode",2);U([B({attribute:"with-label",type:Boolean})],E.prototype,"withLabel",2);U([B({attribute:"with-hint",type:Boolean})],E.prototype,"withHint",2);U([g0("step",{waitUntilFirstUpdate:!0})],E.prototype,"handleStepChange",1);E=U([X0("wa-input")],E);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var o7=class extends Event{constructor(){super("wa-reposition",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var m7=x`
  :host {
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
`;var{min:G1,max:K0,round:c2,floor:o2}=Math,i0=(w)=>({x:w,y:w}),uz={left:"right",right:"left",bottom:"top",top:"bottom"},Ez={start:"end",end:"start"};function t5(w,q,F){return K0(w,G1(q,F))}function n1(w,q){return typeof w==="function"?w(q):w}function D1(w){return w.split("-")[0]}function s1(w){return w.split("-")[1]}function Zw(w){return w==="x"?"y":"x"}function e5(w){return w==="y"?"height":"width"}var yz=new Set(["top","bottom"]);function J1(w){return yz.has(D1(w))?"y":"x"}function w4(w){return Zw(J1(w))}function l7(w,q,F){if(F===void 0)F=!1;let K=s1(w),Z=w4(w),Q=e5(Z),G=Z==="x"?K===(F?"end":"start")?"right":"left":K==="start"?"bottom":"top";if(q.reference[Q]>q.floating[Q])G=v2(G);return[G,v2(G)]}function p7(w){let q=v2(w);return[a5(w),q,a5(q)]}function a5(w){return w.replace(/start|end/g,(q)=>Ez[q])}var i7=["left","right"],r7=["right","left"],$z=["top","bottom"],Sz=["bottom","top"];function Rz(w,q,F){switch(w){case"top":case"bottom":if(F)return q?r7:i7;return q?i7:r7;case"left":case"right":return q?$z:Sz;default:return[]}}function n7(w,q,F,K){let Z=s1(w),Q=Rz(D1(w),F==="start",K);if(Z){if(Q=Q.map((G)=>G+"-"+Z),q)Q=Q.concat(Q.map(a5))}return Q}function v2(w){return w.replace(/left|right|bottom|top/g,(q)=>uz[q])}function gz(w){return{top:0,right:0,bottom:0,left:0,...w}}function Qw(w){return typeof w!=="number"?gz(w):{top:w,right:w,bottom:w,left:w}}function a1(w){let{x:q,y:F,width:K,height:Z}=w;return{width:K,height:Z,top:F,left:q,right:q+K,bottom:F+Z,x:q,y:F}}function s7(w,q,F){let{reference:K,floating:Z}=w,Q=J1(q),G=w4(q),X=e5(G),J=D1(q),k=Q==="y",H=K.x+K.width/2-Z.width/2,b=K.y+K.height/2-Z.height/2,N=K[X]/2-Z[X]/2,L;switch(J){case"top":L={x:H,y:K.y-Z.height};break;case"bottom":L={x:H,y:K.y+K.height};break;case"right":L={x:K.x+K.width,y:b};break;case"left":L={x:K.x-Z.width,y:b};break;default:L={x:K.x,y:K.y}}switch(s1(q)){case"start":L[G]-=N*(F&&k?-1:1);break;case"end":L[G]+=N*(F&&k?-1:1);break}return L}var a7=async(w,q,F)=>{let{placement:K="bottom",strategy:Z="absolute",middleware:Q=[],platform:G}=F,X=Q.filter(Boolean),J=await(G.isRTL==null?void 0:G.isRTL(q)),k=await G.getElementRects({reference:w,floating:q,strategy:Z}),{x:H,y:b}=s7(k,K,J),N=K,L={},f=0;for(let V=0;V<X.length;V++){let{name:W,fn:I}=X[V],{x:$,y:R,data:m,reset:j}=await I({x:H,y:b,initialPlacement:K,placement:N,strategy:Z,middlewareData:L,rects:k,platform:G,elements:{reference:w,floating:q}});if(H=$!=null?$:H,b=R!=null?R:b,L={...L,[W]:{...L[W],...m}},j&&f<=50){if(f++,typeof j==="object"){if(j.placement)N=j.placement;if(j.rects)k=j.rects===!0?await G.getElementRects({reference:w,floating:q,strategy:Z}):j.rects;({x:H,y:b}=s7(k,N,J))}V=-1}}return{x:H,y:b,placement:N,strategy:Z,middlewareData:L}};async function q4(w,q){var F;if(q===void 0)q={};let{x:K,y:Z,platform:Q,rects:G,elements:X,strategy:J}=w,{boundary:k="clippingAncestors",rootBoundary:H="viewport",elementContext:b="floating",altBoundary:N=!1,padding:L=0}=n1(q,w),f=Qw(L),W=X[N?b==="floating"?"reference":"floating":b],I=a1(await Q.getClippingRect({element:((F=await(Q.isElement==null?void 0:Q.isElement(W)))!=null?F:!0)?W:W.contextElement||await(Q.getDocumentElement==null?void 0:Q.getDocumentElement(X.floating)),boundary:k,rootBoundary:H,strategy:J})),$=b==="floating"?{x:K,y:Z,width:G.floating.width,height:G.floating.height}:G.reference,R=await(Q.getOffsetParent==null?void 0:Q.getOffsetParent(X.floating)),m=await(Q.isElement==null?void 0:Q.isElement(R))?await(Q.getScale==null?void 0:Q.getScale(R))||{x:1,y:1}:{x:1,y:1},j=a1(Q.convertOffsetParentRelativeRectToViewportRelativeRect?await Q.convertOffsetParentRelativeRectToViewportRelativeRect({elements:X,rect:$,offsetParent:R,strategy:J}):$);return{top:(I.top-j.top+f.top)/m.y,bottom:(j.bottom-I.bottom+f.bottom)/m.y,left:(I.left-j.left+f.left)/m.x,right:(j.right-I.right+f.right)/m.x}}var t7=(w)=>({name:"arrow",options:w,async fn(q){let{x:F,y:K,placement:Z,rects:Q,platform:G,elements:X,middlewareData:J}=q,{element:k,padding:H=0}=n1(w,q)||{};if(k==null)return{};let b=Qw(H),N={x:F,y:K},L=w4(Z),f=e5(L),V=await G.getDimensions(k),W=L==="y",I=W?"top":"left",$=W?"bottom":"right",R=W?"clientHeight":"clientWidth",m=Q.reference[f]+Q.reference[L]-N[L]-Q.floating[f],j=N[L]-Q.reference[L],B0=await(G.getOffsetParent==null?void 0:G.getOffsetParent(k)),l=B0?B0[R]:0;if(!l||!await(G.isElement==null?void 0:G.isElement(B0)))l=X.floating[R]||Q.floating[f];let $0=m/2-j/2,S0=l/2-V[f]/2-1,Q0=G1(b[I],S0),j0=G1(b[$],S0),R0=Q0,K1=l-V[f]-j0,a=l/2-V[f]/2+$0,Z1=t5(R0,a,K1),_0=!J.arrow&&s1(Z)!=null&&a!==Z1&&Q.reference[f]/2-(a<R0?Q0:j0)-V[f]/2<0,M0=_0?a<R0?a-R0:a-K1:0;return{[L]:N[L]+M0,data:{[L]:Z1,centerOffset:a-Z1-M0,..._0&&{alignmentOffset:M0}},reset:_0}}});var e7=function(w){if(w===void 0)w={};return{name:"flip",options:w,async fn(q){var F,K;let{placement:Z,middlewareData:Q,rects:G,initialPlacement:X,platform:J,elements:k}=q,{mainAxis:H=!0,crossAxis:b=!0,fallbackPlacements:N,fallbackStrategy:L="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:V=!0,...W}=n1(w,q);if((F=Q.arrow)!=null&&F.alignmentOffset)return{};let I=D1(Z),$=J1(X),R=D1(X)===X,m=await(J.isRTL==null?void 0:J.isRTL(k.floating)),j=N||(R||!V?[v2(X)]:p7(X)),B0=f!=="none";if(!N&&B0)j.push(...n7(X,V,f,m));let l=[X,...j],$0=await q4(q,W),S0=[],Q0=((K=Q.flip)==null?void 0:K.overflows)||[];if(H)S0.push($0[I]);if(b){let a=l7(Z,G,m);S0.push($0[a[0]],$0[a[1]])}if(Q0=[...Q0,{placement:Z,overflows:S0}],!S0.every((a)=>a<=0)){var j0,R0;let a=(((j0=Q.flip)==null?void 0:j0.index)||0)+1,Z1=l[a];if(Z1){if(!(b==="alignment"?$!==J1(Z1):!1)||Q0.every((G0)=>J1(G0.placement)===$?G0.overflows[0]>0:!0))return{data:{index:a,overflows:Q0},reset:{placement:Z1}}}let _0=(R0=Q0.filter((M0)=>M0.overflows[0]<=0).sort((M0,G0)=>M0.overflows[1]-G0.overflows[1])[0])==null?void 0:R0.placement;if(!_0)switch(L){case"bestFit":{var K1;let M0=(K1=Q0.filter((G0)=>{if(B0){let x0=J1(G0.placement);return x0===$||x0==="y"}return!0}).map((G0)=>[G0.placement,G0.overflows.filter((x0)=>x0>0).reduce((x0,P5)=>x0+P5,0)]).sort((G0,x0)=>G0[1]-x0[1])[0])==null?void 0:K1[0];if(M0)_0=M0;break}case"initialPlacement":_0=X;break}if(Z!==_0)return{reset:{placement:_0}}}return{}}}};var dz=new Set(["left","top"]);async function hz(w,q){let{placement:F,platform:K,elements:Z}=w,Q=await(K.isRTL==null?void 0:K.isRTL(Z.floating)),G=D1(F),X=s1(F),J=J1(F)==="y",k=dz.has(G)?-1:1,H=Q&&J?-1:1,b=n1(q,w),{mainAxis:N,crossAxis:L,alignmentAxis:f}=typeof b==="number"?{mainAxis:b,crossAxis:0,alignmentAxis:null}:{mainAxis:b.mainAxis||0,crossAxis:b.crossAxis||0,alignmentAxis:b.alignmentAxis};if(X&&typeof f==="number")L=X==="end"?f*-1:f;return J?{x:L*H,y:N*k}:{x:N*k,y:L*H}}var w9=function(w){if(w===void 0)w=0;return{name:"offset",options:w,async fn(q){var F,K;let{x:Z,y:Q,placement:G,middlewareData:X}=q,J=await hz(q,w);if(G===((F=X.offset)==null?void 0:F.placement)&&(K=X.arrow)!=null&&K.alignmentOffset)return{};return{x:Z+J.x,y:Q+J.y,data:{...J,placement:G}}}}},q9=function(w){if(w===void 0)w={};return{name:"shift",options:w,async fn(q){let{x:F,y:K,placement:Z}=q,{mainAxis:Q=!0,crossAxis:G=!1,limiter:X={fn:(W)=>{let{x:I,y:$}=W;return{x:I,y:$}}},...J}=n1(w,q),k={x:F,y:K},H=await q4(q,J),b=J1(D1(Z)),N=Zw(b),L=k[N],f=k[b];if(Q){let W=N==="y"?"top":"left",I=N==="y"?"bottom":"right",$=L+H[W],R=L-H[I];L=t5($,L,R)}if(G){let W=b==="y"?"top":"left",I=b==="y"?"bottom":"right",$=f+H[W],R=f-H[I];f=t5($,f,R)}let V=X.fn({...q,[N]:L,[b]:f});return{...V,data:{x:V.x-F,y:V.y-K,enabled:{[N]:Q,[b]:G}}}}}};var F9=function(w){if(w===void 0)w={};return{name:"size",options:w,async fn(q){var F,K;let{placement:Z,rects:Q,platform:G,elements:X}=q,{apply:J=()=>{},...k}=n1(w,q),H=await q4(q,k),b=D1(Z),N=s1(Z),L=J1(Z)==="y",{width:f,height:V}=Q.floating,W,I;if(b==="top"||b==="bottom")W=b,I=N===(await(G.isRTL==null?void 0:G.isRTL(X.floating))?"start":"end")?"left":"right";else I=b,W=N==="end"?"top":"bottom";let $=V-H.top-H.bottom,R=f-H.left-H.right,m=G1(V-H[W],$),j=G1(f-H[I],R),B0=!q.middlewareData.shift,l=m,$0=j;if((F=q.middlewareData.shift)!=null&&F.enabled.x)$0=R;if((K=q.middlewareData.shift)!=null&&K.enabled.y)l=$;if(B0&&!N){let Q0=K0(H.left,0),j0=K0(H.right,0),R0=K0(H.top,0),K1=K0(H.bottom,0);if(L)$0=f-2*(Q0!==0||j0!==0?Q0+j0:K0(H.left,H.right));else l=V-2*(R0!==0||K1!==0?R0+K1:K0(H.top,H.bottom))}await J({...q,availableWidth:$0,availableHeight:l});let S0=await G.getDimensions(X.floating);if(f!==S0.width||V!==S0.height)return{reset:{rects:!0}};return{}}}};function F4(){return typeof window<"u"}function t1(w){if(K9(w))return(w.nodeName||"").toLowerCase();return"#document"}function Y0(w){var q;return(w==null||(q=w.ownerDocument)==null?void 0:q.defaultView)||window}function r0(w){var q;return(q=(K9(w)?w.ownerDocument:w.document)||window.document)==null?void 0:q.documentElement}function K9(w){if(!F4())return!1;return w instanceof Node||w instanceof Y0(w).Node}function h0(w){if(!F4())return!1;return w instanceof Element||w instanceof Y0(w).Element}function l0(w){if(!F4())return!1;return w instanceof HTMLElement||w instanceof Y0(w).HTMLElement}function z9(w){if(!F4()||typeof ShadowRoot>"u")return!1;return w instanceof ShadowRoot||w instanceof Y0(w).ShadowRoot}var Cz=new Set(["inline","contents"]);function b2(w){let{overflow:q,overflowX:F,overflowY:K,display:Z}=C0(w);return/auto|scroll|overlay|hidden|clip/.test(q+K+F)&&!Cz.has(Z)}var Pz=new Set(["table","td","th"]);function Z9(w){return Pz.has(t1(w))}var jz=[":popover-open",":modal"];function m2(w){return jz.some((q)=>{try{return w.matches(q)}catch(F){return!1}})}var _z=["transform","translate","scale","rotate","perspective"],xz=["transform","translate","scale","rotate","perspective","filter"],vz=["paint","layout","strict","content"];function B2(w){let q=z4(),F=h0(w)?C0(w):w;return _z.some((K)=>F[K]?F[K]!=="none":!1)||(F.containerType?F.containerType!=="normal":!1)||!q&&(F.backdropFilter?F.backdropFilter!=="none":!1)||!q&&(F.filter?F.filter!=="none":!1)||xz.some((K)=>(F.willChange||"").includes(K))||vz.some((K)=>(F.contain||"").includes(K))}function Q9(w){let q=O1(w);while(l0(q)&&!e1(q)){if(B2(q))return q;else if(m2(q))return null;q=O1(q)}return null}function z4(){if(typeof CSS>"u"||!CSS.supports)return!1;return CSS.supports("-webkit-backdrop-filter","none")}var cz=new Set(["html","body","#document"]);function e1(w){return cz.has(t1(w))}function C0(w){return Y0(w).getComputedStyle(w)}function i2(w){if(h0(w))return{scrollLeft:w.scrollLeft,scrollTop:w.scrollTop};return{scrollLeft:w.scrollX,scrollTop:w.scrollY}}function O1(w){if(t1(w)==="html")return w;let q=w.assignedSlot||w.parentNode||z9(w)&&w.host||r0(w);return z9(q)?q.host:q}function G9(w){let q=O1(w);if(e1(q))return w.ownerDocument?w.ownerDocument.body:w.body;if(l0(q)&&b2(q))return q;return G9(q)}function W1(w,q,F){var K;if(q===void 0)q=[];if(F===void 0)F=!0;let Z=G9(w),Q=Z===((K=w.ownerDocument)==null?void 0:K.body),G=Y0(Z);if(Q){let X=K4(G);return q.concat(G,G.visualViewport||[],b2(Z)?Z:[],X&&F?W1(X):[])}return q.concat(Z,W1(Z,[],F))}function K4(w){return w.parent&&Object.getPrototypeOf(w.parent)?w.frameElement:null}function Y9(w){let q=C0(w),F=parseFloat(q.width)||0,K=parseFloat(q.height)||0,Z=l0(w),Q=Z?w.offsetWidth:F,G=Z?w.offsetHeight:K,X=c2(F)!==Q||c2(K)!==G;if(X)F=Q,K=G;return{width:F,height:K,$:X}}function Jw(w){return!h0(w)?w.contextElement:w}function M2(w){let q=Jw(w);if(!l0(q))return i0(1);let F=q.getBoundingClientRect(),{width:K,height:Z,$:Q}=Y9(q),G=(Q?c2(F.width):F.width)/K,X=(Q?c2(F.height):F.height)/Z;if(!G||!Number.isFinite(G))G=1;if(!X||!Number.isFinite(X))X=1;return{x:G,y:X}}var oz=i0(0);function H9(w){let q=Y0(w);if(!z4()||!q.visualViewport)return oz;return{x:q.visualViewport.offsetLeft,y:q.visualViewport.offsetTop}}function mz(w,q,F){if(q===void 0)q=!1;if(!F||q&&F!==Y0(w))return!1;return q}function w2(w,q,F,K){if(q===void 0)q=!1;if(F===void 0)F=!1;let Z=w.getBoundingClientRect(),Q=Jw(w),G=i0(1);if(q)if(K){if(h0(K))G=M2(K)}else G=M2(w);let X=mz(Q,F,K)?H9(Q):i0(0),J=(Z.left+X.x)/G.x,k=(Z.top+X.y)/G.y,H=Z.width/G.x,b=Z.height/G.y;if(Q){let N=Y0(Q),L=K&&h0(K)?Y0(K):K,f=N,V=K4(f);while(V&&K&&L!==f){let W=M2(V),I=V.getBoundingClientRect(),$=C0(V),R=I.left+(V.clientLeft+parseFloat($.paddingLeft))*W.x,m=I.top+(V.clientTop+parseFloat($.paddingTop))*W.y;J*=W.x,k*=W.y,H*=W.x,b*=W.y,J+=R,k+=m,f=Y0(V),V=K4(f)}}return a1({width:H,height:b,x:J,y:k})}function Z4(w,q){let F=i2(w).scrollLeft;if(!q)return w2(r0(w)).left+F;return q.left+F}function U9(w,q){let F=w.getBoundingClientRect(),K=F.left+q.scrollLeft-Z4(w,F),Z=F.top+q.scrollTop;return{x:K,y:Z}}function iz(w){let{elements:q,rect:F,offsetParent:K,strategy:Z}=w,Q=Z==="fixed",G=r0(K),X=q?m2(q.floating):!1;if(K===G||X&&Q)return F;let J={scrollLeft:0,scrollTop:0},k=i0(1),H=i0(0),b=l0(K);if(b||!b&&!Q){if(t1(K)!=="body"||b2(G))J=i2(K);if(l0(K)){let L=w2(K);k=M2(K),H.x=L.x+K.clientLeft,H.y=L.y+K.clientTop}}let N=G&&!b&&!Q?U9(G,J):i0(0);return{width:F.width*k.x,height:F.height*k.y,x:F.x*k.x-J.scrollLeft*k.x+H.x+N.x,y:F.y*k.y-J.scrollTop*k.y+H.y+N.y}}function rz(w){return Array.from(w.getClientRects())}function lz(w){let q=r0(w),F=i2(w),K=w.ownerDocument.body,Z=K0(q.scrollWidth,q.clientWidth,K.scrollWidth,K.clientWidth),Q=K0(q.scrollHeight,q.clientHeight,K.scrollHeight,K.clientHeight),G=-F.scrollLeft+Z4(w),X=-F.scrollTop;if(C0(K).direction==="rtl")G+=K0(q.clientWidth,K.clientWidth)-Z;return{width:Z,height:Q,x:G,y:X}}var J9=25;function pz(w,q){let F=Y0(w),K=r0(w),Z=F.visualViewport,Q=K.clientWidth,G=K.clientHeight,X=0,J=0;if(Z){Q=Z.width,G=Z.height;let H=z4();if(!H||H&&q==="fixed")X=Z.offsetLeft,J=Z.offsetTop}let k=Z4(K);if(k<=0){let H=K.ownerDocument,b=H.body,N=getComputedStyle(b),L=H.compatMode==="CSS1Compat"?parseFloat(N.marginLeft)+parseFloat(N.marginRight)||0:0,f=Math.abs(K.clientWidth-b.clientWidth-L);if(f<=J9)Q-=f}else if(k<=J9)Q+=k;return{width:Q,height:G,x:X,y:J}}var nz=new Set(["absolute","fixed"]);function sz(w,q){let F=w2(w,!0,q==="fixed"),K=F.top+w.clientTop,Z=F.left+w.clientLeft,Q=l0(w)?M2(w):i0(1),G=w.clientWidth*Q.x,X=w.clientHeight*Q.y,J=Z*Q.x,k=K*Q.y;return{width:G,height:X,x:J,y:k}}function X9(w,q,F){let K;if(q==="viewport")K=pz(w,F);else if(q==="document")K=lz(r0(w));else if(h0(q))K=sz(q,F);else{let Z=H9(w);K={x:q.x-Z.x,y:q.y-Z.y,width:q.width,height:q.height}}return a1(K)}function b9(w,q){let F=O1(w);if(F===q||!h0(F)||e1(F))return!1;return C0(F).position==="fixed"||b9(F,q)}function az(w,q){let F=q.get(w);if(F)return F;let K=W1(w,[],!1).filter((X)=>h0(X)&&t1(X)!=="body"),Z=null,Q=C0(w).position==="fixed",G=Q?O1(w):w;while(h0(G)&&!e1(G)){let X=C0(G),J=B2(G);if(!J&&X.position==="fixed")Z=null;if(Q?!J&&!Z:!J&&X.position==="static"&&!!Z&&nz.has(Z.position)||b2(G)&&!J&&b9(w,G))K=K.filter((H)=>H!==G);else Z=X;G=O1(G)}return q.set(w,K),K}function tz(w){let{element:q,boundary:F,rootBoundary:K,strategy:Z}=w,G=[...F==="clippingAncestors"?m2(q)?[]:az(q,this._c):[].concat(F),K],X=G[0],J=G.reduce((k,H)=>{let b=X9(q,H,Z);return k.top=K0(b.top,k.top),k.right=G1(b.right,k.right),k.bottom=G1(b.bottom,k.bottom),k.left=K0(b.left,k.left),k},X9(q,X,Z));return{width:J.right-J.left,height:J.bottom-J.top,x:J.left,y:J.top}}function ez(w){let{width:q,height:F}=Y9(w);return{width:q,height:F}}function wK(w,q,F){let K=l0(q),Z=r0(q),Q=F==="fixed",G=w2(w,!0,Q,q),X={scrollLeft:0,scrollTop:0},J=i0(0);function k(){J.x=Z4(Z)}if(K||!K&&!Q){if(t1(q)!=="body"||b2(Z))X=i2(q);if(K){let L=w2(q,!0,Q,q);J.x=L.x+q.clientLeft,J.y=L.y+q.clientTop}else if(Z)k()}if(Q&&!K&&Z)k();let H=Z&&!K&&!Q?U9(Z,X):i0(0),b=G.left+X.scrollLeft-J.x-H.x,N=G.top+X.scrollTop-J.y-H.y;return{x:b,y:N,width:G.width,height:G.height}}function Gw(w){return C0(w).position==="static"}function k9(w,q){if(!l0(w)||C0(w).position==="fixed")return null;if(q)return q(w);let F=w.offsetParent;if(r0(w)===F)F=F.ownerDocument.body;return F}function B9(w,q){let F=Y0(w);if(m2(w))return F;if(!l0(w)){let Z=O1(w);while(Z&&!e1(Z)){if(h0(Z)&&!Gw(Z))return Z;Z=O1(Z)}return F}let K=k9(w,q);while(K&&Z9(K)&&Gw(K))K=k9(K,q);if(K&&e1(K)&&Gw(K)&&!B2(K))return F;return K||Q9(w)||F}var qK=async function(w){let q=this.getOffsetParent||B9,F=this.getDimensions,K=await F(w.floating);return{reference:wK(w.reference,await q(w.floating),w.strategy),floating:{x:0,y:0,width:K.width,height:K.height}}};function FK(w){return C0(w).direction==="rtl"}var r2={convertOffsetParentRelativeRectToViewportRelativeRect:iz,getDocumentElement:r0,getClippingRect:tz,getOffsetParent:B9,getElementRects:qK,getClientRects:rz,getDimensions:ez,getScale:M2,isElement:h0,isRTL:FK};function M9(w,q){return w.x===q.x&&w.y===q.y&&w.width===q.width&&w.height===q.height}function zK(w,q){let F=null,K,Z=r0(w);function Q(){var X;clearTimeout(K),(X=F)==null||X.disconnect(),F=null}function G(X,J){if(X===void 0)X=!1;if(J===void 0)J=1;Q();let k=w.getBoundingClientRect(),{left:H,top:b,width:N,height:L}=k;if(!X)q();if(!N||!L)return;let f=o2(b),V=o2(Z.clientWidth-(H+N)),W=o2(Z.clientHeight-(b+L)),I=o2(H),R={rootMargin:-f+"px "+-V+"px "+-W+"px "+-I+"px",threshold:K0(0,G1(1,J))||1},m=!0;function j(B0){let l=B0[0].intersectionRatio;if(l!==J){if(!m)return G();if(!l)K=setTimeout(()=>{G(!1,0.0000001)},1000);else G(!1,l)}if(l===1&&!M9(k,w.getBoundingClientRect()))G();m=!1}try{F=new IntersectionObserver(j,{...R,root:Z.ownerDocument})}catch(B0){F=new IntersectionObserver(j,R)}F.observe(w)}return G(!0),Q}function L9(w,q,F,K){if(K===void 0)K={};let{ancestorScroll:Z=!0,ancestorResize:Q=!0,elementResize:G=typeof ResizeObserver==="function",layoutShift:X=typeof IntersectionObserver==="function",animationFrame:J=!1}=K,k=Jw(w),H=Z||Q?[...k?W1(k):[],...W1(q)]:[];H.forEach((I)=>{Z&&I.addEventListener("scroll",F,{passive:!0}),Q&&I.addEventListener("resize",F)});let b=k&&X?zK(k,F):null,N=-1,L=null;if(G){if(L=new ResizeObserver((I)=>{let[$]=I;if($&&$.target===k&&L)L.unobserve(q),cancelAnimationFrame(N),N=requestAnimationFrame(()=>{var R;(R=L)==null||R.observe(q)});F()}),k&&!J)L.observe(k);L.observe(q)}let f,V=J?w2(w):null;if(J)W();function W(){let I=w2(w);if(V&&!M9(V,I))F();V=I,f=requestAnimationFrame(W)}return F(),()=>{var I;if(H.forEach(($)=>{Z&&$.removeEventListener("scroll",F),Q&&$.removeEventListener("resize",F)}),b==null||b(),(I=L)==null||I.disconnect(),L=null,J)cancelAnimationFrame(f)}}var N9=w9;var f9=q9,V9=e7,Xw=F9;var T9=t7;var D9=(w,q,F)=>{let K=new Map,Z={platform:r2,...F},Q={...Z.platform,_c:K};return a7(w,q,{...Z,platform:Q})};function O9(w){return KK(w)}function kw(w){if(w.assignedSlot)return w.assignedSlot;if(w.parentNode instanceof ShadowRoot)return w.parentNode.host;return w.parentNode}function KK(w){for(let q=w;q;q=kw(q)){if(!(q instanceof Element))continue;if(getComputedStyle(q).display==="none")return null}for(let q=kw(w);q;q=kw(q)){if(!(q instanceof Element))continue;let F=getComputedStyle(q);if(F.display==="contents")continue;if(F.position!=="static"||B2(F))return q;if(q.tagName==="BODY")return q}return null}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function W9(w){return w!==null&&typeof w==="object"&&"getBoundingClientRect"in w&&("contextElement"in w?w instanceof Element:!0)}var Q4=globalThis?.HTMLElement?.prototype.hasOwnProperty("popover"),h=class extends T0{constructor(){super(...arguments);this.localize=new Q1(this),this.active=!1,this.placement="top",this.boundary="viewport",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let w=this.anchorEl.getBoundingClientRect(),q=this.popup.getBoundingClientRect(),F=this.placement.includes("top")||this.placement.includes("bottom"),K=0,Z=0,Q=0,G=0,X=0,J=0,k=0,H=0;if(F)if(w.top<q.top)K=w.left,Z=w.bottom,Q=w.right,G=w.bottom,X=q.left,J=q.top,k=q.right,H=q.top;else K=q.left,Z=q.bottom,Q=q.right,G=q.bottom,X=w.left,J=w.top,k=w.right,H=w.top;else if(w.left<q.left)K=w.right,Z=w.top,Q=q.left,G=q.top,X=w.right,J=w.bottom,k=q.left,H=q.bottom;else K=q.right,Z=q.top,Q=w.left,G=w.top,X=q.right,J=q.bottom,k=w.left,H=w.bottom;this.style.setProperty("--hover-bridge-top-left-x",`${K}px`),this.style.setProperty("--hover-bridge-top-left-y",`${Z}px`),this.style.setProperty("--hover-bridge-top-right-x",`${Q}px`),this.style.setProperty("--hover-bridge-top-right-y",`${G}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${X}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${J}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${k}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${H}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(w){if(super.updated(w),w.has("active"))if(this.active)this.start();else this.stop();if(w.has("anchor"))this.handleAnchorChange();if(this.active)await this.updateComplete,this.reposition()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor==="string"){let w=this.getRootNode();this.anchorEl=w.getElementById(this.anchor)}else if(this.anchor instanceof Element||W9(this.anchor))this.anchorEl=this.anchor;else this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement)this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0];if(this.anchorEl)this.start()}start(){if(!this.anchorEl||!this.active)return;this.popup.showPopover?.(),this.cleanup=L9(this.anchorEl,this.popup,()=>{this.reposition()})}async stop(){return new Promise((w)=>{if(this.popup.hidePopover?.(),this.cleanup)this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>w());else w()})}reposition(){if(!this.active||!this.anchorEl)return;let w=[N9({mainAxis:this.distance,crossAxis:this.skidding})];if(this.sync)w.push(Xw({apply:({rects:K})=>{let Z=this.sync==="width"||this.sync==="both",Q=this.sync==="height"||this.sync==="both";this.popup.style.width=Z?`${K.reference.width}px`:"",this.popup.style.height=Q?`${K.reference.height}px`:""}}));else this.popup.style.width="",this.popup.style.height="";let q;if(Q4&&!W9(this.anchor)&&this.boundary==="scroll")q=W1(this.anchorEl).filter((K)=>K instanceof Element);if(this.flip)w.push(V9({boundary:this.flipBoundary||q,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding}));if(this.shift)w.push(f9({boundary:this.shiftBoundary||q,padding:this.shiftPadding}));if(this.autoSize)w.push(Xw({boundary:this.autoSizeBoundary||q,padding:this.autoSizePadding,apply:({availableWidth:K,availableHeight:Z})=>{if(this.autoSize==="vertical"||this.autoSize==="both")this.style.setProperty("--auto-size-available-height",`${Z}px`);else this.style.removeProperty("--auto-size-available-height");if(this.autoSize==="horizontal"||this.autoSize==="both")this.style.setProperty("--auto-size-available-width",`${K}px`);else this.style.removeProperty("--auto-size-available-width")}}));else this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height");if(this.arrow)w.push(T9({element:this.arrowEl,padding:this.arrowPadding}));let F=Q4?(K)=>r2.getOffsetParent(K,O9):r2.getOffsetParent;D9(this.anchorEl,this.popup,{placement:this.placement,middleware:w,strategy:Q4?"absolute":"fixed",platform:{...r2,getOffsetParent:F}}).then(({x:K,y:Z,middlewareData:Q,placement:G})=>{let X=this.localize.dir()==="rtl",J={top:"bottom",right:"left",bottom:"top",left:"right"}[G.split("-")[0]];if(this.setAttribute("data-current-placement",G),Object.assign(this.popup.style,{left:`${K}px`,top:`${Z}px`}),this.arrow){let k=Q.arrow.x,H=Q.arrow.y,b="",N="",L="",f="";if(this.arrowPlacement==="start"){let V=typeof k==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";b=typeof H==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",N=X?V:"",f=X?"":V}else if(this.arrowPlacement==="end"){let V=typeof k==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";N=X?"":V,f=X?V:"",L=typeof H==="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else if(this.arrowPlacement==="center")f=typeof k==="number"?"calc(50% - var(--arrow-size-diagonal))":"",b=typeof H==="number"?"calc(50% - var(--arrow-size-diagonal))":"";else f=typeof k==="number"?`${k}px`:"",b=typeof H==="number"?`${H}px`:"";Object.assign(this.arrowEl.style,{top:b,right:N,bottom:L,left:f,[J]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.dispatchEvent(new o7)}render(){return P`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${z0({"popup-hover-bridge":!0,"popup-hover-bridge-visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        popover="manual"
        part="popup"
        class=${z0({popup:!0,"popup-active":this.active,"popup-fixed":!Q4,"popup-has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?P`<div part="arrow" class="arrow" role="presentation"></div>`:""}
      </div>
    `}};h.css=m7;U([s(".popup")],h.prototype,"popup",2);U([s(".arrow")],h.prototype,"arrowEl",2);U([B()],h.prototype,"anchor",2);U([B({type:Boolean,reflect:!0})],h.prototype,"active",2);U([B({reflect:!0})],h.prototype,"placement",2);U([B()],h.prototype,"boundary",2);U([B({type:Number})],h.prototype,"distance",2);U([B({type:Number})],h.prototype,"skidding",2);U([B({type:Boolean})],h.prototype,"arrow",2);U([B({attribute:"arrow-placement"})],h.prototype,"arrowPlacement",2);U([B({attribute:"arrow-padding",type:Number})],h.prototype,"arrowPadding",2);U([B({type:Boolean})],h.prototype,"flip",2);U([B({attribute:"flip-fallback-placements",converter:{fromAttribute:(w)=>{return w.split(" ").map((q)=>q.trim()).filter((q)=>q!=="")},toAttribute:(w)=>{return w.join(" ")}}})],h.prototype,"flipFallbackPlacements",2);U([B({attribute:"flip-fallback-strategy"})],h.prototype,"flipFallbackStrategy",2);U([B({type:Object})],h.prototype,"flipBoundary",2);U([B({attribute:"flip-padding",type:Number})],h.prototype,"flipPadding",2);U([B({type:Boolean})],h.prototype,"shift",2);U([B({type:Object})],h.prototype,"shiftBoundary",2);U([B({attribute:"shift-padding",type:Number})],h.prototype,"shiftPadding",2);U([B({attribute:"auto-size"})],h.prototype,"autoSize",2);U([B()],h.prototype,"sync",2);U([B({type:Object})],h.prototype,"autoSizeBoundary",2);U([B({attribute:"auto-size-padding",type:Number})],h.prototype,"autoSizePadding",2);U([B({attribute:"hover-bridge",type:Boolean})],h.prototype,"hoverBridge",2);h=U([X0("wa-popup")],h);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var A9=x`
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
    transition-property: background, border, box-shadow, color, opacity;
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var I9=x`
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
`;var E9=Symbol.for(""),ZK=(w)=>{if(w?.r!==E9)return;return w?._$litStatic$};var QK=(w)=>{if(w._$litStatic$!==void 0)return w._$litStatic$;else throw Error(`Value passed to 'literal' function must be a 'literal' result: ${w}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},Yw=(w,...q)=>({["_$litStatic$"]:q.reduce((F,K,Z)=>F+QK(K)+w[Z+1],w[0]),r:E9}),u9=new Map,Hw=(w)=>(q,...F)=>{let K=F.length,Z,Q,G=[],X=[],J=0,k=!1,H;while(J<K){H=q[J];while(J<K&&(Q=F[J],Z=ZK(Q))!==void 0)H+=Z+q[++J],k=!0;if(J!==K)X.push(Q);G.push(H),J++}if(J===K)G.push(q[K]);if(k){let b=G.join("$$lit$$");if(q=u9.get(b),q===void 0)G.raw=G,u9.set(b,q=G);F=X}return w(q,...F)},G4=Hw(P),XU=Hw(e6),kU=Hw(w7);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var d=class extends w0{constructor(){super(...arguments);this.assumeInteractionOn=["click"],this.hasSlotController=new k2(this,"[default]","start","end"),this.localize=new Q1(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button"}static get validators(){return[...super.validators,s5()]}constructLightDOMButton(){let w=document.createElement("button");for(let q of this.attributes){if(q.name==="style")continue;w.setAttribute(q.name,q.value)}if(w.type=this.type,w.style.position="absolute !important",w.style.width="0 !important",w.style.height="0 !important",w.style.clipPath="inset(50%) !important",w.style.overflow="hidden !important",w.style.whiteSpace="nowrap !important",this.name)w.name=this.name;return w.value=this.value||"",w}handleClick(){if(!this.getForm())return;let q=this.constructLightDOMButton();this.parentElement?.append(q),q.click(),q.remove()}handleInvalid(){this.dispatchEvent(new C2)}handleLabelSlotChange(){let w=this.labelSlot.assignedNodes({flatten:!0}),q=!1,F=!1,K=!1,Z=!1;if([...w].forEach((Q)=>{if(Q.nodeType===Node.ELEMENT_NODE){let G=Q;if(G.localName==="wa-icon"){if(F=!0,!q)q=G.label!==void 0}else Z=!0}else if(Q.nodeType===Node.TEXT_NODE){if((Q.textContent?.trim()||"").length>0)K=!0}}),this.isIconButton=F&&!K&&!Z,this.isIconButton&&!q)console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return this.href?!1:!0}isLink(){return this.href?!0:!1}handleDisabledChange(){this.updateValidity()}setValue(...w){}click(){this.button.click()}focus(w){this.button.focus(w)}blur(){this.button.blur()}render(){let w=this.isLink(),q=w?Yw`a`:Yw`button`;return G4`
      <${q}
        part="base"
        class=${z0({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${g(w?void 0:this.disabled)}
        type=${g(w?void 0:this.type)}
        title=${this.title}
        name=${g(w?void 0:this.name)}
        value=${g(w?void 0:this.value)}
        href=${g(w?this.href:void 0)}
        target=${g(w?this.target:void 0)}
        download=${g(w?this.download:void 0)}
        rel=${g(w&&this.rel?this.rel:void 0)}
        role=${g(w?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?G4`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?G4`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${q}>
    `}};d.shadowRootOptions={...w0.shadowRootOptions,delegatesFocus:!0};d.css=[A9,I9,Y2];U([s(".button")],d.prototype,"button",2);U([s("slot:not([name])")],d.prototype,"labelSlot",2);U([i()],d.prototype,"invalid",2);U([i()],d.prototype,"isIconButton",2);U([B()],d.prototype,"title",2);U([B({reflect:!0})],d.prototype,"variant",2);U([B({reflect:!0})],d.prototype,"appearance",2);U([B({reflect:!0})],d.prototype,"size",2);U([B({attribute:"with-caret",type:Boolean,reflect:!0})],d.prototype,"withCaret",2);U([B({type:Boolean})],d.prototype,"disabled",2);U([B({type:Boolean,reflect:!0})],d.prototype,"loading",2);U([B({type:Boolean,reflect:!0})],d.prototype,"pill",2);U([B()],d.prototype,"type",2);U([B({reflect:!0})],d.prototype,"name",2);U([B({reflect:!0})],d.prototype,"value",2);U([B({reflect:!0})],d.prototype,"href",2);U([B()],d.prototype,"target",2);U([B()],d.prototype,"rel",2);U([B()],d.prototype,"download",2);U([B({attribute:"formaction"})],d.prototype,"formAction",2);U([B({attribute:"formenctype"})],d.prototype,"formEnctype",2);U([B({attribute:"formmethod"})],d.prototype,"formMethod",2);U([B({attribute:"formnovalidate",type:Boolean})],d.prototype,"formNoValidate",2);U([B({attribute:"formtarget"})],d.prototype,"formTarget",2);U([g0("disabled",{waitUntilFirstUpdate:!0})],d.prototype,"handleDisabledChange",1);d=U([X0("wa-button")],d);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var y9=x`
  :host {
    --track-width: 2px;
    --track-color: var(--wa-color-neutral-fill-normal);
    --indicator-color: var(--wa-color-brand-fill-loud);
    --speed: 2s;

    /*
      Resizing a spinner element using anything but font-size will break the animation because the animation uses em
      units. Therefore, if a spinner is used in a flex container without \`flex: none\` applied, the spinner can
      grow/shrink and break the animation. The use of \`flex: none\` on the host element prevents this by always having
      the spinner sized according to its actual dimensions.
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Uw=class extends T0{constructor(){super(...arguments);this.localize=new Q1(this)}render(){return P`
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
    `}};Uw.css=y9;Uw=U([X0("wa-spinner")],Uw);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var $9=x`
  :host {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var d1=class extends T0{constructor(){super(...arguments);this.disableRole=!1,this.hasOutlined=!1,this.label="",this.orientation="horizontal"}updated(w){if(super.updated(w),w.has("orientation"))this.setAttribute("aria-orientation",this.orientation),this.updateClassNames()}handleFocus(w){l2(w.target)?.classList.add("button-focus")}handleBlur(w){l2(w.target)?.classList.remove("button-focus")}handleMouseOver(w){l2(w.target)?.classList.add("button-hover")}handleMouseOut(w){l2(w.target)?.classList.remove("button-hover")}handleSlotChange(){this.updateClassNames()}updateClassNames(){let w=[...this.defaultSlot.assignedElements({flatten:!0})];this.hasOutlined=!1,w.forEach((q)=>{let F=w.indexOf(q),K=l2(q);if(K){if(K.appearance==="outlined")this.hasOutlined=!0;K.classList.add("wa-button-group__button"),K.classList.toggle("wa-button-group__horizontal",this.orientation==="horizontal"),K.classList.toggle("wa-button-group__vertical",this.orientation==="vertical"),K.classList.toggle("wa-button-group__button-first",F===0),K.classList.toggle("wa-button-group__button-inner",F>0&&F<w.length-1),K.classList.toggle("wa-button-group__button-last",F===w.length-1),K.classList.toggle("wa-button-group__button-radio",K.tagName.toLowerCase()==="wa-radio-button")}})}render(){return P`
      <slot
        part="base"
        class=${z0({"button-group":!0,"has-outlined":this.hasOutlined})}
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        aria-orientation=${this.orientation}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
        @slotchange=${this.handleSlotChange}
      ></slot>
    `}};d1.css=[$9];U([s("slot")],d1.prototype,"defaultSlot",2);U([i()],d1.prototype,"disableRole",2);U([i()],d1.prototype,"hasOutlined",2);U([B()],d1.prototype,"label",2);U([B({reflect:!0})],d1.prototype,"orientation",2);d1=U([X0("wa-button-group")],d1);function l2(w){return w.closest("wa-button, wa-radio-button")??w.querySelector("wa-button, wa-radio-button")}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var S9=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var R9=x`
  :host {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function GK(w){return`data:image/svg+xml,${encodeURIComponent(w)}`}var bw={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},JK={name:"system",resolver:(w,q="classic",F="solid")=>{let Z=bw[F][w]??bw.regular[w]??bw.regular["circle-question"];if(Z)return GK(Z);return""}},g9=JK;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Bw="";function XK(w){Bw=w}function kK(){if(!Bw){let w=document.querySelector("[data-fa-kit-code]");if(w)XK(w.getAttribute("data-fa-kit-code")||"")}return Bw}var A1="7.0.1";function YK(w,q,F){let K=kK(),Z=K.length>0,Q="solid";if(q==="notdog"){if(F==="solid")Q="solid";if(F==="duo-solid")Q="duo-solid";return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/notdog-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(q==="chisel")return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/chisel-regular/${w}.svg?token=${encodeURIComponent(K)}`;if(q==="etch")return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/etch-solid/${w}.svg?token=${encodeURIComponent(K)}`;if(q==="jelly"){if(F==="regular")Q="regular";if(F==="duo-regular")Q="duo-regular";if(F==="fill-regular")Q="fill-regular";return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/jelly-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(q==="slab"){if(F==="solid"||F==="regular")Q="regular";if(F==="press-regular")Q="press-regular";return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/slab-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(q==="thumbprint")return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/thumbprint-light/${w}.svg?token=${encodeURIComponent(K)}`;if(q==="whiteboard")return`https://ka-p.fontawesome.com/releases/v${A1}/svgs/whiteboard-semibold/${w}.svg?token=${encodeURIComponent(K)}`;if(q==="classic"){if(F==="thin")Q="thin";if(F==="light")Q="light";if(F==="regular")Q="regular";if(F==="solid")Q="solid"}if(q==="sharp"){if(F==="thin")Q="sharp-thin";if(F==="light")Q="sharp-light";if(F==="regular")Q="sharp-regular";if(F==="solid")Q="sharp-solid"}if(q==="duotone"){if(F==="thin")Q="duotone-thin";if(F==="light")Q="duotone-light";if(F==="regular")Q="duotone-regular";if(F==="solid")Q="duotone"}if(q==="sharp-duotone"){if(F==="thin")Q="sharp-duotone-thin";if(F==="light")Q="sharp-duotone-light";if(F==="regular")Q="sharp-duotone-regular";if(F==="solid")Q="sharp-duotone-solid"}if(q==="brands")Q="brands";return Z?`https://ka-p.fontawesome.com/releases/v${A1}/svgs/${Q}/${w}.svg?token=${encodeURIComponent(K)}`:`https://ka-f.fontawesome.com/releases/v${A1}/svgs/${Q}/${w}.svg`}var HK={name:"default",resolver:(w,q="classic",F="solid")=>{return YK(w,q,F)},mutator:(w,q)=>{if(q?.family&&!w.hasAttribute("data-duotone-initialized")){let{family:F,variant:K}=q;if(F==="duotone"||F==="sharp-duotone"||F==="notdog"&&K==="duo-solid"||F==="jelly"&&K==="duo-regular"||F==="thumbprint"){let Z=[...w.querySelectorAll("path")],Q=Z.find((X)=>!X.hasAttribute("opacity")),G=Z.find((X)=>X.hasAttribute("opacity"));if(!Q||!G)return;if(Q.setAttribute("data-duotone-primary",""),G.setAttribute("data-duotone-secondary",""),q.swapOpacity&&Q&&G){let X=G.getAttribute("opacity")||"0.4";Q.style.setProperty("--path-opacity",X),G.style.setProperty("--path-opacity","1")}w.setAttribute("data-duotone-initialized","")}}}},d9=HK;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var UK="classic",bK=[d9,g9],Mw=[];function h9(w){Mw.push(w)}function C9(w){Mw=Mw.filter((q)=>q!==w)}function J4(w){return bK.find((q)=>q.name===w)}function P9(){return UK}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var BK=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},p2=Symbol(),X4=Symbol(),Lw,Nw=new Map,H0=class extends T0{constructor(){super(...arguments);this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(w,q)=>{let F;if(q?.spriteSheet){if(!this.hasUpdated)await this.updateComplete;this.svg=P`<svg part="svg">
        <use part="use" href="${w}"></use>
      </svg>`,await this.updateComplete;let K=this.shadowRoot.querySelector("[part='svg']");if(typeof q.mutator==="function")q.mutator(K,this);return this.svg}try{if(F=await fetch(w,{mode:"cors"}),!F.ok)return F.status===410?p2:X4}catch{return X4}try{let K=document.createElement("div");K.innerHTML=await F.text();let Z=K.firstElementChild;if(Z?.tagName?.toLowerCase()!=="svg")return p2;if(!Lw)Lw=new DOMParser;let G=Lw.parseFromString(Z.outerHTML,"text/html").body.querySelector("svg");if(!G)return p2;return G.part.add("svg"),document.adoptNode(G)}catch{return p2}}}connectedCallback(){super.connectedCallback(),h9(this)}firstUpdated(w){super.firstUpdated(w),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),C9(this)}getIconSource(){let w=J4(this.library),q=this.family||P9();if(this.name&&w)return{url:w.resolver(this.name,q,this.variant,this.autoWidth),fromLibrary:!0};return{url:this.src,fromLibrary:!1}}handleLabelChange(){if(typeof this.label==="string"&&this.label.length>0)this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden");else this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")}async setIcon(){let{url:w,fromLibrary:q}=this.getIconSource(),F=q?J4(this.library):void 0;if(!w){this.svg=null;return}let K=Nw.get(w);if(!K)K=this.resolveIcon(w,F),Nw.set(w,K);let Z=await K;if(Z===X4)Nw.delete(w);if(w!==this.getIconSource().url)return;if(j7(Z)){this.svg=Z;return}switch(Z){case X4:case p2:this.svg=null,this.dispatchEvent(new BK);break;default:this.svg=Z.cloneNode(!0),F?.mutator?.(this.svg,this),this.dispatchEvent(new S9)}}updated(w){super.updated(w);let q=J4(this.library),F=this.shadowRoot?.querySelector("svg");if(F)q?.mutator?.(F,this)}render(){if(this.hasUpdated)return this.svg;return P`<svg part="svg" width="16" height="16"></svg>`}};H0.css=R9;U([i()],H0.prototype,"svg",2);U([B({reflect:!0})],H0.prototype,"name",2);U([B({reflect:!0})],H0.prototype,"family",2);U([B({reflect:!0})],H0.prototype,"variant",2);U([B({attribute:"auto-width",type:Boolean,reflect:!0})],H0.prototype,"autoWidth",2);U([B({attribute:"swap-opacity",type:Boolean,reflect:!0})],H0.prototype,"swapOpacity",2);U([B()],H0.prototype,"src",2);U([B()],H0.prototype,"label",2);U([B({reflect:!0})],H0.prototype,"library",2);U([g0("label")],H0.prototype,"handleLabelChange",1);U([g0(["family","name","library","variant","src","autoWidth","swapOpacity"],{waitUntilFirstUpdate:!0})],H0.prototype,"setIcon",1);H0=U([X0("wa-icon")],H0);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var z;var FB=Object.getOwnPropertyDescriptors||(()=>{var w;if(typeof Reflect<"u"&&Reflect.ownKeys)w=Reflect.ownKeys;else{var q=Object.getOwnPropertySymbols||((F)=>[]);w=(F)=>Object.getOwnPropertyNames(F).concat(q(F))}return(F)=>{var K=w(F),Z={},Q=K.length|0,G=0;while(G!==Q){var X=K[G];Object.defineProperty(Z,X,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(F,X)}),G=G+1|0}return Z}})(),C4;function a0(w){this.c=w}z=a0.prototype;z.toString=function(){return String.fromCharCode(this.c)};function s9(w){switch(typeof w){case"string":return KF.l();case"number":if(F6(w))if(w<<24>>24===w)return EG.l();else if(w<<16>>16===w)return $G.l();else return FJ.l();else if(z6(w))return qJ.l();else return wJ.l();case"boolean":return YG.l();case"undefined":return Xq.l();default:if(w instanceof A)return ZJ.l();else if(w instanceof a0)return bG.l();else if(w&&w.$classData)return w.$classData.l();else return null}}function S4(w){switch(typeof w){case"string":return"java.lang.String";case"number":if(F6(w))if(w<<24>>24===w)return"java.lang.Byte";else if(w<<16>>16===w)return"java.lang.Short";else return"java.lang.Integer";else if(z6(w))return"java.lang.Float";else return"java.lang.Double";case"boolean":return"java.lang.Boolean";case"undefined":return"java.lang.Void";default:if(w instanceof A)return"java.lang.Long";else if(w instanceof a0)return"java.lang.Character";else if(w&&w.$classData)return w.$classData.N;else return null.hU()}}function n2(w,q){switch(typeof w){case"string":return QJ(w,q);case"number":return eG(w,q);case"boolean":return XG(w,q);case"undefined":return mZ(w,q);default:if(!!(w&&w.$classData)||w===null)return w.h(q);else if(w instanceof A)return zJ(w,q);else if(w instanceof a0)return UG(t2(w),q);else return F2.prototype.h.call(w,q)}}function MK(w){switch(typeof w){case"string":return P0(w);case"number":return zF(w);case"boolean":return kG(w);case"undefined":return iZ(w);default:if(!!(w&&w.$classData)||w===null)return w.p();else if(w instanceof A)return KJ(w);else if(w instanceof a0)return HG(t2(w));else return F2.prototype.p.call(w)}}function a9(w){return w===void 0?"undefined":w.toString()}function LK(w,q){if(q===0)throw new O2("/ by zero");else return w/q|0}function NK(w,q){if(q===0)throw new O2("/ by zero");else return w%q|0}function fK(w){return w>2147483647?2147483647:w<-2147483648?-2147483648:w|0}function R4(w){return String.fromCharCode(w)}function P4(w,q,F,K,Z){if(w!==F||K<q||(q+Z|0)<K)for(var Q=0;Q<Z;Q=Q+1|0)F[K+Q|0]=w[q+Q|0];else for(var Q=Z-1|0;Q>=0;Q=Q-1|0)F[K+Q|0]=w[q+Q|0]}var j9=0,_9=new WeakMap;function q6(w){switch(typeof w){case"string":return P0(w);case"number":return zF(w);case"bigint":{var q=0;if(w<BigInt(0))w=~w;while(w!==BigInt(0))q=q^Number(BigInt.asIntN(32,w)),w=w>>BigInt(32);return q}case"boolean":return w?1231:1237;case"undefined":return 0;case"symbol":{var F=w.description;return F===void 0?0:P0(F)}default:if(w===null)return 0;else{var K=_9.get(w);if(K===void 0)K=j9+1|0,j9=K,_9.set(w,K);return K}}}function VK(w){return typeof w==="number"&&w<<24>>24===w&&1/w!==-1/0}function TK(w){return typeof w==="number"&&w<<16>>16===w&&1/w!==-1/0}function F6(w){return typeof w==="number"&&(w|0)===w&&1/w!==-1/0}function z6(w){return typeof w==="number"&&(w!==w||Math.fround(w)===w)}function X1(w){return new a0(w)}var zB=X1(0);function t2(w){return w===null?0:w.c}function q2(w){return w===null?C4:w}function F2(){}z=F2.prototype;z.constructor=F2;function M(){}M.prototype=z;z.p=function(){return q6(this)};z.h=function(w){return this===w};z.u=function(){var w=this.p();return S4(this)+"@"+(+(w>>>0)).toString(16)};z.toString=function(){return this.u()};function u0(w){if(typeof w==="number"){this.a=Array(w);for(var q=0;q<w;q++)this.a[q]=null}else this.a=w}z=u0.prototype=new M;z.constructor=u0;z.a1=function(w,q,F,K){P4(this.a,w,q.a,F,K)};z.X=function(){return new u0(this.a.slice())};function t9(){}t9.prototype=z;function k1(w){if(typeof w==="number"){this.a=Array(w);for(var q=0;q<w;q++)this.a[q]=!1}else this.a=w}z=k1.prototype=new M;z.constructor=k1;z.a1=function(w,q,F,K){P4(this.a,w,q.a,F,K)};z.X=function(){return new k1(this.a.slice())};function Y1(w){if(typeof w==="number")this.a=new Uint16Array(w);else this.a=w}z=Y1.prototype=new M;z.constructor=Y1;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new Y1(this.a.slice())};function H1(w){if(typeof w==="number")this.a=new Int8Array(w);else this.a=w}z=H1.prototype=new M;z.constructor=H1;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new H1(this.a.slice())};function U1(w){if(typeof w==="number")this.a=new Int16Array(w);else this.a=w}z=U1.prototype=new M;z.constructor=U1;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new U1(this.a.slice())};function t0(w){if(typeof w==="number")this.a=new Int32Array(w);else this.a=w}z=t0.prototype=new M;z.constructor=t0;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new t0(this.a.slice())};function b1(w){if(typeof w==="number"){this.a=Array(w);for(var q=0;q<w;q++)this.a[q]=C4}else this.a=w}z=b1.prototype=new M;z.constructor=b1;z.a1=function(w,q,F,K){P4(this.a,w,q.a,F,K)};z.X=function(){return new b1(this.a.slice())};function B1(w){if(typeof w==="number")this.a=new Float32Array(w);else this.a=w}z=B1.prototype=new M;z.constructor=B1;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new B1(this.a.slice())};function M1(w){if(typeof w==="number")this.a=new Float64Array(w);else this.a=w}z=M1.prototype=new M;z.constructor=M1;z.a1=function(w,q,F,K){q.a.set(this.a.subarray(w,w+K|0),F)};z.X=function(){return new M1(this.a.slice())};function Y(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E="",this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N="",this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}z=Y.prototype;z.p=function(w,q,F,K,Z){this.n={},this.z=w,this.E=q;var Q=this;if(this.F=(G)=>G===Q,this.N=F,this.X=!0,this.I=(G)=>!1,K!==void 0)this.A=new Y().y(this,K,Z);return this};z.i=function(w,q,F,K){var Z=Object.getOwnPropertyNames(F)[0];if(this.n=F,this.E="L"+q+";",this.F=(Q)=>!!Q.n[Z],this.J=w===2,this.N=q,this.Y=w===1,this.I=K||((Q)=>!!(Q&&Q.$classData&&Q.$classData.n[Z])),typeof w!=="number")w.prototype.$classData=this;return this};z.y=function(w,q,F,K){q.prototype.$classData=this;var Z="["+w.E;this.C=q,this.n={t:1,a:1},this.O=w,this.B=w,this.D=1,this.E=Z,this.N=Z,this.Z=!0;var Q=this;return this.F=K||((G)=>Q===G),this.w=F?(G)=>new q(new F(G)):(G)=>new q(G),this.I=(G)=>G instanceof q,this};z.a=function(w){function q(J){if(typeof J==="number"){this.a=Array(J);for(var k=0;k<J;k++)this.a[k]=null}else this.a=J}var F=q.prototype=new t9;F.constructor=q,F.a1=function(J,k,H,b){P4(this.a,J,k.a,H,b)},F.X=function(){return new q(this.a.slice())},F.$classData=this;var K=w.B||w,Z=w.D+1,Q="["+w.E;this.C=q,this.n={t:1,a:1},this.O=w,this.B=K,this.D=Z,this.E=Q,this.N=Q,this.Z=!0;var G=(J)=>{var k=J.D;return k===Z?K.F(J.B):k>Z&&K===n0};this.F=G,this.w=(J)=>new q(J);var X=this;return this.I=(J)=>{var k=J&&J.$classData;return!!k&&(k===X||G(k))},this};z.r=function(){if(!this.A)this.A=new Y().a(this);return this.A};z.l=function(){if(!this.L)this.L=new n3(this);return this.L};z.R=function(w){return this===w||this.F(w)};z.S=function(){return this.P?this.P.l():null};z.Q=function(){return this.O?this.O.l():null};var n0=new Y;n0.n={};n0.E="Ljava.lang.Object;";n0.F=(w)=>!w.X;n0.N="java.lang.Object";n0.I=(w)=>w!==null;n0.A=new Y().y(n0,u0,void 0,(w)=>{var q=w.D;return q===1?!w.B.X:q>1});F2.prototype.$classData=n0;var DK=new Y().p(void 0,"V","void",void 0,void 0),KB=new Y().p(!1,"Z","boolean",k1,void 0),OK=new Y().p(0,"C","char",Y1,Uint16Array),ZB=new Y().p(0,"B","byte",H1,Int8Array),QB=new Y().p(0,"S","short",U1,Int16Array),GB=new Y().p(0,"I","int",t0,Int32Array),WK=new Y().p(null,"J","long",b1,void 0),JB=new Y().p(0,"F","float",B1,Float32Array),XB=new Y().p(0,"D","double",M1,Float64Array);function AK(w){return s9(w).cz()+"@"+q6(w)}function IK(w){var q=w.cK;return q===void 0?AK(w):q}function j4(){k4=this,e9().hs(new C((w)=>{return}),Hq().ed,!0)}z=j4.prototype=new M;z.constructor=j4;function uK(){}uK.prototype=z;z.hs=function(w,q,F){return new q8(w,F,q,this)};var kB=new Y().i(j4,"com.raquo.airstream.core.Observer$",{b7:1}),k4;function e9(){if(!k4)k4=new j4;return k4}function s2(w){this.bN=null,this.cL=null,this.bO=0,this.bN=w,this.cL=void 0;var q=g4().bo();if(this.bO=q===void 0?1:1+q.bO|0,L2().bq===-1||this.bO>L2().bq)c3().cG(new U8(this,L2().bq));else if(h1().P)h1().al.push(this)|0;else g4().cp(this)}z=s2.prototype=new M;z.constructor=s2;function EK(){}EK.prototype=z;var K6=new Y().i(s2,"com.raquo.airstream.core.Transaction",{ba:1});function _4(){this.bq=0,this.cM=null,Y4=this,this.bq=1000,this.cM=new C((w)=>{throw I0(new q0,"Attempted to run Transaction "+w+" after it was already executed.")})}z=_4.prototype=new M;z.constructor=_4;function yK(){}yK.prototype=z;z.eN=function(w){try{w.bN.g(w);var q=w.cL;if(q!==void 0)while(q.hY())q.hO().i2(w)}catch(K){var F=K instanceof _1?K:new U0(K);c3().cG(F)}};var YB=new Y().i(_4,"com.raquo.airstream.core.Transaction$",{bb:1}),Y4;function L2(){if(!Y4)Y4=new _4;return Y4}function Z6(w){if((w.br.length|0)===0){if((w.al.length|0)>0)new s2(new C((q)=>{while((w.al.length|0)>0)g4().cp(w.al.shift())}))}else new s2(new C((q)=>{while((w.br.length|0)>0){var F=w.br.shift();try{F.g(q)}catch(Q){var K=Q instanceof _1?Q:new U0(Q);c3().cG(K)}}while((w.al.length|0)>0){var Z=w.al.shift();g4().cp(Z)}}))}function x4(){this.P=!1,this.br=null,this.al=null,H4=this,this.P=!1,this.br=C1().ag(T().k(new(Z0.r()).C([]))),this.al=C1().ag(T().k(new(K6.r()).C([])))}z=x4.prototype=new M;z.constructor=x4;function $K(){}$K.prototype=z;var HB=new Y().i(x4,"com.raquo.airstream.core.Transaction$onStart$",{bc:1}),H4;function h1(){if(!H4)H4=new x4;return H4}function wq(w,q){return w.am.get(q)}function qq(w,q){w.bs.unshift(q)}function SK(w){return w.bs.shift()}function RK(w,q,F){var K=wq(w,q),Z=K===void 0,Q=K===void 0?C1().ag(T().k(new(K6.r()).C([]))):K;if(Q.push(F),Z)w.am.set(q,Q)}function gK(w,q){var F=wq(w,q),K=F===void 0||(F.length|0)>0?F:void 0;if(K===void 0)return;else{var Z=K.shift();if((K.length|0)===0)w.am.delete(q);return Z}}function v4(){this.bs=null,this.am=null,U4=this,this.bs=C1().ag(T().k(new(K6.r()).C([]))),this.am=new Map}z=v4.prototype=new M;z.constructor=v4;function dK(){}dK.prototype=z;z.cp=function(w){var q=this.bo();if(q===void 0)qq(this,w),L2().eN(w),this.fZ(w);else RK(this,q,w)};z.fZ=function(w){var q=w;while(!0){var F=this.bo(),K=q;if(!(F!==void 0&&A0().J(K,F)))throw I0(new q0,"Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");this.gZ(q),q.bN=L2().cM;var Z=this.bo();if(A0().J(Z,void 0))if((this.am.size|0)>0){var Q=new _3(0);throw this.am.forEach(((G)=>(X,J)=>{var k=G.b8+(X.length|0)|0;G.b8=k})(Q)),I0(new q0,"Transaction queue error: Stack cleared, but a total of "+Q.b8+" children for "+(this.am.size|0)+" transactions remain. This is a bug in Airstream.")}else return;else L2().eN(Z),q=Z}};z.gZ=function(w){var q=w;while(!0){var F=gK(this,q);if(A0().J(F,void 0)){SK(this);var K=this.bo();if(!A0().J(K,void 0))q=K;else return}else{qq(this,F);return}}};z.bo=function(){return this.bs[0]};var UB=new Y().i(v4,"com.raquo.airstream.core.Transaction$pendingTransactions$",{bd:1}),U4;function g4(){if(!U4)U4=new v4;return U4}function Fq(w,q){var F=w.a2.indexOf(q)|0;if(F!==-1){if(w.a2.splice(F,1),!w.E.i())q.f5()}else throw I0(new q0,"Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?")}function w6(w){while((w.bt.length|0)>0)Fq(w,w.bt.shift())}function c4(w){this.cN=null,this.a2=null,this.aF=!1,this.bt=null,this.E=null,this.aG=0,this.cN=w,this.a2=C1().ag(T().k(new(x9.r()).C([]))),this.aF=!0,this.bt=C1().ag(T().k(new(x9.r()).C([]))),this.E=b0(),this.aG=0}z=c4.prototype=new M;z.constructor=c4;function hK(){}hK.prototype=z;z.ew=function(){if(this.E.i()){var w=h1(),q=()=>{var K=new I3(this.cN);this.E=new s0(K),this.aF=!1,this.aG=0;var Z=0,Q=this.a2.length|0;while(Z<Q){var G=Z+this.aG|0;this.a2[G].f4(K),Z=1+Z|0}w6(this),this.aF=!0,this.aG=0};h1();var F=!0;if(w.P||!F)q();else{w.P=!0;try{q()}finally{w.P=!1,Z6(w)}}}else throw I0(new q0,"Can not activate "+this+": it is already active")};z.fT=function(){if(!this.E.i()){this.aF=!1;var w=this.a2,q=0,F=w.length|0;while(q<F)w[q].f5(),q=1+q|0;w6(this);var K=this.E;if(!K.i())K.y().gC();w6(this),this.aF=!0,this.E=b0()}else throw I0(new q0,"Can not deactivate DynamicOwner: it is not active")};z.fE=function(w,q){if(q)this.aG=1+this.aG|0,this.a2.unshift(w);else this.a2.push(w);var F=this.E;if(!F.i()){var K=F.y();w.f4(K)}};z.h4=function(w){if(this.aF)Fq(this,w);else this.bt.push(w)};var bB=new Y().i(c4,"com.raquo.airstream.ownership.DynamicOwner",{be:1});function e2(w,q,F){this.bu=null,this.cO=null,this.bv=null,this.bu=w,this.cO=q,this.bv=b0(),w.fE(this,F)}z=e2.prototype=new M;z.constructor=e2;function CK(){}CK.prototype=z;z.bK=function(){this.bu.h4(this)};z.f4=function(w){var q=h1(),F=()=>{this.bv=this.cO.g(w)};h1();var K=!0;if(q.P||!K)F();else{q.P=!0;try{F()}finally{q.P=!1,Z6(q)}}};z.f5=function(){var w=this.bv;if(!w.i())w.y().bK(),this.bv=b0()};var x9=new Y().i(e2,"com.raquo.airstream.ownership.DynamicSubscription",{bf:1});function o4(){}z=o4.prototype=new M;z.constructor=o4;function PK(){}PK.prototype=z;z.hq=function(w,q,F){return new e2(w,new C((K)=>new s0(q.g(K))),F)};z.hi=function(w,q,F){return new e2(w,new C((K)=>{return q.g(K),b0()}),F)};var BB=new Y().i(o4,"com.raquo.airstream.ownership.DynamicSubscription$",{bg:1}),Vw;function zq(){if(!Vw)Vw=new o4;return Vw}function jK(w){w.aH=C1().ag(T().k(new(oK.r()).C([])))}function _K(w){var q=w.aH,F=0,K=q.length|0;while(F<K)Q6(q[F]),F=1+F|0;w.aH.length=0}function xK(w,q){var F=w.aH.indexOf(q)|0;if(F!==-1)w.aH.splice(F,1);else throw I0(new q0,"Can not remove Subscription from Owner: subscription not found.")}function vK(w,q){w.aH.push(q)}function Q6(w){if(!w.bQ)w.cQ.aC(),w.bQ=!0;else throw I0(new q0,"Can not kill Subscription: it was already killed.")}function m4(w,q){this.cR=null,this.cQ=null,this.bQ=!1,this.cR=w,this.cQ=q,this.bQ=!1,w.gY(this)}z=m4.prototype=new M;z.constructor=m4;function cK(){}cK.prototype=z;z.bK=function(){Q6(this),xK(this.cR,this)};var oK=new Y().i(m4,"com.raquo.airstream.ownership.Subscription",{bj:1});function i4(w,q){this.cS=null,this.cT=null,this.a3=null,this.an=!1,this.cS=w,this.cT=q,this.a3=b0(),this.an=!1}z=i4.prototype=new M;z.constructor=i4;function mK(){}mK.prototype=z;z.gz=function(){var w=this.a3;return!w.i()&&!w.y().bu.E.i()};z.hc=function(w){if(this.an)throw I0(new q0,"Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var q=this.a3;if(!q.i())var F=q.y(),K=F.bu,Z=w===K;else var Z=!1;if(!Z){if(this.gz()&&!w.E.i())this.an=!0;var Q=this.a3;if(!Q.i())Q.y().bK(),this.a3=b0();var G=zq().hq(w,new C((X)=>{if(!this.an)this.cS.aC();return new m4(X,new P1(()=>{if(!this.an)this.cT.aC()}))}),!1);this.a3=new s0(G),this.an=!1}};z.fP=function(){if(this.an)throw I0(new q0,"Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var w=this.a3;if(!w.i())w.y().bK();this.a3=b0()};var MB=new Y().i(i4,"com.raquo.airstream.ownership.TransferableSubscription",{bk:1});function r4(){}z=r4.prototype=new M;z.constructor=r4;function iK(){}iK.prototype=z;z.ag=function(w){return[...kQ().ho(w)]};var LB=new Y().i(r4,"com.raquo.ew.JsArray$",{bl:1}),Tw;function C1(){if(!Tw)Tw=new r4;return Tw}function l4(){}z=l4.prototype=new M;z.constructor=l4;function rK(){}rK.prototype=z;z.gf=function(w,q){var F=0,K=w.length|0;while(F<K)q(w[F]),F=1+F|0};var NB=new Y().i(l4,"com.raquo.ew.JsArray$RichJsArray$",{bm:1}),Dw;function lK(){if(!Dw)Dw=new l4;return Dw}function p4(){this.cU=null,b4=this,document.createElement("template"),this.fS(u().t.hj().hk()),this.cU=new RegExp(" ","g")}z=p4.prototype=new M;z.constructor=p4;function pK(){}pK.prototype=z;z.fI=function(w,q){try{return w.appendChild(q),!0}catch(K){var F=K instanceof _1?K:new U0(K);if(F instanceof U0&&F.S instanceof DOMException)return!1;throw F instanceof U0?F.S:F}};z.gA=function(w,q){var F=w;while(!0){if(F.parentNode!==null)var K=F.parentNode;else var Z=F.host,K=Z===void 0?null:Z;if(K===null)return!1;if(A0().J(q,K))return!0;F=K}};z.fR=function(w){return document.createElement(w.cA())};z.gm=function(w,q){var F=this.gn(w,q);return F===void 0?void 0:q.aY.bG(F)};z.gn=function(w,q){var F=w.Q.getAttributeNS(null,q.ap);return F!==null?F:void 0};z.fc=function(w,q,F){this.h9(w,q,q.aY.bk(F))};z.h9=function(w,q,F){if(F===null)this.h3(w,q);else w.Q.setAttribute(q.ap,F)};z.h3=function(w,q){w.Q.removeAttribute(q.ap)};z.ha=function(w,q,F){this.hb(w,q,q.dr.bk(F))};z.hb=function(w,q,F){w.Q[q.ds]=F};z.fd=function(w,q,F){var K=w.Q,Z=q.aq,Q=q.ar,G=F===null?null:F;if(G===null)Q.Y(new C((J)=>K.style.removeProperty(""+J+Z))),K.style.removeProperty(Z);else{Q.Y(new C((J)=>{var k=K.style;k.setProperty(""+J+Z,G)}));var X=K.style;X.setProperty(Z,G)}};z.fS=function(w){return document.createElementNS("http://www.w3.org/2000/svg",w.dC)};z.gq=function(w,q){var F=this.gr(w,q);return F===void 0?void 0:q.bU.bG(F)};z.gr=function(w,q){var F=w.cE(),K=q.bx,Z=F.getAttributeNS(K.i()?null:K.y(),q.bV),Q=Z;return Q!==null?Q:void 0};z.hd=function(w,q,F){this.he(w,q,q.bU.bk(F))};z.he=function(w,q,F){if(F===null)this.h5(w,q);else{var K=q.bx;if(K.i())w.cE().setAttribute(q.bw,F);else{var Z=K.y();w.cE().setAttributeNS(Z,q.bw,F)}}};z.h5=function(w,q){var F=w.cE(),K=q.bx;F.removeAttributeNS(K.i()?null:K.y(),q.bV)};z.fV=function(w,q){var F=q,K=w;while(!0){if(K===null)return F;var Z=K.parentNode,Q=new u8(this.fU(K),F);K=Z,F=Q}};z.fU=function(w){if(w instanceof HTMLElement){var q=w.id;if(q!=="")var F="#"+q;else var K=w.className,F=K!==""?"."+K.replace(this.cU,"."):"";return w.tagName.toLowerCase()+F}else return w.nodeName};var fB=new Y().i(p4,"com.raquo.laminar.DomApi$",{bn:1}),b4;function O0(){if(!b4)b4=new p4;return b4}function n4(w,q,F){this.bS=null,this.cV=null,this.bR=null,this.bS=w,this.cV=q,this.bR=F}z=n4.prototype=new M;z.constructor=n4;function nK(){}nK.prototype=z;z.Y=function(w){if(this.bS!==null)this.bS.Y(w);else if(this.bR!==null)lK().gf(this.bR,ZG().gj(w));else Uq().gg(this.cV,w)};var VB=new Y().i(n4,"com.raquo.laminar.Seq",{bo:1});function s4(){}z=s4.prototype=new M;z.constructor=s4;function sK(){}sK.prototype=z;var TB=new Y().i(s4,"com.raquo.laminar.Seq$",{bp:1}),Ow;function aK(){if(!Ow)Ow=new s4;return Ow}function tK(w){e9(),c3()}function eK(w){w.fg=G6()}function wZ(w){qZ(w,new C((q)=>{q.dt.Q.focus()}))}function qZ(w,q){return new q5(new C((F)=>{var K=new j3(!F.aI.E.i()),Z=new C((Q)=>{if(K.bE){var G=!1;K.bE=G}else q.g(Q)});zq().hi(F.aI,new C(((Q)=>(G)=>{Z.g(new w3(Q,G))})(F)),!1)}),G6())}function a4(){this.ao=null,this.bT=null,B4=this,this.ao=new N2(p0()),new N2(p0()),new N2(p0()),this.bT=new u3}z=a4.prototype=new M;z.constructor=a4;function FZ(){}FZ.prototype=z;var DB=new Y().i(a4,"com.raquo.laminar.codecs.package$",{bx:1}),B4;function p0(){if(!B4)B4=new a4;return B4}function zZ(w){w.fh=KZ(w,"class"," ")}function KZ(w,q,F){var K=j1(new u1,q,p0().ao);return new w5(K.ap,new C((Z)=>{var Q=O0().gm(Z,K);return Q===void 0?"":Q}),new Z5((Z,Q)=>{O0().fc(Z,K,Q)}),F)}function ZZ(w){w.ff=QZ(w,"class"," ")}function QZ(w,q,F){var K=new y3(q,p0().ao,b0());return new w5(K.bw,new C((Z)=>{var Q=O0().gq(Z,K);return Q===void 0?"":Q}),new Z5((Z,Q)=>{O0().hd(Z,K,Q)}),F)}function t4(w,q){this.dq=null,this.dp=null,this.dq=w,this.dp=q}z=t4.prototype=new M;z.constructor=t4;function GZ(){}GZ.prototype=z;z.m=function(w){return new K2(this.dq,this.dp.g(w),new Z2((q,F,K)=>{O0().fd(q,F,K)}))};var OB=new Y().i(t4,"com.raquo.laminar.keys.DerivedStyleProp",{bX:1});function Kq(){}z=Kq.prototype=new M;z.constructor=Kq;function T2(){}T2.prototype=z;function e4(){this.fi=null,this.fj=null,this.fk=null,this.fl=null,this.fi="http://www.w3.org/2000/svg",this.fj="http://www.w3.org/1999/xlink",this.fk="http://www.w3.org/XML/1998/namespace",this.fl="http://www.w3.org/2000/xmlns/"}z=e4.prototype=new M;z.constructor=e4;function JZ(){}JZ.prototype=z;z.gI=function(w){switch(w){case"svg":return"http://www.w3.org/2000/svg";case"xlink":return"http://www.w3.org/1999/xlink";case"xml":return"http://www.w3.org/XML/1998/namespace";case"xmlns":return"http://www.w3.org/2000/xmlns/";default:throw new y1(w)}};var WB=new Y().i(e4,"com.raquo.laminar.keys.SvgAttr$",{c0:1}),Ww;function XZ(){if(!Ww)Ww=new e4;return Ww}function w3(w,q){this.dt=null,this.dt=w}z=w3.prototype=new M;z.constructor=w3;function kZ(){}kZ.prototype=z;var AB=new Y().i(w3,"com.raquo.laminar.lifecycle.MountContext",{c1:1}),t=new Y().i(1,"com.raquo.laminar.modifiers.Modifier",{X:1});function q3(){this.fm=null,M4=this,this.fm=new $3}z=q3.prototype=new M;z.constructor=q3;function YZ(){}YZ.prototype=z;var IB=new Y().i(q3,"com.raquo.laminar.modifiers.Modifier$",{c3:1}),M4;function G6(){if(!M4)M4=new q3;return M4}function F3(){}z=F3.prototype=new M;z.constructor=F3;function HZ(){}HZ.prototype=z;z.cr=function(w,q,F){var K=new s0(w);if(WG(q,K),F!==void 0)F.i0(w,q);var Z=O0().fI(w.cD(),q.Q);if(Z)AG(q,K);return Z};var uB=new Y().i(F3,"com.raquo.laminar.nodes.ParentNode$",{ca:1}),Aw;function J6(){if(!Aw)Aw=new F3;return Aw}function z3(){L4=this,C1().ag(T().ht(new t0(new Int32Array([0]))))}z=z3.prototype=new M;z.constructor=z3;function UZ(){}UZ.prototype=z;z.fy=function(){return new C((w)=>{return})};var EB=new Y().i(z3,"com.raquo.laminar.tags.CustomHtmlTag$",{cf:1}),L4;function v9(){if(!L4)L4=new z3;return L4}function K3(){}z=K3.prototype=new M;z.constructor=K3;function bZ(){}bZ.prototype=z;z.ev=function(w){return u().t.cu().bF(T().k(new(t.r()).C([u().t.ct().cv(),u().t.eY().eM(),u().t.cy().cC().m(8),N6(u().t,w,H6())])))};var yB=new Y().i(K3,"doc.ExampleGroups$package$",{ch:1}),Iw;function Zq(){if(!Iw)Iw=new K3;return Iw}function Z3(){}z=Z3.prototype=new M;z.constructor=Z3;function BZ(){}BZ.prototype=z;z.fz=function(w){return u().t.cu().bF(T().k(new(t.r()).C([u().t.ct().cv(),u().t.eZ().fe(),u().t.fF().fO(),u().t.cy().cC().m(16),N6(u().t,w,H6())])))};var $B=new Y().i(Z3,"doc.Examples$package$",{ci:1}),uw;function MZ(){if(!uw)uw=new Z3;return uw}function Q3(){}z=Q3.prototype=new M;z.constructor=Q3;function LZ(){}LZ.prototype=z;z.fB=function(w){return u().t.cu().bF(T().k(new(t.r()).C([u().t.ct().cv(),u().t.eZ().fe(),u().t.eY().eM(),u().t.cy().cC().m(16),N6(u().t,w,H6())])))};var SB=new Y().i(Q3,"doc.VerticalExamples$package$",{cj:1}),Ew;function NZ(){if(!Ew)Ew=new Q3;return Ew}function G3(){}z=G3.prototype=new M;z.constructor=G3;function fZ(){}fZ.prototype=z;z.fG=function(){I1().g5(),I1().g6(),I1().g7(),I1().g8(),I1().g9(),I1().ga(),I1().gb(),I1().gc()};z.g5=function(){var w=document.querySelector("#example1");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))))};z.g6=function(){var w=document.querySelector("#example2");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>(n().aW(),u().t).aX().m("#4a90e2")),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))))};z.g7=function(){var w=document.querySelector("#example3");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>(n().aW(),u().t).aX().m("#f5a623ff")),new y((q)=>q.gV().m(!0)),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))))};z.g8=function(){var w=document.querySelector("#example4");if(w!==null)u(),new w1(w,Zq().ev(T().k(new(h4.r()).C([NZ().fB(T().k(new(h4.r()).C([n().I(T().k(new(Z0.r()).C([new y((q)=>q.bJ().gu()),new y((q)=>(n().aW(),u().t).aX().m("#4a90e2")),new y((q)=>q.K().m("Pick a hex color"))])),T().k(new(t.r()).C([]))),n().I(T().k(new(Z0.r()).C([new y((q)=>q.bJ().h6()),new y((q)=>(n().aW(),u().t).aX().m("rgb(80, 227, 194)")),new y((q)=>q.K().m("Pick an RGB color"))])),T().k(new(t.r()).C([]))),n().I(T().k(new(Z0.r()).C([new y((q)=>q.bJ().gw()),new y((q)=>(n().aW(),u().t).aX().m("hsl(290, 87%, 47%)")),new y((q)=>q.K().m("Pick an HSL color"))])),T().k(new(t.r()).C([]))),n().I(T().k(new(Z0.r()).C([new y((q)=>q.bJ().gx()),new y((q)=>(n().aW(),u().t).aX().m("hsv(55, 89%, 97%)")),new y((q)=>q.K().m("Pick an HSV color"))])),T().k(new(t.r()).C([])))])))]))))};z.g9=function(){var w=document.querySelector("#example5");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>q.K().m("Select a color")),new y((q)=>q.hl().m("#d0021b; #f5a623; #f8e71c; #8b572a; #7ed321; #417505; #bd10e0; #9013fe; #4a90e2; #50e3c2; #b8e986; #000; #444; #888; #ccc; #fff;"))])),T().k(new(t.r()).C([]))))};z.ga=function(){var w=document.querySelector("#example6");if(w!==null)u(),new w1(w,Zq().ev(T().k(new(h4.r()).C([MZ().fz(T().k(new(h4.r()).C([n().I(T().k(new(Z0.r()).C([new y((q)=>q.cH().hh()),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))),n().I(T().k(new(Z0.r()).C([new y((q)=>q.cH().gG()),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))),n().I(T().k(new(Z0.r()).C([new y((q)=>q.cH().gD()),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([])))])))]))))};z.gb=function(){var w=document.querySelector("#example7");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>q.fX().m(!0)),new y((q)=>q.K().m("Select a color"))])),T().k(new(t.r()).C([]))))};z.gc=function(){var w=document.querySelector("#example8");if(w!==null)u(),new w1(w,n().I(T().k(new(Z0.r()).C([new y((q)=>q.K().m("Select a color")),new y((q)=>q.gv().m("Choose a color with appropriate contrast!"))])),T().k(new(t.r()).C([]))))};var RB=new Y().i(G3,"examples.colorPicker.Main$package$",{ck:1}),yw;function I1(){if(!yw)yw=new G3;return yw}function VZ(w){try{I1().fG()}catch(q){throw q}}function J3(){this.fo=!1,this.aZ=null,this.bz=null,this.e5=null,this.c5=!1,this.fn=0,this.fq=0,this.fp=null,N4=this,this.fo=!0,this.aZ=new ArrayBuffer(8),this.bz=new Int32Array(this.aZ,0,2),new Float32Array(this.aZ,0,2),this.e5=new Float64Array(this.aZ,0,1),this.bz[0]=16909060,this.c5=(new Int8Array(this.aZ,0,8)[0]|0)===1,this.fn=this.c5?0:1,this.fq=this.c5?1:0,this.fp=null}z=J3.prototype=new M;z.constructor=J3;function TZ(){}TZ.prototype=z;z.cB=function(w){var q=w|0|0;if(q===w&&1/w!==-1/0)return q;else return this.e5[0]=w,(this.bz[0]|0)^(this.bz[1]|0)};var gB=new Y().i(J3,"java.lang.FloatingPointBits$",{cz:1}),N4;function Qq(){if(!N4)N4=new J3;return N4}function DZ(w,q){var F=_().V("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$"),K=[],Z=0;while(Z<(q.length|0)){var Q=q[Z];if(Q!==""){var G=F.exec(Q);if(G!==null)var X=OZ(w,G[1]),J=X[0],k=X[1],H=G[2],b=G[3],N=parseInt(b),L=G[4],f=K.push(new V2(J,k,H,N|0,L!==void 0?parseInt(L)|0:-1));else K.push(new V2("<jscode>",Q,null,-1,-1))|0}Z=1+Z|0}var V=K.length|0,W=new(Dq.r()).C(V);Z=0;while(Z<V)W.a[Z]=K[Z],Z=1+Z|0;return W}function OZ(w,q){var F=_().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$"),K=_().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$"),Z=_().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$"),Q=_().V("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$"),G=_().V("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$"),X=F.exec(q),J=X!==null?X:K.exec(q);if(J!==null)return[$w(w,J[1]),uZ(w,J[2])];else{var k=Z.exec(q),H=k!==null?k:Q.exec(q);if(H!==null)return[$w(w,H[1]),"<init>"];else{var b=G.exec(q);return b!==null?[$w(w,b[1]),"<clinit>"]:["<jscode>",q]}}}function $w(w,q){var F=c9(w);if(oZ().eb.call(F,q))var K=c9(w),Z=K[q];else var Z=CZ(w,0,q);var Q=Z.split("_").join(".");return Q.split("＿").join("_")}function WZ(w){if((1&w.L)<<24>>24===0){var q={};q.O="java_lang_Object",q.T="java_lang_String";var F=0;while(F<=22){if(F>=2){var K="T"+F,Z="scala_Tuple"+F;q[K]=Z}var Q="F"+F,G="scala_Function"+F;q[Q]=G,F=1+F|0}w.c7=q,w.L=(1|w.L)<<24>>24}return w.c7}function c9(w){return(1&w.L)<<24>>24===0?WZ(w):w.c7}function AZ(w){if((2&w.L)<<24>>24===0){var q={};q.sjsr_="scala_scalajs_runtime_",q.sjs_="scala_scalajs_",q.sci_="scala_collection_immutable_",q.scm_="scala_collection_mutable_",q.scg_="scala_collection_generic_",q.sc_="scala_collection_",q.sr_="scala_runtime_",q.s_="scala_",q.jl_="java_lang_",q.ju_="java_util_",w.c8=q,w.L=(2|w.L)<<24>>24}return w.c8}function Gq(w){return(2&w.L)<<24>>24===0?AZ(w):w.c8}function IZ(w){if((4&w.L)<<24>>24===0)w.c6=Object.keys(Gq(w)),w.L=(4|w.L)<<24>>24;return w.c6}function o9(w){return(4&w.L)<<24>>24===0?IZ(w):w.c6}function uZ(w,q){if(q.startsWith("init___"))return"<init>";else{var F=q.indexOf("__")|0;return F<0?q:q.substring(0,F)}}function EZ(w,q){return!q?[]:q.arguments&&q.stack?m9(w,q):q.stack&&q.sourceURL?SZ(w,q):q.stack&&q.number?$Z(w,q):q.stack&&q.fileName?yZ(w,q):q.message&&q["opera#sourceloc"]?!q.stacktrace?i9(w,q):q.message.indexOf(`
`)>-1&&q.message.split(`
`).length>q.stacktrace.split(`
`).length?i9(w,q):RZ(w,q):q.message&&q.stack&&q.stacktrace?q.stacktrace.indexOf("called from line")<0?gZ(w,q):dZ(w,q):q.stack&&!q.fileName?m9(w,q):hZ(w,q)}function m9(w,q){return(q.stack+`
`).replace(_().V("^[\\s\\S]+?\\s+at\\s+")," at ").replace(_().C("^\\s+(at eval )?at\\s+","gm"),"").replace(_().C("^([^\\(]+?)([\\n])","gm"),"{anonymous}() ($1)$2").replace(_().C("^Object.<anonymous>\\s*\\(([^\\)]+)\\)","gm"),"{anonymous}() ($1)").replace(_().C("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$","gm"),"$1@$2").split(`
`).slice(0,-1)}function yZ(w,q){return q.stack.replace(_().C("(?:\\n@:0)?\\s+$","m"),"").replace(_().C("^(?:\\((\\S*)\\))?@","gm"),"{anonymous}($1)@").split(`
`)}function $Z(w,q){var F=q.stack.replace(_().C("^\\s*at\\s+(.*)$","gm"),"$1").replace(_().C("^Anonymous function\\s+","gm"),"{anonymous}() ").replace(_().C("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$","gm"),"$1@$2").split(`
`);return F.slice(1)}function SZ(w,q){return q.stack.replace(_().C("\\[native code\\]\\n","m"),"").replace(_().C("^(?=\\w+Error\\:).*$\\n","m"),"").replace(_().C("^@","gm"),"{anonymous}()@").split(`
`)}function i9(w,q){var F=_().C("Line (\\d+).*script (?:in )?(\\S+)","i"),K=q.message.split(`
`),Z=[],Q=2,G=K.length|0;while(Q<G){var X=F.exec(K[Q]);if(X!==null)Z.push("{anonymous}()@"+X[2]+":"+X[1])|0;Q=2+Q|0}return Z}function RZ(w,q){var F=_().C("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$","i"),K=q.stacktrace.split(`
`),Z=[],Q=0,G=K.length|0;while(Q<G){var X=F.exec(K[Q]);if(X!==null){var J=X[3],k=J!==void 0?J:"{anonymous}";Z.push(k+"()@"+X[2]+":"+X[1])|0}Q=2+Q|0}return Z}function gZ(w,q){var F=_().V("^(.*)@(.+):(\\d+)$"),K=q.stacktrace.split(`
`),Z=[],Q=0,G=K.length|0;while(Q<G){var X=F.exec(K[Q]);if(X!==null){var J=X[1],k=J!==void 0?J+"()":"global code";Z.push(k+"@"+X[2]+":"+X[3])|0}Q=1+Q|0}return Z}function dZ(w,q){var F=_().V("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"),K=q.stacktrace.split(`
`),Z=[],Q=0,G=K.length|0;while(Q<G){var X=F.exec(K[Q]);if(X!==null){var J=X[4]+":"+X[1]+":"+X[2],k=X[2],H=k!==void 0?k:"global code",b=H.replace(_().V("<anonymous function: (\\S+)>"),"$1").replace(_().V("<anonymous function>"),"{anonymous}");Z.push(b+"@"+J)|0}Q=2+Q|0}return Z}function hZ(w,q){return[]}function CZ(w,q,F){while(!0)if(q<(o9(w).length|0)){var K=o9(w)[q];if(F.startsWith(K)){var Z=Gq(w);return""+Z[K]+F.substring(K.length)}else q=1+q|0}else return F.startsWith("L")?F.substring(1):F}function X3(){this.c7=null,this.c8=null,this.c6=null,this.L=0}z=X3.prototype=new M;z.constructor=X3;function PZ(){}PZ.prototype=z;z.gd=function(w){return DZ(this,EZ(this,w))};var dB=new Y().i(X3,"java.lang.StackTrace$",{cG:1}),Sw;function jZ(){if(!Sw)Sw=new X3;return Sw}function k3(){}z=k3.prototype=new M;z.constructor=k3;function _Z(){}_Z.prototype=z;z.V=function(w){return new RegExp(w)};z.C=function(w,q){return new RegExp(w,q)};var hB=new Y().i(k3,"java.lang.StackTrace$StringRE$",{cH:1}),Rw;function _(){if(!Rw)Rw=new k3;return Rw}function Y3(){this.e7=null,this.fr=null,f4=this,this.e7=new a2(!1),this.fr=new a2(!0)}z=Y3.prototype=new M;z.constructor=Y3;function xZ(){}xZ.prototype=z;var CB=new Y().i(Y3,"java.lang.System$Streams$",{cM:1}),f4;function vZ(){if(!f4)f4=new Y3;return f4}function H3(){this.eb=null,V4=this,this.eb=Object.prototype.hasOwnProperty}z=H3.prototype=new M;z.constructor=H3;function cZ(){}cZ.prototype=z;var PB=new Y().i(H3,"java.lang.Utils$Cache$",{cO:1}),V4;function oZ(){if(!V4)V4=new H3;return V4}function mZ(w,q){return w===q}function iZ(w){return 0}function Jq(w,q){return!!(w&&w.$classData&&w.$classData.D===q&&w.$classData.B.n.ao)}var Xq=new Y().i(0,"java.lang.Void",{ao:1},(w)=>w===void 0);function rZ(w,q){throw new T6("argument type mismatch")}function U3(){}z=U3.prototype=new M;z.constructor=U3;function lZ(){}lZ.prototype=z;z.aR=function(w){return w instanceof u0?w.a.length:w instanceof k1?w.a.length:w instanceof Y1?w.a.length:w instanceof H1?w.a.length:w instanceof U1?w.a.length:w instanceof t0?w.a.length:w instanceof b1?w.a.length:w instanceof B1?w.a.length:w instanceof M1?w.a.length:rZ(this,w)};var jB=new Y().i(U3,"java.lang.reflect.Array$",{cP:1}),gw;function f2(){if(!gw)gw=new U3;return gw}function b3(){}z=b3.prototype=new M;z.constructor=b3;function pZ(){}pZ.prototype=z;z.eU=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=Q.c,X=Q.d,J=K,k=q.a[J],H=k.c,b=k.d;if(!(G===H&&X===b))return!1;K=1+K|0}return!0};z.eT=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(Q!==q.a[G])return!1;K=1+K|0}return!0};z.eV=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(Q!==q.a[G])return!1;K=1+K|0}return!0};z.eQ=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(Q!==q.a[G])return!1;K=1+K|0}return!0};z.eP=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(Q!==q.a[G])return!1;K=1+K|0}return!0};z.eW=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(Q!==q.a[G])return!1;K=1+K|0}return!0};z.eR=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(!Object.is(Q,q.a[G]))return!1;K=1+K|0}return!0};z.eS=function(w,q){if(w===q)return!0;if(w===null||q===null)return!1;var F=w.a.length;if(q.a.length!==F)return!1;var K=0;while(K!==F){var Z=K,Q=w.a[Z],G=K;if(!Object.is(Q,q.a[G]))return!1;K=1+K|0}return!0};var _B=new Y().i(b3,"java.util.Arrays$",{cQ:1}),dw;function F0(){if(!dw)dw=new b3;return dw}function A(w,q){this.c=0,this.d=0,this.c=w,this.d=q}z=A.prototype=new M;z.constructor=A;function nZ(){}nZ.prototype=z;z.h=function(w){return w instanceof A&&(this.c===w.c&&this.d===w.d)};z.p=function(){return this.c^this.d};z.u=function(){return W0().f9(this.c,this.d)};z.i5=function(){return this.c};z.i4=function(){return W0().f8(this.c,this.d)};z.i3=function(){return W0().bn(this.c,this.d)};z.hL=function(){return this.c<<24>>24};z.i1=function(){return this.c<<16>>16};z.hV=function(){return this.c};z.hW=function(){return this};z.hR=function(){return W0().f8(this.c,this.d)};z.hP=function(){return W0().bn(this.c,this.d)};z.hN=function(w){return W0().f6(this.c,this.d,w.c,w.d)};z.hM=function(w){return W0().f6(this.c,this.d,w.c,w.d)};z.hQ=function(w){return this.c===w.c&&this.d===w.d};z.hZ=function(w){return!(this.c===w.c&&this.d===w.d)};z.hD=function(w){var q=this.d,F=w.d;return q===F?(-2147483648^this.c)<(-2147483648^w.c):q<F};z.hE=function(w){var q=this.d,F=w.d;return q===F?(-2147483648^this.c)<=(-2147483648^w.c):q<F};z.hz=function(w){var q=this.d,F=w.d;return q===F?(-2147483648^this.c)>(-2147483648^w.c):q>F};z.hA=function(w){var q=this.d,F=w.d;return q===F?(-2147483648^this.c)>=(-2147483648^w.c):q>F};z.i7=function(){return new A(~this.c,~this.d)};z.hx=function(w){return new A(this.c|w.c,this.d|w.d)};z.hw=function(w){return new A(this.c&w.c,this.d&w.d)};z.hK=function(w){return new A(this.c^w.c,this.d^w.d)};z.hF=function(w){var q=this.c;return new A((32&w)===0?q<<w:0,(32&w)===0?(q>>>1|0)>>>(31-w|0)|0|this.d<<w:q<<w)};z.hC=function(w){var q=this.d;return new A((32&w)===0?this.c>>>w|0|q<<1<<(31-w|0):q>>>w|0,(32&w)===0?q>>>w|0:0)};z.hB=function(w){var q=this.d;return new A((32&w)===0?this.c>>>w|0|q<<1<<(31-w|0):q>>w,(32&w)===0?q>>w:q>>31)};z.i6=function(){var w=this.c,q=this.d;return new A(-w|0,w!==0?~q:-q|0)};z.hI=function(w){var q=this.c,F=this.d,K=w.d,Z=q+w.c|0;return new A(Z,(-2147483648^Z)<(-2147483648^q)?1+(F+K|0)|0:F+K|0)};z.hG=function(w){var q=this.c,F=this.d,K=w.d,Z=q-w.c|0;return new A(Z,(-2147483648^Z)>(-2147483648^q)?-1+(F-K|0)|0:F-K|0)};z.hJ=function(w){var q=this.c,F=w.c,K=65535&q,Z=q>>>16|0,Q=65535&F,G=F>>>16|0,X=Math.imul(K,Q),J=Math.imul(Z,Q),k=Math.imul(K,G),H=X+((J+k|0)<<16)|0,b=(X>>>16|0)+k|0;return new A(H,(((Math.imul(q,w.d)+Math.imul(this.d,F)|0)+Math.imul(Z,G)|0)+(b>>>16|0)|0)+(((65535&b)+J|0)>>>16|0)|0)};z.hy=function(w){var q=W0();return new A(q.fY(this.c,this.d,w.c,w.d),q.r)};z.hH=function(w){var q=W0();return new A(q.h2(this.c,this.d,w.c,w.d),q.r)};var xB=new Y().i(A,"org.scalajs.linker.runtime.RuntimeLong",{ap:1});function r9(w,q,F){return(-2097152&F)===0?""+(4294967296*F+ +(q>>>0)):X6(w,q,F,1e9,0,2)}function sZ(w,q,F,K,Z){if((-2097152&F)===0)if((-2097152&Z)===0){var Q=4294967296*F+ +(q>>>0),G=4294967296*Z+ +(K>>>0),X=Q/G;return w.r=X/4294967296|0|0,X|0|0}else return w.r=0,0;else if(Z===0&&(K&(-1+K|0))===0){var J=31-(Math.clz32(K)|0)|0;return w.r=F>>>J|0,q>>>J|0|F<<1<<(31-J|0)}else if(K===0&&(Z&(-1+Z|0))===0){var k=31-(Math.clz32(Z)|0)|0;return w.r=0,F>>>k|0}else return X6(w,q,F,K,Z,0)|0}function aZ(w,q,F,K,Z){if((-2097152&F)===0)if((-2097152&Z)===0){var Q=4294967296*F+ +(q>>>0),G=4294967296*Z+ +(K>>>0),X=Q%G;return w.r=X/4294967296|0|0,X|0|0}else return w.r=F,q;else if(Z===0&&(K&(-1+K|0))===0)return w.r=0,q&(-1+K|0);else if(K===0&&(Z&(-1+Z|0))===0)return w.r=F&(-1+Z|0),q;else return X6(w,q,F,K,Z,1)|0}function X6(w,q,F,K,Z,Q){var G=(Z!==0?Math.clz32(Z)|0:32+(Math.clz32(K)|0)|0)-(F!==0?Math.clz32(F)|0:32+(Math.clz32(q)|0)|0)|0,X=G,J=(32&X)===0?K<<X:0,k=(32&X)===0?(K>>>1|0)>>>(31-X|0)|0|Z<<X:K<<X,H=J,b=k,N=q,L=F,f=0,V=0;while(G>=0&&(-2097152&L)!==0){var W=N,I=L,$=H,R=b;if(I===R?(-2147483648^W)>=(-2147483648^$):(-2147483648^I)>=(-2147483648^R)){var m=N,j=L,B0=H,l=b,$0=m-B0|0,S0=(-2147483648^$0)>(-2147483648^m)?-1+(j-l|0)|0:j-l|0;if(N=$0,L=S0,G<32)f=f|1<<G;else V=V|1<<G}G=-1+G|0;var Q0=H,j0=b,R0=Q0>>>1|0|j0<<31,K1=j0>>>1|0;H=R0,b=K1}var a=N,Z1=L;if(Z1===Z?(-2147483648^a)>=(-2147483648^K):(-2147483648^Z1)>=(-2147483648^Z)){var _0=N,M0=L,G0=4294967296*M0+ +(_0>>>0),x0=4294967296*Z+ +(K>>>0);if(Q!==1){var P5=G0/x0,AF=P5|0|0,$6=P5/4294967296|0|0,S6=f,R6=V,g6=S6+AF|0,IF=(-2147483648^g6)<(-2147483648^S6)?1+(R6+$6|0)|0:R6+$6|0;f=g6,V=IF}if(Q!==0){var d6=G0%x0;N=d6|0|0,L=d6/4294967296|0|0}}if(Q===0)return w.r=V,f;else if(Q===1)return w.r=L,N;else{var uF=f,EF=V,yF=4294967296*EF+ +(uF>>>0),$F=N,h6=""+$F,SF=h6.length;return""+yF+"000000000".substring(SF)+h6}}function B3(){this.r=0}z=B3.prototype=new M;z.constructor=B3;function tZ(){}tZ.prototype=z;z.f9=function(w,q){return q===w>>31?""+w:q<0?"-"+r9(this,-w|0,w!==0?~q:-q|0):r9(this,w,q)};z.bn=function(w,q){return q<0?-(4294967296*+((w!==0?~q:-q|0)>>>0)+ +((-w|0)>>>0)):4294967296*q+ +(w>>>0)};z.f8=function(w,q){if(q<0)var F=-w|0,K=w!==0?~q:-q|0;else var F=w,K=q;var Z=(-2097152&K)===0||(65535&F)===0?F:32768|-65536&F,Q=4294967296*+(K>>>0)+ +(Z>>>0);return Math.fround(q<0?-Q:Q)};z.hT=function(w){return new A(w,w>>31)};z.hS=function(w){return new A(this.f7(w),this.r)};z.f7=function(w){if(w<-9223372036854776000)return this.r=-2147483648,0;else if(w>=9223372036854776000)return this.r=2147483647,-1;else{var q=w|0|0,F=w/4294967296|0|0;return this.r=w<0&&q!==0?-1+F|0:F,q}};z.f6=function(w,q,F,K){return q===K?w===F?0:(-2147483648^w)<(-2147483648^F)?-1:1:q<K?-1:1};z.fY=function(w,q,F,K){if((F|K)===0)throw new O2("/ by zero");if(q===w>>31)if(K===F>>31)if(w===-2147483648&&F===-1)return this.r=0,-2147483648;else{var Z=LK(w,F);return this.r=Z>>31,Z}else if(w===-2147483648&&(F===-2147483648&&K===0))return this.r=-1,-1;else return this.r=0,0;else{if(q<0)var Q=-w|0,G=w!==0?~q:-q|0;else var Q=w,G=q;if(K<0)var X=-F|0,J=F!==0?~K:-K|0;else var X=F,J=K;var k=sZ(this,Q,G,X,J);if((q^K)>=0)return k;else{var H=this.r;return this.r=k!==0?~H:-H|0,-k|0}}};z.h2=function(w,q,F,K){if((F|K)===0)throw new O2("/ by zero");if(q===w>>31)if(K===F>>31)if(F!==-1){var Z=NK(w,F);return this.r=Z>>31,Z}else return this.r=0,0;else if(w===-2147483648&&(F===-2147483648&&K===0))return this.r=0,0;else return this.r=q,w;else{if(q<0)var Q=-w|0,G=w!==0?~q:-q|0;else var Q=w,G=q;if(K<0)var X=-F|0,J=F!==0?~K:-K|0;else var X=F,J=K;var k=aZ(this,Q,G,X,J);if(q<0){var H=this.r;return this.r=k!==0?~H:-H|0,-k|0}else return k}};var vB=new Y().i(B3,"org.scalajs.linker.runtime.RuntimeLong$",{cS:1}),hw;function W0(){if(!hw)hw=new B3;return hw}var Z0=new Y().i(1,"scala.Function1",{e:1});function kq(){}z=kq.prototype=new M;z.constructor=kq;function Yq(){}Yq.prototype=z;function M3(){this.ee=null,this.ed=null,T4=this,this.ee=new y((w)=>Hq().ee),this.ed=new Z8}z=M3.prototype=new M;z.constructor=M3;function eZ(){}eZ.prototype=z;var cB=new Y().i(M3,"scala.PartialFunction$",{d2:1}),T4;function Hq(){if(!T4)T4=new M3;return T4}function L3(){this.eh=null,D4=this,this.eh=new y((w)=>Uq().eh)}z=L3.prototype=new M;z.constructor=L3;function wQ(){}wQ.prototype=z;z.gg=function(w,q){var F=f2().aR(w),K=0;if(w instanceof u0)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof t0)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof M1)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof b1)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof B1)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof Y1)while(K<F)q.g(X1(w.a[K])),K=1+K|0;else if(w instanceof H1)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof U1)while(K<F)q.g(w.a[K]),K=1+K|0;else if(w instanceof k1)while(K<F)q.g(w.a[K]),K=1+K|0;else throw new y1(w)};var oB=new Y().i(L3,"scala.collection.ArrayOps$",{d8:1}),D4;function Uq(){if(!D4)D4=new L3;return D4}function qQ(w,q){var F=w.n();while(F.s())q.g(F.f())}function N3(w,q,F,K){return w.z()===0?""+q+K:w.ba(bX(new y8),q,F,K).H.q}function bq(w,q,F,K,Z){var Q=q.H;if(F.length!==0)Q.q=""+Q.q+F;var G=w.n();if(G.s()){var X=G.f();Q.q=""+Q.q+X;while(G.s()){Q.q=""+Q.q+K;var J=G.f();Q.q=""+Q.q+J}}if(Z.length!==0)Q.q=""+Q.q+Z;return q}function f3(w,q){this.el=null,this.b5=null,this.el=w,this.b5=q}z=f3.prototype=new M;z.constructor=f3;function FQ(){}FQ.prototype=z;z.gt=function(){return this.el.aC().n()};var mB=new Y().i(f3,"scala.collection.Iterator$ConcatIteratorCell",{dr:1});function V3(){}z=V3.prototype=new M;z.constructor=V3;function zQ(){}zQ.prototype=z;z.J=function(w,q){return w===q||(b6(w)?this.g4(w,q):w instanceof a0?this.g2(w,q):w===null?q===null:n2(w,q))};z.g4=function(w,q){if(b6(q))return this.g3(w,q);else if(q instanceof a0)if(typeof w==="number")return+w===q.c;else if(w instanceof A){var F=q2(w),K=F.c,Z=F.d,Q=q.c,G=Q>>31;return K===Q&&Z===G}else return w===null?q===null:n2(w,q);else return w===null?q===null:n2(w,q)};z.g3=function(w,q){if(typeof w==="number"){var F=+w;if(typeof q==="number")return F===+q;else if(q instanceof A){var K=q2(q);return F===W0().bn(K.c,K.d)}else return!1}else if(w instanceof A){var Z=q2(w),Q=Z.c,G=Z.d;if(q instanceof A){var X=q2(q),J=X.c,k=X.d;return Q===J&&G===k}else if(typeof q==="number"){var H=+q;return W0().bn(Q,G)===H}else return!1}else return w===null?q===null:n2(w,q)};z.g2=function(w,q){if(q instanceof a0)return w.c===q.c;else if(b6(q))if(typeof q==="number")return+q===w.c;else if(q instanceof A){var F=q2(q),K=F.c,Z=F.d,Q=w.c,G=Q>>31;return K===Q&&Z===G}else return q===null?w===null:n2(q,w);else return w===null&&q===null};var iB=new Y().i(V3,"scala.runtime.BoxesRunTime$",{e2:1}),Cw;function A0(){if(!Cw)Cw=new V3;return Cw}var KQ=new Y().i(0,"scala.runtime.Null$",{e5:1});function T3(){}z=T3.prototype=new M;z.constructor=T3;function ZQ(){}ZQ.prototype=z;z.aP=function(w,q){if(w instanceof u0)return w.a[q];else if(w instanceof t0)return w.a[q];else if(w instanceof M1)return w.a[q];else if(w instanceof b1)return w.a[q];else if(w instanceof B1)return w.a[q];else if(w instanceof Y1)return X1(w.a[q]);else if(w instanceof H1)return w.a[q];else if(w instanceof U1)return w.a[q];else if(w instanceof k1)return w.a[q];else if(w===null)throw new x1;else throw new y1(w)};z.fL=function(w,q,F){if(w instanceof u0)w.a[q]=F;else if(w instanceof t0)w.a[q]=F|0;else if(w instanceof M1)w.a[q]=+F;else if(w instanceof b1)w.a[q]=q2(F);else if(w instanceof B1)w.a[q]=Math.fround(F);else if(w instanceof Y1)w.a[q]=t2(F);else if(w instanceof H1)w.a[q]=F|0;else if(w instanceof U1)w.a[q]=F|0;else if(w instanceof k1)w.a[q]=!!F;else if(w===null)throw new x1;else throw new y1(w)};z.fC=function(w){return N3(w.aU(),w.aj()+"(",",",")")};z.k=function(w){return w===null?null:w.a.length===0?YJ(UJ()):new Q2(w)};z.ht=function(w){return w!==null?new A2(w):null};var rB=new Y().i(T3,"scala.runtime.ScalaRunTime$",{e6:1}),Pw;function T(){if(!Pw)Pw=new T3;return Pw}function D3(){}z=D3.prototype=new M;z.constructor=D3;function QQ(){}QQ.prototype=z;z.b=function(w,q){var F=this.bL(w,q),K=F;return F=K<<13|(K>>>19|0),-430675100+Math.imul(5,F)|0};z.bL=function(w,q){var F=q;F=Math.imul(-862048943,F);var K=F;return F=K<<15|(K>>>17|0),F=Math.imul(461845907,F),w^F};z.l=function(w,q){return this.fM(w^q)};z.fM=function(w){var q=w;return q=q^(q>>>16|0),q=Math.imul(-2048144789,q),q=q^(q>>>13|0),q=Math.imul(-1028477387,q),q=q^(q>>>16|0),q};z.aT=function(w){var{c:q,d:F}=w;return F===q>>31?q:q^F};z.U=function(w){var q=fK(w);if(q===w)return q;else{var F=W0(),K=F.f7(w),Z=F.r;return W0().bn(K,Z)===w?K^Z:Qq().cB(w)}};z.x=function(w){if(w===null)return 0;else if(typeof w==="number")return this.U(+w);else if(w instanceof A){var q=q2(w);return this.aT(new A(q.c,q.d))}else return MK(w)};z.bm=function(w){throw d4(new z2,""+w)};var lB=new Y().i(D3,"scala.runtime.Statics$",{e8:1}),jw;function O(){if(!jw)jw=new D3;return jw}function O3(){}z=O3.prototype=new M;z.constructor=O3;function GQ(){}GQ.prototype=z;z.hf=function(w,q){return setTimeout(()=>{q.aC()},w)};var pB=new Y().i(O3,"scala.scalajs.js.timers.package$",{ee:1}),_w;function JQ(){if(!_w)_w=new O3;return _w}function W3(){}z=W3.prototype=new M;z.constructor=W3;function XQ(){}XQ.prototype=z;z.ho=function(w){var q=[];return w.Y(new y((F)=>q.push(F)|0)),q};var nB=new Y().i(W3,"scala.scalajs.runtime.Compat$",{en:1}),xw;function kQ(){if(!xw)xw=new W3;return xw}function k6(){}z=k6.prototype=new M;z.constructor=k6;function YQ(){}YQ.prototype=z;z.hg=function(w){var q=w.f3()===0?"":w.f3()===1?" after first argument":" after "+w.f3()+" arguments",F="Illegal command line"+q+": "+w.hX();RQ().gX().gB(F+`
`)};var sB=new Y().i(k6,"scala.util.CommandLineParser$",{ep:1});function A3(w){this.co=null,this.co=w}z=A3.prototype=new M;z.constructor=A3;function HQ(){}HQ.prototype=z;z.u=function(){return"DynamicVariable("+this.co+")"};var aB=new Y().i(A3,"scala.util.DynamicVariable",{er:1});function Bq(){}z=Bq.prototype=new M;z.constructor=Bq;function Mq(){}Mq.prototype=z;z.b=function(w,q){var F=this.bL(w,q),K=F;return F=K<<13|(K>>>19|0),-430675100+Math.imul(5,F)|0};z.bL=function(w,q){var F=q;F=Math.imul(-862048943,F);var K=F;return F=K<<15|(K>>>17|0),F=Math.imul(461845907,F),w^F};z.l=function(w,q){return this.D(w^q)};z.D=function(w){var q=w;return q=q^(q>>>16|0),q=Math.imul(-2048144789,q),q=q^(q>>>13|0),q=Math.imul(-1028477387,q),q=q^(q>>>16|0),q};z.fa=function(w,q,F){var K=w.ah();if(K===0)return P0(w.aj());else{var Z=q;if(!F)Z=this.b(Z,P0(w.aj()));var Q=0;while(Q<K)Z=this.b(Z,O().x(w.ai(Q))),Q=1+Q|0;return this.l(Z,K)}};z.hp=function(w,q){var F=0,K=0,Z=0,Q=1,G=w.n();while(G.s()){var X=G.f(),J=O().x(X);F=F+J|0,K=K^J,Q=Math.imul(Q,1|J),Z=1+Z|0}var k=q;return k=this.b(k,F),k=this.b(k,K),k=this.bL(k,Q),this.l(k,Z)};z.gW=function(w,q){var F=w.n(),K=q;if(!F.s())return this.l(K,0);var Z=F.f();if(!F.s())return this.l(this.b(K,O().x(Z)),1);var Q=F.f(),G=O().x(Z);K=this.b(K,G);var X=K,J=O().x(Q),k=J-G|0,H=2;while(F.s()){K=this.b(K,J);var b=O().x(F.f());if(k!==(b-J|0)||k===0){K=this.b(K,b),H=1+H|0;while(F.s())K=this.b(K,O().x(F.f())),H=1+H|0;return this.l(K,H)}J=b,H=1+H|0}return this.D(this.b(this.b(X,k),J))};z.eA=function(w,q){var F=q,K=f2().aR(w);switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,O().x(T().aP(w,0))),1);default:{var Z=O().x(T().aP(w,0));F=this.b(F,Z);var Q=F,G=O().x(T().aP(w,1)),X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=O().x(T().aP(w,J));if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,O().x(T().aP(w,J))),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.h0=function(w,q,F,K){return this.D(this.b(this.b(this.b(K,w),q),F))};z.gy=function(w,q){var F=q,K=w.j();switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,O().x(w.o(0))),1);default:{var Z=O().x(w.o(0));F=this.b(F,Z);var Q=F,G=O().x(w.o(1)),X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=O().x(w.o(J));if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,O().x(w.o(J))),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.gE=function(w,q){var F=0,K=q,Z=0,Q=0,G=0,X=0,J=w;while(!J.i()){var k=J.a0(),H=J.W(),b=O().x(k);switch(K=this.b(K,b),Z){case 0:{X=b,Z=1;break}case 1:{Q=b-G|0,Z=2;break}case 2:{if(Q!==(b-G|0)||Q===0)Z=3;break}}G=b,F=1+F|0,J=H}return Z===2?this.h0(X,Q,G,q):this.l(K,F)};z.eJ=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,w.a[0]?1231:1237),1);default:{var Z=w.a[0]?1231:1237;F=this.b(F,Z);var Q=F,G=w.a[1]?1231:1237,X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=w.a[J]?1231:1237;if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,w.a[J]?1231:1237),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eB=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,w.a[0]),1);default:{var Z=w.a[0];F=this.b(F,Z);var Q=F,G=w.a[1],X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=w.a[J];if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,w.a[J]),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eC=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,w.a[0]),1);default:{var Z=w.a[0];F=this.b(F,Z);var Q=F,G=w.a[1],X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=w.a[J];if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,w.a[J]),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eD=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,O().U(w.a[0])),1);default:{var Z=O().U(w.a[0]);F=this.b(F,Z);var Q=F,G=O().U(w.a[1]),X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=O().U(w.a[J]);if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,O().U(w.a[J])),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eE=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,O().U(w.a[0])),1);default:{var Z=O().U(w.a[0]);F=this.b(F,Z);var Q=F,G=O().U(w.a[1]),X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=O().U(w.a[J]);if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,O().U(w.a[J])),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eF=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,w.a[0]),1);default:{var Z=w.a[0];F=this.b(F,Z);var Q=F,G=w.a[1],X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=w.a[J];if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,w.a[J]),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eG=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:{var Z=F,Q=w.a[0];return this.l(this.b(Z,O().aT(new A(Q.c,Q.d))),1)}default:{var G=w.a[0],X=O().aT(new A(G.c,G.d));F=this.b(F,X);var J=F,k=w.a[1],H=O().aT(new A(k.c,k.d)),b=H-X|0,N=2;while(N<K){F=this.b(F,H);var L=w.a[N],f=O().aT(new A(L.c,L.d));if(b!==(f-H|0)||b===0){F=this.b(F,f),N=1+N|0;while(N<K){var V=F,W=w.a[N];F=this.b(V,O().aT(new A(W.c,W.d))),N=1+N|0}return this.l(F,K)}H=f,N=1+N|0}return this.D(this.b(this.b(J,b),H))}}};z.eH=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,w.a[0]),1);default:{var Z=w.a[0];F=this.b(F,Z);var Q=F,G=w.a[1],X=G-Z|0,J=2;while(J<K){F=this.b(F,G);var k=w.a[J];if(X!==(k-G|0)||X===0){F=this.b(F,k),J=1+J|0;while(J<K)F=this.b(F,w.a[J]),J=1+J|0;return this.l(F,K)}G=k,J=1+J|0}return this.D(this.b(this.b(Q,X),G))}}};z.eI=function(w,q){var F=q,K=w.a.length;switch(K){case 0:return this.l(F,0);case 1:return this.l(this.b(F,0),1);default:{F=this.b(F,0);var Z=F,Q=0,G=Q,X=2;while(X<K){if(F=this.b(F,Q),G!==(-Q|0)||G===0){F=this.b(F,0),X=1+X|0;while(X<K)F=this.b(F,0),X=1+X|0;return this.l(F,K)}Q=0,X=1+X|0}return this.D(this.b(this.b(Z,G),Q))}}};function I3(w){this.aH=null,this.cP=null,this.bP=!1,this.cP=w,jK(this),this.bP=!1}z=I3.prototype=new M;z.constructor=I3;function UQ(){}UQ.prototype=z;z.gY=function(w){if(this.bP)Q6(w),this.cP.aC();else vK(this,w)};z.gC=function(){_K(this),this.bP=!0};var tB=new Y().i(I3,"com.raquo.airstream.ownership.OneTimeOwner",{bh:1,bi:1});function u3(){}z=u3.prototype=new M;z.constructor=u3;function bQ(){}bQ.prototype=z;z.fW=function(w){return w!==null};z.g1=function(w){return w?"":null};z.bG=function(w){return this.fW(w)};z.bk=function(w){return this.g1(!!w)};var eB=new Y().i(u3,"com.raquo.laminar.codecs.package$$anon$1",{by:1,a1:1});function N2(w){if(w===null)throw new x1}z=N2.prototype=new M;z.constructor=N2;function BQ(){}BQ.prototype=z;z.bk=function(w){return w};z.bG=function(w){return w};var wM=new Y().i(N2,"com.raquo.laminar.codecs.package$$anon$2",{bz:1,a1:1});function MQ(w){return new t4(w,new C((q)=>q+"px"))}function w5(w,q,F,K){}z=w5.prototype=new T2;z.constructor=w5;function LQ(){}LQ.prototype=z;var qM=new Y().i(w5,"com.raquo.laminar.keys.CompositeKey",{bW:1,I:1});function j1(w,q,F){return w.ap=q,w.aY=F,w}function u1(){this.ap=null,this.aY=null}z=u1.prototype=new T2;z.constructor=u1;function Y6(){}Y6.prototype=z;z.m=function(w){return new K2(this,w,new Z2((q,F,K)=>{O0().fc(q,F,K)}))};var FM=new Y().i(u1,"com.raquo.laminar.keys.HtmlAttr",{a2:1,I:1});function E3(w,q){this.ds=null,this.dr=null,this.ds=w,this.dr=q}z=E3.prototype=new T2;z.constructor=E3;function NQ(){}NQ.prototype=z;z.m=function(w){return new K2(this,w,new Z2((q,F,K)=>{O0().ha(q,F,K)}))};var zM=new Y().i(E3,"com.raquo.laminar.keys.HtmlProp",{bY:1,I:1});function y3(w,q,F){this.bV=null,this.bU=null,this.bw=null,this.bx=null,this.bV=w,this.bU=q;var K=F.i()?b0():new s0(F.y()+":"+w);this.bw=K.i()?w:K.y(),this.bx=F.i()?b0():new s0(XZ().gI(F.y()))}z=y3.prototype=new T2;z.constructor=y3;function fQ(){}fQ.prototype=z;var KM=new Y().i(y3,"com.raquo.laminar.keys.SvgAttr",{bZ:1,I:1});function $3(){}z=$3.prototype=new M;z.constructor=$3;function VQ(){}VQ.prototype=z;z.aO=function(w){};var ZM=new Y().i($3,"com.raquo.laminar.modifiers.Modifier$$anon$1",{c4:1,X:1});function q5(w,q){if(this.dx=null,this.dx=w,q===null)throw new x1}z=q5.prototype=new M;z.constructor=q5;function TQ(){}TQ.prototype=z;z.aO=function(w){var q=h1(),F=()=>{this.dx.g(w)};h1();var K=!0;if(q.P||!K)F();else{q.P=!0;try{F()}finally{q.P=!1,Z6(q)}}};var QM=new Y().i(q5,"com.raquo.laminar.modifiers.Modifier$$anon$2",{c5:1,X:1});function S3(){}z=S3.prototype=new M;z.constructor=S3;function DQ(){}DQ.prototype=z;var GM=new Y().i(S3,"com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$",{c7:1,c6:1}),vw;function H6(){if(!vw)vw=new S3;return vw}function Lq(w){w.eO(new c4(new P1(()=>{throw I0(new q0,"Attempting to use owner of unmounted element: "+N3(O0().fV(w.cD(),(O0(),c1())),""," > ",""))})))}function Nq(w,q,F){return w.bY=q,w}function R3(){this.bY=null}z=R3.prototype=new M;z.constructor=R3;function fq(){}fq.prototype=z;z.cA=function(){return this.bY};z.bF=function(w){var q=this.fN();return w.Y(new C((F)=>{F.aO(q)})),q};z.fN=function(){return new M8(this,O0().fR(this))};var JM=new Y().i(R3,"com.raquo.laminar.tags.HtmlTag",{ad:1,a3:1});function g3(w,q){this.dC=null,this.dC=w}z=g3.prototype=new M;z.constructor=g3;function OQ(){}OQ.prototype=z;var XM=new Y().i(g3,"com.raquo.laminar.tags.SvgTag",{cg:1,a3:1});function F5(){}z=F5.prototype=new M;z.constructor=F5;function WQ(){}WQ.prototype=z;z.bk=function(w){return w};z.bG=function(w){return w};var kM=new Y().i(F5,"io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1",{cp:1,a1:1});function AQ(w,q){return w.c0=q,w.fA(),w}function Vq(){this.c0=null,this.bZ=null,this.c1=!1,this.c2=null,this.c3=!1}z=Vq.prototype=new M;z.constructor=Vq;function Tq(){}Tq.prototype=z;z.hm=function(){if(!this.c1)this.bZ=new o3(this.c0,v9().fy(),(v9(),void 0)),this.c1=!0;return this.bZ};z.I=function(w,q){var F=this.hm().bF(T().k(new(t.r()).C([])));return w.Y(new C((K)=>{K.g(this).aO(F)})),q.Y(new C((K)=>{K.aO(F)})),F};z.aW=function(){if(!this.c3)this.c2=new p3,this.c3=!0;return this.c2};function U6(){}z=U6.prototype=new M;z.constructor=U6;function IQ(){}IQ.prototype=z;function b6(w){return w instanceof U6||typeof w==="number"||w instanceof A}function V2(w,q,F,K,Z){this.aK=null,this.b1=null,this.aL=null,this.aM=0,this.aJ=0,this.aK=w,this.b1=q,this.aL=F,this.aM=K,this.aJ=Z}z=V2.prototype=new M;z.constructor=V2;function uQ(){}uQ.prototype=z;z.h=function(w){return w instanceof V2&&(this.aL===w.aL&&this.aM===w.aM&&this.aJ===w.aJ&&this.aK===w.aK&&this.b1===w.b1)};z.u=function(){var w="";if(this.aK!=="<jscode>")w=""+w+this.aK+".";if(w=""+w+this.b1,this.aL===null)w=w+"(Unknown Source)";else{if(w=w+"("+this.aL,this.aM>=0){if(w=w+":"+this.aM,this.aJ>=0)w=w+":"+this.aJ}w=w+")"}return w};z.p=function(){return P0(this.aK)^P0(this.b1)^P0(this.aL)^this.aM^this.aJ};var Dq=new Y().i(V2,"java.lang.StackTraceElement",{an:1,a:1});function d3(){}z=d3.prototype=new M;z.constructor=d3;function EQ(){}EQ.prototype=z;z.gJ=function(w,q,F){var K=q+F|0;if(q<0||K<q||K>w.a.length)throw new W6;var Z="",Q=q;while(Q!==K)Z=Z+(""+R4(w.a[Q])),Q=1+Q|0;return Z};var YM=new Y().i(d3,"java.lang.String$",{cJ:1,a:1}),cw;function yQ(){if(!cw)cw=new d3;return cw}function e0(w,q,F,K,Z){if(w.e9=q,w.ea=Z,Z)w.ge();return w}class _1 extends Error{constructor(){super();this.e9=null,this.ea=!1,this.e8=null,this.bA=null}bl(){return this.e9}ge(){var w=this instanceof U0?this.S:this;return this.e8=Object.prototype.toString.call(w)==="[object Error]"?w:Error.captureStackTrace===void 0||!!Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}gp(){if(this.bA===null)if(this.ea)this.bA=jZ().gd(this.e8);else this.bA=new(Dq.r()).C(0);return this.bA}u(){var w=S4(this),q=this.bl();return q===null?w:w+": "+q}p(){return F2.prototype.p.call(this)}h(w){return F2.prototype.h.call(this,w)}get message(){var w=this.bl();return w===null?"":w}get name(){return S4(this)}toString(){return this.u()}}function h3(){}z=h3.prototype=new M;z.constructor=h3;function $Q(){}$Q.prototype=z;z.f0=function(w,q){var F=w.z();if(F>-1){var K=q.gK(F),Z=w.n(),Q=0;while(Q<F)T().fL(K,Q,Z.f()),Q=1+Q|0;return K}else{var G=0,X=0,J=null,k=q.h7();G=0,X=0;var H=k===OK.l();J=[];var b=w.n();while(b.s()){var N=b.f(),L=H?t2(N):N===null?k.ak.z:N;J.push(L)}var f=k===DK.l()?Xq.l():k===KQ.l()||k===zG.l()?n0.l():k;return f.ak.r().w(J)}};z.eX=function(w,q){if(w===q)return!0;if(w.a.length!==q.a.length)return!1;var F=w.a.length,K=0;while(K<F){if(!A0().J(w.a[K],q.a[K]))return!1;K=1+K|0}return!0};var HM=new Y().i(h3,"scala.Array$",{cT:1,a:1}),ow;function C3(){if(!ow)ow=new h3;return ow}function P3(){this.ec=null,O4=this,this.ec=new A3(vZ().e7)}z=P3.prototype=new M;z.constructor=P3;function SQ(){}SQ.prototype=z;z.gX=function(){return this.ec.co};var UM=new Y().i(P3,"scala.Console$",{cU:1,dO:1}),O4;function RQ(){if(!O4)O4=new P3;return O4}function Oq(){}z=Oq.prototype=new M;z.constructor=Oq;function Wq(){}Wq.prototype=z;z.u=function(){return"<function1>"};function Aq(){}z=Aq.prototype=new Yq;z.constructor=Aq;function Iq(){}Iq.prototype=z;z.hu=function(w){return w===null?null:w.a.length===0?BJ().em:new G2(w)};function B6(w,q){if(q===w)w.ex(FF().f1(q));else{var F=q.n();while(F.s())w.cq(F.f())}return w}function uq(){}z=uq.prototype=new M;z.constructor=uq;function M6(){}M6.prototype=z;z.u=function(){return"<function0>"};function Eq(){}z=Eq.prototype=new M;z.constructor=Eq;function L6(){}L6.prototype=z;z.u=function(){return"<function1>"};function yq(){}z=yq.prototype=new M;z.constructor=yq;function $q(){}$q.prototype=z;z.u=function(){return"<function2>"};function Sq(){}z=Sq.prototype=new M;z.constructor=Sq;function Rq(){}Rq.prototype=z;z.u=function(){return"<function3>"};function j3(w){this.bE=!1,this.bE=w}z=j3.prototype=new M;z.constructor=j3;function gQ(){}gQ.prototype=z;z.u=function(){return""+this.bE};var bM=new Y().i(j3,"scala.runtime.BooleanRef",{e1:1,a:1});function _3(w){this.b8=0,this.b8=w}z=_3.prototype=new M;z.constructor=_3;function dQ(){}dQ.prototype=z;z.u=function(){return""+this.b8};var BM=new Y().i(_3,"scala.runtime.IntRef",{e3:1,a:1});function x3(){this.v=0,this.eu=0,this.fx=0,this.fw=0,W4=this,this.v=P0("Seq"),this.eu=P0("Map"),this.fx=P0("Set"),this.fw=this.hp(c1(),this.eu)}z=x3.prototype=new Mq;z.constructor=x3;function hQ(){}hQ.prototype=z;z.h8=function(w){return hJ(w)?this.gy(w,this.v):w instanceof I8?this.gE(w,this.v):this.gW(w,this.v)};var MM=new Y().i(x3,"scala.util.hashing.MurmurHash3$",{et:1,es:1}),W4;function o(){if(!W4)W4=new x3;return W4}class gq extends _1{}function v3(){this.bM=null,this.cI=null,this.cJ=null,A4=this,this.bM=FF().ey(T().k(new(Z0.r()).C([]))),this.cI=new C((w)=>{try{console.error(this.gl(w)+`
`+this.go(w,`
`))}catch(F){var q=F instanceof _1?F:new U0(F);console.error("Error in AirstreamError.consoleErrorCallback:"),console.error(q)}}),this.cJ=new C((w)=>{console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");var q=w;throw q instanceof U0?q.S:q}),this.h1(this.cI)}z=v3.prototype=new M;z.constructor=v3;function CQ(){}CQ.prototype=z;z.gl=function(w){try{var q=w.bl()}catch(F){var q="(Unable to get the message for this error - exception occurred in its getMessage)"}return s9(w).cz()+": "+q};z.go=function(w,q){try{return N3(lQ().hu(w.gp()),"",q,"")}catch(F){return"(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)"}};z.h1=function(w){this.bM.cq(w)};z.cG=function(w){var q=this.bM,F=q.n();while(F.s()){var K=F.f();try{K.g(w)}catch(G){var Z=G instanceof _1?G:new U0(G),Q=this.cJ;if(K===null?Q===null:K.h(Q))throw Z instanceof U0?Z.S:Z;console.warn("Error processing an unhandled error callback:"),JQ().hf(0,new P1(((X)=>()=>{throw X instanceof U0?X.S:X})(Z)))}}};var LM=new Y().i(v3,"com.raquo.airstream.core.AirstreamError$",{b4:1,dM:1,dN:1}),A4;function c3(){if(!A4)A4=new v3;return A4}function N6(w,q,F){return new q5(new C((K)=>{(aK(),new n4(q,null,null)).Y(new C(((Z)=>(Q)=>{J6().cr(Z,Q,void 0)})(K)))}),G6())}function K2(w,q,F){this.dv=null,this.dw=null,this.du=null,this.dv=w,this.dw=q,this.du=F}z=K2.prototype=new M;z.constructor=K2;function PQ(){}PQ.prototype=z;z.aO=function(w){this.du.fJ(w,this.dv,this.dw)};var NM=new Y().i(K2,"com.raquo.laminar.modifiers.KeySetter",{c2:1,X:1,c8:1});function w1(w,q){if(this.bX=null,this.dz=null,this.dA=null,this.dz=q,Lq(this),w===null)throw I0(new q0,"Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");if(!O0().gA(w,document))throw I0(new q0,"Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");this.dA=w,this.gH()}z=w1.prototype=new M;z.constructor=w1;function jQ(){}jQ.prototype=z;z.bI=function(){return this.bX};z.eO=function(w){this.bX=w};z.gH=function(){return this.bX.ew(),J6().cr(this,this.dz,void 0)};z.cD=function(){return this.dA};var fM=new Y().i(w1,"com.raquo.laminar.nodes.RootNode",{cd:1,ac:1,ab:1});function o3(w,q,F){this.bY=null,this.dB=null,this.dB=w,Nq(this,w,!1)}z=o3.prototype=new fq;z.constructor=o3;function _Q(){}_Q.prototype=z;z.cA=function(){return this.dB};var VM=new Y().i(o3,"com.raquo.laminar.tags.CustomHtmlTag",{ce:1,ad:1,a3:1});function m3(){this.c0=null,this.bZ=null,this.c1=!1,this.c2=null,this.c3=!1,this.dJ=null,this.dK=!1,this.dH=null,this.dI=!1,this.dF=null,this.dG=!1,this.dN=null,this.dO=!1,this.dD=null,this.dE=!1,this.dL=null,this.dM=!1,this.dP=null,this.dQ=!1,AQ(this,"wa-color-picker")}z=m3.prototype=new Tq;z.constructor=m3;function xQ(){}xQ.prototype=z;z.K=function(){if(!this.dK)this.dJ=(u(),j1(new u1,"label",p0().ao)),this.dK=!0;return this.dJ};z.gv=function(){if(!this.dI)this.dH=(u(),j1(new u1,"hint",p0().ao)),this.dI=!0;return this.dH};z.bJ=function(){if(!this.dG)this.dF=z5(),this.dG=!0;return this.dF};z.cH=function(){if(!this.dO)this.dN=l3(),this.dO=!0;return this.dN};z.fX=function(){if(!this.dE)this.dD=(u(),j1(new u1,"disabled",p0().bT)),this.dE=!0;return this.dD};z.gV=function(){if(!this.dM)this.dL=(u(),j1(new u1,"opacity",p0().bT)),this.dM=!0;return this.dL};z.hl=function(){if(!this.dQ)this.dP=(u(),j1(new u1,"swatches",p0().ao)),this.dQ=!0;return this.dP};z.fA=function(){return fw};var TM=new Y().i(m3,"io.github.nguyenyou.webawesome.laminar.ColorPicker$",{cl:1,cq:1,co:1}),mw;function n(){if(!mw)mw=new m3;return mw}function i3(){this.ap=null,this.aY=null,this.dR=null,this.dS=!1,this.dT=null,this.dU=!1,this.dV=null,this.dW=!1,this.dX=null,this.dY=!1,j1(this,"format",new F5)}z=i3.prototype=new Y6;z.constructor=i3;function vQ(){}vQ.prototype=z;z.gu=function(){if(!this.dS)this.dR=z5().m("hex"),this.dS=!0;return this.dR};z.gw=function(){if(!this.dU)this.dT=z5().m("hsl"),this.dU=!0;return this.dT};z.gx=function(){if(!this.dW)this.dV=z5().m("hsv"),this.dW=!0;return this.dV};z.h6=function(){if(!this.dY)this.dX=z5().m("rgb"),this.dY=!0;return this.dX};var DM=new Y().i(i3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ColorPickerFormat$",{cm:1,a2:1,I:1}),iw;function z5(){if(!iw)iw=new i3;return iw}function r3(){this.ap=null,this.aY=null,this.dZ=null,this.e0=!1,this.e1=null,this.e2=!1,this.e3=null,this.e4=!1,j1(this,"size",new F5)}z=r3.prototype=new Y6;z.constructor=r3;function cQ(){}cQ.prototype=z;z.gD=function(){if(!this.e0)this.dZ=l3().m("large"),this.e0=!0;return this.dZ};z.gG=function(){if(!this.e2)this.e1=l3().m("medium"),this.e2=!0;return this.e1};z.hh=function(){if(!this.e4)this.e3=l3().m("small"),this.e4=!0;return this.e3};var OM=new Y().i(r3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentSize$",{cn:1,a2:1,I:1}),rw;function l3(){if(!rw)rw=new r3;return rw}function p3(){}z=p3.prototype=new Wq;z.constructor=p3;function oQ(){}oQ.prototype=z;z.g=function(w){return u().t};var WM=new Y().i(p3,"io.github.nguyenyou.webawesome.laminar.WebComponent$toL$",{cr:1,cV:1,e:1});function mQ(w){if(w.ak.Z)return w.ak.Q().cz()+"[]";else{var q=w.ak.N,F=-1+q.length|0;while(F>=0&&q.charCodeAt(F)===36)F=-1+F|0;if(F>=0)var K=F,Z=q.charCodeAt(K),Q=Z>=48&&Z<=57;else var Q=!1;if(Q){F=-1+F|0;while(!0){if(F>=0)var G=F,X=q.charCodeAt(G),J=X>=48&&X<=57;else var J=!1;if(J)F=-1+F|0;else break}while(F>=0&&q.charCodeAt(F)===36)F=-1+F|0}while(!0){if(F>=0)var k=F,H=q.charCodeAt(k),b=H!==46&&H!==36;else var b=!1;if(b)F=-1+F|0;else break}var N=1+F|0;return q.substring(N)}}function n3(w){this.c4=null,this.ak=w}z=n3.prototype=new M;z.constructor=n3;function iQ(){}iQ.prototype=z;z.u=function(){return(this.ak.Y?"interface ":this.ak.X?"":"class ")+this.ak.N};z.cz=function(){if(this.c4===null)this.c4=mQ(this);return this.c4};var AM=new Y().i(n3,"java.lang.Class",{cx:1,a:1,M:1});function I0(w,q){return e0(w,q,null,!0,!0),w}class q0 extends _1{}var IM=new Y().i(q0,"java.lang.Exception",{L:1,u:1,a:1});function s3(){this.fs=null,I4=this,this.fs=wG()}z=s3.prototype=new Iq;z.constructor=s3;function rQ(){}rQ.prototype=z;var uM=new Y().i(s3,"scala.Predef$",{d4:1,cY:1,cZ:1}),I4;function lQ(){if(!I4)I4=new s3;return I4}function pQ(w,q){return w.bC=q,w}function dq(){this.bC=null}z=dq.prototype=new M;z.constructor=dq;function hq(){}hq.prototype=z;z.cx=function(w){return this.bC.cw(w,bF())};z.cs=function(w){return this.bC.cw(w,bF())};function nQ(w,q){return new J5(w).fQ(q)}function sQ(w,q,F){var K=q>0?q:0,Z=F<0?-1:F<=K?0:F-K|0;return Z===0?r().w:new X5(w,K,Z)}function aQ(w,q){var F=q.n();while(w.s()&&F.s())if(!A0().J(w.f(),F.f()))return!1;return w.s()===F.s()}function a3(){this.w=null,u4=this,this.w=new J8}z=a3.prototype=new M;z.constructor=a3;function tQ(){}tQ.prototype=z;var EM=new Y().i(a3,"scala.collection.Iterator$",{dn:1,Z:1,a:1}),u4;function r(){if(!u4)u4=new a3;return u4}function t3(){}z=t3.prototype=new M;z.constructor=t3;function eQ(){}eQ.prototype=z;var yM=new Y().i(t3,"scala.collection.immutable.Map$",{dC:1,dt:1,a:1}),lw;function wG(){if(!lw)lw=new t3;return lw}function e3(w){this.en=null,this.en=w}z=e3.prototype=new M6;z.constructor=e3;function qG(){}qG.prototype=z;z.aC=function(){return(0,this.en)()};var $M=new Y().i(e3,"scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855",{dX:1,b0:1,aq:1});function y(w){this.eo=null,this.eo=w}z=y.prototype=new L6;z.constructor=y;function FG(){}FG.prototype=z;z.g=function(w){return(0,this.eo)(w)};var SM=new Y().i(y,"scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28",{dY:1,b1:1,e:1}),zG=new Y().i(0,"scala.runtime.Nothing$",{e4:1,u:1,a:1});function w8(){}z=w8.prototype=new M;z.constructor=w8;function KG(){}KG.prototype=z;z.gj=function(w){return(q)=>w.g(q)};var RM=new Y().i(w8,"scala.scalajs.js.Any$",{e9:1,ea:1,eb:1}),pw;function ZG(){if(!pw)pw=new w8;return pw}function Cq(){}z=Cq.prototype=new M6;z.constructor=Cq;function Pq(){}Pq.prototype=z;function jq(){}z=jq.prototype=new L6;z.constructor=jq;function _q(){}_q.prototype=z;function xq(){}z=xq.prototype=new $q;z.constructor=xq;function vq(){}vq.prototype=z;function cq(){}z=cq.prototype=new Rq;z.constructor=cq;function oq(){}oq.prototype=z;function q8(w,q,F,K){if(this.cK=null,K===null)throw new x1;this.cK=void 0}z=q8.prototype=new M;z.constructor=q8;function QG(){}QG.prototype=z;z.u=function(){return IK(this)};var gM=new Y().i(q8,"com.raquo.airstream.core.Observer$$anon$8",{b8:1,b9:1,b5:1,b6:1});function F8(w){if(this.cW=null,this.cX=!1,this.ff=null,w===null)throw new x1;ZZ(this)}z=F8.prototype=new M;z.constructor=F8;function GG(){}GG.prototype=z;z.hk=function(){if(!this.cX)this.cW=new g3("svg",!1),this.cX=!0;return this.cW};var dM=new Y().i(F8,"com.raquo.laminar.api.Laminar$svg$",{bs:1,bV:1,bB:1,bD:1});function z8(){this.t=null,E4=this,this.t=new W8}z=z8.prototype=new M;z.constructor=z8;function JG(){}JG.prototype=z;var hM=new Y().i(z8,"com.raquo.laminar.api.package$",{bv:1,a9:1,aa:1,a8:1}),E4;function u(){if(!E4)E4=new z8;return E4}function K5(w,q,F){return w.aq=q,w.ar=F,w}function mq(){this.aq=null,this.ar=null}z=mq.prototype=new T2;z.constructor=mq;function D2(){}D2.prototype=z;z.m=function(w){return new K2(this,a9(w),new Z2((q,F,K)=>{O0().fd(q,F,K)}))};function iq(){}z=iq.prototype=new M;z.constructor=iq;function f6(){}f6.prototype=z;function XG(w,q){return w===q}function kG(w){return w?1231:1237}var YG=new Y().i(0,"java.lang.Boolean",{cv:1,a:1,Q:1,M:1},(w)=>typeof w==="boolean");function HG(w){return w}function UG(w,q){return q instanceof a0&&w===q.c}var bG=new Y().i(0,"java.lang.Character",{aj:1,a:1,Q:1,M:1},(w)=>w instanceof a0);class E1 extends q0{}function K8(){this.q=null,this.q=""}z=K8.prototype=new M;z.constructor=K8;function BG(){}BG.prototype=z;z.fH=function(w){var q=yQ().gJ(w,0,w.a.length);return this.q=""+this.q+q,this};z.u=function(){return this.q};z.j=function(){return this.q.length};z.eL=function(w){return this.q.charCodeAt(w)};var CM=new Y().i(K8,"java.lang.StringBuilder",{cK:1,a4:1,ah:1,a:1});function Z8(){}z=Z8.prototype=new M;z.constructor=Z8;function MG(){}MG.prototype=z;z.u=function(){return"<function1>"};z.fK=function(w){throw new y1(w)};z.g=function(w){this.fK(w)};var PM=new Y().i(Z8,"scala.PartialFunction$$anon$1",{d3:1,g:1,e:1,a:1});function rq(){}z=rq.prototype=new M;z.constructor=rq;function L1(){}L1.prototype=z;z.n=function(){return this};z.bH=function(w){return this.bp(w,-1)};z.bp=function(w,q){return sQ(this,w,q)};z.u=function(){return"<iterator>"};z.ba=function(w,q,F,K){return bq(this,w,q,F,K)};z.z=function(){return-1};function LG(w,q){return w.bD=q,w}function lq(){this.bD=null}z=lq.prototype=new M;z.constructor=lq;function pq(){}pq.prototype=z;z.ey=function(w){return this.bD.cs(w)};z.f1=function(w){return this.bD.cx(w)};z.cx=function(w){return this.f1(w)};z.cs=function(w){return this.ey(w)};function NG(w){return w.aS(0)===0}function V6(w,q){var F=w.z();if(F!==-1)var K=q.z(),Z=K!==-1&&F!==K;else var Z=!1;if(!Z)return aQ(w.n(),q);else return!1}function P1(w){this.er=null,this.er=w}z=P1.prototype=new Pq;z.constructor=P1;function fG(){}fG.prototype=z;z.aC=function(){return(0,this.er)()};var jM=new Y().i(P1,"scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1",{eg:1,ef:1,b0:1,aq:1});function C(w){this.es=null,this.es=w}z=C.prototype=new _q;z.constructor=C;function VG(){}VG.prototype=z;z.g=function(w){return(0,this.es)(w)};var _M=new Y().i(C,"scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab",{ei:1,eh:1,b1:1,e:1});function Z5(w){this.fv=null,this.fv=w}z=Z5.prototype=new vq;z.constructor=Z5;function TG(){}TG.prototype=z;var xM=new Y().i(Z5,"scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2",{ek:1,ej:1,dZ:1,cW:1});function Z2(w){this.et=null,this.et=w}z=Z2.prototype=new oq;z.constructor=Z2;function DG(){}DG.prototype=z;z.fJ=function(w,q,F){return(0,this.et)(w,q,F)};var vM=new Y().i(Z2,"scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491",{em:1,el:1,e0:1,cX:1});function OG(w){w.bW=new i4(new P1(()=>{w.aI.ew()}),new P1(()=>{w.aI.fT()}))}function WG(w,q){if(nq(w,w.by,q))sq(w,q)}function AG(w,q){var F=w.by;if(w.by=q,!nq(w,F,q))sq(w,q)}function nq(w,q,F){var K=!q.i()&&!q.y().bI().E.i(),Z=!F.i()&&!F.y().bI().E.i();return K&&!Z}function sq(w,q){IG(w,q.i()?b0():new s0(q.y().bI()))}function IG(w,q){if(q.i())w.bW.fP();else{var F=q.y();w.bW.hc(F)}}function uG(w,q){return w}function aq(){}z=aq.prototype=new f6;z.constructor=aq;function tq(){}tq.prototype=z;class O2 extends E1{constructor(w){super();e0(this,w,null,!0,!0)}}var cM=new Y().i(O2,"java.lang.ArithmeticException",{cu:1,R:1,L:1,u:1,a:1});var EG=new Y().i(0,"java.lang.Byte",{cw:1,S:1,a:1,Q:1,M:1},(w)=>VK(w));class T6 extends E1{constructor(w){super();e0(this,w,null,!0,!0)}}var oM=new Y().i(T6,"java.lang.IllegalArgumentException",{cA:1,R:1,L:1,u:1,a:1});function d4(w,q){return e0(w,q,null,!0,!0),w}class z2 extends E1{}var mM=new Y().i(z2,"java.lang.IndexOutOfBoundsException",{al:1,R:1,L:1,u:1,a:1});function Q8(){}z=Q8.prototype=new f6;z.constructor=Q8;function yG(){}yG.prototype=z;var iM=new Y().i(Q8,"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{cD:1,ag:1,ae:1,ai:1,af:1});class x1 extends E1{constructor(){super();e0(this,null,null,!0,!0)}}var rM=new Y().i(x1,"java.lang.NullPointerException",{cE:1,R:1,L:1,u:1,a:1});var $G=new Y().i(0,"java.lang.Short",{cF:1,S:1,a:1,Q:1,M:1},(w)=>TK(w));class D6 extends E1{constructor(w){super();e0(this,w,null,!0,!0)}}var lM=new Y().i(D6,"java.lang.UnsupportedOperationException",{cN:1,R:1,L:1,u:1,a:1});class Q5 extends E1{constructor(w){super();e0(this,w,null,!0,!0)}}var pM=new Y().i(Q5,"java.util.NoSuchElementException",{cR:1,R:1,L:1,u:1,a:1});function SG(w){if(!w.c9)w.ca=w.bB===null?"null":gG(w),w.c9=!0;return w.ca}function RG(w){return!w.c9?SG(w):w.ca}function l9(w){var q=w.bB;return"of class "+S4(q)}function gG(w){try{return w.bB+" ("+l9(w)+")"}catch(q){return"an instance "+l9(w)}}class y1 extends E1{constructor(w){super();this.ca=null,this.bB=null,this.c9=!1,this.bB=w,e0(this,null,null,!0,!0)}bl(){return RG(this)}}var nM=new Y().i(y1,"scala.MatchError",{d0:1,R:1,L:1,u:1,a:1});function eq(){}z=eq.prototype=new M;z.constructor=eq;function O6(){}O6.prototype=z;z.i=function(){return this===b0()};z.z=function(){return this.i()?0:1};z.n=function(){return this.i()?r().w:new X8(this.y())};function G8(w){this.b2=0,this.eg=0,this.ef=null,this.ef=w,this.b2=0,this.eg=w.ah()}z=G8.prototype=new L1;z.constructor=G8;function dG(){}dG.prototype=z;z.s=function(){return this.b2<this.eg};z.f=function(){var w=this.ef.ai(this.b2);return this.b2=1+this.b2|0,w};var sM=new Y().i(G8,"scala.Product$$anon$1",{d5:1,r:1,s:1,b:1,c:1});function G5(w){this.bC=null,pQ(this,w)}z=G5.prototype=new hq;z.constructor=G5;function hG(){}hG.prototype=z;var aM=new Y().i(G5,"scala.collection.ClassTagSeqFactory$AnySeqDelegate",{dj:1,di:1,Z:1,a:1,a5:1});function CG(w){return N3(w,w.aQ()+"(",", ",")")}function J8(){}z=J8.prototype=new L1;z.constructor=J8;function PG(){}PG.prototype=z;z.s=function(){return!1};z.gL=function(){throw new Q5("next on empty iterator")};z.z=function(){return 0};z.bp=function(w,q){return this};z.f=function(){this.gL()};var tM=new Y().i(J8,"scala.collection.Iterator$$anon$19",{dp:1,r:1,s:1,b:1,c:1});function X8(w){this.b4=!1,this.ek=null,this.ek=w,this.b4=!1}z=X8.prototype=new L1;z.constructor=X8;function jG(){}jG.prototype=z;z.s=function(){return!this.b4};z.f=function(){if(this.b4)return r().w.f();else return this.b4=!0,this.ek};z.bp=function(w,q){return this.b4||w>0||q===0?r().w:this};var eM=new Y().i(X8,"scala.collection.Iterator$$anon$20",{dq:1,r:1,s:1,b:1,c:1});function _G(w){while(!0){if(w.B instanceof J5){var q=w.B;if(w.B=q.B,w.a5=q.a5,q.N!==null){if(w.M===null)w.M=q.M;q.M.b5=w.N,w.N=q.N}continue}return}}function xG(w){while(!0)if(w.N===null)return w.B=null,w.M=null,!1;else{if(w.B=w.N.gt(),w.M===w.N)w.M=w.M.b5;if(w.N=w.N.b5,_G(w),w.a5)return!0;else if(w.B!==null&&w.B.s())return w.a5=!0,!0}}function J5(w){this.B=null,this.N=null,this.M=null,this.a5=!1,this.B=w,this.N=null,this.M=null,this.a5=!1}z=J5.prototype=new L1;z.constructor=J5;function vG(){}vG.prototype=z;z.s=function(){if(this.a5)return!0;else if(this.B!==null)if(this.B.s())return this.a5=!0,!0;else return xG(this);else return!1};z.f=function(){if(this.s())return this.a5=!1,this.B.f();else return r().w.f()};z.fQ=function(w){var q=new f3(w,null);if(this.N===null)this.N=q,this.M=q;else this.M.b5=q,this.M=q;if(this.B===null)this.B=r().w;return this};var wL=new Y().i(J5,"scala.collection.Iterator$ConcatIterator",{aw:1,r:1,s:1,b:1,c:1});function wF(w){while(w.Z>0)if(w.a6.s())w.a6.f(),w.Z=-1+w.Z|0;else w.Z=0}function p9(w,q){if(w.G<0)return-1;else{var F=w.G-q|0;return F<0?0:F}}function X5(w,q,F){this.a6=null,this.G=0,this.Z=0,this.a6=w,this.G=F,this.Z=q}z=X5.prototype=new L1;z.constructor=X5;function cG(){}cG.prototype=z;z.z=function(){var w=this.a6.z();if(w<0)return-1;else{var q=w-this.Z|0,F=q<0?0:q;if(this.G<0)return F;else{var K=this.G;return K<F?K:F}}};z.s=function(){return wF(this),this.G!==0&&this.a6.s()};z.f=function(){if(wF(this),this.G>0)return this.G=-1+this.G|0,this.a6.f();else return this.G<0?this.a6.f():r().w.f()};z.bp=function(w,q){var F=w>0?w:0;if(q<0)var K=p9(this,F);else if(q<=F)var K=0;else if(this.G<0)var K=q-F|0;else var Z=p9(this,F),Q=q-F|0,K=Z<Q?Z:Q;var G=this.Z+F|0;if(K===0)return r().w;else if(G<0)return this.Z=2147483647,this.G=0,nQ(this,new e3(()=>new X5(this.a6,-2147483647+G|0,K)));else return this.Z=G,this.G=K,this};var qL=new Y().i(X5,"scala.collection.Iterator$SliceIterator",{ds:1,r:1,s:1,b:1,c:1});function qF(w,q){if(q<0)throw d4(new z2,""+q);var F=w.g0(q);if(F.i())throw d4(new z2,""+q);return F.a0()}function oG(w,q){return CJ(q)?mG(w,w,q):V6(w,q)}function mG(w,q,F){while(!0)if(q===F)return!0;else if(!q.i()&&!F.i()&&A0().J(q.a0(),F.a0())){var K=q.W(),Z=F.W();q=K,F=Z}else return q.i()&&F.i()}function k8(w){this.b7=null,this.b7=w}z=k8.prototype=new L1;z.constructor=k8;function iG(){}iG.prototype=z;z.s=function(){return!this.b7.i()};z.f=function(){var w=this.b7.a0();return this.b7=this.b7.W(),w};var FL=new Y().i(k8,"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{dx:1,r:1,s:1,b:1,c:1});function Y8(){this.bD=null,LG(this,nG())}z=Y8.prototype=new pq;z.constructor=Y8;function rG(){}rG.prototype=z;var zL=new Y().i(Y8,"scala.collection.mutable.Buffer$",{dH:1,du:1,a5:1,Z:1,a:1}),nw;function FF(){if(!nw)nw=new Y8;return nw}function v1(w){this.b9=0,this.ep=0,this.eq=null,this.eq=w,this.b9=0,this.ep=w.ah()}z=v1.prototype=new L1;z.constructor=v1;function lG(){}lG.prototype=z;z.s=function(){return this.b9<this.ep};z.f=function(){var w=this.eq.ai(this.b9);return this.b9=1+this.b9|0,w};var KL=new Y().i(v1,"scala.runtime.ScalaRunTime$$anon$1",{e7:1,r:1,s:1,b:1,c:1});function H8(){}z=H8.prototype=new M;z.constructor=H8;function pG(){}pG.prototype=z;z.cs=function(w){return this.f2(w)};z.f2=function(w){return B6(LX(new $8),w).fb()};z.cx=function(w){return this.f2(w)};var ZL=new Y().i(H8,"scala.scalajs.js.WrappedArray$",{ed:1,dy:1,a5:1,Z:1,a:1}),sw;function nG(){if(!sw)sw=new H8;return sw}class U8 extends gq{constructor(w,q){super();this.aE=null,this.aD=0,this.aE=w,this.aD=q,e0(this,"Transaction depth exceeded maxDepth = "+q+": Execution of "+w+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aU(){return new G8(this)}p(){var w=-889275714;return w=O().b(w,P0("TransactionDepthExceeded")),w=O().b(w,O().x(this.aE)),w=O().b(w,this.aD),O().l(w,2)}h(w){if(this===w)return!0;else if(w instanceof U8)if(this.aD===w.aD){var q=this.aE,F=w.aE;return q===F}else return!1;else return!1}ah(){return 2}aj(){return"TransactionDepthExceeded"}ai(w){if(w===0)return this.aE;if(w===1)return this.aD;throw d4(new z2,""+w)}u(){return"TransactionDepthExceeded: "+this.aE+"; maxDepth: "+this.aD}}var QL=new Y().i(U8,"com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded",{a7:1,b3:1,u:1,a:1,d:1,T:1});function b8(w){this.aq=null,this.ar=null,this.di=null,this.dj=!1,K5(this,w,c1())}z=b8.prototype=new D2;z.constructor=b8;function sG(){}sG.prototype=z;z.eM=function(){if(!this.dj)this.di=this.m("column"),this.dj=!0;return this.di};var GL=new Y().i(b8,"com.raquo.laminar.defs.styles.StyleProps$$anon$30",{bJ:1,W:1,I:1,U:1,V:1,bN:1});function B8(w){this.aq=null,this.ar=null,this.dk=null,this.dl=!1,K5(this,w,c1())}z=B8.prototype=new D2;z.constructor=B8;function aG(){}aG.prototype=z;z.fe=function(){if(!this.dl)this.dk=this.m("wrap"),this.dl=!0;return this.dk};var JL=new Y().i(B8,"com.raquo.laminar.defs.styles.StyleProps$$anon$31",{bK:1,W:1,I:1,U:1,V:1,bP:1});function M8(w,q){this.by=null,this.aI=null,this.bW=null,this.dy=null,this.Q=null,this.dy=w,this.Q=q,this.by=b0(),Lq(this),OG(this)}z=M8.prototype=new M;z.constructor=M8;function tG(){}tG.prototype=z;z.aO=function(w){J6().cr(w,this,void 0)};z.bI=function(){return this.aI};z.eO=function(w){this.aI=w};z.u=function(){return"ReactiveHtmlElement("+(this.Q!==null?this.Q.outerHTML:"tag="+this.dy.cA())+")"};z.cD=function(){return this.Q};var h4=new Y().i(M8,"com.raquo.laminar.nodes.ReactiveHtmlElement",{cc:1,ac:1,X:1,c9:1,ab:1,cb:1});function eG(w,q){return Object.is(w,q)}function zF(w){return Qq().cB(w)}var wJ=new Y().i(0,"java.lang.Double",{ak:1,S:1,a:1,Q:1,M:1,Y:1},(w)=>typeof w==="number");var qJ=new Y().i(0,"java.lang.Float",{cy:1,S:1,a:1,Q:1,M:1,Y:1},(w)=>z6(w));var FJ=new Y().i(0,"java.lang.Integer",{cB:1,S:1,a:1,Q:1,M:1,Y:1},(w)=>F6(w));function zJ(w,q){return q instanceof A&&(w.c===q.c&&w.d===q.d)}function KJ(w){return w.c^w.d}var ZJ=new Y().i(0,"java.lang.Long",{am:1,S:1,a:1,Q:1,M:1,Y:1},(w)=>w instanceof A);function P0(w){var q=0,F=1,K=-1+w.length|0;while(K>=0)q=q+Math.imul(w.charCodeAt(K),F)|0,F=Math.imul(31,F),K=-1+K|0;return q}function QJ(w,q){return w===q}var KF=new Y().i(0,"java.lang.String",{cI:1,a:1,Q:1,a4:1,M:1,Y:1},(w)=>typeof w==="string");class W6 extends z2{constructor(){super();e0(this,null,null,!0,!0)}}var XL=new Y().i(W6,"java.lang.StringIndexOutOfBoundsException",{cL:1,al:1,R:1,L:1,u:1,a:1});function L8(){}z=L8.prototype=new O6;z.constructor=L8;function GJ(){}GJ.prototype=z;z.gk=function(){throw new Q5("None.get")};z.aj=function(){return"None"};z.ah=function(){return 0};z.ai=function(w){return O().bm(w)};z.aU=function(){return new v1(this)};z.p=function(){return 2433880};z.u=function(){return"None"};z.y=function(){this.gk()};var kL=new Y().i(L8,"scala.None$",{d1:1,ar:1,b:1,T:1,d:1,a:1}),aw;function b0(){if(!aw)aw=new L8;return aw}function s0(w){this.b3=null,this.b3=w}z=s0.prototype=new O6;z.constructor=s0;function JJ(){}JJ.prototype=z;z.y=function(){return this.b3};z.aj=function(){return"Some"};z.ah=function(){return 1};z.ai=function(w){return w===0?this.b3:O().bm(w)};z.aU=function(){return new v1(this)};z.p=function(){return o().fa(this,-889275714,!1)};z.u=function(){return T().fC(this)};z.h=function(w){return this===w||w instanceof s0&&A0().J(this.b3,w.b3)};var YL=new Y().i(s0,"scala.Some",{as:1,ar:1,b:1,T:1,d:1,a:1});function ZF(){}z=ZF.prototype=new M;z.constructor=ZF;function A6(){}A6.prototype=z;z.aQ=function(){return this.aV()};z.Y=function(w){qQ(this,w)};z.ba=function(w,q,F,K){return bq(this,w,q,F,K)};z.z=function(){return-1};function q1(w,q){return w.F=q,w.e=0,w.A=f2().aR(w.F),w}function k5(){this.F=null,this.e=0,this.A=0}z=k5.prototype=new L1;z.constructor=k5;function N1(){}N1.prototype=z;z.z=function(){return this.A-this.e|0};z.s=function(){return this.e<this.A};z.f=function(){if(this.e>=f2().aR(this.F))r().w.f();var w=T().aP(this.F,this.e);return this.e=1+this.e|0,w};z.bH=function(w){if(w>0){var q=this.e+w|0;if(q<0)var F=this.A;else var K=this.A,F=K<q?K:q;this.e=F}return this};var HL=new Y().i(k5,"scala.collection.ArrayOps$ArrayIterator",{N:1,r:1,s:1,b:1,c:1,a:1});function n9(w,q){return q<0?0:q>w.R?w.R:q}function W2(w){this.ej=null,this.a4=0,this.R=0,this.ej=w,this.a4=0,this.R=w.j()}z=W2.prototype=new L1;z.constructor=W2;function XJ(){}XJ.prototype=z;z.z=function(){return this.R};z.s=function(){return this.R>0};z.f=function(){if(this.R>0){var w=this.ej.o(this.a4);return this.a4=1+this.a4|0,this.R=-1+this.R|0,w}else return r().w.f()};z.bH=function(w){if(w>0){this.a4=this.a4+w|0;var q=this.R-w|0;this.R=q<0?0:q}return this};z.bp=function(w,q){var F=n9(this,w),K=n9(this,q),Z=K-F|0;return this.R=Z<0?0:Z,this.a4=this.a4+F|0,this};var UL=new Y().i(W2,"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{dm:1,r:1,s:1,b:1,c:1,a:1});function kJ(w){if(!w.cl)w.cm=new Q2(new u0(0)),w.cl=!0;return w.cm}function YJ(w){return!w.cl?kJ(w):w.cm}function N8(){this.cm=null,this.ft=null,this.cl=!1,y4=this,this.ft=new G5(this)}z=N8.prototype=new M;z.constructor=N8;function HJ(){}HJ.prototype=z;z.gh=function(w,q){return w instanceof E6?w:this.hr(C3().f0(w,q))};z.hr=function(w){if(w===null)return null;else if(w instanceof u0)return new Q2(w);else if(w instanceof t0)return new A2(w);else if(w instanceof M1)return new W5(w);else if(w instanceof b1)return new I5(w);else if(w instanceof B1)return new A5(w);else if(w instanceof Y1)return new O5(w);else if(w instanceof H1)return new D5(w);else if(w instanceof U1)return new u5(w);else if(w instanceof k1)return new T5(w);else if(Jq(w,1))return new E5(w);else throw new y1(w)};z.cw=function(w,q){return this.gh(w,q)};var bL=new Y().i(N8,"scala.collection.immutable.ArraySeq$",{dB:1,ay:1,au:1,at:1,av:1,a:1}),y4;function UJ(){if(!y4)y4=new N8;return y4}function f8(){this.fu=null,this.em=null,$4=this,this.fu=new G5(this),this.em=new G2(new u0(0))}z=f8.prototype=new M;z.constructor=f8;function bJ(){}bJ.prototype=z;z.gi=function(w,q){return this.gF(C3().f0(w,q))};z.gF=function(w){if(w===null)return null;else if(w instanceof u0)return new G2(w);else if(w instanceof t0)return new g5(w);else if(w instanceof M1)return new S5(w);else if(w instanceof b1)return new d5(w);else if(w instanceof B1)return new R5(w);else if(w instanceof Y1)return new I2(w);else if(w instanceof H1)return new $5(w);else if(w instanceof U1)return new h5(w);else if(w instanceof k1)return new y5(w);else if(Jq(w,1))return new C5(w);else throw new y1(w)};z.cw=function(w,q){return this.gi(w,q)};var BL=new Y().i(f8,"scala.collection.mutable.ArraySeq$",{dF:1,ay:1,au:1,at:1,av:1,a:1}),$4;function BJ(){if(!$4)$4=new f8;return $4}function V8(w){this.aq=null,this.ar=null,this.de=null,this.df=!1,K5(this,w,c1())}z=V8.prototype=new D2;z.constructor=V8;function MJ(){}MJ.prototype=z;z.cv=function(){if(!this.df)this.de=this.m("flex"),this.df=!0;return this.de};var ML=new Y().i(V8,"com.raquo.laminar.defs.styles.StyleProps$$anon$28",{bH:1,W:1,I:1,U:1,V:1,bQ:1,bM:1});function T8(w){this.aq=null,this.ar=null,this.dg=null,this.dh=!1,K5(this,w,c1())}z=T8.prototype=new D2;z.constructor=T8;function LJ(){}LJ.prototype=z;z.fO=function(){if(!this.dh)this.dg=this.m("center"),this.dh=!0;return this.dg};var LL=new Y().i(T8,"com.raquo.laminar.defs.styles.StyleProps$$anon$3",{bI:1,W:1,I:1,U:1,V:1,bR:1,bO:1});function D8(w){this.aq=null,this.ar=null,this.dm=null,this.dn=!1,K5(this,w,c1())}z=D8.prototype=new D2;z.constructor=D8;function NJ(){}NJ.prototype=z;z.cC=function(){if(!this.dn)this.dm=MQ(this),this.dn=!0;return this.dm};var NL=new Y().i(D8,"com.raquo.laminar.defs.styles.StyleProps$$anon$5",{bL:1,W:1,I:1,U:1,V:1,bS:1,bT:1});function fJ(w,q,F,K){return uG(w,q),w}function QF(){}z=QF.prototype=new tq;z.constructor=QF;function GF(){}GF.prototype=z;function Y5(w){this.F=null,this.e=0,this.A=0,this.cb=null,this.cb=w,q1(this,w)}z=Y5.prototype=new N1;z.constructor=Y5;function VJ(){}VJ.prototype=z;z.gM=function(){if(this.e>=this.cb.a.length)r().w.f();var w=this.cb.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gM()};var fL=new Y().i(Y5,"scala.collection.ArrayOps$ArrayIterator$mcB$sp",{d9:1,N:1,r:1,s:1,b:1,c:1,a:1});function H5(w){this.F=null,this.e=0,this.A=0,this.cc=null,this.cc=w,q1(this,w)}z=H5.prototype=new N1;z.constructor=H5;function TJ(){}TJ.prototype=z;z.gN=function(){if(this.e>=this.cc.a.length)r().w.f();var w=this.cc.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return X1(this.gN())};var VL=new Y().i(H5,"scala.collection.ArrayOps$ArrayIterator$mcC$sp",{da:1,N:1,r:1,s:1,b:1,c:1,a:1});function U5(w){this.F=null,this.e=0,this.A=0,this.cd=null,this.cd=w,q1(this,w)}z=U5.prototype=new N1;z.constructor=U5;function DJ(){}DJ.prototype=z;z.gO=function(){if(this.e>=this.cd.a.length)r().w.f();var w=this.cd.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gO()};var TL=new Y().i(U5,"scala.collection.ArrayOps$ArrayIterator$mcD$sp",{db:1,N:1,r:1,s:1,b:1,c:1,a:1});function b5(w){this.F=null,this.e=0,this.A=0,this.ce=null,this.ce=w,q1(this,w)}z=b5.prototype=new N1;z.constructor=b5;function OJ(){}OJ.prototype=z;z.gP=function(){if(this.e>=this.ce.a.length)r().w.f();var w=this.ce.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gP()};var DL=new Y().i(b5,"scala.collection.ArrayOps$ArrayIterator$mcF$sp",{dc:1,N:1,r:1,s:1,b:1,c:1,a:1});function B5(w){this.F=null,this.e=0,this.A=0,this.cf=null,this.cf=w,q1(this,w)}z=B5.prototype=new N1;z.constructor=B5;function WJ(){}WJ.prototype=z;z.gQ=function(){if(this.e>=this.cf.a.length)r().w.f();var w=this.cf.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gQ()};var OL=new Y().i(B5,"scala.collection.ArrayOps$ArrayIterator$mcI$sp",{dd:1,N:1,r:1,s:1,b:1,c:1,a:1});function M5(w){this.F=null,this.e=0,this.A=0,this.cg=null,this.cg=w,q1(this,w)}z=M5.prototype=new N1;z.constructor=M5;function AJ(){}AJ.prototype=z;z.gR=function(){if(this.e>=this.cg.a.length)r().w.f();var w=this.cg.a[this.e],q=w.c,F=w.d;return this.e=1+this.e|0,new A(q,F)};z.f=function(){return this.gR()};var WL=new Y().i(M5,"scala.collection.ArrayOps$ArrayIterator$mcJ$sp",{de:1,N:1,r:1,s:1,b:1,c:1,a:1});function L5(w){this.F=null,this.e=0,this.A=0,this.ch=null,this.ch=w,q1(this,w)}z=L5.prototype=new N1;z.constructor=L5;function IJ(){}IJ.prototype=z;z.gS=function(){if(this.e>=this.ch.a.length)r().w.f();var w=this.ch.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gS()};var AL=new Y().i(L5,"scala.collection.ArrayOps$ArrayIterator$mcS$sp",{df:1,N:1,r:1,s:1,b:1,c:1,a:1});function N5(w){this.F=null,this.e=0,this.A=0,this.ei=null,this.ei=w,q1(this,w)}z=N5.prototype=new N1;z.constructor=N5;function uJ(){}uJ.prototype=z;z.gT=function(){if(this.e>=this.ei.a.length)r().w.f();this.e=1+this.e|0};z.f=function(){this.gT()};var IL=new Y().i(N5,"scala.collection.ArrayOps$ArrayIterator$mcV$sp",{dg:1,N:1,r:1,s:1,b:1,c:1,a:1});function f5(w){this.F=null,this.e=0,this.A=0,this.ci=null,this.ci=w,q1(this,w)}z=f5.prototype=new N1;z.constructor=f5;function EJ(){}EJ.prototype=z;z.gU=function(){if(this.e>=this.ci.a.length)r().w.f();var w=this.ci.a[this.e];return this.e=1+this.e|0,w};z.f=function(){return this.gU()};var uL=new Y().i(f5,"scala.collection.ArrayOps$ArrayIterator$mcZ$sp",{dh:1,N:1,r:1,s:1,b:1,c:1,a:1});function yJ(w){return w.aQ()+"(<not computed>)"}function JF(){}z=JF.prototype=new M;z.constructor=JF;function XF(){}XF.prototype=z;class U0 extends E1{constructor(w){super();this.S=null,this.S=w,e0(this,null,null,!0,!0)}bl(){return a9(this.S)}aj(){return"JavaScriptException"}ah(){return 1}ai(w){return w===0?this.S:O().bm(w)}aU(){return new v1(this)}p(){return o().fa(this,-889275714,!1)}h(w){return this===w||w instanceof U0&&A0().J(this.S,w.S)}}var EL=new Y().i(U0,"scala.scalajs.js.JavaScriptException",{b2:1,R:1,L:1,u:1,a:1,T:1,d:1});function $J(w,q){if(typeof console<"u")if(w.e6&&!!console.error)console.error(q);else console.log(q)}function a2(w){this.e6=!1,this.b0=null,this.e6=w,fJ(this,new Q8,!1,null),this.b0=""}z=a2.prototype=new GF;z.constructor=a2;function SJ(){}SJ.prototype=z;z.gB=function(w){var q=w;while(q!==""){var F=q,K=F.indexOf(`
`)|0;if(K<0)this.b0=""+this.b0+q,q="";else{var Z=this.b0,Q=q;$J(this,""+Z+Q.substring(0,K)),this.b0="";var G=q,X=1+K|0;q=G.substring(X)}}};var yL=new Y().i(a2,"java.lang.JSConsoleBasedPrintStream",{cC:1,ct:1,cs:1,ag:1,ae:1,ai:1,af:1,ah:1});function RJ(w,q,F){while(!0)if(q<=0||F.i())return F;else{var K=-1+q|0,Z=F.W();q=K,F=Z}}function kF(){this.cn=null}z=kF.prototype=new XF;z.constructor=kF;function YF(){}YF.prototype=z;z.u=function(){return this.cn};z.h=function(w){return this===w};z.p=function(){return q6(this)};function HF(){}z=HF.prototype=new A6;z.constructor=HF;function UF(){}UF.prototype=z;z.u=function(){return yJ(this)};function O8(){this.cn=null,this.cn="Any"}z=O8.prototype=new YF;z.constructor=O8;function gJ(){}gJ.prototype=z;z.h7=function(){return n0.l()};z.gK=function(w){return new u0(w)};var $L=new Y().i(O8,"scala.reflect.ManifestFactory$AnyManifest$",{dT:1,dV:1,dU:1,dS:1,dR:1,dQ:1,dW:1,a:1,d:1}),tw;function bF(){if(!tw)tw=new O8;return tw}function E0(w,q){if(w===q)return!0;else{if(dJ(q)){if(q.eK(w))return w.cF(q)}return!1}}function dJ(w){return!!(w&&w.$classData&&w.$classData.n.f)}function BF(){}z=BF.prototype=new A6;z.constructor=BF;function I6(){}I6.prototype=z;z.eK=function(w){return!0};z.h=function(w){return E0(this,w)};z.p=function(){return o().h8(this)};z.u=function(){return CG(this)};z.i=function(){return NG(this)};z.cF=function(w){return V6(this,w)};function MF(){}z=MF.prototype=new UF;z.constructor=MF;function LF(){}LF.prototype=z;function hJ(w){return!!(w&&w.$classData&&w.$classData.n.n)}function CJ(w){return!!(w&&w.$classData&&w.$classData.n.a0)}function PJ(w){}function jJ(w,q){return w.b6=q,w}function NF(){this.b6=null}z=NF.prototype=new LF;z.constructor=NF;function fF(){}fF.prototype=z;z.o=function(w){return this.b6.o(w)};z.j=function(){return this.b6.j()};z.i=function(){return this.b6.i()};function W8(){this.d2=null,this.d3=!1,this.dc=null,this.dd=!1,this.cY=null,this.cZ=!1,this.d0=null,this.d1=!1,this.d4=null,this.d5=!1,this.d6=null,this.d7=!1,this.d8=null,this.d9=!1,this.fh=null,this.fg=null,this.da=null,this.db=!1,zZ(this),wZ(this),tK(this),eK(this),PJ(this)}z=W8.prototype=new M;z.constructor=W8;function _J(){}_J.prototype=z;z.cu=function(){if(!this.d3)this.d2=Nq(new R3,"div",!1),this.d3=!0;return this.d2};z.aX=function(){if(!this.dd)this.dc=new E3("value",p0().ao),this.dd=!0;return this.dc};z.fF=function(){if(!this.cZ)this.cY=new T8("align-items"),this.cZ=!0;return this.cY};z.ct=function(){if(!this.d1)this.d0=new V8("display"),this.d1=!0;return this.d0};z.eY=function(){if(!this.d5)this.d4=new b8("flex-direction"),this.d5=!0;return this.d4};z.eZ=function(){if(!this.d7)this.d6=new B8("flex-wrap"),this.d7=!0;return this.d6};z.cy=function(){if(!this.d9)this.d8=new D8("gap"),this.d9=!0;return this.d8};z.hj=function(){if(!this.db)this.da=new F8(this),this.db=!0;return this.da};var SL=new Y().i(W8,"com.raquo.laminar.api.package$$anon$1",{bw:1,bU:1,bA:1,bF:1,bE:1,bG:1,bC:1,bu:1,bq:1,bt:1,a9:1,aa:1,a8:1,br:1});function V5(w){this.b6=null,jJ(this,w)}z=V5.prototype=new fF;z.constructor=V5;function xJ(){}xJ.prototype=z;z.n=function(){return new W2(this)};z.aV=function(){return"IndexedSeqView"};z.aS=function(w){var q=this.j();return q===w?0:q<w?-1:1};z.z=function(){return this.j()};var RL=new Y().i(V5,"scala.collection.IndexedSeqView$Id",{dl:1,dw:1,d6:1,d7:1,h:1,i:1,b:1,k:1,c:1,j:1,dz:1,a:1,dv:1,l:1,dk:1,o:1});function VF(){}z=VF.prototype=new I6;z.constructor=VF;function u6(){}u6.prototype=z;function vJ(w,q){return!TF(q)||w.j()===q.j()}function cJ(w,q){if(TF(q))if(w===q)return!0;else{var F=w.j(),K=F===q.j();if(K){var Z=0,Q=w.ez(),G=q.ez(),X=Q<G?Q:G,J=F>>31,k=X>>31,H=X<<1,b=X>>>31|0|k<<1;if(J===b?(-2147483648^F)>(-2147483648^H):J>b)var N=X;else var N=F;while(Z<N&&K)K=A0().J(w.o(Z),q.o(Z)),Z=1+Z|0;if(Z<F&&K){var L=w.n().bH(Z),f=q.n().bH(Z);while(K&&L.s())K=A0().J(L.f(),f.f())}}return K}else return V6(w,q)}function TF(w){return!!(w&&w.$classData&&w.$classData.n.w)}function DF(){}z=DF.prototype=new I6;z.constructor=DF;function A8(){}A8.prototype=z;function OF(){}z=OF.prototype=new A8;z.constructor=OF;function WF(){}WF.prototype=z;z.ex=function(w){return B6(this,w)};function E6(){}z=E6.prototype=new u6;z.constructor=E6;function F1(){}F1.prototype=z;z.eK=function(w){return vJ(this,w)};z.cF=function(w){return cJ(this,w)};z.aV=function(){return"IndexedSeq"};z.aS=function(w){var q=this.j();return q===w?0:q<w?-1:1};z.z=function(){return this.j()};z.aQ=function(){return"ArraySeq"};z.ez=function(){return 2147483647};function y0(){}z=y0.prototype=new A8;z.constructor=y0;function z1(){}z1.prototype=z;z.aV=function(){return"IndexedSeq"};z.aS=function(w){var q=this.j();return q===w?0:q<w?-1:1};z.z=function(){return this.j()};z.aQ=function(){return"ArraySeq"};z.h=function(w){if(w instanceof y0){if(f2().aR(this.T())!==f2().aR(w.T()))return!1}return E0(this,w)};function T5(w){this.as=null,this.as=w}z=T5.prototype=new F1;z.constructor=T5;function oJ(){}oJ.prototype=z;z.j=function(){return this.as.a.length};z.p=function(){var w=o();return w.eJ(this.as,w.v)};z.h=function(w){return w instanceof T5?F0().eW(this.as,w.as):E0(this,w)};z.n=function(){return new f5(this.as)};z.bj=function(w){return this.as.a[w]};z.g=function(w){return this.bj(w|0)};z.o=function(w){return this.bj(w)};var gL=new Y().i(T5,"scala.collection.immutable.ArraySeq$ofBoolean",{aB:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function D5(w){this.at=null,this.at=w}z=D5.prototype=new F1;z.constructor=D5;function mJ(){}mJ.prototype=z;z.j=function(){return this.at.a.length};z.bb=function(w){return this.at.a[w]};z.p=function(){var w=o();return w.eB(this.at,w.v)};z.h=function(w){return w instanceof D5?F0().eP(this.at,w.at):E0(this,w)};z.n=function(){return new Y5(this.at)};z.g=function(w){return this.bb(w|0)};z.o=function(w){return this.bb(w)};var dL=new Y().i(D5,"scala.collection.immutable.ArraySeq$ofByte",{aC:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function O5(w){this.a7=null,this.a7=w}z=O5.prototype=new F1;z.constructor=O5;function iJ(){}iJ.prototype=z;z.j=function(){return this.a7.a.length};z.bc=function(w){return this.a7.a[w]};z.p=function(){var w=o();return w.eC(this.a7,w.v)};z.h=function(w){return w instanceof O5?F0().eQ(this.a7,w.a7):E0(this,w)};z.n=function(){return new H5(this.a7)};z.ba=function(w,q,F,K){return new I2(this.a7).ba(w,q,F,K)};z.g=function(w){return X1(this.bc(w|0))};z.o=function(w){return X1(this.bc(w))};var hL=new Y().i(O5,"scala.collection.immutable.ArraySeq$ofChar",{aD:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function W5(w){this.au=null,this.au=w}z=W5.prototype=new F1;z.constructor=W5;function rJ(){}rJ.prototype=z;z.j=function(){return this.au.a.length};z.p=function(){var w=o();return w.eD(this.au,w.v)};z.h=function(w){return w instanceof W5?F0().eR(this.au,w.au):E0(this,w)};z.n=function(){return new U5(this.au)};z.be=function(w){return this.au.a[w]};z.g=function(w){return this.be(w|0)};z.o=function(w){return this.be(w)};var CL=new Y().i(W5,"scala.collection.immutable.ArraySeq$ofDouble",{aE:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function A5(w){this.av=null,this.av=w}z=A5.prototype=new F1;z.constructor=A5;function lJ(){}lJ.prototype=z;z.j=function(){return this.av.a.length};z.p=function(){var w=o();return w.eE(this.av,w.v)};z.h=function(w){return w instanceof A5?F0().eS(this.av,w.av):E0(this,w)};z.n=function(){return new b5(this.av)};z.bf=function(w){return this.av.a[w]};z.g=function(w){return this.bf(w|0)};z.o=function(w){return this.bf(w)};var PL=new Y().i(A5,"scala.collection.immutable.ArraySeq$ofFloat",{aF:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function A2(w){this.aw=null,this.aw=w}z=A2.prototype=new F1;z.constructor=A2;function pJ(){}pJ.prototype=z;z.j=function(){return this.aw.a.length};z.p=function(){var w=o();return w.eF(this.aw,w.v)};z.h=function(w){return w instanceof A2?F0().eT(this.aw,w.aw):E0(this,w)};z.n=function(){return new B5(this.aw)};z.bg=function(w){return this.aw.a[w]};z.g=function(w){return this.bg(w|0)};z.o=function(w){return this.bg(w)};var jL=new Y().i(A2,"scala.collection.immutable.ArraySeq$ofInt",{aG:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function I5(w){this.ax=null,this.ax=w}z=I5.prototype=new F1;z.constructor=I5;function nJ(){}nJ.prototype=z;z.j=function(){return this.ax.a.length};z.p=function(){var w=o();return w.eG(this.ax,w.v)};z.h=function(w){return w instanceof I5?F0().eU(this.ax,w.ax):E0(this,w)};z.n=function(){return new M5(this.ax)};z.bh=function(w){return this.ax.a[w]};z.g=function(w){return this.bh(w|0)};z.o=function(w){return this.bh(w)};var _L=new Y().i(I5,"scala.collection.immutable.ArraySeq$ofLong",{aH:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function Q2(w){this.ay=null,this.ay=w}z=Q2.prototype=new F1;z.constructor=Q2;function sJ(){}sJ.prototype=z;z.j=function(){return this.ay.a.length};z.o=function(w){return this.ay.a[w]};z.p=function(){var w=o();return w.eA(this.ay,w.v)};z.h=function(w){return w instanceof Q2?C3().eX(this.ay,w.ay):E0(this,w)};z.n=function(){return q1(new k5,this.ay)};z.g=function(w){return this.o(w|0)};var xL=new Y().i(Q2,"scala.collection.immutable.ArraySeq$ofRef",{aI:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function u5(w){this.az=null,this.az=w}z=u5.prototype=new F1;z.constructor=u5;function aJ(){}aJ.prototype=z;z.j=function(){return this.az.a.length};z.bd=function(w){return this.az.a[w]};z.p=function(){var w=o();return w.eH(this.az,w.v)};z.h=function(w){return w instanceof u5?F0().eV(this.az,w.az):E0(this,w)};z.n=function(){return new L5(this.az)};z.g=function(w){return this.bd(w|0)};z.o=function(w){return this.bd(w)};var vL=new Y().i(u5,"scala.collection.immutable.ArraySeq$ofShort",{aJ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function E5(w){this.aN=null,this.aN=w}z=E5.prototype=new F1;z.constructor=E5;function tJ(){}tJ.prototype=z;z.j=function(){return this.aN.a.length};z.p=function(){var w=o();return w.eI(this.aN,w.v)};z.h=function(w){return w instanceof E5?this.aN.a.length===w.aN.a.length:E0(this,w)};z.n=function(){return new N5(this.aN)};z.bi=function(w){};z.g=function(w){this.bi(w|0)};z.o=function(w){this.bi(w)};var cL=new Y().i(E5,"scala.collection.immutable.ArraySeq$ofUnit",{aK:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function eJ(w,q,F,K){while(!0)if(q===K)return F.i()?0:1;else if(F.i())return-1;else{var Z=1+q|0,Q=F.W();q=Z,F=Q}}function wX(w,q,F){while(!0)if(q===F)return!0;else{var K=q.i(),Z=F.i();if(!(K||Z)&&A0().J(q.a0(),F.a0())){var Q=q.W(),G=F.W();q=Q,F=G}else return K&&Z}}function I8(){}z=I8.prototype=new u6;z.constructor=I8;function y6(){}y6.prototype=z;z.n=function(){return new k8(this)};z.aV=function(){return"LinearSeq"};z.o=function(w){return qF(this,w)};z.cF=function(w){return oG(this,w)};z.i=function(){return this===c1()};z.Y=function(w){var q=this;while(!q.i())w.g(q.a0()),q=q.W()};z.j=function(){var w=this,q=0;while(!w.i())q=1+q|0,w=w.W();return q};z.aS=function(w){return w<0?1:eJ(this,0,this,w)};z.aQ=function(){return"List"};z.h=function(w){return w instanceof I8?wX(this,this,w):E0(this,w)};z.g=function(w){return qF(this,w|0)};z.g0=function(w){return RJ(this,w,this)};function y5(w){this.a8=null,this.a8=w}z=y5.prototype=new z1;z.constructor=y5;function qX(){}qX.prototype=z;z.j=function(){return this.a8.a.length};z.p=function(){var w=o();return w.eJ(this.a8,w.v)};z.h=function(w){return w instanceof y5?F0().eW(this.a8,w.a8):y0.prototype.h.call(this,w)};z.n=function(){return new f5(this.a8)};z.bj=function(w){return this.a8.a[w]};z.g=function(w){return this.bj(w|0)};z.o=function(w){return this.bj(w)};z.T=function(){return this.a8};var oL=new Y().i(y5,"scala.collection.mutable.ArraySeq$ofBoolean",{aN:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function $5(w){this.a9=null,this.a9=w}z=$5.prototype=new z1;z.constructor=$5;function FX(){}FX.prototype=z;z.j=function(){return this.a9.a.length};z.bb=function(w){return this.a9.a[w]};z.p=function(){var w=o();return w.eB(this.a9,w.v)};z.h=function(w){return w instanceof $5?F0().eP(this.a9,w.a9):y0.prototype.h.call(this,w)};z.n=function(){return new Y5(this.a9)};z.g=function(w){return this.bb(w|0)};z.o=function(w){return this.bb(w)};z.T=function(){return this.a9};var mL=new Y().i($5,"scala.collection.mutable.ArraySeq$ofByte",{aO:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function I2(w){this.O=null,this.O=w}z=I2.prototype=new z1;z.constructor=I2;function zX(){}zX.prototype=z;z.j=function(){return this.O.a.length};z.bc=function(w){return this.O.a[w]};z.p=function(){var w=o();return w.eC(this.O,w.v)};z.h=function(w){return w instanceof I2?F0().eQ(this.O,w.O):y0.prototype.h.call(this,w)};z.n=function(){return new H5(this.O)};z.ba=function(w,q,F,K){var Z=w.H;if(q.length!==0)Z.q=""+Z.q+q;var Q=this.O.a.length;if(Q!==0)if(F==="")Z.fH(this.O);else{Z.j();var G=this.O.a[0],X=""+R4(G);Z.q=Z.q+X;var J=1;while(J<Q){Z.q=""+Z.q+F;var k=this.O.a[J],H=""+R4(k);Z.q=Z.q+H,J=1+J|0}}if(K.length!==0)Z.q=""+Z.q+K;return w};z.g=function(w){return X1(this.bc(w|0))};z.o=function(w){return X1(this.bc(w))};z.T=function(){return this.O};var iL=new Y().i(I2,"scala.collection.mutable.ArraySeq$ofChar",{aP:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function S5(w){this.aa=null,this.aa=w}z=S5.prototype=new z1;z.constructor=S5;function KX(){}KX.prototype=z;z.j=function(){return this.aa.a.length};z.p=function(){var w=o();return w.eD(this.aa,w.v)};z.h=function(w){return w instanceof S5?F0().eR(this.aa,w.aa):y0.prototype.h.call(this,w)};z.n=function(){return new U5(this.aa)};z.be=function(w){return this.aa.a[w]};z.g=function(w){return this.be(w|0)};z.o=function(w){return this.be(w)};z.T=function(){return this.aa};var rL=new Y().i(S5,"scala.collection.mutable.ArraySeq$ofDouble",{aQ:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function R5(w){this.ab=null,this.ab=w}z=R5.prototype=new z1;z.constructor=R5;function ZX(){}ZX.prototype=z;z.j=function(){return this.ab.a.length};z.p=function(){var w=o();return w.eE(this.ab,w.v)};z.h=function(w){return w instanceof R5?F0().eS(this.ab,w.ab):y0.prototype.h.call(this,w)};z.n=function(){return new b5(this.ab)};z.bf=function(w){return this.ab.a[w]};z.g=function(w){return this.bf(w|0)};z.o=function(w){return this.bf(w)};z.T=function(){return this.ab};var lL=new Y().i(R5,"scala.collection.mutable.ArraySeq$ofFloat",{aR:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function g5(w){this.ac=null,this.ac=w}z=g5.prototype=new z1;z.constructor=g5;function QX(){}QX.prototype=z;z.j=function(){return this.ac.a.length};z.p=function(){var w=o();return w.eF(this.ac,w.v)};z.h=function(w){return w instanceof g5?F0().eT(this.ac,w.ac):y0.prototype.h.call(this,w)};z.n=function(){return new B5(this.ac)};z.bg=function(w){return this.ac.a[w]};z.g=function(w){return this.bg(w|0)};z.o=function(w){return this.bg(w)};z.T=function(){return this.ac};var pL=new Y().i(g5,"scala.collection.mutable.ArraySeq$ofInt",{aS:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function d5(w){this.ad=null,this.ad=w}z=d5.prototype=new z1;z.constructor=d5;function GX(){}GX.prototype=z;z.j=function(){return this.ad.a.length};z.p=function(){var w=o();return w.eG(this.ad,w.v)};z.h=function(w){return w instanceof d5?F0().eU(this.ad,w.ad):y0.prototype.h.call(this,w)};z.n=function(){return new M5(this.ad)};z.bh=function(w){return this.ad.a[w]};z.g=function(w){return this.bh(w|0)};z.o=function(w){return this.bh(w)};z.T=function(){return this.ad};var nL=new Y().i(d5,"scala.collection.mutable.ArraySeq$ofLong",{aT:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function G2(w){this.ae=null,this.ae=w}z=G2.prototype=new z1;z.constructor=G2;function JX(){}JX.prototype=z;z.j=function(){return this.ae.a.length};z.o=function(w){return this.ae.a[w]};z.p=function(){var w=o();return w.eA(this.ae,w.v)};z.h=function(w){return w instanceof G2?C3().eX(this.ae,w.ae):y0.prototype.h.call(this,w)};z.n=function(){return q1(new k5,this.ae)};z.g=function(w){return this.o(w|0)};z.T=function(){return this.ae};var sL=new Y().i(G2,"scala.collection.mutable.ArraySeq$ofRef",{aU:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function h5(w){this.af=null,this.af=w}z=h5.prototype=new z1;z.constructor=h5;function XX(){}XX.prototype=z;z.j=function(){return this.af.a.length};z.bd=function(w){return this.af.a[w]};z.p=function(){var w=o();return w.eH(this.af,w.v)};z.h=function(w){return w instanceof h5?F0().eV(this.af,w.af):y0.prototype.h.call(this,w)};z.n=function(){return new L5(this.af)};z.g=function(w){return this.bd(w|0)};z.o=function(w){return this.bd(w)};z.T=function(){return this.af};var aL=new Y().i(h5,"scala.collection.mutable.ArraySeq$ofShort",{aV:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function C5(w){this.aA=null,this.aA=w}z=C5.prototype=new z1;z.constructor=C5;function kX(){}kX.prototype=z;z.j=function(){return this.aA.a.length};z.p=function(){var w=o();return w.eI(this.aA,w.v)};z.h=function(w){return w instanceof C5?this.aA.a.length===w.aA.a.length:y0.prototype.h.call(this,w)};z.n=function(){return new N5(this.aA)};z.bi=function(w){};z.g=function(w){this.bi(w|0)};z.o=function(w){this.bi(w)};z.T=function(){return this.aA};var tL=new Y().i(C5,"scala.collection.mutable.ArraySeq$ofUnit",{aW:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function u8(w,q){this.cj=null,this.ck=null,this.cj=w,this.ck=q}z=u8.prototype=new y6;z.constructor=u8;function YX(){}YX.prototype=z;z.a0=function(){return this.cj};z.aj=function(){return"::"};z.ah=function(){return 2};z.ai=function(w){switch(w){case 0:return this.cj;case 1:return this.ck;default:return O().bm(w)}};z.aU=function(){return new v1(this)};z.W=function(){return this.ck};var eL=new Y().i(u8,"scala.collection.immutable.$colon$colon",{dA:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1});function E8(){}z=E8.prototype=new y6;z.constructor=E8;function HX(){}HX.prototype=z;z.gs=function(){throw new Q5("head of empty list")};z.hn=function(){throw new D6("tail of empty list")};z.z=function(){return 0};z.n=function(){return r().w};z.aj=function(){return"Nil"};z.ah=function(){return 0};z.ai=function(w){return O().bm(w)};z.aU=function(){return new v1(this)};z.W=function(){this.hn()};z.a0=function(){this.gs()};var wN=new Y().i(E8,"scala.collection.immutable.Nil$",{dD:1,a6:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,aL:1,a0:1,ax:1,aM:1,az:1,q:1,p:1,A:1,aA:1,a:1,T:1}),ew;function c1(){if(!ew)ew=new E8;return ew}function UX(w,q){return w.H=q,w}function bX(w){return UX(w,new K8),w}function y8(){this.H=null}z=y8.prototype=new A8;z.constructor=y8;function BX(){}BX.prototype=z;z.aV=function(){return"IndexedSeq"};z.n=function(){return new W2(new V5(this))};z.aS=function(w){var q=this.H.j();return q===w?0:q<w?-1:1};z.ex=function(w){return B6(this,w)};z.j=function(){return this.H.j()};z.z=function(){return this.H.j()};z.fD=function(w){var q=this.H,F=""+R4(w);return q.q=q.q+F,this};z.u=function(){return this.H.q};z.i=function(){return this.H.j()===0};z.fb=function(){return this.H.q};z.cq=function(w){return this.fD(t2(w))};z.g=function(w){var q=w|0;return X1(this.H.eL(q))};z.o=function(w){return X1(this.H.eL(w))};var qN=new Y().i(y8,"scala.collection.mutable.StringBuilder",{dL:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dJ:1,aX:1,aZ:1,aY:1,D:1,n:1,o:1,E:1,a4:1,a:1});function MX(w,q){return w.aB=q,w}function LX(w){return MX(w,[]),w}function $8(){this.aB=null}z=$8.prototype=new WF;z.constructor=$8;function NX(){}NX.prototype=z;z.aV=function(){return"IndexedSeq"};z.n=function(){return new W2(new V5(this))};z.aS=function(w){var q=this.aB.length|0;return q===w?0:q<w?-1:1};z.o=function(w){return this.aB[w]};z.j=function(){return this.aB.length|0};z.z=function(){return this.aB.length|0};z.aQ=function(){return"WrappedArray"};z.fb=function(){return this};z.cq=function(w){return this.aB.push(w),this};z.g=function(w){var q=w|0;return this.aB[q]};var FN=new Y().i($8,"scala.scalajs.js.WrappedArray",{ec:1,dE:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,t:1,dG:1,aZ:1,aY:1,dK:1,q:1,p:1,D:1,n:1,o:1,E:1,dI:1,aX:1,a:1});C4=new A(0,0);WK.z=C4;VZ(new(KF.r()).C([]));
