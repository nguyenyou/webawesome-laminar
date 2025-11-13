var tf=Object.defineProperty;var X4=(w,f)=>{for(var q in f)tf(w,q,{get:f[q],enumerable:!0,configurable:!0,set:(K)=>f[q]=()=>K})};var _8={};X4(_8,{default:()=>E});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var G4=()=>{return{checkValidity(w){let f=w.input,q={message:"",isValid:!0,invalidKeys:[]};if(!f)return q;let K=!0;if("checkValidity"in f)K=f.checkValidity();if(K)return q;if(q.isValid=!1,"validationMessage"in f)q.message=f.validationMessage;if(!("validity"in f))return q.invalidKeys.push("customError"),q;for(let Z in f.validity){if(Z==="valid")continue;let Q=Z;if(f.validity[Q])q.invalidKeys.push(Q)}return q}}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var{defineProperty:ef,getOwnPropertyDescriptor:wF}=Object,W7=(w)=>{throw TypeError(w)},L=(w,f,q,K)=>{var Z=K>1?void 0:K?wF(f,q):f;for(var Q=w.length-1,X;Q>=0;Q--)if(X=w[Q])Z=(K?X(f,q,Z):X(Z))||Z;if(K&&Z)ef(f,q,Z);return Z},S7=(w,f,q)=>f.has(w)||W7("Cannot "+q),I7=(w,f,q)=>(S7(w,f,"read from private field"),q?q.call(w):f.get(w)),P7=(w,f,q)=>f.has(w)?W7("Cannot add the same private member more than once"):f instanceof WeakSet?f.add(w):f.set(w,q),E7=(w,f,q,K)=>(S7(w,f,"write to private field"),K?K.call(w,q):f.set(w,q),q);var Y4=globalThis,Y8=Y4.ShadowRoot&&(Y4.ShadyCSS===void 0||Y4.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,y7=Symbol(),g7=new WeakMap;class m7{constructor(w,f,q){if(this._$cssResult$=!0,q!==y7)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=w,this._strings=f}get styleSheet(){let w=this._styleSheet,f=this._strings;if(Y8&&w===void 0){let q=f!==void 0&&f.length===1;if(q)w=g7.get(f);if(w===void 0){if((this._styleSheet=w=new CSSStyleSheet).replaceSync(this.cssText),q)g7.set(f,w)}}return w}toString(){return this.cssText}}var H8=(w)=>new m7(typeof w==="string"?w:String(w),void 0,y7);var $7=(w,f)=>{if(Y8)w.adoptedStyleSheets=f.map((q)=>q instanceof CSSStyleSheet?q:q.styleSheet);else for(let q of f){let K=document.createElement("style"),Z=Y4.litNonce;if(Z!==void 0)K.setAttribute("nonce",Z);K.textContent=q.cssText,w.appendChild(K)}},fF=(w)=>{let f="";for(let q of w.cssRules)f+=q.cssText;return H8(f)},z8=Y8?(w)=>w:(w)=>w instanceof CSSStyleSheet?fF(w):w;var{is:FF,defineProperty:qF,getOwnPropertyDescriptor:_7,getOwnPropertyNames:KF,getOwnPropertySymbols:ZF,getPrototypeOf:x7}=Object,QF=!1,K1=globalThis;if(QF)K1.customElements??=customElements;var J1=!0,R1,b7=K1.trustedTypes,XF=b7?b7.emptyScript:"",j7=J1?K1.reactiveElementPolyfillSupportDevMode:K1.reactiveElementPolyfillSupport;if(J1)K1.litIssuedWarnings??=new Set,R1=(w,f)=>{if(f+=` See https://lit.dev/msg/${w} for more information.`,!K1.litIssuedWarnings.has(f)&&!K1.litIssuedWarnings.has(w))console.warn(f),K1.litIssuedWarnings.add(f)},queueMicrotask(()=>{if(R1("dev-mode","Lit is in dev mode. Not recommended for production!"),K1.ShadyDOM?.inUse&&j7===void 0)R1("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var GF=J1?(w)=>{if(!K1.emitLitDebugLogEvents)return;K1.dispatchEvent(new CustomEvent("lit-debug",{detail:w}))}:void 0,y0=(w,f)=>w,q2={toAttribute(w,f){switch(f){case Boolean:w=w?XF:null;break;case Object:case Array:w=w==null?w:JSON.stringify(w);break}return w},fromAttribute(w,f){let q=w;switch(f){case Boolean:q=w!==null;break;case Number:q=w===null?null:Number(w);break;case Object:case Array:try{q=JSON.parse(w)}catch(K){q=null}break}return q}},H4=(w,f)=>!FF(w,f),h7={attribute:!0,type:String,converter:q2,reflect:!1,useDefault:!1,hasChanged:H4};Symbol.metadata??=Symbol("metadata");K1.litPropertyMetadata??=new WeakMap;class U1 extends HTMLElement{static addInitializer(w){this.__prepare(),(this._initializers??=[]).push(w)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(w,f=h7){if(f.state)f.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(w))f=Object.create(f),f.wrapped=!0;if(this.elementProperties.set(w,f),!f.noAccessor){let q=J1?Symbol.for(`${String(w)} (@property() cache)`):Symbol(),K=this.getPropertyDescriptor(w,q,f);if(K!==void 0)qF(this.prototype,w,K)}}static getPropertyDescriptor(w,f,q){let{get:K,set:Z}=_7(this.prototype,w)??{get(){return this[f]},set(Q){this[f]=Q}};if(J1&&K==null){if("value"in(_7(this.prototype,w)??{}))throw Error(`Field ${JSON.stringify(String(w))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);R1("reactive-property-without-getter",`Field ${JSON.stringify(String(w))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:K,set(Q){let X=K?.call(this);Z?.call(this,Q),this.requestUpdate(w,X,q)},configurable:!0,enumerable:!0}}static getPropertyOptions(w){return this.elementProperties.get(w)??h7}static __prepare(){if(this.hasOwnProperty(y0("elementProperties",this)))return;let w=x7(this);if(w.finalize(),w._initializers!==void 0)this._initializers=[...w._initializers];this.elementProperties=new Map(w.elementProperties)}static finalize(){if(this.hasOwnProperty(y0("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(y0("properties",this))){let f=this.properties,q=[...KF(f),...ZF(f)];for(let K of q)this.createProperty(K,f[K])}let w=this[Symbol.metadata];if(w!==null){let f=litPropertyMetadata.get(w);if(f!==void 0)for(let[q,K]of f)this.elementProperties.set(q,K)}this.__attributeToPropertyMap=new Map;for(let[f,q]of this.elementProperties){let K=this.__attributeNameForProperty(f,q);if(K!==void 0)this.__attributeToPropertyMap.set(K,f)}if(this.elementStyles=this.finalizeStyles(this.styles),J1){if(this.hasOwnProperty("createProperty"))R1("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))R1("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(w){let f=[];if(Array.isArray(w)){let q=new Set(w.flat(1/0).reverse());for(let K of q)f.unshift(z8(K))}else if(w!==void 0)f.push(z8(w));return f}static __attributeNameForProperty(w,f){let q=f.attribute;return q===!1?void 0:typeof q==="string"?q:typeof w==="string"?w.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((w)=>this.enableUpdating=w),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((w)=>w(this))}addController(w){if((this.__controllers??=new Set).add(w),this.renderRoot!==void 0&&this.isConnected)w.hostConnected?.()}removeController(w){this.__controllers?.delete(w)}__saveInstanceProperties(){let w=new Map,f=this.constructor.elementProperties;for(let q of f.keys())if(this.hasOwnProperty(q))w.set(q,this[q]),delete this[q];if(w.size>0)this.__instanceProperties=w}createRenderRoot(){let w=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $7(w,this.constructor.elementStyles),w}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((w)=>w.hostConnected?.())}enableUpdating(w){}disconnectedCallback(){this.__controllers?.forEach((w)=>w.hostDisconnected?.())}attributeChangedCallback(w,f,q){this._$attributeToProperty(w,q)}__propertyToAttribute(w,f){let K=this.constructor.elementProperties.get(w),Z=this.constructor.__attributeNameForProperty(w,K);if(Z!==void 0&&K.reflect===!0){let X=(K.converter?.toAttribute!==void 0?K.converter:q2).toAttribute(f,K.type);if(J1&&this.constructor.enabledWarnings.includes("migration")&&X===void 0)R1("undefined-attribute-value",`The attribute value for the ${w} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=w,X==null)this.removeAttribute(Z);else this.setAttribute(Z,X);this.__reflectingProperty=null}}_$attributeToProperty(w,f){let q=this.constructor,K=q.__attributeToPropertyMap.get(w);if(K!==void 0&&this.__reflectingProperty!==K){let Z=q.getPropertyOptions(K),Q=typeof Z.converter==="function"?{fromAttribute:Z.converter}:Z.converter?.fromAttribute!==void 0?Z.converter:q2;this.__reflectingProperty=K;let X=Q.fromAttribute(f,Z.type);this[K]=X??this.__defaultValues?.get(K)??X,this.__reflectingProperty=null}}requestUpdate(w,f,q){if(w!==void 0){if(J1&&w instanceof Event)R1("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let K=this.constructor,Z=this[w];if(q??=K.getPropertyOptions(w),(q.hasChanged??H4)(Z,f)||q.useDefault&&q.reflect&&Z===this.__defaultValues?.get(w)&&!this.hasAttribute(K.__attributeNameForProperty(w,q)))this._$changeProperty(w,f,q);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(w,f,{useDefault:q,reflect:K,wrapped:Z},Q){if(q&&!(this.__defaultValues??=new Map).has(w)){if(this.__defaultValues.set(w,Q??f??this[w]),Z!==!0||Q!==void 0)return}if(!this._$changedProperties.has(w)){if(!this.hasUpdated&&!q)f=void 0;this._$changedProperties.set(w,f)}if(K===!0&&this.__reflectingProperty!==w)(this.__reflectingProperties??=new Set).add(w)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(f){Promise.reject(f)}let w=this.scheduleUpdate();if(w!=null)await w;return!this.isUpdatePending}scheduleUpdate(){let w=this.performUpdate();if(J1&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof w?.then==="function")R1("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return w}performUpdate(){if(!this.isUpdatePending)return;if(GF?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),J1){let Z=[...this.constructor.elementProperties.keys()].filter((Q)=>this.hasOwnProperty(Q)&&(Q in x7(this)));if(Z.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${Z.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[K,Z]of this.__instanceProperties)this[K]=Z;this.__instanceProperties=void 0}let q=this.constructor.elementProperties;if(q.size>0)for(let[K,Z]of q){let{wrapped:Q}=Z,X=this[K];if(Q===!0&&!this._$changedProperties.has(K)&&X!==void 0)this._$changeProperty(K,void 0,Z,X)}}let w=!1,f=this._$changedProperties;try{if(w=this.shouldUpdate(f),w)this.willUpdate(f),this.__controllers?.forEach((q)=>q.hostUpdate?.()),this.update(f);else this.__markUpdated()}catch(q){throw w=!1,this.__markUpdated(),q}if(w)this._$didUpdate(f)}willUpdate(w){}_$didUpdate(w){if(this.__controllers?.forEach((f)=>f.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(w);if(this.updated(w),J1&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))R1("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(w){return!0}update(w){this.__reflectingProperties&&=this.__reflectingProperties.forEach((f)=>this.__propertyToAttribute(f,this[f])),this.__markUpdated()}updated(w){}firstUpdated(w){}}U1.elementStyles=[];U1.shadowRootOptions={mode:"open"};U1[y0("elementProperties",U1)]=new Map;U1[y0("finalized",U1)]=new Map;j7?.({ReactiveElement:U1});if(J1){U1.enabledWarnings=["change-in-update","async-perform-update"];let w=function(f){if(!f.hasOwnProperty(y0("enabledWarnings",f)))f.enabledWarnings=f.enabledWarnings.slice()};U1.enableWarning=function(f){if(w(this),!this.enabledWarnings.includes(f))this.enabledWarnings.push(f)},U1.disableWarning=function(f){w(this);let q=this.enabledWarnings.indexOf(f);if(q>=0)this.enabledWarnings.splice(q,1)}}(K1.reactiveElementVersions??=[]).push("2.1.1");if(J1&&K1.reactiveElementVersions.length>1)queueMicrotask(()=>{R1("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var L1=globalThis,P=(w)=>{if(!L1.emitLitDebugLogEvents)return;L1.dispatchEvent(new CustomEvent("lit-debug",{detail:w}))},YF=0,Q2;L1.litIssuedWarnings??=new Set,Q2=(w,f)=>{if(f+=w?` See https://lit.dev/msg/${w} for more information.`:"",!L1.litIssuedWarnings.has(f)&&!L1.litIssuedWarnings.has(w))console.warn(f),L1.litIssuedWarnings.add(f)},queueMicrotask(()=>{Q2("dev-mode","Lit is in dev mode. Not recommended for production!")});var W1=L1.ShadyDOM?.inUse&&L1.ShadyDOM?.noPatch===!0?L1.ShadyDOM.wrap:(w)=>w,z4=L1.trustedTypes,o7=z4?z4.createPolicy("lit-html",{createHTML:(w)=>w}):void 0,HF=(w)=>w,U4=(w,f,q)=>HF,zF=(w)=>{if(U0!==U4)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");U0=w},MF=()=>{U0=U4},L8=(w,f,q)=>{return U0(w,f,q)},i7="$lit$",a1=`lit$${Math.random().toFixed(9).slice(2)}$`,n7="?"+a1,BF=`<${n7}>`,J0=document,X2=()=>J0.createComment(""),G2=(w)=>w===null||typeof w!="object"&&typeof w!="function",N8=Array.isArray,JF=(w)=>N8(w)||typeof w?.[Symbol.iterator]==="function",M8=`[ 	
\f\r]`,UF=`[^ 	
\f\r"'\`<>=]`,LF=`[^\\s"'>=/]`,K2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,u7=1,B8=2,NF=3,v7=/-->/g,d7=/>/g,Z0=new RegExp(`>|${M8}(?:(${LF}+)(${M8}*=${M8}*(?:${UF}|("|')|))|$)`,"g"),cF=0,l7=1,TF=2,p7=3,J8=/'/g,U8=/"/g,r7=/^(?:script|style|textarea|title)$/i,kF=1,M4=2,B4=3,c8=1,J4=2,OF=3,VF=4,AF=5,T8=6,CF=7,k8=(w)=>(f,...q)=>{if(f.some((K)=>K===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(q.some((K)=>K?._$litStatic$))Q2("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:w,strings:f,values:q}},d=k8(kF),a7=k8(M4),t7=k8(B4),Z1=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),s7=new WeakMap,B0=J0.createTreeWalker(J0,129),U0=U4;function e7(w,f){if(!N8(w)||!w.hasOwnProperty("raw")){let q="invalid template strings array";throw q=`
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
`),Error(q)}return o7!==void 0?o7.createHTML(f):f}var DF=(w,f)=>{let q=w.length-1,K=[],Z=f===M4?"<svg>":f===B4?"<math>":"",Q,X=K2;for(let G=0;G<q;G++){let B=w[G],N=-1,T,D=0,W;while(D<B.length){if(X.lastIndex=D,W=X.exec(B),W===null)break;if(D=X.lastIndex,X===K2){if(W[u7]==="!--")X=v7;else if(W[u7]!==void 0)X=d7;else if(W[B8]!==void 0){if(r7.test(W[B8]))Q=new RegExp(`</${W[B8]}`,"g");X=Z0}else if(W[NF]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(X===Z0)if(W[cF]===">")X=Q??K2,N=-1;else if(W[l7]===void 0)N=-2;else N=X.lastIndex-W[TF].length,T=W[l7],X=W[p7]===void 0?Z0:W[p7]==='"'?U8:J8;else if(X===U8||X===J8)X=Z0;else if(X===v7||X===d7)X=K2;else X=Z0,Q=void 0}console.assert(N===-1||X===Z0||X===J8||X===U8,"unexpected parse state B");let _=X===Z0&&w[G+1].startsWith("/>")?" ":"";Z+=X===K2?B+BF:N>=0?(K.push(T),B.slice(0,N)+i7+B.slice(N))+a1+_:B+a1+(N===-2?G:_)}let H=Z+(w[q]||"<?>")+(f===M4?"</svg>":f===B4?"</math>":"");return[e7(w,H),K]};class Y2{constructor({strings:w,["_$litType$"]:f},q){this.parts=[];let K,Z=0,Q=0,X=w.length-1,H=this.parts,[G,B]=DF(w,f);if(this.el=Y2.createElement(G,q),B0.currentNode=this.el.content,f===M4||f===B4){let N=this.el.content.firstChild;N.replaceWith(...N.childNodes)}while((K=B0.nextNode())!==null&&H.length<X){if(K.nodeType===1){{let N=K.localName;if(/^(?:textarea|template)$/i.test(N)&&K.innerHTML.includes(a1)){let T=`Expressions are not supported inside \`${N}\` elements. See https://lit.dev/msg/expression-in-${N} for more information.`;if(N==="template")throw Error(T);else Q2("",T)}}if(K.hasAttributes()){for(let N of K.getAttributeNames())if(N.endsWith(i7)){let T=B[Q++],W=K.getAttribute(N).split(a1),_=/([.?@])?(.*)/.exec(T);H.push({type:c8,index:Z,name:_[2],strings:W,ctor:_[1]==="."?f9:_[1]==="?"?F9:_[1]==="@"?q9:z2}),K.removeAttribute(N)}else if(N.startsWith(a1))H.push({type:T8,index:Z}),K.removeAttribute(N)}if(r7.test(K.tagName)){let N=K.textContent.split(a1),T=N.length-1;if(T>0){K.textContent=z4?z4.emptyScript:"";for(let D=0;D<T;D++)K.append(N[D],X2()),B0.nextNode(),H.push({type:J4,index:++Z});K.append(N[T],X2())}}}else if(K.nodeType===8)if(K.data===n7)H.push({type:J4,index:Z});else{let T=-1;while((T=K.data.indexOf(a1,T+1))!==-1)H.push({type:CF,index:Z}),T+=a1.length-1}Z++}if(B.length!==Q)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+w.join("${...}")+"`");P&&P({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:w})}static createElement(w,f){let q=J0.createElement("template");return q.innerHTML=w,q}}function m0(w,f,q=w,K){if(f===Z1)return f;let Z=K!==void 0?q.__directives?.[K]:q.__directive,Q=G2(f)?void 0:f._$litDirective$;if(Z?.constructor!==Q){if(Z?._$notifyDirectiveConnectionChanged?.(!1),Q===void 0)Z=void 0;else Z=new Q(w),Z._$initialize(w,q,K);if(K!==void 0)(q.__directives??=[])[K]=Z;else q.__directive=Z}if(Z!==void 0)f=m0(w,Z._$resolve(w,f.values),Z,K);return f}class w9{constructor(w,f){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=w,this._$parent=f}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(w){let{el:{content:f},parts:q}=this._$template,K=(w?.creationScope??J0).importNode(f,!0);B0.currentNode=K;let Z=B0.nextNode(),Q=0,X=0,H=q[0];while(H!==void 0){if(Q===H.index){let G;if(H.type===J4)G=new H2(Z,Z.nextSibling,this,w);else if(H.type===c8)G=new H.ctor(Z,H.name,H.strings,this,w);else if(H.type===T8)G=new K9(Z,this,w);this._$parts.push(G),H=q[++X]}if(Q!==H?.index)Z=B0.nextNode(),Q++}return B0.currentNode=J0,K}_update(w){let f=0;for(let q of this._$parts){if(q!==void 0)if(P&&P({kind:"set part",part:q,value:w[f],valueIndex:f,values:w,templateInstance:this}),q.strings!==void 0)q._$setValue(w,q,f),f+=q.strings.length-2;else q._$setValue(w[f]);f++}}}class H2{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(w,f,q,K){this.type=J4,this._$committedValue=x,this._$disconnectableChildren=void 0,this._$startNode=w,this._$endNode=f,this._$parent=q,this.options=K,this.__isConnected=K?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let w=W1(this._$startNode).parentNode,f=this._$parent;if(f!==void 0&&w?.nodeType===11)w=f.parentNode;return w}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(w,f=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(w=m0(this,w,f),G2(w)){if(w===x||w==null||w===""){if(this._$committedValue!==x)P&&P({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=x}else if(w!==this._$committedValue&&w!==Z1)this._commitText(w)}else if(w._$litType$!==void 0)this._commitTemplateResult(w);else if(w.nodeType!==void 0){if(this.options?.host===w){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",w,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(w)}else if(JF(w))this._commitIterable(w);else this._commitText(w)}_insert(w){return W1(W1(this._$startNode).parentNode).insertBefore(w,this._$endNode)}_commitNode(w){if(this._$committedValue!==w){if(this._$clear(),U0!==U4){let f=this._$startNode.parentNode?.nodeName;if(f==="STYLE"||f==="SCRIPT"){let q="Forbidden";if(f==="STYLE")q="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else q="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(q)}}P&&P({kind:"commit node",start:this._$startNode,parent:this._$parent,value:w,options:this.options}),this._$committedValue=this._insert(w)}}_commitText(w){if(this._$committedValue!==x&&G2(this._$committedValue)){let f=W1(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=L8(f,"data","property");w=this._textSanitizer(w),P&&P({kind:"commit text",node:f,value:w,options:this.options}),f.data=w}else{let f=J0.createTextNode("");if(this._commitNode(f),this._textSanitizer===void 0)this._textSanitizer=L8(f,"data","property");w=this._textSanitizer(w),P&&P({kind:"commit text",node:f,value:w,options:this.options}),f.data=w}this._$committedValue=w}_commitTemplateResult(w){let{values:f,["_$litType$"]:q}=w,K=typeof q==="number"?this._$getTemplate(w):(q.el===void 0&&(q.el=Y2.createElement(e7(q.h,q.h[0]),this.options)),q);if(this._$committedValue?._$template===K)P&&P({kind:"template updating",template:K,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:f}),this._$committedValue._update(f);else{let Z=new w9(K,this),Q=Z._clone(this.options);P&&P({kind:"template instantiated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:Q,values:f}),Z._update(f),P&&P({kind:"template instantiated and updated",template:K,instance:Z,parts:Z._$parts,options:this.options,fragment:Q,values:f}),this._commitNode(Q),this._$committedValue=Z}}_$getTemplate(w){let f=s7.get(w.strings);if(f===void 0)s7.set(w.strings,f=new Y2(w));return f}_commitIterable(w){if(!N8(this._$committedValue))this._$committedValue=[],this._$clear();let f=this._$committedValue,q=0,K;for(let Z of w){if(q===f.length)f.push(K=new H2(this._insert(X2()),this._insert(X2()),this,this.options));else K=f[q];K._$setValue(Z),q++}if(q<f.length)this._$clear(K&&W1(K._$endNode).nextSibling,q),f.length=q}_$clear(w=W1(this._$startNode).nextSibling,f){this._$notifyConnectionChanged?.(!1,!0,f);while(w!==this._$endNode){let q=W1(w).nextSibling;W1(w).remove(),w=q}}setConnected(w){if(this._$parent===void 0)this.__isConnected=w,this._$notifyConnectionChanged?.(w);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class z2{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(w,f,q,K,Z){if(this.type=c8,this._$committedValue=x,this._$disconnectableChildren=void 0,this.element=w,this.name=f,this._$parent=K,this.options=Z,q.length>2||q[0]!==""||q[1]!=="")this._$committedValue=Array(q.length-1).fill(new String),this.strings=q;else this._$committedValue=x;this._sanitizer=void 0}_$setValue(w,f=this,q,K){let Z=this.strings,Q=!1;if(Z===void 0){if(w=m0(this,w,f,0),Q=!G2(w)||w!==this._$committedValue&&w!==Z1,Q)this._$committedValue=w}else{let X=w;w=Z[0];let H,G;for(H=0;H<Z.length-1;H++){if(G=m0(this,X[q+H],f,H),G===Z1)G=this._$committedValue[H];if(Q||=!G2(G)||G!==this._$committedValue[H],G===x)w=x;else if(w!==x)w+=(G??"")+Z[H+1];this._$committedValue[H]=G}}if(Q&&!K)this._commitValue(w)}_commitValue(w){if(w===x)W1(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=U0(this.element,this.name,"attribute");w=this._sanitizer(w??""),P&&P({kind:"commit attribute",element:this.element,name:this.name,value:w,options:this.options}),W1(this.element).setAttribute(this.name,w??"")}}}class f9 extends z2{constructor(){super(...arguments);this.type=OF}_commitValue(w){if(this._sanitizer===void 0)this._sanitizer=U0(this.element,this.name,"property");w=this._sanitizer(w),P&&P({kind:"commit property",element:this.element,name:this.name,value:w,options:this.options}),this.element[this.name]=w===x?void 0:w}}class F9 extends z2{constructor(){super(...arguments);this.type=VF}_commitValue(w){P&&P({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(w&&w!==x),options:this.options}),W1(this.element).toggleAttribute(this.name,!!w&&w!==x)}}class q9 extends z2{constructor(w,f,q,K,Z){super(w,f,q,K,Z);if(this.type=AF,this.strings!==void 0)throw Error(`A \`<${w.localName}>\` has a \`@${f}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(w,f=this){if(w=m0(this,w,f,0)??x,w===Z1)return;let q=this._$committedValue,K=w===x&&q!==x||w.capture!==q.capture||w.once!==q.once||w.passive!==q.passive,Z=w!==x&&(q===x||K);if(P&&P({kind:"commit event listener",element:this.element,name:this.name,value:w,options:this.options,removeListener:K,addListener:Z,oldListener:q}),K)this.element.removeEventListener(this.name,this,q);if(Z)this.element.addEventListener(this.name,this,w);this._$committedValue=w}handleEvent(w){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,w);else this._$committedValue.handleEvent(w)}}class K9{constructor(w,f,q){this.element=w,this.type=T8,this._$disconnectableChildren=void 0,this._$parent=f,this.options=q}get _$isConnected(){return this._$parent._$isConnected}_$setValue(w){P&&P({kind:"commit to element binding",element:this.element,value:w,options:this.options}),m0(this,w)}}var RF=L1.litHtmlPolyfillSupportDevMode;RF?.(Y2,H2);(L1.litHtmlVersions??=[]).push("3.3.1");if(L1.litHtmlVersions.length>1)queueMicrotask(()=>{Q2("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var Z2=(w,f,q)=>{if(f==null)throw TypeError(`The container to render into may not be ${f}`);let K=YF++,Z=q?.renderBefore??f,Q=Z._$litPart$;if(P&&P({kind:"begin render",id:K,value:w,container:f,options:q,part:Q}),Q===void 0){let X=q?.renderBefore??null;Z._$litPart$=Q=new H2(f.insertBefore(X2(),X),X,void 0,q??{})}return Q._$setValue(w),P&&P({kind:"end render",id:K,value:w,container:f,options:q,part:Q}),Q};Z2.setSanitizer=zF,Z2.createSanitizer=L8,Z2._testOnlyClearSanitizerFactoryDoNotCallOrElse=MF;var WF=(w,f)=>w,O8=!0,t1=globalThis,Z9;if(O8)t1.litIssuedWarnings??=new Set,Z9=(w,f)=>{if(f+=` See https://lit.dev/msg/${w} for more information.`,!t1.litIssuedWarnings.has(f)&&!t1.litIssuedWarnings.has(w))console.warn(f),t1.litIssuedWarnings.add(f)};class Q0 extends U1{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let w=super.createRenderRoot();return this.renderOptions.renderBefore??=w.firstChild,w}update(w){let f=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(w),this.__childPart=Z2(f,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return Z1}}Q0._$litElement$=!0;Q0[WF("finalized",Q0)]=!0;t1.litElementHydrateSupport?.({LitElement:Q0});var SF=O8?t1.litElementPolyfillSupportDevMode:t1.litElementPolyfillSupport;SF?.({LitElement:Q0});(t1.litElementVersions??=[]).push("4.2.1");if(O8&&t1.litElementVersions.length>1)queueMicrotask(()=>{Z9("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var S1=!1;var b1=(w)=>(f,q)=>{if(q!==void 0)q.addInitializer(()=>{customElements.define(w,f)});else customElements.define(w,f)};var Q9=!0,X9;if(Q9)globalThis.litIssuedWarnings??=new Set,X9=(w,f)=>{if(f+=` See https://lit.dev/msg/${w} for more information.`,!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(w))console.warn(f),globalThis.litIssuedWarnings.add(f)};var IF=(w,f,q)=>{let K=f.hasOwnProperty(q);return f.constructor.createProperty(q,w),K?Object.getOwnPropertyDescriptor(f,q):void 0},PF={attribute:!0,type:String,converter:q2,reflect:!1,hasChanged:H4},EF=(w=PF,f,q)=>{let{kind:K,metadata:Z}=q;if(Q9&&Z==null)X9("missing-class-metadata",`The class ${f} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let Q=globalThis.litPropertyMetadata.get(Z);if(Q===void 0)globalThis.litPropertyMetadata.set(Z,Q=new Map);if(K==="setter")w=Object.create(w),w.wrapped=!0;if(Q.set(q.name,w),K==="accessor"){let{name:X}=q;return{set(H){let G=f.get.call(this);f.set.call(this,H),this.requestUpdate(X,G,w)},init(H){if(H!==void 0)this._$changeProperty(X,void 0,w,H);return H}}}else if(K==="setter"){let{name:X}=q;return function(H){let G=this[X];f.call(this,H),this.requestUpdate(X,G,w)}}throw Error(`Unsupported decorator location: ${K}`)};function c(w){return(f,q)=>{return typeof q==="object"?EF(w,f,q):IF(w,f,q)}}function L0(w){return c({...w,state:!0,attribute:!1})}var N0=(w,f,q)=>{if(q.configurable=!0,q.enumerable=!0,Reflect.decorate&&typeof f!=="object")Object.defineProperty(w,f,q);return q};var V8=!0,G9;if(V8)globalThis.litIssuedWarnings??=new Set,G9=(w,f)=>{if(f+=w?` See https://lit.dev/msg/${w} for more information.`:"",!globalThis.litIssuedWarnings.has(f)&&!globalThis.litIssuedWarnings.has(w))console.warn(f),globalThis.litIssuedWarnings.add(f)};function c0(w,f){return(q,K,Z)=>{let Q=(X)=>{let H=X.renderRoot?.querySelector(w)??null;if(V8&&H===null&&f&&!X.hasUpdated){let G=typeof K==="object"?K.name:K;G9("",`@query'd field ${JSON.stringify(String(G))} with the 'cache' flag set for selector '${w}' has been accessed before the first update and returned null. This is expected if the renderRoot tree has not been provided beforehand (e.g. via Declarative Shadow DOM). Therefore the value hasn't been cached.`)}return H};if(f){let{get:X,set:H}=typeof K==="object"?q:Z??(()=>{let G=V8?Symbol(`${String(K)} (@query() cache)`):Symbol();return{get(){return this[G]},set(B){this[G]=B}}})();return N0(q,K,{get(){let G=X.call(this);if(G===void 0){if(G=Q(this),G!==null||this.hasUpdated)H.call(this,G)}return G}})}else return N0(q,K,{get(){return Q(this)}})}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var gF=`:host {
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
`,L4,I1=class extends Q0{constructor(){super();P7(this,L4,!1),this.initialReflectedProperties=new Map,this.didSSR=S1||Boolean(this.shadowRoot),this.customStates={set:(f,q)=>{if(!Boolean(this.internals?.states))return;try{if(q)this.internals.states.add(f);else this.internals.states.delete(f)}catch(K){if(String(K).includes("must start with '--'"))console.error("Your browser implements an outdated version of CustomStateSet. Consider using a polyfill");else throw K}},has:(f)=>{if(!Boolean(this.internals?.states))return!1;try{return this.internals.states.has(f)}catch{return!1}}};try{this.internals=this.attachInternals()}catch{console.error("Element internals are not supported in your browser. Consider using a polyfill")}this.customStates.set("wa-defined",!0);let w=this.constructor;for(let[f,q]of w.elementProperties)if(q.default==="inherit"&&q.initial!==void 0&&typeof f==="string")this.customStates.set(`initial-${f}-${q.initial}`,!0)}static get styles(){let w=Array.isArray(this.css)?this.css:this.css?[this.css]:[];return[gF,...w].map((f)=>typeof f==="string"?H8(f):f)}attributeChangedCallback(w,f,q){if(!I7(this,L4))this.constructor.elementProperties.forEach((K,Z)=>{if(K.reflect&&this[Z]!=null)this.initialReflectedProperties.set(Z,this[Z])}),E7(this,L4,!0);super.attributeChangedCallback(w,f,q)}willUpdate(w){super.willUpdate(w),this.initialReflectedProperties.forEach((f,q)=>{if(w.has(q)&&this[q]==null)this[q]=f})}firstUpdated(w){if(super.firstUpdated(w),this.didSSR)this.shadowRoot?.querySelectorAll("slot").forEach((f)=>{f.dispatchEvent(new Event("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))})}update(w){try{super.update(w)}catch(f){if(this.didSSR&&!this.hasUpdated){let q=new Event("lit-hydration-error",{bubbles:!0,composed:!0,cancelable:!1});q.error=f,this.dispatchEvent(q)}throw f}}relayNativeEvent(w,f){w.stopImmediatePropagation(),this.dispatchEvent(new w.constructor(w.type,{...w,...f}))}};L4=new WeakMap;L([c()],I1.prototype,"dir",2);L([c()],I1.prototype,"lang",2);L([c({type:Boolean,reflect:!0,attribute:"did-ssr"})],I1.prototype,"didSSR",2);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var A8=class extends Event{constructor(){super("wa-invalid",{bubbles:!0,cancelable:!1,composed:!0})}},yF=()=>{return{observedAttributes:["custom-error"],checkValidity(w){let f={message:"",isValid:!0,invalidKeys:[]};if(w.customError)f.message=w.customError,f.isValid=!1,f.invalidKeys=["customError"];return f}}},N1=class extends I1{constructor(){super();if(this.name=null,this.disabled=!1,this.required=!1,this.assumeInteractionOn=["input"],this.validators=[],this.valueHasChanged=!1,this.hasInteracted=!1,this.customError=null,this.emittedEvents=[],this.emitInvalid=(w)=>{if(w.target!==this)return;this.hasInteracted=!0,this.dispatchEvent(new A8)},this.handleInteraction=(w)=>{let f=this.emittedEvents;if(!f.includes(w.type))f.push(w.type);if(f.length===this.assumeInteractionOn?.length)this.hasInteracted=!0},!S1)this.addEventListener("invalid",this.emitInvalid)}static get validators(){return[yF()]}static get observedAttributes(){let w=new Set(super.observedAttributes||[]);for(let f of this.validators){if(!f.observedAttributes)continue;for(let q of f.observedAttributes)w.add(q)}return[...w]}connectedCallback(){super.connectedCallback(),this.updateValidity(),this.assumeInteractionOn.forEach((w)=>{this.addEventListener(w,this.handleInteraction)})}firstUpdated(...w){super.firstUpdated(...w),this.updateValidity()}willUpdate(w){if(!S1&&w.has("customError")){if(!this.customError)this.customError=null;this.setCustomValidity(this.customError||"")}if(w.has("value")||w.has("disabled")){let f=this.value;if(Array.isArray(f)){if(this.name){let q=new FormData;for(let K of f)q.append(this.name,K);this.setValue(q,q)}}else this.setValue(f,f)}if(w.has("disabled")){if(this.customStates.set("disabled",this.disabled),this.hasAttribute("disabled")||!S1&&!this.matches(":disabled"))this.toggleAttribute("disabled",this.disabled)}this.updateValidity(),super.willUpdate(w)}get labels(){return this.internals.labels}getForm(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}get validationMessage(){return this.internals.validationMessage}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}reportValidity(){return this.updateValidity(),this.hasInteracted=!0,this.internals.reportValidity()}get validationTarget(){return this.input||void 0}setValidity(...w){let f=w[0],q=w[1],K=w[2];if(!K)K=this.validationTarget;this.internals.setValidity(f,q,K||void 0),this.requestUpdate("validity"),this.setCustomStates()}setCustomStates(){let w=Boolean(this.required),f=this.internals.validity.valid,q=this.hasInteracted;this.customStates.set("required",w),this.customStates.set("optional",!w),this.customStates.set("invalid",!f),this.customStates.set("valid",f),this.customStates.set("user-invalid",!f&&q),this.customStates.set("user-valid",f&&q)}setCustomValidity(w){if(!w){this.customError=null,this.setValidity({});return}this.customError=w,this.setValidity({customError:!0},w,this.validationTarget)}formResetCallback(){this.resetValidity(),this.hasInteracted=!1,this.valueHasChanged=!1,this.emittedEvents=[],this.updateValidity()}formDisabledCallback(w){this.disabled=w,this.updateValidity()}formStateRestoreCallback(w,f){if(this.value=w,f==="restore")this.resetValidity();this.updateValidity()}setValue(...w){let[f,q]=w;this.internals.setFormValue(f,q)}get allValidators(){let w=this.constructor.validators||[],f=this.validators||[];return[...w,...f]}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.hasAttribute("disabled")||!this.willValidate){this.resetValidity();return}let w=this.allValidators;if(!w?.length)return;let f={customError:Boolean(this.customError)},q=this.validationTarget||this.input||void 0,K="";for(let Z of w){let{isValid:Q,message:X,invalidKeys:H}=Z.checkValidity(this);if(Q)continue;if(!K)K=X;if(H?.length>=0)H.forEach((G)=>f[G]=!0)}if(!K)K=this.validationMessage;this.setValidity(f,K,q)}};N1.formAssociated=!0;L([c({reflect:!0})],N1.prototype,"name",2);L([c({type:Boolean})],N1.prototype,"disabled",2);L([c({state:!0,attribute:!1})],N1.prototype,"valueHasChanged",2);L([c({state:!0,attribute:!1})],N1.prototype,"hasInteracted",2);L([c({attribute:"custom-error",reflect:!0})],N1.prototype,"customError",2);L([c({attribute:!1,state:!0,type:Object})],N1.prototype,"validity",1);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var Y9=`@layer wa-utilities {
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
`;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var $0=class{constructor(w,...f){this.slotNames=[],this.handleSlotChange=(q)=>{let K=q.target;if(this.slotNames.includes("[default]")&&!K.name||K.name&&this.slotNames.includes(K.name))this.host.requestUpdate()},(this.host=w).addController(this),this.slotNames=f}hasDefaultSlot(){return[...this.host.childNodes].some((w)=>{if(w.nodeType===Node.TEXT_NODE&&w.textContent.trim()!=="")return!0;if(w.nodeType===Node.ELEMENT_NODE){let f=w;if(f.tagName.toLowerCase()==="wa-visually-hidden")return!1;if(!f.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(w){return this.host.querySelector(`:scope > [slot="${w}"]`)!==null}test(w){return w==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(w)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var N4=`@layer wa-utilities {
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
`;var C8=new Set,_0=new Map,T0,D8="ltr",R8="en",H9=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(H9){let w=new MutationObserver(z9);D8=document.documentElement.dir||"ltr",R8=document.documentElement.lang||navigator.language,w.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function M2(...w){w.map((f)=>{let q=f.$code.toLowerCase();if(_0.has(q))_0.set(q,Object.assign(Object.assign({},_0.get(q)),f));else _0.set(q,f);if(!T0)T0=f}),z9()}function z9(){if(H9)D8=document.documentElement.dir||"ltr",R8=document.documentElement.lang||navigator.language;[...C8.keys()].map((w)=>{if(typeof w.requestUpdate==="function")w.requestUpdate()})}class W8{constructor(w){this.host=w,this.host.addController(this)}hostConnected(){C8.add(this.host)}hostDisconnected(){C8.delete(this.host)}dir(){return`${this.host.dir||D8}`.toLowerCase()}lang(){return`${this.host.lang||R8}`.toLowerCase()}getTranslationData(w){var f,q;let K=new Intl.Locale(w.replace(/_/g,"-")),Z=K===null||K===void 0?void 0:K.language.toLowerCase(),Q=(q=(f=K===null||K===void 0?void 0:K.region)===null||f===void 0?void 0:f.toLowerCase())!==null&&q!==void 0?q:"",X=_0.get(`${Z}-${Q}`),H=_0.get(Z);return{locale:K,language:Z,region:Q,primary:X,secondary:H}}exists(w,f){var q;let{primary:K,secondary:Z}=this.getTranslationData((q=f.lang)!==null&&q!==void 0?q:this.lang());if(f=Object.assign({includeFallback:!1},f),K&&K[w]||Z&&Z[w]||f.includeFallback&&T0&&T0[w])return!0;return!1}term(w,...f){let{primary:q,secondary:K}=this.getTranslationData(this.lang()),Z;if(q&&q[w])Z=q[w];else if(K&&K[w])Z=K[w];else if(T0&&T0[w])Z=T0[w];else return console.error(`No translation found for: ${String(w)}`),String(w);if(typeof Z==="function")return Z(...f);return Z}date(w,f){return w=new Date(w),new Intl.DateTimeFormat(this.lang(),f).format(w)}number(w,f){return w=Number(w),isNaN(w)?"":new Intl.NumberFormat(this.lang(),f).format(w)}relativeTime(w,f,q){return new Intl.RelativeTimeFormat(this.lang(),q).format(w,f)}}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var M9={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(w,f)=>`Go to slide ${w} of ${f}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:(w)=>{if(w===0)return"No options selected";if(w===1)return"1 option selected";return`${w} options selected`},pauseAnimation:"Pause animation",playAnimation:"Play animation",previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollableRegion:"Scrollable region",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:(w)=>`Slide ${w}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out"};M2(M9);var B9=M9;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var X0=class extends W8{};M2(B9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function e1(w,f){let q={waitUntilFirstUpdate:!1,...f};return(K,Z)=>{let{update:Q}=K,X=Array.isArray(w)?w:[w];K.update=function(H){X.forEach((G)=>{let B=G;if(H.has(B)){let N=H.get(B),T=this[B];if(N!==T){if(!q.waitUntilFirstUpdate||this.hasUpdated)this[Z](N,T)}}}),Q.call(this,H)}}}var w0={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},c4=(w)=>(...f)=>({["_$litDirective$"]:w,values:f});class B2{constructor(w){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(w,f,q){this.__part=w,this._$parent=f,this.__attributeIndex=q}_$resolve(w,f){return this.update(w,f)}update(w,f){return this.render(...f)}}class J9 extends B2{constructor(w){super(w);if(w.type!==w0.ATTRIBUTE||w.name!=="class"||w.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(w){return" "+Object.keys(w).filter((f)=>w[f]).join(" ")+" "}update(w,[f]){if(this._previousClasses===void 0){if(this._previousClasses=new Set,w.strings!==void 0)this._staticClasses=new Set(w.strings.join(" ").split(/\s/).filter((K)=>K!==""));for(let K in f)if(f[K]&&!this._staticClasses?.has(K))this._previousClasses.add(K);return this.render(f)}let q=w.element.classList;for(let K of this._previousClasses)if(!(K in f))q.remove(K),this._previousClasses.delete(K);for(let K in f){let Z=!!f[K];if(Z!==this._previousClasses.has(K)&&!this._staticClasses?.has(K))if(Z)q.add(K),this._previousClasses.add(K);else q.remove(K),this._previousClasses.delete(K)}return Z1}}var x0=c4(J9);var $=(w)=>w??x;var L9=Symbol.for(""),mF=(w)=>{if(w?.r!==L9)return;return w?._$litStatic$};var $F=(w)=>{if(w._$litStatic$!==void 0)return w._$litStatic$;else throw Error(`Value passed to 'literal' function must be a 'literal' result: ${w}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)},S8=(w,...f)=>({["_$litStatic$"]:f.reduce((q,K,Z)=>q+$F(K)+w[Z+1],w[0]),r:L9}),U9=new Map,I8=(w)=>(f,...q)=>{let K=q.length,Z,Q,X=[],H=[],G=0,B=!1,N;while(G<K){N=f[G];while(G<K&&(Q=q[G],Z=mF(Q))!==void 0)N+=Z+f[++G],B=!0;if(G!==K)H.push(Q);X.push(N),G++}if(G===K)X.push(f[K]);if(B){let T=X.join("$$lit$$");if(f=U9.get(T),f===void 0)X.raw=X,U9.set(T,f=X);q=H}return w(f,...q)},T4=I8(d),RH=I8(a7),WH=I8(t7);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var _F=`@layer wa-component {
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
`,E=class extends N1{constructor(){super(...arguments);this.assumeInteractionOn=["click"],this.hasSlotController=new $0(this,"[default]","start","end"),this.localize=new X0(this),this.invalid=!1,this.isIconButton=!1,this.title="",this.variant="neutral",this.appearance="accent",this.size="medium",this.withCaret=!1,this.disabled=!1,this.loading=!1,this.pill=!1,this.type="button",this.form=null}static get validators(){return[...super.validators,G4()]}constructLightDOMButton(){let w=document.createElement("button");if(w.type=this.type,w.style.position="absolute",w.style.width="0",w.style.height="0",w.style.clipPath="inset(50%)",w.style.overflow="hidden",w.style.whiteSpace="nowrap",this.name)w.name=this.name;return w.value=this.value||"",["form","formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((f)=>{if(this.hasAttribute(f))w.setAttribute(f,this.getAttribute(f))}),w}handleClick(){if(!this.getForm())return;let f=this.constructLightDOMButton();this.parentElement?.append(f),f.click(),f.remove()}handleInvalid(){this.dispatchEvent(new A8)}handleLabelSlotChange(){let w=this.labelSlot.assignedNodes({flatten:!0}),f=!1,q=!1,K=!1,Z=!1;if([...w].forEach((Q)=>{if(Q.nodeType===Node.ELEMENT_NODE){let X=Q;if(X.localName==="wa-icon"){if(q=!0,!f)f=X.label!==void 0}else Z=!0}else if(Q.nodeType===Node.TEXT_NODE){if((Q.textContent?.trim()||"").length>0)K=!0}}),this.isIconButton=q&&!K&&!Z,this.isIconButton&&!f)console.warn('Icon buttons must have a label for screen readers. Add <wa-icon label="..."> to remove this warning.',this)}isButton(){return this.href?!1:!0}isLink(){return this.href?!0:!1}handleDisabledChange(){this.updateValidity()}setValue(...w){}click(){this.button.click()}focus(w){this.button.focus(w)}blur(){this.button.blur()}render(){let w=this.isLink(),f=w?S8`a`:S8`button`;return T4`
      <${f}
        part="base"
        class=${x0({button:!0,caret:this.withCaret,disabled:this.disabled,loading:this.loading,rtl:this.localize.dir()==="rtl","has-label":this.hasSlotController.test("[default]"),"has-start":this.hasSlotController.test("start"),"has-end":this.hasSlotController.test("end"),"is-icon-button":this.isIconButton})}
        ?disabled=${$(w?void 0:this.disabled)}
        type=${$(w?void 0:this.type)}
        title=${this.title}
        name=${$(w?void 0:this.name)}
        value=${$(w?void 0:this.value)}
        href=${$(w?this.href:void 0)}
        target=${$(w?this.target:void 0)}
        download=${$(w?this.download:void 0)}
        rel=${$(w&&this.rel?this.rel:void 0)}
        role=${$(w?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="start" part="start" class="start"></slot>
        <slot part="label" class="label" @slotchange=${this.handleLabelSlotChange}></slot>
        <slot name="end" part="end" class="end"></slot>
        ${this.withCaret?T4`
                <wa-icon part="caret" class="caret" library="system" name="chevron-down" variant="solid"></wa-icon>
              `:""}
        ${this.loading?T4`<wa-spinner part="spinner"></wa-spinner>`:""}
      </${f}>
    `}};E.shadowRootOptions={...N1.shadowRootOptions,delegatesFocus:!0};E.css=[_F,Y9,N4];L([c0(".button")],E.prototype,"button",2);L([c0("slot:not([name])")],E.prototype,"labelSlot",2);L([L0()],E.prototype,"invalid",2);L([L0()],E.prototype,"isIconButton",2);L([c()],E.prototype,"title",2);L([c({reflect:!0})],E.prototype,"variant",2);L([c({reflect:!0})],E.prototype,"appearance",2);L([c({reflect:!0})],E.prototype,"size",2);L([c({attribute:"with-caret",type:Boolean,reflect:!0})],E.prototype,"withCaret",2);L([c({type:Boolean})],E.prototype,"disabled",2);L([c({type:Boolean,reflect:!0})],E.prototype,"loading",2);L([c({type:Boolean,reflect:!0})],E.prototype,"pill",2);L([c()],E.prototype,"type",2);L([c({reflect:!0})],E.prototype,"name",2);L([c({reflect:!0})],E.prototype,"value",2);L([c({reflect:!0})],E.prototype,"href",2);L([c()],E.prototype,"target",2);L([c()],E.prototype,"rel",2);L([c()],E.prototype,"download",2);L([c({reflect:!0})],E.prototype,"form",2);L([c({attribute:"formaction"})],E.prototype,"formAction",2);L([c({attribute:"formenctype"})],E.prototype,"formEnctype",2);L([c({attribute:"formmethod"})],E.prototype,"formMethod",2);L([c({attribute:"formnovalidate",type:Boolean})],E.prototype,"formNoValidate",2);L([c({attribute:"formtarget"})],E.prototype,"formTarget",2);L([e1("disabled",{waitUntilFirstUpdate:!0})],E.prototype,"handleDisabledChange",1);E=L([b1("wa-button")],E);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var xF=`:host {
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
`,P8=class extends I1{constructor(){super(...arguments);this.localize=new X0(this)}render(){return d`
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
    `}};P8.css=xF;P8=L([b1("wa-spinner")],P8);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var N9=class extends Event{constructor(){super("wa-load",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var E8="";function bF(w){E8=w}function hF(){if(!E8){let w=document.querySelector("[data-fa-kit-code]");if(w)bF(w.getAttribute("data-fa-kit-code")||"")}return E8}var f0="7.0.1";function jF(w,f,q){let K=hF(),Z=K.length>0,Q="solid";if(f==="notdog"){if(q==="solid")Q="solid";if(q==="duo-solid")Q="duo-solid";return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/notdog-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(f==="chisel")return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/chisel-regular/${w}.svg?token=${encodeURIComponent(K)}`;if(f==="etch")return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/etch-solid/${w}.svg?token=${encodeURIComponent(K)}`;if(f==="jelly"){if(q==="regular")Q="regular";if(q==="duo-regular")Q="duo-regular";if(q==="fill-regular")Q="fill-regular";return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/jelly-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(f==="slab"){if(q==="solid"||q==="regular")Q="regular";if(q==="press-regular")Q="press-regular";return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/slab-${Q}/${w}.svg?token=${encodeURIComponent(K)}`}if(f==="thumbprint")return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/thumbprint-light/${w}.svg?token=${encodeURIComponent(K)}`;if(f==="whiteboard")return`https://ka-p.fontawesome.com/releases/v${f0}/svgs/whiteboard-semibold/${w}.svg?token=${encodeURIComponent(K)}`;if(f==="classic"){if(q==="thin")Q="thin";if(q==="light")Q="light";if(q==="regular")Q="regular";if(q==="solid")Q="solid"}if(f==="sharp"){if(q==="thin")Q="sharp-thin";if(q==="light")Q="sharp-light";if(q==="regular")Q="sharp-regular";if(q==="solid")Q="sharp-solid"}if(f==="duotone"){if(q==="thin")Q="duotone-thin";if(q==="light")Q="duotone-light";if(q==="regular")Q="duotone-regular";if(q==="solid")Q="duotone"}if(f==="sharp-duotone"){if(q==="thin")Q="sharp-duotone-thin";if(q==="light")Q="sharp-duotone-light";if(q==="regular")Q="sharp-duotone-regular";if(q==="solid")Q="sharp-duotone-solid"}if(f==="brands")Q="brands";return Z?`https://ka-p.fontawesome.com/releases/v${f0}/svgs/${Q}/${w}.svg?token=${encodeURIComponent(K)}`:`https://ka-f.fontawesome.com/releases/v${f0}/svgs/${Q}/${w}.svg`}var oF={name:"default",resolver:(w,f="classic",q="solid")=>{return jF(w,f,q)},mutator:(w,f)=>{if(f?.family&&!w.hasAttribute("data-duotone-initialized")){let{family:q,variant:K}=f;if(q==="duotone"||q==="sharp-duotone"||q==="notdog"&&K==="duo-solid"||q==="jelly"&&K==="duo-regular"||q==="thumbprint"){let Z=[...w.querySelectorAll("path")],Q=Z.find((H)=>!H.hasAttribute("opacity")),X=Z.find((H)=>H.hasAttribute("opacity"));if(!Q||!X)return;if(Q.setAttribute("data-duotone-primary",""),X.setAttribute("data-duotone-secondary",""),f.swapOpacity&&Q&&X){let H=X.getAttribute("opacity")||"0.4";Q.style.setProperty("--path-opacity",H),X.style.setProperty("--path-opacity","1")}w.setAttribute("data-duotone-initialized","")}}}},c9=oF;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function uF(w){return`data:image/svg+xml,${encodeURIComponent(w)}`}var g8={solid:{check:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"/></svg>',"chevron-down":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>',"chevron-left":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>',"chevron-right":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>',circle:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0z"/></svg>',eyedropper:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M341.6 29.2l-101.6 101.6-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4 101.6-101.6c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6l0 42.4-26.6 39.9c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4l39.9-26.6 42.4 0c21.2 0 41.6-8.4 56.6-23.4l109.4-109.4-45.3-45.3-109.4 109.4c-3 3-7.1 4.7-11.3 4.7l-36.1 0 0-36.1c0-4.2 1.7-8.3 4.7-11.3l109.4-109.4-45.3-45.3-109.4 109.4z"/></svg>',"grip-vertical":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M128 40c0-22.1-17.9-40-40-40L40 0C17.9 0 0 17.9 0 40L0 88c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zm0 192c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM0 424l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 40c0-22.1-17.9-40-40-40L232 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48zM192 232l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40zM320 424c0-22.1-17.9-40-40-40l-48 0c-22.1 0-40 17.9-40 40l0 48c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-48z"/></svg>',indeterminate:'<svg part="indeterminate-icon" class="icon" viewBox="0 0 16 16"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"><g stroke="currentColor" stroke-width="2"><g transform="translate(2.285714 6.857143)"><path d="M10.2857143,1.14285714 L1.14285714,1.14285714"/></g></g></g></svg>',minus:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z"/></svg>',pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M48 32C21.5 32 0 53.5 0 80L0 432c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48L48 32zm224 0c-26.5 0-48 21.5-48 48l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0z"/></svg>',play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M91.2 36.9c-12.4-6.8-27.4-6.5-39.6 .7S32 57.9 32 72l0 368c0 14.1 7.5 27.2 19.6 34.4s27.2 7.5 39.6 .7l336-184c12.8-7 20.8-20.5 20.8-35.1s-8-28.1-20.8-35.1l-336-184z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"/></svg>',user:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"/></svg>',xmark:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg>'},regular:{"circle-question":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M464 256a208 208 0 1 0 -416 0 208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256-80c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>',"circle-xmark":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c-9.4 9.4-9.4 24.6 0 33.9l55 55-55 55c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l55-55 55 55c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-55-55 55-55c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-55 55-55-55c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>',copy:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l58.5 58.5c3 3 4.7 7.1 4.7 11.3L400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-197.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-48 0 0 16c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l16 0 0-48-16 0z"/></svg>',eye:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288 80C222.8 80 169.2 109.6 128.1 147.7 89.6 183.5 63 226 49.4 256 63 286 89.6 328.5 128.1 364.3 169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256 513 226 486.4 183.5 447.9 147.7 406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1 3.3 7.9 3.3 16.7 0 24.6-14.9 35.7-46.2 87.7-93 131.1-47.1 43.7-111.8 80.6-192.6 80.6S142.5 443.2 95.4 399.4c-46.8-43.5-78.1-95.4-93-131.1-3.3-7.9-3.3-16.7 0-24.6 14.9-35.7 46.2-87.7 93-131.1zM288 336c44.2 0 80-35.8 80-80 0-29.6-16.1-55.5-40-69.3-1.4 59.7-49.6 107.9-109.3 109.3 13.8 23.9 39.7 40 69.3 40zm-79.6-88.4c2.5 .3 5 .4 7.6 .4 35.3 0 64-28.7 64-64 0-2.6-.2-5.1-.4-7.6-37.4 3.9-67.2 33.7-71.1 71.1zm45.6-115c10.8-3 22.2-4.5 33.9-4.5 8.8 0 17.5 .9 25.8 2.6 .3 .1 .5 .1 .8 .2 57.9 12.2 101.4 63.7 101.4 125.2 0 70.7-57.3 128-128 128-61.6 0-113-43.5-125.2-101.4-1.8-8.6-2.8-17.5-2.8-26.6 0-11 1.4-21.8 4-32 .2-.7 .3-1.3 .5-1.9 11.9-43.4 46.1-77.6 89.5-89.5z"/></svg>',"eye-slash":'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM176.9 111.1c32.1-18.9 69.2-31.1 111.1-31.1 65.2 0 118.8 29.6 159.9 67.7 38.5 35.7 65.1 78.3 78.6 108.3-13.6 30-40.2 72.5-78.6 108.3-3.1 2.8-6.2 5.6-9.4 8.4L393.8 328c14-20.5 22.2-45.3 22.2-72 0-70.7-57.3-128-128-128-26.7 0-51.5 8.2-72 22.2l-39.1-39.1zm182 182l-108-108c11.1-5.8 23.7-9.1 37.1-9.1 44.2 0 80 35.8 80 80 0 13.4-3.3 26-9.1 37.1zM103.4 173.2l-34-34c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6L352.2 422c-20 6.4-41.4 10-64.2 10-65.2 0-118.8-29.6-159.9-67.7-38.5-35.7-65.1-78.3-78.6-108.3 10.4-23.1 28.6-53.6 54-82.8z"/></svg>',star:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc. --><path fill="currentColor" d="M288.1-32c9 0 17.3 5.1 21.4 13.1L383 125.3 542.9 150.7c8.9 1.4 16.3 7.7 19.1 16.3s.5 18-5.8 24.4L441.7 305.9 467 465.8c1.4 8.9-2.3 17.9-9.6 23.2s-17 6.1-25 2L288.1 417.6 143.8 491c-8 4.1-17.7 3.3-25-2s-11-14.2-9.6-23.2L134.4 305.9 20 191.4c-6.4-6.4-8.6-15.8-5.8-24.4s10.1-14.9 19.1-16.3l159.9-25.4 73.6-144.2c4.1-8 12.4-13.1 21.4-13.1zm0 76.8L230.3 158c-3.5 6.8-10 11.6-17.6 12.8l-125.5 20 89.8 89.9c5.4 5.4 7.9 13.1 6.7 20.7l-19.8 125.5 113.3-57.6c6.8-3.5 14.9-3.5 21.8 0l113.3 57.6-19.8-125.5c-1.2-7.6 1.3-15.3 6.7-20.7l89.8-89.9-125.5-20c-7.6-1.2-14.1-6-17.6-12.8L288.1 44.8z"/></svg>'}},vF={name:"system",resolver:(w,f="classic",q="solid")=>{let Z=g8[q][w]??g8.regular[w]??g8.regular["circle-question"];if(Z)return uF(Z);return""}},T9=vF;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var dF="classic",lF=[c9,T9],y8=[];function k9(w){y8.push(w)}function O9(w){y8=y8.filter((f)=>f!==w)}function k4(w){return lF.find((f)=>f.name===w)}function V9(){return dF}var pF=!0,Xz=pF&&window.ShadyDOM?.inUse&&window.ShadyDOM?.noPatch===!0?window.ShadyDOM.wrap:(w)=>w;var A9=(w,f)=>f===void 0?w?._$litType$!==void 0:w?._$litType$===f;var C9=(w)=>w.strings===void 0;var sF={},D9=(w,f=sF)=>w._$committedValue=f;/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var iF=class extends Event{constructor(){super("wa-error",{bubbles:!0,cancelable:!1,composed:!0})}},nF=`:host {
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
`,J2=Symbol(),O4=Symbol(),m8,$8=new Map,s=class extends I1{constructor(){super(...arguments);this.svg=null,this.autoWidth=!1,this.swapOpacity=!1,this.label="",this.library="default",this.resolveIcon=async(w,f)=>{let q;if(f?.spriteSheet){if(!this.hasUpdated)await this.updateComplete;this.svg=d`<svg part="svg">
        <use part="use" href="${w}"></use>
      </svg>`,await this.updateComplete;let K=this.shadowRoot.querySelector("[part='svg']");if(typeof f.mutator==="function")f.mutator(K,this);return this.svg}try{if(q=await fetch(w,{mode:"cors"}),!q.ok)return q.status===410?J2:O4}catch{return O4}try{let K=document.createElement("div");K.innerHTML=await q.text();let Z=K.firstElementChild;if(Z?.tagName?.toLowerCase()!=="svg")return J2;if(!m8)m8=new DOMParser;let X=m8.parseFromString(Z.outerHTML,"text/html").body.querySelector("svg");if(!X)return J2;return X.part.add("svg"),document.adoptNode(X)}catch{return J2}}}connectedCallback(){super.connectedCallback(),k9(this)}firstUpdated(w){super.firstUpdated(w),this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),O9(this)}getIconSource(){let w=k4(this.library),f=this.family||V9();if(this.name&&w)return{url:w.resolver(this.name,f,this.variant,this.autoWidth),fromLibrary:!0};return{url:this.src,fromLibrary:!1}}handleLabelChange(){if(typeof this.label==="string"&&this.label.length>0)this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden");else this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true")}async setIcon(){let{url:w,fromLibrary:f}=this.getIconSource(),q=f?k4(this.library):void 0;if(!w){this.svg=null;return}let K=$8.get(w);if(!K)K=this.resolveIcon(w,q),$8.set(w,K);let Z=await K;if(Z===O4)$8.delete(w);if(w!==this.getIconSource().url)return;if(A9(Z)){this.svg=Z;return}switch(Z){case O4:case J2:this.svg=null,this.dispatchEvent(new iF);break;default:this.svg=Z.cloneNode(!0),q?.mutator?.(this.svg,this),this.dispatchEvent(new N9)}}updated(w){super.updated(w);let f=k4(this.library),q=this.shadowRoot?.querySelector("svg");if(q)f?.mutator?.(q,this)}render(){if(this.hasUpdated)return this.svg;return d`<svg part="svg" fill="currentColor" width="16" height="16"></svg>`}};s.css=nF;L([L0()],s.prototype,"svg",2);L([c({reflect:!0})],s.prototype,"name",2);L([c({reflect:!0})],s.prototype,"family",2);L([c({reflect:!0})],s.prototype,"variant",2);L([c({attribute:"auto-width",type:Boolean,reflect:!0})],s.prototype,"autoWidth",2);L([c({attribute:"swap-opacity",type:Boolean,reflect:!0})],s.prototype,"swapOpacity",2);L([c()],s.prototype,"src",2);L([c()],s.prototype,"label",2);L([c({reflect:!0})],s.prototype,"library",2);L([e1("label")],s.prototype,"handleLabelChange",1);L([e1(["family","name","library","variant","src","autoWidth","swapOpacity"])],s.prototype,"setIcon",1);s=L([b1("wa-icon")],s);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var j8={};X4(j8,{default:()=>V1});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var x8=new Set;function rF(){let w=document.documentElement.clientWidth;return Math.abs(window.innerWidth-w)}function aF(){let w=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));if(isNaN(w)||!w)return 0;return w}function b8(w){if(x8.add(w),!document.documentElement.classList.contains("wa-scroll-lock")){let f=rF()+aF(),q=getComputedStyle(document.documentElement).scrollbarGutter;if(!q||q==="auto")q="stable";if(f<2)q="";document.documentElement.style.setProperty("--wa-scroll-lock-gutter",q),document.documentElement.classList.add("wa-scroll-lock"),document.documentElement.style.setProperty("--wa-scroll-lock-size",`${f}px`)}}function h8(w){if(x8.delete(w),x8.size===0)document.documentElement.classList.remove("wa-scroll-lock"),document.documentElement.style.removeProperty("--wa-scroll-lock-size")}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function R9(w){return w.split(" ").map((f)=>f.trim()).filter((f)=>f!=="")}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var W9=class extends Event{constructor(){super("wa-after-hide",{bubbles:!0,cancelable:!1,composed:!0})}},S9=class extends Event{constructor(){super("wa-after-show",{bubbles:!0,cancelable:!1,composed:!0})}},I9=class extends Event{constructor(w){super("wa-hide",{bubbles:!0,cancelable:!0,composed:!0});this.detail=w}},P9=class extends Event{constructor(){super("wa-show",{bubbles:!0,cancelable:!0,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function U2(w,f){return new Promise((q)=>{let K=new AbortController,{signal:Z}=K;if(w.classList.contains(f))return;w.classList.remove(f),w.classList.add(f);let Q=()=>{w.classList.remove(f),q(),K.abort()};w.addEventListener("animationend",Q,{once:!0,signal:Z}),w.addEventListener("animationcancel",Q,{once:!0,signal:Z})})}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var tF=`:host {
  --size: 25rem;
  --spacing: var(--wa-space-l);
  --show-duration: 200ms;
  --hide-duration: 200ms;

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
`,V1=class extends I1{constructor(){super(...arguments);this.localize=new X0(this),this.hasSlotController=new $0(this,"footer","header-actions","label"),this.open=!1,this.label="",this.placement="end",this.withoutHeader=!1,this.lightDismiss=!0,this.handleDocumentKeyDown=(w)=>{if(w.key==="Escape"&&this.open)w.preventDefault(),w.stopPropagation(),this.requestClose(this.drawer)}}firstUpdated(){if(S1)return;if(this.open)this.addOpenListeners(),this.drawer.showModal(),b8(this)}disconnectedCallback(){super.disconnectedCallback(),h8(this),this.removeOpenListeners()}async requestClose(w){let f=new I9({source:w});if(this.dispatchEvent(f),f.defaultPrevented){this.open=!0,U2(this.drawer,"pulse");return}this.removeOpenListeners(),await U2(this.drawer,"hide"),this.open=!1,this.drawer.close(),h8(this);let q=this.originalTrigger;if(typeof q?.focus==="function")setTimeout(()=>q.focus());this.dispatchEvent(new W9)}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}handleDialogCancel(w){if(w.preventDefault(),!this.drawer.classList.contains("hide")&&w.target===this.drawer)this.requestClose(this.drawer)}handleDialogClick(w){let q=w.target.closest('[data-drawer="close"]');if(q)w.stopPropagation(),this.requestClose(q)}async handleDialogPointerDown(w){if(w.target===this.drawer)if(this.lightDismiss)this.requestClose(this.drawer);else await U2(this.drawer,"pulse")}handleOpenChange(){if(this.open&&!this.drawer.open)this.show();else if(this.drawer.open)this.open=!0,this.requestClose(this.drawer)}async show(){let w=new P9;if(this.dispatchEvent(w),w.defaultPrevented){this.open=!1;return}this.addOpenListeners(),this.originalTrigger=document.activeElement,this.open=!0,this.drawer.showModal(),b8(this),requestAnimationFrame(()=>{let f=this.querySelector("[autofocus]");if(f&&typeof f.focus==="function")f.focus();else this.drawer.focus()}),await U2(this.drawer,"show"),this.dispatchEvent(new S9)}render(){let w=!this.withoutHeader,f=this.hasSlotController.test("footer");return d`
      <dialog
        part="dialog"
        class=${x0({drawer:!0,open:this.open,top:this.placement==="top",end:this.placement==="end",bottom:this.placement==="bottom",start:this.placement==="start"})}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${w?d`
              <header part="header" class="header">
                <h2 part="title" class="title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(8203)} </slot>
                </h2>
                <div part="header-actions" class="header-actions">
                  <slot name="header-actions"></slot>
                  <wa-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="close"
                    appearance="plain"
                    @click="${(q)=>this.requestClose(q.target)}"
                  >
                    <wa-icon
                      name="xmark"
                      label=${this.localize.term("close")}
                      library="system"
                      variant="solid"
                    ></wa-icon>
                  </wa-button>
                </div>
              </header>
            `:""}

        <div part="body" class="body"><slot></slot></div>

        ${f?d`
              <footer part="footer" class="footer">
                <slot name="footer"></slot>
              </footer>
            `:""}
      </dialog>
    `}};V1.css=tF;L([c0(".drawer")],V1.prototype,"drawer",2);L([c({type:Boolean,reflect:!0})],V1.prototype,"open",2);L([c({reflect:!0})],V1.prototype,"label",2);L([c({reflect:!0})],V1.prototype,"placement",2);L([c({attribute:"without-header",type:Boolean,reflect:!0})],V1.prototype,"withoutHeader",2);L([c({attribute:"light-dismiss",type:Boolean})],V1.prototype,"lightDismiss",2);L([e1("open",{waitUntilFirstUpdate:!0})],V1.prototype,"handleOpenChange",1);V1=L([b1("wa-drawer")],V1);document.addEventListener("click",(w)=>{let f=w.target.closest("[data-drawer]");if(f instanceof Element){let[q,K]=R9(f.getAttribute("data-drawer")||"");if(q==="open"&&K?.length){let Q=f.getRootNode().getElementById(K);if(Q?.localName==="wa-drawer")Q.open=!0;else console.warn(`A drawer with an ID of "${K}" could not be found in this document.`)}}});if(!S1)document.body.addEventListener("pointerdown",()=>{});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var o8={};X4(o8,{default:()=>s});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var u8={};X4(u8,{default:()=>S});/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var E9=class extends Event{constructor(){super("wa-clear",{bubbles:!0,cancelable:!1,composed:!0})}};/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */function g9(w,f){let q=w.metaKey||w.ctrlKey||w.shiftKey||w.altKey;if(w.key==="Enter"&&!q)setTimeout(()=>{if(!w.defaultPrevented&&!w.isComposing)eF(f)})}function eF(w){let f=null;if("form"in w)f=w.form;if(!f&&"getForm"in w)f=w.getForm();if(!f)return;let q=[...f.elements];if(q.length===1){f.requestSubmit(null);return}let K=q.find((Z)=>Z.type==="submit"&&!Z.matches(":disabled"));if(!K)return;if(["input","button"].includes(K.localName))f.requestSubmit(K);else K.click()}/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var y9=`:host {
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
`;class m9 extends B2{constructor(w){super(w);if(!(w.type===w0.PROPERTY||w.type===w0.ATTRIBUTE||w.type===w0.BOOLEAN_ATTRIBUTE))throw Error("The `live` directive is not allowed on child or event bindings");if(!C9(w))throw Error("`live` bindings can only contain a single expression")}render(w){return w}update(w,[f]){if(f===Z1||f===x)return f;let{element:q,name:K}=w;if(w.type===w0.PROPERTY){if(f===q[K])return Z1}else if(w.type===w0.BOOLEAN_ATTRIBUTE){if(!!f===q.hasAttribute(K))return Z1}else if(w.type===w0.ATTRIBUTE){if(q.getAttribute(K)===String(f))return Z1}return D9(w),f}}var $9=c4(m9);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var wq=`:host {
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
`,S=class extends N1{constructor(){super(...arguments);this.assumeInteractionOn=["blur","input"],this.hasSlotController=new $0(this,"hint","label"),this.localize=new X0(this),this.title="",this.type="text",this._value=null,this.defaultValue=this.getAttribute("value")||null,this.size="medium",this.appearance="outlined",this.pill=!1,this.label="",this.hint="",this.withClear=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.withoutSpinButtons=!1,this.form=null,this.required=!1,this.spellcheck=!0,this.withLabel=!1,this.withHint=!1}static get validators(){return[...super.validators,G4()]}get value(){if(this.valueHasChanged)return this._value;return this._value??this.defaultValue}set value(w){if(this._value===w)return;this.valueHasChanged=!0,this._value=w}handleChange(w){this.value=this.input.value,this.relayNativeEvent(w,{bubbles:!0,composed:!0})}handleClearClick(w){if(w.preventDefault(),this.value!=="")this.value="",this.updateComplete.then(()=>{this.dispatchEvent(new E9),this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))});this.input.focus()}handleInput(){this.value=this.input.value}handleKeyDown(w){g9(w,this)}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}updated(w){if(super.updated(w),w.has("value"))this.customStates.set("blank",!this.value)}handleStepChange(){this.input.step=String(this.step),this.updateValidity()}focus(w){this.input.focus(w)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(w,f,q="none"){this.input.setSelectionRange(w,f,q)}setRangeText(w,f,q,K="preserve"){let Z=f??this.input.selectionStart,Q=q??this.input.selectionEnd;if(this.input.setRangeText(w,Z,Q,K),this.value!==this.input.value)this.value=this.input.value}showPicker(){if("showPicker"in HTMLInputElement.prototype)this.input.showPicker()}stepUp(){if(this.input.stepUp(),this.value!==this.input.value)this.value=this.input.value}stepDown(){if(this.input.stepDown(),this.value!==this.input.value)this.value=this.input.value}formResetCallback(){this.value=this.defaultValue,super.formResetCallback()}render(){let w=this.hasUpdated?this.hasSlotController.test("label"):this.withLabel,f=this.hasUpdated?this.hasSlotController.test("hint"):this.withHint,q=this.label?!0:!!w,K=this.hint?!0:!!f,Z=this.withClear&&!this.disabled&&!this.readonly,Q=(S1||this.hasUpdated)&&Z&&(typeof this.value==="number"||this.value&&this.value.length>0);return d`
      <label part="form-control-label label" class="label" for="input" aria-hidden=${q?"false":"true"}>
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
          name=${$(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${$(this.placeholder)}
          minlength=${$(this.minlength)}
          maxlength=${$(this.maxlength)}
          min=${$(this.min)}
          max=${$(this.max)}
          step=${$(this.step)}
          .value=${$9(this.value??"")}
          autocapitalize=${$(this.autocapitalize)}
          autocomplete=${$(this.autocomplete)}
          autocorrect=${$(this.autocorrect)}
          ?autofocus=${this.autofocus}
          spellcheck=${this.spellcheck}
          pattern=${$(this.pattern)}
          enterkeyhint=${$(this.enterkeyhint)}
          inputmode=${$(this.inputmode)}
          aria-describedby="hint"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @keydown=${this.handleKeyDown}
        />

        ${Q?d`
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
        ${this.passwordToggle&&!this.disabled?d`
              <button
                part="password-toggle-button"
                class="password-toggle"
                type="button"
                aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                @click=${this.handlePasswordToggle}
                tabindex="-1"
              >
                ${!this.passwordVisible?d`
                      <slot name="show-password-icon">
                        <wa-icon name="eye" library="system" variant="regular"></wa-icon>
                      </slot>
                    `:d`
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
        class=${x0({"has-slotted":K})}
        aria-hidden=${K?"false":"true"}
        >${this.hint}</slot
      >
    `}};S.css=[N4,y9,wq];S.shadowRootOptions={...N1.shadowRootOptions,delegatesFocus:!0};L([c0("input")],S.prototype,"input",2);L([c()],S.prototype,"title",2);L([c({reflect:!0})],S.prototype,"type",2);L([L0()],S.prototype,"value",1);L([c({attribute:"value",reflect:!0})],S.prototype,"defaultValue",2);L([c({reflect:!0})],S.prototype,"size",2);L([c({reflect:!0})],S.prototype,"appearance",2);L([c({type:Boolean,reflect:!0})],S.prototype,"pill",2);L([c()],S.prototype,"label",2);L([c({attribute:"hint"})],S.prototype,"hint",2);L([c({attribute:"with-clear",type:Boolean})],S.prototype,"withClear",2);L([c()],S.prototype,"placeholder",2);L([c({type:Boolean,reflect:!0})],S.prototype,"readonly",2);L([c({attribute:"password-toggle",type:Boolean})],S.prototype,"passwordToggle",2);L([c({attribute:"password-visible",type:Boolean})],S.prototype,"passwordVisible",2);L([c({attribute:"without-spin-buttons",type:Boolean})],S.prototype,"withoutSpinButtons",2);L([c({reflect:!0})],S.prototype,"form",2);L([c({type:Boolean,reflect:!0})],S.prototype,"required",2);L([c()],S.prototype,"pattern",2);L([c({type:Number})],S.prototype,"minlength",2);L([c({type:Number})],S.prototype,"maxlength",2);L([c()],S.prototype,"min",2);L([c()],S.prototype,"max",2);L([c()],S.prototype,"step",2);L([c()],S.prototype,"autocapitalize",2);L([c()],S.prototype,"autocorrect",2);L([c()],S.prototype,"autocomplete",2);L([c({type:Boolean})],S.prototype,"autofocus",2);L([c()],S.prototype,"enterkeyhint",2);L([c({type:Boolean,converter:{fromAttribute:(w)=>!w||w==="false"?!1:!0,toAttribute:(w)=>w?"true":"false"}})],S.prototype,"spellcheck",2);L([c()],S.prototype,"inputmode",2);L([c({attribute:"with-label",type:Boolean})],S.prototype,"withLabel",2);L([c({attribute:"with-hint",type:Boolean})],S.prototype,"withHint",2);L([e1("step",{waitUntilFirstUpdate:!0})],S.prototype,"handleStepChange",1);S=L([b1("wa-input")],S);/*! Copyright 2025 Fonticons, Inc. - https://webawesome.com/license */var F;var SB=Object.getOwnPropertyDescriptors||(()=>{var w;if(typeof Reflect<"u"&&Reflect.ownKeys)w=Reflect.ownKeys;else{var f=Object.getOwnPropertySymbols||((q)=>[]);w=(q)=>Object.getOwnPropertyNames(q).concat(f(q))}return(q)=>{var K=w(q),Z={},Q=K.length|0,X=0;while(X!==Q){var H=K[X];Object.defineProperty(Z,H,{configurable:!0,enumerable:!0,writable:!0,value:Object.getOwnPropertyDescriptor(q,H)}),X=X+1|0}return Z}})(),a4;function g1(w){this.c=w}F=g1.prototype;F.toString=function(){return String.fromCharCode(this.c)};function a9(w){switch(typeof w){case"string":return n3.l();case"number":if(x6(w))if(w<<24>>24===w)return qX.l();else if(w<<16>>16===w)return QX.l();else return mX.l();else if(b6(w))return yX.l();else return gX.l();case"boolean":return EQ.l();case"undefined":return Mw.l();default:if(w instanceof I)return xX.l();else if(w instanceof g1)return mQ.l();else if(w&&w.$classData)return w.$classData.l();else return null}}function i4(w){switch(typeof w){case"string":return"java.lang.String";case"number":if(x6(w))if(w<<24>>24===w)return"java.lang.Byte";else if(w<<16>>16===w)return"java.lang.Short";else return"java.lang.Integer";else if(b6(w))return"java.lang.Float";else return"java.lang.Double";case"boolean":return"java.lang.Boolean";case"undefined":return"java.lang.Void";default:if(w instanceof I)return"java.lang.Long";else if(w instanceof g1)return"java.lang.Character";else if(w&&w.$classData)return w.$classData.N;else return null.k7()}}function j0(w,f){switch(typeof w){case"string":return bX(w,f);case"number":return EX(w,f);case"boolean":return IQ(w,f);case"undefined":return oK(w,f);default:if(!!(w&&w.$classData)||w===null)return w.i(f);else if(w instanceof I)return $X(w,f);else if(w instanceof g1)return yQ(c2(w),f);else return O0.prototype.i.call(w,f)}}function fq(w){switch(typeof w){case"string":return A1(w);case"number":return Bf(w);case"boolean":return PQ(w);case"undefined":return uK(w);default:if(!!(w&&w.$classData)||w===null)return w.r();else if(w instanceof I)return _X(w);else if(w instanceof g1)return gQ(c2(w));else return O0.prototype.r.call(w)}}function t9(w){return w===void 0?"undefined":w.toString()}function Fq(w,f){if(f===0)throw new t0("/ by zero");else return w/f|0}function qq(w,f){if(f===0)throw new t0("/ by zero");else return w%f|0}function Kq(w){return w>2147483647?2147483647:w<-2147483648?-2147483648:w|0}function n4(w){return String.fromCharCode(w)}function t4(w,f,q,K,Z){if(w!==q||K<f||(f+Z|0)<K)for(var Q=0;Q<Z;Q=Q+1|0)q[K+Q|0]=w[f+Q|0];else for(var Q=Z-1|0;Q>=0;Q=Q-1|0)q[K+Q|0]=w[f+Q|0]}var _9=0,x9=new WeakMap;function _6(w){switch(typeof w){case"string":return A1(w);case"number":return Bf(w);case"bigint":{var f=0;if(w<BigInt(0))w=~w;while(w!==BigInt(0))f=f^Number(BigInt.asIntN(32,w)),w=w>>BigInt(32);return f}case"boolean":return w?1231:1237;case"undefined":return 0;case"symbol":{var q=w.description;return q===void 0?0:A1(q)}default:if(w===null)return 0;else{var K=x9.get(w);if(K===void 0)K=_9+1|0,_9=K,x9.set(w,K);return K}}}function Zq(w){return typeof w==="number"&&w<<24>>24===w&&1/w!==-1/0}function Qq(w){return typeof w==="number"&&w<<16>>16===w&&1/w!==-1/0}function x6(w){return typeof w==="number"&&(w|0)===w&&1/w!==-1/0}function b6(w){return typeof w==="number"&&(w!==w||Math.fround(w)===w)}function j1(w){return new g1(w)}var IB=j1(0);function c2(w){return w===null?0:w.c}function k0(w){return w===null?a4:w}function O0(){}F=O0.prototype;F.constructor=O0;function J(){}J.prototype=F;F.r=function(){return _6(this)};F.i=function(w){return this===w};F.t=function(){var w=this.r();return i4(this)+"@"+(+(w>>>0)).toString(16)};F.toString=function(){return this.t()};function Y1(w){if(typeof w==="number"){this.a=Array(w);for(var f=0;f<w;f++)this.a[f]=null}else this.a=w}F=Y1.prototype=new J;F.constructor=Y1;F.ao=function(w,f,q,K){t4(this.a,w,f.a,q,K)};F.ah=function(){return new Y1(this.a.slice())};function e9(){}e9.prototype=F;function o1(w){if(typeof w==="number"){this.a=Array(w);for(var f=0;f<w;f++)this.a[f]=!1}else this.a=w}F=o1.prototype=new J;F.constructor=o1;F.ao=function(w,f,q,K){t4(this.a,w,f.a,q,K)};F.ah=function(){return new o1(this.a.slice())};function u1(w){if(typeof w==="number")this.a=new Uint16Array(w);else this.a=w}F=u1.prototype=new J;F.constructor=u1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new u1(this.a.slice())};function v1(w){if(typeof w==="number")this.a=new Int8Array(w);else this.a=w}F=v1.prototype=new J;F.constructor=v1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new v1(this.a.slice())};function d1(w){if(typeof w==="number")this.a=new Int16Array(w);else this.a=w}F=d1.prototype=new J;F.constructor=d1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new d1(this.a.slice())};function y1(w){if(typeof w==="number")this.a=new Int32Array(w);else this.a=w}F=y1.prototype=new J;F.constructor=y1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new y1(this.a.slice())};function l1(w){if(typeof w==="number"){this.a=Array(w);for(var f=0;f<w;f++)this.a[f]=a4}else this.a=w}F=l1.prototype=new J;F.constructor=l1;F.ao=function(w,f,q,K){t4(this.a,w,f.a,q,K)};F.ah=function(){return new l1(this.a.slice())};function p1(w){if(typeof w==="number")this.a=new Float32Array(w);else this.a=w}F=p1.prototype=new J;F.constructor=p1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new p1(this.a.slice())};function s1(w){if(typeof w==="number")this.a=new Float64Array(w);else this.a=w}F=s1.prototype=new J;F.constructor=s1;F.ao=function(w,f,q,K){f.a.set(this.a.subarray(w,w+K|0),q)};F.ah=function(){return new s1(this.a.slice())};function Y(){this.C=void 0,this.n=null,this.O=null,this.B=null,this.D=0,this.z=null,this.E="",this.L=void 0,this.A=void 0,this.F=void 0,this.w=void 0,this.J=!1,this.N="",this.X=!1,this.Y=!1,this.Z=!1,this.I=void 0}F=Y.prototype;F.p=function(w,f,q,K,Z){this.n={},this.z=w,this.E=f;var Q=this;if(this.F=(X)=>X===Q,this.N=q,this.X=!0,this.I=(X)=>!1,K!==void 0)this.A=new Y().y(this,K,Z);return this};F.i=function(w,f,q,K){var Z=Object.getOwnPropertyNames(q)[0];if(this.n=q,this.E="L"+f+";",this.F=(Q)=>!!Q.n[Z],this.J=w===2,this.N=f,this.Y=w===1,this.I=K||((Q)=>!!(Q&&Q.$classData&&Q.$classData.n[Z])),typeof w!=="number")w.prototype.$classData=this;return this};F.y=function(w,f,q,K){f.prototype.$classData=this;var Z="["+w.E;this.C=f,this.n={u:1,a:1},this.O=w,this.B=w,this.D=1,this.E=Z,this.N=Z,this.Z=!0;var Q=this;return this.F=K||((X)=>Q===X),this.w=q?(X)=>new f(new q(X)):(X)=>new f(X),this.I=(X)=>X instanceof f,this};F.a=function(w){function f(G){if(typeof G==="number"){this.a=Array(G);for(var B=0;B<G;B++)this.a[B]=null}else this.a=G}var q=f.prototype=new e9;q.constructor=f,q.ao=function(G,B,N,T){t4(this.a,G,B.a,N,T)},q.ah=function(){return new f(this.a.slice())},q.$classData=this;var K=w.B||w,Z=w.D+1,Q="["+w.E;this.C=f,this.n={u:1,a:1},this.O=w,this.B=K,this.D=Z,this.E=Q,this.N=Q,this.Z=!0;var X=(G)=>{var B=G.D;return B===Z?K.F(G.B):B>Z&&K===E1};this.F=X,this.w=(G)=>new f(G);var H=this;return this.I=(G)=>{var B=G&&G.$classData;return!!B&&(B===H||X(B))},this};F.r=function(){if(!this.A)this.A=new Y().a(this);return this.A};F.l=function(){if(!this.L)this.L=new R3(this);return this.L};F.R=function(w){return this===w||this.F(w)};F.S=function(){return this.P?this.P.l():null};F.Q=function(){return this.O?this.O.l():null};F.U=function(w){if(this===ww)throw Xf(new P2);return new(this.r()).C(w)};var E1=new Y;E1.n={};E1.E="Ljava.lang.Object;";E1.F=(w)=>!w.X;E1.N="java.lang.Object";E1.I=(w)=>w!==null;E1.A=new Y().y(E1,Y1,void 0,(w)=>{var f=w.D;return f===1?!w.B.X:f>1});O0.prototype.$classData=E1;var ww=new Y().p(void 0,"V","void",void 0,void 0),PB=new Y().p(!1,"Z","boolean",o1,void 0),Xq=new Y().p(0,"C","char",u1,Uint16Array),EB=new Y().p(0,"B","byte",v1,Int8Array),gB=new Y().p(0,"S","short",d1,Int16Array),yB=new Y().p(0,"I","int",y1,Int32Array),Gq=new Y().p(null,"J","long",l1,void 0),mB=new Y().p(0,"F","float",p1,Float32Array),$B=new Y().p(0,"D","double",s1,Float64Array),Yq=new Y().i(1,"com.raquo.airstream.core.InternalObserver",{am:1});function fw(w){return a9(w).dp()+"@"+w.r()}function s0(w){var f=w.cz();return f===void 0?w.cu():f}function e4(){this.dD=null,V4=this,this.dD=h6().dA(new O((w)=>{return}),h5().cm,!0)}F=e4.prototype=new J;F.constructor=e4;function Hq(){}Hq.prototype=F;F.dA=function(w,f,q){return new E3(w,q,f,this)};var _B=new Y().i(e4,"com.raquo.airstream.core.Observer$",{bp:1}),V4;function h6(){if(!V4)V4=new e4;return V4}function w5(){}F=w5.prototype=new J;F.constructor=w5;function zq(){}zq.prototype=F;F.gI=function(w,f){var q=w.indexOf(f)|0,K=q!==-1;if(K)w.splice(q,1);return K};var xB=new Y().i(w5,"com.raquo.airstream.core.ObserverList$",{br:1}),v8;function Fw(){if(!v8)v8=new w5;return v8}function o0(w){this.cF=null,this.dH=null,this.cG=0,this.cF=w,this.dH=void 0;var f=r4().bW();if(this.cG=f===void 0?1:1+f.cG|0,b0().bY===-1||this.cG>b0().bY)T1().an(new s3(this,b0().bY));else if(h1().C)h1().aI.push(this)|0;else r4().di(this)}F=o0.prototype=new J;F.constructor=o0;function Mq(){}Mq.prototype=F;var j6=new Y().i(o0,"com.raquo.airstream.core.Transaction",{bs:1});function f5(){this.bY=0,this.dI=null,A4=this,this.bY=1000,this.dI=new O((w)=>{throw F1(new v,"Attempted to run Transaction "+w+" after it was already executed.")})}F=f5.prototype=new J;F.constructor=f5;function Bq(){}Bq.prototype=F;F.gi=function(w){try{w.cF.g(w);var f=w.dH;if(f!==void 0)while(f.kc())f.k1().kg(w)}catch(K){var q=K instanceof C1?K:new u(K);T1().an(q)}};var bB=new Y().i(f5,"com.raquo.airstream.core.Transaction$",{bt:1}),A4;function b0(){if(!A4)A4=new f5;return A4}function T2(w){if((w.bZ.length|0)===0){if((w.aI.length|0)>0)new o0(new O((f)=>{while((w.aI.length|0)>0)r4().di(w.aI.shift())}))}else new o0(new O((f)=>{while((w.bZ.length|0)>0){var q=w.bZ.shift();try{q.g(f)}catch(Q){var K=Q instanceof C1?Q:new u(Q);T1().an(K)}}while((w.aI.length|0)>0){var Z=w.aI.shift();r4().di(Z)}}))}function F5(){this.C=!1,this.bZ=null,this.aI=null,C4=this,this.C=!1,this.bZ=j().B(z().b(new(V.r()).C([]))),this.aI=j().B(z().b(new(j6.r()).C([])))}F=F5.prototype=new J;F.constructor=F5;function Jq(){}Jq.prototype=F;var hB=new Y().i(F5,"com.raquo.airstream.core.Transaction$onStart$",{bu:1}),C4;function h1(){if(!C4)C4=new F5;return C4}function qw(w,f){return w.aJ.get(f)}function Kw(w,f){w.c0.unshift(f)}function Uq(w){return w.c0.shift()}function Lq(w,f,q){var K=qw(w,f),Z=K===void 0,Q=K===void 0?j().B(z().b(new(j6.r()).C([]))):K;if(Q.push(q),Z)w.aJ.set(f,Q)}function Nq(w,f){var q=qw(w,f),K=q===void 0||(q.length|0)>0?q:void 0;if(K===void 0)return;else{var Z=K.shift();if((K.length|0)===0)w.aJ.delete(f);return Z}}function q5(){this.c0=null,this.aJ=null,D4=this,this.c0=j().B(z().b(new(j6.r()).C([]))),this.aJ=new Map}F=q5.prototype=new J;F.constructor=q5;function cq(){}cq.prototype=F;F.di=function(w){var f=this.bW();if(f===void 0)Kw(this,w),b0().gi(w),this.hK(w);else Lq(this,f,w)};F.hK=function(w){var f=w;while(!0){var q=this.bW(),K=f;if(!(q!==void 0&&Q1().R(K,q)))throw F1(new v,"Transaction queue error: Completed transaction is not the first in stack. This is a bug in Airstream.");this.j7(f),f.cF=b0().dI;var Z=this.bW();if(Q1().R(Z,void 0))if((this.aJ.size|0)>0){var Q=new B3(0);throw this.aJ.forEach(((X)=>(H,G)=>{var B=X.bE+(H.length|0)|0;X.bE=B})(Q)),F1(new v,"Transaction queue error: Stack cleared, but a total of "+Q.bE+" children for "+(this.aJ.size|0)+" transactions remain. This is a bug in Airstream.")}else return;else b0().gi(Z),f=Z}};F.j7=function(w){var f=w;while(!0){var q=Nq(this,f);if(Q1().R(q,void 0)){Uq(this);var K=this.bW();if(!Q1().R(K,void 0))f=K;else return}else{Kw(this,q);return}}};F.bW=function(){return this.c0[0]};var jB=new Y().i(q5,"com.raquo.airstream.core.Transaction$pendingTransactions$",{bv:1}),D4;function r4(){if(!D4)D4=new q5;return D4}function K5(){}F=K5.prototype=new J;F.constructor=K5;function Tq(){}Tq.prototype=F;var oB=new Y().i(K5,"com.raquo.airstream.eventbus.EventBus$",{bz:1}),d8;function kq(){if(!d8)d8=new K5;return d8}function Zw(w,f){var q=w.ap.indexOf(f)|0;if(q!==-1){if(w.ap.splice(q,1),!w.W.k())f.gB()}else throw F1(new v,"Can not remove DynamicSubscription from DynamicOwner: subscription not found. Did you already kill it?")}function $6(w){while((w.c5.length|0)>0)Zw(w,w.c5.shift())}function Z5(w){this.dQ=null,this.ap=null,this.b0=!1,this.c5=null,this.W=null,this.b1=0,this.dQ=w,this.ap=j().B(z().b(new(b9.r()).C([]))),this.b0=!0,this.c5=j().B(z().b(new(b9.r()).C([]))),this.W=l(),this.b1=0}F=Z5.prototype=new J;F.constructor=Z5;function Oq(){}Oq.prototype=F;F.g1=function(){if(this.W.k()){var w=h1(),f=()=>{var K=new a5(this.dQ);this.W=new G1(K),this.b0=!1,this.b1=0;var Z=0,Q=this.ap.length|0;while(Z<Q){var X=Z+this.b1|0;this.ap[X].gA(K),Z=1+Z|0}$6(this),this.b0=!0,this.b1=0};h1();var q=!0;if(w.C||!q)f();else{w.C=!0;try{f()}finally{w.C=!1,T2(w)}}}else throw F1(new v,"Can not activate "+this+": it is already active")};F.hG=function(){if(!this.W.k()){this.b0=!1;var w=this.ap,f=0,q=w.length|0;while(f<q)w[f].gB(),f=1+f|0;$6(this);var K=this.W;if(!K.k())K.y().ix();$6(this),this.b0=!0,this.W=l()}else throw F1(new v,"Can not deactivate DynamicOwner: it is not active")};F.hf=function(w,f){if(f)this.b1=1+this.b1|0,this.ap.unshift(w);else this.ap.push(w);var q=this.W;if(!q.k()){var K=q.y();w.gA(K)}};F.jd=function(w){if(this.b0)Zw(this,w);else this.c5.push(w)};var uB=new Y().i(Z5,"com.raquo.airstream.ownership.DynamicOwner",{bC:1});function k2(w,f,q){this.c6=null,this.dR=null,this.c7=null,this.c6=w,this.dR=f,this.c7=l(),w.hf(this,q)}F=k2.prototype=new J;F.constructor=k2;function Vq(){}Vq.prototype=F;F.cy=function(){this.c6.jd(this)};F.gA=function(w){var f=h1(),q=()=>{this.c7=this.dR.g(w)};h1();var K=!0;if(f.C||!K)q();else{f.C=!0;try{q()}finally{f.C=!1,T2(f)}}};F.gB=function(){var w=this.c7;if(!w.k())w.y().cy(),this.c7=l()};var b9=new Y().i(k2,"com.raquo.airstream.ownership.DynamicSubscription",{bD:1});function Q5(){}F=Q5.prototype=new J;F.constructor=Q5;function Aq(){}Aq.prototype=F;F.cC=function(w,f,q){return new k2(w,new O((K)=>new G1(f.g(K))),q)};F.gM=function(w,f,q){return new k2(w,new O((K)=>{return f.g(K),l()}),q)};F.js=function(w,f,q){return V0().cC(w,new O((K)=>vZ(f,q,K)),!1)};var vB=new Y().i(Q5,"com.raquo.airstream.ownership.DynamicSubscription$",{bE:1}),l8;function V0(){if(!l8)l8=new Q5;return l8}function Cq(w){w.b2=j().B(z().b(new(Iq.r()).C([])))}function Dq(w){var f=w.b2,q=0,K=f.length|0;while(q<K)o6(f[q]),q=1+q|0;w.b2.length=0}function Rq(w,f){var q=w.b2.indexOf(f)|0;if(q!==-1)w.b2.splice(q,1);else throw F1(new v,"Can not remove Subscription from Owner: subscription not found.")}function Wq(w,f){w.b2.push(f)}function o6(w){if(!w.cI)w.dT.a9(),w.cI=!0;else throw F1(new v,"Can not kill Subscription: it was already killed.")}function i0(w,f){this.dU=null,this.dT=null,this.cI=!1,this.dU=w,this.dT=f,this.cI=!1,w.j2(this)}F=i0.prototype=new J;F.constructor=i0;function Sq(){}Sq.prototype=F;F.cy=function(){o6(this),Rq(this.dU,this)};var Iq=new Y().i(i0,"com.raquo.airstream.ownership.Subscription",{bH:1});function X5(w,f){this.dV=null,this.dW=null,this.aq=null,this.aK=!1,this.dV=w,this.dW=f,this.aq=l(),this.aK=!1}F=X5.prototype=new J;F.constructor=X5;function Pq(){}Pq.prototype=F;F.it=function(){var w=this.aq;return!w.k()&&!w.y().c6.W.k()};F.jk=function(w){if(this.aK)throw F1(new v,"Unable to set owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var f=this.aq;if(!f.k())var q=f.y(),K=q.c6,Z=w===K;else var Z=!1;if(!Z){if(this.it()&&!w.W.k())this.aK=!0;var Q=this.aq;if(!Q.k())Q.y().cy(),this.aq=l();var X=V0().cC(w,new O((H)=>{if(!this.aK)this.dV.a9();return new i0(H,new X1(()=>{if(!this.aK)this.dW.a9()}))}),!1);this.aq=new G1(X),this.aK=!1}};F.hy=function(){if(this.aK)throw F1(new v,"Unable to clear owner on DynamicTransferableSubscription while a transfer on this subscription is already in progress.");var w=this.aq;if(!w.k())w.y().cy();this.aq=l()};var dB=new Y().i(X5,"com.raquo.airstream.ownership.TransferableSubscription",{bI:1});function G5(){}F=G5.prototype=new J;F.constructor=G5;function Eq(){}Eq.prototype=F;F.B=function(w){return[...zZ().jy(w)]};var lB=new Y().i(G5,"com.raquo.ew.JsArray$",{bJ:1}),p8;function j(){if(!p8)p8=new G5;return p8}function Y5(){}F=Y5.prototype=new J;F.constructor=Y5;function gq(){}gq.prototype=F;F.ip=function(w,f,q){return(w.indexOf(f,q)|0)!==-1};F.i6=function(w,f){var q=0,K=w.length|0;while(q<K)f(w[q]),q=1+q|0};var pB=new Y().i(Y5,"com.raquo.ew.JsArray$RichJsArray$",{bK:1}),s8;function Qw(){if(!s8)s8=new Y5;return s8}function H5(){this.dX=null,R4=this,document.createElement("template"),this.hE(M().d.jt().ju()),this.dX=new RegExp(" ","g")}F=H5.prototype=new J;F.constructor=H5;function yq(){}yq.prototype=F;F.hk=function(w,f){try{return w.appendChild(f),!0}catch(K){var q=K instanceof C1?K:new u(K);if(q instanceof u&&q.a7 instanceof DOMException)return!1;throw q instanceof u?q.a7:q}};F.iv=function(w,f){var q=w;while(!0){if(q.parentNode!==null)var K=q.parentNode;else var Z=q.host,K=Z===void 0?null:Z;if(K===null)return!1;if(Q1().R(f,K))return!0;q=K}};F.hd=function(w,f){w.addEventListener(f.b5.b3.cd,f.cP,f.cQ)};F.jb=function(w,f){w.removeEventListener(f.b5.b3.cd,f.cP,f.cQ)};F.hD=function(w){return document.createElement(w.ds())};F.ic=function(w,f){var q=this.id(w,f);return q===void 0?void 0:f.b4.ct(q)};F.id=function(w,f){var q=w.I.getAttributeNS(null,f.ar);return q!==null?q:void 0};F.dz=function(w,f,q){this.jh(w,f,f.b4.bR(q))};F.jh=function(w,f,q){if(q===null)this.jc(w,f);else w.I.setAttribute(f.ar,q)};F.jc=function(w,f){w.I.removeAttribute(f.ar)};F.ji=function(w,f,q){this.jj(w,f,f.ez.bR(q))};F.jj=function(w,f,q){w.I[f.as]=q};F.gK=function(w,f,q){var K=w.I,Z=f.ce,Q=f.cf,X=q===null?null:q;if(X===null)Q.ai(new O((G)=>K.style.removeProperty(""+G+Z))),K.style.removeProperty(Z);else{Q.ai(new O((G)=>{var B=K.style;B.setProperty(""+G+Z,X)}));var H=K.style;H.setProperty(Z,X)}};F.hE=function(w){return document.createElementNS("http://www.w3.org/2000/svg",w.eR)};F.ih=function(w,f){var q=this.ii(w,f);return q===void 0?void 0:f.cN.ct(q)};F.ii=function(w,f){var q=w.dx(),K=f.ch,Z=q.getAttributeNS(K.k()?null:K.y(),f.cO),Q=Z;return Q!==null?Q:void 0};F.jl=function(w,f,q){this.jm(w,f,f.cN.bR(q))};F.jm=function(w,f,q){if(q===null)this.je(w,f);else{var K=f.ch;if(K.k())w.dx().setAttribute(f.cg,q);else{var Z=K.y();w.dx().setAttributeNS(Z,f.cg,q)}}};F.je=function(w,f){var q=w.dx(),K=f.ch;q.removeAttributeNS(K.k()?null:K.y(),f.cO)};F.hF=function(w){return document.createTextNode(w)};F.iu=function(w){return Nw().hB(w.tagName,45)};F.hH=function(w,f){var q=f,K=w;while(!0){if(K===null)return q;var Z=K.parentNode,Q=new p0(this.gk(K),q);K=Z,q=Q}};F.gk=function(w){if(w instanceof HTMLElement){var f=w.id;if(f!=="")var q="#"+f;else var K=w.className,q=K!==""?"."+K.replace(this.dX,"."):"";return w.tagName.toLowerCase()+q}else return w.nodeName};var sB=new Y().i(H5,"com.raquo.laminar.DomApi$",{bL:1}),R4;function h(){if(!R4)R4=new H5;return R4}function z5(w,f,q){this.cK=null,this.dY=null,this.cJ=null,this.cK=w,this.dY=f,this.cJ=q}F=z5.prototype=new J;F.constructor=z5;function mq(){}mq.prototype=F;F.ai=function(w){if(this.cK!==null)this.cK.ai(w);else if(this.cJ!==null)Qw().i6(this.cJ,AQ().ia(w));else Uw().i7(this.dY,w)};var iB=new Y().i(z5,"com.raquo.laminar.Seq",{bM:1});function M5(){}F=M5.prototype=new J;F.constructor=M5;function $q(){}$q.prototype=F;var nB=new Y().i(M5,"com.raquo.laminar.Seq$",{bN:1}),i8;function _q(){if(!i8)i8=new M5;return i8}function xq(w){w.cL=h6(),T1(),w.gT=kq()}function bq(w){w.gU=u6()}function hq(w){jq(w,new O((f)=>{f.eB.I.focus()}))}function jq(w,f){return new D2(new O((q)=>{var K=new M3(!q.ag.W.k()),Z=new O((Q)=>{if(K.cq){var X=!1;K.cq=X}else f.g(Q)});V0().gM(q.ag,new O(((Q)=>(X)=>{Z.g(new A0(Q,X))})(q)),!1)}),u6())}function B5(){this.a5=null,this.er=null,this.bu=null,W4=this,this.a5=new h0(o()),new h0(o()),this.er=new h0(o()),this.bu=new t5}F=B5.prototype=new J;F.constructor=B5;function oq(){}oq.prototype=F;var rB=new Y().i(B5,"com.raquo.laminar.codecs.package$",{bV:1}),W4;function o(){if(!W4)W4=new B5;return W4}function uq(w){w.gV=vq(w,"class"," ")}function Xw(w,f){return H1(new z1,"data-"+f,o().a5)}function vq(w,f,q){var K=H1(new z1,f,o().a5);return new C2(K.ar,new O((Z)=>{var Q=h().ic(Z,K);return Q===void 0?"":Q}),new P0((Z,Q)=>{h().dz(Z,K,Q)}),q)}function dq(w){w.gS=lq(w,"class"," ")}function lq(w,f,q){var K=new w3(f,o().a5,l());return new C2(K.cg,new O((Z)=>{var Q=h().ih(Z,K);return Q===void 0?"":Q}),new P0((Z,Q)=>{h().jl(Z,K,Q)}),q)}function J5(){this.ew=null,S4=this,M().d.gP(),j().B(z().b(new(L6.r()).C([M().d.du()]))),M().d.gP(),j().B(z().b(new(L6.r()).C([M().d.du(),M().d.iU()]))),M().d.hx(),j().B(z().b(new(L6.r()).C([M().d.du(),M().d.bU()]))),this.ew=j().B(z().b(new(n3.r()).C(["value","checked"])))}F=J5.prototype=new J;F.constructor=J5;function pq(){}pq.prototype=F;var aB=new Y().i(J5,"com.raquo.laminar.inputs.InputController$",{ca:1}),S4;function sq(){if(!S4)S4=new J5;return S4}function O2(w){this.c8=null,this.c8=w}F=O2.prototype=new J;F.constructor=O2;function iq(){}iq.prototype=F;F.gD=function(w,f){try{this.c8.dk(w,f)}catch(K){var q=K instanceof C1?K:new u(K);T1().an(q)}};F.hz=function(w){return new O2(new P0((f,q)=>{this.c8.dk(f,q),w.c8.dk(f,q)}))};F.hl=function(w){return w===void 0?this:w.hz(this)};var tB=new Y().i(O2,"com.raquo.laminar.inserters.InserterHooks",{cd:1});function U5(){}F=U5.prototype=new J;F.constructor=U5;function nq(){}nq.prototype=F;F.L=function(w,f){return new I2(w,void 0)};var eB=new Y().i(U5,"com.raquo.laminar.inserters.StaticChildInserter$",{cf:1}),n8;function r(){if(!n8)n8=new U5;return n8}function L5(w,f){this.ey=null,this.ex=null,this.ey=w,this.ex=f}F=L5.prototype=new J;F.constructor=L5;function rq(){}rq.prototype=F;F.l=function(w){return new S0(this.ey,this.ex.g(w),new H0((f,q,K)=>{h().gK(f,q,K)}))};var wJ=new Y().i(L5,"com.raquo.laminar.keys.DerivedStyleProp",{ci:1});function n0(w,f,q,K){this.b3=null,this.cc=!1,this.cb=!1,this.ca=null,this.b3=w,this.cc=f,this.cb=q,this.ca=K}F=n0.prototype=new J;F.constructor=n0;function aq(){}aq.prototype=F;F.iB=function(w){var f=new O((q)=>{var K=this.ca.g(q);return K.k()?l():new G1(w.g(K.y()))});return new n0(this.b3,this.cc,this.cb,f)};F.dr=function(w){var f=new O((q)=>{var K=this.ca.g(q);return K.k()?l():new G1((K.y(),w.a9()))});return new n0(this.b3,this.cc,this.cb,f)};var fJ=new Y().i(n0,"com.raquo.laminar.keys.EventProcessor",{cj:1});function N5(){}F=N5.prototype=new J;F.constructor=N5;function tq(){}tq.prototype=F;F.bQ=function(w,f,q){return new n0(w,f,q,new O((K)=>new G1(K)))};var FJ=new Y().i(N5,"com.raquo.laminar.keys.EventProcessor$",{ck:1}),r8;function V2(){if(!r8)r8=new N5;return r8}function Gw(){}F=Gw.prototype=new J;F.constructor=Gw;function D0(){}D0.prototype=F;function c5(){this.gW=null,this.gX=null,this.gY=null,this.gZ=null,this.gW="http://www.w3.org/2000/svg",this.gX="http://www.w3.org/1999/xlink",this.gY="http://www.w3.org/XML/1998/namespace",this.gZ="http://www.w3.org/2000/xmlns/"}F=c5.prototype=new J;F.constructor=c5;function eq(){}eq.prototype=F;F.iG=function(w){switch(w){case"svg":return"http://www.w3.org/2000/svg";case"xlink":return"http://www.w3.org/1999/xlink";case"xml":return"http://www.w3.org/XML/1998/namespace";case"xmlns":return"http://www.w3.org/2000/xmlns/";default:throw new K0(w)}};var qJ=new Y().i(c5,"com.raquo.laminar.keys.SvgAttr$",{cn:1}),a8;function wK(){if(!a8)a8=new c5;return a8}function A0(w,f){this.eB=null,this.eA=null,this.eB=w,this.eA=f}F=A0.prototype=new J;F.constructor=A0;function fK(){}fK.prototype=F;var KJ=new Y().i(A0,"com.raquo.laminar.lifecycle.MountContext",{co:1}),k=new Y().i(1,"com.raquo.laminar.modifiers.Modifier",{Q:1});function T5(){this.h0=null,I4=this,this.h0=new f3}F=T5.prototype=new J;F.constructor=T5;function FK(){}FK.prototype=F;var ZJ=new Y().i(T5,"com.raquo.laminar.modifiers.Modifier$",{cs:1}),I4;function u6(){if(!I4)I4=new T5;return I4}function k5(){this.F=null,P4=this,this.F=new F3}F=k5.prototype=new J;F.constructor=k5;function qK(){}qK.prototype=F;var QJ=new Y().i(k5,"com.raquo.laminar.modifiers.RenderableNode$",{cw:1}),P4;function a(){if(!P4)P4=new k5;return P4}function O5(){this.o=null,E4=this,this.o=new G0(new O((w)=>w),A()),new G0(new O((w)=>""+(w|0)),A()),new G0(new O((w)=>""+ +w),A()),new G0(new O((w)=>""+!!w),A()),new G0(new O((w)=>w.jx()),A())}F=O5.prototype=new J;F.constructor=O5;function KK(){}KK.prototype=F;var XJ=new Y().i(O5,"com.raquo.laminar.modifiers.RenderableText$",{cB:1}),E4;function A(){if(!E4)E4=new O5;return E4}function V5(){}F=V5.prototype=new J;F.constructor=V5;function ZK(){}ZK.prototype=F;F.cs=function(w,f,q){var K=new G1(w);if(f.gR(K),q!==void 0)q.gD(w,f);var Z=h().hk(w.aX(),f.aX());if(Z)f.gL(K);return Z};var GJ=new Y().i(V5,"com.raquo.laminar.nodes.ParentNode$",{cE:1}),t8;function A5(){if(!t8)t8=new V5;return t8}function C5(){}F=C5.prototype=new J;F.constructor=C5;function QK(){}QK.prototype=F;F.jC=function(w,f){return V0().cC(w.ag,new O((q)=>f.g(new A0(w,q))),!0)};var YJ=new Y().i(C5,"com.raquo.laminar.nodes.ReactiveElement$",{cG:1}),e8;function XK(){if(!e8)e8=new C5;return e8}function A2(w){this.eN=null,this.eN=new O2(new P0((f,q)=>{w:{var K=q.aX();if(K instanceof Element){K.setAttribute("slot",w);break w}if(K instanceof Text){var Z=T1(),Q=K.textContent,X=f.aX().tagName;Z.an(F1(new v,"Error: You tried to insert a raw text node `"+Q+"` into the `"+w+"` slot of <"+X.toLowerCase()+">.\n - Cause: This is not possible: named slots only accept elements. Your node was inserted into the default slot instead.\n - Suggestion: Wrap your text node into `span()`"));break w}}}))}F=A2.prototype=new J;F.constructor=A2;function GK(){}GK.prototype=F;F.J=function(w){return w.gz(new O((f)=>f.jD(this.eN)))};var HJ=new Y().i(A2,"com.raquo.laminar.nodes.Slot",{cJ:1});function D5(){g4=this,j().B(z().jF(new y1(new Int32Array([0]))))}F=D5.prototype=new J;F.constructor=D5;function YK(){}YK.prototype=F;F.hb=function(){return new O((w)=>{return})};var zJ=new Y().i(D5,"com.raquo.laminar.tags.CustomHtmlTag$",{cL:1}),g4;function h9(){if(!g4)g4=new D5;return g4}function R5(){}F=R5.prototype=new J;F.constructor=R5;function HK(){}HK.prototype=F;F.hh=function(){n().hQ(),n().hW(),n().hX(),n().hY(),n().hZ(),n().i0(),n().i1(),n().i2(),n().i3(),n().hR(),n().hS(),n().hT(),n().hU(),n().hV()};F.hQ=function(){var w=document.querySelector("#example1");if(w!==null){M(),M();var f=new a0;new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((q)=>q.dv().dh(f)),new U((q)=>q.H().l("Drawer")),new U((q)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((K)=>K.V().O()),new U((K)=>K.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([])),z().b(new(k.r()).C([new Y0((M(),V2().bQ(M().d.bU(),!1,!1)).dr(new I0(()=>!0)),new O((q)=>{f.bq.aW(q)})),R(M().d,"Open Drawer",A().o)])))]))))}};F.hW=function(){var w=document.querySelector("#example2");if(w!==null){M(),M();var f=new a0;new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((q)=>q.dv().dh(f)),new U((q)=>q.H().l("Drawer")),new U((q)=>q.jE().l(!0)),new U((q)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((K)=>K.V().O()),new U((K)=>K.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([])),z().b(new(k.r()).C([new Y0((M(),V2().bQ(M().d.bU(),!1,!1)).dr(new I0(()=>!0)),new O((q)=>{f.bq.aW(q)})),R(M().d,"Open Drawer",A().o)])))]))))}};F.hX=function(){var w=document.querySelector("#example3");if(w!==null){M(),M();var f=new a0;new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((q)=>q.dv().dh(f)),new U((q)=>q.H().l("Drawer")),new U((q)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((K)=>K.V().O()),new U((K)=>K.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([])),z().b(new(k.r()).C([new Y0((M(),V2().bQ(M().d.bU(),!1,!1)).dr(new I0(()=>!0)),new O((q)=>{f.bq.aW(q)})),R(M().d,"Open Drawer",A().o)])))]))))}};F.hY=function(){var w=document.querySelector("#example4");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-opening")),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-opening"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.hZ=function(){var w=document.querySelector("#example5");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-dismiss")),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-dismiss"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.i0=function(){var w=document.querySelector("#example6");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-placement-start")),new U((f)=>f.dw().jp()),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer slides in from the start.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-placement-start"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.i1=function(){var w=document.querySelector("#example7");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-placement-top")),new U((f)=>f.dw().jA()),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer slides in from the top.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-placement-top"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.i2=function(){var w=document.querySelector("#example8");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-placement-bottom")),new U((f)=>f.dw().hv()),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer slides in from the bottom.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-placement-bottom"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.i3=function(){var w=document.querySelector("#example9");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-custom-size")),new U((f)=>f.H().l("Drawer")),new U((f)=>f.jq().l("--size: 50%")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer is always 50% of the viewport.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-custom-size"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.hR=function(){var w=document.querySelector("#example10");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-scrolling")),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([M().d.K().D(z().b(new(k.r()).C([M().d.im().gQ().l(150),M().d.hu().l("2px dashed var(--wa-color-surface-border)"),M().d.j4().l("0 1rem"),M().d.j3().D(z().b(new(k.r()).C([R(M().d,"Scroll down and give it a try! \uD83D\uDC47",A().o)])))])))]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-scrolling"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.hS=function(){var w=document.querySelector("#example11");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-header-actions")),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().il().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.hi().j6())])),z().b(new(k.r()).C([new Y0((M(),V2().bQ(M().d.bU(),!1,!1)),new O(((q)=>(K)=>{q.aW(K)})(M().d.cL.dA(new U((q)=>{window.open(window.location.href)}),h5().cm,!0)))),ZQ().m(z().b(new(V.r()).C([new U((q)=>q.iF().l("arrow-up-right-from-square")),new U((q)=>q.H().l("Open in new window"))])),z().b(new(k.r()).C([])))]))),a().F))]))),w1().G,e())),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-header-actions"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.hT=function(){var w=document.querySelector("#example12");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-light-dismiss")),new U((f)=>f.iy().l(!0)),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer closes when the user clicks on the overlay.",A().o)]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-light-dismiss"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};F.hU=function(){var w=document.querySelector("#example13");if(w!==null){M();var f=g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Only this button will close it",A().o)])));new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((q)=>q.ad().l("drawer-deny-close")),new U((q)=>q.H().l("Drawer")),new U((q)=>new Y0((M(),V2().bQ(q.iW(),!1,!1)).iB(new U((K)=>{if(!Q1().R(K.detail.source,f.I))K.preventDefault()})),new O(((K)=>(Z)=>{K.aW(Z)})(M().d.cL.dD)))),new U((q)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(f,a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([R(M().d,"This drawer will only close when you click the button below.",A().o)]))),g().m(z().b(new(V.r()).C([new U((q)=>m1(q.ae(),"drawer","drawer-deny-close"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))}};F.hV=function(){var w=document.querySelector("#example14");if(w!==null)M(),new p(w,M().d.K().D(z().b(new(k.r()).C([B1().m(z().b(new(V.r()).C([new U((f)=>f.ad().l("drawer-autofocus")),new U((f)=>f.H().l("Drawer")),new U((f)=>f1(M().d,t().S().J(z().b(new(q1.r()).C([(M(),r().L(g().m(z().b(new(V.r()).C([new U((q)=>q.V().O()),new U((q)=>q.P().Q())])),z().b(new(k.r()).C([R(M().d,"Close",A().o)]))),a().F))]))),w1().G,e()))])),z().b(new(k.r()).C([XQ().m(z().b(new(V.r()).C([new U((f)=>f.hq().l(!0)),new U((f)=>f.j5().l("I will have focus when the drawer is opened"))])),z().b(new(k.r()).C([])))]))),g().m(z().b(new(V.r()).C([new U((f)=>m1(f.ae(),"drawer","drawer-autofocus"))])),z().b(new(k.r()).C([R(M().d,"Open Drawer",A().o)])))]))))};var MJ=new Y().i(R5,"examples.drawer.Main$package$",{cN:1}),w6;function n(){if(!w6)w6=new R5;return w6}function zK(w){try{n().hh()}catch(f){throw f}}function MK(w,f){return Xw(M().d,f).l("close")}function W5(){this.fa=null,this.fb=!1}F=W5.prototype=new J;F.constructor=W5;function BK(){}BK.prototype=F;F.Q=function(){if(!this.fb)this.fa=MK(this,"drawer"),this.fb=!0;return this.fa};var BJ=new Y().i(W5,"io.github.nguyenyou.webawesome.laminar.CustomKeys$Close$",{cS:1}),f6;function JK(){if(!f6)f6=new W5;return f6}function m1(w,f,q){return Xw(M().d,f).l("open "+q)}function S5(){}F=S5.prototype=new J;F.constructor=S5;function UK(){}UK.prototype=F;var JJ=new Y().i(S5,"io.github.nguyenyou.webawesome.laminar.CustomKeys$Open$",{cT:1}),F6;function LK(){if(!F6)F6=new S5;return F6}function I5(){this.fq=null,this.fr=!1,this.fo=null,this.fp=!1}F=I5.prototype=new J;F.constructor=I5;function NK(){}NK.prototype=F;F.il=function(){if(!this.fr)this.fq=new A2("header-actions"),this.fr=!0;return this.fq};F.S=function(){if(!this.fp)this.fo=new A2("footer"),this.fp=!0;return this.fo};var UJ=new Y().i(I5,"io.github.nguyenyou.webawesome.laminar.Drawer$slots$",{cV:1}),q6;function t(){if(!q6)q6=new I5;return q6}function P5(){this.h2=!1,this.bv=null,this.cj=null,this.fA=null,this.cY=!1,this.h1=0,this.h4=0,this.h3=null,y4=this,this.h2=!0,this.bv=new ArrayBuffer(8),this.cj=new Int32Array(this.bv,0,2),new Float32Array(this.bv,0,2),this.fA=new Float64Array(this.bv,0,1),this.cj[0]=16909060,this.cY=(new Int8Array(this.bv,0,8)[0]|0)===1,this.h1=this.cY?0:1,this.h4=this.cY?1:0,this.h3=null}F=P5.prototype=new J;F.constructor=P5;function cK(){}cK.prototype=F;F.dt=function(w){var f=w|0|0;if(f===w&&1/w!==-1/0)return f;else return this.fA[0]=w,(this.cj[0]|0)^(this.cj[1]|0)};var LJ=new Y().i(P5,"java.lang.FloatingPointBits$",{d7:1}),y4;function Yw(){if(!y4)y4=new P5;return y4}function TK(w,f){var q=y().af("^([^@]*)@(.*?):([0-9]+)(?::([0-9]+))?$"),K=[],Z=0;while(Z<(f.length|0)){var Q=f[Z];if(Q!==""){var X=q.exec(Q);if(X!==null)var H=kK(w,X[1]),G=H[0],B=H[1],N=X[2],T=X[3],D=parseInt(T),W=X[4],_=K.push(new v0(G,B,N,D|0,W!==void 0?parseInt(W)|0:-1));else K.push(new v0("<jscode>",Q,null,-1,-1))|0}Z=1+Z|0}var D1=K.length|0,M0=new(Cw.r()).C(D1);Z=0;while(Z<D1)M0.a[Z]=K[Z],Z=1+Z|0;return M0}function kK(w,f){var q=y().af("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$[bc]_([^\\.]+)(?:\\.prototype)?\\.([^\\.]+)$"),K=y().af("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$(?:ps?|s|f)_((?:_[^_]|[^_])+)__([^\\.]+)$"),Z=y().af("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$ct_((?:_[^_]|[^_])+)__([^\\.]*)$"),Q=y().af("^new (?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$c_([^\\.]+)$"),X=y().af("^(?:Object\\.|\\[object Object\\]\\.|Module\\.)?\\$m_([^\\.]+)$"),H=q.exec(f),G=H!==null?H:K.exec(f);if(G!==null)return[K6(w,G[1]),CK(w,G[2])];else{var B=Z.exec(f),N=B!==null?B:Q.exec(f);if(N!==null)return[K6(w,N[1]),"<init>"];else{var T=X.exec(f);return T!==null?[K6(w,T[1]),"<clinit>"]:["<jscode>",f]}}}function K6(w,f){var q=j9(w);if(jK().fG.call(q,f))var K=j9(w),Z=K[f];else var Z=yK(w,0,f);var Q=Z.split("_").join(".");return Q.split("＿").join("_")}function OK(w){if((1&w.a1)<<24>>24===0){var f={};f.O="java_lang_Object",f.T="java_lang_String";var q=0;while(q<=22){if(q>=2){var K="T"+q,Z="scala_Tuple"+q;f[K]=Z}var Q="F"+q,X="scala_Function"+q;f[Q]=X,q=1+q|0}w.d0=f,w.a1=(1|w.a1)<<24>>24}return w.d0}function j9(w){return(1&w.a1)<<24>>24===0?OK(w):w.d0}function VK(w){if((2&w.a1)<<24>>24===0){var f={};f.sjsr_="scala_scalajs_runtime_",f.sjs_="scala_scalajs_",f.sci_="scala_collection_immutable_",f.scm_="scala_collection_mutable_",f.scg_="scala_collection_generic_",f.sc_="scala_collection_",f.sr_="scala_runtime_",f.s_="scala_",f.jl_="java_lang_",f.ju_="java_util_",w.d1=f,w.a1=(2|w.a1)<<24>>24}return w.d1}function Hw(w){return(2&w.a1)<<24>>24===0?VK(w):w.d1}function AK(w){if((4&w.a1)<<24>>24===0)w.cZ=Object.keys(Hw(w)),w.a1=(4|w.a1)<<24>>24;return w.cZ}function o9(w){return(4&w.a1)<<24>>24===0?AK(w):w.cZ}function CK(w,f){if(f.startsWith("init___"))return"<init>";else{var q=f.indexOf("__")|0;return q<0?f:f.substring(0,q)}}function DK(w,f){return!f?[]:f.arguments&&f.stack?u9(w,f):f.stack&&f.sourceURL?SK(w,f):f.stack&&f.number?WK(w,f):f.stack&&f.fileName?RK(w,f):f.message&&f["opera#sourceloc"]?!f.stacktrace?v9(w,f):f.message.indexOf(`
`)>-1&&f.message.split(`
`).length>f.stacktrace.split(`
`).length?v9(w,f):IK(w,f):f.message&&f.stack&&f.stacktrace?f.stacktrace.indexOf("called from line")<0?PK(w,f):EK(w,f):f.stack&&!f.fileName?u9(w,f):gK(w,f)}function u9(w,f){return(f.stack+`
`).replace(y().af("^[\\s\\S]+?\\s+at\\s+")," at ").replace(y().T("^\\s+(at eval )?at\\s+","gm"),"").replace(y().T("^([^\\(]+?)([\\n])","gm"),"{anonymous}() ($1)$2").replace(y().T("^Object.<anonymous>\\s*\\(([^\\)]+)\\)","gm"),"{anonymous}() ($1)").replace(y().T("^([^\\(]+|\\{anonymous\\}\\(\\)) \\((.+)\\)$","gm"),"$1@$2").split(`
`).slice(0,-1)}function RK(w,f){return f.stack.replace(y().T("(?:\\n@:0)?\\s+$","m"),"").replace(y().T("^(?:\\((\\S*)\\))?@","gm"),"{anonymous}($1)@").split(`
`)}function WK(w,f){var q=f.stack.replace(y().T("^\\s*at\\s+(.*)$","gm"),"$1").replace(y().T("^Anonymous function\\s+","gm"),"{anonymous}() ").replace(y().T("^([^\\(]+|\\{anonymous\\}\\(\\))\\s+\\((.+)\\)$","gm"),"$1@$2").split(`
`);return q.slice(1)}function SK(w,f){return f.stack.replace(y().T("\\[native code\\]\\n","m"),"").replace(y().T("^(?=\\w+Error\\:).*$\\n","m"),"").replace(y().T("^@","gm"),"{anonymous}()@").split(`
`)}function v9(w,f){var q=y().T("Line (\\d+).*script (?:in )?(\\S+)","i"),K=f.message.split(`
`),Z=[],Q=2,X=K.length|0;while(Q<X){var H=q.exec(K[Q]);if(H!==null)Z.push("{anonymous}()@"+H[2]+":"+H[1])|0;Q=2+Q|0}return Z}function IK(w,f){var q=y().T("Line (\\d+).*script (?:in )?(\\S+)(?:: In function (\\S+))?$","i"),K=f.stacktrace.split(`
`),Z=[],Q=0,X=K.length|0;while(Q<X){var H=q.exec(K[Q]);if(H!==null){var G=H[3],B=G!==void 0?G:"{anonymous}";Z.push(B+"()@"+H[2]+":"+H[1])|0}Q=2+Q|0}return Z}function PK(w,f){var q=y().af("^(.*)@(.+):(\\d+)$"),K=f.stacktrace.split(`
`),Z=[],Q=0,X=K.length|0;while(Q<X){var H=q.exec(K[Q]);if(H!==null){var G=H[1],B=G!==void 0?G+"()":"global code";Z.push(B+"@"+H[2]+":"+H[3])|0}Q=1+Q|0}return Z}function EK(w,f){var q=y().af("^.*line (\\d+), column (\\d+)(?: in (.+))? in (\\S+):$"),K=f.stacktrace.split(`
`),Z=[],Q=0,X=K.length|0;while(Q<X){var H=q.exec(K[Q]);if(H!==null){var G=H[4]+":"+H[1]+":"+H[2],B=H[2],N=B!==void 0?B:"global code",T=N.replace(y().af("<anonymous function: (\\S+)>"),"$1").replace(y().af("<anonymous function>"),"{anonymous}");Z.push(T+"@"+G)|0}Q=2+Q|0}return Z}function gK(w,f){return[]}function yK(w,f,q){while(!0)if(f<(o9(w).length|0)){var K=o9(w)[f];if(q.startsWith(K)){var Z=Hw(w);return""+Z[K]+q.substring(K.length)}else f=1+f|0}else return q.startsWith("L")?q.substring(1):q}function E5(){this.d0=null,this.d1=null,this.cZ=null,this.a1=0}F=E5.prototype=new J;F.constructor=E5;function mK(){}mK.prototype=F;F.i4=function(w){return TK(this,DK(this,w))};var NJ=new Y().i(E5,"java.lang.StackTrace$",{de:1}),Z6;function $K(){if(!Z6)Z6=new E5;return Z6}function g5(){}F=g5.prototype=new J;F.constructor=g5;function _K(){}_K.prototype=F;F.af=function(w){return new RegExp(w)};F.T=function(w,f){return new RegExp(w,f)};var cJ=new Y().i(g5,"java.lang.StackTrace$StringRE$",{df:1}),Q6;function y(){if(!Q6)Q6=new g5;return Q6}function y5(){this.fC=null,this.h5=null,m4=this,this.fC=new N2(!1),this.h5=new N2(!0)}F=y5.prototype=new J;F.constructor=y5;function xK(){}xK.prototype=F;var TJ=new Y().i(y5,"java.lang.System$Streams$",{dk:1}),m4;function bK(){if(!m4)m4=new y5;return m4}function m5(){this.fG=null,$4=this,this.fG=Object.prototype.hasOwnProperty}F=m5.prototype=new J;F.constructor=m5;function hK(){}hK.prototype=F;var kJ=new Y().i(m5,"java.lang.Utils$Cache$",{dm:1}),$4;function jK(){if(!$4)$4=new m5;return $4}function oK(w,f){return w===f}function uK(w){return 0}function zw(w,f){return!!(w&&w.$classData&&w.$classData.D===f&&w.$classData.B.n.aJ)}var Mw=new Y().i(0,"java.lang.Void",{aJ:1},(w)=>w===void 0);function vK(w,f){throw KX(new P2,"argument type mismatch")}function $5(){}F=$5.prototype=new J;F.constructor=$5;function dK(){}dK.prototype=F;F.bk=function(w){return w instanceof Y1?w.a.length:w instanceof o1?w.a.length:w instanceof u1?w.a.length:w instanceof v1?w.a.length:w instanceof d1?w.a.length:w instanceof y1?w.a.length:w instanceof l1?w.a.length:w instanceof p1?w.a.length:w instanceof s1?w.a.length:vK(this,w)};var OJ=new Y().i($5,"java.lang.reflect.Array$",{dn:1}),X6;function u0(){if(!X6)X6=new $5;return X6}function _5(){}F=_5.prototype=new J;F.constructor=_5;function lK(){}lK.prototype=F;F.gq=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=Q.e,H=Q.f,G=K,B=f.a[G],N=B.e,T=B.f;if(!(X===N&&H===T))return!1;K=1+K|0}return!0};F.gp=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(Q!==f.a[X])return!1;K=1+K|0}return!0};F.gr=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(Q!==f.a[X])return!1;K=1+K|0}return!0};F.gm=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(Q!==f.a[X])return!1;K=1+K|0}return!0};F.gl=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(Q!==f.a[X])return!1;K=1+K|0}return!0};F.gs=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(Q!==f.a[X])return!1;K=1+K|0}return!0};F.gn=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(!Object.is(Q,f.a[X]))return!1;K=1+K|0}return!0};F.go=function(w,f){if(w===f)return!0;if(w===null||f===null)return!1;var q=w.a.length;if(f.a.length!==q)return!1;var K=0;while(K!==q){var Z=K,Q=w.a[Z],X=K;if(!Object.is(Q,f.a[X]))return!1;K=1+K|0}return!0};var VJ=new Y().i(_5,"java.util.Arrays$",{dp:1}),G6;function i(){if(!G6)G6=new _5;return G6}function I(w,f){this.e=0,this.f=0,this.e=w,this.f=f}F=I.prototype=new J;F.constructor=I;function pK(){}pK.prototype=F;F.i=function(w){return w instanceof I&&(this.e===w.e&&this.f===w.f)};F.r=function(){return this.e^this.f};F.t=function(){return c1().gH(this.e,this.f)};F.kj=function(){return this.e};F.ki=function(){return c1().gG(this.e,this.f)};F.kh=function(){return c1().bV(this.e,this.f)};F.jY=function(){return this.e<<24>>24};F.kf=function(){return this.e<<16>>16};F.k9=function(){return this.e};F.ka=function(){return this};F.k4=function(){return c1().gG(this.e,this.f)};F.k2=function(){return c1().bV(this.e,this.f)};F.k0=function(w){return c1().gE(this.e,this.f,w.e,w.f)};F.jZ=function(w){return c1().gE(this.e,this.f,w.e,w.f)};F.k3=function(w){return this.e===w.e&&this.f===w.f};F.kd=function(w){return!(this.e===w.e&&this.f===w.f)};F.jQ=function(w){var f=this.f,q=w.f;return f===q?(-2147483648^this.e)<(-2147483648^w.e):f<q};F.jR=function(w){var f=this.f,q=w.f;return f===q?(-2147483648^this.e)<=(-2147483648^w.e):f<q};F.jM=function(w){var f=this.f,q=w.f;return f===q?(-2147483648^this.e)>(-2147483648^w.e):f>q};F.jN=function(w){var f=this.f,q=w.f;return f===q?(-2147483648^this.e)>=(-2147483648^w.e):f>q};F.kl=function(){return new I(~this.e,~this.f)};F.jK=function(w){return new I(this.e|w.e,this.f|w.f)};F.jJ=function(w){return new I(this.e&w.e,this.f&w.f)};F.jX=function(w){return new I(this.e^w.e,this.f^w.f)};F.jS=function(w){var f=this.e;return new I((32&w)===0?f<<w:0,(32&w)===0?(f>>>1|0)>>>(31-w|0)|0|this.f<<w:f<<w)};F.jP=function(w){var f=this.f;return new I((32&w)===0?this.e>>>w|0|f<<1<<(31-w|0):f>>>w|0,(32&w)===0?f>>>w|0:0)};F.jO=function(w){var f=this.f;return new I((32&w)===0?this.e>>>w|0|f<<1<<(31-w|0):f>>w,(32&w)===0?f>>w:f>>31)};F.kk=function(){var w=this.e,f=this.f;return new I(-w|0,w!==0?~f:-f|0)};F.jV=function(w){var f=this.e,q=this.f,K=w.f,Z=f+w.e|0;return new I(Z,(-2147483648^Z)<(-2147483648^f)?1+(q+K|0)|0:q+K|0)};F.jT=function(w){var f=this.e,q=this.f,K=w.f,Z=f-w.e|0;return new I(Z,(-2147483648^Z)>(-2147483648^f)?-1+(q-K|0)|0:q-K|0)};F.jW=function(w){var f=this.e,q=w.e,K=65535&f,Z=f>>>16|0,Q=65535&q,X=q>>>16|0,H=Math.imul(K,Q),G=Math.imul(Z,Q),B=Math.imul(K,X),N=H+((G+B|0)<<16)|0,T=(H>>>16|0)+B|0;return new I(N,(((Math.imul(f,w.f)+Math.imul(this.f,q)|0)+Math.imul(Z,X)|0)+(T>>>16|0)|0)+(((65535&T)+G|0)>>>16|0)|0)};F.jL=function(w){var f=c1();return new I(f.hJ(this.e,this.f,w.e,w.f),f.v)};F.jU=function(w){var f=c1();return new I(f.ja(this.e,this.f,w.e,w.f),f.v)};var AJ=new Y().i(I,"org.scalajs.linker.runtime.RuntimeLong",{aK:1});function d9(w,f,q){return(-2097152&q)===0?""+(4294967296*q+ +(f>>>0)):v6(w,f,q,1e9,0,2)}function sK(w,f,q,K,Z){if((-2097152&q)===0)if((-2097152&Z)===0){var Q=4294967296*q+ +(f>>>0),X=4294967296*Z+ +(K>>>0),H=Q/X;return w.v=H/4294967296|0|0,H|0|0}else return w.v=0,0;else if(Z===0&&(K&(-1+K|0))===0){var G=31-(Math.clz32(K)|0)|0;return w.v=q>>>G|0,f>>>G|0|q<<1<<(31-G|0)}else if(K===0&&(Z&(-1+Z|0))===0){var B=31-(Math.clz32(Z)|0)|0;return w.v=0,q>>>B|0}else return v6(w,f,q,K,Z,0)|0}function iK(w,f,q,K,Z){if((-2097152&q)===0)if((-2097152&Z)===0){var Q=4294967296*q+ +(f>>>0),X=4294967296*Z+ +(K>>>0),H=Q%X;return w.v=H/4294967296|0|0,H|0|0}else return w.v=q,f;else if(Z===0&&(K&(-1+K|0))===0)return w.v=0,f&(-1+K|0);else if(K===0&&(Z&(-1+Z|0))===0)return w.v=q&(-1+Z|0),f;else return v6(w,f,q,K,Z,1)|0}function v6(w,f,q,K,Z,Q){var X=(Z!==0?Math.clz32(Z)|0:32+(Math.clz32(K)|0)|0)-(q!==0?Math.clz32(q)|0:32+(Math.clz32(f)|0)|0)|0,H=X,G=(32&H)===0?K<<H:0,B=(32&H)===0?(K>>>1|0)>>>(31-H|0)|0|Z<<H:K<<H,N=G,T=B,D=f,W=q,_=0,D1=0;while(X>=0&&(-2097152&W)!==0){var M0=D,H7=W,$f=N,z7=T;if(H7===z7?(-2147483648^M0)>=(-2147483648^$f):(-2147483648^H7)>=(-2147483648^z7)){var M7=D,B7=W,_f=N,J7=T,U7=M7-_f|0,xf=(-2147483648^U7)>(-2147483648^M7)?-1+(B7-J7|0)|0:B7-J7|0;if(D=U7,W=xf,X<32)_=_|1<<X;else D1=D1|1<<X}X=-1+X|0;var bf=N,L7=T,hf=bf>>>1|0|L7<<31,jf=L7>>>1|0;N=hf,T=jf}var of=D,N7=W;if(N7===Z?(-2147483648^of)>=(-2147483648^K):(-2147483648^N7)>=(-2147483648^Z)){var uf=D,vf=W,c7=4294967296*vf+ +(uf>>>0),T7=4294967296*Z+ +(K>>>0);if(Q!==1){var k7=c7/T7,df=k7|0|0,O7=k7/4294967296|0|0,V7=_,A7=D1,C7=V7+df|0,lf=(-2147483648^C7)<(-2147483648^V7)?1+(A7+O7|0)|0:A7+O7|0;_=C7,D1=lf}if(Q!==0){var D7=c7%T7;D=D7|0|0,W=D7/4294967296|0|0}}if(Q===0)return w.v=D1,_;else if(Q===1)return w.v=W,D;else{var pf=_,sf=D1,nf=4294967296*sf+ +(pf>>>0),rf=D,R7=""+rf,af=R7.length;return""+nf+"000000000".substring(af)+R7}}function x5(){this.v=0}F=x5.prototype=new J;F.constructor=x5;function nK(){}nK.prototype=F;F.gH=function(w,f){return f===w>>31?""+w:f<0?"-"+d9(this,-w|0,w!==0?~f:-f|0):d9(this,w,f)};F.bV=function(w,f){return f<0?-(4294967296*+((w!==0?~f:-f|0)>>>0)+ +((-w|0)>>>0)):4294967296*f+ +(w>>>0)};F.gG=function(w,f){if(f<0)var q=-w|0,K=w!==0?~f:-f|0;else var q=w,K=f;var Z=(-2097152&K)===0||(65535&q)===0?q:32768|-65536&q,Q=4294967296*+(K>>>0)+ +(Z>>>0);return Math.fround(f<0?-Q:Q)};F.k6=function(w){return new I(w,w>>31)};F.k5=function(w){return new I(this.gF(w),this.v)};F.gF=function(w){if(w<-9223372036854776000)return this.v=-2147483648,0;else if(w>=9223372036854776000)return this.v=2147483647,-1;else{var f=w|0|0,q=w/4294967296|0|0;return this.v=w<0&&f!==0?-1+q|0:q,f}};F.gE=function(w,f,q,K){return f===K?w===q?0:(-2147483648^w)<(-2147483648^q)?-1:1:f<K?-1:1};F.hJ=function(w,f,q,K){if((q|K)===0)throw new t0("/ by zero");if(f===w>>31)if(K===q>>31)if(w===-2147483648&&q===-1)return this.v=0,-2147483648;else{var Z=Fq(w,q);return this.v=Z>>31,Z}else if(w===-2147483648&&(q===-2147483648&&K===0))return this.v=-1,-1;else return this.v=0,0;else{if(f<0)var Q=-w|0,X=w!==0?~f:-f|0;else var Q=w,X=f;if(K<0)var H=-q|0,G=q!==0?~K:-K|0;else var H=q,G=K;var B=sK(this,Q,X,H,G);if((f^K)>=0)return B;else{var N=this.v;return this.v=B!==0?~N:-N|0,-B|0}}};F.ja=function(w,f,q,K){if((q|K)===0)throw new t0("/ by zero");if(f===w>>31)if(K===q>>31)if(q!==-1){var Z=qq(w,q);return this.v=Z>>31,Z}else return this.v=0,0;else if(w===-2147483648&&(q===-2147483648&&K===0))return this.v=0,0;else return this.v=f,w;else{if(f<0)var Q=-w|0,X=w!==0?~f:-f|0;else var Q=w,X=f;if(K<0)var H=-q|0,G=q!==0?~K:-K|0;else var H=q,G=K;var B=iK(this,Q,X,H,G);if(f<0){var N=this.v;return this.v=B!==0?~N:-N|0,-B|0}else return B}};var CJ=new Y().i(x5,"org.scalajs.linker.runtime.RuntimeLong$",{dr:1}),Y6;function c1(){if(!Y6)Y6=new x5;return Y6}var rK=new Y().i(1,"scala.Function0",{ae:1}),V=new Y().i(1,"scala.Function1",{e:1});function Bw(){}F=Bw.prototype=new J;F.constructor=Bw;function Jw(){}Jw.prototype=F;function b5(){this.fI=null,this.cm=null,_4=this,this.fI=new U((w)=>h5().fI),this.cm=new b3}F=b5.prototype=new J;F.constructor=b5;function aK(){}aK.prototype=F;var DJ=new Y().i(b5,"scala.PartialFunction$",{dE:1}),_4;function h5(){if(!_4)_4=new b5;return _4}function j5(){this.fL=null,x4=this,this.fL=new U((w)=>Uw().fL)}F=j5.prototype=new J;F.constructor=j5;function tK(){}tK.prototype=F;F.i7=function(w,f){var q=u0().bk(w),K=0;if(w instanceof Y1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof y1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof s1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof l1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof p1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof u1)while(K<q)f.g(j1(w.a[K])),K=1+K|0;else if(w instanceof v1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof d1)while(K<q)f.g(w.a[K]),K=1+K|0;else if(w instanceof o1)while(K<q)f.g(w.a[K]),K=1+K|0;else throw new K0(w)};var RJ=new Y().i(j5,"scala.collection.ArrayOps$",{dK:1}),x4;function Uw(){if(!x4)x4=new j5;return x4}function eK(w,f){var q=w.q();while(q.w())f.g(q.j())}function o5(w,f,q,K){return w.E()===0?""+f+K:w.bG(sG(new X8),f,q,K).Z.u}function Lw(w,f,q,K,Z){var Q=f.Z;if(q.length!==0)Q.u=""+Q.u+q;var X=w.q();if(X.w()){var H=X.j();Q.u=""+Q.u+H;while(X.w()){Q.u=""+Q.u+K;var G=X.j();Q.u=""+Q.u+G}}if(Z.length!==0)Q.u=""+Q.u+Z;return f}function u5(w,f){this.fP=null,this.bB=null,this.fP=w,this.bB=f}F=u5.prototype=new J;F.constructor=u5;function wZ(){}wZ.prototype=F;F.ik=function(){return this.fP.a9().q()};var WJ=new Y().i(u5,"scala.collection.Iterator$ConcatIteratorCell",{e2:1});function v5(){this.fQ=null,b4=this,this.fQ=new U((w)=>Nw().fQ)}F=v5.prototype=new J;F.constructor=v5;function fZ(){}fZ.prototype=F;F.hB=function(w,f){return hX(w,f)>=0};var SJ=new Y().i(v5,"scala.collection.StringOps$",{ea:1}),b4;function Nw(){if(!b4)b4=new v5;return b4}function d5(){}F=d5.prototype=new J;F.constructor=d5;function FZ(){}FZ.prototype=F;F.R=function(w,f){return w===f||(s6(w)?this.hP(w,f):w instanceof g1?this.hN(w,f):w===null?f===null:j0(w,f))};F.hP=function(w,f){if(s6(f))return this.hO(w,f);else if(f instanceof g1)if(typeof w==="number")return+w===f.c;else if(w instanceof I){var q=k0(w),K=q.e,Z=q.f,Q=f.c,X=Q>>31;return K===Q&&Z===X}else return w===null?f===null:j0(w,f);else return w===null?f===null:j0(w,f)};F.hO=function(w,f){if(typeof w==="number"){var q=+w;if(typeof f==="number")return q===+f;else if(f instanceof I){var K=k0(f);return q===c1().bV(K.e,K.f)}else return!1}else if(w instanceof I){var Z=k0(w),Q=Z.e,X=Z.f;if(f instanceof I){var H=k0(f),G=H.e,B=H.f;return Q===G&&X===B}else if(typeof f==="number"){var N=+f;return c1().bV(Q,X)===N}else return!1}else return w===null?f===null:j0(w,f)};F.hN=function(w,f){if(f instanceof g1)return w.c===f.c;else if(s6(f))if(typeof f==="number")return+f===w.c;else if(f instanceof I){var q=k0(f),K=q.e,Z=q.f,Q=w.c,X=Q>>31;return K===Q&&Z===X}else return f===null?w===null:j0(f,w);else return w===null&&f===null};var IJ=new Y().i(d5,"scala.runtime.BoxesRunTime$",{eE:1}),H6;function Q1(){if(!H6)H6=new d5;return H6}var qZ=new Y().i(0,"scala.runtime.Null$",{eH:1});function l5(){}F=l5.prototype=new J;F.constructor=l5;function KZ(){}KZ.prototype=F;F.bi=function(w,f){if(w instanceof Y1)return w.a[f];else if(w instanceof y1)return w.a[f];else if(w instanceof s1)return w.a[f];else if(w instanceof l1)return w.a[f];else if(w instanceof p1)return w.a[f];else if(w instanceof u1)return j1(w.a[f]);else if(w instanceof v1)return w.a[f];else if(w instanceof d1)return w.a[f];else if(w instanceof o1)return w.a[f];else if(w===null)throw new n1;else throw new K0(w)};F.ho=function(w,f,q){if(w instanceof Y1)w.a[f]=q;else if(w instanceof y1)w.a[f]=q|0;else if(w instanceof s1)w.a[f]=+q;else if(w instanceof l1)w.a[f]=k0(q);else if(w instanceof p1)w.a[f]=Math.fround(q);else if(w instanceof u1)w.a[f]=c2(q);else if(w instanceof v1)w.a[f]=q|0;else if(w instanceof d1)w.a[f]=q|0;else if(w instanceof o1)w.a[f]=!!q;else if(w===null)throw new n1;else throw new K0(w)};F.hc=function(w){return o5(w.aG(),w.al()+"(",",",")")};F.b=function(w){return w===null?null:w.a.length===0?dX(Uf()):new E0(w)};F.jF=function(w){return w!==null?new f2(w):null};var PJ=new Y().i(l5,"scala.runtime.ScalaRunTime$",{eI:1}),z6;function z(){if(!z6)z6=new l5;return z6}function p5(){}F=p5.prototype=new J;F.constructor=p5;function ZZ(){}ZZ.prototype=F;F.c=function(w,f){var q=this.cA(w,f),K=q;return q=K<<13|(K>>>19|0),-430675100+Math.imul(5,q)|0};F.cA=function(w,f){var q=f;q=Math.imul(-862048943,q);var K=q;return q=K<<15|(K>>>17|0),q=Math.imul(461845907,q),w^q};F.p=function(w,f){return this.hr(w^f)};F.hr=function(w){var f=w;return f=f^(f>>>16|0),f=Math.imul(-2048144789,f),f=f^(f>>>13|0),f=Math.imul(-1028477387,f),f=f^(f>>>16|0),f};F.bl=function(w){var{e:f,f:q}=w;return q===f>>31?f:f^q};F.ab=function(w){var f=Kq(w);if(f===w)return f;else{var q=c1(),K=q.gF(w),Z=q.v;return c1().bV(K,Z)===w?K^Z:Yw().dt(w)}};F.A=function(w){if(w===null)return 0;else if(typeof w==="number")return this.ab(+w);else if(w instanceof I){var f=k0(w);return this.bl(new I(f.e,f.f))}else return fq(w)};F.bT=function(w){throw d0(new F0,""+w)};var EJ=new Y().i(p5,"scala.runtime.Statics$",{eK:1}),M6;function C(){if(!M6)M6=new p5;return M6}function s5(){}F=s5.prototype=new J;F.constructor=s5;function QZ(){}QZ.prototype=F;F.hn=function(w){return w};var gJ=new Y().i(s5,"scala.scalajs.js.defined$",{eQ:1}),B6;function XZ(){if(!B6)B6=new s5;return B6}function i5(){}F=i5.prototype=new J;F.constructor=i5;function GZ(){}GZ.prototype=F;F.jn=function(w,f){return setTimeout(()=>{f.a9()},w)};var yJ=new Y().i(i5,"scala.scalajs.js.timers.package$",{eR:1}),J6;function YZ(){if(!J6)J6=new i5;return J6}function n5(){}F=n5.prototype=new J;F.constructor=n5;function HZ(){}HZ.prototype=F;F.jy=function(w){var f=[];return w.ai(new U((q)=>f.push(q)|0)),f};var mJ=new Y().i(n5,"scala.scalajs.runtime.Compat$",{f0:1}),U6;function zZ(){if(!U6)U6=new n5;return U6}function d6(){}F=d6.prototype=new J;F.constructor=d6;function MZ(){}MZ.prototype=F;F.jo=function(w){var f=w.gx()===0?"":w.gx()===1?" after first argument":" after "+w.gx()+" arguments",q="Illegal command line"+f+": "+w.kb();xZ().j1().iw(q+`
`)};var $J=new Y().i(d6,"scala.util.CommandLineParser$",{f2:1});function r5(w){this.dg=null,this.dg=w}F=r5.prototype=new J;F.constructor=r5;function BZ(){}BZ.prototype=F;F.t=function(){return"DynamicVariable("+this.dg+")"};var _J=new Y().i(r5,"scala.util.DynamicVariable",{f4:1});function cw(){}F=cw.prototype=new J;F.constructor=cw;function Tw(){}Tw.prototype=F;F.c=function(w,f){var q=this.cA(w,f),K=q;return q=K<<13|(K>>>19|0),-430675100+Math.imul(5,q)|0};F.cA=function(w,f){var q=f;q=Math.imul(-862048943,q);var K=q;return q=K<<15|(K>>>17|0),q=Math.imul(461845907,q),w^q};F.p=function(w,f){return this.U(w^f)};F.U=function(w){var f=w;return f=f^(f>>>16|0),f=Math.imul(-2048144789,f),f=f^(f>>>13|0),f=Math.imul(-1028477387,f),f=f^(f>>>16|0),f};F.cB=function(w,f,q){var K=w.aj();if(K===0)return A1(w.al());else{var Z=f;if(!q)Z=this.c(Z,A1(w.al()));var Q=0;while(Q<K)Z=this.c(Z,C().A(w.ak(Q))),Q=1+Q|0;return this.p(Z,K)}};F.jB=function(w,f){var q=0,K=0,Z=0,Q=1,X=w.q();while(X.w()){var H=X.j(),G=C().A(H);q=q+G|0,K=K^G,Q=Math.imul(Q,1|G),Z=1+Z|0}var B=f;return B=this.c(B,q),B=this.c(B,K),B=this.cA(B,Q),this.p(B,Z)};F.j0=function(w,f){var q=w.q(),K=f;if(!q.w())return this.p(K,0);var Z=q.j();if(!q.w())return this.p(this.c(K,C().A(Z)),1);var Q=q.j(),X=C().A(Z);K=this.c(K,X);var H=K,G=C().A(Q),B=G-X|0,N=2;while(q.w()){K=this.c(K,G);var T=C().A(q.j());if(B!==(T-G|0)||B===0){K=this.c(K,T),N=1+N|0;while(q.w())K=this.c(K,C().A(q.j())),N=1+N|0;return this.p(K,N)}G=T,N=1+N|0}return this.U(this.c(this.c(H,B),G))};F.g6=function(w,f){var q=f,K=u0().bk(w);switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,C().A(z().bi(w,0))),1);default:{var Z=C().A(z().bi(w,0));q=this.c(q,Z);var Q=q,X=C().A(z().bi(w,1)),H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=C().A(z().bi(w,G));if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,C().A(z().bi(w,G))),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.j8=function(w,f,q,K){return this.U(this.c(this.c(this.c(K,w),f),q))};F.iq=function(w,f){var q=f,K=w.n();switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,C().A(w.s(0))),1);default:{var Z=C().A(w.s(0));q=this.c(q,Z);var Q=q,X=C().A(w.s(1)),H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=C().A(w.s(G));if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,C().A(w.s(G))),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.iz=function(w,f){var q=0,K=f,Z=0,Q=0,X=0,H=0,G=w;while(!G.k()){var B=G.ac(),N=G.a0(),T=C().A(B);switch(K=this.c(K,T),Z){case 0:{H=T,Z=1;break}case 1:{Q=T-X|0,Z=2;break}case 2:{if(Q!==(T-X|0)||Q===0)Z=3;break}}X=T,q=1+q|0,G=N}return Z===2?this.j8(H,Q,X,f):this.p(K,q)};F.gf=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,w.a[0]?1231:1237),1);default:{var Z=w.a[0]?1231:1237;q=this.c(q,Z);var Q=q,X=w.a[1]?1231:1237,H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=w.a[G]?1231:1237;if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,w.a[G]?1231:1237),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.g7=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,w.a[0]),1);default:{var Z=w.a[0];q=this.c(q,Z);var Q=q,X=w.a[1],H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=w.a[G];if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,w.a[G]),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.g8=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,w.a[0]),1);default:{var Z=w.a[0];q=this.c(q,Z);var Q=q,X=w.a[1],H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=w.a[G];if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,w.a[G]),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.g9=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,C().ab(w.a[0])),1);default:{var Z=C().ab(w.a[0]);q=this.c(q,Z);var Q=q,X=C().ab(w.a[1]),H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=C().ab(w.a[G]);if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,C().ab(w.a[G])),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.ga=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,C().ab(w.a[0])),1);default:{var Z=C().ab(w.a[0]);q=this.c(q,Z);var Q=q,X=C().ab(w.a[1]),H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=C().ab(w.a[G]);if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,C().ab(w.a[G])),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.gb=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,w.a[0]),1);default:{var Z=w.a[0];q=this.c(q,Z);var Q=q,X=w.a[1],H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=w.a[G];if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,w.a[G]),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.gc=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:{var Z=q,Q=w.a[0];return this.p(this.c(Z,C().bl(new I(Q.e,Q.f))),1)}default:{var X=w.a[0],H=C().bl(new I(X.e,X.f));q=this.c(q,H);var G=q,B=w.a[1],N=C().bl(new I(B.e,B.f)),T=N-H|0,D=2;while(D<K){q=this.c(q,N);var W=w.a[D],_=C().bl(new I(W.e,W.f));if(T!==(_-N|0)||T===0){q=this.c(q,_),D=1+D|0;while(D<K){var D1=q,M0=w.a[D];q=this.c(D1,C().bl(new I(M0.e,M0.f))),D=1+D|0}return this.p(q,K)}N=_,D=1+D|0}return this.U(this.c(this.c(G,T),N))}}};F.gd=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,w.a[0]),1);default:{var Z=w.a[0];q=this.c(q,Z);var Q=q,X=w.a[1],H=X-Z|0,G=2;while(G<K){q=this.c(q,X);var B=w.a[G];if(H!==(B-X|0)||H===0){q=this.c(q,B),G=1+G|0;while(G<K)q=this.c(q,w.a[G]),G=1+G|0;return this.p(q,K)}X=B,G=1+G|0}return this.U(this.c(this.c(Q,H),X))}}};F.ge=function(w,f){var q=f,K=w.a.length;switch(K){case 0:return this.p(q,0);case 1:return this.p(this.c(q,0),1);default:{q=this.c(q,0);var Z=q,Q=0,X=Q,H=2;while(H<K){if(q=this.c(q,Q),X!==(-Q|0)||X===0){q=this.c(q,0),H=1+H|0;while(H<K)q=this.c(q,0),H=1+H|0;return this.p(q,K)}Q=0,H=1+H|0}return this.U(this.c(this.c(Z,X),Q))}}};function a5(w){this.b2=null,this.dS=null,this.cH=!1,this.dS=w,Cq(this),this.cH=!1}F=a5.prototype=new J;F.constructor=a5;function JZ(){}JZ.prototype=F;F.j2=function(w){if(this.cH)o6(w),this.dS.a9();else Wq(this,w)};F.ix=function(){Dq(this),this.cH=!0};var xJ=new Y().i(a5,"com.raquo.airstream.ownership.OneTimeOwner",{bF:1,bG:1});function t5(){}F=t5.prototype=new J;F.constructor=t5;function UZ(){}UZ.prototype=F;F.hI=function(w){return w!==null};F.hM=function(w){return w?"":null};F.ct=function(w){return this.hI(w)};F.bR=function(w){return this.hM(!!w)};var bJ=new Y().i(t5,"com.raquo.laminar.codecs.package$$anon$1",{bW:1,a7:1});function h0(w){if(w===null)throw new n1}F=h0.prototype=new J;F.constructor=h0;function LZ(){}LZ.prototype=F;F.bR=function(w){return w};F.ct=function(w){return w};var hJ=new Y().i(h0,"com.raquo.laminar.codecs.package$$anon$2",{bX:1,a7:1});function kw(w){return new L5(w,new O((f)=>f+"vh"))}function C2(w,f,q,K){}F=C2.prototype=new D0;F.constructor=C2;function NZ(){}NZ.prototype=F;var jJ=new Y().i(C2,"com.raquo.laminar.keys.CompositeKey",{ch:1,I:1});function R0(w){this.cd=null,this.cd=w}F=R0.prototype=new D0;F.constructor=R0;function cZ(){}cZ.prototype=F;var L6=new Y().i(R0,"com.raquo.laminar.keys.EventProp",{cl:1,I:1});function H1(w,f,q){return w.ar=f,w.b4=q,w}function z1(){this.ar=null,this.b4=null}F=z1.prototype=new D0;F.constructor=z1;function e5(){}e5.prototype=F;F.l=function(w){return new S0(this,w,new H0((f,q,K)=>{h().dz(f,q,K)}))};F.dh=function(w){return new N3(this,w.gN(),new H0((f,q,K)=>{h().dz(f,this,q)}))};var oJ=new Y().i(z1,"com.raquo.laminar.keys.HtmlAttr",{Y:1,I:1});function W0(w,f){this.as=null,this.ez=null,this.as=w,this.ez=f}F=W0.prototype=new D0;F.constructor=W0;function TZ(){}TZ.prototype=F;F.l=function(w){return new S0(this,w,new H0((f,q,K)=>{h().ji(f,q,K)}))};var uJ=new Y().i(W0,"com.raquo.laminar.keys.HtmlProp",{at:1,I:1});function w3(w,f,q){this.cO=null,this.cN=null,this.cg=null,this.ch=null,this.cO=w,this.cN=f;var K=q.k()?l():new G1(q.y()+":"+w);this.cg=K.k()?w:K.y(),this.ch=q.k()?l():new G1(wK().iG(q.y()))}F=w3.prototype=new D0;F.constructor=w3;function kZ(){}kZ.prototype=F;var vJ=new Y().i(w3,"com.raquo.laminar.keys.SvgAttr",{cm:1,I:1});function f3(){}F=f3.prototype=new J;F.constructor=f3;function OZ(){}OZ.prototype=F;F.a8=function(w){};var dJ=new Y().i(f3,"com.raquo.laminar.modifiers.Modifier$$anon$1",{ct:1,Q:1});function D2(w,f){if(this.eI=null,this.eI=w,f===null)throw new n1}F=D2.prototype=new J;F.constructor=D2;function VZ(){}VZ.prototype=F;F.a8=function(w){var f=h1(),q=()=>{this.eI.g(w)};h1();var K=!0;if(f.C||!K)q();else{f.C=!0;try{q()}finally{f.C=!1,T2(f)}}};var lJ=new Y().i(D2,"com.raquo.laminar.modifiers.Modifier$$anon$2",{cu:1,Q:1});function F3(){}F=F3.prototype=new J;F.constructor=F3;function AZ(){}AZ.prototype=F;var pJ=new Y().i(F3,"com.raquo.laminar.modifiers.RenderableNode$$anon$1",{cx:1,cv:1});function q3(){}F=q3.prototype=new J;F.constructor=q3;function CZ(){}CZ.prototype=F;var sJ=new Y().i(q3,"com.raquo.laminar.modifiers.RenderableSeq$collectionSeqRenderable$",{cz:1,cy:1}),N6;function e(){if(!N6)N6=new q3;return N6}function G0(w,f){if(this.eJ=null,this.eJ=w,f===null)throw new n1}F=G0.prototype=new J;F.constructor=G0;function DZ(){}DZ.prototype=F;F.hp=function(w){return this.eJ.g(w)};var iJ=new Y().i(G0,"com.raquo.laminar.modifiers.RenderableText$$anon$1",{cC:1,cA:1});function Ow(w){w.gj(new Z5(new X1(()=>{throw F1(new v,"Attempting to use owner of unmounted element: "+o5(h().hH(w.aX(),(h(),P1())),""," > ",""))})))}function l6(w,f,q){return w.cW=f,w}function R2(){this.cW=null}F=R2.prototype=new J;F.constructor=R2;function Vw(){}Vw.prototype=F;F.ds=function(){return this.cW};F.D=function(w){var f=this.hw();return w.ai(new O((q)=>{q.a8(f)})),f};F.hw=function(){return new i3(this,h().hD(this))};var nJ=new Y().i(R2,"com.raquo.laminar.tags.HtmlTag",{ay:1,ac:1});function K3(w,f){this.eR=null,this.eR=w}F=K3.prototype=new J;F.constructor=K3;function RZ(){}RZ.prototype=F;var rJ=new Y().i(K3,"com.raquo.laminar.tags.SvgTag",{cM:1,ac:1});function r0(){}F=r0.prototype=new J;F.constructor=r0;function WZ(){}WZ.prototype=F;F.bR=function(w){return w};F.ct=function(w){return w};var aJ=new Y().i(r0,"io.github.nguyenyou.webawesome.laminar.UnionAsStringCodec$$anon$1",{cY:1,a7:1});function Z3(w,f){return w.bb=f,w.cr(),w}function Aw(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1}F=Aw.prototype=new J;F.constructor=Aw;function W2(){}W2.prototype=F;F.ad=function(){if(!this.b7)this.b6=M().d.io(),this.b7=!0;return this.b6};F.jq=function(){if(!this.b9)this.b8=M().d.jr(),this.b9=!0;return this.b8};F.jv=function(){if(!this.bc)this.ba=new S2(this.bb,h9().hb(),(h9(),void 0)),this.bc=!0;return this.ba};F.m=function(w,f){var q=this.jv().D(z().b(new(k.r()).C([])));return w.ai(new O((K)=>{K.g(this).a8(q)})),f.ai(new O((K)=>{K.a8(q)})),q};function Q3(){}F=Q3.prototype=new J;F.constructor=Q3;function SZ(){}SZ.prototype=F;F.jz=function(w){if(!(w>=0&&w<=1114111))throw Xf(new P2);return String.fromCodePoint(w)};var tJ=new Y().i(Q3,"java.lang.Character$",{d4:1,a:1}),c6;function IZ(){if(!c6)c6=new Q3;return c6}function p6(){}F=p6.prototype=new J;F.constructor=p6;function PZ(){}PZ.prototype=F;function s6(w){return w instanceof p6||typeof w==="number"||w instanceof I}function v0(w,f,q,K,Z){this.be=null,this.bx=null,this.bf=null,this.bg=0,this.bd=0,this.be=w,this.bx=f,this.bf=q,this.bg=K,this.bd=Z}F=v0.prototype=new J;F.constructor=v0;function EZ(){}EZ.prototype=F;F.i=function(w){return w instanceof v0&&(this.bf===w.bf&&this.bg===w.bg&&this.bd===w.bd&&this.be===w.be&&this.bx===w.bx)};F.t=function(){var w="";if(this.be!=="<jscode>")w=""+w+this.be+".";if(w=""+w+this.bx,this.bf===null)w=w+"(Unknown Source)";else{if(w=w+"("+this.bf,this.bg>=0){if(w=w+":"+this.bg,this.bd>=0)w=w+":"+this.bd}w=w+")"}return w};F.r=function(){return A1(this.be)^A1(this.bx)^A1(this.bf)^this.bg^this.bd};var Cw=new Y().i(v0,"java.lang.StackTraceElement",{aI:1,a:1});function X3(){}F=X3.prototype=new J;F.constructor=X3;function gZ(){}gZ.prototype=F;F.iH=function(w,f,q){var K=f+q|0;if(f<0||K<f||K>w.a.length)throw new K7;var Z="",Q=f;while(Q!==K)Z=Z+(""+n4(w.a[Q])),Q=1+Q|0;return Z};var eJ=new Y().i(X3,"java.lang.String$",{dh:1,a:1}),T6;function yZ(){if(!T6)T6=new X3;return T6}function M1(w,f,q,K,Z){if(w.fE=f,w.fF=Z,Z)w.i5();return w}class C1 extends Error{constructor(){super();this.fE=null,this.fF=!1,this.fD=null,this.ck=null}ir(w){return this}bS(){return this.fE}i5(){var w=this instanceof u?this.a7:this;return this.fD=Object.prototype.toString.call(w)==="[object Error]"?w:Error.captureStackTrace===void 0||!!Object.isSealed(this)?Error():(Error.captureStackTrace(this),this),this}ig(){if(this.ck===null)if(this.fF)this.ck=$K().i4(this.fD);else this.ck=new(Cw.r()).C(0);return this.ck}t(){var w=i4(this),f=this.bS();return f===null?w:w+": "+f}r(){return O0.prototype.r.call(this)}i(w){return O0.prototype.i.call(this,w)}get message(){var w=this.bS();return w===null?"":w}get name(){return i4(this)}toString(){return this.t()}}function G3(){this.G=null,h4=this,this.G=new j3}F=G3.prototype=new J;F.constructor=G3;function mZ(){}mZ.prototype=F;var wU=new Y().i(G3,"scala.$less$colon$less$",{du:1,a:1}),h4;function w1(){if(!h4)h4=new G3;return h4}function Y3(){}F=Y3.prototype=new J;F.constructor=Y3;function $Z(){}$Z.prototype=F;F.gu=function(w,f){var q=w.E();if(q>-1){var K=f.iI(q),Z=w.q(),Q=0;while(Q<q)z().ho(K,Q,Z.j()),Q=1+Q|0;return K}else{var X=0,H=0,G=null,B=f.jf();X=0,H=0;var N=B===Xq.l();G=[];var T=w.q();while(T.w()){var D=T.j(),W=N?c2(D):D===null?B.aH.z:D;G.push(W)}var _=B===ww.l()?Mw.l():B===qZ.l()||B===OQ.l()?E1.l():B;return _.aH.r().w(G)}};F.gt=function(w,f){if(w===f)return!0;if(w.a.length!==f.a.length)return!1;var q=w.a.length,K=0;while(K<q){if(!Q1().R(w.a[K],f.a[K]))return!1;K=1+K|0}return!0};var fU=new Y().i(Y3,"scala.Array$",{dw:1,a:1}),k6;function H3(){if(!k6)k6=new Y3;return k6}function z3(){this.fH=null,j4=this,this.fH=new r5(bK().fC)}F=z3.prototype=new J;F.constructor=z3;function _Z(){}_Z.prototype=F;F.j1=function(){return this.fH.dg};var FU=new Y().i(z3,"scala.Console$",{dx:1,eq:1}),j4;function xZ(){if(!j4)j4=new z3;return j4}function Dw(){}F=Dw.prototype=new Jw;F.constructor=Dw;function Rw(){}Rw.prototype=F;F.jG=function(w){return w===null?null:w.a.length===0?sX().fR:new g0(w)};function i6(w,f){if(f===w)w.g2(Mf().gv(f));else{var q=f.q();while(q.w())w.dj(q.j())}return w}function Ww(){}F=Ww.prototype=new J;F.constructor=Ww;function n6(){}n6.prototype=F;F.t=function(){return"<function0>"};function Sw(){}F=Sw.prototype=new J;F.constructor=Sw;function r6(){}r6.prototype=F;F.t=function(){return"<function1>"};function Iw(){}F=Iw.prototype=new J;F.constructor=Iw;function Pw(){}Pw.prototype=F;F.t=function(){return"<function2>"};function Ew(){}F=Ew.prototype=new J;F.constructor=Ew;function gw(){}gw.prototype=F;F.t=function(){return"<function3>"};function M3(w){this.cq=!1,this.cq=w}F=M3.prototype=new J;F.constructor=M3;function bZ(){}bZ.prototype=F;F.t=function(){return""+this.cq};var qU=new Y().i(M3,"scala.runtime.BooleanRef",{eD:1,a:1});function B3(w){this.bE=0,this.bE=w}F=B3.prototype=new J;F.constructor=B3;function hZ(){}hZ.prototype=F;F.t=function(){return""+this.bE};var KU=new Y().i(B3,"scala.runtime.IntRef",{eF:1,a:1});function J3(){this.x=0,this.g0=0,this.ha=0,this.h9=0,o4=this,this.x=A1("Seq"),this.g0=A1("Map"),this.ha=A1("Set"),this.h9=this.jB(P1(),this.g0)}F=J3.prototype=new Tw;F.constructor=J3;function jZ(){}jZ.prototype=F;F.jg=function(w){return JG(w)?this.iq(w,this.x):w instanceof Z8?this.iz(w,this.x):this.j0(w,this.x)};var ZU=new Y().i(J3,"scala.util.hashing.MurmurHash3$",{f6:1,f5:1}),o4;function m(){if(!o4)o4=new J3;return o4}class U3 extends C1{}function L3(){this.cD=null,this.dB=null,this.dC=null,u4=this,this.cD=Mf().g4(z().b(new(V.r()).C([]))),this.dB=new O((w)=>{try{console.error(this.cx(w)+`
`+this.ie(w,`
`))}catch(q){var f=q instanceof C1?q:new u(q);console.error("Error in AirstreamError.consoleErrorCallback:"),console.error(f)}}),this.dC=new O((w)=>{console.warn("Using unsafe rethrow error callback. Note: other registered error callbacks might not run. Use with caution.");var f=w;throw f instanceof u?f.a7:f}),this.j9(this.dB)}F=L3.prototype=new J;F.constructor=L3;function oZ(){}oZ.prototype=F;F.cx=function(w){try{var f=w.bS()}catch(q){var f="(Unable to get the message for this error - exception occurred in its getMessage)"}return a9(w).dp()+": "+f};F.ie=function(w,f){try{return o5(zQ().jG(w.ig()),"",f,"")}catch(q){return"(Unable to get the stacktrace for this error - exception occurred in its getStackTrace)"}};F.j9=function(w){this.cD.dj(w)};F.an=function(w){var f=this.cD,q=f.q();while(q.w()){var K=q.j();try{K.g(w)}catch(X){var Z=X instanceof C1?X:new u(X),Q=this.dC;if(K===null?Q===null:K.i(Q))throw Z instanceof u?Z.a7:Z;console.warn("Error processing an unhandled error callback:"),YZ().jn(0,new X1(((H)=>()=>{throw H instanceof u?H.a7:H})(Z)))}}};var QU=new Y().i(L3,"com.raquo.airstream.core.AirstreamError$",{bo:1,eo:1,ep:1}),u4;function T1(){if(!u4)u4=new L3;return u4}function uZ(w){w.bt=!0,w.c1=void 0}function vZ(w,f,q){return lQ(w,h6().dA(f,h5().cm,!0),q)}function dZ(w,f){if(w.bt)p9(w,f);else yw(w).push(new X1(()=>{p9(w,f)}))}function lZ(w,f){if(w.bt)l9(w,f);else yw(w).push(new X1(()=>{l9(w,f)}))}function L2(w){return Ff(w)>0}function yw(w){var f=w.c1;if(f===void 0){var q=j().B(z().b(new(rK.r()).C([])));return w.c1=q,q}else return f}var pZ=new Y().i(1,"com.raquo.airstream.core.Observer",{a4:1,X:1,V:1});function R(w,f,q){return new _3(q.hp(f))}function f1(w,f,q,K){return new D2(new O((Z)=>{(_q(),new z5(f,null,null)).ai(new O(((Q)=>(X)=>{q.g(X).a8(Q)})(Z)))}),u6())}function Y0(w,f){this.b5=null,this.cP=null,this.cQ=null,this.b5=w,this.cP=(q)=>{var K=w.ca,Z=K.g(q);if(!Z.k())f.g(Z.y())},this.cQ=(()=>{var q=null;q=this;var K={};if(q===null)throw new n1;return K.capture=q.b5.cc,K.passive=q.b5.cb,K})()}F=Y0.prototype=new J;F.constructor=Y0;function sZ(){}sZ.prototype=F;F.a8=function(w){this.hs(w,!1)};F.hs=function(w,f){if(s9(w,this)===-1){var q=new O((Q)=>{return h().hd(w.I,this),new i0(Q.eA,new X1(()=>{var X=s9(w,this);if(X!==-1)tQ(w,X),h().jb(w.I,this)}))}),K=f?XK().jC(w,q):V0().cC(w.ag,new O((Q)=>q.g(new A0(w,Q))),!1);return aQ(w,this,f),K}else{var Z=new O((Q)=>{return});return V0().gM(w.ag,new O((Q)=>{Z.g(new A0(w,Q))}),!1)}};F.t=function(){return"EventListener("+this.b5.b3.cd+")"};var iZ=new Y().i(Y0,"com.raquo.laminar.modifiers.EventListener",{cp:1,Q:1,au:1});function S0(w,f,q){this.eD=null,this.eE=null,this.eC=null,this.eD=w,this.eE=f,this.eC=q}F=S0.prototype=new J;F.constructor=S0;function nZ(){}nZ.prototype=F;F.a8=function(w){this.eC.g3(w,this.eD,this.eE)};var XU=new Y().i(S0,"com.raquo.laminar.modifiers.KeySetter",{cq:1,Q:1,cD:1});function N3(w,f,q){this.eF=null,this.eH=null,this.eG=null,this.eF=w,this.eH=f,this.eG=q}F=N3.prototype=new J;F.constructor=N3;function rZ(){}rZ.prototype=F;F.a8=function(w){this.ht(w)};F.ht=function(w){w.iT(this.eF);var f=this.eH,q=new O((K)=>{this.eG.g3(w,K,this)});return V0().js(w.ag,f,q)};var GU=new Y().i(N3,"com.raquo.laminar.modifiers.KeyUpdater",{cr:1,Q:1,au:1});function p(w,f){if(this.cU=null,this.eL=null,this.eM=null,this.eL=f,Ow(this),w===null)throw F1(new v,"Unable to mount Laminar RootNode into a null container. See https://laminar.dev/documentation#waiting-for-the-dom-to-load");if(!h().iv(w,document))throw F1(new v,"Unable to mount Laminar RootNode into an unmounted container. See https://laminar.dev/documentation#rendering");this.eM=w,this.iE()}F=p.prototype=new J;F.constructor=p;function aZ(){}aZ.prototype=F;F.cw=function(){return this.cU};F.gj=function(w){this.cU=w};F.iE=function(){return this.cU.g1(),A5().cs(this,this.eL,void 0)};F.aX=function(){return this.eM};var YU=new Y().i(p,"com.raquo.laminar.nodes.RootNode",{cI:1,ab:1,aw:1});function S2(w,f,q){this.cW=null,this.eQ=null,this.eP=null,this.eQ=w,this.eP=q,l6(this,w,!1)}F=S2.prototype=new Vw;F.constructor=S2;function tZ(){}tZ.prototype=F;F.ds=function(){return this.eQ};F.hg=function(){var w=this.eP;return w===void 0?void 0:w.map((f)=>f.jH.as)};var HU=new Y().i(S2,"com.raquo.laminar.tags.CustomHtmlTag",{ax:1,ay:1,ac:1});function c3(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.eY=null,this.eZ=!1,this.eS=null,this.eT=!1,this.eU=null,this.eV=!1,this.eW=null,this.eX=!1,Z3(this,"wa-button")}F=c3.prototype=new W2;F.constructor=c3;function eZ(){}eZ.prototype=F;F.V=function(){if(!this.eZ)this.eY=$w(),this.eZ=!0;return this.eY};F.hi=function(){if(!this.eT)this.eS=mw(),this.eT=!0;return this.eS};F.P=function(){if(!this.eV)this.eU=JK(),this.eV=!0;return this.eU};F.ae=function(){if(!this.eX)this.eW=LK(),this.eX=!0;return this.eW};F.cr=function(){return _8};var zU=new Y().i(c3,"io.github.nguyenyou.webawesome.laminar.Button$",{cO:1,a0:1,Z:1}),O6;function g(){if(!O6)O6=new c3;return O6}function T3(){this.ar=null,this.b4=null,this.f0=null,this.f1=!1,this.f2=null,this.f3=!1,this.f4=null,this.f5=!1,H1(this,"placement",new r0)}F=T3.prototype=new e5;F.constructor=T3;function wQ(){}wQ.prototype=F;F.hv=function(){if(!this.f1)this.f0=k3().l("bottom"),this.f1=!0;return this.f0};F.jp=function(){if(!this.f3)this.f2=k3().l("start"),this.f3=!0;return this.f2};F.jA=function(){if(!this.f5)this.f4=k3().l("top"),this.f5=!0;return this.f4};var MU=new Y().i(T3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ComponentPlacement$",{cP:1,Y:1,I:1}),V6;function k3(){if(!V6)V6=new T3;return V6}function O3(){this.ar=null,this.b4=null,this.f6=null,this.f7=!1,H1(this,"appearance",new r0)}F=O3.prototype=new e5;F.constructor=O3;function fQ(){}fQ.prototype=F;F.j6=function(){if(!this.f7)this.f6=mw().l("plain"),this.f7=!0;return this.f6};var BU=new Y().i(O3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ExtendedAppearance1$",{cQ:1,Y:1,I:1}),A6;function mw(){if(!A6)A6=new O3;return A6}function V3(){this.ar=null,this.b4=null,this.f8=null,this.f9=!1,H1(this,"variant",new r0)}F=V3.prototype=new e5;F.constructor=V3;function FQ(){}FQ.prototype=F;F.O=function(){if(!this.f9)this.f8=$w().l("brand"),this.f9=!0;return this.f8};var JU=new Y().i(V3,"io.github.nguyenyou.webawesome.laminar.CommonKeys$ThemeVariant$",{cR:1,Y:1,I:1}),C6;function $w(){if(!C6)C6=new V3;return C6}function A3(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fg=null,this.fh=!1,this.fi=null,this.fj=!1,this.fc=null,this.fd=!1,this.fk=null,this.fl=!1,this.fm=null,this.fn=!1,this.fe=null,this.ff=!1,Z3(this,"wa-drawer")}F=A3.prototype=new W2;F.constructor=A3;function qQ(){}qQ.prototype=F;F.iW=function(){if(!this.fh)this.fg=(M(),new R0("wa-hide")),this.fh=!0;return this.fg};F.dv=function(){if(!this.fj)this.fi=(M(),H1(new z1,"open",o().bu)),this.fj=!0;return this.fi};F.H=function(){if(!this.fd)this.fc=(M(),H1(new z1,"label",o().a5)),this.fd=!0;return this.fc};F.dw=function(){if(!this.fl)this.fk=k3(),this.fl=!0;return this.fk};F.jE=function(){if(!this.fn)this.fm=(M(),H1(new z1,"without-header",o().bu)),this.fn=!0;return this.fm};F.iy=function(){if(!this.ff)this.fe=(M(),H1(new z1,"light-dismiss",o().bu)),this.ff=!0;return this.fe};F.cr=function(){return j8};var UU=new Y().i(A3,"io.github.nguyenyou.webawesome.laminar.Drawer$",{cU:1,a0:1,Z:1}),D6;function B1(){if(!D6)D6=new A3;return D6}function C3(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fu=null,this.fv=!1,this.fs=null,this.ft=!1,Z3(this,"wa-icon")}F=C3.prototype=new W2;F.constructor=C3;function KQ(){}KQ.prototype=F;F.iF=function(){if(!this.fv)this.fu=(M(),H1(new z1,"name",o().a5)),this.fv=!0;return this.fu};F.H=function(){if(!this.ft)this.fs=(M(),H1(new z1,"label",o().a5)),this.ft=!0;return this.fs};F.cr=function(){return o8};var LU=new Y().i(C3,"io.github.nguyenyou.webawesome.laminar.Icon$",{cW:1,a0:1,Z:1}),R6;function ZQ(){if(!R6)R6=new C3;return R6}function D3(){this.bb=null,this.b6=null,this.b7=!1,this.b8=null,this.b9=!1,this.ba=null,this.bc=!1,this.fy=null,this.fz=!1,this.fw=null,this.fx=!1,Z3(this,"wa-input")}F=D3.prototype=new W2;F.constructor=D3;function QQ(){}QQ.prototype=F;F.j5=function(){if(!this.fz)this.fy=(M(),H1(new z1,"placeholder",o().a5)),this.fz=!0;return this.fy};F.hq=function(){if(!this.fx)this.fw=(M(),H1(new z1,"autofocus",o().bu)),this.fx=!0;return this.fw};F.cr=function(){return u8};var NU=new Y().i(D3,"io.github.nguyenyou.webawesome.laminar.Input$",{cX:1,a0:1,Z:1}),W6;function XQ(){if(!W6)W6=new D3;return W6}function GQ(w){if(w.aH.Z)return w.aH.Q().dp()+"[]";else{var f=w.aH.N,q=-1+f.length|0;while(q>=0&&f.charCodeAt(q)===36)q=-1+q|0;if(q>=0)var K=q,Z=f.charCodeAt(K),Q=Z>=48&&Z<=57;else var Q=!1;if(Q){q=-1+q|0;while(!0){if(q>=0)var X=q,H=f.charCodeAt(X),G=H>=48&&H<=57;else var G=!1;if(G)q=-1+q|0;else break}while(q>=0&&f.charCodeAt(q)===36)q=-1+q|0}while(!0){if(q>=0)var B=q,N=f.charCodeAt(B),T=N!==46&&N!==36;else var T=!1;if(T)q=-1+q|0;else break}var D=1+q|0;return f.substring(D)}}function R3(w){this.cX=null,this.aH=w}F=R3.prototype=new J;F.constructor=R3;function YQ(){}YQ.prototype=F;F.t=function(){return(this.aH.Y?"interface ":this.aH.X?"":"class ")+this.aH.N};F.dp=function(){if(this.cX===null)this.cX=GQ(this);return this.cX};var cU=new Y().i(R3,"java.lang.Class",{d5:1,a:1,M:1});function F1(w,f){return M1(w,f,null,!0,!0),w}class v extends C1{}var TU=new Y().i(v,"java.lang.Exception",{L:1,t:1,a:1});function _w(){}F=_w.prototype=new J;F.constructor=_w;function xw(){}xw.prototype=F;function W3(){this.h6=null,v4=this,this.h6=cQ()}F=W3.prototype=new Rw;F.constructor=W3;function HQ(){}HQ.prototype=F;var kU=new Y().i(W3,"scala.Predef$",{dG:1,dA:1,dB:1}),v4;function zQ(){if(!v4)v4=new W3;return v4}function MQ(w,f){return w.cn=f,w}function bw(){this.cn=null}F=bw.prototype=new J;F.constructor=bw;function hw(){}hw.prototype=F;F.dn=function(w){return this.cn.dm(w,Cf())};F.dl=function(w){return this.cn.dm(w,Cf())};function BQ(w,f){return new g2(w).hA(f)}function JQ(w,f,q){var K=f>0?f:0,Z=q<0?-1:q<=K?0:q-K|0;return Z===0?b().z:new y2(w,K,Z)}function UQ(w,f){var q=f.q();while(w.w()&&q.w())if(!Q1().R(w.j(),q.j()))return!1;return w.w()===q.w()}function S3(){this.z=null,d4=this,this.z=new o3}F=S3.prototype=new J;F.constructor=S3;function LQ(){}LQ.prototype=F;var OU=new Y().i(S3,"scala.collection.Iterator$",{dZ:1,a1:1,a:1}),d4;function b(){if(!d4)d4=new S3;return d4}function I3(){}F=I3.prototype=new J;F.constructor=I3;function NQ(){}NQ.prototype=F;var VU=new Y().i(I3,"scala.collection.immutable.Map$",{ee:1,e4:1,a:1}),S6;function cQ(){if(!S6)S6=new I3;return S6}function I0(w){this.fS=null,this.fS=w}F=I0.prototype=new n6;F.constructor=I0;function TQ(){}TQ.prototype=F;F.a9=function(){return(0,this.fS)()};var AU=new Y().i(I0,"scala.runtime.AbstractFunction0.$$Lambda$a02b774b97db8234e08c6a02dd06557c99779855",{ez:1,bk:1,ae:1});function U(w){this.fT=null,this.fT=w}F=U.prototype=new r6;F.constructor=U;function kQ(){}kQ.prototype=F;F.g=function(w){return(0,this.fT)(w)};var CU=new Y().i(U,"scala.runtime.AbstractFunction1.$$Lambda$70e1780b84463d18653aacefee3ab989ac625f28",{eA:1,bl:1,e:1}),OQ=new Y().i(0,"scala.runtime.Nothing$",{eG:1,t:1,a:1});function P3(){}F=P3.prototype=new J;F.constructor=P3;function VQ(){}VQ.prototype=F;F.ia=function(w){return(f)=>w.g(f)};var DU=new Y().i(P3,"scala.scalajs.js.Any$",{eL:1,eM:1,eN:1}),I6;function AQ(){if(!I6)I6=new P3;return I6}function jw(){}F=jw.prototype=new n6;F.constructor=jw;function ow(){}ow.prototype=F;function uw(){}F=uw.prototype=new r6;F.constructor=uw;function vw(){}vw.prototype=F;function dw(){}F=dw.prototype=new Pw;F.constructor=dw;function lw(){}lw.prototype=F;function pw(){}F=pw.prototype=new gw;F.constructor=pw;function sw(){}sw.prototype=F;function E3(w,f,q,K){if(this.dG=null,this.dE=!1,this.cE=null,this.dF=null,this.dG=w,this.dE=f,this.cE=q,K===null)throw new n1;this.dF=void 0}F=E3.prototype=new J;F.constructor=E3;function CQ(){}CQ.prototype=F;F.cz=function(){return this.dF};F.cu=function(){return fw(this)};F.t=function(){return s0(this)};F.aW=function(w){try{this.dG.g(w)}catch(q){var f=q instanceof C1?q:new u(q);if(this.dE)this.iV(new l0(f));else T1().an(new l0(f))}};F.iV=function(w){try{if(this.cE.dq(w))this.cE.g(w);else T1().an(w)}catch(q){var f=q instanceof C1?q:new u(q);T1().an(new p3(f,w))}};var RU=new Y().i(E3,"com.raquo.airstream.core.Observer$$anon$8",{bq:1,X:1,V:1,a4:1});function g3(w,f){this.dO=null,this.dP=null,this.dN=null,this.c4=null,this.dP=w,this.dN=f,this.dO=void 0,this.c4=new F8(new X1(()=>s0(this)))}F=g3.prototype=new J;F.constructor=g3;function DQ(){}DQ.prototype=F;F.cz=function(){return this.dO};F.t=function(){return s0(this)};F.aW=function(w){if(L2(this.c4))this.c4.gC(w,null)};F.cu=function(){return""+this.dP.a9()+this.dN};var WU=new Y().i(g3,"com.raquo.airstream.eventbus.WriteBus",{bB:1,X:1,V:1,a4:1});function y3(w){if(this.dZ=null,this.e0=!1,this.gS=null,w===null)throw new n1;dq(this)}F=y3.prototype=new J;F.constructor=y3;function RQ(){}RQ.prototype=F;F.ju=function(){if(!this.e0)this.dZ=new K3("svg",!1),this.e0=!0;return this.dZ};var SU=new Y().i(y3,"com.raquo.laminar.api.Laminar$svg$",{bQ:1,c9:1,bZ:1,c1:1});function m3(){this.d=null,l4=this,this.d=new q8}F=m3.prototype=new J;F.constructor=m3;function WQ(){}WQ.prototype=F;var IU=new Y().i(m3,"com.raquo.laminar.api.package$",{bT:1,ap:1,as:1,ao:1}),l4;function M(){if(!l4)l4=new m3;return l4}function a6(w,f,q){return w.ce=f,w.cf=q,w}function $3(){this.ce=null,this.cf=null}F=$3.prototype=new D0;F.constructor=$3;function t6(){}t6.prototype=F;F.l=function(w){return new S0(this,t9(w),new H0((f,q,K)=>{h().gK(f,q,K)}))};var PU=new Y().i($3,"com.raquo.laminar.keys.StyleProp",{aa:1,I:1,a8:1,a9:1});function _3(w){this.eO=null,this.cV=null,this.eO=l(),this.cV=h().hF(w)}F=_3.prototype=new J;F.constructor=_3;function SQ(){}SQ.prototype=F;F.gL=function(w){this.eO=w};F.gR=function(w){};F.a8=function(w){A5().cs(w,this,void 0)};F.jx=function(){return this.cV.data};F.aX=function(){return this.cV};var EU=new Y().i(_3,"com.raquo.laminar.nodes.TextNode",{cK:1,ab:1,Q:1,av:1});function iw(){}F=iw.prototype=new J;F.constructor=iw;function e6(){}e6.prototype=F;function IQ(w,f){return w===f}function PQ(w){return w?1231:1237}var EQ=new Y().i(0,"java.lang.Boolean",{d2:1,a:1,R:1,M:1},(w)=>typeof w==="boolean");function gQ(w){return w}function yQ(w,f){return f instanceof g1&&w===f.c}var mQ=new Y().i(0,"java.lang.Character",{aE:1,a:1,R:1,M:1},(w)=>w instanceof g1);class q0 extends v{}function x3(){this.u=null,this.u=""}F=x3.prototype=new J;F.constructor=x3;function $Q(){}$Q.prototype=F;F.hj=function(w){var f=yZ().iH(w,0,w.a.length);return this.u=""+this.u+f,this};F.t=function(){return this.u};F.n=function(){return this.u.length};F.gh=function(w){return this.u.charCodeAt(w)};var gU=new Y().i(x3,"java.lang.StringBuilder",{di:1,ad:1,aC:1,a:1});function nw(){}F=nw.prototype=new xw;F.constructor=nw;function rw(){}rw.prototype=F;function b3(){}F=b3.prototype=new J;F.constructor=b3;function _Q(){}_Q.prototype=F;F.t=function(){return"<function1>"};F.dq=function(w){return!1};F.hm=function(w){throw new K0(w)};F.g=function(w){this.hm(w)};var yU=new Y().i(b3,"scala.PartialFunction$$anon$1",{dF:1,g:1,e:1,a:1});function aw(){}F=aw.prototype=new J;F.constructor=aw;function i1(){}i1.prototype=F;F.q=function(){return this};F.cv=function(w){return this.bX(w,-1)};F.bX=function(w,f){return JQ(this,w,f)};F.t=function(){return"<iterator>"};F.bG=function(w,f,q,K){return Lw(this,w,f,q,K)};F.E=function(){return-1};function xQ(w,f){return w.co=f,w}function tw(){this.co=null}F=tw.prototype=new J;F.constructor=tw;function ew(){}ew.prototype=F;F.g4=function(w){return this.co.dl(w)};F.gv=function(w){return this.co.dn(w)};F.dn=function(w){return this.gv(w)};F.dl=function(w){return this.g4(w)};function bQ(w,f){return f>=0&&w.aF(f)>0}function hQ(w){return w.aF(0)===0}function w7(w,f){var q=w.E();if(q!==-1)var K=f.E(),Z=K!==-1&&q!==K;else var Z=!1;if(!Z)return UQ(w.q(),f);else return!1}function X1(w){this.fW=null,this.fW=w}F=X1.prototype=new ow;F.constructor=X1;function jQ(){}jQ.prototype=F;F.a9=function(){return(0,this.fW)()};var mU=new Y().i(X1,"scala.scalajs.runtime.AnonFunction0.$$Lambda$92a2e254bbb9c06a0a02fc31abab59c51c18ecc1",{eT:1,eS:1,bk:1,ae:1});function O(w){this.fX=null,this.fX=w}F=O.prototype=new vw;F.constructor=O;function oQ(){}oQ.prototype=F;F.g=function(w){return(0,this.fX)(w)};var $U=new Y().i(O,"scala.scalajs.runtime.AnonFunction1.$$Lambda$3aa60c34ef08a878abffbf4628007cc68fa3c7ab",{eV:1,eU:1,bl:1,e:1});function P0(w){this.fY=null,this.fY=w}F=P0.prototype=new lw;F.constructor=P0;function uQ(){}uQ.prototype=F;F.dk=function(w,f){return(0,this.fY)(w,f)};var _U=new Y().i(P0,"scala.scalajs.runtime.AnonFunction2.$$Lambda$1a8112ad760bd31301975c22c9537bb38341e0c2",{eX:1,eW:1,eB:1,dy:1});function H0(w){this.fZ=null,this.fZ=w}F=H0.prototype=new sw;F.constructor=H0;function vQ(){}vQ.prototype=F;F.g3=function(w,f,q){return(0,this.fZ)(w,f,q)};var xU=new Y().i(H0,"scala.scalajs.runtime.AnonFunction3.$$Lambda$0321b7865d991d5a3e10ec941cd6461a4b204491",{eZ:1,eY:1,eC:1,dz:1});function dQ(w){w.br=j().B(z().b(new(pZ.r()).C([]))),w.bs=j().B(z().b(new(Yq.r()).C([]))),w.c3=!1}function lQ(w,f,q){var K=h1(),Z=()=>{f7(w);var H=pQ(w,f,q);return wf(w),H},Q=!L2(w);if(K.C||!Q)var X=Z();else{K.C=!0;try{var X=Z()}finally{K.C=!1,T2(K)}}return X}function pQ(w,f,q){var K=new i0(q,new X1(()=>{dZ(w,f)})),Z=w.br;return Z.push(f),K}function sQ(w,f,q){var K=h1(),Z=()=>{if(!L2(w)&&q)f7(w);var X=w.bs;X.push(f),wf(w)},Q=!L2(w);if(K.C||!Q)Z();else{K.C=!0;try{Z()}finally{K.C=!1,T2(K)}}}function l9(w,f){if(Fw().gI(w.bs,f))ff(w)}function p9(w,f){if(Fw().gI(w.br,f))ff(w)}function f7(w){if(!w.c3)w.iZ(),w.c3=!0}function wf(w){if(Ff(w)===1)w.iX()}function ff(w){if(!L2(w))w.iY(),w.c3=!1}function Ff(w){var f=w.br,q=f.length,K=w.bs;return(q|0)+(K.length|0)|0}function a0(){this.dK=null,this.bq=null,this.dJ=null,this.dK=void 0,this.bq=new g3(new X1(()=>s0(this)),".writer"),this.dJ=this.bq.c4}F=a0.prototype=new J;F.constructor=a0;function iQ(){}iQ.prototype=F;F.cz=function(){return this.dK};F.cu=function(){return fw(this)};F.t=function(){return s0(this)};F.gN=function(){return this.dJ};var bU=new Y().i(a0,"com.raquo.airstream.eventbus.EventBus",{by:1,a5:1,a6:1,X:1,V:1});function I2(w,f){this.c9=null,this.cM=null,this.c9=w,this.cM=f}F=I2.prototype=new J;F.constructor=I2;function nQ(){}nQ.prototype=F;F.a8=function(w){var f=this.cM;if(f!==void 0)f.gD(w,this.c9);A5().cs(w,this.c9,void 0)};F.jD=function(w){return new I2(this.c9,w.hl(this.cM))};var q1=new Y().i(I2,"com.raquo.laminar.inserters.StaticChildInserter",{ce:1,Q:1,cc:1,cg:1,cb:1});function rQ(w){w.cR=new X5(new X1(()=>{w.ag.g1()}),new X1(()=>{w.ag.hG()})),w.aL=void 0}function aQ(w,f,q){if(w.aL===void 0)w.aL=j().B(z().b(new(iZ.r()).C([f])));else if(q){var K=w.aL;if(K===void 0){var Z;throw new C0("undefined.get")}else var Z=K;Z.unshift(f)}else{var Q=w.aL;if(Q===void 0){var X;throw new C0("undefined.get")}else var X=Q;X.push(f)}}function tQ(w,f){var q=w.aL;if(q!==void 0)q.splice(f,1)}function s9(w,f){var q=w.aL;if(q===void 0)return-1;else{var K=!1,Z=0;while(!K&&Z<(q.length|0)){var Q=q[Z];if(Q===null?f===null:j0(Q,f))K=!0;else Z=1+Z|0}return K?Z:-1}}function eQ(w,f){if(qf(w,w.ci,f))Kf(w,f)}function wX(w,f){var q=w.ci;if(w.ci=f,!qf(w,q,f))Kf(w,f)}function qf(w,f,q){var K=!f.k()&&!f.y().cw().W.k(),Z=!q.k()&&!q.y().cw().W.k();return K&&!Z}function Kf(w,f){fX(w,f.k()?l():new G1(f.y().cw()))}function fX(w,f){if(f.k())w.cR.hy();else{var q=f.y();w.cR.jk(q)}}function FX(w,f){return w}function Zf(){}F=Zf.prototype=new e6;F.constructor=Zf;function Qf(){}Qf.prototype=F;class t0 extends q0{constructor(w){super();M1(this,w,null,!0,!0)}}var hU=new Y().i(t0,"java.lang.ArithmeticException",{d1:1,S:1,L:1,t:1,a:1});var qX=new Y().i(0,"java.lang.Byte",{d3:1,U:1,a:1,R:1,M:1},(w)=>Zq(w));function KX(w,f){return M1(w,f,null,!0,!0),w}function Xf(w){return M1(w,null,null,!0,!0),w}class P2 extends q0{}var jU=new Y().i(P2,"java.lang.IllegalArgumentException",{d8:1,S:1,L:1,t:1,a:1});function d0(w,f){return M1(w,f,null,!0,!0),w}class F0 extends q0{}var oU=new Y().i(F0,"java.lang.IndexOutOfBoundsException",{aG:1,S:1,L:1,t:1,a:1});function h3(){}F=h3.prototype=new e6;F.constructor=h3;function ZX(){}ZX.prototype=F;var uU=new Y().i(h3,"java.lang.JSConsoleBasedPrintStream$DummyOutputStream",{db:1,aB:1,az:1,aD:1,aA:1});class n1 extends q0{constructor(){super();M1(this,null,null,!0,!0)}}var vU=new Y().i(n1,"java.lang.NullPointerException",{dc:1,S:1,L:1,t:1,a:1});var QX=new Y().i(0,"java.lang.Short",{dd:1,U:1,a:1,R:1,M:1},(w)=>Qq(w));class F7 extends q0{constructor(w){super();M1(this,w,null,!0,!0)}}var dU=new Y().i(F7,"java.lang.UnsupportedOperationException",{dl:1,S:1,L:1,t:1,a:1});class C0 extends q0{constructor(w){super();M1(this,w,null,!0,!0)}}var lU=new Y().i(C0,"java.util.NoSuchElementException",{dq:1,S:1,L:1,t:1,a:1});function j3(){}F=j3.prototype=new rw;F.constructor=j3;function XX(){}XX.prototype=F;F.g=function(w){return w};F.t=function(){return"generalized constraint"};var pU=new Y().i(j3,"scala.$less$colon$less$$anon$1",{dv:1,ds:1,dt:1,e:1,a:1});function GX(w){if(!w.d2)w.d3=w.cl===null?"null":HX(w),w.d2=!0;return w.d3}function YX(w){return!w.d2?GX(w):w.d3}function i9(w){var f=w.cl;return"of class "+i4(f)}function HX(w){try{return w.cl+" ("+i9(w)+")"}catch(f){return"an instance "+i9(w)}}class K0 extends q0{constructor(w){super();this.d3=null,this.cl=null,this.d2=!1,this.cl=w,M1(this,null,null,!0,!0)}bS(){return YX(this)}}var sU=new Y().i(K0,"scala.MatchError",{dC:1,S:1,L:1,t:1,a:1});function Gf(){}F=Gf.prototype=new J;F.constructor=Gf;function q7(){}q7.prototype=F;F.k=function(){return this===l()};F.E=function(){return this.k()?0:1};F.q=function(){return this.k()?b().z:new u3(this.y())};function e0(w){this.by=0,this.fK=0,this.fJ=null,this.fJ=w,this.by=0,this.fK=w.aj()}F=e0.prototype=new i1;F.constructor=e0;function zX(){}zX.prototype=F;F.w=function(){return this.by<this.fK};F.j=function(){var w=this.fJ.ak(this.by);return this.by=1+this.by|0,w};var iU=new Y().i(e0,"scala.Product$$anon$1",{dH:1,r:1,s:1,b:1,c:1});function E2(w){this.cn=null,MQ(this,w)}F=E2.prototype=new hw;F.constructor=E2;function MX(){}MX.prototype=F;var nU=new Y().i(E2,"scala.collection.ClassTagSeqFactory$AnySeqDelegate",{dV:1,dU:1,a1:1,a:1,af:1});function BX(w){return o5(w,w.bj()+"(",", ",")")}function o3(){}F=o3.prototype=new i1;F.constructor=o3;function JX(){}JX.prototype=F;F.w=function(){return!1};F.iJ=function(){throw new C0("next on empty iterator")};F.E=function(){return 0};F.bX=function(w,f){return this};F.j=function(){this.iJ()};var rU=new Y().i(o3,"scala.collection.Iterator$$anon$19",{e0:1,r:1,s:1,b:1,c:1});function u3(w){this.bA=!1,this.fO=null,this.fO=w,this.bA=!1}F=u3.prototype=new i1;F.constructor=u3;function UX(){}UX.prototype=F;F.w=function(){return!this.bA};F.j=function(){if(this.bA)return b().z.j();else return this.bA=!0,this.fO};F.bX=function(w,f){return this.bA||w>0||f===0?b().z:this};var aU=new Y().i(u3,"scala.collection.Iterator$$anon$20",{e1:1,r:1,s:1,b:1,c:1});function LX(w){while(!0){if(w.N instanceof g2){var f=w.N;if(w.N=f.N,w.au=f.au,f.a3!==null){if(w.a2===null)w.a2=f.a2;f.a2.bB=w.a3,w.a3=f.a3}continue}return}}function NX(w){while(!0)if(w.a3===null)return w.N=null,w.a2=null,!1;else{if(w.N=w.a3.ik(),w.a2===w.a3)w.a2=w.a2.bB;if(w.a3=w.a3.bB,LX(w),w.au)return!0;else if(w.N!==null&&w.N.w())return w.au=!0,!0}}function g2(w){this.N=null,this.a3=null,this.a2=null,this.au=!1,this.N=w,this.a3=null,this.a2=null,this.au=!1}F=g2.prototype=new i1;F.constructor=g2;function cX(){}cX.prototype=F;F.w=function(){if(this.au)return!0;else if(this.N!==null)if(this.N.w())return this.au=!0,!0;else return NX(this);else return!1};F.j=function(){if(this.w())return this.au=!1,this.N.j();else return b().z.j()};F.hA=function(w){var f=new u5(w,null);if(this.a3===null)this.a3=f,this.a2=f;else this.a2.bB=f,this.a2=f;if(this.N===null)this.N=b().z;return this};var tU=new Y().i(g2,"scala.collection.Iterator$ConcatIterator",{aQ:1,r:1,s:1,b:1,c:1});function Yf(w){while(w.am>0)if(w.av.w())w.av.j(),w.am=-1+w.am|0;else w.am=0}function n9(w,f){if(w.Y<0)return-1;else{var q=w.Y-f|0;return q<0?0:q}}function y2(w,f,q){this.av=null,this.Y=0,this.am=0,this.av=w,this.Y=q,this.am=f}F=y2.prototype=new i1;F.constructor=y2;function TX(){}TX.prototype=F;F.E=function(){var w=this.av.E();if(w<0)return-1;else{var f=w-this.am|0,q=f<0?0:f;if(this.Y<0)return q;else{var K=this.Y;return K<q?K:q}}};F.w=function(){return Yf(this),this.Y!==0&&this.av.w()};F.j=function(){if(Yf(this),this.Y>0)return this.Y=-1+this.Y|0,this.av.j();else return this.Y<0?this.av.j():b().z.j()};F.bX=function(w,f){var q=w>0?w:0;if(f<0)var K=n9(this,q);else if(f<=q)var K=0;else if(this.Y<0)var K=f-q|0;else var Z=n9(this,q),Q=f-q|0,K=Z<Q?Z:Q;var X=this.am+q|0;if(K===0)return b().z;else if(X<0)return this.am=2147483647,this.Y=0,BQ(this,new I0(()=>new y2(this.av,-2147483647+X|0,K)));else return this.am=X,this.Y=K,this};var eU=new Y().i(y2,"scala.collection.Iterator$SliceIterator",{e3:1,r:1,s:1,b:1,c:1});function Hf(w,f){return f>=0&&w.aF(f)>0}function zf(w,f){if(f<0)throw d0(new F0,""+f);var q=w.hL(f);if(q.k())throw d0(new F0,""+f);return q.ac()}function kX(w,f){return UG(f)?OX(w,w,f):w7(w,f)}function OX(w,f,q){while(!0)if(f===q)return!0;else if(!f.k()&&!q.k()&&Q1().R(f.ac(),q.ac())){var K=f.a0(),Z=q.a0();f=K,q=Z}else return f.k()&&q.k()}function v3(w){this.bD=null,this.bD=w}F=v3.prototype=new i1;F.constructor=v3;function VX(){}VX.prototype=F;F.w=function(){return!this.bD.k()};F.j=function(){var w=this.bD.ac();return this.bD=this.bD.a0(),w};var wL=new Y().i(v3,"scala.collection.StrictOptimizedLinearSeqOps$$anon$1",{e8:1,r:1,s:1,b:1,c:1});function d3(){this.co=null,xQ(this,RX())}F=d3.prototype=new ew;F.constructor=d3;function AX(){}AX.prototype=F;var fL=new Y().i(d3,"scala.collection.mutable.Buffer$",{ej:1,e5:1,af:1,a1:1,a:1}),P6;function Mf(){if(!P6)P6=new d3;return P6}function z0(w){this.bF=0,this.fU=0,this.fV=null,this.fV=w,this.bF=0,this.fU=w.aj()}F=z0.prototype=new i1;F.constructor=z0;function CX(){}CX.prototype=F;F.w=function(){return this.bF<this.fU};F.j=function(){var w=this.fV.ak(this.bF);return this.bF=1+this.bF|0,w};var FL=new Y().i(z0,"scala.runtime.ScalaRunTime$$anon$1",{eJ:1,r:1,s:1,b:1,c:1});function l3(){}F=l3.prototype=new J;F.constructor=l3;function DX(){}DX.prototype=F;F.dl=function(w){return this.gw(w)};F.gw=function(w){return i6(rG(new G8),w).gJ()};F.dn=function(w){return this.gw(w)};var qL=new Y().i(l3,"scala.scalajs.js.WrappedArray$",{eP:1,e9:1,af:1,a1:1,a:1}),E6;function RX(){if(!E6)E6=new l3;return E6}class l0 extends U3{constructor(w){super();this.bn=null,this.bn=w,M1(this,"ObserverError: "+T1().cx(w),null,!0,!0)}aG(){return new e0(this)}r(){return m().cB(this,-889275714,!1)}i(w){if(this===w)return!0;else if(w instanceof l0){var f=this.bn,q=w.bn;return f===null?q===null:f.i(q)}else return!1}aj(){return 1}al(){return"ObserverError"}ak(w){if(w===0)return this.bn;throw d0(new F0,""+w)}t(){return"ObserverError: "+this.bn}}var KL=new Y().i(l0,"com.raquo.airstream.core.AirstreamError$ObserverError",{ah:1,a3:1,t:1,a:1,d:1,T:1});class p3 extends U3{constructor(w,f){super();this.bp=null,this.bo=null,this.bp=w,this.bo=f,M1(this,"ObserverErrorHandlingError: "+T1().cx(w)+"; cause: "+T1().cx(f),null,!0,!0),this.ir(f)}aG(){return new e0(this)}r(){return m().cB(this,-889275714,!1)}i(w){if(this===w)return!0;else if(w instanceof p3){var f=this.bp,q=w.bp;if(f===null?q===null:f.i(q)){var K=this.bo,Z=w.bo;return K===null?Z===null:K.i(Z)}else return!1}else return!1}aj(){return 2}al(){return"ObserverErrorHandlingError"}ak(w){if(w===0)return this.bp;if(w===1)return this.bo;throw d0(new F0,""+w)}t(){return"ObserverErrorHandlingError: "+this.bp+"; cause: "+this.bo}}var ZL=new Y().i(p3,"com.raquo.airstream.core.AirstreamError$ObserverErrorHandlingError",{ai:1,a3:1,t:1,a:1,d:1,T:1});class s3 extends U3{constructor(w,f){super();this.aZ=null,this.aY=0,this.aZ=w,this.aY=f,M1(this,"Transaction depth exceeded maxDepth = "+f+": Execution of "+w+" aborted. See `Transaction.maxDepth`.",null,!0,!0)}aG(){return new e0(this)}r(){var w=-889275714;return w=C().c(w,A1("TransactionDepthExceeded")),w=C().c(w,C().A(this.aZ)),w=C().c(w,this.aY),C().p(w,2)}i(w){if(this===w)return!0;else if(w instanceof s3)if(this.aY===w.aY){var f=this.aZ,q=w.aZ;return f===q}else return!1;else return!1}aj(){return 2}al(){return"TransactionDepthExceeded"}ak(w){if(w===0)return this.aZ;if(w===1)return this.aY;throw d0(new F0,""+w)}t(){return"TransactionDepthExceeded: "+this.aZ+"; maxDepth: "+this.aY}}var QL=new Y().i(s3,"com.raquo.airstream.core.AirstreamError$TransactionDepthExceeded",{aj:1,a3:1,t:1,a:1,d:1,T:1}),WX=new Y().i(1,"com.raquo.airstream.core.EventStream",{al:1,a5:1,V:1,ak:1,an:1,a6:1});function SX(w,f){var q=w.cS;if(q===void 0)w.cS=XZ().hn(j().B(z().b(new(n3.r()).C([f]))));else q.push(f)|0}function IX(w,f){var q=w.eK;if(q!==void 0){w:{var K=q.length|0,Z=0;while(Z<K){if(q[Z].ke()===f){var Q=Z;break w}Z=1+Z|0}var Q=-1}return Q>=0}else return!1}function i3(w,f){this.ci=null,this.ag=null,this.cR=null,this.aL=null,this.cT=null,this.I=null,this.eK=null,this.cS=null,this.cT=w,this.I=f,this.ci=l(),Ow(this),rQ(this),this.eK=void 0,this.cS=void 0}F=i3.prototype=new J;F.constructor=i3;function PX(){}PX.prototype=F;F.a8=function(w){A5().cs(w,this,void 0)};F.cw=function(){return this.ag};F.gj=function(w){this.ag=w};F.gR=function(w){eQ(this,w)};F.gL=function(w){wX(this,w)};F.hC=function(){if(h().iu(this.I)){var w=this.cT;if(w instanceof S2)return w.hg();return}else return sq().ew};F.is=function(w){var f=this.hC();return f!==void 0&&Qw().ip(f,w,0)};F.iT=function(w){if(w instanceof W0){if(this.is(w.as))if(IX(this,w.as))throw F1(new v,"Can not add uncontrolled `"+w.as+" <-- ???` to element `"+h().gk(this.I)+"` that already has an input controller for `"+w.as+"` property.");else SX(this,w.as)}};F.t=function(){return"ReactiveHtmlElement("+(this.I!==null?this.I.outerHTML:"tag="+this.cT.ds())+")"};F.aX=function(){return this.I};var XL=new Y().i(i3,"com.raquo.laminar.nodes.ReactiveHtmlElement",{cH:1,ab:1,Q:1,av:1,aw:1,cF:1});function EX(w,f){return Object.is(w,f)}function Bf(w){return Yw().dt(w)}var gX=new Y().i(0,"java.lang.Double",{aF:1,U:1,a:1,R:1,M:1,W:1},(w)=>typeof w==="number");var yX=new Y().i(0,"java.lang.Float",{d6:1,U:1,a:1,R:1,M:1,W:1},(w)=>b6(w));var mX=new Y().i(0,"java.lang.Integer",{d9:1,U:1,a:1,R:1,M:1,W:1},(w)=>x6(w));function $X(w,f){return f instanceof I&&(w.e===f.e&&w.f===f.f)}function _X(w){return w.e^w.f}var xX=new Y().i(0,"java.lang.Long",{aH:1,U:1,a:1,R:1,M:1,W:1},(w)=>w instanceof I);function A1(w){var f=0,q=1,K=-1+w.length|0;while(K>=0)f=f+Math.imul(w.charCodeAt(K),q)|0,q=Math.imul(31,q),K=-1+K|0;return f}function bX(w,f){return w===f}function hX(w,f){var q=IZ().jz(f);return w.indexOf(q)|0}var n3=new Y().i(0,"java.lang.String",{dg:1,a:1,R:1,ad:1,M:1,W:1},(w)=>typeof w==="string");class K7 extends F0{constructor(){super();M1(this,null,null,!0,!0)}}var GL=new Y().i(K7,"java.lang.StringIndexOutOfBoundsException",{dj:1,aG:1,S:1,L:1,t:1,a:1});function r3(){}F=r3.prototype=new q7;F.constructor=r3;function jX(){}jX.prototype=F;F.ib=function(){throw new C0("None.get")};F.al=function(){return"None"};F.aj=function(){return 0};F.ak=function(w){return C().bT(w)};F.aG=function(){return new z0(this)};F.r=function(){return 2433880};F.t=function(){return"None"};F.y=function(){this.ib()};var YL=new Y().i(r3,"scala.None$",{dD:1,aL:1,b:1,T:1,d:1,a:1}),g6;function l(){if(!g6)g6=new r3;return g6}function G1(w){this.bz=null,this.bz=w}F=G1.prototype=new q7;F.constructor=G1;function oX(){}oX.prototype=F;F.y=function(){return this.bz};F.al=function(){return"Some"};F.aj=function(){return 1};F.ak=function(w){return w===0?this.bz:C().bT(w)};F.aG=function(){return new z0(this)};F.r=function(){return m().cB(this,-889275714,!1)};F.t=function(){return z().hc(this)};F.i=function(w){return this===w||w instanceof G1&&Q1().R(this.bz,w.bz)};var HL=new Y().i(G1,"scala.Some",{aM:1,aL:1,b:1,T:1,d:1,a:1});function Jf(){}F=Jf.prototype=new J;F.constructor=Jf;function Z7(){}Z7.prototype=F;F.bj=function(){return this.bm()};F.ai=function(w){eK(this,w)};F.bG=function(w,f,q,K){return Lw(this,w,f,q,K)};F.E=function(){return-1};function $1(w,f){return w.X=f,w.h=0,w.M=u0().bk(w.X),w}function m2(){this.X=null,this.h=0,this.M=0}F=m2.prototype=new i1;F.constructor=m2;function r1(){}r1.prototype=F;F.E=function(){return this.M-this.h|0};F.w=function(){return this.h<this.M};F.j=function(){if(this.h>=u0().bk(this.X))b().z.j();var w=z().bi(this.X,this.h);return this.h=1+this.h|0,w};F.cv=function(w){if(w>0){var f=this.h+w|0;if(f<0)var q=this.M;else var K=this.M,q=K<f?K:f;this.h=q}return this};var zL=new Y().i(m2,"scala.collection.ArrayOps$ArrayIterator",{N:1,r:1,s:1,b:1,c:1,a:1});function r9(w,f){return f<0?0:f>w.a6?w.a6:f}function w2(w){this.fN=null,this.at=0,this.a6=0,this.fN=w,this.at=0,this.a6=w.n()}F=w2.prototype=new i1;F.constructor=w2;function uX(){}uX.prototype=F;F.E=function(){return this.a6};F.w=function(){return this.a6>0};F.j=function(){if(this.a6>0){var w=this.fN.s(this.at);return this.at=1+this.at|0,this.a6=-1+this.a6|0,w}else return b().z.j()};F.cv=function(w){if(w>0){this.at=this.at+w|0;var f=this.a6-w|0;this.a6=f<0?0:f}return this};F.bX=function(w,f){var q=r9(this,w),K=r9(this,f),Z=K-q|0;return this.a6=Z<0?0:Z,this.at=this.at+q|0,this};var ML=new Y().i(w2,"scala.collection.IndexedSeqView$IndexedSeqViewIterator",{dY:1,r:1,s:1,b:1,c:1,a:1});function vX(w){if(!w.dd)w.de=new E0(new Y1(0)),w.dd=!0;return w.de}function dX(w){return!w.dd?vX(w):w.de}function a3(){this.de=null,this.h7=null,this.dd=!1,p4=this,this.h7=new E2(this)}F=a3.prototype=new J;F.constructor=a3;function lX(){}lX.prototype=F;F.i8=function(w,f){return w instanceof G7?w:this.gO(H3().gu(w,f))};F.gO=function(w){if(w===null)return null;else if(w instanceof Y1)return new E0(w);else if(w instanceof y1)return new f2(w);else if(w instanceof s1)return new i2(w);else if(w instanceof l1)return new r2(w);else if(w instanceof p1)return new n2(w);else if(w instanceof u1)return new s2(w);else if(w instanceof v1)return new p2(w);else if(w instanceof d1)return new a2(w);else if(w instanceof o1)return new l2(w);else if(zw(w,1))return new t2(w);else throw new K0(w)};F.dm=function(w,f){return this.i8(w,f)};var BL=new Y().i(a3,"scala.collection.immutable.ArraySeq$",{ed:1,aS:1,aO:1,aN:1,aP:1,a:1}),p4;function Uf(){if(!p4)p4=new a3;return p4}function t3(){this.h8=null,this.fR=null,s4=this,this.h8=new E2(this),this.fR=new g0(new Y1(0))}F=t3.prototype=new J;F.constructor=t3;function pX(){}pX.prototype=F;F.i9=function(w,f){return this.iA(H3().gu(w,f))};F.iA=function(w){if(w===null)return null;else if(w instanceof Y1)return new g0(w);else if(w instanceof y1)return new q4(w);else if(w instanceof s1)return new f4(w);else if(w instanceof l1)return new K4(w);else if(w instanceof p1)return new F4(w);else if(w instanceof u1)return new F2(w);else if(w instanceof v1)return new w4(w);else if(w instanceof d1)return new Z4(w);else if(w instanceof o1)return new e2(w);else if(zw(w,1))return new Q4(w);else throw new K0(w)};F.dm=function(w,f){return this.i9(w,f)};var JL=new Y().i(t3,"scala.collection.mutable.ArraySeq$",{eh:1,aS:1,aO:1,aN:1,aP:1,a:1}),s4;function sX(){if(!s4)s4=new t3;return s4}function e3(w){this.ce=null,this.cf=null,this.eu=null,this.ev=!1,a6(this,w,P1())}F=e3.prototype=new t6;F.constructor=e3;function iX(){}iX.prototype=F;F.gQ=function(){if(!this.ev)this.eu=kw(this),this.ev=!0;return this.eu};var UL=new Y().i(e3,"com.raquo.laminar.defs.styles.StyleProps$$anon$5",{c6:1,aa:1,I:1,a8:1,a9:1,aq:1,ar:1});function nX(w,f,q,K){return FX(w,f),w}function Lf(){}F=Lf.prototype=new Qf;F.constructor=Lf;function Nf(){}Nf.prototype=F;function $2(w){this.X=null,this.h=0,this.M=0,this.d4=null,this.d4=w,$1(this,w)}F=$2.prototype=new r1;F.constructor=$2;function rX(){}rX.prototype=F;F.iK=function(){if(this.h>=this.d4.a.length)b().z.j();var w=this.d4.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iK()};var LL=new Y().i($2,"scala.collection.ArrayOps$ArrayIterator$mcB$sp",{dL:1,N:1,r:1,s:1,b:1,c:1,a:1});function _2(w){this.X=null,this.h=0,this.M=0,this.d5=null,this.d5=w,$1(this,w)}F=_2.prototype=new r1;F.constructor=_2;function aX(){}aX.prototype=F;F.iL=function(){if(this.h>=this.d5.a.length)b().z.j();var w=this.d5.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return j1(this.iL())};var NL=new Y().i(_2,"scala.collection.ArrayOps$ArrayIterator$mcC$sp",{dM:1,N:1,r:1,s:1,b:1,c:1,a:1});function x2(w){this.X=null,this.h=0,this.M=0,this.d6=null,this.d6=w,$1(this,w)}F=x2.prototype=new r1;F.constructor=x2;function tX(){}tX.prototype=F;F.iM=function(){if(this.h>=this.d6.a.length)b().z.j();var w=this.d6.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iM()};var cL=new Y().i(x2,"scala.collection.ArrayOps$ArrayIterator$mcD$sp",{dN:1,N:1,r:1,s:1,b:1,c:1,a:1});function b2(w){this.X=null,this.h=0,this.M=0,this.d7=null,this.d7=w,$1(this,w)}F=b2.prototype=new r1;F.constructor=b2;function eX(){}eX.prototype=F;F.iN=function(){if(this.h>=this.d7.a.length)b().z.j();var w=this.d7.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iN()};var TL=new Y().i(b2,"scala.collection.ArrayOps$ArrayIterator$mcF$sp",{dO:1,N:1,r:1,s:1,b:1,c:1,a:1});function h2(w){this.X=null,this.h=0,this.M=0,this.d8=null,this.d8=w,$1(this,w)}F=h2.prototype=new r1;F.constructor=h2;function wG(){}wG.prototype=F;F.iO=function(){if(this.h>=this.d8.a.length)b().z.j();var w=this.d8.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iO()};var kL=new Y().i(h2,"scala.collection.ArrayOps$ArrayIterator$mcI$sp",{dP:1,N:1,r:1,s:1,b:1,c:1,a:1});function j2(w){this.X=null,this.h=0,this.M=0,this.d9=null,this.d9=w,$1(this,w)}F=j2.prototype=new r1;F.constructor=j2;function fG(){}fG.prototype=F;F.iP=function(){if(this.h>=this.d9.a.length)b().z.j();var w=this.d9.a[this.h],f=w.e,q=w.f;return this.h=1+this.h|0,new I(f,q)};F.j=function(){return this.iP()};var OL=new Y().i(j2,"scala.collection.ArrayOps$ArrayIterator$mcJ$sp",{dQ:1,N:1,r:1,s:1,b:1,c:1,a:1});function o2(w){this.X=null,this.h=0,this.M=0,this.da=null,this.da=w,$1(this,w)}F=o2.prototype=new r1;F.constructor=o2;function FG(){}FG.prototype=F;F.iQ=function(){if(this.h>=this.da.a.length)b().z.j();var w=this.da.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iQ()};var VL=new Y().i(o2,"scala.collection.ArrayOps$ArrayIterator$mcS$sp",{dR:1,N:1,r:1,s:1,b:1,c:1,a:1});function u2(w){this.X=null,this.h=0,this.M=0,this.fM=null,this.fM=w,$1(this,w)}F=u2.prototype=new r1;F.constructor=u2;function qG(){}qG.prototype=F;F.iR=function(){if(this.h>=this.fM.a.length)b().z.j();this.h=1+this.h|0};F.j=function(){this.iR()};var AL=new Y().i(u2,"scala.collection.ArrayOps$ArrayIterator$mcV$sp",{dS:1,N:1,r:1,s:1,b:1,c:1,a:1});function v2(w){this.X=null,this.h=0,this.M=0,this.db=null,this.db=w,$1(this,w)}F=v2.prototype=new r1;F.constructor=v2;function KG(){}KG.prototype=F;F.iS=function(){if(this.h>=this.db.a.length)b().z.j();var w=this.db.a[this.h];return this.h=1+this.h|0,w};F.j=function(){return this.iS()};var CL=new Y().i(v2,"scala.collection.ArrayOps$ArrayIterator$mcZ$sp",{dT:1,N:1,r:1,s:1,b:1,c:1,a:1});function ZG(w){return w.bj()+"(<not computed>)"}function cf(){}F=cf.prototype=new J;F.constructor=cf;function Tf(){}Tf.prototype=F;class u extends q0{constructor(w){super();this.a7=null,this.a7=w,M1(this,null,null,!0,!0)}bS(){return t9(this.a7)}al(){return"JavaScriptException"}aj(){return 1}ak(w){return w===0?this.a7:C().bT(w)}aG(){return new z0(this)}r(){return m().cB(this,-889275714,!1)}i(w){return this===w||w instanceof u&&Q1().R(this.a7,w.a7)}}var DL=new Y().i(u,"scala.scalajs.js.JavaScriptException",{bm:1,S:1,L:1,t:1,a:1,T:1,d:1});function QG(w,f,q){w.bt=!1;var K=w.br,Z=0;while(Z<(K.length|0)){var Q=K[Z];Z=1+Z|0;try{Q.aW(f)}catch(W){var X=W instanceof C1?W:new u(W);T1().an(new l0(X))}}var H=w.bs,G=0;while(G<(H.length|0)){var B=H[G];G=1+G|0,B.gC(f,q)}w.bt=!0;var N=w.c1;if(N!==void 0){var T=0,D=N.length|0;while(T<D)N[T].a9(),T=1+T|0;N.length=0}}function w8(w){this.ce=null,this.cf=null,this.es=null,this.et=!1,a6(this,w,P1())}F=w8.prototype=new t6;F.constructor=w8;function XG(){}XG.prototype=F;F.gQ=function(){if(!this.et)this.es=kw(this),this.et=!0;return this.es};var RL=new Y().i(w8,"com.raquo.laminar.defs.styles.StyleProps$$anon$4",{c5:1,aa:1,I:1,a8:1,a9:1,c7:1,aq:1,ar:1});function GG(w,f){if(typeof console<"u")if(w.fB&&!!console.error)console.error(f);else console.log(f)}function N2(w){this.fB=!1,this.bw=null,this.fB=w,nX(this,new h3,!1,null),this.bw=""}F=N2.prototype=new Nf;F.constructor=N2;function YG(){}YG.prototype=F;F.iw=function(w){var f=w;while(f!==""){var q=f,K=q.indexOf(`
`)|0;if(K<0)this.bw=""+this.bw+f,f="";else{var Z=this.bw,Q=f;GG(this,""+Z+Q.substring(0,K)),this.bw="";var X=f,H=1+K|0;f=X.substring(H)}}};var WL=new Y().i(N2,"java.lang.JSConsoleBasedPrintStream",{da:1,d0:1,cZ:1,aB:1,az:1,aD:1,aA:1,aC:1});function HG(w,f,q){while(!0)if(f<=0||q.k())return q;else{var K=-1+f|0,Z=q.a0();f=K,q=Z}}function kf(){this.df=null}F=kf.prototype=new Tf;F.constructor=kf;function Of(){}Of.prototype=F;F.t=function(){return this.df};F.i=function(w){return this===w};F.r=function(){return _6(this)};function Vf(){}F=Vf.prototype=new Z7;F.constructor=Vf;function Af(){}Af.prototype=F;F.t=function(){return ZG(this)};function f8(){this.df=null,this.df="Any"}F=f8.prototype=new Of;F.constructor=f8;function zG(){}zG.prototype=F;F.jf=function(){return E1.l()};F.iI=function(w){return new Y1(w)};var SL=new Y().i(f8,"scala.reflect.ManifestFactory$AnyManifest$",{ev:1,ex:1,ew:1,eu:1,et:1,es:1,ey:1,a:1,d:1}),y6;function Cf(){if(!y6)y6=new f8;return y6}function k1(w,f){if(w===f)return!0;else{if(MG(f)){if(f.gg(w))return w.dy(f)}return!1}}function MG(w){return!!(w&&w.$classData&&w.$classData.n.f)}function F8(w){this.dL=null,this.bt=!1,this.c1=null,this.br=null,this.bs=null,this.c3=!1,this.dM=null,this.c2=null,this.dM=w,this.dL=void 0,uZ(this),dQ(this),this.c2=j().B(z().b(new(WX.r()).C([])))}F=F8.prototype=new J;F.constructor=F8;function BG(){}BG.prototype=F;F.cz=function(){return this.dL};F.t=function(){return s0(this)};F.i=function(w){return this===w};F.r=function(){return _6(this)};F.gN=function(){return this};F.gC=function(w,f){new o0(new O((q)=>{QG(this,w,q)}))};F.iZ=function(){var w=this.c2,f=0,q=w.length|0;while(f<q)f7(w[f]),f=1+f|0};F.iX=function(){var w=this.c2,f=0,q=w.length|0;while(f<q)sQ(w[f],this,!1),f=1+f|0};F.iY=function(){var w=this.c2,f=0,q=w.length|0;while(f<q)lZ(w[f],this),f=1+f|0};F.cu=function(){return this.dM.a9()+".events"};var IL=new Y().i(F8,"com.raquo.airstream.eventbus.EventBusStream",{bA:1,a5:1,V:1,ak:1,an:1,a6:1,al:1,bw:1,bx:1,am:1,bn:1});function Df(){}F=Df.prototype=new Z7;F.constructor=Df;function Q7(){}Q7.prototype=F;F.gg=function(w){return!0};F.i=function(w){return k1(this,w)};F.r=function(){return m().jg(this)};F.t=function(){return BX(this)};F.gy=function(w){return bQ(this,w)};F.k=function(){return hQ(this)};F.dy=function(w){return w7(this,w)};F.dq=function(w){return this.gy(w|0)};function Rf(){}F=Rf.prototype=new Af;F.constructor=Rf;function Wf(){}Wf.prototype=F;function JG(w){return!!(w&&w.$classData&&w.$classData.n.n)}function UG(w){return!!(w&&w.$classData&&w.$classData.n.a2)}function LG(w){}function NG(w,f){return w.bC=f,w}function Sf(){this.bC=null}F=Sf.prototype=new Wf;F.constructor=Sf;function If(){}If.prototype=F;F.s=function(w){return this.bC.s(w)};F.n=function(){return this.bC.n()};F.k=function(){return this.bC.k()};function q8(){this.eh=null,this.ek=!1,this.e5=null,this.e6=!1,this.e3=null,this.e4=!1,this.ep=null,this.eq=!1,this.e9=null,this.ea=!1,this.ed=null,this.ee=!1,this.eb=null,this.ec=!1,this.ef=null,this.eg=!1,this.e1=null,this.e2=!1,this.e7=null,this.e8=!1,this.ei=null,this.ej=!1,this.gV=null,this.el=null,this.em=!1,this.cL=null,this.gT=null,this.gU=null,this.en=null,this.eo=!1,uq(this),hq(this),xq(this),bq(this),LG(this)}F=q8.prototype=new J;F.constructor=q8;function cG(){}cG.prototype=F;F.j3=function(){if(!this.ek)this.eh=l6(new R2,"p",!1),this.ek=!0;return this.eh};F.K=function(){if(!this.e6)this.e5=l6(new R2,"div",!1),this.e6=!0;return this.e5};F.hx=function(){if(!this.e4)this.e3=new W0("checked",o().er),this.e4=!0;return this.e3};F.gP=function(){if(!this.eq)this.ep=new W0("value",o().a5),this.eq=!0;return this.ep};F.io=function(){if(!this.ea)this.e9=new W0("id",o().a5),this.ea=!0;return this.e9};F.bU=function(){if(!this.ee)this.ed=new R0("click"),this.ee=!0;return this.ed};F.iU=function(){if(!this.ec)this.eb=new R0("change"),this.ec=!0;return this.eb};F.du=function(){if(!this.eg)this.ef=new R0("input"),this.eg=!0;return this.ef};F.hu=function(){if(!this.e2)this.e1=a6(new $3,"border",P1()),this.e2=!0;return this.e1};F.im=function(){if(!this.e8)this.e7=new w8("height"),this.e8=!0;return this.e7};F.j4=function(){if(!this.ej)this.ei=new e3("padding"),this.ej=!0;return this.ei};F.jr=function(){if(!this.em)this.el=H1(new z1,"style",o().a5),this.em=!0;return this.el};F.jt=function(){if(!this.eo)this.en=new y3(this),this.eo=!0;return this.en};var PL=new Y().i(q8,"com.raquo.laminar.api.package$$anon$1",{bU:1,c8:1,bY:1,c3:1,c2:1,c4:1,c0:1,bS:1,bO:1,bR:1,ap:1,as:1,ao:1,bP:1});function d2(w){this.bC=null,NG(this,w)}F=d2.prototype=new If;F.constructor=d2;function TG(){}TG.prototype=F;F.q=function(){return new w2(this)};F.bm=function(){return"IndexedSeqView"};F.aF=function(w){var f=this.n();return f===w?0:f<w?-1:1};F.E=function(){return this.n()};var EL=new Y().i(d2,"scala.collection.IndexedSeqView$Id",{dX:1,e7:1,dI:1,dJ:1,h:1,i:1,b:1,k:1,c:1,j:1,eb:1,a:1,e6:1,l:1,dW:1,o:1});function Pf(){}F=Pf.prototype=new Q7;F.constructor=Pf;function X7(){}X7.prototype=F;function kG(w,f){return!Ef(f)||w.n()===f.n()}function OG(w,f){if(Ef(f))if(w===f)return!0;else{var q=w.n(),K=q===f.n();if(K){var Z=0,Q=w.g5(),X=f.g5(),H=Q<X?Q:X,G=q>>31,B=H>>31,N=H<<1,T=H>>>31|0|B<<1;if(G===T?(-2147483648^q)>(-2147483648^N):G>T)var D=H;else var D=q;while(Z<D&&K)K=Q1().R(w.s(Z),f.s(Z)),Z=1+Z|0;if(Z<q&&K){var W=w.q().cv(Z),_=f.q().cv(Z);while(K&&W.w())K=Q1().R(W.j(),_.j())}}return K}else return w7(w,f)}function Ef(w){return!!(w&&w.$classData&&w.$classData.n.w)}function gf(){}F=gf.prototype=new Q7;F.constructor=gf;function K8(){}K8.prototype=F;function yf(){}F=yf.prototype=new K8;F.constructor=yf;function mf(){}mf.prototype=F;F.g2=function(w){return i6(this,w)};function G7(){}F=G7.prototype=new X7;F.constructor=G7;function _1(){}_1.prototype=F;F.gg=function(w){return kG(this,w)};F.dy=function(w){return OG(this,w)};F.bm=function(){return"IndexedSeq"};F.aF=function(w){var f=this.n();return f===w?0:f<w?-1:1};F.E=function(){return this.n()};F.iC=function(w){var f=new Y1(this.n()),q=0;while(q<f.a.length)f.a[q]=w.g(this.s(q)),q=1+q|0;return Uf().gO(f)};F.bj=function(){return"ArraySeq"};F.g5=function(){return 2147483647};F.gz=function(w){return this.iC(w)};function O1(){}F=O1.prototype=new K8;F.constructor=O1;function x1(){}x1.prototype=F;F.bm=function(){return"IndexedSeq"};F.aF=function(w){var f=this.n();return f===w?0:f<w?-1:1};F.E=function(){return this.n()};F.bj=function(){return"ArraySeq"};F.i=function(w){if(w instanceof O1){if(u0().bk(this.aa())!==u0().bk(w.aa()))return!1}return k1(this,w)};function l2(w){this.aM=null,this.aM=w}F=l2.prototype=new _1;F.constructor=l2;function VG(){}VG.prototype=F;F.n=function(){return this.aM.a.length};F.r=function(){var w=m();return w.gf(this.aM,w.x)};F.i=function(w){return w instanceof l2?i().gs(this.aM,w.aM):k1(this,w)};F.q=function(){return new v2(this.aM)};F.bP=function(w){return this.aM.a[w]};F.g=function(w){return this.bP(w|0)};F.s=function(w){return this.bP(w)};var gL=new Y().i(l2,"scala.collection.immutable.ArraySeq$ofBoolean",{aV:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function p2(w){this.aN=null,this.aN=w}F=p2.prototype=new _1;F.constructor=p2;function AG(){}AG.prototype=F;F.n=function(){return this.aN.a.length};F.bH=function(w){return this.aN.a[w]};F.r=function(){var w=m();return w.g7(this.aN,w.x)};F.i=function(w){return w instanceof p2?i().gl(this.aN,w.aN):k1(this,w)};F.q=function(){return new $2(this.aN)};F.g=function(w){return this.bH(w|0)};F.s=function(w){return this.bH(w)};var yL=new Y().i(p2,"scala.collection.immutable.ArraySeq$ofByte",{aW:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function s2(w){this.aw=null,this.aw=w}F=s2.prototype=new _1;F.constructor=s2;function CG(){}CG.prototype=F;F.n=function(){return this.aw.a.length};F.bI=function(w){return this.aw.a[w]};F.r=function(){var w=m();return w.g8(this.aw,w.x)};F.i=function(w){return w instanceof s2?i().gm(this.aw,w.aw):k1(this,w)};F.q=function(){return new _2(this.aw)};F.bG=function(w,f,q,K){return new F2(this.aw).bG(w,f,q,K)};F.g=function(w){return j1(this.bI(w|0))};F.s=function(w){return j1(this.bI(w))};var mL=new Y().i(s2,"scala.collection.immutable.ArraySeq$ofChar",{aX:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function i2(w){this.aO=null,this.aO=w}F=i2.prototype=new _1;F.constructor=i2;function DG(){}DG.prototype=F;F.n=function(){return this.aO.a.length};F.r=function(){var w=m();return w.g9(this.aO,w.x)};F.i=function(w){return w instanceof i2?i().gn(this.aO,w.aO):k1(this,w)};F.q=function(){return new x2(this.aO)};F.bK=function(w){return this.aO.a[w]};F.g=function(w){return this.bK(w|0)};F.s=function(w){return this.bK(w)};var $L=new Y().i(i2,"scala.collection.immutable.ArraySeq$ofDouble",{aY:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function n2(w){this.aP=null,this.aP=w}F=n2.prototype=new _1;F.constructor=n2;function RG(){}RG.prototype=F;F.n=function(){return this.aP.a.length};F.r=function(){var w=m();return w.ga(this.aP,w.x)};F.i=function(w){return w instanceof n2?i().go(this.aP,w.aP):k1(this,w)};F.q=function(){return new b2(this.aP)};F.bL=function(w){return this.aP.a[w]};F.g=function(w){return this.bL(w|0)};F.s=function(w){return this.bL(w)};var _L=new Y().i(n2,"scala.collection.immutable.ArraySeq$ofFloat",{aZ:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function f2(w){this.aQ=null,this.aQ=w}F=f2.prototype=new _1;F.constructor=f2;function WG(){}WG.prototype=F;F.n=function(){return this.aQ.a.length};F.r=function(){var w=m();return w.gb(this.aQ,w.x)};F.i=function(w){return w instanceof f2?i().gp(this.aQ,w.aQ):k1(this,w)};F.q=function(){return new h2(this.aQ)};F.bM=function(w){return this.aQ.a[w]};F.g=function(w){return this.bM(w|0)};F.s=function(w){return this.bM(w)};var xL=new Y().i(f2,"scala.collection.immutable.ArraySeq$ofInt",{b0:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function r2(w){this.aR=null,this.aR=w}F=r2.prototype=new _1;F.constructor=r2;function SG(){}SG.prototype=F;F.n=function(){return this.aR.a.length};F.r=function(){var w=m();return w.gc(this.aR,w.x)};F.i=function(w){return w instanceof r2?i().gq(this.aR,w.aR):k1(this,w)};F.q=function(){return new j2(this.aR)};F.bN=function(w){return this.aR.a[w]};F.g=function(w){return this.bN(w|0)};F.s=function(w){return this.bN(w)};var bL=new Y().i(r2,"scala.collection.immutable.ArraySeq$ofLong",{b1:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function E0(w){this.aS=null,this.aS=w}F=E0.prototype=new _1;F.constructor=E0;function IG(){}IG.prototype=F;F.n=function(){return this.aS.a.length};F.s=function(w){return this.aS.a[w]};F.r=function(){var w=m();return w.g6(this.aS,w.x)};F.i=function(w){return w instanceof E0?H3().gt(this.aS,w.aS):k1(this,w)};F.q=function(){return $1(new m2,this.aS)};F.g=function(w){return this.s(w|0)};var hL=new Y().i(E0,"scala.collection.immutable.ArraySeq$ofRef",{b2:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function a2(w){this.aT=null,this.aT=w}F=a2.prototype=new _1;F.constructor=a2;function PG(){}PG.prototype=F;F.n=function(){return this.aT.a.length};F.bJ=function(w){return this.aT.a[w]};F.r=function(){var w=m();return w.gd(this.aT,w.x)};F.i=function(w){return w instanceof a2?i().gr(this.aT,w.aT):k1(this,w)};F.q=function(){return new o2(this.aT)};F.g=function(w){return this.bJ(w|0)};F.s=function(w){return this.bJ(w)};var jL=new Y().i(a2,"scala.collection.immutable.ArraySeq$ofShort",{b3:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function t2(w){this.bh=null,this.bh=w}F=t2.prototype=new _1;F.constructor=t2;function EG(){}EG.prototype=F;F.n=function(){return this.bh.a.length};F.r=function(){var w=m();return w.ge(this.bh,w.x)};F.i=function(w){return w instanceof t2?this.bh.a.length===w.bh.a.length:k1(this,w)};F.q=function(){return new u2(this.bh)};F.bO=function(w){};F.g=function(w){this.bO(w|0)};F.s=function(w){this.bO(w)};var oL=new Y().i(t2,"scala.collection.immutable.ArraySeq$ofUnit",{b4:1,J:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,w:1,n:1,o:1,P:1,A:1,q:1,p:1,O:1,a:1});function gG(w,f,q,K){while(!0)if(f===K)return q.k()?0:1;else if(q.k())return-1;else{var Z=1+f|0,Q=q.a0();f=Z,q=Q}}function yG(w,f,q){while(!0)if(f===q)return!0;else{var K=f.k(),Z=q.k();if(!(K||Z)&&Q1().R(f.ac(),q.ac())){var Q=f.a0(),X=q.a0();f=Q,q=X}else return K&&Z}}function Z8(){}F=Z8.prototype=new X7;F.constructor=Z8;function Y7(){}Y7.prototype=F;F.q=function(){return new v3(this)};F.bm=function(){return"LinearSeq"};F.gy=function(w){return Hf(this,w)};F.s=function(w){return zf(this,w)};F.dy=function(w){return kX(this,w)};F.k=function(){return this===P1()};F.iD=function(w){if(this===P1())return P1();else{var f=new p0(w.g(this.ac()),P1()),q=f,K=this.a0();while(K!==P1()){var Z=new p0(w.g(K.ac()),P1());q.cp=Z,q=Z,K=K.a0()}return f}};F.ai=function(w){var f=this;while(!f.k())w.g(f.ac()),f=f.a0()};F.n=function(){var w=this,f=0;while(!w.k())f=1+f|0,w=w.a0();return f};F.aF=function(w){return w<0?1:gG(this,0,this,w)};F.bj=function(){return"List"};F.i=function(w){return w instanceof Z8?yG(this,this,w):k1(this,w)};F.g=function(w){return zf(this,w|0)};F.dq=function(w){return Hf(this,w|0)};F.hL=function(w){return HG(this,w,this)};F.gz=function(w){return this.iD(w)};function e2(w){this.ax=null,this.ax=w}F=e2.prototype=new x1;F.constructor=e2;function mG(){}mG.prototype=F;F.n=function(){return this.ax.a.length};F.r=function(){var w=m();return w.gf(this.ax,w.x)};F.i=function(w){return w instanceof e2?i().gs(this.ax,w.ax):O1.prototype.i.call(this,w)};F.q=function(){return new v2(this.ax)};F.bP=function(w){return this.ax.a[w]};F.g=function(w){return this.bP(w|0)};F.s=function(w){return this.bP(w)};F.aa=function(){return this.ax};var uL=new Y().i(e2,"scala.collection.mutable.ArraySeq$ofBoolean",{b7:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function w4(w){this.ay=null,this.ay=w}F=w4.prototype=new x1;F.constructor=w4;function $G(){}$G.prototype=F;F.n=function(){return this.ay.a.length};F.bH=function(w){return this.ay.a[w]};F.r=function(){var w=m();return w.g7(this.ay,w.x)};F.i=function(w){return w instanceof w4?i().gl(this.ay,w.ay):O1.prototype.i.call(this,w)};F.q=function(){return new $2(this.ay)};F.g=function(w){return this.bH(w|0)};F.s=function(w){return this.bH(w)};F.aa=function(){return this.ay};var vL=new Y().i(w4,"scala.collection.mutable.ArraySeq$ofByte",{b8:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function F2(w){this.a4=null,this.a4=w}F=F2.prototype=new x1;F.constructor=F2;function _G(){}_G.prototype=F;F.n=function(){return this.a4.a.length};F.bI=function(w){return this.a4.a[w]};F.r=function(){var w=m();return w.g8(this.a4,w.x)};F.i=function(w){return w instanceof F2?i().gm(this.a4,w.a4):O1.prototype.i.call(this,w)};F.q=function(){return new _2(this.a4)};F.bG=function(w,f,q,K){var Z=w.Z;if(f.length!==0)Z.u=""+Z.u+f;var Q=this.a4.a.length;if(Q!==0)if(q==="")Z.hj(this.a4);else{Z.n();var X=this.a4.a[0],H=""+n4(X);Z.u=Z.u+H;var G=1;while(G<Q){Z.u=""+Z.u+q;var B=this.a4.a[G],N=""+n4(B);Z.u=Z.u+N,G=1+G|0}}if(K.length!==0)Z.u=""+Z.u+K;return w};F.g=function(w){return j1(this.bI(w|0))};F.s=function(w){return j1(this.bI(w))};F.aa=function(){return this.a4};var dL=new Y().i(F2,"scala.collection.mutable.ArraySeq$ofChar",{b9:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function f4(w){this.az=null,this.az=w}F=f4.prototype=new x1;F.constructor=f4;function xG(){}xG.prototype=F;F.n=function(){return this.az.a.length};F.r=function(){var w=m();return w.g9(this.az,w.x)};F.i=function(w){return w instanceof f4?i().gn(this.az,w.az):O1.prototype.i.call(this,w)};F.q=function(){return new x2(this.az)};F.bK=function(w){return this.az.a[w]};F.g=function(w){return this.bK(w|0)};F.s=function(w){return this.bK(w)};F.aa=function(){return this.az};var lL=new Y().i(f4,"scala.collection.mutable.ArraySeq$ofDouble",{ba:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function F4(w){this.aA=null,this.aA=w}F=F4.prototype=new x1;F.constructor=F4;function bG(){}bG.prototype=F;F.n=function(){return this.aA.a.length};F.r=function(){var w=m();return w.ga(this.aA,w.x)};F.i=function(w){return w instanceof F4?i().go(this.aA,w.aA):O1.prototype.i.call(this,w)};F.q=function(){return new b2(this.aA)};F.bL=function(w){return this.aA.a[w]};F.g=function(w){return this.bL(w|0)};F.s=function(w){return this.bL(w)};F.aa=function(){return this.aA};var pL=new Y().i(F4,"scala.collection.mutable.ArraySeq$ofFloat",{bb:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function q4(w){this.aB=null,this.aB=w}F=q4.prototype=new x1;F.constructor=q4;function hG(){}hG.prototype=F;F.n=function(){return this.aB.a.length};F.r=function(){var w=m();return w.gb(this.aB,w.x)};F.i=function(w){return w instanceof q4?i().gp(this.aB,w.aB):O1.prototype.i.call(this,w)};F.q=function(){return new h2(this.aB)};F.bM=function(w){return this.aB.a[w]};F.g=function(w){return this.bM(w|0)};F.s=function(w){return this.bM(w)};F.aa=function(){return this.aB};var sL=new Y().i(q4,"scala.collection.mutable.ArraySeq$ofInt",{bc:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function K4(w){this.aC=null,this.aC=w}F=K4.prototype=new x1;F.constructor=K4;function jG(){}jG.prototype=F;F.n=function(){return this.aC.a.length};F.r=function(){var w=m();return w.gc(this.aC,w.x)};F.i=function(w){return w instanceof K4?i().gq(this.aC,w.aC):O1.prototype.i.call(this,w)};F.q=function(){return new j2(this.aC)};F.bN=function(w){return this.aC.a[w]};F.g=function(w){return this.bN(w|0)};F.s=function(w){return this.bN(w)};F.aa=function(){return this.aC};var iL=new Y().i(K4,"scala.collection.mutable.ArraySeq$ofLong",{bd:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function g0(w){this.aD=null,this.aD=w}F=g0.prototype=new x1;F.constructor=g0;function oG(){}oG.prototype=F;F.n=function(){return this.aD.a.length};F.s=function(w){return this.aD.a[w]};F.r=function(){var w=m();return w.g6(this.aD,w.x)};F.i=function(w){return w instanceof g0?H3().gt(this.aD,w.aD):O1.prototype.i.call(this,w)};F.q=function(){return $1(new m2,this.aD)};F.g=function(w){return this.s(w|0)};F.aa=function(){return this.aD};var nL=new Y().i(g0,"scala.collection.mutable.ArraySeq$ofRef",{be:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Z4(w){this.aE=null,this.aE=w}F=Z4.prototype=new x1;F.constructor=Z4;function uG(){}uG.prototype=F;F.n=function(){return this.aE.a.length};F.bJ=function(w){return this.aE.a[w]};F.r=function(){var w=m();return w.gd(this.aE,w.x)};F.i=function(w){return w instanceof Z4?i().gr(this.aE,w.aE):O1.prototype.i.call(this,w)};F.q=function(){return new o2(this.aE)};F.g=function(w){return this.bJ(w|0)};F.s=function(w){return this.bJ(w)};F.aa=function(){return this.aE};var rL=new Y().i(Z4,"scala.collection.mutable.ArraySeq$ofShort",{bf:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function Q4(w){this.aU=null,this.aU=w}F=Q4.prototype=new x1;F.constructor=Q4;function vG(){}vG.prototype=F;F.n=function(){return this.aU.a.length};F.r=function(){var w=m();return w.ge(this.aU,w.x)};F.i=function(w){return w instanceof Q4?this.aU.a.length===w.aU.a.length:O1.prototype.i.call(this,w)};F.q=function(){return new u2(this.aU)};F.bO=function(w){};F.g=function(w){this.bO(w|0)};F.s=function(w){this.bO(w)};F.aa=function(){return this.aU};var aL=new Y().i(Q4,"scala.collection.mutable.ArraySeq$ofUnit",{bg:1,K:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,D:1,n:1,o:1,E:1,q:1,p:1,a:1});function p0(w,f){this.dc=null,this.cp=null,this.dc=w,this.cp=f}F=p0.prototype=new Y7;F.constructor=p0;function dG(){}dG.prototype=F;F.ac=function(){return this.dc};F.al=function(){return"::"};F.aj=function(){return 2};F.ak=function(w){switch(w){case 0:return this.dc;case 1:return this.cp;default:return C().bT(w)}};F.aG=function(){return new z0(this)};F.a0=function(){return this.cp};var tL=new Y().i(p0,"scala.collection.immutable.$colon$colon",{ec:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a2:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1});function Q8(){}F=Q8.prototype=new Y7;F.constructor=Q8;function lG(){}lG.prototype=F;F.ij=function(){throw new C0("head of empty list")};F.jw=function(){throw new F7("tail of empty list")};F.E=function(){return 0};F.q=function(){return b().z};F.al=function(){return"Nil"};F.aj=function(){return 0};F.ak=function(w){return C().bT(w)};F.aG=function(){return new z0(this)};F.a0=function(){this.jw()};F.ac=function(){this.ij()};var eL=new Y().i(Q8,"scala.collection.immutable.Nil$",{ef:1,ag:1,v:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,y:1,x:1,z:1,b5:1,a2:1,aR:1,b6:1,aT:1,q:1,p:1,A:1,aU:1,a:1,T:1}),m6;function P1(){if(!m6)m6=new Q8;return m6}function pG(w,f){return w.Z=f,w}function sG(w){return pG(w,new x3),w}function X8(){this.Z=null}F=X8.prototype=new K8;F.constructor=X8;function iG(){}iG.prototype=F;F.bm=function(){return"IndexedSeq"};F.q=function(){return new w2(new d2(this))};F.aF=function(w){var f=this.Z.n();return f===w?0:f<w?-1:1};F.g2=function(w){return i6(this,w)};F.n=function(){return this.Z.n()};F.E=function(){return this.Z.n()};F.he=function(w){var f=this.Z,q=""+n4(w);return f.u=f.u+q,this};F.t=function(){return this.Z.u};F.k=function(){return this.Z.n()===0};F.gJ=function(){return this.Z.u};F.dj=function(w){return this.he(c2(w))};F.g=function(w){var f=w|0;return j1(this.Z.gh(f))};F.s=function(w){return j1(this.Z.gh(w))};var wN=new Y().i(X8,"scala.collection.mutable.StringBuilder",{en:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,el:1,bh:1,bj:1,bi:1,D:1,n:1,o:1,E:1,ad:1,a:1});function nG(w,f){return w.aV=f,w}function rG(w){return nG(w,[]),w}function G8(){this.aV=null}F=G8.prototype=new mf;F.constructor=G8;function aG(){}aG.prototype=F;F.bm=function(){return"IndexedSeq"};F.q=function(){return new w2(new d2(this))};F.aF=function(w){var f=this.aV.length|0;return f===w?0:f<w?-1:1};F.s=function(w){return this.aV[w]};F.n=function(){return this.aV.length|0};F.E=function(){return this.aV.length|0};F.bj=function(){return"WrappedArray"};F.gJ=function(){return this};F.dj=function(w){return this.aV.push(w),this};F.g=function(w){var f=w|0;return this.aV[f]};var fN=new Y().i(G8,"scala.scalajs.js.WrappedArray",{eO:1,eg:1,B:1,m:1,h:1,i:1,b:1,k:1,c:1,j:1,f:1,g:1,e:1,l:1,d:1,G:1,F:1,H:1,C:1,u:1,ei:1,bj:1,bi:1,em:1,q:1,p:1,D:1,n:1,o:1,E:1,ek:1,bh:1,a:1});a4=new I(0,0);Gq.z=a4;zK(new(n3.r()).C([]));
